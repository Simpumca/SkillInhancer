// Day 17 — System design for Tech Lead rounds. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 17,
  title: {
    en: "System design for TL rounds — framework, estimates, building blocks, three worked designs",
    hi: "TL rounds के लिए System design — framework, estimates, building blocks, तीन worked designs",
    hg: "TL rounds ke liye System design — framework, estimates, building blocks, teen worked designs"
  },
  summary: {
    en: `<p>Days 15 and 16 gave you architecture and microservices. Today you <b>use them out loud</b>: the system design round, where there is no single right answer and you are judged on <b>trade-offs, structure and communication</b>.</p>
<ul>
<li><b>Framework (about 45 min):</b> clarify requirements (functional and non-functional) → estimates (QPS, storage, bandwidth) → API → data model and storage → high-level design → deep dives → trade-offs, failure modes, next steps.</li>
<li><b>Estimates:</b> QPS = requests per day / 86,400; peak is 2-3x average; storage = records x size x retention x copies. Say assumptions aloud; round at the end.</li>
<li><b>Building blocks:</b> load balancer and stateless services, caching layers (cache-aside, TTL, invalidation, stampede: Day 13), database scaling (indexes, read replicas, sharding keys, consistent hashing), queues (Day 16), CAP and PACELC, rate limiting and idempotency (Days 13 and 16).</li>
<li><b>Design 1, URL shortener:</b> read-heavy; counter + base62 codes; Redis cache-aside; 302 when you need click analytics.</li>
<li><b>Design 2, WhatsApp-bot or notification system:</b> fast webhook ack, queue, workers, a rate-limited sender with retries, idempotency and a dead-letter queue, plus status callbacks. Azure service names wait for Day 20.</li>
<li><b>Design 3, order management:</b> reuse Day 15 and 16: separate databases, outbox, saga with compensations, idempotent consumers, a read model for "my orders".</li>
<li><b>Your story:</b> a STAR fill-in template and a clearly labelled sample. The sample is a shape, not your history: fill it with your own real project.</li>
</ul>
<p>Plan (about 1 hour 20 minutes): Short mode first, then Q&amp;A aloud, then the code sections, then the six puzzles, then write your own story from the template.</p>`,
    hi: `<p>Days 15 और 16 में architecture और microservices थे। आज तुम उन्हें <b>ज़ोर से बोलकर use</b> करते हो: system design round, जहाँ कोई एक सही जवाब नहीं होता और तुम्हें <b>trade-offs, structure और communication</b> पर judge किया जाता है।</p>
<ul>
<li><b>Framework (लगभग 45 मिनट):</b> requirements clarify (functional और non-functional) → estimates (QPS, storage, bandwidth) → API → data model और storage → high-level design → deep dives → trade-offs, failure modes, next steps।</li>
<li><b>Estimates:</b> QPS = रोज़ की requests / 86,400; peak = average का 2-3 गुना; storage = records x size x retention x copies। Assumptions ज़ोर से बोलो; round आख़िर में करो।</li>
<li><b>Building blocks:</b> load balancer और stateless services, caching layers (cache-aside, TTL, invalidation, stampede: Day 13), database scaling (indexes, read replicas, sharding keys, consistent hashing), queues (Day 16), CAP और PACELC, rate limiting और idempotency (Days 13 और 16)।</li>
<li><b>Design 1, URL shortener:</b> read-heavy; counter + base62 codes; Redis cache-aside; click analytics चाहिए तो 302।</li>
<li><b>Design 2, WhatsApp-bot या notification system:</b> तेज़ webhook ack, queue, workers, rate-limited sender जिसमें retries, idempotency और dead-letter queue, और status callbacks। Azure service names Day 20 में।</li>
<li><b>Design 3, order management:</b> Day 15 और 16 reuse करो: अलग databases, outbox, compensations वाला saga, idempotent consumers, "my orders" के लिए read model।</li>
<li><b>तुम्हारी story:</b> STAR का fill-in template और एक साफ़ labelled sample। Sample एक shape है, तुम्हारी history नहीं: उसे अपने असली project से भरो।</li>
</ul>
<p>Plan (लगभग 1 घंटा 20 मिनट): पहले Short mode, फिर Q&amp;A ज़ोर से, फिर code sections, फिर छह puzzles, फिर template से अपनी story लिखो।</p>`,
    hg: `<p>Days 15 aur 16 mein architecture aur microservices the. Aaj tum unhe <b>zor se bolkar use</b> karte ho: system design round, jahan koi ek sahi jawab nahi hota aur tumhe <b>trade-offs, structure aur communication</b> par judge kiya jaata hai.</p>
<ul>
<li><b>Framework (lagbhag 45 minute):</b> requirements clarify (functional aur non-functional) → estimates (QPS, storage, bandwidth) → API → data model aur storage → high-level design → deep dives → trade-offs, failure modes, next steps.</li>
<li><b>Estimates:</b> QPS = roz ki requests / 86,400; peak = average ka 2-3 guna; storage = records x size x retention x copies. Assumptions zor se bolo; round aakhir mein karo.</li>
<li><b>Building blocks:</b> load balancer aur stateless services, caching layers (cache-aside, TTL, invalidation, stampede: Day 13), database scaling (indexes, read replicas, sharding keys, consistent hashing), queues (Day 16), CAP aur PACELC, rate limiting aur idempotency (Days 13 aur 16).</li>
<li><b>Design 1, URL shortener:</b> read-heavy; counter + base62 codes; Redis cache-aside; click analytics chahiye to 302.</li>
<li><b>Design 2, WhatsApp-bot ya notification system:</b> tez webhook ack, queue, workers, rate-limited sender jisme retries, idempotency aur dead-letter queue, aur status callbacks. Azure service names Day 20 mein.</li>
<li><b>Design 3, order management:</b> Day 15 aur 16 reuse karo: alag databases, outbox, compensations wala saga, idempotent consumers, "my orders" ke liye read model.</li>
<li><b>Tumhari story:</b> STAR ka fill-in template aur ek saaf labelled sample. Sample ek shape hai, tumhari history nahi: use apne asli project se bharo.</li>
</ul>
<p>Plan (lagbhag 1 ghanta 20 minute): pehle Short mode, phir Q&amp;A zor se, phir code sections, phir chhah puzzles, phir template se apni story likho.</p>`
  },
  sections: [
    {
      id: "framework-overview",
      depth: "short",
      title: {
        en: "The repeatable framework and how a Tech Lead is judged",
        hi: "Repeatable framework और Tech Lead को कैसे judge किया जाता है",
        hg: "Repeatable framework aur Tech Lead ko kaise judge kiya jaata hai"
      },
      body: {
        en: `<p><b>Picture — planning a family road trip:</b> you do not start with the car colour. First you ask "how many people, how many days, what budget?", then you estimate fuel and hotels, then pick the route, and only then worry about "what if it rains?". System design is the same: <b>questions first, boxes later</b>.</p>
<p><b>The framework (about 45 minutes):</b></p>
<ul>
<li><b>1. Clarify (5 min):</b> functional (what must it do) and non-functional (scale, latency, availability, consistency, security). Write the agreed scope down.</li>
<li><b>2. Estimate (5 min):</b> QPS, storage, bandwidth; show the arithmetic and the assumptions.</li>
<li><b>3. API (5 min):</b> the main endpoints, request/response, idempotency, paging.</li>
<li><b>4. Data model and storage choice (5 min):</b> entities, access patterns, SQL vs key-value and why.</li>
<li><b>5. High-level design (10 min):</b> a simple diagram that works end to end for the normal case.</li>
<li><b>6. Deep dives (10 min):</b> the 2-3 hard parts: bottleneck, caching, partitioning, queues.</li>
<li><b>7. Trade-offs, failure modes, next steps (5 min):</b> what breaks, how you detect it, what you would build next.</li>
</ul>
<p><b>How a Tech Lead is judged:</b> there is no single right answer. Interviewers look for: you <b>drive</b> the conversation, you state <b>trade-offs with reasons</b> ("I choose X because reads dominate; the cost is Y"), you start simple and scale up when the numbers ask for it, and you mention operations (monitoring, rollout, cost, team size). Think aloud; ask when you are unsure.</p>
<p>The steps are a checklist, not a script: if the interviewer wants to dive into caching, follow them and come back later.</p>`,
        hi: `<p><b>Picture — family road trip की planning:</b> तुम गाड़ी के रंग से शुरू नहीं करते। पहले पूछते हो "कितने लोग, कितने दिन, budget कितना?", फिर petrol और hotels का अंदाज़ा लगाते हो, फिर route चुनते हो, और तब जाकर "बारिश हुई तो?" सोचते हो। System design भी वैसा ही है: <b>पहले सवाल, बाद में boxes</b>।</p>
<p><b>Framework (लगभग 45 मिनट):</b></p>
<ul>
<li><b>1. Clarify (5 min):</b> functional (क्या करना है) और non-functional (scale, latency, availability, consistency, security)। तय हुआ scope लिख लो।</li>
<li><b>2. Estimate (5 min):</b> QPS, storage, bandwidth; हिसाब और assumptions दिखाओ।</li>
<li><b>3. API (5 min):</b> मुख्य endpoints, request/response, idempotency, paging।</li>
<li><b>4. Data model और storage choice (5 min):</b> entities, access patterns, SQL या key-value और क्यों।</li>
<li><b>5. High-level design (10 min):</b> एक simple diagram जो normal case में शुरू से आख़िर तक चले।</li>
<li><b>6. Deep dives (10 min):</b> 2-3 मुश्किल हिस्से: bottleneck, caching, partitioning, queues।</li>
<li><b>7. Trade-offs, failure modes, next steps (5 min):</b> क्या टूट सकता है, कैसे पता चलेगा, आगे क्या बनाओगे।</li>
</ul>
<p><b>Tech Lead को कैसे judge करते हैं:</b> कोई एक सही जवाब नहीं होता। Interviewer देखते हैं: तुम बातचीत को <b>drive</b> करते हो, <b>trade-offs वजह के साथ</b> बोलते हो ("मैं X चुनता हूँ क्योंकि reads ज़्यादा हैं; कीमत Y है"), simple से शुरू करके numbers माँगें तभी scale करते हो, और operations की बात करते हो (monitoring, rollout, cost, team size)। ज़ोर से सोचो; पक्का न हो तो पूछो।</p>
<p>Steps एक checklist हैं, script नहीं: interviewer caching में जाना चाहे तो उनके साथ जाओ और बाद में लौट आओ।</p>`,
        hg: `<p><b>Picture — family road trip ki planning:</b> tum gaadi ke rang se shuru nahi karte. Pehle poochte ho "kitne log, kitne din, budget kitna?", phir petrol aur hotels ka andaza lagate ho, phir route chunte ho, aur tab jaakar "baarish hui to?" sochte ho. System design bhi waisa hi hai: <b>pehle sawaal, baad mein boxes</b>.</p>
<p><b>Framework (lagbhag 45 minute):</b></p>
<ul>
<li><b>1. Clarify (5 min):</b> functional (kya karna hai) aur non-functional (scale, latency, availability, consistency, security). Tay hua scope likh lo.</li>
<li><b>2. Estimate (5 min):</b> QPS, storage, bandwidth; hisaab aur assumptions dikhao.</li>
<li><b>3. API (5 min):</b> mukhya endpoints, request/response, idempotency, paging.</li>
<li><b>4. Data model aur storage choice (5 min):</b> entities, access patterns, SQL ya key-value aur kyon.</li>
<li><b>5. High-level design (10 min):</b> ek simple diagram jo normal case mein shuru se aakhir tak chale.</li>
<li><b>6. Deep dives (10 min):</b> 2-3 mushkil hisse: bottleneck, caching, partitioning, queues.</li>
<li><b>7. Trade-offs, failure modes, next steps (5 min):</b> kya toot sakta hai, kaise pata chalega, aage kya banaoge.</li>
</ul>
<p><b>Tech Lead ko kaise judge karte hain:</b> koi ek sahi jawab nahi hota. Interviewer dekhte hain: tum baatcheet ko <b>drive</b> karte ho, <b>trade-offs wajah ke saath</b> bolte ho ("main X chunta hoon kyunki reads zyada hain; keemat Y hai"), simple se shuru karke numbers maangen tabhi scale karte ho, aur operations ki baat karte ho (monitoring, rollout, cost, team size). Zor se socho; pakka na ho to poochho.</p>
<p>Steps ek checklist hain, script nahi: interviewer caching mein jaana chahe to unke saath jao aur baad mein laut aao.</p>`
      }
    },
    {
      id: "estimates-overview",
      depth: "short",
      title: {
        en: "Back-of-the-envelope estimates — the numbers worth remembering",
        hi: "Back-of-the-envelope estimates — याद रखने लायक़ numbers",
        hg: "Back-of-the-envelope estimates — yaad rakhne laayak numbers"
      },
      body: {
        en: `<p><b>Picture — a kirana owner before Diwali:</b> he does not count every sweet box; he thinks "last year about 200 customers a day, this year a bit more, each takes 2 boxes, so stock about 500". Rough, quick, <b>good enough to decide</b>. An estimate in an interview decides the design (one database or many? cache or not?), it is not an exam on exact digits.</p>
<ul>
<li><b>Time:</b> a day has 86,400 seconds (round to 100,000 when you are in a hurry); a month has about 2.6 million. So <b>1 million requests per day is about 12 per second</b>.</li>
<li><b>QPS</b> = requests per day / 86,400. <b>Peak</b> = average x 2 to 3 (state which one you chose).</li>
<li><b>Storage</b> = records x bytes per record x retention x copies (replication usually keeps 2-3 copies). Units: 1 KB = thousand bytes, 1 MB = million, 1 GB = billion, 1 TB = trillion.</li>
<li><b>Bandwidth</b> = QPS x payload size. <b>Read:write ratio</b> tells you whether to optimise reads (caches, replicas) or writes (queues, partitioning).</li>
<li><b>Cache size:</b> a common rule of thumb is that about 20% of the data serves 80% of the traffic, so caching the hot 20% of one day's reads is often enough.</li>
<li><b>Latency orders of magnitude:</b> memory is nanoseconds to microseconds, a network hop inside one data centre is about half a millisecond, a disk or database read is milliseconds, a cross-continent round trip is 100+ ms. Use them only to compare, not to quote.</li>
</ul>
<p><b>How to speak it:</b> "Assume 10 million users, 20% active daily, 5 messages each: 10M x 0.2 x 5 = 10 million per day, about 115 per second average, say 350 at peak." Round, say assumptions aloud, and ask "does that match your expectation?". See the code section for the arithmetic in C#.</p>`,
        hi: `<p><b>Picture — Diwali से पहले kirana वाले भैया:</b> वे हर मिठाई का डिब्बा नहीं गिनते; सोचते हैं "पिछले साल रोज़ लगभग 200 customers थे, इस साल थोड़े ज़्यादा, हर कोई 2 डिब्बे लेता है, तो stock लगभग 500"। Rough, तेज़, <b>फ़ैसले के लिए काफ़ी</b>। Interview में estimate design तय करता है (एक database या कई? cache या नहीं?), यह exact digits का exam नहीं है।</p>
<ul>
<li><b>Time:</b> एक दिन में 86,400 seconds होते हैं (जल्दी में 100,000 कर लो); एक महीने में लगभग 2.6 million। यानी <b>रोज़ 1 million requests लगभग 12 प्रति second हैं</b>।</li>
<li><b>QPS</b> = रोज़ की requests / 86,400। <b>Peak</b> = average x 2 से 3 (बताओ कौन-सा चुना)।</li>
<li><b>Storage</b> = records x हर record के bytes x retention x copies (replication में आम तौर पर 2-3 copies रहती हैं)। Units: 1 KB = हज़ार bytes, 1 MB = million, 1 GB = billion, 1 TB = trillion।</li>
<li><b>Bandwidth</b> = QPS x payload size। <b>Read:write ratio</b> बताता है कि reads optimise करने हैं (caches, replicas) या writes (queues, partitioning)।</li>
<li><b>Cache size:</b> एक आम rule of thumb है कि लगभग 20% data 80% traffic देता है, इसलिए एक दिन की reads के hot 20% को cache करना अक्सर काफ़ी होता है।</li>
<li><b>Latency के orders of magnitude:</b> memory nanoseconds से microseconds, एक data centre के अंदर network hop लगभग आधा millisecond, disk या database read milliseconds, continents के बीच round trip 100+ ms। इन्हें सिर्फ़ तुलना के लिए use करो, quote करने के लिए नहीं।</li>
</ul>
<p><b>बोलने का तरीक़ा:</b> "मान लो 10 million users, रोज़ 20% active, हर एक के 5 messages: 10M x 0.2 x 5 = रोज़ 10 million, average लगभग 115 प्रति second, peak पर मान लो 350।" Round करो, assumptions ज़ोर से बोलो, और पूछो "क्या यह आपकी expectation से मेल खाता है?"। C# में हिसाब code section में देखो।</p>`,
        hg: `<p><b>Picture — Diwali se pehle kirana wale bhaiya:</b> woh har mithai ka dabba nahi ginte; sochte hain "pichhle saal roz lagbhag 200 customers the, is saal thode zyada, har koi 2 dabbe leta hai, to stock lagbhag 500". Rough, tez, <b>faisle ke liye kaafi</b>. Interview mein estimate design tay karta hai (ek database ya kai? cache ya nahi?), yeh exact digits ka exam nahi hai.</p>
<ul>
<li><b>Time:</b> ek din mein 86,400 seconds hote hain (jaldi mein 100,000 kar lo); ek mahine mein lagbhag 2.6 million. Yaani <b>roz 1 million requests lagbhag 12 per second hain</b>.</li>
<li><b>QPS</b> = roz ki requests / 86,400. <b>Peak</b> = average x 2 se 3 (batao kaun-sa chuna).</li>
<li><b>Storage</b> = records x har record ke bytes x retention x copies (replication mein aam taur par 2-3 copies rehti hain). Units: 1 KB = hazaar bytes, 1 MB = million, 1 GB = billion, 1 TB = trillion.</li>
<li><b>Bandwidth</b> = QPS x payload size. <b>Read:write ratio</b> batata hai ki reads optimise karne hain (caches, replicas) ya writes (queues, partitioning).</li>
<li><b>Cache size:</b> ek aam rule of thumb hai ki lagbhag 20% data 80% traffic deta hai, isliye ek din ki reads ke hot 20% ko cache karna aksar kaafi hota hai.</li>
<li><b>Latency ke orders of magnitude:</b> memory nanoseconds se microseconds, ek data centre ke andar network hop lagbhag aadha millisecond, disk ya database read milliseconds, continents ke beech round trip 100+ ms. Inhe sirf tulna ke liye use karo, quote karne ke liye nahi.</li>
</ul>
<p><b>Bolne ka tareeka:</b> "Maan lo 10 million users, roz 20% active, har ek ke 5 messages: 10M x 0.2 x 5 = roz 10 million, average lagbhag 115 per second, peak par maan lo 350." Round karo, assumptions zor se bolo, aur poochho "kya yeh aapki expectation se mel khaata hai?". C# mein hisaab code section mein dekho.</p>`
      }
    },
    {
      id: "building-blocks-overview",
      depth: "short",
      title: {
        en: "Building blocks — load balancer, scaling, caching, database scaling, queues, CAP",
        hi: "Building blocks — load balancer, scaling, caching, database scaling, queues और CAP",
        hg: "Building blocks — load balancer, scaling, caching, database scaling, queues, CAP"
      },
      body: {
        en: `<p><b>Picture — a railway station:</b> many ticket counters (servers) behind one queue manager (load balancer); a notice board (cache) so people do not queue to ask the same question; the main record room (database) that only staff enter; a parcel office with a token system (queue) so heavy luggage does not block the counter. Every design is these blocks in a different order.</p>
<ul>
<li><b>Load balancer:</b> spreads requests over identical servers and removes unhealthy ones (health checks). It works best when servers are <b>stateless</b>: no user data kept in server memory; sessions or state live in a shared store or in the token (JWT, Day 13).</li>
<li><b>Vertical vs horizontal scaling:</b> vertical = a bigger machine (simple, has a ceiling and one failure point); horizontal = more machines (needs stateless services, gives resilience). Start vertical-simple, go horizontal when numbers demand.</li>
<li><b>Caching layers:</b> browser, CDN (static files and cacheable responses, close to the user), app-level cache, Redis (shared cache), then the database. <b>Cache-aside</b> + TTL + delete-on-write; the hard parts are <b>invalidation</b> and the <b>stampede</b> (Day 13).</li>
<li><b>Database scaling, in order:</b> indexes and query fixes first (SQL days 18-19), then <b>read replicas</b> (reads scale, but replicas lag, so a read right after a write can be stale), then <b>partitioning / sharding</b> by a chosen key (writes scale; cross-shard queries and joins get hard). <b>Consistent hashing</b> keeps rebalancing small when nodes are added.</li>
<li><b>Queues for async work:</b> accept fast, process later; smooths spikes, allows retries and a dead-letter queue (Day 16). Price: eventual consistency and duplicates, so make consumers idempotent (Days 13 and 16).</li>
<li><b>CAP:</b> when a network partition happens, a distributed store must choose between <b>consistency</b> (refuse or delay some requests) and <b>availability</b> (answer, maybe with older data). <b>PACELC</b> adds: <b>else</b> (no partition) you still trade <b>latency</b> against consistency. It is a way to explain choices, not a product label.</li>
<li><b>Rate limiting</b> protects you and your providers (token bucket, Day 13). <b>Idempotency keys</b> make retries safe (Day 13).</li>
</ul>
<p>In an interview, add a block only when a number or a requirement asks for it, and say what it costs.</p>`,
        hi: `<p><b>Picture — railway station:</b> बहुत सारी ticket खिड़कियाँ (servers) एक queue manager (load balancer) के पीछे; एक notice board (cache) ताकि लोग एक ही सवाल पूछने के लिए लाइन न लगाएँ; मुख्य record room (database) जिसमें सिर्फ़ staff जाता है; token system वाला parcel office (queue) ताकि भारी सामान खिड़की न रोके। हर design इन्हीं blocks का अलग order है।</p>
<ul>
<li><b>Load balancer:</b> requests को एक जैसे servers में बाँटता है और unhealthy servers हटा देता है (health checks)। यह तब सबसे अच्छा चलता है जब servers <b>stateless</b> हों: server की memory में user data नहीं; session या state shared store में या token (JWT, Day 13) में रहे।</li>
<li><b>Vertical बनाम horizontal scaling:</b> vertical = बड़ी machine (सरल, पर एक सीमा और एक failure point); horizontal = ज़्यादा machines (stateless services चाहिए, resilience मिलती है)। Simple vertical से शुरू करो, numbers माँगें तब horizontal जाओ।</li>
<li><b>Caching layers:</b> browser, CDN (static files और cacheable responses, user के पास), app-level cache, Redis (shared cache), फिर database। <b>Cache-aside</b> + TTL + write पर delete; मुश्किल हिस्से <b>invalidation</b> और <b>stampede</b> हैं (Day 13)।</li>
<li><b>Database scaling, क्रम से:</b> पहले indexes और query fixes (SQL days 18-19), फिर <b>read replicas</b> (reads scale होती हैं, पर replicas पीछे रहती हैं, इसलिए write के तुरंत बाद की read stale हो सकती है), फिर चुनी हुई key से <b>partitioning / sharding</b> (writes scale होती हैं; cross-shard queries और joins मुश्किल)। <b>Consistent hashing</b> node जोड़ने पर rebalancing छोटा रखती है।</li>
<li><b>Async काम के लिए queues:</b> जल्दी accept करो, बाद में process करो; spikes smooth, retries और dead-letter queue (Day 16)। कीमत: eventual consistency और duplicates, इसलिए consumers को idempotent बनाओ (Days 13 और 16)।</li>
<li><b>CAP:</b> network partition हो तो distributed store को <b>consistency</b> (कुछ requests मना या देर से) और <b>availability</b> (जवाब दो, शायद पुराने data के साथ) में से चुनना पड़ता है। <b>PACELC</b> जोड़ता है: partition न हो तब भी <b>latency</b> और consistency के बीच trade करना पड़ता है। यह choices समझाने का तरीक़ा है, product का label नहीं।</li>
<li><b>Rate limiting</b> तुम्हें और तुम्हारे providers को बचाती है (token bucket, Day 13)। <b>Idempotency keys</b> retries को safe बनाती हैं (Day 13)।</li>
</ul>
<p>Interview में block तभी जोड़ो जब कोई number या requirement माँगे, और बताओ कि उसकी कीमत क्या है।</p>`,
        hg: `<p><b>Picture — railway station:</b> bahut saari ticket khidkiyan (servers) ek queue manager (load balancer) ke peeche; ek notice board (cache) taaki log ek hi sawaal poochne ke liye line na lagayein; mukhya record room (database) jisme sirf staff jaata hai; token system wala parcel office (queue) taaki bhaari saaman khidki na roke. Har design inhi blocks ka alag order hai.</p>
<ul>
<li><b>Load balancer:</b> requests ko ek jaise servers mein baantta hai aur unhealthy servers hata deta hai (health checks). Yeh tab sabse achha chalta hai jab servers <b>stateless</b> hon: server ki memory mein user data nahi; session ya state shared store mein ya token (JWT, Day 13) mein rahe.</li>
<li><b>Vertical vs horizontal scaling:</b> vertical = badi machine (saral, par ek seema aur ek failure point); horizontal = zyada machines (stateless services chahiye, resilience milti hai). Simple vertical se shuru karo, numbers maangein tab horizontal jao.</li>
<li><b>Caching layers:</b> browser, CDN (static files aur cacheable responses, user ke paas), app-level cache, Redis (shared cache), phir database. <b>Cache-aside</b> + TTL + write par delete; mushkil hisse <b>invalidation</b> aur <b>stampede</b> hain (Day 13).</li>
<li><b>Database scaling, kram se:</b> pehle indexes aur query fixes (SQL days 18-19), phir <b>read replicas</b> (reads scale hoti hain, par replicas peeche rehti hain, isliye write ke turant baad ki read stale ho sakti hai), phir chuni hui key se <b>partitioning / sharding</b> (writes scale hoti hain; cross-shard queries aur joins mushkil). <b>Consistent hashing</b> node jodne par rebalancing chhota rakhti hai.</li>
<li><b>Async kaam ke liye queues:</b> jaldi accept karo, baad mein process karo; spikes smooth, retries aur dead-letter queue (Day 16). Keemat: eventual consistency aur duplicates, isliye consumers ko idempotent banao (Days 13 aur 16).</li>
<li><b>CAP:</b> network partition ho to distributed store ko <b>consistency</b> (kuch requests mana ya der se) aur <b>availability</b> (jawab do, shayad purane data ke saath) mein se chunna padta hai. <b>PACELC</b> jodta hai: partition na ho tab bhi <b>latency</b> aur consistency ke beech trade karna padta hai. Yeh choices samjhane ka tareeka hai, product ka label nahi.</li>
<li><b>Rate limiting</b> tumhe aur tumhare providers ko bachati hai (token bucket, Day 13). <b>Idempotency keys</b> retries ko safe banati hain (Day 13).</li>
</ul>
<p>Interview mein block tabhi jodo jab koi number ya requirement maange, aur batao ki uski keemat kya hai.</p>`
      }
    },
    {
      id: "url-shortener-design",
      depth: "short",
      title: {
        en: "Design 1 — URL shortener (read-heavy, base62, cache, 301 vs 302)",
        hi: "Design 1 — URL shortener (read-heavy, base62, cache, 301 बनाम 302)",
        hg: "Design 1 — URL shortener (read-heavy, base62, cache, 301 vs 302)"
      },
      body: {
        en: `<p><b>Picture — a hotel key tag:</b> a long address is written once on a registry page; the guest gets a short tag number. Anyone showing the tag is sent to the right room. The short code is the tag; the redirect is the lookup.</p>
<p><b>1. Requirements.</b> Functional: create a short URL for a long one (optional custom alias, optional expiry), redirect when opened. Non-functional: redirect must be fast and highly available; creates are far fewer than reads; links should not be guessable if they are private.</p>
<p><b>2. Estimates</b> (assumed 100M new URLs a month, 100:1 reads): about 38 writes/s, about 3,900 reads/s, peak about 7,700; 5 years is about 6 billion records, about 3 TB at 500 bytes, about 9 TB with 3 copies (the capacity puzzle shows the arithmetic). Reads dominate and the data is small, so <b>cache the hot links</b>.</p>
<p><b>3. API.</b> <code>POST /api/urls</code> with <code>{longUrl, alias?, expiresAt?}</code> returns <code>201</code> with the short URL (accept an idempotency key so a retry does not make two links). <code>GET /{code}</code> returns a redirect, or <code>404</code> (<code>410</code> if expired).</p>
<p><b>4. Data.</b> One table keyed by <code>Code</code>: <code>Code, LongUrl, CreatedAt, ExpiresAt, OwnerId</code>. Access is purely "get by key", so SQL works for a long time; a key-value store is the natural next step at very large scale.</p>
<p><b>5. High-level design.</b></p>
<pre>
Browser --> Load balancer --> Redirect/API servers (stateless)
                                |  1. GET code from Redis
                                |  2. miss: read DB, fill Redis (TTL)
                                v
                   Redis cache        Database (replicas for reads)
                                |
  click event --> Queue --> analytics worker (off the hot path)
</pre>
<p><b>6. Deep dives.</b> <b>Code generation:</b> take a counter id and base62-encode it (7 characters hold about 3.5 trillion); servers lease id blocks so there is no database call per create. Alternatives: hash of the URL truncated (collisions to handle) or random code with a unique-key check. <b>301 vs 302:</b> browsers cache a 301, so later clicks may skip you; a 302 reaches you every time. Use 302 when you need click counts (the 301/302 question has the details). <b>Cache:</b> cache-aside in Redis with TTL; hot links stay warm.</p>
<p><b>7. Trade-offs and failures.</b> Sequential ids are guessable (shuffle or use random codes for private links). If Redis is down, the database must carry the reads, so keep replicas and a rate limit. Abuse and malware links need a check on create. Custom aliases need a uniqueness check and reserved words.</p>`,
        hi: `<p><b>Picture — hotel की key tag:</b> लंबा पता registry के पन्ने पर एक बार लिखा जाता है; guest को छोटा tag number मिलता है। Tag दिखाने वाले को सही कमरे तक भेज दिया जाता है। Short code tag है; redirect lookup है।</p>
<p><b>1. Requirements.</b> Functional: लंबे URL का short URL बनाओ (optional custom alias, optional expiry), खोलने पर redirect करो। Non-functional: redirect तेज़ और highly available हो; creates, reads से बहुत कम हैं; private links guess न हो सकें।</p>
<p><b>2. Estimates</b> (मान लिया महीने में 100M नए URLs, 100:1 reads): लगभग 38 writes/s, लगभग 3,900 reads/s, peak लगभग 7,700; 5 साल में लगभग 6 billion records, 500 bytes पर लगभग 3 TB, 3 copies के साथ लगभग 9 TB (capacity puzzle में हिसाब दिखता है)। Reads हावी हैं और data छोटा है, इसलिए <b>hot links को cache करो</b>।</p>
<p><b>3. API.</b> <code>POST /api/urls</code> में <code>{longUrl, alias?, expiresAt?}</code>, जवाब <code>201</code> और short URL (idempotency key लो ताकि retry से दो links न बनें)। <code>GET /{code}</code> redirect देता है, या <code>404</code> (expire हो तो <code>410</code>)।</p>
<p><b>4. Data.</b> <code>Code</code> key वाली एक table: <code>Code, LongUrl, CreatedAt, ExpiresAt, OwnerId</code>। Access सिर्फ़ "key से get" है, इसलिए SQL लंबे समय तक चलता है; बहुत बड़े scale पर key-value store अगला natural क़दम है।</p>
<p><b>5. High-level design.</b></p>
<pre>
Browser --> Load balancer --> Redirect/API servers (stateless)
                                |  1. GET code from Redis
                                |  2. miss: read DB, fill Redis (TTL)
                                v
                   Redis cache        Database (replicas for reads)
                                |
  click event --> Queue --> analytics worker (off the hot path)
</pre>
<p><b>6. Deep dives.</b> <b>Code generation:</b> counter id लो और base62 में encode करो (7 characters में लगभग 3.5 trillion आते हैं); servers ids के blocks lease करते हैं ताकि हर create पर database call न हो। options: URL का hash काटकर (collisions संभालने पड़ेंगे) या random code + unique-key check। <b>301 बनाम 302:</b> 301 को browsers cache करते हैं, इसलिए बाद के clicks तुम्हें छोड़ सकते हैं; 302 हर बार तुम तक आता है। Click counts चाहिए तो 302 रखो (301/302 वाले सवाल में details हैं)। <b>Cache:</b> Redis में cache-aside + TTL; hot links गरम रहते हैं।</p>
<p><b>7. Trade-offs और failures.</b> Sequential ids guess हो सकती हैं (private links के लिए shuffle या random codes)। Redis down हो तो reads database को उठानी पड़ेंगी, इसलिए replicas और rate limit रखो। Abuse और malware links के लिए create पर check चाहिए। Custom aliases के लिए uniqueness check और reserved words चाहिए।</p>`,
        hg: `<p><b>Picture — hotel ki key tag:</b> lamba pata registry ke panne par ek baar likha jaata hai; guest ko chhota tag number milta hai. Tag dikhane wale ko sahi kamre tak bhej diya jaata hai. Short code tag hai; redirect lookup hai.</p>
<p><b>1. Requirements.</b> Functional: lambe URL ka short URL banao (optional custom alias, optional expiry), kholne par redirect karo. Non-functional: redirect tez aur highly available ho; creates, reads se bahut kam hain; private links guess na ho sakein.</p>
<p><b>2. Estimates</b> (maan liya mahine mein 100M naye URLs, 100:1 reads): lagbhag 38 writes/s, lagbhag 3,900 reads/s, peak lagbhag 7,700; 5 saal mein lagbhag 6 billion records, 500 bytes par lagbhag 3 TB, 3 copies ke saath lagbhag 9 TB (capacity puzzle mein hisaab dikhta hai). Reads haavi hain aur data chhota hai, isliye <b>hot links ko cache karo</b>.</p>
<p><b>3. API.</b> <code>POST /api/urls</code> mein <code>{longUrl, alias?, expiresAt?}</code>, jawab <code>201</code> aur short URL (idempotency key lo taaki retry se do links na banein). <code>GET /{code}</code> redirect deta hai, ya <code>404</code> (expire ho to <code>410</code>).</p>
<p><b>4. Data.</b> <code>Code</code> key wali ek table: <code>Code, LongUrl, CreatedAt, ExpiresAt, OwnerId</code>. Access sirf "key se get" hai, isliye SQL lambe samay tak chalta hai; bahut bade scale par key-value store agla natural kadam hai.</p>
<p><b>5. High-level design.</b></p>
<pre>
Browser --> Load balancer --> Redirect/API servers (stateless)
                                |  1. GET code from Redis
                                |  2. miss: read DB, fill Redis (TTL)
                                v
                   Redis cache        Database (replicas for reads)
                                |
  click event --> Queue --> analytics worker (off the hot path)
</pre>
<p><b>6. Deep dives.</b> <b>Code generation:</b> counter id lo aur base62 mein encode karo (7 characters mein lagbhag 3.5 trillion aate hain); servers ids ke blocks lease karte hain taaki har create par database call na ho. Options: URL ka hash kaatkar (collisions sambhalne padenge) ya random code + unique-key check. <b>301 vs 302:</b> browsers 301 ko cache karte hain, isliye baad ke clicks tumhe chhod sakte hain; 302 har baar tum tak aata hai. Click counts chahiye to 302 rakho (301/302 wale sawaal mein details hain). <b>Cache:</b> Redis mein cache-aside + TTL; hot links garam rehte hain.</p>
<p><b>7. Trade-offs aur failures.</b> Sequential ids guess ho sakti hain (private links ke liye shuffle ya random codes). Redis down ho to reads database ko uthani padengi, isliye replicas aur rate limit rakho. Abuse aur malware links ke liye create par check chahiye. Custom aliases ke liye uniqueness check aur reserved words chahiye.</p>`
      }
    },
    {
      id: "notification-design",
      depth: "short",
      title: {
        en: "Design 2 — Notification / WhatsApp-bot message system",
        hi: "Design 2 — Notification / WhatsApp-bot की message system",
        hg: "Design 2 — Notification / WhatsApp-bot message system"
      },
      body: {
        en: `<p><b>Picture — a post office with a sorting room:</b> letters arrive at the counter (webhook), the clerk stamps and drops them in a tray quickly (queue), sorters work through the tray (workers), and outgoing letters go through the courier who only accepts so many parcels per hour (provider rate limit). A delivery receipt comes back later (status callback).</p>
<p><b>1. Requirements.</b> Functional: receive customer messages from a messaging provider (webhook), run the bot logic, send replies and planned notifications (templates), track delivery status (sent, delivered, read, failed). Non-functional: do not lose a message, acknowledge the webhook fast, respect per-provider rate limits, no duplicate sends, absorb campaign spikes, keep order within one conversation where it matters, and honour opt-outs.</p>
<p><b>2. Estimates</b> (assumed 5 million messages a day in and out): about 58 per second on average, about 175 at peak (3x; a campaign can burst far higher and the queue absorbs it); small payloads (about 1 KB), so storage is about 5 GB a day. A <b>campaign</b> of 1 million sends can arrive in minutes, so the provider limit, not our servers, is the bottleneck.</p>
<p><b>3. API.</b> Inbound: <code>POST /webhooks/messages</code> (verify the provider's signature, return <code>200</code> quickly). Outbound for other systems: <code>POST /api/notifications</code> with an <code>Idempotency-Key</code> header, returns <code>202 Accepted</code> and a notification id; <code>GET /api/notifications/{id}</code> shows status.</p>
<p><b>4. Data.</b> <code>Messages</code> (id, conversation, direction, template, status, provider message id, attempts), <code>Conversations</code>, <code>OptOuts</code>, <code>Templates</code>. A unique index on the provider's message id removes duplicate webhooks.</p>
<p><b>5. High-level design</b> (component names are generic; the Azure services come on Day 20):</p>
<pre>
Provider --webhook--> Ingress API --> [inbound queue] --> Bot workers
                      (verify, dedupe,                       |  business logic,
                       200 fast)                             |  pick template
                                                             v
Status callback --> Ingress API --> Messages DB     [outbound queue per provider]
                                                             |
                                          Sender workers (rate limiter, retry)
                                                             v
                                                      Provider API
         failures after N tries --> dead-letter queue --> alert + manual replay
</pre>
<p><b>6. Deep dives.</b> <b>Webhook ingress:</b> do the minimum (verify, dedupe, enqueue, return 200); the provider retries on errors, so duplicates are normal. <b>Idempotency:</b> dedupe on the provider message id for inbound and on our own message id for outbound; record "sent" only after the provider accepted it. <b>Retries:</b> retry timeouts, 429 and 5xx with exponential backoff and jitter; do not retry validation errors (other 4xx); after N attempts go to the dead-letter queue. <b>Rate limits:</b> one token bucket per provider account (shared store when workers scale out), so a campaign waits in the queue instead of being rejected. <b>Status callbacks</b> may arrive late or out of order: only move a status forward (sent, delivered, read) and ignore older ones. <b>Templates:</b> business-initiated messages usually must use pre-approved templates (check the provider's current rules).</p>
<p><b>7. Trade-offs and failures.</b> At-least-once plus idempotency beats chasing exactly-once. Provider down: messages wait in the queue and the circuit breaker stops hammering it (Day 16). Poison message: dead-letter it. Monitor queue depth, age of the oldest message, failure rate by provider. Next: priority queues (OTP before marketing), multi-provider failover.</p>`,
        hi: `<p><b>Picture — sorting room वाला post office:</b> letters counter पर आते हैं (webhook), clerk जल्दी से stamp लगाकर tray में डाल देता है (queue), sorters tray से काम निकालते हैं (workers), और बाहर जाने वाले letters courier से जाते हैं जो घंटे में सिर्फ़ इतने parcels लेता है (provider rate limit)। Delivery receipt बाद में लौटती है (status callback)।</p>
<p><b>1. Requirements.</b> Functional: messaging provider से customer messages लो (webhook), bot logic चलाओ, replies और planned notifications भेजो (templates), delivery status track करो (sent, delivered, read, failed)। Non-functional: कोई message न खोए, webhook को जल्दी ack करो, हर provider की rate limit मानो, duplicate send न हो, campaign के spikes सोख लो, जहाँ ज़रूरी हो एक conversation में order रखो, और opt-outs को respect करो।</p>
<p><b>2. Estimates</b> (मान लिया रोज़ 5 million messages आना-जाना): average लगभग 58 प्रति second, peak (3 गुना) पर लगभग 175 (campaign इससे कहीं ऊँचा burst दे सकता है और queue उसे सोख लेती है); payload छोटे (लगभग 1 KB), इसलिए storage लगभग 5 GB रोज़। 1 million sends का <b>campaign</b> मिनटों में आ सकता है, इसलिए bottleneck हमारे servers नहीं, provider की limit है।</p>
<p><b>3. API.</b> Inbound: <code>POST /webhooks/messages</code> (provider की signature verify करो, जल्दी <code>200</code> लौटाओ)। दूसरे systems के लिए outbound: <code>POST /api/notifications</code> में <code>Idempotency-Key</code> header, जवाब <code>202 Accepted</code> और notification id; <code>GET /api/notifications/{id}</code> status दिखाता है।</p>
<p><b>4. Data.</b> <code>Messages</code> (id, conversation, direction, template, status, provider message id, attempts), <code>Conversations</code>, <code>OptOuts</code>, <code>Templates</code>। Provider के message id पर unique index duplicate webhooks हटा देता है।</p>
<p><b>5. High-level design</b> (components के नाम generic हैं; Azure services Day 20 में आएँगी):</p>
<pre>
Provider --webhook--> Ingress API --> [inbound queue] --> Bot workers
                      (verify, dedupe,                       |  business logic,
                       200 fast)                             |  pick template
                                                             v
Status callback --> Ingress API --> Messages DB     [outbound queue per provider]
                                                             |
                                          Sender workers (rate limiter, retry)
                                                             v
                                                      Provider API
         failures after N tries --> dead-letter queue --> alert + manual replay
</pre>
<p><b>6. Deep dives.</b> <b>Webhook ingress:</b> कम से कम काम करो (verify, dedupe, enqueue, 200 लौटाओ); errors पर provider retry करता है, इसलिए duplicates आम हैं। <b>Idempotency:</b> inbound में provider message id पर और outbound में हमारे अपने message id पर dedupe करो; "sent" तभी लिखो जब provider ने accept कर लिया हो। <b>Retries:</b> timeouts, 429 और 5xx को exponential backoff + jitter से retry करो; validation errors (बाकी 4xx) retry मत करो; N attempts के बाद dead-letter queue। <b>Rate limits:</b> हर provider account के लिए एक token bucket (workers बढ़ें तो shared store में), ताकि campaign reject होने की जगह queue में इंतज़ार करे। <b>Status callbacks</b> देर से या उल्टे order में आ सकते हैं: status सिर्फ़ आगे बढ़ाओ (sent, delivered, read) और पुराने ignore करो। <b>Templates:</b> business की तरफ़ से शुरू होने वाले messages को आम तौर पर pre-approved templates चाहिए (provider के मौजूदा rules check करो)।</p>
<p><b>7. Trade-offs और failures.</b> At-least-once + idempotency, exactly-once के पीछे भागने से बेहतर है। Provider down: messages queue में इंतज़ार करते हैं और circuit breaker उसे बार-बार मारने से रोकता है (Day 16)। Poison message: dead-letter में डालो। Queue depth, सबसे पुराने message की उम्र, provider के हिसाब से failure rate monitor करो। आगे: priority queues (OTP marketing से पहले), multi-provider failover।</p>`,
        hg: `<p><b>Picture — sorting room wala post office:</b> letters counter par aate hain (webhook), clerk jaldi se stamp lagakar tray mein daal deta hai (queue), sorters tray se kaam nikaalte hain (workers), aur bahar jaane wale letters courier se jaate hain jo ghante mein sirf itne parcels leta hai (provider rate limit). Delivery receipt baad mein lautti hai (status callback).</p>
<p><b>1. Requirements.</b> Functional: messaging provider se customer messages lo (webhook), bot logic chalao, replies aur planned notifications bhejo (templates), delivery status track karo (sent, delivered, read, failed). Non-functional: koi message na khoye, webhook ko jaldi ack karo, har provider ki rate limit maano, duplicate send na ho, campaign ke spikes sokh lo, jahan zaroori ho ek conversation mein order rakho, aur opt-outs ko respect karo.</p>
<p><b>2. Estimates</b> (maan liya roz 5 million messages aana-jaana): average lagbhag 58 per second, peak (3 guna) par lagbhag 175 (campaign isse kahin ooncha burst de sakta hai aur queue use sokh leti hai); payload chhote (lagbhag 1 KB), isliye storage lagbhag 5 GB roz. 1 million sends ka <b>campaign</b> minuton mein aa sakta hai, isliye bottleneck hamare servers nahi, provider ki limit hai.</p>
<p><b>3. API.</b> Inbound: <code>POST /webhooks/messages</code> (provider ki signature verify karo, jaldi <code>200</code> lautao). Doosre systems ke liye outbound: <code>POST /api/notifications</code> mein <code>Idempotency-Key</code> header, jawab <code>202 Accepted</code> aur notification id; <code>GET /api/notifications/{id}</code> status dikhata hai.</p>
<p><b>4. Data.</b> <code>Messages</code> (id, conversation, direction, template, status, provider message id, attempts), <code>Conversations</code>, <code>OptOuts</code>, <code>Templates</code>. Provider ke message id par unique index duplicate webhooks hata deta hai.</p>
<p><b>5. High-level design</b> (components ke naam generic hain; Azure services Day 20 mein aayengi):</p>
<pre>
Provider --webhook--> Ingress API --> [inbound queue] --> Bot workers
                      (verify, dedupe,                       |  business logic,
                       200 fast)                             |  pick template
                                                             v
Status callback --> Ingress API --> Messages DB     [outbound queue per provider]
                                                             |
                                          Sender workers (rate limiter, retry)
                                                             v
                                                      Provider API
         failures after N tries --> dead-letter queue --> alert + manual replay
</pre>
<p><b>6. Deep dives.</b> <b>Webhook ingress:</b> kam se kam kaam karo (verify, dedupe, enqueue, 200 lautao); errors par provider retry karta hai, isliye duplicates aam hain. <b>Idempotency:</b> inbound mein provider message id par aur outbound mein hamare apne message id par dedupe karo; "sent" tabhi likho jab provider ne accept kar liya ho. <b>Retries:</b> timeouts, 429 aur 5xx ko exponential backoff + jitter se retry karo; validation errors (baaki 4xx) retry mat karo; N attempts ke baad dead-letter queue. <b>Rate limits:</b> har provider account ke liye ek token bucket (workers badhein to shared store mein), taaki campaign reject hone ki jagah queue mein intezaar kare. <b>Status callbacks</b> der se ya ulte order mein aa sakte hain: status sirf aage badhao (sent, delivered, read) aur purane ignore karo. <b>Templates:</b> business ki taraf se shuru hone wale messages ko aam taur par pre-approved templates chahiye (provider ke maujooda rules check karo).</p>
<p><b>7. Trade-offs aur failures.</b> At-least-once + idempotency, exactly-once ke peeche bhaagne se behtar hai. Provider down: messages queue mein intezaar karte hain aur circuit breaker use baar-baar maarne se rokta hai (Day 16). Poison message: dead-letter mein daalo. Queue depth, sabse purane message ki umr, provider ke hisaab se failure rate monitor karo. Aage: priority queues (OTP marketing se pehle), multi-provider failover.</p>`
      }
    },
    {
      id: "order-management-design",
      depth: "short",
      title: {
        en: "Design 3 — Order management on Azure (brief)",
        hi: "Design 3 — Azure पर Order management (short में)",
        hg: "Design 3 — Azure par Order management (short mein)"
      },
      body: {
        en: `<p><b>Picture — a restaurant with a kitchen, a cashier and a delivery boy:</b> the order slip travels between them; each does one job, keeps its own register, and a missing step (payment failed) means the kitchen's work must be cancelled. This design mostly <b>reuses Day 15 and Day 16</b>; it shows you can combine them.</p>
<p><b>Requirements.</b> Place an order, pay, reserve stock, ship, show status, cancel. Non-functional: never double-charge, never lose an order, handle sale-day spikes, a customer sees their own orders quickly, audit trail.</p>
<p><b>Estimates</b> (assumed 1 million orders a day): about 12 per second average, a flash sale may reach 50-100 times that for minutes; status checks are read-heavy. So protect checkout with a queue (load levelling) and serve "my orders" from a cache or read model.</p>
<p><b>API.</b> <code>POST /orders</code> with an idempotency key (Day 13) returns <code>202</code> or <code>201</code> plus the id; <code>GET /orders/{id}</code>, <code>GET /customers/{id}/orders</code>, <code>POST /orders/{id}/cancel</code>.</p>
<p><b>Data and boundaries (Day 15):</b> Orders, Inventory, Payments, Shipping, Notifications as separate bounded contexts, <b>one database per service</b>; the Order is an aggregate that guards its own rules. Shard key later: <b>customer id</b>, because the main query is "orders of this customer".</p>
<pre>
Client --> API gateway --> Orders service --> Orders DB (+ outbox table)
                                |
                  outbox relay --> OrderPlaced
                                |
          Inventory svc: reserve stock --> StockReserved
                                |
          Payments svc: charge --> PaymentSucceeded
                                |
          Orders svc: confirm --> Notifications svc (Design 2)

  Saga (sequential): place -> reserve -> pay -> confirm
  Failure: payment fails -> Inventory releases the stock -> Orders cancels
  Read side: events --> "my orders" read model (cache) --> GET /customers/{id}/orders
</pre>
<p><b>Deep dives.</b> <b>Consistency:</b> no distributed transaction; use a <b>saga</b> with compensations and an <b>outbox</b> for reliable events (Day 16). <b>Idempotency</b> on create and on every consumer. <b>Read model</b> for order lists (CQRS, Day 11). <b>Spikes:</b> accept the order, queue the heavy steps, tell the customer "processing". <b>On Azure</b> the blocks commonly map to Service Bus (queue/topic), Azure SQL, Azure Managed Redis (successor to Azure Cache for Redis), API Management, and App Service or AKS; exact choices, tiers and limits are Day 20 (check current limits).</p>
<p><b>Trade-offs.</b> Saga means eventual consistency: "order received" before "confirmed" is a product decision. Orchestration is easier to follow, choreography has less central coupling. A modular monolith first (Day 15) is a valid answer for a small team. Failure modes: payment fails after stock is reserved (release the stock), duplicate click (idempotency key), stuck saga (timeout and alert).</p>`,
        hi: `<p><b>Picture — kitchen, cashier और delivery boy वाला restaurant:</b> order slip उनके बीच घूमती है; हर कोई एक काम करता है, अपना register रखता है, और कोई step छूटे (payment fail) तो kitchen का काम cancel करना पड़ता है। यह design ज़्यादातर <b>Day 15 और Day 16 को reuse</b> करता है; यह दिखाता है कि तुम उन्हें जोड़ सकते हो।</p>
<p><b>Requirements.</b> Order लगाओ, pay करो, stock reserve करो, ship करो, status दिखाओ, cancel करो। Non-functional: कभी double-charge नहीं, कोई order नहीं खोए, sale वाले दिन के spikes संभलें, customer को अपने orders जल्दी दिखें, audit trail।</p>
<p><b>Estimates</b> (मान लिया रोज़ 1 million orders): average लगभग 12 प्रति second, flash sale में कुछ मिनटों के लिए इसका 50-100 गुना हो सकता है; status checks read-heavy हैं। इसलिए checkout को queue से बचाओ (load levelling) और "my orders" को cache या read model से दो।</p>
<p><b>API.</b> <code>POST /orders</code> में idempotency key (Day 13), जवाब <code>202</code> या <code>201</code> और id; <code>GET /orders/{id}</code>, <code>GET /customers/{id}/orders</code>, <code>POST /orders/{id}/cancel</code>।</p>
<p><b>Data और boundaries (Day 15):</b> Orders, Inventory, Payments, Shipping, Notifications अलग bounded contexts, <b>हर service का अपना database</b>; Order एक aggregate है जो अपने rules खुद संभालता है। आगे की shard key: <b>customer id</b>, क्योंकि मुख्य query "इस customer के orders" है।</p>
<pre>
Client --> API gateway --> Orders service --> Orders DB (+ outbox table)
                                |
                  outbox relay --> OrderPlaced
                                |
          Inventory svc: reserve stock --> StockReserved
                                |
          Payments svc: charge --> PaymentSucceeded
                                |
          Orders svc: confirm --> Notifications svc (Design 2)

  Saga (sequential): place -> reserve -> pay -> confirm
  Failure: payment fails -> Inventory releases the stock -> Orders cancels
  Read side: events --> "my orders" read model (cache) --> GET /customers/{id}/orders
</pre>
<p><b>Deep dives.</b> <b>Consistency:</b> distributed transaction नहीं; compensations के साथ <b>saga</b> और भरोसेमंद events के लिए <b>outbox</b> (Day 16)। Create पर और हर consumer में <b>idempotency</b>। Order lists के लिए <b>read model</b> (CQRS, Day 11)। <b>Spikes:</b> order accept करो, भारी steps queue में डालो, customer को "processing" बताओ। <b>Azure पर</b> blocks आम तौर पर Service Bus (queue/topic), Azure SQL, Azure Managed Redis (successor to Azure Cache for Redis), API Management, और App Service या AKS से map होते हैं; सही choices, tiers और limits Day 20 में हैं (मौजूदा limits check करो)।</p>
<p><b>Trade-offs.</b> Saga का मतलब eventual consistency: "order received" का "confirmed" से पहले दिखना एक product decision है। Orchestration समझने में आसान, choreography में central coupling कम। छोटी team के लिए पहले modular monolith (Day 15) भी सही जवाब है। Failure modes: stock reserve होने के बाद payment fail (stock वापस छोड़ो), double click (idempotency key), अटकी saga (timeout और alert)।</p>`,
        hg: `<p><b>Picture — kitchen, cashier aur delivery boy wala restaurant:</b> order slip unke beech ghoomti hai; har koi ek kaam karta hai, apna register rakhta hai, aur koi step chhoote (payment fail) to kitchen ka kaam cancel karna padta hai. Yeh design zyadatar <b>Day 15 aur Day 16 ko reuse</b> karta hai; yeh dikhata hai ki tum unhe jod sakte ho.</p>
<p><b>Requirements.</b> Order lagao, pay karo, stock reserve karo, ship karo, status dikhao, cancel karo. Non-functional: kabhi double-charge nahi, koi order na khoye, sale wale din ke spikes sambhalein, customer ko apne orders jaldi dikhein, audit trail.</p>
<p><b>Estimates</b> (maan liya roz 1 million orders): average lagbhag 12 per second, flash sale mein kuch minuton ke liye iska 50-100 guna ho sakta hai; status checks read-heavy hain. Isliye checkout ko queue se bachao (load levelling) aur "my orders" ko cache ya read model se do.</p>
<p><b>API.</b> <code>POST /orders</code> mein idempotency key (Day 13), jawab <code>202</code> ya <code>201</code> aur id; <code>GET /orders/{id}</code>, <code>GET /customers/{id}/orders</code>, <code>POST /orders/{id}/cancel</code>.</p>
<p><b>Data aur boundaries (Day 15):</b> Orders, Inventory, Payments, Shipping, Notifications alag bounded contexts, <b>har service ka apna database</b>; Order ek aggregate hai jo apne rules khud sambhalta hai. Aage ki shard key: <b>customer id</b>, kyunki mukhya query "is customer ke orders" hai.</p>
<pre>
Client --> API gateway --> Orders service --> Orders DB (+ outbox table)
                                |
                  outbox relay --> OrderPlaced
                                |
          Inventory svc: reserve stock --> StockReserved
                                |
          Payments svc: charge --> PaymentSucceeded
                                |
          Orders svc: confirm --> Notifications svc (Design 2)

  Saga (sequential): place -> reserve -> pay -> confirm
  Failure: payment fails -> Inventory releases the stock -> Orders cancels
  Read side: events --> "my orders" read model (cache) --> GET /customers/{id}/orders
</pre>
<p><b>Deep dives.</b> <b>Consistency:</b> distributed transaction nahi; compensations ke saath <b>saga</b> aur bharosemand events ke liye <b>outbox</b> (Day 16). Create par aur har consumer mein <b>idempotency</b>. Order lists ke liye <b>read model</b> (CQRS, Day 11). <b>Spikes:</b> order accept karo, bhaari steps queue mein daalo, customer ko "processing" batao. <b>Azure par</b> blocks aam taur par Service Bus (queue/topic), Azure SQL, Azure Managed Redis (successor to Azure Cache for Redis), API Management, aur App Service ya AKS se map hote hain; sahi choices, tiers aur limits Day 20 mein hain (maujooda limits check karo).</p>
<p><b>Trade-offs.</b> Saga ka matlab eventual consistency: "order received" ka "confirmed" se pehle dikhna ek product decision hai. Orchestration samajhne mein aasan, choreography mein central coupling kam. Chhoti team ke liye pehle modular monolith (Day 15) bhi sahi jawab hai. Failure modes: stock reserve hone ke baad payment fail (stock wapas chhodo), double click (idempotency key), atki saga (timeout aur alert).</p>`
      }
    },
    {
      id: "estimates-in-code",
      depth: "detailed",
      title: {
        en: "Estimates in code — assumptions as inputs, integer maths",
        hi: "Code में estimates — assumptions को inputs बनाओ, integer maths",
        hg: "Code mein estimates — assumptions ko inputs banao, integer maths"
      },
      body: {
        en: `<p><b>Picture — a shopkeeper's rate list:</b> the prices are written on a board, and the bill is calculated from the board. If the price changes, you change the board, not every bill. Treat estimate assumptions the same way: put them in one place and compute everything from them.</p>
<ul>
<li>Keep <b>assumptions</b> (users, active share, messages per user, peak factor, bytes per record, retention, copies) as named inputs. In the interview the same idea is a small table on the whiteboard.</li>
<li>Multiply first, divide last, and use <code>long</code>: 10 million x 1,000 bytes x 365 x 3 is about 10<sup>13</sup>, which overflows <code>int</code> (and the rounding puzzle shows what early rounding does).</li>
<li>Turn the numbers into a <b>decision</b>: a few hundred writes per second is comfortable for one relational database plus a queue, so no sharding yet; storage of about 11 TB over a year with 3 copies means plan retention or archiving.</li>
<li>Say units and whether they are decimal (GB = billion bytes). Round at the end.</li>
</ul>
<p><b>When to use:</b> practise with a tiny calculator like this so the arithmetic is automatic in the round. <b>When not:</b> do not bring a calculator-style precision into the interview; a rounded figure with a stated assumption beats exact digits, and a wrong assumption said aloud is easy to correct.</p>`,
        hi: `<p><b>Picture — दुकानदार की rate list:</b> दाम board पर लिखे हैं और bill board से बनता है। दाम बदले तो board बदलते हैं, हर bill नहीं। Estimate के assumptions को भी ऐसे ही रखो: एक जगह लिखो और सब कुछ उन्हीं से निकालो।</p>
<ul>
<li><b>Assumptions</b> (users, active share, हर user के messages, peak factor, हर record के bytes, retention, copies) को नाम वाले inputs रखो। Interview में यही idea whiteboard पर एक छोटी table है।</li>
<li>पहले गुणा, आख़िर में divide, और <code>long</code> use करो: 10 million x 1,000 bytes x 365 x 3 लगभग 10<sup>13</sup> है, जो <code>int</code> में overflow होता है (और rounding वाला puzzle दिखाता है कि जल्दी rounding क्या करती है)।</li>
<li>Numbers को <b>फ़ैसले</b> में बदलो: प्रति second कुछ सौ writes एक relational database + queue के लिए आराम से हैं, इसलिए अभी sharding नहीं; 3 copies के साथ साल भर में लगभग 11 TB का मतलब retention या archiving की planning।</li>
<li>Units बोलो और बताओ कि decimal हैं (GB = billion bytes)। Round आख़िर में करो।</li>
</ul>
<p><b>कब use करें:</b> ऐसे छोटे calculator से practice करो ताकि round में हिसाब अपने-आप हो जाए। <b>कब नहीं:</b> interview में calculator जैसी precision मत लाओ; assumption के साथ rounded figure, exact digits से बेहतर है, और ज़ोर से बोला गया ग़लत assumption आसानी से ठीक हो जाता है।</p>`,
        hg: `<p><b>Picture — dukandaar ki rate list:</b> daam board par likhe hain aur bill board se banta hai. Daam badle to board badalte hain, har bill nahi. Estimate ke assumptions ko bhi aise hi rakho: ek jagah likho aur sab kuch unhi se nikaalo.</p>
<ul>
<li><b>Assumptions</b> (users, active share, har user ke messages, peak factor, har record ke bytes, retention, copies) ko naam wale inputs rakho. Interview mein yahi idea whiteboard par ek chhoti table hai.</li>
<li>Pehle guna, aakhir mein divide, aur <code>long</code> use karo: 10 million x 1,000 bytes x 365 x 3 lagbhag 10<sup>13</sup> hai, jo <code>int</code> mein overflow hota hai (aur rounding wala puzzle dikhata hai ki jaldi rounding kya karti hai).</li>
<li>Numbers ko <b>faisle</b> mein badlo: per second kuch sau writes ek relational database + queue ke liye aaram se hain, isliye abhi sharding nahi; 3 copies ke saath saal bhar mein lagbhag 11 TB ka matlab retention ya archiving ki planning.</li>
<li>Units bolo aur batao ki decimal hain (GB = billion bytes). Round aakhir mein karo.</li>
</ul>
<p><b>Kab use karein:</b> aise chhote calculator se practice karo taaki round mein hisaab apne-aap ho jaaye. <b>Kab nahi:</b> interview mein calculator jaisi precision mat laao; assumption ke saath rounded figure, exact digits se behtar hai, aur zor se bola gaya galat assumption aasani se theek ho jaata hai.</p>`
      },
      code: [
        {
          caption: {
            en: "Assumptions as a record, estimates computed with long integers (output shown in the run)",
            hi: "Assumptions एक record में, estimates long integers से (output run में दिखता है)",
            hg: "Assumptions ek record mein, estimates long integers se (output run mein dikhta hai)"
          },
          check: "run",
          src: `// Envelope maths for a WhatsApp-style bot. Assumptions are inputs you say aloud, not facts.
var a = new Assumptions(Users: 10_000_000, DailyActivePercent: 20, MessagesPerActiveUser: 5,
                        PeakFactor: 3, BytesPerMessage: 1_000, RetentionDays: 365, Copies: 3);
var e = Estimate.From(a);

Console.WriteLine($"messages/day   : {e.PerDay}");
Console.WriteLine($"average per sec: {e.AveragePerSecond}");
Console.WriteLine($"peak per sec   : {e.PeakPerSecond}");
Console.WriteLine($"storage (GB)   : {e.StorageGb}");
Console.WriteLine(e.PeakPerSecond < 1_000
    ? "verdict: start simple (one database + a queue), no sharding yet"
    : "verdict: plan partitioning early");

record Assumptions(long Users, int DailyActivePercent, int MessagesPerActiveUser,
                   int PeakFactor, int BytesPerMessage, int RetentionDays, int Copies);

record Estimate(long PerDay, long AveragePerSecond, long PeakPerSecond, long StorageGb)
{
    private const long SecondsPerDay = 86_400;

    public static Estimate From(Assumptions a)
    {
        // multiply first, divide last: keeps precision with integers
        long perDay = a.Users * a.DailyActivePercent * a.MessagesPerActiveUser / 100;
        long average = perDay / SecondsPerDay;
        long peak = perDay * a.PeakFactor / SecondsPerDay;
        long storageBytes = perDay * a.BytesPerMessage * a.RetentionDays * a.Copies;
        return new Estimate(perDay, average, peak, storageBytes / 1_000_000_000);
    }
}`,
          expected: `messages/day   : 10000000
average per sec: 115
peak per sec   : 347
storage (GB)   : 10950
verdict: start simple (one database + a queue), no sharding yet`
        }
      ]
    },
    {
      id: "url-shortener-in-code",
      depth: "detailed",
      title: {
        en: "URL shortener in code — base62 and the redirect endpoint",
        hi: "Code में URL shortener — base62 और redirect endpoint",
        hg: "Code mein URL shortener — base62 aur redirect endpoint"
      },
      body: {
        en: `<p><b>Picture — a hotel key tag again:</b> the number on the tag is just the room number written in a shorter alphabet. Base62 does that for an id: 0-9, a-z, A-Z (62 symbols) make short, URL-safe codes.</p>
<ul>
<li><b>Base62</b> encodes the numeric id; decoding gives the id back. It is <b>not</b> encryption: anyone can decode it, so it hides nothing.</li>
<li>The redirect endpoint is <b>cache-aside</b>: look in the cache, on a miss read the store and fill the cache with a TTL. The second snippet uses <code>IMemoryCache</code> so it runs anywhere; with several servers you would use a shared cache such as Redis (<code>IDistributedCache</code> or <code>HybridCache</code>, Day 13).</li>
<li>It answers <b>302</b> (<code>permanent: false</code>) because we want every click to reach us for analytics and editable targets; 301 would be cached by browsers. Expired links return <b>410 Gone</b>, unknown codes 404.</li>
<li>Create honours an <code>Idempotency-Key</code> header, so a retried request returns the same link (Day 13). Time comes from <code>TimeProvider</code>, so expiry is testable.</li>
<li>The store here is a teaching stand-in with a counter; in production the counter is a database sequence or leased id blocks per server, and unknown codes might be cached briefly too (negative caching) so bad codes do not hammer the database.</li>
</ul>
<p><b>When to use:</b> counter + base62 when you need short, unique codes with no collision handling. <b>When not:</b> if links must be unguessable, do not expose raw sequential ids; use random codes with a unique-key check, or scramble the id first. Do not use 301 if you need click statistics.</p>`,
        hi: `<p><b>Picture — फिर से hotel की key tag:</b> tag का number असल में कमरे का number है जो छोटी alphabet में लिखा है। Base62 id के लिए यही करता है: 0-9, a-z, A-Z (62 symbols) से छोटे, URL-safe codes बनते हैं।</p>
<ul>
<li><b>Base62</b> numeric id को encode करता है; decode करने पर id वापस मिलती है। यह encryption <b>नहीं</b> है: कोई भी decode कर सकता है, इसलिए यह कुछ छुपाता नहीं।</li>
<li>Redirect endpoint <b>cache-aside</b> है: cache में देखो, miss पर store से पढ़ो और TTL के साथ cache भरो। दूसरा snippet <code>IMemoryCache</code> use करता है ताकि कहीं भी चले; कई servers हों तो shared cache जैसे Redis (<code>IDistributedCache</code> या <code>HybridCache</code>, Day 13) लगाओगे।</li>
<li>यह <b>302</b> (<code>permanent: false</code>) देता है क्योंकि हम चाहते हैं कि हर click हमारे पास आए (analytics और बदलने लायक target); 301 को browsers cache कर लेते हैं। Expire हुए links <b>410 Gone</b> देते हैं, अनजान codes 404।</li>
<li>Create में <code>Idempotency-Key</code> header माना जाता है, इसलिए retry हुई request वही link लौटाती है (Day 13)। Time <code>TimeProvider</code> से आता है, इसलिए expiry test हो सकती है।</li>
<li>यहाँ का store सिखाने वाला stand-in है जिसमें counter है; production में counter database sequence या हर server के लिए leased id blocks होते हैं, और अनजान codes को भी थोड़ी देर cache कर सकते हैं (negative caching) ताकि ग़लत codes database को न मारें।</li>
</ul>
<p><b>कब use करें:</b> counter + base62 तब, जब छोटे, unique codes चाहिए और collision संभालना नहीं चाहते। <b>कब नहीं:</b> links unguessable चाहिए तो raw sequential ids मत दिखाओ; unique-key check वाले random codes लो, या id को पहले scramble करो। Click statistics चाहिए तो 301 मत use करो।</p>`,
        hg: `<p><b>Picture — phir se hotel ki key tag:</b> tag ka number asal mein kamre ka number hai jo chhoti alphabet mein likha hai. Base62 id ke liye yahi karta hai: 0-9, a-z, A-Z (62 symbols) se chhote, URL-safe codes bante hain.</p>
<ul>
<li><b>Base62</b> numeric id ko encode karta hai; decode karne par id wapas milti hai. Yeh encryption <b>nahi</b> hai: koi bhi decode kar sakta hai, isliye yeh kuch chhupata nahi.</li>
<li>Redirect endpoint <b>cache-aside</b> hai: cache mein dekho, miss par store se padho aur TTL ke saath cache bharo. Doosra snippet <code>IMemoryCache</code> use karta hai taaki kahin bhi chale; kai servers hon to shared cache jaise Redis (<code>IDistributedCache</code> ya <code>HybridCache</code>, Day 13) lagaoge.</li>
<li>Yeh <b>302</b> (<code>permanent: false</code>) deta hai kyunki hum chahte hain ki har click hamare paas aaye (analytics aur badalne layak target); 301 ko browsers cache kar lete hain. Expire hue links <b>410 Gone</b> dete hain, anjaan codes 404.</li>
<li>Create mein <code>Idempotency-Key</code> header maana jaata hai, isliye retry hui request wahi link lautati hai (Day 13). Time <code>TimeProvider</code> se aata hai, isliye expiry test ho sakti hai.</li>
<li>Yahan ka store sikhane wala stand-in hai jisme counter hai; production mein counter database sequence ya har server ke liye leased id blocks hote hain, aur anjaan codes ko bhi thodi der cache kar sakte hain (negative caching) taaki galat codes database ko na maaren.</li>
</ul>
<p><b>Kab use karein:</b> counter + base62 tab, jab chhote, unique codes chahiye aur collision sambhalna nahi chahte. <b>Kab nahi:</b> links unguessable chahiye to raw sequential ids mat dikhao; unique-key check wale random codes lo, ya id ko pehle scramble karo. Click statistics chahiye to 301 mat use karo.</p>`
      },
      code: [
        {
          caption: {
            en: "Base62 encode/decode with validation (round trip and error shown in the run)",
            hi: "Validation के साथ Base62 encode/decode (round trip और error run में दिखते हैं)",
            hg: "Validation ke saath Base62 encode/decode (round trip aur error run mein dikhte hain)"
          },
          check: "run",
          src: `using System.Text;

Console.WriteLine(Base62.Encode(125));
Console.WriteLine(Base62.Decode("21"));
long biggest7 = (long)Math.Pow(62, 7) - 1;
Console.WriteLine(Base62.Encode(biggest7) + " has " + Base62.Encode(biggest7).Length + " characters");
Console.WriteLine("round trip ok: " + (Base62.Decode(Base62.Encode(987_654_321)) == 987_654_321));
try { Base62.Decode("ab-c"); }
catch (FormatException ex) { Console.WriteLine("bad input: " + ex.Message); }

static class Base62
{
    private const string Alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    public static string Encode(long id)
    {
        ArgumentOutOfRangeException.ThrowIfNegative(id);
        if (id == 0) return "0";
        var sb = new StringBuilder();
        for (; id > 0; id /= 62) sb.Insert(0, Alphabet[(int)(id % 62)]);
        return sb.ToString();
    }

    public static long Decode(string code)
    {
        long id = 0;
        foreach (var ch in code)
        {
            var digit = Alphabet.IndexOf(ch);
            if (digit < 0) throw new FormatException($"'{ch}' is not a base62 character");
            id = checked(id * 62 + digit);
        }
        return id;
    }
}`,
          expected: `21
125
ZZZZZZZ has 7 characters
round trip ok: True
bad input: '-' is not a base62 character`
        },
        {
          caption: {
            en: "Minimal API: create with Idempotency-Key, redirect with cache-aside, 302, 410 for expired",
            hi: "Minimal API: Idempotency-Key के साथ create, cache-aside के साथ redirect, 302, expired पर 410",
            hg: "Minimal API: Idempotency-Key ke saath create, cache-aside ke saath redirect, 302, expired par 410"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Concurrent;
using Microsoft.Extensions.Caching.Memory;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddMemoryCache();                       // stand-in for Redis (IDistributedCache, Day 13)
builder.Services.AddSingleton(TimeProvider.System);
builder.Services.AddSingleton<UrlStore>();
var app = builder.Build();

// Create: validate, and honour Idempotency-Key so a client retry does not create a second link.
app.MapPost("/api/urls", (CreateUrl req, HttpRequest http, UrlStore store) =>
{
    if (!Uri.TryCreate(req.LongUrl, UriKind.Absolute, out var uri) ||
        (uri.Scheme != Uri.UriSchemeHttp && uri.Scheme != Uri.UriSchemeHttps))
        return Results.Problem(statusCode: 400, title: "longUrl must be an absolute http(s) URL");

    var key = http.Headers["Idempotency-Key"].ToString();
    var entry = store.Create(string.IsNullOrEmpty(key) ? null : key, req.LongUrl, req.ExpiresAt);
    var shortUrl = $"{http.Scheme}://{http.Host}/{entry.Code}";
    return Results.Created(shortUrl, new { shortUrl, entry.Code });
});

// Redirect: cache-aside, 302 so every click still reaches us (analytics, editable target).
app.MapGet("/{code}", (string code, IMemoryCache cache, UrlStore store, TimeProvider time) =>
{
    if (!cache.TryGetValue(code, out UrlEntry? entry))
    {
        entry = store.Find(code);
        if (entry is null) return Results.NotFound();
        cache.Set(code, entry, TimeSpan.FromMinutes(10));     // fill on miss, TTL as safety net
    }
    if (entry!.ExpiresAt is { } end && end <= time.GetUtcNow()) return Results.StatusCode(StatusCodes.Status410Gone);
    return Results.Redirect(entry.LongUrl, permanent: false);
});

app.Run();

record CreateUrl(string LongUrl, DateTimeOffset? ExpiresAt);
record UrlEntry(string Code, string LongUrl, DateTimeOffset? ExpiresAt);

// Teaching stand-in for the database: ids come from a counter; in production lease id blocks per server.
class UrlStore
{
    private const string Alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private readonly ConcurrentDictionary<string, UrlEntry> _byCode = new();
    private readonly ConcurrentDictionary<string, UrlEntry> _byIdempotencyKey = new();
    private long _next = 100_000;

    public UrlEntry Create(string? idempotencyKey, string longUrl, DateTimeOffset? expiresAt)
    {
        var entry = new UrlEntry(Encode(Interlocked.Increment(ref _next)), longUrl, expiresAt);
        _byCode[entry.Code] = entry;
        if (idempotencyKey is null) return entry;

        // GetOrAdd is atomic per key: two concurrent retries cannot create two links.
        var winner = _byIdempotencyKey.GetOrAdd(idempotencyKey, entry);
        if (!ReferenceEquals(winner, entry)) _byCode.TryRemove(entry.Code, out _);   // lost the race: drop our spare code
        return winner;
    }

    public UrlEntry? Find(string code) => _byCode.GetValueOrDefault(code);

    private static string Encode(long id)
    {
        var chars = new Stack<char>();
        for (; id > 0; id /= 62) chars.Push(Alphabet[(int)(id % 62)]);
        return new string(chars.ToArray());
    }
}`
        }
      ]
    },
    {
      id: "notification-in-code",
      depth: "detailed",
      title: {
        en: "Notification pipeline in code — dedupe, rate limit, retry, dead-letter",
        hi: "Code में notification pipeline — dedupe, rate limit, retry, dead-letter",
        hg: "Code mein notification pipeline — dedupe, rate limit, retry, dead-letter"
      },
      body: {
        en: `<p><b>Picture — the courier counter:</b> the clerk checks the parcel was not already booked (dedupe), waits if the van is full (rate limit), re-books if the van breaks down (retry), and sends parcels with a wrong address to the "returns" shelf (dead-letter).</p>
<p>The snippet is a <b>single-threaded simulation</b> so that the output is the same every run: a fake clock, a fake provider, and a queue. Read it as a model of the sender worker from Design 2.</p>
<ul>
<li><b>Duplicate delivery:</b> "n1" arrives twice; the second one is skipped because "sent" was recorded after the provider accepted the first. Marking <b>after</b> success (not before) is the lesson from Day 16: marking first would lose a message when the send fails.</li>
<li><b>Rate limit:</b> a token bucket per provider account; the worker <b>waits</b> for a token instead of failing, so a campaign slows down but nothing is rejected.</li>
<li><b>Retry:</b> a transient failure (503, timeout) retries with exponential backoff (200 ms, 400 ms; add jitter in real code) up to 3 attempts. A permanent failure (a 400-type error) is <b>not</b> retried: it goes straight to the dead-letter list.</li>
<li>In the output, "n2" is retried and finishes last, because the retry goes to the back of the queue; ordering is not guaranteed across retries, so use per-conversation ordering only where the product needs it.</li>
</ul>
<p>In production the queue is a managed broker (Day 20), the counters live in a shared store, and the "sent" record is the Messages table with a unique key.</p>
<p><b>When to use:</b> this shape for any outbound integration with a rate-limited, sometimes-failing third party. <b>When not:</b> for one-off, low-volume calls a direct HTTP call with the standard resilience handler (Day 13) is simpler; a queue adds moving parts you have to monitor.</p>`,
        hi: `<p><b>Picture — courier counter:</b> clerk देखता है कि parcel पहले से book तो नहीं हुआ (dedupe), van भरी हो तो इंतज़ार करता है (rate limit), van ख़राब हो जाए तो दोबारा book करता है (retry), और ग़लत पते वाले parcels "returns" shelf पर भेजता है (dead-letter)।</p>
<p>यह snippet एक <b>single-threaded simulation</b> है ताकि हर run में output एक जैसा रहे: fake clock, fake provider और एक queue। इसे Design 2 के sender worker का model समझकर पढ़ो।</p>
<ul>
<li><b>Duplicate delivery:</b> "n1" दो बार आता है; दूसरा skip होता है क्योंकि पहले के provider accept करने के बाद "sent" दर्ज हुआ था। Success के <b>बाद</b> mark करना (पहले नहीं) Day 16 का सबक है: पहले mark करने पर send fail होते ही message खो जाता।</li>
<li><b>Rate limit:</b> हर provider account के लिए token bucket; worker fail होने की जगह token का <b>इंतज़ार</b> करता है, इसलिए campaign धीमा होता है पर कुछ reject नहीं होता।</li>
<li><b>Retry:</b> transient failure (503, timeout) पर exponential backoff (200 ms, 400 ms; असली code में jitter जोड़ो) के साथ 3 attempts तक retry। Permanent failure (400 जैसी error) retry <b>नहीं</b> होती: सीधे dead-letter list में जाती है।</li>
<li>Output में "n2" retry होकर सबसे आख़िर में पूरा होता है, क्योंकि retry queue के पीछे जाती है; retries में order की guarantee नहीं है, इसलिए per-conversation ordering वहीं रखो जहाँ product को चाहिए।</li>
</ul>
<p>Production में queue एक managed broker है (Day 20), counters shared store में रहते हैं, और "sent" का record unique key वाली Messages table है।</p>
<p><b>कब use करें:</b> किसी भी rate-limited और कभी-कभी fail होने वाली third party के outbound integration के लिए यही shape। <b>कब नहीं:</b> एक-दो low-volume calls के लिए standard resilience handler (Day 13) के साथ सीधी HTTP call सरल है; queue में ऐसे moving parts आते हैं जिन्हें monitor करना पड़ता है।</p>`,
        hg: `<p><b>Picture — courier counter:</b> clerk dekhta hai ki parcel pehle se book to nahi hua (dedupe), van bhari ho to intezaar karta hai (rate limit), van kharab ho jaaye to dobara book karta hai (retry), aur galat pate wale parcels "returns" shelf par bhejta hai (dead-letter).</p>
<p>Yeh snippet ek <b>single-threaded simulation</b> hai taaki har run mein output ek jaisa rahe: fake clock, fake provider aur ek queue. Ise Design 2 ke sender worker ka model samajhkar padho.</p>
<ul>
<li><b>Duplicate delivery:</b> "n1" do baar aata hai; doosra skip hota hai kyunki pehle ke provider accept karne ke baad "sent" darj hua tha. Success ke <b>baad</b> mark karna (pehle nahi) Day 16 ka sabak hai: pehle mark karne par send fail hote hi message kho jaata.</li>
<li><b>Rate limit:</b> har provider account ke liye token bucket; worker fail hone ki jagah token ka <b>intezaar</b> karta hai, isliye campaign dheema hota hai par kuch reject nahi hota.</li>
<li><b>Retry:</b> transient failure (503, timeout) par exponential backoff (200 ms, 400 ms; asli code mein jitter jodo) ke saath 3 attempts tak retry. Permanent failure (400 jaisi error) retry <b>nahi</b> hoti: seedhe dead-letter list mein jaati hai.</li>
<li>Output mein "n2" retry hokar sabse aakhir mein poora hota hai, kyunki retry queue ke peeche jaati hai; retries mein order ki guarantee nahi hai, isliye per-conversation ordering wahin rakho jahan product ko chahiye.</li>
</ul>
<p>Production mein queue ek managed broker hai (Day 20), counters shared store mein rehte hain, aur "sent" ka record unique key wali Messages table hai.</p>
<p><b>Kab use karein:</b> kisi bhi rate-limited aur kabhi-kabhi fail hone wali third party ke outbound integration ke liye yahi shape. <b>Kab nahi:</b> ek-do low-volume calls ke liye standard resilience handler (Day 13) ke saath seedhi HTTP call saral hai; queue mein aise moving parts aate hain jinhe monitor karna padta hai.</p>`
      },
      code: [
        {
          caption: {
            en: "Simulated sender worker: duplicate skip, token bucket wait, backoff retry, dead-letter (deterministic fake clock; each log time includes the backoff wait)",
            hi: "Simulated sender worker: duplicate skip, token bucket का wait, backoff retry, dead-letter (deterministic fake clock; each log time includes the backoff wait)",
            hg: "Simulated sender worker: duplicate skip, token bucket wait, backoff retry, dead-letter (deterministic fake clock; each log time includes the backoff wait)"
          },
          check: "run",
          src: `// Simulated pipeline: duplicate skip, per-provider token bucket, retry with backoff, dead-letter.
var clock = new FakeClock();
var provider = new FakeProvider();
var limiter = new TokenBucket(clock, capacity: 2, refillPerSecond: 1);
var queue = new Queue<Outgoing>();
var sent = new HashSet<string>();          // ids already accepted by the provider
var deadLetters = new List<string>();

foreach (var id in new[] { "n1", "n2", "n1", "n3", "n4" })   // "n1" arrives twice (duplicate delivery)
    queue.Enqueue(new Outgoing(id, Attempt: 1));

while (queue.Count > 0)
{
    var msg = queue.Dequeue();
    if (sent.Contains(msg.Id)) { Console.WriteLine($"{clock.Ms,5} ms {msg.Id}: duplicate, skipped"); continue; }

    while (!limiter.TryTake()) clock.Ms += 250;                // wait for a token instead of failing

    switch (provider.Send(msg))
    {
        case SendResult.Accepted:
            sent.Add(msg.Id);                                   // record "sent" only after acceptance
            Console.WriteLine($"{clock.Ms,5} ms {msg.Id}: sent (attempt {msg.Attempt})");
            break;
        case SendResult.Transient when msg.Attempt < 3:
            var backoff = 100 * (1 << msg.Attempt);             // 200 ms, then 400 ms
            clock.Ms += backoff;
            Console.WriteLine($"{clock.Ms,5} ms {msg.Id}: 503, retry after {backoff} ms");
            queue.Enqueue(msg with { Attempt = msg.Attempt + 1 });
            break;
        default:
            deadLetters.Add(msg.Id);
            Console.WriteLine($"{clock.Ms,5} ms {msg.Id}: dead-lettered");
            break;
    }
}
Console.WriteLine("sent: " + string.Join(",", sent.Order()) + " | dead: " + string.Join(",", deadLetters));

record Outgoing(string Id, int Attempt);
enum SendResult { Accepted, Transient, Permanent }

class FakeClock { public long Ms; }

class FakeProvider
{
    private int _n2Calls;
    public SendResult Send(Outgoing m) => m.Id switch
    {
        "n2" => ++_n2Calls <= 1 ? SendResult.Transient : SendResult.Accepted,   // fails once, then works
        "n4" => SendResult.Permanent,                                            // e.g. a 400: do not retry
        _ => SendResult.Accepted
    };
}

class TokenBucket(FakeClock clock, int capacity, int refillPerSecond)
{
    private long _milli = capacity * 1000L;
    private long _last;
    public bool TryTake()
    {
        _milli = Math.Min(capacity * 1000L, _milli + (clock.Ms - _last) * refillPerSecond);
        _last = clock.Ms;
        if (_milli < 1000) return false;
        _milli -= 1000;
        return true;
    }
}`,
          expected: `    0 ms n1: sent (attempt 1)
  200 ms n2: 503, retry after 200 ms
  200 ms n1: duplicate, skipped
 1200 ms n3: sent (attempt 1)
 2200 ms n4: dead-lettered
 3200 ms n2: sent (attempt 2)
sent: n1,n2,n3 | dead: n4`
        }
      ]
    },
    {
      id: "partitioning-in-code",
      depth: "detailed",
      title: {
        en: "Partitioning in code — a stable consistent-hash ring",
        hi: "Code में partitioning — stable consistent-hash ring",
        hg: "Code mein partitioning — stable consistent-hash ring"
      },
      body: {
        en: `<p><b>Picture — a circular railway line with stations:</b> each shard owns some stations on the circle; a passenger (key) boards the next station clockwise from where the key lands. Adding a new station only takes the passengers just before it.</p>
<ul>
<li>The ring holds many <b>points per node</b> (virtual nodes; 50 here) so load is spread more evenly. Keys go to the first point clockwise; <code>Array.BinarySearch</code> finds it in O(log n).</li>
<li>The hash must be <b>stable</b> across processes and machines. <code>string.GetHashCode()</code> is randomised per process in .NET, so two servers would disagree. The code uses FNV-1a plus a final bit-mix; do not use it for security.</li>
<li>The ring is <b>immutable</b>: adding a shard builds a new ring and you swap the reference. Readers never see a half-built ring, and no lock is needed.</li>
<li>The run shows a rough balance for 1,000 customers and that adding <code>shard-d</code> moves only some keys, all of them to the new shard. The exact counts depend on the hash and the points, so they are an illustration, not a rule.</li>
<li>Moving the data for those keys is the real work: copy, switch reads, then delete. Plan it as a migration, not a config change.</li>
</ul>
<p><b>When to use:</b> sharded caches and key-value stores where nodes come and go, and any place where "key to node" must survive adding nodes. <b>When not:</b> if you have a fixed number of partitions (for example Redis Cluster uses fixed hash slots) or a managed database that shards for you, use that; for a small database, a read replica and indexes come before sharding.</p>`,
        hi: `<p><b>Picture — stations वाली गोल railway line:</b> हर shard circle पर कुछ stations का मालिक है; passenger (key) जहाँ गिरे वहाँ से clockwise अगले station पर चढ़ता है। नया station जोड़ने पर सिर्फ़ उससे ठीक पहले के passengers उसके पास जाते हैं।</p>
<ul>
<li>Ring में हर node के <b>कई points</b> होते हैं (virtual nodes; यहाँ 50) ताकि load ज़्यादा बराबर बँटे। Key पहले clockwise point पर जाती है; <code>Array.BinarySearch</code> उसे O(log n) में ढूँढता है।</li>
<li>Hash processes और machines में <b>stable</b> होना चाहिए। .NET में <code>string.GetHashCode()</code> हर process में randomise होता है, इसलिए दो servers असहमत होंगे। Code में FNV-1a और आख़िर में bit-mix है; इसे security के लिए use मत करो।</li>
<li>Ring <b>immutable</b> है: shard जोड़ने पर नया ring बनता है और reference swap होता है। Readers को अधूरा ring कभी नहीं दिखता, और lock नहीं चाहिए।</li>
<li>Run में 1,000 customers का मोटा balance दिखता है और यह कि <code>shard-d</code> जोड़ने पर सिर्फ़ कुछ keys हिलती हैं, सब नए shard पर। सही counts hash और points पर निर्भर हैं, इसलिए यह मिसाल है, rule नहीं।</li>
<li>उन keys का data हिलाना असली काम है: copy, reads switch, फिर delete। इसे migration की तरह plan करो, config change की तरह नहीं।</li>
</ul>
<p><b>कब use करें:</b> sharded caches और key-value stores जहाँ nodes आते-जाते हैं, और हर जगह जहाँ "key से node" नए nodes जुड़ने पर भी बना रहना चाहिए। <b>कब नहीं:</b> अगर partitions की संख्या fixed है (जैसे Redis Cluster fixed hash slots use करता है) या managed database ख़ुद shard करता है, तो वही use करो; छोटे database के लिए sharding से पहले read replica और indexes आते हैं।</p>`,
        hg: `<p><b>Picture — stations wali gol railway line:</b> har shard circle par kuch stations ka malik hai; passenger (key) jahan gire wahan se clockwise agle station par chadhta hai. Naya station jodne par sirf us se theek pehle ke passengers uske paas jaate hain.</p>
<ul>
<li>Ring mein har node ke <b>kai points</b> hote hain (virtual nodes; yahan 50) taaki load zyada barabar bante. Key pehle clockwise point par jaati hai; <code>Array.BinarySearch</code> use O(log n) mein dhoondhta hai.</li>
<li>Hash processes aur machines mein <b>stable</b> hona chahiye. .NET mein <code>string.GetHashCode()</code> har process mein randomise hota hai, isliye do servers asahmat honge. Code mein FNV-1a aur aakhir mein bit-mix hai; ise security ke liye use mat karo.</li>
<li>Ring <b>immutable</b> hai: shard jodne par naya ring banta hai aur reference swap hota hai. Readers ko adhoora ring kabhi nahi dikhta, aur lock nahi chahiye.</li>
<li>Run mein 1,000 customers ka mota balance dikhta hai aur yeh ki <code>shard-d</code> jodne par sirf kuch keys hilti hain, sab naye shard par. Sahi counts hash aur points par depend karte hain, isliye yeh misaal hai, rule nahi.</li>
<li>Un keys ka data hilana asli kaam hai: copy, reads switch, phir delete. Ise migration ki tarah plan karo, config change ki tarah nahi.</li>
</ul>
<p><b>Kab use karein:</b> sharded caches aur key-value stores jahan nodes aate-jaate hain, aur har jagah jahan "key se node" naye nodes judne par bhi bana rehna chahiye. <b>Kab nahi:</b> agar partitions ki sankhya fixed hai (jaise Redis Cluster fixed hash slots use karta hai) ya managed database khud shard karta hai, to wahi use karo; chhote database ke liye sharding se pehle read replica aur indexes aate hain.</p>`
      },
      code: [
        {
          caption: {
            en: "Immutable HashRing with virtual nodes and a stable hash; adding a shard builds a new ring",
            hi: "Virtual nodes और stable hash वाला immutable HashRing; shard जोड़ने पर नया ring बनता है",
            hg: "Virtual nodes aur stable hash wala immutable HashRing; shard jodne par naya ring banta hai"
          },
          check: "run",
          src: `var ring = HashRing.Create(["shard-a", "shard-b", "shard-c"], replicas: 50);
var customers = Enumerable.Range(1, 1000).Select(i => "cust-" + i).ToList();

foreach (var g in customers.GroupBy(ring.NodeFor).OrderBy(g => g.Key))
    Console.WriteLine($"{g.Key}: {g.Count()} customers");

var bigger = ring.With("shard-d");                 // topology change = build a new ring and swap it in
var moved = customers.Where(c => ring.NodeFor(c) != bigger.NodeFor(c)).ToList();
Console.WriteLine($"moved after adding shard-d: {moved.Count} of {customers.Count}");
Console.WriteLine("all moved keys went to shard-d: " + moved.All(c => bigger.NodeFor(c) == "shard-d"));

sealed class HashRing
{
    private readonly uint[] _points;
    private readonly string[] _owners;
    private readonly string[] _nodes;
    private readonly int _replicas;

    private HashRing(string[] nodes, int replicas)
    {
        _nodes = nodes;
        _replicas = replicas;
        var list = new List<(uint Hash, string Node)>();
        foreach (var node in nodes)
            for (var i = 0; i < replicas; i++) list.Add((Fnv1a(node + "#" + i), node));
        list.Sort((x, y) => x.Hash.CompareTo(y.Hash));
        _points = list.Select(p => p.Hash).ToArray();
        _owners = list.Select(p => p.Node).ToArray();
    }

    public static HashRing Create(string[] nodes, int replicas) => new(nodes, replicas);
    public int NodeCount => _nodes.Length;
    public HashRing With(string node) => new([.. _nodes, node], _replicas);   // the ring itself never changes

    public string NodeFor(string key)
    {
        var index = Array.BinarySearch(_points, Fnv1a(key));
        if (index < 0) index = ~index;                  // first point clockwise from the key
        return _owners[index == _points.Length ? 0 : index];
    }

    // Stable across processes and machines, unlike string.GetHashCode(); the last line mixes the bits.
    private static uint Fnv1a(string text)
    {
        uint hash = 2166136261;
        foreach (var b in System.Text.Encoding.UTF8.GetBytes(text)) { hash ^= b; hash *= 16777619; }
        hash ^= hash >> 16; hash *= 0x85ebca6b; hash ^= hash >> 13; hash *= 0xc2b2ae35; hash ^= hash >> 16;   // final mix: spreads similar keys
        return hash;
    }
}`,
          expected: `shard-a: 325 customers
shard-b: 302 customers
shard-c: 373 customers
moved after adding shard-d: 179 of 1000
all moved keys went to shard-d: True`
        }
      ]
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
        en: `<p><b>Picture — a recipe card:</b> a good recipe card has blanks you fill from your own kitchen. A story template works the same way: the structure is given, the facts must be yours.</p>
<ul>
<li>Interviewers ask "tell me about a system you designed". Use <b>STAR</b>: Situation, Task, Actions, Result, plus a one-line reflection. Aim for about two minutes.</li>
<li>The text block below has two parts: a <b>fill-in template</b> and a <b>sample, clearly labelled "Sample - replace with your own"</b>. The sample is a generic WhatsApp-bot story to show the shape. <b>It is not your history</b>: do not repeat it as yours. Replace every bracket with what you really did.</li>
<li>Pick a real piece of work, even a small one (a queue added, a cache introduced, a retry fixed). Name <b>your</b> part clearly ("I" for what you did, "we" for the team).</li>
<li>Put at least one <b>trade-off</b> and one <b>number</b> in it; if you do not have a measured number, say what you observed and how you would measure it.</li>
<li>If you do not have a suitable story, say so and walk through "how I would design it" using the framework, labelled as a design, not as an experience.</li>
</ul>
<p><b>When to use:</b> prepare two or three stories (a design, a failure you fixed, a disagreement you resolved) and rehearse them aloud. <b>When not:</b> do not memorise word for word, and never add details that did not happen; interviewers follow up, and an invented detail is the quickest way to lose trust.</p>`,
        hi: `<p><b>Picture — recipe card:</b> अच्छे recipe card में blanks होते हैं जो तुम अपनी kitchen से भरते हो। Story template भी वैसा ही है: structure दिया हुआ है, facts तुम्हारे अपने होने चाहिए।</p>
<ul>
<li>Interviewer पूछते हैं "तुमने जो system design किया उसके बारे में बताओ"। <b>STAR</b> use करो: Situation, Task, Actions, Result, और एक line की reflection। लगभग दो मिनट रखो।</li>
<li>नीचे के text block में दो हिस्से हैं: <b>fill-in template</b> और <b>साफ़ labelled sample, "Sample - replace with your own"</b>। Sample एक generic WhatsApp-bot story है जो shape दिखाती है। <b>यह तुम्हारी history नहीं है</b>: इसे अपनी बनाकर मत बोलो। हर bracket को वह लिखकर बदलो जो तुमने सच में किया।</li>
<li>असली काम चुनो, छोटा भी चलेगा (queue जोड़ी, cache लगाया, retry ठीक की)। <b>अपना</b> हिस्सा साफ़ बताओ (जो तुमने किया उसके लिए "I", team के लिए "we")।</li>
<li>कम से कम एक <b>trade-off</b> और एक <b>number</b> रखो; नापा हुआ number न हो तो बताओ कि तुमने क्या देखा और कैसे नापते।</li>
<li>सही story न हो तो साफ़ कहो और framework से "मैं इसे कैसे design करता" बताओ, design के रूप में, अनुभव के रूप में नहीं।</li>
</ul>
<p><b>कब use करें:</b> दो-तीन stories तैयार करो (एक design, एक failure जो ठीक की, एक असहमति जो सुलझाई) और ज़ोर से rehearse करो। <b>कब नहीं:</b> शब्द-दर-शब्द रटो मत, और जो हुआ नहीं वह details कभी मत जोड़ो; interviewer follow-up पूछते हैं, और गढ़ी हुई detail भरोसा खोने का सबसे तेज़ तरीक़ा है।</p>`,
        hg: `<p><b>Picture — recipe card:</b> achhe recipe card mein blanks hote hain jo tum apni kitchen se bharte ho. Story template bhi waisa hi hai: structure diya hua hai, facts tumhare apne hone chahiye.</p>
<ul>
<li>Interviewer poochte hain "tumne jo system design kiya uske baare mein batao". <b>STAR</b> use karo: Situation, Task, Actions, Result, aur ek line ki reflection. Lagbhag do minute rakho.</li>
<li>Neeche ke text block mein do hisse hain: <b>fill-in template</b> aur <b>saaf labelled sample, "Sample - replace with your own"</b>. Sample ek generic WhatsApp-bot story hai jo shape dikhati hai. <b>Yeh tumhari history nahi hai</b>: ise apni banakar mat bolo. Har bracket ko woh likhkar badlo jo tumne sach mein kiya.</li>
<li>Asli kaam chuno, chhota bhi chalega (queue jodi, cache lagaya, retry theek ki). <b>Apna</b> hissa saaf batao (jo tumne kiya uske liye "I", team ke liye "we").</li>
<li>Kam se kam ek <b>trade-off</b> aur ek <b>number</b> rakho; naapa hua number na ho to batao ki tumne kya dekha aur kaise naapte.</li>
<li>Sahi story na ho to saaf kaho aur framework se "main ise kaise design karta" batao, design ke roop mein, anubhav ke roop mein nahi.</li>
</ul>
<p><b>Kab use karein:</b> do-teen stories taiyaar karo (ek design, ek failure jo theek ki, ek asahmati jo suljhai) aur zor se rehearse karo. <b>Kab nahi:</b> shabd-dar-shabd ratto mat, aur jo hua nahi woh details kabhi mat jodo; interviewer follow-up poochte hain, aur gadhi hui detail bharosa khone ka sabse tez tareeka hai.</p>`
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
          src: `SAMPLE - replace with your own. Square brackets [ ] are blanks for YOUR real project.

=== TEMPLATE (speak it in about 2 minutes) ===
Situation : [system or product], [team size], [users or volume], [why a new design was needed].
Task      : My role was [lead / designer / reviewer]. The goal was [goal] under [constraint: time, budget, compliance].
Actions   : 1) I clarified [requirements] with [whom].
            2) I estimated [numbers] and found [insight].
            3) I chose [option A] over [option B] because [reason].
            4) I handled [failure mode] with [mechanism].
            5) I aligned the team with [design doc / review / demo].
Result    : [measurable result: latency, error rate, cost, delivery date].
Reflection: A trade-off I accepted was [trade-off]. Next time I would [improvement].

=== SAMPLE - replace with your own (a generic WhatsApp-bot story, NOT your history) ===
Situation : A team of [N] engineers ran a customer-support bot on a WhatsApp-style messaging provider.
            During campaigns, replies slowed down and some messages were sent twice.
Task      : As the tech lead I had to make the pipeline reliable without a full rewrite.
Actions   : I split webhook handling from processing with a queue: the webhook only verified the
            signature, removed duplicates and returned 200. I added an idempotency key per outgoing
            message and one rate limiter per provider account. I added retries with backoff, a
            dead-letter queue for permanent failures, and a dashboard for the age of the oldest
            message. I wrote a one-page design note and reviewed it with the team before building.
Result    : [Replace with your real numbers, e.g. duplicate sends from X to near zero; campaign time from X to Y.]
Reflection: I accepted eventual consistency for status updates. Next time I would add priority
            queues so one-time passwords never wait behind marketing messages.`
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
        en: `<ul>
<li>Seven steps: clarify, estimate, API, data and storage, high-level design, deep dives, trade-offs and next steps. In 45 minutes roughly 5-5-5-5-10-10-5.</li>
<li>Write the agreed scope and numbers on the board; refer back to them when you justify a choice.</li>
<li>Start with the simplest design that meets the numbers, then add a block (cache, queue, replica) only when a number or requirement asks for it.</li>
<li>Follow-up: "What if the interviewer jumps to caching early?" Follow them, answer, then return to the step you left. A framework is a checklist, not a script.</li>
</ul>`,
        hi: `<ul>
<li>सात steps: clarify, estimate, API, data और storage, high-level design, deep dives, trade-offs और next steps। 45 मिनट में लगभग 5-5-5-5-10-10-5।</li>
<li>तय हुआ scope और numbers board पर लिखो; कोई choice justify करते समय उन्हीं पर लौटो।</li>
<li>Numbers पूरे करने वाले सबसे simple design से शुरू करो, फिर block (cache, queue, replica) तभी जोड़ो जब कोई number या requirement माँगे।</li>
<li>Follow-up: "Interviewer जल्दी caching पर कूद जाए तो?" उनके साथ जाओ, जवाब दो, फिर जिस step से हटे थे वहाँ लौटो। Framework checklist है, script नहीं।</li>
</ul>`,
        hg: `<ul>
<li>Saat steps: clarify, estimate, API, data aur storage, high-level design, deep dives, trade-offs aur next steps. 45 minute mein lagbhag 5-5-5-5-10-10-5.</li>
<li>Tay hua scope aur numbers board par likho; koi choice justify karte samay unhi par lauto.</li>
<li>Numbers poore karne wale sabse simple design se shuru karo, phir block (cache, queue, replica) tabhi jodo jab koi number ya requirement maange.</li>
<li>Follow-up: "Interviewer jaldi caching par kood jaaye to?" Unke saath jao, jawab do, phir jis step se hate the wahan lauto. Framework checklist hai, script nahi.</li>
</ul>`
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
        en: `<ul>
<li>QPS = requests per day / 86,400; peak = average x 2 to 3. Storage = records x size x retention x copies. Bandwidth = QPS x payload.</li>
<li>Worked: 100M new URLs a month is about 38 writes/s; at 100:1 about 3,900 reads/s; 5 years x 500 bytes is about 3 TB (about 9 TB with 3 copies). Conclusion: read-heavy, small data, so cache and replicas, not sharding yet.</li>
<li>State assumptions aloud and round; precision is not the goal, the decision is.</li>
<li>Follow-up: "Your numbers are off by 10x, what changes?" Often the shape stays the same for a few-fold error; at 10x or more, revisit the bottleneck (the database or the provider limit).</li>
</ul>`,
        hi: `<ul>
<li>QPS = रोज़ की requests / 86,400; peak = average x 2 से 3। Storage = records x size x retention x copies। Bandwidth = QPS x payload।</li>
<li>Worked: महीने के 100M नए URLs लगभग 38 writes/s; 100:1 पर लगभग 3,900 reads/s; 5 साल x 500 bytes लगभग 3 TB (3 copies के साथ लगभग 9 TB)। नतीजा: read-heavy, छोटा data, इसलिए cache और replicas, अभी sharding नहीं।</li>
<li>Assumptions ज़ोर से बोलो और round करो; precision goal नहीं, फ़ैसला goal है।</li>
<li>Follow-up: "तुम्हारे numbers 10 गुना ग़लत निकले तो क्या बदलेगा?" कुछ गुना की ग़लती में अक्सर design का shape वही रहता है; 10 गुना या उससे ज़्यादा हो तो bottleneck दोबारा देखो (database या provider की limit)।</li>
</ul>`,
        hg: `<ul>
<li>QPS = roz ki requests / 86,400; peak = average x 2 se 3. Storage = records x size x retention x copies. Bandwidth = QPS x payload.</li>
<li>Worked: mahine ke 100M naye URLs lagbhag 38 writes/s; 100:1 par lagbhag 3,900 reads/s; 5 saal x 500 bytes lagbhag 3 TB (3 copies ke saath lagbhag 9 TB). Nateeja: read-heavy, chhota data, isliye cache aur replicas, abhi sharding nahi.</li>
<li>Assumptions zor se bolo aur round karo; precision goal nahi, faisla goal hai.</li>
<li>Follow-up: "Tumhare numbers 10 guna galat nikle to kya badlega?" Kuch guna ki galti mein aksar design ka shape wahi rehta hai; 10 guna ya usse zyada ho to bottleneck dobara dekho (database ya provider ki limit).</li>
</ul>`
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
        en: `<ul>
<li>Start simple: a bigger instance is often the cheapest first step. Go horizontal when you hit the ceiling or need availability across failures.</li>
<li>Horizontal needs <b>stateless</b> services: sessions in a shared store or in the token, files in object storage, no in-memory-only state that matters.</li>
<li>Databases are the hard part: stateless app servers scale easily, state does not (replicas for reads, partitioning for writes).</li>
<li>Follow-up: "What makes a service stateless?" No request depends on which instance served the previous one. Local caches are fine if losing them only costs speed.</li>
</ul>`,
        hi: `<ul>
<li>Simple से शुरू करो: बड़ी instance अक्सर सबसे सस्ता पहला क़दम होती है। सीमा पर पहुँचो या failures में availability चाहिए तब horizontal जाओ।</li>
<li>Horizontal के लिए <b>stateless</b> services चाहिए: sessions shared store या token में, files object storage में, कोई ज़रूरी in-memory-only state नहीं।</li>
<li>Databases मुश्किल हिस्सा हैं: stateless app servers आसानी से scale होते हैं, state नहीं (reads के लिए replicas, writes के लिए partitioning)।</li>
<li>Follow-up: "Service stateless कब होती है?" जब कोई request इस पर निर्भर न करे कि पिछली request किस instance ने संभाली। Local caches ठीक हैं अगर उनके खोने से सिर्फ़ speed जाती है।</li>
</ul>`,
        hg: `<ul>
<li>Simple se shuru karo: badi instance aksar sabse sasta pehla kadam hoti hai. Seema par pahuncho ya failures mein availability chahiye tab horizontal jao.</li>
<li>Horizontal ke liye <b>stateless</b> services chahiye: sessions shared store ya token mein, files object storage mein, koi zaroori in-memory-only state nahi.</li>
<li>Databases mushkil hissa hain: stateless app servers aasani se scale hote hain, state nahi (reads ke liye replicas, writes ke liye partitioning).</li>
<li>Follow-up: "Service stateless kab hoti hai?" Jab koi request is par nirbhar na kare ki pichhli request kis instance ne sambhali. Local caches theek hain agar unke khone se sirf speed jaati hai.</li>
</ul>`
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
        en: `<ul>
<li>Layers: browser, CDN (static and cacheable responses), app cache, Redis, database. Cache the read-heavy, rarely-changing data first.</li>
<li>Cache-aside: read from cache, on a miss load and fill; on write update the database and <b>delete</b> the key. A TTL is the safety net (the cache-aside puzzle shows stale reads without invalidation).</li>
<li>Stampede: many requests miss together; fix with jitter on TTLs, a lock or request coalescing, or HybridCache (Day 13).</li>
<li>Follow-up: "Cache-aside or write-through?" Cache-aside is simpler and tolerant of cache loss; write-through keeps the cache fresher but couples every write to the cache.</li>
</ul>`,
        hi: `<ul>
<li>Layers: browser, CDN (static और cacheable responses), app cache, Redis, database। पहले read-heavy और कम बदलने वाला data cache करो।</li>
<li>Cache-aside: cache से पढ़ो, miss पर load करके भरो; write पर database update करो और key <b>delete</b> करो। TTL safety net है (cache-aside puzzle invalidation के बिना stale reads दिखाता है)।</li>
<li>Stampede: बहुत सारी requests एक साथ miss होती हैं; हल: TTLs पर jitter, lock या request coalescing, या HybridCache (Day 13)।</li>
<li>Follow-up: "Cache-aside या write-through?" Cache-aside सरल है और cache खोने को सह लेता है; write-through cache को ज़्यादा fresh रखता है पर हर write को cache से बाँध देता है।</li>
</ul>`,
        hg: `<ul>
<li>Layers: browser, CDN (static aur cacheable responses), app cache, Redis, database. Pehle read-heavy aur kam badalne wala data cache karo.</li>
<li>Cache-aside: cache se padho, miss par load karke bharo; write par database update karo aur key <b>delete</b> karo. TTL safety net hai (cache-aside puzzle invalidation ke bina stale reads dikhata hai).</li>
<li>Stampede: bahut saari requests ek saath miss hoti hain; hal: TTLs par jitter, lock ya request coalescing, ya HybridCache (Day 13).</li>
<li>Follow-up: "Cache-aside ya write-through?" Cache-aside saral hai aur cache khone ko sah leta hai; write-through cache ko zyada fresh rakhta hai par har write ko cache se baandh deta hai.</li>
</ul>`
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
        en: `<ul>
<li>Cheap steps first: missing indexes, N+1 queries, connection pooling, archiving old rows (the SQL Server and PostgreSQL days are 18 and 19).</li>
<li>Read replicas scale reads; replication lag means a read right after a write may be stale, so route "read your own write" to the primary.</li>
<li>Sharding scales writes and size but costs: cross-shard joins and transactions, rebalancing, operational work. Pick the key from the main access pattern (customer id, not country).</li>
<li>Follow-up: "SQL or NoSQL?" Choose by access pattern and consistency needs: relational for joins and transactions, key-value or document for simple lookups at huge scale. Not by fashion.</li>
</ul>`,
        hi: `<ul>
<li>सस्ते steps पहले: missing indexes, N+1 queries, connection pooling, पुरानी rows archive करना (SQL Server और PostgreSQL के days 18 और 19 हैं)।</li>
<li>Read replicas reads scale करती हैं; replication lag का मतलब है write के तुरंत बाद की read stale हो सकती है, इसलिए "अपनी ही write पढ़ना" primary पर भेजो।</li>
<li>Sharding writes और size scale करती है पर कीमत लेती है: cross-shard joins और transactions, rebalancing, operations का काम। Key main access pattern से चुनो (customer id, country नहीं)।</li>
<li>Follow-up: "SQL या NoSQL?" Access pattern और consistency की ज़रूरत से चुनो: joins और transactions के लिए relational, बहुत बड़े scale पर simple lookups के लिए key-value या document। फ़ैशन से नहीं।</li>
</ul>`,
        hg: `<ul>
<li>Saste steps pehle: missing indexes, N+1 queries, connection pooling, purani rows archive karna (SQL Server aur PostgreSQL ke days 18 aur 19 hain).</li>
<li>Read replicas reads scale karti hain; replication lag ka matlab hai write ke turant baad ki read stale ho sakti hai, isliye "apni hi write padhna" primary par bhejo.</li>
<li>Sharding writes aur size scale karti hai par keemat leti hai: cross-shard joins aur transactions, rebalancing, operations ka kaam. Key main access pattern se chuno (customer id, country nahi).</li>
<li>Follow-up: "SQL ya NoSQL?" Access pattern aur consistency ki zaroorat se chuno: joins aur transactions ke liye relational, bahut bade scale par simple lookups ke liye key-value ya document. Fashion se nahi.</li>
</ul>`
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
        en: `<ul>
<li>Partitions will happen in a distributed system, so the real choice is during a partition: refuse or delay some requests (consistency) or answer with possibly older data (availability).</li>
<li>PACELC: if <b>P</b>artition, choose <b>A</b> or <b>C</b>; <b>E</b>lse (normal operation), choose <b>L</b>atency or <b>C</b>onsistency. Waiting for replicas to confirm is slower but more consistent.</li>
<li>Apply it per feature: money movement leans to consistency; a product catalogue or "likes" count can lean to availability and latency.</li>
<li>Follow-up: "Is CAP a label for databases?" Not exactly; many systems are tunable per operation, so describe the choice you make for each use case.</li>
</ul>`,
        hi: `<ul>
<li>Distributed system में partitions होंगे ही, इसलिए असली choice partition के दौरान है: कुछ requests मना या देर से करो (consistency) या शायद पुराने data के साथ जवाब दो (availability)।</li>
<li>PACELC: अगर <b>P</b>artition, तो <b>A</b> या <b>C</b> चुनो; <b>E</b>lse (normal चलते समय), <b>L</b>atency या <b>C</b>onsistency चुनो। Replicas के confirm का इंतज़ार धीमा है पर ज़्यादा consistent।</li>
<li>इसे हर feature पर लगाओ: पैसे का लेन-देन consistency की तरफ़ झुकता है; product catalogue या "likes" count availability और latency की तरफ़ झुक सकता है।</li>
<li>Follow-up: "क्या CAP databases का label है?" पूरी तरह नहीं; कई systems हर operation पर tunable हैं, इसलिए हर use case के लिए जो choice करते हो वह बताओ।</li>
</ul>`,
        hg: `<ul>
<li>Distributed system mein partitions honge hi, isliye asli choice partition ke dauran hai: kuch requests mana ya der se karo (consistency) ya shayad purane data ke saath jawab do (availability).</li>
<li>PACELC: agar <b>P</b>artition, to <b>A</b> ya <b>C</b> chuno; <b>E</b>lse (normal chalte samay), <b>L</b>atency ya <b>C</b>onsistency chuno. Replicas ke confirm ka intezaar dheema hai par zyada consistent.</li>
<li>Ise har feature par lagao: paise ka len-den consistency ki taraf jhukta hai; product catalogue ya "likes" count availability aur latency ki taraf jhuk sakta hai.</li>
<li>Follow-up: "Kya CAP databases ka label hai?" Poori tarah nahi; kai systems har operation par tunable hain, isliye har use case ke liye jo choice karte ho woh batao.</li>
</ul>`
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
        en: `<ul>
<li>Clarify (custom alias? expiry? analytics?), estimate (read-heavy, small data; see the capacity puzzle), API (<code>POST /api/urls</code>, <code>GET /{code}</code>), data (one table by code).</li>
<li>Code generation: counter + base62 (7 characters is about 3.5 trillion), servers lease id blocks. Alternatives: truncated hash (collisions) or random code with a unique check.</li>
<li>Reads: Redis cache-aside with TTL; click events go to a queue so analytics stay off the hot path. 301 versus 302 has its own question.</li>
<li>Follow-up: "How do you stop guessing?" Random or scrambled codes for private links, plus a rate limit on lookups.</li>
</ul>`,
        hi: `<ul>
<li>Clarify (custom alias? expiry? analytics?), estimate (read-heavy, छोटा data; capacity puzzle देखो), API (<code>POST /api/urls</code>, <code>GET /{code}</code>), data (code से एक table)।</li>
<li>Code generation: counter + base62 (7 characters लगभग 3.5 trillion), servers id blocks lease करते हैं। options: कटा हुआ hash (collisions) या unique check वाला random code।</li>
<li>Reads: TTL के साथ Redis cache-aside; click events queue में जाते हैं ताकि analytics hot path से बाहर रहे। 301 बनाम 302 का अपना सवाल है।</li>
<li>Follow-up: "Guess करना कैसे रोकोगे?" Private links के लिए random या scrambled codes, और lookups पर rate limit।</li>
</ul>`,
        hg: `<ul>
<li>Clarify (custom alias? expiry? analytics?), estimate (read-heavy, chhota data; capacity puzzle dekho), API (<code>POST /api/urls</code>, <code>GET /{code}</code>), data (code se ek table).</li>
<li>Code generation: counter + base62 (7 characters lagbhag 3.5 trillion), servers id blocks lease karte hain. Options: kata hua hash (collisions) ya unique check wala random code.</li>
<li>Reads: TTL ke saath Redis cache-aside; click events queue mein jaate hain taaki analytics hot path se bahar rahe. 301 vs 302 ka apna sawaal hai.</li>
<li>Follow-up: "Guess karna kaise rokoge?" Private links ke liye random ya scrambled codes, aur lookups par rate limit.</li>
</ul>`
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
        en: `<ul>
<li>Requirements: no lost messages, fast webhook ack, provider rate limits, no duplicates, campaign spikes, opt-outs, delivery status callbacks.</li>
<li>Ingress does the minimum because the provider retries on errors; dedupe on the provider message id. Outbound uses our own message id as the idempotency key and records "sent" only after the provider accepts.</li>
<li>Retries: transient (429, 5xx, timeout) with exponential backoff and jitter; permanent (other 4xx) go to the dead-letter queue. Status callbacks can be late or out of order, so only move status forward.</li>
<li>Follow-up: "A 1 million campaign arrives." The queue absorbs it; the per-provider token bucket sets the sending speed; add priority so OTP messages go before marketing. Azure service names come on Day 20.</li>
</ul>`,
        hi: `<ul>
<li>Requirements: कोई message न खोए, webhook का तेज़ ack, provider rate limits, कोई duplicate नहीं, campaign spikes, opt-outs, delivery status callbacks।</li>
<li>Ingress कम से कम काम करता है क्योंकि errors पर provider retry करता है; provider message id पर dedupe। Outbound में हमारा अपना message id idempotency key है और "sent" तभी लिखते हैं जब provider accept करे।</li>
<li>Retries: transient (429, 5xx, timeout) पर exponential backoff और jitter; permanent (बाकी 4xx) dead-letter queue में। Status callbacks देर से या उल्टे order में आ सकते हैं, इसलिए status सिर्फ़ आगे बढ़ाओ।</li>
<li>Follow-up: "1 million का campaign आ गया।" Queue उसे सोख लेती है; per-provider token bucket sending की speed तय करता है; priority जोड़ो ताकि OTP messages marketing से पहले जाएँ। Azure service names Day 20 में आएँगे।</li>
</ul>`,
        hg: `<ul>
<li>Requirements: koi message na khoye, webhook ka tez ack, provider rate limits, koi duplicate nahi, campaign spikes, opt-outs, delivery status callbacks.</li>
<li>Ingress kam se kam kaam karta hai kyunki errors par provider retry karta hai; provider message id par dedupe. Outbound mein hamara apna message id idempotency key hai aur "sent" tabhi likhte hain jab provider accept kare.</li>
<li>Retries: transient (429, 5xx, timeout) par exponential backoff aur jitter; permanent (baaki 4xx) dead-letter queue mein. Status callbacks der se ya ulte order mein aa sakte hain, isliye status sirf aage badhao.</li>
<li>Follow-up: "1 million ka campaign aa gaya." Queue use sokh leti hai; per-provider token bucket sending ki speed tay karta hai; priority jodo taaki OTP messages marketing se pehle jaayein. Azure service names Day 20 mein aayenge.</li>
</ul>`
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
        en: `<ul>
<li>Benefits: accept fast and process later (load levelling), isolate failures, retry safely, scale workers independently.</li>
<li>Costs: the user sees "accepted", not "done"; delivery is usually at-least-once so consumers must be idempotent; you must monitor queue depth, oldest-message age and the dead-letter queue (Day 16).</li>
<li>Do not queue what the user must see immediately and consistently, such as a balance check; use a direct call with timeout and retry (Day 13).</li>
<li>Follow-up: "Queue or topic?" Queue: one consumer gets each message (work distribution). Topic: each subscription gets a copy (fan-out events).</li>
</ul>`,
        hi: `<ul>
<li>फ़ायदे: जल्दी accept करो, बाद में process करो (load levelling), failures अलग रखो, retry safe, workers अलग से scale।</li>
<li>कीमतें: user को "accepted" दिखता है, "done" नहीं; delivery आम तौर पर at-least-once है इसलिए consumers idempotent हों; queue depth, सबसे पुराने message की उम्र और dead-letter queue monitor करनी पड़ती है (Day 16)।</li>
<li>वह queue में मत डालो जो user को तुरंत और consistent दिखना चाहिए, जैसे balance check; timeout और retry के साथ सीधी call (Day 13)।</li>
<li>Follow-up: "Queue या topic?" Queue: हर message एक consumer को मिलता है (काम बाँटना)। Topic: हर subscription को कॉपी मिलती है (fan-out events)।</li>
</ul>`,
        hg: `<ul>
<li>Fayde: jaldi accept karo, baad mein process karo (load levelling), failures alag rakho, retry safe, workers alag se scale.</li>
<li>Keematein: user ko "accepted" dikhta hai, "done" nahi; delivery aam taur par at-least-once hai isliye consumers idempotent hon; queue depth, sabse purane message ki umr aur dead-letter queue monitor karni padti hai (Day 16).</li>
<li>Woh queue mein mat daalo jo user ko turant aur consistent dikhna chahiye, jaise balance check; timeout aur retry ke saath seedhi call (Day 13).</li>
<li>Follow-up: "Queue ya topic?" Queue: har message ek consumer ko milta hai (kaam baantna). Topic: har subscription ko copy milti hai (fan-out events).</li>
</ul>`
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
        en: `<ul>
<li>Good key: high cardinality, even spread, present in the common queries so most queries hit one shard.</li>
<li>Range sharding by an increasing id sends all new writes to the last shard; hashing spreads writes but makes range queries scatter-gather (the shard-key puzzle).</li>
<li>Watch for a hot key (one celebrity customer): split it further, cache it, or give it its own partition.</li>
<li>Follow-up: "How do you re-shard later?" Use consistent hashing or many small logical partitions mapped to physical nodes, then move partitions, not individual keys.</li>
</ul>`,
        hi: `<ul>
<li>अच्छी key: high cardinality, बराबर spread, common queries में मौजूद ताकि ज़्यादातर queries एक shard पर जाएँ।</li>
<li>बढ़ती id से range sharding सारी नई writes आख़िरी shard पर भेजती है; hashing writes बाँटती है पर range queries को scatter-gather बना देती है (shard-key puzzle)।</li>
<li>Hot key पर ध्यान दो (एक बहुत बड़ा customer): उसे और बाँटो, cache करो, या अपना अलग partition दो।</li>
<li>Follow-up: "बाद में re-shard कैसे करोगे?" Consistent hashing या कई छोटे logical partitions को physical nodes से map करो, फिर partitions हिलाओ, अलग-अलग keys नहीं।</li>
</ul>`,
        hg: `<ul>
<li>Achhi key: high cardinality, barabar spread, common queries mein maujood taaki zyadatar queries ek shard par jaayein.</li>
<li>Badhti id se range sharding saari nayi writes aakhri shard par bhejti hai; hashing writes baantti hai par range queries ko scatter-gather bana deti hai (shard-key puzzle).</li>
<li>Hot key par dhyan do (ek bahut bada customer): use aur baanto, cache karo, ya apna alag partition do.</li>
<li>Follow-up: "Baad mein re-shard kaise karoge?" Consistent hashing ya kai chhote logical partitions ko physical nodes se map karo, phir partitions hilao, alag-alag keys nahi.</li>
</ul>`
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
        en: `<ul>
<li>The ring puzzle shows modulo moving 15 of 20 keys when going from 3 to 4 nodes; for a cache that is a mass miss and a database stampede.</li>
<li>On a ring each node owns arcs; a key goes to the next point clockwise. Virtual nodes (many points per node) even out the load and let stronger machines take more points. Moved keys go only to the new node; 1/N is the expected share, and uneven arcs can give less (the ring puzzle shows 2 of 20).</li>
<li>Use a stable hash such as FNV-1a or Murmur; <code>string.GetHashCode()</code> differs per process in .NET.</li>
<li>Follow-up: "Does Redis Cluster use it?" No: it uses a fixed set of 16,384 hash slots that are assigned to nodes. Dynamo-style stores use rings. Name the idea, not the product, if unsure.</li>
</ul>`,
        hi: `<ul>
<li>Ring puzzle दिखाता है कि modulo में 3 से 4 nodes करने पर 20 में से 15 keys हिलती हैं; cache के लिए यह बड़े पैमाने का miss और database stampede है।</li>
<li>Ring पर हर node के arcs होते हैं; key अगले point पर clockwise जाती है। Virtual nodes (हर node के कई points) load बराबर करते हैं और ताक़तवर machines को ज़्यादा points दे सकते हैं। हिली हुई keys सिर्फ़ नए node पर जाती हैं; 1/N expected हिस्सा है, और असमान arcs से कम भी हो सकता है (ring puzzle में 20 में से 2)।</li>
<li>FNV-1a या Murmur जैसा stable hash use करो; .NET में <code>string.GetHashCode()</code> हर process में अलग होता है।</li>
<li>Follow-up: "क्या Redis Cluster यह use करता है?" नहीं: वह 16,384 fixed hash slots use करता है जो nodes को assign होते हैं। Dynamo-style stores rings use करते हैं। पक्का न हो तो product नहीं, idea का नाम बोलो।</li>
</ul>`,
        hg: `<ul>
<li>Ring puzzle dikhata hai ki modulo mein 3 se 4 nodes karne par 20 mein se 15 keys hilti hain; cache ke liye yeh bade pamane ka miss aur database stampede hai.</li>
<li>Ring par har node ke arcs hote hain; key agle point par clockwise jaati hai. Virtual nodes (har node ke kai points) load barabar karte hain aur taqatwar machines ko zyada points de sakte hain. Hili hui keys sirf naye node par jaati hain; 1/N expected hissa hai, aur asamaan arcs se kam bhi ho sakta hai (ring puzzle mein 20 mein se 2).</li>
<li>FNV-1a ya Murmur jaisa stable hash use karo; .NET mein <code>string.GetHashCode()</code> har process mein alag hota hai.</li>
<li>Follow-up: "Kya Redis Cluster yeh use karta hai?" Nahi: woh 16,384 fixed hash slots use karta hai jo nodes ko assign hote hain. Dynamo-style stores rings use karte hain. Pakka na ho to product nahi, idea ka naam bolo.</li>
</ul>`
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
        en: `<ul>
<li>301 (Moved Permanently): cheaper for you, good for SEO-style permanence, but you lose click counts and cannot easily change the target because clients remember it.</li>
<li>302 (Found, temporary): every click comes to you; analytics, expiry, A/B targets and takedowns work. Cost: more load, so the cache and rate limit matter.</li>
<li>307 and 308 are the method-preserving variants (temporary and permanent); for a GET redirect the practical choice is still permanent versus temporary.</li>
<li>Follow-up: "Can you keep analytics with 301?" Only if the click is counted before the redirect, which a cached 301 may skip, so not reliably (Cache-Control can limit 301 caching). Decide by the product need.</li>
</ul>`,
        hi: `<ul>
<li>301 (Moved Permanently): तुम्हारे लिए सस्ता, SEO-जैसी permanence के लिए अच्छा, पर click counts जाते हैं और target आसानी से नहीं बदल सकते क्योंकि clients याद रखते हैं।</li>
<li>302 (Found, temporary): हर click तुम्हारे पास आता है; analytics, expiry, A/B targets और takedowns चलते हैं। कीमत: ज़्यादा load, इसलिए cache और rate limit मायने रखते हैं।</li>
<li>307 और 308 method बचाने वाले variants हैं (temporary और permanent); GET redirect में असली choice फिर भी permanent बनाम temporary है।</li>
<li>Follow-up: "301 के साथ analytics रख सकते हो?" सिर्फ़ तब जब click redirect से पहले गिना जाए, जिसे cached 301 छोड़ सकता है, इसलिए पक्का नहीं (Cache-Control से 301 की caching सीमित हो सकती है)। Product की ज़रूरत से तय करो।</li>
</ul>`,
        hg: `<ul>
<li>301 (Moved Permanently): tumhare liye sasta, SEO-jaisi permanence ke liye achha, par click counts jaate hain aur target aasani se nahi badal sakte kyunki clients yaad rakhte hain.</li>
<li>302 (Found, temporary): har click tumhare paas aata hai; analytics, expiry, A/B targets aur takedowns chalte hain. Keemat: zyada load, isliye cache aur rate limit maayne rakhte hain.</li>
<li>307 aur 308 method bachane wale variants hain (temporary aur permanent); GET redirect mein asli choice phir bhi permanent vs temporary hai.</li>
<li>Follow-up: "301 ke saath analytics rakh sakte ho?" Sirf tab jab click redirect se pehle ginna jaaye, jise cached 301 chhod sakta hai, isliye pakka nahi (Cache-Control se 301 ki caching seemit ho sakti hai). Product ki zaroorat se tay karo.</li>
</ul>`
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
        en: `<ul>
<li>Counter + base62: unique by construction; servers lease id blocks (A: 1-1000, B: 1001-2000) so no database call per create. Downside: sequential, so guessable.</li>
<li>Hash of the long URL, truncated: the same URL gives the same code (dedupe), but truncation causes collisions, so you check and re-hash with a salt.</li>
<li>Random code: hard to guess; check uniqueness on insert (unique key) and retry on conflict. Longer codes make collisions rarer.</li>
<li>Snowflake-style 64-bit ids: timestamp + worker id + per-millisecond sequence. Roughly time-ordered, and no coordination per id once each worker has an id. Risks: clock skew or rollback, and handing out unique worker ids. Base62 of a 64-bit id is up to 11 characters.</li>
<li>Follow-up: "What if two users shorten the same URL?" Decide by product: share one code (hash-style) or give each user their own (counter or random). Base62 is an encoding, not security.</li>
</ul>`,
        hi: `<ul>
<li>Counter + base62: design से ही unique; servers id blocks lease करते हैं (A: 1-1000, B: 1001-2000) इसलिए हर create पर database call नहीं। कमी: sequential है, इसलिए guess हो सकती है।</li>
<li>Long URL का कटा हुआ hash: वही URL वही code देता है (dedupe), पर कटने से collisions होते हैं, इसलिए check करो और salt से दोबारा hash करो।</li>
<li>Random code: guess करना मुश्किल; insert पर uniqueness check (unique key) और conflict पर retry। लंबे codes में collisions कम होते हैं।</li>
<li>Snowflake-style 64-bit ids: timestamp + worker id + हर millisecond का sequence। लगभग time-ordered, और worker को id मिलने के बाद हर id पर coordination नहीं। Risks: clock skew या rollback, और unique worker ids बाँटना। 64-bit id का base62 अधिकतम 11 characters का होता है।</li>
<li>Follow-up: "दो users एक ही URL छोटा करें तो?" Product से तय करो: एक code साझा (hash-style) या हर user का अपना (counter या random)। Base62 encoding है, security नहीं।</li>
</ul>`,
        hg: `<ul>
<li>Counter + base62: design se hi unique; servers id blocks lease karte hain (A: 1-1000, B: 1001-2000) isliye har create par database call nahi. Kami: sequential hai, isliye guess ho sakti hai.</li>
<li>Long URL ka kata hua hash: wahi URL wahi code deta hai (dedupe), par katne se collisions hote hain, isliye check karo aur salt se dobara hash karo.</li>
<li>Random code: guess karna mushkil; insert par uniqueness check (unique key) aur conflict par retry. Lambe codes mein collisions kam hote hain.</li>
<li>Snowflake-style 64-bit ids: timestamp + worker id + har millisecond ka sequence. Lagbhag time-ordered, aur worker ko id milne ke baad har id par coordination nahi. Risks: clock skew ya rollback, aur unique worker ids baantna. 64-bit id ka base62 adhiktam 11 characters ka hota hai.</li>
<li>Follow-up: "Do users ek hi URL chhota karein to?" Product se tay karo: ek code saajha (hash-style) ya har user ka apna (counter ya random). Base62 encoding hai, security nahi.</li>
</ul>`
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
        en: `<ul>
<li>Duplicates are normal: providers retry webhooks, brokers redeliver, clients double-click. Aim for at-least-once delivery plus idempotent handling, not exactly-once.</li>
<li>Inbound: a unique index on the provider message id; the second insert fails and is skipped. Outbound: a stable id per notification used as the idempotency key (Day 13), stored with its status.</li>
<li>Order matters: mark "done" after the effect succeeded, ideally in the same transaction (inbox pattern, Day 16); marking first can lose a message.</li>
<li>Follow-up: "Provider has no idempotency key support?" Keep your own "sent" record keyed by message id and check it before sending; accept that a crash between send and record can still cause one duplicate, so make the message harmless to repeat.</li>
</ul>`,
        hi: `<ul>
<li>Duplicates आम हैं: providers webhooks retry करते हैं, brokers दोबारा deliver करते हैं, clients double-click करते हैं। लक्ष्य at-least-once delivery + idempotent handling है, exactly-once नहीं।</li>
<li>Inbound: provider message id पर unique index; दूसरा insert fail होकर skip हो जाता है। Outbound: हर notification का stable id idempotency key (Day 13) के रूप में, status के साथ store।</li>
<li>Order मायने रखता है: effect सफल होने के बाद "done" mark करो, बेहतर हो एक ही transaction में (inbox pattern, Day 16); पहले mark करने पर message खो सकता है।</li>
<li>Follow-up: "Provider idempotency key support नहीं करता?" अपना "sent" record message id से रखो और भेजने से पहले check करो; माने कि send और record के बीच crash से एक duplicate फिर भी हो सकता है, इसलिए message ऐसा रखो कि दोहराने पर नुकसान न हो।</li>
</ul>`,
        hg: `<ul>
<li>Duplicates aam hain: providers webhooks retry karte hain, brokers dobara deliver karte hain, clients double-click karte hain. Lakshya at-least-once delivery + idempotent handling hai, exactly-once nahi.</li>
<li>Inbound: provider message id par unique index; doosra insert fail hokar skip ho jaata hai. Outbound: har notification ka stable id idempotency key (Day 13) ke roop mein, status ke saath store.</li>
<li>Order maayne rakhta hai: effect safal hone ke baad "done" mark karo, behtar ho ek hi transaction mein (inbox pattern, Day 16); pehle mark karne par message kho sakta hai.</li>
<li>Follow-up: "Provider idempotency key support nahi karta?" Apna "sent" record message id se rakho aur bhejne se pehle check karo; maano ki send aur record ke beech crash se ek duplicate phir bhi ho sakta hai, isliye message aisa rakho ki dohrane par nuksaan na ho.</li>
</ul>`
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
        en: `<ul>
<li>Algorithms: fixed window (simple, double burst at the boundary), sliding window (smoother, more state), token bucket (rate plus burst, the puzzle), leaky bucket (smooth output). ASP.NET Core has built-in limiters (Day 13).</li>
<li>Respond with <code>429 Too Many Requests</code> and a <code>Retry-After</code> header. Choose the key carefully: per user, per API key, per IP (shared by many users behind one NAT).</li>
<li>Distributed: a shared store gives accuracy but adds a network hop and a new dependency; per-server limits (limit divided by server count) are cheaper and approximate. Decide what happens if the store is down (fail open or closed).</li>
<li>Follow-up: "Limit towards a provider?" The same bucket on the outbound side, with the queue waiting instead of rejecting, as in Design 2.</li>
</ul>`,
        hi: `<ul>
<li>Algorithms: fixed window (सरल, boundary पर double burst), sliding window (smooth, ज़्यादा state), token bucket (rate + burst, puzzle वाला), leaky bucket (smooth output)। ASP.NET Core में built-in limiters हैं (Day 13)।</li>
<li><code>429 Too Many Requests</code> और <code>Retry-After</code> header के साथ जवाब दो। Key सोचकर चुनो: per user, per API key, per IP (एक NAT के पीछे कई users एक IP साझा करते हैं)।</li>
<li>Distributed: shared store से accuracy मिलती है पर एक network hop और नई dependency आती है; per-server limits (limit को servers की संख्या से बाँटो) सस्ती और approximate हैं। तय करो store down हो तो क्या हो (fail open या closed)।</li>
<li>Follow-up: "Provider की तरफ़ limit?" Outbound side पर वही bucket, जिसमें queue reject करने की जगह इंतज़ार करती है, जैसे Design 2 में।</li>
</ul>`,
        hg: `<ul>
<li>Algorithms: fixed window (saral, boundary par double burst), sliding window (smooth, zyada state), token bucket (rate + burst, puzzle wala), leaky bucket (smooth output). ASP.NET Core mein built-in limiters hain (Day 13).</li>
<li><code>429 Too Many Requests</code> aur <code>Retry-After</code> header ke saath jawab do. Key soch kar chuno: per user, per API key, per IP (ek NAT ke peeche kai users ek IP saajha karte hain).</li>
<li>Distributed: shared store se accuracy milti hai par ek network hop aur nayi dependency aati hai; per-server limits (limit ko servers ki sankhya se baanto) saste aur approximate hain. Tay karo store down ho to kya ho (fail open ya closed).</li>
<li>Follow-up: "Provider ki taraf limit?" Outbound side par wahi bucket, jisme queue reject karne ki jagah intezaar karti hai, jaise Design 2 mein.</li>
</ul>`
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
        en: `<ul>
<li>Place order: save the Order and an outbox row in one local transaction; the relay publishes <code>OrderPlaced</code>; Inventory reserves stock; Payments charges; the saga confirms or compensates (Day 16 has the details and code).</li>
<li>Every consumer is idempotent; the create API takes an idempotency key (Day 13). The Order aggregate guards its own rules (Day 15).</li>
<li>Be honest about eventual consistency: "order received" is shown first, "confirmed" later. Add timeouts and alerts for stuck sagas.</li>
<li>Follow-up: "Why not one database transaction?" Services own separate databases, and holding locks across a network call hurts availability. For a small team a modular monolith with one database is a valid start (Day 15).</li>
</ul>`,
        hi: `<ul>
<li>Order लगाना: Order और एक outbox row एक local transaction में save; relay <code>OrderPlaced</code> publish करता है; Inventory stock reserve करती है; Payments charge करती है; saga confirm या compensate करता है (Day 16 में details और code हैं)।</li>
<li>हर consumer idempotent है; create API idempotency key लेती है (Day 13)। Order aggregate अपने rules खुद संभालता है (Day 15)।</li>
<li>Eventual consistency के बारे में ईमानदार रहो: पहले "order received" दिखता है, बाद में "confirmed"। अटकी sagas के लिए timeouts और alerts लगाओ।</li>
<li>Follow-up: "एक database transaction क्यों नहीं?" Services के अलग databases हैं, और network call के पार locks पकड़ना availability बिगाड़ता है। छोटी team के लिए एक database वाला modular monolith सही शुरुआत है (Day 15)।</li>
</ul>`,
        hg: `<ul>
<li>Order lagana: Order aur ek outbox row ek local transaction mein save; relay <code>OrderPlaced</code> publish karta hai; Inventory stock reserve karti hai; Payments charge karti hai; saga confirm ya compensate karta hai (Day 16 mein details aur code hain).</li>
<li>Har consumer idempotent hai; create API idempotency key leti hai (Day 13). Order aggregate apne rules khud sambhalta hai (Day 15).</li>
<li>Eventual consistency ke baare mein imaandar raho: pehle "order received" dikhta hai, baad mein "confirmed". Atki sagas ke liye timeouts aur alerts lagao.</li>
<li>Follow-up: "Ek database transaction kyon nahi?" Services ke alag databases hain, aur network call ke paar locks pakadna availability bigaadta hai. Chhoti team ke liye ek database wala modular monolith sahi shuruaat hai (Day 15).</li>
</ul>`
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
        en: `<ul>
<li>Causes: replication lag (replicas apply changes slightly later), a cached copy not invalidated (see the cache-aside puzzle), or a CDN or browser cache.</li>
<li>Fixes: read-your-writes (send that user's reads to the primary for a few seconds, or pass a version or timestamp token), delete the cache key on write, shorter TTL for fast-changing data.</li>
<li>Decide per screen: a profile page needs read-your-writes; a public product list can be a few seconds stale.</li>
<li>Follow-up: "Does a stronger consistency setting fix it?" Yes, at a latency cost (PACELC): reading from the primary or waiting for replicas is slower. Pay it only where users notice.</li>
</ul>`,
        hi: `<ul>
<li>वजहें: replication lag (replicas changes थोड़ी देर से apply करती हैं), invalidate न हुई cached copy (cache-aside puzzle देखो), या CDN या browser cache।</li>
<li>Fixes: read-your-writes (उस user की reads कुछ seconds primary पर भेजो, या version या timestamp token दो), write पर cache key delete करो, तेज़ी से बदलने वाले data के लिए छोटा TTL।</li>
<li>हर screen पर तय करो: profile page को read-your-writes चाहिए; public product list कुछ seconds stale चल सकती है।</li>
<li>Follow-up: "क्या मज़बूत consistency setting से ठीक होगा?" हाँ, latency की कीमत पर (PACELC): primary से पढ़ना या replicas का इंतज़ार धीमा है। कीमत वहीं दो जहाँ users को फ़र्क़ दिखे।</li>
</ul>`,
        hg: `<ul>
<li>Wajahein: replication lag (replicas changes thodi der se apply karti hain), invalidate na hui cached copy (cache-aside puzzle dekho), ya CDN ya browser cache.</li>
<li>Fixes: read-your-writes (us user ki reads kuch seconds primary par bhejo, ya version ya timestamp token do), write par cache key delete karo, tezi se badalne wale data ke liye chhota TTL.</li>
<li>Har screen par tay karo: profile page ko read-your-writes chahiye; public product list kuch seconds stale chal sakti hai.</li>
<li>Follow-up: "Kya mazboot consistency setting se theek hoga?" Haan, latency ki keemat par (PACELC): primary se padhna ya replicas ka intezaar dheema hai. Keemat wahin do jahan users ko fark dikhe.</li>
</ul>`
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
        en: `<ul>
<li>The stampede: thousands of requests miss at the same moment and all hit the database. Day 13 covers it with HybridCache, which coalesces concurrent requests for the same key.</li>
<li>Mitigations: single-flight (one loader, others wait), random jitter on TTLs so keys do not expire together, background refresh or "serve stale while revalidating", and a rate limit or circuit breaker in front of the database.</li>
<li>Pre-warm known hot keys (for example a sale page) before a big event.</li>
<li>Follow-up: "What about a key that is hot all the time?" Keep a short-lived copy in each app instance (local cache) in front of Redis, and consider splitting the key into several copies.</li>
</ul>`,
        hi: `<ul>
<li>Stampede: हज़ारों requests एक ही पल में miss होकर सब database पर पहुँचती हैं। Day 13 में HybridCache के साथ इसे देखा था, जो एक ही key की concurrent requests को coalesce करता है।</li>
<li>Mitigations: single-flight (एक loader, बाकी इंतज़ार), TTLs पर random jitter ताकि keys साथ में expire न हों, background refresh या "revalidate करते समय stale दो", और database के आगे rate limit या circuit breaker।</li>
<li>बड़े event (जैसे sale page) से पहले जानी-पहचानी hot keys को pre-warm करो।</li>
<li>Follow-up: "हर समय hot रहने वाली key का क्या?" Redis के आगे हर app instance में छोटी उम्र की copy (local cache) रखो, और key को कई copies में बाँटने पर सोचो।</li>
</ul>`,
        hg: `<ul>
<li>Stampede: hazaaron requests ek hi pal mein miss hokar sab database par pahunchti hain. Day 13 mein HybridCache ke saath ise dekha tha, jo ek hi key ki concurrent requests ko coalesce karta hai.</li>
<li>Mitigations: single-flight (ek loader, baaki intezaar), TTLs par random jitter taaki keys saath mein expire na hon, background refresh ya "revalidate karte samay stale do", aur database ke aage rate limit ya circuit breaker.</li>
<li>Bade event (jaise sale page) se pehle jaani-pehchani hot keys ko pre-warm karo.</li>
<li>Follow-up: "Har samay hot rehne wali key ka kya?" Redis ke aage har app instance mein chhoti umr ki copy (local cache) rakho, aur key ko kai copies mein baantne par socho.</li>
</ul>`
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
        en: `<ul>
<li>Prepare it in advance using the template and labelled sample in the story section. The sample is only a shape; fill the blanks with your own real project, even a small one.</li>
<li>Include one numbered estimate, one trade-off ("I chose a queue over a direct call because ... the cost was eventual consistency") and one failure mode you handled.</li>
<li>Never invent details; interviewers ask follow-ups ("why not X?", "what broke?") and consistency is checked. If you lack a story, say so and present a clearly labelled "how I would design it".</li>
<li>Follow-up: "What would you change today?" Have one honest reflection ready: it shows judgement, which is what a Tech Lead is hired for.</li>
</ul>`,
        hi: `<ul>
<li>Story section के template और labelled sample से पहले से तैयारी करो। Sample सिर्फ़ shape है; blanks अपने असली project से भरो, छोटा भी चलेगा।</li>
<li>एक numbers वाला estimate, एक trade-off ("मैंने direct call की जगह queue चुनी क्योंकि ... कीमत eventual consistency थी") और एक failure mode जो तुमने संभाला, ज़रूर रखो।</li>
<li>कभी details गढ़ो मत; interviewer follow-ups पूछते हैं ("X क्यों नहीं?", "क्या टूटा?") और consistency जाँची जाती है। Story न हो तो साफ़ कहो और साफ़ labelled "मैं इसे कैसे design करता" बताओ।</li>
<li>Follow-up: "आज क्या बदलोगे?" एक ईमानदार reflection तैयार रखो: यह judgement दिखाता है, और Tech Lead इसी के लिए रखा जाता है।</li>
</ul>`,
        hg: `<ul>
<li>Story section ke template aur labelled sample se pehle se taiyaari karo. Sample sirf shape hai; blanks apne asli project se bharo, chhota bhi chalega.</li>
<li>Ek numbers wala estimate, ek trade-off ("maine direct call ki jagah queue chuni kyunki ... keemat eventual consistency thi") aur ek failure mode jo tumne sambhala, zaroor rakho.</li>
<li>Kabhi details gadho mat; interviewer follow-ups poochte hain ("X kyon nahi?", "kya toota?") aur consistency jaanchi jaati hai. Story na ho to saaf kaho aur saaf labelled "main ise kaise design karta" batao.</li>
<li>Follow-up: "Aaj kya badloge?" Ek imaandar reflection taiyaar rakho: yeh judgement dikhata hai, aur Tech Lead isi ke liye rakha jaata hai.</li>
</ul>`
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
        en: `<ul>
<li>Interviewers reward reasoning, not buzzwords. Say what each split buys (independent scaling, ownership, isolation) and what it costs (network failures, no shared transaction, observability, on-call; Days 15 and 16).</li>
<li>Natural early boundaries: an async, spiky part (notifications), a part with very different scaling (media processing), a part owned by another team.</li>
<li>Show the evolution path: modular monolith now, extract the notification worker first because it is queue-driven and loosely coupled, later split more if the numbers demand it.</li>
<li>Follow-up: "What is a distributed monolith?" Services that must be deployed together or share a database; you pay microservice costs without independence (Day 16).</li>
</ul>`,
        hi: `<ul>
<li>Interviewer reasoning को reward करते हैं, buzzwords को नहीं। बताओ हर split क्या देता है (independent scaling, ownership, isolation) और क्या लेता है (network failures, shared transaction नहीं, observability, on-call; Days 15 और 16)।</li>
<li>शुरुआती natural boundaries: async और spiky हिस्सा (notifications), बहुत अलग scaling वाला हिस्सा (media processing), दूसरी team का हिस्सा।</li>
<li>Evolution path दिखाओ: अभी modular monolith, पहले notification worker निकालो क्योंकि वह queue-driven और loosely coupled है, बाद में numbers माँगें तो और split।</li>
<li>Follow-up: "Distributed monolith क्या है?" ऐसी services जो साथ में deploy होनी पड़ें या database साझा करें; microservice की कीमतें बिना independence के (Day 16)।</li>
</ul>`,
        hg: `<ul>
<li>Interviewer reasoning ko reward dete hain, buzzwords ko nahi. Batao har split kya deta hai (independent scaling, ownership, isolation) aur kya leta hai (network failures, shared transaction nahi, observability, on-call; Days 15 aur 16).</li>
<li>Shuruaati natural boundaries: async aur spiky hissa (notifications), bahut alag scaling wala hissa (media processing), doosri team ka hissa.</li>
<li>Evolution path dikhao: abhi modular monolith, pehle notification worker nikalo kyunki woh queue-driven aur loosely coupled hai, baad mein numbers maangein to aur split.</li>
<li>Follow-up: "Distributed monolith kya hai?" Aisi services jo saath mein deploy honi padein ya database saajha karein; microservice ki keematein bina independence ke (Day 16).</li>
</ul>`
      }
    }
  ],
  puzzles: [
    {
      id: "capacity-estimate-rounding",
      src: `const long SecondsPerMonth = 30 * 24 * 60 * 60;
const long NewUrlsPerMonth = 100_000_000;
const int ReadsPerWrite = 100;
const long BytesPerRecord = 500;

long writesPerSec = NewUrlsPerMonth / SecondsPerMonth;
long readsFromRoundedWrites = writesPerSec * ReadsPerWrite;
long readsPerSec = NewUrlsPerMonth * ReadsPerWrite / SecondsPerMonth;
long peakReads = readsPerSec * 2;
long records5y = NewUrlsPerMonth * 12 * 5;
long storageGb = records5y * BytesPerRecord / 1_000_000_000;
long readKbPerSec = readsPerSec * BytesPerRecord / 1_000;

Console.WriteLine($"writes/s: {writesPerSec}");
Console.WriteLine($"reads/s (round first): {readsFromRoundedWrites}");
Console.WriteLine($"reads/s (round last): {readsPerSec}");
Console.WriteLine($"peak reads/s: {peakReads}");
Console.WriteLine($"5y storage: {storageGb} GB");
Console.WriteLine($"read bandwidth: {readKbPerSec} KB/s");`,
      answer: `writes/s: 38
reads/s (round first): 3800
reads/s (round last): 3858
peak reads/s: 7716
5y storage: 3000 GB
read bandwidth: 1929 KB/s`,
      explain: {
        en: `<ul>
<li>100 million per month over 2,592,000 seconds is 38.58 writes per second; <code>long</code> division truncates it to <b>38</b>.</li>
<li>Rounding <b>first</b> and then multiplying by 100 gives 3,800 reads/s. Multiplying first and dividing last gives <b>3,858</b>. Keep full precision as long as you can and round only at the end (in an interview, say "about 4,000").</li>
<li>Peak = average x 2 is a common rule of thumb: 7,716 reads/s. Size for peak, not for average.</li>
<li>Storage: 100M x 12 months x 5 years = 6 billion records; x 500 bytes = 3,000 GB = 3 TB (decimal units; about 9 TB with 3 copies). Bandwidth: 3,858 x 500 bytes is about 1.9 MB/s, tiny for one server.</li>
<li>Lesson: the arithmetic is easy; the value is stating your assumptions aloud and seeing that reads, not storage, drive this design.</li>
</ul>`,
        hi: `<ul>
<li>हर महीने 100 million, 2,592,000 seconds में बँटे तो 38.58 writes per second आते हैं; <code>long</code> division इसे <b>38</b> पर काट देता है।</li>
<li>पहले round करके फिर 100 से गुणा करो तो 3,800 reads/s आता है। पहले गुणा और आख़िर में divide करो तो <b>3,858</b>। जितना हो सके पूरी precision रखो और round सिर्फ़ आख़िर में करो (interview में बोलो "लगभग 4,000")।</li>
<li>Peak = average x 2 एक आम rule of thumb है: 7,716 reads/s। Size peak के हिसाब से करो, average से नहीं।</li>
<li>Storage: 100M x 12 महीने x 5 साल = 6 billion records; x 500 bytes = 3,000 GB = 3 TB (decimal units; 3 copies के साथ लगभग 9 TB)। Bandwidth: 3,858 x 500 bytes लगभग 1.9 MB/s है, एक server के लिए बहुत छोटा।</li>
<li>Lesson: हिसाब आसान है; असली value यह है कि तुम assumptions ज़ोर से बोलो और देखो कि इस design को reads चलाते हैं, storage नहीं।</li>
</ul>`,
        hg: `<ul>
<li>Har mahine 100 million, 2,592,000 seconds mein banten to 38.58 writes per second aate hain; <code>long</code> division ise <b>38</b> par kaat deta hai.</li>
<li>Pehle round karke phir 100 se guna karo to 3,800 reads/s aata hai. Pehle guna aur aakhir mein divide karo to <b>3,858</b>. Jitna ho sake poori precision rakho aur round sirf aakhir mein karo (interview mein bolo "lagbhag 4,000").</li>
<li>Peak = average x 2 ek aam rule of thumb hai: 7,716 reads/s. Size peak ke hisaab se karo, average se nahi.</li>
<li>Storage: 100M x 12 mahine x 5 saal = 6 billion records; x 500 bytes = 3,000 GB = 3 TB (decimal units; about 9 TB with 3 copies). Bandwidth: 3,858 x 500 bytes lagbhag 1.9 MB/s hai, ek server ke liye bahut chhota.</li>
<li>Lesson: hisaab aasan hai; asli value yeh hai ki tum assumptions zor se bolo aur dekho ki is design ko reads chalate hain, storage nahi.</li>
</ul>`
      }
    },
    {
      id: "id-blocks-base62",
      src: `const string Alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

string Encode(long n)
{
    if (n == 0) return "0";
    var chars = new Stack<char>();
    while (n > 0) { chars.Push(Alphabet[(int)(n % 62)]); n /= 62; }
    return new string(chars.ToArray());
}

var blockA = new IdBlock(1, 1000);
var blockB = new IdBlock(1001, 2000);
var requests = new[] { "A", "B", "A", "A", "B", "B" };
var codes = new List<string>();
foreach (var server in requests)
{
    var id = server == "A" ? blockA.Next() : blockB.Next();
    codes.Add(Encode(id));
    Console.WriteLine($"{server} -> {id} -> {Encode(id)}");
}
Console.WriteLine("unique: " + (codes.Distinct().Count() == codes.Count));
Console.WriteLine("62^3 = " + (long)Math.Pow(62, 3));
Console.WriteLine("code(3844) = " + Encode(3844) + ", code(61) = " + Encode(61));

class IdBlock(long first, long last)
{
    private long _next = first;
    public long Next() => _next <= last ? _next++ : throw new InvalidOperationException("block used up, ask the database for a new one");
}`,
      answer: `A -> 1 -> 1
B -> 1001 -> g9
A -> 2 -> 2
A -> 3 -> 3
B -> 1002 -> ga
B -> 1003 -> gb
unique: True
62^3 = 238328
code(3844) = 100, code(61) = Z`,
      explain: {
        en: `<ul>
<li>Each app server owns a <b>block</b> of ids (A: 1-1000, B: 1001-2000) leased from the database once, then hands out ids from memory. No database call per URL, and the two servers cannot collide.</li>
<li>Base62 uses 0-9, a-z, A-Z. 1001 = 16 x 62 + 9, so it is <code>g9</code> (a=10 ... g=16). 61 is the last symbol <code>Z</code>; 62 rolls over to <code>10</code>, and 3,844 (62 squared) is <code>100</code>.</li>
<li>Ids from different servers are <b>not in time order</b> across servers; that is fine for short codes. If a server crashes, its unused ids are skipped, which is also fine (gaps are cheap).</li>
<li>Capacity: 62^3 = 238,328 codes; 62^7 is about 3.5 trillion, so 7 characters cover a very large service.</li>
<li>Trade-off: sequential ids are guessable (people can walk through every link). If links must be unguessable, shuffle or encrypt the id before encoding, or use random codes with a uniqueness check.</li>
</ul>`,
        hi: `<ul>
<li>हर app server के पास ids का एक <b>block</b> है (A: 1-1000, B: 1001-2000) जो database से एक बार lease होता है, फिर server memory से ids बाँटता है। हर URL पर database call नहीं, और दोनों servers आपस में टकराते नहीं।</li>
<li>Base62 में 0-9, a-z, A-Z होते हैं। 1001 = 16 x 62 + 9, इसलिए यह <code>g9</code> है (a=10 ... g=16)। 61 आख़िरी symbol <code>Z</code> है; 62 पर <code>10</code> बन जाता है, और 3,844 (62 का square) <code>100</code> है।</li>
<li>अलग servers की ids आपस में <b>time order में नहीं</b> होतीं; short codes के लिए यह ठीक है। Server crash हो तो उसकी बची ids छूट जाती हैं, यह भी ठीक है (gaps सस्ते हैं)।</li>
<li>Capacity: 62^3 = 238,328 codes; 62^7 लगभग 3.5 trillion है, इसलिए 7 characters बहुत बड़ी service के लिए काफ़ी हैं।</li>
<li>Trade-off: sequential ids guess हो सकती हैं (लोग हर link पर चल सकते हैं)। Links unguessable चाहिए तो id को encode करने से पहले shuffle या encrypt करो, या random codes लो और uniqueness check करो।</li>
</ul>`,
        hg: `<ul>
<li>Har app server ke paas ids ka ek <b>block</b> hai (A: 1-1000, B: 1001-2000) jo database se ek baar lease hota hai, phir server memory se ids baantta hai. Har URL par database call nahi, aur dono servers aapas mein takrate nahi.</li>
<li>Base62 mein 0-9, a-z, A-Z hote hain. 1001 = 16 x 62 + 9, isliye yeh <code>g9</code> hai (a=10 ... g=16). 61 aakhri symbol <code>Z</code> hai; 62 par <code>10</code> ban jaata hai, aur 3,844 (62 ka square) <code>100</code> hai.</li>
<li>Alag servers ki ids aapas mein <b>time order mein nahi</b> hoti; short codes ke liye yeh theek hai. Server crash ho to uski bachi ids chhoot jaati hain, yeh bhi theek hai (gaps saste hain).</li>
<li>Capacity: 62^3 = 238,328 codes; 62^7 lagbhag 3.5 trillion hai, isliye 7 characters bahut badi service ke liye kaafi hain.</li>
<li>Trade-off: sequential ids guess ho sakti hain (log har link par chal sakte hain). Links unguessable chahiye to id ko encode karne se pehle shuffle ya encrypt karo, ya random codes lo aur uniqueness check karo.</li>
</ul>`
      }
    },
    {
      id: "modulo-vs-ring-rebalance",
      src: `static uint Fnv(string s)
{
    uint h = 2166136261;
    foreach (var b in System.Text.Encoding.UTF8.GetBytes(s)) { h ^= b; h *= 16777619; }
    return h;
}

var keys = Enumerable.Range(1, 20).Select(i => "user-" + i).ToList();

string Mod(string key, int nodes) => "N" + (Fnv(key) % nodes);

var ring3 = new Ring(["N0", "N1", "N2"], 20);
var ring4 = new Ring(["N0", "N1", "N2", "N3"], 20);

int modMoved = keys.Count(k => Mod(k, 3) != Mod(k, 4));
var ringMoved = keys.Where(k => ring3.Find(k) != ring4.Find(k)).ToList();
Console.WriteLine($"modulo moved: {modMoved} of {keys.Count}");
Console.WriteLine($"ring moved: {ringMoved.Count} of {keys.Count}");
Console.WriteLine("all ring moves went to N3: " + ringMoved.All(k => ring4.Find(k) == "N3"));

class Ring
{
    private readonly SortedDictionary<uint, string> _points = new();
    private readonly uint[] _sorted;
    public Ring(string[] nodes, int virtualNodes)
    {
        foreach (var n in nodes)
            for (var v = 0; v < virtualNodes; v++) _points[Fnv(n + "#" + v)] = n;
        _sorted = _points.Keys.ToArray();
    }
    public string Find(string key)
    {
        var h = Fnv(key);
        var i = Array.BinarySearch(_sorted, h);
        if (i < 0) i = ~i;
        if (i == _sorted.Length) i = 0;
        return _points[_sorted[i]];
    }
    static uint Fnv(string s)
    {
        uint h = 2166136261;
        foreach (var b in System.Text.Encoding.UTF8.GetBytes(s)) { h ^= b; h *= 16777619; }
        return h;
    }
}`,
      answer: `modulo moved: 15 of 20
ring moved: 2 of 20
all ring moves went to N3: True`,
      explain: {
        en: `<ul>
<li>The hash is <b>FNV-1a</b>, written by hand. <code>string.GetHashCode()</code> is randomised per process in .NET, so it must not decide which node owns a key.</li>
<li>With <code>hash % nodes</code>, going from 3 to 4 nodes changes the divisor, so most keys change owner: 15 of 20 here (about 3 out of 4 in general). A cache would lose most of its entries at once.</li>
<li>On the <b>ring</b>, each node has 20 points (virtual nodes). A key belongs to the first point clockwise from its hash. Adding N3 only takes the keys that fall just before N3's new points: 2 of 20 here.</li>
<li>Every key that moved went to the <b>new</b> node; no key moved between old nodes. That is the guarantee: moved keys go only to the new node. The expected share moved is about 1/N (a quarter here), but uneven arcs can give less, as the 2 of 20 shows.</li>
<li>Virtual nodes smooth the distribution; with very few points one node can own a big arc. The exact "2" depends on the hash and the points, so do not quote it as a rule.</li>
</ul>`,
        hi: `<ul>
<li>Hash हाथ से लिखा <b>FNV-1a</b> है। .NET में <code>string.GetHashCode()</code> हर process में randomise होता है, इसलिए key का owner node तय करने के लिए उसे use मत करो।</li>
<li><code>hash % nodes</code> में 3 से 4 nodes करने पर divisor बदल जाता है, इसलिए ज़्यादातर keys का owner बदल जाता है: यहाँ 20 में से 15 (आम तौर पर चार में से लगभग तीन)। Cache की ज़्यादातर entries एक साथ चली जाएँगी।</li>
<li><b>Ring</b> पर हर node के 20 points (virtual nodes) हैं। Key उस पहले point की है जो उसके hash से clockwise मिले। N3 जोड़ने पर सिर्फ़ वही keys जाती हैं जो N3 के नए points से ठीक पहले गिरती हैं: यहाँ 20 में से 2।</li>
<li>जो हर key हिली वह <b>नए</b> node पर गई; कोई key पुराने nodes के बीच नहीं हिली। यही guarantee है: हिली हुई keys सिर्फ़ नए node पर जाती हैं। हिलने वाला expected हिस्सा लगभग 1/N है (यहाँ एक चौथाई), पर असमान arcs से कम भी हो सकता है, जैसे यहाँ 20 में से 2।</li>
<li>Virtual nodes distribution को smooth करते हैं; बहुत कम points हों तो एक node बड़े arc का मालिक बन सकता है। यहाँ का "2" hash और points पर निर्भर है, इसे rule की तरह मत बोलो।</li>
</ul>`,
        hg: `<ul>
<li>Hash haath se likha <b>FNV-1a</b> hai. .NET mein <code>string.GetHashCode()</code> har process mein randomise hota hai, isliye key ka owner node tay karne ke liye ise use mat karo.</li>
<li><code>hash % nodes</code> mein 3 se 4 nodes karne par divisor badal jaata hai, isliye zyadatar keys ka owner badal jaata hai: yahan 20 mein se 15 (aam taur par chaar mein se lagbhag teen). Cache ki zyadatar entries ek saath chali jaengi.</li>
<li><b>Ring</b> par har node ke 20 points (virtual nodes) hain. Key us pehle point ki hai jo uske hash se clockwise mile. N3 jodne par sirf wahi keys jaati hain jo N3 ke naye points se theek pehle girti hain: yahan 20 mein se 2.</li>
<li>Jo har key hili woh <b>naye</b> node par gayi; koi key purane nodes ke beech nahi hili. Yahi guarantee hai: hili hui keys sirf naye node par jaati hain. Hilne wala expected hissa lagbhag 1/N hai (yahan ek chauthai), par asamaan arcs se kam bhi ho sakta hai, jaise yahan 20 mein se 2.</li>
<li>Virtual nodes distribution ko smooth karte hain; bahut kam points hon to ek node bade arc ka malik ban sakta hai. Yahan ka "2" hash aur points par depend karta hai, ise rule ki tarah mat bolo.</li>
</ul>`
      }
    },
    {
      id: "cache-aside-stale-and-ttl",
      src: `var clock = new FakeClock();
var db = new Dictionary<string, string> { ["p1"] = "v1" };
var cache = new Cache(clock, ttlSeconds: 60);
int hits = 0, misses = 0;

string Get(string key)
{
    if (cache.TryGet(key, out var cached)) { hits++; return cached; }
    misses++;
    var value = db[key];
    cache.Set(key, value);
    return value;
}

Console.WriteLine("t=0   " + Get("p1"));
Console.WriteLine("t=10  " + Step(10, () => Get("p1")));
db["p1"] = "v2";
Console.WriteLine("t=20  " + Step(10, () => Get("p1")) + " (db is v2, no invalidation)");
cache.Remove("p1");
Console.WriteLine("t=30  " + Step(10, () => Get("p1")) + " (after Remove)");
Console.WriteLine("t=89  " + Step(59, () => Get("p1")));
Console.WriteLine("t=91  " + Step(2, () => Get("p1")) + " (TTL passed)");
Console.WriteLine($"hits={hits} misses={misses}");

string Step(int seconds, Func<string> f) { clock.Now += seconds; return f(); }

class FakeClock { public int Now; }
class Cache(FakeClock clock, int ttlSeconds)
{
    private readonly Dictionary<string, (string Value, int ExpiresAt)> _items = new();
    public bool TryGet(string key, out string value)
    {
        if (_items.TryGetValue(key, out var e) && e.ExpiresAt > clock.Now) { value = e.Value; return true; }
        value = ""; return false;
    }
    public void Set(string key, string value) => _items[key] = (value, clock.Now + ttlSeconds);
    public void Remove(string key) => _items.Remove(key);
}`,
      answer: `t=0   v1
t=10  v1
t=20  v1 (db is v2, no invalidation)
t=30  v2 (after Remove)
t=89  v2
t=91  v2 (TTL passed)
hits=3 misses=3`,
      explain: {
        en: `<ul>
<li>t=0: miss, load <code>v1</code> from the database, cache it with a 60 s TTL. t=10: hit.</li>
<li>The database changes to <code>v2</code>, but nobody tells the cache. t=20 is a <b>hit that returns stale data</b>. A TTL alone means "stale for up to 60 seconds".</li>
<li>t=30: after an explicit <code>Remove</code> (invalidate on write) the next read is a miss and loads <code>v2</code>; the new entry expires at t=90.</li>
<li>t=89: still a hit (the entry is valid until t=90). t=91: the entry expired, so a miss again. Totals: 3 hits, 3 misses.</li>
<li>Take-away: cache-aside = read: check the cache, else load and fill; write: update the database, then <b>delete</b> the key. Keep a TTL as a safety net. Many readers missing at once is the stampede from Day 13; add jitter or request coalescing (Day 13 has HybridCache).</li>
</ul>`,
        hi: `<ul>
<li>t=0: miss, database से <code>v1</code> load किया, 60 s TTL के साथ cache किया। t=10: hit।</li>
<li>Database <code>v2</code> हो गया, पर cache को किसी ने बताया नहीं। t=20 एक <b>hit है जो stale data देता है</b>। सिर्फ़ TTL का मतलब है "60 seconds तक stale"।</li>
<li>t=30: साफ़ <code>Remove</code> (write पर invalidate) के बाद अगली read miss है और <code>v2</code> load होता है; नई entry t=90 पर expire होती है।</li>
<li>t=89: अभी भी hit (entry t=90 तक valid है)। t=91: entry expire हो गई, इसलिए फिर miss। Totals: 3 hits, 3 misses।</li>
<li>Take-away: cache-aside = read: cache देखो, नहीं तो load करके भरो; write: database update करो, फिर key <b>delete</b> करो। Safety net के लिए TTL रखो। बहुत सारे readers का एक साथ miss होना Day 13 वाला stampede है; jitter या request coalescing लगाओ (Day 13 में HybridCache है)।</li>
</ul>`,
        hg: `<ul>
<li>t=0: miss, database se <code>v1</code> load kiya, 60 s TTL ke saath cache kiya. t=10: hit.</li>
<li>Database <code>v2</code> ho gaya, par cache ko kisi ne bataya nahi. t=20 ek <b>hit hai jo stale data deta hai</b>. Sirf TTL ka matlab hai "60 seconds tak stale".</li>
<li>t=30: saaf <code>Remove</code> (write par invalidate) ke baad agli read miss hai aur <code>v2</code> load hota hai; nayi entry t=90 par expire hoti hai.</li>
<li>t=89: abhi bhi hit (entry t=90 tak valid hai). t=91: entry expire ho gayi, isliye phir miss. Totals: 3 hits, 3 misses.</li>
<li>Take-away: cache-aside = read: cache dekho, nahi to load karke bharo; write: database update karo, phir key <b>delete</b> karo. Safety net ke liye TTL rakho. Bahut saare readers ka ek saath miss hona Day 13 wala stampede hai; jitter ya request coalescing lagao (Day 13 mein HybridCache hai).</li>
</ul>`
      }
    },
    {
      id: "token-bucket-fake-clock",
      src: `var limiter = new TokenBucket(capacity: 3, refillPerSecond: 1);
var calls = new (int AtMs, string Id)[]
{
    (0, "a"), (0, "b"), (0, "c"), (0, "d"),
    (500, "e"), (1000, "f"), (1000, "g"), (2500, "h"), (10_000, "i"), (10_000, "j"), (10_000, "k"), (10_000, "l")
};
foreach (var (at, id) in calls)
    Console.WriteLine($"{at,5} ms {id}: {(limiter.TryTake(at) ? "allowed" : "rejected 429")}");

class TokenBucket(int capacity, int refillPerSecond)
{
    // tokens are stored in milli-tokens so the maths stays in integers
    private long _milli = capacity * 1000L;
    private int _lastMs;
    public bool TryTake(int nowMs)
    {
        _milli = Math.Min(capacity * 1000L, _milli + (nowMs - _lastMs) * (long)refillPerSecond);
        _lastMs = nowMs;
        if (_milli < 1000) return false;
        _milli -= 1000;
        return true;
    }
}`,
      answer: `    0 ms a: allowed
    0 ms b: allowed
    0 ms c: allowed
    0 ms d: rejected 429
  500 ms e: rejected 429
 1000 ms f: allowed
 1000 ms g: rejected 429
 2500 ms h: allowed
10000 ms i: allowed
10000 ms j: allowed
10000 ms k: allowed
10000 ms l: rejected 429`,
      explain: {
        en: `<ul>
<li>The bucket holds up to 3 tokens and refills 1 token per second; every request costs one token. The "clock" is just the number we pass in, so the output is deterministic.</li>
<li>At 0 ms the full bucket serves a, b, c (a <b>burst</b> of 3); d finds it empty and gets 429.</li>
<li>At 500 ms only half a token has come back (500 milli-tokens), so e is rejected. At 1000 ms one whole token is there: f is allowed, g is not.</li>
<li>At 2500 ms 1.5 tokens have refilled since 1000 ms: h is allowed and half a token is left over.</li>
<li>After a long quiet gap (10 s) the bucket refills but is <b>capped at capacity</b>: only 3 requests (i, j, k) pass in the burst, l is rejected. Without the cap, idle time would store up unlimited burst credit.</li>
<li>In ASP.NET Core you would use the built-in rate limiter (Day 13); across several servers the counters must live in a shared store such as Redis, or each server enforces its own share.</li>
</ul>`,
        hi: `<ul>
<li>Bucket में ज़्यादा से ज़्यादा 3 tokens हैं और हर second 1 token वापस भरता है; हर request एक token लेती है। "Clock" बस वही number है जो हम pass करते हैं, इसलिए output deterministic है।</li>
<li>0 ms पर भरा bucket a, b, c को serve करता है (3 का <b>burst</b>); d को खाली मिलता है और 429 आता है।</li>
<li>500 ms पर सिर्फ़ आधा token लौटा है (500 milli-tokens), इसलिए e reject। 1000 ms पर एक पूरा token है: f allowed, g नहीं।</li>
<li>2500 ms पर 1000 ms के बाद 1.5 tokens भरे हैं: h allowed और आधा token बचा रहता है।</li>
<li>लंबे खाली gap (10 s) के बाद bucket भरता है पर <b>capacity पर रुक जाता है</b>: burst में सिर्फ़ 3 requests (i, j, k) निकलती हैं, l reject। Cap के बिना idle time unlimited burst credit जमा कर लेता।</li>
<li>ASP.NET Core में built-in rate limiter use करोगे (Day 13); कई servers हों तो counters shared store (जैसे Redis) में रहने चाहिए, या हर server अपना हिस्सा enforce करे।</li>
</ul>`,
        hg: `<ul>
<li>Bucket mein zyada se zyada 3 tokens hain aur har second 1 token wapas bharta hai; har request ek token leti hai. "Clock" bas wahi number hai jo hum pass karte hain, isliye output deterministic hai.</li>
<li>0 ms par bhara bucket a, b, c ko serve karta hai (3 ka <b>burst</b>); d ko khaali milta hai aur 429 aata hai.</li>
<li>500 ms par sirf aadha token lauta hai (500 milli-tokens), isliye e reject. 1000 ms par ek poora token hai: f allowed, g nahi.</li>
<li>2500 ms par 1000 ms ke baad 1.5 tokens bhare hain: h allowed aur aadha token bacha rehta hai.</li>
<li>Lambe khaali gap (10 s) ke baad bucket bharta hai par <b>capacity par ruk jaata hai</b>: burst mein sirf 3 requests (i, j, k) nikalti hain, l reject. Cap ke bina idle time unlimited burst credit jama kar leta.</li>
<li>ASP.NET Core mein built-in rate limiter use karoge (Day 13); kai servers hon to counters shared store (jaise Redis) mein rehne chahiye, ya har server apna hissa enforce kare.</li>
</ul>`
      }
    },
    {
      id: "shard-key-hotspot",
      src: `static uint Fnv(string s)
{
    uint h = 2166136261;
    foreach (var b in System.Text.Encoding.UTF8.GetBytes(s)) { h ^= b; h *= 16777619; }
    return h;
}

const int Shards = 4;
var newOrderIds = Enumerable.Range(3000, 100).ToList();

var byRange = new int[Shards];
var byHash = new int[Shards];
foreach (var id in newOrderIds)
{
    byRange[id / 1000]++;              // range shards: 0-999, 1000-1999, 2000-2999, 3000-3999
    byHash[Fnv("order-" + id) % Shards]++;
}
Console.WriteLine("range by id : " + string.Join(",", byRange));
Console.WriteLine("hash by id  : " + string.Join(",", byHash));

var customers = new[] { "IN", "IN", "IN", "IN", "IN", "IN", "IN", "US", "UK", "SG" };
var byCountry = new int[Shards];
foreach (var c in customers) byCountry[Fnv(c) % Shards]++;
Console.WriteLine("hash by country: " + string.Join(",", byCountry));`,
      answer: `range by id : 0,0,0,100
hash by id  : 25,25,25,25
hash by country: 0,2,7,1`,
      explain: {
        en: `<ul>
<li>Range sharding by order id (0-999, 1000-1999, ...) looks tidy, but new orders always have the <b>highest ids</b>: all 100 new inserts land on the last shard. That is a <b>write hotspot</b>, and the other shards sit idle.</li>
<li>Hashing the id (a stable hash, FNV-1a here) spreads the same 100 inserts 25 / 25 / 25 / 25 (the exact 25s come from these sequential ids; real hashes give roughly even, not exact, splits). The price: range queries ("orders 3000-3050") now touch every shard.</li>
<li>A <b>low-cardinality or skewed key</b> is the other classic mistake. Sharding by country puts 7 of 10 customers on one shard because most customers are in "IN". A good shard key has many distinct values and an even spread.</li>
<li>The key should also match the main access pattern: "all orders of a customer" is fast if the customer id is the key; a query by anything else becomes scatter-gather across shards.</li>
<li>Changing the number of shards later with <code>hash % N</code> reshuffles most data; this is why consistent hashing or a lookup directory is used (previous puzzle).</li>
</ul>`,
        hi: `<ul>
<li>Order id से range sharding (0-999, 1000-1999, ...) साफ़-सुथरी लगती है, पर नए orders की ids हमेशा <b>सबसे ऊँची</b> होती हैं: सारे 100 नए inserts आख़िरी shard पर गिरते हैं। यह <b>write hotspot</b> है, और बाकी shards खाली बैठे रहते हैं।</li>
<li>Id को hash करें (stable hash, यहाँ FNV-1a) तो वही 100 inserts 25 / 25 / 25 / 25 बँटते हैं (ठीक 25 इन sequential ids की वजह से हैं; असली hashes लगभग बराबर बाँटते हैं, ठीक बराबर नहीं)। कीमत: range queries ("orders 3000-3050") अब हर shard को छूती हैं।</li>
<li><b>कम distinct values या skewed key</b> दूसरी classic ग़लती है। Country से sharding करने पर 10 में से 7 customers एक shard पर आ गए क्योंकि ज़्यादातर customers "IN" में हैं। अच्छी shard key में बहुत सारी अलग values और बराबर spread होता है।</li>
<li>Key main access pattern से भी मेल खानी चाहिए: "एक customer के सारे orders" तब तेज़ है जब customer id ही key हो; किसी और चीज़ से query हो तो वह सब shards पर scatter-gather बन जाती है।</li>
<li>बाद में <code>hash % N</code> से shards की संख्या बदलो तो ज़्यादातर data हिल जाता है; इसीलिए consistent hashing या lookup directory use होती है (पिछला puzzle)।</li>
</ul>`,
        hg: `<ul>
<li>Order id se range sharding (0-999, 1000-1999, ...) saaf-suthri lagti hai, par naye orders ki ids hamesha <b>sabse unchi</b> hoti hain: saare 100 naye inserts aakhri shard par girte hain. Yeh <b>write hotspot</b> hai, aur baaki shards khaali baithe rehte hain.</li>
<li>Id ko hash karein (stable hash, yahan FNV-1a) to wahi 100 inserts 25 / 25 / 25 / 25 bante hain (theek 25 in sequential ids ki wajah se hain; asli hashes lagbhag barabar baantte hain, theek barabar nahi). Keemat: range queries ("orders 3000-3050") ab har shard ko chhuti hain.</li>
<li><b>Kam distinct values ya skewed key</b> doosri classic galti hai. Country se sharding karne par 10 mein se 7 customers ek shard par aa gaye kyunki zyadatar customers "IN" mein hain. Achhi shard key mein bahut saari alag values aur barabar spread hota hai.</li>
<li>Key main access pattern se bhi mel khaani chahiye: "ek customer ke saare orders" tab tez hai jab customer id hi key ho; kisi aur cheez se query ho to woh sab shards par scatter-gather ban jaati hai.</li>
<li>Baad mein <code>hash % N</code> se shards ki sankhya badlo to zyadatar data hil jaata hai; isiliye consistent hashing ya lookup directory use hoti hai (pichla puzzle).</li>
</ul>`
      }
    }
  ],
  revision: {
    en: [
      "Framework: clarify, estimate, API, data model, high-level design, deep dives, trade-offs; about 45 minutes.",
      "A Tech Lead is judged on trade-offs with reasons and clear communication, not on one right answer.",
      "QPS = requests per day / 86,400; peak is about 2-3x the average; state your assumptions aloud.",
      "Cache-aside: read the cache, else load and fill; on write update the database and delete the key; keep a TTL.",
      "Scale a database in order: indexes, caching, read replicas, then sharding by a well-chosen key.",
      "A good shard key has many values, even traffic and matches the main query; sequential ids make hotspots.",
      "Consistent hashing moves about 1/N of the keys on average when a node is added or removed.",
      "CAP: during a partition choose consistency or availability; PACELC adds latency versus consistency otherwise.",
      "URL shortener: counter plus base62 codes, cache-aside redirects, and 302 when you need click analytics.",
      "Notification system: acknowledge the webhook fast and process the work from a queue.",
      "Order management: no distributed transaction; use an outbox, a saga with compensations and idempotent consumers.",
      "Tell your design story from a real project and never invent details."
    ],
    meaning: {
      hi: [
        "Framework: clarify, estimate, API, data model, high-level design, deep dives, trade-offs; लगभग 45 मिनट।",
        "Tech Lead को वजह के साथ trade-offs और साफ़ communication पर judge करते हैं, एक सही जवाब पर नहीं।",
        "QPS = रोज़ की requests / 86,400; peak लगभग average का 2-3 गुना; assumptions ज़ोर से बोलो।",
        "Cache-aside: cache पढ़ो, नहीं तो load करके भरो; write पर database update करो और key delete करो; TTL रखो।",
        "Database को क्रम से scale करो: indexes, caching, read replicas, फिर अच्छी चुनी key से sharding।",
        "अच्छी shard key में बहुत values, बराबर traffic होता है और वह main query से मेल खाती है; sequential ids hotspots बनाती हैं।",
        "Node जुड़ने या हटने पर consistent hashing में औसतन लगभग 1/N keys हिलती हैं।",
        "CAP: partition के दौरान consistency या availability चुनो; PACELC बाकी समय latency बनाम consistency जोड़ता है।",
        "URL shortener: counter + base62 codes, cache-aside redirects, और click analytics चाहिए तो 302।",
        "Notification system: webhook को जल्दी ack करो और काम queue से process करो।",
        "Order management: distributed transaction नहीं; outbox, compensations वाला saga और idempotent consumers।",
        "अपनी design story असली project से बोलो और details कभी गढ़ो मत।"
      ],
      hg: [
        "Framework: clarify, estimate, API, data model, high-level design, deep dives, trade-offs; lagbhag 45 minute.",
        "Tech Lead ko wajah ke saath trade-offs aur saaf communication par judge karte hain, ek sahi jawab par nahi.",
        "QPS = roz ki requests / 86,400; peak lagbhag average ka 2-3 guna; assumptions zor se bolo.",
        "Cache-aside: cache padho, nahi to load karke bharo; write par database update karo aur key delete karo; TTL rakho.",
        "Database ko kram se scale karo: indexes, caching, read replicas, phir achhi chuni key se sharding.",
        "Achhi shard key mein bahut values, barabar traffic hota hai aur woh main query se mel khaati hai; sequential ids hotspots banati hain.",
        "Node judne ya hatne par consistent hashing mein ausatan lagbhag 1/N keys hilti hain.",
        "CAP: partition ke dauran consistency ya availability chuno; PACELC baaki samay latency vs consistency jodta hai.",
        "URL shortener: counter + base62 codes, cache-aside redirects, aur click analytics chahiye to 302.",
        "Notification system: webhook ko jaldi ack karo aur kaam queue se process karo.",
        "Order management: distributed transaction nahi; outbox, compensations wala saga aur idempotent consumers.",
        "Apni design story asli project se bolo aur details kabhi gadho mat."
      ]
    }
  }
};
