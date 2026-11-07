// Day 17 — System design for TL rounds, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 17,
  format: "lesson",
  title: {
    en: "System design for TL rounds — framework, estimates, building blocks, three worked designs",
    hi: "TL rounds के लिए System design — framework, estimates, building blocks, तीन worked designs",
    hg: "TL rounds ke liye System design — framework, estimates, building blocks, teen worked designs"
  },
  summary: {
    en: "<p>Day 17 turns the architecture and microservices from Days 15 and 16 into <b>system design answers</b>, in 8 short lessons on the customer-care CRM. First the interview framework and back-of-envelope estimates. Then the building blocks, each as a small program: cache-aside, sharding with consistent hashing, a token-bucket rate limiter. Then three worked designs: short links (base62 and 302), a notification pipeline (dedupe, retry, dead-letter) and an order saga with compensations.</p><p>Every lesson follows the same path: what it is, why you need it, an analogy, a complete program with its output, line-by-line notes, common mistakes, a small exercise and a quick quiz. The Deep Dive has the building-blocks overview, numbers to remember, the three full design walkthroughs and a STAR template for your own design story.</p>",
    hi: "<p>Day 17 में Days 15 और 16 की architecture और microservices <b>system design के जवाबों</b> में बदलती हैं, customer-care CRM पर 8 छोटे पाठों में। पहले interview framework और back-of-envelope estimates। फिर building blocks, हर एक छोटे program में: cache-aside, consistent hashing के साथ sharding, token-bucket rate limiter। फिर तीन worked designs: short links (base62 और 302), notification pipeline (dedupe, retry, dead-letter) और compensations वाला order saga।</p><p>हर पाठ एक ही क्रम में चलता है: यह क्या है, क्यों चाहिए, एक मिसाल, output के साथ पूरा program, लाइन-दर-लाइन समझ, आम ग़लतियाँ, एक छोटा exercise और एक झटपट quiz। Deep Dive में building-blocks overview, याद रखने लायक़ numbers, तीनों designs के पूरे walkthrough और अपनी design story के लिए STAR template है।</p>",
    hg: "<p>Day 17 mein Days 15 aur 16 ki architecture aur microservices <b>system design ke jawabon</b> mein badalti hain, customer-care CRM par 8 chhote lessons mein. Pehle interview framework aur back-of-envelope estimates. Phir building blocks, har ek chhote program mein: cache-aside, consistent hashing ke saath sharding, token-bucket rate limiter. Phir teen worked designs: short links (base62 aur 302), notification pipeline (dedupe, retry, dead-letter) aur compensations wala order saga.</p><p>Har lesson ek hi kram mein chalta hai: ye kya hai, kyun chahiye, ek misaal, output ke saath poora program, line-by-line samajh, aam galtiyan, ek chhota exercise aur ek jhatpat quiz. Deep Dive mein building-blocks overview, yaad rakhne laayak numbers, teeno designs ke poore walkthrough aur apni design story ke liye STAR template hai.</p>"
  },
  sections: [
    {
      id: "framework",
      depth: "short",
      title: {
        en: "The framework: questions first, boxes later",
        hi: "Framework: पहले सवाल, बाद में boxes",
        hg: "Framework: pehle sawaal, baad mein boxes"
      },
      lesson: {
        buildsOn: {
          en: "<p>Day 15 gave you architecture (layers, ports and adapters, aggregates) and Day 16 gave you microservices (queues, outbox, saga). Today you <b>speak them in an interview</b>. The system design round is not a new technology; it is a way of using what you already know, in a fixed order.</p>",
          hi: "<p>Day 15 में architecture (layers, ports और adapters, aggregates) थी और Day 16 में microservices (queues, outbox, saga)। आज तुम इन्हें <b>interview में बोलकर</b> use करोगे। System design round कोई नई technology नहीं है; यह तुम्हारी जानी हुई चीज़ों को एक तय क्रम में इस्तेमाल करने का तरीका है।</p>",
          hg: "<p>Day 15 mein architecture (layers, ports aur adapters, aggregates) thi aur Day 16 mein microservices (queues, outbox, saga). Aaj tum inhe <b>interview mein bolkar</b> use karoge. System design round koi nayi technology nahi hai; ye tumhari jaani hui cheezon ko ek tay kram mein istemaal karne ka tareeka hai.</p>"
        },
        what: {
          en: "<p>A <b>system design round</b> gives you a vague problem (\"design a ticket system\") and about 45 minutes. There is no single right answer. You are judged on <b>structure, trade-offs and communication</b>.</p><p>The <b>framework</b> is seven steps: clarify, estimate, API, data, high-level design, deep dives, wrap-up. You follow it like a checklist.</p>",
          hi: "<p><b>System design round</b> में एक धुंधली problem मिलती है (\"एक ticket system design करो\") और लगभग 45 मिनट। कोई एक सही जवाब नहीं होता। तुम्हें <b>structure, trade-offs और communication</b> पर परखा जाता है।</p><p><b>Framework</b> सात steps का है: clarify, estimate, API, data, high-level design, deep dives, wrap-up। इसे checklist की तरह follow करते हैं।</p>",
          hg: "<p><b>System design round</b> mein ek dhundhli problem milti hai (\"ek ticket system design karo\") aur lagbhag 45 minute. Koi ek sahi jawab nahi hota. Tumhe <b>structure, trade-offs aur communication</b> par parkha jaata hai.</p><p><b>Framework</b> saat steps ka hai: clarify, estimate, API, data, high-level design, deep dives, wrap-up. Ise checklist ki tarah follow karte hain.</p>"
        },
        why: {
          en: "<p>Candidates fail by jumping to boxes (\"I will use Kafka and Redis\") before they know the scale. A fixed order keeps you calm, shows you <b>drive</b> the conversation, and leaves time for the parts a Tech Lead is really judged on: trade-offs and failure modes.</p>",
          hi: "<p>Candidates अक्सर scale जाने बिना ही boxes पर कूद जाते हैं (\"मैं Kafka और Redis लगाऊँगा\") और वहीं फेल होते हैं। तय क्रम तुम्हें शांत रखता है, दिखाता है कि बातचीत तुम <b>चला</b> रहे हो, और उन हिस्सों के लिए समय बचाता है जिन पर Tech Lead को असल में परखा जाता है: trade-offs और failure modes।</p>",
          hg: "<p>Candidates aksar scale jaane bina hi boxes par kood jaate hain (\"main Kafka aur Redis lagaunga\") aur wahin fail hote hain. Tay kram tumhe shaant rakhta hai, dikhata hai ki baatcheet tum <b>chala</b> rahe ho, aur un hisson ke liye samay bachata hai jin par Tech Lead ko asal mein parkha jaata hai: trade-offs aur failure modes.</p>"
        },
        analogy: {
          en: "<p>Planning a family trip: you do not start with the car colour. First \"how many people, how many days, what budget?\", then fuel and hotel costs, then the route, and only at the end \"what if it rains?\". Questions first, boxes later.</p>",
          hi: "<p>परिवार की trip plan करना: गाड़ी के रंग से शुरू नहीं करते। पहले \"कितने लोग, कितने दिन, कितना budget?\", फिर पेट्रोल और hotel का खर्च, फिर रास्ता, और सबसे आख़िर में \"बारिश हो गई तो?\"। पहले सवाल, बाद में boxes।</p>",
          hg: "<p>Parivaar ki trip plan karna: gaadi ke rang se shuru nahi karte. Pehle \"kitne log, kitne din, kitna budget?\", phir petrol aur hotel ka kharch, phir raasta, aur sabse aakhir mein \"baarish ho gayi to?\". Pehle sawaal, baad mein boxes.</p>"
        },
        lines: [
          {
            code: "1 Clarify (5 min)",
            note: {
              en: "Always step 1. Split the needs into <b>functional</b> (what it must do) and <b>non-functional</b> (scale, speed, availability). Write the agreed scope down.",
              hi: "हमेशा step 1। ज़रूरतों को <b>functional</b> (क्या करना है) और <b>non-functional</b> (scale, speed, availability) में बाँटो। तय हुआ scope लिख लो।",
              hg: "Hamesha step 1. Zaruraton ko <b>functional</b> (kya karna hai) aur <b>non-functional</b> (scale, speed, availability) mein baanto. Tay hua scope likh lo."
            }
          },
          {
            code: "Out of scope  : billing, agent salary, analytics dashboards",
            note: {
              en: "Saying what you will <b>not</b> design is a strong move. It protects your time and shows you can set boundaries.",
              hi: "जो तुम design <b>नहीं</b> करोगे वह बोल देना अच्छा क़दम है। इससे समय बचता है और दिखता है कि तुम सीमाएँ तय कर सकते हो।",
              hg: "Jo tum design <b>nahi</b> karoge woh bol dena achha kadam hai. Isse samay bachta hai aur dikhta hai ki tum seemayein tay kar sakte ho."
            }
          },
          {
            code: "2 Estimate (5 min)",
            note: {
              en: "Numbers decide the design. Here the estimate says one database is enough, so we will not start with sharding. Lesson 2 shows the arithmetic.",
              hi: "Design numbers से तय होता है। यहाँ estimate बताता है कि एक database काफ़ी है, इसलिए sharding से शुरू नहीं करेंगे। Arithmetic पाठ 2 में है।",
              hg: "Design numbers se tay hota hai. Yahan estimate batata hai ki ek database kaafi hai, isliye sharding se shuru nahi karenge. Arithmetic lesson 2 mein hai."
            }
          },
          {
            code: "3 API (5 min)",
            note: {
              en: "The main endpoints. Note <code>Idempotency-Key</code> on the create call: a retry must not create a second ticket (lesson 7 builds this).",
              hi: "मुख्य endpoints। Create call पर <code>Idempotency-Key</code> देखो: retry से दूसरा ticket नहीं बनना चाहिए (पाठ 7 में बनाएँगे)।",
              hg: "Mukhya endpoints. Create call par <code>Idempotency-Key</code> dekho: retry se doosra ticket nahi banna chahiye (lesson 7 mein banayenge)."
            }
          },
          {
            code: "5 High-level (10 min)",
            note: {
              en: "A simple picture that works end to end for the normal case first. Add blocks later, only when a number or a requirement asks for them.",
              hi: "पहले normal case के लिए एक सीधा picture जो शुरू से आख़िर तक चले। Blocks बाद में जोड़ो, तभी जब कोई number या requirement माँगे।",
              hg: "Pehle normal case ke liye ek seedha picture jo shuru se aakhir tak chale. Blocks baad mein jodo, tabhi jab koi number ya requirement maange."
            }
          },
          {
            code: "7 Wrap up (5 min)",
            note: {
              en: "Never skip this. A Tech Lead names what breaks, how it is detected and what comes next. This is where you stand out.",
              hi: "इसे कभी मत छोड़ो। Tech Lead बताता है कि क्या टूटेगा, कैसे पता चलेगा और आगे क्या बनेगा। यहीं तुम बाकियों से अलग दिखते हो।",
              hg: "Ise kabhi mat chhodo. Tech Lead batata hai ki kya tootega, kaise pata chalega aur aage kya banega. Yahin tum baakiyon se alag dikhte ho."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Starting with technology names before asking about scale and requirements.</li><li>Silent thinking. The interviewer cannot grade what you do not say; think aloud and state your assumptions.</li><li>Treating the steps as a script. If the interviewer wants to dive into caching, follow them and come back to the checklist later.</li></ul>",
          hi: "<ul><li>Scale और requirements पूछे बिना technology के नाम से शुरू कर देना।</li><li>चुपचाप सोचना। जो तुम बोलते नहीं, interviewer उसे परख नहीं सकता; ज़ोर से सोचो और assumptions बोलो।</li><li>Steps को रटी हुई script समझना। Interviewer caching में जाना चाहे तो साथ चलो, checklist पर बाद में लौटो।</li></ul>",
          hg: "<ul><li>Scale aur requirements poochhe bina technology ke naam se shuru kar dena.</li><li>Chupchaap sochna. Jo tum bolte nahi, interviewer use parakh nahi sakta; zor se socho aur assumptions bolo.</li><li>Steps ko ratti hui script samajhna. Interviewer caching mein jaana chahe to saath chalo, checklist par baad mein lauto.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use it in every system design round, and also in a real design meeting: clarify, estimate, then draw. With a small team and small numbers, say so and keep the design simple; a modular monolith (Day 15) is a valid answer.</p>",
          hi: "<p>हर system design round में इसे use करो, और असली design meeting में भी: clarify, estimate, फिर draw। Team छोटी और numbers छोटे हों तो यह बोल दो और design सीधा रखो; modular monolith (Day 15) भी सही जवाब है।</p>",
          hg: "<p>Har system design round mein ise use karo, aur asli design meeting mein bhi: clarify, estimate, phir draw. Team chhoti aur numbers chhote hon to ye bol do aur design seedha rakho; modular monolith (Day 15) bhi sahi jawab hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write steps 1 to 3 (clarify, estimate, API) for a new CRM feature: <b>refund requests</b>. Keep each step to one or two lines.</p>",
            hi: "<p>CRM के एक नए feature <b>refund requests</b> के लिए steps 1 से 3 (clarify, estimate, API) लिखो। हर step एक-दो लाइन में रखो।</p>",
            hg: "<p>CRM ke ek naye feature <b>refund requests</b> ke liye steps 1 se 3 (clarify, estimate, API) likho. Har step ek-do line mein rakho.</p>"
          },
          hint: {
            en: "<p>Ask: who asks, who approves, what must never happen (a double refund). For the estimate, take a percentage of the daily tickets.</p>",
            hi: "<p>पूछो: कौन माँगता है, कौन approve करता है, क्या कभी नहीं होना चाहिए (दो बार refund)। Estimate के लिए रोज़ के tickets का एक percentage लो।</p>",
            hg: "<p>Poochho: kaun maangta hai, kaun approve karta hai, kya kabhi nahi hona chahiye (do baar refund). Estimate ke liye roz ke tickets ka ek percentage lo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: an outline (plain text)",
              hi: "हल: एक outline (plain text)",
              hg: "Solution: ek outline (plain text)"
            },
            lang: "text",
            src: "DESIGN: refund requests for the CRM (steps 1-3 only)\n\n1 Clarify\n  Functional    : a customer asks for a refund on a ticket; an agent approves or rejects; the customer is told\n  Non-functional: no refund paid twice, every decision has an audit record, status visible within 1 second\n  Out of scope  : the bank transfer itself (a payment provider does it)\n2 Estimate     : assume 2% of 100,000 daily tickets ask for a refund = 2,000 a day = well under 1 write/s\n3 API          : POST /refunds (Idempotency-Key), POST /refunds/{id}/approve, GET /refunds/{id}",
            check: "none"
          }
        },
        quiz: {
          q: {
            en: "The interviewer says \"design a ticket system\". What do you do first?",
            hi: "Interviewer कहता है \"एक ticket system design करो\"। सबसे पहले क्या करोगे?",
            hg: "Interviewer kehta hai \"ek ticket system design karo\". Sabse pehle kya karoge?"
          },
          options: [
            {
              en: "Choose Kafka and Redis",
              hi: "Kafka और Redis चुनूँगा",
              hg: "Kafka aur Redis chunuga"
            },
            {
              en: "Draw the database tables",
              hi: "Database tables बनाऊँगा",
              hg: "Database tables banaunga"
            },
            {
              en: "Ask clarifying questions and agree the scope",
              hi: "Clarifying सवाल पूछकर scope तय करूँगा",
              hg: "Clarifying sawaal poochhkar scope tay karunga"
            },
            {
              en: "Calculate storage in bytes",
              hi: "Bytes में storage निकालूँगा",
              hg: "Bytes mein storage nikaalunga"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>Step 1 is always clarify. Without scope and scale you cannot estimate, and without an estimate any technology choice is a guess.</p>",
            hi: "<p>Step 1 हमेशा clarify है। Scope और scale के बिना estimate नहीं हो सकता, और estimate के बिना कोई भी technology चुनना अंदाज़ा है।</p>",
            hg: "<p>Step 1 hamesha clarify hai. Scope aur scale ke bina estimate nahi ho sakta, aur estimate ke bina koi bhi technology chunna andaza hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Seven steps: clarify, estimate, API, data, high-level design, deep dives, wrap-up.</li><li>Questions first, boxes later; state assumptions and trade-offs aloud.</li><li>Always keep time for failure modes and next steps.</li></ul>",
          hi: "<ul><li>सात steps: clarify, estimate, API, data, high-level design, deep dives, wrap-up।</li><li>पहले सवाल, बाद में boxes; assumptions और trade-offs ज़ोर से बोलो।</li><li>Failure modes और next steps के लिए समय हमेशा बचाओ।</li></ul>",
          hg: "<ul><li>Saat steps: clarify, estimate, API, data, high-level design, deep dives, wrap-up.</li><li>Pehle sawaal, baad mein boxes; assumptions aur trade-offs zor se bolo.</li><li>Failure modes aur next steps ke liye samay hamesha bachao.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A design outline for the CRM (plain text, nothing to run)",
            hi: "CRM के लिए design outline (plain text, चलाने को कुछ नहीं)",
            hg: "CRM ke liye design outline (plain text, chalane ko kuchh nahi)"
          },
          lang: "text",
          src: "DESIGN: customer-care ticket system (about 45 minutes)\n\n1 Clarify (5 min)\n  Functional    : customers raise tickets by app or WhatsApp; an agent is assigned; status can be tracked\n  Non-functional: 2 million customers, ticket view under 300 ms, no ticket lost, 99.9% available\n  Out of scope  : billing, agent salary, analytics dashboards\n2 Estimate (5 min)    : about 100,000 tickets a day = 1 write/s; reads about 70/s at peak -> one database is enough\n3 API (5 min)         : POST /tickets (Idempotency-Key), GET /tickets/{id}, PATCH /tickets/{id}/status\n4 Data (5 min)        : Customer 1:N SupportTicket; read by id and by customer; SQL fits\n5 High-level (10 min) : Client -> load balancer -> Ticket API (stateless) -> SQL + Redis cache; SMS goes through a queue\n6 Deep dives (10 min) : cache-aside for reads; queue + retry for SMS; shard by customer id when one database is too small\n7 Wrap up (5 min)     : trade-offs, what breaks (cache down, SMS provider down), how we detect it, what we build next",
          check: "none"
        }
      ]
    },
    {
      id: "estimates",
      depth: "short",
      title: {
        en: "Back-of-envelope estimates",
        hi: "Back-of-envelope estimates (मोटा हिसाब)",
        hg: "Back-of-envelope estimates (mota hisaab)"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 1 gave you the framework; step 2 is the estimate. Here we do that step for the CRM with a small C# program, so the numbers decide the design instead of guesses.</p>",
          hi: "<p>पाठ 1 में framework मिला; step 2 estimate है। यहाँ CRM के लिए वही step एक छोटे C# program से करते हैं, ताकि design अंदाज़ों से नहीं, numbers से तय हो।</p>",
          hg: "<p>Lesson 1 mein framework mila; step 2 estimate hai. Yahan CRM ke liye wahi step ek chhote C# program se karte hain, taaki design andazon se nahi, numbers se tay ho.</p>"
        },
        what: {
          en: "<p>A <b>back-of-envelope estimate</b> is a quick, rounded calculation of load and size: requests per second (QPS) and storage. You write your <b>assumptions</b> first, then compute from them.</p>",
          hi: "<p><b>Back-of-envelope estimate</b> load और size का तेज़, round किया हुआ हिसाब है: requests per second (QPS) और storage। पहले अपने <b>assumptions</b> लिखते हैं, फिर उन्हीं से हिसाब करते हैं।</p>",
          hg: "<p><b>Back-of-envelope estimate</b> load aur size ka tez, round kiya hua hisaab hai: requests per second (QPS) aur storage. Pehle apne <b>assumptions</b> likhte hain, phir unhi se hisaab karte hain.</p>"
        },
        why: {
          en: "<p>The estimate answers real questions: one database or many? Is a cache needed? Is sharding needed? \"1 million requests a day\" sounds big but is only about 12 per second.</p>",
          hi: "<p>Estimate असली सवालों का जवाब देता है: एक database या कई? Cache चाहिए? Sharding चाहिए? \"रोज़ 10 लाख requests\" बड़ा सुनाई देता है, पर यह सिर्फ़ लगभग 12 प्रति सेकंड है।</p>",
          hg: "<p>Estimate asli sawaalon ka jawab deta hai: ek database ya kai? Cache chahiye? Sharding chahiye? \"Roz 10 lakh requests\" bada sunayi deta hai, par ye sirf lagbhag 12 prati second hai.</p>"
        },
        analogy: {
          en: "<p>A kirana owner before Diwali does not count every sweet box. He thinks: \"last year about 200 customers a day, a bit more this year, 2 boxes each, so stock about 500\". Rough, quick, good enough to decide.</p>",
          hi: "<p>दिवाली से पहले किराना दुकानदार हर मिठाई का डिब्बा नहीं गिनता। वह सोचता है: \"पिछले साल रोज़ लगभग 200 customers, इस साल थोड़े ज़्यादा, हर एक को 2 डिब्बे, तो stock लगभग 500\"। मोटा, तेज़, फ़ैसले के लिए काफ़ी।</p>",
          hg: "<p>Diwali se pehle kirana dukandaar har mithai ka dibba nahi ginta. Woh sochta hai: \"pichhle saal roz lagbhag 200 customers, is saal thode zyada, har ek ko 2 dibbe, to stock lagbhag 500\". Mota, tez, faisle ke liye kaafi.</p>"
        },
        focus: {
          caption: {
            en: "The formulas to remember",
            hi: "याद रखने वाले formulas",
            hg: "Yaad rakhne wale formulas"
          },
          lang: "text",
          check: "none",
          src: "QPS      = requests per day / 86,400        (1 million a day is about 12 per second)\nPeak     = average x 2 to 3                 (say which factor you chose)\nStorage  = records x bytes x retention x copies"
        },
        lines: [
          {
            code: "var a = new Assumptions(Customers: 2_000_000, TicketPercentPerDay: 5, ViewsPerTicket: 20,",
            note: {
              en: "Assumptions are <b>named inputs</b>: 2 million customers, 5% raise a ticket each day, each ticket is viewed about 20 times. In the interview this is a small table on the whiteboard.",
              hi: "Assumptions <b>नाम वाले inputs</b> हैं: 20 लाख customers, रोज़ 5% ticket खोलते हैं, हर ticket लगभग 20 बार देखा जाता है। Interview में यह whiteboard पर एक छोटी table होती है।",
              hg: "Assumptions <b>naam wale inputs</b> hain: 20 lakh customers, roz 5% ticket kholte hain, har ticket lagbhag 20 baar dekha jaata hai. Interview mein ye whiteboard par ek chhoti table hoti hai."
            }
          },
          {
            code: "long tickets = a.Customers * a.TicketPercentPerDay / 100;",
            note: {
              en: "Multiply first, divide last, and use <code>long</code>. Dividing early loses precision with integers.",
              hi: "पहले गुणा, आख़िर में भाग, और <code>long</code> use करो। Integers में जल्दी भाग देने से precision चली जाती है।",
              hg: "Pehle guna, aakhir mein bhaag, aur <code>long</code> use karo. Integers mein jaldi bhaag dene se precision chali jaati hai."
            }
          },
          {
            code: "long peakReads = tickets * a.ViewsPerTicket * a.PeakFactor / SecondsPerDay;",
            note: {
              en: "Reads per day, times the peak factor, divided by 86,400 seconds. This gives 69 reads per second at peak.",
              hi: "रोज़ की reads, गुणा peak factor, भाग 86,400 seconds। इससे peak पर 69 reads प्रति सेकंड आते हैं।",
              hg: "Roz ki reads, guna peak factor, bhaag 86,400 seconds. Isse peak par 69 reads prati second aate hain."
            }
          },
          {
            code: "long bytes = tickets * a.BytesPerTicket * a.RetentionDays * a.Copies;",
            note: {
              en: "Storage = records x size x retention x copies. About 4.4 x 10<sup>11</sup> bytes would overflow <code>int</code>; <code>long</code> holds it.",
              hi: "Storage = records x size x retention x copies। लगभग 4.4 x 10<sup>11</sup> bytes <code>int</code> में नहीं समाएँगे; <code>long</code> में समा जाते हैं।",
              hg: "Storage = records x size x retention x copies. Lagbhag 4.4 x 10<sup>11</sup> bytes <code>int</code> mein nahi samayenge; <code>long</code> mein sama jaate hain."
            }
          },
          {
            code: "Console.WriteLine(e.PeakReadsPerSecond < 1_000",
            note: {
              en: "Turn numbers into a <b>decision</b>. A few dozen reads per second is easy for one database plus a cache, so no sharding yet.",
              hi: "Numbers को <b>फ़ैसले</b> में बदलो। कुछ दर्जन reads प्रति सेकंड एक database और cache के लिए आसान हैं, इसलिए अभी sharding नहीं।",
              hg: "Numbers ko <b>faisle</b> mein badlo. Kuchh darjan reads prati second ek database aur cache ke liye aasaan hain, isliye abhi sharding nahi."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Hiding assumptions. A wrong assumption said aloud is easy to correct; a hidden one ruins the whole design.</li><li>Rounding too early: dividing before multiplying, or using <code>int</code> for big sizes.</li><li>Quoting exact digits. \"About 70 per second\" is better than \"69.4\"; round at the end and say the units (GB means billion bytes).</li></ul>",
          hi: "<ul><li>Assumptions छिपाना। ज़ोर से बोली हुई ग़लत assumption आसानी से ठीक हो जाती है; छिपी हुई पूरा design बिगाड़ देती है।</li><li>जल्दी round करना: गुणा से पहले भाग देना, या बड़े sizes के लिए <code>int</code> लेना।</li><li>बिल्कुल सटीक digits बोलना। \"लगभग 70 प्रति सेकंड\" \"69.4\" से बेहतर है; आख़िर में round करो और units बताओ (GB यानी अरब bytes)।</li></ul>",
          hg: "<ul><li>Assumptions chhupana. Zor se boli hui galat assumption aasaani se theek ho jaati hai; chhupi hui poora design bigaad deti hai.</li><li>Jaldi round karna: guna se pehle bhaag dena, ya bade sizes ke liye <code>int</code> lena.</li><li>Bilkul sateek digits bolna. \"Lagbhag 70 prati second\" \"69.4\" se behtar hai; aakhir mein round karo aur units batao (GB yaani arab bytes).</li></ul>"
        },
        whenToUse: {
          en: "<p>Use it at step 2 of every design, and again whenever a requirement changes. Do not bring calculator precision to the interview: a rounded figure with a stated assumption beats exact digits.</p>",
          hi: "<p>हर design के step 2 में इसे use करो, और जब भी कोई requirement बदले तब फिर से। Interview में calculator जैसी precision मत लाओ: बताई हुई assumption के साथ round किया figure सटीक digits से बेहतर है।</p>",
          hg: "<p>Har design ke step 2 mein ise use karo, aur jab bhi koi requirement badle tab phir se. Interview mein calculator jaisi precision mat lao: batayi hui assumption ke saath round kiya figure sateek digits se behtar hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>The CRM grows 50 times (100 million customers). Compute the peak reads per second for today and for the grown CRM, and print the verdict.</p>",
            hi: "<p>CRM 50 गुना बढ़ जाता है (10 करोड़ customers)। आज और बढ़े हुए CRM के लिए peak reads प्रति सेकंड निकालो और verdict print करो।</p>",
            hg: "<p>CRM 50 guna badh jaata hai (10 crore customers). Aaj aur badhe hue CRM ke liye peak reads prati second nikaalo aur verdict print karo.</p>"
          },
          hint: {
            en: "<p>Use a <code>with</code> expression on the record: <code>now with { Customers = ... }</code>. Only one input changes.</p>",
            hi: "<p>Record पर <code>with</code> expression use करो: <code>now with { Customers = ... }</code>। सिर्फ़ एक input बदलता है।</p>",
            hg: "<p>Record par <code>with</code> expression use karo: <code>now with { Customers = ... }</code>. Sirf ek input badalta hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: change one input",
              hi: "हल: एक input बदलो",
              hg: "Solution: ek input badlo"
            },
            src: "// What if the CRM grows 50 times? Same formulas, new input.\nvar now = new Assumptions(2_000_000, 5, 20, 3);\nvar grown = now with { Customers = now.Customers * 50 };\n\nConsole.WriteLine($\"today : {Peak(now)} reads/s at peak\");\nConsole.WriteLine($\"grown : {Peak(grown)} reads/s at peak\");\nConsole.WriteLine(Peak(grown) < 1_000 ? \"one database is fine\" : \"add read replicas and a cache\");\n\nstatic long Peak(Assumptions a)\n{\n    long tickets = a.Customers * a.TicketPercentPerDay / 100;\n    return tickets * a.ViewsPerTicket * a.PeakFactor / 86_400;\n}\n\nrecord Assumptions(long Customers, int TicketPercentPerDay, int ViewsPerTicket, int PeakFactor);",
            check: "run",
            expected: "today : 69 reads/s at peak\ngrown : 3472 reads/s at peak\nadd read replicas and a cache"
          }
        },
        quiz: {
          q: {
            en: "1 million requests a day is about how many requests per second on average?",
            hi: "रोज़ 10 लाख requests का औसत लगभग कितना प्रति सेकंड है?",
            hg: "Roz 10 lakh requests ka average lagbhag kitna prati second hai?"
          },
          options: [
            {
              en: "About 1,200",
              hi: "लगभग 1,200",
              hg: "Lagbhag 1,200"
            },
            {
              en: "About 12",
              hi: "लगभग 12",
              hg: "Lagbhag 12"
            },
            {
              en: "About 120,000",
              hi: "लगभग 1,20,000",
              hg: "Lagbhag 1,20,000"
            },
            {
              en: "About 1 million",
              hi: "लगभग 10 लाख",
              hg: "Lagbhag 10 lakh"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>1,000,000 / 86,400 is about 11.6, so about 12 per second. Most \"big\" daily numbers turn out small per second.</p>",
            hi: "<p>1,000,000 / 86,400 लगभग 11.6 है, यानी लगभग 12 प्रति सेकंड। रोज़ के ज़्यादातर \"बड़े\" numbers प्रति सेकंड में छोटे निकलते हैं।</p>",
            hg: "<p>1,000,000 / 86,400 lagbhag 11.6 hai, yaani lagbhag 12 prati second. Roz ke zyadatar \"bade\" numbers prati second mein chhote nikalte hain.</p>"
          }
        },
        recap: {
          en: "<ul><li>Write assumptions first; compute QPS = per day / 86,400 and peak = 2 to 3 times average.</li><li>Storage = records x size x retention x copies; multiply first, divide last, use <code>long</code>.</li><li>End with a decision (one database or more), and round at the end.</li></ul>",
          hi: "<ul><li>पहले assumptions लिखो; QPS = रोज़ का / 86,400 और peak = average का 2 से 3 गुना।</li><li>Storage = records x size x retention x copies; पहले गुणा, आख़िर में भाग, <code>long</code> लो।</li><li>अंत में फ़ैसला (एक database या ज़्यादा), और round आख़िर में करो।</li></ul>",
          hg: "<ul><li>Pehle assumptions likho; QPS = roz ka / 86,400 aur peak = average ka 2 se 3 guna.</li><li>Storage = records x size x retention x copies; pehle guna, aakhir mein bhaag, <code>long</code> lo.</li><li>Ant mein faisla (ek database ya zyada), aur round aakhir mein karo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "CRM estimate calculator",
            hi: "CRM का estimate calculator",
            hg: "CRM ka estimate calculator"
          },
          src: "// Envelope maths for the CRM. Assumptions are named inputs you say aloud, not facts.\nvar a = new Assumptions(Customers: 2_000_000, TicketPercentPerDay: 5, ViewsPerTicket: 20,\n                        PeakFactor: 3, BytesPerTicket: 2_000, RetentionDays: 730, Copies: 3);\nvar e = Estimate.From(a);\n\nConsole.WriteLine($\"tickets/day    : {e.TicketsPerDay}\");\nConsole.WriteLine($\"writes/s avg   : {e.WritesPerSecond}\");\nConsole.WriteLine($\"reads/s peak   : {e.PeakReadsPerSecond}\");\nConsole.WriteLine($\"storage (GB)   : {e.StorageGb}\");\nConsole.WriteLine(e.PeakReadsPerSecond < 1_000\n    ? \"verdict: one database + a cache is enough, no sharding yet\"\n    : \"verdict: plan read replicas and partitioning early\");\n\nrecord Assumptions(long Customers, int TicketPercentPerDay, int ViewsPerTicket,\n                   int PeakFactor, int BytesPerTicket, int RetentionDays, int Copies);\n\nrecord Estimate(long TicketsPerDay, long WritesPerSecond, long PeakReadsPerSecond, long StorageGb)\n{\n    private const long SecondsPerDay = 86_400;\n\n    public static Estimate From(Assumptions a)\n    {\n        long tickets = a.Customers * a.TicketPercentPerDay / 100;   // multiply first, divide last\n        long peakReads = tickets * a.ViewsPerTicket * a.PeakFactor / SecondsPerDay;\n        long bytes = tickets * a.BytesPerTicket * a.RetentionDays * a.Copies;\n        return new Estimate(tickets, tickets / SecondsPerDay, peakReads, bytes / 1_000_000_000);\n    }\n}",
          check: "run",
          expected: "tickets/day    : 100000\nwrites/s avg   : 1\nreads/s peak   : 69\nstorage (GB)   : 438\nverdict: one database + a cache is enough, no sharding yet"
        }
      ]
    },
    {
      id: "cache-aside",
      depth: "short",
      title: {
        en: "Cache-aside: read the cache, else load and fill",
        hi: "Cache-aside: पहले cache, नहीं तो load करके भरो",
        hg: "Cache-aside: pehle cache, nahi to load karke bharo"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 2 showed that ticket reads are the busiest part: about 70 reads per second at peak against 1 write per second. Reads dominate, so the first block we add is a cache in front of the database.</p>",
          hi: "<p>पाठ 2 में दिखा कि ticket reads सबसे ज़्यादा हैं: peak पर लगभग 70 reads प्रति सेकंड और 1 write प्रति सेकंड। Reads हावी हैं, इसलिए पहला block जो जोड़ते हैं वह database के आगे cache है।</p>",
          hg: "<p>Lesson 2 mein dikha ki ticket reads sabse zyada hain: peak par lagbhag 70 reads prati second aur 1 write prati second. Reads haavi hain, isliye pehla block jo jodte hain woh database ke aage cache hai.</p>"
        },
        what: {
          en: "<p><b>Cache-aside</b> (lazy loading): the application reads the cache first. On a <b>hit</b> it returns the cached value. On a <b>miss</b> it reads the database, puts the value in the cache with a <b>TTL</b> (time to live), and returns it.</p>",
          hi: "<p><b>Cache-aside</b> (lazy loading): application पहले cache पढ़ती है। <b>Hit</b> पर cached value लौटा देती है। <b>Miss</b> पर database पढ़ती है, value को <b>TTL</b> (time to live, कितनी देर तक जीना) के साथ cache में रखती है, और लौटाती है।</p>",
          hg: "<p><b>Cache-aside</b> (lazy loading): application pehle cache padhti hai. <b>Hit</b> par cached value lauta deti hai. <b>Miss</b> par database padhti hai, value ko <b>TTL</b> (time to live, kitni der tak jeena) ke saath cache mein rakhti hai, aur lautati hai.</p>"
        },
        why: {
          en: "<p>An in-memory cache read takes microseconds and a Redis read well under a millisecond; a database query takes milliseconds. If most reads hit the cache, the database stays calm and the user gets answers faster. The same ticket is often opened many times in a day.</p>",
          hi: "<p>In-memory cache read में microseconds लगते हैं और Redis read एक millisecond से काफ़ी कम; database query में milliseconds। ज़्यादातर reads cache से मिलें तो database शांत रहता है और user को जवाब जल्दी मिलता है। एक ही ticket दिन में कई बार खुलता है।</p>",
          hg: "<p>In-memory cache read mein microseconds lagte hain aur Redis read ek millisecond se kaafi kam; database query mein milliseconds. Zyadatar reads cache se milein to database shaant rehta hai aur user ko jawab jaldi milta hai. Ek hi ticket din mein kai baar khulta hai.</p>"
        },
        analogy: {
          en: "<p>A chai stall keeps a flask of hot chai for the usual orders. If the flask has chai (hit), serve at once. If it is empty (miss), brew a fresh batch, fill the flask, and serve. After an hour, throw away the old chai (TTL).</p>",
          hi: "<p>चाय की दुकान रोज़ के orders के लिए flask में गरम चाय रखती है। Flask में चाय है (hit) तो तुरंत दो। खाली है (miss) तो नई चाय बनाओ, flask भरो, और दो। एक घंटे बाद पुरानी चाय फेंक दो (TTL)।</p>",
          hg: "<p>Chai ki dukaan roz ke orders ke liye flask mein garam chai rakhti hai. Flask mein chai hai (hit) to turant do. Khaali hai (miss) to nayi chai banao, flask bharo, aur do. Ek ghante baad purani chai phenk do (TTL).</p>"
        },
        lines: [
          {
            code: "if (_items.TryGetValue(id, out var e) && e.ExpiresAt > clock.Seconds) { Hits++; return e.Value; }",
            note: {
              en: "The <b>hit</b> path: the item is in the cache and not expired, so return it and count a hit.",
              hi: "<b>Hit</b> का रास्ता: item cache में है और expire नहीं हुआ, तो लौटा दो और hit गिन लो।",
              hg: "<b>Hit</b> ka raasta: item cache mein hai aur expire nahi hua, to lauta do aur hit gin lo."
            }
          },
          {
            code: "var ticket = load(id);",
            note: {
              en: "The <b>miss</b> path: go to the database (the <code>load</code> function). Only misses cost a database read.",
              hi: "<b>Miss</b> का रास्ता: database पर जाओ (<code>load</code> function)। Database read सिर्फ़ misses में लगता है।",
              hg: "<b>Miss</b> ka raasta: database par jao (<code>load</code> function). Database read sirf misses mein lagta hai."
            }
          },
          {
            code: "_items[id] = (ticket, clock.Seconds + ttlSeconds);",
            note: {
              en: "Fill the cache and stamp an expiry time. The TTL is a safety net: even if a delete is missed, the value cannot stay stale forever.",
              hi: "Cache भरो और expiry का समय लगाओ। TTL एक safety net है: delete छूट भी जाए तो value हमेशा के लिए पुरानी नहीं रहेगी।",
              hg: "Cache bharo aur expiry ka samay lagao. TTL ek safety net hai: delete chhoot bhi jaye to value hamesha ke liye purani nahi rahegi."
            }
          },
          {
            code: "db.Update(501, \"Closed\");",
            note: {
              en: "The <b>write</b> path, step 1: change the database first. The database is the truth.",
              hi: "<b>Write</b> का रास्ता, step 1: पहले database बदलो। Database ही सच है।",
              hg: "<b>Write</b> ka raasta, step 1: pehle database badlo. Database hi sach hai."
            }
          },
          {
            code: "cache.Remove(501);",
            note: {
              en: "Step 2: <b>delete</b> the cached copy (do not update it). The next read misses and loads the fresh value, so it prints <code>Closed</code>.",
              hi: "Step 2: cached copy को <b>delete</b> करो (update नहीं)। अगली read miss होगी और नई value load करेगी, इसलिए <code>Closed</code> print होता है।",
              hg: "Step 2: cached copy ko <b>delete</b> karo (update nahi). Agli read miss hogi aur nayi value load karegi, isliye <code>Closed</code> print hota hai."
            }
          },
          {
            code: "clock.Seconds += 61;",
            note: {
              en: "Time moves past the 60-second TTL, so the entry for ticket 502 has expired and the next read is a miss again.",
              hi: "समय 60 सेकंड के TTL से आगे निकल गया, इसलिए ticket 502 की entry expire हो गई और अगली read फिर miss है।",
              hg: "Samay 60 second ke TTL se aage nikal gaya, isliye ticket 502 ki entry expire ho gayi aur agli read phir miss hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Updating the cache with a value after a write. Two writers can race and leave the old value. Delete the key and let the next read refill it.</li><li>No TTL. A missed invalidation then stays wrong forever.</li><li>Forgetting the <b>stampede</b>: when a hot key expires, thousands of requests miss together and hit the database. Add a lock per key, or refresh the value a little before it expires (Day 13).</li></ul>",
          hi: "<ul><li>Write के बाद cache में नई value डालना। दो writers आपस में टकरा सकते हैं और पुरानी value रह सकती है। Key delete करो और अगली read को दोबारा भरने दो।</li><li>TTL न रखना। तब छूटी हुई invalidation हमेशा ग़लत रहती है।</li><li><b>Stampede</b> भूल जाना: hot key expire हो तो हज़ारों requests एक साथ miss होकर database पर टूट पड़ती हैं। Key पर lock लगाओ, या expire से थोड़ा पहले value refresh करो (Day 13)।</li></ul>",
          hg: "<ul><li>Write ke baad cache mein nayi value daalna. Do writers aapas mein takra sakte hain aur purani value reh sakti hai. Key delete karo aur agli read ko dobara bharne do.</li><li>TTL na rakhna. Tab chhooti hui invalidation hamesha galat rehti hai.</li><li><b>Stampede</b> bhool jaana: hot key expire ho to hazaaron requests ek saath miss hokar database par toot padti hain. Key par lock lagao, ya expire se thoda pehle value refresh karo (Day 13).</li></ul>"
        },
        whenToUse: {
          en: "<p>Use it for data that is read much more than written and can be a little stale (ticket status, customer profile, short links). Do not cache data that must always be exact, such as an account balance used to approve a payment.</p>",
          hi: "<p>उस data के लिए use करो जो लिखा कम और पढ़ा बहुत जाता है और थोड़ा पुराना चल सकता है (ticket status, customer profile, short links)। जो data हमेशा सटीक चाहिए, जैसे payment approve करने वाला account balance, उसे cache मत करो।</p>",
          hg: "<p>Us data ke liye use karo jo likha kam aur padha bahut jaata hai aur thoda purana chal sakta hai (ticket status, customer profile, short links). Jo data hamesha sateek chahiye, jaise payment approve karne wala account balance, use cache mat karo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Read tickets 501 and 502 alternately ten times with a simple dictionary cache, and print hits, misses and the hit ratio as a percentage.</p>",
            hi: "<p>एक simple dictionary cache से tickets 501 और 502 को बारी-बारी दस बार पढ़ो, और hits, misses और hit ratio percentage में print करो।</p>",
            hg: "<p>Ek simple dictionary cache se tickets 501 aur 502 ko baari-baari das baar padho, aur hits, misses aur hit ratio percentage mein print karo.</p>"
          },
          hint: {
            en: "<p>The first read of each id is a miss; every other read is a hit. Ratio = hits x 100 / total reads.</p>",
            hi: "<p>हर id की पहली read miss है; बाकी हर read hit है। Ratio = hits x 100 / कुल reads।</p>",
            hg: "<p>Har id ki pehli read miss hai; baaki har read hit hai. Ratio = hits x 100 / kul reads.</p>"
          },
          solution: {
            caption: {
              en: "Solution: counting the hit ratio",
              hi: "हल: hit ratio गिनना",
              hg: "Solution: hit ratio ginna"
            },
            src: "// Hit ratio: read the same two tickets ten times.\nvar cache = new Dictionary<int, string>();\nint hits = 0, misses = 0;\n\nfor (var i = 0; i < 10; i++)\n{\n    var id = 501 + i % 2;                       // 501, 502, 501, 502 ...\n    if (cache.ContainsKey(id)) hits++;\n    else { misses++; cache[id] = \"loaded from database\"; }\n}\nConsole.WriteLine($\"hits={hits} misses={misses} hit ratio={hits * 100 / (hits + misses)}%\");",
            check: "run",
            expected: "hits=8 misses=2 hit ratio=80%"
          }
        },
        quiz: {
          q: {
            en: "A ticket is updated in the database. What is the safest cache-aside step after the update?",
            hi: "Database में ticket update हुआ। Update के बाद सबसे सुरक्षित cache-aside step क्या है?",
            hg: "Database mein ticket update hua. Update ke baad sabse surakshit cache-aside step kya hai?"
          },
          options: [
            {
              en: "Do nothing and rely on the TTL only",
              hi: "कुछ मत करो, सिर्फ़ TTL पर भरोसा करो",
              hg: "Kuchh mat karo, sirf TTL par bharosa karo"
            },
            {
              en: "Write the new value into the cache",
              hi: "Cache में नई value लिखो",
              hg: "Cache mein nayi value likho"
            },
            {
              en: "Restart the cache server",
              hi: "Cache server restart करो",
              hg: "Cache server restart karo"
            },
            {
              en: "Delete the cached key",
              hi: "Cached key को delete करो",
              hg: "Cached key ko delete karo"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>Delete the key; the next read misses and loads the fresh value. Writing a value can race with another writer. Relying only on TTL leaves users with stale data until it expires. Keep the TTL as a safety net as well.</p>",
            hi: "<p>Key delete करो; अगली read miss होगी और नई value load करेगी। Value लिखना दूसरे writer से टकरा सकता है। सिर्फ़ TTL पर भरोसा करने से expire होने तक users को पुराना data दिखता है। TTL को safety net की तरह भी रखो।</p>",
            hg: "<p>Key delete karo; agli read miss hogi aur nayi value load karegi. Value likhna doosre writer se takra sakta hai. Sirf TTL par bharosa karne se expire hone tak users ko purana data dikhta hai. TTL ko safety net ki tarah bhi rakho.</p>"
          }
        },
        recap: {
          en: "<ul><li>Read: cache first; on a miss load from the database and fill the cache with a TTL.</li><li>Write: update the database, then delete the cached key; keep the TTL as a safety net.</li><li>Watch the hit ratio, and plan for a stampede on hot keys.</li></ul>",
          hi: "<ul><li>Read: पहले cache; miss पर database से load करो और TTL के साथ cache भरो।</li><li>Write: database update करो, फिर cached key delete करो; TTL को safety net रखो।</li><li>Hit ratio देखते रहो, और hot keys पर stampede के लिए तैयार रहो।</li></ul>",
          hg: "<ul><li>Read: pehle cache; miss par database se load karo aur TTL ke saath cache bharo.</li><li>Write: database update karo, phir cached key delete karo; TTL ko safety net rakho.</li><li>Hit ratio dekhte raho, aur hot keys par stampede ke liye taiyaar raho.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Cache-aside with hit and miss counts",
            hi: "Hit और miss की गिनती के साथ cache-aside",
            hg: "Hit aur miss ki ginti ke saath cache-aside"
          },
          src: "// Cache-aside for ticket reads, with a fake clock so the TTL is easy to see.\nvar clock = new FakeClock();\nvar db = new TicketDb();\nvar cache = new TicketCache(clock, ttlSeconds: 60);\n\nforeach (var id in new[] { 501, 502, 501, 501, 502 })\n    Console.WriteLine($\"read {id}: {cache.Get(id, db.Load).Status}\");\n\ndb.Update(501, \"Closed\");        // write path: change the database first ...\ncache.Remove(501);               // ... then delete the cached copy\nConsole.WriteLine($\"read 501 after update: {cache.Get(501, db.Load).Status}\");\n\nclock.Seconds += 61;             // the 60 s TTL has passed\nConsole.WriteLine($\"read 502 after TTL: {cache.Get(502, db.Load).Status}\");\nConsole.WriteLine($\"hits={cache.Hits} misses={cache.Misses} database reads={db.Reads}\");\n\nrecord Ticket(int Id, string Status);\nclass FakeClock { public long Seconds; }\n\nclass TicketDb\n{\n    private readonly Dictionary<int, string> _status = new() { [501] = \"Open\", [502] = \"Assigned\" };\n    public int Reads { get; private set; }\n    public Ticket Load(int id) { Reads++; return new Ticket(id, _status[id]); }\n    public void Update(int id, string status) => _status[id] = status;\n}\n\nclass TicketCache(FakeClock clock, int ttlSeconds)\n{\n    private readonly Dictionary<int, (Ticket Value, long ExpiresAt)> _items = new();\n    public int Hits { get; private set; }\n    public int Misses { get; private set; }\n\n    public Ticket Get(int id, Func<int, Ticket> load)\n    {\n        if (_items.TryGetValue(id, out var e) && e.ExpiresAt > clock.Seconds) { Hits++; return e.Value; }\n        Misses++;\n        var ticket = load(id);                                   // miss: read the database ...\n        _items[id] = (ticket, clock.Seconds + ttlSeconds);       // ... and fill the cache with a TTL\n        return ticket;\n    }\n\n    public void Remove(int id) => _items.Remove(id);\n}",
          check: "run",
          expected: "read 501: Open\nread 502: Assigned\nread 501: Open\nread 501: Open\nread 502: Assigned\nread 501 after update: Closed\nread 502 after TTL: Assigned\nhits=3 misses=4 database reads=4"
        }
      ]
    },
    {
      id: "shard-key",
      depth: "short",
      title: {
        en: "Sharding by customer id and consistent hashing",
        hi: "Customer id से sharding और consistent hashing",
        hg: "Customer id se sharding aur consistent hashing"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 3 took pressure off the database for reads. Writes still all go to one database. When the lesson 2 numbers grow too big for one machine, the next step is to split the data across several databases. That is sharding.</p>",
          hi: "<p>पाठ 3 ने reads के लिए database का बोझ घटाया। Writes अब भी एक ही database में जाती हैं। जब पाठ 2 के numbers एक machine के लिए बहुत बड़े हो जाएँ, तो अगला क़दम data को कई databases में बाँटना है। इसी को sharding कहते हैं।</p>",
          hg: "<p>Lesson 3 ne reads ke liye database ka bojh ghataya. Writes ab bhi ek hi database mein jaati hain. Jab lesson 2 ke numbers ek machine ke liye bahut bade ho jayein, to agla kadam data ko kai databases mein baantna hai. Isi ko sharding kehte hain.</p>"
        },
        what: {
          en: "<p><b>Sharding</b> splits data over several databases (<b>shards</b>) by a <b>shard key</b>. <b>Consistent hashing</b> is a way to map a key to a shard so that adding a shard moves only a small share of the keys.</p>",
          hi: "<p><b>Sharding</b> data को एक <b>shard key</b> से कई databases (<b>shards</b>) में बाँटती है। <b>Consistent hashing</b> key को shard से जोड़ने का तरीका है, जिसमें नया shard जोड़ने पर keys का सिर्फ़ छोटा हिस्सा हिलता है।</p>",
          hg: "<p><b>Sharding</b> data ko ek <b>shard key</b> se kai databases (<b>shards</b>) mein baantti hai. <b>Consistent hashing</b> key ko shard se jodne ka tareeka hai, jisme naya shard jodne par keys ka sirf chhota hissa hilta hai.</p>"
        },
        why: {
          en: "<p>A good shard key sends one customer's tickets to one shard, so \"all tickets of Asha\" is a single-shard query. With plain <code>hash % N</code>, adding a fourth shard moves about three quarters of all keys, which means a huge data migration. Consistent hashing moves only about one quarter.</p>",
          hi: "<p>अच्छी shard key एक customer के सारे tickets एक ही shard में भेजती है, इसलिए \"Asha के सारे tickets\" एक ही shard की query बनती है। सादे <code>hash % N</code> में चौथा shard जोड़ने पर लगभग तीन-चौथाई keys हिल जाती हैं, यानी बहुत बड़ी data migration। Consistent hashing में सिर्फ़ लगभग एक-चौथाई हिलती हैं।</p>",
          hg: "<p>Achhi shard key ek customer ke saare tickets ek hi shard mein bhejti hai, isliye \"Asha ke saare tickets\" ek hi shard ki query banti hai. Saade <code>hash % N</code> mein chautha shard jodne par lagbhag teen-chauthai keys hil jaati hain, yaani bahut badi data migration. Consistent hashing mein sirf lagbhag ek-chauthai hilti hain.</p>"
        },
        analogy: {
          en: "<p>Think of a circular railway line with stations. Each shard owns several stations on the circle. A passenger (key) boards at the next station clockwise from where he lands. A new station only takes the passengers just before it; everyone else keeps their station.</p>",
          hi: "<p>एक गोल railway line सोचो जिस पर stations हैं। हर shard के पास circle पर कई stations हैं। यात्री (key) जहाँ गिरता है, वहाँ से घड़ी की दिशा में अगले station पर चढ़ता है। नया station सिर्फ़ अपने ठीक पहले के यात्रियों को लेता है; बाकी सबका station वही रहता है।</p>",
          hg: "<p>Ek gol railway line socho jis par stations hain. Har shard ke paas circle par kai stations hain. Yaatri (key) jahan girta hai, wahan se ghadi ki disha mein agle station par chadhta hai. Naya station sirf apne theek pehle ke yaatriyon ko leta hai; baaki sabka station wahi rehta hai.</p>"
        },
        lines: [
          {
            code: "foreach (var t in tickets)",
            note: {
              en: "Each ticket is routed by its <b>customer</b> (the name here, the customer id in a real system), not by its own ticket id. That is the shard key choice.",
              hi: "हर ticket अपने <b>customer</b> से route होता है (यहाँ name, असली system में customer id), अपनी ticket id से नहीं। यही shard key का चुनाव है।",
              hg: "Har ticket apne <b>customer</b> se route hota hai (yahan name, asli system mein customer id), apni ticket id se nahi. Yahi shard key ka chunav hai."
            }
          },
          {
            code: "var bigger = ring.With(\"shard-d\");",
            note: {
              en: "A topology change builds a <b>new ring</b>; the old ring never changes. Readers never see a half-built ring.",
              hi: "Topology बदलने पर <b>नया ring</b> बनता है; पुराना ring कभी नहीं बदलता। Readers को आधा बना ring कभी नहीं दिखता।",
              hg: "Topology badalne par <b>naya ring</b> banta hai; purana ring kabhi nahi badalta. Readers ko aadha bana ring kabhi nahi dikhta."
            }
          },
          {
            code: "var movedModulo = customers.Count(c => HashRing.Hash(c) % 3 != HashRing.Hash(c) % 4);",
            note: {
              en: "The naive way: <code>hash % N</code>. Going from 3 to 4 shards changes the answer for most keys (751 of 1000).",
              hi: "सीधा तरीका: <code>hash % N</code>। 3 से 4 shards होने पर ज़्यादातर keys का जवाब बदल जाता है (1000 में से 751)।",
              hg: "Seedha tareeka: <code>hash % N</code>. 3 se 4 shards hone par zyadatar keys ka jawab badal jaata hai (1000 mein se 751)."
            }
          },
          {
            code: "var index = Array.BinarySearch(_points, Hash(key));",
            note: {
              en: "Find the first point on the ring at or after the key's hash. Binary search over a sorted array is O(log n).",
              hi: "Key के hash के बराबर या उसके बाद वाला पहला point ring पर ढूँढो। Sorted array पर binary search O(log n) है।",
              hg: "Key ke hash ke barabar ya uske baad wala pehla point ring par dhundho. Sorted array par binary search O(log n) hai."
            }
          },
          {
            code: "for (var i = 0; i < replicas; i++) list.Add((Hash(node + \"#\" + i), node));",
            note: {
              en: "Each shard gets many points (<b>virtual nodes</b>, 50 here) so the load spreads more evenly over the circle.",
              hi: "हर shard को कई points (<b>virtual nodes</b>, यहाँ 50) मिलते हैं ताकि load circle पर ज़्यादा बराबर बँटे।",
              hg: "Har shard ko kai points (<b>virtual nodes</b>, yahan 50) milte hain taaki load circle par zyada barabar bante."
            }
          },
          {
            code: "public static uint Hash(string text)",
            note: {
              en: "The hash must be <b>stable</b> on every machine. <code>string.GetHashCode()</code> is random per process in .NET, so two servers would disagree.",
              hi: "Hash हर machine पर <b>stable</b> होना चाहिए। .NET में <code>string.GetHashCode()</code> हर process में अलग आता है, इसलिए दो servers एक ही key के लिए अलग shard चुनते।",
              hg: "Hash har machine par <b>stable</b> hona chahiye. .NET mein <code>string.GetHashCode()</code> har process mein alag aata hai, isliye do servers ek hi key ke liye alag shard chunte."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Range-sharding by a sequential ticket id: new tickets all land on the newest shard (a <b>hotspot</b>), and one customer's tickets are scattered. Pick a key with many values, even traffic, and the main query in it.</li><li>Using <code>string.GetHashCode()</code> for routing: it is random per process, so servers disagree.</li><li>Thinking that moving a key is free. The data must be copied, reads switched, then the old copy deleted: plan it as a migration. Also, queries across shards and joins become hard.</li></ul>",
          hi: "<ul><li>Sequential ticket id की ranges से sharding: नए tickets सब सबसे नए shard पर गिरते हैं (<b>hotspot</b>), और एक customer के tickets बिखर जाते हैं। ऐसी key चुनो जिसमें कई values हों, traffic बराबर हो, और main query उसी पर हो।</li><li>Routing के लिए <code>string.GetHashCode()</code> लेना: यह हर process में random है, इसलिए servers अलग-अलग shard चुनते हैं।</li><li>सोचना कि key को हिलाना मुफ़्त है। Data copy करना पड़ता है, reads switch करनी पड़ती हैं, फिर पुरानी copy delete: इसे migration की तरह plan करो। साथ ही shards के आर-पार queries और joins मुश्किल हो जाते हैं।</li></ul>",
          hg: "<ul><li>Sequential ticket id ki ranges se sharding: naye tickets sab sabse naye shard par girte hain (<b>hotspot</b>), aur ek customer ke tickets bikhar jaate hain. Aisi key chuno jisme kai values hon, traffic barabar ho, aur main query usi par ho.</li><li>Routing ke liye <code>string.GetHashCode()</code> lena: ye har process mein random hai, isliye servers alag-alag shard chunte hain.</li><li>Sochna ki key ko hilana muft hai. Data copy karna padta hai, reads switch karni padti hain, phir purani copy delete: ise migration ki tarah plan karo. Saath hi shards ke aar-paar queries aur joins mushkil ho jaate hain.</li></ul>"
        },
        whenToUse: {
          en: "<p>Shard late. First try indexes, a cache and read replicas (the Deep Dive lists the order). Shard when write volume or data size no longer fits one machine. Use consistent hashing when nodes come and go; with a fixed number of partitions (like Redis Cluster slots) a plain mapping is enough.</p>",
          hi: "<p>Sharding देर से करो। पहले indexes, cache और read replicas आज़माओ (क्रम Deep Dive में है)। जब write volume या data size एक machine में न समाए, तब shard करो। Nodes आते-जाते हों तब consistent hashing लो; partitions की संख्या तय हो (जैसे Redis Cluster के slots) तो सादा mapping काफ़ी है।</p>",
          hg: "<p>Sharding der se karo. Pehle indexes, cache aur read replicas aazmao (kram Deep Dive mein hai). Jab write volume ya data size ek machine mein na samaye, tab shard karo. Nodes aate-jaate hon tab consistent hashing lo; partitions ki sankhya tay ho (jaise Redis Cluster ke slots) to saada mapping kaafi hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Count how many of 1000 customers each of the three shards owns, and look at how even the spread is.</p>",
            hi: "<p>गिनो कि 1000 customers में से तीनों shards में हर एक के पास कितने हैं, और देखो कि बँटवारा कितना बराबर है।</p>",
            hg: "<p>Gino ki 1000 customers mein se teeno shards mein har ek ke paas kitne hain, aur dekho ki bantwaara kitna barabar hai.</p>"
          },
          hint: {
            en: "<p>Use <code>GroupBy(ring.NodeFor)</code> on the customer ids and print each group's count.</p>",
            hi: "<p>Customer ids पर <code>GroupBy(ring.NodeFor)</code> लगाओ और हर group की गिनती print करो।</p>",
            hg: "<p>Customer ids par <code>GroupBy(ring.NodeFor)</code> lagao aur har group ki ginti print karo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: group by shard",
              hi: "हल: shard के हिसाब से group",
              hg: "Solution: shard ke hisaab se group"
            },
            src: "// Count how many of 1000 customers each shard owns: is the spread even?\nvar ring = HashRing.Create([\"shard-a\", \"shard-b\", \"shard-c\"], replicas: 50);\nvar customers = Enumerable.Range(1, 1000).Select(i => \"cust-\" + i);\n\nforeach (var g in customers.GroupBy(ring.NodeFor).OrderBy(g => g.Key))\n    Console.WriteLine($\"{g.Key}: {g.Count()} customers\");\n\nsealed class HashRing\n{\n    private readonly uint[] _points;\n    private readonly string[] _owners;\n\n    private HashRing(string[] nodes, int replicas)\n    {\n        var list = new List<(uint Hash, string Node)>();\n        foreach (var node in nodes)\n            for (var i = 0; i < replicas; i++) list.Add((Hash(node + \"#\" + i), node));\n        list.Sort((x, y) => x.Hash.CompareTo(y.Hash));\n        _points = list.Select(p => p.Hash).ToArray();\n        _owners = list.Select(p => p.Node).ToArray();\n    }\n\n    public static HashRing Create(string[] nodes, int replicas) => new(nodes, replicas);\n\n    public string NodeFor(string key)\n    {\n        var index = Array.BinarySearch(_points, Hash(key));\n        if (index < 0) index = ~index;\n        return _owners[index == _points.Length ? 0 : index];\n    }\n\n    private static uint Hash(string text)\n    {\n        uint h = 2166136261;\n        foreach (var b in System.Text.Encoding.UTF8.GetBytes(text)) { h ^= b; h *= 16777619; }\n        h ^= h >> 16; h *= 0x85ebca6b; h ^= h >> 13; h *= 0xc2b2ae35; h ^= h >> 16;\n        return h;\n    }\n}",
            check: "run",
            expected: "shard-a: 325 customers\nshard-b: 302 customers\nshard-c: 373 customers"
          }
        },
        quiz: {
          q: {
            en: "What is the main advantage of consistent hashing over hash % N when you add a shard?",
            hi: "Shard जोड़ने पर hash % N के मुक़ाबले consistent hashing का मुख्य फ़ायदा क्या है?",
            hg: "Shard jodne par hash % N ke muqable consistent hashing ka mukhya fayda kya hai?"
          },
          options: [
            {
              en: "Only a small share of keys move",
              hi: "सिर्फ़ keys का छोटा हिस्सा हिलता है",
              hg: "Sirf keys ka chhota hissa hilta hai"
            },
            {
              en: "Cross-shard joins become easy",
              hi: "Cross-shard joins आसान हो जाते हैं",
              hg: "Cross-shard joins aasaan ho jaate hain"
            },
            {
              en: "No data migration is ever needed",
              hi: "कभी data migration नहीं करनी पड़ती",
              hg: "Kabhi data migration nahi karni padti"
            },
            {
              en: "The hash needs no stable function",
              hi: "Hash के लिए stable function नहीं चाहिए",
              hg: "Hash ke liye stable function nahi chahiye"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>Only the keys that the new shard takes over move (179 of 1000 here, close to the ideal one quarter), instead of about three quarters with <code>hash % N</code>. Data for those keys still has to be migrated, joins across shards stay hard, and the hash must still be stable.</p>",
            hi: "<p>सिर्फ़ वही keys हिलती हैं जो नया shard अपने ज़िम्मे लेता है (यहाँ 1000 में से 179, ideal एक-चौथाई के पास), <code>hash % N</code> में लगभग तीन-चौथाई हिलती हैं। उन keys का data फिर भी migrate करना पड़ता है, shards के आर-पार joins मुश्किल ही रहते हैं, और hash तब भी stable होना चाहिए।</p>",
            hg: "<p>Sirf wahi keys hilti hain jo naya shard apne zimme leta hai (yahan 1000 mein se 179, ideal ek-chauthai ke paas), <code>hash % N</code> mein lagbhag teen-chauthai hilti hain. Un keys ka data phir bhi migrate karna padta hai, shards ke aar-paar joins mushkil hi rehte hain, aur hash tab bhi stable hona chahiye.</p>"
          }
        },
        recap: {
          en: "<ul><li>Shard late; pick a key with many values, even traffic and the main query in it (customer id for tickets).</li><li>Consistent hashing with virtual nodes moves only about 1/N of the keys when a shard is added.</li><li>Use a stable hash, never <code>string.GetHashCode()</code>, and plan the data move as a migration.</li></ul>",
          hi: "<ul><li>Sharding देर से करो; ऐसी key चुनो जिसमें कई values हों, traffic बराबर हो और main query उसी पर हो (tickets के लिए customer id)।</li><li>Virtual nodes वाला consistent hashing shard जोड़ने पर सिर्फ़ लगभग 1/N keys हिलाता है।</li><li>Stable hash लो, <code>string.GetHashCode()</code> कभी नहीं, और data के हिलने को migration की तरह plan करो।</li></ul>",
          hg: "<ul><li>Sharding der se karo; aisi key chuno jisme kai values hon, traffic barabar ho aur main query usi par ho (tickets ke liye customer id).</li><li>Virtual nodes wala consistent hashing shard jodne par sirf lagbhag 1/N keys hilata hai.</li><li>Stable hash lo, <code>string.GetHashCode()</code> kabhi nahi, aur data ke hilne ko migration ki tarah plan karo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Route tickets by customer id with a hash ring",
            hi: "Hash ring से tickets को customer id पर route करो",
            hg: "Hash ring se tickets ko customer id par route karo"
          },
          src: "// Sharding by customer id with a consistent-hash ring (virtual nodes, stable hash).\nvar tickets = new[] { (Id: 501, Customer: \"Asha\"), (Id: 502, Customer: \"Ravi\"), (Id: 503, Customer: \"Asha\"),\n                     (Id: 504, Customer: \"Meena\"), (Id: 505, Customer: \"Neha\"), (Id: 506, Customer: \"Ravi\") };\nvar ring = HashRing.Create([\"shard-a\", \"shard-b\", \"shard-c\"], replicas: 50);\n\nforeach (var t in tickets)\n    Console.WriteLine($\"ticket {t.Id} ({t.Customer}) -> {ring.NodeFor(t.Customer)}\");\n\nvar customers = Enumerable.Range(1, 1000).Select(i => \"cust-\" + i).ToList();\nvar bigger = ring.With(\"shard-d\");                      // topology change = build a new ring\nvar movedRing = customers.Count(c => ring.NodeFor(c) != bigger.NodeFor(c));\nvar movedModulo = customers.Count(c => HashRing.Hash(c) % 3 != HashRing.Hash(c) % 4);\nConsole.WriteLine($\"add a 4th shard, ring    : {movedRing} of 1000 customers move\");\nConsole.WriteLine($\"add a 4th shard, hash % N: {movedModulo} of 1000 customers move\");\n\nsealed class HashRing\n{\n    private readonly uint[] _points;\n    private readonly string[] _owners;\n    private readonly string[] _nodes;\n    private readonly int _replicas;\n\n    private HashRing(string[] nodes, int replicas)\n    {\n        _nodes = nodes;\n        _replicas = replicas;\n        var list = new List<(uint Hash, string Node)>();\n        foreach (var node in nodes)\n            for (var i = 0; i < replicas; i++) list.Add((Hash(node + \"#\" + i), node));\n        list.Sort((x, y) => x.Hash.CompareTo(y.Hash));\n        _points = list.Select(p => p.Hash).ToArray();\n        _owners = list.Select(p => p.Node).ToArray();\n    }\n\n    public static HashRing Create(string[] nodes, int replicas) => new(nodes, replicas);\n    public HashRing With(string node) => new([.. _nodes, node], _replicas);\n\n    public string NodeFor(string key)\n    {\n        var index = Array.BinarySearch(_points, Hash(key));\n        if (index < 0) index = ~index;                  // first point clockwise from the key\n        return _owners[index == _points.Length ? 0 : index];\n    }\n\n    // Stable across machines (string.GetHashCode() is random per process); last line mixes the bits.\n    public static uint Hash(string text)\n    {\n        uint h = 2166136261;\n        foreach (var b in System.Text.Encoding.UTF8.GetBytes(text)) { h ^= b; h *= 16777619; }\n        h ^= h >> 16; h *= 0x85ebca6b; h ^= h >> 13; h *= 0xc2b2ae35; h ^= h >> 16;\n        return h;\n    }\n}",
          check: "run",
          expected: "ticket 501 (Asha) -> shard-c\nticket 502 (Ravi) -> shard-c\nticket 503 (Asha) -> shard-c\nticket 504 (Meena) -> shard-a\nticket 505 (Neha) -> shard-c\nticket 506 (Ravi) -> shard-c\nadd a 4th shard, ring    : 179 of 1000 customers move\nadd a 4th shard, hash % N: 751 of 1000 customers move"
        }
      ]
    },
    {
      id: "short-links",
      depth: "short",
      title: {
        en: "Design 1: short links (base62 and 302)",
        hi: "Design 1: short links (base62 और 302)",
        hg: "Design 1: short links (base62 aur 302)"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lessons 2 to 4 gave you three tools: estimates, a cache and a shard key. Now we use them on the first worked design. The CRM sends an SMS saying \"track your ticket: crm.example/q0U\". A <b>URL shortener</b> makes that short code.</p>",
          hi: "<p>पाठ 2 से 4 में तीन औज़ार मिले: estimates, cache और shard key। अब इन्हें पहले worked design पर लगाते हैं। CRM एक SMS भेजता है \"अपना ticket track करो: crm.example/q0U\"। यह छोटा code <b>URL shortener</b> बनाता है।</p>",
          hg: "<p>Lessons 2 se 4 mein teen auzaar mile: estimates, cache aur shard key. Ab inhe pehle worked design par lagate hain. CRM ek SMS bhejta hai \"apna ticket track karo: crm.example/q0U\". Ye chhota code <b>URL shortener</b> banata hai.</p>"
        },
        what: {
          en: "<p>A <b>URL shortener</b> stores a long link under a short <b>code</b> and redirects anyone who opens the code. The code is made by taking a unique counter number and writing it in <b>base62</b> (digits, small letters, capital letters: 62 symbols).</p>",
          hi: "<p><b>URL shortener</b> लंबे link को एक छोटे <b>code</b> के नीचे रखता है और code खोलने वाले को redirect करता है। Code ऐसे बनता है: एक unique counter number लो और उसे <b>base62</b> में लिखो (digits, छोटे letters, बड़े letters: 62 symbols)।</p>",
          hg: "<p><b>URL shortener</b> lambe link ko ek chhote <b>code</b> ke neeche rakhta hai aur code kholne wale ko redirect karta hai. Code aise banta hai: ek unique counter number lo aur use <b>base62</b> mein likho (digits, chhote letters, bade letters: 62 symbols).</p>"
        },
        why: {
          en: "<p>Estimate first: assume 100 million new links a month and 100 reads per link. That is about 38 writes and 3,900 reads per second. Reads dominate and each record is small, so a cache (lesson 3) takes most of the load. The code is the lookup key, so it is also the natural shard key (lesson 4).</p>",
          hi: "<p>पहले estimate: मान लो महीने में 10 करोड़ नए links और हर link की 100 reads। यह लगभग 38 writes और 3,900 reads प्रति सेकंड है। Reads हावी हैं और हर record छोटा है, इसलिए cache (पाठ 3) ज़्यादातर load उठा लेता है। Code ही lookup key है, तो वही natural shard key भी है (पाठ 4)।</p>",
          hg: "<p>Pehle estimate: maan lo mahine mein 10 crore naye links aur har link ki 100 reads. Ye lagbhag 38 writes aur 3,900 reads prati second hai. Reads haavi hain aur har record chhota hai, isliye cache (lesson 3) zyadatar load utha leta hai. Code hi lookup key hai, to wahi natural shard key bhi hai (lesson 4).</p>"
        },
        analogy: {
          en: "<p>A courier tracking number is short, but behind it sits a long record: sender, address, route. Show the number at the counter and the clerk looks up the full record. The short code is the number; the redirect is the lookup.</p>",
          hi: "<p>Courier का tracking number छोटा होता है, पर उसके पीछे लंबा record है: sender, पता, route। Counter पर number दिखाओ और clerk पूरा record ढूँढ देता है। छोटा code वह number है; redirect वह खोज है।</p>",
          hg: "<p>Courier ka tracking number chhota hota hai, par uske peeche lamba record hai: sender, pata, route. Counter par number dikhao aur clerk poora record dhundh deta hai. Chhota code woh number hai; redirect woh khoj hai.</p>"
        },
        lines: [
          {
            code: "private long _next = 100_000;",
            note: {
              en: "A counter gives every link a unique number, so there are no collisions to handle. Real systems lease blocks of ids to each server so that no database call is needed per create.",
              hi: "Counter हर link को unique number देता है, इसलिए collisions संभालने नहीं पड़ते। असली systems हर server को ids के blocks lease पर देते हैं ताकि हर create पर database call न लगे।",
              hg: "Counter har link ko unique number deta hai, isliye collisions sambhalne nahi padte. Asli systems har server ko ids ke blocks lease par dete hain taaki har create par database call na lage."
            }
          },
          {
            code: "var code = Base62.Encode(_next++);",
            note: {
              en: "The counter number becomes the code. Number 100,000 becomes <code>q0U</code>, and the next one <code>q0V</code>.",
              hi: "Counter number ही code बनता है। Number 100,000 से <code>q0U</code> बनता है, और अगला <code>q0V</code>।",
              hg: "Counter number hi code banta hai. Number 100,000 se <code>q0U</code> banta hai, aur agla <code>q0V</code>."
            }
          },
          {
            code: "for (; id > 0; id /= 62) chars.Push(Alphabet[(int)(id % 62)]);",
            note: {
              en: "Base conversion: take the remainder by 62 as the next symbol, divide by 62, repeat. The stack reverses the symbols into the right order.",
              hi: "Base conversion: 62 से remainder अगला symbol है, 62 से भाग दो, दोहराओ। Stack symbols को सही क्रम में पलट देता है।",
              hg: "Base conversion: 62 se remainder agla symbol hai, 62 se bhaag do, dohrao. Stack symbols ko sahi kram mein palat deta hai."
            }
          },
          {
            code: "\"302 -> {url}\"",
            note: {
              en: "The redirect answers <b>302</b> (temporary), not 301. Browsers cache a 301, so later clicks may skip your server and your click analytics miss them. A 302 reaches you every time.",
              hi: "Redirect <b>302</b> (temporary) देता है, 301 नहीं। Browsers 301 को cache कर लेते हैं, तो बाद के clicks आपके server तक नहीं आते और click analytics उन्हें miss करती है। 302 हर बार आप तक पहुँचता है।",
              hg: "Redirect <b>302</b> (temporary) deta hai, 301 nahi. Browsers 301 ko cache kar lete hain, to baad ke clicks aapke server tak nahi aate aur click analytics unhe miss karti hai. 302 har baar aap tak pahunchta hai."
            }
          },
          {
            code: "\"404 not found\"",
            note: {
              en: "An unknown code returns 404. (A link with an expiry date would return 410 Gone; the Deep Dive design covers it.)",
              hi: "अनजान code पर 404 मिलता है। (Expiry वाले link पर 410 Gone मिलता; Deep Dive के design में है।)",
              hg: "Anjaan code par 404 milta hai. (Expiry wale link par 410 Gone milta; Deep Dive ke design mein hai.)"
            }
          },
          {
            code: "var seven = (long)Math.Pow(62, 7);",
            note: {
              en: "62 to the power 7 is about 3.5 trillion. Seven characters are enough for a very long time, so codes stay short.",
              hi: "62 की power 7 लगभग 3.5 trillion (35 लाख करोड़) है। सात characters बहुत लंबे समय के लिए काफ़ी हैं, इसलिए codes छोटे रहते हैं।",
              hg: "62 ki power 7 lagbhag 3.5 trillion (35 lakh crore) hai. Saat characters bahut lambe samay ke liye kaafi hain, isliye codes chhote rehte hain."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Treating base62 as security. Anyone can decode it (the program prints the id back). For private links use random codes plus a permission check.</li><li>Using 301 when you need click counts: the browser caches it and stops calling you.</li><li>Truncating a hash of the URL as the code without handling collisions. A counter has none; a hash needs a uniqueness check.</li></ul>",
          hi: "<ul><li>Base62 को security समझना। कोई भी इसे decode कर सकता है (program id वापस print करता है)। Private links के लिए random codes और permission check लो।</li><li>Click counts चाहिए तब 301 देना: browser उसे cache कर लेता है और आपको बुलाना बंद कर देता है।</li><li>URL के hash को काटकर code बनाना और collisions न सँभालना। Counter में collision नहीं होती; hash में uniqueness check चाहिए।</li></ul>",
          hg: "<ul><li>Base62 ko security samajhna. Koi bhi ise decode kar sakta hai (program id wapas print karta hai). Private links ke liye random codes aur permission check lo.</li><li>Click counts chahiye tab 301 dena: browser use cache kar leta hai aur aapko bulana band kar deta hai.</li><li>URL ke hash ko kaatkar code banana aur collisions na sambhalna. Counter mein collision nahi hoti; hash mein uniqueness check chahiye.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use counter plus base62 when you need short, unique codes with no collision handling. If links must be unguessable, use random codes instead, and check uniqueness on create. Use 301 only when you never need the click.</p>",
          hi: "<p>छोटे, unique codes चाहिए और collision नहीं सँभालनी हो तो counter और base62 लो। Links guess न हो सकें, ऐसा चाहिए तो random codes लो और create पर uniqueness जाँचो। 301 तभी दो जब click की ज़रूरत कभी न हो।</p>",
          hg: "<p>Chhote, unique codes chahiye aur collision nahi sambhalni ho to counter aur base62 lo. Links guess na ho sakein, aisa chahiye to random codes lo aur create par uniqueness jaancho. 301 tabhi do jab click ki zarurat kabhi na ho.</p>"
        },
        exercise: {
          task: {
            en: "<p>How many base62 characters does a code need to cover 62, 63, 3,844, one billion and 3.5 trillion ids? Print the answer for each.</p>",
            hi: "<p>62, 63, 3,844, एक अरब (1 billion) और 3.5 trillion ids को cover करने के लिए code में कितने base62 characters चाहिए? हर एक का जवाब print करो।</p>",
            hg: "<p>62, 63, 3,844, ek arab (1 billion) aur 3.5 trillion ids ko cover karne ke liye code mein kitne base62 characters chahiye? Har ek ka jawab print karo.</p>"
          },
          hint: {
            en: "<p>The biggest id is count minus 1. Count how many times you can divide it by 62 before it drops below 62, and add 1.</p>",
            hi: "<p>सबसे बड़ी id = गिनती - 1। गिनो कि 62 से कितनी बार भाग दे सकते हो जब तक वह 62 से नीचे न आ जाए, और 1 जोड़ दो।</p>",
            hg: "<p>Sabse badi id = ginti - 1. Gino ki 62 se kitni baar bhaag de sakte ho jab tak woh 62 se neeche na aa jaye, aur 1 jod do.</p>"
          },
          solution: {
            caption: {
              en: "Solution: digits needed",
              hi: "हल: कितने digits चाहिए",
              hg: "Solution: kitne digits chahiye"
            },
            src: "// How many characters does a code need? Count the base62 digits of the biggest id.\nforeach (var ids in new[] { 62L, 63L, 3_844L, 1_000_000_000L, 3_500_000_000_000L })\n    Console.WriteLine($\"{ids,15} ids need {Digits(ids - 1)} character(s)\");\n\nstatic int Digits(long maxId)\n{\n    var n = 1;\n    for (; maxId >= 62; maxId /= 62) n++;\n    return n;\n}",
            check: "run",
            expected: "             62 ids need 1 character(s)\n             63 ids need 2 character(s)\n           3844 ids need 2 character(s)\n     1000000000 ids need 6 character(s)\n  3500000000000 ids need 7 character(s)"
          }
        },
        quiz: {
          q: {
            en: "The product team wants a click count for every short link. Which redirect status do you return?",
            hi: "Product team को हर short link की click count चाहिए। कौन-सा redirect status लौटाओगे?",
            hg: "Product team ko har short link ki click count chahiye. Kaun-sa redirect status lautaoge?"
          },
          options: [
            {
              en: "301, because it is permanent",
              hi: "301, क्योंकि यह permanent है",
              hg: "301, kyunki ye permanent hai"
            },
            {
              en: "200 with the link in the body",
              hi: "200, body में link के साथ",
              hg: "200, body mein link ke saath"
            },
            {
              en: "410 Gone",
              hi: "410 Gone (link हट चुका है)",
              hg: "410 Gone (link hat chuka hai)"
            },
            {
              en: "302, so every click reaches the server",
              hi: "302, ताकि हर click server तक पहुँचे",
              hg: "302, taaki har click server tak pahunche"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>A 301 is cached by browsers, so repeat clicks may never reach you. A 302 is not cached that way, so every click is counted. 200 does not redirect, and 410 means the link is gone.</p>",
            hi: "<p>301 को browsers cache कर लेते हैं, इसलिए दोबारा के clicks आप तक न आएँ। 302 ऐसे cache नहीं होता, इसलिए हर click गिना जाता है। 200 redirect नहीं करता, और 410 का मतलब link ख़त्म है।</p>",
            hg: "<p>301 ko browsers cache kar lete hain, isliye dobara ke clicks aap tak na aayein. 302 aise cache nahi hota, isliye har click ginta hai. 200 redirect nahi karta, aur 410 ka matlab link khatam hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Counter id, written in base62, gives short, unique codes with no collisions.</li><li>Reads dominate, so cache hot links (cache-aside) and use the code as the shard key.</li><li>Use 302 when you need every click; base62 is not secret.</li></ul>",
          hi: "<ul><li>Counter id को base62 में लिखने से छोटे, unique codes मिलते हैं, बिना collisions के।</li><li>Reads हावी हैं, इसलिए hot links cache करो (cache-aside) और code को shard key बनाओ।</li><li>हर click चाहिए तो 302 दो; base62 secret नहीं है।</li></ul>",
          hg: "<ul><li>Counter id ko base62 mein likhne se chhote, unique codes milte hain, bina collisions ke.</li><li>Reads haavi hain, isliye hot links cache karo (cache-aside) aur code ko shard key banao.</li><li>Har click chahiye to 302 do; base62 secret nahi hai.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Short tracking links: counter, base62, 302",
            hi: "Short tracking links: counter, base62 और 302",
            hg: "Short tracking links: counter, base62 aur 302"
          },
          src: "// Short tracking links for tickets: counter id -> base62 code -> redirect.\nvar links = new LinkStore();\nvar c1 = links.Shorten(\"https://crm.example/tickets/501?utm_source=sms\");\nvar c2 = links.Shorten(\"https://crm.example/tickets/502?utm_source=sms\");\nConsole.WriteLine($\"codes: {c1} {c2}\");\n\nConsole.WriteLine(links.Redirect(c1));\nConsole.WriteLine(links.Redirect(\"zzzzzz\"));\nConsole.WriteLine($\"decode {c1} = {Base62.Decode(c1)} (not a secret)\");\n\nvar seven = (long)Math.Pow(62, 7);                    // 62 to the power 7\nConsole.WriteLine($\"7 characters hold {seven} codes\");\n\nclass LinkStore\n{\n    private readonly Dictionary<string, string> _byCode = new();\n    private long _next = 100_000;                         // a counter; real systems lease id blocks per server\n\n    public string Shorten(string longUrl)\n    {\n        var code = Base62.Encode(_next++);\n        _byCode[code] = longUrl;\n        return code;\n    }\n\n    // 302 (not 301) so every click still reaches us for analytics.\n    public string Redirect(string code) =>\n        _byCode.TryGetValue(code, out var url) ? $\"302 -> {url}\" : \"404 not found\";\n}\n\nstatic class Base62\n{\n    private const string Alphabet = \"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n\n    public static string Encode(long id)\n    {\n        if (id == 0) return \"0\";\n        var chars = new Stack<char>();\n        for (; id > 0; id /= 62) chars.Push(Alphabet[(int)(id % 62)]);\n        return new string(chars.ToArray());\n    }\n\n    public static long Decode(string code) =>\n        code.Aggregate(0L, (id, ch) => id * 62 + Alphabet.IndexOf(ch));\n}",
          check: "run",
          expected: "codes: q0U q0V\n302 -> https://crm.example/tickets/501?utm_source=sms\n404 not found\ndecode q0U = 100000 (not a secret)\n7 characters hold 3521614606208 codes"
        }
      ]
    },
    {
      id: "rate-limiter",
      depth: "short",
      title: {
        en: "Rate limiting with a token bucket",
        hi: "Token bucket से rate limiting",
        hg: "Token bucket se rate limiting"
      },
      lesson: {
        buildsOn: {
          en: "<p>The short-link design in lesson 5 protects the database with a cache. This lesson protects the system from <b>too many requests</b>. The next design sends SMS through a provider that allows only so many messages per second, so we need a limiter first.</p>",
          hi: "<p>पाठ 5 का short-link design cache से database को बचाता है। यह पाठ system को <b>बहुत ज़्यादा requests</b> से बचाता है। अगला design एक provider से SMS भेजता है जो हर सेकंड सिर्फ़ इतने messages लेता है, इसलिए पहले limiter चाहिए।</p>",
          hg: "<p>Lesson 5 ka short-link design cache se database ko bachata hai. Ye lesson system ko <b>bahut zyada requests</b> se bachata hai. Agla design ek provider se SMS bhejta hai jo har second sirf itne messages leta hai, isliye pehle limiter chahiye.</p>"
        },
        what: {
          en: "<p>A <b>token bucket</b> is a rate limiter. The bucket holds up to <b>capacity</b> tokens and gets new tokens at a steady rate. Each request takes one token. No token means the request is rejected with <b>429 Too Many Requests</b>.</p>",
          hi: "<p><b>Token bucket</b> एक rate limiter है। Bucket में ज़्यादा से ज़्यादा <b>capacity</b> जितने tokens रहते हैं और नए tokens एक तय रफ़्तार से आते हैं। हर request एक token लेती है। Token न हो तो request <b>429 Too Many Requests</b> से लौटा दी जाती है।</p>",
          hg: "<p><b>Token bucket</b> ek rate limiter hai. Bucket mein zyada se zyada <b>capacity</b> jitne tokens rehte hain aur naye tokens ek tay raftaar se aate hain. Har request ek token leti hai. Token na ho to request <b>429 Too Many Requests</b> se lauta di jaati hai.</p>"
        },
        why: {
          en: "<p>It allows a short <b>burst</b> (up to capacity) but keeps the long-run speed at the refill rate. Keep one bucket <b>per customer</b>: one noisy customer then cannot slow down everyone else.</p>",
          hi: "<p>यह छोटा <b>burst</b> (capacity तक) चलने देता है, पर लंबे समय की रफ़्तार refill rate पर रखता है। <b>हर customer</b> का एक bucket रखो: तब एक शोर करने वाला customer बाकी सबको धीमा नहीं कर पाता।</p>",
          hg: "<p>Ye chhota <b>burst</b> (capacity tak) chalne deta hai, par lambe samay ki raftaar refill rate par rakhta hai. <b>Har customer</b> ka ek bucket rakho: tab ek shor karne wala customer baaki sabko dheema nahi kar paata.</p>"
        },
        analogy: {
          en: "<p>Think of a metro entry gate that hands out tokens: the box holds 3, and one new token drops in every second. Three people can go in at once, the fourth waits one second. If nobody comes for a while, the box fills up again, but never beyond 3.</p>",
          hi: "<p>Metro के entry gate की सोचो जो tokens देता है: डिब्बे में 3 आते हैं, और हर सेकंड एक नया token गिरता है। तीन लोग एक साथ अंदर जा सकते हैं, चौथे को एक सेकंड रुकना पड़ता है। कुछ देर कोई न आए तो डिब्बा फिर भर जाता है, पर 3 से ज़्यादा कभी नहीं।</p>",
          hg: "<p>Metro ke entry gate ki socho jo tokens deta hai: dibbe mein 3 aate hain, aur har second ek naya token girta hai. Teen log ek saath andar ja sakte hain, chauthe ko ek second rukna padta hai. Kuchh der koi na aaye to dibba phir bhar jaata hai, par 3 se zyada kabhi nahi.</p>"
        },
        lines: [
          {
            code: "var limiter = new RateLimiter(clock, capacity: 3, refillPerSecond: 1);",
            note: {
              en: "The two settings: a burst of up to 3, and a steady speed of 1 request per second.",
              hi: "दो settings: ज़्यादा से ज़्यादा 3 का burst, और 1 request प्रति सेकंड की एक जैसी रफ़्तार।",
              hg: "Do settings: zyada se zyada 3 ka burst, aur 1 request prati second ki ek jaisi raftaar."
            }
          },
          {
            code: "private readonly Dictionary<string, (long Milli, long Last)> _buckets = new();",
            note: {
              en: "One bucket per key (the customer name). Tokens are kept in thousandths so the maths stays in whole numbers.",
              hi: "हर key (customer name) का एक bucket। Tokens को हज़ारवें हिस्से में रखा है ताकि हिसाब पूरे numbers में रहे।",
              hg: "Har key (customer name) ka ek bucket. Tokens ko hazaarwen hisse mein rakha hai taaki hisaab poore numbers mein rahe."
            }
          },
          {
            code: "milli = Math.Min(capacity * 1000L, milli + (clock.Ms - last) * refillPerSecond);",
            note: {
              en: "Refill by the time that has passed since the last call, but never above capacity. No timer thread is needed: the bucket catches up when someone asks.",
              hi: "पिछली call के बाद जितना समय बीता उतना refill करो, पर capacity से ऊपर कभी नहीं। कोई timer thread नहीं चाहिए: कोई माँगता है तब bucket हिसाब पूरा कर लेता है।",
              hg: "Pichhli call ke baad jitna samay beeta utna refill karo, par capacity se upar kabhi nahi. Koi timer thread nahi chahiye: koi maangta hai tab bucket hisaab poora kar leta hai."
            }
          },
          {
            code: "if (milli >= 1000) { _buckets[key] = (milli - 1000, clock.Ms); return 0; }",
            note: {
              en: "At least one whole token: spend it and allow the request. Returning 0 means \"no wait\".",
              hi: "कम से कम एक पूरा token है: उसे खर्च करो और request को जाने दो। 0 लौटाने का मतलब \"इंतज़ार नहीं\"।",
              hg: "Kam se kam ek poora token hai: use kharch karo aur request ko jaane do. 0 lautane ka matlab \"intezaar nahi\"."
            }
          },
          {
            code: "return (1000 - milli + refillPerSecond - 1) / refillPerSecond;",
            note: {
              en: "No token: tell the caller how long to wait. Rounded up to whole seconds it becomes the <code>Retry-After</code> header (the header is in seconds), so a good client backs off instead of hammering.",
              hi: "Token नहीं: caller को बताओ कि कितना रुकना है। इसे पूरे seconds में round up करके <code>Retry-After</code> header बनाते हैं (header seconds में होता है), इसलिए अच्छा client हथौड़े मारने की जगह रुकता है।",
              hg: "Token nahi: caller ko batao ki kitna rukna hai. Ise poore seconds mein round up karke <code>Retry-After</code> header banate hain (header seconds mein hota hai), isliye achha client hathode maarne ki jagah rukta hai."
            }
          },
          {
            code: "clock.Ms += 1500;",
            note: {
              en: "A fake clock jumps 1.5 seconds, so Asha has earned 1.5 tokens and is allowed again. Ravi was never affected by Asha's burst.",
              hi: "Fake clock 1.5 सेकंड आगे जाती है, तो Asha ने 1.5 tokens कमा लिए और फिर से allowed है। Asha के burst का Ravi पर कभी असर नहीं पड़ा।",
              hg: "Fake clock 1.5 second aage jaati hai, to Asha ne 1.5 tokens kama liye aur phir se allowed hai. Asha ke burst ka Ravi par kabhi asar nahi pada."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>One global bucket for everyone: a single customer can use all the tokens. Use a bucket per customer (or per provider account).</li><li>Rejecting without telling the client when to retry. Send <code>429</code> with <code>Retry-After</code>.</li><li>Keeping the bucket in one server's memory when you run many servers. Each server then allows its own burst; keep the counters in a shared store such as Redis.</li></ul>",
          hi: "<ul><li>सबके लिए एक global bucket: एक ही customer सारे tokens ले सकता है। हर customer (या हर provider account) का bucket रखो।</li><li>बिना बताए reject करना कि कब दोबारा कोशिश करनी है। <code>429</code> के साथ <code>Retry-After</code> भेजो।</li><li>कई servers चल रहे हों और bucket एक server की memory में रखना। तब हर server अपना burst देता है; counters को Redis जैसे shared store में रखो।</li></ul>",
          hg: "<ul><li>Sabke liye ek global bucket: ek hi customer saare tokens le sakta hai. Har customer (ya har provider account) ka bucket rakho.</li><li>Bina bataye reject karna ki kab dobara koshish karni hai. <code>429</code> ke saath <code>Retry-After</code> bhejo.</li><li>Kai servers chal rahe hon aur bucket ek server ki memory mein rakhna. Tab har server apna burst deta hai; counters ko Redis jaise shared store mein rakho.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use it to protect your API from one noisy caller, and to stay under the limit of a provider you call (an SMS gateway). When a worker calls a provider, make it <b>wait</b> for a token instead of failing, so a campaign slows down but nothing is lost.</p>",
          hi: "<p>अपने API को एक शोर करने वाले caller से बचाने के लिए, और जिस provider को call करते हो (SMS gateway) उसकी limit के नीचे रहने के लिए use करो। जब worker provider को call करे तो उसे fail होने के बजाय token का <b>इंतज़ार</b> कराओ, ताकि campaign धीमा हो पर कुछ खोए नहीं।</p>",
          hg: "<p>Apne API ko ek shor karne wale caller se bachane ke liye, aur jis provider ko call karte ho (SMS gateway) uski limit ke neeche rehne ke liye use karo. Jab worker provider ko call kare to use fail hone ke bajaye token ka <b>intezaar</b> karao, taaki campaign dheema ho par kuchh khoye nahi.</p>"
        },
        exercise: {
          task: {
            en: "<p>A bucket starts full with capacity 4. Ten requests arrive at the same instant, so no time passes and no token is refilled. How many are allowed? Print it.</p>",
            hi: "<p>Bucket भरा हुआ शुरू होता है, capacity 4। दस requests एक ही पल में आती हैं, इसलिए समय नहीं बीतता और कोई token refill नहीं होता। कितनी allowed होंगी? Print करो।</p>",
            hg: "<p>Bucket bhara hua shuru hota hai, capacity 4. Das requests ek hi pal mein aati hain, isliye samay nahi beetta aur koi token refill nahi hota. Kitni allowed hongi? Print karo.</p>"
          },
          hint: {
            en: "<p>Each allowed request takes 1000 milli-tokens. Loop ten times and spend a token only while at least 1000 are left.</p>",
            hi: "<p>हर allowed request 1000 milli-tokens लेती है। दस बार loop चलाओ और token तभी खर्च करो जब कम से कम 1000 बचे हों।</p>",
            hg: "<p>Har allowed request 1000 milli-tokens leti hai. Das baar loop chalao aur token tabhi kharch karo jab kam se kam 1000 bache hon.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a burst against a full bucket",
              hi: "हल: भरे bucket पर burst",
              hg: "Solution: bhare bucket par burst"
            },
            src: "// A burst of 10 requests at the same moment: how many pass with capacity 4?\nvar milli = 4 * 1000L;                 // bucket starts full: 4 tokens\nvar allowed = 0;\n\nfor (var i = 1; i <= 10; i++)\n{\n    if (milli >= 1000) { milli -= 1000; allowed++; }   // no time passes, so no refill\n}\nConsole.WriteLine($\"allowed {allowed} of 10\");",
            check: "run",
            expected: "allowed 4 of 10"
          }
        },
        quiz: {
          q: {
            en: "A bucket has capacity 3 and refills 1 token per second. Ten requests from the same customer arrive at the same instant. How many are allowed?",
            hi: "Bucket की capacity 3 है और हर सेकंड 1 token refill होता है। एक ही customer की दस requests एक ही पल में आती हैं। कितनी allowed होंगी?",
            hg: "Bucket ki capacity 3 hai aur har second 1 token refill hota hai. Ek hi customer ki das requests ek hi pal mein aati hain. Kitni allowed hongi?"
          },
          options: [
            {
              en: "All 10, the refill covers them",
              hi: "सभी 10, refill उन्हें cover कर लेता है",
              hg: "Sabhi 10, refill unhe cover kar leta hai"
            },
            {
              en: "Only 1",
              hi: "सिर्फ़ 1",
              hg: "Sirf 1"
            },
            {
              en: "3, and the other 7 get 429",
              hi: "3, और बाकी 7 को 429 मिलता है",
              hg: "3, aur baaki 7 ko 429 milta hai"
            },
            {
              en: "None, the bucket needs a warm-up",
              hi: "एक भी नहीं, bucket को warm-up चाहिए",
              hg: "Ek bhi nahi, bucket ko warm-up chahiye"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>The bucket starts full with 3 tokens. Three requests take them, and no time passes for a refill, so the other seven are rejected with 429.</p>",
            hi: "<p>Bucket 3 tokens के साथ भरा शुरू होता है। तीन requests उन्हें ले लेती हैं, और refill के लिए समय नहीं बीतता, इसलिए बाकी सात को 429 मिलता है।</p>",
            hg: "<p>Bucket 3 tokens ke saath bhara shuru hota hai. Teen requests unhe le leti hain, aur refill ke liye samay nahi beetta, isliye baaki saat ko 429 milta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Token bucket: capacity gives the burst, the refill rate gives the steady speed.</li><li>Keep one bucket per customer or provider account, in a shared store when you run many servers.</li><li>Reject with 429 and <code>Retry-After</code>; a worker calling a provider should wait instead.</li></ul>",
          hi: "<ul><li>Token bucket: capacity burst देती है, refill rate एक जैसी रफ़्तार देती है।</li><li>हर customer या provider account का एक bucket रखो, कई servers हों तो shared store में।</li><li>429 और <code>Retry-After</code> के साथ reject करो; provider को call करने वाला worker इसकी जगह इंतज़ार करे।</li></ul>",
          hg: "<ul><li>Token bucket: capacity burst deti hai, refill rate ek jaisi raftaar deti hai.</li><li>Har customer ya provider account ka ek bucket rakho, kai servers hon to shared store mein.</li><li>429 aur <code>Retry-After</code> ke saath reject karo; provider ko call karne wala worker iski jagah intezaar kare.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A per-customer token bucket with a fake clock",
            hi: "Fake clock के साथ हर customer का token bucket",
            hg: "Fake clock ke saath har customer ka token bucket"
          },
          src: "// Token bucket per customer, driven by a fake clock so the output is the same every run.\nvar clock = new FakeClock();\nvar limiter = new RateLimiter(clock, capacity: 3, refillPerSecond: 1);\n\nforeach (var who in new[] { \"Asha\", \"Asha\", \"Asha\", \"Asha\", \"Ravi\" })\n    Show(who);\n\nclock.Ms += 1500;                                  // 1.5 seconds later\nShow(\"Asha\");\n\nvoid Show(string customer)\n{\n    var wait = limiter.TryAcquire(customer);\n    Console.WriteLine($\"t={clock.Ms,5} ms {customer}: \" + (wait == 0 ? \"allowed\" : $\"429, retry after {wait} ms\"));\n}\n\nclass FakeClock { public long Ms; }\n\nclass RateLimiter(FakeClock clock, int capacity, int refillPerSecond)\n{\n    private readonly Dictionary<string, (long Milli, long Last)> _buckets = new();   // 1 token = 1000 milli\n\n    // Returns 0 when allowed, otherwise how many ms to wait for the next token.\n    public long TryAcquire(string key)\n    {\n        var (milli, last) = _buckets.TryGetValue(key, out var b) ? b : (capacity * 1000L, clock.Ms);\n        milli = Math.Min(capacity * 1000L, milli + (clock.Ms - last) * refillPerSecond);\n        if (milli >= 1000) { _buckets[key] = (milli - 1000, clock.Ms); return 0; }\n        _buckets[key] = (milli, clock.Ms);\n        return (1000 - milli + refillPerSecond - 1) / refillPerSecond;\n    }\n}",
          check: "run",
          expected: "t=    0 ms Asha: allowed\nt=    0 ms Asha: allowed\nt=    0 ms Asha: allowed\nt=    0 ms Asha: 429, retry after 1000 ms\nt=    0 ms Ravi: allowed\nt= 1500 ms Asha: allowed"
        }
      ]
    },
    {
      id: "reliable-pipeline",
      depth: "short",
      title: {
        en: "Design 2: notifications with dedupe, retry and dead-letter",
        hi: "Design 2: dedupe, retry और dead-letter वाले notifications",
        hg: "Design 2: dedupe, retry aur dead-letter wale notifications"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 6 gave the sender a limiter so it does not flood the SMS provider. Now the worker must also survive duplicates and failures. This is Design 2: a notification system, the same shape as a WhatsApp bot, built on the queues, retries and dead-letter of Day 16.</p>",
          hi: "<p>पाठ 6 ने sender को limiter दिया ताकि वह SMS provider को भर न दे। अब worker को duplicates और failures भी झेलने हैं। यह Design 2 है: notification system, WhatsApp bot जैसा ही आकार, Day 16 के queues, retries और dead-letter पर बना।</p>",
          hg: "<p>Lesson 6 ne sender ko limiter diya taaki woh SMS provider ko bhar na de. Ab worker ko duplicates aur failures bhi jhelne hain. Ye Design 2 hai: notification system, WhatsApp bot jaisa hi aakaar, Day 16 ke queues, retries aur dead-letter par bana.</p>"
        },
        what: {
          en: "<p>Day 16 taught at-least-once delivery, idempotent consumers, retry with backoff and the dead-letter queue; here the worker combines all three. The pipeline is: accept fast, put the work in a <b>queue</b>, and let a worker send it.</p>",
          hi: "<p>Day 16 ने at-least-once delivery, idempotent consumers, backoff के साथ retry और dead-letter queue सिखाए; यहाँ worker तीनों को जोड़ता है। Pipeline ऐसी है: जल्दी accept करो, काम <b>queue</b> में डालो, और worker से भिजवाओ।</p>",
          hg: "<p>Day 16 ne at-least-once delivery, idempotent consumers, backoff ke saath retry aur dead-letter queue sikhaye; yahan worker teeno ko jodta hai. Pipeline aisi hai: jaldi accept karo, kaam <b>queue</b> mein daalo, aur worker se bhijwao.</p>"
        },
        why: {
          en: "<p>Providers time out, return 503, and the queue redelivers. Without these habits the customer gets the same SMS twice, or a temporary glitch loses a message, or one bad phone number blocks the queue forever.</p>",
          hi: "<p>Providers time out होते हैं, 503 देते हैं, और queue दोबारा deliver करती है। इन आदतों के बिना customer को वही SMS दो बार मिलता है, या temporary गड़बड़ से message खो जाता है, या एक ग़लत phone number पूरी queue को हमेशा के लिए रोक देता है।</p>",
          hg: "<p>Providers time out hote hain, 503 dete hain, aur queue dobara deliver karti hai. In aadaton ke bina customer ko wahi SMS do baar milta hai, ya temporary gadbad se message kho jaata hai, ya ek galat phone number poori queue ko hamesha ke liye rok deta hai.</p>"
        },
        analogy: {
          en: "<p>A UPI payment: if the app shows \"pending\" and you tap Pay again, the bank sees the same transaction id and charges you once. A failed payment because of a network glitch is retried a little later. A payment to a wrong, closed account is not retried; it goes back to you with a reason.</p>",
          hi: "<p>UPI payment: app \"pending\" दिखाए और तुम फिर Pay दबाओ, तो bank वही transaction id देखता है और पैसा एक ही बार काटता है। Network गड़बड़ से fail हुआ payment थोड़ी देर बाद फिर कोशिश होता है। ग़लत, बंद account को payment retry नहीं होता; वजह के साथ तुम्हें वापस मिल जाता है।</p>",
          hg: "<p>UPI payment: app \"pending\" dikhaye aur tum phir Pay dabao, to bank wahi transaction id dekhta hai aur paisa ek hi baar katta hai. Network gadbad se fail hua payment thodi der baad phir koshish hota hai. Galat, band account ko payment retry nahi hota; wajah ke saath tumhe wapas mil jaata hai.</p>"
        },
        lines: [
          {
            code: "queue.Enqueue(new Outgoing(id, Attempt: 1));",
            note: {
              en: "Every message carries its own <b>id</b> (the idempotency key) and an attempt number. \"501-open\" is put in twice on purpose, to model a duplicate delivery.",
              hi: "हर message के साथ उसकी अपनी <b>id</b> (idempotency key) और attempt number है। \"501-open\" जान-बूझकर दो बार डाला है, duplicate delivery दिखाने के लिए।",
              hg: "Har message ke saath uski apni <b>id</b> (idempotency key) aur attempt number hai. \"501-open\" jaan-boojhkar do baar daala hai, duplicate delivery dikhane ke liye."
            }
          },
          {
            code: "if (sent.Contains(msg.Id))",
            note: {
              en: "The duplicate check. The second \"501-open\" is skipped, so the customer gets one SMS.",
              hi: "Duplicate check। दूसरा \"501-open\" छोड़ दिया जाता है, इसलिए customer को एक ही SMS मिलता है।",
              hg: "Duplicate check. Doosra \"501-open\" chhod diya jaata hai, isliye customer ko ek hi SMS milta hai."
            }
          },
          {
            code: "sent.Add(msg.Id);",
            note: {
              en: "Record \"sent\" only <b>after</b> the provider accepted. If we marked it before and the send then failed, the message would be lost: the retry would think it was already done.",
              hi: "\"Sent\" तभी record करो जब provider ने accept कर लिया हो, यानी <b>उसके बाद</b>। पहले mark करें और send fail हो जाए, तो message खो जाता: retry सोचती कि काम हो चुका है।",
              hg: "\"Sent\" tabhi record karo jab provider ne accept kar liya ho, yaani <b>uske baad</b>. Pehle mark karein aur send fail ho jaye, to message kho jaata: retry sochti ki kaam ho chuka hai."
            }
          },
          {
            code: "case SendResult.Transient when msg.Attempt < 3:",
            note: {
              en: "A temporary failure (503, timeout) is retried, up to 3 attempts. A permanent failure is not retried at all.",
              hi: "temporary failure (503, timeout) पर retry होता है, ज़्यादा से ज़्यादा 3 attempts। permanent failure पर retry बिल्कुल नहीं।",
              hg: "Temporary failure (503, timeout) par retry hota hai, zyada se zyada 3 attempts. Permanent failure par retry bilkul nahi."
            }
          },
          {
            code: "var backoff = 100 * (1 << msg.Attempt);",
            note: {
              en: "<b>Exponential backoff</b> as in Day 16: here it waits 200 ms, then 400 ms. Real code adds random jitter.",
              hi: "<b>Exponential backoff</b>, जैसा Day 16 में: यहाँ 200 ms रुकता है, फिर 400 ms। असली code में random jitter भी जोड़ते हैं।",
              hg: "<b>Exponential backoff</b>, jaisa Day 16 mein: yahan 200 ms rukta hai, phir 400 ms. Asli code mein random jitter bhi jodte hain."
            }
          },
          {
            code: "deadLetters.Add(msg.Id);",
            note: {
              en: "The <b>dead-letter</b> list holds messages that cannot succeed (an invalid number). Raise an alert and let a person look at them; do not retry forever.",
              hi: "<b>Dead-letter</b> list में वे messages जाते हैं जो कभी सफल नहीं होंगे (ग़लत number)। Alert उठाओ और किसी इंसान को देखने दो; हमेशा retry मत करो।",
              hg: "<b>Dead-letter</b> list mein woh messages jaate hain jo kabhi safal nahi honge (galat number). Alert uthao aur kisi insaan ko dekhne do; hamesha retry mat karo."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Marking a message as sent before the provider accepts it. A failure then loses the message silently.</li><li>Retrying everything. A 400-type error (bad number) will never succeed; only retry timeouts, 429 and 5xx.</li><li>Expecting exactly-once delivery (Day 16). Aim for at-least-once plus idempotent handling. Also note that a retry goes to the back of the queue, so order is not guaranteed across retries (see how 502 finishes last).</li></ul>",
          hi: "<ul><li>Provider के accept करने से पहले message को sent mark करना। तब failure से message चुपचाप खो जाता है।</li><li>सब कुछ retry करना। 400-type error (ग़लत number) कभी सफल नहीं होगी; सिर्फ़ timeouts, 429 और 5xx पर retry करो।</li><li>Exactly-once की उम्मीद रखना (Day 16)। At-least-once और idempotent handling से काम चलाओ। यह भी याद रखो कि retry queue के पीछे जाती है, इसलिए retries के आर-पार क्रम तय नहीं है (देखो 502 सबसे आख़िर में कैसे ख़त्म होता है)।</li></ul>",
          hg: "<ul><li>Provider ke accept karne se pehle message ko sent mark karna. Tab failure se message chupchaap kho jaata hai.</li><li>Sab kuchh retry karna. 400-type error (galat number) kabhi safal nahi hogi; sirf timeouts, 429 aur 5xx par retry karo.</li><li>Exactly-once ki ummeed rakhna (Day 16). At-least-once aur idempotent handling se kaam chalao. Ye bhi yaad rakho ki retry queue ke peechhe jaati hai, isliye retries ke aar-paar kram tay nahi hai (dekho 502 sabse aakhir mein kaise khatam hota hai).</li></ul>"
        },
        whenToUse: {
          en: "<p>Use this shape for anything that calls an unreliable outside service: SMS, email, WhatsApp, payment callbacks. In production the queue is a managed broker (Day 20), and the \"sent\" record lives in a shared database, not in memory. The webhook that feeds the queue should only verify, dedupe, enqueue and answer 200 quickly.</p>",
          hi: "<p>हर उस काम के लिए यही आकार लो जो किसी unreliable बाहरी service को call करता है: SMS, email, WhatsApp, payment callbacks। Production में queue एक managed broker होती है (Day 20), और \"sent\" का record memory में नहीं, shared database में रहता है। Queue को भरने वाला webhook सिर्फ़ verify, dedupe, enqueue करे और जल्दी 200 लौटाए।</p>",
          hg: "<p>Har us kaam ke liye yahi aakaar lo jo kisi unreliable bahari service ko call karta hai: SMS, email, WhatsApp, payment callbacks. Production mein queue ek managed broker hoti hai (Day 20), aur \"sent\" ka record memory mein nahi, shared database mein rehta hai. Queue ko bharne wala webhook sirf verify, dedupe, enqueue kare aur jaldi 200 lautaye.</p>"
        },
        exercise: {
          task: {
            en: "<p>Build an idempotency-key store for \"create ticket\". The same key sent twice must return the same ticket, not make a second one. Print the results and the number of tickets created.</p>",
            hi: "<p>\"Create ticket\" के लिए idempotency-key store बनाओ। एक ही key दो बार भेजी जाए तो वही ticket लौटे, दूसरा न बने। Results और बने tickets की संख्या print करो।</p>",
            hg: "<p>\"Create ticket\" ke liye idempotency-key store banao. Ek hi key do baar bheji jaye to wahi ticket laute, doosra na bane. Results aur bane tickets ki sankhya print karo.</p>"
          },
          hint: {
            en: "<p>Keep a dictionary from key to ticket id. If the key is already there, return the stored id; otherwise create, store, return.</p>",
            hi: "<p>Key से ticket id का एक dictionary रखो। Key पहले से हो तो रखी हुई id लौटाओ; नहीं तो बनाओ, रखो, लौटाओ।</p>",
            hg: "<p>Key se ticket id ka ek dictionary rakho. Key pehle se ho to rakhi hui id lautao; nahi to banao, rakho, lautao.</p>"
          },
          solution: {
            caption: {
              en: "Solution: replay the same ticket for the same key",
              hi: "हल: एक ही key पर वही ticket",
              hg: "Solution: ek hi key par wahi ticket"
            },
            src: "// Idempotency-key store: a retried \"create ticket\" request returns the same ticket.\nvar store = new TicketStore();\nConsole.WriteLine(store.Create(\"key-1\", \"Asha: app crashes\"));\nConsole.WriteLine(store.Create(\"key-1\", \"Asha: app crashes\"));   // client retry: same key\nConsole.WriteLine(store.Create(\"key-2\", \"Ravi: refund pending\"));\nConsole.WriteLine($\"tickets created: {store.Count}\");\n\nclass TicketStore\n{\n    private readonly Dictionary<string, int> _byKey = new();\n    private int _next = 501;\n    public int Count => _byKey.Count;\n\n    public string Create(string idempotencyKey, string issue)\n    {\n        if (_byKey.TryGetValue(idempotencyKey, out var existing)) return $\"ticket {existing} (replayed)\";\n        _byKey[idempotencyKey] = _next;\n        return $\"ticket {_next++} created: {issue}\";\n    }\n}",
            check: "run",
            expected: "ticket 501 created: Asha: app crashes\nticket 501 (replayed)\nticket 502 created: Ravi: refund pending\ntickets created: 2"
          }
        },
        quiz: {
          q: {
            en: "When should the worker record that a message was \"sent\" for duplicate checks?",
            hi: "Duplicate check के लिए worker को \"sent\" कब record करना चाहिए?",
            hg: "Duplicate check ke liye worker ko \"sent\" kab record karna chahiye?"
          },
          options: [
            {
              en: "Before calling the provider",
              hi: "Provider को call करने से पहले",
              hg: "Provider ko call karne se pehle"
            },
            {
              en: "After the provider has accepted it",
              hi: "Provider के accept करने के बाद",
              hg: "Provider ke accept karne ke baad"
            },
            {
              en: "Never, the queue removes duplicates",
              hi: "कभी नहीं, queue duplicates हटा देती है",
              hg: "Kabhi nahi, queue duplicates hata deti hai"
            },
            {
              en: "Only in the log files",
              hi: "सिर्फ़ log files में",
              hg: "Sirf log files mein"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>Record it after acceptance. Marking before the call would lose the message if the send fails, because the retry would see \"already sent\". Queues are at-least-once, so they do not remove duplicates for you, and log files are not a lookup store.</p>",
            hi: "<p>Accept होने के बाद record करो। Call से पहले mark करने पर send fail होने से message खो जाता, क्योंकि retry को \"already sent\" दिखता। Queues at-least-once होती हैं, वे duplicates खुद नहीं हटातीं, और log files lookup store नहीं हैं।</p>",
            hg: "<p>Accept hone ke baad record karo. Call se pehle mark karne par send fail hone se message kho jaata, kyunki retry ko \"already sent\" dikhta. Queues at-least-once hoti hain, ve duplicates khud nahi hatatin, aur log files lookup store nahi hain.</p>"
          }
        },
        recap: {
          en: "<ul><li>Queues deliver at least once, so dedupe by message id and record \"sent\" after acceptance.</li><li>Retry temporary failures with exponential backoff and a limit; never retry permanent ones.</li><li>Move hopeless messages to a dead-letter list, alert, and replay by hand after a fix.</li></ul>",
          hi: "<ul><li>Queues at least once पहुँचाती हैं, इसलिए message id से dedupe करो और accept के बाद \"sent\" record करो।</li><li>temporary failures पर exponential backoff और सीमा के साथ retry करो; permanent पर कभी नहीं।</li><li>बेकार messages dead-letter list में डालो, alert दो, और fix के बाद हाथ से replay करो।</li></ul>",
          hg: "<ul><li>Queues at least once pahunchati hain, isliye message id se dedupe karo aur accept ke baad \"sent\" record karo.</li><li>Temporary failures par exponential backoff aur seema ke saath retry karo; permanent par kabhi nahi.</li><li>Bekaar messages dead-letter list mein daalo, alert do, aur fix ke baad haath se replay karo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "SMS pipeline model: dedupe, retry, dead-letter",
            hi: "SMS pipeline model: dedupe, retry और dead-letter",
            hg: "SMS pipeline model: dedupe, retry aur dead-letter"
          },
          src: "// SMS pipeline model: duplicate skip, retry with backoff, dead-letter. Fake clock and provider.\nvar clock = new FakeClock();\nvar provider = new FakeProvider();\nvar queue = new Queue<Outgoing>();\nvar sent = new HashSet<string>();            // ids the provider has already accepted\nvar deadLetters = new List<string>();\n\nforeach (var id in new[] { \"501-open\", \"502-open\", \"501-open\", \"503-open\", \"504-open\" })   // 501 arrives twice\n    queue.Enqueue(new Outgoing(id, Attempt: 1));\n\nwhile (queue.Count > 0)\n{\n    var msg = queue.Dequeue();\n    if (sent.Contains(msg.Id)) { Console.WriteLine($\"{clock.Ms,4} ms {msg.Id}: duplicate, skipped\"); continue; }\n\n    switch (provider.Send(msg))\n    {\n        case SendResult.Accepted:\n            sent.Add(msg.Id);                                  // record \"sent\" only AFTER acceptance\n            Console.WriteLine($\"{clock.Ms,4} ms {msg.Id}: sent (attempt {msg.Attempt})\");\n            break;\n        case SendResult.Transient when msg.Attempt < 3:\n            var backoff = 100 * (1 << msg.Attempt);            // 200 ms, then 400 ms\n            clock.Ms += backoff;\n            Console.WriteLine($\"{clock.Ms,4} ms {msg.Id}: 503, retry after {backoff} ms\");\n            queue.Enqueue(msg with { Attempt = msg.Attempt + 1 });\n            break;\n        default:\n            deadLetters.Add(msg.Id);\n            Console.WriteLine($\"{clock.Ms,4} ms {msg.Id}: dead-lettered\");\n            break;\n    }\n}\nConsole.WriteLine(\"sent: \" + string.Join(\",\", sent.Order()) + \" | dead: \" + string.Join(\",\", deadLetters));\n\nrecord Outgoing(string Id, int Attempt);\nenum SendResult { Accepted, Transient, Permanent }\nclass FakeClock { public long Ms; }\n\nclass FakeProvider\n{\n    private int _calls502;\n    public SendResult Send(Outgoing m) => m.Id switch\n    {\n        \"502-open\" => ++_calls502 <= 1 ? SendResult.Transient : SendResult.Accepted,   // fails once, then works\n        \"504-open\" => SendResult.Permanent,                                              // e.g. invalid number: never retry\n        _ => SendResult.Accepted\n    };\n}",
          check: "run",
          expected: "   0 ms 501-open: sent (attempt 1)\n 200 ms 502-open: 503, retry after 200 ms\n 200 ms 501-open: duplicate, skipped\n 200 ms 503-open: sent (attempt 1)\n 200 ms 504-open: dead-lettered\n 200 ms 502-open: sent (attempt 2)\nsent: 501-open,502-open,503-open | dead: 504-open"
        }
      ]
    },
    {
      id: "order-saga",
      depth: "short",
      title: {
        en: "Design 3: order saga with compensations",
        hi: "Design 3: compensations वाला order saga",
        hg: "Design 3: compensations wala order saga"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 7 made single messages safe with idempotency and retries. Design 3 joins several services in one business action: a customer buys an SMS-credits pack. Day 15 gave separate services with their own databases, and Day 16 gave the saga. Here is a small saga that you can explain on a whiteboard.</p>",
          hi: "<p>पाठ 7 ने idempotency और retries से अकेले messages को सुरक्षित बनाया। Design 3 कई services को एक business काम में जोड़ता है: customer SMS-credits का pack ख़रीदता है। Day 15 ने अलग services और उनके अपने databases दिए, और Day 16 ने saga। यहाँ एक छोटा saga है जिसे तुम whiteboard पर समझा सको।</p>",
          hg: "<p>Lesson 7 ne idempotency aur retries se akele messages ko surakshit banaya. Design 3 kai services ko ek business kaam mein jodta hai: customer SMS-credits ka pack kharidta hai. Day 15 ne alag services aur unke apne databases diye, aur Day 16 ne saga. Yahan ek chhota saga hai jise tum whiteboard par samjha sako.</p>"
        },
        what: {
          en: "<p>Day 16 taught the saga: local steps, with compensations for finished steps in reverse order. Here we design one for buying an SMS-credits pack.</p>",
          hi: "<p>Day 16 ने saga सिखाया: local steps, और पूरे हुए steps के compensations उल्टे क्रम में। यहाँ हम SMS-credits का pack ख़रीदने के लिए एक design करते हैं।</p>",
          hg: "<p>Day 16 ne saga sikhaya: local steps, aur poore hue steps ke compensations ulte kram mein. Yahan hum SMS-credits ka pack kharidne ke liye ek design karte hain.</p>"
        },
        why: {
          en: "<p>Day 16 explained why one transaction cannot span services. What is new here is designing the steps and the state the customer sees meanwhile.</p>",
          hi: "<p>Day 16 ने बताया कि एक transaction कई services में नहीं चल सकता। यहाँ नया यह है: steps का design और बीच में customer को दिखने वाली state।</p>",
          hg: "<p>Day 16 ne bataya ki ek transaction kai services mein nahi chal sakta. Yahan naya ye hai: steps ka design aur beech mein customer ko dikhne wali state.</p>"
        },
        analogy: {
          en: "<p>Booking a train ticket online: the seat is blocked first, then payment is tried. If the payment fails, the seat is released and the booking is cancelled. If the payment is taken but the ticket cannot be issued, the money is refunded. Each step has its own undo.</p>",
          hi: "<p>Train का ticket online book करना: पहले seat block होती है, फिर payment की कोशिश। Payment fail हो तो seat छोड़ दी जाती है और booking cancel। Payment कट जाए पर ticket न बने तो पैसा refund। हर step का अपना undo है।</p>",
          hg: "<p>Train ka ticket online book karna: pehle seat block hoti hai, phir payment ki koshish. Payment fail ho to seat chhod di jaati hai aur booking cancel. Payment kat jaye par ticket na bane to paisa refund. Har step ka apna undo hai.</p>"
        },
        lines: [
          {
            code: "new(\"reserve credits\", () => true, () => Console.WriteLine($\"  undo: release credits for {o.Id}\")),",
            note: {
              en: "A <b>step</b> has a name, a <code>Do</code> action and an <code>Undo</code> action. Reserving credits is undone by releasing them.",
              hi: "<b>Step</b> का एक नाम, एक <code>Do</code> और एक <code>Undo</code> action होता है। Credits reserve करने का undo उन्हें release करना है।",
              hg: "<b>Step</b> ka ek naam, ek <code>Do</code> aur ek <code>Undo</code> action hota hai. Credits reserve karne ka undo unhe release karna hai."
            }
          },
          {
            code: "new(\"charge card\", () => o.CardWorks,",
            note: {
              en: "Ravi's card fails here, so this step returns false. This is the failure that triggers the compensation.",
              hi: "Ravi का card यहाँ fail होता है, इसलिए यह step false लौटाता है। यही failure compensation चलाता है।",
              hg: "Ravi ka card yahan fail hota hai, isliye ye step false lautata hai. Yahi failure compensation chalata hai."
            }
          },
          {
            code: "var done = new Stack<Step>();",
            note: {
              en: "Remember only the steps that <b>finished</b>. A stack gives them back in reverse order, which is what compensation needs.",
              hi: "सिर्फ़ उन steps को याद रखो जो <b>पूरे हुए</b>। Stack उन्हें उल्टे क्रम में लौटाता है, जो compensation को चाहिए।",
              hg: "Sirf un steps ko yaad rakho jo <b>poore hue</b>. Stack unhe ulte kram mein lautata hai, jo compensation ko chahiye."
            }
          },
          {
            code: "done.Push(step);",
            note: {
              en: "After a step succeeds, push it. The failed step is never pushed, so it is not \"undone\": it never took effect.",
              hi: "Step सफल होने पर उसे push करो। Fail हुआ step कभी push नहीं होता, इसलिए उसका undo नहीं चलता: वह कभी लागू ही नहीं हुआ।",
              hg: "Step safal hone par use push karo. Fail hua step kabhi push nahi hota, isliye uska undo nahi chalta: woh kabhi laagu hi nahi hua."
            }
          },
          {
            code: "while (done.Count > 0) done.Pop().Undo();",
            note: {
              en: "The <b>compensation loop</b>: pop each finished step and run its undo. For order 9003 the card is refunded first, then the credits are released: reverse order.",
              hi: "<b>Compensation loop</b>: पूरे हुए हर step को pop करो और उसका undo चलाओ। Order 9003 में पहले card refund होता है, फिर credits release: उल्टा क्रम।",
              hg: "<b>Compensation loop</b>: poore hue har step ko pop karo aur uska undo chalao. Order 9003 mein pehle card refund hota hai, phir credits release: ulta kram."
            }
          },
          {
            code: "return \"cancelled\";",
            note: {
              en: "The caller gets a clear final state: confirmed or cancelled. The customer sees \"processing\" until then, which is the eventual-consistency price.",
              hi: "Caller को साफ़ आख़िरी हालत मिलती है: confirmed या cancelled। तब तक customer को \"processing\" दिखता है, यही eventual consistency की क़ीमत है।",
              hg: "Caller ko saaf aakhiri haalat milti hai: confirmed ya cancelled. Tab tak customer ko \"processing\" dikhta hai, yahi eventual consistency ki keemat hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Putting the hardest-to-undo step first. Reserve credits first (easy to release) and confirm last; an SMS or confirmation that was already sent cannot be taken back.</li><li>Compensations that are not idempotent. A refund message can be delivered twice, so the second one must do nothing (the exercise shows how).</li><li>Treating this in-memory model as production. A real saga stores its state in a database and publishes events through an outbox (Day 16), so a crash in the middle can resume, and a stuck saga needs a timeout and an alert.</li></ul>",
          hi: "<ul><li>सबसे मुश्किल-से-undo वाला step पहले रखना। Credits reserve पहले करो (release करना आसान) और confirm आख़िर में; जो SMS या confirmation भेजा जा चुका वह वापस नहीं लिया जा सकता।</li><li>Compensations जो idempotent नहीं हैं। Refund message दो बार आ सकता है, इसलिए दूसरे को कुछ नहीं करना चाहिए (exercise में दिखाया है)।</li><li>इस in-memory model को production समझना। असली saga अपनी state database में रखता है और outbox से events भेजता है (Day 16), ताकि बीच में crash हो तो आगे बढ़ सके, और अटके saga के लिए timeout और alert चाहिए।</li></ul>",
          hg: "<ul><li>Sabse mushkil-se-undo wala step pehle rakhna. Credits reserve pehle karo (release karna aasaan) aur confirm aakhir mein; jo SMS ya confirmation bheja ja chuka woh wapas nahi liya ja sakta.</li><li>Compensations jo idempotent nahi hain. Refund message do baar aa sakta hai, isliye doosre ko kuchh nahi karna chahiye (exercise mein dikhaya hai).</li><li>Is in-memory model ko production samajhna. Asli saga apni state database mein rakhta hai aur outbox se events bhejta hai (Day 16), taaki beech mein crash ho to aage badh sake, aur atke saga ke liye timeout aur alert chahiye.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a saga when one business action spans several services with separate databases. If everything lives in one database (a modular monolith, Day 15), use a normal transaction; it is simpler and safer. (the Day 16 Deep Dive compares orchestration and choreography).</p>",
          hi: "<p>जब एक business काम अलग databases वाली कई services में फैला हो तब saga लो। सब कुछ एक database में हो (modular monolith, Day 15) तो normal transaction लो; वह आसान और सुरक्षित है। (Day 16 का Deep Dive orchestration और choreography की तुलना करता है)।</p>",
          hg: "<p>Jab ek business kaam alag databases wali kai services mein phaila ho tab saga lo. Sab kuchh ek database mein ho (modular monolith, Day 15) to normal transaction lo; woh aasaan aur surakshit hai. (Day 16 ka Deep Dive orchestration aur choreography ki tulna karta hai).</p>"
        },
        exercise: {
          task: {
            en: "<p>The refund compensation can be delivered twice. Write a <code>Refund(orderId)</code> that refunds only once; the second call should say it was already refunded. Print both results and the number of refunds issued.</p>",
            hi: "<p>Refund compensation दो बार आ सकता है। ऐसा <code>Refund(orderId)</code> लिखो जो सिर्फ़ एक बार refund करे; दूसरी call बताए कि पहले ही refund हो चुका है। दोनों results और दिए गए refunds की संख्या print करो।</p>",
            hg: "<p>Refund compensation do baar aa sakta hai. Aisa <code>Refund(orderId)</code> likho jo sirf ek baar refund kare; doosri call bataye ki pehle hi refund ho chuka hai. Dono results aur diye gaye refunds ki sankhya print karo.</p>"
          },
          hint: {
            en: "<p><code>HashSet.Add</code> returns false when the item is already there. Use that as the check.</p>",
            hi: "<p>Item पहले से हो तो <code>HashSet.Add</code> false लौटाता है। इसी को check बनाओ।</p>",
            hg: "<p>Item pehle se ho to <code>HashSet.Add</code> false lautata hai. Isi ko check banao.</p>"
          },
          solution: {
            caption: {
              en: "Solution: an idempotent compensation",
              hi: "हल: idempotent compensation",
              hg: "Solution: idempotent compensation"
            },
            src: "// The compensation itself can be retried, so make it idempotent: a second refund does nothing.\nvar refunded = new HashSet<int>();\n\nConsole.WriteLine(Refund(9003));\nConsole.WriteLine(Refund(9003));      // the same message delivered again\nConsole.WriteLine($\"refunds issued: {refunded.Count}\");\n\nstring Refund(int orderId) =>\n    refunded.Add(orderId) ? $\"order {orderId}: refunded\" : $\"order {orderId}: already refunded, ignored\";",
            check: "run",
            expected: "order 9003: refunded\norder 9003: already refunded, ignored\nrefunds issued: 1"
          }
        },
        quiz: {
          q: {
            en: "Credits are reserved, then the card charge fails. What does the saga do?",
            hi: "Credits reserve हो गए, फिर card charge fail हुआ। Saga क्या करता है?",
            hg: "Credits reserve ho gaye, phir card charge fail hua. Saga kya karta hai?"
          },
          options: [
            {
              en: "Runs the undo of the finished steps in reverse and cancels",
              hi: "पूरे हुए steps का undo उल्टे क्रम में चलाकर cancel करता है",
              hg: "Poore hue steps ka undo ulte kram mein chalakar cancel karta hai"
            },
            {
              en: "Retries the charge forever",
              hi: "Charge को हमेशा retry करता है",
              hg: "Charge ko hamesha retry karta hai"
            },
            {
              en: "Leaves the credits reserved",
              hi: "Credits reserved छोड़ देता है",
              hg: "Credits reserved chhod deta hai"
            },
            {
              en: "Rolls back a distributed database transaction",
              hi: "Distributed database transaction को rollback करता है",
              hg: "Distributed database transaction ko rollback karta hai"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>The saga compensates the steps that finished (release the credits) and ends the order as cancelled. There is no distributed transaction to roll back; that is why the saga exists. Retrying a card forever or leaving the credits locked would be wrong.</p>",
            hi: "<p>Saga पूरे हुए steps की compensation करता है (credits release) और order को cancelled पर ख़त्म करता है। Rollback करने के लिए कोई distributed transaction है ही नहीं; इसीलिए saga है। Card को हमेशा retry करना या credits locked छोड़ना ग़लत होता।</p>",
            hg: "<p>Saga poore hue steps ki compensation karta hai (credits release) aur order ko cancelled par khatam karta hai. Rollback karne ke liye koi distributed transaction hai hi nahi; isiliye saga hai. Card ko hamesha retry karna ya credits locked chhodna galat hota.</p>"
          }
        },
        recap: {
          en: "<ul><li>As in Day 16, a saga is a list of local steps, each with an undo; on failure undo the finished steps in reverse.</li><li>Compensations must be idempotent, and real sagas keep their state in a database with an outbox.</li><li>Use a normal transaction when everything is in one database.</li></ul>",
          hi: "<ul><li>Day 16 की तरह, saga local steps की list है, हर step का एक undo; failure पर पूरे हुए steps का undo उल्टे क्रम में चलाओ।</li><li>Compensations idempotent होनी चाहिए, और असली sagas अपनी state outbox के साथ database में रखते हैं।</li><li>सब कुछ एक database में हो तो normal transaction लो।</li></ul>",
          hg: "<ul><li>Day 16 ki tarah, saga local steps ki list hai, har step ka ek undo; failure par poore hue steps ka undo ulte kram mein chalao.</li><li>Compensations idempotent honi chahiye, aur asli sagas apni state outbox ke saath database mein rakhte hain.</li><li>Sab kuchh ek database mein ho to normal transaction lo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "An order saga with reverse compensation",
            hi: "Reverse compensation वाला order saga",
            hg: "Reverse compensation wala order saga"
          },
          src: "// Order saga with compensations: if a step fails, undo the finished steps in reverse order.\nOrder[] orders = [new(9001, \"Asha\"), new(9002, \"Ravi\", CardWorks: false), new(9003, \"Meena\", CanConfirm: false)];\n\nforeach (var order in orders)\n{\n    Console.WriteLine($\"order {order.Id} ({order.Customer})\");\n    Console.WriteLine($\"  result: {Saga.Run(order)}\");\n}\n\nrecord Order(int Id, string Customer, bool CardWorks = true, bool CanConfirm = true);\nrecord Step(string Name, Func<bool> Do, Action Undo);\n\nstatic class Saga\n{\n    public static string Run(Order o)\n    {\n        Step[] steps =\n        [\n            new(\"reserve credits\", () => true, () => Console.WriteLine($\"  undo: release credits for {o.Id}\")),\n            new(\"charge card\", () => o.CardWorks, () => Console.WriteLine($\"  undo: refund card for {o.Id}\")),\n            new(\"confirm order\", () => o.CanConfirm, () => { })          // e.g. the pack is sold out\n        ];\n\n        var done = new Stack<Step>();\n        foreach (var step in steps)\n        {\n            if (step.Do()) { Console.WriteLine($\"  {step.Name}: ok\"); done.Push(step); continue; }\n\n            Console.WriteLine($\"  {step.Name}: FAILED\");\n            while (done.Count > 0) done.Pop().Undo();          // compensate in reverse order\n            return \"cancelled\";\n        }\n        return \"confirmed\";\n    }\n}",
          check: "run",
          expected: "order 9001 (Asha)\n  reserve credits: ok\n  charge card: ok\n  confirm order: ok\n  result: confirmed\norder 9002 (Ravi)\n  reserve credits: ok\n  charge card: FAILED\n  undo: release credits for 9002\n  result: cancelled\norder 9003 (Meena)\n  reserve credits: ok\n  charge card: ok\n  confirm order: FAILED\n  undo: refund card for 9003\n  undo: release credits for 9003\n  result: cancelled"
        }
      ]
    },
    {
      id: "building-blocks-overview",
      depth: "detailed",
      title: {
        en: "Building blocks — load balancer, scaling, caching, database scaling, queues, CAP",
        hi: "Building blocks — load balancer, scaling, caching, database scaling, queues और CAP",
        hg: "Building blocks — load balancer, scaling, caching, database scaling, queues, CAP"
      },
      body: {
        en: "<p><b>Picture — a railway station:</b> many ticket counters (servers) behind one queue manager (load balancer); a notice board (cache) so people do not queue to ask the same question; the main record room (database) that only staff enter; a parcel office with a token system (queue) so heavy luggage does not block the counter. Every design is these blocks in a different order.</p>\n<ul>\n<li><b>Load balancer:</b> spreads requests over identical servers and removes unhealthy ones (health checks). It works best when servers are <b>stateless</b>: no user data kept in server memory; sessions or state live in a shared store or in the token (JWT, Day 13).</li>\n<li><b>Vertical vs horizontal scaling:</b> vertical = a bigger machine (simple, has a ceiling and one failure point); horizontal = more machines (needs stateless services, gives resilience). Start vertical-simple, go horizontal when numbers demand.</li>\n<li><b>Other cache layers:</b> browser, CDN (static files close to the user), app-level cache, Redis (shared), then the database. The cache-aside read path is lesson 3.</li>\n<li><b>Database scaling, in order:</b> indexes and query fixes first (SQL days 18-19), then <b>read replicas</b> (reads scale, but replicas lag, so a read right after a write can be stale), then <b>partitioning / sharding</b> by a chosen key (writes scale; cross-shard queries and joins get hard). The shard key and consistent hashing are lesson 4.</li>\n<li><b>Queues for async work:</b> accept fast, process later; smooths spikes, allows retries and a dead-letter queue (Day 16). Price: eventual consistency and duplicates, so make consumers idempotent (Days 13 and 16).</li>\n<li><b>CAP:</b> when a network partition happens, a distributed store must choose between <b>consistency</b> (refuse or delay some requests) and <b>availability</b> (answer, maybe with older data). <b>PACELC</b> adds: <b>else</b> (no partition) you still trade <b>latency</b> against consistency. It is a way to explain choices, not a product label.</li>\n</ul>\n<p>In an interview, add a block only when a number or a requirement asks for it, and say what it costs.</p>",
        hi: "<p><b>Picture — railway station:</b> बहुत सारी ticket खिड़कियाँ (servers) एक queue manager (load balancer) के पीछे; एक notice board (cache) ताकि लोग एक ही सवाल पूछने के लिए लाइन न लगाएँ; मुख्य record room (database) जिसमें सिर्फ़ staff जाता है; token system वाला parcel office (queue) ताकि भारी सामान खिड़की न रोके। हर design इन्हीं blocks का अलग order है।</p>\n<ul>\n<li><b>Load balancer:</b> requests को एक जैसे servers में बाँटता है और unhealthy servers हटा देता है (health checks)। यह तब सबसे अच्छा चलता है जब servers <b>stateless</b> हों: server की memory में user data नहीं; session या state shared store में या token (JWT, Day 13) में रहे।</li>\n<li><b>Vertical बनाम horizontal scaling:</b> vertical = बड़ी machine (सरल, पर एक सीमा और एक failure point); horizontal = ज़्यादा machines (stateless services चाहिए, resilience मिलती है)। Simple vertical से शुरू करो, numbers माँगें तब horizontal जाओ।</li>\n<li><b>बाकी cache layers:</b> browser, CDN (user के पास static files), app-level cache, Redis (shared), फिर database। Cache-aside read path पाठ 3 में है।</li>\n<li><b>Database scaling, क्रम से:</b> पहले indexes और query fixes (SQL days 18-19), फिर <b>read replicas</b> (reads scale होती हैं, पर replicas पीछे रहती हैं, इसलिए write के तुरंत बाद की read stale हो सकती है), फिर चुनी हुई key से <b>partitioning / sharding</b> (writes scale होती हैं; cross-shard queries और joins मुश्किल)। Shard key और consistent hashing पाठ 4 में हैं।</li>\n<li><b>Async काम के लिए queues:</b> जल्दी accept करो, बाद में process करो; spikes smooth, retries और dead-letter queue (Day 16)। कीमत: eventual consistency और duplicates, इसलिए consumers को idempotent बनाओ (Days 13 और 16)।</li>\n<li><b>CAP:</b> network partition हो तो distributed store को <b>consistency</b> (कुछ requests मना या देर से) और <b>availability</b> (जवाब दो, शायद पुराने data के साथ) में से चुनना पड़ता है। <b>PACELC</b> जोड़ता है: partition न हो तब भी <b>latency</b> और consistency के बीच trade करना पड़ता है। यह choices समझाने का तरीक़ा है, product का label नहीं।</li>\n</ul>\n<p>Interview में block तभी जोड़ो जब कोई number या requirement माँगे, और बताओ कि उसकी कीमत क्या है।</p>",
        hg: "<p><b>Picture — railway station:</b> bahut saari ticket khidkiyan (servers) ek queue manager (load balancer) ke peeche; ek notice board (cache) taaki log ek hi sawaal poochne ke liye line na lagayein; mukhya record room (database) jisme sirf staff jaata hai; token system wala parcel office (queue) taaki bhaari saaman khidki na roke. Har design inhi blocks ka alag order hai.</p>\n<ul>\n<li><b>Load balancer:</b> requests ko ek jaise servers mein baantta hai aur unhealthy servers hata deta hai (health checks). Yeh tab sabse achha chalta hai jab servers <b>stateless</b> hon: server ki memory mein user data nahi; session ya state shared store mein ya token (JWT, Day 13) mein rahe.</li>\n<li><b>Vertical vs horizontal scaling:</b> vertical = badi machine (saral, par ek seema aur ek failure point); horizontal = zyada machines (stateless services chahiye, resilience milti hai). Simple vertical se shuru karo, numbers maangein tab horizontal jao.</li>\n<li><b>Baaki cache layers:</b> browser, CDN (user ke paas static files), app-level cache, Redis (shared), phir database. Cache-aside read path lesson 3 mein hai.</li>\n<li><b>Database scaling, kram se:</b> pehle indexes aur query fixes (SQL days 18-19), phir <b>read replicas</b> (reads scale hoti hain, par replicas peeche rehti hain, isliye write ke turant baad ki read stale ho sakti hai), phir chuni hui key se <b>partitioning / sharding</b> (writes scale hoti hain; cross-shard queries aur joins mushkil). Shard key aur consistent hashing lesson 4 mein hain.</li>\n<li><b>Async kaam ke liye queues:</b> jaldi accept karo, baad mein process karo; spikes smooth, retries aur dead-letter queue (Day 16). Keemat: eventual consistency aur duplicates, isliye consumers ko idempotent banao (Days 13 aur 16).</li>\n<li><b>CAP:</b> network partition ho to distributed store ko <b>consistency</b> (kuch requests mana ya der se) aur <b>availability</b> (jawab do, shayad purane data ke saath) mein se chunna padta hai. <b>PACELC</b> jodta hai: partition na ho tab bhi <b>latency</b> aur consistency ke beech trade karna padta hai. Yeh choices samjhane ka tareeka hai, product ka label nahi.</li>\n</ul>\n<p>Interview mein block tabhi jodo jab koi number ya requirement maange, aur batao ki uski keemat kya hai.</p>"
      }
    },
    {
      id: "numbers-to-remember",
      depth: "detailed",
      title: {
        en: "Numbers worth remembering",
        hi: "याद रखने लायक़ numbers",
        hg: "Yaad rakhne laayak numbers"
      },
      body: {
        en: "<ul><li><b>Time:</b> a day has 86,400 seconds (use 100,000 in a hurry); a month has about 2.6 million.</li><li><b>Units:</b> 1 KB is a thousand bytes, 1 MB a million, 1 GB a billion, 1 TB a trillion.</li><li><b>Bandwidth</b> = QPS x payload size. The <b>read:write ratio</b> tells you whether to tune reads (caches, replicas) or writes (queues, partitioning).</li><li><b>Hot data:</b> a common rule of thumb is that about 20% of the data serves 80% of the traffic, so caching the hot 20% of one day's reads is often enough.</li><li><b>Latency, in order of size:</b> memory is nanoseconds to microseconds, a network hop inside one data centre is about half a millisecond, a disk or database read is milliseconds, a round trip across continents is 100+ ms. Use these to compare options, not to quote.</li></ul><p>How to speak it: \"Assume 10 million users, 20% active a day, 5 messages each: that is 10 million a day, about 115 a second, say 350 at peak. Does that match your expectation?\"</p>",
        hi: "<ul><li><b>समय:</b> एक दिन में 86,400 seconds (जल्दी में 1,00,000 लो); एक महीने में लगभग 26 लाख।</li><li><b>Units:</b> 1 KB यानी हज़ार bytes, 1 MB दस लाख, 1 GB अरब, 1 TB लाख करोड़।</li><li><b>Bandwidth</b> = QPS x payload size। <b>Read:write ratio</b> बताता है कि reads सुधारनी हैं (caches, replicas) या writes (queues, partitioning)।</li><li><b>Hot data:</b> मोटा नियम है कि लगभग 20% data 80% traffic सँभालता है, इसलिए एक दिन की reads का hot 20% cache कर लेना अक्सर काफ़ी होता है।</li><li><b>Latency, छोटे से बड़े क्रम में:</b> memory में nanoseconds से microseconds, एक data centre के अंदर network hop लगभग आधा millisecond, disk या database read में milliseconds, दूसरे continent तक round trip 100+ ms। इन्हें options compare करने के लिए use करो, ठीक-ठीक बोलने के लिए नहीं।</li></ul><p>बोलने का तरीका: \"मान लो 1 करोड़ users, रोज़ 20% active, हर एक के 5 messages: यानी रोज़ 1 करोड़, लगभग 115 प्रति सेकंड, peak पर कहो 350। क्या यह आपकी उम्मीद से मेल खाता है?\"</p>",
        hg: "<ul><li><b>Samay:</b> ek din mein 86,400 seconds (jaldi mein 1,00,000 lo); ek mahine mein lagbhag 26 lakh.</li><li><b>Units:</b> 1 KB yaani hazaar bytes, 1 MB das lakh, 1 GB arab, 1 TB lakh crore.</li><li><b>Bandwidth</b> = QPS x payload size. <b>Read:write ratio</b> batata hai ki reads sudharni hain (caches, replicas) ya writes (queues, partitioning).</li><li><b>Hot data:</b> mota niyam hai ki lagbhag 20% data 80% traffic sambhalta hai, isliye ek din ki reads ka hot 20% cache kar lena aksar kaafi hota hai.</li><li><b>Latency, chhote se bade kram mein:</b> memory mein nanoseconds se microseconds, ek data centre ke andar network hop lagbhag aadha millisecond, disk ya database read mein milliseconds, doosre continent tak round trip 100+ ms. Inhe options compare karne ke liye use karo, theek-theek bolne ke liye nahi.</li></ul><p>Bolne ka tareeka: \"Maan lo 1 crore users, roz 20% active, har ek ke 5 messages: yaani roz 1 crore, lagbhag 115 prati second, peak par kaho 350. Kya ye aapki ummeed se mel khaata hai?\"</p>"
      }
    },
    {
      id: "url-shortener-design",
      depth: "detailed",
      title: {
        en: "Design 1, full walkthrough: URL shortener",
        hi: "Design 1, पूरा walkthrough: URL shortener",
        hg: "Design 1, poora walkthrough: URL shortener"
      },
      body: {
        en: "<p><b>1. Requirements.</b> Functional: create a short URL for a long one (optional custom alias, optional expiry), redirect when opened. Non-functional: redirect must be fast and highly available; creates are far fewer than reads; links should not be guessable if they are private.</p>\n<p><b>2. Estimates</b> (assumed 100M new URLs a month, 100:1 reads): about 38 writes/s, about 3,900 reads/s, peak about 7,700; 5 years is about 6 billion records, about 3 TB at 500 bytes, about 9 TB with 3 copies (the capacity puzzle shows the arithmetic). Reads dominate and the data is small, so <b>cache the hot links</b>.</p>\n<p><b>3. API.</b> <code>POST /api/urls</code> with <code>{longUrl, alias?, expiresAt?}</code> returns <code>201</code> with the short URL (accept an idempotency key so a retry does not make two links). <code>GET /{code}</code> returns a redirect, or <code>404</code> (<code>410</code> if expired).</p>\n<p><b>4. Data.</b> One table keyed by <code>Code</code>: <code>Code, LongUrl, CreatedAt, ExpiresAt, OwnerId</code>. Access is purely \"get by key\", so SQL works for a long time; a key-value store is the natural next step at very large scale.</p>\n<p><b>5. High-level design.</b></p>\n<pre>\nBrowser --> Load balancer --> Redirect/API servers (stateless)\n                                |  1. GET code from Redis\n                                |  2. miss: read DB, fill Redis (TTL)\n                                v\n                   Redis cache        Database (replicas for reads)\n                                |\n  click event --> Queue --> analytics worker (off the hot path)\n</pre>\n<p><b>6. Deep dives.</b> Counter plus base62 and 301 vs 302 are lesson 5; cache-aside is lesson 3. Added here: <b>other code options</b>, a truncated hash of the URL (collisions to handle) or a random code with a unique-key check (unguessable, good for private links). <b>Expiry:</b> store <code>ExpiresAt</code>, answer <code>410</code> after it, and keep the cache TTL no longer than the link's remaining life. <b>Analytics:</b> the redirect only drops a click event on the queue; counting happens off the hot path.</p>\n<p><b>7. Trade-offs and failures.</b> Sequential ids are guessable (shuffle or use random codes for private links). If Redis is down, the database must carry the reads, so keep replicas and a rate limit. Abuse and malware links need a check on create. Custom aliases need a uniqueness check and reserved words.</p>",
        hi: "<p><b>1. Requirements.</b> Functional: लंबे URL का short URL बनाओ (optional custom alias, optional expiry), खोलने पर redirect करो। Non-functional: redirect तेज़ और highly available हो; creates, reads से बहुत कम हैं; private links guess न हो सकें।</p>\n<p><b>2. Estimates</b> (मान लिया महीने में 100M नए URLs, 100:1 reads): लगभग 38 writes/s, लगभग 3,900 reads/s, peak लगभग 7,700; 5 साल में लगभग 6 billion records, 500 bytes पर लगभग 3 TB, 3 copies के साथ लगभग 9 TB (capacity puzzle में हिसाब दिखता है)। Reads हावी हैं और data छोटा है, इसलिए <b>hot links को cache करो</b>।</p>\n<p><b>3. API.</b> <code>POST /api/urls</code> में <code>{longUrl, alias?, expiresAt?}</code>, जवाब <code>201</code> और short URL (idempotency key लो ताकि retry से दो links न बनें)। <code>GET /{code}</code> redirect देता है, या <code>404</code> (expire हो तो <code>410</code>)।</p>\n<p><b>4. Data.</b> <code>Code</code> key वाली एक table: <code>Code, LongUrl, CreatedAt, ExpiresAt, OwnerId</code>। Access सिर्फ़ \"key से get\" है, इसलिए SQL लंबे समय तक चलता है; बहुत बड़े scale पर key-value store अगला natural क़दम है।</p>\n<p><b>5. High-level design.</b></p>\n<pre>\nBrowser --> Load balancer --> Redirect/API servers (stateless)\n                                |  1. GET code from Redis\n                                |  2. miss: read DB, fill Redis (TTL)\n                                v\n                   Redis cache        Database (replicas for reads)\n                                |\n  click event --> Queue --> analytics worker (off the hot path)\n</pre>\n<p><b>6. Deep dives.</b> Counter + base62 और 301 बनाम 302 पाठ 5 में हैं; cache-aside पाठ 3 में। यहाँ नया: <b>code बनाने के दूसरे तरीके</b>, URL का hash काटकर (collisions संभालने पड़ेंगे) या random code + unique-key check (guess नहीं हो सकता, private links के लिए अच्छा)। <b>Expiry:</b> <code>ExpiresAt</code> रखो, उसके बाद <code>410</code> दो, और cache का TTL link की बची हुई उम्र से ज़्यादा मत रखो। <b>Analytics:</b> redirect सिर्फ़ click event queue में डालता है; गिनती hot path से बाहर होती है।</p>\n<p><b>7. Trade-offs और failures.</b> Sequential ids guess हो सकती हैं (private links के लिए shuffle या random codes)। Redis down हो तो reads database को उठानी पड़ेंगी, इसलिए replicas और rate limit रखो। Abuse और malware links के लिए create पर check चाहिए। Custom aliases के लिए uniqueness check और reserved words चाहिए।</p>",
        hg: "<p><b>1. Requirements.</b> Functional: lambe URL ka short URL banao (optional custom alias, optional expiry), kholne par redirect karo. Non-functional: redirect tez aur highly available ho; creates, reads se bahut kam hain; private links guess na ho sakein.</p>\n<p><b>2. Estimates</b> (maan liya mahine mein 100M naye URLs, 100:1 reads): lagbhag 38 writes/s, lagbhag 3,900 reads/s, peak lagbhag 7,700; 5 saal mein lagbhag 6 billion records, 500 bytes par lagbhag 3 TB, 3 copies ke saath lagbhag 9 TB (capacity puzzle mein hisaab dikhta hai). Reads haavi hain aur data chhota hai, isliye <b>hot links ko cache karo</b>.</p>\n<p><b>3. API.</b> <code>POST /api/urls</code> mein <code>{longUrl, alias?, expiresAt?}</code>, jawab <code>201</code> aur short URL (idempotency key lo taaki retry se do links na banein). <code>GET /{code}</code> redirect deta hai, ya <code>404</code> (expire ho to <code>410</code>).</p>\n<p><b>4. Data.</b> <code>Code</code> key wali ek table: <code>Code, LongUrl, CreatedAt, ExpiresAt, OwnerId</code>. Access sirf \"key se get\" hai, isliye SQL lambe samay tak chalta hai; bahut bade scale par key-value store agla natural kadam hai.</p>\n<p><b>5. High-level design.</b></p>\n<pre>\nBrowser --> Load balancer --> Redirect/API servers (stateless)\n                                |  1. GET code from Redis\n                                |  2. miss: read DB, fill Redis (TTL)\n                                v\n                   Redis cache        Database (replicas for reads)\n                                |\n  click event --> Queue --> analytics worker (off the hot path)\n</pre>\n<p><b>6. Deep dives.</b> Counter + base62 aur 301 vs 302 lesson 5 mein hain; cache-aside lesson 3 mein. Yahan naya: <b>code banane ke doosre tareeke</b>, URL ka hash kaatkar (collisions sambhalne padenge) ya random code + unique-key check (guess nahi ho sakta, private links ke liye achha). <b>Expiry:</b> <code>ExpiresAt</code> rakho, uske baad <code>410</code> do, aur cache ka TTL link ki bachi hui umr se zyada mat rakho. <b>Analytics:</b> redirect sirf click event queue mein daalta hai; ginti hot path se bahar hoti hai.</p>\n<p><b>7. Trade-offs aur failures.</b> Sequential ids guess ho sakti hain (private links ke liye shuffle ya random codes). Redis down ho to reads database ko uthani padengi, isliye replicas aur rate limit rakho. Abuse aur malware links ke liye create par check chahiye. Custom aliases ke liye uniqueness check aur reserved words chahiye.</p>"
      }
    },
    {
      id: "notification-design",
      depth: "detailed",
      title: {
        en: "Design 2, full walkthrough: notification / WhatsApp-bot system",
        hi: "Design 2, पूरा walkthrough: notification / WhatsApp-bot system",
        hg: "Design 2, poora walkthrough: notification / WhatsApp-bot system"
      },
      body: {
        en: "<p><b>Picture — a post office with a sorting room:</b> letters arrive at the counter (webhook), the clerk stamps and drops them in a tray quickly (queue), sorters work through the tray (workers), and outgoing letters go through the courier who only accepts so many parcels per hour (provider rate limit). A delivery receipt comes back later (status callback).</p>\n<p><b>1. Requirements.</b> Functional: receive customer messages from a messaging provider (webhook), run the bot logic, send replies and planned notifications (templates), track delivery status (sent, delivered, read, failed). Non-functional: do not lose a message, acknowledge the webhook fast, respect per-provider rate limits, no duplicate sends, absorb campaign spikes, keep order within one conversation where it matters, and honour opt-outs.</p>\n<p><b>2. Estimates</b> (assumed 5 million messages a day in and out): about 58 per second on average, about 175 at peak (3x; a campaign can burst far higher and the queue absorbs it); small payloads (about 1 KB), so storage is about 5 GB a day. A <b>campaign</b> of 1 million sends can arrive in minutes, so the provider limit, not our servers, is the bottleneck.</p>\n<p><b>3. API.</b> Inbound: <code>POST /webhooks/messages</code> (verify the provider's signature, return <code>200</code> quickly). Outbound for other systems: <code>POST /api/notifications</code> with an <code>Idempotency-Key</code> header, returns <code>202 Accepted</code> and a notification id; <code>GET /api/notifications/{id}</code> shows status.</p>\n<p><b>4. Data.</b> <code>Messages</code> (id, conversation, direction, template, status, provider message id, attempts), <code>Conversations</code>, <code>OptOuts</code>, <code>Templates</code>. A unique index on the provider's message id removes duplicate webhooks.</p>\n<p><b>5. High-level design</b> (component names are generic; the Azure services come on Day 20):</p>\n<pre>\nProvider --webhook--> Ingress API --> [inbound queue] --> Bot workers\n                      (verify, dedupe,                       |  business logic,\n                       200 fast)                             |  pick template\n                                                             v\nStatus callback --> Ingress API --> Messages DB     [outbound queue per provider]\n                                                             |\n                                          Sender workers (rate limiter, retry)\n                                                             v\n                                                      Provider API\n         failures after N tries --> dead-letter queue --> alert + manual replay\n</pre>\n<p><b>6. Deep dives.</b> Dedupe, retry with backoff and dead-letter are lesson 7; the token bucket is lesson 6 (here one bucket per provider account, and a campaign <b>waits</b> in the queue for tokens instead of being rejected). Added here: the provider retries a webhook on any error or slow answer, so duplicate inbound messages are normal; dedupe them on the <b>provider's</b> message id with a unique index. <b>Status callbacks</b> may arrive late or out of order: only move a status forward (sent, delivered, read) and ignore older ones. <b>Templates:</b> business-initiated messages usually must use pre-approved templates (check the provider's current rules).</p>\n<p><b>7. Trade-offs and failures.</b> Provider down: messages wait in the queue and the circuit breaker stops hammering it (Day 16). Poison message: dead-letter it. Monitor queue depth, age of the oldest message, failure rate by provider. Next: priority queues (OTP before marketing), multi-provider failover.</p>",
        hi: "<p><b>Picture — sorting room वाला post office:</b> letters counter पर आते हैं (webhook), clerk जल्दी से stamp लगाकर tray में डाल देता है (queue), sorters tray से काम निकालते हैं (workers), और बाहर जाने वाले letters courier से जाते हैं जो घंटे में सिर्फ़ इतने parcels लेता है (provider rate limit)। Delivery receipt बाद में लौटती है (status callback)।</p>\n<p><b>1. Requirements.</b> Functional: messaging provider से customer messages लो (webhook), bot logic चलाओ, replies और planned notifications भेजो (templates), delivery status track करो (sent, delivered, read, failed)। Non-functional: कोई message न खोए, webhook को जल्दी ack करो, हर provider की rate limit मानो, duplicate send न हो, campaign के spikes सोख लो, जहाँ ज़रूरी हो एक conversation में order रखो, और opt-outs को respect करो।</p>\n<p><b>2. Estimates</b> (मान लिया रोज़ 5 million messages आना-जाना): average लगभग 58 प्रति second, peak (3 गुना) पर लगभग 175 (campaign इससे कहीं ऊँचा burst दे सकता है और queue उसे सोख लेती है); payload छोटे (लगभग 1 KB), इसलिए storage लगभग 5 GB रोज़। 1 million sends का <b>campaign</b> मिनटों में आ सकता है, इसलिए bottleneck हमारे servers नहीं, provider की limit है।</p>\n<p><b>3. API.</b> Inbound: <code>POST /webhooks/messages</code> (provider की signature verify करो, जल्दी <code>200</code> लौटाओ)। दूसरे systems के लिए outbound: <code>POST /api/notifications</code> में <code>Idempotency-Key</code> header, जवाब <code>202 Accepted</code> और notification id; <code>GET /api/notifications/{id}</code> status दिखाता है।</p>\n<p><b>4. Data.</b> <code>Messages</code> (id, conversation, direction, template, status, provider message id, attempts), <code>Conversations</code>, <code>OptOuts</code>, <code>Templates</code>। Provider के message id पर unique index duplicate webhooks हटा देता है।</p>\n<p><b>5. High-level design</b> (components के नाम generic हैं; Azure services Day 20 में आएँगी):</p>\n<pre>\nProvider --webhook--> Ingress API --> [inbound queue] --> Bot workers\n                      (verify, dedupe,                       |  business logic,\n                       200 fast)                             |  pick template\n                                                             v\nStatus callback --> Ingress API --> Messages DB     [outbound queue per provider]\n                                                             |\n                                          Sender workers (rate limiter, retry)\n                                                             v\n                                                      Provider API\n         failures after N tries --> dead-letter queue --> alert + manual replay\n</pre>\n<p><b>6. Deep dives.</b> Dedupe, backoff के साथ retry और dead-letter पाठ 7 में हैं; token bucket पाठ 6 में (यहाँ हर provider account का एक bucket, और campaign reject होने की जगह queue में tokens का <b>इंतज़ार</b> करता है)। यहाँ नया: error या धीमे जवाब पर provider webhook को फिर भेजता है, इसलिए duplicate inbound messages आम हैं; उन्हें <b>provider की</b> message id पर unique index से dedupe करो। <b>Status callbacks</b> देर से या उल्टे order में आ सकते हैं: status सिर्फ़ आगे बढ़ाओ (sent, delivered, read) और पुराने ignore करो। <b>Templates:</b> business की तरफ़ से शुरू होने वाले messages को आम तौर पर pre-approved templates चाहिए (provider के मौजूदा rules check करो)।</p>\n<p><b>7. Trade-offs और failures.</b> Provider down: messages queue में इंतज़ार करते हैं और circuit breaker उसे बार-बार मारने से रोकता है (Day 16)। Poison message: dead-letter में डालो। Queue depth, सबसे पुराने message की उम्र, provider के हिसाब से failure rate monitor करो। आगे: priority queues (OTP marketing से पहले), multi-provider failover।</p>",
        hg: "<p><b>Picture — sorting room wala post office:</b> letters counter par aate hain (webhook), clerk jaldi se stamp lagakar tray mein daal deta hai (queue), sorters tray se kaam nikaalte hain (workers), aur bahar jaane wale letters courier se jaate hain jo ghante mein sirf itne parcels leta hai (provider rate limit). Delivery receipt baad mein lautti hai (status callback).</p>\n<p><b>1. Requirements.</b> Functional: messaging provider se customer messages lo (webhook), bot logic chalao, replies aur planned notifications bhejo (templates), delivery status track karo (sent, delivered, read, failed). Non-functional: koi message na khoye, webhook ko jaldi ack karo, har provider ki rate limit maano, duplicate send na ho, campaign ke spikes sokh lo, jahan zaroori ho ek conversation mein order rakho, aur opt-outs ko respect karo.</p>\n<p><b>2. Estimates</b> (maan liya roz 5 million messages aana-jaana): average lagbhag 58 per second, peak (3 guna) par lagbhag 175 (campaign isse kahin ooncha burst de sakta hai aur queue use sokh leti hai); payload chhote (lagbhag 1 KB), isliye storage lagbhag 5 GB roz. 1 million sends ka <b>campaign</b> minuton mein aa sakta hai, isliye bottleneck hamare servers nahi, provider ki limit hai.</p>\n<p><b>3. API.</b> Inbound: <code>POST /webhooks/messages</code> (provider ki signature verify karo, jaldi <code>200</code> lautao). Doosre systems ke liye outbound: <code>POST /api/notifications</code> mein <code>Idempotency-Key</code> header, jawab <code>202 Accepted</code> aur notification id; <code>GET /api/notifications/{id}</code> status dikhata hai.</p>\n<p><b>4. Data.</b> <code>Messages</code> (id, conversation, direction, template, status, provider message id, attempts), <code>Conversations</code>, <code>OptOuts</code>, <code>Templates</code>. Provider ke message id par unique index duplicate webhooks hata deta hai.</p>\n<p><b>5. High-level design</b> (components ke naam generic hain; Azure services Day 20 mein aayengi):</p>\n<pre>\nProvider --webhook--> Ingress API --> [inbound queue] --> Bot workers\n                      (verify, dedupe,                       |  business logic,\n                       200 fast)                             |  pick template\n                                                             v\nStatus callback --> Ingress API --> Messages DB     [outbound queue per provider]\n                                                             |\n                                          Sender workers (rate limiter, retry)\n                                                             v\n                                                      Provider API\n         failures after N tries --> dead-letter queue --> alert + manual replay\n</pre>\n<p><b>6. Deep dives.</b> Dedupe, backoff ke saath retry aur dead-letter lesson 7 mein hain; token bucket lesson 6 mein (yahan har provider account ka ek bucket, aur campaign reject hone ki jagah queue mein tokens ka <b>intezaar</b> karta hai). Yahan naya: error ya dheeme jawab par provider webhook ko phir bhejta hai, isliye duplicate inbound messages aam hain; unhe <b>provider ki</b> message id par unique index se dedupe karo. <b>Status callbacks</b> der se ya ulte order mein aa sakte hain: status sirf aage badhao (sent, delivered, read) aur purane ignore karo. <b>Templates:</b> business ki taraf se shuru hone wale messages ko aam taur par pre-approved templates chahiye (provider ke maujooda rules check karo).</p>\n<p><b>7. Trade-offs aur failures.</b> Provider down: messages queue mein intezaar karte hain aur circuit breaker use baar-baar maarne se rokta hai (Day 16). Poison message: dead-letter mein daalo. Queue depth, sabse purane message ki umr, provider ke hisaab se failure rate monitor karo. Aage: priority queues (OTP marketing se pehle), multi-provider failover.</p>"
      }
    },
    {
      id: "order-management-design",
      depth: "detailed",
      title: {
        en: "Design 3, full walkthrough: order management on Azure",
        hi: "Design 3, पूरा walkthrough: Azure पर order management",
        hg: "Design 3, poora walkthrough: Azure par order management"
      },
      body: {
        en: "<p><b>Picture — a restaurant with a kitchen, a cashier and a delivery boy:</b> the order slip travels between them; each does one job, keeps its own register, and a missing step (payment failed) means the kitchen's work must be cancelled. This design mostly <b>reuses Day 15 and Day 16</b>; it shows you can combine them.</p>\n<p><b>Requirements.</b> Place an order, pay, reserve stock, ship, show status, cancel. Non-functional: never double-charge, never lose an order, handle sale-day spikes, a customer sees their own orders quickly, audit trail.</p>\n<p><b>Estimates</b> (assumed 1 million orders a day): about 12 per second average, a flash sale may reach 50-100 times that for minutes; status checks are read-heavy. So protect checkout with a queue (load levelling) and serve \"my orders\" from a cache or read model.</p>\n<p><b>API.</b> <code>POST /orders</code> with an idempotency key (Day 13) returns <code>202</code> or <code>201</code> plus the id; <code>GET /orders/{id}</code>, <code>GET /customers/{id}/orders</code>, <code>POST /orders/{id}/cancel</code>.</p>\n<p><b>Data and boundaries (Day 15):</b> Orders, Inventory, Payments, Shipping, Notifications as separate bounded contexts, <b>one database per service</b>; the Order is an aggregate that guards its own rules. Shard key later: <b>customer id</b>, because the main query is \"orders of this customer\".</p>\n<pre>\nClient --> API gateway --> Orders service --> Orders DB (+ outbox table)\n                                |\n                  outbox relay --> OrderPlaced\n                                |\n          Inventory svc: reserve stock --> StockReserved\n                                |\n          Payments svc: charge --> PaymentSucceeded\n                                |\n          Orders svc: confirm --> Notifications svc (Design 2)\n\n  Saga (sequential): place -> reserve -> pay -> confirm\n  Failure: payment fails -> Inventory releases the stock -> Orders cancels\n  Read side: events --> \"my orders\" read model (cache) --> GET /customers/{id}/orders\n</pre>\n<p><b>Deep dives.</b> The saga with compensations is lesson 8, the outbox is Day 16, and idempotency on create and in every consumer is lesson 7. Added here: a <b>read model</b> for order lists (CQRS, Day 11), fed by the events. <b>Spikes:</b> accept the order, queue the heavy steps, tell the customer \"processing\". <b>On Azure</b> the blocks commonly map to Service Bus (queue/topic), Azure SQL, Azure Managed Redis (successor to Azure Cache for Redis), API Management, and App Service or AKS; exact choices, tiers and limits are Day 20 (check current limits).</p>\n<p><b>Trade-offs.</b> Showing \"order received\" before \"confirmed\" is a product decision, not only a technical one. Orchestration vs choreography and the modular-monolith option are in lesson 8. A failure mode special to this design: stock is reserved but the payment service never answers, so the saga needs a timeout that releases the stock, plus an alert.</p>",
        hi: "<p><b>Picture — kitchen, cashier और delivery boy वाला restaurant:</b> order slip उनके बीच घूमती है; हर कोई एक काम करता है, अपना register रखता है, और कोई step छूटे (payment fail) तो kitchen का काम cancel करना पड़ता है। यह design ज़्यादातर <b>Day 15 और Day 16 को reuse</b> करता है; यह दिखाता है कि तुम उन्हें जोड़ सकते हो।</p>\n<p><b>Requirements.</b> Order लगाओ, pay करो, stock reserve करो, ship करो, status दिखाओ, cancel करो। Non-functional: कभी double-charge नहीं, कोई order नहीं खोए, sale वाले दिन के spikes संभलें, customer को अपने orders जल्दी दिखें, audit trail।</p>\n<p><b>Estimates</b> (मान लिया रोज़ 1 million orders): average लगभग 12 प्रति second, flash sale में कुछ मिनटों के लिए इसका 50-100 गुना हो सकता है; status checks read-heavy हैं। इसलिए checkout को queue से बचाओ (load levelling) और \"my orders\" को cache या read model से दो।</p>\n<p><b>API.</b> <code>POST /orders</code> में idempotency key (Day 13), जवाब <code>202</code> या <code>201</code> और id; <code>GET /orders/{id}</code>, <code>GET /customers/{id}/orders</code>, <code>POST /orders/{id}/cancel</code>।</p>\n<p><b>Data और boundaries (Day 15):</b> Orders, Inventory, Payments, Shipping, Notifications अलग bounded contexts, <b>हर service का अपना database</b>; Order एक aggregate है जो अपने rules खुद संभालता है। आगे की shard key: <b>customer id</b>, क्योंकि मुख्य query \"इस customer के orders\" है।</p>\n<pre>\nClient --> API gateway --> Orders service --> Orders DB (+ outbox table)\n                                |\n                  outbox relay --> OrderPlaced\n                                |\n          Inventory svc: reserve stock --> StockReserved\n                                |\n          Payments svc: charge --> PaymentSucceeded\n                                |\n          Orders svc: confirm --> Notifications svc (Design 2)\n\n  Saga (sequential): place -> reserve -> pay -> confirm\n  Failure: payment fails -> Inventory releases the stock -> Orders cancels\n  Read side: events --> \"my orders\" read model (cache) --> GET /customers/{id}/orders\n</pre>\n<p><b>Deep dives.</b> Compensations वाला saga पाठ 8 में है, outbox Day 16 में, और create पर व हर consumer में idempotency पाठ 7 में। यहाँ नया: order lists के लिए events से भरने वाला <b>read model</b> (CQRS, Day 11)। <b>Spikes:</b> order accept करो, भारी steps queue में डालो, customer को \"processing\" बताओ। <b>Azure पर</b> blocks आम तौर पर Service Bus (queue/topic), Azure SQL, Azure Managed Redis (Azure Cache for Redis की जगह आया), API Management, और App Service या AKS से map होते हैं; सही choices, tiers और limits Day 20 में हैं (मौजूदा limits check करो)।</p>\n<p><b>Trade-offs.</b> \"Confirmed\" से पहले \"order received\" दिखाना सिर्फ़ technical नहीं, product decision है। Orchestration बनाम choreography और modular monolith का option पाठ 8 में हैं। इस design का खास failure mode: stock reserve हो गया पर payment service जवाब ही नहीं देती, इसलिए saga को timeout चाहिए जो stock छोड़ दे, और साथ में alert।</p>",
        hg: "<p><b>Picture — kitchen, cashier aur delivery boy wala restaurant:</b> order slip unke beech ghoomti hai; har koi ek kaam karta hai, apna register rakhta hai, aur koi step chhoote (payment fail) to kitchen ka kaam cancel karna padta hai. Yeh design zyadatar <b>Day 15 aur Day 16 ko reuse</b> karta hai; yeh dikhata hai ki tum unhe jod sakte ho.</p>\n<p><b>Requirements.</b> Order lagao, pay karo, stock reserve karo, ship karo, status dikhao, cancel karo. Non-functional: kabhi double-charge nahi, koi order na khoye, sale wale din ke spikes sambhalein, customer ko apne orders jaldi dikhein, audit trail.</p>\n<p><b>Estimates</b> (maan liya roz 1 million orders): average lagbhag 12 per second, flash sale mein kuch minuton ke liye iska 50-100 guna ho sakta hai; status checks read-heavy hain. Isliye checkout ko queue se bachao (load levelling) aur \"my orders\" ko cache ya read model se do.</p>\n<p><b>API.</b> <code>POST /orders</code> mein idempotency key (Day 13), jawab <code>202</code> ya <code>201</code> aur id; <code>GET /orders/{id}</code>, <code>GET /customers/{id}/orders</code>, <code>POST /orders/{id}/cancel</code>.</p>\n<p><b>Data aur boundaries (Day 15):</b> Orders, Inventory, Payments, Shipping, Notifications alag bounded contexts, <b>har service ka apna database</b>; Order ek aggregate hai jo apne rules khud sambhalta hai. Aage ki shard key: <b>customer id</b>, kyunki mukhya query \"is customer ke orders\" hai.</p>\n<pre>\nClient --> API gateway --> Orders service --> Orders DB (+ outbox table)\n                                |\n                  outbox relay --> OrderPlaced\n                                |\n          Inventory svc: reserve stock --> StockReserved\n                                |\n          Payments svc: charge --> PaymentSucceeded\n                                |\n          Orders svc: confirm --> Notifications svc (Design 2)\n\n  Saga (sequential): place -> reserve -> pay -> confirm\n  Failure: payment fails -> Inventory releases the stock -> Orders cancels\n  Read side: events --> \"my orders\" read model (cache) --> GET /customers/{id}/orders\n</pre>\n<p><b>Deep dives.</b> Compensations wala saga lesson 8 mein hai, outbox Day 16 mein, aur create par aur har consumer mein idempotency lesson 7 mein. Yahan naya: order lists ke liye events se bharne wala <b>read model</b> (CQRS, Day 11). <b>Spikes:</b> order accept karo, bhaari steps queue mein daalo, customer ko \"processing\" batao. <b>Azure par</b> blocks aam taur par Service Bus (queue/topic), Azure SQL, Azure Managed Redis (Azure Cache for Redis ki jagah aaya), API Management, aur App Service ya AKS se map hote hain; sahi choices, tiers aur limits Day 20 mein hain (maujooda limits check karo).</p>\n<p><b>Trade-offs.</b> \"Confirmed\" se pehle \"order received\" dikhana sirf technical nahi, product decision hai. Orchestration vs choreography aur modular monolith ka option lesson 8 mein hain. Is design ka khaas failure mode: stock reserve ho gaya par payment service jawab hi nahi deti, isliye saga ko timeout chahiye jo stock chhod de, aur saath mein alert.</p>"
      }
    },
    {
      id: "story-template",
      depth: "detailed",
      title: {
        en: "Your own design story — STAR template and a labelled sample",
        hi: "अपनी design story — STAR template और एक labelled sample",
        hg: "Apni design story — STAR template aur ek labelled sample"
      },
      body: {
        en: "<p><b>Picture — a recipe card:</b> a good recipe card has blanks you fill from your own kitchen. A story template works the same way: the structure is given, the facts must be yours.</p>\n<ul>\n<li>Interviewers ask \"tell me about a system you designed\". Use <b>STAR</b>: Situation, Task, Actions, Result, plus a one-line reflection. Aim for about two minutes.</li>\n<li>The text block below has two parts: a <b>fill-in template</b> and a <b>sample, clearly labelled \"Sample - replace with your own\"</b>. The sample is a generic WhatsApp-bot story to show the shape. <b>It is not your history</b>: do not repeat it as yours. Replace every bracket with what you really did.</li>\n<li>Pick a real piece of work, even a small one (a queue added, a cache introduced, a retry fixed). Name <b>your</b> part clearly (\"I\" for what you did, \"we\" for the team).</li>\n<li>Put at least one <b>trade-off</b> and one <b>number</b> in it; if you do not have a measured number, say what you observed and how you would measure it.</li>\n<li>If you do not have a suitable story, say so and walk through \"how I would design it\" using the framework, labelled as a design, not as an experience.</li>\n</ul>\n<p><b>When to use:</b> prepare two or three stories (a design, a failure you fixed, a disagreement you resolved) and rehearse them aloud. <b>When not:</b> do not memorise word for word, and never add details that did not happen; interviewers follow up, and an invented detail is the quickest way to lose trust.</p>",
        hi: "<p><b>Picture — recipe card:</b> अच्छे recipe card में blanks होते हैं जो तुम अपनी kitchen से भरते हो। Story template भी वैसा ही है: structure दिया हुआ है, facts तुम्हारे अपने होने चाहिए।</p>\n<ul>\n<li>Interviewer पूछते हैं \"तुमने जो system design किया उसके बारे में बताओ\"। <b>STAR</b> use करो: Situation, Task, Actions, Result, और एक line की reflection। लगभग दो मिनट रखो।</li>\n<li>नीचे के text block में दो हिस्से हैं: <b>fill-in template</b> और <b>साफ़ labelled sample, \"Sample - replace with your own\"</b>। Sample एक generic WhatsApp-bot story है जो shape दिखाती है। <b>यह तुम्हारी history नहीं है</b>: इसे अपनी बनाकर मत बोलो। हर bracket को वह लिखकर बदलो जो तुमने सच में किया।</li>\n<li>असली काम चुनो, छोटा भी चलेगा (queue जोड़ी, cache लगाया, retry ठीक की)। <b>अपना</b> हिस्सा साफ़ बताओ (जो तुमने किया उसके लिए \"I\", team के लिए \"we\")।</li>\n<li>कम से कम एक <b>trade-off</b> और एक <b>number</b> रखो; नापा हुआ number न हो तो बताओ कि तुमने क्या देखा और कैसे नापते।</li>\n<li>सही story न हो तो साफ़ कहो और framework से \"मैं इसे कैसे design करता\" बताओ, design के रूप में, अनुभव के रूप में नहीं।</li>\n</ul>\n<p><b>कब use करें:</b> दो-तीन stories तैयार करो (एक design, एक failure जो ठीक की, एक असहमति जो सुलझाई) और ज़ोर से rehearse करो। <b>कब नहीं:</b> शब्द-दर-शब्द रटो मत, और जो हुआ नहीं वह details कभी मत जोड़ो; interviewer follow-up पूछते हैं, और गढ़ी हुई detail भरोसा खोने का सबसे तेज़ तरीक़ा है।</p>",
        hg: "<p><b>Picture — recipe card:</b> achhe recipe card mein blanks hote hain jo tum apni kitchen se bharte ho. Story template bhi waisa hi hai: structure diya hua hai, facts tumhare apne hone chahiye.</p>\n<ul>\n<li>Interviewer poochte hain \"tumne jo system design kiya uske baare mein batao\". <b>STAR</b> use karo: Situation, Task, Actions, Result, aur ek line ki reflection. Lagbhag do minute rakho.</li>\n<li>Neeche ke text block mein do hisse hain: <b>fill-in template</b> aur <b>saaf labelled sample, \"Sample - replace with your own\"</b>. Sample ek generic WhatsApp-bot story hai jo shape dikhati hai. <b>Yeh tumhari history nahi hai</b>: ise apni banakar mat bolo. Har bracket ko woh likhkar badlo jo tumne sach mein kiya.</li>\n<li>Asli kaam chuno, chhota bhi chalega (queue jodi, cache lagaya, retry theek ki). <b>Apna</b> hissa saaf batao (jo tumne kiya uske liye \"I\", team ke liye \"we\").</li>\n<li>Kam se kam ek <b>trade-off</b> aur ek <b>number</b> rakho; naapa hua number na ho to batao ki tumne kya dekha aur kaise naapte.</li>\n<li>Sahi story na ho to saaf kaho aur framework se \"main ise kaise design karta\" batao, design ke roop mein, anubhav ke roop mein nahi.</li>\n</ul>\n<p><b>Kab use karein:</b> do-teen stories taiyaar karo (ek design, ek failure jo theek ki, ek asahmati jo suljhai) aur zor se rehearse karo. <b>Kab nahi:</b> shabd-dar-shabd ratto mat, aur jo hua nahi woh details kabhi mat jodo; interviewer follow-up poochte hain, aur gadhi hui detail bharosa khone ka sabse tez tareeka hai.</p>"
      },
      code: [
        {
          caption: {
            en: "STAR fill-in template + a labelled sample (Sample - replace with your own; not your real history)",
            hi: "STAR fill-in template + एक labelled sample (Sample - replace with your own; तुम्हारी असली history नहीं)",
            hg: "STAR fill-in template + ek labelled sample (Sample - replace with your own; tumhari asli history nahi)"
          },
          lang: "text",
          check: "none",
          src: "SAMPLE - replace with your own. Square brackets [ ] are blanks for YOUR real project.\n\n=== TEMPLATE (speak it in about 2 minutes) ===\nSituation : [system or product], [team size], [users or volume], [why a new design was needed].\nTask      : My role was [lead / designer / reviewer]. The goal was [goal] under [constraint: time, budget, compliance].\nActions   : 1) I clarified [requirements] with [whom].\n            2) I estimated [numbers] and found [insight].\n            3) I chose [option A] over [option B] because [reason].\n            4) I handled [failure mode] with [mechanism].\n            5) I aligned the team with [design doc / review / demo].\nResult    : [measurable result: latency, error rate, cost, delivery date].\nReflection: A trade-off I accepted was [trade-off]. Next time I would [improvement].\n\n=== SAMPLE - replace with your own (a generic WhatsApp-bot story, NOT your history) ===\nSituation : A team of [N] engineers ran a customer-support bot on a WhatsApp-style messaging provider.\n            During campaigns, replies slowed down and some messages were sent twice.\nTask      : As the tech lead I had to make the pipeline reliable without a full rewrite.\nActions   : I split webhook handling from processing with a queue: the webhook only verified the\n            signature, removed duplicates and returned 200. I added an idempotency key per outgoing\n            message and one rate limiter per provider account. I added retries with backoff, a\n            dead-letter queue for permanent failures, and a dashboard for the age of the oldest\n            message. I wrote a one-page design note and reviewed it with the team before building.\nResult    : [Replace with your real numbers, e.g. duplicate sends from X to near zero; campaign time from X to Y.]\nReflection: I accepted eventual consistency for status updates. Next time I would add priority\n            queues so one-time passwords never wait behind marketing messages."
        }
      ]
    }
  ],
  qa: [
    {
      id: "approach-framework",
      depth: "short",
      q: "How do you approach a system design question?",
      answer: "I clarify requirements first, estimate scale, define the API and data model, draw a simple end-to-end design, then deep-dive on bottlenecks and finish with trade-offs and failure modes.",
      meaning: {
        hi: "पहले requirements clarify, फिर scale का estimate, API और data model, simple end-to-end design, फिर bottlenecks में deep dive, और आख़िर में trade-offs और failure modes।",
        hg: "Pehle requirements clarify, phir scale ka estimate, API aur data model, simple end-to-end design, phir bottlenecks mein deep dive, aur aakhir mein trade-offs aur failure modes."
      },
      explain: {
        en: "<ul>\n<li>Seven steps: clarify, estimate, API, data and storage, high-level design, deep dives, trade-offs and next steps. In 45 minutes roughly 5-5-5-5-10-10-5.</li>\n<li>Write the agreed scope and numbers on the board; refer back to them when you justify a choice.</li>\n<li>Start with the simplest design that meets the numbers, then add a block (cache, queue, replica) only when a number or requirement asks for it.</li>\n<li>Follow-up: \"What if the interviewer jumps to caching early?\" Follow them, answer, then return to the step you left. A framework is a checklist, not a script.</li>\n</ul>",
        hi: "<ul>\n<li>सात steps: clarify, estimate, API, data और storage, high-level design, deep dives, trade-offs और next steps। 45 मिनट में लगभग 5-5-5-5-10-10-5।</li>\n<li>तय हुआ scope और numbers board पर लिखो; कोई choice justify करते समय उन्हीं पर लौटो।</li>\n<li>Numbers पूरे करने वाले सबसे simple design से शुरू करो, फिर block (cache, queue, replica) तभी जोड़ो जब कोई number या requirement माँगे।</li>\n<li>Follow-up: \"Interviewer जल्दी caching पर कूद जाए तो?\" उनके साथ जाओ, जवाब दो, फिर जिस step से हटे थे वहाँ लौटो। Framework checklist है, script नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>Saat steps: clarify, estimate, API, data aur storage, high-level design, deep dives, trade-offs aur next steps. 45 minute mein lagbhag 5-5-5-5-10-10-5.</li>\n<li>Tay hua scope aur numbers board par likho; koi choice justify karte samay unhi par lauto.</li>\n<li>Numbers poore karne wale sabse simple design se shuru karo, phir block (cache, queue, replica) tabhi jodo jab koi number ya requirement maange.</li>\n<li>Follow-up: \"Interviewer jaldi caching par kood jaaye to?\" Unke saath jao, jawab do, phir jis step se hate the wahan lauto. Framework checklist hai, script nahi.</li>\n</ul>"
      }
    },
    {
      id: "why-estimates",
      depth: "short",
      q: "Why do back-of-the-envelope estimates matter, and how do you do one?",
      answer: "They decide the design: reads versus writes, one database or many, cache or not. I convert daily volume to QPS, multiply by a peak factor, then size storage and bandwidth.",
      meaning: {
        hi: "वे design तय करते हैं: reads बनाम writes, एक database या कई, cache या नहीं। रोज़ का volume QPS में बदलो, peak factor से गुणा करो, फिर storage और bandwidth निकालो।",
        hg: "Woh design tay karte hain: reads vs writes, ek database ya kai, cache ya nahi. Roz ka volume QPS mein badlo, peak factor se guna karo, phir storage aur bandwidth nikalo."
      },
      explain: {
        en: "<ul>\n<li>QPS = requests per day / 86,400; peak = average x 2 to 3. Storage = records x size x retention x copies. Bandwidth = QPS x payload.</li>\n<li>Worked: 100M new URLs a month is about 38 writes/s; at 100:1 about 3,900 reads/s; 5 years x 500 bytes is about 3 TB (about 9 TB with 3 copies). Conclusion: read-heavy, small data, so cache and replicas, not sharding yet.</li>\n<li>State assumptions aloud and round; precision is not the goal, the decision is.</li>\n<li>Follow-up: \"Your numbers are off by 10x, what changes?\" Often the shape stays the same for a few-fold error; at 10x or more, revisit the bottleneck (the database or the provider limit).</li>\n</ul>",
        hi: "<ul>\n<li>QPS = रोज़ की requests / 86,400; peak = average x 2 से 3। Storage = records x size x retention x copies। Bandwidth = QPS x payload।</li>\n<li>Worked: महीने के 100M नए URLs लगभग 38 writes/s; 100:1 पर लगभग 3,900 reads/s; 5 साल x 500 bytes लगभग 3 TB (3 copies के साथ लगभग 9 TB)। नतीजा: read-heavy, छोटा data, इसलिए cache और replicas, अभी sharding नहीं।</li>\n<li>Assumptions ज़ोर से बोलो और round करो; precision goal नहीं, फ़ैसला goal है।</li>\n<li>Follow-up: \"तुम्हारे numbers 10 गुना ग़लत निकले तो क्या बदलेगा?\" कुछ गुना की ग़लती में अक्सर design का shape वही रहता है; 10 गुना या उससे ज़्यादा हो तो bottleneck दोबारा देखो (database या provider की limit)।</li>\n</ul>",
        hg: "<ul>\n<li>QPS = roz ki requests / 86,400; peak = average x 2 se 3. Storage = records x size x retention x copies. Bandwidth = QPS x payload.</li>\n<li>Worked: mahine ke 100M naye URLs lagbhag 38 writes/s; 100:1 par lagbhag 3,900 reads/s; 5 saal x 500 bytes lagbhag 3 TB (3 copies ke saath lagbhag 9 TB). Nateeja: read-heavy, chhota data, isliye cache aur replicas, abhi sharding nahi.</li>\n<li>Assumptions zor se bolo aur round karo; precision goal nahi, faisla goal hai.</li>\n<li>Follow-up: \"Tumhare numbers 10 guna galat nikle to kya badlega?\" Kuch guna ki galti mein aksar design ka shape wahi rehta hai; 10 guna ya usse zyada ho to bottleneck dobara dekho (database ya provider ki limit).</li>\n</ul>"
      }
    },
    {
      id: "scale-out-vs-up",
      depth: "short",
      q: "Horizontal versus vertical scaling: which do you choose and when?",
      answer: "Vertical is a bigger machine: simple, but capped and a single failure point. Horizontal adds machines behind a load balancer; it needs stateless services but gives capacity and resilience.",
      meaning: {
        hi: "Vertical = बड़ी machine: सरल, पर सीमा और single failure point। Horizontal = load balancer के पीछे ज़्यादा machines; stateless services चाहिए, पर capacity और resilience मिलती है।",
        hg: "Vertical = badi machine: saral, par seema aur single failure point. Horizontal = load balancer ke peeche zyada machines; stateless services chahiye, par capacity aur resilience milti hai."
      },
      explain: {
        en: "<ul>\n<li>Start simple: a bigger instance is often the cheapest first step. Go horizontal when you hit the ceiling or need availability across failures.</li>\n<li>Horizontal needs <b>stateless</b> services: sessions in a shared store or in the token, files in object storage, no in-memory-only state that matters.</li>\n<li>Databases are the hard part: stateless app servers scale easily, state does not (replicas for reads, partitioning for writes).</li>\n<li>Follow-up: \"What makes a service stateless?\" No request depends on which instance served the previous one. Local caches are fine if losing them only costs speed.</li>\n</ul>",
        hi: "<ul>\n<li>Simple से शुरू करो: बड़ी instance अक्सर सबसे सस्ता पहला क़दम होती है। सीमा पर पहुँचो या failures में availability चाहिए तब horizontal जाओ।</li>\n<li>Horizontal के लिए <b>stateless</b> services चाहिए: sessions shared store या token में, files object storage में, कोई ज़रूरी in-memory-only state नहीं।</li>\n<li>Databases मुश्किल हिस्सा हैं: stateless app servers आसानी से scale होते हैं, state नहीं (reads के लिए replicas, writes के लिए partitioning)।</li>\n<li>Follow-up: \"Service stateless कब होती है?\" जब कोई request इस पर निर्भर न करे कि पिछली request किस instance ने संभाली। Local caches ठीक हैं अगर उनके खोने से सिर्फ़ speed जाती है।</li>\n</ul>",
        hg: "<ul>\n<li>Simple se shuru karo: badi instance aksar sabse sasta pehla kadam hoti hai. Seema par pahuncho ya failures mein availability chahiye tab horizontal jao.</li>\n<li>Horizontal ke liye <b>stateless</b> services chahiye: sessions shared store ya token mein, files object storage mein, koi zaroori in-memory-only state nahi.</li>\n<li>Databases mushkil hissa hain: stateless app servers aasani se scale hote hain, state nahi (reads ke liye replicas, writes ke liye partitioning).</li>\n<li>Follow-up: \"Service stateless kab hoti hai?\" Jab koi request is par nirbhar na kare ki pichhli request kis instance ne sambhali. Local caches theek hain agar unke khone se sirf speed jaati hai.</li>\n</ul>"
      }
    },
    {
      id: "caching-design",
      depth: "short",
      q: "Where would you add caching, and what can go wrong?",
      answer: "At the CDN, in a shared Redis with cache-aside and a TTL, and in the client. The risks are stale data, invalidation mistakes and a stampede when a hot key expires.",
      meaning: {
        hi: "CDN पर, shared Redis में cache-aside और TTL के साथ, और client में। ख़तरे: stale data, invalidation की ग़लतियाँ, और hot key expire होने पर stampede।",
        hg: "CDN par, shared Redis mein cache-aside aur TTL ke saath, aur client mein. Khatre: stale data, invalidation ki galtiyan, aur hot key expire hone par stampede."
      },
      explain: {
        en: "<ul>\n<li>Layers: browser, CDN (static and cacheable responses), app cache, Redis, database. Cache the read-heavy, rarely-changing data first.</li>\n<li>Cache-aside: read from cache, on a miss load and fill; on write update the database and <b>delete</b> the key. A TTL is the safety net (the cache-aside puzzle shows stale reads without invalidation).</li>\n<li>Stampede: many requests miss together; fix with jitter on TTLs, a lock or request coalescing, or HybridCache (Day 13).</li>\n<li>Follow-up: \"Cache-aside or write-through?\" Cache-aside is simpler and tolerant of cache loss; write-through keeps the cache fresher but couples every write to the cache.</li>\n</ul>",
        hi: "<ul>\n<li>Layers: browser, CDN (static और cacheable responses), app cache, Redis, database। पहले read-heavy और कम बदलने वाला data cache करो।</li>\n<li>Cache-aside: cache से पढ़ो, miss पर load करके भरो; write पर database update करो और key <b>delete</b> करो। TTL safety net है (cache-aside puzzle invalidation के बिना stale reads दिखाता है)।</li>\n<li>Stampede: बहुत सारी requests एक साथ miss होती हैं; हल: TTLs पर jitter, lock या request coalescing, या HybridCache (Day 13)।</li>\n<li>Follow-up: \"Cache-aside या write-through?\" Cache-aside सरल है और cache खोने को सह लेता है; write-through cache को ज़्यादा fresh रखता है पर हर write को cache से बाँध देता है।</li>\n</ul>",
        hg: "<ul>\n<li>Layers: browser, CDN (static aur cacheable responses), app cache, Redis, database. Pehle read-heavy aur kam badalne wala data cache karo.</li>\n<li>Cache-aside: cache se padho, miss par load karke bharo; write par database update karo aur key <b>delete</b> karo. TTL safety net hai (cache-aside puzzle invalidation ke bina stale reads dikhata hai).</li>\n<li>Stampede: bahut saari requests ek saath miss hoti hain; hal: TTLs par jitter, lock ya request coalescing, ya HybridCache (Day 13).</li>\n<li>Follow-up: \"Cache-aside ya write-through?\" Cache-aside saral hai aur cache khone ko sah leta hai; write-through cache ko zyada fresh rakhta hai par har write ko cache se baandh deta hai.</li>\n</ul>"
      }
    },
    {
      id: "database-scaling-order",
      depth: "short",
      q: "How would you scale a database that is becoming the bottleneck?",
      answer: "First indexes and query fixes, then caching, then read replicas for read load, and only then partitioning by a well-chosen key for write load, accepting harder cross-shard queries.",
      meaning: {
        hi: "पहले indexes और query fixes, फिर caching, फिर read load के लिए read replicas, और तब जाकर write load के लिए अच्छी चुनी key से partitioning, cross-shard queries मुश्किल होना मानकर।",
        hg: "Pehle indexes aur query fixes, phir caching, phir read load ke liye read replicas, aur tab jaakar write load ke liye achhi chuni key se partitioning, cross-shard queries mushkil hona maankar."
      },
      explain: {
        en: "<ul>\n<li>Cheap steps first: missing indexes, N+1 queries, connection pooling, archiving old rows (the SQL Server and PostgreSQL days are 18 and 19).</li>\n<li>Read replicas scale reads; replication lag means a read right after a write may be stale, so route \"read your own write\" to the primary.</li>\n<li>Sharding scales writes and size but costs: cross-shard joins and transactions, rebalancing, operational work. Pick the key from the main access pattern (customer id, not country).</li>\n<li>Follow-up: \"SQL or NoSQL?\" Choose by access pattern and consistency needs: relational for joins and transactions, key-value or document for simple lookups at huge scale. Not by fashion.</li>\n</ul>",
        hi: "<ul>\n<li>सस्ते steps पहले: missing indexes, N+1 queries, connection pooling, पुरानी rows archive करना (SQL Server और PostgreSQL के days 18 और 19 हैं)।</li>\n<li>Read replicas reads scale करती हैं; replication lag का मतलब है write के तुरंत बाद की read stale हो सकती है, इसलिए \"अपनी ही write पढ़ना\" primary पर भेजो।</li>\n<li>Sharding writes और size scale करती है पर कीमत लेती है: cross-shard joins और transactions, rebalancing, operations का काम। Key main access pattern से चुनो (customer id, country नहीं)।</li>\n<li>Follow-up: \"SQL या NoSQL?\" Access pattern और consistency की ज़रूरत से चुनो: joins और transactions के लिए relational, बहुत बड़े scale पर simple lookups के लिए key-value या document। फ़ैशन से नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>Saste steps pehle: missing indexes, N+1 queries, connection pooling, purani rows archive karna (SQL Server aur PostgreSQL ke days 18 aur 19 hain).</li>\n<li>Read replicas reads scale karti hain; replication lag ka matlab hai write ke turant baad ki read stale ho sakti hai, isliye \"apni hi write padhna\" primary par bhejo.</li>\n<li>Sharding writes aur size scale karti hai par keemat leti hai: cross-shard joins aur transactions, rebalancing, operations ka kaam. Key main access pattern se chuno (customer id, country nahi).</li>\n<li>Follow-up: \"SQL ya NoSQL?\" Access pattern aur consistency ki zaroorat se chuno: joins aur transactions ke liye relational, bahut bade scale par simple lookups ke liye key-value ya document. Fashion se nahi.</li>\n</ul>"
      }
    },
    {
      id: "cap-pacelc",
      depth: "short",
      q: "Explain CAP and PACELC briefly.",
      answer: "During a network partition a distributed store must choose consistency or availability. PACELC adds that even without a partition you trade latency against consistency.",
      meaning: {
        hi: "Network partition के दौरान distributed store को consistency या availability चुननी पड़ती है। PACELC जोड़ता है कि partition न हो तब भी latency और consistency के बीच trade करना पड़ता है।",
        hg: "Network partition ke dauran distributed store ko consistency ya availability chunni padti hai. PACELC jodta hai ki partition na ho tab bhi latency aur consistency ke beech trade karna padta hai."
      },
      explain: {
        en: "<ul>\n<li>Partitions will happen in a distributed system, so the real choice is during a partition: refuse or delay some requests (consistency) or answer with possibly older data (availability).</li>\n<li>PACELC: if <b>P</b>artition, choose <b>A</b> or <b>C</b>; <b>E</b>lse (normal operation), choose <b>L</b>atency or <b>C</b>onsistency. Waiting for replicas to confirm is slower but more consistent.</li>\n<li>Apply it per feature: money movement leans to consistency; a product catalogue or \"likes\" count can lean to availability and latency.</li>\n<li>Follow-up: \"Is CAP a label for databases?\" Not exactly; many systems are tunable per operation, so describe the choice you make for each use case.</li>\n</ul>",
        hi: "<ul>\n<li>Distributed system में partitions होंगे ही, इसलिए असली choice partition के दौरान है: कुछ requests मना या देर से करो (consistency) या शायद पुराने data के साथ जवाब दो (availability)।</li>\n<li>PACELC: अगर <b>P</b>artition, तो <b>A</b> या <b>C</b> चुनो; <b>E</b>lse (normal चलते समय), <b>L</b>atency या <b>C</b>onsistency चुनो। Replicas के confirm का इंतज़ार धीमा है पर ज़्यादा consistent।</li>\n<li>इसे हर feature पर लगाओ: पैसे का लेन-देन consistency की तरफ़ झुकता है; product catalogue या \"likes\" count availability और latency की तरफ़ झुक सकता है।</li>\n<li>Follow-up: \"क्या CAP databases का label है?\" पूरी तरह नहीं; कई systems हर operation पर tunable हैं, इसलिए हर use case के लिए जो choice करते हो वह बताओ।</li>\n</ul>",
        hg: "<ul>\n<li>Distributed system mein partitions honge hi, isliye asli choice partition ke dauran hai: kuch requests mana ya der se karo (consistency) ya shayad purane data ke saath jawab do (availability).</li>\n<li>PACELC: agar <b>P</b>artition, to <b>A</b> ya <b>C</b> chuno; <b>E</b>lse (normal chalte samay), <b>L</b>atency ya <b>C</b>onsistency chuno. Replicas ke confirm ka intezaar dheema hai par zyada consistent.</li>\n<li>Ise har feature par lagao: paise ka len-den consistency ki taraf jhukta hai; product catalogue ya \"likes\" count availability aur latency ki taraf jhuk sakta hai.</li>\n<li>Follow-up: \"Kya CAP databases ka label hai?\" Poori tarah nahi; kai systems har operation par tunable hain, isliye har use case ke liye jo choice karte ho woh batao.</li>\n</ul>"
      }
    },
    {
      id: "design-url-shortener",
      depth: "short",
      q: "Design a URL shortener.",
      answer: "A counter id encoded in base62 as the code, a key-value lookup table, Redis cache-aside for the read-heavy redirects, and 302 if I need click analytics. Reads outnumber writes about 100 to 1.",
      meaning: {
        hi: "Counter id को base62 में encode करके code, key-value lookup table, read-heavy redirects के लिए Redis cache-aside, और click analytics चाहिए तो 302। Reads, writes से लगभग 100 गुना हैं।",
        hg: "Counter id ko base62 mein encode karke code, key-value lookup table, read-heavy redirects ke liye Redis cache-aside, aur click analytics chahiye to 302. Reads, writes se lagbhag 100 guna hain."
      },
      explain: {
        en: "<ul>\n<li>Clarify (custom alias? expiry? analytics?), estimate (read-heavy, small data; see the capacity puzzle), API (<code>POST /api/urls</code>, <code>GET /{code}</code>), data (one table by code).</li>\n<li>Code generation: counter + base62 (7 characters is about 3.5 trillion), servers lease id blocks. Alternatives: truncated hash (collisions) or random code with a unique check.</li>\n<li>Reads: Redis cache-aside with TTL; click events go to a queue so analytics stay off the hot path. 301 versus 302 has its own question.</li>\n<li>Follow-up: \"How do you stop guessing?\" Random or scrambled codes for private links, plus a rate limit on lookups.</li>\n</ul>",
        hi: "<ul>\n<li>Clarify (custom alias? expiry? analytics?), estimate (read-heavy, छोटा data; capacity puzzle देखो), API (<code>POST /api/urls</code>, <code>GET /{code}</code>), data (code से एक table)।</li>\n<li>Code generation: counter + base62 (7 characters लगभग 3.5 trillion), servers id blocks lease करते हैं। options: कटा हुआ hash (collisions) या unique check वाला random code।</li>\n<li>Reads: TTL के साथ Redis cache-aside; click events queue में जाते हैं ताकि analytics hot path से बाहर रहे। 301 बनाम 302 का अपना सवाल है।</li>\n<li>Follow-up: \"Guess करना कैसे रोकोगे?\" Private links के लिए random या scrambled codes, और lookups पर rate limit।</li>\n</ul>",
        hg: "<ul>\n<li>Clarify (custom alias? expiry? analytics?), estimate (read-heavy, chhota data; capacity puzzle dekho), API (<code>POST /api/urls</code>, <code>GET /{code}</code>), data (code se ek table).</li>\n<li>Code generation: counter + base62 (7 characters lagbhag 3.5 trillion), servers id blocks lease karte hain. Options: kata hua hash (collisions) ya unique check wala random code.</li>\n<li>Reads: TTL ke saath Redis cache-aside; click events queue mein jaate hain taaki analytics hot path se bahar rahe. 301 vs 302 ka apna sawaal hai.</li>\n<li>Follow-up: \"Guess karna kaise rokoge?\" Private links ke liye random ya scrambled codes, aur lookups par rate limit.</li>\n</ul>"
      }
    },
    {
      id: "design-notification-system",
      depth: "short",
      q: "Design a WhatsApp-bot or notification system.",
      answer: "Webhook ingress verifies, de-duplicates, enqueues and returns 200 fast; workers process from a queue; a rate-limited sender calls the provider with retries, idempotency keys and a dead-letter queue.",
      meaning: {
        hi: "Webhook ingress verify, dedupe, enqueue करके जल्दी 200 लौटाता है; workers queue से process करते हैं; rate-limited sender retries, idempotency keys और dead-letter queue के साथ provider को call करता है।",
        hg: "Webhook ingress verify, dedupe, enqueue karke jaldi 200 lautata hai; workers queue se process karte hain; rate-limited sender retries, idempotency keys aur dead-letter queue ke saath provider ko call karta hai."
      },
      explain: {
        en: "<ul>\n<li>Requirements: no lost messages, fast webhook ack, provider rate limits, no duplicates, campaign spikes, opt-outs, delivery status callbacks.</li>\n<li>Ingress does the minimum because the provider retries on errors; dedupe on the provider message id. Outbound uses our own message id as the idempotency key and records \"sent\" only after the provider accepts.</li>\n<li>Retries: transient (429, 5xx, timeout) with exponential backoff and jitter; permanent (other 4xx) go to the dead-letter queue. Status callbacks can be late or out of order, so only move status forward.</li>\n<li>Follow-up: \"A 1 million campaign arrives.\" The queue absorbs it; the per-provider token bucket sets the sending speed; add priority so OTP messages go before marketing. Azure service names come on Day 20.</li>\n</ul>",
        hi: "<ul>\n<li>Requirements: कोई message न खोए, webhook का तेज़ ack, provider rate limits, कोई duplicate नहीं, campaign spikes, opt-outs, delivery status callbacks।</li>\n<li>Ingress कम से कम काम करता है क्योंकि errors पर provider retry करता है; provider message id पर dedupe। Outbound में हमारा अपना message id idempotency key है और \"sent\" तभी लिखते हैं जब provider accept करे।</li>\n<li>Retries: transient (429, 5xx, timeout) पर exponential backoff और jitter; permanent (बाकी 4xx) dead-letter queue में। Status callbacks देर से या उल्टे order में आ सकते हैं, इसलिए status सिर्फ़ आगे बढ़ाओ।</li>\n<li>Follow-up: \"1 million का campaign आ गया।\" Queue उसे सोख लेती है; per-provider token bucket sending की speed तय करता है; priority जोड़ो ताकि OTP messages marketing से पहले जाएँ। Azure service names Day 20 में आएँगे।</li>\n</ul>",
        hg: "<ul>\n<li>Requirements: koi message na khoye, webhook ka tez ack, provider rate limits, koi duplicate nahi, campaign spikes, opt-outs, delivery status callbacks.</li>\n<li>Ingress kam se kam kaam karta hai kyunki errors par provider retry karta hai; provider message id par dedupe. Outbound mein hamara apna message id idempotency key hai aur \"sent\" tabhi likhte hain jab provider accept kare.</li>\n<li>Retries: transient (429, 5xx, timeout) par exponential backoff aur jitter; permanent (baaki 4xx) dead-letter queue mein. Status callbacks der se ya ulte order mein aa sakte hain, isliye status sirf aage badhao.</li>\n<li>Follow-up: \"1 million ka campaign aa gaya.\" Queue use sokh leti hai; per-provider token bucket sending ki speed tay karta hai; priority jodo taaki OTP messages marketing se pehle jaayein. Azure service names Day 20 mein aayenge.</li>\n</ul>"
      }
    },
    {
      id: "when-queue",
      depth: "detailed",
      q: "When would you put a queue in a design, and what does it cost?",
      answer: "When work can finish later, when traffic comes in spikes, or when a slow dependency must not block users. It costs eventual consistency, duplicates and extra operations.",
      meaning: {
        hi: "जब काम बाद में पूरा हो सकता हो, traffic spikes में आता हो, या धीमी dependency users को block न करे। कीमत: eventual consistency, duplicates और extra operations।",
        hg: "Jab kaam baad mein poora ho sakta ho, traffic spikes mein aata ho, ya dheemi dependency users ko block na kare. Keemat: eventual consistency, duplicates aur extra operations."
      },
      explain: {
        en: "<ul>\n<li>Benefits: accept fast and process later (load levelling), isolate failures, retry safely, scale workers independently.</li>\n<li>Costs: the user sees \"accepted\", not \"done\"; delivery is usually at-least-once so consumers must be idempotent; you must monitor queue depth, oldest-message age and the dead-letter queue (Day 16).</li>\n<li>Do not queue what the user must see immediately and consistently, such as a balance check; use a direct call with timeout and retry (Day 13).</li>\n<li>Follow-up: \"Queue or topic?\" Queue: one consumer gets each message (work distribution). Topic: each subscription gets a copy (fan-out events).</li>\n</ul>",
        hi: "<ul>\n<li>फ़ायदे: जल्दी accept करो, बाद में process करो (load levelling), failures अलग रखो, retry safe, workers अलग से scale।</li>\n<li>कीमतें: user को \"accepted\" दिखता है, \"done\" नहीं; delivery आम तौर पर at-least-once है इसलिए consumers idempotent हों; queue depth, सबसे पुराने message की उम्र और dead-letter queue monitor करनी पड़ती है (Day 16)।</li>\n<li>वह queue में मत डालो जो user को तुरंत और consistent दिखना चाहिए, जैसे balance check; timeout और retry के साथ सीधी call (Day 13)।</li>\n<li>Follow-up: \"Queue या topic?\" Queue: हर message एक consumer को मिलता है (काम बाँटना)। Topic: हर subscription को कॉपी मिलती है (fan-out events)।</li>\n</ul>",
        hg: "<ul>\n<li>Fayde: jaldi accept karo, baad mein process karo (load levelling), failures alag rakho, retry safe, workers alag se scale.</li>\n<li>Keematein: user ko \"accepted\" dikhta hai, \"done\" nahi; delivery aam taur par at-least-once hai isliye consumers idempotent hon; queue depth, sabse purane message ki umr aur dead-letter queue monitor karni padti hai (Day 16).</li>\n<li>Woh queue mein mat daalo jo user ko turant aur consistent dikhna chahiye, jaise balance check; timeout aur retry ke saath seedhi call (Day 13).</li>\n<li>Follow-up: \"Queue ya topic?\" Queue: har message ek consumer ko milta hai (kaam baantna). Topic: har subscription ko copy milti hai (fan-out events).</li>\n</ul>"
      }
    },
    {
      id: "choose-shard-key",
      depth: "detailed",
      q: "How do you choose a shard key?",
      answer: "Pick a key with many distinct values and even traffic that matches the main access pattern, such as customer id. Avoid sequential ids and low-cardinality keys like country, which create hotspots.",
      meaning: {
        hi: "ऐसी key चुनो जिसमें बहुत सारी अलग values हों, traffic बराबर हो और जो main access pattern से मेल खाए, जैसे customer id। Sequential ids और कम values वाली keys (जैसे country) hotspots बनाती हैं।",
        hg: "Aisi key chuno jisme bahut saari alag values hon, traffic barabar ho aur jo main access pattern se mel khaye, jaise customer id. Sequential ids aur kam values wali keys (jaise country) hotspots banati hain."
      },
      explain: {
        en: "<ul>\n<li>Good key: high cardinality, even spread, present in the common queries so most queries hit one shard.</li>\n<li>Range sharding by an increasing id sends all new writes to the last shard; hashing spreads writes but makes range queries scatter-gather (the shard-key puzzle).</li>\n<li>Watch for a hot key (one celebrity customer): split it further, cache it, or give it its own partition.</li>\n<li>Follow-up: \"How do you re-shard later?\" Use consistent hashing or many small logical partitions mapped to physical nodes, then move partitions, not individual keys.</li>\n</ul>",
        hi: "<ul>\n<li>अच्छी key: high cardinality, बराबर spread, common queries में मौजूद ताकि ज़्यादातर queries एक shard पर जाएँ।</li>\n<li>बढ़ती id से range sharding सारी नई writes आख़िरी shard पर भेजती है; hashing writes बाँटती है पर range queries को scatter-gather बना देती है (shard-key puzzle)।</li>\n<li>Hot key पर ध्यान दो (एक बहुत बड़ा customer): उसे और बाँटो, cache करो, या अपना अलग partition दो।</li>\n<li>Follow-up: \"बाद में re-shard कैसे करोगे?\" Consistent hashing या कई छोटे logical partitions को physical nodes से map करो, फिर partitions हिलाओ, अलग-अलग keys नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>Achhi key: high cardinality, barabar spread, common queries mein maujood taaki zyadatar queries ek shard par jaayein.</li>\n<li>Badhti id se range sharding saari nayi writes aakhri shard par bhejti hai; hashing writes baantti hai par range queries ko scatter-gather bana deti hai (shard-key puzzle).</li>\n<li>Hot key par dhyan do (ek bahut bada customer): use aur baanto, cache karo, ya apna alag partition do.</li>\n<li>Follow-up: \"Baad mein re-shard kaise karoge?\" Consistent hashing ya kai chhote logical partitions ko physical nodes se map karo, phir partitions hilao, alag-alag keys nahi.</li>\n</ul>"
      }
    },
    {
      id: "consistent-hashing-why",
      depth: "detailed",
      q: "What problem does consistent hashing solve?",
      answer: "With hash modulo N, changing N moves most keys. Consistent hashing places nodes and keys on a ring so adding or removing a node moves about 1/N of the keys on average.",
      meaning: {
        hi: "hash modulo N में N बदलने पर ज़्यादातर keys हिल जाती हैं। Consistent hashing nodes और keys को ring पर रखती है, इसलिए node जोड़ने या हटाने पर औसतन लगभग 1/N keys हिलती हैं।",
        hg: "hash modulo N mein N badalne par zyadatar keys hil jaati hain. Consistent hashing nodes aur keys ko ring par rakhti hai, isliye node jodne ya hatane par ausatan lagbhag 1/N keys hilti hain."
      },
      explain: {
        en: "<ul>\n<li>The ring puzzle shows modulo moving 15 of 20 keys when going from 3 to 4 nodes; for a cache that is a mass miss and a database stampede.</li>\n<li>On a ring each node owns arcs; a key goes to the next point clockwise. Virtual nodes (many points per node) even out the load and let stronger machines take more points. Moved keys go only to the new node; 1/N is the expected share, and uneven arcs can give less (the ring puzzle shows 2 of 20).</li>\n<li>Use a stable hash such as FNV-1a or Murmur; <code>string.GetHashCode()</code> differs per process in .NET.</li>\n<li>Follow-up: \"Does Redis Cluster use it?\" No: it uses a fixed set of 16,384 hash slots that are assigned to nodes. Dynamo-style stores use rings. Name the idea, not the product, if unsure.</li>\n</ul>",
        hi: "<ul>\n<li>Ring puzzle दिखाता है कि modulo में 3 से 4 nodes करने पर 20 में से 15 keys हिलती हैं; cache के लिए यह बड़े पैमाने का miss और database stampede है।</li>\n<li>Ring पर हर node के arcs होते हैं; key अगले point पर clockwise जाती है। Virtual nodes (हर node के कई points) load बराबर करते हैं और ताक़तवर machines को ज़्यादा points दे सकते हैं। हिली हुई keys सिर्फ़ नए node पर जाती हैं; 1/N expected हिस्सा है, और असमान arcs से कम भी हो सकता है (ring puzzle में 20 में से 2)।</li>\n<li>FNV-1a या Murmur जैसा stable hash use करो; .NET में <code>string.GetHashCode()</code> हर process में अलग होता है।</li>\n<li>Follow-up: \"क्या Redis Cluster यह use करता है?\" नहीं: वह 16,384 fixed hash slots use करता है जो nodes को assign होते हैं। Dynamo-style stores rings use करते हैं। पक्का न हो तो product नहीं, idea का नाम बोलो।</li>\n</ul>",
        hg: "<ul>\n<li>Ring puzzle dikhata hai ki modulo mein 3 se 4 nodes karne par 20 mein se 15 keys hilti hain; cache ke liye yeh bade pamane ka miss aur database stampede hai.</li>\n<li>Ring par har node ke arcs hote hain; key agle point par clockwise jaati hai. Virtual nodes (har node ke kai points) load barabar karte hain aur taqatwar machines ko zyada points de sakte hain. Hili hui keys sirf naye node par jaati hain; 1/N expected hissa hai, aur asamaan arcs se kam bhi ho sakta hai (ring puzzle mein 20 mein se 2).</li>\n<li>FNV-1a ya Murmur jaisa stable hash use karo; .NET mein <code>string.GetHashCode()</code> har process mein alag hota hai.</li>\n<li>Follow-up: \"Kya Redis Cluster yeh use karta hai?\" Nahi: woh 16,384 fixed hash slots use karta hai jo nodes ko assign hote hain. Dynamo-style stores rings use karte hain. Pakka na ho to product nahi, idea ka naam bolo.</li>\n</ul>"
      }
    },
    {
      id: "redirect-301-302",
      depth: "detailed",
      q: "301 or 302 for a URL shortener redirect?",
      answer: "301 is permanent and browsers cache it, so later clicks skip your server. I use 302 when I need click analytics or the ability to change the target.",
      meaning: {
        hi: "301 permanent है और browsers उसे cache करते हैं, इसलिए बाद के clicks आपके server तक नहीं आते। Click analytics या target बदलने की ability चाहिए तो मैं 302 use करता हूँ।",
        hg: "301 permanent hai aur browsers use cache karte hain, isliye baad ke clicks aapke server tak nahi aate. Click analytics ya target badalne ki ability chahiye to main 302 use karta hoon."
      },
      explain: {
        en: "<ul>\n<li>301 (Moved Permanently): cheaper for you, good for SEO-style permanence, but you lose click counts and cannot easily change the target because clients remember it.</li>\n<li>302 (Found, temporary): every click comes to you; analytics, expiry, A/B targets and takedowns work. Cost: more load, so the cache and rate limit matter.</li>\n<li>307 and 308 are the method-preserving variants (temporary and permanent); for a GET redirect the practical choice is still permanent versus temporary.</li>\n<li>Follow-up: \"Can you keep analytics with 301?\" Only if the click is counted before the redirect, which a cached 301 may skip, so not reliably (Cache-Control can limit 301 caching). Decide by the product need.</li>\n</ul>",
        hi: "<ul>\n<li>301 (Moved Permanently): तुम्हारे लिए सस्ता, SEO-जैसी permanence के लिए अच्छा, पर click counts जाते हैं और target आसानी से नहीं बदल सकते क्योंकि clients याद रखते हैं।</li>\n<li>302 (Found, temporary): हर click तुम्हारे पास आता है; analytics, expiry, A/B targets और takedowns चलते हैं। कीमत: ज़्यादा load, इसलिए cache और rate limit मायने रखते हैं।</li>\n<li>307 और 308 method बचाने वाले variants हैं (temporary और permanent); GET redirect में असली choice फिर भी permanent बनाम temporary है।</li>\n<li>Follow-up: \"301 के साथ analytics रख सकते हो?\" सिर्फ़ तब जब click redirect से पहले गिना जाए, जिसे cached 301 छोड़ सकता है, इसलिए पक्का नहीं (Cache-Control से 301 की caching सीमित हो सकती है)। Product की ज़रूरत से तय करो।</li>\n</ul>",
        hg: "<ul>\n<li>301 (Moved Permanently): tumhare liye sasta, SEO-jaisi permanence ke liye achha, par click counts jaate hain aur target aasani se nahi badal sakte kyunki clients yaad rakhte hain.</li>\n<li>302 (Found, temporary): har click tumhare paas aata hai; analytics, expiry, A/B targets aur takedowns chalte hain. Keemat: zyada load, isliye cache aur rate limit maayne rakhte hain.</li>\n<li>307 aur 308 method bachane wale variants hain (temporary aur permanent); GET redirect mein asli choice phir bhi permanent vs temporary hai.</li>\n<li>Follow-up: \"301 ke saath analytics rakh sakte ho?\" Sirf tab jab click redirect se pehle ginna jaaye, jise cached 301 chhod sakta hai, isliye pakka nahi (Cache-Control se 301 ki caching seemit ho sakti hai). Product ki zaroorat se tay karo.</li>\n</ul>"
      }
    },
    {
      id: "id-generation-options",
      depth: "detailed",
      q: "How do you generate short codes: hash, random or counter?",
      answer: "A counter encoded in base62 gives short unique codes without collisions. A truncated hash or random code needs collision handling, but is harder to guess.",
      meaning: {
        hi: "Base62 में encode किया counter बिना collisions के छोटे unique codes देता है। कटा हुआ hash या random code में collision संभालना पड़ता है, पर guess करना मुश्किल होता है।",
        hg: "Base62 mein encode kiya counter bina collisions ke chhote unique codes deta hai. Kata hua hash ya random code mein collision sambhalna padta hai, par guess karna mushkil hota hai."
      },
      explain: {
        en: "<ul>\n<li>Counter + base62: unique by construction; servers lease id blocks (A: 1-1000, B: 1001-2000) so no database call per create. Downside: sequential, so guessable.</li>\n<li>Hash of the long URL, truncated: the same URL gives the same code (dedupe), but truncation causes collisions, so you check and re-hash with a salt.</li>\n<li>Random code: hard to guess; check uniqueness on insert (unique key) and retry on conflict. Longer codes make collisions rarer.</li>\n<li>Snowflake-style 64-bit ids: timestamp + worker id + per-millisecond sequence. Roughly time-ordered, and no coordination per id once each worker has an id. Risks: clock skew or rollback, and handing out unique worker ids. Base62 of a 64-bit id is up to 11 characters.</li>\n<li>Follow-up: \"What if two users shorten the same URL?\" Decide by product: share one code (hash-style) or give each user their own (counter or random). Base62 is an encoding, not security.</li>\n</ul>",
        hi: "<ul>\n<li>Counter + base62: design से ही unique; servers id blocks lease करते हैं (A: 1-1000, B: 1001-2000) इसलिए हर create पर database call नहीं। कमी: sequential है, इसलिए guess हो सकती है।</li>\n<li>Long URL का कटा हुआ hash: वही URL वही code देता है (dedupe), पर कटने से collisions होते हैं, इसलिए check करो और salt से दोबारा hash करो।</li>\n<li>Random code: guess करना मुश्किल; insert पर uniqueness check (unique key) और conflict पर retry। लंबे codes में collisions कम होते हैं।</li>\n<li>Snowflake-style 64-bit ids: timestamp + worker id + हर millisecond का sequence। लगभग time-ordered, और worker को id मिलने के बाद हर id पर coordination नहीं। Risks: clock skew या rollback, और unique worker ids बाँटना। 64-bit id का base62 अधिकतम 11 characters का होता है।</li>\n<li>Follow-up: \"दो users एक ही URL छोटा करें तो?\" Product से तय करो: एक code साझा (hash-style) या हर user का अपना (counter या random)। Base62 encoding है, security नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>Counter + base62: design se hi unique; servers id blocks lease karte hain (A: 1-1000, B: 1001-2000) isliye har create par database call nahi. Kami: sequential hai, isliye guess ho sakti hai.</li>\n<li>Long URL ka kata hua hash: wahi URL wahi code deta hai (dedupe), par katne se collisions hote hain, isliye check karo aur salt se dobara hash karo.</li>\n<li>Random code: guess karna mushkil; insert par uniqueness check (unique key) aur conflict par retry. Lambe codes mein collisions kam hote hain.</li>\n<li>Snowflake-style 64-bit ids: timestamp + worker id + har millisecond ka sequence. Lagbhag time-ordered, aur worker ko id milne ke baad har id par coordination nahi. Risks: clock skew ya rollback, aur unique worker ids baantna. 64-bit id ka base62 adhiktam 11 characters ka hota hai.</li>\n<li>Follow-up: \"Do users ek hi URL chhota karein to?\" Product se tay karo: ek code saajha (hash-style) ya har user ka apna (counter ya random). Base62 encoding hai, security nahi.</li>\n</ul>"
      }
    },
    {
      id: "idempotency-in-design",
      depth: "detailed",
      q: "How do you make the notification pipeline safe against duplicates?",
      answer: "Dedupe inbound webhooks on the provider message id, send outbound with our own idempotency key, and mark a message as sent only after the provider accepts it.",
      meaning: {
        hi: "Inbound webhooks को provider message id पर dedupe करो, outbound हमारी अपनी idempotency key से भेजो, और message को sent तभी mark करो जब provider accept कर ले।",
        hg: "Inbound webhooks ko provider message id par dedupe karo, outbound hamari apni idempotency key se bhejo, aur message ko sent tabhi mark karo jab provider accept kar le."
      },
      explain: {
        en: "<ul>\n<li>Duplicates are normal: providers retry webhooks, brokers redeliver, clients double-click. Aim for at-least-once delivery plus idempotent handling, not exactly-once.</li>\n<li>Inbound: a unique index on the provider message id; the second insert fails and is skipped. Outbound: a stable id per notification used as the idempotency key (Day 13), stored with its status.</li>\n<li>Order matters: mark \"done\" after the effect succeeded, ideally in the same transaction (inbox pattern, Day 16); marking first can lose a message.</li>\n<li>Follow-up: \"Provider has no idempotency key support?\" Keep your own \"sent\" record keyed by message id and check it before sending; accept that a crash between send and record can still cause one duplicate, so make the message harmless to repeat.</li>\n</ul>",
        hi: "<ul>\n<li>Duplicates आम हैं: providers webhooks retry करते हैं, brokers दोबारा deliver करते हैं, clients double-click करते हैं। लक्ष्य at-least-once delivery + idempotent handling है, exactly-once नहीं।</li>\n<li>Inbound: provider message id पर unique index; दूसरा insert fail होकर skip हो जाता है। Outbound: हर notification का stable id idempotency key (Day 13) के रूप में, status के साथ store।</li>\n<li>Order मायने रखता है: effect सफल होने के बाद \"done\" mark करो, बेहतर हो एक ही transaction में (inbox pattern, Day 16); पहले mark करने पर message खो सकता है।</li>\n<li>Follow-up: \"Provider idempotency key support नहीं करता?\" अपना \"sent\" record message id से रखो और भेजने से पहले check करो; माने कि send और record के बीच crash से एक duplicate फिर भी हो सकता है, इसलिए message ऐसा रखो कि दोहराने पर नुकसान न हो।</li>\n</ul>",
        hg: "<ul>\n<li>Duplicates aam hain: providers webhooks retry karte hain, brokers dobara deliver karte hain, clients double-click karte hain. Lakshya at-least-once delivery + idempotent handling hai, exactly-once nahi.</li>\n<li>Inbound: provider message id par unique index; doosra insert fail hokar skip ho jaata hai. Outbound: har notification ka stable id idempotency key (Day 13) ke roop mein, status ke saath store.</li>\n<li>Order maayne rakhta hai: effect safal hone ke baad \"done\" mark karo, behtar ho ek hi transaction mein (inbox pattern, Day 16); pehle mark karne par message kho sakta hai.</li>\n<li>Follow-up: \"Provider idempotency key support nahi karta?\" Apna \"sent\" record message id se rakho aur bhejne se pehle check karo; maano ki send aur record ke beech crash se ek duplicate phir bhi ho sakta hai, isliye message aisa rakho ki dohrane par nuksaan na ho.</li>\n</ul>"
      }
    },
    {
      id: "rate-limiter-design",
      depth: "detailed",
      q: "How would you design a rate limiter?",
      answer: "A token bucket per key (user, API key or provider account) gives a steady rate with controlled bursts. Across servers the counters live in a shared store like Redis, or each server enforces its share.",
      meaning: {
        hi: "हर key (user, API key या provider account) पर token bucket steady rate और controlled bursts देता है। कई servers में counters shared store (जैसे Redis) में रहते हैं, या हर server अपना हिस्सा enforce करता है।",
        hg: "Har key (user, API key ya provider account) par token bucket steady rate aur controlled bursts deta hai. Kai servers mein counters shared store (jaise Redis) mein rehte hain, ya har server apna hissa enforce karta hai."
      },
      explain: {
        en: "<ul>\n<li>Algorithms: fixed window (simple, double burst at the boundary), sliding window (smoother, more state), token bucket (rate plus burst, the puzzle), leaky bucket (smooth output). ASP.NET Core has built-in limiters (Day 13).</li>\n<li>Respond with <code>429 Too Many Requests</code> and a <code>Retry-After</code> header. Choose the key carefully: per user, per API key, per IP (shared by many users behind one NAT).</li>\n<li>Distributed: a shared store gives accuracy but adds a network hop and a new dependency; per-server limits (limit divided by server count) are cheaper and approximate. Decide what happens if the store is down (fail open or closed).</li>\n<li>Follow-up: \"Limit towards a provider?\" The same bucket on the outbound side, with the queue waiting instead of rejecting, as in Design 2.</li>\n</ul>",
        hi: "<ul>\n<li>Algorithms: fixed window (सरल, boundary पर double burst), sliding window (smooth, ज़्यादा state), token bucket (rate + burst, puzzle वाला), leaky bucket (smooth output)। ASP.NET Core में built-in limiters हैं (Day 13)।</li>\n<li><code>429 Too Many Requests</code> और <code>Retry-After</code> header के साथ जवाब दो। Key सोचकर चुनो: per user, per API key, per IP (एक NAT के पीछे कई users एक IP साझा करते हैं)।</li>\n<li>Distributed: shared store से accuracy मिलती है पर एक network hop और नई dependency आती है; per-server limits (limit को servers की संख्या से बाँटो) सस्ती और approximate हैं। तय करो store down हो तो क्या हो (fail open या closed)।</li>\n<li>Follow-up: \"Provider की तरफ़ limit?\" Outbound side पर वही bucket, जिसमें queue reject करने की जगह इंतज़ार करती है, जैसे Design 2 में।</li>\n</ul>",
        hg: "<ul>\n<li>Algorithms: fixed window (saral, boundary par double burst), sliding window (smooth, zyada state), token bucket (rate + burst, puzzle wala), leaky bucket (smooth output). ASP.NET Core mein built-in limiters hain (Day 13).</li>\n<li><code>429 Too Many Requests</code> aur <code>Retry-After</code> header ke saath jawab do. Key soch kar chuno: per user, per API key, per IP (ek NAT ke peeche kai users ek IP saajha karte hain).</li>\n<li>Distributed: shared store se accuracy milti hai par ek network hop aur nayi dependency aati hai; per-server limits (limit ko servers ki sankhya se baanto) saste aur approximate hain. Tay karo store down ho to kya ho (fail open ya closed).</li>\n<li>Follow-up: \"Provider ki taraf limit?\" Outbound side par wahi bucket, jisme queue reject karne ki jagah intezaar karti hai, jaise Design 2 mein.</li>\n</ul>"
      }
    },
    {
      id: "order-consistency",
      depth: "detailed",
      q: "In an order system, how do you keep payment, stock and order status consistent?",
      answer: "No distributed transaction: each service owns its data, events flow through an outbox, and a saga runs compensations such as a refund or releasing stock when a step fails.",
      meaning: {
        hi: "Distributed transaction नहीं: हर service अपने data की मालिक है, events outbox से जाते हैं, और कोई step fail हो तो saga compensations चलाता है, जैसे refund या stock वापस करना।",
        hg: "Distributed transaction nahi: har service apne data ki malik hai, events outbox se jaate hain, aur koi step fail ho to saga compensations chalata hai, jaise refund ya stock wapas karna."
      },
      explain: {
        en: "<ul>\n<li>Place order: save the Order and an outbox row in one local transaction; the relay publishes <code>OrderPlaced</code>; Inventory reserves stock; Payments charges; the saga confirms or compensates (Day 16 has the details and code).</li>\n<li>Every consumer is idempotent; the create API takes an idempotency key (Day 13). The Order aggregate guards its own rules (Day 15).</li>\n<li>Be honest about eventual consistency: \"order received\" is shown first, \"confirmed\" later. Add timeouts and alerts for stuck sagas.</li>\n<li>Follow-up: \"Why not one database transaction?\" Services own separate databases, and holding locks across a network call hurts availability. For a small team a modular monolith with one database is a valid start (Day 15).</li>\n</ul>",
        hi: "<ul>\n<li>Order लगाना: Order और एक outbox row एक local transaction में save; relay <code>OrderPlaced</code> publish करता है; Inventory stock reserve करती है; Payments charge करती है; saga confirm या compensate करता है (Day 16 में details और code हैं)।</li>\n<li>हर consumer idempotent है; create API idempotency key लेती है (Day 13)। Order aggregate अपने rules खुद संभालता है (Day 15)।</li>\n<li>Eventual consistency के बारे में ईमानदार रहो: पहले \"order received\" दिखता है, बाद में \"confirmed\"। अटकी sagas के लिए timeouts और alerts लगाओ।</li>\n<li>Follow-up: \"एक database transaction क्यों नहीं?\" Services के अलग databases हैं, और network call के पार locks पकड़ना availability बिगाड़ता है। छोटी team के लिए एक database वाला modular monolith सही शुरुआत है (Day 15)।</li>\n</ul>",
        hg: "<ul>\n<li>Order lagana: Order aur ek outbox row ek local transaction mein save; relay <code>OrderPlaced</code> publish karta hai; Inventory stock reserve karti hai; Payments charge karti hai; saga confirm ya compensate karta hai (Day 16 mein details aur code hain).</li>\n<li>Har consumer idempotent hai; create API idempotency key leti hai (Day 13). Order aggregate apne rules khud sambhalta hai (Day 15).</li>\n<li>Eventual consistency ke baare mein imaandar raho: pehle \"order received\" dikhta hai, baad mein \"confirmed\". Atki sagas ke liye timeouts aur alerts lagao.</li>\n<li>Follow-up: \"Ek database transaction kyon nahi?\" Services ke alag databases hain, aur network call ke paar locks pakadna availability bigaadta hai. Chhoti team ke liye ek database wala modular monolith sahi shuruaat hai (Day 15).</li>\n</ul>"
      }
    },
    {
      id: "read-replica-lag",
      depth: "detailed",
      q: "A user updates their profile but still sees old data. What happened and how do you fix it?",
      answer: "Probably the read went to a replica or cache that had not caught up. Route read-your-own-writes to the primary for a short time, or invalidate the cache key on write.",
      meaning: {
        hi: "शायद read ऐसी replica या cache पर गई जो अभी पकड़ नहीं पाई थी। अपनी ही write की read कुछ देर primary पर भेजो, या write पर cache key invalidate करो।",
        hg: "Shayad read aisi replica ya cache par gayi jo abhi pakad nahi paayi thi. Apni hi write ki read kuch der primary par bhejo, ya write par cache key invalidate karo."
      },
      explain: {
        en: "<ul>\n<li>Causes: replication lag (replicas apply changes slightly later), a cached copy not invalidated (see the cache-aside puzzle), or a CDN or browser cache.</li>\n<li>Fixes: read-your-writes (send that user's reads to the primary for a few seconds, or pass a version or timestamp token), delete the cache key on write, shorter TTL for fast-changing data.</li>\n<li>Decide per screen: a profile page needs read-your-writes; a public product list can be a few seconds stale.</li>\n<li>Follow-up: \"Does a stronger consistency setting fix it?\" Yes, at a latency cost (PACELC): reading from the primary or waiting for replicas is slower. Pay it only where users notice.</li>\n</ul>",
        hi: "<ul>\n<li>वजहें: replication lag (replicas changes थोड़ी देर से apply करती हैं), invalidate न हुई cached copy (cache-aside puzzle देखो), या CDN या browser cache।</li>\n<li>Fixes: read-your-writes (उस user की reads कुछ seconds primary पर भेजो, या version या timestamp token दो), write पर cache key delete करो, तेज़ी से बदलने वाले data के लिए छोटा TTL।</li>\n<li>हर screen पर तय करो: profile page को read-your-writes चाहिए; public product list कुछ seconds stale चल सकती है।</li>\n<li>Follow-up: \"क्या मज़बूत consistency setting से ठीक होगा?\" हाँ, latency की कीमत पर (PACELC): primary से पढ़ना या replicas का इंतज़ार धीमा है। कीमत वहीं दो जहाँ users को फ़र्क़ दिखे।</li>\n</ul>",
        hg: "<ul>\n<li>Wajahein: replication lag (replicas changes thodi der se apply karti hain), invalidate na hui cached copy (cache-aside puzzle dekho), ya CDN ya browser cache.</li>\n<li>Fixes: read-your-writes (us user ki reads kuch seconds primary par bhejo, ya version ya timestamp token do), write par cache key delete karo, tezi se badalne wale data ke liye chhota TTL.</li>\n<li>Har screen par tay karo: profile page ko read-your-writes chahiye; public product list kuch seconds stale chal sakti hai.</li>\n<li>Follow-up: \"Kya mazboot consistency setting se theek hoga?\" Haan, latency ki keemat par (PACELC): primary se padhna ya replicas ka intezaar dheema hai. Keemat wahin do jahan users ko fark dikhe.</li>\n</ul>"
      }
    },
    {
      id: "hot-key-stampede",
      depth: "detailed",
      q: "One cache key becomes extremely hot and expires. How do you protect the database?",
      answer: "Coalesce concurrent loads so only one request rebuilds the value, add jitter to TTLs, and refresh popular keys before they expire. Serving slightly stale data briefly is often acceptable.",
      meaning: {
        hi: "Concurrent loads को coalesce करो ताकि सिर्फ़ एक request value दोबारा बनाए, TTLs में jitter जोड़ो, और popular keys को expire होने से पहले refresh करो। थोड़ी देर stale data देना अक्सर चल जाता है।",
        hg: "Concurrent loads ko coalesce karo taaki sirf ek request value dobara banaye, TTLs mein jitter jodo, aur popular keys ko expire hone se pehle refresh karo. Thodi der stale data dena aksar chal jaata hai."
      },
      explain: {
        en: "<ul>\n<li>The stampede: thousands of requests miss at the same moment and all hit the database. Day 13 covers it with HybridCache, which coalesces concurrent requests for the same key.</li>\n<li>Mitigations: single-flight (one loader, others wait), random jitter on TTLs so keys do not expire together, background refresh or \"serve stale while revalidating\", and a rate limit or circuit breaker in front of the database.</li>\n<li>Pre-warm known hot keys (for example a sale page) before a big event.</li>\n<li>Follow-up: \"What about a key that is hot all the time?\" Keep a short-lived copy in each app instance (local cache) in front of Redis, and consider splitting the key into several copies.</li>\n</ul>",
        hi: "<ul>\n<li>Stampede: हज़ारों requests एक ही पल में miss होकर सब database पर पहुँचती हैं। Day 13 में HybridCache के साथ इसे देखा था, जो एक ही key की concurrent requests को coalesce करता है।</li>\n<li>Mitigations: single-flight (एक loader, बाकी इंतज़ार), TTLs पर random jitter ताकि keys साथ में expire न हों, background refresh या \"revalidate करते समय stale दो\", और database के आगे rate limit या circuit breaker।</li>\n<li>बड़े event (जैसे sale page) से पहले जानी-पहचानी hot keys को pre-warm करो।</li>\n<li>Follow-up: \"हर समय hot रहने वाली key का क्या?\" Redis के आगे हर app instance में छोटी उम्र की copy (local cache) रखो, और key को कई copies में बाँटने पर सोचो।</li>\n</ul>",
        hg: "<ul>\n<li>Stampede: hazaaron requests ek hi pal mein miss hokar sab database par pahunchti hain. Day 13 mein HybridCache ke saath ise dekha tha, jo ek hi key ki concurrent requests ko coalesce karta hai.</li>\n<li>Mitigations: single-flight (ek loader, baaki intezaar), TTLs par random jitter taaki keys saath mein expire na hon, background refresh ya \"revalidate karte samay stale do\", aur database ke aage rate limit ya circuit breaker.</li>\n<li>Bade event (jaise sale page) se pehle jaani-pehchani hot keys ko pre-warm karo.</li>\n<li>Follow-up: \"Har samay hot rehne wali key ka kya?\" Redis ke aage har app instance mein chhoti umr ki copy (local cache) rakho, aur key ko kai copies mein baantne par socho.</li>\n</ul>"
      }
    },
    {
      id: "tell-me-a-design-story",
      depth: "detailed",
      q: "Tell me about a system you designed.",
      answer: "In [my system] I owned [part]: the goal was [goal], I weighed [A] against [B] and chose [A] because [reason], and the result was [real outcome].",
      meaning: {
        hi: "[मेरे system] में मैंने [हिस्सा] संभाला: goal [goal] था, मैंने [A] और [B] तौले, [A] इसलिए चुना क्योंकि [वजह], और result [असली नतीजा] रहा।",
        hg: "[Mere system] mein maine [hissa] sambhala: goal [goal] tha, maine [A] aur [B] taule, [A] isliye chuna kyunki [wajah], aur result [asli nateeja] raha."
      },
      explain: {
        en: "<ul>\n<li>Prepare it in advance using the template and labelled sample in the story section. The sample is only a shape; fill the blanks with your own real project, even a small one.</li>\n<li>Include one numbered estimate, one trade-off (\"I chose a queue over a direct call because ... the cost was eventual consistency\") and one failure mode you handled.</li>\n<li>Never invent details; interviewers ask follow-ups (\"why not X?\", \"what broke?\") and consistency is checked. If you lack a story, say so and present a clearly labelled \"how I would design it\".</li>\n<li>Follow-up: \"What would you change today?\" Have one honest reflection ready: it shows judgement, which is what a Tech Lead is hired for.</li>\n</ul>",
        hi: "<ul>\n<li>Story section के template और labelled sample से पहले से तैयारी करो। Sample सिर्फ़ shape है; blanks अपने असली project से भरो, छोटा भी चलेगा।</li>\n<li>एक numbers वाला estimate, एक trade-off (\"मैंने direct call की जगह queue चुनी क्योंकि ... कीमत eventual consistency थी\") और एक failure mode जो तुमने संभाला, ज़रूर रखो।</li>\n<li>कभी details गढ़ो मत; interviewer follow-ups पूछते हैं (\"X क्यों नहीं?\", \"क्या टूटा?\") और consistency जाँची जाती है। Story न हो तो साफ़ कहो और साफ़ labelled \"मैं इसे कैसे design करता\" बताओ।</li>\n<li>Follow-up: \"आज क्या बदलोगे?\" एक ईमानदार reflection तैयार रखो: यह judgement दिखाता है, और Tech Lead इसी के लिए रखा जाता है।</li>\n</ul>",
        hg: "<ul>\n<li>Story section ke template aur labelled sample se pehle se taiyaari karo. Sample sirf shape hai; blanks apne asli project se bharo, chhota bhi chalega.</li>\n<li>Ek numbers wala estimate, ek trade-off (\"maine direct call ki jagah queue chuni kyunki ... keemat eventual consistency thi\") aur ek failure mode jo tumne sambhala, zaroor rakho.</li>\n<li>Kabhi details gadho mat; interviewer follow-ups poochte hain (\"X kyon nahi?\", \"kya toota?\") aur consistency jaanchi jaati hai. Story na ho to saaf kaho aur saaf labelled \"main ise kaise design karta\" batao.</li>\n<li>Follow-up: \"Aaj kya badloge?\" Ek imaandar reflection taiyaar rakho: yeh judgement dikhata hai, aur Tech Lead isi ke liye rakha jaata hai.</li>\n</ul>"
      }
    },
    {
      id: "monolith-or-micro-in-design",
      depth: "detailed",
      q: "In a design round, do you start with microservices?",
      answer: "No. I start with the simplest design that meets the numbers, often a modular monolith, and split a service only when scale, team independence or failure isolation justifies the cost.",
      meaning: {
        hi: "नहीं। मैं numbers पूरे करने वाले सबसे simple design से शुरू करता हूँ, अक्सर modular monolith, और service तभी अलग करता हूँ जब scale, team independence या failure isolation उसकी कीमत justify करे।",
        hg: "Nahi. Main numbers poore karne wale sabse simple design se shuru karta hoon, aksar modular monolith, aur service tabhi alag karta hoon jab scale, team independence ya failure isolation uski keemat justify kare."
      },
      explain: {
        en: "<ul>\n<li>Interviewers reward reasoning, not buzzwords. Say what each split buys (independent scaling, ownership, isolation) and what it costs (network failures, no shared transaction, observability, on-call; Days 15 and 16).</li>\n<li>Natural early boundaries: an async, spiky part (notifications), a part with very different scaling (media processing), a part owned by another team.</li>\n<li>Show the evolution path: modular monolith now, extract the notification worker first because it is queue-driven and loosely coupled, later split more if the numbers demand it.</li>\n<li>Follow-up: \"What is a distributed monolith?\" Services that must be deployed together or share a database; you pay microservice costs without independence (Day 16).</li>\n</ul>",
        hi: "<ul>\n<li>Interviewer reasoning को reward करते हैं, buzzwords को नहीं। बताओ हर split क्या देता है (independent scaling, ownership, isolation) और क्या लेता है (network failures, shared transaction नहीं, observability, on-call; Days 15 और 16)।</li>\n<li>शुरुआती natural boundaries: async और spiky हिस्सा (notifications), बहुत अलग scaling वाला हिस्सा (media processing), दूसरी team का हिस्सा।</li>\n<li>Evolution path दिखाओ: अभी modular monolith, पहले notification worker निकालो क्योंकि वह queue-driven और loosely coupled है, बाद में numbers माँगें तो और split।</li>\n<li>Follow-up: \"Distributed monolith क्या है?\" ऐसी services जो साथ में deploy होनी पड़ें या database साझा करें; microservice की कीमतें बिना independence के (Day 16)।</li>\n</ul>",
        hg: "<ul>\n<li>Interviewer reasoning ko reward dete hain, buzzwords ko nahi. Batao har split kya deta hai (independent scaling, ownership, isolation) aur kya leta hai (network failures, shared transaction nahi, observability, on-call; Days 15 aur 16).</li>\n<li>Shuruaati natural boundaries: async aur spiky hissa (notifications), bahut alag scaling wala hissa (media processing), doosri team ka hissa.</li>\n<li>Evolution path dikhao: abhi modular monolith, pehle notification worker nikalo kyunki woh queue-driven aur loosely coupled hai, baad mein numbers maangein to aur split.</li>\n<li>Follow-up: \"Distributed monolith kya hai?\" Aisi services jo saath mein deploy honi padein ya database saajha karein; microservice ki keematein bina independence ke (Day 16).</li>\n</ul>"
      }
    }
  ],
  puzzles: [
    {
      id: "capacity-estimate-rounding",
      src: "const long SecondsPerMonth = 30 * 24 * 60 * 60;\nconst long NewUrlsPerMonth = 100_000_000;\nconst int ReadsPerWrite = 100;\nconst long BytesPerRecord = 500;\n\nlong writesPerSec = NewUrlsPerMonth / SecondsPerMonth;\nlong readsFromRoundedWrites = writesPerSec * ReadsPerWrite;\nlong readsPerSec = NewUrlsPerMonth * ReadsPerWrite / SecondsPerMonth;\nlong peakReads = readsPerSec * 2;\nlong records5y = NewUrlsPerMonth * 12 * 5;\nlong storageGb = records5y * BytesPerRecord / 1_000_000_000;\nlong readKbPerSec = readsPerSec * BytesPerRecord / 1_000;\n\nConsole.WriteLine($\"writes/s: {writesPerSec}\");\nConsole.WriteLine($\"reads/s (round first): {readsFromRoundedWrites}\");\nConsole.WriteLine($\"reads/s (round last): {readsPerSec}\");\nConsole.WriteLine($\"peak reads/s: {peakReads}\");\nConsole.WriteLine($\"5y storage: {storageGb} GB\");\nConsole.WriteLine($\"read bandwidth: {readKbPerSec} KB/s\");",
      answer: "writes/s: 38\nreads/s (round first): 3800\nreads/s (round last): 3858\npeak reads/s: 7716\n5y storage: 3000 GB\nread bandwidth: 1929 KB/s",
      explain: {
        en: "<ul>\n<li>100 million per month over 2,592,000 seconds is 38.58 writes per second; <code>long</code> division truncates it to <b>38</b>.</li>\n<li>Rounding <b>first</b> and then multiplying by 100 gives 3,800 reads/s. Multiplying first and dividing last gives <b>3,858</b>. Keep full precision as long as you can and round only at the end (in an interview, say \"about 4,000\").</li>\n<li>Peak = average x 2 is a common rule of thumb: 7,716 reads/s. Size for peak, not for average.</li>\n<li>Storage: 100M x 12 months x 5 years = 6 billion records; x 500 bytes = 3,000 GB = 3 TB (decimal units; about 9 TB with 3 copies). Bandwidth: 3,858 x 500 bytes is about 1.9 MB/s, tiny for one server.</li>\n<li>Lesson: the arithmetic is easy; the value is stating your assumptions aloud and seeing that reads, not storage, drive this design.</li>\n</ul>",
        hi: "<ul>\n<li>हर महीने 100 million, 2,592,000 seconds में बँटे तो 38.58 writes per second आते हैं; <code>long</code> division इसे <b>38</b> पर काट देता है।</li>\n<li>पहले round करके फिर 100 से गुणा करो तो 3,800 reads/s आता है। पहले गुणा और आख़िर में divide करो तो <b>3,858</b>। जितना हो सके पूरी precision रखो और round सिर्फ़ आख़िर में करो (interview में बोलो \"लगभग 4,000\")।</li>\n<li>Peak = average x 2 एक आम rule of thumb है: 7,716 reads/s। Size peak के हिसाब से करो, average से नहीं।</li>\n<li>Storage: 100M x 12 महीने x 5 साल = 6 billion records; x 500 bytes = 3,000 GB = 3 TB (decimal units; 3 copies के साथ लगभग 9 TB)। Bandwidth: 3,858 x 500 bytes लगभग 1.9 MB/s है, एक server के लिए बहुत छोटा।</li>\n<li>Lesson: हिसाब आसान है; असली value यह है कि तुम assumptions ज़ोर से बोलो और देखो कि इस design को reads चलाते हैं, storage नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>Har mahine 100 million, 2,592,000 seconds mein banten to 38.58 writes per second aate hain; <code>long</code> division ise <b>38</b> par kaat deta hai.</li>\n<li>Pehle round karke phir 100 se guna karo to 3,800 reads/s aata hai. Pehle guna aur aakhir mein divide karo to <b>3,858</b>. Jitna ho sake poori precision rakho aur round sirf aakhir mein karo (interview mein bolo \"lagbhag 4,000\").</li>\n<li>Peak = average x 2 ek aam rule of thumb hai: 7,716 reads/s. Size peak ke hisaab se karo, average se nahi.</li>\n<li>Storage: 100M x 12 mahine x 5 saal = 6 billion records; x 500 bytes = 3,000 GB = 3 TB (decimal units; about 9 TB with 3 copies). Bandwidth: 3,858 x 500 bytes lagbhag 1.9 MB/s hai, ek server ke liye bahut chhota.</li>\n<li>Lesson: hisaab aasan hai; asli value yeh hai ki tum assumptions zor se bolo aur dekho ki is design ko reads chalate hain, storage nahi.</li>\n</ul>"
      }
    },
    {
      id: "id-blocks-base62",
      src: "const string Alphabet = \"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n\nstring Encode(long n)\n{\n    if (n == 0) return \"0\";\n    var chars = new Stack<char>();\n    while (n > 0) { chars.Push(Alphabet[(int)(n % 62)]); n /= 62; }\n    return new string(chars.ToArray());\n}\n\nvar blockA = new IdBlock(1, 1000);\nvar blockB = new IdBlock(1001, 2000);\nvar requests = new[] { \"A\", \"B\", \"A\", \"A\", \"B\", \"B\" };\nvar codes = new List<string>();\nforeach (var server in requests)\n{\n    var id = server == \"A\" ? blockA.Next() : blockB.Next();\n    codes.Add(Encode(id));\n    Console.WriteLine($\"{server} -> {id} -> {Encode(id)}\");\n}\nConsole.WriteLine(\"unique: \" + (codes.Distinct().Count() == codes.Count));\nConsole.WriteLine(\"62^3 = \" + (long)Math.Pow(62, 3));\nConsole.WriteLine(\"code(3844) = \" + Encode(3844) + \", code(61) = \" + Encode(61));\n\nclass IdBlock(long first, long last)\n{\n    private long _next = first;\n    public long Next() => _next <= last ? _next++ : throw new InvalidOperationException(\"block used up, ask the database for a new one\");\n}",
      answer: "A -> 1 -> 1\nB -> 1001 -> g9\nA -> 2 -> 2\nA -> 3 -> 3\nB -> 1002 -> ga\nB -> 1003 -> gb\nunique: True\n62^3 = 238328\ncode(3844) = 100, code(61) = Z",
      explain: {
        en: "<ul>\n<li>Each app server owns a <b>block</b> of ids (A: 1-1000, B: 1001-2000) leased from the database once, then hands out ids from memory. No database call per URL, and the two servers cannot collide.</li>\n<li>Base62 uses 0-9, a-z, A-Z. 1001 = 16 x 62 + 9, so it is <code>g9</code> (a=10 ... g=16). 61 is the last symbol <code>Z</code>; 62 rolls over to <code>10</code>, and 3,844 (62 squared) is <code>100</code>.</li>\n<li>Ids from different servers are <b>not in time order</b> across servers; that is fine for short codes. If a server crashes, its unused ids are skipped, which is also fine (gaps are cheap).</li>\n<li>Capacity: 62^3 = 238,328 codes; 62^7 is about 3.5 trillion, so 7 characters cover a very large service.</li>\n<li>Trade-off: sequential ids are guessable (people can walk through every link). If links must be unguessable, shuffle or encrypt the id before encoding, or use random codes with a uniqueness check.</li>\n</ul>",
        hi: "<ul>\n<li>हर app server के पास ids का एक <b>block</b> है (A: 1-1000, B: 1001-2000) जो database से एक बार lease होता है, फिर server memory से ids बाँटता है। हर URL पर database call नहीं, और दोनों servers आपस में टकराते नहीं।</li>\n<li>Base62 में 0-9, a-z, A-Z होते हैं। 1001 = 16 x 62 + 9, इसलिए यह <code>g9</code> है (a=10 ... g=16)। 61 आख़िरी symbol <code>Z</code> है; 62 पर <code>10</code> बन जाता है, और 3,844 (62 का square) <code>100</code> है।</li>\n<li>अलग servers की ids आपस में <b>time order में नहीं</b> होतीं; short codes के लिए यह ठीक है। Server crash हो तो उसकी बची ids छूट जाती हैं, यह भी ठीक है (gaps सस्ते हैं)।</li>\n<li>Capacity: 62^3 = 238,328 codes; 62^7 लगभग 3.5 trillion है, इसलिए 7 characters बहुत बड़ी service के लिए काफ़ी हैं।</li>\n<li>Trade-off: sequential ids guess हो सकती हैं (लोग हर link पर चल सकते हैं)। Links unguessable चाहिए तो id को encode करने से पहले shuffle या encrypt करो, या random codes लो और uniqueness check करो।</li>\n</ul>",
        hg: "<ul>\n<li>Har app server ke paas ids ka ek <b>block</b> hai (A: 1-1000, B: 1001-2000) jo database se ek baar lease hota hai, phir server memory se ids baantta hai. Har URL par database call nahi, aur dono servers aapas mein takrate nahi.</li>\n<li>Base62 mein 0-9, a-z, A-Z hote hain. 1001 = 16 x 62 + 9, isliye yeh <code>g9</code> hai (a=10 ... g=16). 61 aakhri symbol <code>Z</code> hai; 62 par <code>10</code> ban jaata hai, aur 3,844 (62 ka square) <code>100</code> hai.</li>\n<li>Alag servers ki ids aapas mein <b>time order mein nahi</b> hoti; short codes ke liye yeh theek hai. Server crash ho to uski bachi ids chhoot jaati hain, yeh bhi theek hai (gaps saste hain).</li>\n<li>Capacity: 62^3 = 238,328 codes; 62^7 lagbhag 3.5 trillion hai, isliye 7 characters bahut badi service ke liye kaafi hain.</li>\n<li>Trade-off: sequential ids guess ho sakti hain (log har link par chal sakte hain). Links unguessable chahiye to id ko encode karne se pehle shuffle ya encrypt karo, ya random codes lo aur uniqueness check karo.</li>\n</ul>"
      }
    },
    {
      id: "modulo-vs-ring-rebalance",
      src: "static uint Fnv(string s)\n{\n    uint h = 2166136261;\n    foreach (var b in System.Text.Encoding.UTF8.GetBytes(s)) { h ^= b; h *= 16777619; }\n    return h;\n}\n\nvar keys = Enumerable.Range(1, 20).Select(i => \"user-\" + i).ToList();\n\nstring Mod(string key, int nodes) => \"N\" + (Fnv(key) % nodes);\n\nvar ring3 = new Ring([\"N0\", \"N1\", \"N2\"], 20);\nvar ring4 = new Ring([\"N0\", \"N1\", \"N2\", \"N3\"], 20);\n\nint modMoved = keys.Count(k => Mod(k, 3) != Mod(k, 4));\nvar ringMoved = keys.Where(k => ring3.Find(k) != ring4.Find(k)).ToList();\nConsole.WriteLine($\"modulo moved: {modMoved} of {keys.Count}\");\nConsole.WriteLine($\"ring moved: {ringMoved.Count} of {keys.Count}\");\nConsole.WriteLine(\"all ring moves went to N3: \" + ringMoved.All(k => ring4.Find(k) == \"N3\"));\n\nclass Ring\n{\n    private readonly SortedDictionary<uint, string> _points = new();\n    private readonly uint[] _sorted;\n    public Ring(string[] nodes, int virtualNodes)\n    {\n        foreach (var n in nodes)\n            for (var v = 0; v < virtualNodes; v++) _points[Fnv(n + \"#\" + v)] = n;\n        _sorted = _points.Keys.ToArray();\n    }\n    public string Find(string key)\n    {\n        var h = Fnv(key);\n        var i = Array.BinarySearch(_sorted, h);\n        if (i < 0) i = ~i;\n        if (i == _sorted.Length) i = 0;\n        return _points[_sorted[i]];\n    }\n    static uint Fnv(string s)\n    {\n        uint h = 2166136261;\n        foreach (var b in System.Text.Encoding.UTF8.GetBytes(s)) { h ^= b; h *= 16777619; }\n        return h;\n    }\n}",
      answer: "modulo moved: 15 of 20\nring moved: 2 of 20\nall ring moves went to N3: True",
      explain: {
        en: "<ul>\n<li>The hash is <b>FNV-1a</b>, written by hand. <code>string.GetHashCode()</code> is randomised per process in .NET, so it must not decide which node owns a key.</li>\n<li>With <code>hash % nodes</code>, going from 3 to 4 nodes changes the divisor, so most keys change owner: 15 of 20 here (about 3 out of 4 in general). A cache would lose most of its entries at once.</li>\n<li>On the <b>ring</b>, each node has 20 points (virtual nodes). A key belongs to the first point clockwise from its hash. Adding N3 only takes the keys that fall just before N3's new points: 2 of 20 here.</li>\n<li>Every key that moved went to the <b>new</b> node; no key moved between old nodes. That is the guarantee: moved keys go only to the new node. The expected share moved is about 1/N (a quarter here), but uneven arcs can give less, as the 2 of 20 shows.</li>\n<li>Virtual nodes smooth the distribution; with very few points one node can own a big arc. The exact \"2\" depends on the hash and the points, so do not quote it as a rule.</li>\n</ul>",
        hi: "<ul>\n<li>Hash हाथ से लिखा <b>FNV-1a</b> है। .NET में <code>string.GetHashCode()</code> हर process में randomise होता है, इसलिए key का owner node तय करने के लिए उसे use मत करो।</li>\n<li><code>hash % nodes</code> में 3 से 4 nodes करने पर divisor बदल जाता है, इसलिए ज़्यादातर keys का owner बदल जाता है: यहाँ 20 में से 15 (आम तौर पर चार में से लगभग तीन)। Cache की ज़्यादातर entries एक साथ चली जाएँगी।</li>\n<li><b>Ring</b> पर हर node के 20 points (virtual nodes) हैं। Key उस पहले point की है जो उसके hash से clockwise मिले। N3 जोड़ने पर सिर्फ़ वही keys जाती हैं जो N3 के नए points से ठीक पहले गिरती हैं: यहाँ 20 में से 2।</li>\n<li>जो हर key हिली वह <b>नए</b> node पर गई; कोई key पुराने nodes के बीच नहीं हिली। यही guarantee है: हिली हुई keys सिर्फ़ नए node पर जाती हैं। हिलने वाला expected हिस्सा लगभग 1/N है (यहाँ एक चौथाई), पर असमान arcs से कम भी हो सकता है, जैसे यहाँ 20 में से 2।</li>\n<li>Virtual nodes distribution को smooth करते हैं; बहुत कम points हों तो एक node बड़े arc का मालिक बन सकता है। यहाँ का \"2\" hash और points पर निर्भर है, इसे rule की तरह मत बोलो।</li>\n</ul>",
        hg: "<ul>\n<li>Hash haath se likha <b>FNV-1a</b> hai. .NET mein <code>string.GetHashCode()</code> har process mein randomise hota hai, isliye key ka owner node tay karne ke liye ise use mat karo.</li>\n<li><code>hash % nodes</code> mein 3 se 4 nodes karne par divisor badal jaata hai, isliye zyadatar keys ka owner badal jaata hai: yahan 20 mein se 15 (aam taur par chaar mein se lagbhag teen). Cache ki zyadatar entries ek saath chali jaengi.</li>\n<li><b>Ring</b> par har node ke 20 points (virtual nodes) hain. Key us pehle point ki hai jo uske hash se clockwise mile. N3 jodne par sirf wahi keys jaati hain jo N3 ke naye points se theek pehle girti hain: yahan 20 mein se 2.</li>\n<li>Jo har key hili woh <b>naye</b> node par gayi; koi key purane nodes ke beech nahi hili. Yahi guarantee hai: hili hui keys sirf naye node par jaati hain. Hilne wala expected hissa lagbhag 1/N hai (yahan ek chauthai), par asamaan arcs se kam bhi ho sakta hai, jaise yahan 20 mein se 2.</li>\n<li>Virtual nodes distribution ko smooth karte hain; bahut kam points hon to ek node bade arc ka malik ban sakta hai. Yahan ka \"2\" hash aur points par depend karta hai, ise rule ki tarah mat bolo.</li>\n</ul>"
      }
    },
    {
      id: "cache-aside-stale-and-ttl",
      src: "var clock = new FakeClock();\nvar db = new Dictionary<string, string> { [\"p1\"] = \"v1\" };\nvar cache = new Cache(clock, ttlSeconds: 60);\nint hits = 0, misses = 0;\n\nstring Get(string key)\n{\n    if (cache.TryGet(key, out var cached)) { hits++; return cached; }\n    misses++;\n    var value = db[key];\n    cache.Set(key, value);\n    return value;\n}\n\nConsole.WriteLine(\"t=0   \" + Get(\"p1\"));\nConsole.WriteLine(\"t=10  \" + Step(10, () => Get(\"p1\")));\ndb[\"p1\"] = \"v2\";\nConsole.WriteLine(\"t=20  \" + Step(10, () => Get(\"p1\")) + \" (db is v2, no invalidation)\");\ncache.Remove(\"p1\");\nConsole.WriteLine(\"t=30  \" + Step(10, () => Get(\"p1\")) + \" (after Remove)\");\nConsole.WriteLine(\"t=89  \" + Step(59, () => Get(\"p1\")));\nConsole.WriteLine(\"t=91  \" + Step(2, () => Get(\"p1\")) + \" (TTL passed)\");\nConsole.WriteLine($\"hits={hits} misses={misses}\");\n\nstring Step(int seconds, Func<string> f) { clock.Now += seconds; return f(); }\n\nclass FakeClock { public int Now; }\nclass Cache(FakeClock clock, int ttlSeconds)\n{\n    private readonly Dictionary<string, (string Value, int ExpiresAt)> _items = new();\n    public bool TryGet(string key, out string value)\n    {\n        if (_items.TryGetValue(key, out var e) && e.ExpiresAt > clock.Now) { value = e.Value; return true; }\n        value = \"\"; return false;\n    }\n    public void Set(string key, string value) => _items[key] = (value, clock.Now + ttlSeconds);\n    public void Remove(string key) => _items.Remove(key);\n}",
      answer: "t=0   v1\nt=10  v1\nt=20  v1 (db is v2, no invalidation)\nt=30  v2 (after Remove)\nt=89  v2\nt=91  v2 (TTL passed)\nhits=3 misses=3",
      explain: {
        en: "<ul>\n<li>t=0: miss, load <code>v1</code> from the database, cache it with a 60 s TTL. t=10: hit.</li>\n<li>The database changes to <code>v2</code>, but nobody tells the cache. t=20 is a <b>hit that returns stale data</b>. A TTL alone means \"stale for up to 60 seconds\".</li>\n<li>t=30: after an explicit <code>Remove</code> (invalidate on write) the next read is a miss and loads <code>v2</code>; the new entry expires at t=90.</li>\n<li>t=89: still a hit (the entry is valid until t=90). t=91: the entry expired, so a miss again. Totals: 3 hits, 3 misses.</li>\n<li>Take-away: cache-aside = read: check the cache, else load and fill; write: update the database, then <b>delete</b> the key. Keep a TTL as a safety net. Many readers missing at once is the stampede from Day 13; add jitter or request coalescing (Day 13 has HybridCache).</li>\n</ul>",
        hi: "<ul>\n<li>t=0: miss, database से <code>v1</code> load किया, 60 s TTL के साथ cache किया। t=10: hit।</li>\n<li>Database <code>v2</code> हो गया, पर cache को किसी ने बताया नहीं। t=20 एक <b>hit है जो stale data देता है</b>। सिर्फ़ TTL का मतलब है \"60 seconds तक stale\"।</li>\n<li>t=30: साफ़ <code>Remove</code> (write पर invalidate) के बाद अगली read miss है और <code>v2</code> load होता है; नई entry t=90 पर expire होती है।</li>\n<li>t=89: अभी भी hit (entry t=90 तक valid है)। t=91: entry expire हो गई, इसलिए फिर miss। Totals: 3 hits, 3 misses।</li>\n<li>Take-away: cache-aside = read: cache देखो, नहीं तो load करके भरो; write: database update करो, फिर key <b>delete</b> करो। Safety net के लिए TTL रखो। बहुत सारे readers का एक साथ miss होना Day 13 वाला stampede है; jitter या request coalescing लगाओ (Day 13 में HybridCache है)।</li>\n</ul>",
        hg: "<ul>\n<li>t=0: miss, database se <code>v1</code> load kiya, 60 s TTL ke saath cache kiya. t=10: hit.</li>\n<li>Database <code>v2</code> ho gaya, par cache ko kisi ne bataya nahi. t=20 ek <b>hit hai jo stale data deta hai</b>. Sirf TTL ka matlab hai \"60 seconds tak stale\".</li>\n<li>t=30: saaf <code>Remove</code> (write par invalidate) ke baad agli read miss hai aur <code>v2</code> load hota hai; nayi entry t=90 par expire hoti hai.</li>\n<li>t=89: abhi bhi hit (entry t=90 tak valid hai). t=91: entry expire ho gayi, isliye phir miss. Totals: 3 hits, 3 misses.</li>\n<li>Take-away: cache-aside = read: cache dekho, nahi to load karke bharo; write: database update karo, phir key <b>delete</b> karo. Safety net ke liye TTL rakho. Bahut saare readers ka ek saath miss hona Day 13 wala stampede hai; jitter ya request coalescing lagao (Day 13 mein HybridCache hai).</li>\n</ul>"
      }
    },
    {
      id: "token-bucket-fake-clock",
      src: "var limiter = new TokenBucket(capacity: 3, refillPerSecond: 1);\nvar calls = new (int AtMs, string Id)[]\n{\n    (0, \"a\"), (0, \"b\"), (0, \"c\"), (0, \"d\"),\n    (500, \"e\"), (1000, \"f\"), (1000, \"g\"), (2500, \"h\"), (10_000, \"i\"), (10_000, \"j\"), (10_000, \"k\"), (10_000, \"l\")\n};\nforeach (var (at, id) in calls)\n    Console.WriteLine($\"{at,5} ms {id}: {(limiter.TryTake(at) ? \"allowed\" : \"rejected 429\")}\");\n\nclass TokenBucket(int capacity, int refillPerSecond)\n{\n    // tokens are stored in milli-tokens so the maths stays in integers\n    private long _milli = capacity * 1000L;\n    private int _lastMs;\n    public bool TryTake(int nowMs)\n    {\n        _milli = Math.Min(capacity * 1000L, _milli + (nowMs - _lastMs) * (long)refillPerSecond);\n        _lastMs = nowMs;\n        if (_milli < 1000) return false;\n        _milli -= 1000;\n        return true;\n    }\n}",
      answer: "    0 ms a: allowed\n    0 ms b: allowed\n    0 ms c: allowed\n    0 ms d: rejected 429\n  500 ms e: rejected 429\n 1000 ms f: allowed\n 1000 ms g: rejected 429\n 2500 ms h: allowed\n10000 ms i: allowed\n10000 ms j: allowed\n10000 ms k: allowed\n10000 ms l: rejected 429",
      explain: {
        en: "<ul>\n<li>The bucket holds up to 3 tokens and refills 1 token per second; every request costs one token. The \"clock\" is just the number we pass in, so the output is deterministic.</li>\n<li>At 0 ms the full bucket serves a, b, c (a <b>burst</b> of 3); d finds it empty and gets 429.</li>\n<li>At 500 ms only half a token has come back (500 milli-tokens), so e is rejected. At 1000 ms one whole token is there: f is allowed, g is not.</li>\n<li>At 2500 ms 1.5 tokens have refilled since 1000 ms: h is allowed and half a token is left over.</li>\n<li>After a long quiet gap (10 s) the bucket refills but is <b>capped at capacity</b>: only 3 requests (i, j, k) pass in the burst, l is rejected. Without the cap, idle time would store up unlimited burst credit.</li>\n<li>In ASP.NET Core you would use the built-in rate limiter (Day 13); across several servers the counters must live in a shared store such as Redis, or each server enforces its own share.</li>\n</ul>",
        hi: "<ul>\n<li>Bucket में ज़्यादा से ज़्यादा 3 tokens हैं और हर second 1 token वापस भरता है; हर request एक token लेती है। \"Clock\" बस वही number है जो हम pass करते हैं, इसलिए output deterministic है।</li>\n<li>0 ms पर भरा bucket a, b, c को serve करता है (3 का <b>burst</b>); d को खाली मिलता है और 429 आता है।</li>\n<li>500 ms पर सिर्फ़ आधा token लौटा है (500 milli-tokens), इसलिए e reject। 1000 ms पर एक पूरा token है: f allowed, g नहीं।</li>\n<li>2500 ms पर 1000 ms के बाद 1.5 tokens भरे हैं: h allowed और आधा token बचा रहता है।</li>\n<li>लंबे खाली gap (10 s) के बाद bucket भरता है पर <b>capacity पर रुक जाता है</b>: burst में सिर्फ़ 3 requests (i, j, k) निकलती हैं, l reject। Cap के बिना idle time unlimited burst credit जमा कर लेता।</li>\n<li>ASP.NET Core में built-in rate limiter use करोगे (Day 13); कई servers हों तो counters shared store (जैसे Redis) में रहने चाहिए, या हर server अपना हिस्सा enforce करे।</li>\n</ul>",
        hg: "<ul>\n<li>Bucket mein zyada se zyada 3 tokens hain aur har second 1 token wapas bharta hai; har request ek token leti hai. \"Clock\" bas wahi number hai jo hum pass karte hain, isliye output deterministic hai.</li>\n<li>0 ms par bhara bucket a, b, c ko serve karta hai (3 ka <b>burst</b>); d ko khaali milta hai aur 429 aata hai.</li>\n<li>500 ms par sirf aadha token lauta hai (500 milli-tokens), isliye e reject. 1000 ms par ek poora token hai: f allowed, g nahi.</li>\n<li>2500 ms par 1000 ms ke baad 1.5 tokens bhare hain: h allowed aur aadha token bacha rehta hai.</li>\n<li>Lambe khaali gap (10 s) ke baad bucket bharta hai par <b>capacity par ruk jaata hai</b>: burst mein sirf 3 requests (i, j, k) nikalti hain, l reject. Cap ke bina idle time unlimited burst credit jama kar leta.</li>\n<li>ASP.NET Core mein built-in rate limiter use karoge (Day 13); kai servers hon to counters shared store (jaise Redis) mein rehne chahiye, ya har server apna hissa enforce kare.</li>\n</ul>"
      }
    },
    {
      id: "shard-key-hotspot",
      src: "static uint Fnv(string s)\n{\n    uint h = 2166136261;\n    foreach (var b in System.Text.Encoding.UTF8.GetBytes(s)) { h ^= b; h *= 16777619; }\n    return h;\n}\n\nconst int Shards = 4;\nvar newOrderIds = Enumerable.Range(3000, 100).ToList();\n\nvar byRange = new int[Shards];\nvar byHash = new int[Shards];\nforeach (var id in newOrderIds)\n{\n    byRange[id / 1000]++;              // range shards: 0-999, 1000-1999, 2000-2999, 3000-3999\n    byHash[Fnv(\"order-\" + id) % Shards]++;\n}\nConsole.WriteLine(\"range by id : \" + string.Join(\",\", byRange));\nConsole.WriteLine(\"hash by id  : \" + string.Join(\",\", byHash));\n\nvar customers = new[] { \"IN\", \"IN\", \"IN\", \"IN\", \"IN\", \"IN\", \"IN\", \"US\", \"UK\", \"SG\" };\nvar byCountry = new int[Shards];\nforeach (var c in customers) byCountry[Fnv(c) % Shards]++;\nConsole.WriteLine(\"hash by country: \" + string.Join(\",\", byCountry));",
      answer: "range by id : 0,0,0,100\nhash by id  : 25,25,25,25\nhash by country: 0,2,7,1",
      explain: {
        en: "<ul>\n<li>Range sharding by order id (0-999, 1000-1999, ...) looks tidy, but new orders always have the <b>highest ids</b>: all 100 new inserts land on the last shard. That is a <b>write hotspot</b>, and the other shards sit idle.</li>\n<li>Hashing the id (a stable hash, FNV-1a here) spreads the same 100 inserts 25 / 25 / 25 / 25 (the exact 25s come from these sequential ids; real hashes give roughly even, not exact, splits). The price: range queries (\"orders 3000-3050\") now touch every shard.</li>\n<li>A <b>low-cardinality or skewed key</b> is the other classic mistake. Sharding by country puts 7 of 10 customers on one shard because most customers are in \"IN\". A good shard key has many distinct values and an even spread.</li>\n<li>The key should also match the main access pattern: \"all orders of a customer\" is fast if the customer id is the key; a query by anything else becomes scatter-gather across shards.</li>\n<li>Changing the number of shards later with <code>hash % N</code> reshuffles most data; this is why consistent hashing or a lookup directory is used (previous puzzle).</li>\n</ul>",
        hi: "<ul>\n<li>Order id से range sharding (0-999, 1000-1999, ...) साफ़-सुथरी लगती है, पर नए orders की ids हमेशा <b>सबसे ऊँची</b> होती हैं: सारे 100 नए inserts आख़िरी shard पर गिरते हैं। यह <b>write hotspot</b> है, और बाकी shards खाली बैठे रहते हैं।</li>\n<li>Id को hash करें (stable hash, यहाँ FNV-1a) तो वही 100 inserts 25 / 25 / 25 / 25 बँटते हैं (ठीक 25 इन sequential ids की वजह से हैं; असली hashes लगभग बराबर बाँटते हैं, ठीक बराबर नहीं)। कीमत: range queries (\"orders 3000-3050\") अब हर shard को छूती हैं।</li>\n<li><b>कम distinct values या skewed key</b> दूसरी classic ग़लती है। Country से sharding करने पर 10 में से 7 customers एक shard पर आ गए क्योंकि ज़्यादातर customers \"IN\" में हैं। अच्छी shard key में बहुत सारी अलग values और बराबर spread होता है।</li>\n<li>Key main access pattern से भी मेल खानी चाहिए: \"एक customer के सारे orders\" तब तेज़ है जब customer id ही key हो; किसी और चीज़ से query हो तो वह सब shards पर scatter-gather बन जाती है।</li>\n<li>बाद में <code>hash % N</code> से shards की संख्या बदलो तो ज़्यादातर data हिल जाता है; इसीलिए consistent hashing या lookup directory use होती है (पिछला puzzle)।</li>\n</ul>",
        hg: "<ul>\n<li>Order id se range sharding (0-999, 1000-1999, ...) saaf-suthri lagti hai, par naye orders ki ids hamesha <b>sabse unchi</b> hoti hain: saare 100 naye inserts aakhri shard par girte hain. Yeh <b>write hotspot</b> hai, aur baaki shards khaali baithe rehte hain.</li>\n<li>Id ko hash karein (stable hash, yahan FNV-1a) to wahi 100 inserts 25 / 25 / 25 / 25 bante hain (theek 25 in sequential ids ki wajah se hain; asli hashes lagbhag barabar baantte hain, theek barabar nahi). Keemat: range queries (\"orders 3000-3050\") ab har shard ko chhuti hain.</li>\n<li><b>Kam distinct values ya skewed key</b> doosri classic galti hai. Country se sharding karne par 10 mein se 7 customers ek shard par aa gaye kyunki zyadatar customers \"IN\" mein hain. Achhi shard key mein bahut saari alag values aur barabar spread hota hai.</li>\n<li>Key main access pattern se bhi mel khaani chahiye: \"ek customer ke saare orders\" tab tez hai jab customer id hi key ho; kisi aur cheez se query ho to woh sab shards par scatter-gather ban jaati hai.</li>\n<li>Baad mein <code>hash % N</code> se shards ki sankhya badlo to zyadatar data hil jaata hai; isiliye consistent hashing ya lookup directory use hoti hai (pichla puzzle).</li>\n</ul>"
      }
    }
  ],
  revision: {
    en: [
      "<b>Framework</b>: clarify, estimate, API, data, high-level design, deep dives, wrap-up; questions first, boxes later; about 45 minutes.",
      "<b>Estimates</b>: state assumptions; QPS = per day / 86,400, peak 2-3x average; storage = records x size x retention x copies.",
      "<b>Cache-aside</b>: read the cache, on a miss load and fill with a TTL; on write update the database then delete the key.",
      "<b>Sharding</b>: key with many values, even traffic, matching the main query; consistent hashing moves only about 1/N of the keys.",
      "<b>URL shortener</b>: counter plus base62 codes, cache-aside redirects, 302 when you need click analytics; base62 is not secret.",
      "<b>Token bucket</b>: capacity = burst, refill rate = steady speed; one bucket per customer; reject with 429 and Retry-After.",
      "<b>Notification system</b>: acknowledge the webhook fast, process from a queue; dedupe by id, retry with backoff, dead-letter the hopeless.",
      "<b>Order management</b>: no distributed transaction; a saga with reverse compensations, an outbox and idempotent consumers.",
      "Scale a database in order: indexes, caching, read replicas, then sharding by a well-chosen key.",
      "CAP: during a partition choose consistency or availability; PACELC adds latency versus consistency otherwise.",
      "Tell your design story from a real project and never invent details."
    ],
    meaning: {
      hi: [
        "Framework: clarify, estimate, API, data, high-level design, deep dives, wrap-up; पहले सवाल, बाद में boxes",
        "Estimates: assumptions बोलो; QPS = रोज़ का / 86,400, peak average का 2-3 गुना; storage = records x size x retention x copies",
        "Cache-aside: पहले cache, miss पर load करके TTL के साथ भरो; write पर database बदलो फिर key delete करो",
        "Sharding: ऐसी key जिसमें कई values हों, traffic बराबर हो, main query से मेल खाए; consistent hashing में सिर्फ़ लगभग 1/N keys हिलती हैं",
        "URL shortener: counter और base62 codes, cache-aside redirects, click analytics चाहिए तो 302; base62 secret नहीं",
        "Token bucket: capacity = burst, refill rate = एक जैसी रफ़्तार; हर customer का एक bucket; 429 और Retry-After से reject",
        "Notification system: webhook को जल्दी ack करो, queue से process करो; id से dedupe, backoff के साथ retry, बेकार को dead-letter",
        "Order management: distributed transaction नहीं; उल्टे क्रम की compensations वाला saga, outbox और idempotent consumers",
        "Database को क्रम से scale करो: indexes, caching, read replicas, फिर अच्छी चुनी key से sharding।",
        "CAP: partition के दौरान consistency या availability चुनो; PACELC बाकी समय latency बनाम consistency जोड़ता है।",
        "अपनी design story असली project से बोलो और details कभी गढ़ो मत।"
      ],
      hg: [
        "Framework: clarify, estimate, API, data, high-level design, deep dives, wrap-up; pehle sawaal, baad mein boxes",
        "Estimates: assumptions bolo; QPS = roz ka / 86,400, peak average ka 2-3 guna; storage = records x size x retention x copies",
        "Cache-aside: pehle cache, miss par load karke TTL ke saath bharo; write par database badlo phir key delete karo",
        "Sharding: aisi key jisme kai values hon, traffic barabar ho, main query se mel khaye; consistent hashing mein sirf lagbhag 1/N keys hilti hain",
        "URL shortener: counter aur base62 codes, cache-aside redirects, click analytics chahiye to 302; base62 secret nahi",
        "Token bucket: capacity = burst, refill rate = ek jaisi raftaar; har customer ka ek bucket; 429 aur Retry-After se reject",
        "Notification system: webhook ko jaldi ack karo, queue se process karo; id se dedupe, backoff ke saath retry, bekaar ko dead-letter",
        "Order management: distributed transaction nahi; ulte kram ki compensations wala saga, outbox aur idempotent consumers",
        "Database ko kram se scale karo: indexes, caching, read replicas, phir achhi chuni key se sharding.",
        "CAP: partition ke dauran consistency ya availability chuno; PACELC baaki samay latency vs consistency jodta hai.",
        "Apni design story asli project se bolo aur details kabhi gadho mat."
      ]
    }
  }
};
