// Day 15 — Architecture. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 15,
  title: {
    en: "Architecture — layers, Clean Architecture, DDD basics, monolith vs microservices",
    hi: "Architecture — layers, Clean Architecture, DDD की बुनियाद, monolith बनाम microservices",
    hg: "Architecture — layers, Clean Architecture, DDD ki buniyad, monolith vs microservices"
  },
  summary: {
    en: `<p>Today is about <b>how a solution is organised</b>, and the decision a Tech Lead is asked about most: <b>"which architecture, and why?"</b> There is no single right answer, so interviewers listen for <b>trade-offs</b>.</p>
<ul>
<li><b>Layered (N-tier)</b>: Presentation → Business → Data. Simple, but the dependency points down to the database, so the business rules end up tied to data access.</li>
<li><b>Clean / Onion / Hexagonal</b>: the <b>dependency rule</b> — source-code dependencies point <b>inward</b> to the domain. Inner layers own the interfaces (DIP, Day 8); Infrastructure (EF Core, HTTP clients) implements them.</li>
<li><b>Vertical slice</b>: organise by feature, not by layer. Fewer abstractions per feature, but you need team discipline.</li>
<li><b>Monolith → modular monolith → microservices</b>: more independence costs more operations. A common advice is "start with a modular monolith", but it is a trade-off, not a rule.</li>
<li><b>DDD basics</b>: ubiquitous language, entity vs value object, aggregate (one consistency boundary), domain events, bounded context, rich vs anemic model.</li>
<li><b>TL angle</b>: choose by team size, change speed and operational skill; write the choice down in an <b>ADR</b>; avoid over-engineering (Clean Architecture for a small CRUD app is usually too much).</li>
</ul>
<p>Plan (about 1 hour 15 minutes): Short mode first (the picture), then Q&amp;A aloud, then the detailed sections with code, then the puzzles. Repository, Unit of Work and CQRS were Day 11, so we only point to them.</p>`,
    hi: `<p>आज का विषय है <b>solution को कैसे organise करें</b>, और वह फ़ैसला जो Tech Lead से सबसे ज़्यादा पूछा जाता है: <b>"कौन-सा architecture, और क्यों?"</b> कोई एक सही जवाब नहीं है, इसलिए interviewers <b>trade-offs</b> सुनते हैं।</p>
<ul>
<li><b>Layered (N-tier)</b>: Presentation → Business → Data। सरल है, पर dependency नीचे database की तरफ़ जाती है, इसलिए business rules data access से बंध जाते हैं।</li>
<li><b>Clean / Onion / Hexagonal</b>: <b>dependency rule</b> — source-code dependencies <b>अंदर</b> domain की तरफ़ जाती हैं। अंदर की layers interfaces की मालिक हैं (DIP, Day 8); Infrastructure (EF Core, HTTP clients) उन्हें implement करती है।</li>
<li><b>Vertical slice</b>: layer से नहीं, feature से organise करो। हर feature पर कम abstractions, पर team discipline चाहिए।</li>
<li><b>Monolith → modular monolith → microservices</b>: ज़्यादा independence का मतलब ज़्यादा operations। "modular monolith से शुरू करो" आम सलाह है, पर वह trade-off है, नियम नहीं।</li>
<li><b>DDD basics</b>: ubiquitous language, entity बनाम value object, aggregate (एक consistency boundary), domain events, bounded context, rich बनाम anemic model।</li>
<li><b>TL angle</b>: team size, बदलाव की रफ़्तार और operations की skill से चुनो; फ़ैसला <b>ADR</b> में लिखो; over-engineering से बचो (छोटे CRUD app के लिए Clean Architecture अक्सर ज़्यादा है)।</li>
</ul>
<p>Plan (लगभग 1 घंटा 15 मिनट): पहले Short mode (तस्वीर), फिर Q&amp;A ज़ोर से, फिर code वाले detailed sections, फिर puzzles। Repository, Unit of Work और CQRS Day 11 में थे, इसलिए यहाँ सिर्फ़ इशारा है।</p>`,
    hg: `<p>Aaj ka vishay hai <b>solution ko kaise organise karein</b>, aur woh faisla jo Tech Lead se sabse zyada poochha jaata hai: <b>"kaun-sa architecture, aur kyun?"</b> Koi ek sahi jawaab nahi hai, isliye interviewers <b>trade-offs</b> sunte hain.</p>
<ul>
<li><b>Layered (N-tier)</b>: Presentation → Business → Data. Saral hai, par dependency neeche database ki taraf jaati hai, isliye business rules data access se bandh jaate hain.</li>
<li><b>Clean / Onion / Hexagonal</b>: <b>dependency rule</b> — source-code dependencies <b>andar</b> domain ki taraf jaati hain. Andar ki layers interfaces ki maalik hain (DIP, Day 8); Infrastructure (EF Core, HTTP clients) unhe implement karti hai.</li>
<li><b>Vertical slice</b>: layer se nahi, feature se organise karo. Har feature par kam abstractions, par team discipline chahiye.</li>
<li><b>Monolith → modular monolith → microservices</b>: zyada independence ka matlab zyada operations. "Modular monolith se shuru karo" aam salaah hai, par woh trade-off hai, niyam nahi.</li>
<li><b>DDD basics</b>: ubiquitous language, entity vs value object, aggregate (ek consistency boundary), domain events, bounded context, rich vs anemic model.</li>
<li><b>TL angle</b>: team size, badlaav ki raftaar aur operations ki skill se chuno; faisla <b>ADR</b> mein likho; over-engineering se bacho (chhote CRUD app ke liye Clean Architecture aksar zyada hai).</li>
</ul>
<p>Plan (lagbhag 1 ghanta 15 minute): pehle Short mode (tasveer), phir Q&amp;A zor se, phir code wale detailed sections, phir puzzles. Repository, Unit of Work aur CQRS Day 11 mein the, isliye yahan sirf ishaara hai.</p>`
  },
  sections: [
    {
      id: "layers-and-clean-overview",
      depth: "short",
      title: {
        en: "Layered vs Clean Architecture — the dependency rule",
        hi: "Layered बनाम Clean Architecture — dependency rule",
        hg: "Layered vs Clean Architecture — dependency rule"
      },
      body: {
        en: `<p><b>Picture — a restaurant:</b> the kitchen rules (the recipe, the hygiene standard) belong to the restaurant, not to the gas company. Gas, electricity and the supplier can change; the recipe stays. In code, the "recipe" is the <b>domain</b>, and the "gas company" is the <b>database and frameworks</b>.</p>
<p><b>Classic layered (N-tier):</b> Presentation → Business (BLL) → Data access (DAL) → Database. Each layer calls the one below.</p>
<ul>
<li>Good: simple, familiar, quick to start.</li>
<li>Problem: everything depends on the bottom, so the business layer knows about the data layer. Rules get tied to EF Core or SQL, tests need a database, and "business" classes slowly turn into pass-through code.</li>
<li>Another common problem: a layer per technical concern means one feature touches every folder.</li>
</ul>
<p><b>Clean / Onion / Hexagonal (ports and adapters):</b> same goal, different names (Clean: R. C. Martin, Onion: J. Palermo, Hexagonal: A. Cockburn). The <b>dependency rule</b>: source-code dependencies point <b>inward</b>.</p>
<ul>
<li><b>Domain</b> (centre): entities, value objects, domain rules. References nothing else.</li>
<li><b>Application</b>: use cases (commands, queries, handlers). References Domain. Defines <b>ports</b> — interfaces such as <code>IOrderRepository</code> or <code>IEmailSender</code>.</li>
<li><b>Infrastructure</b>: EF Core <code>DbContext</code>, HTTP clients, email. References Application and implements the ports (the <b>adapters</b>).</li>
<li><b>Web/API</b>: controllers or endpoints; also the <b>composition root</b> that wires everything with DI.</li>
</ul>
<p>The trick is <b>DIP</b> (Day 8): the inner layer owns the interface, the outer layer implements it, so the arrow in source code points inward even though the call flows outward at runtime. Repository, Unit of Work and CQRS details are on Day 11.</p>
<p><b>When to use:</b> a long-lived business application with real rules, several teams or integrations, and a need to test rules without a database. <b>When not:</b> a small CRUD app, a prototype or a thin admin tool — the extra projects and interfaces cost more than they return. A simple layered or vertical-slice layout is a fair choice there.</p>`,
        hi: `<p><b>तस्वीर — restaurant:</b> रसोई के नियम (recipe, hygiene standard) restaurant के हैं, gas कंपनी के नहीं। Gas, बिजली और supplier बदल सकते हैं; recipe वही रहती है। Code में "recipe" है <b>domain</b>, और "gas कंपनी" है <b>database और frameworks</b>।</p>
<p><b>Classic layered (N-tier):</b> Presentation → Business (BLL) → Data access (DAL) → Database। हर layer अपने नीचे वाली को call करती है।</p>
<ul>
<li>अच्छा: सरल, जाना-पहचाना, जल्दी शुरू।</li>
<li>दिक़्क़त: सब कुछ सबसे नीचे पर निर्भर है, इसलिए business layer data layer को जानती है। Rules EF Core या SQL से बंध जाते हैं, tests को database चाहिए, और "business" classes धीरे-धीरे सिर्फ़ आगे भेजने वाला code बन जाती हैं।</li>
<li>एक और आम दिक़्क़त: हर technical काम की एक layer का मतलब है कि एक feature हर folder को छूता है।</li>
</ul>
<p><b>Clean / Onion / Hexagonal (ports and adapters):</b> लक्ष्य एक, नाम अलग (Clean: R. C. Martin, Onion: J. Palermo, Hexagonal: A. Cockburn)। <b>Dependency rule</b>: source-code dependencies <b>अंदर</b> की तरफ़ जाती हैं।</p>
<ul>
<li><b>Domain</b> (बीच में): entities, value objects, domain rules। किसी और को reference नहीं करता।</li>
<li><b>Application</b>: use cases (commands, queries, handlers)। Domain को reference करती है। <b>ports</b> define करती है — जैसे <code>IOrderRepository</code> या <code>IEmailSender</code>।</li>
<li><b>Infrastructure</b>: EF Core <code>DbContext</code>, HTTP clients, email। Application को reference करती है और ports implement करती है (<b>adapters</b>)।</li>
<li><b>Web/API</b>: controllers या endpoints; साथ ही <b>composition root</b> जो DI से सब जोड़ता है।</li>
</ul>
<p>चाल है <b>DIP</b> (Day 8): अंदर की layer interface की मालिक है, बाहर की layer उसे implement करती है, इसलिए source code में तीर अंदर की तरफ़ है भले runtime पर call बाहर की तरफ़ जाए। Repository, Unit of Work और CQRS की details Day 11 में हैं।</p>
<p><b>कब use करें:</b> लंबी उम्र वाला business application जिसमें असली rules हों, कई teams या integrations हों, और rules को बिना database के test करना हो। <b>कब नहीं:</b> छोटा CRUD app, prototype या हल्का admin tool — अतिरिक्त projects और interfaces का ख़र्च फ़ायदे से ज़्यादा है। वहाँ simple layered या vertical-slice layout ठीक है।</p>`,
        hg: `<p><b>Tasveer — restaurant:</b> rasoi ke niyam (recipe, hygiene standard) restaurant ke hain, gas company ke nahi. Gas, bijli aur supplier badal sakte hain; recipe wahi rehti hai. Code mein "recipe" hai <b>domain</b>, aur "gas company" hai <b>database aur frameworks</b>.</p>
<p><b>Classic layered (N-tier):</b> Presentation → Business (BLL) → Data access (DAL) → Database. Har layer apne neeche wali ko call karti hai.</p>
<ul>
<li>Achha: saral, jaana-pehchana, jaldi shuru.</li>
<li>Dikkat: sab kuch sabse neeche par nirbhar hai, isliye business layer data layer ko jaanti hai. Rules EF Core ya SQL se bandh jaate hain, tests ko database chahiye, aur "business" classes dheere-dheere sirf aage bhejne wala code ban jaati hain.</li>
<li>Ek aur aam dikkat: har technical kaam ki ek layer ka matlab hai ki ek feature har folder ko chhoota hai.</li>
</ul>
<p><b>Clean / Onion / Hexagonal (ports and adapters):</b> lakshya ek, naam alag (Clean: R. C. Martin, Onion: J. Palermo, Hexagonal: A. Cockburn). <b>Dependency rule</b>: source-code dependencies <b>andar</b> ki taraf jaati hain.</p>
<ul>
<li><b>Domain</b> (beech mein): entities, value objects, domain rules. Kisi aur ko reference nahi karta.</li>
<li><b>Application</b>: use cases (commands, queries, handlers). Domain ko reference karti hai. <b>ports</b> define karti hai — jaise <code>IOrderRepository</code> ya <code>IEmailSender</code>.</li>
<li><b>Infrastructure</b>: EF Core <code>DbContext</code>, HTTP clients, email. Application ko reference karti hai aur ports implement karti hai (<b>adapters</b>).</li>
<li><b>Web/API</b>: controllers ya endpoints; saath hi <b>composition root</b> jo DI se sab jodta hai.</li>
</ul>
<p>Chaal hai <b>DIP</b> (Day 8): andar ki layer interface ki maalik hai, bahar ki layer use implement karti hai, isliye source code mein teer andar ki taraf hai bhale runtime par call bahar ki taraf jaaye. Repository, Unit of Work aur CQRS ki details Day 11 mein hain.</p>
<p><b>Kab use karein:</b> lambi umar wala business application jismein asli rules hon, kai teams ya integrations hon, aur rules ko bina database ke test karna ho. <b>Kab nahi:</b> chhota CRUD app, prototype ya halka admin tool — atirikt projects aur interfaces ka kharch fayde se zyada hai. Wahan simple layered ya vertical-slice layout theek hai.</p>`
      }
    },
    {
      id: "ddd-overview",
      depth: "short",
      title: {
        en: "DDD basics — entities, value objects, aggregates, bounded contexts",
        hi: "DDD की बुनियाद — entities, value objects, aggregates, bounded contexts",
        hg: "DDD ki buniyad — entities, value objects, aggregates, bounded contexts"
      },
      body: {
        en: `<p><b>Picture — a ₹500 note vs a bank account:</b> any ₹500 note is as good as another (equal by <b>value</b>). Your bank account is <i>that</i> account even if the balance changes (equal by <b>identity</b>).</p>
<p><b>Domain-Driven Design (DDD)</b> means modelling the code on the business, using the business's own words. The parts you must know:</p>
<ul>
<li><b>Ubiquitous language</b>: the same words in conversations, tickets and code. If the business says "policy lapse", the class is not <code>InactiveRecord</code>.</li>
<li><b>Entity</b>: has an identity (an Id) that stays the same while its data changes. Two entities are the same if their Ids match.</li>
<li><b>Value object</b>: no identity, equal when all values are equal, best immutable (<code>Money</code>, <code>Address</code>, <code>DateRange</code>). A C# <code>record</code> is a natural fit. EF Core can map value objects as owned types or, from EF Core 8, complex types.</li>
<li><b>Aggregate</b> and <b>aggregate root</b>: a cluster of objects changed as one unit. Outsiders talk only to the root; the root enforces the <b>invariants</b> (rules that must always hold). One aggregate = one transaction boundary. Reference other aggregates by <b>Id</b>, not by object.</li>
<li><b>Domain event</b>: a fact in the past tense (<code>OrderPlaced</code>) raised by an aggregate so other parts can react.</li>
<li><b>Bounded context</b>: the area where one model and one language are valid. "Customer" in Sales and "Customer" in Support can be different classes; a <b>context map</b> shows how the contexts relate.</li>
<li><b>Anemic vs rich model</b>: anemic = classes with only get/set and all logic in services. Rich = the rules live in the entity methods (<code>order.AddLine(...)</code>), so an invalid state cannot be created.</li>
</ul>
<p><b>When to use:</b> complex, changing business rules (insurance, billing, logistics). <b>When not:</b> mostly forms-over-data CRUD, where an anemic model and simple services are cheaper and perfectly fine. DDD's strategic ideas (language, bounded contexts) help even when you skip the tactical patterns.</p>`,
        hi: `<p><b>तस्वीर — ₹500 का नोट बनाम bank account:</b> कोई भी ₹500 का नोट दूसरे जितना ही अच्छा है (<b>value</b> से बराबर)। आपका bank account <i>वही</i> account है चाहे balance बदल जाए (<b>identity</b> से बराबर)।</p>
<p><b>Domain-Driven Design (DDD)</b> यानी code को business के हिसाब से, business के अपने शब्दों में model करना। जो हिस्से आने चाहिए:</p>
<ul>
<li><b>Ubiquitous language</b>: बातचीत, tickets और code में एक ही शब्द। Business "policy lapse" कहे तो class का नाम <code>InactiveRecord</code> नहीं होना चाहिए।</li>
<li><b>Entity</b>: उसकी identity (Id) होती है जो data बदलने पर भी वही रहती है। दो entities तब एक हैं जब उनके Ids मिलें।</li>
<li><b>Value object</b>: identity नहीं, सारी values बराबर तो बराबर, बेहतर है immutable (<code>Money</code>, <code>Address</code>, <code>DateRange</code>)। C# <code>record</code> इसके लिए स्वाभाविक है। EF Core value objects को owned types या, EF Core 8 से, complex types के रूप में map कर सकता है।</li>
<li><b>Aggregate</b> और <b>aggregate root</b>: objects का समूह जो एक इकाई की तरह बदलता है। बाहर वाले सिर्फ़ root से बात करते हैं; root <b>invariants</b> (जो rules हमेशा सच रहने चाहिए) लागू करता है। एक aggregate = एक transaction boundary। दूसरे aggregates को <b>Id</b> से reference करो, object से नहीं।</li>
<li><b>Domain event</b>: भूतकाल का एक तथ्य (<code>OrderPlaced</code>) जो aggregate उठाता है ताकि दूसरे हिस्से प्रतिक्रिया दे सकें।</li>
<li><b>Bounded context</b>: वह क्षेत्र जहाँ एक model और एक भाषा मान्य है। Sales का "Customer" और Support का "Customer" अलग classes हो सकती हैं; <b>context map</b> दिखाता है कि contexts आपस में कैसे जुड़े हैं।</li>
<li><b>Anemic बनाम rich model</b>: anemic = सिर्फ़ get/set वाली classes और सारा logic services में। Rich = rules entity के methods में (<code>order.AddLine(...)</code>), इसलिए invalid state बन ही नहीं सकती।</li>
</ul>
<p><b>कब use करें:</b> जटिल, बदलते business rules (insurance, billing, logistics)। <b>कब नहीं:</b> ज़्यादातर forms-over-data CRUD, जहाँ anemic model और simple services सस्ते और बिल्कुल ठीक हैं। DDD के strategic विचार (भाषा, bounded contexts) tactical patterns छोड़ने पर भी काम आते हैं।</p>`,
        hg: `<p><b>Tasveer — ₹500 ka note vs bank account:</b> koi bhi ₹500 ka note doosre jitna hi achha hai (<b>value</b> se barabar). Aapka bank account <i>wahi</i> account hai chahe balance badal jaaye (<b>identity</b> se barabar).</p>
<p><b>Domain-Driven Design (DDD)</b> yaani code ko business ke hisaab se, business ke apne shabdon mein model karna. Jo hisse aane chahiye:</p>
<ul>
<li><b>Ubiquitous language</b>: baatcheet, tickets aur code mein ek hi shabd. Business "policy lapse" kahe to class ka naam <code>InactiveRecord</code> nahi hona chahiye.</li>
<li><b>Entity</b>: uski identity (Id) hoti hai jo data badalne par bhi wahi rehti hai. Do entities tab ek hain jab unke Ids milen.</li>
<li><b>Value object</b>: identity nahi, saari values barabar to barabar, behtar hai immutable (<code>Money</code>, <code>Address</code>, <code>DateRange</code>). C# <code>record</code> iske liye swabhavik hai. EF Core value objects ko owned types ya, EF Core 8 se, complex types ke roop mein map kar sakta hai.</li>
<li><b>Aggregate</b> aur <b>aggregate root</b>: objects ka samuh jo ek ikai ki tarah badalta hai. Bahar wale sirf root se baat karte hain; root <b>invariants</b> (jo rules hamesha sach rehne chahiye) lagu karta hai. Ek aggregate = ek transaction boundary. Doosre aggregates ko <b>Id</b> se reference karo, object se nahi.</li>
<li><b>Domain event</b>: bhootkaal ka ek tathya (<code>OrderPlaced</code>) jo aggregate uthata hai taaki doosre hisse pratikriya de saken.</li>
<li><b>Bounded context</b>: woh kshetra jahan ek model aur ek bhasha maanya hai. Sales ka "Customer" aur Support ka "Customer" alag classes ho sakti hain; <b>context map</b> dikhata hai ki contexts aapas mein kaise jude hain.</li>
<li><b>Anemic vs rich model</b>: anemic = sirf get/set wali classes aur saara logic services mein. Rich = rules entity ke methods mein (<code>order.AddLine(...)</code>), isliye invalid state ban hi nahi sakti.</li>
</ul>
<p><b>Kab use karein:</b> jatil, badalte business rules (insurance, billing, logistics). <b>Kab nahi:</b> zyadatar forms-over-data CRUD, jahan anemic model aur simple services sasta aur bilkul theek hai. DDD ke strategic vichaar (bhasha, bounded contexts) tactical patterns chhodne par bhi kaam aate hain.</p>`
      }
    },
    {
      id: "deployment-overview",
      depth: "short",
      title: {
        en: "Monolith, modular monolith, microservices — how to choose",
        hi: "Monolith, modular monolith, microservices — कैसे चुनें",
        hg: "Monolith, modular monolith, microservices — kaise chunein"
      },
      body: {
        en: `<p><b>Picture — a joint family home vs separate flats:</b> one kitchen and one meter is cheap and easy to coordinate (monolith). A joint family with separate rooms and clear house rules (modular monolith). Separate flats each with its own kitchen, meter and rent — more freedom, but more bills and more coordination (microservices).</p>
<ul>
<li><b>Monolith</b>: one deployable unit. Simple to build, debug, test and deploy; one database transaction. The risk is a "big ball of mud" when nothing stops modules from touching each other.</li>
<li><b>Modular monolith</b>: still one deployable, but split into modules with clear boundaries — each module has a small public API and owns its tables; modules do not reach into each other's internals. It keeps the simplicity and can be split later if needed.</li>
<li><b>Microservices</b>: many small services deployed independently, each owning its data. You gain independent deployment and scaling per team; you pay with network calls, partial failures, distributed data consistency, monitoring and a lot of operations (Day 16).</li>
</ul>
<p><b>Decision factors:</b></p>
<ul>
<li><b>Team size and structure</b> — Conway's law: systems tend to mirror the communication structure of the organisation. Few developers rarely justify many services.</li>
<li><b>Deployment independence</b> — do teams really need to release separately, at different speeds?</li>
<li><b>Data ownership</b> — can data be split cleanly? Shared tables and joins across services are a warning sign.</li>
<li><b>Operational cost and skill</b> — CI/CD, observability, on-call, messaging. Without them, microservices hurt.</li>
<li><b>Scaling needs</b> — one hot part with very different load may deserve its own service.</li>
</ul>
<p>A common piece of advice is <b>"start with a modular monolith and extract services when a real need appears"</b>, because boundaries are hard to guess early. It is a trade-off: it delays operational cost, but needs discipline to keep modules separate.</p>
<p><b>When to use microservices:</b> several teams, clear boundaries, real need for independent release or scale, and the operational maturity. <b>When not:</b> a small team, an unclear domain, or "because it is modern" — a modular monolith is usually the cheaper first step.</p>`,
        hi: `<p><b>तस्वीर — संयुक्त परिवार का घर बनाम अलग-अलग flats:</b> एक रसोई और एक meter सस्ता और संभालने में आसान (monolith)। संयुक्त परिवार, अलग कमरे और घर के साफ़ नियम (modular monolith)। अलग flats, हर एक की अपनी रसोई, meter और किराया — ज़्यादा आज़ादी, पर ज़्यादा बिल और ज़्यादा तालमेल (microservices)।</p>
<ul>
<li><b>Monolith</b>: एक deployable इकाई। बनाना, debug, test और deploy आसान; एक database transaction। जोखिम "big ball of mud" का है जब modules को एक-दूसरे में घुसने से कुछ नहीं रोकता।</li>
<li><b>Modular monolith</b>: अब भी एक deployable, पर साफ़ boundaries वाले modules में बँटा — हर module की छोटी public API है और अपनी tables हैं; modules एक-दूसरे के internals में हाथ नहीं डालते। सरलता बनी रहती है और ज़रूरत पड़ने पर बाद में बाँटा जा सकता है।</li>
<li><b>Microservices</b>: कई छोटी services जो अलग-अलग deploy होती हैं, हर एक अपना data रखती है। फ़ायदा: हर team के लिए independent deployment और scaling; क़ीमत: network calls, partial failures, distributed data consistency, monitoring और बहुत सारे operations (Day 16)।</li>
</ul>
<p><b>फ़ैसले के कारक:</b></p>
<ul>
<li><b>Team size और ढाँचा</b> — Conway's law: systems अक्सर organisation के communication ढाँचे की नक़ल करते हैं। कम developers के लिए कई services शायद ही जायज़ हैं।</li>
<li><b>Deployment independence</b> — क्या teams को सच में अलग-अलग रफ़्तार से अलग release करना है?</li>
<li><b>Data ownership</b> — क्या data साफ़ बँट सकता है? Services के बीच shared tables और joins चेतावनी हैं।</li>
<li><b>Operational cost और skill</b> — CI/CD, observability, on-call, messaging। इनके बिना microservices चुभती हैं।</li>
<li><b>Scaling की ज़रूरत</b> — एक गरम हिस्सा जिसका load बहुत अलग है, उसकी अपनी service बन सकती है।</li>
</ul>
<p>आम सलाह है <b>"modular monolith से शुरू करो और असली ज़रूरत आने पर services निकालो"</b>, क्योंकि boundaries शुरू में अंदाज़ना मुश्किल है। यह trade-off है: operations का ख़र्च टलता है, पर modules अलग रखने के लिए discipline चाहिए।</p>
<p><b>Microservices कब use करें:</b> कई teams, साफ़ boundaries, independent release या scale की असली ज़रूरत और operational maturity। <b>कब नहीं:</b> छोटी team, अस्पष्ट domain, या "क्योंकि modern है" — modular monolith अक्सर सस्ता पहला क़दम है।</p>`,
        hg: `<p><b>Tasveer — sanyukt parivar ka ghar vs alag-alag flats:</b> ek rasoi aur ek meter sasta aur sambhalne mein aasaan (monolith). Sanyukt parivar, alag kamre aur ghar ke saaf niyam (modular monolith). Alag flats, har ek ki apni rasoi, meter aur kiraya — zyada aazaadi, par zyada bill aur zyada taalmel (microservices).</p>
<ul>
<li><b>Monolith</b>: ek deployable ikai. Banana, debug, test aur deploy aasaan; ek database transaction. Jokhim "big ball of mud" ka hai jab modules ko ek-doosre mein ghusne se kuch nahi rokta.</li>
<li><b>Modular monolith</b>: ab bhi ek deployable, par saaf boundaries wale modules mein banta — har module ki chhoti public API hai aur apni tables hain; modules ek-doosre ke internals mein haath nahi daalte. Saralta bani rehti hai aur zaroorat padne par baad mein baanta ja sakta hai.</li>
<li><b>Microservices</b>: kai chhoti services jo alag-alag deploy hoti hain, har ek apna data rakhti hai. Fayda: har team ke liye independent deployment aur scaling; keemat: network calls, partial failures, distributed data consistency, monitoring aur bahut saare operations (Day 16).</li>
</ul>
<p><b>Faisle ke kaarak:</b></p>
<ul>
<li><b>Team size aur dhaancha</b> — Conway's law: systems aksar organisation ke communication dhaanche ki nakal karte hain. Kam developers ke liye kai services shaayad hi jaayaz hain.</li>
<li><b>Deployment independence</b> — kya teams ko sach mein alag-alag raftaar se alag release karna hai?</li>
<li><b>Data ownership</b> — kya data saaf baant sakta hai? Services ke beech shared tables aur joins chetavani hain.</li>
<li><b>Operational cost aur skill</b> — CI/CD, observability, on-call, messaging. Inke bina microservices chubhti hain.</li>
<li><b>Scaling ki zaroorat</b> — ek garam hissa jiska load bahut alag hai, uski apni service ban sakti hai.</li>
</ul>
<p>Aam salaah hai <b>"modular monolith se shuru karo aur asli zaroorat aane par services nikalo"</b>, kyunki boundaries shuru mein andaazna mushkil hai. Yeh trade-off hai: operations ka kharch talta hai, par modules alag rakhne ke liye discipline chahiye.</p>
<p><b>Microservices kab use karein:</b> kai teams, saaf boundaries, independent release ya scale ki asli zaroorat aur operational maturity. <b>Kab nahi:</b> chhoti team, aspasht domain, ya "kyunki modern hai" — modular monolith aksar sasta pehla kadam hai.</p>`
      }
    },
    {
      id: "tl-choose-overview",
      depth: "short",
      title: {
        en: "TL angle — choosing architecture, ADRs, avoiding over-engineering",
        hi: "TL angle — architecture चुनना, ADRs, over-engineering से बचना",
        hg: "TL angle — architecture chunna, ADRs, over-engineering se bachna"
      },
      body: {
        en: `<p><b>Picture — buying a vehicle:</b> a family of four in a city does not need a truck, and a delivery business does not need a scooter. The right choice depends on the load, the road and who drives it.</p>
<p><b>How a Tech Lead chooses, in order:</b></p>
<ul>
<li><b>Start from the problem</b>: what changes often, what must not fail, how many teams, how big will it grow in the next 1–2 years?</li>
<li><b>Name the quality attributes</b> that matter (speed of change, reliability, cost, security) and accept that you cannot maximise all.</li>
<li><b>Pick the simplest option</b> that meets them, and list what you give up.</li>
<li><b>Write it down as an ADR</b> and revisit when facts change.</li>
</ul>
<p><b>ADR (Architecture Decision Record):</b> a short document (often one page, in the repository) with <b>Title, Status, Context, Decision, Consequences</b> (and optionally the alternatives considered). New joiners learn <i>why</i>, and a later "can we change it?" starts from facts, not memory. Superseded decisions stay, marked as superseded.</p>
<p><b>Avoiding over-engineering:</b></p>
<ul>
<li>Clean Architecture for a small CRUD app means extra projects and mapping code for little gain. A layered or vertical-slice layout is often enough.</li>
<li>Microservices for a 4-person team usually adds more operations than it removes.</li>
<li>Add structure when a <b>real pain</b> shows up (hard to test, modules tangled), not "just in case".</li>
<li>A boundary that is cheap to add now and expensive later (module borders, an interface over an external system) is worth it early.</li>
</ul>
<p><b>Vertical slice architecture</b> (brief): organise code by feature — a folder holds the endpoint, request, handler and data access for one use case. Pros: a change touches one place, each slice can be as simple or as rich as it needs. Cons: duplication between slices, and less enforced structure, so conventions must be agreed.</p>
<p><b>When to use an ADR:</b> choices that are costly to reverse (database, messaging, service boundaries). <b>When not:</b> small, easily reversible choices — a one-line note in the pull request is enough.</p>`,
        hi: `<p><b>तस्वीर — वाहन ख़रीदना:</b> शहर में चार लोगों के परिवार को truck नहीं चाहिए, और delivery business को scooter नहीं। सही चुनाव load, सड़क और चलाने वाले पर निर्भर है।</p>
<p><b>Tech Lead क्रम से कैसे चुनता है:</b></p>
<ul>
<li><b>समस्या से शुरू करो</b>: क्या अक्सर बदलता है, क्या fail नहीं होना चाहिए, कितनी teams हैं, अगले 1–2 साल में कितना बढ़ेगा?</li>
<li>जो <b>quality attributes</b> मायने रखते हैं उन्हें नाम दो (बदलाव की रफ़्तार, reliability, cost, security) और मानो कि सबको एक साथ maximise नहीं कर सकते।</li>
<li>जो इन्हें पूरा करे वह <b>सबसे सरल विकल्प चुनो</b>, और लिखो कि क्या छोड़ रहे हो।</li>
<li><b>उसे ADR के रूप में लिखो</b> और तथ्य बदलने पर दोबारा देखो।</li>
</ul>
<p><b>ADR (Architecture Decision Record):</b> छोटा document (अक्सर एक page, repository में) जिसमें <b>Title, Status, Context, Decision, Consequences</b> (और चाहें तो सोचे गए विकल्प) हों। नए लोग <i>क्यों</i> सीखते हैं, और बाद में "क्या इसे बदल सकते हैं?" यादाश्त से नहीं, तथ्यों से शुरू होता है। बदले गए फ़ैसले रहते हैं, superseded चिह्नित होकर।</p>
<p><b>Over-engineering से बचना:</b></p>
<ul>
<li>छोटे CRUD app के लिए Clean Architecture का मतलब है अतिरिक्त projects और mapping code, थोड़े फ़ायदे के लिए। Layered या vertical-slice अक्सर काफ़ी है।</li>
<li>4 लोगों की team के लिए microservices अक्सर जितना हटाती है उससे ज़्यादा operations जोड़ती है।</li>
<li>ढाँचा तब जोड़ो जब <b>असली दर्द</b> दिखे (test करना कठिन, modules उलझे), "बस यूँ ही" नहीं।</li>
<li>जो boundary अभी सस्ती है और बाद में महँगी (module की सीमाएँ, बाहरी system पर interface) उसे जल्दी जोड़ना ठीक है।</li>
</ul>
<p><b>Vertical slice architecture</b> (संक्षेप में): code को feature से organise करो — एक folder में एक use case का endpoint, request, handler और data access। फ़ायदे: बदलाव एक जगह छूता है, हर slice जितना चाहे सरल या rich हो सकता है। नुक़सान: slices के बीच दोहराव और कम लागू ढाँचा, इसलिए conventions तय करने पड़ते हैं।</p>
<p><b>ADR कब use करें:</b> जिन फ़ैसलों को पलटना महँगा है (database, messaging, service boundaries)। <b>कब नहीं:</b> छोटे, आसानी से पलटे जाने वाले फ़ैसले — pull request में एक line का note काफ़ी है।</p>`,
        hg: `<p><b>Tasveer — vaahan khareedna:</b> shehar mein chaar logon ke parivar ko truck nahi chahiye, aur delivery business ko scooter nahi. Sahi chunaav load, sadak aur chalane wale par nirbhar hai.</p>
<p><b>Tech Lead kram se kaise chunta hai:</b></p>
<ul>
<li><b>Samasya se shuru karo</b>: kya aksar badalta hai, kya fail nahi hona chahiye, kitni teams hain, agle 1–2 saal mein kitna badhega?</li>
<li>Jo <b>quality attributes</b> maayne rakhte hain unhe naam do (badlaav ki raftaar, reliability, cost, security) aur maano ki sabko ek saath maximise nahi kar sakte.</li>
<li>Jo inhe poora kare woh <b>sabse saral vikalp chuno</b>, aur likho ki kya chhod rahe ho.</li>
<li><b>Use ADR ke roop mein likho</b> aur tathya badalne par dobara dekho.</li>
</ul>
<p><b>ADR (Architecture Decision Record):</b> chhota document (aksar ek page, repository mein) jismein <b>Title, Status, Context, Decision, Consequences</b> (aur chaahen to socche gaye vikalp) hon. Naye log <i>kyun</i> seekhte hain, aur baad mein "kya ise badal sakte hain?" yaadasht se nahi, tathyon se shuru hota hai. Badle gaye faisle rehte hain, superseded chinhit hokar.</p>
<p><b>Over-engineering se bachna:</b></p>
<ul>
<li>Chhote CRUD app ke liye Clean Architecture ka matlab hai atirikt projects aur mapping code, thode fayde ke liye. Layered ya vertical-slice aksar kaafi hai.</li>
<li>4 logon ki team ke liye microservices aksar jitna hatati hai usse zyada operations jodti hai.</li>
<li>Dhaancha tab jodo jab <b>asli dard</b> dikhe (test karna kathin, modules uljhe), "bas yunhi" nahi.</li>
<li>Jo boundary abhi sasti hai aur baad mein mehngi (module ki seemayen, baahri system par interface) use jaldi jodna theek hai.</li>
</ul>
<p><b>Vertical slice architecture</b> (sankshep mein): code ko feature se organise karo — ek folder mein ek use case ka endpoint, request, handler aur data access. Fayde: badlaav ek jagah chhoota hai, har slice jitna chahe saral ya rich ho sakta hai. Nuksaan: slices ke beech dohraav aur kam laagu dhaancha, isliye conventions tay karne padte hain.</p>
<p><b>ADR kab use karein:</b> jin faislon ko palatna mehnga hai (database, messaging, service boundaries). <b>Kab nahi:</b> chhote, aasaani se palte jaane wale faisle — pull request mein ek line ka note kaafi hai.</p>`
      }
    },
    {
      id: "clean-in-code",
      depth: "detailed",
      title: {
        en: "Clean Architecture in a .NET solution — layout, ports and where DbContext lives",
        hi: "Clean Architecture .NET solution में — layout, ports और DbContext कहाँ रहता है",
        hg: "Clean Architecture .NET solution mein — layout, ports aur DbContext kahan rehta hai"
      },
      body: {
        en: `<p><b>Picture — a mobile charger and the socket:</b> the phone (domain) defines what it needs (5 V, a USB port). Any charger (adapter) that fits can plug in. The phone does not change when you move to a different socket.</p>
<p><b>Typical solution layout</b> (four projects; names are a convention, not a rule):</p>
<ul>
<li><code>Shop.Domain</code> — no project references. Entities, value objects, domain events.</li>
<li><code>Shop.Application</code> — references Domain. Use cases, <b>ports</b> (<code>IOrderRepository</code>, <code>IEmailSender</code>), DTOs.</li>
<li><code>Shop.Infrastructure</code> — references Application. The <b>EF Core <code>DbContext</code></b>, repositories, email, external HTTP clients.</li>
<li><code>Shop.Api</code> — references Application and Infrastructure. Endpoints and the <b>composition root</b> (<code>AddInfrastructure()</code>).</li>
</ul>
<p>The compiler enforces the rule: Domain has no reference to EF Core, so nobody can use <code>DbContext</code> there by accident. Your handler is tested with a fake <code>IOrderRepository</code>, no database.</p>
<p><b>Where does the DbContext live?</b> The common answer is <b>Infrastructure</b>, behind a port. Some teams let the Application layer use <code>DbContext</code> (or an <code>IAppDbContext</code> interface that exposes <code>DbSet&lt;T&gt;</code>) directly, to avoid thin repositories (see Day 11). It is a trade-off: a pure Application layer is more portable and easier to test without EF; using EF directly is shorter and uses its full power. Pick one and write it in the team conventions. Mapping domain objects to EF is configured in Infrastructure (Fluent API), so the domain classes stay free of EF attributes.</p>
<p><b>When to use:</b> rules that must outlive the framework, several adapters (database, queue, third-party API), or heavy unit testing of use cases. <b>When not:</b> a small CRUD service — four projects, interfaces and mapping would be more code than the logic itself.</p>`,
        hi: `<p><b>तस्वीर — mobile charger और socket:</b> phone (domain) तय करता है कि उसे क्या चाहिए (5 V, USB port)। जो भी charger (adapter) फ़िट हो, लग जाता है। दूसरे socket पर जाने से phone नहीं बदलता।</p>
<p><b>आम solution layout</b> (चार projects; नाम एक रिवाज हैं, नियम नहीं):</p>
<ul>
<li><code>Shop.Domain</code> — कोई project reference नहीं। Entities, value objects, domain events।</li>
<li><code>Shop.Application</code> — Domain को reference करती है। Use cases, <b>ports</b> (<code>IOrderRepository</code>, <code>IEmailSender</code>), DTOs।</li>
<li><code>Shop.Infrastructure</code> — Application को reference करती है। <b>EF Core <code>DbContext</code></b>, repositories, email, बाहरी HTTP clients।</li>
<li><code>Shop.Api</code> — Application और Infrastructure को reference करती है। Endpoints और <b>composition root</b> (<code>AddInfrastructure()</code>)।</li>
</ul>
<p>Compiler नियम लागू करता है: Domain में EF Core का reference नहीं है, इसलिए वहाँ ग़लती से भी <code>DbContext</code> use नहीं हो सकता। आपका handler fake <code>IOrderRepository</code> से test होता है, बिना database के।</p>
<p><b>DbContext कहाँ रहता है?</b> आम जवाब है <b>Infrastructure</b>, एक port के पीछे। कुछ teams पतली repositories से बचने के लिए Application layer को सीधे <code>DbContext</code> (या <code>DbSet&lt;T&gt;</code> दिखाने वाला <code>IAppDbContext</code> interface) use करने देती हैं (Day 11 देखो)। यह trade-off है: शुद्ध Application layer ज़्यादा portable है और बिना EF के test करना आसान; सीधे EF use करना छोटा है और उसकी पूरी ताक़त देता है। एक चुनो और team conventions में लिखो। Domain objects का EF mapping Infrastructure में (Fluent API) होता है, इसलिए domain classes EF attributes से मुक्त रहती हैं।</p>
<p><b>कब use करें:</b> ऐसे rules जो framework से ज़्यादा जिएँ, कई adapters (database, queue, third-party API), या use cases की भारी unit testing। <b>कब नहीं:</b> छोटी CRUD service — चार projects, interfaces और mapping logic से ज़्यादा code होंगे।</p>`,
        hg: `<p><b>Tasveer — mobile charger aur socket:</b> phone (domain) tay karta hai ki use kya chahiye (5 V, USB port). Jo bhi charger (adapter) fit ho, lag jaata hai. Doosre socket par jaane se phone nahi badalta.</p>
<p><b>Aam solution layout</b> (chaar projects; naam ek rivaaz hain, niyam nahi):</p>
<ul>
<li><code>Shop.Domain</code> — koi project reference nahi. Entities, value objects, domain events.</li>
<li><code>Shop.Application</code> — Domain ko reference karti hai. Use cases, <b>ports</b> (<code>IOrderRepository</code>, <code>IEmailSender</code>), DTOs.</li>
<li><code>Shop.Infrastructure</code> — Application ko reference karti hai. <b>EF Core <code>DbContext</code></b>, repositories, email, baahri HTTP clients.</li>
<li><code>Shop.Api</code> — Application aur Infrastructure ko reference karti hai. Endpoints aur <b>composition root</b> (<code>AddInfrastructure()</code>).</li>
</ul>
<p>Compiler niyam laagu karta hai: Domain mein EF Core ka reference nahi hai, isliye wahan galti se bhi <code>DbContext</code> use nahi ho sakta. Aapka handler fake <code>IOrderRepository</code> se test hota hai, bina database ke.</p>
<p><b>DbContext kahan rehta hai?</b> Aam jawaab hai <b>Infrastructure</b>, ek port ke peeche. Kuch teams patli repositories se bachne ke liye Application layer ko seedhe <code>DbContext</code> (ya <code>DbSet&lt;T&gt;</code> dikhane wala <code>IAppDbContext</code> interface) use karne deti hain (Day 11 dekho). Yeh trade-off hai: shuddh Application layer zyada portable hai aur bina EF ke test karna aasaan; seedhe EF use karna chhota hai aur uski poori taakat deta hai. Ek chuno aur team conventions mein likho. Domain objects ka EF mapping Infrastructure mein (Fluent API) hota hai, isliye domain classes EF attributes se mukt rehti hain.</p>
<p><b>Kab use karein:</b> aise rules jo framework se zyada jiyen, kai adapters (database, queue, third-party API), ya use cases ki bhaari unit testing. <b>Kab nahi:</b> chhoti CRUD service — chaar projects, interfaces aur mapping logic se zyada code honge.</p>`
      },
      code: [
        {
          caption: {
            en: "Project references point inward: Domain has none; Api is the composition root.",
            hi: "Project references अंदर की तरफ़: Domain का कोई नहीं; Api composition root है।",
            hg: "Project references andar ki taraf: Domain ka koi nahi; Api composition root hai."
          },
          lang: "text",
          check: "none",
          src: `src/
  Shop.Domain/           (references: none)
  Shop.Application/      (references: Shop.Domain)          ports + use cases
  Shop.Infrastructure/   (references: Shop.Application)     DbContext, adapters
  Shop.Api/              (references: Application, Infrastructure)  composition root
tests/
  Shop.Domain.Tests/
  Shop.Application.Tests/   (fake ports, no database)`
        },
        {
          caption: {
            en: "The Application layer owns the port; Infrastructure implements it with EF Core. Namespaces stand in for projects here.",
            hi: "Application layer port की मालिक है; Infrastructure उसे EF Core से implement करती है। यहाँ namespaces projects की जगह हैं।",
            hg: "Application layer port ki maalik hai; Infrastructure use EF Core se implement karti hai. Yahan namespaces projects ki jagah hain."
          },
          check: "compile",
          packages: ["Microsoft.EntityFrameworkCore", "Microsoft.Extensions.DependencyInjection"],
          src: `using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Shop.Domain
{
    public class Order
    {
        public Guid Id { get; private set; } = Guid.NewGuid();
        public decimal Total { get; private set; }

        public void AddItem(decimal price)
        {
            if (price <= 0) throw new ArgumentOutOfRangeException(nameof(price));
            Total += price;
        }
    }
}

namespace Shop.Application
{
    using Shop.Domain;

    // The port: defined by the inner layer, in its own words.
    public interface IOrderRepository
    {
        Task AddAsync(Order order, CancellationToken ct);
    }

    public class PlaceOrderHandler(IOrderRepository orders)
    {
        public async Task<Guid> HandleAsync(decimal price, CancellationToken ct)
        {
            var order = new Order();
            order.AddItem(price);
            await orders.AddAsync(order, ct);
            return order.Id;
        }
    }
}

namespace Shop.Infrastructure
{
    using Shop.Application;
    using Shop.Domain;

    public class ShopDbContext(DbContextOptions<ShopDbContext> options) : DbContext(options)
    {
        public DbSet<Order> Orders => Set<Order>();
    }

    // The adapter: knows EF Core and the Application port. Nothing inward knows it.
    public class EfOrderRepository(ShopDbContext db) : IOrderRepository
    {
        public async Task AddAsync(Order order, CancellationToken ct)
        {
            db.Orders.Add(order);
            await db.SaveChangesAsync(ct);
        }
    }

    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            // AddDbContext(...) with a real provider goes here too.
            services.AddScoped<IOrderRepository, EfOrderRepository>();
            return services;
        }
    }
}`
        }
      ]
    },
    {
      id: "ddd-in-code",
      depth: "detailed",
      title: {
        en: "DDD in code — value object, entity, aggregate root, domain event",
        hi: "DDD code में — value object, entity, aggregate root, domain event",
        hg: "DDD code mein — value object, entity, aggregate root, domain event"
      },
      body: {
        en: `<p><b>Picture — a cheque book:</b> the bank (aggregate root) lets you add or cancel cheques only through its own rules. You cannot tear out a page and write a number on the ledger yourself.</p>
<p>What the first snippet shows:</p>
<ul>
<li><b>Value object</b> <code>Money</code> as a <code>record</code>: equal by values, immutable, <code>with</code> makes a changed copy. Typed ids (<code>OrderId</code>, <code>CustomerId</code> as <code>readonly record struct</code>) stop you from passing the wrong Guid.</li>
<li><b>Aggregate root</b> <code>Order</code>: lines are private and exposed read-only; <code>AddLine</code> and <code>Place</code> check the <b>invariants</b> (a placed order is frozen; a quantity is positive; you cannot place an empty order).</li>
<li>The order refers to the customer by <code>CustomerId</code>, <b>not</b> by a <code>Customer</code> object, so each aggregate is loaded and saved on its own.</li>
<li><b>Domain event</b>: <code>Place()</code> records <code>OrderPlaced</code>; the application layer dispatches it after saving (for example to send an email). Cross-aggregate work then happens in <b>another</b> transaction, so it is eventually consistent.</li>
</ul>
<p><b>Value object pitfalls:</b> a record's equality is member-wise, but a <code>List&lt;T&gt;</code> member is compared by <b>reference</b>; and <code>with</code> is a shallow copy that skips your constructor, so validate in an <code>init</code> accessor if the rule must always hold (see puzzles).</p>
<p>The second snippet contrasts an <b>anemic</b> order (any code can set <code>Status</code> to anything) with a <b>rich</b> one.</p>
<p><b>When to use:</b> rules that are tricky and change; invariants spanning several objects that must be consistent in one save. <b>When not:</b> plain data with no rules (lookup tables, simple admin screens) — a rich model there is ceremony; keep an anemic class and a simple service.</p>`,
        hi: `<p><b>तस्वीर — cheque book:</b> bank (aggregate root) आपको cheques सिर्फ़ अपने नियमों से जोड़ने या रद्द करने देता है। आप एक पन्ना फाड़कर ledger में ख़ुद कोई संख्या नहीं लिख सकते।</p>
<p>पहला snippet क्या दिखाता है:</p>
<ul>
<li><b>Value object</b> <code>Money</code> एक <code>record</code> के रूप में: values से बराबर, immutable, <code>with</code> बदली हुई copy बनाता है। Typed ids (<code>OrderId</code>, <code>CustomerId</code> को <code>readonly record struct</code> बनाकर) ग़लत Guid देने से रोकते हैं।</li>
<li><b>Aggregate root</b> <code>Order</code>: lines private हैं और read-only दिखती हैं; <code>AddLine</code> और <code>Place</code> <b>invariants</b> जाँचते हैं (placed order जम जाता है; quantity positive है; ख़ाली order place नहीं हो सकता)।</li>
<li>Order customer को <code>CustomerId</code> से refer करता है, <code>Customer</code> object से <b>नहीं</b>, इसलिए हर aggregate अलग load और save होता है।</li>
<li><b>Domain event</b>: <code>Place()</code> <code>OrderPlaced</code> दर्ज करता है; application layer उसे save के बाद dispatch करती है (जैसे email भेजने के लिए)। Aggregates के बीच का काम <b>दूसरे</b> transaction में होता है, यानी eventually consistent।</li>
</ul>
<p><b>Value object की गड़बड़ियाँ:</b> record की equality member-wise है, पर <code>List&lt;T&gt;</code> member <b>reference</b> से compare होता है; और <code>with</code> shallow copy है जो आपका constructor छोड़ देता है, इसलिए rule हमेशा लागू रखना हो तो <code>init</code> accessor में validate करो (puzzles देखो)।</p>
<p>दूसरा snippet <b>anemic</b> order (कोई भी code <code>Status</code> कुछ भी set कर दे) और <b>rich</b> order की तुलना करता है।</p>
<p><b>कब use करें:</b> पेचीदा और बदलते rules; कई objects में फैले invariants जो एक save में consistent रहने चाहिए। <b>कब नहीं:</b> बिना rules का सादा data (lookup tables, simple admin screens) — वहाँ rich model बस रस्म है; anemic class और simple service रखो।</p>`,
        hg: `<p><b>Tasveer — cheque book:</b> bank (aggregate root) aapko cheques sirf apne niyamon se jodne ya radd karne deta hai. Aap ek panna phaadkar ledger mein khud koi sankhya nahi likh sakte.</p>
<p>Pehla snippet kya dikhata hai:</p>
<ul>
<li><b>Value object</b> <code>Money</code> ek <code>record</code> ke roop mein: values se barabar, immutable, <code>with</code> badli hui copy banata hai. Typed ids (<code>OrderId</code>, <code>CustomerId</code> ko <code>readonly record struct</code> banakar) galat Guid dene se rokte hain.</li>
<li><b>Aggregate root</b> <code>Order</code>: lines private hain aur read-only dikhti hain; <code>AddLine</code> aur <code>Place</code> <b>invariants</b> jaanchte hain (placed order jam jaata hai; quantity positive hai; khaali order place nahi ho sakta).</li>
<li>Order customer ko <code>CustomerId</code> se refer karta hai, <code>Customer</code> object se <b>nahi</b>, isliye har aggregate alag load aur save hota hai.</li>
<li><b>Domain event</b>: <code>Place()</code> <code>OrderPlaced</code> darj karta hai; application layer use save ke baad dispatch karti hai (jaise email bhejne ke liye). Aggregates ke beech ka kaam <b>doosre</b> transaction mein hota hai, yaani eventually consistent.</li>
</ul>
<p><b>Value object ki gadbadiyan:</b> record ki equality member-wise hai, par <code>List&lt;T&gt;</code> member <b>reference</b> se compare hota hai; aur <code>with</code> shallow copy hai jo aapka constructor chhod deta hai, isliye rule hamesha laagu rakhna ho to <code>init</code> accessor mein validate karo (puzzles dekho).</p>
<p>Doosra snippet <b>anemic</b> order (koi bhi code <code>Status</code> kuch bhi set kar de) aur <b>rich</b> order ki tulna karta hai.</p>
<p><b>Kab use karein:</b> pechida aur badalte rules; kai objects mein phaile invariants jo ek save mein consistent rehne chahiye. <b>Kab nahi:</b> bina rules ka saada data (lookup tables, simple admin screens) — wahan rich model bas rasm hai; anemic class aur simple service rakho.</p>`
      },
      code: [
        {
          caption: {
            en: "Money (value object), Order (aggregate root with invariants), OrderPlaced (domain event), referencing the customer by id.",
            hi: "Money (value object), Order (invariants वाला aggregate root), OrderPlaced (domain event), customer को id से refer करना।",
            hg: "Money (value object), Order (invariants wala aggregate root), OrderPlaced (domain event), customer ko id se refer karna."
          },
          check: "compile",
          src: `public record Money(decimal Amount, string Currency)
{
    public Money Add(Money other)
    {
        if (other.Currency != Currency) throw new InvalidOperationException("Currency mismatch");
        return this with { Amount = Amount + other.Amount };
    }
}

public readonly record struct OrderId(Guid Value);
public readonly record struct CustomerId(Guid Value);

public interface IDomainEvent { }
public record OrderPlaced(OrderId OrderId, decimal Total) : IDomainEvent;
public record OrderLine(string Sku, int Quantity, Money UnitPrice);

public class Order
{
    private readonly List<OrderLine> _lines = [];
    private readonly List<IDomainEvent> _events = [];

    public Order(CustomerId customerId) => CustomerId = customerId;

    public OrderId Id { get; } = new(Guid.NewGuid());
    public CustomerId CustomerId { get; }            // another aggregate: by id, not by object
    public bool IsPlaced { get; private set; }
    public IReadOnlyList<OrderLine> Lines => _lines;
    public IReadOnlyList<IDomainEvent> Events => _events;
    public decimal Total => _lines.Sum(l => l.Quantity * l.UnitPrice.Amount);

    public void AddLine(string sku, int quantity, Money unitPrice)
    {
        if (IsPlaced) throw new InvalidOperationException("A placed order cannot change.");
        if (quantity <= 0) throw new ArgumentOutOfRangeException(nameof(quantity));
        _lines.Add(new OrderLine(sku, quantity, unitPrice));
    }

    public void Place()
    {
        if (_lines.Count == 0) throw new InvalidOperationException("An empty order cannot be placed.");
        IsPlaced = true;
        _events.Add(new OrderPlaced(Id, Total));
    }
}`
        },
        {
          caption: {
            en: "Anemic: the rule sits in a service, so any other code can still break it. Rich: the rule sits with the data.",
            hi: "Anemic: rule service में है, इसलिए कोई और code उसे तोड़ सकता है। Rich: rule data के साथ है।",
            hg: "Anemic: rule service mein hai, isliye koi aur code use tod sakta hai. Rich: rule data ke saath hai."
          },
          check: "compile",
          src: `// Anemic: get/set everywhere, logic in a service.
public class AnemicOrder
{
    public List<string> Lines { get; set; } = [];
    public string Status { get; set; } = "New";
}

public class OrderService
{
    public void Place(AnemicOrder order)
    {
        if (order.Lines.Count == 0) throw new InvalidOperationException("Empty order");
        order.Status = "Placed";
    }
}
// But anyone can still write: order.Status = "Placed"; on an empty order.

// Rich: the entity protects its own state.
public class RichOrder
{
    private readonly List<string> _lines = [];
    public string Status { get; private set; } = "New";

    public void AddLine(string sku) => _lines.Add(sku);

    public void Place()
    {
        if (_lines.Count == 0) throw new InvalidOperationException("Empty order");
        Status = "Placed";
    }
}`
        }
      ]
    },
    {
      id: "slices-and-modules",
      depth: "detailed",
      title: {
        en: "Vertical slices and a modular monolith — boundaries inside one deployable",
        hi: "Vertical slices और modular monolith — एक deployable के अंदर boundaries",
        hg: "Vertical slices aur modular monolith — ek deployable ke andar boundaries"
      },
      body: {
        en: `<p><b>Picture — a mall with separate shops:</b> one building and one entrance (one deployable), but each shop has its own staff, stock and door to the corridor. Customers use the counter, not the stockroom. You can move a shop to another building later, if needed.</p>
<p><b>Vertical slice:</b> one folder per use case (<code>PlaceOrder</code>) holding the request, handler and data access. Related code changes together. A slice can use plain EF Core queries for a simple read and a richer domain model for a complex write — the style may differ by slice.</p>
<p><b>Modular monolith:</b> split by <b>business capability</b> (Orders, Billing, Catalogue), not by technical layer. In the snippet:</p>
<ul>
<li>Each module has a small <b>public contract</b> (<code>IBillingApi</code>); its implementation and tables are <code>internal</code>.</li>
<li>In a real solution each module is its own project (or projects), so the compiler blocks accidental references. Other tools: architecture tests or analyzers that check dependencies.</li>
<li>Modules talk through the contract or through events, never by joining each other's tables. If you later extract Billing into a service, the contract becomes an HTTP or message API.</li>
</ul>
<p><b>Trade-offs:</b> vertical slices cut ceremony but allow duplication and drift between slices; a modular monolith keeps one deployment and one transaction option, but the boundaries hold only while the team keeps enforcing them. Layers and slices can be combined (modules with slices inside).</p>
<p><b>When to use:</b> a product that will grow and may split later, or several small teams in one codebase. <b>When not:</b> a very small app where one project and a few folders are enough, or when the team has no habit of reviewing dependencies — the boundaries decay.</p>`,
        hi: `<p><b>तस्वीर — अलग-अलग दुकानों वाला mall:</b> एक इमारत और एक entrance (एक deployable), पर हर दुकान का अपना staff, stock और corridor में अपना दरवाज़ा। ग्राहक counter use करते हैं, godown नहीं। ज़रूरत पड़े तो दुकान बाद में दूसरी इमारत में जा सकती है।</p>
<p><b>Vertical slice:</b> हर use case (<code>PlaceOrder</code>) का एक folder, जिसमें request, handler और data access हों। जुड़ा code साथ बदलता है। Slice सरल read के लिए सादी EF Core queries और जटिल write के लिए richer domain model use कर सकती है — style slice के हिसाब से अलग हो सकता है।</p>
<p><b>Modular monolith:</b> technical layer से नहीं, <b>business capability</b> (Orders, Billing, Catalogue) से बाँटो। Snippet में:</p>
<ul>
<li>हर module का छोटा <b>public contract</b> (<code>IBillingApi</code>) है; उसकी implementation और tables <code>internal</code> हैं।</li>
<li>असली solution में हर module अपना project (या projects) होता है, इसलिए compiler ग़लती से references रोकता है। दूसरे औज़ार: architecture tests या analyzers जो dependencies जाँचें।</li>
<li>Modules contract या events से बात करते हैं, एक-दूसरे की tables join करके नहीं। बाद में Billing को service बनाओ तो contract HTTP या message API बन जाता है।</li>
</ul>
<p><b>Trade-offs:</b> vertical slices रस्म घटाते हैं पर slices के बीच दोहराव और भटकाव की गुंजाइश देते हैं; modular monolith एक deployment और एक transaction का विकल्प रखता है, पर boundaries तभी टिकती हैं जब team उन्हें लागू करती रहे। Layers और slices मिल सकते हैं (modules के अंदर slices)।</p>
<p><b>कब use करें:</b> ऐसा product जो बढ़ेगा और बाद में बँट सकता है, या एक codebase में कई छोटी teams। <b>कब नहीं:</b> बहुत छोटा app जहाँ एक project और कुछ folders काफ़ी हैं, या जब team को dependencies review करने की आदत नहीं — boundaries सड़ जाती हैं।</p>`,
        hg: `<p><b>Tasveer — alag-alag dukaanon wala mall:</b> ek imaarat aur ek entrance (ek deployable), par har dukaan ka apna staff, stock aur corridor mein apna darwaza. Grahak counter use karte hain, godown nahi. Zaroorat pade to dukaan baad mein doosri imaarat mein ja sakti hai.</p>
<p><b>Vertical slice:</b> har use case (<code>PlaceOrder</code>) ka ek folder, jismein request, handler aur data access hon. Juda code saath badalta hai. Slice saral read ke liye saadi EF Core queries aur jatil write ke liye richer domain model use kar sakti hai — style slice ke hisaab se alag ho sakta hai.</p>
<p><b>Modular monolith:</b> technical layer se nahi, <b>business capability</b> (Orders, Billing, Catalogue) se baanto. Snippet mein:</p>
<ul>
<li>Har module ka chhota <b>public contract</b> (<code>IBillingApi</code>) hai; uski implementation aur tables <code>internal</code> hain.</li>
<li>Asli solution mein har module apna project (ya projects) hota hai, isliye compiler galti se references rokta hai. Doosre aujaar: architecture tests ya analyzers jo dependencies jaanchen.</li>
<li>Modules contract ya events se baat karte hain, ek-doosre ki tables join karke nahi. Baad mein Billing ko service banao to contract HTTP ya message API ban jaata hai.</li>
</ul>
<p><b>Trade-offs:</b> vertical slices rasm ghataate hain par slices ke beech dohraav aur bhatkaav ki gunjaish dete hain; modular monolith ek deployment aur ek transaction ka vikalp rakhta hai, par boundaries tabhi tikti hain jab team unhe laagu karti rahe. Layers aur slices mil sakte hain (modules ke andar slices).</p>
<p><b>Kab use karein:</b> aisa product jo badhega aur baad mein bant sakta hai, ya ek codebase mein kai chhoti teams. <b>Kab nahi:</b> bahut chhota app jahan ek project aur kuch folders kaafi hain, ya jab team ko dependencies review karne ki aadat nahi — boundaries sad jaati hain.</p>`
      },
      code: [
        {
          caption: {
            en: "A vertical-slice folder layout inside a modular monolith.",
            hi: "Modular monolith के अंदर vertical-slice folder layout।",
            hg: "Modular monolith ke andar vertical-slice folder layout."
          },
          lang: "text",
          check: "none",
          src: `Shop.Orders/                      (module = project)
  Features/
    PlaceOrder/        endpoint + command + handler + validator
    CancelOrder/
  Domain/              only if this module has real rules
Shop.Billing/
  IBillingApi.cs       public contract (the only public type)
  Internal/            everything else is internal
Shop.Host/             references modules, wires DI`
        },
        {
          caption: {
            en: "A module exposes a small public contract; a slice in another module depends on it, not on Billing's internals.",
            hi: "Module एक छोटा public contract दिखाता है; दूसरे module की slice उसी पर निर्भर है, Billing के internals पर नहीं।",
            hg: "Module ek chhota public contract dikhata hai; doosre module ki slice usi par nirbhar hai, Billing ke internals par nahi."
          },
          check: "compile",
          packages: ["Microsoft.Extensions.DependencyInjection"],
          src: `using Microsoft.Extensions.DependencyInjection;

namespace Shop.Billing
{
    // Public contract: the only thing other modules may use.
    public interface IBillingApi
    {
        Task<bool> HasUnpaidInvoiceAsync(Guid customerId, CancellationToken ct);
    }

    public static class BillingModule
    {
        public static IServiceCollection AddBillingModule(this IServiceCollection services)
            => services.AddScoped<IBillingApi, BillingApi>();
    }

    // Hidden implementation: owns its own tables in a real module.
    internal class BillingApi : IBillingApi
    {
        public Task<bool> HasUnpaidInvoiceAsync(Guid customerId, CancellationToken ct)
            => Task.FromResult(false);
    }
}

namespace Shop.Orders.Features.PlaceOrder
{
    public record Command(Guid CustomerId, decimal Amount);
    public record Result(Guid OrderId);

    // One slice = one use case, depending on another module only through its contract.
    public class Handler(Shop.Billing.IBillingApi billing)
    {
        public async Task<Result> HandleAsync(Command command, CancellationToken ct)
        {
            if (await billing.HasUnpaidInvoiceAsync(command.CustomerId, ct))
                throw new InvalidOperationException("Customer has an unpaid invoice.");
            return new Result(Guid.NewGuid());
        }
    }
}`
        }
      ]
    },
    {
      id: "adr-in-practice",
      depth: "detailed",
      title: {
        en: "Writing an ADR and deciding as a Tech Lead",
        hi: "ADR लिखना और Tech Lead की तरह फ़ैसला करना",
        hg: "ADR likhna aur Tech Lead ki tarah faisla karna"
      },
      body: {
        en: `<p><b>Picture — a family decision diary:</b> "We bought the flat on the ground floor because the elders cannot climb stairs." Years later nobody asks "why not the top floor?" — the reason is written down.</p>
<p>An ADR is that diary entry for the codebase. The sample below is <b>a sample — replace it with your own project</b>; the team, numbers and choice are invented to show the shape.</p>
<ul>
<li><b>Context</b> states facts and constraints, not the answer.</li>
<li><b>Decision</b> is one clear sentence, in active voice ("We will ...").</li>
<li><b>Consequences</b> lists good and bad results, including what you now must do (for example enforce module boundaries).</li>
<li><b>Alternatives</b> show you looked beyond the first idea.</li>
<li>Keep it to one page, store it next to the code (for example <code>docs/adr/0007-modular-monolith.md</code>), and never delete old ones — mark them <b>Superseded by ADR-0012</b>.</li>
</ul>
<p><b>In the interview</b>, when asked "how would you choose?", walk through: the problem and constraints → the quality attributes that matter → two or three options with trade-offs → your pick for <i>now</i> → what would make you change it (a trigger, for example "a second team joins" or "this module needs 10x scale"). Saying what you give up is a strong signal of seniority.</p>
<p><b>When to use an ADR:</b> hard-to-reverse choices that affect several people. <b>When not:</b> every small library choice; that creates paperwork nobody reads.</p>`,
        hi: `<p><b>तस्वीर — परिवार का फ़ैसला-diary:</b> "हमने ground floor का flat इसलिए लिया क्योंकि बुज़ुर्ग सीढ़ियाँ नहीं चढ़ सकते।" सालों बाद कोई "ऊपर की मंज़िल क्यों नहीं?" नहीं पूछता — वजह लिखी है।</p>
<p>ADR codebase के लिए वही diary entry है। नीचे का नमूना <b>एक sample है — इसे अपने project से बदलो</b>; team, संख्याएँ और चुनाव सिर्फ़ ढाँचा दिखाने के लिए गढ़े गए हैं।</p>
<ul>
<li><b>Context</b> तथ्य और बंदिशें बताता है, जवाब नहीं।</li>
<li><b>Decision</b> एक साफ़ वाक्य, active voice में ("We will ...")।</li>
<li><b>Consequences</b> अच्छे और बुरे नतीजे बताता है, साथ में यह भी कि अब आपको क्या करना होगा (जैसे module boundaries लागू करना)।</li>
<li><b>Alternatives</b> दिखाते हैं कि आपने पहले विचार से आगे देखा।</li>
<li>एक page रखो, code के पास रखो (जैसे <code>docs/adr/0007-modular-monolith.md</code>), और पुराने कभी मत मिटाओ — उन्हें <b>Superseded by ADR-0012</b> चिह्नित करो।</li>
</ul>
<p><b>Interview में</b>, "आप कैसे चुनोगे?" पूछे जाने पर क्रम से बोलो: समस्या और बंदिशें → जो quality attributes मायने रखते हैं → दो-तीन विकल्प trade-offs के साथ → <i>अभी</i> के लिए आपकी पसंद → क्या बदलने पर आप फ़ैसला बदलोगे (एक trigger, जैसे "दूसरी team जुड़े" या "इस module को 10x scale चाहिए")। क्या छोड़ रहे हो यह बताना seniority का मज़बूत संकेत है।</p>
<p><b>ADR कब use करें:</b> पलटने में कठिन फ़ैसले जो कई लोगों पर असर डालें। <b>कब नहीं:</b> हर छोटी library का चुनाव; उससे ऐसा कागज़ बनता है जो कोई नहीं पढ़ता।</p>`,
        hg: `<p><b>Tasveer — parivar ka faisla-diary:</b> "Humne ground floor ka flat isliye liya kyunki buzurg seedhiyan nahi chadh sakte." Saalon baad koi "upar ki manzil kyun nahi?" nahi poochhta — wajah likhi hai.</p>
<p>ADR codebase ke liye wahi diary entry hai. Neeche ka namoona <b>ek sample hai — ise apne project se badlo</b>; team, sankhyayen aur chunaav sirf dhaancha dikhane ke liye gadhe gaye hain.</p>
<ul>
<li><b>Context</b> tathya aur bandishen batata hai, jawaab nahi.</li>
<li><b>Decision</b> ek saaf vaakya, active voice mein ("We will ...").</li>
<li><b>Consequences</b> achhe aur bure nateeje batata hai, saath mein yeh bhi ki ab aapko kya karna hoga (jaise module boundaries laagu karna).</li>
<li><b>Alternatives</b> dikhate hain ki aapne pehle vichaar se aage dekha.</li>
<li>Ek page rakho, code ke paas rakho (jaise <code>docs/adr/0007-modular-monolith.md</code>), aur purane kabhi mat mitao — unhe <b>Superseded by ADR-0012</b> chinhit karo.</li>
</ul>
<p><b>Interview mein</b>, "aap kaise chunoge?" poochhe jaane par kram se bolo: samasya aur bandishen → jo quality attributes maayne rakhte hain → do-teen vikalp trade-offs ke saath → <i>abhi</i> ke liye aapki pasand → kya badalne par aap faisla badloge (ek trigger, jaise "doosri team jude" ya "is module ko 10x scale chahiye"). Kya chhod rahe ho yeh batana seniority ka mazboot sanket hai.</p>
<p><b>ADR kab use karein:</b> palatne mein kathin faisle jo kai logon par asar daalen. <b>Kab nahi:</b> har chhoti library ka chunaav; usse aisa kaagaz banta hai jo koi nahi padhta.</p>`
      },
      code: [
        {
          caption: {
            en: "Sample — replace with your own: an ADR with invented details, to show the shape.",
            hi: "Sample — अपने से बदलो: गढ़े हुए ब्योरों वाला ADR, सिर्फ़ ढाँचा दिखाने के लिए।",
            hg: "Sample — apne se badlo: gadhe hue byoron wala ADR, sirf dhaancha dikhane ke liye."
          },
          lang: "text",
          check: "none",
          src: `# ADR-0007: Start the order platform as a modular monolith

Status: Accepted (sample, invented details)

## Context
- 6 developers in one team; domain boundaries are still being discovered.
- One SQL Server database; no dedicated platform or on-call team yet.
- Orders and Billing will probably need separate teams within two years.

## Decision
We will build one deployable with separate Orders, Billing and Catalogue
modules. Modules talk only through public contracts and events.

## Consequences
+ One deployment, one transaction option, simple local debugging.
+ Module borders can become service borders later.
- Boundaries must be enforced (separate projects + architecture tests).
- One bad release affects all modules.
Revisit when: a second team owns a module, or one module needs very
different scaling.

## Alternatives considered
- Microservices now: rejected, too much operations work for 6 developers.
- Classic layers in one project: rejected, boundaries would not be enforced.`
        }
      ]
    },
  ],
  qa: [
    {
      id: "what-is-clean-architecture",
      depth: "short",
      q: "What is Clean Architecture, and what is the dependency rule?",
      answer: "Clean Architecture arranges code in rings with the domain at the centre. The dependency rule: source-code dependencies point inward, so inner layers do not reference EF Core, HTTP or frameworks.",
      meaning: {
        hi: "Clean Architecture code को rings में रखता है, बीच में domain। Dependency rule: source-code dependencies अंदर की तरफ़ जाती हैं, इसलिए अंदर की layers EF Core, HTTP या frameworks को reference नहीं करतीं।",
        hg: "Clean Architecture code ko rings mein rakhta hai, beech mein domain. Dependency rule: source-code dependencies andar ki taraf jaati hain, isliye andar ki layers EF Core, HTTP ya frameworks ko reference nahi kartin."
      },
      explain: {
        en: `<ul>
<li>Rings, from the centre: Domain → Application (use cases, ports) → Infrastructure and Web at the edge.</li>
<li>It works through <b>DIP</b> (Day 8): the inner layer defines <code>IOrderRepository</code>, the outer layer implements it. The runtime call goes outward, the source-code arrow goes inward.</li>
<li>Benefit: rules are testable without a database and survive a change of framework or database. Cost: more projects, interfaces and mapping.</li>
<li>Follow-up: "Is it the same as Onion or Hexagonal?" — same core idea, different vocabulary (see the last question of this list).</li>
</ul>`,
        hi: `<ul>
<li>Rings, बीच से: Domain → Application (use cases, ports) → किनारे पर Infrastructure और Web।</li>
<li>यह <b>DIP</b> (Day 8) से चलता है: अंदर की layer <code>IOrderRepository</code> define करती है, बाहर की उसे implement करती है। Runtime call बाहर जाती है, source-code का तीर अंदर।</li>
<li>फ़ायदा: rules बिना database के testable हैं और framework या database बदलने पर भी टिके रहते हैं। क़ीमत: ज़्यादा projects, interfaces और mapping।</li>
<li>Follow-up: "क्या यह Onion या Hexagonal जैसा ही है?" — मूल विचार वही, शब्दावली अलग (इस list का आख़िरी सवाल देखो)।</li>
</ul>`,
        hg: `<ul>
<li>Rings, beech se: Domain → Application (use cases, ports) → kinare par Infrastructure aur Web.</li>
<li>Yeh <b>DIP</b> (Day 8) se chalta hai: andar ki layer <code>IOrderRepository</code> define karti hai, bahar ki use implement karti hai. Runtime call bahar jaati hai, source-code ka teer andar.</li>
<li>Fayda: rules bina database ke testable hain aur framework ya database badalne par bhi tike rehte hain. Keemat: zyada projects, interfaces aur mapping.</li>
<li>Follow-up: "Kya yeh Onion ya Hexagonal jaisa hi hai?" — mool vichaar wahi, shabdawali alag (is list ka aakhri sawaal dekho).</li>
</ul>`
      }
    },
    {
      id: "layered-problems",
      depth: "short",
      q: "What problems do you see with classic layered (N-tier) architecture?",
      answer: "Dependencies point down to the data layer, so business rules get tied to data access and often need a database to test. A layer per technical concern also makes one feature touch many folders.",
      meaning: {
        hi: "Dependencies नीचे data layer की तरफ़ जाती हैं, इसलिए business rules data access से बंध जाते हैं और test के लिए अक्सर database चाहिए। हर technical काम की layer होने से एक feature कई folders छूता है।",
        hg: "Dependencies neeche data layer ki taraf jaati hain, isliye business rules data access se bandh jaate hain aur test ke liye aksar database chahiye. Har technical kaam ki layer hone se ek feature kai folders chhoota hai."
      },
      explain: {
        en: `<ul>
<li>Business logic ends up knowing EF Core entities and SQL details; swapping or faking the data layer is hard.</li>
<li>"Business" classes often become pass-through code, while real rules leak into controllers or stored procedures.</li>
<li>Adding one feature touches Controller, Service, Repository and Model folders, so related code is spread out.</li>
<li>Layered is not "wrong": for simple CRUD it is quick and well understood. The question is whether the rules need to be protected.</li>
<li>Follow-up: "How do you fix it?" — invert the dependency with interfaces owned by the business layer (Clean/Onion), or organise by feature (vertical slices).</li>
</ul>`,
        hi: `<ul>
<li>Business logic EF Core entities और SQL की details जानने लगता है; data layer बदलना या fake करना कठिन हो जाता है।</li>
<li>"Business" classes अक्सर सिर्फ़ आगे भेजने वाला code बन जाती हैं, जबकि असली rules controllers या stored procedures में रिस जाते हैं।</li>
<li>एक feature जोड़ने पर Controller, Service, Repository और Model folders छूने पड़ते हैं, इसलिए जुड़ा code बिखरा रहता है।</li>
<li>Layered "ग़लत" नहीं है: सादे CRUD के लिए यह तेज़ और जाना-पहचाना है। सवाल यह है कि क्या rules को बचाना है।</li>
<li>Follow-up: "ठीक कैसे करोगे?" — business layer की मालिकी वाले interfaces से dependency उलटो (Clean/Onion), या feature से organise करो (vertical slices)।</li>
</ul>`,
        hg: `<ul>
<li>Business logic EF Core entities aur SQL ki details jaanne lagta hai; data layer badalna ya fake karna kathin ho jaata hai.</li>
<li>"Business" classes aksar sirf aage bhejne wala code ban jaati hain, jabki asli rules controllers ya stored procedures mein ris jaate hain.</li>
<li>Ek feature jodne par Controller, Service, Repository aur Model folders chhoone padte hain, isliye juda code bikhra rehta hai.</li>
<li>Layered "galat" nahi hai: saade CRUD ke liye yeh tez aur jaana-pehchana hai. Sawaal yeh hai ki kya rules ko bachana hai.</li>
<li>Follow-up: "Theek kaise karoge?" — business layer ki maalikat wale interfaces se dependency ulto (Clean/Onion), ya feature se organise karo (vertical slices).</li>
</ul>`
      }
    },
    {
      id: "dbcontext-placement",
      depth: "short",
      q: "In Clean Architecture, where do the DbContext and the repository interfaces live?",
      answer: "Interfaces live in the Application layer, owned by the inner side. The DbContext and implementations live in Infrastructure; some teams use DbContext directly in Application as a pragmatic trade-off.",
      meaning: {
        hi: "Interfaces Application layer में रहते हैं, अंदर वाली तरफ़ की मालिकी में। DbContext और implementations Infrastructure में रहते हैं; कुछ teams व्यावहारिक trade-off के तौर पर Application में सीधे DbContext use करती हैं।",
        hg: "Interfaces Application layer mein rehte hain, andar wali taraf ki maalikat mein. DbContext aur implementations Infrastructure mein rehte hain; kuch teams vyavaharik trade-off ke taur par Application mein seedhe DbContext use karti hain."
      },
      explain: {
        en: `<ul>
<li>The port belongs to the layer that <b>needs</b> it (DIP, Day 8), so it is named in business words: <code>IOrderRepository</code>, not <code>IEfRepository</code>.</li>
<li>Infrastructure holds the <code>DbContext</code>, Fluent API mappings, migrations and the adapter classes. The Web project wires them in <code>AddInfrastructure()</code>.</li>
<li>Pragmatic variant: Application uses an <code>IAppDbContext</code> interface (or the <code>DbContext</code> itself) to avoid thin repositories — shorter, but Application then depends on EF Core (Day 11 discusses when a repository is worth it).</li>
<li>Follow-up: "How do you test the handler?" — fake the port in unit tests; test the EF queries against a real engine.</li>
<li>TL angle: decide once, write it in the team conventions, and review for consistency.</li>
</ul>`,
        hi: `<ul>
<li>Port उस layer का है जिसे उसकी <b>ज़रूरत</b> है (DIP, Day 8), इसलिए उसका नाम business की भाषा में होता है: <code>IOrderRepository</code>, <code>IEfRepository</code> नहीं।</li>
<li>Infrastructure में <code>DbContext</code>, Fluent API mappings, migrations और adapter classes रहती हैं। Web project <code>AddInfrastructure()</code> में उन्हें जोड़ता है।</li>
<li>व्यावहारिक रूप: Application पतली repositories से बचने के लिए <code>IAppDbContext</code> interface (या ख़ुद <code>DbContext</code>) use करती है — छोटा, पर तब Application EF Core पर निर्भर है (Day 11 में चर्चा है कि repository कब फ़ायदे की है)।</li>
<li>Follow-up: "handler को test कैसे करोगे?" — unit tests में port fake करो; EF queries को असली engine पर test करो।</li>
<li>TL angle: एक बार तय करो, team conventions में लिखो, और consistency review करो।</li>
</ul>`,
        hg: `<ul>
<li>Port us layer ka hai jise uski <b>zaroorat</b> hai (DIP, Day 8), isliye uska naam business ki bhasha mein hota hai: <code>IOrderRepository</code>, <code>IEfRepository</code> nahi.</li>
<li>Infrastructure mein <code>DbContext</code>, Fluent API mappings, migrations aur adapter classes rehti hain. Web project <code>AddInfrastructure()</code> mein unhe jodta hai.</li>
<li>Vyavaharik roop: Application patli repositories se bachne ke liye <code>IAppDbContext</code> interface (ya khud <code>DbContext</code>) use karti hai — chhota, par tab Application EF Core par nirbhar hai (Day 11 mein charcha hai ki repository kab faayde ki hai).</li>
<li>Follow-up: "handler ko test kaise karoge?" — unit tests mein port fake karo; EF queries ko asli engine par test karo.</li>
<li>TL angle: ek baar tay karo, team conventions mein likho, aur consistency review karo.</li>
</ul>`
      }
    },
    {
      id: "monolith-modular-microservices",
      depth: "short",
      q: "Monolith, modular monolith or microservices — how do you decide?",
      answer: "I look at team size, need for independent deployment, data ownership and operational maturity. With a small team and unclear boundaries, a modular monolith is usually the cheaper start.",
      meaning: {
        hi: "मैं team size, independent deployment की ज़रूरत, data ownership और operational maturity देखता हूँ। छोटी team और अस्पष्ट boundaries हों तो modular monolith आम तौर पर सस्ता शुरुआती क़दम है।",
        hg: "Main team size, independent deployment ki zaroorat, data ownership aur operational maturity dekhta hoon. Chhoti team aur aspasht boundaries hon to modular monolith aam taur par sasta shuruaati kadam hai."
      },
      explain: {
        en: `<ul>
<li><b>Monolith</b>: simplest to run; risk of a tangled "big ball of mud". <b>Modular monolith</b>: one deployable with enforced module borders. <b>Microservices</b>: independent deployment and scaling, paid for with network failures, distributed data and operations (Day 16).</li>
<li>Ask: how many teams? Do they need separate release schedules? Can data be split cleanly? Do we have CI/CD, monitoring and on-call?</li>
<li>"Start with a modular monolith" is a common advice because early boundaries are guesses and moving a boundary inside one codebase is cheaper than across services. The trade-off: it needs discipline, and one deployment means one release cadence.</li>
<li>Follow-up: "When would you split?" — a clear trigger: a second team owns the module, it needs different scaling, or its release rhythm differs.</li>
</ul>`,
        hi: `<ul>
<li><b>Monolith</b>: चलाने में सबसे सरल; उलझे "big ball of mud" का जोखिम। <b>Modular monolith</b>: एक deployable, लागू की गई module सीमाओं के साथ। <b>Microservices</b>: independent deployment और scaling, जिसकी क़ीमत network failures, distributed data और operations (Day 16) हैं।</li>
<li>पूछो: कितनी teams? क्या उन्हें अलग release schedules चाहिए? क्या data साफ़ बँट सकता है? क्या हमारे पास CI/CD, monitoring और on-call है?</li>
<li>"modular monolith से शुरू करो" आम सलाह है क्योंकि शुरू की boundaries अंदाज़े होती हैं और एक codebase में boundary हिलाना services के पार से सस्ता है। Trade-off: discipline चाहिए, और एक deployment यानी एक release रफ़्तार।</li>
<li>Follow-up: "कब बाँटोगे?" — साफ़ trigger: दूसरी team module की मालिक बने, उसे अलग scaling चाहिए, या उसकी release लय अलग हो।</li>
</ul>`,
        hg: `<ul>
<li><b>Monolith</b>: chalane mein sabse saral; uljhe "big ball of mud" ka jokhim. <b>Modular monolith</b>: ek deployable, laagu ki gayi module seemaon ke saath. <b>Microservices</b>: independent deployment aur scaling, jiski keemat network failures, distributed data aur operations (Day 16) hain.</li>
<li>Poochho: kitni teams? Kya unhe alag release schedules chahiye? Kya data saaf baant sakta hai? Kya hamare paas CI/CD, monitoring aur on-call hai?</li>
<li>"Modular monolith se shuru karo" aam salaah hai kyunki shuru ki boundaries andaaze hoti hain aur ek codebase mein boundary hilana services ke paar se sasta hai. Trade-off: discipline chahiye, aur ek deployment yaani ek release raftaar.</li>
<li>Follow-up: "Kab baantoge?" — saaf trigger: doosri team module ki maalik bane, use alag scaling chahiye, ya uski release lay alag ho.</li>
</ul>`
      }
    },
    {
      id: "entity-vs-value-object",
      depth: "short",
      q: "What is the difference between an entity and a value object?",
      answer: "An entity has an identity that stays the same while its data changes. A value object has no identity, is equal when its values are equal, and is best immutable.",
      meaning: {
        hi: "Entity की identity होती है जो data बदलने पर भी वही रहती है। Value object की identity नहीं होती, values बराबर हों तो बराबर, और बेहतर है immutable।",
        hg: "Entity ki identity hoti hai jo data badalne par bhi wahi rehti hai. Value object ki identity nahi hoti, values barabar hon to barabar, aur behtar hai immutable."
      },
      explain: {
        en: `<ul>
<li>Entity examples: <code>Order</code>, <code>Customer</code> — compare by Id. Value object examples: <code>Money</code>, <code>Address</code>, <code>DateRange</code> — compare by all values.</li>
<li>In C#, a <code>record</code> gives value equality for free (Day 3). Caution: a <code>List&lt;T&gt;</code> member inside a record is still compared by reference (puzzle below).</li>
<li>Value objects are immutable: change means "make a new one" (<code>with</code>). They can hold rules, for example <code>Email</code> validates its format once.</li>
<li>Entities override <code>Equals</code> by Id; with EF Core the change tracker already uses identity (Day 5).</li>
<li>Follow-up: "How does EF Core store a value object?" — as owned types (<code>OwnsOne</code>) or, from EF Core 8, complex types, usually as columns in the same table.</li>
</ul>`,
        hi: `<ul>
<li>Entity के उदाहरण: <code>Order</code>, <code>Customer</code> — Id से compare। Value object के उदाहरण: <code>Money</code>, <code>Address</code>, <code>DateRange</code> — सारी values से compare।</li>
<li>C# में <code>record</code> value equality मुफ़्त देता है (Day 3)। सावधानी: record के अंदर <code>List&lt;T&gt;</code> member अब भी reference से compare होता है (नीचे puzzle)।</li>
<li>Value objects immutable होते हैं: बदलाव यानी "नया बनाओ" (<code>with</code>)। उनमें rules हो सकते हैं, जैसे <code>Email</code> अपना format एक बार validate करता है।</li>
<li>Entities <code>Equals</code> को Id से override करती हैं; EF Core का change tracker पहले से identity use करता है (Day 5)।</li>
<li>Follow-up: "EF Core value object कैसे store करता है?" — owned types (<code>OwnsOne</code>) या, EF Core 8 से, complex types के रूप में, आम तौर पर उसी table के columns में।</li>
</ul>`,
        hg: `<ul>
<li>Entity ke udaharan: <code>Order</code>, <code>Customer</code> — Id se compare. Value object ke udaharan: <code>Money</code>, <code>Address</code>, <code>DateRange</code> — saari values se compare.</li>
<li>C# mein <code>record</code> value equality muft deta hai (Day 3). Saavdhani: record ke andar <code>List&lt;T&gt;</code> member ab bhi reference se compare hota hai (neeche puzzle).</li>
<li>Value objects immutable hote hain: badlaav yaani "naya banao" (<code>with</code>). Unmein rules ho sakte hain, jaise <code>Email</code> apna format ek baar validate karta hai.</li>
<li>Entities <code>Equals</code> ko Id se override karti hain; EF Core ka change tracker pehle se identity use karta hai (Day 5).</li>
<li>Follow-up: "EF Core value object kaise store karta hai?" — owned types (<code>OwnsOne</code>) ya, EF Core 8 se, complex types ke roop mein, aam taur par usi table ke columns mein.</li>
</ul>`
      }
    },
    {
      id: "aggregate-and-root",
      depth: "short",
      q: "What is an aggregate and an aggregate root?",
      answer: "An aggregate is a cluster of objects treated as one consistency unit. Outside code goes through the root, which enforces the invariants and is the boundary for one transaction.",
      meaning: {
        hi: "Aggregate objects का समूह है जिसे एक consistency इकाई माना जाता है। बाहर का code root से जाता है, जो invariants लागू करता है और एक transaction की सीमा है।",
        hg: "Aggregate objects ka samuh hai jise ek consistency ikai maana jaata hai. Bahar ka code root se jaata hai, jo invariants laagu karta hai aur ek transaction ki seema hai."
      },
      explain: {
        en: `<ul>
<li>Example: <code>Order</code> (root) with its <code>OrderLine</code>s. Outside code calls <code>order.AddLine(...)</code>; it does not edit the lines list.</li>
<li><b>Invariant</b> = a rule that must always hold, for example "a placed order cannot change" or "total never goes below zero".</li>
<li>Rules of thumb: keep aggregates small; load and save one aggregate per transaction; reference other aggregates by Id; use domain events for the rest (eventual consistency).</li>
<li>Repository (Day 11) is usually per aggregate root, not per table.</li>
<li>Follow-up: "What if a rule spans two aggregates?" — accept eventual consistency via events, or reconsider whether they are really one aggregate.</li>
</ul>`,
        hi: `<ul>
<li>उदाहरण: <code>Order</code> (root) और उसकी <code>OrderLine</code>s। बाहर का code <code>order.AddLine(...)</code> call करता है; lines की list सीधे edit नहीं करता।</li>
<li><b>Invariant</b> = वह rule जो हमेशा सच रहना चाहिए, जैसे "placed order नहीं बदल सकता" या "total शून्य से नीचे नहीं जाता"।</li>
<li>अंगूठे के नियम: aggregates छोटे रखो; एक transaction में एक aggregate load और save करो; दूसरे aggregates को Id से refer करो; बाक़ी के लिए domain events (eventual consistency)।</li>
<li>Repository (Day 11) आम तौर पर aggregate root के लिए होती है, table के लिए नहीं।</li>
<li>Follow-up: "अगर rule दो aggregates में फैला हो?" — events से eventual consistency मानो, या दोबारा सोचो कि क्या वे सच में एक aggregate हैं।</li>
</ul>`,
        hg: `<ul>
<li>Udaharan: <code>Order</code> (root) aur uski <code>OrderLine</code>s. Bahar ka code <code>order.AddLine(...)</code> call karta hai; lines ki list seedhe edit nahi karta.</li>
<li><b>Invariant</b> = woh rule jo hamesha sach rehna chahiye, jaise "placed order nahi badal sakta" ya "total shunya se neeche nahi jaata".</li>
<li>Angoothe ke niyam: aggregates chhote rakho; ek transaction mein ek aggregate load aur save karo; doosre aggregates ko Id se refer karo; baaki ke liye domain events (eventual consistency).</li>
<li>Repository (Day 11) aam taur par aggregate root ke liye hoti hai, table ke liye nahi.</li>
<li>Follow-up: "Agar rule do aggregates mein phaila ho?" — events se eventual consistency maano, ya dobara socho ki kya woh sach mein ek aggregate hain.</li>
</ul>`
      }
    },
    {
      id: "bounded-context",
      depth: "short",
      q: "What is a bounded context?",
      answer: "A bounded context is the boundary inside which one domain model and its language are consistent. The same word, like Customer, can mean different things in Sales and in Support.",
      meaning: {
        hi: "Bounded context वह सीमा है जिसके अंदर एक domain model और उसकी भाषा सुसंगत रहती है। एक ही शब्द, जैसे Customer, Sales और Support में अलग मतलब रख सकता है।",
        hg: "Bounded context woh seema hai jiske andar ek domain model aur uski bhasha susangat rehti hai. Ek hi shabd, jaise Customer, Sales aur Support mein alag matlab rakh sakta hai."
      },
      explain: {
        en: `<ul>
<li>Sales cares about a customer's credit and discounts; Support cares about tickets and contact details. Forcing one giant <code>Customer</code> class on both creates a tangled model.</li>
<li>Each context has its own model (and often its own tables); they exchange only what is needed, using an agreed contract.</li>
<li>A <b>context map</b> draws the relationships (for example "Support is downstream of Sales and translates its data through an anti-corruption layer").</li>
<li>Link to architecture: a bounded context is a good candidate for a module in a modular monolith, and later for a microservice (Day 16).</li>
<li>Follow-up: "Is a bounded context the same as a microservice?" — no; it is a model boundary, and one service or several may implement it.</li>
</ul>`,
        hi: `<ul>
<li>Sales को customer का credit और discounts चाहिए; Support को tickets और contact details। दोनों पर एक विशाल <code>Customer</code> class थोपने से model उलझ जाता है।</li>
<li>हर context का अपना model होता है (और अक्सर अपनी tables); वे सिर्फ़ ज़रूरी चीज़ें तय contract से बाँटते हैं।</li>
<li><b>Context map</b> रिश्ते खींचता है (जैसे "Support, Sales के downstream है और उसका data anti-corruption layer से बदलता है")।</li>
<li>Architecture से जुड़ाव: bounded context modular monolith के module का अच्छा उम्मीदवार है, और बाद में microservice का (Day 16)।</li>
<li>Follow-up: "क्या bounded context और microservice एक ही हैं?" — नहीं; यह model की सीमा है, और उसे एक या कई services implement कर सकती हैं।</li>
</ul>`,
        hg: `<ul>
<li>Sales ko customer ka credit aur discounts chahiye; Support ko tickets aur contact details. Dono par ek vishaal <code>Customer</code> class thopne se model uljh jaata hai.</li>
<li>Har context ka apna model hota hai (aur aksar apni tables); woh sirf zaroori cheezein tay contract se baantte hain.</li>
<li><b>Context map</b> rishte kheenchta hai (jaise "Support, Sales ke downstream hai aur uska data anti-corruption layer se badalta hai").</li>
<li>Architecture se judaav: bounded context modular monolith ke module ka achha ummeedwaar hai, aur baad mein microservice ka (Day 16).</li>
<li>Follow-up: "Kya bounded context aur microservice ek hi hain?" — nahi; yeh model ki seema hai, aur use ek ya kai services implement kar sakti hain.</li>
</ul>`
      }
    },
    {
      id: "clean-for-small-crud",
      depth: "short",
      q: "Would you use Clean Architecture for a small CRUD application?",
      answer: "Usually not. The extra projects, interfaces and mapping cost more than they return when there are few business rules; a simple layered or vertical-slice layout is often enough.",
      meaning: {
        hi: "आम तौर पर नहीं। जब business rules कम हों तो अतिरिक्त projects, interfaces और mapping का ख़र्च फ़ायदे से ज़्यादा है; सादा layered या vertical-slice layout अक्सर काफ़ी है।",
        hg: "Aam taur par nahi. Jab business rules kam hon to atirikt projects, interfaces aur mapping ka kharch fayde se zyada hai; saada layered ya vertical-slice layout aksar kaafi hai."
      },
      explain: {
        en: `<ul>
<li>The question tests judgement: architecture serves the problem. A form-over-data app with few rules gains little from four projects and a repository per entity.</li>
<li>What I would do: a simple structure (one project, feature folders), EF Core used directly, one clear place for validation. Keep the option to extract later.</li>
<li>Signs it is time for more structure: rules growing and duplicating, tests needing a database for logic, several teams colliding in one project.</li>
<li>Cheap habits that help any size: clear naming, small classes, DI, no business logic in controllers.</li>
<li>TL angle: "Over-engineering" is a cost to the team too: new joiners must learn the ceremony. Decide with data, record it in an ADR.</li>
</ul>`,
        hi: `<ul>
<li>सवाल judgement परखता है: architecture समस्या की सेवा करता है। कम rules वाले form-over-data app को चार projects और हर entity पर repository से कम फ़ायदा मिलता है।</li>
<li>मैं क्या करूँगा: सरल ढाँचा (एक project, feature folders), EF Core सीधे use, validation की एक साफ़ जगह। बाद में निकालने का विकल्प खुला रखो।</li>
<li>और ढाँचे का समय आने के संकेत: rules बढ़ें और दोहराएँ, logic के tests को database चाहिए, कई teams एक project में टकराएँ।</li>
<li>हर आकार में काम आने वाली सस्ती आदतें: साफ़ नाम, छोटी classes, DI, controllers में business logic नहीं।</li>
<li>TL angle: "Over-engineering" team की भी क़ीमत है: नए लोगों को रस्में सीखनी पड़ती हैं। आँकड़ों से तय करो, ADR में दर्ज करो।</li>
</ul>`,
        hg: `<ul>
<li>Sawaal judgement parakhta hai: architecture samasya ki seva karta hai. Kam rules wale form-over-data app ko chaar projects aur har entity par repository se kam fayda milta hai.</li>
<li>Main kya karunga: saral dhaancha (ek project, feature folders), EF Core seedhe use, validation ki ek saaf jagah. Baad mein nikaalne ka vikalp khula rakho.</li>
<li>Aur dhaanche ka samay aane ke sanket: rules badhen aur dohraayen, logic ke tests ko database chahiye, kai teams ek project mein takraayen.</li>
<li>Har aakar mein kaam aane wali sasti aadatein: saaf naam, chhoti classes, DI, controllers mein business logic nahi.</li>
<li>TL angle: "Over-engineering" team ki bhi keemat hai: naye logon ko rasmein seekhni padti hain. Aankdon se tay karo, ADR mein darj karo.</li>
</ul>`
      }
    },
    {
      id: "modular-monolith-boundaries",
      depth: "detailed",
      q: "What is a modular monolith, and how do you keep the modules separate?",
      answer: "It is one deployable split into modules by business capability, each with a small public contract and its own data. Separate projects, internal types and architecture tests keep the borders from eroding.",
      meaning: {
        hi: "यह एक deployable है जो business capability से modules में बँटा है, हर एक का छोटा public contract और अपना data। अलग projects, internal types और architecture tests सीमाओं को घिसने से बचाते हैं।",
        hg: "Yeh ek deployable hai jo business capability se modules mein banta hai, har ek ka chhota public contract aur apna data. Alag projects, internal types aur architecture tests seemaon ko ghisne se bachate hain."
      },
      explain: {
        en: `<ul>
<li>Split by capability (Orders, Billing), not by layer. Each module exposes an interface or events; its tables are private, with no cross-module joins.</li>
<li>Enforcement: one project per module with <code>internal</code> by default; an architecture test (for example with a library such as NetArchTest) or an analyzer that fails the build on forbidden references; code review.</li>
<li>Data: one database is fine, but separate schemas or tables per module, so a later split does not need a data rewrite.</li>
<li>Trade-off: one deployment and easy transactions, but modules cannot scale or release independently, and discipline decays without checks.</li>
<li>Follow-up: "How do modules communicate?" — in-process calls through the contract, or in-process events; both can become messages later.</li>
</ul>`,
        hi: `<ul>
<li>Capability (Orders, Billing) से बाँटो, layer से नहीं। हर module एक interface या events दिखाता है; उसकी tables निजी हैं, modules के पार joins नहीं।</li>
<li>लागू करना: हर module का एक project, default में <code>internal</code>; architecture test (जैसे NetArchTest जैसी library से) या analyzer जो मना की गई references पर build fail करे; code review।</li>
<li>Data: एक database ठीक है, पर हर module के अलग schemas या tables, ताकि बाद में बँटवारे पर data दोबारा न लिखना पड़े।</li>
<li>Trade-off: एक deployment और आसान transactions, पर modules अलग scale या release नहीं हो सकते, और checks के बिना discipline घिस जाता है।</li>
<li>Follow-up: "modules आपस में कैसे बात करते हैं?" — contract से in-process calls, या in-process events; दोनों बाद में messages बन सकते हैं।</li>
</ul>`,
        hg: `<ul>
<li>Capability (Orders, Billing) se baanto, layer se nahi. Har module ek interface ya events dikhata hai; uski tables nijee hain, modules ke paar joins nahi.</li>
<li>Laagu karna: har module ka ek project, default mein <code>internal</code>; architecture test (jaise NetArchTest jaisi library se) ya analyzer jo mana ki gayi references par build fail kare; code review.</li>
<li>Data: ek database theek hai, par har module ke alag schemas ya tables, taaki baad mein batwaare par data dobara na likhna pade.</li>
<li>Trade-off: ek deployment aur aasaan transactions, par modules alag scale ya release nahi ho sakte, aur checks ke bina discipline ghis jaata hai.</li>
<li>Follow-up: "Modules aapas mein kaise baat karte hain?" — contract se in-process calls, ya in-process events; dono baad mein messages ban sakte hain.</li>
</ul>`
      }
    },
    {
      id: "conways-law",
      depth: "detailed",
      q: "What is Conway's law and how does it affect architecture?",
      answer: "Conway's law says systems tend to mirror the communication structure of the organisation that builds them. So service boundaries should match team boundaries, and many services for a few developers is a smell.",
      meaning: {
        hi: "Conway's law कहता है कि systems उस संगठन के communication ढाँचे की नक़ल करते हैं जो उन्हें बनाता है। इसलिए service boundaries team boundaries से मिलनी चाहिए, और कम developers के लिए कई services खटकने वाली बात है।",
        hg: "Conway's law kehta hai ki systems us sangathan ke communication dhaanche ki nakal karte hain jo unhe banata hai. Isliye service boundaries team boundaries se milni chahiye, aur kam developers ke liye kai services khatakne wali baat hai."
      },
      explain: {
        en: `<ul>
<li>Melvin Conway's observation (published 1968). A popular paraphrase: if four groups build a compiler, you get a four-pass compiler. Teams that need constant meetings to change one feature will build tightly coupled parts.</li>
<li>The "inverse Conway manoeuvre": shape teams (small, owning a capability end to end) so the architecture you want emerges.</li>
<li>Practical use: when someone proposes ten services for five developers, ask who owns each one and who is on call.</li>
<li>It is a tendency, not a law of physics; good interfaces and communication can soften it.</li>
<li>Follow-up: "Does it apply inside a monolith?" — yes, module ownership by team helps keep module borders real.</li>
</ul>`,
        hi: `<ul>
<li>Melvin Conway का अवलोकन (1968 में प्रकाशित)। एक लोकप्रिय paraphrase: चार groups compiler बनाएँ तो चार-pass वाला compiler बनता है। जिन teams को एक feature बदलने में लगातार meetings चाहिए, वे कसकर जुड़े हिस्से बनाएँगी।</li>
<li>"Inverse Conway manoeuvre": teams ऐसी बनाओ (छोटी, एक capability की शुरू से अंत तक मालिक) कि जो architecture चाहिए वह उभरे।</li>
<li>व्यावहारिक use: कोई पाँच developers के लिए दस services सुझाए तो पूछो कि हर एक की मालिक कौन है और on-call कौन है।</li>
<li>यह एक प्रवृत्ति है, भौतिकी का नियम नहीं; अच्छे interfaces और communication इसे नरम कर सकते हैं।</li>
<li>Follow-up: "क्या यह monolith के अंदर भी लागू है?" — हाँ, team के हिसाब से module ownership module सीमाओं को असली रखने में मदद करती है।</li>
</ul>`,
        hg: `<ul>
<li>Melvin Conway ka avlokan (1968 mein prakashit). Ek lokpriya paraphrase: chaar groups compiler banayen to chaar-pass wala compiler banta hai. Jin teams ko ek feature badalne mein lagaataar meetings chahiye, woh kaskar jude hisse banayengi.</li>
<li>"Inverse Conway manoeuvre": teams aisi banao (chhoti, ek capability ki shuru se ant tak maalik) ki jo architecture chahiye woh ubhare.</li>
<li>Vyavaharik use: koi paanch developers ke liye das services sujhaye to poochho ki har ek ki maalik kaun hai aur on-call kaun hai.</li>
<li>Yeh ek pravritti hai, bhautiki ka niyam nahi; achhe interfaces aur communication ise naram kar sakte hain.</li>
<li>Follow-up: "Kya yeh monolith ke andar bhi laagu hai?" — haan, team ke hisaab se module ownership module seemaon ko asli rakhne mein madad karti hai.</li>
</ul>`
      }
    },
    {
      id: "anemic-vs-rich",
      depth: "detailed",
      q: "What is the difference between an anemic and a rich domain model?",
      answer: "An anemic model has data-only classes with logic in services. A rich model keeps the rules inside entities, so invalid states are hard to create; it pays off when rules are complex.",
      meaning: {
        hi: "Anemic model में सिर्फ़ data वाली classes होती हैं और logic services में। Rich model rules को entities के अंदर रखता है, इसलिए invalid states बनाना कठिन है; जटिल rules में यह फ़ायदा देता है।",
        hg: "Anemic model mein sirf data wali classes hoti hain aur logic services mein. Rich model rules ko entities ke andar rakhta hai, isliye invalid states banana kathin hai; jatil rules mein yeh fayda deta hai."
      },
      explain: {
        en: `<ul>
<li>Anemic: <code>order.Status = "Placed"</code> from anywhere, rules in <code>OrderService</code>. Easy to read and map to EF; the rules can be bypassed and get duplicated.</li>
<li>Rich: <code>order.Place()</code> checks the rule and then changes state; setters are private. Rules live in one place and are unit-testable without a database.</li>
<li>Martin Fowler called the anemic model an anti-pattern; many teams still use it successfully for simple CRUD. Present it as a trade-off, not a sin.</li>
<li>A rich model does not mean every method on the entity: logic that needs outside data (a price list, an external call) belongs in a domain service or the handler.</li>
<li>Follow-up: "Does EF Core support rich models?" — yes: private setters, backing fields and constructors work with mapping configuration.</li>
</ul>`,
        hi: `<ul>
<li>Anemic: कहीं से भी <code>order.Status = "Placed"</code>, rules <code>OrderService</code> में। पढ़ना और EF में map करना आसान; rules बायपास हो सकते हैं और दोहराए जाते हैं।</li>
<li>Rich: <code>order.Place()</code> rule जाँचकर state बदलता है; setters private। Rules एक जगह रहते हैं और बिना database के unit-test होते हैं।</li>
<li>Martin Fowler ने anemic model को anti-pattern कहा; फिर भी कई teams सादे CRUD के लिए इसे सफलता से use करती हैं। इसे trade-off की तरह बताओ, पाप की तरह नहीं।</li>
<li>Rich model का मतलब entity पर हर method नहीं: जिस logic को बाहरी data चाहिए (price list, बाहरी call) वह domain service या handler में जाता है।</li>
<li>Follow-up: "क्या EF Core rich models support करता है?" — हाँ: private setters, backing fields और constructors mapping configuration के साथ चलते हैं।</li>
</ul>`,
        hg: `<ul>
<li>Anemic: kahin se bhi <code>order.Status = "Placed"</code>, rules <code>OrderService</code> mein. Padhna aur EF mein map karna aasaan; rules bypass ho sakte hain aur dohraaye jaate hain.</li>
<li>Rich: <code>order.Place()</code> rule jaanchkar state badalta hai; setters private. Rules ek jagah rehte hain aur bina database ke unit-test hote hain.</li>
<li>Martin Fowler ne anemic model ko anti-pattern kaha; phir bhi kai teams saade CRUD ke liye ise safalta se use karti hain. Ise trade-off ki tarah batao, paap ki tarah nahi.</li>
<li>Rich model ka matlab entity par har method nahi: jis logic ko baahri data chahiye (price list, baahri call) woh domain service ya handler mein jaata hai.</li>
<li>Follow-up: "Kya EF Core rich models support karta hai?" — haan: private setters, backing fields aur constructors mapping configuration ke saath chalte hain.</li>
</ul>`
      }
    },
    {
      id: "domain-events-dispatch",
      depth: "detailed",
      q: "What are domain events and when do you dispatch them?",
      answer: "A domain event is a past-tense fact raised by an aggregate, like OrderPlaced. Many teams dispatch them after the changes are saved, so handlers run in separate transactions and are eventually consistent.",
      meaning: {
        hi: "Domain event भूतकाल का तथ्य है जो aggregate उठाता है, जैसे OrderPlaced। कई teams उसे changes save होने के बाद dispatch करती हैं, इसलिए handlers अलग transactions में चलते हैं और eventually consistent होते हैं।",
        hg: "Domain event bhootkaal ka tathya hai jo aggregate uthata hai, jaise OrderPlaced. Kai teams use changes save hone ke baad dispatch karti hain, isliye handlers alag transactions mein chalte hain aur eventually consistent hote hain."
      },
      explain: {
        en: `<ul>
<li>The aggregate only <b>records</b> the event (in a list). It does not call handlers, so the domain stays free of infrastructure.</li>
<li>Option A, <b>after</b> <code>SaveChanges</code>: the order is safely stored first; if a handler fails the main change is already committed, so handlers must be retry-safe (idempotent). Option B, <b>before</b> saving inside the same transaction: handlers see consistent state and fail together with the change, but they extend the transaction.</li>
<li>If events must reach other services reliably, the Outbox pattern (Day 16) stores them in the same transaction as the data.</li>
<li>Domain events are inside one service; integration events cross service boundaries. Do not expose domain events directly as your public contract.</li>
<li>Follow-up: "Why not just call the email service from <code>Place()</code>?" — the domain would depend on infrastructure and the order could not be tested alone.</li>
</ul>`,
        hi: `<ul>
<li>Aggregate event को सिर्फ़ <b>दर्ज</b> करता है (एक list में)। वह handlers को call नहीं करता, इसलिए domain infrastructure से मुक्त रहता है।</li>
<li>विकल्प A, <code>SaveChanges</code> के <b>बाद</b>: order पहले सुरक्षित store होता है; handler fail हो तो मुख्य बदलाव commit हो चुका है, इसलिए handlers retry-safe (idempotent) होने चाहिए। विकल्प B, save से <b>पहले</b> उसी transaction में: handlers consistent state देखते हैं और बदलाव के साथ ही fail होते हैं, पर transaction लंबा हो जाता है।</li>
<li>अगर events को दूसरी services तक भरोसे से पहुँचना है, तो Outbox pattern (Day 16) उन्हें data वाले ही transaction में store करता है।</li>
<li>Domain events एक service के अंदर होते हैं; integration events service की सीमाएँ पार करते हैं। Domain events को सीधे public contract मत बनाओ।</li>
<li>Follow-up: "<code>Place()</code> से सीधे email service क्यों नहीं बुलाते?" — तब domain infrastructure पर निर्भर होगा और order अकेले test नहीं हो सकेगा।</li>
</ul>`,
        hg: `<ul>
<li>Aggregate event ko sirf <b>darj</b> karta hai (ek list mein). Woh handlers ko call nahi karta, isliye domain infrastructure se mukt rehta hai.</li>
<li>Vikalp A, <code>SaveChanges</code> ke <b>baad</b>: order pehle surakshit store hota hai; handler fail ho to mukhya badlaav commit ho chuka hai, isliye handlers retry-safe (idempotent) hone chahiye. Vikalp B, save se <b>pehle</b> usi transaction mein: handlers consistent state dekhte hain aur badlaav ke saath hi fail hote hain, par transaction lamba ho jaata hai.</li>
<li>Agar events ko doosri services tak bharose se pahunchna hai, to Outbox pattern (Day 16) unhe data wale hi transaction mein store karta hai.</li>
<li>Domain events ek service ke andar hote hain; integration events service ki seemayen paar karte hain. Domain events ko seedhe public contract mat banao.</li>
<li>Follow-up: "<code>Place()</code> se seedhe email service kyun nahi bulate?" — tab domain infrastructure par nirbhar hoga aur order akele test nahi ho sakega.</li>
</ul>`
      }
    },
    {
      id: "adr-what-and-why",
      depth: "detailed",
      q: "What is an ADR and why would you introduce it in a team?",
      answer: "An Architecture Decision Record is a short document with context, decision and consequences for one significant choice. It keeps the reasoning in the repository, so later changes start from facts, not memory.",
      meaning: {
        hi: "Architecture Decision Record एक छोटा document है जिसमें एक अहम चुनाव का context, decision और consequences होते हैं। यह कारण repository में रखता है, ताकि बाद के बदलाव तथ्यों से शुरू हों, यादाश्त से नहीं।",
        hg: "Architecture Decision Record ek chhota document hai jismein ek aham chunaav ka context, decision aur consequences hote hain. Yeh kaaran repository mein rakhta hai, taaki baad ke badlaav tathyon se shuru hon, yaadasht se nahi."
      },
      explain: {
        en: `<ul>
<li>Format (a common one, Michael Nygard's): Title, Status (proposed / accepted / superseded), Context, Decision, Consequences. Add alternatives considered.</li>
<li>Store it in the repo (for example <code>docs/adr/</code>), review it in a pull request like code, and keep history: mark old ones <i>superseded</i>, do not delete.</li>
<li>Benefits: onboarding, fewer repeated debates, a clear moment to say what we give up.</li>
<li>Keep it light: only for decisions that are costly to reverse. A heavy process makes people skip it.</li>
<li>Follow-up: "How do you get buy-in?" — draft it, ask the team to comment, decide by a date, and record dissent in the ADR.</li>
</ul>`,
        hi: `<ul>
<li>Format (एक आम, Michael Nygard का): Title, Status (proposed / accepted / superseded), Context, Decision, Consequences। सोचे गए विकल्प जोड़ो।</li>
<li>Repo में रखो (जैसे <code>docs/adr/</code>), code की तरह pull request में review करो, और इतिहास रखो: पुराने को <i>superseded</i> चिह्नित करो, मिटाओ मत।</li>
<li>फ़ायदे: onboarding, कम दोहराई जाने वाली बहसें, और यह कहने का साफ़ मौक़ा कि हम क्या छोड़ रहे हैं।</li>
<li>हल्का रखो: सिर्फ़ उन फ़ैसलों के लिए जिन्हें पलटना महँगा है। भारी process से लोग इसे छोड़ देते हैं।</li>
<li>Follow-up: "buy-in कैसे लोगे?" — draft लिखो, team से comment माँगो, तारीख़ तक तय करो, और असहमति ADR में दर्ज करो।</li>
</ul>`,
        hg: `<ul>
<li>Format (ek aam, Michael Nygard ka): Title, Status (proposed / accepted / superseded), Context, Decision, Consequences. Socche gaye vikalp jodo.</li>
<li>Repo mein rakho (jaise <code>docs/adr/</code>), code ki tarah pull request mein review karo, aur itihaas rakho: purane ko <i>superseded</i> chinhit karo, mitao mat.</li>
<li>Fayde: onboarding, kam dohraayi jaane wali behsen, aur yeh kehne ka saaf mauka ki hum kya chhod rahe hain.</li>
<li>Halka rakho: sirf un faislon ke liye jinhe palatna mehnga hai. Bhaari process se log ise chhod dete hain.</li>
<li>Follow-up: "Buy-in kaise loge?" — draft likho, team se comment maango, taareekh tak tay karo, aur asahmati ADR mein darj karo.</li>
</ul>`
      }
    },
    {
      id: "vertical-slice-trade-offs",
      depth: "detailed",
      q: "What is vertical slice architecture and what are its trade-offs?",
      answer: "Code is organised by feature, so each use case holds its own endpoint, handler and data access. It reduces ceremony, but allows duplication and needs agreed conventions.",
      meaning: {
        hi: "Code feature से organise होता है, इसलिए हर use case में अपना endpoint, handler और data access होता है। इससे रस्म घटती है, पर दोहराव की गुंजाइश है और conventions तय करने पड़ते हैं।",
        hg: "Code feature se organise hota hai, isliye har use case mein apna endpoint, handler aur data access hota hai. Isse rasm ghatati hai, par dohraav ki gunjaish hai aur conventions tay karne padte hain."
      },
      explain: {
        en: `<ul>
<li>Instead of Controllers / Services / Repositories folders, you have <code>Features/PlaceOrder</code>, <code>Features/CancelOrder</code>. A change usually touches one folder.</li>
<li>Each slice picks its own style: a plain EF query for a simple read, a rich aggregate for a complex write. Common with Minimal APIs and handlers (Day 12, Day 11 for CQRS).</li>
<li>Cons: shared logic may be copied between slices; without conventions the codebase becomes inconsistent; boundaries between slices are weaker than separate projects.</li>
<li>It combines with a modular monolith: modules by capability, slices inside.</li>
<li>Follow-up: "Isn't that just a messy codebase?" — only if there are no rules; the benefit comes with agreed shared pieces (domain rules, cross-cutting behaviours).</li>
</ul>`,
        hi: `<ul>
<li>Controllers / Services / Repositories folders की जगह <code>Features/PlaceOrder</code>, <code>Features/CancelOrder</code>। बदलाव आम तौर पर एक folder छूता है।</li>
<li>हर slice अपना style चुनती है: सरल read के लिए सादी EF query, जटिल write के लिए rich aggregate। Minimal APIs और handlers के साथ आम (Day 12, CQRS के लिए Day 11)।</li>
<li>नुक़सान: साझा logic slices के बीच copy हो सकता है; conventions के बिना codebase असंगत हो जाता है; slices के बीच की सीमाएँ अलग projects से कमज़ोर हैं।</li>
<li>यह modular monolith से मिलता है: capability से modules, अंदर slices।</li>
<li>Follow-up: "क्या यह बस बेतरतीब codebase नहीं?" — तभी जब कोई नियम न हों; फ़ायदा तब है जब साझा हिस्से (domain rules, cross-cutting behaviours) तय हों।</li>
</ul>`,
        hg: `<ul>
<li>Controllers / Services / Repositories folders ki jagah <code>Features/PlaceOrder</code>, <code>Features/CancelOrder</code>. Badlaav aam taur par ek folder chhoota hai.</li>
<li>Har slice apna style chunti hai: saral read ke liye saadi EF query, jatil write ke liye rich aggregate. Minimal APIs aur handlers ke saath aam (Day 12, CQRS ke liye Day 11).</li>
<li>Nuksaan: saajha logic slices ke beech copy ho sakta hai; conventions ke bina codebase asangat ho jaata hai; slices ke beech ki seemayen alag projects se kamzor hain.</li>
<li>Yeh modular monolith se milta hai: capability se modules, andar slices.</li>
<li>Follow-up: "Kya yeh bas betarteeb codebase nahi?" — tabhi jab koi niyam na hon; fayda tab hai jab saajhe hisse (domain rules, cross-cutting behaviours) tay hon.</li>
</ul>`
      }
    },
    {
      id: "aggregates-reference-by-id",
      depth: "detailed",
      q: "Why should aggregates reference each other by Id instead of by object?",
      answer: "It keeps each aggregate small and independent, so it is loaded, changed and saved on its own as one transaction. Object links pull in large graphs and blur the consistency boundary.",
      meaning: {
        hi: "इससे हर aggregate छोटा और स्वतंत्र रहता है, इसलिए वह अपने आप, एक transaction के रूप में, load, change और save होता है। Object links बड़े graphs खींच लाते हैं और consistency सीमा धुँधली करते हैं।",
        hg: "Isse har aggregate chhota aur swatantra rehta hai, isliye woh apne aap, ek transaction ke roop mein, load, change aur save hota hai. Object links bade graphs kheench laate hain aur consistency seema dhundhli karte hain."
      },
      explain: {
        en: `<ul>
<li><code>Order.CustomerId</code> instead of <code>Order.Customer</code>: loading an order does not load a customer, who loads addresses, who loads other orders...</li>
<li>It makes the boundary visible: to use another aggregate, you load it through its own repository, in your own handler.</li>
<li>It prepares for a split: an Id works across modules and services; an object reference does not.</li>
<li>Cost: no navigation like <code>order.Customer.Name</code>; you do a second query, or use a read model/DTO for display (CQRS-style reads, Day 11).</li>
<li>Follow-up: "What about EF navigation properties?" — they are allowed inside an aggregate; across aggregates many teams avoid them or keep them for reads only.</li>
</ul>`,
        hi: `<ul>
<li><code>Order.Customer</code> की जगह <code>Order.CustomerId</code>: order load करने से customer load नहीं होता, जो addresses load करता, जो दूसरे orders load करते...</li>
<li>यह सीमा दिखाता है: दूसरा aggregate use करना हो तो उसे उसकी अपनी repository से, अपने handler में load करो।</li>
<li>यह बँटवारे की तैयारी है: Id modules और services के पार चलता है; object reference नहीं।</li>
<li>क़ीमत: <code>order.Customer.Name</code> जैसा navigation नहीं; दूसरी query चलाओ, या दिखाने के लिए read model/DTO (CQRS-style reads, Day 11)।</li>
<li>Follow-up: "EF navigation properties का क्या?" — aggregate के अंदर ठीक हैं; aggregates के पार कई teams उनसे बचती हैं या सिर्फ़ reads के लिए रखती हैं।</li>
</ul>`,
        hg: `<ul>
<li><code>Order.Customer</code> ki jagah <code>Order.CustomerId</code>: order load karne se customer load nahi hota, jo addresses load karta, jo doosre orders load karte...</li>
<li>Yeh seema dikhata hai: doosra aggregate use karna ho to use uski apni repository se, apne handler mein load karo.</li>
<li>Yeh batwaare ki taiyaari hai: Id modules aur services ke paar chalta hai; object reference nahi.</li>
<li>Keemat: <code>order.Customer.Name</code> jaisa navigation nahi; doosri query chalao, ya dikhane ke liye read model/DTO (CQRS-style reads, Day 11).</li>
<li>Follow-up: "EF navigation properties ka kya?" — aggregate ke andar theek hain; aggregates ke paar kai teams unse bachti hain ya sirf reads ke liye rakhti hain.</li>
</ul>`
      }
    },
    {
      id: "clean-onion-hexagonal",
      depth: "detailed",
      q: "How do Clean, Onion and Hexagonal architecture differ?",
      answer: "They share one idea: the domain at the centre and dependencies pointing inward. Hexagonal stresses ports and adapters, Onion the concentric layers, and Clean adds named rings such as entities and use cases.",
      meaning: {
        hi: "इनका एक ही विचार है: बीच में domain और dependencies अंदर की तरफ़। Hexagonal ports और adapters पर ज़ोर देता है, Onion concentric layers पर, और Clean entities और use cases जैसे नामित rings जोड़ता है।",
        hg: "Inka ek hi vichaar hai: beech mein domain aur dependencies andar ki taraf. Hexagonal ports aur adapters par zor deta hai, Onion concentric layers par, aur Clean entities aur use cases jaise naamit rings jodta hai."
      },
      explain: {
        en: `<ul>
<li><b>Hexagonal</b> (Alistair Cockburn, ports and adapters): the app core has ports; drivers (HTTP, tests) and driven things (database, email) plug in through adapters.</li>
<li><b>Onion</b> (Jeffrey Palermo): concentric layers — domain model, domain services, application services, then infrastructure and UI outside.</li>
<li><b>Clean</b> (Robert C. Martin): entities, use cases, interface adapters, frameworks &amp; drivers; the dependency rule is the headline.</li>
<li>In a .NET solution they usually look the same: Domain, Application, Infrastructure, Web. Do not spend interview time on small naming differences; show you understand the inward arrow.</li>
<li>Follow-up: "Which would you pick?" — the one the team already understands; the principle matters more than the label.</li>
</ul>`,
        hi: `<ul>
<li><b>Hexagonal</b> (Alistair Cockburn, ports and adapters): app core में ports होते हैं; drivers (HTTP, tests) और driven चीज़ें (database, email) adapters से जुड़ती हैं।</li>
<li><b>Onion</b> (Jeffrey Palermo): concentric layers — domain model, domain services, application services, फिर बाहर infrastructure और UI।</li>
<li><b>Clean</b> (Robert C. Martin): entities, use cases, interface adapters, frameworks &amp; drivers; dependency rule मुख्य बात है।</li>
<li>.NET solution में ये आम तौर पर एक जैसे दिखते हैं: Domain, Application, Infrastructure, Web। Interview का समय नामों के छोटे फ़र्क़ पर मत लगाओ; अंदर की तरफ़ वाला तीर समझाओ।</li>
<li>Follow-up: "आप कौन-सा चुनोगे?" — जो team पहले से समझती हो; label से ज़्यादा सिद्धांत मायने रखता है।</li>
</ul>`,
        hg: `<ul>
<li><b>Hexagonal</b> (Alistair Cockburn, ports and adapters): app core mein ports hote hain; drivers (HTTP, tests) aur driven cheezein (database, email) adapters se judti hain.</li>
<li><b>Onion</b> (Jeffrey Palermo): concentric layers — domain model, domain services, application services, phir bahar infrastructure aur UI.</li>
<li><b>Clean</b> (Robert C. Martin): entities, use cases, interface adapters, frameworks &amp; drivers; dependency rule mukhya baat hai.</li>
<li>.NET solution mein ye aam taur par ek jaise dikhte hain: Domain, Application, Infrastructure, Web. Interview ka samay naamon ke chhote farq par mat lagao; andar ki taraf wala teer samjhao.</li>
<li>Follow-up: "Aap kaun-sa chunoge?" — jo team pehle se samajhti ho; label se zyada siddhant maayne rakhta hai.</li>
</ul>`
      }
    },
    {
      id: "when-not-microservices",
      depth: "detailed",
      q: "Your manager wants microservices for a team of five developers. What do you say?",
      answer: "I would ask what problem it solves, then compare costs: network failures, distributed data, deployment and monitoring. For five developers I would likely propose a modular monolith and a clear trigger for splitting.",
      meaning: {
        hi: "मैं पूछूँगा कि यह कौन-सी समस्या सुलझाता है, फिर लागतें तौलूँगा: network failures, distributed data, deployment और monitoring। पाँच developers के लिए मैं शायद modular monolith और बँटवारे का साफ़ trigger सुझाऊँगा।",
        hg: "Main poochhunga ki yeh kaun-si samasya suljhata hai, phir laagatein taulunga: network failures, distributed data, deployment aur monitoring. Paanch developers ke liye main shaayad modular monolith aur batwaare ka saaf trigger sujhaunga."
      },
      explain: {
        en: `<ul>
<li>Start with a question, not a "no": what is the pain — slow releases, scaling one part, team conflicts, or "it is modern"?</li>
<li>List what microservices add: network calls that fail, no single transaction, data duplication, versioned contracts, tracing, a deployment pipeline per service, on-call load (Day 16).</li>
<li>Offer an option that fits the pain: a modular monolith with clear borders, a faster pipeline, or extracting <b>one</b> service that has a real scaling or ownership reason.</li>
<li>Agree on triggers to revisit: a second team, a module needing very different scale, or incompatible release rhythms. Record it in an ADR.</li>
<li>Be fair: if there are real reasons (several autonomous teams, regulatory isolation, very different scaling) microservices can be right. The answer is about fit.</li>
</ul>`,
        hi: `<ul>
<li>"नहीं" से नहीं, सवाल से शुरू करो: दर्द क्या है — धीमे releases, एक हिस्से की scaling, team के टकराव, या "यह modern है"?</li>
<li>गिनाओ कि microservices क्या जोड़ती हैं: fail होने वाली network calls, एक transaction नहीं, data की नक़ल, versioned contracts, tracing, हर service की deployment pipeline, on-call का बोझ (Day 16)।</li>
<li>दर्द के मुताबिक़ विकल्प दो: साफ़ सीमाओं वाला modular monolith, तेज़ pipeline, या <b>एक</b> service निकालना जिसकी असली scaling या ownership वजह है।</li>
<li>दोबारा देखने के triggers पर सहमति: दूसरी team, बहुत अलग scale वाला module, या असंगत release लय। ADR में दर्ज करो।</li>
<li>निष्पक्ष रहो: असली वजहें हों (कई स्वायत्त teams, नियामक isolation, बहुत अलग scaling) तो microservices सही हो सकती हैं। जवाब fit का है।</li>
</ul>`,
        hg: `<ul>
<li>"Nahi" se nahi, sawaal se shuru karo: dard kya hai — dheemi releases, ek hisse ki scaling, team ke takraav, ya "yeh modern hai"?</li>
<li>Ginao ki microservices kya jodti hain: fail hone wali network calls, ek transaction nahi, data ki nakal, versioned contracts, tracing, har service ki deployment pipeline, on-call ka bojh (Day 16).</li>
<li>Dard ke mutaabik vikalp do: saaf seemaon wala modular monolith, tez pipeline, ya <b>ek</b> service nikaalna jiski asli scaling ya ownership wajah hai.</li>
<li>Dobara dekhne ke triggers par sahmati: doosri team, bahut alag scale wala module, ya asangat release lay. ADR mein darj karo.</li>
<li>Nishpaksh raho: asli wajahein hon (kai swayatt teams, niyamak isolation, bahut alag scaling) to microservices sahi ho sakti hain. Jawaab fit ka hai.</li>
</ul>`
      }
    }
  ],
  puzzles: [
    {
      id: "record-with-list-equality",
      src: `var a = new Parcel("P1", new List<string> { "tea", "sugar" });
var b = new Parcel("P1", new List<string> { "tea", "sugar" });
Console.WriteLine("same contents, record ==: " + (a == b));

var shared = new List<string> { "tea" };
var c = new Parcel("P2", shared);
var d = c with { Id = "P2" };
Console.WriteLine("copy via with, record ==: " + (c == d));
shared.Add("milk");
Console.WriteLine("items seen through the copy: " + d.Items.Count);

var x = new CheckedParcel("P1", new List<string> { "tea", "sugar" });
var y = new CheckedParcel("P1", new List<string> { "tea", "sugar" });
Console.WriteLine("custom Equals: " + (x == y));
Console.WriteLine("same hash: " + (x.GetHashCode() == y.GetHashCode()));

record Parcel(string Id, List<string> Items);

record CheckedParcel(string Id, List<string> Items)
{
    public virtual bool Equals(CheckedParcel? other) =>
        other is not null && Id == other.Id && Items.SequenceEqual(other.Items);

    public override int GetHashCode() => HashCode.Combine(Id, Items.Count);
}`,
      answer: `same contents, record ==: False
copy via with, record ==: True
items seen through the copy: 2
custom Equals: True
same hash: True`,
      explain: {
        en: `<ul>
<li>A record compares each member with the default comparer. For <code>List&lt;string&gt;</code> that is <b>reference</b> equality, so two lists with the same items are "different" → <b>False</b>. A record is a value object only as deep as its members are.</li>
<li><code>with</code> makes a <b>shallow</b> copy: <code>d</code> points to the <b>same</b> list as <code>c</code>, so they are equal, and adding "milk" through <code>shared</code> shows up in <code>d</code> (2 items).</li>
<li>Fix: hold an immutable collection, or override <code>Equals</code> (and <code>GetHashCode</code> consistently) to compare items in order, as <code>CheckedParcel</code> does → <b>True</b>, same hash.</li>
</ul>`,
        hi: `<ul>
<li>Record हर member को default comparer से compare करता है। <code>List&lt;string&gt;</code> के लिए यह <b>reference</b> equality है, इसलिए एक जैसे items वाली दो lists "अलग" हैं → <b>False</b>। Record उतना ही गहरा value object है जितने उसके members।</li>
<li><code>with</code> <b>shallow</b> copy बनाता है: <code>d</code> उसी list को पकड़ता है जिसे <code>c</code>, इसलिए वे बराबर हैं, और <code>shared</code> से "milk" जोड़ना <code>d</code> में दिखता है (2 items)।</li>
<li>Fix: immutable collection रखो, या <code>Equals</code> (और संगत <code>GetHashCode</code>) override करके items क्रम से compare करो, जैसे <code>CheckedParcel</code> करता है → <b>True</b>, वही hash।</li>
</ul>`,
        hg: `<ul>
<li>Record har member ko default comparer se compare karta hai. <code>List&lt;string&gt;</code> ke liye yeh <b>reference</b> equality hai, isliye ek jaise items wali do lists "alag" hain → <b>False</b>. Record utna hi gehra value object hai jitne uske members.</li>
<li><code>with</code> <b>shallow</b> copy banata hai: <code>d</code> usi list ko pakadta hai jise <code>c</code>, isliye woh barabar hain, aur <code>shared</code> se "milk" jodna <code>d</code> mein dikhta hai (2 items).</li>
<li>Fix: immutable collection rakho, ya <code>Equals</code> (aur sangat <code>GetHashCode</code>) override karke items kram se compare karo, jaise <code>CheckedParcel</code> karta hai → <b>True</b>, wahi hash.</li>
</ul>`
      }
    },
    {
      id: "entity-equality-by-id",
      src: `var c1 = new Customer(1, "Asha");
var c2 = new Customer(1, "Asha Verma");
var c3 = new Customer(2, "Asha");

Console.WriteLine("c1 == c2: " + (c1 == c2));
Console.WriteLine("c1.Equals(c2): " + c1.Equals(c2));
Console.WriteLine("c1.Equals(c3): " + c1.Equals(c3));

var set = new HashSet<Customer> { c1 };
Console.WriteLine("add c2: " + set.Add(c2));
Console.WriteLine("count: " + set.Count);

c1.Rename("Asha K");
Console.WriteLine("contains c2 after rename: " + set.Contains(c2));
Console.WriteLine("name in set: " + set.Single().Name);

class Customer(int id, string name)
{
    public int Id { get; } = id;
    public string Name { get; private set; } = name;

    public void Rename(string newName) => Name = newName;

    public override bool Equals(object? obj) => obj is Customer other && other.Id == Id;
    public override int GetHashCode() => Id.GetHashCode();
}`,
      answer: `c1 == c2: False
c1.Equals(c2): True
c1.Equals(c3): False
add c2: False
count: 1
contains c2 after rename: True
name in set: Asha K`,
      explain: {
        en: `<ul>
<li>An <b>entity</b> is the same when the <b>Id</b> is the same. The class overrides <code>Equals</code> and <code>GetHashCode</code> by Id, so <code>c1.Equals(c2)</code> is True although the names differ, and <code>c1.Equals(c3)</code> is False although the names match.</li>
<li><code>==</code> was <b>not</b> overloaded, so it still compares references → False. If you override <code>Equals</code>, be clear about <code>==</code> too (overload it, or tell the team to use <code>Equals</code>).</li>
<li>The set sees <code>c2</code> as the same customer: <code>Add</code> returns False, count stays 1.</li>
<li>The hash comes from the Id, which never changes, so renaming does not break the set. Hashing on a mutable field would lose the item.</li>
</ul>`,
        hi: `<ul>
<li><b>Entity</b> तब वही है जब <b>Id</b> वही हो। Class <code>Equals</code> और <code>GetHashCode</code> को Id से override करती है, इसलिए नाम अलग होने पर भी <code>c1.Equals(c2)</code> True है, और नाम मिलने पर भी <code>c1.Equals(c3)</code> False।</li>
<li><code>==</code> overload <b>नहीं</b> हुआ, इसलिए वह अब भी references compare करता है → False। <code>Equals</code> override करो तो <code>==</code> पर भी साफ़ रहो (overload करो, या team को <code>Equals</code> use करने को कहो)।</li>
<li>Set <code>c2</code> को वही customer मानता है: <code>Add</code> False लौटाता है, count 1 रहता है।</li>
<li>Hash Id से आता है, जो कभी नहीं बदलता, इसलिए rename से set नहीं टूटता। बदलने वाले field पर hash करने से item खो जाता है।</li>
</ul>`,
        hg: `<ul>
<li><b>Entity</b> tab wahi hai jab <b>Id</b> wahi ho. Class <code>Equals</code> aur <code>GetHashCode</code> ko Id se override karti hai, isliye naam alag hone par bhi <code>c1.Equals(c2)</code> True hai, aur naam milne par bhi <code>c1.Equals(c3)</code> False.</li>
<li><code>==</code> overload <b>nahi</b> hua, isliye woh ab bhi references compare karta hai → False. <code>Equals</code> override karo to <code>==</code> par bhi saaf raho (overload karo, ya team ko <code>Equals</code> use karne ko kaho).</li>
<li>Set <code>c2</code> ko wahi customer maanta hai: <code>Add</code> False lautata hai, count 1 rehta hai.</li>
<li>Hash Id se aata hai, jo kabhi nahi badalta, isliye rename se set nahi tootta. Badalne wale field par hash karne se item kho jaata hai.</li>
</ul>`
      }
    },
    {
      id: "aggregate-invariants-and-leak",
      src: `var cart = new Cart(maxLines: 2);
cart.Add("tea", 1);
cart.Add("sugar", 2);

try { cart.Add("milk", 1); }
catch (InvalidOperationException ex) { Console.WriteLine("rejected: " + ex.Message); }

try { cart.Add("salt", 0); }
catch (ArgumentOutOfRangeException ex) { Console.WriteLine("rejected: " + ex.ParamName); }

Console.WriteLine(cart.Lines.Count + " lines, " + cart.TotalQuantity + " items");

((List<CartLine>)cart.Lines).Add(new CartLine("salt", 5));
Console.WriteLine("after cast: " + cart.Lines.Count + " lines, " + cart.TotalQuantity + " items");
Console.WriteLine("safe view is a List: " + (cart.SafeLines is List<CartLine>));

record CartLine(string Sku, int Qty);

class Cart(int maxLines)
{
    private readonly List<CartLine> _lines = [];

    public IReadOnlyList<CartLine> Lines => _lines;
    public IReadOnlyList<CartLine> SafeLines => _lines.AsReadOnly();
    public int TotalQuantity => _lines.Sum(l => l.Qty);

    public void Add(string sku, int qty)
    {
        if (qty <= 0) throw new ArgumentOutOfRangeException(nameof(qty));
        if (_lines.Count >= maxLines) throw new InvalidOperationException($"Cart is full ({maxLines} lines)");
        _lines.Add(new CartLine(sku, qty));
    }
}`,
      answer: `rejected: Cart is full (2 lines)
rejected: qty
2 lines, 3 items
after cast: 3 lines, 8 items
safe view is a List: False`,
      explain: {
        en: `<ul>
<li>The root enforces its <b>invariants</b>: a third line is rejected (<code>InvalidOperationException</code>), and a zero quantity is rejected first (<code>ArgumentOutOfRangeException</code>, parameter name <code>qty</code>).</li>
<li>But <code>Lines</code> returns <code>_lines</code> itself typed as <code>IReadOnlyList</code>. The object is still a <code>List</code>, so a cast adds a third line and 5 more items: <b>3 lines, 8 items</b> — the invariant is bypassed.</li>
<li><code>AsReadOnly()</code> wraps the list in a <code>ReadOnlyCollection</code>, which is <b>not</b> a <code>List</code>, so the check prints False and the cast would fail.</li>
<li>Lesson: an interface type is a promise to callers, not protection. Expose a real read-only wrapper (or a copy) from aggregates.</li>
</ul>`,
        hi: `<ul>
<li>Root अपने <b>invariants</b> लागू करता है: तीसरी line reject होती है (<code>InvalidOperationException</code>), और शून्य quantity पहले reject होती है (<code>ArgumentOutOfRangeException</code>, parameter नाम <code>qty</code>)।</li>
<li>पर <code>Lines</code> ख़ुद <code>_lines</code> को <code>IReadOnlyList</code> type में लौटाता है। Object अब भी <code>List</code> है, इसलिए cast तीसरी line और 5 items और जोड़ देता है: <b>3 lines, 8 items</b> — invariant बायपास हो गया।</li>
<li><code>AsReadOnly()</code> list को <code>ReadOnlyCollection</code> में लपेटता है, जो <code>List</code> <b>नहीं</b> है, इसलिए check False print करता है और cast fail होता।</li>
<li>सबक: interface type callers से वादा है, सुरक्षा नहीं। Aggregates से असली read-only wrapper (या copy) दिखाओ।</li>
</ul>`,
        hg: `<ul>
<li>Root apne <b>invariants</b> laagu karta hai: teesri line reject hoti hai (<code>InvalidOperationException</code>), aur shunya quantity pehle reject hoti hai (<code>ArgumentOutOfRangeException</code>, parameter naam <code>qty</code>).</li>
<li>Par <code>Lines</code> khud <code>_lines</code> ko <code>IReadOnlyList</code> type mein lautata hai. Object ab bhi <code>List</code> hai, isliye cast teesri line aur 5 items aur jod deta hai: <b>3 lines, 8 items</b> — invariant bypass ho gaya.</li>
<li><code>AsReadOnly()</code> list ko <code>ReadOnlyCollection</code> mein lapetta hai, jo <code>List</code> <b>nahi</b> hai, isliye check False print karta hai aur cast fail hota.</li>
<li>Sabak: interface type callers se vaada hai, suraksha nahi. Aggregates se asli read-only wrapper (ya copy) dikhao.</li>
</ul>`
      }
    },
    {
      id: "domain-events-raise-then-dispatch",
      src: `var order = new Order("A-1");
order.Place();
order.Ship();
Console.WriteLine("raised: " + string.Join(", ", order.Events.Select(e => e.GetType().Name)));

var early = new Order("A-2");
try { early.Ship(); }
catch (InvalidOperationException) { Console.WriteLine("A-2 events: " + early.Events.Count); }

Console.WriteLine("saved");
foreach (var ev in order.TakeEvents())
{
    Console.WriteLine("email -> " + ev.GetType().Name);
    if (ev is OrderPlaced) Console.WriteLine("stock -> " + ev.GetType().Name);
}
Console.WriteLine("left after dispatch: " + order.Events.Count);

interface IDomainEvent { }
record OrderPlaced(string Id) : IDomainEvent;
record OrderShipped(string Id) : IDomainEvent;

class Order(string id)
{
    private readonly List<IDomainEvent> _events = [];
    private bool _placed;

    public IReadOnlyList<IDomainEvent> Events => _events;

    public void Place()
    {
        _placed = true;
        _events.Add(new OrderPlaced(id));
    }

    public void Ship()
    {
        if (!_placed) throw new InvalidOperationException("Place it first.");
        _events.Add(new OrderShipped(id));
    }

    public IReadOnlyList<IDomainEvent> TakeEvents()
    {
        var copy = _events.ToArray();
        _events.Clear();
        return copy;
    }
}`,
      answer: `raised: OrderPlaced, OrderShipped
A-2 events: 0
saved
email -> OrderPlaced
stock -> OrderPlaced
email -> OrderShipped
left after dispatch: 0`,
      explain: {
        en: `<ul>
<li>The aggregate only <b>records</b> events, in the order things happened: <code>OrderPlaced</code>, then <code>OrderShipped</code>. Nothing is sent yet.</li>
<li>A rejected command (<code>Ship</code> before <code>Place</code>) throws <b>before</b> an event is added, so A-2 has 0 events. Events describe facts that happened.</li>
<li>After "saved", the dispatcher takes the events in order and calls the handlers: email gets both, stock only <code>OrderPlaced</code>. <code>TakeEvents</code> returns a copy and clears the list, so the same event is not dispatched twice.</li>
<li>If saving fails, nothing was dispatched — that is the point of dispatching after the save.</li>
</ul>`,
        hi: `<ul>
<li>Aggregate events को सिर्फ़ <b>दर्ज</b> करता है, उसी क्रम में जैसे चीज़ें हुईं: <code>OrderPlaced</code>, फिर <code>OrderShipped</code>। अभी कुछ भेजा नहीं गया।</li>
<li>Reject हुआ command (<code>Place</code> से पहले <code>Ship</code>) event जुड़ने से <b>पहले</b> exception फेंकता है, इसलिए A-2 के 0 events हैं। Events हो चुके तथ्यों का वर्णन हैं।</li>
<li>"saved" के बाद dispatcher events क्रम से लेता है और handlers बुलाता है: email को दोनों, stock को सिर्फ़ <code>OrderPlaced</code>। <code>TakeEvents</code> copy लौटाकर list साफ़ करता है, इसलिए एक ही event दो बार dispatch नहीं होता।</li>
<li>Save fail हो तो कुछ dispatch नहीं हुआ — save के बाद dispatch करने का यही मक़सद है।</li>
</ul>`,
        hg: `<ul>
<li>Aggregate events ko sirf <b>darj</b> karta hai, usi kram mein jaise cheezein huin: <code>OrderPlaced</code>, phir <code>OrderShipped</code>. Abhi kuch bheja nahi gaya.</li>
<li>Reject hua command (<code>Place</code> se pehle <code>Ship</code>) event judne se <b>pehle</b> exception phenkta hai, isliye A-2 ke 0 events hain. Events ho chuke tathyon ka varnan hain.</li>
<li>"saved" ke baad dispatcher events kram se leta hai aur handlers bulata hai: email ko dono, stock ko sirf <code>OrderPlaced</code>. <code>TakeEvents</code> copy lautakar list saaf karta hai, isliye ek hi event do baar dispatch nahi hota.</li>
<li>Save fail ho to kuch dispatch nahi hua — save ke baad dispatch karne ka yahi maqsad hai.</li>
</ul>`
      }
    },
    {
      id: "port-owned-by-inner-layer",
      src: `using Shop.Application;
using Shop.Infrastructure;

IOrderRepository repo = new InMemoryOrderRepository();
var handler = new PlaceOrderHandler(repo);
handler.Handle("A-1");

Console.WriteLine("port lives in: " + typeof(IOrderRepository).Namespace);
Console.WriteLine("adapter lives in: " + typeof(InMemoryOrderRepository).Namespace);
Console.WriteLine("adapter implements: " + typeof(InMemoryOrderRepository).GetInterfaces()[0].Name);
Console.WriteLine("handler depends on: " + typeof(PlaceOrderHandler).GetConstructors()[0].GetParameters()[0].ParameterType.FullName);
Console.WriteLine("saved: " + string.Join(",", ((InMemoryOrderRepository)repo).Saved));

namespace Shop.Application
{
    public interface IOrderRepository
    {
        void Save(string id);
    }

    public class PlaceOrderHandler(IOrderRepository repository)
    {
        public void Handle(string id)
        {
            Console.WriteLine("handling " + id);
            repository.Save(id);
        }
    }
}

namespace Shop.Infrastructure
{
    using Shop.Application;

    public class InMemoryOrderRepository : IOrderRepository
    {
        public List<string> Saved { get; } = [];
        public void Save(string id) => Saved.Add(id);
    }
}`,
      answer: `handling A-1
port lives in: Shop.Application
adapter lives in: Shop.Infrastructure
adapter implements: IOrderRepository
handler depends on: Shop.Application.IOrderRepository
saved: A-1`,
      explain: {
        en: `<ul>
<li>The <b>port</b> <code>IOrderRepository</code> lives in the Application namespace (inner), and the adapter lives in Infrastructure (outer). The <code>using Shop.Application</code> in Infrastructure is the arrow pointing <b>inward</b>; Application has no <code>using</code> of Infrastructure.</li>
<li>The handler's constructor depends on the interface, so reflection shows <code>Shop.Application.IOrderRepository</code>.</li>
<li>At runtime the call goes outward (handler → adapter) and prints <code>handling A-1</code> first, then the adapter stores the id. Source dependencies point inward; calls flow outward — that is DIP (Day 8).</li>
<li>Here namespaces stand in for projects; in a real solution the project references make the compiler reject a wrong arrow.</li>
</ul>`,
        hi: `<ul>
<li><b>Port</b> <code>IOrderRepository</code> Application namespace (अंदर) में है, और adapter Infrastructure (बाहर) में। Infrastructure का <code>using Shop.Application</code> <b>अंदर</b> की तरफ़ वाला तीर है; Application में Infrastructure का कोई <code>using</code> नहीं।</li>
<li>Handler का constructor interface पर निर्भर है, इसलिए reflection <code>Shop.Application.IOrderRepository</code> दिखाता है।</li>
<li>Runtime पर call बाहर जाती है (handler → adapter) और पहले <code>handling A-1</code> print होता है, फिर adapter id store करता है। Source dependencies अंदर की तरफ़; calls बाहर की तरफ़ — यही DIP है (Day 8)।</li>
<li>यहाँ namespaces projects की जगह हैं; असली solution में project references से compiler ग़लत तीर reject कर देता है।</li>
</ul>`,
        hg: `<ul>
<li><b>Port</b> <code>IOrderRepository</code> Application namespace (andar) mein hai, aur adapter Infrastructure (bahar) mein. Infrastructure ka <code>using Shop.Application</code> <b>andar</b> ki taraf wala teer hai; Application mein Infrastructure ka koi <code>using</code> nahi.</li>
<li>Handler ka constructor interface par nirbhar hai, isliye reflection <code>Shop.Application.IOrderRepository</code> dikhata hai.</li>
<li>Runtime par call bahar jaati hai (handler → adapter) aur pehle <code>handling A-1</code> print hota hai, phir adapter id store karta hai. Source dependencies andar ki taraf; calls bahar ki taraf — yahi DIP hai (Day 8).</li>
<li>Yahan namespaces projects ki jagah hain; asli solution mein project references se compiler galat teer reject kar deta hai.</li>
</ul>`
      }
    },
    {
      id: "with-skips-constructor-validation",
      src: `var ok = new Percent(40);

try { _ = new Percent(140); }
catch (ArgumentOutOfRangeException) { Console.WriteLine("ctor rejects 140"); }

var bad = ok with { Value = 140 };
Console.WriteLine("with allows: " + bad.Value);

var safe = new SafePercent(40);
try { _ = safe with { Value = 140 }; }
catch (ArgumentOutOfRangeException) { Console.WriteLine("init rejects 140"); }

Console.WriteLine("equal by value: " + (ok == new Percent(40)));

record Percent
{
    public int Value { get; init; }

    public Percent(int value)
    {
        if (value is < 0 or > 100) throw new ArgumentOutOfRangeException(nameof(value));
        Value = value;
    }
}

record SafePercent
{
    private readonly int _value;

    public int Value
    {
        get => _value;
        init
        {
            if (value is < 0 or > 100) throw new ArgumentOutOfRangeException(nameof(value));
            _value = value;
        }
    }

    public SafePercent(int value) => Value = value;
}`,
      answer: `ctor rejects 140
with allows: 140
init rejects 140
equal by value: True`,
      explain: {
        en: `<ul>
<li>The constructor of <code>Percent</code> rejects 140. But <code>with</code> does not call that constructor: it copies the object and then runs the <code>init</code> setter, which has no check. So <code>ok with { Value = 140 }</code> gives a <b>broken</b> value object: 140.</li>
<li><code>SafePercent</code> puts the rule in the <code>init</code> accessor, which the constructor and <code>with</code> both use, so the invalid value is rejected in every path.</li>
<li>The last line shows value equality still works: two <code>Percent(40)</code> are equal.</li>
<li>Lesson: for a value object that must stay valid, validate where every path goes through (the init accessor), or use a plain class/struct with a private constructor and a factory. Test the <code>with</code> path too.</li>
</ul>`,
        hi: `<ul>
<li><code>Percent</code> का constructor 140 reject करता है। पर <code>with</code> वह constructor नहीं बुलाता: वह object copy करके <code>init</code> setter चलाता है, जिसमें कोई check नहीं। इसलिए <code>ok with { Value = 140 }</code> एक <b>टूटा हुआ</b> value object देता है: 140।</li>
<li><code>SafePercent</code> rule को <code>init</code> accessor में रखता है, जिसे constructor और <code>with</code> दोनों use करते हैं, इसलिए हर रास्ते पर अमान्य value reject होती है।</li>
<li>आख़िरी line दिखाती है कि value equality अब भी चलती है: दो <code>Percent(40)</code> बराबर हैं।</li>
<li>सबक: जिस value object को valid रहना है, उसे वहाँ validate करो जहाँ से हर रास्ता गुज़रे (init accessor), या private constructor और factory वाली plain class/struct use करो। <code>with</code> वाला रास्ता भी test करो।</li>
</ul>`,
        hg: `<ul>
<li><code>Percent</code> ka constructor 140 reject karta hai. Par <code>with</code> woh constructor nahi bulata: woh object copy karke <code>init</code> setter chalata hai, jismein koi check nahi. Isliye <code>ok with { Value = 140 }</code> ek <b>toota hua</b> value object deta hai: 140.</li>
<li><code>SafePercent</code> rule ko <code>init</code> accessor mein rakhta hai, jise constructor aur <code>with</code> dono use karte hain, isliye har raaste par amaanya value reject hoti hai.</li>
<li>Aakhri line dikhati hai ki value equality ab bhi chalti hai: do <code>Percent(40)</code> barabar hain.</li>
<li>Sabak: jis value object ko valid rehna hai, use wahan validate karo jahan se har raasta guzre (init accessor), ya private constructor aur factory wali plain class/struct use karo. <code>with</code> wala raasta bhi test karo.</li>
</ul>`
      }
    }
  ],
  revision: {
    en: [
      "Classic layers depend downward on data access, so business rules get tied to the database.",
      "Dependency rule: source-code dependencies point inward; inner layers own the interfaces (DIP) and outer layers implement them.",
      "A common layout is Domain, Application, Infrastructure and Web; the DbContext usually lives in Infrastructure behind a port.",
      "Clean Architecture for a small CRUD app is usually over-engineering; a simple layout is often enough.",
      "An entity is equal by Id; a value object is equal by its values and best immutable.",
      "A record gives value equality, but a List member inside it is still compared by reference.",
      "An aggregate root enforces invariants, marks one transaction boundary and references other aggregates by Id.",
      "Domain events are past-tense facts raised by aggregates; many teams dispatch them after saving.",
      "A bounded context is where one model and one language apply; it is a good candidate for a module.",
      "A modular monolith is a common first step before microservices; it is a trade-off, not a rule.",
      "Choose by team size, deployment independence, data ownership and operational skill (Conway's law).",
      "Record hard-to-reverse choices in an ADR: context, decision, consequences."
    ],
    meaning: {
      hi: [
        "Classic layers नीचे data access पर निर्भर हैं, इसलिए business rules database से बंध जाते हैं।",
        "Dependency rule: source-code dependencies अंदर की तरफ़; अंदर की layers interfaces की मालिक (DIP) और बाहर की layers उन्हें implement करती हैं।",
        "आम layout: Domain, Application, Infrastructure और Web; DbContext आम तौर पर Infrastructure में port के पीछे रहता है।",
        "छोटे CRUD app के लिए Clean Architecture आम तौर पर over-engineering है; सरल layout अक्सर काफ़ी है।",
        "Entity Id से बराबर होती है; value object अपनी values से बराबर और बेहतर है immutable।",
        "Record value equality देता है, पर उसके अंदर का List member अब भी reference से compare होता है।",
        "Aggregate root invariants लागू करता है, एक transaction सीमा बनाता है और दूसरे aggregates को Id से refer करता है।",
        "Domain events aggregates के उठाए भूतकाल के तथ्य हैं; कई teams उन्हें save के बाद dispatch करती हैं।",
        "Bounded context वह जगह है जहाँ एक model और एक भाषा लागू है; यह module का अच्छा उम्मीदवार है।",
        "Modular monolith microservices से पहले का आम पहला क़दम है; यह trade-off है, नियम नहीं।",
        "Team size, deployment independence, data ownership और operational skill से चुनो (Conway's law)।",
        "पलटने में कठिन चुनाव ADR में दर्ज करो: context, decision, consequences।"
      ],
      hg: [
        "Classic layers neeche data access par nirbhar hain, isliye business rules database se bandh jaate hain.",
        "Dependency rule: source-code dependencies andar ki taraf; andar ki layers interfaces ki maalik (DIP) aur bahar ki layers unhe implement karti hain.",
        "Aam layout: Domain, Application, Infrastructure aur Web; DbContext aam taur par Infrastructure mein port ke peeche rehta hai.",
        "Chhote CRUD app ke liye Clean Architecture aam taur par over-engineering hai; saral layout aksar kaafi hai.",
        "Entity Id se barabar hoti hai; value object apni values se barabar aur behtar hai immutable.",
        "Record value equality deta hai, par uske andar ka List member ab bhi reference se compare hota hai.",
        "Aggregate root invariants laagu karta hai, ek transaction seema banata hai aur doosre aggregates ko Id se refer karta hai.",
        "Domain events aggregates ke uthaye bhootkaal ke tathya hain; kai teams unhe save ke baad dispatch karti hain.",
        "Bounded context woh jagah hai jahan ek model aur ek bhasha laagu hai; yeh module ka achha ummeedwaar hai.",
        "Modular monolith microservices se pehle ka aam pehla kadam hai; yeh trade-off hai, niyam nahi.",
        "Team size, deployment independence, data ownership aur operational skill se chuno (Conway's law).",
        "Palatne mein kathin chunaav ADR mein darj karo: context, decision, consequences."
      ]
    }
  }
};
