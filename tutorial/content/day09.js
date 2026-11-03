// Day 9 — Creational Patterns, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 9,
  format: "lesson",
  title: {
    en: "Creational Patterns",
    hi: "Creational Patterns (object बनाने वाले patterns)",
    hg: "Creational Patterns (object banane wale patterns)"
  },
  summary: {
    en: "<p>Day 9 shows how the customer-care CRM decides <b>who creates an object</b>, in 7 short lessons. First the picture of creational patterns, then Singleton (by hand and with DI), Simple Factory, Factory Method, Abstract Factory and Builder. Prototype and the .NET builders are in the Deep Dive.</p><p>The Tech Lead habit for the day: before writing a pattern, ask whether the DI container already does the job. Each lesson ends with a small exercise and a quick quiz.</p>",
    hi: "<p>Day 9 में 7 छोटे पाठों में देखते हैं कि customer-care CRM में <b>object कौन बनाएगा</b>। पहले creational patterns की तस्वीर, फिर Singleton (हाथ से और DI से), Simple Factory, Factory Method, Abstract Factory और Builder। Prototype और .NET के builders Deep Dive में हैं।</p><p>आज की Tech Lead आदत: pattern लिखने से पहले पूछो कि DI container यह काम पहले से करता है या नहीं। हर पाठ के अंत में एक छोटा exercise और एक झटपट quiz है।</p>",
    hg: "<p>Day 9 mein 7 chhote lessons mein dekhte hain ki customer-care CRM mein <b>object kaun banayega</b>. Pehle creational patterns ki tasveer, phir Singleton (haath se aur DI se), Simple Factory, Factory Method, Abstract Factory aur Builder. Prototype aur .NET ke builders Deep Dive mein hain.</p><p>Aaj ki Tech Lead aadat: pattern likhne se pehle poochho ki DI container yeh kaam pehle se karta hai ya nahi. Har lesson ke ant mein ek chhota exercise aur ek jhatpat quiz hai.</p>"
  },
  sections: [
    {
      id: "creational-overview",
      depth: "short",
      title: {
        en: "Creational patterns in one picture",
        hi: "Creational patterns एक नज़र में",
        hg: "Creational patterns ek nazar mein"
      },
      lesson: {
        buildsOn: {
          en: "<p>Day 8 (SOLID) taught the Dependency Inversion Principle: depend on an interface, not on a concrete class, and let a DI container hand you the object. Day 1 showed that a constructor controls how an object is made. Today we ask the next question: <b>who decides which object gets created, and when?</b></p>",
          hi: "<p>Day 8 (SOLID) में Dependency Inversion Principle सीखा: concrete class पर नहीं, interface पर निर्भर रहो, और object DI container से लो। Day 1 में देखा कि constructor तय करता है कि object कैसे बनेगा। आज अगला सवाल: <b>कौन तय करेगा कि कौन-सा object बनेगा, और कब?</b></p>",
          hg: "<p>Day 8 (SOLID) mein Dependency Inversion Principle seekha: concrete class par nahi, interface par nirbhar raho, aur object DI container se lo. Day 1 mein dekha ki constructor tay karta hai ki object kaise banega. Aaj agla sawaal: <b>kaun tay karega ki kaunsa object banega, aur kab?</b></p>"
        },
        what: {
          en: "<p><b>Creational patterns</b> are ready-made answers to one question: who creates the object, and how? Each one hides <code>new</code> behind a name. Today has five: <b>Singleton</b>, <b>Factory</b> (simple, method, abstract) and <b>Builder</b>, plus Prototype in the Deep Dive.</p>",
          hi: "<p><b>Creational patterns</b> एक सवाल के तैयार जवाब हैं: object कौन बनाएगा, और कैसे? हर pattern <code>new</code> को एक नाम के पीछे छुपाता है। आज पाँच हैं: <b>Singleton</b>, <b>Factory</b> (simple, method, abstract) और <b>Builder</b>; Prototype Deep Dive में है।</p>",
          hg: "<p><b>Creational patterns</b> ek sawaal ke taiyaar jawab hain: object kaun banayega, aur kaise? Har pattern <code>new</code> ko ek naam ke peeche chhupata hai. Aaj paanch hain: <b>Singleton</b>, <b>Factory</b> (simple, method, abstract) aur <b>Builder</b>; Prototype Deep Dive mein hai.</p>"
        },
        why: {
          en: "<p><code>new SmsNotifier()</code> written in many places glues all of them to SMS. Changing to email, or faking the notifier in a test, means editing every place. A creational pattern puts that decision in one place.</p>",
          hi: "<p>बहुत जगह लिखा <code>new SmsNotifier()</code> उन सबको SMS से चिपका देता है। Email पर जाना, या test में notifier को fake करना, हर जगह बदलना पड़ता है। Creational pattern यह फ़ैसला एक जगह रखता है।</p>",
          hg: "<p>Bahut jagah likha <code>new SmsNotifier()</code> un sabko SMS se chipka deta hai. Email par jaana, ya test mein notifier ko fake karna, har jagah badalna padta hai. Creational pattern yeh faisla ek jagah rakhta hai.</p>"
        },
        analogy: {
          en: "<p>A tiffin service. You do not cook; you say \"one veg thali\" and the kitchen decides the recipe. One head office takes every call (Singleton). A cloud kitchen sends a matching set of plates and spoons (Abstract Factory). An order sheet filled step by step, then \"confirm\" (Builder).</p>",
          hi: "<p>Tiffin service। आप खाना नहीं बनाते; बस कहते हो \"एक veg thali\" और kitchen recipe तय करती है। एक head office हर call लेता है (Singleton)। Cloud kitchen मेल खाते plates और spoons का set भेजती है (Abstract Factory)। Order sheet step by step भरो, फिर \"confirm\" (Builder)।</p>",
          hg: "<p>Tiffin service. Aap khana nahi banate; bas kehte ho \"ek veg thali\" aur kitchen recipe tay karti hai. Ek head office har call leta hai (Singleton). Cloud kitchen match karte plates aur spoons ka set bhejti hai (Abstract Factory). Order sheet step by step bharo, phir \"confirm\" (Builder).</p>"
        },
        focus: {
          caption: {
            en: "The question each pattern answers",
            hi: "हर pattern किस सवाल का जवाब है",
            hg: "Har pattern kis sawaal ka jawab hai"
          },
          check: "none",
          src: "// Question                                  -> Pattern\n// \"Only one of these in the whole app?\"     -> Singleton\n// \"Pick a type from a value (sms/email)?\"   -> Simple Factory\n// \"Let the subclass pick the type?\"         -> Factory Method\n// \"A matching set of objects together?\"     -> Abstract Factory\n// \"Many steps, optional parts, validation?\" -> Builder\n// \"Copy an existing object?\"                -> Prototype (Deep Dive)"
        },
        lines: [
          {
            code: "private readonly SmsNotifier _notifier = new SmsNotifier();",
            note: {
              en: "The service creates its own notifier, so SMS is fixed inside this class. To change the channel you must edit the class, and a test cannot swap in a fake.",
              hi: "Service अपना notifier खुद बनाती है, इसलिए SMS इसी class में फ़िक्स है। Channel बदलने के लिए class बदलनी पड़ेगी, और test में fake नहीं लगा सकते।",
              hg: "Service apna notifier khud banati hai, isliye SMS isi class mein fix hai. Channel badalne ke liye class badalni padegi, aur test mein fake nahi laga sakte."
            }
          },
          {
            code: "public sealed class TicketService(INotifier notifier)",
            note: {
              en: "This service only <b>asks</b> for an <code>INotifier</code>. It does not know, and does not care, which class it gets.",
              hi: "यह service सिर्फ़ <code>INotifier</code> <b>माँगती</b> है। इसे नहीं पता, और परवाह नहीं, कि कौन-सी class मिलेगी।",
              hg: "Yeh service sirf <code>INotifier</code> <b>maangti</b> hai. Ise nahi pata, aur parwaah nahi, ki kaunsi class milegi."
            }
          },
          {
            code: "INotifier notifier = new SmsNotifier();",
            note: {
              en: "One line decides \"SMS\". Creational patterns are different ways to organise this one decision: a factory, a builder, a container.",
              hi: "एक line तय करती है \"SMS\"। Creational patterns इसी एक फ़ैसले को संभालने के अलग तरीके हैं: factory, builder, container।",
              hg: "Ek line tay karti hai \"SMS\". Creational patterns isi ek faisle ko sambhaalne ke alag tareeke hain: factory, builder, container."
            }
          },
          {
            code: "var emailService = new TicketService(new EmailNotifier());",
            note: {
              en: "To switch the channel, only the creation line changes. <code>TicketService</code> itself is untouched.",
              hi: "Channel बदलने के लिए सिर्फ़ creation वाली line बदलती है। <code>TicketService</code> वैसी ही रहती है।",
              hg: "Channel badalne ke liye sirf creation wali line badalti hai. <code>TicketService</code> waisi hi rehti hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Adding a factory around every <code>new</code>. For a plain class with a simple constructor, <code>new</code> is fine.</li><li>Thinking a pattern always means new classes. Often the DI container already does the job (Day 11 goes deeper).</li><li>Mixing styles: the service takes <code>INotifier</code> but another class still writes <code>new SmsNotifier()</code>, so the decision is again in two places.</li></ul>",
          hi: "<ul><li>हर <code>new</code> के चारों तरफ़ factory लगाना। Simple constructor वाली plain class के लिए <code>new</code> ठीक है।</li><li>यह सोचना कि pattern का मतलब हमेशा नई classes। अक्सर DI container पहले से यह काम कर देता है (Day 11 में गहराई से)।</li><li>तरीके मिलाना: service <code>INotifier</code> लेती है पर दूसरी class में <code>new SmsNotifier()</code> लिखा है, तो फ़ैसला फिर दो जगह हो गया।</li></ul>",
          hg: "<ul><li>Har <code>new</code> ke chaaron taraf factory lagana. Simple constructor wali plain class ke liye <code>new</code> theek hai.</li><li>Yeh sochna ki pattern ka matlab hamesha nayi classes. Aksar DI container pehle se yeh kaam kar deta hai (Day 11 mein gehraai se).</li><li>Tareeke milana: service <code>INotifier</code> leti hai par doosri class mein <code>new SmsNotifier()</code> likha hai, to faisla phir do jagah ho gaya.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a creational pattern when creation is complex, depends on a condition, or must be swapped in tests. Before writing one, ask: can the DI container do this? Often yes. Skip it for small value-like objects such as a DTO or <code>new Uri(...)</code>.</p>",
          hi: "<p>Creational pattern तब लगाओ जब creation complex हो, किसी condition पर निर्भर हो, या tests में बदलनी हो। लिखने से पहले पूछो: क्या DI container यह कर सकता है? अक्सर हाँ। DTO या <code>new Uri(...)</code> जैसे छोटे value-जैसे objects के लिए मत लगाओ।</p>",
          hg: "<p>Creational pattern tab lagao jab creation complex ho, kisi condition par nirbhar ho, ya tests mein badalni ho. Likhne se pehle poochho: kya DI container yeh kar sakta hai? Aksar haan. DTO ya <code>new Uri(...)</code> jaise chhote value-jaise objects ke liye mat lagao.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a <code>PushNotifier</code> that prints <code>Push to Neha: Ticket 504 closed</code>, and use it <b>without editing</b> <code>TicketService</code>.</p>",
            hi: "<p>एक <code>PushNotifier</code> जोड़ो जो <code>Push to Neha: Ticket 504 closed</code> print करे, और <code>TicketService</code> को <b>बदले बिना</b> उसे use करो।</p>",
            hg: "<p>Ek <code>PushNotifier</code> jodo jo <code>Push to Neha: Ticket 504 closed</code> print kare, aur <code>TicketService</code> ko <b>badle bina</b> use karo.</p>"
          },
          hint: {
            en: "<p>Implement <code>INotifier</code> in a new class and pass it to the <code>TicketService</code> constructor.</p>",
            hi: "<p>नई class में <code>INotifier</code> implement करो और उसे <code>TicketService</code> के constructor में दो।</p>",
            hg: "<p>Nayi class mein <code>INotifier</code> implement karo aur use <code>TicketService</code> ke constructor mein do.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a new notifier, no change to the service",
              hi: "हल: नया notifier, service में कोई बदलाव नहीं",
              hg: "Hal: naya notifier, service mein koi badlaav nahi"
            },
            check: "run",
            expected: "Push to Neha: Ticket 504 closed",
            src: "var service = new TicketService(new PushNotifier());\nConsole.WriteLine(service.Close(504, \"Neha\"));\n\npublic interface INotifier { string Send(string to, string message); }\n\npublic sealed class PushNotifier : INotifier\n{\n    public string Send(string to, string message) => $\"Push to {to}: {message}\";\n}\n\npublic sealed class TicketService(INotifier notifier)\n{\n    public string Close(int ticketId, string customer) =>\n        notifier.Send(customer, $\"Ticket {ticketId} closed\");\n}"
          }
        },
        quiz: {
          q: {
            en: "What is the main job of a creational pattern?",
            hi: "Creational pattern का मुख्य काम क्या है?",
            hg: "Creational pattern ka mukhya kaam kya hai?"
          },
          options: [
            {
              en: "Save objects into the database",
              hi: "Objects को database में save करना",
              hg: "Objects ko database mein save karna"
            },
            {
              en: "Make objects use less memory",
              hi: "Objects कम memory लें",
              hg: "Objects kam memory lein"
            },
            {
              en: "Hide which class is created, and how, behind a name so it can change in one place",
              hi: "किस class का object बने, और कैसे, यह एक नाम के पीछे छुपाना ताकि वह एक जगह बदल सके",
              hg: "Kis class ka object bane, aur kaise, yeh ek naam ke peeche chhupana taaki woh ek jagah badal sake"
            },
            {
              en: "Replace interfaces with concrete classes",
              hi: "Interfaces की जगह concrete classes रखना",
              hg: "Interfaces ki jagah concrete classes rakhna"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>Creational patterns are about <i>creation</i>, not memory or storage. They keep the \"which class, and how\" decision in one place, so callers depend on an abstraction.</p>",
            hi: "<p>Creational patterns <i>creation</i> के बारे में हैं, memory या storage के नहीं। वे \"कौन-सी class, और कैसे\" का फ़ैसला एक जगह रखते हैं, ताकि callers abstraction पर निर्भर रहें।</p>",
            hg: "<p>Creational patterns <i>creation</i> ke baare mein hain, memory ya storage ke nahi. Woh \"kaunsi class, aur kaise\" ka faisla ek jagah rakhte hain, taaki callers abstraction par nirbhar rahein.</p>"
          }
        },
        recap: {
          en: "<ul><li>Creational patterns answer: who creates the object, and how?</li><li>They hide <code>new</code> so the decision lives in one place.</li><li>Ask first: can the DI container do it? Skip patterns for simple objects.</li></ul>",
          hi: "<ul><li>Creational patterns का जवाब: object कौन बनाए, और कैसे?</li><li>वे <code>new</code> को छुपाते हैं ताकि फ़ैसला एक जगह रहे।</li><li>पहले पूछो: क्या DI container कर सकता है? Simple objects के लिए pattern मत लगाओ।</li></ul>",
          hg: "<ul><li>Creational patterns ka jawab: object kaun banaye, aur kaise?</li><li>Woh <code>new</code> ko chhupate hain taaki faisla ek jagah rahe.</li><li>Pehle poochho: kya DI container kar sakta hai? Simple objects ke liye pattern mat lagao.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Hard-wired creation versus creation moved out (runs)",
            hi: "Hard-wired creation बनाम बाहर निकाली गई creation (run होता है)",
            hg: "Hard-wired creation banam bahar nikaali gayi creation (run hota hai)"
          },
          check: "run",
          expected: "SMS to Asha: Ticket 501 closed\nSMS to Ravi: Ticket 502 closed\nEmail to Meena: Ticket 503 closed",
          src: "// Hard-wired: the service creates its own notifier, so SMS is fixed inside it.\nvar hardWired = new HardWiredTicketService();\nConsole.WriteLine(hardWired.Close(501, \"Asha\"));\n\n// Creation moved out: one line decides, the service only sees INotifier.\nINotifier notifier = new SmsNotifier();\nvar service = new TicketService(notifier);\nConsole.WriteLine(service.Close(502, \"Ravi\"));\n\n// Changing the channel now touches only the creation line.\nvar emailService = new TicketService(new EmailNotifier());\nConsole.WriteLine(emailService.Close(503, \"Meena\"));\n\npublic interface INotifier { string Send(string to, string message); }\n\npublic sealed class SmsNotifier : INotifier\n{\n    public string Send(string to, string message) => $\"SMS to {to}: {message}\";\n}\n\npublic sealed class EmailNotifier : INotifier\n{\n    public string Send(string to, string message) => $\"Email to {to}: {message}\";\n}\n\n// The \"before\" picture: shown only to contrast with TicketService below.\npublic sealed class HardWiredTicketService\n{\n    private readonly SmsNotifier _notifier = new SmsNotifier();\n\n    public string Close(int ticketId, string customer) =>\n        _notifier.Send(customer, $\"Ticket {ticketId} closed\");\n}\n\npublic sealed class TicketService(INotifier notifier)\n{\n    public string Close(int ticketId, string customer) =>\n        notifier.Send(customer, $\"Ticket {ticketId} closed\");\n}"
        }
      ]
    },
    {
      id: "singleton-simple",
      depth: "short",
      title: {
        en: "Singleton, the simple thread-safe way",
        hi: "Singleton, सबसे आसान thread-safe तरीका",
        hg: "Singleton, sabse aasan thread-safe tareeka"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 1 showed that creation can live in one place. A <b>Singleton</b> is the simplest case of that: the object is created once and everybody shares it. Day 1 gave us the private constructor, which stops other code from writing <code>new</code>.</p>",
          hi: "<p>पाठ 1 में देखा कि creation एक जगह रह सकती है। <b>Singleton</b> इसका सबसे सीधा रूप है: object एक बार बनता है और सब उसे share करते हैं। Day 1 से हमारे पास private constructor है, जो दूसरे code को <code>new</code> लिखने से रोकता है।</p>",
          hg: "<p>Lesson 1 mein dekha ki creation ek jagah reh sakti hai. <b>Singleton</b> iska sabse seedha roop hai: object ek baar banta hai aur sab use share karte hain. Day 1 se hamare paas private constructor hai, jo doosre code ko <code>new</code> likhne se rokta hai.</p>"
        },
        what: {
          en: "<p>A <b>Singleton</b> is a class with exactly one instance for the whole app, reachable from one place. The simplest safe way in C# is a <code>static readonly</code> field. For an expensive object, use <code>Lazy&lt;T&gt;</code> so it is built on first use.</p>",
          hi: "<p><b>Singleton</b> ऐसी class है जिसका पूरे app में ठीक एक instance होता है, एक ही जगह से मिलता है। C# में सबसे आसान safe तरीका <code>static readonly</code> field है। महँगे object के लिए <code>Lazy&lt;T&gt;</code> लो, ताकि वह पहले use पर बने।</p>",
          hg: "<p><b>Singleton</b> aisi class hai jiska poore app mein theek ek instance hota hai, ek hi jagah se milta hai. C# mein sabse aasan safe tareeka <code>static readonly</code> field hai. Mehnge object ke liye <code>Lazy&lt;T&gt;</code> lo, taaki woh pehle use par bane.</p>"
        },
        why: {
          en: "<p>Some things must be shared. A ticket-number counter with two instances would give two customers the same number. A template catalog loaded from disk should be loaded once, not on every call.</p>",
          hi: "<p>कुछ चीज़ें share होनी ही चाहिए। Ticket-number counter के दो instances दो customers को एक ही number दे देंगे। Disk से load होने वाला template catalog एक बार load हो, हर call पर नहीं।</p>",
          hg: "<p>Kuch cheezein share honi hi chahiye. Ticket-number counter ke do instances do customers ko ek hi number de denge. Disk se load hone wala template catalog ek baar load ho, har call par nahi.</p>"
        },
        analogy: {
          en: "<p>The master clock at a railway station. There is one clock on the platform; everybody reads the same time. If each stall had its own clock, they would slowly disagree.</p>",
          hi: "<p>Railway station की master clock। Platform पर एक ही clock होती है; सब वही समय पढ़ते हैं। अगर हर stall की अपनी clock हो, तो धीरे-धीरे सब का समय अलग हो जाएगा।</p>",
          hg: "<p>Railway station ki master clock. Platform par ek hi clock hoti hai; sab wahi samay padhte hain. Agar har stall ki apni clock ho, to dheere-dheere sabka samay alag ho jayega.</p>"
        },
        lines: [
          {
            code: "public static readonly TicketNumbers Instance = new();",
            note: {
              en: "A <code>static readonly</code> field. The runtime runs the static initialiser exactly once and thread-safely, so no <code>lock</code> is needed.",
              hi: "<code>static readonly</code> field। Runtime static initialiser को ठीक एक बार और thread-safe चलाता है, इसलिए <code>lock</code> नहीं चाहिए।",
              hg: "<code>static readonly</code> field. Runtime static initialiser ko theek ek baar aur thread-safe chalata hai, isliye <code>lock</code> nahi chahiye."
            }
          },
          {
            code: "private TicketNumbers() { }",
            note: {
              en: "The private constructor (Day 1) stops anyone else from writing <code>new TicketNumbers()</code>, so a second instance is impossible.",
              hi: "Private constructor (Day 1) दूसरों को <code>new TicketNumbers()</code> लिखने से रोकता है, इसलिए दूसरा instance बन ही नहीं सकता।",
              hg: "Private constructor (Day 1) doosron ko <code>new TicketNumbers()</code> likhne se rokta hai, isliye doosra instance ban hi nahi sakta."
            }
          },
          {
            code: "public int Next() => Interlocked.Increment(ref _last);",
            note: {
              en: "The shared counter changes here. <code>Interlocked.Increment</code> is atomic, so two threads never receive the same number. Shared mutable state needs this care.",
              hi: "Shared counter यहाँ बदलता है। <code>Interlocked.Increment</code> atomic है, इसलिए दो threads को कभी एक number नहीं मिलता। Shared mutable state में यह ध्यान ज़रूरी है।",
              hg: "Shared counter yahan badalta hai. <code>Interlocked.Increment</code> atomic hai, isliye do threads ko kabhi ek number nahi milta. Shared mutable state mein yeh dhyaan zaroori hai."
            }
          },
          {
            code: "private static readonly Lazy<TemplateCatalog> Holder = new(() => new TemplateCatalog());",
            note: {
              en: "<code>Lazy&lt;T&gt;</code> remembers <i>how</i> to create the catalog but does not create it yet.",
              hi: "<code>Lazy&lt;T&gt;</code> याद रखता है कि catalog <i>कैसे</i> बनाना है, पर अभी बनाता नहीं।",
              hg: "<code>Lazy&lt;T&gt;</code> yaad rakhta hai ki catalog <i>kaise</i> banana hai, par abhi banata nahi."
            }
          },
          {
            code: "public static TemplateCatalog Instance => Holder.Value;",
            note: {
              en: "The first <code>.Value</code> creates the object, once, thread-safely. Every later call reuses it.",
              hi: "पहला <code>.Value</code> object बनाता है, एक बार, thread-safe। बाद की हर call उसी को reuse करती है।",
              hg: "Pehla <code>.Value</code> object banata hai, ek baar, thread-safe. Baad ki har call usi ko reuse karti hai."
            }
          },
          {
            code: "Console.WriteLine(\"Before first use of templates\");",
            note: {
              en: "This prints <b>before</b> \"Loading templates\", because the catalog is only built when <code>Instance</code> is first read.",
              hi: "यह \"Loading templates\" से <b>पहले</b> print होता है, क्योंकि catalog तभी बनता है जब <code>Instance</code> पहली बार पढ़ा जाए।",
              hg: "Yeh \"Loading templates\" se <b>pehle</b> print hota hai, kyunki catalog tabhi banta hai jab <code>Instance</code> pehli baar padha jaye."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Writing double-checked locking by hand when <code>static readonly</code> or <code>Lazy&lt;T&gt;</code> already gives thread safety. It is easy to get wrong.</li><li>Leaving the constructor public or the class unsealed, so a second instance or a subclass can appear.</li><li>Keeping per-request or per-customer data in a singleton. It is shared by everybody, at the same time.</li></ul>",
          hi: "<ul><li>हाथ से double-checked locking लिखना, जबकि <code>static readonly</code> या <code>Lazy&lt;T&gt;</code> पहले से thread safety देते हैं। इसमें गलती आसान है।</li><li>Constructor public छोड़ देना या class sealed न करना, जिससे दूसरा instance या subclass बन सकती है।</li><li>Singleton में per-request या per-customer data रखना। वह सबके बीच, एक ही समय पर share होता है।</li></ul>",
          hg: "<ul><li>Haath se double-checked locking likhna, jabki <code>static readonly</code> ya <code>Lazy&lt;T&gt;</code> pehle se thread safety dete hain. Isme galti aasan hai.</li><li>Constructor public chhod dena ya class sealed na karna, jisse doosra instance ya subclass ban sakti hai.</li><li>Singleton mein per-request ya per-customer data rakhna. Woh sabke beech, ek hi samay par share hota hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use <code>static readonly</code> for a cheap shared object and <code>Lazy&lt;T&gt;</code> for an expensive one, when you really need a hand-made singleton (for example in a library with no DI). Hand-written double-checked locking (<code>lock</code> plus <code>volatile</code>) is rarely needed; the Deep Dive shows it. In an app with DI, use the next lesson instead.</p>",
          hi: "<p>अगर हाथ से बना singleton सच में चाहिए (जैसे DI-रहित library में), तो सस्ते shared object के लिए <code>static readonly</code> और महँगे के लिए <code>Lazy&lt;T&gt;</code> लो। हाथ से लिखी double-checked locking (<code>lock</code> + <code>volatile</code>) की ज़रूरत कम पड़ती है; Deep Dive में दिखाई है। DI वाले app में अगला पाठ use करो।</p>",
          hg: "<p>Agar haath se bana singleton sach mein chahiye (jaise DI-rahit library mein), to saste shared object ke liye <code>static readonly</code> aur mehnge ke liye <code>Lazy&lt;T&gt;</code> lo. Haath se likhi double-checked locking (<code>lock</code> + <code>volatile</code>) ki zaroorat kam padti hai; Deep Dive mein dikhayi hai. DI wale app mein agla lesson use karo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Make an <code>AgentRoster</code> singleton with <code>Lazy&lt;T&gt;</code>. It loads the agents <b>Meena</b> and <b>Kiran</b> on first use. Print the count and the names.</p>",
            hi: "<p><code>Lazy&lt;T&gt;</code> से <code>AgentRoster</code> singleton बनाओ। यह पहले use पर agents <b>Meena</b> और <b>Kiran</b> load करे। Count और नाम print करो।</p>",
            hg: "<p><code>Lazy&lt;T&gt;</code> se <code>AgentRoster</code> singleton banao. Yeh pehle use par agents <b>Meena</b> aur <b>Kiran</b> load kare. Count aur naam print karo.</p>"
          },
          hint: {
            en: "<p>Copy the shape of <code>TemplateCatalog</code>: a private constructor, a <code>static readonly Lazy&lt;T&gt;</code> and an <code>Instance</code> property that returns <code>Holder.Value</code>.</p>",
            hi: "<p><code>TemplateCatalog</code> जैसा ढाँचा लो: private constructor, <code>static readonly Lazy&lt;T&gt;</code> और <code>Holder.Value</code> लौटाने वाली <code>Instance</code> property।</p>",
            hg: "<p><code>TemplateCatalog</code> jaisa dhaancha lo: private constructor, <code>static readonly Lazy&lt;T&gt;</code> aur <code>Holder.Value</code> lautane wali <code>Instance</code> property.</p>"
          },
          solution: {
            caption: {
              en: "Solution: AgentRoster with Lazy&lt;T&gt;",
              hi: "हल: Lazy&lt;T&gt; वाला AgentRoster",
              hg: "Hal: Lazy&lt;T&gt; wala AgentRoster"
            },
            check: "run",
            expected: "2 agents: Meena, Kiran",
            src: "var roster = AgentRoster.Instance;\nConsole.WriteLine($\"{roster.Names.Count} agents: {string.Join(\", \", roster.Names)}\");\n\npublic sealed class AgentRoster\n{\n    private static readonly Lazy<AgentRoster> Holder = new(() => new AgentRoster());\n\n    private AgentRoster() => Names = new[] { \"Meena\", \"Kiran\" };\n\n    public static AgentRoster Instance => Holder.Value;\n    public IReadOnlyList<string> Names { get; }\n}"
          }
        },
        quiz: {
          q: {
            en: "Why is hand-written lazy double-checked locking rarely needed in C#?",
            hi: "C# में हाथ से लिखी lazy double-checked locking की ज़रूरत कम क्यों पड़ती है?",
            hg: "C# mein haath se likhi lazy double-checked locking ki zaroorat kam kyun padti hai?"
          },
          options: [
            {
              en: "<code>static readonly</code> and <code>Lazy&lt;T&gt;</code> already give thread-safe, one-time creation",
              hi: "<code>static readonly</code> और <code>Lazy&lt;T&gt;</code> पहले से thread-safe, एक बार की creation देते हैं",
              hg: "<code>static readonly</code> aur <code>Lazy&lt;T&gt;</code> pehle se thread-safe, ek baar ki creation dete hain"
            },
            {
              en: "Because C# has no threads",
              hi: "क्योंकि C# में threads होते ही नहीं",
              hg: "Kyunki C# mein threads hote hi nahi"
            },
            {
              en: "Because a singleton can never be shared",
              hi: "क्योंकि singleton कभी share नहीं होता",
              hg: "Kyunki singleton kabhi share nahi hota"
            },
            {
              en: "Because <code>lock</code> is not allowed in C#",
              hi: "क्योंकि C# में <code>lock</code> allowed नहीं है",
              hg: "Kyunki C# mein <code>lock</code> allowed nahi hai"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>The runtime runs a static initialiser once and thread-safely, and <code>Lazy&lt;T&gt;</code> is thread-safe by default. They are shorter and harder to get wrong than <code>lock</code> plus <code>volatile</code>.</p>",
            hi: "<p>Runtime static initialiser को एक बार और thread-safe चलाता है, और <code>Lazy&lt;T&gt;</code> default में thread-safe है। ये <code>lock</code> + <code>volatile</code> से छोटे हैं और इनमें गलती कम होती है।</p>",
            hg: "<p>Runtime static initialiser ko ek baar aur thread-safe chalata hai, aur <code>Lazy&lt;T&gt;</code> default mein thread-safe hai. Yeh <code>lock</code> + <code>volatile</code> se chhote hain aur inmein galti kam hoti hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Singleton = one instance, one access point; private constructor stops a second one.</li><li>Cheap: <code>static readonly</code>. Expensive: <code>Lazy&lt;T&gt;</code>. Both are thread-safe.</li><li>Do not keep per-request data in it; changing shared state needs care.</li></ul>",
          hi: "<ul><li>Singleton = एक instance, एक access point; private constructor दूसरा बनने से रोकता है।</li><li>सस्ता: <code>static readonly</code>। महँगा: <code>Lazy&lt;T&gt;</code>। दोनों thread-safe।</li><li>उसमें per-request data मत रखो; shared state बदलने में सावधानी चाहिए।</li></ul>",
          hg: "<ul><li>Singleton = ek instance, ek access point; private constructor doosra banne se rokta hai.</li><li>Sasta: <code>static readonly</code>. Mehnga: <code>Lazy&lt;T&gt;</code>. Dono thread-safe.</li><li>Usmein per-request data mat rakho; shared state badalne mein saavdhaani chahiye.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Two singletons: static readonly and Lazy&lt;T&gt; (runs)",
            hi: "दो singletons: static readonly और Lazy&lt;T&gt; (run होता है)",
            hg: "Do singletons: static readonly aur Lazy&lt;T&gt; (run hota hai)"
          },
          check: "run",
          expected: "True\n501\n502\nBefore first use of templates\nLoading templates (once)...\nTicket closed\nTicket opened",
          src: "Console.WriteLine(ReferenceEquals(TicketNumbers.Instance, TicketNumbers.Instance));\nConsole.WriteLine(TicketNumbers.Instance.Next());\nConsole.WriteLine(TicketNumbers.Instance.Next());\n\nConsole.WriteLine(\"Before first use of templates\");\nConsole.WriteLine(TemplateCatalog.Instance.Get(\"closed\"));\nConsole.WriteLine(TemplateCatalog.Instance.Get(\"opened\"));\n\n// Cheap object: a static readonly field is enough. The runtime creates it once, thread-safely.\npublic sealed class TicketNumbers\n{\n    public static readonly TicketNumbers Instance = new();\n    private int _last = 500;\n\n    private TicketNumbers() { }\n\n    public int Next() => Interlocked.Increment(ref _last);\n}\n\n// Expensive object: Lazy<T> builds it on first use, once, thread-safely.\npublic sealed class TemplateCatalog\n{\n    private static readonly Lazy<TemplateCatalog> Holder = new(() => new TemplateCatalog());\n    private readonly Dictionary<string, string> _templates;\n\n    private TemplateCatalog()\n    {\n        Console.WriteLine(\"Loading templates (once)...\");\n        _templates = new() { [\"closed\"] = \"Ticket closed\", [\"opened\"] = \"Ticket opened\" };\n    }\n\n    public static TemplateCatalog Instance => Holder.Value;\n\n    public string Get(string key) => _templates[key];\n}"
        }
      ]
    },
    {
      id: "singleton-di",
      depth: "short",
      title: {
        en: "Singleton today: let the DI container do it",
        hi: "आज का Singleton: DI container को करने दो",
        hg: "Aaj ka Singleton: DI container ko karne do"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 2 built singletons by hand: a private constructor and a static <code>Instance</code>. The catch is that any code can write <code>TicketNumbers.Instance</code>, so the dependency is hidden and a test cannot fake it. Day 8 gave us the answer: ask for the dependency in the constructor (DIP) and let a DI container supply it.</p>",
          hi: "<p>पाठ 2 में singleton हाथ से बनाए: private constructor और static <code>Instance</code>। दिक्कत यह है कि कोई भी code <code>TicketNumbers.Instance</code> लिख सकता है, इसलिए dependency छुपी रहती है और test उसे fake नहीं कर सकता। Day 8 ने जवाब दिया: dependency constructor में माँगो (DIP) और DI container से दिलवाओ।</p>",
          hg: "<p>Lesson 2 mein singleton haath se banaye: private constructor aur static <code>Instance</code>. Dikkat yeh hai ki koi bhi code <code>TicketNumbers.Instance</code> likh sakta hai, isliye dependency chhupi rehti hai aur test use fake nahi kar sakta. Day 8 ne jawab diya: dependency constructor mein maango (DIP) aur DI container se dilwao.</p>"
        },
        what: {
          en: "<p>Register the class with <code>services.AddSingleton&lt;INotifier, SmsNotifier&gt;()</code>. The container creates it once and gives the <b>same</b> object to everyone who asks. The class itself is plain: a normal public constructor, no static <code>Instance</code>.</p>",
          hi: "<p>Class को <code>services.AddSingleton&lt;INotifier, SmsNotifier&gt;()</code> से register करो। Container उसे एक बार बनाता है और जो भी माँगे उसे <b>वही</b> object देता है। Class खुद सादी रहती है: normal public constructor, कोई static <code>Instance</code> नहीं।</p>",
          hg: "<p>Class ko <code>services.AddSingleton&lt;INotifier, SmsNotifier&gt;()</code> se register karo. Container use ek baar banata hai aur jo bhi maange use <b>wahi</b> object deta hai. Class khud saadi rehti hai: normal public constructor, koi static <code>Instance</code> nahi.</p>"
        },
        why: {
          en: "<p>You get the \"one shared instance\" benefit without global state. Tests can pass a fake through the constructor, and the container owns the lifetime (it disposes the object when the app stops).</p>",
          hi: "<p>\"एक shared instance\" का फ़ायदा मिलता है, global state के बिना। Tests constructor से fake पास कर सकते हैं, और lifetime container के पास रहती है (app बंद होने पर वही dispose करता है)।</p>",
          hg: "<p>\"Ek shared instance\" ka faayda milta hai, global state ke bina. Tests constructor se fake pass kar sakte hain, aur lifetime container ke paas rehti hai (app band hone par wahi dispose karta hai).</p>"
        },
        analogy: {
          en: "<p>A housing society and its watchman. The society (container) hires one watchman and every flat gets the same man; no flat hires its own or calls \"Watchman.Instance\". But if the watchman keeps a visitor pass, valid for one visit only, in his pocket forever, it goes stale. That is a captive dependency.</p>",
          hi: "<p>Housing society और उसका watchman। Society (container) एक watchman रखती है और हर flat को वही मिलता है; कोई flat अपना नहीं रखता और \"Watchman.Instance\" नहीं पुकारता। पर अगर watchman एक visit के लिए बना visitor pass हमेशा जेब में रखे, तो वह पुराना हो जाता है। यही captive dependency है।</p>",
          hg: "<p>Housing society aur uska watchman. Society (container) ek watchman rakhti hai aur har flat ko wahi milta hai; koi flat apna nahi rakhta aur \"Watchman.Instance\" nahi pukarta. Par agar watchman ek visit ke liye bana visitor pass hamesha jeb mein rakhe, to woh purana ho jata hai. Yehi captive dependency hai.</p>"
        },
        lines: [
          {
            code: "services.AddSingleton<INotifier, SmsNotifier>();   // one shared notifier",
            note: {
              en: "One registration line replaces the whole hand-made pattern: the container builds <code>SmsNotifier</code> once and keeps it.",
              hi: "एक registration line पूरे हाथ से बने pattern की जगह लेती है: container <code>SmsNotifier</code> एक बार बनाकर रखता है।",
              hg: "Ek registration line poore haath se bane pattern ki jagah leti hai: container <code>SmsNotifier</code> ek baar banakar rakhta hai."
            }
          },
          {
            code: "services.AddTransient<TicketService>();            // a new service each time",
            note: {
              en: "<b>Transient</b> means a new object on every request. We use it here to contrast with the singleton.",
              hi: "<b>Transient</b> का मतलब हर request पर नया object। यहाँ इसे singleton से तुलना के लिए लिया है।",
              hg: "<b>Transient</b> ka matlab har request par naya object. Yahan ise singleton se tulna ke liye liya hai."
            }
          },
          {
            code: "Console.WriteLine(ReferenceEquals(first.Notifier, second.Notifier));  // True",
            note: {
              en: "Two different services, but they share the <b>same</b> notifier. That is what singleton lifetime means.",
              hi: "दो अलग services, पर उनका notifier <b>एक ही</b> है। Singleton lifetime का यही मतलब है।",
              hg: "Do alag services, par unka notifier <b>ek hi</b> hai. Singleton lifetime ka yahi matlab hai."
            }
          },
          {
            code: "public sealed class SlaDashboard(TicketRepository repo)",
            note: {
              en: "A singleton that takes a scoped <code>TicketRepository</code>. The repository should live for one request, but the dashboard keeps it for the whole app: a <b>captive dependency</b>.",
              hi: "एक singleton जो scoped <code>TicketRepository</code> लेता है। Repository को एक request तक जीना चाहिए, पर dashboard उसे पूरे app तक पकड़े रखता है: <b>captive dependency</b>।",
              hg: "Ek singleton jo scoped <code>TicketRepository</code> leta hai. Repository ko ek request tak jeena chahiye, par dashboard use poore app tak pakde rakhta hai: <b>captive dependency</b>."
            }
          },
          {
            code: "using var strict = risky.BuildServiceProvider(new ServiceProviderOptions { ValidateScopes = true });",
            note: {
              en: "<code>ValidateScopes</code> makes the container check lifetimes. ASP.NET Core turns it on in the Development environment.",
              hi: "<code>ValidateScopes</code> container से lifetimes की जाँच करवाता है। ASP.NET Core इसे Development environment में चालू रखता है।",
              hg: "<code>ValidateScopes</code> container se lifetimes ki jaanch karwata hai. ASP.NET Core ise Development environment mein chaalu rakhta hai."
            }
          },
          {
            code: "catch (InvalidOperationException ex)",
            note: {
              en: "Resolving the dashboard now throws <code>InvalidOperationException</code> (\"Cannot consume scoped service ... from singleton ...\"), so the bug shows up early.",
              hi: "अब dashboard resolve करने पर <code>InvalidOperationException</code> आता है (\"Cannot consume scoped service ... from singleton ...\"), इसलिए bug जल्दी दिख जाता है।",
              hg: "Ab dashboard resolve karne par <code>InvalidOperationException</code> aata hai (\"Cannot consume scoped service ... from singleton ...\"), isliye bug jaldi dikh jata hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>A singleton that takes a scoped service, such as a database context. The scoped object is kept for the whole app. Make the consumer scoped or transient, or create a scope when needed.</li><li>Writing a static <code>Instance</code> <i>and</i> registering the class in DI. Pick one; in an app, pick DI.</li><li>Keeping per-user or per-request data in a singleton service.</li></ul>",
          hi: "<ul><li>Singleton जो scoped service लेता है, जैसे database context। Scoped object पूरे app तक पकड़ा जाता है। Consumer को scoped या transient बनाओ, या ज़रूरत पर scope बनाओ।</li><li>Static <code>Instance</code> लिखना <i>और</i> DI में भी register करना। एक चुनो; app में DI चुनो।</li><li>Singleton service में per-user या per-request data रखना।</li></ul>",
          hg: "<ul><li>Singleton jo scoped service leta hai, jaise database context. Scoped object poore app tak pakda jata hai. Consumer ko scoped ya transient banao, ya zaroorat par scope banao.</li><li>Static <code>Instance</code> likhna <i>aur</i> DI mein bhi register karna. Ek chuno; app mein DI chuno.</li><li>Singleton service mein per-user ya per-request data rakhna.</li></ul>"
        },
        whenToUse: {
          en: "<p>Register as singleton the things that are expensive or must be shared: a cache, a configuration snapshot, a notifier or client factory. Do not use it for state that belongs to one request or one user. In an ASP.NET Core app, prefer <code>AddSingleton</code> over a hand-written pattern.</p>",
          hi: "<p>जो चीज़ें महँगी हैं या share होनी चाहिए उन्हें singleton register करो: cache, configuration snapshot, notifier या client factory। एक request या एक user के state के लिए मत लो। ASP.NET Core app में हाथ से बने pattern की जगह <code>AddSingleton</code> लो।</p>",
          hg: "<p>Jo cheezein mehngi hain ya share honi chahiye unhe singleton register karo: cache, configuration snapshot, notifier ya client factory. Ek request ya ek user ke state ke liye mat lo. ASP.NET Core app mein haath se bane pattern ki jagah <code>AddSingleton</code> lo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Make <code>TicketNumbers</code> a plain class (public constructor, no static <code>Instance</code>) and register it as a singleton. Two transient <code>TicketService</code> objects should still produce <code>501</code> and <code>502</code>.</p>",
            hi: "<p><code>TicketNumbers</code> को सादी class बनाओ (public constructor, कोई static <code>Instance</code> नहीं) और singleton register करो। दो transient <code>TicketService</code> objects फिर भी <code>501</code> और <code>502</code> दें।</p>",
            hg: "<p><code>TicketNumbers</code> ko saadi class banao (public constructor, koi static <code>Instance</code> nahi) aur singleton register karo. Do transient <code>TicketService</code> objects phir bhi <code>501</code> aur <code>502</code> dein.</p>"
          },
          hint: {
            en: "<p>Use <code>AddSingleton&lt;TicketNumbers&gt;()</code> and <code>AddTransient&lt;TicketService&gt;()</code>. The service asks for <code>TicketNumbers</code> in its constructor.</p>",
            hi: "<p><code>AddSingleton&lt;TicketNumbers&gt;()</code> और <code>AddTransient&lt;TicketService&gt;()</code> लो। Service अपने constructor में <code>TicketNumbers</code> माँगती है।</p>",
            hg: "<p><code>AddSingleton&lt;TicketNumbers&gt;()</code> aur <code>AddTransient&lt;TicketService&gt;()</code> lo. Service apne constructor mein <code>TicketNumbers</code> maangti hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: the shared counter comes from DI",
              hi: "हल: shared counter DI से आता है",
              hg: "Hal: shared counter DI se aata hai"
            },
            check: "run",
            packages: [
              "Microsoft.Extensions.DependencyInjection"
            ],
            expected: "Ticket 501 opened for Asha\nTicket 502 opened for Ravi",
            src: "using Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddSingleton<TicketNumbers>();\nservices.AddTransient<TicketService>();\nusing var provider = services.BuildServiceProvider();\n\nvar a = provider.GetRequiredService<TicketService>();\nvar b = provider.GetRequiredService<TicketService>();\nConsole.WriteLine(a.Open(\"Asha\"));\nConsole.WriteLine(b.Open(\"Ravi\"));\n\npublic sealed class TicketNumbers\n{\n    private int _last = 500;\n    public int Next() => Interlocked.Increment(ref _last);\n}\n\npublic sealed class TicketService(TicketNumbers numbers)\n{\n    public string Open(string customer) => $\"Ticket {numbers.Next()} opened for {customer}\";\n}"
          }
        },
        quiz: {
          q: {
            en: "A singleton service takes a scoped service in its constructor. What goes wrong?",
            hi: "एक singleton service अपने constructor में scoped service लेती है। क्या गलत होता है?",
            hg: "Ek singleton service apne constructor mein scoped service leti hai. Kya galat hota hai?"
          },
          options: [
            {
              en: "The scoped service is automatically turned into a singleton and works fine",
              hi: "Scoped service अपने-आप singleton बनकर ठीक चलती है",
              hg: "Scoped service apne-aap singleton bankar theek chalti hai"
            },
            {
              en: "Nothing, this is the recommended way",
              hi: "कुछ नहीं, यही recommended तरीका है",
              hg: "Kuch nahi, yehi recommended tareeka hai"
            },
            {
              en: "The container creates a new singleton on every request",
              hi: "Container हर request पर नया singleton बनाता है",
              hg: "Container har request par naya singleton banata hai"
            },
            {
              en: "The scoped object is kept for the whole app instead of one request (a captive dependency)",
              hi: "Scoped object एक request की जगह पूरे app तक पकड़ा रहता है (captive dependency)",
              hg: "Scoped object ek request ki jagah poore app tak pakda rehta hai (captive dependency)"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>The singleton lives for the whole app, so the scoped object it received lives just as long. For a database context that means stale data and thread-safety trouble. Scope validation catches this at start-up or first resolve.</p>",
            hi: "<p>Singleton पूरे app तक जीता है, इसलिए उसे मिला scoped object भी उतना ही जीता है। Database context के लिए इसका मतलब पुराना data और thread-safety की मुसीबत। Scope validation इसे start-up या पहले resolve पर पकड़ लेता है।</p>",
            hg: "<p>Singleton poore app tak jeeta hai, isliye use mila scoped object bhi utna hi jeeta hai. Database context ke liye iska matlab purana data aur thread-safety ki musibat. Scope validation ise start-up ya pehle resolve par pakad leta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>In an app, register with <code>AddSingleton</code>; do not hand-write a static <code>Instance</code>.</li><li>You ask for the interface in the constructor, so tests can fake it.</li><li>A singleton must not hold a scoped service (captive dependency); turn on <code>ValidateScopes</code> to catch it.</li></ul>",
          hi: "<ul><li>App में <code>AddSingleton</code> से register करो; static <code>Instance</code> हाथ से मत लिखो।</li><li>Constructor में interface माँगते हो, इसलिए tests fake कर सकते हैं।</li><li>Singleton scoped service को नहीं पकड़ सकता (captive dependency); पकड़ने के लिए <code>ValidateScopes</code> चालू करो।</li></ul>",
          hg: "<ul><li>App mein <code>AddSingleton</code> se register karo; static <code>Instance</code> haath se mat likho.</li><li>Constructor mein interface maangte ho, isliye tests fake kar sakte hain.</li><li>Singleton scoped service ko nahi pakad sakta (captive dependency); pakadne ke liye <code>ValidateScopes</code> chaalu karo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "AddSingleton, and a captive dependency caught (runs)",
            hi: "AddSingleton, और पकड़ी गई captive dependency (run होता है)",
            hg: "AddSingleton, aur pakdi gayi captive dependency (run hota hai)"
          },
          check: "run",
          packages: [
            "Microsoft.Extensions.DependencyInjection"
          ],
          expected: "False\nTrue\nSMS to Asha: Ticket 501 closed\nCaptive dependency caught: True",
          src: "using Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddSingleton<INotifier, SmsNotifier>();   // one shared notifier\nservices.AddTransient<TicketService>();            // a new service each time\nusing var provider = services.BuildServiceProvider();\n\nvar first = provider.GetRequiredService<TicketService>();\nvar second = provider.GetRequiredService<TicketService>();\nConsole.WriteLine(ReferenceEquals(first, second));                       // False\nConsole.WriteLine(ReferenceEquals(first.Notifier, second.Notifier));  // True\nConsole.WriteLine(first.Close(501, \"Asha\"));\n\n// A singleton that holds a scoped service is a captive dependency. Scope validation catches it.\nvar risky = new ServiceCollection();\nrisky.AddScoped<TicketRepository>();\nrisky.AddSingleton<SlaDashboard>();\nusing var strict = risky.BuildServiceProvider(new ServiceProviderOptions { ValidateScopes = true });\ntry\n{\n    strict.GetRequiredService<SlaDashboard>();\n}\ncatch (InvalidOperationException ex)\n{\n    Console.WriteLine($\"Captive dependency caught: {ex.Message.Contains(\"Cannot consume scoped service\")}\");\n}\n\npublic interface INotifier { string Send(string to, string message); }\n\npublic sealed class SmsNotifier : INotifier\n{\n    public string Send(string to, string message) => $\"SMS to {to}: {message}\";\n}\n\npublic sealed class EmailNotifier : INotifier\n{\n    public string Send(string to, string message) => $\"Email to {to}: {message}\";\n}\n\npublic sealed class TicketService(INotifier notifier)\n{\n    public INotifier Notifier { get; } = notifier;\n\n    public string Close(int ticketId, string customer) =>\n        Notifier.Send(customer, $\"Ticket {ticketId} closed\");\n}\n\npublic sealed class TicketRepository { }\n\npublic sealed class SlaDashboard(TicketRepository repo)\n{\n    public TicketRepository Repo { get; } = repo;\n}"
        }
      ]
    },
    {
      id: "simple-factory",
      depth: "short",
      title: {
        en: "Simple Factory: NotifierFactory.Create(channel)",
        hi: "Simple Factory: channel से notifier चुनना",
        hg: "Simple Factory: channel se notifier chunna"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 3 let the container choose one implementation when the app starts. But often the choice depends on a value you only know at run time: Asha prefers SMS, Ravi prefers email. A <b>Simple Factory</b> is one method that takes that value and returns an <code>INotifier</code>, so the caller never writes <code>new</code>.</p>",
          hi: "<p>पाठ 3 में app शुरू होते समय container ने एक implementation चुनी। पर अक्सर choice ऐसी value पर निर्भर होती है जो run time पर ही पता चलती है: Asha को SMS चाहिए, Ravi को email। <b>Simple Factory</b> एक method है जो वह value लेकर <code>INotifier</code> लौटाता है, ताकि caller को <code>new</code> न लिखना पड़े।</p>",
          hg: "<p>Lesson 3 mein app shuru hote samay container ne ek implementation chuni. Par aksar choice aisi value par nirbhar hoti hai jo run time par hi pata chalti hai: Asha ko SMS chahiye, Ravi ko email. <b>Simple Factory</b> ek method hai jo woh value lekar <code>INotifier</code> lautata hai, taaki caller ko <code>new</code> na likhna pade.</p>"
        },
        what: {
          en: "<p>A <b>Simple Factory</b> is a method, usually static, with a <code>switch</code> that returns an interface. It is not one of the classic GoF patterns, but it is the one you will write most often.</p>",
          hi: "<p><b>Simple Factory</b> एक method है, आम तौर पर static, जिसमें <code>switch</code> होता है और जो interface लौटाता है। यह classic GoF patterns में नहीं है, पर सबसे ज़्यादा यही लिखा जाता है।</p>",
          hg: "<p><b>Simple Factory</b> ek method hai, aam taur par static, jisme <code>switch</code> hota hai aur jo interface lautata hai. Yeh classic GoF patterns mein nahi hai, par sabse zyada yehi likha jata hai.</p>"
        },
        why: {
          en: "<p>The rule \"which channel gets which class\" lives in one method instead of being repeated in every place that sends a message. Callers stay short and only know <code>INotifier</code>.</p>",
          hi: "<p>\"कौन-सा channel किस class से\" का नियम एक method में रहता है, message भेजने वाली हर जगह दोहराया नहीं जाता। Callers छोटे रहते हैं और सिर्फ़ <code>INotifier</code> जानते हैं।</p>",
          hg: "<p>\"Kaunsa channel kis class se\" ka niyam ek method mein rehta hai, message bhejne wali har jagah dohraya nahi jata. Callers chhote rehte hain aur sirf <code>INotifier</code> jaante hain.</p>"
        },
        analogy: {
          en: "<p>A juice counter. You say \"mosambi\" and the counter hands you a glass. You never walk into the back room to squeeze the fruit yourself, and the counter knows which machine to use.</p>",
          hi: "<p>Juice counter। आप कहते हो \"mosambi\" और counter glass पकड़ा देता है। आप पीछे जाकर खुद फल नहीं निचोड़ते, और counter को पता है कि कौन-सी machine चलानी है।</p>",
          hg: "<p>Juice counter. Aap kehte ho \"mosambi\" aur counter glass pakda deta hai. Aap peeche jaakar khud phal nahi nichodte, aur counter ko pata hai ki kaunsi machine chalani hai.</p>"
        },
        lines: [
          {
            code: "public static class NotifierFactory",
            note: {
              en: "A static class: there is nothing to keep between calls, only a rule to apply.",
              hi: "Static class: calls के बीच कुछ याद नहीं रखना, सिर्फ़ एक नियम लगाना है।",
              hg: "Static class: calls ke beech kuch yaad nahi rakhna, sirf ek niyam lagana hai."
            }
          },
          {
            code: "\"sms\" => new SmsNotifier(),",
            note: {
              en: "One arm of the <code>switch</code> expression per channel. The return type is <code>INotifier</code>, so each arm may return a different class.",
              hi: "<code>switch</code> expression में हर channel के लिए एक arm। Return type <code>INotifier</code> है, इसलिए हर arm अलग class लौटा सकती है।",
              hg: "<code>switch</code> expression mein har channel ke liye ek arm. Return type <code>INotifier</code> hai, isliye har arm alag class lauta sakti hai."
            }
          },
          {
            code: "_ => throw new NotSupportedException($\"Unknown channel: {channel}\")",
            note: {
              en: "Always handle the unknown value. A loud error is better than a <code>null</code> that crashes later.",
              hi: "अनजानी value को हमेशा संभालो। बाद में crash करने वाले <code>null</code> से तुरंत का साफ़ error बेहतर है।",
              hg: "Anjaani value ko hamesha sambhalo. Baad mein crash karne wale <code>null</code> se turant ka saaf error behtar hai."
            }
          },
          {
            code: "INotifier notifier = NotifierFactory.Create(customer.Channel);",
            note: {
              en: "The caller passes a value and gets an interface back. It never mentions <code>SmsNotifier</code> or <code>EmailNotifier</code>.",
              hi: "Caller value देता है और interface वापस पाता है। वह <code>SmsNotifier</code> या <code>EmailNotifier</code> का नाम नहीं लेता।",
              hg: "Caller value deta hai aur interface wapas paata hai. Woh <code>SmsNotifier</code> ya <code>EmailNotifier</code> ka naam nahi leta."
            }
          },
          {
            code: "public sealed record Customer(string Name, string Channel);",
            note: {
              en: "In the CRM, each customer carries a preferred channel. That value is the input of the factory.",
              hi: "CRM में हर customer का एक पसंदीदा channel है। यही value factory का input है।",
              hg: "CRM mein har customer ka ek pasandida channel hai. Yehi value factory ka input hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Having a factory but still writing <code>new SmsNotifier()</code> in other places. Then the decision is in two places again.</li><li>Forgetting the default arm, so an unknown value gives silent wrong behaviour.</li><li>Letting the switch grow to dozens of cases. Every new case edits the method (Open/Closed, Day 8). For many options, look at keyed services (Deep Dive).</li></ul>",
          hi: "<ul><li>Factory होते हुए भी दूसरी जगह <code>new SmsNotifier()</code> लिखना। तब फ़ैसला फिर दो जगह हो जाता है।</li><li>Default arm भूल जाना, जिससे अनजानी value पर चुपचाप गलत behaviour मिलता है।</li><li>Switch को दर्जनों cases तक बढ़ने देना। हर नया case method बदलता है (Open/Closed, Day 8)। बहुत options हों तो keyed services देखो (Deep Dive)।</li></ul>",
          hg: "<ul><li>Factory hote hue bhi doosri jagah <code>new SmsNotifier()</code> likhna. Tab faisla phir do jagah ho jata hai.</li><li>Default arm bhool jana, jisse anjaani value par chupchaap galat behaviour milta hai.</li><li>Switch ko darjanon cases tak badhne dena. Har naya case method badalta hai (Open/Closed, Day 8). Bahut options hon to keyed services dekho (Deep Dive).</li></ul>"
        },
        whenToUse: {
          en: "<p>Use it when the concrete type depends on a value (a channel name, a file extension) and the set of options is small and stable. Do not add a factory for a single implementation with a single caller; plain DI or <code>new</code> is simpler.</p>",
          hi: "<p>तब लो जब concrete type किसी value पर निर्भर हो (channel का नाम, file extension) और options का set छोटा और स्थिर हो। एक implementation और एक caller के लिए factory मत जोड़ो; सीधा DI या <code>new</code> आसान है।</p>",
          hg: "<p>Tab lo jab concrete type kisi value par nirbhar ho (channel ka naam, file extension) aur options ka set chhota aur sthir ho. Ek implementation aur ek caller ke liye factory mat jodo; seedha DI ya <code>new</code> aasan hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a <code>\"whatsapp\"</code> channel. Customer <b>Neha</b> prefers it and should get <code>WhatsApp to Neha: Ticket 501 resolved</code>.</p>",
            hi: "<p><code>\"whatsapp\"</code> channel जोड़ो। Customer <b>Neha</b> इसे पसंद करती है और उसे <code>WhatsApp to Neha: Ticket 501 resolved</code> मिलना चाहिए।</p>",
            hg: "<p><code>\"whatsapp\"</code> channel jodo. Customer <b>Neha</b> ise pasand karti hai aur use <code>WhatsApp to Neha: Ticket 501 resolved</code> milna chahiye.</p>"
          },
          hint: {
            en: "<p>You need a new class that implements <code>INotifier</code> and one new arm in the factory.</p>",
            hi: "<p>एक नई class चाहिए जो <code>INotifier</code> implement करे, और factory में एक नया arm।</p>",
            hg: "<p>Ek nayi class chahiye jo <code>INotifier</code> implement kare, aur factory mein ek naya arm.</p>"
          },
          solution: {
            caption: {
              en: "Solution: one new class, one new arm",
              hi: "हल: एक नई class, एक नया arm",
              hg: "Hal: ek nayi class, ek naya arm"
            },
            check: "run",
            expected: "WhatsApp to Neha: Ticket 501 resolved",
            src: "INotifier notifier = NotifierFactory.Create(\"whatsapp\");\nConsole.WriteLine(notifier.Send(\"Neha\", \"Ticket 501 resolved\"));\n\npublic interface INotifier { string Send(string to, string message); }\n\npublic sealed class SmsNotifier : INotifier\n{\n    public string Send(string to, string message) => $\"SMS to {to}: {message}\";\n}\n\npublic sealed class WhatsAppNotifier : INotifier\n{\n    public string Send(string to, string message) => $\"WhatsApp to {to}: {message}\";\n}\n\npublic static class NotifierFactory\n{\n    public static INotifier Create(string channel) => channel switch\n    {\n        \"sms\" => new SmsNotifier(),\n        \"whatsapp\" => new WhatsAppNotifier(),\n        _ => throw new NotSupportedException($\"Unknown channel: {channel}\")\n    };\n}"
          }
        },
        quiz: {
          q: {
            en: "Is Simple Factory one of the classic GoF design patterns?",
            hi: "क्या Simple Factory classic GoF design patterns में से एक है?",
            hg: "Kya Simple Factory classic GoF design patterns mein se ek hai?"
          },
          options: [
            {
              en: "Yes, it is the first pattern in the GoF book",
              hi: "हाँ, यह GoF book का पहला pattern है",
              hg: "Haan, yeh GoF book ka pehla pattern hai"
            },
            {
              en: "No, it is a common idiom (a method with a switch); GoF has Factory Method and Abstract Factory",
              hi: "नहीं, यह आम idiom है (switch वाला method); GoF में Factory Method और Abstract Factory हैं",
              hg: "Nahi, yeh aam idiom hai (switch wala method); GoF mein Factory Method aur Abstract Factory hain"
            },
            {
              en: "Yes, it is the same thing as Factory Method",
              hi: "हाँ, यह Factory Method जैसा ही है",
              hg: "Haan, yeh Factory Method jaisa hi hai"
            },
            {
              en: "No, it is another name for Builder",
              hi: "नहीं, यह Builder का दूसरा नाम है",
              hg: "Nahi, yeh Builder ka doosra naam hai"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>A Simple Factory is just a method that returns an interface. Factory Method (subclass decides) and Abstract Factory (a family) are the GoF ones. Interviewers like this as a trick question.</p>",
            hi: "<p>Simple Factory बस एक method है जो interface लौटाता है। Factory Method (subclass तय करती है) और Abstract Factory (family) GoF वाले हैं। Interviewers यह trick question पसंद करते हैं।</p>",
            hg: "<p>Simple Factory bas ek method hai jo interface lautata hai. Factory Method (subclass tay karti hai) aur Abstract Factory (family) GoF wale hain. Interviewers yeh trick question pasand karte hain.</p>"
          }
        },
        recap: {
          en: "<ul><li>Simple Factory = a method with a <code>switch</code> that returns an interface.</li><li>It is useful but not a GoF pattern; adding a case edits the method.</li><li>Always handle the unknown value; skip it for a single implementation.</li></ul>",
          hi: "<ul><li>Simple Factory = <code>switch</code> वाला method जो interface लौटाता है।</li><li>काम का है पर GoF pattern नहीं; case जोड़ने पर method बदलता है।</li><li>अनजानी value हमेशा संभालो; एक implementation के लिए मत लगाओ।</li></ul>",
          hg: "<ul><li>Simple Factory = <code>switch</code> wala method jo interface lautata hai.</li><li>Kaam ka hai par GoF pattern nahi; case jodne par method badalta hai.</li><li>Anjaani value hamesha sambhalo; ek implementation ke liye mat lagao.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "NotifierFactory.Create picks the notifier from a channel (runs)",
            hi: "NotifierFactory.Create channel से notifier चुनती है (run होता है)",
            hg: "NotifierFactory.Create channel se notifier chunti hai (run hota hai)"
          },
          check: "run",
          expected: "SMS to Asha: Ticket 501 resolved\nEmail to Ravi: Ticket 502 resolved\nSMS to Meena: Ticket 503 resolved\nUnknown channel: fax",
          src: "var customers = new[]\n{\n    new Customer(\"Asha\", \"sms\"),\n    new Customer(\"Ravi\", \"email\"),\n    new Customer(\"Meena\", \"sms\")\n};\n\nvar ticketId = 501;\nforeach (var customer in customers)\n{\n    INotifier notifier = NotifierFactory.Create(customer.Channel);\n    Console.WriteLine(notifier.Send(customer.Name, $\"Ticket {ticketId++} resolved\"));\n}\n\ntry\n{\n    NotifierFactory.Create(\"fax\");\n}\ncatch (NotSupportedException ex)\n{\n    Console.WriteLine(ex.Message);\n}\n\npublic sealed record Customer(string Name, string Channel);\n\npublic interface INotifier { string Send(string to, string message); }\n\npublic sealed class SmsNotifier : INotifier\n{\n    public string Send(string to, string message) => $\"SMS to {to}: {message}\";\n}\n\npublic sealed class EmailNotifier : INotifier\n{\n    public string Send(string to, string message) => $\"Email to {to}: {message}\";\n}\n\n// Simple Factory: one switch. Handy, but a new channel edits this method.\npublic static class NotifierFactory\n{\n    public static INotifier Create(string channel) => channel switch\n    {\n        \"sms\" => new SmsNotifier(),\n        \"email\" => new EmailNotifier(),\n        _ => throw new NotSupportedException($\"Unknown channel: {channel}\")\n    };\n}"
        }
      ]
    },
    {
      id: "factory-method",
      depth: "short",
      title: {
        en: "Factory Method: the subclass decides",
        hi: "Factory Method: subclass तय करती है",
        hg: "Factory Method: subclass tay karti hai"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 4 put the choice in one <code>switch</code>, so a new case edits the factory. <b>Factory Method</b> moves the choice into subclasses: the base class owns the fixed workflow, and each subclass supplies its own product. Adding a new one means adding a new class, not editing old code (Open/Closed, Day 8).</p>",
          hi: "<p>पाठ 4 में choice एक <code>switch</code> में थी, इसलिए नया case factory को बदलता है। <b>Factory Method</b> choice को subclasses में डालता है: base class तय workflow रखती है, और हर subclass अपना product देती है। नया जोड़ना यानी नई class जोड़ना, पुराना code बदलना नहीं (Open/Closed, Day 8)।</p>",
          hg: "<p>Lesson 4 mein choice ek <code>switch</code> mein thi, isliye naya case factory ko badalta hai. <b>Factory Method</b> choice ko subclasses mein daalta hai: base class tay workflow rakhti hai, aur har subclass apna product deti hai. Naya jodna matlab nayi class jodna, purana code badalna nahi (Open/Closed, Day 8).</p>"
        },
        what: {
          en: "<p>A base class has a workflow and an <code>abstract</code> method that returns the product. That method is the <b>factory method</b>. Each subclass overrides it and decides the concrete type. One product, decided by <b>inheritance</b>.</p>",
          hi: "<p>Base class में workflow होता है और product लौटाने वाला <code>abstract</code> method। वही <b>factory method</b> है। हर subclass उसे override करके concrete type तय करती है। एक product, <b>inheritance</b> से तय।</p>",
          hg: "<p>Base class mein workflow hota hai aur product lautane wala <code>abstract</code> method. Wahi <b>factory method</b> hai. Har subclass use override karke concrete type tay karti hai. Ek product, <b>inheritance</b> se tay.</p>"
        },
        why: {
          en: "<p>Tickets arrive from different sources: email, CSV upload, later a chat bot. The steps (parse, check, record) are the same; only the parser differs. A new source then needs one new importer class and no change to the shared steps.</p>",
          hi: "<p>Tickets अलग sources से आते हैं: email, CSV upload, आगे chat bot। Steps (parse, check, record) वही हैं; सिर्फ़ parser अलग है। नए source के लिए एक नई importer class चाहिए और common steps में कोई बदलाव नहीं।</p>",
          hg: "<p>Tickets alag sources se aate hain: email, CSV upload, aage chat bot. Steps (parse, check, record) wahi hain; sirf parser alag hai. Naye source ke liye ek nayi importer class chahiye aur common steps mein koi badlaav nahi.</p>"
        },
        analogy: {
          en: "<p>A school exam. The rules are the same for every subject: seating, timing, answer sheets. Each subject teacher sets their own question paper. The exam office never edits the rules for a new subject.</p>",
          hi: "<p>School की exam। नियम हर subject के लिए वही हैं: seating, समय, answer sheets। हर subject का teacher अपना question paper बनाता है। नए subject के लिए exam office नियम नहीं बदलता।</p>",
          hg: "<p>School ki exam. Niyam har subject ke liye wahi hain: seating, samay, answer sheets. Har subject ka teacher apna question paper banata hai. Naye subject ke liye exam office niyam nahi badalta.</p>"
        },
        lines: [
          {
            code: "protected abstract ITicketParser CreateParser();",
            note: {
              en: "The <b>factory method</b>. It is <code>abstract</code>, so every subclass must say which parser to create, and <code>protected</code>, because only the workflow should call it.",
              hi: "यही <b>factory method</b> है। यह <code>abstract</code> है, इसलिए हर subclass को बताना पड़ता है कि कौन-सा parser बनाना है, और <code>protected</code> है, क्योंकि सिर्फ़ workflow इसे बुलाए।",
              hg: "Yehi <b>factory method</b> hai. Yeh <code>abstract</code> hai, isliye har subclass ko batana padta hai ki kaunsa parser banana hai, aur <code>protected</code> hai, kyunki sirf workflow ise bulaye."
            }
          },
          {
            code: "var ticket = CreateParser().Parse(raw);",
            note: {
              en: "The shared workflow calls the factory method and uses the result through <code>ITicketParser</code>. It never sees a concrete parser.",
              hi: "Shared workflow factory method बुलाता है और result को <code>ITicketParser</code> से use करता है। उसे कोई concrete parser दिखता ही नहीं।",
              hg: "Shared workflow factory method bulata hai aur result ko <code>ITicketParser</code> se use karta hai. Use koi concrete parser dikhta hi nahi."
            }
          },
          {
            code: "return $\"Ticket {id} rejected: empty issue\";",
            note: {
              en: "This rule is written once in the base class, so every source gets it for free.",
              hi: "यह नियम base class में एक बार लिखा है, इसलिए हर source को मुफ़्त मिलता है।",
              hg: "Yeh niyam base class mein ek baar likha hai, isliye har source ko muft milta hai."
            }
          },
          {
            code: "protected override ITicketParser CreateParser() => new CsvParser();",
            note: {
              en: "The subclass fills in the one missing piece: it chooses <code>CsvParser</code>. That is the whole job of <code>CsvImporter</code>.",
              hi: "Subclass अकेला छूटा हिस्सा भरती है: वह <code>CsvParser</code> चुनती है। <code>CsvImporter</code> का बस यही काम है।",
              hg: "Subclass akela chhoota hissa bharti hai: woh <code>CsvParser</code> chunti hai. <code>CsvImporter</code> ka bas yehi kaam hai."
            }
          },
          {
            code: "TicketImporter[] importers = { new EmailImporter(), new CsvImporter() };",
            note: {
              en: "The caller holds importers through the base type. The right parser is chosen by which subclass the object really is (polymorphism, Day 1).",
              hi: "Caller importers को base type से रखता है। सही parser इस पर चुना जाता है कि object असल में कौन-सी subclass है (polymorphism, Day 1)।",
              hg: "Caller importers ko base type se rakhta hai. Sahi parser is par chuna jata hai ki object asal mein kaunsi subclass hai (polymorphism, Day 1)."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Calling the factory method from outside the workflow. GoF allows it to be <code>public</code>, but here it is only a hook for <code>Import</code>, so keep it <code>protected</code>.</li><li>Creating a subclass for something a simple <code>switch</code> or a constructor argument would handle. Do not build an inheritance tree for one small variation.</li><li>Mixing it up with Abstract Factory. Factory Method makes <b>one</b> product; the next lesson makes a <b>family</b>.</li></ul>",
          hi: "<ul><li>Factory method को workflow के बाहर से बुलाना। GoF में यह <code>public</code> भी हो सकता है, पर यहाँ यह सिर्फ़ <code>Import</code> का hook है, इसलिए <code>protected</code> रखो।</li><li>ऐसी चीज़ के लिए subclass बनाना जो सादा <code>switch</code> या constructor argument संभाल लेता। एक छोटे फ़र्क के लिए inheritance का पेड़ मत बनाओ।</li><li>Abstract Factory से गड़बड़ाना। Factory Method <b>एक</b> product बनाता है; अगला पाठ <b>family</b> बनाता है।</li></ul>",
          hg: "<ul><li>Factory method ko workflow ke bahar se bulana. GoF mein yeh <code>public</code> bhi ho sakta hai, par yahan yeh sirf <code>Import</code> ka hook hai, isliye <code>protected</code> rakho.</li><li>Aisi cheez ke liye subclass banana jo saada <code>switch</code> ya constructor argument sambhal leta. Ek chhote farq ke liye inheritance ka ped mat banao.</li><li>Abstract Factory se gadbadana. Factory Method <b>ek</b> product banata hai; agla lesson <b>family</b> banata hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use it when a fixed workflow needs one varying piece and new variations are likely (new ticket sources). Do not use it when the variation is tiny or the set never changes; a Simple Factory or plain DI is lighter.</p>",
          hi: "<p>तब लो जब तय workflow में एक बदलने वाला हिस्सा हो और आगे नई variations आ सकती हों (नए ticket sources)। जब फ़र्क बहुत छोटा हो या set कभी न बदले तब मत लो; Simple Factory या सादा DI हल्का है।</p>",
          hg: "<p>Tab lo jab tay workflow mein ek badalne wala hissa ho aur aage nayi variations aa sakti hon (naye ticket sources). Jab farq bahut chhota ho ya set kabhi na badle tab mat lo; Simple Factory ya saada DI halka hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a <code>SemicolonImporter</code> for the line <code>Neha;Refund pending</code> (separator is <code>;</code>). Do not change <code>TicketImporter</code>. Import it as ticket 504.</p>",
            hi: "<p><code>Neha;Refund pending</code> वाली line के लिए <code>SemicolonImporter</code> जोड़ो (separator <code>;</code> है)। <code>TicketImporter</code> मत बदलो। इसे ticket 504 की तरह import करो।</p>",
            hg: "<p><code>Neha;Refund pending</code> wali line ke liye <code>SemicolonImporter</code> jodo (separator <code>;</code> hai). <code>TicketImporter</code> mat badlo. Ise ticket 504 ki tarah import karo.</p>"
          },
          hint: {
            en: "<p>You need a new parser class and a new importer class that overrides <code>CreateParser</code>. The base class stays the same.</p>",
            hi: "<p>एक नई parser class और एक नई importer class चाहिए जो <code>CreateParser</code> override करे। Base class वही रहती है।</p>",
            hg: "<p>Ek nayi parser class aur ek nayi importer class chahiye jo <code>CreateParser</code> override kare. Base class wahi rehti hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a new parser and a new importer, base class untouched",
              hi: "हल: नया parser और नया importer, base class वही",
              hg: "Hal: naya parser aur naya importer, base class wahi"
            },
            check: "run",
            expected: "Ticket 504 from Neha: Refund pending",
            src: "Console.WriteLine(new SemicolonImporter().Import(504, \"Neha;Refund pending\"));\n\npublic sealed record IncomingTicket(string Customer, string Issue);\n\npublic interface ITicketParser { IncomingTicket Parse(string raw); }\n\npublic sealed class SemicolonParser : ITicketParser\n{\n    public IncomingTicket Parse(string raw)\n    {\n        var parts = raw.Split(';');\n        return new IncomingTicket(parts[0], parts[1]);\n    }\n}\n\npublic abstract class TicketImporter\n{\n    protected abstract ITicketParser CreateParser();\n\n    public string Import(int id, string raw)\n    {\n        var ticket = CreateParser().Parse(raw);\n        if (string.IsNullOrWhiteSpace(ticket.Issue))\n            return $\"Ticket {id} rejected: empty issue\";\n        return $\"Ticket {id} from {ticket.Customer}: {ticket.Issue}\";\n    }\n}\n\npublic sealed class SemicolonImporter : TicketImporter\n{\n    protected override ITicketParser CreateParser() => new SemicolonParser();\n}"
          }
        },
        quiz: {
          q: {
            en: "In the Factory Method pattern, who decides the concrete product?",
            hi: "Factory Method pattern में concrete product कौन तय करता है?",
            hg: "Factory Method pattern mein concrete product kaun tay karta hai?"
          },
          options: [
            {
              en: "The caller, by writing <code>new</code>",
              hi: "Caller, <code>new</code> लिखकर",
              hg: "Caller, <code>new</code> likhkar"
            },
            {
              en: "A static <code>switch</code> inside one method",
              hi: "एक method के अंदर का static <code>switch</code>",
              hg: "Ek method ke andar ka static <code>switch</code>"
            },
            {
              en: "A subclass, by overriding the factory method",
              hi: "Subclass, factory method को override करके",
              hg: "Subclass, factory method ko override karke"
            },
            {
              en: "The DI container, always",
              hi: "DI container, हमेशा",
              hg: "DI container, hamesha"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>The base class declares the factory method (often <code>abstract</code>) and each subclass overrides it. A static switch is Simple Factory, and <code>new</code> by the caller is no pattern at all.</p>",
            hi: "<p>Base class factory method declare करती है (अक्सर <code>abstract</code>) और हर subclass उसे override करती है। Static switch Simple Factory है, और caller का <code>new</code> कोई pattern ही नहीं।</p>",
            hg: "<p>Base class factory method declare karti hai (aksar <code>abstract</code>) aur har subclass use override karti hai. Static switch Simple Factory hai, aur caller ka <code>new</code> koi pattern hi nahi.</p>"
          }
        },
        recap: {
          en: "<ul><li>Factory Method: the base class has the workflow, a subclass picks the product.</li><li>The factory method is usually <code>protected abstract</code> and returns an interface.</li><li>A new variation is a new subclass; the old code stays closed.</li></ul>",
          hi: "<ul><li>Factory Method: base class में workflow, subclass product चुनती है।</li><li>Factory method आम तौर पर <code>protected abstract</code> होता है और interface लौटाता है।</li><li>नई variation यानी नई subclass; पुराना code बंद (closed) रहता है।</li></ul>",
          hg: "<ul><li>Factory Method: base class mein workflow, subclass product chunti hai.</li><li>Factory method aam taur par <code>protected abstract</code> hota hai aur interface lautata hai.</li><li>Nayi variation yaani nayi subclass; purana code band (closed) rehta hai.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Ticket importers: the subclass picks the parser (runs)",
            hi: "Ticket importers: subclass parser चुनती है (run होता है)",
            hg: "Ticket importers: subclass parser chunti hai (run hota hai)"
          },
          check: "run",
          expected: "Ticket 501 from Asha: Router down\nTicket 502 from Ravi: Billing error\nTicket 503 rejected: empty issue",
          src: "TicketImporter[] importers = { new EmailImporter(), new CsvImporter() };\n\nConsole.WriteLine(importers[0].Import(501, \"From: Asha | Subject: Router down\"));\nConsole.WriteLine(importers[1].Import(502, \"Ravi,Billing error\"));\nConsole.WriteLine(importers[1].Import(503, \"Meena,\"));\n\npublic sealed record IncomingTicket(string Customer, string Issue);\n\npublic interface ITicketParser { IncomingTicket Parse(string raw); }\n\npublic sealed class EmailParser : ITicketParser\n{\n    public IncomingTicket Parse(string raw)\n    {\n        var parts = raw.Split(\" | \");\n        return new IncomingTicket(parts[0].Replace(\"From: \", \"\"), parts[1].Replace(\"Subject: \", \"\"));\n    }\n}\n\npublic sealed class CsvParser : ITicketParser\n{\n    public IncomingTicket Parse(string raw)\n    {\n        var parts = raw.Split(',');\n        return new IncomingTicket(parts[0], parts[1]);\n    }\n}\n\n// The base class owns the workflow. The subclass supplies only the parser.\npublic abstract class TicketImporter\n{\n    protected abstract ITicketParser CreateParser();   // <- the factory method\n\n    public string Import(int id, string raw)\n    {\n        var ticket = CreateParser().Parse(raw);\n        if (string.IsNullOrWhiteSpace(ticket.Issue))\n            return $\"Ticket {id} rejected: empty issue\";\n        return $\"Ticket {id} from {ticket.Customer}: {ticket.Issue}\";\n    }\n}\n\npublic sealed class EmailImporter : TicketImporter\n{\n    protected override ITicketParser CreateParser() => new EmailParser();\n}\n\npublic sealed class CsvImporter : TicketImporter\n{\n    protected override ITicketParser CreateParser() => new CsvParser();\n}"
        }
      ]
    },
    {
      id: "abstract-factory",
      depth: "short",
      title: {
        en: "Abstract Factory: objects that must match",
        hi: "Abstract Factory: जो objects आपस में मेल खाएँ",
        hg: "Abstract Factory: jo objects aapas mein mel khayein"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 5 made <b>one</b> product per subclass. Sometimes two products must be chosen <b>together</b>. An SMS notifier needs a short message template; an email notifier needs a long, polite one. <b>Abstract Factory</b> is one factory interface that creates the whole matching family, using the <code>INotifier</code> from earlier lessons.</p>",
          hi: "<p>पाठ 5 में हर subclass ने <b>एक</b> product बनाया। कभी दो products <b>साथ में</b> चुनने पड़ते हैं। SMS notifier को छोटा message template चाहिए; email notifier को लंबा, formal वाला। <b>Abstract Factory</b> एक factory interface है जो पूरा मेल खाता family बनाती है, पिछले पाठों के <code>INotifier</code> के साथ।</p>",
          hg: "<p>Lesson 5 mein har subclass ne <b>ek</b> product banaya. Kabhi do products <b>saath mein</b> chunne padte hain. SMS notifier ko chhota message template chahiye; email notifier ko lamba, formal wala. <b>Abstract Factory</b> ek factory interface hai jo poora match karta family banati hai, pichhle lessons ke <code>INotifier</code> ke saath.</p>"
        },
        what: {
          en: "<p>An <b>Abstract Factory</b> is an interface with several <code>Create...()</code> methods, one per product. Each implementation returns a matching set. Swap the factory and the whole family changes together. It is decided by <b>composition</b>: you pass the factory in.</p>",
          hi: "<p><b>Abstract Factory</b> एक interface है जिसमें कई <code>Create...()</code> methods होते हैं, हर product के लिए एक। हर implementation मेल खाता set लौटाती है। Factory बदलो तो पूरा family साथ बदलता है। यह <b>composition</b> से तय होता है: factory को अंदर पास करते हो।</p>",
          hg: "<p><b>Abstract Factory</b> ek interface hai jisme kai <code>Create...()</code> methods hote hain, har product ke liye ek. Har implementation match karta set lautati hai. Factory badlo to poora family saath badalta hai. Yeh <b>composition</b> se tay hota hai: factory ko andar pass karte ho.</p>"
        },
        why: {
          en: "<p>If code creates the notifier and the template separately, someone will eventually pair an email notifier with the short SMS template. A single factory makes the wrong pairing impossible.</p>",
          hi: "<p>अगर code notifier और template अलग-अलग बनाए, तो कभी न कभी कोई email notifier को छोटे SMS template के साथ जोड़ देगा। एक ही factory से गलत जोड़ी बन ही नहीं सकती।</p>",
          hg: "<p>Agar code notifier aur template alag-alag banaye, to kabhi na kabhi koi email notifier ko chhote SMS template ke saath jod dega. Ek hi factory se galat jodi ban hi nahi sakti.</p>"
        },
        analogy: {
          en: "<p>A combo meal at a restaurant. You pick \"Veg Combo\" once, and the kitchen gives the matching burger, fries and drink together. You cannot get the veg burger with the non-veg sauce by mistake.</p>",
          hi: "<p>Restaurant का combo meal। आप एक बार \"Veg Combo\" चुनते हो और kitchen मेल खाता burger, fries और drink साथ देती है। गलती से veg burger के साथ non-veg sauce नहीं मिल सकता।</p>",
          hg: "<p>Restaurant ka combo meal. Aap ek baar \"Veg Combo\" chunte ho aur kitchen match karta burger, fries aur drink saath deti hai. Galti se veg burger ke saath non-veg sauce nahi mil sakta.</p>"
        },
        lines: [
          {
            code: "public interface IChannelKit",
            note: {
              en: "The abstract factory: one interface for the whole family of a channel.",
              hi: "Abstract factory: एक channel के पूरे family के लिए एक interface।",
              hg: "Abstract factory: ek channel ke poore family ke liye ek interface."
            }
          },
          {
            code: "INotifier CreateNotifier();",
            note: {
              en: "First product of the family.",
              hi: "Family का पहला product।",
              hg: "Family ka pehla product."
            }
          },
          {
            code: "IMessageTemplate CreateTemplate();",
            note: {
              en: "Second product. It must fit the notifier above. That fit is the reason this pattern exists.",
              hi: "दूसरा product। उसे ऊपर वाले notifier से मेल खाना चाहिए। यही मेल इस pattern की वजह है।",
              hg: "Doosra product. Use upar wale notifier se mel khana chahiye. Yehi mel is pattern ki wajah hai."
            }
          },
          {
            code: "public INotifier CreateNotifier() => new SmsNotifier();",
            note: {
              en: "The SMS kit creates the SMS notifier. Its <code>CreateTemplate</code> returns the short template, so the two always match.",
              hi: "SMS kit SMS notifier बनाती है। उसका <code>CreateTemplate</code> छोटा template लौटाता है, इसलिए दोनों हमेशा मेल खाते हैं।",
              hg: "SMS kit SMS notifier banati hai. Uska <code>CreateTemplate</code> chhota template lautata hai, isliye dono hamesha mel khate hain."
            }
          },
          {
            code: "INotifier notifier = kit.CreateNotifier();",
            note: {
              en: "The client asks the kit for each product and uses only the interfaces. It does not know which channel it is serving.",
              hi: "Client kit से हर product माँगता है और सिर्फ़ interfaces use करता है। उसे नहीं पता कि वह कौन-सा channel संभाल रहा है।",
              hg: "Client kit se har product maangta hai aur sirf interfaces use karta hai. Use nahi pata ki woh kaunsa channel sambhal raha hai."
            }
          },
          {
            code: "Notify(new EmailKit(), \"Ravi\", 502);",
            note: {
              en: "Passing a different kit changes both the notifier and the template at once.",
              hi: "दूसरी kit देने से notifier और template दोनों एक साथ बदल जाते हैं।",
              hg: "Doosri kit dene se notifier aur template dono ek saath badal jaate hain."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Adding a new product type (say <code>CreateFooter()</code>). Every factory must change, so keep the product list stable.</li><li>Using it when the products do not need to match. A Simple Factory is enough then.</li><li>Creating the products by hand next to the factory, so the wrong pairing is possible again.</li></ul>",
          hi: "<ul><li>नया product type जोड़ना (जैसे <code>CreateFooter()</code>)। हर factory बदलनी पड़ेगी, इसलिए products की list स्थिर रखो।</li><li>तब लगाना जब products को मेल खाने की ज़रूरत ही नहीं। तब Simple Factory काफ़ी है।</li><li>Factory के बगल में products हाथ से बना देना, जिससे गलत जोड़ी फिर संभव हो जाती है।</li></ul>",
          hg: "<ul><li>Naya product type jodna (jaise <code>CreateFooter()</code>). Har factory badalni padegi, isliye products ki list sthir rakho.</li><li>Tab lagana jab products ko mel khane ki zaroorat hi nahi. Tab Simple Factory kaafi hai.</li><li>Factory ke bagal mein products haath se bana dena, jisse galat jodi phir sambhav ho jati hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use it when products truly belong together and you want to swap the whole family at once (a channel, a database provider, a theme). Do not use it for a single product, and do not add a factory interface that has one implementation and one caller.</p>",
          hi: "<p>तब लो जब products सच में साथ के हों और पूरा family एक साथ बदलना हो (channel, database provider, theme)। एक product के लिए मत लो, और ऐसा factory interface मत जोड़ो जिसकी एक implementation और एक caller हो।</p>",
          hg: "<p>Tab lo jab products sach mein saath ke hon aur poora family ek saath badalna ho (channel, database provider, theme). Ek product ke liye mat lo, aur aisa factory interface mat jodo jiski ek implementation aur ek caller ho.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a <code>WhatsAppKit</code> whose notifier prints <code>WhatsApp to Neha: ...</code> and whose template is the short one. Notify Neha about ticket 504.</p>",
            hi: "<p>एक <code>WhatsAppKit</code> जोड़ो जिसका notifier <code>WhatsApp to Neha: ...</code> print करे और template छोटा वाला हो। Neha को ticket 504 के बारे में notify करो।</p>",
            hg: "<p>Ek <code>WhatsAppKit</code> jodo jiska notifier <code>WhatsApp to Neha: ...</code> print kare aur template chhota wala ho. Neha ko ticket 504 ke baare mein notify karo.</p>"
          },
          hint: {
            en: "<p>Create <code>WhatsAppNotifier</code> and a kit that returns it together with <code>ShortTemplate</code>. The <code>Notify</code> method does not change.</p>",
            hi: "<p><code>WhatsAppNotifier</code> बनाओ और ऐसी kit जो उसे <code>ShortTemplate</code> के साथ लौटाए। <code>Notify</code> method नहीं बदलता।</p>",
            hg: "<p><code>WhatsAppNotifier</code> banao aur aisi kit jo use <code>ShortTemplate</code> ke saath lautaye. <code>Notify</code> method nahi badalta.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a new family, the client is unchanged",
              hi: "हल: नया family, client वैसा ही",
              hg: "Hal: naya family, client waisa hi"
            },
            check: "run",
            expected: "WhatsApp to Neha: Ticket 504 resolved",
            src: "Notify(new WhatsAppKit(), \"Neha\", 504);\n\nstatic void Notify(IChannelKit kit, string customer, int ticketId)\n{\n    INotifier notifier = kit.CreateNotifier();\n    IMessageTemplate template = kit.CreateTemplate();\n    Console.WriteLine(notifier.Send(customer, template.Render(customer, ticketId)));\n}\n\npublic interface INotifier { string Send(string to, string message); }\npublic interface IMessageTemplate { string Render(string customer, int ticketId); }\n\npublic interface IChannelKit\n{\n    INotifier CreateNotifier();\n    IMessageTemplate CreateTemplate();\n}\n\npublic sealed class WhatsAppNotifier : INotifier\n{\n    public string Send(string to, string message) => $\"WhatsApp to {to}: {message}\";\n}\n\npublic sealed class ShortTemplate : IMessageTemplate\n{\n    public string Render(string customer, int ticketId) => $\"Ticket {ticketId} resolved\";\n}\n\npublic sealed class WhatsAppKit : IChannelKit\n{\n    public INotifier CreateNotifier() => new WhatsAppNotifier();\n    public IMessageTemplate CreateTemplate() => new ShortTemplate();\n}"
          }
        },
        quiz: {
          q: {
            en: "What does an Abstract Factory guarantee?",
            hi: "Abstract Factory क्या guarantee करती है?",
            hg: "Abstract Factory kya guarantee karti hai?"
          },
          options: [
            {
              en: "The products it creates together belong to one family and match",
              hi: "वह जो products साथ बनाती है वे एक family के हैं और आपस में मेल खाते हैं",
              hg: "Woh jo products saath banati hai woh ek family ke hain aur aapas mein mel khate hain"
            },
            {
              en: "Only one instance of each product exists in the app",
              hi: "App में हर product का सिर्फ़ एक instance होता है",
              hg: "App mein har product ka sirf ek instance hota hai"
            },
            {
              en: "Products are created faster than with <code>new</code>",
              hi: "Products <code>new</code> से तेज़ बनते हैं",
              hg: "Products <code>new</code> se tez bante hain"
            },
            {
              en: "Each product is chosen by its own subclass",
              hi: "हर product अपनी subclass से चुना जाता है",
              hg: "Har product apni subclass se chuna jata hai"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>The factory object creates all the products of one family, so they fit each other. One instance per product is Singleton, and one product chosen by a subclass is Factory Method.</p>",
            hi: "<p>Factory object एक family के सारे products बनाता है, इसलिए वे आपस में फिट होते हैं। हर product का एक instance Singleton है, और subclass से चुना एक product Factory Method है।</p>",
            hg: "<p>Factory object ek family ke saare products banata hai, isliye woh aapas mein fit hote hain. Har product ka ek instance Singleton hai, aur subclass se chuna ek product Factory Method hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Abstract Factory = one interface that creates a matching family of products.</li><li>Swap the factory and the whole family changes together.</li><li>Use it only when products must match; adding a product type changes every factory.</li></ul>",
          hi: "<ul><li>Abstract Factory = एक interface जो मेल खाते products का family बनाता है।</li><li>Factory बदलो तो पूरा family साथ बदलता है।</li><li>तभी लो जब products को मेल खाना ज़रूरी हो; नया product type हर factory बदलता है।</li></ul>",
          hg: "<ul><li>Abstract Factory = ek interface jo match karte products ka family banata hai.</li><li>Factory badlo to poora family saath badalta hai.</li><li>Tabhi lo jab products ko mel khana zaroori ho; naya product type har factory badalta hai.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A kit per channel: notifier and template always match (runs)",
            hi: "हर channel की एक kit: notifier और template हमेशा मेल खाते हैं (run होता है)",
            hg: "Har channel ki ek kit: notifier aur template hamesha mel khate hain (run hota hai)"
          },
          check: "run",
          expected: "SMS to Asha: Ticket 501 resolved\nEmail to Ravi: Dear Ravi, your ticket 502 has been resolved. Regards, Support Team",
          src: "Notify(new SmsKit(), \"Asha\", 501);\nNotify(new EmailKit(), \"Ravi\", 502);\n\n// The client works with interfaces only and takes the whole family from the kit.\nstatic void Notify(IChannelKit kit, string customer, int ticketId)\n{\n    INotifier notifier = kit.CreateNotifier();\n    IMessageTemplate template = kit.CreateTemplate();\n    Console.WriteLine(notifier.Send(customer, template.Render(customer, ticketId)));\n}\n\npublic interface INotifier { string Send(string to, string message); }\n\npublic sealed class SmsNotifier : INotifier\n{\n    public string Send(string to, string message) => $\"SMS to {to}: {message}\";\n}\n\npublic sealed class EmailNotifier : INotifier\n{\n    public string Send(string to, string message) => $\"Email to {to}: {message}\";\n}\n\npublic interface IMessageTemplate { string Render(string customer, int ticketId); }\n\npublic sealed class ShortTemplate : IMessageTemplate\n{\n    public string Render(string customer, int ticketId) => $\"Ticket {ticketId} resolved\";\n}\n\npublic sealed class LongTemplate : IMessageTemplate\n{\n    public string Render(string customer, int ticketId) =>\n        $\"Dear {customer}, your ticket {ticketId} has been resolved. Regards, Support Team\";\n}\n\n// Abstract Factory: one interface, a family of matching products.\npublic interface IChannelKit\n{\n    INotifier CreateNotifier();\n    IMessageTemplate CreateTemplate();\n}\n\npublic sealed class SmsKit : IChannelKit\n{\n    public INotifier CreateNotifier() => new SmsNotifier();\n    public IMessageTemplate CreateTemplate() => new ShortTemplate();\n}\n\npublic sealed class EmailKit : IChannelKit\n{\n    public INotifier CreateNotifier() => new EmailNotifier();\n    public IMessageTemplate CreateTemplate() => new LongTemplate();\n}"
        }
      ]
    },
    {
      id: "builder",
      depth: "short",
      title: {
        en: "Builder: build a SupportTicket step by step",
        hi: "Builder: SupportTicket को step by step बनाना",
        hg: "Builder: SupportTicket ko step by step banana"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 6 created a matching family in one go. <b>Builder</b> creates <b>one complex object in steps</b>. A <code>SupportTicket</code> needs an id, customer and issue, and may also have a priority, an agent and tags. A Day 1 constructor with six parameters would be hard to read; a builder reads like a sentence.</p>",
          hi: "<p>पाठ 6 में मेल खाता family एक साथ बना। <b>Builder</b> <b>एक complex object को steps में</b> बनाता है। <code>SupportTicket</code> को id, customer और issue चाहिए, और priority, agent और tags भी हो सकते हैं। Day 1 वाला छह parameters का constructor पढ़ने में मुश्किल होता; builder एक वाक्य की तरह पढ़ा जाता है।</p>",
          hg: "<p>Lesson 6 mein match karta family ek saath bana. <b>Builder</b> <b>ek complex object ko steps mein</b> banata hai. <code>SupportTicket</code> ko id, customer aur issue chahiye, aur priority, agent aur tags bhi ho sakte hain. Day 1 wala chhah parameters ka constructor padhne mein mushkil hota; builder ek vaakya ki tarah padha jata hai.</p>"
        },
        what: {
          en: "<p>A <b>Builder</b> is a class with chainable methods (each returns <code>this</code>) and a final <code>Build()</code>. <code>Build()</code> checks the rules and returns the finished, ideally <b>immutable</b>, object.</p>",
          hi: "<p><b>Builder</b> ऐसी class है जिसके methods जुड़ते जाते हैं (हर एक <code>this</code> लौटाता है) और आख़िर में <code>Build()</code> होता है। <code>Build()</code> नियम जाँचकर तैयार, बेहतर हो तो <b>immutable</b>, object लौटाता है।</p>",
          hg: "<p><b>Builder</b> aisi class hai jiske methods judte jaate hain (har ek <code>this</code> lautata hai) aur aakhir mein <code>Build()</code> hota hai. <code>Build()</code> niyam jaanchkar taiyaar, behtar ho to <b>immutable</b>, object lautata hai.</p>"
        },
        why: {
          en: "<p>Optional parts stay optional without a pile of constructors. The rules (\"a High priority ticket needs an agent\") are checked once, in <code>Build()</code>, so an invalid ticket can never exist.</p>",
          hi: "<p>Optional हिस्से बिना constructors के ढेर के optional रहते हैं। नियम (\"High priority ticket को agent चाहिए\") एक बार, <code>Build()</code> में जाँचे जाते हैं, इसलिए गलत ticket कभी बन ही नहीं सकता।</p>",
          hg: "<p>Optional hisse bina constructors ke dher ke optional rehte hain. Niyam (\"High priority ticket ko agent chahiye\") ek baar, <code>Build()</code> mein jaanche jaate hain, isliye galat ticket kabhi ban hi nahi sakta.</p>"
        },
        analogy: {
          en: "<p>A tiffin order sheet. You fill it step by step: roti, dal, sabzi, add a sweet, no onion. The sheet can be half-filled. Only at \"confirm\" does the kitchen check it and make the thali; a half-made thali never leaves the kitchen.</p>",
          hi: "<p>Tiffin का order sheet। आप step by step भरते हो: roti, dal, sabzi, मीठा जोड़ो, onion नहीं। Sheet आधी भरी हो सकती है। \"Confirm\" पर ही kitchen उसे जाँचकर thali बनाती है; आधी बनी thali kitchen से बाहर नहीं जाती।</p>",
          hg: "<p>Tiffin ka order sheet. Aap step by step bharte ho: roti, dal, sabzi, meetha jodo, onion nahi. Sheet aadhi bhari ho sakti hai. \"Confirm\" par hi kitchen use jaanchkar thali banati hai; aadhi bani thali kitchen se bahar nahi jaati.</p>"
        },
        lines: [
          {
            code: "public sealed record SupportTicket(int Id, string Customer, string Issue, string Priority, string? Agent, IReadOnlyList<string> Tags);",
            note: {
              en: "The finished product is an immutable <code>record</code>: once built, it never changes. <code>Agent</code> is nullable because it is optional.",
              hi: "तैयार product एक immutable <code>record</code> है: बनने के बाद कभी नहीं बदलता। <code>Agent</code> nullable है क्योंकि वह optional है।",
              hg: "Taiyaar product ek immutable <code>record</code> hai: banne ke baad kabhi nahi badalta. <code>Agent</code> nullable hai kyunki woh optional hai."
            }
          },
          {
            code: "public TicketBuilder WithIssue(string issue) { _issue = issue; return this; }",
            note: {
              en: "A step: store the value and <code>return this</code>. Returning <code>this</code> is what lets calls chain with dots.",
              hi: "एक step: value रखो और <code>return this</code>। <code>this</code> लौटाने से ही calls dot से जुड़ती हैं।",
              hg: "Ek step: value rakho aur <code>return this</code>. <code>this</code> lautane se hi calls dot se judti hain."
            }
          },
          {
            code: "public SupportTicket Build()",
            note: {
              en: "The last step. Nothing is returned until all the rules in this method pass.",
              hi: "आख़िरी step। इस method के सारे नियम पास होने तक कुछ नहीं लौटता।",
              hg: "Aakhri step. Is method ke saare niyam pass hone tak kuch nahi lautata."
            }
          },
          {
            code: "throw new InvalidOperationException($\"Ticket {id} needs an issue\");",
            note: {
              en: "Required parts are checked here, once, in one place. The exception text is the error the caller sees.",
              hi: "ज़रूरी हिस्से यहाँ, एक बार, एक जगह जाँचे जाते हैं। Exception का text ही caller को दिखने वाला error है।",
              hg: "Zaroori hisse yahan, ek baar, ek jagah jaanche jaate hain. Exception ka text hi caller ko dikhne wala error hai."
            }
          },
          {
            code: "return new SupportTicket(id, customer, _issue, _priority, _agent, _tags.ToArray());",
            note: {
              en: "<code>ToArray()</code> copies the tags, so later calls on this builder cannot change a ticket that is already built.",
              hi: "<code>ToArray()</code> tags की copy बनाता है, इसलिए इस builder पर बाद की calls बन चुके ticket को नहीं बदल सकतीं।",
              hg: "<code>ToArray()</code> tags ki copy banata hai, isliye is builder par baad ki calls ban chuke ticket ko nahi badal sakti."
            }
          },
          {
            code: ".AssignTo(\"Meena\")",
            note: {
              en: "The whole chain reads like a sentence: who, what, how urgent, who works on it. Missing optional steps are simply left out.",
              hi: "पूरी chain वाक्य की तरह पढ़ी जाती है: किसका, क्या, कितना ज़रूरी, कौन करेगा। छूटे optional steps बस छोड़ दिए जाते हैं।",
              hg: "Poori chain vaakya ki tarah padhi jati hai: kiska, kya, kitna zaroori, kaun karega. Chhoote optional steps bas chhod diye jaate hain."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Handing out the builder's own list from <code>Build()</code>. Two products would then share state. Copy the data, or make a fresh builder per object.</li><li>Putting the checks in each step instead of in <code>Build()</code>. A rule that links two parts (High priority and agent) can only be checked at the end.</li><li>Writing a builder for a class with three fields. An object initialiser or a <code>record</code> is clearer.</li></ul>",
          hi: "<ul><li><code>Build()</code> से builder की अपनी list बाहर दे देना। तब दो products state share करते हैं। Data की copy दो, या हर object के लिए नया builder लो।</li><li>जाँच हर step में रखना, <code>Build()</code> में नहीं। दो हिस्सों को जोड़ने वाला नियम (High priority और agent) सिर्फ़ आख़िर में जाँचा जा सकता है।</li><li>तीन fields वाली class के लिए builder लिखना। Object initialiser या <code>record</code> ज़्यादा साफ़ है।</li></ul>",
          hg: "<ul><li><code>Build()</code> se builder ki apni list bahar de dena. Tab do products state share karte hain. Data ki copy do, ya har object ke liye naya builder lo.</li><li>Jaanch har step mein rakhna, <code>Build()</code> mein nahi. Do hisson ko jodne wala niyam (High priority aur agent) sirf aakhir mein jaancha ja sakta hai.</li><li>Teen fields wali class ke liye builder likhna. Object initialiser ya <code>record</code> zyada saaf hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a builder for an object with many optional parts, step-by-step set-up, or rules that must pass before it exists. Test data builders are a good Tech Lead habit. For a few values, an object initialiser is simpler: mark must-have properties <code>required</code> (C# 11) and the compiler forces the caller to set them. A builder is worth it when a rule links several parts, like High priority needs an agent.</p>",
          hi: "<p>Builder तब लो जब object में कई optional हिस्से हों, step-by-step set-up हो, या बनने से पहले नियम पास होने हों। Test data builders Tech Lead की अच्छी आदत हैं। कुछ values के लिए object initialiser आसान है: ज़रूरी properties पर <code>required</code> (C# 11) लगाओ, तो compiler caller से उन्हें set करवाता है। Builder तब काम का है जब कोई नियम कई हिस्सों को जोड़े, जैसे High priority को agent चाहिए।</p>",
          hg: "<p>Builder tab lo jab object mein kai optional hisse hon, step-by-step set-up ho, ya banne se pehle niyam pass hone hon. Test data builders Tech Lead ki achhi aadat hain. Kuch values ke liye object initialiser aasan hai: zaroori properties par <code>required</code> (C# 11) lagao, to compiler caller se unhe set karwata hai. Builder tab kaam ka hai jab koi niyam kai hisson ko jode, jaise High priority ko agent chahiye.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a rule to <code>Build()</code>: a ticket may have at most 3 tags. Build ticket 504 for Asha with 4 tags and print the error <code>Ticket 504 has too many tags (max 3)</code>.</p>",
            hi: "<p><code>Build()</code> में नियम जोड़ो: ticket में ज़्यादा से ज़्यादा 3 tags हो सकते हैं। Asha का ticket 504 चार tags के साथ बनाओ और error <code>Ticket 504 has too many tags (max 3)</code> print करो।</p>",
            hg: "<p><code>Build()</code> mein niyam jodo: ticket mein zyada se zyada 3 tags ho sakte hain. Asha ka ticket 504 chaar tags ke saath banao aur error <code>Ticket 504 has too many tags (max 3)</code> print karo.</p>"
          },
          hint: {
            en: "<p>Add one more <code>if</code> before the <code>return</code> in <code>Build()</code> and check <code>_tags.Count</code>.</p>",
            hi: "<p><code>Build()</code> में <code>return</code> से पहले एक और <code>if</code> लगाओ और <code>_tags.Count</code> जाँचो।</p>",
            hg: "<p><code>Build()</code> mein <code>return</code> se pehle ek aur <code>if</code> lagao aur <code>_tags.Count</code> jaancho.</p>"
          },
          solution: {
            caption: {
              en: "Solution: one more rule in Build()",
              hi: "हल: Build() में एक और नियम",
              hg: "Hal: Build() mein ek aur niyam"
            },
            check: "run",
            expected: "Ticket 504 has too many tags (max 3)",
            src: "try\n{\n    new TicketBuilder(504, \"Asha\")\n        .WithIssue(\"Slow internet\")\n        .AddTag(\"network\").AddTag(\"speed\").AddTag(\"wifi\").AddTag(\"router\")\n        .Build();\n}\ncatch (InvalidOperationException ex)\n{\n    Console.WriteLine(ex.Message);\n}\n\npublic sealed record SupportTicket(int Id, string Customer, string Issue, string Priority, string? Agent, IReadOnlyList<string> Tags);\n\npublic sealed class TicketBuilder(int id, string customer)\n{\n    private string? _issue;\n    private string _priority = \"Normal\";\n    private string? _agent;\n    private readonly List<string> _tags = new();\n\n    public TicketBuilder WithIssue(string issue) { _issue = issue; return this; }\n    public TicketBuilder WithPriority(string priority) { _priority = priority; return this; }\n    public TicketBuilder AssignTo(string agent) { _agent = agent; return this; }\n    public TicketBuilder AddTag(string tag) { _tags.Add(tag); return this; }\n\n    public SupportTicket Build()\n    {\n        if (string.IsNullOrWhiteSpace(_issue))\n            throw new InvalidOperationException($\"Ticket {id} needs an issue\");\n        if (_priority == \"High\" && _agent is null)\n            throw new InvalidOperationException($\"High priority ticket {id} needs an agent\");\n        if (_tags.Count > 3)\n            throw new InvalidOperationException($\"Ticket {id} has too many tags (max 3)\");\n\n        // Copy the tags, so later calls on this builder cannot change a finished ticket.\n        return new SupportTicket(id, customer, _issue, _priority, _agent, _tags.ToArray());\n    }\n}"
          }
        },
        quiz: {
          q: {
            en: "Where should a Builder check that the object is valid?",
            hi: "Builder को यह जाँच कहाँ करनी चाहिए कि object valid है?",
            hg: "Builder ko yeh jaanch kahan karni chahiye ki object valid hai?"
          },
          options: [
            {
              en: "In the constructor of the finished product only",
              hi: "सिर्फ़ तैयार product के constructor में",
              hg: "Sirf taiyaar product ke constructor mein"
            },
            {
              en: "In every chainable step, so errors appear immediately",
              hi: "हर chain वाले step में, ताकि error तुरंत दिखे",
              hg: "Har chain wale step mein, taaki error turant dikhe"
            },
            {
              en: "Nowhere; the caller must be careful",
              hi: "कहीं नहीं; caller को खुद ध्यान रखना चाहिए",
              hg: "Kahin nahi; caller ko khud dhyaan rakhna chahiye"
            },
            {
              en: "In <code>Build()</code>, before the finished object is returned",
              hi: "<code>Build()</code> में, तैयार object लौटाने से पहले",
              hg: "<code>Build()</code> mein, taiyaar object lautane se pehle"
            }
          ],
          answer: 3,
          explain: {
            en: "<p><code>Build()</code> is the one place that sees all the parts together, so rules that link several parts (High priority needs an agent) are checked there, once. A half-built ticket is never returned.</p>",
            hi: "<p><code>Build()</code> अकेली जगह है जो सारे हिस्से साथ देखती है, इसलिए कई हिस्सों को जोड़ने वाले नियम (High priority को agent चाहिए) वहीं, एक बार जाँचे जाते हैं। आधा बना ticket कभी नहीं लौटता।</p>",
            hg: "<p><code>Build()</code> akeli jagah hai jo saare hisse saath dekhti hai, isliye kai hisson ko jodne wale niyam (High priority ko agent chahiye) wahin, ek baar jaanche jaate hain. Aadha bana ticket kabhi nahi lautata.</p>"
          }
        },
        recap: {
          en: "<ul><li>Builder = chainable steps (each returns <code>this</code>) then <code>Build()</code>.</li><li><code>Build()</code> validates and returns an immutable object, copying any lists.</li><li>Use it for many optional parts or rules; for three fields a <code>record</code> is enough.</li></ul>",
          hi: "<ul><li>Builder = जुड़ने वाले steps (हर एक <code>this</code> लौटाता है), फिर <code>Build()</code>।</li><li><code>Build()</code> जाँचकर immutable object लौटाता है, lists की copy देकर।</li><li>कई optional हिस्सों या नियमों के लिए लो; तीन fields के लिए <code>record</code> काफ़ी है।</li></ul>",
          hg: "<ul><li>Builder = judne wale steps (har ek <code>this</code> lautata hai), phir <code>Build()</code>.</li><li><code>Build()</code> jaanchkar immutable object lautata hai, lists ki copy dekar.</li><li>Kai optional hisson ya niyamon ke liye lo; teen fields ke liye <code>record</code> kaafi hai.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A fluent TicketBuilder with validation in Build() (runs)",
            hi: "Build() में validation वाला fluent TicketBuilder (run होता है)",
            hg: "Build() mein validation wala fluent TicketBuilder (run hota hai)"
          },
          check: "run",
          expected: "#501 Asha: Router keeps restarting [High] agent=Meena tags=network,hardware\nTicket 502 needs an issue\nHigh priority ticket 503 needs an agent",
          src: "var ticket = new TicketBuilder(501, \"Asha\")\n    .WithIssue(\"Router keeps restarting\")\n    .WithPriority(\"High\")\n    .AssignTo(\"Meena\")\n    .AddTag(\"network\")\n    .AddTag(\"hardware\")\n    .Build();\nConsole.WriteLine($\"#{ticket.Id} {ticket.Customer}: {ticket.Issue} [{ticket.Priority}] agent={ticket.Agent ?? \"unassigned\"} tags={string.Join(\",\", ticket.Tags)}\");\n\nBuildOrExplain(new TicketBuilder(502, \"Ravi\"));\nBuildOrExplain(new TicketBuilder(503, \"Neha\").WithIssue(\"Refund pending\").WithPriority(\"High\"));\n\nstatic void BuildOrExplain(TicketBuilder builder)\n{\n    try\n    {\n        builder.Build();\n    }\n    catch (InvalidOperationException ex)\n    {\n        Console.WriteLine(ex.Message);\n    }\n}\n\npublic sealed record SupportTicket(int Id, string Customer, string Issue, string Priority, string? Agent, IReadOnlyList<string> Tags);\n\npublic sealed class TicketBuilder(int id, string customer)\n{\n    private string? _issue;\n    private string _priority = \"Normal\";\n    private string? _agent;\n    private readonly List<string> _tags = new();\n\n    public TicketBuilder WithIssue(string issue) { _issue = issue; return this; }\n    public TicketBuilder WithPriority(string priority) { _priority = priority; return this; }\n    public TicketBuilder AssignTo(string agent) { _agent = agent; return this; }\n    public TicketBuilder AddTag(string tag) { _tags.Add(tag); return this; }\n\n    public SupportTicket Build()\n    {\n        if (string.IsNullOrWhiteSpace(_issue))\n            throw new InvalidOperationException($\"Ticket {id} needs an issue\");\n        if (_priority == \"High\" && _agent is null)\n            throw new InvalidOperationException($\"High priority ticket {id} needs an agent\");\n\n        // Copy the tags, so later calls on this builder cannot change a finished ticket.\n        return new SupportTicket(id, customer, _issue, _priority, _agent, _tags.ToArray());\n    }\n}"
        }
      ]
    },
    {
      id: "singleton-variants",
      depth: "detailed",
      title: {
        en: "Singleton variants: naive, lock, double-checked",
        hi: "Singleton के variants: naive, lock, double-checked",
        hg: "Singleton ke variants: naive, lock, double-checked"
      },
      body: {
        en: "<p><b>Analogy — one ATM cabin and a queue:</b> if the guard checks \"is the cabin empty?\" and two people both hear \"yes\" at the same instant, both walk in. Locking the door fixes it, but making everyone wait at the door even after the cabin is built is wasteful.</p>\n<ul>\n<li><b>Naive</b> (<code>_instance ??= new()</code>): two threads can both see <code>null</code> and create two objects. Not thread-safe.</li>\n<li><b>lock on every call:</b> correct, but each read pays for the lock. Fine when the property is rarely read.</li>\n<li><b>Double-checked locking:</b> check without a lock, lock only when <code>null</code>, check again inside. Use a <code>volatile</code> field (recommended). It is easy to get wrong, so most teams skip it.</li>\n<li><b>static readonly / static property initialiser:</b> the runtime runs the type initialiser exactly once and thread-safely. Shortest correct code. Without an explicit static constructor the class is marked <code>beforefieldinit</code>, so the runtime may run it at any point before the first static <i>field</i> access — earlier or lazier than you expect; usually harmless, but do not rely on the exact moment. (Day 1 covers static constructors.)</li>\n</ul>\n<p><b>When to use / when not:</b> in a normal app, none of these three: use the simple versions from lesson 2, or DI from lesson 3. Know them for interviews and for reading older code. Use double-checked locking only if you can explain why the field is <code>volatile</code>.</p>",
        hi: "<p><b>Analogy — एक ATM cabin और queue:</b> अगर guard पूछे \"cabin खाली है?\" और दो लोग एक ही पल में \"हाँ\" सुन लें तो दोनों अंदर घुस जाते हैं। दरवाज़ा lock करने से ठीक होता है, पर cabin बन जाने के बाद भी सबको दरवाज़े पर रोकना फ़ालतू है।</p>\n<ul>\n<li><b>Naive</b> (<code>_instance ??= new()</code>): दो threads दोनों को <code>null</code> दिख सकता है और दो objects बन सकते हैं। Thread-safe नहीं।</li>\n<li><b>हर call पर lock:</b> सही है, पर हर read lock का दाम देता है। जब property कम पढ़ी जाए तब ठीक।</li>\n<li><b>Double-checked locking:</b> बिना lock check करो, <code>null</code> हो तभी lock लो, अंदर फिर check करो। इसमें <code>volatile</code> field रखना recommended है। गलती आसान है, इसलिए ज़्यादातर teams इसे छोड़ देती हैं।</li>\n<li><b>static readonly / static property initialiser:</b> runtime type initialiser ठीक एक बार और thread-safe चलाता है। सबसे छोटा सही code। Explicit static constructor न हो तो class <code>beforefieldinit</code> होती है, यानी runtime उसे पहले static <i>field</i> access से पहले किसी भी समय चला सकता है — उम्मीद से जल्दी या देर से; आम तौर पर बेअसर, पर सही समय पर भरोसा मत करो। (Static constructors Day 1 में हैं।)</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> सामान्य app में इन तीनों में से कोई नहीं: पाठ 2 के आसान versions या पाठ 3 का DI लो। Interviews और पुराना code पढ़ने के लिए इन्हें जानो। Double-checked locking तभी जब समझा सको कि field <code>volatile</code> क्यों है।</p>",
        hg: "<p><b>Analogy — ek ATM cabin aur queue:</b> agar guard poochhe \"cabin khaali hai?\" aur do log ek hi pal mein \"haan\" sun lein to dono andar ghus jaate hain. Darwaza lock karne se theek hota hai, par cabin ban jaane ke baad bhi sabko darwaze par rokna faltu hai.</p>\n<ul>\n<li><b>Naive</b> (<code>_instance ??= new()</code>): do threads dono ko <code>null</code> dikh sakta hai aur do objects ban sakte hain. Thread-safe nahi.</li>\n<li><b>Har call par lock:</b> sahi hai, par har read lock ka daam deta hai. Jab property kam padhi jaaye tab theek.</li>\n<li><b>Double-checked locking:</b> bina lock check karo, <code>null</code> ho tabhi lock lo, andar phir check karo. Isme <code>volatile</code> field rakhna recommended hai. Galti aasan hai, isliye zyadatar teams ise chhod deti hain.</li>\n<li><b>static readonly / static property initialiser:</b> runtime type initialiser theek ek baar aur thread-safe chalata hai. Sabse chhota sahi code. Explicit static constructor na ho to class <code>beforefieldinit</code> hoti hai, yaani runtime use pehle static <i>field</i> access se pehle kisi bhi samay chala sakta hai — ummeed se jaldi ya der se; aam taur par beasar, par sahi samay par bharosa mat karo. (Static constructors Day 1 mein hain.)</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> saamaanya app mein in teeno mein se koi nahi: lesson 2 ke aasan versions ya lesson 3 ka DI lo. Interviews aur purana code padhne ke liye inhe jaano. Double-checked locking tabhi jab samjha sako ki field <code>volatile</code> kyun hai.</p>"
      },
      code: [
        {
          caption: {
            en: "The three classic hand-written versions (compiles)",
            hi: "तीन classic hand-written versions (compile होता है)",
            hg: "Teen classic hand-written versions (compile hota hai)"
          },
          check: "compile",
          src: "// 1) Naive: NOT thread-safe - two threads can both see null.\npublic sealed class NaiveSingleton\n{\n    private static NaiveSingleton? _instance;\n    private NaiveSingleton() { }\n    public static NaiveSingleton Instance => _instance ??= new NaiveSingleton();\n}\n\n// 2) lock on every call: safe, but every read pays for the lock.\npublic sealed class LockSingleton\n{\n    private static readonly object Gate = new();\n    private static LockSingleton? _instance;\n    private LockSingleton() { }\n\n    public static LockSingleton Instance\n    {\n        get\n        {\n            lock (Gate)\n            {\n                return _instance ??= new LockSingleton();\n            }\n        }\n    }\n}\n\n// 3) Double-checked locking: fast path without a lock. Mark the field volatile (recommended).\npublic sealed class DoubleCheckedSingleton\n{\n    private static readonly object Gate = new();\n    private static volatile DoubleCheckedSingleton? _instance;\n    private DoubleCheckedSingleton() { }\n\n    public static DoubleCheckedSingleton Instance\n    {\n        get\n        {\n            if (_instance is null)\n            {\n                lock (Gate)\n                {\n                    _instance ??= new DoubleCheckedSingleton();\n                }\n            }\n            return _instance;\n        }\n    }\n}"
        }
      ]
    },
    {
      id: "factories-in-dotnet",
      depth: "detailed",
      title: {
        en: "Factories compared, and where .NET uses them",
        hi: "Factories की तुलना, और .NET में उनका use",
        hg: "Factories ki tulna, aur .NET mein unka use"
      },
      body: {
        en: "<ul>\n<li><b>Quick tell:</b> one product + subclass decides → Factory Method. A matching family → Abstract Factory. One static switch → Simple Factory.</li>\n<li><b>In .NET:</b> <code>DbProviderFactory</code> (creates connection, command, parameter for one database provider) is a textbook Abstract Factory; <code>ILoggerFactory</code> and <code>IHttpClientFactory</code> are factories you inject; <code>Encoding.GetEncoding(name)</code> behaves like a Simple Factory.</li>\n<li><b>TL angle:</b> with DI, a factory interface is needed mainly when the choice depends on a <i>runtime value</i> (a channel name in the request). If the choice is fixed at start-up, just register the right implementation. Keyed services (last section, \"TL view\") cover many runtime-choice cases.</li>\n</ul>\n<p><b>When to use / when not:</b> before writing your own factory, check whether .NET already has one (the list above). Write one yourself when creation needs set-up the caller should not know, such as a connection string or retry settings.</p>",
        hi: "<ul>\n<li><b>जल्दी पहचान:</b> एक product + subclass तय करे → Factory Method। मेल खाता family → Abstract Factory। एक static switch → Simple Factory।</li>\n<li><b>.NET में:</b> <code>DbProviderFactory</code> (एक database provider के लिए connection, command, parameter बनाता है) textbook Abstract Factory है; <code>ILoggerFactory</code> और <code>IHttpClientFactory</code> ऐसी factories हैं जिन्हें आप inject करते हो; <code>Encoding.GetEncoding(name)</code> Simple Factory जैसा चलता है।</li>\n<li><b>TL angle:</b> DI के साथ factory interface मुख्य रूप से तब चाहिए जब choice <i>runtime value</i> पर निर्भर हो (request में channel का नाम)। अगर choice start-up पर तय है तो सही implementation register कर दो। Keyed services (आख़िरी section, \"TL view\") कई runtime-choice cases संभाल लेते हैं।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> अपनी factory लिखने से पहले देखो कि .NET में पहले से है या नहीं (ऊपर की list)। खुद तब लिखो जब creation में ऐसा set-up हो जो caller को पता नहीं होना चाहिए, जैसे connection string या retry settings।</p>",
        hg: "<ul>\n<li><b>Jaldi pehchaan:</b> ek product + subclass tay kare → Factory Method. Match karta family → Abstract Factory. Ek static switch → Simple Factory.</li>\n<li><b>.NET mein:</b> <code>DbProviderFactory</code> (ek database provider ke liye connection, command, parameter banata hai) textbook Abstract Factory hai; <code>ILoggerFactory</code> aur <code>IHttpClientFactory</code> aisi factories hain jinhe aap inject karte ho; <code>Encoding.GetEncoding(name)</code> Simple Factory jaisa chalta hai.</li>\n<li><b>TL angle:</b> DI ke saath factory interface mukhya roop se tab chahiye jab choice <i>runtime value</i> par nirbhar ho (request mein channel ka naam). Agar choice start-up par tay hai to sahi implementation register kar do. Keyed services (aakhri section, \"TL view\") kai runtime-choice cases sambhaal lete hain.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> apni factory likhne se pehle dekho ki .NET mein pehle se hai ya nahi (upar ki list). Khud tab likho jab creation mein aisa set-up ho jo caller ko pata nahi hona chahiye, jaise connection string ya retry settings.</p>"
      }
    },
    {
      id: "builders-in-dotnet",
      depth: "detailed",
      title: {
        en: "Builders you already use in .NET",
        hi: ".NET में जो Builders आप पहले से use करते हो",
        hg: ".NET mein jo Builders aap pehle se use karte ho"
      },
      body: {
        en: "<ul>\n<li><b>In .NET:</b> <code>WebApplication.CreateBuilder(args)</code> → configure → <code>builder.Build()</code>; <code>Host.CreateApplicationBuilder</code> / <code>HostBuilder</code>; <code>StringBuilder</code> (builds a string); <code>UriBuilder</code>; <code>ConfigurationBuilder</code>; <code>DbContextOptionsBuilder</code>.</li>\n</ul>\n<p><b>When to use / when not:</b> you mostly <i>use</i> these builders rather than write them. Notice the shared shape: configure first, then <code>Build()</code> returns a finished object and the set-up is frozen (adding a service after <code>builder.Build()</code> throws <code>InvalidOperationException</code>). Give your own builders the same shape.</p>",
        hi: "<ul>\n<li><b>.NET में:</b> <code>WebApplication.CreateBuilder(args)</code> → configure → <code>builder.Build()</code>; <code>Host.CreateApplicationBuilder</code> / <code>HostBuilder</code>; <code>StringBuilder</code> (string बनाता है); <code>UriBuilder</code>; <code>ConfigurationBuilder</code>; <code>DbContextOptionsBuilder</code>।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> ये builders ज़्यादातर आप <i>use</i> करते हो, लिखते नहीं। इनका एक जैसा ढाँचा देखो: पहले configure, फिर <code>Build()</code> तैयार object लौटाता है और set-up freeze हो जाता है (<code>builder.Build()</code> के बाद service जोड़ने पर <code>InvalidOperationException</code> आता है)। अपने builders को भी यही ढाँचा दो।</p>",
        hg: "<ul>\n<li><b>.NET mein:</b> <code>WebApplication.CreateBuilder(args)</code> → configure → <code>builder.Build()</code>; <code>Host.CreateApplicationBuilder</code> / <code>HostBuilder</code>; <code>StringBuilder</code> (string banata hai); <code>UriBuilder</code>; <code>ConfigurationBuilder</code>; <code>DbContextOptionsBuilder</code>.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> yeh builders zyadatar aap <i>use</i> karte ho, likhte nahi. Inka ek jaisa dhaancha dekho: pehle configure, phir <code>Build()</code> taiyaar object lautata hai aur set-up freeze ho jata hai (<code>builder.Build()</code> ke baad service jodne par <code>InvalidOperationException</code> aata hai). Apne builders ko bhi yahi dhaancha do.</p>"
      },
      code: [
        {
          caption: {
            en: "Builders you already use: StringBuilder and UriBuilder (runs)",
            hi: "Builders जो आप पहले से use करते हो: StringBuilder और UriBuilder (run होता है)",
            hg: "Builders jo aap pehle se use karte ho: StringBuilder aur UriBuilder (run hota hai)"
          },
          check: "run",
          expected: "Order 42 shipped\nhttps://api.example.com/orders?page=2",
          src: "using System.Text;\n\nvar text = new StringBuilder()\n    .Append(\"Order \")\n    .Append(42)\n    .Append(\" shipped\")\n    .ToString();\nConsole.WriteLine(text);\n\nvar uri = new UriBuilder(\"https\", \"api.example.com\")\n{\n    Path = \"orders\",\n    Query = \"page=2\"\n}.Uri;\nConsole.WriteLine(uri);"
        },
        {
          caption: {
            en: "WebApplication.CreateBuilder: configure, then Build() (runs)",
            hi: "WebApplication.CreateBuilder: configure करो, फिर Build() (run होता है)",
            hg: "WebApplication.CreateBuilder: configure karo, phir Build() (run hota hai)"
          },
          check: "run",
          frameworks: [
            "aspnetcore"
          ],
          expected: "Hello from the builder",
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder(args);\nbuilder.Logging.ClearProviders();\nbuilder.Services.AddSingleton<Greeter>();   // configuration phase: the app does not exist yet\n\nvar app = builder.Build();                  // Build() freezes the service collection\nConsole.WriteLine(app.Services.GetRequiredService<Greeter>().Hello());\n\npublic sealed class Greeter\n{\n    public string Hello() => \"Hello from the builder\";\n}"
        }
      ]
    },
    {
      id: "prototype-with",
      depth: "detailed",
      title: {
        en: "Prototype: copy an object with a record <code>with</code>",
        hi: "Prototype: record के <code>with</code> से object की copy",
        hg: "Prototype: record ke <code>with</code> se object ki copy"
      },
      body: {
        en: "<p><b>Analogy — a photocopy of a filled form:</b> you copy yesterday's form and correct one field with a pen, instead of filling everything again.</p>\n<ul>\n<li><b>Prototype</b> creates a new object by copying an existing one, then changing what differs.</li>\n<li>In C# this is mostly a <code>record</code> and a <code>with</code> expression. It copies all properties and lets you override some.</li>\n<li><b>It is a shallow copy.</b> A list or another object inside is shared, not copied. Replace it too if the copy must be independent.</li>\n<li>Avoid <code>ICloneable</code>: it does not say whether the copy is shallow or deep.</li>\n</ul>\n<p><b>When to use / when not:</b> use it for templates, such as a recurring ticket that is the same every week apart from the date. Do not use it when the object is cheap to build from scratch, and remember that a shared mutable list is a classic bug.</p>",
        hi: "<p><b>Analogy — भरे हुए form की photocopy:</b> कल का form copy करो और एक field pen से सुधारो, सब कुछ फिर से भरने की जगह।</p>\n<ul>\n<li><b>Prototype</b> मौजूदा object की copy से नया object बनाता है, फिर जो अलग है वह बदलता है।</li>\n<li>C# में यह ज़्यादातर <code>record</code> और <code>with</code> expression है। यह सारी properties copy करता है और कुछ को बदलने देता है।</li>\n<li><b>यह shallow copy है।</b> अंदर की list या दूसरा object share होता है, copy नहीं होता। Copy को अलग रखना हो तो उसे भी बदलो।</li>\n<li><code>ICloneable</code> से बचो: वह नहीं बताता कि copy shallow है या deep।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> templates के लिए लो, जैसे हर हफ़्ते का ticket जो तारीख़ छोड़कर वही रहता है। जब object शुरू से बनाना सस्ता हो तब मत लो, और याद रखो कि share हुई mutable list एक classic bug है।</p>",
        hg: "<p><b>Analogy — bhare hue form ki photocopy:</b> kal ka form copy karo aur ek field pen se sudharo, sab kuch phir se bharne ki jagah.</p>\n<ul>\n<li><b>Prototype</b> maujood object ki copy se naya object banata hai, phir jo alag hai woh badalta hai.</li>\n<li>C# mein yeh zyadatar <code>record</code> aur <code>with</code> expression hai. Yeh saari properties copy karta hai aur kuch ko badalne deta hai.</li>\n<li><b>Yeh shallow copy hai.</b> Andar ki list ya doosra object share hota hai, copy nahi hota. Copy ko alag rakhna ho to use bhi badlo.</li>\n<li><code>ICloneable</code> se bacho: woh nahi batata ki copy shallow hai ya deep.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> templates ke liye lo, jaise har hafte ka ticket jo taareekh chhodkar wahi rehta hai. Jab object shuru se banana sasta ho tab mat lo, aur yaad rakho ki share hui mutable list ek classic bug hai.</p>"
      },
      code: [
        {
          caption: {
            en: "Copying with a record <code>with</code>: shallow by default (runs)",
            hi: "Record के <code>with</code> से copy: default में shallow (run होता है)",
            hg: "Record ke <code>with</code> se copy: default mein shallow (run hota hai)"
          },
          check: "run",
          expected: "Router down (Block B) / High\nTrue\nFalse",
          src: "var template = new TicketTemplate(\"Router down\", \"High\", new List<string> { \"network\" });\n\n// 'with' makes a shallow copy and lets you change some properties.\nvar copy = template with { Issue = \"Router down (Block B)\" };\nConsole.WriteLine($\"{copy.Issue} / {copy.Priority}\");\nConsole.WriteLine(ReferenceEquals(template.Tags, copy.Tags));   // True: the list is shared\n\n// For an independent copy, replace the list as well.\nvar safe = template with { Tags = new List<string>(template.Tags) };\nConsole.WriteLine(ReferenceEquals(template.Tags, safe.Tags));   // False\n\npublic sealed record TicketTemplate(string Issue, string Priority, List<string> Tags);"
        }
      ]
    },
    {
      id: "di-replaces-patterns",
      depth: "detailed",
      title: {
        en: "TL view: when DI replaces Singleton and Factory",
        hi: "TL view: DI कब Singleton और Factory की जगह लेता है",
        hg: "TL view: DI kab Singleton aur Factory ki jagah leta hai"
      },
      body: {
        en: "<p><b>Analogy — a restaurant with a head waiter:</b> you do not walk into the kitchen to find the cook; the head waiter (the container) brings the right dish. You only keep a private chef (a hand-written factory) when the order depends on something the waiter cannot know in advance.</p>\n<ul>\n<li><b>Choose a named implementation → keyed services (.NET 8):</b> register each implementation under a key (<code>AddKeyedSingleton&lt;IPayment, UpiPayment&gt;(\"upi\")</code>). <i>Fixed</i> choice: put <code>[FromKeyedServices(\"upi\")]</code> on the constructor parameter. <i>Runtime</i> choice: register a <code>Func&lt;string, T&gt;</code> over <code>GetRequiredKeyedService</code>.</li>\n<li><b>Several implementations of one interface:</b> inject <code>IEnumerable&lt;IPayment&gt;</code> and pick one — fine for a few, a <code>switch</code> in disguise for many.</li>\n<li><b>Create when needed, repeatedly → <code>Func&lt;T&gt;</code> or <code>IServiceScopeFactory</code>:</b> a delegate you register yourself (the built-in container does not supply <code>Func&lt;T&gt;</code> automatically).</li>\n<li><b>Avoid:</b> injecting <code>IServiceProvider</code> into business classes. That is the <b>Service Locator</b> anti-pattern: it hides what the class needs. Keep lookups inside a small factory or the composition root.</li>\n</ul>\n<p><b>When to use / when not:</b> use DI first. Write a hand-made factory when creation needs runtime data (an id, a channel name) plus logic the container cannot express. Do not wrap every <code>new</code> in a factory \"just in case\" — that is the over-engineering Day 8 warned about.</p>",
        hi: "<p><b>Analogy — head waiter वाला restaurant:</b> आप cook ढूँढने kitchen में नहीं जाते; head waiter (container) सही dish ले आता है। निजी chef (hand-written factory) तभी रखो जब order ऐसी चीज़ पर निर्भर हो जो waiter को पहले से पता नहीं हो सकती।</p>\n<ul>\n<li><b>नाम से implementation चुनना → keyed services (.NET 8):</b> हर implementation को key से register करो (<code>AddKeyedSingleton&lt;IPayment, UpiPayment&gt;(\"upi\")</code>)। <i>Fixed</i> choice: constructor parameter पर <code>[FromKeyedServices(\"upi\")]</code> लगाओ। <i>Runtime</i> choice: <code>GetRequiredKeyedService</code> पर <code>Func&lt;string, T&gt;</code> register करो।</li>\n<li><b>एक interface के कई implementations:</b> <code>IEnumerable&lt;IPayment&gt;</code> inject करके एक चुनो — कुछ के लिए ठीक, ज़्यादा हों तो भेस बदला हुआ <code>switch</code>।</li>\n<li><b>ज़रूरत पर बार-बार बनाना → <code>Func&lt;T&gt;</code> या <code>IServiceScopeFactory</code>:</b> ऐसा delegate जो आप खुद register करते हो (built-in container <code>Func&lt;T&gt;</code> अपने-आप नहीं देता)।</li>\n<li><b>बचो:</b> business classes में <code>IServiceProvider</code> inject करने से। यह <b>Service Locator</b> anti-pattern है: यह छुपा देता है कि class को क्या चाहिए। Lookups को छोटी factory या composition root में रखो।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> पहले DI लो। Hand-made factory तब लिखो जब creation को runtime data (id, channel नाम) और ऐसी logic चाहिए जो container express न कर सके। हर <code>new</code> को \"just in case\" factory में मत लपेटो — यही over-engineering है जिसकी चेतावनी Day 8 ने दी थी।</p>",
        hg: "<p><b>Analogy — head waiter wala restaurant:</b> aap cook dhoondhne kitchen mein nahi jaate; head waiter (container) sahi dish le aata hai. Niji chef (hand-written factory) tabhi rakho jab order aisi cheez par nirbhar ho jo waiter ko pehle se pata nahi ho sakti.</p>\n<ul>\n<li><b>Naam se implementation chunna → keyed services (.NET 8):</b> har implementation ko key se register karo (<code>AddKeyedSingleton&lt;IPayment, UpiPayment&gt;(\"upi\")</code>). <i>Fixed</i> choice: constructor parameter par <code>[FromKeyedServices(\"upi\")]</code> lagao. <i>Runtime</i> choice: <code>GetRequiredKeyedService</code> par <code>Func&lt;string, T&gt;</code> register karo.</li>\n<li><b>Ek interface ke kai implementations:</b> <code>IEnumerable&lt;IPayment&gt;</code> inject karke ek chuno — kuch ke liye theek, zyada hon to bhes badla hua <code>switch</code>.</li>\n<li><b>Zaroorat par baar-baar banana → <code>Func&lt;T&gt;</code> ya <code>IServiceScopeFactory</code>:</b> aisa delegate jo aap khud register karte ho (built-in container <code>Func&lt;T&gt;</code> apne-aap nahi deta).</li>\n<li><b>Bacho:</b> business classes mein <code>IServiceProvider</code> inject karne se. Yeh <b>Service Locator</b> anti-pattern hai: yeh chhupa deta hai ki class ko kya chahiye. Lookups ko chhoti factory ya composition root mein rakho.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> pehle DI lo. Hand-made factory tab likho jab creation ko runtime data (id, channel naam) aur aisi logic chahiye jo container express na kar sake. Har <code>new</code> ko \"just in case\" factory mein mat lapeto — yehi over-engineering hai jiski chetavni Day 8 ne di thi.</p>"
      },
      code: [
        {
          caption: {
            en: "Keyed services and a Func&lt;string, T&gt; factory (runs)",
            hi: "Keyed services और Func&lt;string, T&gt; factory (run होता है)",
            hg: "Keyed services aur Func&lt;string, T&gt; factory (run hota hai)"
          },
          check: "run",
          packages: [
            "Microsoft.Extensions.DependencyInjection"
          ],
          expected: "UPI paid 500\nCard paid 700\nUPI paid 100",
          src: "using Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddKeyedSingleton<IPayment, UpiPayment>(\"upi\");\nservices.AddKeyedSingleton<IPayment, CardPayment>(\"card\");\n\n// Runtime choice: a tiny delegate over the container (the container does not supply Func<,> by itself).\nservices.AddSingleton<Func<string, IPayment>>(sp => key => sp.GetRequiredKeyedService<IPayment>(key));\n\n// Fixed choice: the key is written on the constructor parameter.\nservices.AddTransient<UpiCheckout>();\n\nusing var provider = services.BuildServiceProvider();\n\nvar pick = provider.GetRequiredService<Func<string, IPayment>>();\nConsole.WriteLine(pick(\"upi\").Pay(500));\nConsole.WriteLine(pick(\"card\").Pay(700));\nConsole.WriteLine(provider.GetRequiredService<UpiCheckout>().Run(100));\n\npublic interface IPayment { string Pay(decimal amount); }\npublic sealed class UpiPayment : IPayment { public string Pay(decimal amount) => $\"UPI paid {amount}\"; }\npublic sealed class CardPayment : IPayment { public string Pay(decimal amount) => $\"Card paid {amount}\"; }\n\npublic sealed class UpiCheckout([FromKeyedServices(\"upi\")] IPayment payment)\n{\n    public string Run(decimal amount) => payment.Pay(amount);\n}"
        }
      ]
    }
  ],
  qa: [
    {
      id: "what-are-creational-patterns",
      depth: "short",
      q: "What are creational design patterns and why do we use them?",
      answer: "They hide how objects are created, so callers depend on abstractions instead of concrete classes. The classics are Singleton, Factory Method, Abstract Factory, Builder and Prototype.",
      meaning: {
        hi: "ये object बनाने का तरीका छुपाते हैं, ताकि callers concrete classes की जगह abstractions पर depend करें। Classics हैं Singleton, Factory Method, Abstract Factory, Builder और Prototype।",
        hg: "Ye object banane ka tareeka chhupate hain, taaki callers concrete classes ki jagah abstractions par depend karein. Classics hain Singleton, Factory Method, Abstract Factory, Builder aur Prototype."
      },
      explain: {
        en: "<ul>\n<li>Scattered <code>new ConcreteClass()</code> couples code to that class and makes tests and changes harder (Day 8 DIP).</li>\n<li>A creational pattern gives creation one named home: change it there once.</li>\n<li>Gang of Four split patterns into creational, structural and behavioral — Day 10 covers the other two.</li>\n</ul>\n<p><b>TL angle:</b> in modern .NET the DI container is the default creational mechanism; hand-written patterns are for what the container cannot express.</p>\n<p>Follow-up: \"Which one have you used in production?\" — pick a real one (Builder via <code>WebApplication.CreateBuilder</code>, factory via <code>IHttpClientFactory</code>) and say why.</p>",
        hi: "<ul>\n<li>बिखरा हुआ <code>new ConcreteClass()</code> code को उस class से जोड़ देता है और tests व बदलाव मुश्किल कर देता है (Day 8 DIP)।</li>\n<li>Creational pattern creation को एक नाम वाला घर देता है: वहीं एक बार बदलो।</li>\n<li>Gang of Four ने patterns को creational, structural और behavioral में बाँटा — बाकी दो Day 10 में।</li>\n</ul>\n<p><b>TL angle:</b> modern .NET में DI container default creational mechanism है; hand-written patterns उसके लिए हैं जो container express नहीं कर सकता।</p>\n<p>Follow-up: \"Production में कौन-सा use किया है?\" — कोई असली चुनो (<code>WebApplication.CreateBuilder</code> से Builder, <code>IHttpClientFactory</code> से factory) और वजह बताओ।</p>",
        hg: "<ul>\n<li>Bikhra hua <code>new ConcreteClass()</code> code ko us class se jod deta hai aur tests va badlaav mushkil kar deta hai (Day 8 DIP).</li>\n<li>Creational pattern creation ko ek naam wala ghar deta hai: wahin ek baar badlo.</li>\n<li>Gang of Four ne patterns ko creational, structural aur behavioral mein baanta — baaki do Day 10 mein.</li>\n</ul>\n<p><b>TL angle:</b> modern .NET mein DI container default creational mechanism hai; hand-written patterns uske liye hain jo container express nahi kar sakta.</p>\n<p>Follow-up: \"Production mein kaun-sa use kiya hai?\" — koi asli chuno (<code>WebApplication.CreateBuilder</code> se Builder, <code>IHttpClientFactory</code> se factory) aur wajah batao.</p>"
      }
    },
    {
      id: "singleton-controversy",
      depth: "short",
      q: "What is the Singleton pattern, and why do many people call it an anti-pattern?",
      answer: "Singleton guarantees one instance with a global access point. It is criticised as hidden global state: it hides dependencies, makes tests share state, and needs thread-safety care.",
      meaning: {
        hi: "Singleton एक instance और एक global access point की गारंटी देता है। इसकी आलोचना इसलिए होती है कि यह छुपा global state है: dependencies छुपाता है, tests में state share होती है, और thread-safety संभालनी पड़ती है।",
        hg: "Singleton ek instance aur ek global access point ki guarantee deta hai. Iski aalochna isliye hoti hai ki yeh chhupa global state hai: dependencies chhupata hai, tests mein state share hoti hai, aur thread-safety sambhaalni padti hai."
      },
      explain: {
        en: "<ul>\n<li>The idea is fine: one cache, one configuration snapshot. The <i>hand-written global <code>Instance</code></i> is the problem.</li>\n<li>Callers use it without declaring it, so the constructor lies about what the class needs.</li>\n<li>Shared mutable state means locks, and tests leak state into each other.</li>\n<li>Fix: keep \"one instance\" but get it by injection (<code>AddSingleton</code>) — the lifetime is still single, the global access goes away.</li>\n</ul>\n<p>Follow-up: \"So is Singleton always bad?\" — no; a stateless, immutable or thread-safe singleton (<code>TimeProvider.System</code>, <code>ArrayPool&lt;T&gt;.Shared</code>) is harmless. The risk is <i>mutable</i> shared state.</p>",
        hi: "<ul>\n<li>Idea ठीक है: एक cache, एक configuration snapshot। समस्या <i>हाथ से लिखा global <code>Instance</code></i> है।</li>\n<li>Callers इसे बिना declare किए use करते हैं, इसलिए constructor झूठ बोलता है कि class को क्या चाहिए।</li>\n<li>Shared mutable state का मतलब locks, और tests एक-दूसरे में state leak करते हैं।</li>\n<li>Fix: \"एक instance\" रखो पर injection (<code>AddSingleton</code>) से लो — lifetime अब भी एक, global access गया।</li>\n</ul>\n<p>Follow-up: \"तो क्या Singleton हमेशा बुरा है?\" — नहीं; stateless, immutable या thread-safe singleton (<code>TimeProvider.System</code>, <code>ArrayPool&lt;T&gt;.Shared</code>) नुकसान नहीं करता। ख़तरा <i>mutable</i> shared state का है।</p>",
        hg: "<ul>\n<li>Idea theek hai: ek cache, ek configuration snapshot. Samasya <i>haath se likha global <code>Instance</code></i> hai.</li>\n<li>Callers ise bina declare kiye use karte hain, isliye constructor jhooth bolta hai ki class ko kya chahiye.</li>\n<li>Shared mutable state ka matlab locks, aur tests ek-doosre mein state leak karte hain.</li>\n<li>Fix: \"ek instance\" rakho par injection (<code>AddSingleton</code>) se lo — lifetime ab bhi ek, global access gaya.</li>\n</ul>\n<p>Follow-up: \"To kya Singleton hamesha bura hai?\" — nahi; stateless, immutable ya thread-safe singleton (<code>TimeProvider.System</code>, <code>ArrayPool&lt;T&gt;.Shared</code>) nuksaan nahi karta. Khatra <i>mutable</i> shared state ka hai.</p>"
      }
    },
    {
      id: "thread-safe-singleton",
      depth: "short",
      q: "How do you make a Singleton thread-safe in C#?",
      answer: "Simplest is a static readonly field or property initialiser; the runtime runs it once, thread-safely. For expensive start-up use Lazy&lt;T&gt;. Double-checked locking should use a volatile field.",
      meaning: {
        hi: "सबसे आसान है static readonly field या property initialiser; runtime उसे एक बार और thread-safe चलाता है। महँगे start-up के लिए Lazy&lt;T&gt;। Double-checked locking में volatile field रखना चाहिए।",
        hg: "Sabse aasan hai static readonly field ya property initialiser; runtime use ek baar aur thread-safe chalata hai. Mehnge start-up ke liye Lazy&lt;T&gt;. Double-checked locking mein volatile field rakhna chahiye."
      },
      explain: {
        en: "<ul>\n<li><b>static readonly / static property initialiser</b> — the CLR guarantees the type initialiser runs once; no lock code to write.</li>\n<li><b>Lazy&lt;T&gt;</b> — create on first <code>.Value</code>; default mode takes a lock so the factory runs once.</li>\n<li><b>lock on every call</b> — correct but pays on each read.</li>\n<li><b>Double-checked locking</b> — fast but fragile; use <code>volatile</code>.</li>\n<li><b>Naive null-check</b> — not thread-safe; two threads can create two objects.</li>\n</ul>\n<p><b>TL angle:</b> in an ASP.NET Core app the real answer is \"I let DI own it with <code>AddSingleton</code>\"; the container creates it once and resolves it thread-safely. The instance itself must still be thread-safe to <i>use</i> — creating it safely does not make its fields safe.</p>\n<p>Follow-up: \"Is a thread-safe singleton enough?\" — no, its mutable state needs protection too.</p>",
        hi: "<ul>\n<li><b>static readonly / static property initialiser</b> — CLR गारंटी देता है कि type initialiser एक बार चलता है; lock का code नहीं लिखना।</li>\n<li><b>Lazy&lt;T&gt;</b> — पहले <code>.Value</code> पर बनाओ; default mode lock लेता है ताकि factory एक बार चले।</li>\n<li><b>हर call पर lock</b> — सही, पर हर read पर दाम।</li>\n<li><b>Double-checked locking</b> — तेज़ पर नाज़ुक; <code>volatile</code> रखो।</li>\n<li><b>Naive null-check</b> — thread-safe नहीं; दो threads दो objects बना सकते हैं।</li>\n</ul>\n<p><b>TL angle:</b> ASP.NET Core app में असली जवाब है \"मैं DI को <code>AddSingleton</code> से संभालने देता हूँ\"; container एक बार बनाता है और thread-safe resolve करता है। Instance को <i>use</i> करने के लिए खुद thread-safe होना फिर भी ज़रूरी है — सुरक्षित बनाने से उसके fields सुरक्षित नहीं हो जाते।</p>\n<p>Follow-up: \"क्या thread-safe singleton काफ़ी है?\" — नहीं, उसके mutable state को भी सुरक्षा चाहिए।</p>",
        hg: "<ul>\n<li><b>static readonly / static property initialiser</b> — CLR guarantee deta hai ki type initialiser ek baar chalta hai; lock ka code nahi likhna.</li>\n<li><b>Lazy&lt;T&gt;</b> — pehle <code>.Value</code> par banao; default mode lock leta hai taaki factory ek baar chale.</li>\n<li><b>Har call par lock</b> — sahi, par har read par daam.</li>\n<li><b>Double-checked locking</b> — tez par nazuk; <code>volatile</code> rakho.</li>\n<li><b>Naive null-check</b> — thread-safe nahi; do threads do objects bana sakte hain.</li>\n</ul>\n<p><b>TL angle:</b> ASP.NET Core app mein asli jawab hai \"main DI ko <code>AddSingleton</code> se sambhalne deta hoon\"; container ek baar banata hai aur thread-safe resolve karta hai. Instance ko <i>use</i> karne ke liye khud thread-safe hona phir bhi zaroori hai — surakshit banane se uske fields surakshit nahi ho jaate.</p>\n<p>Follow-up: \"Kya thread-safe singleton kaafi hai?\" — nahi, uske mutable state ko bhi suraksha chahiye.</p>"
      }
    },
    {
      id: "singleton-vs-static-class",
      depth: "short",
      q: "Singleton vs static class — what is the difference and which do you prefer?",
      answer: "A singleton is an object: it can implement interfaces, be injected, faked and disposed. A static class is only static members, so it is hard to mock or swap. I prefer DI singletons.",
      meaning: {
        hi: "Singleton एक object है: interface implement कर सकता है, inject, fake और dispose हो सकता है। Static class सिर्फ़ static members है, इसलिए mock या swap करना मुश्किल। मैं DI singleton पसंद करता हूँ।",
        hg: "Singleton ek object hai: interface implement kar sakta hai, inject, fake aur dispose ho sakta hai. Static class sirf static members hai, isliye mock ya swap karna mushkil. Main DI singleton pasand karta hoon."
      },
      explain: {
        en: "<ul>\n<li>Static class: no instances, no interfaces, no inheritance. Good for pure helpers (<code>Math</code>, <code>Path</code>).</li>\n<li>Singleton: a normal class that happens to have one instance — it can hold state with a lifetime, implement <code>IDisposable</code>, and be created lazily.</li>\n<li>Rule of thumb: stateless utility → static class; shared, swappable service → singleton (via DI).</li>\n<li>Day 1 compared them with the static-class-vs-singleton question; here the new point is the DI recommendation.</li>\n</ul>\n<p>Follow-up: \"Can a static class be unit-tested?\" — pure static methods yes; static methods that touch the clock, files or network are the problem.</p>",
        hi: "<ul>\n<li>Static class: कोई instance नहीं, interface नहीं, inheritance नहीं। Pure helpers (<code>Math</code>, <code>Path</code>) के लिए अच्छी।</li>\n<li>Singleton: सामान्य class जिसका एक ही instance होता है — lifetime वाला state रख सकती है, <code>IDisposable</code> implement कर सकती है, lazily बन सकती है।</li>\n<li>Rule of thumb: stateless utility → static class; shared, बदलने लायक service → singleton (DI से)।</li>\n<li>Day 1 में static-class-vs-singleton की तुलना थी; यहाँ नई बात DI की recommendation है।</li>\n</ul>\n<p>Follow-up: \"क्या static class को unit-test कर सकते हैं?\" — pure static methods हाँ; जो static methods घड़ी, files या network छूते हैं वे समस्या हैं।</p>",
        hg: "<ul>\n<li>Static class: koi instance nahi, interface nahi, inheritance nahi. Pure helpers (<code>Math</code>, <code>Path</code>) ke liye achhi.</li>\n<li>Singleton: saamanya class jiska ek hi instance hota hai — lifetime wala state rakh sakti hai, <code>IDisposable</code> implement kar sakti hai, lazily ban sakti hai.</li>\n<li>Rule of thumb: stateless utility → static class; shared, badalne layak service → singleton (DI se).</li>\n<li>Day 1 mein static-class-vs-singleton ki tulna thi; yahaan nayi baat DI ki recommendation hai.</li>\n</ul>\n<p>Follow-up: \"Kya static class ko unit-test kar sakte hain?\" — pure static methods haan; jo static methods ghadi, files ya network chhute hain woh samasya hain.</p>"
      }
    },
    {
      id: "singleton-vs-di-singleton",
      depth: "short",
      q: "Hand-written Singleton vs AddSingleton in DI — what is the difference?",
      answer: "Both give one instance. A hand-written one controls its own lifetime through a global Instance; with AddSingleton the container owns it and consumers take an interface, so tests can swap it.",
      meaning: {
        hi: "दोनों एक instance देते हैं। Hand-written वाला global Instance से अपनी lifetime खुद चलाता है; AddSingleton में container उसका मालिक है और consumers interface लेते हैं, इसलिए tests में बदल सकते हैं।",
        hg: "Dono ek instance dete hain. Hand-written wala global Instance se apni lifetime khud chalata hai; AddSingleton mein container uska malik hai aur consumers interface lete hain, isliye tests mein badal sakte hain."
      },
      explain: {
        en: "<ul>\n<li>Hand-written: private constructor + static <code>Instance</code>; the class decides its own lifetime and everyone reaches it globally.</li>\n<li>DI singleton: a normal public class; the <b>composition root</b> decides \"one per container\"; consumers declare the dependency in the constructor.</li>\n<li>The container also disposes <code>IDisposable</code> singletons it created when the host shuts down.</li>\n<li>Same single instance, but the DI version separates <i>what the class does</i> from <i>how long it lives</i> — a Day 8 DIP/SRP win.</li>\n</ul>\n<p>Follow-up: \"Any risk with AddSingleton?\" — thread-safety of its state, and a singleton must not capture a scoped service (Day 11).</p>",
        hi: "<ul>\n<li>Hand-written: private constructor + static <code>Instance</code>; class अपनी lifetime खुद तय करती है और सब global तरीके से पहुँचते हैं।</li>\n<li>DI singleton: सामान्य public class; <b>composition root</b> तय करता है \"एक per container\"; consumers constructor में dependency declare करते हैं।</li>\n<li>Host बंद होने पर container अपने बनाए <code>IDisposable</code> singletons को dispose भी करता है।</li>\n<li>वही एक instance, पर DI version <i>class क्या करती है</i> और <i>कितना जीती है</i> को अलग करता है — Day 8 के DIP/SRP की जीत।</li>\n</ul>\n<p>Follow-up: \"AddSingleton में कोई risk?\" — उसके state की thread-safety, और singleton scoped service को capture नहीं करना चाहिए (Day 11)।</p>",
        hg: "<ul>\n<li>Hand-written: private constructor + static <code>Instance</code>; class apni lifetime khud tay karti hai aur sab global tareeke se pahunchte hain.</li>\n<li>DI singleton: saamanya public class; <b>composition root</b> tay karta hai \"ek per container\"; consumers constructor mein dependency declare karte hain.</li>\n<li>Host band hone par container apne banaye <code>IDisposable</code> singletons ko dispose bhi karta hai.</li>\n<li>Wahi ek instance, par DI version <i>class kya karti hai</i> aur <i>kitna jeeti hai</i> ko alag karta hai — Day 8 ke DIP/SRP ki jeet.</li>\n</ul>\n<p>Follow-up: \"AddSingleton mein koi risk?\" — uske state ki thread-safety, aur singleton scoped service ko capture nahi karna chahiye (Day 11).</p>"
      }
    },
    {
      id: "factory-method-vs-abstract-factory",
      depth: "short",
      q: "Explain Simple Factory, Factory Method and Abstract Factory. How are they different?",
      answer: "Simple Factory is usually a static method with a switch. Factory Method is an overridable method that creates one product. Abstract Factory is an object that creates a matching family of products.",
      meaning: {
        hi: "Simple Factory आम तौर पर switch वाला static method है। Factory Method एक override होने वाला method है जो एक product बनाता है। Abstract Factory ऐसा object है जो मेल खाते products का family बनाता है।",
        hg: "Simple Factory aam taur par switch wala static method hai. Factory Method ek override hone wala method hai jo ek product banata hai. Abstract Factory aisa object hai jo match karte products ka family banata hai."
      },
      explain: {
        en: "<ul>\n<li><b>Simple Factory</b> — <code>Create(string kind)</code> with a <code>switch</code>. Not a GoF pattern; adding a case edits the method (Day 8 OCP).</li>\n<li><b>Factory Method</b> — base class workflow calls an <code>abstract CreateX()</code>; each subclass returns its product. Inheritance decides.</li>\n<li><b>Abstract Factory</b> — interface with several <code>CreateX()</code> / <code>CreateY()</code> methods; swap the whole factory to switch the family. Composition decides.</li>\n<li>Think \"one product → Factory Method; matching set → Abstract Factory\".</li>\n</ul>\n<p>Follow-up: \"Which is a Strategy in disguise?\" — a Factory Method subclass that only swaps one behaviour is often better as a Strategy (Day 10).</p>",
        hi: "<ul>\n<li><b>Simple Factory</b> — <code>Create(string kind)</code> जिसमें <code>switch</code> है। GoF pattern नहीं; case जोड़ने पर method बदलना पड़ता है (Day 8 OCP)।</li>\n<li><b>Factory Method</b> — base class का workflow <code>abstract CreateX()</code> बुलाता है; हर subclass अपना product लौटाती है। Inheritance तय करती है।</li>\n<li><b>Abstract Factory</b> — interface जिसमें कई <code>CreateX()</code> / <code>CreateY()</code> methods हैं; family बदलने के लिए पूरी factory बदलो। Composition तय करती है।</li>\n<li>याद रखो: \"एक product → Factory Method; मेल खाता set → Abstract Factory\"।</li>\n</ul>\n<p>Follow-up: \"कौन-सा भेस बदला हुआ Strategy है?\" — जो Factory Method subclass सिर्फ़ एक behaviour बदलती है वह अक्सर Strategy के रूप में बेहतर है (Day 10)।</p>",
        hg: "<ul>\n<li><b>Simple Factory</b> — <code>Create(string kind)</code> jisme <code>switch</code> hai. GoF pattern nahi; case jodne par method badalna padta hai (Day 8 OCP).</li>\n<li><b>Factory Method</b> — base class ka workflow <code>abstract CreateX()</code> bulata hai; har subclass apna product lautati hai. Inheritance tay karti hai.</li>\n<li><b>Abstract Factory</b> — interface jisme kai <code>CreateX()</code> / <code>CreateY()</code> methods hain; family badalne ke liye poori factory badlo. Composition tay karti hai.</li>\n<li>Yaad rakho: \"ek product → Factory Method; match karta set → Abstract Factory\".</li>\n</ul>\n<p>Follow-up: \"Kaun-sa bhes badla hua Strategy hai?\" — jo Factory Method subclass sirf ek behaviour badalti hai woh aksar Strategy ke roop mein behtar hai (Day 10).</p>"
      }
    },
    {
      id: "builder-when",
      depth: "short",
      q: "When would you use the Builder pattern in C#?",
      answer: "When an object has many optional parts or must be valid only when complete: set it up step by step and validate in Build(). For a few values, a record or initialiser is simpler.",
      meaning: {
        hi: "जब object में कई optional हिस्से हों या वह पूरा होने पर ही valid हो: step by step set करो और Build() में validate करो। कुछ values के लिए record या initialiser आसान है।",
        hg: "Jab object mein kai optional hisse hon ya woh poora hone par hi valid ho: step by step set karo aur Build() mein validate karo. Kuch values ke liye record ya initialiser aasan hai."
      },
      explain: {
        en: "<ul>\n<li>Fluent methods return <code>this</code>; <code>Build()</code> validates and returns an immutable product.</li>\n<li>Good fits: complex configuration, SQL/query or HTTP request construction, <b>test data builders</b> (<code>new OrderBuilder().WithTwoItems().Build()</code>).</li>\n<li>Not needed for 3-4 simple fields — use a <code>record</code>, <code>init</code> properties, or optional parameters.</li>\n<li>.NET examples: <code>WebApplication.CreateBuilder</code>, <code>StringBuilder</code>, <code>UriBuilder</code>.</li>\n</ul>\n<p><b>TL angle:</b> test data builders keep unit tests short and readable — an easy win to suggest in code review.</p>\n<p>Follow-up: \"Is StringBuilder really the Builder pattern?\" — it is builder-style (accumulate, then <code>ToString()</code>), not the textbook Director/Builder version.</p>",
        hi: "<ul>\n<li>Fluent methods <code>this</code> लौटाते हैं; <code>Build()</code> validate करके immutable product लौटाता है।</li>\n<li>अच्छे fits: complex configuration, SQL/query या HTTP request बनाना, <b>test data builders</b> (<code>new OrderBuilder().WithTwoItems().Build()</code>)।</li>\n<li>3-4 simple fields के लिए ज़रूरी नहीं — <code>record</code>, <code>init</code> properties या optional parameters लो।</li>\n<li>.NET उदाहरण: <code>WebApplication.CreateBuilder</code>, <code>StringBuilder</code>, <code>UriBuilder</code>।</li>\n</ul>\n<p><b>TL angle:</b> test data builders unit tests को छोटा और पढ़ने लायक रखते हैं — code review में सुझाने के लिए आसान जीत।</p>\n<p>Follow-up: \"क्या StringBuilder सच में Builder pattern है?\" — यह builder-style है (जमा करो, फिर <code>ToString()</code>), textbook Director/Builder वाला नहीं।</p>",
        hg: "<ul>\n<li>Fluent methods <code>this</code> lautate hain; <code>Build()</code> validate karke immutable product lautata hai.</li>\n<li>Achhe fits: complex configuration, SQL/query ya HTTP request banana, <b>test data builders</b> (<code>new OrderBuilder().WithTwoItems().Build()</code>).</li>\n<li>3-4 simple fields ke liye zaroori nahi — <code>record</code>, <code>init</code> properties ya optional parameters lo.</li>\n<li>.NET udaharan: <code>WebApplication.CreateBuilder</code>, <code>StringBuilder</code>, <code>UriBuilder</code>.</li>\n</ul>\n<p><b>TL angle:</b> test data builders unit tests ko chhota aur padhne layak rakhte hain — code review mein sujhane ke liye aasan jeet.</p>\n<p>Follow-up: \"Kya StringBuilder sach mein Builder pattern hai?\" — yeh builder-style hai (jama karo, phir <code>ToString()</code>), textbook Director/Builder wala nahi.</p>"
      }
    },
    {
      id: "di-replaces-factories",
      depth: "short",
      q: "With dependency injection, do we still need Singleton and Factory patterns?",
      answer: "Often not: AddSingleton replaces hand-written singletons, and Func&lt;T&gt; or keyed services replace many factories. I still write a factory when creation needs runtime data plus real logic.",
      meaning: {
        hi: "अक्सर नहीं: AddSingleton hand-written singletons की जगह लेता है, और Func&lt;T&gt; या keyed services कई factories की। जब creation को runtime data और असली logic चाहिए तब मैं factory लिखता हूँ।",
        hg: "Aksar nahi: AddSingleton hand-written singletons ki jagah leta hai, aur Func&lt;T&gt; ya keyed services kai factories ki. Jab creation ko runtime data aur asli logic chahiye tab main factory likhta hoon."
      },
      explain: {
        en: "<ul>\n<li>Singleton → <code>AddSingleton&lt;IThing, Thing&gt;()</code>; consumers take <code>IThing</code>.</li>\n<li>Choose by key → .NET 8 keyed services (<code>AddKeyedSingleton</code>, <code>[FromKeyedServices]</code>).</li>\n<li>Create on demand → inject a <code>Func&lt;T&gt;</code> you registered, or <code>IServiceScopeFactory</code> for scoped work.</li>\n<li>Keep a real factory when it takes runtime input (user id, tenant) and applies logic, or when you ship a library without DI.</li>\n</ul>\n<p><b>TL angle:</b> the patterns are still the vocabulary for design reviews — you name what the container is doing for you.</p>\n<p>Follow-up: \"Why not inject IServiceProvider everywhere?\" — that is Service Locator; it hides dependencies and makes tests harder.</p>",
        hi: "<ul>\n<li>Singleton → <code>AddSingleton&lt;IThing, Thing&gt;()</code>; consumers <code>IThing</code> लेते हैं।</li>\n<li>Key से चुनना → .NET 8 keyed services (<code>AddKeyedSingleton</code>, <code>[FromKeyedServices]</code>)।</li>\n<li>ज़रूरत पर बनाना → आपका register किया हुआ <code>Func&lt;T&gt;</code> inject करो, या scoped काम के लिए <code>IServiceScopeFactory</code>।</li>\n<li>असली factory तब रखो जब वह runtime input (user id, tenant) लेकर logic लगाए, या आप DI-रहित library भेज रहे हों।</li>\n</ul>\n<p><b>TL angle:</b> patterns अब भी design reviews की भाषा हैं — आप बताते हो कि container आपके लिए क्या कर रहा है।</p>\n<p>Follow-up: \"हर जगह IServiceProvider inject क्यों नहीं?\" — यह Service Locator है; dependencies छुपाता है और tests मुश्किल करता है।</p>",
        hg: "<ul>\n<li>Singleton → <code>AddSingleton&lt;IThing, Thing&gt;()</code>; consumers <code>IThing</code> lete hain.</li>\n<li>Key se chunna → .NET 8 keyed services (<code>AddKeyedSingleton</code>, <code>[FromKeyedServices]</code>).</li>\n<li>Zaroorat par banana → aapka register kiya hua <code>Func&lt;T&gt;</code> inject karo, ya scoped kaam ke liye <code>IServiceScopeFactory</code>.</li>\n<li>Asli factory tab rakho jab woh runtime input (user id, tenant) lekar logic lagaye, ya aap DI-rahit library bhej rahe hon.</li>\n</ul>\n<p><b>TL angle:</b> patterns ab bhi design reviews ki bhasha hain — aap batate ho ki container aapke liye kya kar raha hai.</p>\n<p>Follow-up: \"Har jagah IServiceProvider inject kyun nahi?\" — yeh Service Locator hai; dependencies chhupata hai aur tests mushkil karta hai.</p>"
      }
    },
    {
      id: "double-checked-locking-volatile",
      depth: "detailed",
      q: "Why is volatile recommended in double-checked locking?",
      answer: "The ECMA-335 spec allows the reference to be published before the constructor finishes; volatile rules that out portably. Modern .NET is stronger, but do not rely on that: use Lazy&lt;T&gt; or static readonly.",
      meaning: {
        hi: "ECMA-335 spec reference को constructor ख़त्म होने से पहले publish होने देता है; volatile इसे portable तरीके से रोकता है। Modern .NET ज़्यादा मज़बूत है, पर उस पर भरोसा मत करो: Lazy&lt;T&gt; या static readonly लो।",
        hg: "ECMA-335 spec reference ko constructor khatam hone se pehle publish hone deta hai; volatile ise portable tareeke se rokta hai. Modern .NET zyada mazboot hai, par us par bharosa mat karo: Lazy&lt;T&gt; ya static readonly lo."
      },
      explain: {
        en: "<ul>\n<li>The first check runs outside the lock. The ECMA-335 memory model lets \"store reference\" become visible before \"finish constructor\", so in theory a second thread can pass the check and use a partly built object.</li>\n<li><code>volatile</code> (or <code>Volatile.Read</code>/<code>Volatile.Write</code>) rules that out portably. The dotnet/runtime memory-model document says object-reference stores are release operations in CoreCLR, so modern .NET is stronger than the spec — but that is an implementation detail, so do not rely on it.</li>\n<li>The cleaner answer: use <code>static readonly</code> or <code>Lazy&lt;T&gt;</code> and skip the technique.</li>\n</ul>\n<p><b>TL angle:</b> if someone proposes double-checked locking in a pull request, ask \"why not Lazy&lt;T&gt;?\" — hand-rolled lock-free code needs a strong reason.</p>\n<p>Follow-up: \"Does <code>lock</code> alone make the first read safe?\" — only if the read is also inside the lock; that is the \"lock on every call\" version.</p>",
        hi: "<ul>\n<li>पहला check lock के बाहर चलता है। ECMA-335 memory model \"reference store करो\" को \"constructor ख़त्म करो\" से पहले दिखने देता है, इसलिए theory में दूसरा thread check पार करके आधे बने object को use कर सकता है।</li>\n<li><code>volatile</code> (या <code>Volatile.Read</code>/<code>Volatile.Write</code>) इसे portable तरीके से रोकता है। dotnet/runtime का memory-model document कहता है कि CoreCLR में object-reference stores release operations हैं, यानी modern .NET spec से मज़बूत है — पर यह implementation detail है, इसलिए उस पर भरोसा मत करो।</li>\n<li>साफ़ जवाब: <code>static readonly</code> या <code>Lazy&lt;T&gt;</code> लो और यह technique छोड़ो।</li>\n</ul>\n<p><b>TL angle:</b> pull request में कोई double-checked locking लाए तो पूछो \"Lazy&lt;T&gt; क्यों नहीं?\" — हाथ से बना lock-free code मज़बूत वजह माँगता है।</p>\n<p>Follow-up: \"क्या सिर्फ़ <code>lock</code> पहली read को safe बना देता है?\" — तभी जब read भी lock के अंदर हो; यही \"हर call पर lock\" वाला version है।</p>",
        hg: "<ul>\n<li>Pehla check lock ke bahar chalta hai. ECMA-335 memory model \"reference store karo\" ko \"constructor khatam karo\" se pehle dikhne deta hai, isliye theory mein doosra thread check paar karke aadhe bane object ko use kar sakta hai.</li>\n<li><code>volatile</code> (ya <code>Volatile.Read</code>/<code>Volatile.Write</code>) ise portable tareeke se rokta hai. dotnet/runtime ka memory-model document kehta hai ki CoreCLR mein object-reference stores release operations hain, yaani modern .NET spec se mazboot hai — par yeh implementation detail hai, isliye us par bharosa mat karo.</li>\n<li>Saaf jawab: <code>static readonly</code> ya <code>Lazy&lt;T&gt;</code> lo aur yeh technique chhodo.</li>\n</ul>\n<p><b>TL angle:</b> pull request mein koi double-checked locking laye to poochho \"Lazy&lt;T&gt; kyun nahi?\" — haath se bana lock-free code mazboot wajah maangta hai.</p>\n<p>Follow-up: \"Kya sirf <code>lock</code> pehli read ko safe bana deta hai?\" — tabhi jab read bhi lock ke andar ho; yehi \"har call par lock\" wala version hai.</p>"
      }
    },
    {
      id: "lazy-thread-safety-modes",
      depth: "detailed",
      q: "What are the LazyThreadSafetyMode options for Lazy&lt;T&gt;?",
      answer: "None: no thread safety. PublicationOnly: several threads may run the factory, the first result wins. ExecutionAndPublication (the default): one lock, the factory runs once, and exceptions are cached.",
      meaning: {
        hi: "None: कोई thread safety नहीं। PublicationOnly: कई threads factory चला सकते हैं, पहला result जीतता है। ExecutionAndPublication (default): एक lock, factory एक बार चलती है, और exceptions cache होते हैं।",
        hg: "None: koi thread safety nahi. PublicationOnly: kai threads factory chala sakte hain, pehla result jeetta hai. ExecutionAndPublication (default): ek lock, factory ek baar chalti hai, aur exceptions cache hote hain."
      },
      explain: {
        en: "<ul>\n<li><b>None</b> — fastest, only for single-threaded use.</li>\n<li><b>PublicationOnly</b> — no lock; racing threads may each run the factory, but only the first stored value is used. Exceptions are <i>not</i> cached. Useful when the factory is cheap and side-effect free.</li>\n<li><b>ExecutionAndPublication</b> — default for <code>new Lazy&lt;T&gt;(factory)</code>: a lock makes sure the factory runs once. If it throws, the exception is cached and rethrown on every later <code>.Value</code> (the puzzle below shows it).</li>\n<li>For a cache that should retry after failure, prefer <code>PublicationOnly</code> or a small custom retry.</li>\n</ul>\n<p>Follow-up: \"Is <code>IsValueCreated</code> true after an exception?\" — no, no value was created.</p>",
        hi: "<ul>\n<li><b>None</b> — सबसे तेज़, सिर्फ़ single-threaded use के लिए।</li>\n<li><b>PublicationOnly</b> — lock नहीं; दौड़ते threads हर एक factory चला सकते हैं, पर सिर्फ़ पहली store हुई value इस्तेमाल होती है। Exceptions cache <i>नहीं</i> होते। जब factory सस्ती और side-effect-रहित हो तब काम की।</li>\n<li><b>ExecutionAndPublication</b> — <code>new Lazy&lt;T&gt;(factory)</code> का default: lock पक्का करता है कि factory एक बार चले। अगर वह throw करे तो exception cache होकर हर आगे के <code>.Value</code> पर दोबारा फेंका जाता है (नीचे वाला puzzle दिखाता है)।</li>\n<li>जिस cache को failure के बाद retry करना हो, उसके लिए <code>PublicationOnly</code> या छोटा custom retry लो।</li>\n</ul>\n<p>Follow-up: \"Exception के बाद <code>IsValueCreated</code> true होता है?\" — नहीं, कोई value बनी ही नहीं।</p>",
        hg: "<ul>\n<li><b>None</b> — sabse tez, sirf single-threaded use ke liye.</li>\n<li><b>PublicationOnly</b> — lock nahi; daudte threads har ek factory chala sakte hain, par sirf pehli store hui value istemaal hoti hai. Exceptions cache <i>nahi</i> hote. Jab factory sasti aur side-effect-rahit ho tab kaam ki.</li>\n<li><b>ExecutionAndPublication</b> — <code>new Lazy&lt;T&gt;(factory)</code> ka default: lock pakka karta hai ki factory ek baar chale. Agar woh throw kare to exception cache hokar har aage ke <code>.Value</code> par dobara phenka jaata hai (neeche wala puzzle dikhata hai).</li>\n<li>Jis cache ko failure ke baad retry karna ho, uske liye <code>PublicationOnly</code> ya chhota custom retry lo.</li>\n</ul>\n<p>Follow-up: \"Exception ke baad <code>IsValueCreated</code> true hota hai?\" — nahi, koi value bani hi nahi.</p>"
      },
      code: [
        {
          caption: {
            en: "Choosing the mode in the constructor (compiles)",
            hi: "Constructor में mode चुनना (compile होता है)",
            hg: "Constructor mein mode chunna (compile hota hai)"
          },
          check: "compile",
          src: "public static class LazyModes\n{\n    // Default: ExecutionAndPublication - factory runs once, behind a lock.\n    public static readonly Lazy<string> Default = new(() => \"built once\");\n\n    // Same thing, spelled out.\n    public static readonly Lazy<string> Explicit =\n        new(() => \"built once\", LazyThreadSafetyMode.ExecutionAndPublication);\n\n    // No lock: racing threads may each build a value, the first one stored wins.\n    public static readonly Lazy<string> Racing =\n        new(() => \"cheap value\", LazyThreadSafetyMode.PublicationOnly);\n\n    // No thread safety at all: single-threaded code only.\n    public static readonly Lazy<string> Single =\n        new(() => \"single thread\", LazyThreadSafetyMode.None);\n}"
        }
      ]
    },
    {
      id: "beforefieldinit-static-ctor",
      depth: "detailed",
      q: "What is beforefieldinit, and how does a static constructor change static initialisation?",
      answer: "With an explicit static constructor, the initialiser runs just before first use. Without one (beforefieldinit) it still runs once, but the runtime picks the moment, at or before first static field access.",
      meaning: {
        hi: "Explicit static constructor हो तो type initialiser पहले use से ठीक पहले चलता है। न हो तो class beforefieldinit होती है: वह अब भी एक बार चलता है, पर runtime उसे पहले भी चला सकता है।",
        hg: "Explicit static constructor ho to type initialiser pehle use se theek pehle chalta hai. Na ho to class beforefieldinit hoti hai: woh ab bhi ek baar chalta hai, par runtime use pehle bhi chala sakta hai."
      },
      explain: {
        en: "<ul>\n<li>Static field initialisers run in the order written, then the static constructor body (Day 1: static constructors run once, before first use).</li>\n<li><b>With</b> a static constructor: the exact moment is \"before the first static member access or instance creation\" — predictable.</li>\n<li><b>Without</b> one: the C# compiler marks the type <code>beforefieldinit</code>, which lets the runtime run initialisers at any point before the first static <i>field</i> access — earlier (for example when JIT-compiling code that uses the class) or lazier; a static method call alone may not trigger it. Exactly once, thread-safe, but the timing can differ between runtimes.</li>\n<li>So: for a logging-order or \"must happen at first use\" requirement, add a static constructor (or use <code>Lazy&lt;T&gt;</code>); for plain singletons the difference does not matter.</li>\n</ul>\n<p>Follow-up: \"Can static initialisation deadlock?\" — yes, two types whose initialisers wait on each other across threads; keep static initialisers small and free of cross-type dependencies.</p>",
        hi: "<ul>\n<li>Static field initialisers लिखे क्रम में चलते हैं, फिर static constructor की body (Day 1: static constructors एक बार, पहले use से पहले चलते हैं)।</li>\n<li>Static constructor <b>हो</b> तो: सही पल है \"पहले static member access या instance बनाने से पहले\" — अनुमान लगाने लायक।</li>\n<li><b>न हो</b> तो: C# compiler type को <code>beforefieldinit</code> मार्क करता है, जिससे runtime initialisers को पहले static <i>field</i> access से पहले किसी भी समय चला सकता है — पहले (जैसे class use करने वाले code के JIT compile पर) या देर से; सिर्फ़ static method call से शायद न चले। ठीक एक बार, thread-safe, पर समय runtimes में अलग हो सकता है।</li>\n<li>इसलिए: logging-order या \"पहले use पर ही होना चाहिए\" ज़रूरत में static constructor जोड़ो (या <code>Lazy&lt;T&gt;</code>); साधारण singletons के लिए फ़र्क मायने नहीं रखता।</li>\n</ul>\n<p>Follow-up: \"क्या static initialisation deadlock हो सकता है?\" — हाँ, दो types जिनके initialisers threads के पार एक-दूसरे का इंतज़ार करें; static initialisers छोटे रखो और cross-type dependency से बचो।</p>",
        hg: "<ul>\n<li>Static field initialisers likhe kram mein chalte hain, phir static constructor ki body (Day 1: static constructors ek baar, pehle use se pehle chalte hain).</li>\n<li>Static constructor <b>ho</b> to: sahi pal hai \"pehle static member access ya instance banane se pehle\" — anumaan lagane layak.</li>\n<li><b>Na ho</b> to: C# compiler type ko <code>beforefieldinit</code> mark karta hai, jisse runtime initialisers ko pehle static <i>field</i> access se pehle kisi bhi samay chala sakta hai — pehle (jaise class use karne wale code ke JIT compile par) ya der se; sirf static method call se shayad na chale. Theek ek baar, thread-safe, par samay runtimes mein alag ho sakta hai.</li>\n<li>Isliye: logging-order ya \"pehle use par hi hona chahiye\" zaroorat mein static constructor jodo (ya <code>Lazy&lt;T&gt;</code>); saadharan singletons ke liye fark maayne nahi rakhta.</li>\n</ul>\n<p>Follow-up: \"Kya static initialisation deadlock ho sakta hai?\" — haan, do types jinke initialisers threads ke paar ek-doosre ka intezaar karein; static initialisers chhote rakho aur cross-type dependency se bacho.</p>"
      }
    },
    {
      id: "singleton-testability",
      depth: "detailed",
      q: "How do you unit-test code that uses a Singleton?",
      answer: "A global Instance cannot be replaced, so tests share state and cannot fake it. Put it behind an interface, inject it, and register it with AddSingleton so tests can pass a fake.",
      meaning: {
        hi: "Global Instance बदला नहीं जा सकता, इसलिए tests state share करते हैं और fake नहीं कर सकते। उसे interface के पीछे रखो, inject करो, और AddSingleton से register करो ताकि tests fake पास कर सकें।",
        hg: "Global Instance badla nahi ja sakta, isliye tests state share karte hain aur fake nahi kar sakte. Use interface ke peeche rakho, inject karo, aur AddSingleton se register karo taaki tests fake pass kar sakein."
      },
      explain: {
        en: "<ul>\n<li>Problem: <code>ReportEngine.Instance.Render(...)</code> inside a method — the test cannot swap it, and state from test 1 leaks into test 2.</li>\n<li>Fix 1 (best): <code>IReportEngine</code> in the constructor, registered as a singleton; tests pass a fake.</li>\n<li>Fix 2 (legacy code): wrap the global in an adapter class you can fake, then migrate callers gradually.</li>\n<li>Do <b>not</b> add a public \"Reset()\" or a setter just for tests — it leaks into production design.</li>\n</ul>\n<p><b>TL angle:</b> \"singleton-ness\" is a lifetime decision for the composition root, not a property the class should enforce on itself.</p>\n<p>Follow-up: \"Where is the time-based case?\" — use <code>TimeProvider</code> instead of a static clock singleton (Day 1).</p>",
        hi: "<ul>\n<li>Problem: method के अंदर <code>ReportEngine.Instance.Render(...)</code> — test उसे बदल नहीं सकता, और test 1 की state test 2 में लीक होती है।</li>\n<li>Fix 1 (सबसे अच्छा): constructor में <code>IReportEngine</code>, singleton के रूप में register; tests fake पास करते हैं।</li>\n<li>Fix 2 (legacy code): global को ऐसी adapter class में लपेटो जिसे fake कर सको, फिर callers धीरे-धीरे migrate करो।</li>\n<li>सिर्फ़ tests के लिए public \"Reset()\" या setter <b>मत</b> जोड़ो — यह production design में लीक हो जाता है।</li>\n</ul>\n<p><b>TL angle:</b> \"singleton होना\" composition root का lifetime फ़ैसला है, ऐसी property नहीं जो class खुद पर थोपे।</p>\n<p>Follow-up: \"समय वाला case?\" — static clock singleton की जगह <code>TimeProvider</code> लो (Day 1)।</p>",
        hg: "<ul>\n<li>Problem: method ke andar <code>ReportEngine.Instance.Render(...)</code> — test use badal nahi sakta, aur test 1 ki state test 2 mein leak hoti hai.</li>\n<li>Fix 1 (sabse achha): constructor mein <code>IReportEngine</code>, singleton ke roop mein register; tests fake pass karte hain.</li>\n<li>Fix 2 (legacy code): global ko aisi adapter class mein lapeto jise fake kar sako, phir callers dheere-dheere migrate karo.</li>\n<li>Sirf tests ke liye public \"Reset()\" ya setter <b>mat</b> jodo — yeh production design mein leak ho jaata hai.</li>\n</ul>\n<p><b>TL angle:</b> \"singleton hona\" composition root ka lifetime faisla hai, aisi property nahi jo class khud par thope.</p>\n<p>Follow-up: \"Samay wala case?\" — static clock singleton ki jagah <code>TimeProvider</code> lo (Day 1).</p>"
      }
    },
    {
      id: "abstract-factory-dotnet",
      depth: "detailed",
      q: "Give a real Abstract Factory example in .NET.",
      answer: "DbProviderFactory in ADO.NET: one factory per database provider creates a matching connection, command and parameter, so you never mix SQL Server and Postgres parts.",
      meaning: {
        hi: "ADO.NET का DbProviderFactory: हर database provider की एक factory मेल खाती connection, command और parameter बनाती है, इसलिए SQL Server और Postgres के हिस्से मिलते नहीं।",
        hg: "ADO.NET ka DbProviderFactory: har database provider ki ek factory match karti connection, command aur parameter banati hai, isliye SQL Server aur Postgres ke hisse milte nahi."
      },
      explain: {
        en: "<ul>\n<li><code>DbProviderFactory</code> has <code>CreateConnection()</code>, <code>CreateCommand()</code>, <code>CreateParameter()</code> and more; each provider (SqlClient, Npgsql) supplies its own subclass.</li>\n<li>Code written against <code>DbConnection</code> and <code>DbCommand</code> works for any provider; switching database means switching the factory.</li>\n<li>UI toolkits give the classic textbook example (Light and Dark theme widgets), but ADO.NET is the one interviewers can verify in a .NET codebase.</li>\n<li>EF Core hides this: you choose a provider with <code>UseSqlServer</code> or <code>UseNpgsql</code> and EF builds the matching pieces.</li>\n</ul>\n<p>Follow-up: \"What is the downside of Abstract Factory?\" — adding a new product type (say <code>CreateTransaction</code>) means changing every factory.</p>",
        hi: "<ul>\n<li><code>DbProviderFactory</code> में <code>CreateConnection()</code>, <code>CreateCommand()</code>, <code>CreateParameter()</code> वगैरह हैं; हर provider (SqlClient, Npgsql) अपनी subclass देता है।</li>\n<li><code>DbConnection</code> और <code>DbCommand</code> पर लिखा code किसी भी provider के साथ चलता है; database बदलना यानी factory बदलना।</li>\n<li>UI toolkits textbook उदाहरण देते हैं (Light और Dark theme widgets), पर ADO.NET वह है जिसे interviewer .NET codebase में जाँच सकता है।</li>\n<li>EF Core इसे छुपा लेता है: आप <code>UseSqlServer</code> या <code>UseNpgsql</code> से provider चुनते हो और EF मेल खाते हिस्से बना लेता है।</li>\n</ul>\n<p>Follow-up: \"Abstract Factory का नुकसान?\" — नया product type (मान लो <code>CreateTransaction</code>) जोड़ने का मतलब हर factory बदलना।</p>",
        hg: "<ul>\n<li><code>DbProviderFactory</code> mein <code>CreateConnection()</code>, <code>CreateCommand()</code>, <code>CreateParameter()</code> waghera hain; har provider (SqlClient, Npgsql) apni subclass deta hai.</li>\n<li><code>DbConnection</code> aur <code>DbCommand</code> par likha code kisi bhi provider ke saath chalta hai; database badalna yaani factory badalna.</li>\n<li>UI toolkits textbook udaharan dete hain (Light aur Dark theme widgets), par ADO.NET woh hai jise interviewer .NET codebase mein jaanch sakta hai.</li>\n<li>EF Core ise chhupa leta hai: aap <code>UseSqlServer</code> ya <code>UseNpgsql</code> se provider chunte ho aur EF match karte hisse bana leta hai.</li>\n</ul>\n<p>Follow-up: \"Abstract Factory ka nuksaan?\" — naya product type (maan lo <code>CreateTransaction</code>) jodne ka matlab har factory badalna.</p>"
      }
    },
    {
      id: "builder-vs-initializer",
      depth: "detailed",
      q: "Builder vs object initialiser vs constructor with optional parameters — how do you choose?",
      answer: "Initialisers or records suit a few independent values. Optional parameters suit simple defaults. Builder suits many steps, derived values or whole-object validation, and can return an immutable object.",
      meaning: {
        hi: "कुछ independent values के लिए initialiser या record। Simple defaults के लिए optional parameters। कई steps, derived values या पूरे object की validation के लिए Builder, और वह immutable object लौटा सकता है।",
        hg: "Kuch independent values ke liye initialiser ya record. Simple defaults ke liye optional parameters. Kai steps, derived values ya poore object ki validation ke liye Builder, aur woh immutable object lauta sakta hai."
      },
      explain: {
        en: "<ul>\n<li><b>Object initialiser / <code>init</code> properties:</b> readable, but the object exists half-set between <code>new</code> and the last property; use <code>required</code> members (C# 11) to force the must-haves.</li>\n<li><b>Optional parameters:</b> fine up to ~4 values; beyond that, call sites become unreadable.</li>\n<li><b>Builder:</b> validation in one place, step-by-step or conditional construction, immutable result.</li>\n<li>Do not default to a builder because Java code did — C# has records, <code>with</code>, named arguments and <code>required</code>.</li>\n</ul>\n<p>Follow-up: \"Mutable or immutable builder?\" — usually a mutable builder producing an immutable product; an immutable (copy-on-change) builder is safer to share but allocates more.</p>",
        hi: "<ul>\n<li><b>Object initialiser / <code>init</code> properties:</b> पढ़ने में आसान, पर <code>new</code> और आख़िरी property के बीच object आधा-set रहता है; ज़रूरी चीज़ों के लिए <code>required</code> members (C# 11) लो।</li>\n<li><b>Optional parameters:</b> ~4 values तक ठीक; उसके बाद call sites पढ़ने लायक नहीं रहते।</li>\n<li><b>Builder:</b> validation एक जगह, step-by-step या conditional construction, immutable result।</li>\n<li>Java code ने किया इसलिए default में builder मत लो — C# में records, <code>with</code>, named arguments और <code>required</code> हैं।</li>\n</ul>\n<p>Follow-up: \"Mutable या immutable builder?\" — आम तौर पर mutable builder जो immutable product बनाए; immutable (बदलाव पर copy) builder share करने में safe है पर ज़्यादा allocate करता है।</p>",
        hg: "<ul>\n<li><b>Object initialiser / <code>init</code> properties:</b> padhne mein aasan, par <code>new</code> aur aakhri property ke beech object aadha-set rehta hai; zaroori cheezon ke liye <code>required</code> members (C# 11) lo.</li>\n<li><b>Optional parameters:</b> ~4 values tak theek; uske baad call sites padhne layak nahi rehte.</li>\n<li><b>Builder:</b> validation ek jagah, step-by-step ya conditional construction, immutable result.</li>\n<li>Java code ne kiya isliye default mein builder mat lo — C# mein records, <code>with</code>, named arguments aur <code>required</code> hain.</li>\n</ul>\n<p>Follow-up: \"Mutable ya immutable builder?\" — aam taur par mutable builder jo immutable product banaye; immutable (badlaav par copy) builder share karne mein safe hai par zyada allocate karta hai.</p>"
      }
    },
    {
      id: "dotnet-builders",
      depth: "detailed",
      q: "Which builders do you know in the .NET libraries?",
      answer: "WebApplication.CreateBuilder then Build(), Host.CreateApplicationBuilder, StringBuilder, UriBuilder, ConfigurationBuilder and DbContextOptionsBuilder. Each collects settings first, then produces the final object.",
      meaning: {
        hi: "WebApplication.CreateBuilder फिर Build(), Host.CreateApplicationBuilder, StringBuilder, UriBuilder, ConfigurationBuilder और DbContextOptionsBuilder। हर एक पहले settings जमा करता है, फिर final object बनाता है।",
        hg: "WebApplication.CreateBuilder phir Build(), Host.CreateApplicationBuilder, StringBuilder, UriBuilder, ConfigurationBuilder aur DbContextOptionsBuilder. Har ek pehle settings jama karta hai, phir final object banata hai."
      },
      explain: {
        en: "<ul>\n<li><code>WebApplicationBuilder</code>: register services and configuration, then <code>Build()</code> gives the <code>WebApplication</code>; the service collection is frozen after that.</li>\n<li><code>HostApplicationBuilder</code> / <code>HostBuilder</code>: same idea for worker services and generic hosts.</li>\n<li><code>StringBuilder</code> and <code>UriBuilder</code>: accumulate parts; <code>ToString()</code> / <code>.Uri</code> gives the result.</li>\n<li><code>ConfigurationBuilder</code> (add sources, <code>Build()</code>) and <code>DbContextOptionsBuilder</code> (provider and options for EF Core).</li>\n</ul>\n<p><b>TL angle:</b> the \"two-phase\" shape — configure, then Build — is why you cannot add services after <code>builder.Build()</code>; say that in interviews to show you understand the pattern, not just the name.</p>\n<p>Follow-up: \"Which is closest to the textbook Builder?\" — <code>WebApplicationBuilder</code>: many steps, a validated final product.</p>",
        hi: "<ul>\n<li><code>WebApplicationBuilder</code>: services और configuration register करो, फिर <code>Build()</code> से <code>WebApplication</code> मिलता है; उसके बाद service collection जम जाती है।</li>\n<li><code>HostApplicationBuilder</code> / <code>HostBuilder</code>: worker services और generic hosts के लिए वही idea।</li>\n<li><code>StringBuilder</code> और <code>UriBuilder</code>: हिस्से जमा करो; <code>ToString()</code> / <code>.Uri</code> से result मिलता है।</li>\n<li><code>ConfigurationBuilder</code> (sources जोड़ो, <code>Build()</code>) और <code>DbContextOptionsBuilder</code> (EF Core के लिए provider और options)।</li>\n</ul>\n<p><b>TL angle:</b> \"दो-phase\" shape — configure, फिर Build — इसीलिए <code>builder.Build()</code> के बाद services नहीं जोड़ सकते; interview में यह बोलो ताकि दिखे कि आप pattern समझते हैं, सिर्फ़ नाम नहीं।</p>\n<p>Follow-up: \"Textbook Builder के सबसे करीब कौन?\" — <code>WebApplicationBuilder</code>: कई steps, validated final product।</p>",
        hg: "<ul>\n<li><code>WebApplicationBuilder</code>: services aur configuration register karo, phir <code>Build()</code> se <code>WebApplication</code> milta hai; uske baad service collection jam jaati hai.</li>\n<li><code>HostApplicationBuilder</code> / <code>HostBuilder</code>: worker services aur generic hosts ke liye wahi idea.</li>\n<li><code>StringBuilder</code> aur <code>UriBuilder</code>: hisse jama karo; <code>ToString()</code> / <code>.Uri</code> se result milta hai.</li>\n<li><code>ConfigurationBuilder</code> (sources jodo, <code>Build()</code>) aur <code>DbContextOptionsBuilder</code> (EF Core ke liye provider aur options).</li>\n</ul>\n<p><b>TL angle:</b> \"do-phase\" shape — configure, phir Build — isiliye <code>builder.Build()</code> ke baad services nahi jod sakte; interview mein yeh bolo taaki dikhe ki aap pattern samajhte hain, sirf naam nahi.</p>\n<p>Follow-up: \"Textbook Builder ke sabse kareeb kaun?\" — <code>WebApplicationBuilder</code>: kai steps, validated final product.</p>"
      }
    },
    {
      id: "prototype-clone",
      depth: "detailed",
      q: "What is the Prototype pattern, and how do you copy objects in modern C#?",
      answer: "Prototype creates a new object by copying an existing one. In modern C# use a record's with expression; it is a shallow copy, so reference members are shared. ICloneable does not say shallow or deep.",
      meaning: {
        hi: "Prototype मौजूदा object की copy से नया object बनाता है। Modern C# में record की with expression लो; यह shallow copy है, इसलिए reference members share होते हैं। ICloneable नहीं बताता कि shallow है या deep।",
        hg: "Prototype maujood object ki copy se naya object banata hai. Modern C# mein record ki with expression lo; yeh shallow copy hai, isliye reference members share hote hain. ICloneable nahi batata ki shallow hai ya deep."
      },
      explain: {
        en: "<ul>\n<li><b>Why:</b> creating from scratch is costly or complicated, but \"same as this one, with two changes\" is easy (templates, default settings, undo snapshots).</li>\n<li><b>Records:</b> <code>original with { Id = \"A2\" }</code> copies the record. Value-type and string members are fine; a <code>List&lt;T&gt;</code> member is the <i>same list</i> in both objects (see the code).</li>\n<li><b>ICloneable</b> returns <code>object</code> and its contract does not state shallow vs deep, so the design guidelines advise against exposing it in new public APIs. Write an explicit <code>DeepCopy()</code> or use immutable members instead.</li>\n<li>Prefer immutable collections (<code>ImmutableList&lt;T&gt;</code>, <code>IReadOnlyList&lt;T&gt;</code> of a copied array) so a shallow copy is safe.</li>\n</ul>\n<p>Follow-up: \"Is deep copy via serialisation fine?\" — works, but slow and breaks on non-serialisable types; hand-written copy is clearer.</p>",
        hi: "<ul>\n<li><b>क्यों:</b> शुरू से बनाना महँगा या जटिल है, पर \"इसके जैसा ही, दो बदलावों के साथ\" आसान है (templates, default settings, undo snapshots)।</li>\n<li><b>Records:</b> <code>original with { Id = \"A2\" }</code> record की copy बनाता है। Value-type और string members ठीक हैं; <code>List&lt;T&gt;</code> member दोनों objects में <i>एक ही list</i> है (code देखो)।</li>\n<li><b>ICloneable</b> <code>object</code> लौटाता है और उसका contract shallow vs deep नहीं बताता, इसलिए design guidelines नए public APIs में इसे expose न करने की सलाह देती हैं। साफ़ <code>DeepCopy()</code> लिखो या immutable members लो।</li>\n<li>Immutable collections (<code>ImmutableList&lt;T&gt;</code>, copy किए array की <code>IReadOnlyList&lt;T&gt;</code>) लो ताकि shallow copy safe रहे।</li>\n</ul>\n<p>Follow-up: \"Serialisation से deep copy ठीक है?\" — चलता है, पर धीमा और non-serialisable types पर टूटता है; हाथ से लिखी copy साफ़ है।</p>",
        hg: "<ul>\n<li><b>Kyun:</b> shuru se banana mehnga ya jatil hai, par \"iske jaisa hi, do badlaavon ke saath\" aasan hai (templates, default settings, undo snapshots).</li>\n<li><b>Records:</b> <code>original with { Id = \"A2\" }</code> record ki copy banata hai. Value-type aur string members theek hain; <code>List&lt;T&gt;</code> member dono objects mein <i>ek hi list</i> hai (code dekho).</li>\n<li><b>ICloneable</b> <code>object</code> lautata hai aur uska contract shallow vs deep nahi batata, isliye design guidelines naye public APIs mein ise expose na karne ki salah deti hain. Saaf <code>DeepCopy()</code> likho ya immutable members lo.</li>\n<li>Immutable collections (<code>ImmutableList&lt;T&gt;</code>, copy kiye array ki <code>IReadOnlyList&lt;T&gt;</code>) lo taaki shallow copy safe rahe.</li>\n</ul>\n<p>Follow-up: \"Serialisation se deep copy theek hai?\" — chalta hai, par dheema aur non-serialisable types par tootta hai; haath se likhi copy saaf hai.</p>"
      },
      code: [
        {
          caption: {
            en: "Record with: shallow copy shares the List (runs)",
            hi: "Record with: shallow copy में List share होती है (run होता है)",
            hg: "Record with: shallow copy mein List share hoti hai (run hota hai)"
          },
          check: "run",
          expected: "2\nTrue\n2",
          src: "var original = new Basket(\"A1\", new List<string> { \"tea\" });\n\nvar copy = original with { Id = \"A2\" };      // shallow copy\ncopy.Items.Add(\"biscuit\");\nConsole.WriteLine(original.Items.Count);                      // the list is shared\nConsole.WriteLine(ReferenceEquals(original.Items, copy.Items));\n\nvar safe = original with { Id = \"A3\", Items = new List<string>(original.Items) };\nsafe.Items.Add(\"sugar\");\nConsole.WriteLine(original.Items.Count);                      // unchanged: own list\n\npublic record Basket(string Id, List<string> Items);"
        }
      ]
    },
    {
      id: "keyed-services-func",
      depth: "detailed",
      q: "How do you pick one of several implementations at runtime with DI?",
      answer: "Register implementations with keys (AddKeyedSingleton) and resolve by key, or inject a Func&lt;string, T&gt; you registered. Injecting IServiceProvider into business classes hides dependencies, so I avoid it.",
      meaning: {
        hi: "Implementations को keys के साथ register करो (AddKeyedSingleton) और key से resolve करो, या अपना register किया Func&lt;string, T&gt; inject करो। Business classes में IServiceProvider inject करना dependencies छुपाता है, इसलिए मैं बचता हूँ।",
        hg: "Implementations ko keys ke saath register karo (AddKeyedSingleton) aur key se resolve karo, ya apna register kiya Func&lt;string, T&gt; inject karo. Business classes mein IServiceProvider inject karna dependencies chhupata hai, isliye main bachta hoon."
      },
      explain: {
        en: "<ul>\n<li><b>Fixed choice:</b> <code>[FromKeyedServices(\"upi\")]</code> on the constructor parameter (.NET 8+).</li>\n<li><b>Runtime choice:</b> a <code>Func&lt;string, IPayment&gt;</code> registered as a small lambda over <code>GetRequiredKeyedService</code>; the lookup lives in the composition root, not in business code.</li>\n<li><b>All of them:</b> inject <code>IEnumerable&lt;IPayment&gt;</code> and choose by a property such as <code>Name</code> — fine for a handful.</li>\n<li>Before keyed services, teams used a hand-written factory class with a dictionary or switch; it still works.</li>\n</ul>\n<p><b>TL angle:</b> adding a payment method should be \"one class + one registration\" — the Day 8 Open/Closed test for your design.</p>\n<p>Follow-up: \"What if the key is unknown?\" — <code>GetRequiredKeyedService</code> throws; validate input first or use <code>GetKeyedService</code> and handle <code>null</code>.</p>",
        hi: "<ul>\n<li><b>Fixed choice:</b> constructor parameter पर <code>[FromKeyedServices(\"upi\")]</code> (.NET 8+)।</li>\n<li><b>Runtime choice:</b> <code>GetRequiredKeyedService</code> पर छोटे lambda के रूप में register किया <code>Func&lt;string, IPayment&gt;</code>; lookup composition root में रहता है, business code में नहीं।</li>\n<li><b>सब कुछ:</b> <code>IEnumerable&lt;IPayment&gt;</code> inject करो और <code>Name</code> जैसी property से चुनो — मुट्ठी भर के लिए ठीक।</li>\n<li>Keyed services से पहले teams dictionary या switch वाली hand-written factory class लिखती थीं; वह अब भी चलती है।</li>\n</ul>\n<p><b>TL angle:</b> नया payment method \"एक class + एक registration\" होना चाहिए — आपके design का Day 8 Open/Closed test।</p>\n<p>Follow-up: \"Key अनजान हो तो?\" — <code>GetRequiredKeyedService</code> throw करता है; पहले input validate करो या <code>GetKeyedService</code> लेकर <code>null</code> संभालो।</p>",
        hg: "<ul>\n<li><b>Fixed choice:</b> constructor parameter par <code>[FromKeyedServices(\"upi\")]</code> (.NET 8+).</li>\n<li><b>Runtime choice:</b> <code>GetRequiredKeyedService</code> par chhote lambda ke roop mein register kiya <code>Func&lt;string, IPayment&gt;</code>; lookup composition root mein rehta hai, business code mein nahi.</li>\n<li><b>Sab kuch:</b> <code>IEnumerable&lt;IPayment&gt;</code> inject karo aur <code>Name</code> jaisi property se chuno — mutthi bhar ke liye theek.</li>\n<li>Keyed services se pehle teams dictionary ya switch wali hand-written factory class likhti thi; woh ab bhi chalti hai.</li>\n</ul>\n<p><b>TL angle:</b> naya payment method \"ek class + ek registration\" hona chahiye — aapke design ka Day 8 Open/Closed test.</p>\n<p>Follow-up: \"Key anjaan ho to?\" — <code>GetRequiredKeyedService</code> throw karta hai; pehle input validate karo ya <code>GetKeyedService</code> lekar <code>null</code> sambhalo.</p>"
      }
    },
    {
      id: "when-not-factory",
      depth: "detailed",
      q: "When would you not introduce a factory or any creational pattern?",
      answer: "When the class has a simple constructor and one implementation. A factory interface with one implementation and one caller is indirection without benefit; plain new or DI registration is clearer.",
      meaning: {
        hi: "जब class का constructor simple हो और implementation एक हो। एक implementation और एक caller वाला factory interface बिना फ़ायदे की indirection है; सीधा new या DI registration साफ़ है।",
        hg: "Jab class ka constructor simple ho aur implementation ek ho. Ek implementation aur ek caller wala factory interface bina fayde ki indirection hai; seedha new ya DI registration saaf hai."
      },
      explain: {
        en: "<ul>\n<li>Patterns cost readability: another type, another file, another hop in the debugger.</li>\n<li>Good reasons to add one: creation varies by input, needs set-up the caller should not know, must be faked in tests, or is expensive.</li>\n<li>Weak reasons: \"we might need another implementation someday\" (YAGNI), \"it is in the book\", \"Java did it\".</li>\n<li>Small value-like objects (<code>new Uri(...)</code>, DTOs, records) are fine with plain <code>new</code>.</li>\n</ul>\n<p><b>TL angle:</b> in review, ask \"what change does this make cheaper?\" — if the answer is vague, ask the author to delete the abstraction. Day 8 SOLID applies the same test.</p>\n<p>Follow-up: \"How do you decide between a Factory and a Strategy?\" — Factory decides <i>which object to create</i>; Strategy swaps <i>behaviour</i> of an existing object (Day 10).</p>",
        hi: "<ul>\n<li>Patterns readability की क़ीमत लेते हैं: एक और type, एक और file, debugger में एक और hop।</li>\n<li>जोड़ने की अच्छी वजहें: creation input से बदलती है, ऐसा set-up चाहिए जो caller को पता न हो, tests में fake करनी है, या महँगी है।</li>\n<li>कमज़ोर वजहें: \"शायद कभी दूसरी implementation चाहिए होगी\" (YAGNI), \"किताब में है\", \"Java में करते थे\"।</li>\n<li>छोटे value-जैसे objects (<code>new Uri(...)</code>, DTOs, records) सीधे <code>new</code> से ठीक हैं।</li>\n</ul>\n<p><b>TL angle:</b> review में पूछो \"यह कौन-सा बदलाव सस्ता करता है?\" — जवाब धुंधला हो तो author से abstraction हटवाओ। Day 8 SOLID भी यही test लगाता है।</p>\n<p>Follow-up: \"Factory और Strategy में कैसे चुनें?\" — Factory तय करती है <i>कौन-सा object बनाना है</i>; Strategy मौजूदा object का <i>behaviour</i> बदलती है (Day 10)।</p>",
        hg: "<ul>\n<li>Patterns readability ki keemat lete hain: ek aur type, ek aur file, debugger mein ek aur hop.</li>\n<li>Jodne ki achhi wajahein: creation input se badalti hai, aisa set-up chahiye jo caller ko pata na ho, tests mein fake karni hai, ya mehngi hai.</li>\n<li>Kamzor wajahein: \"shayad kabhi doosri implementation chahiye hogi\" (YAGNI), \"kitaab mein hai\", \"Java mein karte the\".</li>\n<li>Chhote value-jaise objects (<code>new Uri(...)</code>, DTOs, records) seedhe <code>new</code> se theek hain.</li>\n</ul>\n<p><b>TL angle:</b> review mein poochho \"yeh kaun-sa badlaav sasta karta hai?\" — jawab dhundhla ho to author se abstraction hatwao. Day 8 SOLID bhi yehi test lagata hai.</p>\n<p>Follow-up: \"Factory aur Strategy mein kaise chunein?\" — Factory tay karti hai <i>kaun-sa object banana hai</i>; Strategy maujood object ka <i>behaviour</i> badalti hai (Day 10).</p>"
      }
    }
  ],
  puzzles: [
    {
      id: "static-ctor-order",
      src: "Console.WriteLine(\"Main start\");\nConsole.WriteLine(Config.Name);\nConsole.WriteLine(Config.Name);\n\nclass Config\n{\n    public static readonly string Name = Make(\"field A\");\n    public static readonly string Other = Make(\"field B\");\n\n    static Config()\n    {\n        Console.WriteLine(\"static ctor\");\n    }\n\n    static string Make(string text)\n    {\n        Console.WriteLine(text);\n        return text;\n    }\n}",
      answer: "Main start\nfield A\nfield B\nstatic ctor\nfield A\nfield A",
      explain: {
        en: "<ul>\n<li>The type initialiser runs on the first access to <code>Config.Name</code>, after \"Main start\".</li>\n<li>Static field initialisers run in the order written (A, then B), then the static constructor body.</li>\n<li>It runs once; the second access only reads the field.</li>\n<li>Because there is an explicit static constructor, the \"just before first access\" timing is predictable (see Q&amp;A on beforefieldinit; Day 1 covers static constructors).</li>\n</ul>",
        hi: "<ul>\n<li>Type initialiser <code>Config.Name</code> के पहले access पर चलता है, \"Main start\" के बाद।</li>\n<li>Static field initialisers लिखे क्रम में चलते हैं (A, फिर B), फिर static constructor की body।</li>\n<li>यह एक बार चलता है; दूसरा access सिर्फ़ field पढ़ता है।</li>\n<li>Explicit static constructor है, इसलिए \"पहले access से ठीक पहले\" वाला समय अनुमान लगाने लायक है (beforefieldinit वाला Q&amp;A देखो; static constructors Day 1 में हैं)।</li>\n</ul>",
        hg: "<ul>\n<li>Type initialiser <code>Config.Name</code> ke pehle access par chalta hai, \"Main start\" ke baad.</li>\n<li>Static field initialisers likhe kram mein chalte hain (A, phir B), phir static constructor ki body.</li>\n<li>Yeh ek baar chalta hai; doosra access sirf field padhta hai.</li>\n<li>Explicit static constructor hai, isliye \"pehle access se theek pehle\" wala samay anumaan lagane layak hai (beforefieldinit wala Q&amp;A dekho; static constructors Day 1 mein hain).</li>\n</ul>"
      }
    },
    {
      id: "static-field-order-trap",
      src: "Console.WriteLine(Counter.Instance.Start);\nConsole.WriteLine(Counter.Default);\n\nclass Counter\n{\n    public static readonly Counter Instance = new Counter();\n    public static readonly int Default = 10;\n\n    public int Start { get; }\n\n    private Counter()\n    {\n        Start = Default;\n    }\n}",
      answer: "0\n10",
      explain: {
        en: "<ul>\n<li>Static field initialisers run top to bottom. <code>Instance</code> is created first, while <code>Default</code> still holds its default value 0.</li>\n<li>The constructor copies <code>Default</code> (0) into <code>Start</code>.</li>\n<li>Only after that does <code>Default</code> become 10 — so <code>Instance.Start</code> is 0 and <code>Default</code> prints 10.</li>\n<li>Singleton lesson: put dependent static fields <i>before</i> the instance field, or use <code>Lazy&lt;T&gt;</code>.</li>\n</ul>",
        hi: "<ul>\n<li>Static field initialisers ऊपर से नीचे चलते हैं। <code>Instance</code> पहले बनता है, तब <code>Default</code> में अब भी default value 0 है।</li>\n<li>Constructor <code>Default</code> (0) को <code>Start</code> में copy करता है।</li>\n<li>उसके बाद ही <code>Default</code> 10 बनता है — इसलिए <code>Instance.Start</code> 0 है और <code>Default</code> 10 print करता है।</li>\n<li>Singleton की सीख: dependent static fields को instance field से <i>पहले</i> रखो, या <code>Lazy&lt;T&gt;</code> लो।</li>\n</ul>",
        hg: "<ul>\n<li>Static field initialisers upar se neeche chalte hain. <code>Instance</code> pehle banta hai, tab <code>Default</code> mein ab bhi default value 0 hai.</li>\n<li>Constructor <code>Default</code> (0) ko <code>Start</code> mein copy karta hai.</li>\n<li>Uske baad hi <code>Default</code> 10 banta hai — isliye <code>Instance.Start</code> 0 hai aur <code>Default</code> 10 print karta hai.</li>\n<li>Singleton ki seekh: dependent static fields ko instance field se <i>pehle</i> rakho, ya <code>Lazy&lt;T&gt;</code> lo.</li>\n</ul>"
      }
    },
    {
      id: "lazy-evaluation-count",
      src: "int calls = 0;\nvar lazy = new Lazy<string>(() =>\n{\n    calls++;\n    return \"ready\";\n});\n\nConsole.WriteLine(lazy.IsValueCreated);\nConsole.WriteLine(calls);\nConsole.WriteLine(lazy.Value);\nConsole.WriteLine(lazy.Value);\nConsole.WriteLine($\"{lazy.IsValueCreated} {calls}\");",
      answer: "False\n0\nready\nready\nTrue 1",
      explain: {
        en: "<ul>\n<li>Creating the <code>Lazy&lt;T&gt;</code> does not run the factory: <code>IsValueCreated</code> is False and <code>calls</code> is 0.</li>\n<li>The first <code>.Value</code> runs the factory once and stores the result.</li>\n<li>The second <code>.Value</code> returns the stored value; the factory does not run again.</li>\n<li>At the end: created = True, calls = 1.</li>\n</ul>",
        hi: "<ul>\n<li><code>Lazy&lt;T&gt;</code> बनाने से factory नहीं चलती: <code>IsValueCreated</code> False है और <code>calls</code> 0।</li>\n<li>पहला <code>.Value</code> factory को एक बार चलाकर result store करता है।</li>\n<li>दूसरा <code>.Value</code> store की हुई value लौटाता है; factory दोबारा नहीं चलती।</li>\n<li>अंत में: created = True, calls = 1।</li>\n</ul>",
        hg: "<ul>\n<li><code>Lazy&lt;T&gt;</code> banane se factory nahi chalti: <code>IsValueCreated</code> False hai aur <code>calls</code> 0.</li>\n<li>Pehla <code>.Value</code> factory ko ek baar chalakar result store karta hai.</li>\n<li>Doosra <code>.Value</code> store ki hui value lautata hai; factory dobara nahi chalti.</li>\n<li>Ant mein: created = True, calls = 1.</li>\n</ul>"
      }
    },
    {
      id: "lazy-exception-cached",
      src: "Run(LazyThreadSafetyMode.ExecutionAndPublication);\nRun(LazyThreadSafetyMode.PublicationOnly);\n\nstatic void Run(LazyThreadSafetyMode mode)\n{\n    int attempts = 0;\n    var lazy = new Lazy<int>(() =>\n    {\n        attempts++;\n        if (attempts == 1) throw new InvalidOperationException(\"boom\");\n        return 42;\n    }, mode);\n\n    for (int i = 0; i < 2; i++)\n    {\n        try { Console.WriteLine(lazy.Value); }\n        catch (InvalidOperationException ex) { Console.WriteLine($\"error: {ex.Message}\"); }\n    }\n    Console.WriteLine($\"{mode} attempts={attempts}\");\n}",
      answer: "error: boom\nerror: boom\nExecutionAndPublication attempts=1\nerror: boom\n42\nPublicationOnly attempts=2",
      explain: {
        en: "<ul>\n<li><b>ExecutionAndPublication</b> (the default): the first call throws, and the exception is <b>cached</b>. The second <code>.Value</code> rethrows it without calling the factory again, so attempts stays 1.</li>\n<li><b>PublicationOnly</b>: exceptions are not cached. The second <code>.Value</code> runs the factory again (attempt 2) and succeeds with 42.</li>\n<li>Takeaway: with the default mode a failed lazy singleton stays broken until the process restarts — design retries on purpose.</li>\n</ul>",
        hi: "<ul>\n<li><b>ExecutionAndPublication</b> (default): पहली call throw करती है और exception <b>cache</b> हो जाता है। दूसरा <code>.Value</code> factory दोबारा बुलाए बिना उसे फिर फेंकता है, इसलिए attempts 1 रहता है।</li>\n<li><b>PublicationOnly</b>: exceptions cache नहीं होते। दूसरा <code>.Value</code> factory फिर चलाता है (attempt 2) और 42 के साथ सफल होता है।</li>\n<li>सीख: default mode में फेल हुआ lazy singleton process restart तक टूटा रहता है — retry सोच-समझकर design करो।</li>\n</ul>",
        hg: "<ul>\n<li><b>ExecutionAndPublication</b> (default): pehli call throw karti hai aur exception <b>cache</b> ho jaata hai. Doosra <code>.Value</code> factory dobara bulaye bina use phir phenkta hai, isliye attempts 1 rehta hai.</li>\n<li><b>PublicationOnly</b>: exceptions cache nahi hote. Doosra <code>.Value</code> factory phir chalata hai (attempt 2) aur 42 ke saath safal hota hai.</li>\n<li>Seekh: default mode mein fail hua lazy singleton process restart tak toota rehta hai — retry soch-samajhkar design karo.</li>\n</ul>"
      }
    },
    {
      id: "lazy-parallel-once",
      src: "using System.Collections.Concurrent;\n\nint created = 0;\nvar lazy = new Lazy<object>(() =>\n{\n    Interlocked.Increment(ref created);\n    Thread.Sleep(20);\n    return new object();\n});\n\nvar seen = new ConcurrentBag<object>();\nParallel.For(0, 50, _ => seen.Add(lazy.Value));\n\nConsole.WriteLine($\"created={created}\");\nConsole.WriteLine($\"distinct={seen.Distinct().Count()}\");",
      answer: "created=1\ndistinct=1",
      explain: {
        en: "<ul>\n<li>Fifty parallel iterations all ask for <code>lazy.Value</code> at about the same time.</li>\n<li>The default mode (ExecutionAndPublication) takes a lock: one thread runs the factory, the others wait and then read the same value.</li>\n<li>So the factory ran once (<code>created=1</code>) and every thread saw the same object (<code>distinct=1</code>).</li>\n<li>This is exactly what the naive null-check singleton cannot promise.</li>\n</ul>",
        hi: "<ul>\n<li>पचास parallel iterations लगभग एक ही समय पर <code>lazy.Value</code> माँगते हैं।</li>\n<li>Default mode (ExecutionAndPublication) lock लेता है: एक thread factory चलाता है, बाकी इंतज़ार करके वही value पढ़ते हैं।</li>\n<li>इसलिए factory एक बार चली (<code>created=1</code>) और हर thread को वही object दिखा (<code>distinct=1</code>)।</li>\n<li>यही वह चीज़ है जिसका वादा naive null-check singleton नहीं कर सकता।</li>\n</ul>",
        hg: "<ul>\n<li>Pachaas parallel iterations lagbhag ek hi samay par <code>lazy.Value</code> maangte hain.</li>\n<li>Default mode (ExecutionAndPublication) lock leta hai: ek thread factory chalata hai, baaki intezaar karke wahi value padhte hain.</li>\n<li>Isliye factory ek baar chali (<code>created=1</code>) aur har thread ko wahi object dikha (<code>distinct=1</code>).</li>\n<li>Yehi woh cheez hai jiska waada naive null-check singleton nahi kar sakta.</li>\n</ul>"
      }
    },
    {
      id: "builder-reuse-shared-list",
      src: "var builder = new PizzaBuilder();\nvar first = builder.AddTopping(\"onion\").Build();\nvar second = builder.AddTopping(\"corn\").Build();\n\nConsole.WriteLine(first.Toppings.Count);\nConsole.WriteLine(second.Toppings.Count);\nConsole.WriteLine(ReferenceEquals(first.Toppings, second.Toppings));\n\nclass Pizza(List<string> toppings)\n{\n    public List<string> Toppings { get; } = toppings;\n}\n\nclass PizzaBuilder\n{\n    private readonly List<string> _toppings = new();\n\n    public PizzaBuilder AddTopping(string name)\n    {\n        _toppings.Add(name);\n        return this;\n    }\n\n    public Pizza Build() => new Pizza(_toppings);\n}",
      answer: "2\n2\nTrue",
      explain: {
        en: "<ul>\n<li><code>Build()</code> passes the builder's own list to the product — no copy.</li>\n<li>So <code>first</code> and <code>second</code> hold the <i>same</i> list; adding \"corn\" later also changed the first pizza.</li>\n<li>Both counts are 2 and <code>ReferenceEquals</code> is True.</li>\n<li>Fix: return a copy (<code>new List&lt;string&gt;(_toppings)</code> or <code>ToArray()</code>), or expose <code>IReadOnlyList&lt;T&gt;</code> over a copied array so the product is truly immutable.</li>\n</ul>",
        hi: "<ul>\n<li><code>Build()</code> builder की अपनी list ही product को दे देता है — copy नहीं।</li>\n<li>इसलिए <code>first</code> और <code>second</code> में <i>एक ही</i> list है; बाद में \"corn\" जोड़ने से पहली pizza भी बदल गई।</li>\n<li>दोनों counts 2 हैं और <code>ReferenceEquals</code> True है।</li>\n<li>Fix: copy लौटाओ (<code>new List&lt;string&gt;(_toppings)</code> या <code>ToArray()</code>), या copy किए array पर <code>IReadOnlyList&lt;T&gt;</code> दो ताकि product सच में immutable हो।</li>\n</ul>",
        hg: "<ul>\n<li><code>Build()</code> builder ki apni list hi product ko de deta hai — copy nahi.</li>\n<li>Isliye <code>first</code> aur <code>second</code> mein <i>ek hi</i> list hai; baad mein \"corn\" jodne se pehli pizza bhi badal gayi.</li>\n<li>Dono counts 2 hain aur <code>ReferenceEquals</code> True hai.</li>\n<li>Fix: copy lautao (<code>new List&lt;string&gt;(_toppings)</code> ya <code>ToArray()</code>), ya copy kiye array par <code>IReadOnlyList&lt;T&gt;</code> do taaki product sach mein immutable ho.</li>\n</ul>"
      }
    },
    {
      id: "keyed-services-identity",
      packages: [
        "Microsoft.Extensions.DependencyInjection"
      ],
      src: "using Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddKeyedSingleton<IGreeter, EnglishGreeter>(\"en\");\nservices.AddKeyedSingleton<IGreeter, HindiGreeter>(\"hi\");\nservices.AddKeyedTransient<IGreeter, HindiGreeter>(\"hi-new\");\n\nusing var sp = services.BuildServiceProvider();\n\nConsole.WriteLine(sp.GetRequiredKeyedService<IGreeter>(\"en\").Greet());\nConsole.WriteLine(sp.GetRequiredKeyedService<IGreeter>(\"hi\").Greet());\nConsole.WriteLine(ReferenceEquals(sp.GetRequiredKeyedService<IGreeter>(\"hi\"), sp.GetRequiredKeyedService<IGreeter>(\"hi\")));\nConsole.WriteLine(ReferenceEquals(sp.GetRequiredKeyedService<IGreeter>(\"hi-new\"), sp.GetRequiredKeyedService<IGreeter>(\"hi-new\")));\nConsole.WriteLine(sp.GetKeyedService<IGreeter>(\"fr\") is null);\n\ninterface IGreeter { string Greet(); }\nclass EnglishGreeter : IGreeter { public string Greet() => \"Hello\"; }\nclass HindiGreeter : IGreeter { public string Greet() => \"Namaste\"; }",
      answer: "Hello\nNamaste\nTrue\nFalse\nTrue",
      explain: {
        en: "<ul>\n<li>Each key selects its own registration: \"en\" gives <code>EnglishGreeter</code>, \"hi\" gives <code>HindiGreeter</code>.</li>\n<li>Lifetime still applies per key: \"hi\" is a singleton so two lookups return the same object (True); \"hi-new\" is transient so each lookup is new (False).</li>\n<li>An unknown key with <code>GetKeyedService</code> returns <code>null</code> (True); <code>GetRequiredKeyedService</code> would throw.</li>\n<li>This is the .NET 8 way to \"pick an implementation by name\" without a hand-written factory.</li>\n</ul>",
        hi: "<ul>\n<li>हर key अपनी registration चुनती है: \"en\" से <code>EnglishGreeter</code>, \"hi\" से <code>HindiGreeter</code>।</li>\n<li>Lifetime हर key पर लागू रहती है: \"hi\" singleton है इसलिए दो lookups एक ही object देते हैं (True); \"hi-new\" transient है इसलिए हर lookup नया (False)।</li>\n<li>अनजान key पर <code>GetKeyedService</code> <code>null</code> लौटाता है (True); <code>GetRequiredKeyedService</code> throw करता।</li>\n<li>बिना hand-written factory के \"नाम से implementation चुनने\" का यह .NET 8 तरीका है।</li>\n</ul>",
        hg: "<ul>\n<li>Har key apni registration chunti hai: \"en\" se <code>EnglishGreeter</code>, \"hi\" se <code>HindiGreeter</code>.</li>\n<li>Lifetime har key par lagu rehti hai: \"hi\" singleton hai isliye do lookups ek hi object dete hain (True); \"hi-new\" transient hai isliye har lookup naya (False).</li>\n<li>Anjaan key par <code>GetKeyedService</code> <code>null</code> lautata hai (True); <code>GetRequiredKeyedService</code> throw karta.</li>\n<li>Bina hand-written factory ke \"naam se implementation chunne\" ka yeh .NET 8 tareeka hai.</li>\n</ul>"
      }
    }
  ],
  revision: {
    en: [
      "<b>Creational patterns</b> hide <code>new</code> behind a name so callers depend on abstractions; the DI container is the modern default.",
      "<b>Singleton</b> = one instance plus a global access point; the risk is hidden mutable global state.",
      "<b>Hand-made singleton</b>: private constructor plus <code>static readonly</code> (cheap) or <code>Lazy&lt;T&gt;</code> (expensive); both are thread-safe.",
      "In an app register <code>AddSingleton</code>; a singleton must not hold a scoped service (captive dependency).",
      "A static class is a bag of statics; a singleton is an object you can inject, fake and dispose.",
      "<b>Simple Factory</b> is a static switch, not a GoF pattern; adding a case edits the method.",
      "<b>Factory Method</b>: a subclass picks one product. <b>Abstract Factory</b>: one factory creates a matching family.",
      "<b>Builder</b>: step by step, then <code>Build()</code> validates and returns an immutable product.",
      "<b>Prototype</b>: a record <code>with</code> makes a shallow copy; avoid <code>ICloneable</code>.",
      "Pick an implementation at runtime with keyed services or a registered <code>Func&lt;string, T&gt;</code>, not <code>IServiceProvider</code> in business code.",
      "Add a factory only when it makes a likely change cheaper; one implementation and one caller needs none."
    ],
    meaning: {
      hi: [
        "<b>Creational patterns</b> <code>new</code> को नाम के पीछे छुपाते हैं ताकि callers abstractions पर depend करें; DI container आज का default है।",
        "<b>Singleton</b> = एक instance + एक global access point; ख़तरा छुपा mutable global state है।",
        "हाथ से बना singleton: private constructor + <code>static readonly</code> (सस्ता) या <code>Lazy&lt;T&gt;</code> (महँगा); दोनों thread-safe",
        "App में <code>AddSingleton</code> register करो; singleton scoped service को नहीं पकड़ सकता (captive dependency)",
        "Static class statics का थैला है; singleton ऐसा object है जिसे inject, fake और dispose कर सकते हैं।",
        "<b>Simple Factory</b> static switch है, GoF pattern नहीं; case जोड़ने पर method बदलता है।",
        "<b>Factory Method</b>: subclass एक product चुनती है। <b>Abstract Factory</b>: एक factory मेल खाता family बनाती है।",
        "<b>Builder</b>: step by step, फिर <code>Build()</code> validate करके immutable product लौटाता है।",
        "<b>Prototype</b>: record का <code>with</code> shallow copy बनाता है; <code>ICloneable</code> से बचो।",
        "Runtime पर implementation keyed services या register किए <code>Func&lt;string, T&gt;</code> से चुनो, business code में <code>IServiceProvider</code> से नहीं।",
        "Factory तभी जोड़ो जब वह संभावित बदलाव सस्ता करे; एक implementation और एक caller को ज़रूरत नहीं।"
      ],
      hg: [
        "<b>Creational patterns</b> <code>new</code> ko naam ke peeche chhupate hain taaki callers abstractions par depend karein; DI container aaj ka default hai.",
        "<b>Singleton</b> = ek instance + ek global access point; khatra chhupa mutable global state hai.",
        "Haath se bana singleton: private constructor + <code>static readonly</code> (sasta) ya <code>Lazy&lt;T&gt;</code> (mehnga); dono thread-safe",
        "App mein <code>AddSingleton</code> register karo; singleton scoped service ko nahi pakad sakta (captive dependency)",
        "Static class statics ka thaila hai; singleton aisa object hai jise inject, fake aur dispose kar sakte hain.",
        "<b>Simple Factory</b> static switch hai, GoF pattern nahi; case jodne par method badalta hai.",
        "<b>Factory Method</b>: subclass ek product chunti hai. <b>Abstract Factory</b>: ek factory match karta family banati hai.",
        "<b>Builder</b>: step by step, phir <code>Build()</code> validate karke immutable product lautata hai.",
        "<b>Prototype</b>: record ka <code>with</code> shallow copy banata hai; <code>ICloneable</code> se bacho.",
        "Runtime par implementation keyed services ya register kiye <code>Func&lt;string, T&gt;</code> se chuno, business code mein <code>IServiceProvider</code> se nahi.",
        "Factory tabhi jodo jab woh sambhavit badlaav sasta kare; ek implementation aur ek caller ko zaroorat nahi."
      ]
    }
  }
};
