// Day 16 — Microservices deep dive. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 16,
  title: {
    en: "Microservices deep dive — gateway, messaging, Saga, Outbox, resilience, tracing",
    hi: "Microservices गहराई से — gateway, messaging, Saga, Outbox, resilience, tracing",
    hg: "Microservices gehraai se — gateway, messaging, Saga, Outbox, resilience, tracing"
  },
  summary: {
    en: `<p>Day 15 asked <b>"monolith or microservices?"</b>. Today is <b>"we chose microservices — how do we not get hurt?"</b>. The interview theme is simple: a network call is not a method call, so every pattern today is a way to live with <b>failure, duplicates and no shared transaction</b>.</p>
<ul>
<li><b>API gateway</b>: one front door (routing, auth, rate limits). <b>YARP</b> is Microsoft's reverse-proxy library for .NET. A <b>BFF</b> is a gateway per client type (web, mobile). Azure API Management is Day 20.</li>
<li><b>Sync vs async</b>: HTTP/gRPC is simple but caller and callee must be up together (<b>temporal coupling</b>). Queues, topics and events decouple in time, at the cost of eventual consistency.</li>
<li><b>Broker basics</b>: queue = one consumer gets each message; topic = every subscription gets a copy. Delivery is usually <b>at-least-once</b>, so duplicates happen. Poison messages go to a <b>dead-letter queue</b>.</li>
<li><b>Outbox + Inbox</b>: write the event in the same transaction as the data (outbox); the consumer remembers handled message ids (inbox / idempotent consumer). Together they give "no loss, no double effect".</li>
<li><b>Saga</b>: a business flow over many services without 2PC; each step has a <b>compensating action</b>, run in reverse order. Choreography = events; orchestration = a coordinator.</li>
<li><b>Resilience</b>: timeout, retry with backoff + jitter (idempotent calls only), circuit breaker, bulkhead (Polly v8 / Microsoft.Extensions.Http.Resilience; defaults on Day 13).</li>
<li><b>Observability</b>: logs + metrics + traces, linked by the W3C <code>traceparent</code> (OpenTelemetry in .NET: <code>ActivitySource</code>, <code>Activity</code>).</li>
<li><b>TL angle</b>: one database per service, versioned contracts, observability <b>before</b> the first split, and the "distributed monolith" smell.</li>
</ul>
<p>Plan (about 1 hour 15 minutes): Short mode first, then Q&amp;A aloud, then the code sections, then the six puzzles. Azure Service Bus details wait for Day 20; system-design practice is Day 17.</p>`,
    hi: `<p>Day 15 में सवाल था <b>"monolith या microservices?"</b>। आज का सवाल है <b>"microservices चुन लिए — अब नुकसान से कैसे बचें?"</b>। Interview का theme सीधा है: network call, method call नहीं होती, इसलिए आज के सारे patterns <b>failure, duplicates और बिना shared transaction</b> के जीने के तरीक़े हैं।</p>
<ul>
<li><b>API gateway</b>: एक सामने का दरवाज़ा (routing, auth, rate limits)। <b>YARP</b> .NET के लिए Microsoft की reverse-proxy library है। <b>BFF</b> हर client type (web, mobile) का अपना gateway है। Azure API Management Day 20 में है।</li>
<li><b>Sync बनाम async</b>: HTTP/gRPC सरल है, पर caller और callee को साथ में up रहना पड़ता है (<b>temporal coupling</b>)। Queues, topics और events समय के हिसाब से अलग करते हैं, कीमत है eventual consistency।</li>
<li><b>Broker basics</b>: queue = हर message एक consumer को मिलता है; topic = हर subscription को कॉपी मिलती है। Delivery आम तौर पर <b>at-least-once</b> होती है, इसलिए duplicates आते हैं। Poison messages <b>dead-letter queue</b> में जाते हैं।</li>
<li><b>Outbox + Inbox</b>: event को data की ही transaction में लिखो (outbox); consumer handle हुए message ids याद रखता है (inbox / idempotent consumer)। दोनों मिलकर "न खोए, न दो बार असर" देते हैं।</li>
<li><b>Saga</b>: कई services पर business flow, बिना 2PC के; हर step की एक <b>compensating action</b> होती है, जो उल्टे order में चलती है। Choreography = events; orchestration = एक coordinator।</li>
<li><b>Resilience</b>: timeout, backoff + jitter के साथ retry (सिर्फ़ idempotent calls), circuit breaker, bulkhead (Polly v8 / Microsoft.Extensions.Http.Resilience; defaults Day 13 में)।</li>
<li><b>Observability</b>: logs + metrics + traces, जिन्हें W3C <code>traceparent</code> जोड़ता है (.NET में OpenTelemetry: <code>ActivitySource</code>, <code>Activity</code>)।</li>
<li><b>TL angle</b>: हर service का अपना database, versioned contracts, पहले split से <b>पहले</b> observability, और "distributed monolith" की smell।</li>
</ul>
<p>Plan (लगभग 1 घंटा 15 मिनट): पहले Short mode, फिर Q&amp;A ज़ोर से, फिर code sections, फिर छह puzzles। Azure Service Bus की details Day 20 में; system-design की practice Day 17 में।</p>`,
    hg: `<p>Day 15 mein sawaal tha <b>"monolith ya microservices?"</b>. Aaj ka sawaal hai <b>"microservices chun liye — ab nuksaan se kaise bachein?"</b>. Interview ka theme seedha hai: network call, method call nahi hoti, isliye aaj ke saare patterns <b>failure, duplicates aur bina shared transaction</b> ke jeene ke tareeke hain.</p>
<ul>
<li><b>API gateway</b>: ek saamne ka darwaza (routing, auth, rate limits). <b>YARP</b> .NET ke liye Microsoft ki reverse-proxy library hai. <b>BFF</b> har client type (web, mobile) ka apna gateway hai. Azure API Management Day 20 mein hai.</li>
<li><b>Sync vs async</b>: HTTP/gRPC saral hai, par caller aur callee ko saath mein up rehna padta hai (<b>temporal coupling</b>). Queues, topics aur events samay ke hisaab se alag karte hain, keemat hai eventual consistency.</li>
<li><b>Broker basics</b>: queue = har message ek consumer ko milta hai; topic = har subscription ko copy milti hai. Delivery aam taur par <b>at-least-once</b> hoti hai, isliye duplicates aate hain. Poison messages <b>dead-letter queue</b> mein jaate hain.</li>
<li><b>Outbox + Inbox</b>: event ko data ki hi transaction mein likho (outbox); consumer handle hue message ids yaad rakhta hai (inbox / idempotent consumer). Dono milkar "na khoye, na do baar asar" dete hain.</li>
<li><b>Saga</b>: kai services par business flow, bina 2PC ke; har step ki ek <b>compensating action</b> hoti hai, jo ulte order mein chalti hai. Choreography = events; orchestration = ek coordinator.</li>
<li><b>Resilience</b>: timeout, backoff + jitter ke saath retry (sirf idempotent calls), circuit breaker, bulkhead (Polly v8 / Microsoft.Extensions.Http.Resilience; defaults Day 13 mein).</li>
<li><b>Observability</b>: logs + metrics + traces, jinhe W3C <code>traceparent</code> jodta hai (.NET mein OpenTelemetry: <code>ActivitySource</code>, <code>Activity</code>).</li>
<li><b>TL angle</b>: har service ka apna database, versioned contracts, pehle split se <b>pehle</b> observability, aur "distributed monolith" ki smell.</li>
</ul>
<p>Plan (lagbhag 1 ghanta 15 minute): pehle Short mode, phir Q&amp;A zor se, phir code sections, phir chhah puzzles. Azure Service Bus ki details Day 20 mein; system-design ki practice Day 17 mein.</p>`
  },
  sections: [
    {
      id: "when-it-hurts-overview",
      depth: "short",
      title: {
        en: "Microservices — what you get, what you pay, the distributed monolith smell",
        hi: "Microservices — क्या मिलता है, क्या चुकाना पड़ता है, distributed monolith की smell",
        hg: "Microservices — kya milta hai, kya chukana padta hai, distributed monolith ki smell"
      },
      body: {
        en: `<p><b>Picture — one big joint-family kitchen vs separate flats:</b> in a joint kitchen, one person cooks and everyone eats the same thing; fast to organise, but one burnt pot spoils the meal. Separate flats give each family freedom, but now you need a phone call for every shared thing (milk, gas bill, who is coming for dinner). Microservices are the separate flats: freedom plus a lot of phone calls.</p>
<p><b>What you get:</b> deploy one service without the others, scale only the hot one, let a team own its code and data, use a different tech where it really helps, and limit the blast radius of a bug.</p>
<p><b>What you pay:</b> every call can fail or be slow; no single database transaction; data copies and eventual consistency; versioned contracts; one pipeline, one dashboard and one on-call per service; harder local debugging.</p>
<p><b>Distributed monolith — the smell:</b> you have the costs of microservices but not the freedom. Signs:</p>
<ul>
<li>Services must be <b>deployed together</b> (a release train) or one change touches five repos.</li>
<li>Several services share <b>one database</b> or the same tables.</li>
<li>Long <b>synchronous call chains</b> (A calls B calls C): if one is down, all are down.</li>
<li>Service borders follow technical layers ("the data service") instead of business capabilities (bounded contexts, Day 15).</li>
<li>A shared "common" library full of domain types forces everybody to upgrade together.</li>
</ul>
<p><b>TL angle:</b> match services to <b>teams</b> (Conway's law, Day 15) and to business capabilities; give each service its own data; treat the <b>API/event contract</b> as a product (additive changes, version it, never break consumers silently); and build <b>observability before the first split</b> — you cannot debug what you cannot see.</p>
<p><b>When to use:</b> several teams that need independent release rhythms, parts with very different scaling or availability needs, and a team that can run pipelines, monitoring and on-call. <b>When not:</b> a small team, a young product whose borders are still unclear, or no operations skills yet — a modular monolith (Day 15) is usually the safer start.</p>`,
        hi: `<p><b>तस्वीर — एक बड़ी joint-family रसोई बनाम अलग-अलग flats:</b> joint रसोई में एक आदमी पकाता है और सब वही खाते हैं; organise करना तेज़ है, पर एक जला बर्तन पूरा खाना बिगाड़ देता है। अलग flats में हर परिवार आज़ाद है, पर अब हर साझा चीज़ (दूध, gas का बिल, कौन खाने आ रहा है) के लिए phone call चाहिए। Microservices अलग flats हैं: आज़ादी के साथ ढेर सारी phone calls।</p>
<p><b>क्या मिलता है:</b> एक service को बाकी के बिना deploy करो, सिर्फ़ गरम वाली को scale करो, team अपने code और data की मालिक रहे, जहाँ सच में काम आए वहाँ अलग tech, और bug का असर छोटा रहे।</p>
<p><b>क्या चुकाना पड़ता है:</b> हर call fail या धीमी हो सकती है; एक database transaction नहीं; data की कॉपियाँ और eventual consistency; versioned contracts; हर service की अपनी pipeline, dashboard और on-call; local debugging मुश्किल।</p>
<p><b>Distributed monolith — smell:</b> microservices का खर्च है पर आज़ादी नहीं। निशानियाँ:</p>
<ul>
<li>Services को <b>साथ में deploy</b> करना पड़ता है (release train) या एक बदलाव पाँच repos छूता है।</li>
<li>कई services <b>एक database</b> या वही tables share करती हैं।</li>
<li>लंबी <b>synchronous call chains</b> (A, B को बुलाए, B, C को): एक down तो सब down।</li>
<li>Service की सीमाएँ business capabilities की जगह technical layers ("the data service") पर हैं (bounded contexts, Day 15)।</li>
<li>Domain types से भरी एक shared "common" library सबको साथ में upgrade करने पर मजबूर करती है।</li>
</ul>
<p><b>TL angle:</b> services को <b>teams</b> (Conway's law, Day 15) और business capabilities से मिलाओ; हर service को अपना data दो; <b>API/event contract</b> को product की तरह लो (additive बदलाव, version करो, consumers को चुपचाप मत तोड़ो); और पहले split से <b>पहले observability</b> बनाओ — जो दिखता नहीं उसे debug नहीं कर सकते।</p>
<p><b>कब use करें:</b> कई teams जिन्हें अलग release rhythm चाहिए, ऐसे हिस्से जिनकी scaling या availability की ज़रूरत बहुत अलग है, और ऐसी team जो pipelines, monitoring और on-call चला सके। <b>कब नहीं:</b> छोटी team, नया product जिसकी सीमाएँ अभी साफ़ नहीं, या operations की skill अभी नहीं — modular monolith (Day 15) आम तौर पर सुरक्षित शुरुआत है।</p>`,
        hg: `<p><b>Tasveer — ek badi joint-family rasoi vs alag-alag flats:</b> joint rasoi mein ek aadmi pakata hai aur sab wahi khaate hain; organise karna tez hai, par ek jala bartan poora khaana bigaad deta hai. Alag flats mein har parivaar aazaad hai, par ab har saajha cheez (doodh, gas ka bill, kaun khaane aa raha hai) ke liye phone call chahiye. Microservices alag flats hain: aazaadi ke saath dher saari phone calls.</p>
<p><b>Kya milta hai:</b> ek service ko baaki ke bina deploy karo, sirf garam wali ko scale karo, team apne code aur data ki maalik rahe, jahan sach mein kaam aaye wahan alag tech, aur bug ka asar chhota rahe.</p>
<p><b>Kya chukana padta hai:</b> har call fail ya dheemi ho sakti hai; ek database transaction nahi; data ki copies aur eventual consistency; versioned contracts; har service ki apni pipeline, dashboard aur on-call; local debugging mushkil.</p>
<p><b>Distributed monolith — smell:</b> microservices ka kharcha hai par aazaadi nahi. Nishaaniyan:</p>
<ul>
<li>Services ko <b>saath mein deploy</b> karna padta hai (release train) ya ek badlaav paanch repos chhoota hai.</li>
<li>Kai services <b>ek database</b> ya wahi tables share karti hain.</li>
<li>Lambi <b>synchronous call chains</b> (A, B ko bulaye, B, C ko): ek down to sab down.</li>
<li>Service ki seemayein business capabilities ki jagah technical layers ("the data service") par hain (bounded contexts, Day 15).</li>
<li>Domain types se bhari ek shared "common" library sabko saath mein upgrade karne par majboor karti hai.</li>
</ul>
<p><b>TL angle:</b> services ko <b>teams</b> (Conway's law, Day 15) aur business capabilities se milao; har service ko apna data do; <b>API/event contract</b> ko product ki tarah lo (additive badlaav, version karo, consumers ko chupchaap mat todo); aur pehle split se <b>pehle observability</b> banao — jo dikhta nahi use debug nahi kar sakte.</p>
<p><b>Kab use karein:</b> kai teams jinhe alag release rhythm chahiye, aise hisse jinki scaling ya availability ki zaroorat bahut alag hai, aur aisi team jo pipelines, monitoring aur on-call chala sake. <b>Kab nahi:</b> chhoti team, naya product jiski seemayein abhi saaf nahi, ya operations ki skill abhi nahi — modular monolith (Day 15) aam taur par surakshit shuruaat hai.</p>`
      }
    },
    {
      id: "gateway-and-sync-async-overview",
      depth: "short",
      title: {
        en: "API gateway, BFF and sync vs async communication",
        hi: "API gateway, BFF और sync बनाम async communication",
        hg: "API gateway, BFF aur sync vs async communication"
      },
      body: {
        en: `<p><b>Picture — a hotel reception:</b> guests do not walk to the kitchen, laundry and gym themselves. They call reception, which routes the request, checks the room key and says "please wait" when it is busy. That is an <b>API gateway</b>. And a phone call (you wait on the line) versus a note under the door (you carry on, the answer comes later) is <b>sync vs async</b>.</p>
<p><b>API gateway — the common responsibilities:</b> routing, authentication/token validation, rate limiting, TLS termination, response caching, request logging and correlation ids. <b>Keep business logic out</b> — otherwise the gateway becomes a new monolith and a single point of failure.</p>
<ul>
<li><b>YARP</b> (Yet Another Reverse Proxy, NuGet <code>Yarp.ReverseProxy</code>): a Microsoft reverse-proxy toolkit that you host inside an ASP.NET Core app, configured by routes and clusters.</li>
<li><b>BFF</b> (Backend for Frontend): one gateway/API per client type (web, mobile), shaped to that client's screens, owned by the team that owns the client.</li>
<li><b>Managed gateways</b> such as Azure API Management — Day 20.</li>
</ul>
<p><b>Sync (HTTP/gRPC):</b> simple, immediate answer, easy to follow. But caller and callee must be up at the same time (<b>temporal coupling</b>), latency adds up along a chain, and availability multiplies down (three services at 99.9% give roughly 99.7%).</p>
<p><b>Async (queue / topic / event):</b> the sender hands the message to a broker and carries on. Services are decoupled in time, spikes are absorbed, retries are easy. The cost: eventual consistency, duplicates, harder debugging, and a user who does not get an instant final answer.</p>
<p><b>Rule of thumb:</b> use <b>sync for queries</b> the user is waiting on, and <b>async for commands and events</b> that other services react to. A mix is normal.</p>
<p><b>When to use sync:</b> reads, very short flows, and when the caller truly needs the answer now. <b>When not:</b> long chains, or work that must survive a downstream outage — use async there.</p>`,
        hi: `<p><b>तस्वीर — hotel का reception:</b> मेहमान खुद रसोई, laundry और gym तक नहीं जाते। वे reception को बुलाते हैं, जो request route करता है, room key check करता है और busy होने पर "please wait" कहता है। यही <b>API gateway</b> है। और phone call (आप line पर रुकते हैं) बनाम दरवाज़े के नीचे पर्ची (आप अपना काम करते हैं, जवाब बाद में आता है) <b>sync बनाम async</b> है।</p>
<p><b>API gateway — आम ज़िम्मेदारियाँ:</b> routing, authentication/token validation, rate limiting, TLS termination, response caching, request logging और correlation ids। <b>Business logic बाहर रखो</b> — वरना gateway नया monolith और single point of failure बन जाता है।</p>
<ul>
<li><b>YARP</b> (Yet Another Reverse Proxy, NuGet <code>Yarp.ReverseProxy</code>): Microsoft का reverse-proxy toolkit जिसे आप ASP.NET Core app के अंदर host करते हैं; routes और clusters से configure होता है।</li>
<li><b>BFF</b> (Backend for Frontend): हर client type (web, mobile) का एक gateway/API, उस client की screens के हिसाब से बना, और उसी team की ownership जिसके पास client है।</li>
<li><b>Managed gateways</b> जैसे Azure API Management — Day 20।</li>
</ul>
<p><b>Sync (HTTP/gRPC):</b> सरल, तुरंत जवाब, समझना आसान। पर caller और callee को एक ही समय up रहना पड़ता है (<b>temporal coupling</b>), latency chain में जुड़ती जाती है, और availability गुणा होकर घटती है (99.9% वाली तीन services का लगभग 99.7%)।</p>
<p><b>Async (queue / topic / event):</b> sender message broker को देकर आगे बढ़ जाता है। Services समय के हिसाब से अलग रहती हैं, spikes सँभल जाते हैं, retries आसान हैं। कीमत: eventual consistency, duplicates, मुश्किल debugging, और user को तुरंत आख़िरी जवाब नहीं मिलता।</p>
<p><b>Rules of thumb:</b> जिन <b>queries</b> पर user इंतज़ार कर रहा है उनके लिए <b>sync</b>, और जिन <b>commands और events</b> पर दूसरी services react करती हैं उनके लिए <b>async</b>। मिला-जुला इस्तेमाल आम है।</p>
<p><b>Sync कब use करें:</b> reads, बहुत छोटे flows, और जब caller को जवाब अभी चाहिए। <b>कब नहीं:</b> लंबी chains, या ऐसा काम जो downstream के outage में भी बचना चाहिए — वहाँ async।</p>`,
        hg: `<p><b>Tasveer — hotel ka reception:</b> mehmaan khud rasoi, laundry aur gym tak nahi jaate. Woh reception ko bulate hain, jo request route karta hai, room key check karta hai aur busy hone par "please wait" kehta hai. Yahi <b>API gateway</b> hai. Aur phone call (aap line par rukte hain) vs darwaze ke neeche parchi (aap apna kaam karte hain, jawaab baad mein aata hai) <b>sync vs async</b> hai.</p>
<p><b>API gateway — aam zimmedaariyan:</b> routing, authentication/token validation, rate limiting, TLS termination, response caching, request logging aur correlation ids. <b>Business logic bahar rakho</b> — warna gateway naya monolith aur single point of failure ban jaata hai.</p>
<ul>
<li><b>YARP</b> (Yet Another Reverse Proxy, NuGet <code>Yarp.ReverseProxy</code>): Microsoft ka reverse-proxy toolkit jise aap ASP.NET Core app ke andar host karte hain; routes aur clusters se configure hota hai.</li>
<li><b>BFF</b> (Backend for Frontend): har client type (web, mobile) ka ek gateway/API, us client ki screens ke hisaab se bana, aur usi team ki ownership jiske paas client hai.</li>
<li><b>Managed gateways</b> jaise Azure API Management — Day 20.</li>
</ul>
<p><b>Sync (HTTP/gRPC):</b> saral, turant jawaab, samajhna aasaan. Par caller aur callee ko ek hi samay up rehna padta hai (<b>temporal coupling</b>), latency chain mein judti jaati hai, aur availability guna hokar ghatti hai (99.9% wali teen services ka lagbhag 99.7%).</p>
<p><b>Async (queue / topic / event):</b> sender message broker ko dekar aage badh jaata hai. Services samay ke hisaab se alag rehti hain, spikes sambhal jaate hain, retries aasaan hain. Keemat: eventual consistency, duplicates, mushkil debugging, aur user ko turant aakhri jawaab nahi milta.</p>
<p><b>Rules of thumb:</b> jin <b>queries</b> par user intezaar kar raha hai unke liye <b>sync</b>, aur jin <b>commands aur events</b> par doosri services react karti hain unke liye <b>async</b>. Mila-jula istemaal aam hai.</p>
<p><b>Sync kab use karein:</b> reads, bahut chhote flows, aur jab caller ko jawaab abhi chahiye. <b>Kab nahi:</b> lambi chains, ya aisa kaam jo downstream ke outage mein bhi bachna chahiye — wahan async.</p>`
      }
    },
    {
      id: "messaging-overview",
      depth: "short",
      title: {
        en: "Message brokers — queue vs topic, delivery guarantees, dead-letter, Outbox and Inbox",
        hi: "Message brokers — queue बनाम topic, delivery guarantees, dead-letter, Outbox और Inbox",
        hg: "Message brokers — queue vs topic, delivery guarantees, dead-letter, Outbox aur Inbox"
      },
      body: {
        en: `<p><b>Picture — a railway booking counter and a newspaper subscription:</b> one long line with five counters: each passenger is served by <b>one</b> counter, and adding a counter clears the line faster. That is a <b>queue</b> with <b>competing consumers</b>. A newspaper is different: every subscriber gets their own copy. That is a <b>topic</b> with subscriptions.</p>
<ul>
<li><b>Queue</b>: each message goes to <b>one</b> consumer (point-to-point; commands, work items).</li>
<li><b>Topic / subscription</b>: each subscription gets a <b>copy</b> (publish-subscribe; events like <code>OrderPlaced</code>).</li>
<li><b>At-least-once delivery</b> (the usual default): the broker redelivers until you acknowledge, so you can see the <b>same message twice</b>. "Exactly-once" in practice means at-least-once plus an <b>idempotent consumer</b>.</li>
<li><b>Dead-letter queue (DLQ)</b>: after too many failed attempts, a <b>poison message</b> is moved aside so it stops blocking the rest. Someone must watch the DLQ, alert on it, and replay or fix.</li>
</ul>
<p><b>The dual-write problem:</b> "save the order, then publish OrderPlaced" is two systems with no shared transaction. The app can crash between them: the order is saved but the event is lost.</p>
<ul>
<li><b>Transactional Outbox</b> (this fulfils the Day 15 forward-reference): write the event into an <code>Outbox</code> table in the <b>same database transaction</b> as the data. A relay reads unsent rows, publishes them and marks them sent. A crash after publishing can duplicate a message, so the delivery is at-least-once.</li>
<li><b>Inbox / idempotent consumer</b>: the consumer stores the ids of messages it has handled (a table with a unique message id) in the <b>same transaction</b> as its own effect, and skips repeats. Outbox = "never lose"; inbox = "never apply twice".</li>
</ul>
<p>Azure Service Bus specifics (sessions, locks, topics, DLQ settings) — Day 20.</p>
<p><b>When to use:</b> work that can happen later, fan-out to many reactors, absorbing spikes, protecting a slow downstream. <b>When not:</b> the user needs the answer in the same request, or a plain database table or a simple call is enough — a broker is one more thing to run and monitor.</p>`,
        hi: `<p><b>तस्वीर — railway booking counter और अख़बार की subscription:</b> एक लंबी line और पाँच counters: हर passenger को <b>एक</b> counter सँभालता है, और counter बढ़ाने से line जल्दी निपटती है। यह <b>queue</b> है, <b>competing consumers</b> के साथ। अख़बार अलग है: हर subscriber को अपनी कॉपी मिलती है। यह subscriptions वाला <b>topic</b> है।</p>
<ul>
<li><b>Queue</b>: हर message <b>एक</b> consumer को जाता है (point-to-point; commands, work items)।</li>
<li><b>Topic / subscription</b>: हर subscription को <b>कॉपी</b> मिलती है (publish-subscribe; <code>OrderPlaced</code> जैसे events)।</li>
<li><b>At-least-once delivery</b> (आम default): जब तक आप acknowledge नहीं करते broker दोबारा देता रहता है, इसलिए <b>वही message दो बार</b> दिख सकता है। "Exactly-once" का मतलब practice में at-least-once और <b>idempotent consumer</b> है।</li>
<li><b>Dead-letter queue (DLQ)</b>: बहुत बार fail होने पर <b>poison message</b> किनारे कर दिया जाता है ताकि बाकी न रुकें। किसी को DLQ देखना, उस पर alert लगाना, और replay या fix करना होता है।</li>
</ul>
<p><b>Dual-write problem:</b> "order save करो, फिर OrderPlaced publish करो" दो systems हैं जिनमें shared transaction नहीं। दोनों के बीच app crash हो सकता है: order save हुआ पर event खो गया।</p>
<ul>
<li><b>Transactional Outbox</b> (यह Day 15 के forward-reference को पूरा करता है): event को data की <b>उसी database transaction</b> में <code>Outbox</code> table में लिखो। Relay unsent rows पढ़ता है, publish करता है और sent mark करता है। Publish के बाद crash से message duplicate हो सकता है, इसलिए delivery at-least-once है।</li>
<li><b>Inbox / idempotent consumer</b>: consumer handle हुए messages के ids (unique message id वाली table) अपने effect की <b>उसी transaction</b> में रखता है, और दोहराव skip करता है। Outbox = "कभी न खोए"; inbox = "दो बार apply न हो"।</li>
</ul>
<p>Azure Service Bus की specifics (sessions, locks, topics, DLQ settings) — Day 20।</p>
<p><b>कब use करें:</b> जो काम बाद में हो सकता है, कई reactors तक fan-out, spikes सँभालना, धीमे downstream को बचाना। <b>कब नहीं:</b> user को जवाब उसी request में चाहिए, या साधारण database table या सीधी call काफ़ी है — broker एक और चीज़ है जिसे चलाना और monitor करना पड़ता है।</p>`,
        hg: `<p><b>Tasveer — railway booking counter aur akhbaar ki subscription:</b> ek lambi line aur paanch counters: har passenger ko <b>ek</b> counter sambhalta hai, aur counter badhane se line jaldi nipatti hai. Yeh <b>queue</b> hai, <b>competing consumers</b> ke saath. Akhbaar alag hai: har subscriber ko apni copy milti hai. Yeh subscriptions wala <b>topic</b> hai.</p>
<ul>
<li><b>Queue</b>: har message <b>ek</b> consumer ko jaata hai (point-to-point; commands, work items).</li>
<li><b>Topic / subscription</b>: har subscription ko <b>copy</b> milti hai (publish-subscribe; <code>OrderPlaced</code> jaise events).</li>
<li><b>At-least-once delivery</b> (aam default): jab tak aap acknowledge nahi karte broker dobara deta rehta hai, isliye <b>wahi message do baar</b> dikh sakta hai. "Exactly-once" ka matlab practice mein at-least-once aur <b>idempotent consumer</b> hai.</li>
<li><b>Dead-letter queue (DLQ)</b>: bahut baar fail hone par <b>poison message</b> kinare kar diya jaata hai taaki baaki na rukein. Kisi ko DLQ dekhna, us par alert lagana, aur replay ya fix karna hota hai.</li>
</ul>
<p><b>Dual-write problem:</b> "order save karo, phir OrderPlaced publish karo" do systems hain jinmein shared transaction nahi. Dono ke beech app crash ho sakta hai: order save hua par event kho gaya.</p>
<ul>
<li><b>Transactional Outbox</b> (yeh Day 15 ke forward-reference ko poora karta hai): event ko data ki <b>usi database transaction</b> mein <code>Outbox</code> table mein likho. Relay unsent rows padhta hai, publish karta hai aur sent mark karta hai. Publish ke baad crash se message duplicate ho sakta hai, isliye delivery at-least-once hai.</li>
<li><b>Inbox / idempotent consumer</b>: consumer handle hue messages ke ids (unique message id wali table) apne effect ki <b>usi transaction</b> mein rakhta hai, aur dohrav skip karta hai. Outbox = "kabhi na khoye"; inbox = "do baar apply na ho".</li>
</ul>
<p>Azure Service Bus ki specifics (sessions, locks, topics, DLQ settings) — Day 20.</p>
<p><b>Kab use karein:</b> jo kaam baad mein ho sakta hai, kai reactors tak fan-out, spikes sambhalna, dheemi downstream ko bachana. <b>Kab nahi:</b> user ko jawaab usi request mein chahiye, ya saadhaaran database table ya seedhi call kaafi hai — broker ek aur cheez hai jise chalana aur monitor karna padta hai.</p>`
      }
    },
    {
      id: "saga-and-data-overview",
      depth: "short",
      title: {
        en: "Saga, data ownership and reading across services",
        hi: "Saga, data ownership और services के पार data पढ़ना",
        hg: "Saga, data ownership aur services ke paar data padhna"
      },
      body: {
        en: `<p><b>Picture — booking a wedding trip:</b> you book the train, then the hotel, then the cab. If the cab is not available you do not "roll back the universe" — you <b>cancel the hotel and then the train</b>, and the cancellation may cost a fee. That is a <b>Saga</b>.</p>
<p><b>Why a Saga:</b> each service owns its database, so one ACID transaction across services does not exist. Two-phase commit (2PC / distributed transactions) is generally avoided in microservices: it locks resources across services and does not work with most brokers and cloud services. A Saga is a sequence of <b>local transactions</b>, linked by messages.</p>
<ul>
<li><b>Compensating action</b>: a new business action that undoes the effect of a completed step (refund, release stock, cancel). It is not a database rollback, and some steps can only be "semantically" undone (an email cannot be unsent). Run compensations in <b>reverse order</b>; make them idempotent.</li>
<li><b>Choreography</b>: no boss. Each service reacts to events and publishes the next one (<code>OrderPlaced</code> → payment service → <code>PaymentTaken</code> → stock service ...). Few moving parts and loose coupling, but the flow is hidden across services and hard to see or change.</li>
<li><b>Orchestration</b>: a coordinator (saga orchestrator / process manager) sends commands and tracks the state. The flow is in one place and easy to read, and compensation is explicit; the cost is one more component and some coupling to it.</li>
</ul>
<p><b>Data ownership:</b> <b>database per service</b>. Others get the data only through the owner's API or events — no reading another service's tables. A shared database is a common cause of the distributed monolith.</p>
<ul>
<li><b>API composition</b>: the gateway or a composer calls several services and merges the answers — fine for small queries.</li>
<li><b>CQRS read model</b> (Day 11): a service subscribes to events and keeps a local, query-shaped copy for fast joins and reports. It is eventually consistent.</li>
</ul>
<p><b>When to use a Saga:</b> a business process that needs several services to agree, and a failure in the middle is plausible. <b>When not:</b> if one service and one database can do it, use a normal transaction — and if you need many sagas for one flow, the borders may be wrong.</p>`,
        hi: `<p><b>तस्वीर — शादी की trip book करना:</b> आप पहले train book करते हैं, फिर hotel, फिर cab। Cab न मिले तो आप "सारी दुनिया rollback" नहीं करते — आप <b>hotel cancel करते हैं, फिर train</b>, और cancellation पर fee लग सकती है। यही <b>Saga</b> है।</p>
<p><b>Saga क्यों:</b> हर service का अपना database है, इसलिए services के पार एक ACID transaction होती ही नहीं। Two-phase commit (2PC / distributed transactions) microservices में आम तौर पर टाली जाती है: वह services के पार resources lock करती है और ज़्यादातर brokers और cloud services के साथ चलती नहीं। Saga <b>local transactions</b> की एक कड़ी है, जो messages से जुड़ी है।</p>
<ul>
<li><b>Compensating action</b>: एक नई business action जो पूरे हो चुके step का असर पलटती है (refund, stock release, cancel)। यह database rollback नहीं है, और कुछ steps सिर्फ़ "semantically" undo होते हैं (email वापस नहीं हो सकता)। Compensations <b>उल्टे order</b> में चलाओ; उन्हें idempotent बनाओ।</li>
<li><b>Choreography</b>: कोई boss नहीं। हर service events पर react करती है और अगला event publish करती है (<code>OrderPlaced</code> → payment service → <code>PaymentTaken</code> → stock service ...)। कम हिस्से और loose coupling, पर flow services में बिखरा रहता है और देखना या बदलना मुश्किल।</li>
<li><b>Orchestration</b>: एक coordinator (saga orchestrator / process manager) commands भेजता है और state रखता है। Flow एक जगह है और पढ़ना आसान, compensation साफ़; कीमत है एक और component और उससे कुछ coupling।</li>
</ul>
<p><b>Data ownership:</b> <b>हर service का अपना database</b>। दूसरे data सिर्फ़ मालिक की API या events से लेते हैं — किसी और service की tables नहीं पढ़ते। Shared database distributed monolith की एक आम वजह है।</p>
<ul>
<li><b>API composition</b>: gateway या composer कई services को call करके जवाब जोड़ता है — छोटे queries के लिए ठीक।</li>
<li><b>CQRS read model</b> (Day 11): एक service events subscribe करके अपने पास query के आकार की local कॉपी रखती है, तेज़ joins और reports के लिए। यह eventually consistent है।</li>
</ul>
<p><b>Saga कब use करें:</b> ऐसा business process जिसमें कई services को सहमत होना है और बीच में failure मुमकिन है। <b>कब नहीं:</b> एक service और एक database से हो सकता है तो normal transaction लो — और एक flow के लिए बहुत सारी sagas लगें तो शायद सीमाएँ ग़लत हैं।</p>`,
        hg: `<p><b>Tasveer — shaadi ki trip book karna:</b> aap pehle train book karte hain, phir hotel, phir cab. Cab na mile to aap "saari duniya rollback" nahi karte — aap <b>hotel cancel karte hain, phir train</b>, aur cancellation par fee lag sakti hai. Yahi <b>Saga</b> hai.</p>
<p><b>Saga kyun:</b> har service ka apna database hai, isliye services ke paar ek ACID transaction hoti hi nahi. Two-phase commit (2PC / distributed transactions) microservices mein aam taur par taali jaati hai: woh services ke paar resources lock karti hai aur zyadatar brokers aur cloud services ke saath chalti nahi. Saga <b>local transactions</b> ki ek kadi hai, jo messages se judi hai.</p>
<ul>
<li><b>Compensating action</b>: ek nayi business action jo poore ho chuke step ka asar palatti hai (refund, stock release, cancel). Yeh database rollback nahi hai, aur kuch steps sirf "semantically" undo hote hain (email wapas nahi ho sakta). Compensations <b>ulte order</b> mein chalao; unhe idempotent banao.</li>
<li><b>Choreography</b>: koi boss nahi. Har service events par react karti hai aur agla event publish karti hai (<code>OrderPlaced</code> → payment service → <code>PaymentTaken</code> → stock service ...). Kam hisse aur loose coupling, par flow services mein bikhra rehta hai aur dekhna ya badalna mushkil.</li>
<li><b>Orchestration</b>: ek coordinator (saga orchestrator / process manager) commands bhejta hai aur state rakhta hai. Flow ek jagah hai aur padhna aasaan, compensation saaf; keemat hai ek aur component aur usse kuch coupling.</li>
</ul>
<p><b>Data ownership:</b> <b>har service ka apna database</b>. Doosre data sirf maalik ki API ya events se lete hain — kisi aur service ki tables nahi padhte. Shared database distributed monolith ki ek aam wajah hai.</p>
<ul>
<li><b>API composition</b>: gateway ya composer kai services ko call karke jawaab jodta hai — chhote queries ke liye theek.</li>
<li><b>CQRS read model</b> (Day 11): ek service events subscribe karke apne paas query ke aakar ki local copy rakhti hai, tez joins aur reports ke liye. Yeh eventually consistent hai.</li>
</ul>
<p><b>Saga kab use karein:</b> aisa business process jismein kai services ko sahmat hona hai aur beech mein failure mumkin hai. <b>Kab nahi:</b> ek service aur ek database se ho sakta hai to normal transaction lo — aur ek flow ke liye bahut saari sagas lagein to shaayad seemayein galat hain.</p>`
      }
    },
    {
      id: "resilience-observability-overview",
      depth: "short",
      title: {
        en: "Resilience and observability — the survival kit",
        hi: "Resilience और observability — बचाव की किट",
        hg: "Resilience aur observability — bachaav ki kit"
      },
      body: {
        en: `<p><b>Picture — an electrical board:</b> the MCB trips so the house does not burn (circuit breaker); the inverter covers a short cut (fallback); and the meter plus the log book tells you what happened (observability).</p>
<p><b>Resilience patterns:</b></p>
<ul>
<li><b>Timeout</b>: do not wait forever. Set a total timeout and a per-attempt timeout.</li>
<li><b>Retry with exponential backoff + jitter</b>: for transient errors only (timeouts, 503, 429), and only if the call is <b>idempotent</b> (Day 13). Jitter spreads retries so clients do not hit the service together.</li>
<li><b>Circuit breaker</b>: after many failures, stop calling for a while (Closed → Open → Half-open trial). It protects the sick service and keeps callers fast.</li>
<li><b>Bulkhead</b>: isolate resources (separate pool/limit per dependency) so one slow dependency cannot use up all threads or connections.</li>
<li><b>Fallback</b>: a degraded answer (cached or default) when the call fails.</li>
</ul>
<p>In .NET: <b>Polly v8</b> (<code>ResiliencePipeline</code>) and <code>Microsoft.Extensions.Http.Resilience</code> (<code>AddStandardResilienceHandler</code>, <code>AddResilienceHandler</code>) for HttpClient. The defaults of the standard handler are on Day 13 — here we care about <b>which</b> pattern fixes <b>which</b> problem. Retries without backoff or a budget can turn a small outage into a <b>retry storm</b>.</p>
<p><b>Observability — three pillars:</b> <b>logs</b> (what happened, structured), <b>metrics</b> (numbers over time: rate, errors, latency), <b>traces</b> (one request's path across services).</p>
<ul>
<li><b>OpenTelemetry</b> is the vendor-neutral standard. In .NET, traces use <code>System.Diagnostics.ActivitySource</code> and <code>Activity</code>; ASP.NET Core and HttpClient create activities automatically once OpenTelemetry instrumentation is added.</li>
<li><b>W3C trace context</b>: the <code>traceparent</code> header (<code>00-traceId-spanId-flags</code>) carries the trace across HTTP calls; for messages, many SDKs propagate it in message properties; with a custom outbox relay you store it and restore it yourself.</li>
<li><b>Correlation id</b>: one id in every log line of one request (the trace id works well). Search by it to see the whole story.</li>
</ul>
<p><b>When to use:</b> timeouts and retries on every remote call; breakers and bulkheads on important or slow dependencies; tracing from the very first service. <b>When not:</b> do not retry non-idempotent calls blindly, do not stack many retry layers (retries multiply), and do not add a fallback that hides real errors from the dashboard.</p>`,
        hi: `<p><b>तस्वीर — बिजली का board:</b> MCB trip होता है ताकि घर न जले (circuit breaker); inverter बिजली जाने पर काम चलाता है (fallback); और meter व log book बताते हैं कि क्या हुआ (observability)।</p>
<p><b>Resilience patterns:</b></p>
<ul>
<li><b>Timeout</b>: हमेशा के लिए इंतज़ार मत करो। एक total timeout और एक per-attempt timeout रखो।</li>
<li><b>Exponential backoff + jitter के साथ retry</b>: सिर्फ़ transient errors (timeouts, 503, 429) के लिए, और सिर्फ़ तब जब call <b>idempotent</b> हो (Day 13)। Jitter retries को फैला देता है ताकि clients service पर साथ में न टूटें।</li>
<li><b>Circuit breaker</b>: बहुत failures के बाद कुछ देर call बंद (Closed → Open → Half-open trial)। यह बीमार service को बचाता है और callers को तेज़ रखता है।</li>
<li><b>Bulkhead</b>: resources अलग रखो (हर dependency का अपना pool/limit) ताकि एक धीमी dependency सारे threads या connections न खा जाए।</li>
<li><b>Fallback</b>: call fail होने पर degraded जवाब (cached या default)।</li>
</ul>
<p>.NET में: <b>Polly v8</b> (<code>ResiliencePipeline</code>) और HttpClient के लिए <code>Microsoft.Extensions.Http.Resilience</code> (<code>AddStandardResilienceHandler</code>, <code>AddResilienceHandler</code>)। Standard handler के defaults Day 13 में हैं — यहाँ ध्यान इस पर है कि <b>कौन-सा</b> pattern <b>कौन-सी</b> समस्या सुलझाता है। बिना backoff या budget के retries छोटे outage को <b>retry storm</b> बना सकती हैं।</p>
<p><b>Observability — three pillars:</b> <b>logs</b> (क्या हुआ, structured), <b>metrics</b> (समय के साथ आँकड़े: rate, errors, latency), <b>traces</b> (एक request का services में रास्ता)।</p>
<ul>
<li><b>OpenTelemetry</b> vendor-neutral standard है। .NET में traces <code>System.Diagnostics.ActivitySource</code> और <code>Activity</code> से बनते हैं; OpenTelemetry instrumentation जोड़ते ही ASP.NET Core और HttpClient अपने आप activities बनाते हैं।</li>
<li><b>W3C trace context</b>: <code>traceparent</code> header (<code>00-traceId-spanId-flags</code>) trace को HTTP calls के पार ले जाता है; messages के लिए कई SDKs उसे message properties में आगे ले जाते हैं; custom outbox relay में उसे ख़ुद store और restore करना पड़ता है।</li>
<li><b>Correlation id</b>: एक request की हर log line में एक id (trace id अच्छा चलता है)। उससे search करके पूरी कहानी दिखती है।</li>
</ul>
<p><b>कब use करें:</b> हर remote call पर timeouts और retries; ज़रूरी या धीमी dependencies पर breakers और bulkheads; पहली service से ही tracing। <b>कब नहीं:</b> non-idempotent calls को आँख मूँदकर retry मत करो, कई retry layers मत चढ़ाओ (retries गुणा होती हैं), और ऐसा fallback मत जोड़ो जो असली errors को dashboard से छुपा दे।</p>`,
        hg: `<p><b>Tasveer — bijli ka board:</b> MCB trip hota hai taaki ghar na jale (circuit breaker); inverter bijli jaane par kaam chalata hai (fallback); aur meter va log book batate hain ki kya hua (observability).</p>
<p><b>Resilience patterns:</b></p>
<ul>
<li><b>Timeout</b>: hamesha ke liye intezaar mat karo. Ek total timeout aur ek per-attempt timeout rakho.</li>
<li><b>Exponential backoff + jitter ke saath retry</b>: sirf transient errors (timeouts, 503, 429) ke liye, aur sirf tab jab call <b>idempotent</b> ho (Day 13). Jitter retries ko faila deta hai taaki clients service par saath mein na toote.</li>
<li><b>Circuit breaker</b>: bahut failures ke baad kuch der call band (Closed → Open → Half-open trial). Yeh beemar service ko bachata hai aur callers ko tez rakhta hai.</li>
<li><b>Bulkhead</b>: resources alag rakho (har dependency ka apna pool/limit) taaki ek dheemi dependency saare threads ya connections na kha jaaye.</li>
<li><b>Fallback</b>: call fail hone par degraded jawaab (cached ya default).</li>
</ul>
<p>.NET mein: <b>Polly v8</b> (<code>ResiliencePipeline</code>) aur HttpClient ke liye <code>Microsoft.Extensions.Http.Resilience</code> (<code>AddStandardResilienceHandler</code>, <code>AddResilienceHandler</code>). Standard handler ke defaults Day 13 mein hain — yahan dhyaan is par hai ki <b>kaun-sa</b> pattern <b>kaun-si</b> samasya suljhata hai. Bina backoff ya budget ke retries chhote outage ko <b>retry storm</b> bana sakti hain.</p>
<p><b>Observability — three pillars:</b> <b>logs</b> (kya hua, structured), <b>metrics</b> (samay ke saath aankde: rate, errors, latency), <b>traces</b> (ek request ka services mein raasta).</p>
<ul>
<li><b>OpenTelemetry</b> vendor-neutral standard hai. .NET mein traces <code>System.Diagnostics.ActivitySource</code> aur <code>Activity</code> se bante hain; OpenTelemetry instrumentation jodte hi ASP.NET Core aur HttpClient apne aap activities banate hain.</li>
<li><b>W3C trace context</b>: <code>traceparent</code> header (<code>00-traceId-spanId-flags</code>) trace ko HTTP calls ke paar le jaata hai; messages ke liye kai SDKs use message properties mein aage le jaate hain; custom outbox relay mein use khud store aur restore karna padta hai.</li>
<li><b>Correlation id</b>: ek request ki har log line mein ek id (trace id achha chalta hai). Usse search karke poori kahaani dikhti hai.</li>
</ul>
<p><b>Kab use karein:</b> har remote call par timeouts aur retries; zaroori ya dheemi dependencies par breakers aur bulkheads; pehli service se hi tracing. <b>Kab nahi:</b> non-idempotent calls ko aankh moondkar retry mat karo, kai retry layers mat chadhao (retries guna hoti hain), aur aisa fallback mat jodo jo asli errors ko dashboard se chhupa de.</p>`
      }
    },
    {
      id: "outbox-inbox-in-code",
      depth: "detailed",
      title: {
        en: "Transactional Outbox and Inbox in code — never lose, never apply twice",
        hi: "Transactional Outbox और Inbox code में — न खोए, न दो बार apply हो",
        hg: "Transactional Outbox aur Inbox code mein — na khoye, na do baar apply ho"
      },
      body: {
        en: `<p><b>Picture — a courier register and a delivery slip:</b> the shop writes the courier request in a register at the <b>same moment</b> it writes the sale in the ledger (one pen stroke, one page). A runner later takes unsent entries to the courier. If the runner faints after handing over a parcel but before ticking the register, the next runner hands it over again — so the receiver keeps a <b>received-slips list</b> and refuses a slip it has already seen.</p>
<p><b>Outbox side (producer):</b></p>
<ul>
<li>The handler saves the business change <b>and</b> an <code>OutboxMessage</code> row with <b>one</b> <code>SaveChangesAsync</code> (one transaction). No broker call inside the request.</li>
<li>The row carries a stable <code>MessageId</code> (consumers dedupe on it) and the current <code>traceparent</code>, so the trace continues in the consumer.</li>
<li>A background relay reads unsent rows <b>in id order</b>, publishes, then marks <code>SentAt</code>. A crash between publish and mark means a duplicate on restart: at-least-once.</li>
<li>Run <b>one</b> relay (or lock the rows) if per-aggregate order matters; clean up old sent rows regularly.</li>
</ul>
<p><b>Inbox side (consumer):</b> the consumer inserts the <code>MessageId</code> into an inbox table <b>in the same transaction</b> as its effect. The key is unique, so a second parallel delivery fails on the key and is retried and then skipped.</p>
<p>Other tools: <b>idempotency keys</b> from the client for HTTP (Day 13); natural idempotence (<code>SET status = 'Paid'</code> instead of <code>amount += x</code>); CDC (change data capture) tools can also read the outbox table instead of a polling relay.</p>
<p><b>When to use:</b> whenever a state change must also produce an event for another service (the dual-write problem). <b>When not:</b> if the event is only an in-process notification, or a lost event is truly acceptable — an outbox adds a table, a relay and clean-up to run.</p>`,
        hi: `<p><b>तस्वीर — courier का register और delivery की पर्ची:</b> दुकान courier request उसी <b>पल</b> register में लिखती है जब sale खाते में लिखती है (एक कलम, एक पन्ना)। बाद में एक runner unsent entries courier को पहुँचाता है। अगर runner parcel देकर register पर tick लगाने से पहले बेहोश हो जाए, तो अगला runner फिर दे देगा — इसलिए लेने वाला <b>मिली पर्चियों की list</b> रखता है और जो पर्ची देख चुका है उसे मना कर देता है।</p>
<p><b>Outbox की तरफ़ (producer):</b></p>
<ul>
<li>Handler business बदलाव <b>और</b> एक <code>OutboxMessage</code> row <b>एक</b> <code>SaveChangesAsync</code> (एक transaction) से save करता है। Request के अंदर broker call नहीं।</li>
<li>Row में पक्का <code>MessageId</code> (consumers इसी से dedupe करते हैं) और मौजूदा <code>traceparent</code> रहता है, ताकि trace consumer में आगे चले।</li>
<li>Background relay unsent rows <b>id के order में</b> पढ़ता है, publish करता है, फिर <code>SentAt</code> mark करता है। Publish और mark के बीच crash का मतलब restart पर duplicate: at-least-once।</li>
<li>अगर per-aggregate order मायने रखता है तो <b>एक</b> relay चलाओ (या rows lock करो); पुराने sent rows regularly साफ़ करो।</li>
</ul>
<p><b>Inbox की तरफ़ (consumer):</b> consumer <code>MessageId</code> को अपने effect की <b>उसी transaction</b> में inbox table में insert करता है। Key unique है, इसलिए दूसरी parallel delivery key पर fail होती है, retry होती है और फिर skip हो जाती है।</p>
<p>दूसरे औज़ार: HTTP के लिए client की <b>idempotency keys</b> (Day 13); natural idempotence (<code>amount += x</code> की जगह <code>SET status = 'Paid'</code>); CDC (change data capture) tools polling relay की जगह outbox table भी पढ़ सकते हैं।</p>
<p><b>कब use करें:</b> जब भी एक state बदलाव को दूसरी service के लिए event भी बनाना हो (dual-write problem)। <b>कब नहीं:</b> अगर event सिर्फ़ in-process notification है, या event का खोना सच में चलेगा — outbox एक table, एक relay और clean-up जोड़ता है जिन्हें चलाना पड़ता है।</p>`,
        hg: `<p><b>Tasveer — courier ka register aur delivery ki parchi:</b> dukaan courier request usi <b>pal</b> register mein likhti hai jab sale khaate mein likhti hai (ek kalam, ek panna). Baad mein ek runner unsent entries courier ko pahunchata hai. Agar runner parcel dekar register par tick lagane se pehle behosh ho jaaye, to agla runner phir de dega — isliye lene wala <b>mili parchiyon ki list</b> rakhta hai aur jo parchi dekh chuka hai use mana kar deta hai.</p>
<p><b>Outbox ki taraf (producer):</b></p>
<ul>
<li>Handler business badlaav <b>aur</b> ek <code>OutboxMessage</code> row <b>ek</b> <code>SaveChangesAsync</code> (ek transaction) se save karta hai. Request ke andar broker call nahi.</li>
<li>Row mein pakka <code>MessageId</code> (consumers isi se dedupe karte hain) aur maujooda <code>traceparent</code> rehta hai, taaki trace consumer mein aage chale.</li>
<li>Background relay unsent rows <b>id ke order mein</b> padhta hai, publish karta hai, phir <code>SentAt</code> mark karta hai. Publish aur mark ke beech crash ka matlab restart par duplicate: at-least-once.</li>
<li>Agar per-aggregate order maayne rakhta hai to <b>ek</b> relay chalao (ya rows lock karo); purane sent rows regularly saaf karo.</li>
</ul>
<p><b>Inbox ki taraf (consumer):</b> consumer <code>MessageId</code> ko apne effect ki <b>usi transaction</b> mein inbox table mein insert karta hai. Key unique hai, isliye doosri parallel delivery key par fail hoti hai, retry hoti hai aur phir skip ho jaati hai.</p>
<p>Doosre auzaar: HTTP ke liye client ki <b>idempotency keys</b> (Day 13); natural idempotence (<code>amount += x</code> ki jagah <code>SET status = 'Paid'</code>); CDC (change data capture) tools polling relay ki jagah outbox table bhi padh sakte hain.</p>
<p><b>Kab use karein:</b> jab bhi ek state badlaav ko doosri service ke liye event bhi banana ho (dual-write problem). <b>Kab nahi:</b> agar event sirf in-process notification hai, ya event ka khona sach mein chalega — outbox ek table, ek relay aur clean-up jodta hai jinhe chalana padta hai.</p>`
      },
      code: [
        {
          caption: {
            en: "Outbox written in the same SaveChanges, relay in id order, inbox row in the same transaction as the effect",
            hi: "Outbox उसी SaveChanges में, relay id के order में, inbox row effect की उसी transaction में",
            hg: "Outbox usi SaveChanges mein, relay id ke order mein, inbox row effect ki usi transaction mein"
          },
          check: "compile",
          packages: ["Microsoft.EntityFrameworkCore"],
          src: `using System.Diagnostics;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;

public class Order
{
    public Guid Id { get; set; }
    public string Customer { get; set; } = "";
    public string Status { get; set; } = "Placed";
}

public class OutboxMessage
{
    public long Id { get; set; }                 // increasing: the relay publishes in this order
    public Guid MessageId { get; set; }          // stable id: consumers dedupe on it
    public string Type { get; set; } = "";
    public string Payload { get; set; } = "";
    public string? TraceParent { get; set; }     // lets the consumer continue the trace
    public DateTimeOffset? SentAt { get; set; }
}

public class InboxMessage
{
    public Guid MessageId { get; set; }          // primary key = unique
    public DateTimeOffset HandledAt { get; set; }
}

public class ShopDbContext(DbContextOptions<ShopDbContext> options) : DbContext(options)
{
    public DbSet<Order> Orders => Set<Order>();
    public DbSet<OutboxMessage> Outbox => Set<OutboxMessage>();
    public DbSet<InboxMessage> Inbox => Set<InboxMessage>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
        => modelBuilder.Entity<InboxMessage>().HasKey(i => i.MessageId);
}

public class PlaceOrderHandler(ShopDbContext db)
{
    public async Task<Guid> HandleAsync(string customer, CancellationToken ct)
    {
        var order = new Order { Id = Guid.NewGuid(), Customer = customer };
        db.Orders.Add(order);
        db.Outbox.Add(new OutboxMessage
        {
            MessageId = Guid.NewGuid(),
            Type = "OrderPlaced",
            Payload = JsonSerializer.Serialize(new { order.Id, order.Customer }),
            TraceParent = Activity.Current?.Id
        });
        await db.SaveChangesAsync(ct);           // one transaction: order + outbox row
        return order.Id;
    }
}

public interface IMessagePublisher
{
    Task PublishAsync(OutboxMessage message, CancellationToken ct);
}

// Run ONE relay (or lock rows) when order matters. A crash after PublishAsync means a duplicate later.
public class OutboxRelay(ShopDbContext db, IMessagePublisher publisher, TimeProvider clock)
{
    public async Task RunOnceAsync(CancellationToken ct)
    {
        var batch = await db.Outbox.Where(m => m.SentAt == null).OrderBy(m => m.Id).Take(100).ToListAsync(ct);
        foreach (var message in batch)
        {
            await publisher.PublishAsync(message, ct);
            message.SentAt = clock.GetUtcNow();
            await db.SaveChangesAsync(ct);
        }
    }
}

public class PaymentTakenConsumer(ShopDbContext db, TimeProvider clock)
{
    public async Task HandleAsync(Guid messageId, Guid orderId, CancellationToken ct)
    {
        if (await db.Inbox.AnyAsync(i => i.MessageId == messageId, ct)) return;   // duplicate: skip

        var order = await db.Orders.SingleAsync(o => o.Id == orderId, ct);
        order.Status = "Paid";                                                    // idempotent: SET, not +=
        db.Inbox.Add(new InboxMessage { MessageId = messageId, HandledAt = clock.GetUtcNow() });
        await db.SaveChangesAsync(ct);   // effect + inbox row commit together; a parallel duplicate hits the key and is retried
    }
}`
        }
      ]
    },
    {
      id: "saga-in-code",
      depth: "detailed",
      title: {
        en: "An orchestrated Saga in code — steps, reverse compensation, parked failures",
        hi: "Orchestrated Saga code में — steps, उल्टी compensation, parked failures",
        hg: "Orchestrated Saga code mein — steps, ulti compensation, parked failures"
      },
      body: {
        en: `<p><b>Picture — a wedding planner with a checklist:</b> the planner books the hall, the caterer, then the band. If the band cancels, the planner opens the checklist and cancels the caterer, then the hall — in that order — and notes any vendor who would not refund so a person can follow up.</p>
<p><b>The shape of an orchestrator:</b></p>
<ul>
<li>A list of steps, each with <b>Execute</b> and <b>Compensate</b>. Completed steps go on a stack.</li>
<li>On a failure, pop the stack: compensation runs in <b>reverse order</b>. The failed step itself is not compensated (it did not complete) — unless it may have half-completed, then make its compensation safe to run anyway.</li>
<li>A compensation can fail too. Do not hide it: retry (with backoff), and when retries run out <b>park</b> it for a human with an alert.</li>
<li>In a real system the orchestrator is <b>durable</b>: it stores its state after each step (a table, or a workflow engine such as Durable Functions or a saga library) and talks to services by <b>messages</b> (through an outbox), so a restart resumes instead of forgetting. Every step and compensation must be <b>idempotent</b>, because messages repeat.</li>
</ul>
<p><b>Design hints:</b> steps that cannot be compensated (email, irreversible transfers) go <b>after</b> the last step that can fail (the pivot); refundable card charges are fine mid-saga; give the user a visible state (<code>Pending</code>, <code>Confirmed</code>, <code>Cancelled</code>) because the result is eventual; avoid "pivot" mistakes by deciding which step is the point of no return.</p>
<p><b>Choreography vs orchestration — which one?</b> Choreography suits two or three services with a simple chain. Once there are more steps, branches or timeouts, the hidden flow is painful — use an orchestrator.</p>
<p><b>When to use a Saga:</b> a long business process over several services, with a plausible failure in the middle. <b>When not:</b> a single service/database can use one normal transaction; an in-memory loop like this one is only a teaching model, not a production orchestrator.</p>`,
        hi: `<p><b>तस्वीर — checklist वाला wedding planner:</b> planner पहले hall book करता है, फिर caterer, फिर band। Band मना कर दे तो planner checklist खोलता है और caterer cancel करता है, फिर hall — इसी order में — और जिस vendor ने refund नहीं दिया उसे note कर लेता है ताकि कोई इंसान follow up करे।</p>
<p><b>Orchestrator का ढाँचा:</b></p>
<ul>
<li>Steps की list, हर एक में <b>Execute</b> और <b>Compensate</b>। पूरे हुए steps stack पर जाते हैं।</li>
<li>Failure पर stack से pop करो: compensation <b>उल्टे order</b> में चलती है। Fail हुए step की compensation नहीं होती (वह पूरा नहीं हुआ) — जब तक वह आधा पूरा न हुआ हो सकता हो, तब उसकी compensation ऐसी बनाओ कि चलाना safe हो।</li>
<li>Compensation भी fail हो सकती है। छुपाओ मत: retry करो (backoff के साथ), और retries ख़त्म हों तो alert के साथ इंसान के लिए <b>park</b> करो।</li>
<li>असली system में orchestrator <b>durable</b> होता है: हर step के बाद अपनी state store करता है (table, या Durable Functions जैसा workflow engine या saga library) और services से <b>messages</b> (outbox से) बात करता है, ताकि restart पर वह भूले नहीं, आगे बढ़े। हर step और compensation <b>idempotent</b> होनी चाहिए, क्योंकि messages दोहराते हैं।</li>
</ul>
<p><b>Design hints:</b> जिन steps की compensation नहीं हो सकती (email, irreversible transfers) उन्हें आख़िरी fail हो सकने वाले step (pivot) के <b>बाद</b> रखो; refund हो सकने वाली card charges saga के बीच में ठीक हैं; user को दिखने वाली state दो (<code>Pending</code>, <code>Confirmed</code>, <code>Cancelled</code>) क्योंकि नतीजा eventual है; तय करो कि कौन-सा step "point of no return" है।</p>
<p><b>Choreography बनाम orchestration — कौन-सी?</b> दो-तीन services की सीधी chain के लिए choreography ठीक है। Steps, branches या timeouts बढ़ें तो छुपा हुआ flow तकलीफ़ देता है — orchestrator लो।</p>
<p><b>Saga कब use करें:</b> कई services पर लंबा business process, जिसमें बीच में failure मुमकिन है। <b>कब नहीं:</b> एक service/database एक normal transaction से कर सकता है; इस जैसा in-memory loop सिर्फ़ समझाने का model है, production orchestrator नहीं।</p>`,
        hg: `<p><b>Tasveer — checklist wala wedding planner:</b> planner pehle hall book karta hai, phir caterer, phir band. Band mana kar de to planner checklist kholta hai aur caterer cancel karta hai, phir hall — isi order mein — aur jis vendor ne refund nahi diya use note kar leta hai taaki koi insaan follow up kare.</p>
<p><b>Orchestrator ka dhaancha:</b></p>
<ul>
<li>Steps ki list, har ek mein <b>Execute</b> aur <b>Compensate</b>. Poore hue steps stack par jaate hain.</li>
<li>Failure par stack se pop karo: compensation <b>ulte order</b> mein chalti hai. Fail hue step ki compensation nahi hoti (woh poora nahi hua) — jab tak woh aadha poora na hua ho sakta ho, tab uski compensation aisi banao ki chalana safe ho.</li>
<li>Compensation bhi fail ho sakti hai. Chhupao mat: retry karo (backoff ke saath), aur retries khatam hon to alert ke saath insaan ke liye <b>park</b> karo.</li>
<li>Asli system mein orchestrator <b>durable</b> hota hai: har step ke baad apni state store karta hai (table, ya Durable Functions jaisa workflow engine ya saga library) aur services se <b>messages</b> (outbox se) baat karta hai, taaki restart par woh bhoole nahi, aage badhe. Har step aur compensation <b>idempotent</b> honi chahiye, kyunki messages dohrate hain.</li>
</ul>
<p><b>Design hints:</b> jin steps ki compensation nahi ho sakti (email, irreversible transfers) unhe aakhri fail ho sakne wale step (pivot) ke <b>baad</b> rakho; refund ho sakne wali card charges saga ke beech mein theek hain; user ko dikhne wali state do (<code>Pending</code>, <code>Confirmed</code>, <code>Cancelled</code>) kyunki nateeja eventual hai; tay karo ki kaun-sa step "point of no return" hai.</p>
<p><b>Choreography vs orchestration — kaun-si?</b> do-teen services ki seedhi chain ke liye choreography theek hai. Steps, branches ya timeouts badhein to chhupa hua flow takleef deta hai — orchestrator lo.</p>
<p><b>Saga kab use karein:</b> kai services par lamba business process, jismein beech mein failure mumkin hai. <b>Kab nahi:</b> ek service/database ek normal transaction se kar sakta hai; is jaisa in-memory loop sirf samjhane ka model hai, production orchestrator nahi.</p>`
      },
      code: [
        {
          caption: {
            en: "Orchestrator: stack of completed steps, reverse compensation, a failing compensation is parked, not hidden",
            hi: "Orchestrator: पूरे हुए steps का stack, उल्टी compensation, fail होने वाली compensation parked होती है, छुपती नहीं",
            hg: "Orchestrator: poore hue steps ka stack, ulti compensation, fail hone wali compensation parked hoti hai, chhupti nahi"
          },
          check: "run",
          src: `var steps = new List<SagaStep>
{
    new("ReserveStock", () => Say("stock reserved"), () => throw new TimeoutException("inventory slow")),
    new("ChargeCard", () => Say("card charged"), () => Say("card refunded")),
    new("CreateShipment", () => throw new InvalidOperationException("courier API down"), () => Say("shipment cancelled")),
};

var state = await new OrderSaga(steps).RunAsync("order-42");
Console.WriteLine("final state: " + state);

static Task Say(string text)
{
    Console.WriteLine("  " + text);
    return Task.CompletedTask;
}

record SagaStep(string Name, Func<Task> Execute, Func<Task> Compensate);

class OrderSaga(IReadOnlyList<SagaStep> steps)
{
    public async Task<string> RunAsync(string orderId)
    {
        var done = new Stack<SagaStep>();
        foreach (var step in steps)
        {
            try
            {
                Console.WriteLine($"{orderId}: {step.Name}");
                await step.Execute();
                done.Push(step);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"{orderId}: {step.Name} failed ({ex.Message}) -> compensating");
                var parked = 0;
                while (done.Count > 0)
                {
                    var completed = done.Pop();
                    try { await completed.Compensate(); }
                    catch (Exception cex)
                    {
                        parked++;
                        Console.WriteLine($"  compensation {completed.Name} failed ({cex.Message}), parked for retry");
                    }
                }
                return parked == 0 ? "Compensated" : "NeedsAttention";
            }
        }
        return "Completed";
    }
}`,
          expected: `order-42: ReserveStock
  stock reserved
order-42: ChargeCard
  card charged
order-42: CreateShipment
order-42: CreateShipment failed (courier API down) -> compensating
  card refunded
  compensation ReserveStock failed (inventory slow), parked for retry
final state: NeedsAttention`
        }
      ]
    },
    {
      id: "resilience-in-code",
      depth: "detailed",
      title: {
        en: "Resilience in code — Polly v8 pipeline and an HttpClient resilience handler",
        hi: "Resilience code में — Polly v8 pipeline और HttpClient resilience handler",
        hg: "Resilience code mein — Polly v8 pipeline aur HttpClient resilience handler"
      },
      body: {
        en: `<p><b>Picture — a chain of checks at an airport:</b> each gate has a job. One checks the time limit, one decides if you may try again, one closes the gate when too many fail. The <b>order</b> of the gates matters.</p>
<p><b>Order in a pipeline (outer to inner):</b> concurrency limit (bulkhead) → retry → circuit breaker → per-attempt timeout. The retry wraps the breaker, so each attempt is counted by the breaker, and each attempt has its own short timeout. Add a total timeout around everything if the caller has a deadline.</p>
<ul>
<li><b>Polly v8</b>: <code>ResiliencePipelineBuilder</code> and strategy options (<code>RetryStrategyOptions</code>, <code>CircuitBreakerStrategyOptions</code>). Packages: <code>Polly.Core</code>, <code>Polly.RateLimiting</code> (for <code>AddConcurrencyLimiter</code>), and <code>Polly.Extensions</code> for DI.</li>
<li><b>HttpClient</b>: <code>Microsoft.Extensions.Http.Resilience</code>. Use <code>AddStandardResilienceHandler()</code> when the defaults fit (Day 13), or <code>AddResilienceHandler</code> to build your own pipeline for one downstream.</li>
<li><b>Safe retries only</b>: handle transient failures (timeouts, network errors, 5xx, 429); disable retries for unsafe methods such as POST unless the server is idempotent (idempotency key, Day 13).</li>
<li>Delays use <b>exponential backoff with jitter</b> (see puzzle 4). Retries multiply across layers (see the backoff Q&A) — retry at <b>one</b> layer, and honour <code>Retry-After</code> if the server sends it.</li>
<li>Pick numbers from measurements (real latency percentiles), not guesses; log every retry and every breaker state change, so the dashboard shows it.</li>
</ul>
<p><b>When to use:</b> every call that crosses a process or network boundary. <b>When not:</b> do not add retries in front of a non-idempotent call; do not use a long timeout "just in case" (it ties up threads); do not stack retry in the gateway, the client and the SDK all at once.</p>`,
        hi: `<p><b>तस्वीर — airport की जाँच की कड़ी:</b> हर gate का एक काम है। एक time limit देखता है, एक तय करता है कि आप फिर कोशिश कर सकते हैं या नहीं, एक gate बंद करता है जब बहुत लोग fail हों। Gates का <b>order</b> मायने रखता है।</p>
<p><b>Pipeline में order (बाहर से अंदर):</b> concurrency limit (bulkhead) → retry → circuit breaker → per-attempt timeout। Retry breaker को लपेटती है, इसलिए हर attempt breaker गिनता है, और हर attempt का अपना छोटा timeout है। Caller की deadline हो तो सबके बाहर एक total timeout जोड़ो।</p>
<ul>
<li><b>Polly v8</b>: <code>ResiliencePipelineBuilder</code> और strategy options (<code>RetryStrategyOptions</code>, <code>CircuitBreakerStrategyOptions</code>)। Packages: <code>Polly.Core</code>, <code>Polly.RateLimiting</code> (<code>AddConcurrencyLimiter</code> के लिए), और DI के लिए <code>Polly.Extensions</code>।</li>
<li><b>HttpClient</b>: <code>Microsoft.Extensions.Http.Resilience</code>। Defaults फ़िट हों तो <code>AddStandardResilienceHandler()</code> (Day 13), या किसी एक downstream के लिए अपनी pipeline बनाने को <code>AddResilienceHandler</code>।</li>
<li><b>सिर्फ़ safe retries</b>: transient failures (timeouts, network errors, 5xx, 429) handle करो; POST जैसे unsafe methods पर retries बंद करो जब तक server idempotent न हो (idempotency key, Day 13)।</li>
<li>Delays <b>exponential backoff + jitter</b> से (puzzle 4 देखो)। Retries layers में गुणा होती हैं (backoff वाला Q&A देखो) — retry <b>एक</b> layer पर करो, और server <code>Retry-After</code> भेजे तो उसे मानो।</li>
<li>Numbers measurement से चुनो (असली latency percentiles), अंदाज़े से नहीं; हर retry और breaker state change को log करो, ताकि dashboard में दिखे।</li>
</ul>
<p><b>कब use करें:</b> हर वह call जो process या network की सीमा पार करे। <b>कब नहीं:</b> non-idempotent call के आगे retries मत लगाओ; "कहीं ज़रूरत पड़े" सोचकर लंबा timeout मत रखो (threads फँसते हैं); gateway, client और SDK तीनों में एक साथ retry मत चढ़ाओ।</p>`,
        hg: `<p><b>Tasveer — airport ki jaanch ki kadi:</b> har gate ka ek kaam hai. Ek time limit dekhta hai, ek tay karta hai ki aap phir koshish kar sakte hain ya nahi, ek gate band karta hai jab bahut log fail hon. Gates ka <b>order</b> maayne rakhta hai.</p>
<p><b>Pipeline mein order (bahar se andar):</b> concurrency limit (bulkhead) → retry → circuit breaker → per-attempt timeout. Retry breaker ko lapetti hai, isliye har attempt breaker ginta hai, aur har attempt ka apna chhota timeout hai. Caller ki deadline ho to sabke bahar ek total timeout jodo.</p>
<ul>
<li><b>Polly v8</b>: <code>ResiliencePipelineBuilder</code> aur strategy options (<code>RetryStrategyOptions</code>, <code>CircuitBreakerStrategyOptions</code>). Packages: <code>Polly.Core</code>, <code>Polly.RateLimiting</code> (<code>AddConcurrencyLimiter</code> ke liye), aur DI ke liye <code>Polly.Extensions</code>.</li>
<li><b>HttpClient</b>: <code>Microsoft.Extensions.Http.Resilience</code>. Defaults fit hon to <code>AddStandardResilienceHandler()</code> (Day 13), ya kisi ek downstream ke liye apni pipeline banane ko <code>AddResilienceHandler</code>.</li>
<li><b>Sirf safe retries</b>: transient failures (timeouts, network errors, 5xx, 429) handle karo; POST jaise unsafe methods par retries band karo jab tak server idempotent na ho (idempotency key, Day 13).</li>
<li>Delays <b>exponential backoff + jitter</b> se (puzzle 4 dekho). Retries layers mein guna hoti hain (backoff wala Q&A dekho) — retry <b>ek</b> layer par karo, aur server <code>Retry-After</code> bheje to use mano.</li>
<li>Numbers measurement se chuno (asli latency percentiles), andaaze se nahi; har retry aur breaker state change ko log karo, taaki dashboard mein dikhe.</li>
</ul>
<p><b>Kab use karein:</b> har woh call jo process ya network ki seema paar kare. <b>Kab nahi:</b> non-idempotent call ke aage retries mat lagao; "kahin zaroorat pade" soch kar lamba timeout mat rakho (threads phanste hain); gateway, client aur SDK teeno mein ek saath retry mat chadhao.</p>`
      },
      code: [
        {
          caption: {
            en: "Polly v8 pipeline: bulkhead, retry with backoff + jitter (idempotent GET only), breaker, per-attempt timeout",
            hi: "Polly v8 pipeline: bulkhead, backoff + jitter वाली retry (सिर्फ़ idempotent GET), breaker, per-attempt timeout",
            hg: "Polly v8 pipeline: bulkhead, backoff + jitter wali retry (sirf idempotent GET), breaker, per-attempt timeout"
          },
          check: "compile",
          packages: ["Microsoft.Extensions.Http.Resilience"],
          src: `using Polly;
using Polly.CircuitBreaker;
using Polly.Retry;
using Polly.Timeout;

public class CatalogClient(HttpClient http)
{
    private readonly ResiliencePipeline _pipeline = new ResiliencePipelineBuilder()
        .AddConcurrencyLimiter(permitLimit: 20, queueLimit: 10)          // bulkhead
        .AddRetry(new RetryStrategyOptions
        {
            ShouldHandle = new PredicateBuilder().Handle<HttpRequestException>().Handle<TimeoutRejectedException>(),
            MaxRetryAttempts = 3,
            BackoffType = DelayBackoffType.Exponential,
            UseJitter = true,
            Delay = TimeSpan.FromMilliseconds(200)
        })
        .AddCircuitBreaker(new CircuitBreakerStrategyOptions
        {
            FailureRatio = 0.5,
            MinimumThroughput = 10,
            SamplingDuration = TimeSpan.FromSeconds(30),
            BreakDuration = TimeSpan.FromSeconds(30)
        })
        .AddTimeout(TimeSpan.FromSeconds(2))                               // per attempt
        .Build();

    // GET is idempotent, so retrying it is safe.
    public ValueTask<string> GetProductAsync(int id, CancellationToken ct) =>
        _pipeline.ExecuteAsync(async token => await http.GetStringAsync($"/products/{id}", token), ct);
}`
        },
        {
          caption: {
            en: "AddResilienceHandler for one downstream — retries switched off for unsafe methods like POST",
            hi: "एक downstream के लिए AddResilienceHandler — POST जैसे unsafe methods पर retries बंद",
            hg: "Ek downstream ke liye AddResilienceHandler — POST jaise unsafe methods par retries band"
          },
          check: "compile",
          packages: ["Microsoft.Extensions.Http.Resilience"],
          src: `using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Http.Resilience;
using Polly;

public static class PaymentsClientSetup
{
    public static IServiceCollection AddPaymentsClient(this IServiceCollection services)
    {
        services.AddHttpClient("payments", c => c.BaseAddress = new Uri("https://payments.internal/"))
            .AddResilienceHandler("payments", pipeline =>
            {
                var retry = new HttpRetryStrategyOptions
                {
                    MaxRetryAttempts = 3,
                    BackoffType = DelayBackoffType.Exponential,
                    UseJitter = true,
                    Delay = TimeSpan.FromMilliseconds(200)
                };
                retry.DisableForUnsafeHttpMethods();       // POST is not retried here; retry it only when it carries an idempotency key (Day 13)
                pipeline.AddRetry(retry);

                pipeline.AddCircuitBreaker(new HttpCircuitBreakerStrategyOptions
                {
                    SamplingDuration = TimeSpan.FromSeconds(30),
                    BreakDuration = TimeSpan.FromSeconds(30)
                });

                pipeline.AddTimeout(TimeSpan.FromSeconds(2));   // per attempt
            });
        return services;
    }
}`
        }
      ]
    },
    {
      id: "yarp-and-tracing-in-code",
      depth: "detailed",
      title: {
        en: "YARP gateway and distributed tracing in code",
        hi: "YARP gateway और distributed tracing code में",
        hg: "YARP gateway aur distributed tracing code mein"
      },
      body: {
        en: `<p><b>Picture — a courier tracking number:</b> one number follows the parcel through every hub. A <code>traceparent</code> is that tracking number for a request; every service adds its own "scan" (a span).</p>
<p><b>YARP in a gateway app</b> (package <code>Yarp.ReverseProxy</code>): you define <b>routes</b> (which URL goes where) and <b>clusters</b> (the destination servers). Configuration can be reloaded without a restart. Keep the gateway thin: routing, auth, rate limiting, header transforms — no business rules.</p>
<p><b>Tracing in .NET:</b></p>
<ul>
<li>Create an <code>ActivitySource</code> once (static, one per component) and start activities for meaningful work: <code>using var activity = Source.StartActivity("ChargeCard")</code>. It is <code>null</code> when nobody listens, so use <code>activity?.SetTag(...)</code>.</li>
<li>ASP.NET Core reads the incoming <code>traceparent</code>, and HttpClient writes it on outgoing calls, so HTTP hops join one trace by themselves once OpenTelemetry instrumentation is registered.</li>
<li><b>Messages</b>: many messaging SDKs (for example the Azure Service Bus client, MassTransit, NServiceBus) propagate the trace context in message properties. With a hand-written outbox relay or a raw client you store the <code>traceparent</code> (the outbox row does) and, in the consumer, start an activity with that parent context (kind <code>Consumer</code>).</li>
<li>Tag with <b>business identifiers</b> (order id), never with secrets or personal data. Sample in production (for example keep a percentage of traces) to control cost.</li>
<li>Export with <b>OTLP</b> to a collector or backend (Jaeger, Grafana Tempo, Azure Monitor and others); logs should also carry the trace id.</li>
</ul>
<p><b>When to use:</b> gateway when many clients meet many services; tracing in every service from day one. <b>When not:</b> skip the gateway for one or two services and one client (extra hop, extra component); do not trace every tiny method (noise and cost) — trace boundaries: requests, DB calls, outgoing calls, message handling.</p>`,
        hi: `<p><b>तस्वीर — courier का tracking number:</b> एक number parcel के साथ हर hub से गुज़रता है। <code>traceparent</code> request का वही tracking number है; हर service अपना "scan" (एक span) जोड़ती है।</p>
<p><b>Gateway app में YARP</b> (package <code>Yarp.ReverseProxy</code>): आप <b>routes</b> (कौन-सा URL कहाँ जाए) और <b>clusters</b> (destination servers) बनाते हैं। Configuration restart के बिना reload हो सकती है। Gateway को पतला रखो: routing, auth, rate limiting, header transforms — business rules नहीं।</p>
<p><b>.NET में tracing:</b></p>
<ul>
<li><code>ActivitySource</code> एक बार बनाओ (static, हर component का एक) और काम के हिस्सों के लिए activities शुरू करो: <code>using var activity = Source.StartActivity("ChargeCard")</code>। कोई सुन न रहा हो तो यह <code>null</code> होता है, इसलिए <code>activity?.SetTag(...)</code> लिखो।</li>
<li>ASP.NET Core आने वाला <code>traceparent</code> पढ़ता है, और HttpClient बाहर जाने वाली calls पर लिखता है, इसलिए OpenTelemetry instrumentation register होते ही HTTP hops अपने आप एक trace में जुड़ जाते हैं।</li>
<li><b>Messages</b>: कई messaging SDKs (जैसे Azure Service Bus client, MassTransit, NServiceBus) trace context को message properties में आगे ले जाते हैं। हाथ से लिखे outbox relay या raw client में <code>traceparent</code> आपको store करना होता है (outbox row करती है) और consumer में उसी parent context के साथ activity शुरू करनी होती है (kind <code>Consumer</code>)।</li>
<li><b>Business identifiers</b> (order id) से tag करो, secrets या personal data से कभी नहीं। खर्च काबू में रखने के लिए production में sampling करो (जैसे traces का एक percentage रखो)।</li>
<li><b>OTLP</b> से collector या backend (Jaeger, Grafana Tempo, Azure Monitor वग़ैरह) को export करो; logs में भी trace id होना चाहिए।</li>
</ul>
<p><b>कब use करें:</b> जब कई clients कई services से मिलें तब gateway; पहले दिन से हर service में tracing। <b>कब नहीं:</b> एक-दो services और एक client के लिए gateway छोड़ दो (एक और hop, एक और component); हर छोटे method को trace मत करो (शोर और खर्च) — सीमाओं को trace करो: requests, DB calls, बाहर जाने वाली calls, message handling।</p>`,
        hg: `<p><b>Tasveer — courier ka tracking number:</b> ek number parcel ke saath har hub se guzarta hai. <code>traceparent</code> request ka wahi tracking number hai; har service apna "scan" (ek span) jodti hai.</p>
<p><b>Gateway app mein YARP</b> (package <code>Yarp.ReverseProxy</code>): aap <b>routes</b> (kaun-sa URL kahan jaaye) aur <b>clusters</b> (destination servers) banate hain. Configuration restart ke bina reload ho sakti hai. Gateway ko patla rakho: routing, auth, rate limiting, header transforms — business rules nahi.</p>
<p><b>.NET mein tracing:</b></p>
<ul>
<li><code>ActivitySource</code> ek baar banao (static, har component ka ek) aur kaam ke hisson ke liye activities shuru karo: <code>using var activity = Source.StartActivity("ChargeCard")</code>. Koi sun na raha ho to yeh <code>null</code> hota hai, isliye <code>activity?.SetTag(...)</code> likho.</li>
<li>ASP.NET Core aane wala <code>traceparent</code> padhta hai, aur HttpClient bahar jaane wali calls par likhta hai, isliye OpenTelemetry instrumentation register hote hi HTTP hops apne aap ek trace mein jud jaate hain.</li>
<li><b>Messages</b>: kai messaging SDKs (jaise Azure Service Bus client, MassTransit, NServiceBus) trace context ko message properties mein aage le jaate hain. Haath se likhe outbox relay ya raw client mein <code>traceparent</code> aapko store karna hota hai (outbox row karti hai) aur consumer mein usi parent context ke saath activity shuru karni hoti hai (kind <code>Consumer</code>).</li>
<li><b>Business identifiers</b> (order id) se tag karo, secrets ya personal data se kabhi nahi. Kharcha kaabu mein rakhne ke liye production mein sampling karo (jaise traces ka ek percentage rakho).</li>
<li><b>OTLP</b> se collector ya backend (Jaeger, Grafana Tempo, Azure Monitor waghairah) ko export karo; logs mein bhi trace id hona chahiye.</li>
</ul>
<p><b>Kab use karein:</b> jab kai clients kai services se milein tab gateway; pehle din se har service mein tracing. <b>Kab nahi:</b> ek-do services aur ek client ke liye gateway chhod do (ek aur hop, ek aur component); har chhote method ko trace mat karo (shor aur kharcha) — seemaon ko trace karo: requests, DB calls, bahar jaane wali calls, message handling.</p>`
      },
      code: [
        {
          caption: {
            en: "YARP routes and clusters (appsettings.json) — a thin gateway",
            hi: "YARP routes और clusters (appsettings.json) — पतला gateway",
            hg: "YARP routes aur clusters (appsettings.json) — patla gateway"
          },
          lang: "json",
          check: "none",
          src: `{
  "ReverseProxy": {
    "Routes": {
      "orders-route": {
        "ClusterId": "orders",
        "Match": { "Path": "/api/orders/{**catch-all}" }
      },
      "catalog-route": {
        "ClusterId": "catalog",
        "Match": { "Path": "/api/catalog/{**catch-all}" }
      }
    },
    "Clusters": {
      "orders":  { "Destinations": { "d1": { "Address": "https://orders.internal/" } } },
      "catalog": { "Destinations": { "d1": { "Address": "https://catalog.internal/" } } }
    }
  }
}`
        },
        {
          caption: {
            en: "Gateway Program.cs and OpenTelemetry setup (packages not run-checked here: Yarp.ReverseProxy, OpenTelemetry.*)",
            hi: "Gateway Program.cs और OpenTelemetry setup (packages यहाँ run-check नहीं हुए: Yarp.ReverseProxy, OpenTelemetry.*)",
            hg: "Gateway Program.cs aur OpenTelemetry setup (packages yahan run-check nahi hue: Yarp.ReverseProxy, OpenTelemetry.*)"
          },
          check: "none",
          src: `using OpenTelemetry.Metrics;
using OpenTelemetry.Resources;
using OpenTelemetry.Trace;

// Packages: Yarp.ReverseProxy, OpenTelemetry.Extensions.Hosting,
// OpenTelemetry.Instrumentation.AspNetCore, OpenTelemetry.Instrumentation.Http,
// OpenTelemetry.Exporter.OpenTelemetryProtocol
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddReverseProxy()
    .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));

builder.Services.AddOpenTelemetry()
    .ConfigureResource(r => r.AddService("gateway"))
    .WithTracing(t => t
        .AddAspNetCoreInstrumentation()
        .AddHttpClientInstrumentation()
        .AddSource("Shop.Orders")          // our own ActivitySource
        .AddOtlpExporter())
    .WithMetrics(m => m
        .AddAspNetCoreInstrumentation()
        .AddHttpClientInstrumentation()
        .AddOtlpExporter());

var app = builder.Build();
app.MapReverseProxy();
app.Run();`
        },
        {
          caption: {
            en: "Custom spans, and carrying traceparent through a message (producer and consumer)",
            hi: "अपने spans, और message के ज़रिए traceparent आगे ले जाना (producer और consumer)",
            hg: "Apne spans, aur message ke zariye traceparent aage le jaana (producer aur consumer)"
          },
          check: "compile",
          src: `using System.Diagnostics;

public static class Telemetry
{
    public static readonly ActivitySource Source = new("Shop.Orders");
}

public record OrderMessage(string OrderId, string? TraceParent);

public class OrderPublisher
{
    public OrderMessage Create(string orderId)
    {
        using var activity = Telemetry.Source.StartActivity("PublishOrderPlaced", ActivityKind.Producer);
        activity?.SetTag("order.id", orderId);                 // business id, no personal data
        return new OrderMessage(orderId, activity?.Id);        // W3C traceparent travels in the message
    }
}

public class OrderConsumer
{
    public void Handle(OrderMessage message)
    {
        ActivityContext parent = default;
        if (message.TraceParent is not null)
            ActivityContext.TryParse(message.TraceParent, null, out parent);

        using var activity = Telemetry.Source.StartActivity("HandleOrderPlaced", ActivityKind.Consumer, parent);
        activity?.SetTag("order.id", message.OrderId);
        // ... idempotent work here ...
    }
}`
        }
      ]
    },
    /*SECTIONS*/
  ],
  qa: [
    {
      id: "when-microservices",
      depth: "short",
      q: "When would you choose microservices over a monolith?",
      answer: "When several teams need independent releases or scaling, and the organisation can run pipelines, monitoring and on-call. Otherwise a modular monolith is cheaper and safer.",
      meaning: {
        hi: "जब कई teams को अलग releases या scaling चाहिए, और organisation pipelines, monitoring और on-call चला सके। वरना modular monolith सस्ता और सुरक्षित है।",
        hg: "Jab kai teams ko alag releases ya scaling chahiye, aur organisation pipelines, monitoring aur on-call chala sake. Warna modular monolith sasta aur surakshit hai."
      },
      explain: {
        en: `<ul>
<li>Good reasons: several autonomous teams, parts with very different scaling or availability, different release rhythms, fault isolation.</li>
<li>Weak reasons: "it is modern", "Netflix does it", or a small team that has no deployment automation yet.</li>
<li>State the costs in the same breath: network failures, no shared transaction, data copies, contracts, observability, on-call (Day 15 had the monolith side).</li>
<li>Follow-up: "How would you migrate?" — gradually (strangler): extract the module with the clearest border and real pain first, keep the monolith running, and measure before the next split.</li>
</ul>`,
        hi: `<ul>
<li>अच्छी वजहें: कई autonomous teams, ऐसे हिस्से जिनकी scaling या availability बहुत अलग है, अलग release rhythm, fault isolation।</li>
<li>कमज़ोर वजहें: "यह modern है", "Netflix करता है", या छोटी team जिसके पास अभी deployment automation नहीं।</li>
<li>लागतें साथ में ही बताओ: network failures, shared transaction नहीं, data की कॉपियाँ, contracts, observability, on-call (Day 15 में monolith का पक्ष था)।</li>
<li>Follow-up: "Migrate कैसे करोगे?" — धीरे-धीरे (strangler): जिस module की सीमा सबसे साफ़ और दर्द असली हो उसे पहले निकालो, monolith चलता रखो, और अगले split से पहले नापो।</li>
</ul>`,
        hg: `<ul>
<li>Achhi wajahein: kai autonomous teams, aise hisse jinki scaling ya availability bahut alag hai, alag release rhythm, fault isolation.</li>
<li>Kamzor wajahein: "yeh modern hai", "Netflix karta hai", ya chhoti team jiske paas abhi deployment automation nahi.</li>
<li>Laagatein saath mein hi batao: network failures, shared transaction nahi, data ki copies, contracts, observability, on-call (Day 15 mein monolith ka paksh tha).</li>
<li>Follow-up: "Migrate kaise karoge?" — dheere-dheere (strangler): jis module ki seema sabse saaf aur dard asli ho use pehle nikaalo, monolith chalta rakho, aur agle split se pehle naapo.</li>
</ul>`
      }
    },
    {
      id: "api-gateway-what",
      depth: "short",
      q: "What does an API gateway do, and what should it not do?",
      answer: "It is the single entry point: routing, authentication, rate limiting, TLS and logging. It should not hold business logic, or it becomes a new monolith and a single point of failure.",
      meaning: {
        hi: "यह एक ही entry point है: routing, authentication, rate limiting, TLS और logging। इसमें business logic नहीं होना चाहिए, वरना यह नया monolith और single point of failure बन जाता है।",
        hg: "Yeh ek hi entry point hai: routing, authentication, rate limiting, TLS aur logging. Ismein business logic nahi hona chahiye, warna yeh naya monolith aur single point of failure ban jaata hai."
      },
      explain: {
        en: `<ul>
<li>Typical jobs: route by path or host, validate tokens, throttle, terminate TLS, cache some responses, add correlation ids, collect access logs.</li>
<li>Risks: a single point of failure (run several instances) and a growing pile of logic. Keep it thin; business rules stay in services.</li>
<li>In .NET the usual self-hosted choice is <b>YARP</b> (<code>Yarp.ReverseProxy</code>), configured with routes and clusters.</li>
<li>A <b>BFF</b> (Backend for Frontend) is a gateway/API per client type, shaped to that client's screens and owned by the same team — it may merge several service calls for one screen. Do not make one giant shared gateway for every client.</li>
<li>Follow-up: "Gateway vs service mesh?" — gateway handles north-south traffic (clients to the system); a mesh handles east-west traffic between services (mTLS, retries) and is usually a later step.</li>
</ul>`,
        hi: `<ul>
<li>आम काम: path या host से route करना, tokens validate करना, throttle करना, TLS terminate करना, कुछ responses cache करना, correlation ids जोड़ना, access logs जमा करना।</li>
<li>ख़तरे: single point of failure (कई instances चलाओ) और बढ़ता logic का ढेर। इसे पतला रखो; business rules services में रहते हैं।</li>
<li>.NET में self-hosted आम पसंद <b>YARP</b> (<code>Yarp.ReverseProxy</code>) है, जो routes और clusters से configure होता है।</li>
<li><b>BFF</b> (Backend for Frontend) हर client type का gateway/API है, उस client की screens के हिसाब से बना और उसी team की ownership — वह एक screen के लिए कई service calls मिला सकता है। हर client के लिए एक बहुत बड़ा shared gateway मत बनाओ।</li>
<li>Follow-up: "Gateway बनाम service mesh?" — gateway north-south traffic (clients से system तक) सँभालता है; mesh services के बीच east-west traffic (mTLS, retries) सँभालता है और आम तौर पर बाद का कदम है।</li>
</ul>`,
        hg: `<ul>
<li>Aam kaam: path ya host se route karna, tokens validate karna, throttle karna, TLS terminate karna, kuch responses cache karna, correlation ids jodna, access logs jama karna.</li>
<li>Khatre: single point of failure (kai instances chalao) aur badhta logic ka dher. Ise patla rakho; business rules services mein rehte hain.</li>
<li>.NET mein self-hosted aam pasand <b>YARP</b> (<code>Yarp.ReverseProxy</code>) hai, jo routes aur clusters se configure hota hai.</li>
<li><b>BFF</b> (Backend for Frontend) har client type ka gateway/API hai, us client ki screens ke hisaab se bana aur usi team ki ownership — woh ek screen ke liye kai service calls mila sakta hai. Har client ke liye ek bahut bada shared gateway mat banao.</li>
<li>Follow-up: "Gateway vs service mesh?" — gateway north-south traffic (clients se system tak) sambhalta hai; mesh services ke beech east-west traffic (mTLS, retries) sambhalta hai aur aam taur par baad ka kadam hai.</li>
</ul>`
      }
    },
    {
      id: "sync-vs-async",
      depth: "short",
      q: "Synchronous or asynchronous communication between services — how do you choose?",
      answer: "Use sync HTTP/gRPC when the caller needs the answer now; use async messaging for commands and events that can finish later. Sync couples services in time; async trades that for eventual consistency.",
      meaning: {
        hi: "जब caller को जवाब अभी चाहिए तब sync HTTP/gRPC; जो commands और events बाद में पूरे हो सकते हैं उनके लिए async messaging। Sync services को समय में बाँधता है; async उसके बदले eventual consistency देता है।",
        hg: "Jab caller ko jawaab abhi chahiye tab sync HTTP/gRPC; jo commands aur events baad mein poore ho sakte hain unke liye async messaging. Sync services ko samay mein baandhta hai; async uske badle eventual consistency deta hai."
      },
      explain: {
        en: `<ul>
<li><b>Temporal coupling</b>: with sync calls, both services must be up at the same moment; with a broker in between, the receiver can be down and catch up later.</li>
<li>Async costs: eventual consistency, duplicates, ordering questions, harder debugging, and a UI that must show "pending".</li>
<li>gRPC (HTTP/2, protobuf contracts) fits internal, low-latency, streaming calls; REST/JSON fits public and browser-facing APIs (browsers need gRPC-Web or JSON transcoding to reach gRPC).</li>
<li>Follow-up: "Order service needs the price from Catalog" — a read the user waits on: sync call (or a local copy of prices). "Order placed, send email and update stock" — events, async.</li>
</ul>`,
        hi: `<ul>
<li><b>Temporal coupling</b>: sync calls में दोनों services एक ही पल up होनी चाहिए; बीच में broker हो तो receiver down रहकर बाद में पकड़ सकता है।</li>
<li>Async की कीमत: eventual consistency, duplicates, ordering के सवाल, मुश्किल debugging, और ऐसा UI जो "pending" दिखाए।</li>
<li>gRPC (HTTP/2, protobuf contracts) internal, कम latency, streaming calls के लिए ठीक है; REST/JSON public और browser वाली APIs के लिए (browsers को gRPC तक पहुँचने के लिए gRPC-Web या JSON transcoding चाहिए)।</li>
<li>Follow-up: "Order service को Catalog से price चाहिए" — user जिस read का इंतज़ार कर रहा है: sync call (या prices की local कॉपी)। "Order place हुआ, email भेजो और stock update करो" — events, async।</li>
</ul>`,
        hg: `<ul>
<li><b>Temporal coupling</b>: sync calls mein dono services ek hi pal up honi chahiye; beech mein broker ho to receiver down rehkar baad mein pakad sakta hai.</li>
<li>Async ki keemat: eventual consistency, duplicates, ordering ke sawaal, mushkil debugging, aur aisa UI jo "pending" dikhaye.</li>
<li>gRPC (HTTP/2, protobuf contracts) internal, kam latency, streaming calls ke liye theek hai; REST/JSON public aur browser wali APIs ke liye (browsers ko gRPC tak pahunchne ke liye gRPC-Web ya JSON transcoding chahiye).</li>
<li>Follow-up: "Order service ko Catalog se price chahiye" — user jis read ka intezaar kar raha hai: sync call (ya prices ki local copy). "Order place hua, email bhejo aur stock update karo" — events, async.</li>
</ul>`
      }
    },
    {
      id: "at-least-once-idempotent",
      depth: "short",
      q: "Can a message broker give you exactly-once processing?",
      answer: "In practice brokers deliver at-least-once, so duplicates happen. You get an effectively-once result with an idempotent consumer that remembers handled message ids.",
      meaning: {
        hi: "Practice में brokers at-least-once deliver करते हैं, इसलिए duplicates आते हैं। Effectively-once नतीजा idempotent consumer से मिलता है जो handle हुए message ids याद रखता है।",
        hg: "Practice mein brokers at-least-once deliver karte hain, isliye duplicates aate hain. Effectively-once nateeja idempotent consumer se milta hai jo handle hue message ids yaad rakhta hai."
      },
      explain: {
        en: `<ul>
<li>The broker redelivers until it gets an acknowledgement. If the consumer finishes the work but crashes before acknowledging, the same message comes again.</li>
<li>Some systems offer "exactly-once" inside their own boundary (for example transactional reads and writes in the same system), but the moment your handler also writes to your own database or calls an API, you must handle duplicates yourself.</li>
<li>Make the consumer idempotent: an inbox table with a unique message id in the same transaction as the effect, or a naturally idempotent operation (<code>SET status</code> not <code>+=</code>). See puzzle 1.</li>
<li>Follow-up: "At-most-once?" — acknowledge first, then process: a crash loses the message. Fine for metrics, not for payments.</li>
</ul>`,
        hi: `<ul>
<li>Broker acknowledgement मिलने तक दोबारा देता रहता है। Consumer काम पूरा करके acknowledge से पहले crash हो जाए तो वही message फिर आता है।</li>
<li>कुछ systems अपनी सीमा के अंदर "exactly-once" देते हैं (जैसे उसी system में transactional reads और writes), पर जैसे ही आपका handler अपने database में लिखे या API बुलाए, duplicates आपको ख़ुद सँभालने होंगे।</li>
<li>Consumer को idempotent बनाओ: effect की उसी transaction में unique message id वाली inbox table, या natural idempotent operation (<code>+=</code> नहीं, <code>SET status</code>)। Puzzle 1 देखो।</li>
<li>Follow-up: "At-most-once?" — पहले acknowledge, फिर process: crash हुआ तो message खो गया। Metrics के लिए ठीक, payments के लिए नहीं।</li>
</ul>`,
        hg: `<ul>
<li>Broker acknowledgement milne tak dobara deta rehta hai. Consumer kaam poora karke acknowledge se pehle crash ho jaaye to wahi message phir aata hai.</li>
<li>Kuch systems apni seema ke andar "exactly-once" dete hain (jaise usi system mein transactional reads aur writes), par jaise hi aapka handler apne database mein likhe ya API bulaye, duplicates aapko khud sambhalne honge.</li>
<li>Consumer ko idempotent banao: effect ki usi transaction mein unique message id wali inbox table, ya natural idempotent operation (<code>+=</code> nahi, <code>SET status</code>). Puzzle 1 dekho.</li>
<li>Follow-up: "At-most-once?" — pehle acknowledge, phir process: crash hua to message kho gaya. Metrics ke liye theek, payments ke liye nahi.</li>
</ul>`
      }
    },
    {
      id: "outbox-pattern",
      depth: "short",
      q: "What is the Transactional Outbox pattern and what problem does it solve?",
      answer: "Write the event to an outbox table in the same transaction as the data; a relay publishes it later. It solves the dual-write problem: saved data with a lost event.",
      meaning: {
        hi: "Event को data की उसी transaction में outbox table में लिखो; relay उसे बाद में publish करता है। यह dual-write problem सुलझाता है: data save हुआ पर event खो गया।",
        hg: "Event ko data ki usi transaction mein outbox table mein likho; relay use baad mein publish karta hai. Yeh dual-write problem suljhata hai: data save hua par event kho gaya."
      },
      explain: {
        en: `<ul>
<li>Problem: "save to DB, then publish to the broker" has no shared transaction. Crash in between: data saved, event lost (or the reverse if you publish first).</li>
<li>Solution: one <code>SaveChanges</code> writes the data and an <code>OutboxMessage</code> row. A relay (background service) reads unsent rows in id order, publishes, marks them sent.</li>
<li>Result: events are <b>never lost</b>, but may be <b>duplicated</b> (crash after publish, before marking) — so consumers must be idempotent (inbox). See puzzle 2.</li>
<li>Variants: polling relay, or a CDC tool reading the table's change log. Clean up old sent rows. This is the reliable version of "dispatch after SaveChanges" from the Day 15 domain events answer.</li>
<li>Follow-up: "Why not just use a distributed transaction?" — not supported by most brokers and cloud services, and it locks resources.</li>
</ul>`,
        hi: `<ul>
<li>समस्या: "DB में save करो, फिर broker को publish करो" में shared transaction नहीं है। बीच में crash: data save, event खोया (या उल्टा, अगर पहले publish करो)।</li>
<li>हल: एक <code>SaveChanges</code> data और एक <code>OutboxMessage</code> row लिखता है। Relay (background service) unsent rows id के order में पढ़ता है, publish करता है, sent mark करता है।</li>
<li>नतीजा: events <b>कभी खोते नहीं</b>, पर <b>duplicate हो</b> सकते हैं (publish के बाद, mark से पहले crash) — इसलिए consumers idempotent होने चाहिए (inbox)। Puzzle 2 देखो।</li>
<li>Variants: polling relay, या CDC tool जो table का change log पढ़े। पुराने sent rows साफ़ करो। यह Day 15 के domain events वाले जवाब के "SaveChanges के बाद dispatch" का reliable रूप है।</li>
<li>Follow-up: "सीधे distributed transaction क्यों नहीं?" — ज़्यादातर brokers और cloud services उसे support नहीं करते, और वह resources lock करती है।</li>
</ul>`,
        hg: `<ul>
<li>Samasya: "DB mein save karo, phir broker ko publish karo" mein shared transaction nahi hai. Beech mein crash: data save, event khoya (ya ulta, agar pehle publish karo).</li>
<li>Hal: ek <code>SaveChanges</code> data aur ek <code>OutboxMessage</code> row likhta hai. Relay (background service) unsent rows id ke order mein padhta hai, publish karta hai, sent mark karta hai.</li>
<li>Nateeja: events <b>kabhi khoye nahi</b>, par <b>duplicate ho</b> sakte hain (publish ke baad, mark se pehle crash) — isliye consumers idempotent hone chahiye (inbox). Puzzle 2 dekho.</li>
<li>Variants: polling relay, ya CDC tool jo table ka change log padhe. Purane sent rows saaf karo. Yeh Day 15 ke domain events wale jawaab ke "SaveChanges ke baad dispatch" ka reliable roop hai.</li>
<li>Follow-up: "Seedhe distributed transaction kyun nahi?" — zyadatar brokers aur cloud services use support nahi karte, aur woh resources lock karti hai.</li>
</ul>`
      }
    },
    {
      id: "saga-what",
      depth: "short",
      q: "What is a Saga, and why not use a distributed transaction?",
      answer: "A Saga is a chain of local transactions, each with a compensating action that runs in reverse order on failure. Two-phase commit locks resources across services and is poorly supported, so it is avoided.",
      meaning: {
        hi: "Saga local transactions की कड़ी है, हर एक की compensating action, जो failure पर उल्टे order में चलती है। Two-phase commit services के पार resources lock करती है और कम जगह support होती है, इसलिए टाली जाती है।",
        hg: "Saga local transactions ki kadi hai, har ek ki compensating action, jo failure par ulte order mein chalti hai. Two-phase commit services ke paar resources lock karti hai aur kam jagah support hoti hai, isliye taali jaati hai."
      },
      explain: {
        en: `<ul>
<li>Each service commits its own local transaction and publishes a message; if a later step fails, the earlier steps are undone by <b>compensating actions</b> (refund, release stock), in reverse order.</li>
<li>A compensation is a business action, not a rollback — and it must be idempotent, because it may be retried. Some steps cannot be truly undone (an email), so plan a semantic undo (apology).</li>
<li>The state is <b>eventually consistent</b>: show "Pending" to the user and decide which step is the point of no return.</li>
<li>Why not 2PC: it holds locks while waiting for every participant, the coordinator is a bottleneck, and message brokers and most cloud services do not take part.</li>
<li>See puzzle 3 for the reverse order and the failed step not being compensated.</li>
</ul>`,
        hi: `<ul>
<li>हर service अपनी local transaction commit करती है और message publish करती है; बाद का कोई step fail हो तो पहले के steps <b>compensating actions</b> (refund, stock release) से, उल्टे order में undo होते हैं।</li>
<li>Compensation business action है, rollback नहीं — और वह idempotent होनी चाहिए, क्योंकि retry हो सकती है। कुछ steps सच में undo नहीं हो सकते (email), इसलिए semantic undo (माफ़ी) सोचो।</li>
<li>State <b>eventually consistent</b> है: user को "Pending" दिखाओ और तय करो कि कौन-सा step point of no return है।</li>
<li>2PC क्यों नहीं: वह हर participant का इंतज़ार करते हुए locks पकड़े रखती है, coordinator bottleneck बनता है, और message brokers व ज़्यादातर cloud services उसमें शामिल नहीं होते।</li>
<li>Reverse order और fail हुए step की compensation न होने के लिए puzzle 3 देखो।</li>
</ul>`,
        hg: `<ul>
<li>Har service apni local transaction commit karti hai aur message publish karti hai; baad ka koi step fail ho to pehle ke steps <b>compensating actions</b> (refund, stock release) se, ulte order mein undo hote hain.</li>
<li>Compensation business action hai, rollback nahi — aur woh idempotent honi chahiye, kyunki retry ho sakti hai. Kuch steps sach mein undo nahi ho sakte (email), isliye semantic undo (maafi) socho.</li>
<li>State <b>eventually consistent</b> hai: user ko "Pending" dikhao aur tay karo ki kaun-sa step point of no return hai.</li>
<li>2PC kyun nahi: woh har participant ka intezaar karte hue locks pakde rehti hai, coordinator bottleneck banta hai, aur message brokers va zyadatar cloud services usmein shaamil nahi hote.</li>
<li>Reverse order aur fail hue step ki compensation na hone ke liye puzzle 3 dekho.</li>
</ul>`
      }
    },
    {
      id: "retry-and-circuit-breaker",
      depth: "short",
      q: "How do retries and a circuit breaker work together?",
      answer: "Retry handles short transient failures with backoff and jitter, on idempotent calls only. The breaker stops calling a failing service for a while, so retries do not cause a storm.",
      meaning: {
        hi: "Retry छोटी transient failures को backoff और jitter के साथ सँभालती है, सिर्फ़ idempotent calls पर। Breaker fail होती service को कुछ देर call करना बंद कर देता है, ताकि retries से storm न बने।",
        hg: "Retry chhoti transient failures ko backoff aur jitter ke saath sambhalti hai, sirf idempotent calls par. Breaker fail hoti service ko kuch der call karna band kar deta hai, taaki retries se storm na bane."
      },
      explain: {
        en: `<ul>
<li>Retry answers "a blip": a timeout or 503 that is gone in a moment. Wait with exponential backoff + jitter, cap attempts, and only for calls that are safe to repeat (Day 13).</li>
<li>Circuit breaker answers "it is really down": after a failure ratio, it opens and rejects calls immediately (fail fast), then lets one trial through (half-open). See puzzle 5.</li>
<li>Order: retry outside, breaker inside, and a per-attempt timeout innermost — so each attempt counts for the breaker. An open circuit should stop further retries from hammering the service.</li>
<li>Add a <b>fallback</b> only when a degraded answer is honest (cached price), and still log it.</li>
<li>Follow-up: "How do you avoid a retry storm?" — one retry layer, backoff + jitter, a breaker, and respect <code>Retry-After</code>.</li>
</ul>`,
        hi: `<ul>
<li>Retry "छोटी हिचकी" का जवाब है: timeout या 503 जो पल भर में चला जाए। Exponential backoff + jitter से रुको, attempts कम रखो, और सिर्फ़ उन calls के लिए जो दोहराने पर safe हैं (Day 13)।</li>
<li>Circuit breaker "सच में down है" का जवाब है: failure ratio के बाद वह open होकर calls तुरंत reject करता है (fail fast), फिर एक trial जाने देता है (half-open)। Puzzle 5 देखो।</li>
<li>Order: retry बाहर, breaker अंदर, और per-attempt timeout सबसे अंदर — ताकि हर attempt breaker के लिए गिना जाए। Open circuit को आगे की retries से service पर हथौड़ा चलाने से रोकना चाहिए।</li>
<li><b>Fallback</b> तभी जोड़ो जब degraded जवाब ईमानदार हो (cached price), और फिर भी log करो।</li>
<li>Follow-up: "Retry storm से कैसे बचोगे?" — एक retry layer, backoff + jitter, एक breaker, और <code>Retry-After</code> को मानो।</li>
</ul>`,
        hg: `<ul>
<li>Retry "chhoti hichki" ka jawaab hai: timeout ya 503 jo pal bhar mein chala jaaye. Exponential backoff + jitter se ruko, attempts kam rakho, aur sirf un calls ke liye jo dohrane par safe hain (Day 13).</li>
<li>Circuit breaker "sach mein down hai" ka jawaab hai: failure ratio ke baad woh open hokar calls turant reject karta hai (fail fast), phir ek trial jaane deta hai (half-open). Puzzle 5 dekho.</li>
<li>Order: retry bahar, breaker andar, aur per-attempt timeout sabse andar — taaki har attempt breaker ke liye gina jaaye. Open circuit ko aage ki retries se service par hathauda chalane se rokna chahiye.</li>
<li><b>Fallback</b> tabhi jodo jab degraded jawaab imaandaar ho (cached price), aur phir bhi log karo.</li>
<li>Follow-up: "Retry storm se kaise bachoge?" — ek retry layer, backoff + jitter, ek breaker, aur <code>Retry-After</code> ko mano.</li>
</ul>`
      }
    },
    {
      id: "trace-across-services",
      depth: "short",
      q: "How do you trace one request across several services?",
      answer: "Use OpenTelemetry with the W3C traceparent header: each service continues the same trace id and adds its own span. Put the trace id in logs as the correlation id.",
      meaning: {
        hi: "OpenTelemetry और W3C traceparent header use करो: हर service वही trace id आगे बढ़ाती है और अपना span जोड़ती है। Trace id को logs में correlation id की तरह रखो।",
        hg: "OpenTelemetry aur W3C traceparent header use karo: har service wahi trace id aage badhati hai aur apna span jodti hai. Trace id ko logs mein correlation id ki tarah rakho."
      },
      explain: {
        en: `<ul>
<li><b>Three pillars</b>: logs (events), metrics (numbers over time), traces (one request's path). Traces connect the other two.</li>
<li>In .NET: <code>ActivitySource</code> + <code>Activity</code> (System.Diagnostics) for spans, OpenTelemetry SDK + exporters (OTLP) to ship them. ASP.NET Core and HttpClient instrumentation join HTTP hops automatically.</li>
<li><code>traceparent</code> = <code>00-&lt;trace id&gt;-&lt;span id&gt;-&lt;flags&gt;</code>. Same trace id across the system; each span has its own id and points to its parent. See puzzle 6.</li>
<li>Messages: many SDKs propagate it in message properties; with a custom outbox relay you store it (the outbox row) and restore it as the consumer's parent yourself.</li>
<li>Follow-up: "A request is slow — how do you find out why?" — open the trace, find the longest span, check its logs (same trace id) and metrics. Sample traces in production to control cost.</li>
</ul>`,
        hi: `<ul>
<li><b>three pillars</b>: logs (घटनाएँ), metrics (समय के साथ आँकड़े), traces (एक request का रास्ता)। Traces बाकी दोनों को जोड़ते हैं।</li>
<li>.NET में: spans के लिए <code>ActivitySource</code> + <code>Activity</code> (System.Diagnostics), और उन्हें भेजने के लिए OpenTelemetry SDK + exporters (OTLP)। ASP.NET Core और HttpClient instrumentation HTTP hops अपने आप जोड़ते हैं।</li>
<li><code>traceparent</code> = <code>00-&lt;trace id&gt;-&lt;span id&gt;-&lt;flags&gt;</code>। पूरे system में एक trace id; हर span का अपना id है और वह अपने parent की तरफ़ इशारा करता है। Puzzle 6 देखो।</li>
<li>Messages: कई SDKs उसे message properties में आगे ले जाते हैं; custom outbox relay में उसे store (outbox row) और consumer के parent के रूप में restore ख़ुद करना पड़ता है।</li>
<li>Follow-up: "Request धीमी है — वजह कैसे ढूँढोगे?" — trace खोलो, सबसे लंबा span ढूँढो, उसके logs (वही trace id) और metrics देखो। खर्च काबू में रखने के लिए production में traces sample करो।</li>
</ul>`,
        hg: `<ul>
<li><b>Three pillars</b>: logs (ghatnayein), metrics (samay ke saath aankde), traces (ek request ka raasta). Traces baaki dono ko jodte hain.</li>
<li>.NET mein: spans ke liye <code>ActivitySource</code> + <code>Activity</code> (System.Diagnostics), aur unhe bhejne ke liye OpenTelemetry SDK + exporters (OTLP). ASP.NET Core aur HttpClient instrumentation HTTP hops apne aap jodte hain.</li>
<li><code>traceparent</code> = <code>00-&lt;trace id&gt;-&lt;span id&gt;-&lt;flags&gt;</code>. Poore system mein ek trace id; har span ka apna id hai aur woh apne parent ki taraf ishaara karta hai. Puzzle 6 dekho.</li>
<li>Messages: kai SDKs use message properties mein aage le jaate hain; custom outbox relay mein use store (outbox row) aur consumer ke parent ke roop mein restore khud karna padta hai.</li>
<li>Follow-up: "Request dheemi hai — wajah kaise dhoondhoge?" — trace kholo, sabse lamba span dhoondho, uske logs (wahi trace id) aur metrics dekho. Kharcha kaabu mein rakhne ke liye production mein traces sample karo.</li>
</ul>`
      }
    },
    {
      id: "distributed-monolith",
      depth: "detailed",
      q: "What is a distributed monolith and how do you spot one?",
      answer: "Services that must be deployed together, share a database, or call each other in long synchronous chains. You pay the costs of microservices without their independence.",
      meaning: {
        hi: "ऐसी services जिन्हें साथ में deploy करना पड़ता है, जो database share करती हैं, या लंबी synchronous chains में एक-दूसरे को बुलाती हैं। microservices का खर्च है, उनकी आज़ादी नहीं।",
        hg: "Aisi services jinhe saath mein deploy karna padta hai, jo database share karti hain, ya lambi synchronous chains mein ek-doosre ko bulati hain. Microservices ka kharcha hai, unki aazaadi nahi."
      },
      explain: {
        en: `<ul>
<li>Signals: release trains, one change in five repos, a shared database or shared tables, a "common" library of domain types, services that cannot start without five others, borders along technical layers.</li>
<li>Why it hurts: a failure in one service spreads to all (availability multiplies down), and teams are not independent — the main benefit is gone.</li>
<li>Fixes: re-draw borders around business capabilities (bounded contexts, Day 15), give each service its own data, replace chatty sync calls with events or a local read model, version contracts so services can deploy separately.</li>
<li>TL angle: measure it — how often do services deploy independently? How many services does one feature touch? If the answer is "all", merge back into a modular monolith; that is a legitimate decision.</li>
</ul>`,
        hi: `<ul>
<li>निशानियाँ: release trains, एक बदलाव पाँच repos में, shared database या shared tables, domain types की "common" library, ऐसी services जो पाँच दूसरी के बिना start नहीं होतीं, technical layers के हिसाब से सीमाएँ।</li>
<li>तकलीफ़ क्यों: एक service की failure सब में फैलती है (availability गुणा होकर घटती है), और teams आज़ाद नहीं रहतीं — मुख्य फ़ायदा चला गया।</li>
<li>इलाज: सीमाएँ business capabilities के आसपास दोबारा खींचो (bounded contexts, Day 15), हर service को अपना data दो, बातूनी sync calls की जगह events या local read model लाओ, contracts version करो ताकि services अलग-अलग deploy हो सकें।</li>
<li>TL angle: नापो — services कितनी बार independently deploy होती हैं? एक feature कितनी services छूता है? जवाब "सब" हो तो modular monolith में वापस मिला दो; यह एक जायज़ फ़ैसला है।</li>
</ul>`,
        hg: `<ul>
<li>Nishaaniyan: release trains, ek badlaav paanch repos mein, shared database ya shared tables, domain types ki "common" library, aisi services jo paanch doosri ke bina start nahi hotin, technical layers ke hisaab se seemayein.</li>
<li>Takleef kyun: ek service ki failure sab mein phailti hai (availability guna hokar ghatti hai), aur teams aazaad nahi rehtin — mukhya faayda chala gaya.</li>
<li>Ilaaj: seemayein business capabilities ke aaspaas dobara kheencho (bounded contexts, Day 15), har service ko apna data do, baatooni sync calls ki jagah events ya local read model laao, contracts version karo taaki services alag-alag deploy ho sakein.</li>
<li>TL angle: naapo — services kitni baar independently deploy hoti hain? Ek feature kitni services chhoota hai? Jawaab "sab" ho to modular monolith mein wapas mila do; yeh ek jaayaz faisla hai.</li>
</ul>`
      }
    },
    {
      id: "yarp-vs-apim",
      depth: "detailed",
      q: "YARP or Azure API Management — how would you choose?",
      answer: "YARP is a reverse-proxy library you code and host yourself, so it is flexible and has no licence cost. Azure API Management is a managed gateway with policies, subscriptions and a developer portal (Day 20).",
      meaning: {
        hi: "YARP एक reverse-proxy library है जिसे आप खुद code और host करते हैं, इसलिए flexible है और उसका कोई licence cost नहीं। Azure API Management एक managed gateway है, जिसमें policies, subscriptions और developer portal हैं (Day 20)।",
        hg: "YARP ek reverse-proxy library hai jise aap khud code aur host karte hain, isliye flexible hai aur uska koi licence cost nahi. Azure API Management ek managed gateway hai, jismein policies, subscriptions aur developer portal hain (Day 20)."
      },
      explain: {
        en: `<ul>
<li><b>YARP</b>: you own it — custom C# logic, your own hosting, your own scaling and patching. Good for an internal gateway or a BFF in a .NET team.</li>
<li><b>Managed gateway</b> (Azure API Management, covered on Day 20): less to operate, built-in policies, API products and keys for external consumers, analytics. Less freedom, and a cost line to check.</li>
<li>Choose by who consumes the API (public partners vs internal), team skills, how much custom logic is needed, and operations capacity. They can also be combined: a managed gateway at the edge, YARP BFFs behind it.</li>
<li>Either way keep business logic out and run more than one instance.</li>
</ul>`,
        hi: `<ul>
<li><b>YARP</b>: आप मालिक हैं — अपना C# logic, अपनी hosting, अपनी scaling और patching। .NET team के internal gateway या BFF के लिए अच्छा।</li>
<li><b>Managed gateway</b> (Azure API Management, Day 20 में): चलाने को कम, built-in policies, बाहरी consumers के लिए API products और keys, analytics। आज़ादी कम, और खर्च की line देखनी पड़ती है।</li>
<li>इस हिसाब से चुनो कि API कौन use करेगा (public partners या internal), team की skills, कितना custom logic चाहिए, और operations की capacity। दोनों मिलाए भी जा सकते हैं: किनारे पर managed gateway, उसके पीछे YARP BFFs।</li>
<li>जो भी लो, business logic बाहर रखो और एक से ज़्यादा instance चलाओ।</li>
</ul>`,
        hg: `<ul>
<li><b>YARP</b>: aap maalik hain — apna C# logic, apni hosting, apni scaling aur patching. .NET team ke internal gateway ya BFF ke liye achha.</li>
<li><b>Managed gateway</b> (Azure API Management, Day 20 mein): chalane ko kam, built-in policies, bahari consumers ke liye API products aur keys, analytics. Aazaadi kam, aur kharche ki line dekhni padti hai.</li>
<li>Is hisaab se chuno ki API kaun use karega (public partners ya internal), team ki skills, kitna custom logic chahiye, aur operations ki capacity. Dono milaye bhi ja sakte hain: kinare par managed gateway, uske peeche YARP BFFs.</li>
<li>Jo bhi lo, business logic bahar rakho aur ek se zyada instance chalao.</li>
</ul>`
      }
    },
    {
      id: "queue-vs-topic",
      depth: "detailed",
      q: "Queue versus topic with subscriptions — when do you use which?",
      answer: "A queue gives each message to one consumer, for commands and work items. A topic copies each message to every subscription, for events that several services react to.",
      meaning: {
        hi: "Queue हर message एक consumer को देती है, commands और work items के लिए। Topic हर message की कॉपी हर subscription को देता है, उन events के लिए जिन पर कई services react करती हैं।",
        hg: "Queue har message ek consumer ko deti hai, commands aur work items ke liye. Topic har message ki copy har subscription ko deta hai, un events ke liye jin par kai services react karti hain."
      },
      explain: {
        en: `<ul>
<li><b>Queue</b>: point-to-point. Several instances can compete for messages (scale-out), but each message is processed by one.</li>
<li><b>Topic</b>: publish-subscribe. The publisher does not know who listens; each subscription has its own copy, its own pace and usually its own dead-letter queue (Service Bus has one per queue and per subscription).</li>
<li>Naming habit: commands are imperative ("ChargeCard") and sent to one owner; events are past-tense facts ("OrderPlaced") and published to many.</li>
<li>Adding a new subscriber to a topic does not change the publisher — that is the decoupling gain. The cost is that the publisher's event becomes a contract (see versioning).</li>
<li>The concepts are the same in most brokers; Azure Service Bus specifics (sessions, filters, locks) are on Day 20.</li>
</ul>`,
        hi: `<ul>
<li><b>Queue</b>: point-to-point। कई instances messages के लिए होड़ लगा सकते हैं (scale-out), पर हर message एक ही process करता है।</li>
<li><b>Topic</b>: publish-subscribe। Publisher को पता नहीं कौन सुन रहा है; हर subscription की अपनी कॉपी, अपनी रफ़्तार और आम तौर पर अपनी dead-letter queue होती है (Service Bus में हर queue और हर subscription की एक होती है)।</li>
<li>नाम की आदत: commands आदेश के रूप में ("ChargeCard") और एक मालिक को भेजे जाते हैं; events past-tense के facts ("OrderPlaced") और कई को publish होते हैं।</li>
<li>Topic में नया subscriber जोड़ने से publisher नहीं बदलता — यही decoupling का फ़ायदा है। कीमत यह है कि publisher का event एक contract बन जाता है (versioning देखो)।</li>
<li>Concepts ज़्यादातर brokers में एक जैसे हैं; Azure Service Bus की specifics (sessions, filters, locks) Day 20 में।</li>
</ul>`,
        hg: `<ul>
<li><b>Queue</b>: point-to-point. Kai instances messages ke liye hod laga sakte hain (scale-out), par har message ek hi process karta hai.</li>
<li><b>Topic</b>: publish-subscribe. Publisher ko pata nahi kaun sun raha hai; har subscription ki apni copy, apni raftaar aur aam taur par apni dead-letter queue hoti hai (Service Bus mein har queue aur har subscription ki ek hoti hai).</li>
<li>Naam ki aadat: commands aadesh ke roop mein ("ChargeCard") aur ek maalik ko bheje jaate hain; events past-tense ke facts ("OrderPlaced") aur kai ko publish hote hain.</li>
<li>Topic mein naya subscriber jodne se publisher nahi badalta — yahi decoupling ka faayda hai. Keemat yeh hai ki publisher ka event ek contract ban jaata hai (versioning dekho).</li>
<li>Concepts zyadatar brokers mein ek jaise hain; Azure Service Bus ki specifics (sessions, filters, locks) Day 20 mein.</li>
</ul>`
      }
    },
    {
      id: "dead-letter-queue",
      depth: "detailed",
      q: "What is a dead-letter queue and how do you operate it?",
      answer: "A dead-letter queue holds messages that failed too many times or expired, so a poison message stops blocking the rest. Monitor it, alert on it, then fix and replay.",
      meaning: {
        hi: "Dead-letter queue उन messages को रखती है जो बहुत बार fail हुए या expire हो गए, ताकि poison message बाकी को न रोके। उसे monitor करो, उस पर alert लगाओ, फिर fix करके replay करो।",
        hg: "Dead-letter queue un messages ko rakhti hai jo bahut baar fail hue ya expire ho gaye, taaki poison message baaki ko na roke. Use monitor karo, us par alert lagao, phir fix karke replay karo."
      },
      explain: {
        en: `<ul>
<li>A <b>poison message</b> keeps failing (bad data, a bug, a missing record). Without a limit, it is retried forever and blocks a queue or burns CPU. After N delivery attempts it is moved to the DLQ.</li>
<li>Separate <b>transient</b> failures (retry with backoff) from <b>permanent</b> ones (send to the DLQ early, with the reason).</li>
<li>An unwatched DLQ is a silent data-loss bin. Alert on its depth, keep the failure reason and the trace id, and have a runbook: fix the bug or data, then <b>replay</b> — which again requires an idempotent consumer.</li>
<li>Follow-up: "What about message order after replay?" — replayed messages arrive late; design handlers so a late message does not overwrite newer state (version numbers or timestamps).</li>
</ul>`,
        hi: `<ul>
<li><b>Poison message</b> हर बार fail होता है (ख़राब data, bug, गायब record)। सीमा न हो तो उसे हमेशा retry किया जाता है और वह queue रोकता या CPU खाता है। N delivery attempts के बाद उसे DLQ में डाल दिया जाता है।</li>
<li><b>Transient</b> failures (backoff से retry) और <b>permanent</b> failures (वजह के साथ जल्दी DLQ में भेजो) को अलग करो।</li>
<li>जिस DLQ को कोई देखता नहीं वह चुपचाप data खोने का डिब्बा है। उसकी depth पर alert लगाओ, failure की वजह और trace id रखो, और runbook रखो: bug या data ठीक करो, फिर <b>replay</b> करो — जिसके लिए फिर idempotent consumer चाहिए।</li>
<li>Follow-up: "Replay के बाद message order का क्या?" — replay हुए messages देर से आते हैं; handlers ऐसे बनाओ कि देर से आया message नई state को overwrite न करे (version numbers या timestamps)।</li>
</ul>`,
        hg: `<ul>
<li><b>Poison message</b> har baar fail hota hai (kharab data, bug, gayab record). Seema na ho to use hamesha retry kiya jaata hai aur woh queue rokta ya CPU khaata hai. N delivery attempts ke baad use DLQ mein daal diya jaata hai.</li>
<li><b>Transient</b> failures (backoff se retry) aur <b>permanent</b> failures (wajah ke saath jaldi DLQ mein bhejo) ko alag karo.</li>
<li>Jis DLQ ko koi dekhta nahi woh chupchaap data khone ka dibba hai. Uski depth par alert lagao, failure ki wajah aur trace id rakho, aur runbook rakho: bug ya data theek karo, phir <b>replay</b> karo — jiske liye phir idempotent consumer chahiye.</li>
<li>Follow-up: "Replay ke baad message order ka kya?" — replay hue messages der se aate hain; handlers aise banao ki der se aaya message nayi state ko overwrite na kare (version numbers ya timestamps).</li>
</ul>`
      }
    },
    {
      id: "competing-consumers-ordering",
      depth: "detailed",
      q: "What happens to message ordering when you add more consumers?",
      answer: "Competing consumers process in parallel, so global order is lost. Keep order per key by using partitions or sessions, or design handlers so order does not matter.",
      meaning: {
        hi: "Competing consumers parallel में process करते हैं, इसलिए पूरी queue का order खो जाता है। Order per key रखना हो तो partitions या sessions use करो, या handlers ऐसे बनाओ कि order मायने न रखे।",
        hg: "Competing consumers parallel mein process karte hain, isliye poori queue ka order kho jaata hai. Order per key rakhna ho to partitions ya sessions use karo, ya handlers aise banao ki order maayne na rakhe."
      },
      explain: {
        en: `<ul>
<li>Five instances read one queue: message 2 can finish before message 1. Redelivery after a failure also reorders.</li>
<li>Usually you need order only <b>per aggregate</b> (all messages of one order id). Brokers offer that through partition keys or sessions: same key goes to the same consumer, in order. Throughput then scales across keys, not within one key.</li>
<li>Designs that do not need order: carry a <b>version number</b> or timestamp and ignore stale updates; make operations commutative; send full state ("order is Paid") instead of tiny deltas.</li>
<li>A single outbox relay keeps outbox rows in order, but the broker and consumers may still reorder (puzzle 2 shows the duplicate).</li>
</ul>`,
        hi: `<ul>
<li>पाँच instances एक queue पढ़ते हैं: message 2, message 1 से पहले ख़त्म हो सकता है। Failure के बाद redelivery भी order बिगाड़ती है।</li>
<li>आम तौर पर order सिर्फ़ <b>हर aggregate के लिए</b> चाहिए (एक order id के सारे messages)। Brokers यह partition keys या sessions से देते हैं: वही key उसी consumer को जाती है, order में। Throughput keys के पार बढ़ता है, एक key के अंदर नहीं।</li>
<li>जिन designs को order नहीं चाहिए: <b>version number</b> या timestamp रखो और पुराने updates ignore करो; operations commutative बनाओ; छोटे deltas की जगह पूरी state भेजो ("order Paid है")।</li>
<li>एक outbox relay outbox rows को order में रखता है, पर broker और consumers फिर भी order बदल सकते हैं (puzzle 2 में duplicate दिखता है)।</li>
</ul>`,
        hg: `<ul>
<li>Paanch instances ek queue padhte hain: message 2, message 1 se pehle khatam ho sakta hai. Failure ke baad redelivery bhi order bigaadti hai.</li>
<li>Aam taur par order sirf <b>har aggregate ke liye</b> chahiye (ek order id ke saare messages). Brokers yeh partition keys ya sessions se dete hain: wahi key usi consumer ko jaati hai, order mein. Throughput keys ke paar badhta hai, ek key ke andar nahi.</li>
<li>Jin designs ko order nahi chahiye: <b>version number</b> ya timestamp rakho aur purane updates ignore karo; operations commutative banao; chhote deltas ki jagah poori state bhejo ("order Paid hai").</li>
<li>Ek outbox relay outbox rows ko order mein rakhta hai, par broker aur consumers phir bhi order badal sakte hain (puzzle 2 mein duplicate dikhta hai).</li>
</ul>`
      }
    },
    {
      id: "choreography-vs-orchestration",
      depth: "detailed",
      q: "Saga choreography or orchestration — which do you prefer and why?",
      answer: "Choreography: services react to each other's events with no central owner. Orchestration: a coordinator sends commands and tracks state; I prefer it as the flow gets longer or branches.",
      meaning: {
        hi: "Choreography: services एक-दूसरे के events पर react करती हैं, कोई central मालिक नहीं। Orchestration: एक coordinator commands भेजता है और state रखता है; flow लंबा या branching वाला हो तो मैं इसे पसंद करूँगा।",
        hg: "Choreography: services ek-doosre ke events par react karti hain, koi central maalik nahi. Orchestration: ek coordinator commands bhejta hai aur state rakhta hai; flow lamba ya branching wala ho to main ise pasand karunga."
      },
      explain: {
        en: `<ul>
<li><b>Choreography</b>: loose coupling, no single point of failure, easy to add a listener. Hard parts: nobody sees the whole flow, cyclic dependencies creep in, and debugging means reading many services' logs (tracing helps).</li>
<li><b>Orchestration</b>: the flow is readable in one place, timeouts and compensation are explicit, status is easy to query. Costs: an extra component, the risk of a smart orchestrator with dumb services (keep business rules in the services), and it must be durable.</li>
<li>Rule of thumb: choreography for two or three services and a simple chain; orchestration when there are many steps, branches, deadlines or approvals. Mixing is fine: orchestration inside a bounded context, events between contexts.</li>
<li>Either way: idempotent steps, reverse compensation, visible state (puzzle 3, section "An orchestrated Saga").</li>
</ul>`,
        hi: `<ul>
<li><b>Choreography</b>: loose coupling, single point of failure नहीं, listener जोड़ना आसान। मुश्किलें: पूरा flow कोई नहीं देखता, cyclic dependencies घुस जाती हैं, और debugging का मतलब कई services के logs पढ़ना है (tracing मदद करता है)।</li>
<li><b>Orchestration</b>: flow एक जगह पढ़ा जा सकता है, timeouts और compensation साफ़ हैं, status query करना आसान। कीमत: एक और component, "स्मार्ट orchestrator और बुद्धू services" का ख़तरा (business rules services में रखो), और उसका durable होना ज़रूरी।</li>
<li>Rules of thumb: दो-तीन services और सीधी chain के लिए choreography; कई steps, branches, deadlines या approvals हों तो orchestration। मिलाना ठीक है: bounded context के अंदर orchestration, contexts के बीच events।</li>
<li>दोनों में: idempotent steps, उल्टी compensation, दिखने वाली state (puzzle 3, section "An orchestrated Saga")।</li>
</ul>`,
        hg: `<ul>
<li><b>Choreography</b>: loose coupling, single point of failure nahi, listener jodna aasaan. Mushkilein: poora flow koi nahi dekhta, cyclic dependencies ghus jaati hain, aur debugging ka matlab kai services ke logs padhna hai (tracing madad karta hai).</li>
<li><b>Orchestration</b>: flow ek jagah padha ja sakta hai, timeouts aur compensation saaf hain, status query karna aasaan. Keemat: ek aur component, "smart orchestrator aur buddhu services" ka khatra (business rules services mein rakho), aur uska durable hona zaroori.</li>
<li>Rules of thumb: do-teen services aur seedhi chain ke liye choreography; kai steps, branches, deadlines ya approvals hon to orchestration. Milana theek hai: bounded context ke andar orchestration, contexts ke beech events.</li>
<li>Dono mein: idempotent steps, ulti compensation, dikhne wali state (puzzle 3, section "An orchestrated Saga").</li>
</ul>`
      }
    },
    {
      id: "inbox-idempotent-consumer",
      depth: "detailed",
      q: "How do you build an idempotent consumer?",
      answer: "Store the message id in an inbox table with a unique key, in the same transaction as the effect, and skip repeats. Prefer naturally idempotent operations when you can.",
      meaning: {
        hi: "Message id को unique key वाली inbox table में रखो, effect की उसी transaction में, और दोहराव skip करो। जब हो सके natural idempotent operations चुनो।",
        hg: "Message id ko unique key wali inbox table mein rakho, effect ki usi transaction mein, aur dohrav skip karo. Jab ho sake natural idempotent operations chuno."
      },
      explain: {
        en: `<ul>
<li>Inbox: <code>MessageId</code> is the primary key. Insert it and apply the effect in <b>one</b> <code>SaveChanges</code>. Two parallel copies: one hits the key, fails, is redelivered, and is then skipped.</li>
<li>Recording the id <b>before</b> the work (separately) loses the message if the work fails (puzzle 1). Recording it long after the work allows a double effect.</li>
<li>Natural idempotence: <code>SET status = 'Paid'</code>, upsert by key, "create if not exists". Not idempotent: <code>balance += amount</code>, "send an email" (use the inbox, or an idempotency key at the email provider).</li>
<li>The producer needs a stable message id (not a new Guid on every retry) — the outbox row's <code>MessageId</code>. For HTTP, the client sends an <b>Idempotency-Key</b> header (Day 13).</li>
<li>Keep inbox rows for longer than the broker's redelivery window, then clean up.</li>
</ul>`,
        hi: `<ul>
<li>Inbox: <code>MessageId</code> primary key है। उसे insert करो और effect <b>एक</b> <code>SaveChanges</code> में लगाओ। दो parallel कॉपियाँ: एक key पर टकराकर fail होती है, redeliver होती है और फिर skip हो जाती है।</li>
<li>Id को काम से <b>पहले</b> (अलग से) दर्ज करने पर काम fail होने पर message खो जाता है (puzzle 1)। काम के काफ़ी बाद दर्ज करने पर effect दो बार लग सकता है।</li>
<li>Natural idempotence: <code>SET status = 'Paid'</code>, key से upsert, "न हो तो बनाओ"। Idempotent नहीं: <code>balance += amount</code>, "email भेजो" (inbox use करो, या email provider की idempotency key)।</li>
<li>Producer को पक्का message id चाहिए (हर retry पर नया Guid नहीं) — outbox row का <code>MessageId</code>। HTTP में client <b>Idempotency-Key</b> header भेजता है (Day 13)।</li>
<li>Inbox rows को broker की redelivery window से ज़्यादा देर रखो, फिर साफ़ करो।</li>
</ul>`,
        hg: `<ul>
<li>Inbox: <code>MessageId</code> primary key hai. Use insert karo aur effect <b>ek</b> <code>SaveChanges</code> mein lagao. Do parallel copies: ek key par takrakar fail hoti hai, redeliver hoti hai aur phir skip ho jaati hai.</li>
<li>Id ko kaam se <b>pehle</b> (alag se) darj karne par kaam fail hone par message kho jaata hai (puzzle 1). Kaam ke kaafi baad darj karne par effect do baar lag sakta hai.</li>
<li>Natural idempotence: <code>SET status = 'Paid'</code>, key se upsert, "na ho to banao". Idempotent nahi: <code>balance += amount</code>, "email bhejo" (inbox use karo, ya email provider ki idempotency key).</li>
<li>Producer ko pakka message id chahiye (har retry par naya Guid nahi) — outbox row ka <code>MessageId</code>. HTTP mein client <b>Idempotency-Key</b> header bhejta hai (Day 13).</li>
<li>Inbox rows ko broker ki redelivery window se zyada der rakho, phir saaf karo.</li>
</ul>`
      }
    },
    {
      id: "backoff-jitter-timeout-bulkhead",
      depth: "detailed",
      q: "Explain backoff with jitter, timeouts and bulkheads. What goes wrong without them?",
      answer: "Backoff with jitter spreads retries in time, timeouts stop waiting forever, and a bulkhead limits concurrent calls per dependency. Without them, retries synchronise and one slow service exhausts all threads.",
      meaning: {
        hi: "Jitter वाला backoff retries को समय में फैलाता है, timeouts हमेशा इंतज़ार करने से रोकते हैं, और bulkhead हर dependency की concurrent calls पर limit लगाता है। इनके बिना retries एक साथ हो जाती हैं और एक धीमी service सारे threads खा जाती है।",
        hg: "Jitter wala backoff retries ko samay mein phailata hai, timeouts hamesha intezaar karne se rokte hain, aur bulkhead har dependency ki concurrent calls par limit lagata hai. Inke bina retries ek saath ho jaati hain aur ek dheemi service saare threads kha jaati hai."
      },
      explain: {
        en: `<ul>
<li><b>Backoff</b>: wait 200, 400, 800 ms... (capped). Constant instant retries hammer a service that is already struggling.</li>
<li><b>Jitter</b>: randomise each delay. Without it, all clients that failed at the same moment retry at the same moment (a "thundering herd").</li>
<li><b>Timeouts</b>: a per-attempt timeout (short) and a total timeout (the caller's deadline). Without them, a hung dependency holds threads and connections for a long time.</li>
<li><b>Bulkhead</b>: a separate limit per dependency (concurrency limiter, or a separate pool), like watertight compartments in a ship. One slow payment API then cannot use up all request threads and take down the catalog pages too.</li>
<li>Count total calls: 3 retries means up to 4 calls (puzzle 4); retries at two layers multiply (4 x 4 = 16). Retry at <b>one</b> layer.</li>
</ul>`,
        hi: `<ul>
<li><b>Backoff</b>: 200, 400, 800 ms... रुको (cap के साथ)। लगातार तुरंत retries उस service पर हथौड़ा चलाती हैं जो पहले से जूझ रही है।</li>
<li><b>Jitter</b>: हर delay को random करो। इसके बिना जो clients एक ही पल fail हुए वे एक ही पल retry करते हैं ("thundering herd")।</li>
<li><b>Timeouts</b>: एक per-attempt timeout (छोटा) और एक total timeout (caller की deadline)। इनके बिना अटकी dependency threads और connections को बहुत देर पकड़े रहती है।</li>
<li><b>Bulkhead</b>: हर dependency की अलग limit (concurrency limiter, या अलग pool), जहाज़ के watertight डिब्बों की तरह। तब एक धीमी payment API सारे request threads नहीं खा सकती और catalog pages भी नहीं गिरा सकती।</li>
<li>कुल calls गिनो: 3 retries मतलब ज़्यादा से ज़्यादा 4 calls (puzzle 4); दो layers की retries गुणा होती हैं (4 x 4 = 16)। Retry <b>एक</b> layer पर करो।</li>
</ul>`,
        hg: `<ul>
<li><b>Backoff</b>: 200, 400, 800 ms... ruko (cap ke saath). Lagaataar turant retries us service par hathauda chalati hain jo pehle se joojh rahi hai.</li>
<li><b>Jitter</b>: har delay ko random karo. Iske bina jo clients ek hi pal fail hue woh ek hi pal retry karte hain ("thundering herd").</li>
<li><b>Timeouts</b>: ek per-attempt timeout (chhota) aur ek total timeout (caller ki deadline). Inke bina atki dependency threads aur connections ko bahut der pakde rehti hai.</li>
<li><b>Bulkhead</b>: har dependency ki alag limit (concurrency limiter, ya alag pool), jahaaz ke watertight dibbon ki tarah. Tab ek dheemi payment API saare request threads nahi kha sakti aur catalog pages bhi nahi gira sakti.</li>
<li>Kul calls gino: 3 retries matlab zyada se zyada 4 calls (puzzle 4); do layers ki retries guna hoti hain (4 x 4 = 16). Retry <b>ek</b> layer par karo.</li>
</ul>`
      }
    },
    {
      id: "database-per-service-reporting",
      depth: "detailed",
      q: "Each service has its own database. How do you build a report or a screen that needs data from several services?",
      answer: "Do not join across databases. Use API composition for small queries, or a read model built from events (CQRS) for reports and heavy screens, accepting eventual consistency.",
      meaning: {
        hi: "Databases के पार join मत करो। छोटे queries के लिए API composition, या reports और भारी screens के लिए events से बना read model (CQRS), eventual consistency मानकर।",
        hg: "Databases ke paar join mat karo. Chhote queries ke liye API composition, ya reports aur bhaari screens ke liye events se bana read model (CQRS), eventual consistency maankar."
      },
      explain: {
        en: `<ul>
<li><b>Database per service</b>: only the owner reads or writes its tables. Others use its API or events. A shared database brings back tight coupling (the distributed monolith).</li>
<li><b>API composition</b>: the gateway/BFF (or a composer service) calls the services in parallel and merges the results. Simple; but latency is the slowest call, and one down service breaks the screen — handle partial results.</li>
<li><b>Read model</b> (Day 11, CQRS): a service subscribes to the others' events and keeps its own query-shaped table. Fast, independent, but eventually consistent and it needs idempotent event handling and a rebuild plan.</li>
<li>A <b>reporting store</b> (warehouse) fed by events or CDC is the usual answer for analytics.</li>
<li>Follow-up: "Customer name changed — what about old orders?" — decide per case: orders keep a snapshot of the name at order time (a fact), while the profile page shows the current name.</li>
</ul>`,
        hi: `<ul>
<li><b>Database per service</b>: सिर्फ़ मालिक अपनी tables पढ़ता या लिखता है। दूसरे उसकी API या events use करते हैं। Shared database tight coupling वापस ले आता है (distributed monolith)।</li>
<li><b>API composition</b>: gateway/BFF (या composer service) services को parallel में बुलाकर नतीजे मिलाता है। सरल है; पर latency सबसे धीमी call जितनी, और एक service down हो तो screen टूटती है — partial results सँभालो।</li>
<li><b>Read model</b> (Day 11, CQRS): एक service दूसरों के events subscribe करके अपनी query-आकार की table रखती है। तेज़, independent, पर eventually consistent, और उसे idempotent event handling और rebuild plan चाहिए।</li>
<li>Analytics के लिए आम जवाब है events या CDC से भरा <b>reporting store</b> (warehouse)।</li>
<li>Follow-up: "Customer का नाम बदला — पुराने orders का क्या?" — हर case में तय करो: orders order के वक़्त के नाम का snapshot रखते हैं (एक fact), जबकि profile page मौजूदा नाम दिखाता है।</li>
</ul>`,
        hg: `<ul>
<li><b>Database per service</b>: sirf maalik apni tables padhta ya likhta hai. Doosre uski API ya events use karte hain. Shared database tight coupling wapas le aata hai (distributed monolith).</li>
<li><b>API composition</b>: gateway/BFF (ya composer service) services ko parallel mein bulakar nateeje milata hai. Saral hai; par latency sabse dheemi call jitni, aur ek service down ho to screen tootti hai — partial results sambhalo.</li>
<li><b>Read model</b> (Day 11, CQRS): ek service doosron ke events subscribe karke apni query-aakar ki table rakhti hai. Tez, independent, par eventually consistent, aur use idempotent event handling aur rebuild plan chahiye.</li>
<li>Analytics ke liye aam jawaab hai events ya CDC se bhara <b>reporting store</b> (warehouse).</li>
<li>Follow-up: "Customer ka naam badla — purane orders ka kya?" — har case mein tay karo: orders order ke waqt ke naam ka snapshot rakhte hain (ek fact), jabki profile page maujooda naam dikhata hai.</li>
</ul>`
      }
    },
    {
      id: "contract-versioning",
      depth: "detailed",
      q: "How do you change an API or event contract without breaking other services?",
      answer: "Make changes backward compatible: add optional fields, do not remove or rename them quietly, and version real breaking changes. Verify with consumer contract tests and run old and new versions side by side.",
      meaning: {
        hi: "बदलाव backward compatible रखो: optional fields जोड़ो, उन्हें चुपचाप हटाओ या rename मत करो, और असली breaking changes को version करो। Consumer contract tests से जाँचो और पुराना व नया version साथ-साथ चलाओ।",
        hg: "Badlaav backward compatible rakho: optional fields jodo, unhe chupchaap hatao ya rename mat karo, aur asli breaking changes ko version karo. Consumer contract tests se jaancho aur purana va naya version saath-saath chalao."
      },
      explain: {
        en: `<ul>
<li>Producers and consumers deploy at different times, so the contract is the real boundary. Treat it like a public API even if it is internal.</li>
<li><b>Tolerant reader</b>: consumers ignore unknown fields. Producers only add; they do not change meaning.</li>
<li><b>Expand and contract</b>: add the new field/endpoint, migrate every consumer, then remove the old one after the last consumer has moved. For events, publish a new version (<code>OrderPlaced.v2</code>) next to the old until consumers have moved.</li>
<li><b>Consumer-driven contract tests</b> catch a breaking change in CI before it reaches production. HTTP APIs: URL or header versioning (Day 13); gRPC/protobuf: never reuse field numbers.</li>
<li>TL angle: an owner per contract, a schema registry or a shared contracts package with care (a shared library of domain types is a smell), and a deprecation policy with dates.</li>
</ul>`,
        hi: `<ul>
<li>Producers और consumers अलग-अलग वक़्त पर deploy होते हैं, इसलिए contract ही असली सीमा है। उसे public API की तरह लो, चाहे internal हो।</li>
<li><b>Tolerant reader</b>: consumers अनजान fields ignore करते हैं। Producers सिर्फ़ जोड़ते हैं; मतलब नहीं बदलते।</li>
<li><b>Expand and contract</b>: नया field/endpoint जोड़ो, हर consumer को migrate करो, फिर आख़िरी consumer के जाने के बाद पुराना हटाओ। Events के लिए, consumers के migrate होने तक पुराने के बग़ल में नया version (<code>OrderPlaced.v2</code>) publish करो।</li>
<li><b>Consumer-driven contract tests</b> breaking change को production तक पहुँचने से पहले CI में पकड़ लेते हैं। HTTP APIs: URL या header versioning (Day 13); gRPC/protobuf: field numbers दोबारा use मत करो।</li>
<li>TL angle: हर contract का एक मालिक, schema registry या सावधानी से shared contracts package (domain types की shared library एक smell है), और तारीख़ों वाली deprecation policy।</li>
</ul>`,
        hg: `<ul>
<li>Producers aur consumers alag-alag waqt par deploy hote hain, isliye contract hi asli seema hai. Use public API ki tarah lo, chahe internal ho.</li>
<li><b>Tolerant reader</b>: consumers anjaan fields ignore karte hain. Producers sirf jodte hain; matlab nahi badalte.</li>
<li><b>Expand and contract</b>: naya field/endpoint jodo, har consumer ko migrate karo, phir aakhri consumer ke jaane ke baad purana hatao. Events ke liye, consumers ke migrate hone tak purane ke baghal mein naya version (<code>OrderPlaced.v2</code>) publish karo.</li>
<li><b>Consumer-driven contract tests</b> breaking change ko production tak pahunchne se pehle CI mein pakad lete hain. HTTP APIs: URL ya header versioning (Day 13); gRPC/protobuf: field numbers dobara use mat karo.</li>
<li>TL angle: har contract ka ek maalik, schema registry ya saavdhaani se shared contracts package (domain types ki shared library ek smell hai), aur taareekhon wali deprecation policy.</li>
</ul>`
      }
    },
    {
      id: "aspire-service-defaults",
      depth: "detailed",
      q: "What is Aspire (formerly .NET Aspire) and where does it help with microservices?",
      answer: "Aspire orchestrates a multi-service app for local development with an AppHost project, and a ServiceDefaults project adds OpenTelemetry, health checks, service discovery and HttpClient resilience.",
      meaning: {
        hi: "Aspire एक multi-service app को local development के लिए AppHost project से orchestrate करता है, और ServiceDefaults project OpenTelemetry, health checks, service discovery और HttpClient resilience जोड़ता है।",
        hg: "Aspire ek multi-service app ko local development ke liye AppHost project se orchestrate karta hai, aur ServiceDefaults project OpenTelemetry, health checks, service discovery aur HttpClient resilience jodta hai."
      },
      explain: {
        en: `<ul>
<li><b>AppHost</b>: describes the services, databases and brokers of the system in C#, starts them together locally, and shows logs, traces and metrics in a dashboard — helpful because microservices are painful to run and debug on a laptop.</li>
<li><b>ServiceDefaults</b>: a shared project; each service calls <code>AddServiceDefaults()</code> to get OpenTelemetry, default health check endpoints (mapped by <code>app.MapDefaultEndpoints()</code>), service discovery and resilient HttpClient settings in one line.</li>
<li><b>Service discovery</b> in short: services call each other by logical name instead of a hard-coded address; the platform (Aspire locally, Kubernetes or DNS in production) resolves it.</li>
<li>Aspire is not a replacement for production orchestration such as Kubernetes; it can generate or help deploy manifests. Product naming and features move quickly (the ".NET" prefix was dropped in newer releases), so check the current docs.</li>
</ul>`,
        hi: `<ul>
<li><b>AppHost</b>: system की services, databases और brokers को C# में describe करता है, उन्हें local में साथ start करता है, और dashboard में logs, traces और metrics दिखाता है — काम का है क्योंकि microservices को laptop पर चलाना और debug करना तकलीफ़देह है।</li>
<li><b>ServiceDefaults</b>: एक shared project; हर service <code>AddServiceDefaults()</code> बुलाकर एक line में OpenTelemetry, default health check endpoints (mapped by <code>app.MapDefaultEndpoints()</code>), service discovery और resilient HttpClient settings पाती है।</li>
<li><b>Service discovery</b> छोटे में: services एक-दूसरे को hard-coded address की जगह logical नाम से बुलाती हैं; platform (local में Aspire, production में Kubernetes या DNS) उसे resolve करता है।</li>
<li>Aspire, Kubernetes जैसे production orchestration की जगह नहीं है; वह manifests बना सकता है या deploy में मदद कर सकता है। Product का नाम और features जल्दी बदलते हैं (नए releases में ".NET" prefix हटा दिया गया), इसलिए मौजूदा docs देखो।</li>
</ul>`,
        hg: `<ul>
<li><b>AppHost</b>: system ki services, databases aur brokers ko C# mein describe karta hai, unhe local mein saath start karta hai, aur dashboard mein logs, traces aur metrics dikhata hai — kaam ka hai kyunki microservices ko laptop par chalana aur debug karna takleefdeh hai.</li>
<li><b>ServiceDefaults</b>: ek shared project; har service <code>AddServiceDefaults()</code> bulakar ek line mein OpenTelemetry, default health check endpoints (mapped by <code>app.MapDefaultEndpoints()</code>), service discovery aur resilient HttpClient settings paati hai.</li>
<li><b>Service discovery</b> chhote mein: services ek-doosre ko hard-coded address ki jagah logical naam se bulati hain; platform (local mein Aspire, production mein Kubernetes ya DNS) use resolve karta hai.</li>
<li>Aspire, Kubernetes jaise production orchestration ki jagah nahi hai; woh manifests bana sakta hai ya deploy mein madad kar sakta hai. Product ka naam aur features jaldi badalte hain (naye releases mein ".NET" prefix hata diya gaya), isliye maujooda docs dekho.</li>
</ul>`
      }
    },
    {
      id: "before-the-first-split",
      depth: "detailed",
      q: "As a Tech Lead, what do you put in place before the first service is split out?",
      answer: "Automated build and deploy, centralised logs, metrics and tracing, health checks, clear service ownership and a contract policy. Without them every incident becomes a guessing game.",
      meaning: {
        hi: "Automated build और deploy, एक जगह के logs, metrics और tracing, health checks, service की साफ़ ownership और contract policy। इनके बिना हर incident अंदाज़े का खेल बन जाता है।",
        hg: "Automated build aur deploy, ek jagah ke logs, metrics aur tracing, health checks, service ki saaf ownership aur contract policy. Inke bina har incident andaaze ka khel ban jaata hai."
      },
      explain: {
        en: `<ul>
<li><b>Observability first</b>: structured logs with the trace id, the three signals in one place, dashboards for rate/errors/latency, alerts on symptoms (users hurt), not only CPU.</li>
<li><b>Delivery</b>: one pipeline per service, repeatable deploys, rollback, health and readiness endpoints, feature flags to separate deploy from release.</li>
<li><b>Team topology</b>: a service has one owning team (Conway's law, Day 15); a team that owns too many services is a warning. Define who is on call for what.</li>
<li><b>Technical rules</b>: database per service, contract/versioning policy, a default resilience setup (timeouts, retries, breaker) shared through a template or Aspire-style defaults, an ADR for each border decision.</li>
<li>Pick the first service by pain and border clarity, extract it behind the monolith (strangler), and measure: deploy frequency, lead time, incidents. System-design practice for this is Day 17.</li>
</ul>`,
        hi: `<ul>
<li><b>Observability पहले</b>: trace id वाले structured logs, तीनों signals एक जगह, rate/errors/latency के dashboards, symptoms (users को तकलीफ़) पर alerts, सिर्फ़ CPU पर नहीं।</li>
<li><b>Delivery</b>: हर service की एक pipeline, दोहराए जा सकने वाले deploys, rollback, health और readiness endpoints, feature flags ताकि deploy और release अलग रहें।</li>
<li><b>Team topology</b>: एक service की एक owning team (Conway's law, Day 15); जो team बहुत सारी services की मालिक है वह चेतावनी है। तय करो कि किसकी on-call किस पर है।</li>
<li><b>Technical rules</b>: database per service, contract/versioning policy, template या Aspire-जैसे defaults से बाँटा गया default resilience setup (timeouts, retries, breaker), हर सीमा के फ़ैसले का ADR।</li>
<li>पहली service दर्द और साफ़ सीमा से चुनो, monolith के पीछे से निकालो (strangler), और नापो: deploy frequency, lead time, incidents। इसकी system-design practice Day 17 में है।</li>
</ul>`,
        hg: `<ul>
<li><b>Observability pehle</b>: trace id wale structured logs, teeno signals ek jagah, rate/errors/latency ke dashboards, symptoms (users ko takleef) par alerts, sirf CPU par nahi.</li>
<li><b>Delivery</b>: har service ki ek pipeline, dohraye ja sakne wale deploys, rollback, health aur readiness endpoints, feature flags taaki deploy aur release alag rahein.</li>
<li><b>Team topology</b>: ek service ki ek owning team (Conway's law, Day 15); jo team bahut saari services ki maalik hai woh chetavni hai. Tay karo ki kiski on-call kis par hai.</li>
<li><b>Technical rules</b>: database per service, contract/versioning policy, template ya Aspire-jaise defaults se baanta gaya default resilience setup (timeouts, retries, breaker), har seema ke faisle ka ADR.</li>
<li>Pehli service dard aur saaf seema se chuno, monolith ke peeche se nikaalo (strangler), aur naapo: deploy frequency, lead time, incidents. Iski system-design practice Day 17 mein hai.</li>
</ul>`
      }
    }
    /*QA*/
  ],
  puzzles: [
    {
      id: "idempotent-consumer-mark-order",
      src: `foreach (var markFirst in new[] { true, false })
{
    Console.WriteLine(markFirst ? "mark first" : "mark after");
    var consumer = new Consumer(markFirst);
    foreach (var id in new[] { "m1", "m2", "m2", "m1", "m3" })
        consumer.Receive(id);
    Console.WriteLine("handled: " + string.Join(",", consumer.Handled));
}

class Consumer(bool markFirst)
{
    private readonly HashSet<string> _seen = [];
    private bool _failedOnce;
    public List<string> Handled { get; } = [];

    public void Receive(string id)
    {
        if (_seen.Contains(id)) { Console.WriteLine($"  skip {id}"); return; }
        if (markFirst) _seen.Add(id);
        try
        {
            if (id == "m2" && !_failedOnce) { _failedOnce = true; throw new InvalidOperationException("db down"); }
            Handled.Add(id);
            Console.WriteLine($"  done {id}");
        }
        catch (InvalidOperationException)
        {
            Console.WriteLine($"  failed {id}, will be redelivered");
            return;
        }
        if (!markFirst) _seen.Add(id);
    }
}`,
      answer: `mark first
  done m1
  failed m2, will be redelivered
  skip m2
  skip m1
  done m3
handled: m1,m3
mark after
  done m1
  failed m2, will be redelivered
  done m2
  skip m1
  done m3
handled: m1,m2,m3`,
      explain: {
        en: `<ul>
<li>The broker delivers <code>m1</code> twice and <code>m2</code> twice. A duplicate is skipped in both consumers, so the idempotent-consumer idea works: <code>m1</code> is handled once.</li>
<li>"Mark first" records the id <b>before</b> the work. When <code>m2</code> fails, the id is already in the set, so the redelivery is skipped and the message is <b>lost</b>. Handled: m1, m3.</li>
<li>"Mark after" records the id only when the work succeeded, so the redelivered <code>m2</code> is processed. All three are handled.</li>
<li>Lesson: the dedup record and the business effect must succeed or fail <b>together</b> — in a real service, write both in one database transaction (inbox table with a unique message id). The simple in-memory set here is only a teaching model.</li>
</ul>`,
        hi: `<ul>
<li>Broker <code>m1</code> दो बार और <code>m2</code> दो बार deliver करता है। दोनों consumers में duplicate skip हो जाता है, इसलिए idempotent-consumer का idea चलता है: <code>m1</code> एक ही बार handle हुआ।</li>
<li>"Mark first" id को काम से <b>पहले</b> दर्ज करता है। <code>m2</code> fail हुआ तो id पहले से set में है, इसलिए redelivery skip हो गई और message <b>खो गया</b>। Handled: m1, m3।</li>
<li>"Mark after" id तभी दर्ज करता है जब काम सफल हो, इसलिए redeliver हुआ <code>m2</code> process होता है। तीनों handle हुए।</li>
<li>सबक: dedup record और business effect <b>साथ में</b> सफल या fail होने चाहिए — असली service में दोनों को एक database transaction में लिखो (unique message id वाली inbox table)। यहाँ का in-memory set सिर्फ़ समझाने का model है।</li>
</ul>`,
        hg: `<ul>
<li>Broker <code>m1</code> do baar aur <code>m2</code> do baar deliver karta hai. Dono consumers mein duplicate skip ho jaata hai, isliye idempotent-consumer ka idea chalta hai: <code>m1</code> ek hi baar handle hua.</li>
<li>"Mark first" id ko kaam se <b>pehle</b> darj karta hai. <code>m2</code> fail hua to id pehle se set mein hai, isliye redelivery skip ho gayi aur message <b>kho gaya</b>. Handled: m1, m3.</li>
<li>"Mark after" id tabhi darj karta hai jab kaam safal ho, isliye redeliver hua <code>m2</code> process hota hai. Teeno handle hue.</li>
<li>Sabak: dedup record aur business effect <b>saath mein</b> safal ya fail hone chahiye — asli service mein dono ko ek database transaction mein likho (unique message id wali inbox table). Yahan ka in-memory set sirf samjhane ka model hai.</li>
</ul>`
      }
    },
    {
      id: "outbox-relay-crash-duplicate",
      src: `var outbox = new List<OutboxRow>
{
    new(1, "OrderPlaced:A"),
    new(2, "OrderPlaced:B"),
    new(3, "OrderPaid:A")
};
var broker = new List<string>();
var relay = new Relay(outbox, broker) { CrashAfterRow = 2 };

relay.Run();
Console.WriteLine("unsent after crash: " + string.Join(",", outbox.Where(r => !r.Sent).Select(r => r.Id)));

relay.CrashAfterRow = null;
relay.Run();

Console.WriteLine("broker: " + string.Join(" | ", broker));
Console.WriteLine("duplicates: " + (broker.Count - broker.Distinct().Count()));
Console.WriteLine("all sent: " + outbox.All(r => r.Sent));

class OutboxRow(int id, string payload)
{
    public int Id { get; } = id;
    public string Payload { get; } = payload;
    public bool Sent { get; set; }
}

class Relay(List<OutboxRow> outbox, List<string> broker)
{
    public int? CrashAfterRow { get; set; }

    public void Run()
    {
        foreach (var row in outbox.Where(r => !r.Sent).OrderBy(r => r.Id))
        {
            broker.Add(row.Payload);
            if (row.Id == CrashAfterRow)
            {
                Console.WriteLine($"relay crashed after publishing row {row.Id}");
                return;
            }
            row.Sent = true;
        }
    }
}`,
      answer: `relay crashed after publishing row 2
unsent after crash: 2,3
broker: OrderPlaced:A | OrderPlaced:B | OrderPlaced:B | OrderPaid:A
duplicates: 1
all sent: True`,
      explain: {
        en: `<ul>
<li>The relay publishes a row and <b>then</b> marks it sent. The crash happens between the two steps for row 2, so row 2 stays unsent even though the broker already has it.</li>
<li>After the restart, the relay publishes row 2 again. That is <b>at-least-once</b>: nothing is lost, but there is one duplicate.</li>
<li>The relay reads rows in <code>Id</code> order, so the order inside the broker list is still A, B, (B again), paid. Per-aggregate order is kept here because there is a single relay; several relays or retries after failures can break it.</li>
<li>The fix is not to hope the crash never happens: the consumer must be <b>idempotent</b> (inbox / dedup by message id — see the previous puzzle). The outbox gives "never lose", the inbox gives "never double-apply".</li>
</ul>`,
        hi: `<ul>
<li>Relay एक row publish करता है और <b>फिर</b> उसे sent mark करता है। row 2 के लिए crash इन दोनों steps के बीच होता है, इसलिए row 2 unsent रह जाती है जबकि broker के पास पहले से है।</li>
<li>Restart के बाद relay row 2 फिर publish करता है। यही <b>at-least-once</b> है: कुछ खोता नहीं, पर एक duplicate आता है।</li>
<li>Relay rows को <code>Id</code> order में पढ़ता है, इसलिए broker list में order फिर भी A, B, (B दोबारा), paid रहता है। यहाँ एक ही relay है इसलिए per-aggregate order बचा है; कई relays या failures के बाद retries इसे तोड़ सकते हैं।</li>
<li>इलाज यह नहीं कि crash कभी न हो: consumer <b>idempotent</b> होना चाहिए (inbox / message id से dedup — पिछला puzzle देखो)। Outbox "कभी खोए नहीं" देता है, inbox "दो बार apply न हो" देता है।</li>
</ul>`,
        hg: `<ul>
<li>Relay ek row publish karta hai aur <b>phir</b> use sent mark karta hai. Row 2 ke liye crash in dono steps ke beech hota hai, isliye row 2 unsent reh jaati hai jabki broker ke paas pehle se hai.</li>
<li>Restart ke baad relay row 2 phir publish karta hai. Yahi <b>at-least-once</b> hai: kuch khota nahi, par ek duplicate aata hai.</li>
<li>Relay rows ko <code>Id</code> order mein padhta hai, isliye broker list mein order phir bhi A, B, (B dobara), paid rehta hai. Yahan ek hi relay hai isliye per-aggregate order bacha hai; kai relays ya failures ke baad retries ise tod sakte hain.</li>
<li>Ilaaj yeh nahi ki crash kabhi na ho: consumer <b>idempotent</b> hona chahiye (inbox / message id se dedup — pichhla puzzle dekho). Outbox "kabhi khoye nahi" deta hai, inbox "do baar apply na ho" deta hai.</li>
</ul>`
      }
    },
    {
      id: "saga-compensation-reverse-order",
      src: `var steps = new List<Step>
{
    new("ReserveStock", true, "release the stock"),
    new("ChargeCard", true, "refund the card"),
    new("SendEmail", true, "send an apology email (the first email cannot be unsent)"),
    new("Ship", false, "nothing to undo")
};

var completed = new Stack<Step>();
foreach (var step in steps)
{
    if (step.Succeeds)
    {
        Console.WriteLine("do " + step.Name);
        completed.Push(step);
    }
    else
    {
        Console.WriteLine("do " + step.Name + " -> FAILED");
        break;
    }
}

while (completed.Count > 0)
{
    var step = completed.Pop();
    Console.WriteLine($"compensate {step.Name}: {step.Compensation}");
}

record Step(string Name, bool Succeeds, string Compensation);`,
      answer: `do ReserveStock
do ChargeCard
do SendEmail
do Ship -> FAILED
compensate SendEmail: send an apology email (the first email cannot be unsent)
compensate ChargeCard: refund the card
compensate ReserveStock: release the stock`,
      explain: {
        en: `<ul>
<li>A Saga has no global transaction (no 2PC), so when step 4 fails, the earlier local transactions are already committed. The saga <b>compensates</b> them.</li>
<li>Compensation runs in <b>reverse order</b> of completion — the <code>Stack</code> gives that for free: SendEmail, then ChargeCard, then ReserveStock.</li>
<li>The failed step (<code>Ship</code>) is <b>not</b> compensated: it never committed. Only completed steps are undone.</li>
<li>A compensation is a new business action, not a rollback: an email cannot be unsent, so "apology email" is the semantic undo. Compensations should be <b>idempotent</b> too, because they can be retried.</li>
<li>The email step is early here only to show a semantic undo; in a real design send it <b>after</b> Ship, once no step that can fail is left.</li>
</ul>`,
        hi: `<ul>
<li>Saga में global transaction (2PC) नहीं होती, इसलिए step 4 fail होने पर पहले की local transactions commit हो चुकी हैं। Saga उन्हें <b>compensate</b> करती है।</li>
<li>Compensation पूरे होने के <b>उल्टे order</b> में चलती है — <code>Stack</code> यह अपने आप दे देता है: SendEmail, फिर ChargeCard, फिर ReserveStock।</li>
<li>Fail हुआ step (<code>Ship</code>) compensate <b>नहीं</b> होता: वह कभी commit ही नहीं हुआ। सिर्फ़ पूरे हुए steps undo होते हैं।</li>
<li>Compensation एक नई business action है, rollback नहीं: email वापस नहीं हो सकता, इसलिए "apology email" semantic undo है। Compensations भी <b>idempotent</b> होनी चाहिए, क्योंकि उन्हें retry किया जा सकता है।</li>
<li>Email step यहाँ सिर्फ़ semantic undo दिखाने के लिए पहले रखा है; असली design में उसे Ship के <b>बाद</b> भेजो, जब fail हो सकने वाला कोई step न बचे।</li>
</ul>`,
        hg: `<ul>
<li>Saga mein global transaction (2PC) nahi hoti, isliye step 4 fail hone par pehle ki local transactions commit ho chuki hain. Saga unhe <b>compensate</b> karti hai.</li>
<li>Compensation poore hone ke <b>ulte order</b> mein chalti hai — <code>Stack</code> yeh apne aap de deta hai: SendEmail, phir ChargeCard, phir ReserveStock.</li>
<li>Fail hua step (<code>Ship</code>) compensate <b>nahi</b> hota: woh kabhi commit hi nahi hua. Sirf poore hue steps undo hote hain.</li>
<li>Compensation ek nayi business action hai, rollback nahi: email wapas nahi ho sakta, isliye "apology email" semantic undo hai. Compensations bhi <b>idempotent</b> honi chahiye, kyunki unhe retry kiya ja sakta hai.</li>
<li>Email step yahan sirf semantic undo dikhane ke liye pehle rakha hai; asli design mein use Ship ke <b>baad</b> bhejo, jab fail ho sakne wala koi step na bache.</li>
</ul>`
      }
    },
    {
      id: "retry-backoff-schedule",
      src: `static int DelayMs(int retry, double jitterFraction)
{
    var exponential = Math.Min(1000, 200 * Math.Pow(2, retry - 1));
    return (int)(exponential * jitterFraction);
}

for (var retry = 1; retry <= 4; retry++)
    Console.WriteLine($"retry {retry}: {DelayMs(retry, 1.0)} ms, with jitter 0.5: {DelayMs(retry, 0.5)} ms");

// operation succeeds on the 3rd call
var calls = 0;
var waited = 0;
for (var attempt = 0; attempt <= 4; attempt++)
{
    calls++;
    if (calls == 3) break;
    waited += DelayMs(attempt + 1, 1.0);
}
Console.WriteLine($"succeeded on call {calls}, waited {waited} ms");

// operation always fails, MaxRetryAttempts = 4
calls = 0;
waited = 0;
for (var attempt = 0; attempt <= 4; attempt++)
{
    calls++;
    if (attempt < 4) waited += DelayMs(attempt + 1, 1.0);
}
Console.WriteLine($"always failing: {calls} calls, waited {waited} ms, then give up");`,
      answer: `retry 1: 200 ms, with jitter 0.5: 100 ms
retry 2: 400 ms, with jitter 0.5: 200 ms
retry 3: 800 ms, with jitter 0.5: 400 ms
retry 4: 1000 ms, with jitter 0.5: 500 ms
succeeded on call 3, waited 600 ms
always failing: 5 calls, waited 2400 ms, then give up`,
      explain: {
        en: `<ul>
<li>Exponential backoff: 200, 400, 800 ms... The <code>Math.Min(1000, ...)</code> cap stops the delay from growing forever, so retry 4 is 1000 ms, not 1600.</li>
<li>Jitter multiplies the delay by a random fraction (fixed at 0.5 here only so the output is deterministic). In production the fraction is random, so many clients that failed together do not all retry at the same instant (a "thundering herd").</li>
<li>If the call succeeds on the 3rd call, the client waited only twice: 200 + 400 = 600 ms.</li>
<li>With a maximum of 4 retries, the client makes 1 + 4 = <b>5 calls</b> in total, and waits 200 + 400 + 800 + 1000 = 2400 ms before giving up. "Retries" and "calls" differ by one — a common interview slip.</li>
<li>No real sleeping here; the schedule is only computed. Retry only calls that are safe to repeat (idempotent) — Day 13.</li>
</ul>`,
        hi: `<ul>
<li>Exponential backoff: 200, 400, 800 ms... <code>Math.Min(1000, ...)</code> का cap delay को हमेशा बढ़ने से रोकता है, इसलिए retry 4 पर 1000 ms है, 1600 नहीं।</li>
<li>Jitter delay को एक random fraction से गुणा करता है (यहाँ output fixed रखने के लिए 0.5)। Production में fraction random होता है, ताकि जो कई clients साथ में fail हुए वे सब एक ही पल पर retry न करें ("thundering herd")।</li>
<li>Call अगर 3rd call पर सफल हो, तो client सिर्फ़ दो बार रुका: 200 + 400 = 600 ms।</li>
<li>ज़्यादा से ज़्यादा 4 retries पर client कुल 1 + 4 = <b>5 calls</b> करता है, और हार मानने से पहले 200 + 400 + 800 + 1000 = 2400 ms रुकता है। "Retries" और "calls" में एक का फ़र्क़ है — interview की आम चूक।</li>
<li>यहाँ असली sleep नहीं है; schedule सिर्फ़ compute हुआ है। सिर्फ़ वही calls retry करो जो दोहराने पर safe हैं (idempotent) — Day 13।</li>
</ul>`,
        hg: `<ul>
<li>Exponential backoff: 200, 400, 800 ms... <code>Math.Min(1000, ...)</code> ka cap delay ko hamesha badhne se rokta hai, isliye retry 4 par 1000 ms hai, 1600 nahi.</li>
<li>Jitter delay ko ek random fraction se guna karta hai (yahan output fixed rakhne ke liye 0.5). Production mein fraction random hota hai, taaki jo kai clients saath mein fail hue woh sab ek hi pal par retry na karein ("thundering herd").</li>
<li>Call agar 3rd call par safal ho, to client sirf do baar ruka: 200 + 400 = 600 ms.</li>
<li>Zyada se zyada 4 retries par client kul 1 + 4 = <b>5 calls</b> karta hai, aur haar maanne se pehle 200 + 400 + 800 + 1000 = 2400 ms rukta hai. "Retries" aur "calls" mein ek ka farq hai — interview ki aam chook.</li>
<li>Yahan asli sleep nahi hai; schedule sirf compute hua hai. Sirf wahi calls retry karo jo dohrane par safe hain (idempotent) — Day 13.</li>
</ul>`
      }
    },
    {
      id: "circuit-breaker-fake-clock",
      packages: ["Microsoft.Extensions.TimeProvider.Testing"],
      src: `using Microsoft.Extensions.Time.Testing;

var clock = new FakeTimeProvider(new DateTimeOffset(2026, 1, 1, 0, 0, 0, TimeSpan.Zero));
var start = clock.GetUtcNow();
var breaker = new Breaker(failureThreshold: 3, breakDuration: TimeSpan.FromSeconds(30), clock);

void Step(string label, bool downstreamOk)
{
    var at = (int)(clock.GetUtcNow() - start).TotalSeconds;
    Console.WriteLine($"t+{at}s {label}: {breaker.Call(downstreamOk)}");
}

Step("fail", false);
Step("fail", false);
Step("fail", false);
clock.Advance(TimeSpan.FromSeconds(10));
Step("ok call", true);
clock.Advance(TimeSpan.FromSeconds(20));
Step("trial ok", true);
Step("fail", false);
Step("fail", false);
Step("fail", false);
clock.Advance(TimeSpan.FromSeconds(30));
Step("trial fail", false);
clock.Advance(TimeSpan.FromSeconds(29));
Step("ok call", true);
clock.Advance(TimeSpan.FromSeconds(1));
Step("trial ok", true);

class Breaker(int failureThreshold, TimeSpan breakDuration, TimeProvider clock)
{
    private int _failures;
    private bool _open;
    private DateTimeOffset _openedAt;

    public string Call(bool downstreamOk)
    {
        var halfOpen = false;
        if (_open)
        {
            if (clock.GetUtcNow() - _openedAt < breakDuration) return "rejected, circuit Open";
            halfOpen = true;
        }

        if (downstreamOk)
        {
            _failures = 0;
            _open = false;
            return halfOpen ? "trial succeeded, circuit Closed" : "ok, circuit Closed";
        }

        _failures++;
        if (halfOpen || _failures >= failureThreshold)
        {
            _open = true;
            _openedAt = clock.GetUtcNow();
            return halfOpen ? "trial failed, circuit Open again" : "failure " + _failures + ", circuit Open";
        }
        return "failure " + _failures + ", circuit Closed";
    }
}`,
      answer: `t+0s fail: failure 1, circuit Closed
t+0s fail: failure 2, circuit Closed
t+0s fail: failure 3, circuit Open
t+10s ok call: rejected, circuit Open
t+30s trial ok: trial succeeded, circuit Closed
t+30s fail: failure 1, circuit Closed
t+30s fail: failure 2, circuit Closed
t+30s fail: failure 3, circuit Open
t+60s trial fail: trial failed, circuit Open again
t+89s ok call: rejected, circuit Open
t+90s trial ok: trial succeeded, circuit Closed`,
      explain: {
        en: `<ul>
<li>Closed: calls pass through and failures are counted. The 3rd failure reaches the threshold, so the circuit opens at t+0s.</li>
<li>Open: calls are rejected <b>immediately</b> without touching the sick service (fail fast). At t+10s the 30 s break has not passed, so the call is rejected even though the service might be fine.</li>
<li>After the break (t+30s) the next call is a <b>trial</b> (half-open). It succeeded, so the circuit closes and the failure count resets.</li>
<li>A failed trial opens the circuit again for a fresh 30 s: the trial fails at t+60s, so the call at t+89s is still rejected, and only at t+90s is the next trial allowed.</li>
<li>This hand-rolled breaker counts failures in a row. Polly v8 instead trips when the <code>FailureRatio</code> inside the <code>SamplingDuration</code> is reached, once <code>MinimumThroughput</code> calls have been seen — not after N consecutive failures.</li>
<li>Time is controlled with <code>FakeTimeProvider</code> (package <code>Microsoft.Extensions.TimeProvider.Testing</code>) — no sleeping, no flaky tests. In production use the resilience library (Polly v8 / Microsoft.Extensions.Http.Resilience) instead of hand-rolling this.</li>
</ul>`,
        hi: `<ul>
<li>Closed: calls निकलती रहती हैं और failures गिने जाते हैं। 3rd failure threshold पर पहुँचता है, इसलिए circuit t+0s पर open हो जाता है।</li>
<li>Open: calls बीमार service को छुए बिना <b>तुरंत</b> reject होती हैं (fail fast)। t+10s पर 30 s का break पूरा नहीं हुआ, इसलिए call reject हुई, चाहे service ठीक हो चुकी हो।</li>
<li>Break के बाद (t+30s) अगली call एक <b>trial</b> (half-open) है। वह सफल रही, इसलिए circuit close हुआ और failure count reset हो गया।</li>
<li>Trial fail हो तो circuit नए 30 s के लिए फिर open हो जाता है: t+60s पर trial fail हुआ, इसलिए t+89s की call अब भी reject है, और t+90s पर ही अगला trial मिलता है।</li>
<li>यह खुद लिखा breaker लगातार failures गिनता है। Polly v8 इसकी जगह तब trip होता है जब <code>SamplingDuration</code> के अंदर <code>FailureRatio</code> पहुँच जाए, और <code>MinimumThroughput</code> calls देखी जा चुकी हों — लगातार N failures पर नहीं।</li>
<li>Time को <code>FakeTimeProvider</code> (package <code>Microsoft.Extensions.TimeProvider.Testing</code>) से control किया है — न sleep, न flaky tests। Production में यह खुद लिखने की जगह resilience library (Polly v8 / Microsoft.Extensions.Http.Resilience) use करो।</li>
</ul>`,
        hg: `<ul>
<li>Closed: calls nikalti rehti hain aur failures gine jaate hain. 3rd failure threshold par pahunchta hai, isliye circuit t+0s par open ho jaata hai.</li>
<li>Open: calls beemar service ko chhue bina <b>turant</b> reject hoti hain (fail fast). t+10s par 30 s ka break poora nahi hua, isliye call reject hui, chahe service theek ho chuki ho.</li>
<li>Break ke baad (t+30s) agli call ek <b>trial</b> (half-open) hai. Woh safal rahi, isliye circuit close hua aur failure count reset ho gaya.</li>
<li>Trial fail ho to circuit naye 30 s ke liye phir open ho jaata hai: t+60s par trial fail hua, isliye t+89s ki call ab bhi reject hai, aur t+90s par hi agla trial milta hai.</li>
<li>Yeh khud likha breaker lagaataar failures ginta hai. Polly v8 iski jagah tab trip hota hai jab <code>SamplingDuration</code> ke andar <code>FailureRatio</code> pahunch jaaye, aur <code>MinimumThroughput</code> calls dekhi ja chuki hon — lagaataar N failures par nahi.</li>
<li>Time ko <code>FakeTimeProvider</code> (package <code>Microsoft.Extensions.TimeProvider.Testing</code>) se control kiya hai — na sleep, na flaky tests. Production mein yeh khud likhne ki jagah resilience library (Polly v8 / Microsoft.Extensions.Http.Resilience) use karo.</li>
</ul>`
      }
    },
    {
      id: "activity-w3c-trace-context",
      src: `using System.Diagnostics;

var source = new ActivitySource("Shop.Orders");

using (var early = source.StartActivity("before-listener"))
    Console.WriteLine("no listener: " + (early is null ? "null" : "activity"));

using var listener = new ActivityListener
{
    ShouldListenTo = s => s.Name == "Shop.Orders",
    Sample = (ref ActivityCreationOptions<ActivityContext> _) => ActivitySamplingResult.AllDataAndRecorded
};
ActivitySource.AddActivityListener(listener);

var parent = source.StartActivity("PlaceOrder")!;
var child = source.StartActivity("ChargeCard")!;

Console.WriteLine("format: " + parent.IdFormat);
Console.WriteLine("traceparent length: " + parent.Id!.Length);
Console.WriteLine("traceparent shape: " + (parent.Id == $"00-{parent.TraceId}-{parent.SpanId}-01"));
Console.WriteLine("parent is root: " + (parent.ParentId is null));
Console.WriteLine("same trace id: " + (child.TraceId == parent.TraceId));
Console.WriteLine("different span id: " + (child.SpanId != parent.SpanId));
Console.WriteLine("child parent span = parent span: " + (child.ParentSpanId == parent.SpanId));
Console.WriteLine("current is child: " + (Activity.Current == child));
child.Stop();
Console.WriteLine("current after child stop is parent: " + (Activity.Current == parent));
parent.Stop();
Console.WriteLine("current after all stop: " + (Activity.Current is null ? "null" : "activity"));`,
      answer: `no listener: null
format: W3C
traceparent length: 55
traceparent shape: True
parent is root: True
same trace id: True
different span id: True
child parent span = parent span: True
current is child: True
current after child stop is parent: True
current after all stop: null`,
      explain: {
        en: `<ul>
<li>With <b>no listener</b>, <code>StartActivity</code> returns <code>null</code>: tracing costs almost nothing until something (OpenTelemetry) listens. That is why real code writes <code>activity?.SetTag(...)</code>.</li>
<li>.NET uses the <b>W3C</b> format by default. The id is the <code>traceparent</code>: <code>00-&lt;32 hex trace id&gt;-&lt;16 hex span id&gt;-&lt;2 hex flags&gt;</code>, which is 55 characters long. Flag <code>01</code> means "sampled/recorded".</li>
<li>The child shares the parent's <b>trace id</b> (one request = one trace) but has its own <b>span id</b>; its <code>ParentSpanId</code> is the parent's span id. That is how a tracing backend draws the tree.</li>
<li><code>Activity.Current</code> follows the call flow (via AsyncLocal): it is the child while the child runs, and goes back to the parent after <code>Stop</code>. Between services, HttpClient sends the <code>traceparent</code> header and ASP.NET Core reads it, so the same trace id continues.</li>
<li>The real ids are random, so the program prints only formats and relationships.</li>
</ul>`,
        hi: `<ul>
<li><b>Listener न हो</b> तो <code>StartActivity</code> <code>null</code> लौटाता है: जब तक कोई (OpenTelemetry) सुन नहीं रहा, tracing का खर्च लगभग कुछ नहीं है। इसीलिए असली code में <code>activity?.SetTag(...)</code> लिखते हैं।</li>
<li>.NET default में <b>W3C</b> format use करता है। Id ही <code>traceparent</code> है: <code>00-&lt;32 hex trace id&gt;-&lt;16 hex span id&gt;-&lt;2 hex flags&gt;</code>, जो 55 characters का होता है। Flag <code>01</code> का मतलब "sampled/recorded"।</li>
<li>Child, parent का <b>trace id</b> share करता है (एक request = एक trace) पर उसका अपना <b>span id</b> होता है; उसका <code>ParentSpanId</code> parent का span id है। Tracing backend इसी से tree बनाता है।</li>
<li><code>Activity.Current</code> call flow के साथ चलता है (AsyncLocal से): child चलते वक़्त वह child है, और <code>Stop</code> के बाद parent पर लौट आता है। Services के बीच HttpClient <code>traceparent</code> header भेजता है और ASP.NET Core उसे पढ़ता है, इसलिए वही trace id आगे चलता है।</li>
<li>असली ids random होते हैं, इसलिए program सिर्फ़ formats और relationships print करता है।</li>
</ul>`,
        hg: `<ul>
<li><b>Listener na ho</b> to <code>StartActivity</code> <code>null</code> lautata hai: jab tak koi (OpenTelemetry) sun nahi raha, tracing ka kharcha lagbhag kuch nahi hai. Isiliye asli code mein <code>activity?.SetTag(...)</code> likhte hain.</li>
<li>.NET default mein <b>W3C</b> format use karta hai. Id hi <code>traceparent</code> hai: <code>00-&lt;32 hex trace id&gt;-&lt;16 hex span id&gt;-&lt;2 hex flags&gt;</code>, jo 55 characters ka hota hai. Flag <code>01</code> ka matlab "sampled/recorded".</li>
<li>Child, parent ka <b>trace id</b> share karta hai (ek request = ek trace) par uska apna <b>span id</b> hota hai; uska <code>ParentSpanId</code> parent ka span id hai. Tracing backend isi se tree banata hai.</li>
<li><code>Activity.Current</code> call flow ke saath chalta hai (AsyncLocal se): child chalte waqt woh child hai, aur <code>Stop</code> ke baad parent par laut aata hai. Services ke beech HttpClient <code>traceparent</code> header bhejta hai aur ASP.NET Core use padhta hai, isliye wahi trace id aage chalta hai.</li>
<li>Asli ids random hote hain, isliye program sirf formats aur relationships print karta hai.</li>
</ul>`
      }
    }
  ],
  revision: {
    en: [
      "A distributed monolith (shared database, deploy-together services, long sync chains) has microservice costs without independence.",
      "An API gateway (YARP in .NET) is the single entry point for routing, auth and rate limits; keep business logic out.",
      "A circuit breaker stops calling a failing service for a while, then lets one trial call through.",
      "Sync calls couple services in time; async messaging decouples them but brings eventual consistency.",
      "A queue gives each message to one consumer; a topic gives a copy to every subscription.",
      "Brokers usually deliver at-least-once, so consumers must be idempotent (inbox with a unique message id).",
      "Outbox: write the event in the same transaction as the data and let a relay publish it later.",
      "Saga: local transactions plus compensating actions in reverse order, instead of a distributed transaction.",
      "Retry with backoff and jitter, and only on idempotent calls.",
      "Many messaging SDKs propagate the traceparent; with a custom outbox relay you store and restore it yourself.",
      "Database per service; cross-service reads use API composition or a read model built from events.",
      "Observability, ownership and a contract policy come before the first split."
    ],
    meaning: {
      hi: [
        "Distributed monolith (shared database, साथ में deploy होने वाली services, लंबी sync chains) में microservices का खर्च है पर आज़ादी नहीं।",
        "API gateway (.NET में YARP) routing, auth और rate limits का एक entry point है; business logic बाहर रखो।",
        "Circuit breaker fail होती service को कुछ देर call करना रोकता है, फिर एक trial call जाने देता है।",
        "Sync calls services को समय में बाँधती हैं; async messaging उन्हें अलग करता है पर eventual consistency लाता है।",
        "Queue हर message एक consumer को देती है; topic हर subscription को कॉपी देता है।",
        "Brokers आम तौर पर at-least-once deliver करते हैं, इसलिए consumers idempotent होने चाहिए (unique message id वाली inbox)।",
        "Outbox: event को data की उसी transaction में लिखो और relay को बाद में publish करने दो।",
        "Saga: distributed transaction की जगह local transactions और उल्टे order में compensating actions।",
        "Backoff और jitter के साथ retry, और सिर्फ़ idempotent calls पर।",
        "कई messaging SDKs traceparent आगे ले जाते हैं; custom outbox relay में उसे ख़ुद store और restore करना पड़ता है।",
        "हर service का अपना database; services के पार reads के लिए API composition या events से बना read model।",
        "Observability, ownership और contract policy पहले split से पहले आती हैं।"
      ],
      hg: [
        "Distributed monolith (shared database, saath mein deploy hone wali services, lambi sync chains) mein microservices ka kharcha hai par aazaadi nahi.",
        "API gateway (.NET mein YARP) routing, auth aur rate limits ka ek entry point hai; business logic bahar rakho.",
        "Circuit breaker fail hoti service ko kuch der call karna rokta hai, phir ek trial call jaane deta hai.",
        "Sync calls services ko samay mein baandhti hain; async messaging unhe alag karta hai par eventual consistency laata hai.",
        "Queue har message ek consumer ko deti hai; topic har subscription ko copy deta hai.",
        "Brokers aam taur par at-least-once deliver karte hain, isliye consumers idempotent hone chahiye (unique message id wali inbox).",
        "Outbox: event ko data ki usi transaction mein likho aur relay ko baad mein publish karne do.",
        "Saga: distributed transaction ki jagah local transactions aur ulte order mein compensating actions.",
        "Backoff aur jitter ke saath retry, aur sirf idempotent calls par.",
        "Kai messaging SDKs traceparent aage le jaate hain; custom outbox relay mein use khud store aur restore karna padta hai.",
        "Har service ka apna database; services ke paar reads ke liye API composition ya events se bana read model.",
        "Observability, ownership aur contract policy pehle split se pehle aati hain."
      ]
    }
  },
  whatsNew: {
    en: `<ul>
<li><b>Aspire 13</b> (Nov 2025): ".NET Aspire" was renamed to just "Aspire".</li>
<li><b>Polly v8</b> (library, 2023): <code>ResiliencePipeline</code> and strategy options replace the v7 policy classes. <code>Microsoft.Extensions.Http.Resilience</code> (.NET 8+) builds on it for HttpClient.</li>
<li><b>TimeProvider</b> (.NET 8) with <code>FakeTimeProvider</code> (package <code>Microsoft.Extensions.TimeProvider.Testing</code>) makes time-based logic such as a circuit breaker testable without sleeping.</li>
<li><b>W3C trace context</b> is the default <code>Activity</code> id format since .NET 5; OpenTelemetry for .NET builds on <code>ActivitySource</code> and <code>Activity</code>.</li>
</ul>`,
    hi: `<ul>
<li><b>Aspire 13</b> (Nov 2025): ".NET Aspire" का नाम बदलकर सिर्फ़ "Aspire" हो गया।</li>
<li><b>Polly v8</b> (library, 2023): <code>ResiliencePipeline</code> और strategy options ने v7 की policy classes की जगह ली। <code>Microsoft.Extensions.Http.Resilience</code> (.NET 8+) HttpClient के लिए इसी पर बना है।</li>
<li><b>TimeProvider</b> (.NET 8) और <code>FakeTimeProvider</code> (package <code>Microsoft.Extensions.TimeProvider.Testing</code>) से circuit breaker जैसे time वाले logic को sleep किए बिना test कर सकते हैं।</li>
<li><b>W3C trace context</b> .NET 5 से <code>Activity</code> का default id format है; OpenTelemetry for .NET <code>ActivitySource</code> और <code>Activity</code> पर बना है।</li>
</ul>`,
    hg: `<ul>
<li><b>Aspire 13</b> (Nov 2025): ".NET Aspire" ka naam badalkar sirf "Aspire" ho gaya.</li>
<li><b>Polly v8</b> (library, 2023): <code>ResiliencePipeline</code> aur strategy options ne v7 ki policy classes ki jagah li. <code>Microsoft.Extensions.Http.Resilience</code> (.NET 8+) HttpClient ke liye isi par bana hai.</li>
<li><b>TimeProvider</b> (.NET 8) aur <code>FakeTimeProvider</code> (package <code>Microsoft.Extensions.TimeProvider.Testing</code>) se circuit breaker jaise time wale logic ko sleep kiye bina test kar sakte hain.</li>
<li><b>W3C trace context</b> .NET 5 se <code>Activity</code> ka default id format hai; OpenTelemetry for .NET <code>ActivitySource</code> aur <code>Activity</code> par bana hai.</li>
</ul>`
  }
};
