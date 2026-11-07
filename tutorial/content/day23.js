// Day 23 — JavaScript essentials, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 23,
  format: "lesson",
  title: {
    en: "JavaScript essentials — var/let/const, closures, this, prototypes, event loop, promises, modules, fetch, jQuery to modern DOM",
    hi: "JavaScript essentials — var/let/const, closures, this, prototypes, event loop, promises, modules, fetch, jQuery से modern DOM",
    hg: "JavaScript essentials — var/let/const, closures, this, prototypes, event loop, promises, modules, fetch, jQuery se modern DOM"
  },
  summary: {
    en: "<p>Day 23 teaches the JavaScript every C# developer must know, in 8 short lessons on the customer-care CRM. First the language core: <code>var/let/const</code>, closures, <code>this</code>, and prototypes with classes. Then the asynchronous part: the event loop and promises, <code>async/await</code> with <code>fetch</code>, ES modules, and the move from jQuery to the modern DOM.</p><p>Every lesson compares with C# (lambdas, <code>this</code>, <code>Task</code>, namespaces) and follows the same path: what it is, why you need it, an analogy, a complete program with its output, line-by-line notes, common mistakes, an exercise and a quiz. All programs run on Node with fixed output; the DOM code is shown next to a runnable version of the same logic. The Deep Dive holds the extra patterns.</p>",
    hi: "<p>Day 23 में वह JavaScript है जो हर C# developer को आना चाहिए, customer-care CRM पर 8 छोटे पाठों में। पहले language का core: <code>var/let/const</code>, closures, <code>this</code>, और prototypes के साथ classes। फिर asynchronous हिस्सा: event loop और promises, <code>fetch</code> के साथ <code>async/await</code>, ES modules, और jQuery से modern DOM की ओर।</p><p>हर पाठ C# से तुलना करता है (lambdas, <code>this</code>, <code>Task</code>, namespaces) और एक ही क्रम में चलता है: यह क्या है, क्यों चाहिए, एक मिसाल, output के साथ पूरा program, लाइन-दर-लाइन समझ, आम ग़लतियाँ, एक exercise और एक quiz। सारे programs Node पर तय output के साथ चलते हैं; DOM का code उसी logic के चलने वाले version के बगल में दिखाया है। Deep Dive में extra patterns हैं।</p>",
    hg: "<p>Day 23 mein woh JavaScript hai jo har C# developer ko aana chahiye, customer-care CRM par 8 chhote lessons mein. Pehle language ka core: <code>var/let/const</code>, closures, <code>this</code>, aur prototypes ke saath classes. Phir asynchronous hissa: event loop aur promises, <code>fetch</code> ke saath <code>async/await</code>, ES modules, aur jQuery se modern DOM ki or.</p><p>Har lesson C# se tulna karta hai (lambdas, <code>this</code>, <code>Task</code>, namespaces) aur ek hi kram mein chalta hai: ye kya hai, kyun chahiye, ek misaal, output ke saath poora program, line-by-line samajh, aam galtiyan, ek exercise aur ek quiz. Saare programs Node par tay output ke saath chalte hain; DOM ka code usi logic ke chalne wale version ke bagal mein dikhaya hai. Deep Dive mein extra patterns hain.</p>"
  },
  sections: [
    {
      id: "var-let-const",
      depth: "short",
      title: {
        en: "var, let and const",
        hi: "var, let और const",
        hg: "var, let aur const"
      },
      lesson: {
        buildsOn: {
          en: "<p>So far the course has been C# and .NET on the server: Day 13 built the Web API (<code>GET /api/tickets</code>) that the browser calls. Today is the JavaScript side of the CRM. We start where every C# developer starts: how variables live and die. C# locals are block-scoped; JavaScript has three keywords and one old one behaves differently.</p>",
          hi: "<p>अब तक course server पर C# और .NET का था: Day 13 में Web API (<code>GET /api/tickets</code>) बनी, जिसे browser call करता है। आज CRM का JavaScript वाला हिस्सा है। हम वहीं से शुरू करते हैं जहाँ हर C# developer शुरू करता है: variables कैसे बनते और खत्म होते हैं। C# के locals block-scoped होते हैं; JavaScript में तीन keywords हैं और एक पुराना अलग चलता है।</p>",
          hg: "<p>Ab tak course server par C# aur .NET ka tha: Day 13 mein Web API (<code>GET /api/tickets</code>) bani, jise browser call karta hai. Aaj CRM ka JavaScript wala hissa hai. Hum wahin se shuru karte hain jahan har C# developer shuru karta hai: variables kaise bante aur khatam hote hain. C# ke locals block-scoped hote hain; JavaScript mein teen keywords hain aur ek purana alag chalta hai.</p>"
        },
        what: {
          en: "<p>JavaScript has three ways to declare a variable. <code>const</code> cannot be pointed somewhere else. <code>let</code> can be re-assigned and stays inside its <code>{ }</code> block. <code>var</code> is the old one: it ignores blocks and belongs to the whole function.</p>",
          hi: "<p>JavaScript में variable declare करने के तीन तरीके हैं। <code>const</code> को किसी और चीज़ की तरफ़ point नहीं कराया जा सकता। <code>let</code> दोबारा assign हो सकता है और अपने <code>{ }</code> block के अंदर ही रहता है। <code>var</code> पुराना है: वह block नहीं मानता और पूरे function का होता है।</p>",
          hg: "<p>JavaScript mein variable declare karne ke teen tareeke hain. <code>const</code> ko kisi aur cheez ki taraf point nahi karaya ja sakta. <code>let</code> dobara assign ho sakta hai aur apne <code>{ }</code> block ke andar hi rehta hai. <code>var</code> purana hai: woh block nahi manta aur poore function ka hota hai.</p>"
        },
        why: {
          en: "<p>Most \"why is this value wrong?\" bugs in old JavaScript are <code>var</code> bugs: a name leaks out of an <code>if</code> or loop and someone reuses it. Interviewers also ask about hoisting and the temporal dead zone. The simple rule: use <code>const</code>, switch to <code>let</code> only when you must re-assign, never write <code>var</code>.</p>",
          hi: "<p>पुराने JavaScript में ज़्यादातर \"यह value ग़लत क्यों है?\" वाले bugs <code>var</code> के होते हैं: कोई नाम <code>if</code> या loop से बाहर निकल जाता है और कोई दूसरा उसे दोबारा use कर लेता है। Interview में hoisting और temporal dead zone भी पूछे जाते हैं। सीधा नियम: <code>const</code> लिखो, दोबारा assign करना ही पड़े तो <code>let</code>, <code>var</code> कभी नहीं।</p>",
          hg: "<p>Purane JavaScript mein zyaadatar \"ye value galat kyun hai?\" wale bugs <code>var</code> ke hote hain: koi naam <code>if</code> ya loop se bahar nikal jaata hai aur koi doosra use dobara use kar leta hai. Interview mein hoisting aur temporal dead zone bhi puchhe jaate hain. Seedha niyam: <code>const</code> likho, dobara assign karna hi pade to <code>let</code>, <code>var</code> kabhi nahi.</p>"
        },
        analogy: {
          en: "<p>A locker in a hostel. <code>const</code> is a lock fixed on the locker door: you cannot swap the locker, but you can still change the things inside. <code>let</code> is a locker for one room only. <code>var</code> is a locker in the corridor that the whole floor can open.</p>",
          hi: "<p>Hostel का locker। <code>const</code> locker के दरवाज़े पर लगा ताला है: locker बदल नहीं सकते, पर अंदर का सामान बदल सकते हैं। <code>let</code> सिर्फ़ एक कमरे का locker है। <code>var</code> corridor में रखा locker है जिसे पूरी floor खोल सकती है।</p>",
          hg: "<p>Hostel ka locker. <code>const</code> locker ke darwaze par laga taala hai: locker badal nahi sakte, par andar ka saaman badal sakte hain. <code>let</code> sirf ek kamre ka locker hai. <code>var</code> corridor mein rakha locker hai jise poori floor khol sakti hai.</p>"
        },
        focus: {
          lang: "csharp",
          caption: {
            en: "C# for comparison: a local never escapes its block",
            hi: "तुलना के लिए C#: local अपने block से बाहर नहीं जाता",
            hg: "Tulna ke liye C#: local apne block se bahar nahi jaata"
          },
          check: "none",
          src: "// C# (not JavaScript): this does not compile, status is out of scope\nif (id > 500)\n{\n    var status = \"Closed\";\n}\nConsole.WriteLine(status);   // error CS0103: the name 'status' does not exist"
        },
        lines: [
          {
            code: "tickets.push(504);",
            note: {
              en: "<code>tickets</code> is a <code>const</code>, yet <code>push</code> works. <code>const</code> protects the <b>name</b>, not the array. It is like a C# <code>readonly</code> field holding a reference.",
              hi: "<code>tickets</code> एक <code>const</code> है, फिर भी <code>push</code> चलता है। <code>const</code> <b>नाम</b> को बचाता है, array को नहीं। यह C# के <code>readonly</code> field जैसा है जो reference पकड़े रखता है।",
              hg: "<code>tickets</code> ek <code>const</code> hai, phir bhi <code>push</code> chalta hai. <code>const</code> <b>naam</b> ko bachata hai, array ko nahi. Ye C# ke <code>readonly</code> field jaisa hai jo reference pakde rakhta hai."
            }
          },
          {
            code: "var status = \"Closed\";",
            note: {
              en: "<code>var</code> ignores the <code>if</code> block. <code>status</code> lives in the whole function, so the later <code>console.log(status)</code> works. C# would refuse to compile this.",
              hi: "<code>var</code> <code>if</code> block को नहीं मानता। <code>status</code> पूरे function में रहता है, इसलिए बाद वाला <code>console.log(status)</code> चल जाता है। C# इसे compile ही नहीं करता।",
              hg: "<code>var</code> <code>if</code> block ko nahi manta. <code>status</code> poore function mein rehta hai, isliye baad wala <code>console.log(status)</code> chal jaata hai. C# ise compile hi nahi karta."
            }
          },
          {
            code: "let note = \"closed by Kiran\";",
            note: {
              en: "<code>let</code> stays inside the block, like a C# local. Outside the <code>if</code>, the name <code>note</code> does not exist.",
              hi: "<code>let</code> block के अंदर ही रहता है, C# के local जैसा। <code>if</code> के बाहर <code>note</code> नाम होता ही नहीं।",
              hg: "<code>let</code> block ke andar hi rehta hai, C# ke local jaisa. <code>if</code> ke bahar <code>note</code> naam hota hi nahi."
            }
          },
          {
            code: "console.log(typeof note);",
            note: {
              en: "<code>typeof</code> on a name that does not exist gives the text <code>\"undefined\"</code> instead of an error. It is the one safe check.",
              hi: "जो नाम मौजूद ही नहीं, उस पर <code>typeof</code> error की जगह text <code>\"undefined\"</code> देता है। यही अकेला safe check है।",
              hg: "Jo naam maujood hi nahi, us par <code>typeof</code> error ki jagah text <code>\"undefined\"</code> deta hai. Yahi akela safe check hai."
            }
          },
          {
            code: "let priority = \"High\";",
            note: {
              en: "The name is known for the whole block but cannot be used before this line. That gap is the <b>temporal dead zone</b>: reading it early throws <code>ReferenceError</code>. A <code>var</code> would give <code>undefined</code> instead.",
              hi: "यह नाम पूरे block में जाना जाता है, पर इस line से पहले use नहीं हो सकता। यही खाली हिस्सा <b>temporal dead zone</b> है: पहले पढ़ो तो <code>ReferenceError</code> आता है। <code>var</code> होता तो <code>undefined</code> मिलता।",
              hg: "Ye naam poore block mein jaana jaata hai, par is line se pehle use nahi ho sakta. Yahi khaali hissa <b>temporal dead zone</b> hai: pehle padho to <code>ReferenceError</code> aata hai. <code>var</code> hota to <code>undefined</code> milta."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Believing <code>const</code> makes an object read-only. Fields can still change; only re-assigning the name fails.</li><li>Using <code>var</code> \"because it works\". It hides name clashes between blocks and is hoisted as <code>undefined</code>.</li><li>Using <code>let</code> for everything. Prefer <code>const</code>: when a reader sees <code>let</code>, they know this value changes later.</li></ul>",
          hi: "<ul><li>यह मानना कि <code>const</code> object को read-only बना देता है। Fields बदल सकते हैं; सिर्फ़ नाम को दोबारा assign करना fail होता है।</li><li>\"चल जो रहा है\" सोचकर <code>var</code> लिखना। यह blocks के बीच नाम का टकराव छिपाता है और <code>undefined</code> बनकर hoist होता है।</li><li>हर जगह <code>let</code> लिखना। <code>const</code> को पहले रखो: <code>let</code> देखकर पढ़ने वाला समझ जाता है कि यह value आगे बदलेगी।</li></ul>",
          hg: "<ul><li>Ye maanna ki <code>const</code> object ko read-only bana deta hai. Fields badal sakte hain; sirf naam ko dobara assign karna fail hota hai.</li><li>\"Chal jo raha hai\" sochkar <code>var</code> likhna. Ye blocks ke beech naam ka takraav chhupata hai aur <code>undefined</code> banke hoist hota hai.</li><li>Har jagah <code>let</code> likhna. <code>const</code> ko pehle rakho: <code>let</code> dekhkar padhne wala samajh jaata hai ki ye value aage badlegi.</li></ul>"
        },
        whenToUse: {
          en: "<p>Always start with <code>const</code>. Change to <code>let</code> only for counters and values that really change. Leave <code>var</code> for reading old code; ESLint's <code>no-var</code> rule can forbid it on your team.</p>",
          hi: "<p>हमेशा <code>const</code> से शुरू करो। सिर्फ़ counters और सच में बदलने वाली values के लिए <code>let</code> करो। <code>var</code> सिर्फ़ पुराना code पढ़ने के लिए रखो; ESLint का <code>no-var</code> rule team में उसे रोक सकता है।</p>",
          hg: "<p>Hamesha <code>const</code> se shuru karo. Sirf counters aur sach mein badalne wali values ke liye <code>let</code> karo. <code>var</code> sirf purana code padhne ke liye rakho; ESLint ka <code>no-var</code> rule team mein use rok sakta hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Make a <code>const</code> agent object <code>{ name: \"Meena\", open: 3 }</code>. Change <code>open</code> to 2 and print the name and the count. Then try to assign a whole new object to the same name inside <code>try/catch</code> and print the error name.</p>",
            hi: "<p>एक <code>const</code> agent object बनाओ <code>{ name: \"Meena\", open: 3 }</code>। <code>open</code> को 2 करो और नाम व count print करो। फिर उसी नाम में पूरा नया object assign करने की कोशिश <code>try/catch</code> में करो और error का नाम print करो।</p>",
            hg: "<p>Ek <code>const</code> agent object banao <code>{ name: \"Meena\", open: 3 }</code>. <code>open</code> ko 2 karo aur naam va count print karo. Phir usi naam mein poora naya object assign karne ki koshish <code>try/catch</code> mein karo aur error ka naam print karo.</p>"
          },
          hint: {
            en: "<p>Changing <code>agent.open</code> is allowed. Writing <code>agent = ...</code> is the part that throws a <code>TypeError</code>.</p>",
            hi: "<p><code>agent.open</code> बदलना allowed है। <code>agent = ...</code> लिखना वह हिस्सा है जो <code>TypeError</code> फेंकता है।</p>",
            hg: "<p><code>agent.open</code> badalna allowed hai. <code>agent = ...</code> likhna woh hissa hai jo <code>TypeError</code> phenkta hai.</p>"
          },
          solution: {
            lang: "javascript",
            caption: {
              en: "Solution: const protects the name",
              hi: "हल: const नाम को protect करता है",
              hg: "Solution: const naam ko protect karta hai"
            },
            check: "run",
            src: "const agent = { name: \"Meena\", open: 3 };\nagent.open = 2;\nconsole.log(agent.name, agent.open);\ntry {\n  agent = { name: \"Kiran\", open: 0 };\n} catch (error) {\n  console.log(error.name);\n}",
            expected: "Meena 2\nTypeError"
          }
        },
        quiz: {
          q: {
            en: "Given <code>const list = [1, 2];</code>, which line throws an error?",
            hi: "<code>const list = [1, 2];</code> के बाद कौन-सी line error फेंकेगी?",
            hg: "<code>const list = [1, 2];</code> ke baad kaun-si line error phenkegi?"
          },
          options: [
            {
              en: "<code>list.push(3);</code>",
              hi: "<code>list.push(3);</code> से error आएगा",
              hg: "<code>list.push(3);</code> se error aayega"
            },
            {
              en: "<code>list[0] = 9;</code>",
              hi: "<code>list[0] = 9;</code> से error आएगा",
              hg: "<code>list[0] = 9;</code> se error aayega"
            },
            {
              en: "<code>list = [];</code>",
              hi: "<code>list = [];</code> से error आएगा",
              hg: "<code>list = [];</code> se error aayega"
            },
            {
              en: "<code>list.length = 0;</code>",
              hi: "<code>list.length = 0;</code> से error आएगा",
              hg: "<code>list.length = 0;</code> se error aayega"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>Only re-assigning the name fails (<code>TypeError: Assignment to constant variable</code>). Pushing, changing an item and changing <code>length</code> all modify the same array, which <code>const</code> does not protect.</p>",
            hi: "<p>सिर्फ़ नाम को दोबारा assign करना fail होता है (<code>TypeError: Assignment to constant variable</code>)। Push, item बदलना और <code>length</code> बदलना, तीनों उसी array को बदलते हैं, जिसे <code>const</code> protect नहीं करता।</p>",
            hg: "<p>Sirf naam ko dobara assign karna fail hota hai (<code>TypeError: Assignment to constant variable</code>). Push, item badalna aur <code>length</code> badalna, teeno usi array ko badalte hain, jise <code>const</code> protect nahi karta.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>const</code> by default; <code>let</code> when a value changes; no <code>var</code>.</li><li><code>const</code> protects the name, not the object inside.</li><li><code>let</code>/<code>const</code> are block-scoped and throw <code>ReferenceError</code> before their line; <code>var</code> leaks out as <code>undefined</code>.</li></ul>",
          hi: "<ul><li>Default <code>const</code>; value बदले तो <code>let</code>; <code>var</code> नहीं।</li><li><code>const</code> नाम को बचाता है, अंदर के object को नहीं।</li><li><code>let</code>/<code>const</code> block-scoped हैं और अपनी line से पहले <code>ReferenceError</code> देते हैं; <code>var</code> बाहर निकलकर <code>undefined</code> बनता है।</li></ul>",
          hg: "<ul><li>Default <code>const</code>; value badle to <code>let</code>; <code>var</code> nahi.</li><li><code>const</code> naam ko bachata hai, andar ke object ko nahi.</li><li><code>let</code>/<code>const</code> block-scoped hain aur apni line se pehle <code>ReferenceError</code> dete hain; <code>var</code> bahar nikalkar <code>undefined</code> banta hai.</li></ul>"
        }
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "Declarations in the CRM (runs on Node)",
            hi: "CRM में declarations (Node पर चलता है)",
            hg: "CRM mein declarations (Node par chalta hai)"
          },
          check: "run",
          src: "const tickets = [501, 502, 503];\ntickets.push(504); // const protects the name, not the array\nconsole.log(tickets.length);\n\nfunction closeTicket(id) {\n  if (id > 500) {\n    var status = \"Closed\"; // var ignores the block\n    let note = \"closed by Kiran\"; // let stays inside the block\n    console.log(note);\n  }\n  console.log(status);\n  console.log(typeof note); // no such name here, and no error either\n}\ncloseTicket(501);\n\ntry {\n  console.log(priority); // temporal dead zone\n  let priority = \"High\";\n} catch (error) {\n  console.log(error.name);\n}",
          expected: "4\nclosed by Kiran\nClosed\nundefined\nReferenceError"
        }
      ]
    },
    {
      id: "closures",
      depth: "short",
      title: {
        en: "Closures",
        hi: "Closures: function और उसके variables",
        hg: "Closures: function aur uske variables"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 1 showed that a name lives inside its block or function. A <b>closure</b> is the next step: an inner function keeps using the names of the place where it was created, even after that place has finished running.</p>",
          hi: "<p>पाठ 1 में देखा कि नाम अपने block या function के अंदर रहता है। <b>Closure</b> अगला कदम है: अंदर वाला function उस जगह के नाम इस्तेमाल करता रहता है जहाँ वह बना था, भले ही वह जगह चलकर खत्म हो चुकी हो।</p>",
          hg: "<p>Lesson 1 mein dekha ki naam apne block ya function ke andar rehta hai. <b>Closure</b> agla kadam hai: andar wala function us jagah ke naam use karta rehta hai jahan woh bana tha, bhale hi woh jagah chalkar khatam ho chuki ho.</p>"
        },
        what: {
          en: "<p>A <b>closure</b> is a function together with the variables around it. The function does not get a copy of those variables; it keeps a live link to them.</p>",
          hi: "<p><b>Closure</b> एक function है और उसके आसपास के variables का साथ। Function को उन variables की copy नहीं मिलती; उसके पास उनसे जुड़ा एक live link रहता है।</p>",
          hg: "<p><b>Closure</b> ek function hai aur uske aaspaas ke variables ka saath. Function ko un variables ki copy nahi milti; uske paas unse juda ek live link rehta hai.</p>"
        },
        why: {
          en: "<p>Closures give you private state without a class: a counter, a \"run once\" guard, a callback that remembers which ticket it belongs to. They are also behind the most famous JavaScript interview bug, the <code>var</code> loop that prints the same value every time.</p>",
          hi: "<p>Closures class के बिना private state देते हैं: counter, \"सिर्फ़ एक बार चलाओ\" guard, या ऐसा callback जो याद रखे कि वह किस ticket का है। JavaScript के सबसे मशहूर interview bug के पीछे भी यही है: <code>var</code> वाला loop जो हर बार एक ही value print करता है।</p>",
          hg: "<p>Closures class ke bina private state dete hain: counter, \"sirf ek baar chalao\" guard, ya aisa callback jo yaad rakhe ki woh kis ticket ka hai. JavaScript ke sabse mashhoor interview bug ke peeche bhi yahi hai: <code>var</code> wala loop jo har baar ek hi value print karta hai.</p>"
        },
        analogy: {
          en: "<p>A tiffin box remembers the kitchen it was packed in. Even after it reaches the office, it still holds that kitchen's food. The inner function is the tiffin; the outer function's variables are the kitchen.</p>",
          hi: "<p>Tiffin box को याद रहता है कि वह किस रसोई में भरा गया था। दफ़्तर पहुँचकर भी उसमें उसी रसोई का खाना रहता है। अंदर वाला function tiffin है; बाहर वाले function के variables रसोई हैं।</p>",
          hg: "<p>Tiffin box ko yaad rehta hai ki woh kis rasoi mein bhara gaya tha. Daftar pahunchkar bhi usmein usi rasoi ka khaana rehta hai. Andar wala function tiffin hai; bahar wale function ke variables rasoi hain.</p>"
        },
        focus: {
          lang: "csharp",
          caption: {
            en: "C# lambdas capture variables too",
            hi: "C# lambdas भी variables capture करते हैं",
            hg: "C# lambdas bhi variables capture karte hain"
          },
          check: "none",
          src: "// C#: the lambda captures the variable \"handled\", not its value\nint handled = 0;\nAction handle = () => handled++;\nhandle();\nhandle();\nConsole.WriteLine(handled);   // 2"
        },
        lines: [
          {
            code: "let handled = 0;",
            note: {
              en: "This variable belongs to one call of <code>createTicketCounter</code>. Every call makes a fresh one, so Meena and Kiran never share it.",
              hi: "यह variable <code>createTicketCounter</code> की एक call का है। हर call नया बनाती है, इसलिए Meena और Kiran कभी इसे share नहीं करते।",
              hg: "Ye variable <code>createTicketCounter</code> ki ek call ka hai. Har call naya banati hai, isliye Meena aur Kiran kabhi ise share nahi karte."
            }
          },
          {
            code: "handle(id) { handled++; return agent + \" handled #\" + id; },",
            note: {
              en: "This inner function still reaches <code>handled</code> and <code>agent</code> after <code>createTicketCounter</code> has returned. That is the closure.",
              hi: "यह अंदर वाला function <code>createTicketCounter</code> के return होने के बाद भी <code>handled</code> और <code>agent</code> तक पहुँचता है। यही closure है।",
              hg: "Ye andar wala function <code>createTicketCounter</code> ke return hone ke baad bhi <code>handled</code> aur <code>agent</code> tak pahunchta hai. Yahi closure hai."
            }
          },
          {
            code: "console.log(meena.total, kiran.total, meena.handled);",
            note: {
              en: "Each counter has its own count: <code>2 1</code>. <code>meena.handled</code> is <code>undefined</code>: outside code cannot touch the variable, like a private field in C#.",
              hi: "हर counter की अपनी गिनती है: <code>2 1</code>। <code>meena.handled</code> <code>undefined</code> है: बाहर का code variable को छू नहीं सकता, C# के private field जैसा।",
              hg: "Har counter ki apni ginti hai: <code>2 1</code>. <code>meena.handled</code> <code>undefined</code> hai: bahar ka code variable ko chhu nahi sakta, C# ke private field jaisa."
            }
          },
          {
            code: "for (var i = 501; i <= 503; i++) varCallbacks.push(() => i);",
            note: {
              en: "With <code>var</code> the whole loop shares ONE <code>i</code>. All three callbacks read it after the loop ended, when it is 504.",
              hi: "<code>var</code> के साथ पूरा loop <b>एक ही</b> <code>i</code> share करता है। तीनों callbacks उसे loop खत्म होने के बाद पढ़ते हैं, जब वह 504 है।",
              hg: "<code>var</code> ke saath poora loop <b>ek hi</b> <code>i</code> share karta hai. Teeno callbacks use loop khatam hone ke baad padhte hain, jab woh 504 hai."
            }
          },
          {
            code: "for (let j = 501; j <= 503; j++) letCallbacks.push(() => j);",
            note: {
              en: "With <code>let</code> every pass of the loop gets its own <code>j</code>, so the callbacks remember 501, 502, 503. C# <code>foreach</code> behaves like this since C# 5; a C# <code>for</code> loop still shares one variable.",
              hi: "<code>let</code> के साथ loop की हर बारी को अपना <code>j</code> मिलता है, इसलिए callbacks को 501, 502, 503 याद रहते हैं। C# का <code>foreach</code> C# 5 से ऐसे ही चलता है; C# का <code>for</code> loop अब भी एक ही variable share करता है।",
              hg: "<code>let</code> ke saath loop ki har baari ko apna <code>j</code> milta hai, isliye callbacks ko 501, 502, 503 yaad rehte hain. C# ka <code>foreach</code> C# 5 se aise hi chalta hai; C# ka <code>for</code> loop ab bhi ek hi variable share karta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Thinking a closure copies the value. It keeps the <b>variable</b>; if the variable changes later, the closure sees the new value.</li><li>Creating callbacks in a <code>var</code> loop. Use <code>let</code> (or <code>forEach</code>) so each callback gets its own variable.</li><li>Keeping a closure alive in a long-lived listener. It also keeps everything it captured alive, which can leak memory.</li></ul>",
          hi: "<ul><li>यह सोचना कि closure value की copy रखता है। वह <b>variable</b> रखता है; variable बाद में बदले तो closure को नई value दिखती है।</li><li><code>var</code> वाले loop में callbacks बनाना। <code>let</code> (या <code>forEach</code>) use करो ताकि हर callback को अपना variable मिले।</li><li>Long-lived listener में closure ज़िंदा रखना। वह जो कुछ पकड़े है उसे भी ज़िंदा रखता है, जिससे memory leak हो सकता है।</li></ul>",
          hg: "<ul><li>Ye sochna ki closure value ki copy rakhta hai. Woh <b>variable</b> rakhta hai; variable baad mein badle to closure ko nayi value dikhti hai.</li><li><code>var</code> wale loop mein callbacks banana. <code>let</code> (ya <code>forEach</code>) use karo taaki har callback ko apna variable mile.</li><li>Long-lived listener mein closure zinda rakhna. Woh jo kuch pakde hai use bhi zinda rakhta hai, jisse memory leak ho sakta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a closure for small private state, factories and callbacks. When many functions share the same state, a <code>class</code> or module is easier to read and test.</p>",
          hi: "<p>छोटी private state, factories और callbacks के लिए closure use करो। कई functions एक ही state share करें तो <code>class</code> या module पढ़ने और test करने में आसान है।</p>",
          hg: "<p>Chhoti private state, factories aur callbacks ke liye closure use karo. Kai functions ek hi state share karein to <code>class</code> ya module padhne aur test karne mein aasaan hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write <code>makeIdGenerator(start)</code> that returns a function. Each call of the returned function gives the next ticket id. Make one generator from 501 and another from 900; print <code>501 502</code>, then <code>900 503</code>.</p>",
            hi: "<p><code>makeIdGenerator(start)</code> लिखो जो एक function return करे। लौटाए गए function की हर call अगली ticket id दे। एक generator 501 से और दूसरा 900 से बनाओ; <code>501 502</code> print करो, फिर <code>900 503</code>।</p>",
            hg: "<p><code>makeIdGenerator(start)</code> likho jo ek function return kare. Lautaye gaye function ki har call agli ticket id de. Ek generator 501 se aur doosra 900 se banao; <code>501 502</code> print karo, phir <code>900 503</code>.</p>"
          },
          hint: {
            en: "<p>Keep <code>let next = start;</code> inside <code>makeIdGenerator</code> and return <code>() => next++</code>.</p>",
            hi: "<p><code>makeIdGenerator</code> के अंदर <code>let next = start;</code> रखो और <code>() => next++</code> return करो।</p>",
            hg: "<p><code>makeIdGenerator</code> ke andar <code>let next = start;</code> rakho aur <code>() => next++</code> return karo.</p>"
          },
          solution: {
            lang: "javascript",
            caption: {
              en: "Solution: a closure as id generator",
              hi: "हल: id generator के रूप में closure",
              hg: "Solution: id generator ke roop mein closure"
            },
            check: "run",
            src: "function makeIdGenerator(start) {\n  let next = start;\n  return () => next++;\n}\n\nconst tickets = makeIdGenerator(501);\nconst refunds = makeIdGenerator(900);\nconsole.log(tickets(), tickets());\nconsole.log(refunds(), tickets());",
            expected: "501 502\n900 503"
          }
        },
        quiz: {
          q: {
            en: "A <code>var</code> loop from 1 to 3 pushes <code>() => i</code> into an array. After the loop, what do the three callbacks return?",
            hi: "1 से 3 तक का <code>var</code> loop array में <code>() => i</code> push करता है। Loop के बाद तीनों callbacks क्या लौटाएँगे?",
            hg: "1 se 3 tak ka <code>var</code> loop array mein <code>() => i</code> push karta hai. Loop ke baad teeno callbacks kya lautayenge?"
          },
          options: [
            {
              en: "<code>4 4 4</code>",
              hi: "<code>4 4 4</code> मिलेगा",
              hg: "<code>4 4 4</code> milega"
            },
            {
              en: "<code>3 3 3</code>",
              hi: "<code>3 3 3</code> मिलेगा",
              hg: "<code>3 3 3</code> milega"
            },
            {
              en: "<code>1 2 3</code>",
              hi: "<code>1 2 3</code> मिलेगा",
              hg: "<code>1 2 3</code> milega"
            },
            {
              en: "<code>undefined</code> three times",
              hi: "तीनों बार <code>undefined</code>",
              hg: "Teeno baar <code>undefined</code>"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>There is one shared <code>i</code>. The loop stops only after <code>i</code> becomes 4, and every callback reads that same variable later. With <code>let</code> you would get <code>1 2 3</code>.</p>",
            hi: "<p>एक ही shared <code>i</code> है। Loop तभी रुकता है जब <code>i</code> 4 हो जाता है, और हर callback बाद में वही variable पढ़ता है। <code>let</code> के साथ <code>1 2 3</code> मिलता।</p>",
            hg: "<p>Ek hi shared <code>i</code> hai. Loop tabhi rukta hai jab <code>i</code> 4 ho jaata hai, aur har callback baad mein wahi variable padhta hai. <code>let</code> ke saath <code>1 2 3</code> milta.</p>"
          }
        },
        recap: {
          en: "<ul><li>A closure = a function plus a live link to the variables where it was created.</li><li>It keeps the variable, not a copy of the value.</li><li><code>var</code> in a loop shares one variable; <code>let</code> gives one per pass.</li></ul>",
          hi: "<ul><li>Closure = function और उस जगह के variables से live link जहाँ वह बना।</li><li>वह variable रखता है, value की copy नहीं।</li><li>Loop में <code>var</code> एक variable share करता है; <code>let</code> हर बारी का अलग देता है।</li></ul>",
          hg: "<ul><li>Closure = function aur us jagah ke variables se live link jahan woh bana.</li><li>Woh variable rakhta hai, value ki copy nahi.</li><li>Loop mein <code>var</code> ek variable share karta hai; <code>let</code> har baari ka alag deta hai.</li></ul>"
        }
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "Private counters and the loop trap (runs on Node)",
            hi: "Private counters और loop का जाल (Node पर चलता है)",
            hg: "Private counters aur loop ka jaal (Node par chalta hai)"
          },
          check: "run",
          src: "function createTicketCounter(agent) {\n  let handled = 0;\n  return {\n    handle(id) { handled++; return agent + \" handled #\" + id; },\n    get total() { return handled; },\n  };\n}\n\nconst meena = createTicketCounter(\"Meena\");\nconst kiran = createTicketCounter(\"Kiran\");\nconsole.log(meena.handle(501));\nconsole.log(meena.handle(502));\nconsole.log(kiran.handle(503));\nconsole.log(meena.total, kiran.total, meena.handled);\n\nconst varCallbacks = [];\nfor (var i = 501; i <= 503; i++) varCallbacks.push(() => i);\nconsole.log(varCallbacks.map((f) => f()).join(\" \"));\n\nconst letCallbacks = [];\nfor (let j = 501; j <= 503; j++) letCallbacks.push(() => j);\nconsole.log(letCallbacks.map((f) => f()).join(\" \"));",
          expected: "Meena handled #501\nMeena handled #502\nKiran handled #503\n2 1 undefined\n504 504 504\n501 502 503"
        }
      ]
    },
    {
      id: "this-keyword",
      depth: "short",
      title: {
        en: "this: who is calling?",
        hi: "this: कौन call कर रहा है?",
        hg: "this: kaun call kar raha hai?"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 2 showed that a function remembers the <i>variables</i> of the place it was written. <code>this</code> works the opposite way: it is not decided where the function is written but by <b>how it is called</b>.</p>",
          hi: "<p>पाठ 2 में देखा कि function उस जगह के <i>variables</i> याद रखता है जहाँ वह लिखा गया। <code>this</code> उल्टा चलता है: यह function कहाँ लिखा है उससे नहीं, <b>उसे कैसे call किया गया</b> उससे तय होता है।</p>",
          hg: "<p>Lesson 2 mein dekha ki function us jagah ke <i>variables</i> yaad rakhta hai jahan woh likha gaya. <code>this</code> ulta chalta hai: ye function kahan likha hai usse nahi, <b>use kaise call kiya gaya</b> usse tay hota hai.</p>"
        },
        what: {
          en: "<p><code>this</code> is a hidden value that every non-arrow function receives when it is called. For <code>ticket.describe()</code> it is <code>ticket</code>. For a plain call <code>describe()</code> it is <code>undefined</code> (in modules and strict mode). An <b>arrow function</b> has no <code>this</code> of its own and uses the one from the code around it.</p>",
          hi: "<p><code>this</code> एक छिपी value है जो हर non-arrow function को call होते समय मिलती है। <code>ticket.describe()</code> के लिए यह <code>ticket</code> है। सीधी call <code>describe()</code> के लिए यह <code>undefined</code> है (modules और strict mode में)। <b>Arrow function</b> का अपना <code>this</code> नहीं होता; वह आसपास के code वाला <code>this</code> इस्तेमाल करता है।</p>",
          hg: "<p><code>this</code> ek chhipi value hai jo har non-arrow function ko call hote samay milti hai. <code>ticket.describe()</code> ke liye ye <code>ticket</code> hai. Seedhi call <code>describe()</code> ke liye ye <code>undefined</code> hai (modules aur strict mode mein). <b>Arrow function</b> ka apna <code>this</code> nahi hota; woh aaspaas ke code wala <code>this</code> istemaal karta hai.</p>"
        },
        why: {
          en: "<p>This is the classic \"my handler worked in the test but fails as a callback\" bug. When you pass <code>ticket.describe</code> to <code>setTimeout</code> or a button handler, the object is left behind and <code>this</code> is lost. In C# this cannot happen, so it surprises everyone coming from C#.</p>",
          hi: "<p>यह वही पुराना bug है: \"handler test में चला पर callback बनकर fail हो गया\"। जब <code>ticket.describe</code> को <code>setTimeout</code> या button handler को दे देते हो, object पीछे छूट जाता है और <code>this</code> खो जाता है। C# में ऐसा हो ही नहीं सकता, इसलिए C# से आने वाले सब चौंकते हैं।</p>",
          hg: "<p>Ye wahi purana bug hai: \"handler test mein chala par callback banke fail ho gaya\". Jab <code>ticket.describe</code> ko <code>setTimeout</code> ya button handler ko de dete ho, object peeche chhoot jaata hai aur <code>this</code> kho jaata hai. C# mein aisa ho hi nahi sakta, isliye C# se aane wale sab chaunkte hain.</p>"
        },
        analogy: {
          en: "<p>The word \"I\". When Meena says \"I am free\", it means Meena. When Kiran says the same sentence, it means Kiran. The sentence is identical; the speaker decides the meaning. <code>this</code> is \"I\", and the caller is the speaker.</p>",
          hi: "<p>शब्द \"मैं\"। जब Meena कहती है \"मैं खाली हूँ\", तो मतलब Meena। वही वाक्य Kiran बोले तो मतलब Kiran। वाक्य वही है; मतलब बोलने वाला तय करता है। <code>this</code> \"मैं\" है और call करने वाला बोलने वाला।</p>",
          hg: "<p>Shabd \"main\". Jab Meena kehti hai \"main khaali hoon\", to matlab Meena. Wahi vaakya Kiran bole to matlab Kiran. Vaakya wahi hai; matlab bolne wala tay karta hai. <code>this</code> \"main\" hai aur call karne wala bolne wala.</p>"
        },
        focus: {
          lang: "csharp",
          caption: {
            en: "C# for comparison: this is always the current instance",
            hi: "तुलना के लिए C#: this हमेशा मौजूदा instance है",
            hg: "Tulna ke liye C#: this hamesha maujooda instance hai"
          },
          check: "none",
          src: "// C#: a method group keeps its target, so \"this\" cannot be lost\nFunc<string> describe = ticket.Describe;   // still bound to ticket\nConsole.WriteLine(describe());"
        },
        lines: [
          {
            code: "describe() { return \"#\" + this.id + \" is with \" + this.agent; },",
            note: {
              en: "A normal method reads <code>this.id</code> and <code>this.agent</code>. Whoever stands before the dot at call time becomes <code>this</code>.",
              hi: "Normal method <code>this.id</code> और <code>this.agent</code> पढ़ता है। Call के समय dot के पहले जो खड़ा है, वही <code>this</code> बन जाता है।",
              hg: "Normal method <code>this.id</code> aur <code>this.agent</code> padhta hai. Call ke samay dot ke pehle jo khada hai, wahi <code>this</code> ban jaata hai."
            }
          },
          {
            code: "const detached = ticket.describe;",
            note: {
              en: "This copies only the function. Nothing remembers <code>ticket</code> any more, exactly what happens when you pass it as a callback.",
              hi: "इससे सिर्फ़ function copy होता है। अब <code>ticket</code> को कोई याद नहीं रखता, ठीक वही जो callback बनाकर देने पर होता है।",
              hg: "Isse sirf function copy hota hai. Ab <code>ticket</code> ko koi yaad nahi rakhta, theek wahi jo callback banakar dene par hota hai."
            }
          },
          {
            code: "try { console.log(detached()); } catch (error) { console.log(error.name); }",
            note: {
              en: "A plain call gives <code>this = undefined</code>, so <code>this.id</code> throws <code>TypeError</code>. That is strict mode (modules, class bodies, <code>\"use strict\"</code>). In a classic browser <code>&lt;script&gt;</code> without <code>\"use strict\"</code> (sloppy mode) <code>this</code> is the global object (<code>window</code>), so <code>this.id</code> quietly gives <code>undefined</code> and hides the bug.",
              hi: "सीधी call में <code>this = undefined</code> होता है, इसलिए <code>this.id</code> <code>TypeError</code> फेंकता है। यह strict mode है (modules, class bodies, <code>\"use strict\"</code>)। <code>\"use strict\"</code> के बिना classic browser <code>&lt;script&gt;</code> (sloppy mode) में <code>this</code> global object (<code>window</code>) होता है, तो <code>this.id</code> चुपचाप <code>undefined</code> देता है और bug छिप जाता है।",
              hg: "Seedhi call mein <code>this = undefined</code> hota hai, isliye <code>this.id</code> <code>TypeError</code> phenkta hai. Ye strict mode hai (modules, class bodies, <code>\"use strict\"</code>). <code>\"use strict\"</code> ke bina classic browser <code>&lt;script&gt;</code> (sloppy mode) mein <code>this</code> global object (<code>window</code>) hota hai, to <code>this.id</code> chupchaap <code>undefined</code> deta hai aur bug chhip jaata hai."
            }
          },
          {
            code: "console.log(detached.bind(ticket)());",
            note: {
              en: "<code>bind</code> makes a new function with <code>this</code> fixed to <code>ticket</code>. <code>call</code> and <code>apply</code> do the same for a single call.",
              hi: "<code>bind</code> एक नया function बनाता है जिसमें <code>this</code> <code>ticket</code> पर तय हो जाता है। <code>call</code> और <code>apply</code> एक ही call के लिए यही करते हैं।",
              hg: "<code>bind</code> ek naya function banata hai jisme <code>this</code> <code>ticket</code> par tay ho jaata hai. <code>call</code> aur <code>apply</code> ek hi call ke liye yahi karte hain."
            }
          },
          {
            code: "return [\"x\"].map(() => this.agent)[0];",
            note: {
              en: "The arrow function has no own <code>this</code>, so it uses the method's <code>this</code> (the ticket). A normal <code>function</code> here would get its own, lost <code>this</code>.",
              hi: "Arrow function का अपना <code>this</code> नहीं है, इसलिए वह method वाला <code>this</code> (ticket) इस्तेमाल करता है। यहाँ normal <code>function</code> होता तो उसे अपना खोया हुआ <code>this</code> मिलता।",
              hg: "Arrow function ka apna <code>this</code> nahi hai, isliye woh method wala <code>this</code> (ticket) istemaal karta hai. Yahan normal <code>function</code> hota to use apna khoya hua <code>this</code> milta."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Passing <code>obj.method</code> as a callback without <code>bind</code> or an arrow wrapper: in <code>button.addEventListener(\"click\", ticket.describe)</code>, <code>this</code> becomes the button, not the ticket.</li><li>Using an arrow function as an object method and expecting <code>this</code> to be the object. An arrow takes <code>this</code> from where it is written, which is not the object.</li><li>Reading <code>this</code> inside a nested normal <code>function</code> in a method; it has its own <code>this</code>. Use an arrow there.</li></ul>",
          hi: "<ul><li><code>obj.method</code> को <code>bind</code> या arrow wrapper के बिना callback बनाकर देना: <code>button.addEventListener(\"click\", ticket.describe)</code> में <code>this</code> ticket नहीं, button बन जाता है।</li><li>Arrow function को object का method बनाकर उम्मीद करना कि <code>this</code> वही object होगा। Arrow <code>this</code> उस जगह से लेता है जहाँ वह लिखा है, जो object नहीं है।</li><li>Method के अंदर nested normal <code>function</code> में <code>this</code> पढ़ना; उसका अपना <code>this</code> होता है। वहाँ arrow लगाओ।</li></ul>",
          hg: "<ul><li><code>obj.method</code> ko <code>bind</code> ya arrow wrapper ke bina callback banakar dena: <code>button.addEventListener(\"click\", ticket.describe)</code> mein <code>this</code> ticket nahi, button ban jaata hai.</li><li>Arrow function ko object ka method banakar ummeed karna ki <code>this</code> wahi object hoga. Arrow <code>this</code> us jagah se leta hai jahan woh likha hai, jo object nahi hai.</li><li>Method ke andar nested normal <code>function</code> mein <code>this</code> padhna; uska apna <code>this</code> hota hai. Wahan arrow lagao.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use normal methods on objects and classes when you want <code>this</code> to be the owner. Use arrow functions for small callbacks inside them. When you must hand a method to someone else, wrap it: <code>() =&gt; ticket.describe()</code>.</p>",
          hi: "<p>Objects और classes पर normal methods तब रखो जब <code>this</code> को मालिक बनाना हो। उनके अंदर छोटे callbacks के लिए arrow functions लगाओ। किसी और को method देना ही पड़े तो उसे लपेट दो: <code>() =&gt; ticket.describe()</code>।</p>",
          hg: "<p>Objects aur classes par normal methods tab rakho jab <code>this</code> ko maalik banana ho. Unke andar chhote callbacks ke liye arrow functions lagao. Kisi aur ko method dena hi pade to use lapet do: <code>() =&gt; ticket.describe()</code>.</p>"
        },
        exercise: {
          task: {
            en: "<p>The object <code>agent</code> has a method <code>greet()</code> that returns <code>\"Hi, I am \" + this.name</code>. Copy the method into a variable <code>greet</code> so that calling <code>greet()</code> still prints <code>Hi, I am Meena</code>.</p>",
            hi: "<p>Object <code>agent</code> में method <code>greet()</code> है जो <code>\"Hi, I am \" + this.name</code> लौटाता है। Method को variable <code>greet</code> में ऐसे copy करो कि <code>greet()</code> call करने पर भी <code>Hi, I am Meena</code> print हो।</p>",
            hg: "<p>Object <code>agent</code> mein method <code>greet()</code> hai jo <code>\"Hi, I am \" + this.name</code> lautata hai. Method ko variable <code>greet</code> mein aise copy karo ki <code>greet()</code> call karne par bhi <code>Hi, I am Meena</code> print ho.</p>"
          },
          hint: {
            en: "<p>Fix <code>this</code> with <code>agent.greet.bind(agent)</code>.</p>",
            hi: "<p><code>agent.greet.bind(agent)</code> से <code>this</code> तय कर दो।</p>",
            hg: "<p><code>agent.greet.bind(agent)</code> se <code>this</code> tay kar do.</p>"
          },
          solution: {
            lang: "javascript",
            caption: {
              en: "Solution: bind keeps this",
              hi: "हल: bind से this बना रहता है",
              hg: "Solution: bind se this bana rehta hai"
            },
            check: "run",
            src: "const agent = {\n  name: \"Meena\",\n  greet() { return \"Hi, I am \" + this.name; },\n};\n\nconst greet = agent.greet.bind(agent);\nconsole.log(greet());",
            expected: "Hi, I am Meena"
          }
        },
        quiz: {
          q: {
            en: "In a module (strict mode), <code>const f = obj.method; f();</code> calls a method that reads <code>this.id</code>. What happens?",
            hi: "Module (strict mode) में <code>const f = obj.method; f();</code> ऐसे method को call करता है जो <code>this.id</code> पढ़ता है। क्या होगा?",
            hg: "Module (strict mode) mein <code>const f = obj.method; f();</code> aise method ko call karta hai jo <code>this.id</code> padhta hai. Kya hoga?"
          },
          options: [
            {
              en: "It returns <code>obj.id</code>, because the function came from <code>obj</code>",
              hi: "<code>obj.id</code> मिलेगा, क्योंकि function <code>obj</code> से आया है",
              hg: "<code>obj.id</code> milega, kyunki function <code>obj</code> se aaya hai"
            },
            {
              en: "A <code>TypeError</code>, because <code>this</code> is <code>undefined</code>",
              hi: "<code>TypeError</code> आएगा, क्योंकि <code>this</code> <code>undefined</code> है",
              hg: "<code>TypeError</code> aayega, kyunki <code>this</code> <code>undefined</code> hai"
            },
            {
              en: "A compile error",
              hi: "Compile error आएगा",
              hg: "Compile error aayega"
            },
            {
              en: "It returns <code>undefined</code>",
              hi: "<code>undefined</code> मिलेगा",
              hg: "<code>undefined</code> milega"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>The call has nothing before the dot, so <code>this</code> is <code>undefined</code> and reading <code>.id</code> throws. Where the function was copied from does not matter; only the call decides.</p>",
            hi: "<p>Call में dot के पहले कुछ नहीं है, इसलिए <code>this</code> <code>undefined</code> है और <code>.id</code> पढ़ना error फेंकता है। Function कहाँ से copy हुआ, यह मायने नहीं रखता; सिर्फ़ call तय करती है।</p>",
            hg: "<p>Call mein dot ke pehle kuch nahi hai, isliye <code>this</code> <code>undefined</code> hai aur <code>.id</code> padhna error phenkta hai. Function kahan se copy hua, ye mayne nahi rakhta; sirf call tay karti hai.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>this</code> is decided by how the function is called: <code>obj.f()</code>, plain call, <code>bind/call/apply</code>, or <code>new</code>.</li><li>A method passed as a callback loses its object; fix with <code>bind</code> or an arrow wrapper.</li><li>Arrow functions use the <code>this</code> of the surrounding code.</li></ul>",
          hi: "<ul><li><code>this</code> इससे तय होता है कि function कैसे call हुआ: <code>obj.f()</code>, सीधी call, <code>bind/call/apply</code>, या <code>new</code>।</li><li>Callback बनकर गया method अपना object खो देता है; <code>bind</code> या arrow wrapper से ठीक करो।</li><li>Arrow functions आसपास के code का <code>this</code> इस्तेमाल करते हैं।</li></ul>",
          hg: "<ul><li><code>this</code> isse tay hota hai ki function kaise call hua: <code>obj.f()</code>, seedhi call, <code>bind/call/apply</code>, ya <code>new</code>.</li><li>Callback banke gaya method apna object kho deta hai; <code>bind</code> ya arrow wrapper se theek karo.</li><li>Arrow functions aaspaas ke code ka <code>this</code> istemaal karte hain.</li></ul>"
        }
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "A lost this and three fixes (runs on Node)",
            hi: "खोया हुआ this और तीन fixes (Node पर चलता है)",
            hg: "Khoya hua this aur teen fixes (Node par chalta hai)"
          },
          check: "run",
          src: "const ticket = {\n  id: 501,\n  agent: \"Meena\",\n  describe() { return \"#\" + this.id + \" is with \" + this.agent; },\n  agentNames() {\n    return [\"x\"].map(() => this.agent)[0];\n  },\n  badNames() {\n    return [\"x\"].map(function () { return typeof this; })[0];\n  },\n};\n\nconsole.log(ticket.describe());\nconst detached = ticket.describe;\ntry { console.log(detached()); } catch (error) { console.log(error.name); }\nconsole.log(detached.bind(ticket)());\nconsole.log(ticket.describe.call({ id: 502, agent: \"Kiran\" }));\nconsole.log(ticket.agentNames(), ticket.badNames());",
          expected: "#501 is with Meena\nTypeError\n#501 is with Meena\n#502 is with Kiran\nMeena undefined"
        }
      ]
    },
    {
      id: "prototypes-classes",
      depth: "short",
      title: {
        en: "Prototypes and classes",
        hi: "Prototypes और classes",
        hg: "Prototypes aur classes"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 3 gave you <code>this</code>: inside a method it is the object the method was called on. A <code>class</code> is the neat way to write many such objects. Under the hood, JavaScript objects share methods through a <b>prototype</b>, which is how this lesson explains classes to a C# developer.</p>",
          hi: "<p>पाठ 3 में <code>this</code> मिला: method के अंदर यह वही object है जिस पर method call हुआ। <code>class</code> ऐसे कई objects लिखने का साफ़ तरीका है। अंदर से JavaScript objects methods <b>prototype</b> के ज़रिए share करते हैं; इसी से यह पाठ C# developer को classes समझाता है।</p>",
          hg: "<p>Lesson 3 mein <code>this</code> mila: method ke andar ye wahi object hai jis par method call hua. <code>class</code> aise kai objects likhne ka saaf tareeka hai. Andar se JavaScript objects methods <b>prototype</b> ke zariye share karte hain; isi se ye lesson C# developer ko classes samjhata hai.</p>"
        },
        what: {
          en: "<p>Every object has a hidden link to another object, its <b>prototype</b>. When you read <code>ticket.summary</code> and the ticket does not have it, JavaScript looks in the prototype, then in that object's prototype, until it finds it or the chain ends. A <code>class</code> is clean syntax that puts methods on the prototype for you.</p>",
          hi: "<p>हर object का दूसरे object से एक छिपा link होता है, उसका <b>prototype</b>। जब <code>ticket.summary</code> पढ़ते हो और ticket में वह नहीं है, तो JavaScript prototype में देखता है, फिर उसके prototype में, जब तक मिल न जाए या chain खत्म न हो। <code>class</code> साफ़ syntax है जो methods को prototype पर आपके लिए रख देता है।</p>",
          hg: "<p>Har object ka doosre object se ek chhipa link hota hai, uska <b>prototype</b>. Jab <code>ticket.summary</code> padhte ho aur ticket mein woh nahi hai, to JavaScript prototype mein dekhta hai, phir uske prototype mein, jab tak mil na jaaye ya chain khatam na ho. <code>class</code> saaf syntax hai jo methods ko prototype par aapke liye rakh deta hai.</p>"
        },
        why: {
          en: "<p>Your React and Node code (Day 24 onwards) is full of classes, <code>extends</code> and <code>#private</code> fields. If you only know the syntax, \"is JavaScript class-based like C#?\" is a trap question. The answer: no, it is prototype-based, and <code>class</code> is a friendly layer over it.</p>",
          hi: "<p>आपका React और Node code (Day 24 से आगे) classes, <code>extends</code> और <code>#private</code> fields से भरा है। सिर्फ़ syntax आता हो तो \"क्या JavaScript C# की तरह class-based है?\" एक जाल वाला सवाल है। जवाब: नहीं, यह prototype-based है और <code>class</code> उस पर चढ़ी एक friendly परत है।</p>",
          hg: "<p>Aapka React aur Node code (Day 24 se aage) classes, <code>extends</code> aur <code>#private</code> fields se bhara hai. Sirf syntax aata ho to \"kya JavaScript C# ki tarah class-based hai?\" ek jaal wala sawaal hai. Jawab: nahi, ye prototype-based hai aur <code>class</code> us par chadhi ek friendly parat hai.</p>"
        },
        analogy: {
          en: "<p>A recipe card at the canteen. Every thali is made from the same card, so the card is kept once, not copied onto each plate. The thali only holds what is special to it (today's sabzi). If you ask the thali \"how is this cooked?\", it points to the card.</p>",
          hi: "<p>Canteen का recipe card। हर थाली उसी card से बनती है, इसलिए card एक बार रखा जाता है, हर plate पर copy नहीं होता। थाली में सिर्फ़ वही रहता है जो उसकी अपनी खासियत है (आज की सब्ज़ी)। थाली से पूछो \"यह कैसे बना?\", तो वह card की तरफ़ इशारा करती है।</p>",
          hg: "<p>Canteen ka recipe card. Har thali usi card se banti hai, isliye card ek baar rakha jaata hai, har plate par copy nahi hota. Thali mein sirf wahi rehta hai jo uski apni khaasiyat hai (aaj ki sabzi). Thali se pucho \"ye kaise bana?\", to woh card ki taraf ishaara karti hai.</p>"
        },
        lines: [
          {
            code: "#status = \"Open\";",
            note: {
              en: "A <code>#private</code> field. The language itself blocks outside access (a syntax error, not just a convention), like C# <code>private</code>.",
              hi: "<code>#private</code> field। Language खुद बाहर से access रोकती है (सिर्फ़ convention नहीं, syntax error), C# के <code>private</code> जैसा।",
              hg: "<code>#private</code> field. Language khud bahar se access rokti hai (sirf convention nahi, syntax error), C# ke <code>private</code> jaisa."
            }
          },
          {
            code: "constructor(id, issue) { this.id = id; this.issue = issue; }",
            note: {
              en: "Runs on <code>new</code>. <code>this</code> is the new object; these two fields are stored on <b>each ticket</b>.",
              hi: "<code>new</code> पर चलता है। <code>this</code> नया object है; ये दोनों fields <b>हर ticket</b> पर रखे जाते हैं।",
              hg: "<code>new</code> par chalta hai. <code>this</code> naya object hai; ye dono fields <b>har ticket</b> par rakhe jaate hain."
            }
          },
          {
            code: "class PremiumTicket extends SupportTicket {",
            note: {
              en: "<code>extends</code> links the prototypes: <code>PremiumTicket.prototype</code> points to <code>SupportTicket.prototype</code>. <code>super.summary()</code> calls the parent version, like <code>base.Summary()</code> in C#.",
              hi: "<code>extends</code> prototypes को जोड़ता है: <code>PremiumTicket.prototype</code> <code>SupportTicket.prototype</code> की तरफ़ point करता है। <code>super.summary()</code> parent वाला version call करता है, C# के <code>base.Summary()</code> जैसा।",
              hg: "<code>extends</code> prototypes ko jodta hai: <code>PremiumTicket.prototype</code> <code>SupportTicket.prototype</code> ki taraf point karta hai. <code>super.summary()</code> parent wala version call karta hai, C# ke <code>base.Summary()</code> jaisa."
            }
          },
          {
            code: "console.log(typeof SupportTicket, t1.summary === SupportTicket.prototype.summary);",
            note: {
              en: "<code>typeof</code> of a class is <code>\"function\"</code>, and the ticket's <code>summary</code> is the very same function that sits once on the prototype.",
              hi: "Class का <code>typeof</code> <code>\"function\"</code> है, और ticket का <code>summary</code> वही function है जो prototype पर एक बार रखा है।",
              hg: "Class ka <code>typeof</code> <code>\"function\"</code> hai, aur ticket ka <code>summary</code> wahi function hai jo prototype par ek baar rakha hai."
            }
          },
          {
            code: "console.log(Object.hasOwn(t1, \"summary\"), \"summary\" in t1);",
            note: {
              en: "<code>hasOwn</code> asks \"is it stored on the ticket itself?\" (<code>false</code>). <code>in</code> follows the whole prototype chain (<code>true</code>).",
              hi: "<code>hasOwn</code> पूछता है \"क्या यह ticket पर ही रखा है?\" (<code>false</code>)। <code>in</code> पूरी prototype chain देखता है (<code>true</code>)।",
              hg: "<code>hasOwn</code> puchhta hai \"kya ye ticket par hi rakha hai?\" (<code>false</code>). <code>in</code> poori prototype chain dekhta hai (<code>true</code>)."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Thinking JavaScript classes work exactly like C# classes. There are no real class types at run time; <code>typeof</code> a class is <code>\"function\"</code> and methods are looked up along the chain.</li><li>Calling a class without <code>new</code>. It throws <code>TypeError</code>; old constructor functions silently misbehaved.</li><li>Forgetting that a <code>#private</code> field is skipped by <code>JSON.stringify</code> and <code>Object.keys</code>, so it will not appear in your API payload.</li></ul>",
          hi: "<ul><li>यह सोचना कि JavaScript classes ठीक C# classes जैसी हैं। Run time पर असली class types नहीं होते; class का <code>typeof</code> <code>\"function\"</code> है और methods chain में ढूँढे जाते हैं।</li><li>Class को <code>new</code> के बिना call करना। <code>TypeError</code> आता है; पुराने constructor functions चुपचाप ग़लत चलते थे।</li><li>यह भूलना कि <code>#private</code> field <code>JSON.stringify</code> और <code>Object.keys</code> में नहीं आता, इसलिए वह आपके API payload में नहीं दिखेगा।</li></ul>",
          hg: "<ul><li>Ye sochna ki JavaScript classes theek C# classes jaisi hain. Run time par asli class types nahi hote; class ka <code>typeof</code> <code>\"function\"</code> hai aur methods chain mein dhundhe jaate hain.</li><li>Class ko <code>new</code> ke bina call karna. <code>TypeError</code> aata hai; purane constructor functions chupchaap galat chalte the.</li><li>Ye bhoolna ki <code>#private</code> field <code>JSON.stringify</code> aur <code>Object.keys</code> mein nahi aata, isliye woh aapke API payload mein nahi dikhega.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a class when you need many objects with the same behaviour and hidden state. For plain data use an object literal; for a few related functions use a module. Prefer composition over deep <code>extends</code> chains, as in C#.</p>",
          hi: "<p>जब एक जैसे behaviour और छिपी state वाले कई objects चाहिए तब class use करो। सादे data के लिए object literal; कुछ जुड़े functions के लिए module। C# की तरह ही गहरी <code>extends</code> chains की जगह composition चुनो।</p>",
          hg: "<p>Jab ek jaise behaviour aur chhipi state wale kai objects chahiye tab class use karo. Saade data ke liye object literal; kuch jude functions ke liye module. C# ki tarah hi gehri <code>extends</code> chains ki jagah composition chuno.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write a class <code>Agent</code> with a <code>name</code>, a <code>#open</code> counter starting at 0, a method <code>assign(ticket)</code> that adds one, and a getter <code>openCount</code>. Assign two tickets to Meena and print <code>Meena 2</code>.</p>",
            hi: "<p>एक class <code>Agent</code> लिखो जिसमें <code>name</code>, 0 से शुरू होने वाला <code>#open</code> counter, एक की गिनती बढ़ाने वाला method <code>assign(ticket)</code> और getter <code>openCount</code> हो। Meena को दो tickets assign करो और <code>Meena 2</code> print करो।</p>",
            hg: "<p>Ek class <code>Agent</code> likho jisme <code>name</code>, 0 se shuru hone wala <code>#open</code> counter, ek ki ginti badhane wala method <code>assign(ticket)</code> aur getter <code>openCount</code> ho. Meena ko do tickets assign karo aur <code>Meena 2</code> print karo.</p>"
          },
          hint: {
            en: "<p>Use <code>this.#open++</code> in <code>assign</code> and <code>get openCount() { return this.#open; }</code>.</p>",
            hi: "<p><code>assign</code> में <code>this.#open++</code> और <code>get openCount() { return this.#open; }</code> लिखो।</p>",
            hg: "<p><code>assign</code> mein <code>this.#open++</code> aur <code>get openCount() { return this.#open; }</code> likho.</p>"
          },
          solution: {
            lang: "javascript",
            caption: {
              en: "Solution: a class with private state",
              hi: "हल: private state वाली class",
              hg: "Solution: private state wali class"
            },
            check: "run",
            src: "class Agent {\n  #open = 0;\n\n  constructor(name) { this.name = name; }\n\n  assign(ticket) {\n    this.#open++;\n    return this;\n  }\n\n  get openCount() { return this.#open; }\n}\n\nconst meena = new Agent(\"Meena\");\nmeena.assign(501).assign(502);\nconsole.log(meena.name, meena.openCount);",
            expected: "Meena 2"
          }
        },
        quiz: {
          q: {
            en: "Two tickets are created from <code>SupportTicket</code>. Where is the <code>summary</code> method stored?",
            hi: "<code>SupportTicket</code> से दो tickets बने हैं। <code>summary</code> method कहाँ रखा होता है?",
            hg: "<code>SupportTicket</code> se do tickets bane hain. <code>summary</code> method kahan rakha hota hai?"
          },
          options: [
            {
              en: "Copied into each ticket",
              hi: "हर ticket में copy होकर",
              hg: "Har ticket mein copy hokar"
            },
            {
              en: "In a separate class object per ticket",
              hi: "हर ticket के लिए अलग class object में",
              hg: "Har ticket ke liye alag class object mein"
            },
            {
              en: "Inside the <code>#status</code> field",
              hi: "<code>#status</code> field के अंदर",
              hg: "<code>#status</code> field ke andar"
            },
            {
              en: "Once on <code>SupportTicket.prototype</code>, shared by both",
              hi: "<code>SupportTicket.prototype</code> पर एक बार, दोनों share करते हैं",
              hg: "<code>SupportTicket.prototype</code> par ek baar, dono share karte hain"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>Methods live once on the prototype. Each ticket stores only its own fields (<code>id</code>, <code>issue</code>), and a method call is found by walking up the chain.</p>",
            hi: "<p>Methods prototype पर एक बार रहते हैं। हर ticket सिर्फ़ अपने fields (<code>id</code>, <code>issue</code>) रखता है, और method call chain में ऊपर चढ़कर मिलता है।</p>",
            hg: "<p>Methods prototype par ek baar rehte hain. Har ticket sirf apne fields (<code>id</code>, <code>issue</code>) rakhta hai, aur method call chain mein upar chadhkar milta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Objects inherit through a prototype chain; <code>class</code> is clean syntax over it.</li><li>Methods live once on the prototype; fields live on each object.</li><li><code>#private</code> is enforced by the language; <code>extends</code>/<code>super</code> work like <code>:</code>/<code>base</code> in C#.</li></ul>",
          hi: "<ul><li>Objects prototype chain से inherit करते हैं; <code>class</code> उस पर साफ़ syntax है।</li><li>Methods prototype पर एक बार रहते हैं; fields हर object पर।</li><li><code>#private</code> language लागू करती है; <code>extends</code>/<code>super</code> C# के <code>:</code>/<code>base</code> जैसे चलते हैं।</li></ul>",
          hg: "<ul><li>Objects prototype chain se inherit karte hain; <code>class</code> us par saaf syntax hai.</li><li>Methods prototype par ek baar rehte hain; fields har object par.</li><li><code>#private</code> language laagu karti hai; <code>extends</code>/<code>super</code> C# ke <code>:</code>/<code>base</code> jaise chalte hain.</li></ul>"
        }
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "SupportTicket and PremiumTicket as JavaScript classes (runs on Node)",
            hi: "JavaScript classes में SupportTicket और PremiumTicket (Node पर चलता है)",
            hg: "JavaScript classes mein SupportTicket aur PremiumTicket (Node par chalta hai)"
          },
          check: "run",
          src: "class SupportTicket {\n  #status = \"Open\";\n\n  constructor(id, issue) { this.id = id; this.issue = issue; }\n\n  close() { this.#status = \"Closed\"; return this; }\n\n  summary() { return \"#\" + this.id + \" \" + this.issue + \" [\" + this.#status + \"]\"; }\n}\n\nclass PremiumTicket extends SupportTicket {\n  summary() { return \"PRIORITY \" + super.summary(); }\n}\n\nconst t1 = new SupportTicket(501, \"Login fails\");\nconst t2 = new PremiumTicket(502, \"Refund delayed\");\nconsole.log(t1.summary());\nconsole.log(t2.close().summary());\nconsole.log(typeof SupportTicket, t1.summary === SupportTicket.prototype.summary);\nconsole.log(Object.hasOwn(t1, \"summary\"), \"summary\" in t1);\nconsole.log(Object.getPrototypeOf(PremiumTicket.prototype) === SupportTicket.prototype);\nconsole.log(JSON.stringify(t1));",
          expected: "#501 Login fails [Open]\nPRIORITY #502 Refund delayed [Closed]\nfunction true\nfalse true\ntrue\n{\"id\":501,\"issue\":\"Login fails\"}"
        }
      ]
    },
    {
      id: "event-loop-promises",
      depth: "short",
      title: {
        en: "Event loop and promises",
        hi: "Event loop और promises",
        hg: "Event loop aur promises"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lessons 1 to 4 were about names, closures, <code>this</code> and classes: all <b>synchronous</b> code that runs line by line. Now we meet the part that makes JavaScript different from C#: one thread, a queue of waiting work, and <b>promises</b> that stand for a result that has not arrived yet.</p>",
          hi: "<p>पाठ 1 से 4 नामों, closures, <code>this</code> और classes के बारे में थे: सब <b>synchronous</b> code जो line-दर-line चलता है। अब वह हिस्सा आता है जो JavaScript को C# से अलग बनाता है: एक thread, इंतज़ार करते काम की queue, और <b>promises</b> जो ऐसे result की जगह खड़े होते हैं जो अभी आया नहीं।</p>",
          hg: "<p>Lesson 1 se 4 naamon, closures, <code>this</code> aur classes ke baare mein the: sab <b>synchronous</b> code jo line-dar-line chalta hai. Ab woh hissa aata hai jo JavaScript ko C# se alag banata hai: ek thread, intezaar karte kaam ki queue, aur <b>promises</b> jo aise result ki jagah khade hote hain jo abhi aaya nahi.</p>"
        },
        what: {
          en: "<p>One thread runs your JavaScript, one piece at a time. Waiting work (timers, network, files) happens outside and finishes into queues. The <b>event loop</b> picks from them: first the current code to its end, then <b>all microtasks</b> (promise callbacks), then <b>one macrotask</b> (<code>setTimeout</code>, I/O, a click), then microtasks again.</p>",
          hi: "<p>एक thread आपका JavaScript चलाता है, एक बार में एक हिस्सा। इंतज़ार वाला काम (timers, network, files) बाहर होता है और queues में आकर खत्म होता है। <b>Event loop</b> उनमें से चुनता है: पहले मौजूदा code अंत तक, फिर <b>सारे microtasks</b> (promise callbacks), फिर <b>एक macrotask</b> (<code>setTimeout</code>, I/O, click), फिर दोबारा microtasks।</p>",
          hg: "<p>Ek thread aapka JavaScript chalata hai, ek baar mein ek hissa. Intezaar wala kaam (timers, network, files) bahar hota hai aur queues mein aakar khatam hota hai. <b>Event loop</b> unmein se chunta hai: pehle maujooda code ant tak, phir <b>saare microtasks</b> (promise callbacks), phir <b>ek macrotask</b> (<code>setTimeout</code>, I/O, click), phir dobara microtasks.</p>"
        },
        why: {
          en: "<p>\"How does JavaScript do many things with one thread?\" and \"what prints first, <code>setTimeout(0)</code> or <code>Promise.then</code>?\" are standard Tech Lead questions. It also explains real bugs: a long loop freezes a web page or blocks every request of a Node server, because there is no second thread to carry on.</p>",
          hi: "<p>\"JavaScript एक thread से कई काम कैसे करता है?\" और \"पहले क्या print होगा, <code>setTimeout(0)</code> या <code>Promise.then</code>?\" Tech Lead के आम सवाल हैं। यह असली bugs भी समझाता है: लंबा loop web page को freeze कर देता है या Node server की हर request रोक देता है, क्योंकि आगे बढ़ाने वाला दूसरा thread है ही नहीं।</p>",
          hg: "<p>\"JavaScript ek thread se kai kaam kaise karta hai?\" aur \"pehle kya print hoga, <code>setTimeout(0)</code> ya <code>Promise.then</code>?\" Tech Lead ke aam sawaal hain. Ye asli bugs bhi samjhata hai: lamba loop web page ko freeze kar deta hai ya Node server ki har request rok deta hai, kyunki aage badhane wala doosra thread hai hi nahi.</p>"
        },
        analogy: {
          en: "<p>A chai stall with one owner. He takes your order, puts the kettle on and does not stand watching it. When a cup is ready, the helper hands it over. Customers already at the counter (microtasks) are served before the queue waiting outside (macrotasks).</p>",
          hi: "<p>एक मालिक वाली चाय की दुकान। वह आपका order लेता है, केतली चढ़ाता है और उसे घूरता नहीं रहता। कप तैयार होने पर helper दे जाता है। Counter पर पहले से खड़े customers (microtasks) को बाहर की लाइन (macrotasks) से पहले निपटाया जाता है।</p>",
          hg: "<p>Ek maalik wali chai ki dukaan. Woh aapka order leta hai, ketli chadhata hai aur use ghoorta nahi rehta. Cup taiyaar hone par helper de jaata hai. Counter par pehle se khade customers (microtasks) ko bahar ki line (macrotasks) se pehle nipta diya jaata hai.</p>"
        },
        focus: {
          lang: "csharp",
          caption: {
            en: "C# for comparison: Task is the promise, but threads may be involved",
            hi: "तुलना के लिए C#: Task ही promise है, पर threads शामिल हो सकते हैं",
            hg: "Tulna ke liye C#: Task hi promise hai, par threads shaamil ho sakte hain"
          },
          check: "none",
          src: "// C#: Task is like Promise. After an await, the rest of the method may resume\n// on a thread-pool thread (in an ASP.NET Core app). JavaScript has no such pool:\n// every callback runs on the one loop thread.\n// Also: awaiting a Task that is already complete continues synchronously in C#;\n// a JavaScript then/await callback never runs synchronously, it always waits\n// for the current code to finish (it is a microtask).\nTask<string> job = AssignAsync(501);\nstring message = await job;"
        },
        lines: [
          {
            code: "if (id > 0) resolve(\"ticket \" + id + \" assigned\");",
            note: {
              en: "<code>resolve</code> moves the promise from <b>pending</b> to <b>fulfilled</b>. <code>reject</code> (next line) moves it to <b>rejected</b>. Both are the settled states.",
              hi: "<code>resolve</code> promise को <b>pending</b> से <b>fulfilled</b> में ले जाता है। <code>reject</code> (अगली line) उसे <b>rejected</b> में ले जाता है। दोनों settled states हैं।",
              hg: "<code>resolve</code> promise ko <b>pending</b> se <b>fulfilled</b> mein le jaata hai. <code>reject</code> (agli line) use <b>rejected</b> mein le jaata hai. Dono settled states hain."
            }
          },
          {
            code: "setTimeout(() => console.log(\"6 macrotask: SMS sent\"), 0);",
            note: {
              en: "Even with a delay of 0, the callback goes to the macrotask queue and waits until the current code and all microtasks are done.",
              hi: "0 की delay के बावजूद callback macrotask queue में जाता है और मौजूदा code व सारे microtasks खत्म होने तक रुकता है।",
              hg: "0 ki delay ke bawajood callback macrotask queue mein jaata hai aur maujooda code va saare microtasks khatam hone tak rukta hai."
            }
          },
          {
            code: "console.log(\"2 sync: ticket 501 saved\");",
            note: {
              en: "This runs <b>before</b> any promise callback. A <code>then</code> callback never interrupts running code; it waits for the current code to finish.",
              hi: "यह किसी भी promise callback से <b>पहले</b> चलता है। <code>then</code> callback चलते हुए code को बीच में नहीं रोकता; वह मौजूदा code खत्म होने का इंतज़ार करता है।",
              hg: "Ye kisi bhi promise callback se <b>pehle</b> chalta hai. <code>then</code> callback chalte hue code ko beech mein nahi rokta; woh maujooda code khatam hone ka intezaar karta hai."
            }
          },
          {
            code: "return assign(-1);",
            note: {
              en: "Returning a promise from <code>then</code> makes the chain wait for it. This one rejects, so the chain jumps over any <code>then</code> to the next <code>catch</code>.",
              hi: "<code>then</code> से promise return करने पर chain उसका इंतज़ार करती है। यह reject होता है, इसलिए chain किसी भी <code>then</code> को छोड़कर अगले <code>catch</code> पर कूद जाती है।",
              hg: "<code>then</code> se promise return karne par chain uska intezaar karti hai. Ye reject hota hai, isliye chain kisi bhi <code>then</code> ko chhodkar agle <code>catch</code> par kood jaati hai."
            }
          },
          {
            code: ".finally(() => console.log(\"5 microtask: finally runs either way\"));",
            note: {
              en: "<code>finally</code> runs whether the chain succeeded or failed, like a C# <code>finally</code> block. Only after all these microtasks does the timer (6) get its turn.",
              hi: "<code>finally</code> चलता है चाहे chain सफल हो या fail, C# के <code>finally</code> block जैसा। इन सारे microtasks के बाद ही timer (6) की बारी आती है।",
              hg: "<code>finally</code> chalta hai chahe chain safal ho ya fail, C# ke <code>finally</code> block jaisa. In saare microtasks ke baad hi timer (6) ki baari aati hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Expecting <code>setTimeout(fn, 0)</code> to run \"immediately\". It runs after the current code and after all pending promise callbacks.</li><li>Running a long CPU loop on the main thread and wondering why the page or server hangs. <code>async</code> does not make a loop faster; move heavy work to a Worker or another service.</li><li>Leaving a rejected promise without <code>catch</code>. In Node it can crash the process; in a browser it is logged as an error.</li></ul>",
          hi: "<ul><li><code>setTimeout(fn, 0)</code> से उम्मीद करना कि वह \"तुरंत\" चलेगा। वह मौजूदा code और सारे pending promise callbacks के बाद चलता है।</li><li>Main thread पर लंबा CPU loop चलाना और सोचना कि page या server क्यों अटका। <code>async</code> loop को तेज़ नहीं बनाता; भारी काम Worker या दूसरी service को दो।</li><li>Rejected promise को <code>catch</code> के बिना छोड़ना। Node में इससे process crash हो सकता है; browser में error log होता है।</li></ul>",
          hg: "<ul><li><code>setTimeout(fn, 0)</code> se ummeed karna ki woh \"turant\" chalega. Woh maujooda code aur saare pending promise callbacks ke baad chalta hai.</li><li>Main thread par lamba CPU loop chalana aur sochna ki page ya server kyun atka. <code>async</code> loop ko tez nahi banata; bhaari kaam Worker ya doosri service ko do.</li><li>Rejected promise ko <code>catch</code> ke bina chhodna. Node mein isse process crash ho sakta hai; browser mein error log hota hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a promise for one result that arrives later (one API response). For events that fire many times (clicks, sockets) a promise is the wrong tool, because it settles only once. Use <code>Promise.all</code> when several independent calls must all finish.</p>",
          hi: "<p>बाद में आने वाले एक result (एक API response) के लिए promise use करो। कई बार चलने वाले events (clicks, sockets) के लिए promise ग़लत tool है, क्योंकि वह सिर्फ़ एक बार settle होता है। कई independent calls सब खत्म होनी हों तो <code>Promise.all</code> use करो।</p>",
          hg: "<p>Baad mein aane wale ek result (ek API response) ke liye promise use karo. Kai baar chalne wale events (clicks, sockets) ke liye promise galat tool hai, kyunki woh sirf ek baar settle hota hai. Kai independent calls sab khatam honi hon to <code>Promise.all</code> use karo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write code that prints <code>sync</code>, then <code>promise</code>, then <code>timer</code>. Use <code>setTimeout</code>, <code>Promise.resolve().then</code> and a normal <code>console.log</code>. Write the timer line <b>first</b> in the file.</p>",
            hi: "<p>ऐसा code लिखो जो <code>sync</code>, फिर <code>promise</code>, फिर <code>timer</code> print करे। <code>setTimeout</code>, <code>Promise.resolve().then</code> और सामान्य <code>console.log</code> use करो। Timer वाली line file में <b>सबसे पहले</b> लिखो।</p>",
            hg: "<p>Aisa code likho jo <code>sync</code>, phir <code>promise</code>, phir <code>timer</code> print kare. <code>setTimeout</code>, <code>Promise.resolve().then</code> aur saamaanya <code>console.log</code> use karo. Timer wali line file mein <b>sabse pehle</b> likho.</p>"
          },
          hint: {
            en: "<p>The order of lines in the file does not decide it. Sync code runs first, then microtasks (promise), then the timer.</p>",
            hi: "<p>File में lines का क्रम इसे तय नहीं करता। पहले sync code, फिर microtasks (promise), फिर timer।</p>",
            hg: "<p>File mein lines ka kram ise tay nahi karta. Pehle sync code, phir microtasks (promise), phir timer.</p>"
          },
          solution: {
            lang: "javascript",
            caption: {
              en: "Solution: sync, then microtask, then macrotask",
              hi: "हल: पहले sync, फिर microtask, फिर macrotask",
              hg: "Solution: pehle sync, phir microtask, phir macrotask"
            },
            check: "run",
            src: "setTimeout(() => console.log(\"timer\"), 0);\nPromise.resolve().then(() => console.log(\"promise\"));\nconsole.log(\"sync\");",
            expected: "sync\npromise\ntimer"
          }
        },
        quiz: {
          q: {
            en: "A file has <code>setTimeout(A, 0)</code>, then <code>Promise.resolve().then(B)</code>, then <code>console.log(\"C\")</code>. In which order do A, B and C run?",
            hi: "File में पहले <code>setTimeout(A, 0)</code>, फिर <code>Promise.resolve().then(B)</code>, फिर <code>console.log(\"C\")</code> है। A, B और C किस क्रम में चलेंगे?",
            hg: "File mein pehle <code>setTimeout(A, 0)</code>, phir <code>Promise.resolve().then(B)</code>, phir <code>console.log(\"C\")</code> hai. A, B aur C kis kram mein chalenge?"
          },
          options: [
            {
              en: "A, B, C",
              hi: "A, B, C क्रम में",
              hg: "A, B, C kram mein"
            },
            {
              en: "C, B, A",
              hi: "C, B, A क्रम में",
              hg: "C, B, A kram mein"
            },
            {
              en: "C, A, B",
              hi: "C, A, B क्रम में",
              hg: "C, A, B kram mein"
            },
            {
              en: "B, C, A",
              hi: "B, C, A क्रम में",
              hg: "B, C, A kram mein"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>C is synchronous, so it runs first. B is a microtask and runs right after the current code. A is a macrotask and waits for the next turn of the loop.</p>",
            hi: "<p>C synchronous है, इसलिए पहले चलता है। B microtask है और मौजूदा code के ठीक बाद चलता है। A macrotask है और loop की अगली बारी का इंतज़ार करता है।</p>",
            hg: "<p>C synchronous hai, isliye pehle chalta hai. B microtask hai aur maujooda code ke theek baad chalta hai. A macrotask hai aur loop ki agli baari ka intezaar karta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>One thread runs your JavaScript; waiting happens outside and returns through queues.</li><li>Order: current code, then all microtasks (promises), then one macrotask (timer, I/O), then repeat.</li><li>A promise is pending, then fulfilled or rejected; <code>then</code>, <code>catch</code>, <code>finally</code> each return a new promise.</li></ul>",
          hi: "<ul><li>एक thread आपका JavaScript चलाता है; इंतज़ार बाहर होता है और queues से लौटता है।</li><li>क्रम: मौजूदा code, फिर सारे microtasks (promises), फिर एक macrotask (timer, I/O), फिर दोहराओ।</li><li>Promise पहले pending, फिर fulfilled या rejected; <code>then</code>, <code>catch</code>, <code>finally</code> हर एक नया promise लौटाता है।</li></ul>",
          hg: "<ul><li>Ek thread aapka JavaScript chalata hai; intezaar bahar hota hai aur queues se lautta hai.</li><li>Kram: maujooda code, phir saare microtasks (promises), phir ek macrotask (timer, I/O), phir dohrao.</li><li>Promise pehle pending, phir fulfilled ya rejected; <code>then</code>, <code>catch</code>, <code>finally</code> har ek naya promise lautata hai.</li></ul>"
        }
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "The order of sync code, microtasks and macrotasks (runs on Node)",
            hi: "Sync code, microtasks और macrotasks का क्रम (Node पर चलता है)",
            hg: "Sync code, microtasks aur macrotasks ka kram (Node par chalta hai)"
          },
          check: "run",
          src: "function assign(id) {\n  return new Promise((resolve, reject) => {\n    if (id > 0) resolve(\"ticket \" + id + \" assigned\");\n    else reject(new Error(\"invalid id \" + id));\n  });\n}\n\nconsole.log(\"1 sync: ticket 501 received\");\nsetTimeout(() => console.log(\"6 macrotask: SMS sent\"), 0);\nassign(501)\n  .then((message) => {\n    console.log(\"3 microtask: \" + message);\n    return assign(-1);\n  })\n  .catch((error) => console.log(\"4 microtask: \" + error.message))\n  .finally(() => console.log(\"5 microtask: finally runs either way\"));\nconsole.log(\"2 sync: ticket 501 saved\");",
          expected: "1 sync: ticket 501 received\n2 sync: ticket 501 saved\n3 microtask: ticket 501 assigned\n4 microtask: invalid id -1\n5 microtask: finally runs either way\n6 macrotask: SMS sent"
        }
      ]
    },
    {
      id: "async-await-fetch",
      depth: "short",
      title: {
        en: "async/await and fetch",
        hi: "async/await और fetch",
        hg: "async/await aur fetch"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 5 gave you promises with <code>then/catch/finally</code> chains. <code>async/await</code> is the same promises written top to bottom, like the C# <code>async Task</code> methods you know. We use it with <code>fetch</code>, the browser call that reaches the Day 13 Web API.</p>",
          hi: "<p>पाठ 5 में <code>then/catch/finally</code> chains वाले promises मिले। <code>async/await</code> वही promises हैं जो ऊपर से नीचे लिखे जाते हैं, जैसे आपके जाने-पहचाने C# के <code>async Task</code> methods। हम इसे <code>fetch</code> के साथ use करते हैं, जो browser से Day 13 की Web API तक पहुँचता है।</p>",
          hg: "<p>Lesson 5 mein <code>then/catch/finally</code> chains wale promises mile. <code>async/await</code> wahi promises hain jo upar se neeche likhe jaate hain, jaise aapke jaane-pehchane C# ke <code>async Task</code> methods. Hum ise <code>fetch</code> ke saath use karte hain, jo browser se Day 13 ki Web API tak pahunchta hai.</p>"
        },
        what: {
          en: "<p>An <code>async</code> function always returns a promise. <code>await</code> pauses <b>only that function</b> until the promise settles, while the loop runs other work. A rejected promise becomes a normal <code>try/catch</code> error. <code>fetch(url)</code> returns a promise of a <b>Response</b>.</p>",
          hi: "<p><code>async</code> function हमेशा promise लौटाता है। <code>await</code> <b>सिर्फ़ उसी function</b> को तब तक रोकता है जब तक promise settle न हो, और loop दूसरा काम चलाता रहता है। Rejected promise सामान्य <code>try/catch</code> error बन जाता है। <code>fetch(url)</code> एक <b>Response</b> का promise लौटाता है।</p>",
          hg: "<p><code>async</code> function hamesha promise lautata hai. <code>await</code> <b>sirf usi function</b> ko tab tak rokta hai jab tak promise settle na ho, aur loop doosra kaam chalata rehta hai. Rejected promise saamaanya <code>try/catch</code> error ban jaata hai. <code>fetch(url)</code> ek <b>Response</b> ka promise lautata hai.</p>"
        },
        why: {
          en: "<p>Nearly all new JavaScript network code is <code>async/await</code>. The big trap is <code>fetch</code>: it rejects only when the request cannot be completed at all (no network). A <code>404</code> or <code>500</code> answer still <b>resolves</b>. A C# developer expecting an exception, as <code>EnsureSuccessStatusCode</code> would throw, ships a page that treats errors as data.</p>",
          hi: "<p>लगभग सारा नया JavaScript network code <code>async/await</code> है। बड़ा जाल <code>fetch</code> है: वह तभी reject होता है जब request पूरी हो ही न सके (network नहीं)। <code>404</code> या <code>500</code> का जवाब भी <b>resolve</b> होता है। C# developer जो exception की उम्मीद रखता है, जैसे <code>EnsureSuccessStatusCode</code> फेंकता, वह ऐसा page भेज देता है जो errors को data मान लेता है।</p>",
          hg: "<p>Lagbhag saara naya JavaScript network code <code>async/await</code> hai. Bada jaal <code>fetch</code> hai: woh tabhi reject hota hai jab request poori ho hi na sake (network nahi). <code>404</code> ya <code>500</code> ka jawab bhi <b>resolve</b> hota hai. C# developer jo exception ki ummeed rakhta hai, jaise <code>EnsureSuccessStatusCode</code> phenkta, woh aisa page bhej deta hai jo errors ko data maan leta hai.</p>"
        },
        analogy: {
          en: "<p>Ordering from a food delivery app. You place the order and carry on with your work; the phone buzzes when the food arrives. <code>await</code> is \"I will look at the phone when it buzzes\". And a delivered box that says \"restaurant closed\" still counts as delivered: you must open it and check, like <code>res.ok</code>.</p>",
          hi: "<p>Food delivery app से order करना। Order देकर आप अपना काम करते रहते हो; खाना आने पर phone बजता है। <code>await</code> है \"फ़ोन बजेगा तब देखूँगा\"। और जिस डिब्बे पर \"restaurant बंद है\" लिखा हो, वह भी delivered गिना जाता है: खोलकर जाँचना पड़ता है, जैसे <code>res.ok</code>।</p>",
          hg: "<p>Food delivery app se order karna. Order dekar aap apna kaam karte rehte ho; khaana aane par phone bajta hai. <code>await</code> hai \"phone bajega tab dekhunga\". Aur jis dabbe par \"restaurant band hai\" likha ho, woh bhi delivered ginta jaata hai: kholkar jaanchna padta hai, jaise <code>res.ok</code>.</p>"
        },
        lines: [
          {
            code: "async function loadTicket(url, fetchFn = fetch) {",
            note: {
              en: "The real <code>fetch</code> is the default argument, so production code uses it. The demo passes a fake one, so it runs without a server.",
              hi: "असली <code>fetch</code> default argument है, इसलिए production code वही use करता है। Demo एक नकली देता है, ताकि यह बिना server के चल सके।",
              hg: "Asli <code>fetch</code> default argument hai, isliye production code wahi use karta hai. Demo ek nakli deta hai, taaki ye bina server ke chal sake."
            }
          },
          {
            code: "const response = await fetchFn(url);",
            note: {
              en: "<code>await</code> unwraps the promise to a <code>Response</code> object. This function pauses here; the rest of the program keeps running.",
              hi: "<code>await</code> promise को <code>Response</code> object में खोलता है। यह function यहाँ रुकता है; बाकी program चलता रहता है।",
              hg: "<code>await</code> promise ko <code>Response</code> object mein kholta hai. Ye function yahan rukta hai; baaki program chalta rehta hai."
            }
          },
          {
            code: "if (!response.ok) throw new Error(\"HTTP \" + response.status);",
            note: {
              en: "<b>The key line.</b> <code>ok</code> is <code>true</code> for status 200 to 299. Without this check a 404 would flow on as if it were data.",
              hi: "<b>असली line।</b> Status 200 से 299 के लिए <code>ok</code> <code>true</code> होता है। इस check के बिना 404 data की तरह आगे बह जाता।",
              hg: "<b>Asli line.</b> Status 200 se 299 ke liye <code>ok</code> <code>true</code> hota hai. Is check ke bina 404 data ki tarah aage bah jaata."
            }
          },
          {
            code: "return response.json();",
            note: {
              en: "<code>json()</code> also returns a promise (reading the body takes time). Returning it from an <code>async</code> function is fine; the caller's <code>await</code> waits for it.",
              hi: "<code>json()</code> भी promise लौटाता है (body पढ़ने में समय लगता है)। इसे <code>async</code> function से return करना ठीक है; caller का <code>await</code> उसका इंतज़ार करता है।",
              hg: "<code>json()</code> bhi promise lautata hai (body padhne mein samay lagta hai). Ise <code>async</code> function se return karna theek hai; caller ka <code>await</code> uska intezaar karta hai."
            }
          },
          {
            code: "console.log(loadTicket(\"/api/tickets/501\", fakeFetch) instanceof Promise);",
            note: {
              en: "Calling an <code>async</code> function without <code>await</code> gives you the promise itself, just like a C# <code>Task</code> you forgot to await.",
              hi: "<code>async</code> function को <code>await</code> के बिना call करो तो promise ही मिलता है, ठीक C# के उस <code>Task</code> जैसा जिसे await करना भूल गए।",
              hg: "<code>async</code> function ko <code>await</code> ke bina call karo to promise hi milta hai, theek C# ke us <code>Task</code> jaisa jise await karna bhool gaye."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Wrapping only <code>fetch</code> in <code>try/catch</code> and trusting a 500 response. Check <code>response.ok</code> too.</li><li>Forgetting <code>await</code>: you then hold a promise and print <code>Promise { &lt;pending&gt; }</code> instead of the data.</li><li>Using <code>await</code> inside a normal function. It must be inside an <code>async</code> function or at the top level of a module.</li></ul>",
          hi: "<ul><li>सिर्फ़ <code>fetch</code> को <code>try/catch</code> में लपेटना और 500 response पर भरोसा करना। <code>response.ok</code> भी जाँचो।</li><li><code>await</code> भूल जाना: तब आपके हाथ में promise है और data की जगह <code>Promise { &lt;pending&gt; }</code> print होता है।</li><li>सामान्य function में <code>await</code> लिखना। यह <code>async</code> function के अंदर या module के top level पर ही चलता है।</li></ul>",
          hg: "<ul><li>Sirf <code>fetch</code> ko <code>try/catch</code> mein lapetna aur 500 response par bharosa karna. <code>response.ok</code> bhi jaancho.</li><li><code>await</code> bhool jaana: tab aapke haath mein promise hai aur data ki jagah <code>Promise { &lt;pending&gt; }</code> print hota hai.</li><li>Saamaanya function mein <code>await</code> likhna. Ye <code>async</code> function ke andar ya module ke top level par hi chalta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use <code>async/await</code> for almost all new asynchronous code. Keep raw <code>then</code> for tiny one-liners. When two calls are independent, start both and use <code>Promise.all</code> (see the Deep Dive) instead of awaiting one after the other.</p>",
          hi: "<p>लगभग सारे नए asynchronous code के लिए <code>async/await</code> use करो। <code>then</code> सिर्फ़ छोटे one-liners के लिए रखो। दो calls independent हों तो एक के बाद एक await करने की जगह दोनों शुरू करो और <code>Promise.all</code> use करो (Deep Dive देखो)।</p>",
          hg: "<p>Lagbhag saare naye asynchronous code ke liye <code>async/await</code> use karo. <code>then</code> sirf chhote one-liners ke liye rakho. Do calls independent hon to ek ke baad ek await karne ki jagah dono shuru karo aur <code>Promise.all</code> use karo (Deep Dive dekho).</p>"
        },
        exercise: {
          task: {
            en: "<p>Write <code>async function ticketTitle(id, fetchFn)</code> that calls <code>fetchFn(\"/api/tickets/\" + id)</code>, throws <code>\"HTTP \" + status</code> when not ok, and otherwise returns <code>\"#\" + data.id + \": \" + data.issue</code>. Use a fake fetch that answers ticket 501 with <code>{ id: 501, issue: \"Login fails\" }</code> and print the title.</p>",
            hi: "<p><code>async function ticketTitle(id, fetchFn)</code> लिखो जो <code>fetchFn(\"/api/tickets/\" + id)</code> call करे, ok न हो तो <code>\"HTTP \" + status</code> फेंके, और वरना <code>\"#\" + data.id + \": \" + data.issue</code> लौटाए। एक नकली fetch बनाओ जो ticket 501 के लिए <code>{ id: 501, issue: \"Login fails\" }</code> दे और title print करो।</p>",
            hg: "<p><code>async function ticketTitle(id, fetchFn)</code> likho jo <code>fetchFn(\"/api/tickets/\" + id)</code> call kare, ok na ho to <code>\"HTTP \" + status</code> phenke, aur warna <code>\"#\" + data.id + \": \" + data.issue</code> lautaye. Ek nakli fetch banao jo ticket 501 ke liye <code>{ id: 501, issue: \"Login fails\" }</code> de aur title print karo.</p>"
          },
          hint: {
            en: "<p>A fake fetch can be <code>async () =&gt; new Response(JSON.stringify({ ... }))</code>; <code>new Response</code> is built into Node.</p>",
            hi: "<p>नकली fetch <code>async () =&gt; new Response(JSON.stringify({ ... }))</code> हो सकता है; <code>new Response</code> Node में पहले से है।</p>",
            hg: "<p>Nakli fetch <code>async () =&gt; new Response(JSON.stringify({ ... }))</code> ho sakta hai; <code>new Response</code> Node mein pehle se hai.</p>"
          },
          solution: {
            lang: "javascript",
            caption: {
              en: "Solution: check ok, then read the body",
              hi: "हल: पहले ok जाँचो, फिर body पढ़ो",
              hg: "Solution: pehle ok jaancho, phir body padho"
            },
            check: "run",
            src: "async function ticketTitle(id, fetchFn) {\n  const response = await fetchFn(\"/api/tickets/\" + id);\n  if (!response.ok) throw new Error(\"HTTP \" + response.status);\n  const data = await response.json();\n  return \"#\" + data.id + \": \" + data.issue;\n}\n\nconst fakeFetch = async () =>\n  new Response(JSON.stringify({ id: 501, issue: \"Login fails\" }), { status: 200 });\n\nconsole.log(await ticketTitle(501, fakeFetch));",
            expected: "#501: Login fails"
          }
        },
        quiz: {
          q: {
            en: "The server answers <code>404 Not Found</code> to your <code>await fetch(url)</code>. What happens?",
            hi: "Server आपके <code>await fetch(url)</code> को <code>404 Not Found</code> देता है। क्या होता है?",
            hg: "Server aapke <code>await fetch(url)</code> ko <code>404 Not Found</code> deta hai. Kya hota hai?"
          },
          options: [
            {
              en: "<code>fetch</code> retries three times",
              hi: "<code>fetch</code> तीन बार retry करता है",
              hg: "<code>fetch</code> teen baar retry karta hai"
            },
            {
              en: "The promise rejects and <code>catch</code> runs",
              hi: "Promise reject होता है और <code>catch</code> चलता है",
              hg: "Promise reject hota hai aur <code>catch</code> chalta hai"
            },
            {
              en: "The promise resolves; <code>response.ok</code> is <code>false</code>",
              hi: "Promise resolve होता है; <code>response.ok</code> <code>false</code> होता है",
              hg: "Promise resolve hota hai; <code>response.ok</code> <code>false</code> hota hai"
            },
            {
              en: "The program stops with an unhandled exception",
              hi: "Program unhandled exception से रुक जाता है",
              hg: "Program unhandled exception se ruk jaata hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p><code>fetch</code> rejects only when no answer could be obtained (network failure, abort). Any HTTP answer, even 404 or 500, resolves, so you must check <code>response.ok</code> yourself.</p>",
            hi: "<p><code>fetch</code> तभी reject होता है जब कोई जवाब मिल ही न सके (network failure, abort)। कोई भी HTTP जवाब, 404 या 500 भी, resolve होता है, इसलिए <code>response.ok</code> आपको खुद जाँचना है।</p>",
            hg: "<p><code>fetch</code> tabhi reject hota hai jab koi jawab mil hi na sake (network failure, abort). Koi bhi HTTP jawab, 404 ya 500 bhi, resolve hota hai, isliye <code>response.ok</code> aapko khud jaanchna hai.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>async</code> functions return a promise; <code>await</code> pauses only that function.</li><li>Errors from awaited promises are caught with plain <code>try/catch</code>.</li><li><code>fetch</code> resolves for 404 and 500; always check <code>response.ok</code> before <code>json()</code>.</li></ul>",
          hi: "<ul><li><code>async</code> functions promise लौटाते हैं; <code>await</code> सिर्फ़ उसी function को रोकता है।</li><li>Await किए promises के errors सामान्य <code>try/catch</code> से पकड़े जाते हैं।</li><li><code>fetch</code> 404 और 500 पर भी resolve होता है; <code>json()</code> से पहले हमेशा <code>response.ok</code> जाँचो।</li></ul>",
          hg: "<ul><li><code>async</code> functions promise lautate hain; <code>await</code> sirf usi function ko rokta hai.</li><li>Await kiye promises ke errors saamaanya <code>try/catch</code> se pakde jaate hain.</li><li><code>fetch</code> 404 aur 500 par bhi resolve hota hai; <code>json()</code> se pehle hamesha <code>response.ok</code> jaancho.</li></ul>"
        }
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "Loading a ticket with a fake fetch, no network needed (runs on Node)",
            hi: "नकली fetch से ticket load करना, network की ज़रूरत नहीं (Node पर चलता है)",
            hg: "Nakli fetch se ticket load karna, network ki zaroorat nahi (Node par chalta hai)"
          },
          check: "run",
          src: "function fakeFetch(url) {\n  if (url === \"/api/tickets/501\") {\n    const body = JSON.stringify({ id: 501, issue: \"Login fails\", status: \"Open\" });\n    return Promise.resolve(new Response(body, { status: 200 }));\n  }\n  return Promise.resolve(new Response(\"Not found\", { status: 404 }));\n}\n\nasync function loadTicket(url, fetchFn = fetch) {\n  const response = await fetchFn(url);\n  if (!response.ok) throw new Error(\"HTTP \" + response.status);\n  return response.json();\n}\n\nconsole.log(loadTicket(\"/api/tickets/501\", fakeFetch) instanceof Promise);\ntry {\n  const ticket = await loadTicket(\"/api/tickets/501\", fakeFetch);\n  console.log(ticket.id, ticket.issue);\n  await loadTicket(\"/api/tickets/999\", fakeFetch);\n} catch (error) {\n  console.log(error.message);\n}",
          expected: "true\n501 Login fails\nHTTP 404"
        }
      ]
    },
    {
      id: "es-modules",
      depth: "short",
      title: {
        en: "ES modules: import and export",
        hi: "ES modules: import और export",
        hg: "ES modules: import aur export"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 6 loaded one ticket in one function. A real front end has many such functions, so they must live in separate files. In C# you group code with <code>namespace</code> and <code>using</code>; in JavaScript a <b>file is the module</b> and it decides what to share.</p>",
          hi: "<p>पाठ 6 में एक function में एक ticket load हुआ। असली front end में ऐसे कई functions होते हैं, इसलिए उन्हें अलग files में रहना होता है। C# में आप <code>namespace</code> और <code>using</code> से code बाँटते हो; JavaScript में <b>file ही module है</b> और वही तय करती है कि क्या share करना है।</p>",
          hg: "<p>Lesson 6 mein ek function mein ek ticket load hua. Asli front end mein aise kai functions hote hain, isliye unhe alag files mein rehna hota hai. C# mein aap <code>namespace</code> aur <code>using</code> se code baantte ho; JavaScript mein <b>file hi module hai</b> aur wahi tay karti hai ki kya share karna hai.</p>"
        },
        what: {
          en: "<p>An <b>ES module</b> is a file whose top-level names are private unless it <code>export</code>s them. Another file brings them in with <code>import</code>. A file can have many <b>named</b> exports and one <b>default</b> export. Modules run in strict mode and may use <code>await</code> at the top level.</p>",
          hi: "<p><b>ES module</b> ऐसी file है जिसके top-level नाम private रहते हैं जब तक वह उन्हें <code>export</code> न करे। दूसरी file उन्हें <code>import</code> से लाती है। एक file में कई <b>named</b> exports और एक <b>default</b> export हो सकता है। Modules strict mode में चलते हैं और top level पर <code>await</code> चला सकते हैं।</p>",
          hg: "<p><b>ES module</b> aisi file hai jiske top-level naam private rehte hain jab tak woh unhe <code>export</code> na kare. Doosri file unhe <code>import</code> se laati hai. Ek file mein kai <b>named</b> exports aur ek <b>default</b> export ho sakta hai. Modules strict mode mein chalte hain aur top level par <code>await</code> chala sakte hain.</p>"
        },
        why: {
          en: "<p>Modules replace global variables and the old \"load ten script tags in the right order\" habit. They make dependencies visible, so build tools can drop unused code. React, Node and every modern library ship as ES modules.</p>",
          hi: "<p>Modules global variables और पुरानी \"दस script tags सही क्रम में load करो\" आदत की जगह लेते हैं। वे dependencies को दिखाते हैं, इसलिए build tools बिना use वाला code हटा सकते हैं। React, Node और हर modern library ES modules में आती है।</p>",
          hg: "<p>Modules global variables aur purani \"das script tags sahi kram mein load karo\" aadat ki jagah lete hain. Woh dependencies ko dikhate hain, isliye build tools bina use wala code hata sakte hain. React, Node aur har modern library ES modules mein aati hai.</p>"
        },
        analogy: {
          en: "<p>Each department in a company has a notice board that lists only what it shares: \"Accounts shares: the GST rate, the invoice form\". Other departments take just what they need. Everything else stays inside the department.</p>",
          hi: "<p>कंपनी के हर department का एक notice board होता है जिस पर सिर्फ़ वही लिखा है जो वह share करता है: \"Accounts share करता है: GST rate, invoice form\"। दूसरे departments सिर्फ़ ज़रूरत की चीज़ लेते हैं। बाकी सब department के अंदर रहता है।</p>",
          hg: "<p>Company ke har department ka ek notice board hota hai jis par sirf wahi likha hai jo woh share karta hai: \"Accounts share karta hai: GST rate, invoice form\". Doosre departments sirf zaroorat ki cheez lete hain. Baaki sab department ke andar rehta hai.</p>"
        },
        focus: {
          lang: "javascript",
          caption: {
            en: "The same thing across two real files (display only)",
            hi: "दो असली files में वही बात (सिर्फ़ दिखाने के लिए)",
            hg: "Do asli files mein wahi baat (sirf dikhane ke liye)"
          },
          check: "none",
          src: "// ---- tickets.mjs ----\nexport const SLA_HOURS = 24;                       // named export\nexport function isOverdue(hoursOpen) { return hoursOpen > SLA_HOURS; }\nexport default function format(id) { return \"TKT-\" + id; }   // default export\n\n// ---- app.mjs ----\nimport format, { isOverdue, SLA_HOURS } from \"./tickets.mjs\";   // static import\nconst report = await import(\"./report.mjs\");                    // dynamic import: loaded on demand"
        },
        lines: [
          {
            code: "export const SLA_HOURS = 24;",
            note: {
              en: "A <b>named export</b>. Importers must use the same name. Names not exported stay private to the module.",
              hi: "<b>Named export</b>। Import करने वालों को यही नाम use करना होता है। जो नाम export नहीं हुए वे module में private रहते हैं।",
              hg: "<b>Named export</b>. Import karne walon ko yahi naam use karna hota hai. Jo naam export nahi hue woh module mein private rehte hain."
            }
          },
          {
            code: "export default function format(id) { return \"TKT-\" + id; }",
            note: {
              en: "The <b>default export</b>: one per file, and the importer may give it any name. Many teams prefer named exports because renaming is then caught by tools.",
              hi: "<b>Default export</b>: एक file में एक, और import करने वाला उसे कोई भी नाम दे सकता है। कई teams named exports पसंद करती हैं क्योंकि तब नाम बदलना tools पकड़ लेते हैं।",
              hg: "<b>Default export</b>: ek file mein ek, aur import karne wala use koi bhi naam de sakta hai. Kai teams named exports pasand karti hain kyunki tab naam badalna tools pakad lete hain."
            }
          },
          {
            code: "const mod = await import(url);",
            note: {
              en: "A <b>dynamic <code>import()</code></b> loads a module on demand and returns a promise. Here the module text comes from a <code>data:</code> URL so the demo needs no extra file. A normal file would be <code>import(\"./tickets.mjs\")</code>.",
              hi: "<b>Dynamic <code>import()</code></b> module को ज़रूरत पर load करता है और promise लौटाता है। यहाँ module का text <code>data:</code> URL से आता है ताकि demo को अलग file न चाहिए। सामान्य file <code>import(\"./tickets.mjs\")</code> होती।",
              hg: "<b>Dynamic <code>import()</code></b> module ko zaroorat par load karta hai aur promise lautata hai. Yahan module ka text <code>data:</code> URL se aata hai taaki demo ko alag file na chahiye. Saamaanya file <code>import(\"./tickets.mjs\")</code> hoti."
            }
          },
          {
            code: "console.log(Object.keys(mod).join(\", \"));",
            note: {
              en: "The imported module is an object holding every export, the default one under the name <code>default</code>. The key list is sorted, so the output is stable.",
              hi: "Import हुआ module एक object है जिसमें हर export है, default वाला <code>default</code> नाम से। Keys की list sorted होती है, इसलिए output हर बार एक जैसा रहता है।",
              hg: "Import hua module ek object hai jisme har export hai, default wala <code>default</code> naam se. Keys ki list sorted hoti hai, isliye output har baar ek jaisa rehta hai."
            }
          },
          {
            code: "const { default: format, isOverdue, SLA_HOURS } = mod;",
            note: {
              en: "Destructuring does what a static <code>import format, { isOverdue, SLA_HOURS } from \"./tickets.mjs\"</code> does in a real file.",
              hi: "Destructuring वही करता है जो असली file में static <code>import format, { isOverdue, SLA_HOURS } from \"./tickets.mjs\"</code> करता।",
              hg: "Destructuring wahi karta hai jo asli file mein static <code>import format, { isOverdue, SLA_HOURS } from \"./tickets.mjs\"</code> karta."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Mixing styles: <code>require</code> is CommonJS and does not exist in an ES module (<code>ReferenceError</code>). Use <code>import</code>.</li><li>Importing a default export with braces (<code>import { format }</code>) or a named export without them. Braces mean \"named\".</li><li>Forgetting the file extension in Node (<code>\"./tickets\"</code> instead of <code>\"./tickets.mjs\"</code>). Browsers and Node need the full path; bundlers are more relaxed.</li></ul>",
          hi: "<ul><li>Styles मिलाना: <code>require</code> CommonJS है और ES module में होता ही नहीं (<code>ReferenceError</code>)। <code>import</code> use करो।</li><li>Default export को braces के साथ import करना (<code>import { format }</code>) या named export को बिना braces के। Braces का मतलब \"named\"।</li><li>Node में file extension भूलना (<code>\"./tickets.mjs\"</code> की जगह <code>\"./tickets\"</code>)। Browsers और Node को पूरा path चाहिए; bundlers ज़्यादा ढीले होते हैं।</li></ul>",
          hg: "<ul><li>Styles milana: <code>require</code> CommonJS hai aur ES module mein hota hi nahi (<code>ReferenceError</code>). <code>import</code> use karo.</li><li>Default export ko braces ke saath import karna (<code>import { format }</code>) ya named export ko bina braces ke. Braces ka matlab \"named\".</li><li>Node mein file extension bhoolna (<code>\"./tickets.mjs\"</code> ki jagah <code>\"./tickets\"</code>). Browsers aur Node ko poora path chahiye; bundlers zyaada dheele hote hain.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use one module per topic (tickets, customers, api). Use a dynamic <code>import()</code> only to load something big or rare later, such as a report screen. Keep CommonJS (<code>require</code>) for reading older Node projects.</p>",
          hi: "<p>हर topic (tickets, customers, api) का एक module रखो। Dynamic <code>import()</code> सिर्फ़ बाद में कोई बड़ी या कभी-कभार काम आने वाली चीज़ load करने के लिए use करो, जैसे report screen। CommonJS (<code>require</code>) पुराने Node projects पढ़ने के लिए रखो।</p>",
          hg: "<p>Har topic (tickets, customers, api) ka ek module rakho. Dynamic <code>import()</code> sirf baad mein koi badi ya kabhi-kabhaar kaam aane wali cheez load karne ke liye use karo, jaise report screen. CommonJS (<code>require</code>) purane Node projects padhne ke liye rakho.</p>"
        },
        exercise: {
          task: {
            en: "<p>Make a module text that exports an array <code>STATUSES</code> (<code>\"Open\"</code>, <code>\"Closed\"</code>) and a default function <code>label(status)</code> that returns <code>\"Status: \" + status</code>. Import it with <code>import()</code> and print <code>Status: Open</code> and the number of statuses.</p>",
            hi: "<p>एक module text बनाओ जो array <code>STATUSES</code> (<code>\"Open\"</code>, <code>\"Closed\"</code>) और default function <code>label(status)</code> export करे जो <code>\"Status: \" + status</code> लौटाए। उसे <code>import()</code> से लाओ और <code>Status: Open</code> व statuses की गिनती print करो।</p>",
            hg: "<p>Ek module text banao jo array <code>STATUSES</code> (<code>\"Open\"</code>, <code>\"Closed\"</code>) aur default function <code>label(status)</code> export kare jo <code>\"Status: \" + status</code> lautaye. Use <code>import()</code> se lao aur <code>Status: Open</code> va statuses ki ginti print karo.</p>"
          },
          hint: {
            en: "<p>Copy the pattern from the lesson: <code>\"data:text/javascript,\" + encodeURIComponent(source)</code>.</p>",
            hi: "<p>पाठ का pattern copy करो: <code>\"data:text/javascript,\" + encodeURIComponent(source)</code>।</p>",
            hg: "<p>Lesson ka pattern copy karo: <code>\"data:text/javascript,\" + encodeURIComponent(source)</code>.</p>"
          },
          solution: {
            lang: "javascript",
            caption: {
              en: "Solution: one default and one named export",
              hi: "हल: एक default और एक named export",
              hg: "Solution: ek default aur ek named export"
            },
            check: "run",
            src: "const source = `\nexport const STATUSES = [\"Open\", \"Closed\"];\nexport default function label(status) { return \"Status: \" + status; }\n`;\n\nconst mod = await import(\"data:text/javascript,\" + encodeURIComponent(source));\nconsole.log(mod.default(mod.STATUSES[0]), mod.STATUSES.length);",
            expected: "Status: Open 2"
          }
        },
        quiz: {
          q: {
            en: "A file has <code>export default function format() {}</code>. Which import line is correct?",
            hi: "File में <code>export default function format() {}</code> है। कौन-सी import line सही है?",
            hg: "File mein <code>export default function format() {}</code> hai. Kaun-si import line sahi hai?"
          },
          options: [
            {
              en: "<code>import format from \"./tickets.mjs\";</code>",
              hi: "<code>import format from \"./tickets.mjs\";</code> लिखें",
              hg: "<code>import format from \"./tickets.mjs\";</code> likhen"
            },
            {
              en: "<code>const format = require(\"./tickets.mjs\");</code>",
              hi: "<code>const format = require(\"./tickets.mjs\");</code> लिखें",
              hg: "<code>const format = require(\"./tickets.mjs\");</code> likhen"
            },
            {
              en: "<code>using format from \"./tickets.mjs\";</code>",
              hi: "<code>using format from \"./tickets.mjs\";</code> लिखें",
              hg: "<code>using format from \"./tickets.mjs\";</code> likhen"
            },
            {
              en: "<code>import { format } from \"./tickets.mjs\";</code>",
              hi: "<code>import { format } from \"./tickets.mjs\";</code> लिखें",
              hg: "<code>import { format } from \"./tickets.mjs\";</code> likhen"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>A default export is imported without braces, under any name you like. Braces are for named exports, <code>require</code> is CommonJS, and <code>using</code> is C#.</p>",
            hi: "<p>Default export बिना braces के import होता है, किसी भी नाम से। Braces named exports के लिए हैं, <code>require</code> CommonJS है और <code>using</code> C# है।</p>",
            hg: "<p>Default export bina braces ke import hota hai, kisi bhi naam se. Braces named exports ke liye hain, <code>require</code> CommonJS hai aur <code>using</code> C# hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>A file is a module: names stay private unless exported.</li><li>Named exports use braces on import; a file has at most one default export.</li><li>Static <code>import</code> is resolved before running; <code>import()</code> loads on demand and returns a promise.</li></ul>",
          hi: "<ul><li>File ही module है: नाम private रहते हैं जब तक export न हों।</li><li>Named exports import में braces से आते हैं; एक file में एक ही default export हो सकता है।</li><li>Static <code>import</code> चलने से पहले resolve होता है; <code>import()</code> ज़रूरत पर load करता है और promise लौटाता है।</li></ul>",
          hg: "<ul><li>File hi module hai: naam private rehte hain jab tak export na hon.</li><li>Named exports import mein braces se aate hain; ek file mein ek hi default export ho sakta hai.</li><li>Static <code>import</code> chalne se pehle resolve hota hai; <code>import()</code> zaroorat par load karta hai aur promise lautata hai.</li></ul>"
        }
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "A module with named and default exports, loaded with import() (runs on Node)",
            hi: "Named और default exports वाला module, import() से load (Node पर चलता है)",
            hg: "Named aur default exports wala module, import() se load (Node par chalta hai)"
          },
          check: "run",
          src: "// The module text is kept in a string so this demo needs no second file.\nconst source = `\nconst secret = \"not exported\";\nexport const SLA_HOURS = 24;\nexport function isOverdue(hoursOpen) { return hoursOpen > SLA_HOURS; }\nexport default function format(id) { return \"TKT-\" + id; }\n`;\n\nconst url = \"data:text/javascript,\" + encodeURIComponent(source);\nconst mod = await import(url);\nconsole.log(Object.keys(mod).join(\", \"));\n\nconst { default: format, isOverdue, SLA_HOURS } = mod;\nconsole.log(format(501), SLA_HOURS, isOverdue(30));\nconsole.log(mod.secret);",
          expected: "SLA_HOURS, default, isOverdue\nTKT-501 24 true\nundefined"
        }
      ]
    },
    {
      id: "jquery-to-dom",
      depth: "short",
      title: {
        en: "From jQuery to the modern DOM",
        hi: "jQuery से modern DOM की ओर",
        hg: "jQuery se modern DOM ki or"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 7 split code into modules, and lesson 6 fetched data. The last step is the page itself: the CRM ticket list in the browser. Older CRM pages are full of jQuery; today the browser's own DOM does the same jobs, with <code>fetch</code> (lesson 6) replacing <code>$.ajax</code>.</p>",
          hi: "<p>पाठ 7 ने code को modules में बाँटा और पाठ 6 ने data लाया। आखिरी कदम page खुद है: browser में CRM की ticket list। पुराने CRM pages jQuery से भरे हैं; आज browser का अपना DOM वही काम करता है, और <code>fetch</code> (पाठ 6) <code>$.ajax</code> की जगह लेता है।</p>",
          hg: "<p>Lesson 7 ne code ko modules mein baanta aur lesson 6 ne data laya. Aakhri kadam page khud hai: browser mein CRM ki ticket list. Purane CRM pages jQuery se bhare hain; aaj browser ka apna DOM wahi kaam karta hai, aur <code>fetch</code> (lesson 6) <code>$.ajax</code> ki jagah leta hai.</p>"
        },
        what: {
          en: "<p>The <b>DOM</b> is the browser's tree of page elements. jQuery wrapped it in short helpers like <code>$(\".row\")</code>. The same work is now plain: <code>querySelector</code> to find, <code>addEventListener</code> to react, <code>classList</code> to change classes, <code>textContent</code> to set text. <b>Event delegation</b> puts one listener on a parent that serves every child, even rows added later.</p>",
          hi: "<p><b>DOM</b> browser में page के elements का tree है। jQuery ने उसे <code>$(\".row\")</code> जैसे छोटे helpers में लपेटा था। वही काम अब सीधे होता है: ढूँढने को <code>querySelector</code>, react करने को <code>addEventListener</code>, classes बदलने को <code>classList</code>, text रखने को <code>textContent</code>। <b>Event delegation</b> में एक listener parent पर लगता है जो हर child के लिए काम करता है, बाद में जुड़ी rows के लिए भी।</p>",
          hg: "<p><b>DOM</b> browser mein page ke elements ka tree hai. jQuery ne use <code>$(\".row\")</code> jaise chhote helpers mein lapeta tha. Wahi kaam ab seedha hota hai: dhundhne ko <code>querySelector</code>, react karne ko <code>addEventListener</code>, classes badalne ko <code>classList</code>, text rakhne ko <code>textContent</code>. <b>Event delegation</b> mein ek listener parent par lagta hai jo har child ke liye kaam karta hai, baad mein judi rows ke liye bhi.</p>"
        },
        why: {
          en: "<p>Most of your CRM front-end work will be reading and changing jQuery pages. Knowing the modern equivalent lets you migrate page by page, remove a dependency, and answer \"how would you replace jQuery?\" in an interview.</p>",
          hi: "<p>CRM front-end का ज़्यादातर काम jQuery pages पढ़ना और बदलना होगा। Modern बराबर चीज़ें जानने से आप page-दर-page migrate कर सकते हो, एक dependency हटा सकते हो, और interview में \"jQuery कैसे बदलोगे?\" का जवाब दे सकते हो।</p>",
          hg: "<p>CRM front-end ka zyaadatar kaam jQuery pages padhna aur badalna hoga. Modern barabar cheezein jaanne se aap page-dar-page migrate kar sakte ho, ek dependency hata sakte ho, aur interview mein \"jQuery kaise badloge?\" ka jawab de sakte ho.</p>"
        },
        analogy: {
          en: "<p>jQuery was a Swiss-army knife you carried everywhere. Today the phone in your pocket already has most of those blades built in, so you stop carrying the knife.</p>",
          hi: "<p>jQuery वह Swiss-army knife था जिसे आप हर जगह लेकर चलते थे। आज जेब के phone में उनमें से ज़्यादातर blades पहले से हैं, तो आप knife रखना छोड़ देते हो।</p>",
          hg: "<p>jQuery woh Swiss-army knife tha jise aap har jagah lekar chalte the. Aaj jeb ke phone mein unmein se zyaadatar blades pehle se hain, to aap knife rakhna chhod dete ho.</p>"
        },
        focus: {
          lang: "javascript",
          caption: {
            en: "jQuery on the left, the modern DOM on the right (display only: needs a browser)",
            hi: "बाएँ jQuery, दाएँ modern DOM (सिर्फ़ दिखाने के लिए: browser चाहिए)",
            hg: "Baayen jQuery, daayen modern DOM (sirf dikhane ke liye: browser chahiye)"
          },
          check: "none",
          src: "// jQuery                                      // Modern DOM\n$(\"#save\").on(\"click\", onSave);                // document.querySelector(\"#save\").addEventListener(\"click\", onSave);\n$(\".row\").addClass(\"active\");                  // document.querySelectorAll(\".row\").forEach((el) => el.classList.add(\"active\"));\n$(\"#box\").toggleClass(\"open\");                 // document.querySelector(\"#box\").classList.toggle(\"open\");\n$(\"#name\").val();                              // document.querySelector(\"#name\").value\n$(\"#msg\").text(message);                       // document.querySelector(\"#msg\").textContent = message;\n$.ajax({ url: \"/api/tickets\", method: \"POST\", data: JSON.stringify(t), contentType: \"application/json\" });\nfetch(\"/api/tickets\", { method: \"POST\", headers: { \"Content-Type\": \"application/json\" }, body: JSON.stringify(t) });\n\n// Event delegation: one listener on the list serves rows added later too\n// Each row is <li class=\"ticket-row\" data-id=\"501\">...</li>\n$(\"#list\").on(\"click\", \".ticket-row\", function () { openTicket($(this).data(\"id\")); });\ndocument.querySelector(\"#list\").addEventListener(\"click\", (event) => {\n  const row = event.target.closest(\".ticket-row\");\n  if (row) openTicket(row.dataset.id);   // data-id=\"501\" -> dataset.id === \"501\" (a string)\n});"
        },
        lines: [
          {
            code: "function node(classes, parent = null) {",
            note: {
              en: "A plain object plays the part of a DOM element, so this runs on Node. Here a <code>Set</code> named <code>classes</code> stands in for <code>classList</code>, and the fake <code>closest</code> takes a class name; the real <code>closest</code> takes a CSS selector such as <code>\".ticket-row\"</code>.",
              hi: "एक सादा object DOM element का रोल निभाता है, इसलिए यह Node पर चलता है। यहाँ <code>classes</code> नाम का <code>Set</code> <code>classList</code> की जगह है, और नकली <code>closest</code> class का नाम लेता है; असली <code>closest</code> CSS selector लेता है, जैसे <code>\".ticket-row\"</code>।",
              hg: "Ek saada object DOM element ka role nibhata hai, isliye ye Node par chalta hai. Yahan <code>classes</code> naam ka <code>Set</code> <code>classList</code> ki jagah hai, aur nakli <code>closest</code> class ka naam leta hai; asli <code>closest</code> CSS selector leta hai, jaise <code>\".ticket-row\"</code>."
            }
          },
          {
            code: "closest(name) {",
            note: {
              en: "Walks from the clicked element up through its parents until one has the class. In the browser: <code>event.target.closest(\".ticket-row\")</code>.",
              hi: "Click हुए element से ऊपर parents की तरफ़ चलता है जब तक किसी में वह class न मिले। Browser में: <code>event.target.closest(\".ticket-row\")</code>।",
              hg: "Click hue element se upar parents ki taraf chalta hai jab tak kisi mein woh class na mile. Browser mein: <code>event.target.closest(\".ticket-row\")</code>."
            }
          },
          {
            code: "list.addEventListener(\"click\", (event) => {",
            note: {
              en: "ONE listener on the parent list. In the browser a click on a cell bubbles up to this list, and <code>event.target</code> tells which element was really clicked.",
              hi: "Parent list पर <b>एक</b> listener। Browser में cell पर click ऊपर इस list तक bubble होता है, और <code>event.target</code> बताता है कि असल में कौन-सा element click हुआ।",
              hg: "Parent list par <b>ek</b> listener. Browser mein cell par click upar is list tak bubble hota hai, aur <code>event.target</code> batata hai ki asal mein kaun-sa element click hua."
            }
          },
          {
            code: "const row502 = node([\"ticket-row\"], list); row502.id = 502; // added later",
            note: {
              en: "This row did not exist when the listener was added, yet clicking it works: that is the benefit of delegation. A listener on each row would have missed it.",
              hi: "यह row listener लगाते समय थी ही नहीं, फिर भी इस पर click चलता है: यही delegation का फ़ायदा है। हर row पर listener होता तो यह छूट जाती।",
              hg: "Ye row listener lagate samay thi hi nahi, phir bhi is par click chalta hai: yahi delegation ka faayda hai. Har row par listener hota to ye chhoot jaati."
            }
          },
          {
            code: "console.log(listeners.length);",
            note: {
              en: "Only <b>1</b> listener serves all rows, instead of one per row. That is cheaper and there is nothing to clean up per row.",
              hi: "सारी rows के लिए सिर्फ़ <b>1</b> listener है, हर row के लिए एक नहीं। यह सस्ता है और हर row का कुछ साफ़ नहीं करना पड़ता।",
              hg: "Saari rows ke liye sirf <b>1</b> listener hai, har row ke liye ek nahi. Ye sasta hai aur har row ka kuch saaf nahi karna padta."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Putting user text into <code>innerHTML</code>. A customer name like <code>&lt;img onerror=...&gt;</code> becomes an XSS attack; use <code>textContent</code> for text.</li><li>Adding a listener to every row at load time, then wondering why new rows do nothing. Delegate on the parent instead.</li><li>Rewriting a whole working jQuery page at once. Move one page or one feature at a time, and keep plugin-heavy pages (date pickers, grids) for last.</li></ul>",
          hi: "<ul><li>User के text को <code>innerHTML</code> में डालना। <code>&lt;img onerror=...&gt;</code> जैसा customer name XSS attack बन जाता है; text के लिए <code>textContent</code> use करो।</li><li>Load के समय हर row पर listener लगाना, फिर सोचना कि नई rows कुछ क्यों नहीं करतीं। इसकी जगह parent पर delegate करो।</li><li>चलता हुआ पूरा jQuery page एक साथ दोबारा लिखना। एक बार में एक page या एक feature बदलो, और plugin-भारी pages (date pickers, grids) आखिर के लिए रखो।</li></ul>",
          hg: "<ul><li>User ke text ko <code>innerHTML</code> mein daalna. <code>&lt;img onerror=...&gt;</code> jaisa customer name XSS attack ban jaata hai; text ke liye <code>textContent</code> use karo.</li><li>Load ke samay har row par listener lagana, phir sochna ki nayi rows kuch kyun nahi kartin. Iski jagah parent par delegate karo.</li><li>Chalta hua poora jQuery page ek saath dobara likhna. Ek baar mein ek page ya ek feature badlo, aur plugin-bhaari pages (date pickers, grids) aakhir ke liye rakho.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use the plain DOM for all new code. Keep jQuery only on a stable legacy page that works, or one that depends on a jQuery plugin you cannot replace yet. Use delegation whenever rows or items can be added after the page loads.</p>",
          hi: "<p>सारे नए code में सीधा DOM use करो। jQuery सिर्फ़ ऐसे stable पुराने page पर रखो जो चल रहा है, या जो किसी ऐसे jQuery plugin पर टिका है जिसे अभी बदल नहीं सकते। जब page load के बाद rows या items जुड़ सकते हों, तब delegation use करो।</p>",
          hg: "<p>Saare naye code mein seedha DOM use karo. jQuery sirf aise stable purane page par rakho jo chal raha hai, ya jo kisi aise jQuery plugin par tika hai jise abhi badal nahi sakte. Jab page load ke baad rows ya items jud sakte hon, tab delegation use karo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write <code>toggle(classes, name)</code> that works like <code>classList.toggle</code> on a <code>Set</code>: it removes the name if present and returns <code>false</code>, otherwise adds it and returns <code>true</code>. Start with <code>new Set([\"panel\"])</code>, toggle <code>\"open\"</code> twice and print the result and the classes after each call.</p>",
            hi: "<p><code>toggle(classes, name)</code> लिखो जो <code>Set</code> पर <code>classList.toggle</code> जैसा काम करे: नाम हो तो हटाए और <code>false</code> लौटाए, वरना जोड़े और <code>true</code> लौटाए। <code>new Set([\"panel\"])</code> से शुरू करो, <code>\"open\"</code> को दो बार toggle करो और हर call के बाद result व classes print करो।</p>",
            hg: "<p><code>toggle(classes, name)</code> likho jo <code>Set</code> par <code>classList.toggle</code> jaisa kaam kare: naam ho to hataye aur <code>false</code> lautaye, warna jode aur <code>true</code> lautaye. <code>new Set([\"panel\"])</code> se shuru karo, <code>\"open\"</code> ko do baar toggle karo aur har call ke baad result va classes print karo.</p>"
          },
          hint: {
            en: "<p>Use <code>classes.has(name)</code>, <code>classes.delete(name)</code> and <code>classes.add(name)</code>. <code>[...classes].join(\" \")</code> lists the set.</p>",
            hi: "<p><code>classes.has(name)</code>, <code>classes.delete(name)</code> और <code>classes.add(name)</code> use करो। <code>[...classes].join(\" \")</code> set की list देता है।</p>",
            hg: "<p><code>classes.has(name)</code>, <code>classes.delete(name)</code> aur <code>classes.add(name)</code> use karo. <code>[...classes].join(\" \")</code> set ki list deta hai.</p>"
          },
          solution: {
            lang: "javascript",
            caption: {
              en: "Solution: toggle on a Set",
              hi: "हल: Set पर toggle",
              hg: "Solution: Set par toggle"
            },
            check: "run",
            src: "function toggle(classes, name) {\n  if (classes.has(name)) {\n    classes.delete(name);\n    return false;\n  }\n  classes.add(name);\n  return true;\n}\n\nconst box = new Set([\"panel\"]);\nconsole.log(toggle(box, \"open\"), [...box].join(\" \"));\nconsole.log(toggle(box, \"open\"), [...box].join(\" \"));",
            expected: "true panel open\nfalse panel"
          }
        },
        quiz: {
          q: {
            en: "A ticket row is added to the list after the page loaded. Which setup reacts to clicks on it with no extra code?",
            hi: "Page load होने के बाद list में ticket row जुड़ती है। कौन-सा setup बिना extra code के उस पर click पर react करेगा?",
            hg: "Page load hone ke baad list mein ticket row judti hai. Kaun-sa setup bina extra code ke us par click par react karega?"
          },
          options: [
            {
              en: "A listener added to each existing row at load time",
              hi: "Load के समय हर मौजूदा row पर लगाया listener",
              hg: "Load ke samay har maujooda row par lagaya listener"
            },
            {
              en: "Setting <code>innerHTML</code> on the list",
              hi: "List पर <code>innerHTML</code> set करना",
              hg: "List par <code>innerHTML</code> set karna"
            },
            {
              en: "<code>querySelectorAll(\".ticket-row\")</code> run once at load",
              hi: "Load पर एक बार चलाया <code>querySelectorAll(\".ticket-row\")</code>",
              hg: "Load par ek baar chalaya <code>querySelectorAll(\".ticket-row\")</code>"
            },
            {
              en: "One listener on the parent list that uses <code>event.target.closest(\".ticket-row\")</code>",
              hi: "Parent list पर एक listener जो <code>event.target.closest(\".ticket-row\")</code> use करे",
              hg: "Parent list par ek listener jo <code>event.target.closest(\".ticket-row\")</code> use kare"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>Clicks bubble up to the parent, so one delegated listener sees clicks from rows that did not exist yet. The other options only touch rows that existed at load time.</p>",
            hi: "<p>Clicks ऊपर parent तक bubble होते हैं, इसलिए एक delegated listener उन rows के clicks भी देख लेता है जो तब थीं ही नहीं। बाकी options सिर्फ़ load के समय मौजूद rows को छूते हैं।</p>",
            hg: "<p>Clicks upar parent tak bubble hote hain, isliye ek delegated listener un rows ke clicks bhi dekh leta hai jo tab thi hi nahi. Baaki options sirf load ke samay maujood rows ko chhute hain.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>querySelector</code>, <code>addEventListener</code>, <code>classList</code>, <code>textContent</code> and <code>fetch</code> replace most of jQuery.</li><li>Event delegation: one listener on the parent, <code>event.target.closest(...)</code> finds the row.</li><li>Use <code>textContent</code> for text; <code>innerHTML</code> with user input is an XSS risk.</li></ul>",
          hi: "<ul><li><code>querySelector</code>, <code>addEventListener</code>, <code>classList</code>, <code>textContent</code> और <code>fetch</code> jQuery का ज़्यादातर हिस्सा बदल देते हैं।</li><li>Event delegation: parent पर एक listener, <code>event.target.closest(...)</code> row ढूँढता है।</li><li>Text के लिए <code>textContent</code> use करो; user input के साथ <code>innerHTML</code> में XSS का खतरा है।</li></ul>",
          hg: "<ul><li><code>querySelector</code>, <code>addEventListener</code>, <code>classList</code>, <code>textContent</code> aur <code>fetch</code> jQuery ka zyaadatar hissa badal dete hain.</li><li>Event delegation: parent par ek listener, <code>event.target.closest(...)</code> row dhundhta hai.</li><li>Text ke liye <code>textContent</code> use karo; user input ke saath <code>innerHTML</code> mein XSS ka khatra hai.</li></ul>"
        }
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "Event delegation logic on plain objects (the DOM part is shown above; runs on Node)",
            hi: "Plain objects पर event delegation का logic (DOM वाला हिस्सा ऊपर दिखाया है; Node पर चलता है)",
            hg: "Plain objects par event delegation ka logic (DOM wala hissa upar dikhaya hai; Node par chalta hai)"
          },
          check: "run",
          src: "// Plain objects stand in for DOM elements, so this runs on Node.\nfunction node(classes, parent = null) {\n  return {\n    classes: new Set(classes),\n    parent,\n    closest(name) {\n      let current = this;\n      while (current) {\n        if (current.classes.has(name)) return current;\n        current = current.parent;\n      }\n      return null;\n    },\n  };\n}\n\nconst list = node([\"ticket-list\"]);\nconst listeners = [];\nlist.addEventListener = (type, handler) => listeners.push(handler);\nlist.click = (target) => listeners.forEach((handler) => handler({ target }));\n\nlist.addEventListener(\"click\", (event) => {\n  const row = event.target.closest(\"ticket-row\");\n  console.log(row ? \"open \" + row.id : \"ignored\");\n});\n\nconst row501 = node([\"ticket-row\"], list); row501.id = 501;\nlist.click(node([\"cell\"], row501));\nlist.click(list);\nconst row502 = node([\"ticket-row\"], list); row502.id = 502; // added later\nlist.click(node([\"cell\"], row502));\nconsole.log(listeners.length);",
          expected: "open 501\nignored\nopen 502\n1"
        }
      ]
    },
    {
      id: "closure-patterns",
      depth: "detailed",
      title: {
        en: "Closure patterns — run once, memoize, and a review checklist",
        hi: "Closure patterns — एक बार चलाना, memoize, और review checklist",
        hg: "Closure patterns — ek baar chalana, memoize, aur review checklist"
      },
      body: {
        en: "<ul>\n<li><b>Review checklist:</b> <code>var</code> in new code, a loop that creates callbacks, a long-lived callback holding a big object, and a missing <code>const</code>.</li>\n<li><b>Run once:</b> a flag in a closure lets a function do its work a single time (initialisation, a payment button).</li>\n<li><b>Memoize:</b> a <code>Map</code> in a closure remembers earlier answers, so the same input is not computed twice.</li>\n</ul>\n<p><b>More uses:</b> memoising (above) and partial application, where a factory fixes the first argument, e.g. <code>const smsTo = makeSender(\"SMS\")</code>.</p>",
        hi: "<ul>\n<li><b>Review checklist:</b> नए code में <code>var</code>, callbacks बनाने वाला loop, बड़ा object पकड़कर रखने वाला long-lived callback, और छूटा हुआ <code>const</code>।</li>\n<li><b>एक बार चलाना:</b> closure में रखा flag function को सिर्फ़ एक बार काम करने देता है (initialisation, payment button)।</li>\n<li><b>Memoize:</b> closure में रखा <code>Map</code> पुराने जवाब याद रखता है, ताकि एक ही input दोबारा compute न हो।</li>\n</ul>\n<p><b>और कहाँ काम आता है:</b> memoising (ऊपर) और partial application, जिसमें factory पहला argument तय कर देती है, जैसे <code>const smsTo = makeSender(\"SMS\")</code>।</p>",
        hg: "<ul>\n<li><b>Review checklist:</b> naye code mein <code>var</code>, callbacks banane wala loop, bada object pakadkar rakhne wala long-lived callback, aur chhoota hua <code>const</code>.</li>\n<li><b>Ek baar chalana:</b> closure mein rakha flag function ko sirf ek baar kaam karne deta hai (initialisation, payment button).</li>\n<li><b>Memoize:</b> closure mein rakha <code>Map</code> purane jawab yaad rakhta hai, taaki ek hi input dobara compute na ho.</li>\n</ul>\n<p><b>Aur kahan kaam aata hai:</b> memoising (upar) aur partial application, jisme factory pehla argument tay kar deti hai, jaise <code>const smsTo = makeSender(\"SMS\")</code>.</p>"
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "Closure for a run-once wrapper and a memoised function (Map keeps results between calls)",
            hi: "Run-once wrapper और memoised function के लिए closure (Map calls के बीच results रखता है)",
            hg: "Run-once wrapper aur memoised function ke liye closure (Map calls ke beech results rakhta hai)"
          },
          check: "run",
          src: "function once(fn) {\n  let done = false;\n  let result;\n  return (...args) => {\n    if (!done) {\n      result = fn(...args);\n      done = true;\n    }\n    return result;\n  };\n}\n\nfunction memoize(fn) {\n  const cache = new Map();\n  return (key) => {\n    if (!cache.has(key)) cache.set(key, fn(key));\n    return cache.get(key);\n  };\n}\n\nlet calls = 0;\nconst init = once(() => ++calls);\ninit();\ninit();\nconsole.log(\"once ran\", calls, \"time\");\n\nconst slowSquare = memoize((n) => {\n  calls += 100;\n  return n * n;\n});\nconsole.log(slowSquare(7), slowSquare(7), \"calls:\", calls);",
          expected: "once ran 1 time\n49 49 calls: 101"
        }
      ]
    },
    {
      id: "prototype-chain-by-hand",
      depth: "detailed",
      title: {
        en: "The prototype chain by hand, and static factories",
        hi: "Prototype chain हाथ से, और static factories",
        hg: "Prototype chain haath se, aur static factories"
      },
      body: {
        en: "<p><b>Analogy:</b> a prototype chain is like asking a senior for help: if you do not know the answer, you ask your manager, who asks <i>their</i> manager, until someone knows or the chain ends (<code>undefined</code>). A <code>class</code> is the same chain with a neater form.</p>\n<ul>\n<li><b>class is syntax over prototypes:</b> <code>typeof SomeClass</code> is <code>\"function\"</code>; methods are placed on <code>SomeClass.prototype</code>; <code>extends</code> links the two prototypes. Differences from the old constructor-function style: class code is strict, a class cannot be called without <code>new</code>, and a class is not usable before its declaration (TDZ).</li>\n</ul>\n<p><b>When to use classes:</b> several instances with shared behaviour and encapsulated state, and when your team and framework already use them. <b>When not:</b> for plain data use object literals; for a few related functions use a module. Deep inheritance trees are as hard to maintain here as in C#; prefer composition.</p>",
        hi: "<p><b>Analogy:</b> prototype chain वैसा है जैसे senior से मदद माँगना: जवाब नहीं पता तो अपने manager से पूछो, वह <i>अपने</i> manager से पूछता है, जब तक किसी को पता न हो या chain ख़त्म न हो जाए (<code>undefined</code>)। <code>class</code> वही chain है, बस सुंदर form में।</p>\n<ul>\n<li><b>class prototypes पर syntax है:</b> <code>typeof SomeClass</code> <code>\"function\"</code> है; methods <code>SomeClass.prototype</code> पर रखे जाते हैं; <code>extends</code> दोनों prototypes को जोड़ता है। पुराने constructor-function style से फ़र्क़: class code strict होता है, class को <code>new</code> के बिना call नहीं कर सकते, और class अपनी declaration से पहले use नहीं हो सकती (TDZ)।</li>\n</ul>\n<p><b>Classes कब use करें:</b> कई instances जिनका shared behaviour और encapsulated state हो, और जब तुम्हारी team और framework पहले से उन्हें use करते हैं। <b>कब नहीं:</b> plain data के लिए object literals; कुछ related functions के लिए module। Deep inheritance trees यहाँ भी C# जितने ही मुश्किल हैं; composition को prefer करो।</p>",
        hg: "<p><b>Analogy:</b> prototype chain waisa hai jaise senior se madad maangna: jawab nahi pata to apne manager se poocho, woh <i>apne</i> manager se poochta hai, jab tak kisi ko pata na ho ya chain khatam na ho jaaye (<code>undefined</code>). <code>class</code> wahi chain hai, bas sundar form mein.</p>\n<ul>\n<li><b>class prototypes par syntax hai:</b> <code>typeof SomeClass</code> <code>\"function\"</code> hai; methods <code>SomeClass.prototype</code> par rakhe jaate hain; <code>extends</code> dono prototypes ko jodta hai. Purane constructor-function style se farq: class code strict hota hai, class ko <code>new</code> ke bina call nahi kar sakte, aur class apni declaration se pehle use nahi ho sakti (TDZ).</li>\n</ul>\n<p><b>Classes kab use karein:</b> kai instances jinka shared behaviour aur encapsulated state ho, aur jab tumhari team aur framework pehle se unhein use karte hain. <b>Kab nahi:</b> plain data ke liye object literals; kuch related functions ke liye module. Deep inheritance trees yahan bhi C# jitne hi mushkil hain; composition ko prefer karo.</p>"
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "The old way: constructor function + prototype. Methods live once on the prototype (runs on Node)",
            hi: "पुराना तरीक़ा: constructor function + prototype। Methods prototype पर एक बार रहते हैं (Node पर चलता है)",
            hg: "Purana tareeka: constructor function + prototype. Methods prototype par ek baar rehte hain (Node par chalta hai)"
          },
          check: "run",
          src: "function Person(name) {\n  this.name = name;\n}\nPerson.prototype.hello = function () {\n  return \"Hi, \" + this.name;\n};\n\nconst asha = new Person(\"Asha\");\nconsole.log(asha.hello());\nconsole.log(asha.hello.call({ name: \"Ravi\" }));\nconsole.log(Object.getPrototypeOf(asha) === Person.prototype);\nconsole.log(Object.hasOwn(asha, \"hello\"), \"hello\" in asha);",
          expected: "Hi, Asha\nHi, Ravi\ntrue\nfalse true"
        },
        {
          lang: "javascript",
          caption: {
            en: "The same idea as a class: #private field, getter, static factory and extends (class is sugar over prototypes)",
            hi: "वही idea class के रूप में: #private field, getter, static factory और extends (class prototypes पर sugar है)",
            hg: "Wahi idea class ke roop mein: #private field, getter, static factory aur extends (class prototypes par sugar hai)"
          },
          check: "run",
          src: "class Account {\n  #balance = 0;\n\n  constructor(owner) {\n    this.owner = owner;\n  }\n\n  static open(owner) {\n    return new this(owner); // \"this\" is the class it was called on\n  }\n\n  deposit(amount) {\n    if (amount <= 0) throw new RangeError(\"amount must be positive\");\n    this.#balance += amount;\n    return this;\n  }\n\n  get balance() {\n    return this.#balance;\n  }\n}\n\nclass Savings extends Account {\n  addInterest(rate) {\n    return this.deposit(this.balance * rate);\n  }\n}\n\nconst savings = Savings.open(\"Asha\").deposit(1000).addInterest(0.05);\nconsole.log(savings.balance, savings instanceof Account);\nconsole.log(typeof Account, Object.getPrototypeOf(Savings.prototype) === Account.prototype);\nconsole.log(Object.keys(savings), JSON.stringify(savings));\ntry {\n  savings.deposit(-1);\n} catch (error) {\n  console.log(error.name + \": \" + error.message);\n}",
          expected: "1050 true\nfunction true\n[ 'owner' ] {\"owner\":\"Asha\"}\nRangeError: amount must be positive"
        }
      ]
    },
    {
      id: "values-and-objects",
      depth: "detailed",
      title: {
        en: "Values and objects — equality, defaults, copies, array methods",
        hi: "Values और objects — equality, defaults, copies, array methods",
        hg: "Values aur objects — equality, defaults, copies, array methods"
      },
      body: {
        en: "<p><b>Analogy:</b> a photocopy of a file folder copies the cover and the list of papers, but if the papers are shared envelopes, both folders still point to the same envelopes. That is a <b>shallow copy</b>.</p>\n<ul>\n<li><b>Equality and truthiness:</b> <code>===</code> compares without converting types; <code>==</code> converts first and has surprising results (<code>[] == false</code> is <code>true</code>). Falsy values: <code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code>, <code>\"\"</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>. Empty arrays and objects are truthy.</li>\n<li><b>Default values:</b> a destructuring default (<code>{ port = 5432 }</code>) applies only to <code>undefined</code>, not to <code>null</code> or <code>0</code>. Use <code>??</code> when <code>0</code> or an empty string is a valid value.</li>\n<li><b>Spread and rest:</b> <code>{ ...a, id: 8 }</code> copies the top level only. Nested objects are still shared; use <code>structuredClone</code> for a deep copy of plain data.</li>\n<li><b>Array methods:</b> <code>filter</code>=Where, <code>map</code>=Select, <code>reduce</code>=Aggregate, <code>some</code>=Any, <code>every</code>=All, <code>find</code>=FirstOrDefault. Unlike LINQ (Day 4) they run <b>eagerly</b> and build a new array each time.</li>\n<li><b><code>sort()</code> trap:</b> without a comparer it sorts as strings, so <code>[10, 9, 1]</code> becomes <code>[1, 10, 9]</code>. It also changes the array in place.</li>\n<li><b>Code review:</b> <code>==</code>, <code>||</code> used for defaults, mutating a function argument, and \"copies\" that are shallow.</li>\n</ul>\n<p><b>When to use these:</b> immutable-style updates (React state on Day 24 relies on them), config objects with defaults, and small data pipelines. <b>When not:</b> in a hot path over very large arrays, chained <code>map/filter</code> creates many temporary arrays; a plain loop is fine. Do not deep-copy with <code>JSON.parse(JSON.stringify(x))</code>: it drops <code>undefined</code> and functions and turns dates into strings.</p>",
        hi: "<p><b>Analogy:</b> file folder की photocopy में cover और papers की list copy होती है, पर अगर papers shared envelopes में हैं तो दोनों folders अब भी उन्हीं envelopes को point करते हैं। यह <b>shallow copy</b> है।</p>\n<ul>\n<li><b>Equality और truthiness:</b> <code>===</code> types बदले बिना compare करता है; <code>==</code> पहले convert करता है और चौंकाने वाले नतीजे देता है (<code>[] == false</code> <code>true</code> है)। Falsy values: <code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code>, <code>\"\"</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>। Empty arrays और objects truthy हैं।</li>\n<li><b>Default values:</b> destructuring default (<code>{ port = 5432 }</code>) सिर्फ़ <code>undefined</code> पर लगता है, <code>null</code> या <code>0</code> पर नहीं। जब <code>0</code> या empty string valid value हो तो <code>??</code> use करो।</li>\n<li><b>Spread और rest:</b> <code>{ ...a, id: 8 }</code> सिर्फ़ ऊपर का level copy करता है। Nested objects अब भी shared रहते हैं; plain data की deep copy के लिए <code>structuredClone</code> use करो।</li>\n<li><b>Array methods:</b> <code>filter</code>=Where, <code>map</code>=Select, <code>reduce</code>=Aggregate, <code>some</code>=Any, <code>every</code>=All, <code>find</code>=FirstOrDefault। LINQ (Day 4) से उलट ये <b>eagerly</b> चलते हैं और हर बार नया array बनाते हैं।</li>\n<li><b><code>sort()</code> trap:</b> comparer के बिना यह strings की तरह sort करता है, इसलिए <code>[10, 9, 1]</code> बन जाता है <code>[1, 10, 9]</code>। और यह array को उसी जगह बदल देता है।</li>\n<li><b>Code review:</b> <code>==</code>, defaults के लिए use हुआ <code>||</code>, function argument को mutate करना, और ऐसी \"copies\" जो shallow हैं।</li>\n</ul>\n<p><b>इन्हें कब use करें:</b> immutable-style updates (Day 24 की React state इन्हीं पर टिकी है), defaults वाले config objects, और छोटी data pipelines। <b>कब नहीं:</b> बहुत बड़े arrays पर hot path में chained <code>map/filter</code> कई temporary arrays बनाते हैं; वहाँ plain loop ठीक है। Deep copy के लिए <code>JSON.parse(JSON.stringify(x))</code> use मत करो: यह <code>undefined</code> और functions गिरा देता है और dates को strings बना देता है।</p>",
        hg: "<p><b>Analogy:</b> file folder ki photocopy mein cover aur papers ki list copy hoti hai, par agar papers shared envelopes mein hain to dono folders ab bhi unhi envelopes ko point karte hain. Yeh <b>shallow copy</b> hai.</p>\n<ul>\n<li><b>Equality aur truthiness:</b> <code>===</code> types badle bina compare karta hai; <code>==</code> pehle convert karta hai aur chaunkane wale nateeje deta hai (<code>[] == false</code> <code>true</code> hai). Falsy values: <code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code>, <code>\"\"</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>. Empty arrays aur objects truthy hain.</li>\n<li><b>Default values:</b> destructuring default (<code>{ port = 5432 }</code>) sirf <code>undefined</code> par lagta hai, <code>null</code> ya <code>0</code> par nahi. Jab <code>0</code> ya empty string valid value ho to <code>??</code> use karo.</li>\n<li><b>Spread aur rest:</b> <code>{ ...a, id: 8 }</code> sirf upar ka level copy karta hai. Nested objects ab bhi shared rehte hain; plain data ki deep copy ke liye <code>structuredClone</code> use karo.</li>\n<li><b>Array methods:</b> <code>filter</code>=Where, <code>map</code>=Select, <code>reduce</code>=Aggregate, <code>some</code>=Any, <code>every</code>=All, <code>find</code>=FirstOrDefault. LINQ (Day 4) se ulta yeh <b>eagerly</b> chalte hain aur har baar naya array banate hain.</li>\n<li><b><code>sort()</code> trap:</b> comparer ke bina yeh strings ki tarah sort karta hai, isliye <code>[10, 9, 1]</code> ban jaata hai <code>[1, 10, 9]</code>. Aur yeh array ko usi jagah badal deta hai.</li>\n<li><b>Code review:</b> <code>==</code>, defaults ke liye use hua <code>||</code>, function argument ko mutate karna, aur aisi \"copies\" jo shallow hain.</li>\n</ul>\n<p><b>Inhein kab use karein:</b> immutable-style updates (Day 24 ki React state inhi par tiki hai), defaults wale config objects, aur chhoti data pipelines. <b>Kab nahi:</b> bahut bade arrays par hot path mein chained <code>map/filter</code> kai temporary arrays banate hain; wahan plain loop theek hai. Deep copy ke liye <code>JSON.parse(JSON.stringify(x))</code> use mat karo: yeh <code>undefined</code> aur functions gira deta hai aur dates ko strings bana deta hai.</p>"
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "Destructuring defaults apply to undefined only; the ?? operator treats 0 and empty string as real values",
            hi: "Destructuring defaults सिर्फ़ undefined पर लगते हैं; ?? operator 0 और empty string को असली values मानता है",
            hg: "Destructuring defaults sirf undefined par lagte hain; ?? operator 0 aur empty string ko asli values maanta hai"
          },
          check: "run",
          src: "function connect({ host = \"localhost\", port = 5432, retries = 3 } = {}) {\n  return host + \":\" + port + \" x\" + retries;\n}\n\nconsole.log(connect());\nconsole.log(connect({ port: 0, retries: undefined }));\nconsole.log(connect({ host: null })); // null is NOT undefined, so no default\n\nconst input = { title: \"\" };\nconsole.log(JSON.stringify(input.title || \"Untitled\"));\nconsole.log(JSON.stringify(input.title ?? \"Untitled\"));",
          expected: "localhost:5432 x3\nlocalhost:0 x3\nnull:5432 x3\n\"Untitled\"\n\"\""
        },
        {
          lang: "javascript",
          caption: {
            en: "Spread is a shallow copy; structuredClone copies plain data deeply; array destructuring with rest",
            hi: "Spread shallow copy है; structuredClone plain data की deep copy बनाता है; rest के साथ array destructuring",
            hg: "Spread shallow copy hai; structuredClone plain data ki deep copy banata hai; rest ke saath array destructuring"
          },
          check: "run",
          src: "const order = { id: 7, customer: { name: \"Asha\" }, items: [\"tea\"] };\n\nconst shallow = { ...order, id: 8 };\nshallow.customer.name = \"Ravi\"; // the nested object is shared!\nconsole.log(order.customer.name, order.id, shallow.id);\n\nconst deep = structuredClone(order);\ndeep.items.push(\"samosa\");\nconsole.log(order.items.length, deep.items.length);\n\nconst [first, ...rest] = [10, 20, 30];\nconsole.log(first, rest);",
          expected: "Ravi 7 8\n1 2\n10 [ 20, 30 ]"
        },
        {
          lang: "javascript",
          caption: {
            en: "LINQ in JavaScript: filter/map/reduce/some/find (eager) and the default sort() trap",
            hi: "JavaScript में LINQ: filter/map/reduce/some/find (eager) और default sort() का trap",
            hg: "JavaScript mein LINQ: filter/map/reduce/some/find (eager) aur default sort() ka trap"
          },
          check: "run",
          src: "const orders = [\n  { id: 1, customer: \"Asha\", total: 250 },\n  { id: 2, customer: \"Ravi\", total: 90 },\n  { id: 3, customer: \"Asha\", total: 400 },\n];\n\nconst bigIds = orders.filter((o) => o.total >= 100).map((o) => o.id); // Where + Select\nconst sum = orders.reduce((acc, o) => acc + o.total, 0); // Sum / Aggregate\nconst hasSmall = orders.some((o) => o.total < 100); // Any\nconst firstRavi = orders.find((o) => o.customer === \"Ravi\")?.id; // FirstOrDefault\nconsole.log(bigIds, sum, hasSmall, firstRavi);\n\nconst perCustomer = {};\nfor (const o of orders) {\n  perCustomer[o.customer] = (perCustomer[o.customer] ?? 0) + o.total; // GroupBy + Sum\n}\nconsole.log(perCustomer);\n\nconsole.log([10, 9, 1].sort()); // sorts as strings\nconsole.log([10, 9, 1].sort((a, b) => a - b)); // numeric comparer",
          expected: "[ 1, 3 ] 740 true 2\n{ Asha: 650, Ravi: 90 }\n[ 1, 10, 9 ]\n[ 1, 9, 10 ]"
        }
      ]
    },
    {
      id: "promise-patterns",
      depth: "detailed",
      title: {
        en: "Promise patterns — chains, parallel work, combinators and the forEach trap",
        hi: "Promise patterns — chains, parallel काम, combinators और forEach का जाल",
        hg: "Promise patterns — chains, parallel kaam, combinators aur forEach ka jaal"
      },
      body: {
        en: "<p><b>Analogy:</b> a promise is a <b>token number at a bank counter</b>. You do not stand there waiting; you hold the token (pending), and when your number is called it is either \"done\" (fulfilled) or \"sorry, problem\" (rejected). <code>await</code> means \"I will continue when my token is called, meanwhile serve others\".</p>\n<ul>\n<li><b>Chains:</b> each <code>then</code> returns a new promise. A thrown error skips to the next <code>catch</code>; <code>catch</code> that returns a value makes the chain healthy again; <code>finally</code> runs either way and does not change the value.</li>\n<li><b>Sequential vs parallel:</b> <code>await a(); await b();</code> starts <code>b</code> only after <code>a</code> ends. Start both first (or <code>Promise.all</code>) when they are independent, like <code>Task.WhenAll</code> in C# (Day 3).</li>\n<li><b><code>forEach(async …)</code> does not wait.</b> <code>forEach</code> ignores the promises your callback returns. Use <code>for...of</code> with <code>await</code> (sequential) or <code>Promise.all(items.map(...))</code> (parallel).</li>\n<li><b>Combinators:</b> <code>Promise.all</code> fails fast, <code>allSettled</code> never rejects and reports every result, <code>race</code> returns the first to settle, <code>any</code> the first to fulfil.</li>\n</ul>",
        hi: "<p><b>Analogy:</b> promise बैंक के counter का <b>token number</b> है। तुम वहाँ खड़े इंतज़ार नहीं करते; token हाथ में रखते हो (pending), और नंबर बुलाने पर वह या तो \"हो गया\" (fulfilled) होता है या \"sorry, problem\" (rejected)। <code>await</code> का मतलब है \"मेरा token बुलाए जाने पर मैं आगे बढ़ूँगा, तब तक दूसरों को serve करो\"।</p>\n<ul>\n<li><b>Chains:</b> हर <code>then</code> नया promise लौटाता है। फेंका गया error अगले <code>catch</code> तक कूद जाता है; value लौटाने वाला <code>catch</code> chain को फिर healthy बना देता है; <code>finally</code> दोनों हालत में चलता है और value नहीं बदलता।</li>\n<li><b>Sequential vs parallel:</b> <code>await a(); await b();</code> में <code>b</code> तभी शुरू होता है जब <code>a</code> ख़त्म हो। जब दोनों independent हों तो दोनों पहले शुरू करो (या <code>Promise.all</code>), C# के <code>Task.WhenAll</code> (Day 3) की तरह।</li>\n<li><b><code>forEach(async …)</code> इंतज़ार नहीं करता।</b> <code>forEach</code> तुम्हारे callback के लौटाए promises को ignore करता है। <code>for...of</code> के साथ <code>await</code> (sequential) या <code>Promise.all(items.map(...))</code> (parallel) use करो।</li>\n<li><b>Combinators:</b> <code>Promise.all</code> जल्दी fail होता है, <code>allSettled</code> कभी reject नहीं होता और हर result बताता है, <code>race</code> सबसे पहले settle होने वाला देता है, <code>any</code> सबसे पहले fulfil होने वाला।</li>\n</ul>",
        hg: "<p><b>Analogy:</b> promise bank ke counter ka <b>token number</b> hai. Tum wahan khade intezaar nahi karte; token haath mein rakhte ho (pending), aur number bulaye jaane par woh ya to \"ho gaya\" (fulfilled) hota hai ya \"sorry, problem\" (rejected). <code>await</code> ka matlab hai \"mera token bulaye jaane par main aage badhunga, tab tak doosron ko serve karo\".</p>\n<ul>\n<li><b>Chains:</b> har <code>then</code> naya promise lautata hai. Phenka gaya error agle <code>catch</code> tak kood jaata hai; value lautane wala <code>catch</code> chain ko phir healthy bana deta hai; <code>finally</code> dono haalat mein chalta hai aur value nahi badalta.</li>\n<li><b>Sequential vs parallel:</b> <code>await a(); await b();</code> mein <code>b</code> tabhi shuru hota hai jab <code>a</code> khatam ho. Jab dono independent hon to dono pehle shuru karo (ya <code>Promise.all</code>), C# ke <code>Task.WhenAll</code> (Day 3) ki tarah.</li>\n<li><b><code>forEach(async …)</code> intezaar nahi karta.</b> <code>forEach</code> tumhare callback ke lautaye promises ko ignore karta hai. <code>for...of</code> ke saath <code>await</code> (sequential) ya <code>Promise.all(items.map(...))</code> (parallel) use karo.</li>\n<li><b>Combinators:</b> <code>Promise.all</code> jaldi fail hota hai, <code>allSettled</code> kabhi reject nahi hota aur har result batata hai, <code>race</code> sabse pehle settle hone wala deta hai, <code>any</code> sabse pehle fulfil hone wala.</li>\n</ul>"
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "A promise chain: then, a thrown error, catch that recovers, and finally (runs on Node)",
            hi: "Promise chain: then, फेंका गया error, recover करने वाला catch, और finally (Node पर चलता है)",
            hg: "Promise chain: then, phenka gaya error, recover karne wala catch, aur finally (Node par chalta hai)"
          },
          check: "run",
          src: "Promise.resolve(1)\n  .then((x) => {\n    console.log(\"then\", x);\n    return x + 1;\n  })\n  .then((x) => {\n    throw new Error(\"boom at \" + x);\n  })\n  .catch((error) => {\n    console.log(\"catch\", error.message);\n    return \"recovered\";\n  })\n  .finally(() => console.log(\"finally\"))\n  .then((value) => console.log(\"value\", value));",
          expected: "then 1\ncatch boom at 2\nfinally\nvalue recovered"
        },
        {
          lang: "javascript",
          caption: {
            en: "Sequential awaits vs Promise.all: the start/end order shows the difference (no timers needed)",
            hi: "Sequential awaits vs Promise.all: start/end का order फ़र्क़ दिखाता है (timers की ज़रूरत नहीं)",
            hg: "Sequential awaits vs Promise.all: start/end ka order farq dikhata hai (timers ki zaroorat nahi)"
          },
          check: "run",
          src: "const log = [];\nconst job = async (name) => {\n  log.push(\"start \" + name);\n  await null; // stands in for a network call\n  log.push(\"end \" + name);\n  return name;\n};\n\nawait job(\"A\");\nawait job(\"B\");\nconsole.log(log.join(\", \"));\n\nlog.length = 0;\nawait Promise.all([job(\"A\"), job(\"B\")]);\nconsole.log(log.join(\", \"));",
          expected: "start A, end A, start B, end B\nstart A, start B, end A, end B"
        },
        {
          lang: "javascript",
          caption: {
            en: "forEach(async) does not wait; Promise.all(items.map(async ...)) does",
            hi: "forEach(async) इंतज़ार नहीं करता; Promise.all(items.map(async ...)) करता है",
            hg: "forEach(async) intezaar nahi karta; Promise.all(items.map(async ...)) karta hai"
          },
          check: "run",
          src: "let doneInForEach = 0;\n[1, 2, 3].forEach(async () => {\n  await null;\n  doneInForEach++;\n});\nconsole.log(\"forEach returned, done =\", doneInForEach);\n\nlet doneInAll = 0;\nawait Promise.all(\n  [1, 2, 3].map(async () => {\n    await null;\n    doneInAll++;\n  }),\n);\nconsole.log(\"Promise.all finished, done =\", doneInAll);",
          expected: "forEach returned, done = 0\nPromise.all finished, done = 3"
        }
      ]
    },
    {
      id: "fetch-and-module-details",
      depth: "detailed",
      title: {
        en: "Modules and fetch — CommonJS, CORS and cancelling a request",
        hi: "Modules और fetch — CommonJS, CORS और request रद्द करना",
        hg: "Modules aur fetch — CommonJS, CORS aur request radd karna"
      },
      body: {
        en: "<ul>\n<li><b>ES modules vs CommonJS:</b> ESM uses static <code>import</code>/<code>export</code>, is strict by default, supports top-level <code>await</code> and works in browsers (<code>&lt;script type=\"module\"&gt;</code>) and Node (<code>.mjs</code> or <code>\"type\": \"module\"</code>). CommonJS uses <code>require</code>/<code>module.exports</code>, is synchronous, and is still common in older Node code.</li>\n<li><b>Browser and CORS:</b> a cross-origin <code>fetch</code> needs the server to allow it with CORS headers (Day 13).</li>\n<li><b>Cleanup:</b> remove listeners you add to long-lived elements, and use <code>AbortController</code> to cancel a fetch.</li>\n</ul>",
        hi: "<ul>\n<li><b>ES modules vs CommonJS:</b> ESM में static <code>import</code>/<code>export</code> होता है, default में strict है, top-level <code>await</code> support करता है और browsers (<code>&lt;script type=\"module\"&gt;</code>) व Node (<code>.mjs</code> या <code>\"type\": \"module\"</code>) में चलता है। CommonJS <code>require</code>/<code>module.exports</code> use करता है, synchronous है, और पुराने Node code में अब भी आम है।</li>\n<li><b>Browser और CORS:</b> cross-origin <code>fetch</code> के लिए server को CORS headers से allow करना पड़ता है (Day 13)।</li>\n<li><b>Cleanup:</b> long-lived elements पर जो listeners जोड़ो उन्हें हटाओ, और fetch cancel करने के लिए <code>AbortController</code> use करो।</li>\n</ul>",
        hg: "<ul>\n<li><b>ES modules vs CommonJS:</b> ESM mein static <code>import</code>/<code>export</code> hota hai, default mein strict hai, top-level <code>await</code> support karta hai aur browsers (<code>&lt;script type=\"module\"&gt;</code>) va Node (<code>.mjs</code> ya <code>\"type\": \"module\"</code>) mein chalta hai. CommonJS <code>require</code>/<code>module.exports</code> use karta hai, synchronous hai, aur purane Node code mein ab bhi aam hai.</li>\n<li><b>Browser aur CORS:</b> cross-origin <code>fetch</code> ke liye server ko CORS headers se allow karna padta hai (Day 13).</li>\n<li><b>Cleanup:</b> long-lived elements par jo listeners jodo unhein hatao, aur fetch cancel karne ke liye <code>AbortController</code> use karo.</li>\n</ul>"
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "Browser fetch with JSON POST, timeout via AbortController and an ok check (display-only: needs a browser or a real server)",
            hi: "JSON POST, AbortController से timeout और ok check वाला browser fetch (सिर्फ़ दिखाने के लिए: browser या असली server चाहिए)",
            hg: "JSON POST, AbortController se timeout aur ok check wala browser fetch (sirf dikhane ke liye: browser ya asli server chahiye)"
          },
          check: "none",
          src: "async function createOrder(order) {\n  const response = await fetch(\"/api/orders\", {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\" },\n    body: JSON.stringify(order),\n    signal: AbortSignal.timeout(5000), // rejects with a TimeoutError after 5 s\n  });\n\n  if (!response.ok) {\n    // 400/401/404/500 all arrive here, NOT in a catch around fetch\n    throw new Error(\"Order API failed: \" + response.status);\n  }\n  return response.json();\n}"
        }
      ]
    },
    {
      id: "ts-eslint-guard-rails",
      depth: "detailed",
      title: {
        en: "TypeScript and ESLint as guard-rails",
        hi: "TypeScript और ESLint — guard-rails के रूप में",
        hg: "TypeScript aur ESLint — guard-rails ke roop mein"
      },
      body: {
        en: "<ul>\n<li><b>TL angle:</b> TypeScript (types checked before running) and ESLint (rules checked in CI) catch the traps from this page before they reach production.</li>\n</ul>",
        hi: "<ul>\n<li><b>TL angle:</b> TypeScript (चलाने से पहले types check) और ESLint (CI में rules check) इस page के traps को production तक पहुँचने से पहले पकड़ लेते हैं।</li>\n</ul>",
        hg: "<ul>\n<li><b>TL angle:</b> TypeScript (chalane se pehle types check) aur ESLint (CI mein rules check) is page ke traps ko production tak pahunchne se pehle pakad lete hain.</li>\n</ul>"
      }
    }
  ],
  qa: [
    {
      id: "var-let-const",
      depth: "short",
      q: "What is the difference between var, let and const?",
      answer: "Prefer const, use let when you must reassign, avoid var. var is function-scoped and hoisted as undefined; let and const are block-scoped and sit in the temporal dead zone until declared.",
      meaning: {
        hi: "पहले const, ज़रूरत हो तो let, var से बचो। var function-scoped है और undefined के साथ hoist होता है; let/const block-scoped हैं और declare होने तक temporal dead zone में रहते हैं।",
        hg: "Pehle const, zaroorat ho to let, var se bacho. var function-scoped hai aur undefined ke saath hoist hota hai; let/const block-scoped hain aur declare hone tak temporal dead zone mein rehte hain."
      },
      explain: {
        en: "<ul>\n<li><code>const</code> blocks re-assignment of the name, not changes inside an object or array. <code>let</code> is for values that really change (counters, accumulators).</li>\n<li><code>var</code> also allows re-declaring the same name and, at the top level of a classic browser script, creates a property on <code>window</code>. Neither happens with <code>let</code>/<code>const</code>.</li>\n<li>TL angle: enforce it with ESLint rules <code>no-var</code> and <code>prefer-const</code> instead of repeating it in every review.</li>\n<li>Follow-up: \"Does <code>const</code> make an object immutable?\" No; <code>Object.freeze</code> is a shallow freeze, so nested objects can still change.</li>\n</ul>",
        hi: "<ul>\n<li><code>const</code> नाम को दोबारा assign करने से रोकता है, object या array के अंदर के बदलाव को नहीं। <code>let</code> उन values के लिए है जो सच में बदलती हैं (counters, accumulators)।</li>\n<li><code>var</code> एक ही नाम को दोबारा declare भी करने देता है और classic browser script के top level पर <code>window</code> की property बना देता है। <code>let</code>/<code>const</code> में दोनों नहीं होते।</li>\n<li>TL angle: हर review में दोहराने की जगह ESLint rules <code>no-var</code> और <code>prefer-const</code> से enforce करो।</li>\n<li>Follow-up: \"क्या <code>const</code> object को immutable बना देता है?\" नहीं; <code>Object.freeze</code> shallow freeze है, इसलिए nested objects फिर भी बदल सकते हैं।</li>\n</ul>",
        hg: "<ul>\n<li><code>const</code> naam ko dobara assign karne se rokta hai, object ya array ke andar ke badlaav ko nahi. <code>let</code> un values ke liye hai jo sach mein badalti hain (counters, accumulators).</li>\n<li><code>var</code> ek hi naam ko dobara declare bhi karne deta hai aur classic browser script ke top level par <code>window</code> ki property bana deta hai. <code>let</code>/<code>const</code> mein dono nahi hote.</li>\n<li>TL angle: har review mein dohrane ki jagah ESLint rules <code>no-var</code> aur <code>prefer-const</code> se enforce karo.</li>\n<li>Follow-up: \"Kya <code>const</code> object ko immutable bana deta hai?\" Nahi; <code>Object.freeze</code> shallow freeze hai, isliye nested objects phir bhi badal sakte hain.</li>\n</ul>"
      }
    },
    {
      id: "hoisting-tdz",
      depth: "short",
      q: "What is hoisting, and what is the temporal dead zone?",
      answer: "Declarations are registered before the code runs. Functions work early, var reads undefined, and let/const throw a ReferenceError until their line executes; that gap is the temporal dead zone.",
      meaning: {
        hi: "Declarations code चलने से पहले register होते हैं। Functions जल्दी चलते हैं, var undefined पढ़ा जाता है, और let/const अपनी line तक ReferenceError फेंकते हैं; वही gap temporal dead zone है।",
        hg: "Declarations code chalne se pehle register hote hain. Functions jaldi chalte hain, var undefined padha jaata hai, aur let/const apni line tak ReferenceError phenkte hain; wahi gap temporal dead zone hai."
      },
      explain: {
        en: "<ul>\n<li>\"Hoisting\" does not move code; the engine simply creates the names first. A function declaration is created with its body, a <code>var</code> with the value <code>undefined</code>, and a <code>let</code>/<code>const</code>/<code>class</code> without a value until the line runs.</li>\n<li>A function expression assigned to a <code>var</code> is hoisted as <code>undefined</code>, so calling it early gives <code>TypeError: fnExpr is not a function</code> (puzzle 4 shows all of these).</li>\n<li>Why TDZ is good: it turns a silent <code>undefined</code> bug into a loud error that names the variable.</li>\n<li>Follow-up: \"Is <code>let</code> hoisted?\" Yes, the name exists for the whole block, but it cannot be used before its declaration.</li>\n</ul>",
        hi: "<ul>\n<li>\"Hoisting\" code को हिलाता नहीं; engine बस पहले नाम बना देता है। Function declaration body के साथ बनता है, <code>var</code> value <code>undefined</code> के साथ, और <code>let</code>/<code>const</code>/<code>class</code> अपनी line चलने तक बिना value के।</li>\n<li><code>var</code> में assign किया गया function expression <code>undefined</code> के साथ hoist होता है, इसलिए उसे जल्दी call करने पर <code>TypeError: fnExpr is not a function</code> आता है (puzzle 4 में ये सब दिखते हैं)।</li>\n<li>TDZ अच्छा क्यों है: यह चुपचाप वाले <code>undefined</code> bug को ऐसे loud error में बदल देता है जो variable का नाम बताता है।</li>\n<li>Follow-up: \"क्या <code>let</code> hoist होता है?\" हाँ, नाम पूरे block में मौजूद है, पर declaration से पहले use नहीं हो सकता।</li>\n</ul>",
        hg: "<ul>\n<li>\"Hoisting\" code ko hilata nahi; engine bas pehle naam bana deta hai. Function declaration body ke saath banta hai, <code>var</code> value <code>undefined</code> ke saath, aur <code>let</code>/<code>const</code>/<code>class</code> apni line chalne tak bina value ke.</li>\n<li><code>var</code> mein assign kiya gaya function expression <code>undefined</code> ke saath hoist hota hai, isliye use jaldi call karne par <code>TypeError: fnExpr is not a function</code> aata hai (puzzle 4 mein yeh sab dikhte hain).</li>\n<li>TDZ accha kyon hai: yeh chupchaap wale <code>undefined</code> bug ko aise loud error mein badal deta hai jo variable ka naam batata hai.</li>\n<li>Follow-up: \"Kya <code>let</code> hoist hota hai?\" Haan, naam poore block mein maujood hai, par declaration se pehle use nahi ho sakta.</li>\n</ul>"
      }
    },
    {
      id: "closure-loop-trap",
      depth: "short",
      q: "What is a closure? Why does a var loop with setTimeout print the same value?",
      answer: "A closure is a function that keeps access to the variables of the scope where it was created. A var loop shares one variable, so every callback sees its final value.",
      meaning: {
        hi: "Closure वह function है जो अपने बनने वाले scope के variables तक पहुँच रखता है। var loop एक ही variable share करता है, इसलिए हर callback उसकी आख़िरी value देखता है।",
        hg: "Closure woh function hai jo apne banne wale scope ke variables tak pahunch rakhta hai. var loop ek hi variable share karta hai, isliye har callback uski aakhri value dekhta hai."
      },
      explain: {
        en: "<ul>\n<li>Closures capture the <b>variable</b>, not its value at that moment. With <code>var i</code> there is one <code>i</code> for the whole loop; by the time the timers fire it is <code>3</code>.</li>\n<li>Fixes: use <code>let</code> (a fresh binding per iteration), or pass the value in as a parameter, or use <code>forEach</code>/<code>map</code>. The old IIFE trick does the same by creating a new function scope.</li>\n<li>Real uses: private state, event handlers that remember their row, factories, memoising. Risk: a long-lived closure keeps everything it captured alive.</li>\n<li>Follow-up: \"How is it different from a C# lambda?\" Same idea of capturing variables; C# <code>foreach</code> gives each iteration its own variable (since C# 5), while a C# <code>for</code> loop variable is shared, like <code>var</code>.</li>\n</ul>",
        hi: "<ul>\n<li>Closures <b>variable</b> को capture करते हैं, उस पल की value को नहीं। <code>var i</code> के साथ पूरे loop के लिए एक ही <code>i</code> होता है; timers चलने तक वह <code>3</code> हो चुका होता है।</li>\n<li>Fixes: <code>let</code> use करो (हर iteration पर नया binding), या value को parameter में pass करो, या <code>forEach</code>/<code>map</code> use करो। पुरानी IIFE trick नया function scope बनाकर यही करती है।</li>\n<li>असली uses: private state, अपनी row याद रखने वाले event handlers, factories, memoising। Risk: long-lived closure अपना सब captured data ज़िंदा रखता है।</li>\n<li>Follow-up: \"C# lambda से कैसे अलग है?\" Variables capture करने का idea वही है; C# <code>foreach</code> हर iteration को अपना variable देता है (C# 5 से), जबकि C# <code>for</code> loop variable <code>var</code> की तरह shared है।</li>\n</ul>",
        hg: "<ul>\n<li>Closures <b>variable</b> ko capture karte hain, us pal ki value ko nahi. <code>var i</code> ke saath poore loop ke liye ek hi <code>i</code> hota hai; timers chalne tak woh <code>3</code> ho chuka hota hai.</li>\n<li>Fixes: <code>let</code> use karo (har iteration par naya binding), ya value ko parameter mein pass karo, ya <code>forEach</code>/<code>map</code> use karo. Purani IIFE trick naya function scope banakar yahi karti hai.</li>\n<li>Asli uses: private state, apni row yaad rakhne wale event handlers, factories, memoising. Risk: long-lived closure apna sab captured data zinda rakhta hai.</li>\n<li>Follow-up: \"C# lambda se kaise alag hai?\" Variables capture karne ka idea wahi hai; C# <code>foreach</code> har iteration ko apna variable deta hai (C# 5 se), jabki C# <code>for</code> loop variable <code>var</code> ki tarah shared hai.</li>\n</ul>"
      }
    },
    {
      id: "this-keyword",
      depth: "short",
      q: "How is the value of this decided in JavaScript?",
      answer: "By how the function is called: new, then call/apply/bind, then obj.method(), then a plain call (undefined in strict mode). Arrow functions have no own this and use the surrounding one.",
      meaning: {
        hi: "यह call के तरीक़े से तय होता है: new, फिर call/apply/bind, फिर obj.method(), फिर plain call (strict mode में undefined)। Arrow functions का अपना this नहीं होता, वे आसपास वाला लेते हैं।",
        hg: "Yeh call ke tareeke se tay hota hai: new, phir call/apply/bind, phir obj.method(), phir plain call (strict mode mein undefined). Arrow functions ka apna this nahi hota, woh aaspaas wala lete hain."
      },
      explain: {
        en: "<ul>\n<li><code>obj.method()</code>: <code>this</code> is <code>obj</code>. <code>const f = obj.method; f()</code>: the link is lost, so <code>this</code> is <code>undefined</code> in strict code (modules and classes) or the global object in old sloppy scripts.</li>\n<li><code>fn.call(thisArg, ...args)</code> and <code>fn.apply(thisArg, argsArray)</code> call now; <code>fn.bind(thisArg)</code> returns a new function with <code>this</code> fixed (a second <code>bind</code> or <code>call</code> cannot change it).</li>\n<li><code>new Fn()</code> creates a new object and uses it as <code>this</code>.</li>\n<li>Typical bug: passing <code>this.handleClick</code> to <code>addEventListener</code> or to a React prop, and then <code>this</code> is not your object. Fix with an arrow function or <code>bind</code>.</li>\n<li>Follow-up: \"What is <code>this</code> at the top level of an ES module?\" <code>undefined</code>. Puzzle 3 shows these rules.</li>\n</ul>",
        hi: "<ul>\n<li><code>obj.method()</code>: <code>this</code> <code>obj</code> है। <code>const f = obj.method; f()</code>: link टूट गया, इसलिए strict code (modules और classes) में <code>this</code> <code>undefined</code> है या पुरानी sloppy scripts में global object।</li>\n<li><code>fn.call(thisArg, ...args)</code> और <code>fn.apply(thisArg, argsArray)</code> अभी call करते हैं; <code>fn.bind(thisArg)</code> नया function लौटाता है जिसका <code>this</code> fix है (दूसरा <code>bind</code> या <code>call</code> उसे बदल नहीं सकता)।</li>\n<li><code>new Fn()</code> नया object बनाता है और उसे <code>this</code> की तरह use करता है।</li>\n<li>Typical bug: <code>this.handleClick</code> को <code>addEventListener</code> या React prop में pass करना, और फिर <code>this</code> तुम्हारा object नहीं रहता। Arrow function या <code>bind</code> से fix करो।</li>\n<li>Follow-up: \"ES module के top level पर <code>this</code> क्या है?\" <code>undefined</code>। Puzzle 3 में ये rules दिखते हैं।</li>\n</ul>",
        hg: "<ul>\n<li><code>obj.method()</code>: <code>this</code> <code>obj</code> hai. <code>const f = obj.method; f()</code>: link toot gaya, isliye strict code (modules aur classes) mein <code>this</code> <code>undefined</code> hai ya purani sloppy scripts mein global object.</li>\n<li><code>fn.call(thisArg, ...args)</code> aur <code>fn.apply(thisArg, argsArray)</code> abhi call karte hain; <code>fn.bind(thisArg)</code> naya function lautata hai jiska <code>this</code> fix hai (doosra <code>bind</code> ya <code>call</code> use badal nahi sakta).</li>\n<li><code>new Fn()</code> naya object banata hai aur use <code>this</code> ki tarah use karta hai.</li>\n<li>Typical bug: <code>this.handleClick</code> ko <code>addEventListener</code> ya React prop mein pass karna, aur phir <code>this</code> tumhara object nahi rehta. Arrow function ya <code>bind</code> se fix karo.</li>\n<li>Follow-up: \"ES module ke top level par <code>this</code> kya hai?\" <code>undefined</code>. Puzzle 3 mein yeh rules dikhte hain.</li>\n</ul>"
      }
    },
    {
      id: "equality-coercion",
      depth: "short",
      q: "What is the difference between == and ===?",
      answer: "=== compares without converting types. == converts types first and gives surprises, for example [] == false is true. Use === by default.",
      meaning: {
        hi: "=== types बदले बिना compare करता है। == पहले types convert करता है और चौंकाता है, जैसे [] == false true है। Default में === use करो।",
        hg: "=== types badle bina compare karta hai. == pehle types convert karta hai aur chaunkata hai, jaise [] == false true hai. Default mein === use karo."
      },
      explain: {
        en: "<ul>\n<li><code>==</code> follows conversion rules: <code>0 == \"0\"</code> is <code>true</code>, <code>\"0\" == \"\"</code> is <code>false</code>, so it is not even transitive. <code>null == undefined</code> is <code>true</code> but <code>null == 0</code> is <code>false</code>.</li>\n<li><code>NaN</code> is not equal to itself with either operator; use <code>Number.isNaN(x)</code> or <code>Object.is</code>.</li>\n<li>Related coercions: <code>\"5\" + 2</code> is <code>\"52\"</code> (<code>+</code> concatenates when a string is involved), <code>\"5\" - 2</code> is <code>3</code>, and <code>typeof null</code> is <code>\"object\"</code> (a historical quirk).</li>\n<li>Some teams allow <code>x == null</code> as a short check for \"null or undefined\"; ESLint's <code>eqeqeq</code> rule can allow that single case.</li>\n<li>C# comparison: C# does not convert between <code>int</code> and <code>string</code> in <code>==</code>; the compiler would reject it.</li>\n</ul>",
        hi: "<ul>\n<li><code>==</code> conversion rules follow करता है: <code>0 == \"0\"</code> <code>true</code> है, <code>\"0\" == \"\"</code> <code>false</code> है, यानी यह transitive भी नहीं है। <code>null == undefined</code> <code>true</code> है पर <code>null == 0</code> <code>false</code> है।</li>\n<li><code>NaN</code> किसी भी operator से अपने बराबर नहीं होता; <code>Number.isNaN(x)</code> या <code>Object.is</code> use करो।</li>\n<li>जुड़े coercions: <code>\"5\" + 2</code> <code>\"52\"</code> है (string आने पर <code>+</code> जोड़ता है), <code>\"5\" - 2</code> <code>3</code> है, और <code>typeof null</code> <code>\"object\"</code> है (पुरानी historical quirk)।</li>\n<li>कुछ teams \"null या undefined\" की छोटी check के लिए <code>x == null</code> allow करती हैं; ESLint का <code>eqeqeq</code> rule सिर्फ़ यह एक case allow कर सकता है।</li>\n<li>C# से comparison: C# <code>==</code> में <code>int</code> और <code>string</code> को convert नहीं करता; compiler उसे reject कर देगा।</li>\n</ul>",
        hg: "<ul>\n<li><code>==</code> conversion rules follow karta hai: <code>0 == \"0\"</code> <code>true</code> hai, <code>\"0\" == \"\"</code> <code>false</code> hai, yaani yeh transitive bhi nahi hai. <code>null == undefined</code> <code>true</code> hai par <code>null == 0</code> <code>false</code> hai.</li>\n<li><code>NaN</code> kisi bhi operator se apne barabar nahi hota; <code>Number.isNaN(x)</code> ya <code>Object.is</code> use karo.</li>\n<li>Jude coercions: <code>\"5\" + 2</code> <code>\"52\"</code> hai (string aane par <code>+</code> jodta hai), <code>\"5\" - 2</code> <code>3</code> hai, aur <code>typeof null</code> <code>\"object\"</code> hai (purani historical quirk).</li>\n<li>Kuch teams \"null ya undefined\" ki chhoti check ke liye <code>x == null</code> allow karti hain; ESLint ka <code>eqeqeq</code> rule sirf yeh ek case allow kar sakta hai.</li>\n<li>C# se comparison: C# <code>==</code> mein <code>int</code> aur <code>string</code> ko convert nahi karta; compiler use reject kar dega.</li>\n</ul>"
      }
    },
    {
      id: "event-loop-order",
      depth: "short",
      q: "Explain the JavaScript event loop. Microtasks vs macrotasks?",
      answer: "One thread runs the call stack. When it empties, all microtasks (promise callbacks) run, then one macrotask such as setTimeout, then microtasks again. So a promise then runs before setTimeout 0.",
      meaning: {
        hi: "एक thread call stack चलाता है। Stack खाली होने पर सारे microtasks (promise callbacks) चलते हैं, फिर एक macrotask जैसे setTimeout, फिर दोबारा microtasks। इसलिए promise का then setTimeout 0 से पहले चलता है।",
        hg: "Ek thread call stack chalata hai. Stack khaali hone par saare microtasks (promise callbacks) chalte hain, phir ek macrotask jaise setTimeout, phir dobara microtasks. Isliye promise ka then setTimeout 0 se pehle chalta hai."
      },
      explain: {
        en: "<ul>\n<li>Parts: the <b>call stack</b> (what runs now), <b>Web APIs / Node runtime</b> (timers, network, files wait there), the <b>microtask queue</b> (promise reactions, <code>queueMicrotask</code>, <code>await</code> continuations) and the <b>macrotask queue</b> (timers, I/O callbacks, UI events).</li>\n<li>Nuance: <code>setTimeout(fn, 0)</code> means \"no sooner than 0 ms, as a macrotask\", not \"now\". In Node, <code>process.nextTick</code> has its own queue: in CommonJS and inside timer or I/O callbacks it runs before promise callbacks, but at ES-module top level promise callbacks run first. <code>setImmediate</code> is a separate phase.</li>\n<li>Danger: an endless chain of microtasks can starve rendering and timers; a long synchronous loop freezes everything.</li>\n<li>C# bridge: ASP.NET Core serves many requests with a pool of threads (Day 3); Node serves many with one thread because waiting is not done by your code. That is why CPU-heavy work hurts Node much more.</li>\n<li>Follow-up: \"What prints first, <code>setTimeout 0</code> or <code>Promise.resolve().then</code>?\" The promise; puzzle 1 shows the full order.</li>\n</ul>",
        hi: "<ul>\n<li>हिस्से: <b>call stack</b> (जो अभी चल रहा है), <b>Web APIs / Node runtime</b> (timers, network, files वहाँ इंतज़ार करते हैं), <b>microtask queue</b> (promise reactions, <code>queueMicrotask</code>, <code>await</code> continuations) और <b>macrotask queue</b> (timers, I/O callbacks, UI events)।</li>\n<li>Nuance: <code>setTimeout(fn, 0)</code> का मतलब है \"0 ms से जल्दी नहीं, macrotask की तरह\", \"अभी\" नहीं। Node में <code>process.nextTick</code> की अपनी queue है: CommonJS में और timer या I/O callbacks के अंदर वह promise callbacks से पहले चलता है, पर ES-module के top level पर promise callbacks पहले चलते हैं। <code>setImmediate</code> अलग phase है।</li>\n<li>Danger: microtasks की endless chain rendering और timers को भूखा रख सकती है; लंबा synchronous loop सब कुछ freeze कर देता है।</li>\n<li>C# bridge: ASP.NET Core कई requests को threads के pool से serve करता है (Day 3); Node कई requests को एक thread से serve करता है क्योंकि इंतज़ार तुम्हारा code नहीं करता। इसीलिए CPU-heavy काम Node को ज़्यादा चोट पहुँचाता है।</li>\n<li>Follow-up: \"<code>setTimeout 0</code> पहले print होगा या <code>Promise.resolve().then</code>?\" Promise; पूरा order puzzle 1 में है।</li>\n</ul>",
        hg: "<ul>\n<li>Hisse: <b>call stack</b> (jo abhi chal raha hai), <b>Web APIs / Node runtime</b> (timers, network, files wahan intezaar karte hain), <b>microtask queue</b> (promise reactions, <code>queueMicrotask</code>, <code>await</code> continuations) aur <b>macrotask queue</b> (timers, I/O callbacks, UI events).</li>\n<li>Nuance: <code>setTimeout(fn, 0)</code> ka matlab hai \"0 ms se jaldi nahi, macrotask ki tarah\", \"abhi\" nahi. Node mein <code>process.nextTick</code> ki apni queue hai: CommonJS mein aur timer ya I/O callbacks ke andar woh promise callbacks se pehle chalta hai, par ES-module ke top level par promise callbacks pehle chalte hain. <code>setImmediate</code> alag phase hai.</li>\n<li>Danger: microtasks ki endless chain rendering aur timers ko bhookha rakh sakti hai; lamba synchronous loop sab kuch freeze kar deta hai.</li>\n<li>C# bridge: ASP.NET Core kai requests ko threads ke pool se serve karta hai (Day 3); Node kai requests ko ek thread se serve karta hai kyonki intezaar tumhara code nahi karta. Isiliye CPU-heavy kaam Node ko zyaada chot pahunchata hai.</li>\n<li>Follow-up: \"<code>setTimeout 0</code> pehle print hoga ya <code>Promise.resolve().then</code>?\" Promise; poora order puzzle 1 mein hai.</li>\n</ul>"
      }
    },
    {
      id: "promise-async-await-vs-task",
      depth: "short",
      q: "What is a Promise? How do async/await work, and how do they differ from C# Task?",
      answer: "A promise is a future value: pending, then fulfilled or rejected. async/await is syntax over promises: await pauses that function, not the thread, and errors use try/catch.",
      meaning: {
        hi: "Promise एक future value है: pending, फिर fulfilled या rejected। async/await promises पर syntax है: await उसी function को pause करता है, thread को नहीं, और errors try/catch से आते हैं।",
        hg: "Promise ek future value hai: pending, phir fulfilled ya rejected. async/await promises par syntax hai: await usi function ko pause karta hai, thread ko nahi, aur errors try/catch se aate hain."
      },
      explain: {
        en: "<ul>\n<li>An <code>async</code> function always returns a promise; a <code>throw</code> inside becomes a rejection. <code>await x</code> means \"pause here, let other tasks run, continue as a microtask when <code>x</code> settles\".</li>\n<li><b>Same as C# <code>Task</code> (Day 3):</b> work starts when you call (a promise is \"hot\"), you compose with <code>all</code> like <code>WhenAll</code>, and exceptions travel inside the object.</li>\n<li><b>Different:</b> JavaScript has <b>no thread pool</b> for your code and no <code>ConfigureAwait</code>; there is one loop thread. A promise cannot be cancelled by itself (use <code>AbortController</code>; C# has <code>CancellationToken</code>). A promise resolves once and cannot be \"awaited synchronously\" with <code>.Result</code>.</li>\n<li>Pitfalls: forgetting <code>await</code> (you get a promise, not the value), <code>forEach(async ...)</code>, and an unhandled rejection, which ends a Node process by default.</li>\n<li>Follow-up: \"Does async make this loop faster?\" No; it only avoids waiting. CPU work still blocks.</li>\n</ul>",
        hi: "<ul>\n<li><code>async</code> function हमेशा promise लौटाता है; अंदर का <code>throw</code> rejection बन जाता है। <code>await x</code> का मतलब है \"यहाँ pause करो, दूसरे tasks चलने दो, <code>x</code> के settle होने पर microtask की तरह आगे बढ़ो\"।</li>\n<li><b>C# <code>Task</code> (Day 3) जैसा:</b> call करते ही काम शुरू (promise \"hot\" है), <code>WhenAll</code> की तरह <code>all</code> से compose करते हैं, और exceptions object के अंदर सफ़र करते हैं।</li>\n<li><b>अलग:</b> JavaScript में तुम्हारे code के लिए <b>thread pool नहीं</b> है और <code>ConfigureAwait</code> नहीं है; एक loop thread है। Promise ख़ुद cancel नहीं हो सकता (<code>AbortController</code> use करो; C# में <code>CancellationToken</code> है)। Promise एक ही बार resolve होता है और <code>.Result</code> जैसा synchronous wait नहीं है।</li>\n<li>Pitfalls: <code>await</code> भूल जाना (value की जगह promise मिलता है), <code>forEach(async ...)</code>, और unhandled rejection, जो Node process को default में बंद कर देता है।</li>\n<li>Follow-up: \"क्या async से यह loop तेज़ हो जाएगा?\" नहीं; वह सिर्फ़ इंतज़ार बचाता है। CPU का काम फिर भी block करता है।</li>\n</ul>",
        hg: "<ul>\n<li><code>async</code> function hamesha promise lautata hai; andar ka <code>throw</code> rejection ban jaata hai. <code>await x</code> ka matlab hai \"yahan pause karo, doosre tasks chalne do, <code>x</code> ke settle hone par microtask ki tarah aage badho\".</li>\n<li><b>C# <code>Task</code> (Day 3) jaisa:</b> call karte hi kaam shuru (promise \"hot\" hai), <code>WhenAll</code> ki tarah <code>all</code> se compose karte hain, aur exceptions object ke andar safar karte hain.</li>\n<li><b>Alag:</b> JavaScript mein tumhare code ke liye <b>thread pool nahi</b> hai aur <code>ConfigureAwait</code> nahi hai; ek loop thread hai. Promise khud cancel nahi ho sakta (<code>AbortController</code> use karo; C# mein <code>CancellationToken</code> hai). Promise ek hi baar resolve hota hai aur <code>.Result</code> jaisa synchronous wait nahi hai.</li>\n<li>Pitfalls: <code>await</code> bhool jaana (value ki jagah promise milta hai), <code>forEach(async ...)</code>, aur unhandled rejection, jo Node process ko default mein band kar deta hai.</li>\n<li>Follow-up: \"Kya async se yeh loop tez ho jaayega?\" Nahi; woh sirf intezaar bachata hai. CPU ka kaam phir bhi block karta hai.</li>\n</ul>"
      }
    },
    {
      id: "promise-combinators",
      depth: "short",
      q: "Promise.all vs allSettled vs race vs any: when do you use each?",
      answer: "all fails fast on the first rejection; allSettled waits for everything and reports each outcome; race returns the first to settle; any returns the first fulfilled (AggregateError if all reject).",
      meaning: {
        hi: "all पहले rejection पर fail हो जाता है; allSettled सबका इंतज़ार करके हर नतीजा बताता है; race जो पहले settle हो वह लौटाता है; any पहला fulfilled लौटाता है (सब reject हों तो AggregateError)।",
        hg: "all pehle rejection par fail ho jaata hai; allSettled sabka intezaar karke har nateeja batata hai; race jo pehle settle ho woh lautata hai; any pehla fulfilled lautata hai (sab reject hon to AggregateError)."
      },
      explain: {
        en: "<ul>\n<li><code>all</code>: all calls are needed (load user and settings for one screen). The other promises keep running; you just stop waiting for them.</li>\n<li><code>allSettled</code>: partial results are fine (a dashboard of independent widgets). You inspect <code>status</code> and <code>value</code>/<code>reason</code> yourself.</li>\n<li><code>race</code>: the first outcome wins, even a rejection; common for a timeout. <code>any</code>: the first success wins, e.g. the fastest mirror.</li>\n<li>C# bridge: <code>all</code> ~ <code>Task.WhenAll</code>, <code>race</code> ~ <code>Task.WhenAny</code>, but <code>WhenAny</code> never throws (it returns the first finished task, even a faulted one) while <code>race</code> rejects; <code>allSettled</code> has no one-line twin (you inspect each Task).</li>\n<li>Follow-up: \"Does <code>Promise.all</code> cancel the others?\" No, nothing is cancelled. Puzzle 7 runs all four.</li>\n</ul>",
        hi: "<ul>\n<li><code>all</code>: जब सारे calls चाहिए (एक screen के लिए user और settings load करना)। बाक़ी promises चलते रहते हैं; तुम बस उनका इंतज़ार छोड़ देते हो।</li>\n<li><code>allSettled</code>: जब partial results चलें (independent widgets वाला dashboard)। <code>status</code> और <code>value</code>/<code>reason</code> तुम ख़ुद देखते हो।</li>\n<li><code>race</code>: पहला नतीजा जीतता है, rejection भी; timeout के लिए आम है। <code>any</code>: पहली success जीतती है, जैसे सबसे तेज़ mirror।</li>\n<li>C# bridge: <code>all</code> ~ <code>Task.WhenAll</code>, <code>race</code> ~ <code>Task.WhenAny</code>, पर <code>WhenAny</code> कभी throw नहीं करता (पहला finished task लौटाता है, faulted भी) जबकि <code>race</code> reject होता है; <code>allSettled</code> का एक line वाला twin नहीं है (हर Task तुम ख़ुद देखते हो)।</li>\n<li>Follow-up: \"क्या <code>Promise.all</code> बाक़ियों को cancel करता है?\" नहीं, कुछ cancel नहीं होता। Puzzle 7 में चारों चलते हैं।</li>\n</ul>",
        hg: "<ul>\n<li><code>all</code>: jab saare calls chahiye (ek screen ke liye user aur settings load karna). Baaki promises chalte rehte hain; tum bas unka intezaar chhod dete ho.</li>\n<li><code>allSettled</code>: jab partial results chalein (independent widgets wala dashboard). <code>status</code> aur <code>value</code>/<code>reason</code> tum khud dekhte ho.</li>\n<li><code>race</code>: pehla nateeja jeetta hai, rejection bhi; timeout ke liye aam hai. <code>any</code>: pehli success jeetti hai, jaise sabse tez mirror.</li>\n<li>C# bridge: <code>all</code> ~ <code>Task.WhenAll</code>, <code>race</code> ~ <code>Task.WhenAny</code>, par <code>WhenAny</code> kabhi throw nahi karta (pehla finished task lautata hai, faulted bhi) jabki <code>race</code> reject hota hai; <code>allSettled</code> ka ek line wala twin nahi hai (har Task tum khud dekhte ho).</li>\n<li>Follow-up: \"Kya <code>Promise.all</code> baakiyon ko cancel karta hai?\" Nahi, kuch cancel nahi hota. Puzzle 7 mein chaaron chalte hain.</li>\n</ul>"
      }
    },
    {
      id: "prototype-vs-class",
      depth: "detailed",
      q: "How does JavaScript inheritance work? Is class the same as a C# class?",
      answer: "Objects inherit through a prototype chain. class is syntax over that mechanism: methods sit on the prototype and extends links prototypes. It is not a C# class with a compile-time type.",
      meaning: {
        hi: "Objects prototype chain से inherit करते हैं। class उसी mechanism पर syntax है: methods prototype पर रहते हैं और extends prototypes को जोड़ता है। यह compile-time type वाली C# class नहीं है।",
        hg: "Objects prototype chain se inherit karte hain. class usi mechanism par syntax hai: methods prototype par rehte hain aur extends prototypes ko jodta hai. Yeh compile-time type wali C# class nahi hai."
      },
      explain: {
        en: "<ul>\n<li>Lookup walks up the chain: instance, <code>Class.prototype</code>, parent prototype, ..., <code>Object.prototype</code>, then <code>undefined</code>. <code>Object.getPrototypeOf(x)</code> reads the link; avoid the older <code>__proto__</code> in new code.</li>\n<li>What <code>class</code> adds: cleaner syntax, <code>super</code>, <code>static</code>, getters/setters, <code>#private</code> fields and strictness. What it does not add: interfaces, abstract classes, overloads, or compile-time checking (TypeScript adds types and <code>abstract</code> on top, Day 24 shows TSX).</li>\n<li>Instance methods are shared on the prototype; a class field holding an arrow function creates one function <b>per instance</b>. That is fine for UI handlers, wasteful for thousands of objects.</li>\n<li>TL angle: prefer composition and small modules; deep class hierarchies hurt in JavaScript as much as in C#.</li>\n<li>Follow-up: \"What does <code>new</code> do?\" Creates an object linked to the constructor's prototype, runs the constructor with <code>this</code> set to it, and returns it.</li>\n</ul>",
        hi: "<ul>\n<li>Lookup chain में ऊपर चढ़ता है: instance, <code>Class.prototype</code>, parent prototype, ..., <code>Object.prototype</code>, फिर <code>undefined</code>। <code>Object.getPrototypeOf(x)</code> link पढ़ता है; नए code में पुराना <code>__proto__</code> avoid करो।</li>\n<li><code>class</code> क्या जोड़ता है: साफ़ syntax, <code>super</code>, <code>static</code>, getters/setters, <code>#private</code> fields और strictness। क्या नहीं जोड़ता: interfaces, abstract classes, overloads, या compile-time checking (TypeScript ऊपर से types और <code>abstract</code> जोड़ता है, Day 24 में TSX दिखेगा)।</li>\n<li>Instance methods prototype पर shared रहते हैं; arrow function वाला class field <b>हर instance</b> के लिए एक function बनाता है। UI handlers के लिए ठीक है, हज़ारों objects के लिए फ़िज़ूल।</li>\n<li>TL angle: composition और छोटे modules prefer करो; deep class hierarchies JavaScript में भी उतना ही चोट देती हैं जितना C# में।</li>\n<li>Follow-up: \"<code>new</code> क्या करता है?\" Constructor के prototype से जुड़ा object बनाता है, उसे <code>this</code> बनाकर constructor चलाता है, और उसे लौटाता है।</li>\n</ul>",
        hg: "<ul>\n<li>Lookup chain mein upar chadhta hai: instance, <code>Class.prototype</code>, parent prototype, ..., <code>Object.prototype</code>, phir <code>undefined</code>. <code>Object.getPrototypeOf(x)</code> link padhta hai; naye code mein purana <code>__proto__</code> avoid karo.</li>\n<li><code>class</code> kya jodta hai: saaf syntax, <code>super</code>, <code>static</code>, getters/setters, <code>#private</code> fields aur strictness. Kya nahi jodta: interfaces, abstract classes, overloads, ya compile-time checking (TypeScript upar se types aur <code>abstract</code> jodta hai, Day 24 mein TSX dikhega).</li>\n<li>Instance methods prototype par shared rehte hain; arrow function wala class field <b>har instance</b> ke liye ek function banata hai. UI handlers ke liye theek hai, hazaaron objects ke liye fizool.</li>\n<li>TL angle: composition aur chhote modules prefer karo; deep class hierarchies JavaScript mein bhi utna hi chot deti hain jitna C# mein.</li>\n<li>Follow-up: \"<code>new</code> kya karta hai?\" Constructor ke prototype se juda object banata hai, use <code>this</code> banakar constructor chalata hai, aur use lautata hai.</li>\n</ul>"
      }
    },
    {
      id: "arrow-vs-regular-function",
      depth: "detailed",
      q: "How is an arrow function different from a regular function?",
      answer: "An arrow function has no own this, arguments or prototype and cannot be used with new. It suits callbacks; use regular functions or method syntax for object methods and constructors.",
      meaning: {
        hi: "Arrow function का अपना this, arguments या prototype नहीं होता और उसे new के साथ use नहीं कर सकते। यह callbacks के लिए ठीक है; object methods और constructors के लिए regular function या method syntax use करो।",
        hg: "Arrow function ka apna this, arguments ya prototype nahi hota aur use new ke saath use nahi kar sakte. Yeh callbacks ke liye theek hai; object methods aur constructors ke liye regular function ya method syntax use karo."
      },
      explain: {
        en: "<ul>\n<li>\"Lexical <code>this</code>\" means the arrow looks up <code>this</code> like any variable in the code around it, so <code>call</code>/<code>bind</code> cannot change it.</li>\n<li>Good fit: <code>items.map(x =&gt; x.id)</code>, promise callbacks, and a callback inside a method that needs the method's <code>this</code>.</li>\n<li>Bad fit: an object literal property like <code>{ total: () =&gt; this.items.length }</code> (here <code>this</code> is not the object), prototype methods, and constructors.</li>\n<li>Syntax notes: a body in braces needs <code>return</code>; returning an object literal directly needs parentheses, <code>() =&gt; ({ id: 1 })</code>.</li>\n<li>Follow-up: \"Why does <code>onClick={this.handle}</code> lose <code>this</code> in a React class component?\" Because the method loses <code>this</code> (a class field arrow fixes it). Puzzle 3 shows an arrow on an object.</li>\n</ul>",
        hi: "<ul>\n<li>\"Lexical <code>this</code>\" का मतलब है कि arrow <code>this</code> को आसपास के code के किसी भी variable की तरह खोजता है, इसलिए <code>call</code>/<code>bind</code> उसे बदल नहीं सकते।</li>\n<li>सही जगह: <code>items.map(x =&gt; x.id)</code>, promise callbacks, और method के अंदर का callback जिसे method का <code>this</code> चाहिए।</li>\n<li>ग़लत जगह: object literal की property जैसे <code>{ total: () =&gt; this.items.length }</code> (यहाँ <code>this</code> वह object नहीं है), prototype methods, और constructors।</li>\n<li>Syntax notes: braces वाली body में <code>return</code> चाहिए; object literal सीधे लौटाने के लिए parentheses चाहिए, <code>() =&gt; ({ id: 1 })</code>।</li>\n<li>Follow-up: \"React class component में <code>onClick={this.handle}</code> <code>this</code> क्यों खो देता है?\" क्योंकि method <code>this</code> खो देता है (class field arrow इसे fix करता है)। Puzzle 3 में object पर arrow दिखता है।</li>\n</ul>",
        hg: "<ul>\n<li>\"Lexical <code>this</code>\" ka matlab hai ki arrow <code>this</code> ko aaspaas ke code ke kisi bhi variable ki tarah khojta hai, isliye <code>call</code>/<code>bind</code> use badal nahi sakte.</li>\n<li>Sahi jagah: <code>items.map(x =&gt; x.id)</code>, promise callbacks, aur method ke andar ka callback jise method ka <code>this</code> chahiye.</li>\n<li>Galat jagah: object literal ki property jaise <code>{ total: () =&gt; this.items.length }</code> (yahan <code>this</code> woh object nahi hai), prototype methods, aur constructors.</li>\n<li>Syntax notes: braces wali body mein <code>return</code> chahiye; object literal seedha lautane ke liye parentheses chahiye, <code>() =&gt; ({ id: 1 })</code>.</li>\n<li>Follow-up: \"React class component mein <code>onClick={this.handle}</code> <code>this</code> kyon kho deta hai?\" Kyonki method <code>this</code> kho deta hai (class field arrow ise fix karta hai). Puzzle 3 mein object par arrow dikhta hai.</li>\n</ul>"
      }
    },
    {
      id: "nullish-vs-or-optional-chaining",
      depth: "detailed",
      q: "What is the difference between ?? and ||, and what does ?. do?",
      answer: "?? falls back only for null or undefined; || falls back for any falsy value, including 0, empty string and false. ?. returns undefined instead of throwing when the left side is null or undefined.",
      meaning: {
        hi: "?? सिर्फ़ null या undefined पर fallback देता है; || किसी भी falsy value पर, यानी 0, empty string और false पर भी। ?. में बाईं तरफ़ null या undefined हो तो error की जगह undefined मिलता है।",
        hg: "?? sirf null ya undefined par fallback deta hai; || kisi bhi falsy value par, yaani 0, empty string aur false par bhi. ?. mein baayin taraf null ya undefined ho to error ki jagah undefined milta hai."
      },
      explain: {
        en: "<ul>\n<li>Bug pattern: <code>const retries = options.retries || 3</code> turns a deliberate <code>0</code> into <code>3</code>. Write <code>options.retries ?? 3</code>.</li>\n<li><code>?.</code> short-circuits the rest of the chain: <code>user?.address?.city</code>, <code>list?.[0]</code>, <code>callback?.()</code>. It checks only the part before it; it does not hide a wrong property name.</li>\n<li>Assignment forms: <code>a ||= b</code> (assign if falsy), <code>a ??= b</code> (assign if null/undefined).</li>\n<li>Mixing <code>??</code> with <code>||</code> or <code>&amp;&amp;</code> without parentheses is a syntax error, on purpose.</li>\n<li>C# bridge: the same operators exist in C#, but C#'s <code>??</code> and <code>?.</code> only know <code>null</code>; in JavaScript <code>undefined</code> counts too. Puzzle 6 shows every case.</li>\n</ul>",
        hi: "<ul>\n<li>Bug pattern: <code>const retries = options.retries || 3</code> जान-बूझकर रखे <code>0</code> को <code>3</code> बना देता है। <code>options.retries ?? 3</code> लिखो।</li>\n<li><code>?.</code> chain के बाक़ी हिस्से को short-circuit कर देता है: <code>user?.address?.city</code>, <code>list?.[0]</code>, <code>callback?.()</code>। यह सिर्फ़ अपने पहले वाले हिस्से को check करता है; ग़लत property का नाम नहीं छुपाता।</li>\n<li>Assignment forms: <code>a ||= b</code> (falsy हो तो assign), <code>a ??= b</code> (null/undefined हो तो assign)।</li>\n<li>Parentheses के बिना <code>??</code> को <code>||</code> या <code>&amp;&amp;</code> के साथ mix करना जान-बूझकर syntax error है।</li>\n<li>C# bridge: वही operators C# में भी हैं, पर C# के <code>??</code> और <code>?.</code> सिर्फ़ <code>null</code> जानते हैं; JavaScript में <code>undefined</code> भी गिना जाता है। Puzzle 6 में हर case दिखता है।</li>\n</ul>",
        hg: "<ul>\n<li>Bug pattern: <code>const retries = options.retries || 3</code> jaan-boojhkar rakhe <code>0</code> ko <code>3</code> bana deta hai. <code>options.retries ?? 3</code> likho.</li>\n<li><code>?.</code> chain ke baaki hisse ko short-circuit kar deta hai: <code>user?.address?.city</code>, <code>list?.[0]</code>, <code>callback?.()</code>. Yeh sirf apne pehle wale hisse ko check karta hai; galat property ka naam nahi chhupata.</li>\n<li>Assignment forms: <code>a ||= b</code> (falsy ho to assign), <code>a ??= b</code> (null/undefined ho to assign).</li>\n<li>Parentheses ke bina <code>??</code> ko <code>||</code> ya <code>&amp;&amp;</code> ke saath mix karna jaan-boojhkar syntax error hai.</li>\n<li>C# bridge: wahi operators C# mein bhi hain, par C# ke <code>??</code> aur <code>?.</code> sirf <code>null</code> jaante hain; JavaScript mein <code>undefined</code> bhi ginta hai. Puzzle 6 mein har case dikhta hai.</li>\n</ul>"
      }
    },
    {
      id: "truthy-falsy",
      depth: "detailed",
      q: "What are truthy and falsy values in JavaScript?",
      answer: "Falsy: false, 0, -0, 0n, empty string, null, undefined and NaN. Everything else is truthy, including empty arrays, empty objects and the string \"false\".",
      meaning: {
        hi: "Falsy: false, 0, -0, 0n, empty string, null, undefined और NaN। बाक़ी सब truthy है, जिसमें empty arrays, empty objects और string \"false\" भी हैं।",
        hg: "Falsy: false, 0, -0, 0n, empty string, null, undefined aur NaN. Baaki sab truthy hai, jisme empty arrays, empty objects aur string \"false\" bhi hain."
      },
      explain: {
        en: "<ul>\n<li>Conditions like <code>if (x)</code>, <code>!x</code>, <code>x &amp;&amp; y</code> and <code>x || y</code> use truthiness. That is convenient but hides the difference between \"missing\" and \"zero\".</li>\n<li>Gotchas: <code>if (items)</code> is true for an empty array (check <code>items.length</code>); <code>if (count)</code> is false for <code>0</code>; <code>Boolean(\"false\")</code> is <code>true</code>.</li>\n<li>Browsers also have one odd falsy object, <code>document.all</code>; you will rarely meet it.</li>\n<li>Code-review habit: when a value can legitimately be <code>0</code>, <code>\"\"</code> or <code>false</code>, compare explicitly (<code>x !== undefined</code>) or use <code>??</code>.</li>\n<li>C# bridge: C# conditions accept only <code>bool</code>, so <code>if (count)</code> does not compile.</li>\n</ul>",
        hi: "<ul>\n<li><code>if (x)</code>, <code>!x</code>, <code>x &amp;&amp; y</code> और <code>x || y</code> जैसी conditions truthiness use करती हैं। यह convenient है पर \"missing\" और \"zero\" का फ़र्क़ छुपा देता है।</li>\n<li>Gotchas: empty array के लिए <code>if (items)</code> true है (<code>items.length</code> check करो); <code>0</code> के लिए <code>if (count)</code> false है; <code>Boolean(\"false\")</code> <code>true</code> है।</li>\n<li>Browsers में एक अजीब falsy object भी है, <code>document.all</code>; वह तुम्हें कम ही मिलेगा।</li>\n<li>Code-review की आदत: जब value सही तरह से <code>0</code>, <code>\"\"</code> या <code>false</code> हो सकती हो, तो explicitly compare करो (<code>x !== undefined</code>) या <code>??</code> use करो।</li>\n<li>C# bridge: C# conditions सिर्फ़ <code>bool</code> लेती हैं, इसलिए <code>if (count)</code> compile नहीं होता।</li>\n</ul>",
        hg: "<ul>\n<li><code>if (x)</code>, <code>!x</code>, <code>x &amp;&amp; y</code> aur <code>x || y</code> jaisi conditions truthiness use karti hain. Yeh convenient hai par \"missing\" aur \"zero\" ka farq chhupa deta hai.</li>\n<li>Gotchas: empty array ke liye <code>if (items)</code> true hai (<code>items.length</code> check karo); <code>0</code> ke liye <code>if (count)</code> false hai; <code>Boolean(\"false\")</code> <code>true</code> hai.</li>\n<li>Browsers mein ek ajeeb falsy object bhi hai, <code>document.all</code>; woh tumhein kam hi milega.</li>\n<li>Code-review ki aadat: jab value sahi tarah se <code>0</code>, <code>\"\"</code> ya <code>false</code> ho sakti ho, to explicitly compare karo (<code>x !== undefined</code>) ya <code>??</code> use karo.</li>\n<li>C# bridge: C# conditions sirf <code>bool</code> leti hain, isliye <code>if (count)</code> compile nahi hota.</li>\n</ul>"
      }
    },
    {
      id: "fetch-http-errors",
      depth: "detailed",
      q: "How do you handle errors with fetch? Does a 404 reject the promise?",
      answer: "No. fetch rejects only on network failure or abort. A 404 or 500 resolves, so check response.ok before parsing and throw your own error.",
      meaning: {
        hi: "नहीं। fetch सिर्फ़ network failure या abort पर reject होता है। 404 या 500 पर वह resolve होता है, इसलिए parse करने से पहले response.ok check करो और अपना error फेंको।",
        hg: "Nahi. fetch sirf network failure ya abort par reject hota hai. 404 ya 500 par woh resolve hota hai, isliye parse karne se pehle response.ok check karo aur apna error phenko."
      },
      explain: {
        en: "<ul>\n<li>Pattern: <code>const res = await fetch(url); if (!res.ok) throw new Error(...); const data = await res.json();</code> and wrap the call in <code>try/catch</code> for network errors and bad JSON (<code>SyntaxError</code>).</li>\n<li>Read the body once: <code>res.json()</code> or <code>res.text()</code>, not both (use <code>res.clone()</code> if you need two reads). For an ASP.NET Core <code>ProblemDetails</code> body (Day 13), parse it to show a useful message.</li>\n<li>Timeouts and cancel: <code>AbortSignal.timeout(ms)</code> or an <code>AbortController</code>; user navigation or a new search should cancel the old request.</li>\n<li>Browser extras: cross-origin calls need CORS (Day 13); cookies are sent cross-origin only with <code>credentials: \"include\"</code> and matching server settings.</li>\n<li>TL angle: put this in one small API client function so every screen gets the same error handling, instead of repeating it. Compare with <code>HttpClient</code>: <code>GetAsync</code>/<code>SendAsync</code> return 4xx/5xx responses and you call <code>EnsureSuccessStatusCode()</code>, while helpers such as <code>GetStringAsync</code> and <code>GetFromJsonAsync</code> throw <code>HttpRequestException</code> for you.</li>\n</ul>",
        hi: "<ul>\n<li>Pattern: <code>const res = await fetch(url); if (!res.ok) throw new Error(...); const data = await res.json();</code> और network errors व ख़राब JSON (<code>SyntaxError</code>) के लिए call को <code>try/catch</code> में रखो।</li>\n<li>Body एक बार पढ़ो: <code>res.json()</code> या <code>res.text()</code>, दोनों नहीं (दो बार पढ़ना हो तो <code>res.clone()</code>)। ASP.NET Core <code>ProblemDetails</code> body (Day 13) के लिए उसे parse करके काम का message दिखाओ।</li>\n<li>Timeouts और cancel: <code>AbortSignal.timeout(ms)</code> या <code>AbortController</code>; user का navigate करना या नई search पुरानी request को cancel करे।</li>\n<li>Browser extras: cross-origin calls के लिए CORS चाहिए (Day 13); cookies cross-origin तभी जाती हैं जब <code>credentials: \"include\"</code> हो और server settings मेल खाएँ।</li>\n<li>TL angle: यह एक छोटे API client function में रखो ताकि हर screen को वही error handling मिले, दोहराने की जगह। <code>HttpClient</code> से compare करो: <code>GetAsync</code>/<code>SendAsync</code> 4xx/5xx responses लौटाते हैं और तुम <code>EnsureSuccessStatusCode()</code> call करते हो, जबकि <code>GetStringAsync</code> और <code>GetFromJsonAsync</code> जैसे helpers ख़ुद <code>HttpRequestException</code> फेंकते हैं।</li>\n</ul>",
        hg: "<ul>\n<li>Pattern: <code>const res = await fetch(url); if (!res.ok) throw new Error(...); const data = await res.json();</code> aur network errors va kharab JSON (<code>SyntaxError</code>) ke liye call ko <code>try/catch</code> mein rakho.</li>\n<li>Body ek baar padho: <code>res.json()</code> ya <code>res.text()</code>, dono nahi (do baar padhna ho to <code>res.clone()</code>). ASP.NET Core <code>ProblemDetails</code> body (Day 13) ke liye use parse karke kaam ka message dikhao.</li>\n<li>Timeouts aur cancel: <code>AbortSignal.timeout(ms)</code> ya <code>AbortController</code>; user ka navigate karna ya nayi search purani request ko cancel kare.</li>\n<li>Browser extras: cross-origin calls ke liye CORS chahiye (Day 13); cookies cross-origin tabhi jaati hain jab <code>credentials: \"include\"</code> ho aur server settings match karein.</li>\n<li>TL angle: yeh ek chhote API client function mein rakho taaki har screen ko wahi error handling mile, dohrane ki jagah. <code>HttpClient</code> se compare karo: <code>GetAsync</code>/<code>SendAsync</code> 4xx/5xx responses lautate hain aur tum <code>EnsureSuccessStatusCode()</code> call karte ho, jabki <code>GetStringAsync</code> aur <code>GetFromJsonAsync</code> jaise helpers khud <code>HttpRequestException</code> phenkte hain.</li>\n</ul>"
      }
    },
    {
      id: "esm-vs-commonjs",
      depth: "detailed",
      q: "What is the difference between ES modules and CommonJS?",
      answer: "ES modules use static import/export, are strict, support top-level await and work in browsers and modern Node. CommonJS uses require/module.exports, loads synchronously and is mainly legacy Node.",
      meaning: {
        hi: "ES modules static import/export use करते हैं, strict हैं, top-level await support करते हैं और browsers व modern Node में चलते हैं। CommonJS require/module.exports use करता है, synchronously load होता है और मुख्य रूप से legacy Node है।",
        hg: "ES modules static import/export use karte hain, strict hain, top-level await support karte hain aur browsers va modern Node mein chalte hain. CommonJS require/module.exports use karta hai, synchronously load hota hai aur zyaadatar legacy Node hai."
      },
      explain: {
        en: "<ul>\n<li>Because <code>import</code> is static, bundlers can drop unused exports (tree shaking). <code>require</code> is a normal function call, so it can sit inside an <code>if</code>; ESM uses dynamic <code>import()</code> for that.</li>\n<li>In Node, a file is ESM when it ends in <code>.mjs</code> or the nearest <code>package.json</code> has <code>\"type\": \"module\"</code>; otherwise older Node treats it as CommonJS (newer Node, since 22.7, can detect import syntax in a <code>.js</code> file with no <code>\"type\"</code> and run it as ESM, and since 22.12 <code>require()</code> can load ESM; use <code>.cjs</code> or <code>\"type\": \"commonjs\"</code> to be explicit). Mixing the two causes the classic \"Cannot use import statement outside a module\" and \"require is not defined\" errors.</li>\n<li>Browsers load a module with <code>&lt;script type=\"module\"&gt;</code>; it is deferred and strict by default.</li>\n<li>Prefer one style per package. New code: ESM. Keep CommonJS only where a tool or old dependency needs it.</li>\n<li>C# bridge: a bit like <code>using</code> plus <code>public</code>/<code>internal</code> visibility: only what is exported is visible to other files.</li>\n</ul>",
        hi: "<ul>\n<li>क्योंकि <code>import</code> static है, bundlers unused exports हटा सकते हैं (tree shaking)। <code>require</code> सामान्य function call है, इसलिए <code>if</code> के अंदर आ सकता है; ESM इसके लिए dynamic <code>import()</code> use करता है।</li>\n<li>Node में file तब ESM होती है जब वह <code>.mjs</code> पर ख़त्म हो या सबसे पास की <code>package.json</code> में <code>\"type\": \"module\"</code> हो; वरना पुराना Node उसे CommonJS मानता है (नया Node, 22.7 से, बिना <code>\"type\"</code> वाली <code>.js</code> file में import syntax पहचानकर उसे ESM चला सकता है, और 22.12 से <code>require()</code> ESM load कर सकता है; साफ़ रखने के लिए <code>.cjs</code> या <code>\"type\": \"commonjs\"</code> use करो)। दोनों को mix करने से classic errors आते हैं \"Cannot use import statement outside a module\" और \"require is not defined\"।</li>\n<li>Browsers module को <code>&lt;script type=\"module\"&gt;</code> से load करते हैं; वह deferred और default में strict होता है।</li>\n<li>एक package में एक ही style prefer करो। नया code: ESM। CommonJS वहीं रखो जहाँ कोई tool या पुरानी dependency माँगे।</li>\n<li>C# bridge: कुछ-कुछ <code>using</code> और <code>public</code>/<code>internal</code> visibility जैसा: दूसरी files को सिर्फ़ वही दिखता है जो export हुआ हो।</li>\n</ul>",
        hg: "<ul>\n<li>Kyonki <code>import</code> static hai, bundlers unused exports hata sakte hain (tree shaking). <code>require</code> saamaanya function call hai, isliye <code>if</code> ke andar aa sakta hai; ESM iske liye dynamic <code>import()</code> use karta hai.</li>\n<li>Node mein file tab ESM hoti hai jab woh <code>.mjs</code> par khatam ho ya sabse paas ki <code>package.json</code> mein <code>\"type\": \"module\"</code> ho; warna purana Node use CommonJS maanta hai (naya Node, 22.7 se, bina <code>\"type\"</code> wali <code>.js</code> file mein import syntax pehchankar use ESM chala sakta hai, aur 22.12 se <code>require()</code> ESM load kar sakta hai; saaf rakhne ke liye <code>.cjs</code> ya <code>\"type\": \"commonjs\"</code> use karo). Dono ko mix karne se classic errors aate hain \"Cannot use import statement outside a module\" aur \"require is not defined\".</li>\n<li>Browsers module ko <code>&lt;script type=\"module\"&gt;</code> se load karte hain; woh deferred aur default mein strict hota hai.</li>\n<li>Ek package mein ek hi style prefer karo. Naya code: ESM. CommonJS wahin rakho jahan koi tool ya purani dependency maange.</li>\n<li>C# bridge: kuch-kuch <code>using</code> aur <code>public</code>/<code>internal</code> visibility jaisa: doosri files ko sirf wahi dikhta hai jo export hua ho.</li>\n</ul>"
      }
    },
    {
      id: "shallow-vs-deep-copy",
      depth: "detailed",
      q: "How do spread and destructuring work, and why can a copied object still change the original?",
      answer: "Spread copies only the top level; nested objects stay shared. Destructuring pulls fields out into variables. Use structuredClone for a deep copy of plain data, or copy the nested parts you change.",
      meaning: {
        hi: "Spread सिर्फ़ ऊपर का level copy करता है; nested objects shared रहते हैं। Destructuring fields को variables में निकालता है। Plain data की deep copy के लिए structuredClone use करो, या जो nested हिस्से बदलने हैं उन्हें copy करो।",
        hg: "Spread sirf upar ka level copy karta hai; nested objects shared rehte hain. Destructuring fields ko variables mein nikalta hai. Plain data ki deep copy ke liye structuredClone use karo, ya jo nested hisse badalne hain unhein copy karo."
      },
      explain: {
        en: "<ul>\n<li>Immutable update of nested state: <code>{ ...order, customer: { ...order.customer, name: \"Ravi\" } }</code>. Each level you change is copied; the rest is shared safely.</li>\n<li><code>structuredClone</code> handles plain objects, arrays, dates, maps and sets, but throws on functions and does not keep class prototypes. Avoid <code>JSON.parse(JSON.stringify(x))</code>: it drops <code>undefined</code>, functions and turns <code>Date</code> into a string.</li>\n<li>Destructuring: <code>const { id, customer: { name } } = order</code>, defaults <code>{ page = 1 }</code>, renaming <code>{ id: orderId }</code>, rest <code>[first, ...rest]</code>. Destructuring a missing nested object throws, so combine it with defaults.</li>\n<li>Why a TL cares: shared mutable state is a top source of \"it changed by itself\" bugs, and React state (Day 24) must be updated by copying, not mutating.</li>\n<li>C# bridge: like a <code>record</code> <code>with</code> expression, which is also a shallow copy.</li>\n</ul>",
        hi: "<ul>\n<li>Nested state का immutable update: <code>{ ...order, customer: { ...order.customer, name: \"Ravi\" } }</code>। जो-जो level बदलना है वह copy होता है; बाक़ी safely shared रहता है।</li>\n<li><code>structuredClone</code> plain objects, arrays, dates, maps और sets संभालता है, पर functions पर throw करता है और class prototypes नहीं रखता। <code>JSON.parse(JSON.stringify(x))</code> से बचो: यह <code>undefined</code>, functions गिरा देता है और <code>Date</code> को string बना देता है।</li>\n<li>Destructuring: <code>const { id, customer: { name } } = order</code>, defaults <code>{ page = 1 }</code>, renaming <code>{ id: orderId }</code>, rest <code>[first, ...rest]</code>। Missing nested object को destructure करने पर throw होता है, इसलिए defaults के साथ use करो।</li>\n<li>TL को क्यों परवाह: shared mutable state \"अपने आप बदल गया\" वाले bugs का बड़ा source है, और React state (Day 24) को mutate नहीं, copy करके update करना होता है।</li>\n<li>C# bridge: <code>record</code> के <code>with</code> expression जैसा, जो भी shallow copy है।</li>\n</ul>",
        hg: "<ul>\n<li>Nested state ka immutable update: <code>{ ...order, customer: { ...order.customer, name: \"Ravi\" } }</code>. Jo-jo level badalna hai woh copy hota hai; baaki safely shared rehta hai.</li>\n<li><code>structuredClone</code> plain objects, arrays, dates, maps aur sets sambhalta hai, par functions par throw karta hai aur class prototypes nahi rakhta. <code>JSON.parse(JSON.stringify(x))</code> se bacho: yeh <code>undefined</code>, functions gira deta hai aur <code>Date</code> ko string bana deta hai.</li>\n<li>Destructuring: <code>const { id, customer: { name } } = order</code>, defaults <code>{ page = 1 }</code>, renaming <code>{ id: orderId }</code>, rest <code>[first, ...rest]</code>. Missing nested object ko destructure karne par throw hota hai, isliye defaults ke saath use karo.</li>\n<li>TL ko kyon parwah: shared mutable state \"apne aap badal gaya\" wale bugs ka bada source hai, aur React state (Day 24) ko mutate nahi, copy karke update karna hota hai.</li>\n<li>C# bridge: <code>record</code> ke <code>with</code> expression jaisa, jo bhi shallow copy hai.</li>\n</ul>"
      }
    },
    {
      id: "array-methods-vs-linq",
      depth: "detailed",
      q: "How do map, filter and reduce compare with LINQ?",
      answer: "map is Select, filter is Where, reduce is Aggregate. Unlike LINQ they run eagerly and create a new array at each step, so there is no deferred execution.",
      meaning: {
        hi: "map = Select, filter = Where, reduce = Aggregate। LINQ से उलट ये eagerly चलते हैं और हर step पर नया array बनाते हैं, यानी deferred execution नहीं है।",
        hg: "map = Select, filter = Where, reduce = Aggregate. LINQ se ulta yeh eagerly chalte hain aur har step par naya array banate hain, yaani deferred execution nahi hai."
      },
      explain: {
        en: "<ul>\n<li>Other matches: <code>some</code>=<code>Any</code>, <code>every</code>=<code>All</code>, <code>find</code>=<code>FirstOrDefault</code>, <code>flatMap</code>=<code>SelectMany</code>, <code>slice</code>=<code>Skip/Take</code>, <code>includes</code>=<code>Contains</code>. Grouping is not built into arrays; use a loop or <code>reduce</code> (newer engines also have <code>Object.groupBy</code>, check your target browsers).</li>\n<li>Eager means a chain of <code>filter().map()</code> builds a temporary array after each step. For small lists that is fine. Lazy sequences exist in JavaScript as generators and iterator helpers, but they are not the everyday tool.</li>\n<li>Traps: <code>sort()</code> sorts strings by default and mutates the array (use <code>(a, b) =&gt; a - b</code>, and <code>toSorted</code> in newer engines); <code>reduce</code> on an empty array without an initial value throws; <code>parseInt</code> inside <code>map</code> misbehaves because <code>map</code> passes the index as the second argument.</li>\n<li>Follow-up: \"Why does the order of <code>filter</code> and <code>map</code> matter?\" Filter first to do less work, same as LINQ <code>Where</code> before <code>Select</code> (Day 4).</li>\n</ul>",
        hi: "<ul>\n<li>और मेल: <code>some</code>=<code>Any</code>, <code>every</code>=<code>All</code>, <code>find</code>=<code>FirstOrDefault</code>, <code>flatMap</code>=<code>SelectMany</code>, <code>slice</code>=<code>Skip/Take</code>, <code>includes</code>=<code>Contains</code>। Grouping arrays में built-in नहीं है; loop या <code>reduce</code> use करो (नए engines में <code>Object.groupBy</code> भी है, अपने target browsers check करो)।</li>\n<li>Eager का मतलब है कि <code>filter().map()</code> की chain हर step के बाद temporary array बनाती है। छोटी lists के लिए ठीक है। Lazy sequences JavaScript में generators और iterator helpers से मिलती हैं, पर वे रोज़ का tool नहीं हैं।</li>\n<li>Traps: <code>sort()</code> default में strings की तरह sort करता है और array बदल देता है (<code>(a, b) =&gt; a - b</code> use करो, और नए engines में <code>toSorted</code>); initial value के बिना empty array पर <code>reduce</code> throw करता है; <code>map</code> के अंदर <code>parseInt</code> बिगड़ता है क्योंकि <code>map</code> दूसरे argument में index देता है।</li>\n<li>Follow-up: \"<code>filter</code> और <code>map</code> का order क्यों मायने रखता है?\" पहले filter करो ताकि कम काम हो, LINQ में <code>Select</code> से पहले <code>Where</code> की तरह (Day 4)।</li>\n</ul>",
        hg: "<ul>\n<li>Aur mel: <code>some</code>=<code>Any</code>, <code>every</code>=<code>All</code>, <code>find</code>=<code>FirstOrDefault</code>, <code>flatMap</code>=<code>SelectMany</code>, <code>slice</code>=<code>Skip/Take</code>, <code>includes</code>=<code>Contains</code>. Grouping arrays mein built-in nahi hai; loop ya <code>reduce</code> use karo (naye engines mein <code>Object.groupBy</code> bhi hai, apne target browsers check karo).</li>\n<li>Eager ka matlab hai ki <code>filter().map()</code> ki chain har step ke baad temporary array banati hai. Chhoti lists ke liye theek hai. Lazy sequences JavaScript mein generators aur iterator helpers se milti hain, par woh roz ka tool nahi hain.</li>\n<li>Traps: <code>sort()</code> default mein strings ki tarah sort karta hai aur array badal deta hai (<code>(a, b) =&gt; a - b</code> use karo, aur naye engines mein <code>toSorted</code>); initial value ke bina empty array par <code>reduce</code> throw karta hai; <code>map</code> ke andar <code>parseInt</code> bigadta hai kyonki <code>map</code> doosre argument mein index deta hai.</li>\n<li>Follow-up: \"<code>filter</code> aur <code>map</code> ka order kyon maayne rakhta hai?\" Pehle filter karo taaki kam kaam ho, LINQ mein <code>Select</code> se pehle <code>Where</code> ki tarah (Day 4).</li>\n</ul>"
      }
    },
    {
      id: "jquery-to-modern-dom",
      depth: "detailed",
      q: "We have a jQuery codebase. How would you move to modern JavaScript?",
      answer: "Do it page by page: replace selectors, events, classes and Ajax with querySelector, addEventListener, classList and fetch, keep jQuery only where plugins need it, and add tests and linting first.",
      meaning: {
        hi: "Page-by-page करो: selectors, events, classes और Ajax को querySelector, addEventListener, classList और fetch से बदलो, jQuery सिर्फ़ वहाँ रखो जहाँ plugins को चाहिए, और पहले tests व linting जोड़ो।",
        hg: "Page-by-page karo: selectors, events, classes aur Ajax ko querySelector, addEventListener, classList aur fetch se badlo, jQuery sirf wahan rakho jahan plugins ko chahiye, aur pehle tests va linting jodo."
      },
      explain: {
        en: "<ul>\n<li>Plan: (1) add ESLint and a few end-to-end smoke tests on key flows, (2) stop writing <i>new</i> jQuery, (3) convert a page when you touch it, (4) replace plugins one by one (date picker, grid), (5) remove jQuery when the last use is gone. This is the same incremental idea as the strangler approach on Day 22.</li>\n<li>Differences that bite: <code>$(sel)</code> always returns a collection, <code>querySelector</code> returns one element or <code>null</code> (check it); <code>querySelectorAll</code> returns a <code>NodeList</code>, so use <code>forEach</code> or spread it; jQuery's chaining and implicit looping disappear.</li>\n<li>Event delegation uses <code>event.target.closest(selector)</code>; <code>$.ajax</code> becomes <code>fetch</code> with your own <code>res.ok</code> check; <code>$(document).ready</code> becomes <code>DOMContentLoaded</code> or a deferred script.</li>\n<li>Honest trade-off: jQuery is still supported and works. Migrate for fewer dependencies, smaller pages and easier hiring, not because jQuery is \"broken\". If a screen is stable and rarely changes, leave it.</li>\n<li>Next step: for big interactive screens, move to a component framework (React on Day 24) rather than hand-written DOM code.</li>\n</ul>",
        hi: "<ul>\n<li>Plan: (1) ESLint और key flows पर कुछ end-to-end smoke tests जोड़ो, (2) <i>नया</i> jQuery लिखना बंद करो, (3) page को छूते वक़्त convert करो, (4) plugins एक-एक करके बदलो (date picker, grid), (5) आख़िरी use जाने पर jQuery हटाओ। यह वही incremental idea है जो Day 22 के strangler approach में था।</li>\n<li>जो फ़र्क़ चोट देते हैं: <code>$(sel)</code> हमेशा collection लौटाता है, <code>querySelector</code> एक element या <code>null</code> लौटाता है (check करो); <code>querySelectorAll</code> <code>NodeList</code> लौटाता है, इसलिए <code>forEach</code> या spread use करो; jQuery की chaining और implicit looping चली जाती है।</li>\n<li>Event delegation <code>event.target.closest(selector)</code> से होती है; <code>$.ajax</code> बनता है <code>fetch</code> अपने <code>res.ok</code> check के साथ; <code>$(document).ready</code> बनता है <code>DOMContentLoaded</code> या deferred script।</li>\n<li>सच्चा trade-off: jQuery अब भी supported है और चलता है। कम dependencies, छोटे pages और आसान hiring के लिए migrate करो, इसलिए नहीं कि jQuery \"टूटा\" है। अगर कोई screen stable है और कम बदलती है तो छोड़ दो।</li>\n<li>अगला step: बड़ी interactive screens के लिए हाथ से लिखे DOM code की जगह component framework (Day 24 की React) पर जाओ।</li>\n</ul>",
        hg: "<ul>\n<li>Plan: (1) ESLint aur key flows par kuch end-to-end smoke tests jodo, (2) <i>naya</i> jQuery likhna band karo, (3) page ko chhute waqt convert karo, (4) plugins ek-ek karke badlo (date picker, grid), (5) aakhri use jaane par jQuery hatao. Yeh wahi incremental idea hai jo Day 22 ke strangler approach mein tha.</li>\n<li>Jo farq chot dete hain: <code>$(sel)</code> hamesha collection lautata hai, <code>querySelector</code> ek element ya <code>null</code> lautata hai (check karo); <code>querySelectorAll</code> <code>NodeList</code> lautata hai, isliye <code>forEach</code> ya spread use karo; jQuery ki chaining aur implicit looping chali jaati hai.</li>\n<li>Event delegation <code>event.target.closest(selector)</code> se hoti hai; <code>$.ajax</code> banta hai <code>fetch</code> apne <code>res.ok</code> check ke saath; <code>$(document).ready</code> banta hai <code>DOMContentLoaded</code> ya deferred script.</li>\n<li>Sachcha trade-off: jQuery ab bhi supported hai aur chalta hai. Kam dependencies, chhote pages aur aasaan hiring ke liye migrate karo, isliye nahi ki jQuery \"toota\" hai. Agar koi screen stable hai aur kam badalti hai to chhod do.</li>\n<li>Agla step: badi interactive screens ke liye haath se likhe DOM code ki jagah component framework (Day 24 ki React) par jao.</li>\n</ul>"
      }
    },
    {
      id: "strict-mode",
      depth: "detailed",
      q: "What is strict mode in JavaScript?",
      answer: "Strict mode turns some silent mistakes into errors, for example assigning to an undeclared variable, and this is undefined in plain function calls. ES modules and class bodies are strict automatically.",
      meaning: {
        hi: "Strict mode कुछ चुपचाप वाली ग़लतियों को errors बना देता है, जैसे undeclared variable को assign करना, और plain function call में this undefined होता है। ES modules और class bodies अपने आप strict होते हैं।",
        hg: "Strict mode kuch chupchaap wali galatiyon ko errors bana deta hai, jaise undeclared variable ko assign karna, aur plain function call mein this undefined hota hai. ES modules aur class bodies apne aap strict hote hain."
      },
      explain: {
        en: "<ul>\n<li>Switch on with the string <code>\"use strict\"</code> at the top of a script or function. In a classic script without it, <code>count = 5</code> on an undeclared name silently creates a global; in strict mode it throws <code>ReferenceError</code>.</li>\n<li>Other effects: duplicate parameter names are an error, writing to a read-only property throws instead of being ignored, and <code>this</code> in a plain call is <code>undefined</code> rather than the global object.</li>\n<li>Practical advice: you rarely type <code>\"use strict\"</code> today because modules, classes and most bundler or TypeScript setups are already strict. Seeing it in a legacy file usually means the file is not a module (compiled TypeScript or Babel output can also emit it).</li>\n<li>Follow-up: \"Why do you care?\" It makes accidental globals and lost-<code>this</code> bugs fail loudly, which is cheaper to find than a silent wrong value.</li>\n</ul>",
        hi: "<ul>\n<li>Script या function के ऊपर string <code>\"use strict\"</code> से चालू होता है। उसके बिना classic script में undeclared नाम पर <code>count = 5</code> चुपचाप global बना देता है; strict mode में <code>ReferenceError</code> आता है।</li>\n<li>और असर: duplicate parameter names error हैं, read-only property में लिखना ignore होने की जगह throw करता है, और plain call में <code>this</code> global object की जगह <code>undefined</code> होता है।</li>\n<li>Practical सलाह: आज <code>\"use strict\"</code> कम ही type करते हैं क्योंकि modules, classes और ज़्यादातर bundler या TypeScript setups पहले से strict हैं। Legacy file में यह दिखे तो आम तौर पर मतलब वह file module नहीं है (compiled TypeScript या Babel output भी इसे लिख सकता है)।</li>\n<li>Follow-up: \"तुम्हें परवाह क्यों?\" इससे accidental globals और खोए हुए <code>this</code> वाले bugs loud होकर fail होते हैं, जो चुपचाप ग़लत value से सस्ते में मिलते हैं।</li>\n</ul>",
        hg: "<ul>\n<li>Script ya function ke upar string <code>\"use strict\"</code> se chaalu hota hai. Uske bina classic script mein undeclared naam par <code>count = 5</code> chupchaap global bana deta hai; strict mode mein <code>ReferenceError</code> aata hai.</li>\n<li>Aur asar: duplicate parameter names error hain, read-only property mein likhna ignore hone ki jagah throw karta hai, aur plain call mein <code>this</code> global object ki jagah <code>undefined</code> hota hai.</li>\n<li>Practical salaah: aaj <code>\"use strict\"</code> kam hi type karte hain kyonki modules, classes aur zyaadatar bundler ya TypeScript setups pehle se strict hain. Legacy file mein yeh dikhe to aam taur par matlab woh file module nahi hai (compiled TypeScript ya Babel output bhi ise likh sakta hai).</li>\n<li>Follow-up: \"Tumhein parwah kyon?\" Isse accidental globals aur khoye hue <code>this</code> wale bugs loud hokar fail hote hain, jo chupchaap galat value se sasste mein milte hain.</li>\n</ul>"
      }
    },
    {
      id: "typescript-adoption",
      depth: "detailed",
      q: "As a Tech Lead, would you adopt TypeScript on a JavaScript team?",
      answer: "Usually yes for a shared, long-lived codebase: types catch mistakes before running and help refactoring. Adopt gradually and keep tests; types do not replace runtime validation of API data.",
      meaning: {
        hi: "shared, लंबे चलने वाले codebase के लिए आम तौर पर हाँ: types चलाने से पहले ग़लतियाँ पकड़ते हैं और refactoring में मदद करते हैं। धीरे-धीरे अपनाओ और tests रखो; types API data की runtime validation की जगह नहीं लेते।",
        hg: "Shared, lambe chalne wale codebase ke liye aam taur par haan: types chalane se pehle galatiyan pakadte hain aur refactoring mein madad karte hain. Dheere-dheere apnao aur tests rakho; types API data ki runtime validation ki jagah nahi lete."
      },
      explain: {
        en: "<ul>\n<li>What it is: a typed superset of JavaScript that is checked at build time and then <b>erased</b>; the browser or Node runs plain JavaScript. A C# developer will feel at home with interfaces, generics and <code>strict</code> null checks.</li>\n<li>Benefits: safer refactors, editor autocomplete, API contracts between front end and back end, fewer \"undefined is not a function\" bugs. Costs: build step or tool setup, learning curve, sometimes complex types, and a need to type third-party libraries.</li>\n<li>Gradual adoption: turn on <code>allowJs</code>, convert files as you touch them, start with <code>strict</code> for new code, and use shared types or generated clients from the OpenAPI document of your Web API (Day 13).</li>\n<li>Limits to say aloud: types disappear at runtime, so data from <code>fetch</code> still needs checks or a validation library; <code>any</code> and casts remove the safety.</li>\n<li>Next: Day 24 shows React components, which are usually written as TSX.</li>\n</ul>",
        hi: "<ul>\n<li>क्या है: JavaScript का typed superset जो build time पर check होता है और फिर <b>erase</b> हो जाता है; browser या Node plain JavaScript चलाते हैं। C# developer को interfaces, generics और <code>strict</code> null checks से अपनापन लगेगा।</li>\n<li>Benefits: safer refactors, editor autocomplete, front end और back end के बीच API contracts, कम \"undefined is not a function\" bugs। Costs: build step या tool setup, learning curve, कभी-कभी complex types, और third-party libraries के types की ज़रूरत।</li>\n<li>Gradual adoption: <code>allowJs</code> चालू करो, files को छूते वक़्त convert करो, नए code के लिए <code>strict</code> से शुरू करो, और अपने Web API के OpenAPI document से shared types या generated clients use करो (Day 13)।</li>\n<li>जो limits ज़ोर से बोलनी हैं: types runtime पर ग़ायब हो जाते हैं, इसलिए <code>fetch</code> के data को फिर भी checks या validation library चाहिए; <code>any</code> और casts safety हटा देते हैं।</li>\n<li>आगे: Day 24 में React components दिखेंगे, जो आम तौर पर TSX में लिखे जाते हैं।</li>\n</ul>",
        hg: "<ul>\n<li>Kya hai: JavaScript ka typed superset jo build time par check hota hai aur phir <b>erase</b> ho jaata hai; browser ya Node plain JavaScript chalate hain. C# developer ko interfaces, generics aur <code>strict</code> null checks se apnapan lagega.</li>\n<li>Benefits: safer refactors, editor autocomplete, front end aur back end ke beech API contracts, kam \"undefined is not a function\" bugs. Costs: build step ya tool setup, learning curve, kabhi-kabhi complex types, aur third-party libraries ke types ki zaroorat.</li>\n<li>Gradual adoption: <code>allowJs</code> chaalu karo, files ko chhute waqt convert karo, naye code ke liye <code>strict</code> se shuru karo, aur apne Web API ke OpenAPI document se shared types ya generated clients use karo (Day 13).</li>\n<li>Jo limits zor se bolni hain: types runtime par ghayab ho jaate hain, isliye <code>fetch</code> ke data ko phir bhi checks ya validation library chahiye; <code>any</code> aur casts safety hata dete hain.</li>\n<li>Aage: Day 24 mein React components dikhenge, jo aam taur par TSX mein likhe jaate hain.</li>\n</ul>"
      },
      code: [
        {
          lang: "typescript",
          caption: {
            en: "TypeScript catches a wrong argument before the code runs (display-only; the types are erased at runtime)",
            hi: "TypeScript code चलने से पहले ग़लत argument पकड़ लेता है (सिर्फ़ दिखाने के लिए; types runtime पर erase हो जाते हैं)",
            hg: "TypeScript code chalne se pehle galat argument pakad leta hai (sirf dikhane ke liye; types runtime par erase ho jaate hain)"
          },
          check: "none",
          src: "type OrderLine = { id: number; total: number };\n\nfunction sumOrders(lines: OrderLine[]): number {\n  return lines.reduce((sum, line) => sum + line.total, 0);\n}\n\nsumOrders([{ id: 1, total: 250 }]); // ok\nsumOrders([{ id: 2, total: \"90\" }]); // compile error: string is not assignable to number\n\n// Data from the network is still unchecked at runtime:\nconst lines = (await (await fetch(\"/api/orders\")).json()) as OrderLine[]; // a cast, not a check"
        }
      ]
    },
    {
      id: "linting-tooling",
      depth: "detailed",
      q: "How do you keep JavaScript quality high across a team?",
      answer: "Automate it: ESLint for bug patterns, Prettier for formatting, tests, and TypeScript where it fits, all enforced in CI and pre-commit so reviews focus on design instead of style.",
      meaning: {
        hi: "Automate करो: bug patterns के लिए ESLint, formatting के लिए Prettier, tests, और जहाँ फिट हो वहाँ TypeScript, सब CI और pre-commit में enforce, ताकि reviews style की जगह design पर रहें।",
        hg: "Automate karo: bug patterns ke liye ESLint, formatting ke liye Prettier, tests, aur jahan fit ho wahan TypeScript, sab CI aur pre-commit mein enforce, taaki reviews style ki jagah design par rahein."
      },
      explain: {
        en: "<ul>\n<li><b>ESLint</b> finds suspicious code (<code>no-var</code>, <code>prefer-const</code>, <code>eqeqeq</code>, unused variables, and the rules for floating promises when you add type-aware rules). Modern ESLint uses the \"flat\" config file <code>eslint.config.js</code>.</li>\n<li><b>Prettier</b> (or a similar formatter) removes style debates; the linter then only reports real issues.</li>\n<li>Lock versions with a lock file, run <code>npm audit</code> or a dependency scanner in CI, and keep the dependency count small; the npm ecosystem has many tiny packages, so every addition is a supply-chain decision.</li>\n<li>Enforce in two places: a pre-commit hook for fast feedback, and CI as the real gate (hooks can be skipped).</li>\n<li>C# bridge: it is the same role as Roslyn analyzers and <code>.editorconfig</code> with warnings as errors (Day 21 covers CI pipelines).</li>\n</ul>",
        hi: "<ul>\n<li><b>ESLint</b> शक के लायक़ code पकड़ता है (<code>no-var</code>, <code>prefer-const</code>, <code>eqeqeq</code>, unused variables, और type-aware rules जोड़ने पर floating promises के rules)। Modern ESLint \"flat\" config file <code>eslint.config.js</code> use करता है।</li>\n<li><b>Prettier</b> (या वैसा formatter) style की बहस हटा देता है; फिर linter सिर्फ़ असली issues बताता है।</li>\n<li>Lock file से versions lock करो, CI में <code>npm audit</code> या dependency scanner चलाओ, और dependencies कम रखो; npm ecosystem में बहुत छोटे packages हैं, इसलिए हर addition एक supply-chain decision है।</li>\n<li>दो जगह enforce करो: तेज़ feedback के लिए pre-commit hook, और असली gate के रूप में CI (hooks skip हो सकते हैं)।</li>\n<li>C# bridge: यह वही role है जो Roslyn analyzers और warnings-as-errors वाली <code>.editorconfig</code> का है (CI pipelines Day 21 में हैं)।</li>\n</ul>",
        hg: "<ul>\n<li><b>ESLint</b> shak ke laayak code pakadta hai (<code>no-var</code>, <code>prefer-const</code>, <code>eqeqeq</code>, unused variables, aur type-aware rules jodne par floating promises ke rules). Modern ESLint \"flat\" config file <code>eslint.config.js</code> use karta hai.</li>\n<li><b>Prettier</b> (ya waisa formatter) style ki behas hata deta hai; phir linter sirf asli issues batata hai.</li>\n<li>Lock file se versions lock karo, CI mein <code>npm audit</code> ya dependency scanner chalao, aur dependencies kam rakho; npm ecosystem mein bahut chhote packages hain, isliye har addition ek supply-chain decision hai.</li>\n<li>Do jagah enforce karo: tez feedback ke liye pre-commit hook, aur asli gate ke roop mein CI (hooks skip ho sakte hain).</li>\n<li>C# bridge: yeh wahi role hai jo Roslyn analyzers aur warnings-as-errors wali <code>.editorconfig</code> ka hai (CI pipelines Day 21 mein hain).</li>\n</ul>"
      }
    }
  ],
  puzzles: [
    {
      id: "event-loop-order",
      lang: "javascript",
      src: "console.log(\"1 sync: script start\");\n\nsetTimeout(() => console.log(\"7 macrotask: setTimeout 0\"), 0);\n\nPromise.resolve().then(() => console.log(\"4 microtask: promise.then\"));\n\nqueueMicrotask(() => console.log(\"5 microtask: queueMicrotask\"));\n\n(async () => {\n  console.log(\"2 sync: inside async, before await\");\n  await null;\n  console.log(\"6 microtask: after await\");\n})();\n\nconsole.log(\"3 sync: script end\");",
      answer: "1 sync: script start\n2 sync: inside async, before await\n3 sync: script end\n4 microtask: promise.then\n5 microtask: queueMicrotask\n6 microtask: after await\n7 macrotask: setTimeout 0",
      explain: {
        en: "<p>The order is <b>synchronous code first</b> (lines 1, 2, 3, even the part of the async function before its first <code>await</code>), then <b>all microtasks</b> in the order they were queued (the promise <code>then</code>, <code>queueMicrotask</code>, then the code after <code>await</code>), and only then the <b>macrotask</b> <code>setTimeout 0</code>.</p>\n<p>Why \"6\" comes after \"5\": the <code>await null</code> continuation was queued after the other two. Why \"7\" is last: a timer callback is a macrotask, and the microtask queue is emptied completely before the next macrotask runs. In Node, <code>process.nextTick</code> has its own queue: at ES-module top level (as here) it runs after the promise callbacks, but in CommonJS and inside timer callbacks it runs before them. Output order here is deterministic in Node; do not rely on exact timer-vs-timer ordering between different delays in real apps.</p>",
        hi: "<p>Order यह है: <b>पहले synchronous code</b> (lines 1, 2, 3, यहाँ तक कि async function का वह हिस्सा जो पहले <code>await</code> से पहले है), फिर <b>सारे microtasks</b> उसी order में जिसमें queue हुए (promise का <code>then</code>, <code>queueMicrotask</code>, फिर <code>await</code> के बाद का code), और उसके बाद ही <b>macrotask</b> <code>setTimeout 0</code>।</p>\n<p>\"6\" \"5\" के बाद क्यों: <code>await null</code> का continuation बाक़ी दोनों के बाद queue हुआ। \"7\" आख़िर में क्यों: timer callback macrotask है, और अगला macrotask चलने से पहले microtask queue पूरी ख़ाली होती है। Node में <code>process.nextTick</code> की अपनी queue है: ES-module के top level पर (जैसे यहाँ) वह promise callbacks के बाद चलता है, पर CommonJS में और timer callbacks के अंदर उनसे पहले। यहाँ Node में output order deterministic है; असली apps में अलग-अलग delays वाले timers के आपसी order पर भरोसा मत करो।</p>",
        hg: "<p>Order yeh hai: <b>pehle synchronous code</b> (lines 1, 2, 3, yahan tak ki async function ka woh hissa jo pehle <code>await</code> se pehle hai), phir <b>saare microtasks</b> usi order mein jisme queue hue (promise ka <code>then</code>, <code>queueMicrotask</code>, phir <code>await</code> ke baad ka code), aur uske baad hi <b>macrotask</b> <code>setTimeout 0</code>.</p>\n<p>\"6\" \"5\" ke baad kyon: <code>await null</code> ka continuation baaki dono ke baad queue hua. \"7\" aakhir mein kyon: timer callback macrotask hai, aur agla macrotask chalne se pehle microtask queue poori khaali hoti hai. Node mein <code>process.nextTick</code> ki apni queue hai: ES-module ke top level par (jaise yahan) woh promise callbacks ke baad chalta hai, par CommonJS mein aur timer callbacks ke andar unse pehle. Yahan Node mein output order deterministic hai; asli apps mein alag-alag delays wale timers ke aapsi order par bharosa mat karo.</p>"
      }
    },
    {
      id: "closure-var-vs-let",
      lang: "javascript",
      src: "const withVar = [];\nfor (var i = 0; i < 3; i++) {\n  withVar.push(() => i);\n}\n\nconst withLet = [];\nfor (let j = 0; j < 3; j++) {\n  withLet.push(() => j);\n}\n\nconsole.log(\"var:\", withVar.map((f) => f()).join(\",\"));\nconsole.log(\"let:\", withLet.map((f) => f()).join(\",\"));\n\nfunction makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst a = makeCounter();\nconst b = makeCounter();\na();\na();\nconsole.log(\"a:\", a(), \"b:\", b());\n\nconst seen = [];\nfor (var k = 0; k < 3; k++) {\n  setTimeout(() => seen.push(k), 0);\n}\nawait new Promise((resolve) => setTimeout(resolve, 0));\nconsole.log(\"timers saw:\", seen.join(\",\"));",
      answer: "var: 3,3,3\nlet: 0,1,2\na: 3 b: 1\ntimers saw: 3,3,3",
      explain: {
        en: "<p><code>var i</code> is one variable for the whole loop; all three arrows share it and read it after the loop ended, so they see <code>3</code>. <code>let j</code> creates a fresh binding for each iteration, so the arrows see <code>0, 1, 2</code>. The timers show the classic trap: three callbacks, all print <code>3</code>.</p>\n<p>The counters show the useful side of closures: <code>a</code> and <code>b</code> each have their own private <code>count</code>, so <code>a</code> reaches <code>3</code> while <code>b</code> is at <code>1</code>. Fix the timer bug by changing <code>var k</code> to <code>let k</code>.</p>",
        hi: "<p><code>var i</code> पूरे loop के लिए एक ही variable है; तीनों arrows उसे share करते हैं और loop ख़त्म होने के बाद पढ़ते हैं, इसलिए उन्हें <code>3</code> दिखता है। <code>let j</code> हर iteration के लिए नया binding बनाता है, इसलिए arrows को <code>0, 1, 2</code> दिखता है। Timers classic trap दिखाते हैं: तीन callbacks, सब <code>3</code> print करते हैं।</p>\n<p>Counters closures का काम का पहलू दिखाते हैं: <code>a</code> और <code>b</code> हर एक का अपना private <code>count</code> है, इसलिए <code>a</code> <code>3</code> तक पहुँचता है जबकि <code>b</code> <code>1</code> पर है। Timer bug को <code>var k</code> को <code>let k</code> करके fix करो।</p>",
        hg: "<p><code>var i</code> poore loop ke liye ek hi variable hai; teeno arrows use share karte hain aur loop khatam hone ke baad padhte hain, isliye unhein <code>3</code> dikhta hai. <code>let j</code> har iteration ke liye naya binding banata hai, isliye arrows ko <code>0, 1, 2</code> dikhta hai. Timers classic trap dikhate hain: teen callbacks, sab <code>3</code> print karte hain.</p>\n<p>Counters closures ka kaam ka pehlu dikhate hain: <code>a</code> aur <code>b</code> har ek ka apna private <code>count</code> hai, isliye <code>a</code> <code>3</code> tak pahunchta hai jabki <code>b</code> <code>1</code> par hai. Timer bug ko <code>var k</code> ko <code>let k</code> karke fix karo.</p>"
      }
    },
    {
      id: "this-binding-rules",
      lang: "javascript",
      src: "const user = {\n  name: \"Asha\",\n  regular() {\n    return this === undefined ? \"this is undefined\" : this.name;\n  },\n  arrow: () => String(this),\n  mapped() {\n    return [1].map(() => this.name)[0];\n  },\n};\n\nconsole.log(user.regular());\n\nconst extracted = user.regular;\nconsole.log(extracted());\n\nconsole.log(extracted.call({ name: \"Ravi\" }));\n\nconst bound = user.regular.bind({ name: \"Meera\" });\nconsole.log(bound.call({ name: \"Other\" }));\n\nconsole.log(user.arrow());\nconsole.log(user.mapped());\n\nclass Greeter {\n  name = \"Kiran\";\n  hello() {\n    return this.name;\n  }\n}\nconst hello = new Greeter().hello;\ntry {\n  hello();\n} catch (e) {\n  console.log(e.name);\n}",
      answer: "Asha\nthis is undefined\nRavi\nMeera\nundefined\nAsha\nTypeError",
      explain: {
        en: "<p><code>user.regular()</code> is a method call, so <code>this</code> is <code>user</code>: <code>Asha</code>. Copying the method to <code>extracted</code> and calling it plainly loses the object; in a module (strict) <code>this</code> is <code>undefined</code>. <code>call</code> gives it to <code>{ name: \"Ravi\" }</code>. A function made by <code>bind</code> keeps <code>Meera</code> even when <code>call</code> tries <code>Other</code>.</p>\n<p>The arrow property <code>arrow: () =&gt; String(this)</code> does not use <code>user</code> as <code>this</code>; it uses the module's top-level <code>this</code>, which is <code>undefined</code> in an ES module. The arrow inside <code>mapped()</code> works because it borrows <code>this</code> from <code>mapped</code>. Finally a class method pulled out of its instance and called plainly throws <code>TypeError</code>, since class bodies are strict and <code>this</code> is <code>undefined</code>.</p>",
        hi: "<p><code>user.regular()</code> method call है, इसलिए <code>this</code> <code>user</code> है: <code>Asha</code>। Method को <code>extracted</code> में copy करके plain call करने पर object छूट जाता है; module (strict) में <code>this</code> <code>undefined</code> है। <code>call</code> उसे <code>{ name: \"Ravi\" }</code> दे देता है। <code>bind</code> से बना function <code>Meera</code> ही रखता है, भले <code>call</code> <code>Other</code> देने की कोशिश करे।</p>\n<p>Arrow property <code>arrow: () =&gt; String(this)</code> <code>user</code> को <code>this</code> नहीं बनाती; वह module का top-level <code>this</code> लेती है, जो ES module में <code>undefined</code> है। <code>mapped()</code> के अंदर का arrow इसलिए चलता है कि वह <code>mapped</code> से <code>this</code> उधार लेता है। आख़िर में class method को instance से निकालकर plain call करने पर <code>TypeError</code> आता है, क्योंकि class bodies strict हैं और <code>this</code> <code>undefined</code> है।</p>",
        hg: "<p><code>user.regular()</code> method call hai, isliye <code>this</code> <code>user</code> hai: <code>Asha</code>. Method ko <code>extracted</code> mein copy karke plain call karne par object chhoot jaata hai; module (strict) mein <code>this</code> <code>undefined</code> hai. <code>call</code> use <code>{ name: \"Ravi\" }</code> de deta hai. <code>bind</code> se bana function <code>Meera</code> hi rakhta hai, bhale <code>call</code> <code>Other</code> dene ki koshish kare.</p>\n<p>Arrow property <code>arrow: () =&gt; String(this)</code> <code>user</code> ko <code>this</code> nahi banati; woh module ka top-level <code>this</code> leti hai, jo ES module mein <code>undefined</code> hai. <code>mapped()</code> ke andar ka arrow isliye chalta hai ki woh <code>mapped</code> se <code>this</code> udhaar leta hai. Aakhir mein class method ko instance se nikalkar plain call karne par <code>TypeError</code> aata hai, kyonki class bodies strict hain aur <code>this</code> <code>undefined</code> hai.</p>"
      }
    },
    {
      id: "hoisting-and-tdz-errors",
      lang: "javascript",
      src: "console.log(typeof hoistedFn, hoistedFn());\nfunction hoistedFn() {\n  return \"works before its line\";\n}\n\nconsole.log(v);\nvar v = 5;\n\ntry {\n  console.log(l);\n} catch (e) {\n  console.log(\"let:\", e.name);\n}\nlet l = 1;\n\ntry {\n  fnExpr();\n} catch (e) {\n  console.log(\"var function expression:\", e.name);\n}\nvar fnExpr = function () {};\n\ntry {\n  new Late();\n} catch (e) {\n  console.log(\"class:\", e.name);\n}\nclass Late {}\n\nconst fixed = 1;\ntry {\n  fixed = 2;\n} catch (e) {\n  console.log(\"const:\", e.name);\n}\nconsole.log(typeof notDeclaredAnywhere);",
      answer: "function works before its line\nundefined\nlet: ReferenceError\nvar function expression: TypeError\nclass: ReferenceError\nconst: TypeError\nundefined",
      explain: {
        en: "<p>The function declaration is hoisted with its body, so it works before its line. <code>var v</code> is hoisted as <code>undefined</code>, so the early read prints <code>undefined</code>. The <code>let l</code> read hits the temporal dead zone: <code>ReferenceError</code>. The <code>var fnExpr</code> is <code>undefined</code> when called early, so calling it is a <code>TypeError</code> (not a function). A <code>class</code> is in the TDZ too: <code>ReferenceError</code>. Re-assigning a <code>const</code> is a <code>TypeError</code>. Finally <code>typeof</code> on a name that was never declared returns <code>\"undefined\"</code> without throwing.</p>\n<p>Memory trick: <b>ReferenceError = the name is not usable yet or does not exist; TypeError = the value is the wrong kind for what you did</b>.</p>",
        hi: "<p>Function declaration body के साथ hoist होता है, इसलिए अपनी line से पहले चलता है। <code>var v</code> <code>undefined</code> के साथ hoist होता है, इसलिए जल्दी पढ़ने पर <code>undefined</code> print होता है। <code>let l</code> पढ़ना temporal dead zone से टकराता है: <code>ReferenceError</code>। <code>var fnExpr</code> जल्दी call करने पर <code>undefined</code> है, इसलिए call करना <code>TypeError</code> (not a function) है। <code>class</code> भी TDZ में है: <code>ReferenceError</code>। <code>const</code> को दोबारा assign करना <code>TypeError</code> है। आख़िर में जिस नाम को कभी declare नहीं किया उस पर <code>typeof</code> बिना throw किए <code>\"undefined\"</code> देता है।</p>\n<p>याद रखने की trick: <b>ReferenceError = नाम अभी use के लायक़ नहीं या है ही नहीं; TypeError = value उस काम के लिए ग़लत क़िस्म की है जो तुमने किया</b>।</p>",
        hg: "<p>Function declaration body ke saath hoist hota hai, isliye apni line se pehle chalta hai. <code>var v</code> <code>undefined</code> ke saath hoist hota hai, isliye jaldi padhne par <code>undefined</code> print hota hai. <code>let l</code> padhna temporal dead zone se takraata hai: <code>ReferenceError</code>. <code>var fnExpr</code> jaldi call karne par <code>undefined</code> hai, isliye call karna <code>TypeError</code> (not a function) hai. <code>class</code> bhi TDZ mein hai: <code>ReferenceError</code>. <code>const</code> ko dobara assign karna <code>TypeError</code> hai. Aakhir mein jis naam ko kabhi declare nahi kiya us par <code>typeof</code> bina throw kiye <code>\"undefined\"</code> deta hai.</p>\n<p>Yaad rakhne ki trick: <b>ReferenceError = naam abhi use ke laayak nahi ya hai hi nahi; TypeError = value us kaam ke liye galat kism ki hai jo tumne kiya</b>.</p>"
      }
    },
    {
      id: "equality-coercion-table",
      lang: "javascript",
      src: "const rows = [\n  ['0 vs \"0\"', 0 == \"0\", 0 === \"0\"],\n  ['0 vs \"\"', 0 == \"\", 0 === \"\"],\n  ['\"0\" vs \"\"', \"0\" == \"\", \"0\" === \"\"],\n  [\"null vs undefined\", null == undefined, null === undefined],\n  [\"null vs 0\", null == 0, null === 0],\n  [\"NaN vs NaN\", NaN == NaN, NaN === NaN],\n  [\"[] vs false\", [] == false, [] === false],\n  [\"[1] vs 1\", [1] == 1, [1] === 1],\n];\nfor (const [label, loose, strict] of rows) {\n  console.log(label + \": == \" + loose + \", === \" + strict);\n}\nconsole.log(\"Object.is(NaN, NaN):\", Object.is(NaN, NaN));\nconsole.log('\"5\" + 2 =', \"5\" + 2, '| \"5\" - 2 =', \"5\" - 2);\nconsole.log(\"typeof null:\", typeof null);",
      answer: "0 vs \"0\": == true, === false\n0 vs \"\": == true, === false\n\"0\" vs \"\": == false, === false\nnull vs undefined: == true, === false\nnull vs 0: == false, === false\nNaN vs NaN: == false, === false\n[] vs false: == true, === false\n[1] vs 1: == true, === false\nObject.is(NaN, NaN): true\n\"5\" + 2 = 52 | \"5\" - 2 = 3\ntypeof null: object",
      explain: {
        en: "<p>The <code>===</code> column is <code>false</code> for every row because the types or values differ (and <code>NaN</code> is never strictly equal to itself). The <code>==</code> column shows the conversions: <code>0 == \"0\"</code> and <code>0 == \"\"</code> are true (strings become numbers), yet <code>\"0\" == \"\"</code> is false (two strings compare as text), so loose equality is not transitive. <code>null == undefined</code> is true by a special rule, but <code>null == 0</code> is false. <code>[] == false</code> and <code>[1] == 1</code> are true because the array becomes a string and then a number.</p>\n<p>Also see <code>\"5\" + 2</code> giving the string <code>\"52\"</code> while <code>\"5\" - 2</code> gives the number <code>3</code>, <code>Object.is(NaN, NaN)</code> being true, and the historical <code>typeof null</code> result <code>\"object\"</code>. Default to <code>===</code>.</p>",
        hi: "<p><code>===</code> वाला column हर row में <code>false</code> है क्योंकि types या values अलग हैं (और <code>NaN</code> कभी strictly अपने बराबर नहीं होता)। <code>==</code> वाला column conversions दिखाता है: <code>0 == \"0\"</code> और <code>0 == \"\"</code> true हैं (strings numbers बन जाती हैं), फिर भी <code>\"0\" == \"\"</code> false है (दो strings text की तरह compare होती हैं), यानी loose equality transitive नहीं है। <code>null == undefined</code> एक special rule से true है, पर <code>null == 0</code> false है। <code>[] == false</code> और <code>[1] == 1</code> true हैं क्योंकि array पहले string और फिर number बनता है।</p>\n<p>यह भी देखो: <code>\"5\" + 2</code> string <code>\"52\"</code> देता है जबकि <code>\"5\" - 2</code> number <code>3</code>, <code>Object.is(NaN, NaN)</code> true है, और historical <code>typeof null</code> का नतीजा <code>\"object\"</code> है। Default में <code>===</code> रखो।</p>",
        hg: "<p><code>===</code> wala column har row mein <code>false</code> hai kyonki types ya values alag hain (aur <code>NaN</code> kabhi strictly apne barabar nahi hota). <code>==</code> wala column conversions dikhata hai: <code>0 == \"0\"</code> aur <code>0 == \"\"</code> true hain (strings numbers ban jaati hain), phir bhi <code>\"0\" == \"\"</code> false hai (do strings text ki tarah compare hoti hain), yaani loose equality transitive nahi hai. <code>null == undefined</code> ek special rule se true hai, par <code>null == 0</code> false hai. <code>[] == false</code> aur <code>[1] == 1</code> true hain kyonki array pehle string aur phir number banta hai.</p>\n<p>Yeh bhi dekho: <code>\"5\" + 2</code> string <code>\"52\"</code> deta hai jabki <code>\"5\" - 2</code> number <code>3</code>, <code>Object.is(NaN, NaN)</code> true hai, aur historical <code>typeof null</code> ka nateeja <code>\"object\"</code> hai. Default mein <code>===</code> rakho.</p>"
      }
    },
    {
      id: "nullish-vs-or",
      lang: "javascript",
      src: "const settings = { retries: 0, name: \"\", debug: false, timeout: null, nested: { size: 10 } };\n\nconsole.log(\"retries ||:\", settings.retries || 3);\nconsole.log(\"retries ??:\", settings.retries ?? 3);\nconsole.log(\"name ||:\", JSON.stringify(settings.name || \"anonymous\"));\nconsole.log(\"name ??:\", JSON.stringify(settings.name ?? \"anonymous\"));\nconsole.log(\"debug ??:\", settings.debug ?? true);\nconsole.log(\"timeout ??:\", settings.timeout ?? 30);\nconsole.log(\"missing ??:\", settings.missing ?? \"default\");\n\nconsole.log(\"deep ?.:\", settings.other?.size);\nconsole.log(\"deep ?. ??:\", settings.other?.size ?? \"no size\");\nconsole.log(\"nested ?.:\", settings.nested?.size);\nconsole.log(\"method ?.():\", settings.format?.());\n\nconst copy = { ...settings };\ncopy.retries ||= 5;\ncopy.debug ??= true;\nconsole.log(\"after ||= and ??=:\", copy.retries, copy.debug);",
      answer: "retries ||: 3\nretries ??: 0\nname ||: \"anonymous\"\nname ??: \"\"\ndebug ??: false\ntimeout ??: 30\nmissing ??: default\ndeep ?.: undefined\ndeep ?. ??: no size\nnested ?.: 10\nmethod ?.(): undefined\nafter ||= and ??=: 5 false",
      explain: {
        en: "<p><code>||</code> replaces every falsy value: the real <code>0</code> retries become <code>3</code> and the empty name becomes <code>\"anonymous\"</code>. <code>??</code> replaces only <code>null</code>/<code>undefined</code>: <code>0</code> and <code>\"\"</code> and <code>false</code> are kept, while <code>null</code> and the missing property get the default.</p>\n<p><code>settings.other?.size</code> stops at the missing <code>other</code> and gives <code>undefined</code> instead of throwing; add <code>??</code> to turn that into a message. <code>format?.()</code> calls the function only if it exists. For the assignments, <code>copy.retries ||= 5</code> replaced <code>0</code> (probably a bug), while <code>copy.debug ??= true</code> kept the deliberate <code>false</code>. Spread made a shallow copy first, so <code>settings</code> was not changed.</p>",
        hi: "<p><code>||</code> हर falsy value को बदल देता है: असली <code>0</code> retries <code>3</code> बन जाते हैं और empty name <code>\"anonymous\"</code> बन जाता है। <code>??</code> सिर्फ़ <code>null</code>/<code>undefined</code> बदलता है: <code>0</code>, <code>\"\"</code> और <code>false</code> रह जाते हैं, जबकि <code>null</code> और missing property को default मिलता है।</p>\n<p><code>settings.other?.size</code> missing <code>other</code> पर रुक जाता है और throw करने की जगह <code>undefined</code> देता है; उसे message बनाने के लिए <code>??</code> जोड़ो। <code>format?.()</code> function को तभी call करता है जब वह मौजूद हो। Assignments में <code>copy.retries ||= 5</code> ने <code>0</code> बदल दिया (शायद bug), जबकि <code>copy.debug ??= true</code> ने जान-बूझकर रखा <code>false</code> रहने दिया। Spread ने पहले shallow copy बनाई, इसलिए <code>settings</code> नहीं बदला।</p>",
        hg: "<p><code>||</code> har falsy value ko badal deta hai: asli <code>0</code> retries <code>3</code> ban jaate hain aur empty name <code>\"anonymous\"</code> ban jaata hai. <code>??</code> sirf <code>null</code>/<code>undefined</code> badalta hai: <code>0</code>, <code>\"\"</code> aur <code>false</code> reh jaate hain, jabki <code>null</code> aur missing property ko default milta hai.</p>\n<p><code>settings.other?.size</code> missing <code>other</code> par ruk jaata hai aur throw karne ki jagah <code>undefined</code> deta hai; use message banane ke liye <code>??</code> jodo. <code>format?.()</code> function ko tabhi call karta hai jab woh maujood ho. Assignments mein <code>copy.retries ||= 5</code> ne <code>0</code> badal diya (shayad bug), jabki <code>copy.debug ??= true</code> ne jaan-boojhkar rakha <code>false</code> rehne diya. Spread ne pehle shallow copy banayi, isliye <code>settings</code> nahi badla.</p>"
      }
    },
    {
      id: "promise-all-vs-allsettled",
      lang: "javascript",
      src: "const ok = (value) => Promise.resolve(value);\nconst fail = (message) => Promise.reject(new Error(message));\n\ntry {\n  await Promise.all([ok(\"orders\"), fail(\"payments down\"), ok(\"stock\")]);\n} catch (error) {\n  console.log(\"all rejected:\", error.message);\n}\n\nconst results = await Promise.allSettled([ok(\"orders\"), fail(\"payments down\"), ok(\"stock\")]);\nconsole.log(\n  results\n    .map((r) => (r.status === \"fulfilled\" ? \"ok:\" + r.value : \"fail:\" + r.reason.message))\n    .join(\" | \"),\n);\n\nconsole.log(\"race:\", await Promise.race([ok(\"first\"), fail(\"second\")]));\nconsole.log(\"any:\", await Promise.any([fail(\"a\"), ok(\"b\"), fail(\"c\")]));\n\ntry {\n  await Promise.any([fail(\"a\"), fail(\"c\")]);\n} catch (error) {\n  console.log(error.name, error.errors.length);\n}",
      answer: "all rejected: payments down\nok:orders | fail:payments down | ok:stock\nrace: first\nany: b\nAggregateError 2",
      explain: {
        en: "<p><code>Promise.all</code> rejects with the first failure, <code>payments down</code>, and you lose the other two results. <code>Promise.allSettled</code> never rejects; it returns one object per promise with a <code>status</code>, so you can show orders and stock and report the payment error. <code>Promise.race</code> follows the first promise to settle; because <code>ok(\"first\")</code> is already fulfilled and listed first, the answer is <code>first</code> (a rejection winning would have thrown). <code>Promise.any</code> ignores rejections and returns the first fulfilled value, <code>b</code>. If every promise rejects, <code>any</code> rejects with an <code>AggregateError</code> that holds all reasons in <code>.errors</code> (here 2).</p>\n<p>Note: nothing is cancelled. The other promises still run; you just stop waiting for them.</p>",
        hi: "<p><code>Promise.all</code> पहली failure <code>payments down</code> के साथ reject हो जाता है और बाक़ी दो results खो जाते हैं। <code>Promise.allSettled</code> कभी reject नहीं होता; वह हर promise के लिए <code>status</code> वाला एक object लौटाता है, इसलिए तुम orders और stock दिखा सकते हो और payment error report कर सकते हो। <code>Promise.race</code> जो promise पहले settle हो उसका पीछा करता है; <code>ok(\"first\")</code> पहले से fulfilled है और list में पहला है, इसलिए जवाब <code>first</code> है (rejection जीतता तो throw होता)। <code>Promise.any</code> rejections को ignore करके पहली fulfilled value <code>b</code> देता है। अगर हर promise reject हो तो <code>any</code> एक <code>AggregateError</code> के साथ reject होता है जिसकी <code>.errors</code> में सारे reasons होते हैं (यहाँ 2)।</p>\n<p>ध्यान दो: कुछ cancel नहीं होता। बाक़ी promises चलते रहते हैं; तुम बस उनका इंतज़ार छोड़ देते हो।</p>",
        hg: "<p><code>Promise.all</code> pehli failure <code>payments down</code> ke saath reject ho jaata hai aur baaki do results kho jaate hain. <code>Promise.allSettled</code> kabhi reject nahi hota; woh har promise ke liye <code>status</code> wala ek object lautata hai, isliye tum orders aur stock dikha sakte ho aur payment error report kar sakte ho. <code>Promise.race</code> jo promise pehle settle ho uska peecha karta hai; <code>ok(\"first\")</code> pehle se fulfilled hai aur list mein pehla hai, isliye jawab <code>first</code> hai (rejection jeetta to throw hota). <code>Promise.any</code> rejections ko ignore karke pehli fulfilled value <code>b</code> deta hai. Agar har promise reject ho to <code>any</code> ek <code>AggregateError</code> ke saath reject hota hai jiski <code>.errors</code> mein saare reasons hote hain (yahan 2).</p>\n<p>Dhyan do: kuch cancel nahi hota. Baaki promises chalte rehte hain; tum bas unka intezaar chhod dete ho.</p>"
      }
    }
  ],
  revision: {
    en: [
      "Use <code>const</code> by default, <code>let</code> when a value changes, never <code>var</code>; <code>const</code> protects the name, not the object.",
      "A closure keeps the variable, not a copy; a <code>var</code> loop shares one variable, <code>let</code> gives one per pass.",
      "<code>this</code> is set by how a function is called; detach a method and it is lost; <code>bind</code> or an arrow function fixes it.",
      "<code>class</code> is syntax over prototypes: methods live once on the prototype, fields on each object, <code>#private</code> is enforced.",
      "Event loop: current code, then all microtasks (promises), then one macrotask (timer); a promise is pending, then fulfilled or rejected.",
      "<code>async</code> returns a promise; <code>await</code> pauses only that function; errors are caught with <code>try/catch</code>.",
      "<code>fetch</code> resolves for 404 and 500: check <code>response.ok</code> before <code>json()</code>.",
      "ES modules: a file is a module, <code>export</code> to share, <code>import</code> to use; default export has no braces.",
      "jQuery to DOM: <code>querySelector</code>, <code>addEventListener</code>, <code>classList</code>, <code>fetch</code>; delegate events on the parent with <code>closest</code>.",
      "Use ===; == converts types first and surprises (for example [] == false is true).",
      "?? falls back only for null/undefined; || also replaces 0, \"\" and false.",
      "Promise.all fails fast, allSettled reports every result, race returns the first to settle, any the first fulfilled."
    ],
    meaning: {
      hi: [
        "Default <code>const</code>, value बदले तो <code>let</code>, <code>var</code> कभी नहीं; <code>const</code> नाम को बचाता है, object को नहीं",
        "Closure variable रखता है, copy नहीं; <code>var</code> loop एक variable share करता है, <code>let</code> हर बारी का अलग देता है",
        "<code>this</code> इससे तय होता है कि function कैसे call हुआ; method अलग करो तो खो जाता है; <code>bind</code> या arrow function ठीक करता है",
        "<code>class</code> prototypes पर syntax है: methods prototype पर एक बार, fields हर object पर, <code>#private</code> लागू होता है",
        "Event loop: मौजूदा code, फिर सारे microtasks (promises), फिर एक macrotask (timer); promise पहले pending, फिर fulfilled या rejected",
        "<code>async</code> promise लौटाता है; <code>await</code> सिर्फ़ उसी function को रोकता है; errors <code>try/catch</code> से पकड़ो",
        "<code>fetch</code> 404 और 500 पर भी resolve होता है: <code>json()</code> से पहले <code>response.ok</code> जाँचो",
        "ES modules: file ही module है, share करने को <code>export</code>, use करने को <code>import</code>; default export बिना braces के",
        "jQuery से DOM: <code>querySelector</code>, <code>addEventListener</code>, <code>classList</code>, <code>fetch</code>; parent पर <code>closest</code> से events delegate करो",
        "=== use करो; == पहले types convert करता है और चौंकाता है (जैसे [] == false true है)।",
        "?? सिर्फ़ null/undefined पर fallback देता है; || 0, \"\" और false को भी बदल देता है।",
        "Promise.all fail-fast है, allSettled हर नतीजा बताता है, race पहला settled देता है, any पहला fulfilled।"
      ],
      hg: [
        "Default <code>const</code>, value badle to <code>let</code>, <code>var</code> kabhi nahi; <code>const</code> naam ko bachata hai, object ko nahi",
        "Closure variable rakhta hai, copy nahi; <code>var</code> loop ek variable share karta hai, <code>let</code> har baari ka alag deta hai",
        "<code>this</code> isse tay hota hai ki function kaise call hua; method alag karo to kho jaata hai; <code>bind</code> ya arrow function theek karta hai",
        "<code>class</code> prototypes par syntax hai: methods prototype par ek baar, fields har object par, <code>#private</code> laagu hota hai",
        "Event loop: maujooda code, phir saare microtasks (promises), phir ek macrotask (timer); promise pehle pending, phir fulfilled ya rejected",
        "<code>async</code> promise lautata hai; <code>await</code> sirf usi function ko rokta hai; errors <code>try/catch</code> se pakdo",
        "<code>fetch</code> 404 aur 500 par bhi resolve hota hai: <code>json()</code> se pehle <code>response.ok</code> jaancho",
        "ES modules: file hi module hai, share karne ko <code>export</code>, use karne ko <code>import</code>; default export bina braces ke",
        "jQuery se DOM: <code>querySelector</code>, <code>addEventListener</code>, <code>classList</code>, <code>fetch</code>; parent par <code>closest</code> se events delegate karo",
        "=== use karo; == pehle types convert karta hai aur chaunkata hai (jaise [] == false true hai).",
        "?? sirf null/undefined par fallback deta hai; || 0, \"\" aur false ko bhi badal deta hai.",
        "Promise.all fail-fast hai, allSettled har nateeja batata hai, race pehla settled deta hai, any pehla fulfilled."
      ]
    }
  }
};
