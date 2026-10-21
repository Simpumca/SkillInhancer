// Day 1 — OOP. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 1,
  title: {
    en: "OOP — Object-Oriented Programming",
    hi: "OOP — ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग",
    hg: "OOP — Object-Oriented Programming"
  },
  summary: {
    en: `<p>OOP is simply how C# code is organised: <b>objects</b> that keep their own data and the behaviour that works on it. You already use it every day in .NET — today we give each idea a clear name so you can explain it confidently.</p>
<ul>
<li><b>4 pillars</b>: Encapsulation, Abstraction, Inheritance, Polymorphism.</li>
<li><b>Abstract class vs interface</b> (incl. default interface methods, C# 8+).</li>
<li><b>Overloading vs overriding</b> and the keywords <code>virtual</code> / <code>override</code> / <code>new</code> / <code>sealed</code>.</li>
<li><b>Composition vs inheritance</b> — why "has-a" usually beats "is-a".</li>
<li><b>Constructors</b> (static, private, chaining), <b>access modifiers</b>, and why C# has <b>no multiple inheritance</b> of classes.</li>
</ul>
<p>One line to remember for the whole day: <b>override follows the object, new follows the reference.</b></p>`,
    hi: `<p>OOP बस यह है कि C# code को कैसे organise करें: <b>objects</b> जो अपना data और उस data पर काम करने वाला behaviour साथ रखते हैं। आप .NET में यह रोज़ use करते हो — आज हम हर idea को साफ़ नाम देंगे ताकि interview में आप confidence से समझा सको।</p>
<ul>
<li><b>4 pillars</b>: Encapsulation, Abstraction, Inheritance, Polymorphism।</li>
<li><b>Abstract class vs interface</b> (default interface methods भी, C# 8+)।</li>
<li><b>Overloading vs overriding</b> और keywords <code>virtual</code> / <code>override</code> / <code>new</code> / <code>sealed</code>।</li>
<li><b>Composition vs inheritance</b> — "has-a" अक्सर "is-a" से बेहतर क्यों है।</li>
<li><b>Constructors</b> (static, private, chaining), <b>access modifiers</b>, और C# में classes की <b>multiple inheritance</b> क्यों नहीं है।</li>
</ul>
<p>पूरे दिन की एक line याद रखो: <b>override object को follow करता है, new reference को।</b></p>`,
    hg: `<p>OOP bas yeh hai ki C# code ko kaise organise karein: <b>objects</b> jo apna data aur us data par kaam karne wala behaviour saath rakhte hain. Aap .NET mein yeh roz use karte ho — aaj hum har idea ko saaf naam denge taaki interview mein aap confidence se samjha sako.</p>
<ul>
<li><b>4 pillars</b>: Encapsulation, Abstraction, Inheritance, Polymorphism.</li>
<li><b>Abstract class vs interface</b> (default interface methods bhi, C# 8+).</li>
<li><b>Overloading vs overriding</b> aur keywords <code>virtual</code> / <code>override</code> / <code>new</code> / <code>sealed</code>.</li>
<li><b>Composition vs inheritance</b> — "has-a" aksar "is-a" se behtar kyun hai.</li>
<li><b>Constructors</b> (static, private, chaining), <b>access modifiers</b>, aur C# mein classes ki <b>multiple inheritance</b> kyun nahi hai.</li>
</ul>
<p>Poore din ki ek line yaad rakho: <b>override object ko follow karta hai, new reference ko.</b></p>`
  },
  sections: [
    {
      id: "pillars",
      depth: "short",
      title: { en: "The 4 pillars of OOP", hi: "OOP के 4 pillars", hg: "OOP ke 4 pillars" },
      body: {
        en: `<p><b>Analogy — the ATM:</b> You insert a card, type a PIN and get cash. You never see the note-counting machine inside — that is <b>abstraction</b>. You cannot open the cash box and pick notes yourself; everything goes through the PIN check — that is <b>encapsulation</b>. A cash-deposit ATM is still an ATM: it gets every normal ATM feature and adds deposit — <b>inheritance</b>. You press the same "Withdraw" button on an SBI or an HDFC machine and each bank does it its own way — <b>polymorphism</b>.</p>
<ul>
<li><b>Encapsulation</b> — keep data and the code that changes it together. Hide the data (<code>private</code> fields, <code>private set</code>) and allow changes only through methods that check the rules.</li>
<li><b>Abstraction</b> — show only <i>what</i> an object does, hide <i>how</i>. In C#: interfaces, abstract classes and a small, well-named public API.</li>
<li><b>Inheritance</b> — a class reuses and extends a base class ("is-a": a <code>Manager</code> is an <code>Employee</code>). A C# class has exactly one base class.</li>
<li><b>Polymorphism</b> — "many forms": one call, different behaviour. <b>Compile-time</b>: method overloading. <b>Run-time</b>: <code>virtual</code>/<code>override</code> and interface implementations.</li>
</ul>
<p><b>When to use:</b> encapsulation and abstraction — always; they keep a codebase safe to change. Inheritance — only for a true, stable "is-a" relationship; for plain code reuse prefer composition (see below).</p>`,
        hi: `<p><b>Analogy — ATM:</b> आप card डालते हो, PIN डालते हो और cash मिल जाता है। अंदर की note गिनने वाली machine आपको कभी नहीं दिखती — यही <b>abstraction</b> है। आप cash box खोलकर ख़ुद notes नहीं निकाल सकते; सब कुछ PIN check से होकर जाता है — यही <b>encapsulation</b> है। Cash-deposit ATM भी एक ATM ही है: उसे normal ATM के सारे features मिलते हैं और deposit extra — यह <b>inheritance</b> है। SBI हो या HDFC, आप same "Withdraw" button दबाते हो पर हर bank अपने तरीके से काम करता है — यह <b>polymorphism</b> है।</p>
<ul>
<li><b>Encapsulation</b> — data और उसे बदलने वाला code साथ रखो। Data छुपाओ (<code>private</code> fields, <code>private set</code>) और बदलाव सिर्फ़ उन methods से होने दो जो rules check करें।</li>
<li><b>Abstraction</b> — सिर्फ़ यह दिखाओ कि object <i>क्या</i> करता है, <i>कैसे</i> करता है वो छुपाओ। C# में: interfaces, abstract classes और छोटा, साफ़ नाम वाला public API।</li>
<li><b>Inheritance</b> — एक class, base class को reuse और extend करती है ("is-a": <code>Manager</code> एक <code>Employee</code> है)। C# class की base class सिर्फ़ एक होती है।</li>
<li><b>Polymorphism</b> — "कई रूप": एक call, अलग-अलग behaviour। <b>Compile-time</b>: method overloading। <b>Run-time</b>: <code>virtual</code>/<code>override</code> और interface implementations।</li>
</ul>
<p><b>कब use करें:</b> encapsulation और abstraction — हमेशा; इनसे codebase बदलना safe रहता है। Inheritance — सिर्फ़ सच्चे और stable "is-a" relation के लिए; सिर्फ़ code reuse के लिए composition बेहतर है (नीचे देखो)।</p>`,
        hg: `<p><b>Analogy — ATM:</b> Aap card daalte ho, PIN daalte ho aur cash mil jaata hai. Andar ki note ginne wali machine aapko kabhi nahi dikhti — yahi <b>abstraction</b> hai. Aap cash box kholkar khud notes nahi nikaal sakte; sab kuch PIN check se hokar jaata hai — yahi <b>encapsulation</b> hai. Cash-deposit ATM bhi ek ATM hi hai: use normal ATM ke saare features milte hain aur deposit extra — yeh <b>inheritance</b> hai. SBI ho ya HDFC, aap same "Withdraw" button dabaate ho par har bank apne tareeke se kaam karta hai — yeh <b>polymorphism</b> hai.</p>
<ul>
<li><b>Encapsulation</b> — data aur use badalne wala code saath rakho. Data chhupao (<code>private</code> fields, <code>private set</code>) aur badlaav sirf un methods se hone do jo rules check karein.</li>
<li><b>Abstraction</b> — sirf yeh dikhao ki object <i>kya</i> karta hai, <i>kaise</i> karta hai woh chhupao. C# mein: interfaces, abstract classes aur chhota, saaf naam wala public API.</li>
<li><b>Inheritance</b> — ek class, base class ko reuse aur extend karti hai ("is-a": <code>Manager</code> ek <code>Employee</code> hai). C# class ki base class sirf ek hoti hai.</li>
<li><b>Polymorphism</b> — "kai roop": ek call, alag-alag behaviour. <b>Compile-time</b>: method overloading. <b>Run-time</b>: <code>virtual</code>/<code>override</code> aur interface implementations.</li>
</ul>
<p><b>Kab use karein:</b> encapsulation aur abstraction — hamesha; inse codebase badalna safe rehta hai. Inheritance — sirf sacche aur stable "is-a" relation ke liye; sirf code reuse ke liye composition behtar hai (neeche dekho).</p>`
      }
    },
    {
      id: "abstract-vs-interface",
      depth: "short",
      title: { en: "Abstract class vs interface", hi: "Abstract class बनाम interface", hg: "Abstract class vs interface" },
      body: {
        en: `<p><b>Analogy:</b> An <b>interface</b> is like a <b>driving licence</b>: it only says "this person can drive". A car driver, a bus driver and a truck driver can all hold one, and one person can hold many certificates. An <b>abstract class</b> is like a <b>sweet-shop franchise</b>: the brand gives a ready kitchen, recipes and billing system (shared code and state), and each outlet fills in its local parts. You can join only one franchise.</p>
<ul>
<li><b>Abstract class</b>: cannot be instantiated; can have <b>fields (state)</b>, <b>constructors</b>, normal methods, <code>abstract</code> methods and any access modifier. A class can inherit <b>only one</b>.</li>
<li><b>Interface</b>: a <b>contract</b>; no instance fields, no constructors. A class or struct can implement <b>many</b>. Members are public by default.</li>
<li><b>Default interface methods</b> (C# 8, .NET Core 3.0+): an interface member can have a body. Main purpose: <b>versioning</b> — add a new member to a published interface without breaking existing classes. The default body is reachable only through the interface type.</li>
<li>Interfaces can also have static members; C# 11 added <code>static abstract</code> members (used for generic math).</li>
</ul>
<p><b>When to use:</b> interface — a capability shared by unrelated types (<code>IDisposable</code>, <code>IComparable&lt;T&gt;</code>), DI and unit-test mocking, public contracts. Abstract class — a close family of types that share real code or state (Template Method). Very common in real code: <b>both</b> — an interface for the contract plus an abstract base class with shared code.</p>
<p><b>When not:</b> do not add an abstract base class just to share two helper methods — a small composed helper is cleaner.</p>`,
        hi: `<p><b>Analogy:</b> <b>Interface</b> एक <b>driving licence</b> जैसा है: वो बस इतना कहता है कि "यह इंसान गाड़ी चला सकता है"। Car driver, bus driver, truck driver सबके पास हो सकता है, और एक इंसान के पास कई certificates हो सकते हैं। <b>Abstract class</b> एक <b>मिठाई की दुकान की franchise</b> जैसी है: brand तैयार kitchen, recipes और billing system देता है (shared code और state), और हर outlet अपने local हिस्से भरता है। Franchise आप सिर्फ़ एक ले सकते हो।</p>
<ul>
<li><b>Abstract class</b>: इसका object नहीं बना सकते; इसमें <b>fields (state)</b>, <b>constructors</b>, normal methods, <code>abstract</code> methods और कोई भी access modifier हो सकता है। एक class <b>सिर्फ़ एक</b> abstract class inherit कर सकती है।</li>
<li><b>Interface</b>: एक <b>contract</b>; instance fields नहीं, constructors नहीं। एक class या struct <b>कई</b> interfaces implement कर सकती है। Members by default public होते हैं।</li>
<li><b>Default interface methods</b> (C# 8, .NET Core 3.0+): interface member की body हो सकती है। मुख्य मकसद: <b>versioning</b> — published interface में नया member जोड़ो बिना पुरानी classes तोड़े। Default body सिर्फ़ interface type से ही call होती है।</li>
<li>Interfaces में static members भी हो सकते हैं; C# 11 में <code>static abstract</code> members आए (generic math के लिए)।</li>
</ul>
<p><b>कब use करें:</b> interface — जब अलग-अलग, unrelated types में एक capability हो (<code>IDisposable</code>, <code>IComparable&lt;T&gt;</code>), DI और unit-test mocking, public contracts। Abstract class — एक करीबी family जो असली code या state share करती है (Template Method)। Real code में अक्सर <b>दोनों</b> — contract के लिए interface और shared code के लिए abstract base class।</p>
<p><b>कब नहीं:</b> सिर्फ़ दो helper methods share करने के लिए abstract base class मत बनाओ — एक छोटा composed helper ज़्यादा साफ़ है।</p>`,
        hg: `<p><b>Analogy:</b> <b>Interface</b> ek <b>driving licence</b> jaisa hai: woh bas itna kehta hai ki "yeh insaan gaadi chala sakta hai". Car driver, bus driver, truck driver sabke paas ho sakta hai, aur ek insaan ke paas kai certificates ho sakte hain. <b>Abstract class</b> ek <b>mithai ki dukaan ki franchise</b> jaisi hai: brand taiyaar kitchen, recipes aur billing system deta hai (shared code aur state), aur har outlet apne local hisse bharta hai. Franchise aap sirf ek le sakte ho.</p>
<ul>
<li><b>Abstract class</b>: iska object nahi bana sakte; ismein <b>fields (state)</b>, <b>constructors</b>, normal methods, <code>abstract</code> methods aur koi bhi access modifier ho sakta hai. Ek class <b>sirf ek</b> abstract class inherit kar sakti hai.</li>
<li><b>Interface</b>: ek <b>contract</b>; instance fields nahi, constructors nahi. Ek class ya struct <b>kai</b> interfaces implement kar sakti hai. Members by default public hote hain.</li>
<li><b>Default interface methods</b> (C# 8, .NET Core 3.0+): interface member ki body ho sakti hai. Main maqsad: <b>versioning</b> — published interface mein naya member jodo bina purani classes tode. Default body sirf interface type se hi call hoti hai.</li>
<li>Interfaces mein static members bhi ho sakte hain; C# 11 mein <code>static abstract</code> members aaye (generic math ke liye).</li>
</ul>
<p><b>Kab use karein:</b> interface — jab alag-alag, unrelated types mein ek capability ho (<code>IDisposable</code>, <code>IComparable&lt;T&gt;</code>), DI aur unit-test mocking, public contracts. Abstract class — ek kareebi family jo asli code ya state share karti hai (Template Method). Real code mein aksar <b>dono</b> — contract ke liye interface aur shared code ke liye abstract base class.</p>
<p><b>Kab nahi:</b> sirf do helper methods share karne ke liye abstract base class mat banao — ek chhota composed helper zyada saaf hai.</p>`
      }
    },
    {
      id: "overload-override",
      depth: "short",
      title: {
        en: "Overloading vs overriding; virtual / override / new / sealed",
        hi: "Overloading बनाम overriding; virtual / override / new / sealed",
        hg: "Overloading vs overriding; virtual / override / new / sealed"
      },
      body: {
        en: `<p><b>Analogy — railway counter:</b> At the ticket counter you can book "with name only", "with name + berth choice" or "with name + berth + senior-citizen concession". Same action, different forms — the clerk decides by looking at the form you filled. That is <b>overloading</b> (decided at <b>compile time</b>). Now Indian Railways says "every zone must announce train arrival", but Western Railway announces in Marathi and Southern Railway in Tamil. Same rule, each zone's own way, decided by where you actually stand. That is <b>overriding</b> (decided at <b>run time</b>).</p>
<ul>
<li><b>Overloading</b>: same method name, different parameter list (count, type, order). Chosen by the compiler from the <b>declared</b> types of the arguments. Return type alone is not enough.</li>
<li><b>Overriding</b>: a derived class gives a new body to a base <code>virtual</code>/<code>abstract</code> method with the same signature. Chosen at run time from the <b>actual object</b>.</li>
<li><code>virtual</code> — "you <i>may</i> override me". <code>abstract</code> — "you <i>must</i> override me" (no body; class must be abstract).</li>
<li><code>override</code> — replaces the behaviour; even a base-class reference calls the new version.</li>
<li><code>new</code> — <b>hides</b> the base member. Not polymorphic: a base reference still calls the base version. Hiding without writing <code>new</code> gives warning CS0108.</li>
<li><code>sealed</code> — on a class: no one can inherit it. On an override (<code>sealed override</code>): no further overriding down the chain.</li>
</ul>
<p><b>Remember:</b> <b>override follows the object, new follows the reference.</b></p>
<p><b>When to use:</b> overloads for convenience variants of one operation; override for real polymorphic behaviour. Avoid <code>new</code> — use it only when you cannot change a base class you do not own.</p>`,
        hi: `<p><b>Analogy — railway counter:</b> Ticket counter पर आप "सिर्फ़ नाम से", "नाम + berth choice के साथ" या "नाम + berth + senior-citizen concession के साथ" ticket book कर सकते हो। काम एक, form अलग-अलग — clerk आपका भरा हुआ form देखकर तय करता है। यह <b>overloading</b> है (<b>compile time</b> पर तय)। अब Indian Railways कहती है "हर zone train आने की announcement करे", पर Western Railway Marathi में करती है और Southern Railway Tamil में। Rule एक, हर zone का अपना तरीका, और यह इस पर depend करता है कि आप असल में कहाँ खड़े हो। यह <b>overriding</b> है (<b>run time</b> पर तय)।</p>
<ul>
<li><b>Overloading</b>: same method नाम, अलग parameter list (count, type, order)। Compiler arguments के <b>declared</b> types देखकर चुनता है। सिर्फ़ return type अलग होना काफ़ी नहीं।</li>
<li><b>Overriding</b>: derived class, base के <code>virtual</code>/<code>abstract</code> method को same signature के साथ नई body देती है। Run time पर <b>असली object</b> देखकर चुना जाता है।</li>
<li><code>virtual</code> — "आप मुझे override <i>कर सकते</i> हो"। <code>abstract</code> — "आपको मुझे override <i>करना ही</i> होगा" (body नहीं; class भी abstract होनी चाहिए)।</li>
<li><code>override</code> — behaviour बदल देता है; base-class reference से भी नया version ही call होता है।</li>
<li><code>new</code> — base member को <b>छुपाता (hide)</b> है। यह polymorphic नहीं है: base reference से अब भी base version ही call होगा। <code>new</code> लिखे बिना hide करोगे तो warning CS0108 आएगी।</li>
<li><code>sealed</code> — class पर: कोई उसे inherit नहीं कर सकता। Override पर (<code>sealed override</code>): आगे chain में कोई override नहीं कर सकता।</li>
</ul>
<p><b>याद रखो:</b> <b>override object को follow करता है, new reference को।</b></p>
<p><b>कब use करें:</b> एक ही operation के आसान variants के लिए overloads; असली polymorphic behaviour के लिए override। <code>new</code> से बचो — तभी use करो जब base class आपकी नहीं है और आप उसे बदल नहीं सकते।</p>`,
        hg: `<p><b>Analogy — railway counter:</b> Ticket counter par aap "sirf naam se", "naam + berth choice ke saath" ya "naam + berth + senior-citizen concession ke saath" ticket book kar sakte ho. Kaam ek, form alag-alag — clerk aapka bhara hua form dekhkar tay karta hai. Yeh <b>overloading</b> hai (<b>compile time</b> par tay). Ab Indian Railways kehti hai "har zone train aane ki announcement kare", par Western Railway Marathi mein karti hai aur Southern Railway Tamil mein. Rule ek, har zone ka apna tareeka, aur yeh is par depend karta hai ki aap asal mein kahan khade ho. Yeh <b>overriding</b> hai (<b>run time</b> par tay).</p>
<ul>
<li><b>Overloading</b>: same method naam, alag parameter list (count, type, order). Compiler arguments ke <b>declared</b> types dekhkar chunta hai. Sirf return type alag hona kaafi nahi.</li>
<li><b>Overriding</b>: derived class, base ke <code>virtual</code>/<code>abstract</code> method ko same signature ke saath nayi body deti hai. Run time par <b>asli object</b> dekhkar chuna jaata hai.</li>
<li><code>virtual</code> — "aap mujhe override <i>kar sakte</i> ho". <code>abstract</code> — "aapko mujhe override <i>karna hi</i> hoga" (body nahi; class bhi abstract honi chahiye).</li>
<li><code>override</code> — behaviour badal deta hai; base-class reference se bhi naya version hi call hota hai.</li>
<li><code>new</code> — base member ko <b>chhupata (hide)</b> hai. Yeh polymorphic nahi hai: base reference se ab bhi base version hi call hoga. <code>new</code> likhe bina hide karoge to warning CS0108 aayegi.</li>
<li><code>sealed</code> — class par: koi use inherit nahi kar sakta. Override par (<code>sealed override</code>): aage chain mein koi override nahi kar sakta.</li>
</ul>
<p><b>Yaad rakho:</b> <b>override object ko follow karta hai, new reference ko.</b></p>
<p><b>Kab use karein:</b> ek hi operation ke aasaan variants ke liye overloads; asli polymorphic behaviour ke liye override. <code>new</code> se bacho — tabhi use karo jab base class aapki nahi hai aur aap use badal nahi sakte.</p>`
      }
    },
    {
      id: "composition-vs-inheritance",
      depth: "short",
      title: { en: "Composition vs inheritance", hi: "Composition बनाम inheritance", hg: "Composition vs inheritance" },
      body: {
        en: `<p><b>Analogy — your mobile phone:</b> A phone does not <i>inherit</i> from a camera, a battery and a SIM. It <b>has</b> a camera, a battery and a SIM. Battery weak? Swap it. Changed operator? Swap the SIM. A kirana shop <b>has</b> a UPI QR code — tomorrow it can switch from one payment app to another without rebuilding the shop.</p>
<ul>
<li><b>Inheritance = "is-a"</b>: fixed at compile time; the child depends on the parent's internals. A change in the base can silently break children (the <b>fragile base class</b> problem). Mixing behaviours causes a <b>class explosion</b> (UpiSmsCheckout, UpiEmailCheckout, CardSmsCheckout, ...).</li>
<li><b>Composition = "has-a"</b>: a class holds other objects (usually behind interfaces) and <b>delegates</b> work to them. Parts can be swapped, combined and mocked in unit tests.</li>
<li>Classic advice from the Gang of Four book: <b>"Favor object composition over class inheritance."</b></li>
<li>ASP.NET Core <b>dependency injection</b> is composition: a service receives <code>IOrderRepository</code>, <code>ILogger&lt;T&gt;</code> etc. through its constructor.</li>
</ul>
<p><b>When inheritance is right:</b> a true, stable is-a relationship with a small family, or a framework base class designed for it (<code>ControllerBase</code>, <code>DbContext</code>, <code>BackgroundService</code>, custom <code>Exception</code> types).</p>
<p><b>Rule of thumb:</b> if you inherit only to reuse code, compose instead.</p>`,
        hi: `<p><b>Analogy — आपका mobile phone:</b> Phone, camera, battery और SIM से <i>inherit</i> नहीं करता। Phone के पास camera, battery और SIM <b>होते हैं (has)</b>। Battery कमज़ोर? बदल दो। Operator बदला? SIM बदल दो। किराना दुकान के पास UPI QR code <b>होता है</b> — कल वो एक payment app से दूसरे पर जा सकती है, दुकान दोबारा बनाए बिना।</p>
<ul>
<li><b>Inheritance = "is-a"</b>: compile time पर fix; child, parent के अंदर की चीज़ों पर depend करता है। Base में बदलाव चुपचाप children को तोड़ सकता है (<b>fragile base class</b> problem)। Behaviours mix करने पर <b>class explosion</b> होता है (UpiSmsCheckout, UpiEmailCheckout, CardSmsCheckout, ...)।</li>
<li><b>Composition = "has-a"</b>: class दूसरे objects रखती है (अक्सर interfaces के पीछे) और काम उन्हें <b>delegate</b> करती है। Parts बदल सकते हो, जोड़ सकते हो और unit tests में mock कर सकते हो।</li>
<li>Gang of Four book की famous सलाह: <b>"Favor object composition over class inheritance."</b></li>
<li>ASP.NET Core <b>dependency injection</b> composition ही है: service को constructor से <code>IOrderRepository</code>, <code>ILogger&lt;T&gt;</code> वगैरह मिलते हैं।</li>
</ul>
<p><b>Inheritance कब सही है:</b> सच्चा, stable is-a relation और छोटी family, या ऐसी framework base class जो इसी के लिए बनी है (<code>ControllerBase</code>, <code>DbContext</code>, <code>BackgroundService</code>, custom <code>Exception</code> types)।</p>
<p><b>Rule of thumb:</b> अगर सिर्फ़ code reuse के लिए inherit कर रहे हो, तो composition use करो।</p>`,
        hg: `<p><b>Analogy — aapka mobile phone:</b> Phone, camera, battery aur SIM se <i>inherit</i> nahi karta. Phone ke paas camera, battery aur SIM <b>hote hain (has)</b>. Battery kamzor? Badal do. Operator badla? SIM badal do. Kirana dukaan ke paas UPI QR code <b>hota hai</b> — kal woh ek payment app se doosre par ja sakti hai, dukaan dobara banaye bina.</p>
<ul>
<li><b>Inheritance = "is-a"</b>: compile time par fix; child, parent ke andar ki cheezon par depend karta hai. Base mein badlaav chupchaap children ko tod sakta hai (<b>fragile base class</b> problem). Behaviours mix karne par <b>class explosion</b> hota hai (UpiSmsCheckout, UpiEmailCheckout, CardSmsCheckout, ...).</li>
<li><b>Composition = "has-a"</b>: class doosre objects rakhti hai (aksar interfaces ke peeche) aur kaam unhe <b>delegate</b> karti hai. Parts badal sakte ho, jod sakte ho aur unit tests mein mock kar sakte ho.</li>
<li>Gang of Four book ki famous salaah: <b>"Favor object composition over class inheritance."</b></li>
<li>ASP.NET Core <b>dependency injection</b> composition hi hai: service ko constructor se <code>IOrderRepository</code>, <code>ILogger&lt;T&gt;</code> waghera milte hain.</li>
</ul>
<p><b>Inheritance kab sahi hai:</b> saccha, stable is-a relation aur chhoti family, ya aisi framework base class jo isi ke liye bani hai (<code>ControllerBase</code>, <code>DbContext</code>, <code>BackgroundService</code>, custom <code>Exception</code> types).</p>
<p><b>Rule of thumb:</b> agar sirf code reuse ke liye inherit kar rahe ho, to composition use karo.</p>`
      }
    },
    {
      id: "encapsulation-in-code",
      depth: "detailed",
      title: { en: "Encapsulation in code", hi: "Code में Encapsulation", hg: "Code mein Encapsulation" },
      body: {
        en: `<p><b>Analogy — bank passbook:</b> you cannot write a new balance into your passbook with your own pen. The bank updates it only after checking the deposit or withdrawal slip.</p>
<p>In code: the <b>state</b> (<code>Balance</code>) has a <code>private set</code>, so the only way to change it is through <code>Deposit</code> and <code>Withdraw</code>, which enforce the rules (<b>invariants</b>: balance never negative, amount must be positive). The constructor also validates, so an invalid object can never exist.</p>
<ul>
<li>Prefer <code>{ get; private set; }</code> or <code>{ get; init; }</code> over a public setter when the value has rules.</li>
<li>Expose <b>behaviour</b> (<code>Withdraw</code>) instead of raw data (<code>SetBalance</code>).</li>
<li><b>When not to over-do it:</b> simple DTOs that just carry data (API request/response models) can have plain public properties — they have no rules to protect.</li>
</ul>`,
        hi: `<p><b>Analogy — bank passbook:</b> आप अपने pen से passbook में नया balance नहीं लिख सकते। Bank, deposit या withdrawal slip check करने के बाद ही उसे update करता है।</p>
<p>Code में: <b>state</b> (<code>Balance</code>) का <code>private set</code> है, इसलिए उसे बदलने का एक ही रास्ता है — <code>Deposit</code> और <code>Withdraw</code>, जो rules (<b>invariants</b>: balance कभी negative नहीं, amount positive होना चाहिए) लागू करते हैं। Constructor भी validate करता है, ताकि गलत object कभी बने ही नहीं।</p>
<ul>
<li>जिस value के rules हैं, उसके लिए public setter की जगह <code>{ get; private set; }</code> या <code>{ get; init; }</code> use करो।</li>
<li>Raw data (<code>SetBalance</code>) की जगह <b>behaviour</b> (<code>Withdraw</code>) expose करो।</li>
<li><b>ज़्यादा मत करो:</b> simple DTOs जो सिर्फ़ data ले जाते हैं (API request/response models), उनमें plain public properties ठीक हैं — उनमें बचाने लायक कोई rule नहीं है।</li>
</ul>`,
        hg: `<p><b>Analogy — bank passbook:</b> aap apne pen se passbook mein naya balance nahi likh sakte. Bank, deposit ya withdrawal slip check karne ke baad hi use update karta hai.</p>
<p>Code mein: <b>state</b> (<code>Balance</code>) ka <code>private set</code> hai, isliye use badalne ka ek hi raasta hai — <code>Deposit</code> aur <code>Withdraw</code>, jo rules (<b>invariants</b>: balance kabhi negative nahi, amount positive hona chahiye) laagu karte hain. Constructor bhi validate karta hai, taaki galat object kabhi bane hi nahi.</p>
<ul>
<li>Jis value ke rules hain, uske liye public setter ki jagah <code>{ get; private set; }</code> ya <code>{ get; init; }</code> use karo.</li>
<li>Raw data (<code>SetBalance</code>) ki jagah <b>behaviour</b> (<code>Withdraw</code>) expose karo.</li>
<li><b>Zyada mat karo:</b> simple DTOs jo sirf data le jaate hain (API request/response models), unmein plain public properties theek hain — unmein bachaane laayak koi rule nahi hai.</li>
</ul>`
      },
      code: [{
        caption: {
          en: "BankAccount: data is private, rules live in methods",
          hi: "BankAccount: data private है, rules methods में हैं",
          hg: "BankAccount: data private hai, rules methods mein hain"
        },
        check: "run",
        expected: "Withdraw 3000 ok? False\nRavi: 1500",
        src: `var acc = new BankAccount("Ravi", 1000m);
acc.Deposit(500m);
bool ok = acc.Withdraw(3000m);
Console.WriteLine($"Withdraw 3000 ok? {ok}");
Console.WriteLine($"{acc.Owner}: {acc.Balance}");
// acc.Balance = 1_000_000m;   // CS0272: the setter is private

public class BankAccount
{
    public string Owner { get; }
    public decimal Balance { get; private set; }

    public BankAccount(string owner, decimal openingBalance)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(owner);
        ArgumentOutOfRangeException.ThrowIfNegative(openingBalance);
        Owner = owner;
        Balance = openingBalance;
    }

    public void Deposit(decimal amount)
    {
        ArgumentOutOfRangeException.ThrowIfNegativeOrZero(amount);
        Balance += amount;
    }

    public bool Withdraw(decimal amount)
    {
        if (amount <= 0 || amount > Balance) return false;   // rule protected here
        Balance -= amount;
        return true;
    }
}`
      }]
    },
    {
      id: "polymorphism-in-code",
      depth: "detailed",
      title: {
        en: "Polymorphism in code: overloads, virtual, override, sealed",
        hi: "Code में Polymorphism: overloads, virtual, override, sealed",
        hg: "Code mein Polymorphism: overloads, virtual, override, sealed"
      },
      body: {
        en: `<p><b>Analogy — TV remote:</b> the same "Power" button works on a Sony TV and an LG TV; each TV turns on in its own way. Your code just presses the button.</p>
<p><b>Run-time polymorphism:</b> the loop below only knows the type <code>Notification</code>, but each object runs its own <code>Send</code>. Note:</p>
<ul>
<li><code>EmailNotification</code> uses <code>sealed override</code> — nobody below it may override <code>Send</code> again.</li>
<li><code>UrgentSms</code> is a <code>sealed</code> class and calls <code>base.Send(...)</code> to reuse the parent's behaviour.</li>
</ul>
<p><b>Compile-time polymorphism (overloading):</b> <code>Calculator.Add</code> has three versions; the compiler picks one from the argument types. A method that differs only in return type is <b>not</b> an overload (error CS0111).</p>`,
        hi: `<p><b>Analogy — TV remote:</b> Same "Power" button Sony TV पर भी चलता है और LG TV पर भी; हर TV अपने तरीके से on होता है। आपका code बस button दबाता है।</p>
<p><b>Run-time polymorphism:</b> नीचे का loop सिर्फ़ type <code>Notification</code> जानता है, पर हर object अपना <code>Send</code> चलाता है। ध्यान दो:</p>
<ul>
<li><code>EmailNotification</code> में <code>sealed override</code> है — इसके नीचे कोई <code>Send</code> को फिर से override नहीं कर सकता।</li>
<li><code>UrgentSms</code> एक <code>sealed</code> class है और parent का behaviour reuse करने के लिए <code>base.Send(...)</code> call करती है।</li>
</ul>
<p><b>Compile-time polymorphism (overloading):</b> <code>Calculator.Add</code> के तीन versions हैं; compiler argument types देखकर एक चुनता है। जो method सिर्फ़ return type में अलग है, वो overload <b>नहीं</b> है (error CS0111)।</p>`,
        hg: `<p><b>Analogy — TV remote:</b> Same "Power" button Sony TV par bhi chalta hai aur LG TV par bhi; har TV apne tareeke se on hota hai. Aapka code bas button dabata hai.</p>
<p><b>Run-time polymorphism:</b> neeche ka loop sirf type <code>Notification</code> jaanta hai, par har object apna <code>Send</code> chalata hai. Dhyaan do:</p>
<ul>
<li><code>EmailNotification</code> mein <code>sealed override</code> hai — iske neeche koi <code>Send</code> ko phir se override nahi kar sakta.</li>
<li><code>UrgentSms</code> ek <code>sealed</code> class hai aur parent ka behaviour reuse karne ke liye <code>base.Send(...)</code> call karti hai.</li>
</ul>
<p><b>Compile-time polymorphism (overloading):</b> <code>Calculator.Add</code> ke teen versions hain; compiler argument types dekhkar ek chunta hai. Jo method sirf return type mein alag hai, woh overload <b>nahi</b> hai (error CS0111).</p>`
      },
      code: [{
        caption: {
          en: "Run-time polymorphism with virtual / override / sealed",
          hi: "virtual / override / sealed के साथ run-time polymorphism",
          hg: "virtual / override / sealed ke saath run-time polymorphism"
        },
        check: "run",
        expected: "[SMS] Bill due\n[Email] Bill due\n[SMS] URGENT: Bill due",
        src: `Notification[] items = [new SmsNotification(), new EmailNotification(), new UrgentSms()];
foreach (Notification n in items)
    n.Send("Bill due");   // which Send runs? decided by the real object

public class Notification
{
    public virtual void Send(string msg) => Console.WriteLine($"[Generic] {msg}");
}

public class SmsNotification : Notification
{
    public override void Send(string msg) => Console.WriteLine($"[SMS] {msg}");
}

public class EmailNotification : Notification
{
    // sealed override: classes deriving from EmailNotification cannot override Send
    public sealed override void Send(string msg) => Console.WriteLine($"[Email] {msg}");
}

public sealed class UrgentSms : SmsNotification   // sealed class: no one can inherit it
{
    public override void Send(string msg) => base.Send("URGENT: " + msg);
}`
      }, {
        caption: {
          en: "Compile-time polymorphism: method overloading",
          hi: "Compile-time polymorphism: method overloading का उदाहरण",
          hg: "Compile-time polymorphism: method overloading"
        },
        check: "run",
        expected: "5\n6\n6",
        src: `var calc = new Calculator();
Console.WriteLine(calc.Add(2, 3));        // Add(int, int)
Console.WriteLine(calc.Add(2.5, 3.5));    // Add(double, double)
Console.WriteLine(calc.Add(1, 2, 3));     // Add(int, int, int)

public class Calculator
{
    public int Add(int a, int b) => a + b;
    public double Add(double a, double b) => a + b;
    public int Add(int a, int b, int c) => a + b + c;
    // public long Add(int a, int b) => a + b;   // CS0111: return type alone is not an overload
}`
      }]
    },
    {
      id: "interfaces-in-code",
      depth: "detailed",
      title: {
        en: "Interfaces, default methods & abstract classes in code",
        hi: "Code में Interfaces, default methods और abstract classes",
        hg: "Code mein Interfaces, default methods aur abstract classes"
      },
      body: {
        en: `<p><b>Analogy — tiffin service:</b> the housing society says "every tiffin vendor must deliver by 1 pm" (an interface — a rule anyone can follow). One brand runs many kitchens with the same cooking process and only the menu changes per kitchen (an abstract class — shared process and state).</p>
<p><b>Example 1 — default interface method:</b> version 1 of <code>INotifier</code> had only <code>Send</code>. Version 2 added <code>SendBulk</code> <b>with a body</b>, so the old <code>SmsNotifier</code> still compiles and gets the default. <code>EmailNotifier</code> gives its own better implementation.</p>
<ul>
<li>The default body is visible only through the interface: <code>new SmsNotifier().SendBulk(...)</code> does <b>not</b> compile; <code>((INotifier)sms).SendBulk(...)</code> does.</li>
<li>Default methods need a runtime that supports them (.NET Core 3.0+ / .NET 5+); they do not work on .NET Framework.</li>
</ul>
<p><b>Example 2 — abstract class:</b> <code>ReportBase</code> has a field, a constructor and a fixed algorithm (<code>Generate</code>) with one abstract step. This is the <b>Template Method</b> pattern. <code>SalesReport</code> inherits <b>one</b> base class and also implements an interface — that is how C# replaces multiple inheritance.</p>`,
        hi: `<p><b>Analogy — tiffin service:</b> Housing society कहती है "हर tiffin वाला 1 बजे तक deliver करे" (interface — ऐसा rule जो कोई भी follow कर सकता है)। एक brand कई kitchens चलाता है, सबका cooking process same है, बस हर kitchen का menu अलग है (abstract class — shared process और state)।</p>
<p><b>Example 1 — default interface method:</b> <code>INotifier</code> के version 1 में सिर्फ़ <code>Send</code> था। Version 2 में <code>SendBulk</code> <b>body के साथ</b> जोड़ा गया, इसलिए पुराना <code>SmsNotifier</code> अब भी compile होता है और उसे default मिल जाता है। <code>EmailNotifier</code> अपना बेहतर implementation देता है।</p>
<ul>
<li>Default body सिर्फ़ interface से दिखती है: <code>new SmsNotifier().SendBulk(...)</code> compile <b>नहीं</b> होगा; <code>((INotifier)sms).SendBulk(...)</code> होगा।</li>
<li>Default methods के लिए ऐसा runtime चाहिए जो इन्हें support करे (.NET Core 3.0+ / .NET 5+); .NET Framework पर ये नहीं चलते।</li>
</ul>
<p><b>Example 2 — abstract class:</b> <code>ReportBase</code> में एक field, एक constructor और एक fixed algorithm (<code>Generate</code>) है जिसमें एक step abstract है। यह <b>Template Method</b> pattern है। <code>SalesReport</code> <b>एक</b> base class inherit करती है और साथ में एक interface भी implement करती है — C# में multiple inheritance की जगह यही तरीका है।</p>`,
        hg: `<p><b>Analogy — tiffin service:</b> Housing society kehti hai "har tiffin wala 1 baje tak deliver kare" (interface — aisa rule jo koi bhi follow kar sakta hai). Ek brand kai kitchens chalata hai, sabka cooking process same hai, bas har kitchen ka menu alag hai (abstract class — shared process aur state).</p>
<p><b>Example 1 — default interface method:</b> <code>INotifier</code> ke version 1 mein sirf <code>Send</code> tha. Version 2 mein <code>SendBulk</code> <b>body ke saath</b> joda gaya, isliye purana <code>SmsNotifier</code> ab bhi compile hota hai aur use default mil jaata hai. <code>EmailNotifier</code> apna behtar implementation deta hai.</p>
<ul>
<li>Default body sirf interface se dikhti hai: <code>new SmsNotifier().SendBulk(...)</code> compile <b>nahi</b> hoga; <code>((INotifier)sms).SendBulk(...)</code> hoga.</li>
<li>Default methods ke liye aisa runtime chahiye jo inhe support kare (.NET Core 3.0+ / .NET 5+); .NET Framework par yeh nahi chalte.</li>
</ul>
<p><b>Example 2 — abstract class:</b> <code>ReportBase</code> mein ek field, ek constructor aur ek fixed algorithm (<code>Generate</code>) hai jismein ek step abstract hai. Yeh <b>Template Method</b> pattern hai. <code>SalesReport</code> <b>ek</b> base class inherit karti hai aur saath mein ek interface bhi implement karti hai — C# mein multiple inheritance ki jagah yahi tareeka hai.</p>`
      },
      code: [{
        caption: {
          en: "Default interface method: adding SendBulk without breaking old classes",
          hi: "Default interface method: पुरानी classes तोड़े बिना SendBulk जोड़ना",
          hg: "Default interface method: purani classes tode bina SendBulk jodna"
        },
        check: "run",
        expected: "SMS: OTP 4321\nSMS: A\nSMS: B\nEmail: OTP 4321\nEmail: one mail with 2 items",
        src: `INotifier[] notifiers = [new SmsNotifier(), new EmailNotifier()];
foreach (INotifier n in notifiers)
{
    n.Send("OTP 4321");
    n.SendBulk(["A", "B"]);
}

public interface INotifier
{
    void Send(string message);

    // Added in "version 2" WITH a body, so existing implementers still compile.
    void SendBulk(string[] messages)
    {
        foreach (var m in messages) Send(m);
    }
}

public class SmsNotifier : INotifier           // written for version 1, unchanged
{
    public void Send(string message) => Console.WriteLine($"SMS: {message}");
}

public class EmailNotifier : INotifier
{
    public void Send(string message) => Console.WriteLine($"Email: {message}");
    public void SendBulk(string[] messages) =>    // replaces the default
        Console.WriteLine($"Email: one mail with {messages.Length} items");
}`
      }, {
        caption: {
          en: "Abstract class: state + constructor + Template Method; one base class, many interfaces",
          hi: "Abstract class: state + constructor + Template Method; base class एक, interfaces कई",
          hg: "Abstract class: state + constructor + Template Method; base class ek, interfaces kai"
        },
        check: "run",
        expected: "== Sales #1 ==\nTotal: 500\n== Sales #2 ==\nTotal: 500\nSales,500",
        src: `var sales = new SalesReport();
sales.Generate();
sales.Generate();
IExportable export = sales;
Console.WriteLine(export.ToCsv());
// var r = new ReportBase("x");   // CS0144: cannot create an instance of an abstract type

public interface IExportable
{
    string ToCsv();
}

public abstract class ReportBase
{
    private int _runs;                                      // state: an interface cannot have this
    protected ReportBase(string title) => Title = title;    // constructor: an interface cannot have this
    public string Title { get; }

    public void Generate()                                  // fixed steps (Template Method)
    {
        _runs++;
        Console.WriteLine($"== {Title} #{_runs} ==");
        WriteBody();                                        // the step each child fills in
    }

    protected abstract void WriteBody();
}

// One base class + any number of interfaces
public class SalesReport : ReportBase, IExportable
{
    public SalesReport() : base("Sales") { }
    protected override void WriteBody() => Console.WriteLine("Total: 500");
    public string ToCsv() => "Sales,500";
}`
      }]
    },
    {
      id: "constructors",
      depth: "detailed",
      title: {
        en: "Constructors: static, private, chaining, primary",
        hi: "Constructors के प्रकार: static, private, chaining, primary",
        hg: "Constructors: static, private, chaining, primary"
      },
      body: {
        en: `<p><b>Analogy — mobile connection:</b> the telecom company sets up its network <b>once</b> (static constructor). Every new SIM is activated separately (instance constructor). A "prepaid plan" activation first runs the basic activation steps, then adds its own (constructor chaining). And you cannot print your own Aadhaar card — only the authority issues it (private constructor + factory method).</p>
<ul>
<li><b>Instance constructor</b> — runs on every <code>new</code>; puts the object in a valid state.</li>
<li><b>Static constructor</b> — <code>static Order() { }</code>: no parameters, no access modifier, cannot be called by you. The runtime runs it <b>once per type</b>, before the first instance is created or any static member is used. If it throws, you get <code>TypeInitializationException</code> and the type stays unusable.</li>
<li><b>Private constructor</b> — outside code cannot call <code>new</code>. Used for Singleton, static factory methods (<code>Order.Create(...)</code>) that validate or cache, and classes that should not be instantiated.</li>
<li><b>Chaining</b> — <code>: this(...)</code> calls another constructor of the same class; <code>: base(...)</code> calls the parent's constructor. Write setup logic once.</li>
<li>If you write no <code>base(...)</code>, the compiler inserts <code>base()</code>. If the parent has no accessible parameterless constructor, you get error CS7036 — you must call <code>base(...)</code> with arguments.</li>
<li><b>Order with inheritance:</b> derived field initializers → base field initializers → base constructor body → derived constructor body.</li>
<li><b>Primary constructors</b> (C# 12): <code>class OrderService(IOrderRepository repo)</code>. The parameters are in scope in the whole class body — very handy for DI. They are parameters, not properties: if you need a public property, declare it and assign it from the parameter.</li>
</ul>`,
        hi: `<p><b>Analogy — mobile connection:</b> Telecom company अपना network <b>एक बार</b> setup करती है (static constructor)। हर नया SIM अलग से activate होता है (instance constructor)। "Prepaid plan" activation पहले basic activation steps चलाता है, फिर अपने steps जोड़ता है (constructor chaining)। और आप अपना Aadhaar card ख़ुद print नहीं कर सकते — सिर्फ़ authority issue करती है (private constructor + factory method)।</p>
<ul>
<li><b>Instance constructor</b> — हर <code>new</code> पर चलता है; object को valid state में रखता है।</li>
<li><b>Static constructor</b> — <code>static Order() { }</code>: कोई parameter नहीं, कोई access modifier नहीं, आप इसे call नहीं कर सकते। Runtime इसे <b>हर type के लिए एक बार</b> चलाता है — पहला object बनने या कोई static member use होने से पहले। अगर यह exception फेंके, तो <code>TypeInitializationException</code> आता है और वो type आगे use नहीं हो पाता।</li>
<li><b>Private constructor</b> — बाहर का code <code>new</code> नहीं कर सकता। Singleton, static factory methods (<code>Order.Create(...)</code>) जो validate या cache करें, और ऐसी classes जिनका object नहीं बनना चाहिए — इनमें use होता है।</li>
<li><b>Chaining</b> — <code>: this(...)</code> उसी class का दूसरा constructor call करता है; <code>: base(...)</code> parent का constructor call करता है। Setup logic एक ही बार लिखो।</li>
<li>अगर आप <code>base(...)</code> नहीं लिखते, तो compiler ख़ुद <code>base()</code> डाल देता है। अगर parent में accessible parameterless constructor नहीं है, तो error CS7036 आता है — तब आपको arguments के साथ <code>base(...)</code> call करना पड़ेगा।</li>
<li><b>Inheritance में order:</b> derived field initializers → base field initializers → base constructor body → derived constructor body।</li>
<li><b>Primary constructors</b> (C# 12): <code>class OrderService(IOrderRepository repo)</code>। Parameters पूरी class body में available रहते हैं — DI के लिए बहुत काम का। ये parameters हैं, properties नहीं: अगर public property चाहिए तो उसे declare करो और parameter से assign करो।</li>
</ul>`,
        hg: `<p><b>Analogy — mobile connection:</b> Telecom company apna network <b>ek baar</b> setup karti hai (static constructor). Har naya SIM alag se activate hota hai (instance constructor). "Prepaid plan" activation pehle basic activation steps chalata hai, phir apne steps jodta hai (constructor chaining). Aur aap apna Aadhaar card khud print nahi kar sakte — sirf authority issue karti hai (private constructor + factory method).</p>
<ul>
<li><b>Instance constructor</b> — har <code>new</code> par chalta hai; object ko valid state mein rakhta hai.</li>
<li><b>Static constructor</b> — <code>static Order() { }</code>: koi parameter nahi, koi access modifier nahi, aap ise call nahi kar sakte. Runtime ise <b>har type ke liye ek baar</b> chalata hai — pehla object banne ya koi static member use hone se pehle. Agar yeh exception phenke, to <code>TypeInitializationException</code> aata hai aur woh type aage use nahi ho paata.</li>
<li><b>Private constructor</b> — bahar ka code <code>new</code> nahi kar sakta. Singleton, static factory methods (<code>Order.Create(...)</code>) jo validate ya cache karein, aur aisi classes jinka object nahi banna chahiye — inmein use hota hai.</li>
<li><b>Chaining</b> — <code>: this(...)</code> usi class ka doosra constructor call karta hai; <code>: base(...)</code> parent ka constructor call karta hai. Setup logic ek hi baar likho.</li>
<li>Agar aap <code>base(...)</code> nahi likhte, to compiler khud <code>base()</code> daal deta hai. Agar parent mein accessible parameterless constructor nahi hai, to error CS7036 aata hai — tab aapko arguments ke saath <code>base(...)</code> call karna padega.</li>
<li><b>Inheritance mein order:</b> derived field initializers → base field initializers → base constructor body → derived constructor body.</li>
<li><b>Primary constructors</b> (C# 12): <code>class OrderService(IOrderRepository repo)</code>. Parameters poori class body mein available rehte hain — DI ke liye bahut kaam ka. Yeh parameters hain, properties nahi: agar public property chahiye to use declare karo aur parameter se assign karo.</li>
</ul>`
      },
      code: [{
        caption: {
          en: "Static constructor, private constructor + factory, this(...) chaining",
          hi: "Static constructor, private constructor + factory, और this(...) chaining",
          hg: "Static constructor, private constructor + factory, this(...) chaining"
        },
        check: "run",
        expected: "App started\nStatic ctor: counter ready\n#101 Tea x1 | #102 Samosa x2",
        src: `Console.WriteLine("App started");
var a = Order.Create("Tea");          // first use of Order: static ctor runs now
var b = new Order("Samosa", 2);
Console.WriteLine($"{a} | {b}");
// var c = new Order("Chai");         // CS0122: that constructor is private

public class Order
{
    private static int _next;
    public int Id { get; }
    public string Item { get; }
    public int Qty { get; }

    static Order()                                  // once per type, before first use
    {
        _next = 100;
        Console.WriteLine("Static ctor: counter ready");
    }

    public Order(string item, int qty)              // the main constructor
    {
        Id = ++_next;
        Item = item;
        Qty = qty;
    }

    private Order(string item) : this(item, 1) { }  // private + chained to the main one

    public static Order Create(string item) => new(item);   // factory method

    public override string ToString() => $"#{Id} {Item} x{Qty}";
}`
      }, {
        caption: {
          en: "base(...) chaining: the parent constructor runs first",
          hi: "base(...) chaining: parent constructor पहले चलता है",
          hg: "base(...) chaining: parent constructor pehle chalta hai"
        },
        check: "run",
        expected: "Employee ctor\nManager ctor\nAsha manages 5",
        src: `var m = new Manager("Asha", 5);
Console.WriteLine(m.Describe());

public class Employee
{
    public string Name { get; }

    public Employee(string name)       // no parameterless ctor, so children must call base(name)
    {
        Name = name;
        Console.WriteLine("Employee ctor");
    }

    public virtual string Describe() => Name;
}

public class Manager : Employee
{
    public int TeamSize { get; }

    public Manager(string name, int teamSize) : base(name)
    {
        TeamSize = teamSize;
        Console.WriteLine("Manager ctor");
    }

    public override string Describe() => $"{Name} manages {TeamSize}";
}`
      }, {
        caption: {
          en: "Primary constructors (C# 12) — common for DI-style services",
          hi: "Primary constructors (C# 12) — DI वाली services में common",
          hg: "Primary constructors (C# 12) — DI wali services mein common"
        },
        check: "compile",
        src: `public interface IOrderRepository
{
    void Save(string item);
}

// 'repo' is in scope in the whole class body
public class OrderService(IOrderRepository repo)
{
    public void Place(string item) => repo.Save(item);
}

// Need a public property? Declare it and assign it from the parameter.
public class Person(string name)
{
    public string Name { get; } = name;
}

// Passing primary-constructor parameters to the base class
public class Student(string name, int rollNo) : Person(name)
{
    public int RollNo { get; } = rollNo;
}`
      }]
    },
    {
      id: "access-modifiers",
      depth: "detailed",
      title: { en: "Access modifiers", hi: "Access modifiers (कौन क्या देख सकता है)", hg: "Access modifiers" },
      body: {
        en: `<p><b>Analogy — a housing society:</b> the main road is open to everyone (<code>public</code>). Your bedroom is only yours (<code>private</code>). Family property goes to your children wherever they live (<code>protected</code>). The clubhouse is for residents of this society only (<code>internal</code> — same <b>assembly</b>, i.e. same project/.dll).</p>
<ul>
<li><code>public</code> — everyone.</li>
<li><code>private</code> — only inside the same type.</li>
<li><code>protected</code> — the same type and derived types (in any assembly).</li>
<li><code>internal</code> — any code in the same assembly.</li>
<li><code>protected internal</code> — same assembly <b>OR</b> derived types anywhere (the wider one).</li>
<li><code>private protected</code> (C# 7.2) — derived types <b>AND</b> only in the same assembly (the narrower one).</li>
<li><code>file</code> (C# 11, types only) — visible only inside the same source file; used by source generators.</li>
</ul>
<p><b>Defaults:</b> a top-level class/struct/interface without a modifier is <code>internal</code>; class and struct members are <code>private</code>; interface members are <code>public</code>; nested types are <code>private</code>.</p>
<p><b>TL tip:</b> start with the most restrictive access and open up only when needed. Keeping classes <code>internal</code> in a library makes it much easier to change them later without breaking consumers.</p>`,
        hi: `<p><b>Analogy — housing society:</b> Main road सबके लिए खुली है (<code>public</code>)। आपका bedroom सिर्फ़ आपका है (<code>private</code>)। Family property आपके बच्चों को मिलती है, वो कहीं भी रहें (<code>protected</code>)। Clubhouse सिर्फ़ इसी society के residents के लिए है (<code>internal</code> — same <b>assembly</b>, यानी same project/.dll)।</p>
<ul>
<li><code>public</code> — सब के लिए।</li>
<li><code>private</code> — सिर्फ़ उसी type के अंदर।</li>
<li><code>protected</code> — वही type और उसके derived types (किसी भी assembly में)।</li>
<li><code>internal</code> — same assembly का कोई भी code।</li>
<li><code>protected internal</code> — same assembly <b>या</b> कहीं भी derived types (ज़्यादा खुला)।</li>
<li><code>private protected</code> (C# 7.2) — derived types <b>और</b> वो भी सिर्फ़ same assembly में (ज़्यादा बंद)।</li>
<li><code>file</code> (C# 11, सिर्फ़ types के लिए) — सिर्फ़ उसी source file के अंदर दिखता है; source generators में use होता है।</li>
</ul>
<p><b>Defaults:</b> बिना modifier के top-level class/struct/interface <code>internal</code> होती है; class और struct के members <code>private</code>; interface members <code>public</code>; nested types <code>private</code>।</p>
<p><b>TL tip:</b> सबसे restrictive access से शुरू करो और ज़रूरत पड़ने पर ही खोलो। Library में classes को <code>internal</code> रखने से बाद में उन्हें बदलना आसान होता है, consumers नहीं टूटते।</p>`,
        hg: `<p><b>Analogy — housing society:</b> Main road sabke liye khuli hai (<code>public</code>). Aapka bedroom sirf aapka hai (<code>private</code>). Family property aapke bacchon ko milti hai, woh kahin bhi rahein (<code>protected</code>). Clubhouse sirf isi society ke residents ke liye hai (<code>internal</code> — same <b>assembly</b>, yaani same project/.dll).</p>
<ul>
<li><code>public</code> — sab ke liye.</li>
<li><code>private</code> — sirf usi type ke andar.</li>
<li><code>protected</code> — wahi type aur uske derived types (kisi bhi assembly mein).</li>
<li><code>internal</code> — same assembly ka koi bhi code.</li>
<li><code>protected internal</code> — same assembly <b>ya</b> kahin bhi derived types (zyada khula).</li>
<li><code>private protected</code> (C# 7.2) — derived types <b>aur</b> woh bhi sirf same assembly mein (zyada band).</li>
<li><code>file</code> (C# 11, sirf types ke liye) — sirf usi source file ke andar dikhta hai; source generators mein use hota hai.</li>
</ul>
<p><b>Defaults:</b> bina modifier ke top-level class/struct/interface <code>internal</code> hoti hai; class aur struct ke members <code>private</code>; interface members <code>public</code>; nested types <code>private</code>.</p>
<p><b>TL tip:</b> sabse restrictive access se shuru karo aur zaroorat padne par hi kholo. Library mein classes ko <code>internal</code> rakhne se baad mein unhe badalna aasaan hota hai, consumers nahi tootte.</p>`
      },
      code: [{
        caption: {
          en: "All access modifiers in one place (imagine this file is in Billing.dll)",
          hi: "सारे access modifiers एक जगह (मान लो यह file Billing.dll में है)",
          hg: "Saare access modifiers ek jagah (maan lo yeh file Billing.dll mein hai)"
        },
        check: "compile",
        src: `public class Invoice
{
    private decimal _amount;                  // only inside Invoice
    protected string Number = "";             // Invoice + derived classes (any assembly)
    internal int BranchCode;                  // any code in Billing.dll
    protected internal string Notes = "";     // Billing.dll OR derived classes anywhere
    private protected decimal Discount;       // derived classes, and only inside Billing.dll

    public decimal Total => _amount - Discount;   // everyone
    public void Add(decimal amount) => _amount += amount;
}

public class GstInvoice : Invoice
{
    public void Prepare()
    {
        Number = "GST-001";    // ok: protected
        Discount = 10m;        // ok: private protected, same assembly
        BranchCode = 7;        // ok: internal, same assembly
        // _amount = 5m;       // CS0122: private, not visible here
    }
}

class Helper { }               // no modifier on a top-level type = internal
file class FileOnlyHelper { }  // C# 11: visible only in this file`
      }]
    },
    {
      id: "composition-in-code",
      depth: "detailed",
      title: { en: "Composition in code", hi: "Code में Composition", hg: "Code mein Composition" },
      body: {
        en: `<p><b>Analogy — a kirana shop counter:</b> the shop owner does not <i>become</i> a UPI app or an SMS service. The counter <b>has</b> a QR scanner and a phone that sends SMS. Change the scanner, keep the shop.</p>
<p>With inheritance you would need <code>UpiSmsCheckout</code>, <code>UpiEmailCheckout</code>, <code>CardSmsCheckout</code>, <code>CardEmailCheckout</code> ... — 2 payment types × 2 message types = 4 classes, and it keeps multiplying. With composition you need <b>one</b> <code>CheckoutService</code> and plug in any <code>IPaymentGateway</code> + any <code>IMessageSender</code>.</p>
<ul>
<li>In ASP.NET Core you register the parts in DI (<code>builder.Services.AddScoped&lt;IPaymentGateway, UpiGateway&gt;()</code>) and the container composes the object for you.</li>
<li>In unit tests you pass a fake or mock gateway — no real payment needed.</li>
<li>This is also the base of patterns you will see later: <b>Strategy</b>, <b>Decorator</b>, and the <b>Dependency Inversion</b> principle (SOLID).</li>
</ul>`,
        hi: `<p><b>Analogy — किराना दुकान का counter:</b> दुकानदार UPI app या SMS service <i>नहीं बन</i> जाता। Counter के पास QR scanner और SMS भेजने वाला phone <b>होता है</b>। Scanner बदलो, दुकान वही रहती है।</p>
<p>Inheritance से आपको <code>UpiSmsCheckout</code>, <code>UpiEmailCheckout</code>, <code>CardSmsCheckout</code>, <code>CardEmailCheckout</code> ... बनानी पड़तीं — 2 payment types × 2 message types = 4 classes, और यह बढ़ता ही जाता है। Composition से आपको <b>एक</b> <code>CheckoutService</code> चाहिए और उसमें कोई भी <code>IPaymentGateway</code> + कोई भी <code>IMessageSender</code> लगा दो।</p>
<ul>
<li>ASP.NET Core में आप parts को DI में register करते हो (<code>builder.Services.AddScoped&lt;IPaymentGateway, UpiGateway&gt;()</code>) और container आपके लिए object compose कर देता है।</li>
<li>Unit tests में आप fake या mock gateway pass करते हो — असली payment की ज़रूरत नहीं।</li>
<li>आगे आने वाले patterns की नींव भी यही है: <b>Strategy</b>, <b>Decorator</b>, और <b>Dependency Inversion</b> principle (SOLID)।</li>
</ul>`,
        hg: `<p><b>Analogy — kirana dukaan ka counter:</b> dukaandaar UPI app ya SMS service <i>nahi ban</i> jaata. Counter ke paas QR scanner aur SMS bhejne wala phone <b>hota hai</b>. Scanner badlo, dukaan wahi rehti hai.</p>
<p>Inheritance se aapko <code>UpiSmsCheckout</code>, <code>UpiEmailCheckout</code>, <code>CardSmsCheckout</code>, <code>CardEmailCheckout</code> ... banani padtin — 2 payment types × 2 message types = 4 classes, aur yeh badhta hi jaata hai. Composition se aapko <b>ek</b> <code>CheckoutService</code> chahiye aur usmein koi bhi <code>IPaymentGateway</code> + koi bhi <code>IMessageSender</code> laga do.</p>
<ul>
<li>ASP.NET Core mein aap parts ko DI mein register karte ho (<code>builder.Services.AddScoped&lt;IPaymentGateway, UpiGateway&gt;()</code>) aur container aapke liye object compose kar deta hai.</li>
<li>Unit tests mein aap fake ya mock gateway pass karte ho — asli payment ki zaroorat nahi.</li>
<li>Aage aane wale patterns ki neenv bhi yahi hai: <b>Strategy</b>, <b>Decorator</b>, aur <b>Dependency Inversion</b> principle (SOLID).</li>
</ul>`
      },
      code: [{
        caption: {
          en: "HAS-A: one CheckoutService, any gateway + any sender",
          hi: "HAS-A: एक CheckoutService, कोई भी gateway + कोई भी sender",
          hg: "HAS-A: ek CheckoutService, koi bhi gateway + koi bhi sender"
        },
        check: "run",
        expected: "UPI charged 499\nSMS: Paid 499. Thank you!\nCard charged 1200\nEmail: Paid 1200. Thank you!",
        src: `var upiShop = new CheckoutService(new UpiGateway(), new SmsSender());
upiShop.Checkout(499);

var cardShop = new CheckoutService(new CardGateway(), new EmailSender());
cardShop.Checkout(1200);

public interface IPaymentGateway { bool Charge(decimal amount); }
public interface IMessageSender { void Send(string text); }

public class UpiGateway : IPaymentGateway
{
    public bool Charge(decimal amount) { Console.WriteLine($"UPI charged {amount}"); return true; }
}

public class CardGateway : IPaymentGateway
{
    public bool Charge(decimal amount) { Console.WriteLine($"Card charged {amount}"); return true; }
}

public class SmsSender : IMessageSender
{
    public void Send(string text) => Console.WriteLine($"SMS: {text}");
}

public class EmailSender : IMessageSender
{
    public void Send(string text) => Console.WriteLine($"Email: {text}");
}

// HAS-A: built from parts (injected through the primary constructor), not inherited from them
public class CheckoutService(IPaymentGateway gateway, IMessageSender sender)
{
    public void Checkout(decimal amount)
    {
        if (gateway.Charge(amount))
            sender.Send($"Paid {amount}. Thank you!");
    }
}`
      }]
    }
  ],
  qa: [
    {
      id: "four-pillars",
      depth: "short",
      q: "What are the four pillars of OOP? Explain each with a real example.",
      answer: "Encapsulation, Abstraction, Inheritance and Polymorphism. Encapsulation hides data behind methods that enforce rules, abstraction exposes only what the caller needs, inheritance reuses a base class in an is-a relationship, and polymorphism lets one call behave differently depending on the actual object.",
      meaning: {
        hi: "चार pillars: Encapsulation (data छुपाकर methods से rules लागू करो), Abstraction (caller को सिर्फ़ ज़रूरी चीज़ दिखाओ), Inheritance (is-a relation में base class reuse), Polymorphism (एक call, असली object के हिसाब से अलग behaviour)।",
        hg: "Chaar pillars: Encapsulation (data chhupakar methods se rules laagu karo), Abstraction (caller ko sirf zaroori cheez dikhao), Inheritance (is-a relation mein base class reuse), Polymorphism (ek call, asli object ke hisaab se alag behaviour)."
      },
      explain: {
        en: `<p>Use <b>one running example</b> — interviewers love it. A payment system:</p>
<ul>
<li><b>Encapsulation</b>: <code>BankAccount.Balance</code> has a private setter; only <code>Withdraw</code> can reduce it, and it checks the balance first.</li>
<li><b>Abstraction</b>: the checkout code depends on <code>IPaymentGateway.Charge(amount)</code> and does not know whether it is UPI or card.</li>
<li><b>Inheritance</b>: <code>SavingsAccount : BankAccount</code> reuses deposit/withdraw and adds interest.</li>
<li><b>Polymorphism</b>: <code>gateway.Charge(500)</code> runs UPI or card logic depending on the object injected.</li>
</ul>
<p>Follow-up: "Which pillar is most misused?" — Inheritance. Teams build deep hierarchies just to reuse code; composition is usually better.</p>`,
        hi: `<p><b>एक ही running example</b> use करो — interviewers को यह बहुत पसंद है। Payment system लो:</p>
<ul>
<li><b>Encapsulation</b>: <code>BankAccount.Balance</code> का setter private है; सिर्फ़ <code>Withdraw</code> उसे कम कर सकता है, और पहले balance check करता है।</li>
<li><b>Abstraction</b>: checkout code <code>IPaymentGateway.Charge(amount)</code> पर depend करता है, उसे नहीं पता कि UPI है या card।</li>
<li><b>Inheritance</b>: <code>SavingsAccount : BankAccount</code> deposit/withdraw reuse करता है और interest जोड़ता है।</li>
<li><b>Polymorphism</b>: <code>gateway.Charge(500)</code> inject किए गए object के हिसाब से UPI या card logic चलाता है।</li>
</ul>
<p>Follow-up: "कौन सा pillar सबसे ज़्यादा गलत use होता है?" — Inheritance। Teams सिर्फ़ code reuse के लिए गहरी hierarchies बना देती हैं; composition अक्सर बेहतर है।</p>`,
        hg: `<p><b>Ek hi running example</b> use karo — interviewers ko yeh bahut pasand hai. Payment system lo:</p>
<ul>
<li><b>Encapsulation</b>: <code>BankAccount.Balance</code> ka setter private hai; sirf <code>Withdraw</code> use kam kar sakta hai, aur pehle balance check karta hai.</li>
<li><b>Abstraction</b>: checkout code <code>IPaymentGateway.Charge(amount)</code> par depend karta hai, use nahi pata ki UPI hai ya card.</li>
<li><b>Inheritance</b>: <code>SavingsAccount : BankAccount</code> deposit/withdraw reuse karta hai aur interest jodta hai.</li>
<li><b>Polymorphism</b>: <code>gateway.Charge(500)</code> inject kiye gaye object ke hisaab se UPI ya card logic chalata hai.</li>
</ul>
<p>Follow-up: "Kaun sa pillar sabse zyada galat use hota hai?" — Inheritance. Teams sirf code reuse ke liye gehri hierarchies bana deti hain; composition aksar behtar hai.</p>`
      }
    },
    {
      id: "abstract-vs-interface",
      depth: "short",
      q: "Abstract class vs interface — what is the difference, and when would you use which?",
      answer: "An abstract class is a partial base class: it can hold state, constructors and shared code, but a class can inherit only one. An interface is a contract with no instance state, and a class can implement many — I use interfaces for contracts, DI and mocking, and an abstract class when closely related types share real code.",
      meaning: {
        hi: "Abstract class एक अधूरी base class है: इसमें state, constructors और shared code हो सकता है, पर inherit सिर्फ़ एक कर सकते हो। Interface एक contract है, instance state नहीं, और कई implement कर सकते हो — contracts, DI और mocking के लिए interface, और करीबी types में असली shared code के लिए abstract class।",
        hg: "Abstract class ek adhoori base class hai: ismein state, constructors aur shared code ho sakta hai, par inherit sirf ek kar sakte ho. Interface ek contract hai, instance state nahi, aur kai implement kar sakte ho — contracts, DI aur mocking ke liye interface, aur kareebi types mein asli shared code ke liye abstract class."
      },
      explain: {
        en: `<ul>
<li><b>State</b>: abstract class can have instance fields; interface cannot.</li>
<li><b>Constructors</b>: abstract class yes (usually <code>protected</code>); interface no.</li>
<li><b>Count</b>: one base class, but any number of interfaces.</li>
<li><b>Access</b>: abstract class members can be anything; interface members are public by default.</li>
<li><b>Bodies</b>: since C# 8 interfaces can have default method bodies, but only for versioning; they still cannot hold instance state.</li>
<li><b>Value types</b>: a <code>struct</code> can implement interfaces but cannot inherit a class.</li>
</ul>
<p><b>TL angle:</b> services expose interfaces so they can be registered in DI and mocked in tests. Abstract bases are for frameworks and families: <code>BackgroundService</code>, <code>DbContext</code>, <code>ControllerBase</code>. Often you combine them: <code>IRepository&lt;T&gt;</code> + <code>RepositoryBase&lt;T&gt;</code>.</p>
<p>Follow-up: "Interfaces have method bodies now — so what is the difference?" — still no instance fields or constructors, still multiple implementation, and the default body is only reachable through the interface type.</p>`,
        hi: `<ul>
<li><b>State</b>: abstract class में instance fields हो सकते हैं; interface में नहीं।</li>
<li><b>Constructors</b>: abstract class में हाँ (अक्सर <code>protected</code>); interface में नहीं।</li>
<li><b>गिनती</b>: base class एक, पर interfaces कितने भी।</li>
<li><b>Access</b>: abstract class के members कुछ भी हो सकते हैं; interface members by default public।</li>
<li><b>Bodies</b>: C# 8 से interfaces में default method bodies हो सकती हैं, पर सिर्फ़ versioning के लिए; instance state अब भी नहीं रख सकते।</li>
<li><b>Value types</b>: <code>struct</code> interfaces implement कर सकता है पर class inherit नहीं कर सकता।</li>
</ul>
<p><b>TL angle:</b> services interfaces expose करती हैं ताकि DI में register हो सकें और tests में mock हो सकें। Abstract bases frameworks और families के लिए हैं: <code>BackgroundService</code>, <code>DbContext</code>, <code>ControllerBase</code>। अक्सर दोनों साथ: <code>IRepository&lt;T&gt;</code> + <code>RepositoryBase&lt;T&gt;</code>।</p>
<p>Follow-up: "अब interfaces में भी method bodies हैं — तो फ़र्क क्या है?" — अब भी instance fields या constructors नहीं, अब भी multiple implementation, और default body सिर्फ़ interface type से मिलती है।</p>`,
        hg: `<ul>
<li><b>State</b>: abstract class mein instance fields ho sakte hain; interface mein nahi.</li>
<li><b>Constructors</b>: abstract class mein haan (aksar <code>protected</code>); interface mein nahi.</li>
<li><b>Ginti</b>: base class ek, par interfaces kitne bhi.</li>
<li><b>Access</b>: abstract class ke members kuch bhi ho sakte hain; interface members by default public.</li>
<li><b>Bodies</b>: C# 8 se interfaces mein default method bodies ho sakti hain, par sirf versioning ke liye; instance state ab bhi nahi rakh sakte.</li>
<li><b>Value types</b>: <code>struct</code> interfaces implement kar sakta hai par class inherit nahi kar sakta.</li>
</ul>
<p><b>TL angle:</b> services interfaces expose karti hain taaki DI mein register ho sakein aur tests mein mock ho sakein. Abstract bases frameworks aur families ke liye hain: <code>BackgroundService</code>, <code>DbContext</code>, <code>ControllerBase</code>. Aksar dono saath: <code>IRepository&lt;T&gt;</code> + <code>RepositoryBase&lt;T&gt;</code>.</p>
<p>Follow-up: "Ab interfaces mein bhi method bodies hain — to farak kya hai?" — ab bhi instance fields ya constructors nahi, ab bhi multiple implementation, aur default body sirf interface type se milti hai.</p>`
      }
    },
    {
      id: "composition-over-inheritance",
      depth: "short",
      q: "Why do we prefer composition over inheritance?",
      answer: "Inheritance ties a child tightly to its parent's internals and is fixed at compile time, so base-class changes ripple into every child. Composition builds behaviour from small objects behind interfaces, so parts can be swapped, combined and mocked without a class explosion.",
      meaning: {
        hi: "Inheritance child को parent के अंदर की चीज़ों से कसकर बाँध देता है और compile time पर fix होता है, इसलिए base बदलने का असर हर child पर पड़ता है। Composition में behaviour छोटे objects से बनता है जो interfaces के पीछे होते हैं — parts बदल सकते हो, जोड़ सकते हो, mock कर सकते हो, class explosion नहीं होता।",
        hg: "Inheritance child ko parent ke andar ki cheezon se kaskar baandh deta hai aur compile time par fix hota hai, isliye base badalne ka asar har child par padta hai. Composition mein behaviour chhote objects se banta hai jo interfaces ke peeche hote hain — parts badal sakte ho, jod sakte ho, mock kar sakte ho, class explosion nahi hota."
      },
      explain: {
        en: `<ul>
<li><b>Fragile base class</b>: someone changes a protected method in the base; five derived classes behave differently, and nobody notices until production.</li>
<li><b>Class explosion</b>: 3 payment types × 3 notification types with inheritance = 9 classes; with composition = 3 + 3 small classes and one service.</li>
<li><b>Testability</b>: a composed dependency (<code>IPaymentGateway</code>) can be mocked; a base class you inherit from cannot be replaced in a test.</li>
<li><b>Runtime flexibility</b>: composition can pick the part at runtime (config, feature flag, DI); inheritance is fixed when you compile.</li>
</ul>
<p>Inheritance is not bad — use it for a real is-a with a stable base: custom exceptions (<code>class OrderNotFoundException : Exception</code>), <code>ControllerBase</code>, <code>BackgroundService</code>.</p>
<p>Follow-up: "Give an example from your project." Prepare one: e.g. a notification service that receives <code>IEnumerable&lt;INotificationChannel&gt;</code> from DI instead of an inheritance tree of notifier classes.</p>`,
        hi: `<ul>
<li><b>Fragile base class</b>: किसी ने base का एक protected method बदल दिया; पाँच derived classes अलग behave करने लगीं, और production तक किसी को पता नहीं चला।</li>
<li><b>Class explosion</b>: inheritance से 3 payment types × 3 notification types = 9 classes; composition से 3 + 3 छोटी classes और एक service।</li>
<li><b>Testability</b>: composed dependency (<code>IPaymentGateway</code>) mock हो सकती है; जिस base class से inherit किया उसे test में बदल नहीं सकते।</li>
<li><b>Runtime flexibility</b>: composition में part runtime पर चुन सकते हो (config, feature flag, DI); inheritance compile करते ही fix हो जाता है।</li>
</ul>
<p>Inheritance बुरा नहीं है — सच्चे is-a और stable base के लिए use करो: custom exceptions (<code>class OrderNotFoundException : Exception</code>), <code>ControllerBase</code>, <code>BackgroundService</code>।</p>
<p>Follow-up: "अपने project से example दो।" एक तैयार रखो: जैसे notification service जो notifier classes के inheritance tree की जगह DI से <code>IEnumerable&lt;INotificationChannel&gt;</code> लेती है।</p>`,
        hg: `<ul>
<li><b>Fragile base class</b>: kisi ne base ka ek protected method badal diya; paanch derived classes alag behave karne lagin, aur production tak kisi ko pata nahi chala.</li>
<li><b>Class explosion</b>: inheritance se 3 payment types × 3 notification types = 9 classes; composition se 3 + 3 chhoti classes aur ek service.</li>
<li><b>Testability</b>: composed dependency (<code>IPaymentGateway</code>) mock ho sakti hai; jis base class se inherit kiya use test mein badal nahi sakte.</li>
<li><b>Runtime flexibility</b>: composition mein part runtime par chun sakte ho (config, feature flag, DI); inheritance compile karte hi fix ho jaata hai.</li>
</ul>
<p>Inheritance bura nahi hai — sacche is-a aur stable base ke liye use karo: custom exceptions (<code>class OrderNotFoundException : Exception</code>), <code>ControllerBase</code>, <code>BackgroundService</code>.</p>
<p>Follow-up: "Apne project se example do." Ek taiyaar rakho: jaise notification service jo notifier classes ke inheritance tree ki jagah DI se <code>IEnumerable&lt;INotificationChannel&gt;</code> leti hai.</p>`
      }
    },
    {
      id: "overloading-vs-overriding",
      depth: "short",
      q: "What is the difference between method overloading and method overriding?",
      answer: "Overloading is the same method name with different parameters in one type, resolved by the compiler at compile time. Overriding is a derived class replacing a virtual or abstract method with the same signature, resolved at runtime from the actual object.",
      meaning: {
        hi: "Overloading = एक type में same नाम, अलग parameters; compiler compile time पर तय करता है। Overriding = derived class, virtual या abstract method को same signature के साथ बदलती है; runtime पर असली object देखकर तय होता है।",
        hg: "Overloading = ek type mein same naam, alag parameters; compiler compile time par tay karta hai. Overriding = derived class, virtual ya abstract method ko same signature ke saath badalti hai; runtime par asli object dekhkar tay hota hai."
      },
      explain: {
        en: `<p><b>Overloading rules:</b></p>
<ul>
<li>Parameters must differ in number, type or order (or <code>ref</code>/<code>out</code>/<code>in</code> vs by-value).</li>
<li>Return type alone is not enough (CS0111). <code>ref</code> vs <code>out</code> alone is not enough either.</li>
<li>The compiler picks using the <b>declared</b> types of the arguments — see the "overload vs override" puzzle.</li>
</ul>
<p><b>Overriding rules:</b></p>
<ul>
<li>Base method must be <code>virtual</code>, <code>abstract</code> or already <code>override</code>.</li>
<li>Same name and parameters, same access level. Since C# 9 an override may return a more derived type (covariant return).</li>
<li>Static, private and non-virtual methods cannot be overridden.</li>
</ul>
<p>Follow-up: "Can we overload by return type?" No. "Can we override a static method?" No — static members belong to the type, not the object.</p>`,
        hi: `<p><b>Overloading के rules:</b></p>
<ul>
<li>Parameters गिनती, type या order में अलग होने चाहिए (या <code>ref</code>/<code>out</code>/<code>in</code> बनाम by-value)।</li>
<li>सिर्फ़ return type अलग होना काफ़ी नहीं (CS0111)। सिर्फ़ <code>ref</code> बनाम <code>out</code> भी काफ़ी नहीं।</li>
<li>Compiler arguments के <b>declared</b> types देखकर चुनता है — "overload vs override" puzzle देखो।</li>
</ul>
<p><b>Overriding के rules:</b></p>
<ul>
<li>Base method <code>virtual</code>, <code>abstract</code> या पहले से <code>override</code> होना चाहिए।</li>
<li>Same नाम और parameters, same access level। C# 9 से override ज़्यादा derived type return कर सकता है (covariant return)।</li>
<li>Static, private और non-virtual methods override नहीं हो सकते।</li>
</ul>
<p>Follow-up: "क्या return type से overload कर सकते हैं?" नहीं। "क्या static method override कर सकते हैं?" नहीं — static members type के होते हैं, object के नहीं।</p>`,
        hg: `<p><b>Overloading ke rules:</b></p>
<ul>
<li>Parameters ginti, type ya order mein alag hone chahiye (ya <code>ref</code>/<code>out</code>/<code>in</code> banaam by-value).</li>
<li>Sirf return type alag hona kaafi nahi (CS0111). Sirf <code>ref</code> banaam <code>out</code> bhi kaafi nahi.</li>
<li>Compiler arguments ke <b>declared</b> types dekhkar chunta hai — "overload vs override" puzzle dekho.</li>
</ul>
<p><b>Overriding ke rules:</b></p>
<ul>
<li>Base method <code>virtual</code>, <code>abstract</code> ya pehle se <code>override</code> hona chahiye.</li>
<li>Same naam aur parameters, same access level. C# 9 se override zyada derived type return kar sakta hai (covariant return).</li>
<li>Static, private aur non-virtual methods override nahi ho sakte.</li>
</ul>
<p>Follow-up: "Kya return type se overload kar sakte hain?" Nahi. "Kya static method override kar sakte hain?" Nahi — static members type ke hote hain, object ke nahi.</p>`
      }
    },
    {
      id: "override-vs-new",
      depth: "short",
      q: "What is the difference between override and new (method hiding) in C#?",
      answer: "override replaces the base virtual method, so even a base-class reference calls the derived version. new only hides the base method, so which version runs depends on the reference type — override follows the object, new follows the reference.",
      meaning: {
        hi: "override base के virtual method को बदल देता है, इसलिए base-class reference से भी derived version चलता है। new सिर्फ़ base method को छुपाता है, इसलिए कौन सा version चलेगा यह reference type पर depend करता है — override object को follow करता है, new reference को।",
        hg: "override base ke virtual method ko badal deta hai, isliye base-class reference se bhi derived version chalta hai. new sirf base method ko chhupata hai, isliye kaun sa version chalega yeh reference type par depend karta hai — override object ko follow karta hai, new reference ko."
      },
      explain: {
        en: `<p><code>Animal a = new Dog();</code></p>
<ul>
<li>If <code>Dog</code> <b>overrides</b> <code>Speak()</code>: <code>a.Speak()</code> → Dog's version (the object is a Dog).</li>
<li>If <code>Dog</code> declares <code>new void Move()</code>: <code>a.Move()</code> → Animal's version (the reference is <code>Animal</code>); <code>((Dog)a).Move()</code> → Dog's version.</li>
</ul>
<p>If you hide a member without writing <code>new</code>, the code still compiles with warning CS0108 — <code>new</code> just says "I did this on purpose".</p>
<p><b>TL angle:</b> in code review, <code>new</code> on a method is a red flag — callers using the base type get different behaviour from callers using the derived type. Accept it only when you cannot change a third-party base class.</p>`,
        hi: `<p><code>Animal a = new Dog();</code></p>
<ul>
<li>अगर <code>Dog</code> ने <code>Speak()</code> को <b>override</b> किया: <code>a.Speak()</code> → Dog का version (object Dog है)।</li>
<li>अगर <code>Dog</code> ने <code>new void Move()</code> लिखा: <code>a.Move()</code> → Animal का version (reference <code>Animal</code> है); <code>((Dog)a).Move()</code> → Dog का version।</li>
</ul>
<p>अगर <code>new</code> लिखे बिना member hide करो, तो code compile होता है पर warning CS0108 आती है — <code>new</code> बस बताता है कि "मैंने यह जानबूझकर किया"।</p>
<p><b>TL angle:</b> code review में method पर <code>new</code> एक red flag है — base type से call करने वालों को अलग behaviour मिलता है और derived type से call करने वालों को अलग। इसे तभी accept करो जब third-party base class बदल नहीं सकते।</p>`,
        hg: `<p><code>Animal a = new Dog();</code></p>
<ul>
<li>Agar <code>Dog</code> ne <code>Speak()</code> ko <b>override</b> kiya: <code>a.Speak()</code> → Dog ka version (object Dog hai).</li>
<li>Agar <code>Dog</code> ne <code>new void Move()</code> likha: <code>a.Move()</code> → Animal ka version (reference <code>Animal</code> hai); <code>((Dog)a).Move()</code> → Dog ka version.</li>
</ul>
<p>Agar <code>new</code> likhe bina member hide karo, to code compile hota hai par warning CS0108 aati hai — <code>new</code> bas batata hai ki "maine yeh jaanboojhkar kiya".</p>
<p><b>TL angle:</b> code review mein method par <code>new</code> ek red flag hai — base type se call karne walon ko alag behaviour milta hai aur derived type se call karne walon ko alag. Ise tabhi accept karo jab third-party base class badal nahi sakte.</p>`
      }
    },
    {
      id: "multiple-inheritance",
      depth: "short",
      q: "Does C# support multiple inheritance? Why not, and what do you use instead?",
      answer: "Not for classes — a class has exactly one base class, which avoids the diamond problem of two parents providing the same member. A class can implement many interfaces, and to reuse code from several places we use composition.",
      meaning: {
        hi: "Classes के लिए नहीं — class की base class सिर्फ़ एक होती है, ताकि diamond problem (दो parents एक ही member दें) से बचें। Class कई interfaces implement कर सकती है, और कई जगह से code reuse के लिए composition use करते हैं।",
        hg: "Classes ke liye nahi — class ki base class sirf ek hoti hai, taaki diamond problem (do parents ek hi member dein) se bachein. Class kai interfaces implement kar sakti hai, aur kai jagah se code reuse ke liye composition use karte hain."
      },
      explain: {
        en: `<p><b>Diamond problem:</b> <code>B</code> and <code>C</code> both inherit <code>A</code> and both override <code>Print()</code>. If <code>D</code> could inherit both, which <code>Print()</code> should <code>D</code> get? Which copy of <code>A</code>'s fields? C# avoids the question by allowing one base class.</p>
<ul>
<li>A class: one base class + any number of interfaces: <code>class SalesReport : ReportBase, IExportable, IDisposable</code>.</li>
<li>An interface can extend many interfaces: <code>interface IReadWrite : IReader, IWriter</code>.</li>
<li>A <code>struct</code> cannot inherit anything (except implicitly from <code>ValueType</code>) but can implement interfaces.</li>
<li>With default interface methods a diamond can appear between interfaces. The compiler then requires one most specific implementation; if it is ambiguous you get a compile error and must implement the member yourself.</li>
</ul>`,
        hi: `<p><b>Diamond problem:</b> <code>B</code> और <code>C</code> दोनों <code>A</code> से inherit करते हैं और दोनों <code>Print()</code> override करते हैं। अगर <code>D</code> दोनों से inherit कर सके, तो <code>D</code> को कौन सा <code>Print()</code> मिले? <code>A</code> के fields की कौन सी copy? C# एक base class allow करके यह सवाल ही ख़त्म कर देता है।</p>
<ul>
<li>Class: एक base class + कितने भी interfaces: <code>class SalesReport : ReportBase, IExportable, IDisposable</code>।</li>
<li>Interface कई interfaces को extend कर सकता है: <code>interface IReadWrite : IReader, IWriter</code>।</li>
<li><code>struct</code> कुछ inherit नहीं कर सकता (implicitly <code>ValueType</code> के अलावा) पर interfaces implement कर सकता है।</li>
<li>Default interface methods के साथ interfaces के बीच diamond बन सकता है। तब compiler को एक most specific implementation चाहिए; अगर ambiguous है तो compile error आता है और आपको वो member ख़ुद implement करना पड़ता है।</li>
</ul>`,
        hg: `<p><b>Diamond problem:</b> <code>B</code> aur <code>C</code> dono <code>A</code> se inherit karte hain aur dono <code>Print()</code> override karte hain. Agar <code>D</code> dono se inherit kar sake, to <code>D</code> ko kaun sa <code>Print()</code> mile? <code>A</code> ke fields ki kaun si copy? C# ek base class allow karke yeh sawaal hi khatam kar deta hai.</p>
<ul>
<li>Class: ek base class + kitne bhi interfaces: <code>class SalesReport : ReportBase, IExportable, IDisposable</code>.</li>
<li>Interface kai interfaces ko extend kar sakta hai: <code>interface IReadWrite : IReader, IWriter</code>.</li>
<li><code>struct</code> kuch inherit nahi kar sakta (implicitly <code>ValueType</code> ke alawa) par interfaces implement kar sakta hai.</li>
<li>Default interface methods ke saath interfaces ke beech diamond ban sakta hai. Tab compiler ko ek most specific implementation chahiye; agar ambiguous hai to compile error aata hai aur aapko woh member khud implement karna padta hai.</li>
</ul>`
      }
    },
    {
      id: "encapsulation-vs-abstraction",
      depth: "short",
      q: "What is the difference between encapsulation and abstraction?",
      answer: "Abstraction is a design idea — expose only what the caller needs, the 'what'. Encapsulation is how we protect it — keep data and inner details private and allow changes only through controlled members, so the 'how' stays locked inside.",
      meaning: {
        hi: "Abstraction design की सोच है — caller को सिर्फ़ ज़रूरी चीज़ दिखाओ, यानी 'क्या'। Encapsulation उसे बचाने का तरीका है — data और अंदर की details private रखो और बदलाव सिर्फ़ controlled members से होने दो, ताकि 'कैसे' अंदर बंद रहे।",
        hg: "Abstraction design ki soch hai — caller ko sirf zaroori cheez dikhao, yaani 'kya'. Encapsulation use bachaane ka tareeka hai — data aur andar ki details private rakho aur badlaav sirf controlled members se hone do, taaki 'kaise' andar band rahe."
      },
      explain: {
        en: `<p><b>Car analogy:</b> steering, brake and accelerator are the <b>abstraction</b> — a simple interface for driving. The engine is sealed under the bonnet, and you can change speed only through the accelerator — that is <b>encapsulation</b>.</p>
<ul>
<li>Abstraction tools: interfaces, abstract classes, small public methods with clear names.</li>
<li>Encapsulation tools: <code>private</code> fields, <code>private set</code>/<code>init</code>, validation in methods and constructors, returning read-only views (<code>IReadOnlyList&lt;T&gt;</code>) instead of the inner <code>List&lt;T&gt;</code>.</li>
</ul>
<p>Follow-up: "Is a class with public get/set properties encapsulated?" — Only partly. Anyone can put it into an invalid state. For domain objects with rules, use private setters and methods.</p>`,
        hi: `<p><b>Car analogy:</b> steering, brake और accelerator <b>abstraction</b> हैं — गाड़ी चलाने का simple interface। Engine bonnet के नीचे बंद है, और speed सिर्फ़ accelerator से बदल सकते हो — यह <b>encapsulation</b> है।</p>
<ul>
<li>Abstraction के tools: interfaces, abstract classes, साफ़ नाम वाले छोटे public methods।</li>
<li>Encapsulation के tools: <code>private</code> fields, <code>private set</code>/<code>init</code>, methods और constructors में validation, अंदर की <code>List&lt;T&gt;</code> की जगह read-only view (<code>IReadOnlyList&lt;T&gt;</code>) return करना।</li>
</ul>
<p>Follow-up: "Public get/set properties वाली class encapsulated है?" — थोड़ी-सी ही। कोई भी उसे invalid state में डाल सकता है। Rules वाले domain objects के लिए private setters और methods use करो।</p>`,
        hg: `<p><b>Car analogy:</b> steering, brake aur accelerator <b>abstraction</b> hain — gaadi chalane ka simple interface. Engine bonnet ke neeche band hai, aur speed sirf accelerator se badal sakte ho — yeh <b>encapsulation</b> hai.</p>
<ul>
<li>Abstraction ke tools: interfaces, abstract classes, saaf naam wale chhote public methods.</li>
<li>Encapsulation ke tools: <code>private</code> fields, <code>private set</code>/<code>init</code>, methods aur constructors mein validation, andar ki <code>List&lt;T&gt;</code> ki jagah read-only view (<code>IReadOnlyList&lt;T&gt;</code>) return karna.</li>
</ul>
<p>Follow-up: "Public get/set properties wali class encapsulated hai?" — thodi-si hi. Koi bhi use invalid state mein daal sakta hai. Rules wale domain objects ke liye private setters aur methods use karo.</p>`
      }
    },
    {
      id: "access-modifiers",
      depth: "short",
      q: "Which access modifiers does C# have, and what are the defaults?",
      answer: "public, private, protected, internal, protected internal and private protected, plus file for types since C# 11. Defaults: a top-level type is internal, class and struct members are private, and interface members are public.",
      meaning: {
        hi: "public, private, protected, internal, protected internal और private protected, और C# 11 से types के लिए file। Defaults: top-level type internal, class और struct members private, interface members public।",
        hg: "public, private, protected, internal, protected internal aur private protected, aur C# 11 se types ke liye file. Defaults: top-level type internal, class aur struct members private, interface members public."
      },
      explain: {
        en: `<p>The two that confuse everyone:</p>
<ul>
<li><code>protected internal</code> = <b>OR</b>: same assembly, <i>or</i> a derived class in any assembly.</li>
<li><code>private protected</code> = <b>AND</b>: a derived class, <i>and</i> only inside the same assembly.</li>
</ul>
<p>Assembly = one compiled project (.dll/.exe). <code>InternalsVisibleTo</code> can open <code>internal</code> members to another assembly — commonly the unit-test project.</p>
<p><b>TL angle:</b> least privilege. Default to <code>private</code>/<code>internal</code>; make something <code>public</code> only when another project really needs it, because every public member is a promise you must keep.</p>`,
        hi: `<p>दो modifiers जो सबको confuse करते हैं:</p>
<ul>
<li><code>protected internal</code> = <b>OR (या)</b>: same assembly, <i>या</i> किसी भी assembly में derived class।</li>
<li><code>private protected</code> = <b>AND (और)</b>: derived class, <i>और</i> वो भी सिर्फ़ same assembly में।</li>
</ul>
<p>Assembly = एक compiled project (.dll/.exe)। <code>InternalsVisibleTo</code> से <code>internal</code> members दूसरी assembly को दिखा सकते हो — अक्सर unit-test project को।</p>
<p><b>TL angle:</b> least privilege। Default में <code>private</code>/<code>internal</code> रखो; <code>public</code> तभी करो जब दूसरे project को सच में ज़रूरत हो, क्योंकि हर public member एक वादा है जिसे निभाना पड़ता है।</p>`,
        hg: `<p>Do modifiers jo sabko confuse karte hain:</p>
<ul>
<li><code>protected internal</code> = <b>OR (ya)</b>: same assembly, <i>ya</i> kisi bhi assembly mein derived class.</li>
<li><code>private protected</code> = <b>AND (aur)</b>: derived class, <i>aur</i> woh bhi sirf same assembly mein.</li>
</ul>
<p>Assembly = ek compiled project (.dll/.exe). <code>InternalsVisibleTo</code> se <code>internal</code> members doosri assembly ko dikha sakte ho — aksar unit-test project ko.</p>
<p><b>TL angle:</b> least privilege. Default mein <code>private</code>/<code>internal</code> rakho; <code>public</code> tabhi karo jab doosre project ko sach mein zaroorat ho, kyunki har public member ek waada hai jise nibhana padta hai.</p>`
      }
    },
    {
      id: "default-interface-methods",
      depth: "detailed",
      q: "What are default interface methods? Don't they make interfaces the same as abstract classes?",
      answer: "Since C# 8 an interface member can have a body, mainly so a library can add new members to a published interface without breaking existing implementations. Interfaces still cannot have instance fields or constructors, and the default body is callable only through the interface type, so they are not the same as abstract classes.",
      meaning: {
        hi: "C# 8 से interface member की body हो सकती है, ताकि library published interface में नए members जोड़ सके बिना पुराने implementations तोड़े। Interfaces में अब भी instance fields या constructors नहीं होते, और default body सिर्फ़ interface type से call होती है — इसलिए ये abstract classes जैसे नहीं हैं।",
        hg: "C# 8 se interface member ki body ho sakti hai, taaki library published interface mein naye members jod sake bina purane implementations tode. Interfaces mein ab bhi instance fields ya constructors nahi hote, aur default body sirf interface type se call hoti hai — isliye yeh abstract classes jaise nahi hain."
      },
      explain: {
        en: `<ul>
<li>Needs runtime support: .NET Core 3.0+ / .NET 5+. Not available on .NET Framework.</li>
<li>A class that implements the member itself replaces the default.</li>
<li>The class does not "inherit" the default as its own member: <code>new Hindi().Bye()</code> fails (CS1061); <code>((IGreeter)new Hindi()).Bye()</code> works. Inside the class you call it with <code>((IGreeter)this).Bye()</code>.</li>
<li>Interfaces may also contain <code>static</code> members and <code>private</code> helper methods (C# 8) and <code>static abstract</code> members (C# 11).</li>
</ul>
<p><b>TL angle:</b> treat default methods as a <b>versioning tool</b> for shared/public interfaces, not as a way to put business logic into interfaces. See the "default interface method" puzzle.</p>`,
        hi: `<ul>
<li>Runtime support चाहिए: .NET Core 3.0+ / .NET 5+। .NET Framework पर available नहीं।</li>
<li>जो class वो member ख़ुद implement करती है, उसका version default की जगह ले लेता है।</li>
<li>Class default को अपना member बनाकर "inherit" नहीं करती: <code>new Hindi().Bye()</code> fail होगा (CS1061); <code>((IGreeter)new Hindi()).Bye()</code> चलेगा। Class के अंदर से <code>((IGreeter)this).Bye()</code> से call करो।</li>
<li>Interfaces में <code>static</code> members और <code>private</code> helper methods (C# 8) और <code>static abstract</code> members (C# 11) भी हो सकते हैं।</li>
</ul>
<p><b>TL angle:</b> default methods को shared/public interfaces के लिए <b>versioning tool</b> मानो, interfaces में business logic डालने का तरीका नहीं। "default interface method" puzzle देखो।</p>`,
        hg: `<ul>
<li>Runtime support chahiye: .NET Core 3.0+ / .NET 5+. .NET Framework par available nahi.</li>
<li>Jo class woh member khud implement karti hai, uska version default ki jagah le leta hai.</li>
<li>Class default ko apna member banakar "inherit" nahi karti: <code>new Hindi().Bye()</code> fail hoga (CS1061); <code>((IGreeter)new Hindi()).Bye()</code> chalega. Class ke andar se <code>((IGreeter)this).Bye()</code> se call karo.</li>
<li>Interfaces mein <code>static</code> members aur <code>private</code> helper methods (C# 8) aur <code>static abstract</code> members (C# 11) bhi ho sakte hain.</li>
</ul>
<p><b>TL angle:</b> default methods ko shared/public interfaces ke liye <b>versioning tool</b> maano, interfaces mein business logic daalne ka tareeka nahi. "default interface method" puzzle dekho.</p>`
      }
    },
    {
      id: "sealed",
      depth: "detailed",
      q: "What does the sealed keyword do? When would you seal a class?",
      answer: "A sealed class cannot be inherited, and a sealed override cannot be overridden further down the chain. I seal classes that are not designed for extension — it protects their behaviour and lets the JIT turn virtual calls into direct calls.",
      meaning: {
        hi: "Sealed class को inherit नहीं कर सकते, और sealed override को आगे chain में override नहीं कर सकते। जो classes extension के लिए design नहीं हुईं उन्हें मैं seal करता हूँ — इससे उनका behaviour सुरक्षित रहता है और JIT virtual calls को direct calls में बदल सकता है।",
        hg: "Sealed class ko inherit nahi kar sakte, aur sealed override ko aage chain mein override nahi kar sakte. Jo classes extension ke liye design nahi huin unhe main seal karta hoon — isse unka behaviour surakshit rehta hai aur JIT virtual calls ko direct calls mein badal sakta hai."
      },
      explain: {
        en: `<ul>
<li>Examples in .NET: <code>string</code> is sealed; every <code>struct</code> is implicitly sealed.</li>
<li>A sealed class cannot declare <b>new</b> virtual members (CS0549), and a class cannot be both <code>abstract</code> and <code>sealed</code> (CS0418). A <code>static</code> class is compiled as abstract + sealed in IL.</li>
<li><b>Performance</b>: when the JIT knows the exact type, it can devirtualize and inline calls; type checks (<code>is</code>/casts) against sealed types are cheaper too.</li>
<li>The .NET analyzer <b>CA1852</b> suggests sealing internal types that have no subtypes.</li>
</ul>
<p><b>TL angle:</b> "Design for inheritance or prohibit it." Unsealing later is a non-breaking change; sealing a public class later is breaking. So for new public classes, sealed is a safe default unless you plan extension.</p>`,
        hi: `<ul>
<li>.NET में examples: <code>string</code> sealed है; हर <code>struct</code> implicitly sealed होता है।</li>
<li>Sealed class <b>नए</b> virtual members declare नहीं कर सकती (CS0549), और class एक साथ <code>abstract</code> और <code>sealed</code> नहीं हो सकती (CS0418)। <code>static</code> class IL में abstract + sealed बनकर compile होती है।</li>
<li><b>Performance</b>: जब JIT को exact type पता होता है, तो वो calls को devirtualize और inline कर सकता है; sealed types पर type checks (<code>is</code>/casts) भी सस्ते होते हैं।</li>
<li>.NET analyzer <b>CA1852</b> सुझाव देता है कि जिन internal types के subtypes नहीं हैं, उन्हें seal करो।</li>
</ul>
<p><b>TL angle:</b> "Inheritance के लिए design करो, या उसे रोक दो।" बाद में unseal करना non-breaking change है; public class को बाद में seal करना breaking है। इसलिए नई public classes के लिए sealed एक safe default है, जब तक extension का plan न हो।</p>`,
        hg: `<ul>
<li>.NET mein examples: <code>string</code> sealed hai; har <code>struct</code> implicitly sealed hota hai.</li>
<li>Sealed class <b>naye</b> virtual members declare nahi kar sakti (CS0549), aur class ek saath <code>abstract</code> aur <code>sealed</code> nahi ho sakti (CS0418). <code>static</code> class IL mein abstract + sealed bankar compile hoti hai.</li>
<li><b>Performance</b>: jab JIT ko exact type pata hota hai, to woh calls ko devirtualize aur inline kar sakta hai; sealed types par type checks (<code>is</code>/casts) bhi saste hote hain.</li>
<li>.NET analyzer <b>CA1852</b> sujhaav deta hai ki jin internal types ke subtypes nahi hain, unhe seal karo.</li>
</ul>
<p><b>TL angle:</b> "Inheritance ke liye design karo, ya use rok do." Baad mein unseal karna non-breaking change hai; public class ko baad mein seal karna breaking hai. Isliye nayi public classes ke liye sealed ek safe default hai, jab tak extension ka plan na ho.</p>`
      }
    },
    {
      id: "static-constructor",
      depth: "detailed",
      q: "What is a static constructor? When does it run, and what happens if it throws?",
      answer: "A static constructor initializes the static data of a type. It has no parameters and no access modifier, you cannot call it, and the runtime runs it exactly once — before the first instance is created or any static member is used. If it throws, the type fails with TypeInitializationException and stays unusable.",
      meaning: {
        hi: "Static constructor type का static data initialize करता है। इसमें कोई parameter या access modifier नहीं होता, आप इसे call नहीं कर सकते, और runtime इसे सिर्फ़ एक बार चलाता है — पहला object बनने या कोई static member use होने से पहले। अगर यह exception फेंके, तो TypeInitializationException आता है और type आगे use नहीं हो पाता।",
        hg: "Static constructor type ka static data initialize karta hai. Ismein koi parameter ya access modifier nahi hota, aap ise call nahi kar sakte, aur runtime ise sirf ek baar chalata hai — pehla object banne ya koi static member use hone se pehle. Agar yeh exception phenke, to TypeInitializationException aata hai aur type aage use nahi ho paata."
      },
      explain: {
        en: `<ul>
<li>The runtime makes it thread-safe: even if 10 threads touch the type together, it runs once.</li>
<li>Good for: loading a lookup table, setting up a static cache. Avoid slow I/O or anything that can fail — a failure poisons the type for the whole process.</li>
<li>Without an explicit static constructor, static field initializers may run at a time the runtime chooses (the type is marked <code>beforefieldinit</code>). Adding a static constructor makes the timing exact.</li>
<li>With inheritance, <code>new Derived()</code> first triggers <code>Derived</code>'s static constructor, then <code>Base</code>'s (when the base instance constructor runs) — see the puzzles.</li>
</ul>
<p><b>TL angle:</b> in ASP.NET Core prefer DI singletons or options over heavy static constructors — easier to test and to configure.</p>`,
        hi: `<ul>
<li>Runtime इसे thread-safe बनाता है: 10 threads एक साथ type को touch करें, तब भी यह एक ही बार चलता है।</li>
<li>किसके लिए अच्छा: lookup table load करना, static cache setup करना। Slow I/O या fail हो सकने वाला काम मत डालो — एक failure पूरे process के लिए type को ख़राब कर देता है।</li>
<li>Explicit static constructor न हो तो static field initializers उस समय चल सकते हैं जो runtime चुने (type <code>beforefieldinit</code> mark होता है)। Static constructor जोड़ने से timing exact हो जाती है।</li>
<li>Inheritance में <code>new Derived()</code> पहले <code>Derived</code> का static constructor चलाता है, फिर <code>Base</code> का (जब base instance constructor चलता है) — puzzles देखो।</li>
</ul>
<p><b>TL angle:</b> ASP.NET Core में भारी static constructors की जगह DI singletons या options use करो — test और configure करना आसान है।</p>`,
        hg: `<ul>
<li>Runtime ise thread-safe banata hai: 10 threads ek saath type ko touch karein, tab bhi yeh ek hi baar chalta hai.</li>
<li>Kiske liye accha: lookup table load karna, static cache setup karna. Slow I/O ya fail ho sakne wala kaam mat daalo — ek failure poore process ke liye type ko kharaab kar deta hai.</li>
<li>Explicit static constructor na ho to static field initializers us samay chal sakte hain jo runtime chune (type <code>beforefieldinit</code> mark hota hai). Static constructor jodne se timing exact ho jaati hai.</li>
<li>Inheritance mein <code>new Derived()</code> pehle <code>Derived</code> ka static constructor chalata hai, phir <code>Base</code> ka (jab base instance constructor chalta hai) — puzzles dekho.</li>
</ul>
<p><b>TL angle:</b> ASP.NET Core mein bhaari static constructors ki jagah DI singletons ya options use karo — test aur configure karna aasaan hai.</p>`
      }
    },
    {
      id: "private-constructor",
      depth: "detailed",
      q: "Why would you make a constructor private?",
      answer: "To stop code outside the class from calling new. It is used for the Singleton pattern, for static factory methods that validate or cache before creating an object, and for types that should never be instantiated.",
      meaning: {
        hi: "ताकि class के बाहर का code new न कर सके। Singleton pattern, ऐसी static factory methods जो object बनाने से पहले validate या cache करें, और ऐसे types जिनका object कभी नहीं बनना चाहिए — इनमें use होता है।",
        hg: "Taaki class ke bahar ka code new na kar sake. Singleton pattern, aisi static factory methods jo object banane se pehle validate ya cache karein, aur aise types jinka object kabhi nahi banna chahiye — inmein use hota hai."
      },
      explain: {
        en: `<ul>
<li><b>Singleton</b>: private constructor + one static instance. <code>Lazy&lt;T&gt;</code> makes it lazy and thread-safe.</li>
<li><b>Factory method</b>: <code>Money.FromRupees(250)</code> reads better than <code>new Money(250)</code> and can validate, cache or return a subtype.</li>
<li>For a helper with only static members, prefer a <code>static class</code> — the compiler then blocks instances for you.</li>
</ul>
<p><b>TL angle:</b> in ASP.NET Core, prefer <code>services.AddSingleton&lt;IClock, SystemClock&gt;()</code> over a hand-written Singleton — same "one instance", but it can be replaced in tests.</p>`,
        hi: `<ul>
<li><b>Singleton</b>: private constructor + एक static instance। <code>Lazy&lt;T&gt;</code> इसे lazy और thread-safe बनाता है।</li>
<li><b>Factory method</b>: <code>Money.FromRupees(250)</code> पढ़ने में <code>new Money(250)</code> से बेहतर है और validate, cache या subtype return कर सकता है।</li>
<li>सिर्फ़ static members वाले helper के लिए <code>static class</code> बेहतर है — तब compiler ख़ुद instances रोक देता है।</li>
</ul>
<p><b>TL angle:</b> ASP.NET Core में hand-written Singleton की जगह <code>services.AddSingleton&lt;IClock, SystemClock&gt;()</code> use करो — "एक ही instance" वही है, पर tests में बदला जा सकता है।</p>`,
        hg: `<ul>
<li><b>Singleton</b>: private constructor + ek static instance. <code>Lazy&lt;T&gt;</code> ise lazy aur thread-safe banata hai.</li>
<li><b>Factory method</b>: <code>Money.FromRupees(250)</code> padhne mein <code>new Money(250)</code> se behtar hai aur validate, cache ya subtype return kar sakta hai.</li>
<li>Sirf static members wale helper ke liye <code>static class</code> behtar hai — tab compiler khud instances rok deta hai.</li>
</ul>
<p><b>TL angle:</b> ASP.NET Core mein hand-written Singleton ki jagah <code>services.AddSingleton&lt;IClock, SystemClock&gt;()</code> use karo — "ek hi instance" wahi hai, par tests mein badla ja sakta hai.</p>`
      },
      code: [{
        caption: {
          en: "Private constructors: Singleton with Lazy&lt;T&gt; and a validating factory",
          hi: "Private constructors: Lazy&lt;T&gt; वाला Singleton और validate करने वाली factory",
          hg: "Private constructors: Lazy&lt;T&gt; wala Singleton aur validate karne wali factory"
        },
        check: "run",
        expected: "True\nRs 250",
        src: `var s1 = AppSettings.Instance;
var s2 = AppSettings.Instance;
Console.WriteLine(ReferenceEquals(s1, s2));     // same object
Console.WriteLine(Money.FromRupees(250));
// var x = new AppSettings();                   // CS0122: constructor is private

public sealed class AppSettings
{
    private static readonly Lazy<AppSettings> _instance = new(() => new AppSettings());
    public static AppSettings Instance => _instance.Value;
    private AppSettings() { }                    // nobody outside can call new
}

public sealed class Money
{
    public decimal Amount { get; }
    private Money(decimal amount) => Amount = amount;

    public static Money FromRupees(decimal rupees)   // validates before creating
    {
        ArgumentOutOfRangeException.ThrowIfNegative(rupees);
        return new Money(rupees);
    }

    public override string ToString() => $"Rs {Amount}";
}`
      }]
    },
    {
      id: "constructor-chaining-order",
      depth: "detailed",
      q: "What is constructor chaining, and in what order do constructors run with inheritance?",
      answer: "Chaining means one constructor calls another — this(...) in the same class or base(...) in the parent — so setup code is written once. With inheritance the base constructor body runs before the derived constructor body, but derived field initializers run even before the base constructor.",
      meaning: {
        hi: "Chaining यानी एक constructor दूसरे को call करे — same class में this(...) या parent में base(...) — ताकि setup code एक ही बार लिखा जाए। Inheritance में base constructor body, derived constructor body से पहले चलती है, पर derived field initializers base constructor से भी पहले चलते हैं।",
        hg: "Chaining yaani ek constructor doosre ko call kare — same class mein this(...) ya parent mein base(...) — taaki setup code ek hi baar likha jaaye. Inheritance mein base constructor body, derived constructor body se pehle chalti hai, par derived field initializers base constructor se bhi pehle chalte hain."
      },
      explain: {
        en: `<p>For <code>new Child()</code> the exact order is:</p>
<ol>
<li>Child field initializers</li>
<li>Parent field initializers</li>
<li>Parent constructor body</li>
<li>Child constructor body</li>
</ol>
<p>(Static constructors, if any, run once before all this, the first time each type is used.)</p>
<ul>
<li>No <code>base(...)</code> written → the compiler adds <code>base()</code>. If the parent has only constructors with parameters → CS7036.</li>
<li>A constructor can call <code>this(...)</code> <b>or</b> <code>base(...)</code>, not both; the chain ends at a constructor that calls <code>base</code>.</li>
</ul>
<p>Follow-up: this order is exactly what the "constructor order" puzzle tests.</p>`,
        hi: `<p><code>new Child()</code> के लिए exact order:</p>
<ol>
<li>Child field initializers</li>
<li>Parent field initializers</li>
<li>Parent constructor body</li>
<li>Child constructor body</li>
</ol>
<p>(Static constructors, अगर हों, तो इन सबसे पहले एक बार चलते हैं — हर type के पहले use पर।)</p>
<ul>
<li><code>base(...)</code> नहीं लिखा → compiler <code>base()</code> जोड़ देता है। अगर parent में सिर्फ़ parameters वाले constructors हैं → CS7036।</li>
<li>Constructor <code>this(...)</code> <b>या</b> <code>base(...)</code> call कर सकता है, दोनों नहीं; chain उस constructor पर ख़त्म होती है जो <code>base</code> call करता है।</li>
</ul>
<p>Follow-up: "constructor order" puzzle बिल्कुल यही order test करता है।</p>`,
        hg: `<p><code>new Child()</code> ke liye exact order:</p>
<ol>
<li>Child field initializers</li>
<li>Parent field initializers</li>
<li>Parent constructor body</li>
<li>Child constructor body</li>
</ol>
<p>(Static constructors, agar hon, to in sabse pehle ek baar chalte hain — har type ke pehle use par.)</p>
<ul>
<li><code>base(...)</code> nahi likha → compiler <code>base()</code> jod deta hai. Agar parent mein sirf parameters wale constructors hain → CS7036.</li>
<li>Constructor <code>this(...)</code> <b>ya</b> <code>base(...)</code> call kar sakta hai, dono nahi; chain us constructor par khatam hoti hai jo <code>base</code> call karta hai.</li>
</ul>
<p>Follow-up: "constructor order" puzzle bilkul yahi order test karta hai.</p>`
      }
    },
    {
      id: "abstract-vs-virtual",
      depth: "detailed",
      q: "What is the difference between an abstract method and a virtual method?",
      answer: "A virtual method has a default body that a derived class may override. An abstract method has no body, can exist only in an abstract class, and every non-abstract derived class must override it.",
      meaning: {
        hi: "Virtual method की default body होती है जिसे derived class चाहे तो override करे। Abstract method की body नहीं होती, वो सिर्फ़ abstract class में हो सकता है, और हर non-abstract derived class को उसे override करना ही पड़ता है।",
        hg: "Virtual method ki default body hoti hai jise derived class chahe to override kare. Abstract method ki body nahi hoti, woh sirf abstract class mein ho sakta hai, aur har non-abstract derived class ko use override karna hi padta hai."
      },
      explain: {
        en: `<ul>
<li><code>virtual</code> = "here is a sensible default, change it if you need". Example: <code>ToString()</code>, <code>Equals()</code> on <code>object</code>.</li>
<li><code>abstract</code> = "every child must decide this". Example: <code>protected abstract void WriteBody()</code> in a report base class.</li>
<li>An abstract class may also have zero abstract methods — used only to stop direct instantiation.</li>
<li>An abstract class can override a virtual method as <code>abstract</code> again, forcing its children to re-implement it.</li>
</ul>
<p>Follow-up: "Can an abstract method be private?" No — it must be overridable, so it cannot be private (and cannot be static unless it is a static abstract interface member).</p>`,
        hi: `<ul>
<li><code>virtual</code> = "यह एक ठीक-ठाक default है, ज़रूरत हो तो बदल लो"। Example: <code>object</code> पर <code>ToString()</code>, <code>Equals()</code>।</li>
<li><code>abstract</code> = "हर child को यह ख़ुद तय करना है"। Example: report base class में <code>protected abstract void WriteBody()</code>।</li>
<li>Abstract class में zero abstract methods भी हो सकते हैं — सिर्फ़ direct object बनना रोकने के लिए।</li>
<li>Abstract class किसी virtual method को फिर से <code>abstract</code> बनाकर override कर सकती है, ताकि उसके children को दोबारा implement करना पड़े।</li>
</ul>
<p>Follow-up: "क्या abstract method private हो सकता है?" नहीं — उसे override होना है, इसलिए private नहीं हो सकता (और static भी नहीं, जब तक वो static abstract interface member न हो)।</p>`,
        hg: `<ul>
<li><code>virtual</code> = "yeh ek theek-thaak default hai, zaroorat ho to badal lo". Example: <code>object</code> par <code>ToString()</code>, <code>Equals()</code>.</li>
<li><code>abstract</code> = "har child ko yeh khud tay karna hai". Example: report base class mein <code>protected abstract void WriteBody()</code>.</li>
<li>Abstract class mein zero abstract methods bhi ho sakte hain — sirf direct object banna rokne ke liye.</li>
<li>Abstract class kisi virtual method ko phir se <code>abstract</code> banakar override kar sakti hai, taaki uske children ko dobara implement karna pade.</li>
</ul>
<p>Follow-up: "Kya abstract method private ho sakta hai?" Nahi — use override hona hai, isliye private nahi ho sakta (aur static bhi nahi, jab tak woh static abstract interface member na ho).</p>`
      }
    },
    {
      id: "abstract-class-constructor",
      depth: "detailed",
      q: "Can an abstract class have a constructor? If we cannot create its object, why have one?",
      answer: "Yes. You cannot new an abstract class, but its constructor runs every time a derived object is created, so it initializes the shared fields and enforces the base invariants. It is usually made protected, because only derived classes can call it.",
      meaning: {
        hi: "हाँ। Abstract class का object new से नहीं बना सकते, पर जब भी derived object बनता है उसका constructor चलता है — वो shared fields initialize करता है और base के rules लागू करता है। इसे अक्सर protected रखते हैं, क्योंकि सिर्फ़ derived classes ही इसे call कर सकती हैं।",
        hg: "Haan. Abstract class ka object new se nahi bana sakte, par jab bhi derived object banta hai uska constructor chalta hai — woh shared fields initialize karta hai aur base ke rules laagu karta hai. Ise aksar protected rakhte hain, kyunki sirf derived classes hi ise call kar sakti hain."
      },
      explain: {
        en: `<p>Example: <code>protected ReportBase(string title)</code> forces every report to have a title — <code>SalesReport</code> must call <code>: base("Sales")</code>. The rule lives in one place.</p>
<ul>
<li>A <code>public</code> constructor on an abstract class works the same as <code>protected</code> (nobody can call it with <code>new</code> anyway), so <code>protected</code> simply states the intent clearly.</li>
<li>Do not call abstract/virtual methods from that constructor — the derived part is not ready yet (see the next question and the "abstract + constructor" puzzle).</li>
</ul>`,
        hi: `<p>Example: <code>protected ReportBase(string title)</code> हर report को title रखने पर मजबूर करता है — <code>SalesReport</code> को <code>: base("Sales")</code> call करना ही पड़ेगा। Rule एक ही जगह रहता है।</p>
<ul>
<li>Abstract class पर <code>public</code> constructor भी <code>protected</code> की तरह ही काम करता है (कोई <code>new</code> से call कर ही नहीं सकता), इसलिए <code>protected</code> बस intent साफ़ बताता है।</li>
<li>उस constructor से abstract/virtual methods call मत करो — derived हिस्सा अभी तैयार नहीं है (अगला सवाल और "abstract + constructor" puzzle देखो)।</li>
</ul>`,
        hg: `<p>Example: <code>protected ReportBase(string title)</code> har report ko title rakhne par majboor karta hai — <code>SalesReport</code> ko <code>: base("Sales")</code> call karna hi padega. Rule ek hi jagah rehta hai.</p>
<ul>
<li>Abstract class par <code>public</code> constructor bhi <code>protected</code> ki tarah hi kaam karta hai (koi <code>new</code> se call kar hi nahi sakta), isliye <code>protected</code> bas intent saaf batata hai.</li>
<li>Us constructor se abstract/virtual methods call mat karo — derived hissa abhi taiyaar nahi hai (agla sawaal aur "abstract + constructor" puzzle dekho).</li>
</ul>`
      }
    },
    {
      id: "virtual-call-in-constructor",
      depth: "detailed",
      q: "Is it safe to call a virtual method from a constructor?",
      answer: "It compiles, but it is risky. In C# the most-derived override runs even while the base constructor is executing, before the derived constructor body has set its fields, so the override can see default values like 0 or null.",
      meaning: {
        hi: "Compile हो जाता है, पर risky है। C# में base constructor चलते समय ही most-derived override चल जाता है, derived constructor body के fields set करने से पहले — इसलिए override को 0 या null जैसी default values दिख सकती हैं।",
        hg: "Compile ho jaata hai, par risky hai. C# mein base constructor chalte samay hi most-derived override chal jaata hai, derived constructor body ke fields set karne se pehle — isliye override ko 0 ya null jaisi default values dikh sakti hain."
      },
      explain: {
        en: `<ul>
<li>Fields with initializers (<code>private string _title = "Sales";</code>) are already set, because derived field initializers run before the base constructor. Fields assigned in the derived constructor body are not.</li>
<li>Code analysis rule <b>CA2214</b>: "Do not call overridable methods in constructors".</li>
<li>Fixes: pass the needed values into the base constructor, make the method non-virtual, or move the work to a separate <code>Initialize()</code>/factory step.</li>
</ul>
<p>The "abstract + constructor" puzzle shows exactly this: it prints <code>Sales: 0</code>, not <code>Sales: 500</code>.</p>`,
        hi: `<ul>
<li>जिन fields के initializers हैं (<code>private string _title = "Sales";</code>), वो पहले से set होते हैं, क्योंकि derived field initializers base constructor से पहले चलते हैं। जो fields derived constructor body में assign होते हैं, वो नहीं।</li>
<li>Code analysis rule <b>CA2214</b>: "Do not call overridable methods in constructors"।</li>
<li>Fixes: ज़रूरी values base constructor में pass करो, method को non-virtual बनाओ, या काम को अलग <code>Initialize()</code>/factory step में ले जाओ।</li>
</ul>
<p>"abstract + constructor" puzzle बिल्कुल यही दिखाता है: वो <code>Sales: 0</code> print करता है, <code>Sales: 500</code> नहीं।</p>`,
        hg: `<ul>
<li>Jin fields ke initializers hain (<code>private string _title = "Sales";</code>), woh pehle se set hote hain, kyunki derived field initializers base constructor se pehle chalte hain. Jo fields derived constructor body mein assign hote hain, woh nahi.</li>
<li>Code analysis rule <b>CA2214</b>: "Do not call overridable methods in constructors".</li>
<li>Fixes: zaroori values base constructor mein pass karo, method ko non-virtual banao, ya kaam ko alag <code>Initialize()</code>/factory step mein le jao.</li>
</ul>
<p>"abstract + constructor" puzzle bilkul yahi dikhata hai: woh <code>Sales: 0</code> print karta hai, <code>Sales: 500</code> nahi.</p>`
      }
    },
    {
      id: "static-class-vs-singleton",
      depth: "detailed",
      q: "What is a static class? How is it different from a Singleton?",
      answer: "A static class cannot be instantiated or inherited and contains only static members — good for stateless helpers like Math. A Singleton is a real object with exactly one instance, so it can implement interfaces, be passed as a parameter, and be injected and mocked.",
      meaning: {
        hi: "Static class का object नहीं बनता, उसे inherit नहीं कर सकते, और उसमें सिर्फ़ static members होते हैं — Math जैसे stateless helpers के लिए अच्छा। Singleton एक असली object है जिसका सिर्फ़ एक instance होता है, इसलिए वो interfaces implement कर सकता है, parameter में pass हो सकता है, और inject व mock हो सकता है।",
        hg: "Static class ka object nahi banta, use inherit nahi kar sakte, aur usmein sirf static members hote hain — Math jaise stateless helpers ke liye accha. Singleton ek asli object hai jiska sirf ek instance hota hai, isliye woh interfaces implement kar sakta hai, parameter mein pass ho sakta hai, aur inject va mock ho sakta hai."
      },
      explain: {
        en: `<ul>
<li>Extension methods must live in a non-generic static class.</li>
<li>Static <b>mutable</b> state is shared by every request and thread — a common source of bugs in web apps and hard to reset between tests.</li>
<li>In ASP.NET Core the usual "singleton" is a DI registration: <code>builder.Services.AddSingleton&lt;IRateCache, RateCache&gt;()</code>. Its lifetime is managed by the container and it can be swapped in tests.</li>
</ul>
<p>Rule of thumb: pure functions with no state → static class; anything with state, dependencies or a reason to mock → a normal class registered as a singleton.</p>`,
        hi: `<ul>
<li>Extension methods non-generic static class में ही रहने चाहिए।</li>
<li>Static <b>mutable</b> state हर request और thread के बीच share होता है — web apps में bugs का common कारण, और tests के बीच reset करना मुश्किल।</li>
<li>ASP.NET Core में आम "singleton" एक DI registration होता है: <code>builder.Services.AddSingleton&lt;IRateCache, RateCache&gt;()</code>। उसकी lifetime container संभालता है और tests में उसे बदला जा सकता है।</li>
</ul>
<p>Rule of thumb: बिना state वाले pure functions → static class; जिसमें state, dependencies या mock करने की वजह हो → normal class, singleton के रूप में register।</p>`,
        hg: `<ul>
<li>Extension methods non-generic static class mein hi rehne chahiye.</li>
<li>Static <b>mutable</b> state har request aur thread ke beech share hota hai — web apps mein bugs ka common kaaran, aur tests ke beech reset karna mushkil.</li>
<li>ASP.NET Core mein aam "singleton" ek DI registration hota hai: <code>builder.Services.AddSingleton&lt;IRateCache, RateCache&gt;()</code>. Uski lifetime container sambhaalta hai aur tests mein use badla ja sakta hai.</li>
</ul>
<p>Rule of thumb: bina state wale pure functions → static class; jismein state, dependencies ya mock karne ki wajah ho → normal class, singleton ke roop mein register.</p>`
      }
    },
    {
      id: "runtime-dispatch",
      depth: "detailed",
      q: "How does the runtime decide which overridden method to call?",
      answer: "Through virtual dispatch: each type has a method table with a slot per virtual method, an override replaces that slot in the derived type, and at runtime the call goes through the actual object's table. Overloads are different — the compiler picks them from the declared types.",
      meaning: {
        hi: "Virtual dispatch से: हर type की एक method table होती है जिसमें हर virtual method का एक slot होता है, override derived type में वो slot बदल देता है, और runtime पर call असली object की table से होकर जाती है। Overloads अलग हैं — compiler उन्हें declared types देखकर चुनता है।",
        hg: "Virtual dispatch se: har type ki ek method table hoti hai jismein har virtual method ka ek slot hota hai, override derived type mein woh slot badal deta hai, aur runtime par call asli object ki table se hokar jaati hai. Overloads alag hain — compiler unhe declared types dekhkar chunta hai."
      },
      explain: {
        en: `<ul>
<li><code>override</code> reuses the base slot → polymorphic. <code>new</code> leaves the base slot alone — the hiding method is a separate member (a non-virtual method, bound by the compiler from the declared type, or a brand-new slot if you write <code>new virtual</code>). That is why a base reference still calls the base version.</li>
<li>When the JIT can prove the exact type (sealed class, local <code>new</code>), it can skip the table and call directly — <b>devirtualization</b>.</li>
<li>Two decisions happen in two phases: <b>which overload</b> (compile time, declared types) and <b>which override</b> of that overload (run time, actual object).</li>
</ul>
<p>The "overload vs override" puzzle shows both phases in one program.</p>`,
        hi: `<ul>
<li><code>override</code> base वाला slot ही reuse करता है → polymorphic। <code>new</code> base slot को छूता ही नहीं — hiding method एक अलग member है (non-virtual method जिसे compiler declared type से bind करता है, या <code>new virtual</code> लिखो तो एक बिल्कुल नया slot)। इसीलिए base reference से base version ही चलता है।</li>
<li>जब JIT exact type साबित कर सके (sealed class, local <code>new</code>), तो table skip करके सीधे call कर सकता है — <b>devirtualization</b>।</li>
<li>दो फ़ैसले दो phases में होते हैं: <b>कौन सा overload</b> (compile time, declared types) और उस overload का <b>कौन सा override</b> (run time, असली object)।</li>
</ul>
<p>"overload vs override" puzzle दोनों phases एक ही program में दिखाता है।</p>`,
        hg: `<ul>
<li><code>override</code> base wala slot hi reuse karta hai → polymorphic. <code>new</code> base slot ko chhoota hi nahi — hiding method ek alag member hai (non-virtual method jise compiler declared type se bind karta hai, ya <code>new virtual</code> likho to ek bilkul naya slot). Isiliye base reference se base version hi chalta hai.</li>
<li>Jab JIT exact type saabit kar sake (sealed class, local <code>new</code>), to table skip karke seedhe call kar sakta hai — <b>devirtualization</b>.</li>
<li>Do faisle do phases mein hote hain: <b>kaun sa overload</b> (compile time, declared types) aur us overload ka <b>kaun sa override</b> (run time, asli object).</li>
</ul>
<p>"overload vs override" puzzle dono phases ek hi program mein dikhata hai.</p>`
      }
    },
    {
      id: "explicit-interface-implementation",
      depth: "detailed",
      q: "What is explicit interface implementation, and when do you use it?",
      answer: "It implements a member as InterfaceName.Member, so it can be called only through that interface reference. I use it when two interfaces have members with the same signature but different meaning, or to keep an interface member out of the class's public API.",
      meaning: {
        hi: "इसमें member को InterfaceName.Member के रूप में implement करते हैं, इसलिए वो सिर्फ़ उसी interface reference से call होता है। जब दो interfaces में same signature पर अलग मतलब वाले members हों, या जब interface member को class के public API से बाहर रखना हो — तब use करता हूँ।",
        hg: "Ismein member ko InterfaceName.Member ke roop mein implement karte hain, isliye woh sirf usi interface reference se call hota hai. Jab do interfaces mein same signature par alag matlab wale members hon, ya jab interface member ko class ke public API se bahar rakhna ho — tab use karta hoon."
      },
      explain: {
        en: `<ul>
<li>Explicit members have no access modifier and are not visible on the class type: <code>device.Start()</code> → CS1061.</li>
<li>Real .NET example: <code>List&lt;T&gt;</code> implements <code>ICollection&lt;T&gt;.IsReadOnly</code> explicitly, so it does not clutter the normal API.</li>
<li>Calling an explicit member on a <code>struct</code> through the interface boxes it — worth knowing for hot paths.</li>
</ul>`,
        hi: `<ul>
<li>Explicit members पर कोई access modifier नहीं होता और वो class type पर दिखते नहीं: <code>device.Start()</code> → CS1061।</li>
<li>असली .NET example: <code>List&lt;T&gt;</code>, <code>ICollection&lt;T&gt;.IsReadOnly</code> को explicitly implement करता है, ताकि normal API भरा-भरा न लगे।</li>
<li><code>struct</code> पर explicit member को interface से call करने पर boxing होती है — hot paths में यह जानना काम का है।</li>
</ul>`,
        hg: `<ul>
<li>Explicit members par koi access modifier nahi hota aur woh class type par dikhte nahi: <code>device.Start()</code> → CS1061.</li>
<li>Asli .NET example: <code>List&lt;T&gt;</code>, <code>ICollection&lt;T&gt;.IsReadOnly</code> ko explicitly implement karta hai, taaki normal API bhara-bhara na lage.</li>
<li><code>struct</code> par explicit member ko interface se call karne par boxing hoti hai — hot paths mein yeh jaanna kaam ka hai.</li>
</ul>`
      },
      code: [{
        caption: {
          en: "Two interfaces, same method name, different meaning",
          hi: "दो interfaces, same method नाम, अलग मतलब",
          hg: "Do interfaces, same method naam, alag matlab"
        },
        check: "run",
        expected: "Printing...\nScanning...",
        src: `var device = new SmartDevice();
((IPrinter)device).Start();
IScanner scanner = device;
scanner.Start();
// device.Start();   // CS1061: explicit members are not visible on the class

interface IPrinter { void Start(); }
interface IScanner { void Start(); }

class SmartDevice : IPrinter, IScanner
{
    void IPrinter.Start() => Console.WriteLine("Printing...");
    void IScanner.Start() => Console.WriteLine("Scanning...");
}`
      }]
    },
    {
      id: "inheritance-code-review",
      depth: "detailed",
      q: "As a tech lead, what inheritance problems do you look for in a code review?",
      answer: "Deep hierarchies, base classes used only to share helper code, overrides that break the parent's contract (Liskov violations), method hiding with new, and protected fields that leak internals. My usual fix is a shallow hierarchy, interfaces plus composition, and sealing classes that are not designed for extension.",
      meaning: {
        hi: "गहरी hierarchies, सिर्फ़ helper code share करने के लिए बनी base classes, ऐसे overrides जो parent का contract तोड़ें (Liskov violation), new से method hiding, और protected fields जो अंदर की चीज़ें बाहर दिखाएँ। मेरा आम fix: छोटी hierarchy, interfaces + composition, और जो classes extension के लिए नहीं बनीं उन्हें seal करना।",
        hg: "Gehri hierarchies, sirf helper code share karne ke liye bani base classes, aise overrides jo parent ka contract todein (Liskov violation), new se method hiding, aur protected fields jo andar ki cheezein bahar dikhayein. Mera aam fix: chhoti hierarchy, interfaces + composition, aur jo classes extension ke liye nahi banin unhe seal karna."
      },
      explain: {
        en: `<ul>
<li><b>Deep tree</b> (<code>BaseService → CrudService → AuditedCrudService → OrderService</code>): to understand one method you must read four classes. Keep hierarchies shallow — ideally one or two levels.</li>
<li><b>"Utility" base class</b> (<code>BaseController</code> with 30 helpers): move helpers into injected services.</li>
<li><b>Liskov violation</b>: an override that throws <code>NotSupportedException</code> or ignores a rule of the parent means the child is not really an is-a. (You will meet the <b>L</b> of SOLID later in the course.)</li>
<li><b>protected fields</b>: children can break invariants; expose protected methods or properties instead.</li>
<li><b><code>new</code> on methods</b>: different behaviour depending on the reference type — almost always a bug waiting to happen.</li>
</ul>
<p>Say it as a team practice: "We default to composition and interfaces, use inheritance for real is-a families, and seal everything else."</p>`,
        hi: `<ul>
<li><b>गहरा tree</b> (<code>BaseService → CrudService → AuditedCrudService → OrderService</code>): एक method समझने के लिए चार classes पढ़नी पड़ती हैं। Hierarchies छोटी रखो — ideally एक या दो levels।</li>
<li><b>"Utility" base class</b> (30 helpers वाला <code>BaseController</code>): helpers को injected services में ले जाओ।</li>
<li><b>Liskov violation</b>: जो override <code>NotSupportedException</code> फेंके या parent का कोई rule ignore करे, उसका मतलब child सच में is-a नहीं है। (SOLID का <b>L</b> आगे course में आएगा।)</li>
<li><b>protected fields</b>: children invariants तोड़ सकते हैं; उसकी जगह protected methods या properties expose करो।</li>
<li>Methods पर <b><code>new</code></b>: reference type के हिसाब से अलग behaviour — लगभग हमेशा एक छुपा हुआ bug।</li>
</ul>
<p>इसे team practice की तरह बोलो: "हम default में composition और interfaces use करते हैं, असली is-a families के लिए inheritance, और बाकी सब seal करते हैं।"</p>`,
        hg: `<ul>
<li><b>Gehra tree</b> (<code>BaseService → CrudService → AuditedCrudService → OrderService</code>): ek method samajhne ke liye chaar classes padhni padti hain. Hierarchies chhoti rakho — ideally ek ya do levels.</li>
<li><b>"Utility" base class</b> (30 helpers wala <code>BaseController</code>): helpers ko injected services mein le jao.</li>
<li><b>Liskov violation</b>: jo override <code>NotSupportedException</code> phenke ya parent ka koi rule ignore kare, uska matlab child sach mein is-a nahi hai. (SOLID ka <b>L</b> aage course mein aayega.)</li>
<li><b>protected fields</b>: children invariants tod sakte hain; uski jagah protected methods ya properties expose karo.</li>
<li>Methods par <b><code>new</code></b>: reference type ke hisaab se alag behaviour — lagbhag hamesha ek chhupa hua bug.</li>
</ul>
<p>Ise team practice ki tarah bolo: "Hum default mein composition aur interfaces use karte hain, asli is-a families ke liye inheritance, aur baaki sab seal karte hain."</p>`
      }
    }
  ],
  puzzles: [
    {
      id: "virtual-override-new",
      src: `A a = new C();
a.Show();
B b = new C();
b.Show();
C c = new C();
c.Show();

class A { public virtual void Show() => Console.WriteLine("A"); }
class B : A { public override void Show() => Console.WriteLine("B"); }
class C : B { public new void Show() => Console.WriteLine("C"); }`,
      answer: "B\nB\nC",
      explain: {
        en: `<ul>
<li>The object is always a <code>C</code>. But <code>C.Show</code> uses <code>new</code>, so it does <b>not</b> override — it just hides.</li>
<li><code>a.Show()</code>: <code>A.Show</code> is virtual; the most-derived <b>override</b> is <code>B.Show</code> → <b>B</b>.</li>
<li><code>b.Show()</code>: same virtual chain → <b>B</b>.</li>
<li><code>c.Show()</code>: the reference type is <code>C</code>, so the compiler picks the hiding method <code>C.Show</code> → <b>C</b>.</li>
</ul>
<p>Override follows the object; new follows the reference.</p>`,
        hi: `<ul>
<li>Object हमेशा <code>C</code> है। पर <code>C.Show</code> में <code>new</code> है, इसलिए यह override <b>नहीं</b> करता — सिर्फ़ hide करता है।</li>
<li><code>a.Show()</code>: <code>A.Show</code> virtual है; सबसे नीचे वाला <b>override</b> <code>B.Show</code> है → <b>B</b>।</li>
<li><code>b.Show()</code>: वही virtual chain → <b>B</b>।</li>
<li><code>c.Show()</code>: reference type <code>C</code> है, इसलिए compiler hiding method <code>C.Show</code> चुनता है → <b>C</b>।</li>
</ul>
<p>Override object को follow करता है; new reference को।</p>`,
        hg: `<ul>
<li>Object hamesha <code>C</code> hai. Par <code>C.Show</code> mein <code>new</code> hai, isliye yeh override <b>nahi</b> karta — sirf hide karta hai.</li>
<li><code>a.Show()</code>: <code>A.Show</code> virtual hai; sabse neeche wala <b>override</b> <code>B.Show</code> hai → <b>B</b>.</li>
<li><code>b.Show()</code>: wahi virtual chain → <b>B</b>.</li>
<li><code>c.Show()</code>: reference type <code>C</code> hai, isliye compiler hiding method <code>C.Show</code> chunta hai → <b>C</b>.</li>
</ul>
<p>Override object ko follow karta hai; new reference ko.</p>`
      }
    },
    {
      id: "base-ref-derived-object",
      src: `Animal a = new Dog();
a.Speak();
a.Move();
Console.WriteLine(a.GetType().Name);
((Dog)a).Move();

class Animal
{
    public virtual void Speak() => Console.WriteLine("Animal speaks");
    public void Move() => Console.WriteLine("Animal moves");
}

class Dog : Animal
{
    public override void Speak() => Console.WriteLine("Dog barks");
    public new void Move() => Console.WriteLine("Dog runs");
}`,
      answer: "Dog barks\nAnimal moves\nDog\nDog runs",
      explain: {
        en: `<ul>
<li>Reference type = <code>Animal</code>, object type = <code>Dog</code>.</li>
<li><code>Speak</code> is virtual + overridden → decided by the object → <b>Dog barks</b>.</li>
<li><code>Move</code> is not virtual; <code>Dog.Move</code> only hides it → decided by the reference → <b>Animal moves</b>.</li>
<li><code>GetType()</code> always returns the real runtime type → <b>Dog</b>.</li>
<li>After the cast the reference type is <code>Dog</code> → <b>Dog runs</b>.</li>
</ul>`,
        hi: `<ul>
<li>Reference type = <code>Animal</code>, object type = <code>Dog</code>।</li>
<li><code>Speak</code> virtual है + override हुआ है → object तय करता है → <b>Dog barks</b>।</li>
<li><code>Move</code> virtual नहीं है; <code>Dog.Move</code> उसे सिर्फ़ hide करता है → reference तय करता है → <b>Animal moves</b>।</li>
<li><code>GetType()</code> हमेशा असली runtime type देता है → <b>Dog</b>।</li>
<li>Cast के बाद reference type <code>Dog</code> है → <b>Dog runs</b>।</li>
</ul>`,
        hg: `<ul>
<li>Reference type = <code>Animal</code>, object type = <code>Dog</code>.</li>
<li><code>Speak</code> virtual hai + override hua hai → object tay karta hai → <b>Dog barks</b>.</li>
<li><code>Move</code> virtual nahi hai; <code>Dog.Move</code> use sirf hide karta hai → reference tay karta hai → <b>Animal moves</b>.</li>
<li><code>GetType()</code> hamesha asli runtime type deta hai → <b>Dog</b>.</li>
<li>Cast ke baad reference type <code>Dog</code> hai → <b>Dog runs</b>.</li>
</ul>`
      }
    },
    {
      id: "overload-vs-override",
      src: `var printer = new Printer();
Animal a = new Dog();
printer.Print(a);
printer.Print(new Dog());
a.Describe();

class Animal { public virtual void Describe() => Console.WriteLine("I am an Animal"); }
class Dog : Animal { public override void Describe() => Console.WriteLine("I am a Dog"); }

class Printer
{
    public void Print(Animal x) => Console.WriteLine("Print(Animal)");
    public void Print(Dog x) => Console.WriteLine("Print(Dog)");
}`,
      answer: "Print(Animal)\nPrint(Dog)\nI am a Dog",
      explain: {
        en: `<ul>
<li><b>Overloads are chosen at compile time</b> from the declared type of the argument. <code>a</code> is declared as <code>Animal</code> → <b>Print(Animal)</b>, even though the object is a Dog.</li>
<li><code>new Dog()</code> has static type <code>Dog</code> → the more specific overload <b>Print(Dog)</b>.</li>
<li><b>Overrides are chosen at run time</b> from the object → <b>I am a Dog</b>.</li>
</ul>
<p>Interview line: "Overload resolution uses the static type; virtual dispatch uses the runtime type."</p>`,
        hi: `<ul>
<li><b>Overloads compile time पर चुने जाते हैं</b>, argument के declared type से। <code>a</code> का declared type <code>Animal</code> है → <b>Print(Animal)</b>, भले ही object Dog है।</li>
<li><code>new Dog()</code> का static type <code>Dog</code> है → ज़्यादा specific overload <b>Print(Dog)</b>।</li>
<li><b>Overrides run time पर चुने जाते हैं</b>, object से → <b>I am a Dog</b>।</li>
</ul>
<p>Interview line: "Overload resolution static type use करता है; virtual dispatch runtime type।"</p>`,
        hg: `<ul>
<li><b>Overloads compile time par chune jaate hain</b>, argument ke declared type se. <code>a</code> ka declared type <code>Animal</code> hai → <b>Print(Animal)</b>, bhale hi object Dog hai.</li>
<li><code>new Dog()</code> ka static type <code>Dog</code> hai → zyada specific overload <b>Print(Dog)</b>.</li>
<li><b>Overrides run time par chune jaate hain</b>, object se → <b>I am a Dog</b>.</li>
</ul>
<p>Interview line: "Overload resolution static type use karta hai; virtual dispatch runtime type."</p>`
      }
    },
    {
      id: "constructor-order",
      src: `new Child();

class Parent
{
    private readonly Log _p = new("Parent field");
    public Parent() => Console.WriteLine("Parent ctor");
}

class Child : Parent
{
    private readonly Log _c = new("Child field");
    public Child() => Console.WriteLine("Child ctor");
}

class Log
{
    public Log(string text) => Console.WriteLine(text);
}`,
      answer: "Child field\nParent field\nParent ctor\nChild ctor",
      explain: {
        en: `<p>Most people answer "Parent field, Parent ctor, Child field, Child ctor" — that is the Java order. In C#:</p>
<ol>
<li><b>Derived field initializers</b> run first → Child field</li>
<li>then the base constructor is invoked, which runs <b>base field initializers</b> → Parent field</li>
<li><b>base constructor body</b> → Parent ctor</li>
<li><b>derived constructor body</b> → Child ctor</li>
</ol>
<p>Constructor <b>bodies</b> still run base-first, which is what matters most in practice.</p>`,
        hi: `<p>ज़्यादातर लोग "Parent field, Parent ctor, Child field, Child ctor" बोलते हैं — वो Java का order है। C# में:</p>
<ol>
<li><b>Derived field initializers</b> सबसे पहले → Child field</li>
<li>फिर base constructor call होता है, जो <b>base field initializers</b> चलाता है → Parent field</li>
<li><b>Base constructor body</b> → Parent ctor</li>
<li><b>Derived constructor body</b> → Child ctor</li>
</ol>
<p>Constructor <b>bodies</b> फिर भी base-first चलती हैं, और practice में यही सबसे ज़्यादा मायने रखता है।</p>`,
        hg: `<p>Zyaadatar log "Parent field, Parent ctor, Child field, Child ctor" bolte hain — woh Java ka order hai. C# mein:</p>
<ol>
<li><b>Derived field initializers</b> sabse pehle → Child field</li>
<li>Phir base constructor call hota hai, jo <b>base field initializers</b> chalata hai → Parent field</li>
<li><b>Base constructor body</b> → Parent ctor</li>
<li><b>Derived constructor body</b> → Child ctor</li>
</ol>
<p>Constructor <b>bodies</b> phir bhi base-first chalti hain, aur practice mein yahi sabse zyada maayne rakhta hai.</p>`
      }
    },
    {
      id: "static-constructor-once",
      src: `Console.WriteLine("Start");
var first = new Config();
var second = new Config();
Console.WriteLine(Config.Count);

class Config
{
    public static int Count;

    static Config()
    {
        Console.WriteLine("Static ctor");
    }

    public Config()
    {
        Count++;
        Console.WriteLine("Instance ctor");
    }
}`,
      answer: "Start\nStatic ctor\nInstance ctor\nInstance ctor\n2",
      explain: {
        en: `<ul>
<li>"Start" prints first — the static constructor waits until the type is first used.</li>
<li>The first <code>new Config()</code> triggers the static constructor <b>once</b>, then the instance constructor.</li>
<li>The second <code>new</code> runs only the instance constructor.</li>
<li><code>Count</code> is static — one copy shared by all objects → <b>2</b>.</li>
</ul>`,
        hi: `<ul>
<li>"Start" पहले print होता है — static constructor type के पहले use तक इंतज़ार करता है।</li>
<li>पहला <code>new Config()</code> static constructor को <b>एक बार</b> चलाता है, फिर instance constructor।</li>
<li>दूसरा <code>new</code> सिर्फ़ instance constructor चलाता है।</li>
<li><code>Count</code> static है — सभी objects के बीच एक ही copy → <b>2</b>।</li>
</ul>`,
        hg: `<ul>
<li>"Start" pehle print hota hai — static constructor type ke pehle use tak intezaar karta hai.</li>
<li>Pehla <code>new Config()</code> static constructor ko <b>ek baar</b> chalata hai, phir instance constructor.</li>
<li>Doosra <code>new</code> sirf instance constructor chalata hai.</li>
<li><code>Count</code> static hai — sabhi objects ke beech ek hi copy → <b>2</b>.</li>
</ul>`
      }
    },
    {
      id: "static-constructor-inheritance",
      src: `Console.WriteLine("Main");
new Derived();
new Derived();

class Base
{
    static Base() { Console.WriteLine("Base static"); }
    public Base() { Console.WriteLine("Base instance"); }
}

class Derived : Base
{
    static Derived() { Console.WriteLine("Derived static"); }
    public Derived() { Console.WriteLine("Derived instance"); }
}`,
      answer: "Main\nDerived static\nBase static\nBase instance\nDerived instance\nBase instance\nDerived instance",
      explain: {
        en: `<ul>
<li>Static constructors go <b>derived first</b>: creating a <code>Derived</code> needs <code>Derived</code>'s static constructor before its instance constructor starts. That instance constructor first calls <code>Base()</code> — the first use of <code>Base</code> — so now <b>Base static</b> runs.</li>
<li>Instance constructor bodies go <b>base first</b>: Base instance, then Derived instance.</li>
<li>Second <code>new Derived()</code>: static constructors never run again → only the two instance lines.</li>
</ul>
<p>Memory trick: <b>statics go down → up, instance bodies go up → down</b>.</p>`,
        hi: `<ul>
<li>Static constructors <b>derived पहले</b>: <code>Derived</code> बनाने के लिए उसका instance constructor शुरू होने से पहले <code>Derived</code> का static constructor चाहिए। वो instance constructor सबसे पहले <code>Base()</code> call करता है — यह <code>Base</code> का पहला use है — इसलिए अब <b>Base static</b> चलता है।</li>
<li>Instance constructor bodies <b>base पहले</b>: Base instance, फिर Derived instance।</li>
<li>दूसरा <code>new Derived()</code>: static constructors दोबारा कभी नहीं चलते → सिर्फ़ दो instance lines।</li>
</ul>
<p>याद रखने की trick: <b>statics नीचे से ऊपर, instance bodies ऊपर से नीचे</b>।</p>`,
        hg: `<ul>
<li>Static constructors <b>derived pehle</b>: <code>Derived</code> banane ke liye uska instance constructor shuru hone se pehle <code>Derived</code> ka static constructor chahiye. Woh instance constructor sabse pehle <code>Base()</code> call karta hai — yeh <code>Base</code> ka pehla use hai — isliye ab <b>Base static</b> chalta hai.</li>
<li>Instance constructor bodies <b>base pehle</b>: Base instance, phir Derived instance.</li>
<li>Doosra <code>new Derived()</code>: static constructors dobara kabhi nahi chalte → sirf do instance lines.</li>
</ul>
<p>Yaad rakhne ki trick: <b>statics neeche se upar, instance bodies upar se neeche</b>.</p>`
      }
    },
    {
      id: "default-interface-method",
      src: `IGreeter english = new English();
IGreeter hindi = new Hindi();
english.Bye();
hindi.Bye();
Hindi h = new Hindi();
h.Hello();
((IGreeter)h).Bye();

interface IGreeter
{
    void Hello();
    void Bye() => Console.WriteLine("Bye (default)");
}

class English : IGreeter
{
    public void Hello() => Console.WriteLine("Hello");
    public void Bye() => Console.WriteLine("Goodbye");
}

class Hindi : IGreeter
{
    public void Hello() => Console.WriteLine("Namaste");
}`,
      answer: "Goodbye\nBye (default)\nNamaste\nBye (default)",
      explain: {
        en: `<ul>
<li><code>English</code> implements <code>Bye</code> itself, so its version replaces the default → <b>Goodbye</b>.</li>
<li><code>Hindi</code> does not, so the interface's default body runs → <b>Bye (default)</b>.</li>
<li><code>h.Hello()</code> → <b>Namaste</b>.</li>
<li><code>h.Bye()</code> would <b>not compile</b> (CS1061): a default method is not a member of the class. Through the interface cast it works → <b>Bye (default)</b>.</li>
</ul>`,
        hi: `<ul>
<li><code>English</code> ने <code>Bye</code> ख़ुद implement किया है, इसलिए उसका version default की जगह लेता है → <b>Goodbye</b>।</li>
<li><code>Hindi</code> ने नहीं किया, इसलिए interface की default body चलती है → <b>Bye (default)</b>।</li>
<li><code>h.Hello()</code> → <b>Namaste</b>।</li>
<li><code>h.Bye()</code> compile <b>नहीं</b> होगा (CS1061): default method class का member नहीं है। Interface cast से चलता है → <b>Bye (default)</b>।</li>
</ul>`,
        hg: `<ul>
<li><code>English</code> ne <code>Bye</code> khud implement kiya hai, isliye uska version default ki jagah leta hai → <b>Goodbye</b>.</li>
<li><code>Hindi</code> ne nahi kiya, isliye interface ki default body chalti hai → <b>Bye (default)</b>.</li>
<li><code>h.Hello()</code> → <b>Namaste</b>.</li>
<li><code>h.Bye()</code> compile <b>nahi</b> hoga (CS1061): default method class ka member nahi hai. Interface cast se chalta hai → <b>Bye (default)</b>.</li>
</ul>`
      }
    },
    {
      id: "abstract-constructor-virtual-call",
      src: `new SalesReport();

abstract class Report
{
    protected Report()
    {
        Console.WriteLine("Report ctor");
        Print();                      // virtual call from a base constructor
    }

    protected abstract void Print();
}

class SalesReport : Report
{
    private readonly string _title = "Sales";
    private int _total;

    public SalesReport()
    {
        _total = 500;
        Console.WriteLine("SalesReport ctor");
    }

    protected override void Print() => Console.WriteLine($"{_title}: {_total}");
}`,
      answer: "Report ctor\nSales: 0\nSalesReport ctor",
      explain: {
        en: `<ul>
<li>The abstract class's constructor runs as part of creating <code>SalesReport</code>.</li>
<li><code>Print()</code> is abstract, so the call goes to <code>SalesReport.Print</code> — even though <code>SalesReport</code>'s constructor body has not run yet.</li>
<li><code>_title</code> has a field initializer, which runs <b>before</b> the base constructor → "Sales" is ready.</li>
<li><code>_total</code> is set in the constructor body, which runs <b>after</b> → still <b>0</b>.</li>
</ul>
<p>Lesson: do not call virtual/abstract methods from a constructor (analyzer rule CA2214).</p>`,
        hi: `<ul>
<li><code>SalesReport</code> बनाते समय abstract class का constructor भी चलता है।</li>
<li><code>Print()</code> abstract है, इसलिए call <code>SalesReport.Print</code> पर जाती है — जबकि <code>SalesReport</code> की constructor body अभी चली ही नहीं।</li>
<li><code>_title</code> का field initializer है, जो base constructor से <b>पहले</b> चलता है → "Sales" तैयार है।</li>
<li><code>_total</code> constructor body में set होता है, जो <b>बाद में</b> चलती है → अभी भी <b>0</b>।</li>
</ul>
<p>सीख: constructor से virtual/abstract methods call मत करो (analyzer rule CA2214)।</p>`,
        hg: `<ul>
<li><code>SalesReport</code> banate samay abstract class ka constructor bhi chalta hai.</li>
<li><code>Print()</code> abstract hai, isliye call <code>SalesReport.Print</code> par jaati hai — jabki <code>SalesReport</code> ki constructor body abhi chali hi nahi.</li>
<li><code>_title</code> ka field initializer hai, jo base constructor se <b>pehle</b> chalta hai → "Sales" taiyaar hai.</li>
<li><code>_total</code> constructor body mein set hota hai, jo <b>baad mein</b> chalti hai → abhi bhi <b>0</b>.</li>
</ul>
<p>Seekh: constructor se virtual/abstract methods call mat karo (analyzer rule CA2214).</p>`
      }
    }
  ],
  revision: {
    en: [
      "4 pillars: <b>Encapsulation</b> (hide data, guard it with methods), <b>Abstraction</b> (show what, hide how), <b>Inheritance</b> (is-a reuse), <b>Polymorphism</b> (one call, many behaviours).",
      "<b>Abstract class</b> = shared code + state + constructor, only one base class. <b>Interface</b> = contract, no instance state, implement many.",
      "<b>Default interface methods</b> (C# 8+) let you add a member to an interface without breaking implementers; callable only through the interface type.",
      "<b>Overloading</b> = same name, different parameters, chosen at compile time. <b>Overriding</b> = same signature, virtual/override, chosen at runtime.",
      "<b>override follows the object, new follows the reference.</b> Method hiding with <code>new</code> is not polymorphism.",
      "<b>sealed</b> class cannot be inherited; <b>sealed override</b> stops further overriding. Seal classes not designed for extension.",
      "C# = <b>single class inheritance</b>, <b>many interfaces</b> — this avoids the diamond problem.",
      "<b>Favor composition (has-a) over inheritance (is-a)</b>: loose coupling, swappable parts, easy mocking — exactly what DI does.",
      "Instance creation order: <b>derived field initializers → base field initializers → base ctor body → derived ctor body</b>.",
      "<b>Static constructor</b>: no parameters, no access modifier, runs once automatically before the first use of the type.",
      "<b>Private constructor</b> blocks outside <code>new</code>: Singleton, factory methods, non-instantiable classes.",
      "Defaults: top-level type = <b>internal</b>, class member = <b>private</b>, interface member = <b>public</b>. <code>protected internal</code> = derived OR same assembly; <code>private protected</code> = derived AND same assembly."
    ],
    meaning: {
      hi: [
        "4 pillars: Encapsulation (data छुपाओ, methods से बचाओ), Abstraction (क्या करता है दिखाओ, कैसे करता है छुपाओ), Inheritance (is-a reuse), Polymorphism (एक call, कई behaviour)।",
        "Abstract class = shared code + state + constructor, base class सिर्फ़ एक। Interface = contract, instance state नहीं, कई implement कर सकते हो।",
        "Default interface methods (C# 8+) से interface में नया member जोड़ सकते हो बिना पुरानी classes तोड़े; ये सिर्फ़ interface type से call होते हैं।",
        "Overloading = same नाम, अलग parameters, compile time पर तय। Overriding = same signature, virtual/override, runtime पर तय।",
        "override object को follow करता है, new reference को। new से hiding polymorphism नहीं है।",
        "sealed class को inherit नहीं कर सकते; sealed override आगे override रोक देता है। जो class extension के लिए design नहीं हुई, उसे seal करो।",
        "C# में class की single inheritance है, interfaces कई — इससे diamond problem से बचते हैं।",
        "Inheritance (is-a) से ज़्यादा composition (has-a) पसंद करो: loose coupling, parts बदल सकते हो, mocking आसान — DI यही करता है।",
        "Object बनने का order: derived field initializers → base field initializers → base constructor body → derived constructor body।",
        "Static constructor: कोई parameter नहीं, कोई access modifier नहीं, type के पहले use से पहले अपने-आप एक बार चलता है।",
        "Private constructor बाहर से new को रोकता है: Singleton, factory methods, ऐसी class जिसका object नहीं बनना चाहिए।",
        "Defaults: top-level type = internal, class member = private, interface member = public। protected internal = derived या same assembly; private protected = derived और same assembly दोनों।"
      ],
      hg: [
        "4 pillars: Encapsulation (data chhupao, methods se bachao), Abstraction (kya karta hai dikhao, kaise karta hai chhupao), Inheritance (is-a reuse), Polymorphism (ek call, kai behaviour).",
        "Abstract class = shared code + state + constructor, base class sirf ek. Interface = contract, instance state nahi, kai implement kar sakte ho.",
        "Default interface methods (C# 8+) se interface mein naya member jod sakte ho bina purani classes tode; yeh sirf interface type se call hote hain.",
        "Overloading = same naam, alag parameters, compile time par tay. Overriding = same signature, virtual/override, runtime par tay.",
        "override object ko follow karta hai, new reference ko. new se hiding polymorphism nahi hai.",
        "sealed class ko inherit nahi kar sakte; sealed override aage override rok deta hai. Jo class extension ke liye design nahi hui, use seal karo.",
        "C# mein class ki single inheritance hai, interfaces kai — isse diamond problem se bachte hain.",
        "Inheritance (is-a) se zyada composition (has-a) pasand karo: loose coupling, parts badal sakte ho, mocking aasaan — DI yahi karta hai.",
        "Object banne ka order: derived field initializers → base field initializers → base constructor body → derived constructor body.",
        "Static constructor: koi parameter nahi, koi access modifier nahi, type ke pehle use se pehle apne-aap ek baar chalta hai.",
        "Private constructor bahar se new ko rokta hai: Singleton, factory methods, aisi class jiska object nahi banna chahiye.",
        "Defaults: top-level type = internal, class member = private, interface member = public. protected internal = derived ya same assembly; private protected = derived aur same assembly dono."
      ]
    }
  },
  whatsNew: {
    en: `<p>Modern C# features you will meet in OOP code (current: <b>C# 14 / .NET 10 LTS</b>):</p>
<ul>
<li><b>C# 8</b> — default interface methods (needs .NET Core 3.0+, not .NET Framework).</li>
<li><b>C# 9</b> — covariant return types: an override may return a more derived type.</li>
<li><b>C# 11</b> — <code>required</code> members, <code>static abstract</code> members in interfaces, <code>file</code>-scoped types.</li>
<li><b>C# 12</b> — primary constructors for classes and structs: <code>class OrderService(IOrderRepository repo)</code>.</li>
<li><b>C# 14</b> — the <code>field</code> keyword inside property accessors (validate a value without declaring a backing field) and extension members (extension properties, not only extension methods).</li>
</ul>`,
    hi: `<p>OOP code में आपको ये modern C# features दिखेंगे (current: <b>C# 14 / .NET 10 LTS</b>):</p>
<ul>
<li><b>C# 8</b> — default interface methods (.NET Core 3.0+ चाहिए, .NET Framework में नहीं चलते)।</li>
<li><b>C# 9</b> — covariant return types: override ज़्यादा derived type return कर सकता है।</li>
<li><b>C# 11</b> — <code>required</code> members, interfaces में <code>static abstract</code> members, <code>file</code>-scoped types।</li>
<li><b>C# 12</b> — classes और structs के लिए primary constructors: <code>class OrderService(IOrderRepository repo)</code>।</li>
<li><b>C# 14</b> — property accessor के अंदर <code>field</code> keyword (बिना backing field लिखे value validate करो) और extension members (सिर्फ़ extension methods नहीं, extension properties भी)।</li>
</ul>`,
    hg: `<p>OOP code mein aapko yeh modern C# features dikhenge (current: <b>C# 14 / .NET 10 LTS</b>):</p>
<ul>
<li><b>C# 8</b> — default interface methods (.NET Core 3.0+ chahiye, .NET Framework mein nahi chalte).</li>
<li><b>C# 9</b> — covariant return types: override zyada derived type return kar sakta hai.</li>
<li><b>C# 11</b> — <code>required</code> members, interfaces mein <code>static abstract</code> members, <code>file</code>-scoped types.</li>
<li><b>C# 12</b> — classes aur structs ke liye primary constructors: <code>class OrderService(IOrderRepository repo)</code>.</li>
<li><b>C# 14</b> — property accessor ke andar <code>field</code> keyword (bina backing field likhe value validate karo) aur extension members (sirf extension methods nahi, extension properties bhi).</li>
</ul>`
  }
};
