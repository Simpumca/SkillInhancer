// Day 20 — Azure for .NET Tech Leads. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 20,
  title: {
    en: "Azure for .NET Tech Leads — App Service, Functions, messaging, Key Vault and Managed Identity, APIM, monitoring, Azure SQL",
    hi: "Azure — .NET Tech Leads के लिए: App Service, Functions, messaging, Key Vault और Managed Identity, APIM, monitoring, Azure SQL",
    hg: "Azure — .NET Tech Leads ke liye: App Service, Functions, messaging, Key Vault aur Managed Identity, APIM, monitoring, Azure SQL"
  },
  summary: {
    en: `<p>Azure is your weakest topic (2/10), and that is fine: a Tech Lead is not asked to click through the portal. The questions are "<b>which service would you pick, why, and how do you keep it secure and observable?</b>" Today you learn the map from the ground up, and the few facts interviewers test.</p>
<ul>
<li><b>Hosting:</b> App Service (a managed web host: plan, slots, scale up and out, Always On) for most web APIs; Azure Functions for event-driven code (isolated worker model; the in-process model's support ends 10 November 2026); Container Apps or AKS when you need containers. Pick the simplest that fits.</li>
<li><b>Functions plans:</b> Flex Consumption (serverless, can scale to zero, always-ready instances optional), Premium (pre-warmed), Dedicated (App Service plan), and the legacy Consumption plan. Scale to zero saves money but has cold starts.</li>
<li><b>Messaging, the classic "which one?":</b> <b>Service Bus</b> for business commands (queues, topics, sessions, dead-letter, duplicate detection); <b>Event Grid</b> to route "something happened" events (push); <b>Event Hubs</b> for high-volume streams (partitions, consumer groups). Storage Queues are the simple, cheap-and-basic option.</li>
<li><b>Identity first:</b> no secrets in appsettings (Day 12). Use a <b>Managed Identity</b>, <code>DefaultAzureCredential</code> in code, and <b>Key Vault</b> for the secrets that remain.</li>
<li><b>Edge and data:</b> API Management is the managed gateway (policies: rate limit, JWT validation; YARP comparison from Day 16). Azure SQL: vCore or DTU, serverless, elastic pools; RCSI is on by default in Azure SQL Database (Day 18).</li>
<li><b>Observability first:</b> Application Insights and Azure Monitor with OpenTelemetry (<code>UseAzureMonitor()</code>), so traces, metrics and logs exist before the first incident.</li>
</ul>
<p>No prices here, and for quotas, tiers and limits the rule is "check the current docs". Plan (about 1 hour 15 minutes): Short mode, then Q&amp;A aloud, then the code sections (all compile-checked, no Azure account needed), then the seven puzzles, which run offline.</p>`,
    hi: `<p>Azure तुम्हारा सबसे कमज़ोर topic है (2/10), और यह ठीक है: Tech Lead से portal पर click करना नहीं पूछा जाता। सवाल होता है "<b>कौन-सी service चुनोगे, क्यों, और उसे secure और observable कैसे रखोगे?</b>" आज तुम map को ground से सीखोगे, और वे कुछ facts जो interviewers पूछते हैं।</p>
<ul>
<li><b>Hosting:</b> ज़्यादातर web APIs के लिए App Service (managed web host: plan, slots, scale up और out, Always On); event-driven code के लिए Azure Functions (isolated worker model; in-process model का support 10 November 2026 को खत्म होता है); containers चाहिए तो Container Apps या AKS। जो सबसे simple फिट बैठे वही चुनो।</li>
<li><b>Functions plans:</b> Flex Consumption (serverless, zero तक scale हो सकता है, always-ready instances optional), Premium (pre-warmed), Dedicated (App Service plan), और legacy Consumption plan। Scale to zero पैसे बचाता है पर cold start आता है।</li>
<li><b>Messaging, classic "कौन-सा?":</b> business commands के लिए <b>Service Bus</b> (queues, topics, sessions, dead-letter, duplicate detection); "कुछ हुआ" वाले events route करने के लिए <b>Event Grid</b> (push); high-volume streams के लिए <b>Event Hubs</b> (partitions, consumer groups)। Storage Queues सादा और basic option है।</li>
<li><b>Identity पहले:</b> appsettings में secrets नहीं (Day 12)। <b>Managed Identity</b>, code में <code>DefaultAzureCredential</code>, और बचे हुए secrets के लिए <b>Key Vault</b>।</li>
<li><b>Edge और data:</b> API Management managed gateway है (policies: rate limit, JWT validation; YARP से तुलना Day 16 में)। Azure SQL: vCore या DTU, serverless, elastic pools; Azure SQL Database में RCSI by default on है (Day 18)।</li>
<li><b>Observability पहले:</b> OpenTelemetry (<code>UseAzureMonitor()</code>) के साथ Application Insights और Azure Monitor, ताकि पहले incident से पहले ही traces, metrics और logs मौजूद हों।</li>
</ul>
<p>यहाँ कोई prices नहीं हैं, और quotas, tiers, limits के लिए rule है "current docs check करो"। Plan (लगभग 1 घंटा 15 मिनट): पहले Short mode, फिर Q&amp;A ज़ोर से, फिर code sections (सब compile-check हुए हैं, Azure account नहीं चाहिए), फिर सात puzzles जो offline चलते हैं।</p>`,
    hg: `<p>Azure tumhara sabse kamzor topic hai (2/10), aur yeh theek hai: Tech Lead se portal par click karna nahi poocha jaata. Sawaal hota hai "<b>kaun-si service chunoge, kyun, aur use secure aur observable kaise rakhoge?</b>" Aaj tum map ko ground se seekhoge, aur woh kuch facts jo interviewers poochte hain.</p>
<ul>
<li><b>Hosting:</b> zyadatar web APIs ke liye App Service (managed web host: plan, slots, scale up aur out, Always On); event-driven code ke liye Azure Functions (isolated worker model; in-process model ka support 10 November 2026 ko khatam hota hai); containers chahiye to Container Apps ya AKS. Jo sabse simple fit baithe wahi chuno.</li>
<li><b>Functions plans:</b> Flex Consumption (serverless, zero tak scale ho sakta hai, always-ready instances optional), Premium (pre-warmed), Dedicated (App Service plan), aur legacy Consumption plan. Scale to zero paise bachata hai par cold start aata hai.</li>
<li><b>Messaging, classic "kaun-sa?":</b> business commands ke liye <b>Service Bus</b> (queues, topics, sessions, dead-letter, duplicate detection); "kuch hua" wale events route karne ke liye <b>Event Grid</b> (push); high-volume streams ke liye <b>Event Hubs</b> (partitions, consumer groups). Storage Queues saada aur basic option hai.</li>
<li><b>Identity pehle:</b> appsettings mein secrets nahi (Day 12). <b>Managed Identity</b>, code mein <code>DefaultAzureCredential</code>, aur bache hue secrets ke liye <b>Key Vault</b>.</li>
<li><b>Edge aur data:</b> API Management managed gateway hai (policies: rate limit, JWT validation; YARP se tulna Day 16 mein). Azure SQL: vCore ya DTU, serverless, elastic pools; Azure SQL Database mein RCSI by default on hai (Day 18).</li>
<li><b>Observability pehle:</b> OpenTelemetry (<code>UseAzureMonitor()</code>) ke saath Application Insights aur Azure Monitor, taaki pehle incident se pehle hi traces, metrics aur logs maujood hon.</li>
</ul>
<p>Yahan koi prices nahi hain, aur quotas, tiers, limits ke liye rule hai "current docs check karo". Plan (lagbhag 1 ghanta 15 minute): pehle Short mode, phir Q&amp;A zor se, phir code sections (sab compile-check hue hain, Azure account nahi chahiye), phir saat puzzles jo offline chalte hain.</p>`
  },
  sections: [
    {
      id: "hosting-and-functions-overview",
      depth: "short",
      title: {
        en: "Where code runs: App Service, Functions plans, Container Apps, AKS",
        hi: "Code कहाँ चलता है: App Service, Functions plans, Container Apps, AKS",
        hg: "Code kahan chalta hai: App Service, Functions plans, Container Apps, AKS"
      },
      body: {
        en: `<p><b>Picture — a shop in a managed mall:</b> you rent a shop (<b>App Service</b>); the mall provides the building, power and security, and several shops can share one floor (the <b>plan</b>). A <b>Function</b> is a tiffin kitchen that cooks only when an order arrives; the delay while the kitchen opens is the <b>cold start</b>.</p>
<ul>
<li><b>App Service:</b> the <b>plan</b> is the compute (VMs) and apps in the same plan share it. <b>Scale up</b> = a bigger plan size; <b>scale out</b> = more instances (manual or autoscale rules). <b>Always On</b> keeps the app loaded so the first request after idle is not slow (not available on the lowest tiers; check current tiers).</li>
<li><b>Deployment slots:</b> a staging copy of the app with its own URL. Deploy there, test, then <b>swap</b>: the platform warms the slot up and switches traffic, and a bad release is undone by swapping back. Settings marked as <b>slot settings</b> ("sticky") stay with the slot and do not move in a swap. Slots need a plan tier that supports them.</li>
<li><b>Linux vs Windows:</b> modern .NET runs well on Linux; pick Windows mainly for .NET Framework or other Windows-only needs.</li>
<li><b>Azure Functions:</b> a <b>trigger</b> starts the function (HTTP, timer, Service Bus, queue, blob, Event Grid, Event Hubs); <b>bindings</b> declare inputs and outputs. For .NET use the <b>isolated worker model</b> (your own <code>Program.cs</code>, DI, and your choice of .NET version). The older <b>in-process model</b> reaches the end of support on <b>10 November 2026</b>, so new work must be isolated.</li>
<li><b>Hosting plans:</b> <b>Flex Consumption</b> (serverless, Linux, scales to zero, optional always-ready instances, VNet integration; the recommended serverless plan for new apps); <b>Premium</b> (pre-warmed and always-ready instances, VNet, no cold start for those); <b>Dedicated</b> (an App Service plan you already run); legacy <b>Consumption</b> (Linux Consumption is being retired, Windows still exists; check current status).</li>
<li><b>Durable Functions:</b> an extension where an <b>orchestrator</b> function runs a long workflow in code (steps, waits, retries). It is like the saga from Day 16, and the orchestrator code must be deterministic because it is replayed.</li>
<li><b>Containers:</b> <b>Container Apps</b> = containers with scale to zero and event-driven scaling, no Kubernetes to run; <b>AKS</b> = full Kubernetes, maximum control and your own operations.</li>
</ul>
<p><b>When to use / when not:</b> start with App Service for a web API (simplest), Functions for event-driven or bursty work, Container Apps when you already ship containers, and AKS only when you need Kubernetes features and have people to run it. Do not pick Functions for a long, chatty, always-busy API just because it says "serverless"; and do not pick AKS because it looks impressive.</p>`,
        hi: `<p><b>Picture — managed mall में एक shop:</b> तुम shop किराए पर लेते हो (<b>App Service</b>); mall building, बिजली और security देता है, और कई shops एक floor (<b>plan</b>) share कर सकती हैं। <b>Function</b> एक tiffin kitchen है जो order आने पर ही पकाती है; kitchen खुलने में जो देर लगती है वह <b>cold start</b> है।</p>
<ul>
<li><b>App Service:</b> <b>plan</b> compute (VMs) है और एक plan की apps उसे share करती हैं। <b>Scale up</b> = बड़ा plan size; <b>scale out</b> = ज़्यादा instances (manual या autoscale rules)। <b>Always On</b> app को loaded रखता है ताकि idle के बाद पहली request slow न हो (सबसे नीचे के tiers पर नहीं मिलता; current tiers check करो)।</li>
<li><b>Deployment slots:</b> app की staging copy जिसका अपना URL होता है। वहाँ deploy करो, test करो, फिर <b>swap</b>: platform slot को warm-up करके traffic switch करता है, और खराब release वापस swap करके undo हो जाती है। जो settings <b>slot settings</b> ("sticky") mark हैं वे slot के साथ रहती हैं और swap में नहीं हिलतीं। Slots के लिए ऐसा plan tier चाहिए जो उन्हें support करे।</li>
<li><b>Linux बनाम Windows:</b> modern .NET Linux पर अच्छा चलता है; Windows मुख्य रूप से .NET Framework या दूसरी Windows-only ज़रूरतों के लिए चुनो।</li>
<li><b>Azure Functions:</b> <b>trigger</b> function को शुरू करता है (HTTP, timer, Service Bus, queue, blob, Event Grid, Event Hubs); <b>bindings</b> inputs और outputs declare करते हैं। .NET के लिए <b>isolated worker model</b> use करो (अपना <code>Program.cs</code>, DI, और .NET version की तुम्हारी choice)। पुराने <b>in-process model</b> का support <b>10 November 2026</b> को खत्म होता है, इसलिए नया काम isolated में ही हो।</li>
<li><b>Hosting plans:</b> <b>Flex Consumption</b> (serverless, Linux, zero तक scale, optional always-ready instances, VNet integration; नए apps के लिए recommended serverless plan); <b>Premium</b> (pre-warmed और always-ready instances, VNet, उन instances पर cold start नहीं); <b>Dedicated</b> (App Service plan जो तुम पहले से चला रहे हो); legacy <b>Consumption</b> (Linux Consumption retire हो रहा है, Windows अभी है; current status check करो)।</li>
<li><b>Durable Functions:</b> एक extension जिसमें <b>orchestrator</b> function लंबा workflow code में चलाता है (steps, waits, retries)। यह Day 16 के saga जैसा है, और orchestrator code deterministic होना चाहिए क्योंकि वह replay होता है।</li>
<li><b>Containers:</b> <b>Container Apps</b> = scale to zero और event-driven scaling वाले containers, Kubernetes चलाना नहीं पड़ता; <b>AKS</b> = पूरा Kubernetes, maximum control और operations खुद की।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> web API के लिए App Service से शुरू करो (सबसे simple), event-driven या bursty काम के लिए Functions, जब containers पहले से ship करते हो तब Container Apps, और AKS तभी जब Kubernetes features चाहिए और चलाने वाले लोग हों। लंबी, chatty, हमेशा busy API के लिए सिर्फ़ "serverless" सुनकर Functions मत चुनो; और AKS इसलिए मत चुनो कि वह impressive दिखता है।</p>`,
        hg: `<p><b>Picture — managed mall mein ek shop:</b> tum shop kiraye par lete ho (<b>App Service</b>); mall building, bijli aur security deta hai, aur kai shops ek floor (<b>plan</b>) share kar sakti hain. <b>Function</b> ek tiffin kitchen hai jo order aane par hi pakati hai; kitchen khulne mein jo der lagti hai woh <b>cold start</b> hai.</p>
<ul>
<li><b>App Service:</b> <b>plan</b> compute (VMs) hai aur ek plan ki apps use share karti hain. <b>Scale up</b> = bada plan size; <b>scale out</b> = zyada instances (manual ya autoscale rules). <b>Always On</b> app ko loaded rakhta hai taaki idle ke baad pehli request slow na ho (sabse neeche ke tiers par nahi milta; current tiers check karo).</li>
<li><b>Deployment slots:</b> app ki staging copy jiska apna URL hota hai. Wahan deploy karo, test karo, phir <b>swap</b>: platform slot ko warm-up karke traffic switch karta hai, aur kharab release wapas swap karke undo ho jaati hai. Jo settings <b>slot settings</b> ("sticky") mark hain woh slot ke saath rehti hain aur swap mein nahi hilti. Slots ke liye aisa plan tier chahiye jo unhe support kare.</li>
<li><b>Linux vs Windows:</b> modern .NET Linux par achha chalta hai; Windows mukhya roop se .NET Framework ya dusri Windows-only zaroorton ke liye chuno.</li>
<li><b>Azure Functions:</b> <b>trigger</b> function ko shuru karta hai (HTTP, timer, Service Bus, queue, blob, Event Grid, Event Hubs); <b>bindings</b> inputs aur outputs declare karte hain. .NET ke liye <b>isolated worker model</b> use karo (apna <code>Program.cs</code>, DI, aur .NET version ki tumhari choice). Purane <b>in-process model</b> ka support <b>10 November 2026</b> ko khatam hota hai, isliye naya kaam isolated mein hi ho.</li>
<li><b>Hosting plans:</b> <b>Flex Consumption</b> (serverless, Linux, zero tak scale, optional always-ready instances, VNet integration; naye apps ke liye recommended serverless plan); <b>Premium</b> (pre-warmed aur always-ready instances, VNet, un instances par cold start nahi); <b>Dedicated</b> (App Service plan jo tum pehle se chala rahe ho); legacy <b>Consumption</b> (Linux Consumption retire ho raha hai, Windows abhi hai; current status check karo).</li>
<li><b>Durable Functions:</b> ek extension jisme <b>orchestrator</b> function lamba workflow code mein chalata hai (steps, waits, retries). Yeh Day 16 ke saga jaisa hai, aur orchestrator code deterministic hona chahiye kyunki woh replay hota hai.</li>
<li><b>Containers:</b> <b>Container Apps</b> = scale to zero aur event-driven scaling wale containers, Kubernetes chalana nahi padta; <b>AKS</b> = poora Kubernetes, maximum control aur operations khud ki.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> web API ke liye App Service se shuru karo (sabse simple), event-driven ya bursty kaam ke liye Functions, jab containers pehle se ship karte ho tab Container Apps, aur AKS tabhi jab Kubernetes features chahiye aur chalane wale log hon. Lambi, chatty, hamesha busy API ke liye sirf "serverless" sunkar Functions mat chuno; aur AKS isliye mat chuno ki woh impressive dikhta hai.</p>`
      }
    },
    {
      id: "messaging-which-one-overview",
      depth: "short",
      title: {
        en: "Which messaging service? Service Bus vs Event Grid vs Event Hubs (and Storage Queues)",
        hi: "कौन-सी messaging service? Service Bus बनाम Event Grid बनाम Event Hubs (और Storage Queues)",
        hg: "Kaun-si messaging service? Service Bus vs Event Grid vs Event Hubs (aur Storage Queues)"
      },
      body: {
        en: `<p><b>Picture — three Indian postal ideas:</b> <b>Service Bus</b> is registered post with acknowledgement: it keeps the letter safely until the right person signs for it. <b>Event Grid</b> is a loudspeaker announcement: "the train has arrived", pushed to everyone who subscribed. <b>Event Hubs</b> is a railway track carrying a continuous flow of trains: huge volume, read in order within a lane.</p>
<ul>
<li><b>Service Bus (a broker for business messages):</b> <b>queues</b> (competing consumers) and <b>topics with subscriptions</b> (each subscription gets its own copy, with filters). Features: <b>peek-lock</b> (lock the message, then complete or abandon), <b>dead-letter queue</b>, <b>sessions</b> (FIFO order per session id), <b>duplicate detection</b>, <b>scheduled messages</b>, delivery counting. Use it for orders, payments, commands.</li>
<li><b>Event Grid (event routing, push):</b> sources (Azure services or your own topics) publish events and Event Grid <b>pushes</b> them to handlers (Functions, webhooks, queues) with retries. It carries a notification that something happened ("a blob was created"), not a durable work queue. Use it to react to changes.</li>
<li><b>Event Hubs (streaming):</b> a log of events split into <b>partitions</b>; consumers read in order inside a partition and each <b>consumer group</b> has its own position. Built for very high throughput telemetry and clickstreams, with a Kafka-compatible endpoint. Use it for streams, not for "process this order once".</li>
<li><b>Storage Queues:</b> a simple, large, cheap queue inside a storage account. No topics, no sessions, no built-in duplicate detection; the Functions queue trigger moves a failing message to a <code>-poison</code> queue after <code>maxDequeueCount</code> (default 5). Fine for basic background jobs.</li>
<li><b>Choosing:</b> need ordering, DLQ, topics, transactions or careful handling of business commands: Service Bus. Need "notify me when X happens": Event Grid. Need very high event volume for analytics: Event Hubs. Need only a plain, simple backlog: Storage Queue.</li>
</ul>
<p><b>When to use / when not:</b> do not use Event Hubs as a task queue (no per-message lock or DLQ), do not rely on Event Grid alone when the receiver needs a durable backlog (put a queue behind it), and do not use Service Bus for raw telemetry volume. Delivery is at-least-once in all of them, so every consumer must be idempotent (Day 16).</p>`,
        hi: `<p><b>Picture — तीन भारतीय डाक वाले ideas:</b> <b>Service Bus</b> acknowledgement वाली registered post है: सही आदमी के sign करने तक चिट्ठी safe रखता है। <b>Event Grid</b> loudspeaker announcement है: "train आ गई", जो subscribe किए हर आदमी तक push होती है। <b>Event Hubs</b> railway track है जिस पर trains का लगातार flow चलता है: बहुत बड़ा volume, एक lane के अंदर order में पढ़ना।</p>
<ul>
<li><b>Service Bus (business messages का broker):</b> <b>queues</b> (competing consumers) और <b>subscriptions वाले topics</b> (हर subscription को अपनी copy मिलती है, filters के साथ)। Features: <b>peek-lock</b> (message lock करो, फिर complete या abandon), <b>dead-letter queue</b>, <b>sessions</b> (हर session id में FIFO order), <b>duplicate detection</b>, <b>scheduled messages</b>, delivery counting। Orders, payments, commands के लिए use करो।</li>
<li><b>Event Grid (event routing, push):</b> sources (Azure services या तुम्हारे अपने topics) events publish करते हैं और Event Grid उन्हें handlers (Functions, webhooks, queues) तक retries के साथ <b>push</b> करता है। यह "कुछ हुआ" की notification ले जाता है ("blob बना"), durable work queue नहीं है। बदलावों पर react करने के लिए use करो।</li>
<li><b>Event Hubs (streaming):</b> events का एक log जो <b>partitions</b> में बँटा है; consumers एक partition के अंदर order में पढ़ते हैं और हर <b>consumer group</b> की अपनी position होती है। बहुत high throughput telemetry और clickstreams के लिए बना है, Kafka-compatible endpoint के साथ। Streams के लिए use करो, "यह order एक बार process करो" के लिए नहीं।</li>
<li><b>Storage Queues:</b> storage account के अंदर simple, बड़ी, सस्ती queue। Topics नहीं, sessions नहीं, built-in duplicate detection नहीं; Functions का queue trigger fail होते message को <code>maxDequeueCount</code> (default 5) के बाद <code>-poison</code> queue में भेज देता है। Basic background jobs के लिए ठीक।</li>
<li><b>चुनाव:</b> ordering, DLQ, topics, transactions या business commands का सावधानी वाला handling चाहिए: Service Bus। "X होने पर बताओ" चाहिए: Event Grid। Analytics के लिए बहुत high event volume चाहिए: Event Hubs। सिर्फ़ सादा backlog चाहिए: Storage Queue।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> Event Hubs को task queue मत बनाओ (per-message lock या DLQ नहीं), जब receiver को durable backlog चाहिए तब Event Grid अकेला मत रखो (उसके पीछे queue लगाओ), और raw telemetry volume के लिए Service Bus मत लो। इन सब में delivery at-least-once है, इसलिए हर consumer idempotent होना चाहिए (Day 16)।</p>`,
        hg: `<p><b>Picture — teen Indian daak wale ideas:</b> <b>Service Bus</b> acknowledgement wali registered post hai: sahi aadmi ke sign karne tak chitthi safe rakhta hai. <b>Event Grid</b> loudspeaker announcement hai: "train aa gayi", jo subscribe kiye har aadmi tak push hoti hai. <b>Event Hubs</b> railway track hai jis par trains ka lagatar flow chalta hai: bahut bada volume, ek lane ke andar order mein padhna.</p>
<ul>
<li><b>Service Bus (business messages ka broker):</b> <b>queues</b> (competing consumers) aur <b>subscriptions wale topics</b> (har subscription ko apni copy milti hai, filters ke saath). Features: <b>peek-lock</b> (message lock karo, phir complete ya abandon), <b>dead-letter queue</b>, <b>sessions</b> (har session id mein FIFO order), <b>duplicate detection</b>, <b>scheduled messages</b>, delivery counting. Orders, payments, commands ke liye use karo.</li>
<li><b>Event Grid (event routing, push):</b> sources (Azure services ya tumhare apne topics) events publish karte hain aur Event Grid unhe handlers (Functions, webhooks, queues) tak retries ke saath <b>push</b> karta hai. Yeh "kuch hua" ki notification le jaata hai ("blob bana"), durable work queue nahi hai. Badlaavon par react karne ke liye use karo.</li>
<li><b>Event Hubs (streaming):</b> events ka ek log jo <b>partitions</b> mein banta hai; consumers ek partition ke andar order mein padhte hain aur har <b>consumer group</b> ki apni position hoti hai. Bahut high throughput telemetry aur clickstreams ke liye bana hai, Kafka-compatible endpoint ke saath. Streams ke liye use karo, "yeh order ek baar process karo" ke liye nahi.</li>
<li><b>Storage Queues:</b> storage account ke andar simple, badi, sasti queue. Topics nahi, sessions nahi, built-in duplicate detection nahi; Functions ka queue trigger fail hote message ko <code>maxDequeueCount</code> (default 5) ke baad <code>-poison</code> queue mein bhej deta hai. Basic background jobs ke liye theek.</li>
<li><b>Chunav:</b> ordering, DLQ, topics, transactions ya business commands ka saavdhaani wala handling chahiye: Service Bus. "X hone par batao" chahiye: Event Grid. Analytics ke liye bahut high event volume chahiye: Event Hubs. Sirf saada backlog chahiye: Storage Queue.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> Event Hubs ko task queue mat banao (per-message lock ya DLQ nahi), jab receiver ko durable backlog chahiye tab Event Grid akela mat rakho (uske peeche queue lagao), aur raw telemetry volume ke liye Service Bus mat lo. In sab mein delivery at-least-once hai, isliye har consumer idempotent hona chahiye (Day 16).</p>`
      }
    },
    {
      id: "identity-first-overview",
      depth: "short",
      title: {
        en: "Secrets and identity first: Managed Identity, DefaultAzureCredential, Key Vault",
        hi: "Secrets और identity पहले: Managed Identity, DefaultAzureCredential, Key Vault",
        hg: "Secrets aur identity pehle: Managed Identity, DefaultAzureCredential, Key Vault"
      },
      body: {
        en: `<p><b>Picture — an office ID card instead of a key under the doormat:</b> a <b>Managed Identity</b> is an employee ID that Azure itself issues and rotates for your app. The app shows the ID at the door of the database or the vault; nobody ever types or stores a password.</p>
<ul>
<li><b>Managed Identity:</b> an identity in Microsoft Entra ID for an Azure resource (App Service, Function, Container App, VM). <b>System-assigned</b> is created with the resource and deleted with it (one resource, one identity). <b>User-assigned</b> is a separate resource you create once and attach to many resources; it survives deleting any single app.</li>
<li><b>Access with RBAC:</b> the identity gets a role on the target (for example a Key Vault secrets reader role, a Storage Blob data role, a Service Bus data sender or receiver role, or a database user mapped to the identity). Give the least role at the smallest scope.</li>
<li><b>DefaultAzureCredential:</b> one line in code that tries credentials in order until one works: environment variables, workload identity, <b>managed identity</b>, Visual Studio, Visual Studio Code, Azure CLI, Azure PowerShell, Azure Developer CLI (browser sign-in is off by default). On your laptop it uses your developer login; in Azure it uses the managed identity, with no code change. The exact chain can change across package versions, so check the docs.</li>
<li><b>Prefer a specific credential in production:</b> the docs advise replacing the broad chain with a specific one such as <code>ManagedIdentityCredential</code>, so failures are easier to debug and behaviour does not depend on stray environment variables.</li>
<li><b>Key Vault:</b> a store for the secrets, keys and certificates that remain (third-party API keys, for example). Read them at startup with the <b>Key Vault configuration provider</b> (<code>AddAzureKeyVault</code>), or let App Service inject them with a <b>Key Vault reference</b> in an app setting. In a vault, <code>--</code> in the secret name maps to the <code>:</code> in a configuration key.</li>
<li><b>Link to Day 12:</b> secrets do not go in <code>appsettings.json</code> in source control. Locally use user secrets or your developer login; in production use identity plus Key Vault.</li>
</ul>
<p><b>When to use / when not:</b> use managed identity wherever the target supports Entra authentication (Storage, Service Bus, Key Vault, Azure SQL), and Key Vault for the secrets that cannot be replaced by identity. Do not put a Key Vault secret behind every config value (it adds latency, throttling risk and a failure point), and do not hand-roll a client secret when a managed identity is available.</p>`,
        hi: `<p><b>Picture — doormat के नीचे चाबी की जगह office ID card:</b> <b>Managed Identity</b> एक employee ID है जो Azure खुद तुम्हारी app के लिए बनाता और rotate करता है। App उस ID को database या vault के दरवाज़े पर दिखाती है; कोई password न type करता है न store।</p>
<ul>
<li><b>Managed Identity:</b> किसी Azure resource (App Service, Function, Container App, VM) के लिए Microsoft Entra ID में एक identity। <b>System-assigned</b> resource के साथ बनती है और उसी के साथ delete होती है (एक resource, एक identity)। <b>User-assigned</b> एक अलग resource है जो तुम एक बार बनाकर कई resources से जोड़ सकते हो; किसी एक app के delete होने पर भी रहती है।</li>
<li><b>RBAC से access:</b> identity को target पर एक role मिलता है (जैसे Key Vault secrets reader role, Storage Blob data role, Service Bus data sender या receiver role, या identity से mapped database user)। सबसे छोटा role सबसे छोटे scope पर दो।</li>
<li><b>DefaultAzureCredential:</b> code में एक line जो credentials को order में तब तक try करती है जब तक कोई चल न जाए: environment variables, workload identity, <b>managed identity</b>, Visual Studio, Visual Studio Code, Azure CLI, Azure PowerShell, Azure Developer CLI (browser sign-in default से off है)। Laptop पर यह तुम्हारा developer login use करती है; Azure में managed identity, बिना code बदले। Exact chain package versions के साथ बदल सकती है, इसलिए docs check करो।</li>
<li><b>Production में specific credential:</b> docs सलाह देते हैं कि broad chain की जगह <code>ManagedIdentityCredential</code> जैसा specific credential लगाओ, ताकि failures debug करना आसान हो और behaviour किसी भटके हुए environment variable पर निर्भर न हो।</li>
<li><b>Key Vault:</b> उन secrets, keys और certificates की store जो बचे रह जाते हैं (जैसे third-party API keys)। Startup पर <b>Key Vault configuration provider</b> (<code>AddAzureKeyVault</code>) से पढ़ो, या App Service को app setting में <b>Key Vault reference</b> से inject करने दो। Vault में secret के नाम का <code>--</code> configuration key के <code>:</code> से map होता है।</li>
<li><b>Day 12 से link:</b> secrets source control वाले <code>appsettings.json</code> में नहीं जाते। Local में user secrets या developer login; production में identity plus Key Vault।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> जहाँ target Entra authentication support करता है (Storage, Service Bus, Key Vault, Azure SQL) वहाँ managed identity use करो, और Key Vault उन secrets के लिए जिन्हें identity से बदला नहीं जा सकता। हर config value के पीछे Key Vault secret मत लगाओ (latency, throttling का risk और एक failure point बढ़ता है), और managed identity मौजूद हो तो hand-made client secret मत बनाओ।</p>`,
        hg: `<p><b>Picture — doormat ke neeche chaabi ki jagah office ID card:</b> <b>Managed Identity</b> ek employee ID hai jo Azure khud tumhari app ke liye banata aur rotate karta hai. App us ID ko database ya vault ke darwaze par dikhati hai; koi password na type karta hai na store.</p>
<ul>
<li><b>Managed Identity:</b> kisi Azure resource (App Service, Function, Container App, VM) ke liye Microsoft Entra ID mein ek identity. <b>System-assigned</b> resource ke saath banti hai aur usi ke saath delete hoti hai (ek resource, ek identity). <b>User-assigned</b> ek alag resource hai jo tum ek baar banakar kai resources se jod sakte ho; kisi ek app ke delete hone par bhi rehti hai.</li>
<li><b>RBAC se access:</b> identity ko target par ek role milta hai (jaise Key Vault secrets reader role, Storage Blob data role, Service Bus data sender ya receiver role, ya identity se mapped database user). Sabse chhota role sabse chhote scope par do.</li>
<li><b>DefaultAzureCredential:</b> code mein ek line jo credentials ko order mein tab tak try karti hai jab tak koi chal na jaye: environment variables, workload identity, <b>managed identity</b>, Visual Studio, Visual Studio Code, Azure CLI, Azure PowerShell, Azure Developer CLI (browser sign-in default se off hai). Laptop par yeh tumhara developer login use karti hai; Azure mein managed identity, bina code badle. Exact chain package versions ke saath badal sakti hai, isliye docs check karo.</li>
<li><b>Production mein specific credential:</b> docs salah dete hain ki broad chain ki jagah <code>ManagedIdentityCredential</code> jaisa specific credential lagao, taaki failures debug karna aasaan ho aur behaviour kisi bhatke hue environment variable par nirbhar na ho.</li>
<li><b>Key Vault:</b> un secrets, keys aur certificates ki store jo bache rah jaate hain (jaise third-party API keys). Startup par <b>Key Vault configuration provider</b> (<code>AddAzureKeyVault</code>) se padho, ya App Service ko app setting mein <b>Key Vault reference</b> se inject karne do. Vault mein secret ke naam ka <code>--</code> configuration key ke <code>:</code> se map hota hai.</li>
<li><b>Day 12 se link:</b> secrets source control wale <code>appsettings.json</code> mein nahi jaate. Local mein user secrets ya developer login; production mein identity plus Key Vault.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> jahan target Entra authentication support karta hai (Storage, Service Bus, Key Vault, Azure SQL) wahan managed identity use karo, aur Key Vault un secrets ke liye jinhe identity se badla nahi ja sakta. Har config value ke peeche Key Vault secret mat lagao (latency, throttling ka risk aur ek failure point badhta hai), aur managed identity maujood ho to hand-made client secret mat banao.</p>`
      }
    },
    {
      id: "functions-and-slots-in-code",
      depth: "detailed",
      title: {
        en: "In code: an isolated-worker Function with a Service Bus trigger, and the slot-swap commands",
        hi: "Code में: Service Bus trigger वाला isolated-worker Function, और slot-swap commands",
        hg: "Code mein: Service Bus trigger wala isolated-worker Function, aur slot-swap commands"
      },
      body: {
        en: `<p><b>Analogy — a kirana shop with a back door:</b> the Function is the shopkeeper who wakes only when a customer rings the bell (the trigger). A slot swap is rehearsing the new shop layout in the godown, then switching the signboards in one move.</p>
<ul>
<li>The <b>isolated worker</b> project is a normal host: <code>Program.cs</code> builds the host (DI, configuration, logging), and each function is a method with <code>[Function]</code> and a trigger attribute. The snippet needs these packages: <code>Microsoft.Azure.Functions.Worker@2.*</code>, <code>Microsoft.Azure.Functions.Worker.Extensions.ServiceBus@5.*</code> (it brings the Service Bus types), and <code>Microsoft.Extensions.Hosting@10.*</code>.</li>
<li>With the Service Bus trigger you can take <code>ServiceBusReceivedMessage</code> plus <code>ServiceBusMessageActions</code> and settle the message yourself: <b>complete</b> on success, <b>dead-letter</b> a poison message with a reason, and let an exception mean "retry" (the delivery count goes up, Day 16 idea). The handler reads <code>MessageId</code> to stay idempotent.</li>
<li>The connection uses <code>Connection = "ServiceBus"</code>: the platform reads app settings such as <code>ServiceBus__fullyQualifiedNamespace</code> and signs in with the app's managed identity, so no connection string with a key is needed.</li>
<li>The <b>bash</b> snippet (not run here) shows the slot flow with the Azure CLI: create the <code>staging</code> slot, mark a setting as a <b>slot setting</b> so it does not travel with the swap, turn on Always On, then swap. Option names are from the Azure CLI <code>az webapp</code> commands; run <code>az webapp deployment slot swap -h</code> to confirm them for your CLI version.</li>
</ul>
<p><b>When to use:</b> Function + trigger for "when this message or event arrives, do one small thing"; slots for any production web app where a bad deploy costs money. <b>When not:</b> do not put a 30-minute job inside a trigger without checking the plan's limits (use Durable Functions or a worker), and do not rely on the slot swap to hide a breaking database change (the database is shared, so use expand/contract migrations: add first, remove later).</p>`,
        hi: `<p><b>Analogy — पीछे के दरवाज़े वाली kirana shop:</b> Function वह दुकानदार है जो ग्राहक के bell बजाने (trigger) पर ही जागता है। Slot swap का मतलब है नई shop layout की godown में rehearsal, फिर signboards एक ही बार में बदल देना।</p>
<ul>
<li><b>Isolated worker</b> project एक normal host है: <code>Program.cs</code> host बनाता है (DI, configuration, logging), और हर function <code>[Function]</code> और trigger attribute वाला method है। Snippet को ये packages चाहिए: <code>Microsoft.Azure.Functions.Worker@2.*</code>, <code>Microsoft.Azure.Functions.Worker.Extensions.ServiceBus@5.*</code> (यह Service Bus types लाता है), और <code>Microsoft.Extensions.Hosting@10.*</code>।</li>
<li>Service Bus trigger के साथ तुम <code>ServiceBusReceivedMessage</code> और <code>ServiceBusMessageActions</code> ले सकते हो और message को खुद settle कर सकते हो: success पर <b>complete</b>, poison message को reason के साथ <b>dead-letter</b>, और exception का मतलब "retry" (delivery count बढ़ता है, Day 16 वाला idea)। Handler idempotent रहने के लिए <code>MessageId</code> पढ़ता है।</li>
<li>Connection <code>Connection = "ServiceBus"</code> use करता है: platform <code>ServiceBus__fullyQualifiedNamespace</code> जैसी app settings पढ़ता है और app की managed identity से sign in करता है, इसलिए key वाली connection string नहीं चाहिए।</li>
<li><b>bash</b> snippet (यहाँ चलता नहीं) Azure CLI से slot flow दिखाता है: <code>staging</code> slot बनाओ, एक setting को <b>slot setting</b> mark करो ताकि वह swap के साथ न जाए, Always On चालू करो, फिर swap। Option names Azure CLI के <code>az webapp</code> commands से हैं; अपने CLI version पर confirm करने के लिए <code>az webapp deployment slot swap -h</code> चलाओ।</li>
</ul>
<p><b>कब use करें:</b> "यह message या event आए तो एक छोटा काम करो" के लिए Function + trigger; जिस production web app में खराब deploy से नुकसान होता है उसके लिए slots। <b>कब नहीं:</b> plan की limits देखे बिना trigger के अंदर 30 मिनट का job मत रखो (Durable Functions या worker use करो), और breaking database change छुपाने के लिए slot swap पर भरोसा मत करो (database shared है, इसलिए expand/contract migrations: पहले जोड़ो, बाद में हटाओ)।</p>`,
        hg: `<p><b>Analogy — peeche ke darwaze wali kirana shop:</b> Function woh dukaandaar hai jo grahak ke bell bajaane (trigger) par hi jaagta hai. Slot swap ka matlab hai nayi shop layout ki godown mein rehearsal, phir signboards ek hi baar mein badal dena.</p>
<ul>
<li><b>Isolated worker</b> project ek normal host hai: <code>Program.cs</code> host banata hai (DI, configuration, logging), aur har function <code>[Function]</code> aur trigger attribute wala method hai. Snippet ko yeh packages chahiye: <code>Microsoft.Azure.Functions.Worker@2.*</code>, <code>Microsoft.Azure.Functions.Worker.Extensions.ServiceBus@5.*</code> (yeh Service Bus types laata hai), aur <code>Microsoft.Extensions.Hosting@10.*</code>.</li>
<li>Service Bus trigger ke saath tum <code>ServiceBusReceivedMessage</code> aur <code>ServiceBusMessageActions</code> le sakte ho aur message ko khud settle kar sakte ho: success par <b>complete</b>, poison message ko reason ke saath <b>dead-letter</b>, aur exception ka matlab "retry" (delivery count badhta hai, Day 16 wala idea). Handler idempotent rehne ke liye <code>MessageId</code> padhta hai.</li>
<li>Connection <code>Connection = "ServiceBus"</code> use karta hai: platform <code>ServiceBus__fullyQualifiedNamespace</code> jaisi app settings padhta hai aur app ki managed identity se sign in karta hai, isliye key wali connection string nahi chahiye.</li>
<li><b>bash</b> snippet (yahan chalta nahi) Azure CLI se slot flow dikhata hai: <code>staging</code> slot banao, ek setting ko <b>slot setting</b> mark karo taaki woh swap ke saath na jaye, Always On chalu karo, phir swap. Option names Azure CLI ke <code>az webapp</code> commands se hain; apne CLI version par confirm karne ke liye <code>az webapp deployment slot swap -h</code> chalao.</li>
</ul>
<p><b>Kab use karein:</b> "yeh message ya event aaye to ek chhota kaam karo" ke liye Function + trigger; jis production web app mein kharab deploy se nuksaan hota hai uske liye slots. <b>Kab nahi:</b> plan ki limits dekhe bina trigger ke andar 30 minute ka job mat rakho (Durable Functions ya worker use karo), aur breaking database change chhupane ke liye slot swap par bharosa mat karo (database shared hai, isliye expand/contract migrations: pehle jodo, baad mein hatao).</p>`
      },
      code: [
        {
          caption: {
            en: "Isolated worker: Program.cs plus a Service Bus triggered function that settles the message itself (compile-checked, never contacts Azure)",
            hi: "Isolated worker: Program.cs और message को खुद settle करने वाला Service Bus triggered function (compile-checked, Azure से कभी connect नहीं होता)",
            hg: "Isolated worker: Program.cs aur message ko khud settle karne wala Service Bus triggered function (compile-checked, Azure se kabhi connect nahi hota)"
          },
          check: "compile",
          packages: ["Microsoft.Azure.Functions.Worker@2.*", "Microsoft.Azure.Functions.Worker.Extensions.ServiceBus@5.*", "Microsoft.Extensions.Hosting@10.*"],
          src: `using Azure.Messaging.ServiceBus;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

var host = new HostBuilder()
    .ConfigureFunctionsWorkerDefaults()
    .Build();
host.Run();

public class OrderPlacedFunction(ILogger<OrderPlacedFunction> logger)
{
    // Connection = "ServiceBus" -> app setting ServiceBus__fullyQualifiedNamespace + managed identity (no key)
    [Function("OrderPlaced")]
    public async Task Run(
        [ServiceBusTrigger("orders", Connection = "ServiceBus", AutoCompleteMessages = false)]
        ServiceBusReceivedMessage message,
        ServiceBusMessageActions actions)
    {
        // MessageId is the business key the sender set, so a redelivery is easy to spot (idempotent consumer).
        logger.LogInformation("Order message {MessageId}, delivery {Count}", message.MessageId, message.DeliveryCount);

        if (message.Subject != "OrderPlaced")
        {
            await actions.DeadLetterMessageAsync(message, deadLetterReason: "UnknownSubject",
                deadLetterErrorDescription: message.Subject ?? "none");
            return;
        }

        // ... do the work; if it throws, the lock expires or the message is abandoned and it is delivered again ...
        await actions.CompleteMessageAsync(message);
    }
}`
        },
        {
          lang: "bash",
          caption: {
            en: "Azure CLI: staging slot, sticky setting, Always On, swap (not run here; confirm options with -h for your CLI version)",
            hi: "Azure CLI: staging slot, sticky setting, Always On, swap (यहाँ चलता नहीं; अपने CLI version पर -h से options confirm करो)",
            hg: "Azure CLI: staging slot, sticky setting, Always On, swap (yahan chalta nahi; apne CLI version par -h se options confirm karo)"
          },
          check: "none",
          src: `# create a staging slot next to production (needs a plan tier that supports slots)
az webapp deployment slot create --name orders-api --resource-group rg-orders-prod --slot staging

# a slot setting is "sticky": it stays with the slot and does not move in a swap
az webapp config appsettings set --name orders-api --resource-group rg-orders-prod --slot staging \\
  --slot-settings ASPNETCORE_ENVIRONMENT=Staging

# keep the app loaded after idle (tier permitting)
az webapp config set --name orders-api --resource-group rg-orders-prod --always-on true

# deploy to staging, smoke-test its own URL, then swap (swap back to undo)
az webapp deployment slot swap --name orders-api --resource-group rg-orders-prod \\
  --slot staging --target-slot production`
        }
      ]
    },
    {
      id: "service-bus-in-code",
      depth: "detailed",
      title: {
        en: "In code: Service Bus with managed identity (send, sessions, scheduled, process, dead-letter, queue settings)",
        hi: "Code में: managed identity के साथ Service Bus (send, sessions, scheduled, process, dead-letter, queue settings)",
        hg: "Code mein: managed identity ke saath Service Bus (send, sessions, scheduled, process, dead-letter, queue settings)"
      },
      body: {
        en: `<p><b>Analogy — a courier desk:</b> the sender writes a unique <b>MessageId</b> on the parcel (so a double send is spotted), an optional <b>SessionId</b> (all parcels for one customer go to one clerk, in order), and a <b>delivery date</b> if it must not leave before tomorrow.</p>
<ul>
<li><b>Client:</b> <code>new ServiceBusClient(namespace, new DefaultAzureCredential())</code>, the passwordless way. Create one client and reuse it (it owns the connection); senders and processors come from it.</li>
<li><b>Send:</b> set <code>MessageId</code> from the business key (for example the order id), <code>Subject</code>, and <code>SessionId</code> when ordering per entity matters. <code>ScheduledEnqueueTime</code> (or <code>ScheduleMessageAsync</code>) delivers it later. With duplicate detection on, a resend with the same <code>MessageId</code> inside the window is accepted and silently dropped (default window 10 minutes; Basic tier has no duplicate detection).</li>
<li><b>Receive with the processor:</b> <code>AutoCompleteMessages = false</code> and settle yourself: <code>CompleteMessageAsync</code> on success, <code>DeadLetterMessageAsync</code> for a message that can never succeed, otherwise let the exception propagate (the lock expires or you abandon, the delivery count increases). Default <b>lock duration is 1 minute (max 5)</b>; renew for longer work. <b>MaxDeliveryCount defaults to 10</b>; after that the message goes to the dead-letter queue with reason <code>MaxDeliveryCountExceeded</code>.</li>
<li><b>Queue settings:</b> the <code>ServiceBusAdministrationClient</code> can create the queue with <code>RequiresSession</code>, <code>RequiresDuplicateDetection</code>, <code>MaxDeliveryCount</code>, <code>LockDuration</code>. In real projects these usually live in Bicep or Terraform (Day 21), not in app code.</li>
<li>Peek-lock needs <b>idempotent handlers</b>: the work can finish and <code>Complete</code> can still fail, so the message returns. Day 16's inbox/idempotent consumer is the answer.</li>
</ul>
<p><b>When to use:</b> sessions when per-key ordering matters (all events of one order); scheduled messages for delayed work such as a payment reminder; dead-letter for poison messages. <b>When not:</b> do not use sessions "just in case" (one session is handled by one receiver at a time, which limits parallelism), do not rely on duplicate detection alone for business idempotency (the window is limited), and do not use receive-and-delete for anything you cannot lose.</p>`,
        hi: `<p><b>Analogy — courier desk:</b> sender parcel पर unique <b>MessageId</b> लिखता है (ताकि double send पकड़ा जाए), optional <b>SessionId</b> (एक customer के सारे parcels एक clerk के पास, order में), और अगर parcel कल से पहले नहीं जाना चाहिए तो <b>delivery date</b>।</p>
<ul>
<li><b>Client:</b> <code>new ServiceBusClient(namespace, new DefaultAzureCredential())</code>, बिना password वाला तरीका। एक client बनाओ और reuse करो (connection उसकी है); senders और processors उसी से बनते हैं।</li>
<li><b>Send:</b> <code>MessageId</code> business key से रखो (जैसे order id), <code>Subject</code>, और जब per-entity ordering ज़रूरी हो तो <code>SessionId</code>। <code>ScheduledEnqueueTime</code> (या <code>ScheduleMessageAsync</code>) उसे बाद में deliver करता है। Duplicate detection on हो तो window के अंदर वही <code>MessageId</code> दोबारा भेजने पर message accept होता है और चुपचाप drop हो जाता है (default window 10 minutes; Basic tier में duplicate detection नहीं है)।</li>
<li><b>Processor से receive:</b> <code>AutoCompleteMessages = false</code> और settle खुद करो: success पर <code>CompleteMessageAsync</code>, जो message कभी सफल नहीं हो सकता उस पर <code>DeadLetterMessageAsync</code>, वरना exception को आगे जाने दो (lock expire होता है या तुम abandon करते हो, delivery count बढ़ता है)। Default <b>lock duration 1 minute है (max 5)</b>; लंबे काम के लिए renew करो। <b>MaxDeliveryCount default 10 है</b>; उसके बाद message reason <code>MaxDeliveryCountExceeded</code> के साथ dead-letter queue में जाता है।</li>
<li><b>Queue settings:</b> <code>ServiceBusAdministrationClient</code> queue को <code>RequiresSession</code>, <code>RequiresDuplicateDetection</code>, <code>MaxDeliveryCount</code>, <code>LockDuration</code> के साथ बना सकता है। Real projects में ये अक्सर Bicep या Terraform में रहते हैं (Day 21), app code में नहीं।</li>
<li>Peek-lock को <b>idempotent handlers</b> चाहिए: काम पूरा हो सकता है और फिर भी <code>Complete</code> fail हो सकता है, तो message लौट आता है। Day 16 का inbox/idempotent consumer इसका जवाब है।</li>
</ul>
<p><b>कब use करें:</b> per-key ordering ज़रूरी हो (एक order के सारे events) तब sessions; payment reminder जैसे delayed काम के लिए scheduled messages; poison messages के लिए dead-letter। <b>कब नहीं:</b> "just in case" sessions मत लगाओ (एक session एक समय में एक receiver संभालता है, इससे parallelism घटता है), सिर्फ़ duplicate detection पर business idempotency के लिए भरोसा मत करो (window limited है), और जो खो नहीं सकते उसके लिए receive-and-delete मत लो।</p>`,
        hg: `<p><b>Analogy — courier desk:</b> sender parcel par unique <b>MessageId</b> likhta hai (taaki double send pakda jaye), optional <b>SessionId</b> (ek customer ke saare parcels ek clerk ke paas, order mein), aur agar parcel kal se pehle nahi jaana chahiye to <b>delivery date</b>.</p>
<ul>
<li><b>Client:</b> <code>new ServiceBusClient(namespace, new DefaultAzureCredential())</code>, bina password wala tareeka. Ek client banao aur reuse karo (connection uski hai); senders aur processors usi se bante hain.</li>
<li><b>Send:</b> <code>MessageId</code> business key se rakho (jaise order id), <code>Subject</code>, aur jab per-entity ordering zaroori ho to <code>SessionId</code>. <code>ScheduledEnqueueTime</code> (ya <code>ScheduleMessageAsync</code>) use baad mein deliver karta hai. Duplicate detection on ho to window ke andar wahi <code>MessageId</code> dobara bhejne par message accept hota hai aur chupchaap drop ho jaata hai (default window 10 minutes; Basic tier mein duplicate detection nahi hai).</li>
<li><b>Processor se receive:</b> <code>AutoCompleteMessages = false</code> aur settle khud karo: success par <code>CompleteMessageAsync</code>, jo message kabhi safal nahi ho sakta us par <code>DeadLetterMessageAsync</code>, warna exception ko aage jaane do (lock expire hota hai ya tum abandon karte ho, delivery count badhta hai). Default <b>lock duration 1 minute hai (max 5)</b>; lambe kaam ke liye renew karo. <b>MaxDeliveryCount default 10 hai</b>; uske baad message reason <code>MaxDeliveryCountExceeded</code> ke saath dead-letter queue mein jaata hai.</li>
<li><b>Queue settings:</b> <code>ServiceBusAdministrationClient</code> queue ko <code>RequiresSession</code>, <code>RequiresDuplicateDetection</code>, <code>MaxDeliveryCount</code>, <code>LockDuration</code> ke saath bana sakta hai. Real projects mein yeh aksar Bicep ya Terraform mein rehte hain (Day 21), app code mein nahi.</li>
<li>Peek-lock ko <b>idempotent handlers</b> chahiye: kaam poora ho sakta hai aur phir bhi <code>Complete</code> fail ho sakta hai, to message laut aata hai. Day 16 ka inbox/idempotent consumer iska jawab hai.</li>
</ul>
<p><b>Kab use karein:</b> per-key ordering zaroori ho (ek order ke saare events) tab sessions; payment reminder jaise delayed kaam ke liye scheduled messages; poison messages ke liye dead-letter. <b>Kab nahi:</b> "just in case" sessions mat lagao (ek session ek samay mein ek receiver sambhalta hai, isse parallelism ghatta hai), sirf duplicate detection par business idempotency ke liye bharosa mat karo (window limited hai), aur jo kho nahi sakte uske liye receive-and-delete mat lo.</p>`
      },
      code: [
        {
          caption: {
            en: "Send (MessageId, SessionId, scheduled) and process with manual settlement; queue settings via the admin client (compile-checked, no Azure call is made)",
            hi: "Send (MessageId, SessionId, scheduled) और manual settlement के साथ process; admin client से queue settings (compile-checked, Azure call नहीं होती)",
            hg: "Send (MessageId, SessionId, scheduled) aur manual settlement ke saath process; admin client se queue settings (compile-checked, Azure call nahi hoti)"
          },
          check: "compile",
          packages: ["Azure.Identity@1.*", "Azure.Messaging.ServiceBus@7.*"],
          src: `using Azure.Identity;
using Azure.Messaging.ServiceBus;
using Azure.Messaging.ServiceBus.Administration;

// Compile-check only: this program is never executed against Azure.
static async Task SendAsync(ServiceBusClient client)
{
    await using var sender = client.CreateSender("orders");

    var message = new ServiceBusMessage(BinaryData.FromString("{\\"orderId\\":\\"A-1001\\"}"))
    {
        MessageId = "order-A-1001-placed",   // business key: duplicate detection and idempotent consumers use it
        Subject = "OrderPlaced",
        SessionId = "customer-42",            // only if the queue requires sessions: ordering per customer
        ContentType = "application/json"
    };
    await sender.SendMessageAsync(message);

    var reminder = new ServiceBusMessage("send payment reminder") { MessageId = "order-A-1001-reminder" };
    await sender.ScheduleMessageAsync(reminder, DateTimeOffset.UtcNow.AddHours(24));
}

static ServiceBusProcessor CreateProcessor(ServiceBusClient client)
{
    var processor = client.CreateProcessor("orders", new ServiceBusProcessorOptions
    {
        AutoCompleteMessages = false,   // settle ourselves
        MaxConcurrentCalls = 4,
        MaxAutoLockRenewalDuration = TimeSpan.FromMinutes(5)
    });

    processor.ProcessMessageAsync += async args =>
    {
        if (args.Message.Subject != "OrderPlaced")
        {
            await args.DeadLetterMessageAsync(args.Message, "UnknownSubject");   // can never succeed
            return;
        }
        // handler must be idempotent: Complete can fail after the work is done
        await args.CompleteMessageAsync(args.Message);
    };
    processor.ProcessErrorAsync += args =>
    {
        Console.Error.WriteLine($"{args.ErrorSource}: {args.Exception.Message}");
        return Task.CompletedTask;
    };
    return processor;
}

static Task CreateQueueAsync(ServiceBusAdministrationClient admin) =>
    admin.CreateQueueAsync(new CreateQueueOptions("orders")
    {
        MaxDeliveryCount = 10,
        LockDuration = TimeSpan.FromMinutes(1),
        RequiresDuplicateDetection = true,
        DuplicateDetectionHistoryTimeWindow = TimeSpan.FromMinutes(10),
        RequiresSession = false
    });

var credential = new DefaultAzureCredential();   // laptop: developer login; Azure: managed identity
await using var client = new ServiceBusClient("my-namespace.servicebus.windows.net", credential);
var admin = new ServiceBusAdministrationClient("my-namespace.servicebus.windows.net", credential);
Console.WriteLine("clients created, nothing sent");
if (args.Length > 100)   // never true here: keeps the helpers referenced without calling Azure
{
    await SendAsync(client);
    CreateProcessor(client);
    await CreateQueueAsync(admin);
}`
        }
      ]
    },
    {
      id: "identity-keyvault-in-code",
      depth: "detailed",
      title: {
        en: "In code: DefaultAzureCredential, Key Vault configuration provider and Azure clients (no secrets in appsettings)",
        hi: "Code में: DefaultAzureCredential, Key Vault configuration provider और Azure clients (appsettings में secrets नहीं)",
        hg: "Code mein: DefaultAzureCredential, Key Vault configuration provider aur Azure clients (appsettings mein secrets nahi)"
      },
      body: {
        en: `<p><b>Analogy — a hotel keycard desk:</b> the hotel (Azure) gives your app a keycard (managed identity); the vault is the locker for things that still need a key. Your code only says "open the locker with my card"; it never carries a physical key.</p>
<ul>
<li><b>One credential object, many clients:</b> in ASP.NET Core, register clients with <code>AddAzureClients</code> (package <code>Microsoft.Extensions.Azure</code>) and share the credential with <code>UseCredential</code>. The snippet follows the docs advice: <code>DefaultAzureCredential</code> in Development, a specific <code>ManagedIdentityCredential</code> elsewhere.</li>
<li><b>Key Vault as configuration:</b> <code>builder.Configuration.AddAzureKeyVault(uri, credential)</code> (package <code>Azure.Extensions.AspNetCore.Configuration.Secrets</code>) loads secrets at startup. The vault name <code>Payments--ApiKey</code> becomes the key <code>Payments:ApiKey</code>, so normal options binding works (Day 12). Providers added later win, so add the vault after the defaults and its values override <code>appsettings.json</code> and environment variables.</li>
<li><b>Only outside Development:</b> the snippet adds the vault only when it is not Development, so a laptop does not need vault access (it uses user secrets from Day 12).</li>
<li><b>Display-only setup:</b> the <code>az</code> commands turn on an identity and give it the <b>Key Vault Secrets User</b> role at the vault scope, and the JSON shows a <b>Key Vault reference</b> app setting (App Service resolves it for you; no code at all). In App Service settings, <code>__</code> stands for <code>:</code>.</li>
<li><b>Secrets are rarely needed:</b> Storage, Service Bus and Azure SQL accept the identity directly, so the vault holds only true secrets (third-party keys).</li>
</ul>
<p><b>When to use:</b> the vault provider when many settings are secrets and you want one source; a Key Vault reference when you want zero code change. <b>When not:</b> do not read the vault on every request (cache or load once; the vault has throttling limits, check current limits), do not give the app the broad Contributor role "to make it work", and do not log secret values.</p>`,
        hi: `<p><b>Analogy — hotel का keycard desk:</b> hotel (Azure) तुम्हारी app को keycard देता है (managed identity); vault उन चीज़ों का locker है जिन्हें अब भी चाबी चाहिए। तुम्हारा code सिर्फ़ कहता है "मेरे card से locker खोलो"; वह असली चाबी साथ नहीं रखता।</p>
<ul>
<li><b>एक credential object, कई clients:</b> ASP.NET Core में clients को <code>AddAzureClients</code> (package <code>Microsoft.Extensions.Azure</code>) से register करो और credential को <code>UseCredential</code> से share करो। Snippet docs की सलाह मानता है: Development में <code>DefaultAzureCredential</code>, बाकी जगह specific <code>ManagedIdentityCredential</code>।</li>
<li><b>Key Vault को configuration की तरह:</b> <code>builder.Configuration.AddAzureKeyVault(uri, credential)</code> (package <code>Azure.Extensions.AspNetCore.Configuration.Secrets</code>) startup पर secrets load करता है। Vault का नाम <code>Payments--ApiKey</code> key <code>Payments:ApiKey</code> बन जाता है, इसलिए normal options binding चलती है (Day 12)। बाद में जुड़े providers जीतते हैं, इसलिए vault को defaults के बाद जोड़ो और उसकी values <code>appsettings.json</code> और environment variables को override करेंगी।</li>
<li><b>सिर्फ़ Development के बाहर:</b> snippet vault तभी जोड़ता है जब Development न हो, ताकि laptop को vault access न चाहिए (वह Day 12 के user secrets use करता है)।</li>
<li><b>Display-only setup:</b> <code>az</code> commands identity चालू करते हैं और उसे vault scope पर <b>Key Vault Secrets User</b> role देते हैं, और JSON एक <b>Key Vault reference</b> app setting दिखाता है (App Service उसे तुम्हारे लिए resolve करता है; code बिल्कुल नहीं)। App Service settings में <code>__</code> का मतलब <code>:</code> है।</li>
<li><b>Secrets की कम ही ज़रूरत पड़ती है:</b> Storage, Service Bus और Azure SQL identity सीधे accept करते हैं, इसलिए vault में सिर्फ़ असली secrets रहते हैं (third-party keys)।</li>
</ul>
<p><b>कब use करें:</b> जब कई settings secrets हों और एक source चाहिए तब vault provider; जब code में कोई बदलाव नहीं चाहिए तब Key Vault reference। <b>कब नहीं:</b> हर request पर vault मत पढ़ो (cache करो या एक बार load करो; vault की throttling limits हैं, current limits check करो), "चलाने के लिए" app को broad Contributor role मत दो, और secret values log मत करो।</p>`,
        hg: `<p><b>Analogy — hotel ka keycard desk:</b> hotel (Azure) tumhari app ko keycard deta hai (managed identity); vault un cheezon ka locker hai jinhe ab bhi chaabi chahiye. Tumhara code sirf kehta hai "mere card se locker kholo"; woh asli chaabi saath nahi rakhta.</p>
<ul>
<li><b>Ek credential object, kai clients:</b> ASP.NET Core mein clients ko <code>AddAzureClients</code> (package <code>Microsoft.Extensions.Azure</code>) se register karo aur credential ko <code>UseCredential</code> se share karo. Snippet docs ki salah maanta hai: Development mein <code>DefaultAzureCredential</code>, baaki jagah specific <code>ManagedIdentityCredential</code>.</li>
<li><b>Key Vault ko configuration ki tarah:</b> <code>builder.Configuration.AddAzureKeyVault(uri, credential)</code> (package <code>Azure.Extensions.AspNetCore.Configuration.Secrets</code>) startup par secrets load karta hai. Vault ka naam <code>Payments--ApiKey</code> key <code>Payments:ApiKey</code> ban jaata hai, isliye normal options binding chalti hai (Day 12). Baad mein jude providers jeette hain, isliye vault ko defaults ke baad jodo aur uski values <code>appsettings.json</code> aur environment variables ko override karengi.</li>
<li><b>Sirf Development ke bahar:</b> snippet vault tabhi jodta hai jab Development na ho, taaki laptop ko vault access na chahiye (woh Day 12 ke user secrets use karta hai).</li>
<li><b>Display-only setup:</b> <code>az</code> commands identity chalu karte hain aur use vault scope par <b>Key Vault Secrets User</b> role dete hain, aur JSON ek <b>Key Vault reference</b> app setting dikhata hai (App Service use tumhare liye resolve karta hai; code bilkul nahi). App Service settings mein <code>__</code> ka matlab <code>:</code> hai.</li>
<li><b>Secrets ki kam hi zaroorat padti hai:</b> Storage, Service Bus aur Azure SQL identity seedha accept karte hain, isliye vault mein sirf asli secrets rehte hain (third-party keys).</li>
</ul>
<p><b>Kab use karein:</b> jab kai settings secrets hon aur ek source chahiye tab vault provider; jab code mein koi badlaav nahi chahiye tab Key Vault reference. <b>Kab nahi:</b> har request par vault mat padho (cache karo ya ek baar load karo; vault ki throttling limits hain, current limits check karo), "chalane ke liye" app ko broad Contributor role mat do, aur secret values log mat karo.</p>`
      },
      code: [
        {
          caption: {
            en: "ASP.NET Core Program.cs: Key Vault as configuration, one shared credential for Blob and Service Bus clients (compile-checked, no Azure call)",
            hi: "ASP.NET Core Program.cs: configuration की तरह Key Vault, Blob और Service Bus clients के लिए एक shared credential (compile-checked, Azure call नहीं)",
            hg: "ASP.NET Core Program.cs: configuration ki tarah Key Vault, Blob aur Service Bus clients ke liye ek shared credential (compile-checked, Azure call nahi)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          packages: ["Azure.Identity@1.*", "Azure.Extensions.AspNetCore.Configuration.Secrets@1.*", "Azure.Security.KeyVault.Secrets@4.*", "Azure.Storage.Blobs@12.*", "Azure.Messaging.ServiceBus@7.*", "Microsoft.Extensions.Azure@1.*"],
          src: `using Azure.Core;
using Azure.Identity;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Azure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Dev: your own login (VS / az login). Elsewhere: be explicit, so failures are easy to debug.
TokenCredential credential = builder.Environment.IsDevelopment()
    ? new DefaultAzureCredential()
    : new ManagedIdentityCredential(ManagedIdentityId.SystemAssigned);

if (!builder.Environment.IsDevelopment())
{
    // Added after the default sources, so vault values win over appsettings.json and env vars.
    // Secret "Payments--ApiKey" becomes configuration key "Payments:ApiKey".
    builder.Configuration.AddAzureKeyVault(new Uri(builder.Configuration["KeyVault:Uri"]!), credential);
}

builder.Services.AddOptions<PaymentsOptions>().BindConfiguration("Payments");

builder.Services.AddAzureClients(clients =>
{
    clients.UseCredential(credential);   // one credential for every client below
    clients.AddBlobServiceClient(new Uri(builder.Configuration["Storage:BlobUri"]!));
    clients.AddServiceBusClientWithNamespace(builder.Configuration["ServiceBus:Namespace"]!);
});

var app = builder.Build();
app.MapGet("/ping", () => "ok");
app.Run();

public sealed class PaymentsOptions
{
    public string ApiKey { get; set; } = "";   // comes from Key Vault in production, user secrets locally
}`
        },
        {
          lang: "bash",
          caption: {
            en: "Azure CLI: enable the app's identity and let it read secrets (not run here; role and option names per the Azure CLI docs)",
            hi: "Azure CLI: app की identity चालू करो और उसे secrets पढ़ने दो (यहाँ चलता नहीं; role और option names Azure CLI docs के अनुसार)",
            hg: "Azure CLI: app ki identity chalu karo aur use secrets padhne do (yahan chalta nahi; role aur option names Azure CLI docs ke anusaar)"
          },
          check: "none",
          src: `# 1) give the web app a system-assigned managed identity (prints its principalId)
az webapp identity assign --name orders-api --resource-group rg-orders-prod

# 2) allow that identity to read secrets in one vault only (RBAC permission model, least role, smallest scope)
az role assignment create \\
  --assignee-object-id <principalId-from-step-1> --assignee-principal-type ServicePrincipal \\
  --role "Key Vault Secrets User" \\
  --scope /subscriptions/<sub-id>/resourceGroups/rg-orders-prod/providers/Microsoft.KeyVault/vaults/kv-orders-prod`
        },
        {
          lang: "json",
          caption: {
            en: "App Service app setting that uses a Key Vault reference (no code change; the platform resolves it with the app's identity)",
            hi: "Key Vault reference वाली App Service app setting (code में बदलाव नहीं; platform app की identity से resolve करता है)",
            hg: "Key Vault reference wali App Service app setting (code mein badlaav nahi; platform app ki identity se resolve karta hai)"
          },
          check: "none",
          src: `[
  {
    "name": "Payments__ApiKey",
    "value": "@Microsoft.KeyVault(SecretUri=https://kv-orders-prod.vault.azure.net/secrets/Payments--ApiKey/)",
    "slotSetting": false
  }
]`
        }
      ]
    },
    {
      id: "observability-apim-in-code",
      depth: "detailed",
      title: {
        en: "Observability first and the gateway: Azure Monitor OpenTelemetry in code, and an API Management policy",
        hi: "Observability पहले और gateway: code में Azure Monitor OpenTelemetry, और API Management policy",
        hg: "Observability pehle aur gateway: code mein Azure Monitor OpenTelemetry, aur API Management policy"
      },
      body: {
        en: `<p><b>Analogy — a hospital ICU monitor and a reception desk:</b> monitoring shows the patient's vitals before anyone has to guess (traces, metrics, logs). API Management is the reception desk of the building: it checks ID cards, limits visitors and sends them to the right room.</p>
<ul>
<li><b>Application Insights</b> is the Azure Monitor feature for application telemetry; data lands in a Log Analytics workspace and you query it with KQL. Set it up <b>before</b> the first incident, with the connection string in the <code>APPLICATIONINSIGHTS_CONNECTION_STRING</code> environment variable (the recommended way for production).</li>
<li><b>OpenTelemetry route for ASP.NET Core:</b> package <code>Azure.Monitor.OpenTelemetry.AspNetCore</code>, then <code>builder.Services.AddOpenTelemetry().UseAzureMonitor();</code>. It collects requests, dependencies, metrics and logs. Your own spans (<code>ActivitySource</code>, Day 16) are added with <code>WithTracing(t =&gt; t.AddSource("Orders"))</code>. Set a <b>cloud role name</b> per service so the Application Map shows services separately.</li>
<li><b>Version note:</b> in the current docs, new apps are pointed at the newer <code>Microsoft.OpenTelemetry</code> distro (<code>UseMicrosoftOpenTelemetry</code>), while existing Azure Monitor distro users need no action. Both are OpenTelemetry-based; do not initialise both in one app. The idea you explain in an interview is the same.</li>
<li><b>API Management (APIM)</b> is the managed gateway: <b>policies</b> run in four sections (inbound, backend, outbound, on-error). Common ones: <code>validate-jwt</code> (check the token), <code>rate-limit-by-key</code> (throttle per caller), <code>set-header</code>/<code>rewrite-uri</code> (transform), caching. It also gives products and subscription keys for external consumers, a developer portal and analytics.</li>
<li><b>APIM vs YARP (Day 16):</b> YARP is code you own, flexible, no extra service to buy; APIM is managed, policy-driven and aimed at API products, but is a cost line and a configuration surface to govern. Many teams use APIM at the edge and keep service-to-service calls direct.</li>
</ul>
<p><b>When to use:</b> OpenTelemetry from day one on every service; APIM when you publish APIs to partners or need central policy and keys. <b>When not:</b> do not keep full-volume telemetry blindly (use sampling and check ingestion), do not put business logic inside APIM policies (hard to test and version), and do not add APIM for a single internal API just to have a gateway.</p>`,
        hi: `<p><b>Analogy — hospital का ICU monitor और reception desk:</b> monitoring patient के vitals दिखाती है, किसी को अंदाज़ा लगाना नहीं पड़ता (traces, metrics, logs)। API Management building का reception desk है: ID card चेक करता है, visitors को limit करता है और सही कमरे में भेजता है।</p>
<ul>
<li><b>Application Insights</b> application telemetry के लिए Azure Monitor का feature है; data Log Analytics workspace में जाता है और तुम KQL से query करते हो। इसे पहले incident <b>से पहले</b> लगाओ, connection string <code>APPLICATIONINSIGHTS_CONNECTION_STRING</code> environment variable में (production के लिए recommended तरीका)।</li>
<li><b>ASP.NET Core के लिए OpenTelemetry रास्ता:</b> package <code>Azure.Monitor.OpenTelemetry.AspNetCore</code>, फिर <code>builder.Services.AddOpenTelemetry().UseAzureMonitor();</code>। यह requests, dependencies, metrics और logs collect करता है। तुम्हारे अपने spans (<code>ActivitySource</code>, Day 16) <code>WithTracing(t =&gt; t.AddSource("Orders"))</code> से जुड़ते हैं। हर service का <b>cloud role name</b> set करो ताकि Application Map में services अलग दिखें।</li>
<li><b>Version note:</b> current docs में नए apps को नए <code>Microsoft.OpenTelemetry</code> distro (<code>UseMicrosoftOpenTelemetry</code>) की तरफ़ भेजा जाता है, जबकि Azure Monitor distro के मौजूदा users को कुछ करना नहीं। दोनों OpenTelemetry-based हैं; एक app में दोनों initialise मत करो। Interview में जो idea तुम समझाओगे वह वही है।</li>
<li><b>API Management (APIM)</b> managed gateway है: <b>policies</b> चार sections में चलती हैं (inbound, backend, outbound, on-error)। Common: <code>validate-jwt</code> (token check), <code>rate-limit-by-key</code> (हर caller का throttle), <code>set-header</code>/<code>rewrite-uri</code> (transform), caching। यह बाहरी consumers के लिए products और subscription keys, developer portal और analytics भी देता है।</li>
<li><b>APIM बनाम YARP (Day 16):</b> YARP तुम्हारा अपना code है, flexible, कोई extra service नहीं लेनी; APIM managed, policy-driven और API products के लिए है, पर वह एक cost line और govern करने की configuration surface है। कई teams edge पर APIM रखती हैं और service-to-service calls direct रखती हैं।</li>
</ul>
<p><b>कब use करें:</b> हर service पर पहले दिन से OpenTelemetry; partners को APIs publish करते हो या central policy और keys चाहिए तब APIM। <b>कब नहीं:</b> full-volume telemetry आँख मूँदकर मत रखो (sampling use करो और ingestion देखो), APIM policies में business logic मत रखो (test और version करना मुश्किल), और सिर्फ़ gateway होने के लिए एक internal API के आगे APIM मत लगाओ।</p>`,
        hg: `<p><b>Analogy — hospital ka ICU monitor aur reception desk:</b> monitoring patient ke vitals dikhati hai, kisi ko andaaza lagana nahi padta (traces, metrics, logs). API Management building ka reception desk hai: ID card check karta hai, visitors ko limit karta hai aur sahi kamre mein bhejta hai.</p>
<ul>
<li><b>Application Insights</b> application telemetry ke liye Azure Monitor ka feature hai; data Log Analytics workspace mein jaata hai aur tum KQL se query karte ho. Ise pehle incident <b>se pehle</b> lagao, connection string <code>APPLICATIONINSIGHTS_CONNECTION_STRING</code> environment variable mein (production ke liye recommended tareeka).</li>
<li><b>ASP.NET Core ke liye OpenTelemetry raasta:</b> package <code>Azure.Monitor.OpenTelemetry.AspNetCore</code>, phir <code>builder.Services.AddOpenTelemetry().UseAzureMonitor();</code>. Yeh requests, dependencies, metrics aur logs collect karta hai. Tumhare apne spans (<code>ActivitySource</code>, Day 16) <code>WithTracing(t =&gt; t.AddSource("Orders"))</code> se jude hain. Har service ka <b>cloud role name</b> set karo taaki Application Map mein services alag dikhein.</li>
<li><b>Version note:</b> current docs mein naye apps ko naye <code>Microsoft.OpenTelemetry</code> distro (<code>UseMicrosoftOpenTelemetry</code>) ki taraf bheja jaata hai, jabki Azure Monitor distro ke maujooda users ko kuch karna nahi. Dono OpenTelemetry-based hain; ek app mein dono initialise mat karo. Interview mein jo idea tum samjhaoge woh wahi hai.</li>
<li><b>API Management (APIM)</b> managed gateway hai: <b>policies</b> chaar sections mein chalti hain (inbound, backend, outbound, on-error). Common: <code>validate-jwt</code> (token check), <code>rate-limit-by-key</code> (har caller ka throttle), <code>set-header</code>/<code>rewrite-uri</code> (transform), caching. Yeh bahari consumers ke liye products aur subscription keys, developer portal aur analytics bhi deta hai.</li>
<li><b>APIM vs YARP (Day 16):</b> YARP tumhara apna code hai, flexible, koi extra service nahi leni; APIM managed, policy-driven aur API products ke liye hai, par woh ek cost line aur govern karne ki configuration surface hai. Kai teams edge par APIM rakhti hain aur service-to-service calls direct rakhti hain.</li>
</ul>
<p><b>Kab use karein:</b> har service par pehle din se OpenTelemetry; partners ko APIs publish karte ho ya central policy aur keys chahiye tab APIM. <b>Kab nahi:</b> full-volume telemetry aankh moondkar mat rakho (sampling use karo aur ingestion dekho), APIM policies mein business logic mat rakho (test aur version karna mushkil), aur sirf gateway hone ke liye ek internal API ke aage APIM mat lagao.</p>`
      },
      code: [
        {
          caption: {
            en: "ASP.NET Core: Azure Monitor OpenTelemetry with UseAzureMonitor() plus our own ActivitySource (compile-checked; connection string comes from the environment)",
            hi: "ASP.NET Core: UseAzureMonitor() के साथ Azure Monitor OpenTelemetry और हमारा अपना ActivitySource (compile-checked; connection string environment से आती है)",
            hg: "ASP.NET Core: UseAzureMonitor() ke saath Azure Monitor OpenTelemetry aur hamara apna ActivitySource (compile-checked; connection string environment se aati hai)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          packages: ["Azure.Monitor.OpenTelemetry.AspNetCore@1.*"],
          src: `using System.Diagnostics;
using Azure.Monitor.OpenTelemetry.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using OpenTelemetry.Trace;

var builder = WebApplication.CreateBuilder(args);

// Reads APPLICATIONINSIGHTS_CONNECTION_STRING from the environment (recommended for production).
builder.Services.AddOpenTelemetry()
    .UseAzureMonitor()
    .WithTracing(tracing => tracing.AddSource(OrderTelemetry.SourceName));

var app = builder.Build();

app.MapPost("/orders", () =>
{
    using var activity = OrderTelemetry.Source.StartActivity("PlaceOrder");
    activity?.SetTag("order.channel", "web");
    return Results.Accepted();
});

app.Run();

public static class OrderTelemetry
{
    public const string SourceName = "Orders";
    public static readonly ActivitySource Source = new(SourceName);
}`
        },
        {
          lang: "text",
          caption: {
            en: "API Management policy (XML, display-only): validate the JWT, rate-limit per caller, add a header (replace the placeholders)",
            hi: "API Management policy (XML, display-only): JWT validate करो, हर caller पर rate-limit, एक header जोड़ो (placeholders बदलो)",
            hg: "API Management policy (XML, display-only): JWT validate karo, har caller par rate-limit, ek header jodo (placeholders badlo)"
          },
          check: "none",
          src: `<policies>
  <inbound>
    <base />
    <validate-jwt header-name="Authorization" failed-validation-httpcode="401"
                  failed-validation-error-message="Unauthorized">
      <openid-config url="https://login.microsoftonline.com/{tenant-id}/v2.0/.well-known/openid-configuration" />
      <audiences>
        <audience>api://orders-api</audience>
      </audiences>
    </validate-jwt>
    <rate-limit-by-key calls="100" renewal-period="60"
                       counter-key="@(context.Request.IpAddress)" />
    <set-header name="X-Request-Source" exists-action="override">
      <value>apim</value>
    </set-header>
  </inbound>
  <backend>
    <base />
  </backend>
  <outbound>
    <base />
    <set-header name="X-Powered-By" exists-action="delete" />
  </outbound>
  <on-error>
    <base />
  </on-error>
</policies>`
        }
      ]
    },
    {
      id: "storage-sql-environments",
      depth: "detailed",
      title: {
        en: "Storage, Azure SQL, environments and cost awareness (no prices)",
        hi: "Storage, Azure SQL, environments और cost awareness (कोई prices नहीं)",
        hg: "Storage, Azure SQL, environments aur cost awareness (koi prices nahi)"
      },
      body: {
        en: `<p><b>Analogy — a godown with shelves by how often you need things:</b> the front shelf (<b>Hot</b>) is for daily stock, the back (<b>Cool</b>, <b>Cold</b>) for slow movers, and a sealed warehouse in another town (<b>Archive</b>) for old records: cheap to keep, slow to fetch.</p>
<ul>
<li><b>Blob Storage tiers:</b> Hot, Cool, Cold, Archive. The cooler the tier, the cheaper to store and the dearer to read; Archive is <b>offline</b>, so you must rehydrate a blob (hours) before reading it. Cooler tiers have minimum retention periods (check current rules). A <b>lifecycle management</b> rule can move or delete blobs by age automatically.</li>
<li><b>Queue vs Table:</b> Queue Storage is the simple backlog (compare with Service Bus on the messaging card above). Table Storage is a cheap key-value store addressed by <code>PartitionKey</code> and <code>RowKey</code>; no joins, limited querying. Cosmos DB covers richer cases (Day 19).</li>
<li><b>Access to storage:</b> use the managed identity and a data role (the snippet uses <code>DefaultAzureCredential</code>); if you must give a customer a link, use a short-lived SAS and prefer one backed by the identity (a user delegation SAS) over the account key.</li>
<li><b>Azure SQL Database</b> purchasing: <b>DTU</b> is a simple bundled unit; <b>vCore</b> lets you choose CPU and memory separately. <b>Serverless</b> (a vCore option) can <b>auto-pause</b> when idle and resume on the first connection, so the first call can be slow or fail briefly: use retry logic (<code>EnableRetryOnFailure</code>, Day 6). <b>Elastic pools</b> let many databases share one budget of resources, good for many small tenant databases with different peak times.</li>
<li><b>Behaviour you know from Day 18:</b> in Azure SQL Database <b>RCSI is on by default</b> (READ COMMITTED reads use row versions, not shared locks), but in a SQL Server instance it is off unless you enable it. Use <code>Authentication=Active Directory Default</code> in the connection string for passwordless access.</li>
<li><b>Environments and landing zones (brief):</b> keep dev, test and prod apart (separate subscriptions or at least resource groups), organise with management groups, apply <b>Azure Policy</b> and tags, name resources consistently, and define everything as code (Bicep or Terraform; the pipelines are Day 21). A <b>landing zone</b> is that prepared foundation (network, identity, policy, logging) a team's workloads land on.</li>
<li><b>Cost awareness, no prices:</b> <b>scale to zero</b> (Flex Consumption, Container Apps, serverless SQL) costs little when idle but adds cold-start delay; <b>always-on</b> (Premium always-ready instances, App Service Always On, provisioned databases) costs steadily but answers fast. Right-size, shut down dev/test out of hours, set budgets and alerts, and tag for ownership. For real numbers use the Azure pricing calculator at decision time.</li>
</ul>
<p><b>When to use:</b> tiering and lifecycle rules for logs, exports and backups; serverless SQL for dev or spiky workloads; elastic pools for many small databases. <b>When not:</b> do not put Archive data on a path users wait for, do not use serverless SQL for a latency-critical always-busy API, and do not share one subscription between dev and prod "to save effort".</p>`,
        hi: `<p><b>Analogy — godown जिसमें shelves इस हिसाब से हैं कि चीज़ कितनी बार चाहिए:</b> सामने की shelf (<b>Hot</b>) रोज़ के stock के लिए, पीछे वाली (<b>Cool</b>, <b>Cold</b>) धीमे बिकने वाले माल के लिए, और दूसरे शहर का sealed warehouse (<b>Archive</b>) पुराने records के लिए: रखना सस्ता, मँगाना धीमा।</p>
<ul>
<li><b>Blob Storage tiers:</b> Hot, Cool, Cold, Archive। जितना ठंडा tier, रखना उतना सस्ता और पढ़ना उतना महँगा; Archive <b>offline</b> है, इसलिए पढ़ने से पहले blob को rehydrate करना पड़ता है (घंटे लगते हैं)। ठंडे tiers में minimum retention periods होते हैं (current rules check करो)। <b>Lifecycle management</b> rule उम्र के हिसाब से blobs को अपने-आप move या delete कर सकता है।</li>
<li><b>Queue बनाम Table:</b> Queue Storage simple backlog है (ऊपर messaging card में Service Bus से तुलना)। Table Storage सस्ता key-value store है जिसे <code>PartitionKey</code> और <code>RowKey</code> से address करते हैं; joins नहीं, querying सीमित। ज़्यादा rich cases के लिए Cosmos DB (Day 19)।</li>
<li><b>Storage का access:</b> managed identity और data role use करो (snippet <code>DefaultAzureCredential</code> use करता है); अगर customer को link देना ही पड़े तो short-lived SAS दो और account key की जगह identity-backed SAS (user delegation SAS) को prefer करो।</li>
<li><b>Azure SQL Database</b> purchasing: <b>DTU</b> एक simple bundled unit है; <b>vCore</b> में CPU और memory अलग चुनते हैं और इसमें ज़्यादा control मिलता है। <b>Serverless</b> (vCore का एक option) idle होने पर <b>auto-pause</b> हो सकता है और पहले connection पर resume होता है, इसलिए पहली call slow हो सकती है या थोड़ी देर fail: retry logic लगाओ (<code>EnableRetryOnFailure</code>, Day 6)। <b>Elastic pools</b> में कई databases resources का एक budget share करते हैं, अलग-अलग peak time वाले कई छोटे tenant databases के लिए अच्छा।</li>
<li><b>जो Day 18 से जानते हो:</b> Azure SQL Database में <b>RCSI by default on है</b> (READ COMMITTED reads shared locks की जगह row versions use करती हैं), पर SQL Server instance में यह off रहता है जब तक तुम enable न करो। Passwordless access के लिए connection string में <code>Authentication=Active Directory Default</code> use करो।</li>
<li><b>Environments और landing zones (brief):</b> dev, test और prod अलग रखो (अलग subscriptions या कम से कम resource groups), management groups से organise करो, <b>Azure Policy</b> और tags लगाओ, resources के नाम consistent रखो, और सब कुछ code में define करो (Bicep या Terraform; pipelines Day 21 में)। <b>Landing zone</b> वही तैयार foundation है (network, identity, policy, logging) जिस पर team के workloads उतरते हैं।</li>
<li><b>Cost awareness, बिना prices:</b> <b>scale to zero</b> (Flex Consumption, Container Apps, serverless SQL) idle में कम खर्च करता है पर cold-start देरी जोड़ता है; <b>always-on</b> (Premium always-ready instances, App Service Always On, provisioned databases) लगातार खर्च करता है पर जल्दी जवाब देता है। Right-size करो, dev/test को office hours के बाद बंद करो, budgets और alerts लगाओ, और ownership के लिए tag करो। असली numbers के लिए decision के समय Azure pricing calculator use करो।</li>
</ul>
<p><b>कब use करें:</b> logs, exports और backups के लिए tiering और lifecycle rules; dev या spiky workloads के लिए serverless SQL; कई छोटे databases के लिए elastic pools। <b>कब नहीं:</b> जिस path पर users इंतज़ार करते हैं वहाँ Archive data मत रखो, latency-critical हमेशा-busy API के लिए serverless SQL मत लो, और "मेहनत बचाने" के लिए dev और prod एक subscription में मत रखो।</p>`,
        hg: `<p><b>Analogy — godown jisme shelves is hisaab se hain ki cheez kitni baar chahiye:</b> saamne ki shelf (<b>Hot</b>) roz ke stock ke liye, peeche wali (<b>Cool</b>, <b>Cold</b>) dheeme bikne wale maal ke liye, aur dusre shehar ka sealed warehouse (<b>Archive</b>) purane records ke liye: rakhna sasta, mangana dheema.</p>
<ul>
<li><b>Blob Storage tiers:</b> Hot, Cool, Cold, Archive. Jitna thanda tier, rakhna utna sasta aur padhna utna mehnga; Archive <b>offline</b> hai, isliye padhne se pehle blob ko rehydrate karna padta hai (ghante lagte hain). Thande tiers mein minimum retention periods hote hain (current rules check karo). <b>Lifecycle management</b> rule umar ke hisaab se blobs ko apne-aap move ya delete kar sakta hai.</li>
<li><b>Queue vs Table:</b> Queue Storage simple backlog hai (upar messaging card mein Service Bus se tulna). Table Storage sasta key-value store hai jise <code>PartitionKey</code> aur <code>RowKey</code> se address karte hain; joins nahi, querying seemit. Zyada rich cases ke liye Cosmos DB (Day 19).</li>
<li><b>Storage ka access:</b> managed identity aur data role use karo (snippet <code>DefaultAzureCredential</code> use karta hai); agar customer ko link dena hi pade to short-lived SAS do aur account key ki jagah identity-backed SAS (user delegation SAS) ko prefer karo.</li>
<li><b>Azure SQL Database</b> purchasing: <b>DTU</b> ek simple bundled unit hai; <b>vCore</b> mein CPU aur memory alag chunte hain aur ismein zyada control milta hai. <b>Serverless</b> (vCore ka ek option) idle hone par <b>auto-pause</b> ho sakta hai aur pehle connection par resume hota hai, isliye pehli call slow ho sakti hai ya thodi der fail: retry logic lagao (<code>EnableRetryOnFailure</code>, Day 6). <b>Elastic pools</b> mein kai databases resources ka ek budget share karte hain, alag-alag peak time wale kai chhote tenant databases ke liye achha.</li>
<li><b>Jo Day 18 se jaante ho:</b> Azure SQL Database mein <b>RCSI by default on hai</b> (READ COMMITTED reads shared locks ki jagah row versions use karti hain), par SQL Server instance mein yeh off rehta hai jab tak tum enable na karo. Passwordless access ke liye connection string mein <code>Authentication=Active Directory Default</code> use karo.</li>
<li><b>Environments aur landing zones (brief):</b> dev, test aur prod alag rakho (alag subscriptions ya kam se kam resource groups), management groups se organise karo, <b>Azure Policy</b> aur tags lagao, resources ke naam consistent rakho, aur sab kuch code mein define karo (Bicep ya Terraform; pipelines Day 21 mein). <b>Landing zone</b> wahi taiyaar foundation hai (network, identity, policy, logging) jis par team ke workloads utarte hain.</li>
<li><b>Cost awareness, bina prices:</b> <b>scale to zero</b> (Flex Consumption, Container Apps, serverless SQL) idle mein kam kharch karta hai par cold-start deri jodta hai; <b>always-on</b> (Premium always-ready instances, App Service Always On, provisioned databases) lagatar kharch karta hai par jaldi jawab deta hai. Right-size karo, dev/test ko office hours ke baad band karo, budgets aur alerts lagao, aur ownership ke liye tag karo. Asli numbers ke liye decision ke samay Azure pricing calculator use karo.</li>
</ul>
<p><b>Kab use karein:</b> logs, exports aur backups ke liye tiering aur lifecycle rules; dev ya spiky workloads ke liye serverless SQL; kai chhote databases ke liye elastic pools. <b>Kab nahi:</b> jis path par users intezaar karte hain wahan Archive data mat rakho, latency-critical hamesha-busy API ke liye serverless SQL mat lo, aur "mehnat bachane" ke liye dev aur prod ek subscription mein mat rakho.</p>`
      },
      code: [
        {
          caption: {
            en: "Blob upload with the identity and an access tier (compile-checked, no Azure call)",
            hi: "Identity और access tier के साथ Blob upload (compile-checked, Azure call नहीं)",
            hg: "Identity aur access tier ke saath Blob upload (compile-checked, Azure call nahi)"
          },
          check: "compile",
          packages: ["Azure.Identity@1.*", "Azure.Storage.Blobs@12.*"],
          src: `using Azure.Identity;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;

// Compile-check only: nothing here runs against Azure.
static async Task UploadReportAsync(BlobContainerClient container, Stream content)
{
    var blob = container.GetBlobClient("reports/2026/10/orders.csv");
    var options = new BlobUploadOptions
    {
        AccessTier = AccessTier.Cool,                       // rarely read after the first week
        HttpHeaders = new BlobHttpHeaders { ContentType = "text/csv" }
    };
    await blob.UploadAsync(content, options);
}

var service = new BlobServiceClient(
    new Uri("https://storordersprod.blob.core.windows.net"),
    new DefaultAzureCredential());                          // identity, not an account key
var container = service.GetBlobContainerClient("exports");
Console.WriteLine($"container client for {container.Name}, upload not called");
if (args.Length > 100) await UploadReportAsync(container, Stream.Null);   // never true here`
        },
        {
          lang: "text",
          caption: {
            en: "Azure SQL connection string without a password (display-only; the identity needs a database user mapped to it)",
            hi: "बिना password वाली Azure SQL connection string (display-only; identity से mapped database user चाहिए)",
            hg: "Bina password wali Azure SQL connection string (display-only; identity se mapped database user chahiye)"
          },
          check: "none",
          src: `Server=tcp:sql-orders-prod.database.windows.net,1433;Database=orders;Authentication=Active Directory Default;Encrypt=True;`
        }
      ]
    },
  ],
  qa: [
    {
      id: "which-messaging-service",
      depth: "short",
      q: "Service Bus, Event Grid or Event Hubs: how do you choose?",
      answer: "Service Bus for business commands needing reliable handling (queues, topics, DLQ, sessions). Event Grid to push 'something happened' notifications. Event Hubs for very high-volume event streams read by partition.",
      meaning: {
        hi: "Business commands के लिए Service Bus। 'कुछ हुआ' notifications push करने के लिए Event Grid। बहुत high-volume streams के लिए Event Hubs।",
        hg: "Business commands ke liye Service Bus. 'Kuch hua' notifications push karne ke liye Event Grid. Bahut high-volume streams ke liye Event Hubs."
      },
      explain: {
        en: `<ul>
<li>Ask what the message <b>is</b>: a command or work item (Service Bus), a fact that something changed (Event Grid), or a data point in a continuous stream (Event Hubs).</li>
<li>Service Bus gives per-message locks, dead-lettering, sessions and duplicate detection. Event Hubs has no per-message lock or DLQ; consumers track a position per partition. Event Grid pushes with retries and is not a backlog.</li>
<li>Follow-up: "Can they work together?" Yes. A blob-created event goes through Event Grid into a Service Bus queue that holds the work, and telemetry streams through Event Hubs.</li>
</ul>`,
        hi: `<ul>
<li>पूछो कि message <b>क्या</b> है: command या work item (Service Bus), कुछ बदलने का fact (Event Grid), या लगातार stream का एक data point (Event Hubs)।</li>
<li>Service Bus में per-message locks, dead-lettering, sessions और duplicate detection हैं। Event Hubs में per-message lock या DLQ नहीं; consumers हर partition की position track करते हैं। Event Grid retries के साथ push करता है और backlog नहीं है।</li>
<li>Follow-up: "क्या ये साथ चल सकते हैं?" हाँ। Blob-created event Event Grid से होकर Service Bus queue में जाता है जो काम को रखती है, और telemetry Event Hubs से stream होती है।</li>
</ul>`,
        hg: `<ul>
<li>Poocho ki message <b>kya</b> hai: command ya work item (Service Bus), kuch badalne ka fact (Event Grid), ya lagatar stream ka ek data point (Event Hubs).</li>
<li>Service Bus mein per-message locks, dead-lettering, sessions aur duplicate detection hain. Event Hubs mein per-message lock ya DLQ nahi; consumers har partition ki position track karte hain. Event Grid retries ke saath push karta hai aur backlog nahi hai.</li>
<li>Follow-up: "Kya yeh saath chal sakte hain?" Haan. Blob-created event Event Grid se hokar Service Bus queue mein jaata hai jo kaam ko rakhti hai, aur telemetry Event Hubs se stream hoti hai.</li>
</ul>`
      }
    },
    {
      id: "managed-identity-what",
      depth: "short",
      q: "What is a Managed Identity and why use it?",
      answer: "It is an identity in Microsoft Entra ID that Azure creates and rotates for a resource, so the app authenticates to other services without any stored secret.",
      meaning: {
        hi: "यह Microsoft Entra ID में एक identity है जिसे Azure resource के लिए बनाता और rotate करता है, इसलिए app बिना किसी stored secret के दूसरी services में authenticate करती है।",
        hg: "Yeh Microsoft Entra ID mein ek identity hai jise Azure resource ke liye banata aur rotate karta hai, isliye app bina kisi stored secret ke dusri services mein authenticate karti hai."
      },
      explain: {
        en: `<ul>
<li><b>System-assigned:</b> tied to one resource's lifecycle. <b>User-assigned:</b> its own resource, shareable across resources (handy for blue/green or many apps needing the same access).</li>
<li>You then grant it an RBAC role on the target (least privilege, smallest scope). Nothing to leak or rotate by hand.</li>
<li>Follow-up: "What about local development?" <code>DefaultAzureCredential</code> falls back to your developer login, so the same code runs on the laptop.</li>
</ul>`,
        hi: `<ul>
<li><b>System-assigned:</b> एक resource के lifecycle से बँधी। <b>User-assigned:</b> अपना अलग resource, कई resources में share हो सकती है (blue/green या कई apps को वही access चाहिए तब काम की)।</li>
<li>फिर target पर उसे RBAC role दो (least privilege, सबसे छोटा scope)। हाथ से leak या rotate करने को कुछ नहीं।</li>
<li>Follow-up: "Local development का क्या?" <code>DefaultAzureCredential</code> तुम्हारे developer login पर fall back करता है, इसलिए वही code laptop पर चलता है।</li>
</ul>`,
        hg: `<ul>
<li><b>System-assigned:</b> ek resource ke lifecycle se bandhi. <b>User-assigned:</b> apna alag resource, kai resources mein share ho sakti hai (blue/green ya kai apps ko wahi access chahiye tab kaam ki).</li>
<li>Phir target par use RBAC role do (least privilege, sabse chhota scope). Haath se leak ya rotate karne ko kuch nahi.</li>
<li>Follow-up: "Local development ka kya?" <code>DefaultAzureCredential</code> tumhare developer login par fall back karta hai, isliye wahi code laptop par chalta hai.</li>
</ul>`
      }
    },
    {
      id: "default-azure-credential",
      depth: "short",
      q: "How does DefaultAzureCredential work, and would you use it in production?",
      answer: "It tries a fixed chain of credentials in order (environment, workload identity, managed identity, then developer tools) until one succeeds. In production I prefer a specific credential such as ManagedIdentityCredential.",
      meaning: {
        hi: "यह credentials की एक fixed chain को order में try करता है (environment, workload identity, managed identity, फिर developer tools) जब तक कोई सफल न हो। Production में मैं ManagedIdentityCredential जैसा specific credential prefer करता हूँ।",
        hg: "Yeh credentials ki ek fixed chain ko order mein try karta hai (environment, workload identity, managed identity, phir developer tools) jab tak koi safal na ho. Production mein main ManagedIdentityCredential jaisa specific credential prefer karta hoon."
      },
      explain: {
        en: `<ul>
<li>Order per the docs: environment, workload identity, managed identity, Visual Studio, Visual Studio Code, Azure CLI, Azure PowerShell, Azure Developer CLI; interactive browser is off by default. Check the current docs, the list has changed between versions.</li>
<li>Why be specific in production: a failed chain is hard to debug, trying credentials adds delay, and a stray environment variable on a host can silently change which identity is used.</li>
<li>Follow-up: "How do you limit the chain?" Use the <code>Exclude...</code> options, the <code>AZURE_TOKEN_CREDENTIALS</code> setting, or build your own <code>ChainedTokenCredential</code>. Puzzle 4 simulates the order.</li>
</ul>`,
        hi: `<ul>
<li>Docs के अनुसार order: environment, workload identity, managed identity, Visual Studio, Visual Studio Code, Azure CLI, Azure PowerShell, Azure Developer CLI; interactive browser default से off है। Current docs check करो, versions के बीच list बदली है।</li>
<li>Production में specific क्यों: fail हुई chain को debug करना मुश्किल है, credentials try करने में देरी लगती है, और host पर एक भटका environment variable चुपचाप बदल सकता है कि कौन-सी identity use हो।</li>
<li>Follow-up: "Chain को limit कैसे करते हो?" <code>Exclude...</code> options, <code>AZURE_TOKEN_CREDENTIALS</code> setting, या अपना <code>ChainedTokenCredential</code> बनाओ। Puzzle 4 order को simulate करता है।</li>
</ul>`,
        hg: `<ul>
<li>Docs ke anusaar order: environment, workload identity, managed identity, Visual Studio, Visual Studio Code, Azure CLI, Azure PowerShell, Azure Developer CLI; interactive browser default se off hai. Current docs check karo, versions ke beech list badli hai.</li>
<li>Production mein specific kyun: fail hui chain ko debug karna mushkil hai, credentials try karne mein deri lagti hai, aur host par ek bhatka environment variable chupchaap badal sakta hai ki kaun-si identity use ho.</li>
<li>Follow-up: "Chain ko limit kaise karte ho?" <code>Exclude...</code> options, <code>AZURE_TOKEN_CREDENTIALS</code> setting, ya apna <code>ChainedTokenCredential</code> banao. Puzzle 4 order ko simulate karta hai.</li>
</ul>`
      }
    },
    {
      id: "slots-and-swap",
      depth: "short",
      q: "How do deployment slots help you release safely on App Service?",
      answer: "You deploy to a staging slot, test it on its own URL, then swap, and the platform warms it up and switches traffic. If it goes wrong, swap back.",
      meaning: {
        hi: "तुम staging slot में deploy करते हो, उसके अपने URL पर test करते हो, फिर swap करते हो, और platform उसे warm up करके traffic switch करता है। गड़बड़ हो तो वापस swap करो।",
        hg: "Tum staging slot mein deploy karte ho, uske apne URL par test karte ho, phir swap karte ho, aur platform use warm up karke traffic switch karta hai. Gadbad ho to wapas swap karo."
      },
      explain: {
        en: `<ul>
<li>Settings marked as <b>slot settings</b> stay with the slot (for example a staging-only connection or environment name); other settings travel with the app in a swap. Puzzle 5 shows this.</li>
<li>The database is shared, so the new and old code must both work with the schema: use backward-compatible (expand/contract) migrations.</li>
<li>Follow-up: "Canary?" Slots can route a percentage of traffic to a slot (traffic routing), but check what your tier supports.</li>
</ul>`,
        hi: `<ul>
<li><b>Slot settings</b> mark की हुई settings slot के साथ रहती हैं (जैसे सिर्फ़ staging वाली connection या environment का नाम); बाकी settings swap में app के साथ जाती हैं। Puzzle 5 यह दिखाता है।</li>
<li>Database shared है, इसलिए नया और पुराना दोनों code schema के साथ चलने चाहिए: backward-compatible (expand/contract) migrations use करो।</li>
<li>Follow-up: "Canary?" Slots कुछ percentage traffic किसी slot पर भेज सकते हैं (traffic routing), पर check करो तुम्हारा tier क्या support करता है।</li>
</ul>`,
        hg: `<ul>
<li><b>Slot settings</b> mark ki hui settings slot ke saath rehti hain (jaise sirf staging wali connection ya environment ka naam); baaki settings swap mein app ke saath jaati hain. Puzzle 5 yeh dikhata hai.</li>
<li>Database shared hai, isliye naya aur purana dono code schema ke saath chalne chahiye: backward-compatible (expand/contract) migrations use karo.</li>
<li>Follow-up: "Canary?" Slots kuch percentage traffic kisi slot par bhej sakte hain (traffic routing), par check karo tumhara tier kya support karta hai.</li>
</ul>`
      }
    },
    {
      id: "functions-plans-cold-start",
      depth: "short",
      q: "Which Azure Functions hosting plan would you choose, and what about cold start?",
      answer: "For new serverless work, Flex Consumption: it can scale to zero and offers always-ready instances to reduce cold starts. Premium keeps pre-warmed instances; Dedicated runs on an App Service plan.",
      meaning: {
        hi: "नए serverless काम के लिए Flex Consumption: यह zero तक scale हो सकता है और cold starts घटाने के लिए always-ready instances देता है। Premium pre-warmed instances रखता है; Dedicated App Service plan पर चलता है।",
        hg: "Naye serverless kaam ke liye Flex Consumption: yeh zero tak scale ho sakta hai aur cold starts ghatane ke liye always-ready instances deta hai. Premium pre-warmed instances rakhta hai; Dedicated App Service plan par chalta hai."
      },
      explain: {
        en: `<ul>
<li>Cold start is the delay to start a new instance when the app was scaled to zero. Fix it with always-ready instances (Flex, Premium) at the cost of paying while idle: the classic trade-off.</li>
<li>Consumption is labelled legacy in the current docs; Linux Consumption is being retired. Say "check the current plan status" rather than quoting limits from memory.</li>
<li>Follow-up: "An HTTP function takes 5 minutes?" HTTP-triggered responses are capped (about 230 seconds by the load balancer); use the async pattern, a queue, or Durable Functions.</li>
</ul>`,
        hi: `<ul>
<li>Cold start वह देरी है जो app के zero पर scale होने के बाद नया instance शुरू करने में लगती है। इसे always-ready instances (Flex, Premium) से घटाओ, idle में भी पैसा देने की कीमत पर: classic trade-off।</li>
<li>Current docs में Consumption को legacy कहा गया है; Linux Consumption retire हो रहा है। याद से limits बोलने की जगह "current plan status check करो" कहो।</li>
<li>Follow-up: "HTTP function 5 minutes लेता है तो?" HTTP-triggered response पर cap है (load balancer से लगभग 230 seconds); async pattern, queue या Durable Functions use करो।</li>
</ul>`,
        hg: `<ul>
<li>Cold start woh deri hai jo app ke zero par scale hone ke baad naya instance shuru karne mein lagti hai. Ise always-ready instances (Flex, Premium) se ghatao, idle mein bhi paisa dene ki keemat par: classic trade-off.</li>
<li>Current docs mein Consumption ko legacy kaha gaya hai; Linux Consumption retire ho raha hai. Yaad se limits bolne ki jagah "current plan status check karo" kaho.</li>
<li>Follow-up: "HTTP function 5 minutes leta hai to?" HTTP-triggered response par cap hai (load balancer se lagbhag 230 seconds); async pattern, queue ya Durable Functions use karo.</li>
</ul>`
      }
    },
    {
      id: "inprocess-vs-isolated",
      depth: "short",
      q: "In-process vs isolated worker model for .NET Functions: which one and why?",
      answer: "Isolated worker. Your function runs in its own process with normal DI and Program.cs, and in-process support ends on 10 November 2026.",
      meaning: {
        hi: "Isolated worker। तुम्हारा function अपने process में normal DI और Program.cs के साथ चलता है, और in-process का support 10 November 2026 को खत्म होता है।",
        hg: "Isolated worker. Tumhara function apne process mein normal DI aur Program.cs ke saath chalta hai, aur in-process ka support 10 November 2026 ko khatam hota hai."
      },
      explain: {
        en: `<ul>
<li>Isolated gives you control of the .NET version, dependency conflicts stay out of the host, and the middleware and DI model feels like ASP.NET Core (Day 12).</li>
<li>Migration is mostly mechanical: new project style, <code>[Function]</code> instead of <code>[FunctionName]</code>, extension packages renamed, <code>FUNCTIONS_WORKER_RUNTIME</code> set to <code>dotnet-isolated</code>. The migration guide suggests doing it in a staging slot.</li>
<li>Follow-up: "Why does the date matter to a lead?" It is a deadline for the team's backlog: after it the in-process apps are unsupported.</li>
</ul>`,
        hi: `<ul>
<li>Isolated से तुम्हें .NET version पर control मिलता है, dependency conflicts host से बाहर रहते हैं, और middleware व DI model ASP.NET Core जैसा लगता है (Day 12)।</li>
<li>Migration ज़्यादातर mechanical है: नया project style, <code>[FunctionName]</code> की जगह <code>[Function]</code>, extension packages के नाम बदले, <code>FUNCTIONS_WORKER_RUNTIME</code> को <code>dotnet-isolated</code> करना। Migration guide staging slot में करने की सलाह देती है।</li>
<li>Follow-up: "Lead के लिए date क्यों मायने रखती है?" यह team के backlog की deadline है: उसके बाद in-process apps unsupported हैं।</li>
</ul>`,
        hg: `<ul>
<li>Isolated se tumhe .NET version par control milta hai, dependency conflicts host se bahar rehte hain, aur middleware va DI model ASP.NET Core jaisa lagta hai (Day 12).</li>
<li>Migration zyadatar mechanical hai: naya project style, <code>[FunctionName]</code> ki jagah <code>[Function]</code>, extension packages ke naam badle, <code>FUNCTIONS_WORKER_RUNTIME</code> ko <code>dotnet-isolated</code> karna. Migration guide staging slot mein karne ki salah deti hai.</li>
<li>Follow-up: "Lead ke liye date kyun maayne rakhti hai?" Yeh team ke backlog ki deadline hai: uske baad in-process apps unsupported hain.</li>
</ul>`
      }
    },
    {
      id: "secrets-in-azure",
      depth: "short",
      q: "Where do secrets live for a .NET app on Azure?",
      answer: "Prefer no secret at all: use a managed identity. For the secrets that remain, use Key Vault, read through the configuration provider or a Key Vault reference, never appsettings.json in source control.",
      meaning: {
        hi: "सबसे अच्छा कोई secret ही नहीं: managed identity use करो। जो secrets बचें उनके लिए Key Vault, configuration provider या Key Vault reference से पढ़ो, source control वाले appsettings.json में कभी नहीं।",
        hg: "Sabse achha koi secret hi nahi: managed identity use karo. Jo secrets bachein unke liye Key Vault, configuration provider ya Key Vault reference se padho, source control wale appsettings.json mein kabhi nahi."
      },
      explain: {
        en: `<ul>
<li>Layers: identity first (Storage, Service Bus, Azure SQL), Key Vault for true secrets, user secrets locally (Day 12), and a secret scanner in CI (Day 21).</li>
<li>Vault secret <code>A--B</code> maps to configuration key <code>A:B</code>; the vault source added last wins over earlier sources.</li>
<li>Follow-up: "How do you rotate a secret?" Rotate in the vault; apps using a Key Vault reference pick up new versions, and a startup-loaded provider needs a restart or a reload strategy.</li>
</ul>`,
        hi: `<ul>
<li>Layers: पहले identity (Storage, Service Bus, Azure SQL), असली secrets के लिए Key Vault, local में user secrets (Day 12), और CI में secret scanner (Day 21)।</li>
<li>Vault का secret <code>A--B</code> configuration key <code>A:B</code> से map होता है; सबसे आखिर में जुड़ा vault source पहले के sources पर जीतता है।</li>
<li>Follow-up: "Secret rotate कैसे करते हो?" Vault में rotate करो; Key Vault reference वाली apps नए versions उठा लेती हैं, और startup पर load करने वाले provider को restart या reload strategy चाहिए।</li>
</ul>`,
        hg: `<ul>
<li>Layers: pehle identity (Storage, Service Bus, Azure SQL), asli secrets ke liye Key Vault, local mein user secrets (Day 12), aur CI mein secret scanner (Day 21).</li>
<li>Vault ka secret <code>A--B</code> configuration key <code>A:B</code> se map hota hai; sabse aakhir mein juda vault source pehle ke sources par jeetta hai.</li>
<li>Follow-up: "Secret rotate kaise karte ho?" Vault mein rotate karo; Key Vault reference wali apps naye versions utha leti hain, aur startup par load karne wale provider ko restart ya reload strategy chahiye.</li>
</ul>`
      }
    },
    {
      id: "appservice-vs-aca-vs-aks",
      depth: "short",
      q: "App Service, Container Apps or AKS: how do you decide?",
      answer: "Start with App Service for a standard web API. Choose Container Apps for containers without running Kubernetes, and AKS only when you need Kubernetes-level control and have the team to operate it.",
      meaning: {
        hi: "Standard web API के लिए App Service से शुरू करो। Kubernetes चलाए बिना containers के लिए Container Apps, और AKS तभी जब Kubernetes-level control चाहिए और उसे चलाने वाली team हो।",
        hg: "Standard web API ke liye App Service se shuru karo. Kubernetes chalaye bina containers ke liye Container Apps, aur AKS tabhi jab Kubernetes-level control chahiye aur use chalane wali team ho."
      },
      explain: {
        en: `<ul>
<li>Decide on <b>who operates it</b> and <b>what you need</b>: simple HTTP app (App Service); microservices in containers with scale to zero and event-driven scaling (Container Apps); custom operators, service mesh, fine network and node control (AKS).</li>
<li>AKS means upgrades, node pools, networking and security policy are your team's job. Cost of ownership is mostly people, not machines.</li>
<li>Follow-up: "Can you move later?" If the app is a container and config is external (12-factor), App Service containers, Container Apps and AKS are all reachable, so do not over-design for AKS on day one.</li>
</ul>`,
        hi: `<ul>
<li>फ़ैसला इस पर करो कि <b>कौन चलाएगा</b> और <b>क्या चाहिए</b>: simple HTTP app (App Service); scale to zero और event-driven scaling वाले containers में microservices (Container Apps); custom operators, service mesh, बारीक network और node control (AKS)।</li>
<li>AKS का मतलब है upgrades, node pools, networking और security policy team का काम है। Ownership की cost ज़्यादातर लोगों की है, machines की नहीं।</li>
<li>Follow-up: "बाद में बदल सकते हो?" अगर app container है और config बाहर है (12-factor), तो App Service containers, Container Apps और AKS सब पहुँच में हैं, इसलिए पहले दिन AKS के लिए over-design मत करो।</li>
</ul>`,
        hg: `<ul>
<li>Faisla is par karo ki <b>kaun chalayega</b> aur <b>kya chahiye</b>: simple HTTP app (App Service); scale to zero aur event-driven scaling wale containers mein microservices (Container Apps); custom operators, service mesh, baareek network aur node control (AKS).</li>
<li>AKS ka matlab hai upgrades, node pools, networking aur security policy team ka kaam hai. Ownership ki cost zyadatar logon ki hai, machines ki nahi.</li>
<li>Follow-up: "Baad mein badal sakte ho?" Agar app container hai aur config bahar hai (12-factor), to App Service containers, Container Apps aur AKS sab pahunch mein hain, isliye pehle din AKS ke liye over-design mat karo.</li>
</ul>`
      }
    },
    {
      id: "peek-lock-vs-receive-and-delete",
      depth: "detailed",
      q: "Peek-lock vs receive-and-delete in Service Bus?",
      answer: "Peek-lock locks the message and you settle it (complete, abandon, dead-letter), so a crash means redelivery. Receive-and-delete removes it on delivery, so a failure loses the message.",
      meaning: {
        hi: "Peek-lock message को lock करता है और तुम उसे settle करते हो (complete, abandon, dead-letter), इसलिए crash पर redelivery होती है। Receive-and-delete delivery पर ही हटा देता है, इसलिए failure में message खो जाता है।",
        hg: "Peek-lock message ko lock karta hai aur tum use settle karte ho (complete, abandon, dead-letter), isliye crash par redelivery hoti hai. Receive-and-delete delivery par hi hata deta hai, isliye failure mein message kho jaata hai."
      },
      explain: {
        en: `<ul>
<li>Peek-lock is the safe default for business work. The lock duration defaults to 1 minute (maximum 5); renew the lock for longer processing. When the lock expires or you abandon, the delivery count rises.</li>
<li>Receive-and-delete is fine only for low-value or short-lived data where losing a message is acceptable.</li>
<li>Follow-up: "What if Complete fails after the work is done?" The message is redelivered, so the handler must be idempotent (Day 16). Also settle before closing the receiver, otherwise the lock just expires.</li>
</ul>`,
        hi: `<ul>
<li>Business काम के लिए peek-lock safe default है। Lock duration default 1 minute है (maximum 5); लंबी processing के लिए lock renew करो। Lock expire होने या तुम्हारे abandon करने पर delivery count बढ़ता है।</li>
<li>Receive-and-delete सिर्फ़ low-value या थोड़े समय के data के लिए ठीक है जहाँ message खोना चलता है।</li>
<li>Follow-up: "काम होने के बाद Complete fail हो जाए तो?" Message फिर deliver होता है, इसलिए handler idempotent होना चाहिए (Day 16)। साथ ही receiver बंद करने से पहले settle करो, वरना lock बस expire होता है।</li>
</ul>`,
        hg: `<ul>
<li>Business kaam ke liye peek-lock safe default hai. Lock duration default 1 minute hai (maximum 5); lambi processing ke liye lock renew karo. Lock expire hone ya tumhare abandon karne par delivery count badhta hai.</li>
<li>Receive-and-delete sirf low-value ya thode samay ke data ke liye theek hai jahan message khona chalta hai.</li>
<li>Follow-up: "Kaam hone ke baad Complete fail ho jaye to?" Message phir deliver hota hai, isliye handler idempotent hona chahiye (Day 16). Saath hi receiver band karne se pehle settle karo, warna lock bas expire hota hai.</li>
</ul>`
      }
    },
    {
      id: "service-bus-dead-letter",
      depth: "detailed",
      q: "Why do messages land in a Service Bus dead-letter queue and what do you do about it?",
      answer: "Mostly because the delivery count exceeded MaxDeliveryCount (default 10), the message expired, or the app dead-lettered it. You inspect the reason, fix the cause, then resubmit.",
      meaning: {
        hi: "ज़्यादातर इसलिए कि delivery count MaxDeliveryCount (default 10) से ऊपर गया, message expire हुआ, या app ने खुद dead-letter किया। Reason देखो, कारण ठीक करो, फिर resubmit करो।",
        hg: "Zyadatar isliye ki delivery count MaxDeliveryCount (default 10) se upar gaya, message expire hua, ya app ne khud dead-letter kiya. Reason dekho, kaaran theek karo, phir resubmit karo."
      },
      explain: {
        en: `<ul>
<li>Each queue and subscription has its own DLQ. System reasons include <code>MaxDeliveryCountExceeded</code> and <code>TTLExpiredException</code>; the app can set its own reason and description. There is no automatic cleanup: messages stay until someone completes them.</li>
<li>Operate it: alert on DLQ depth, read it with a receiver whose sub-queue is <code>DeadLetter</code>, find the pattern, fix the bug, then resend (Service Bus Explorer or a small tool). Do not just purge.</li>
<li>Follow-up: "A message is poison on the first try?" Dead-letter it immediately with a reason instead of burning ten retries. Puzzle 1 simulates the delivery count.</li>
</ul>`,
        hi: `<ul>
<li>हर queue और subscription की अपनी DLQ होती है। System reasons में <code>MaxDeliveryCountExceeded</code> और <code>TTLExpiredException</code> हैं; app अपना reason और description set कर सकती है। Automatic cleanup नहीं है: messages तब तक रहते हैं जब तक कोई उन्हें complete न करे।</li>
<li>इसे operate करो: DLQ depth पर alert, <code>DeadLetter</code> sub-queue वाले receiver से पढ़ो, pattern खोजो, bug ठीक करो, फिर resend (Service Bus Explorer या छोटा tool)। बस purge मत करो।</li>
<li>Follow-up: "Message पहली ही बार में poison है?" दस retries जलाने की जगह तुरंत reason के साथ dead-letter करो। Puzzle 1 delivery count को simulate करता है।</li>
</ul>`,
        hg: `<ul>
<li>Har queue aur subscription ki apni DLQ hoti hai. System reasons mein <code>MaxDeliveryCountExceeded</code> aur <code>TTLExpiredException</code> hain; app apna reason aur description set kar sakti hai. Automatic cleanup nahi hai: messages tab tak rehte hain jab tak koi unhe complete na kare.</li>
<li>Ise operate karo: DLQ depth par alert, <code>DeadLetter</code> sub-queue wale receiver se padho, pattern khojo, bug theek karo, phir resend (Service Bus Explorer ya chhota tool). Bas purge mat karo.</li>
<li>Follow-up: "Message pehli hi baar mein poison hai?" Das retries jalane ki jagah turant reason ke saath dead-letter karo. Puzzle 1 delivery count ko simulate karta hai.</li>
</ul>`
      }
    },
    {
      id: "service-bus-sessions-ordering",
      depth: "detailed",
      q: "How do you guarantee message ordering in Service Bus?",
      answer: "Use sessions: messages with the same SessionId are delivered in order to one receiver at a time. Without sessions, competing consumers give no ordering guarantee.",
      meaning: {
        hi: "Sessions use करो: एक ही SessionId वाले messages एक समय में एक receiver को order में deliver होते हैं। Sessions के बिना competing consumers ordering की guarantee नहीं देते।",
        hg: "Sessions use karo: ek hi SessionId wale messages ek samay mein ek receiver ko order mein deliver hote hain. Sessions ke bina competing consumers ordering ki guarantee nahi dete."
      },
      explain: {
        en: `<ul>
<li>Pick the session id from the entity whose events must stay ordered (order id, customer id). Different sessions run in parallel, so throughput scales with the number of sessions.</li>
<li>The cost: one hot session is a bottleneck, and the queue must be created with sessions enabled; every message then needs a session id (a null id is dead-lettered).</li>
<li>Follow-up: "Is ordering enough for correctness?" No. Retries and redelivery still happen, so handlers stay idempotent and carry a version or sequence check (Day 16).</li>
</ul>`,
        hi: `<ul>
<li>Session id उस entity से चुनो जिसके events order में रहने चाहिए (order id, customer id)। अलग sessions parallel चलते हैं, इसलिए throughput sessions की गिनती के साथ बढ़ता है।</li>
<li>कीमत: एक hot session bottleneck है, और queue sessions enabled के साथ बनानी पड़ती है; फिर हर message को session id चाहिए (null id dead-letter हो जाती है)।</li>
<li>Follow-up: "क्या ordering correctness के लिए काफ़ी है?" नहीं। Retries और redelivery फिर भी होती हैं, इसलिए handlers idempotent रहें और version या sequence check रखें (Day 16)।</li>
</ul>`,
        hg: `<ul>
<li>Session id us entity se chuno jiske events order mein rehne chahiye (order id, customer id). Alag sessions parallel chalte hain, isliye throughput sessions ki ginti ke saath badhta hai.</li>
<li>Keemat: ek hot session bottleneck hai, aur queue sessions enabled ke saath banani padti hai; phir har message ko session id chahiye (null id dead-letter ho jaati hai).</li>
<li>Follow-up: "Kya ordering correctness ke liye kaafi hai?" Nahi. Retries aur redelivery phir bhi hoti hain, isliye handlers idempotent rahein aur version ya sequence check rakhein (Day 16).</li>
</ul>`
      }
    },
    {
      id: "service-bus-duplicate-detection",
      depth: "detailed",
      q: "What does Service Bus duplicate detection do, and is it enough for idempotency?",
      answer: "It drops a message whose MessageId was already seen within a time window (default 10 minutes). It helps with sender retries but is not enough alone, because the window is limited.",
      meaning: {
        hi: "यह उस message को drop कर देता है जिसकी MessageId time window (default 10 minutes) में पहले देखी जा चुकी है। Sender retries में मदद करता है पर अकेले काफ़ी नहीं, क्योंकि window limited है।",
        hg: "Yeh us message ko drop kar deta hai jiski MessageId time window (default 10 minutes) mein pehle dekhi ja chuki hai. Sender retries mein madad karta hai par akele kaafi nahi, kyunki window limited hai."
      },
      explain: {
        en: `<ul>
<li>It only looks at <code>MessageId</code>, which your app must set from a business key (for example <code>order-A-1001-placed</code>), not a random value. The duplicate is accepted and silently dropped, so the sender sees success. Puzzle 2 simulates the window.</li>
<li>Window: default 10 minutes, minimum 20 seconds, maximum 7 days; a larger window costs throughput. The Basic tier does not support it.</li>
<li>It does not protect the consumer side: peek-lock still redelivers after a failed Complete, so keep an idempotent consumer (inbox table, Day 16).</li>
</ul>`,
        hi: `<ul>
<li>यह सिर्फ़ <code>MessageId</code> देखता है, जो तुम्हारी app को business key से set करनी है (जैसे <code>order-A-1001-placed</code>), random value से नहीं। Duplicate accept होता है और चुपचाप drop हो जाता है, इसलिए sender को success दिखता है। Puzzle 2 window को simulate करता है।</li>
<li>Window: default 10 minutes, minimum 20 seconds, maximum 7 days; बड़ी window throughput पर असर डालती है। Basic tier इसे support नहीं करता।</li>
<li>यह consumer side को protect नहीं करता: failed Complete के बाद peek-lock फिर भी redeliver करता है, इसलिए idempotent consumer रखो (inbox table, Day 16)।</li>
</ul>`,
        hg: `<ul>
<li>Yeh sirf <code>MessageId</code> dekhta hai, jo tumhari app ko business key se set karni hai (jaise <code>order-A-1001-placed</code>), random value se nahi. Duplicate accept hota hai aur chupchaap drop ho jaata hai, isliye sender ko success dikhta hai. Puzzle 2 window ko simulate karta hai.</li>
<li>Window: default 10 minutes, minimum 20 seconds, maximum 7 days; badi window throughput par asar daalti hai. Basic tier ise support nahi karta.</li>
<li>Yeh consumer side ko protect nahi karta: failed Complete ke baad peek-lock phir bhi redeliver karta hai, isliye idempotent consumer rakho (inbox table, Day 16).</li>
</ul>`
      }
    },
    {
      id: "storage-queue-vs-service-bus",
      depth: "detailed",
      q: "Azure Storage Queue vs Service Bus queue?",
      answer: "Storage Queue is a simple, large, cheap backlog. Service Bus adds topics, sessions, duplicate detection, dead-letter queues and richer settlement, so it suits business messaging.",
      meaning: {
        hi: "Storage Queue simple, बड़ी, सस्ती backlog है। Service Bus में topics, sessions, duplicate detection, dead-letter queues और बेहतर settlement हैं, इसलिए business messaging के लिए ठीक है।",
        hg: "Storage Queue simple, badi, sasti backlog hai. Service Bus mein topics, sessions, duplicate detection, dead-letter queues aur behtar settlement hain, isliye business messaging ke liye theek hai."
      },
      explain: {
        en: `<ul>
<li>Pick Storage Queue for a plain work backlog where you only need "add, take, delete" (thumbnail jobs, simple background tasks). The Functions queue trigger retries a failing message up to <code>maxDequeueCount</code> (default 5), then moves it to a <code>&lt;queue&gt;-poison</code> queue. Puzzle 7 simulates it.</li>
<li>Pick Service Bus when you need publish/subscribe, ordering, an engine-managed DLQ, scheduled delivery or transactions.</li>
<li>Follow-up: "Can you start with Storage Queue and move later?" Yes if the producer and consumer are behind an interface (Day 8, Day 11) and handlers are idempotent.</li>
</ul>`,
        hi: `<ul>
<li>सादे work backlog के लिए Storage Queue चुनो जहाँ सिर्फ़ "add, take, delete" चाहिए (thumbnail jobs, सादे background tasks)। Functions का queue trigger fail होते message को <code>maxDequeueCount</code> (default 5) तक retry करता है, फिर <code>&lt;queue&gt;-poison</code> queue में भेज देता है। Puzzle 7 इसे simulate करता है।</li>
<li>जब publish/subscribe, ordering, engine-managed DLQ, scheduled delivery या transactions चाहिए तब Service Bus चुनो।</li>
<li>Follow-up: "Storage Queue से शुरू करके बाद में बदल सकते हो?" हाँ, अगर producer और consumer interface के पीछे हैं (Day 8, Day 11) और handlers idempotent हैं।</li>
</ul>`,
        hg: `<ul>
<li>Saade work backlog ke liye Storage Queue chuno jahan sirf "add, take, delete" chahiye (thumbnail jobs, saade background tasks). Functions ka queue trigger fail hote message ko <code>maxDequeueCount</code> (default 5) tak retry karta hai, phir <code>&lt;queue&gt;-poison</code> queue mein bhej deta hai. Puzzle 7 ise simulate karta hai.</li>
<li>Jab publish/subscribe, ordering, engine-managed DLQ, scheduled delivery ya transactions chahiye tab Service Bus chuno.</li>
<li>Follow-up: "Storage Queue se shuru karke baad mein badal sakte ho?" Haan, agar producer aur consumer interface ke peeche hain (Day 8, Day 11) aur handlers idempotent hain.</li>
</ul>`
      }
    },
    {
      id: "event-hubs-partitions",
      depth: "detailed",
      q: "How do Event Hubs partitions and consumer groups work?",
      answer: "An event hub is split into partitions; order is kept inside one partition. Each consumer group reads the whole stream independently with its own position.",
      meaning: {
        hi: "Event hub partitions में बँटा होता है; order एक partition के अंदर रहता है। हर consumer group पूरा stream अपनी position के साथ अलग से पढ़ता है।",
        hg: "Event hub partitions mein banta hota hai; order ek partition ke andar rehta hai. Har consumer group poora stream apni position ke saath alag se padhta hai."
      },
      explain: {
        en: `<ul>
<li>A partition key sends related events (one device, one customer) to the same partition so their order holds. Within a group, partitions are shared among consumer instances, so the partition count limits parallelism.</li>
<li>Events are retained for a configured time, not deleted when read; a consumer keeps its offset (checkpoint) so it can resume or replay. This is a log, unlike a Service Bus queue.</li>
<li>Follow-up: "Two teams need the same stream?" Give each its own consumer group. The same hot-key skew warning from Day 19 (Cosmos partition key) applies to partition keys here.</li>
</ul>`,
        hi: `<ul>
<li>Partition key से related events (एक device, एक customer) एक ही partition में जाते हैं ताकि उनका order बना रहे। एक group में partitions consumer instances में बँटते हैं, इसलिए partition count parallelism की limit तय करता है।</li>
<li>Events configured समय तक रखे जाते हैं, पढ़ने पर delete नहीं होते; consumer अपना offset (checkpoint) रखता है ताकि resume या replay कर सके। यह एक log है, Service Bus queue जैसा नहीं।</li>
<li>Follow-up: "दो teams को वही stream चाहिए?" हर एक को अपना consumer group दो। Day 19 (Cosmos partition key) वाली hot-key skew की चेतावनी यहाँ के partition keys पर भी लागू है।</li>
</ul>`,
        hg: `<ul>
<li>Partition key se related events (ek device, ek customer) ek hi partition mein jaate hain taaki unka order bana rahe. Ek group mein partitions consumer instances mein bantte hain, isliye partition count parallelism ki limit tay karta hai.</li>
<li>Events configured samay tak rakhe jaate hain, padhne par delete nahi hote; consumer apna offset (checkpoint) rakhta hai taaki resume ya replay kar sake. Yeh ek log hai, Service Bus queue jaisa nahi.</li>
<li>Follow-up: "Do teams ko wahi stream chahiye?" Har ek ko apna consumer group do. Day 19 (Cosmos partition key) wali hot-key skew ki chetawani yahan ke partition keys par bhi lagu hai.</li>
</ul>`
      }
    },
    {
      id: "apim-vs-yarp-azure",
      depth: "detailed",
      q: "When would you put Azure API Management in front of your APIs instead of YARP?",
      answer: "When I publish APIs to external consumers and want managed policies, keys, a developer portal and analytics. YARP fits when I want code-level control inside my own system.",
      meaning: {
        hi: "जब मैं बाहरी consumers को APIs publish करता हूँ और managed policies, keys, developer portal और analytics चाहता हूँ। YARP तब जब अपने system के अंदर code-level control चाहिए।",
        hg: "Jab main bahari consumers ko APIs publish karta hoon aur managed policies, keys, developer portal aur analytics chahta hoon. YARP tab jab apne system ke andar code-level control chahiye."
      },
      explain: {
        en: `<ul>
<li>APIM covers cross-cutting edge rules without code deploys: JWT validation, rate limits, quotas, header or body transformation, caching, versioning, subscription keys. Rules are configuration, so test and review them like code (store as code, deploy by pipeline, Day 21).</li>
<li>YARP is a library you host, tune and unit-test yourself (Day 16): no extra service, but you build what APIM gives you.</li>
<li>Follow-up: "Is a gateway a single point of failure?" It can be, so deploy it with redundancy, keep it thin (no business logic), and monitor it first (see the observability card).</li>
</ul>`,
        hi: `<ul>
<li>APIM code deploy के बिना cross-cutting edge rules संभालता है: JWT validation, rate limits, quotas, header या body transformation, caching, versioning, subscription keys। Rules configuration हैं, इसलिए उन्हें code की तरह test और review करो (code में रखो, pipeline से deploy, Day 21)।</li>
<li>YARP एक library है जिसे तुम खुद host, tune और unit-test करते हो (Day 16): कोई extra service नहीं, पर APIM जो देता है वह तुम्हें बनाना पड़ता है।</li>
<li>Follow-up: "क्या gateway single point of failure है?" हो सकता है, इसलिए उसे redundancy के साथ deploy करो, पतला रखो (business logic नहीं), और पहले उसे monitor करो (observability card देखो)।</li>
</ul>`,
        hg: `<ul>
<li>APIM code deploy ke bina cross-cutting edge rules sambhalta hai: JWT validation, rate limits, quotas, header ya body transformation, caching, versioning, subscription keys. Rules configuration hain, isliye unhe code ki tarah test aur review karo (code mein rakho, pipeline se deploy, Day 21).</li>
<li>YARP ek library hai jise tum khud host, tune aur unit-test karte ho (Day 16): koi extra service nahi, par APIM jo deta hai woh tumhe banana padta hai.</li>
<li>Follow-up: "Kya gateway single point of failure hai?" Ho sakta hai, isliye use redundancy ke saath deploy karo, patla rakho (business logic nahi), aur pehle use monitor karo (observability card dekho).</li>
</ul>`
      }
    },
    {
      id: "apim-policies",
      depth: "detailed",
      q: "What are API Management policies, and which ones would you apply first?",
      answer: "Policies are rules run on each request and response in inbound, backend, outbound and on-error sections. First I add validate-jwt for authentication and rate-limit-by-key for protection.",
      meaning: {
        hi: "Policies वे rules हैं जो हर request और response पर inbound, backend, outbound और on-error sections में चलते हैं। सबसे पहले authentication के लिए validate-jwt और protection के लिए rate-limit-by-key लगाता हूँ।",
        hg: "Policies woh rules hain jo har request aur response par inbound, backend, outbound aur on-error sections mein chalte hain. Sabse pehle authentication ke liye validate-jwt aur protection ke liye rate-limit-by-key lagata hoon."
      },
      explain: {
        en: `<ul>
<li>Typical order in <code>inbound</code>: authenticate (<code>validate-jwt</code>), throttle (<code>rate-limit-by-key</code>, <code>quota-by-key</code>), then shape the request (<code>set-header</code>, <code>rewrite-uri</code>), maybe a cache lookup. <code>outbound</code> removes internal headers.</li>
<li>Policies can be set at global, product, API and operation scope; <code>&lt;base /&gt;</code> inherits the parent scope.</li>
<li>Follow-up: "Is APIM auth enough?" No. Defence in depth: the backend still validates the token or accepts calls only from the gateway, and does its own authorization (Day 13).</li>
</ul>`,
        hi: `<ul>
<li><code>inbound</code> में आम order: authenticate (<code>validate-jwt</code>), throttle (<code>rate-limit-by-key</code>, <code>quota-by-key</code>), फिर request का shape (<code>set-header</code>, <code>rewrite-uri</code>), शायद cache lookup। <code>outbound</code> internal headers हटाता है।</li>
<li>Policies global, product, API और operation scope पर set हो सकती हैं; <code>&lt;base /&gt;</code> parent scope inherit करता है।</li>
<li>Follow-up: "क्या APIM की auth काफ़ी है?" नहीं। Defence in depth: backend फिर भी token validate करता है या सिर्फ़ gateway से calls लेता है, और अपनी authorization करता है (Day 13)।</li>
</ul>`,
        hg: `<ul>
<li><code>inbound</code> mein aam order: authenticate (<code>validate-jwt</code>), throttle (<code>rate-limit-by-key</code>, <code>quota-by-key</code>), phir request ka shape (<code>set-header</code>, <code>rewrite-uri</code>), shayad cache lookup. <code>outbound</code> internal headers hataata hai.</li>
<li>Policies global, product, API aur operation scope par set ho sakti hain; <code>&lt;base /&gt;</code> parent scope inherit karta hai.</li>
<li>Follow-up: "Kya APIM ki auth kaafi hai?" Nahi. Defence in depth: backend phir bhi token validate karta hai ya sirf gateway se calls leta hai, aur apni authorization karta hai (Day 13).</li>
</ul>`
      }
    },
    {
      id: "app-insights-opentelemetry",
      depth: "detailed",
      q: "How do you set up observability for a .NET app on Azure?",
      answer: "Use OpenTelemetry with the Azure Monitor distro (UseAzureMonitor) so traces, metrics and logs flow to Application Insights. Set the connection string from the environment and name each service.",
      meaning: {
        hi: "OpenTelemetry को Azure Monitor distro (UseAzureMonitor) के साथ use करो ताकि traces, metrics और logs Application Insights में जाएँ। Connection string environment से set करो और हर service को नाम दो।",
        hg: "OpenTelemetry ko Azure Monitor distro (UseAzureMonitor) ke saath use karo taaki traces, metrics aur logs Application Insights mein jaayein. Connection string environment se set karo aur har service ko naam do."
      },
      explain: {
        en: `<ul>
<li>Package <code>Azure.Monitor.OpenTelemetry.AspNetCore</code>; add your own <code>ActivitySource</code> with <code>AddSource</code>. The connection string goes in <code>APPLICATIONINSIGHTS_CONNECTION_STRING</code>. The current docs also describe a newer <code>Microsoft.OpenTelemetry</code> distro for new apps; do not initialise both.</li>
<li>Set the cloud role name per service (Application Map), use sampling to control volume, and build alerts and a dashboard before launch. Query with KQL in the Log Analytics workspace.</li>
<li>Follow-up: "Why OpenTelemetry and not the old SDK?" It is vendor-neutral and the same W3C trace context as Day 16, so traces stay connected across services and you can switch backends.</li>
</ul>`,
        hi: `<ul>
<li>Package <code>Azure.Monitor.OpenTelemetry.AspNetCore</code>; अपना <code>ActivitySource</code> <code>AddSource</code> से जोड़ो। Connection string <code>APPLICATIONINSIGHTS_CONNECTION_STRING</code> में जाती है। Current docs नए apps के लिए नए <code>Microsoft.OpenTelemetry</code> distro की भी बात करते हैं; दोनों initialise मत करो।</li>
<li>हर service का cloud role name set करो (Application Map), volume control के लिए sampling use करो, और launch से पहले alerts और dashboard बनाओ। Log Analytics workspace में KQL से query करो।</li>
<li>Follow-up: "पुराने SDK की जगह OpenTelemetry क्यों?" यह vendor-neutral है और Day 16 वाला वही W3C trace context है, इसलिए services के बीच traces जुड़े रहते हैं और तुम backend बदल सकते हो।</li>
</ul>`,
        hg: `<ul>
<li>Package <code>Azure.Monitor.OpenTelemetry.AspNetCore</code>; apna <code>ActivitySource</code> <code>AddSource</code> se jodo. Connection string <code>APPLICATIONINSIGHTS_CONNECTION_STRING</code> mein jaati hai. Current docs naye apps ke liye naye <code>Microsoft.OpenTelemetry</code> distro ki bhi baat karte hain; dono initialise mat karo.</li>
<li>Har service ka cloud role name set karo (Application Map), volume control ke liye sampling use karo, aur launch se pehle alerts aur dashboard banao. Log Analytics workspace mein KQL se query karo.</li>
<li>Follow-up: "Purane SDK ki jagah OpenTelemetry kyun?" Yeh vendor-neutral hai aur Day 16 wala wahi W3C trace context hai, isliye services ke beech traces jude rehte hain aur tum backend badal sakte ho.</li>
</ul>`
      }
    },
    {
      id: "azure-sql-dtu-vcore-serverless",
      depth: "detailed",
      q: "Azure SQL Database: DTU vs vCore, serverless and elastic pools?",
      answer: "DTU bundles compute, memory and I/O into one unit; vCore lets you size CPU and memory separately. Serverless auto-pauses when idle, and elastic pools share resources across many databases.",
      meaning: {
        hi: "DTU compute, memory और I/O को एक unit में bundle करता है; vCore में CPU और memory अलग size करते हैं। Serverless idle में auto-pause होता है, और elastic pools कई databases में resources share करते हैं।",
        hg: "DTU compute, memory aur I/O ko ek unit mein bundle karta hai; vCore mein CPU aur memory alag size karte hain. Serverless idle mein auto-pause hota hai, aur elastic pools kai databases mein resources share karte hain."
      },
      explain: {
        en: `<ul>
<li>vCore gives more control and visibility; DTU is simpler for small, predictable workloads. Check the current tiers and limits before committing.</li>
<li>Serverless is a trade-off like Functions: low cost when idle, but the first connection after auto-pause can be slow or fail, so enable retries (<code>EnableRetryOnFailure</code>, Day 6) and avoid it for latency-critical, always-busy databases.</li>
<li>Follow-up: "Isolation behaviour?" In Azure SQL Database RCSI is on by default (Day 18), so readers do not block writers, but a SQL Server instance has it off unless enabled. Elastic pools suit many small databases with different peak times (multi-tenant).</li>
</ul>`,
        hi: `<ul>
<li>vCore ज़्यादा control और visibility देता है; छोटे, predictable workloads के लिए DTU simpler है। Commit करने से पहले current tiers और limits check करो।</li>
<li>Serverless Functions जैसा trade-off है: idle में कम cost, पर auto-pause के बाद पहला connection slow हो सकता है या fail, इसलिए retries enable करो (<code>EnableRetryOnFailure</code>, Day 6) और latency-critical, हमेशा-busy databases के लिए इससे बचो।</li>
<li>Follow-up: "Isolation behaviour?" Azure SQL Database में RCSI by default on है (Day 18), इसलिए readers writers को block नहीं करते, पर SQL Server instance में यह off रहता है जब तक enable न हो। Elastic pools अलग peak time वाले कई छोटे databases (multi-tenant) के लिए ठीक हैं।</li>
</ul>`,
        hg: `<ul>
<li>vCore zyada control aur visibility deta hai; chhote, predictable workloads ke liye DTU simpler hai. Commit karne se pehle current tiers aur limits check karo.</li>
<li>Serverless Functions jaisa trade-off hai: idle mein kam cost, par auto-pause ke baad pehla connection slow ho sakta hai ya fail, isliye retries enable karo (<code>EnableRetryOnFailure</code>, Day 6) aur latency-critical, hamesha-busy databases ke liye isse bacho.</li>
<li>Follow-up: "Isolation behaviour?" Azure SQL Database mein RCSI by default on hai (Day 18), isliye readers writers ko block nahi karte, par SQL Server instance mein yeh off rehta hai jab tak enable na ho. Elastic pools alag peak time wale kai chhote databases (multi-tenant) ke liye theek hain.</li>
</ul>`
      }
    },
    {
      id: "app-service-scale-always-on",
      depth: "detailed",
      q: "Scale up vs scale out on App Service, and what does Always On do?",
      answer: "Scale up makes each instance bigger; scale out adds instances, manually or by autoscale rules. Always On keeps the app loaded so the first request after idle is not slow.",
      meaning: {
        hi: "Scale up हर instance को बड़ा करता है; scale out instances जोड़ता है, manually या autoscale rules से। Always On app को loaded रखता है ताकि idle के बाद पहली request slow न हो।",
        hg: "Scale up har instance ko bada karta hai; scale out instances jodta hai, manually ya autoscale rules se. Always On app ko loaded rakhta hai taaki idle ke baad pehli request slow na ho."
      },
      explain: {
        en: `<ul>
<li>Scale out is the usual answer for web load, but it needs a <b>stateless</b> app: no in-memory session or local files that matter (Day 13 caching: use a distributed cache). Scale up is for memory or CPU-hungry single instances.</li>
<li>All apps in one plan share its instances, so a noisy app can starve its neighbours: split plans for critical apps. Add a health check endpoint so the platform can remove a sick instance.</li>
<li>Follow-up: "Autoscale on what?" CPU or memory metrics, a schedule, or queue length; set a sensible minimum and maximum, and remember that tiers decide how many instances and which features you get (check current limits).</li>
</ul>`,
        hi: `<ul>
<li>Web load के लिए आम जवाब scale out है, पर उसके लिए app <b>stateless</b> चाहिए: in-memory session या ज़रूरी local files नहीं (Day 13 caching: distributed cache use करो)। Scale up memory या CPU की भूखी single instances के लिए है।</li>
<li>एक plan की सारी apps उसके instances share करती हैं, इसलिए शोर मचाने वाली app पड़ोसियों को भूखा रख सकती है: critical apps के plans अलग करो। Health check endpoint जोड़ो ताकि platform बीमार instance को हटा सके।</li>
<li>Follow-up: "Autoscale किस पर?" CPU या memory metrics, schedule, या queue length; सही minimum और maximum रखो, और याद रखो कि tier तय करता है कितने instances और कौन-से features मिलेंगे (current limits check करो)।</li>
</ul>`,
        hg: `<ul>
<li>Web load ke liye aam jawab scale out hai, par uske liye app <b>stateless</b> chahiye: in-memory session ya zaroori local files nahi (Day 13 caching: distributed cache use karo). Scale up memory ya CPU ki bhookhi single instances ke liye hai.</li>
<li>Ek plan ki saari apps uske instances share karti hain, isliye shor machane wali app padosiyon ko bhookha rakh sakti hai: critical apps ke plans alag karo. Health check endpoint jodo taaki platform beemar instance ko hata sake.</li>
<li>Follow-up: "Autoscale kis par?" CPU ya memory metrics, schedule, ya queue length; sahi minimum aur maximum rakho, aur yaad rakho ki tier tay karta hai kitne instances aur kaun-se features milenge (current limits check karo).</li>
</ul>`
      }
    },
    {
      id: "blob-tiers",
      depth: "detailed",
      q: "Explain the Blob Storage access tiers and when to use each.",
      answer: "Hot for frequently read data, Cool and Cold for rarely read data kept longer, Archive for long-term records that are offline and must be rehydrated before reading.",
      meaning: {
        hi: "बार-बार पढ़े जाने वाले data के लिए Hot, कम पढ़े पर लंबे समय तक रखे data के लिए Cool और Cold, और long-term records के लिए Archive जो offline है और पढ़ने से पहले rehydrate करना पड़ता है।",
        hg: "Baar-baar padhe jaane wale data ke liye Hot, kam padhe par lambe samay tak rakhe data ke liye Cool aur Cold, aur long-term records ke liye Archive jo offline hai aur padhne se pehle rehydrate karna padta hai."
      },
      explain: {
        en: `<ul>
<li>Cooler tiers: cheaper storage, more expensive access, and minimum retention periods if you delete or move early (check current rules; no prices here).</li>
<li>Automate with <b>lifecycle management</b> rules (move to Cool after N days, delete after M). Set the tier at upload when you already know the access pattern.</li>
<li>Follow-up: "Customer wants an archived invoice now?" Rehydration takes hours, so keep recent invoices in a hot or cool tier and archive only what is truly old.</li>
</ul>`,
        hi: `<ul>
<li>ठंडे tiers: storage सस्ता, access महँगा, और जल्दी delete या move करने पर minimum retention periods (current rules check करो; यहाँ prices नहीं)।</li>
<li><b>Lifecycle management</b> rules से automate करो (N दिन बाद Cool में, M दिन बाद delete)। Access pattern पहले से पता हो तो upload पर ही tier set करो।</li>
<li>Follow-up: "Customer को archived invoice अभी चाहिए?" Rehydration में घंटे लगते हैं, इसलिए हाल के invoices hot या cool tier में रखो और सिर्फ़ सच में पुराने को archive करो।</li>
</ul>`,
        hg: `<ul>
<li>Thande tiers: storage sasta, access mehnga, aur jaldi delete ya move karne par minimum retention periods (current rules check karo; yahan prices nahi).</li>
<li><b>Lifecycle management</b> rules se automate karo (N din baad Cool mein, M din baad delete). Access pattern pehle se pata ho to upload par hi tier set karo.</li>
<li>Follow-up: "Customer ko archived invoice abhi chahiye?" Rehydration mein ghante lagte hain, isliye haal ke invoices hot ya cool tier mein rakho aur sirf sach mein purane ko archive karo.</li>
</ul>`
      }
    },
    {
      id: "environments-landing-zones",
      depth: "detailed",
      q: "How would you organise Azure environments for a team (dev, test, prod)?",
      answer: "Separate subscriptions or at least resource groups per environment, governed by management groups, Azure Policy and tags, with everything defined as code and deployed by pipeline.",
      meaning: {
        hi: "हर environment के लिए अलग subscriptions या कम से कम resource groups, management groups, Azure Policy और tags से governed, और सब कुछ code में define होकर pipeline से deploy हो।",
        hg: "Har environment ke liye alag subscriptions ya kam se kam resource groups, management groups, Azure Policy aur tags se governed, aur sab kuch code mein define hokar pipeline se deploy ho."
      },
      explain: {
        en: `<ul>
<li>Separation limits blast radius, access and budget: developers can have wide access in dev and read-only in prod, and prod changes flow only through the pipeline (Day 21).</li>
<li>A <b>landing zone</b> is the prepared base (network, identity, policy, logging, naming) that new workloads plug into, so each team does not rebuild it.</li>
<li>Follow-up: "How do you stop drift?" Infrastructure as code (Bicep or Terraform), Azure Policy to deny or audit non-compliant resources, and no manual portal changes in prod.</li>
</ul>`,
        hi: `<ul>
<li>Separation से blast radius, access और budget सीमित रहते हैं: developers को dev में wide access और prod में read-only मिल सकता है, और prod के बदलाव सिर्फ़ pipeline से जाते हैं (Day 21)।</li>
<li><b>Landing zone</b> वह तैयार base है (network, identity, policy, logging, naming) जिसमें नए workloads जुड़ते हैं, ताकि हर team उसे दोबारा न बनाए।</li>
<li>Follow-up: "Drift कैसे रोकते हो?" Infrastructure as code (Bicep या Terraform), non-compliant resources को deny या audit करने के लिए Azure Policy, और prod में portal से manual changes नहीं।</li>
</ul>`,
        hg: `<ul>
<li>Separation se blast radius, access aur budget seemit rehte hain: developers ko dev mein wide access aur prod mein read-only mil sakta hai, aur prod ke badlaav sirf pipeline se jaate hain (Day 21).</li>
<li><b>Landing zone</b> woh taiyaar base hai (network, identity, policy, logging, naming) jisme naye workloads jude hain, taaki har team use dobara na banaye.</li>
<li>Follow-up: "Drift kaise rokte ho?" Infrastructure as code (Bicep ya Terraform), non-compliant resources ko deny ya audit karne ke liye Azure Policy, aur prod mein portal se manual changes nahi.</li>
</ul>`
      }
    },
    {
      id: "cost-scale-to-zero-vs-always-on",
      depth: "detailed",
      q: "How do you think about cost on Azure without quoting prices?",
      answer: "As a trade-off between idle cost and latency: scale-to-zero costs little when idle but adds cold starts, while always-on costs steadily but responds fast. Then right-size, tag and set budgets.",
      meaning: {
        hi: "Idle cost और latency के trade-off के रूप में: scale-to-zero idle में कम खर्च करता है पर cold starts जोड़ता है, जबकि always-on लगातार खर्च करता है पर जल्दी जवाब देता है। फिर right-size, tag और budgets।",
        hg: "Idle cost aur latency ke trade-off ke roop mein: scale-to-zero idle mein kam kharch karta hai par cold starts jodta hai, jabki always-on lagatar kharch karta hai par jaldi jawab deta hai. Phir right-size, tag aur budgets."
      },
      explain: {
        en: `<ul>
<li>Match the option to the traffic shape: spiky or rare (Flex Consumption, Container Apps, serverless SQL) versus steady and latency-sensitive (App Service always on, Premium always-ready, provisioned database).</li>
<li>Levers a lead controls: right-size SKUs, shut down dev/test out of hours, delete unused resources, limit telemetry volume with sampling, pick tiers for storage, and review a monthly cost report by tag and owner.</li>
<li>Follow-up: "What number would you give the manager?" Give an estimate from the Azure pricing calculator and the real usage metrics, with assumptions written down; never a guess from memory.</li>
</ul>`,
        hi: `<ul>
<li>Option को traffic के shape से match करो: spiky या कम (Flex Consumption, Container Apps, serverless SQL) बनाम steady और latency-sensitive (App Service always on, Premium always-ready, provisioned database)।</li>
<li>जो levers lead के हाथ में हैं: SKUs right-size करो, dev/test को office hours के बाद बंद करो, unused resources delete करो, sampling से telemetry volume सीमित करो, storage के tiers चुनो, और tag व owner के हिसाब से monthly cost report देखो।</li>
<li>Follow-up: "Manager को कौन-सा number दोगे?" Azure pricing calculator और असली usage metrics से बना estimate दो, assumptions लिखकर; याद से अंदाज़ा कभी नहीं।</li>
</ul>`,
        hg: `<ul>
<li>Option ko traffic ke shape se match karo: spiky ya kam (Flex Consumption, Container Apps, serverless SQL) vs steady aur latency-sensitive (App Service always on, Premium always-ready, provisioned database).</li>
<li>Jo levers lead ke haath mein hain: SKUs right-size karo, dev/test ko office hours ke baad band karo, unused resources delete karo, sampling se telemetry volume seemit karo, storage ke tiers chuno, aur tag va owner ke hisaab se monthly cost report dekho.</li>
<li>Follow-up: "Manager ko kaun-sa number doge?" Azure pricing calculator aur asli usage metrics se bana estimate do, assumptions likhkar; yaad se andaaza kabhi nahi.</li>
</ul>`
      }
    }
  ],
  puzzles: [
    {
      id: "peek-lock-delivery-count",
      src: `// A toy model of Service Bus peek-lock delivery counting (not the Azure SDK).
const int MaxDeliveryCount = 3;
var inbox = new[]
{
    new Msg("order-1", FailsFirst: 0, Malformed: false),
    new Msg("order-2", FailsFirst: 2, Malformed: false),
    new Msg("order-3", FailsFirst: 99, Malformed: false),
    new Msg("order-4", FailsFirst: 0, Malformed: true),
};
var deadLetter = new List<string>();
var completed = 0;

foreach (var msg in inbox)
{
    for (var delivery = 1; delivery <= MaxDeliveryCount; delivery++)
    {
        if (msg.Malformed)
        {
            Console.WriteLine($"{msg.Id} delivery {delivery}: dead-lettered by the app");
            deadLetter.Add($"{msg.Id}: BadPayload");
            break;
        }
        if (delivery > msg.FailsFirst)
        {
            Console.WriteLine($"{msg.Id} delivery {delivery}: completed");
            completed++;
            break;
        }
        Console.WriteLine($"{msg.Id} delivery {delivery}: abandoned");
        if (delivery == MaxDeliveryCount)
        {
            Console.WriteLine($"{msg.Id}: moved to the dead-letter queue by the broker");
            deadLetter.Add($"{msg.Id}: MaxDeliveryCountExceeded");
        }
    }
}
Console.WriteLine($"completed={completed}, dead-letter={string.Join("; ", deadLetter)}");

record Msg(string Id, int FailsFirst, bool Malformed);`,
      answer: `order-1 delivery 1: completed
order-2 delivery 1: abandoned
order-2 delivery 2: abandoned
order-2 delivery 3: completed
order-3 delivery 1: abandoned
order-3 delivery 2: abandoned
order-3 delivery 3: abandoned
order-3: moved to the dead-letter queue by the broker
order-4 delivery 1: dead-lettered by the app
completed=2, dead-letter=order-3: MaxDeliveryCountExceeded; order-4: BadPayload`,
      explain: {
        en: `<p>Each abandoned (or lock-expired) delivery raises the delivery count. <code>order-2</code> fails twice, succeeds on delivery 3 (still within the limit of 3), so it completes. <code>order-3</code> never succeeds: after the third failed delivery the broker moves it to the dead-letter queue with <code>MaxDeliveryCountExceeded</code>. <code>order-4</code> can never succeed, so the app dead-letters it on the first delivery with its own reason instead of burning retries. Real Service Bus defaults: MaxDeliveryCount 10, lock 1 minute.</p>`,
        hi: `<p>हर abandoned (या lock-expired) delivery delivery count बढ़ाती है। <code>order-2</code> दो बार fail होता है, delivery 3 पर सफल होता है (3 की limit के अंदर), इसलिए complete हो जाता है। <code>order-3</code> कभी सफल नहीं होता: तीसरी failed delivery के बाद broker उसे <code>MaxDeliveryCountExceeded</code> के साथ dead-letter queue में भेज देता है। <code>order-4</code> कभी सफल हो ही नहीं सकता, इसलिए app उसे पहली delivery पर अपने reason के साथ dead-letter कर देती है, retries जलाती नहीं। असली Service Bus defaults: MaxDeliveryCount 10, lock 1 minute।</p>`,
        hg: `<p>Har abandoned (ya lock-expired) delivery delivery count badhati hai. <code>order-2</code> do baar fail hota hai, delivery 3 par safal hota hai (3 ki limit ke andar), isliye complete ho jaata hai. <code>order-3</code> kabhi safal nahi hota: teesri failed delivery ke baad broker use <code>MaxDeliveryCountExceeded</code> ke saath dead-letter queue mein bhej deta hai. <code>order-4</code> kabhi safal ho hi nahi sakta, isliye app use pehli delivery par apne reason ke saath dead-letter kar deti hai, retries jalati nahi. Asli Service Bus defaults: MaxDeliveryCount 10, lock 1 minute.</p>`
      }
    },
    {
      id: "duplicate-detection-window",
      src: `// A toy model of Service Bus duplicate detection: MessageId remembered for a time window (seconds).
const int WindowSeconds = 600;
var firstSeen = new Dictionary<string, int>();
var accepted = 0;
var dropped = 0;

void Send(int t, string messageId)
{
    if (firstSeen.TryGetValue(messageId, out var seenAt) && t - seenAt < WindowSeconds)
    {
        dropped++;
        Console.WriteLine($"t={t} {messageId}: duplicate dropped (sender saw success)");
        return;
    }
    firstSeen[messageId] = t;
    accepted++;
    Console.WriteLine($"t={t} {messageId}: accepted");
}

Send(0, "order-7-placed");
Send(120, "order-7-placed");
Send(130, "order-8-placed");
Send(599, "order-7-placed");
Send(601, "order-7-placed");
Send(700, "order-7-placed");
Send(701, "random-9f2");   // random ids never match, so a retry of the same business event is NOT caught
Send(702, "random-1c7");
Console.WriteLine($"queue holds {accepted} messages, {dropped} dropped");`,
      answer: `t=0 order-7-placed: accepted
t=120 order-7-placed: duplicate dropped (sender saw success)
t=130 order-8-placed: accepted
t=599 order-7-placed: duplicate dropped (sender saw success)
t=601 order-7-placed: accepted
t=700 order-7-placed: duplicate dropped (sender saw success)
t=701 random-9f2: accepted
t=702 random-1c7: accepted
queue holds 5 messages, 3 dropped`,
      explain: {
        en: `<p>Inside the 600-second window a repeated <code>MessageId</code> is dropped, but the sender still sees success. At t=601 the first id has aged out of the window, so the same id is accepted again (and remembered afresh): duplicate detection is not a permanent guarantee. The last two sends use random ids, so a retry of the same business event would slip through. That is why the <code>MessageId</code> should come from a business key, and why the consumer still needs to be idempotent. This is a toy model; real Service Bus has a default window of 10 minutes, minimum 20 seconds, maximum 7 days.</p>`,
        hi: `<p>600-second window के अंदर दोहराई गई <code>MessageId</code> drop हो जाती है, पर sender को फिर भी success दिखता है। t=601 पर पहली id window से बाहर हो चुकी है, इसलिए वही id फिर accept होती है (और नए सिरे से याद रखी जाती है): duplicate detection स्थायी guarantee नहीं है। आखिरी दो sends random ids इस्तेमाल करते हैं, इसलिए उसी business event का retry निकल जाएगा। इसीलिए <code>MessageId</code> business key से आनी चाहिए, और consumer को फिर भी idempotent होना चाहिए। यह toy model है; असली Service Bus में default window 10 minutes, minimum 20 seconds, maximum 7 days है।</p>`,
        hg: `<p>600-second window ke andar dohraayi gayi <code>MessageId</code> drop ho jaati hai, par sender ko phir bhi success dikhta hai. t=601 par pehli id window se bahar ho chuki hai, isliye wahi id phir accept hoti hai (aur naye sire se yaad rakhi jaati hai): duplicate detection sthaayi guarantee nahi hai. Aakhri do sends random ids istemaal karte hain, isliye usi business event ka retry nikal jaayega. Isiliye <code>MessageId</code> business key se aani chahiye, aur consumer ko phir bhi idempotent hona chahiye. Yeh toy model hai; asli Service Bus mein default window 10 minutes, minimum 20 seconds, maximum 7 days hai.</p>`
      }
    },
    {
      id: "choose-messaging-service",
      src: `// A tiny rule engine for the classic "which messaging service?" question.
var needs = new Need[]
{
    new("place order, in order per customer", Command: true, Ordered: true),
    new("50k devices send telemetry", HighVolumeStream: true),
    new("react when a blob is uploaded", PushNotification: true),
    new("resize thumbnails in the background", SimpleBacklog: true),
    new("invoice issued, three systems each need a copy", Command: true, FanOut: true),
    new("send a welcome email after sign-up", Command: true),
};

foreach (var n in needs)
    Console.WriteLine($"{n.Name} -> {Pick(n)}");

static string Pick(Need n)
{
    if (n.HighVolumeStream) return "Event Hubs";
    if (n.PushNotification) return "Event Grid";
    if (n.Command && n.FanOut) return "Service Bus topic with subscriptions";
    if (n.Command && n.Ordered) return "Service Bus queue with sessions";
    if (n.Command) return "Service Bus queue";
    if (n.SimpleBacklog) return "Storage Queue";
    return "ask more questions";
}

record Need(string Name, bool Command = false, bool Ordered = false, bool HighVolumeStream = false,
            bool PushNotification = false, bool SimpleBacklog = false, bool FanOut = false);`,
      answer: `place order, in order per customer -> Service Bus queue with sessions
50k devices send telemetry -> Event Hubs
react when a blob is uploaded -> Event Grid
resize thumbnails in the background -> Storage Queue
invoice issued, three systems each need a copy -> Service Bus topic with subscriptions
send a welcome email after sign-up -> Service Bus queue`,
      explain: {
        en: `<p>The order of the rules is the thinking order: a high-volume stream points to Event Hubs; a "something happened, react" notification points to Event Grid; a business command points to Service Bus, and whether it needs per-customer ordering (sessions) or fan-out to several consumers (a topic with subscriptions) refines the choice; a plain background backlog is fine on a Storage Queue. A real decision also weighs team skills, cost and limits (check current limits), and often combines services: Event Grid into a Service Bus queue is common.</p>`,
        hi: `<p>Rules का order ही सोचने का order है: high-volume stream Event Hubs की तरफ़ ले जाती है; "कुछ हुआ, react करो" notification Event Grid की तरफ़; business command Service Bus की तरफ़, और per-customer ordering (sessions) या कई consumers तक fan-out (subscriptions वाला topic) चुनाव को और साफ़ करता है; सादा background backlog Storage Queue पर ठीक है। असली फ़ैसला team की skills, cost और limits भी देखता है (current limits check करो), और अक्सर services को जोड़ता है: Event Grid से Service Bus queue में भेजना आम है।</p>`,
        hg: `<p>Rules ka order hi sochne ka order hai: high-volume stream Event Hubs ki taraf le jaati hai; "kuch hua, react karo" notification Event Grid ki taraf; business command Service Bus ki taraf, aur per-customer ordering (sessions) ya kai consumers tak fan-out (subscriptions wala topic) chunav ko aur saaf karta hai; saada background backlog Storage Queue par theek hai. Asli faisla team ki skills, cost aur limits bhi dekhta hai (current limits check karo), aur aksar services ko jodta hai: Event Grid se Service Bus queue mein bhejna aam hai.</p>`
      }
    },
    {
      id: "default-credential-order",
      src: `// A toy simulation of how a credential chain picks the first credential that works.
// The order below follows the Azure.Identity docs for DefaultAzureCredential (check current docs).
string[] chain =
{
    "Environment", "WorkloadIdentity", "ManagedIdentity", "VisualStudio",
    "VisualStudioCode", "AzureCli", "AzurePowerShell", "AzureDeveloperCli"
};

var hosts = new (string Name, string[] Available)[]
{
    ("laptop, Visual Studio signed in", new[] { "VisualStudio", "AzureCli" }),
    ("App Service with managed identity", new[] { "ManagedIdentity" }),
    ("laptop, az login plus stray AZURE_ variables", new[] { "Environment", "AzureCli" }),
    ("empty container, no identity", Array.Empty<string>()),
};

foreach (var (name, available) in hosts)
    Console.WriteLine(Resolve(name, chain, available));

// production-only chain (dev tools excluded) on a laptop that only has az login
Console.WriteLine(Resolve("laptop, prod-only chain", chain.Take(3).ToArray(), new[] { "AzureCli" }));

static string Resolve(string host, string[] chain, string[] available)
{
    var tried = new List<string>();
    foreach (var credential in chain)
    {
        tried.Add(credential);
        if (available.Contains(credential))
            return $"{host}: {string.Join(" > ", tried)} => {credential}";
    }
    return $"{host}: {string.Join(" > ", tried)} => CredentialUnavailableException";
}`,
      answer: `laptop, Visual Studio signed in: Environment > WorkloadIdentity > ManagedIdentity > VisualStudio => VisualStudio
App Service with managed identity: Environment > WorkloadIdentity > ManagedIdentity => ManagedIdentity
laptop, az login plus stray AZURE_ variables: Environment => Environment
empty container, no identity: Environment > WorkloadIdentity > ManagedIdentity > VisualStudio > VisualStudioCode > AzureCli > AzurePowerShell > AzureDeveloperCli => CredentialUnavailableException
laptop, prod-only chain: Environment > WorkloadIdentity > ManagedIdentity => CredentialUnavailableException`,
      explain: {
        en: `<p>The first credential that can produce a token wins and the rest are never tried. On a laptop the developer-tool credentials win because the managed identity is not there; in App Service the managed identity wins. The third host shows the trap: stray <code>AZURE_*</code> environment variables make <code>EnvironmentCredential</code> win before your developer login, so you silently use a different identity. The last lines show why a production-only chain fails on a laptop (fine, it is meant to) and why a specific credential is easier to reason about. (Not shown: interactive browser sign-in is off by default.)</p>`,
        hi: `<p>जो पहला credential token दे सके वही जीतता है और बाकी कभी try नहीं होते। Laptop पर developer-tool credentials जीतते हैं क्योंकि managed identity वहाँ नहीं है; App Service में managed identity जीतती है। तीसरा host जाल दिखाता है: भटके हुए <code>AZURE_*</code> environment variables से <code>EnvironmentCredential</code> तुम्हारे developer login से पहले जीत जाता है, और तुम चुपचाप दूसरी identity use करते हो। आखिरी lines दिखाती हैं कि production-only chain laptop पर क्यों fail होती है (ठीक है, उसका मक़सद यही है) और specific credential के बारे में सोचना आसान क्यों है। (दिखाया नहीं: interactive browser sign-in default से off है।)</p>`,
        hg: `<p>Jo pehla credential token de sake wahi jeetta hai aur baaki kabhi try nahi hote. Laptop par developer-tool credentials jeette hain kyunki managed identity wahan nahi hai; App Service mein managed identity jeetti hai. Teesra host jaal dikhata hai: bhatke hue <code>AZURE_*</code> environment variables se <code>EnvironmentCredential</code> tumhare developer login se pehle jeet jaata hai, aur tum chupchaap dusri identity use karte ho. Aakhri lines dikhati hain ki production-only chain laptop par kyun fail hoti hai (theek hai, uska maqsad yahi hai) aur specific credential ke baare mein sochna aasaan kyun hai. (Dikhaya nahi: interactive browser sign-in default se off hai.)</p>`
      }
    },
    {
      id: "slot-swap-sticky-settings",
      src: `// A toy model of an App Service slot swap: non-sticky settings swap, "slot settings" stay.
var production = new Dictionary<string, Setting>
{
    ["AppVersion"] = new("v1", false),
    ["ASPNETCORE_ENVIRONMENT"] = new("Production", false),
    ["ConnectionStrings__Orders"] = new("prod-db", true),
};
var staging = new Dictionary<string, Setting>
{
    ["AppVersion"] = new("v2", false),
    ["ASPNETCORE_ENVIRONMENT"] = new("Staging", false),
    ["ConnectionStrings__Orders"] = new("staging-db", true),
};

Show("before swap");
foreach (var key in production.Keys.ToList())
{
    if (production[key].Sticky) continue;                       // sticky: stays with the slot
    (production[key], staging[key]) = (staging[key], production[key]);
}
Show("after swap");

void Show(string title)
{
    Console.WriteLine(title);
    foreach (var key in production.Keys.Order(StringComparer.Ordinal))
        Console.WriteLine($"  {key}: production={production[key].Value} staging={staging[key].Value}");
}

record Setting(string Value, bool Sticky);`,
      answer: `before swap
  ASPNETCORE_ENVIRONMENT: production=Production staging=Staging
  AppVersion: production=v1 staging=v2
  ConnectionStrings__Orders: production=prod-db staging=staging-db
after swap
  ASPNETCORE_ENVIRONMENT: production=Staging staging=Production
  AppVersion: production=v2 staging=v1
  ConnectionStrings__Orders: production=prod-db staging=staging-db`,
      explain: {
        en: `<p>The connection string was marked as a slot setting (sticky), so each slot keeps its own database. <code>AppVersion</code> is not sticky, so it moves with the code, which is exactly what you want. The mistake is <code>ASPNETCORE_ENVIRONMENT</code>: it was not sticky, so after the swap production would report "Staging". Anything that describes the <b>place</b> (environment name, connection strings, slot-specific keys) should be a slot setting; anything that describes the <b>release</b> should travel. Real swaps also warm up the slot and have rules for some settings, so treat this as a model.</p>`,
        hi: `<p>Connection string slot setting (sticky) mark थी, इसलिए हर slot अपना database रखता है। <code>AppVersion</code> sticky नहीं है, इसलिए वह code के साथ जाती है, जो ठीक वही है जो तुम चाहते हो। गलती <code>ASPNETCORE_ENVIRONMENT</code> में है: वह sticky नहीं थी, इसलिए swap के बाद production "Staging" बताएगा। जो चीज़ <b>जगह</b> बताती है (environment name, connection strings, slot-specific keys) वह slot setting हो; जो <b>release</b> बताती है वह साथ जाए। असली swaps slot को warm up भी करते हैं और कुछ settings के लिए rules हैं, इसलिए इसे model समझो।</p>`,
        hg: `<p>Connection string slot setting (sticky) mark thi, isliye har slot apna database rakhta hai. <code>AppVersion</code> sticky nahi hai, isliye woh code ke saath jaati hai, jo theek wahi hai jo tum chahte ho. Galti <code>ASPNETCORE_ENVIRONMENT</code> mein hai: woh sticky nahi thi, isliye swap ke baad production "Staging" batayega. Jo cheez <b>jagah</b> batati hai (environment name, connection strings, slot-specific keys) woh slot setting ho; jo <b>release</b> batati hai woh saath jaye. Asli swaps slot ko warm up bhi karte hain aur kuch settings ke liye rules hain, isliye ise model samjho.</p>`
      }
    },
    {
      id: "key-vault-config-precedence",
      src: `// Configuration providers: the LAST source that defines a key wins.
// A Key Vault secret name uses "--" where a configuration key uses ":".
var appsettings = new Dictionary<string, string>
{
    ["Payments:ApiKey"] = "CHANGE-ME", ["Payments:Timeout"] = "30", ["Logging:Level"] = "Information"
};
var environment = new Dictionary<string, string> { ["Payments__Timeout"] = "10" };
var keyVault = new Dictionary<string, string> { ["Payments--ApiKey"] = "kv-secret-123" };

Print("vault added last", new (string, Dictionary<string, string>)[]
    { ("appsettings.json", appsettings), ("environment", environment), ("key vault", keyVault) });
Print("vault added first", new (string, Dictionary<string, string>)[]
    { ("key vault", keyVault), ("appsettings.json", appsettings), ("environment", environment) });

static void Print(string title, (string Name, Dictionary<string, string> Values)[] sources)
{
    var final = new Dictionary<string, (string Value, string From)>(StringComparer.OrdinalIgnoreCase);
    foreach (var (name, values) in sources)
        foreach (var (rawKey, value) in values)
            final[rawKey.Replace("--", ":").Replace("__", ":")] = (value, name);

    Console.WriteLine(title);
    foreach (var key in final.Keys.Order(StringComparer.Ordinal))
        Console.WriteLine($"  {key} = {final[key].Value} (from {final[key].From})");
}`,
      answer: `vault added last
  Logging:Level = Information (from appsettings.json)
  Payments:ApiKey = kv-secret-123 (from key vault)
  Payments:Timeout = 10 (from environment)
vault added first
  Logging:Level = Information (from appsettings.json)
  Payments:ApiKey = CHANGE-ME (from appsettings.json)
  Payments:Timeout = 10 (from environment)`,
      explain: {
        en: `<p>Both <code>__</code> (environment variables) and <code>--</code> (Key Vault secret names) become <code>:</code>, so all three sources talk about the same keys. When the vault is added last it wins for <code>Payments:ApiKey</code>; when it is added first, the placeholder in <code>appsettings.json</code> silently overrides the real secret. The same ordering rule is why environment variables beat <code>appsettings.json</code> (Day 12). Keep placeholders out of the file, and add <code>AddAzureKeyVault</code> after the default sources.</p>`,
        hi: `<p><code>__</code> (environment variables) और <code>--</code> (Key Vault secret names) दोनों <code>:</code> बन जाते हैं, इसलिए तीनों sources एक ही keys की बात करते हैं। Vault आखिर में जुड़े तो <code>Payments:ApiKey</code> पर वह जीतता है; पहले जुड़े तो <code>appsettings.json</code> का placeholder चुपचाप असली secret को override कर देता है। यही ordering rule है जिससे environment variables <code>appsettings.json</code> से जीतते हैं (Day 12)। Placeholders file से बाहर रखो, और <code>AddAzureKeyVault</code> को default sources के बाद जोड़ो।</p>`,
        hg: `<p><code>__</code> (environment variables) aur <code>--</code> (Key Vault secret names) dono <code>:</code> ban jaate hain, isliye teeno sources ek hi keys ki baat karte hain. Vault aakhir mein jude to <code>Payments:ApiKey</code> par woh jeetta hai; pehle jude to <code>appsettings.json</code> ka placeholder chupchaap asli secret ko override kar deta hai. Yahi ordering rule hai jisse environment variables <code>appsettings.json</code> se jeette hain (Day 12). Placeholders file se bahar rakho, aur <code>AddAzureKeyVault</code> ko default sources ke baad jodo.</p>`
      }
    },
    {
      id: "event-hubs-consumer-groups",
      src: `// A toy Event Hubs: events are kept per partition, each consumer group has its own checkpoint.
var partitionOf = new Dictionary<string, int>   // stands in for hash(partitionKey) % 2
{
    ["device-A"] = 0, ["device-B"] = 1, ["device-C"] = 0
};
var arrivals = new[] { "device-A:1", "device-B:1", "device-A:2", "device-C:1", "device-B:2", "device-A:3" };

var partitions = new List<string>[] { new(), new() };
foreach (var e in arrivals)
    partitions[partitionOf[e.Split(':')[0]]].Add(e);
for (var p = 0; p < partitions.Length; p++)
    Console.WriteLine($"p{p} holds: {string.Join(" ", partitions[p])}");

var checkpoints = new Dictionary<(string Group, int Partition), int>();

void Read(string group, int partition, int max, string label)
{
    var start = checkpoints.GetValueOrDefault((group, partition));
    var batch = partitions[partition].Skip(start).Take(max).ToList();
    checkpoints[(group, partition)] = start + batch.Count;
    Console.WriteLine($"{label}: {string.Join(" ", batch)} (checkpoint {checkpoints[(group, partition)]})");
}

Read("billing", 0, 10, "billing p0");
Read("billing", 1, 1, "billing p1 run 1");          // crashes after one event
Read("billing", 1, 10, "billing p1 after restart"); // resumes from its checkpoint
Read("analytics", 0, 10, "analytics p0");
Read("analytics", 1, 10, "analytics p1");
Console.WriteLine($"events still stored: {partitions.Sum(p => p.Count)}");`,
      answer: `p0 holds: device-A:1 device-A:2 device-C:1 device-A:3
p1 holds: device-B:1 device-B:2
billing p0: device-A:1 device-A:2 device-C:1 device-A:3 (checkpoint 4)
billing p1 run 1: device-B:1 (checkpoint 1)
billing p1 after restart: device-B:2 (checkpoint 2)
analytics p0: device-A:1 device-A:2 device-C:1 device-A:3 (checkpoint 4)
analytics p1: device-B:1 device-B:2 (checkpoint 2)
events still stored: 6`,
      explain: {
        en: `<p>Events with the same partition key land in the same partition and keep their order there (the three <code>device-A</code> events stay 1, 2, 3), but there is no order across partitions. Reading does not delete anything: the six events are still stored after both groups read them. Each consumer group has its own checkpoint per partition, so <code>billing</code> resumes exactly where it stopped after the crash while <code>analytics</code> reads the whole stream independently. Compare Service Bus: a message is removed once completed, and competing consumers share one backlog.</p>`,
        hi: `<p>एक ही partition key वाले events एक ही partition में जाते हैं और वहाँ अपना order रखते हैं (तीनों <code>device-A</code> events 1, 2, 3 रहते हैं), पर partitions के बीच कोई order नहीं। पढ़ने से कुछ delete नहीं होता: दोनों groups के पढ़ने के बाद भी छहों events stored हैं। हर consumer group का हर partition पर अपना checkpoint है, इसलिए <code>billing</code> crash के बाद ठीक वहीं से चलता है जहाँ रुका था और <code>analytics</code> पूरा stream अलग से पढ़ता है। Service Bus से तुलना: complete होने पर message हट जाता है, और competing consumers एक ही backlog share करते हैं।</p>`,
        hg: `<p>Ek hi partition key wale events ek hi partition mein jaate hain aur wahan apna order rakhte hain (teeno <code>device-A</code> events 1, 2, 3 rehte hain), par partitions ke beech koi order nahi. Padhne se kuch delete nahi hota: dono groups ke padhne ke baad bhi chhahon events stored hain. Har consumer group ka har partition par apna checkpoint hai, isliye <code>billing</code> crash ke baad theek wahin se chalta hai jahan ruka tha aur <code>analytics</code> poora stream alag se padhta hai. Service Bus se tulna: complete hone par message hat jaata hai, aur competing consumers ek hi backlog share karte hain.</p>`
      }
    }
  ],
  revision: {
    en: [
      "Service Bus for business commands, Event Grid for event notifications, Event Hubs for high-volume streams.",
      "Service Bus peek-lock: settle every message; default lock is 1 minute and MaxDeliveryCount defaults to 10, then it is dead-lettered.",
      "Duplicate detection drops a repeated MessageId inside a time window (default 10 minutes); keep consumers idempotent anyway.",
      "Prefer a Managed Identity over any secret: system-assigned dies with its resource, user-assigned is shared.",
      "DefaultAzureCredential tries a fixed chain in order; in production use a specific credential such as ManagedIdentityCredential.",
      "Key Vault holds the secrets that remain: <code>--</code> in the secret name becomes <code>:</code>, and the vault source must be added last to win.",
      "In-process Azure Functions support ends on 10 November 2026; use the isolated worker model.",
      "Flex Consumption can scale to zero and offers always-ready instances; scale-to-zero trades idle cost for cold starts.",
      "In a slot swap, slot settings stay with the slot: make the environment name and connection strings sticky.",
      "API Management applies policies such as validate-jwt and rate-limit-by-key at the edge; YARP is gateway code you own.",
      "OpenTelemetry with UseAzureMonitor() sends traces, metrics and logs to Application Insights; set it up before the first incident.",
      "Azure SQL Database has RCSI on by default; serverless can auto-pause, so add retry logic."
    ],
    meaning: {
      hi: [
        "Business commands के लिए Service Bus, event notifications के लिए Event Grid, high-volume streams के लिए Event Hubs।",
        "Service Bus peek-lock: हर message settle करो; default lock 1 minute है और MaxDeliveryCount default 10, फिर वह dead-letter हो जाता है।",
        "Duplicate detection time window (default 10 minutes) के अंदर दोहराई MessageId को drop करता है; फिर भी consumers idempotent रखो।",
        "किसी भी secret से बेहतर Managed Identity: system-assigned अपने resource के साथ खत्म होती है, user-assigned shared होती है।",
        "DefaultAzureCredential एक fixed chain को order में try करता है; production में ManagedIdentityCredential जैसा specific credential use करो।",
        "Key Vault बचे हुए secrets रखता है: secret के नाम में <code>--</code> का <code>:</code> बन जाता है, और जीतने के लिए vault source आखिर में जुड़ना चाहिए।",
        "In-process Azure Functions का support 10 November 2026 को खत्म होता है; isolated worker model use करो।",
        "Flex Consumption zero तक scale हो सकता है और always-ready instances देता है; scale-to-zero idle cost के बदले cold starts देता है।",
        "Slot swap में slot settings slot के साथ रहती हैं: environment name और connection strings को sticky रखो।",
        "API Management edge पर validate-jwt और rate-limit-by-key जैसी policies लगाता है; YARP तुम्हारा अपना gateway code है।",
        "UseAzureMonitor() वाला OpenTelemetry traces, metrics और logs Application Insights भेजता है; पहले incident से पहले इसे लगाओ।",
        "Azure SQL Database में RCSI by default on है; serverless auto-pause हो सकता है, इसलिए retry logic जोड़ो।"
      ],
      hg: [
        "Business commands ke liye Service Bus, event notifications ke liye Event Grid, high-volume streams ke liye Event Hubs.",
        "Service Bus peek-lock: har message settle karo; default lock 1 minute hai aur MaxDeliveryCount default 10, phir woh dead-letter ho jaata hai.",
        "Duplicate detection time window (default 10 minutes) ke andar dohraayi MessageId ko drop karta hai; phir bhi consumers idempotent rakho.",
        "Kisi bhi secret se behtar Managed Identity: system-assigned apne resource ke saath khatam hoti hai, user-assigned shared hoti hai.",
        "DefaultAzureCredential ek fixed chain ko order mein try karta hai; production mein ManagedIdentityCredential jaisa specific credential use karo.",
        "Key Vault bache hue secrets rakhta hai: secret ke naam mein <code>--</code> ka <code>:</code> ban jaata hai, aur jeetne ke liye vault source aakhir mein judna chahiye.",
        "In-process Azure Functions ka support 10 November 2026 ko khatam hota hai; isolated worker model use karo.",
        "Flex Consumption zero tak scale ho sakta hai aur always-ready instances deta hai; scale-to-zero idle cost ke badle cold starts deta hai.",
        "Slot swap mein slot settings slot ke saath rehti hain: environment name aur connection strings ko sticky rakho.",
        "API Management edge par validate-jwt aur rate-limit-by-key jaisi policies lagata hai; YARP tumhara apna gateway code hai.",
        "UseAzureMonitor() wala OpenTelemetry traces, metrics aur logs Application Insights bhejta hai; pehle incident se pehle ise lagao.",
        "Azure SQL Database mein RCSI by default on hai; serverless auto-pause ho sakta hai, isliye retry logic jodo."
      ]
    }
  },
  whatsNew: {
    en: `<ul>
<li><b>Functions in .NET:</b> support for the in-process model ends on 10 November 2026 (Azure Functions docs); the isolated worker model supports current .NET versions including .NET 10.</li>
<li><b>Functions hosting:</b> Flex Consumption is the recommended serverless plan for new apps; the Consumption plan is labelled legacy and Linux Consumption is being retired (the docs give 30 September 2028; check the current notice).</li>
<li><b>Application Insights with OpenTelemetry:</b> the Azure Monitor OpenTelemetry Distro (<code>Azure.Monitor.OpenTelemetry.AspNetCore</code>, <code>UseAzureMonitor()</code>) continues to work; the current docs also introduce a newer <code>Microsoft.OpenTelemetry</code> distro for new apps.</li>
<li><b>Azure.Identity:</b> <code>AZURE_TOKEN_CREDENTIALS</code> can name one specific credential from package version 1.15.0; the default chain also includes Azure Developer CLI and a broker credential, and its list can change between versions.</li>
</ul>`,
    hi: `<ul>
<li><b>.NET में Functions:</b> in-process model का support 10 November 2026 को खत्म होता है (Azure Functions docs); isolated worker model .NET 10 समेत current .NET versions को support करता है।</li>
<li><b>Functions hosting:</b> नए apps के लिए Flex Consumption recommended serverless plan है; Consumption plan को legacy कहा गया है और Linux Consumption retire हो रहा है (docs 30 September 2028 बताते हैं; current notice check करो)।</li>
<li><b>OpenTelemetry के साथ Application Insights:</b> Azure Monitor OpenTelemetry Distro (<code>Azure.Monitor.OpenTelemetry.AspNetCore</code>, <code>UseAzureMonitor()</code>) चलता रहता है; current docs नए apps के लिए नया <code>Microsoft.OpenTelemetry</code> distro भी introduce करते हैं।</li>
<li><b>Azure.Identity:</b> package version 1.15.0 से <code>AZURE_TOKEN_CREDENTIALS</code> में एक specific credential का नाम दे सकते हैं; default chain में Azure Developer CLI और broker credential भी हैं, और उसकी list versions के बीच बदल सकती है।</li>
</ul>`,
    hg: `<ul>
<li><b>.NET mein Functions:</b> in-process model ka support 10 November 2026 ko khatam hota hai (Azure Functions docs); isolated worker model .NET 10 samet current .NET versions ko support karta hai.</li>
<li><b>Functions hosting:</b> naye apps ke liye Flex Consumption recommended serverless plan hai; Consumption plan ko legacy kaha gaya hai aur Linux Consumption retire ho raha hai (docs 30 September 2028 batate hain; current notice check karo).</li>
<li><b>OpenTelemetry ke saath Application Insights:</b> Azure Monitor OpenTelemetry Distro (<code>Azure.Monitor.OpenTelemetry.AspNetCore</code>, <code>UseAzureMonitor()</code>) chalta rehta hai; current docs naye apps ke liye naya <code>Microsoft.OpenTelemetry</code> distro bhi introduce karte hain.</li>
<li><b>Azure.Identity:</b> package version 1.15.0 se <code>AZURE_TOKEN_CREDENTIALS</code> mein ek specific credential ka naam de sakte hain; default chain mein Azure Developer CLI aur broker credential bhi hain, aur uski list versions ke beech badal sakti hai.</li>
</ul>`
  }
};
