// Day 20 — Azure for .NET Tech Leads, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 20,
  format: "lesson",
  title: {
    en: "Azure for .NET Tech Leads — App Service, Functions, messaging, Key Vault and Managed Identity, APIM, monitoring, Azure SQL",
    hi: "Azure — .NET Tech Leads के लिए: App Service, Functions, messaging, Key Vault और Managed Identity, APIM, monitoring, Azure SQL",
    hg: "Azure — .NET Tech Leads ke liye: App Service, Functions, messaging, Key Vault aur Managed Identity, APIM, monitoring, Azure SQL"
  },
  summary: {
    en: "<p>Day 20 moves the <b>customer-care CRM</b> to Azure in 7 short lessons, one piece at a time. App Service slots, an Azure Function as a thin handler, and Service Bus peek-lock and dead-lettering.</p><p>Then the safety side: managed identity and the credential chain, Key Vault as the last configuration layer, structured logs with a correlation id, and a retry policy for transient Azure SQL errors. No Azure account is needed: every program models the idea in plain C# and runs offline. Choosing between Service Bus, Event Grid and Event Hubs, API Management and the rest of the map are in the Deep Dive.</p>",
    hi: "<p>Day 20 में <b>customer-care CRM</b> Azure पर जाता है, 7 छोटे पाठों में, एक-एक हिस्सा करके। App Service slots, पतले handler के रूप में Azure Function, Service Bus का peek-lock और dead-letter।</p><p>फिर सुरक्षा वाला हिस्सा: managed identity और credential chain, आख़िरी configuration layer के रूप में Key Vault, correlation id वाले structured logs, और transient Azure SQL errors के लिए retry policy। Azure account नहीं चाहिए: हर program idea को सादे C# में बनाकर offline चलाता है। Service Bus, Event Grid और Event Hubs में से चुनना, API Management और बाकी नक़्शा Deep Dive में है।</p>",
    hg: "<p>Day 20 mein <b>customer-care CRM</b> Azure par jaata hai, 7 chhote lessons mein, ek-ek hissa karke. App Service slots, patle handler ke roop mein Azure Function, Service Bus ka peek-lock aur dead-letter.</p><p>Phir suraksha wala hissa: managed identity aur credential chain, aakhiri configuration layer ke roop mein Key Vault, correlation id wale structured logs, aur transient Azure SQL errors ke liye retry policy. Azure account nahi chahiye: har program idea ko sade C# mein banakar offline chalata hai. Service Bus, Event Grid aur Event Hubs mein se chunna, API Management aur baaki naqsha Deep Dive mein hai.</p>"
  },
  sections: [
    {
      id: "app-service-slots",
      depth: "short",
      title: {
        en: "App Service slots: swap the code, keep the settings",
        hi: "App Service slots: code बदलो, settings वहीं रहें",
        hg: "App Service slots: code badlo, settings wahin rahein"
      },
      lesson: {
        buildsOn: {
          en: "<p>Day 16 split the CRM into services and Day 17 drew the boxes: API, queue, database. Those boxes need a place to run. Today the CRM moves to Azure, one piece per lesson, and nothing here calls Azure.</p><p>First piece: the web API host, <b>App Service</b>, and how a new release goes live safely.</p>",
          hi: "<p>Day 16 में CRM को services में बाँटा और Day 17 में boxes बनाए: API, queue, database। इन boxes को चलने की जगह चाहिए। आज CRM Azure पर जाता है, हर पाठ में एक हिस्सा, और यहाँ कुछ भी Azure को call नहीं करता।</p><p>पहला हिस्सा: web API का host, <b>App Service</b>, और नई release को सुरक्षित तरीके से live करना।</p>",
          hg: "<p>Day 16 mein CRM ko services mein baanta aur Day 17 mein boxes banaye: API, queue, database. In boxes ko chalne ki jagah chahiye. Aaj CRM Azure par jaata hai, har lesson mein ek hissa, aur yahan kuch bhi Azure ko call nahi karta.</p><p>Pehla hissa: web API ka host, <b>App Service</b>, aur nayi release ko surakshit tareeke se live karna.</p>"
        },
        what: {
          en: "<p><b>App Service</b> is a managed web host: you give the code, Azure runs the machines, patching and load balancing. The <b>plan</b> is the compute (the VMs); every app in the same plan shares it.</p><p>A <b>deployment slot</b> is a second live copy of the same app with its own URL, for example <code>staging</code>. A <b>swap</b> exchanges staging and production. A setting marked as a <b>slot setting</b> (sticky) stays with its slot and does not move.</p>",
          hi: "<p><b>App Service</b> एक managed web host है: तुम code देते हो, machines, patching और load balancing Azure संभालता है। <b>Plan</b> compute (VMs) है; एक ही plan के सारे apps उसे share करते हैं।</p><p><b>Deployment slot</b> उसी app की दूसरी live copy है, अपने URL के साथ, जैसे <code>staging</code>। <b>Swap</b> staging और production की जगह बदल देता है। जो setting <b>slot setting</b> (sticky) बनी है, वह अपने slot के साथ ही रहती है, swap में नहीं जाती।</p>",
          hg: "<p><b>App Service</b> ek managed web host hai: tum code dete ho, machines, patching aur load balancing Azure sambhalta hai. <b>Plan</b> compute (VMs) hai; ek hi plan ke saare apps use share karte hain.</p><p><b>Deployment slot</b> usi app ki doosri live copy hai, apne URL ke saath, jaise <code>staging</code>. <b>Swap</b> staging aur production ki jagah badal deta hai. Jo setting <b>slot setting</b> (sticky) bani hai, woh apne slot ke saath hi rehti hai, swap mein nahi jaati.</p>"
        },
        why: {
          en: "<p>Deploying straight to production means users meet a half-started app. With a slot you deploy to staging, test its own URL, then swap: Azure warms the app up first, switches traffic, and a bad release is undone by swapping back.</p><p>But a swap also moves settings. If the connection string to the test database travels with the code, production starts writing to the test database. That is why sticky settings matter.</p>",
          hi: "<p>सीधे production पर deploy करने का मतलब है कि users को आधा शुरू हुआ app मिलता है। Slot में staging पर deploy करो, उसके अपने URL पर test करो, फिर swap करो: Azure पहले app को warm up करता है, फिर traffic बदलता है, और ख़राब release को वापस swap करके पलट सकते हैं।</p><p>लेकिन swap settings भी साथ ले जाता है। अगर test database की connection string code के साथ चली गई, तो production test database में लिखने लगेगा। इसीलिए sticky settings ज़रूरी हैं।</p>",
          hg: "<p>Seedha production par deploy karne ka matlab hai ki users ko aadha shuru hua app milta hai. Slot mein staging par deploy karo, uske apne URL par test karo, phir swap karo: Azure pehle app ko warm up karta hai, phir traffic badalta hai, aur kharab release ko wapas swap karke palat sakte hain.</p><p>Lekin swap settings bhi saath le jaata hai. Agar test database ki connection string code ke saath chali gayi, to production test database mein likhne lagega. Isiliye sticky settings zaroori hain.</p>"
        },
        analogy: {
          en: "<p>A shop in a mall. Next door you fit out a copy with the new layout, then one night you swap the signboards. The electricity meter and the CCTV belong to the shop, not to the layout, so they stay where they are. Those are your sticky settings.</p>",
          hi: "<p>Mall में एक दुकान। बगल में नए layout वाली copy तैयार करते हो, फिर एक रात signboards बदल देते हो। बिजली का meter और CCTV दुकान के हैं, layout के नहीं, इसलिए वे अपनी जगह रहते हैं। यही तुम्हारी sticky settings हैं।</p>",
          hg: "<p>Mall mein ek dukaan. Bagal mein naye layout wali copy taiyaar karte ho, phir ek raat signboards badal dete ho. Bijli ka meter aur CCTV dukaan ke hain, layout ke nahi, isliye woh apni jagah rehte hain. Yahi tumhari sticky settings hain.</p>"
        },
        lines: [
          {
            code: "[\"Db:Name\"] = new(\"crm-prod\", Sticky: true),",
            note: {
              en: "The database name is a <b>slot setting</b>: production must always use <code>crm-prod</code>, whatever code sits in the slot. In the portal it is the \"Deployment slot setting\" checkbox; in the CLI it is <code>--slot-settings</code>.",
              hi: "Database का नाम <b>slot setting</b> है: slot में कोई भी code हो, production को हमेशा <code>crm-prod</code> ही use करना है। Portal में यह \"Deployment slot setting\" checkbox है; CLI में <code>--slot-settings</code>।",
              hg: "Database ka naam <b>slot setting</b> hai: slot mein koi bhi code ho, production ko hamesha <code>crm-prod</code> hi use karna hai. Portal mein yeh \"Deployment slot setting\" checkbox hai; CLI mein <code>--slot-settings</code>."
            }
          },
          {
            code: "[\"Sla:Hours\"] = new(\"24\", Sticky: false)",
            note: {
              en: "A normal setting belongs to the release: version 2 of the code wants 12 hours, so the 12 travels with it.",
              hi: "Normal setting release का हिस्सा है: code का version 2 12 घंटे माँगता है, इसलिए 12 उसके साथ जाता है।",
              hg: "Normal setting release ka hissa hai: code ka version 2 12 ghante maangta hai, isliye 12 uske saath jaata hai."
            }
          },
          {
            code: "Slot.Swap(production, staging);",
            note: {
              en: "One call and the staging code is live. In Azure the platform first warms the staging instances up, so the first user does not wait.",
              hi: "एक call और staging का code live। Azure में platform पहले staging instances को warm up करता है, ताकि पहले user को इंतज़ार न करना पड़े।",
              hg: "Ek call aur staging ka code live. Azure mein platform pehle staging instances ko warm up karta hai, taaki pehle user ko intezaar na karna pade."
            }
          },
          {
            code: "(a.Version, b.Version) = (b.Version, a.Version);",
            note: {
              en: "The code (the version) changes places between the two slots.",
              hi: "Code (version) दोनों slots के बीच जगह बदल लेता है।",
              hg: "Code (version) dono slots ke beech jagah badal leta hai."
            }
          },
          {
            code: "if (a.Settings[key].Sticky) continue;",
            note: {
              en: "Sticky settings are skipped: they stay. Everything else is exchanged together with the code.",
              hi: "Sticky settings छोड़ दी जाती हैं: वे वहीं रहती हैं। बाकी सब code के साथ बदल जाता है।",
              hg: "Sticky settings chhod di jaati hain: woh wahin rehti hain. Baaki sab code ke saath badal jaata hai."
            }
          },
          {
            code: "Console.WriteLine(\"-- rollback: swap again\");",
            note: {
              en: "Rollback is the same operation: swap again and the old version is back, with its own 24-hour rule.",
              hi: "Rollback भी वही operation है: फिर swap करो और पुराना version अपने 24 घंटे वाले rule के साथ वापस।",
              hg: "Rollback bhi wahi operation hai: phir swap karo aur purana version apne 24 ghante wale rule ke saath wapas."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Forgetting to make <code>ASPNETCORE_ENVIRONMENT</code> and the connection strings slot settings. After the swap production runs with staging config.</li><li>Believing a swap protects you from a breaking database change. The database is shared; add the new column first, remove the old one in a later release.</li><li>Expecting slots on every tier. They need a plan tier that supports them (Standard, Premium or Isolated), and the slot shares the plan's machines with production.</li></ul>",
          hi: "<ul><li><code>ASPNETCORE_ENVIRONMENT</code> और connection strings को slot settings बनाना भूल जाना। Swap के बाद production staging की config पर चलता है।</li><li>यह मान लेना कि swap database की breaking change से बचा लेगा। Database shared है; नया column पहले जोड़ो, पुराना अगली release में हटाओ।</li><li>हर tier पर slots की उम्मीद करना। इन्हें ऐसा plan tier चाहिए जो slots support करे (Standard, Premium या Isolated), और slot, production के साथ plan की machines share करता है।</li></ul>",
          hg: "<ul><li><code>ASPNETCORE_ENVIRONMENT</code> aur connection strings ko slot settings banana bhool jaana. Swap ke baad production staging ki config par chalta hai.</li><li>Yeh maan lena ki swap database ki breaking change se bacha lega. Database shared hai; naya column pehle jodo, purana agli release mein hatao.</li><li>Har tier par slots ki ummeed karna. Inhe aisa plan tier chahiye jo slots support kare (Standard, Premium ya Isolated), aur slot, production ke saath plan ki machines share karta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use slots for any production web app where a bad deploy costs money. For a dev or test app, or a small internal tool on a low tier, plain deployment is fine. For hosting choices beyond App Service (Functions plans, Container Apps, AKS), see the Deep Dive.</p>",
          hi: "<p>जिस भी production web app में ख़राब deploy से नुकसान होता है, वहाँ slots use करो। Dev या test app, या low tier पर छोटे internal tool के लिए सीधा deployment ठीक है। App Service के अलावा hosting के options (Functions plans, Container Apps, AKS) Deep Dive में हैं।</p>",
          hg: "<p>Jis bhi production web app mein kharab deploy se nuksaan hota hai, wahan slots use karo. Dev ya test app, ya low tier par chhote internal tool ke liye seedha deployment theek hai. App Service ke alawa hosting ke options (Functions plans, Container Apps, AKS) Deep Dive mein hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Reproduce the bug: make <code>Db:Name</code> a normal (non-sticky) setting, swap, and print what production now points at. Then fix it by making the setting sticky and print again.</p>",
            hi: "<p>Bug दोबारा बनाओ: <code>Db:Name</code> को normal (non-sticky) setting बनाओ, swap करो और print करो कि production अब किस database पर है। फिर setting को sticky बनाकर ठीक करो और फिर print करो।</p>",
            hg: "<p>Bug dobara banao: <code>Db:Name</code> ko normal (non-sticky) setting banao, swap karo aur print karo ki production ab kis database par hai. Phir setting ko sticky banakar theek karo aur phir print karo.</p>"
          },
          hint: {
            en: "<p>Only the <code>Sticky</code> flag changes between the two runs. Use two new <code>Slot</code> objects for the second run.</p>",
            hi: "<p>दोनों runs में सिर्फ़ <code>Sticky</code> flag बदलता है। दूसरे run के लिए दो नए <code>Slot</code> objects बनाओ।</p>",
            hg: "<p>Dono runs mein sirf <code>Sticky</code> flag badalta hai. Doosre run ke liye do naye <code>Slot</code> objects banao.</p>"
          },
          solution: {
            caption: {
              en: "Solution: the unsafe swap and the fix",
              hi: "हल: असुरक्षित swap और उसका fix",
              hg: "Solution: asurakshit swap aur uska fix"
            },
            src: "// The bug: Db:Name was forgotten as a normal (non-sticky) setting.\nvar production = new Slot(\"production\", \"v1\", new() { [\"Db:Name\"] = new(\"crm-prod\", Sticky: false) });\nvar staging = new Slot(\"staging\", \"v2\", new() { [\"Db:Name\"] = new(\"crm-staging\", Sticky: false) });\n\nSlot.Swap(production, staging);\nConsole.WriteLine($\"production runs {production.Version} on {production.Settings[\"Db:Name\"].Value}\");\n\n// The fix: the same setting as a slot setting (sticky).\nproduction = new Slot(\"production\", \"v1\", new() { [\"Db:Name\"] = new(\"crm-prod\", Sticky: true) });\nstaging = new Slot(\"staging\", \"v2\", new() { [\"Db:Name\"] = new(\"crm-staging\", Sticky: true) });\n\nSlot.Swap(production, staging);\nConsole.WriteLine($\"production runs {production.Version} on {production.Settings[\"Db:Name\"].Value}\");\n\nrecord Setting(string Value, bool Sticky);\n\nclass Slot(string name, string version, Dictionary<string, Setting> settings)\n{\n    public string Name { get; } = name;\n    public string Version { get; private set; } = version;\n    public Dictionary<string, Setting> Settings { get; } = settings;\n\n    public static void Swap(Slot a, Slot b)\n    {\n        (a.Version, b.Version) = (b.Version, a.Version);\n        foreach (var key in a.Settings.Keys.ToList())\n        {\n            if (a.Settings[key].Sticky) continue;\n            (a.Settings[key], b.Settings[key]) = (b.Settings[key], a.Settings[key]);\n        }\n    }\n}",
            check: "run",
            expected: "production runs v2 on crm-staging\nproduction runs v2 on crm-prod"
          }
        },
        quiz: {
          q: {
            en: "Staging has <code>Db:Name = crm-staging</code> as a normal (non-sticky) setting. What happens after a swap?",
            hi: "Staging में <code>Db:Name = crm-staging</code> normal (non-sticky) setting है। Swap के बाद क्या होगा?",
            hg: "Staging mein <code>Db:Name = crm-staging</code> normal (non-sticky) setting hai. Swap ke baad kya hoga?"
          },
          options: [
            {
              en: "Production keeps using crm-prod",
              hi: "Production crm-prod ही use करता रहेगा",
              hg: "Production crm-prod hi use karta rahega"
            },
            {
              en: "Production now points at the staging database",
              hi: "Production अब staging database पर चलेगा",
              hg: "Production ab staging database par chalega"
            },
            {
              en: "The swap fails with an error",
              hi: "Swap error देकर fail होगा",
              hg: "Swap error dekar fail hoga"
            },
            {
              en: "Azure asks you which value to keep",
              hi: "Azure पूछेगा कौन सी value रखनी है",
              hg: "Azure poochhega kaun si value rakhni hai"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>A non-sticky setting travels with the code, so production would now use the staging value. Mark environment names and connection strings as slot settings.</p>",
            hi: "<p>Non-sticky setting code के साथ जाती है, इसलिए production अब staging की value use करेगा। Environment names और connection strings को slot settings बनाओ।</p>",
            hg: "<p>Non-sticky setting code ke saath jaati hai, isliye production ab staging ki value use karega. Environment names aur connection strings ko slot settings banao.</p>"
          }
        },
        recap: {
          en: "<ul><li>A slot is a second live copy; a swap exchanges code and normal settings.</li><li>Sticky (slot) settings stay: environment name and connection strings belong there.</li><li>Rollback is another swap; the shared database still needs safe migrations.</li></ul>",
          hi: "<ul><li>Slot दूसरी live copy है; swap code और normal settings की अदला-बदली करता है।</li><li>Sticky (slot) settings रुकी रहती हैं: environment name और connection strings वहीं की हैं।</li><li>Rollback एक और swap है; shared database को फिर भी सुरक्षित migrations चाहिए।</li></ul>",
          hg: "<ul><li>Slot doosri live copy hai; swap code aur normal settings ki adla-badli karta hai.</li><li>Sticky (slot) settings ruki rehti hain: environment name aur connection strings wahin ki hain.</li><li>Rollback ek aur swap hai; shared database ko phir bhi surakshit migrations chahiye.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Slot swap in memory: the code moves, sticky settings stay (offline, nothing calls Azure)",
            hi: "Memory में slot swap: code जाता है, sticky settings रहती हैं (offline, Azure को कुछ call नहीं होता)",
            hg: "Memory mein slot swap: code jaata hai, sticky settings rehti hain (offline, Azure ko kuch call nahi hota)"
          },
          src: "var production = new Slot(\"production\", \"v1\", new()\n{\n    [\"Db:Name\"] = new(\"crm-prod\", Sticky: true),\n    [\"Sla:Hours\"] = new(\"24\", Sticky: false)\n});\nvar staging = new Slot(\"staging\", \"v2\", new()\n{\n    [\"Db:Name\"] = new(\"crm-staging\", Sticky: true),\n    [\"Sla:Hours\"] = new(\"12\", Sticky: false)\n});\n\nproduction.Print();\nstaging.Print();\nSlot.Swap(production, staging);\nConsole.WriteLine(\"-- after swap (staging code is live)\");\nproduction.Print();\nstaging.Print();\nSlot.Swap(production, staging);\nConsole.WriteLine(\"-- rollback: swap again\");\nproduction.Print();\n\nrecord Setting(string Value, bool Sticky);\n\nclass Slot(string name, string version, Dictionary<string, Setting> settings)\n{\n    public string Version { get; private set; } = version;\n    public Dictionary<string, Setting> Settings { get; } = settings;\n\n    // The code (and every non-sticky setting) changes places; sticky \"slot settings\" stay.\n    public static void Swap(Slot a, Slot b)\n    {\n        (a.Version, b.Version) = (b.Version, a.Version);\n        foreach (var key in a.Settings.Keys.ToList())\n        {\n            if (a.Settings[key].Sticky) continue;\n            (a.Settings[key], b.Settings[key]) = (b.Settings[key], a.Settings[key]);\n        }\n    }\n\n    public void Print() => Console.WriteLine($\"{name,-10} {Version} \" +\n        string.Join(' ', Settings.OrderBy(s => s.Key, StringComparer.Ordinal).Select(s => $\"{s.Key}={s.Value.Value}\")));\n}",
          check: "run",
          expected: "production v1 Db:Name=crm-prod Sla:Hours=24\nstaging    v2 Db:Name=crm-staging Sla:Hours=12\n-- after swap (staging code is live)\nproduction v2 Db:Name=crm-prod Sla:Hours=12\nstaging    v1 Db:Name=crm-staging Sla:Hours=24\n-- rollback: swap again\nproduction v1 Db:Name=crm-prod Sla:Hours=24"
        }
      ]
    },
    {
      id: "functions-trigger",
      depth: "short",
      title: {
        en: "Azure Functions: a thin handler you can test",
        hi: "Azure Functions: पतला handler जिसे test कर सको",
        hg: "Azure Functions: patla handler jise test kar sako"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 1 gave the web API a safe way to go live. Not all CRM work is a web request: \"ticket created, send an SMS\" can happen in the background.</p><p>This lesson puts that work into an <b>Azure Function</b>, and keeps it so thin that we can call it as a plain C# method.</p>",
          hi: "<p>पाठ 1 में web API को सुरक्षित तरीके से live करना सीखा। CRM का हर काम web request नहीं होता: \"ticket बना, SMS भेजो\" background में हो सकता है।</p><p>इस पाठ में वह काम एक <b>Azure Function</b> में जाता है, और उसे इतना पतला रखते हैं कि उसे सादे C# method की तरह call कर सकें।</p>",
          hg: "<p>Lesson 1 mein web API ko surakshit tareeke se live karna seekha. CRM ka har kaam web request nahi hota: \"ticket bana, SMS bhejo\" background mein ho sakta hai.</p><p>Is lesson mein woh kaam ek <b>Azure Function</b> mein jaata hai, aur use itna patla rakhte hain ki use sade C# method ki tarah call kar sakein.</p>"
        },
        what: {
          en: "<p>An <b>Azure Function</b> is a small piece of code that runs when a <b>trigger</b> fires: an HTTP call, a timer, a Service Bus message. <b>Bindings</b> declare extra inputs and outputs.</p><p>For .NET you use the <b>isolated worker model</b>: your own process with your own <code>Program.cs</code>, dependency injection and .NET version. The old in-process model stops at .NET 8 (.NET 9 and 10 run only isolated), and its support ends on <b>10 November 2026</b>.</p>",
          hi: "<p><b>Azure Function</b> code का एक छोटा टुकड़ा है जो <b>trigger</b> के चलने पर run होता है: HTTP call, timer, Service Bus message। <b>Bindings</b> extra inputs और outputs बताते हैं।</p><p>.NET के लिए <b>isolated worker model</b> use करते हैं: अपना process, अपना <code>Program.cs</code>, dependency injection और अपना .NET version। पुराना in-process model .NET 8 पर रुक जाता है (.NET 9 और 10 सिर्फ़ isolated में चलते हैं), और उसका support <b>10 November 2026</b> को खत्म होता है।</p>",
          hg: "<p><b>Azure Function</b> code ka ek chhota tukda hai jo <b>trigger</b> ke chalne par run hota hai: HTTP call, timer, Service Bus message. <b>Bindings</b> extra inputs aur outputs batate hain.</p><p>.NET ke liye <b>isolated worker model</b> use karte hain: apna process, apna <code>Program.cs</code>, dependency injection aur apna .NET version. Purana in-process model .NET 8 par ruk jaata hai (.NET 9 aur 10 sirf isolated mein chalte hain), aur uska support <b>10 November 2026</b> ko khatam hota hai.</p>"
        },
        why: {
          en: "<p>You pay and scale per event: when the queue grows, the platform starts more instances. And if the function method only parses, decides, calls a service and settles the message, you can test it without any Azure resource.</p>",
          hi: "<p>Payment और scaling हर event के हिसाब से होती है: queue बढ़े तो platform और instances चालू करता है। और अगर function method सिर्फ़ parse करे, decide करे, service call करे और message settle करे, तो उसे बिना किसी Azure resource के test कर सकते हो।</p>",
          hg: "<p>Payment aur scaling har event ke hisaab se hoti hai: queue badhe to platform aur instances chalu karta hai. Aur agar function method sirf parse kare, decide kare, service call kare aur message settle kare, to use bina kisi Azure resource ke test kar sakte ho.</p>"
        },
        analogy: {
          en: "<p>A tiffin kitchen that cooks only when an order arrives. The order is the trigger. The delay while the kitchen opens is the <b>cold start</b>. The cook only cooks; billing and delivery are other people, which is the \"thin\" part.</p>",
          hi: "<p>एक tiffin kitchen जो order आने पर ही खाना बनाती है। Order trigger है। Kitchen खुलने में जो देर लगती है वह <b>cold start</b> है। Cook सिर्फ़ खाना बनाता है; billing और delivery दूसरे लोग करते हैं, यही \"पतला\" होना है।</p>",
          hg: "<p>Ek tiffin kitchen jo order aane par hi khaana banati hai. Order trigger hai. Kitchen khulne mein jo der lagti hai woh <b>cold start</b> hai. Cook sirf khaana banata hai; billing aur delivery doosre log karte hain, yahi \"patla\" hona hai.</p>"
        },
        focus: {
          caption: {
            en: "local.settings.json: the app settings that a Service Bus trigger reads (no key, only the namespace; display-only)",
            hi: "local.settings.json: वे app settings जो Service Bus trigger पढ़ता है (key नहीं, सिर्फ़ namespace; सिर्फ़ दिखाने के लिए)",
            hg: "local.settings.json: woh app settings jo Service Bus trigger padhta hai (key nahi, sirf namespace; sirf dikhane ke liye)"
          },
          lang: "json",
          check: "none",
          src: "{\n  \"IsEncrypted\": false,\n  \"Values\": {\n    \"FUNCTIONS_WORKER_RUNTIME\": \"dotnet-isolated\",\n    \"ServiceBus__fullyQualifiedNamespace\": \"crm-bus.servicebus.windows.net\"\n  }\n}"
        },
        lines: [
          {
            code: "class TicketCreatedFunction(INotifier notifier)",
            note: {
              en: "The function class gets its dependencies by constructor injection, exactly as in Days 11 and 12. In an isolated worker, <code>Program.cs</code> registers them.",
              hi: "Function class अपनी dependencies constructor injection से लेती है, ठीक Day 11 और 12 की तरह। Isolated worker में <code>Program.cs</code> उन्हें register करता है।",
              hg: "Function class apni dependencies constructor injection se leti hai, theek Day 11 aur 12 ki tarah. Isolated worker mein <code>Program.cs</code> unhe register karta hai."
            }
          },
          {
            code: "public async Task Run(TicketMessage message, IMessageActions actions)",
            note: {
              en: "In Azure this method has <code>[Function(\"TicketCreated\")]</code> and a parameter with <code>[ServiceBusTrigger(\"tickets\", Connection = \"ServiceBus\", AutoCompleteMessages = false)]</code>. Here the parameters are plain types, so a test can call it.",
              hi: "Azure में इस method पर <code>[Function(\"TicketCreated\")]</code> होता है और एक parameter पर <code>[ServiceBusTrigger(\"tickets\", Connection = \"ServiceBus\", AutoCompleteMessages = false)]</code>। यहाँ parameters सादे types हैं, ताकि test इसे call कर सके।",
              hg: "Azure mein is method par <code>[Function(\"TicketCreated\")]</code> hota hai aur ek parameter par <code>[ServiceBusTrigger(\"tickets\", Connection = \"ServiceBus\", AutoCompleteMessages = false)]</code>. Yahan parameters sade types hain, taaki test ise call kar sake."
            }
          },
          {
            code: "await actions.DeadLetterAsync(message, \"UnknownSubject\");",
            note: {
              en: "A message that can never succeed is dead-lettered with a reason. Retrying it would only waste time.",
              hi: "जो message कभी सफल नहीं हो सकता उसे reason के साथ dead-letter करते हैं। उसे retry करना सिर्फ़ समय की बर्बादी है।",
              hg: "Jo message kabhi safal nahi ho sakta use reason ke saath dead-letter karte hain. Use retry karna sirf samay ki barbaadi hai."
            }
          },
          {
            code: "await notifier.SendAsync(parts[1], $\"Ticket {parts[0]} received\");",
            note: {
              en: "The real work is one call to a service. If it throws, the exception leaves the function and the message is delivered again (lesson 3).",
              hi: "असली काम एक service call है। अगर यह throw करे तो exception function से बाहर जाता है और message दोबारा आता है (पाठ 3)।",
              hg: "Asli kaam ek service call hai. Agar yeh throw kare to exception function se bahar jaata hai aur message dobara aata hai (lesson 3)."
            }
          },
          {
            code: "await actions.CompleteAsync(message);",
            note: {
              en: "With <code>AutoCompleteMessages = false</code> you settle the message yourself: complete only after the work succeeded.",
              hi: "<code>AutoCompleteMessages = false</code> के साथ message को तुम खुद settle करते हो: काम सफल होने के बाद ही complete।",
              hg: "<code>AutoCompleteMessages = false</code> ke saath message ko tum khud settle karte ho: kaam safal hone ke baad hi complete."
            }
          },
          {
            code: "await function.Run(message, actions);",
            note: {
              en: "The \"test\" calls the handler like any method, with a fake <code>actions</code> object. No Azure, no emulator.",
              hi: "\"Test\" handler को किसी भी method की तरह call करता है, एक fake <code>actions</code> object के साथ। न Azure, न emulator।",
              hg: "\"Test\" handler ko kisi bhi method ki tarah call karta hai, ek fake <code>actions</code> object ke saath. Na Azure, na emulator."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Starting new work on the in-process model. In-process stops at .NET 8 (.NET 9 and 10 need isolated), and its support ends on 10 November 2026.</li><li>Putting the logic inside the trigger method with Azure types everywhere. It cannot be tested without Azure; keep the method thin.</li><li>Catching every exception and only logging it. The platform then thinks the message succeeded. Let the exception out, unless you decided to dead-letter.</li></ul>",
          hi: "<ul><li>नया काम in-process model पर शुरू करना। In-process .NET 8 पर रुक जाता है (.NET 9 और 10 को isolated चाहिए), और उसका support 10 November 2026 को खत्म होता है।</li><li>Logic को trigger method के अंदर रखना और हर जगह Azure types। इसे Azure के बिना test नहीं कर सकते; method पतला रखो।</li><li>हर exception पकड़कर सिर्फ़ log करना। तब platform समझता है कि message सफल रहा। Exception बाहर जाने दो, जब तक तुमने dead-letter करने का फ़ैसला न किया हो।</li></ul>",
          hg: "<ul><li>Naya kaam in-process model par shuru karna. In-process .NET 8 par ruk jaata hai (.NET 9 aur 10 ko isolated chahiye), aur uska support 10 November 2026 ko khatam hota hai.</li><li>Logic ko trigger method ke andar rakhna aur har jagah Azure types. Ise Azure ke bina test nahi kar sakte; method patla rakho.</li><li>Har exception pakadkar sirf log karna. Tab platform samajhta hai ki message safal raha. Exception bahar jaane do, jab tak tumne dead-letter karne ka faisla na kiya ho.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a Function for \"when this message or event arrives, do one small thing\": send an SMS, update a record. For a steady, always-busy API use App Service instead. A job that runs for many minutes needs a check of the plan's time limits, or Durable Functions or a worker (see the Deep Dive).</p>",
          hi: "<p>\"जब यह message या event आए, एक छोटा काम करो\" के लिए Function use करो: SMS भेजना, record update करना। हमेशा busy रहने वाली steady API के लिए App Service use करो। कई मिनट चलने वाले job के लिए plan की time limits देखो, या Durable Functions या worker लो (Deep Dive देखो)।</p>",
          hg: "<p>\"Jab yeh message ya event aaye, ek chhota kaam karo\" ke liye Function use karo: SMS bhejna, record update karna. Hamesha busy rehne wali steady API ke liye App Service use karo. Kai minute chalne wale job ke liye plan ki time limits dekho, ya Durable Functions ya worker lo (Deep Dive dekho).</p>"
        },
        exercise: {
          task: {
            en: "<p>Teach the function a second subject, <code>TicketClosed</code>, with body <code>\"501|Asha\"</code> (two parts). It should send \"Ticket 501 closed\" and complete. A wrong payload must be dead-lettered as <code>BadPayload</code>.</p>",
            hi: "<p>Function को दूसरा subject <code>TicketClosed</code> सिखाओ, body <code>\"501|Asha\"</code> (दो हिस्से)। यह \"Ticket 501 closed\" भेजे और complete करे। ग़लत payload <code>BadPayload</code> के रूप में dead-letter होना चाहिए।</p>",
            hg: "<p>Function ko doosra subject <code>TicketClosed</code> sikhao, body <code>\"501|Asha\"</code> (do hisse). Yeh \"Ticket 501 closed\" bheje aur complete kare. Galat payload <code>BadPayload</code> ke roop mein dead-letter hona chahiye.</p>"
          },
          hint: {
            en: "<p>Choose the expected number of parts and the text from the subject, then reuse the same checks.</p>",
            hi: "<p>Subject से parts की expected संख्या और text चुनो, फिर वही checks दोबारा use करो।</p>",
            hg: "<p>Subject se parts ki expected sankhya aur text chuno, phir wahi checks dobara use karo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: two subjects, one thin handler",
              hi: "हल: दो subjects, एक पतला handler",
              hg: "Solution: do subjects, ek patla handler"
            },
            src: "var notifier = new FakeNotifier();\nvar function = new TicketFunction(notifier);\n\nforeach (var message in new[]\n{\n    new TicketMessage(\"501\", \"TicketCreated\", \"501|Asha|Login fails\", 1),\n    new TicketMessage(\"501\", \"TicketClosed\", \"501|Asha\", 1),\n    new TicketMessage(\"504\", \"TicketClosed\", \"504\", 1)\n})\n{\n    var actions = new FakeActions();\n    await function.Run(message, actions);\n    Console.WriteLine($\"{message.Subject} {message.MessageId} -> {actions.Outcome}\");\n}\nConsole.WriteLine(string.Join(\" | \", notifier.Sent));\n\nrecord TicketMessage(string MessageId, string Subject, string Body, int DeliveryCount);\n\ninterface INotifier { Task SendAsync(string to, string text); }\n\ninterface IMessageActions\n{\n    Task CompleteAsync(TicketMessage message);\n    Task DeadLetterAsync(TicketMessage message, string reason);\n}\n\nclass TicketFunction(INotifier notifier)\n{\n    public async Task Run(TicketMessage message, IMessageActions actions)\n    {\n        var parts = message.Body.Split('|');\n        var (expected, text) = message.Subject switch\n        {\n            \"TicketCreated\" => (3, $\"Ticket {parts[0]} received\"),\n            \"TicketClosed\" => (2, $\"Ticket {parts[0]} closed\"),\n            _ => (0, \"\")\n        };\n        if (expected == 0)\n        {\n            await actions.DeadLetterAsync(message, \"UnknownSubject\");\n            return;\n        }\n        if (parts.Length != expected)\n        {\n            await actions.DeadLetterAsync(message, \"BadPayload\");\n            return;\n        }\n        await notifier.SendAsync(parts[1], text);\n        await actions.CompleteAsync(message);\n    }\n}\n\nclass FakeNotifier : INotifier\n{\n    public List<string> Sent { get; } = new();\n    public Task SendAsync(string to, string text) { Sent.Add($\"SMS {to}: {text}\"); return Task.CompletedTask; }\n}\n\nclass FakeActions : IMessageActions\n{\n    public string Outcome { get; private set; } = \"not settled\";\n    public Task CompleteAsync(TicketMessage message) { Outcome = \"completed\"; return Task.CompletedTask; }\n    public Task DeadLetterAsync(TicketMessage message, string reason) { Outcome = $\"dead-lettered ({reason})\"; return Task.CompletedTask; }\n}",
            check: "run",
            expected: "TicketCreated 501 -> completed\nTicketClosed 501 -> completed\nTicketClosed 504 -> dead-lettered (BadPayload)\nSMS Asha: Ticket 501 received | SMS Asha: Ticket 501 closed"
          }
        },
        quiz: {
          q: {
            en: "You start a new Azure Functions app for .NET 10. Which model do you use?",
            hi: "तुम .NET 10 के लिए नया Azure Functions app शुरू कर रहे हो। कौन सा model use करोगे?",
            hg: "Tum .NET 10 ke liye naya Azure Functions app shuru kar rahe ho. Kaun sa model use karoge?"
          },
          options: [
            {
              en: "The isolated worker model",
              hi: "Isolated worker model (अपना अलग process)",
              hg: "Isolated worker model (apna alag process)"
            },
            {
              en: "The in-process model",
              hi: "In-process model (host के अंदर ही चलने वाला)",
              hg: "In-process model (host ke andar hi chalne wala)"
            },
            {
              en: "Whichever has the faster cold start",
              hi: "जिसका cold start तेज़ हो",
              hg: "Jiska cold start tez ho"
            },
            {
              en: "Both are supported equally for years",
              hi: "दोनों सालों तक बराबर support होंगे",
              hg: "Dono saalon tak barabar support honge"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>In-process goes only up to .NET 8 and its support ends on 10 November 2026, so .NET 10 needs the isolated worker model (which also gives you your own <code>Program.cs</code> and DI).</p>",
            hi: "<p>In-process सिर्फ़ .NET 8 तक जाता है और उसका support 10 November 2026 को खत्म होता है, इसलिए .NET 10 को isolated worker model चाहिए (इसमें अपना <code>Program.cs</code> और DI भी मिलता है)।</p>",
            hg: "<p>In-process sirf .NET 8 tak jaata hai aur uska support 10 November 2026 ko khatam hota hai, isliye .NET 10 ko isolated worker model chahiye (isme apna <code>Program.cs</code> aur DI bhi milta hai).</p>"
          }
        },
        recap: {
          en: "<ul><li>A Function runs when a trigger fires; use the isolated worker model.</li><li>Keep the handler thin: parse, decide, call a service, settle.</li><li>Dead-letter what can never succeed; let real failures throw so the message is retried.</li></ul>",
          hi: "<ul><li>Function trigger चलने पर run होता है; isolated worker model use करो।</li><li>Handler पतला रखो: parse, decide, service call, settle।</li><li>जो कभी सफल नहीं होगा उसे dead-letter करो; असली failures को throw होने दो ताकि message retry हो।</li></ul>",
          hg: "<ul><li>Function trigger chalne par run hota hai; isolated worker model use karo.</li><li>Handler patla rakho: parse, decide, service call, settle.</li><li>Jo kabhi safal nahi hoga use dead-letter karo; asli failures ko throw hone do taaki message retry ho.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A Service Bus-style Function handler run as a plain method with fake notifier and actions (offline)",
            hi: "Service Bus जैसा Function handler, सादे method की तरह, fake notifier और actions के साथ (offline)",
            hg: "Service Bus jaisa Function handler, sade method ki tarah, fake notifier aur actions ke saath (offline)"
          },
          src: "var notifier = new FakeNotifier();\nvar function = new TicketCreatedFunction(notifier);\n\nforeach (var message in new[]\n{\n    new TicketMessage(\"501\", \"TicketCreated\", \"501|Asha|Login fails\"),\n    new TicketMessage(\"502\", \"InvoiceCreated\", \"502|Ravi|Wrong bill\"),\n    new TicketMessage(\"503\", \"TicketCreated\", \"not a ticket\")\n})\n{\n    var actions = new FakeActions();\n    await function.Run(message, actions);\n    Console.WriteLine($\"{message.MessageId} -> {actions.Outcome}\");\n}\nConsole.WriteLine(string.Join(\" | \", notifier.Sent));\n\nrecord TicketMessage(string MessageId, string Subject, string Body);\ninterface INotifier { Task SendAsync(string to, string text); }\ninterface IMessageActions\n{\n    Task CompleteAsync(TicketMessage message);\n    Task DeadLetterAsync(TicketMessage message, string reason);\n}\n\n// The Function class is thin: parse, decide, call a service, settle the message.\nclass TicketCreatedFunction(INotifier notifier)\n{\n    public async Task Run(TicketMessage message, IMessageActions actions)\n    {\n        var parts = message.Body.Split('|');\n        if (message.Subject != \"TicketCreated\")\n            await actions.DeadLetterAsync(message, \"UnknownSubject\");   // can never succeed: no retry\n        else if (parts.Length != 3)\n            await actions.DeadLetterAsync(message, \"BadPayload\");\n        else\n        {\n            await notifier.SendAsync(parts[1], $\"Ticket {parts[0]} received\");   // an exception here = retry\n            await actions.CompleteAsync(message);\n        }\n    }\n}\n\nclass FakeNotifier : INotifier\n{\n    public List<string> Sent { get; } = new();\n    public Task SendAsync(string to, string text) { Sent.Add($\"SMS {to}: {text}\"); return Task.CompletedTask; }\n}\n\nclass FakeActions : IMessageActions\n{\n    public string Outcome { get; private set; } = \"not settled\";\n    public Task CompleteAsync(TicketMessage m) { Outcome = \"completed\"; return Task.CompletedTask; }\n    public Task DeadLetterAsync(TicketMessage m, string reason) { Outcome = $\"dead-lettered ({reason})\"; return Task.CompletedTask; }\n}",
          check: "run",
          expected: "501 -> completed\n502 -> dead-lettered (UnknownSubject)\n503 -> dead-lettered (BadPayload)\nSMS Asha: Ticket 501 received"
        }
      ]
    },
    {
      id: "service-bus-peek-lock",
      depth: "short",
      title: {
        en: "Service Bus: peek-lock, retries and the dead-letter queue",
        hi: "Service Bus: peek-lock, retries और dead-letter queue",
        hg: "Service Bus: peek-lock, retries aur dead-letter queue"
      },
      lesson: {
        buildsOn: {
          en: "<p>Day 16 taught the general ideas: at-least-once delivery, the idempotent consumer and the dead-letter queue. Lesson 2's function settled messages with <code>CompleteAsync</code> and <code>DeadLetterAsync</code>.</p><p>This lesson shows how <b>Azure Service Bus</b> does those ideas: the peek-lock, the lock time, <code>DeliveryCount</code> and the DLQ, modelled in memory so you can run it.</p>",
          hi: "<p>Day 16 में आम ideas सीखे: at-least-once delivery, idempotent consumer और dead-letter queue। पाठ 2 के function ने messages को <code>CompleteAsync</code> और <code>DeadLetterAsync</code> से settle किया।</p><p>यह पाठ दिखाता है कि <b>Azure Service Bus</b> इन ideas को कैसे करता है: peek-lock, lock का समय, <code>DeliveryCount</code> और DLQ, memory में बनाकर ताकि तुम चलाकर देख सको।</p>",
          hg: "<p>Day 16 mein aam ideas seekhe: at-least-once delivery, idempotent consumer aur dead-letter queue. Lesson 2 ke function ne messages ko <code>CompleteAsync</code> aur <code>DeadLetterAsync</code> se settle kiya.</p><p>Yeh lesson dikhata hai ki <b>Azure Service Bus</b> in ideas ko kaise karta hai: peek-lock, lock ka samay, <code>DeliveryCount</code> aur DLQ, memory mein banakar taaki tum chalakar dekh sako.</p>"
        },
        what: {
          en: "<p><b>Service Bus</b> is a managed broker for business messages. With <b>peek-lock</b> a receiver gets the message and a <b>lock</b> (default 1 minute, at most 5), but the message is still stored.</p><p>The receiver then <b>completes</b> it (deleted), <b>abandons</b> it (unlocked, back in the queue with the delivery count plus one) or <b>dead-letters</b> it (moved to the dead-letter queue, DLQ). A crash means the lock expires and the message comes back. After <code>MaxDeliveryCount</code> deliveries (default <b>10</b>) it goes to the DLQ with the reason <code>MaxDeliveryCountExceeded</code>.</p>",
          hi: "<p><b>Service Bus</b> business messages के लिए managed broker है। <b>Peek-lock</b> में receiver को message और एक <b>lock</b> मिलता है (default 1 मिनट, ज़्यादा से ज़्यादा 5), पर message अब भी store रहता है।</p><p>फिर receiver उसे <b>complete</b> करता है (delete), <b>abandon</b> करता है (unlock, delivery count एक बढ़कर queue में वापस) या <b>dead-letter</b> करता है (dead-letter queue, DLQ में चला जाता है)। Crash हो तो lock expire होता है और message वापस आता है। <code>MaxDeliveryCount</code> deliveries (default <b>10</b>) के बाद वह reason <code>MaxDeliveryCountExceeded</code> के साथ DLQ में जाता है।</p>",
          hg: "<p><b>Service Bus</b> business messages ke liye managed broker hai. <b>Peek-lock</b> mein receiver ko message aur ek <b>lock</b> milta hai (default 1 minute, zyada se zyada 5), par message ab bhi store rehta hai.</p><p>Phir receiver use <b>complete</b> karta hai (delete), <b>abandon</b> karta hai (unlock, delivery count ek badhkar queue mein wapas) ya <b>dead-letter</b> karta hai (dead-letter queue, DLQ mein chala jaata hai). Crash ho to lock expire hota hai aur message wapas aata hai. <code>MaxDeliveryCount</code> deliveries (default <b>10</b>) ke baad woh reason <code>MaxDeliveryCountExceeded</code> ke saath DLQ mein jaata hai.</p>"
        },
        why: {
          en: "<p>You do not write the retry loop or the poison-message counter yourself, as Day 16's program did. A crashed consumer simply lets the lock expire; Service Bus counts the deliveries and parks a poison message in the DLQ with a reason you can read. Delivery is still at-least-once, so Day 16's idempotent consumer stays.</p>",
          hi: "<p>Retry loop या poison message की गिनती तुम्हें खुद नहीं लिखनी, जैसे Day 16 के program में लिखी थी। Consumer crash हो तो lock बस expire हो जाता है; Service Bus deliveries गिनता है और poison message को पढ़ने लायक़ reason के साथ DLQ में रख देता है। Delivery फिर भी at-least-once है, इसलिए Day 16 का idempotent consumer रहता है।</p>",
          hg: "<p>Retry loop ya poison message ki ginti tumhe khud nahi likhni, jaise Day 16 ke program mein likhi thi. Consumer crash ho to lock bas expire ho jaata hai; Service Bus deliveries ginta hai aur poison message ko padhne laayak reason ke saath DLQ mein rakh deta hai. Delivery phir bhi at-least-once hai, isliye Day 16 ka idempotent consumer rehta hai.</p>"
        },
        analogy: {
          en: "<p>A courier trying to deliver a parcel. Each try is a delivery attempt. If nobody is home he brings it back (abandon) and tries again tomorrow. After three failed tries the parcel goes to the \"undelivered\" shelf at the post office (the DLQ), where a person looks at it.</p>",
          hi: "<p>Courier एक parcel deliver करने की कोशिश कर रहा है। हर कोशिश एक delivery attempt है। घर पर कोई न मिले तो वह parcel वापस ले आता है (abandon) और कल फिर कोशिश करता है। तीन बार fail होने पर parcel post office की \"undelivered\" shelf (DLQ) में जाता है, जहाँ कोई इंसान उसे देखता है।</p>",
          hg: "<p>Courier ek parcel deliver karne ki koshish kar raha hai. Har koshish ek delivery attempt hai. Ghar par koi na mile to woh parcel wapas le aata hai (abandon) aur kal phir koshish karta hai. Teen baar fail hone par parcel post office ki \"undelivered\" shelf (DLQ) mein jaata hai, jahan koi insaan use dekhta hai.</p>"
        },
        lines: [
          {
            code: "var queue = new PeekLockQueue(maxDeliveryCount: 3);",
            note: {
              en: "We use 3 so the example is short; the real default is 10. After this many deliveries the queue stops retrying.",
              hi: "Example छोटा रखने के लिए 3 रखा है; असली default 10 है। इतनी deliveries के बाद queue retry करना बंद कर देती है।",
              hg: "Example chhota rakhne ke liye 3 rakha hai; asli default 10 hai. Itni deliveries ke baad queue retry karna band kar deti hai."
            }
          },
          {
            code: "var processed = new HashSet<string>();",
            note: {
              en: "The idempotent consumer from Day 16, unchanged. Service Bus <b>duplicate detection</b> (Standard and Premium) drops a repeated <code>MessageId</code> from a sender, but not a redelivery after a lost lock, so you still need it.",
              hi: "Day 16 का idempotent consumer, बिना बदलाव। Service Bus का <b>duplicate detection</b> (Standard और Premium) sender से दोबारा आया <code>MessageId</code> हटा देता है, पर lock खोने के बाद की redelivery नहीं, इसलिए यह फिर भी चाहिए।",
              hg: "Day 16 ka idempotent consumer, bina badlaav. Service Bus ka <b>duplicate detection</b> (Standard aur Premium) sender se dobara aaya <code>MessageId</code> hata deta hai, par lock khone ke baad ki redelivery nahi, isliye yeh phir bhi chahiye."
            }
          },
          {
            code: "if (processed.Contains(message.MessageId))",
            note: {
              en: "The second <code>TKT-501</code> is a duplicate. We complete it without repeating the work, so Asha gets one SMS, not two.",
              hi: "दूसरा <code>TKT-501</code> duplicate है। हम काम दोहराए बिना उसे complete करते हैं, ताकि Asha को एक SMS मिले, दो नहीं।",
              hg: "Doosra <code>TKT-501</code> duplicate hai. Hum kaam dohraye bina use complete karte hain, taaki Asha ko ek SMS mile, do nahi."
            }
          },
          {
            code: "queue.Abandon(message);",
            note: {
              en: "In real code a thrown exception, or a lock that expires, has the same effect: the message goes back and its delivery count rises.",
              hi: "असली code में thrown exception, या expire हुआ lock, यही असर करता है: message वापस जाता है और उसका delivery count बढ़ता है।",
              hg: "Asli code mein thrown exception, ya expire hua lock, yahi asar karta hai: message wapas jaata hai aur uska delivery count badhta hai."
            }
          },
          {
            code: "message = next with { DeliveryCount = next.DeliveryCount + 1 };",
            note: {
              en: "Every receive is one delivery attempt. The queue, not your code, counts them.",
              hi: "हर receive एक delivery attempt है। इन्हें queue गिनती है, तुम्हारा code नहीं।",
              hg: "Har receive ek delivery attempt hai. Inhe queue ginti hai, tumhara code nahi."
            }
          },
          {
            code: "DeadLetter(message, \"MaxDeliveryCountExceeded\");",
            note: {
              en: "The poison message <code>TKT-502</code> is parked with a reason after its third failed delivery. Monitor the DLQ: a growing DLQ means a bug.",
              hi: "Poison message <code>TKT-502</code> तीसरी बार fail होने के बाद reason के साथ रख दिया जाता है। DLQ को monitor करो: बढ़ती DLQ का मतलब bug है।",
              hg: "Poison message <code>TKT-502</code> teesri baar fail hone ke baad reason ke saath rakh diya jaata hai. DLQ ko monitor karo: badhti DLQ ka matlab bug hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Calling <code>CompleteAsync</code> yourself while <code>AutoCompleteMessages</code> is still on (the Functions default). Pick one: turn it off when you settle in code.</li><li>Thinking the DLQ cleans itself up or retries. Messages stay there until someone reads them: alert on the DLQ count, fix the cause, then resubmit (Service Bus Explorer in the portal can do it).</li><li>Work longer than the lock can last. Functions renews the lock only up to <code>maxAutoLockRenewalDuration</code> (default 5 minutes); after that another receiver gets the message and the work runs twice.</li></ul>",
          hi: "<ul><li><code>AutoCompleteMessages</code> चालू रहते हुए (Functions का default) खुद <code>CompleteAsync</code> call करना। एक ही चुनो: code में settle करते हो तो इसे बंद करो।</li><li>यह सोचना कि DLQ अपने आप साफ़ होती है या retry करती है। Messages तब तक वहीं रहते हैं जब तक कोई उन्हें न पढ़े: DLQ count पर alert लगाओ, वजह ठीक करो, फिर resubmit करो (portal का Service Bus Explorer यह कर सकता है)।</li><li>Lock जितना चल सकता है उससे लंबा काम। Functions lock को सिर्फ़ <code>maxAutoLockRenewalDuration</code> (default 5 मिनट) तक renew करता है; उसके बाद दूसरे receiver को message मिलता है और काम दो बार चलता है।</li></ul>",
          hg: "<ul><li><code>AutoCompleteMessages</code> chalu rehte hue (Functions ka default) khud <code>CompleteAsync</code> call karna. Ek hi chuno: code mein settle karte ho to ise band karo.</li><li>Yeh sochna ki DLQ apne aap saaf hoti hai ya retry karti hai. Messages tab tak wahin rehte hain jab tak koi unhe na padhe: DLQ count par alert lagao, wajah theek karo, phir resubmit karo (portal ka Service Bus Explorer yeh kar sakta hai).</li><li>Lock jitna chal sakta hai usse lamba kaam. Functions lock ko sirf <code>maxAutoLockRenewalDuration</code> (default 5 minute) tak renew karta hai; uske baad doosre receiver ko message milta hai aur kaam do baar chalta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use Service Bus with peek-lock for business commands you cannot lose: assign a ticket, charge a payment. Do not use it for raw telemetry volume (that is Event Hubs; see the Deep Dive), and do not use receive-and-delete for anything you cannot lose. Details like sessions and scheduled messages are in the Deep Dive.</p>",
          hi: "<p>जिन business commands को खो नहीं सकते उनके लिए peek-lock के साथ Service Bus use करो: ticket assign करना, payment charge करना। Raw telemetry के भारी volume के लिए इसे use मत करो (वह Event Hubs है; Deep Dive देखो), और जिसे खो नहीं सकते उसके लिए receive-and-delete मत लो। Sessions और scheduled messages जैसी बातें Deep Dive में हैं।</p>",
          hg: "<p>Jin business commands ko kho nahi sakte unke liye peek-lock ke saath Service Bus use karo: ticket assign karna, payment charge karna. Raw telemetry ke bhaari volume ke liye ise use mat karo (woh Event Hubs hai; Deep Dive dekho), aur jise kho nahi sakte uske liye receive-and-delete mat lo. Sessions aur scheduled messages jaisi baatein Deep Dive mein hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Some messages can never succeed, for example one that is plainly broken. Change the consumer so the poison message is dead-lettered at once with the reason <code>CannotSucceed</code>, with no retries.</p>",
            hi: "<p>कुछ messages कभी सफल नहीं हो सकते, जैसे साफ़ तौर पर टूटा हुआ message। Consumer बदलो ताकि poison message तुरंत reason <code>CannotSucceed</code> के साथ dead-letter हो, बिना retries के।</p>",
            hg: "<p>Kuch messages kabhi safal nahi ho sakte, jaise saaf taur par toota hua message. Consumer badlo taaki poison message turant reason <code>CannotSucceed</code> ke saath dead-letter ho, bina retries ke.</p>"
          },
          hint: {
            en: "<p>The queue already has a <code>DeadLetter(message, reason)</code> method. Call it instead of <code>Abandon</code>.</p>",
            hi: "<p>Queue में पहले से <code>DeadLetter(message, reason)</code> method है। <code>Abandon</code> की जगह उसे call करो।</p>",
            hg: "<p>Queue mein pehle se <code>DeadLetter(message, reason)</code> method hai. <code>Abandon</code> ki jagah use call karo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: dead-letter at once",
              hi: "हल: तुरंत dead-letter",
              hg: "Solution: turant dead-letter"
            },
            src: "var queue = new PeekLockQueue(maxDeliveryCount: 3);   // the real default is 10\nqueue.Send(\"TKT-501\", \"Asha: login fails\");\nqueue.Send(\"TKT-502\", \"Ravi: poison\");               // this one always fails\nqueue.Send(\"TKT-501\", \"Asha: login fails\");          // sent twice by mistake\n\nvar processed = new HashSet<string>();               // idempotent consumer: remember finished work\nwhile (queue.TryReceive(out var message))\n{\n    string result;\n    if (processed.Contains(message.MessageId)) { queue.Complete(message); result = \"duplicate, completed without work\"; }\n    else if (message.Body.Contains(\"poison\")) { queue.DeadLetter(message, \"CannotSucceed\"); result = \"dead-lettered at once\"; }\n    else { processed.Add(message.MessageId); queue.Complete(message); result = \"work done, completed\"; }\n    Console.WriteLine($\"{message.MessageId} delivery {message.DeliveryCount}: {result}\");\n}\nforeach (var dead in queue.DeadLetters)\n    Console.WriteLine($\"DLQ: {dead.Message.MessageId} reason={dead.Reason}\");\n\nrecord QueueMessage(string MessageId, string Body, int DeliveryCount = 0);\nrecord DeadLetter(QueueMessage Message, string Reason);\n\nclass PeekLockQueue(int maxDeliveryCount)\n{\n    private readonly Queue<QueueMessage> _active = new();\n    public List<DeadLetter> DeadLetters { get; } = new();\n\n    public void Send(string id, string body) => _active.Enqueue(new QueueMessage(id, body));\n\n    // Peek-lock: the message is handed out and locked, its delivery count goes up.\n    public bool TryReceive(out QueueMessage message)\n    {\n        message = null!;\n        if (!_active.TryDequeue(out var next)) return false;\n        message = next with { DeliveryCount = next.DeliveryCount + 1 };\n        return true;\n    }\n\n    public void Complete(QueueMessage message) { }   // settled: gone for good\n\n    public void Abandon(QueueMessage message)        // visible again, or parked after too many tries\n    {\n        if (message.DeliveryCount >= maxDeliveryCount) DeadLetter(message, \"MaxDeliveryCountExceeded\");\n        else _active.Enqueue(message);\n    }\n\n    public void DeadLetter(QueueMessage message, string reason) => DeadLetters.Add(new DeadLetter(message, reason));\n}",
            check: "run",
            expected: "TKT-501 delivery 1: work done, completed\nTKT-502 delivery 1: dead-lettered at once\nTKT-501 delivery 1: duplicate, completed without work\nDLQ: TKT-502 reason=CannotSucceed"
          }
        },
        quiz: {
          q: {
            en: "The handler sent the SMS but crashed before <code>Complete</code>. What happens to the message?",
            hi: "Handler ने SMS भेज दिया पर <code>Complete</code> से पहले crash हो गया। Message का क्या होगा?",
            hg: "Handler ne SMS bhej diya par <code>Complete</code> se pehle crash ho gaya. Message ka kya hoga?"
          },
          options: [
            {
              en: "Service Bus undoes the SMS",
              hi: "Service Bus SMS को undo कर देगा",
              hg: "Service Bus SMS ko undo kar dega"
            },
            {
              en: "It is lost, because the SMS already went out",
              hi: "वह खो जाएगा, क्योंकि SMS जा चुका है",
              hg: "Woh kho jaayega, kyunki SMS ja chuka hai"
            },
            {
              en: "It goes to the DLQ immediately",
              hi: "वह तुरंत DLQ में जाएगा",
              hg: "Woh turant DLQ mein jaayega"
            },
            {
              en: "The lock expires and it is delivered again, so the handler must be idempotent",
              hi: "Lock expire होगा और वह दोबारा आएगा, इसलिए handler idempotent होना चाहिए",
              hg: "Lock expire hoga aur woh dobara aayega, isliye handler idempotent hona chahiye"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>Peek-lock only deletes the message on <code>Complete</code>. A crash means the lock expires and the message is delivered again, which is why delivery is at-least-once and the work must be idempotent.</p>",
            hi: "<p>Peek-lock message को सिर्फ़ <code>Complete</code> पर delete करता है। Crash का मतलब lock expire होना और message का दोबारा आना है, इसीलिए delivery at-least-once है और काम idempotent होना चाहिए।</p>",
            hg: "<p>Peek-lock message ko sirf <code>Complete</code> par delete karta hai. Crash ka matlab lock expire hona aur message ka dobara aana hai, isiliye delivery at-least-once hai aur kaam idempotent hona chahiye.</p>"
          }
        },
        recap: {
          en: "<ul><li>Peek-lock: receive and lock, then complete, abandon or dead-letter.</li><li>After MaxDeliveryCount (default 10) deliveries the message goes to the DLQ.</li><li>Delivery is still at-least-once: keep Day 16's idempotent consumer and alert on the DLQ count.</li></ul>",
          hi: "<ul><li>Peek-lock: receive और lock, फिर complete, abandon या dead-letter।</li><li>MaxDeliveryCount (default 10) deliveries के बाद message DLQ में जाता है।</li><li>Delivery फिर भी at-least-once है: Day 16 का idempotent consumer रखो और DLQ count पर alert लगाओ।</li></ul>",
          hg: "<ul><li>Peek-lock: receive aur lock, phir complete, abandon ya dead-letter.</li><li>MaxDeliveryCount (default 10) deliveries ke baad message DLQ mein jaata hai.</li><li>Delivery phir bhi at-least-once hai: Day 16 ka idempotent consumer rakho aur DLQ count par alert lagao.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Peek-lock queue in memory: delivery count, idempotent consumer and the DLQ (offline)",
            hi: "Memory में peek-lock queue: delivery count, idempotent consumer और DLQ (offline)",
            hg: "Memory mein peek-lock queue: delivery count, idempotent consumer aur DLQ (offline)"
          },
          src: "var queue = new PeekLockQueue(maxDeliveryCount: 3);   // the real default is 10\nqueue.Send(\"TKT-501\", \"Asha: login fails\");\nqueue.Send(\"TKT-502\", \"Ravi: poison\");               // this one always fails\nqueue.Send(\"TKT-501\", \"Asha: login fails\");          // sent twice by mistake\n\nvar processed = new HashSet<string>();               // idempotent consumer: remember finished work\nwhile (queue.TryReceive(out var message))\n{\n    string result;\n    if (processed.Contains(message.MessageId)) { queue.Complete(message); result = \"duplicate, completed without work\"; }\n    else if (message.Body.Contains(\"poison\")) { queue.Abandon(message); result = \"failed, abandoned\"; }\n    else { processed.Add(message.MessageId); queue.Complete(message); result = \"work done, completed\"; }\n    Console.WriteLine($\"{message.MessageId} delivery {message.DeliveryCount}: {result}\");\n}\nforeach (var dead in queue.DeadLetters)\n    Console.WriteLine($\"DLQ: {dead.Message.MessageId} reason={dead.Reason}\");\n\nrecord QueueMessage(string MessageId, string Body, int DeliveryCount = 0);\nrecord DeadLetter(QueueMessage Message, string Reason);\n\nclass PeekLockQueue(int maxDeliveryCount)\n{\n    private readonly Queue<QueueMessage> _active = new();\n    public List<DeadLetter> DeadLetters { get; } = new();\n\n    public void Send(string id, string body) => _active.Enqueue(new QueueMessage(id, body));\n\n    // Peek-lock: the message is handed out and locked, its delivery count goes up.\n    public bool TryReceive(out QueueMessage message)\n    {\n        message = null!;\n        if (!_active.TryDequeue(out var next)) return false;\n        message = next with { DeliveryCount = next.DeliveryCount + 1 };\n        return true;\n    }\n\n    public void Complete(QueueMessage message) { }   // settled: gone for good\n\n    public void Abandon(QueueMessage message)        // visible again, or parked after too many tries\n    {\n        if (message.DeliveryCount >= maxDeliveryCount) DeadLetter(message, \"MaxDeliveryCountExceeded\");\n        else _active.Enqueue(message);\n    }\n\n    public void DeadLetter(QueueMessage message, string reason) => DeadLetters.Add(new DeadLetter(message, reason));\n}",
          check: "run",
          expected: "TKT-501 delivery 1: work done, completed\nTKT-502 delivery 1: failed, abandoned\nTKT-501 delivery 1: duplicate, completed without work\nTKT-502 delivery 2: failed, abandoned\nTKT-502 delivery 3: failed, abandoned\nDLQ: TKT-502 reason=MaxDeliveryCountExceeded"
        }
      ]
    },
    {
      id: "managed-identity-chain",
      depth: "short",
      title: {
        en: "Managed Identity and the credential chain",
        hi: "Managed Identity और credential chain",
        hg: "Managed Identity aur credential chain"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lessons 2 and 3 used <code>Connection = \"ServiceBus\"</code> with no password anywhere. How does the app prove who it is?</p><p>Today's answer is a <b>managed identity</b>, and the code that picks it: the credential chain behind <code>DefaultAzureCredential</code>. We model the chain in plain C#, so nothing here calls Azure.</p>",
          hi: "<p>पाठ 2 और 3 में <code>Connection = \"ServiceBus\"</code> कहीं भी password के बिना use हुआ। App कैसे साबित करता है कि वह कौन है?</p><p>आज का जवाब है <b>managed identity</b>, और वह code जो उसे चुनता है: <code>DefaultAzureCredential</code> के पीछे की credential chain। Chain को सादे C# में बनाते हैं, इसलिए यहाँ कुछ भी Azure को call नहीं करता।</p>",
          hg: "<p>Lesson 2 aur 3 mein <code>Connection = \"ServiceBus\"</code> kahin bhi password ke bina use hua. App kaise saabit karta hai ki woh kaun hai?</p><p>Aaj ka jawab hai <b>managed identity</b>, aur woh code jo use chunta hai: <code>DefaultAzureCredential</code> ke peeche ki credential chain. Chain ko sade C# mein banate hain, isliye yahan kuch bhi Azure ko call nahi karta.</p>"
        },
        what: {
          en: "<p>A <b>managed identity</b> is an identity in Microsoft Entra ID that Azure creates and rotates for a resource such as an App Service or a Function. Nobody stores a password. <b>System-assigned</b> lives and dies with its one resource; <b>user-assigned</b> is a separate resource you attach to many apps.</p><p>The identity can do nothing until you give it a role (RBAC) on the target, at the smallest scope. In code, <code>DefaultAzureCredential</code> tries credentials in a fixed order and the first one that works wins: environment variables, workload identity, managed identity, Visual Studio, Visual Studio Code, Azure CLI, Azure PowerShell, Azure Developer CLI, then Broker (interactive browser is off by default). The list changes between Azure.Identity versions; our program is a <b>simplified model</b> with only three links.</p>",
          hi: "<p><b>Managed identity</b> Microsoft Entra ID में एक identity है जिसे Azure किसी resource (जैसे App Service या Function) के लिए बनाता और rotate करता है। कोई password store नहीं करता। <b>System-assigned</b> अपने एक resource के साथ जीती-मरती है; <b>user-assigned</b> अलग resource है जिसे कई apps से जोड़ सकते हो।</p><p>जब तक target पर उसे role (RBAC) न दो, यह identity कुछ नहीं कर सकती, और role सबसे छोटे scope पर दो। Code में <code>DefaultAzureCredential</code> तय क्रम में credentials आज़माता है और जो पहला चल जाए वही जीतता है: environment variables, workload identity, managed identity, Visual Studio, Visual Studio Code, Azure CLI, Azure PowerShell, Azure Developer CLI, फिर Broker (interactive browser default में बंद है)। यह list Azure.Identity versions के साथ बदलती है; हमारा program सिर्फ़ तीन कड़ियों वाला <b>simplified model</b> है।</p>",
          hg: "<p><b>Managed identity</b> Microsoft Entra ID mein ek identity hai jise Azure kisi resource (jaise App Service ya Function) ke liye banata aur rotate karta hai. Koi password store nahi karta. <b>System-assigned</b> apne ek resource ke saath jeeti-marti hai; <b>user-assigned</b> alag resource hai jise kai apps se jod sakte ho.</p><p>Jab tak target par use role (RBAC) na do, yeh identity kuch nahi kar sakti, aur role sabse chhote scope par do. Code mein <code>DefaultAzureCredential</code> tay kram mein credentials aazmata hai aur jo pehla chal jaye wahi jeetta hai: environment variables, workload identity, managed identity, Visual Studio, Visual Studio Code, Azure CLI, Azure PowerShell, Azure Developer CLI, phir Broker (interactive browser default mein band hai). Yeh list Azure.Identity versions ke saath badalti hai; hamara program sirf teen kadiyon wala <b>simplified model</b> hai.</p>"
        },
        why: {
          en: "<p>The same code works on your laptop (your developer login) and in Azure (the managed identity) with no change, and no secret ever sits in a file.</p><p>But a broad chain can surprise you. A stray environment variable on the server can win before the managed identity is even tried, and the failure is hard to debug. That is why the docs advise a specific credential in production.</p>",
          hi: "<p>वही code तुम्हारे laptop पर (तुम्हारा developer login) और Azure में (managed identity) बिना बदलाव चलता है, और कोई secret किसी file में नहीं रहता।</p><p>लेकिन बड़ी chain चौंका सकती है। Server पर एक भटका हुआ environment variable managed identity के आज़माए जाने से पहले ही जीत सकता है, और वह failure debug करना मुश्किल होता है। इसीलिए docs production में एक specific credential की सलाह देते हैं।</p>",
          hg: "<p>Wahi code tumhare laptop par (tumhara developer login) aur Azure mein (managed identity) bina badlaav chalta hai, aur koi secret kisi file mein nahi rehta.</p><p>Lekin badi chain chaunka sakti hai. Server par ek bhatka hua environment variable managed identity ke aazmaye jaane se pehle hi jeet sakta hai, aur woh failure debug karna mushkil hota hai. Isiliye docs production mein ek specific credential ki salah dete hain.</p>"
        },
        analogy: {
          en: "<p>A security guard at an office gate checks IDs in a fixed order: company card first, then a visitor slip, then a phone call to the host. The first one that works lets you in. If an old slip is still in your pocket and he checks it first, he lets you in as that old visitor, not as an employee. In production you tell him: \"check only the company card\".</p>",
          hi: "<p>Office के gate पर security guard तय क्रम में ID देखता है: पहले company card, फिर visitor slip, फिर host को phone। जो पहला चल जाए वही अंदर जाने देता है। अगर जेब में पुरानी slip पड़ी है और वह उसे पहले देख ले, तो वह तुम्हें उसी पुराने visitor की तरह अंदर भेज देता है, employee की तरह नहीं। Production में उसे साफ़ कहो: \"सिर्फ़ company card देखो\"।</p>",
          hg: "<p>Office ke gate par security guard tay kram mein ID dekhta hai: pehle company card, phir visitor slip, phir host ko phone. Jo pehla chal jaye wahi andar jaane deta hai. Agar jeb mein purani slip padi hai aur woh use pehle dekh le, to woh tumhe usi purane visitor ki tarah andar bhej deta hai, employee ki tarah nahi. Production mein use saaf kaho: \"sirf company card dekho\".</p>"
        },
        focus: {
          caption: {
            en: "With a user-assigned identity you name it by client id, so the app never guesses (display-only; real Azure.Identity API)",
            hi: "User-assigned identity में उसे client id से नाम देते हो, ताकि app अंदाज़ा न लगाए (सिर्फ़ दिखाने के लिए; असली Azure.Identity API)",
            hg: "User-assigned identity mein use client id se naam dete ho, taaki app andaza na lagaye (sirf dikhane ke liye; asli Azure.Identity API)"
          },
          check: "none",
          src: "// user-assigned managed identity, chosen explicitly by its client id\nvar credential = new ManagedIdentityCredential(ManagedIdentityId.FromUserAssignedClientId(\"<client-id>\"));"
        },
        lines: [
          {
            code: "(\"Environment\", e => e.EnvVars),",
            note: {
              en: "The first link in the chain: environment variables. If they are set on the server, this credential wins before the managed identity is tried.",
              hi: "Chain की पहली कड़ी: environment variables। अगर server पर set हैं, तो managed identity आज़माए जाने से पहले यही credential जीतता है।",
              hg: "Chain ki pehli kadi: environment variables. Agar server par set hain, to managed identity aazmaye jaane se pehle yahi credential jeetta hai."
            }
          },
          {
            code: "(\"ManagedIdentity\", e => e.ManagedIdentity),",
            note: {
              en: "The managed identity link. It works only inside Azure, where the platform offers an identity endpoint.",
              hi: "Managed identity वाली कड़ी। यह सिर्फ़ Azure के अंदर चलती है, जहाँ platform identity endpoint देता है।",
              hg: "Managed identity wali kadi. Yeh sirf Azure ke andar chalti hai, jahan platform identity endpoint deta hai."
            }
          },
          {
            code: "Chain.FirstOrDefault(c => c.Works(env)).Name",
            note: {
              en: "Fixed order, first success wins. Nothing after the winner is even tried.",
              hi: "तय क्रम, पहली सफलता जीतती है। जीतने वाले के बाद वाले आज़माए ही नहीं जाते।",
              hg: "Tay kram, pehli safalta jeetti hai. Jeetne wale ke baad wale aazmaye hi nahi jaate."
            }
          },
          {
            code: "throw new InvalidOperationException(\"failed after trying \"",
            note: {
              en: "When nothing works the error lists everything that was tried. This is the message you read when a build agent cannot sign in.",
              hi: "जब कुछ नहीं चलता तो error बताता है कि क्या-क्या आज़माया गया। Build agent sign in न कर पाए तो यही message पढ़ते हो।",
              hg: "Jab kuch nahi chalta to error batata hai ki kya-kya aazmaya gaya. Build agent sign in na kar paye to yahi message padhte ho."
            }
          },
          {
            code: "public static string Specific(string name, CredentialEnvironment env)",
            note: {
              en: "The production advice in code: name one credential. A stray setting cannot change who you are.",
              hi: "Production की सलाह code में: एक credential का नाम दो। भटकी हुई setting तुम्हारी पहचान नहीं बदल सकती।",
              hg: "Production ki salah code mein: ek credential ka naam do. Bhatki hui setting tumhari pehchaan nahi badal sakti."
            }
          },
          {
            code: "Credentials.Specific(\"ManagedIdentity\", prod)",
            note: {
              en: "Same server with the stray environment variables, but now the answer is <code>ManagedIdentity</code>.",
              hi: "वही server, वही भटके हुए environment variables, पर अब जवाब <code>ManagedIdentity</code> है।",
              hg: "Wahi server, wahi bhatke hue environment variables, par ab jawab <code>ManagedIdentity</code> hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Leaving <code>DefaultAzureCredential</code> everywhere in production. Use a specific credential such as <code>ManagedIdentityCredential</code> (or set the environment variable <code>AZURE_TOKEN_CREDENTIALS</code>: <code>prod</code> or <code>dev</code> since Azure.Identity 1.14.0, one credential name such as <code>ManagedIdentityCredential</code> since 1.15.0).</li><li>Thinking \"identity enabled\" means \"access granted\". Without a role on the target you get 401 or 403.</li><li>Giving the identity the broad Contributor role \"to make it work\". Give the smallest role at the smallest scope.</li></ul>",
          hi: "<ul><li>Production में हर जगह <code>DefaultAzureCredential</code> छोड़ देना। <code>ManagedIdentityCredential</code> जैसा specific credential लो (या environment variable <code>AZURE_TOKEN_CREDENTIALS</code> set करो: Azure.Identity 1.14.0 से <code>prod</code> या <code>dev</code>, 1.15.0 से एक credential का नाम, जैसे <code>ManagedIdentityCredential</code>)।</li><li>\"identity चालू\" का मतलब \"access मिल गया\" समझना। Target पर role के बिना 401 या 403 मिलता है।</li><li>\"चलाने के लिए\" identity को बड़ा Contributor role दे देना। सबसे छोटा role, सबसे छोटे scope पर दो।</li></ul>",
          hg: "<ul><li>Production mein har jagah <code>DefaultAzureCredential</code> chhod dena. <code>ManagedIdentityCredential</code> jaisa specific credential lo (ya environment variable <code>AZURE_TOKEN_CREDENTIALS</code> set karo: Azure.Identity 1.14.0 se <code>prod</code> ya <code>dev</code>, 1.15.0 se ek credential ka naam, jaise <code>ManagedIdentityCredential</code>).</li><li>\"identity chalu\" ka matlab \"access mil gaya\" samajhna. Target par role ke bina 401 ya 403 milta hai.</li><li>\"chalane ke liye\" identity ko bada Contributor role de dena. Sabse chhota role, sabse chhote scope par do.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a managed identity for every target that accepts Microsoft Entra sign-in: Storage, Service Bus, Key Vault, Azure SQL. Keep secrets only for things that cannot use it, such as a third-party API key (lesson 5). On a laptop the same code falls back to your developer login.</p>",
          hi: "<p>हर उस target के लिए managed identity use करो जो Microsoft Entra sign-in मानता है: Storage, Service Bus, Key Vault, Azure SQL। Secrets सिर्फ़ उन चीज़ों के लिए रखो जो इसे use नहीं कर सकतीं, जैसे third-party API key (पाठ 5)। Laptop पर वही code तुम्हारे developer login पर आ जाता है।</p>",
          hg: "<p>Har us target ke liye managed identity use karo jo Microsoft Entra sign-in maanta hai: Storage, Service Bus, Key Vault, Azure SQL. Secrets sirf un cheezon ke liye rakho jo ise use nahi kar sakti, jaise third-party API key (lesson 5). Laptop par wahi code tumhare developer login par aa jaata hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>A user-assigned identity is attached to the app. Print which credential the chain picks when environment variables are also set, then print what the specific <code>ManagedIdentity</code> credential gives, and what a laptop with only Visual Studio signed in gives.</p>",
            hi: "<p>App से एक user-assigned identity जुड़ी है। जब environment variables भी set हों तो chain कौन सा credential चुनती है यह print करो, फिर print करो कि specific <code>ManagedIdentity</code> credential क्या देता है, और उस laptop का क्या जिसमें सिर्फ़ Visual Studio signed in है।</p>",
            hg: "<p>App se ek user-assigned identity judi hai. Jab environment variables bhi set hon to chain kaun sa credential chunti hai yeh print karo, phir print karo ki specific <code>ManagedIdentity</code> credential kya deta hai, aur us laptop ka kya jisme sirf Visual Studio signed in hai.</p>"
          },
          hint: {
            en: "<p>Use a smaller chain of three credentials. <code>Chain.First(...)</code> is the default pick; <code>Chain.Single(...)</code> is the specific one.</p>",
            hi: "<p>तीन credentials की छोटी chain लो। <code>Chain.First(...)</code> default चुनाव है; <code>Chain.Single(...)</code> specific वाला।</p>",
            hg: "<p>Teen credentials ki chhoti chain lo. <code>Chain.First(...)</code> default chunav hai; <code>Chain.Single(...)</code> specific wala.</p>"
          },
          solution: {
            caption: {
              en: "Solution: default pick versus a specific credential",
              hi: "हल: default चुनाव बनाम specific credential",
              hg: "Solution: default chunav banaam specific credential"
            },
            src: "// A user-assigned identity is attached to the app, and the chain should not guess.\nvar env = new CredentialEnvironment(EnvVars: true, ManagedIdentity: true, VisualStudio: false);\n\nConsole.WriteLine(\"chain    : \" + Credentials.DefaultChain(env));\nConsole.WriteLine(\"specific : \" + Credentials.Specific(\"ManagedIdentity\", env));\nConsole.WriteLine(\"laptop   : \" + Credentials.Specific(\"VisualStudio\", new CredentialEnvironment(false, false, true)));\n\nrecord CredentialEnvironment(bool EnvVars, bool ManagedIdentity, bool VisualStudio);\n\nstatic class Credentials\n{\n    private static readonly (string Name, Func<CredentialEnvironment, bool> Works)[] Chain =\n    {\n        (\"Environment\", e => e.EnvVars),\n        (\"ManagedIdentity\", e => e.ManagedIdentity),\n        (\"VisualStudio\", e => e.VisualStudio)\n    };\n\n    public static string DefaultChain(CredentialEnvironment env) =>\n        Chain.First(c => c.Works(env)).Name;\n\n    public static string Specific(string name, CredentialEnvironment env) =>\n        Chain.Single(c => c.Name == name).Works(env) ? name : throw new InvalidOperationException(name + \" unavailable\");\n}",
            check: "run",
            expected: "chain    : Environment\nspecific : ManagedIdentity\nlaptop   : VisualStudio"
          }
        },
        quiz: {
          q: {
            en: "On App Service you want the app to always use its own identity, never a stray environment variable. What do you do?",
            hi: "App Service पर तुम चाहते हो कि app हमेशा अपनी identity use करे, भटके हुए environment variable को कभी नहीं। क्या करोगे?",
            hg: "App Service par tum chahte ho ki app hamesha apni identity use kare, bhatke hue environment variable ko kabhi nahi. Kya karoge?"
          },
          options: [
            {
              en: "Store a client secret in appsettings.json",
              hi: "appsettings.json में client secret रखूँगा",
              hg: "appsettings.json mein client secret rakhunga"
            },
            {
              en: "Keep DefaultAzureCredential and hope for the best",
              hi: "DefaultAzureCredential रखूँगा और उम्मीद करूँगा",
              hg: "DefaultAzureCredential rakhunga aur ummeed karunga"
            },
            {
              en: "Use ManagedIdentityCredential explicitly in production",
              hi: "Production में ManagedIdentityCredential साफ़ तौर पर use करूँगा",
              hg: "Production mein ManagedIdentityCredential saaf taur par use karunga"
            },
            {
              en: "Use AzureCliCredential on the server",
              hi: "Server पर AzureCliCredential use करूँगा",
              hg: "Server par AzureCliCredential use karunga"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>A specific credential removes the guessing. The broad chain can pick an environment credential before the managed identity, and a secret in <code>appsettings.json</code> breaks the whole \"no secrets\" idea.</p>",
            hi: "<p>Specific credential अंदाज़ा लगाना हटा देता है। बड़ी chain managed identity से पहले environment credential चुन सकती है, और <code>appsettings.json</code> का secret पूरे \"कोई secret नहीं\" idea को तोड़ देता है।</p>",
            hg: "<p>Specific credential andaza lagana hata deta hai. Badi chain managed identity se pehle environment credential chun sakti hai, aur <code>appsettings.json</code> ka secret poore \"koi secret nahi\" idea ko tod deta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>A managed identity is an Azure-issued identity: no password to store; it needs an RBAC role.</li><li><code>DefaultAzureCredential</code> is an ordered chain, first success wins.</li><li>In production name the credential: <code>ManagedIdentityCredential</code>.</li></ul>",
          hi: "<ul><li>Managed identity Azure की दी हुई identity है: store करने को कोई password नहीं; उसे RBAC role चाहिए।</li><li><code>DefaultAzureCredential</code> क्रम वाली chain है, पहली सफलता जीतती है।</li><li>Production में credential का नाम दो: <code>ManagedIdentityCredential</code>।</li></ul>",
          hg: "<ul><li>Managed identity Azure ki di hui identity hai: store karne ko koi password nahi; use RBAC role chahiye.</li><li><code>DefaultAzureCredential</code> kram wali chain hai, pehli safalta jeetti hai.</li><li>Production mein credential ka naam do: <code>ManagedIdentityCredential</code>.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A simplified model of the credential chain (3 of the real links): laptop, Azure and the stray-variable surprise (offline, no Azure call)",
            hi: "Credential chain का simplified model (असली कड़ियों में से 3): laptop, Azure और भटके variable की चौंकाने वाली बात (offline, Azure को call नहीं)",
            hg: "Credential chain ka simplified model (asli kadiyon mein se 3): laptop, Azure aur bhatke variable ki chaunkane wali baat (offline, Azure ko call nahi)"
          },
          src: "var scenarios = new (string Name, CredentialEnvironment Env)[]\n{\n    (\"laptop\", new(EnvVars: false, ManagedIdentity: false, VisualStudio: true)),\n    (\"App Service\", new(false, true, false)),\n    (\"App Service + stray env vars\", new(true, true, false)),\n    (\"build agent, nothing set\", new(false, false, false))\n};\n\nforeach (var (name, env) in scenarios)\n    Console.WriteLine($\"{name,-30} default chain -> {Describe(() => Credentials.DefaultChain(env))}\");\n\n// The advice for production: name the credential, so a stray setting cannot change who you are.\nvar prod = scenarios[2].Env;\nConsole.WriteLine($\"{scenarios[2].Name,-30} specific      -> {Describe(() => Credentials.Specific(\"ManagedIdentity\", prod))}\");\n\nstatic string Describe(Func<string> pick)\n{\n    try { return pick(); }\n    catch (InvalidOperationException ex) { return ex.Message; }\n}\n\nrecord CredentialEnvironment(bool EnvVars, bool ManagedIdentity, bool VisualStudio);\n\nstatic class Credentials\n{\n    // Same idea as DefaultAzureCredential: a fixed order, the first one that can sign in wins.\n    // The real list is longer and can change between Azure.Identity versions.\n    private static readonly (string Name, Func<CredentialEnvironment, bool> Works)[] Chain =\n    {\n        (\"Environment\", e => e.EnvVars),\n        (\"ManagedIdentity\", e => e.ManagedIdentity),\n        (\"VisualStudio\", e => e.VisualStudio)\n    };\n\n    public static string DefaultChain(CredentialEnvironment env) =>\n        Chain.FirstOrDefault(c => c.Works(env)).Name\n        ?? throw new InvalidOperationException(\"failed after trying \" + string.Join(\", \", Chain.Select(c => c.Name)));\n\n    public static string Specific(string name, CredentialEnvironment env) =>\n        Chain.Single(c => c.Name == name).Works(env) ? name : throw new InvalidOperationException(name + \" is not available here\");\n}",
          check: "run",
          expected: "laptop                         default chain -> VisualStudio\nApp Service                    default chain -> ManagedIdentity\nApp Service + stray env vars   default chain -> Environment\nbuild agent, nothing set       default chain -> failed after trying Environment, ManagedIdentity, VisualStudio\nApp Service + stray env vars   specific      -> ManagedIdentity"
        }
      ]
    },
    {
      id: "keyvault-config-layers",
      depth: "short",
      title: {
        en: "Key Vault as the last configuration layer",
        hi: "Key Vault: configuration की आख़िरी layer",
        hg: "Key Vault: configuration ki aakhiri layer"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 4 gave the app an identity, so it can reach Key Vault with no password. Day 12 taught configuration as layers: appsettings, environment variables, user secrets.</p><p>Key Vault is simply one more layer, added last. We build it with in-memory sources, so you can see which layer wins.</p>",
          hi: "<p>पाठ 4 में app को identity मिली, इसलिए वह बिना password के Key Vault तक पहुँच सकता है। Day 12 में configuration layers के रूप में सीखी: appsettings, environment variables, user secrets।</p><p>Key Vault बस एक और layer है, जो आख़िर में जुड़ती है। इसे in-memory sources से बनाते हैं, ताकि दिखे कौन सी layer जीतती है।</p>",
          hg: "<p>Lesson 4 mein app ko identity mili, isliye woh bina password ke Key Vault tak pahunch sakta hai. Day 12 mein configuration layers ke roop mein seekhi: appsettings, environment variables, user secrets.</p><p>Key Vault bas ek aur layer hai, jo aakhir mein judti hai. Ise in-memory sources se banate hain, taaki dikhe kaun si layer jeetti hai.</p>"
        },
        what: {
          en: "<p><b>Key Vault</b> stores the secrets, keys and certificates that remain after you use identities, for example a third-party SMS API key. <code>builder.Configuration.AddAzureKeyVault(uri, credential)</code> (package <code>Azure.Extensions.AspNetCore.Configuration.Secrets</code>) loads the secrets at startup as one more configuration source.</p><p>A secret name cannot contain a colon, so <code>Sms--ApiKey</code> becomes the key <code>Sms:ApiKey</code>. The <b>last</b> source added wins. A zero-code alternative is a <b>Key Vault reference</b> in an App Service app setting.</p>",
          hi: "<p><b>Key Vault</b> वे secrets, keys और certificates रखता है जो identities के बाद भी बचते हैं, जैसे third-party SMS API key। <code>builder.Configuration.AddAzureKeyVault(uri, credential)</code> (package <code>Azure.Extensions.AspNetCore.Configuration.Secrets</code>) startup पर secrets को एक और configuration source की तरह load करता है।</p><p>Secret के नाम में colon नहीं हो सकता, इसलिए <code>Sms--ApiKey</code> key <code>Sms:ApiKey</code> बन जाता है। <b>आख़िर</b> में जुड़ा source जीतता है। बिना code बदले एक और तरीका है App Service app setting में <b>Key Vault reference</b>।</p>",
          hg: "<p><b>Key Vault</b> woh secrets, keys aur certificates rakhta hai jo identities ke baad bhi bachte hain, jaise third-party SMS API key. <code>builder.Configuration.AddAzureKeyVault(uri, credential)</code> (package <code>Azure.Extensions.AspNetCore.Configuration.Secrets</code>) startup par secrets ko ek aur configuration source ki tarah load karta hai.</p><p>Secret ke naam mein colon nahi ho sakta, isliye <code>Sms--ApiKey</code> key <code>Sms:ApiKey</code> ban jaata hai. <b>Aakhir</b> mein juda source jeetta hai. Bina code badle ek aur tareeka hai App Service app setting mein <b>Key Vault reference</b>.</p>"
        },
        why: {
          en: "<p>No secret in the repository or in <code>appsettings.json</code>, one place to rotate a key, and the same options binding as before (Day 11): the code reads <code>Sms:ApiKey</code> and does not know where it came from.</p>",
          hi: "<p>Repository या <code>appsettings.json</code> में कोई secret नहीं, key बदलने की एक ही जगह, और options binding पहले जैसी (Day 11): code <code>Sms:ApiKey</code> पढ़ता है और उसे पता नहीं कि वह कहाँ से आया।</p>",
          hg: "<p>Repository ya <code>appsettings.json</code> mein koi secret nahi, key badalne ki ek hi jagah, aur options binding pehle jaisi (Day 11): code <code>Sms:ApiKey</code> padhta hai aur use pata nahi ki woh kahan se aaya.</p>"
        },
        analogy: {
          en: "<p>A school notice board. A new notice is pinned on top of the old one and the old one is hidden. Appsettings is the oldest notice at the bottom, environment variables sit above it, and the Key Vault notice is pinned last, so it is the one everybody reads.</p>",
          hi: "<p>स्कूल का notice board। नया notice पुराने के ऊपर लगता है और पुराना छिप जाता है। Appsettings सबसे नीचे का पुराना notice है, उसके ऊपर environment variables, और Key Vault का notice आख़िर में लगा है, इसलिए वही सब पढ़ते हैं।</p>",
          hg: "<p>School ka notice board. Naya notice purane ke upar lagta hai aur purana chhip jaata hai. Appsettings sabse neeche ka purana notice hai, uske upar environment variables, aur Key Vault ka notice aakhir mein laga hai, isliye wahi sab padhte hain.</p>"
        },
        lines: [
          {
            code: "Add(\"appsettings\", new() { [\"Sla:Hours\"] = \"24\", [\"Sms:ApiKey\"] = \"(placeholder)\" });",
            note: {
              en: "The bottom layer. The API key here is only a placeholder: the real value never lives in the repository.",
              hi: "सबसे नीचे की layer। यहाँ API key सिर्फ़ placeholder है: असली value कभी repository में नहीं रहती।",
              hg: "Sabse neeche ki layer. Yahan API key sirf placeholder hai: asli value kabhi repository mein nahi rehti."
            }
          },
          {
            code: "if (environment == \"Development\")",
            note: {
              en: "Locally you use user secrets (Day 12) and never need vault access. Only the other environments get the vault layer.",
              hi: "Local पर user secrets (Day 12) use करते हो और vault access की ज़रूरत नहीं पड़ती। सिर्फ़ बाकी environments को vault layer मिलती है।",
              hg: "Local par user secrets (Day 12) use karte ho aur vault access ki zaroorat nahi padti. Sirf baaki environments ko vault layer milti hai."
            }
          },
          {
            code: "// Added LAST, so Key Vault wins.",
            note: {
              en: "Order is the whole trick: a later layer overrides an earlier one. Add the vault after the defaults.",
              hi: "पूरी चाल क्रम की है: बाद वाली layer पहले वाली को override करती है। Vault को defaults के बाद जोड़ो।",
              hg: "Poori chaal kram ki hai: baad wali layer pehle wali ko override karti hai. Vault ko defaults ke baad jodo."
            }
          },
          {
            code: "s.Key.Replace(\"--\", \":\")",
            note: {
              en: "The name mapping: secret <code>Sms--ApiKey</code> becomes the configuration key <code>Sms:ApiKey</code>.",
              hi: "नाम का mapping: secret <code>Sms--ApiKey</code> configuration key <code>Sms:ApiKey</code> बन जाता है।",
              hg: "Naam ka mapping: secret <code>Sms--ApiKey</code> configuration key <code>Sms:ApiKey</code> ban jaata hai."
            }
          },
          {
            code: "if (providers[i].TryGet(key, out _)) return sources[i];",
            note: {
              en: "Walk the layers from the top and report the first that has the key: that is the winner. Handy when a value is not what you expect.",
              hi: "Layers को ऊपर से देखो और पहली जिसमें key है उसे बताओ: वही winner है। जब value उम्मीद के मुताबिक़ न हो तो काम आता है।",
              hg: "Layers ko upar se dekho aur pehli jisme key hai use batao: wahi winner hai. Jab value ummeed ke mutabik na ho to kaam aata hai."
            }
          },
          {
            code: "\"****\" + value![^2..]",
            note: {
              en: "Never print a secret. We show only the last two characters, enough to tell which key is loaded.",
              hi: "Secret कभी print मत करो। हम सिर्फ़ आख़िरी दो characters दिखाते हैं, यह पहचानने के लिए काफ़ी कि कौन सी key load हुई।",
              hg: "Secret kabhi print mat karo. Hum sirf aakhiri do characters dikhate hain, yeh pehchanne ke liye kaafi ki kaun si key load hui."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Adding the vault before the environment variables. Then the environment value wins and the vault looks \"ignored\".</li><li>Reading the vault on every request. Load it once at startup; the vault has throttling limits (check the current numbers) and every read adds delay.</li><li>Logging secret values, or giving the app a broad role. The identity needs only a secrets-reader role such as <b>Key Vault Secrets User</b> on that one vault.</li></ul>",
          hi: "<ul><li>Vault को environment variables से पहले जोड़ना। तब environment की value जीतती है और vault \"अनसुना\" लगता है।</li><li>हर request पर vault पढ़ना। Startup पर एक बार load करो; vault की throttling limits हैं (current numbers देखो) और हर read देरी जोड़ता है।</li><li>Secret values log करना, या app को बड़ा role देना। Identity को सिर्फ़ secrets पढ़ने का role चाहिए, जैसे उसी एक vault पर <b>Key Vault Secrets User</b>।</li></ul>",
          hg: "<ul><li>Vault ko environment variables se pehle jodna. Tab environment ki value jeetti hai aur vault \"ansuna\" lagta hai.</li><li>Har request par vault padhna. Startup par ek baar load karo; vault ki throttling limits hain (current numbers dekho) aur har read deri jodta hai.</li><li>Secret values log karna, ya app ko bada role dena. Identity ko sirf secrets padhne ka role chahiye, jaise usi ek vault par <b>Key Vault Secrets User</b>.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use the vault source when many settings are secrets and you want one source. Use a Key Vault reference when you want zero code change. Do not put every config value into the vault: ordinary settings stay in appsettings. The Deep Dive shows the real <code>Program.cs</code>, the role assignment and the reference JSON.</p>",
          hi: "<p>जब कई settings secrets हों और एक ही source चाहिए तो vault source use करो। जब code में कोई बदलाव नहीं चाहिए तो Key Vault reference use करो। हर config value vault में मत डालो: आम settings appsettings में रहती हैं। Deep Dive में असली <code>Program.cs</code>, role assignment और reference का JSON है।</p>",
          hg: "<p>Jab kai settings secrets hon aur ek hi source chahiye to vault source use karo. Jab code mein koi badlaav nahi chahiye to Key Vault reference use karo. Har config value vault mein mat daalo: aam settings appsettings mein rehti hain. Deep Dive mein asli <code>Program.cs</code>, role assignment aur reference ka JSON hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Show the ordering mistake. Build three layers (appsettings 24, vault 48, environment 12) and print <code>Sla:Hours</code>. Then rebuild with the vault last and print again.</p>",
            hi: "<p>क्रम की ग़लती दिखाओ। तीन layers बनाओ (appsettings 24, vault 48, environment 12) और <code>Sla:Hours</code> print करो। फिर vault को आख़िर में रखकर दोबारा बनाओ और फिर print करो।</p>",
            hg: "<p>Kram ki galti dikhao. Teen layers banao (appsettings 24, vault 48, environment 12) aur <code>Sla:Hours</code> print karo. Phir vault ko aakhir mein rakhkar dobara banao aur phir print karo.</p>"
          },
          hint: {
            en: "<p>Only the order of the <code>AddInMemoryCollection</code> calls changes between the two builders.</p>",
            hi: "<p>दोनों builders में सिर्फ़ <code>AddInMemoryCollection</code> calls का क्रम बदलता है।</p>",
            hg: "<p>Dono builders mein sirf <code>AddInMemoryCollection</code> calls ka kram badalta hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: vault before environment versus vault last",
              hi: "हल: vault को environment से पहले बनाम आख़िर में",
              hg: "Solution: vault ko environment se pehle banaam aakhir mein"
            },
            packages: [
              "Microsoft.Extensions.Configuration@9.*"
            ],
            src: "using Microsoft.Extensions.Configuration;\n\n// Mistake to see: the vault is added BEFORE the environment variables.\nvar config = new ConfigurationBuilder()\n    .AddInMemoryCollection(new Dictionary<string, string?> { [\"Sla:Hours\"] = \"24\" })     // appsettings\n    .AddInMemoryCollection(new Dictionary<string, string?> { [\"Sla:Hours\"] = \"48\" })     // key vault\n    .AddInMemoryCollection(new Dictionary<string, string?> { [\"Sla:Hours\"] = \"12\" })     // environment variables\n    .Build();\nConsole.WriteLine(\"vault before env : Sla:Hours = \" + config[\"Sla:Hours\"]);\n\n// Fix: vault last.\nconfig = new ConfigurationBuilder()\n    .AddInMemoryCollection(new Dictionary<string, string?> { [\"Sla:Hours\"] = \"24\" })\n    .AddInMemoryCollection(new Dictionary<string, string?> { [\"Sla:Hours\"] = \"12\" })\n    .AddInMemoryCollection(new Dictionary<string, string?> { [\"Sla:Hours\"] = \"48\" })\n    .Build();\nConsole.WriteLine(\"vault last       : Sla:Hours = \" + config[\"Sla:Hours\"]);",
            check: "run",
            expected: "vault before env : Sla:Hours = 12\nvault last       : Sla:Hours = 48"
          }
        },
        quiz: {
          q: {
            en: "Where must the Key Vault source be added so its values override appsettings and environment variables?",
            hi: "Key Vault source को कहाँ जोड़ना चाहिए ताकि उसकी values appsettings और environment variables को override करें?",
            hg: "Key Vault source ko kahan jodna chahiye taaki uski values appsettings aur environment variables ko override karein?"
          },
          options: [
            {
              en: "It cannot override them",
              hi: "यह उन्हें override नहीं कर सकता",
              hg: "Yeh unhe override nahi kar sakta"
            },
            {
              en: "Before them, as the first source",
              hi: "उनसे पहले, पहले source के रूप में",
              hg: "Unse pehle, pehle source ke roop mein"
            },
            {
              en: "Anywhere, the vault always wins",
              hi: "कहीं भी, vault हमेशा जीतता है",
              hg: "Kahin bhi, vault hamesha jeetta hai"
            },
            {
              en: "After them, as the last source",
              hi: "उनके बाद, आख़िरी source के रूप में",
              hg: "Unke baad, aakhiri source ke roop mein"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>Configuration sources are layered and a later source overrides an earlier one. The vault has no special power; its position decides.</p>",
            hi: "<p>Configuration sources layers में होते हैं और बाद वाला source पहले वाले को override करता है। Vault के पास कोई ख़ास ताक़त नहीं; उसकी जगह तय करती है।</p>",
            hg: "<p>Configuration sources layers mein hote hain aur baad wala source pehle wale ko override karta hai. Vault ke paas koi khaas taaqat nahi; uski jagah tay karti hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Key Vault holds the secrets that identities cannot replace.</li><li><code>Sms--ApiKey</code> in the vault is <code>Sms:ApiKey</code> in configuration.</li><li>The last source wins, so add the vault last; load once; never print the value.</li></ul>",
          hi: "<ul><li>Key Vault उन secrets को रखता है जिन्हें identities बदल नहीं सकतीं।</li><li>Vault का <code>Sms--ApiKey</code> configuration में <code>Sms:ApiKey</code> है।</li><li>आख़िरी source जीतता है, इसलिए vault आख़िर में जोड़ो; एक बार load करो; value कभी print मत करो।</li></ul>",
          hg: "<ul><li>Key Vault un secrets ko rakhta hai jinhe identities badal nahi sakti.</li><li>Vault ka <code>Sms--ApiKey</code> configuration mein <code>Sms:ApiKey</code> hai.</li><li>Aakhiri source jeetta hai, isliye vault aakhir mein jodo; ek baar load karo; value kabhi print mat karo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Configuration layers with an in-memory stand-in for Key Vault: the last layer wins (offline)",
            hi: "Key Vault की जगह in-memory stand-in के साथ configuration layers: आख़िरी layer जीतती है (offline)",
            hg: "Key Vault ki jagah in-memory stand-in ke saath configuration layers: aakhiri layer jeetti hai (offline)"
          },
          packages: [
            "Microsoft.Extensions.Configuration@9.*"
          ],
          src: "using Microsoft.Extensions.Configuration;\n\nforeach (var environment in new[] { \"Development\", \"Production\" })\n{\n    var (config, sources) = BuildConfiguration(environment);\n    Console.WriteLine($\"-- {environment}\");\n    foreach (var key in new[] { \"Sla:Hours\", \"Sms:ApiKey\" })\n        Console.WriteLine($\"{key,-10} = {Show(key, config[key]),-6} <- {Winner(config, sources, key)}\");\n}\n\nstatic (IConfigurationRoot, List<string>) BuildConfiguration(string environment)\n{\n    var builder = new ConfigurationBuilder();\n    var sources = new List<string>();\n    void Add(string name, Dictionary<string, string?> values)\n    {\n        builder.AddInMemoryCollection(values);   // each Add is one more layer; later layers win\n        sources.Add(name);\n    }\n\n    Add(\"appsettings\", new() { [\"Sla:Hours\"] = \"24\", [\"Sms:ApiKey\"] = \"(placeholder)\" });\n    if (environment == \"Development\")\n        Add(\"user secrets\", new() { [\"Sms:ApiKey\"] = \"dev-key-77\" });\n    Add(\"environment\", new() { [\"Sla:Hours\"] = \"12\" });\n    if (environment != \"Development\")\n    {\n        // Added LAST, so Key Vault wins. A secret named Sms--ApiKey becomes the key Sms:ApiKey.\n        var vault = new Dictionary<string, string> { [\"Sms--ApiKey\"] = \"live-key-42\" };\n        Add(\"key vault\", vault.ToDictionary(s => s.Key.Replace(\"--\", \":\"), s => (string?)s.Value));\n    }\n    return (builder.Build(), sources);\n}\n\nstatic string Winner(IConfigurationRoot config, List<string> sources, string key)\n{\n    var providers = config.Providers.ToList();\n    for (var i = providers.Count - 1; i >= 0; i--)\n        if (providers[i].TryGet(key, out _)) return sources[i];\n    return \"nowhere\";\n}\n\n// Never print a secret: show only the last two characters.\nstatic string Show(string key, string? value) => key.EndsWith(\"ApiKey\") ? \"****\" + value![^2..] : value ?? \"\";",
          check: "run",
          expected: "-- Development\nSla:Hours  = 12     <- environment\nSms:ApiKey = ****77 <- user secrets\n-- Production\nSla:Hours  = 12     <- environment\nSms:ApiKey = ****42 <- key vault"
        }
      ]
    },
    {
      id: "structured-logs-correlation",
      depth: "short",
      title: {
        en: "Structured logs and a correlation id",
        hi: "Structured logs और correlation id",
        hg: "Structured logs aur correlation id"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lessons 1 to 5 got the CRM running in Azure. Day 12 taught message templates and Day 16 taught tracing with <code>traceparent</code>. This lesson adds the missing piece: a <b>scope</b> that stamps one correlation id on every log line, and where those lines go in Azure.</p><p>We use the normal <code>ILogger</code> with a small in-memory provider, so the output is stable and nothing is sent to Azure.</p>",
          hi: "<p>पाठ 1 से 5 में CRM Azure में चलने लगा। Day 12 में message templates सीखे और Day 16 में <code>traceparent</code> वाली tracing। यह पाठ बचा हुआ हिस्सा जोड़ता है: एक <b>scope</b> जो हर log line पर एक correlation id लगा देता है, और Azure में ये lines कहाँ जाती हैं।</p><p>हम आम <code>ILogger</code> को एक छोटे in-memory provider के साथ use करते हैं, ताकि output एक जैसा रहे और Azure को कुछ न जाए।</p>",
          hg: "<p>Lesson 1 se 5 mein CRM Azure mein chalne laga. Day 12 mein message templates seekhe aur Day 16 mein <code>traceparent</code> wali tracing. Yeh lesson bacha hua hissa jodta hai: ek <b>scope</b> jo har log line par ek correlation id laga deta hai, aur Azure mein yeh lines kahan jaati hain.</p><p>Hum aam <code>ILogger</code> ko ek chhote in-memory provider ke saath use karte hain, taaki output ek jaisa rahe aur Azure ko kuch na jaye.</p>"
        },
        what: {
          en: "<p>Day 12's message template keeps <code>TicketId=501</code> as a named value. In Application Insights those named values arrive as <b>custom dimensions</b>, so a Log Analytics query can filter on <code>TicketId</code>.</p><p>A <b>correlation id</b> is one id carried by every log line of one request, across all services. <code>BeginScope</code> adds it to every line inside the <code>using</code> block. With OpenTelemetry the trace id (W3C <code>traceparent</code>) does this job for you.</p>",
          hi: "<p>Day 12 का message template <code>TicketId=501</code> को नाम वाली value की तरह रखता है। Application Insights में ये values <b>custom dimensions</b> बनकर आती हैं, इसलिए Log Analytics query <code>TicketId</code> पर filter कर सकती है।</p><p><b>Correlation id</b> एक id है जो एक request की हर log line में, सब services के पार, साथ चलती है। <code>BeginScope</code> उसे <code>using</code> block के अंदर की हर line में जोड़ देता है। OpenTelemetry के साथ trace id (W3C <code>traceparent</code>) यही काम तुम्हारे लिए कर देती है।</p>",
          hg: "<p>Day 12 ka message template <code>TicketId=501</code> ko naam wali value ki tarah rakhta hai. Application Insights mein yeh values <b>custom dimensions</b> bankar aati hain, isliye Log Analytics query <code>TicketId</code> par filter kar sakti hai.</p><p><b>Correlation id</b> ek id hai jo ek request ki har log line mein, sab services ke paar, saath chalti hai. <code>BeginScope</code> use <code>using</code> block ke andar ki har line mein jod deta hai. OpenTelemetry ke saath trace id (W3C <code>traceparent</code>) yahi kaam tumhare liye kar deti hai.</p>"
        },
        why: {
          en: "<p>With plain text lines you can only <code>grep</code>. With properties you ask \"all lines where TicketId is 501\", and with one correlation id you follow a ticket through the API, the queue and the Function. In Azure, set this up before the first incident: Application Insights through OpenTelemetry (<code>UseAzureMonitor()</code>, or the newer <code>Microsoft.OpenTelemetry</code> distro for new apps, never both).</p>",
          hi: "<p>सादी text lines में सिर्फ़ <code>grep</code> हो सकता है। Properties के साथ पूछ सकते हो \"वे सारी lines जहाँ TicketId 501 है\", और एक correlation id से ticket को API, queue और Function में पीछा कर सकते हो। Azure में यह पहली incident से पहले लगा लो: OpenTelemetry के ज़रिए Application Insights (<code>UseAzureMonitor()</code>, या नए apps के लिए नया <code>Microsoft.OpenTelemetry</code> distro, दोनों कभी नहीं)।</p>",
          hg: "<p>Sade text lines mein sirf <code>grep</code> ho sakta hai. Properties ke saath pooch sakte ho \"woh saari lines jahan TicketId 501 hai\", aur ek correlation id se ticket ko API, queue aur Function mein peecha kar sakte ho. Azure mein yeh pehli incident se pehle laga lo: OpenTelemetry ke zariye Application Insights (<code>UseAzureMonitor()</code>, ya naye apps ke liye naya <code>Microsoft.OpenTelemetry</code> distro, dono kabhi nahi).</p>"
        },
        analogy: {
          en: "<p>A hospital file number. Reception, the lab and the pharmacy each write their own notes, but every note carries the same patient number, so the doctor pulls up the whole visit with one number.</p>",
          hi: "<p>Hospital का file number। Reception, lab और pharmacy सब अपने notes लिखते हैं, पर हर note पर वही patient number होता है, इसलिए doctor एक number से पूरी visit देख लेता है।</p>",
          hg: "<p>Hospital ka file number. Reception, lab aur pharmacy sab apne notes likhte hain, par har note par wahi patient number hota hai, isliye doctor ek number se poori visit dekh leta hai.</p>"
        },
        lines: [
          {
            code: "log.LogInformation(\"Ticket {TicketId} created for {Customer}\", 501, \"Asha\");",
            note: {
              en: "The template with named values from Day 12, nothing new. The new part is the scope around it.",
              hi: "Day 12 वाला नाम वाली values का template, कुछ नया नहीं। नया हिस्सा इसके चारों ओर का scope है।",
              hg: "Day 12 wala naam wali values ka template, kuch naya nahi. Naya hissa iske chaaron or ka scope hai."
            }
          },
          {
            code: "using (log.BeginScope(new Dictionary<string, object> { [\"CorrelationId\"] = correlationId }))",
            note: {
              en: "A scope adds <code>CorrelationId</code> to every line written inside the block, without repeating it in each message.",
              hi: "Scope block के अंदर लिखी हर line में <code>CorrelationId</code> जोड़ देता है, हर message में दोहराए बिना।",
              hg: "Scope block ke andar likhi har line mein <code>CorrelationId</code> jod deta hai, har message mein dohraye bina."
            }
          },
          {
            code: "var outgoing = new Dictionary<string, string> { [\"x-correlation-id\"] = correlationId };",
            note: {
              en: "The id must travel: put it in a header on every outgoing call so the next service logs the same id. Create it once at the edge only.",
              hi: "Id को साथ चलना है: हर outgoing call के header में डालो ताकि अगली service वही id log करे। उसे सिर्फ़ edge पर एक बार बनाओ।",
              hg: "Id ko saath chalna hai: har outgoing call ke header mein daalo taaki agli service wahi id log kare. Use sirf edge par ek baar banao."
            }
          },
          {
            code: "var template = props.First(p => p.Key == \"{OriginalFormat}\").Value;",
            note: {
              en: "Behind the scenes the logger hands the template under the special key <code>{OriginalFormat}</code>; everything else is a named value.",
              hi: "पर्दे के पीछे logger template को ख़ास key <code>{OriginalFormat}</code> के नीचे देता है; बाकी सब नाम वाली values हैं।",
              hg: "Parde ke peeche logger template ko khaas key <code>{OriginalFormat}</code> ke neeche deta hai; baaki sab naam wali values hain."
            }
          },
          {
            code: "class LineLoggerProvider(List<string> lines) : ILoggerProvider, ISupportExternalScope, ILogger",
            note: {
              en: "In a real app this part is a provider such as the Azure Monitor exporter. Our <code>LineLogger</code> only prints, so you can see what a provider receives.",
              hi: "असली app में यह हिस्सा Azure Monitor exporter जैसा provider होता है। हमारा <code>LineLogger</code> सिर्फ़ print करता है, ताकि दिखे provider को क्या मिलता है।",
              hg: "Asli app mein yeh hissa Azure Monitor exporter jaisa provider hota hai. Hamara <code>LineLogger</code> sirf print karta hai, taaki dikhe provider ko kya milta hai."
            }
          },
          {
            code: "lines.ForEach(Console.WriteLine);",
            note: {
              en: "Both lines show the same <code>CorrelationId</code> next to their own properties. Search for it and you get the whole story of one request.",
              hi: "दोनों lines अपनी properties के साथ वही <code>CorrelationId</code> दिखाती हैं। उसे search करो तो एक request की पूरी कहानी मिल जाती है।",
              hg: "Dono lines apni properties ke saath wahi <code>CorrelationId</code> dikhati hain. Use search karo to ek request ki poori kahani mil jaati hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Inventing a second id when OpenTelemetry already sends one. In Application Insights the trace id is the <code>operation_Id</code> that joins requests, dependencies and logs; add your own id only where no trace flows (an old system, a file import).</li><li>Logging secrets or personal data (a customer's phone number, an API key). Log ids, not values.</li><li>Creating a new correlation id in every service. Create it once at the edge and pass it on.</li></ul>",
          hi: "<ul><li>OpenTelemetry पहले से id भेज रहा हो तब भी दूसरी id बनाना। Application Insights में trace id ही <code>operation_Id</code> है जो requests, dependencies और logs को जोड़ती है; अपनी id सिर्फ़ वहाँ जोड़ो जहाँ trace नहीं पहुँचता (पुराना system, file import)।</li><li>Secrets या निजी data log करना (customer का phone number, API key)। Ids log करो, values नहीं।</li><li>हर service में नई correlation id बनाना। उसे edge पर एक बार बनाओ और आगे पास करो।</li></ul>",
          hg: "<ul><li>OpenTelemetry pehle se id bhej raha ho tab bhi doosri id banana. Application Insights mein trace id hi <code>operation_Id</code> hai jo requests, dependencies aur logs ko jodti hai; apni id sirf wahan jodo jahan trace nahi pahunchta (purana system, file import).</li><li>Secrets ya niji data log karna (customer ka phone number, API key). Ids log karo, values nahi.</li><li>Har service mein nayi correlation id banana. Use edge par ek baar banao aur aage pass karo.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use templates and a correlation id in every service from day one. Do not keep every debug line at full volume in production: use log levels and sampling, and watch the ingestion cost. API Management policies and the OpenTelemetry setup code are in the Deep Dive.</p>",
          hi: "<p>पहले दिन से हर service में templates और correlation id use करो। Production में हर debug line को पूरे volume पर मत रखो: log levels और sampling use करो, और ingestion के खर्च पर नज़र रखो। API Management policies और OpenTelemetry setup का code Deep Dive में है।</p>",
          hg: "<p>Pehle din se har service mein templates aur correlation id use karo. Production mein har debug line ko poore volume par mat rakho: log levels aur sampling use karo, aur ingestion ke kharch par nazar rakho. API Management policies aur OpenTelemetry setup ka code Deep Dive mein hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Log \"Ticket {TicketId} assigned to {Agent}\" for two requests: ticket 501 to Meena with <code>corr-7f3a</code>, and ticket 502 to Kiran with <code>corr-9c21</code>. Each request gets its own scope.</p>",
            hi: "<p>दो requests के लिए \"Ticket {TicketId} assigned to {Agent}\" log करो: ticket 501 Meena को <code>corr-7f3a</code> के साथ, और ticket 502 Kiran को <code>corr-9c21</code> के साथ। हर request का अपना scope हो।</p>",
            hg: "<p>Do requests ke liye \"Ticket {TicketId} assigned to {Agent}\" log karo: ticket 501 Meena ko <code>corr-7f3a</code> ke saath, aur ticket 502 Kiran ko <code>corr-9c21</code> ke saath. Har request ka apna scope ho.</p>"
          },
          hint: {
            en: "<p>Loop over the two requests and open a new <code>BeginScope</code> inside the loop.</p>",
            hi: "<p>दोनों requests पर loop चलाओ और loop के अंदर नया <code>BeginScope</code> खोलो।</p>",
            hg: "<p>Dono requests par loop chalao aur loop ke andar naya <code>BeginScope</code> kholo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: one scope per request",
              hi: "हल: हर request के लिए एक scope",
              hg: "Solution: har request ke liye ek scope"
            },
            packages: [
              "Microsoft.Extensions.Logging@9.*"
            ],
            src: "using Microsoft.Extensions.Logging;\n\nvar lines = new List<string>();\nusing var factory = LoggerFactory.Create(builder => builder.AddProvider(new LineLoggerProvider(lines)));\nvar log = factory.CreateLogger(\"TicketApi\");\n\nforeach (var (correlationId, ticketId, agent) in new[] { (\"corr-7f3a\", 501, \"Meena\"), (\"corr-9c21\", 502, \"Kiran\") })\n{\n    using (log.BeginScope(new Dictionary<string, object> { [\"CorrelationId\"] = correlationId }))\n        log.LogInformation(\"Ticket {TicketId} assigned to {Agent}\", ticketId, agent);\n}\n\nlines.ForEach(Console.WriteLine);\n\n// A tiny provider that prints what a real one (Azure Monitor, console JSON) would receive.\nclass LineLoggerProvider(List<string> lines) : ILoggerProvider, ISupportExternalScope, ILogger\n{\n    private IExternalScopeProvider _scopes = new LoggerExternalScopeProvider();\n    public void SetScopeProvider(IExternalScopeProvider scopeProvider) => _scopes = scopeProvider;\n    public ILogger CreateLogger(string categoryName) => this;\n    public IDisposable? BeginScope<TState>(TState state) where TState : notnull => _scopes.Push(state);\n    public bool IsEnabled(LogLevel logLevel) => true;\n    public void Dispose() { }\n\n    public void Log<TState>(LogLevel level, EventId id, TState state, Exception? ex, Func<TState, Exception?, string> formatter)\n    {\n        var props = ((IEnumerable<KeyValuePair<string, object?>>)state!).ToList();\n        _scopes.ForEachScope((scope, list) => list.AddRange((IEnumerable<KeyValuePair<string, object?>>)scope!), props);\n        var template = props.First(p => p.Key == \"{OriginalFormat}\").Value;\n        var values = props.Where(p => p.Key != \"{OriginalFormat}\").Select(p => $\"{p.Key}={p.Value}\");\n        lines.Add($\"[{level}] {template} | {string.Join(' ', values)}\");\n    }\n}",
            check: "run",
            expected: "[Information] Ticket {TicketId} assigned to {Agent} | TicketId=501 Agent=Meena CorrelationId=corr-7f3a\n[Information] Ticket {TicketId} assigned to {Agent} | TicketId=502 Agent=Kiran CorrelationId=corr-9c21"
          }
        },
        quiz: {
          q: {
            en: "One request writes 5 log lines in the API and 3 in the Function. How do all 8 lines get the same <code>CorrelationId</code>?",
            hi: "एक request API में 5 log lines और Function में 3 लिखती है। सभी 8 lines को एक ही <code>CorrelationId</code> कैसे मिले?",
            hg: "Ek request API mein 5 log lines aur Function mein 3 likhti hai. Sabhi 8 lines ko ek hi <code>CorrelationId</code> kaise mile?"
          },
          options: [
            {
              en: "Create a new GUID in each service, so every id is unique",
              hi: "हर service में नया GUID बनाओ, ताकि हर id unique हो",
              hg: "Har service mein naya GUID banao, taaki har id unique ho"
            },
            {
              en: "Create it once at the edge, pass it in the header or message, and open a <code>BeginScope</code> with it in each service",
              hi: "Edge पर एक बार बनाओ, header या message में आगे भेजो, और हर service में उसके साथ <code>BeginScope</code> खोलो",
              hg: "Edge par ek baar banao, header ya message mein aage bhejo, aur har service mein uske saath <code>BeginScope</code> kholo"
            },
            {
              en: "Add the id by hand to each of the 8 message templates",
              hi: "8 में से हर message template में id हाथ से जोड़ो",
              hg: "8 mein se har message template mein id haath se jodo"
            },
            {
              en: "Nothing: Application Insights groups lines by timestamp",
              hi: "कुछ नहीं: Application Insights lines को timestamp से group करता है",
              hg: "Kuch nahi: Application Insights lines ko timestamp se group karta hai"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>One id, born once at the edge, travels with the request; a scope then stamps it on every line without touching each message. New ids per service break the chain, and timestamps mix up requests that run at the same time.</p>",
            hi: "<p>एक id, edge पर एक बार बनी, request के साथ चलती है; फिर scope उसे हर line पर लगा देता है, हर message को छुए बिना। हर service में नई id chain तोड़ देती है, और timestamps एक साथ चल रही requests को मिला देते हैं।</p>",
            hg: "<p>Ek id, edge par ek baar bani, request ke saath chalti hai; phir scope use har line par laga deta hai, har message ko chhue bina. Har service mein nayi id chain tod deti hai, aur timestamps ek saath chal rahi requests ko mila dete hain.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>BeginScope</code> stamps the correlation id on every line inside the block (templates are Day 12).</li><li>One correlation id per request, created at the edge and passed in a header.</li><li>Never log secrets; set up Application Insights through OpenTelemetry before the first incident.</li></ul>",
          hi: "<ul><li><code>BeginScope</code> block के अंदर की हर line पर correlation id लगा देता है (templates Day 12 में थे)।</li><li>हर request की एक correlation id, edge पर बनी और header में आगे दी गई।</li><li>Secrets कभी log मत करो; पहली incident से पहले OpenTelemetry के ज़रिए Application Insights लगाओ।</li></ul>",
          hg: "<ul><li><code>BeginScope</code> block ke andar ki har line par correlation id laga deta hai (templates Day 12 mein the).</li><li>Har request ki ek correlation id, edge par bani aur header mein aage di gayi.</li><li>Secrets kabhi log mat karo; pehli incident se pehle OpenTelemetry ke zariye Application Insights lagao.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Structured log lines with a correlation id scope, captured in memory (offline)",
            hi: "Correlation id scope के साथ structured log lines, memory में पकड़ी हुई (offline)",
            hg: "Correlation id scope ke saath structured log lines, memory mein pakdi hui (offline)"
          },
          packages: [
            "Microsoft.Extensions.Logging@9.*"
          ],
          src: "using Microsoft.Extensions.Logging;\n\nvar lines = new List<string>();\nusing var factory = LoggerFactory.Create(builder => builder.AddProvider(new LineLoggerProvider(lines)));\nvar log = factory.CreateLogger(\"TicketApi\");\n\nvar correlationId = \"corr-7f3a\";   // created once at the edge, then passed on in a header\nvar outgoing = new Dictionary<string, string> { [\"x-correlation-id\"] = correlationId };\n\nusing (log.BeginScope(new Dictionary<string, object> { [\"CorrelationId\"] = correlationId }))\n{\n    log.LogInformation(\"Ticket {TicketId} created for {Customer}\", 501, \"Asha\");\n    log.LogWarning(\"SMS retry {Attempt} for ticket {TicketId}\", 2, 501);\n}\n\nlines.ForEach(Console.WriteLine);\nConsole.WriteLine(\"header sent to SMS service: x-correlation-id=\" + outgoing[\"x-correlation-id\"]);\n\n// A tiny provider that prints what a real one (Azure Monitor, console JSON) would receive.\nclass LineLoggerProvider(List<string> lines) : ILoggerProvider, ISupportExternalScope, ILogger\n{\n    private IExternalScopeProvider _scopes = new LoggerExternalScopeProvider();\n    public void SetScopeProvider(IExternalScopeProvider scopeProvider) => _scopes = scopeProvider;\n    public ILogger CreateLogger(string categoryName) => this;\n    public IDisposable? BeginScope<TState>(TState state) where TState : notnull => _scopes.Push(state);\n    public bool IsEnabled(LogLevel logLevel) => true;\n    public void Dispose() { }\n\n    public void Log<TState>(LogLevel level, EventId id, TState state, Exception? ex, Func<TState, Exception?, string> formatter)\n    {\n        var props = ((IEnumerable<KeyValuePair<string, object?>>)state!).ToList();\n        _scopes.ForEachScope((scope, list) => list.AddRange((IEnumerable<KeyValuePair<string, object?>>)scope!), props);\n        var template = props.First(p => p.Key == \"{OriginalFormat}\").Value;\n        var values = props.Where(p => p.Key != \"{OriginalFormat}\").Select(p => $\"{p.Key}={p.Value}\");\n        lines.Add($\"[{level}] {template} | {string.Join(' ', values)}\");\n    }\n}",
          check: "run",
          expected: "[Information] Ticket {TicketId} created for {Customer} | TicketId=501 Customer=Asha CorrelationId=corr-7f3a\n[Warning] SMS retry {Attempt} for ticket {TicketId} | Attempt=2 TicketId=501 CorrelationId=corr-7f3a\nheader sent to SMS service: x-correlation-id=corr-7f3a"
        }
      ]
    },
    {
      id: "azure-sql-retry",
      depth: "short",
      title: {
        en: "Azure SQL: retry transient errors, not permanent ones",
        hi: "Azure SQL: transient errors पर retry, permanent पर नहीं",
        hg: "Azure SQL: transient errors par retry, permanent par nahi"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 6 makes failures visible. The last Azure piece is the database. Day 16 taught retry with backoff, and Day 18 retried a deadlock victim (error 1205). Today: which Azure SQL errors are worth a retry, and how EF Core does it for you.</p><p>We model a retry policy with a fake database error, so no real database is needed.</p>",
          hi: "<p>पाठ 6 failures को दिखाने लायक़ बनाता है। Azure का आख़िरी हिस्सा database है। Day 16 में backoff के साथ retry सीखा, और Day 18 में deadlock victim (error 1205) को retry किया। आज: Azure SQL के कौन से errors retry के लायक़ हैं, और EF Core यह तुम्हारे लिए कैसे करता है।</p><p>Fake database error के साथ retry policy बनाते हैं, इसलिए असली database नहीं चाहिए।</p>",
          hg: "<p>Lesson 6 failures ko dikhne laayak banata hai. Azure ka aakhiri hissa database hai. Day 16 mein backoff ke saath retry seekha, aur Day 18 mein deadlock victim (error 1205) ko retry kiya. Aaj: Azure SQL ke kaun se errors retry ke laayak hain, aur EF Core yeh tumhare liye kaise karta hai.</p><p>Fake database error ke saath retry policy banate hain, isliye asli database nahi chahiye.</p>"
        },
        what: {
          en: "<p>A <b>transient error</b> is a temporary failure that succeeds if you try again a moment later: a failover, a database resuming from auto-pause (serverless), or throttling. Azure SQL error numbers such as <code>40613</code> (database not currently available), <code>40501</code> (service busy) and <code>49918</code> are on Microsoft's transient list.</p><p>The policy is Day 16's: retry only these, wait longer each time, cap the attempts. A <b>permanent</b> error such as <code>2627</code> (duplicate key) is never retried. EF Core's <code>EnableRetryOnFailure</code> already knows the Azure SQL transient list.</p>",
          hi: "<p><b>Transient error</b> थोड़ी देर का failure है जो एक पल बाद दोबारा करने पर सफल हो जाता है: failover, auto-pause से जागता database (serverless), या throttling। Azure SQL के error numbers जैसे <code>40613</code> (database अभी available नहीं), <code>40501</code> (service busy) और <code>49918</code> Microsoft की transient list में हैं।</p><p>Policy Day 16 वाली है: सिर्फ़ इन्हीं पर retry, हर बार ज़्यादा इंतज़ार, attempts की limit। <b>Permanent</b> error, जैसे <code>2627</code> (duplicate key), कभी retry नहीं होता। EF Core का <code>EnableRetryOnFailure</code> Azure SQL की transient list पहले से जानता है।</p>",
          hg: "<p><b>Transient error</b> thodi der ka failure hai jo ek pal baad dobara karne par safal ho jaata hai: failover, auto-pause se jaagta database (serverless), ya throttling. Azure SQL ke error numbers jaise <code>40613</code> (database abhi available nahi), <code>40501</code> (service busy) aur <code>49918</code> Microsoft ki transient list mein hain.</p><p>Policy Day 16 wali hai: sirf inhi par retry, har baar zyada intezaar, attempts ki limit. <b>Permanent</b> error, jaise <code>2627</code> (duplicate key), kabhi retry nahi hota. EF Core ka <code>EnableRetryOnFailure</code> Azure SQL ki transient list pehle se jaanta hai.</p>"
        },
        why: {
          en: "<p>In the cloud a dropped connection is normal, not a bug. A serverless database that auto-paused answers its first connection slowly or with error 40613. Without a retry the user sees an error for something that would have worked two seconds later.</p>",
          hi: "<p>Cloud में connection का टूटना आम बात है, bug नहीं। Auto-pause हुआ serverless database पहले connection का जवाब धीरे देता है या error 40613 के साथ। Retry न हो तो user को उस चीज़ का error दिखता है जो दो सेकंड बाद चल जाती।</p>",
          hg: "<p>Cloud mein connection ka tootna aam baat hai, bug nahi. Auto-pause hua serverless database pehle connection ka jawab dheere deta hai ya error 40613 ke saath. Retry na ho to user ko us cheez ka error dikhta hai jo do second baad chal jaati.</p>"
        },
        analogy: {
          en: "<p>Calling the customer-care line and hearing a busy tone. You wait a little and call again, then wait longer, and after a few tries you give up and try later. But if the operator says \"this number does not exist\", you do not redial.</p>",
          hi: "<p>Customer-care line पर फ़ोन करने पर busy tone सुनाई देती है। थोड़ा रुककर फिर फ़ोन करते हो, फिर और ज़्यादा रुकते हो, और कुछ कोशिशों के बाद छोड़कर बाद में करते हो। लेकिन operator कहे \"यह number मौजूद ही नहीं है\", तो दोबारा नहीं लगाते।</p>",
          hg: "<p>Customer-care line par phone karne par busy tone sunayi deti hai. Thoda rukkar phir phone karte ho, phir aur zyada rukte ho, aur kuch koshishon ke baad chhodkar baad mein karte ho. Lekin operator kahe \"yeh number maujood hi nahi hai\", to dobara nahi lagate.</p>"
        },
        focus: {
          caption: {
            en: "In EF Core you do not write this loop: one option turns it on (defaults: 6 retries, 30 seconds maximum delay; display-only)",
            hi: "EF Core में यह loop तुम नहीं लिखते: एक option इसे चालू करता है (defaults: 6 retries, ज़्यादा से ज़्यादा 30 सेकंड की देरी; सिर्फ़ दिखाने के लिए)",
            hg: "EF Core mein yeh loop tum nahi likhte: ek option ise chalu karta hai (defaults: 6 retries, zyada se zyada 30 second ki deri; sirf dikhane ke liye)"
          },
          check: "none",
          src: "services.AddDbContext<CrmContext>(o => o.UseSqlServer(connectionString,\n    sql => sql.EnableRetryOnFailure(maxRetryCount: 6, maxRetryDelay: TimeSpan.FromSeconds(30), errorNumbersToAdd: null)));"
        },
        lines: [
          {
            code: "var resuming = new FakeDatabase(failuresBeforeSuccess: 2, error: 40613);",
            note: {
              en: "A fake database that fails twice with error 40613, then works, like a serverless database that is waking up.",
              hi: "एक fake database जो error 40613 के साथ दो बार fail होता है, फिर चलता है, जैसे जागता हुआ serverless database।",
              hg: "Ek fake database jo error 40613 ke saath do baar fail hota hai, phir chalta hai, jaise jaagta hua serverless database."
            }
          },
          {
            code: "private static readonly HashSet<int> Transient = new() { 40613, 40501, 49918 };",
            note: {
              en: "The list of errors worth retrying. Everything not on the list is treated as permanent. Check Microsoft's current transient list for your driver.",
              hi: "Retry के लायक़ errors की list। जो list में नहीं वह permanent माना जाता है। अपने driver के लिए Microsoft की current transient list देखो।",
              hg: "Retry ke laayak errors ki list. Jo list mein nahi woh permanent maana jaata hai. Apne driver ke liye Microsoft ki current transient list dekho."
            }
          },
          {
            code: "catch (FakeSqlException ex) when (Transient.Contains(ex.Number) && attempt < maxAttempts)",
            note: {
              en: "Retry only for a transient error and only while attempts remain. Otherwise the exception leaves the method.",
              hi: "सिर्फ़ transient error पर और सिर्फ़ तब तक retry जब तक attempts बचे हैं। नहीं तो exception method से बाहर चला जाता है।",
              hg: "Sirf transient error par aur sirf tab tak retry jab tak attempts bache hain. Nahi to exception method se bahar chala jaata hai."
            }
          },
          {
            code: "await delay(TimeSpan.FromSeconds(Math.Pow(2, attempt - 1)));",
            note: {
              en: "Exponential backoff: 1 s, 2 s, 4 s. The delay is passed in as a function, so the test records it instead of really sleeping. Real policies, including EF Core's, also add a little random jitter; we leave it out so the output stays fixed.",
              hi: "Exponential backoff: 1 s, 2 s, 4 s। Delay function के रूप में पास होती है, इसलिए test असल में सोने की जगह उसे record करता है। असली policies, EF Core की भी, थोड़ा random jitter भी जोड़ती हैं; हमने output एक जैसा रखने के लिए उसे हटाया है।",
              hg: "Exponential backoff: 1 s, 2 s, 4 s. Delay function ke roop mein pass hoti hai, isliye test asal mein sone ki jagah use record karta hai. Asli policies, EF Core ki bhi, thoda random jitter bhi jodti hain; humne output ek jaisa rakhne ke liye use hataya hai."
            }
          },
          {
            code: "var permanent = new FakeDatabase(failuresBeforeSuccess: 99, error: 2627);",
            note: {
              en: "A permanent error: the program shows it is thrown at once, with no waiting and no second try.",
              hi: "Permanent error: program दिखाता है कि वह तुरंत throw होता है, न इंतज़ार, न दूसरी कोशिश।",
              hg: "Permanent error: program dikhata hai ki woh turant throw hota hai, na intezaar, na doosri koshish."
            }
          },
          {
            code: "Func<TimeSpan, Task> delay",
            note: {
              en: "Passing the waiting in as a function is what makes the policy testable without clocks.",
              hi: "इंतज़ार को function के रूप में पास करना ही policy को घड़ी के बिना test करने लायक़ बनाता है।",
              hg: "Intezaar ko function ke roop mein pass karna hi policy ko ghadi ke bina test karne laayak banata hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Retrying a write that is not safe to repeat. Use a transaction or an idempotency key so a second try cannot create a second ticket (Day 16).</li><li>Wrapping your own retry loop around EF Core calls that already use <code>EnableRetryOnFailure</code>. Retries multiply (up to 7 × 7 attempts); retry at one layer (Day 16).</li><li>With EF Core, starting your own transaction while <code>EnableRetryOnFailure</code> is on. Wrap the whole unit of work in <code>CreateExecutionStrategy().ExecuteAsync(...)</code> so it can be repeated as a whole.</li></ul>",
          hi: "<ul><li>ऐसे write को retry करना जिसे दोहराना सुरक्षित नहीं। Transaction या idempotency key use करो ताकि दूसरी कोशिश से दूसरा ticket न बने (Day 16)।</li><li><code>EnableRetryOnFailure</code> वाली EF Core calls के चारों ओर अपना retry loop भी लगाना। Retries कई गुना हो जाती हैं (7 × 7 attempts तक); retry एक ही layer पर रखो (Day 16)।</li><li>EF Core में <code>EnableRetryOnFailure</code> चालू होते हुए अपना transaction शुरू करना। पूरे unit of work को <code>CreateExecutionStrategy().ExecuteAsync(...)</code> में लपेटो ताकि वह पूरा दोहराया जा सके।</li></ul>",
          hg: "<ul><li>Aise write ko retry karna jise dohrana surakshit nahi. Transaction ya idempotency key use karo taaki doosri koshish se doosra ticket na bane (Day 16).</li><li><code>EnableRetryOnFailure</code> wali EF Core calls ke chaaron or apna retry loop bhi lagana. Retries kai guna ho jaati hain (7 × 7 attempts tak); retry ek hi layer par rakho (Day 16).</li><li>EF Core mein <code>EnableRetryOnFailure</code> chalu hote hue apna transaction shuru karna. Poore unit of work ko <code>CreateExecutionStrategy().ExecuteAsync(...)</code> mein lapeto taaki woh poora dohraya ja sake.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use retry for every call to Azure SQL, and especially for serverless databases that auto-pause. With EF Core use <code>EnableRetryOnFailure</code>; write your own loop only for raw ADO.NET or Dapper (or use a resilience library such as Polly). Pick the compute tier, elastic pools and RCSI details in the Deep Dive.</p>",
          hi: "<p>Azure SQL की हर call पर retry use करो, ख़ासकर उन serverless databases पर जो auto-pause होते हैं। EF Core में <code>EnableRetryOnFailure</code> use करो; अपना loop सिर्फ़ raw ADO.NET या Dapper के लिए लिखो (या Polly जैसी resilience library लो)। Compute tier, elastic pools और RCSI की बातें Deep Dive में हैं।</p>",
          hg: "<p>Azure SQL ki har call par retry use karo, khaaskar un serverless databases par jo auto-pause hote hain. EF Core mein <code>EnableRetryOnFailure</code> use karo; apna loop sirf raw ADO.NET ya Dapper ke liye likho (ya Polly jaisi resilience library lo). Compute tier, elastic pools aur RCSI ki baatein Deep Dive mein hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a cap so the wait never exceeds 5 seconds. With a database that fails 5 times before it works and up to 6 attempts, print the waits: they should be 1, 2, 4, 5 and 5 seconds.</p>",
            hi: "<p>एक cap जोड़ो ताकि इंतज़ार कभी 5 सेकंड से ज़्यादा न हो। ऐसे database के साथ जो चलने से पहले 5 बार fail होता है और 6 attempts तक, waits print करो: वे 1, 2, 4, 5 और 5 सेकंड होने चाहिए।</p>",
            hg: "<p>Ek cap jodo taaki intezaar kabhi 5 second se zyada na ho. Aise database ke saath jo chalne se pehle 5 baar fail hota hai aur 6 attempts tak, waits print karo: woh 1, 2, 4, 5 aur 5 second hone chahiye.</p>"
          },
          hint: {
            en: "<p>Add a <code>maxWait</code> parameter and use the smaller of the computed wait and <code>maxWait</code>.</p>",
            hi: "<p>एक <code>maxWait</code> parameter जोड़ो और computed wait तथा <code>maxWait</code> में से छोटा use करो।</p>",
            hg: "<p>Ek <code>maxWait</code> parameter jodo aur computed wait tatha <code>maxWait</code> mein se chhota use karo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: backoff with a cap",
              hi: "हल: cap के साथ backoff",
              hg: "Solution: cap ke saath backoff"
            },
            src: "var delays = new List<string>();\nvar resuming = new FakeDatabase(failuresBeforeSuccess: 5, error: 40613);\n\nvar open = await Retry.RunAsync(\n    attempt => resuming.CountOpenTicketsAsync(),\n    maxAttempts: 6,\n    maxWait: TimeSpan.FromSeconds(5),\n    delay: wait => { delays.Add(wait.TotalSeconds + \"s\"); return Task.CompletedTask; });\nConsole.WriteLine($\"open tickets = {open}, waited {string.Join(\" \", delays)}\");\n\nclass FakeSqlException(int number) : Exception($\"SQL error {number}\")\n{\n    public int Number { get; } = number;\n}\n\nclass FakeDatabase(int failuresBeforeSuccess, int error)\n{\n    private int _calls;\n    public Task<int> CountOpenTicketsAsync() =>\n        ++_calls <= failuresBeforeSuccess ? Task.FromException<int>(new FakeSqlException(error)) : Task.FromResult(3);\n}\n\nstatic class Retry\n{\n    private static readonly HashSet<int> Transient = new() { 40613, 40501, 49918 };\n\n    public static async Task<T> RunAsync<T>(Func<int, Task<T>> operation, int maxAttempts, TimeSpan maxWait, Func<TimeSpan, Task> delay)\n    {\n        for (var attempt = 1; ; attempt++)\n        {\n            try { return await operation(attempt); }\n            catch (FakeSqlException ex) when (Transient.Contains(ex.Number) && attempt < maxAttempts)\n            {\n                var wait = TimeSpan.FromSeconds(Math.Pow(2, attempt - 1));\n                await delay(wait > maxWait ? maxWait : wait);\n            }\n        }\n    }\n}",
            check: "run",
            expected: "open tickets = 3, waited 1s 2s 4s 5s 5s"
          }
        },
        quiz: {
          q: {
            en: "A query fails with error 2627 (duplicate key). What should the retry policy do?",
            hi: "एक query error 2627 (duplicate key) के साथ fail होती है। Retry policy को क्या करना चाहिए?",
            hg: "Ek query error 2627 (duplicate key) ke saath fail hoti hai. Retry policy ko kya karna chahiye?"
          },
          options: [
            {
              en: "Throw it at once: it is permanent and a retry cannot fix it",
              hi: "तुरंत throw करे: यह permanent है और retry इसे ठीक नहीं कर सकता",
              hg: "Turant throw kare: yeh permanent hai aur retry ise theek nahi kar sakta"
            },
            {
              en: "Retry with backoff until it works",
              hi: "चलने तक backoff के साथ retry करे",
              hg: "Chalne tak backoff ke saath retry kare"
            },
            {
              en: "Retry immediately, three times, without waiting",
              hi: "बिना इंतज़ार के तुरंत तीन बार retry करे",
              hg: "Bina intezaar ke turant teen baar retry kare"
            },
            {
              en: "Wait for the database to auto-resume",
              hi: "Database के auto-resume होने का इंतज़ार करे",
              hg: "Database ke auto-resume hone ka intezaar kare"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>A duplicate key is a data problem, not a temporary outage. Repeating the call gives the same error and only wastes time. Only transient errors (such as 40613 or 40501) are worth retrying.</p>",
            hi: "<p>Duplicate key data की समस्या है, थोड़ी देर का outage नहीं। Call दोहराने से वही error मिलता है और सिर्फ़ समय जाता है। सिर्फ़ transient errors (जैसे 40613 या 40501) retry के लायक़ हैं।</p>",
            hg: "<p>Duplicate key data ki samasya hai, thodi der ka outage nahi. Call dohrane se wahi error milta hai aur sirf samay jaata hai. Sirf transient errors (jaise 40613 ya 40501) retry ke laayak hain.</p>"
          }
        },
        recap: {
          en: "<ul><li>Transient errors (40613, 40501, 49918) are worth retrying; permanent ones (2627) are not.</li><li>Back off exponentially and cap the attempts; make the repeated work safe to repeat.</li><li>With EF Core use <code>EnableRetryOnFailure</code> and wrap your own transactions in an execution strategy.</li></ul>",
          hi: "<ul><li>Transient errors (40613, 40501, 49918) retry के लायक़ हैं; permanent (2627) नहीं।</li><li>Exponentially backoff करो और attempts की limit रखो; दोहराया जाने वाला काम दोहराने के लिए सुरक्षित बनाओ।</li><li>EF Core में <code>EnableRetryOnFailure</code> use करो और अपने transactions को execution strategy में लपेटो।</li></ul>",
          hg: "<ul><li>Transient errors (40613, 40501, 49918) retry ke laayak hain; permanent (2627) nahi.</li><li>Exponentially backoff karo aur attempts ki limit rakho; dohraya jaane wala kaam dohrane ke liye surakshit banao.</li><li>EF Core mein <code>EnableRetryOnFailure</code> use karo aur apne transactions ko execution strategy mein lapeto.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A retry policy for transient Azure SQL errors with a fake database (offline, deterministic)",
            hi: "Transient Azure SQL errors के लिए retry policy, fake database के साथ (offline, एक जैसा output)",
            hg: "Transient Azure SQL errors ke liye retry policy, fake database ke saath (offline, ek jaisa output)"
          },
          src: "var delays = new List<string>();\nvar resuming = new FakeDatabase(failuresBeforeSuccess: 2, error: 40613);   // serverless database is waking up\n\nvar open = await Retry.RunAsync(\n    attempt => resuming.CountOpenTicketsAsync(),\n    maxAttempts: 4,\n    delay: wait => { delays.Add(wait.TotalSeconds + \"s\"); return Task.CompletedTask; });\nConsole.WriteLine($\"open tickets = {open}, waited {string.Join(\" then \", delays)}\");\n\nvar permanent = new FakeDatabase(failuresBeforeSuccess: 99, error: 2627);   // a real data error\ntry { await Retry.RunAsync(attempt => permanent.CountOpenTicketsAsync(), 4, _ => Task.CompletedTask); }\ncatch (FakeSqlException ex) { Console.WriteLine($\"error {ex.Number} is not transient: thrown at once\"); }\n\nvar busy = new FakeDatabase(failuresBeforeSuccess: 99, error: 40501);   // service busy, never recovers\ntry { await Retry.RunAsync(attempt => busy.CountOpenTicketsAsync(), 3, _ => Task.CompletedTask); }\ncatch (FakeSqlException ex) { Console.WriteLine($\"error {ex.Number} kept failing: gave up after 3 attempts\"); }\n\nclass FakeSqlException(int number) : Exception($\"SQL error {number}\") { public int Number { get; } = number; }\n\nclass FakeDatabase(int failuresBeforeSuccess, int error)\n{\n    private int _calls;\n    public Task<int> CountOpenTicketsAsync() =>\n        ++_calls <= failuresBeforeSuccess ? Task.FromException<int>(new FakeSqlException(error)) : Task.FromResult(3);\n}\n\nstatic class Retry\n{\n    // A few numbers that Microsoft documents as transient for Azure SQL Database.\n    private static readonly HashSet<int> Transient = new() { 40613, 40501, 49918 };\n\n    public static async Task<T> RunAsync<T>(Func<int, Task<T>> operation, int maxAttempts, Func<TimeSpan, Task> delay)\n    {\n        for (var attempt = 1; ; attempt++)\n        {\n            try { return await operation(attempt); }\n            catch (FakeSqlException ex) when (Transient.Contains(ex.Number) && attempt < maxAttempts)\n            {\n                await delay(TimeSpan.FromSeconds(Math.Pow(2, attempt - 1)));   // 1s, 2s, 4s: wait longer each time\n            }\n        }\n    }\n}",
          check: "run",
          expected: "open tickets = 3, waited 1s then 2s\nerror 2627 is not transient: thrown at once\nerror 40501 kept failing: gave up after 3 attempts"
        }
      ]
    },
    {
      id: "hosting-and-functions-overview",
      depth: "detailed",
      title: {
        en: "Where code runs: App Service, Functions plans, Container Apps, AKS",
        hi: "Code कहाँ चलता है: App Service, Functions plans, Container Apps, AKS",
        hg: "Code kahan chalta hai: App Service, Functions plans, Container Apps, AKS"
      },
      body: {
        en: "<ul>\n<li><b>App Service:</b> the <b>plan</b> is the compute (VMs) and apps in the same plan share it. <b>Scale up</b> = a bigger plan size; <b>scale out</b> = more instances (manual or autoscale rules). <b>Always On</b> keeps the app loaded so the first request after idle is not slow (not available on the lowest tiers; check current tiers).</li>\n<li><b>Linux vs Windows:</b> modern .NET runs well on Linux; pick Windows mainly for .NET Framework or other Windows-only needs.</li>\n<li><b>Hosting plans:</b> <b>Flex Consumption</b> (serverless, Linux, scales to zero, optional always-ready instances, VNet integration; the recommended serverless plan for new apps); <b>Premium</b> (pre-warmed and always-ready instances, VNet, no cold start for those); <b>Dedicated</b> (an App Service plan you already run); legacy <b>Consumption</b> (Linux Consumption is being retired, Windows still exists; check current status).</li>\n<li><b>Durable Functions:</b> an extension where an <b>orchestrator</b> function runs a long workflow in code (steps, waits, retries). It is like the saga from Day 16, and the orchestrator code must be deterministic because it is replayed.</li>\n<li><b>Containers:</b> <b>Container Apps</b> = containers with scale to zero and event-driven scaling, no Kubernetes to run (scaling is KEDA-based, Dapr is optional); <b>AKS</b> = full Kubernetes, maximum control and your own operations.</li>\n</ul>\n<p><b>When to use / when not:</b> start with App Service for a web API (simplest), Functions for event-driven or bursty work, Container Apps when you already ship containers, and AKS only when you need Kubernetes features and have people to run it. Do not pick Functions for a long, chatty, always-busy API just because it says \"serverless\"; and do not pick AKS because it looks impressive.</p>",
        hi: "<ul>\n<li><b>App Service:</b> <b>plan</b> compute (VMs) है और एक plan की apps उसे share करती हैं। <b>Scale up</b> = बड़ा plan size; <b>scale out</b> = ज़्यादा instances (manual या autoscale rules)। <b>Always On</b> app को loaded रखता है ताकि idle के बाद पहली request slow न हो (सबसे नीचे के tiers पर नहीं मिलता; current tiers check करो)।</li>\n<li><b>Linux बनाम Windows:</b> modern .NET Linux पर अच्छा चलता है; Windows mainly .NET Framework या दूसरी Windows-only ज़रूरतों के लिए चुनो।</li>\n<li><b>Hosting plans:</b> <b>Flex Consumption</b> (serverless, Linux, zero तक scale, optional always-ready instances, VNet integration; नए apps के लिए recommended serverless plan); <b>Premium</b> (pre-warmed और always-ready instances, VNet, उन instances पर cold start नहीं); <b>Dedicated</b> (App Service plan जो तुम पहले से चला रहे हो); legacy <b>Consumption</b> (Linux Consumption retire हो रहा है, Windows अभी है; current status check करो)।</li>\n<li><b>Durable Functions:</b> एक extension जिसमें <b>orchestrator</b> function लंबा workflow code में चलाता है (steps, waits, retries)। यह Day 16 के saga जैसा है, और orchestrator code deterministic होना चाहिए क्योंकि वह replay होता है।</li>\n<li><b>Containers:</b> <b>Container Apps</b> = scale to zero और event-driven scaling वाले containers, Kubernetes चलाना नहीं पड़ता (scaling KEDA-based है, Dapr optional); <b>AKS</b> = पूरा Kubernetes, maximum control और operations खुद संभालने पड़ते हैं।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> web API के लिए App Service से शुरू करो (सबसे simple), event-driven या bursty काम के लिए Functions, जब containers पहले से ship करते हो तब Container Apps, और AKS तभी जब Kubernetes features चाहिए और चलाने वाले लोग हों। लंबी, chatty, हमेशा busy API के लिए सिर्फ़ \"serverless\" सुनकर Functions मत चुनो; और AKS इसलिए मत चुनो कि वह impressive दिखता है।</p>",
        hg: "<ul>\n<li><b>App Service:</b> <b>plan</b> compute (VMs) hai aur ek plan ki apps use share karti hain. <b>Scale up</b> = bada plan size; <b>scale out</b> = zyada instances (manual ya autoscale rules). <b>Always On</b> app ko loaded rakhta hai taaki idle ke baad pehli request slow na ho (sabse neeche ke tiers par nahi milta; current tiers check karo).</li>\n<li><b>Linux vs Windows:</b> modern .NET Linux par achha chalta hai; Windows mainly .NET Framework ya dusri Windows-only zaroorton ke liye chuno.</li>\n<li><b>Hosting plans:</b> <b>Flex Consumption</b> (serverless, Linux, zero tak scale, optional always-ready instances, VNet integration; naye apps ke liye recommended serverless plan); <b>Premium</b> (pre-warmed aur always-ready instances, VNet, un instances par cold start nahi); <b>Dedicated</b> (App Service plan jo tum pehle se chala rahe ho); legacy <b>Consumption</b> (Linux Consumption retire ho raha hai, Windows abhi hai; current status check karo).</li>\n<li><b>Durable Functions:</b> ek extension jisme <b>orchestrator</b> function lamba workflow code mein chalata hai (steps, waits, retries). Yeh Day 16 ke saga jaisa hai, aur orchestrator code deterministic hona chahiye kyunki woh replay hota hai.</li>\n<li><b>Containers:</b> <b>Container Apps</b> = scale to zero aur event-driven scaling wale containers, Kubernetes chalana nahi padta (scaling KEDA-based hai, Dapr optional); <b>AKS</b> = poora Kubernetes, maximum control aur operations khud sambhalne padte hain.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> web API ke liye App Service se shuru karo (sabse simple), event-driven ya bursty kaam ke liye Functions, jab containers pehle se ship karte ho tab Container Apps, aur AKS tabhi jab Kubernetes features chahiye aur chalane wale log hon. Lambi, chatty, hamesha busy API ke liye sirf \"serverless\" sunkar Functions mat chuno; aur AKS isliye mat chuno ki woh impressive dikhta hai.</p>"
      }
    },
    {
      id: "messaging-which-one-overview",
      depth: "detailed",
      title: {
        en: "Which messaging service? Service Bus vs Event Grid vs Event Hubs (and Storage Queues)",
        hi: "कौन-सी messaging service? Service Bus बनाम Event Grid बनाम Event Hubs (और Storage Queues)",
        hg: "Kaun-si messaging service? Service Bus vs Event Grid vs Event Hubs (aur Storage Queues)"
      },
      body: {
        en: "<p><b>Picture — three Indian postal ideas:</b> <b>Service Bus</b> is registered post with acknowledgement: it keeps the letter safely until the right person signs for it. <b>Event Grid</b> is a loudspeaker announcement: \"the train has arrived\", pushed to everyone who subscribed. <b>Event Hubs</b> is a railway track carrying a continuous flow of trains: huge volume, read in order within a lane.</p>\n<ul>\n<li><b>Service Bus (a broker for business messages):</b> <b>queues</b> (competing consumers) and <b>topics with subscriptions</b> (each subscription gets its own copy, with filters). Features: <b>peek-lock</b> (lock the message, then complete or abandon), <b>dead-letter queue</b>, <b>sessions</b> (FIFO order per session id), <b>duplicate detection</b>, <b>scheduled messages</b>, delivery counting (topics, sessions and duplicate detection need Standard or Premium; Basic has queues only). Use it for orders, payments, commands.</li>\n<li><b>Event Grid (event routing, push):</b> sources (Azure services or your own topics) publish events and Event Grid <b>pushes</b> them to handlers (Functions, webhooks, queues) with retries and backoff, and can dead-letter undelivered events to blob storage if configured. It carries a notification that something happened (\"a blob was created\"), not a durable work queue. Use it to react to changes.</li>\n<li><b>Event Hubs (streaming):</b> a log of events split into <b>partitions</b>; consumers read in order inside a partition and each <b>consumer group</b> has its own position. Built for very high throughput telemetry and clickstreams, with a Kafka-compatible endpoint. Use it for streams, not for \"process this order once\".</li>\n<li><b>Storage Queues:</b> a simple, large, cheap queue inside a storage account. No topics, no sessions, no built-in duplicate detection; the Functions queue trigger moves a failing message to a <code>-poison</code> queue after <code>maxDequeueCount</code> (default 5). Fine for basic background jobs.</li>\n<li><b>Choosing:</b> need ordering, DLQ, topics, transactions or careful handling of business commands: Service Bus. Need \"notify me when X happens\": Event Grid. Need very high event volume for analytics: Event Hubs. Need only a plain, simple backlog: Storage Queue.</li>\n</ul>\n<p><b>When to use / when not:</b> do not use Event Hubs as a task queue (no per-message lock or DLQ), do not rely on Event Grid alone when the receiver needs a durable backlog (put a queue behind it), and do not use Service Bus for raw telemetry volume. Delivery is at-least-once in all of them, so every consumer must be idempotent (Day 16).</p>",
        hi: "<p><b>Picture — तीन भारतीय डाक वाले ideas:</b> <b>Service Bus</b> acknowledgement वाली registered post है: सही आदमी के sign करने तक चिट्ठी safe रखता है। <b>Event Grid</b> loudspeaker announcement है: \"train आ गई\", जो subscribe किए हर आदमी तक push होती है। <b>Event Hubs</b> railway track है जिस पर trains का लगातार flow चलता है: बहुत बड़ा volume, एक lane के अंदर order में पढ़ना।</p>\n<ul>\n<li><b>Service Bus (business messages का broker):</b> <b>queues</b> (competing consumers) और <b>subscriptions वाले topics</b> (हर subscription को अपनी copy मिलती है, filters के साथ)। Features: <b>peek-lock</b> (message lock करो, फिर complete या abandon), <b>dead-letter queue</b>, <b>sessions</b> (हर session id में FIFO order), <b>duplicate detection</b>, <b>scheduled messages</b>, delivery counting (topics, sessions और duplicate detection के लिए Standard या Premium चाहिए; Basic में सिर्फ़ queues हैं)। Orders, payments, commands के लिए use करो।</li>\n<li><b>Event Grid (event routing, push):</b> sources (Azure services या तुम्हारे अपने topics) events publish करते हैं और Event Grid उन्हें handlers (Functions, webhooks, queues) तक retries और backoff के साथ <b>push</b> करता है, और configure हो तो undelivered events को blob storage में dead-letter कर सकता है। यह \"कुछ हुआ\" की notification ले जाता है (\"blob बना\"), durable work queue नहीं है। बदलावों पर react करने के लिए use करो।</li>\n<li><b>Event Hubs (streaming):</b> events का एक log जो <b>partitions</b> में बँटा है; consumers एक partition के अंदर order में पढ़ते हैं और हर <b>consumer group</b> की अपनी position होती है। बहुत high throughput telemetry और clickstreams के लिए बना है, Kafka-compatible endpoint के साथ। Streams के लिए use करो, \"यह order एक बार process करो\" के लिए नहीं।</li>\n<li><b>Storage Queues:</b> storage account के अंदर simple, बड़ी, सस्ती queue। Topics नहीं, sessions नहीं, built-in duplicate detection नहीं; Functions का queue trigger fail होते message को <code>maxDequeueCount</code> (default 5) के बाद <code>-poison</code> queue में भेज देता है। Basic background jobs के लिए ठीक।</li>\n<li><b>चुनाव:</b> ordering, DLQ, topics, transactions या business commands का careful handling चाहिए: Service Bus। \"X होने पर बताओ\" चाहिए: Event Grid। Analytics के लिए बहुत high event volume चाहिए: Event Hubs। सिर्फ़ सादा backlog चाहिए: Storage Queue।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> Event Hubs को task queue मत बनाओ (per-message lock या DLQ नहीं), जब receiver को durable backlog चाहिए तब Event Grid अकेला मत रखो (उसके पीछे queue लगाओ), और raw telemetry volume के लिए Service Bus मत लो। इन सब में delivery at-least-once है, इसलिए हर consumer idempotent होना चाहिए (Day 16)।</p>",
        hg: "<p><b>Picture — teen Indian daak wale ideas:</b> <b>Service Bus</b> acknowledgement wali registered post hai: sahi aadmi ke sign karne tak chitthi safe rakhta hai. <b>Event Grid</b> loudspeaker announcement hai: \"train aa gayi\", jo subscribe kiye har aadmi tak push hoti hai. <b>Event Hubs</b> railway track hai jis par trains ka lagatar flow chalta hai: bahut bada volume, ek lane ke andar order mein padhna.</p>\n<ul>\n<li><b>Service Bus (business messages ka broker):</b> <b>queues</b> (competing consumers) aur <b>subscriptions wale topics</b> (har subscription ko apni copy milti hai, filters ke saath). Features: <b>peek-lock</b> (message lock karo, phir complete ya abandon), <b>dead-letter queue</b>, <b>sessions</b> (har session id mein FIFO order), <b>duplicate detection</b>, <b>scheduled messages</b>, delivery counting (topics, sessions aur duplicate detection ke liye Standard ya Premium chahiye; Basic mein sirf queues hain). Orders, payments, commands ke liye use karo.</li>\n<li><b>Event Grid (event routing, push):</b> sources (Azure services ya tumhare apne topics) events publish karte hain aur Event Grid unhe handlers (Functions, webhooks, queues) tak retries aur backoff ke saath <b>push</b> karta hai, aur configure ho to undelivered events ko blob storage mein dead-letter kar sakta hai. Yeh \"kuch hua\" ki notification le jaata hai (\"blob bana\"), durable work queue nahi hai. Badlaavon par react karne ke liye use karo.</li>\n<li><b>Event Hubs (streaming):</b> events ka ek log jo <b>partitions</b> mein banta hai; consumers ek partition ke andar order mein padhte hain aur har <b>consumer group</b> ki apni position hoti hai. Bahut high throughput telemetry aur clickstreams ke liye bana hai, Kafka-compatible endpoint ke saath. Streams ke liye use karo, \"yeh order ek baar process karo\" ke liye nahi.</li>\n<li><b>Storage Queues:</b> storage account ke andar simple, badi, sasti queue. Topics nahi, sessions nahi, built-in duplicate detection nahi; Functions ka queue trigger fail hote message ko <code>maxDequeueCount</code> (default 5) ke baad <code>-poison</code> queue mein bhej deta hai. Basic background jobs ke liye theek.</li>\n<li><b>Chunav:</b> ordering, DLQ, topics, transactions ya business commands ka careful handling chahiye: Service Bus. \"X hone par batao\" chahiye: Event Grid. Analytics ke liye bahut high event volume chahiye: Event Hubs. Sirf saada backlog chahiye: Storage Queue.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> Event Hubs ko task queue mat banao (per-message lock ya DLQ nahi), jab receiver ko durable backlog chahiye tab Event Grid akela mat rakho (uske peeche queue lagao), aur raw telemetry volume ke liye Service Bus mat lo. In sab mein delivery at-least-once hai, isliye har consumer idempotent hona chahiye (Day 16).</p>"
      }
    },
    {
      id: "identity-first-overview",
      depth: "detailed",
      title: {
        en: "Secrets and identity first: Managed Identity, DefaultAzureCredential, Key Vault",
        hi: "Secrets और identity पहले: Managed Identity, DefaultAzureCredential, Key Vault",
        hg: "Secrets aur identity pehle: Managed Identity, DefaultAzureCredential, Key Vault"
      },
      body: {
        en: "<ul>\n<li><b>Access with RBAC:</b> the identity gets a role on the target (for example a Key Vault secrets reader role, a Storage Blob data role, a Service Bus data sender or receiver role, or a database user mapped to the identity). Give the least role at the smallest scope.</li>\n<li><b>Link to Day 12:</b> secrets do not go in <code>appsettings.json</code> in source control. Locally use user secrets or your developer login; in production use identity plus Key Vault.</li>\n</ul>\n<p><b>When to use / when not:</b> use managed identity wherever the target supports Entra authentication (Storage, Service Bus, Key Vault, Azure SQL), and Key Vault for the secrets that cannot be replaced by identity. Do not put a Key Vault secret behind every config value (it adds latency, throttling risk and a failure point), and do not hand-roll a client secret when a managed identity is available.</p>",
        hi: "<ul>\n<li><b>RBAC से access:</b> identity को target पर एक role मिलता है (जैसे Key Vault secrets reader role, Storage Blob data role, Service Bus data sender या receiver role, या identity से mapped database user)। सबसे छोटा role सबसे छोटे scope पर दो।</li>\n<li><b>Day 12 से link:</b> secrets source control वाले <code>appsettings.json</code> में नहीं जाते। Local में user secrets या developer login; production में identity plus Key Vault।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> जहाँ target Entra authentication support करता है (Storage, Service Bus, Key Vault, Azure SQL) वहाँ managed identity use करो, और Key Vault उन secrets के लिए जिन्हें identity से बदला नहीं जा सकता। हर config value के पीछे Key Vault secret मत लगाओ (latency, throttling का risk और एक failure point बढ़ता है), और managed identity मौजूद हो तो hand-made client secret मत बनाओ।</p>",
        hg: "<ul>\n<li><b>RBAC se access:</b> identity ko target par ek role milta hai (jaise Key Vault secrets reader role, Storage Blob data role, Service Bus data sender ya receiver role, ya identity se mapped database user). Sabse chhota role sabse chhote scope par do.</li>\n<li><b>Day 12 se link:</b> secrets source control wale <code>appsettings.json</code> mein nahi jaate. Local mein user secrets ya developer login; production mein identity plus Key Vault.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> jahan target Entra authentication support karta hai (Storage, Service Bus, Key Vault, Azure SQL) wahan managed identity use karo, aur Key Vault un secrets ke liye jinhe identity se badla nahi ja sakta. Har config value ke peeche Key Vault secret mat lagao (latency, throttling ka risk aur ek failure point badhta hai), aur managed identity maujood ho to hand-made client secret mat banao.</p>"
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
        en: "<ul>\n<li>The <b>isolated worker</b> project is a normal host: <code>Program.cs</code> builds the host (DI, configuration, logging), and each function is a method with <code>[Function]</code> and a trigger attribute. The snippet needs these packages: <code>Microsoft.Azure.Functions.Worker@2.*</code>, <code>Microsoft.Azure.Functions.Worker.Extensions.ServiceBus@5.*</code> (it brings the Service Bus types), and <code>Microsoft.Extensions.Hosting@10.*</code>. A real project also references <code>Microsoft.Azure.Functions.Worker.Sdk</code> (the Hosting pin is only a compile-check detail), and the current template builds the host with <code>FunctionsApplication.CreateBuilder(args)</code>.</li>\n<li>With the Service Bus trigger you can take <code>ServiceBusReceivedMessage</code> plus <code>ServiceBusMessageActions</code> and settle the message yourself: <b>complete</b> on success, <b>dead-letter</b> a poison message with a reason, and let an exception mean \"retry\" (the delivery count goes up, Day 16 idea). The handler reads <code>MessageId</code> to stay idempotent.</li>\n<li>The connection uses <code>Connection = \"ServiceBus\"</code>: the platform reads app settings such as <code>ServiceBus__fullyQualifiedNamespace</code> and signs in with the app's managed identity, so no connection string with a key is needed.</li>\n<li>The <b>bash</b> snippet (not run here) shows the slot flow with the Azure CLI: create the <code>staging</code> slot, mark a setting as a <b>slot setting</b> so it does not travel with the swap, turn on Always On, then swap. Option names are from the Azure CLI <code>az webapp</code> commands; run <code>az webapp deployment slot swap -h</code> to confirm them for your CLI version.</li>\n</ul>\n<p><b>When to use:</b> Function + trigger for \"when this message or event arrives, do one small thing\"; slots for any production web app where a bad deploy costs money. <b>When not:</b> do not put a 30-minute job inside a trigger without checking the plan's limits (use Durable Functions or a worker), and do not rely on the slot swap to hide a breaking database change (the database is shared, so use expand/contract migrations: add first, remove later).</p>",
        hi: "<ul>\n<li><b>Isolated worker</b> project एक normal host है: <code>Program.cs</code> host बनाता है (DI, configuration, logging), और हर function <code>[Function]</code> और trigger attribute वाला method है। Snippet को ये packages चाहिए: <code>Microsoft.Azure.Functions.Worker@2.*</code>, <code>Microsoft.Azure.Functions.Worker.Extensions.ServiceBus@5.*</code> (यह Service Bus types लाता है), और <code>Microsoft.Extensions.Hosting@10.*</code>। असली project में <code>Microsoft.Azure.Functions.Worker.Sdk</code> भी reference होता है (Hosting pin सिर्फ़ compile-check की detail है), और current template host को <code>FunctionsApplication.CreateBuilder(args)</code> से बनाता है।</li>\n<li>Service Bus trigger के साथ तुम <code>ServiceBusReceivedMessage</code> और <code>ServiceBusMessageActions</code> ले सकते हो और message को खुद settle कर सकते हो: success पर <b>complete</b>, poison message को reason के साथ <b>dead-letter</b>, और exception का मतलब \"retry\" (delivery count बढ़ता है, Day 16 वाला idea)। Handler idempotent रहने के लिए <code>MessageId</code> पढ़ता है।</li>\n<li>Connection <code>Connection = \"ServiceBus\"</code> use करता है: platform <code>ServiceBus__fullyQualifiedNamespace</code> जैसी app settings पढ़ता है और app की managed identity से sign in करता है, इसलिए key वाली connection string नहीं चाहिए।</li>\n<li><b>bash</b> snippet (यहाँ चलता नहीं) Azure CLI से slot flow दिखाता है: <code>staging</code> slot बनाओ, एक setting को <b>slot setting</b> mark करो ताकि वह swap के साथ न जाए, Always On चालू करो, फिर swap। Option names Azure CLI के <code>az webapp</code> commands से हैं; अपने CLI version पर confirm करने के लिए <code>az webapp deployment slot swap -h</code> चलाओ।</li>\n</ul>\n<p><b>कब use करें:</b> \"यह message या event आए तो एक छोटा काम करो\" के लिए Function + trigger; जिस production web app में खराब deploy से नुकसान होता है उसके लिए slots। <b>कब नहीं:</b> plan की limits देखे बिना trigger के अंदर 30 मिनट का job मत रखो (Durable Functions या worker use करो), और breaking database change छुपाने के लिए slot swap पर भरोसा मत करो (database shared है, इसलिए expand/contract migrations: पहले जोड़ो, बाद में हटाओ)।</p>",
        hg: "<ul>\n<li><b>Isolated worker</b> project ek normal host hai: <code>Program.cs</code> host banata hai (DI, configuration, logging), aur har function <code>[Function]</code> aur trigger attribute wala method hai. Snippet ko yeh packages chahiye: <code>Microsoft.Azure.Functions.Worker@2.*</code>, <code>Microsoft.Azure.Functions.Worker.Extensions.ServiceBus@5.*</code> (yeh Service Bus types laata hai), aur <code>Microsoft.Extensions.Hosting@10.*</code>. Asli project mein <code>Microsoft.Azure.Functions.Worker.Sdk</code> bhi reference hota hai (Hosting pin sirf compile-check ki detail hai), aur current template host ko <code>FunctionsApplication.CreateBuilder(args)</code> se banata hai.</li>\n<li>Service Bus trigger ke saath tum <code>ServiceBusReceivedMessage</code> aur <code>ServiceBusMessageActions</code> le sakte ho aur message ko khud settle kar sakte ho: success par <b>complete</b>, poison message ko reason ke saath <b>dead-letter</b>, aur exception ka matlab \"retry\" (delivery count badhta hai, Day 16 wala idea). Handler idempotent rehne ke liye <code>MessageId</code> padhta hai.</li>\n<li>Connection <code>Connection = \"ServiceBus\"</code> use karta hai: platform <code>ServiceBus__fullyQualifiedNamespace</code> jaisi app settings padhta hai aur app ki managed identity se sign in karta hai, isliye key wali connection string nahi chahiye.</li>\n<li><b>bash</b> snippet (yahan chalta nahi) Azure CLI se slot flow dikhata hai: <code>staging</code> slot banao, ek setting ko <b>slot setting</b> mark karo taaki woh swap ke saath na jaye, Always On chalu karo, phir swap. Option names Azure CLI ke <code>az webapp</code> commands se hain; apne CLI version par confirm karne ke liye <code>az webapp deployment slot swap -h</code> chalao.</li>\n</ul>\n<p><b>Kab use karein:</b> \"yeh message ya event aaye to ek chhota kaam karo\" ke liye Function + trigger; jis production web app mein kharab deploy se nuksaan hota hai uske liye slots. <b>Kab nahi:</b> plan ki limits dekhe bina trigger ke andar 30 minute ka job mat rakho (Durable Functions ya worker use karo), aur breaking database change chhupane ke liye slot swap par bharosa mat karo (database shared hai, isliye expand/contract migrations: pehle jodo, baad mein hatao).</p>"
      },
      code: [
        {
          caption: {
            en: "Isolated worker: Program.cs plus a Service Bus triggered function that settles the message itself (compile-checked, never contacts Azure)",
            hi: "Isolated worker: Program.cs और message को खुद settle करने वाला Service Bus triggered function (compile-checked, Azure से कभी connect नहीं होता)",
            hg: "Isolated worker: Program.cs aur message ko khud settle karne wala Service Bus triggered function (compile-checked, Azure se kabhi connect nahi hota)"
          },
          check: "compile",
          packages: [
            "Microsoft.Azure.Functions.Worker@2.*",
            "Microsoft.Azure.Functions.Worker.Extensions.ServiceBus@5.*",
            "Microsoft.Extensions.Hosting@10.*"
          ],
          src: "using Azure.Messaging.ServiceBus;\nusing Microsoft.Azure.Functions.Worker;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nvar host = new HostBuilder()\n    .ConfigureFunctionsWorkerDefaults()\n    .Build();\nhost.Run();\n\npublic class OrderPlacedFunction(ILogger<OrderPlacedFunction> logger)\n{\n    // Connection = \"ServiceBus\" -> app setting ServiceBus__fullyQualifiedNamespace + managed identity (no key)\n    [Function(\"OrderPlaced\")]\n    public async Task Run(\n        [ServiceBusTrigger(\"orders\", Connection = \"ServiceBus\", AutoCompleteMessages = false)]\n        ServiceBusReceivedMessage message,\n        ServiceBusMessageActions actions)\n    {\n        // MessageId is the business key the sender set, so a redelivery is easy to spot (idempotent consumer).\n        logger.LogInformation(\"Order message {MessageId}, delivery {Count}\", message.MessageId, message.DeliveryCount);\n\n        if (message.Subject != \"OrderPlaced\")\n        {\n            await actions.DeadLetterMessageAsync(message, deadLetterReason: \"UnknownSubject\",\n                deadLetterErrorDescription: message.Subject ?? \"none\");\n            return;\n        }\n\n        // ... do the work; if it throws, the lock expires or the message is abandoned and it is delivered again ...\n        await actions.CompleteMessageAsync(message);\n    }\n}"
        },
        {
          lang: "bash",
          caption: {
            en: "Azure CLI: staging slot, sticky setting, Always On, swap (not run here; confirm options with -h for your CLI version)",
            hi: "Azure CLI: staging slot, sticky setting, Always On, swap (यहाँ चलता नहीं; अपने CLI version पर -h से options confirm करो)",
            hg: "Azure CLI: staging slot, sticky setting, Always On, swap (yahan chalta nahi; apne CLI version par -h se options confirm karo)"
          },
          check: "none",
          src: "# create a staging slot next to production (needs a plan tier that supports slots)\naz webapp deployment slot create --name orders-api --resource-group rg-orders-prod --slot staging\n\n# a slot setting is \"sticky\": it stays with the slot and does not move in a swap\naz webapp config appsettings set --name orders-api --resource-group rg-orders-prod --slot staging \\\n  --slot-settings ASPNETCORE_ENVIRONMENT=Staging\n\n# keep the app loaded after idle (tier permitting)\naz webapp config set --name orders-api --resource-group rg-orders-prod --always-on true\n\n# deploy to staging, smoke-test its own URL, then swap (swap back to undo)\naz webapp deployment slot swap --name orders-api --resource-group rg-orders-prod \\\n  --slot staging --target-slot production"
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
        en: "<ul>\n<li><b>Client:</b> <code>new ServiceBusClient(namespace, new DefaultAzureCredential())</code>, the passwordless way. Create one client and reuse it (it owns the connection); senders and processors come from it.</li>\n<li><b>Send:</b> set <code>MessageId</code> from the business key (for example the order id), <code>Subject</code>, and <code>SessionId</code> when ordering per entity matters. <code>ScheduledEnqueueTime</code> (or <code>ScheduleMessageAsync</code>) delivers it later. With duplicate detection on, a resend with the same <code>MessageId</code> inside the window is accepted and silently dropped (default window 10 minutes; Basic tier has no duplicate detection).</li>\n<li><b>Queue settings:</b> the <code>ServiceBusAdministrationClient</code> can create the queue with <code>RequiresSession</code>, <code>RequiresDuplicateDetection</code>, <code>MaxDeliveryCount</code>, <code>LockDuration</code>. In real projects these usually live in Bicep or Terraform (Day 21), not in app code.</li>\n</ul>\n<p><b>When to use:</b> sessions when per-key ordering matters (all events of one order); scheduled messages for delayed work such as a payment reminder; dead-letter for poison messages. <b>When not:</b> do not use sessions \"just in case\" (one session is handled by one receiver at a time, which limits parallelism), do not rely on duplicate detection alone for business idempotency (the window is limited), and do not use receive-and-delete for anything you cannot lose.</p>",
        hi: "<ul>\n<li><b>Client:</b> <code>new ServiceBusClient(namespace, new DefaultAzureCredential())</code>, बिना password वाला तरीका। एक client बनाओ और reuse करो (connection उसकी है); senders और processors उसी से बनते हैं।</li>\n<li><b>Send:</b> <code>MessageId</code> business key से रखो (जैसे order id), <code>Subject</code>, और जब per-entity ordering ज़रूरी हो तो <code>SessionId</code>। <code>ScheduledEnqueueTime</code> (या <code>ScheduleMessageAsync</code>) उसे बाद में deliver करता है। Duplicate detection on हो तो window के अंदर वही <code>MessageId</code> दोबारा भेजने पर message accept होता है और चुपचाप drop हो जाता है (default window 10 minutes; Basic tier में duplicate detection नहीं है)।</li>\n<li><b>Queue settings:</b> <code>ServiceBusAdministrationClient</code> queue को <code>RequiresSession</code>, <code>RequiresDuplicateDetection</code>, <code>MaxDeliveryCount</code>, <code>LockDuration</code> के साथ बना सकता है। Real projects में ये अक्सर Bicep या Terraform में रहते हैं (Day 21), app code में नहीं।</li>\n</ul>\n<p><b>कब use करें:</b> per-key ordering ज़रूरी हो (एक order के सारे events) तब sessions; payment reminder जैसे delayed काम के लिए scheduled messages; poison messages के लिए dead-letter। <b>कब नहीं:</b> \"just in case\" sessions मत लगाओ (एक session एक समय में एक receiver संभालता है, इससे parallelism घटता है), सिर्फ़ duplicate detection पर business idempotency के लिए भरोसा मत करो (window limited है), और जो खो नहीं सकते उसके लिए receive-and-delete मत लो।</p>",
        hg: "<ul>\n<li><b>Client:</b> <code>new ServiceBusClient(namespace, new DefaultAzureCredential())</code>, bina password wala tareeka. Ek client banao aur reuse karo (connection uski hai); senders aur processors usi se bante hain.</li>\n<li><b>Send:</b> <code>MessageId</code> business key se rakho (jaise order id), <code>Subject</code>, aur jab per-entity ordering zaroori ho to <code>SessionId</code>. <code>ScheduledEnqueueTime</code> (ya <code>ScheduleMessageAsync</code>) use baad mein deliver karta hai. Duplicate detection on ho to window ke andar wahi <code>MessageId</code> dobara bhejne par message accept hota hai aur chupchaap drop ho jaata hai (default window 10 minutes; Basic tier mein duplicate detection nahi hai).</li>\n<li><b>Queue settings:</b> <code>ServiceBusAdministrationClient</code> queue ko <code>RequiresSession</code>, <code>RequiresDuplicateDetection</code>, <code>MaxDeliveryCount</code>, <code>LockDuration</code> ke saath bana sakta hai. Real projects mein yeh aksar Bicep ya Terraform mein rehte hain (Day 21), app code mein nahi.</li>\n</ul>\n<p><b>Kab use karein:</b> per-key ordering zaroori ho (ek order ke saare events) tab sessions; payment reminder jaise delayed kaam ke liye scheduled messages; poison messages ke liye dead-letter. <b>Kab nahi:</b> \"just in case\" sessions mat lagao (ek session ek samay mein ek receiver sambhalta hai, isse parallelism ghatta hai), sirf duplicate detection par business idempotency ke liye bharosa mat karo (window limited hai), aur jo kho nahi sakte uske liye receive-and-delete mat lo.</p>"
      },
      code: [
        {
          caption: {
            en: "Send (MessageId, SessionId, scheduled) and process with manual settlement; queue settings via the admin client (compile-checked, no Azure call is made)",
            hi: "Send (MessageId, SessionId, scheduled) और manual settlement के साथ process; admin client से queue settings (compile-checked, Azure call नहीं होती)",
            hg: "Send (MessageId, SessionId, scheduled) aur manual settlement ke saath process; admin client se queue settings (compile-checked, Azure call nahi hoti)"
          },
          check: "compile",
          packages: [
            "Azure.Identity@1.*",
            "Azure.Messaging.ServiceBus@7.*"
          ],
          src: "using Azure.Identity;\nusing Azure.Messaging.ServiceBus;\nusing Azure.Messaging.ServiceBus.Administration;\n\n// Compile-check only: this program is never executed against Azure.\nstatic async Task SendAsync(ServiceBusClient client)\n{\n    await using var sender = client.CreateSender(\"orders\");\n\n    var message = new ServiceBusMessage(BinaryData.FromString(\"{\\\"orderId\\\":\\\"A-1001\\\"}\"))\n    {\n        MessageId = \"order-A-1001-placed\",   // business key: duplicate detection and idempotent consumers use it\n        Subject = \"OrderPlaced\",\n        SessionId = \"customer-42\",            // only if the queue requires sessions: ordering per customer\n        ContentType = \"application/json\"\n    };\n    await sender.SendMessageAsync(message);\n\n    var reminder = new ServiceBusMessage(\"send payment reminder\") { MessageId = \"order-A-1001-reminder\" };\n    await sender.ScheduleMessageAsync(reminder, DateTimeOffset.UtcNow.AddHours(24));\n}\n\nstatic ServiceBusProcessor CreateProcessor(ServiceBusClient client)\n{\n    var processor = client.CreateProcessor(\"orders\", new ServiceBusProcessorOptions\n    {\n        AutoCompleteMessages = false,   // settle ourselves\n        MaxConcurrentCalls = 4,\n        MaxAutoLockRenewalDuration = TimeSpan.FromMinutes(5)\n    });\n\n    processor.ProcessMessageAsync += async args =>\n    {\n        if (args.Message.Subject != \"OrderPlaced\")\n        {\n            await args.DeadLetterMessageAsync(args.Message, \"UnknownSubject\");   // can never succeed\n            return;\n        }\n        // handler must be idempotent: Complete can fail after the work is done\n        await args.CompleteMessageAsync(args.Message);\n    };\n    processor.ProcessErrorAsync += args =>\n    {\n        Console.Error.WriteLine($\"{args.ErrorSource}: {args.Exception.Message}\");\n        return Task.CompletedTask;\n    };\n    return processor;\n}\n\nstatic Task CreateQueueAsync(ServiceBusAdministrationClient admin) =>\n    admin.CreateQueueAsync(new CreateQueueOptions(\"orders\")\n    {\n        MaxDeliveryCount = 10,\n        LockDuration = TimeSpan.FromMinutes(1),\n        RequiresDuplicateDetection = true,\n        DuplicateDetectionHistoryTimeWindow = TimeSpan.FromMinutes(10),\n        RequiresSession = false\n    });\n\nvar credential = new DefaultAzureCredential();   // laptop: developer login; Azure: managed identity\nawait using var client = new ServiceBusClient(\"my-namespace.servicebus.windows.net\", credential);\nvar admin = new ServiceBusAdministrationClient(\"my-namespace.servicebus.windows.net\", credential);\nConsole.WriteLine(\"clients created, nothing sent\");\nif (args.Length > 100)   // never true here: keeps the helpers referenced without calling Azure\n{\n    await SendAsync(client);\n    CreateProcessor(client);\n    await CreateQueueAsync(admin);\n}"
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
        en: "<ul>\n<li><b>One credential object, many clients:</b> in ASP.NET Core, register clients with <code>AddAzureClients</code> (package <code>Microsoft.Extensions.Azure</code>) and share the credential with <code>UseCredential</code>. The snippet follows the docs advice: <code>DefaultAzureCredential</code> in Development, a specific <code>ManagedIdentityCredential</code> elsewhere.</li>\n<li><b>Display-only setup:</b> the <code>az</code> commands turn on an identity and give it the <b>Key Vault Secrets User</b> role at the vault scope, and the JSON shows a <b>Key Vault reference</b> app setting (App Service resolves it for you; no code at all). In App Service settings, <code>__</code> stands for <code>:</code>.</li>\n<li><b>Secrets are rarely needed:</b> Storage, Service Bus and Azure SQL accept the identity directly, so the vault holds only true secrets (third-party keys).</li>\n</ul>",
        hi: "<ul>\n<li><b>एक credential object, कई clients:</b> ASP.NET Core में clients को <code>AddAzureClients</code> (package <code>Microsoft.Extensions.Azure</code>) से register करो और credential को <code>UseCredential</code> से share करो। Snippet docs की सलाह मानता है: Development में <code>DefaultAzureCredential</code>, बाकी जगह specific <code>ManagedIdentityCredential</code>।</li>\n<li><b>Display-only setup:</b> <code>az</code> commands identity चालू करते हैं और उसे vault scope पर <b>Key Vault Secrets User</b> role देते हैं, और JSON एक <b>Key Vault reference</b> app setting दिखाता है (App Service उसे तुम्हारे लिए resolve करता है; code बिल्कुल नहीं)। App Service settings में <code>__</code> का मतलब <code>:</code> है।</li>\n<li><b>Secrets की कम ही ज़रूरत पड़ती है:</b> Storage, Service Bus और Azure SQL identity सीधे accept करते हैं, इसलिए vault में सिर्फ़ असली secrets रहते हैं (third-party keys)।</li>\n</ul>",
        hg: "<ul>\n<li><b>Ek credential object, kai clients:</b> ASP.NET Core mein clients ko <code>AddAzureClients</code> (package <code>Microsoft.Extensions.Azure</code>) se register karo aur credential ko <code>UseCredential</code> se share karo. Snippet docs ki salah maanta hai: Development mein <code>DefaultAzureCredential</code>, baaki jagah specific <code>ManagedIdentityCredential</code>.</li>\n<li><b>Display-only setup:</b> <code>az</code> commands identity chalu karte hain aur use vault scope par <b>Key Vault Secrets User</b> role dete hain, aur JSON ek <b>Key Vault reference</b> app setting dikhata hai (App Service use tumhare liye resolve karta hai; code bilkul nahi). App Service settings mein <code>__</code> ka matlab <code>:</code> hai.</li>\n<li><b>Secrets ki kam hi zaroorat padti hai:</b> Storage, Service Bus aur Azure SQL identity seedha accept karte hain, isliye vault mein sirf asli secrets rehte hain (third-party keys).</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "ASP.NET Core Program.cs: Key Vault as configuration, one shared credential for Blob and Service Bus clients (compile-checked, no Azure call)",
            hi: "ASP.NET Core Program.cs: configuration की तरह Key Vault, Blob और Service Bus clients के लिए एक shared credential (compile-checked, Azure call नहीं)",
            hg: "ASP.NET Core Program.cs: configuration ki tarah Key Vault, Blob aur Service Bus clients ke liye ek shared credential (compile-checked, Azure call nahi)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          packages: [
            "Azure.Identity@1.*",
            "Azure.Extensions.AspNetCore.Configuration.Secrets@1.*",
            "Azure.Security.KeyVault.Secrets@4.*",
            "Azure.Storage.Blobs@12.*",
            "Azure.Messaging.ServiceBus@7.*",
            "Microsoft.Extensions.Azure@1.*"
          ],
          src: "using Azure.Core;\nusing Azure.Identity;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.Azure;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nvar builder = WebApplication.CreateBuilder(args);\n\n// Dev: your own login (VS / az login). Elsewhere: be explicit, so failures are easy to debug.\nTokenCredential credential = builder.Environment.IsDevelopment()\n    ? new DefaultAzureCredential()\n    : new ManagedIdentityCredential(ManagedIdentityId.SystemAssigned);\n\nif (!builder.Environment.IsDevelopment())\n{\n    // Added after the default sources, so vault values win over appsettings.json and env vars.\n    // Secret \"Payments--ApiKey\" becomes configuration key \"Payments:ApiKey\".\n    builder.Configuration.AddAzureKeyVault(new Uri(builder.Configuration[\"KeyVault:Uri\"]!), credential);\n}\n\nbuilder.Services.AddOptions<PaymentsOptions>().BindConfiguration(\"Payments\");\n\nbuilder.Services.AddAzureClients(clients =>\n{\n    clients.UseCredential(credential);   // one credential for every client below\n    clients.AddBlobServiceClient(new Uri(builder.Configuration[\"Storage:BlobUri\"]!));\n    clients.AddServiceBusClientWithNamespace(builder.Configuration[\"ServiceBus:Namespace\"]!);\n});\n\nvar app = builder.Build();\napp.MapGet(\"/ping\", () => \"ok\");\napp.Run();\n\npublic sealed class PaymentsOptions\n{\n    public string ApiKey { get; set; } = \"\";   // comes from Key Vault in production, user secrets locally\n}"
        },
        {
          lang: "bash",
          caption: {
            en: "Azure CLI: enable the app's identity and let it read secrets (not run here; role and option names per the Azure CLI docs)",
            hi: "Azure CLI: app की identity चालू करो और उसे secrets पढ़ने दो (यहाँ चलता नहीं; role और option names Azure CLI docs के अनुसार)",
            hg: "Azure CLI: app ki identity chalu karo aur use secrets padhne do (yahan chalta nahi; role aur option names Azure CLI docs ke anusaar)"
          },
          check: "none",
          src: "# 1) give the web app a system-assigned managed identity (prints its principalId)\naz webapp identity assign --name orders-api --resource-group rg-orders-prod\n\n# 2) allow that identity to read secrets in one vault only (RBAC permission model, least role, smallest scope)\naz role assignment create \\\n  --assignee-object-id <principalId-from-step-1> --assignee-principal-type ServicePrincipal \\\n  --role \"Key Vault Secrets User\" \\\n  --scope /subscriptions/<sub-id>/resourceGroups/rg-orders-prod/providers/Microsoft.KeyVault/vaults/kv-orders-prod"
        },
        {
          lang: "json",
          caption: {
            en: "App Service app setting that uses a Key Vault reference (no code change; the platform resolves it with the app's identity; usually a slot setting)",
            hi: "Key Vault reference वाली App Service app setting (code में बदलाव नहीं; platform app की identity से resolve करता है; आम तौर पर slot setting)",
            hg: "Key Vault reference wali App Service app setting (code mein badlaav nahi; platform app ki identity se resolve karta hai; aam taur par slot setting)"
          },
          check: "none",
          src: "[\n  {\n    \"name\": \"Payments__ApiKey\",\n    \"value\": \"@Microsoft.KeyVault(SecretUri=https://kv-orders-prod.vault.azure.net/secrets/Payments--ApiKey/)\",\n    \"slotSetting\": true\n  }\n]"
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
        en: "<ul>\n<li><b>Application Insights</b> is the Azure Monitor feature for application telemetry; data lands in a Log Analytics workspace and you query it with KQL. Set it up <b>before</b> the first incident, with the connection string in the <code>APPLICATIONINSIGHTS_CONNECTION_STRING</code> environment variable (the recommended way for production).</li>\n<li><b>OpenTelemetry route for ASP.NET Core:</b> package <code>Azure.Monitor.OpenTelemetry.AspNetCore</code>, then <code>builder.Services.AddOpenTelemetry().UseAzureMonitor();</code>. It collects requests, dependencies, metrics and logs. Your own spans (<code>ActivitySource</code>, Day 16) are added with <code>WithTracing(t =&gt; t.AddSource(\"Orders\"))</code>. Set a <b>cloud role name</b> per service so the Application Map shows services separately.</li>\n<li><b>Version note:</b> in the current docs, new apps are pointed at the newer <code>Microsoft.OpenTelemetry</code> distro (<code>UseMicrosoftOpenTelemetry</code>), while existing Azure Monitor distro users need no action. Both are OpenTelemetry-based; do not initialise both in one app. The idea you explain in an interview is the same.</li>\n<li><b>API Management (APIM)</b> is the managed gateway: <b>policies</b> run in four sections (inbound, backend, outbound, on-error). Common ones: <code>validate-jwt</code> (check the token), <code>rate-limit-by-key</code> (throttle per caller), <code>set-header</code>/<code>rewrite-uri</code> (transform), caching. It also gives products and subscription keys for external consumers, a developer portal and analytics.</li>\n<li><b>APIM vs YARP (Day 16):</b> YARP is code you own, flexible, no extra service to buy; APIM is managed, policy-driven and aimed at API products, but is a cost line and a configuration surface to govern. Many teams use APIM at the edge and keep service-to-service calls direct.</li>\n</ul>\n<p><b>When to use:</b> OpenTelemetry from day one on every service; APIM when you publish APIs to partners or need central policy and keys. <b>When not:</b> do not keep full-volume telemetry blindly (use sampling and check ingestion), do not put business logic inside APIM policies (hard to test and version), and do not add APIM for a single internal API just to have a gateway.</p>",
        hi: "<ul>\n<li><b>Application Insights</b> application telemetry के लिए Azure Monitor का feature है; data Log Analytics workspace में जाता है और तुम KQL से query करते हो। इसे पहले incident <b>से पहले</b> लगाओ, connection string <code>APPLICATIONINSIGHTS_CONNECTION_STRING</code> environment variable में (production के लिए recommended तरीका)।</li>\n<li><b>ASP.NET Core के लिए OpenTelemetry रास्ता:</b> package <code>Azure.Monitor.OpenTelemetry.AspNetCore</code>, फिर <code>builder.Services.AddOpenTelemetry().UseAzureMonitor();</code>। यह requests, dependencies, metrics और logs collect करता है। तुम्हारे अपने spans (<code>ActivitySource</code>, Day 16) <code>WithTracing(t =&gt; t.AddSource(\"Orders\"))</code> से जुड़ते हैं। हर service का <b>cloud role name</b> set करो ताकि Application Map में services अलग दिखें।</li>\n<li><b>Version note:</b> current docs में नए apps को नए <code>Microsoft.OpenTelemetry</code> distro (<code>UseMicrosoftOpenTelemetry</code>) की तरफ़ भेजा जाता है, जबकि Azure Monitor distro के मौजूदा users को कुछ करना नहीं। दोनों OpenTelemetry-based हैं; एक app में दोनों initialise मत करो। Interview में जो idea तुम समझाओगे वह वही है।</li>\n<li><b>API Management (APIM)</b> managed gateway है: <b>policies</b> चार sections में चलती हैं (inbound, backend, outbound, on-error)। Common: <code>validate-jwt</code> (token check), <code>rate-limit-by-key</code> (हर caller का throttle), <code>set-header</code>/<code>rewrite-uri</code> (transform), caching। यह बाहरी consumers के लिए products और subscription keys, developer portal और analytics भी देता है।</li>\n<li><b>APIM बनाम YARP (Day 16):</b> YARP तुम्हारा अपना code है, flexible, कोई extra service नहीं लेनी; APIM managed, policy-driven और API products के लिए है, पर वह एक cost line और govern करने की configuration surface है। कई teams edge पर APIM रखती हैं और service-to-service calls direct रखती हैं।</li>\n</ul>\n<p><b>कब use करें:</b> हर service पर पहले दिन से OpenTelemetry; partners को APIs publish करते हो या central policy और keys चाहिए तब APIM। <b>कब नहीं:</b> full-volume telemetry आँख मूँदकर मत रखो (sampling use करो और ingestion देखो), APIM policies में business logic मत रखो (test और version करना मुश्किल), और सिर्फ़ gateway होने के लिए एक internal API के आगे APIM मत लगाओ।</p>",
        hg: "<ul>\n<li><b>Application Insights</b> application telemetry ke liye Azure Monitor ka feature hai; data Log Analytics workspace mein jaata hai aur tum KQL se query karte ho. Ise pehle incident <b>se pehle</b> lagao, connection string <code>APPLICATIONINSIGHTS_CONNECTION_STRING</code> environment variable mein (production ke liye recommended tareeka).</li>\n<li><b>ASP.NET Core ke liye OpenTelemetry raasta:</b> package <code>Azure.Monitor.OpenTelemetry.AspNetCore</code>, phir <code>builder.Services.AddOpenTelemetry().UseAzureMonitor();</code>. Yeh requests, dependencies, metrics aur logs collect karta hai. Tumhare apne spans (<code>ActivitySource</code>, Day 16) <code>WithTracing(t =&gt; t.AddSource(\"Orders\"))</code> se jude hain. Har service ka <b>cloud role name</b> set karo taaki Application Map mein services alag dikhein.</li>\n<li><b>Version note:</b> current docs mein naye apps ko naye <code>Microsoft.OpenTelemetry</code> distro (<code>UseMicrosoftOpenTelemetry</code>) ki taraf bheja jaata hai, jabki Azure Monitor distro ke maujooda users ko kuch karna nahi. Dono OpenTelemetry-based hain; ek app mein dono initialise mat karo. Interview mein jo idea tum samjhaoge woh wahi hai.</li>\n<li><b>API Management (APIM)</b> managed gateway hai: <b>policies</b> chaar sections mein chalti hain (inbound, backend, outbound, on-error). Common: <code>validate-jwt</code> (token check), <code>rate-limit-by-key</code> (har caller ka throttle), <code>set-header</code>/<code>rewrite-uri</code> (transform), caching. Yeh bahari consumers ke liye products aur subscription keys, developer portal aur analytics bhi deta hai.</li>\n<li><b>APIM vs YARP (Day 16):</b> YARP tumhara apna code hai, flexible, koi extra service nahi leni; APIM managed, policy-driven aur API products ke liye hai, par woh ek cost line aur govern karne ki configuration surface hai. Kai teams edge par APIM rakhti hain aur service-to-service calls direct rakhti hain.</li>\n</ul>\n<p><b>Kab use karein:</b> har service par pehle din se OpenTelemetry; partners ko APIs publish karte ho ya central policy aur keys chahiye tab APIM. <b>Kab nahi:</b> full-volume telemetry aankh moondkar mat rakho (sampling use karo aur ingestion dekho), APIM policies mein business logic mat rakho (test aur version karna mushkil), aur sirf gateway hone ke liye ek internal API ke aage APIM mat lagao.</p>"
      },
      code: [
        {
          caption: {
            en: "ASP.NET Core: Azure Monitor OpenTelemetry with UseAzureMonitor() plus our own ActivitySource (compile-checked; connection string comes from the environment)",
            hi: "ASP.NET Core: UseAzureMonitor() के साथ Azure Monitor OpenTelemetry और हमारा अपना ActivitySource (compile-checked; connection string environment से आती है)",
            hg: "ASP.NET Core: UseAzureMonitor() ke saath Azure Monitor OpenTelemetry aur hamara apna ActivitySource (compile-checked; connection string environment se aati hai)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          packages: [
            "Azure.Monitor.OpenTelemetry.AspNetCore@1.*"
          ],
          src: "using System.Diagnostics;\nusing Azure.Monitor.OpenTelemetry.AspNetCore;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.Extensions.DependencyInjection;\nusing OpenTelemetry.Trace;\n\nvar builder = WebApplication.CreateBuilder(args);\n\n// Reads APPLICATIONINSIGHTS_CONNECTION_STRING from the environment (recommended for production).\nbuilder.Services.AddOpenTelemetry()\n    .UseAzureMonitor()\n    .WithTracing(tracing => tracing.AddSource(OrderTelemetry.SourceName));\n\nvar app = builder.Build();\n\napp.MapPost(\"/orders\", () =>\n{\n    using var activity = OrderTelemetry.Source.StartActivity(\"PlaceOrder\");\n    activity?.SetTag(\"order.channel\", \"web\");\n    return Results.Accepted();\n});\n\napp.Run();\n\npublic static class OrderTelemetry\n{\n    public const string SourceName = \"Orders\";\n    public static readonly ActivitySource Source = new(SourceName);\n}"
        },
        {
          caption: {
            en: "The newer distro for new apps: Microsoft.OpenTelemetry with UseMicrosoftOpenTelemetry (compile-checked; one distro per app, never both)",
            hi: "नए apps के लिए नया distro: UseMicrosoftOpenTelemetry के साथ Microsoft.OpenTelemetry (compile-checked; एक app में एक ही distro, दोनों कभी नहीं)",
            hg: "Naye apps ke liye naya distro: UseMicrosoftOpenTelemetry ke saath Microsoft.OpenTelemetry (compile-checked; ek app mein ek hi distro, dono kabhi nahi)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          packages: [
            "Microsoft.OpenTelemetry@1.*"
          ],
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.OpenTelemetry;\n\nvar builder = WebApplication.CreateBuilder(args);\n\n// Reads APPLICATIONINSIGHTS_CONNECTION_STRING from the environment.\nbuilder.UseMicrosoftOpenTelemetry(options =>\n{\n    options.Exporters = ExportTarget.AzureMonitor;\n});\n\nvar app = builder.Build();\napp.MapGet(\"/ping\", () => \"ok\");\napp.Run();"
        },
        {
          lang: "text",
          caption: {
            en: "API Management policy (XML, display-only): validate the JWT, rate-limit per caller, add a header (replace the placeholders; the audience must match your app, v2 tokens carry the client-id GUID as aud; validate-azure-ad-token is an Entra-specific alternative)",
            hi: "API Management policy (XML, display-only): JWT validate करो, हर caller पर rate-limit, एक header जोड़ो (placeholders बदलो; audience तुम्हारी app से match हो, v2 tokens में client-id GUID ही aud होता है; validate-azure-ad-token Entra-specific विकल्प है)",
            hg: "API Management policy (XML, display-only): JWT validate karo, har caller par rate-limit, ek header jodo (placeholders badlo; audience tumhari app se match ho, v2 tokens mein client-id GUID hi aud hota hai; validate-azure-ad-token Entra-specific vikalp hai)"
          },
          check: "none",
          src: "<policies>\n  <inbound>\n    <base />\n    <validate-jwt header-name=\"Authorization\" failed-validation-httpcode=\"401\"\n                  failed-validation-error-message=\"Unauthorized\">\n      <openid-config url=\"https://login.microsoftonline.com/{tenant-id}/v2.0/.well-known/openid-configuration\" />\n      <audiences>\n        <audience>api://orders-api</audience>\n      </audiences>\n    </validate-jwt>\n    <rate-limit-by-key calls=\"100\" renewal-period=\"60\"\n                       counter-key=\"@(context.Request.IpAddress)\" />\n    <set-header name=\"X-Request-Source\" exists-action=\"override\">\n      <value>apim</value>\n    </set-header>\n  </inbound>\n  <backend>\n    <base />\n  </backend>\n  <outbound>\n    <base />\n    <set-header name=\"X-Powered-By\" exists-action=\"delete\" />\n  </outbound>\n  <on-error>\n    <base />\n  </on-error>\n</policies>"
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
        en: "<ul>\n<li><b>Blob Storage tiers:</b> Hot, Cool, Cold, Archive. The cooler the tier, the cheaper to store and the dearer to read; Archive is <b>offline</b>, so you must rehydrate a blob (hours) before reading it. Cooler tiers have minimum retention periods (check current rules). A <b>lifecycle management</b> rule can move or delete blobs by age automatically.</li>\n<li><b>Queue vs Table:</b> Queue Storage is the simple backlog (compare with Service Bus on the messaging card above). Table Storage is a cheap key-value store addressed by <code>PartitionKey</code> and <code>RowKey</code>; no joins, limited querying. Cosmos DB covers richer cases (Day 19).</li>\n<li><b>Cache:</b> <b>Azure Cache for Redis</b> (Basic, Standard and Premium tiers) is being retired; its successor is <b>Azure Managed Redis</b>. Check the current retirement notice and dates before planning a new cache (caching patterns: Day 13).</li>\n<li><b>Access to storage:</b> use the managed identity and a data role (the snippet uses <code>DefaultAzureCredential</code>); if you must give a customer a link, use a short-lived SAS and prefer one backed by the identity (a user delegation SAS) over the account key.</li>\n<li><b>Azure SQL Database</b> purchasing: <b>DTU</b> is a simple bundled unit; <b>vCore</b> lets you pick vCores and a hardware generation (memory comes with that choice) and size storage separately. <b>Serverless</b> (a vCore option) can <b>auto-pause</b> when idle and resume on the first connection, so the first call can be slow or fail briefly: use retry logic (<code>EnableRetryOnFailure</code>, Day 6). <b>Elastic pools</b> let many databases share one budget of resources, good for many small tenant databases with different peak times.</li>\n<li><b>Behaviour you know from Day 18:</b> in Azure SQL Database <b>RCSI is on by default</b> (READ COMMITTED reads use row versions, not shared locks), but in a SQL Server instance it is off unless you enable it. Use <code>Authentication=Active Directory Default</code> in the connection string for passwordless access.</li>\n<li><b>Environments and landing zones (brief):</b> keep dev, test and prod apart (separate subscriptions or at least resource groups), organise with management groups, apply <b>Azure Policy</b> and tags, name resources consistently, and define everything as code (Bicep or Terraform; the pipelines are Day 21). A <b>landing zone</b> is that prepared foundation (network, identity, policy, logging) a team's workloads land on.</li>\n<li><b>Cost awareness, no prices:</b> <b>scale to zero</b> (Flex Consumption, Container Apps, serverless SQL) costs little when idle but adds cold-start delay; <b>always-on</b> (Premium always-ready instances, App Service Always On, provisioned databases) costs steadily but answers fast. Right-size, shut down dev/test out of hours, set budgets and alerts, and tag for ownership. For real numbers use the Azure pricing calculator at decision time.</li>\n</ul>\n<p><b>When to use:</b> tiering and lifecycle rules for logs, exports and backups; serverless SQL for dev or spiky workloads; elastic pools for many small databases. <b>When not:</b> do not put Archive data on a path users wait for, do not use serverless SQL for a latency-critical always-busy API, and do not share one subscription between dev and prod \"to save effort\".</p>",
        hi: "<ul>\n<li><b>Blob Storage tiers:</b> Hot, Cool, Cold, Archive। जितना ठंडा tier, रखना उतना सस्ता और पढ़ना उतना महँगा; Archive <b>offline</b> है, इसलिए पढ़ने से पहले blob को rehydrate करना पड़ता है (घंटे लगते हैं)। ठंडे tiers में minimum retention periods होते हैं (current rules check करो)। <b>Lifecycle management</b> rule उम्र के हिसाब से blobs को अपने-आप move या delete कर सकता है।</li>\n<li><b>Queue बनाम Table:</b> Queue Storage simple backlog है (ऊपर messaging card में Service Bus से तुलना)। Table Storage सस्ता key-value store है जिसे <code>PartitionKey</code> और <code>RowKey</code> से address करते हैं; joins नहीं, querying limited। ज़्यादा rich cases के लिए Cosmos DB (Day 19)।</li>\n<li><b>Cache:</b> <b>Azure Cache for Redis</b> (Basic, Standard और Premium tiers) retire हो रहा है; उसका successor <b>Azure Managed Redis</b> है। नया cache सोचने से पहले current retirement notice और dates check करो (caching patterns: Day 13)।</li>\n<li><b>Storage का access:</b> managed identity और data role use करो (snippet <code>DefaultAzureCredential</code> use करता है); अगर customer को link देना ही पड़े तो short-lived SAS दो और account key की जगह identity-backed SAS (user delegation SAS) को prefer करो।</li>\n<li><b>Azure SQL Database</b> purchasing: <b>DTU</b> एक simple bundled unit है; <b>vCore</b> में vCores और hardware generation चुनते हैं (memory उसी choice के साथ आती है) और storage अलग size करते हैं। <b>Serverless</b> (vCore का एक option) idle होने पर <b>auto-pause</b> हो सकता है और पहले connection पर resume होता है, इसलिए पहली call slow हो सकती है या थोड़ी देर fail: retry logic लगाओ (<code>EnableRetryOnFailure</code>, Day 6)। <b>Elastic pools</b> में कई databases resources का एक budget share करते हैं, अलग-अलग peak time वाले कई छोटे tenant databases के लिए अच्छा।</li>\n<li><b>जो Day 18 से जानते हो:</b> Azure SQL Database में <b>RCSI by default on है</b> (READ COMMITTED reads shared locks की जगह row versions use करती हैं), पर SQL Server instance में यह off रहता है जब तक तुम enable न करो। Passwordless access के लिए connection string में <code>Authentication=Active Directory Default</code> use करो।</li>\n<li><b>Environments और landing zones (brief):</b> dev, test और prod अलग रखो (अलग subscriptions या कम से कम resource groups), management groups से organise करो, <b>Azure Policy</b> और tags लगाओ, resources के नाम consistent रखो, और सब कुछ code में define करो (Bicep या Terraform; pipelines Day 21 में)। <b>Landing zone</b> वही तैयार foundation है (network, identity, policy, logging) जिस पर team के workloads उतरते हैं।</li>\n<li><b>Cost awareness, बिना prices:</b> <b>scale to zero</b> (Flex Consumption, Container Apps, serverless SQL) idle में कम खर्च करता है पर cold-start देरी जोड़ता है; <b>always-on</b> (Premium always-ready instances, App Service Always On, provisioned databases) लगातार खर्च करता है पर जल्दी जवाब देता है। Right-size करो, dev/test को office hours के बाद बंद करो, budgets और alerts लगाओ, और ownership के लिए tag करो। असली numbers के लिए decision के समय Azure pricing calculator use करो।</li>\n</ul>\n<p><b>कब use करें:</b> logs, exports और backups के लिए tiering और lifecycle rules; dev या spiky workloads के लिए serverless SQL; कई छोटे databases के लिए elastic pools। <b>कब नहीं:</b> जिस path पर users इंतज़ार करते हैं वहाँ Archive data मत रखो, latency-critical हमेशा-busy API के लिए serverless SQL मत लो, और \"मेहनत बचाने\" के लिए dev और prod एक subscription में मत रखो।</p>",
        hg: "<ul>\n<li><b>Blob Storage tiers:</b> Hot, Cool, Cold, Archive. Jitna thanda tier, rakhna utna sasta aur padhna utna mehnga; Archive <b>offline</b> hai, isliye padhne se pehle blob ko rehydrate karna padta hai (ghante lagte hain). Thande tiers mein minimum retention periods hote hain (current rules check karo). <b>Lifecycle management</b> rule umar ke hisaab se blobs ko apne-aap move ya delete kar sakta hai.</li>\n<li><b>Queue vs Table:</b> Queue Storage simple backlog hai (upar messaging card mein Service Bus se tulna). Table Storage sasta key-value store hai jise <code>PartitionKey</code> aur <code>RowKey</code> se address karte hain; joins nahi, querying limited. Zyada rich cases ke liye Cosmos DB (Day 19).</li>\n<li><b>Cache:</b> <b>Azure Cache for Redis</b> (Basic, Standard aur Premium tiers) retire ho raha hai; uska successor <b>Azure Managed Redis</b> hai. Naya cache sochne se pehle current retirement notice aur dates check karo (caching patterns: Day 13).</li>\n<li><b>Storage ka access:</b> managed identity aur data role use karo (snippet <code>DefaultAzureCredential</code> use karta hai); agar customer ko link dena hi pade to short-lived SAS do aur account key ki jagah identity-backed SAS (user delegation SAS) ko prefer karo.</li>\n<li><b>Azure SQL Database</b> purchasing: <b>DTU</b> ek simple bundled unit hai; <b>vCore</b> mein vCores aur hardware generation chunte hain (memory usi choice ke saath aati hai) aur storage alag size karte hain. <b>Serverless</b> (vCore ka ek option) idle hone par <b>auto-pause</b> ho sakta hai aur pehle connection par resume hota hai, isliye pehli call slow ho sakti hai ya thodi der fail: retry logic lagao (<code>EnableRetryOnFailure</code>, Day 6). <b>Elastic pools</b> mein kai databases resources ka ek budget share karte hain, alag-alag peak time wale kai chhote tenant databases ke liye achha.</li>\n<li><b>Jo Day 18 se jaante ho:</b> Azure SQL Database mein <b>RCSI by default on hai</b> (READ COMMITTED reads shared locks ki jagah row versions use karti hain), par SQL Server instance mein yeh off rehta hai jab tak tum enable na karo. Passwordless access ke liye connection string mein <code>Authentication=Active Directory Default</code> use karo.</li>\n<li><b>Environments aur landing zones (brief):</b> dev, test aur prod alag rakho (alag subscriptions ya kam se kam resource groups), management groups se organise karo, <b>Azure Policy</b> aur tags lagao, resources ke naam consistent rakho, aur sab kuch code mein define karo (Bicep ya Terraform; pipelines Day 21 mein). <b>Landing zone</b> wahi taiyaar foundation hai (network, identity, policy, logging) jis par team ke workloads utarte hain.</li>\n<li><b>Cost awareness, bina prices:</b> <b>scale to zero</b> (Flex Consumption, Container Apps, serverless SQL) idle mein kam kharch karta hai par cold-start deri jodta hai; <b>always-on</b> (Premium always-ready instances, App Service Always On, provisioned databases) lagatar kharch karta hai par jaldi jawab deta hai. Right-size karo, dev/test ko office hours ke baad band karo, budgets aur alerts lagao, aur ownership ke liye tag karo. Asli numbers ke liye decision ke samay Azure pricing calculator use karo.</li>\n</ul>\n<p><b>Kab use karein:</b> logs, exports aur backups ke liye tiering aur lifecycle rules; dev ya spiky workloads ke liye serverless SQL; kai chhote databases ke liye elastic pools. <b>Kab nahi:</b> jis path par users intezaar karte hain wahan Archive data mat rakho, latency-critical hamesha-busy API ke liye serverless SQL mat lo, aur \"mehnat bachane\" ke liye dev aur prod ek subscription mein mat rakho.</p>"
      },
      code: [
        {
          caption: {
            en: "Blob upload with the identity and an access tier (compile-checked, no Azure call)",
            hi: "Identity और access tier के साथ Blob upload (compile-checked, Azure call नहीं)",
            hg: "Identity aur access tier ke saath Blob upload (compile-checked, Azure call nahi)"
          },
          check: "compile",
          packages: [
            "Azure.Identity@1.*",
            "Azure.Storage.Blobs@12.*"
          ],
          src: "using Azure.Identity;\nusing Azure.Storage.Blobs;\nusing Azure.Storage.Blobs.Models;\n\n// Compile-check only: nothing here runs against Azure.\nstatic async Task UploadReportAsync(BlobContainerClient container, Stream content)\n{\n    var blob = container.GetBlobClient(\"reports/2026/10/orders.csv\");\n    var options = new BlobUploadOptions\n    {\n        AccessTier = AccessTier.Cool,                       // rarely read after the first week\n        HttpHeaders = new BlobHttpHeaders { ContentType = \"text/csv\" }\n    };\n    await blob.UploadAsync(content, options);\n}\n\nvar service = new BlobServiceClient(\n    new Uri(\"https://storordersprod.blob.core.windows.net\"),\n    new DefaultAzureCredential());                          // identity, not an account key\nvar container = service.GetBlobContainerClient(\"exports\");\nConsole.WriteLine($\"container client for {container.Name}, upload not called\");\nif (args.Length > 100) await UploadReportAsync(container, Stream.Null);   // never true here"
        },
        {
          lang: "text",
          caption: {
            en: "Azure SQL connection string without a password (display-only; the identity needs a database user mapped to it)",
            hi: "बिना password वाली Azure SQL connection string (display-only; identity से mapped database user चाहिए)",
            hg: "Bina password wali Azure SQL connection string (display-only; identity se mapped database user chahiye)"
          },
          check: "none",
          src: "Server=tcp:sql-orders-prod.database.windows.net,1433;Database=orders;Authentication=Active Directory Default;Encrypt=True;"
        }
      ]
    },
    {
      id: "whats-new",
      depth: "detailed",
      title: {
        en: "What is new in Azure and .NET hosting",
        hi: "Azure और .NET hosting में नया क्या है",
        hg: "Azure aur .NET hosting mein naya kya hai"
      },
      body: {
        en: "<ul>\n<li><b>Functions in .NET:</b> support for the in-process model ends (or ended) on 10 November 2026 (Azure Functions docs); the isolated worker model supports current .NET versions including .NET 10.</li>\n<li><b>Functions hosting:</b> Flex Consumption is the recommended serverless plan for new apps; the Consumption plan is labelled legacy and Linux Consumption is being retired (the docs give 30 September 2028; check the current notice).</li>\n<li><b>Application Insights with OpenTelemetry:</b> the Azure Monitor OpenTelemetry Distro (<code>Azure.Monitor.OpenTelemetry.AspNetCore</code>, <code>UseAzureMonitor()</code>) continues to work; the current docs also introduce a newer <code>Microsoft.OpenTelemetry</code> distro for new apps.</li>\n<li><b>Azure.Identity:</b> <code>AZURE_TOKEN_CREDENTIALS</code> can name one specific credential from package version 1.15.0; the default chain also includes Azure Developer CLI and a broker credential, and its list can change between versions.</li>\n</ul>",
        hi: "<ul>\n<li><b>.NET में Functions:</b> in-process model का support 10 November 2026 को खत्म होता है (या हो चुका है) (Azure Functions docs); isolated worker model .NET 10 समेत current .NET versions को support करता है।</li>\n<li><b>Functions hosting:</b> नए apps के लिए Flex Consumption recommended serverless plan है; Consumption plan को legacy कहा गया है और Linux Consumption retire हो रहा है (docs 30 September 2028 बताते हैं; current notice check करो)।</li>\n<li><b>OpenTelemetry के साथ Application Insights:</b> Azure Monitor OpenTelemetry Distro (<code>Azure.Monitor.OpenTelemetry.AspNetCore</code>, <code>UseAzureMonitor()</code>) चलता रहता है; current docs नए apps के लिए नया <code>Microsoft.OpenTelemetry</code> distro भी introduce करते हैं।</li>\n<li><b>Azure.Identity:</b> package version 1.15.0 से <code>AZURE_TOKEN_CREDENTIALS</code> में एक specific credential का नाम दे सकते हैं; default chain में Azure Developer CLI और broker credential भी हैं, और उसकी list versions के बीच बदल सकती है।</li>\n</ul>",
        hg: "<ul>\n<li><b>.NET mein Functions:</b> in-process model ka support 10 November 2026 ko khatam hota hai (ya ho chuka hai) (Azure Functions docs); isolated worker model .NET 10 samet current .NET versions ko support karta hai.</li>\n<li><b>Functions hosting:</b> naye apps ke liye Flex Consumption recommended serverless plan hai; Consumption plan ko legacy kaha gaya hai aur Linux Consumption retire ho raha hai (docs 30 September 2028 batate hain; current notice check karo).</li>\n<li><b>OpenTelemetry ke saath Application Insights:</b> Azure Monitor OpenTelemetry Distro (<code>Azure.Monitor.OpenTelemetry.AspNetCore</code>, <code>UseAzureMonitor()</code>) chalta rehta hai; current docs naye apps ke liye naya <code>Microsoft.OpenTelemetry</code> distro bhi introduce karte hain.</li>\n<li><b>Azure.Identity:</b> package version 1.15.0 se <code>AZURE_TOKEN_CREDENTIALS</code> mein ek specific credential ka naam de sakte hain; default chain mein Azure Developer CLI aur broker credential bhi hain, aur uski list versions ke beech badal sakti hai.</li>\n</ul>"
      }
    }
  ],
  qa: [
    {
      id: "which-messaging-service",
      depth: "short",
      q: "Service Bus, Event Grid or Event Hubs: how do you choose?",
      answer: "Service Bus for business commands needing reliable handling (queues, topics, DLQ, sessions); Event Grid to push 'something happened' notifications. Event Hubs is for very high-volume event streams read by partition.",
      meaning: {
        hi: "Business commands के लिए Service Bus। 'कुछ हुआ' notifications push करने के लिए Event Grid। बहुत high-volume streams के लिए Event Hubs।",
        hg: "Business commands ke liye Service Bus. 'Kuch hua' notifications push karne ke liye Event Grid. Bahut high-volume streams ke liye Event Hubs."
      },
      explain: {
        en: "<ul>\n<li>Ask what the message <b>is</b>: a command or work item (Service Bus), a fact that something changed (Event Grid), or a data point in a continuous stream (Event Hubs).</li>\n<li>Service Bus gives per-message locks, dead-lettering, sessions and duplicate detection. Event Hubs has no per-message lock or DLQ; consumers track a position per partition. Event Grid pushes with retries and is not a backlog.</li>\n<li>Follow-up: \"Can they work together?\" Yes. A blob-created event goes through Event Grid into a Service Bus queue that holds the work, and telemetry streams through Event Hubs.</li>\n</ul>",
        hi: "<ul>\n<li>पूछो कि message <b>क्या</b> है: command या work item (Service Bus), कुछ बदलने का fact (Event Grid), या लगातार stream का एक data point (Event Hubs)।</li>\n<li>Service Bus में per-message locks, dead-lettering, sessions और duplicate detection हैं। Event Hubs में per-message lock या DLQ नहीं; consumers हर partition की position track करते हैं। Event Grid retries के साथ push करता है और backlog नहीं है।</li>\n<li>Follow-up: \"क्या ये साथ चल सकते हैं?\" हाँ। Blob-created event Event Grid से होकर Service Bus queue में जाता है जो काम को रखती है, और telemetry Event Hubs से stream होती है।</li>\n</ul>",
        hg: "<ul>\n<li>Poocho ki message <b>kya</b> hai: command ya work item (Service Bus), kuch badalne ka fact (Event Grid), ya lagatar stream ka ek data point (Event Hubs).</li>\n<li>Service Bus mein per-message locks, dead-lettering, sessions aur duplicate detection hain. Event Hubs mein per-message lock ya DLQ nahi; consumers har partition ki position track karte hain. Event Grid retries ke saath push karta hai aur backlog nahi hai.</li>\n<li>Follow-up: \"Kya yeh saath chal sakte hain?\" Haan. Blob-created event Event Grid se hokar Service Bus queue mein jaata hai jo kaam ko rakhti hai, aur telemetry Event Hubs se stream hoti hai.</li>\n</ul>"
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
        en: "<ul>\n<li><b>System-assigned:</b> tied to one resource's lifecycle. <b>User-assigned:</b> its own resource, shareable across resources (handy for blue/green or many apps needing the same access).</li>\n<li>You then grant it an RBAC role on the target (least privilege, smallest scope). Nothing to leak or rotate by hand.</li>\n<li>Follow-up: \"What about local development?\" <code>DefaultAzureCredential</code> falls back to your developer login, so the same code runs on the laptop.</li>\n</ul>",
        hi: "<ul>\n<li><b>System-assigned:</b> एक resource के lifecycle से बँधी। <b>User-assigned:</b> अपना अलग resource, कई resources में share हो सकती है (blue/green या कई apps को वही access चाहिए तब काम की)।</li>\n<li>फिर target पर उसे RBAC role दो (least privilege, सबसे छोटा scope)। हाथ से leak या rotate करने को कुछ नहीं।</li>\n<li>Follow-up: \"Local development का क्या?\" <code>DefaultAzureCredential</code> तुम्हारे developer login पर fall back करता है, इसलिए वही code laptop पर चलता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>System-assigned:</b> ek resource ke lifecycle se bandhi. <b>User-assigned:</b> apna alag resource, kai resources mein share ho sakti hai (blue/green ya kai apps ko wahi access chahiye tab kaam ki).</li>\n<li>Phir target par use RBAC role do (least privilege, sabse chhota scope). Haath se leak ya rotate karne ko kuch nahi.</li>\n<li>Follow-up: \"Local development ka kya?\" <code>DefaultAzureCredential</code> tumhare developer login par fall back karta hai, isliye wahi code laptop par chalta hai.</li>\n</ul>"
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
        en: "<ul>\n<li>Order per the docs: environment, workload identity, managed identity, Visual Studio, Visual Studio Code, Azure CLI, Azure PowerShell, Azure Developer CLI; interactive browser is off by default. Check the current docs, the list has changed between versions.</li>\n<li>Why be specific in production: a failed chain is hard to debug, trying credentials adds delay, and a stray environment variable on a host can silently change which identity is used.</li>\n<li>Follow-up: \"How do you limit the chain?\" Use the <code>Exclude...</code> options, the <code>AZURE_TOKEN_CREDENTIALS</code> setting, or build your own <code>ChainedTokenCredential</code>. Puzzle 4 simulates the order.</li>\n</ul>",
        hi: "<ul>\n<li>Docs के अनुसार order: environment, workload identity, managed identity, Visual Studio, Visual Studio Code, Azure CLI, Azure PowerShell, Azure Developer CLI; interactive browser default से off है। Current docs check करो, versions के बीच list बदली है।</li>\n<li>Production में specific क्यों: fail हुई chain को debug करना मुश्किल है, credentials try करने में देरी लगती है, और host पर एक भटका environment variable चुपचाप बदल सकता है कि कौन-सी identity use हो।</li>\n<li>Follow-up: \"Chain को limit कैसे करते हो?\" <code>Exclude...</code> options, <code>AZURE_TOKEN_CREDENTIALS</code> setting, या अपना <code>ChainedTokenCredential</code> बनाओ। Puzzle 4 order को simulate करता है।</li>\n</ul>",
        hg: "<ul>\n<li>Docs ke anusaar order: environment, workload identity, managed identity, Visual Studio, Visual Studio Code, Azure CLI, Azure PowerShell, Azure Developer CLI; interactive browser default se off hai. Current docs check karo, versions ke beech list badli hai.</li>\n<li>Production mein specific kyun: fail hui chain ko debug karna mushkil hai, credentials try karne mein deri lagti hai, aur host par ek bhatka environment variable chupchaap badal sakta hai ki kaun-si identity use ho.</li>\n<li>Follow-up: \"Chain ko limit kaise karte ho?\" <code>Exclude...</code> options, <code>AZURE_TOKEN_CREDENTIALS</code> setting, ya apna <code>ChainedTokenCredential</code> banao. Puzzle 4 order ko simulate karta hai.</li>\n</ul>"
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
        en: "<ul>\n<li>Settings marked as <b>slot settings</b> stay with the slot (for example a staging-only connection or environment name); other settings travel with the app in a swap. Puzzle 5 shows this.</li>\n<li>The database is shared, so the new and old code must both work with the schema: use backward-compatible (expand/contract) migrations.</li>\n<li>Follow-up: \"Canary?\" Slots can route a percentage of traffic to a slot (traffic routing), but check what your tier supports.</li>\n</ul>",
        hi: "<ul>\n<li><b>Slot settings</b> mark की हुई settings slot के साथ रहती हैं (जैसे सिर्फ़ staging वाली connection या environment का नाम); बाकी settings swap में app के साथ जाती हैं। Puzzle 5 यह दिखाता है।</li>\n<li>Database shared है, इसलिए नया और पुराना दोनों code schema के साथ चलने चाहिए: backward-compatible (expand/contract) migrations use करो।</li>\n<li>Follow-up: \"Canary?\" Slots कुछ percentage traffic किसी slot पर भेज सकते हैं (traffic routing), पर check करो तुम्हारा tier क्या support करता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Slot settings</b> mark ki hui settings slot ke saath rehti hain (jaise sirf staging wali connection ya environment ka naam); baaki settings swap mein app ke saath jaati hain. Puzzle 5 yeh dikhata hai.</li>\n<li>Database shared hai, isliye naya aur purana dono code schema ke saath chalne chahiye: backward-compatible (expand/contract) migrations use karo.</li>\n<li>Follow-up: \"Canary?\" Slots kuch percentage traffic kisi slot par bhej sakte hain (traffic routing), par check karo tumhara tier kya support karta hai.</li>\n</ul>"
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
        en: "<ul>\n<li>Cold start is the delay to start a new instance when the app was scaled to zero. Fix it with always-ready instances (Flex, Premium) at the cost of paying while idle: the classic trade-off.</li>\n<li>Consumption is labelled legacy in the current docs; Linux Consumption is being retired. Say \"check the current plan status\" rather than quoting limits from memory.</li>\n<li>Follow-up: \"An HTTP function takes 5 minutes?\" HTTP-triggered responses are capped (about 230 seconds by the load balancer); use the async pattern, a queue, or Durable Functions.</li>\n</ul>",
        hi: "<ul>\n<li>Cold start वह देरी है जो app के zero पर scale होने के बाद नया instance शुरू करने में लगती है। इसे always-ready instances (Flex, Premium) से घटाओ, idle में भी पैसा देने की कीमत पर: classic trade-off।</li>\n<li>Current docs में Consumption को legacy कहा गया है; Linux Consumption retire हो रहा है। याद से limits बोलने की जगह \"current plan status check करो\" कहो।</li>\n<li>Follow-up: \"HTTP function 5 minutes लेता है तो?\" HTTP-triggered response पर cap है (load balancer से लगभग 230 seconds); async pattern, queue या Durable Functions use करो।</li>\n</ul>",
        hg: "<ul>\n<li>Cold start woh deri hai jo app ke zero par scale hone ke baad naya instance shuru karne mein lagti hai. Ise always-ready instances (Flex, Premium) se ghatao, idle mein bhi paisa dene ki keemat par: classic trade-off.</li>\n<li>Current docs mein Consumption ko legacy kaha gaya hai; Linux Consumption retire ho raha hai. Yaad se limits bolne ki jagah \"current plan status check karo\" kaho.</li>\n<li>Follow-up: \"HTTP function 5 minutes leta hai to?\" HTTP-triggered response par cap hai (load balancer se lagbhag 230 seconds); async pattern, queue ya Durable Functions use karo.</li>\n</ul>"
      }
    },
    {
      id: "inprocess-vs-isolated",
      depth: "short",
      q: "In-process vs isolated worker model for .NET Functions: which one and why?",
      answer: "Isolated worker. Your function runs in its own process with normal DI and Program.cs, and in-process support ends (or ended) on 10 November 2026.",
      meaning: {
        hi: "Isolated worker। तुम्हारा function अपने process में normal DI और Program.cs के साथ चलता है, और in-process का support 10 November 2026 को खत्म होता है (या हो चुका है)।",
        hg: "Isolated worker. Tumhara function apne process mein normal DI aur Program.cs ke saath chalta hai, aur in-process ka support 10 November 2026 ko khatam hota hai (ya ho chuka hai)."
      },
      explain: {
        en: "<ul>\n<li>Isolated gives you control of the .NET version, dependency conflicts stay out of the host, and the middleware and DI model feels like ASP.NET Core (Day 12).</li>\n<li>Migration is mostly mechanical: new project style, <code>[Function]</code> instead of <code>[FunctionName]</code>, extension packages renamed, <code>FUNCTIONS_WORKER_RUNTIME</code> set to <code>dotnet-isolated</code>. The migration guide suggests doing it in a staging slot.</li>\n<li>Follow-up: \"Why does the date matter to a lead?\" It is a deadline for the team's backlog: after it the in-process apps are unsupported.</li>\n</ul>",
        hi: "<ul>\n<li>Isolated से तुम्हें .NET version पर control मिलता है, dependency conflicts host से बाहर रहते हैं, और middleware व DI model ASP.NET Core जैसा लगता है (Day 12)।</li>\n<li>Migration ज़्यादातर mechanical है: नया project style, <code>[FunctionName]</code> की जगह <code>[Function]</code>, extension packages के नाम बदले, <code>FUNCTIONS_WORKER_RUNTIME</code> को <code>dotnet-isolated</code> करना। Migration guide staging slot में करने की सलाह देती है।</li>\n<li>Follow-up: \"Lead के लिए date क्यों मायने रखती है?\" यह team के backlog की deadline है: उसके बाद in-process apps unsupported हैं।</li>\n</ul>",
        hg: "<ul>\n<li>Isolated se tumhe .NET version par control milta hai, dependency conflicts host se bahar rehte hain, aur middleware va DI model ASP.NET Core jaisa lagta hai (Day 12).</li>\n<li>Migration zyadatar mechanical hai: naya project style, <code>[FunctionName]</code> ki jagah <code>[Function]</code>, extension packages ke naam badle, <code>FUNCTIONS_WORKER_RUNTIME</code> ko <code>dotnet-isolated</code> karna. Migration guide staging slot mein karne ki salah deti hai.</li>\n<li>Follow-up: \"Lead ke liye date kyun maayne rakhti hai?\" Yeh team ke backlog ki deadline hai: uske baad in-process apps unsupported hain.</li>\n</ul>"
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
        en: "<ul>\n<li>Layers: identity first (Storage, Service Bus, Azure SQL), Key Vault for true secrets, user secrets locally (Day 12), and a secret scanner in CI (Day 21).</li>\n<li>Vault secret <code>A--B</code> maps to configuration key <code>A:B</code>; the vault source added last wins over earlier sources.</li>\n<li>Follow-up: \"How do you rotate a secret?\" Rotate in the vault; apps using a Key Vault reference pick up new versions within about 24 hours (cached; a config change or the refresh API forces it), and a startup-loaded provider needs a restart or a reload strategy.</li>\n</ul>",
        hi: "<ul>\n<li>Layers: पहले identity (Storage, Service Bus, Azure SQL), असली secrets के लिए Key Vault, local में user secrets (Day 12), और CI में secret scanner (Day 21)।</li>\n<li>Vault का secret <code>A--B</code> configuration key <code>A:B</code> से map होता है; सबसे आखिर में जुड़ा vault source पहले के sources पर जीतता है।</li>\n<li>Follow-up: \"Secret rotate कैसे करते हो?\" Vault में rotate करो; Key Vault reference वाली apps लगभग 24 घंटे में नए versions उठा लेती हैं (cached; config change या refresh API से तुरंत), और startup पर load करने वाले provider को restart या reload strategy चाहिए।</li>\n</ul>",
        hg: "<ul>\n<li>Layers: pehle identity (Storage, Service Bus, Azure SQL), asli secrets ke liye Key Vault, local mein user secrets (Day 12), aur CI mein secret scanner (Day 21).</li>\n<li>Vault ka secret <code>A--B</code> configuration key <code>A:B</code> se map hota hai; sabse aakhir mein juda vault source pehle ke sources par jeetta hai.</li>\n<li>Follow-up: \"Secret rotate kaise karte ho?\" Vault mein rotate karo; Key Vault reference wali apps lagbhag 24 ghante mein naye versions utha leti hain (cached; config change ya refresh API se turant), aur startup par load karne wale provider ko restart ya reload strategy chahiye.</li>\n</ul>"
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
        en: "<ul>\n<li>Decide on <b>who operates it</b> and <b>what you need</b>: simple HTTP app (App Service); microservices in containers with scale to zero and event-driven scaling (Container Apps); custom operators, service mesh, fine network and node control (AKS).</li>\n<li>AKS means upgrades, node pools, networking and security policy are your team's job. Cost of ownership is mostly people, not machines.</li>\n<li>Follow-up: \"Can you move later?\" If the app is a container and config is external (12-factor), App Service containers, Container Apps and AKS are all reachable, so do not over-design for AKS on day one.</li>\n</ul>",
        hi: "<ul>\n<li>फ़ैसला इस पर करो कि <b>कौन चलाएगा</b> और <b>क्या चाहिए</b>: simple HTTP app (App Service); scale to zero और event-driven scaling वाले containers में microservices (Container Apps); custom operators, service mesh, बारीक network और node control (AKS)।</li>\n<li>AKS का मतलब है upgrades, node pools, networking और security policy team का काम है। Ownership की cost ज़्यादातर लोगों की है, machines की नहीं।</li>\n<li>Follow-up: \"बाद में बदल सकते हो?\" अगर app container है और config बाहर है (12-factor), तो App Service containers, Container Apps और AKS सब पहुँच में हैं, इसलिए पहले दिन AKS के लिए over-design मत करो।</li>\n</ul>",
        hg: "<ul>\n<li>Faisla is par karo ki <b>kaun chalayega</b> aur <b>kya chahiye</b>: simple HTTP app (App Service); scale to zero aur event-driven scaling wale containers mein microservices (Container Apps); custom operators, service mesh, baareek network aur node control (AKS).</li>\n<li>AKS ka matlab hai upgrades, node pools, networking aur security policy team ka kaam hai. Ownership ki cost zyadatar logon ki hai, machines ki nahi.</li>\n<li>Follow-up: \"Baad mein badal sakte ho?\" Agar app container hai aur config bahar hai (12-factor), to App Service containers, Container Apps aur AKS sab pahunch mein hain, isliye pehle din AKS ke liye over-design mat karo.</li>\n</ul>"
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
        en: "<ul>\n<li>Peek-lock is the safe default for business work. The lock duration defaults to 1 minute (maximum 5); renew the lock for longer processing. When the lock expires or you abandon, the delivery count rises.</li>\n<li>Receive-and-delete is fine only for low-value or short-lived data where losing a message is acceptable.</li>\n<li>Follow-up: \"What if Complete fails after the work is done?\" The message is redelivered, so the handler must be idempotent (Day 16). Also settle before closing the receiver, otherwise the lock just expires.</li>\n</ul>",
        hi: "<ul>\n<li>Business काम के लिए peek-lock safe default है। Lock duration default 1 minute है (maximum 5); लंबी processing के लिए lock renew करो। Lock expire होने या तुम्हारे abandon करने पर delivery count बढ़ता है।</li>\n<li>Receive-and-delete सिर्फ़ low-value या थोड़े समय के data के लिए ठीक है जहाँ message खोना चलता है।</li>\n<li>Follow-up: \"काम होने के बाद Complete fail हो जाए तो?\" Message फिर deliver होता है, इसलिए handler idempotent होना चाहिए (Day 16)। साथ ही receiver बंद करने से पहले settle करो, वरना lock बस expire होता है।</li>\n</ul>",
        hg: "<ul>\n<li>Business kaam ke liye peek-lock safe default hai. Lock duration default 1 minute hai (maximum 5); lambi processing ke liye lock renew karo. Lock expire hone ya tumhare abandon karne par delivery count badhta hai.</li>\n<li>Receive-and-delete sirf low-value ya thode samay ke data ke liye theek hai jahan message khona chalta hai.</li>\n<li>Follow-up: \"Kaam hone ke baad Complete fail ho jaye to?\" Message phir deliver hota hai, isliye handler idempotent hona chahiye (Day 16). Saath hi receiver band karne se pehle settle karo, warna lock bas expire hota hai.</li>\n</ul>"
      }
    },
    {
      id: "service-bus-dead-letter",
      depth: "detailed",
      q: "Why do messages land in a Service Bus dead-letter queue and what do you do about it?",
      answer: "Mostly because the delivery count exceeded MaxDeliveryCount (default 10), the app dead-lettered it, or it expired with dead-lettering on expiration enabled. You inspect the reason, fix the cause, then resubmit.",
      meaning: {
        hi: "ज़्यादातर इसलिए कि delivery count MaxDeliveryCount (default 10) से ऊपर गया, expiration पर dead-lettering enabled होने से message expire हुआ, या app ने खुद dead-letter किया। Reason देखो, कारण ठीक करो, फिर resubmit करो।",
        hg: "Zyadatar isliye ki delivery count MaxDeliveryCount (default 10) se upar gaya, expiration par dead-lettering enabled hone se message expire hua, ya app ne khud dead-letter kiya. Reason dekho, kaaran theek karo, phir resubmit karo."
      },
      explain: {
        en: "<ul>\n<li>Each queue and subscription has its own DLQ. System reasons include <code>MaxDeliveryCountExceeded</code> and <code>TTLExpiredException</code> (expired messages are dead-lettered only if dead-lettering on expiration is enabled, which is off by default; otherwise they are dropped); the app can set its own reason and description. There is no automatic cleanup: messages stay until someone completes them.</li>\n<li>Operate it: alert on DLQ depth, read it with a receiver whose sub-queue is <code>DeadLetter</code>, find the pattern, fix the bug, then resend (Service Bus Explorer or a small tool). Do not just purge.</li>\n<li>Follow-up: \"A message is poison on the first try?\" Dead-letter it immediately with a reason instead of burning ten retries. Puzzle 1 simulates the delivery count.</li>\n</ul>",
        hi: "<ul>\n<li>हर queue और subscription की अपनी DLQ होती है। System reasons में <code>MaxDeliveryCountExceeded</code> और <code>TTLExpiredException</code> हैं; app अपना reason और description set कर सकती है। Automatic cleanup नहीं है: messages तब तक रहते हैं जब तक कोई उन्हें complete न करे।</li>\n<li>इसे operate करो: DLQ depth पर alert, <code>DeadLetter</code> sub-queue वाले receiver से पढ़ो, pattern खोजो, bug ठीक करो, फिर resend (Service Bus Explorer या छोटा tool)। बस purge मत करो।</li>\n<li>Follow-up: \"Message पहली ही बार में poison है?\" दस retries जलाने की जगह तुरंत reason के साथ dead-letter करो। Puzzle 1 delivery count को simulate करता है।</li>\n</ul>",
        hg: "<ul>\n<li>Har queue aur subscription ki apni DLQ hoti hai. System reasons mein <code>MaxDeliveryCountExceeded</code> aur <code>TTLExpiredException</code> hain; app apna reason aur description set kar sakti hai. Automatic cleanup nahi hai: messages tab tak rehte hain jab tak koi unhe complete na kare.</li>\n<li>Ise operate karo: DLQ depth par alert, <code>DeadLetter</code> sub-queue wale receiver se padho, pattern khojo, bug theek karo, phir resend (Service Bus Explorer ya chhota tool). Bas purge mat karo.</li>\n<li>Follow-up: \"Message pehli hi baar mein poison hai?\" Das retries jalane ki jagah turant reason ke saath dead-letter karo. Puzzle 1 delivery count ko simulate karta hai.</li>\n</ul>"
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
        en: "<ul>\n<li>Pick the session id from the entity whose events must stay ordered (order id, customer id). Different sessions run in parallel, so throughput scales with the number of sessions.</li>\n<li>The cost: one hot session is a bottleneck, and the queue must be created with sessions enabled; every message then needs a session id (sending without one is rejected with an error).</li>\n<li>Follow-up: \"Is ordering enough for correctness?\" No. Retries and redelivery still happen, so handlers stay idempotent and carry a version or sequence check (Day 16).</li>\n</ul>",
        hi: "<ul>\n<li>Session id उस entity से चुनो जिसके events order में रहने चाहिए (order id, customer id)। अलग sessions parallel चलते हैं, इसलिए throughput sessions की गिनती के साथ बढ़ता है।</li>\n<li>कीमत: एक hot session bottleneck है, और queue sessions enabled के साथ बनानी पड़ती है; फिर हर message को session id चाहिए (बिना id के send करने पर error आता है और message reject होता है)।</li>\n<li>Follow-up: \"क्या ordering correctness के लिए काफ़ी है?\" नहीं। Retries और redelivery फिर भी होती हैं, इसलिए handlers idempotent रहें और version या sequence check रखें (Day 16)।</li>\n</ul>",
        hg: "<ul>\n<li>Session id us entity se chuno jiske events order mein rehne chahiye (order id, customer id). Alag sessions parallel chalte hain, isliye throughput sessions ki ginti ke saath badhta hai.</li>\n<li>Keemat: ek hot session bottleneck hai, aur queue sessions enabled ke saath banani padti hai; phir har message ko session id chahiye (bina id ke send karne par error aata hai aur message reject hota hai).</li>\n<li>Follow-up: \"Kya ordering correctness ke liye kaafi hai?\" Nahi. Retries aur redelivery phir bhi hoti hain, isliye handlers idempotent rahein aur version ya sequence check rakhein (Day 16).</li>\n</ul>"
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
        en: "<ul>\n<li>It only looks at <code>MessageId</code>, which your app must set from a business key (for example <code>order-A-1001-placed</code>), not a random value. The duplicate is accepted and silently dropped, so the sender sees success. Puzzle 2 simulates the window.</li>\n<li>Window: default 10 minutes, minimum 20 seconds, maximum 7 days; a larger window costs throughput. The Basic tier does not support it.</li>\n<li>It does not protect the consumer side: peek-lock still redelivers after a failed Complete, so keep an idempotent consumer (inbox table, Day 16).</li>\n</ul>",
        hi: "<ul>\n<li>यह सिर्फ़ <code>MessageId</code> देखता है, जो तुम्हारी app को business key से set करनी है (जैसे <code>order-A-1001-placed</code>), random value से नहीं। Duplicate accept होता है और चुपचाप drop हो जाता है, इसलिए sender को success दिखता है। Puzzle 2 window को simulate करता है।</li>\n<li>Window: default 10 minutes, minimum 20 seconds, maximum 7 days; बड़ी window throughput पर असर डालती है। Basic tier इसे support नहीं करता।</li>\n<li>यह consumer side को protect नहीं करता: failed Complete के बाद peek-lock फिर भी redeliver करता है, इसलिए idempotent consumer रखो (inbox table, Day 16)।</li>\n</ul>",
        hg: "<ul>\n<li>Yeh sirf <code>MessageId</code> dekhta hai, jo tumhari app ko business key se set karni hai (jaise <code>order-A-1001-placed</code>), random value se nahi. Duplicate accept hota hai aur chupchaap drop ho jaata hai, isliye sender ko success dikhta hai. Puzzle 2 window ko simulate karta hai.</li>\n<li>Window: default 10 minutes, minimum 20 seconds, maximum 7 days; badi window throughput par asar daalti hai. Basic tier ise support nahi karta.</li>\n<li>Yeh consumer side ko protect nahi karta: failed Complete ke baad peek-lock phir bhi redeliver karta hai, isliye idempotent consumer rakho (inbox table, Day 16).</li>\n</ul>"
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
        en: "<ul>\n<li>Pick Storage Queue for a plain work backlog where you only need \"add, take, delete\" (thumbnail jobs, simple background tasks). The Functions queue trigger retries a failing message up to <code>maxDequeueCount</code> (default 5), then moves it to a <code>&lt;queue&gt;-poison</code> queue.</li>\n<li>Pick Service Bus when you need publish/subscribe, ordering, an engine-managed DLQ, scheduled delivery or transactions.</li>\n<li>Follow-up: \"Can you start with Storage Queue and move later?\" Yes if the producer and consumer are behind an interface (Day 8, Day 11) and handlers are idempotent.</li>\n</ul>",
        hi: "<ul>\n<li>सादे work backlog के लिए Storage Queue चुनो जहाँ सिर्फ़ \"add, take, delete\" चाहिए (thumbnail jobs, सादे background tasks)। Functions का queue trigger fail होते message को <code>maxDequeueCount</code> (default 5) तक retry करता है, फिर <code>&lt;queue&gt;-poison</code> queue में भेज देता है।</li>\n<li>जब publish/subscribe, ordering, engine-managed DLQ, scheduled delivery या transactions चाहिए तब Service Bus चुनो।</li>\n<li>Follow-up: \"Storage Queue से शुरू करके बाद में बदल सकते हो?\" हाँ, अगर producer और consumer interface के पीछे हैं (Day 8, Day 11) और handlers idempotent हैं।</li>\n</ul>",
        hg: "<ul>\n<li>Saade work backlog ke liye Storage Queue chuno jahan sirf \"add, take, delete\" chahiye (thumbnail jobs, saade background tasks). Functions ka queue trigger fail hote message ko <code>maxDequeueCount</code> (default 5) tak retry karta hai, phir <code>&lt;queue&gt;-poison</code> queue mein bhej deta hai.</li>\n<li>Jab publish/subscribe, ordering, engine-managed DLQ, scheduled delivery ya transactions chahiye tab Service Bus chuno.</li>\n<li>Follow-up: \"Storage Queue se shuru karke baad mein badal sakte ho?\" Haan, agar producer aur consumer interface ke peeche hain (Day 8, Day 11) aur handlers idempotent hain.</li>\n</ul>"
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
        en: "<ul>\n<li>A partition key sends related events (one device, one customer) to the same partition so their order holds. Within a group, partitions are shared among consumer instances, so the partition count limits parallelism.</li>\n<li>Events are retained for a configured time, not deleted when read; a consumer keeps its offset (checkpoint) so it can resume or replay. This is a log, unlike a Service Bus queue.</li>\n<li>Follow-up: \"Two teams need the same stream?\" Give each its own consumer group. The same hot-key skew warning from Day 19 (Cosmos partition key) applies to partition keys here.</li>\n</ul>",
        hi: "<ul>\n<li>Partition key से related events (एक device, एक customer) एक ही partition में जाते हैं ताकि उनका order बना रहे। एक group में partitions consumer instances में बँटते हैं, इसलिए partition count parallelism की limit तय करता है।</li>\n<li>Events configured समय तक रखे जाते हैं, पढ़ने पर delete नहीं होते; consumer अपना offset (checkpoint) रखता है ताकि resume या replay कर सके। यह एक log है, Service Bus queue जैसा नहीं।</li>\n<li>Follow-up: \"दो teams को वही stream चाहिए?\" हर एक को अपना consumer group दो। Day 19 (Cosmos partition key) वाली hot-key skew की चेतावनी यहाँ के partition keys पर भी लागू है।</li>\n</ul>",
        hg: "<ul>\n<li>Partition key se related events (ek device, ek customer) ek hi partition mein jaate hain taaki unka order bana rahe. Ek group mein partitions consumer instances mein bantte hain, isliye partition count parallelism ki limit tay karta hai.</li>\n<li>Events configured samay tak rakhe jaate hain, padhne par delete nahi hote; consumer apna offset (checkpoint) rakhta hai taaki resume ya replay kar sake. Yeh ek log hai, Service Bus queue jaisa nahi.</li>\n<li>Follow-up: \"Do teams ko wahi stream chahiye?\" Har ek ko apna consumer group do. Day 19 (Cosmos partition key) wali hot-key skew ki chetawani yahan ke partition keys par bhi lagu hai.</li>\n</ul>"
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
        en: "<ul>\n<li>APIM covers cross-cutting edge rules without code deploys: JWT validation, rate limits, quotas, header or body transformation, caching, versioning, subscription keys. Rules are configuration, so test and review them like code (store as code, deploy by pipeline, Day 21).</li>\n<li>YARP is a library you host, tune and unit-test yourself (Day 16): no extra service, but you build what APIM gives you.</li>\n<li>Follow-up: \"Is a gateway a single point of failure?\" It can be, so deploy it with redundancy, keep it thin (no business logic), and monitor it first (see the observability card).</li>\n</ul>",
        hi: "<ul>\n<li>APIM code deploy के बिना cross-cutting edge rules संभालता है: JWT validation, rate limits, quotas, header या body transformation, caching, versioning, subscription keys। Rules configuration हैं, इसलिए उन्हें code की तरह test और review करो (code में रखो, pipeline से deploy, Day 21)।</li>\n<li>YARP एक library है जिसे तुम खुद host, tune और unit-test करते हो (Day 16): कोई extra service नहीं, पर APIM जो देता है वह तुम्हें बनाना पड़ता है।</li>\n<li>Follow-up: \"क्या gateway single point of failure है?\" हो सकता है, इसलिए उसे redundancy के साथ deploy करो, पतला रखो (business logic नहीं), और पहले उसे monitor करो (observability card देखो)।</li>\n</ul>",
        hg: "<ul>\n<li>APIM code deploy ke bina cross-cutting edge rules sambhalta hai: JWT validation, rate limits, quotas, header ya body transformation, caching, versioning, subscription keys. Rules configuration hain, isliye unhe code ki tarah test aur review karo (code mein rakho, pipeline se deploy, Day 21).</li>\n<li>YARP ek library hai jise tum khud host, tune aur unit-test karte ho (Day 16): koi extra service nahi, par APIM jo deta hai woh tumhe banana padta hai.</li>\n<li>Follow-up: \"Kya gateway single point of failure hai?\" Ho sakta hai, isliye use redundancy ke saath deploy karo, patla rakho (business logic nahi), aur pehle use monitor karo (observability card dekho).</li>\n</ul>"
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
        en: "<ul>\n<li>Typical order in <code>inbound</code>: authenticate (<code>validate-jwt</code>), throttle (<code>rate-limit-by-key</code>, <code>quota-by-key</code>), then shape the request (<code>set-header</code>, <code>rewrite-uri</code>), maybe a cache lookup. <code>outbound</code> removes internal headers.</li>\n<li>Policies can be set at global, product, API and operation scope; <code>&lt;base /&gt;</code> inherits the parent scope.</li>\n<li>Follow-up: \"Is APIM auth enough?\" No. Defence in depth: the backend still validates the token or accepts calls only from the gateway, and does its own authorization (Day 13).</li>\n</ul>",
        hi: "<ul>\n<li><code>inbound</code> में आम order: authenticate (<code>validate-jwt</code>), throttle (<code>rate-limit-by-key</code>, <code>quota-by-key</code>), फिर request का shape (<code>set-header</code>, <code>rewrite-uri</code>), शायद cache lookup। <code>outbound</code> internal headers हटाता है।</li>\n<li>Policies global, product, API और operation scope पर set हो सकती हैं; <code>&lt;base /&gt;</code> parent scope inherit करता है।</li>\n<li>Follow-up: \"क्या APIM की auth काफ़ी है?\" नहीं। Defence in depth: backend फिर भी token validate करता है या सिर्फ़ gateway से calls लेता है, और अपनी authorization करता है (Day 13)।</li>\n</ul>",
        hg: "<ul>\n<li><code>inbound</code> mein aam order: authenticate (<code>validate-jwt</code>), throttle (<code>rate-limit-by-key</code>, <code>quota-by-key</code>), phir request ka shape (<code>set-header</code>, <code>rewrite-uri</code>), shayad cache lookup. <code>outbound</code> internal headers hataata hai.</li>\n<li>Policies global, product, API aur operation scope par set ho sakti hain; <code>&lt;base /&gt;</code> parent scope inherit karta hai.</li>\n<li>Follow-up: \"Kya APIM ki auth kaafi hai?\" Nahi. Defence in depth: backend phir bhi token validate karta hai ya sirf gateway se calls leta hai, aur apni authorization karta hai (Day 13).</li>\n</ul>"
      }
    },
    {
      id: "app-insights-opentelemetry",
      depth: "detailed",
      q: "How do you set up observability for a .NET app on Azure?",
      answer: "Use OpenTelemetry through Microsoft's distro: Microsoft.OpenTelemetry for new apps, while existing apps keep UseAzureMonitor(). Telemetry reaches Application Insights; set the connection string in the environment.",
      meaning: {
        hi: "OpenTelemetry को Azure Monitor distro (UseAzureMonitor) के साथ use करो ताकि traces, metrics और logs Application Insights में जाएँ। Connection string environment से set करो और हर service को नाम दो।",
        hg: "OpenTelemetry ko Azure Monitor distro (UseAzureMonitor) ke saath use karo taaki traces, metrics aur logs Application Insights mein jaayein. Connection string environment se set karo aur har service ko naam do."
      },
      explain: {
        en: "<ul>\n<li>Package <code>Azure.Monitor.OpenTelemetry.AspNetCore</code>; add your own <code>ActivitySource</code> with <code>AddSource</code>. The connection string goes in <code>APPLICATIONINSIGHTS_CONNECTION_STRING</code>. The current docs also describe a newer <code>Microsoft.OpenTelemetry</code> distro for new apps; do not initialise both.</li>\n<li>Set the cloud role name per service (Application Map), use sampling to control volume, and build alerts and a dashboard before launch. Query with KQL in the Log Analytics workspace.</li>\n<li>Follow-up: \"Why OpenTelemetry and not the old SDK?\" It is vendor-neutral and the same W3C trace context as Day 16, so traces stay connected across services and you can switch backends.</li>\n</ul>",
        hi: "<ul>\n<li>Package <code>Azure.Monitor.OpenTelemetry.AspNetCore</code>; अपना <code>ActivitySource</code> <code>AddSource</code> से जोड़ो। Connection string <code>APPLICATIONINSIGHTS_CONNECTION_STRING</code> में जाती है। Current docs नए apps के लिए नए <code>Microsoft.OpenTelemetry</code> distro की भी बात करते हैं; दोनों initialise मत करो।</li>\n<li>हर service का cloud role name set करो (Application Map), volume control के लिए sampling use करो, और launch से पहले alerts और dashboard बनाओ। Log Analytics workspace में KQL से query करो।</li>\n<li>Follow-up: \"पुराने SDK की जगह OpenTelemetry क्यों?\" यह vendor-neutral है और Day 16 वाला वही W3C trace context है, इसलिए services के बीच traces जुड़े रहते हैं और तुम backend बदल सकते हो।</li>\n</ul>",
        hg: "<ul>\n<li>Package <code>Azure.Monitor.OpenTelemetry.AspNetCore</code>; apna <code>ActivitySource</code> <code>AddSource</code> se jodo. Connection string <code>APPLICATIONINSIGHTS_CONNECTION_STRING</code> mein jaati hai. Current docs naye apps ke liye naye <code>Microsoft.OpenTelemetry</code> distro ki bhi baat karte hain; dono initialise mat karo.</li>\n<li>Har service ka cloud role name set karo (Application Map), volume control ke liye sampling use karo, aur launch se pehle alerts aur dashboard banao. Log Analytics workspace mein KQL se query karo.</li>\n<li>Follow-up: \"Purane SDK ki jagah OpenTelemetry kyun?\" Yeh vendor-neutral hai aur Day 16 wala wahi W3C trace context hai, isliye services ke beech traces jude rehte hain aur tum backend badal sakte ho.</li>\n</ul>"
      }
    },
    {
      id: "azure-sql-dtu-vcore-serverless",
      depth: "detailed",
      q: "Azure SQL Database: DTU vs vCore, serverless and elastic pools?",
      answer: "DTU bundles compute, memory and I/O into one unit; vCore lets you pick vCores and hardware generation, with storage sized separately. Serverless can auto-pause when idle.",
      meaning: {
        hi: "DTU compute, memory और I/O को एक unit में bundle करता है; vCore में vCores और hardware generation चुनते हैं, storage अलग size होता है। Serverless idle में auto-pause हो सकता है।",
        hg: "DTU compute, memory aur I/O ko ek unit mein bundle karta hai; vCore mein vCores aur hardware generation chunte hain, storage alag size hota hai. Serverless idle mein auto-pause ho sakta hai."
      },
      explain: {
        en: "<ul>\n<li>vCore gives more control and visibility; DTU is simpler for small, predictable workloads. Check the current tiers and limits before committing.</li>\n<li>Serverless is a trade-off like Functions: low cost when idle, but the first connection after auto-pause can be slow or fail, so enable retries (<code>EnableRetryOnFailure</code>, Day 6) and avoid it for latency-critical, always-busy databases.</li>\n<li>Follow-up: \"Isolation behaviour?\" In Azure SQL Database RCSI is on by default (Day 18), so readers do not block writers, but a SQL Server instance has it off unless enabled. Elastic pools suit many small databases with different peak times (multi-tenant).</li>\n</ul>",
        hi: "<ul>\n<li>vCore ज़्यादा control और visibility देता है; छोटे, predictable workloads के लिए DTU simpler है। Commit करने से पहले current tiers और limits check करो।</li>\n<li>Serverless Functions जैसा trade-off है: idle में कम cost, पर auto-pause के बाद पहला connection slow हो सकता है या fail, इसलिए retries enable करो (<code>EnableRetryOnFailure</code>, Day 6) और latency-critical, हमेशा-busy databases के लिए इससे बचो।</li>\n<li>Follow-up: \"Isolation behaviour?\" Azure SQL Database में RCSI by default on है (Day 18), इसलिए readers writers को block नहीं करते, पर SQL Server instance में यह off रहता है जब तक enable न हो। Elastic pools अलग peak time वाले कई छोटे databases (multi-tenant) के लिए ठीक हैं।</li>\n</ul>",
        hg: "<ul>\n<li>vCore zyada control aur visibility deta hai; chhote, predictable workloads ke liye DTU simpler hai. Commit karne se pehle current tiers aur limits check karo.</li>\n<li>Serverless Functions jaisa trade-off hai: idle mein kam cost, par auto-pause ke baad pehla connection slow ho sakta hai ya fail, isliye retries enable karo (<code>EnableRetryOnFailure</code>, Day 6) aur latency-critical, hamesha-busy databases ke liye isse bacho.</li>\n<li>Follow-up: \"Isolation behaviour?\" Azure SQL Database mein RCSI by default on hai (Day 18), isliye readers writers ko block nahi karte, par SQL Server instance mein yeh off rehta hai jab tak enable na ho. Elastic pools alag peak time wale kai chhote databases (multi-tenant) ke liye theek hain.</li>\n</ul>"
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
        en: "<ul>\n<li>Scale out is the usual answer for web load, but it needs a <b>stateless</b> app: no in-memory session or local files that matter (Day 13 caching: use a distributed cache). Scale up is for memory or CPU-hungry single instances.</li>\n<li>All apps in one plan share its instances, so a noisy app can starve its neighbours: split plans for critical apps. Add a health check endpoint so the platform can remove a sick instance.</li>\n<li>Follow-up: \"Autoscale on what?\" CPU or memory metrics, a schedule, or queue length; set a sensible minimum and maximum, and remember that tiers decide how many instances and which features you get (check current limits).</li>\n</ul>",
        hi: "<ul>\n<li>Web load के लिए आम जवाब scale out है, पर उसके लिए app <b>stateless</b> चाहिए: in-memory session या ज़रूरी local files नहीं (Day 13 caching: distributed cache use करो)। Scale up memory या CPU की भूखी single instances के लिए है।</li>\n<li>एक plan की सारी apps उसके instances share करती हैं, इसलिए शोर मचाने वाली app पड़ोसियों को भूखा रख सकती है: critical apps के plans अलग करो। Health check endpoint जोड़ो ताकि platform बीमार instance को हटा सके।</li>\n<li>Follow-up: \"Autoscale किस पर?\" CPU या memory metrics, schedule, या queue length; सही minimum और maximum रखो, और याद रखो कि tier तय करता है कितने instances और कौन-से features मिलेंगे (current limits check करो)।</li>\n</ul>",
        hg: "<ul>\n<li>Web load ke liye aam jawab scale out hai, par uske liye app <b>stateless</b> chahiye: in-memory session ya zaroori local files nahi (Day 13 caching: distributed cache use karo). Scale up memory ya CPU ki bhookhi single instances ke liye hai.</li>\n<li>Ek plan ki saari apps uske instances share karti hain, isliye shor machane wali app padosiyon ko bhookha rakh sakti hai: critical apps ke plans alag karo. Health check endpoint jodo taaki platform beemar instance ko hata sake.</li>\n<li>Follow-up: \"Autoscale kis par?\" CPU ya memory metrics, schedule, ya queue length; sahi minimum aur maximum rakho, aur yaad rakho ki tier tay karta hai kitne instances aur kaun-se features milenge (current limits check karo).</li>\n</ul>"
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
        en: "<ul>\n<li>Cooler tiers: cheaper storage, more expensive access, and minimum retention periods if you delete or move early (check current rules; no prices here).</li>\n<li>Automate with <b>lifecycle management</b> rules (move to Cool after N days, delete after M). Set the tier at upload when you already know the access pattern.</li>\n<li>Follow-up: \"Customer wants an archived invoice now?\" Rehydration takes hours, so keep recent invoices in a hot or cool tier and archive only what is truly old.</li>\n</ul>",
        hi: "<ul>\n<li>ठंडे tiers: storage सस्ता, access महँगा, और जल्दी delete या move करने पर minimum retention periods (current rules check करो; यहाँ prices नहीं)।</li>\n<li><b>Lifecycle management</b> rules से automate करो (N दिन बाद Cool में, M दिन बाद delete)। Access pattern पहले से पता हो तो upload पर ही tier set करो।</li>\n<li>Follow-up: \"Customer को archived invoice अभी चाहिए?\" Rehydration में घंटे लगते हैं, इसलिए हाल के invoices hot या cool tier में रखो और सिर्फ़ सच में पुराने को archive करो।</li>\n</ul>",
        hg: "<ul>\n<li>Thande tiers: storage sasta, access mehnga, aur jaldi delete ya move karne par minimum retention periods (current rules check karo; yahan prices nahi).</li>\n<li><b>Lifecycle management</b> rules se automate karo (N din baad Cool mein, M din baad delete). Access pattern pehle se pata ho to upload par hi tier set karo.</li>\n<li>Follow-up: \"Customer ko archived invoice abhi chahiye?\" Rehydration mein ghante lagte hain, isliye haal ke invoices hot ya cool tier mein rakho aur sirf sach mein purane ko archive karo.</li>\n</ul>"
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
        en: "<ul>\n<li>Separation limits blast radius, access and budget: developers can have wide access in dev and read-only in prod, and prod changes flow only through the pipeline (Day 21).</li>\n<li>A <b>landing zone</b> is the prepared base (network, identity, policy, logging, naming) that new workloads plug into, so each team does not rebuild it.</li>\n<li>Follow-up: \"How do you stop drift?\" Infrastructure as code (Bicep or Terraform), Azure Policy to deny or audit non-compliant resources, and no manual portal changes in prod.</li>\n</ul>",
        hi: "<ul>\n<li>Separation से blast radius, access और budget limited रहते हैं: developers को dev में wide access और prod में read-only मिल सकता है, और prod के बदलाव सिर्फ़ pipeline से जाते हैं (Day 21)।</li>\n<li><b>Landing zone</b> वह तैयार base है (network, identity, policy, logging, naming) जिसमें नए workloads जुड़ते हैं, ताकि हर team उसे दोबारा न बनाए।</li>\n<li>Follow-up: \"Drift कैसे रोकते हो?\" Infrastructure as code (Bicep या Terraform), non-compliant resources को deny या audit करने के लिए Azure Policy, और prod में portal से manual changes नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>Separation se blast radius, access aur budget limited rehte hain: developers ko dev mein wide access aur prod mein read-only mil sakta hai, aur prod ke badlaav sirf pipeline se jaate hain (Day 21).</li>\n<li><b>Landing zone</b> woh taiyaar base hai (network, identity, policy, logging, naming) jisme naye workloads jude hain, taaki har team use dobara na banaye.</li>\n<li>Follow-up: \"Drift kaise rokte ho?\" Infrastructure as code (Bicep ya Terraform), non-compliant resources ko deny ya audit karne ke liye Azure Policy, aur prod mein portal se manual changes nahi.</li>\n</ul>"
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
        en: "<ul>\n<li>Match the option to the traffic shape: spiky or rare (Flex Consumption, Container Apps, serverless SQL) versus steady and latency-sensitive (App Service always on, Premium always-ready, provisioned database).</li>\n<li>Levers a lead controls: right-size SKUs, shut down dev/test out of hours, delete unused resources, limit telemetry volume with sampling, pick tiers for storage, and review a monthly cost report by tag and owner.</li>\n<li>Follow-up: \"What number would you give the manager?\" Give an estimate from the Azure pricing calculator and the real usage metrics, with assumptions written down; never a guess from memory.</li>\n</ul>",
        hi: "<ul>\n<li>Option को traffic के shape से match करो: spiky या कम (Flex Consumption, Container Apps, serverless SQL) बनाम steady और latency-sensitive (App Service always on, Premium always-ready, provisioned database)।</li>\n<li>जो levers lead के हाथ में हैं: SKUs right-size करो, dev/test को office hours के बाद बंद करो, unused resources delete करो, sampling से telemetry volume limited करो, storage के tiers चुनो, और tag व owner के हिसाब से monthly cost report देखो।</li>\n<li>Follow-up: \"Manager को कौन-सा number दोगे?\" Azure pricing calculator और असली usage metrics से बना estimate दो, assumptions लिखकर; याद से अंदाज़ा कभी नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>Option ko traffic ke shape se match karo: spiky ya kam (Flex Consumption, Container Apps, serverless SQL) vs steady aur latency-sensitive (App Service always on, Premium always-ready, provisioned database).</li>\n<li>Jo levers lead ke haath mein hain: SKUs right-size karo, dev/test ko office hours ke baad band karo, unused resources delete karo, sampling se telemetry volume limited karo, storage ke tiers chuno, aur tag va owner ke hisaab se monthly cost report dekho.</li>\n<li>Follow-up: \"Manager ko kaun-sa number doge?\" Azure pricing calculator aur asli usage metrics se bana estimate do, assumptions likhkar; yaad se andaaza kabhi nahi.</li>\n</ul>"
      }
    }
  ],
  puzzles: [
    {
      id: "peek-lock-delivery-count",
      src: "// A toy model of Service Bus peek-lock delivery counting (not the Azure SDK).\nconst int MaxDeliveryCount = 3;\nvar inbox = new[]\n{\n    new Msg(\"order-1\", FailsFirst: 0, Malformed: false),\n    new Msg(\"order-2\", FailsFirst: 2, Malformed: false),\n    new Msg(\"order-3\", FailsFirst: 99, Malformed: false),\n    new Msg(\"order-4\", FailsFirst: 0, Malformed: true),\n};\nvar deadLetter = new List<string>();\nvar completed = 0;\n\nforeach (var msg in inbox)\n{\n    for (var delivery = 1; delivery <= MaxDeliveryCount; delivery++)\n    {\n        if (msg.Malformed)\n        {\n            Console.WriteLine($\"{msg.Id} delivery {delivery}: dead-lettered by the app\");\n            deadLetter.Add($\"{msg.Id}: BadPayload\");\n            break;\n        }\n        if (delivery > msg.FailsFirst)\n        {\n            Console.WriteLine($\"{msg.Id} delivery {delivery}: completed\");\n            completed++;\n            break;\n        }\n        Console.WriteLine($\"{msg.Id} delivery {delivery}: abandoned\");\n        if (delivery == MaxDeliveryCount)\n        {\n            Console.WriteLine($\"{msg.Id}: moved to the dead-letter queue by the broker\");\n            deadLetter.Add($\"{msg.Id}: MaxDeliveryCountExceeded\");\n        }\n    }\n}\nConsole.WriteLine($\"completed={completed}, dead-letter={string.Join(\"; \", deadLetter)}\");\n\nrecord Msg(string Id, int FailsFirst, bool Malformed);",
      answer: "order-1 delivery 1: completed\norder-2 delivery 1: abandoned\norder-2 delivery 2: abandoned\norder-2 delivery 3: completed\norder-3 delivery 1: abandoned\norder-3 delivery 2: abandoned\norder-3 delivery 3: abandoned\norder-3: moved to the dead-letter queue by the broker\norder-4 delivery 1: dead-lettered by the app\ncompleted=2, dead-letter=order-3: MaxDeliveryCountExceeded; order-4: BadPayload",
      explain: {
        en: "<p>Each abandoned (or lock-expired) delivery raises the delivery count. <code>order-2</code> fails twice, succeeds on delivery 3 (still within the limit of 3), so it completes. <code>order-3</code> never succeeds: after the third failed delivery the broker moves it to the dead-letter queue with <code>MaxDeliveryCountExceeded</code>. <code>order-4</code> can never succeed, so the app dead-letters it on the first delivery with its own reason instead of burning retries. Real Service Bus defaults: MaxDeliveryCount 10, lock 1 minute.</p>",
        hi: "<p>हर abandoned (या lock-expired) delivery delivery count बढ़ाती है। <code>order-2</code> दो बार fail होता है, delivery 3 पर सफल होता है (3 की limit के अंदर), इसलिए complete हो जाता है। <code>order-3</code> कभी सफल नहीं होता: तीसरी failed delivery के बाद broker उसे <code>MaxDeliveryCountExceeded</code> के साथ dead-letter queue में भेज देता है। <code>order-4</code> कभी सफल हो ही नहीं सकता, इसलिए app उसे पहली delivery पर अपने reason के साथ dead-letter कर देती है, retries जलाती नहीं। असली Service Bus defaults: MaxDeliveryCount 10, lock 1 minute।</p>",
        hg: "<p>Har abandoned (ya lock-expired) delivery delivery count badhati hai. <code>order-2</code> do baar fail hota hai, delivery 3 par safal hota hai (3 ki limit ke andar), isliye complete ho jaata hai. <code>order-3</code> kabhi safal nahi hota: teesri failed delivery ke baad broker use <code>MaxDeliveryCountExceeded</code> ke saath dead-letter queue mein bhej deta hai. <code>order-4</code> kabhi safal ho hi nahi sakta, isliye app use pehli delivery par apne reason ke saath dead-letter kar deti hai, retries jalati nahi. Asli Service Bus defaults: MaxDeliveryCount 10, lock 1 minute.</p>"
      }
    },
    {
      id: "duplicate-detection-window",
      src: "// A toy model of Service Bus duplicate detection: MessageId remembered for a time window (seconds).\nconst int WindowSeconds = 600;\nvar firstSeen = new Dictionary<string, int>();\nvar accepted = 0;\nvar dropped = 0;\n\nvoid Send(int t, string messageId)\n{\n    if (firstSeen.TryGetValue(messageId, out var seenAt) && t - seenAt < WindowSeconds)\n    {\n        dropped++;\n        Console.WriteLine($\"t={t} {messageId}: duplicate dropped (sender saw success)\");\n        return;\n    }\n    firstSeen[messageId] = t;\n    accepted++;\n    Console.WriteLine($\"t={t} {messageId}: accepted\");\n}\n\nSend(0, \"order-7-placed\");\nSend(120, \"order-7-placed\");\nSend(130, \"order-8-placed\");\nSend(599, \"order-7-placed\");\nSend(601, \"order-7-placed\");\nSend(700, \"order-7-placed\");\nSend(701, \"random-9f2\");   // random ids never match, so a retry of the same business event is NOT caught\nSend(702, \"random-1c7\");\nConsole.WriteLine($\"queue holds {accepted} messages, {dropped} dropped\");",
      answer: "t=0 order-7-placed: accepted\nt=120 order-7-placed: duplicate dropped (sender saw success)\nt=130 order-8-placed: accepted\nt=599 order-7-placed: duplicate dropped (sender saw success)\nt=601 order-7-placed: accepted\nt=700 order-7-placed: duplicate dropped (sender saw success)\nt=701 random-9f2: accepted\nt=702 random-1c7: accepted\nqueue holds 5 messages, 3 dropped",
      explain: {
        en: "<p>Inside the 600-second window a repeated <code>MessageId</code> is dropped, but the sender still sees success. At t=601 the first id has aged out of the window, so the same id is accepted again (and remembered afresh): duplicate detection is not a permanent guarantee. The last two sends use random ids, so a retry of the same business event would slip through. That is why the <code>MessageId</code> should come from a business key, and why the consumer still needs to be idempotent. This is a toy model; real Service Bus has a default window of 10 minutes, minimum 20 seconds, maximum 7 days.</p>",
        hi: "<p>600-second window के अंदर दोहराई गई <code>MessageId</code> drop हो जाती है, पर sender को फिर भी success दिखता है। t=601 पर पहली id window से बाहर हो चुकी है, इसलिए वही id फिर accept होती है (और नए सिरे से याद रखी जाती है): duplicate detection permanent guarantee नहीं है। आखिरी दो sends random ids इस्तेमाल करते हैं, इसलिए उसी business event का retry निकल जाएगा। इसीलिए <code>MessageId</code> business key से आनी चाहिए, और consumer को फिर भी idempotent होना चाहिए। यह toy model है; असली Service Bus में default window 10 minutes, minimum 20 seconds, maximum 7 days है।</p>",
        hg: "<p>600-second window ke andar dohraayi gayi <code>MessageId</code> drop ho jaati hai, par sender ko phir bhi success dikhta hai. t=601 par pehli id window se bahar ho chuki hai, isliye wahi id phir accept hoti hai (aur naye sire se yaad rakhi jaati hai): duplicate detection permanent guarantee nahi hai. Aakhri do sends random ids istemaal karte hain, isliye usi business event ka retry nikal jaayega. Isiliye <code>MessageId</code> business key se aani chahiye, aur consumer ko phir bhi idempotent hona chahiye. Yeh toy model hai; asli Service Bus mein default window 10 minutes, minimum 20 seconds, maximum 7 days hai.</p>"
      }
    },
    {
      id: "choose-messaging-service",
      src: "// A tiny rule engine for the classic \"which messaging service?\" question.\nvar needs = new Need[]\n{\n    new(\"place order, in order per customer\", Command: true, Ordered: true),\n    new(\"50k devices send telemetry\", HighVolumeStream: true),\n    new(\"react when a blob is uploaded\", PushNotification: true),\n    new(\"resize thumbnails in the background\", SimpleBacklog: true),\n    new(\"invoice issued, three systems each need a copy\", Command: true, FanOut: true),\n    new(\"send a welcome email after sign-up\", Command: true),\n};\n\nforeach (var n in needs)\n    Console.WriteLine($\"{n.Name} -> {Pick(n)}\");\n\nstatic string Pick(Need n)\n{\n    if (n.HighVolumeStream) return \"Event Hubs\";\n    if (n.PushNotification) return \"Event Grid\";\n    if (n.Command && n.FanOut) return \"Service Bus topic with subscriptions\";\n    if (n.Command && n.Ordered) return \"Service Bus queue with sessions\";\n    if (n.Command) return \"Service Bus queue\";\n    if (n.SimpleBacklog) return \"Storage Queue\";\n    return \"ask more questions\";\n}\n\nrecord Need(string Name, bool Command = false, bool Ordered = false, bool HighVolumeStream = false,\n            bool PushNotification = false, bool SimpleBacklog = false, bool FanOut = false);",
      answer: "place order, in order per customer -> Service Bus queue with sessions\n50k devices send telemetry -> Event Hubs\nreact when a blob is uploaded -> Event Grid\nresize thumbnails in the background -> Storage Queue\ninvoice issued, three systems each need a copy -> Service Bus topic with subscriptions\nsend a welcome email after sign-up -> Service Bus queue",
      explain: {
        en: "<p>The order of the rules is the thinking order: a high-volume stream points to Event Hubs; a \"something happened, react\" notification points to Event Grid; a business command points to Service Bus, and whether it needs per-customer ordering (sessions) or fan-out to several consumers (a topic with subscriptions) refines the choice; a plain background backlog is fine on a Storage Queue. A real decision also weighs team skills, cost and limits (check current limits), and often combines services: Event Grid into a Service Bus queue is common.</p>",
        hi: "<p>Rules का order ही सोचने का order है: high-volume stream Event Hubs की तरफ़ ले जाती है; \"कुछ हुआ, react करो\" notification Event Grid की तरफ़; business command Service Bus की तरफ़, और per-customer ordering (sessions) या कई consumers तक fan-out (subscriptions वाला topic) चुनाव को और साफ़ करता है; सादा background backlog Storage Queue पर ठीक है। असली फ़ैसला team की skills, cost और limits भी देखता है (current limits check करो), और अक्सर services को जोड़ता है: Event Grid से Service Bus queue में भेजना आम है।</p>",
        hg: "<p>Rules ka order hi sochne ka order hai: high-volume stream Event Hubs ki taraf le jaati hai; \"kuch hua, react karo\" notification Event Grid ki taraf; business command Service Bus ki taraf, aur per-customer ordering (sessions) ya kai consumers tak fan-out (subscriptions wala topic) chunav ko aur saaf karta hai; saada background backlog Storage Queue par theek hai. Asli faisla team ki skills, cost aur limits bhi dekhta hai (current limits check karo), aur aksar services ko jodta hai: Event Grid se Service Bus queue mein bhejna aam hai.</p>"
      }
    },
    {
      id: "default-credential-order",
      src: "// A toy simulation of how a credential chain picks the first credential that works.\n// The order below follows the Azure.Identity docs for DefaultAzureCredential (check current docs).\nstring[] chain =\n{\n    \"Environment\", \"WorkloadIdentity\", \"ManagedIdentity\", \"VisualStudio\",\n    \"VisualStudioCode\", \"AzureCli\", \"AzurePowerShell\", \"AzureDeveloperCli\"\n};\n\nvar hosts = new (string Name, string[] Available)[]\n{\n    (\"laptop, Visual Studio signed in\", new[] { \"VisualStudio\", \"AzureCli\" }),\n    (\"App Service with managed identity\", new[] { \"ManagedIdentity\" }),\n    (\"laptop, az login plus stray AZURE_ variables\", new[] { \"Environment\", \"AzureCli\" }),\n    (\"empty container, no identity\", Array.Empty<string>()),\n};\n\nforeach (var (name, available) in hosts)\n    Console.WriteLine(Resolve(name, chain, available));\n\n// production-only chain (dev tools excluded) on a laptop that only has az login\nConsole.WriteLine(Resolve(\"laptop, prod-only chain\", chain.Take(3).ToArray(), new[] { \"AzureCli\" }));\n\nstatic string Resolve(string host, string[] chain, string[] available)\n{\n    var tried = new List<string>();\n    foreach (var credential in chain)\n    {\n        tried.Add(credential);\n        if (available.Contains(credential))\n            return $\"{host}: {string.Join(\" > \", tried)} => {credential}\";\n    }\n    return $\"{host}: {string.Join(\" > \", tried)} => CredentialUnavailableException\";\n}",
      answer: "laptop, Visual Studio signed in: Environment > WorkloadIdentity > ManagedIdentity > VisualStudio => VisualStudio\nApp Service with managed identity: Environment > WorkloadIdentity > ManagedIdentity => ManagedIdentity\nlaptop, az login plus stray AZURE_ variables: Environment => Environment\nempty container, no identity: Environment > WorkloadIdentity > ManagedIdentity > VisualStudio > VisualStudioCode > AzureCli > AzurePowerShell > AzureDeveloperCli => CredentialUnavailableException\nlaptop, prod-only chain: Environment > WorkloadIdentity > ManagedIdentity => CredentialUnavailableException",
      explain: {
        en: "<p>The first credential that can produce a token wins and the rest are never tried. On a laptop the developer-tool credentials win because the managed identity is not there; in App Service the managed identity wins. The third host shows the trap: stray <code>AZURE_*</code> environment variables make <code>EnvironmentCredential</code> win before your developer login, so you silently use a different identity. The last lines show why a production-only chain fails on a laptop (fine, it is meant to) and why a specific credential is easier to reason about. (Not shown: interactive browser sign-in is off by default.)</p>",
        hi: "<p>जो पहला credential token दे सके वही जीतता है और बाकी कभी try नहीं होते। Laptop पर developer-tool credentials जीतते हैं क्योंकि managed identity वहाँ नहीं है; App Service में managed identity जीतती है। तीसरा host जाल दिखाता है: भटके हुए <code>AZURE_*</code> environment variables से <code>EnvironmentCredential</code> तुम्हारे developer login से पहले जीत जाता है, और तुम चुपचाप दूसरी identity use करते हो। आखिरी lines दिखाती हैं कि production-only chain laptop पर क्यों fail होती है (ठीक है, उसका मक़सद यही है) और specific credential के बारे में सोचना आसान क्यों है। (दिखाया नहीं: interactive browser sign-in default से off है।)</p>",
        hg: "<p>Jo pehla credential token de sake wahi jeetta hai aur baaki kabhi try nahi hote. Laptop par developer-tool credentials jeette hain kyunki managed identity wahan nahi hai; App Service mein managed identity jeetti hai. Teesra host jaal dikhata hai: bhatke hue <code>AZURE_*</code> environment variables se <code>EnvironmentCredential</code> tumhare developer login se pehle jeet jaata hai, aur tum chupchaap dusri identity use karte ho. Aakhri lines dikhati hain ki production-only chain laptop par kyun fail hoti hai (theek hai, uska maqsad yahi hai) aur specific credential ke baare mein sochna aasaan kyun hai. (Dikhaya nahi: interactive browser sign-in default se off hai.)</p>"
      }
    },
    {
      id: "slot-swap-sticky-settings",
      src: "// A toy model of an App Service slot swap: non-sticky settings swap, \"slot settings\" stay.\nvar production = new Dictionary<string, Setting>\n{\n    [\"AppVersion\"] = new(\"v1\", false),\n    [\"ASPNETCORE_ENVIRONMENT\"] = new(\"Production\", false),\n    [\"ConnectionStrings__Orders\"] = new(\"prod-db\", true),\n};\nvar staging = new Dictionary<string, Setting>\n{\n    [\"AppVersion\"] = new(\"v2\", false),\n    [\"ASPNETCORE_ENVIRONMENT\"] = new(\"Staging\", false),\n    [\"ConnectionStrings__Orders\"] = new(\"staging-db\", true),\n};\n\nShow(\"before swap\");\nforeach (var key in production.Keys.ToList())\n{\n    if (production[key].Sticky) continue;                       // sticky: stays with the slot\n    (production[key], staging[key]) = (staging[key], production[key]);\n}\nShow(\"after swap\");\n\nvoid Show(string title)\n{\n    Console.WriteLine(title);\n    foreach (var key in production.Keys.Order(StringComparer.Ordinal))\n        Console.WriteLine($\"  {key}: production={production[key].Value} staging={staging[key].Value}\");\n}\n\nrecord Setting(string Value, bool Sticky);",
      answer: "before swap\n  ASPNETCORE_ENVIRONMENT: production=Production staging=Staging\n  AppVersion: production=v1 staging=v2\n  ConnectionStrings__Orders: production=prod-db staging=staging-db\nafter swap\n  ASPNETCORE_ENVIRONMENT: production=Staging staging=Production\n  AppVersion: production=v2 staging=v1\n  ConnectionStrings__Orders: production=prod-db staging=staging-db",
      explain: {
        en: "<p>The connection string was marked as a slot setting (sticky), so each slot keeps its own database. <code>AppVersion</code> is not sticky, so it moves with the code, which is exactly what you want. The mistake is <code>ASPNETCORE_ENVIRONMENT</code>: it was not sticky, so after the swap production would report \"Staging\". Anything that describes the <b>place</b> (environment name, connection strings, slot-specific keys) should be a slot setting; anything that describes the <b>release</b> should travel. Real swaps also warm up the slot and have rules for some settings, so treat this as a model.</p>",
        hi: "<p>Connection string slot setting (sticky) mark थी, इसलिए हर slot अपना database रखता है। <code>AppVersion</code> sticky नहीं है, इसलिए वह code के साथ जाती है, जो ठीक वही है जो तुम चाहते हो। गलती <code>ASPNETCORE_ENVIRONMENT</code> में है: वह sticky नहीं थी, इसलिए swap के बाद production \"Staging\" बताएगा। जो चीज़ <b>जगह</b> बताती है (environment name, connection strings, slot-specific keys) वह slot setting हो; जो <b>release</b> बताती है वह साथ जाए। असली swaps slot को warm up भी करते हैं और कुछ settings के लिए rules हैं, इसलिए इसे model समझो।</p>",
        hg: "<p>Connection string slot setting (sticky) mark thi, isliye har slot apna database rakhta hai. <code>AppVersion</code> sticky nahi hai, isliye woh code ke saath jaati hai, jo theek wahi hai jo tum chahte ho. Galti <code>ASPNETCORE_ENVIRONMENT</code> mein hai: woh sticky nahi thi, isliye swap ke baad production \"Staging\" batayega. Jo cheez <b>jagah</b> batati hai (environment name, connection strings, slot-specific keys) woh slot setting ho; jo <b>release</b> batati hai woh saath jaye. Asli swaps slot ko warm up bhi karte hain aur kuch settings ke liye rules hain, isliye ise model samjho.</p>"
      }
    },
    {
      id: "key-vault-config-precedence",
      src: "// Configuration providers: the LAST source that defines a key wins.\n// A Key Vault secret name uses \"--\" where a configuration key uses \":\".\nvar appsettings = new Dictionary<string, string>\n{\n    [\"Payments:ApiKey\"] = \"CHANGE-ME\", [\"Payments:Timeout\"] = \"30\", [\"Logging:Level\"] = \"Information\"\n};\nvar environment = new Dictionary<string, string> { [\"Payments__Timeout\"] = \"10\" };\nvar keyVault = new Dictionary<string, string> { [\"Payments--ApiKey\"] = \"kv-secret-123\" };\n\nPrint(\"vault added last\", new (string, Dictionary<string, string>)[]\n    { (\"appsettings.json\", appsettings), (\"environment\", environment), (\"key vault\", keyVault) });\nPrint(\"vault added first\", new (string, Dictionary<string, string>)[]\n    { (\"key vault\", keyVault), (\"appsettings.json\", appsettings), (\"environment\", environment) });\n\nstatic void Print(string title, (string Name, Dictionary<string, string> Values)[] sources)\n{\n    var final = new Dictionary<string, (string Value, string From)>(StringComparer.OrdinalIgnoreCase);\n    foreach (var (name, values) in sources)\n        foreach (var (rawKey, value) in values)\n            final[rawKey.Replace(\"--\", \":\").Replace(\"__\", \":\")] = (value, name);\n\n    Console.WriteLine(title);\n    foreach (var key in final.Keys.Order(StringComparer.Ordinal))\n        Console.WriteLine($\"  {key} = {final[key].Value} (from {final[key].From})\");\n}",
      answer: "vault added last\n  Logging:Level = Information (from appsettings.json)\n  Payments:ApiKey = kv-secret-123 (from key vault)\n  Payments:Timeout = 10 (from environment)\nvault added first\n  Logging:Level = Information (from appsettings.json)\n  Payments:ApiKey = CHANGE-ME (from appsettings.json)\n  Payments:Timeout = 10 (from environment)",
      explain: {
        en: "<p>Both <code>__</code> (environment variables) and <code>--</code> (Key Vault secret names) become <code>:</code>, so all three sources talk about the same keys. When the vault is added last it wins for <code>Payments:ApiKey</code>; when it is added first, the placeholder in <code>appsettings.json</code> silently overrides the real secret. The same ordering rule is why environment variables beat <code>appsettings.json</code> (Day 12). Keep placeholders out of the file, and add <code>AddAzureKeyVault</code> after the default sources.</p>",
        hi: "<p><code>__</code> (environment variables) और <code>--</code> (Key Vault secret names) दोनों <code>:</code> बन जाते हैं, इसलिए तीनों sources एक ही keys की बात करते हैं। Vault आखिर में जुड़े तो <code>Payments:ApiKey</code> पर वह जीतता है; पहले जुड़े तो <code>appsettings.json</code> का placeholder चुपचाप असली secret को override कर देता है। यही ordering rule है जिससे environment variables <code>appsettings.json</code> से जीतते हैं (Day 12)। Placeholders file से बाहर रखो, और <code>AddAzureKeyVault</code> को default sources के बाद जोड़ो।</p>",
        hg: "<p><code>__</code> (environment variables) aur <code>--</code> (Key Vault secret names) dono <code>:</code> ban jaate hain, isliye teeno sources ek hi keys ki baat karte hain. Vault aakhir mein jude to <code>Payments:ApiKey</code> par woh jeetta hai; pehle jude to <code>appsettings.json</code> ka placeholder chupchaap asli secret ko override kar deta hai. Yahi ordering rule hai jisse environment variables <code>appsettings.json</code> se jeette hain (Day 12). Placeholders file se bahar rakho, aur <code>AddAzureKeyVault</code> ko default sources ke baad jodo.</p>"
      }
    },
    {
      id: "event-hubs-consumer-groups",
      src: "// A toy Event Hubs: events are kept per partition, each consumer group has its own checkpoint.\nvar partitionOf = new Dictionary<string, int>   // stands in for hash(partitionKey) % 2\n{\n    [\"device-A\"] = 0, [\"device-B\"] = 1, [\"device-C\"] = 0\n};\nvar arrivals = new[] { \"device-A:1\", \"device-B:1\", \"device-A:2\", \"device-C:1\", \"device-B:2\", \"device-A:3\" };\n\nvar partitions = new List<string>[] { new(), new() };\nforeach (var e in arrivals)\n    partitions[partitionOf[e.Split(':')[0]]].Add(e);\nfor (var p = 0; p < partitions.Length; p++)\n    Console.WriteLine($\"p{p} holds: {string.Join(\" \", partitions[p])}\");\n\nvar checkpoints = new Dictionary<(string Group, int Partition), int>();\n\nvoid Read(string group, int partition, int max, string label)\n{\n    var start = checkpoints.GetValueOrDefault((group, partition));\n    var batch = partitions[partition].Skip(start).Take(max).ToList();\n    checkpoints[(group, partition)] = start + batch.Count;\n    Console.WriteLine($\"{label}: {string.Join(\" \", batch)} (checkpoint {checkpoints[(group, partition)]})\");\n}\n\nRead(\"billing\", 0, 10, \"billing p0\");\nRead(\"billing\", 1, 1, \"billing p1 run 1\");          // crashes after one event\nRead(\"billing\", 1, 10, \"billing p1 after restart\"); // resumes from its checkpoint\nRead(\"analytics\", 0, 10, \"analytics p0\");\nRead(\"analytics\", 1, 10, \"analytics p1\");\nConsole.WriteLine($\"events still stored: {partitions.Sum(p => p.Count)}\");",
      answer: "p0 holds: device-A:1 device-A:2 device-C:1 device-A:3\np1 holds: device-B:1 device-B:2\nbilling p0: device-A:1 device-A:2 device-C:1 device-A:3 (checkpoint 4)\nbilling p1 run 1: device-B:1 (checkpoint 1)\nbilling p1 after restart: device-B:2 (checkpoint 2)\nanalytics p0: device-A:1 device-A:2 device-C:1 device-A:3 (checkpoint 4)\nanalytics p1: device-B:1 device-B:2 (checkpoint 2)\nevents still stored: 6",
      explain: {
        en: "<p>Events with the same partition key land in the same partition and keep their order there (the three <code>device-A</code> events stay 1, 2, 3), but there is no order across partitions. Reading does not delete anything: the six events are still stored after both groups read them. Each consumer group has its own checkpoint per partition, so <code>billing</code> resumes exactly where it stopped after the crash while <code>analytics</code> reads the whole stream independently. Compare Service Bus: a message is removed once completed, and competing consumers share one backlog.</p>",
        hi: "<p>एक ही partition key वाले events एक ही partition में जाते हैं और वहाँ अपना order रखते हैं (तीनों <code>device-A</code> events 1, 2, 3 रहते हैं), पर partitions के बीच कोई order नहीं। पढ़ने से कुछ delete नहीं होता: दोनों groups के पढ़ने के बाद भी छहों events stored हैं। हर consumer group का हर partition पर अपना checkpoint है, इसलिए <code>billing</code> crash के बाद ठीक वहीं से चलता है जहाँ रुका था और <code>analytics</code> पूरा stream अलग से पढ़ता है। Service Bus से तुलना: complete होने पर message हट जाता है, और competing consumers एक ही backlog share करते हैं।</p>",
        hg: "<p>Ek hi partition key wale events ek hi partition mein jaate hain aur wahan apna order rakhte hain (teeno <code>device-A</code> events 1, 2, 3 rehte hain), par partitions ke beech koi order nahi. Padhne se kuch delete nahi hota: dono groups ke padhne ke baad bhi chhahon events stored hain. Har consumer group ka har partition par apna checkpoint hai, isliye <code>billing</code> crash ke baad theek wahin se chalta hai jahan ruka tha aur <code>analytics</code> poora stream alag se padhta hai. Service Bus se tulna: complete hone par message hat jaata hai, aur competing consumers ek hi backlog share karte hain.</p>"
      }
    }
  ],
  revision: {
    en: [
      "<b>Slots</b>: deploy to staging, test, swap; mark the environment name and connection strings as <b>slot settings</b> so they stay behind; rollback is another swap.",
      "<b>Functions</b>: a trigger starts a thin handler (parse, decide, call a service, settle); isolated worker model only.",
      "<b>Peek-lock</b>: lock, then complete, abandon or dead-letter; MaxDeliveryCount (default 10) then the DLQ; consumers must be idempotent.",
      "<b>Managed identity</b>: no password, needs an RBAC role; <code>DefaultAzureCredential</code> is an ordered chain, so name <code>ManagedIdentityCredential</code> in production.",
      "<b>Key Vault</b> is the last configuration layer; <code>Sms--ApiKey</code> becomes <code>Sms:ApiKey</code>; add it after appsettings and environment variables.",
      "<b>Logs</b>: a message template with named values, one correlation id per request passed in a header; never log secrets.",
      "<b>Azure SQL</b>: retry transient errors (40613, 40501) with exponential backoff and a cap; never retry permanent ones (2627).",
      "Service Bus for business commands, Event Grid for event notifications, Event Hubs for high-volume streams.",
      "In-process Azure Functions support ends (or ended) on 10 November 2026; use the isolated worker model.",
      "Flex Consumption can scale to zero and offers always-ready instances; scale-to-zero trades idle cost for cold starts.",
      "API Management applies policies such as validate-jwt and rate-limit-by-key at the edge; YARP is gateway code you own.",
      "Azure SQL Database has RCSI on by default; serverless can auto-pause, so add retry logic."
    ],
    meaning: {
      hi: [
        "Slots: staging पर deploy, test, swap; environment name और connection strings को slot settings बनाओ ताकि वे रुकी रहें; rollback एक और swap",
        "Functions: trigger पतले handler को चलाता है (parse, decide, service call, settle); सिर्फ़ isolated worker model",
        "Peek-lock: lock, फिर complete, abandon या dead-letter; MaxDeliveryCount (default 10) के बाद DLQ; consumers idempotent हों",
        "Managed identity: कोई password नहीं, RBAC role चाहिए; DefaultAzureCredential क्रम वाली chain है, इसलिए production में ManagedIdentityCredential का नाम दो",
        "Key Vault आख़िरी configuration layer है; Sms--ApiKey, Sms:ApiKey बन जाता है; इसे appsettings और environment variables के बाद जोड़ो",
        "Logs: नाम वाली values का message template, हर request की एक correlation id जो header में जाए; secrets कभी log मत करो",
        "Azure SQL: transient errors (40613, 40501) पर exponential backoff और cap के साथ retry; permanent (2627) पर कभी नहीं",
        "Business commands के लिए Service Bus, event notifications के लिए Event Grid, high-volume streams के लिए Event Hubs।",
        "In-process Azure Functions का support 10 November 2026 को खत्म होता है (या हो चुका है); isolated worker model use करो।",
        "Flex Consumption zero तक scale हो सकता है और always-ready instances देता है; scale-to-zero idle cost के बदले cold starts देता है।",
        "API Management edge पर validate-jwt और rate-limit-by-key जैसी policies लगाता है; YARP तुम्हारा अपना gateway code है।",
        "Azure SQL Database में RCSI by default on है; serverless auto-pause हो सकता है, इसलिए retry logic जोड़ो।"
      ],
      hg: [
        "Slots: staging par deploy, test, swap; environment name aur connection strings ko slot settings banao taaki woh ruki rahein; rollback ek aur swap",
        "Functions: trigger patle handler ko chalata hai (parse, decide, service call, settle); sirf isolated worker model",
        "Peek-lock: lock, phir complete, abandon ya dead-letter; MaxDeliveryCount (default 10) ke baad DLQ; consumers idempotent hon",
        "Managed identity: koi password nahi, RBAC role chahiye; DefaultAzureCredential kram wali chain hai, isliye production mein ManagedIdentityCredential ka naam do",
        "Key Vault aakhiri configuration layer hai; Sms--ApiKey, Sms:ApiKey ban jaata hai; ise appsettings aur environment variables ke baad jodo",
        "Logs: naam wali values ka message template, har request ki ek correlation id jo header mein jaye; secrets kabhi log mat karo",
        "Azure SQL: transient errors (40613, 40501) par exponential backoff aur cap ke saath retry; permanent (2627) par kabhi nahi",
        "Business commands ke liye Service Bus, event notifications ke liye Event Grid, high-volume streams ke liye Event Hubs.",
        "In-process Azure Functions ka support 10 November 2026 ko khatam hota hai (ya ho chuka hai); isolated worker model use karo.",
        "Flex Consumption zero tak scale ho sakta hai aur always-ready instances deta hai; scale-to-zero idle cost ke badle cold starts deta hai.",
        "API Management edge par validate-jwt aur rate-limit-by-key jaisi policies lagata hai; YARP tumhara apna gateway code hai.",
        "Azure SQL Database mein RCSI by default on hai; serverless auto-pause ho sakta hai, isliye retry logic jodo."
      ]
    }
  }
};
