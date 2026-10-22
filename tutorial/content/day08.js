// Day 8 — SOLID Principles. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 8,
  title: {
    en: "SOLID Principles",
    hi: "SOLID सिद्धांत (Principles)",
    hg: "SOLID Principles"
  },
  summary: {
    en: `<p>SOLID is five habits that keep object-oriented code easy to change. Interviewers love it because every Tech Lead has to explain it to a team and spot it (or its absence) in a pull request. You already follow most of it without the names — today we give each habit a name, a bad→good C# refactor, and a limit.</p>
<ul>
<li><b>S — Single Responsibility</b>: a class should have one reason to change.</li>
<li><b>O — Open/Closed</b>: add new behaviour by adding new code (a new class), not by editing tested code.</li>
<li><b>L — Liskov Substitution</b>: a child must work wherever its parent is expected, without surprises.</li>
<li><b>I — Interface Segregation</b>: many small, focused interfaces beat one fat one.</li>
<li><b>D — Dependency Inversion</b>: depend on abstractions, not on concrete classes. (<b>DIP ≠ DI ≠ IoC container</b> — a favourite trick question.)</li>
<li><b>TL angle</b>: SOLID is a set of <i>trade-offs</i>, not laws. An interface for every class and five layers for a CRUD screen is over-engineering (YAGNI).</li>
</ul>
<p>One line for the whole day: <b>SOLID makes change cheap — apply it where change is likely, not everywhere.</b></p>`,
    hi: `<p>SOLID पाँच आदतें हैं जो object-oriented code को बदलने में आसान रखती हैं। Interviewers इसे बहुत पूछते हैं क्योंकि हर Tech Lead को team को यह समझाना पड़ता है और pull request में इसे (या इसकी कमी को) पकड़ना पड़ता है। आप इनमें से ज़्यादातर बिना नाम जाने पहले से follow करते हो — आज हम हर आदत को नाम, bad→good C# refactor और उसकी limit देंगे।</p>
<ul>
<li><b>S — Single Responsibility</b>: class के बदलने की एक ही वजह होनी चाहिए।</li>
<li><b>O — Open/Closed</b>: नया behaviour नया code (नई class) जोड़कर लाओ, tested code को edit करके नहीं।</li>
<li><b>L — Liskov Substitution</b>: child वहाँ चलना चाहिए जहाँ parent expected है, बिना किसी surprise के।</li>
<li><b>I — Interface Segregation</b>: एक मोटे interface से कई छोटे, focused interfaces बेहतर हैं।</li>
<li><b>D — Dependency Inversion</b>: abstractions पर depend करो, concrete classes पर नहीं। (<b>DIP ≠ DI ≠ IoC container</b> — पसंदीदा trick question।)</li>
<li><b>TL angle</b>: SOLID <i>trade-offs</i> का set है, कानून नहीं। हर class के लिए interface और एक CRUD screen के लिए पाँच layers — यह over-engineering (YAGNI) है।</li>
</ul>
<p>पूरे दिन की एक line: <b>SOLID बदलाव को सस्ता बनाता है — वहाँ लगाओ जहाँ बदलाव की संभावना है, हर जगह नहीं।</b></p>`,
    hg: `<p>SOLID paanch aadatein hain jo object-oriented code ko badalne mein aasan rakhti hain. Interviewers ise bahut poochte hain kyunki har Tech Lead ko team ko yeh samjhana padta hai aur pull request mein ise (ya iski kami ko) pakadna padta hai. Aap inmein se zyadatar bina naam jaane pehle se follow karte ho — aaj hum har aadat ko naam, bad→good C# refactor aur uski limit denge.</p>
<ul>
<li><b>S — Single Responsibility</b>: class ke badalne ki ek hi wajah honi chahiye.</li>
<li><b>O — Open/Closed</b>: naya behaviour naya code (nayi class) jodkar lao, tested code ko edit karke nahi.</li>
<li><b>L — Liskov Substitution</b>: child wahan chalna chahiye jahan parent expected hai, bina kisi surprise ke.</li>
<li><b>I — Interface Segregation</b>: ek mote interface se kai chhote, focused interfaces behtar hain.</li>
<li><b>D — Dependency Inversion</b>: abstractions par depend karo, concrete classes par nahi. (<b>DIP ≠ DI ≠ IoC container</b> — pasandida trick question.)</li>
<li><b>TL angle</b>: SOLID <i>trade-offs</i> ka set hai, kanoon nahi. Har class ke liye interface aur ek CRUD screen ke liye paanch layers — yeh over-engineering (YAGNI) hai.</li>
</ul>
<p>Poore din ki ek line: <b>SOLID badlaav ko sasta banata hai — wahan lagao jahan badlaav ki sambhavna hai, har jagah nahi.</b></p>`
  },
  sections: [
    {
      id: "solid-overview",
      depth: "short",
      title: {
        en: "SOLID in one picture (and why it exists)",
        hi: "SOLID एक नज़र में (और यह क्यों है)",
        hg: "SOLID ek nazar mein (aur yeh kyun hai)"
      },
      body: {
        en: `<p><b>Analogy — a restaurant kitchen:</b> each cook has one job (chopping, tandoor, billing) — <b>S</b>. To add a new dish you add a new recipe card, you do not rebuild the kitchen — <b>O</b>. If the tandoor cook is on leave, any trained cook can take the station without the dishes changing — <b>L</b>. The waiter gets a small order slip, not the whole inventory register — <b>I</b>. The kitchen depends on "a gas connection" (a standard), not on one particular cylinder brand — <b>D</b>.</p>
<ul>
<li><b>S</b>ingle Responsibility — one class, one <i>reason to change</i> (one actor/stakeholder who asks for changes).</li>
<li><b>O</b>pen/Closed — open for extension, closed for modification: new case = new class, not another <code>if</code>/<code>switch</code> branch in tested code.</li>
<li><b>L</b>iskov Substitution — anywhere a base type is used, a derived type must work without the caller knowing or checking.</li>
<li><b>I</b>nterface Segregation — clients should not be forced to depend on methods they do not use.</li>
<li><b>D</b>ependency Inversion — high-level code and low-level code both depend on an abstraction; the abstraction is owned by the high-level code.</li>
<li><b>Why they exist:</b> they reduce <b>coupling</b> (how much one class knows about another) and raise <b>cohesion</b> (how well the parts of a class belong together). Both make code easier to test and change. This is Day 1's "composition over inheritance" and interfaces, turned into a checklist.</li>
</ul>
<p><b>When to use / when not:</b> use SOLID as a <i>review lens</i> when code is hard to change or hard to test. Do not apply it pre-emptively to code that is small, stable and unlikely to change — a 40-line console tool does not need five interfaces. Pattern names (Strategy, Decorator, Factory) that implement these ideas come in Days 9–11.</p>`,
        hi: `<p><b>Analogy — restaurant की kitchen:</b> हर cook का एक काम है (चॉपिंग, तंदूर, billing) — <b>S</b>। नई dish जोड़नी हो तो नया recipe card जोड़ते हैं, kitchen दोबारा नहीं बनाते — <b>O</b>। तंदूर वाला छुट्टी पर हो तो कोई भी trained cook वह station संभाल लेता है और dishes नहीं बदलतीं — <b>L</b>। Waiter को छोटी order slip मिलती है, पूरा inventory register नहीं — <b>I</b>। Kitchen "gas connection" (एक standard) पर depend करती है, किसी एक cylinder brand पर नहीं — <b>D</b>।</p>
<ul>
<li><b>S</b>ingle Responsibility — एक class, बदलने की एक <i>वजह</i> (बदलाव माँगने वाला एक actor/stakeholder)।</li>
<li><b>O</b>pen/Closed — extension के लिए खुला, modification के लिए बंद: नया case = नई class, tested code में एक और <code>if</code>/<code>switch</code> branch नहीं।</li>
<li><b>L</b>iskov Substitution — जहाँ base type use हो, वहाँ derived type बिना caller को पता चले या check किए चलना चाहिए।</li>
<li><b>I</b>nterface Segregation — clients को ऐसे methods पर depend करने को मजबूर न करो जो वो use नहीं करते।</li>
<li><b>D</b>ependency Inversion — high-level code और low-level code दोनों एक abstraction पर depend करें; abstraction high-level code की अपनी होती है।</li>
<li><b>ये क्यों हैं:</b> ये <b>coupling</b> (एक class दूसरी के बारे में कितना जानती है) घटाते हैं और <b>cohesion</b> (class के हिस्से कितने आपस में जुड़े हैं) बढ़ाते हैं। दोनों से code test और change करना आसान होता है। यह Day 1 का "composition over inheritance" और interfaces है, बस checklist बनाकर।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> SOLID को <i>review lens</i> की तरह use करो जब code बदलना या test करना मुश्किल हो। जो code छोटा, stable है और शायद नहीं बदलेगा, उस पर पहले से मत थोपो — 40 line के console tool को पाँच interfaces नहीं चाहिए। इन ideas को लागू करने वाले pattern names (Strategy, Decorator, Factory) Days 9–11 में आएँगे।</p>`,
        hg: `<p><b>Analogy — restaurant ki kitchen:</b> har cook ka ek kaam hai (chopping, tandoor, billing) — <b>S</b>. Nayi dish jodni ho to naya recipe card jodte hain, kitchen dobara nahi banate — <b>O</b>. Tandoor wala chhutti par ho to koi bhi trained cook woh station sambhal leta hai aur dishes nahi badalti — <b>L</b>. Waiter ko chhoti order slip milti hai, poora inventory register nahi — <b>I</b>. Kitchen "gas connection" (ek standard) par depend karti hai, kisi ek cylinder brand par nahi — <b>D</b>.</p>
<ul>
<li><b>S</b>ingle Responsibility — ek class, badalne ki ek <i>wajah</i> (badlaav maangne wala ek actor/stakeholder).</li>
<li><b>O</b>pen/Closed — extension ke liye khula, modification ke liye band: naya case = nayi class, tested code mein ek aur <code>if</code>/<code>switch</code> branch nahi.</li>
<li><b>L</b>iskov Substitution — jahan base type use ho, wahan derived type bina caller ko pata chale ya check kiye chalna chahiye.</li>
<li><b>I</b>nterface Segregation — clients ko aise methods par depend karne par majboor na karo jo woh use nahi karte.</li>
<li><b>D</b>ependency Inversion — high-level code aur low-level code dono ek abstraction par depend karein; abstraction high-level code ki apni hoti hai.</li>
<li><b>Yeh kyun hain:</b> yeh <b>coupling</b> (ek class doosri ke baare mein kitna jaanti hai) ghatate hain aur <b>cohesion</b> (class ke hisse kitne aapas mein jude hain) badhate hain. Dono se code test aur change karna aasan hota hai. Yeh Day 1 ka "composition over inheritance" aur interfaces hi hai, bas checklist bana kar.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> SOLID ko <i>review lens</i> ki tarah use karo jab code badalna ya test karna mushkil ho. Jo code chhota, stable hai aur shayad nahi badlega, us par pehle se mat thopo — 40 line ke console tool ko paanch interfaces nahi chahiye. In ideas ko lagu karne wale pattern names (Strategy, Decorator, Factory) Days 9–11 mein aayenge.</p>`
      }
    },
    {
      id: "dip-di-ioc",
      depth: "short",
      title: {
        en: "DIP vs DI vs IoC container — three different things",
        hi: "DIP vs DI vs IoC container — तीन अलग चीज़ें",
        hg: "DIP vs DI vs IoC container — teen alag cheezein"
      },
      body: {
        en: `<p><b>Analogy — phone charger:</b> your phone depends on the <b>USB-C standard</b>, not on one charger brand (that is the <b>principle</b> — DIP). When you plug in the charger that came in the box, someone <i>handed</i> you the dependency instead of you building it (that is the <b>technique</b> — DI). A smart power strip that decides which charger goes into which socket for the whole house is the <b>tool</b> — the IoC container.</p>
<ul>
<li><b>DIP (Dependency Inversion Principle)</b> — a <i>design rule</i>: high-level policy (<code>OrderService</code>) must not depend on low-level detail (<code>SmtpClient</code>); both depend on an abstraction (<code>IEmailSender</code>). "Inversion" = the source-code dependency points toward the abstraction, which belongs to the high-level side.</li>
<li><b>DI (Dependency Injection)</b> — a <i>technique</i>: a class does not <code>new</code> its dependencies; they are passed in, usually through the constructor. You can do DI by hand with no framework.</li>
<li><b>IoC (Inversion of Control)</b> — the wider idea: the framework calls your code, not the other way round. An <b>IoC container</b> (a DI container) is a <i>tool</i> that builds the object graph for you: in .NET, <code>Microsoft.Extensions.DependencyInjection</code>.</li>
<li>You can follow DIP without a container, and you can use a container while breaking DIP (injecting concrete classes everywhere, or injecting the container itself).</li>
</ul>
<p><b>When to use / when not:</b> introduce an abstraction where you have a real seam — an external system (email, payment, clock, file system), something you must fake in tests, or something with genuinely several implementations. Do not wrap every class in an interface "just in case": a pure helper such as a string formatter needs no interface and no registration.</p>`,
        hi: `<p><b>Analogy — phone charger:</b> आपका phone <b>USB-C standard</b> पर depend करता है, किसी एक charger brand पर नहीं (यह <b>principle</b> है — DIP)। जब आप box वाला charger लगाते हो, तो dependency किसी ने आपको <i>थमा</i> दी, आपने ख़ुद नहीं बनाई (यह <b>technique</b> है — DI)। पूरे घर में कौन-सा charger किस socket में जाएगा यह तय करने वाली smart power strip <b>tool</b> है — IoC container।</p>
<ul>
<li><b>DIP (Dependency Inversion Principle)</b> — एक <i>design rule</i>: high-level policy (<code>OrderService</code>) low-level detail (<code>SmtpClient</code>) पर depend न करे; दोनों एक abstraction (<code>IEmailSender</code>) पर depend करें। "Inversion" = source-code dependency abstraction की तरफ़ जाती है, जो high-level side की होती है।</li>
<li><b>DI (Dependency Injection)</b> — एक <i>technique</i>: class अपनी dependencies को <code>new</code> नहीं करती; वो बाहर से दी जाती हैं, अक्सर constructor से। DI बिना किसी framework के हाथ से भी कर सकते हो।</li>
<li><b>IoC (Inversion of Control)</b> — बड़ा idea: framework आपके code को call करता है, आप framework को नहीं। <b>IoC container</b> (DI container) एक <i>tool</i> है जो object graph आपके लिए बनाता है: .NET में <code>Microsoft.Extensions.DependencyInjection</code>।</li>
<li>Container के बिना भी DIP follow कर सकते हो, और container use करते हुए भी DIP तोड़ सकते हो (हर जगह concrete classes inject करना, या container को ही inject करना)।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> abstraction वहाँ लाओ जहाँ असली seam है — बाहरी system (email, payment, clock, file system), जिसे tests में fake करना हो, या जिसकी सच में कई implementations हों। हर class पर "just in case" interface मत चढ़ाओ: string formatter जैसे pure helper को न interface चाहिए, न registration।</p>`,
        hg: `<p><b>Analogy — phone charger:</b> aapka phone <b>USB-C standard</b> par depend karta hai, kisi ek charger brand par nahi (yeh <b>principle</b> hai — DIP). Jab aap box wala charger lagate ho, to dependency kisi ne aapko <i>thama</i> di, aapne khud nahi banayi (yeh <b>technique</b> hai — DI). Poore ghar mein kaun-sa charger kis socket mein jayega yeh tay karne wali smart power strip <b>tool</b> hai — IoC container.</p>
<ul>
<li><b>DIP (Dependency Inversion Principle)</b> — ek <i>design rule</i>: high-level policy (<code>OrderService</code>) low-level detail (<code>SmtpClient</code>) par depend na kare; dono ek abstraction (<code>IEmailSender</code>) par depend karein. "Inversion" = source-code dependency abstraction ki taraf jaati hai, jo high-level side ki hoti hai.</li>
<li><b>DI (Dependency Injection)</b> — ek <i>technique</i>: class apni dependencies ko <code>new</code> nahi karti; woh bahar se di jaati hain, aksar constructor se. DI bina kisi framework ke haath se bhi kar sakte ho.</li>
<li><b>IoC (Inversion of Control)</b> — bada idea: framework aapke code ko call karta hai, aap framework ko nahi. <b>IoC container</b> (DI container) ek <i>tool</i> hai jo object graph aapke liye banata hai: .NET mein <code>Microsoft.Extensions.DependencyInjection</code>.</li>
<li>Container ke bina bhi DIP follow kar sakte ho, aur container use karte hue bhi DIP tod sakte ho (har jagah concrete classes inject karna, ya container ko hi inject karna).</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> abstraction wahan lao jahan asli seam hai — bahari system (email, payment, clock, file system), jise tests mein fake karna ho, ya jiski sach mein kai implementations hon. Har class par "just in case" interface mat chadhao: string formatter jaise pure helper ko na interface chahiye, na registration.</p>`
      }
    },
    {
      id: "srp-in-code",
      depth: "detailed",
      title: {
        en: "S — Single Responsibility: bad → good",
        hi: "S — Single Responsibility: bad से good तक",
        hg: "S — Single Responsibility: bad se good tak"
      },
      body: {
        en: `<p><b>Analogy — kirana shop:</b> if the owner also cooks, drives the delivery van and files GST returns, a problem in any one job stops the whole shop. A good shop has a counter person, a delivery boy and an accountant — each changes for a different reason.</p>
<p><b>Bad:</b> <code>OrderService.Place</code> validates the order, writes it to a file <i>and</i> builds an email. It has three reasons to change: business rules (product team), storage (DBA/infra), and message text (marketing). A change to the email wording means editing and re-testing the class that holds your business rules.</p>
<p><b>Good:</b> split by reason to change: <code>OrderValidator</code>, <code>OrderStore</code>, <code>OrderNotifier</code>; <code>OrderService</code> only coordinates them. Both versions compile and behave the same; the second can be changed and tested in pieces.</p>
<ul>
<li>"Responsibility" means a <b>reason to change</b>, not "one method". A class with five methods that all serve the same stakeholder is fine.</li>
<li>Symptoms of a violation: a class name with "And"/"Manager"/"Helper"; 800 lines; a constructor that needs ten dependencies; tests that need many fakes just to start.</li>
<li>Next step in the course: the good version still creates its parts with <code>new</code> — fixing that is <b>D</b> (see the DIP section).</li>
</ul>
<p><b>When to use / when not:</b> split when two parts change for different reasons or at different speeds, or when one part needs its own tests. Do not split a 15-line class into five 3-line classes — you trade one clear file for five files to jump between (a "ravioli code" smell). Wait for the second reason to change before splitting.</p>`,
        hi: `<p><b>Analogy — kirana shop:</b> अगर मालिक ही खाना बनाए, delivery van चलाए और GST returns भी भरे, तो किसी एक काम की दिक़्क़त पूरी दुकान रोक देती है। अच्छी दुकान में counter वाला, delivery boy और accountant अलग होते हैं — हर एक अलग वजह से बदलता है।</p>
<p><b>Bad:</b> <code>OrderService.Place</code> order validate करता है, file में लिखता है <i>और</i> email बनाता है। इसके बदलने की तीन वजहें हैं: business rules (product team), storage (DBA/infra), और message text (marketing)। Email के शब्द बदलने के लिए उस class को edit और दोबारा test करना पड़ता है जिसमें आपके business rules हैं।</p>
<p><b>Good:</b> बदलने की वजह के हिसाब से बाँटो: <code>OrderValidator</code>, <code>OrderStore</code>, <code>OrderNotifier</code>; <code>OrderService</code> सिर्फ़ इन्हें coordinate करता है। दोनों versions compile होते हैं और एक जैसा behave करते हैं; दूसरे को टुकड़ों में बदला और test किया जा सकता है।</p>
<ul>
<li>"Responsibility" का मतलब <b>बदलने की वजह</b> है, "एक method" नहीं। पाँच methods वाली class जो सब एक ही stakeholder के लिए हैं, ठीक है।</li>
<li>Violation के लक्षण: class के नाम में "And"/"Manager"/"Helper"; 800 lines; ऐसा constructor जिसे दस dependencies चाहिए; ऐसे tests जिन्हें शुरू होने के लिए ही कई fakes चाहिए।</li>
<li>Course में अगला step: good version अब भी अपने parts <code>new</code> से बनाता है — इसे ठीक करना <b>D</b> है (DIP section देखो)।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> तब बाँटो जब दो हिस्से अलग वजह से या अलग रफ़्तार से बदलते हों, या किसी हिस्से को अपने tests चाहिए। 15 line की class को पाँच 3-line classes में मत तोड़ो — एक साफ़ file की जगह पाँच files के बीच कूदना पड़ेगा ("ravioli code" smell)। बँटवारे से पहले दूसरी वजह आने का इंतज़ार करो।</p>`,
        hg: `<p><b>Analogy — kirana shop:</b> agar malik hi khana banaye, delivery van chalaye aur GST returns bhi bhare, to kisi ek kaam ki dikkat poori dukaan rok deti hai. Achchi dukaan mein counter wala, delivery boy aur accountant alag hote hain — har ek alag wajah se badalta hai.</p>
<p><b>Bad:</b> <code>OrderService.Place</code> order validate karta hai, file mein likhta hai <i>aur</i> email banata hai. Iske badalne ki teen wajahein hain: business rules (product team), storage (DBA/infra), aur message text (marketing). Email ke shabd badalne ke liye us class ko edit aur dobara test karna padta hai jismein aapke business rules hain.</p>
<p><b>Good:</b> badalne ki wajah ke hisaab se baanto: <code>OrderValidator</code>, <code>OrderStore</code>, <code>OrderNotifier</code>; <code>OrderService</code> sirf inhe coordinate karta hai. Dono versions compile hote hain aur ek jaisa behave karte hain; doosre ko tukdon mein badla aur test kiya ja sakta hai.</p>
<ul>
<li>"Responsibility" ka matlab <b>badalne ki wajah</b> hai, "ek method" nahi. Paanch methods wali class jo sab ek hi stakeholder ke liye hain, theek hai.</li>
<li>Violation ke lakshan: class ke naam mein "And"/"Manager"/"Helper"; 800 lines; aisa constructor jise das dependencies chahiye; aise tests jinhe shuru hone ke liye hi kai fakes chahiye.</li>
<li>Course mein agla step: good version ab bhi apne parts <code>new</code> se banata hai — ise theek karna <b>D</b> hai (DIP section dekho).</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> tab baanto jab do hisse alag wajah se ya alag raftaar se badalte hon, ya kisi hisse ko apne tests chahiye. 15 line ki class ko paanch 3-line classes mein mat todo — ek saaf file ki jagah paanch files ke beech koodna padega ("ravioli code" smell). Bantware se pehle doosri wajah aane ka intezaar karo.</p>`
      },
      code: [
        {
          caption: {
            en: "Bad: one class, three reasons to change (compiles)",
            hi: "Bad: एक class, बदलने की तीन वजहें (compile होता है)",
            hg: "Bad: ek class, badalne ki teen wajahein (compile hota hai)"
          },
          src: `public record Order(int Id, string CustomerEmail, decimal Total);

public class OrderService
{
    public void Place(Order order)
    {
        // 1) business rule
        if (order.Total <= 0)
            throw new ArgumentException("Total must be positive");

        // 2) storage detail
        File.AppendAllText("orders.txt", $"{order.Id},{order.Total}{Environment.NewLine}");

        // 3) message wording / delivery
        Console.WriteLine($"Email to {order.CustomerEmail}: order {order.Id} placed");
    }
}`,
          check: "compile"
        },
        {
          caption: {
            en: "Good: split by reason to change; OrderService only coordinates (compiles)",
            hi: "Good: बदलने की वजह से बाँटा; OrderService सिर्फ़ coordinate करता है (compile होता है)",
            hg: "Good: badalne ki wajah se baanta; OrderService sirf coordinate karta hai (compile hota hai)"
          },
          src: `public record Order(int Id, string CustomerEmail, decimal Total);

public class OrderValidator
{
    public void Validate(Order order)
    {
        if (order.Total <= 0)
            throw new ArgumentException("Total must be positive");
    }
}

public class OrderStore
{
    public void Save(Order order) =>
        File.AppendAllText("orders.txt", $"{order.Id},{order.Total}{Environment.NewLine}");
}

public class OrderNotifier
{
    public void NotifyPlaced(Order order) =>
        Console.WriteLine($"Email to {order.CustomerEmail}: order {order.Id} placed");
}

public class OrderService
{
    private readonly OrderValidator _validator = new();
    private readonly OrderStore _store = new();
    private readonly OrderNotifier _notifier = new();

    public void Place(Order order)
    {
        _validator.Validate(order);
        _store.Save(order);
        _notifier.NotifyPlaced(order);
    }
}`,
          check: "compile"
        }
      ]
    },
    {
      id: "ocp-in-code",
      depth: "detailed",
      title: {
        en: "O — Open/Closed: strategy instead of switch",
        hi: "O — Open/Closed: switch की जगह strategy",
        hg: "O — Open/Closed: switch ki jagah strategy"
      },
      body: {
        en: `<p><b>Analogy — mobile recharge plans:</b> when the telecom company launches a new plan it adds a new plan card to its catalogue. It does not re-write the billing software for every plan. The billing engine is <i>closed</i> for modification, the catalogue is <i>open</i> for extension.</p>
<p><b>Bad:</b> <code>DiscountCalculator.Calculate</code> has a <code>switch</code> on a customer-type string. A new customer type means editing this method again (and re-testing every old case). The same switch tends to be copied into invoices, reports and emails.</p>
<p><b>Good:</b> an <code>IDiscountPolicy</code> abstraction; <code>RegularDiscount</code> and <code>PremiumDiscount</code> implement it. A festival-sale discount is just <b>one more class</b> — the calculator never changes. This is plain <b>polymorphism</b> (Day 1) — the pattern name is <b>Strategy</b> (Day 9–11 will use it again).</p>
<ul>
<li>OCP is achieved mainly with <b>interfaces + polymorphism + composition</b>; inheritance is the weaker tool.</li>
<li>You cannot be closed against every change. Pick the axis that really varies (discount rules, payment gateways, file formats) after you have seen it vary once or twice.</li>
<li>Registering all policies in DI and injecting <code>IEnumerable&lt;IDiscountPolicy&gt;</code> lets you add a class without touching any existing file except the registration.</li>
</ul>
<p><b>When to use / when not:</b> use it when the same <code>switch</code>/<code>if-else</code> on a "type" keeps growing or is repeated in several places. Do not replace a small, stable switch (days of the week, a closed enum that will never grow) with a class hierarchy — a 3-case switch is clearer than three classes plus a factory.</p>`,
        hi: `<p><b>Analogy — mobile recharge plans:</b> telecom company नया plan लाती है तो catalogue में नया plan card जोड़ती है। हर plan के लिए billing software दोबारा नहीं लिखती। Billing engine modification के लिए <i>बंद</i> है, catalogue extension के लिए <i>खुला</i>।</p>
<p><b>Bad:</b> <code>DiscountCalculator.Calculate</code> में customer-type string पर <code>switch</code> है। नया customer type आया तो यह method फिर edit करनी पड़ेगी (और हर पुराना case दोबारा test)। यही switch अक्सर invoices, reports और emails में copy हो जाता है।</p>
<p><b>Good:</b> एक <code>IDiscountPolicy</code> abstraction; <code>RegularDiscount</code> और <code>PremiumDiscount</code> उसे implement करते हैं। Festival-sale discount बस <b>एक और class</b> है — calculator कभी नहीं बदलता। यह सीधा <b>polymorphism</b> (Day 1) है — pattern का नाम <b>Strategy</b> है (Day 9–11 में फिर आएगा)।</p>
<ul>
<li>OCP मुख्य रूप से <b>interfaces + polymorphism + composition</b> से मिलता है; inheritance कमज़ोर tool है।</li>
<li>हर बदलाव के ख़िलाफ़ closed नहीं हो सकते। वो axis चुनो जो सच में बदलती है (discount rules, payment gateways, file formats) — उसे एक-दो बार बदलते देखने के बाद।</li>
<li>सारी policies DI में register करके <code>IEnumerable&lt;IDiscountPolicy&gt;</code> inject करो; नई class जोड़ने पर registration के अलावा कोई मौजूदा file नहीं छूनी पड़ती।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> तब use करो जब "type" पर वही <code>switch</code>/<code>if-else</code> बढ़ता जा रहा हो या कई जगह दोहराया गया हो। छोटे, stable switch (हफ़्ते के दिन, ऐसा closed enum जो कभी नहीं बढ़ेगा) को class hierarchy से मत बदलो — 3-case switch तीन classes और एक factory से ज़्यादा साफ़ है।</p>`,
        hg: `<p><b>Analogy — mobile recharge plans:</b> telecom company naya plan laati hai to catalogue mein naya plan card jodti hai. Har plan ke liye billing software dobara nahi likhti. Billing engine modification ke liye <i>band</i> hai, catalogue extension ke liye <i>khula</i>.</p>
<p><b>Bad:</b> <code>DiscountCalculator.Calculate</code> mein customer-type string par <code>switch</code> hai. Naya customer type aaya to yeh method phir edit karni padegi (aur har purana case dobara test). Yahi switch aksar invoices, reports aur emails mein copy ho jaata hai.</p>
<p><b>Good:</b> ek <code>IDiscountPolicy</code> abstraction; <code>RegularDiscount</code> aur <code>PremiumDiscount</code> use implement karte hain. Festival-sale discount bas <b>ek aur class</b> hai — calculator kabhi nahi badalta. Yeh seedha <b>polymorphism</b> (Day 1) hai — pattern ka naam <b>Strategy</b> hai (Day 9–11 mein phir aayega).</p>
<ul>
<li>OCP mukhya roop se <b>interfaces + polymorphism + composition</b> se milta hai; inheritance kamzor tool hai.</li>
<li>Har badlaav ke khilaaf closed nahi ho sakte. Woh axis chuno jo sach mein badalti hai (discount rules, payment gateways, file formats) — use ek-do baar badalte dekhne ke baad.</li>
<li>Saari policies DI mein register karke <code>IEnumerable&lt;IDiscountPolicy&gt;</code> inject karo; nayi class jodne par registration ke alawa koi maujooda file nahi chhuni padti.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> tab use karo jab "type" par wahi <code>switch</code>/<code>if-else</code> badhta ja raha ho ya kai jagah dohraya gaya ho. Chhote, stable switch (hafte ke din, aisa closed enum jo kabhi nahi badhega) ko class hierarchy se mat badlo — 3-case switch teen classes aur ek factory se zyada saaf hai.</p>`
      },
      code: [
        {
          caption: {
            en: "Bad: every new customer type edits this switch (compiles)",
            hi: "Bad: हर नया customer type इस switch को edit करवाता है (compile होता है)",
            hg: "Bad: har naya customer type is switch ko edit karwata hai (compile hota hai)"
          },
          src: `public class DiscountCalculator
{
    public decimal Calculate(string customerType, decimal amount)
    {
        switch (customerType)
        {
            case "regular": return amount * 0.05m;
            case "premium": return amount * 0.10m;
            default: return 0m;   // new type? edit this method again
        }
    }
}`,
          check: "compile"
        },
        {
          caption: {
            en: "Good: add a class, not an if-branch; the calculator never changes (runs)",
            hi: "Good: if-branch नहीं, class जोड़ो; calculator कभी नहीं बदलता (run होता है)",
            hg: "Good: if-branch nahi, class jodo; calculator kabhi nahi badalta (run hota hai)"
          },
          src: `var policies = new List<IDiscountPolicy>
{
    new RegularDiscount(),
    new PremiumDiscount(),
    new FestivalDiscount()   // the only new code for a new rule
};

var calculator = new DiscountCalculator();
foreach (var p in policies)
    Console.WriteLine($"{p.GetType().Name}: {calculator.Calculate(p, 1000m)}");

public interface IDiscountPolicy
{
    decimal Discount(decimal amount);
}

public class RegularDiscount : IDiscountPolicy
{
    public decimal Discount(decimal amount) => amount * 0.05m;
}

public class PremiumDiscount : IDiscountPolicy
{
    public decimal Discount(decimal amount) => amount * 0.10m;
}

public class FestivalDiscount : IDiscountPolicy
{
    public decimal Discount(decimal amount) => amount * 0.20m;
}

public class DiscountCalculator
{
    public decimal Calculate(IDiscountPolicy policy, decimal amount) => policy.Discount(amount);
}`,
          check: "run",
          expected: "RegularDiscount: 50.00\nPremiumDiscount: 100.00\nFestivalDiscount: 200.00"
        }
      ]
    },
    {
      id: "lsp-in-code",
      depth: "detailed",
      title: {
        en: "L — Liskov Substitution: Rectangle/Square and .NET examples",
        hi: "L — Liskov Substitution: Rectangle/Square और .NET examples",
        hg: "L — Liskov Substitution: Rectangle/Square aur .NET examples"
      },
      body: {
        en: `<p><b>Analogy — substitute driver:</b> your regular cab driver is sick and the company sends a replacement. You expect the replacement to drive you to the airport, follow the same route and not demand a different fare. If the substitute "can only drive in reverse", he is not a real substitute, however much he looks like a driver.</p>
<p><b>The classic:</b> a <code>Square</code> <i>is-a</i> <code>Rectangle</code> in geometry. In code, a <code>Rectangle</code> promises that setting <code>Width</code> does not change <code>Height</code>. A <code>Square</code> that keeps both sides equal breaks that promise: code written for <code>Rectangle</code> (<code>Width=5; Height=4;</code> expects area 20) silently gets 16. Compiles fine, wrong at runtime — that is what makes LSP hard to spot.</p>
<p><b>Fix:</b> do not force the inheritance. Model what they share (<code>IShape.Area</code>) and let each type keep its own rules; immutable shapes also remove the problem.</p>
<ul>
<li><b>Rule of thumb:</b> a child may accept <i>more</i> and promise <i>no less</i> than its parent (weaker preconditions, stronger or equal postconditions), and must not throw new kinds of exceptions the parent never did.</li>
<li><b>.NET example 1:</b> <code>ReadOnlyCollection&lt;T&gt;</code> implements <code>ICollection&lt;T&gt;</code>, but <code>Add</code> throws <code>NotSupportedException</code> (the contract allows it via <code>IsReadOnly</code>, and the docs say so). It is a known, documented compromise; an <code>IReadOnlyList&lt;T&gt;</code> parameter is the cleaner way to say "I only read".</li>
<li><b>.NET example 2:</b> <code>Stream</code> has <code>CanRead</code>/<code>CanWrite</code>/<code>CanSeek</code> flags because not every stream can do everything; callers must check them. That is LSP bending, made explicit with capability flags.</li>
<li><b>Red flags in code review:</b> an override that throws <code>NotImplementedException</code>/<code>NotSupportedException</code>; <code>if (x is Square)</code> type checks in client code; an override that silently does nothing.</li>
</ul>
<p><b>When to use / when not:</b> check LSP every time you write <code>: BaseClass</code> or implement an interface — "would every caller of the parent still be correct?" If not, use composition or a smaller interface. Do not turn this into a fear of inheritance: a real, stable is-a with a respected contract (<code>Exception</code> subclasses, <code>ControllerBase</code>) is fine.</p>`,
        hi: `<p><b>Analogy — substitute driver:</b> आपका रोज़ वाला cab driver बीमार है और company replacement भेजती है। आप उम्मीद करते हो कि वो airport तक छोड़ेगा, वही route लेगा और अलग किराया नहीं माँगेगा। अगर substitute "सिर्फ़ reverse में चला सकता है", तो वो driver जैसा दिखने के बावजूद असली substitute नहीं है।</p>
<p><b>Classic example:</b> geometry में <code>Square</code> एक <code>Rectangle</code> <i>है</i>। Code में <code>Rectangle</code> यह promise करता है कि <code>Width</code> set करने से <code>Height</code> नहीं बदलती। जो <code>Square</code> दोनों sides बराबर रखता है, वो यह promise तोड़ता है: <code>Rectangle</code> के लिए लिखा code (<code>Width=5; Height=4;</code>, area 20 की उम्मीद) चुपचाप 16 पाता है। Compile ठीक, runtime पर ग़लत — इसी वजह से LSP पकड़ना मुश्किल है।</p>
<p><b>Fix:</b> inheritance ज़बरदस्ती मत करो। जो साझा है (<code>IShape.Area</code>) उसे model करो और हर type को अपने rules रखने दो; immutable shapes भी यह समस्या हटा देते हैं।</p>
<ul>
<li><b>Rule of thumb:</b> child parent से <i>ज़्यादा</i> accept कर सकता है और <i>कम नहीं</i> promise कर सकता है (कमज़ोर preconditions, मज़बूत या बराबर postconditions), और ऐसी नई तरह की exceptions नहीं फेंक सकता जो parent ने कभी नहीं फेंकीं।</li>
<li><b>.NET example 1:</b> <code>ReadOnlyCollection&lt;T&gt;</code>, <code>ICollection&lt;T&gt;</code> implement करता है, पर <code>Add</code> <code>NotSupportedException</code> फेंकता है (contract <code>IsReadOnly</code> से इसकी इजाज़त देता है और docs में लिखा है)। यह जाना-माना, documented compromise है; "मैं सिर्फ़ पढ़ता हूँ" कहने का साफ़ तरीक़ा <code>IReadOnlyList&lt;T&gt;</code> parameter है।</li>
<li><b>.NET example 2:</b> <code>Stream</code> में <code>CanRead</code>/<code>CanWrite</code>/<code>CanSeek</code> flags हैं क्योंकि हर stream सब कुछ नहीं कर सकता; callers को इन्हें check करना पड़ता है। यह LSP का झुकना है, capability flags से साफ़ किया हुआ।</li>
<li><b>Code review के red flags:</b> <code>NotImplementedException</code>/<code>NotSupportedException</code> फेंकने वाला override; client code में <code>if (x is Square)</code> type checks; चुपचाप कुछ न करने वाला override।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> जब भी <code>: BaseClass</code> लिखो या interface implement करो, LSP check करो — "क्या parent के हर caller का code अब भी सही रहेगा?" नहीं, तो composition या छोटा interface use करो। इसे inheritance के डर में मत बदलो: सच्चा, stable is-a जिसका contract निभाया जाता है (<code>Exception</code> subclasses, <code>ControllerBase</code>) ठीक है।</p>`,
        hg: `<p><b>Analogy — substitute driver:</b> aapka roz wala cab driver beemar hai aur company replacement bhejti hai. Aap ummeed karte ho ki woh airport tak chhodega, wahi route lega aur alag kiraya nahi maangega. Agar substitute "sirf reverse mein chala sakta hai", to woh driver jaisa dikhne ke bawajood asli substitute nahi hai.</p>
<p><b>Classic example:</b> geometry mein <code>Square</code> ek <code>Rectangle</code> <i>hai</i>. Code mein <code>Rectangle</code> yeh promise karta hai ki <code>Width</code> set karne se <code>Height</code> nahi badalti. Jo <code>Square</code> dono sides barabar rakhta hai, woh yeh promise todta hai: <code>Rectangle</code> ke liye likha code (<code>Width=5; Height=4;</code>, area 20 ki ummeed) chupchaap 16 paata hai. Compile theek, runtime par galat — isi wajah se LSP pakadna mushkil hai.</p>
<p><b>Fix:</b> inheritance zabardasti mat karo. Jo saajha hai (<code>IShape.Area</code>) use model karo aur har type ko apne rules rakhne do; immutable shapes bhi yeh samasya hata dete hain.</p>
<ul>
<li><b>Rule of thumb:</b> child parent se <i>zyada</i> accept kar sakta hai aur <i>kam nahi</i> promise kar sakta hai (kamzor preconditions, mazboot ya barabar postconditions), aur aisi nayi tarah ki exceptions nahi phenk sakta jo parent ne kabhi nahi phenki.</li>
<li><b>.NET example 1:</b> <code>ReadOnlyCollection&lt;T&gt;</code>, <code>ICollection&lt;T&gt;</code> implement karta hai, par <code>Add</code> <code>NotSupportedException</code> phenkta hai (contract <code>IsReadOnly</code> se iski ijaazat deta hai aur docs mein likha hai). Yeh jaana-maana, documented compromise hai; "main sirf padhta hoon" kehne ka saaf tareeka <code>IReadOnlyList&lt;T&gt;</code> parameter hai.</li>
<li><b>.NET example 2:</b> <code>Stream</code> mein <code>CanRead</code>/<code>CanWrite</code>/<code>CanSeek</code> flags hain kyunki har stream sab kuch nahi kar sakta; callers ko inhe check karna padta hai. Yeh LSP ka jhukna hai, capability flags se saaf kiya hua.</li>
<li><b>Code review ke red flags:</b> <code>NotImplementedException</code>/<code>NotSupportedException</code> phenkne wala override; client code mein <code>if (x is Square)</code> type checks; chupchaap kuch na karne wala override.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> jab bhi <code>: BaseClass</code> likho ya interface implement karo, LSP check karo — "kya parent ke har caller ka code ab bhi sahi rahega?" Nahi, to composition ya chhota interface use karo. Ise inheritance ke darr mein mat badlo: sacha, stable is-a jiska contract nibhaya jaata hai (<code>Exception</code> subclasses, <code>ControllerBase</code>) theek hai.</p>`
      },
      code: [
        {
          caption: {
            en: "Bad: Square breaks the Rectangle contract (runs)",
            hi: "Bad: Square, Rectangle का contract तोड़ता है (run होता है)",
            hg: "Bad: Square, Rectangle ka contract todta hai (run hota hai)"
          },
          src: `Console.WriteLine(AreaAfterResize(new Rectangle()));
Console.WriteLine(AreaAfterResize(new Square()));   // caller expected 20

static int AreaAfterResize(Rectangle r)
{
    r.Width = 5;
    r.Height = 4;
    return r.Area;
}

public class Rectangle
{
    public virtual int Width { get; set; }
    public virtual int Height { get; set; }
    public int Area => Width * Height;
}

public class Square : Rectangle
{
    public override int Width
    {
        get => base.Width;
        set { base.Width = value; base.Height = value; }
    }

    public override int Height
    {
        get => base.Height;
        set { base.Width = value; base.Height = value; }
    }
}`,
          check: "run",
          expected: "20\n16"
        },
        {
          caption: {
            en: "Good: share only what is really common; each type keeps its own rules (runs)",
            hi: "Good: सिर्फ़ जो सच में साझा है वही share करो; हर type के अपने rules (run होता है)",
            hg: "Good: sirf jo sach mein saajha hai wahi share karo; har type ke apne rules (run hota hai)"
          },
          src: `IShape[] shapes = { new Rect(5, 4), new Sq(4) };
foreach (var s in shapes)
    Console.WriteLine($"{s.GetType().Name}: {s.Area}");

public interface IShape
{
    int Area { get; }
}

public record Rect(int Width, int Height) : IShape
{
    public int Area => Width * Height;
}

public record Sq(int Side) : IShape
{
    public int Area => Side * Side;
}`,
          check: "run",
          expected: "Rect: 20\nSq: 16"
        },
        {
          caption: {
            en: ".NET: the documented LSP compromises — ReadOnlyCollection and Stream flags (runs)",
            hi: ".NET: documented LSP compromises — ReadOnlyCollection और Stream flags (run होता है)",
            hg: ".NET: documented LSP compromises — ReadOnlyCollection aur Stream flags (run hota hai)"
          },
          src: `ICollection<int> items = new System.Collections.ObjectModel.ReadOnlyCollection<int>(new List<int> { 1, 2 });
Console.WriteLine(items.IsReadOnly);
try { items.Add(3); }
catch (NotSupportedException) { Console.WriteLine("Add -> NotSupportedException"); }

// A better signature: say "read only" in the type, no runtime surprise possible.
static int Sum(IReadOnlyList<int> numbers) => numbers.Sum();
Console.WriteLine(Sum(new List<int> { 1, 2, 3 }));

using var ms = new MemoryStream(new byte[4], writable: false);
Console.WriteLine($"CanSeek={ms.CanSeek}, CanWrite={ms.CanWrite}");`,
          check: "run",
          expected: "True\nAdd -> NotSupportedException\n6\nCanSeek=True, CanWrite=False"
        }
      ]
    },
    {
      id: "isp-in-code",
      depth: "detailed",
      title: {
        en: "I — Interface Segregation: small interfaces",
        hi: "I — Interface Segregation: छोटे interfaces",
        hg: "I — Interface Segregation: chhote interfaces"
      },
      body: {
        en: `<p><b>Analogy — mobile recharge:</b> imagine one mega-plan that forces you to buy calls, 5G data, OTT apps, roaming and a landline together, when you only want calls. You would rather pick separate small packs. An interface is the same: do not make a class pay (implement) for features it does not offer.</p>
<p><b>Bad:</b> a fat <code>IMultiFunctionDevice</code> with <code>Print</code>, <code>Scan</code> and <code>Fax</code>. A simple printer must implement all three, so it throws <code>NotSupportedException</code> for two of them — that is also an LSP smell. Callers can no longer trust the interface.</p>
<p><b>Good:</b> <code>IPrinter</code>, <code>IScanner</code>, <code>IFax</code>. A simple printer implements one; an office machine implements all three (a class can implement many interfaces). A method that only prints asks for <code>IPrinter</code>, so it can be tested with a tiny fake.</p>
<ul>
<li><b>.NET examples:</b> <code>IReadOnlyList&lt;T&gt;</code> vs <code>IList&lt;T&gt;</code> (ask for read-only if you only read); <code>IEnumerable&lt;T&gt;</code> for "just iterate"; <code>IDisposable</code> and <code>IAsyncDisposable</code> are separate on purpose; <code>IEquatable&lt;T&gt;</code>, <code>IComparable&lt;T&gt;</code> are single-purpose.</li>
<li>Design interfaces from the <b>caller's</b> needs (role interfaces), not from the implementer's feature list.</li>
<li>Pitfall — interface explosion: 40 one-method interfaces for one team's internal code is its own smell. Group methods that always change and are used together.</li>
</ul>
<p><b>When to use / when not:</b> segregate when implementers are forced to throw or leave methods empty, or when tests need big fakes to satisfy methods the code under test never calls. Keep one interface when all methods are always used together (a <code>ICustomerRepository</code> with Get/Add/Update is fine if every client needs them).</p>`,
        hi: `<p><b>Analogy — mobile recharge:</b> सोचो एक mega-plan जो calls, 5G data, OTT apps, roaming और landline सब साथ ख़रीदने पर मजबूर करे, जबकि आपको सिर्फ़ calls चाहिए। आप अलग-अलग छोटे packs चुनना पसंद करोगे। Interface भी ऐसा ही है: class को उन features की क़ीमत (implement) मत भरवाओ जो वो देती ही नहीं।</p>
<p><b>Bad:</b> मोटा <code>IMultiFunctionDevice</code> जिसमें <code>Print</code>, <code>Scan</code> और <code>Fax</code> हैं। Simple printer को तीनों implement करने पड़ते हैं, तो वो दो के लिए <code>NotSupportedException</code> फेंकता है — यह LSP की smell भी है। Callers अब interface पर भरोसा नहीं कर सकते।</p>
<p><b>Good:</b> <code>IPrinter</code>, <code>IScanner</code>, <code>IFax</code>। Simple printer एक implement करता है; office machine तीनों (class कई interfaces implement कर सकती है)। जो method सिर्फ़ print करता है वो <code>IPrinter</code> माँगता है, इसलिए उसे छोटे fake से test कर सकते हैं।</p>
<ul>
<li><b>.NET examples:</b> <code>IReadOnlyList&lt;T&gt;</code> vs <code>IList&lt;T&gt;</code> (सिर्फ़ पढ़ना हो तो read-only माँगो); "बस iterate करना है" के लिए <code>IEnumerable&lt;T&gt;</code>; <code>IDisposable</code> और <code>IAsyncDisposable</code> जान-बूझकर अलग हैं; <code>IEquatable&lt;T&gt;</code>, <code>IComparable&lt;T&gt;</code> single-purpose हैं।</li>
<li>Interfaces <b>caller की ज़रूरत</b> से design करो (role interfaces), implementer की feature list से नहीं।</li>
<li>Pitfall — interface explosion: एक team के internal code के लिए 40 one-method interfaces भी अपनी smell है। जो methods हमेशा साथ बदलते और साथ use होते हैं उन्हें group करो।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> तब segregate करो जब implementers को throw करना पड़े या methods ख़ाली छोड़ने पड़ें, या tests को ऐसे methods के लिए बड़े fakes चाहिए जिन्हें code-under-test कभी call नहीं करता। जब सारे methods हमेशा साथ use होते हों तो एक interface रखो (हर client को Get/Add/Update चाहिए तो <code>ICustomerRepository</code> ठीक है)।</p>`,
        hg: `<p><b>Analogy — mobile recharge:</b> socho ek mega-plan jo calls, 5G data, OTT apps, roaming aur landline sab saath kharidne par majboor kare, jabki aapko sirf calls chahiye. Aap alag-alag chhote packs chunna pasand karoge. Interface bhi aisa hi hai: class ko un features ki keemat (implement) mat bharwao jo woh deti hi nahi.</p>
<p><b>Bad:</b> mota <code>IMultiFunctionDevice</code> jismein <code>Print</code>, <code>Scan</code> aur <code>Fax</code> hain. Simple printer ko teeno implement karne padte hain, to woh do ke liye <code>NotSupportedException</code> phenkta hai — yeh LSP ki smell bhi hai. Callers ab interface par bharosa nahi kar sakte.</p>
<p><b>Good:</b> <code>IPrinter</code>, <code>IScanner</code>, <code>IFax</code>. Simple printer ek implement karta hai; office machine teeno (class kai interfaces implement kar sakti hai). Jo method sirf print karta hai woh <code>IPrinter</code> maangta hai, isliye use chhote fake se test kar sakte hain.</p>
<ul>
<li><b>.NET examples:</b> <code>IReadOnlyList&lt;T&gt;</code> vs <code>IList&lt;T&gt;</code> (sirf padhna ho to read-only maango); "bas iterate karna hai" ke liye <code>IEnumerable&lt;T&gt;</code>; <code>IDisposable</code> aur <code>IAsyncDisposable</code> jaan-boojhkar alag hain; <code>IEquatable&lt;T&gt;</code>, <code>IComparable&lt;T&gt;</code> single-purpose hain.</li>
<li>Interfaces <b>caller ki zaroorat</b> se design karo (role interfaces), implementer ki feature list se nahi.</li>
<li>Pitfall — interface explosion: ek team ke internal code ke liye 40 one-method interfaces bhi apni smell hai. Jo methods hamesha saath badalte aur saath use hote hain unhe group karo.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> tab segregate karo jab implementers ko throw karna pade ya methods khaali chhodne padein, ya tests ko aise methods ke liye bade fakes chahiye jinhe code-under-test kabhi call nahi karta. Jab saare methods hamesha saath use hote hon to ek interface rakho (har client ko Get/Add/Update chahiye to <code>ICustomerRepository</code> theek hai).</p>`
      },
      code: [
        {
          caption: {
            en: "Bad: fat interface forces NotSupportedException (compiles)",
            hi: "Bad: मोटा interface NotSupportedException फेंकने पर मजबूर करता है (compile होता है)",
            hg: "Bad: mota interface NotSupportedException phenkne par majboor karta hai (compile hota hai)"
          },
          src: `public interface IMultiFunctionDevice
{
    void Print(string doc);
    string Scan();
    void Fax(string doc);
}

public class SimplePrinter : IMultiFunctionDevice
{
    public void Print(string doc) => Console.WriteLine($"Printing {doc}");
    public string Scan() => throw new NotSupportedException();     // LSP smell too
    public void Fax(string doc) => throw new NotSupportedException();
}`,
          check: "compile"
        },
        {
          caption: {
            en: "Good: small role interfaces; classes pick what they really offer (runs)",
            hi: "Good: छोटे role interfaces; classes वही चुनती हैं जो सच में देती हैं (run होता है)",
            hg: "Good: chhote role interfaces; classes wahi chunti hain jo sach mein deti hain (run hota hai)"
          },
          src: `var simple = new SimplePrinter();
var office = new OfficeMachine();
Report(simple, "invoice");
Report(office, "contract");
Console.WriteLine(office.Scan());

// This method needs only printing, so it asks only for IPrinter.
static void Report(IPrinter printer, string doc) => printer.Print(doc);

public interface IPrinter { void Print(string doc); }
public interface IScanner { string Scan(); }
public interface IFax { void Fax(string doc); }

public class SimplePrinter : IPrinter
{
    public void Print(string doc) => Console.WriteLine($"Simple printing {doc}");
}

public class OfficeMachine : IPrinter, IScanner, IFax
{
    public void Print(string doc) => Console.WriteLine($"Office printing {doc}");
    public string Scan() => "scanned-page";
    public void Fax(string doc) => Console.WriteLine($"Faxing {doc}");
}`,
          check: "run",
          expected: "Simple printing invoice\nOffice printing contract\nscanned-page"
        }
      ]
    },
    {
      id: "dip-in-code",
      depth: "detailed",
      title: {
        en: "D — Dependency Inversion in code: new → constructor → container",
        hi: "D — Code में Dependency Inversion: new → constructor → container",
        hg: "D — Code mein Dependency Inversion: new → constructor → container"
      },
      body: {
        en: `<p><b>Analogy — wall socket:</b> a table fan does not wire itself to one power station. It has a standard plug, and any socket that fits will do. The fan (high-level) and the power source (low-level) both depend on the <i>plug standard</i> (the abstraction).</p>
<p><b>Bad:</b> <code>OrderService</code> does <code>new SmtpEmailSender()</code> inside itself. It is welded to SMTP: you cannot unit-test it without sending a real email, and switching to SMS or SendGrid means editing the service.</p>
<p><b>Good (step 1 — DIP + hand-made DI):</b> <code>OrderService</code> asks for an <code>IEmailSender</code> in its constructor. In production you pass the SMTP version; in a test you pass a fake that records the message. No container needed.</p>
<p><b>Good (step 2 — container):</b> register once in the composition root (<code>Program.cs</code>) and let <code>Microsoft.Extensions.DependencyInjection</code> build the graph. The service class is unchanged.</p>
<ul>
<li><b>Prefer constructor injection</b>: dependencies are visible and required. Make fields <code>readonly</code>.</li>
<li><b>Composition root:</b> only one place (startup) knows concrete types. Do not inject <code>IServiceProvider</code> into business classes and call <code>GetService</code> — that is the <b>Service Locator</b> anti-pattern (hidden dependencies, runtime failures).</li>
<li><b>Resolution facts:</b> if the same service is registered twice, the <b>last</b> registration wins for <code>GetService</code>; <code>IEnumerable&lt;T&gt;</code> returns all in registration order. Lifetimes (Transient / Scoped / Singleton) matter: avoid injecting a shorter-lived service (Scoped) into a longer-lived one (Singleton) — a captive dependency (as in Day 5 for DbContext).</li>
<li>If the constructor takes 8+ parameters, the class probably violates SRP — fix the class, not the container.</li>
</ul>
<p><b>When to use / when not:</b> invert dependencies at real boundaries — I/O, time (<code>TimeProvider</code>), external APIs, anything you want to fake. Do not create an interface for a class that has one implementation, no external effect and no reason to fake — inject the concrete class (or just make the method static); you can extract an interface later in seconds when the need appears.</p>`,
        hi: `<p><b>Analogy — दीवार का socket:</b> table fan ख़ुद को किसी एक power station से wire नहीं करता। उसका standard plug होता है और जो भी socket fit हो, चलेगा। Fan (high-level) और power source (low-level) दोनों <i>plug standard</i> (abstraction) पर depend करते हैं।</p>
<p><b>Bad:</b> <code>OrderService</code> अंदर ही <code>new SmtpEmailSender()</code> करता है। वो SMTP से चिपक गया है: असली email भेजे बिना unit-test नहीं कर सकते, और SMS या SendGrid पर जाने के लिए service edit करनी पड़ेगी।</p>
<p><b>Good (step 1 — DIP + हाथ से DI):</b> <code>OrderService</code> अपने constructor में <code>IEmailSender</code> माँगता है। Production में SMTP वाला देते हो; test में ऐसा fake जो message record करे। Container की ज़रूरत नहीं।</p>
<p><b>Good (step 2 — container):</b> composition root (<code>Program.cs</code>) में एक बार register करो और <code>Microsoft.Extensions.DependencyInjection</code> को graph बनाने दो। Service class वैसी की वैसी रहती है।</p>
<ul>
<li><b>Constructor injection पसंद करो</b>: dependencies दिखती हैं और ज़रूरी होती हैं। Fields <code>readonly</code> रखो।</li>
<li><b>Composition root:</b> सिर्फ़ एक जगह (startup) concrete types जानती है। Business classes में <code>IServiceProvider</code> inject करके <code>GetService</code> call मत करो — यह <b>Service Locator</b> anti-pattern है (छुपी dependencies, runtime failures)।</li>
<li><b>Resolution facts:</b> एक ही service दो बार register हो तो <code>GetService</code> के लिए <b>आख़िरी</b> registration जीतती है; <code>IEnumerable&lt;T&gt;</code> सब registration order में देता है। Lifetimes (Transient / Scoped / Singleton) मायने रखते हैं: छोटी उम्र वाली service (Scoped) को लंबी उम्र वाली (Singleton) में inject करने से बचो — captive dependency (जैसे Day 5 में DbContext)।</li>
<li>Constructor में 8+ parameters हों तो class शायद SRP तोड़ रही है — container नहीं, class ठीक करो।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> असली boundaries पर dependencies invert करो — I/O, time (<code>TimeProvider</code>), external APIs, जो भी fake करना चाहो। जिस class की एक ही implementation है, कोई external effect नहीं और fake करने की वजह नहीं, उसके लिए interface मत बनाओ — concrete class inject करो (या method static रखो); ज़रूरत पड़ने पर interface कुछ सेकंड में निकाल सकते हो।</p>`,
        hg: `<p><b>Analogy — deewar ka socket:</b> table fan khud ko kisi ek power station se wire nahi karta. Uska standard plug hota hai aur jo bhi socket fit ho, chalega. Fan (high-level) aur power source (low-level) dono <i>plug standard</i> (abstraction) par depend karte hain.</p>
<p><b>Bad:</b> <code>OrderService</code> andar hi <code>new SmtpEmailSender()</code> karta hai. Woh SMTP se chipak gaya hai: asli email bheje bina unit-test nahi kar sakte, aur SMS ya SendGrid par jaane ke liye service edit karni padegi.</p>
<p><b>Good (step 1 — DIP + haath se DI):</b> <code>OrderService</code> apne constructor mein <code>IEmailSender</code> maangta hai. Production mein SMTP wala dete ho; test mein aisa fake jo message record kare. Container ki zaroorat nahi.</p>
<p><b>Good (step 2 — container):</b> composition root (<code>Program.cs</code>) mein ek baar register karo aur <code>Microsoft.Extensions.DependencyInjection</code> ko graph banane do. Service class waisi ki waisi rehti hai.</p>
<ul>
<li><b>Constructor injection pasand karo</b>: dependencies dikhti hain aur zaroori hoti hain. Fields <code>readonly</code> rakho.</li>
<li><b>Composition root:</b> sirf ek jagah (startup) concrete types jaanti hai. Business classes mein <code>IServiceProvider</code> inject karke <code>GetService</code> call mat karo — yeh <b>Service Locator</b> anti-pattern hai (chhupi dependencies, runtime failures).</li>
<li><b>Resolution facts:</b> ek hi service do baar register ho to <code>GetService</code> ke liye <b>aakhri</b> registration jeetti hai; <code>IEnumerable&lt;T&gt;</code> sab registration order mein deta hai. Lifetimes (Transient / Scoped / Singleton) matter karte hain: chhoti umar wali service (Scoped) ko lambi umar wali (Singleton) mein inject karne se bacho — captive dependency (jaise Day 5 mein DbContext).</li>
<li>Constructor mein 8+ parameters hon to class shayad SRP tod rahi hai — container nahi, class theek karo.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> asli boundaries par dependencies invert karo — I/O, time (<code>TimeProvider</code>), external APIs, jo bhi fake karna chaho. Jis class ki ek hi implementation hai, koi external effect nahi aur fake karne ki wajah nahi, uske liye interface mat banao — concrete class inject karo (ya method static rakho); zaroorat padne par interface kuch second mein nikaal sakte ho.</p>`
      },
      code: [
        {
          caption: {
            en: "Bad: the service creates its own SMTP sender (compiles)",
            hi: "Bad: service अपना SMTP sender ख़ुद बनाती है (compile होता है)",
            hg: "Bad: service apna SMTP sender khud banati hai (compile hota hai)"
          },
          src: `public class SmtpEmailSender
{
    public void Send(string to, string text) => Console.WriteLine($"SMTP to {to}: {text}");
}

public class OrderService
{
    private readonly SmtpEmailSender _email = new();   // welded to one concrete class

    public void Place(string customer) => _email.Send(customer, "Order placed");
}`,
          check: "compile"
        },
        {
          caption: {
            en: "Good: depend on IEmailSender; production and test pass different ones (runs)",
            hi: "Good: IEmailSender पर depend करो; production और test अलग-अलग देते हैं (run होता है)",
            hg: "Good: IEmailSender par depend karo; production aur test alag-alag dete hain (run hota hai)"
          },
          src: `// Production wiring (by hand, no container)
new OrderService(new SmtpEmailSender()).Place("asha@example.com");

// Test wiring: a fake records the message instead of sending it
var fake = new FakeEmailSender();
new OrderService(fake).Place("test@example.com");
Console.WriteLine($"Fake captured: {fake.Last}");

public interface IEmailSender
{
    void Send(string to, string text);
}

public class SmtpEmailSender : IEmailSender
{
    public void Send(string to, string text) => Console.WriteLine($"SMTP to {to}: {text}");
}

public class FakeEmailSender : IEmailSender
{
    public string? Last { get; private set; }
    public void Send(string to, string text) => Last = $"{to}|{text}";
}

public class OrderService
{
    private readonly IEmailSender _email;

    public OrderService(IEmailSender email) => _email = email;

    public void Place(string customer) => _email.Send(customer, "Order placed");
}`,
          check: "run",
          expected: "SMTP to asha@example.com: Order placed\nFake captured: test@example.com|Order placed"
        },
        {
          caption: {
            en: "Same service, now built by Microsoft.Extensions.DependencyInjection (runs)",
            hi: "वही service, अब Microsoft.Extensions.DependencyInjection से बनी (run होता है)",
            hg: "Wahi service, ab Microsoft.Extensions.DependencyInjection se bani (run hota hai)"
          },
          src: `using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection();
services.AddSingleton<IEmailSender, SmtpEmailSender>();   // composition root: the only place that knows the concrete type
services.AddTransient<OrderService>();

using var provider = services.BuildServiceProvider();
provider.GetRequiredService<OrderService>().Place("ravi@example.com");

public interface IEmailSender { void Send(string to, string text); }

public class SmtpEmailSender : IEmailSender
{
    public void Send(string to, string text) => Console.WriteLine($"SMTP to {to}: {text}");
}

public class OrderService
{
    private readonly IEmailSender _email;

    public OrderService(IEmailSender email) => _email = email;

    public void Place(string customer) => _email.Send(customer, "Order placed");
}`,
          check: "run",
          expected: "SMTP to ravi@example.com: Order placed",
          packages: ["Microsoft.Extensions.DependencyInjection"]
        }
      ]
    },
    {
      id: "solid-in-review",
      depth: "detailed",
      title: {
        en: "TL angle: SOLID in code review, and the over-engineering trap",
        hi: "TL angle: Code review में SOLID, और over-engineering का जाल",
        hg: "TL angle: Code review mein SOLID, aur over-engineering ka jaal"
      },
      body: {
        en: `<p><b>Analogy — cycle helmet vs car airbags:</b> a helmet on a cycle ride is sensible, but fitting every cycle with airbags and a roll cage is waste. SOLID is safety gear for code that will change; it is not decoration for code that will not.</p>
<p><b>How a Tech Lead uses SOLID in a pull request</b> — ask a question, do not quote a principle:</p>
<ul>
<li><b>S:</b> "This class changes if tax rules <i>or</i> email text change — can we separate them?" Smells: 600+ lines, "Manager/Helper" names, constructor with 8+ parameters.</li>
<li><b>O:</b> "This <code>switch</code> on type appears in three places — what happens when we add a fourth?"</li>
<li><b>L:</b> "This override throws <code>NotSupportedException</code> — is it really a <code>Base</code>? Could we use a smaller interface?"</li>
<li><b>I:</b> "Do all callers need these 7 methods? A fake in tests implements 6 empty ones."</li>
<li><b>D:</b> "<code>new HttpClient()</code> / <code>DateTime.Now</code> / <code>File.*</code> inside business logic — can we inject it (<code>IHttpClientFactory</code>, <code>TimeProvider</code>)?"</li>
</ul>
<p><b>Over-engineering smells</b> (equally review-worthy): an interface with exactly one implementation and no fake (<code>IFooService</code> + <code>FooService</code> for everything); a factory for a class with one constructor; <code>IRepository&lt;T&gt;</code> wrapped around EF Core "so we can swap the database" when no one will; abstract base classes with one child; five layers of mapping for a CRUD screen.</p>
<ul>
<li><b>YAGNI</b> ("you aren't gonna need it") + <b>rule of three</b>: tolerate duplication once or twice, abstract on the third. Refactoring toward SOLID later is cheap with tests; a wrong abstraction is expensive to remove.</li>
<li>Be consistent with your team's conventions and keep review comments about <i>change cost</i> ("this will hurt when…"), not about purity.</li>
<li>For legacy code: add a seam (extract interface at the boundary), get a test green, then refactor in small steps. No big-bang rewrite.</li>
</ul>
<p><b>When to use / when not:</b> push for SOLID at boundaries, in code that changes often, and in code that needs tests. Relax it in throw-away scripts, small stable utilities and simple CRUD. Judgement — and writing the reason in the review comment — is the TL skill being tested.</p>`,
        hi: `<p><b>Analogy — cycle का helmet vs car के airbags:</b> safety gear अच्छा है, पर हर cycle में airbags और roll cage लगाना बर्बादी है। SOLID उस code की safety gear है जो बदलेगा; उस code की सजावट नहीं जो नहीं बदलेगा।</p>
<p><b>Tech Lead pull request में SOLID कैसे use करता है</b> — principle quote मत करो, सवाल पूछो:</p>
<ul>
<li><b>S:</b> "यह class tax rules बदलने पर <i>या</i> email text बदलने पर बदलेगी — इन्हें अलग कर सकते हैं?" Smells: 600+ lines, "Manager/Helper" नाम, 8+ parameters वाला constructor।</li>
<li><b>O:</b> "type पर यह <code>switch</code> तीन जगह है — चौथा जोड़ेंगे तो क्या होगा?"</li>
<li><b>L:</b> "यह override <code>NotSupportedException</code> फेंकता है — क्या यह सच में <code>Base</code> है? छोटा interface use कर सकते हैं?"</li>
<li><b>I:</b> "क्या सब callers को ये 7 methods चाहिए? Tests का fake 6 ख़ाली methods implement करता है।"</li>
<li><b>D:</b> "Business logic के अंदर <code>new HttpClient()</code> / <code>DateTime.Now</code> / <code>File.*</code> — क्या इन्हें inject कर सकते हैं (<code>IHttpClientFactory</code>, <code>TimeProvider</code>)?"</li>
</ul>
<p><b>Over-engineering smells</b> (review में उतने ही ज़रूरी): ऐसा interface जिसकी एक ही implementation है और कोई fake नहीं (हर चीज़ के लिए <code>IFooService</code> + <code>FooService</code>); एक constructor वाली class के लिए factory; EF Core के ऊपर <code>IRepository&lt;T&gt;</code> "ताकि database बदल सकें" जबकि कोई नहीं बदलेगा; एक child वाली abstract base classes; CRUD screen के लिए mapping की पाँच layers।</p>
<ul>
<li><b>YAGNI</b> ("you aren't gonna need it") + <b>rule of three</b>: duplication एक-दो बार सह लो, तीसरी बार abstract करो। Tests हों तो बाद में SOLID की तरफ़ refactor सस्ता है; ग़लत abstraction हटाना महँगा।</li>
<li>Team की conventions के साथ consistent रहो और review comments <i>बदलाव की लागत</i> ("यह तब दुखेगा जब…") के बारे में रखो, शुद्धता के बारे में नहीं।</li>
<li>Legacy code के लिए: seam जोड़ो (boundary पर interface निकालो), एक test green करो, फिर छोटे steps में refactor करो। Big-bang rewrite नहीं।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> boundaries पर, अक्सर बदलने वाले code में और जिस code को tests चाहिए वहाँ SOLID पर ज़ोर दो। Throw-away scripts, छोटी stable utilities और simple CRUD में ढील दो। Judgement — और review comment में वजह लिखना — यही TL skill है जो परखी जाती है।</p>`,
        hg: `<p><b>Analogy — cycle ka helmet vs car ke airbags:</b> safety gear achha hai, par har cycle mein airbags aur roll cage lagana barbaadi hai. SOLID us code ki safety gear hai jo badlega; us code ki sajaavat nahi jo nahi badlega.</p>
<p><b>Tech Lead pull request mein SOLID kaise use karta hai</b> — principle quote mat karo, sawaal poochho:</p>
<ul>
<li><b>S:</b> "Yeh class tax rules badalne par <i>ya</i> email text badalne par badlegi — inhe alag kar sakte hain?" Smells: 600+ lines, "Manager/Helper" naam, 8+ parameters wala constructor.</li>
<li><b>O:</b> "type par yeh <code>switch</code> teen jagah hai — chautha jodenge to kya hoga?"</li>
<li><b>L:</b> "Yeh override <code>NotSupportedException</code> phenkta hai — kya yeh sach mein <code>Base</code> hai? Chhota interface use kar sakte hain?"</li>
<li><b>I:</b> "Kya sab callers ko yeh 7 methods chahiye? Tests ka fake 6 khaali methods implement karta hai."</li>
<li><b>D:</b> "Business logic ke andar <code>new HttpClient()</code> / <code>DateTime.Now</code> / <code>File.*</code> — kya inhe inject kar sakte hain (<code>IHttpClientFactory</code>, <code>TimeProvider</code>)?"</li>
</ul>
<p><b>Over-engineering smells</b> (review mein utne hi zaroori): aisa interface jiski ek hi implementation hai aur koi fake nahi (har cheez ke liye <code>IFooService</code> + <code>FooService</code>); ek constructor wali class ke liye factory; EF Core ke upar <code>IRepository&lt;T&gt;</code> "taaki database badal sakein" jabki koi nahi badlega; ek child wali abstract base classes; CRUD screen ke liye mapping ki paanch layers.</p>
<ul>
<li><b>YAGNI</b> ("you aren't gonna need it") + <b>rule of three</b>: duplication ek-do baar sah lo, teesri baar abstract karo. Tests hon to baad mein SOLID ki taraf refactor sasta hai; galat abstraction hatana mehenga.</li>
<li>Team ki conventions ke saath consistent raho aur review comments <i>badlaav ki laagat</i> ("yeh tab dukhega jab…") ke baare mein rakho, shuddhta ke baare mein nahi.</li>
<li>Legacy code ke liye: seam jodo (boundary par interface nikalo), ek test green karo, phir chhote steps mein refactor karo. Big-bang rewrite nahi.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> boundaries par, aksar badalne wale code mein aur jis code ko tests chahiye wahan SOLID par zor do. Throw-away scripts, chhoti stable utilities aur simple CRUD mein dheel do. Judgement — aur review comment mein wajah likhna — yahi TL skill hai jo parkhi jaati hai.</p>`
      },
      code: [
        {
          caption: {
            en: "Over-engineered vs fine: not every class needs an interface (compiles)",
            hi: "Over-engineered vs ठीक: हर class को interface नहीं चाहिए (compile होता है)",
            hg: "Over-engineered vs theek: har class ko interface nahi chahiye (compile hota hai)"
          },
          src: `// Smell: one implementation, no I/O, nothing to fake, never changes.
public interface IPriceFormatter { string Format(decimal price); }
public class PriceFormatter : IPriceFormatter
{
    public string Format(decimal price) => price.ToString("C");
}

// Simpler, and equally testable: a pure function needs no abstraction.
public static class Price
{
    public static string Format(decimal price) => price.ToString("C");
}

// Worth an interface: touches the outside world and you want to fake it.
public interface IPaymentGateway
{
    Task<bool> ChargeAsync(string customerId, decimal amount);
}`,
          check: "compile"
        }
      ]
    }
  ],
  qa: [
    {
      id: "what-is-solid",
      depth: "short",
      q: "What is SOLID, and why do we care about it?",
      answer: "SOLID is five design principles — Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion — that reduce coupling and keep code easy to change and test. I treat them as guidelines for code that changes, not laws.",
      meaning: {
        hi: "SOLID पाँच design principles हैं जो coupling घटाते हैं और code को बदलना और test करना आसान रखते हैं। मैं इन्हें उस code के guidelines मानता हूँ जो बदलता है, कानून नहीं।",
        hg: "SOLID paanch design principles hain jo coupling ghatate hain aur code ko badalna aur test karna aasan rakhte hain. Main inhe us code ke guidelines manta hoon jo badalta hai, kanoon nahi."
      },
      explain: {
        en: `<ul>
<li><b>S</b> one reason to change; <b>O</b> extend by adding code; <b>L</b> subtypes are substitutable; <b>I</b> small interfaces; <b>D</b> depend on abstractions.</li>
<li>Goal: <b>low coupling, high cohesion</b>. The payoff is cheaper change and easier unit tests.</li>
<li>The principles were popularised by Robert C. Martin ("Uncle Bob"); LSP is by Barbara Liskov.</li>
</ul>
<p><b>TL angle:</b> explain it through consequences ("this makes the payment change a one-file change") rather than reciting the acronym.</p>
<p>Follow-up: "Do you always follow SOLID?" — No; at boundaries and in volatile code yes, in tiny stable code no (YAGNI).</p>`,
        hi: `<ul>
<li><b>S</b> बदलने की एक वजह; <b>O</b> code जोड़कर extend करो; <b>L</b> subtypes बदले जा सकें; <b>I</b> छोटे interfaces; <b>D</b> abstractions पर depend करो।</li>
<li>Goal: <b>कम coupling, ज़्यादा cohesion</b>। फ़ायदा: बदलाव सस्ता और unit tests आसान।</li>
<li>इन principles को Robert C. Martin ("Uncle Bob") ने popular किया; LSP Barbara Liskov का है।</li>
</ul>
<p><b>TL angle:</b> acronym रटने की जगह नतीजे बताओ ("इससे payment बदलना एक-file का काम हो जाता है")।</p>
<p>Follow-up: "क्या आप हमेशा SOLID follow करते हो?" — नहीं; boundaries और बदलने वाले code में हाँ, छोटे stable code में नहीं (YAGNI)।</p>`,
        hg: `<ul>
<li><b>S</b> badalne ki ek wajah; <b>O</b> code jodkar extend karo; <b>L</b> subtypes badle ja sakein; <b>I</b> chhote interfaces; <b>D</b> abstractions par depend karo.</li>
<li>Goal: <b>kam coupling, zyada cohesion</b>. Fayda: badlaav sasta aur unit tests aasan.</li>
<li>In principles ko Robert C. Martin ("Uncle Bob") ne popular kiya; LSP Barbara Liskov ka hai.</li>
</ul>
<p><b>TL angle:</b> acronym ratne ki jagah nateeje batao ("isse payment badalna ek-file ka kaam ho jaata hai").</p>
<p>Follow-up: "Kya aap hamesha SOLID follow karte ho?" — Nahi; boundaries aur badalne wale code mein haan, chhote stable code mein nahi (YAGNI).</p>`
      }
    },
    {
      id: "srp-meaning",
      depth: "short",
      q: "What does the Single Responsibility Principle mean? Give an example.",
      answer: "A class should have one reason to change — one stakeholder who can ask for changes. An OrderService that validates, saves to a file and builds emails has three; I split it into validator, store and notifier.",
      meaning: {
        hi: "Class के बदलने की एक ही वजह होनी चाहिए — बदलाव माँगने वाला एक stakeholder। जो OrderService validate, file में save और email बनाता है उसकी तीन वजहें हैं; मैं उसे validator, store और notifier में बाँटता हूँ।",
        hg: "Class ke badalne ki ek hi wajah honi chahiye — badlaav maangne wala ek stakeholder. Jo OrderService validate, file mein save aur email banata hai uski teen wajahein hain; main use validator, store aur notifier mein baanta hoon."
      },
      explain: {
        en: `<ul>
<li>"Responsibility" = <b>reason to change</b>, not "does one thing" or "has one method".</li>
<li>Ask: <i>who</i> would request a change to this class? If the answer is "finance and marketing and the DBA", split it.</li>
<li>Benefits: smaller tests, fewer merge conflicts, safer changes.</li>
<li>Limit: do not shred a small class into tiny pieces; wait for a second reason to change.</li>
</ul>
<p>Follow-up: "Is a controller that calls a service SRP-compliant?" — Yes: the controller handles HTTP concerns, the service handles business rules.</p>`,
        hi: `<ul>
<li>"Responsibility" = <b>बदलने की वजह</b>, "एक काम करती है" या "एक method है" नहीं।</li>
<li>पूछो: इस class में बदलाव <i>कौन</i> माँगेगा? जवाब "finance, marketing और DBA" हो तो बाँटो।</li>
<li>फ़ायदे: छोटे tests, कम merge conflicts, सुरक्षित बदलाव।</li>
<li>Limit: छोटी class को टुकड़े-टुकड़े मत करो; दूसरी वजह आने का इंतज़ार करो।</li>
</ul>
<p>Follow-up: "Service call करने वाला controller क्या SRP-compliant है?" — हाँ: controller HTTP की बातें सँभालता है, service business rules।</p>`,
        hg: `<ul>
<li>"Responsibility" = <b>badalne ki wajah</b>, "ek kaam karti hai" ya "ek method hai" nahi.</li>
<li>Poochho: is class mein badlaav <i>kaun</i> maangega? Jawab "finance, marketing aur DBA" ho to baanto.</li>
<li>Fayde: chhote tests, kam merge conflicts, surakshit badlaav.</li>
<li>Limit: chhoti class ko tukde-tukde mat karo; doosri wajah aane ka intezaar karo.</li>
</ul>
<p>Follow-up: "Service call karne wala controller kya SRP-compliant hai?" — Haan: controller HTTP ki baatein sambhalta hai, service business rules.</p>`
      }
    },
    {
      id: "ocp-csharp",
      depth: "short",
      q: "Explain the Open/Closed Principle. How do you achieve it in C#?",
      answer: "Classes should be open for extension but closed for modification: new behaviour comes from adding a new class, not editing tested code. In C# I use an interface or abstract member with polymorphism — the Strategy idea — and register implementations in DI.",
      meaning: {
        hi: "Classes extension के लिए खुली और modification के लिए बंद हों: नया behaviour नई class जोड़कर आए, tested code edit करके नहीं। C# में मैं interface या abstract member और polymorphism (Strategy idea) use करता हूँ और implementations DI में register करता हूँ।",
        hg: "Classes extension ke liye khuli aur modification ke liye band hon: naya behaviour nayi class jodkar aaye, tested code edit karke nahi. C# mein main interface ya abstract member aur polymorphism (Strategy idea) use karta hoon aur implementations DI mein register karta hoon."
      },
      explain: {
        en: `<ul>
<li>Smell: a <code>switch</code>/<code>if-else</code> on a type or enum that grows with every feature.</li>
<li>Fix: extract <code>IDiscountPolicy</code>; each case is a class; the caller takes the interface. New rule = new class + one DI line.</li>
<li>With DI: inject <code>IEnumerable&lt;IDiscountPolicy&gt;</code> and pick/apply the right one.</li>
<li>Not "never edit a file": bug fixes still edit code. OCP is about <i>adding</i> behaviour safely.</li>
</ul>
<p>Follow-up: "Is a switch always an OCP violation?" — See the detailed question on switch.</p>`,
        hi: `<ul>
<li>Smell: type या enum पर <code>switch</code>/<code>if-else</code> जो हर feature के साथ बढ़ता है।</li>
<li>Fix: <code>IDiscountPolicy</code> निकालो; हर case एक class; caller interface लेता है। नया rule = नई class + DI की एक line।</li>
<li>DI के साथ: <code>IEnumerable&lt;IDiscountPolicy&gt;</code> inject करो और सही वाली चुनकर apply करो।</li>
<li>"कभी file edit मत करो" नहीं: bug fixes में code edit होता ही है। OCP behaviour को सुरक्षित तरीक़े से <i>जोड़ने</i> की बात है।</li>
</ul>
<p>Follow-up: "क्या switch हमेशा OCP violation है?" — switch वाला detailed सवाल देखो।</p>`,
        hg: `<ul>
<li>Smell: type ya enum par <code>switch</code>/<code>if-else</code> jo har feature ke saath badhta hai.</li>
<li>Fix: <code>IDiscountPolicy</code> nikalo; har case ek class; caller interface leta hai. Naya rule = nayi class + DI ki ek line.</li>
<li>DI ke saath: <code>IEnumerable&lt;IDiscountPolicy&gt;</code> inject karo aur sahi wali chunkar apply karo.</li>
<li>"Kabhi file edit mat karo" nahi: bug fixes mein code edit hota hi hai. OCP behaviour ko surakshit tareeke se <i>jodne</i> ki baat hai.</li>
</ul>
<p>Follow-up: "Kya switch hamesha OCP violation hai?" — switch wala detailed sawaal dekho.</p>`
      }
    },
    {
      id: "lsp-example",
      depth: "short",
      q: "What is the Liskov Substitution Principle? Give an example of a violation.",
      answer: "Anywhere a base type is expected, any derived type must work without the caller knowing the difference. Classic violation: Square inheriting Rectangle, where setting Width also changes Height and breaks callers that expect independent sides.",
      meaning: {
        hi: "जहाँ base type expected हो, वहाँ कोई भी derived type बिना caller को फ़र्क़ पता चले चलना चाहिए। Classic violation: Square का Rectangle से inherit करना, जहाँ Width set करने से Height भी बदलती है और वे callers टूटते हैं जो अलग-अलग sides की उम्मीद करते हैं।",
        hg: "Jahan base type expected ho, wahan koi bhi derived type bina caller ko farq pata chale chalna chahiye. Classic violation: Square ka Rectangle se inherit karna, jahan Width set karne se Height bhi badalti hai aur woh callers tootte hain jo alag-alag sides ki ummeed karte hain."
      },
      explain: {
        en: `<ul>
<li>Barbara Liskov's idea: if <code>S</code> is a subtype of <code>T</code>, objects of <code>T</code> can be replaced by <code>S</code> without breaking the program.</li>
<li>It is about <b>behavioural contracts</b>, not just compiling signatures: preconditions, postconditions, invariants, exceptions.</li>
<li>Typical C# violations: override throws <code>NotSupportedException</code>; override ignores a parameter or returns a different "kind" of result; client code checks <code>is Square</code>.</li>
<li>Fix: smaller interface, composition, or immutable types.</li>
</ul>
<p>Follow-up: "How would you detect it in a code review?" — look for type checks and exception-throwing overrides.</p>`,
        hi: `<ul>
<li>Barbara Liskov का idea: अगर <code>S</code>, <code>T</code> का subtype है तो <code>T</code> के objects को <code>S</code> से बदलने पर program नहीं टूटना चाहिए।</li>
<li>यह सिर्फ़ compile होने वाले signatures की नहीं, <b>behavioural contracts</b> की बात है: preconditions, postconditions, invariants, exceptions।</li>
<li>C# के आम violations: override <code>NotSupportedException</code> फेंके; override parameter ignore करे या अलग "किस्म" का result दे; client code <code>is Square</code> check करे।</li>
<li>Fix: छोटा interface, composition, या immutable types।</li>
</ul>
<p>Follow-up: "Code review में इसे कैसे पकड़ोगे?" — type checks और exception फेंकने वाले overrides देखो।</p>`,
        hg: `<ul>
<li>Barbara Liskov ka idea: agar <code>S</code>, <code>T</code> ka subtype hai to <code>T</code> ke objects ko <code>S</code> se badalne par program nahi tootna chahiye.</li>
<li>Yeh sirf compile hone wale signatures ki nahi, <b>behavioural contracts</b> ki baat hai: preconditions, postconditions, invariants, exceptions.</li>
<li>C# ke aam violations: override <code>NotSupportedException</code> phenke; override parameter ignore kare ya alag "kism" ka result de; client code <code>is Square</code> check kare.</li>
<li>Fix: chhota interface, composition, ya immutable types.</li>
</ul>
<p>Follow-up: "Code review mein ise kaise pakdoge?" — type checks aur exception phenkne wale overrides dekho.</p>`
      },
      code: [{
        caption: {
          en: "A client that quietly checks the concrete type — an LSP smell (compiles)",
          hi: "Client जो चुपचाप concrete type check करता है — LSP smell (compile होता है)",
          hg: "Client jo chupchaap concrete type check karta hai — LSP smell (compile hota hai)"
        },
        src: `public abstract class Bird { public abstract void Move(); }
public class Sparrow : Bird { public override void Move() => Console.WriteLine("flies"); }
public class Penguin : Bird { public override void Move() => Console.WriteLine("walks"); }

public static class Zoo
{
    // Smell: the caller must know about subtypes. Better: model "Fly" as a separate capability.
    public static void Migrate(Bird b)
    {
        if (b is Penguin) return;
        b.Move();
    }
}`,
        check: "compile"
      }]
    },
    {
      id: "isp-example",
      depth: "short",
      q: "What is Interface Segregation? Where do you see it in .NET?",
      answer: "No client should be forced to depend on methods it does not use, so prefer several small interfaces to one fat one. In .NET: IReadOnlyList<T> vs IList<T>, and IDisposable and IAsyncDisposable being separate.",
      meaning: {
        hi: "किसी client को ऐसे methods पर depend करने को मजबूर नहीं करना चाहिए जो वो use नहीं करता, इसलिए एक मोटे interface की जगह कई छोटे interfaces रखो। .NET में: IReadOnlyList<T> vs IList<T>, और IDisposable व IAsyncDisposable का अलग होना।",
        hg: "Kisi client ko aise methods par depend karne par majboor nahi karna chahiye jo woh use nahi karta, isliye ek mote interface ki jagah kai chhote interfaces rakho. .NET mein: IReadOnlyList<T> vs IList<T>, aur IDisposable va IAsyncDisposable ka alag hona."
      },
      explain: {
        en: `<ul>
<li>Symptom: implementers with empty methods or <code>throw new NotSupportedException()</code>.</li>
<li>Design interfaces around what the <b>caller needs</b> (role interfaces): <code>IPrinter</code>, <code>IScanner</code>.</li>
<li>Method parameters should ask for the smallest abstraction: <code>IEnumerable&lt;T&gt;</code> if you only iterate, <code>IReadOnlyList&lt;T&gt;</code> if you need Count/indexer.</li>
<li>Limit: do not create one-method interfaces for everything — group methods that are always used together.</li>
</ul>
<p>Follow-up: "Is <code>IRepository&lt;T&gt;</code> with 12 methods an ISP problem?" — Often yes: many clients need only Get; consider splitting read and write, or use <code>DbContext</code> directly.</p>`,
        hi: `<ul>
<li>लक्षण: implementers में ख़ाली methods या <code>throw new NotSupportedException()</code>।</li>
<li>Interfaces को <b>caller की ज़रूरत</b> के हिसाब से design करो (role interfaces): <code>IPrinter</code>, <code>IScanner</code>।</li>
<li>Method parameters सबसे छोटी abstraction माँगें: सिर्फ़ iterate करना हो तो <code>IEnumerable&lt;T&gt;</code>, Count/indexer चाहिए तो <code>IReadOnlyList&lt;T&gt;</code>।</li>
<li>Limit: हर चीज़ के लिए one-method interfaces मत बनाओ — जो methods हमेशा साथ use होते हैं उन्हें group करो।</li>
</ul>
<p>Follow-up: "12 methods वाला <code>IRepository&lt;T&gt;</code> क्या ISP problem है?" — अक्सर हाँ: कई clients को सिर्फ़ Get चाहिए; read और write बाँटने पर सोचो, या <code>DbContext</code> सीधे use करो।</p>`,
        hg: `<ul>
<li>Lakshan: implementers mein khaali methods ya <code>throw new NotSupportedException()</code>.</li>
<li>Interfaces ko <b>caller ki zaroorat</b> ke hisaab se design karo (role interfaces): <code>IPrinter</code>, <code>IScanner</code>.</li>
<li>Method parameters sabse chhoti abstraction maangein: sirf iterate karna ho to <code>IEnumerable&lt;T&gt;</code>, Count/indexer chahiye to <code>IReadOnlyList&lt;T&gt;</code>.</li>
<li>Limit: har cheez ke liye one-method interfaces mat banao — jo methods hamesha saath use hote hain unhe group karo.</li>
</ul>
<p>Follow-up: "12 methods wala <code>IRepository&lt;T&gt;</code> kya ISP problem hai?" — Aksar haan: kai clients ko sirf Get chahiye; read aur write baantne par socho, ya <code>DbContext</code> seedha use karo.</p>`
      }
    },
    {
      id: "dip-di-ioc",
      depth: "short",
      q: "What is the difference between Dependency Inversion, Dependency Injection and an IoC container?",
      answer: "DIP is the design principle: depend on abstractions, not concretions. DI is the technique of passing dependencies in, usually via the constructor. An IoC container, like Microsoft.Extensions.DependencyInjection, is a tool that automates DI.",
      meaning: {
        hi: "DIP design principle है: abstractions पर depend करो, concrete पर नहीं। DI technique है: dependencies बाहर से देना, आमतौर पर constructor से। IoC container, जैसे Microsoft.Extensions.DependencyInjection, एक tool है जो DI को automate करता है।",
        hg: "DIP design principle hai: abstractions par depend karo, concrete par nahi. DI technique hai: dependencies bahar se dena, aamtaur par constructor se. IoC container, jaise Microsoft.Extensions.DependencyInjection, ek tool hai jo DI ko automate karta hai."
      },
      explain: {
        en: `<ul>
<li><b>Principle → technique → tool.</b> Each can exist without the next: DIP + manual DI works with no container.</li>
<li>You can use a container and still violate DIP: injecting concrete <code>SqlOrderRepository</code> everywhere, or injecting <code>IServiceProvider</code> and calling <code>GetService</code> (Service Locator).</li>
<li>"Inversion" means the abstraction is owned by the <b>high-level</b> module (the interface lives next to the business code); the low-level detail implements it.</li>
<li>IoC is broader still: the framework calls your code (controllers, middleware, hosted services).</li>
</ul>
<p>Follow-up: "Where do you register services?" — in one composition root: <code>Program.cs</code>.</p>`,
        hi: `<ul>
<li><b>Principle → technique → tool।</b> हर एक अगले के बिना भी हो सकता है: DIP + हाथ से DI बिना container के चलता है।</li>
<li>Container use करके भी DIP तोड़ सकते हो: हर जगह concrete <code>SqlOrderRepository</code> inject करना, या <code>IServiceProvider</code> inject करके <code>GetService</code> call करना (Service Locator)।</li>
<li>"Inversion" का मतलब: abstraction <b>high-level</b> module की होती है (interface business code के पास रहता है); low-level detail उसे implement करती है।</li>
<li>IoC और बड़ा idea है: framework आपके code को call करता है (controllers, middleware, hosted services)।</li>
</ul>
<p>Follow-up: "Services कहाँ register करते हो?" — एक composition root में: <code>Program.cs</code>।</p>`,
        hg: `<ul>
<li><b>Principle → technique → tool.</b> Har ek agle ke bina bhi ho sakta hai: DIP + haath se DI bina container ke chalta hai.</li>
<li>Container use karke bhi DIP tod sakte ho: har jagah concrete <code>SqlOrderRepository</code> inject karna, ya <code>IServiceProvider</code> inject karke <code>GetService</code> call karna (Service Locator).</li>
<li>"Inversion" ka matlab: abstraction <b>high-level</b> module ki hoti hai (interface business code ke paas rehta hai); low-level detail use implement karti hai.</li>
<li>IoC aur bada idea hai: framework aapke code ko call karta hai (controllers, middleware, hosted services).</li>
</ul>
<p>Follow-up: "Services kahan register karte ho?" — ek composition root mein: <code>Program.cs</code>.</p>`
      }
    },
    {
      id: "solid-over-engineering",
      depth: "short",
      q: "Can SOLID be overdone? How do you avoid over-engineering?",
      answer: "Yes. An interface per class, factories for single constructors and layers for simple CRUD add cost without benefit. I abstract at real boundaries and where change has already happened twice (YAGNI, rule of three).",
      meaning: {
        hi: "हाँ। हर class पर interface, एक constructor के लिए factory और simple CRUD के लिए layers बिना फ़ायदे के लागत बढ़ाते हैं। मैं असली boundaries पर और वहाँ abstract करता हूँ जहाँ बदलाव दो बार हो चुका हो (YAGNI, rule of three)।",
        hg: "Haan. Har class par interface, ek constructor ke liye factory aur simple CRUD ke liye layers bina fayde ke laagat badhate hain. Main asli boundaries par aur wahan abstract karta hoon jahan badlaav do baar ho chuka ho (YAGNI, rule of three)."
      },
      explain: {
        en: `<ul>
<li>Cost of abstraction: more files, indirection when debugging, onboarding time. It must buy something: a fake in tests, a second implementation, a stable boundary.</li>
<li>Smells: <code>IFooService</code>/<code>FooService</code> pairs with one implementation; <code>IRepository&lt;T&gt;</code> over EF Core "to swap the DB"; abstract base with one child.</li>
<li>Heuristics: <b>YAGNI</b>; <b>rule of three</b> (duplicate twice, abstract the third time); start concrete and extract an interface when the need appears (it is cheap in an IDE).</li>
<li>Under-engineering is real too: 1500-line classes with <code>new</code> everywhere. Aim for the middle.</li>
</ul>
<p><b>TL angle:</b> write the <i>reason</i> in the review comment so the team learns the judgement.</p>`,
        hi: `<ul>
<li>Abstraction की लागत: ज़्यादा files, debugging में indirection, नए लोगों का onboarding time। उसे कुछ ख़रीदना चाहिए: tests में fake, दूसरी implementation, stable boundary।</li>
<li>Smells: एक implementation वाले <code>IFooService</code>/<code>FooService</code> जोड़े; EF Core के ऊपर "DB बदलने के लिए" <code>IRepository&lt;T&gt;</code>; एक child वाली abstract base।</li>
<li>Heuristics: <b>YAGNI</b>; <b>rule of three</b> (दो बार duplicate करो, तीसरी बार abstract); concrete से शुरू करो और ज़रूरत पड़ने पर interface निकालो (IDE में सस्ता है)।</li>
<li>Under-engineering भी असली है: हर जगह <code>new</code> वाली 1500-line classes। बीच का रास्ता लो।</li>
</ul>
<p><b>TL angle:</b> review comment में <i>वजह</i> लिखो ताकि team judgement सीखे।</p>`,
        hg: `<ul>
<li>Abstraction ki laagat: zyada files, debugging mein indirection, naye logon ka onboarding time. Use kuch kharidna chahiye: tests mein fake, doosri implementation, stable boundary.</li>
<li>Smells: ek implementation wale <code>IFooService</code>/<code>FooService</code> jode; EF Core ke upar "DB badalne ke liye" <code>IRepository&lt;T&gt;</code>; ek child wali abstract base.</li>
<li>Heuristics: <b>YAGNI</b>; <b>rule of three</b> (do baar duplicate karo, teesri baar abstract); concrete se shuru karo aur zaroorat padne par interface nikalo (IDE mein sasta hai).</li>
<li>Under-engineering bhi asli hai: har jagah <code>new</code> wali 1500-line classes. Beech ka raasta lo.</li>
</ul>
<p><b>TL angle:</b> review comment mein <i>wajah</i> likho taaki team judgement seekhe.</p>`
      }
    },
    {
      id: "solid-code-review",
      depth: "short",
      q: "How do you apply SOLID during code review as a Tech Lead?",
      answer: "I ask change-cost questions instead of quoting principles: who else changes this class, what happens when we add a fourth case, can we fake this in a test. I flag over-abstraction as readily as missing abstraction.",
      meaning: {
        hi: "मैं principles quote करने की जगह change-cost के सवाल पूछता हूँ: इस class को और कौन बदलवाता है, चौथा case जोड़ेंगे तो क्या होगा, क्या इसे test में fake कर सकते हैं। Over-abstraction को भी उतनी ही आसानी से flag करता हूँ जितना missing abstraction को।",
        hg: "Main principles quote karne ki jagah change-cost ke sawaal poochta hoon: is class ko aur kaun badalwata hai, chautha case jodenge to kya hoga, kya ise test mein fake kar sakte hain. Over-abstraction ko bhi utni hi aasani se flag karta hoon jitna missing abstraction ko."
      },
      explain: {
        en: `<ul>
<li><b>S:</b> long class, "Manager" name, 8+ constructor parameters. <b>O:</b> repeated <code>switch</code> on type. <b>L:</b> overrides that throw, <code>is</code> checks. <b>I:</b> empty/throwing interface members. <b>D:</b> <code>new</code> of services, <code>DateTime.Now</code>, <code>File.*</code> inside business logic.</li>
<li>Phrase comments as questions with a consequence; link to the team's convention doc.</li>
<li>Prefer small, incremental refactor PRs over one giant "SOLID rewrite".</li>
<li>Block the PR only for real risk (hard-coded I/O in domain logic, broken contract); otherwise suggest and create a follow-up ticket.</li>
</ul>
<p>Follow-up: "A senior insists on an interface for every class — what do you do?" — ask what it buys (fake? second implementation?), agree on a team guideline, and revisit it in a retro.</p>`,
        hi: `<ul>
<li><b>S:</b> लंबी class, "Manager" नाम, 8+ constructor parameters। <b>O:</b> type पर दोहराया हुआ <code>switch</code>। <b>L:</b> throw करने वाले overrides, <code>is</code> checks। <b>I:</b> ख़ाली/throw करने वाले interface members। <b>D:</b> business logic के अंदर services का <code>new</code>, <code>DateTime.Now</code>, <code>File.*</code>।</li>
<li>Comments को नतीजे वाले सवाल की तरह लिखो; team की convention doc का link दो।</li>
<li>एक बड़े "SOLID rewrite" की जगह छोटे, incremental refactor PRs पसंद करो।</li>
<li>PR को सिर्फ़ असली risk पर रोको (domain logic में hard-coded I/O, टूटा हुआ contract); बाकी में suggest करो और follow-up ticket बनाओ।</li>
</ul>
<p>Follow-up: "Senior हर class के लिए interface पर अड़ा है — क्या करोगे?" — पूछो इससे क्या मिलता है (fake? दूसरी implementation?), team guideline तय करो और retro में दोबारा देखो।</p>`,
        hg: `<ul>
<li><b>S:</b> lambi class, "Manager" naam, 8+ constructor parameters. <b>O:</b> type par dohraya hua <code>switch</code>. <b>L:</b> throw karne wale overrides, <code>is</code> checks. <b>I:</b> khaali/throw karne wale interface members. <b>D:</b> business logic ke andar services ka <code>new</code>, <code>DateTime.Now</code>, <code>File.*</code>.</li>
<li>Comments ko nateeje wale sawaal ki tarah likho; team ki convention doc ka link do.</li>
<li>Ek bade "SOLID rewrite" ki jagah chhote, incremental refactor PRs pasand karo.</li>
<li>PR ko sirf asli risk par roko (domain logic mein hard-coded I/O, toota hua contract); baaki mein suggest karo aur follow-up ticket banao.</li>
</ul>
<p>Follow-up: "Senior har class ke liye interface par ada hai — kya karoge?" — poochho isse kya milta hai (fake? doosri implementation?), team guideline tay karo aur retro mein dobara dekho.</p>`
      }
    },
    {
      id: "switch-always-violation",
      depth: "detailed",
      q: "Is every switch statement an Open/Closed violation?",
      answer: "No. A switch over a small, closed set that will not grow is simple and clear. It becomes an OCP smell when the same type-switch grows with each feature or is repeated in several places.",
      meaning: {
        hi: "नहीं। छोटे, closed set पर switch जो बढ़ेगा नहीं, सीधा और साफ़ है। वो OCP smell तब बनता है जब वही type-switch हर feature के साथ बढ़े या कई जगह दोहराया जाए।",
        hg: "Nahi. Chhote, closed set par switch jo badhega nahi, seedha aur saaf hai. Woh OCP smell tab banta hai jab wahi type-switch har feature ke saath badhe ya kai jagah dohraya jaye."
      },
      explain: {
        en: `<ul>
<li>Fine: days of week, a fixed protocol message type, mapping at the edge of the system (e.g. parsing an incoming enum), switch expressions that the compiler checks for exhaustiveness.</li>
<li>Smell: <code>switch (customer.Type)</code> in pricing, again in invoices, again in emails. Adding a type means finding every switch.</li>
<li>Options: polymorphism (a virtual method or strategy), a dictionary of handlers registered in DI, or keep the one switch in a <b>single factory</b> so the rest of the code is closed.</li>
<li>Even a factory with a switch is usually acceptable: the switch is in <i>one</i> place.</li>
</ul>
<p>Follow-up: "Isn't the DI registration list also a switch?" — Yes, but it is a single composition root, not scattered business logic.</p>`,
        hi: `<ul>
<li>ठीक है: हफ़्ते के दिन, fixed protocol message type, system के किनारे पर mapping (जैसे incoming enum parse करना), switch expressions जिन्हें compiler exhaustiveness के लिए check करता है।</li>
<li>Smell: pricing में <code>switch (customer.Type)</code>, फिर invoices में, फिर emails में। नया type जोड़ने का मतलब हर switch ढूँढना।</li>
<li>Options: polymorphism (virtual method या strategy), DI में register किए handlers की dictionary, या एक switch को <b>एक factory</b> में रखो ताकि बाकी code closed रहे।</li>
<li>Switch वाली factory भी आमतौर पर चल जाती है: switch <i>एक</i> जगह है।</li>
</ul>
<p>Follow-up: "DI registration की list भी तो एक switch जैसी है?" — हाँ, पर वो एक composition root है, बिखरी हुई business logic नहीं।</p>`,
        hg: `<ul>
<li>Theek hai: hafte ke din, fixed protocol message type, system ke kinare par mapping (jaise incoming enum parse karna), switch expressions jinhe compiler exhaustiveness ke liye check karta hai.</li>
<li>Smell: pricing mein <code>switch (customer.Type)</code>, phir invoices mein, phir emails mein. Naya type jodne ka matlab har switch dhoondhna.</li>
<li>Options: polymorphism (virtual method ya strategy), DI mein register kiye handlers ki dictionary, ya ek switch ko <b>ek factory</b> mein rakho taaki baaki code closed rahe.</li>
<li>Switch wali factory bhi aamtaur par chal jaati hai: switch <i>ek</i> jagah hai.</li>
</ul>
<p>Follow-up: "DI registration ki list bhi to ek switch jaisi hai?" — Haan, par woh ek composition root hai, bikhri hui business logic nahi.</p>`
      }
    },
    {
      id: "lsp-dotnet",
      depth: "detailed",
      q: "Does .NET itself violate LSP? What about ReadOnlyCollection and Stream?",
      answer: "Partly, and it is documented. ICollection<T>.Add can throw NotSupportedException on a read-only collection, and Stream exposes CanRead, CanWrite and CanSeek because not every stream supports everything. Those are known compromises; I avoid copying them in new designs.",
      meaning: {
        hi: "कुछ हद तक, और यह documented है। Read-only collection पर ICollection<T>.Add NotSupportedException फेंक सकता है, और Stream में CanRead, CanWrite, CanSeek हैं क्योंकि हर stream सब कुछ support नहीं करता। ये जाने-माने compromises हैं; नए designs में मैं इन्हें दोहराता नहीं।",
        hg: "Kuch had tak, aur yeh documented hai. Read-only collection par ICollection<T>.Add NotSupportedException phenk sakta hai, aur Stream mein CanRead, CanWrite, CanSeek hain kyunki har stream sab kuch support nahi karta. Yeh jaane-maane compromises hain; naye designs mein main inhe dohrata nahi."
      },
      explain: {
        en: `<ul>
<li><b>ReadOnlyCollection&lt;T&gt;</b> implements <code>IList&lt;T&gt;</code>/<code>ICollection&lt;T&gt;</code>. Its mutating methods throw <code>NotSupportedException</code>; <code>IsReadOnly</code> returns <code>true</code>. Callers could check the flag, but few do.</li>
<li><b>Stream</b>: base class where writing/seeking is optional; a read-only <code>MemoryStream</code> has <code>CanWrite == false</code> and <code>Write</code> throws. Capability flags are the way the API makes the "not always" explicit.</li>
<li><b>Later .NET design</b> prefers splitting: <code>IReadOnlyList&lt;T&gt;</code>, <code>IReadOnlyDictionary&lt;K,V&gt;</code>, <code>ImmutableArray&lt;T&gt;</code>. (Arrays also implement <code>IList&lt;T&gt;</code> yet <code>Add</code> throws for fixed size — same family of compromise.)</li>
<li>In your own code: take <code>IReadOnlyList&lt;T&gt;</code> parameters and return <code>IReadOnlyList&lt;T&gt;</code>/<code>IEnumerable&lt;T&gt;</code>, rather than exposing <code>List&lt;T&gt;</code> or a mutable interface you cannot honour.</li>
</ul>
<p>Follow-up: "Why did the framework do this?" — .NET 1.0/2.0 shipped before the read-only interfaces existed (<code>IReadOnlyList&lt;T&gt;</code> arrived in .NET 4.5); compatibility keeps it alive.</p>`,
        hi: `<ul>
<li><b>ReadOnlyCollection&lt;T&gt;</b> <code>IList&lt;T&gt;</code>/<code>ICollection&lt;T&gt;</code> implement करता है। उसके बदलने वाले methods <code>NotSupportedException</code> फेंकते हैं; <code>IsReadOnly</code> <code>true</code> देता है। Callers flag check कर सकते थे, पर कम ही करते हैं।</li>
<li><b>Stream</b>: base class जहाँ writing/seeking optional है; read-only <code>MemoryStream</code> में <code>CanWrite == false</code> होता है और <code>Write</code> exception फेंकता है। Capability flags API का तरीक़ा हैं "हमेशा नहीं" को साफ़ बताने का।</li>
<li><b>बाद का .NET design</b> बाँटना पसंद करता है: <code>IReadOnlyList&lt;T&gt;</code>, <code>IReadOnlyDictionary&lt;K,V&gt;</code>, <code>ImmutableArray&lt;T&gt;</code>। (Arrays भी <code>IList&lt;T&gt;</code> implement करते हैं पर fixed size की वजह से <code>Add</code> फेंकता है — उसी परिवार का compromise।)</li>
<li>अपने code में: <code>IReadOnlyList&lt;T&gt;</code> parameters लो और <code>IReadOnlyList&lt;T&gt;</code>/<code>IEnumerable&lt;T&gt;</code> return करो, <code>List&lt;T&gt;</code> या ऐसा mutable interface expose मत करो जिसे निभा न सको।</li>
</ul>
<p>Follow-up: "Framework ने ऐसा क्यों किया?" — .NET 1.0/2.0 read-only interfaces से पहले आए (<code>IReadOnlyList&lt;T&gt;</code> .NET 4.5 में आया); compatibility की वजह से यह बना हुआ है।</p>`,
        hg: `<ul>
<li><b>ReadOnlyCollection&lt;T&gt;</b> <code>IList&lt;T&gt;</code>/<code>ICollection&lt;T&gt;</code> implement karta hai. Uske badalne wale methods <code>NotSupportedException</code> phenkte hain; <code>IsReadOnly</code> <code>true</code> deta hai. Callers flag check kar sakte the, par kam hi karte hain.</li>
<li><b>Stream</b>: base class jahan writing/seeking optional hai; read-only <code>MemoryStream</code> mein <code>CanWrite == false</code> hota hai aur <code>Write</code> exception phenkta hai. Capability flags API ka tareeka hain "hamesha nahi" ko saaf batane ka.</li>
<li><b>Baad ka .NET design</b> baantna pasand karta hai: <code>IReadOnlyList&lt;T&gt;</code>, <code>IReadOnlyDictionary&lt;K,V&gt;</code>, <code>ImmutableArray&lt;T&gt;</code>. (Arrays bhi <code>IList&lt;T&gt;</code> implement karte hain par fixed size ki wajah se <code>Add</code> phenkta hai — usi parivar ka compromise.)</li>
<li>Apne code mein: <code>IReadOnlyList&lt;T&gt;</code> parameters lo aur <code>IReadOnlyList&lt;T&gt;</code>/<code>IEnumerable&lt;T&gt;</code> return karo, <code>List&lt;T&gt;</code> ya aisa mutable interface expose mat karo jise nibha na sako.</li>
</ul>
<p>Follow-up: "Framework ne aisa kyun kiya?" — .NET 1.0/2.0 read-only interfaces se pehle aaye (<code>IReadOnlyList&lt;T&gt;</code> .NET 4.5 mein aaya); compatibility ki wajah se yeh bana hua hai.</p>`
      }
    },
    {
      id: "lsp-contract-rules",
      depth: "detailed",
      q: "What rules must a subclass follow to respect Liskov Substitution?",
      answer: "It must not demand more than the parent (no stronger preconditions), must not deliver less (no weaker postconditions), must keep the parent's invariants, and must not throw exceptions the parent's contract does not allow.",
      meaning: {
        hi: "Subclass parent से ज़्यादा न माँगे (कोई stronger preconditions नहीं), कम न दे (कोई weaker postconditions नहीं), parent के invariants बनाए रखे, और ऐसी exceptions न फेंके जो parent का contract allow नहीं करता।",
        hg: "Subclass parent se zyada na maange (koi stronger preconditions nahi), kam na de (koi weaker postconditions nahi), parent ke invariants banaye rakhe, aur aisi exceptions na phenke jo parent ka contract allow nahi karta."
      },
      explain: {
        en: `<ul>
<li><b>Preconditions</b> (what the caller must supply): child may relax them, never tighten. Parent accepts any positive amount; child must not add "and under 10,000".</li>
<li><b>Postconditions</b> (what the method guarantees): child may strengthen, never weaken. Parent returns a non-null list; child must not return <code>null</code>.</li>
<li><b>Invariants</b>: the Square/Rectangle problem — "width and height vary independently" is an invariant of Rectangle's contract.</li>
<li><b>Exceptions</b>: do not add new exception types for situations the parent handled.</li>
<li>C# helps a little: return types can be more specific (covariant returns on overrides since C# 9), and <code>in</code>/<code>out</code> generic variance keeps type-safety (<code>IEnumerable&lt;Dog&gt;</code> to <code>IEnumerable&lt;Animal&gt;</code>). The compiler cannot check behavioural rules — tests and contract documentation do.</li>
</ul>
<p>Follow-up: "How do you test LSP?" — write one test suite against the base contract and run it against every implementation.</p>`,
        hi: `<ul>
<li><b>Preconditions</b> (caller को क्या देना है): child ढीला कर सकता है, कसना नहीं। Parent कोई भी positive amount लेता है; child "और 10,000 से कम" नहीं जोड़ सकता।</li>
<li><b>Postconditions</b> (method क्या guarantee करता है): child मज़बूत कर सकता है, कमज़ोर नहीं। Parent non-null list देता है; child <code>null</code> नहीं दे सकता।</li>
<li><b>Invariants</b>: Square/Rectangle की समस्या — "width और height अलग-अलग बदलती हैं" Rectangle के contract का invariant है।</li>
<li><b>Exceptions</b>: उन हालात के लिए नई exception types मत जोड़ो जो parent सँभालता था।</li>
<li>C# थोड़ी मदद करता है: return types ज़्यादा specific हो सकते हैं (C# 9 से overrides में covariant returns), और <code>in</code>/<code>out</code> generic variance type-safety बनाए रखती है (<code>IEnumerable&lt;Dog&gt;</code> से <code>IEnumerable&lt;Animal&gt;</code>)। Behavioural rules compiler check नहीं कर सकता — tests और contract documentation करते हैं।</li>
</ul>
<p>Follow-up: "LSP को test कैसे करोगे?" — base contract के against एक test suite लिखो और हर implementation पर चलाओ।</p>`,
        hg: `<ul>
<li><b>Preconditions</b> (caller ko kya dena hai): child dheela kar sakta hai, kasna nahi. Parent koi bhi positive amount leta hai; child "aur 10,000 se kam" nahi jod sakta.</li>
<li><b>Postconditions</b> (method kya guarantee karta hai): child mazboot kar sakta hai, kamzor nahi. Parent non-null list deta hai; child <code>null</code> nahi de sakta.</li>
<li><b>Invariants</b>: Square/Rectangle ki samasya — "width aur height alag-alag badalti hain" Rectangle ke contract ka invariant hai.</li>
<li><b>Exceptions</b>: un haalaat ke liye nayi exception types mat jodo jo parent sambhalta tha.</li>
<li>C# thodi madad karta hai: return types zyada specific ho sakte hain (C# 9 se overrides mein covariant returns), aur <code>in</code>/<code>out</code> generic variance type-safety banaye rakhti hai (<code>IEnumerable&lt;Dog&gt;</code> se <code>IEnumerable&lt;Animal&gt;</code>). Behavioural rules compiler check nahi kar sakta — tests aur contract documentation karte hain.</li>
</ul>
<p>Follow-up: "LSP ko test kaise karoge?" — base contract ke against ek test suite likho aur har implementation par chalao.</p>`
      }
    },
    {
      id: "di-lifetimes-captive",
      depth: "detailed",
      q: "Which DI lifetimes exist in .NET and what is a captive dependency?",
      answer: "Transient creates a new instance per resolve, Scoped one per scope (a web request), Singleton one for the app. A captive dependency is a longer-lived service holding a shorter-lived one, such as a singleton injecting a scoped DbContext.",
      meaning: {
        hi: "Transient हर resolve पर नया instance बनाता है, Scoped हर scope (web request) में एक, Singleton पूरे app में एक। Captive dependency तब है जब लंबी उम्र वाली service छोटी उम्र वाली को पकड़े रखे, जैसे singleton में scoped DbContext inject करना।",
        hg: "Transient har resolve par naya instance banata hai, Scoped har scope (web request) mein ek, Singleton poore app mein ek. Captive dependency tab hai jab lambi umar wali service chhoti umar wali ko pakde rakhe, jaise singleton mein scoped DbContext inject karna."
      },
      explain: {
        en: `<ul>
<li><b>Rule:</b> a service may depend on services with the <b>same or longer</b> lifetime, not shorter. Singleton → Scoped is the bug.</li>
<li>Why it hurts: the scoped object lives for the app's lifetime, is shared between concurrent requests (thread-safety), and holds stale state.</li>
<li>Detection: the host enables scope validation in the Development environment, so the error appears at startup/first resolve; <code>ServiceProviderOptions.ValidateScopes</code> turns it on elsewhere. (A manually built provider has it off by default.)</li>
<li>Fix: inject <code>IServiceScopeFactory</code> and create a scope per unit of work, or use <code>IDbContextFactory&lt;T&gt;</code> for contexts (see Day 5); or make the consumer scoped too.</li>
<li>Also: singletons must be thread-safe. Transient <code>IDisposable</code> services resolved from the root provider are kept alive until the provider is disposed — resolve from a scope.</li>
</ul>
<p>Follow-up: "Is <code>HttpClient</code> a singleton?" — use <code>IHttpClientFactory</code> (Day 7); it manages handler lifetime for you.</p>`,
        hi: `<ul>
<li><b>Rule:</b> service उन services पर depend कर सकती है जिनकी उम्र <b>बराबर या ज़्यादा</b> हो, कम नहीं। Singleton → Scoped bug है।</li>
<li>नुकसान क्यों: scoped object app की पूरी उम्र जीता है, concurrent requests में share होता है (thread-safety) और पुराना state रखता है।</li>
<li>Detection: host Development environment में scope validation चालू रखता है, इसलिए error startup/पहले resolve पर दिखता है; बाकी जगह <code>ServiceProviderOptions.ValidateScopes</code> से चालू करो। (हाथ से बने provider में यह default off है।)</li>
<li>Fix: <code>IServiceScopeFactory</code> inject करो और हर unit of work का scope बनाओ, या contexts के लिए <code>IDbContextFactory&lt;T&gt;</code> (Day 5 देखो); या consumer को भी scoped बनाओ।</li>
<li>और: singletons को thread-safe होना चाहिए। Root provider से resolve हुई transient <code>IDisposable</code> services provider dispose होने तक ज़िंदा रहती हैं — scope से resolve करो।</li>
</ul>
<p>Follow-up: "क्या <code>HttpClient</code> singleton है?" — <code>IHttpClientFactory</code> use करो (Day 7); वो handler का lifetime सँभालता है।</p>`,
        hg: `<ul>
<li><b>Rule:</b> service un services par depend kar sakti hai jinki umar <b>barabar ya zyada</b> ho, kam nahi. Singleton → Scoped bug hai.</li>
<li>Nuksaan kyun: scoped object app ki poori umar jeeta hai, concurrent requests mein share hota hai (thread-safety) aur purana state rakhta hai.</li>
<li>Detection: host Development environment mein scope validation chalu rakhta hai, isliye error startup/pehle resolve par dikhta hai; baaki jagah <code>ServiceProviderOptions.ValidateScopes</code> se chalu karo. (Haath se bane provider mein yeh default off hai.)</li>
<li>Fix: <code>IServiceScopeFactory</code> inject karo aur har unit of work ka scope banao, ya contexts ke liye <code>IDbContextFactory&lt;T&gt;</code> (Day 5 dekho); ya consumer ko bhi scoped banao.</li>
<li>Aur: singletons ko thread-safe hona chahiye. Root provider se resolve hui transient <code>IDisposable</code> services provider dispose hone tak zinda rehti hain — scope se resolve karo.</li>
</ul>
<p>Follow-up: "Kya <code>HttpClient</code> singleton hai?" — <code>IHttpClientFactory</code> use karo (Day 7); woh handler ka lifetime sambhalta hai.</p>`
      }
    },
    {
      id: "service-locator-antipattern",
      depth: "detailed",
      q: "Why is injecting IServiceProvider and calling GetService considered an anti-pattern?",
      answer: "It hides dependencies, so the constructor no longer shows what the class needs, and failures move from startup to runtime. It also makes tests harder. I inject the actual dependencies, keeping the container only in the composition root.",
      meaning: {
        hi: "यह dependencies छुपाता है, इसलिए constructor अब नहीं बताता कि class को क्या चाहिए, और failures startup से runtime पर चले जाते हैं। Tests भी मुश्किल होते हैं। मैं असली dependencies inject करता हूँ और container सिर्फ़ composition root में रखता हूँ।",
        hg: "Yeh dependencies chhupata hai, isliye constructor ab nahi batata ki class ko kya chahiye, aur failures startup se runtime par chale jaate hain. Tests bhi mushkil hote hain. Main asli dependencies inject karta hoon aur container sirf composition root mein rakhta hoon."
      },
      explain: {
        en: `<ul>
<li><b>Service Locator</b> = ask a global registry for what you need, when you need it.</li>
<li>Problems: hidden dependencies; a missing registration blows up in production on that code path, not at startup; tests must build a container or fake the provider; it invites captive-dependency bugs.</li>
<li>Legitimate uses of <code>IServiceProvider</code>: framework or infrastructure code (middleware factories, a plug-in loader), creating scopes in a background worker (<code>IServiceScopeFactory</code>), or resolving a dependency chosen at runtime (a keyed service, or a small factory).</li>
<li>For "choose implementation by key" prefer keyed services (<code>[FromKeyedServices]</code>, .NET 8+) or a small factory over a locator.</li>
</ul>
<p>Follow-up: "Isn't the container itself a service locator?" — The container is a tool; the anti-pattern is spreading it into business code.</p>`,
        hi: `<ul>
<li><b>Service Locator</b> = जो चाहिए वो एक global registry से, जब चाहिए तब माँगना।</li>
<li>समस्याएँ: छुपी dependencies; missing registration startup पर नहीं, उस code path पर production में फटती है; tests को container बनाना या provider fake करना पड़ता है; captive-dependency bugs को न्योता।</li>
<li><code>IServiceProvider</code> के जायज़ use: framework या infrastructure code (middleware factories, plug-in loader), background worker में scopes बनाना (<code>IServiceScopeFactory</code>), या runtime पर चुनी dependency resolve करना (keyed service, या छोटी factory)।</li>
<li>"Key से implementation चुनना" हो तो locator की जगह keyed services (<code>[FromKeyedServices]</code>, .NET 8+) या छोटी factory पसंद करो।</li>
</ul>
<p>Follow-up: "क्या container ख़ुद service locator नहीं है?" — Container एक tool है; anti-pattern उसे business code में फैलाना है।</p>`,
        hg: `<ul>
<li><b>Service Locator</b> = jo chahiye woh ek global registry se, jab chahiye tab maangna.</li>
<li>Samasyaein: chhupi dependencies; missing registration startup par nahi, us code path par production mein phatti hai; tests ko container banana ya provider fake karna padta hai; captive-dependency bugs ko nyota.</li>
<li><code>IServiceProvider</code> ke jaayaz use: framework ya infrastructure code (middleware factories, plug-in loader), background worker mein scopes banana (<code>IServiceScopeFactory</code>), ya runtime par chuni dependency resolve karna (keyed service, ya chhoti factory).</li>
<li>"Key se implementation chunna" ho to locator ki jagah keyed services (<code>[FromKeyedServices]</code>, .NET 8+) ya chhoti factory pasand karo.</li>
</ul>
<p>Follow-up: "Kya container khud service locator nahi hai?" — Container ek tool hai; anti-pattern use business code mein failana hai.</p>`
      }
    },
    {
      id: "too-many-ctor-params",
      depth: "detailed",
      q: "A class's constructor takes 9 dependencies. What does that tell you and what do you do?",
      answer: "It is usually a Single Responsibility violation: the class does too many jobs. I look for clusters of dependencies that belong together and extract them into a smaller collaborator, instead of hiding the problem behind a facade or property injection.",
      meaning: {
        hi: "यह अक्सर Single Responsibility violation है: class बहुत सारे काम कर रही है। मैं साथ रहने वाली dependencies के clusters ढूँढकर उन्हें छोटे collaborator में निकालता हूँ, समस्या को facade या property injection के पीछे नहीं छुपाता।",
        hg: "Yeh aksar Single Responsibility violation hai: class bahut saare kaam kar rahi hai. Main saath rehne wali dependencies ke clusters dhoondhkar unhe chhote collaborator mein nikalta hoon, samasya ko facade ya property injection ke peeche nahi chhupata."
      },
      explain: {
        en: `<ul>
<li>Constructor injection exposes design smells honestly — that is a feature, not a flaw.</li>
<li>Look for clusters: (<code>IPriceCalculator</code>, <code>IDiscountPolicy</code>, <code>ITaxService</code>) → one <code>PricingService</code>; (<code>IEmailSender</code>, <code>ISmsSender</code>) → <code>INotifier</code>.</li>
<li>Avoid: switching to property injection (hides the problem), a bag-of-services "aggregate" with no meaning, or injecting <code>IServiceProvider</code>.</li>
<li>Maybe fine: a composition/orchestrator class (an application service, a controller) with 4–5 collaborators. A fixed number is not a rule; cohesion is.</li>
<li>Check each method: does it use all dependencies, or does each use a different subset? Different subsets = several classes hiding in one.</li>
</ul>
<p>Follow-up: "What is the 'Facade Service' pitfall?" — wrapping 5 dependencies in one class just to reduce the constructor count, without a real concept, moves the smell instead of fixing it.</p>`,
        hi: `<ul>
<li>Constructor injection design smells को ईमानदारी से दिखाता है — यह feature है, कमी नहीं।</li>
<li>Clusters ढूँढो: (<code>IPriceCalculator</code>, <code>IDiscountPolicy</code>, <code>ITaxService</code>) → एक <code>PricingService</code>; (<code>IEmailSender</code>, <code>ISmsSender</code>) → <code>INotifier</code>।</li>
<li>बचो: property injection पर जाना (समस्या छुपाता है), बिना मतलब की services का "aggregate" थैला, या <code>IServiceProvider</code> inject करना।</li>
<li>शायद ठीक: orchestrator/composition class (controller जैसी) जिसमें 4–5 collaborators हों। संख्या कोई rule नहीं; cohesion है।</li>
<li>हर method देखो: क्या वो सारी dependencies use करता है, या हर एक अलग subset? अलग subsets = एक में छुपी कई classes।</li>
</ul>
<p>Follow-up: "'Facade Service' pitfall क्या है?" — सिर्फ़ constructor की गिनती घटाने के लिए 5 dependencies को बिना असली concept के एक class में लपेटना; यह smell को ठीक नहीं करता, खिसका देता है।</p>`,
        hg: `<ul>
<li>Constructor injection design smells ko imaandaari se dikhata hai — yeh feature hai, kami nahi.</li>
<li>Clusters dhoondho: (<code>IPriceCalculator</code>, <code>IDiscountPolicy</code>, <code>ITaxService</code>) → ek <code>PricingService</code>; (<code>IEmailSender</code>, <code>ISmsSender</code>) → <code>INotifier</code>.</li>
<li>Bacho: property injection par jaana (samasya chhupata hai), bina matlab ki services ka "aggregate" thaila, ya <code>IServiceProvider</code> inject karna.</li>
<li>Shayad theek: orchestrator/composition class (controller jaisi) jismein 4–5 collaborators hon. Sankhya koi rule nahi; cohesion hai.</li>
<li>Har method dekho: kya woh saari dependencies use karta hai, ya har ek alag subset? Alag subsets = ek mein chhupi kai classes.</li>
</ul>
<p>Follow-up: "'Facade Service' pitfall kya hai?" — sirf constructor ki ginti ghatane ke liye 5 dependencies ko bina asli concept ke ek class mein lapetna; yeh smell ko theek nahi karta, khisaka deta hai.</p>`
      }
    },
    {
      id: "solid-patterns-testing",
      depth: "detailed",
      q: "How do SOLID, design patterns and unit testing connect?",
      answer: "Patterns are named solutions that apply SOLID ideas: Strategy for OCP, Decorator for OCP and SRP, Factory and DI for DIP. Following SOLID makes code testable because dependencies can be replaced by fakes.",
      meaning: {
        hi: "Patterns नाम वाले solutions हैं जो SOLID के ideas लागू करते हैं: OCP के लिए Strategy, OCP और SRP के लिए Decorator, DIP के लिए Factory और DI। SOLID follow करने से code testable बनता है क्योंकि dependencies की जगह fakes लगा सकते हैं।",
        hg: "Patterns naam wale solutions hain jo SOLID ke ideas lagu karte hain: OCP ke liye Strategy, OCP aur SRP ke liye Decorator, DIP ke liye Factory aur DI. SOLID follow karne se code testable banta hai kyunki dependencies ki jagah fakes laga sakte hain."
      },
      explain: {
        en: `<ul>
<li><b>Strategy</b> (Day 9–11): swap an algorithm behind an interface — OCP.</li>
<li><b>Decorator</b>: wrap an implementation to add logging/caching without editing it — OCP + SRP (cross-cutting concern in its own class).</li>
<li><b>Factory</b> / <b>DI</b>: creation is separated from use — DIP.</li>
<li><b>Tests</b>: DIP gives you a seam; SRP makes a class small enough to test; ISP makes fakes small; LSP guarantees a fake behaves like the real thing.</li>
<li>Connection to Day 1: all of this is <b>composition over inheritance</b> plus interface-based polymorphism.</li>
<li>Do not start from the pattern name. Start from the pain (a growing switch, a hard-to-test class), then pick the pattern.</li>
</ul>
<p>Follow-up: "Can you use a pattern and still violate SOLID?" — Yes: a Singleton that everything calls statically violates DIP.</p>`,
        hi: `<ul>
<li><b>Strategy</b> (Day 9–11): interface के पीछे algorithm बदलना — OCP।</li>
<li><b>Decorator</b>: बिना edit किए logging/caching जोड़ने के लिए implementation को लपेटना — OCP + SRP (cross-cutting concern अपनी class में)।</li>
<li><b>Factory</b> / <b>DI</b>: creation को use से अलग करना — DIP।</li>
<li><b>Tests</b>: DIP seam देता है; SRP class को test करने लायक छोटा रखता है; ISP fakes छोटे रखता है; LSP guarantee करता है कि fake असली जैसा behave करे।</li>
<li>Day 1 से जुड़ाव: यह सब <b>composition over inheritance</b> और interface-based polymorphism है।</li>
<li>Pattern के नाम से शुरू मत करो। दर्द से शुरू करो (बढ़ता switch, test करने में मुश्किल class), फिर pattern चुनो।</li>
</ul>
<p>Follow-up: "क्या pattern use करके भी SOLID तोड़ सकते हैं?" — हाँ: Singleton जिसे सब static तरीक़े से call करें, DIP तोड़ता है।</p>`,
        hg: `<ul>
<li><b>Strategy</b> (Day 9–11): interface ke peeche algorithm badalna — OCP.</li>
<li><b>Decorator</b>: bina edit kiye logging/caching jodne ke liye implementation ko lapetna — OCP + SRP (cross-cutting concern apni class mein).</li>
<li><b>Factory</b> / <b>DI</b>: creation ko use se alag karna — DIP.</li>
<li><b>Tests</b>: DIP seam deta hai; SRP class ko test karne layak chhota rakhta hai; ISP fakes chhote rakhta hai; LSP guarantee karta hai ki fake asli jaisa behave kare.</li>
<li>Day 1 se judaav: yeh sab <b>composition over inheritance</b> aur interface-based polymorphism hai.</li>
<li>Pattern ke naam se shuru mat karo. Dard se shuru karo (badhta switch, test karne mein mushkil class), phir pattern chuno.</li>
</ul>
<p>Follow-up: "Kya pattern use karke bhi SOLID tod sakte hain?" — Haan: Singleton jise sab static tareeke se call karein, DIP todta hai.</p>`
      }
    },
    {
      id: "solid-legacy-refactor",
      depth: "detailed",
      q: "You inherit a legacy 2000-line service with new everywhere. How do you move it toward SOLID safely?",
      answer: "I first add characterization tests, then introduce seams at the boundaries — extract an interface for I/O like the database, email and clock — and refactor in small steps, one responsibility at a time, with the tests green each time.",
      meaning: {
        hi: "पहले characterization tests जोड़ता हूँ, फिर boundaries पर seams बनाता हूँ — database, email और clock जैसे I/O के लिए interface निकालता हूँ — और छोटे steps में, एक बार में एक responsibility, हर बार tests green रखकर refactor करता हूँ।",
        hg: "Pehle characterization tests jodta hoon, phir boundaries par seams banata hoon — database, email aur clock jaise I/O ke liye interface nikalta hoon — aur chhote steps mein, ek baar mein ek responsibility, har baar tests green rakhkar refactor karta hoon."
      },
      explain: {
        en: `<ul>
<li><b>Step 0:</b> agree why — pick the part that hurts (changes often, has the most bugs). Do not refactor stable code for beauty.</li>
<li><b>Step 1:</b> characterization tests: pin down current behaviour, even if odd.</li>
<li><b>Step 2:</b> seams: extract interfaces for external effects (<code>TimeProvider</code> for time, <code>IEmailSender</code>, a file or HTTP gateway). Constructor-inject them; keep a default constructor temporarily if needed.</li>
<li><b>Step 3:</b> extract classes by responsibility (SRP), one per PR; replace big switches with strategies when they next change (OCP).</li>
<li><b>Step 4:</b> register in DI, delete the old paths. Use feature flags or the strangler approach for risky areas.</li>
<li>Communicate: small PRs, a short design note, and a "definition of done" so the team does not stall mid-way.</li>
</ul>
<p>Follow-up: "How do you convince the business?" — tie it to numbers: bug count, lead time, incidents in that module.</p>`,
        hi: `<ul>
<li><b>Step 0:</b> पहले वजह तय करो — वो हिस्सा चुनो जो दुखता है (अक्सर बदलता है, सबसे ज़्यादा bugs)। Stable code को सुंदरता के लिए refactor मत करो।</li>
<li><b>Step 1:</b> characterization tests: मौजूदा behaviour पक्का करो, चाहे अजीब हो।</li>
<li><b>Step 2:</b> seams: बाहरी effects के लिए interfaces निकालो (time के लिए <code>TimeProvider</code>, <code>IEmailSender</code>, file या HTTP gateway)। उन्हें constructor से inject करो; ज़रूरत हो तो अस्थायी default constructor रखो।</li>
<li><b>Step 3:</b> responsibility के हिसाब से classes निकालो (SRP), हर PR में एक; बड़े switches को अगली बार बदलते समय strategies से बदलो (OCP)।</li>
<li><b>Step 4:</b> DI में register करो, पुराने paths हटाओ। जोखिम वाले हिस्सों में feature flags या strangler approach।</li>
<li>Communicate करो: छोटे PRs, छोटा design note और "definition of done" ताकि team बीच में न रुके।</li>
</ul>
<p>Follow-up: "Business को कैसे मनाओगे?" — numbers से जोड़ो: bug count, lead time, उस module में incidents।</p>`,
        hg: `<ul>
<li><b>Step 0:</b> pehle wajah tay karo — woh hissa chuno jo dukhta hai (aksar badalta hai, sabse zyada bugs). Stable code ko sundarta ke liye refactor mat karo.</li>
<li><b>Step 1:</b> characterization tests: maujooda behaviour pakka karo, chahe ajeeb ho.</li>
<li><b>Step 2:</b> seams: bahari effects ke liye interfaces nikalo (time ke liye <code>TimeProvider</code>, <code>IEmailSender</code>, file ya HTTP gateway). Unhe constructor se inject karo; zaroorat ho to asthayi default constructor rakho.</li>
<li><b>Step 3:</b> responsibility ke hisaab se classes nikalo (SRP), har PR mein ek; bade switches ko agli baar badalte samay strategies se badlo (OCP).</li>
<li><b>Step 4:</b> DI mein register karo, purane paths hatao. Jokhim wale hisson mein feature flags ya strangler approach.</li>
<li>Communicate karo: chhote PRs, chhota design note aur "definition of done" taaki team beech mein na ruke.</li>
</ul>
<p>Follow-up: "Business ko kaise manaoge?" — numbers se jodo: bug count, lead time, us module mein incidents.</p>`
      }
    }
  ],
  puzzles: [
    {
      id: "lsp-rectangle-square",
      src: `Rectangle r = new Rectangle();
Rectangle s = new Square();
Console.WriteLine(Resize(r));
Console.WriteLine(Resize(s));
Console.WriteLine(s.GetType().Name);

static int Resize(Rectangle shape)
{
    shape.Width = 5;
    shape.Height = 4;
    return shape.Area;
}

class Rectangle
{
    public virtual int Width { get; set; }
    public virtual int Height { get; set; }
    public int Area => Width * Height;
}

class Square : Rectangle
{
    public override int Width
    {
        get => base.Width;
        set { base.Width = value; base.Height = value; }
    }

    public override int Height
    {
        get => base.Height;
        set { base.Width = value; base.Height = value; }
    }
}`,
      answer: "20\n16\nSquare",
      explain: {
        en: `<ul>
<li><code>Resize</code> expects independent sides: width 5, height 4 → area 20 for a real <code>Rectangle</code>.</li>
<li>For the <code>Square</code> both property setters are virtual and overridden, so the dispatch follows the object: setting <code>Height = 4</code> also sets Width to 4 → area 16.</li>
<li>It compiles and runs without any error, yet the caller got a wrong answer: an LSP violation.</li>
<li><code>GetType()</code> shows the real object type: <b>Square</b>.</li>
</ul>`,
        hi: `<ul>
<li><code>Resize</code> अलग-अलग sides की उम्मीद करता है: width 5, height 4 → असली <code>Rectangle</code> के लिए area 20।</li>
<li><code>Square</code> के दोनों property setters virtual हैं और override हुए हैं, इसलिए dispatch object को follow करता है: <code>Height = 4</code> set करने से Width भी 4 हो जाती है → area 16।</li>
<li>यह बिना किसी error के compile और run होता है, फिर भी caller को ग़लत जवाब मिला: LSP violation।</li>
<li><code>GetType()</code> असली object type दिखाता है: <b>Square</b>।</li>
</ul>`,
        hg: `<ul>
<li><code>Resize</code> alag-alag sides ki ummeed karta hai: width 5, height 4 → asli <code>Rectangle</code> ke liye area 20.</li>
<li><code>Square</code> ke dono property setters virtual hain aur override hue hain, isliye dispatch object ko follow karta hai: <code>Height = 4</code> set karne se Width bhi 4 ho jaati hai → area 16.</li>
<li>Yeh bina kisi error ke compile aur run hota hai, phir bhi caller ko galat jawab mila: LSP violation.</li>
<li><code>GetType()</code> asli object type dikhata hai: <b>Square</b>.</li>
</ul>`
      }
    },
    {
      id: "readonly-collection-lsp",
      src: `using System.Collections.ObjectModel;

var data = new List<int> { 1, 2 };
ICollection<int> a = new ReadOnlyCollection<int>(data);
ICollection<int> b = data;

Console.WriteLine($"{a.IsReadOnly} {b.IsReadOnly}");
Try(a);
Try(b);
Console.WriteLine(a.Count);

void Try(ICollection<int> c)
{
    try
    {
        c.Add(3);
        Console.WriteLine("added");
    }
    catch (NotSupportedException)
    {
        Console.WriteLine("NotSupported");
    }
}`,
      answer: "True False\nNotSupported\nadded\n3",
      explain: {
        en: `<ul>
<li><code>new ReadOnlyCollection&lt;int&gt;(data)</code> is a read-only <i>wrapper</i> over <code>data</code>; <code>IsReadOnly</code> is <code>True</code>. The plain list reports <code>False</code>.</li>
<li><code>Try(a)</code>: <code>Add</code> through <code>ICollection&lt;int&gt;</code> throws <code>NotSupportedException</code> → <b>NotSupported</b>. The caller compiled fine against the interface — the surprise is at runtime.</li>
<li><code>Try(b)</code> adds 3 to the real list → <b>added</b>.</li>
<li>Because the wrapper <i>shows</i> the underlying list, <code>a.Count</code> is now <b>3</b> — a read-only wrapper is not an immutable copy.</li>
<li>Lesson: ask for <code>IReadOnlyList&lt;T&gt;</code> if you only read.</li>
</ul>`,
        hi: `<ul>
<li><code>new ReadOnlyCollection&lt;int&gt;(data)</code>, <code>data</code> के ऊपर read-only <i>wrapper</i> है; <code>IsReadOnly</code> <code>True</code>। साधारण list <code>False</code> बताती है।</li>
<li><code>Try(a)</code>: <code>ICollection&lt;int&gt;</code> से <code>Add</code> <code>NotSupportedException</code> फेंकता है → <b>NotSupported</b>। Caller interface के against ठीक compile हुआ — surprise runtime पर है।</li>
<li><code>Try(b)</code> असली list में 3 जोड़ देता है → <b>added</b>।</li>
<li>Wrapper नीचे की list को <i>दिखाता</i> है, इसलिए अब <code>a.Count</code> <b>3</b> है — read-only wrapper immutable copy नहीं होता।</li>
<li>सीख: सिर्फ़ पढ़ना हो तो <code>IReadOnlyList&lt;T&gt;</code> माँगो।</li>
</ul>`,
        hg: `<ul>
<li><code>new ReadOnlyCollection&lt;int&gt;(data)</code>, <code>data</code> ke upar read-only <i>wrapper</i> hai; <code>IsReadOnly</code> <code>True</code>. Saadharan list <code>False</code> batati hai.</li>
<li><code>Try(a)</code>: <code>ICollection&lt;int&gt;</code> se <code>Add</code> <code>NotSupportedException</code> phenkta hai → <b>NotSupported</b>. Caller interface ke against theek compile hua — surprise runtime par hai.</li>
<li><code>Try(b)</code> asli list mein 3 jod deta hai → <b>added</b>.</li>
<li>Wrapper neeche ki list ko <i>dikhata</i> hai, isliye ab <code>a.Count</code> <b>3</b> hai — read-only wrapper immutable copy nahi hota.</li>
<li>Seekh: sirf padhna ho to <code>IReadOnlyList&lt;T&gt;</code> maango.</li>
</ul>`
      }
    },
    {
      id: "interface-reimplementation",
      src: `IGreeter g1 = new B();
IGreeter g2 = new C();
B b = new B();

g1.Hello();
b.Hello();
g2.Hello();

interface IGreeter { void Hello(); }

class A : IGreeter
{
    public void Hello() => Console.WriteLine("A");
}

class B : A
{
    public new void Hello() => Console.WriteLine("B");
}

class C : A, IGreeter
{
    public new void Hello() => Console.WriteLine("C");
}`,
      answer: "A\nB\nC",
      explain: {
        en: `<ul>
<li><code>A.Hello</code> is not virtual; it is just the method <code>A</code> mapped to <code>IGreeter.Hello</code>.</li>
<li><code>B</code> hides it with <code>new</code> but does <b>not</b> list <code>IGreeter</code> again, so the interface still maps to <code>A.Hello</code> → <code>g1.Hello()</code> prints <b>A</b>.</li>
<li><code>b.Hello()</code> uses the reference type <code>B</code> → <b>B</b>.</li>
<li><code>C</code> <b>re-implements</b> the interface (<code>: A, IGreeter</code>), so the interface maps to <code>C.Hello</code> → <b>C</b>.</li>
<li>Lesson for DIP/LSP: code that depends on the interface can get a surprise when a child merely hides a method. Use <code>virtual</code>/<code>override</code> for real polymorphism.</li>
</ul>`,
        hi: `<ul>
<li><code>A.Hello</code> virtual नहीं है; यह बस वो method है जिसे <code>A</code> ने <code>IGreeter.Hello</code> से map किया।</li>
<li><code>B</code> उसे <code>new</code> से hide करता है पर <code>IGreeter</code> को दोबारा list <b>नहीं</b> करता, इसलिए interface अब भी <code>A.Hello</code> पर map है → <code>g1.Hello()</code> <b>A</b> छापता है।</li>
<li><code>b.Hello()</code> reference type <code>B</code> use करता है → <b>B</b>।</li>
<li><code>C</code> interface को <b>re-implement</b> करता है (<code>: A, IGreeter</code>), इसलिए interface <code>C.Hello</code> पर map होता है → <b>C</b>।</li>
<li>DIP/LSP की सीख: जब child सिर्फ़ method hide करे तो interface पर depend करने वाले code को surprise मिल सकता है। असली polymorphism के लिए <code>virtual</code>/<code>override</code> use करो।</li>
</ul>`,
        hg: `<ul>
<li><code>A.Hello</code> virtual nahi hai; yeh bas woh method hai jise <code>A</code> ne <code>IGreeter.Hello</code> se map kiya.</li>
<li><code>B</code> use <code>new</code> se hide karta hai par <code>IGreeter</code> ko dobara list <b>nahi</b> karta, isliye interface ab bhi <code>A.Hello</code> par map hai → <code>g1.Hello()</code> <b>A</b> chhapta hai.</li>
<li><code>b.Hello()</code> reference type <code>B</code> use karta hai → <b>B</b>.</li>
<li><code>C</code> interface ko <b>re-implement</b> karta hai (<code>: A, IGreeter</code>), isliye interface <code>C.Hello</code> par map hota hai → <b>C</b>.</li>
<li>DIP/LSP ki seekh: jab child sirf method hide kare to interface par depend karne wale code ko surprise mil sakta hai. Asli polymorphism ke liye <code>virtual</code>/<code>override</code> use karo.</li>
</ul>`
      }
    },
    {
      id: "di-last-registration-wins",
      packages: ["Microsoft.Extensions.DependencyInjection"],
      src: `using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;

var services = new ServiceCollection();
services.AddTransient<IGreeter, EnglishGreeter>();
services.AddTransient<IGreeter, HindiGreeter>();
services.TryAddTransient<IGreeter, FrenchGreeter>();

using var provider = services.BuildServiceProvider();

Console.WriteLine(provider.GetRequiredService<IGreeter>().Name);
Console.WriteLine(string.Join(",", provider.GetServices<IGreeter>().Select(g => g.Name)));
Console.WriteLine(services.Count);

interface IGreeter { string Name { get; } }
class EnglishGreeter : IGreeter { public string Name => "English"; }
class HindiGreeter : IGreeter { public string Name => "Hindi"; }
class FrenchGreeter : IGreeter { public string Name => "French"; }`,
      answer: "Hindi\nEnglish,Hindi\n2",
      explain: {
        en: `<ul>
<li>Two <code>AddTransient&lt;IGreeter, …&gt;</code> calls register two implementations; the container keeps both.</li>
<li><code>GetRequiredService&lt;IGreeter&gt;()</code> returns the <b>last</b> registration → <b>Hindi</b>.</li>
<li><code>GetServices&lt;IGreeter&gt;()</code> returns <b>all</b> in registration order → <b>English,Hindi</b>.</li>
<li><code>TryAddTransient</code> adds only if the service type is not registered yet; <code>IGreeter</code> already is, so nothing is added and <code>services.Count</code> stays <b>2</b>.</li>
<li>Lesson: "last wins" is why libraries use <code>TryAdd…</code> for defaults, and why you can override a default in your own <code>Program.cs</code>.</li>
</ul>`,
        hi: `<ul>
<li>दो <code>AddTransient&lt;IGreeter, …&gt;</code> calls दो implementations register करते हैं; container दोनों रखता है।</li>
<li><code>GetRequiredService&lt;IGreeter&gt;()</code> <b>आख़िरी</b> registration देता है → <b>Hindi</b>।</li>
<li><code>GetServices&lt;IGreeter&gt;()</code> registration order में <b>सब</b> देता है → <b>English,Hindi</b>।</li>
<li><code>TryAddTransient</code> तभी जोड़ता है जब वो service type पहले से register न हो; <code>IGreeter</code> पहले से है, इसलिए कुछ नहीं जुड़ता और <code>services.Count</code> <b>2</b> रहता है।</li>
<li>सीख: "last wins" की वजह से libraries defaults के लिए <code>TryAdd…</code> use करती हैं, और आप अपने <code>Program.cs</code> में default override कर सकते हो।</li>
</ul>`,
        hg: `<ul>
<li>Do <code>AddTransient&lt;IGreeter, …&gt;</code> calls do implementations register karte hain; container dono rakhta hai.</li>
<li><code>GetRequiredService&lt;IGreeter&gt;()</code> <b>aakhri</b> registration deta hai → <b>Hindi</b>.</li>
<li><code>GetServices&lt;IGreeter&gt;()</code> registration order mein <b>sab</b> deta hai → <b>English,Hindi</b>.</li>
<li><code>TryAddTransient</code> tabhi jodta hai jab woh service type pehle se register na ho; <code>IGreeter</code> pehle se hai, isliye kuch nahi judta aur <code>services.Count</code> <b>2</b> rehta hai.</li>
<li>Seekh: "last wins" ki wajah se libraries defaults ke liye <code>TryAdd…</code> use karti hain, aur aap apne <code>Program.cs</code> mein default override kar sakte ho.</li>
</ul>`
      }
    },
    {
      id: "di-lifetimes-identity",
      packages: ["Microsoft.Extensions.DependencyInjection"],
      src: `using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection();
services.AddSingleton<SingletonSvc>();
services.AddScoped<ScopedSvc>();
services.AddTransient<TransientSvc>();

using var root = services.BuildServiceProvider();
using var scope1 = root.CreateScope();
using var scope2 = root.CreateScope();
var p1 = scope1.ServiceProvider;
var p2 = scope2.ServiceProvider;

Console.WriteLine("singleton across scopes: " + ReferenceEquals(p1.GetRequiredService<SingletonSvc>(), p2.GetRequiredService<SingletonSvc>()));
Console.WriteLine("scoped in same scope:    " + ReferenceEquals(p1.GetRequiredService<ScopedSvc>(), p1.GetRequiredService<ScopedSvc>()));
Console.WriteLine("scoped across scopes:    " + ReferenceEquals(p1.GetRequiredService<ScopedSvc>(), p2.GetRequiredService<ScopedSvc>()));
Console.WriteLine("transient in same scope: " + ReferenceEquals(p1.GetRequiredService<TransientSvc>(), p1.GetRequiredService<TransientSvc>()));

class SingletonSvc { }
class ScopedSvc { }
class TransientSvc { }`,
      answer: "singleton across scopes: True\nscoped in same scope:    True\nscoped across scopes:    False\ntransient in same scope: False",
      explain: {
        en: `<ul>
<li><b>Singleton</b>: one instance per root provider → same object even from two scopes → <b>True</b>.</li>
<li><b>Scoped</b>: one instance per scope (a web request) → same within <code>scope1</code> → <b>True</b>; different between <code>scope1</code> and <code>scope2</code> → <b>False</b>.</li>
<li><b>Transient</b>: a new instance on every resolve, even in the same scope → <b>False</b>.</li>
<li>Lesson: this is why a singleton should not hold a scoped service — it would be stuck with the first scope's instance (captive dependency).</li>
</ul>`,
        hi: `<ul>
<li><b>Singleton</b>: root provider पर एक instance → दो scopes से भी वही object → <b>True</b>।</li>
<li><b>Scoped</b>: हर scope (web request) में एक instance → <code>scope1</code> में वही → <b>True</b>; <code>scope1</code> और <code>scope2</code> के बीच अलग → <b>False</b>।</li>
<li><b>Transient</b>: हर resolve पर नया instance, एक ही scope में भी → <b>False</b>।</li>
<li>सीख: इसी वजह से singleton को scoped service नहीं पकड़नी चाहिए — वो पहले scope के instance में फँस जाएगा (captive dependency)।</li>
</ul>`,
        hg: `<ul>
<li><b>Singleton</b>: root provider par ek instance → do scopes se bhi wahi object → <b>True</b>.</li>
<li><b>Scoped</b>: har scope (web request) mein ek instance → <code>scope1</code> mein wahi → <b>True</b>; <code>scope1</code> aur <code>scope2</code> ke beech alag → <b>False</b>.</li>
<li><b>Transient</b>: har resolve par naya instance, ek hi scope mein bhi → <b>False</b>.</li>
<li>Seekh: isi wajah se singleton ko scoped service nahi pakadni chahiye — woh pehle scope ke instance mein phans jayega (captive dependency).</li>
</ul>`
      }
    },
    {
      id: "decorator-order",
      src: `IOrderService service =
    new LoggingDecorator(
        new TimingDecorator(
            new OrderService()));

service.Place("book");

interface IOrderService { void Place(string item); }

class OrderService : IOrderService
{
    public void Place(string item) => Console.WriteLine($"placing {item}");
}

class TimingDecorator : IOrderService
{
    private readonly IOrderService _inner;
    public TimingDecorator(IOrderService inner) => _inner = inner;

    public void Place(string item)
    {
        Console.WriteLine("timing: start");
        _inner.Place(item);
        Console.WriteLine("timing: stop");
    }
}

class LoggingDecorator : IOrderService
{
    private readonly IOrderService _inner;
    public LoggingDecorator(IOrderService inner) => _inner = inner;

    public void Place(string item)
    {
        Console.WriteLine($"log: before {item}");
        _inner.Place(item);
        Console.WriteLine("log: after");
    }
}`,
      answer: "log: before book\ntiming: start\nplacing book\ntiming: stop\nlog: after",
      explain: {
        en: `<ul>
<li>The caller holds only an <code>IOrderService</code> (DIP) — it does not know three objects are stacked.</li>
<li>Calls go from the <b>outside in</b>: Logging → Timing → real service, and unwind on the way out.</li>
<li>Output: log before → timing start → placing → timing stop → log after.</li>
<li>Logging and timing were added <b>without editing</b> <code>OrderService</code> (OCP) and each lives in its own class (SRP). This is the Decorator pattern — details in Days 9–11.</li>
</ul>`,
        hi: `<ul>
<li>Caller के पास सिर्फ़ एक <code>IOrderService</code> है (DIP) — उसे पता नहीं कि तीन objects एक के ऊपर एक रखे हैं।</li>
<li>Calls <b>बाहर से अंदर</b> जाती हैं: Logging → Timing → असली service, और लौटते समय खुलती हैं।</li>
<li>Output: log before → timing start → placing → timing stop → log after।</li>
<li>Logging और timing <code>OrderService</code> को <b>edit किए बिना</b> जुड़े (OCP) और हर एक अपनी class में है (SRP)। यह Decorator pattern है — details Days 9–11 में।</li>
</ul>`,
        hg: `<ul>
<li>Caller ke paas sirf ek <code>IOrderService</code> hai (DIP) — use pata nahi ki teen objects ek ke upar ek rakhe hain.</li>
<li>Calls <b>bahar se andar</b> jaati hain: Logging → Timing → asli service, aur lautte samay khulti hain.</li>
<li>Output: log before → timing start → placing → timing stop → log after.</li>
<li>Logging aur timing <code>OrderService</code> ko <b>edit kiye bina</b> jude (OCP) aur har ek apni class mein hai (SRP). Yeh Decorator pattern hai — details Days 9–11 mein.</li>
</ul>`
      }
    }
  ],
  revision: {
    en: [
      "<b>SOLID</b> = SRP, OCP, LSP, ISP, DIP: five habits that lower coupling and make change and testing cheap. Guidelines, not laws.",
      "<b>SRP</b>: one class, one <i>reason to change</i> (one stakeholder). Split validator / store / notifier; wait for a second reason before splitting small classes.",
      "<b>OCP</b>: add behaviour by adding a class (interface + polymorphism = Strategy), not by growing a type-<code>switch</code>. A small closed switch is fine.",
      "<b>LSP</b>: a child must work wherever the parent is expected. Square/Rectangle; overrides that throw <code>NotSupportedException</code> are red flags.",
      "LSP rules: do not tighten preconditions, do not weaken postconditions, keep invariants, add no new exceptions.",
      "<b>.NET and LSP</b>: <code>ReadOnlyCollection&lt;T&gt;.Add</code> throws; <code>Stream</code> has CanRead/CanWrite/CanSeek. Prefer <code>IReadOnlyList&lt;T&gt;</code> in your own APIs.",
      "<b>ISP</b>: small role interfaces from the caller's view (<code>IPrinter</code>, <code>IScanner</code>); ask for the smallest abstraction, e.g. <code>IEnumerable&lt;T&gt;</code>.",
      "<b>DIP</b> = principle (depend on abstractions); <b>DI</b> = technique (pass dependencies in); <b>IoC container</b> = tool (Microsoft.Extensions.DependencyInjection).",
      "DI container facts: last registration wins for one service, <code>IEnumerable&lt;T&gt;</code> gets all; Transient / Scoped / Singleton; avoid injecting Scoped into Singleton (captive).",
      "Prefer <b>constructor injection</b>; register only in the composition root; <code>IServiceProvider</code> + <code>GetService</code> in business code is the Service Locator anti-pattern.",
      "Over-engineering: no interface for a pure helper or a class with one implementation and nothing to fake; YAGNI and rule of three.",
      "<b>TL review</b>: ask change-cost questions (\"what happens when we add a fourth case?\"), refactor in small PRs, and write the reason in the comment."
    ],
    meaning: {
      hi: [
        "SOLID = SRP, OCP, LSP, ISP, DIP: पाँच आदतें जो coupling घटाती हैं और बदलाव व testing सस्ता करती हैं। Guidelines हैं, कानून नहीं।",
        "SRP: एक class, बदलने की एक वजह (एक stakeholder)। Validator / store / notifier बाँटो; छोटी classes बाँटने से पहले दूसरी वजह का इंतज़ार करो।",
        "OCP: behaviour नई class जोड़कर लाओ (interface + polymorphism = Strategy), type-switch बढ़ाकर नहीं। छोटा closed switch ठीक है।",
        "LSP: child वहाँ चले जहाँ parent expected है। Square/Rectangle; NotSupportedException फेंकने वाले overrides red flag हैं।",
        "LSP rules: preconditions मत कसो, postconditions कमज़ोर मत करो, invariants रखो, नई exceptions मत जोड़ो।",
        ".NET और LSP: ReadOnlyCollection<T>.Add फेंकता है; Stream में CanRead/CanWrite/CanSeek हैं। अपने APIs में IReadOnlyList<T> पसंद करो।",
        "ISP: caller की नज़र से छोटे role interfaces (IPrinter, IScanner); सबसे छोटी abstraction माँगो, जैसे IEnumerable<T>।",
        "DIP = principle (abstractions पर depend करो); DI = technique (dependencies बाहर से दो); IoC container = tool (Microsoft.Extensions.DependencyInjection)।",
        "DI container facts: एक service के लिए आख़िरी registration जीतती है, IEnumerable<T> को सब मिलती हैं; Transient / Scoped / Singleton; Scoped को Singleton में inject करने से बचो (captive)।",
        "Constructor injection पसंद करो; register सिर्फ़ composition root में; business code में IServiceProvider + GetService Service Locator anti-pattern है।",
        "Over-engineering: pure helper या ऐसी class के लिए interface नहीं जिसकी एक implementation है और fake करने को कुछ नहीं; YAGNI और rule of three।",
        "TL review: change-cost के सवाल पूछो (\"चौथा case जोड़ेंगे तो क्या होगा?\"), छोटे PRs में refactor करो, और comment में वजह लिखो।"
      ],
      hg: [
        "SOLID = SRP, OCP, LSP, ISP, DIP: paanch aadatein jo coupling ghatati hain aur badlaav va testing sasta karti hain. Guidelines hain, kanoon nahi.",
        "SRP: ek class, badalne ki ek wajah (ek stakeholder). Validator / store / notifier baanto; chhoti classes baantne se pehle doosri wajah ka intezaar karo.",
        "OCP: behaviour nayi class jodkar lao (interface + polymorphism = Strategy), type-switch badhakar nahi. Chhota closed switch theek hai.",
        "LSP: child wahan chale jahan parent expected hai. Square/Rectangle; NotSupportedException phenkne wale overrides red flag hain.",
        "LSP rules: preconditions mat kaso, postconditions kamzor mat karo, invariants rakho, nayi exceptions mat jodo.",
        ".NET aur LSP: ReadOnlyCollection<T>.Add phenkta hai; Stream mein CanRead/CanWrite/CanSeek hain. Apne APIs mein IReadOnlyList<T> pasand karo.",
        "ISP: caller ki nazar se chhote role interfaces (IPrinter, IScanner); sabse chhoti abstraction maango, jaise IEnumerable<T>.",
        "DIP = principle (abstractions par depend karo); DI = technique (dependencies bahar se do); IoC container = tool (Microsoft.Extensions.DependencyInjection).",
        "DI container facts: ek service ke liye aakhri registration jeetti hai, IEnumerable<T> ko sab milti hain; Transient / Scoped / Singleton; Scoped ko Singleton mein inject karne se bacho (captive).",
        "Constructor injection pasand karo; register sirf composition root mein; business code mein IServiceProvider + GetService Service Locator anti-pattern hai.",
        "Over-engineering: pure helper ya aisi class ke liye interface nahi jiski ek implementation hai aur fake karne ko kuch nahi; YAGNI aur rule of three.",
        "TL review: change-cost ke sawaal poochho (\"chautha case jodenge to kya hoga?\"), chhote PRs mein refactor karo, aur comment mein wajah likho."
      ]
    }
  }
};
