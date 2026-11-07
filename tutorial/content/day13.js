// Day 13 — Web API, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 13,
  format: "lesson",
  title: {
    en: "Web API",
    hi: "Web API (REST से rate limiting तक)",
    hg: "Web API (REST se rate limiting tak)"
  },
  summary: {
    en: "<p>Day 13 builds a <b>tickets HTTP API</b> for the customer-care CRM in 7 short lessons. First the design: resources, verbs and status codes. Then the safety layer: input validation, one error format, JWT sign-in with 401 and 403, and CORS. Last comes protection: rate limiting with 429.</p><p>Every lesson runs a complete program on an in-process test server, so you see the real status codes and headers. Caching, versioning, ETags, OpenAPI and HttpClientFactory are in the Deep Dive.</p>",
    hi: "<p>Day 13 में 7 छोटे पाठों में customer-care CRM के लिए <b>tickets की HTTP API</b> बनती है। पहले design: resources, verbs और status codes। फिर safety वाली परत: input की जाँच, एक जैसा error format, JWT sign-in के साथ 401 और 403, और CORS। आख़िर में बचाव: 429 के साथ rate limiting।</p><p>हर पाठ में एक पूरा program in-process test server पर चलता है, इसलिए असली status codes और headers दिखते हैं। Caching, versioning, ETags, OpenAPI और HttpClientFactory Deep Dive में हैं।</p>",
    hg: "<p>Day 13 mein 7 chhote lessons mein customer-care CRM ke liye <b>tickets ki HTTP API</b> banti hai. Pehle design: resources, verbs aur status codes. Phir safety wali parat: input ki jaanch, ek jaisa error format, JWT sign-in ke saath 401 aur 403, aur CORS. Aakhir mein bachaav: 429 ke saath rate limiting.</p><p>Har lesson mein ek poora program in-process test server par chalta hai, isliye asli status codes aur headers dikhte hain. Caching, versioning, ETags, OpenAPI aur HttpClientFactory Deep Dive mein hain.</p>"
  },
  sections: [
    {
      id: "verbs-resources",
      depth: "short",
      title: {
        en: "Resources and HTTP verbs",
        hi: "Resources और HTTP verbs",
        hg: "Resources aur HTTP verbs"
      },
      lesson: {
        buildsOn: {
          en: "<p>Day 1 built the <code>SupportTicket</code>, and Day 12 gave you the pipeline, DI and Minimal API routes. Today we put the tickets behind an HTTP API, starting with how a URL and a verb describe one action.</p>",
          hi: "<p>Day 1 में <code>SupportTicket</code> बना था और Day 12 में pipeline, DI और Minimal API routes मिले। आज tickets को HTTP API के पीछे रखते हैं, और सबसे पहले देखते हैं कि URL और verb मिलकर एक काम कैसे बताते हैं।</p>",
          hg: "<p>Day 1 mein <code>SupportTicket</code> bana tha aur Day 12 mein pipeline, DI aur Minimal API routes mile. Aaj tickets ko HTTP API ke peeche rakhte hain, aur sabse pehle dekhte hain ki URL aur verb milkar ek kaam kaise batate hain.</p>"
        },
        what: {
          en: "<p>In a REST API the URL names a <b>resource</b> (a thing, like a ticket) with a noun: <code>/tickets/501</code>. The HTTP <b>verb</b> says the action: GET reads, POST creates, PUT replaces, DELETE removes.</p><p>A verb is <b>safe</b> if it only reads (GET). It is <b>idempotent</b> if repeating it leaves the same result on the server (GET, PUT, DELETE). POST is not idempotent.</p>",
          hi: "<p>REST API में URL एक <b>resource</b> (यानी कोई चीज़, जैसे ticket) का नाम बताता है, noun के रूप में: <code>/tickets/501</code>। HTTP <b>verb</b> काम बताता है: GET पढ़ता है, POST नया बनाता है, PUT बदलकर रखता है, DELETE हटाता है।</p><p>जो verb सिर्फ़ पढ़ता है वह <b>safe</b> है (GET)। जिसे दोहराने पर server पर नतीजा वही रहे वह <b>idempotent</b> है (GET, PUT, DELETE)। POST idempotent नहीं है।</p>",
          hg: "<p>REST API mein URL ek <b>resource</b> (yaani koi cheez, jaise ticket) ka naam batata hai, noun ke roop mein: <code>/tickets/501</code>. HTTP <b>verb</b> kaam batata hai: GET padhta hai, POST naya banata hai, PUT badalkar rakhta hai, DELETE hataata hai.</p><p>Jo verb sirf padhta hai woh <b>safe</b> hai (GET). Jise dohrane par server par nateeja wahi rahe woh <b>idempotent</b> hai (GET, PUT, DELETE). POST idempotent nahi hai.</p>"
        },
        why: {
          en: "<p>Apps, websites and partners all call your API, so they must guess the rules without a manual. Phones also lose network and <b>retry</b> automatically. A retried GET or PUT is harmless; a retried POST can create a second ticket.</p>",
          hi: "<p>Apps, websites और partners सब आपकी API को call करते हैं, इसलिए उन्हें बिना manual के नियम समझ आने चाहिए। Phone का network जाता है तो वह अपने-आप <b>retry</b> भी करता है। दोबारा गया GET या PUT नुक़सान नहीं करता; दोबारा गया POST दूसरा ticket बना सकता है।</p>",
          hg: "<p>Apps, websites aur partners sab aapki API ko call karte hain, isliye unhein bina manual ke niyam samajh aane chahiye. Phone ka network jaata hai to woh apne-aap <b>retry</b> bhi karta hai. Dobara gaya GET ya PUT nuksaan nahi karta; dobara gaya POST doosra ticket bana sakta hai.</p>"
        },
        analogy: {
          en: "<p>At a chai stall: asking \"how much is my bill?\" changes nothing (GET). Saying \"one more chai\" twice gives two chai (POST). Saying \"make my chai sweet\" twice still leaves one sweet chai (PUT). Cancelling the chai twice leaves it cancelled (DELETE).</p>",
          hi: "<p>चाय की दुकान पर: \"मेरा बिल कितना हुआ?\" पूछने से कुछ नहीं बदलता (GET)। \"एक चाय और\" दो बार बोलो तो दो चाय आती हैं (POST)। \"मेरी चाय मीठी कर दो\" दो बार बोलो तो भी एक ही मीठी चाय रहती है (PUT)। चाय cancel दो बार करो तो भी वह cancel ही रहती है (DELETE)।</p>",
          hg: "<p>Chai ki dukaan par: \"mera bill kitna hua?\" poochne se kuch nahi badalta (GET). \"Ek chai aur\" do baar bolo to do chai aati hain (POST). \"Meri chai meethi kar do\" do baar bolo to bhi ek hi meethi chai rehti hai (PUT). Chai cancel do baar karo to bhi woh cancel hi rehti hai (DELETE).</p>"
        },
        lines: [
          {
            code: "builder.WebHost.UseTestServer();",
            note: {
              en: "The API runs inside this program on a test server, with no real network. That is why the output is the same every time. Every lesson today uses this setup.",
              hi: "API इसी program के अंदर test server पर चलती है, असली network के बिना। इसीलिए output हर बार वही रहता है। आज के सारे पाठ यही setup use करते हैं।",
              hg: "API isi program ke andar test server par chalti hai, asli network ke bina. Isiliye output har baar wahi rehta hai. Aaj ke saare lessons yahi setup use karte hain."
            }
          },
          {
            code: "app.MapGet(\"/tickets/{id:int}\"",
            note: {
              en: "Noun URL plus verb. <code>{id:int}</code> is a route parameter that must be a number. GET only reads the ticket.",
              hi: "Noun वाला URL और उसके साथ verb। <code>{id:int}</code> route parameter है जो number ही होना चाहिए। GET सिर्फ़ ticket पढ़ता है।",
              hg: "Noun wala URL aur uske saath verb. <code>{id:int}</code> route parameter hai jo number hi hona chahiye. GET sirf ticket padhta hai."
            }
          },
          {
            code: "return Results.Created($\"/tickets/{nextId++}\", null);",
            note: {
              en: "POST creates a new ticket on every call (ids 501, 502). It answers 201 Created with a <code>Location</code> header; lesson 2 explains both.",
              hi: "POST हर call पर नया ticket बनाता है (ids 501, 502)। जवाब में 201 Created और <code>Location</code> header आता है; दोनों पाठ 2 में समझेंगे।",
              hg: "POST har call par naya ticket banata hai (ids 501, 502). Jawab mein 201 Created aur <code>Location</code> header aata hai; dono lesson 2 mein samjhenge."
            }
          },
          {
            code: "app.MapPut(\"/tickets/{id:int}/status\", (int id, string value) =>",
            note: {
              en: "PUT sets the status of one ticket to a given value. <code>status</code> is a sub-resource, so the URL is still a noun. Sending the same request twice gives the same result.",
              hi: "PUT एक ticket का status दी गई value पर set करता है। <code>status</code> sub-resource है, इसलिए URL अब भी noun ही है। वही request दो बार भेजो तो नतीजा वही रहता है।",
              hg: "PUT ek ticket ka status di gayi value par set karta hai. <code>status</code> sub-resource hai, isliye URL ab bhi noun hi hai. Wahi request do baar bhejo to nateeja wahi rehta hai."
            }
          },
          {
            code: "Console.WriteLine($\"PUT twice: ticket 501 is {tickets[501]}, still {tickets.Count} tickets\");",
            note: {
              en: "The proof for PUT: two calls, still two tickets in total, and ticket 501 is <code>Closed</code>.",
              hi: "PUT का सबूत: दो calls के बाद भी कुल दो tickets ही हैं, और ticket 501 <code>Closed</code> है।",
              hg: "PUT ka saboot: do calls ke baad bhi kul do tickets hi hain, aur ticket 501 <code>Closed</code> hai."
            }
          },
          {
            code: "Console.WriteLine($\"GET twice: state unchanged = {before == string.Join(\",\", tickets)}\");",
            note: {
              en: "GET is safe: two reads leave the data exactly as it was, so this prints <code>True</code>.",
              hi: "GET safe है: दो बार पढ़ने के बाद data बिल्कुल वैसा ही रहता है, इसलिए यहाँ <code>True</code> print होता है।",
              hg: "GET safe hai: do baar padhne ke baad data bilkul waisa hi rehta hai, isliye yahan <code>True</code> print hota hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Putting the action in the URL: <code>/getTicket</code> or <code>/closeTicket</code>. Use a noun and let the verb be the action.</li><li>Changing data with GET. Browsers, caches and crawlers may repeat a GET at any time.</li><li>Treating POST like PUT. Retrying a failed POST can create duplicate tickets.</li></ul>",
          hi: "<ul><li>URL में काम लिख देना: <code>/getTicket</code> या <code>/closeTicket</code>। Noun रखो और काम verb से बताओ।</li><li>GET से data बदलना। Browser, cache और crawler कभी भी GET दोहरा सकते हैं।</li><li>POST को PUT जैसा समझना। फ़ेल हुए POST को retry करने से duplicate tickets बन सकते हैं।</li></ul>",
          hg: "<ul><li>URL mein kaam likh dena: <code>/getTicket</code> ya <code>/closeTicket</code>. Noun rakho aur kaam verb se batao.</li><li>GET se data badalna. Browser, cache aur crawler kabhi bhi GET dohra sakte hain.</li><li>POST ko PUT jaisa samajhna. Fail hue POST ko retry karne se duplicate tickets ban sakte hain.</li></ul>"
        },
        whenToUse: {
          en: "<ul><li><b>GET</b> to read. <b>POST</b> to create something new or to start an action.</li><li><b>PUT</b> when the client sends the full new value and you replace it. <b>PATCH</b> when it sends only the changed fields (not guaranteed idempotent).</li><li><b>DELETE</b> to remove. Never hide a change behind a GET.</li></ul>",
          hi: "<ul><li><b>GET</b> पढ़ने के लिए। <b>POST</b> कुछ नया बनाने या कोई काम शुरू करने के लिए।</li><li><b>PUT</b> तब जब client पूरी नई value भेजे और आप उसे बदल दें। <b>PATCH</b> तब जब वह सिर्फ़ बदले हुए fields भेजे (idempotent होने की गारंटी नहीं)।</li><li><b>DELETE</b> हटाने के लिए। कोई बदलाव GET के पीछे मत छिपाओ।</li></ul>",
          hg: "<ul><li><b>GET</b> padhne ke liye. <b>POST</b> kuch naya banane ya koi kaam shuru karne ke liye.</li><li><b>PUT</b> tab jab client poori nayi value bheje aur aap use badal dein. <b>PATCH</b> tab jab woh sirf badle hue fields bheje (idempotent hone ki guarantee nahi).</li><li><b>DELETE</b> hataane ke liye. Koi badlaav GET ke peeche mat chhipao.</li></ul>"
        },
        exercise: {
          task: {
            en: "<p>Add <code>DELETE /tickets/{id:int}</code>. Call it twice for ticket 502 and print <code>DELETE twice: 1 ticket left</code>.</p>",
            hi: "<p><code>DELETE /tickets/{id:int}</code> जोड़ो। Ticket 502 के लिए इसे दो बार call करो और <code>DELETE twice: 1 ticket left</code> print करो।</p>",
            hg: "<p><code>DELETE /tickets/{id:int}</code> jodo. Ticket 502 ke liye ise do baar call karo aur <code>DELETE twice: 1 ticket left</code> print karo.</p>"
          },
          hint: {
            en: "<p>Use <code>tickets.Remove(id)</code> and return <code>Results.NoContent()</code>. Removing a missing key is harmless, so the second call changes nothing.</p>",
            hi: "<p><code>tickets.Remove(id)</code> use करो और <code>Results.NoContent()</code> लौटाओ। जो key है ही नहीं उसे हटाने से कुछ नहीं बिगड़ता, इसलिए दूसरी call कुछ नहीं बदलती।</p>",
            hg: "<p><code>tickets.Remove(id)</code> use karo aur <code>Results.NoContent()</code> lautao. Jo key hai hi nahi use hataane se kuch nahi bigadta, isliye doosri call kuch nahi badalti.</p>"
          },
          solution: {
            caption: {
              en: "Solution: DELETE is idempotent too",
              hi: "हल: DELETE भी idempotent है",
              hg: "Hal: DELETE bhi idempotent hai"
            },
            src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nvar app = builder.Build();\n\nvar tickets = new Dictionary<int, string>();   // ticket id -> status\nvar nextId = 501;\n\napp.MapGet(\"/tickets/{id:int}\", (int id) =>\n    tickets.TryGetValue(id, out var status) ? Results.Ok(status) : Results.NotFound());\napp.MapPost(\"/tickets\", () =>\n{\n    tickets[nextId] = \"Open\";\n    return Results.Created($\"/tickets/{nextId++}\", null);\n});\napp.MapPut(\"/tickets/{id:int}/status\", (int id, string value) =>\n{\n    tickets[id] = value;\n    return Results.NoContent();\n});\n\napp.MapDelete(\"/tickets/{id:int}\", (int id) =>\n{\n    tickets.Remove(id);          // removing twice leaves the same state\n    return Results.NoContent();\n});\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nawait client.PostAsync(\"/tickets\", null);\nawait client.PostAsync(\"/tickets\", null);\nConsole.WriteLine($\"POST twice: {tickets.Count} tickets ({string.Join(\", \", tickets.Keys)})\");\n\nawait client.PutAsync(\"/tickets/501/status?value=Closed\", null);\nawait client.PutAsync(\"/tickets/501/status?value=Closed\", null);\nConsole.WriteLine($\"PUT twice: ticket 501 is {tickets[501]}, still {tickets.Count} tickets\");\n\nvar before = string.Join(\",\", tickets);\nawait client.GetAsync(\"/tickets/501\");\nawait client.GetAsync(\"/tickets/501\");\nConsole.WriteLine($\"GET twice: state unchanged = {before == string.Join(\",\", tickets)}\");\nawait client.DeleteAsync(\"/tickets/502\");\nawait client.DeleteAsync(\"/tickets/502\");\nConsole.WriteLine($\"DELETE twice: {tickets.Count} ticket left\");\nawait app.StopAsync();\n",
            check: "run",
            packages: [
              "Microsoft.AspNetCore.TestHost"
            ],
            frameworks: [
              "aspnetcore"
            ],
            expected: "POST twice: 2 tickets (501, 502)\nPUT twice: ticket 501 is Closed, still 2 tickets\nGET twice: state unchanged = True\nDELETE twice: 1 ticket left"
          }
        },
        quiz: {
          q: {
            en: "A phone app loses its network right after sending a request and retries it automatically. Which verb can create a duplicate unless you add extra protection?",
            hi: "एक phone app request भेजते ही network खो देता है और अपने-आप उसे retry करता है। कौन-सा verb extra बचाव के बिना duplicate बना सकता है?",
            hg: "Ek phone app request bhejte hi network kho deta hai aur apne-aap use retry karta hai. Kaunsa verb extra protection ke bina duplicate bana sakta hai?"
          },
          options: [
            {
              en: "<code>GET</code>",
              hi: "<code>GET</code> वाला verb",
              hg: "<code>GET</code> wala verb"
            },
            {
              en: "<code>POST</code>",
              hi: "<code>POST</code> वाला verb",
              hg: "<code>POST</code> wala verb"
            },
            {
              en: "<code>PUT</code>",
              hi: "<code>PUT</code> वाला verb",
              hg: "<code>PUT</code> wala verb"
            },
            {
              en: "<code>DELETE</code>",
              hi: "<code>DELETE</code> वाला verb",
              hg: "<code>DELETE</code> wala verb"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>POST is not idempotent: each call creates one more ticket. GET only reads, and PUT and DELETE leave the same state when repeated.</p>",
            hi: "<p>POST idempotent नहीं है: हर call एक और ticket बनाती है। GET सिर्फ़ पढ़ता है, और PUT व DELETE दोहराने पर भी state वही छोड़ते हैं।</p>",
            hg: "<p>POST idempotent nahi hai: har call ek aur ticket banati hai. GET sirf padhta hai, aur PUT va DELETE dohrane par bhi state wahi chhodte hain.</p>"
          }
        },
        recap: {
          en: "<ul><li>URL is a noun (the resource); the verb is the action.</li><li>GET is safe; GET, PUT and DELETE are idempotent.</li><li>POST is not idempotent, so a retry can create a duplicate.</li></ul>",
          hi: "<ul><li>URL noun है (resource); verb काम है।</li><li>GET safe है; GET, PUT और DELETE idempotent हैं।</li><li>POST idempotent नहीं है, इसलिए retry से duplicate बन सकता है।</li></ul>",
          hg: "<ul><li>URL noun hai (resource); verb kaam hai.</li><li>GET safe hai; GET, PUT aur DELETE idempotent hain.</li><li>POST idempotent nahi hai, isliye retry se duplicate ban sakta hai.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Tickets API: POST, PUT and GET, called twice each",
            hi: "Tickets API: POST, PUT और GET, हर एक दो बार",
            hg: "Tickets API: POST, PUT aur GET, har ek do baar"
          },
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nvar app = builder.Build();\n\nvar tickets = new Dictionary<int, string>();   // ticket id -> status\nvar nextId = 501;\n\napp.MapGet(\"/tickets/{id:int}\", (int id) =>\n    tickets.TryGetValue(id, out var status) ? Results.Ok(status) : Results.NotFound());\napp.MapPost(\"/tickets\", () =>\n{\n    tickets[nextId] = \"Open\";\n    return Results.Created($\"/tickets/{nextId++}\", null);\n});\napp.MapPut(\"/tickets/{id:int}/status\", (int id, string value) =>\n{\n    tickets[id] = value;\n    return Results.NoContent();\n});\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nawait client.PostAsync(\"/tickets\", null);\nawait client.PostAsync(\"/tickets\", null);\nConsole.WriteLine($\"POST twice: {tickets.Count} tickets ({string.Join(\", \", tickets.Keys)})\");\n\nawait client.PutAsync(\"/tickets/501/status?value=Closed\", null);\nawait client.PutAsync(\"/tickets/501/status?value=Closed\", null);\nConsole.WriteLine($\"PUT twice: ticket 501 is {tickets[501]}, still {tickets.Count} tickets\");\n\nvar before = string.Join(\",\", tickets);\nawait client.GetAsync(\"/tickets/501\");\nawait client.GetAsync(\"/tickets/501\");\nConsole.WriteLine($\"GET twice: state unchanged = {before == string.Join(\",\", tickets)}\");\nawait app.StopAsync();\n",
          check: "run",
          packages: [
            "Microsoft.AspNetCore.TestHost"
          ],
          frameworks: [
            "aspnetcore"
          ],
          expected: "POST twice: 2 tickets (501, 502)\nPUT twice: ticket 501 is Closed, still 2 tickets\nGET twice: state unchanged = True"
        }
      ]
    },
    {
      id: "status-codes",
      depth: "short",
      title: {
        en: "Status codes and Location",
        hi: "Status codes और Location",
        hg: "Status codes aur Location"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 1 mapped verbs to ticket routes and returned results such as <code>Created</code> and <code>NoContent</code>. Now we look at the number each answer carries, and what the client should do with it.</p>",
          hi: "<p>पाठ 1 में verbs को ticket routes से जोड़ा और <code>Created</code>, <code>NoContent</code> जैसे results लौटाए। अब देखते हैं कि हर जवाब के साथ कौन-सा number जाता है, और client उसका क्या करे।</p>",
          hg: "<p>Lesson 1 mein verbs ko ticket routes se joda aur <code>Created</code>, <code>NoContent</code> jaise results lautaye. Ab dekhte hain ki har jawab ke saath kaunsa number jaata hai, aur client uska kya kare.</p>"
        },
        what: {
          en: "<p>A <b>status code</b> is a 3-digit number in every HTTP response. <b>2xx</b> means success, <b>4xx</b> means the client made a mistake, <b>5xx</b> means the server failed.</p><p>The ones you use daily: 200 OK, 201 Created (with a <code>Location</code> header), 204 No Content, 400 Bad Request, 404 Not Found, 409 Conflict.</p>",
          hi: "<p><b>Status code</b> हर HTTP response में 3 अंकों का number होता है। <b>2xx</b> मतलब सफलता, <b>4xx</b> मतलब client से ग़लती हुई, <b>5xx</b> मतलब server फ़ेल हुआ।</p><p>रोज़ काम आने वाले: 200 OK, 201 Created (साथ में <code>Location</code> header), 204 No Content, 400 Bad Request, 404 Not Found, 409 Conflict।</p>",
          hg: "<p><b>Status code</b> har HTTP response mein 3 ankon ka number hota hai. <b>2xx</b> matlab safalta, <b>4xx</b> matlab client se galti hui, <b>5xx</b> matlab server fail hua.</p><p>Roz kaam aane wale: 200 OK, 201 Created (saath mein <code>Location</code> header), 204 No Content, 400 Bad Request, 404 Not Found, 409 Conflict.</p>"
        },
        why: {
          en: "<p>Client code, retry libraries and monitoring decide what to do from the <b>number</b>, not from your message text. A \"200 OK\" that carries an error message fools all of them.</p>",
          hi: "<p>Client code, retry libraries और monitoring यह <b>number</b> देखकर तय करते हैं कि क्या करना है, आपका message text देखकर नहीं। Error message वाला \"200 OK\" इन सबको धोखा दे देता है।</p>",
          hg: "<p>Client code, retry libraries aur monitoring yeh <b>number</b> dekhkar tay karte hain ki kya karna hai, aapka message text dekhkar nahi. Error message wala \"200 OK\" in sabko dhokha de deta hai.</p>"
        },
        analogy: {
          en: "<p>Think of courier tracking. \"Delivered\" is a 2xx. \"Wrong address given by the customer\" is a 4xx: the sender must fix it. \"Our delivery van broke down\" is a 5xx: the company must fix it.</p>",
          hi: "<p>Courier tracking सोचो। \"Delivered\" 2xx है। \"Customer ने ग़लत address दिया\" 4xx है: भेजने वाले को ठीक करना होगा। \"हमारी delivery van ख़राब हो गई\" 5xx है: कंपनी को ठीक करना होगा।</p>",
          hg: "<p>Courier tracking socho. \"Delivered\" 2xx hai. \"Customer ne galat address diya\" 4xx hai: bhejne wale ko theek karna hoga. \"Hamari delivery van kharaab ho gayi\" 5xx hai: company ko theek karna hoga.</p>"
        },
        lines: [
          {
            code: "return Results.Conflict();",
            note: {
              en: "<b>409 Conflict</b>: the request is valid, but it clashes with the current state (the same ticket already exists). It is not a 400 and not a 500.",
              hi: "<b>409 Conflict</b>: request सही है, पर मौजूदा state से टकराती है (वही ticket पहले से है)। यह न 400 है, न 500।",
              hg: "<b>409 Conflict</b>: request sahi hai, par maujooda state se takraati hai (wahi ticket pehle se hai). Yeh na 400 hai, na 500."
            }
          },
          {
            code: "return Results.Created($\"/tickets/{nextId}\", new { id = nextId++ });",
            note: {
              en: "<b>201 Created</b> plus a <code>Location</code> header: the address of the new ticket. The body repeats the new id.",
              hi: "<b>201 Created</b> और साथ में <code>Location</code> header: नए ticket का पता। Body में नया id दोहराया जाता है।",
              hg: "<b>201 Created</b> aur saath mein <code>Location</code> header: naye ticket ka pata. Body mein naya id dohraya jaata hai."
            }
          },
          {
            code: "tickets.TryGetValue(id, out var t) ? Results.Ok(t.Issue) : Results.NotFound()",
            note: {
              en: "One lookup, two answers: <b>200 OK</b> with the data, or <b>404 Not Found</b> when the id does not exist.",
              hi: "एक lookup, दो जवाब: data के साथ <b>200 OK</b>, या id न होने पर <b>404 Not Found</b>।",
              hg: "Ek lookup, do jawab: data ke saath <b>200 OK</b>, ya id na hone par <b>404 Not Found</b>."
            }
          },
          {
            code: "tickets.Remove(id) ? Results.NoContent() : Results.NotFound()",
            note: {
              en: "<b>204 No Content</b> means success with an empty body. The second DELETE gets 404 because the ticket is already gone. Many teams return 204 there too; either is fine if you document it.",
              hi: "<b>204 No Content</b> मतलब सफलता और body ख़ाली। दूसरे DELETE पर 404 आता है क्योंकि ticket पहले ही जा चुका है। कई teams वहाँ भी 204 देती हैं; documented हो तो दोनों ठीक हैं।",
              hg: "<b>204 No Content</b> matlab safalta aur body khaali. Doosre DELETE par 404 aata hai kyunki ticket pehle hi ja chuka hai. Kai teams wahan bhi 204 deti hain; documented ho to dono theek hain."
            }
          },
          {
            code: "async Task Show(HttpMethod method, string url)",
            note: {
              en: "A small helper that sends one request and prints verb, URL, status code and (if present) the <code>Location</code>.",
              hi: "छोटा helper जो एक request भेजकर verb, URL, status code और (हो तो) <code>Location</code> print करता है।",
              hg: "Chhota helper jo ek request bhejkar verb, URL, status code aur (ho to) <code>Location</code> print karta hai."
            }
          },
          {
            code: "var location = r.Headers.Location is null ? \"\" :",
            note: {
              en: "Reads the <code>Location</code> response header. Only the 201 response has one, so only that output line shows it.",
              hi: "<code>Location</code> response header पढ़ता है। यह सिर्फ़ 201 वाले response में होता है, इसलिए सिर्फ़ उसी output line में दिखता है।",
              hg: "<code>Location</code> response header padhta hai. Yeh sirf 201 wale response mein hota hai, isliye sirf usi output line mein dikhta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Returning 200 with <code>{\"error\": ...}</code> in the body. Clients and monitoring only see \"success\".</li><li>Using 400 or 500 for everything. A duplicate is 409; a missing ticket is 404; a bug is 500.</li><li>Sending a body with 204. No Content means exactly that.</li></ul>",
          hi: "<ul><li>200 लौटाना और body में <code>{\"error\": ...}</code> रखना। Client और monitoring को सिर्फ़ \"सफल\" दिखता है।</li><li>हर चीज़ के लिए 400 या 500 देना। Duplicate 409 है; न मिला हुआ ticket 404 है; bug 500 है।</li><li>204 के साथ body भेजना। No Content का मतलब ठीक यही है।</li></ul>",
          hg: "<ul><li>200 lautana aur body mein <code>{\"error\": ...}</code> rakhna. Client aur monitoring ko sirf \"safal\" dikhta hai.</li><li>Har cheez ke liye 400 ya 500 dena. Duplicate 409 hai; na mila hua ticket 404 hai; bug 500 hai.</li><li>204 ke saath body bhejna. No Content ka matlab theek yahi hai.</li></ul>"
        },
        whenToUse: {
          en: "<ul><li><b>200</b> read worked. <b>201</b> + <code>Location</code> after create. <b>204</b> success with nothing to send back.</li><li><b>400</b> input is wrong. <b>404</b> no such resource. <b>409</b> clash with current state.</li><li><b>5xx</b> only when the server itself failed. Lessons 5 and 7 add 401, 403 and 429.</li></ul>",
          hi: "<ul><li><b>200</b> पढ़ना सफल रहा। Create के बाद <b>201</b> + <code>Location</code>। <b>204</b> सफलता, लौटाने को कुछ नहीं।</li><li><b>400</b> input ग़लत है। <b>404</b> ऐसा resource नहीं है। <b>409</b> मौजूदा state से टकराव।</li><li><b>5xx</b> सिर्फ़ तब जब server ख़ुद फ़ेल हुआ हो। पाठ 5 और 7 में 401, 403 और 429 जुड़ेंगे।</li></ul>",
          hg: "<ul><li><b>200</b> padhna safal raha. Create ke baad <b>201</b> + <code>Location</code>. <b>204</b> safalta, lautane ko kuch nahi.</li><li><b>400</b> input galat hai. <b>404</b> aisa resource nahi hai. <b>409</b> maujooda state se takraav.</li><li><b>5xx</b> sirf tab jab server khud fail hua ho. Lesson 5 aur 7 mein 401, 403 aur 429 judenge.</li></ul>"
        },
        exercise: {
          task: {
            en: "<p>Make <code>POST /tickets</code> return <b>400</b> when <code>customer</code> is blank. Add one request with an empty customer and print its status.</p>",
            hi: "<p><code>customer</code> ख़ाली हो तो <code>POST /tickets</code> से <b>400</b> लौटाओ। एक request ख़ाली customer के साथ जोड़ो और उसका status print करो।</p>",
            hg: "<p><code>customer</code> khaali ho to <code>POST /tickets</code> se <b>400</b> lautao. Ek request khaali customer ke saath jodo aur uska status print karo.</p>"
          },
          hint: {
            en: "<p>Check <code>string.IsNullOrWhiteSpace(customer)</code> first and return <code>Results.BadRequest()</code>. Then call <code>Show</code> with <code>customer=</code> empty.</p>",
            hi: "<p>पहले <code>string.IsNullOrWhiteSpace(customer)</code> जाँचो और <code>Results.BadRequest()</code> लौटाओ। फिर <code>Show</code> को ख़ाली <code>customer=</code> के साथ call करो।</p>",
            hg: "<p>Pehle <code>string.IsNullOrWhiteSpace(customer)</code> jaancho aur <code>Results.BadRequest()</code> lautao. Phir <code>Show</code> ko khaali <code>customer=</code> ke saath call karo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: 400 for a blank customer",
              hi: "हल: ख़ाली customer पर 400",
              hg: "Hal: khaali customer par 400"
            },
            src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nvar app = builder.Build();\n\nvar tickets = new Dictionary<int, (string Customer, string Issue)>();\nvar nextId = 501;\n\napp.MapPost(\"/tickets\", (string customer, string issue) =>\n{\n    if (string.IsNullOrWhiteSpace(customer)) return Results.BadRequest();   // 400: missing input\n    if (tickets.Values.Any(t => t.Customer == customer && t.Issue == issue))\n        return Results.Conflict();                       // 409: same ticket already exists\n    tickets[nextId] = (customer, issue);\n    return Results.Created($\"/tickets/{nextId}\", new { id = nextId++ });   // 201 + Location\n});\napp.MapGet(\"/tickets/{id:int}\", (int id) =>\n    tickets.TryGetValue(id, out var t) ? Results.Ok(t.Issue) : Results.NotFound());   // 200 or 404\napp.MapDelete(\"/tickets/{id:int}\", (int id) =>\n    tickets.Remove(id) ? Results.NoContent() : Results.NotFound());                   // 204 or 404\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nasync Task Show(HttpMethod method, string url)\n{\n    var r = await client.SendAsync(new HttpRequestMessage(method, url));\n    var location = r.Headers.Location is null ? \"\" : $\" Location: {r.Headers.Location}\";\n    Console.WriteLine($\"{method} {url} -> {(int)r.StatusCode}{location}\");\n}\n\nawait Show(HttpMethod.Post, \"/tickets?customer=Asha&issue=Login\");\nawait Show(HttpMethod.Post, \"/tickets?customer=Asha&issue=Login\");\nawait Show(HttpMethod.Get, \"/tickets/501\");\nawait Show(HttpMethod.Get, \"/tickets/999\");\nawait Show(HttpMethod.Post, \"/tickets?customer=&issue=Login\");\nawait Show(HttpMethod.Delete, \"/tickets/501\");\nawait Show(HttpMethod.Delete, \"/tickets/501\");\nawait app.StopAsync();\n",
            check: "run",
            packages: [
              "Microsoft.AspNetCore.TestHost"
            ],
            frameworks: [
              "aspnetcore"
            ],
            expected: "POST /tickets?customer=Asha&issue=Login -> 201 Location: /tickets/501\nPOST /tickets?customer=Asha&issue=Login -> 409\nGET /tickets/501 -> 200\nGET /tickets/999 -> 404\nPOST /tickets?customer=&issue=Login -> 400\nDELETE /tickets/501 -> 204\nDELETE /tickets/501 -> 404"
          }
        },
        quiz: {
          q: {
            en: "A client sends <code>POST /tickets</code> for a ticket that already exists (same customer and issue). Which status fits best?",
            hi: "Client उस ticket के लिए <code>POST /tickets</code> भेजता है जो पहले से है (वही customer और issue)। कौन-सा status सबसे ठीक है?",
            hg: "Client us ticket ke liye <code>POST /tickets</code> bhejta hai jo pehle se hai (wahi customer aur issue). Kaunsa status sabse theek hai?"
          },
          options: [
            {
              en: "<code>400 Bad Request</code>",
              hi: "<code>400 Bad Request</code> (input ग़लत)",
              hg: "<code>400 Bad Request</code> (input galat)"
            },
            {
              en: "<code>404 Not Found</code>",
              hi: "<code>404 Not Found</code> (नहीं मिला)",
              hg: "<code>404 Not Found</code> (nahi mila)"
            },
            {
              en: "<code>500 Internal Server Error</code>",
              hi: "<code>500 Internal Server Error</code> (server ग़लती)",
              hg: "<code>500 Internal Server Error</code> (server galti)"
            },
            {
              en: "<code>409 Conflict</code>",
              hi: "<code>409 Conflict</code> (टकराव)",
              hg: "<code>409 Conflict</code> (takraav)"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>The request itself is well-formed, but it clashes with data already on the server, which is exactly what 409 means. 400 is for malformed input, 404 for a missing resource, and 500 for a server bug.</p>",
            hi: "<p>Request ख़ुद ठीक बनी है, पर server पर पहले से मौजूद data से टकराती है, और 409 का मतलब यही है। 400 बिगड़े हुए input के लिए है, 404 न मिले resource के लिए, और 500 server के bug के लिए।</p>",
            hg: "<p>Request khud theek bani hai, par server par pehle se maujood data se takraati hai, aur 409 ka matlab yahi hai. 400 bigde hue input ke liye hai, 404 na mile resource ke liye, aur 500 server ke bug ke liye.</p>"
          }
        },
        recap: {
          en: "<ul><li>2xx success, 4xx client mistake, 5xx server failure.</li><li>Create gives 201 + <code>Location</code>; a clash is 409; a missing item is 404.</li><li>Clients react to the number, so never hide an error inside a 200.</li></ul>",
          hi: "<ul><li>2xx सफलता, 4xx client की ग़लती, 5xx server का फ़ेल होना।</li><li>Create पर 201 + <code>Location</code>; टकराव 409; न मिला हुआ item 404।</li><li>Client number देखकर react करते हैं, इसलिए error को कभी 200 के अंदर मत छिपाओ।</li></ul>",
          hg: "<ul><li>2xx safalta, 4xx client ki galti, 5xx server ka fail hona.</li><li>Create par 201 + <code>Location</code>; takraav 409; na mila hua item 404.</li><li>Client number dekhkar react karte hain, isliye error ko kabhi 200 ke andar mat chhipao.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Create, read and delete with the right status codes",
            hi: "सही status codes के साथ create, read और delete",
            hg: "Sahi status codes ke saath create, read aur delete"
          },
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nvar app = builder.Build();\n\nvar tickets = new Dictionary<int, (string Customer, string Issue)>();\nvar nextId = 501;\n\napp.MapPost(\"/tickets\", (string customer, string issue) =>\n{\n    if (tickets.Values.Any(t => t.Customer == customer && t.Issue == issue))\n        return Results.Conflict();                       // 409: same ticket already exists\n    tickets[nextId] = (customer, issue);\n    return Results.Created($\"/tickets/{nextId}\", new { id = nextId++ });   // 201 + Location\n});\napp.MapGet(\"/tickets/{id:int}\", (int id) =>\n    tickets.TryGetValue(id, out var t) ? Results.Ok(t.Issue) : Results.NotFound());   // 200 or 404\napp.MapDelete(\"/tickets/{id:int}\", (int id) =>\n    tickets.Remove(id) ? Results.NoContent() : Results.NotFound());                   // 204 or 404\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nasync Task Show(HttpMethod method, string url)\n{\n    var r = await client.SendAsync(new HttpRequestMessage(method, url));\n    var location = r.Headers.Location is null ? \"\" : $\" Location: {r.Headers.Location}\";\n    Console.WriteLine($\"{method} {url} -> {(int)r.StatusCode}{location}\");\n}\n\nawait Show(HttpMethod.Post, \"/tickets?customer=Asha&issue=Login\");\nawait Show(HttpMethod.Post, \"/tickets?customer=Asha&issue=Login\");\nawait Show(HttpMethod.Get, \"/tickets/501\");\nawait Show(HttpMethod.Get, \"/tickets/999\");\nawait Show(HttpMethod.Delete, \"/tickets/501\");\nawait Show(HttpMethod.Delete, \"/tickets/501\");\nawait app.StopAsync();\n",
          check: "run",
          packages: [
            "Microsoft.AspNetCore.TestHost"
          ],
          frameworks: [
            "aspnetcore"
          ],
          expected: "POST /tickets?customer=Asha&issue=Login -> 201 Location: /tickets/501\nPOST /tickets?customer=Asha&issue=Login -> 409\nGET /tickets/501 -> 200\nGET /tickets/999 -> 404\nDELETE /tickets/501 -> 204\nDELETE /tickets/501 -> 404"
        }
      ]
    },
    {
      id: "validation",
      depth: "short",
      title: {
        en: "Validating input",
        hi: "Input की जाँच (validation)",
        hg: "Input ki jaanch (validation)"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 2 returned 400 for a blank customer, but you had to write that check by hand. With <code>[ApiController]</code> and DataAnnotations the framework does it for you, before your action even starts.</p>",
          hi: "<p>पाठ 2 में ख़ाली customer पर 400 लौटाया, पर वह जाँच आपको हाथ से लिखनी पड़ी। <code>[ApiController]</code> और DataAnnotations के साथ framework यह काम आपके action शुरू होने से पहले ही कर देता है।</p>",
          hg: "<p>Lesson 2 mein khaali customer par 400 lautaya, par woh jaanch aapko haath se likhni padi. <code>[ApiController]</code> aur DataAnnotations ke saath framework yeh kaam aapke action shuru hone se pehle hi kar deta hai.</p>"
        },
        what: {
          en: "<p><b>Validation</b> checks the request body against rules before your code uses it. You write the rules as attributes (<code>[Required]</code>, <code>[Range]</code>) on a small request class (a <b>DTO</b>).</p><p>With <code>[ApiController]</code>, an invalid body gets <b>400</b> and a <code>ValidationProblemDetails</code> JSON that lists each wrong field. Your action never runs.</p>",
          hi: "<p><b>Validation</b> request body को आपके code के use करने से पहले rules से जाँचता है। Rules को attributes (<code>[Required]</code>, <code>[Range]</code>) के रूप में एक छोटी request class (<b>DTO</b>) पर लिखते हैं।</p><p><code>[ApiController]</code> हो तो ग़लत body पर <b>400</b> और <code>ValidationProblemDetails</code> JSON मिलता है, जिसमें हर ग़लत field की सूची होती है। आपका action चलता ही नहीं।</p>",
          hg: "<p><b>Validation</b> request body ko aapke code ke use karne se pehle rules se jaanchta hai. Rules ko attributes (<code>[Required]</code>, <code>[Range]</code>) ke roop mein ek chhoti request class (<b>DTO</b>) par likhte hain.</p><p><code>[ApiController]</code> ho to galat body par <b>400</b> aur <code>ValidationProblemDetails</code> JSON milta hai, jismein har galat field ki list hoti hai. Aapka action chalta hi nahi.</p>"
        },
        why: {
          en: "<p>Never trust what a client sends. Doing the checks in one place keeps actions short, and one standard 400 shape lets a front-end show each message next to the right field.</p>",
          hi: "<p>Client जो भेजे उस पर भरोसा मत करो। जाँच एक जगह रखने से actions छोटे रहते हैं, और एक standard 400 shape से front-end हर message को सही field के पास दिखा सकता है।</p>",
          hg: "<p>Client jo bheje us par bharosa mat karo. Jaanch ek jagah rakhne se actions chhote rehte hain, aur ek standard 400 shape se front-end har message ko sahi field ke paas dikha sakta hai.</p>"
        },
        analogy: {
          en: "<p>A housing society gate. The guard checks the visitor form before anyone is let in: name missing, flat number wrong. The form goes back at the gate, and the resident upstairs is never disturbed.</p>",
          hi: "<p>Society का gate। Guard किसी को अंदर जाने देने से पहले visitor form जाँचता है: नाम नहीं लिखा, flat number ग़लत। Form गेट पर ही वापस हो जाता है, और ऊपर रहने वाले को परेशान नहीं किया जाता।</p>",
          hg: "<p>Society ka gate. Guard kisi ko andar jaane dene se pehle visitor form jaanchta hai: naam nahi likha, flat number galat. Form gate par hi wapas ho jaata hai, aur upar rehne wale ko pareshaan nahi kiya jaata.</p>"
        },
        lines: [
          {
            code: "builder.Services.AddControllers();",
            note: {
              en: "Registers the controller services. Controllers are the class-based style from Day 12; they carry the full model-validation feature.",
              hi: "Controller services register करता है। Controllers Day 12 वाला class-based तरीका हैं; इनमें पूरा model-validation feature मिलता है।",
              hg: "Controller services register karta hai. Controllers Day 12 wala class-based tareeka hain; inmein poora model-validation feature milta hai."
            }
          },
          {
            code: "app.MapControllers();",
            note: {
              en: "Turns the <code>[Route]</code> and <code>[HttpPost]</code> attributes into real endpoints.",
              hi: "<code>[Route]</code> और <code>[HttpPost]</code> attributes को असली endpoints बना देता है।",
              hg: "<code>[Route]</code> aur <code>[HttpPost]</code> attributes ko asli endpoints bana deta hai."
            }
          },
          {
            code: "[ApiController]",
            note: {
              en: "This attribute switches on the API behaviours, including the automatic 400 for an invalid body.",
              hi: "यह attribute API वाले behaviours चालू करता है, जिनमें ग़लत body पर अपने-आप 400 भी है।",
              hg: "Yeh attribute API wale behaviours chalu karta hai, jinmein galat body par apne-aap 400 bhi hai."
            }
          },
          {
            code: "public IActionResult Create(NewTicket ticket)",
            note: {
              en: "There is no <code>ModelState.IsValid</code> check here. A bad body never reaches this method; the framework has already answered 400.",
              hi: "यहाँ <code>ModelState.IsValid</code> की कोई जाँच नहीं है। ग़लत body इस method तक पहुँचती ही नहीं; framework पहले ही 400 दे चुका होता है।",
              hg: "Yahan <code>ModelState.IsValid</code> ki koi jaanch nahi hai. Galat body is method tak pahunchti hi nahi; framework pehle hi 400 de chuka hota hai."
            }
          },
          {
            code: "[Required, StringLength(100, MinimumLength = 5)]",
            note: {
              en: "The rules sit on the DTO property as attributes: required, and between 5 and 100 characters. <code>[Range(1, 3)]</code> below does the same for <code>Priority</code>.",
              hi: "Rules DTO की property पर attributes के रूप में हैं: ज़रूरी, और 5 से 100 अक्षरों के बीच। नीचे <code>[Range(1, 3)]</code> <code>Priority</code> के लिए यही करता है।",
              hg: "Rules DTO ki property par attributes ke roop mein hain: zaroori, aur 5 se 100 aksharon ke beech. Neeche <code>[Range(1, 3)]</code> <code>Priority</code> ke liye yahi karta hai."
            }
          },
          {
            code: "var problem = await bad.Content.ReadFromJsonAsync<ValidationProblemDetails>();",
            note: {
              en: "The 400 body is a <code>ValidationProblemDetails</code>. Its <code>Errors</code> dictionary maps each wrong field to its messages, and the content type is <code>application/problem+json</code>.",
              hi: "400 की body <code>ValidationProblemDetails</code> होती है। उसका <code>Errors</code> dictionary हर ग़लत field को उसके messages से जोड़ता है, और content type <code>application/problem+json</code> होता है।",
              hg: "400 ki body <code>ValidationProblemDetails</code> hoti hai. Uska <code>Errors</code> dictionary har galat field ko uske messages se jodta hai, aur content type <code>application/problem+json</code> hota hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Writing <code>if (!ModelState.IsValid)</code> in every action. With <code>[ApiController]</code> it is already done.</li><li>Validating the database entity instead of a separate request DTO. Clients could then set fields you never meant to expose.</li><li>Expecting attributes to check database rules such as \"email already used\". That needs a service and a 409.</li></ul>",
          hi: "<ul><li>हर action में <code>if (!ModelState.IsValid)</code> लिखना। <code>[ApiController]</code> के साथ यह पहले से हो चुका है।</li><li>अलग request DTO की जगह database entity को validate करना। तब client वे fields भी set कर सकते हैं जिन्हें आप खोलना नहीं चाहते थे।</li><li>उम्मीद करना कि attributes database के नियम जाँचेंगे, जैसे \"email पहले से use में है\"। उसके लिए service और 409 चाहिए।</li></ul>",
          hg: "<ul><li>Har action mein <code>if (!ModelState.IsValid)</code> likhna. <code>[ApiController]</code> ke saath yeh pehle se ho chuka hai.</li><li>Alag request DTO ki jagah database entity ko validate karna. Tab client woh fields bhi set kar sakte hain jinhein aap kholna nahi chahte the.</li><li>Ummeed karna ki attributes database ke niyam jaanchenge, jaise \"email pehle se use mein hai\". Uske liye service aur 409 chahiye.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use attributes for the <b>shape</b> of the data: required, length, range, format. Rules that need the database or several fields together belong in a service (or a library such as FluentValidation), which then returns 409 or 422 on purpose. Minimal APIs are covered in the Deep Dive.</p>",
          hi: "<p>Data के <b>आकार (shape)</b> के लिए attributes use करो: ज़रूरी, लंबाई, range, format। जिन नियमों को database या कई fields एक साथ चाहिए वे service में (या FluentValidation जैसी library में) रखो, जो फिर जानबूझकर 409 या 422 लौटाती है। Minimal APIs की बात Deep Dive में है।</p>",
          hg: "<p>Data ke <b>aakaar (shape)</b> ke liye attributes use karo: zaroori, lambai, range, format. Jin niyamon ko database ya kai fields ek saath chahiye woh service mein (ya FluentValidation jaisi library mein) rakho, jo phir jaanbujhkar 409 ya 422 lautati hai. Minimal APIs ki baat Deep Dive mein hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a required <code>Email</code> property with <code>[EmailAddress]</code> to <code>NewTicket</code>. Send a bad email (<code>asha-at-example</code>) and check that an <code>Email:</code> line appears in the errors.</p>",
            hi: "<p><code>NewTicket</code> में <code>[EmailAddress]</code> वाली ज़रूरी <code>Email</code> property जोड़ो। ग़लत email (<code>asha-at-example</code>) भेजो और देखो कि errors में <code>Email:</code> वाली line आती है।</p>",
            hg: "<p><code>NewTicket</code> mein <code>[EmailAddress]</code> wali zaroori <code>Email</code> property jodo. Galat email (<code>asha-at-example</code>) bhejo aur dekho ki errors mein <code>Email:</code> wali line aati hai.</p>"
          },
          hint: {
            en: "<p>Add <code>[Required, EmailAddress] public string Email { get; set; } = \"\";</code> and add <code>Email = ...</code> to both request bodies.</p>",
            hi: "<p><code>[Required, EmailAddress] public string Email { get; set; } = \"\";</code> जोड़ो और दोनों request bodies में <code>Email = ...</code> डालो।</p>",
            hg: "<p><code>[Required, EmailAddress] public string Email { get; set; } = \"\";</code> jodo aur dono request bodies mein <code>Email = ...</code> daalo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: an Email rule",
              hi: "हल: Email का rule",
              hg: "Hal: Email ka rule"
            },
            src: "using System.ComponentModel.DataAnnotations;\nusing System.Net.Http.Json;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddControllers();\nvar app = builder.Build();\napp.MapControllers();\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nvar bad = await client.PostAsJsonAsync(\"/api/tickets\", new { Customer = \"\", Issue = \"Hi\", Priority = 9, Email = \"asha-at-example\" });\nConsole.WriteLine($\"{(int)bad.StatusCode} {bad.Content.Headers.ContentType?.MediaType}\");\nvar problem = await bad.Content.ReadFromJsonAsync<ValidationProblemDetails>();\nforeach (var (field, messages) in problem!.Errors.OrderBy(e => e.Key))\n    Console.WriteLine($\"{field}: {messages[0]}\");\n\nvar good = await client.PostAsJsonAsync(\"/api/tickets\", new { Customer = \"Asha\", Issue = \"Cannot login\", Priority = 2, Email = \"asha@example.com\" });\nConsole.WriteLine((int)good.StatusCode);\nawait app.StopAsync();\n\n[ApiController]\n[Route(\"api/tickets\")]\npublic class TicketsController : ControllerBase\n{\n    [HttpPost]\n    public IActionResult Create(NewTicket ticket) => Created(\"/api/tickets/501\", ticket);   // no ModelState check needed\n}\n\npublic class NewTicket\n{\n    [Required] public string Customer { get; set; } = \"\";\n    [Required, StringLength(100, MinimumLength = 5)] public string Issue { get; set; } = \"\";\n    [Range(1, 3)] public int Priority { get; set; }\n    [Required, EmailAddress] public string Email { get; set; } = \"\";\n}\n",
            check: "run",
            packages: [
              "Microsoft.AspNetCore.TestHost"
            ],
            frameworks: [
              "aspnetcore"
            ],
            expected: "400 application/problem+json\nCustomer: The Customer field is required.\nEmail: The Email field is not a valid e-mail address.\nIssue: The field Issue must be a string with a minimum length of 5 and a maximum length of 100.\nPriority: The field Priority must be between 1 and 3.\n201"
          }
        },
        quiz: {
          q: {
            en: "A request body fails validation in an <code>[ApiController]</code>. What happens?",
            hi: "<code>[ApiController]</code> में request body validation में फ़ेल हो जाती है। क्या होता है?",
            hg: "<code>[ApiController]</code> mein request body validation mein fail ho jaati hai. Kya hota hai?"
          },
          options: [
            {
              en: "The action is skipped and the framework returns 400 with <code>ValidationProblemDetails</code>",
              hi: "Action छूट जाता है और framework <code>ValidationProblemDetails</code> के साथ 400 लौटाता है",
              hg: "Action chhoot jaata hai aur framework <code>ValidationProblemDetails</code> ke saath 400 lautata hai"
            },
            {
              en: "Your action runs and must call <code>ModelState.IsValid</code> itself",
              hi: "आपका action चलता है और उसे ख़ुद <code>ModelState.IsValid</code> देखना पड़ता है",
              hg: "Aapka action chalta hai aur use khud <code>ModelState.IsValid</code> dekhna padta hai"
            },
            {
              en: "The framework returns 500 and logs an exception",
              hi: "Framework 500 लौटाता है और exception log करता है",
              hg: "Framework 500 lautata hai aur exception log karta hai"
            },
            {
              en: "The framework fixes the values and continues",
              hi: "Framework values ठीक करके आगे बढ़ जाता है",
              hg: "Framework values theek karke aage badh jaata hai"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>The validation filter runs before the action. When the model is invalid it short-circuits with 400 and the list of wrong fields, so the action never starts.</p>",
            hi: "<p>Validation filter action से पहले चलता है। Model ग़लत हो तो वह 400 और ग़लत fields की सूची के साथ वहीं रुक जाता है, इसलिए action शुरू ही नहीं होता।</p>",
            hg: "<p>Validation filter action se pehle chalta hai. Model galat ho to woh 400 aur galat fields ki list ke saath wahin ruk jaata hai, isliye action shuru hi nahi hota.</p>"
          }
        },
        recap: {
          en: "<ul><li>Write rules as attributes on a request DTO.</li><li><code>[ApiController]</code> answers 400 + <code>ValidationProblemDetails</code> before the action runs.</li><li>Shape rules go in attributes; database rules go in a service.</li></ul>",
          hi: "<ul><li>Rules को request DTO पर attributes के रूप में लिखो।</li><li><code>[ApiController]</code> action चलने से पहले 400 + <code>ValidationProblemDetails</code> दे देता है।</li><li>Shape के rules attributes में; database के rules service में।</li></ul>",
          hg: "<ul><li>Rules ko request DTO par attributes ke roop mein likho.</li><li><code>[ApiController]</code> action chalne se pehle 400 + <code>ValidationProblemDetails</code> de deta hai.</li><li>Shape ke rules attributes mein; database ke rules service mein.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Invalid ticket body gets 400 before the action runs",
            hi: "ग़लत ticket body पर action चलने से पहले 400",
            hg: "Galat ticket body par action chalne se pehle 400"
          },
          src: "using System.ComponentModel.DataAnnotations;\nusing System.Net.Http.Json;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddControllers();\nvar app = builder.Build();\napp.MapControllers();\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nvar bad = await client.PostAsJsonAsync(\"/api/tickets\", new { Customer = \"\", Issue = \"Hi\", Priority = 9 });\nConsole.WriteLine($\"{(int)bad.StatusCode} {bad.Content.Headers.ContentType?.MediaType}\");\nvar problem = await bad.Content.ReadFromJsonAsync<ValidationProblemDetails>();\nforeach (var (field, messages) in problem!.Errors.OrderBy(e => e.Key))\n    Console.WriteLine($\"{field}: {messages[0]}\");\n\nvar good = await client.PostAsJsonAsync(\"/api/tickets\", new { Customer = \"Asha\", Issue = \"Cannot login\", Priority = 2 });\nConsole.WriteLine((int)good.StatusCode);\nawait app.StopAsync();\n\n[ApiController]\n[Route(\"api/tickets\")]\npublic class TicketsController : ControllerBase\n{\n    [HttpPost]\n    public IActionResult Create(NewTicket ticket) => Created(\"/api/tickets/501\", ticket);   // no ModelState check needed\n}\n\npublic class NewTicket\n{\n    [Required] public string Customer { get; set; } = \"\";\n    [Required, StringLength(100, MinimumLength = 5)] public string Issue { get; set; } = \"\";\n    [Range(1, 3)] public int Priority { get; set; }\n}\n",
          check: "run",
          packages: [
            "Microsoft.AspNetCore.TestHost"
          ],
          frameworks: [
            "aspnetcore"
          ],
          expected: "400 application/problem+json\nCustomer: The Customer field is required.\nIssue: The field Issue must be a string with a minimum length of 5 and a maximum length of 100.\nPriority: The field Priority must be between 1 and 3.\n201"
        }
      ]
    },
    {
      id: "global-errors",
      depth: "short",
      title: {
        en: "One place for errors",
        hi: "Errors के लिए एक जगह",
        hg: "Errors ke liye ek jagah"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lessons 2 and 3 handled expected problems (404, 409, 400) with return values. Unexpected failures throw exceptions. Here one handler turns every exception into the same standard error JSON, and keeps internal details away from clients.</p>",
          hi: "<p>पाठ 2 और 3 में जिनकी उम्मीद थी वे problems (404, 409, 400) return values से संभाली गईं। अचानक आई failures exception फेंकती हैं। यहाँ एक handler हर exception को एक जैसे standard error JSON में बदल देता है, और अंदर की details client से दूर रखता है।</p>",
          hg: "<p>Lesson 2 aur 3 mein ummeed wali problems (404, 409, 400) return values se sambhali gayin. Ummeed ke bahar ki failures exception phenkti hain. Yahan ek handler har exception ko ek jaise standard error JSON mein badal deta hai, aur andar ki details client se door rakhta hai.</p>"
        },
        what: {
          en: "<p><b>ProblemDetails</b> is the standard JSON shape for errors (RFC 9457): <code>type</code>, <code>title</code>, <code>status</code>, plus optional <code>detail</code> and <code>instance</code>. <code>AddProblemDetails()</code> registers the writer for it; it also fills <code>type</code> from the status code and adds a <code>traceId</code>.</p><p>An <b>IExceptionHandler</b> is a class you register with <code>AddExceptionHandler</code>. It catches exceptions from anywhere in the app. <code>UseExceptionHandler()</code> is the middleware that actually calls it.</p>",
          hi: "<p><b>ProblemDetails</b> errors का standard JSON shape है (RFC 9457): <code>type</code>, <code>title</code>, <code>status</code>, और optional <code>detail</code> और <code>instance</code>। <code>AddProblemDetails()</code> इसे लिखने वाला हिस्सा register करता है; यह status code से <code>type</code> भर देता है और एक <code>traceId</code> जोड़ता है।</p><p><b>IExceptionHandler</b> एक class है जिसे <code>AddExceptionHandler</code> से register करते हैं। यह app में कहीं से भी आई exception पकड़ती है। <code>UseExceptionHandler()</code> वह middleware है जो असल में इसे call करता है।</p>",
          hg: "<p><b>ProblemDetails</b> errors ka standard JSON shape hai (RFC 9457): <code>type</code>, <code>title</code>, <code>status</code>, aur optional <code>detail</code> aur <code>instance</code>. <code>AddProblemDetails()</code> ise likhne wala hissa register karta hai; yeh status code se <code>type</code> bhar deta hai aur ek <code>traceId</code> jodta hai.</p><p><b>IExceptionHandler</b> ek class hai jise <code>AddExceptionHandler</code> se register karte hain. Yeh app mein kahin se bhi aayi exception pakadti hai. <code>UseExceptionHandler()</code> woh middleware hai jo asal mein ise call karta hai.</p>"
        },
        why: {
          en: "<p>Without it you repeat try/catch in every action, and a crash may send a stack trace or a database password to the caller. One handler gives every error the same shape and keeps secrets in the log.</p>",
          hi: "<p>इसके बिना हर action में try/catch दोहराना पड़ता है, और crash होने पर stack trace या database password caller तक जा सकता है। एक handler हर error को एक जैसा shape देता है और secrets को log में रखता है।</p>",
          hg: "<p>Iske bina har action mein try/catch dohrana padta hai, aur crash hone par stack trace ya database password caller tak ja sakta hai. Ek handler har error ko ek jaisa shape deta hai aur secrets ko log mein rakhta hai.</p>"
        },
        analogy: {
          en: "<p>A mobile operator's helpline. Whatever the fault inside, the caller hears one polite standard message. The technicians read the detailed logs separately.</p>",
          hi: "<p>Mobile operator की helpline। अंदर जो भी ख़राबी हो, caller को एक ही सलीक़े वाला standard message सुनाई देता है। Technicians अलग से detailed logs पढ़ते हैं।</p>",
          hg: "<p>Mobile operator ki helpline. Andar jo bhi kharaabi ho, caller ko ek hi vinamra standard message sunai deta hai. Technicians alag se detailed logs padhte hain.</p>"
        },
        lines: [
          {
            code: "builder.Services.AddProblemDetails();",
            note: {
              en: "Registers the service that writes the standard error JSON.",
              hi: "वह service register करता है जो standard error JSON लिखती है।",
              hg: "Woh service register karta hai jo standard error JSON likhti hai."
            }
          },
          {
            code: "builder.Services.AddExceptionHandler<TicketExceptionHandler>();",
            note: {
              en: "Registers our handler. Registering alone does nothing yet.",
              hi: "हमारा handler register करता है। सिर्फ़ register करने से अभी कुछ नहीं होता।",
              hg: "Hamara handler register karta hai. Sirf register karne se abhi kuch nahi hota."
            }
          },
          {
            code: "app.UseExceptionHandler();",
            note: {
              en: "This middleware catches the exception and calls the handlers in order. Without this line, <code>TicketExceptionHandler</code> never runs.",
              hi: "यह middleware exception पकड़कर handlers को एक-एक करके call करता है। इस line के बिना <code>TicketExceptionHandler</code> कभी नहीं चलता।",
              hg: "Yeh middleware exception pakadkar handlers ko kram se call karta hai. Is line ke bina <code>TicketExceptionHandler</code> kabhi nahi chalta."
            }
          },
          {
            code: "throw new TicketNotFoundException(id)",
            note: {
              en: "The rule lives deep in <code>TicketService</code>, so it throws a domain exception instead of returning a result from the route.",
              hi: "Rule <code>TicketService</code> के अंदर गहराई में है, इसलिए route से result लौटाने की जगह वह domain exception फेंकता है।",
              hg: "Rule <code>TicketService</code> ke andar gehraai mein hai, isliye route se result lautane ki jagah woh domain exception phenkta hai."
            }
          },
          {
            code: "if (exception is not TicketNotFoundException) return false;",
            note: {
              en: "Return <code>false</code> to say \"not mine, pass it on\". An unknown exception such as the one in <code>/reports</code> falls through to a generic 500.",
              hi: "<code>false</code> लौटाना मतलब \"मेरा नहीं, आगे बढ़ाओ\"। <code>/reports</code> जैसी अनजान exception generic 500 तक चली जाती है।",
              hg: "<code>false</code> lautana matlab \"mera nahi, aage badhao\". <code>/reports</code> jaisi anjaan exception generic 500 tak chali jaati hai."
            }
          },
          {
            code: "ProblemDetails = { Status = 404, Title = \"Ticket not found\" }",
            note: {
              en: "A safe, fixed title. The exception message goes only to the log (the line above), never to the client. The last output column <code>leaks secret: False</code> checks this.",
              hi: "safe, तय title। Exception message सिर्फ़ log में जाता है (ऊपर की line), client को कभी नहीं। Output का आख़िरी हिस्सा <code>leaks secret: False</code> यही जाँचता है।",
              hg: "Surakshit, tay title. Exception message sirf log mein jaata hai (upar ki line), client ko kabhi nahi. Output ka aakhiri hissa <code>leaks secret: False</code> yahi jaanchta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Registering a handler but forgetting <code>UseExceptionHandler()</code>. Nothing calls it.</li><li>Sending <code>ex.Message</code> or a stack trace to the client. It can leak table names, paths and passwords.</li><li>Throwing exceptions for everyday outcomes. A plain <code>NotFound()</code> result is cheaper and clearer.</li></ul>",
          hi: "<ul><li>Handler register करना पर <code>UseExceptionHandler()</code> भूल जाना। उसे कोई call ही नहीं करता।</li><li>Client को <code>ex.Message</code> या stack trace भेजना। इससे table के नाम, paths और passwords खुल सकते हैं।</li><li>रोज़ के नतीजों के लिए exceptions फेंकना। सीधा <code>NotFound()</code> result सस्ता और साफ़ है।</li></ul>",
          hg: "<ul><li>Handler register karna par <code>UseExceptionHandler()</code> bhool jaana. Use koi call hi nahi karta.</li><li>Client ko <code>ex.Message</code> ya stack trace bhejna. Isse table ke naam, paths aur passwords khul sakte hain.</li><li>Roz ke nateejon ke liye exceptions phenkna. Seedha <code>NotFound()</code> result sasta aur saaf hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use one global handler for unexpected failures and for rare domain-rule violations raised deep in services. For common outcomes handled right in the route, return <code>NotFound()</code> directly. Always log each unhandled exception once, with the trace id.</p>",
          hi: "<p>अचानक आई failures और services के अंदर से उठे कभी-कभार के domain-rule टूटने के लिए एक global handler रखो। जो आम नतीजे route में ही संभल जाते हैं, उनके लिए सीधे <code>NotFound()</code> लौटाओ। हर unhandled exception को trace id के साथ एक बार log ज़रूर करो।</p>",
          hg: "<p>Unexpected failures aur services mein gehraai se uthe durlabh domain-rule ullanghanon ke liye ek global handler rakho. Jo aam nateeje route mein hi sambhal jaate hain, unke liye seedhe <code>NotFound()</code> lautao. Har unhandled exception ko trace id ke saath ek baar log zaroor karo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a <code>DuplicateTicketException</code> and map it to <b>409</b> with the title <code>Ticket already exists</code>. Add a route that throws it and print its response.</p>",
            hi: "<p><code>DuplicateTicketException</code> जोड़ो और उसे <b>409</b> व title <code>Ticket already exists</code> से जोड़ो। एक route बनाओ जो इसे फेंके और उसका response print करो।</p>",
            hg: "<p><code>DuplicateTicketException</code> jodo aur use <b>409</b> va title <code>Ticket already exists</code> se jodo. Ek route banao jo ise phenke aur uska response print karo.</p>"
          },
          hint: {
            en: "<p>Use a <code>switch</code> expression on the exception type that gives <code>(status, title)</code>, and return <code>false</code> when neither matches.</p>",
            hi: "<p>Exception के type पर <code>switch</code> expression लगाओ जो <code>(status, title)</code> दे, और कोई match न हो तो <code>false</code> लौटाओ।</p>",
            hg: "<p>Exception ke type par <code>switch</code> expression lagao jo <code>(status, title)</code> de, aur koi match na ho to <code>false</code> lautao.</p>"
          },
          solution: {
            caption: {
              en: "Solution: two domain exceptions, one handler",
              hi: "हल: दो domain exceptions, एक handler",
              hg: "Hal: do domain exceptions, ek handler"
            },
            src: "using System.Text.Json;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Diagnostics;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddProblemDetails();\nbuilder.Services.AddExceptionHandler<TicketExceptionHandler>();\nbuilder.Services.AddSingleton<TicketService>();\nvar app = builder.Build();\n\napp.UseExceptionHandler();   // this is what calls TicketExceptionHandler\napp.MapGet(\"/tickets/{id:int}\", (int id, TicketService service) => Results.Text(service.Find(id)));\napp.MapGet(\"/tickets/duplicate\", string () => throw new DuplicateTicketException());\napp.MapGet(\"/reports\", string () => throw new InvalidOperationException(\"db password is hunter2\"));\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\nforeach (var path in new[] { \"/tickets/501\", \"/tickets/999\", \"/tickets/duplicate\", \"/reports\" })\n{\n    var response = await client.GetAsync(path);\n    var body = await response.Content.ReadAsStringAsync();\n    var shown = response.IsSuccessStatusCode ? body : JsonDocument.Parse(body).RootElement.GetProperty(\"title\").GetString();\n    Console.WriteLine($\"{path} -> {(int)response.StatusCode} {shown} | leaks secret: {body.Contains(\"hunter2\")}\");\n}\nawait app.StopAsync();\n\npublic class TicketNotFoundException(int id) : Exception($\"Ticket {id} not found\");\n\npublic class TicketService\n{\n    public string Find(int id) => id == 501 ? \"ticket 501\" : throw new TicketNotFoundException(id);   // a rule deep in the service\n}\n\npublic class DuplicateTicketException : Exception;\n\npublic sealed class TicketExceptionHandler(IProblemDetailsService problems, ILogger<TicketExceptionHandler> logger)\n    : IExceptionHandler\n{\n    public async ValueTask<bool> TryHandleAsync(HttpContext context, Exception exception, CancellationToken ct)\n    {\n        var (status, title) = exception switch\n        {\n            TicketNotFoundException => (404, \"Ticket not found\"),\n            DuplicateTicketException => (409, \"Ticket already exists\"),\n            _ => (0, \"\")\n        };\n        if (status == 0) return false;   // not ours: pass it on\n        logger.LogWarning(exception, \"Ticket lookup failed\");   // details go to the log, not to the client\n        context.Response.StatusCode = status;\n        return await problems.TryWriteAsync(new ProblemDetailsContext\n        {\n            HttpContext = context,\n            ProblemDetails = { Status = status, Title = title }   // safe text, no exception message\n        });\n    }\n}\n",
            check: "run",
            packages: [
              "Microsoft.AspNetCore.TestHost"
            ],
            frameworks: [
              "aspnetcore"
            ],
            expected: "/tickets/501 -> 200 ticket 501 | leaks secret: False\n/tickets/999 -> 404 Ticket not found | leaks secret: False\n/tickets/duplicate -> 409 Ticket already exists | leaks secret: False\n/reports -> 500 An error occurred while processing your request. | leaks secret: False"
          }
        },
        quiz: {
          q: {
            en: "You registered <code>TicketExceptionHandler</code> with <code>AddExceptionHandler</code>, but exceptions still give the default response. What is most likely missing?",
            hi: "आपने <code>TicketExceptionHandler</code> को <code>AddExceptionHandler</code> से register किया, फिर भी exceptions पर default response आता है। सबसे likely क्या छूटा है?",
            hg: "Aapne <code>TicketExceptionHandler</code> ko <code>AddExceptionHandler</code> se register kiya, phir bhi exceptions par default response aata hai. Sabse sambhavit kya chhoota hai?"
          },
          options: [
            {
              en: "<code>app.UseCors()</code>",
              hi: "<code>app.UseCors()</code> वाली line",
              hg: "<code>app.UseCors()</code> wali line"
            },
            {
              en: "<code>builder.Services.AddControllers()</code>",
              hi: "<code>builder.Services.AddControllers()</code> वाली line",
              hg: "<code>builder.Services.AddControllers()</code> wali line"
            },
            {
              en: "<code>app.UseExceptionHandler()</code>",
              hi: "<code>app.UseExceptionHandler()</code> वाली line",
              hg: "<code>app.UseExceptionHandler()</code> wali line"
            },
            {
              en: "<code>app.MapGet()</code>",
              hi: "<code>app.MapGet()</code> वाली line",
              hg: "<code>app.MapGet()</code> wali line"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>Registering a handler only puts it in DI. The <code>UseExceptionHandler()</code> middleware is what catches the exception and calls the registered handlers.</p>",
            hi: "<p>Handler register करना उसे सिर्फ़ DI में रखता है। <code>UseExceptionHandler()</code> middleware ही exception पकड़ता है और register किए handlers को call करता है।</p>",
            hg: "<p>Handler register karna use sirf DI mein rakhta hai. <code>UseExceptionHandler()</code> middleware hi exception pakadta hai aur register kiye handlers ko call karta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>AddProblemDetails</code> + <code>AddExceptionHandler</code> + <code>UseExceptionHandler</code>: all three are needed.</li><li>Handler returns <code>true</code> when it wrote the response, <code>false</code> to pass on.</li><li>Clients get a safe title; the details go to the log.</li></ul>",
          hi: "<ul><li><code>AddProblemDetails</code> + <code>AddExceptionHandler</code> + <code>UseExceptionHandler</code>: तीनों चाहिए।</li><li>Response लिख दिया तो handler <code>true</code> लौटाता है, आगे बढ़ाना हो तो <code>false</code>।</li><li>Client को safe title मिलता है; details log में जाती हैं।</li></ul>",
          hg: "<ul><li><code>AddProblemDetails</code> + <code>AddExceptionHandler</code> + <code>UseExceptionHandler</code>: teeno chahiye.</li><li>Response likh diya to handler <code>true</code> lautata hai, aage badhana ho to <code>false</code>.</li><li>Client ko surakshit title milta hai; details log mein jaati hain.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "One handler turns exceptions into ProblemDetails",
            hi: "एक handler exceptions को ProblemDetails में बदलता है",
            hg: "Ek handler exceptions ko ProblemDetails mein badalta hai"
          },
          src: "using System.Text.Json;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Diagnostics;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddProblemDetails();\nbuilder.Services.AddExceptionHandler<TicketExceptionHandler>();\nbuilder.Services.AddSingleton<TicketService>();\nvar app = builder.Build();\n\napp.UseExceptionHandler();   // this is what calls TicketExceptionHandler\napp.MapGet(\"/tickets/{id:int}\", (int id, TicketService service) => Results.Text(service.Find(id)));\napp.MapGet(\"/reports\", string () => throw new InvalidOperationException(\"db password is hunter2\"));\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\nforeach (var path in new[] { \"/tickets/501\", \"/tickets/999\", \"/reports\" })\n{\n    var response = await client.GetAsync(path);\n    var body = await response.Content.ReadAsStringAsync();\n    var shown = response.IsSuccessStatusCode ? body : JsonDocument.Parse(body).RootElement.GetProperty(\"title\").GetString();\n    Console.WriteLine($\"{path} -> {(int)response.StatusCode} {shown} | leaks secret: {body.Contains(\"hunter2\")}\");\n}\nawait app.StopAsync();\n\npublic class TicketNotFoundException(int id) : Exception($\"Ticket {id} not found\");\n\npublic class TicketService\n{\n    public string Find(int id) => id == 501 ? \"ticket 501\" : throw new TicketNotFoundException(id);   // a rule deep in the service\n}\n\npublic sealed class TicketExceptionHandler(IProblemDetailsService problems, ILogger<TicketExceptionHandler> logger)\n    : IExceptionHandler\n{\n    public async ValueTask<bool> TryHandleAsync(HttpContext context, Exception exception, CancellationToken ct)\n    {\n        if (exception is not TicketNotFoundException) return false;   // not ours: pass it on\n        logger.LogWarning(exception, \"Ticket lookup failed\");   // details go to the log, not to the client\n        context.Response.StatusCode = StatusCodes.Status404NotFound;\n        return await problems.TryWriteAsync(new ProblemDetailsContext\n        {\n            HttpContext = context,\n            ProblemDetails = { Status = 404, Title = \"Ticket not found\" }   // safe text, no exception message\n        });\n    }\n}\n",
          check: "run",
          packages: [
            "Microsoft.AspNetCore.TestHost"
          ],
          frameworks: [
            "aspnetcore"
          ],
          expected: "/tickets/501 -> 200 ticket 501 | leaks secret: False\n/tickets/999 -> 404 Ticket not found | leaks secret: False\n/reports -> 500 An error occurred while processing your request. | leaks secret: False"
        }
      ]
    },
    {
      id: "jwt-auth",
      depth: "short",
      title: {
        en: "Who is calling? JWT, 401 and 403",
        hi: "कौन call कर रहा है? JWT, 401 और 403",
        hg: "Kaun call kar raha hai? JWT, 401 aur 403"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 4 gave every error one shape. Day 12 returned 401 and 403 by hand from an API-key middleware; now the framework does it for you from a signed token. The question is the same: who is the caller (<b>401</b> if unknown), and may they do this (<b>403</b> if not)?</p>",
          hi: "<p>पाठ 4 ने हर error को एक shape दिया। Day 12 में API-key middleware से 401 और 403 हमने हाथ से लौटाए थे; अब framework एक signed token से यह ख़ुद करता है। सवाल वही है: caller कौन है (पता न हो तो <b>401</b>), और क्या वह यह कर सकता है (नहीं तो <b>403</b>)?</p>",
          hg: "<p>Lesson 4 ne har error ko ek shape diya. Day 12 mein API-key middleware se 401 aur 403 humne haath se lautaye the; ab framework ek signed token se yeh khud karta hai. Sawaal wahi hai: caller kaun hai (pata na ho to <b>401</b>), aur kya woh yeh kar sakta hai (nahi to <b>403</b>)?</p>"
        },
        what: {
          en: "<p>A <b>JWT bearer token</b> is a signed piece of text the client sends in the header <code>Authorization: Bearer ...</code>. The API checks the signature and the expiry, then reads <b>claims</b> from it (name, scope).</p><p><b>401</b> means \"not signed in or bad token\". <b>403</b> means \"signed in, but this policy says no\". A JWT is <b>signed, not encrypted</b>: anyone can read it.</p>",
          hi: "<p><b>JWT bearer token</b> एक signed text है जिसे client header <code>Authorization: Bearer ...</code> में भेजता है। API signature और expiry जाँचती है, फिर उसमें से <b>claims</b> (नाम, scope) पढ़ती है।</p><p><b>401</b> मतलब \"sign in नहीं है या token ग़लत है\"। <b>403</b> मतलब \"sign in है, पर policy मना करती है\"। JWT <b>signed होता है, encrypted नहीं</b>: कोई भी उसे पढ़ सकता है।</p>",
          hg: "<p><b>JWT bearer token</b> ek signed text hai jise client header <code>Authorization: Bearer ...</code> mein bhejta hai. API signature aur expiry jaanchti hai, phir usmein se <b>claims</b> (naam, scope) padhti hai.</p><p><b>401</b> matlab \"sign in nahi hai ya token galat hai\". <b>403</b> matlab \"sign in hai, par policy mana karti hai\". JWT <b>signed hota hai, encrypted nahi</b>: koi bhi use padh sakta hai.</p>"
        },
        why: {
          en: "<p>An API is stateless, so every request must carry its own proof of identity. A token lets any server instance verify the caller without a shared session. Claims such as <code>scope</code> let you decide <i>what</i> each caller may do.</p>",
          hi: "<p>API stateless होती है, इसलिए हर request को अपनी पहचान का सबूत साथ लाना पड़ता है। Token से कोई भी server instance बिना shared session के caller को जाँच सकता है। <code>scope</code> जैसे claims तय करने देते हैं कि हर caller <i>क्या</i> कर सकता है।</p>",
          hg: "<p>API stateless hoti hai, isliye har request ko apni pehchaan ka saboot saath laana padta hai. Token se koi bhi server instance bina shared session ke caller ko jaanch sakta hai. <code>scope</code> jaise claims tay karne dete hain ki har caller <i>kya</i> kar sakta hai.</p>"
        },
        analogy: {
          en: "<p>An office ID card. The gate guard checks that the card is genuine and not expired (authentication). Later, the card reader on the server-room door checks whether this card opens that door (authorization). The name printed on the card can be read by anyone who holds it.</p>",
          hi: "<p>Office का ID card। Gate का guard देखता है कि card असली है और expire नहीं हुआ (authentication)। आगे server-room के दरवाज़े का card reader देखता है कि यह card उस दरवाज़े को खोलता है या नहीं (authorization)। Card पर छपा नाम हर वह इंसान पढ़ सकता है जिसके हाथ में card है।</p>",
          hg: "<p>Office ka ID card. Gate ka guard dekhta hai ki card asli hai aur expire nahi hua (authentication). Aage server-room ke darwaze ka card reader dekhta hai ki yeh card us darwaze ko kholta hai ya nahi (authorization). Card par chhapa naam har woh insaan padh sakta hai jiske haath mein card hai.</p>"
        },
        lines: [
          {
            code: "IssuerSigningKey = key,",
            note: {
              en: "The key used to check the token signature. A token changed by even one character fails. Here it is a shared secret in code, for the demo only; in real apps it comes from configuration or an identity provider.",
              hi: "Token की signature जाँचने वाली key। एक अक्षर भी बदला हुआ token फ़ेल हो जाता है। यहाँ यह code में shared secret है, सिर्फ़ demo के लिए; असली apps में यह configuration या identity provider से आती है।",
              hg: "Token ki signature jaanchne wali key. Ek akshar bhi badla hua token fail ho jaata hai. Yahan yeh code mein shared secret hai, sirf demo ke liye; asli apps mein yeh configuration ya identity provider se aati hai."
            }
          },
          {
            code: "ValidateIssuer = false,",
            note: {
              en: "Demo only. A real API sets <code>Authority</code> and <code>Audience</code> so the issuer and audience are checked too (see the Deep Dive).",
              hi: "सिर्फ़ demo के लिए। असली API में <code>Authority</code> और <code>Audience</code> set होते हैं ताकि issuer और audience भी जाँचे जाएँ (Deep Dive देखो)।",
              hg: "Sirf demo ke liye. Asli API mein <code>Authority</code> aur <code>Audience</code> set hote hain taaki issuer aur audience bhi jaanche jaayein (Deep Dive dekho)."
            }
          },
          {
            code: ".AddPolicy(\"CanClose\", p => p.RequireClaim(\"scope\", \"tickets.close\"));",
            note: {
              en: "A <b>policy</b> is a named rule. This one says: the token must carry the claim <code>scope = tickets.close</code>.",
              hi: "<b>Policy</b> एक नाम वाला rule है। यह कहता है: token में claim <code>scope = tickets.close</code> होना चाहिए।",
              hg: "<b>Policy</b> ek naam wala rule hai. Yeh kehta hai: token mein claim <code>scope = tickets.close</code> hona chahiye."
            }
          },
          {
            code: "app.UseAuthentication();",
            note: {
              en: "Reads the bearer token and sets <code>HttpContext.User</code>. <code>UseAuthorization()</code> on the next line then enforces the rules: 401 if not signed in, 403 if the policy fails.",
              hi: "Bearer token पढ़कर <code>HttpContext.User</code> set करता है। अगली line का <code>UseAuthorization()</code> फिर rules लागू करता है: sign in नहीं तो 401, policy फ़ेल तो 403।",
              hg: "Bearer token padhkar <code>HttpContext.User</code> set karta hai. Agli line ka <code>UseAuthorization()</code> phir rules laagu karta hai: sign in nahi to 401, policy fail to 403."
            }
          },
          {
            code: ".RequireAuthorization(\"CanClose\");",
            note: {
              en: "Attaches the policy to this endpoint. <code>/tickets</code> uses plain <code>RequireAuthorization()</code>: any valid token is enough.",
              hi: "Policy को इस endpoint से जोड़ता है। <code>/tickets</code> सादा <code>RequireAuthorization()</code> use करता है: कोई भी सही token काफ़ी है।",
              hg: "Policy ko is endpoint se jodta hai. <code>/tickets</code> saada <code>RequireAuthorization()</code> use karta hai: koi bhi sahi token kaafi hai."
            }
          },
          {
            code: "Console.WriteLine($\"anyone can read the payload: {payload.Contains(\"Meena\")}\");",
            note: {
              en: "The payload is only Base64 text, not encrypted, so this prints <code>True</code>. Never put secrets in a token.",
              hi: "Payload सिर्फ़ Base64 text है, encrypted नहीं, इसलिए यहाँ <code>True</code> print होता है। Token में कभी secrets मत रखो।",
              hg: "Payload sirf Base64 text hai, encrypted nahi, isliye yahan <code>True</code> print hota hai. Token mein kabhi secrets mat rakho."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Mixing up 401 and 403. No or bad token is 401; a valid token without permission is 403.</li><li>Putting secrets (passwords, card numbers) in the token. It is signed, not hidden.</li><li>Hard-coding the signing key in source code, or giving tokens a very long life. Read keys from configuration and keep lifetimes short.</li></ul>",
          hi: "<ul><li>401 और 403 को मिला देना। Token न हो या ग़लत हो तो 401; सही token पर इजाज़त न हो तो 403।</li><li>Token में secrets (passwords, card numbers) रखना। वह signed है, छिपा हुआ नहीं।</li><li>Signing key को source code में लिख देना, या tokens की उम्र बहुत लंबी रखना। Keys configuration से पढ़ो और उम्र छोटी रखो।</li></ul>",
          hg: "<ul><li>401 aur 403 ko mila dena. Token na ho ya galat ho to 401; sahi token par ijazat na ho to 403.</li><li>Token mein secrets (passwords, card numbers) rakhna. Woh signed hai, chhipa hua nahi.</li><li>Signing key ko source code mein likh dena, ya tokens ki umr bahut lambi rakhna. Keys configuration se padho aur umr chhoti rakho.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use JWT bearer for APIs called by single-page apps, mobile apps and other services. Prefer an existing identity provider over writing your own token server, and keep access tokens short-lived. Refresh tokens, OAuth 2.0 and OpenID Connect are in the Deep Dive.</p>",
          hi: "<p>Single-page apps, mobile apps और दूसरी services जिन APIs को call करती हैं उनके लिए JWT bearer use करो। अपना token server लिखने से बेहतर है मौजूदा identity provider लो, और access tokens की उम्र छोटी रखो। Refresh tokens, OAuth 2.0 और OpenID Connect Deep Dive में हैं।</p>",
          hg: "<p>Single-page apps, mobile apps aur doosri services jin APIs ko call karti hain unke liye JWT bearer use karo. Apna token server likhne se behtar hai maujooda identity provider lo, aur access tokens ki umr chhoti rakho. Refresh tokens, OAuth 2.0 aur OpenID Connect Deep Dive mein hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a <code>CanDelete</code> policy (claim <code>scope = tickets.delete</code>) and a <code>DELETE /tickets/501</code> endpoint that needs it. Make a token for Kiran with that scope and show that Meena gets 403 while Kiran gets 204.</p>",
            hi: "<p><code>CanDelete</code> policy (claim <code>scope = tickets.delete</code>) और उसे माँगने वाला <code>DELETE /tickets/501</code> endpoint जोड़ो। Kiran के लिए वह scope वाला token बनाओ और दिखाओ कि Meena को 403 मिलता है और Kiran को 204।</p>",
            hg: "<p><code>CanDelete</code> policy (claim <code>scope = tickets.delete</code>) aur use maangne wala <code>DELETE /tickets/501</code> endpoint jodo. Kiran ke liye woh scope wala token banao aur dikhao ki Meena ko 403 milta hai aur Kiran ko 204.</p>"
          },
          hint: {
            en: "<p>Chain a second <code>.AddPolicy(...)</code> on the authorization builder, then use <code>.RequireAuthorization(\"CanDelete\")</code> on the new endpoint.</p>",
            hi: "<p>Authorization builder पर दूसरा <code>.AddPolicy(...)</code> जोड़ो, फिर नए endpoint पर <code>.RequireAuthorization(\"CanDelete\")</code> लगाओ।</p>",
            hg: "<p>Authorization builder par doosra <code>.AddPolicy(...)</code> jodo, phir naye endpoint par <code>.RequireAuthorization(\"CanDelete\")</code> lagao.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a second policy",
              hi: "हल: दूसरी policy",
              hg: "Hal: doosri policy"
            },
            src: "using System.Text;\nusing Microsoft.AspNetCore.Authentication.JwtBearer;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\nusing Microsoft.IdentityModel.JsonWebTokens;\nusing Microsoft.IdentityModel.Tokens;\n\nvar key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(\"demo-only-secret-key-at-least-32-bytes-long\"));\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)\n    .AddJwtBearer(o => o.TokenValidationParameters = new TokenValidationParameters\n    {\n        IssuerSigningKey = key,\n        ValidateIssuer = false,      // demo only: a real API sets Authority and Audience\n        ValidateAudience = false\n    });\nbuilder.Services.AddAuthorizationBuilder()\n    .AddPolicy(\"CanClose\", p => p.RequireClaim(\"scope\", \"tickets.close\"))\n    .AddPolicy(\"CanDelete\", p => p.RequireClaim(\"scope\", \"tickets.delete\"));\nvar app = builder.Build();\n\napp.UseAuthentication();   // reads the token and sets HttpContext.User\napp.UseAuthorization();    // 401 if not signed in, 403 if the policy fails\napp.MapGet(\"/tickets\", () => \"ticket list\").RequireAuthorization();\napp.MapPost(\"/tickets/501/close\", () => Results.NoContent()).RequireAuthorization(\"CanClose\");\napp.MapDelete(\"/tickets/501\", () => Results.NoContent()).RequireAuthorization(\"CanDelete\");\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nstring MakeToken(string agent, string scope) => new JsonWebTokenHandler().CreateToken(new SecurityTokenDescriptor\n{\n    Claims = new Dictionary<string, object> { [\"sub\"] = agent, [\"scope\"] = scope },\n    Expires = DateTime.UtcNow.AddMinutes(5),\n    SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256)\n});\n\nasync Task Call(string label, HttpMethod method, string url, string? token)\n{\n    var request = new HttpRequestMessage(method, url);\n    if (token is not null) request.Headers.Add(\"Authorization\", \"Bearer \" + token);\n    Console.WriteLine($\"{label} -> {(int)(await client.SendAsync(request)).StatusCode}\");\n}\n\nvar ravi = MakeToken(\"Ravi\", \"tickets.read\");\nvar meena = MakeToken(\"Meena\", \"tickets.close\");\nvar kiran = MakeToken(\"Kiran\", \"tickets.delete\");\nawait Call(\"no token, list\", HttpMethod.Get, \"/tickets\", null);\nawait Call(\"Ravi, list\", HttpMethod.Get, \"/tickets\", ravi);\nawait Call(\"Ravi, close\", HttpMethod.Post, \"/tickets/501/close\", ravi);\nawait Call(\"Meena, close\", HttpMethod.Post, \"/tickets/501/close\", meena);\nawait Call(\"Meena, delete\", HttpMethod.Delete, \"/tickets/501\", meena);\nawait Call(\"Kiran, delete\", HttpMethod.Delete, \"/tickets/501\", kiran);\nawait Call(\"tampered token, list\", HttpMethod.Get, \"/tickets\", meena + \"x\");\n\nvar payload = Base64UrlEncoder.Decode(meena.Split('.')[1]);\nConsole.WriteLine($\"anyone can read the payload: {payload.Contains(\"Meena\")}\");\nawait app.StopAsync();\n",
            check: "run",
            packages: [
              "Microsoft.AspNetCore.TestHost",
              "Microsoft.AspNetCore.Authentication.JwtBearer"
            ],
            frameworks: [
              "aspnetcore"
            ],
            expected: "no token, list -> 401\nRavi, list -> 200\nRavi, close -> 403\nMeena, close -> 204\nMeena, delete -> 403\nKiran, delete -> 204\ntampered token, list -> 401\nanyone can read the payload: True"
          }
        },
        quiz: {
          q: {
            en: "Ravi sends a valid, unexpired token, but it lacks the scope the endpoint requires. What does the API return?",
            hi: "Ravi एक सही, expire न हुआ token भेजता है, पर उसमें वह scope नहीं है जो endpoint को चाहिए। API क्या लौटाती है?",
            hg: "Ravi ek sahi, expire na hua token bhejta hai, par usmein woh scope nahi hai jo endpoint ko chahiye. API kya lautati hai?"
          },
          options: [
            {
              en: "<code>401 Unauthorized</code>",
              hi: "<code>401 Unauthorized</code> जवाब",
              hg: "<code>401 Unauthorized</code> jawab"
            },
            {
              en: "<code>403 Forbidden</code>",
              hi: "<code>403 Forbidden</code> जवाब",
              hg: "<code>403 Forbidden</code> jawab"
            },
            {
              en: "<code>404 Not Found</code>",
              hi: "<code>404 Not Found</code> जवाब",
              hg: "<code>404 Not Found</code> jawab"
            },
            {
              en: "<code>400 Bad Request</code>",
              hi: "<code>400 Bad Request</code> जवाब",
              hg: "<code>400 Bad Request</code> jawab"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>Ravi is authenticated (the token is valid) but not authorized (the policy fails), so the answer is 403. 401 is for a missing or invalid token.</p>",
            hi: "<p>Ravi authenticated है (token सही है) पर authorized नहीं (policy फ़ेल होती है), इसलिए जवाब 403 है। 401 token न होने या ग़लत होने पर आता है।</p>",
            hg: "<p>Ravi authenticated hai (token sahi hai) par authorized nahi (policy fail hoti hai), isliye jawab 403 hai. 401 token na hone ya galat hone par aata hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Client sends <code>Authorization: Bearer token</code>; the API checks signature and expiry.</li><li>401 = not signed in or bad token; 403 = signed in but not allowed.</li><li>A JWT is signed, not encrypted: no secrets inside.</li></ul>",
          hi: "<ul><li>Client <code>Authorization: Bearer token</code> भेजता है; API signature और expiry जाँचती है।</li><li>401 = sign in नहीं या token ग़लत; 403 = sign in है पर इजाज़त नहीं।</li><li>JWT signed होता है, encrypted नहीं: अंदर secrets नहीं रखने।</li></ul>",
          hg: "<ul><li>Client <code>Authorization: Bearer token</code> bhejta hai; API signature aur expiry jaanchti hai.</li><li>401 = sign in nahi ya token galat; 403 = sign in hai par ijazat nahi.</li><li>JWT signed hota hai, encrypted nahi: andar secrets nahi rakhne.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Bearer token: 401 without it, 403 without the scope",
            hi: "Bearer token: बिना token 401, बिना scope 403",
            hg: "Bearer token: bina token 401, bina scope 403"
          },
          src: "using System.Text;\nusing Microsoft.AspNetCore.Authentication.JwtBearer;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\nusing Microsoft.IdentityModel.JsonWebTokens;\nusing Microsoft.IdentityModel.Tokens;\n\nvar key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(\"demo-only-secret-key-at-least-32-bytes-long\"));\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)\n    .AddJwtBearer(o => o.TokenValidationParameters = new TokenValidationParameters\n    {\n        IssuerSigningKey = key,\n        ValidateIssuer = false,      // demo only: a real API sets Authority and Audience\n        ValidateAudience = false\n    });\nbuilder.Services.AddAuthorizationBuilder()\n    .AddPolicy(\"CanClose\", p => p.RequireClaim(\"scope\", \"tickets.close\"));\nvar app = builder.Build();\n\napp.UseAuthentication();   // reads the token and sets HttpContext.User\napp.UseAuthorization();    // 401 if not signed in, 403 if the policy fails\napp.MapGet(\"/tickets\", () => \"ticket list\").RequireAuthorization();\napp.MapPost(\"/tickets/501/close\", () => Results.NoContent()).RequireAuthorization(\"CanClose\");\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nstring MakeToken(string agent, string scope) => new JsonWebTokenHandler().CreateToken(new SecurityTokenDescriptor\n{\n    Claims = new Dictionary<string, object> { [\"sub\"] = agent, [\"scope\"] = scope },\n    Expires = DateTime.UtcNow.AddMinutes(5),\n    SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256)\n});\n\nasync Task Call(string label, HttpMethod method, string url, string? token)\n{\n    var request = new HttpRequestMessage(method, url);\n    if (token is not null) request.Headers.Add(\"Authorization\", \"Bearer \" + token);\n    Console.WriteLine($\"{label} -> {(int)(await client.SendAsync(request)).StatusCode}\");\n}\n\nvar ravi = MakeToken(\"Ravi\", \"tickets.read\");\nvar meena = MakeToken(\"Meena\", \"tickets.close\");\nawait Call(\"no token, list\", HttpMethod.Get, \"/tickets\", null);\nawait Call(\"Ravi, list\", HttpMethod.Get, \"/tickets\", ravi);\nawait Call(\"Ravi, close\", HttpMethod.Post, \"/tickets/501/close\", ravi);\nawait Call(\"Meena, close\", HttpMethod.Post, \"/tickets/501/close\", meena);\nawait Call(\"tampered token, list\", HttpMethod.Get, \"/tickets\", meena + \"x\");\n\nvar payload = Base64UrlEncoder.Decode(meena.Split('.')[1]);\nConsole.WriteLine($\"anyone can read the payload: {payload.Contains(\"Meena\")}\");\nawait app.StopAsync();\n",
          check: "run",
          packages: [
            "Microsoft.AspNetCore.TestHost",
            "Microsoft.AspNetCore.Authentication.JwtBearer"
          ],
          frameworks: [
            "aspnetcore"
          ],
          expected: "no token, list -> 401\nRavi, list -> 200\nRavi, close -> 403\nMeena, close -> 204\ntampered token, list -> 401\nanyone can read the payload: True"
        }
      ]
    },
    {
      id: "cors",
      depth: "short",
      title: {
        en: "CORS: a browser rule",
        hi: "CORS: browser का नियम",
        hg: "CORS: browser ka niyam"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 5 protected endpoints with tokens. A different question now: may a web page from another website call this API from the browser? CORS answers that. It is a browser rule, so it is not a replacement for the token checks you just built.</p>",
          hi: "<p>पाठ 5 में tokens से endpoints को बचाया। अब अलग सवाल: क्या किसी दूसरी website का web page browser से इस API को call कर सकता है? CORS इसका जवाब देता है। यह browser का नियम है, इसलिए यह अभी बनाई token जाँच की जगह नहीं ले सकता।</p>",
          hg: "<p>Lesson 5 mein tokens se endpoints surakshit kiye. Ab alag sawaal: kya kisi doosri website ka web page browser se is API ko call kar sakta hai? CORS iska jawab deta hai. Yeh browser ka niyam hai, isliye yeh abhi banayi token jaanch ki jagah nahi le sakta.</p>"
        },
        what: {
          en: "<p>By default a browser stops JavaScript on one <b>origin</b> (scheme + host + port) from reading responses from another origin. <b>CORS</b> lets your API say which origins are allowed, using headers such as <code>Access-Control-Allow-Origin</code>.</p><p>For some requests the browser first sends a <b>preflight</b>: an <code>OPTIONS</code> request asking \"may I send this?\". It is sent before methods such as PUT and DELETE, or when the page adds headers such as <code>Authorization</code> or a JSON <code>Content-Type</code>. A plain GET goes without one.</p>",
          hi: "<p>Default रूप से browser एक <b>origin</b> (scheme + host + port) की JavaScript को दूसरे origin के responses पढ़ने से रोकता है। <b>CORS</b> से आपकी API बता सकती है कि कौन-से origins allowed हैं, <code>Access-Control-Allow-Origin</code> जैसे headers से।</p><p>कुछ requests से पहले browser एक <b>preflight</b> भेजता है: <code>OPTIONS</code> request जो पूछती है \"क्या मैं यह भेज सकता हूँ?\"। यह PUT और DELETE जैसे methods से पहले जाती है, या तब जब page <code>Authorization</code> या JSON वाला <code>Content-Type</code> जैसे headers जोड़ता है। सादा GET बिना preflight के जाता है।</p>",
          hg: "<p>Default roop se browser ek <b>origin</b> (scheme + host + port) ki JavaScript ko doosre origin ke responses padhne se rokta hai. <b>CORS</b> se aapki API bata sakti hai ki kaun se origins allowed hain, <code>Access-Control-Allow-Origin</code> jaise headers se.</p><p>Kuch requests se pehle browser ek <b>preflight</b> bhejta hai: <code>OPTIONS</code> request jo poochti hai \"kya main yeh bhej sakta hoon?\". Yeh PUT aur DELETE jaise methods se pehle jaati hai, ya tab jab page <code>Authorization</code> ya JSON wala <code>Content-Type</code> jaise headers jodta hai. Saada GET bina preflight ke jaata hai.</p>"
        },
        why: {
          en: "<p>Your CRM web app at <code>crm.example.com</code> calls the API at another address. Without a CORS policy the browser blocks it, and developers waste hours on the red console error. Knowing that the <i>browser</i> enforces it also stops a dangerous myth.</p>",
          hi: "<p>आपका CRM web app <code>crm.example.com</code> पर है और API दूसरे पते पर। CORS policy के बिना browser उसे रोक देता है, और developers console के लाल error पर घंटों लगा देते हैं। यह जानना कि इसे <i>browser</i> लागू करता है, एक ख़तरनाक ग़लतफ़हमी से भी बचाता है।</p>",
          hg: "<p>Aapka CRM web app <code>crm.example.com</code> par hai aur API doosre pate par. CORS policy ke bina browser use rok deta hai, aur developers console ke laal error par ghante laga dete hain. Yeh jaanna ki ise <i>browser</i> laagu karta hai, ek khatarnaak galatfehmi se bhi bachata hai.</p>"
        },
        analogy: {
          en: "<p>A hostel warden. A shop sends a parcel to anyone who orders (your server always answers). The warden (the browser) hands it to a student only if the label on the parcel says that student may receive it. Someone who walks into the shop directly (curl, Postman) never meets the warden.</p>",
          hi: "<p>Hostel का warden। दुकान हर order करने वाले को parcel भेज देती है (आपका server हमेशा जवाब देता है)। Warden (browser) parcel student को तभी देता है जब parcel के label पर लिखा हो कि यह student इसे ले सकता है। जो सीधे दुकान पर चला जाए (curl, Postman) उसे warden मिलता ही नहीं।</p>",
          hg: "<p>Hostel ka warden. Dukaan har order karne wale ko parcel bhej deti hai (aapka server hamesha jawab deta hai). Warden (browser) parcel student ko tabhi deta hai jab parcel ke label par likha ho ki yeh student ise le sakta hai. Jo seedhe dukaan par chala jaye (curl, Postman) use warden milta hi nahi.</p>"
        },
        lines: [
          {
            code: ".WithOrigins(\"https://crm.example.com\")",
            note: {
              en: "The list of allowed websites. An origin must match exactly: scheme, host and port. A trailing slash or a different port does not match.",
              hi: "Allowed websites की list। Origin बिल्कुल मिलना चाहिए: scheme, host और port। आख़िर में slash या अलग port हो तो match नहीं होता।",
              hg: "Allowed websites ki list. Origin bilkul milna chahiye: scheme, host aur port. Aakhir mein slash ya alag port ho to match nahi hota."
            }
          },
          {
            code: "app.UseCors(\"crm-web\");",
            note: {
              en: "Adds the CORS middleware with our named policy. In an app with authentication, put it before <code>UseAuthentication()</code> because a preflight carries no token.",
              hi: "हमारी named policy के साथ CORS middleware जोड़ता है। Authentication वाले app में इसे <code>UseAuthentication()</code> से पहले रखो क्योंकि preflight के साथ token नहीं होता।",
              hg: "Hamari named policy ke saath CORS middleware jodta hai. Authentication wale app mein ise <code>UseAuthentication()</code> se pehle rakho kyunki preflight ke saath token nahi hota."
            }
          },
          {
            code: "request.Headers.Add(\"Access-Control-Request-Method\", \"POST\");",
            note: {
              en: "This is how a preflight looks: an <code>OPTIONS</code> request that names the method the page wants to use next.",
              hi: "Preflight ऐसा दिखता है: <code>OPTIONS</code> request जिसमें वह method लिखा होता है जो page आगे use करना चाहता है।",
              hg: "Preflight aisa dikhta hai: <code>OPTIONS</code> request jismein woh method likha hota hai jo page aage use karna chahta hai."
            }
          },
          {
            code: "var allowed = response.Headers.TryGetValues(\"Access-Control-Allow-Origin\", out var v) ? v.First() : \"none\";",
            note: {
              en: "The header the browser looks at. If it names the page's origin, the browser lets the script read the response; if it is missing, the browser hides it.",
              hi: "यह वह header है जिसे browser देखता है। उसमें page का origin हो तो browser script को response पढ़ने देता है; न हो तो छिपा देता है।",
              hg: "Yeh woh header hai jise browser dekhta hai. Usmein page ka origin ho to browser script ko response padhne deta hai; na ho to chhipa deta hai."
            }
          },
          {
            code: "await Show(\"Other website GET\", HttpMethod.Get, \"https://evil.example\");",
            note: {
              en: "Look at the output: the server still answers <b>200</b>. Only the allow header is missing, so the browser would refuse to show the data to that site's script.",
              hi: "Output देखो: server फिर भी <b>200</b> देता है। सिर्फ़ allow header नहीं है, इसलिए browser उस site की script को data दिखाने से मना कर देगा।",
              hg: "Output dekho: server phir bhi <b>200</b> deta hai. Sirf allow header nahi hai, isliye browser us site ki script ko data dikhane se mana kar dega."
            }
          },
          {
            code: "await Show(\"curl, no Origin\", HttpMethod.Get, null);",
            note: {
              en: "Tools like curl and Postman send no <code>Origin</code> header and do not obey CORS. This is why CORS is not API security.",
              hi: "curl और Postman जैसे tools <code>Origin</code> header नहीं भेजते और CORS मानते भी नहीं। इसीलिए CORS API की security नहीं है।",
              hg: "curl aur Postman jaise tools <code>Origin</code> header nahi bhejte aur CORS maante bhi nahi. Isiliye CORS API ki security nahi hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Believing CORS protects the API. It only controls what browser scripts may read; attackers use curl. You still need authentication.</li><li>Combining <code>AllowAnyOrigin()</code> with <code>AllowCredentials()</code>. ASP.NET Core refuses that combination.</li><li>Typing the origin loosely: <code>https://crm.example.com/</code> (slash) or the wrong port will not match.</li></ul>",
          hi: "<ul><li>यह मानना कि CORS API की हिफ़ाज़त करता है। यह सिर्फ़ तय करता है कि browser scripts क्या पढ़ सकती हैं; attackers curl use करते हैं। Authentication फिर भी चाहिए।</li><li><code>AllowAnyOrigin()</code> को <code>AllowCredentials()</code> के साथ मिलाना। ASP.NET Core यह combination मंज़ूर नहीं करता।</li><li>Origin ढीला लिखना: <code>https://crm.example.com/</code> (slash के साथ) या ग़लत port match नहीं होगा।</li></ul>",
          hg: "<ul><li>Yeh manna ki CORS API ko surakshit karta hai. Yeh sirf tay karta hai ki browser scripts kya padh sakti hain; attackers curl use karte hain. Authentication phir bhi chahiye.</li><li><code>AllowAnyOrigin()</code> ko <code>AllowCredentials()</code> ke saath milana. ASP.NET Core yeh combination manzoor nahi karta.</li><li>Origin dheela likhna: <code>https://crm.example.com/</code> (slash ke saath) ya galat port match nahi hoga.</li></ul>"
        },
        whenToUse: {
          en: "<p>Add a CORS policy when a browser app on one origin calls your API on another. List the exact origins, methods and headers you trust. Server-to-server calls and mobile apps do not need CORS.</p>",
          hi: "<p>जब एक origin का browser app दूसरे origin पर आपकी API को call करे, तब CORS policy जोड़ो। जिन origins, methods और headers पर भरोसा है उनकी ठीक-ठीक list दो। Server-to-server calls और mobile apps को CORS नहीं चाहिए।</p>",
          hg: "<p>Jab ek origin ka browser app doosre origin par aapki API ko call kare, tab CORS policy jodo. Jin origins, methods aur headers par bharosa hai unki theek-theek list do. Server-to-server calls aur mobile apps ko CORS nahi chahiye.</p>"
        },
        exercise: {
          task: {
            en: "<p>The admin site <code>https://admin.example.com</code> must also be allowed. Add it to the policy and print a line for it between the CRM and the other website.</p>",
            hi: "<p>Admin site <code>https://admin.example.com</code> भी allowed होनी चाहिए। उसे policy में जोड़ो और CRM व दूसरी website के बीच उसकी एक line print करो।</p>",
            hg: "<p>Admin site <code>https://admin.example.com</code> bhi allowed honi chahiye. Use policy mein jodo aur CRM va doosri website ke beech uski ek line print karo.</p>"
          },
          hint: {
            en: "<p><code>WithOrigins</code> accepts several origins. Then call <code>Show</code> once more with the admin origin.</p>",
            hi: "<p><code>WithOrigins</code> कई origins लेता है। फिर <code>Show</code> को admin origin के साथ एक बार और call करो।</p>",
            hg: "<p><code>WithOrigins</code> kai origins leta hai. Phir <code>Show</code> ko admin origin ke saath ek baar aur call karo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: two allowed origins",
              hi: "हल: दो allowed origins",
              hg: "Hal: do allowed origins"
            },
            src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddCors(o => o.AddPolicy(\"crm-web\", p => p\n    .WithOrigins(\"https://crm.example.com\", \"https://admin.example.com\")\n    .WithMethods(\"GET\", \"POST\")));\nvar app = builder.Build();\napp.UseCors(\"crm-web\");\napp.MapGet(\"/tickets\", () => \"ticket list\");\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nasync Task Show(string who, HttpMethod method, string? origin)\n{\n    var request = new HttpRequestMessage(method, \"/tickets\");\n    if (origin is not null) request.Headers.Add(\"Origin\", origin);\n    if (method == HttpMethod.Options) request.Headers.Add(\"Access-Control-Request-Method\", \"POST\");\n    var response = await client.SendAsync(request);\n    var allowed = response.Headers.TryGetValues(\"Access-Control-Allow-Origin\", out var v) ? v.First() : \"none\";\n    Console.WriteLine($\"{who}: {(int)response.StatusCode}, Access-Control-Allow-Origin = {allowed}\");\n}\n\nawait Show(\"CRM website GET\", HttpMethod.Get, \"https://crm.example.com\");\nawait Show(\"Admin website GET\", HttpMethod.Get, \"https://admin.example.com\");\nawait Show(\"Other website GET\", HttpMethod.Get, \"https://evil.example\");\nawait Show(\"Other website preflight\", HttpMethod.Options, \"https://evil.example\");\nawait Show(\"curl, no Origin\", HttpMethod.Get, null);\nawait app.StopAsync();\n",
            check: "run",
            packages: [
              "Microsoft.AspNetCore.TestHost"
            ],
            frameworks: [
              "aspnetcore"
            ],
            expected: "CRM website GET: 200, Access-Control-Allow-Origin = https://crm.example.com\nAdmin website GET: 200, Access-Control-Allow-Origin = https://admin.example.com\nOther website GET: 200, Access-Control-Allow-Origin = none\nOther website preflight: 204, Access-Control-Allow-Origin = none\ncurl, no Origin: 200, Access-Control-Allow-Origin = none"
          }
        },
        quiz: {
          q: {
            en: "A script on <code>https://evil.example</code> calls our API, and the policy allows only <code>https://crm.example.com</code>. What happens?",
            hi: "<code>https://evil.example</code> की एक script हमारी API को call करती है, और policy सिर्फ़ <code>https://crm.example.com</code> को allow करती है। क्या होता है?",
            hg: "<code>https://evil.example</code> ki ek script hamari API ko call karti hai, aur policy sirf <code>https://crm.example.com</code> ko allow karti hai. Kya hota hai?"
          },
          options: [
            {
              en: "The server returns 403 and never runs the endpoint",
              hi: "Server 403 लौटाता है और endpoint चलाता ही नहीं",
              hg: "Server 403 lautata hai aur endpoint chalata hi nahi"
            },
            {
              en: "The server refuses to start",
              hi: "Server शुरू होने से मना कर देता है",
              hg: "Server shuru hone se mana kar deta hai"
            },
            {
              en: "CORS also blocks curl and Postman",
              hi: "CORS curl और Postman को भी रोक देता है",
              hg: "CORS curl aur Postman ko bhi rok deta hai"
            },
            {
              en: "The server still answers, but without the allow header, so the browser hides the response from that script",
              hi: "Server फिर भी जवाब देता है, पर allow header के बिना, इसलिए browser वह response उस script से छिपा देता है",
              hg: "Server phir bhi jawab deta hai, par allow header ke bina, isliye browser woh response us script se chhipa deta hai"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>CORS is enforced by the browser. The server returned 200 in our output; it just did not add <code>Access-Control-Allow-Origin</code> for that origin, so the browser refuses to hand the data to the script. Tools like curl are not affected at all.</p>",
            hi: "<p>CORS को browser लागू करता है। हमारे output में server ने 200 दिया; उसने बस उस origin के लिए <code>Access-Control-Allow-Origin</code> नहीं जोड़ा, इसलिए browser data script को देने से मना करता है। curl जैसे tools पर कोई असर नहीं पड़ता।</p>",
            hg: "<p>CORS ko browser laagu karta hai. Hamare output mein server ne 200 diya; usne bas us origin ke liye <code>Access-Control-Allow-Origin</code> nahi joda, isliye browser data script ko dene se mana karta hai. curl jaise tools par koi asar nahi padta.</p>"
          }
        },
        recap: {
          en: "<ul><li>CORS is a browser rule about which origins may read your responses.</li><li>The server still answers; the allow header decides what the browser shows.</li><li>It is not API security: curl ignores it, so keep authentication.</li></ul>",
          hi: "<ul><li>CORS browser का नियम है कि कौन-से origins आपके responses पढ़ सकते हैं।</li><li>Server फिर भी जवाब देता है; allow header तय करता है कि browser क्या दिखाए।</li><li>यह API की security नहीं है: curl इसे नहीं मानता, इसलिए authentication रखो।</li></ul>",
          hg: "<ul><li>CORS browser ka niyam hai ki kaun se origins aapke responses padh sakte hain.</li><li>Server phir bhi jawab deta hai; allow header tay karta hai ki browser kya dikhaye.</li><li>Yeh API ki security nahi hai: curl ise nahi maanta, isliye authentication rakho.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Which websites may read the response?",
            hi: "कौन-सी websites response पढ़ सकती हैं?",
            hg: "Kaun si websites response padh sakti hain?"
          },
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddCors(o => o.AddPolicy(\"crm-web\", p => p\n    .WithOrigins(\"https://crm.example.com\")\n    .WithMethods(\"GET\", \"POST\")));\nvar app = builder.Build();\napp.UseCors(\"crm-web\");\napp.MapGet(\"/tickets\", () => \"ticket list\");\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nasync Task Show(string who, HttpMethod method, string? origin)\n{\n    var request = new HttpRequestMessage(method, \"/tickets\");\n    if (origin is not null) request.Headers.Add(\"Origin\", origin);\n    if (method == HttpMethod.Options) request.Headers.Add(\"Access-Control-Request-Method\", \"POST\");\n    var response = await client.SendAsync(request);\n    var allowed = response.Headers.TryGetValues(\"Access-Control-Allow-Origin\", out var v) ? v.First() : \"none\";\n    Console.WriteLine($\"{who}: {(int)response.StatusCode}, Access-Control-Allow-Origin = {allowed}\");\n}\n\nawait Show(\"CRM website GET\", HttpMethod.Get, \"https://crm.example.com\");\nawait Show(\"Other website GET\", HttpMethod.Get, \"https://evil.example\");\nawait Show(\"Other website preflight\", HttpMethod.Options, \"https://evil.example\");\nawait Show(\"curl, no Origin\", HttpMethod.Get, null);\nawait app.StopAsync();\n",
          check: "run",
          packages: [
            "Microsoft.AspNetCore.TestHost"
          ],
          frameworks: [
            "aspnetcore"
          ],
          expected: "CRM website GET: 200, Access-Control-Allow-Origin = https://crm.example.com\nOther website GET: 200, Access-Control-Allow-Origin = none\nOther website preflight: 204, Access-Control-Allow-Origin = none\ncurl, no Origin: 200, Access-Control-Allow-Origin = none"
        }
      ]
    },
    {
      id: "rate-limiting",
      depth: "short",
      title: {
        en: "Rate limiting and 429",
        hi: "Rate limiting और 429",
        hg: "Rate limiting aur 429"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 6 decided which browser pages may read your responses. Rate limiting decides how often any caller may ask. It reuses what you know: a status code the client can act on, this time <b>429</b>, and a header that tells it when to come back.</p>",
          hi: "<p>पाठ 6 ने तय किया कि कौन-से browser pages आपके responses पढ़ सकते हैं। Rate limiting तय करती है कि कोई भी caller कितनी बार माँग सकता है। यह वही चीज़ें दोबारा लगाती है जो आप जानते हैं: ऐसा status code जिस पर client कुछ कर सके, इस बार <b>429</b>, और एक header जो बताए कब लौटना है।</p>",
          hg: "<p>Lesson 6 ne tay kiya ki kaun se browser pages aapke responses padh sakte hain. Rate limiting tay karti hai ki koi bhi caller kitni baar maang sakta hai. Yeh wahi cheezein dobara lagati hai jo aap jaante hain: aisa status code jis par client kuch kar sake, is baar <b>429</b>, aur ek header jo bataye kab lautna hai.</p>"
        },
        what: {
          en: "<p><b>Rate limiting</b> allows each caller only N requests per time window. Extra requests are rejected with <b>429 Too Many Requests</b>, usually with a <code>Retry-After</code> header. ASP.NET Core has it built in since .NET 7.</p><p>You can keep a separate counter for each caller. That is called a <b>partition</b>.</p>",
          hi: "<p><b>Rate limiting</b> हर caller को एक time window में सिर्फ़ N requests की इजाज़त देती है। ज़्यादा requests <b>429 Too Many Requests</b> से लौटा दी जाती हैं, आम तौर पर <code>Retry-After</code> header के साथ। ASP.NET Core में यह .NET 7 से built-in है।</p><p>हर caller का अलग counter रखा जा सकता है। इसे <b>partition</b> कहते हैं।</p>",
          hg: "<p><b>Rate limiting</b> har caller ko ek time window mein sirf N requests ki ijazat deti hai. Zyaada requests <b>429 Too Many Requests</b> se lauta di jaati hain, aam taur par <code>Retry-After</code> header ke saath. ASP.NET Core mein yeh .NET 7 se built-in hai.</p><p>Har caller ka alag counter rakha ja sakta hai. Ise <b>partition</b> kehte hain.</p>"
        },
        why: {
          en: "<p>A buggy client in a loop, a scraper or one noisy agent can slow the API for everyone. A per-caller limit keeps the service fair and the database alive.</p>",
          hi: "<p>Loop में फँसा buggy client, कोई scraper या एक शोर मचाने वाला agent सबके लिए API धीमी कर सकता है। हर-caller की limit service को सबके लिए बराबर रखती है और database को ज़िंदा।</p>",
          hg: "<p>Loop mein phansa buggy client, koi scraper ya ek shor machane wala agent sabke liye API dheemi kar sakta hai. Har-caller ki limit service ko sabke liye barabar rakhti hai aur database ko zinda.</p>"
        },
        analogy: {
          en: "<p>The prasad counter at a temple: each family gets 2 laddus per visit. The third request hears \"come back after an hour\". Another family at the same counter is not affected.</p>",
          hi: "<p>मंदिर का प्रसाद counter: हर परिवार को एक बार में 2 लड्डू। तीसरी माँग पर जवाब मिलता है \"एक घंटे बाद आना\"। उसी counter पर दूसरे परिवार पर कोई असर नहीं पड़ता।</p>",
          hg: "<p>Mandir ka prasad counter: har parivaar ko ek baar mein 2 laddu. Teesri maang par jawab milta hai \"ek ghante baad aana\". Usi counter par doosre parivaar par koi asar nahi padta.</p>"
        },
        lines: [
          {
            code: "o.RejectionStatusCode = StatusCodes.Status429TooManyRequests;",
            note: {
              en: "The default rejection status is <b>503</b>, which tells monitoring that the server is broken. Set 429 so clients know they are only going too fast.",
              hi: "Default rejection status <b>503</b> है, जो monitoring को बताता है कि server ख़राब है। 429 set करो ताकि clients को पता चले कि वे बस बहुत तेज़ जा रहे हैं।",
              hg: "Default rejection status <b>503</b> hai, jo monitoring ko batata hai ki server kharaab hai. 429 set karo taaki clients ko pata chale ki woh bas bahut tez ja rahe hain."
            }
          },
          {
            code: "if (context.Lease.TryGetMetadata(MetadataName.RetryAfter, out var wait))",
            note: {
              en: "The rejected lease knows how long until this caller's window resets. Send those seconds as <code>Retry-After</code> (3600 here), so the header is always true. A hard-coded value can tell clients to come back while they are still blocked.",
              hi: "Reject हुई lease जानती है कि इस caller की window कितनी देर में reset होगी। वही seconds <code>Retry-After</code> में भेजो (यहाँ 3600), ताकि header हमेशा सही रहे। Hard-coded value clients को तब लौटने को कह सकती है जब वे अभी भी blocked हों।",
              hg: "Reject hui lease jaanti hai ki is caller ki window kitni der mein reset hogi. Wahi seconds <code>Retry-After</code> mein bhejo (yahan 3600), taaki header hamesha sahi rahe. Hard-coded value clients ko tab lautne ko keh sakti hai jab woh abhi bhi blocked hon."
            }
          },
          {
            code: "RateLimitPartition.GetFixedWindowLimiter(",
            note: {
              en: "Creates one fixed-window limiter <b>per partition key</b>. The key on the next line is the <code>X-Agent</code> header, so every agent gets their own counter. In a real API take the key from the signed-in user (lesson 5), because anyone can fake a header.",
              hi: "हर <b>partition key</b> के लिए एक fixed-window limiter बनाता है। अगली line की key <code>X-Agent</code> header है, इसलिए हर agent का अपना counter है। असली API में key signed-in user से लो (पाठ 5), क्योंकि header कोई भी नकली भेज सकता है।",
              hg: "Har <b>partition key</b> ke liye ek fixed-window limiter banata hai. Agli line ki key <code>X-Agent</code> header hai, isliye har agent ka apna counter hai. Asli API mein key signed-in user se lo (lesson 5), kyunki header koi bhi nakli bhej sakta hai."
            }
          },
          {
            code: "PermitLimit = 2,",
            note: {
              en: "At most 2 requests per window for each key. The demo window is one hour so that the output never depends on timing.",
              hi: "हर key के लिए एक window में ज़्यादा से ज़्यादा 2 requests। Demo की window एक घंटे की है ताकि output कभी timing पर टिका न हो।",
              hg: "Har key ke liye ek window mein zyaada se zyaada 2 requests. Demo ki window ek ghante ki hai taaki output kabhi timing par tika na ho."
            }
          },
          {
            code: "app.MapGet(\"/tickets\", () => \"ticket list\").RequireRateLimiting(\"per-agent\");",
            note: {
              en: "Attaches the named policy to the endpoint. <code>app.UseRateLimiter()</code> above is the middleware that enforces it.",
              hi: "नाम वाली policy को endpoint से जोड़ता है। ऊपर का <code>app.UseRateLimiter()</code> वह middleware है जो इसे लागू करता है।",
              hg: "Naam wali policy ko endpoint se jodta hai. Upar ka <code>app.UseRateLimiter()</code> woh middleware hai jo ise laagu karta hai."
            }
          },
          {
            code: "Console.WriteLine($\"Kiran, first call: {(int)(await Get(\"Kiran\")).StatusCode}\");",
            note: {
              en: "Meena is blocked, but Kiran still gets 200. Separate partitions mean one noisy caller cannot block the others.",
              hi: "Meena रुक गई, पर Kiran को अब भी 200 मिलता है। अलग partitions का मतलब है कि एक शोर वाला caller बाक़ियों को नहीं रोक सकता।",
              hg: "Meena ruk gayi, par Kiran ko ab bhi 200 milta hai. Alag partitions ka matlab hai ki ek shor wala caller baakiyon ko nahi rok sakta."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Leaving the default 503. Dashboards report an outage and retry libraries treat it as a server fault.</li><li>One shared counter for everybody. A single heavy caller then blocks all the others; partition by agent, API key or user.</li><li>No <code>Retry-After</code> header. Clients guess, and often retry at once.</li></ul>",
          hi: "<ul><li>Default 503 छोड़ देना। Dashboards outage बताते हैं और retry libraries उसे server की ग़लती मानती हैं।</li><li>सबके लिए एक ही shared counter। तब एक भारी caller बाक़ी सबको रोक देता है; agent, API key या user से partition करो।</li><li><code>Retry-After</code> header न देना। Clients अंदाज़ा लगाते हैं, और अक्सर तुरंत retry करते हैं।</li></ul>",
          hg: "<ul><li>Default 503 chhod dena. Dashboards outage batate hain aur retry libraries use server ki galti maanti hain.</li><li>Sabke liye ek hi shared counter. Tab ek bhaari caller baaki sabko rok deta hai; agent, API key ya user se partition karo.</li><li><code>Retry-After</code> header na dena. Clients andaaza lagate hain, aur aksar turant retry karte hain.</li></ul>"
        },
        whenToUse: {
          en: "<p>Limit login, search, export and any expensive endpoint. Choose the partition key carefully (agent, API key, user). Other algorithms such as sliding window and token bucket, and the limits of in-process limiters, are in the Deep Dive.</p>",
          hi: "<p>Login, search, export और हर महँगे endpoint पर limit लगाओ। Partition key सोच-समझकर चुनो (agent, API key, user)। Sliding window और token bucket जैसे दूसरे algorithms, और in-process limiters की सीमाएँ Deep Dive में हैं।</p>",
          hg: "<p>Login, search, export aur har mehenge endpoint par limit lagao. Partition key soch-samajhkar chuno (agent, API key, user). Sliding window aur token bucket jaise doosre algorithms, aur in-process limiters ki seemaayein Deep Dive mein hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a <code>GET /health</code> endpoint with no rate limit. After Meena is blocked on <code>/tickets</code>, print the status of <code>/health</code> to show it still answers 200.</p>",
            hi: "<p>बिना rate limit का <code>GET /health</code> endpoint जोड़ो। Meena के <code>/tickets</code> पर रुकने के बाद <code>/health</code> का status print करो ताकि दिखे कि वह अब भी 200 देता है।</p>",
            hg: "<p>Bina rate limit ka <code>GET /health</code> endpoint jodo. Meena ke <code>/tickets</code> par rukne ke baad <code>/health</code> ka status print karo taaki dikhe ki woh ab bhi 200 deta hai.</p>"
          },
          hint: {
            en: "<p>Just do not call <code>RequireRateLimiting</code> on the new endpoint. Limits apply only to endpoints that name a policy.</p>",
            hi: "<p>नए endpoint पर बस <code>RequireRateLimiting</code> मत लगाओ। Limits सिर्फ़ उन endpoints पर लगती हैं जो policy का नाम लेते हैं।</p>",
            hg: "<p>Naye endpoint par bas <code>RequireRateLimiting</code> mat lagao. Limits sirf un endpoints par lagti hain jo policy ka naam lete hain.</p>"
          },
          solution: {
            caption: {
              en: "Solution: an unlimited health endpoint",
              hi: "हल: बिना limit का health endpoint",
              hg: "Hal: bina limit ka health endpoint"
            },
            src: "using System.Threading.RateLimiting;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.RateLimiting;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddRateLimiter(o =>\n{\n    o.RejectionStatusCode = StatusCodes.Status429TooManyRequests;   // the default is 503\n    o.OnRejected = (context, ct) =>\n    {\n        if (context.Lease.TryGetMetadata(MetadataName.RetryAfter, out var wait))   // time until the window resets\n            context.HttpContext.Response.Headers.RetryAfter = ((int)wait.TotalSeconds).ToString();\n        return ValueTask.CompletedTask;\n    };\n    o.AddPolicy(\"per-agent\", context => RateLimitPartition.GetFixedWindowLimiter(\n        context.Request.Headers[\"X-Agent\"].ToString(),              // one counter per agent\n        _ => new FixedWindowRateLimiterOptions\n        {\n            PermitLimit = 2,\n            Window = TimeSpan.FromHours(1),                         // long window: no timing in the demo\n            QueueLimit = 0\n        }));\n});\nvar app = builder.Build();\n\napp.UseRateLimiter();\napp.MapGet(\"/tickets\", () => \"ticket list\").RequireRateLimiting(\"per-agent\");\n\napp.MapGet(\"/health\", () => \"healthy\");   // no rate limit here\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nasync Task<HttpResponseMessage> Get(string agent)\n{\n    var request = new HttpRequestMessage(HttpMethod.Get, \"/tickets\");\n    request.Headers.Add(\"X-Agent\", agent);\n    return await client.SendAsync(request);\n}\n\nvar codes = new List<int>();\nfor (var i = 0; i < 2; i++) codes.Add((int)(await Get(\"Meena\")).StatusCode);\nConsole.WriteLine($\"Meena, two calls: {string.Join(\" \", codes)}\");\n\nvar blocked = await Get(\"Meena\");\nConsole.WriteLine($\"Meena, third call: {(int)blocked.StatusCode}, Retry-After {blocked.Headers.RetryAfter?.Delta?.TotalSeconds}\");\nConsole.WriteLine($\"Meena, /health: {(int)(await client.GetAsync(\"/health\")).StatusCode}\");\nConsole.WriteLine($\"Kiran, first call: {(int)(await Get(\"Kiran\")).StatusCode}\");\nawait app.StopAsync();\n",
            check: "run",
            packages: [
              "Microsoft.AspNetCore.TestHost"
            ],
            frameworks: [
              "aspnetcore"
            ],
            expected: "Meena, two calls: 200 200\nMeena, third call: 429, Retry-After 3600\nMeena, /health: 200\nKiran, first call: 200"
          }
        },
        quiz: {
          q: {
            en: "You add a rate limiter but never set <code>RejectionStatusCode</code>. What status do rejected requests get?",
            hi: "आपने rate limiter लगाया पर <code>RejectionStatusCode</code> कभी set नहीं किया। Rejected requests को कौन-सा status मिलता है?",
            hg: "Aapne rate limiter lagaya par <code>RejectionStatusCode</code> kabhi set nahi kiya. Rejected requests ko kaunsa status milta hai?"
          },
          options: [
            {
              en: "<code>503 Service Unavailable</code>",
              hi: "<code>503 Service Unavailable</code> जवाब",
              hg: "<code>503 Service Unavailable</code> jawab"
            },
            {
              en: "<code>429 Too Many Requests</code>",
              hi: "<code>429 Too Many Requests</code> जवाब",
              hg: "<code>429 Too Many Requests</code> jawab"
            },
            {
              en: "<code>403 Forbidden</code>",
              hi: "<code>403 Forbidden</code> जवाब",
              hg: "<code>403 Forbidden</code> jawab"
            },
            {
              en: "<code>400 Bad Request</code>",
              hi: "<code>400 Bad Request</code> जवाब",
              hg: "<code>400 Bad Request</code> jawab"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>The built-in limiter rejects with 503 unless you change it. Set <code>RejectionStatusCode = 429</code> so clients and monitoring see \"slow down\", not \"server broken\".</p>",
            hi: "<p>Built-in limiter जब तक आप न बदलें, 503 से reject करता है। <code>RejectionStatusCode = 429</code> set करो ताकि clients और monitoring को \"धीरे चलो\" दिखे, \"server ख़राब\" नहीं।</p>",
            hg: "<p>Built-in limiter jab tak aap na badlein, 503 se reject karta hai. <code>RejectionStatusCode = 429</code> set karo taaki clients aur monitoring ko \"dheere chalo\" dikhe, \"server kharaab\" nahi.</p>"
          }
        },
        recap: {
          en: "<ul><li>Rate limiting caps requests per caller per time window.</li><li>Set <code>RejectionStatusCode = 429</code> (the default is 503) and send <code>Retry-After</code>.</li><li>Partition by caller so one noisy client cannot block the rest.</li></ul>",
          hi: "<ul><li>Rate limiting हर caller की requests को हर time window में एक limit तक रखती है।</li><li><code>RejectionStatusCode = 429</code> set करो (default 503 है) और <code>Retry-After</code> भेजो।</li><li>Caller के हिसाब से partition करो ताकि एक शोर वाला client बाक़ियों को न रोके।</li></ul>",
          hg: "<ul><li>Rate limiting har caller ki requests ko har time window mein ek limit tak rakhti hai.</li><li><code>RejectionStatusCode = 429</code> set karo (default 503 hai) aur <code>Retry-After</code> bhejo.</li><li>Caller ke hisaab se partition karo taaki ek shor wala client baakiyon ko na roke.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Two requests per agent, then 429",
            hi: "हर agent के लिए दो requests, फिर 429",
            hg: "Har agent ke liye do requests, phir 429"
          },
          src: "using System.Threading.RateLimiting;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.RateLimiting;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddRateLimiter(o =>\n{\n    o.RejectionStatusCode = StatusCodes.Status429TooManyRequests;   // the default is 503\n    o.OnRejected = (context, ct) =>\n    {\n        if (context.Lease.TryGetMetadata(MetadataName.RetryAfter, out var wait))   // time until the window resets\n            context.HttpContext.Response.Headers.RetryAfter = ((int)wait.TotalSeconds).ToString();\n        return ValueTask.CompletedTask;\n    };\n    o.AddPolicy(\"per-agent\", context => RateLimitPartition.GetFixedWindowLimiter(\n        context.Request.Headers[\"X-Agent\"].ToString(),              // one counter per agent\n        _ => new FixedWindowRateLimiterOptions\n        {\n            PermitLimit = 2,\n            Window = TimeSpan.FromHours(1),                         // long window: no timing in the demo\n            QueueLimit = 0\n        }));\n});\nvar app = builder.Build();\n\napp.UseRateLimiter();\napp.MapGet(\"/tickets\", () => \"ticket list\").RequireRateLimiting(\"per-agent\");\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nasync Task<HttpResponseMessage> Get(string agent)\n{\n    var request = new HttpRequestMessage(HttpMethod.Get, \"/tickets\");\n    request.Headers.Add(\"X-Agent\", agent);\n    return await client.SendAsync(request);\n}\n\nvar codes = new List<int>();\nfor (var i = 0; i < 2; i++) codes.Add((int)(await Get(\"Meena\")).StatusCode);\nConsole.WriteLine($\"Meena, two calls: {string.Join(\" \", codes)}\");\n\nvar blocked = await Get(\"Meena\");\nConsole.WriteLine($\"Meena, third call: {(int)blocked.StatusCode}, Retry-After {blocked.Headers.RetryAfter?.Delta?.TotalSeconds}\");\nConsole.WriteLine($\"Kiran, first call: {(int)(await Get(\"Kiran\")).StatusCode}\");\nawait app.StopAsync();\n",
          check: "run",
          packages: [
            "Microsoft.AspNetCore.TestHost"
          ],
          frameworks: [
            "aspnetcore"
          ],
          expected: "Meena, two calls: 200 200\nMeena, third call: 429, Retry-After 3600\nKiran, first call: 200"
        }
      ]
    },
    {
      id: "controllers-in-code",
      depth: "detailed",
      title: {
        en: "A REST controller in code: verbs, status codes, Location",
        hi: "REST controller code में: verbs, status codes, Location",
        hg: "REST controller code mein: verbs, status codes, Location"
      },
      body: {
        en: "<ul><li><b>Read</b>: <code>GET /orders/42</code> returns 200 or 404. Return a DTO, not your EF entity (Day 6: keep the database model private).</li><li><b>Return types</b>: <code>ActionResult&lt;T&gt;</code> keeps the success type visible to OpenAPI while still allowing <code>NotFound()</code> and friends; add <code>[ProducesResponseType]</code> when more codes are possible.</li></ul><p><b>When to use / when not:</b> controllers are a good fit for larger APIs with many filters, versions and conventions; Minimal APIs fit small services (Day 12 compares them). Use PUT when the client always has the full resource; use PATCH for large resources or when clients edit single fields. Do not tunnel everything through POST just because it is easier on the client.</p>",
        hi: "<ul><li><b>Read</b>: <code>GET /orders/42</code> पर 200 या 404। EF entity नहीं, DTO लौटाओ (Day 6: database model को private रखो)।</li><li><b>Return types</b>: <code>ActionResult&lt;T&gt;</code> success type को OpenAPI के लिए दिखाता रखता है और <code>NotFound()</code> जैसे results भी देता है; ज़्यादा codes संभव हों तो <code>[ProducesResponseType]</code> जोड़ो।</li></ul><p><b>कब use करें / कब नहीं:</b> बड़ी APIs के लिए जिनमें कई filters, versions और conventions हों, controllers अच्छे हैं; छोटी services के लिए Minimal APIs (Day 12 में तुलना है)। जब client के पास हमेशा पूरा resource हो तब PUT; बड़े resources या single field edit के लिए PATCH। सिर्फ़ client के लिए आसान है इसलिए सब कुछ POST से मत भेजो।</p>",
        hg: "<ul><li><b>Read</b>: <code>GET /orders/42</code> par 200 ya 404. EF entity nahi, DTO lautao (Day 6: database model ko private rakho).</li><li><b>Return types</b>: <code>ActionResult&lt;T&gt;</code> success type ko OpenAPI ke liye dikhta rakhta hai aur <code>NotFound()</code> jaise results bhi deta hai; zyaada codes sambhav hon to <code>[ProducesResponseType]</code> jodo.</li></ul><p><b>Kab use karein / kab nahi:</b> badi APIs ke liye jinmein kai filters, versions aur conventions hon, controllers achhe hain; chhoti services ke liye Minimal APIs (Day 12 mein tulna hai). Jab client ke paas hamesha poora resource ho tab PUT; bade resources ya single field edit ke liye PATCH. Sirf client ke liye aasaan hai isliye sab kuch POST se mat bhejo.</p>"
      },
      code: [
        {
          caption: {
            en: "OrdersController: 201 + Location, 404, 409, 204 (compile-checked, not run)",
            hi: "OrdersController: 201 + Location, 404, 409, 204 (compile-checked, run नहीं)",
            hg: "OrdersController: 201 + Location, 404, 409, 204 (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.Extensions.DependencyInjection;\n\nvar builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddControllers();\nbuilder.Services.AddSingleton<OrderStore>();\n\nvar app = builder.Build();\napp.MapControllers();\napp.Run();\n\npublic record OrderDto(int Id, string Item, int Quantity);\npublic record NewOrder(string Item, int Quantity);\n\npublic class OrderStore\n{\n    private readonly Dictionary<int, OrderDto> _orders = new();\n    private int _nextId = 1;\n    public OrderDto? Find(int id) => _orders.GetValueOrDefault(id);\n    public bool ItemExists(string item) => _orders.Values.Any(o => o.Item == item);\n    public OrderDto Add(NewOrder n) { var o = new OrderDto(_nextId++, n.Item, n.Quantity); _orders[o.Id] = o; return o; }\n    public bool Replace(int id, NewOrder n) { if (!_orders.ContainsKey(id)) return false; _orders[id] = new OrderDto(id, n.Item, n.Quantity); return true; }\n    public bool Remove(int id) => _orders.Remove(id);\n}\n\n[ApiController]\n[Route(\"api/orders\")]\npublic class OrdersController(OrderStore store) : ControllerBase\n{\n    [HttpGet(\"{id:int}\", Name = \"GetOrder\")]\n    public ActionResult<OrderDto> Get(int id) =>\n        store.Find(id) is { } order ? order : NotFound();\n\n    [HttpPost]\n    [ProducesResponseType(StatusCodes.Status201Created)]\n    [ProducesResponseType(StatusCodes.Status409Conflict)]\n    public ActionResult<OrderDto> Create(NewOrder input)\n    {\n        if (store.ItemExists(input.Item))\n            return Conflict(new ProblemDetails { Title = \"Order for this item already exists\" });\n\n        var created = store.Add(input);\n        // 201 + Location: /api/orders/{id}\n        return CreatedAtRoute(\"GetOrder\", new { id = created.Id }, created);\n    }\n\n    [HttpPut(\"{id:int}\")]\n    public IActionResult Replace(int id, NewOrder input) =>\n        store.Replace(id, input) ? NoContent() : NotFound();\n\n    [HttpDelete(\"{id:int}\")]\n    public IActionResult Delete(int id) =>\n        store.Remove(id) ? NoContent() : NotFound();\n}"
        }
      ]
    },
    {
      id: "validation-limits",
      depth: "detailed",
      title: {
        en: "Minimal API validation, and 400 or 422",
        hi: "Minimal API validation, और 400 या 422",
        hg: "Minimal API validation, aur 400 ya 422"
      },
      body: {
        en: "<ul><li><b>Minimal APIs</b> did not validate DataAnnotations automatically before .NET 10. On .NET 10 you call <code>builder.Services.AddValidation()</code> and attributes on parameters and record types produce a 400 (check the version note in the What's new section).</li></ul><ul><li><b>400 or 422?</b> ASP.NET Core answers 400 for any invalid model. Some teams use <b>422 Unprocessable Content</b> for a body that is well-formed JSON but breaks a business rule, and keep 400 for broken input. Both are valid HTTP; pick one rule, change <code>InvalidModelStateResponseFactory</code> if needed, and document it.</li></ul>",
        hi: "<ul><li><b>Minimal APIs</b> .NET 10 से पहले DataAnnotations अपने-आप validate नहीं करती थीं। .NET 10 पर <code>builder.Services.AddValidation()</code> बुलाते हो और parameters व record types के attributes से 400 मिलता है (What's new section का version note देखो)।</li></ul><ul><li><b>400 या 422?</b> ASP.NET Core हर invalid model पर 400 देता है। कुछ teams <b>422 Unprocessable Content</b> उस body के लिए रखती हैं जो JSON के हिसाब से ठीक है पर business rule तोड़ती है, और टूटे input के लिए 400। दोनों सही HTTP हैं; एक नियम चुनो, ज़रूरत हो तो <code>InvalidModelStateResponseFactory</code> बदलो, और उसे document करो।</li></ul>",
        hg: "<ul><li><b>Minimal APIs</b> .NET 10 se pehle DataAnnotations apne-aap validate nahi karti thi. .NET 10 par <code>builder.Services.AddValidation()</code> bulate ho aur parameters va record types ke attributes se 400 milta hai (What's new section ka version note dekho).</li></ul><ul><li><b>400 ya 422?</b> ASP.NET Core har invalid model par 400 deta hai. Kuch teams <b>422 Unprocessable Content</b> us body ke liye rakhti hain jo JSON ke hisaab se theek hai par business rule todti hai, aur toote input ke liye 400. Dono sahi HTTP hain; ek rule chuno, zaroorat ho to <code>InvalidModelStateResponseFactory</code> badlo, aur use document karo.</li></ul>"
      }
    },
    {
      id: "jwt-oauth-policies",
      depth: "detailed",
      title: {
        en: "JWT with an identity provider, OAuth, policies and CORS order",
        hi: "Identity provider के साथ JWT, OAuth, policies और CORS का order",
        hg: "Identity provider ke saath JWT, OAuth, policies aur CORS ka order"
      },
      body: {
        en: "<ul><li><b>JWT bearer</b>: install <code>Microsoft.AspNetCore.Authentication.JwtBearer</code>; <code>AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(...)</code>. Normally set <code>Authority</code> (the identity provider's metadata supplies the public signing keys) and <code>Audience</code>. Validated by default: signature, issuer, audience, lifetime. A token signed with a shared secret (HMAC) means the API holds the secret; an identity provider that signs with a private key (RSA/ECDSA) lets the API verify with the public key only.</li><li><b>Tokens</b>: access token = short-lived (minutes), sent on every call; <b>refresh token</b> = long-lived, tracked (and revocable) by the authorization server, rotated on use, sent only to the token endpoint. A JWT cannot be revoked before it expires (unless you add a deny-list check), which is why lifetimes are short. Do not put secrets in the payload and keep tokens out of URLs.</li><li><b>OAuth 2.0 vs OpenID Connect</b>: OAuth 2.0 answers \"may this app call this API for this user?\" (access token). OpenID Connect adds \"who signed in?\" (ID token + user info). Authorization code flow with PKCE suits SPAs and mobile apps; client credentials suits service-to-service. Your API validates <b>access tokens</b>; ID tokens are for the client app.</li><li><b>Authorization</b>: <code>[Authorize]</code> = must be authenticated; <code>[Authorize(Roles = \"Admin\")]</code> = role check; <b>policies</b> = named rules, e.g. <code>RequireClaim(\"scope\", \"orders.write\")</code> or a custom <code>IAuthorizationHandler</code> for resource-based rules (\"only the owner\").</li></ul><ul><li><b>CORS details</b>: <code>UseCors(\"name\")</code> goes after <code>UseRouting()</code> and before authentication. <code>WithHeaders</code> must list every custom header the page sends (for example <code>Authorization</code>), or the preflight fails. <code>SetPreflightMaxAge</code> lets the browser cache a preflight answer instead of asking before every call.</li></ul>",
        hi: "<ul><li><b>JWT bearer</b>: <code>Microsoft.AspNetCore.Authentication.JwtBearer</code> install करो; <code>AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(...)</code>। आमतौर पर <code>Authority</code> (identity provider का metadata public signing keys देता है) और <code>Audience</code> set करते हैं। Default में validate होता है: signature, issuer, audience, lifetime। shared secret (HMAC) से signed token का मतलब API के पास secret है; private key (RSA/ECDSA) से sign करने वाला identity provider API को सिर्फ़ public key से verify करने देता है।</li><li><b>Tokens</b>: access token = छोटी उम्र (minutes), हर call पर भेजा जाता है; <b>refresh token</b> = लंबी उम्र, authorization server उसे track (और revoke) करता है, use पर rotate होता है, सिर्फ़ token endpoint को भेजा जाता है। JWT expire होने से पहले revoke नहीं हो सकता (जब तक deny-list check न जोड़ो), इसीलिए lifetime छोटी रखते हैं। payload में secrets मत रखो और tokens को URLs से बाहर रखो।</li><li><b>OAuth 2.0 vs OpenID Connect</b>: OAuth 2.0 जवाब देता है \"क्या यह app इस user के लिए इस API को बुला सकती है?\" (access token)। OpenID Connect जोड़ता है \"किसने sign-in किया?\" (ID token + user info)। SPAs और mobile apps के लिए PKCE वाला authorization code flow; service-to-service के लिए client credentials। आपकी API <b>access tokens</b> validate करती है; ID tokens client app के लिए हैं।</li><li><b>Authorization</b>: <code>[Authorize]</code> = authenticated होना ज़रूरी; <code>[Authorize(Roles = \"Admin\")]</code> = role check; <b>policies</b> = नाम वाले rules, जैसे <code>RequireClaim(\"scope\", \"orders.write\")</code> या resource-based rules (\"सिर्फ़ owner\") के लिए custom <code>IAuthorizationHandler</code>।</li></ul><ul><li><b>CORS details</b>: <code>UseCors(\"name\")</code>, <code>UseRouting()</code> के बाद और authentication से पहले आता है। Page जो भी custom header भेजता है (जैसे <code>Authorization</code>) उसे <code>WithHeaders</code> में लिखना ज़रूरी है, वरना preflight fail होगा। <code>SetPreflightMaxAge</code> से browser preflight का जवाब कुछ देर याद रखता है, हर call से पहले नहीं पूछता।</li></ul>",
        hg: "<ul><li><b>JWT bearer</b>: <code>Microsoft.AspNetCore.Authentication.JwtBearer</code> install karo; <code>AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(...)</code>. Aamtaur par <code>Authority</code> (identity provider ka metadata public signing keys deta hai) aur <code>Audience</code> set karte hain. Default mein validate hota hai: signature, issuer, audience, lifetime. Shared secret (HMAC) se signed token ka matlab API ke paas secret hai; private key (RSA/ECDSA) se sign karne wala identity provider API ko sirf public key se verify karne deta hai.</li><li><b>Tokens</b>: access token = chhoti umr (minutes), har call par bheja jaata hai; <b>refresh token</b> = lambi umr, authorization server use track (aur revoke) karta hai, use par rotate hota hai, sirf token endpoint ko bheja jaata hai. JWT expire hone se pehle revoke nahi ho sakta (jab tak deny-list check na jodo), isiliye lifetime chhoti rakhte hain. Payload mein secrets mat rakho aur tokens ko URLs se baahar rakho.</li><li><b>OAuth 2.0 vs OpenID Connect</b>: OAuth 2.0 jawab deta hai \"kya yeh app is user ke liye is API ko bula sakti hai?\" (access token). OpenID Connect jodta hai \"kisne sign-in kiya?\" (ID token + user info). SPAs aur mobile apps ke liye PKCE wala authorization code flow; service-to-service ke liye client credentials. Aapki API <b>access tokens</b> validate karti hai; ID tokens client app ke liye hain.</li><li><b>Authorization</b>: <code>[Authorize]</code> = authenticated hona zaroori; <code>[Authorize(Roles = \"Admin\")]</code> = role check; <b>policies</b> = naam wale rules, jaise <code>RequireClaim(\"scope\", \"orders.write\")</code> ya resource-based rules (\"sirf owner\") ke liye custom <code>IAuthorizationHandler</code>.</li></ul><ul><li><b>CORS details</b>: <code>UseCors(\"name\")</code>, <code>UseRouting()</code> ke baad aur authentication se pehle aata hai. Page jo bhi custom header bhejta hai (jaise <code>Authorization</code>) use <code>WithHeaders</code> mein likhna zaroori hai, warna preflight fail hoga. <code>SetPreflightMaxAge</code> se browser preflight ka jawab kuch der yaad rakhta hai, har call se pehle nahi poochta.</li></ul>"
      },
      code: [
        {
          caption: {
            en: "JWT bearer, a scope policy, and CORS in the right order (compile-checked, not run)",
            hi: "JWT bearer, एक scope policy, और सही order में CORS (compile-checked, run नहीं)",
            hg: "JWT bearer, ek scope policy, aur sahi order mein CORS (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          packages: [
            "Microsoft.AspNetCore.Authentication.JwtBearer"
          ],
          src: "using Microsoft.AspNetCore.Authentication.JwtBearer;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services\n    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)\n    .AddJwtBearer(options =>\n    {\n        // The identity provider's metadata supplies the public signing keys.\n        options.Authority = builder.Configuration[\"Auth:Authority\"];\n        options.Audience = builder.Configuration[\"Auth:Audience\"];\n        // Signature, issuer, audience and lifetime are validated by default.\n    });\n\nbuilder.Services.AddAuthorizationBuilder()\n    .AddPolicy(\"CanWriteOrders\", p => p.RequireAuthenticatedUser().RequireClaim(\"scope\", \"orders.write\"));\n\nbuilder.Services.AddCors(o => o.AddPolicy(\"shop-web\", p => p\n    .WithOrigins(\"https://shop.example.com\")\n    .WithMethods(\"GET\", \"POST\", \"PUT\", \"DELETE\")\n    .WithHeaders(\"Authorization\", \"Content-Type\")));\n\nvar app = builder.Build();\n\napp.UseRouting();\napp.UseCors(\"shop-web\");       // before authentication: a preflight carries no token\napp.UseAuthentication();       // reads the bearer token, sets HttpContext.User\napp.UseAuthorization();        // 401 if not authenticated, 403 if the policy fails\n\napp.MapGet(\"/orders\", () => Results.Ok(new[] { \"o1\", \"o2\" })).RequireAuthorization();\napp.MapPost(\"/orders\", () => Results.Created(\"/orders/3\", null)).RequireAuthorization(\"CanWriteOrders\");\n\napp.Run();"
        }
      ]
    },
    {
      id: "versioning",
      depth: "detailed",
      title: {
        en: "API versioning",
        hi: "API की versioning",
        hg: "API ki versioning"
      },
      body: {
        en: "<ul><li><b>Versioning</b>: the <code>Asp.Versioning.Http</code> and <code>Asp.Versioning.Mvc</code> packages (they replaced the older <code>Microsoft.AspNetCore.Mvc.Versioning</code>). <code>ReportApiVersions</code> adds <code>api-supported-versions</code> and <code>api-deprecated-versions</code> response headers. Strategy trade-offs: URL segment = most visible and easy to test in a browser; header or media type = clean URLs but harder to test and cache; query string = simple, easy to forget.</li></ul><p>Version by URL for a public API with many unknown clients. For a private API with one client, avoid version sprawl and change it additively instead (new optional fields, new endpoints).</p>",
        hi: "<ul><li><b>Versioning</b>: <code>Asp.Versioning.Http</code> और <code>Asp.Versioning.Mvc</code> packages (इन्होंने पुराने <code>Microsoft.AspNetCore.Mvc.Versioning</code> की जगह ली)। <code>ReportApiVersions</code> response में <code>api-supported-versions</code> और <code>api-deprecated-versions</code> headers जोड़ता है। Strategy trade-offs: URL segment = सबसे दिखने वाला और browser में test करना आसान; header या media type = साफ़ URLs पर test और cache करना कठिन; query string = सरल, पर भूलना आसान।</li></ul><p>बहुत से अनजान clients वाली public API के लिए URL से version करो। एक client वाली private API में version बढ़ाने की जगह additive बदलाव करो (नए optional fields, नए endpoints)।</p>",
        hg: "<ul><li><b>Versioning</b>: <code>Asp.Versioning.Http</code> aur <code>Asp.Versioning.Mvc</code> packages (inhone purane <code>Microsoft.AspNetCore.Mvc.Versioning</code> ki jagah li). <code>ReportApiVersions</code> response mein <code>api-supported-versions</code> aur <code>api-deprecated-versions</code> headers jodta hai. Strategy trade-offs: URL segment = sabse dikhne wala aur browser mein test karna aasaan; header ya media type = saaf URLs par test aur cache karna kathin; query string = saral, par bhoolna aasaan.</li></ul><p>Bahut se anjaan clients wali public API ke liye URL se version karo. Ek client wali private API mein version badhane ki jagah additive badlaav karo (naye optional fields, naye endpoints).</p>"
      },
      code: [
        {
          caption: {
            en: "Asp.Versioning: URL-segment versions on controllers (not compile-checked: Asp.Versioning is a third-party package outside the checker's net9 package set; shows the API shape)",
            hi: "Asp.Versioning: controllers पर URL-segment versions (compile-checked नहीं: Asp.Versioning third-party package है, checker के net9 packages में नहीं; API की shape दिखाता है)",
            hg: "Asp.Versioning: controllers par URL-segment versions (compile-checked nahi: Asp.Versioning third-party package hai, checker ke net9 packages mein nahi; API ki shape dikhata hai)"
          },
          check: "none",
          src: "// dotnet add package Asp.Versioning.Mvc\n// (Minimal APIs: Asp.Versioning.Http; OpenAPI integration: Asp.Versioning.Mvc.ApiExplorer)\nusing Asp.Versioning;\n\nbuilder.Services\n    .AddApiVersioning(options =>\n    {\n        options.DefaultApiVersion = new ApiVersion(1, 0);\n        options.AssumeDefaultVersionWhenUnspecified = true;\n        options.ReportApiVersions = true;   // adds api-supported-versions / api-deprecated-versions headers\n        // The route below contains v{version:apiVersion}, so the version must come from the URL segment.\n        // A header reader would need routes without that segment, so it is not combined here.\n        options.ApiVersionReader = new UrlSegmentApiVersionReader();   // /api/v2/orders\n    })\n    .AddMvc();\n\n[ApiController]\n[ApiVersion(\"1.0\", Deprecated = true)]\n[ApiVersion(\"2.0\")]\n[Route(\"api/v{version:apiVersion}/orders\")]\npublic class OrdersController : ControllerBase\n{\n    [HttpGet, MapToApiVersion(\"1.0\")] public string GetV1() => \"v1: flat list\";\n    [HttpGet, MapToApiVersion(\"2.0\")] public string GetV2() => \"v2: paged list\";\n}"
        }
      ]
    },
    {
      id: "etag-conditional",
      depth: "detailed",
      title: {
        en: "ETag and conditional requests",
        hi: "ETag और conditional requests",
        hg: "ETag aur conditional requests"
      },
      body: {
        en: "<ul><li><b>ETag</b>: send <code>ETag</code> on GET; the client replays it in <code>If-None-Match</code>; unchanged resource gives <b>304 Not Modified</b>, no body. For writes, <code>If-Match</code> mismatch gives <b>412</b> (Day 6 row version is the usual source of the tag).</li></ul>",
        hi: "<ul><li><b>ETag</b>: GET पर <code>ETag</code> भेजो; client उसे <code>If-None-Match</code> में लौटाता है; resource न बदला हो तो <b>304 Not Modified</b>, बिना body। writes पर <code>If-Match</code> mismatch से <b>412</b> (tag का आम स्रोत Day 6 का row version है)।</li></ul>",
        hg: "<ul><li><b>ETag</b>: GET par <code>ETag</code> bhejo; client use <code>If-None-Match</code> mein lautata hai; resource na badla ho to <b>304 Not Modified</b>, bina body. Writes par <code>If-Match</code> mismatch se <b>412</b> (tag ka aam source Day 6 ka row version hai).</li></ul>"
      },
      code: [
        {
          caption: {
            en: "If-None-Match gives 304 on a read; If-Match gives 412 on a stale write",
            hi: "Read पर If-None-Match से 304; पुरानी write पर If-Match से 412",
            hg: "Read par If-None-Match se 304; purani write par If-Match se 412"
          },
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nvar app = builder.Build();\n\nvar version = 1;   // row version of ticket 501 (Day 6)\n\napp.MapGet(\"/tickets/501\", (HttpContext ctx) =>\n{\n    var etag = $\"\\\"v{version}\\\"\";\n    ctx.Response.Headers.ETag = etag;\n    return ctx.Request.Headers.IfNoneMatch == etag\n        ? Results.StatusCode(StatusCodes.Status304NotModified)      // client copy is fresh\n        : Results.Text($\"ticket 501, version {version}\");\n});\napp.MapPut(\"/tickets/501\", (HttpContext ctx) =>\n{\n    if (ctx.Request.Headers.IfMatch != $\"\\\"v{version}\\\"\")\n        return Results.StatusCode(StatusCodes.Status412PreconditionFailed);   // stale write\n    version++;\n    return Results.NoContent();\n});\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nasync Task Send(string label, HttpMethod method, string header, string tag)\n{\n    var request = new HttpRequestMessage(method, \"/tickets/501\");\n    request.Headers.TryAddWithoutValidation(header, tag);\n    var response = await client.SendAsync(request);\n    Console.WriteLine($\"{label} -> {(int)response.StatusCode} {response.Headers.ETag?.Tag}\".TrimEnd());\n}\n\nawait Send(\"GET If-None-Match v1\", HttpMethod.Get, \"If-None-Match\", \"\\\"v1\\\"\");\nawait Send(\"Asha PUT If-Match v1\", HttpMethod.Put, \"If-Match\", \"\\\"v1\\\"\");\nawait Send(\"Ravi PUT If-Match v1\", HttpMethod.Put, \"If-Match\", \"\\\"v1\\\"\");\nawait Send(\"GET If-None-Match v1\", HttpMethod.Get, \"If-None-Match\", \"\\\"v1\\\"\");\nawait app.StopAsync();\n",
          check: "run",
          packages: [
            "Microsoft.AspNetCore.TestHost"
          ],
          frameworks: [
            "aspnetcore"
          ],
          expected: "GET If-None-Match v1 -> 304 \"v1\"\nAsha PUT If-Match v1 -> 204\nRavi PUT If-Match v1 -> 412\nGET If-None-Match v1 -> 200 \"v2\""
        }
      ]
    },
    {
      id: "output-cache",
      depth: "detailed",
      title: {
        en: "Output caching with tag eviction",
        hi: "Output caching और tag से eviction",
        hg: "Output caching aur tag se eviction"
      },
      body: {
        en: "<ul><li><b>Output caching</b> (.NET 7+, <code>AddOutputCache</code>/<code>UseOutputCache</code>, <code>CacheOutput()</code> or <code>[OutputCache]</code>): <i>the server</i> decides. Named policies, vary by query or header, <b>tag-based eviction</b> with <code>IOutputCacheStore.EvictByTagAsync</code>. The default policy caches only successful GET/HEAD responses and skips responses that set cookies or answer authenticated requests. Call <code>UseOutputCache</code> after <code>UseCors</code>.</li></ul><p>Use it for public, read-heavy GET endpoints whose data changes rarely (agent list, catalogue, configuration). Do not cache writes or per-user answers, and evict the tag after every write that changes the data.</p>",
        hi: "<ul><li><b>Output caching</b> (.NET 7+, <code>AddOutputCache</code>/<code>UseOutputCache</code>, <code>CacheOutput()</code> या <code>[OutputCache]</code>): <i>server</i> फ़ैसला करता है। Named policies, query या header से vary, <code>IOutputCacheStore.EvictByTagAsync</code> से <b>tag-based eviction</b>। Default policy सिर्फ़ सफल GET/HEAD responses cache करती है और cookies set करने वाले या authenticated requests के responses छोड़ देती है। <code>UseOutputCache</code> को <code>UseCors</code> के बाद बुलाओ।</li></ul><p>इसे उन public, ज़्यादा पढ़े जाने वाले GET endpoints के लिए use करो जिनका data कम बदलता है (agents की list, catalogue, configuration)। Writes या हर-user के जवाब cache मत करो, और data बदलने वाली हर write के बाद tag evict करो।</p>",
        hg: "<ul><li><b>Output caching</b> (.NET 7+, <code>AddOutputCache</code>/<code>UseOutputCache</code>, <code>CacheOutput()</code> ya <code>[OutputCache]</code>): <i>server</i> faisla karta hai. Named policies, query ya header se vary, <code>IOutputCacheStore.EvictByTagAsync</code> se <b>tag-based eviction</b>. Default policy sirf safal GET/HEAD responses cache karti hai aur cookies set karne wale ya authenticated requests ke responses chhod deti hai. <code>UseOutputCache</code> ko <code>UseCors</code> ke baad bulao.</li></ul><p>Ise un public, zyaada padhe jaane wale GET endpoints ke liye use karo jinka data kam badalta hai (agents ki list, catalogue, configuration). Writes ya har-user ke jawab cache mat karo, aur data badalne wali har write ke baad tag evict karo.</p>"
      },
      code: [
        {
          caption: {
            en: "Three GETs, one database call, then evict by tag",
            hi: "तीन GETs, एक database call, फिर tag से evict",
            hg: "Teen GETs, ek database call, phir tag se evict"
          },
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.OutputCaching;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddOutputCache(o =>\n    o.AddPolicy(\"agents\", p => p.Expire(TimeSpan.FromMinutes(5)).Tag(\"agents\")));\nvar app = builder.Build();\n\napp.UseOutputCache();\nvar agents = new List<string> { \"Meena\", \"Kiran\" };\nvar databaseCalls = 0;\n\napp.MapGet(\"/agents\", () =>\n{\n    databaseCalls++;               // pretend this is an expensive query\n    return agents;\n}).CacheOutput(\"agents\");\napp.MapPost(\"/agents\", async (string name, IOutputCacheStore cache, CancellationToken ct) =>\n{\n    agents.Add(name);\n    await cache.EvictByTagAsync(\"agents\", ct);   // data changed: drop the cached list\n    return Results.NoContent();\n});\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nfor (var i = 0; i < 3; i++) await client.GetAsync(\"/agents\");\nConsole.WriteLine($\"3 GETs -> {databaseCalls} database call\");\n\nawait client.PostAsync(\"/agents?name=Anil\", null);\nvar body = await client.GetStringAsync(\"/agents\");\nConsole.WriteLine($\"after POST -> {databaseCalls} database calls, {body}\");\nawait app.StopAsync();\n",
          check: "run",
          packages: [
            "Microsoft.AspNetCore.TestHost"
          ],
          frameworks: [
            "aspnetcore"
          ],
          expected: "3 GETs -> 1 database call\nafter POST -> 2 database calls, [\"Meena\",\"Kiran\",\"Anil\"]"
        }
      ]
    },
    {
      id: "caching-layers",
      depth: "detailed",
      title: {
        en: "Other cache layers: response cache, IMemoryCache, HybridCache",
        hi: "दूसरी cache layers: response cache, IMemoryCache, HybridCache",
        hg: "Doosri cache layers: response cache, IMemoryCache, HybridCache"
      },
      body: {
        en: "<ul><li><b>Response caching</b> (<code>AddResponseCaching</code>/<code>UseResponseCaching</code>, <code>[ResponseCache]</code>): driven by HTTP headers; <code>[ResponseCache]</code> mainly sets <code>Cache-Control</code> for clients and proxies. The server-side middleware honours client request headers such as <code>Cache-Control: no-cache</code>, so you do not fully control it. Put <code>UseCors</code> before it.</li><li><b>IMemoryCache</b>: in-process, fastest, but each server instance has its own copy and a restart empties it. <b>IDistributedCache</b>: shared (Redis, SQL Server), you serialize, no stampede protection.</li><li><b>HybridCache</b> (package <code>Microsoft.Extensions.Caching.Hybrid</code>, introduced with .NET 9; also runs on .NET 8): one <code>GetOrCreateAsync(key, factory)</code> call. L1 in-memory plus an optional L2 distributed cache; concurrent callers for one key share a single factory call (<b>stampede protection</b>); tags for invalidation. Without an <code>IDistributedCache</code> it still caches in-process.</li></ul>",
        hi: "<ul><li><b>Response caching</b> (<code>AddResponseCaching</code>/<code>UseResponseCaching</code>, <code>[ResponseCache]</code>): HTTP headers से चलता है; <code>[ResponseCache]</code> मुख्यतः clients और proxies के लिए <code>Cache-Control</code> set करता है। server-side middleware client के request headers (जैसे <code>Cache-Control: no-cache</code>) को मानता है, इसलिए आपका पूरा control नहीं रहता। <code>UseCors</code> इससे पहले रखो।</li><li><b>IMemoryCache</b>: in-process, सबसे तेज़, पर हर server instance की अपनी copy होती है और restart पर ख़ाली हो जाता है। <b>IDistributedCache</b>: shared (Redis, SQL Server), serialize आप करते हो, stampede protection नहीं।</li><li><b>HybridCache</b> (package <code>Microsoft.Extensions.Caching.Hybrid</code>, .NET 9 के साथ आया; .NET 8 पर भी चलता है): एक <code>GetOrCreateAsync(key, factory)</code> call। L1 in-memory और optional L2 distributed cache; एक key के concurrent callers एक ही factory call साझा करते हैं (<b>stampede protection</b>); invalidation के लिए tags। <code>IDistributedCache</code> न हो तो भी in-process cache करता है।</li></ul>",
        hg: "<ul><li><b>Response caching</b> (<code>AddResponseCaching</code>/<code>UseResponseCaching</code>, <code>[ResponseCache]</code>): HTTP headers se chalta hai; <code>[ResponseCache]</code> mukhyatah clients aur proxies ke liye <code>Cache-Control</code> set karta hai. Server-side middleware client ke request headers (jaise <code>Cache-Control: no-cache</code>) ko maanta hai, isliye aapka poora control nahi rehta. <code>UseCors</code> isse pehle rakho.</li><li><b>IMemoryCache</b>: in-process, sabse tez, par har server instance ki apni copy hoti hai aur restart par khaali ho jaata hai. <b>IDistributedCache</b>: shared (Redis, SQL Server), serialize aap karte ho, stampede protection nahi.</li><li><b>HybridCache</b> (package <code>Microsoft.Extensions.Caching.Hybrid</code>, .NET 9 ke saath aaya; .NET 8 par bhi chalta hai): ek <code>GetOrCreateAsync(key, factory)</code> call. L1 in-memory aur optional L2 distributed cache; ek key ke concurrent callers ek hi factory call saajha karte hain (<b>stampede protection</b>); invalidation ke liye tags. <code>IDistributedCache</code> na ho to bhi in-process cache karta hai.</li></ul>"
      },
      code: [
        {
          caption: {
            en: "HybridCache: one call, stampede-safe (compile-checked, not run)",
            hi: "HybridCache: एक call, stampede-safe (compile-checked, run नहीं)",
            hg: "HybridCache: ek call, stampede-safe (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          packages: [
            "Microsoft.Extensions.Caching.Hybrid"
          ],
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.Caching.Hybrid;\nusing Microsoft.Extensions.DependencyInjection;\n\nvar builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddHybridCache(options =>\n{\n    options.DefaultEntryOptions = new HybridCacheEntryOptions\n    {\n        Expiration = TimeSpan.FromMinutes(5),            // overall entry lifetime (L1 uses it too unless LocalCacheExpiration is set)\n        LocalCacheExpiration = TimeSpan.FromMinutes(1)   // in-memory (L1) lifetime override\n    };\n});\nbuilder.Services.AddSingleton<PriceService>();\n\nvar app = builder.Build();\napp.MapGet(\"/prices/{sku}\", (string sku, PriceService svc, CancellationToken ct) => svc.GetPriceAsync(sku, ct));\napp.Run();\n\npublic class PriceService(HybridCache cache)\n{\n    // If 100 requests ask for the same key at once, the factory runs once; the others wait for it.\n    public ValueTask<decimal> GetPriceAsync(string sku, CancellationToken ct) =>\n        cache.GetOrCreateAsync(\n            $\"price:{sku}\",\n            async token => { await Task.Delay(10, token); return 99.5m; },   // pretend database call\n            cancellationToken: ct);\n}"
        }
      ]
    },
    {
      id: "rate-limit-algorithms",
      depth: "detailed",
      title: {
        en: "Rate limit algorithms and traps",
        hi: "Rate limit के algorithms और जाल",
        hg: "Rate limit ke algorithms aur jaal"
      },
      body: {
        en: "<ul><li><b>Fixed window</b> = N requests per window (simple, but a burst can straddle the boundary). <b>Sliding window</b> = smoother, no boundary burst. <b>Token bucket</b> = allows a burst, then refills steadily. <b>Concurrency</b> = N requests running at the same time.</li></ul><ul><li><b>Traps</b>: limiter state lives in each server's memory, so N servers allow roughly N times the limit unless you add a shared gateway limit. Behind a proxy, <code>RemoteIpAddress</code> is the proxy unless forwarded headers are configured. Do not partition by raw user input: each key allocates a limiter.</li></ul>",
        hi: "<ul><li><b>Fixed window</b> = हर window में N requests (सादा, पर burst सीमा के आर-पार जा सकता है)। <b>Sliding window</b> = ज़्यादा smooth, सीमा पर burst नहीं। <b>Token bucket</b> = burst की छूट, फिर धीरे-धीरे refill। <b>Concurrency</b> = एक ही समय में चलती N requests।</li></ul><ul><li><b>Traps</b>: limiter की state हर server की memory में रहती है, इसलिए N servers लगभग N गुना limit देते हैं जब तक shared gateway limit न जोड़ो। Proxy के पीछे forwarded headers configure न हों तो <code>RemoteIpAddress</code> proxy का होता है। raw user input से partition मत करो: हर key एक limiter बनाती है।</li></ul>",
        hg: "<ul><li><b>Fixed window</b> = har window mein N requests (saada, par burst seema ke aar-paar ja sakta hai). <b>Sliding window</b> = zyaada smooth, seema par burst nahi. <b>Token bucket</b> = burst ki chhoot, phir dheere-dheere refill. <b>Concurrency</b> = ek hi samay mein chalti N requests.</li></ul><ul><li><b>Traps</b>: limiter ki state har server ki memory mein rehti hai, isliye N servers lagbhag N guna limit dete hain jab tak shared gateway limit na jodo. Proxy ke peeche forwarded headers configure na hon to <code>RemoteIpAddress</code> proxy ka hota hai. Raw user input se partition mat karo: har key ek limiter banati hai.</li></ul>"
      },
      code: [
        {
          caption: {
            en: "Sliding window, token bucket and concurrency limiters (compile-checked, not run)",
            hi: "Sliding window, token bucket और concurrency limiters (compile-checked, run नहीं)",
            hg: "Sliding window, token bucket aur concurrency limiters (compile-checked, run nahi)"
          },
          src: "using System.Threading.RateLimiting;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.RateLimiting;\nusing Microsoft.Extensions.DependencyInjection;\n\nvar builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddRateLimiter(o =>\n{\n    o.RejectionStatusCode = StatusCodes.Status429TooManyRequests;\n\n    // Sliding window: smoother than a fixed window, no burst at the boundary.\n    o.AddSlidingWindowLimiter(\"search\", x =>\n    {\n        x.PermitLimit = 30;\n        x.Window = TimeSpan.FromMinutes(1);\n        x.SegmentsPerWindow = 6;\n        x.QueueLimit = 0;\n    });\n\n    // Token bucket: allows a burst of 20, then refills 5 tokens every 10 seconds.\n    o.AddTokenBucketLimiter(\"export\", x =>\n    {\n        x.TokenLimit = 20;\n        x.TokensPerPeriod = 5;\n        x.ReplenishmentPeriod = TimeSpan.FromSeconds(10);\n        x.QueueLimit = 0;\n    });\n\n    // Concurrency: at most 4 requests running at the same moment.\n    o.AddConcurrencyLimiter(\"reports\", x =>\n    {\n        x.PermitLimit = 4;\n        x.QueueLimit = 0;\n    });\n});\n\nvar app = builder.Build();\napp.UseRateLimiter();\napp.MapGet(\"/tickets/search\", (string q) => Results.Ok(q)).RequireRateLimiting(\"search\");\napp.MapGet(\"/tickets/export\", () => Results.Ok(\"csv\")).RequireRateLimiting(\"export\");\napp.MapGet(\"/reports\", () => Results.Ok(\"report\")).RequireRateLimiting(\"reports\");\napp.Run();\n",
          check: "compile",
          frameworks: [
            "aspnetcore"
          ]
        }
      ]
    },
    {
      id: "openapi",
      depth: "detailed",
      title: {
        en: "OpenAPI: describe the API",
        hi: "OpenAPI: API का description",
        hg: "OpenAPI: API ka varnan"
      },
      body: {
        en: "<ul><li><b>OpenAPI built in (.NET 9+)</b>: package <code>Microsoft.AspNetCore.OpenApi</code>; <code>builder.Services.AddOpenApi()</code> and <code>app.MapOpenApi()</code> serve the document at <code>/openapi/v1.json</code>. On .NET 10 the default is OpenAPI 3.1. The framework generates the <b>document only</b>; a UI is a separate choice (Swagger UI, Scalar).</li><li><b>Swashbuckle</b>: the older library that generated the document and bundled Swagger UI. The Web API template stopped including it from .NET 9, but the package still works; teams choose it for features or existing customisation. Clients (Postman, code generators) consume the same JSON either way.</li><li><b>Describe your responses</b>: <code>[ProducesResponseType]</code> / <code>TypedResults</code> / <code>.Produces&lt;T&gt;()</code> so the document lists 201, 404, 409 and not only 200. Treat the OpenAPI file as the contract: review it in pull requests to catch accidental breaking changes.</li></ul>",
        hi: "<ul><li><b>OpenAPI built-in (.NET 9+)</b>: package <code>Microsoft.AspNetCore.OpenApi</code>; <code>builder.Services.AddOpenApi()</code> और <code>app.MapOpenApi()</code> document को <code>/openapi/v1.json</code> पर देते हैं। .NET 10 में default OpenAPI 3.1 है। Framework सिर्फ़ <b>document</b> बनाता है; UI अलग चुनाव है (Swagger UI, Scalar)।</li><li><b>Swashbuckle</b>: पुरानी library जो document बनाती थी और Swagger UI साथ लाती थी। Web API template ने .NET 9 से इसे शामिल करना बंद किया, पर package अब भी चलता है; teams features या मौजूदा customisation के लिए इसे चुनती हैं। Clients (Postman, code generators) दोनों तरह वही JSON पढ़ते हैं।</li><li><b>Responses describe करो</b>: <code>[ProducesResponseType]</code> / <code>TypedResults</code> / <code>.Produces&lt;T&gt;()</code> ताकि document में सिर्फ़ 200 नहीं, 201, 404, 409 भी दिखें। OpenAPI file को contract मानो: अनजाने breaking changes पकड़ने के लिए pull requests में उसे review करो।</li></ul>",
        hg: "<ul><li><b>OpenAPI built-in (.NET 9+)</b>: package <code>Microsoft.AspNetCore.OpenApi</code>; <code>builder.Services.AddOpenApi()</code> aur <code>app.MapOpenApi()</code> document ko <code>/openapi/v1.json</code> par dete hain. .NET 10 mein default OpenAPI 3.1 hai. Framework sirf <b>document</b> banata hai; UI alag chunaav hai (Swagger UI, Scalar).</li><li><b>Swashbuckle</b>: purani library jo document banati thi aur Swagger UI saath laati thi. Web API template ne .NET 9 se ise shaamil karna band kiya, par package ab bhi chalta hai; teams features ya maujooda customisation ke liye ise chunti hain. Clients (Postman, code generators) dono tarah wahi JSON padhte hain.</li><li><b>Responses describe karo</b>: <code>[ProducesResponseType]</code> / <code>TypedResults</code> / <code>.Produces&lt;T&gt;()</code> taaki document mein sirf 200 nahi, 201, 404, 409 bhi dikhein. OpenAPI file ko contract maano: anjaane breaking changes pakadne ke liye pull requests mein use review karo.</li></ul>"
      },
      code: [
        {
          caption: {
            en: "Built-in OpenAPI document generation (compile-checked, not run)",
            hi: "Built-in OpenAPI document generation (compile-checked, run नहीं)",
            hg: "Built-in OpenAPI document generation (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          packages: [
            "Microsoft.AspNetCore.OpenApi"
          ],
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nvar builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddOpenApi();            // Microsoft.AspNetCore.OpenApi (built in since .NET 9)\n\nvar app = builder.Build();\nif (app.Environment.IsDevelopment())\n{\n    app.MapOpenApi();                     // JSON document at /openapi/v1.json (a UI is a separate package)\n}\n\napp.MapGet(\"/orders/{id:int}\", (int id) =>\n        id == 1 ? TypedResults.Ok(new Order(1, \"tea\")) : (IResult)TypedResults.NotFound())\n    .WithName(\"GetOrder\")\n    .WithSummary(\"Get one order\")\n    .Produces<Order>(StatusCodes.Status200OK)\n    .Produces(StatusCodes.Status404NotFound);\n\napp.Run();\n\npublic record Order(int Id, string Item);"
        }
      ]
    },
    {
      id: "httpclient-factory",
      depth: "detailed",
      title: {
        en: "HttpClientFactory and resilience",
        hi: "HttpClientFactory और resilience",
        hg: "HttpClientFactory aur resilience"
      },
      body: {
        en: "<ul><li><b>HttpClient problems</b>: <code>new HttpClient()</code> per request leaves sockets in TIME_WAIT, so under load you can run out (socket exhaustion; Day 3 trap). A single static client reuses connections but keeps them for ever, so a DNS change may be ignored.</li><li><b>IHttpClientFactory</b>: <code>AddHttpClient</code> pools and recycles the underlying handlers (default handler lifetime two minutes). <b>Named</b> clients: <code>factory.CreateClient(\"billing\")</code>. <b>Typed</b> clients: <code>AddHttpClient&lt;BillingClient&gt;()</code>, the class receives an <code>HttpClient</code> in its constructor; this is the usual choice. Typed clients are transient, so do not hold one in a singleton for a long time.</li><li><b>Resilience</b>: package <code>Microsoft.Extensions.Http.Resilience</code>, <code>AddStandardResilienceHandler()</code> (.NET 8+). It stacks, outermost first: rate limiter, total timeout (30 s), retry (3 retries, up to 4 calls, exponential backoff with jitter), circuit breaker, per-attempt timeout (10 s). Retries cover 5xx, 408 and 429 and network errors. The defaults retry every HTTP method, so for POST either call <code>options.Retry.DisableForUnsafeHttpMethods()</code> or make the call idempotent with an idempotency key.</li></ul><p>Prefer typed clients from <code>IHttpClientFactory</code> in ASP.NET Core instead of creating clients by hand. Add the standard handler to any call to another service over a network, and do not stack several resilience handlers on one client.</p>",
        hi: "<ul><li><b>HttpClient की समस्याएँ</b>: हर request पर <code>new HttpClient()</code> sockets को TIME_WAIT में छोड़ता है, इसलिए load में sockets ख़त्म हो सकते हैं (socket exhaustion; Day 3 का trap)। एक static client connections reuse करता है पर उन्हें हमेशा रखता है, इसलिए DNS बदलाव अनदेखा हो सकता है।</li><li><b>IHttpClientFactory</b>: <code>AddHttpClient</code> अंदर के handlers को pool और recycle करता है (default handler lifetime दो मिनट)। <b>Named</b> clients: <code>factory.CreateClient(\"billing\")</code>। <b>Typed</b> clients: <code>AddHttpClient&lt;BillingClient&gt;()</code>, class को constructor में <code>HttpClient</code> मिलता है; यही आम चुनाव है। Typed clients transient होते हैं, इसलिए उन्हें singleton में लंबे समय तक मत रखो।</li><li><b>Resilience</b>: package <code>Microsoft.Extensions.Http.Resilience</code>, <code>AddStandardResilienceHandler()</code> (.NET 8+)। यह सबसे बाहर से क्रम में जमाता है: rate limiter, total timeout (30 s), retry (3 retries, यानी ज़्यादा से ज़्यादा 4 calls, jitter के साथ exponential backoff), circuit breaker, per-attempt timeout (10 s)। Retries 5xx, 408, 429 और network errors पर होते हैं। Defaults हर HTTP method को retry करते हैं, इसलिए POST के लिए या तो <code>options.Retry.DisableForUnsafeHttpMethods()</code> बुलाओ या idempotency key से call को idempotent बनाओ।</li></ul><p>ASP.NET Core में हाथ से clients बनाने की जगह <code>IHttpClientFactory</code> के typed clients लो। दूसरी service को network पर जाने वाली हर call पर standard handler लगाओ, और एक client पर कई resilience handlers मत जोड़ो।</p>",
        hg: "<ul><li><b>HttpClient ki samasyayein</b>: har request par <code>new HttpClient()</code> sockets ko TIME_WAIT mein chhodta hai, isliye load mein sockets khatam ho sakte hain (socket exhaustion; Day 3 ka trap). Ek static client connections reuse karta hai par unhe hamesha rakhta hai, isliye DNS badlaav andekha ho sakta hai.</li><li><b>IHttpClientFactory</b>: <code>AddHttpClient</code> andar ke handlers ko pool aur recycle karta hai (default handler lifetime do minute). <b>Named</b> clients: <code>factory.CreateClient(\"billing\")</code>. <b>Typed</b> clients: <code>AddHttpClient&lt;BillingClient&gt;()</code>, class ko constructor mein <code>HttpClient</code> milta hai; yahi aam chunaav hai. Typed clients transient hote hain, isliye unhe singleton mein lambe samay tak mat rakho.</li><li><b>Resilience</b>: package <code>Microsoft.Extensions.Http.Resilience</code>, <code>AddStandardResilienceHandler()</code> (.NET 8+). Yeh sabse baahar se kram mein jamata hai: rate limiter, total timeout (30 s), retry (3 retries, yaani zyaada se zyaada 4 calls, jitter ke saath exponential backoff), circuit breaker, per-attempt timeout (10 s). Retries 5xx, 408, 429 aur network errors par hote hain. Defaults har HTTP method ko retry karte hain, isliye POST ke liye ya to <code>options.Retry.DisableForUnsafeHttpMethods()</code> bulao ya idempotency key se call ko idempotent banao.</li></ul><p>ASP.NET Core mein haath se clients banane ki jagah <code>IHttpClientFactory</code> ke typed clients lo. Doosri service ko network par jaane wali har call par standard handler lagao, aur ek client par kai resilience handlers mat jodo.</p>"
      },
      code: [
        {
          caption: {
            en: "Typed HttpClient + standard resilience handler (compile-checked, not run)",
            hi: "Typed HttpClient + standard resilience handler (compile-checked, run नहीं)",
            hg: "Typed HttpClient + standard resilience handler (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          packages: [
            "Microsoft.Extensions.Http.Resilience"
          ],
          src: "using System.Net.Http.Json;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Http.Resilience;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services\n    .AddHttpClient<BillingClient>(client => client.BaseAddress = new Uri(\"https://billing.internal/\"))\n    .AddStandardResilienceHandler(options =>\n    {\n        // Defaults: rate limiter, 30 s total timeout, 3 retries with backoff + jitter,\n        // circuit breaker, 10 s per attempt. They retry every method, so protect POST:\n        options.Retry.DisableForUnsafeHttpMethods();\n    });\n\nvar app = builder.Build();\napp.MapGet(\"/invoices/{id:int}\", (int id, BillingClient billing, CancellationToken ct) => billing.GetInvoiceAsync(id, ct));\napp.Run();\n\npublic record Invoice(int Id, decimal Total);\n\n// Typed client: receives an HttpClient made by the factory (pooled, recycled handlers).\npublic class BillingClient(HttpClient http)\n{\n    public Task<Invoice?> GetInvoiceAsync(int id, CancellationToken ct) =>\n        http.GetFromJsonAsync<Invoice>($\"invoices/{id}\", ct);\n}"
        }
      ]
    },
    {
      id: "whats-new",
      depth: "detailed",
      title: {
        en: "What is new in recent .NET versions",
        hi: "हाल के .NET versions में नया क्या है",
        hg: "Haal ke .NET versions mein naya kya hai"
      },
      body: {
        en: "<p>Many Web API blog posts predate these changes. What each version <b>added</b> (library features, by .NET version):</p>\n<ul>\n<li><b>.NET 7</b> — built-in <b>rate limiting</b> middleware (<code>Microsoft.AspNetCore.RateLimiting</code>) and <b>output caching</b> (<code>AddOutputCache</code>, tag eviction).</li>\n<li><b>.NET 8</b> — <code>IExceptionHandler</code> with <code>AddExceptionHandler</code> (invoked by <code>UseExceptionHandler</code>); the resilience library <code>Microsoft.Extensions.Http.Resilience</code> with <code>AddStandardResilienceHandler</code> (built on Polly).</li>\n<li><b>.NET 9</b> — built-in OpenAPI document generation (<code>Microsoft.AspNetCore.OpenApi</code>: <code>AddOpenApi</code>, <code>MapOpenApi</code>); the Web API template no longer includes Swashbuckle; <b>HybridCache</b> (<code>Microsoft.Extensions.Caching.Hybrid</code>, introduced with .NET 9; stable package since March 2025, also runs on .NET 8).</li>\n<li><b>.NET 10 (LTS)</b> — OpenAPI documents are generated as <b>OpenAPI 3.1</b> by default; <b>built-in validation for Minimal APIs</b>: register <code>builder.Services.AddValidation()</code> and DataAnnotations on parameters and record types give a 400 (call <code>.DisableValidation()</code> on an endpoint to opt out); handled exceptions (an <code>IExceptionHandler</code> returning <code>true</code>) no longer emit the default exception log and metrics unless you set <code>SuppressDiagnosticsCallback</code>.</li>\n</ul>\n<p>The checker for this tutorial runs on .NET 9, so the .NET 10-only items above are described, not executed.</p>\n<p><b>Next (as of Oct 2026):</b> .NET 11 (STS) is due in November 2026; .NET 10 stays the LTS.</p>",
        hi: "<p>बहुत से Web API blog posts इन बदलावों से पहले के हैं। हर version ने क्या <b>जोड़ा</b> (library features, .NET version के हिसाब से):</p>\n<ul>\n<li><b>.NET 7</b> — built-in <b>rate limiting</b> middleware (<code>Microsoft.AspNetCore.RateLimiting</code>) और <b>output caching</b> (<code>AddOutputCache</code>, tag eviction)।</li>\n<li><b>.NET 8</b> — <code>AddExceptionHandler</code> के साथ <code>IExceptionHandler</code> (<code>UseExceptionHandler</code> द्वारा बुलाया जाता है); resilience library <code>Microsoft.Extensions.Http.Resilience</code> और <code>AddStandardResilienceHandler</code> (Polly पर बना)।</li>\n<li><b>.NET 9</b> — built-in OpenAPI document generation (<code>Microsoft.AspNetCore.OpenApi</code>: <code>AddOpenApi</code>, <code>MapOpenApi</code>); Web API template में अब Swashbuckle नहीं आता; <b>HybridCache</b> (<code>Microsoft.Extensions.Caching.Hybrid</code>, .NET 9 के साथ आया; stable package मार्च 2025 से, .NET 8 पर भी चलता है)।</li>\n<li><b>.NET 10 (LTS)</b> — OpenAPI documents default में <b>OpenAPI 3.1</b> बनते हैं; <b>Minimal APIs के लिए built-in validation</b>: <code>builder.Services.AddValidation()</code> register करो और parameters व record types पर DataAnnotations से 400 मिलता है (बाहर निकलने के लिए endpoint पर <code>.DisableValidation()</code>); handled exceptions (<code>true</code> लौटाता <code>IExceptionHandler</code>) अब default exception log और metrics नहीं देते जब तक <code>SuppressDiagnosticsCallback</code> न बदलो।</li>\n</ul>\n<p>इस tutorial का checker .NET 9 पर चलता है, इसलिए ऊपर के सिर्फ़-.NET 10 items बताए गए हैं, चलाए नहीं गए।</p>\n<p><b>आगे (Oct 2026 तक की जानकारी):</b> .NET 11 (STS) November 2026 में आने वाला है; .NET 10 ही LTS रहेगा।</p>",
        hg: "<p>Bahut se Web API blog posts in badlaavon se pehle ke hain. Har version ne kya <b>joda</b> (library features, .NET version ke hisaab se):</p>\n<ul>\n<li><b>.NET 7</b> — built-in <b>rate limiting</b> middleware (<code>Microsoft.AspNetCore.RateLimiting</code>) aur <b>output caching</b> (<code>AddOutputCache</code>, tag eviction).</li>\n<li><b>.NET 8</b> — <code>AddExceptionHandler</code> ke saath <code>IExceptionHandler</code> (<code>UseExceptionHandler</code> dwara bulaya jaata hai); resilience library <code>Microsoft.Extensions.Http.Resilience</code> aur <code>AddStandardResilienceHandler</code> (Polly par bana).</li>\n<li><b>.NET 9</b> — built-in OpenAPI document generation (<code>Microsoft.AspNetCore.OpenApi</code>: <code>AddOpenApi</code>, <code>MapOpenApi</code>); Web API template mein ab Swashbuckle nahi aata; <b>HybridCache</b> (<code>Microsoft.Extensions.Caching.Hybrid</code>, .NET 9 ke saath aaya; stable package March 2025 se, .NET 8 par bhi chalta hai).</li>\n<li><b>.NET 10 (LTS)</b> — OpenAPI documents default mein <b>OpenAPI 3.1</b> bante hain; <b>Minimal APIs ke liye built-in validation</b>: <code>builder.Services.AddValidation()</code> register karo aur parameters va record types par DataAnnotations se 400 milta hai (baahar nikalne ke liye endpoint par <code>.DisableValidation()</code>); handled exceptions (<code>true</code> lautata <code>IExceptionHandler</code>) ab default exception log aur metrics nahi dete jab tak <code>SuppressDiagnosticsCallback</code> na badlo.</li>\n</ul>\n<p>Is tutorial ka checker .NET 9 par chalta hai, isliye upar ke sirf-.NET 10 items bataye gaye hain, chalaye nahi gaye.</p>\n<p><b>Aage (Oct 2026 tak ki jaankari):</b> .NET 11 (STS) November 2026 mein aane wala hai; .NET 10 hi LTS rahega.</p>"
      }
    }
  ],
  qa: [
    {
      id: "rest-principles",
      depth: "short",
      q: "What makes an API RESTful?",
      answer: "Resources identified by URLs, handled with standard HTTP verbs, stateless requests, and responses with proper status codes. Full REST adds hypermedia links (HATEOAS), which few APIs implement.",
      meaning: {
        hi: "Resources URLs से पहचाने जाते हैं, standard HTTP verbs से चलते हैं, requests stateless होती हैं, और सही status codes मिलते हैं। पूरा REST hypermedia links (HATEOAS) भी जोड़ता है, जो कम APIs करती हैं।",
        hg: "Resources URLs se pehchane jaate hain, standard HTTP verbs se chalte hain, requests stateless hoti hain, aur sahi status codes milte hain. Poora REST hypermedia links (HATEOAS) bhi jodta hai, jo kam APIs karti hain."
      },
      explain: {
        en: "<ul>\n<li>Resource = noun in the URL (<code>/orders/42</code>); the verb is the HTTP method, not part of the path.</li>\n<li><b>Stateless</b>: the server stores no client session between calls, so any instance can serve any request (easy scale-out).</li>\n<li>Uniform interface: same verbs and status codes everywhere, so clients and tools behave predictably.</li>\n<li>HATEOAS: links to next actions inside responses; most \"REST\" APIs are really HTTP + JSON APIs, and that is acceptable if the team is honest about it.</li>\n<li>Follow-up: \"Is REST a standard?\" — it is an architectural style (Roy Fielding), not a protocol; HTTP is the protocol.</li>\n<li>TL angle: agree conventions (naming, plural nouns, error format, paging) once in an API guideline and enforce them in review.</li>\n</ul>",
        hi: "<ul>\n<li>Resource = URL में संज्ञा (<code>/orders/42</code>); verb HTTP method है, path का हिस्सा नहीं।</li>\n<li><b>Stateless</b>: server calls के बीच client का session नहीं रखता, इसलिए कोई भी instance कोई भी request संभाल सकता है (scale-out आसान)।</li>\n<li>Uniform interface: हर जगह वही verbs और status codes, इसलिए clients और tools का व्यवहार अनुमान योग्य रहता है।</li>\n<li>HATEOAS: responses के अंदर अगले actions के links; ज़्यादातर \"REST\" APIs असल में HTTP + JSON APIs हैं, और team ईमानदार हो तो यह ठीक है।</li>\n<li>Follow-up: \"क्या REST एक standard है?\" — यह architectural style है (Roy Fielding), protocol नहीं; protocol HTTP है।</li>\n<li>TL angle: conventions (naming, plural nouns, error format, paging) एक बार API guideline में तय करो और review में लागू करो।</li>\n</ul>",
        hg: "<ul>\n<li>Resource = URL mein noun (<code>/orders/42</code>); verb HTTP method hai, path ka hissa nahi.</li>\n<li><b>Stateless</b>: server calls ke beech client ka session nahi rakhta, isliye koi bhi instance koi bhi request sambhal sakta hai (scale-out aasaan).</li>\n<li>Uniform interface: har jagah wahi verbs aur status codes, isliye clients aur tools ka vyavhaar anumaan yogya rehta hai.</li>\n<li>HATEOAS: responses ke andar agle actions ke links; zyaadatar \"REST\" APIs asal mein HTTP + JSON APIs hain, aur team imaandaar ho to yeh theek hai.</li>\n<li>Follow-up: \"Kya REST ek standard hai?\" — yeh architectural style hai (Roy Fielding), protocol nahi; protocol HTTP hai.</li>\n<li>TL angle: conventions (naming, plural nouns, error format, paging) ek baar API guideline mein tay karo aur review mein laagu karo.</li>\n</ul>"
      }
    },
    {
      id: "verbs-safe-idempotent",
      depth: "short",
      q: "Which HTTP methods are safe and idempotent, and how do PUT, PATCH and POST differ?",
      answer: "GET, HEAD and OPTIONS are safe; those plus PUT and DELETE are idempotent. POST creates or triggers and is not idempotent; PUT replaces the whole resource; PATCH changes part of it.",
      meaning: {
        hi: "GET, HEAD, OPTIONS safe हैं; ये और PUT, DELETE idempotent हैं। POST बनाता या trigger करता है और idempotent नहीं है; PUT पूरा resource बदलता है; PATCH उसका हिस्सा बदलता है।",
        hg: "GET, HEAD, OPTIONS safe hain; ye aur PUT, DELETE idempotent hain. POST banata ya trigger karta hai aur idempotent nahi hai; PUT poora resource badalta hai; PATCH uska hissa badalta hai."
      },
      explain: {
        en: "<ul>\n<li><b>Safe</b> = no state change expected (so caches and crawlers may call it). <b>Idempotent</b> = repeating the call leaves the same server state; the response may differ (DELETE: 204, then 404).</li>\n<li><b>PUT</b> with the same body three times = same resource; <b>POST /orders</b> three times = three orders (Puzzle: \"put-post-idempotency\").</li>\n<li><b>PATCH</b> is not guaranteed to be idempotent (for example \"add 1 to the quantity\"), though a specific patch (\"set status = shipped\") can behave idempotently.</li>\n<li>Why it matters: clients, proxies and libraries (like the resilience handler) decide whether a retry is safe from the method.</li>\n<li>Follow-up: \"Can GET have side effects?\" — it should not; logging and counters are fine, state changes are not.</li>\n<li>Follow-up: \"PUT creates or updates?\" — it can do both when the client chooses the id (upsert); return 201 when it creates.</li>\n</ul>",
        hi: "<ul>\n<li><b>Safe</b> = state बदलने की अपेक्षा नहीं (इसलिए caches और crawlers इसे बुला सकते हैं)। <b>Idempotent</b> = call दोहराने पर server की state वही रहती है; response अलग हो सकता है (DELETE: 204, फिर 404)।</li>\n<li>एक ही body के साथ <b>PUT</b> तीन बार = वही resource; <b>POST /orders</b> तीन बार = तीन orders (Puzzle: \"put-post-idempotency\")।</li>\n<li><b>PATCH</b> के idempotent होने की गारंटी नहीं है (जैसे \"quantity में 1 जोड़ो\"), हालाँकि कोई ख़ास patch (\"status = shipped रखो\") idempotent की तरह व्यवहार कर सकता है।</li>\n<li>क्यों ज़रूरी: clients, proxies और libraries (जैसे resilience handler) method देखकर तय करते हैं कि retry सुरक्षित है या नहीं।</li>\n<li>Follow-up: \"क्या GET के side effects हो सकते हैं?\" — नहीं होने चाहिए; logging और counters ठीक हैं, state बदलना नहीं।</li>\n<li>Follow-up: \"PUT बनाता है या update करता है?\" — client जब id चुनता है तो दोनों कर सकता है (upsert); बनाए तो 201 लौटाओ।</li>\n</ul>",
        hg: "<ul>\n<li><b>Safe</b> = state badalne ki apeksha nahi (isliye caches aur crawlers ise bula sakte hain). <b>Idempotent</b> = call dohrane par server ki state wahi rehti hai; response alag ho sakta hai (DELETE: 204, phir 404).</li>\n<li>Ek hi body ke saath <b>PUT</b> teen baar = wahi resource; <b>POST /orders</b> teen baar = teen orders (Puzzle: \"put-post-idempotency\").</li>\n<li><b>PATCH</b> ke idempotent hone ki guarantee nahi hai (jaise \"quantity mein 1 jodo\"), halanki koi khaas patch (\"status = shipped rakho\") idempotent ki tarah vyavhaar kar sakta hai.</li>\n<li>Kyun zaroori: clients, proxies aur libraries (jaise resilience handler) method dekhkar tay karte hain ki retry surakshit hai ya nahi.</li>\n<li>Follow-up: \"Kya GET ke side effects ho sakte hain?\" — nahi hone chahiye; logging aur counters theek hain, state badalna nahi.</li>\n<li>Follow-up: \"PUT banata hai ya update karta hai?\" — client jab id chunta hai to dono kar sakta hai (upsert); banaye to 201 lautao.</li>\n</ul>"
      }
    },
    {
      id: "status-codes-when",
      depth: "short",
      q: "Which status codes would you return from a CRUD API, and when?",
      answer: "200 OK, 201 Created with Location, 204 No Content, 400 invalid input, 401 not authenticated, 403 not allowed, 404 missing, 409 conflict, 429 throttled, 500 unexpected. Avoid 200 with an error body.",
      meaning: {
        hi: "200 OK, Location के साथ 201 Created, 204 No Content, ग़लत input पर 400, authenticated नहीं तो 401, इजाज़त नहीं तो 403, नहीं मिला तो 404, टकराव पर 409, throttle पर 429, अनपेक्षित पर 500। error body के साथ 200 से बचो।",
        hg: "200 OK, Location ke saath 201 Created, 204 No Content, galat input par 400, authenticated nahi to 401, ijazat nahi to 403, nahi mila to 404, takraav par 409, throttle par 429, anapekshit par 500. Error body ke saath 200 se bacho."
      },
      explain: {
        en: "<ul>\n<li><b>201 + Location</b> after POST creates; <b>202 Accepted</b> if work is queued and the result comes later; <b>204</b> for a successful PUT/DELETE with nothing to return.</li>\n<li><b>400 vs 422</b>: 400 = malformed or invalid request (ASP.NET Core's default for model errors); 422 = syntactically fine but semantically rejected. Either is fine if the team picks one and documents it.</li>\n<li><b>401 vs 403</b> (Day 12): 401 = we do not know who you are; 403 = we know, you may not. Some APIs return 404 instead of 403 to hide that a resource exists.</li>\n<li><b>409</b> for duplicates and state conflicts; <b>412</b> when <code>If-Match</code> fails; <b>415</b> for an unsupported <code>Content-Type</code>; <b>429</b> when rate limited (with <code>Retry-After</code> if possible).</li>\n<li><b>500 vs 503</b>: 500 = our bug; 503 = temporarily unavailable (maintenance, overload), clients may retry later.</li>\n<li>Follow-up: \"Why not always return 200 with a success flag?\" — clients, caches, monitoring and retry logic all rely on real status codes.</li>\n</ul>",
        hi: "<ul>\n<li>POST से create होने पर <b>201 + Location</b>; काम queue में गया और नतीजा बाद में आएगा तो <b>202 Accepted</b>; लौटाने को कुछ न हो तो सफल PUT/DELETE पर <b>204</b>।</li>\n<li><b>400 vs 422</b>: 400 = ग़लत बनावट या invalid request (model errors के लिए ASP.NET Core का default); 422 = बनावट सही पर अर्थ में अस्वीकार। team एक चुनकर document कर दे तो दोनों ठीक हैं।</li>\n<li><b>401 vs 403</b> (Day 12): 401 = हम नहीं जानते आप कौन हैं; 403 = जानते हैं, पर इजाज़त नहीं। कुछ APIs resource का होना छुपाने के लिए 403 की जगह 404 देती हैं।</li>\n<li>duplicates और state conflicts पर <b>409</b>; <code>If-Match</code> fail होने पर <b>412</b>; unsupported <code>Content-Type</code> पर <b>415</b>; rate limit होने पर <b>429</b> (हो सके तो <code>Retry-After</code> के साथ)।</li>\n<li><b>500 vs 503</b>: 500 = हमारा bug; 503 = कुछ देर के लिए उपलब्ध नहीं (maintenance, overload), clients बाद में retry कर सकते हैं।</li>\n<li>Follow-up: \"हमेशा success flag के साथ 200 क्यों नहीं?\" — clients, caches, monitoring और retry logic सब असली status codes पर निर्भर हैं।</li>\n</ul>",
        hg: "<ul>\n<li>POST se create hone par <b>201 + Location</b>; kaam queue mein gaya aur nateeja baad mein aayega to <b>202 Accepted</b>; lautane ko kuch na ho to safal PUT/DELETE par <b>204</b>.</li>\n<li><b>400 vs 422</b>: 400 = galat banaavat ya invalid request (model errors ke liye ASP.NET Core ka default); 422 = banaavat sahi par arth mein asweekaar. Team ek chunkar document kar de to dono theek hain.</li>\n<li><b>401 vs 403</b> (Day 12): 401 = hum nahi jaante aap kaun hain; 403 = jaante hain, par ijazat nahi. Kuch APIs resource ka hona chhupane ke liye 403 ki jagah 404 deti hain.</li>\n<li>Duplicates aur state conflicts par <b>409</b>; <code>If-Match</code> fail hone par <b>412</b>; unsupported <code>Content-Type</code> par <b>415</b>; rate limit hone par <b>429</b> (ho sake to <code>Retry-After</code> ke saath).</li>\n<li><b>500 vs 503</b>: 500 = hamara bug; 503 = kuch der ke liye available nahi (maintenance, overload), clients baad mein retry kar sakte hain.</li>\n<li>Follow-up: \"Hamesha success flag ke saath 200 kyun nahi?\" — clients, caches, monitoring aur retry logic sab asli status codes par nirbhar hain.</li>\n</ul>"
      }
    },
    {
      id: "global-errors",
      depth: "short",
      q: "How do you handle errors globally in a Web API and return one consistent format?",
      answer: "Call AddProblemDetails, register IExceptionHandler classes with AddExceptionHandler, and put UseExceptionHandler first. UseExceptionHandler invokes the handlers, which write RFC 9457 ProblemDetails; details go to logs.",
      meaning: {
        hi: "AddProblemDetails बुलाओ, AddExceptionHandler से IExceptionHandler classes register करो, और UseExceptionHandler सबसे पहले रखो। UseExceptionHandler handlers को बुलाता है, जो RFC 9457 ProblemDetails लिखते हैं; details logs में जाती हैं।",
        hg: "AddProblemDetails bulao, AddExceptionHandler se IExceptionHandler classes register karo, aur UseExceptionHandler sabse pehle rakho. UseExceptionHandler handlers ko bulata hai, jo RFC 9457 ProblemDetails likhte hain; details logs mein jaati hain."
      },
      explain: {
        en: "<ul>\n<li><code>IExceptionHandler</code> (.NET 8+) is <b>invoked by</b> the exception-handler middleware (<code>UseExceptionHandler</code>); registering it alone does nothing (Day 12 said the same).</li>\n<li>Handlers run in registration order; return <code>true</code> after writing the full response, <code>false</code> to let the next handler or the fallback run.</li>\n<li>ProblemDetails fields: <code>type</code>, <code>title</code>, <code>status</code>, <code>detail</code>, <code>instance</code> plus extensions such as a trace id. Media type <code>application/problem+json</code>. RFC 9457 replaced RFC 7807 with the same core shape.</li>\n<li>Map known domain exceptions to 404/409; return a generic 500 for the rest and log the exception once with the trace id.</li>\n<li>Follow-up: \"Exception filter or middleware?\" — middleware also catches errors from other middleware and result execution; filters only see MVC actions (Day 12).</li>\n<li>Follow-up: \"Should you throw for 'not found'?\" — prefer returning a result for expected outcomes; exceptions are costlier and noisier in logs.</li>\n</ul>",
        hi: "<ul>\n<li><code>IExceptionHandler</code> (.NET 8+) को exception-handler middleware (<code>UseExceptionHandler</code>) <b>बुलाता है</b>; सिर्फ़ register करने से कुछ नहीं होता (Day 12 ने भी यही कहा)।</li>\n<li>Handlers registration order में चलते हैं; पूरा response लिखने के बाद <code>true</code>, अगला handler या fallback चलाने के लिए <code>false</code>।</li>\n<li>ProblemDetails fields: <code>type</code>, <code>title</code>, <code>status</code>, <code>detail</code>, <code>instance</code> और trace id जैसे extensions। Media type <code>application/problem+json</code>। RFC 9457 ने उसी मूल shape के साथ RFC 7807 की जगह ली।</li>\n<li>जाने-पहचाने domain exceptions को 404/409 से map करो; बाकी के लिए general 500 लौटाओ और exception को trace id के साथ एक बार log करो।</li>\n<li>Follow-up: \"Exception filter या middleware?\" — middleware दूसरे middleware और result execution के errors भी पकड़ता है; filters सिर्फ़ MVC actions देखते हैं (Day 12)।</li>\n<li>Follow-up: \"'not found' के लिए throw करना चाहिए?\" — अपेक्षित नतीजों के लिए result लौटाना बेहतर; exceptions महँगे हैं और logs में शोर करते हैं।</li>\n</ul>",
        hg: "<ul>\n<li><code>IExceptionHandler</code> (.NET 8+) ko exception-handler middleware (<code>UseExceptionHandler</code>) <b>bulata hai</b>; sirf register karne se kuch nahi hota (Day 12 ne bhi yahi kaha).</li>\n<li>Handlers registration order mein chalte hain; poora response likhne ke baad <code>true</code>, agla handler ya fallback chalane ke liye <code>false</code>.</li>\n<li>ProblemDetails fields: <code>type</code>, <code>title</code>, <code>status</code>, <code>detail</code>, <code>instance</code> aur trace id jaise extensions. Media type <code>application/problem+json</code>. RFC 9457 ne usi mool shape ke saath RFC 7807 ki jagah li.</li>\n<li>Jaane-pehchaane domain exceptions ko 404/409 se map karo; baaki ke liye general 500 lautao aur exception ko trace id ke saath ek baar log karo.</li>\n<li>Follow-up: \"Exception filter ya middleware?\" — middleware doosre middleware aur result execution ke errors bhi pakadta hai; filters sirf MVC actions dekhte hain (Day 12).</li>\n<li>Follow-up: \"'not found' ke liye throw karna chahiye?\" — apekshit nateejon ke liye result lautana behtar; exceptions mehnge hain aur logs mein shor karte hain.</li>\n</ul>"
      }
    },
    {
      id: "validation-apicontroller",
      depth: "short",
      q: "How does model validation work in a Web API?",
      answer: "Put DataAnnotations on the request model. With [ApiController], an invalid model automatically returns 400 with ValidationProblemDetails before your action runs; use FluentValidation if rules get complex.",
      meaning: {
        hi: "Request model पर DataAnnotations लगाओ। [ApiController] के साथ invalid model पर आपके action से पहले अपने-आप ValidationProblemDetails के साथ 400 मिलता है; rules जटिल हों तो FluentValidation use करो।",
        hg: "Request model par DataAnnotations lagao. [ApiController] ke saath invalid model par aapke action se pehle apne-aap ValidationProblemDetails ke saath 400 milta hai; rules jatil hon to FluentValidation use karo."
      },
      explain: {
        en: "<ul>\n<li>The automatic 400 comes from an <code>[ApiController]</code> convention (a filter), so it needs no <code>ModelState.IsValid</code> check. The body is a <code>ValidationProblemDetails</code> with an <code>errors</code> dictionary keyed by field name (Puzzle: \"apicontroller-auto-400\").</li>\n<li>Binding errors (wrong type in JSON, missing body) also end up as 400.</li>\n<li>DataAnnotations cover shape: <code>[Required]</code>, <code>[Range]</code>, <code>[StringLength]</code>, <code>[EmailAddress]</code>. Database-dependent rules (\"email already exists\") belong in the service, returning 409 or 422.</li>\n<li><b>FluentValidation</b> is an optional third-party library: rules live in a validator class, easier to test and reuse; you call it yourself or through an integration package. It is not required.</li>\n<li><b>Minimal APIs</b>: no automatic DataAnnotations validation before .NET 10; on .NET 10 call <code>AddValidation()</code>. On earlier versions validate manually or use a library.</li>\n<li>Follow-up: \"Never trust the client\" — validate on the server even if the UI validates too; avoid binding straight to your entity (over-posting): use request DTOs.</li>\n</ul>",
        hi: "<ul>\n<li>Automatic 400 एक <code>[ApiController]</code> convention (एक filter) से आता है, इसलिए <code>ModelState.IsValid</code> check नहीं चाहिए। Body <code>ValidationProblemDetails</code> है जिसमें field name के हिसाब से <code>errors</code> dictionary है (Puzzle: \"apicontroller-auto-400\")।</li>\n<li>Binding errors (JSON में ग़लत type, body ग़ायब) भी 400 बनते हैं।</li>\n<li>DataAnnotations shape संभालते हैं: <code>[Required]</code>, <code>[Range]</code>, <code>[StringLength]</code>, <code>[EmailAddress]</code>। database पर निर्भर rules (\"email पहले से है\") service में होने चाहिए, 409 या 422 लौटाते हुए।</li>\n<li><b>FluentValidation</b> optional third-party library है: rules एक validator class में रहते हैं, test और reuse आसान; आप ख़ुद या integration package से बुलाते हो। यह ज़रूरी नहीं है।</li>\n<li><b>Minimal APIs</b>: .NET 10 से पहले DataAnnotations की automatic validation नहीं; .NET 10 पर <code>AddValidation()</code> बुलाओ। पुराने versions पर हाथ से validate करो या library use करो।</li>\n<li>Follow-up: \"client पर भरोसा मत करो\" — UI validate करे तब भी server पर validate करो; सीधे entity पर bind मत करो (over-posting): request DTOs use करो।</li>\n</ul>",
        hg: "<ul>\n<li>Automatic 400 ek <code>[ApiController]</code> convention (ek filter) se aata hai, isliye <code>ModelState.IsValid</code> check nahi chahiye. Body <code>ValidationProblemDetails</code> hai jismein field name ke hisaab se <code>errors</code> dictionary hai (Puzzle: \"apicontroller-auto-400\").</li>\n<li>Binding errors (JSON mein galat type, body gaayab) bhi 400 bante hain.</li>\n<li>DataAnnotations shape sambhalte hain: <code>[Required]</code>, <code>[Range]</code>, <code>[StringLength]</code>, <code>[EmailAddress]</code>. Database par nirbhar rules (\"email pehle se hai\") service mein hone chahiye, 409 ya 422 lautate hue.</li>\n<li><b>FluentValidation</b> optional third-party library hai: rules ek validator class mein rehte hain, test aur reuse aasaan; aap khud ya integration package se bulate ho. Yeh zaroori nahi hai.</li>\n<li><b>Minimal APIs</b>: .NET 10 se pehle DataAnnotations ki automatic validation nahi; .NET 10 par <code>AddValidation()</code> bulao. Purane versions par haath se validate karo ya library use karo.</li>\n<li>Follow-up: \"client par bharosa mat karo\" — UI validate kare tab bhi server par validate karo; seedhe entity par bind mat karo (over-posting): request DTOs use karo.</li>\n</ul>"
      }
    },
    {
      id: "jwt-basics",
      depth: "short",
      q: "How does JWT authentication work, and is a JWT encrypted?",
      answer: "A JWT is header.payload.signature; the API verifies signature, issuer, audience and expiry without a session lookup. It is signed, not encrypted, so anyone holding it can read the payload.",
      meaning: {
        hi: "JWT का रूप header.payload.signature है। API बिना session lookup के signature, issuer, audience और expiry जाँचती है। यह signed है, encrypted नहीं, इसलिए जिसके पास है वह payload पढ़ सकता है।",
        hg: "JWT ka roop header.payload.signature hai. API bina session lookup ke signature, issuer, audience aur expiry jaanchti hai. Yeh signed hai, encrypted nahi, isliye jiske paas hai woh payload padh sakta hai."
      },
      explain: {
        en: "<ul>\n<li>Three base64url parts: header (algorithm), payload (claims such as <code>sub</code>, <code>iss</code>, <code>aud</code>, <code>exp</code>, scopes), signature (proof nobody changed it).</li>\n<li>Flow: user signs in at the identity provider, gets an access token, the client sends <code>Authorization: Bearer ...</code>; <code>AddAuthentication().AddJwtBearer()</code> validates it and builds <code>HttpContext.User</code> from the claims.</li>\n<li><b>Signed, not encrypted</b> (a standard JWT is a JWS): do not store passwords or sensitive personal data in the payload; send tokens only over HTTPS.</li>\n<li><b>Clock skew</b>: the JWT bearer handler tolerates a default <code>ClockSkew</code> of 5 minutes, so a token that just expired can still be accepted briefly; lower <code>TokenValidationParameters.ClockSkew</code> if you need stricter expiry.</li>\n<li>Stateless = scalable, but a token stays valid until <code>exp</code>: keep lifetimes short and use refresh tokens (next questions).</li>\n<li>Follow-up: \"Where does the client store it?\" — SPAs have trade-offs: memory (lost on refresh), or HttpOnly cookie (CSRF considerations); avoid long-lived tokens in localStorage if XSS is a concern.</li>\n<li>Follow-up: \"HMAC or RSA signing?\" — HMAC shares one secret with the API; RSA/ECDSA lets the API verify with a public key only, which is safer when many services validate tokens.</li>\n</ul>",
        hi: "<ul>\n<li>तीन base64url हिस्से: header (algorithm), payload (claims जैसे <code>sub</code>, <code>iss</code>, <code>aud</code>, <code>exp</code>, scopes), signature (सबूत कि किसी ने बदला नहीं)।</li>\n<li>Flow: user identity provider पर sign-in करता है, access token पाता है, client <code>Authorization: Bearer ...</code> भेजता है; <code>AddAuthentication().AddJwtBearer()</code> उसे validate करके claims से <code>HttpContext.User</code> बनाता है।</li>\n<li><b>Signed, encrypted नहीं</b> (standard JWT एक JWS है): payload में passwords या संवेदनशील personal data मत रखो; tokens सिर्फ़ HTTPS पर भेजो।</li>\n<li><b>Clock skew</b>: JWT bearer handler default में 5 मिनट का <code>ClockSkew</code> सह लेता है, इसलिए अभी-अभी expire हुआ token थोड़ी देर और accept हो सकता है; सख़्त expiry चाहिए तो <code>TokenValidationParameters.ClockSkew</code> घटाओ।</li>\n<li>Stateless = scalable, पर token <code>exp</code> तक valid रहता है: lifetime छोटी रखो और refresh tokens use करो (अगले सवाल)।</li>\n<li>Follow-up: \"client इसे कहाँ रखे?\" — SPAs में trade-offs हैं: memory (refresh पर खो जाता है), या HttpOnly cookie (CSRF का ध्यान); XSS की चिंता हो तो localStorage में लंबी उम्र के tokens से बचो।</li>\n<li>Follow-up: \"HMAC या RSA signing?\" — HMAC में API के साथ एक secret साझा होता है; RSA/ECDSA में API सिर्फ़ public key से verify करती है, जो कई services के tokens validate करने पर ज़्यादा सुरक्षित है।</li>\n</ul>",
        hg: "<ul>\n<li>Teen base64url hisse: header (algorithm), payload (claims jaise <code>sub</code>, <code>iss</code>, <code>aud</code>, <code>exp</code>, scopes), signature (saboot ki kisi ne badla nahi).</li>\n<li>Flow: user identity provider par sign-in karta hai, access token paata hai, client <code>Authorization: Bearer ...</code> bhejta hai; <code>AddAuthentication().AddJwtBearer()</code> use validate karke claims se <code>HttpContext.User</code> banata hai.</li>\n<li><b>Signed, encrypted nahi</b> (standard JWT ek JWS hai): payload mein passwords ya sanvedansheel personal data mat rakho; tokens sirf HTTPS par bhejo.</li>\n<li><b>Clock skew</b>: JWT bearer handler default mein 5 minute ka <code>ClockSkew</code> sah leta hai, isliye abhi-abhi expire hua token thodi der aur accept ho sakta hai; sakht expiry chahiye to <code>TokenValidationParameters.ClockSkew</code> ghatao.</li>\n<li>Stateless = scalable, par token <code>exp</code> tak valid rehta hai: lifetime chhoti rakho aur refresh tokens use karo (agle sawaal).</li>\n<li>Follow-up: \"client ise kahan rakhe?\" — SPAs mein trade-offs hain: memory (refresh par kho jaata hai), ya HttpOnly cookie (CSRF ka dhyan); XSS ki chinta ho to localStorage mein lambi umr ke tokens se bacho.</li>\n<li>Follow-up: \"HMAC ya RSA signing?\" — HMAC mein API ke saath ek secret saajha hota hai; RSA/ECDSA mein API sirf public key se verify karti hai, jo kai services ke tokens validate karne par zyaada surakshit hai.</li>\n</ul>"
      }
    },
    {
      id: "cors-what",
      depth: "short",
      q: "What is CORS and what does it protect?",
      answer: "CORS lets a server tell browsers which other origins may read its responses. It protects users inside browsers only; curl and other servers ignore it, so it is not API security.",
      meaning: {
        hi: "CORS से server browsers को बताता है कि कौन-से दूसरे origins उसके responses पढ़ सकते हैं। यह सिर्फ़ browsers के अंदर users को बचाता है; curl और दूसरे servers इसे नहीं मानते, इसलिए यह API security नहीं है।",
        hg: "CORS se server browsers ko batata hai ki kaun-se doosre origins uske responses padh sakte hain. Yeh sirf browsers ke andar users ko bachata hai; curl aur doosre servers ise nahi maante, isliye yeh API security nahi hai."
      },
      explain: {
        en: "<ul>\n<li>An <b>origin</b> is scheme + host + port. A page from <code>https://shop.example</code> calling <code>https://api.example</code> is cross-origin; the browser blocks JavaScript from reading the response unless the API sends matching <code>Access-Control-Allow-Origin</code>.</li>\n<li><b>Preflight</b>: for \"non-simple\" requests (methods like PUT/DELETE, custom headers, JSON content type) the browser first sends <code>OPTIONS</code> with <code>Origin</code> and <code>Access-Control-Request-Method</code>; the API answers with allowed origin, methods and headers (Puzzle: \"cors-preflight-headers\").</li>\n<li>The request can still reach your server and run: CORS limits what the <i>browser</i> shows the page, so authentication and authorization are still needed.</li>\n<li>ASP.NET Core: <code>AddCors</code> policy + <code>UseCors(\"name\")</code> after routing, before authentication (so the preflight, which has no token, is answered). Name exact origins; <code>AllowAnyOrigin()</code> with <code>AllowCredentials()</code> is not allowed.</li>\n<li>Follow-up: \"CORS error but the API works in Postman?\" — Postman is not a browser, so it does not enforce CORS; fix the server policy.</li>\n</ul>",
        hi: "<ul>\n<li><b>Origin</b> = scheme + host + port। <code>https://shop.example</code> का page <code>https://api.example</code> को बुलाए तो वह cross-origin है; API जब तक मेल खाता <code>Access-Control-Allow-Origin</code> न भेजे, browser JavaScript को response पढ़ने से रोकता है।</li>\n<li><b>Preflight</b>: \"non-simple\" requests (PUT/DELETE जैसे methods, custom headers, JSON content type) पर browser पहले <code>Origin</code> और <code>Access-Control-Request-Method</code> के साथ <code>OPTIONS</code> भेजता है; API allowed origin, methods और headers के साथ जवाब देती है (Puzzle: \"cors-preflight-headers\")।</li>\n<li>Request फिर भी आपके server तक पहुँचकर चल सकती है: CORS सिर्फ़ यह सीमित करता है कि <i>browser</i> page को क्या दिखाए, इसलिए authentication और authorization फिर भी चाहिए।</li>\n<li>ASP.NET Core: <code>AddCors</code> policy + routing के बाद, authentication से पहले <code>UseCors(\"name\")</code> (ताकि बिना token वाले preflight का जवाब मिले)। सटीक origins के नाम लो; <code>AllowAnyOrigin()</code> और <code>AllowCredentials()</code> साथ नहीं चलते।</li>\n<li>Follow-up: \"CORS error पर API Postman में चलती है?\" — Postman browser नहीं है, इसलिए CORS लागू नहीं करता; server की policy ठीक करो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Origin</b> = scheme + host + port. <code>https://shop.example</code> ka page <code>https://api.example</code> ko bulaye to woh cross-origin hai; API jab tak match karta <code>Access-Control-Allow-Origin</code> na bheje, browser JavaScript ko response padhne se rokta hai.</li>\n<li><b>Preflight</b>: \"non-simple\" requests (PUT/DELETE jaise methods, custom headers, JSON content type) par browser pehle <code>Origin</code> aur <code>Access-Control-Request-Method</code> ke saath <code>OPTIONS</code> bhejta hai; API allowed origin, methods aur headers ke saath jawab deti hai (Puzzle: \"cors-preflight-headers\").</li>\n<li>Request phir bhi aapke server tak pahunchkar chal sakti hai: CORS sirf yeh seemit karta hai ki <i>browser</i> page ko kya dikhaye, isliye authentication aur authorization phir bhi chahiye.</li>\n<li>ASP.NET Core: <code>AddCors</code> policy + routing ke baad, authentication se pehle <code>UseCors(\"name\")</code> (taaki bina token wale preflight ka jawab mile). Sateek origins ke naam lo; <code>AllowAnyOrigin()</code> aur <code>AllowCredentials()</code> saath nahi chalte.</li>\n<li>Follow-up: \"CORS error par API Postman mein chalti hai?\" — Postman browser nahi hai, isliye CORS laagu nahi karta; server ki policy theek karo.</li>\n</ul>"
      }
    },
    {
      id: "versioning-strategies",
      depth: "short",
      q: "How would you version a Web API?",
      answer: "Pick one scheme: URL segment (/v2/orders), query string, header or media type, using the Asp.Versioning packages. Avoid breaking existing clients, and announce deprecation before removing a version.",
      meaning: {
        hi: "एक scheme चुनो: URL segment (/v2/orders), query string, header या media type, Asp.Versioning packages के साथ। मौजूदा clients को मत तोड़ो, और version हटाने से पहले deprecation की सूचना दो।",
        hg: "Ek scheme chuno: URL segment (/v2/orders), query string, header ya media type, Asp.Versioning packages ke saath. Maujooda clients ko mat todo, aur version hatane se pehle deprecation ki soochna do."
      },
      explain: {
        en: "<ul>\n<li><b>URL segment</b> (<code>/api/v2/orders</code>): most visible, easy to route, cache and test in a browser; the URL of a resource changes between versions.</li>\n<li><b>Query string</b> (<code>?api-version=2.0</code>): simple; easy for a client to forget. <b>Header</b> (<code>X-Api-Version</code>) and <b>media type</b> (<code>Accept: application/json;v=2</code>): clean URLs, but harder to test by hand and to cache.</li>\n<li>Packages: <code>Asp.Versioning.Http</code> (Minimal APIs), <code>Asp.Versioning.Mvc</code> (controllers), <code>Asp.Versioning.Mvc.ApiExplorer</code> (OpenAPI/Swagger per version). They replaced the older <code>Microsoft.AspNetCore.Mvc.Versioning</code> packages.</li>\n<li>Prefer <b>additive, backward-compatible</b> changes (new optional fields) so that most changes need no new version; breaking changes (remove or rename a field, change a meaning) need a new version.</li>\n<li>Deprecation process: mark the version deprecated, report it in headers (<code>ReportApiVersions</code>), set a sunset date, watch usage in logs, then remove.</li>\n<li>Follow-up: \"Is version-per-endpoint or whole-API better?\" — whole-API versions are easier for clients to reason about; fine-grained versions create a matrix to maintain.</li>\n</ul>",
        hi: "<ul>\n<li><b>URL segment</b> (<code>/api/v2/orders</code>): सबसे दिखने वाला, route, cache और browser में test करना आसान; versions के बीच resource का URL बदलता है।</li>\n<li><b>Query string</b> (<code>?api-version=2.0</code>): सरल; client के लिए भूलना आसान। <b>Header</b> (<code>X-Api-Version</code>) और <b>media type</b> (<code>Accept: application/json;v=2</code>): साफ़ URLs, पर हाथ से test और cache करना कठिन।</li>\n<li>Packages: <code>Asp.Versioning.Http</code> (Minimal APIs), <code>Asp.Versioning.Mvc</code> (controllers), <code>Asp.Versioning.Mvc.ApiExplorer</code> (हर version के लिए OpenAPI/Swagger)। इन्होंने पुराने <code>Microsoft.AspNetCore.Mvc.Versioning</code> packages की जगह ली।</li>\n<li><b>Additive, backward-compatible</b> बदलाव पसंद करो (नए optional fields) ताकि ज़्यादातर बदलावों को नया version न चाहिए; breaking changes (field हटाना या नाम बदलना, मतलब बदलना) को नया version चाहिए।</li>\n<li>Deprecation process: version को deprecated mark करो, headers में report करो (<code>ReportApiVersions</code>), sunset date रखो, logs में usage देखो, फिर हटाओ।</li>\n<li>Follow-up: \"version-per-endpoint या पूरी API का version बेहतर?\" — पूरी API के versions clients के लिए समझना आसान है; बारीक versions maintain करने का matrix बना देते हैं।</li>\n</ul>",
        hg: "<ul>\n<li><b>URL segment</b> (<code>/api/v2/orders</code>): sabse dikhne wala, route, cache aur browser mein test karna aasaan; versions ke beech resource ka URL badalta hai.</li>\n<li><b>Query string</b> (<code>?api-version=2.0</code>): saral; client ke liye bhoolna aasaan. <b>Header</b> (<code>X-Api-Version</code>) aur <b>media type</b> (<code>Accept: application/json;v=2</code>): saaf URLs, par haath se test aur cache karna kathin.</li>\n<li>Packages: <code>Asp.Versioning.Http</code> (Minimal APIs), <code>Asp.Versioning.Mvc</code> (controllers), <code>Asp.Versioning.Mvc.ApiExplorer</code> (har version ke liye OpenAPI/Swagger). Inhone purane <code>Microsoft.AspNetCore.Mvc.Versioning</code> packages ki jagah li.</li>\n<li><b>Additive, backward-compatible</b> badlaav pasand karo (naye optional fields) taaki zyaadatar badlaavon ko naya version na chahiye; breaking changes (field hatana ya naam badalna, matlab badalna) ko naya version chahiye.</li>\n<li>Deprecation process: version ko deprecated mark karo, headers mein report karo (<code>ReportApiVersions</code>), sunset date rakho, logs mein usage dekho, phir hatao.</li>\n<li>Follow-up: \"version-per-endpoint ya poori API ka version behtar?\" — poori API ke versions clients ke liye samajhna aasaan hai; baareek versions maintain karne ka matrix bana dete hain.</li>\n</ul>"
      }
    },
    {
      id: "oauth-vs-oidc",
      depth: "detailed",
      q: "What is the difference between OAuth 2.0 and OpenID Connect?",
      answer: "OAuth 2.0 delegates access: a client gets an access token to call an API. OpenID Connect adds an identity layer on top: an ID token that says who signed in.",
      meaning: {
        hi: "OAuth 2.0 access delegate करता है: client को API बुलाने के लिए access token मिलता है। OpenID Connect उसके ऊपर पहचान की परत जोड़ता है: ID token जो बताता है कि किसने sign-in किया।",
        hg: "OAuth 2.0 access delegate karta hai: client ko API bulane ke liye access token milta hai. OpenID Connect uske upar pehchaan ki parat jodta hai: ID token jo batata hai ki kisne sign-in kiya."
      },
      explain: {
        en: "<ul>\n<li>Analogy: a hotel key card (access token) opens your room; it does not say who you are. The check-in form (ID token) states your identity.</li>\n<li><b>OAuth 2.0</b> = authorization framework. Roles: resource owner (user), client (app), authorization server, resource server (your API). Your API validates <b>access tokens</b>.</li>\n<li><b>OpenID Connect</b> = authentication on OAuth 2.0: adds the ID token (a JWT), the <code>openid</code> scope and a user-info endpoint. The client app reads the ID token; the API should not accept it as an access token.</li>\n<li>Common flows: <b>authorization code + PKCE</b> for SPAs, mobile and server-rendered web apps; <b>client credentials</b> for service-to-service. The implicit flow and password grant are discouraged for new apps.</li>\n<li>In ASP.NET Core: the API uses <code>AddJwtBearer</code> (validate access tokens); a web app that signs users in uses <code>AddOpenIdConnect</code>.</li>\n<li>TL angle: use a proven identity provider (Entra ID, Keycloak, Auth0 and others) instead of writing your own token server.</li>\n</ul>",
        hi: "<ul>\n<li>Analogy: hotel की key card (access token) आपका कमरा खोलती है; वह नहीं बताती कि आप कौन हैं। check-in form (ID token) आपकी पहचान बताता है।</li>\n<li><b>OAuth 2.0</b> = authorization framework। Roles: resource owner (user), client (app), authorization server, resource server (आपकी API)। आपकी API <b>access tokens</b> validate करती है।</li>\n<li><b>OpenID Connect</b> = OAuth 2.0 पर authentication: ID token (एक JWT), <code>openid</code> scope और user-info endpoint जोड़ता है। Client app ID token पढ़ती है; API को उसे access token की तरह नहीं मानना चाहिए।</li>\n<li>आम flows: SPAs, mobile और server-rendered web apps के लिए <b>authorization code + PKCE</b>; service-to-service के लिए <b>client credentials</b>। नई apps के लिए implicit flow और password grant को हतोत्साहित किया जाता है।</li>\n<li>ASP.NET Core में: API <code>AddJwtBearer</code> use करती है (access tokens validate); users को sign-in कराने वाली web app <code>AddOpenIdConnect</code> use करती है।</li>\n<li>TL angle: अपना token server लिखने की जगह भरोसेमंद identity provider use करो (Entra ID, Keycloak, Auth0 वग़ैरह)।</li>\n</ul>",
        hg: "<ul>\n<li>Analogy: hotel ki key card (access token) aapka kamra kholti hai; woh nahi batati ki aap kaun hain. Check-in form (ID token) aapki pehchaan batata hai.</li>\n<li><b>OAuth 2.0</b> = authorization framework. Roles: resource owner (user), client (app), authorization server, resource server (aapki API). Aapki API <b>access tokens</b> validate karti hai.</li>\n<li><b>OpenID Connect</b> = OAuth 2.0 par authentication: ID token (ek JWT), <code>openid</code> scope aur user-info endpoint jodta hai. Client app ID token padhti hai; API ko use access token ki tarah nahi maanna chahiye.</li>\n<li>Aam flows: SPAs, mobile aur server-rendered web apps ke liye <b>authorization code + PKCE</b>; service-to-service ke liye <b>client credentials</b>. Nayi apps ke liye implicit flow aur password grant ko hatotsaahit kiya jaata hai.</li>\n<li>ASP.NET Core mein: API <code>AddJwtBearer</code> use karti hai (access tokens validate); users ko sign-in karane wali web app <code>AddOpenIdConnect</code> use karti hai.</li>\n<li>TL angle: apna token server likhne ki jagah bharosemand identity provider use karo (Entra ID, Keycloak, Auth0 vagairah).</li>\n</ul>"
      }
    },
    {
      id: "refresh-tokens",
      depth: "detailed",
      q: "Why use short-lived access tokens with refresh tokens?",
      answer: "A JWT cannot be revoked before it expires, so keep it short. A longer-lived refresh token, tracked and revocable by the authorization server and rotated on use, gets new access tokens without a sign-in.",
      meaning: {
        hi: "JWT expire होने से पहले revoke नहीं होता, इसलिए उसे छोटा रखो। लंबी उम्र का refresh token, जिसे authorization server track करता है (revoke भी कर सकता है) और use पर rotate होता है, बिना sign-in के नए access tokens दिलाता है।",
        hg: "JWT expire hone se pehle revoke nahi hota, isliye use chhota rakho. Lambi umr ka refresh token, jise authorization server track karta hai (revoke bhi kar sakta hai) aur use par rotate hota hai, bina sign-in ke naye access tokens dilata hai."
      },
      explain: {
        en: "<ul>\n<li>Analogy: a day-pass wristband (access token) expires tonight; the season-ticket card (refresh token) at the gate office gets a new wristband each morning. Lose the wristband and the damage ends tonight.</li>\n<li>If a stolen access token lives 5 minutes, the attacker's window is 5 minutes. A refresh token lives longer, so the client (or a backend-for-frontend) stores it carefully, the authorization server tracks it (for example as a hash) so it can rotate and revoke it, and it is sent only to the token endpoint.</li>\n<li><b>Rotation</b>: each refresh issues a new refresh token and invalidates the old one; if an old one is used again, treat it as theft and revoke the whole chain.</li>\n<li>Revocation of access tokens before expiry needs extra work: a deny-list or a token-version check on each request, which gives up some of JWT's statelessness.</li>\n<li>Follow-up: \"Where do you keep a refresh token in a SPA?\" — an HttpOnly, Secure, SameSite cookie handled by a backend-for-frontend is a common answer; localStorage exposes it to XSS.</li>\n<li>Follow-up: \"What goes in the payload?\" — only what the API needs (subject, scopes, roles); remember the payload is readable.</li>\n</ul>",
        hi: "<ul>\n<li>Analogy: day-pass wristband (access token) आज रात expire हो जाता है; gate office का season-ticket card (refresh token) हर सुबह नया wristband दिलाता है। wristband खो जाए तो नुकसान आज रात ख़त्म।</li>\n<li>चोरी हुआ access token 5 मिनट जिए तो attacker की window 5 मिनट है। Refresh token ज़्यादा जीता है, इसलिए client (या backend-for-frontend) उसे सावधानी से रखता है, authorization server उसे track करता है (जैसे hash के रूप में) ताकि rotate और revoke कर सके, और वह सिर्फ़ token endpoint को भेजा जाता है।</li>\n<li><b>Rotation</b>: हर refresh नया refresh token देता है और पुराना invalid कर देता है; पुराना दोबारा use हो तो उसे चोरी मानो और पूरी chain revoke करो।</li>\n<li>expiry से पहले access tokens revoke करने में अतिरिक्त काम लगता है: deny-list या हर request पर token-version check, जिससे JWT की कुछ stateless-ness छूटती है।</li>\n<li>Follow-up: \"SPA में refresh token कहाँ रखें?\" — backend-for-frontend द्वारा संभाली गई HttpOnly, Secure, SameSite cookie आम जवाब है; localStorage उसे XSS के सामने खोल देता है।</li>\n<li>Follow-up: \"payload में क्या रखें?\" — सिर्फ़ वह जो API को चाहिए (subject, scopes, roles); याद रखो payload पढ़ा जा सकता है।</li>\n</ul>",
        hg: "<ul>\n<li>Analogy: day-pass wristband (access token) aaj raat expire ho jaata hai; gate office ka season-ticket card (refresh token) har subah naya wristband dilata hai. Wristband kho jaye to nuksaan aaj raat khatam.</li>\n<li>Chori hua access token 5 minute jiye to attacker ki window 5 minute hai. Refresh token zyaada jeeta hai, isliye client (ya backend-for-frontend) use saavdhaani se rakhta hai, authorization server use track karta hai (jaise hash ke roop mein) taaki rotate aur revoke kar sake, aur woh sirf token endpoint ko bheja jaata hai.</li>\n<li><b>Rotation</b>: har refresh naya refresh token deta hai aur purana invalid kar deta hai; purana dobara use ho to use chori maano aur poori chain revoke karo.</li>\n<li>Expiry se pehle access tokens revoke karne mein atirikt kaam lagta hai: deny-list ya har request par token-version check, jisse JWT ki kuch stateless-ness chhootti hai.</li>\n<li>Follow-up: \"SPA mein refresh token kahan rakhein?\" — backend-for-frontend dwara sambhali gayi HttpOnly, Secure, SameSite cookie aam jawab hai; localStorage use XSS ke saamne khol deta hai.</li>\n<li>Follow-up: \"payload mein kya rakhein?\" — sirf woh jo API ko chahiye (subject, scopes, roles); yaad rakho payload padha ja sakta hai.</li>\n</ul>"
      }
    },
    {
      id: "roles-claims-policies",
      depth: "detailed",
      q: "What is the difference between roles, claims and policies in ASP.NET Core authorization?",
      answer: "A claim is a fact about the user; a role is a simple claim-based label. A policy is a named rule built from requirements, so prefer policies for anything beyond simple roles.",
      meaning: {
        hi: "Claim user के बारे में एक तथ्य है; role एक सादा claim-based label है। Policy requirements से बना नाम वाला rule है, इसलिए सादे roles से आगे की हर बात के लिए policies चुनो।",
        hg: "Claim user ke baare mein ek tathya hai; role ek saada claim-based label hai. Policy requirements se bana naam wala rule hai, isliye saade roles se aage ki har baat ke liye policies chuno."
      },
      explain: {
        en: "<ul>\n<li><b>Claims</b>: name/value facts in the token (<code>email</code>, <code>scope</code>, <code>department</code>). <b>Roles</b>: the <code>role</code> claim, checked with <code>[Authorize(Roles = \"Admin\")]</code>.</li>\n<li><b>Policies</b>: <code>AddAuthorizationBuilder().AddPolicy(\"CanWriteOrders\", p =&gt; p.RequireClaim(\"scope\", \"orders.write\"))</code>, applied with <code>[Authorize(Policy = \"...\")]</code> or <code>.RequireAuthorization(\"...\")</code>. Rule changes happen in one place.</li>\n<li><b>Resource-based</b>: \"only the owner may edit this order\" needs the loaded resource, so inject <code>IAuthorizationService</code> and call <code>AuthorizeAsync(user, order, policy)</code> in the handler or action.</li>\n<li><b>Fallback and default policy</b>: set a fallback policy requiring authenticated users so that a forgotten attribute does not leave an endpoint open; use <code>[AllowAnonymous]</code> for the few public ones.</li>\n<li>Results: no valid identity gives 401, a valid identity failing the policy gives 403 (Day 12).</li>\n<li>TL angle: roles explode (\"Admin2\", \"AdminReadOnly\"); scopes and policies scale better, and they are easy to unit test.</li>\n</ul>",
        hi: "<ul>\n<li><b>Claims</b>: token में name/value तथ्य (<code>email</code>, <code>scope</code>, <code>department</code>)। <b>Roles</b>: <code>role</code> claim, जिसे <code>[Authorize(Roles = \"Admin\")]</code> से जाँचते हैं।</li>\n<li><b>Policies</b>: <code>AddAuthorizationBuilder().AddPolicy(\"CanWriteOrders\", p =&gt; p.RequireClaim(\"scope\", \"orders.write\"))</code>, जिसे <code>[Authorize(Policy = \"...\")]</code> या <code>.RequireAuthorization(\"...\")</code> से लगाते हैं। नियम बदलना एक ही जगह होता है।</li>\n<li><b>Resource-based</b>: \"सिर्फ़ owner यह order edit करे\" के लिए load हुआ resource चाहिए, इसलिए <code>IAuthorizationService</code> inject करो और handler या action में <code>AuthorizeAsync(user, order, policy)</code> बुलाओ।</li>\n<li><b>Fallback और default policy</b>: ऐसी fallback policy रखो जो authenticated users माँगे, ताकि भूला हुआ attribute endpoint को खुला न छोड़े; कुछ public endpoints के लिए <code>[AllowAnonymous]</code>।</li>\n<li>नतीजे: valid पहचान नहीं तो 401, valid पहचान पर policy fail तो 403 (Day 12)।</li>\n<li>TL angle: roles बेतहाशा बढ़ते हैं (\"Admin2\", \"AdminReadOnly\"); scopes और policies बेहतर scale होती हैं, और unit test करना आसान है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Claims</b>: token mein name/value tathya (<code>email</code>, <code>scope</code>, <code>department</code>). <b>Roles</b>: <code>role</code> claim, jise <code>[Authorize(Roles = \"Admin\")]</code> se jaanchte hain.</li>\n<li><b>Policies</b>: <code>AddAuthorizationBuilder().AddPolicy(\"CanWriteOrders\", p =&gt; p.RequireClaim(\"scope\", \"orders.write\"))</code>, jise <code>[Authorize(Policy = \"...\")]</code> ya <code>.RequireAuthorization(\"...\")</code> se lagate hain. Niyam badalna ek hi jagah hota hai.</li>\n<li><b>Resource-based</b>: \"sirf owner yeh order edit kare\" ke liye load hua resource chahiye, isliye <code>IAuthorizationService</code> inject karo aur handler ya action mein <code>AuthorizeAsync(user, order, policy)</code> bulao.</li>\n<li><b>Fallback aur default policy</b>: aisi fallback policy rakho jo authenticated users maange, taaki bhoola hua attribute endpoint ko khula na chhode; kuch public endpoints ke liye <code>[AllowAnonymous]</code>.</li>\n<li>Nateeje: valid pehchaan nahi to 401, valid pehchaan par policy fail to 403 (Day 12).</li>\n<li>TL angle: roles betahaasha badhte hain (\"Admin2\", \"AdminReadOnly\"); scopes aur policies behtar scale hoti hain, aur unit test karna aasaan hai.</li>\n</ul>"
      }
    },
    {
      id: "caching-layers",
      depth: "detailed",
      q: "Response caching vs output caching vs IMemoryCache vs HybridCache: how do you choose?",
      answer: "Response caching follows HTTP cache headers; output caching (.NET 7+) lets the server decide and evict by tag; IMemoryCache holds in-process data; HybridCache (.NET 9 era, package) adds a shared level and stampede protection.",
      meaning: {
        hi: "Response caching HTTP cache headers को मानता है; output caching (.NET 7+) में server फ़ैसला करता है और tag से evict करता है; IMemoryCache in-process data रखता है; HybridCache (.NET 9 era, package) shared level और stampede protection जोड़ता है।",
        hg: "Response caching HTTP cache headers ko maanta hai; output caching (.NET 7+) mein server faisla karta hai aur tag se evict karta hai; IMemoryCache in-process data rakhta hai; HybridCache (.NET 9 era, package) shared level aur stampede protection jodta hai."
      },
      explain: {
        en: "<ul>\n<li><b>Cache whole HTTP responses</b>: <i>response caching</i> (headers decide; clients can bypass with <code>no-cache</code>) or <i>output caching</i> (server policy, tags, vary-by rules, you control invalidation). For APIs, output caching is usually the better fit.</li>\n<li><b>Cache data inside code</b>: <code>IMemoryCache</code> (per process, fast, lost on restart, each instance has its own copy); <code>IDistributedCache</code> (shared via Redis or SQL Server, you serialize); <code>HybridCache</code> combines both and de-duplicates concurrent loads of one key.</li>\n<li><b>Cache stampede</b>: many requests miss at once and all hit the database. HybridCache runs one factory call per key per instance and shares the result; with <code>IMemoryCache</code> you must add your own locking.</li>\n<li>Multi-server trap: an in-memory entry invalidated on server A is still cached on server B; shared invalidation needs a shared store or short lifetimes.</li>\n<li>Rules of thumb: give every entry an expiry, build keys from trusted ids only, do not cache per-user data under a shared key, and measure the hit rate.</li>\n<li>Follow-up: \"Cache invalidation?\" — expiry plus explicit eviction (by key or tag) when data changes; the hard part is knowing every place the data lives.</li>\n</ul>",
        hi: "<ul>\n<li><b>पूरे HTTP responses cache करना</b>: <i>response caching</i> (headers तय करते हैं; clients <code>no-cache</code> से bypass कर सकते हैं) या <i>output caching</i> (server policy, tags, vary-by rules, invalidation आपके हाथ में)। APIs के लिए आमतौर पर output caching बेहतर बैठता है।</li>\n<li><b>code के अंदर data cache करना</b>: <code>IMemoryCache</code> (per process, तेज़, restart पर खो जाता है, हर instance की अपनी copy); <code>IDistributedCache</code> (Redis या SQL Server से shared, serialize आप करते हो); <code>HybridCache</code> दोनों जोड़ता है और एक key के concurrent loads को एक कर देता है।</li>\n<li><b>Cache stampede</b>: कई requests एक साथ miss होकर सब database पर टूट पड़ती हैं। HybridCache हर instance में हर key के लिए एक factory call चलाता है और नतीजा साझा करता है; <code>IMemoryCache</code> के साथ locking आपको ख़ुद जोड़नी पड़ती है।</li>\n<li>Multi-server trap: server A पर invalidate हुई in-memory entry server B पर अब भी cached है; साझा invalidation के लिए shared store या छोटी lifetimes चाहिए।</li>\n<li>अँगूठे के नियम: हर entry को expiry दो, keys सिर्फ़ भरोसेमंद ids से बनाओ, user-specific data को shared key पर cache मत करो, और hit rate नापो।</li>\n<li>Follow-up: \"Cache invalidation?\" — expiry और data बदलने पर साफ़ eviction (key या tag से); मुश्किल यह जानना है कि data कहाँ-कहाँ रहता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Poore HTTP responses cache karna</b>: <i>response caching</i> (headers tay karte hain; clients <code>no-cache</code> se bypass kar sakte hain) ya <i>output caching</i> (server policy, tags, vary-by rules, invalidation aapke haath mein). APIs ke liye aamtaur par output caching behtar baithta hai.</li>\n<li><b>Code ke andar data cache karna</b>: <code>IMemoryCache</code> (per process, tez, restart par kho jaata hai, har instance ki apni copy); <code>IDistributedCache</code> (Redis ya SQL Server se shared, serialize aap karte ho); <code>HybridCache</code> dono jodta hai aur ek key ke concurrent loads ko ek kar deta hai.</li>\n<li><b>Cache stampede</b>: kai requests ek saath miss hokar sab database par toot padti hain. HybridCache har instance mein har key ke liye ek factory call chalata hai aur nateeja saajha karta hai; <code>IMemoryCache</code> ke saath locking aapko khud jodni padti hai.</li>\n<li>Multi-server trap: server A par invalidate hui in-memory entry server B par ab bhi cached hai; saajha invalidation ke liye shared store ya chhoti lifetimes chahiye.</li>\n<li>Angoothe ke niyam: har entry ko expiry do, keys sirf bharosemand ids se banao, user-specific data ko shared key par cache mat karo, aur hit rate naapo.</li>\n<li>Follow-up: \"Cache invalidation?\" — expiry aur data badalne par saaf eviction (key ya tag se); mushkil yeh jaanna hai ki data kahan-kahan rehta hai.</li>\n</ul>"
      }
    },
    {
      id: "etag-conditional",
      depth: "detailed",
      q: "What are ETags and conditional requests used for?",
      answer: "An ETag identifies a version of a response. If-None-Match on a GET returns 304 with no body when unchanged; If-Match on a PUT returns 412 if someone else changed it, giving optimistic concurrency.",
      meaning: {
        hi: "ETag response के एक version की पहचान है। GET पर If-None-Match, बदलाव न हो तो बिना body के 304 देता है; PUT पर If-Match, किसी और ने बदला हो तो 412 देता है, यानी optimistic concurrency।",
        hg: "ETag response ke ek version ki pehchaan hai. GET par If-None-Match, badlaav na ho to bina body ke 304 deta hai; PUT par If-Match, kisi aur ne badla ho to 412 deta hai, yaani optimistic concurrency."
      },
      explain: {
        en: "<ul>\n<li>Analogy: you hold the 12th edition of a catalogue. You ask \"is 12 still current?\" and the shop answers \"yes\" (304) instead of reprinting it. For edits: \"change it only if it is still edition 12\" (<code>If-Match</code>), otherwise 412.</li>\n<li><b>Read side</b>: server sends <code>ETag: \"v7\"</code>; client stores it and sends <code>If-None-Match: \"v7\"</code> later; unchanged gives <b>304 Not Modified</b>, saving bandwidth. Puzzle: \"etag-304-second-request\".</li>\n<li><b>Write side</b>: the client sends <code>If-Match</code> with the ETag it read; if the stored version differs the server answers <b>412 Precondition Failed</b> (or 409 by team convention), preventing a silent lost update. A <b>rowversion</b> column (Day 6) is a natural source for the tag.</li>\n<li>Strong ETags mean byte-identical; weak ETags (<code>W/\"...\"</code>) mean semantically equal. The comparison is done on the opaque string, so the server decides what goes into it.</li>\n<li>ASP.NET Core has no automatic ETag generator for API responses; compute it from a version or hash and compare headers yourself (or with a small filter or library).</li>\n<li>Follow-up: \"ETag vs Last-Modified?\" — Last-Modified has one-second resolution; ETag can represent any version identifier.</li>\n</ul>",
        hi: "<ul>\n<li>Analogy: आपके पास catalogue का 12वाँ edition है। आप पूछते हैं \"क्या 12 अब भी चालू है?\" और दुकान \"हाँ\" (304) कहती है, दोबारा छापे बिना। edits के लिए: \"बदलो, पर तभी जब अब भी edition 12 हो\" (<code>If-Match</code>), वरना 412।</li>\n<li><b>Read side</b>: server <code>ETag: \"v7\"</code> भेजता है; client उसे रखता है और बाद में <code>If-None-Match: \"v7\"</code> भेजता है; unchanged हो तो <b>304 Not Modified</b>, bandwidth बचती है। Puzzle: \"etag-304-second-request\"।</li>\n<li><b>Write side</b>: client पढ़े हुए ETag के साथ <code>If-Match</code> भेजता है; stored version अलग हो तो server <b>412 Precondition Failed</b> देता है (या team convention से 409), जिससे चुपचाप lost update रुकता है। Tag का स्वाभाविक स्रोत <b>rowversion</b> column है (Day 6)।</li>\n<li>Strong ETag का मतलब byte-identical; weak ETag (<code>W/\"...\"</code>) का मतलब अर्थ में बराबर। तुलना opaque string पर होती है, इसलिए उसमें क्या जाए यह server तय करता है।</li>\n<li>ASP.NET Core में API responses के लिए automatic ETag generator नहीं है; version या hash से बनाओ और headers ख़ुद compare करो (या छोटे filter या library से)।</li>\n<li>Follow-up: \"ETag vs Last-Modified?\" — Last-Modified की resolution एक सेकंड है; ETag कोई भी version identifier हो सकता है।</li>\n</ul>",
        hg: "<ul>\n<li>Analogy: aapke paas catalogue ka 12va edition hai. Aap poochte ho \"kya 12 ab bhi chaalu hai?\" aur dukaan \"haan\" (304) kehti hai, dobara chhape bina. Edits ke liye: \"badlo, par tabhi jab ab bhi edition 12 ho\" (<code>If-Match</code>), warna 412.</li>\n<li><b>Read side</b>: server <code>ETag: \"v7\"</code> bhejta hai; client use rakhta hai aur baad mein <code>If-None-Match: \"v7\"</code> bhejta hai; unchanged ho to <b>304 Not Modified</b>, bandwidth bachti hai. Puzzle: \"etag-304-second-request\".</li>\n<li><b>Write side</b>: client padhe hue ETag ke saath <code>If-Match</code> bhejta hai; stored version alag ho to server <b>412 Precondition Failed</b> deta hai (ya team convention se 409), jisse chupchaap lost update rukta hai. Tag ka swabhaavik source <b>rowversion</b> column hai (Day 6).</li>\n<li>Strong ETag ka matlab byte-identical; weak ETag (<code>W/\"...\"</code>) ka matlab arth mein barabar. Tulna opaque string par hoti hai, isliye usmein kya jaye yeh server tay karta hai.</li>\n<li>ASP.NET Core mein API responses ke liye automatic ETag generator nahi hai; version ya hash se banao aur headers khud compare karo (ya chhote filter ya library se).</li>\n<li>Follow-up: \"ETag vs Last-Modified?\" — Last-Modified ki resolution ek second hai; ETag koi bhi version identifier ho sakta hai.</li>\n</ul>"
      }
    },
    {
      id: "rate-limiting-how",
      depth: "detailed",
      q: "How would you rate limit an API in ASP.NET Core?",
      answer: "Use the built-in AddRateLimiter middleware (.NET 7+): fixed window, sliding window, token bucket or concurrency policies, partitioned per user or IP. Set RejectionStatusCode to 429; the default is 503.",
      meaning: {
        hi: "Built-in AddRateLimiter middleware (.NET 7+) use करो: fixed window, sliding window, token bucket या concurrency policies, user या IP के हिसाब से partition करके। RejectionStatusCode को 429 करो; default 503 है।",
        hg: "Built-in AddRateLimiter middleware (.NET 7+) use karo: fixed window, sliding window, token bucket ya concurrency policies, user ya IP ke hisaab se partition karke. RejectionStatusCode ko 429 karo; default 503 hai."
      },
      explain: {
        en: "<ul>\n<li>Wire-up: <code>AddRateLimiter</code> (define policies), <code>UseRateLimiter</code> (after <code>UseRouting</code> when you use endpoint policies), then <code>RequireRateLimiting(\"name\")</code> or <code>[EnableRateLimiting(\"name\")]</code> on endpoints; <code>[DisableRateLimiting]</code> opts out. It is in the shared framework: <code>Microsoft.AspNetCore.RateLimiting</code>, no extra package.</li>\n<li><b>Fixed window</b>: N requests per window, resets at the boundary (a burst across two windows is possible). <b>Sliding window</b>: same idea with segments, smoother. <b>Token bucket</b>: a bucket refilled steadily; bursts allowed up to the bucket size. <b>Concurrency</b>: limits requests in flight, not requests per time.</li>\n<li><b>Partitioning</b>: <code>RateLimitPartition.GetFixedWindowLimiter(key, ...)</code> with the user name, API key or IP, so one noisy client cannot use everyone's quota. Behind a proxy, configure forwarded headers or every client looks like the proxy.</li>\n<li>Rejected requests get the status set in <code>RejectionStatusCode</code> (default <b>503</b>; Puzzle: \"rate-limit-429\"). Use <code>OnRejected</code> to write a body or a <code>Retry-After</code> header.</li>\n<li>Limits are per server process; with several instances put a limit at the gateway/WAF too. Rate limiting reduces abuse but is not a DDoS defence.</li>\n<li>Follow-up: \"Which algorithm for login?\" — fixed or sliding window per IP + per username with a low limit; for a public search API, token bucket allows short bursts.</li>\n</ul>",
        hi: "<ul>\n<li>Wire-up: <code>AddRateLimiter</code> (policies define करो), <code>UseRateLimiter</code> (endpoint policies हों तो <code>UseRouting</code> के बाद), फिर endpoints पर <code>RequireRateLimiting(\"name\")</code> या <code>[EnableRateLimiting(\"name\")]</code>; <code>[DisableRateLimiting]</code> से छूट। यह shared framework में है: <code>Microsoft.AspNetCore.RateLimiting</code>, कोई extra package नहीं।</li>\n<li><b>Fixed window</b>: हर window में N requests, boundary पर reset (दो windows के बीच burst संभव)। <b>Sliding window</b>: वही विचार segments के साथ, ज़्यादा smooth। <b>Token bucket</b>: एक bucket जो लगातार भरता है; bucket के size तक burst की इजाज़त। <b>Concurrency</b>: चल रही requests सीमित करता है, समय के हिसाब से requests नहीं।</li>\n<li><b>Partitioning</b>: user name, API key या IP के साथ <code>RateLimitPartition.GetFixedWindowLimiter(key, ...)</code>, ताकि एक शोर करने वाला client सबका quota न खा जाए। Proxy के पीछे forwarded headers configure करो वरना हर client proxy जैसा दिखेगा।</li>\n<li>Reject हुई requests को <code>RejectionStatusCode</code> का status मिलता है (default <b>503</b>; Puzzle: \"rate-limit-429\")। Body या <code>Retry-After</code> header लिखने के लिए <code>OnRejected</code> use करो।</li>\n<li>Limits per server process हैं; कई instances हों तो gateway/WAF पर भी limit रखो। Rate limiting abuse घटाता है पर DDoS का बचाव नहीं है।</li>\n<li>Follow-up: \"login के लिए कौन-सा algorithm?\" — कम limit के साथ per IP + per username fixed या sliding window; public search API के लिए token bucket छोटे bursts की इजाज़त देता है।</li>\n</ul>",
        hg: "<ul>\n<li>Wire-up: <code>AddRateLimiter</code> (policies define karo), <code>UseRateLimiter</code> (endpoint policies hon to <code>UseRouting</code> ke baad), phir endpoints par <code>RequireRateLimiting(\"name\")</code> ya <code>[EnableRateLimiting(\"name\")]</code>; <code>[DisableRateLimiting]</code> se chhoot. Yeh shared framework mein hai: <code>Microsoft.AspNetCore.RateLimiting</code>, koi extra package nahi.</li>\n<li><b>Fixed window</b>: har window mein N requests, boundary par reset (do windows ke beech burst sambhav). <b>Sliding window</b>: wahi vichaar segments ke saath, zyaada smooth. <b>Token bucket</b>: ek bucket jo lagaatar bharta hai; bucket ke size tak burst ki ijazat. <b>Concurrency</b>: chal rahi requests seemit karta hai, samay ke hisaab se requests nahi.</li>\n<li><b>Partitioning</b>: user name, API key ya IP ke saath <code>RateLimitPartition.GetFixedWindowLimiter(key, ...)</code>, taaki ek shor karne wala client sabka quota na kha jaye. Proxy ke peeche forwarded headers configure karo warna har client proxy jaisa dikhega.</li>\n<li>Reject hui requests ko <code>RejectionStatusCode</code> ka status milta hai (default <b>503</b>; Puzzle: \"rate-limit-429\"). Body ya <code>Retry-After</code> header likhne ke liye <code>OnRejected</code> use karo.</li>\n<li>Limits per server process hain; kai instances hon to gateway/WAF par bhi limit rakho. Rate limiting abuse ghatata hai par DDoS ka bachaav nahi hai.</li>\n<li>Follow-up: \"login ke liye kaun-sa algorithm?\" — kam limit ke saath per IP + per username fixed ya sliding window; public search API ke liye token bucket chhote bursts ki ijazat deta hai.</li>\n</ul>"
      }
    },
    {
      id: "httpclient-factory-why",
      depth: "detailed",
      q: "Why use IHttpClientFactory instead of new HttpClient()?",
      answer: "A new HttpClient per call can exhaust sockets; a single default static client may miss DNS changes. The factory pools and recycles handlers and gives named or typed clients with resilience attached.",
      meaning: {
        hi: "हर call पर नया HttpClient sockets ख़त्म कर सकता है; एक default static client DNS बदलाव चूक सकता है। Factory handlers को pool और recycle करता है और resilience वाले named या typed clients देता है।",
        hg: "Har call par naya HttpClient sockets khatam kar sakta hai; ek default static client DNS badlaav chook sakta hai. Factory handlers ko pool aur recycle karta hai aur resilience wale named ya typed clients deta hai."
      },
      explain: {
        en: "<ul>\n<li>The expensive part is the <code>HttpMessageHandler</code> (connection pool), not <code>HttpClient</code> itself. Disposing a client per request leaves closed connections in TIME_WAIT, so under load you run out of ports (socket exhaustion; Day 3 trap).</li>\n<li>A single long-lived client avoids that but keeps connections for ever, so a DNS change (blue/green, failover) can be ignored. Another option without DI: a shared client with <code>SocketsHttpHandler.PooledConnectionLifetime</code> set (Day 8).</li>\n<li><b>IHttpClientFactory</b> rotates handlers (default lifetime two minutes), centralises configuration (<code>BaseAddress</code>, headers) and lets you add <code>DelegatingHandler</code>s (logging, auth token) and resilience.</li>\n<li><b>Named</b> client: <code>CreateClient(\"billing\")</code> (magic strings). <b>Typed</b> client: a class with an <code>HttpClient</code> constructor parameter, registered with <code>AddHttpClient&lt;T&gt;()</code>; testable and the usual choice.</li>\n<li>Traps: do not inject a typed client into a singleton and keep it for hours (it holds one handler); do not dispose the injected <code>HttpClient</code> yourself.</li>\n<li>Follow-up: \"How do you unit test code that calls HTTP?\" — typed client + a fake <code>HttpMessageHandler</code>, or integration tests against a test server.</li>\n</ul>",
        hi: "<ul>\n<li>महँगा हिस्सा <code>HttpMessageHandler</code> (connection pool) है, <code>HttpClient</code> ख़ुद नहीं। हर request पर client dispose करने से बंद connections TIME_WAIT में रह जाते हैं, इसलिए load में ports ख़त्म हो जाते हैं (socket exhaustion; Day 3 का trap)।</li>\n<li>एक लंबी उम्र वाला client इससे बचाता है पर connections हमेशा रखता है, इसलिए DNS बदलाव (blue/green, failover) अनदेखा हो सकता है। DI के बिना एक और विकल्प: <code>SocketsHttpHandler.PooledConnectionLifetime</code> set किया हुआ shared client (Day 8)।</li>\n<li><b>IHttpClientFactory</b> handlers को rotate करता है (default lifetime दो मिनट), configuration एक जगह रखता है (<code>BaseAddress</code>, headers) और <code>DelegatingHandler</code>s (logging, auth token) व resilience जोड़ने देता है।</li>\n<li><b>Named</b> client: <code>CreateClient(\"billing\")</code> (magic strings)। <b>Typed</b> client: constructor में <code>HttpClient</code> लेने वाली class, <code>AddHttpClient&lt;T&gt;()</code> से register; testable और आम चुनाव।</li>\n<li>Traps: typed client को singleton में inject करके घंटों मत रखो (वह एक handler पकड़े रहता है); inject हुआ <code>HttpClient</code> ख़ुद dispose मत करो।</li>\n<li>Follow-up: \"HTTP बुलाने वाले code का unit test कैसे?\" — typed client + fake <code>HttpMessageHandler</code>, या test server के विरुद्ध integration tests।</li>\n</ul>",
        hg: "<ul>\n<li>Mehnga hissa <code>HttpMessageHandler</code> (connection pool) hai, <code>HttpClient</code> khud nahi. Har request par client dispose karne se band connections TIME_WAIT mein reh jaate hain, isliye load mein ports khatam ho jaate hain (socket exhaustion; Day 3 ka trap).</li>\n<li>Ek lambi umr wala client isse bachata hai par connections hamesha rakhta hai, isliye DNS badlaav (blue/green, failover) andekha ho sakta hai. DI ke bina ek aur vikalp: <code>SocketsHttpHandler.PooledConnectionLifetime</code> set kiya hua shared client (Day 8).</li>\n<li><b>IHttpClientFactory</b> handlers ko rotate karta hai (default lifetime do minute), configuration ek jagah rakhta hai (<code>BaseAddress</code>, headers) aur <code>DelegatingHandler</code>s (logging, auth token) va resilience jodne deta hai.</li>\n<li><b>Named</b> client: <code>CreateClient(\"billing\")</code> (magic strings). <b>Typed</b> client: constructor mein <code>HttpClient</code> lene wali class, <code>AddHttpClient&lt;T&gt;()</code> se register; testable aur aam chunaav.</li>\n<li>Traps: typed client ko singleton mein inject karke ghanton mat rakho (woh ek handler pakde rehta hai); inject hua <code>HttpClient</code> khud dispose mat karo.</li>\n<li>Follow-up: \"HTTP bulane wale code ka unit test kaise?\" — typed client + fake <code>HttpMessageHandler</code>, ya test server ke viruddh integration tests.</li>\n</ul>"
      }
    },
    {
      id: "resilience-handler",
      depth: "detailed",
      q: "How do you make outgoing HTTP calls resilient in .NET?",
      answer: "Add AddStandardResilienceHandler (Microsoft.Extensions.Http.Resilience, .NET 8+): rate limiter, total timeout, retry, circuit breaker and attempt timeout. Disable retries for unsafe methods like POST unless the call is idempotent.",
      meaning: {
        hi: "AddStandardResilienceHandler जोड़ो (Microsoft.Extensions.Http.Resilience, .NET 8+): rate limiter, total timeout, retry, circuit breaker और attempt timeout। POST जैसे unsafe methods पर retries बंद करो जब तक call idempotent न हो।",
        hg: "AddStandardResilienceHandler jodo (Microsoft.Extensions.Http.Resilience, .NET 8+): rate limiter, total timeout, retry, circuit breaker aur attempt timeout. POST jaise unsafe methods par retries band karo jab tak call idempotent na ho."
      },
      explain: {
        en: "<ul>\n<li>Order, outermost to innermost: rate limiter (concurrency limit), total timeout (default 30 s), retry (3 retries, up to 4 calls, exponential backoff with jitter), circuit breaker, per-attempt timeout (default 10 s).</li>\n<li>Retries and the breaker react to 5xx, 408, 429 and network exceptions. Built on Polly; the package is <code>Microsoft.Extensions.Http.Resilience</code> (Day 3 mentioned it).</li>\n<li><b>Circuit breaker</b>: after too many failures it opens and fails fast for a short time, protecting the struggling dependency and your threads; then it lets a trial request through.</li>\n<li><b>Trap</b>: the defaults retry every HTTP method. A retried POST can create two orders; call <code>options.Retry.DisableForUnsafeHttpMethods()</code>, or make the operation idempotent (see the idempotency-key question).</li>\n<li>Add one resilience handler per client; do not stack several. Use <code>AddResilienceHandler</code> if you need a custom pipeline, and tune values from configuration rather than guessing.</li>\n<li>Follow-up: \"What is hedging?\" — <code>AddStandardHedgingHandler</code> sends a parallel request to another endpoint if the first is slow; it suits idempotent reads with several replicas.</li>\n</ul>",
        hi: "<ul>\n<li>क्रम, सबसे बाहर से अंदर: rate limiter (concurrency limit), total timeout (default 30 s), retry (3 retries, यानी ज़्यादा से ज़्यादा 4 calls, jitter के साथ exponential backoff), circuit breaker, per-attempt timeout (default 10 s)।</li>\n<li>Retries और breaker 5xx, 408, 429 और network exceptions पर प्रतिक्रिया करते हैं। Polly पर बना है; package <code>Microsoft.Extensions.Http.Resilience</code> है (Day 3 ने इसका ज़िक्र किया था)।</li>\n<li><b>Circuit breaker</b>: बहुत failures के बाद वह खुल जाता है और थोड़ी देर तुरंत fail करता है, जिससे जूझती dependency और आपके threads बचते हैं; फिर एक trial request जाने देता है।</li>\n<li><b>Trap</b>: defaults हर HTTP method को retry करते हैं। retry हुआ POST दो orders बना सकता है; <code>options.Retry.DisableForUnsafeHttpMethods()</code> बुलाओ, या operation को idempotent बनाओ (idempotency-key वाला सवाल देखो)।</li>\n<li>हर client पर एक resilience handler जोड़ो; कई मत जमाओ। custom pipeline चाहिए तो <code>AddResilienceHandler</code> use करो, और values अंदाज़े से नहीं, configuration से tune करो।</li>\n<li>Follow-up: \"hedging क्या है?\" — <code>AddStandardHedgingHandler</code> पहला endpoint धीमा हो तो दूसरे endpoint पर parallel request भेजता है; कई replicas वाले idempotent reads के लिए ठीक है।</li>\n</ul>",
        hg: "<ul>\n<li>Kram, sabse baahar se andar: rate limiter (concurrency limit), total timeout (default 30 s), retry (3 retries, yaani zyaada se zyaada 4 calls, jitter ke saath exponential backoff), circuit breaker, per-attempt timeout (default 10 s).</li>\n<li>Retries aur breaker 5xx, 408, 429 aur network exceptions par pratikriya karte hain. Polly par bana hai; package <code>Microsoft.Extensions.Http.Resilience</code> hai (Day 3 ne iska zikr kiya tha).</li>\n<li><b>Circuit breaker</b>: bahut failures ke baad woh khul jaata hai aur thodi der turant fail karta hai, jisse joojhti dependency aur aapke threads bachte hain; phir ek trial request jaane deta hai.</li>\n<li><b>Trap</b>: defaults har HTTP method ko retry karte hain. Retry hua POST do orders bana sakta hai; <code>options.Retry.DisableForUnsafeHttpMethods()</code> bulao, ya operation ko idempotent banao (idempotency-key wala sawaal dekho).</li>\n<li>Har client par ek resilience handler jodo; kai mat jamao. Custom pipeline chahiye to <code>AddResilienceHandler</code> use karo, aur values andaaze se nahi, configuration se tune karo.</li>\n<li>Follow-up: \"hedging kya hai?\" — <code>AddStandardHedgingHandler</code> pehla endpoint dheema ho to doosre endpoint par parallel request bhejta hai; kai replicas wale idempotent reads ke liye theek hai.</li>\n</ul>"
      }
    },
    {
      id: "openapi-vs-swashbuckle",
      depth: "detailed",
      q: "How do you document a Web API in .NET 9 and 10: built-in OpenAPI or Swashbuckle?",
      answer: "Use built-in Microsoft.AspNetCore.OpenApi: AddOpenApi and MapOpenApi serve the JSON document. A UI such as Swagger UI or Scalar is separate; Swashbuckle remains an option but is no longer in the template.",
      meaning: {
        hi: "Built-in Microsoft.AspNetCore.OpenApi use करो: AddOpenApi और MapOpenApi JSON document देते हैं। Swagger UI या Scalar जैसी UI अलग है; Swashbuckle अब भी विकल्प है पर template में नहीं है।",
        hg: "Built-in Microsoft.AspNetCore.OpenApi use karo: AddOpenApi aur MapOpenApi JSON document dete hain. Swagger UI ya Scalar jaisi UI alag hai; Swashbuckle ab bhi vikalp hai par template mein nahi hai."
      },
      explain: {
        en: "<ul>\n<li>Built in since .NET 9: package <code>Microsoft.AspNetCore.OpenApi</code>; <code>AddOpenApi()</code> + <code>MapOpenApi()</code> give <code>/openapi/v1.json</code>. .NET 10 generates OpenAPI 3.1 documents by default. Customise with document and operation transformers.</li>\n<li>The framework gives the <b>document only</b>. For an interactive page add Swagger UI or Scalar (a separate package) pointing at that JSON; many teams keep it in Development only.</li>\n<li><b>Swashbuckle</b> generated the document and bundled Swagger UI; the Web API template used it up to .NET 8 and stopped including it from .NET 9. It still works, and teams keep it for existing filters and extensions. Check current maintenance status of any third-party package before choosing it.</li>\n<li><b>Build-time generation</b>: add <code>Microsoft.Extensions.ApiDescription.Server</code> to write the document during build, useful for client generation and contract checks in CI.</li>\n<li>Quality: declare responses (<code>Produces</code>, <code>ProducesResponseType</code>) and ProblemDetails for errors, otherwise generated clients only know the 200 case.</li>\n<li>TL angle: treat the OpenAPI file as the contract; diff it in CI to flag breaking changes, and use it to generate clients and Postman collections.</li>\n</ul>",
        hi: "<ul>\n<li>.NET 9 से built-in: package <code>Microsoft.AspNetCore.OpenApi</code>; <code>AddOpenApi()</code> + <code>MapOpenApi()</code> से <code>/openapi/v1.json</code> मिलता है। .NET 10 default में OpenAPI 3.1 documents बनाता है। document और operation transformers से customise करो।</li>\n<li>Framework सिर्फ़ <b>document</b> देता है। interactive page के लिए उसी JSON की ओर इशारा करता Swagger UI या Scalar (अलग package) जोड़ो; कई teams उसे सिर्फ़ Development में रखती हैं।</li>\n<li><b>Swashbuckle</b> document बनाता था और Swagger UI साथ लाता था; Web API template ने .NET 8 तक इसे use किया और .NET 9 से शामिल करना बंद किया। यह अब भी चलता है, और teams मौजूदा filters और extensions के लिए इसे रखती हैं। कोई भी third-party package चुनने से पहले उसकी maintenance की मौजूदा स्थिति देखो।</li>\n<li><b>Build-time generation</b>: build के दौरान document लिखने के लिए <code>Microsoft.Extensions.ApiDescription.Server</code> जोड़ो; client generation और CI में contract checks के लिए काम का।</li>\n<li>Quality: responses declare करो (<code>Produces</code>, <code>ProducesResponseType</code>) और errors के लिए ProblemDetails, वरना generated clients सिर्फ़ 200 case जानते हैं।</li>\n<li>TL angle: OpenAPI file को contract मानो; breaking changes पकड़ने के लिए CI में उसका diff करो, और clients व Postman collections generate करने में use करो।</li>\n</ul>",
        hg: "<ul>\n<li>.NET 9 se built-in: package <code>Microsoft.AspNetCore.OpenApi</code>; <code>AddOpenApi()</code> + <code>MapOpenApi()</code> se <code>/openapi/v1.json</code> milta hai. .NET 10 default mein OpenAPI 3.1 documents banata hai. Document aur operation transformers se customise karo.</li>\n<li>Framework sirf <b>document</b> deta hai. Interactive page ke liye usi JSON ki taraf ishaara karta Swagger UI ya Scalar (alag package) jodo; kai teams use sirf Development mein rakhti hain.</li>\n<li><b>Swashbuckle</b> document banata tha aur Swagger UI saath laata tha; Web API template ne .NET 8 tak ise use kiya aur .NET 9 se shaamil karna band kiya. Yeh ab bhi chalta hai, aur teams maujooda filters aur extensions ke liye ise rakhti hain. Koi bhi third-party package chunne se pehle uski maintenance ki maujooda sthiti dekho.</li>\n<li><b>Build-time generation</b>: build ke dauraan document likhne ke liye <code>Microsoft.Extensions.ApiDescription.Server</code> jodo; client generation aur CI mein contract checks ke kaam ka.</li>\n<li>Quality: responses declare karo (<code>Produces</code>, <code>ProducesResponseType</code>) aur errors ke liye ProblemDetails, warna generated clients sirf 200 case jaante hain.</li>\n<li>TL angle: OpenAPI file ko contract maano; breaking changes pakadne ke liye CI mein uska diff karo, aur clients va Postman collections generate karne mein use karo.</li>\n</ul>"
      }
    },
    {
      id: "idempotency-key",
      depth: "detailed",
      q: "How do you make a POST safe to retry, for example a payment?",
      answer: "Have the client send an Idempotency-Key header; the server stores the key with the result and returns the stored response for a repeat. Without it, retries can create duplicates.",
      meaning: {
        hi: "Client एक Idempotency-Key header भेजे; server key को नतीजे के साथ रखता है और दोहराने पर रखा हुआ response लौटाता है। इसके बिना retries से duplicates बन सकते हैं।",
        hg: "Client ek Idempotency-Key header bheje; server key ko nateeje ke saath rakhta hai aur dohrane par rakha hua response lautata hai. Iske bina retries se duplicates ban sakte hain."
      },
      explain: {
        en: "<ul>\n<li>Problem: the client times out, retries, and the first request had in fact succeeded: two payments. POST is not idempotent, and retry handlers cannot tell.</li>\n<li>Pattern: client generates a unique key per logical operation; server checks a store (database table with a unique index, or a cache) for the key: seen before gives the saved status and body; new key processes the request and saves the outcome atomically.</li>\n<li>Details: scope keys per client, give them a retention period (for example 24 hours), return 409 or 422 if the same key arrives with a different body, and handle two concurrent requests with the same key (unique constraint or lock).</li>\n<li>The <code>Idempotency-Key</code> header is a widely used convention (several payment APIs, and an IETF draft), not a finished standard.</li>\n<li>Alternatives: use PUT with a client-chosen id (<code>PUT /orders/{guid}</code>), or a natural unique business key with a unique index.</li>\n<li>TL angle: decide this at design time for every payment-like POST, and agree that the resilience handler does not retry unsafe methods unless the endpoint supports keys.</li>\n</ul>",
        hi: "<ul>\n<li>समस्या: client timeout होकर retry करता है, जबकि पहली request असल में सफल हो चुकी थी: दो payments। POST idempotent नहीं है, और retry handlers यह फ़र्क नहीं जान सकते।</li>\n<li>Pattern: client हर logical operation के लिए अनोखी key बनाता है; server key के लिए store (unique index वाली database table, या cache) देखता है: पहले देखी हो तो saved status और body लौटाता है; नई key हो तो request process करके नतीजा atomically save करता है।</li>\n<li>Details: keys को per client scope करो, retention period दो (जैसे 24 घंटे), वही key अलग body के साथ आए तो 409 या 422 लौटाओ, और एक ही key की दो concurrent requests संभालो (unique constraint या lock)।</li>\n<li><code>Idempotency-Key</code> header व्यापक रूप से use होने वाली convention है (कई payment APIs, और एक IETF draft), पूरा हो चुका standard नहीं।</li>\n<li>विकल्प: client की चुनी id के साथ PUT (<code>PUT /orders/{guid}</code>), या unique index वाली natural unique business key।</li>\n<li>TL angle: हर payment जैसे POST के लिए design के समय यह तय करो, और मानो कि endpoint keys सपोर्ट न करे तो resilience handler unsafe methods retry नहीं करेगा।</li>\n</ul>",
        hg: "<ul>\n<li>Samasya: client timeout hokar retry karta hai, jabki pehli request asal mein safal ho chuki thi: do payments. POST idempotent nahi hai, aur retry handlers yeh farq nahi jaan sakte.</li>\n<li>Pattern: client har logical operation ke liye anokhi key banata hai; server key ke liye store (unique index wali database table, ya cache) dekhta hai: pehle dekhi ho to saved status aur body lautata hai; nayi key ho to request process karke nateeja atomically save karta hai.</li>\n<li>Details: keys ko per client scope karo, retention period do (jaise 24 ghante), wahi key alag body ke saath aaye to 409 ya 422 lautao, aur ek hi key ki do concurrent requests sambhalo (unique constraint ya lock).</li>\n<li><code>Idempotency-Key</code> header vyapak roop se use hone wali convention hai (kai payment APIs, aur ek IETF draft), poora ho chuka standard nahi.</li>\n<li>Vikalp: client ki chuni id ke saath PUT (<code>PUT /orders/{guid}</code>), ya unique index wali natural unique business key.</li>\n<li>TL angle: har payment jaise POST ke liye design ke samay yeh tay karo, aur maano ki endpoint keys support na kare to resilience handler unsafe methods retry nahi karega.</li>\n</ul>"
      }
    }
  ],
  puzzles: [
    {
      id: "created-at-route-location",
      frameworks: [
        "aspnetcore"
      ],
      packages: [
        "Microsoft.AspNetCore.TestHost"
      ],
      src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nvar app = builder.Build();\n\napp.MapGet(\"/orders/{id:int}\", (int id) => Results.Ok(new { id })).WithName(\"GetOrder\");\napp.MapPost(\"/orders\", () => Results.CreatedAtRoute(\"GetOrder\", new { id = 42 }, new { id = 42 }));\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nvar created = await client.PostAsync(\"/orders\", null);\nConsole.WriteLine($\"{(int)created.StatusCode} {created.Headers.Location}\");\n\nvar followed = await client.GetAsync(created.Headers.Location!);\nConsole.WriteLine((int)followed.StatusCode);\nawait app.StopAsync();",
      answer: "201 http://localhost/orders/42\n200",
      explain: {
        en: "<p><code>Results.CreatedAtRoute</code> returns <b>201 Created</b> and builds the <code>Location</code> header from the named route <code>GetOrder</code> with <code>id = 42</code>. The TestServer's base address is <code>http://localhost</code>, so the header is the absolute URL <code>http://localhost/orders/42</code>. The client can follow it with a GET, and that answers <b>200</b>. This is the standard \"create, then tell the client where it lives\" pattern; controllers use <code>CreatedAtAction</code> or <code>CreatedAtRoute</code> the same way.</p>",
        hi: "<p><code>Results.CreatedAtRoute</code> <b>201 Created</b> लौटाता है और named route <code>GetOrder</code> से <code>id = 42</code> के साथ <code>Location</code> header बनाता है। TestServer का base address <code>http://localhost</code> है, इसलिए header पूरा URL <code>http://localhost/orders/42</code> बनता है। Client उसे GET से follow कर सकता है, और वह <b>200</b> देता है। यही \"बनाओ, फिर client को बताओ वह कहाँ है\" का standard pattern है; controllers में <code>CreatedAtAction</code> या <code>CreatedAtRoute</code> इसी तरह चलते हैं।</p>",
        hg: "<p><code>Results.CreatedAtRoute</code> <b>201 Created</b> lautata hai aur named route <code>GetOrder</code> se <code>id = 42</code> ke saath <code>Location</code> header banata hai. TestServer ka base address <code>http://localhost</code> hai, isliye header poora URL <code>http://localhost/orders/42</code> banta hai. Client use GET se follow kar sakta hai, aur woh <b>200</b> deta hai. Yahi \"banao, phir client ko batao woh kahan hai\" ka standard pattern hai; controllers mein <code>CreatedAtAction</code> ya <code>CreatedAtRoute</code> isi tarah chalte hain.</p>"
      }
    },
    {
      id: "apicontroller-auto-400",
      frameworks: [
        "aspnetcore"
      ],
      packages: [
        "Microsoft.AspNetCore.TestHost"
      ],
      src: "using System.ComponentModel.DataAnnotations;\nusing System.Net.Http.Json;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddControllers();\nvar app = builder.Build();\napp.MapControllers();\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nvar bad = await client.PostAsJsonAsync(\"/api/products\", new { Name = \"\", Price = -5 });\nConsole.WriteLine((int)bad.StatusCode + \" \" + bad.Content.Headers.ContentType?.MediaType);\nvar problem = await bad.Content.ReadFromJsonAsync<ValidationProblemDetails>();\nConsole.WriteLine(string.Join(\",\", problem!.Errors.Keys.Order()) + \" | \" + problem.Title);\n\nvar good = await client.PostAsJsonAsync(\"/api/products\", new { Name = \"Tea\", Price = 5 });\nConsole.WriteLine((int)good.StatusCode);\nawait app.StopAsync();\n\n[ApiController]\n[Route(\"api/[controller]\")]\npublic class ProductsController : ControllerBase\n{\n    [HttpPost]\n    public IActionResult Create(NewProduct product) => Ok();   // no ModelState check\n}\n\npublic class NewProduct\n{\n    [Required, MinLength(2)] public string Name { get; set; } = \"\";\n    [Range(1, 1000)] public int Price { get; set; }\n}",
      answer: "400 application/problem+json\nName,Price | One or more validation errors occurred.\n200",
      explain: {
        en: "<p>The action body never checks <code>ModelState</code>, yet the bad request gets <b>400</b>: <code>[ApiController]</code> adds a filter that stops invalid models before the action runs. The body is <code>ValidationProblemDetails</code> (media type <code>application/problem+json</code>) whose <code>errors</code> dictionary has one key per bad field: <code>Name</code> (empty fails <code>MinLength(2)</code> and <code>Required</code>) and <code>Price</code> (-5 is outside 1..1000). The keys are sorted before printing so the output does not depend on dictionary order. The valid request reaches the action and returns <b>200</b>.</p>",
        hi: "<p>Action body कभी <code>ModelState</code> check नहीं करती, फिर भी ग़लत request को <b>400</b> मिलता है: <code>[ApiController]</code> एक filter जोड़ता है जो invalid models को action चलने से पहले रोक देता है। Body <code>ValidationProblemDetails</code> है (media type <code>application/problem+json</code>) जिसके <code>errors</code> dictionary में हर ग़लत field की एक key है: <code>Name</code> (ख़ाली string <code>MinLength(2)</code> और <code>Required</code> में fail) और <code>Price</code> (-5, 1..1000 से बाहर)। Keys print से पहले sort की गई हैं ताकि output dictionary के order पर निर्भर न रहे। सही request action तक पहुँचती है और <b>200</b> लौटाती है।</p>",
        hg: "<p>Action body kabhi <code>ModelState</code> check nahi karti, phir bhi galat request ko <b>400</b> milta hai: <code>[ApiController]</code> ek filter jodta hai jo invalid models ko action chalne se pehle rok deta hai. Body <code>ValidationProblemDetails</code> hai (media type <code>application/problem+json</code>) jiske <code>errors</code> dictionary mein har galat field ki ek key hai: <code>Name</code> (khaali string <code>MinLength(2)</code> aur <code>Required</code> mein fail) aur <code>Price</code> (-5, 1..1000 se baahar). Keys print se pehle sort ki gayi hain taaki output dictionary ke order par nirbhar na rahe. Sahi request action tak pahunchti hai aur <b>200</b> lautati hai.</p>"
      }
    },
    {
      id: "exception-handler-problem-details",
      frameworks: [
        "aspnetcore"
      ],
      packages: [
        "Microsoft.AspNetCore.TestHost"
      ],
      src: "using System.Net.Http.Json;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Diagnostics;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddProblemDetails();\nbuilder.Services.AddExceptionHandler<MissingHandler>();\nvar app = builder.Build();\n\napp.UseExceptionHandler();   // this is what invokes MissingHandler\napp.MapGet(\"/a\", () => { throw new KeyNotFoundException(\"no such order\"); return \"a\"; });\napp.MapGet(\"/b\", () => { throw new InvalidOperationException(\"secret detail\"); return \"b\"; });\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\nforeach (var path in new[] { \"/a\", \"/b\" })\n{\n    var response = await client.GetAsync(path);\n    var problem = await response.Content.ReadFromJsonAsync<ProblemDetails>();\n    Console.WriteLine($\"{path} {(int)response.StatusCode} {problem!.Title}\");\n}\nawait app.StopAsync();\n\npublic sealed class MissingHandler(IProblemDetailsService problems) : IExceptionHandler\n{\n    public async ValueTask<bool> TryHandleAsync(HttpContext context, Exception exception, CancellationToken ct)\n    {\n        if (exception is not KeyNotFoundException) return false;   // pass it on\n        context.Response.StatusCode = StatusCodes.Status404NotFound;\n        return await problems.TryWriteAsync(new ProblemDetailsContext\n        {\n            HttpContext = context,\n            ProblemDetails = { Status = 404, Title = \"Not found\" }\n        });\n    }\n}",
      answer: "/a 404 Not found\n/b 500 An error occurred while processing your request.",
      explain: {
        en: "<p><code>UseExceptionHandler()</code> catches the exception and <b>invokes</b> the registered <code>IExceptionHandler</code>. For <code>/a</code> the handler recognises <code>KeyNotFoundException</code>, sets 404 and writes ProblemDetails with the title \"Not found\"; returning <code>true</code> stops further handling. For <code>/b</code> the handler returns <code>false</code>, so the middleware falls back to what <code>AddProblemDetails</code> provides: a generic <b>500</b> ProblemDetails with the framework's default title. The message \"secret detail\" never reaches the client. Remove the <code>UseExceptionHandler()</code> line and the handler would never run.</p>",
        hi: "<p><code>UseExceptionHandler()</code> exception पकड़ता है और registered <code>IExceptionHandler</code> को <b>बुलाता</b> है। <code>/a</code> के लिए handler <code>KeyNotFoundException</code> पहचानता है, 404 set करता है और title \"Not found\" के साथ ProblemDetails लिखता है; <code>true</code> लौटाने पर आगे की handling रुक जाती है। <code>/b</code> के लिए handler <code>false</code> लौटाता है, इसलिए middleware उस पर लौटता है जो <code>AddProblemDetails</code> देता है: framework के default title वाला general <b>500</b> ProblemDetails। \"secret detail\" message client तक कभी नहीं पहुँचता। <code>UseExceptionHandler()</code> वाली line हटा दो तो handler कभी नहीं चलेगा।</p>",
        hg: "<p><code>UseExceptionHandler()</code> exception pakadta hai aur registered <code>IExceptionHandler</code> ko <b>bulata</b> hai. <code>/a</code> ke liye handler <code>KeyNotFoundException</code> pehchanta hai, 404 set karta hai aur title \"Not found\" ke saath ProblemDetails likhta hai; <code>true</code> lautane par aage ki handling ruk jaati hai. <code>/b</code> ke liye handler <code>false</code> lautata hai, isliye middleware us par lautta hai jo <code>AddProblemDetails</code> deta hai: framework ke default title wala general <b>500</b> ProblemDetails. \"secret detail\" message client tak kabhi nahi pahunchta. <code>UseExceptionHandler()</code> wali line hata do to handler kabhi nahi chalega.</p>"
      }
    },
    {
      id: "rate-limit-429",
      frameworks: [
        "aspnetcore"
      ],
      packages: [
        "Microsoft.AspNetCore.TestHost"
      ],
      src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.RateLimiting;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nforeach (var setStatus in new[] { true, false })\n{\n    var builder = WebApplication.CreateBuilder();\n    builder.Logging.ClearProviders();\n    builder.WebHost.UseTestServer();\n    builder.Services.AddRateLimiter(o =>\n    {\n        if (setStatus) o.RejectionStatusCode = StatusCodes.Status429TooManyRequests;\n        o.AddFixedWindowLimiter(\"fixed\", x =>\n        {\n            x.PermitLimit = 2;\n            x.Window = TimeSpan.FromHours(1);   // long window: no timing dependence\n            x.QueueLimit = 0;\n        });\n    });\n    var app = builder.Build();\n    app.UseRateLimiter();\n    app.MapGet(\"/limited\", () => \"ok\").RequireRateLimiting(\"fixed\");\n    app.MapGet(\"/free\", () => \"free\");\n\n    await app.StartAsync();\n    var client = app.GetTestClient();\n    var codes = new List<int>();\n    for (var i = 0; i < 4; i++) codes.Add((int)(await client.GetAsync(\"/limited\")).StatusCode);\n    codes.Add((int)(await client.GetAsync(\"/free\")).StatusCode);\n    Console.WriteLine($\"{(setStatus ? \"429 set\" : \"default\")}: {string.Join(\" \", codes)}\");\n    await app.StopAsync();\n}",
      answer: "429 set: 200 200 429 429 200\ndefault: 200 200 503 503 200",
      explain: {
        en: "<p>The fixed window allows <b>2</b> permits per (one-hour) window, with no queue. Requests 1 and 2 get <b>200</b>; requests 3 and 4 are rejected. The last request goes to <code>/free</code>, which has no <code>RequireRateLimiting</code>, so it is not limited: <b>200</b>. The two runs differ only in <code>RejectionStatusCode</code>: set to 429 you get 429; left alone the middleware rejects with its default <b>503 Service Unavailable</b>, a classic surprise. The one-hour window makes the result independent of timing.</p>",
        hi: "<p>Fixed window (एक घंटे की) हर window में <b>2</b> permits देती है, queue नहीं। Requests 1 और 2 को <b>200</b> मिलता है; requests 3 और 4 reject होती हैं। आख़िरी request <code>/free</code> पर जाती है, जिसमें <code>RequireRateLimiting</code> नहीं है, इसलिए वह limit नहीं होती: <b>200</b>। दोनों runs में फ़र्क सिर्फ़ <code>RejectionStatusCode</code> का है: 429 set करो तो 429 मिलता है; न छेड़ो तो middleware अपने default <b>503 Service Unavailable</b> से reject करता है, एक पुराना आश्चर्य। एक घंटे की window से नतीजा timing पर निर्भर नहीं रहता।</p>",
        hg: "<p>Fixed window (ek ghante ki) har window mein <b>2</b> permits deti hai, queue nahi. Requests 1 aur 2 ko <b>200</b> milta hai; requests 3 aur 4 reject hoti hain. Aakhri request <code>/free</code> par jaati hai, jismein <code>RequireRateLimiting</code> nahi hai, isliye woh limit nahi hoti: <b>200</b>. Dono runs mein farq sirf <code>RejectionStatusCode</code> ka hai: 429 set karo to 429 milta hai; na chhedo to middleware apne default <b>503 Service Unavailable</b> se reject karta hai, ek purana aashcharya. Ek ghante ki window se nateeja timing par nirbhar nahi rehta.</p>"
      }
    },
    {
      id: "cors-preflight-headers",
      frameworks: [
        "aspnetcore"
      ],
      packages: [
        "Microsoft.AspNetCore.TestHost"
      ],
      src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddCors(o => o.AddPolicy(\"shop\", p => p\n    .WithOrigins(\"https://shop.example\")\n    .WithMethods(\"GET\", \"PUT\")\n    .WithHeaders(\"content-type\")));\nvar app = builder.Build();\napp.UseCors(\"shop\");\napp.MapGet(\"/items\", () => \"items\");\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nforeach (var origin in new[] { \"https://shop.example\", \"https://evil.example\" })\n{\n    var preflight = new HttpRequestMessage(HttpMethod.Options, \"/items\");\n    preflight.Headers.Add(\"Origin\", origin);\n    preflight.Headers.Add(\"Access-Control-Request-Method\", \"PUT\");\n    var r = await client.SendAsync(preflight);\n    r.Headers.TryGetValues(\"Access-Control-Allow-Origin\", out var allowOrigin);\n    r.Headers.TryGetValues(\"Access-Control-Allow-Methods\", out var allowMethods);\n    Console.WriteLine($\"{(int)r.StatusCode} origin={allowOrigin?.FirstOrDefault() ?? \"-\"} methods={allowMethods?.FirstOrDefault() ?? \"-\"}\");\n}\n\nvar simple = new HttpRequestMessage(HttpMethod.Get, \"/items\");\nsimple.Headers.Add(\"Origin\", \"https://evil.example\");\nvar s = await client.SendAsync(simple);\nConsole.WriteLine($\"{(int)s.StatusCode} {await s.Content.ReadAsStringAsync()} {s.Headers.Contains(\"Access-Control-Allow-Origin\")}\");\nawait app.StopAsync();",
      answer: "204 origin=https://shop.example methods=GET,PUT\n204 origin=- methods=-\n200 items False",
      explain: {
        en: "<p>A browser sends a <b>preflight</b> (<code>OPTIONS</code> with <code>Origin</code> and <code>Access-Control-Request-Method</code>) before a PUT. For the allowed origin the CORS middleware answers <b>204</b> itself with <code>Access-Control-Allow-Origin</code> and the allowed methods <code>GET,PUT</code>. For <code>evil.example</code> it also answers 204 but adds <b>no</b> allow headers, so a browser would refuse to continue. The last line is the key lesson: a plain GET from the disallowed origin still <b>runs and returns 200 with the body</b>; there is just no <code>Access-Control-Allow-Origin</code> header, so only the <i>browser</i> hides the response from the page. CORS is not a server-side access control.</p>",
        hi: "<p>Browser PUT से पहले <b>preflight</b> भेजता है (<code>Origin</code> और <code>Access-Control-Request-Method</code> के साथ <code>OPTIONS</code>)। allowed origin के लिए CORS middleware ख़ुद <b>204</b> से जवाब देता है, <code>Access-Control-Allow-Origin</code> और allowed methods <code>GET,PUT</code> के साथ। <code>evil.example</code> के लिए भी वह 204 देता है पर कोई allow header <b>नहीं</b> जोड़ता, इसलिए browser आगे बढ़ने से मना कर देगा। आख़िरी line असली सबक है: disallowed origin से आया सादा GET फिर भी <b>चलता है और body के साथ 200 लौटाता है</b>; बस <code>Access-Control-Allow-Origin</code> header नहीं होता, इसलिए सिर्फ़ <i>browser</i> response को page से छुपाता है। CORS server-side access control नहीं है।</p>",
        hg: "<p>Browser PUT se pehle <b>preflight</b> bhejta hai (<code>Origin</code> aur <code>Access-Control-Request-Method</code> ke saath <code>OPTIONS</code>). Allowed origin ke liye CORS middleware khud <b>204</b> se jawab deta hai, <code>Access-Control-Allow-Origin</code> aur allowed methods <code>GET,PUT</code> ke saath. <code>evil.example</code> ke liye bhi woh 204 deta hai par koi allow header <b>nahi</b> jodta, isliye browser aage badhne se mana kar dega. Aakhri line asli sabak hai: disallowed origin se aaya saada GET phir bhi <b>chalta hai aur body ke saath 200 lautata hai</b>; bas <code>Access-Control-Allow-Origin</code> header nahi hota, isliye sirf <i>browser</i> response ko page se chhupata hai. CORS server-side access control nahi hai.</p>"
      }
    },
    {
      id: "etag-304-second-request",
      frameworks: [
        "aspnetcore"
      ],
      packages: [
        "Microsoft.AspNetCore.TestHost"
      ],
      src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nvar app = builder.Build();\n\nvar version = 1;\napp.MapGet(\"/doc\", (HttpContext ctx) =>\n{\n    var etag = $\"\\\"v{version}\\\"\";\n    ctx.Response.Headers.ETag = etag;\n    if (ctx.Request.Headers.IfNoneMatch == etag) return Results.StatusCode(StatusCodes.Status304NotModified);\n    return Results.Text($\"body v{version}\");\n});\napp.MapPut(\"/doc\", () => { version++; return Results.NoContent(); });\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nvar first = await client.GetAsync(\"/doc\");\nvar tag = first.Headers.ETag!.Tag;\nConsole.WriteLine($\"{(int)first.StatusCode} {tag} {await first.Content.ReadAsStringAsync()}\");\n\nvar second = new HttpRequestMessage(HttpMethod.Get, \"/doc\");\nsecond.Headers.TryAddWithoutValidation(\"If-None-Match\", tag);\nvar r2 = await client.SendAsync(second);\nConsole.WriteLine($\"{(int)r2.StatusCode} length={(await r2.Content.ReadAsStringAsync()).Length}\");\n\nawait client.PutAsync(\"/doc\", null);   // the document changes: version becomes 2\nvar third = new HttpRequestMessage(HttpMethod.Get, \"/doc\");\nthird.Headers.TryAddWithoutValidation(\"If-None-Match\", tag);\nvar r3 = await client.SendAsync(third);\nConsole.WriteLine($\"{(int)r3.StatusCode} {r3.Headers.ETag!.Tag} {await r3.Content.ReadAsStringAsync()}\");\nawait app.StopAsync();",
      answer: "200 \"v1\" body v1\n304 length=0\n200 \"v2\" body v2",
      explain: {
        en: "<p>The first GET returns <b>200</b> with <code>ETag: \"v1\"</code> and the body. The second GET replays that tag in <code>If-None-Match</code>; the server sees it still matches the current version, so it answers <b>304 Not Modified</b> with an empty body (length 0): the client keeps its cached copy. After the PUT bumps the version to 2, the old tag no longer matches, so the third GET is a normal <b>200</b> with the new tag <code>\"v2\"</code> and the new body. ASP.NET Core does not generate API ETags for you; here the endpoint computes the tag from a version and compares headers itself.</p>",
        hi: "<p>पहला GET <b>200</b> लौटाता है, <code>ETag: \"v1\"</code> और body के साथ। दूसरा GET वही tag <code>If-None-Match</code> में दोहराता है; server देखता है कि वह अब भी मौजूदा version से मेल खाता है, इसलिए ख़ाली body (length 0) के साथ <b>304 Not Modified</b> देता है: client अपनी cached copy रखता है। PUT के version को 2 कर देने के बाद पुराना tag मेल नहीं खाता, इसलिए तीसरा GET नए tag <code>\"v2\"</code> और नई body के साथ सामान्य <b>200</b> है। ASP.NET Core API के लिए ETag अपने-आप नहीं बनाता; यहाँ endpoint version से tag बनाता है और headers ख़ुद compare करता है।</p>",
        hg: "<p>Pehla GET <b>200</b> lautata hai, <code>ETag: \"v1\"</code> aur body ke saath. Doosra GET wahi tag <code>If-None-Match</code> mein dohrata hai; server dekhta hai ki woh ab bhi maujooda version se match karta hai, isliye khaali body (length 0) ke saath <b>304 Not Modified</b> deta hai: client apni cached copy rakhta hai. PUT ke version ko 2 kar dene ke baad purana tag match nahi karta, isliye teesra GET naye tag <code>\"v2\"</code> aur nayi body ke saath saamanya <b>200</b> hai. ASP.NET Core API ke liye ETag apne-aap nahi banata; yahan endpoint version se tag banata hai aur headers khud compare karta hai.</p>"
      }
    },
    {
      id: "put-post-idempotency",
      frameworks: [
        "aspnetcore"
      ],
      packages: [
        "Microsoft.AspNetCore.TestHost"
      ],
      src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nvar app = builder.Build();\n\nvar orders = new List<string>();\nvar profileName = \"none\";\n\napp.MapPost(\"/orders\", (string item) =>\n{\n    orders.Add(item);\n    return Results.Created($\"/orders/{orders.Count}\", null);\n});\napp.MapPut(\"/profile\", (string name) =>\n{\n    profileName = name;\n    return Results.NoContent();\n});\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nfor (var i = 0; i < 3; i++)\n{\n    await client.PostAsync(\"/orders?item=tea\", null);\n    await client.PutAsync(\"/profile?name=asha\", null);\n}\nConsole.WriteLine($\"orders={orders.Count} profile={profileName}\");\n\nvar again = await client.PostAsync(\"/orders?item=tea\", null);\nConsole.WriteLine(again.Headers.Location);\nawait app.StopAsync();",
      answer: "orders=3 profile=asha\n/orders/4",
      explain: {
        en: "<p>Each loop sends one POST and one PUT, three times. <b>PUT</b> sets the profile name to the same value every time, so the end state is one value: <code>asha</code>. That is <b>idempotent</b>. <b>POST</b> appends a new order each time, so three calls leave three orders. A fourth POST creates order number 4, and its <code>Location</code> is <code>/orders/4</code> (a relative URL, because the handler passed a relative string). This is why a retry handler must not blindly retry a POST: the repeated call is a new order, not the same one.</p>",
        hi: "<p>हर loop एक POST और एक PUT भेजता है, तीन बार। <b>PUT</b> हर बार profile name को वही value देता है, इसलिए अंतिम state एक ही value है: <code>asha</code>। यह <b>idempotent</b> है। <b>POST</b> हर बार नया order जोड़ता है, इसलिए तीन calls के बाद तीन orders रहते हैं। चौथा POST order number 4 बनाता है, और उसका <code>Location</code> <code>/orders/4</code> है (relative URL, क्योंकि handler ने relative string दी)। इसीलिए retry handler को POST अंधाधुंध retry नहीं करना चाहिए: दोहराई गई call वही order नहीं, एक नया order है।</p>",
        hg: "<p>Har loop ek POST aur ek PUT bhejta hai, teen baar. <b>PUT</b> har baar profile name ko wahi value deta hai, isliye antim state ek hi value hai: <code>asha</code>. Yeh <b>idempotent</b> hai. <b>POST</b> har baar naya order jodta hai, isliye teen calls ke baad teen orders rehte hain. Chautha POST order number 4 banata hai, aur uska <code>Location</code> <code>/orders/4</code> hai (relative URL, kyunki handler ne relative string di). Isiliye retry handler ko POST andhadhund retry nahi karna chahiye: dohrayi gayi call wahi order nahi, ek naya order hai.</p>"
      }
    }
  ],
  revision: {
    en: [
      "<b>URL = noun, verb = action</b>: GET reads, POST creates, PUT replaces, DELETE removes. GET is safe; GET, PUT and DELETE are idempotent; POST is not.",
      "<b>Status codes</b>: 201 + <code>Location</code> after create, 204 no body, 400 bad input, 404 missing, 409 clash. Never hide an error in a 200.",
      "<b>Validation</b>: <code>[ApiController]</code> + DataAnnotations on a DTO give 400 <code>ValidationProblemDetails</code> before the action runs.",
      "<b>Errors</b>: <code>AddProblemDetails</code> + <code>AddExceptionHandler</code> + <code>UseExceptionHandler</code> give one error shape and keep internals in the log.",
      "<b>401</b> = not signed in or bad token; <b>403</b> = signed in but the policy says no. A JWT is signed, not encrypted.",
      "<b>CORS</b> is a browser rule about which origins may read responses; the server still answers, and curl ignores it.",
      "<b>Rate limiting</b>: partition per caller, set <code>RejectionStatusCode = 429</code> (the default is 503) and send <code>Retry-After</code>.",
      "PUT replaces the whole resource; PATCH sends only the changes.",
      "Version by URL, query, header or media type with the Asp.Versioning packages; prefer additive changes.",
      "Output caching lets the server decide and evict by tag; HybridCache (.NET 9 era, package) adds stampede protection.",
      "ETag with If-None-Match gives 304 on a read; If-Match gives 412 on a stale write.",
      "Use IHttpClientFactory with AddStandardResilienceHandler, and disable retries for unsafe methods like POST."
    ],
    meaning: {
      hi: [
        "URL में चीज़ का नाम, verb में काम: GET पढ़ता है, POST बनाता है, PUT बदलता है, DELETE हटाता है; GET, PUT, DELETE दोहराने पर वही नतीजा देते हैं (idempotent), POST नहीं",
        "Status codes: create के बाद 201 + Location, 204 बिना body, 400 ग़लत input, 404 न मिला, 409 टकराव; error को 200 में मत छिपाओ",
        "Validation: DTO पर [ApiController] + DataAnnotations action चलने से पहले 400 ValidationProblemDetails देते हैं",
        "Errors: AddProblemDetails + AddExceptionHandler + UseExceptionHandler एक error shape देते हैं और अंदर की details log में रखते हैं",
        "401 = sign in नहीं या token ग़लत; 403 = sign in है पर policy मना करती है; JWT signed होता है, encrypted नहीं",
        "CORS browser का नियम है कि कौन-से origins responses पढ़ें; server फिर भी जवाब देता है और curl इसे नहीं मानता",
        "Rate limiting: हर caller का partition, RejectionStatusCode = 429 set करो (default 503 है) और Retry-After भेजो",
        "PUT पूरा resource बदलता है; PATCH सिर्फ़ बदलाव भेजता है।",
        "Asp.Versioning packages से URL, query, header या media type से version करो; additive बदलाव पसंद करो।",
        "Output caching में server फ़ैसला करता है और tag से evict करता है; HybridCache (.NET 9 era, package) stampede protection जोड़ता है।",
        "ETag के साथ If-None-Match पढ़ने पर 304 देता है; If-Match पुरानी write पर 412 देता है।",
        "IHttpClientFactory के साथ AddStandardResilienceHandler use करो, और POST जैसे unsafe methods पर retries बंद करो।"
      ],
      hg: [
        "URL mein cheez ka naam, verb mein kaam: GET padhta hai, POST banata hai, PUT badalta hai, DELETE hataata hai; GET, PUT, DELETE dohrane par wahi nateeja dete hain (idempotent), POST nahi",
        "Status codes: create ke baad 201 + Location, 204 bina body, 400 galat input, 404 na mila, 409 takraav; error ko 200 mein mat chhipao",
        "Validation: DTO par [ApiController] + DataAnnotations action chalne se pehle 400 ValidationProblemDetails dete hain",
        "Errors: AddProblemDetails + AddExceptionHandler + UseExceptionHandler ek error shape dete hain aur andar ki details log mein rakhte hain",
        "401 = sign in nahi ya token galat; 403 = sign in hai par policy mana karti hai; JWT signed hota hai, encrypted nahi",
        "CORS browser ka niyam hai ki kaun se origins responses padhein; server phir bhi jawab deta hai aur curl ise nahi maanta",
        "Rate limiting: har caller ka partition, RejectionStatusCode = 429 set karo (default 503 hai) aur Retry-After bhejo",
        "PUT poora resource badalta hai; PATCH sirf badlaav bhejta hai.",
        "Asp.Versioning packages se URL, query, header ya media type se version karo; additive badlaav pasand karo.",
        "Output caching mein server faisla karta hai aur tag se evict karta hai; HybridCache (.NET 9 era, package) stampede protection jodta hai.",
        "ETag ke saath If-None-Match padhne par 304 deta hai; If-Match purani write par 412 deta hai.",
        "IHttpClientFactory ke saath AddStandardResilienceHandler use karo, aur POST jaise unsafe methods par retries band karo."
      ]
    }
  }
};
