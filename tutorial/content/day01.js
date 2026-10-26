// Day 1 — OOP, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 1,
  format: "lesson",
  title: {
    en: "OOP — Object-Oriented Programming",
    hi: "OOP — Object-Oriented Programming (objects पर आधारित programming)",
    hg: "OOP — Object-Oriented Programming"
  },
  summary: {
    en: "<p>Day 1 builds a small <b>customer-care CRM</b> in 8 short lessons. First the building blocks — class and object, properties, methods, constructors — then the four OOP pillars: encapsulation, abstraction, inheritance and polymorphism. Each lesson adds one idea to the same code.</p><p>Every lesson follows the same path: what it is, why you need it, an analogy, a complete program with its output, line-by-line notes, common mistakes, a small exercise and a quick quiz. Mark a lesson done when you can explain it without looking.</p>",
    hi: "<p>Day 1 में 8 छोटे पाठों में एक छोटा <b>customer-care CRM</b> बनता है। पहले बुनियादी हिस्से — class और object, properties, methods, constructors — फिर OOP के चार स्तंभ (pillars): encapsulation, abstraction, inheritance और polymorphism। हर पाठ उसी code में एक नई बात जोड़ता है।</p><p>हर पाठ एक ही क्रम में चलता है: यह क्या है, क्यों चाहिए, एक मिसाल, output के साथ पूरा program, लाइन-दर-लाइन समझ, आम ग़लतियाँ, एक छोटा exercise और एक झटपट quiz। जब बिना देखे समझा सको, तब पाठ को पूरा mark करो।</p>",
    hg: "<p>Day 1 mein 8 chhote lessons mein ek chhota <b>customer-care CRM</b> banta hai. Pehle buniyaadi hisse — class aur object, properties, methods, constructors — phir OOP ke chaar pillars: encapsulation, abstraction, inheritance aur polymorphism. Har lesson usi code mein ek nayi baat jodta hai.</p><p>Har lesson ek hi kram mein chalta hai: ye kya hai, kyun chahiye, ek misaal, output ke saath poora program, line-by-line samajh, aam galtiyan, ek chhota exercise aur ek jhatpat quiz. Jab bina dekhe samjha sako, tab lesson ko poora mark karo.</p>"
  },
  sections: [
    {
      id: "class-object",
      depth: "short",
      title: {
        en: "Class and object",
        hi: "Class और object",
        hg: "Class aur object"
      },
      lesson: {
        what: {
          en: "<p>A <b>class</b> is a blueprint: it says what data and what actions a thing has. An <b>object</b> is one real thing built from that blueprint with <code>new</code>.</p>",
          hi: "<p><b>Class</b> एक नक्शा (blueprint) है — यह बताता है कि किसी चीज़ में कौन-सा data होगा और वह कौन-से काम करेगी। <b>Object</b> उसी नक्शे से <code>new</code> लिखकर बनाई गई एक असली चीज़ है।</p>",
          hg: "<p><b>Class</b> ek naksha (blueprint) hai — ye batata hai ki kisi cheez mein kaunsa data hoga aur woh kaunse kaam karegi. <b>Object</b> usi nakshe se <code>new</code> likhkar banayi gayi ek asli cheez hai.</p>"
        },
        why: {
          en: "<p>A CRM handles thousands of customers. You write the <code>Customer</code> class once, then create one object per customer. Each object keeps its own values.</p>",
          hi: "<p>CRM में हज़ारों customers होते हैं। <code>Customer</code> class एक बार लिखो, फिर हर customer के लिए एक object बनाओ। हर object अपनी values अलग रखता है।</p>",
          hg: "<p>CRM mein hazaaron customers hote hain. <code>Customer</code> class ek baar likho, phir har customer ke liye ek object banao. Har object apni values alag rakhta hai.</p>"
        },
        analogy: {
          en: "<p>A blank customer registration form is the class. Each filled form — Asha's, Ravi's — is an object. Same fields, different values.</p>",
          hi: "<p>खाली customer registration form class है। हर भरा हुआ form — Asha का, Ravi का — एक object है। Fields वही, values अलग।</p>",
          hg: "<p>Khaali customer registration form class hai. Har bhara hua form — Asha ka, Ravi ka — ek object hai. Fields wahi, values alag.</p>"
        },
        lines: [
          {
            code: "var asha = new Customer();",
            note: {
              en: "<code>new</code> creates an object in memory. <code>asha</code> is a variable that <b>refers</b> to that object.",
              hi: "<code>new</code> memory में एक नया object बनाता है। <code>asha</code> एक variable है जो उस object की तरफ़ इशारा (<b>reference</b>) करता है।",
              hg: "<code>new</code> memory mein ek naya object banata hai. <code>asha</code> ek variable hai jo us object ki taraf ishaara (<b>reference</b>) karta hai."
            }
          },
          {
            code: "asha.Name = \"Asha\";",
            note: {
              en: "The dot (<code>.</code>) reaches a <b>member</b> of the object. This sets Asha's name only; Ravi's object is untouched.",
              hi: "Dot (<code>.</code>) से object के अंदर की चीज़ (<b>member</b>) तक पहुँचते हैं। यह सिर्फ़ Asha का नाम set करता है; Ravi का object वैसा ही रहता है।",
              hg: "Dot (<code>.</code>) se object ke andar ki cheez (<b>member</b>) tak pahunchte hain. Ye sirf Asha ka naam set karta hai; Ravi ka object waisa hi rehta hai."
            }
          },
          {
            code: "var sameAsha = asha;",
            note: {
              en: "No new object here. Only the reference is copied, so both variables point to the <b>same</b> customer.",
              hi: "यहाँ कोई नया object नहीं बना। सिर्फ़ reference copy हुआ, इसलिए दोनों variables <b>एक ही</b> customer को point करते हैं।",
              hg: "Yahan koi naya object nahi bana. Sirf reference copy hua, isliye dono variables <b>ek hi</b> customer ko point karte hain."
            }
          },
          {
            code: "Console.WriteLine(asha.City);",
            note: {
              en: "Prints <code>Mumbai</code>: the change made through <code>sameAsha</code> is visible through <code>asha</code>.",
              hi: "<code>Mumbai</code> print होता है: <code>sameAsha</code> से किया गया बदलाव <code>asha</code> में भी दिखता है।",
              hg: "<code>Mumbai</code> print hota hai: <code>sameAsha</code> se kiya gaya badlaav <code>asha</code> mein bhi dikhta hai."
            }
          },
          {
            code: "public class Customer",
            note: {
              en: "Declares the blueprint. The top-level statements above run first; types such as classes go at the bottom of the file.",
              hi: "यह नक्शा declare करता है। ऊपर के top-level statements पहले चलते हैं; class जैसे types file के नीचे लिखे जाते हैं।",
              hg: "Ye naksha declare karta hai. Upar ke top-level statements pehle chalte hain; class jaise types file ke neeche likhe jaate hain."
            }
          },
          {
            code: "public string Name { get; set; } = \"\";",
            note: {
              en: "A <b>property</b>: a named value that every object carries. <code>= \"\"</code> gives a starting value, so it is never null. Lesson 2 explains <code>get</code> and <code>set</code>.",
              hi: "यह <b>property</b> है — एक नाम वाली value जो हर object के साथ रहती है। <code>= \"\"</code> शुरुआती value देता है, ताकि यह कभी null न हो। <code>get</code> और <code>set</code> पाठ 2 में समझेंगे।",
              hg: "Ye <b>property</b> hai — ek naam wali value jo har object ke saath rehti hai. <code>= \"\"</code> shuruaati value deta hai, taaki ye kabhi null na ho. <code>get</code> aur <code>set</code> lesson 2 mein samjhenge."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Using the class name as if it were an object: <code>Customer.Name</code> gives error CS0120. You need an object, such as <code>asha.Name</code>.</li><li>Thinking <code>var b = a;</code> copies the object. It copies the reference; both variables change together.</li><li>Declaring without creating: <code>Customer c;</code> makes a variable but no object.</li></ul>",
          hi: "<ul><li>Class के नाम को object समझ लेना: <code>Customer.Name</code> पर error CS0120 आता है। Object चाहिए, जैसे <code>asha.Name</code>।</li><li>यह सोचना कि <code>var b = a;</code> object की copy बनाता है। यह सिर्फ़ reference copy करता है; दोनों variables साथ बदलते हैं।</li><li>सिर्फ़ declare करना, बनाना नहीं: <code>Customer c;</code> से variable बनता है, object नहीं।</li></ul>",
          hg: "<ul><li>Class ke naam ko object samajh lena: <code>Customer.Name</code> par error CS0120 aata hai. Object chahiye, jaise <code>asha.Name</code>.</li><li>Ye sochna ki <code>var b = a;</code> object ki copy banata hai. Ye sirf reference copy karta hai; dono variables saath badalte hain.</li><li>Sirf declare karna, banana nahi: <code>Customer c;</code> se variable banta hai, object nahi.</li></ul>"
        },
        whenToUse: {
          en: "<p>Make a class for each real \"thing\" your application talks about: customer, ticket, agent, payment. When you need many of them with different values, you create objects.</p>",
          hi: "<p>जिस भी असली \"चीज़\" की आपकी application बात करती है — customer, ticket, agent, payment — उसके लिए एक class बनाओ। जब ऐसी कई चीज़ें अलग-अलग values के साथ चाहिए, तब objects बनाओ।</p>",
          hg: "<p>Jis bhi asli \"cheez\" ki aapki application baat karti hai — customer, ticket, agent, payment — uske liye ek class banao. Jab aisi kai cheezein alag-alag values ke saath chahiye, tab objects banao.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a third customer, <b>Meena</b> from <b>Chennai</b>, and print <code>Meena lives in Chennai</code>.</p>",
            hi: "<p>तीसरा customer जोड़ो — <b>Chennai</b> की <b>Meena</b> — और <code>Meena lives in Chennai</code> print करो।</p>",
            hg: "<p>Teesra customer jodo — <b>Chennai</b> ki <b>Meena</b> — aur <code>Meena lives in Chennai</code> print karo.</p>"
          },
          hint: {
            en: "<p>Copy the three lines that create Ravi and change the variable name and the values.</p>",
            hi: "<p>Ravi को बनाने वाली तीन lines copy करो और variable का नाम व values बदल दो।</p>",
            hg: "<p>Ravi ko banane wali teen lines copy karo aur variable ka naam aur values badal do.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a third customer",
              hi: "हल: तीसरा customer",
              hg: "Solution: teesra customer"
            },
            src: "var meena = new Customer();\nmeena.Name = \"Meena\";\nmeena.City = \"Chennai\";\nConsole.WriteLine($\"{meena.Name} lives in {meena.City}\");\n\npublic class Customer\n{\n    public string Name { get; set; } = \"\";\n    public string City { get; set; } = \"\";\n}",
            check: "run",
            expected: "Meena lives in Chennai"
          }
        },
        quiz: {
          q: {
            en: "After <code>var b = a; b.City = \"Goa\";</code> (both are <code>Customer</code> variables), what is <code>a.City</code>?",
            hi: "<code>var b = a; b.City = \"Goa\";</code> के बाद (दोनों <code>Customer</code> variables हैं) <code>a.City</code> क्या होगा?",
            hg: "<code>var b = a; b.City = \"Goa\";</code> ke baad (dono <code>Customer</code> variables hain) <code>a.City</code> kya hoga?"
          },
          options: [
            {
              en: "The old city, because <code>b</code> is a copy",
              hi: "पुरानी city, क्योंकि <code>b</code> एक copy है",
              hg: "Purani city, kyunki <code>b</code> ek copy hai"
            },
            {
              en: "<code>\"Goa\"</code>",
              hi: "<code>\"Goa\"</code> होगा",
              hg: "<code>\"Goa\"</code> hoga"
            },
            {
              en: "A compile error",
              hi: "Compile error आएगा",
              hg: "Compile error aayega"
            }
          ],
          answer: 1,
          explain: {
            en: "<p><code>Customer</code> is a class, so <code>a</code> and <code>b</code> hold references to the same object. Changing it through <code>b</code> changes what <code>a</code> sees.</p>",
            hi: "<p><code>Customer</code> एक class है, इसलिए <code>a</code> और <code>b</code> एक ही object का reference रखते हैं। <code>b</code> से बदलाव करो तो <code>a</code> में भी वही दिखेगा।</p>",
            hg: "<p><code>Customer</code> ek class hai, isliye <code>a</code> aur <code>b</code> ek hi object ka reference rakhte hain. <code>b</code> se badlaav karo to <code>a</code> mein bhi wahi dikhega.</p>"
          }
        },
        recap: {
          en: "<ul><li>Class = blueprint; object = one copy made with <code>new</code>.</li><li>Each object keeps its own values.</li><li>Assigning a class variable copies the reference, not the object.</li></ul>",
          hi: "<ul><li>Class = नक्शा; object = <code>new</code> से बनी एक copy।</li><li>हर object अपनी values अलग रखता है।</li><li>Class variable assign करने पर reference copy होता है, object नहीं।</li></ul>",
          hg: "<ul><li>Class = naksha; object = <code>new</code> se bani ek copy.</li><li>Har object apni values alag rakhta hai.</li><li>Class variable assign karne par reference copy hota hai, object nahi.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Two customers from one class",
            hi: "एक class से दो customers",
            hg: "Ek class se do customers"
          },
          src: "var asha = new Customer();\nasha.Name = \"Asha\";\nasha.City = \"Pune\";\n\nvar ravi = new Customer();\nravi.Name = \"Ravi\";\nravi.City = \"Delhi\";\n\nConsole.WriteLine($\"{asha.Name} lives in {asha.City}\");\nConsole.WriteLine($\"{ravi.Name} lives in {ravi.City}\");\n\n// A class variable holds a reference: both names point to the same object.\nvar sameAsha = asha;\nsameAsha.City = \"Mumbai\";\nConsole.WriteLine(asha.City);\n\npublic class Customer\n{\n    public string Name { get; set; } = \"\";\n    public string City { get; set; } = \"\";\n}",
          check: "run",
          expected: "Asha lives in Pune\nRavi lives in Delhi\nMumbai"
        }
      ]
    },
    {
      id: "fields-properties",
      depth: "short",
      title: {
        en: "Fields and properties",
        hi: "Fields और properties",
        hg: "Fields aur properties"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 1 used <code>{ get; set; }</code> without explaining it. Now you see what a property really is and how it protects the data inside a <code>Customer</code>.",
          hi: "पाठ 1 में <code>{ get; set; }</code> बिना समझाए इस्तेमाल किया था। अब देखेंगे कि property असल में क्या है और <code>Customer</code> के अंदर के data को कैसे बचाती है।",
          hg: "Lesson 1 mein <code>{ get; set; }</code> bina samjhaaye use kiya tha. Ab dekhenge ki property asal mein kya hai aur <code>Customer</code> ke andar ke data ko kaise bachaati hai."
        },
        what: {
          en: "<p>A <b>field</b> is a variable inside a class that stores data. A <b>property</b> is the public door to that data: <code>get</code> runs when someone reads the value, <code>set</code> runs when someone writes it.</p>",
          hi: "<p><b>Field</b> class के अंदर का variable है जिसमें data रखा जाता है। <b>Property</b> उस data का public दरवाज़ा है: कोई value पढ़े तो <code>get</code> चलता है, कोई value लिखे तो <code>set</code> चलता है।</p>",
          hg: "<p><b>Field</b> class ke andar ka variable hai jismein data rakha jaata hai. <b>Property</b> us data ka public darwaaza hai: koi value padhe to <code>get</code> chalta hai, koi value likhe to <code>set</code> chalta hai.</p>"
        },
        why: {
          en: "<p>A wrong phone number in the CRM means the SMS never reaches the customer. A property lets the class check every value <i>before</i> storing it, in one place.</p>",
          hi: "<p>CRM में ग़लत phone number हो तो SMS customer तक कभी नहीं पहुँचेगा। Property से class हर value को store करने <i>से पहले</i> एक ही जगह check कर सकती है।</p>",
          hg: "<p>CRM mein galat phone number ho to SMS customer tak kabhi nahi pahunchega. Property se class har value ko store karne <i>se pehle</i> ek hi jagah check kar sakti hai.</p>"
        },
        analogy: {
          en: "<p>A bank locker: the locker (field) holds the valuables, but you reach it only through the counter clerk (property), who checks your ID first.</p>",
          hi: "<p>बैंक लॉकर: लॉकर (field) में क़ीमती सामान रखा है, पर वहाँ तक सिर्फ़ counter वाले कर्मचारी (property) के ज़रिए पहुँचते हो, जो पहले आपकी ID check करता है।</p>",
          hg: "<p>Bank locker: locker (field) mein keemti saamaan rakha hai, par wahan tak sirf counter wale karmchaari (property) ke zariye pahunchte ho, jo pehle aapki ID check karta hai.</p>"
        },
        focus: {
          caption: {
            en: "The field and the property that guards it",
            hi: "Field और उसकी रखवाली करने वाली property",
            hg: "Field aur uski rakhwaali karne wali property"
          },
          src: "private string _phone = \"\";\n\npublic string Phone\n{\n    get => _phone;\n    set\n    {\n        if (value.Length != 10)\n            throw new ArgumentException(\"Phone must have 10 digits\");\n        _phone = value;\n    }\n}",
          check: "none"
        },
        lines: [
          {
            code: "var c = new Customer { Id = 101, Name = \"Asha\" };",
            note: {
              en: "An <b>object initializer</b>: the <code>{ ... }</code> after <code>new</code> sets properties right after the object is created.",
              hi: "<b>Object initializer</b>: <code>new</code> के बाद वाला <code>{ ... }</code> object बनते ही properties set कर देता है।",
              hg: "<b>Object initializer</b>: <code>new</code> ke baad wala <code>{ ... }</code> object bante hi properties set kar deta hai."
            }
          },
          {
            code: "private string _phone = \"\";",
            note: {
              en: "The <b>field</b> that really stores the number. <code>private</code> means only code inside <code>Customer</code> can touch it. The <code>_</code> prefix is the usual naming style.",
              hi: "यह वह <b>field</b> है जो असल में number रखता है। <code>private</code> का मतलब: इसे सिर्फ़ <code>Customer</code> के अंदर का code छू सकता है। आगे <code>_</code> लगाना आम naming तरीका है।",
              hg: "Ye woh <b>field</b> hai jo asal mein number rakhta hai. <code>private</code> ka matlab: ise sirf <code>Customer</code> ke andar ka code chhoo sakta hai. Aage <code>_</code> lagana aam naming tareeka hai."
            }
          },
          {
            code: "public int Id { get; init; }",
            note: {
              en: "<code>init</code> allows a value only while the object is being created. After that, <code>Id</code> is read-only.",
              hi: "<code>init</code> सिर्फ़ object बनते समय value देने देता है। उसके बाद <code>Id</code> सिर्फ़ पढ़ा जा सकता है (read-only)।",
              hg: "<code>init</code> sirf object bante samay value dene deta hai. Uske baad <code>Id</code> sirf padha ja sakta hai (read-only)."
            }
          },
          {
            code: "public string Name { get; set; } = \"\";",
            note: {
              en: "An <b>auto-property</b>: the compiler creates the hidden field for you. Use it when there is no rule to check.",
              hi: "<b>Auto-property</b>: compiler आपके लिए छुपा हुआ field ख़ुद बना देता है। जब कोई rule check नहीं करना हो, तब यही इस्तेमाल करो।",
              hg: "<b>Auto-property</b>: compiler aapke liye chhupa hua field khud bana deta hai. Jab koi rule check nahi karna ho, tab yahi use karo."
            }
          },
          {
            code: "if (value.Length != 10)",
            note: {
              en: "Inside <code>set</code>, <code>value</code> is the new value someone is trying to assign.",
              hi: "<code>set</code> के अंदर <code>value</code> वह नई value है जो कोई assign करने की कोशिश कर रहा है।",
              hg: "<code>set</code> ke andar <code>value</code> woh nayi value hai jo koi assign karne ki koshish kar raha hai."
            }
          },
          {
            code: "throw new ArgumentException(\"Phone must have 10 digits\");",
            note: {
              en: "Bad value: stop loudly with an exception. The old phone number stays as it was.",
              hi: "ग़लत value: exception फेंककर साफ़ मना करो। पुराना phone number वैसा ही रहता है।",
              hg: "Galat value: exception phenk kar saaf mana karo. Purana phone number waisa hi rehta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Public fields (<code>public string Phone;</code>): there is no place to add a rule later.</li><li>Silently ignoring a bad value in <code>set</code>: the caller thinks it worked. Throw instead.</li><li>Slow work (a database call) inside <code>get</code>: reading a property should be cheap.</li></ul>",
          hi: "<ul><li>Public fields (<code>public string Phone;</code>): बाद में rule जोड़ने की कोई जगह नहीं बचती।</li><li><code>set</code> में ग़लत value को चुपचाप छोड़ देना: caller समझता है काम हो गया। इसकी जगह exception फेंको।</li><li><code>get</code> में धीमा काम (database call): property पढ़ना सस्ता होना चाहिए।</li></ul>",
          hg: "<ul><li>Public fields (<code>public string Phone;</code>): baad mein rule jodne ki koi jagah nahi bachti.</li><li><code>set</code> mein galat value ko chupchaap chhod dena: caller samajhta hai kaam ho gaya. Iski jagah exception phenko.</li><li><code>get</code> mein dheema kaam (database call): property padhna sasta hona chahiye.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use auto-properties by default. Write a full property with a private field when a value has a rule. Use <code>init</code> for values that must not change after creation, such as an <code>Id</code>.</p>",
          hi: "<p>आम तौर पर auto-property लिखो। जब value पर कोई rule हो, तब private field के साथ पूरी property लिखो। जो values बनने के बाद नहीं बदलनी चाहिए (जैसे <code>Id</code>), उनके लिए <code>init</code>।</p>",
          hg: "<p>Aam taur par auto-property likho. Jab value par koi rule ho, tab private field ke saath poori property likho. Jo values banne ke baad nahi badalni chahiye (jaise <code>Id</code>), unke liye <code>init</code>.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add an <code>Email</code> property that rejects any value without <code>@</code> by throwing <code>ArgumentException(\"Invalid email\")</code>. Set a valid email, then try <code>\"asha.mail.com\"</code> and print the error.</p>",
            hi: "<p>एक <code>Email</code> property जोड़ो जो <code>@</code> के बिना वाली value को <code>ArgumentException(\"Invalid email\")</code> फेंककर मना करे। पहले सही email set करो, फिर <code>\"asha.mail.com\"</code> try करो और error print करो।</p>",
            hg: "<p>Ek <code>Email</code> property jodo jo <code>@</code> ke bina wali value ko <code>ArgumentException(\"Invalid email\")</code> phenk kar mana kare. Pehle sahi email set karo, phir <code>\"asha.mail.com\"</code> try karo aur error print karo.</p>"
          },
          hint: {
            en: "<p>Copy the <code>Phone</code> pattern: a private field <code>_email</code>, and in <code>set</code> check <code>value.Contains('@')</code>.</p>",
            hi: "<p><code>Phone</code> वाला तरीका copy करो: एक private field <code>_email</code>, और <code>set</code> में <code>value.Contains('@')</code> check करो।</p>",
            hg: "<p><code>Phone</code> wala tareeka copy karo: ek private field <code>_email</code>, aur <code>set</code> mein <code>value.Contains('@')</code> check karo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a guarded Email property",
              hi: "हल: rule वाली Email property",
              hg: "Solution: rule wali Email property"
            },
            src: "var c = new Customer { Name = \"Asha\" };\nc.Email = \"asha@mail.com\";\ntry\n{\n    c.Email = \"asha.mail.com\";\n}\ncatch (ArgumentException ex)\n{\n    Console.WriteLine($\"Rejected: {ex.Message}\");\n}\nConsole.WriteLine(c.Email);\n\npublic class Customer\n{\n    private string _email = \"\";\n\n    public string Name { get; set; } = \"\";\n\n    public string Email\n    {\n        get => _email;\n        set\n        {\n            if (!value.Contains('@'))\n                throw new ArgumentException(\"Invalid email\");\n            _email = value;\n        }\n    }\n}",
            check: "run",
            expected: "Rejected: Invalid email\nasha@mail.com"
          }
        },
        quiz: {
          q: {
            en: "Which declaration allows <code>new Customer { Id = 1 }</code> but blocks <code>c.Id = 2;</code> later?",
            hi: "कौन-सा declaration <code>new Customer { Id = 1 }</code> को allow करता है पर बाद में <code>c.Id = 2;</code> को रोकता है?",
            hg: "Kaunsa declaration <code>new Customer { Id = 1 }</code> ko allow karta hai par baad mein <code>c.Id = 2;</code> ko rokta hai?"
          },
          options: [
            {
              en: "<code>public int Id { get; set; }</code>",
              hi: "<code>public int Id { get; set; }</code> वाली property",
              hg: "<code>public int Id { get; set; }</code> wali property"
            },
            {
              en: "<code>public int Id { get; init; }</code>",
              hi: "<code>public int Id { get; init; }</code> वाली property",
              hg: "<code>public int Id { get; init; }</code> wali property"
            },
            {
              en: "<code>public int Id;</code>",
              hi: "<code>public int Id;</code> वाला field",
              hg: "<code>public int Id;</code> wala field"
            },
            {
              en: "<code>private int Id { get; set; }</code>",
              hi: "<code>private int Id { get; set; }</code> वाली property",
              hg: "<code>private int Id { get; set; }</code> wali property"
            }
          ],
          answer: 1,
          explain: {
            en: "<p><code>init</code> accepts a value only during creation. <code>set</code> allows changes at any time, a public field has no protection, and a private property cannot be set from outside at all.</p>",
            hi: "<p><code>init</code> सिर्फ़ बनते समय value लेता है। <code>set</code> कभी भी बदलने देता है, public field पर कोई सुरक्षा नहीं, और private property को बाहर से बिल्कुल set नहीं कर सकते।</p>",
            hg: "<p><code>init</code> sirf bante samay value leta hai. <code>set</code> kabhi bhi badalne deta hai, public field par koi suraksha nahi, aur private property ko bahar se bilkul set nahi kar sakte.</p>"
          }
        },
        recap: {
          en: "<ul><li>Field = where data is stored (keep it <code>private</code>).</li><li>Property = the guarded door: <code>get</code> to read, <code>set</code> to write.</li><li>Auto-property by default, full property for rules, <code>init</code> for set-once values.</li></ul>",
          hi: "<ul><li>Field = जहाँ data रखा जाता है (इसे <code>private</code> रखो)।</li><li>Property = पहरे वाला दरवाज़ा: पढ़ने के लिए <code>get</code>, लिखने के लिए <code>set</code>।</li><li>आम तौर पर auto-property, rule हो तो पूरी property, एक बार set होने वाली values के लिए <code>init</code>।</li></ul>",
          hg: "<ul><li>Field = jahan data rakha jaata hai (ise <code>private</code> rakho).</li><li>Property = pehre wala darwaaza: padhne ke liye <code>get</code>, likhne ke liye <code>set</code>.</li><li>Aam taur par auto-property, rule ho to poori property, ek baar set hone wali values ke liye <code>init</code>.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Customer with a guarded phone number",
            hi: "Phone number की रखवाली करता Customer",
            hg: "Phone number ki rakhwaali karta Customer"
          },
          src: "var c = new Customer { Id = 101, Name = \"Asha\" };\nc.Phone = \"9876543210\";\nConsole.WriteLine($\"{c.Id} {c.Name}: {c.Phone}\");\n\ntry\n{\n    c.Phone = \"12345\";\n}\ncatch (ArgumentException ex)\n{\n    Console.WriteLine($\"Rejected: {ex.Message}\");\n}\nConsole.WriteLine($\"Phone is still {c.Phone}\");\n// c.Id = 102;   // error CS8852: Id can be set only while the object is created\n\npublic class Customer\n{\n    private string _phone = \"\";\n\n    public int Id { get; init; }\n    public string Name { get; set; } = \"\";\n\n    public string Phone\n    {\n        get => _phone;\n        set\n        {\n            if (value.Length != 10)\n                throw new ArgumentException(\"Phone must have 10 digits\");\n            _phone = value;\n        }\n    }\n}",
          check: "run",
          expected: "101 Asha: 9876543210\nRejected: Phone must have 10 digits\nPhone is still 9876543210"
        }
      ]
    },
    {
      id: "methods",
      depth: "short",
      title: {
        en: "Methods",
        hi: "Methods (काम करने वाले हिस्से)",
        hg: "Methods"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 1–2 gave objects data. Now a <code>SupportTicket</code> also gets <b>behaviour</b>: methods that work on its own data.",
          hi: "पाठ 1–2 में objects को data मिला। अब <code>SupportTicket</code> को <b>व्यवहार</b> (behaviour) भी मिलेगा: ऐसे methods जो उसके अपने data पर काम करते हैं।",
          hg: "Lesson 1–2 mein objects ko data mila. Ab <code>SupportTicket</code> ko <b>behaviour</b> bhi milega: aise methods jo uske apne data par kaam karte hain."
        },
        what: {
          en: "<p>A <b>method</b> is a named block of code inside a class that does one job. It can take inputs (<b>parameters</b>) and can give back a result (<b>return value</b>). <code>void</code> means it gives nothing back.</p>",
          hi: "<p><b>Method</b> class के अंदर नाम वाला code का एक हिस्सा है जो एक काम करता है। यह input (<b>parameters</b>) ले सकता है और नतीजा (<b>return value</b>) वापस दे सकता है। <code>void</code> का मतलब है — कुछ वापस नहीं देता।</p>",
          hg: "<p><b>Method</b> class ke andar naam wala code ka ek hissa hai jo ek kaam karta hai. Ye input (<b>parameters</b>) le sakta hai aur nateeja (<b>return value</b>) wapas de sakta hai. <code>void</code> ka matlab hai — kuch wapas nahi deta.</p>"
        },
        why: {
          en: "<p>Ticket rules belong with the ticket. If every screen wrote its own \"assign agent\" code, the copies would drift apart. One <code>AssignTo</code> method means one place to read, test and fix.</p>",
          hi: "<p>Ticket के rules ticket के साथ होने चाहिए। अगर हर screen अपना-अपना \"agent assign\" code लिखे, तो सारी copies धीरे-धीरे अलग हो जाएँगी। एक <code>AssignTo</code> method मतलब पढ़ने, test करने और ठीक करने की एक ही जगह।</p>",
          hg: "<p>Ticket ke rules ticket ke saath hone chahiye. Agar har screen apna-apna \"agent assign\" code likhe, to saari copies dheere-dheere alag ho jaayengi. Ek <code>AssignTo</code> method matlab padhne, test karne aur theek karne ki ek hi jagah.</p>"
        },
        analogy: {
          en: "<p>The buttons on a washing machine: you press \"Quick wash\" (call a method) and choose a temperature (parameter). Some buttons just do the work (<code>void</code>); the display that shows \"12 min left\" gives you a value back (return value).</p>",
          hi: "<p>Washing machine के बटन: आप \"Quick wash\" दबाते हो (method call) और temperature चुनते हो (parameter)। कुछ बटन बस काम करते हैं (<code>void</code>); \"12 min left\" दिखाने वाली screen आपको एक value वापस देती है (return value)।</p>",
          hg: "<p>Washing machine ke button: aap \"Quick wash\" dabaate ho (method call) aur temperature chunte ho (parameter). Kuch button bas kaam karte hain (<code>void</code>); \"12 min left\" dikhane wali screen aapko ek value wapas deti hai (return value).</p>"
        },
        lines: [
          {
            code: "ticket.AssignTo(\"Meena\");",
            note: {
              en: "Calling a method: object, dot, method name, and the <b>arguments</b> in brackets.",
              hi: "Method call करना: object, dot, method का नाम, और brackets में <b>arguments</b> (दी जाने वाली values)।",
              hg: "Method call karna: object, dot, method ka naam, aur brackets mein <b>arguments</b> (di jaane wali values)."
            }
          },
          {
            code: "private readonly List<string> _notes = new();",
            note: {
              en: "A private list that only the ticket's methods can change. <code>readonly</code> means the field always points to this same list.",
              hi: "एक private list जिसे सिर्फ़ ticket के methods बदल सकते हैं। <code>readonly</code> का मतलब है कि यह field हमेशा इसी list को point करेगा।",
              hg: "Ek private list jise sirf ticket ke methods badal sakte hain. <code>readonly</code> ka matlab hai ki ye field hamesha isi list ko point karega."
            }
          },
          {
            code: "public string Agent { get; private set; } = \"unassigned\";",
            note: {
              en: "Anyone can read <code>Agent</code>, but only the ticket's own methods can change it. Lesson 5 explains why.",
              hi: "<code>Agent</code> को कोई भी पढ़ सकता है, पर बदल सिर्फ़ ticket के अपने methods सकते हैं। क्यों — यह पाठ 5 में।",
              hg: "<code>Agent</code> ko koi bhi padh sakta hai, par badal sirf ticket ke apne methods sakte hain. Kyun — ye lesson 5 mein."
            }
          },
          {
            code: "public void AssignTo(string agent)",
            note: {
              en: "<code>void</code> = returns nothing. <code>string agent</code> is a <b>parameter</b>: the input the caller must pass.",
              hi: "<code>void</code> = कुछ return नहीं करता। <code>string agent</code> एक <b>parameter</b> है: वह input जो caller को देना ही होगा।",
              hg: "<code>void</code> = kuch return nahi karta. <code>string agent</code> ek <b>parameter</b> hai: woh input jo caller ko dena hi hoga."
            }
          },
          {
            code: "return $\"#{Id} {Customer}: {Issue} (agent: {Agent})\";",
            note: {
              en: "<code>return</code> sends a value back to the caller. Its type must match the method's return type, <code>string</code>.",
              hi: "<code>return</code> caller को एक value वापस भेजता है। उसका type method के return type (<code>string</code>) से मेल खाना चाहिए।",
              hg: "<code>return</code> caller ko ek value wapas bhejta hai. Uska type method ke return type (<code>string</code>) se match hona chahiye."
            }
          },
          {
            code: "public int NoteCount() => _notes.Count;",
            note: {
              en: "The short form <code>=&gt;</code> is the same as <code>{ return _notes.Count; }</code>. Use it for one-line methods.",
              hi: "छोटा रूप <code>=&gt;</code> बिल्कुल <code>{ return _notes.Count; }</code> जैसा है। एक line वाले methods के लिए इस्तेमाल करो।",
              hg: "Chhota roop <code>=&gt;</code> bilkul <code>{ return _notes.Count; }</code> jaisa hai. Ek line wale methods ke liye use karo."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>One method doing several unrelated jobs (a name with \"And\" is a warning sign).</li><li>Returning the private list itself: callers can then add or remove notes without any rule. Return a count or a read-only view.</li><li>Writing ticket logic in the UI or controller instead of in a ticket method.</li></ul>",
          hi: "<ul><li>एक method में कई अलग-अलग काम (नाम में \"And\" हो तो सावधान)।</li><li>Private list को सीधे return कर देना: फिर caller बिना किसी rule के notes जोड़-हटा सकता है। Count या read-only view लौटाओ।</li><li>Ticket का logic ticket के method में लिखने की जगह UI या controller में लिख देना।</li></ul>",
          hg: "<ul><li>Ek method mein kai alag-alag kaam (naam mein \"And\" ho to saavdhaan).</li><li>Private list ko seedhe return kar dena: phir caller bina kisi rule ke notes jod-hata sakta hai. Count ya read-only view lautaao.</li><li>Ticket ka logic ticket ke method mein likhne ki jagah UI ya controller mein likh dena.</li></ul>"
        },
        whenToUse: {
          en: "<p>Whenever an action reads or changes an object's data, make it a method of that class. Name it with a verb: <code>AssignTo</code>, <code>AddNote</code>, <code>Close</code>.</p>",
          hi: "<p>जब भी कोई काम किसी object का data पढ़ता या बदलता है, उसे उसी class का method बनाओ। नाम में क्रिया (verb) रखो: <code>AssignTo</code>, <code>AddNote</code>, <code>Close</code>।</p>",
          hg: "<p>Jab bhi koi kaam kisi object ka data padhta ya badalta hai, use usi class ka method banao. Naam mein verb rakho: <code>AssignTo</code>, <code>AddNote</code>, <code>Close</code>.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a method <code>bool IsAssigned()</code> that returns <code>true</code> when <code>Agent</code> is not <code>\"unassigned\"</code>. Print it before and after calling <code>AssignTo</code>.</p>",
            hi: "<p>एक method <code>bool IsAssigned()</code> जोड़ो जो <code>true</code> लौटाए जब <code>Agent</code> की value <code>\"unassigned\"</code> न हो। <code>AssignTo</code> call करने से पहले और बाद में इसे print करो।</p>",
            hg: "<p>Ek method <code>bool IsAssigned()</code> jodo jo <code>true</code> lautaaye jab <code>Agent</code> ki value <code>\"unassigned\"</code> na ho. <code>AssignTo</code> call karne se pehle aur baad mein ise print karo.</p>"
          },
          hint: {
            en: "<p>Compare <code>Agent</code> with <code>\"unassigned\"</code> and return the result of that comparison.</p>",
            hi: "<p><code>Agent</code> की <code>\"unassigned\"</code> से तुलना करो और उस तुलना का नतीजा return करो।</p>",
            hg: "<p><code>Agent</code> ki <code>\"unassigned\"</code> se tulna karo aur us tulna ka nateeja return karo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a method that returns bool",
              hi: "हल: bool लौटाने वाला method",
              hg: "Solution: bool lautaane wala method"
            },
            src: "var ticket = new SupportTicket { Id = 501 };\nConsole.WriteLine(ticket.IsAssigned());\nticket.AssignTo(\"Meena\");\nConsole.WriteLine(ticket.IsAssigned());\n\npublic class SupportTicket\n{\n    public int Id { get; init; }\n    public string Agent { get; private set; } = \"unassigned\";\n\n    public void AssignTo(string agent) => Agent = agent;\n\n    public bool IsAssigned() => Agent != \"unassigned\";\n}",
            check: "run",
            expected: "False\nTrue"
          }
        },
        quiz: {
          q: {
            en: "In <code>public void AddNote(string note)</code>, what does <code>void</code> mean?",
            hi: "<code>public void AddNote(string note)</code> में <code>void</code> का क्या मतलब है?",
            hg: "<code>public void AddNote(string note)</code> mein <code>void</code> ka kya matlab hai?"
          },
          options: [
            {
              en: "The method is private",
              hi: "Method private है",
              hg: "Method private hai"
            },
            {
              en: "The method takes no parameters",
              hi: "Method कोई parameter नहीं लेता",
              hg: "Method koi parameter nahi leta"
            },
            {
              en: "The method gives no value back",
              hi: "Method कोई value वापस नहीं देता",
              hg: "Method koi value wapas nahi deta"
            },
            {
              en: "The method can be called without an object",
              hi: "Method को बिना object के call कर सकते हैं",
              hg: "Method ko bina object ke call kar sakte hain"
            }
          ],
          answer: 2,
          explain: {
            en: "<p><code>void</code> is the return type: nothing comes back. Parameters are what is inside the brackets, <code>private</code> controls who can call it, and calling without an object needs <code>static</code>.</p>",
            hi: "<p><code>void</code> return type है: कुछ वापस नहीं आता। Parameters brackets के अंदर होते हैं, कौन call कर सकता है यह <code>private</code> तय करता है, और बिना object के call के लिए <code>static</code> चाहिए।</p>",
            hg: "<p><code>void</code> return type hai: kuch wapas nahi aata. Parameters brackets ke andar hote hain, kaun call kar sakta hai ye <code>private</code> tay karta hai, aur bina object ke call ke liye <code>static</code> chahiye.</p>"
          }
        },
        recap: {
          en: "<ul><li>Method = one named action inside a class.</li><li>Parameters go in; a return value comes out; <code>void</code> returns nothing.</li><li>Keep the rules for an object in that object's methods.</li></ul>",
          hi: "<ul><li>Method = class के अंदर एक नाम वाला काम।</li><li>Parameters अंदर जाते हैं; return value बाहर आती है; <code>void</code> कुछ नहीं लौटाता।</li><li>किसी object के rules उसी object के methods में रखो।</li></ul>",
          hg: "<ul><li>Method = class ke andar ek naam wala kaam.</li><li>Parameters andar jaate hain; return value bahar aati hai; <code>void</code> kuch nahi lautaata.</li><li>Kisi object ke rules usi object ke methods mein rakho.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A support ticket with methods",
            hi: "Methods वाला support ticket",
            hg: "Methods wala support ticket"
          },
          src: "var ticket = new SupportTicket { Id = 501, Customer = \"Asha\", Issue = \"Refund not received\" };\nticket.AssignTo(\"Meena\");\nticket.AddNote(\"Called the bank\");\nticket.AddNote(\"Refund is in process\");\n\nConsole.WriteLine(ticket.Summary());\nConsole.WriteLine($\"Notes: {ticket.NoteCount()}\");\n\npublic class SupportTicket\n{\n    private readonly List<string> _notes = new();\n\n    public int Id { get; init; }\n    public string Customer { get; init; } = \"\";\n    public string Issue { get; init; } = \"\";\n    public string Agent { get; private set; } = \"unassigned\";\n\n    public void AssignTo(string agent)\n    {\n        Agent = agent;\n    }\n\n    public void AddNote(string note)\n    {\n        _notes.Add(note);\n    }\n\n    public string Summary()\n    {\n        return $\"#{Id} {Customer}: {Issue} (agent: {Agent})\";\n    }\n\n    public int NoteCount() => _notes.Count;\n}",
          check: "run",
          expected: "#501 Asha: Refund not received (agent: Meena)\nNotes: 2"
        }
      ]
    },
    {
      id: "constructors",
      depth: "short",
      title: {
        en: "Constructors",
        hi: "Constructors (object की शुरुआत)",
        hg: "Constructors"
      },
      lesson: {
        buildsOn: {
          en: "In lesson 3 a ticket could be created without a customer or an issue, because initializer values are optional. A constructor makes the required values compulsory, so every ticket starts valid.",
          hi: "पाठ 3 में ticket बिना customer या issue के भी बन सकता था, क्योंकि initializer की values ज़रूरी नहीं होतीं। Constructor ज़रूरी values को अनिवार्य बना देता है, ताकि हर ticket सही हालत में शुरू हो।",
          hg: "Lesson 3 mein ticket bina customer ya issue ke bhi ban sakta tha, kyunki initializer ki values zaroori nahi hotin. Constructor zaroori values ko compulsory bana deta hai, taaki har ticket sahi haalat mein shuru ho."
        },
        what: {
          en: "<p>A <b>constructor</b> is a special method that runs automatically when you write <code>new</code>. It has the same name as the class and no return type. Its job is to put the new object into a valid starting state.</p>",
          hi: "<p><b>Constructor</b> एक ख़ास method है जो <code>new</code> लिखते ही अपने-आप चलता है। इसका नाम class के नाम जैसा होता है और इसका कोई return type नहीं होता। इसका काम है नए object को सही शुरुआती हालत (valid state) में लाना।</p>",
          hg: "<p><b>Constructor</b> ek khaas method hai jo <code>new</code> likhte hi apne-aap chalta hai. Iska naam class ke naam jaisa hota hai aur iska koi return type nahi hota. Iska kaam hai naye object ko sahi shuruaati haalat (valid state) mein laana.</p>"
        },
        why: {
          en: "<p>A ticket without a customer is useless and causes errors later. With a constructor, the compiler forces every caller to pass the customer and the issue, and the constructor can reject bad values at the door.</p>",
          hi: "<p>बिना customer वाला ticket बेकार है और बाद में errors लाता है। Constructor होने पर compiler हर caller से customer और issue देने को मजबूर करता है, और constructor ग़लत values को दरवाज़े पर ही रोक सकता है।</p>",
          hg: "<p>Bina customer wala ticket bekaar hai aur baad mein errors laata hai. Constructor hone par compiler har caller se customer aur issue dene ko majboor karta hai, aur constructor galat values ko darwaaze par hi rok sakta hai.</p>"
        },
        analogy: {
          en: "<p>Opening a bank account: the bank gives you an account number only after you submit your name, address and ID proof. The account is valid from day one. That check at the start is the constructor.</p>",
          hi: "<p>बैंक में खाता खोलना: नाम, पता और ID proof देने के बाद ही बैंक account number देता है। खाता पहले दिन से सही होता है। शुरुआत की यही जाँच constructor है।</p>",
          hg: "<p>Bank mein khaata kholna: naam, pata aur ID proof dene ke baad hi bank account number deta hai. Khaata pehle din se sahi hota hai. Shuruaat ki yahi jaanch constructor hai.</p>"
        },
        lines: [
          {
            code: "public SupportTicket(int id, string customer, string issue, string priority = \"Normal\")",
            note: {
              en: "Same name as the class, no return type. <code>priority</code> is an <b>optional parameter</b>: if the caller skips it, it is <code>\"Normal\"</code>.",
              hi: "Class जैसा ही नाम, कोई return type नहीं। <code>priority</code> एक <b>optional parameter</b> है: caller न दे तो इसकी value <code>\"Normal\"</code> होगी।",
              hg: "Class jaisa hi naam, koi return type nahi. <code>priority</code> ek <b>optional parameter</b> hai: caller na de to iski value <code>\"Normal\"</code> hogi."
            }
          },
          {
            code: "throw new ArgumentException(\"Customer is required\");",
            note: {
              en: "Reject bad input before the object can be used. <code>new</code> fails, so the caller never gets a half-built ticket.",
              hi: "Object इस्तेमाल होने से पहले ही ग़लत input को रोको। <code>new</code> fail हो जाता है, इसलिए caller को कभी अधूरा ticket नहीं मिलता।",
              hg: "Object use hone se pehle hi galat input ko roko. <code>new</code> fail ho jaata hai, isliye caller ko kabhi adhoora ticket nahi milta."
            }
          },
          {
            code: "Id = id;",
            note: {
              en: "Copy the parameter into the property. <code>Id { get; }</code> has no setter, so only a constructor can give it a value. (If the names were identical you would write <code>this.Id = Id;</code> — <code>this</code> means \"the current object\".)",
              hi: "Parameter की value property में डालो। <code>Id { get; }</code> में setter नहीं है, इसलिए उसे value सिर्फ़ constructor दे सकता है। (अगर दोनों के नाम बिल्कुल एक जैसे होते तो <code>this.Id = Id;</code> लिखते — <code>this</code> का मतलब है \"यही object\"।)",
              hg: "Parameter ki value property mein daalo. <code>Id { get; }</code> mein setter nahi hai, isliye use value sirf constructor de sakta hai. (Agar dono ke naam bilkul ek jaise hote to <code>this.Id = Id;</code> likhte — <code>this</code> ka matlab hai \"yahi object\".)"
            }
          },
          {
            code: "Status = \"Open\";",
            note: {
              en: "Every new ticket starts as <code>Open</code>. The caller cannot forget it.",
              hi: "हर नया ticket <code>Open</code> से शुरू होता है। Caller इसे भूल ही नहीं सकता।",
              hg: "Har naya ticket <code>Open</code> se shuru hota hai. Caller ise bhool hi nahi sakta."
            }
          },
          {
            code: "var t2 = new SupportTicket(502, \"Ravi\", \"SIM not active\", priority: \"High\");",
            note: {
              en: "A <b>named argument</b> (<code>priority:</code>) makes an optional value easy to read at the call site.",
              hi: "<b>Named argument</b> (<code>priority:</code>) से call वाली जगह पर optional value पढ़ना आसान हो जाता है।",
              hg: "<b>Named argument</b> (<code>priority:</code>) se call wali jagah par optional value padhna aasaan ho jaata hai."
            }
          },
          {
            code: "_ = new SupportTicket(503, \"\", \"No customer name\");",
            note: {
              en: "<code>_</code> is a <b>discard</b>: we do not need the object, we only want to see the exception.",
              hi: "<code>_</code> एक <b>discard</b> है: हमें object नहीं चाहिए, सिर्फ़ exception देखना है।",
              hg: "<code>_</code> ek <b>discard</b> hai: humein object nahi chahiye, sirf exception dekhna hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Slow work in a constructor (database or HTTP calls): <code>new</code> should be fast and predictable.</li><li>Seven or more parameters: group them into a small class instead.</li><li>No validation, so invalid objects can exist and fail far away from the cause.</li></ul>",
          hi: "<ul><li>Constructor में धीमा काम (database या HTTP call): <code>new</code> तेज़ और भरोसेमंद होना चाहिए।</li><li>सात या ज़्यादा parameters: इन्हें एक छोटी class में group करो।</li><li>Validation न करना: फिर ग़लत objects बन जाते हैं और गड़बड़ असली वजह से बहुत दूर जाकर दिखती है।</li></ul>",
          hg: "<ul><li>Constructor mein dheema kaam (database ya HTTP call): <code>new</code> tez aur bharosemand hona chahiye.</li><li>Saat ya zyada parameters: inhe ek chhoti class mein group karo.</li><li>Validation na karna: phir galat objects ban jaate hain aur gadbad asli wajah se bahut door jaakar dikhti hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Add a constructor when some values are required for the object to make sense. Keep it short: check the inputs, set the properties, done.</p>",
          hi: "<p>जब object को समझदारी से बनने के लिए कुछ values ज़रूरी हों, तब constructor जोड़ो। इसे छोटा रखो: input check करो, properties set करो, बस।</p>",
          hg: "<p>Jab object ko samajhdaari se banne ke liye kuch values zaroori hon, tab constructor jodo. Ise chhota rakho: input check karo, properties set karo, bas.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a required <code>channel</code> parameter (for example <code>\"Chat\"</code>) and show it in <code>Summary()</code> like <code>#501 [Normal] Asha via Chat: Refund not received</code>. Reject an empty channel.</p>",
            hi: "<p>एक ज़रूरी <code>channel</code> parameter जोड़ो (जैसे <code>\"Chat\"</code>) और उसे <code>Summary()</code> में ऐसे दिखाओ: <code>#501 [Normal] Asha via Chat: Refund not received</code>। ख़ाली channel को मना करो।</p>",
            hg: "<p>Ek zaroori <code>channel</code> parameter jodo (jaise <code>\"Chat\"</code>) aur use <code>Summary()</code> mein aise dikhao: <code>#501 [Normal] Asha via Chat: Refund not received</code>. Khaali channel ko mana karo.</p>"
          },
          hint: {
            en: "<p>Add a get-only <code>Channel</code> property and one more <code>if</code> check. Required parameters must come <i>before</i> optional ones such as <code>priority</code>.</p>",
            hi: "<p>एक get-only <code>Channel</code> property और एक और <code>if</code> check जोड़ो। ज़रूरी parameters हमेशा <code>priority</code> जैसे optional parameters से <i>पहले</i> आते हैं।</p>",
            hg: "<p>Ek get-only <code>Channel</code> property aur ek aur <code>if</code> check jodo. Zaroori parameters hamesha <code>priority</code> jaise optional parameters se <i>pehle</i> aate hain.</p>"
          },
          solution: {
            caption: {
              en: "Solution: one more required value",
              hi: "हल: एक और ज़रूरी value",
              hg: "Solution: ek aur zaroori value"
            },
            src: "var t = new SupportTicket(501, \"Asha\", \"Refund not received\", \"Chat\");\nConsole.WriteLine(t.Summary());\n\npublic class SupportTicket\n{\n    public int Id { get; }\n    public string Customer { get; }\n    public string Issue { get; }\n    public string Channel { get; }\n    public string Priority { get; }\n\n    public SupportTicket(int id, string customer, string issue, string channel, string priority = \"Normal\")\n    {\n        if (string.IsNullOrWhiteSpace(customer))\n            throw new ArgumentException(\"Customer is required\");\n        if (string.IsNullOrWhiteSpace(channel))\n            throw new ArgumentException(\"Channel is required\");\n\n        Id = id;\n        Customer = customer;\n        Issue = issue;\n        Channel = channel;\n        Priority = priority;\n    }\n\n    public string Summary() => $\"#{Id} [{Priority}] {Customer} via {Channel}: {Issue}\";\n}",
            check: "run",
            expected: "#501 [Normal] Asha via Chat: Refund not received"
          }
        },
        quiz: {
          q: {
            en: "What happens when a constructor throws an exception?",
            hi: "जब constructor exception फेंकता है तो क्या होता है?",
            hg: "Jab constructor exception phenkta hai to kya hota hai?"
          },
          options: [
            {
              en: "The exception is ignored",
              hi: "Exception को ignore कर दिया जाता है",
              hg: "Exception ko ignore kar diya jaata hai"
            },
            {
              en: "The object is created with default values",
              hi: "Object default values के साथ बन जाता है",
              hg: "Object default values ke saath ban jaata hai"
            },
            {
              en: "The program does not compile",
              hi: "Program compile नहीं होता",
              hg: "Program compile nahi hota"
            },
            {
              en: "<code>new</code> fails and the caller gets no object",
              hi: "<code>new</code> fail होता है और caller को कोई object नहीं मिलता",
              hg: "<code>new</code> fail hota hai aur caller ko koi object nahi milta"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>The exception leaves <code>new</code> before the reference is handed back, so nobody holds an invalid ticket. That is why input checks belong in the constructor.</p>",
            hi: "<p>Reference वापस मिलने से पहले ही exception <code>new</code> से बाहर निकल जाता है, इसलिए किसी के पास ग़लत ticket नहीं होता। इसीलिए input की जाँच constructor में होनी चाहिए।</p>",
            hg: "<p>Reference wapas milne se pehle hi exception <code>new</code> se bahar nikal jaata hai, isliye kisi ke paas galat ticket nahi hota. Isiliye input ki jaanch constructor mein honi chahiye.</p>"
          }
        },
        recap: {
          en: "<ul><li>Constructor = runs on <code>new</code>, same name as the class, no return type.</li><li>Ask for the required values; validate them; set the starting state.</li><li>Optional parameters have defaults and come last.</li></ul>",
          hi: "<ul><li>Constructor = <code>new</code> पर चलता है, class जैसा नाम, कोई return type नहीं।</li><li>ज़रूरी values माँगो, उन्हें check करो, शुरुआती हालत set करो।</li><li>Optional parameters की default value होती है और वे आख़िर में आते हैं।</li></ul>",
          hg: "<ul><li>Constructor = <code>new</code> par chalta hai, class jaisa naam, koi return type nahi.</li><li>Zaroori values maango, unhe check karo, shuruaati haalat set karo.</li><li>Optional parameters ki default value hoti hai aur woh aakhir mein aate hain.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Every ticket starts valid",
            hi: "हर ticket सही हालत में शुरू होता है",
            hg: "Har ticket sahi haalat mein shuru hota hai"
          },
          src: "var t1 = new SupportTicket(501, \"Asha\", \"Refund not received\");\nvar t2 = new SupportTicket(502, \"Ravi\", \"SIM not active\", priority: \"High\");\nConsole.WriteLine(t1.Summary());\nConsole.WriteLine(t2.Summary());\n\ntry\n{\n    _ = new SupportTicket(503, \"\", \"No customer name\");\n}\ncatch (ArgumentException ex)\n{\n    Console.WriteLine($\"Rejected: {ex.Message}\");\n}\n\npublic class SupportTicket\n{\n    public int Id { get; }\n    public string Customer { get; }\n    public string Issue { get; }\n    public string Priority { get; }\n    public string Status { get; }\n\n    public SupportTicket(int id, string customer, string issue, string priority = \"Normal\")\n    {\n        if (string.IsNullOrWhiteSpace(customer))\n            throw new ArgumentException(\"Customer is required\");\n\n        Id = id;\n        Customer = customer;\n        Issue = issue;\n        Priority = priority;\n        Status = \"Open\";\n    }\n\n    public string Summary() => $\"#{Id} [{Priority}] {Customer}: {Issue} - {Status}\";\n}",
          check: "run",
          expected: "#501 [Normal] Asha: Refund not received - Open\n#502 [High] Ravi: SIM not active - Open\nRejected: Customer is required"
        }
      ]
    },
    {
      id: "encapsulation",
      depth: "short",
      title: {
        en: "Encapsulation",
        hi: "Encapsulation (data को बंद रखना)",
        hg: "Encapsulation"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 2–4 already used <code>private</code> fields and <code>private set</code>. Encapsulation is the name of that idea applied to the whole object: a ticket's status may change only through methods that follow the rules.",
          hi: "पाठ 2–4 में <code>private</code> fields और <code>private set</code> पहले ही इस्तेमाल हुए। पूरे object पर यही सोच लागू करने का नाम encapsulation है: ticket का status सिर्फ़ उन methods से बदले जो rules मानते हैं।",
          hg: "Lesson 2–4 mein <code>private</code> fields aur <code>private set</code> pehle hi use hue. Poore object par yahi soch laagu karne ka naam encapsulation hai: ticket ka status sirf un methods se badle jo rules maante hain."
        },
        what: {
          en: "<p><b>Encapsulation</b> means keeping an object's data and the rules for changing it together, and hiding the data so outside code cannot skip the rules. Outside code asks the object to do something; it does not edit the data directly.</p>",
          hi: "<p><b>Encapsulation</b> का मतलब है object के data और उसे बदलने के rules को एक साथ रखना, और data को छुपाना ताकि बाहर का code rules को skip न कर सके। बाहर का code object से काम करने को कहता है; data को सीधे नहीं बदलता।</p>",
          hg: "<p><b>Encapsulation</b> ka matlab hai object ke data aur use badalne ke rules ko ek saath rakhna, aur data ko chhupaana taaki bahar ka code rules ko skip na kar sake. Bahar ka code object se kaam karne ko kehta hai; data ko seedhe nahi badalta.</p>"
        },
        why: {
          en: "<p>A real bug: a report screen sets <code>Status = \"Closed\"</code> on a ticket nobody worked on, and the SLA dashboard counts it as resolved. With a private setter that line does not even compile; closing must go through <code>TryClose</code>, which checks the rule.</p>",
          hi: "<p>असली bug: एक report screen ने ऐसे ticket पर <code>Status = \"Closed\"</code> लिख दिया जिस पर किसी ने काम ही नहीं किया, और SLA dashboard ने उसे resolved गिन लिया। Private setter हो तो वह line compile ही नहीं होगी; close करने के लिए <code>TryClose</code> से जाना पड़ेगा, जो rule check करता है।</p>",
          hg: "<p>Asli bug: ek report screen ne aise ticket par <code>Status = \"Closed\"</code> likh diya jis par kisi ne kaam hi nahi kiya, aur SLA dashboard ne use resolved gin liya. Private setter ho to woh line compile hi nahi hogi; close karne ke liye <code>TryClose</code> se jaana padega, jo rule check karta hai.</p>"
        },
        analogy: {
          en: "<p>An ATM: you cannot open the cash box and take notes. You use the buttons (methods), and the machine checks your PIN and balance first. The cash is hidden; the rules are built in.</p>",
          hi: "<p>ATM: आप cash box खोलकर नोट नहीं निकाल सकते। आप बटन (methods) इस्तेमाल करते हो, और machine पहले PIN और balance check करती है। पैसा छुपा है; rules अंदर ही बने हैं।</p>",
          hg: "<p>ATM: aap cash box kholkar note nahi nikaal sakte. Aap button (methods) use karte ho, aur machine pehle PIN aur balance check karti hai. Paisa chhupa hai; rules andar hi bane hain.</p>"
        },
        lines: [
          {
            code: "public string Status { get; private set; } = \"Open\";",
            note: {
              en: "Everyone can <b>read</b> the status; only the ticket's own methods can <b>change</b> it.",
              hi: "Status को हर कोई <b>पढ़</b> सकता है; <b>बदल</b> सिर्फ़ ticket के अपने methods सकते हैं।",
              hg: "Status ko har koi <b>padh</b> sakta hai; <b>badal</b> sirf ticket ke apne methods sakte hain."
            }
          },
          {
            code: "public string? Agent { get; private set; }",
            note: {
              en: "The <code>?</code> marks a <b>nullable</b> value: there is no agent until the ticket is assigned.",
              hi: "<code>?</code> बताता है कि value <b>nullable</b> है: ticket assign होने तक कोई agent नहीं होता।",
              hg: "<code>?</code> batata hai ki value <b>nullable</b> hai: ticket assign hone tak koi agent nahi hota."
            }
          },
          {
            code: "throw new InvalidOperationException(\"Ticket is already closed\");",
            note: {
              en: "The rule lives inside the method. <code>InvalidOperationException</code> means \"this action makes no sense in the current state\".",
              hi: "Rule method के अंदर ही है। <code>InvalidOperationException</code> का मतलब: \"मौजूदा हालत में यह काम ठीक नहीं है\"।",
              hg: "Rule method ke andar hi hai. <code>InvalidOperationException</code> ka matlab: \"maujooda haalat mein ye kaam theek nahi hai\"."
            }
          },
          {
            code: "if (Agent is null)",
            note: {
              en: "Business rule: only an assigned ticket can be closed.",
              hi: "Business rule: सिर्फ़ assign हुआ ticket ही close हो सकता है।",
              hg: "Business rule: sirf assign hua ticket hi close ho sakta hai."
            }
          },
          {
            code: "return false;",
            note: {
              en: "The <b>Try pattern</b>: when failure is normal and expected, return <code>false</code> instead of throwing.",
              hi: "<b>Try pattern</b>: जब fail होना आम और अपेक्षित हो, तो exception की जगह <code>false</code> लौटाओ।",
              hg: "<b>Try pattern</b>: jab fail hona aam aur expected ho, to exception ki jagah <code>false</code> lautaao."
            }
          },
          {
            code: "Console.WriteLine(t.TryClose(\"Refund done\"));",
            note: {
              en: "The first call prints <code>False</code>: no agent yet, so the rule refuses. After <code>AssignTo</code>, the same call prints <code>True</code>.",
              hi: "पहली call <code>False</code> print करती है: अभी कोई agent नहीं, इसलिए rule मना करता है। <code>AssignTo</code> के बाद वही call <code>True</code> print करती है।",
              hg: "Pehli call <code>False</code> print karti hai: abhi koi agent nahi, isliye rule mana karta hai. <code>AssignTo</code> ke baad wahi call <code>True</code> print karti hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Public setters on everything: then any code can put the object into a wrong state.</li><li>A getter and setter for every field is not encapsulation; it only hides the field name.</li><li>Exposing a <code>List&lt;T&gt;</code> property, so callers can <code>Add</code> items and skip the rules.</li></ul>",
          hi: "<ul><li>हर चीज़ पर public setter: तब कोई भी code object को ग़लत हालत में डाल सकता है।</li><li>हर field के लिए getter और setter बना देना encapsulation नहीं है; इससे सिर्फ़ field का नाम छुपता है।</li><li><code>List&lt;T&gt;</code> property खुली छोड़ देना, जिससे caller <code>Add</code> करके rules को skip कर दे।</li></ul>",
          hg: "<ul><li>Har cheez par public setter: tab koi bhi code object ko galat haalat mein daal sakta hai.</li><li>Har field ke liye getter aur setter bana dena encapsulation nahi hai; isse sirf field ka naam chhupta hai.</li><li><code>List&lt;T&gt;</code> property khuli chhod dena, jisse caller <code>Add</code> karke rules ko skip kar de.</li></ul>"
        },
        whenToUse: {
          en: "<p>Always, for any value that has rules: a status flow, a balance, a limit. Make the setter private and add a method named after the business action (<code>AssignTo</code>, <code>TryClose</code>).</p>",
          hi: "<p>हमेशा — हर उस value के लिए जिस पर rules हों: status का क्रम, balance, limit। Setter को private करो और business काम के नाम पर method बनाओ (<code>AssignTo</code>, <code>TryClose</code>)।</p>",
          hg: "<p>Hamesha — har us value ke liye jis par rules hon: status ka kram, balance, limit. Setter ko private karo aur business kaam ke naam par method banao (<code>AssignTo</code>, <code>TryClose</code>).</p>"
        },
        exercise: {
          task: {
            en: "<p>Add <code>bool TryReopen()</code>. It works only when the status is <code>\"Closed\"</code>: it sets the status back to <code>\"Assigned\"</code> and clears <code>Resolution</code>. Print the result for an open ticket and then for a closed one.</p>",
            hi: "<p><code>bool TryReopen()</code> जोड़ो। यह सिर्फ़ तब काम करे जब status <code>\"Closed\"</code> हो: status को वापस <code>\"Assigned\"</code> करे और <code>Resolution</code> को ख़ाली (null) करे। पहले open ticket और फिर closed ticket के लिए नतीजा print करो।</p>",
            hg: "<p><code>bool TryReopen()</code> jodo. Ye sirf tab kaam kare jab status <code>\"Closed\"</code> ho: status ko wapas <code>\"Assigned\"</code> kare aur <code>Resolution</code> ko khaali (null) kare. Pehle open ticket aur phir closed ticket ke liye nateeja print karo.</p>"
          },
          hint: {
            en: "<p>Same shape as <code>TryClose</code>: check the rule first and <code>return false</code> early.</p>",
            hi: "<p><code>TryClose</code> जैसा ही ढाँचा: पहले rule check करो और जल्दी <code>return false</code> करो।</p>",
            hg: "<p><code>TryClose</code> jaisa hi dhaancha: pehle rule check karo aur jaldi <code>return false</code> karo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a second rule-checking method",
              hi: "हल: rule check करने वाला दूसरा method",
              hg: "Solution: rule check karne wala doosra method"
            },
            src: "var t = new SupportTicket(501, \"Asha\");\nConsole.WriteLine(t.TryReopen());\nt.AssignTo(\"Meena\");\nt.TryClose(\"Refund done\");\nConsole.WriteLine(t.TryReopen());\nConsole.WriteLine($\"{t.Status}, resolution: {t.Resolution ?? \"none\"}\");\n\npublic class SupportTicket\n{\n    public int Id { get; }\n    public string Customer { get; }\n    public string Status { get; private set; } = \"Open\";\n    public string? Agent { get; private set; }\n    public string? Resolution { get; private set; }\n\n    public SupportTicket(int id, string customer)\n    {\n        Id = id;\n        Customer = customer;\n    }\n\n    public void AssignTo(string agent)\n    {\n        Agent = agent;\n        Status = \"Assigned\";\n    }\n\n    public bool TryClose(string resolution)\n    {\n        if (Agent is null) return false;\n        Status = \"Closed\";\n        Resolution = resolution;\n        return true;\n    }\n\n    public bool TryReopen()\n    {\n        if (Status != \"Closed\") return false;\n        Status = \"Assigned\";\n        Resolution = null;\n        return true;\n    }\n}",
            check: "run",
            expected: "False\nTrue\nAssigned, resolution: none"
          }
        },
        quiz: {
          q: {
            en: "Why does <code>Status</code> have a <code>private set</code> instead of a public one?",
            hi: "<code>Status</code> में public की जगह <code>private set</code> क्यों है?",
            hg: "<code>Status</code> mein public ki jagah <code>private set</code> kyun hai?"
          },
          options: [
            {
              en: "To make the program faster",
              hi: "Program को तेज़ बनाने के लिए",
              hg: "Program ko tez banane ke liye"
            },
            {
              en: "So only the ticket's methods can change it, after checking the rules",
              hi: "ताकि rules check करने के बाद सिर्फ़ ticket के methods ही इसे बदल सकें",
              hg: "Taaki rules check karne ke baad sirf ticket ke methods hi ise badal sakein"
            },
            {
              en: "So that it cannot be read from outside",
              hi: "ताकि बाहर से इसे पढ़ा न जा सके",
              hg: "Taaki bahar se ise padha na ja sake"
            },
            {
              en: "Because properties cannot have public setters",
              hi: "क्योंकि properties में public setter हो ही नहीं सकता",
              hg: "Kyunki properties mein public setter ho hi nahi sakta"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>Reading stays public (<code>get</code>). Writing is private, so every change goes through <code>AssignTo</code> or <code>TryClose</code>, where the rules live. Speed has nothing to do with it.</p>",
            hi: "<p>पढ़ना public ही रहता है (<code>get</code>)। लिखना private है, इसलिए हर बदलाव <code>AssignTo</code> या <code>TryClose</code> से होकर जाता है, जहाँ rules रहते हैं। Speed से इसका कोई लेना-देना नहीं।</p>",
            hg: "<p>Padhna public hi rehta hai (<code>get</code>). Likhna private hai, isliye har badlaav <code>AssignTo</code> ya <code>TryClose</code> se hokar jaata hai, jahan rules rehte hain. Speed se iska koi lena-dena nahi.</p>"
          }
        },
        recap: {
          en: "<ul><li>Hide the data (<code>private</code>, <code>private set</code>).</li><li>Expose actions, not setters: <code>AssignTo</code>, <code>TryClose</code>.</li><li>The rules live in one place, so the object can never be in a wrong state.</li></ul>",
          hi: "<ul><li>Data छुपाओ (<code>private</code>, <code>private set</code>)।</li><li>Setters नहीं, काम (actions) खोलो: <code>AssignTo</code>, <code>TryClose</code>।</li><li>Rules एक ही जगह रहते हैं, इसलिए object कभी ग़लत हालत में नहीं जाता।</li></ul>",
          hg: "<ul><li>Data chhupao (<code>private</code>, <code>private set</code>).</li><li>Setters nahi, kaam (actions) kholo: <code>AssignTo</code>, <code>TryClose</code>.</li><li>Rules ek hi jagah rehte hain, isliye object kabhi galat haalat mein nahi jaata.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Status changes only through rule-checking methods",
            hi: "Status सिर्फ़ rule check करने वाले methods से बदलता है",
            hg: "Status sirf rule check karne wale methods se badalta hai"
          },
          src: "var t = new SupportTicket(501, \"Asha\");\nConsole.WriteLine(t.Status);\n\nConsole.WriteLine(t.TryClose(\"Refund done\"));\nt.AssignTo(\"Meena\");\nConsole.WriteLine(t.TryClose(\"Refund done\"));\nConsole.WriteLine($\"{t.Status} by {t.Agent}: {t.Resolution}\");\n// t.Status = \"Closed\";   // error CS0272: the set accessor is private\n\npublic class SupportTicket\n{\n    public int Id { get; }\n    public string Customer { get; }\n    public string Status { get; private set; } = \"Open\";\n    public string? Agent { get; private set; }\n    public string? Resolution { get; private set; }\n\n    public SupportTicket(int id, string customer)\n    {\n        Id = id;\n        Customer = customer;\n    }\n\n    public void AssignTo(string agent)\n    {\n        if (Status == \"Closed\")\n            throw new InvalidOperationException(\"Ticket is already closed\");\n        Agent = agent;\n        Status = \"Assigned\";\n    }\n\n    public bool TryClose(string resolution)\n    {\n        if (Agent is null)\n            return false;\n\n        Status = \"Closed\";\n        Resolution = resolution;\n        return true;\n    }\n}",
          check: "run",
          expected: "Open\nFalse\nTrue\nClosed by Meena: Refund done"
        }
      ]
    },
    {
      id: "abstraction",
      depth: "short",
      title: {
        en: "Abstraction with interfaces",
        hi: "Interfaces से abstraction",
        hg: "Interfaces se abstraction"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 5 hid the data inside one class. Abstraction hides a whole <i>implementation</i> behind a contract: the ticket service knows it can send a notification, not how SMS works.",
          hi: "पाठ 5 में एक class के अंदर data छुपाया। Abstraction एक पूरी <i>implementation</i> को एक contract (समझौते) के पीछे छुपाता है: ticket service को सिर्फ़ इतना पता है कि notification भेजी जा सकती है, SMS कैसे जाता है यह नहीं।",
          hg: "Lesson 5 mein ek class ke andar data chhupaaya. Abstraction ek poori <i>implementation</i> ko ek contract (samjhaute) ke peeche chhupaata hai: ticket service ko sirf itna pata hai ki notification bheji ja sakti hai, SMS kaise jaata hai ye nahi."
        },
        what: {
          en: "<p><b>Abstraction</b> means showing <i>what</i> something does and hiding <i>how</i> it does it. In C#, the main tool is an <b>interface</b>: a contract that lists methods without bodies. Every class that implements the interface must provide those methods.</p>",
          hi: "<p><b>Abstraction</b> का मतलब है यह दिखाना कि कोई चीज़ <i>क्या</i> करती है, और यह छुपाना कि <i>कैसे</i> करती है। C# में इसका मुख्य औज़ार <b>interface</b> है: एक contract जिसमें methods के नाम होते हैं पर body नहीं। जो भी class वह interface implement करे, उसे वे methods देने ही होंगे।</p>",
          hg: "<p><b>Abstraction</b> ka matlab hai ye dikhana ki koi cheez <i>kya</i> karti hai, aur ye chhupaana ki <i>kaise</i> karti hai. C# mein iska mukhya auzaar <b>interface</b> hai: ek contract jismein methods ke naam hote hain par body nahi. Jo bhi class woh interface implement kare, use woh methods dene hi honge.</p>"
        },
        why: {
          en: "<p>Today the CRM sends SMS; next quarter the business adds WhatsApp. If <code>TicketService</code> calls an SMS class directly, you must edit and retest it. If it depends on <code>INotifier</code>, you add one new class and leave the service alone. Tests can also pass a fake notifier.</p>",
          hi: "<p>आज CRM SMS भेजता है; अगली तिमाही business WhatsApp जोड़ देगा। अगर <code>TicketService</code> सीधे SMS class को call करता है, तो उसे बदलकर दोबारा test करना पड़ेगा। अगर वह <code>INotifier</code> पर निर्भर है, तो बस एक नई class जोड़ो और service को छुओ भी मत। Tests में नकली (fake) notifier भी दे सकते हो।</p>",
          hg: "<p>Aaj CRM SMS bhejta hai; agli timaahi business WhatsApp jod dega. Agar <code>TicketService</code> seedhe SMS class ko call karta hai, to use badalkar dobaara test karna padega. Agar woh <code>INotifier</code> par nirbhar hai, to bas ek nayi class jodo aur service ko chhuo bhi mat. Tests mein nakli (fake) notifier bhi de sakte ho.</p>"
        },
        analogy: {
          en: "<p>A wall socket: any appliance with the right plug works — fan, charger, iron. The socket does not care what is plugged in, and the appliance does not care how the power station works. The plug shape is the interface.</p>",
          hi: "<p>दीवार का socket: सही plug वाला कोई भी उपकरण चल जाता है — पंखा, charger, प्रेस। Socket को फ़र्क़ नहीं पड़ता कि क्या लगा है, और उपकरण को फ़र्क़ नहीं पड़ता कि बिजलीघर कैसे काम करता है। Plug का आकार ही interface है।</p>",
          hg: "<p>Deewar ka socket: sahi plug wala koi bhi upkaran chal jaata hai — pankha, charger, press. Socket ko farq nahi padta ki kya laga hai, aur upkaran ko farq nahi padta ki bijlighar kaise kaam karta hai. Plug ka aakaar hi interface hai.</p>"
        },
        focus: {
          caption: {
            en: "The contract: what, not how",
            hi: "Contract: क्या, कैसे नहीं",
            hg: "Contract: kya, kaise nahi"
          },
          src: "public interface INotifier\n{\n    void Send(string to, string message);\n}",
          check: "none"
        },
        lines: [
          {
            code: "void Send(string to, string message);",
            note: {
              en: "An interface member has no body and no access modifier; it is public automatically.",
              hi: "Interface के member की कोई body नहीं होती और कोई access modifier नहीं लगता; वह अपने-आप public होता है।",
              hg: "Interface ke member ki koi body nahi hoti aur koi access modifier nahi lagta; woh apne-aap public hota hai."
            }
          },
          {
            code: "public class SmsNotifier : INotifier",
            note: {
              en: "Here <code>:</code> means \"implements\". The compiler now insists that <code>SmsNotifier</code> has a public <code>Send</code>.",
              hi: "यहाँ <code>:</code> का मतलब है \"implement करता है\"। अब compiler ज़ोर देगा कि <code>SmsNotifier</code> में public <code>Send</code> हो।",
              hg: "Yahan <code>:</code> ka matlab hai \"implement karta hai\". Ab compiler zor dega ki <code>SmsNotifier</code> mein public <code>Send</code> ho."
            }
          },
          {
            code: "private readonly INotifier _notifier;",
            note: {
              en: "The service stores the <b>contract</b>, not the concrete SMS class.",
              hi: "Service <b>contract</b> को रखती है, असली SMS class को नहीं।",
              hg: "Service <b>contract</b> ko rakhti hai, asli SMS class ko nahi."
            }
          },
          {
            code: "public TicketService(INotifier notifier)",
            note: {
              en: "The caller decides which implementation to pass in. In ASP.NET Core, the dependency injection (DI) container does this for you.",
              hi: "कौन-सी implementation देनी है, यह caller तय करता है। ASP.NET Core में यह काम dependency injection (DI) container आपके लिए करता है।",
              hg: "Kaunsi implementation deni hai, ye caller tay karta hai. ASP.NET Core mein ye kaam dependency injection (DI) container aapke liye karta hai."
            }
          },
          {
            code: "_notifier.Send(phone, $\"Ticket #{ticketId} is resolved\");",
            note: {
              en: "The service calls the contract. It neither knows nor cares that SMS is behind it.",
              hi: "Service contract को call करती है। उसे न पता है, न फ़र्क़ पड़ता है कि पीछे SMS है।",
              hg: "Service contract ko call karti hai. Use na pata hai, na farq padta hai ki peeche SMS hai."
            }
          },
          {
            code: "INotifier notifier = new SmsNotifier();",
            note: {
              en: "The only line that picks the real implementation. Swap it, and nothing else changes.",
              hi: "सिर्फ़ यही line असली implementation चुनती है। इसे बदलो, और कुछ भी नहीं बदलना पड़ेगा।",
              hg: "Sirf yahi line asli implementation chunti hai. Ise badlo, aur kuch bhi nahi badalna padega."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>An interface for every class \"just because\": add one where you expect a second implementation or need a fake in tests.</li><li>A fat interface with fifteen methods: split it (Day 8, Interface Segregation).</li><li>Leaking details into the contract, such as <code>SmsGatewayUrl</code> in <code>INotifier</code>.</li></ul>",
          hi: "<ul><li>हर class के लिए \"बस यूँ ही\" interface: interface वहाँ बनाओ जहाँ दूसरी implementation आ सकती है या tests में fake चाहिए।</li><li>पंद्रह methods वाला भारी interface: उसे तोड़ो (Day 8, Interface Segregation)।</li><li>Contract में अंदर की बातें डाल देना, जैसे <code>INotifier</code> में <code>SmsGatewayUrl</code>।</li></ul>",
          hg: "<ul><li>Har class ke liye \"bas yun hi\" interface: interface wahan banao jahan doosri implementation aa sakti hai ya tests mein fake chahiye.</li><li>Pandrah methods wala bhaari interface: use todo (Day 8, Interface Segregation).</li><li>Contract mein andar ki baatein daal dena, jaise <code>INotifier</code> mein <code>SmsGatewayUrl</code>.</li></ul>"
        },
        whenToUse: {
          en: "<p>At boundaries that may change or that you want to fake in tests: notifications, payment gateways, storage, external APIs.</p>",
          hi: "<p>उन सीमाओं (boundaries) पर जो बदल सकती हैं या जिन्हें tests में fake करना हो: notifications, payment gateways, storage, बाहरी APIs।</p>",
          hg: "<p>Un boundaries par jo badal sakti hain ya jinhe tests mein fake karna ho: notifications, payment gateways, storage, bahari APIs.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write an <code>EmailNotifier</code> that prints <code>Email to {to}: {message}</code> and pass it to <code>TicketService</code>. Do not change <code>TicketService</code>.</p>",
            hi: "<p>एक <code>EmailNotifier</code> लिखो जो <code>Email to {to}: {message}</code> print करे, और उसे <code>TicketService</code> को दो। <code>TicketService</code> में कोई बदलाव मत करो।</p>",
            hg: "<p>Ek <code>EmailNotifier</code> likho jo <code>Email to {to}: {message}</code> print kare, aur use <code>TicketService</code> ko do. <code>TicketService</code> mein koi badlaav mat karo.</p>"
          },
          hint: {
            en: "<p>Copy <code>SmsNotifier</code>, rename it and change the text. Only the first line of the program changes.</p>",
            hi: "<p><code>SmsNotifier</code> को copy करो, नाम बदलो और text बदलो। Program की सिर्फ़ पहली line बदलेगी।</p>",
            hg: "<p><code>SmsNotifier</code> ko copy karo, naam badlo aur text badlo. Program ki sirf pehli line badlegi.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a new implementation, same service",
              hi: "हल: नई implementation, वही service",
              hg: "Solution: nayi implementation, wahi service"
            },
            src: "INotifier notifier = new EmailNotifier();\nvar service = new TicketService(notifier);\nservice.Resolve(501, \"asha@mail.com\");\n\npublic interface INotifier\n{\n    void Send(string to, string message);\n}\n\npublic class EmailNotifier : INotifier\n{\n    public void Send(string to, string message)\n    {\n        Console.WriteLine($\"Email to {to}: {message}\");\n    }\n}\n\npublic class TicketService\n{\n    private readonly INotifier _notifier;\n\n    public TicketService(INotifier notifier)\n    {\n        _notifier = notifier;\n    }\n\n    public void Resolve(int ticketId, string contact)\n    {\n        _notifier.Send(contact, $\"Ticket #{ticketId} is resolved\");\n    }\n}",
            check: "run",
            expected: "Email to asha@mail.com: Ticket #501 is resolved"
          }
        },
        quiz: {
          q: {
            en: "<code>TicketService</code> depends on <code>INotifier</code>. You add <code>WhatsAppNotifier : INotifier</code>. What must change inside <code>TicketService</code>?",
            hi: "<code>TicketService</code>, <code>INotifier</code> पर निर्भर है। आप <code>WhatsAppNotifier : INotifier</code> जोड़ते हो। <code>TicketService</code> के अंदर क्या बदलना होगा?",
            hg: "<code>TicketService</code>, <code>INotifier</code> par nirbhar hai. Aap <code>WhatsAppNotifier : INotifier</code> jodte ho. <code>TicketService</code> ke andar kya badalna hoga?"
          },
          options: [
            {
              en: "Change the field type to <code>WhatsAppNotifier</code>",
              hi: "Field का type बदलकर <code>WhatsAppNotifier</code> करना",
              hg: "Field ka type badalkar <code>WhatsAppNotifier</code> karna"
            },
            {
              en: "Add an <code>if</code> for WhatsApp",
              hi: "WhatsApp के लिए एक <code>if</code> जोड़ना",
              hg: "WhatsApp ke liye ek <code>if</code> jodna"
            },
            {
              en: "Nothing",
              hi: "कुछ नहीं",
              hg: "Kuch nahi"
            },
            {
              en: "Make <code>Resolve</code> virtual",
              hi: "<code>Resolve</code> को virtual बनाना",
              hg: "<code>Resolve</code> ko virtual banana"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>The service only uses the contract. Only the code that creates the service (or the DI registration) chooses the new class.</p>",
            hi: "<p>Service सिर्फ़ contract इस्तेमाल करती है। नई class चुनने का काम सिर्फ़ वह code करता है जो service बनाता है (या DI registration)।</p>",
            hg: "<p>Service sirf contract use karti hai. Nayi class chunne ka kaam sirf woh code karta hai jo service banata hai (ya DI registration).</p>"
          }
        },
        recap: {
          en: "<ul><li>Abstraction = show what, hide how.</li><li>Interface = a contract of methods without bodies; classes implement it.</li><li>Depend on the interface; choose the implementation in one place.</li></ul>",
          hi: "<ul><li>Abstraction = क्या दिखाओ, कैसे छुपाओ।</li><li>Interface = बिना body वाले methods का contract; classes उसे implement करती हैं।</li><li>Interface पर निर्भर रहो; implementation एक ही जगह चुनो।</li></ul>",
          hg: "<ul><li>Abstraction = kya dikhao, kaise chhupao.</li><li>Interface = bina body wale methods ka contract; classes use implement karti hain.</li><li>Interface par nirbhar raho; implementation ek hi jagah chuno.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "TicketService depends on a contract, not on SMS",
            hi: "TicketService contract पर निर्भर है, SMS पर नहीं",
            hg: "TicketService contract par nirbhar hai, SMS par nahi"
          },
          src: "INotifier notifier = new SmsNotifier();\nvar service = new TicketService(notifier);\nservice.Resolve(501, \"9876543210\");\n\npublic interface INotifier\n{\n    void Send(string to, string message);\n}\n\npublic class SmsNotifier : INotifier\n{\n    public void Send(string to, string message)\n    {\n        Console.WriteLine($\"SMS to {to}: {message}\");\n    }\n}\n\npublic class TicketService\n{\n    private readonly INotifier _notifier;\n\n    public TicketService(INotifier notifier)\n    {\n        _notifier = notifier;\n    }\n\n    public void Resolve(int ticketId, string phone)\n    {\n        // ...update the ticket in the database here...\n        _notifier.Send(phone, $\"Ticket #{ticketId} is resolved\");\n    }\n}",
          check: "run",
          expected: "SMS to 9876543210: Ticket #501 is resolved"
        }
      ]
    },
    {
      id: "inheritance",
      depth: "short",
      title: {
        en: "Inheritance",
        hi: "Inheritance (विरासत)",
        hg: "Inheritance"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 1–6 built each class on its own. Inheritance lets a new class start from an existing one: a <code>PremiumCustomer</code> is a <code>Customer</code> with extra data, so it reuses everything <code>Customer</code> already has.",
          hi: "पाठ 1–6 में हर class अकेले बनी। Inheritance से नई class किसी मौजूदा class से शुरू हो सकती है: <code>PremiumCustomer</code> भी एक <code>Customer</code> ही है, बस कुछ extra data के साथ, इसलिए वह <code>Customer</code> की सारी चीज़ें दोबारा इस्तेमाल करता है।",
          hg: "Lesson 1–6 mein har class akele bani. Inheritance se nayi class kisi maujooda class se shuru ho sakti hai: <code>PremiumCustomer</code> bhi ek <code>Customer</code> hi hai, bas kuch extra data ke saath, isliye woh <code>Customer</code> ki saari cheezein dobaara use karta hai."
        },
        what: {
          en: "<p><b>Inheritance</b> lets a <b>derived class</b> (child) reuse and extend a <b>base class</b> (parent). You write <code>class PremiumCustomer : Customer</code>. The child gets the parent's members and adds its own. A C# class can have only one base class.</p>",
          hi: "<p><b>Inheritance</b> से एक <b>derived class</b> (child) किसी <b>base class</b> (parent) को दोबारा इस्तेमाल करके आगे बढ़ा सकती है। लिखते हैं <code>class PremiumCustomer : Customer</code>। Child को parent के members मिलते हैं और वह अपने नए जोड़ता है। C# में एक class की base class सिर्फ़ एक हो सकती है।</p>",
          hg: "<p><b>Inheritance</b> se ek <b>derived class</b> (child) kisi <b>base class</b> (parent) ko dobaara use karke aage badha sakti hai. Likhte hain <code>class PremiumCustomer : Customer</code>. Child ko parent ke members milte hain aur woh apne naye jodta hai. C# mein ek class ki base class sirf ek ho sakti hai.</p>"
        },
        why: {
          en: "<p>Premium customers need everything a normal customer has — name, phone, <code>Describe()</code> — plus an account manager. Copy-pasting <code>Customer</code> would mean fixing every bug twice.</p>",
          hi: "<p>Premium customer को वह सब चाहिए जो आम customer के पास है — नाम, phone, <code>Describe()</code> — और साथ में एक account manager। <code>Customer</code> को copy-paste करने का मतलब होगा हर bug दो बार ठीक करना।</p>",
          hg: "<p>Premium customer ko woh sab chahiye jo aam customer ke paas hai — naam, phone, <code>Describe()</code> — aur saath mein ek account manager. <code>Customer</code> ko copy-paste karne ka matlab hoga har bug do baar theek karna.</p>"
        },
        analogy: {
          en: "<p>A premium credit card is still a credit card: it swipes, has a limit and a monthly bill like any card. It only adds extras such as lounge access. Anywhere a normal card is accepted, the premium card works too — that is the \"is-a\" test.</p>",
          hi: "<p>Premium credit card भी आख़िर credit card ही है: वह swipe होता है, उसकी limit और महीने का bill होता है, किसी भी card की तरह। बस lounge access जैसी extra सुविधाएँ जुड़ती हैं। जहाँ आम card चलता है, वहाँ premium card भी चलता है — यही \"is-a\" (यह भी वही है) की जाँच है।</p>",
          hg: "<p>Premium credit card bhi aakhir credit card hi hai: woh swipe hota hai, uski limit aur mahine ka bill hota hai, kisi bhi card ki tarah. Bas lounge access jaisi extra suvidhaayein judti hain. Jahan aam card chalta hai, wahan premium card bhi chalta hai — yahi \"is-a\" (ye bhi wahi hai) ki jaanch hai.</p>"
        },
        lines: [
          {
            code: "public class PremiumCustomer : Customer",
            note: {
              en: "Here <code>:</code> means \"inherits from\". <code>PremiumCustomer</code> now has <code>Name</code>, <code>Phone</code> and <code>Describe()</code> without writing them again.",
              hi: "यहाँ <code>:</code> का मतलब है \"से inherit करता है\"। अब <code>PremiumCustomer</code> के पास <code>Name</code>, <code>Phone</code> और <code>Describe()</code> बिना दोबारा लिखे हैं।",
              hg: "Yahan <code>:</code> ka matlab hai \"se inherit karta hai\". Ab <code>PremiumCustomer</code> ke paas <code>Name</code>, <code>Phone</code> aur <code>Describe()</code> bina dobaara likhe hain."
            }
          },
          {
            code: ": base(name, phone)",
            note: {
              en: "Calls the parent's constructor first, so <code>Name</code> and <code>Phone</code> are set by <code>Customer</code>'s own code.",
              hi: "पहले parent का constructor call करता है, ताकि <code>Name</code> और <code>Phone</code>, <code>Customer</code> के अपने code से set हों।",
              hg: "Pehle parent ka constructor call karta hai, taaki <code>Name</code> aur <code>Phone</code>, <code>Customer</code> ke apne code se set hon."
            }
          },
          {
            code: "public string AccountManager { get; }",
            note: {
              en: "A member only the child has. A normal <code>Customer</code> does not get it.",
              hi: "यह member सिर्फ़ child के पास है। आम <code>Customer</code> को यह नहीं मिलता।",
              hg: "Ye member sirf child ke paas hai. Aam <code>Customer</code> ko ye nahi milta."
            }
          },
          {
            code: "Console.WriteLine(premium.Describe());",
            note: {
              en: "<code>Describe()</code> was written once, in <code>Customer</code>, and works for the premium customer too.",
              hi: "<code>Describe()</code> सिर्फ़ एक बार <code>Customer</code> में लिखा गया, और premium customer के लिए भी काम करता है।",
              hg: "<code>Describe()</code> sirf ek baar <code>Customer</code> mein likha gaya, aur premium customer ke liye bhi kaam karta hai."
            }
          },
          {
            code: "Customer someone = premium;",
            note: {
              en: "\"Is-a\" in code: a derived object fits in a base-class variable. Through <code>someone</code> you can use only <code>Customer</code> members.",
              hi: "Code में \"is-a\": derived object, base class के variable में आ जाता है। <code>someone</code> से सिर्फ़ <code>Customer</code> के members इस्तेमाल कर सकते हो।",
              hg: "Code mein \"is-a\": derived object, base class ke variable mein aa jaata hai. <code>someone</code> se sirf <code>Customer</code> ke members use kar sakte ho."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Inheriting only to reuse code when the \"is-a\" sentence is false (<code>TicketService : Logger</code>). Use composition instead (Deep Dive).</li><li>Deep hierarchies of four or more levels: hard to read and fragile to change.</li><li>Forgetting <code>: base(...)</code> when the parent has no parameterless constructor: error CS7036.</li></ul>",
          hi: "<ul><li>सिर्फ़ code reuse के लिए inherit करना जबकि \"is-a\" वाक्य ग़लत हो (<code>TicketService : Logger</code>)। इसकी जगह composition लो (Deep Dive)।</li><li>चार या ज़्यादा स्तर (levels) की गहरी hierarchy: पढ़ने में मुश्किल और बदलने में नाज़ुक।</li><li>जब parent में बिना parameter वाला constructor न हो और <code>: base(...)</code> भूल जाओ: error CS7036।</li></ul>",
          hg: "<ul><li>Sirf code reuse ke liye inherit karna jabki \"is-a\" vaakya galat ho (<code>TicketService : Logger</code>). Iski jagah composition lo (Deep Dive).</li><li>Chaar ya zyada levels ki gehri hierarchy: padhne mein mushkil aur badalne mein naazuk.</li><li>Jab parent mein bina parameter wala constructor na ho aur <code>: base(...)</code> bhool jaao: error CS7036.</li></ul>"
        },
        whenToUse: {
          en: "<p>For a true, stable \"is-a\" relationship where the child can be used anywhere the parent is expected. When in doubt, prefer composition (see the Deep Dive).</p>",
          hi: "<p>सच्चे और स्थिर \"is-a\" रिश्ते के लिए, जहाँ parent की जगह child कहीं भी चल सके। शक हो तो composition चुनो (Deep Dive देखो)।</p>",
          hg: "<p>Sacche aur sthir \"is-a\" rishte ke liye, jahan parent ki jagah child kahin bhi chal sake. Shak ho to composition chuno (Deep Dive dekho).</p>"
        },
        exercise: {
          task: {
            en: "<p>Create <code>CorporateCustomer : Customer</code> with a <code>CompanyName</code> property. Create one for <code>\"Neha\"</code>, <code>\"9988776655\"</code>, <code>\"Tata Motors\"</code> and print <code>Describe()</code> and <code>Company: Tata Motors</code>.</p>",
            hi: "<p><code>CompanyName</code> property वाली <code>CorporateCustomer : Customer</code> बनाओ। <code>\"Neha\"</code>, <code>\"9988776655\"</code>, <code>\"Tata Motors\"</code> के साथ एक object बनाओ और <code>Describe()</code> तथा <code>Company: Tata Motors</code> print करो।</p>",
            hg: "<p><code>CompanyName</code> property wali <code>CorporateCustomer : Customer</code> banao. <code>\"Neha\"</code>, <code>\"9988776655\"</code>, <code>\"Tata Motors\"</code> ke saath ek object banao aur <code>Describe()</code> aur <code>Company: Tata Motors</code> print karo.</p>"
          },
          hint: {
            en: "<p>Copy <code>PremiumCustomer</code>, rename the extra property, and keep the <code>: base(name, phone)</code> call.</p>",
            hi: "<p><code>PremiumCustomer</code> को copy करो, extra property का नाम बदलो, और <code>: base(name, phone)</code> वाली call रहने दो।</p>",
            hg: "<p><code>PremiumCustomer</code> ko copy karo, extra property ka naam badlo, aur <code>: base(name, phone)</code> wali call rehne do.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a second derived class",
              hi: "हल: दूसरी derived class",
              hg: "Solution: doosri derived class"
            },
            src: "var corp = new CorporateCustomer(\"Neha\", \"9988776655\", \"Tata Motors\");\nConsole.WriteLine(corp.Describe());\nConsole.WriteLine($\"Company: {corp.CompanyName}\");\n\npublic class Customer\n{\n    public string Name { get; }\n    public string Phone { get; }\n\n    public Customer(string name, string phone)\n    {\n        Name = name;\n        Phone = phone;\n    }\n\n    public string Describe() => $\"{Name} ({Phone})\";\n}\n\npublic class CorporateCustomer : Customer\n{\n    public string CompanyName { get; }\n\n    public CorporateCustomer(string name, string phone, string companyName)\n        : base(name, phone)\n    {\n        CompanyName = companyName;\n    }\n}",
            check: "run",
            expected: "Neha (9988776655)\nCompany: Tata Motors"
          }
        },
        quiz: {
          q: {
            en: "Given <code>Customer c = new PremiumCustomer(\"Ravi\", \"9123456780\", \"Kiran\");</code>, which line compiles?",
            hi: "<code>Customer c = new PremiumCustomer(\"Ravi\", \"9123456780\", \"Kiran\");</code> के बाद कौन-सी line compile होगी?",
            hg: "<code>Customer c = new PremiumCustomer(\"Ravi\", \"9123456780\", \"Kiran\");</code> ke baad kaunsi line compile hogi?"
          },
          options: [
            {
              en: "<code>c.Describe()</code> only",
              hi: "सिर्फ़ <code>c.Describe()</code>",
              hg: "Sirf <code>c.Describe()</code>"
            },
            {
              en: "<code>c.AccountManager</code> only",
              hi: "सिर्फ़ <code>c.AccountManager</code>",
              hg: "Sirf <code>c.AccountManager</code>"
            },
            {
              en: "Both",
              hi: "दोनों",
              hg: "Dono"
            },
            {
              en: "Neither",
              hi: "कोई नहीं",
              hg: "Koi nahi"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>The variable's type is <code>Customer</code>, so the compiler allows only <code>Customer</code> members. The object is still premium; you would need a cast such as <code>((PremiumCustomer)c).AccountManager</code> to reach the extra member.</p>",
            hi: "<p>Variable का type <code>Customer</code> है, इसलिए compiler सिर्फ़ <code>Customer</code> के members इस्तेमाल करने देता है। Object अब भी premium ही है; extra member तक पहुँचने के लिए <code>((PremiumCustomer)c).AccountManager</code> जैसा cast चाहिए।</p>",
            hg: "<p>Variable ka type <code>Customer</code> hai, isliye compiler sirf <code>Customer</code> ke members use karne deta hai. Object ab bhi premium hi hai; extra member tak pahunchne ke liye <code>((PremiumCustomer)c).AccountManager</code> jaisa cast chahiye.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>Child : Parent</code> reuses and extends the parent.</li><li>Call the parent constructor with <code>: base(...)</code>.</li><li>Use it only when \"child is a parent\" is always true; one base class per class.</li></ul>",
          hi: "<ul><li><code>Child : Parent</code> parent को दोबारा इस्तेमाल करके आगे बढ़ाता है।</li><li>Parent का constructor <code>: base(...)</code> से call करो।</li><li>सिर्फ़ तब इस्तेमाल करो जब \"child भी parent ही है\" हमेशा सच हो; हर class की एक ही base class।</li></ul>",
          hg: "<ul><li><code>Child : Parent</code> parent ko dobaara use karke aage badhata hai.</li><li>Parent ka constructor <code>: base(...)</code> se call karo.</li><li>Sirf tab use karo jab \"child bhi parent hi hai\" hamesha sach ho; har class ki ek hi base class.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A premium customer is a customer",
            hi: "Premium customer भी एक customer है",
            hg: "Premium customer bhi ek customer hai"
          },
          src: "var normal = new Customer(\"Asha\", \"9876543210\");\nvar premium = new PremiumCustomer(\"Ravi\", \"9123456780\", \"Kiran\");\n\nConsole.WriteLine(normal.Describe());\nConsole.WriteLine(premium.Describe());\nConsole.WriteLine($\"Account manager: {premium.AccountManager}\");\n\nCustomer someone = premium;\nConsole.WriteLine(someone.Name);\n\npublic class Customer\n{\n    public string Name { get; }\n    public string Phone { get; }\n\n    public Customer(string name, string phone)\n    {\n        Name = name;\n        Phone = phone;\n    }\n\n    public string Describe() => $\"{Name} ({Phone})\";\n}\n\npublic class PremiumCustomer : Customer\n{\n    public string AccountManager { get; }\n\n    public PremiumCustomer(string name, string phone, string accountManager)\n        : base(name, phone)\n    {\n        AccountManager = accountManager;\n    }\n}",
          check: "run",
          expected: "Asha (9876543210)\nRavi (9123456780)\nAccount manager: Kiran\nRavi"
        }
      ]
    },
    {
      id: "polymorphism",
      depth: "short",
      title: {
        en: "Polymorphism",
        hi: "Polymorphism (एक call, कई रूप)",
        hg: "Polymorphism"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 7 reused code through inheritance, and lesson 6 hid implementations behind an interface. Polymorphism is what makes both pay off: one call, and each object answers in its own way.",
          hi: "पाठ 7 में inheritance से code दोबारा इस्तेमाल हुआ, और पाठ 6 में implementations interface के पीछे छुपीं। Polymorphism से दोनों का असली फ़ायदा मिलता है: call एक, और हर object अपने तरीक़े से जवाब देता है।",
          hg: "Lesson 7 mein inheritance se code dobaara use hua, aur lesson 6 mein implementations interface ke peeche chhupin. Polymorphism se dono ka asli faayda milta hai: call ek, aur har object apne tareeke se jawaab deta hai."
        },
        what: {
          en: "<p><b>Polymorphism</b> (\"many forms\") means the same method call behaves differently depending on the <b>actual object</b> at run time. C# gives it to you in two ways: a base class marks a method <code>virtual</code> and a child <code>override</code>s it, or several classes implement the same interface.</p>",
          hi: "<p><b>Polymorphism</b> (\"कई रूप\") का मतलब है कि एक ही method call, run time पर <b>असली object</b> के हिसाब से अलग-अलग काम करती है। C# में यह दो तरह से मिलता है: base class किसी method को <code>virtual</code> बनाती है और child उसे <code>override</code> करता है, या कई classes एक ही interface implement करती हैं।</p>",
          hg: "<p><b>Polymorphism</b> (\"kai roop\") ka matlab hai ki ek hi method call, run time par <b>asli object</b> ke hisaab se alag-alag kaam karti hai. C# mein ye do tarah se milta hai: base class kisi method ko <code>virtual</code> banaati hai aur child use <code>override</code> karta hai, ya kai classes ek hi interface implement karti hain.</p>"
        },
        why: {
          en: "<p>The SLA rule \"premium gets a reply in 4 hours, others in 24\" can live inside each customer type. The code that loops over customers needs no <code>if (c is PremiumCustomer)</code> checks, so adding a VIP tier means adding one class, not editing every loop.</p>",
          hi: "<p>SLA rule \"premium को 4 घंटे में जवाब, बाक़ी को 24 में\" हर customer type के अंदर ही रह सकता है। Customers पर loop चलाने वाले code को <code>if (c is PremiumCustomer)</code> जैसी जाँच की ज़रूरत नहीं, इसलिए VIP tier जोड़ने का मतलब है एक class जोड़ना, हर loop बदलना नहीं।</p>",
          hg: "<p>SLA rule \"premium ko 4 ghante mein jawaab, baaki ko 24 mein\" har customer type ke andar hi reh sakta hai. Customers par loop chalaane wale code ko <code>if (c is PremiumCustomer)</code> jaisi jaanch ki zaroorat nahi, isliye VIP tier jodne ka matlab hai ek class jodna, har loop badalna nahi.</p>"
        },
        analogy: {
          en: "<p>The \"Call customer care\" button in a banking app: a normal customer reaches the general queue, a premium customer reaches a personal manager. You press the same button; who answers depends on who you are.</p>",
          hi: "<p>Banking app का \"Customer care को call करो\" बटन: आम customer general queue में जाता है, premium customer सीधे personal manager के पास। बटन वही है; जवाब कौन देगा, यह इस पर निर्भर है कि आप कौन हो।</p>",
          hg: "<p>Banking app ka \"Customer care ko call karo\" button: aam customer general queue mein jaata hai, premium customer seedhe personal manager ke paas. Button wahi hai; jawaab kaun dega, ye is par nirbhar hai ki aap kaun ho.</p>"
        },
        focus: {
          caption: {
            en: "The two lines that make it work",
            hi: "इसे चलाने वाली दो lines",
            hg: "Ise chalaane wali do lines"
          },
          src: "public virtual int ResponseHours() => 24;   // in Customer\npublic override int ResponseHours() => 4;   // in PremiumCustomer",
          check: "none"
        },
        lines: [
          {
            code: "public virtual int ResponseHours() => 24;",
            note: {
              en: "<code>virtual</code>: this is the default answer, and child classes <i>may</i> replace it.",
              hi: "<code>virtual</code>: यह default जवाब है, और child classes इसे बदल <i>सकती</i> हैं।",
              hg: "<code>virtual</code>: ye default jawaab hai, aur child classes ise badal <i>sakti</i> hain."
            }
          },
          {
            code: "public override int ResponseHours() => 4;",
            note: {
              en: "<code>override</code>: the premium version replaces the default. The signature must match exactly.",
              hi: "<code>override</code>: premium वाला version default की जगह ले लेता है। Signature बिल्कुल वैसा ही होना चाहिए।",
              hg: "<code>override</code>: premium wala version default ki jagah le leta hai. Signature bilkul waisa hi hona chahiye."
            }
          },
          {
            code: "foreach (Customer c in customers)",
            note: {
              en: "The loop knows only the type <code>Customer</code>; it has no idea which objects are premium.",
              hi: "Loop सिर्फ़ <code>Customer</code> type जानता है; उसे पता ही नहीं कि कौन-से objects premium हैं।",
              hg: "Loop sirf <code>Customer</code> type jaanta hai; use pata hi nahi ki kaunse objects premium hain."
            }
          },
          {
            code: "Console.WriteLine($\"{c.Name}: reply within {c.ResponseHours()}h\");",
            note: {
              en: "At run time .NET checks the <b>actual object</b>: 24 for Asha, 4 for Ravi. This is called run-time (dynamic) dispatch.",
              hi: "Run time पर .NET <b>असली object</b> देखता है: Asha के लिए 24, Ravi के लिए 4। इसे run-time (dynamic) dispatch कहते हैं।",
              hg: "Run time par .NET <b>asli object</b> dekhta hai: Asha ke liye 24, Ravi ke liye 4. Ise run-time (dynamic) dispatch kehte hain."
            }
          },
          {
            code: "channel.Send(\"Your ticket #501 is resolved\");",
            note: {
              en: "The same idea through an interface: one call, and each channel sends in its own way.",
              hi: "Interface के ज़रिए वही सोच: call एक, और हर channel अपने तरीक़े से भेजता है।",
              hg: "Interface ke zariye wahi soch: call ek, aur har channel apne tareeke se bhejta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Forgetting <code>virtual</code> in the base class: <code>override</code> then fails with error CS0506.</li><li>Writing <code>new</code> instead of <code>override</code>: that <b>hides</b> the method, and a base-class variable still calls the base version (Deep Dive).</li><li>Type checks such as <code>if (c is PremiumCustomer)</code> spread across the code instead of one override.</li></ul>",
          hi: "<ul><li>Base class में <code>virtual</code> भूल जाना: तब <code>override</code> पर error CS0506 आता है।</li><li><code>override</code> की जगह <code>new</code> लिख देना: इससे method <b>छुप</b> (hide) जाता है, और base class का variable अब भी base वाला version ही call करता है (Deep Dive)।</li><li>एक override की जगह पूरे code में <code>if (c is PremiumCustomer)</code> जैसी जाँच बिखेर देना।</li></ul>",
          hg: "<ul><li>Base class mein <code>virtual</code> bhool jaana: tab <code>override</code> par error CS0506 aata hai.</li><li><code>override</code> ki jagah <code>new</code> likh dena: isse method <b>chhup</b> (hide) jaata hai, aur base class ka variable ab bhi base wala version hi call karta hai (Deep Dive).</li><li>Ek override ki jagah poore code mein <code>if (c is PremiumCustomer)</code> jaisi jaanch bikher dena.</li></ul>"
        },
        whenToUse: {
          en: "<p>When behaviour differs by type and new types will keep coming: customer tiers, notification channels, payment methods. Put the varying part in an override or an interface implementation.</p>",
          hi: "<p>जब व्यवहार type के हिसाब से बदलता हो और नए types आते रहेंगे: customer tiers, notification channels, payment methods। बदलने वाला हिस्सा override या interface implementation में रखो।</p>",
          hg: "<p>Jab behaviour type ke hisaab se badalta ho aur naye types aate rahenge: customer tiers, notification channels, payment methods. Badalne wala hissa override ya interface implementation mein rakho.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add <code>VipCustomer : PremiumCustomer</code> whose <code>ResponseHours()</code> returns 1. Add <code>\"Meena\"</code> as a VIP to the list. The loop must not change.</p>",
            hi: "<p><code>VipCustomer : PremiumCustomer</code> जोड़ो जिसका <code>ResponseHours()</code> 1 लौटाए। List में <code>\"Meena\"</code> को VIP के रूप में जोड़ो। Loop में कोई बदलाव नहीं होना चाहिए।</p>",
            hg: "<p><code>VipCustomer : PremiumCustomer</code> jodo jiska <code>ResponseHours()</code> 1 lautaaye. List mein <code>\"Meena\"</code> ko VIP ke roop mein jodo. Loop mein koi badlaav nahi hona chahiye.</p>"
          },
          hint: {
            en: "<p>A class can override a method that its parent already overrode. Constructor: <code>public VipCustomer(string name) : base(name) { }</code>.</p>",
            hi: "<p>Class उस method को भी override कर सकती है जिसे उसके parent ने पहले override किया हो। Constructor: <code>public VipCustomer(string name) : base(name) { }</code>।</p>",
            hg: "<p>Class us method ko bhi override kar sakti hai jise uske parent ne pehle override kiya ho. Constructor: <code>public VipCustomer(string name) : base(name) { }</code>.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a new tier, same loop",
              hi: "हल: नया tier, वही loop",
              hg: "Solution: naya tier, wahi loop"
            },
            src: "var customers = new List<Customer>\n{\n    new Customer(\"Asha\"),\n    new PremiumCustomer(\"Ravi\"),\n    new VipCustomer(\"Meena\")\n};\nforeach (Customer c in customers)\n{\n    Console.WriteLine($\"{c.Name}: reply within {c.ResponseHours()}h\");\n}\n\npublic class Customer\n{\n    public string Name { get; }\n\n    public Customer(string name)\n    {\n        Name = name;\n    }\n\n    public virtual int ResponseHours() => 24;\n}\n\npublic class PremiumCustomer : Customer\n{\n    public PremiumCustomer(string name) : base(name) { }\n\n    public override int ResponseHours() => 4;\n}\n\npublic class VipCustomer : PremiumCustomer\n{\n    public VipCustomer(string name) : base(name) { }\n\n    public override int ResponseHours() => 1;\n}",
            check: "run",
            expected: "Asha: reply within 24h\nRavi: reply within 4h\nMeena: reply within 1h"
          }
        },
        quiz: {
          q: {
            en: "Given <code>Customer c = new PremiumCustomer(\"Ravi\");</code>, what does <code>c.ResponseHours()</code> return?",
            hi: "<code>Customer c = new PremiumCustomer(\"Ravi\");</code> के बाद <code>c.ResponseHours()</code> क्या लौटाएगा?",
            hg: "<code>Customer c = new PremiumCustomer(\"Ravi\");</code> ke baad <code>c.ResponseHours()</code> kya lautaayega?"
          },
          options: [
            {
              en: "24",
              hi: "24 घंटे",
              hg: "24 ghante"
            },
            {
              en: "4",
              hi: "4 घंटे",
              hg: "4 ghante"
            },
            {
              en: "A compile error",
              hi: "Compile error आएगा",
              hg: "Compile error aayega"
            },
            {
              en: "0",
              hi: "0 घंटे",
              hg: "0 ghante"
            }
          ],
          answer: 1,
          explain: {
            en: "<p><code>ResponseHours</code> is <code>virtual</code> and overridden, so the actual object (a <code>PremiumCustomer</code>) decides at run time, even through a <code>Customer</code> variable. With <code>new</code> instead of <code>override</code> it would return 24 — see the Deep Dive.</p>",
            hi: "<p><code>ResponseHours</code> <code>virtual</code> है और override हुआ है, इसलिए run time पर असली object (<code>PremiumCustomer</code>) तय करता है, भले ही variable <code>Customer</code> type का हो। <code>override</code> की जगह <code>new</code> होता तो 24 मिलता — Deep Dive देखो।</p>",
            hg: "<p><code>ResponseHours</code> <code>virtual</code> hai aur override hua hai, isliye run time par asli object (<code>PremiumCustomer</code>) tay karta hai, bhale hi variable <code>Customer</code> type ka ho. <code>override</code> ki jagah <code>new</code> hota to 24 milta — Deep Dive dekho.</p>"
          }
        },
        recap: {
          en: "<ul><li>Polymorphism = one call, behaviour chosen by the actual object.</li><li><code>virtual</code> in the parent + <code>override</code> in the child, or one interface with many implementations.</li><li>New types plug in without editing the code that calls them.</li></ul>",
          hi: "<ul><li>Polymorphism = call एक, व्यवहार असली object तय करता है।</li><li>Parent में <code>virtual</code> + child में <code>override</code>, या एक interface की कई implementations।</li><li>नए types जुड़ जाते हैं, call करने वाले code को बदले बिना।</li></ul>",
          hg: "<ul><li>Polymorphism = call ek, behaviour asli object tay karta hai.</li><li>Parent mein <code>virtual</code> + child mein <code>override</code>, ya ek interface ki kai implementations.</li><li>Naye types jud jaate hain, call karne wale code ko badle bina.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "One call, behaviour chosen by the object",
            hi: "एक call, व्यवहार object तय करता है",
            hg: "Ek call, behaviour object tay karta hai"
          },
          src: "var customers = new List<Customer>\n{\n    new Customer(\"Asha\"),\n    new PremiumCustomer(\"Ravi\")\n};\nforeach (Customer c in customers)\n{\n    Console.WriteLine($\"{c.Name}: reply within {c.ResponseHours()}h\");\n}\n\nvar channels = new List<INotifier> { new SmsNotifier(), new EmailNotifier() };\nforeach (INotifier channel in channels)\n{\n    channel.Send(\"Your ticket #501 is resolved\");\n}\n\npublic class Customer\n{\n    public string Name { get; }\n\n    public Customer(string name)\n    {\n        Name = name;\n    }\n\n    public virtual int ResponseHours() => 24;\n}\n\npublic class PremiumCustomer : Customer\n{\n    public PremiumCustomer(string name) : base(name) { }\n\n    public override int ResponseHours() => 4;\n}\n\npublic interface INotifier\n{\n    void Send(string message);\n}\n\npublic class SmsNotifier : INotifier\n{\n    public void Send(string message) => Console.WriteLine($\"SMS: {message}\");\n}\n\npublic class EmailNotifier : INotifier\n{\n    public void Send(string message) => Console.WriteLine($\"Email: {message}\");\n}",
          check: "run",
          expected: "Asha: reply within 24h\nRavi: reply within 4h\nSMS: Your ticket #501 is resolved\nEmail: Your ticket #501 is resolved"
        }
      ]
    },
    {
      id: "abstract-vs-interface",
      depth: "detailed",
      title: {
        en: "Abstract class vs interface",
        hi: "Abstract class बनाम interface",
        hg: "Abstract class vs interface"
      },
      body: {
        en: "<p><b>Analogy:</b> An <b>interface</b> is like a <b>driving licence</b>: it only says \"this person can drive\". A car driver, a bus driver and a truck driver can all hold one, and one person can hold many certificates. An <b>abstract class</b> is like a <b>sweet-shop franchise</b>: the brand gives a ready kitchen, recipes and billing system (shared code and state), and each outlet fills in its local parts. You can join only one franchise.</p>\n<ul>\n<li><b>Abstract class</b>: cannot be instantiated; can have <b>fields (state)</b>, <b>constructors</b>, normal methods, <code>abstract</code> methods and any access modifier. A class can inherit <b>only one</b>.</li>\n<li><b>Interface</b>: a <b>contract</b>; no instance fields, no constructors. A class or struct can implement <b>many</b>. Members are public by default.</li>\n<li><b>Default interface methods</b> (C# 8, .NET Core 3.0+): an interface member can have a body. Main purpose: <b>versioning</b> — add a new member to a published interface without breaking existing classes. The default body is reachable only through the interface type.</li>\n<li>Interfaces can also have static members; C# 11 added <code>static abstract</code> members (used for generic math).</li>\n</ul>\n<p><b>When to use:</b> interface — a capability shared by unrelated types (<code>IDisposable</code>, <code>IComparable&lt;T&gt;</code>), DI and unit-test mocking, public contracts. Abstract class — a close family of types that share real code or state (Template Method). Very common in real code: <b>both</b> — an interface for the contract plus an abstract base class with shared code.</p>\n<p><b>When not:</b> do not add an abstract base class just to share two helper methods — a small composed helper is cleaner.</p>\n<p><b>Analogy — tiffin service:</b> the housing society says \"every tiffin vendor must deliver by 1 pm\" (an interface — a rule anyone can follow). One brand runs many kitchens with the same cooking process and only the menu changes per kitchen (an abstract class — shared process and state).</p>\n<p><b>Example 1 — default interface method:</b> version 1 of <code>INotifier</code> had only <code>Send</code>. Version 2 added <code>SendBulk</code> <b>with a body</b>, so the old <code>SmsNotifier</code> still compiles and gets the default. <code>EmailNotifier</code> gives its own better implementation.</p>\n<ul>\n<li>The default body is visible only through the interface: <code>new SmsNotifier().SendBulk(...)</code> does <b>not</b> compile; <code>((INotifier)sms).SendBulk(...)</code> does.</li>\n<li>Default methods need a runtime that supports them (.NET Core 3.0+ / .NET 5+); they do not work on .NET Framework.</li>\n</ul>\n<p><b>Example 2 — abstract class:</b> <code>ReportBase</code> has a field, a constructor and a fixed algorithm (<code>Generate</code>) with one abstract step. This is the <b>Template Method</b> pattern. <code>SalesReport</code> inherits <b>one</b> base class and also implements an interface — that is how C# replaces multiple inheritance.</p>\n<p><b>When to use:</b> default interface methods only to evolve an interface that other code already implements (a shared library or public contract); an abstract base class when closely related types share real code or state. <b>When not:</b> do not use default methods to move business logic into interfaces, and do not create an abstract base just to share a helper or two — compose a small service instead.</p>",
        hi: "<p><b>Analogy:</b> <b>Interface</b> एक <b>driving licence</b> जैसा है: वो बस इतना कहता है कि \"यह इंसान गाड़ी चला सकता है\"। Car driver, bus driver, truck driver सबके पास हो सकता है, और एक इंसान के पास कई certificates हो सकते हैं। <b>Abstract class</b> एक <b>मिठाई की दुकान की franchise</b> जैसी है: brand तैयार kitchen, recipes और billing system देता है (shared code और state), और हर outlet अपने local हिस्से भरता है। Franchise आप सिर्फ़ एक ले सकते हो।</p>\n<ul>\n<li><b>Abstract class</b>: इसका object नहीं बना सकते; इसमें <b>fields (state)</b>, <b>constructors</b>, normal methods, <code>abstract</code> methods और कोई भी access modifier हो सकता है। एक class <b>सिर्फ़ एक</b> abstract class inherit कर सकती है।</li>\n<li><b>Interface</b>: एक <b>contract</b>; instance fields नहीं, constructors नहीं। एक class या struct <b>कई</b> interfaces implement कर सकती है। Members by default public होते हैं।</li>\n<li><b>Default interface methods</b> (C# 8, .NET Core 3.0+): interface member की body हो सकती है। मुख्य मकसद: <b>versioning</b> — published interface में नया member जोड़ो बिना पुरानी classes तोड़े। Default body सिर्फ़ interface type से ही call होती है।</li>\n<li>Interfaces में static members भी हो सकते हैं; C# 11 में <code>static abstract</code> members आए (generic math के लिए)।</li>\n</ul>\n<p><b>कब use करें:</b> interface — जब अलग-अलग, unrelated types में एक capability हो (<code>IDisposable</code>, <code>IComparable&lt;T&gt;</code>), DI और unit-test mocking, public contracts। Abstract class — एक करीबी family जो असली code या state share करती है (Template Method)। Real code में अक्सर <b>दोनों</b> — contract के लिए interface और shared code के लिए abstract base class।</p>\n<p><b>कब नहीं:</b> सिर्फ़ दो helper methods share करने के लिए abstract base class मत बनाओ — एक छोटा composed helper ज़्यादा साफ़ है।</p>\n<p><b>Analogy — tiffin service:</b> Housing society कहती है \"हर tiffin वाला 1 बजे तक deliver करे\" (interface — ऐसा rule जो कोई भी follow कर सकता है)। एक brand कई kitchens चलाता है, सबका cooking process same है, बस हर kitchen का menu अलग है (abstract class — shared process और state)।</p>\n<p><b>Example 1 — default interface method:</b> <code>INotifier</code> के version 1 में सिर्फ़ <code>Send</code> था। Version 2 में <code>SendBulk</code> <b>body के साथ</b> जोड़ा गया, इसलिए पुराना <code>SmsNotifier</code> अब भी compile होता है और उसे default मिल जाता है। <code>EmailNotifier</code> अपना बेहतर implementation देता है।</p>\n<ul>\n<li>Default body सिर्फ़ interface से दिखती है: <code>new SmsNotifier().SendBulk(...)</code> compile <b>नहीं</b> होगा; <code>((INotifier)sms).SendBulk(...)</code> होगा।</li>\n<li>Default methods के लिए ऐसा runtime चाहिए जो इन्हें support करे (.NET Core 3.0+ / .NET 5+); .NET Framework पर ये नहीं चलते।</li>\n</ul>\n<p><b>Example 2 — abstract class:</b> <code>ReportBase</code> में एक field, एक constructor और एक fixed algorithm (<code>Generate</code>) है जिसमें एक step abstract है। यह <b>Template Method</b> pattern है। <code>SalesReport</code> <b>एक</b> base class inherit करती है और साथ में एक interface भी implement करती है — C# में multiple inheritance की जगह यही तरीका है।</p>\n<p><b>कब use करें:</b> default interface methods सिर्फ़ तब, जब ऐसे interface को आगे बढ़ाना हो जिसे दूसरा code पहले से implement करता है (shared library या public contract); abstract base class तब, जब करीबी types असली code या state share करें। <b>कब नहीं:</b> default methods से business logic interfaces में मत डालो, और सिर्फ़ एक-दो helpers share करने के लिए abstract base मत बनाओ — एक छोटी service compose करो।</p>",
        hg: "<p><b>Analogy:</b> <b>Interface</b> ek <b>driving licence</b> jaisa hai: woh bas itna kehta hai ki \"yeh insaan gaadi chala sakta hai\". Car driver, bus driver, truck driver sabke paas ho sakta hai, aur ek insaan ke paas kai certificates ho sakte hain. <b>Abstract class</b> ek <b>mithai ki dukaan ki franchise</b> jaisi hai: brand taiyaar kitchen, recipes aur billing system deta hai (shared code aur state), aur har outlet apne local hisse bharta hai. Franchise aap sirf ek le sakte ho.</p>\n<ul>\n<li><b>Abstract class</b>: iska object nahi bana sakte; ismein <b>fields (state)</b>, <b>constructors</b>, normal methods, <code>abstract</code> methods aur koi bhi access modifier ho sakta hai. Ek class <b>sirf ek</b> abstract class inherit kar sakti hai.</li>\n<li><b>Interface</b>: ek <b>contract</b>; instance fields nahi, constructors nahi. Ek class ya struct <b>kai</b> interfaces implement kar sakti hai. Members by default public hote hain.</li>\n<li><b>Default interface methods</b> (C# 8, .NET Core 3.0+): interface member ki body ho sakti hai. Main maqsad: <b>versioning</b> — published interface mein naya member jodo bina purani classes tode. Default body sirf interface type se hi call hoti hai.</li>\n<li>Interfaces mein static members bhi ho sakte hain; C# 11 mein <code>static abstract</code> members aaye (generic math ke liye).</li>\n</ul>\n<p><b>Kab use karein:</b> interface — jab alag-alag, unrelated types mein ek capability ho (<code>IDisposable</code>, <code>IComparable&lt;T&gt;</code>), DI aur unit-test mocking, public contracts. Abstract class — ek kareebi family jo asli code ya state share karti hai (Template Method). Real code mein aksar <b>dono</b> — contract ke liye interface aur shared code ke liye abstract base class.</p>\n<p><b>Kab nahi:</b> sirf do helper methods share karne ke liye abstract base class mat banao — ek chhota composed helper zyada saaf hai.</p>\n<p><b>Analogy — tiffin service:</b> Housing society kehti hai \"har tiffin wala 1 baje tak deliver kare\" (interface — aisa rule jo koi bhi follow kar sakta hai). Ek brand kai kitchens chalata hai, sabka cooking process same hai, bas har kitchen ka menu alag hai (abstract class — shared process aur state).</p>\n<p><b>Example 1 — default interface method:</b> <code>INotifier</code> ke version 1 mein sirf <code>Send</code> tha. Version 2 mein <code>SendBulk</code> <b>body ke saath</b> joda gaya, isliye purana <code>SmsNotifier</code> ab bhi compile hota hai aur use default mil jaata hai. <code>EmailNotifier</code> apna behtar implementation deta hai.</p>\n<ul>\n<li>Default body sirf interface se dikhti hai: <code>new SmsNotifier().SendBulk(...)</code> compile <b>nahi</b> hoga; <code>((INotifier)sms).SendBulk(...)</code> hoga.</li>\n<li>Default methods ke liye aisa runtime chahiye jo inhe support kare (.NET Core 3.0+ / .NET 5+); .NET Framework par yeh nahi chalte.</li>\n</ul>\n<p><b>Example 2 — abstract class:</b> <code>ReportBase</code> mein ek field, ek constructor aur ek fixed algorithm (<code>Generate</code>) hai jismein ek step abstract hai. Yeh <b>Template Method</b> pattern hai. <code>SalesReport</code> <b>ek</b> base class inherit karti hai aur saath mein ek interface bhi implement karti hai — C# mein multiple inheritance ki jagah yahi tareeka hai.</p>\n<p><b>Kab use karein:</b> default interface methods sirf tab, jab aise interface ko aage badhana ho jise doosra code pehle se implement karta hai (shared library ya public contract); abstract base class tab, jab kareebi types asli code ya state share karein. <b>Kab nahi:</b> default methods se business logic interfaces mein mat daalo, aur sirf ek-do helpers share karne ke liye abstract base mat banao — ek chhoti service compose karo.</p>"
      },
      code: [
        {
          caption: {
            en: "Default interface method: adding SendBulk without breaking old classes",
            hi: "Default interface method: पुरानी classes तोड़े बिना SendBulk जोड़ना",
            hg: "Default interface method: purani classes tode bina SendBulk jodna"
          },
          check: "run",
          expected: "SMS: OTP 4321\nSMS: A\nSMS: B\nEmail: OTP 4321\nEmail: one mail with 2 items",
          src: "INotifier[] notifiers = [new SmsNotifier(), new EmailNotifier()];\nforeach (INotifier n in notifiers)\n{\n    n.Send(\"OTP 4321\");\n    n.SendBulk([\"A\", \"B\"]);\n}\n\npublic interface INotifier\n{\n    void Send(string message);\n\n    // Added in \"version 2\" WITH a body, so existing implementers still compile.\n    void SendBulk(string[] messages)\n    {\n        foreach (var m in messages) Send(m);\n    }\n}\n\npublic class SmsNotifier : INotifier           // written for version 1, unchanged\n{\n    public void Send(string message) => Console.WriteLine($\"SMS: {message}\");\n}\n\npublic class EmailNotifier : INotifier\n{\n    public void Send(string message) => Console.WriteLine($\"Email: {message}\");\n    public void SendBulk(string[] messages) =>    // replaces the default\n        Console.WriteLine($\"Email: one mail with {messages.Length} items\");\n}"
        },
        {
          caption: {
            en: "Abstract class: state + constructor + Template Method; one base class, many interfaces",
            hi: "Abstract class: state + constructor + Template Method; base class एक, interfaces कई",
            hg: "Abstract class: state + constructor + Template Method; base class ek, interfaces kai"
          },
          check: "run",
          expected: "== Sales #1 ==\nTotal: 500\n== Sales #2 ==\nTotal: 500\nSales,500",
          src: "var sales = new SalesReport();\nsales.Generate();\nsales.Generate();\nIExportable export = sales;\nConsole.WriteLine(export.ToCsv());\n// var r = new ReportBase(\"x\");   // CS0144: cannot create an instance of an abstract type\n\npublic interface IExportable\n{\n    string ToCsv();\n}\n\npublic abstract class ReportBase\n{\n    private int _runs;                                      // state: an interface cannot have this\n    protected ReportBase(string title) => Title = title;    // constructor: an interface cannot have this\n    public string Title { get; }\n\n    public void Generate()                                  // fixed steps (Template Method)\n    {\n        _runs++;\n        Console.WriteLine($\"== {Title} #{_runs} ==\");\n        WriteBody();                                        // the step each child fills in\n    }\n\n    protected abstract void WriteBody();\n}\n\n// One base class + any number of interfaces\npublic class SalesReport : ReportBase, IExportable\n{\n    public SalesReport() : base(\"Sales\") { }\n    protected override void WriteBody() => Console.WriteLine(\"Total: 500\");\n    public string ToCsv() => \"Sales,500\";\n}"
        }
      ]
    },
    {
      id: "overload-override",
      depth: "detailed",
      title: {
        en: "Overloading vs overriding; virtual / override / new / sealed",
        hi: "Overloading बनाम overriding; virtual / override / new / sealed",
        hg: "Overloading vs overriding; virtual / override / new / sealed"
      },
      body: {
        en: "<p><b>Analogy — railway counter:</b> At the ticket counter you can book \"with name only\", \"with name + berth choice\" or \"with name + berth + senior-citizen concession\". Same action, different forms — the clerk decides by looking at the form you filled. That is <b>overloading</b> (decided at <b>compile time</b>). Now Indian Railways says \"every zone must announce train arrival\", but Western Railway announces in Marathi and Southern Railway in Tamil. Same rule, each zone's own way, decided by where you actually stand. That is <b>overriding</b> (decided at <b>run time</b>).</p>\n<ul>\n<li><b>Overloading</b>: same method name, different parameter list (count, type, order). Chosen by the compiler from the <b>declared</b> types of the arguments. Return type alone is not enough.</li>\n<li><b>Overriding</b>: a derived class gives a new body to a base <code>virtual</code>/<code>abstract</code> method with the same signature. Chosen at run time from the <b>actual object</b>.</li>\n<li><code>virtual</code> — \"you <i>may</i> override me\". <code>abstract</code> — \"you <i>must</i> override me\" (no body; class must be abstract).</li>\n<li><code>override</code> — replaces the behaviour; even a base-class reference calls the new version.</li>\n<li><code>new</code> — <b>hides</b> the base member. Not polymorphic: a base reference still calls the base version. If the base member is non-virtual, hiding it without <code>new</code> gives warning CS0108. If it is <code>virtual</code> and you forget <code>override</code>, you get warning CS0114 and the method silently <b>hides</b> instead of overriding — base references keep calling the base version.</li>\n<li><code>sealed</code> — on a class: no one can inherit it. On an override (<code>sealed override</code>): no further overriding down the chain.</li>\n</ul>\n<p><b>Remember:</b> <b>override follows the object, new follows the reference.</b></p>\n<p><b>When to use:</b> overloads for convenience variants of one operation; override for real polymorphic behaviour. Avoid <code>new</code> — use it only when you cannot change a base class you do not own.</p>\n<p><b>Analogy — TV remote:</b> the same \"Power\" button works on a Sony TV and an LG TV; each TV turns on in its own way. Your code just presses the button.</p>\n<p><b>Run-time polymorphism:</b> the loop below only knows the type <code>Notification</code>, but each object runs its own <code>Send</code>. Note:</p>\n<ul>\n<li><code>EmailNotification</code> uses <code>sealed override</code> — nobody below it may override <code>Send</code> again.</li>\n<li><code>UrgentSms</code> is a <code>sealed</code> class and calls <code>base.Send(...)</code> to reuse the parent's behaviour.</li>\n</ul>\n<p><b>Compile-time polymorphism (overloading):</b> <code>Calculator.Add</code> has three versions; the compiler picks one from the argument types. A method that differs only in return type is <b>not</b> an overload (error CS0111).</p>\n<p><b>When to use:</b> prefer virtual/interface dispatch over a long <code>switch</code> or <code>if</code> chain on the object's type — a new type then means a new class, not edits to every switch. <b>When not:</b> do not make members <code>virtual</code> \"just in case\" — every virtual member is an extension point you must support. Keep methods non-virtual (and classes sealed) until there is a real need.</p>",
        hi: "<p><b>Analogy — railway counter:</b> Ticket counter पर आप \"सिर्फ़ नाम से\", \"नाम + berth choice के साथ\" या \"नाम + berth + senior-citizen concession के साथ\" ticket book कर सकते हो। काम एक, form अलग-अलग — clerk आपका भरा हुआ form देखकर तय करता है। यह <b>overloading</b> है (<b>compile time</b> पर तय)। अब Indian Railways कहती है \"हर zone train आने की announcement करे\", पर Western Railway Marathi में करती है और Southern Railway Tamil में। Rule एक, हर zone का अपना तरीका, और यह इस पर depend करता है कि आप असल में कहाँ खड़े हो। यह <b>overriding</b> है (<b>run time</b> पर तय)।</p>\n<ul>\n<li><b>Overloading</b>: same method नाम, अलग parameter list (count, type, order)। Compiler arguments के <b>declared</b> types देखकर चुनता है। सिर्फ़ return type अलग होना काफ़ी नहीं।</li>\n<li><b>Overriding</b>: derived class, base के <code>virtual</code>/<code>abstract</code> method को same signature के साथ नई body देती है। Run time पर <b>असली object</b> देखकर चुना जाता है।</li>\n<li><code>virtual</code> — \"आप मुझे override <i>कर सकते</i> हो\"। <code>abstract</code> — \"आपको मुझे override <i>करना ही</i> होगा\" (body नहीं; class भी abstract होनी चाहिए)।</li>\n<li><code>override</code> — behaviour बदल देता है; base-class reference से भी नया version ही call होता है।</li>\n<li><code>new</code> — base member को <b>छुपाता (hide)</b> है। यह polymorphic नहीं है: base reference से अब भी base version ही call होगा। Base member non-virtual हो और <code>new</code> न लिखो, तो warning CS0108 आती है। Base member <code>virtual</code> हो और आप <code>override</code> लिखना भूल जाओ, तो warning CS0114 आती है और method override की जगह चुपचाप <b>hide</b> कर देता है — base references base version ही call करते रहते हैं।</li>\n<li><code>sealed</code> — class पर: कोई उसे inherit नहीं कर सकता। Override पर (<code>sealed override</code>): आगे chain में कोई override नहीं कर सकता।</li>\n</ul>\n<p><b>याद रखो:</b> <b>override object को follow करता है, new reference को।</b></p>\n<p><b>कब use करें:</b> एक ही operation के आसान variants के लिए overloads; असली polymorphic behaviour के लिए override। <code>new</code> से बचो — तभी use करो जब base class आपकी नहीं है और आप उसे बदल नहीं सकते।</p>\n<p><b>Analogy — TV remote:</b> Same \"Power\" button Sony TV पर भी चलता है और LG TV पर भी; हर TV अपने तरीके से on होता है। आपका code बस button दबाता है।</p>\n<p><b>Run-time polymorphism:</b> नीचे का loop सिर्फ़ type <code>Notification</code> जानता है, पर हर object अपना <code>Send</code> चलाता है। ध्यान दो:</p>\n<ul>\n<li><code>EmailNotification</code> में <code>sealed override</code> है — इसके नीचे कोई <code>Send</code> को फिर से override नहीं कर सकता।</li>\n<li><code>UrgentSms</code> एक <code>sealed</code> class है और parent का behaviour reuse करने के लिए <code>base.Send(...)</code> call करती है।</li>\n</ul>\n<p><b>Compile-time polymorphism (overloading):</b> <code>Calculator.Add</code> के तीन versions हैं; compiler argument types देखकर एक चुनता है। जो method सिर्फ़ return type में अलग है, वो overload <b>नहीं</b> है (error CS0111)।</p>\n<p><b>कब use करें:</b> object के type पर लंबे <code>switch</code> या <code>if</code> chain की जगह virtual/interface dispatch use करो — नया type आए तो बस नई class जोड़ो, हर switch को edit मत करो। <b>कब नहीं:</b> members को \"शायद काम आए\" सोचकर <code>virtual</code> मत बनाओ — हर virtual member एक extension point है जिसे आगे support करना पड़ता है। असली ज़रूरत आने तक methods non-virtual (और classes sealed) रखो।</p>",
        hg: "<p><b>Analogy — railway counter:</b> Ticket counter par aap \"sirf naam se\", \"naam + berth choice ke saath\" ya \"naam + berth + senior-citizen concession ke saath\" ticket book kar sakte ho. Kaam ek, form alag-alag — clerk aapka bhara hua form dekhkar tay karta hai. Yeh <b>overloading</b> hai (<b>compile time</b> par tay). Ab Indian Railways kehti hai \"har zone train aane ki announcement kare\", par Western Railway Marathi mein karti hai aur Southern Railway Tamil mein. Rule ek, har zone ka apna tareeka, aur yeh is par depend karta hai ki aap asal mein kahan khade ho. Yeh <b>overriding</b> hai (<b>run time</b> par tay).</p>\n<ul>\n<li><b>Overloading</b>: same method naam, alag parameter list (count, type, order). Compiler arguments ke <b>declared</b> types dekhkar chunta hai. Sirf return type alag hona kaafi nahi.</li>\n<li><b>Overriding</b>: derived class, base ke <code>virtual</code>/<code>abstract</code> method ko same signature ke saath nayi body deti hai. Run time par <b>asli object</b> dekhkar chuna jaata hai.</li>\n<li><code>virtual</code> — \"aap mujhe override <i>kar sakte</i> ho\". <code>abstract</code> — \"aapko mujhe override <i>karna hi</i> hoga\" (body nahi; class bhi abstract honi chahiye).</li>\n<li><code>override</code> — behaviour badal deta hai; base-class reference se bhi naya version hi call hota hai.</li>\n<li><code>new</code> — base member ko <b>chhupata (hide)</b> hai. Yeh polymorphic nahi hai: base reference se ab bhi base version hi call hoga. Base member non-virtual ho aur <code>new</code> na likho, to warning CS0108 aati hai. Base member <code>virtual</code> ho aur aap <code>override</code> likhna bhool jao, to warning CS0114 aati hai aur method override ki jagah chupchaap <b>hide</b> kar deta hai — base references base version hi call karte rehte hain.</li>\n<li><code>sealed</code> — class par: koi use inherit nahi kar sakta. Override par (<code>sealed override</code>): aage chain mein koi override nahi kar sakta.</li>\n</ul>\n<p><b>Yaad rakho:</b> <b>override object ko follow karta hai, new reference ko.</b></p>\n<p><b>Kab use karein:</b> ek hi operation ke aasaan variants ke liye overloads; asli polymorphic behaviour ke liye override. <code>new</code> se bacho — tabhi use karo jab base class aapki nahi hai aur aap use badal nahi sakte.</p>\n<p><b>Analogy — TV remote:</b> Same \"Power\" button Sony TV par bhi chalta hai aur LG TV par bhi; har TV apne tareeke se on hota hai. Aapka code bas button dabata hai.</p>\n<p><b>Run-time polymorphism:</b> neeche ka loop sirf type <code>Notification</code> jaanta hai, par har object apna <code>Send</code> chalata hai. Dhyaan do:</p>\n<ul>\n<li><code>EmailNotification</code> mein <code>sealed override</code> hai — iske neeche koi <code>Send</code> ko phir se override nahi kar sakta.</li>\n<li><code>UrgentSms</code> ek <code>sealed</code> class hai aur parent ka behaviour reuse karne ke liye <code>base.Send(...)</code> call karti hai.</li>\n</ul>\n<p><b>Compile-time polymorphism (overloading):</b> <code>Calculator.Add</code> ke teen versions hain; compiler argument types dekhkar ek chunta hai. Jo method sirf return type mein alag hai, woh overload <b>nahi</b> hai (error CS0111).</p>\n<p><b>Kab use karein:</b> object ke type par lambe <code>switch</code> ya <code>if</code> chain ki jagah virtual/interface dispatch use karo — naya type aaye to bas nayi class jodo, har switch ko edit mat karo. <b>Kab nahi:</b> members ko \"shayad kaam aaye\" sochkar <code>virtual</code> mat banao — har virtual member ek extension point hai jise aage support karna padta hai. Asli zaroorat aane tak methods non-virtual (aur classes sealed) rakho.</p>"
      },
      code: [
        {
          caption: {
            en: "Run-time polymorphism with virtual / override / sealed",
            hi: "virtual / override / sealed के साथ run-time polymorphism",
            hg: "virtual / override / sealed ke saath run-time polymorphism"
          },
          check: "run",
          expected: "[SMS] Bill due\n[Email] Bill due\n[SMS] URGENT: Bill due",
          src: "Notification[] items = [new SmsNotification(), new EmailNotification(), new UrgentSms()];\nforeach (Notification n in items)\n    n.Send(\"Bill due\");   // which Send runs? decided by the real object\n\npublic class Notification\n{\n    public virtual void Send(string msg) => Console.WriteLine($\"[Generic] {msg}\");\n}\n\npublic class SmsNotification : Notification\n{\n    public override void Send(string msg) => Console.WriteLine($\"[SMS] {msg}\");\n}\n\npublic class EmailNotification : Notification\n{\n    // sealed override: classes deriving from EmailNotification cannot override Send\n    public sealed override void Send(string msg) => Console.WriteLine($\"[Email] {msg}\");\n}\n\npublic sealed class UrgentSms : SmsNotification   // sealed class: no one can inherit it\n{\n    public override void Send(string msg) => base.Send(\"URGENT: \" + msg);\n}"
        },
        {
          caption: {
            en: "Compile-time polymorphism: method overloading",
            hi: "Compile-time polymorphism: method overloading का उदाहरण",
            hg: "Compile-time polymorphism: method overloading"
          },
          check: "run",
          expected: "5\n6\n6",
          src: "var calc = new Calculator();\nConsole.WriteLine(calc.Add(2, 3));        // Add(int, int)\nConsole.WriteLine(calc.Add(2.5, 3.5));    // Add(double, double)\nConsole.WriteLine(calc.Add(1, 2, 3));     // Add(int, int, int)\n\npublic class Calculator\n{\n    public int Add(int a, int b) => a + b;\n    public double Add(double a, double b) => a + b;\n    public int Add(int a, int b, int c) => a + b + c;\n    // public long Add(int a, int b) => a + b;   // CS0111: return type alone is not an overload\n}"
        }
      ]
    },
    {
      id: "constructors-advanced",
      depth: "detailed",
      title: {
        en: "Constructors: static, private, chaining, primary",
        hi: "Constructors के प्रकार: static, private, chaining, primary",
        hg: "Constructors: static, private, chaining, primary"
      },
      body: {
        en: "<p><b>Analogy — mobile connection:</b> the telecom company sets up its network <b>once</b> (static constructor). Every new SIM is activated separately (instance constructor). A \"prepaid plan\" activation first runs the basic activation steps, then adds its own (constructor chaining). And you cannot print your own Aadhaar card — only the authority issues it (private constructor + factory method).</p>\n<ul>\n<li><b>Instance constructor</b> — runs on every <code>new</code>; puts the object in a valid state.</li>\n<li><b>Static constructor</b> — <code>static Order() { }</code>: no parameters, no access modifier, cannot be called by you. The runtime runs it <b>once per type</b>, before the first instance is created or any static member is used. If it throws, you get <code>TypeInitializationException</code> and the type stays unusable.</li>\n<li><b>Private constructor</b> — outside code cannot call <code>new</code>. Used for Singleton, static factory methods (<code>Order.Create(...)</code>) that validate or cache, and classes that should not be instantiated.</li>\n<li><b>Chaining</b> — <code>: this(...)</code> calls another constructor of the same class; <code>: base(...)</code> calls the parent's constructor. Write setup logic once.</li>\n<li>If you write no <code>base(...)</code>, the compiler inserts <code>base()</code>. If the parent has no parameterless constructor you get error CS7036; if it has one but it is <code>private</code>, you get CS0122 (inaccessible). Either way, call <code>base(...)</code> with arguments.</li>\n<li><b>Order with inheritance:</b> derived field initializers → base field initializers → base constructor body → derived constructor body.</li>\n<li><b>Primary constructors</b> (C# 12): <code>class OrderService(IOrderRepository repo)</code>. The parameters are in scope in the whole class body — very handy for DI. They are parameters, not properties: if you need a public property, declare it and assign it from the parameter.</li>\n</ul>\n<p><b>When to use / when not:</b> keep constructors cheap and validating — assign fields, check arguments, nothing more. No I/O, database or HTTP calls inside a constructor: it cannot be <code>async</code>, and a half-built object is hard to handle. If creation can fail in an expected way or needs async work, use a static factory method such as <code>static async Task&lt;Report&gt; CreateAsync(...)</code>.</p>",
        hi: "<p><b>Analogy — mobile connection:</b> Telecom company अपना network <b>एक बार</b> setup करती है (static constructor)। हर नया SIM अलग से activate होता है (instance constructor)। \"Prepaid plan\" activation पहले basic activation steps चलाता है, फिर अपने steps जोड़ता है (constructor chaining)। और आप अपना Aadhaar card ख़ुद print नहीं कर सकते — सिर्फ़ authority issue करती है (private constructor + factory method)।</p>\n<ul>\n<li><b>Instance constructor</b> — हर <code>new</code> पर चलता है; object को valid state में रखता है।</li>\n<li><b>Static constructor</b> — <code>static Order() { }</code>: कोई parameter नहीं, कोई access modifier नहीं, आप इसे call नहीं कर सकते। Runtime इसे <b>हर type के लिए एक बार</b> चलाता है — पहला object बनने या कोई static member use होने से पहले। अगर यह exception फेंके, तो <code>TypeInitializationException</code> आता है और वो type आगे use नहीं हो पाता।</li>\n<li><b>Private constructor</b> — बाहर का code <code>new</code> नहीं कर सकता। Singleton, static factory methods (<code>Order.Create(...)</code>) जो validate या cache करें, और ऐसी classes जिनका object नहीं बनना चाहिए — इनमें use होता है।</li>\n<li><b>Chaining</b> — <code>: this(...)</code> उसी class का दूसरा constructor call करता है; <code>: base(...)</code> parent का constructor call करता है। Setup logic एक ही बार लिखो।</li>\n<li>अगर आप <code>base(...)</code> नहीं लिखते, तो compiler ख़ुद <code>base()</code> डाल देता है। अगर parent में parameterless constructor है ही नहीं, तो error CS7036 आता है; अगर है पर <code>private</code> है, तो CS0122 (inaccessible)। दोनों cases में arguments के साथ <code>base(...)</code> call करो।</li>\n<li><b>Inheritance में order:</b> derived field initializers → base field initializers → base constructor body → derived constructor body।</li>\n<li><b>Primary constructors</b> (C# 12): <code>class OrderService(IOrderRepository repo)</code>। Parameters पूरी class body में available रहते हैं — DI के लिए बहुत काम का। ये parameters हैं, properties नहीं: अगर public property चाहिए तो उसे declare करो और parameter से assign करो।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> constructors हल्के और validate करने वाले रखो — fields assign करो, arguments check करो, बस। Constructor के अंदर I/O, database या HTTP calls नहीं: constructor <code>async</code> नहीं हो सकता, और आधा बना object संभालना मुश्किल है। अगर object बनाना expected तरीके से fail हो सकता है या async काम चाहिए, तो static factory method use करो, जैसे <code>static async Task&lt;Report&gt; CreateAsync(...)</code>।</p>",
        hg: "<p><b>Analogy — mobile connection:</b> Telecom company apna network <b>ek baar</b> setup karti hai (static constructor). Har naya SIM alag se activate hota hai (instance constructor). \"Prepaid plan\" activation pehle basic activation steps chalata hai, phir apne steps jodta hai (constructor chaining). Aur aap apna Aadhaar card khud print nahi kar sakte — sirf authority issue karti hai (private constructor + factory method).</p>\n<ul>\n<li><b>Instance constructor</b> — har <code>new</code> par chalta hai; object ko valid state mein rakhta hai.</li>\n<li><b>Static constructor</b> — <code>static Order() { }</code>: koi parameter nahi, koi access modifier nahi, aap ise call nahi kar sakte. Runtime ise <b>har type ke liye ek baar</b> chalata hai — pehla object banne ya koi static member use hone se pehle. Agar yeh exception phenke, to <code>TypeInitializationException</code> aata hai aur woh type aage use nahi ho paata.</li>\n<li><b>Private constructor</b> — bahar ka code <code>new</code> nahi kar sakta. Singleton, static factory methods (<code>Order.Create(...)</code>) jo validate ya cache karein, aur aisi classes jinka object nahi banna chahiye — inmein use hota hai.</li>\n<li><b>Chaining</b> — <code>: this(...)</code> usi class ka doosra constructor call karta hai; <code>: base(...)</code> parent ka constructor call karta hai. Setup logic ek hi baar likho.</li>\n<li>Agar aap <code>base(...)</code> nahi likhte, to compiler khud <code>base()</code> daal deta hai. Agar parent mein parameterless constructor hai hi nahi, to error CS7036 aata hai; agar hai par <code>private</code> hai, to CS0122 (inaccessible). Dono cases mein arguments ke saath <code>base(...)</code> call karo.</li>\n<li><b>Inheritance mein order:</b> derived field initializers → base field initializers → base constructor body → derived constructor body.</li>\n<li><b>Primary constructors</b> (C# 12): <code>class OrderService(IOrderRepository repo)</code>. Parameters poori class body mein available rehte hain — DI ke liye bahut kaam ka. Yeh parameters hain, properties nahi: agar public property chahiye to use declare karo aur parameter se assign karo.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> constructors halke aur validate karne wale rakho — fields assign karo, arguments check karo, bas. Constructor ke andar I/O, database ya HTTP calls nahi: constructor <code>async</code> nahi ho sakta, aur aadha bana object sambhaalna mushkil hai. Agar object banana expected tareeke se fail ho sakta hai ya async kaam chahiye, to static factory method use karo, jaise <code>static async Task&lt;Report&gt; CreateAsync(...)</code>.</p>"
      },
      code: [
        {
          caption: {
            en: "Static constructor, private constructor + factory, this(...) chaining",
            hi: "Static constructor, private constructor + factory, और this(...) chaining",
            hg: "Static constructor, private constructor + factory, this(...) chaining"
          },
          check: "run",
          expected: "App started\nStatic ctor: counter ready\n#101 Tea x1 | #102 Samosa x2",
          src: "Console.WriteLine(\"App started\");\nvar a = Order.Create(\"Tea\");          // first use of Order: static ctor runs now\nvar b = new Order(\"Samosa\", 2);\nConsole.WriteLine($\"{a} | {b}\");\n// var c = new Order(\"Chai\");         // CS0122: that constructor is private\n\npublic class Order\n{\n    private static int _next;\n    public int Id { get; }\n    public string Item { get; }\n    public int Qty { get; }\n\n    static Order()                                  // once per type, before first use\n    {\n        _next = 100;\n        Console.WriteLine(\"Static ctor: counter ready\");\n    }\n\n    public Order(string item, int qty)              // the main constructor\n    {\n        Id = ++_next;\n        Item = item;\n        Qty = qty;\n    }\n\n    private Order(string item) : this(item, 1) { }  // private + chained to the main one\n\n    public static Order Create(string item) => new(item);   // factory method\n\n    public override string ToString() => $\"#{Id} {Item} x{Qty}\";\n}"
        },
        {
          caption: {
            en: "base(...) chaining: the parent constructor runs first",
            hi: "base(...) chaining: parent constructor पहले चलता है",
            hg: "base(...) chaining: parent constructor pehle chalta hai"
          },
          check: "run",
          expected: "Employee ctor\nManager ctor\nAsha manages 5",
          src: "var m = new Manager(\"Asha\", 5);\nConsole.WriteLine(m.Describe());\n\npublic class Employee\n{\n    public string Name { get; }\n\n    public Employee(string name)       // no parameterless ctor, so children must call base(name)\n    {\n        Name = name;\n        Console.WriteLine(\"Employee ctor\");\n    }\n\n    public virtual string Describe() => Name;\n}\n\npublic class Manager : Employee\n{\n    public int TeamSize { get; }\n\n    public Manager(string name, int teamSize) : base(name)\n    {\n        TeamSize = teamSize;\n        Console.WriteLine(\"Manager ctor\");\n    }\n\n    public override string Describe() => $\"{Name} manages {TeamSize}\";\n}"
        },
        {
          caption: {
            en: "Primary constructors (C# 12) — common for DI-style services",
            hi: "Primary constructors (C# 12) — DI वाली services में common",
            hg: "Primary constructors (C# 12) — DI wali services mein common"
          },
          check: "compile",
          src: "public interface IOrderRepository\n{\n    void Save(string item);\n}\n\n// 'repo' is in scope in the whole class body\npublic class OrderService(IOrderRepository repo)\n{\n    public void Place(string item) => repo.Save(item);\n}\n\n// Need a public property? Declare it and assign it from the parameter.\npublic class Person(string name)\n{\n    public string Name { get; } = name;\n}\n\n// Passing primary-constructor parameters to the base class\npublic class Student(string name, int rollNo) : Person(name)\n{\n    public int RollNo { get; } = rollNo;\n}"
        }
      ]
    },
    {
      id: "access-modifiers",
      depth: "detailed",
      title: {
        en: "Access modifiers",
        hi: "Access modifiers (कौन क्या देख सकता है)",
        hg: "Access modifiers"
      },
      body: {
        en: "<p><b>Analogy — a housing society:</b> the main road is open to everyone (<code>public</code>). Your bedroom is only yours (<code>private</code>). Family property goes to your children wherever they live (<code>protected</code>). The clubhouse is for residents of this society only (<code>internal</code> — same <b>assembly</b>, i.e. same project/.dll).</p>\n<ul>\n<li><code>public</code> — everyone.</li>\n<li><code>private</code> — only inside the same type.</li>\n<li><code>protected</code> — the same type and derived types (in any assembly).</li>\n<li><code>internal</code> — any code in the same assembly.</li>\n<li><code>protected internal</code> — same assembly <b>OR</b> derived types anywhere (the wider one).</li>\n<li><code>private protected</code> (C# 7.2) — derived types <b>AND</b> only in the same assembly (the narrower one).</li>\n<li><code>file</code> (C# 11, types only) — visible only inside the same source file; used by source generators.</li>\n</ul>\n<p><b>Defaults:</b> a top-level class/struct/interface without a modifier is <code>internal</code>; class and struct members are <code>private</code>; interface members are <code>public</code>; nested types are <code>private</code>.</p>\n<p><b>TL tip:</b> start with the most restrictive access and open up only when needed. Keeping classes <code>internal</code> in a library makes it much easier to change them later without breaking consumers.</p>",
        hi: "<p><b>Analogy — housing society:</b> Main road सबके लिए खुली है (<code>public</code>)। आपका bedroom सिर्फ़ आपका है (<code>private</code>)। Family property आपके बच्चों को मिलती है, वो कहीं भी रहें (<code>protected</code>)। Clubhouse सिर्फ़ इसी society के residents के लिए है (<code>internal</code> — same <b>assembly</b>, यानी same project/.dll)।</p>\n<ul>\n<li><code>public</code> — सब के लिए।</li>\n<li><code>private</code> — सिर्फ़ उसी type के अंदर।</li>\n<li><code>protected</code> — वही type और उसके derived types (किसी भी assembly में)।</li>\n<li><code>internal</code> — same assembly का कोई भी code।</li>\n<li><code>protected internal</code> — same assembly <b>या</b> कहीं भी derived types (ज़्यादा खुला)।</li>\n<li><code>private protected</code> (C# 7.2) — derived types <b>और</b> वो भी सिर्फ़ same assembly में (ज़्यादा बंद)।</li>\n<li><code>file</code> (C# 11, सिर्फ़ types के लिए) — सिर्फ़ उसी source file के अंदर दिखता है; source generators में use होता है।</li>\n</ul>\n<p><b>Defaults:</b> बिना modifier के top-level class/struct/interface <code>internal</code> होती है; class और struct के members <code>private</code>; interface members <code>public</code>; nested types <code>private</code>।</p>\n<p><b>TL tip:</b> सबसे restrictive access से शुरू करो और ज़रूरत पड़ने पर ही खोलो। Library में classes को <code>internal</code> रखने से बाद में उन्हें बदलना आसान होता है, consumers नहीं टूटते।</p>",
        hg: "<p><b>Analogy — housing society:</b> Main road sabke liye khuli hai (<code>public</code>). Aapka bedroom sirf aapka hai (<code>private</code>). Family property aapke bacchon ko milti hai, woh kahin bhi rahein (<code>protected</code>). Clubhouse sirf isi society ke residents ke liye hai (<code>internal</code> — same <b>assembly</b>, yaani same project/.dll).</p>\n<ul>\n<li><code>public</code> — sab ke liye.</li>\n<li><code>private</code> — sirf usi type ke andar.</li>\n<li><code>protected</code> — wahi type aur uske derived types (kisi bhi assembly mein).</li>\n<li><code>internal</code> — same assembly ka koi bhi code.</li>\n<li><code>protected internal</code> — same assembly <b>ya</b> kahin bhi derived types (zyada khula).</li>\n<li><code>private protected</code> (C# 7.2) — derived types <b>aur</b> woh bhi sirf same assembly mein (zyada band).</li>\n<li><code>file</code> (C# 11, sirf types ke liye) — sirf usi source file ke andar dikhta hai; source generators mein use hota hai.</li>\n</ul>\n<p><b>Defaults:</b> bina modifier ke top-level class/struct/interface <code>internal</code> hoti hai; class aur struct ke members <code>private</code>; interface members <code>public</code>; nested types <code>private</code>.</p>\n<p><b>TL tip:</b> sabse restrictive access se shuru karo aur zaroorat padne par hi kholo. Library mein classes ko <code>internal</code> rakhne se baad mein unhe badalna aasaan hota hai, consumers nahi tootte.</p>"
      },
      code: [
        {
          caption: {
            en: "All access modifiers in one place (imagine this file is in Billing.dll)",
            hi: "सारे access modifiers एक जगह (मान लो यह file Billing.dll में है)",
            hg: "Saare access modifiers ek jagah (maan lo yeh file Billing.dll mein hai)"
          },
          check: "compile",
          src: "// Fields are used here only to show the modifiers; real code would expose properties.\npublic class Invoice\n{\n    private decimal _amount;                  // only inside Invoice\n    protected string Number = \"\";             // Invoice + derived classes (any assembly)\n    internal int BranchCode;                  // any code in Billing.dll\n    protected internal string Notes = \"\";     // Billing.dll OR derived classes anywhere\n    private protected decimal Discount;       // derived classes, and only inside Billing.dll\n\n    public decimal Total => _amount - Discount;   // everyone\n    public void Add(decimal amount) => _amount += amount;\n}\n\npublic class GstInvoice : Invoice\n{\n    public void Prepare()\n    {\n        Number = \"GST-001\";    // ok: protected\n        Discount = 10m;        // ok: private protected, same assembly\n        BranchCode = 7;        // ok: internal, same assembly\n        // _amount = 5m;       // CS0122: private, not visible here\n    }\n}\n\nclass Helper { }               // no modifier on a top-level type = internal\nfile class FileOnlyHelper { }  // C# 11: visible only in this file"
        }
      ]
    },
    {
      id: "composition-vs-inheritance",
      depth: "detailed",
      title: {
        en: "Composition vs inheritance",
        hi: "Composition बनाम inheritance",
        hg: "Composition vs inheritance"
      },
      body: {
        en: "<p><b>Analogy — your mobile phone:</b> A phone does not <i>inherit</i> from a camera, a battery and a SIM. It <b>has</b> a camera, a battery and a SIM. Battery weak? Swap it. Changed operator? Swap the SIM. A kirana shop <b>has</b> a UPI QR code — tomorrow it can switch from one payment app to another without rebuilding the shop.</p>\n<ul>\n<li><b>Inheritance = \"is-a\"</b>: fixed at compile time; the child depends on the parent's internals. A change in the base can silently break children (the <b>fragile base class</b> problem). Mixing behaviours causes a <b>class explosion</b> (UpiSmsCheckout, UpiEmailCheckout, CardSmsCheckout, ...).</li>\n<li><b>Composition = \"has-a\"</b>: a class holds other objects (usually behind interfaces) and <b>delegates</b> work to them. Parts can be swapped, combined and mocked in unit tests.</li>\n<li>Classic advice from the Gang of Four book: <b>\"Favor object composition over class inheritance.\"</b></li>\n<li>ASP.NET Core <b>dependency injection</b> is composition: a service receives <code>IOrderRepository</code>, <code>ILogger&lt;T&gt;</code> etc. through its constructor.</li>\n</ul>\n<p><b>When inheritance is right:</b> a true, stable is-a relationship with a small family, or a framework base class designed for it (<code>ControllerBase</code>, <code>DbContext</code>, <code>BackgroundService</code>, custom <code>Exception</code> types).</p>\n<p><b>Rule of thumb:</b> if you inherit only to reuse code, compose instead.</p>\n<p><b>Analogy — a kirana shop counter:</b> the shop owner does not <i>become</i> a UPI app or an SMS service. The counter <b>has</b> a QR scanner and a phone that sends SMS. Change the scanner, keep the shop.</p>\n<p>With inheritance you would need <code>UpiSmsCheckout</code>, <code>UpiEmailCheckout</code>, <code>CardSmsCheckout</code>, <code>CardEmailCheckout</code> ... — 2 payment types × 2 message types = 4 classes, and it keeps multiplying. With composition you need <b>one</b> <code>CheckoutService</code> and plug in any <code>IPaymentGateway</code> + any <code>IMessageSender</code>.</p>\n<ul>\n<li>In ASP.NET Core you register the parts in DI (<code>builder.Services.AddScoped&lt;IPaymentGateway, UpiGateway&gt;()</code>) and the container composes the object for you.</li>\n<li>In unit tests you pass a fake or mock gateway — no real payment needed.</li>\n<li>This is also the base of patterns you will see later: <b>Strategy</b>, <b>Decorator</b>, and the <b>Dependency Inversion</b> principle (SOLID).</li>\n</ul>",
        hi: "<p><b>Analogy — आपका mobile phone:</b> Phone, camera, battery और SIM से <i>inherit</i> नहीं करता। Phone के पास camera, battery और SIM <b>होते हैं (has)</b>। Battery कमज़ोर? बदल दो। Operator बदला? SIM बदल दो। किराना दुकान के पास UPI QR code <b>होता है</b> — कल वो एक payment app से दूसरे पर जा सकती है, दुकान दोबारा बनाए बिना।</p>\n<ul>\n<li><b>Inheritance = \"is-a\"</b>: compile time पर fix; child, parent के अंदर की चीज़ों पर depend करता है। Base में बदलाव चुपचाप children को तोड़ सकता है (<b>fragile base class</b> problem)। Behaviours mix करने पर <b>class explosion</b> होता है (UpiSmsCheckout, UpiEmailCheckout, CardSmsCheckout, ...)।</li>\n<li><b>Composition = \"has-a\"</b>: class दूसरे objects रखती है (अक्सर interfaces के पीछे) और काम उन्हें <b>delegate</b> करती है। Parts बदल सकते हो, जोड़ सकते हो और unit tests में mock कर सकते हो।</li>\n<li>Gang of Four book की famous सलाह: <b>\"Favor object composition over class inheritance.\"</b></li>\n<li>ASP.NET Core <b>dependency injection</b> composition ही है: service को constructor से <code>IOrderRepository</code>, <code>ILogger&lt;T&gt;</code> वगैरह मिलते हैं।</li>\n</ul>\n<p><b>Inheritance कब सही है:</b> सच्चा, stable is-a relation और छोटी family, या ऐसी framework base class जो इसी के लिए बनी है (<code>ControllerBase</code>, <code>DbContext</code>, <code>BackgroundService</code>, custom <code>Exception</code> types)।</p>\n<p><b>Rule of thumb:</b> अगर सिर्फ़ code reuse के लिए inherit कर रहे हो, तो composition use करो।</p>\n<p><b>Analogy — किराना दुकान का counter:</b> दुकानदार UPI app या SMS service <i>नहीं बन</i> जाता। Counter के पास QR scanner और SMS भेजने वाला phone <b>होता है</b>। Scanner बदलो, दुकान वही रहती है।</p>\n<p>Inheritance से आपको <code>UpiSmsCheckout</code>, <code>UpiEmailCheckout</code>, <code>CardSmsCheckout</code>, <code>CardEmailCheckout</code> ... बनानी पड़तीं — 2 payment types × 2 message types = 4 classes, और यह बढ़ता ही जाता है। Composition से आपको <b>एक</b> <code>CheckoutService</code> चाहिए और उसमें कोई भी <code>IPaymentGateway</code> + कोई भी <code>IMessageSender</code> लगा दो।</p>\n<ul>\n<li>ASP.NET Core में आप parts को DI में register करते हो (<code>builder.Services.AddScoped&lt;IPaymentGateway, UpiGateway&gt;()</code>) और container आपके लिए object compose कर देता है।</li>\n<li>Unit tests में आप fake या mock gateway pass करते हो — असली payment की ज़रूरत नहीं।</li>\n<li>आगे आने वाले patterns की नींव भी यही है: <b>Strategy</b>, <b>Decorator</b>, और <b>Dependency Inversion</b> principle (SOLID)।</li>\n</ul>",
        hg: "<p><b>Analogy — aapka mobile phone:</b> Phone, camera, battery aur SIM se <i>inherit</i> nahi karta. Phone ke paas camera, battery aur SIM <b>hote hain (has)</b>. Battery kamzor? Badal do. Operator badla? SIM badal do. Kirana dukaan ke paas UPI QR code <b>hota hai</b> — kal woh ek payment app se doosre par ja sakti hai, dukaan dobara banaye bina.</p>\n<ul>\n<li><b>Inheritance = \"is-a\"</b>: compile time par fix; child, parent ke andar ki cheezon par depend karta hai. Base mein badlaav chupchaap children ko tod sakta hai (<b>fragile base class</b> problem). Behaviours mix karne par <b>class explosion</b> hota hai (UpiSmsCheckout, UpiEmailCheckout, CardSmsCheckout, ...).</li>\n<li><b>Composition = \"has-a\"</b>: class doosre objects rakhti hai (aksar interfaces ke peeche) aur kaam unhe <b>delegate</b> karti hai. Parts badal sakte ho, jod sakte ho aur unit tests mein mock kar sakte ho.</li>\n<li>Gang of Four book ki famous salaah: <b>\"Favor object composition over class inheritance.\"</b></li>\n<li>ASP.NET Core <b>dependency injection</b> composition hi hai: service ko constructor se <code>IOrderRepository</code>, <code>ILogger&lt;T&gt;</code> waghera milte hain.</li>\n</ul>\n<p><b>Inheritance kab sahi hai:</b> saccha, stable is-a relation aur chhoti family, ya aisi framework base class jo isi ke liye bani hai (<code>ControllerBase</code>, <code>DbContext</code>, <code>BackgroundService</code>, custom <code>Exception</code> types).</p>\n<p><b>Rule of thumb:</b> agar sirf code reuse ke liye inherit kar rahe ho, to composition use karo.</p>\n<p><b>Analogy — kirana dukaan ka counter:</b> dukaandaar UPI app ya SMS service <i>nahi ban</i> jaata. Counter ke paas QR scanner aur SMS bhejne wala phone <b>hota hai</b>. Scanner badlo, dukaan wahi rehti hai.</p>\n<p>Inheritance se aapko <code>UpiSmsCheckout</code>, <code>UpiEmailCheckout</code>, <code>CardSmsCheckout</code>, <code>CardEmailCheckout</code> ... banani padtin — 2 payment types × 2 message types = 4 classes, aur yeh badhta hi jaata hai. Composition se aapko <b>ek</b> <code>CheckoutService</code> chahiye aur usmein koi bhi <code>IPaymentGateway</code> + koi bhi <code>IMessageSender</code> laga do.</p>\n<ul>\n<li>ASP.NET Core mein aap parts ko DI mein register karte ho (<code>builder.Services.AddScoped&lt;IPaymentGateway, UpiGateway&gt;()</code>) aur container aapke liye object compose kar deta hai.</li>\n<li>Unit tests mein aap fake ya mock gateway pass karte ho — asli payment ki zaroorat nahi.</li>\n<li>Aage aane wale patterns ki neenv bhi yahi hai: <b>Strategy</b>, <b>Decorator</b>, aur <b>Dependency Inversion</b> principle (SOLID).</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "HAS-A: one CheckoutService, any gateway + any sender",
            hi: "HAS-A: एक CheckoutService, कोई भी gateway + कोई भी sender",
            hg: "HAS-A: ek CheckoutService, koi bhi gateway + koi bhi sender"
          },
          check: "run",
          expected: "UPI charged 499\nSMS: Paid 499. Thank you!\nCard charged 1200\nEmail: Paid 1200. Thank you!",
          src: "var upiShop = new CheckoutService(new UpiGateway(), new SmsSender());\nupiShop.Checkout(499);\n\nvar cardShop = new CheckoutService(new CardGateway(), new EmailSender());\ncardShop.Checkout(1200);\n\npublic interface IPaymentGateway { bool Charge(decimal amount); }\npublic interface IMessageSender { void Send(string text); }\n\npublic class UpiGateway : IPaymentGateway\n{\n    public bool Charge(decimal amount) { Console.WriteLine($\"UPI charged {amount}\"); return true; }\n}\n\npublic class CardGateway : IPaymentGateway\n{\n    public bool Charge(decimal amount) { Console.WriteLine($\"Card charged {amount}\"); return true; }\n}\n\npublic class SmsSender : IMessageSender\n{\n    public void Send(string text) => Console.WriteLine($\"SMS: {text}\");\n}\n\npublic class EmailSender : IMessageSender\n{\n    public void Send(string text) => Console.WriteLine($\"Email: {text}\");\n}\n\n// HAS-A: built from parts (injected through the primary constructor), not inherited from them\npublic class CheckoutService(IPaymentGateway gateway, IMessageSender sender)\n{\n    public void Checkout(decimal amount)\n    {\n        if (gateway.Charge(amount))\n            sender.Send($\"Paid {amount}. Thank you!\");\n    }\n}"
        }
      ]
    },
    {
      id: "whats-new",
      depth: "detailed",
      title: {
        en: "What is new in recent C# versions",
        hi: "हाल के C# versions में नया क्या है",
        hg: "Haal ke C# versions mein naya kya hai"
      },
      body: {
        en: "<p>Modern C# features you will meet in OOP code (current: <b>C# 14 / .NET 10 LTS</b>):</p>\n<ul>\n<li><b>C# 8</b> — default interface methods (needs .NET Core 3.0+, not .NET Framework).</li>\n<li><b>C# 9</b> — covariant return types: an override may return a more derived type.</li>\n<li><b>C# 11</b> — <code>required</code> members, <code>static abstract</code> members in interfaces, <code>file</code>-scoped types.</li>\n<li><b>C# 12</b> — primary constructors for classes and structs: <code>class OrderService(IOrderRepository repo)</code>.</li>\n<li><b>C# 14</b> — the <code>field</code> keyword inside property accessors (validate a value without declaring a backing field) and extension members (extension properties, not only extension methods).</li>\n</ul>\n<p><b>Next (as of Oct 2026):</b> .NET 11 (STS) is due in November 2026; .NET 10 stays the LTS.</p>",
        hi: "<p>OOP code में आपको ये modern C# features दिखेंगे (current: <b>C# 14 / .NET 10 LTS</b>):</p>\n<ul>\n<li><b>C# 8</b> — default interface methods (.NET Core 3.0+ चाहिए, .NET Framework में नहीं चलते)।</li>\n<li><b>C# 9</b> — covariant return types: override ज़्यादा derived type return कर सकता है।</li>\n<li><b>C# 11</b> — <code>required</code> members, interfaces में <code>static abstract</code> members, <code>file</code>-scoped types।</li>\n<li><b>C# 12</b> — classes और structs के लिए primary constructors: <code>class OrderService(IOrderRepository repo)</code>।</li>\n<li><b>C# 14</b> — property accessor के अंदर <code>field</code> keyword (बिना backing field लिखे value validate करो) और extension members (सिर्फ़ extension methods नहीं, extension properties भी)।</li>\n</ul>\n<p><b>आगे (Oct 2026 तक की जानकारी):</b> .NET 11 (STS) November 2026 में आने वाला है; .NET 10 ही LTS रहेगा।</p>",
        hg: "<p>OOP code mein aapko yeh modern C# features dikhenge (current: <b>C# 14 / .NET 10 LTS</b>):</p>\n<ul>\n<li><b>C# 8</b> — default interface methods (.NET Core 3.0+ chahiye, .NET Framework mein nahi chalte).</li>\n<li><b>C# 9</b> — covariant return types: override zyada derived type return kar sakta hai.</li>\n<li><b>C# 11</b> — <code>required</code> members, interfaces mein <code>static abstract</code> members, <code>file</code>-scoped types.</li>\n<li><b>C# 12</b> — classes aur structs ke liye primary constructors: <code>class OrderService(IOrderRepository repo)</code>.</li>\n<li><b>C# 14</b> — property accessor ke andar <code>field</code> keyword (bina backing field likhe value validate karo) aur extension members (sirf extension methods nahi, extension properties bhi).</li>\n</ul>\n<p><b>Aage (Oct 2026 tak ki jaankari):</b> .NET 11 (STS) November 2026 mein aane wala hai; .NET 10 hi LTS rahega.</p>"
      }
    }
  ],
  qa: [
    {
      id: "four-pillars",
      depth: "short",
      q: "What are the four pillars of OOP? Explain each with a real example.",
      answer: "Encapsulation, Abstraction, Inheritance and Polymorphism: hide data behind rule-checking methods, expose only what callers need, reuse a base class for a true is-a, and let one call behave differently per actual object.",
      meaning: {
        hi: "चार pillars: Encapsulation (data छुपाकर methods से rules लागू करो), Abstraction (caller को सिर्फ़ ज़रूरी चीज़ दिखाओ), Inheritance (is-a relation में base class reuse), Polymorphism (एक call, असली object के हिसाब से अलग behaviour)।",
        hg: "Chaar pillars: Encapsulation (data chhupakar methods se rules laagu karo), Abstraction (caller ko sirf zaroori cheez dikhao), Inheritance (is-a relation mein base class reuse), Polymorphism (ek call, asli object ke hisaab se alag behaviour)."
      },
      explain: {
        en: "<p>Use <b>one running example</b> — interviewers love it. A payment system:</p>\n<ul>\n<li><b>Encapsulation</b>: <code>BankAccount.Balance</code> has a private setter; only <code>Withdraw</code> can reduce it, and it checks the balance first.</li>\n<li><b>Abstraction</b>: the checkout code depends on <code>IPaymentGateway.Charge(amount)</code> and does not know whether it is UPI or card.</li>\n<li><b>Inheritance</b>: <code>SavingsAccount : BankAccount</code> reuses deposit/withdraw and adds interest.</li>\n<li><b>Polymorphism</b>: <code>gateway.Charge(500)</code> runs UPI or card logic depending on the object injected.</li>\n</ul>\n<p>Follow-up: \"Which pillar is most misused?\" — Inheritance. Teams build deep hierarchies just to reuse code; composition is usually better.</p>",
        hi: "<p><b>एक ही running example</b> use करो — interviewers को यह बहुत पसंद है। Payment system लो:</p>\n<ul>\n<li><b>Encapsulation</b>: <code>BankAccount.Balance</code> का setter private है; सिर्फ़ <code>Withdraw</code> उसे कम कर सकता है, और पहले balance check करता है।</li>\n<li><b>Abstraction</b>: checkout code <code>IPaymentGateway.Charge(amount)</code> पर depend करता है, उसे नहीं पता कि UPI है या card।</li>\n<li><b>Inheritance</b>: <code>SavingsAccount : BankAccount</code> deposit/withdraw reuse करता है और interest जोड़ता है।</li>\n<li><b>Polymorphism</b>: <code>gateway.Charge(500)</code> inject किए गए object के हिसाब से UPI या card logic चलाता है।</li>\n</ul>\n<p>Follow-up: \"कौन सा pillar सबसे ज़्यादा गलत use होता है?\" — Inheritance। Teams सिर्फ़ code reuse के लिए गहरी hierarchies बना देती हैं; composition अक्सर बेहतर है।</p>",
        hg: "<p><b>Ek hi running example</b> use karo — interviewers ko yeh bahut pasand hai. Payment system lo:</p>\n<ul>\n<li><b>Encapsulation</b>: <code>BankAccount.Balance</code> ka setter private hai; sirf <code>Withdraw</code> use kam kar sakta hai, aur pehle balance check karta hai.</li>\n<li><b>Abstraction</b>: checkout code <code>IPaymentGateway.Charge(amount)</code> par depend karta hai, use nahi pata ki UPI hai ya card.</li>\n<li><b>Inheritance</b>: <code>SavingsAccount : BankAccount</code> deposit/withdraw reuse karta hai aur interest jodta hai.</li>\n<li><b>Polymorphism</b>: <code>gateway.Charge(500)</code> inject kiye gaye object ke hisaab se UPI ya card logic chalata hai.</li>\n</ul>\n<p>Follow-up: \"Kaun sa pillar sabse zyada galat use hota hai?\" — Inheritance. Teams sirf code reuse ke liye gehri hierarchies bana deti hain; composition aksar behtar hai.</p>"
      }
    },
    {
      id: "abstract-vs-interface",
      depth: "short",
      q: "Abstract class vs interface — what is the difference, and when would you use which?",
      answer: "An abstract class is a partial base class with state, constructors and shared code, but you can inherit only one; an interface is a contract with no instance state, and a class can implement many. I use interfaces for contracts, DI and mocking, and an abstract class when closely related types share real code.",
      meaning: {
        hi: "Abstract class एक अधूरी base class है: इसमें state, constructors और shared code हो सकता है, पर inherit सिर्फ़ एक कर सकते हो। Interface एक contract है, instance state नहीं, और कई implement कर सकते हो — contracts, DI और mocking के लिए interface, और करीबी types में असली shared code के लिए abstract class।",
        hg: "Abstract class ek adhoori base class hai: ismein state, constructors aur shared code ho sakta hai, par inherit sirf ek kar sakte ho. Interface ek contract hai, instance state nahi, aur kai implement kar sakte ho — contracts, DI aur mocking ke liye interface, aur kareebi types mein asli shared code ke liye abstract class."
      },
      explain: {
        en: "<ul>\n<li><b>State</b>: abstract class can have instance fields; interface cannot.</li>\n<li><b>Constructors</b>: abstract class yes (usually <code>protected</code>); interface no.</li>\n<li><b>Count</b>: one base class, but any number of interfaces.</li>\n<li><b>Access</b>: abstract class members can be anything; interface members are public by default.</li>\n<li><b>Bodies</b>: since C# 8 interfaces can have default method bodies, mainly for versioning; they still cannot hold instance state.</li>\n<li><b>Value types</b>: a <code>struct</code> can implement interfaces but cannot inherit a class.</li>\n</ul>\n<p><b>TL angle:</b> services expose interfaces so they can be registered in DI and mocked in tests. Abstract bases are for frameworks and families: <code>BackgroundService</code>, <code>DbContext</code>, <code>ControllerBase</code>. Often you combine them: <code>IRepository&lt;T&gt;</code> + <code>RepositoryBase&lt;T&gt;</code>.</p>\n<p>Follow-up: \"Interfaces have method bodies now — so what is the difference?\" — still no instance fields or constructors, still multiple implementation, and the default body is only reachable through the interface type.</p>\n<p>Follow-up: \"Can an abstract class implement an interface without implementing all members?\" — Yes: it maps them to <code>abstract</code> members (<code>public abstract void Send(string msg);</code>) and the concrete children implement them.</p>",
        hi: "<ul>\n<li><b>State</b>: abstract class में instance fields हो सकते हैं; interface में नहीं।</li>\n<li><b>Constructors</b>: abstract class में हाँ (अक्सर <code>protected</code>); interface में नहीं।</li>\n<li><b>गिनती</b>: base class एक, पर interfaces कितने भी।</li>\n<li><b>Access</b>: abstract class के members कुछ भी हो सकते हैं; interface members by default public।</li>\n<li><b>Bodies</b>: C# 8 से interfaces में default method bodies हो सकती हैं, मुख्य रूप से versioning के लिए; instance state अब भी नहीं रख सकते।</li>\n<li><b>Value types</b>: <code>struct</code> interfaces implement कर सकता है पर class inherit नहीं कर सकता।</li>\n</ul>\n<p><b>TL angle:</b> services interfaces expose करती हैं ताकि DI में register हो सकें और tests में mock हो सकें। Abstract bases frameworks और families के लिए हैं: <code>BackgroundService</code>, <code>DbContext</code>, <code>ControllerBase</code>। अक्सर दोनों साथ: <code>IRepository&lt;T&gt;</code> + <code>RepositoryBase&lt;T&gt;</code>।</p>\n<p>Follow-up: \"अब interfaces में भी method bodies हैं — तो फ़र्क क्या है?\" — अब भी instance fields या constructors नहीं, अब भी multiple implementation, और default body सिर्फ़ interface type से मिलती है।</p>\n<p>Follow-up: \"क्या abstract class interface implement कर सकती है बिना सारे members implement किए?\" — हाँ: वो उन्हें <code>abstract</code> members पर map कर देती है (<code>public abstract void Send(string msg);</code>) और concrete children उन्हें implement करते हैं।</p>",
        hg: "<ul>\n<li><b>State</b>: abstract class mein instance fields ho sakte hain; interface mein nahi.</li>\n<li><b>Constructors</b>: abstract class mein haan (aksar <code>protected</code>); interface mein nahi.</li>\n<li><b>Ginti</b>: base class ek, par interfaces kitne bhi.</li>\n<li><b>Access</b>: abstract class ke members kuch bhi ho sakte hain; interface members by default public.</li>\n<li><b>Bodies</b>: C# 8 se interfaces mein default method bodies ho sakti hain, mukhya roop se versioning ke liye; instance state ab bhi nahi rakh sakte.</li>\n<li><b>Value types</b>: <code>struct</code> interfaces implement kar sakta hai par class inherit nahi kar sakta.</li>\n</ul>\n<p><b>TL angle:</b> services interfaces expose karti hain taaki DI mein register ho sakein aur tests mein mock ho sakein. Abstract bases frameworks aur families ke liye hain: <code>BackgroundService</code>, <code>DbContext</code>, <code>ControllerBase</code>. Aksar dono saath: <code>IRepository&lt;T&gt;</code> + <code>RepositoryBase&lt;T&gt;</code>.</p>\n<p>Follow-up: \"Ab interfaces mein bhi method bodies hain — to farak kya hai?\" — ab bhi instance fields ya constructors nahi, ab bhi multiple implementation, aur default body sirf interface type se milti hai.</p>\n<p>Follow-up: \"Kya abstract class interface implement kar sakti hai bina saare members implement kiye?\" — Haan: woh unhe <code>abstract</code> members par map kar deti hai (<code>public abstract void Send(string msg);</code>) aur concrete children unhe implement karte hain.</p>"
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
        en: "<ul>\n<li><b>Fragile base class</b>: someone changes a protected method in the base; five derived classes behave differently, and nobody notices until production.</li>\n<li><b>Class explosion</b>: 3 payment types × 3 notification types with inheritance = 9 classes; with composition = 3 + 3 small classes and one service.</li>\n<li><b>Testability</b>: a composed dependency (<code>IPaymentGateway</code>) can be mocked; a base class you inherit from cannot be replaced in a test.</li>\n<li><b>Runtime flexibility</b>: composition can pick the part at runtime (config, feature flag, DI); inheritance is fixed when you compile.</li>\n</ul>\n<p>Inheritance is not bad — use it for a real is-a with a stable base: custom exceptions (<code>class OrderNotFoundException : Exception</code>), <code>ControllerBase</code>, <code>BackgroundService</code>.</p>\n<p>Follow-up: \"Give an example from your project.\" Prepare one: e.g. a notification service that receives <code>IEnumerable&lt;INotificationChannel&gt;</code> from DI instead of an inheritance tree of notifier classes.</p>",
        hi: "<ul>\n<li><b>Fragile base class</b>: किसी ने base का एक protected method बदल दिया; पाँच derived classes अलग behave करने लगीं, और production तक किसी को पता नहीं चला।</li>\n<li><b>Class explosion</b>: inheritance से 3 payment types × 3 notification types = 9 classes; composition से 3 + 3 छोटी classes और एक service।</li>\n<li><b>Testability</b>: composed dependency (<code>IPaymentGateway</code>) mock हो सकती है; जिस base class से inherit किया उसे test में बदल नहीं सकते।</li>\n<li><b>Runtime flexibility</b>: composition में part runtime पर चुन सकते हो (config, feature flag, DI); inheritance compile करते ही fix हो जाता है।</li>\n</ul>\n<p>Inheritance बुरा नहीं है — सच्चे is-a और stable base के लिए use करो: custom exceptions (<code>class OrderNotFoundException : Exception</code>), <code>ControllerBase</code>, <code>BackgroundService</code>।</p>\n<p>Follow-up: \"अपने project से example दो।\" एक तैयार रखो: जैसे notification service जो notifier classes के inheritance tree की जगह DI से <code>IEnumerable&lt;INotificationChannel&gt;</code> लेती है।</p>",
        hg: "<ul>\n<li><b>Fragile base class</b>: kisi ne base ka ek protected method badal diya; paanch derived classes alag behave karne lagin, aur production tak kisi ko pata nahi chala.</li>\n<li><b>Class explosion</b>: inheritance se 3 payment types × 3 notification types = 9 classes; composition se 3 + 3 chhoti classes aur ek service.</li>\n<li><b>Testability</b>: composed dependency (<code>IPaymentGateway</code>) mock ho sakti hai; jis base class se inherit kiya use test mein badal nahi sakte.</li>\n<li><b>Runtime flexibility</b>: composition mein part runtime par chun sakte ho (config, feature flag, DI); inheritance compile karte hi fix ho jaata hai.</li>\n</ul>\n<p>Inheritance bura nahi hai — sacche is-a aur stable base ke liye use karo: custom exceptions (<code>class OrderNotFoundException : Exception</code>), <code>ControllerBase</code>, <code>BackgroundService</code>.</p>\n<p>Follow-up: \"Apne project se example do.\" Ek taiyaar rakho: jaise notification service jo notifier classes ke inheritance tree ki jagah DI se <code>IEnumerable&lt;INotificationChannel&gt;</code> leti hai.</p>"
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
        en: "<p><b>Overloading rules:</b></p>\n<ul>\n<li>Parameters must differ in number, type or order (or <code>ref</code>/<code>out</code>/<code>in</code> vs by-value).</li>\n<li>Return type alone is not enough (CS0111). <code>ref</code> vs <code>out</code> alone is not enough either.</li>\n<li>The compiler picks using the <b>declared</b> types of the arguments — see the \"overload vs override\" puzzle.</li>\n</ul>\n<p><b>Overriding rules:</b></p>\n<ul>\n<li>Base method must be <code>virtual</code>, <code>abstract</code> or already <code>override</code>.</li>\n<li>Same name and parameters, same access level. Since C# 9 an override may return a more derived type (covariant return).</li>\n<li>Static, private and non-virtual methods cannot be overridden.</li>\n</ul>\n<p>Follow-up: \"Can we overload by return type?\" No. \"Can we override a static method?\" No — static members belong to the type, not the object.</p>",
        hi: "<p><b>Overloading के rules:</b></p>\n<ul>\n<li>Parameters गिनती, type या order में अलग होने चाहिए (या <code>ref</code>/<code>out</code>/<code>in</code> बनाम by-value)।</li>\n<li>सिर्फ़ return type अलग होना काफ़ी नहीं (CS0111)। सिर्फ़ <code>ref</code> बनाम <code>out</code> भी काफ़ी नहीं।</li>\n<li>Compiler arguments के <b>declared</b> types देखकर चुनता है — \"overload vs override\" puzzle देखो।</li>\n</ul>\n<p><b>Overriding के rules:</b></p>\n<ul>\n<li>Base method <code>virtual</code>, <code>abstract</code> या पहले से <code>override</code> होना चाहिए।</li>\n<li>Same नाम और parameters, same access level। C# 9 से override ज़्यादा derived type return कर सकता है (covariant return)।</li>\n<li>Static, private और non-virtual methods override नहीं हो सकते।</li>\n</ul>\n<p>Follow-up: \"क्या return type से overload कर सकते हैं?\" नहीं। \"क्या static method override कर सकते हैं?\" नहीं — static members type के होते हैं, object के नहीं।</p>",
        hg: "<p><b>Overloading ke rules:</b></p>\n<ul>\n<li>Parameters ginti, type ya order mein alag hone chahiye (ya <code>ref</code>/<code>out</code>/<code>in</code> banaam by-value).</li>\n<li>Sirf return type alag hona kaafi nahi (CS0111). Sirf <code>ref</code> banaam <code>out</code> bhi kaafi nahi.</li>\n<li>Compiler arguments ke <b>declared</b> types dekhkar chunta hai — \"overload vs override\" puzzle dekho.</li>\n</ul>\n<p><b>Overriding ke rules:</b></p>\n<ul>\n<li>Base method <code>virtual</code>, <code>abstract</code> ya pehle se <code>override</code> hona chahiye.</li>\n<li>Same naam aur parameters, same access level. C# 9 se override zyada derived type return kar sakta hai (covariant return).</li>\n<li>Static, private aur non-virtual methods override nahi ho sakte.</li>\n</ul>\n<p>Follow-up: \"Kya return type se overload kar sakte hain?\" Nahi. \"Kya static method override kar sakte hain?\" Nahi — static members type ke hote hain, object ke nahi.</p>"
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
        en: "<p><code>Animal a = new Dog();</code></p>\n<ul>\n<li>If <code>Dog</code> <b>overrides</b> <code>Speak()</code>: <code>a.Speak()</code> → Dog's version (the object is a Dog).</li>\n<li>If <code>Dog</code> declares <code>new void Move()</code>: <code>a.Move()</code> → Animal's version (the reference is <code>Animal</code>); <code>((Dog)a).Move()</code> → Dog's version.</li>\n</ul>\n<p>Hiding without writing <code>new</code> still compiles, with a warning: CS0108 if the base member is non-virtual, CS0114 if it is <code>virtual</code>. <code>new</code> just says \"I did this on purpose\". Watch CS0114 closely: if you forget <code>override</code>, the method silently hides, so base references still call the base version.</p>\n<p><b>TL angle:</b> in code review, <code>new</code> on a method is a red flag — callers using the base type get different behaviour from callers using the derived type. Accept it only when you cannot change a third-party base class.</p>",
        hi: "<p><code>Animal a = new Dog();</code></p>\n<ul>\n<li>अगर <code>Dog</code> ने <code>Speak()</code> को <b>override</b> किया: <code>a.Speak()</code> → Dog का version (object Dog है)।</li>\n<li>अगर <code>Dog</code> ने <code>new void Move()</code> लिखा: <code>a.Move()</code> → Animal का version (reference <code>Animal</code> है); <code>((Dog)a).Move()</code> → Dog का version।</li>\n</ul>\n<p><code>new</code> लिखे बिना hide करो तो भी code compile होता है, पर warning आती है: base member non-virtual हो तो CS0108, <code>virtual</code> हो तो CS0114। <code>new</code> बस बताता है कि \"मैंने यह जानबूझकर किया\"। CS0114 पर ख़ास ध्यान दो: <code>override</code> लिखना भूल गए तो method चुपचाप hide कर देता है, और base references से base version ही चलता है।</p>\n<p><b>TL angle:</b> code review में method पर <code>new</code> एक red flag है — base type से call करने वालों को अलग behaviour मिलता है और derived type से call करने वालों को अलग। इसे तभी accept करो जब third-party base class बदल नहीं सकते।</p>",
        hg: "<p><code>Animal a = new Dog();</code></p>\n<ul>\n<li>Agar <code>Dog</code> ne <code>Speak()</code> ko <b>override</b> kiya: <code>a.Speak()</code> → Dog ka version (object Dog hai).</li>\n<li>Agar <code>Dog</code> ne <code>new void Move()</code> likha: <code>a.Move()</code> → Animal ka version (reference <code>Animal</code> hai); <code>((Dog)a).Move()</code> → Dog ka version.</li>\n</ul>\n<p><code>new</code> likhe bina hide karo to bhi code compile hota hai, par warning aati hai: base member non-virtual ho to CS0108, <code>virtual</code> ho to CS0114. <code>new</code> bas batata hai ki \"maine yeh jaanboojhkar kiya\". CS0114 par khaas dhyaan do: <code>override</code> likhna bhool gaye to method chupchaap hide kar deta hai, aur base references se base version hi chalta hai.</p>\n<p><b>TL angle:</b> code review mein method par <code>new</code> ek red flag hai — base type se call karne walon ko alag behaviour milta hai aur derived type se call karne walon ko alag. Ise tabhi accept karo jab third-party base class badal nahi sakte.</p>"
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
        en: "<p><b>Diamond problem:</b> <code>B</code> and <code>C</code> both inherit <code>A</code> and both override <code>Print()</code>. If <code>D</code> could inherit both, which <code>Print()</code> should <code>D</code> get? Which copy of <code>A</code>'s fields? C# avoids the question by allowing one base class.</p>\n<ul>\n<li>A class: one base class + any number of interfaces: <code>class SalesReport : ReportBase, IExportable, IDisposable</code>.</li>\n<li>An interface can extend many interfaces: <code>interface IReadWrite : IReader, IWriter</code>.</li>\n<li>A <code>struct</code> cannot inherit anything (except implicitly from <code>ValueType</code>) but can implement interfaces.</li>\n<li>With default interface methods a diamond can appear between interfaces. The compiler then requires one most specific implementation; if it is ambiguous you get a compile error and must implement the member yourself.</li>\n</ul>",
        hi: "<p><b>Diamond problem:</b> <code>B</code> और <code>C</code> दोनों <code>A</code> से inherit करते हैं और दोनों <code>Print()</code> override करते हैं। अगर <code>D</code> दोनों से inherit कर सके, तो <code>D</code> को कौन सा <code>Print()</code> मिले? <code>A</code> के fields की कौन सी copy? C# एक base class allow करके यह सवाल ही ख़त्म कर देता है।</p>\n<ul>\n<li>Class: एक base class + कितने भी interfaces: <code>class SalesReport : ReportBase, IExportable, IDisposable</code>।</li>\n<li>Interface कई interfaces को extend कर सकता है: <code>interface IReadWrite : IReader, IWriter</code>।</li>\n<li><code>struct</code> कुछ inherit नहीं कर सकता (implicitly <code>ValueType</code> के अलावा) पर interfaces implement कर सकता है।</li>\n<li>Default interface methods के साथ interfaces के बीच diamond बन सकता है। तब compiler को एक most specific implementation चाहिए; अगर ambiguous है तो compile error आता है और आपको वो member ख़ुद implement करना पड़ता है।</li>\n</ul>",
        hg: "<p><b>Diamond problem:</b> <code>B</code> aur <code>C</code> dono <code>A</code> se inherit karte hain aur dono <code>Print()</code> override karte hain. Agar <code>D</code> dono se inherit kar sake, to <code>D</code> ko kaun sa <code>Print()</code> mile? <code>A</code> ke fields ki kaun si copy? C# ek base class allow karke yeh sawaal hi khatam kar deta hai.</p>\n<ul>\n<li>Class: ek base class + kitne bhi interfaces: <code>class SalesReport : ReportBase, IExportable, IDisposable</code>.</li>\n<li>Interface kai interfaces ko extend kar sakta hai: <code>interface IReadWrite : IReader, IWriter</code>.</li>\n<li><code>struct</code> kuch inherit nahi kar sakta (implicitly <code>ValueType</code> ke alawa) par interfaces implement kar sakta hai.</li>\n<li>Default interface methods ke saath interfaces ke beech diamond ban sakta hai. Tab compiler ko ek most specific implementation chahiye; agar ambiguous hai to compile error aata hai aur aapko woh member khud implement karna padta hai.</li>\n</ul>"
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
        en: "<p><b>Car analogy:</b> steering, brake and accelerator are the <b>abstraction</b> — a simple interface for driving. The engine is sealed under the bonnet, and you can change speed only through the accelerator — that is <b>encapsulation</b>.</p>\n<ul>\n<li>Abstraction tools: interfaces, abstract classes, small public methods with clear names.</li>\n<li>Encapsulation tools: <code>private</code> fields, <code>private set</code>/<code>init</code>, validation in methods and constructors, returning read-only views (<code>IReadOnlyList&lt;T&gt;</code>) instead of the inner <code>List&lt;T&gt;</code>.</li>\n</ul>\n<p>Follow-up: \"Is a class with public get/set properties encapsulated?\" — Only partly. Anyone can put it into an invalid state. For domain objects with rules, use private setters and methods.</p>",
        hi: "<p><b>Car analogy:</b> steering, brake और accelerator <b>abstraction</b> हैं — गाड़ी चलाने का simple interface। Engine bonnet के नीचे बंद है, और speed सिर्फ़ accelerator से बदल सकते हो — यह <b>encapsulation</b> है।</p>\n<ul>\n<li>Abstraction के tools: interfaces, abstract classes, साफ़ नाम वाले छोटे public methods।</li>\n<li>Encapsulation के tools: <code>private</code> fields, <code>private set</code>/<code>init</code>, methods और constructors में validation, अंदर की <code>List&lt;T&gt;</code> की जगह read-only view (<code>IReadOnlyList&lt;T&gt;</code>) return करना।</li>\n</ul>\n<p>Follow-up: \"Public get/set properties वाली class encapsulated है?\" — थोड़ी-सी ही। कोई भी उसे invalid state में डाल सकता है। Rules वाले domain objects के लिए private setters और methods use करो।</p>",
        hg: "<p><b>Car analogy:</b> steering, brake aur accelerator <b>abstraction</b> hain — gaadi chalane ka simple interface. Engine bonnet ke neeche band hai, aur speed sirf accelerator se badal sakte ho — yeh <b>encapsulation</b> hai.</p>\n<ul>\n<li>Abstraction ke tools: interfaces, abstract classes, saaf naam wale chhote public methods.</li>\n<li>Encapsulation ke tools: <code>private</code> fields, <code>private set</code>/<code>init</code>, methods aur constructors mein validation, andar ki <code>List&lt;T&gt;</code> ki jagah read-only view (<code>IReadOnlyList&lt;T&gt;</code>) return karna.</li>\n</ul>\n<p>Follow-up: \"Public get/set properties wali class encapsulated hai?\" — thodi-si hi. Koi bhi use invalid state mein daal sakta hai. Rules wale domain objects ke liye private setters aur methods use karo.</p>"
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
        en: "<p>The two that confuse everyone:</p>\n<ul>\n<li><code>protected internal</code> = <b>OR</b>: same assembly, <i>or</i> a derived class in any assembly.</li>\n<li><code>private protected</code> = <b>AND</b>: a derived class, <i>and</i> only inside the same assembly.</li>\n</ul>\n<p>Assembly = one compiled project (.dll/.exe). <code>InternalsVisibleTo</code> can open <code>internal</code> members to another assembly — commonly the unit-test project.</p>\n<p><b>TL angle:</b> least privilege. Default to <code>private</code>/<code>internal</code>; make something <code>public</code> only when another project really needs it, because every public member is a promise you must keep.</p>",
        hi: "<p>दो modifiers जो सबको confuse करते हैं:</p>\n<ul>\n<li><code>protected internal</code> = <b>OR (या)</b>: same assembly, <i>या</i> किसी भी assembly में derived class।</li>\n<li><code>private protected</code> = <b>AND (और)</b>: derived class, <i>और</i> वो भी सिर्फ़ same assembly में।</li>\n</ul>\n<p>Assembly = एक compiled project (.dll/.exe)। <code>InternalsVisibleTo</code> से <code>internal</code> members दूसरी assembly को दिखा सकते हो — अक्सर unit-test project को।</p>\n<p><b>TL angle:</b> least privilege। Default में <code>private</code>/<code>internal</code> रखो; <code>public</code> तभी करो जब दूसरे project को सच में ज़रूरत हो, क्योंकि हर public member एक वादा है जिसे निभाना पड़ता है।</p>",
        hg: "<p>Do modifiers jo sabko confuse karte hain:</p>\n<ul>\n<li><code>protected internal</code> = <b>OR (ya)</b>: same assembly, <i>ya</i> kisi bhi assembly mein derived class.</li>\n<li><code>private protected</code> = <b>AND (aur)</b>: derived class, <i>aur</i> woh bhi sirf same assembly mein.</li>\n</ul>\n<p>Assembly = ek compiled project (.dll/.exe). <code>InternalsVisibleTo</code> se <code>internal</code> members doosri assembly ko dikha sakte ho — aksar unit-test project ko.</p>\n<p><b>TL angle:</b> least privilege. Default mein <code>private</code>/<code>internal</code> rakho; <code>public</code> tabhi karo jab doosre project ko sach mein zaroorat ho, kyunki har public member ek waada hai jise nibhana padta hai.</p>"
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
        en: "<ul>\n<li>Needs runtime support: .NET Core 3.0+ / .NET 5+. Not available on .NET Framework.</li>\n<li>A class that implements the member itself replaces the default.</li>\n<li>The class does not \"inherit\" the default as its own member: <code>new Hindi().Bye()</code> fails (CS1061); <code>((IGreeter)new Hindi()).Bye()</code> works. Inside the class you call it with <code>((IGreeter)this).Bye()</code>.</li>\n<li>Interfaces may also contain <code>static</code> members and <code>private</code> helper methods (C# 8) and <code>static abstract</code> members (C# 11).</li>\n</ul>\n<p><b>TL angle:</b> treat default methods as a <b>versioning tool</b> for shared/public interfaces, not as a way to put business logic into interfaces. See the \"default interface method\" puzzle.</p>",
        hi: "<ul>\n<li>Runtime support चाहिए: .NET Core 3.0+ / .NET 5+। .NET Framework पर available नहीं।</li>\n<li>जो class वो member ख़ुद implement करती है, उसका version default की जगह ले लेता है।</li>\n<li>Class default को अपना member बनाकर \"inherit\" नहीं करती: <code>new Hindi().Bye()</code> fail होगा (CS1061); <code>((IGreeter)new Hindi()).Bye()</code> चलेगा। Class के अंदर से <code>((IGreeter)this).Bye()</code> से call करो।</li>\n<li>Interfaces में <code>static</code> members और <code>private</code> helper methods (C# 8) और <code>static abstract</code> members (C# 11) भी हो सकते हैं।</li>\n</ul>\n<p><b>TL angle:</b> default methods को shared/public interfaces के लिए <b>versioning tool</b> मानो, interfaces में business logic डालने का तरीका नहीं। \"default interface method\" puzzle देखो।</p>",
        hg: "<ul>\n<li>Runtime support chahiye: .NET Core 3.0+ / .NET 5+. .NET Framework par available nahi.</li>\n<li>Jo class woh member khud implement karti hai, uska version default ki jagah le leta hai.</li>\n<li>Class default ko apna member banakar \"inherit\" nahi karti: <code>new Hindi().Bye()</code> fail hoga (CS1061); <code>((IGreeter)new Hindi()).Bye()</code> chalega. Class ke andar se <code>((IGreeter)this).Bye()</code> se call karo.</li>\n<li>Interfaces mein <code>static</code> members aur <code>private</code> helper methods (C# 8) aur <code>static abstract</code> members (C# 11) bhi ho sakte hain.</li>\n</ul>\n<p><b>TL angle:</b> default methods ko shared/public interfaces ke liye <b>versioning tool</b> maano, interfaces mein business logic daalne ka tareeka nahi. \"default interface method\" puzzle dekho.</p>"
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
        en: "<ul>\n<li>Examples in .NET: <code>string</code> is sealed; every <code>struct</code> is implicitly sealed.</li>\n<li>A sealed class cannot declare <b>new</b> virtual members (CS0549), and a class cannot be both <code>abstract</code> and <code>sealed</code> (CS0418). A <code>static</code> class is compiled as abstract + sealed in IL.</li>\n<li><b>Performance</b>: when the JIT knows the exact type, it can devirtualize and inline calls; type checks (<code>is</code>/casts) against sealed types are cheaper too.</li>\n<li>The .NET analyzer <b>CA1852</b> suggests sealing internal types that have no subtypes.</li>\n</ul>\n<p><b>TL angle:</b> unsealing later is a non-breaking change; sealing a public class later is breaking. Many teams seal application classes by default, and CA1852 flags internal types that could be sealed. For public library types it is a deliberate trade-off: the .NET Framework Design Guidelines advise against sealing without a good reason, while Joshua Bloch (<i>Effective Java</i>) says \"design and document for inheritance or else prohibit it\". Either way, decide on purpose.</p>",
        hi: "<ul>\n<li>.NET में examples: <code>string</code> sealed है; हर <code>struct</code> implicitly sealed होता है।</li>\n<li>Sealed class <b>नए</b> virtual members declare नहीं कर सकती (CS0549), और class एक साथ <code>abstract</code> और <code>sealed</code> नहीं हो सकती (CS0418)। <code>static</code> class IL में abstract + sealed बनकर compile होती है।</li>\n<li><b>Performance</b>: जब JIT को exact type पता होता है, तो वो calls को devirtualize और inline कर सकता है; sealed types पर type checks (<code>is</code>/casts) भी सस्ते होते हैं।</li>\n<li>.NET analyzer <b>CA1852</b> सुझाव देता है कि जिन internal types के subtypes नहीं हैं, उन्हें seal करो।</li>\n</ul>\n<p><b>TL angle:</b> बाद में unseal करना non-breaking change है; public class को बाद में seal करना breaking है। कई teams application classes को default में seal करती हैं, और CA1852 उन internal types को flag करता है जिन्हें seal किया जा सकता है। Public library types के लिए यह सोच-समझकर लिया गया trade-off है: .NET Framework Design Guidelines बिना ठोस वजह seal न करने की सलाह देती हैं, जबकि Joshua Bloch (<i>Effective Java</i>) कहते हैं \"inheritance के लिए design और document करो, वरना उसे रोक दो\"। जो भी चुनो, जानबूझकर चुनो।</p>",
        hg: "<ul>\n<li>.NET mein examples: <code>string</code> sealed hai; har <code>struct</code> implicitly sealed hota hai.</li>\n<li>Sealed class <b>naye</b> virtual members declare nahi kar sakti (CS0549), aur class ek saath <code>abstract</code> aur <code>sealed</code> nahi ho sakti (CS0418). <code>static</code> class IL mein abstract + sealed bankar compile hoti hai.</li>\n<li><b>Performance</b>: jab JIT ko exact type pata hota hai, to woh calls ko devirtualize aur inline kar sakta hai; sealed types par type checks (<code>is</code>/casts) bhi saste hote hain.</li>\n<li>.NET analyzer <b>CA1852</b> sujhaav deta hai ki jin internal types ke subtypes nahi hain, unhe seal karo.</li>\n</ul>\n<p><b>TL angle:</b> baad mein unseal karna non-breaking change hai; public class ko baad mein seal karna breaking hai. Kai teams application classes ko default mein seal karti hain, aur CA1852 un internal types ko flag karta hai jinhe seal kiya ja sakta hai. Public library types ke liye yeh soch-samajhkar liya gaya trade-off hai: .NET Framework Design Guidelines bina thos wajah seal na karne ki salaah deti hain, jabki Joshua Bloch (<i>Effective Java</i>) kehte hain \"inheritance ke liye design aur document karo, warna use rok do\". Jo bhi chuno, jaanboojhkar chuno.</p>"
      }
    },
    {
      id: "static-constructor",
      depth: "detailed",
      q: "What is a static constructor? When does it run, and what happens if it throws?",
      answer: "It initializes a type's static data; it has no parameters or modifiers, and the runtime runs it once, before the first instance or static member access. If it throws, you get TypeInitializationException and the type stays unusable.",
      meaning: {
        hi: "Static constructor type का static data initialize करता है। इसमें कोई parameter या access modifier नहीं होता, आप इसे call नहीं कर सकते, और runtime इसे सिर्फ़ एक बार चलाता है — पहला object बनने या कोई static member use होने से पहले। अगर यह exception फेंके, तो TypeInitializationException आता है और type आगे use नहीं हो पाता।",
        hg: "Static constructor type ka static data initialize karta hai. Ismein koi parameter ya access modifier nahi hota, aap ise call nahi kar sakte, aur runtime ise sirf ek baar chalata hai — pehla object banne ya koi static member use hone se pehle. Agar yeh exception phenke, to TypeInitializationException aata hai aur type aage use nahi ho paata."
      },
      explain: {
        en: "<ul>\n<li>The runtime makes it thread-safe: even if 10 threads touch the type together, it runs once.</li>\n<li>Good for: loading a lookup table, setting up a static cache. Avoid slow I/O or anything that can fail — a failure poisons the type for the whole process.</li>\n<li>Without an explicit static constructor, static field initializers may run at a time the runtime chooses (the type is marked <code>beforefieldinit</code>). Adding a static constructor makes the timing exact.</li>\n<li>With inheritance, <code>new Derived()</code> first triggers <code>Derived</code>'s static constructor, then <code>Base</code>'s (when the base instance constructor runs) — see the puzzles.</li>\n</ul>\n<p><b>TL angle:</b> in ASP.NET Core prefer DI singletons or options over heavy static constructors — easier to test and to configure.</p>",
        hi: "<ul>\n<li>Runtime इसे thread-safe बनाता है: 10 threads एक साथ type को touch करें, तब भी यह एक ही बार चलता है।</li>\n<li>किसके लिए अच्छा: lookup table load करना, static cache setup करना। Slow I/O या fail हो सकने वाला काम मत डालो — एक failure पूरे process के लिए type को ख़राब कर देता है।</li>\n<li>Explicit static constructor न हो तो static field initializers उस समय चल सकते हैं जो runtime चुने (type <code>beforefieldinit</code> mark होता है)। Static constructor जोड़ने से timing exact हो जाती है।</li>\n<li>Inheritance में <code>new Derived()</code> पहले <code>Derived</code> का static constructor चलाता है, फिर <code>Base</code> का (जब base instance constructor चलता है) — puzzles देखो।</li>\n</ul>\n<p><b>TL angle:</b> ASP.NET Core में भारी static constructors की जगह DI singletons या options use करो — test और configure करना आसान है।</p>",
        hg: "<ul>\n<li>Runtime ise thread-safe banata hai: 10 threads ek saath type ko touch karein, tab bhi yeh ek hi baar chalta hai.</li>\n<li>Kiske liye accha: lookup table load karna, static cache setup karna. Slow I/O ya fail ho sakne wala kaam mat daalo — ek failure poore process ke liye type ko kharaab kar deta hai.</li>\n<li>Explicit static constructor na ho to static field initializers us samay chal sakte hain jo runtime chune (type <code>beforefieldinit</code> mark hota hai). Static constructor jodne se timing exact ho jaati hai.</li>\n<li>Inheritance mein <code>new Derived()</code> pehle <code>Derived</code> ka static constructor chalata hai, phir <code>Base</code> ka (jab base instance constructor chalta hai) — puzzles dekho.</li>\n</ul>\n<p><b>TL angle:</b> ASP.NET Core mein bhaari static constructors ki jagah DI singletons ya options use karo — test aur configure karna aasaan hai.</p>"
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
        en: "<ul>\n<li><b>Singleton</b>: private constructor + one static instance. <code>Lazy&lt;T&gt;</code> makes it lazy and thread-safe.</li>\n<li><b>Factory method</b>: <code>Money.FromRupees(250)</code> reads better than <code>new Money(250)</code> and can validate, cache or return a subtype.</li>\n<li>For a helper with only static members, prefer a <code>static class</code> — the compiler then blocks instances for you.</li>\n</ul>\n<p><b>TL angle:</b> in ASP.NET Core, prefer <code>builder.Services.AddSingleton(TimeProvider.System)</code> over a hand-written Singleton — same \"one instance\", but tests can swap in a fake (e.g. <code>FakeTimeProvider</code>).</p>",
        hi: "<ul>\n<li><b>Singleton</b>: private constructor + एक static instance। <code>Lazy&lt;T&gt;</code> इसे lazy और thread-safe बनाता है।</li>\n<li><b>Factory method</b>: <code>Money.FromRupees(250)</code> पढ़ने में <code>new Money(250)</code> से बेहतर है और validate, cache या subtype return कर सकता है।</li>\n<li>सिर्फ़ static members वाले helper के लिए <code>static class</code> बेहतर है — तब compiler ख़ुद instances रोक देता है।</li>\n</ul>\n<p><b>TL angle:</b> ASP.NET Core में hand-written Singleton की जगह <code>builder.Services.AddSingleton(TimeProvider.System)</code> use करो — \"एक ही instance\" वही है, पर tests में fake (जैसे <code>FakeTimeProvider</code>) से बदला जा सकता है।</p>",
        hg: "<ul>\n<li><b>Singleton</b>: private constructor + ek static instance. <code>Lazy&lt;T&gt;</code> ise lazy aur thread-safe banata hai.</li>\n<li><b>Factory method</b>: <code>Money.FromRupees(250)</code> padhne mein <code>new Money(250)</code> se behtar hai aur validate, cache ya subtype return kar sakta hai.</li>\n<li>Sirf static members wale helper ke liye <code>static class</code> behtar hai — tab compiler khud instances rok deta hai.</li>\n</ul>\n<p><b>TL angle:</b> ASP.NET Core mein hand-written Singleton ki jagah <code>builder.Services.AddSingleton(TimeProvider.System)</code> use karo — \"ek hi instance\" wahi hai, par tests mein fake (jaise <code>FakeTimeProvider</code>) se badla ja sakta hai.</p>"
      },
      code: [
        {
          caption: {
            en: "Private constructors: Singleton with Lazy&lt;T&gt; and a validating factory",
            hi: "Private constructors: Lazy&lt;T&gt; वाला Singleton और validate करने वाली factory",
            hg: "Private constructors: Lazy&lt;T&gt; wala Singleton aur validate karne wali factory"
          },
          check: "run",
          expected: "True\nRs 250",
          src: "var s1 = AppSettings.Instance;\nvar s2 = AppSettings.Instance;\nConsole.WriteLine(ReferenceEquals(s1, s2));     // same object\nConsole.WriteLine(Money.FromRupees(250));\n// var x = new AppSettings();                   // CS0122: constructor is private\n\npublic sealed class AppSettings\n{\n    private static readonly Lazy<AppSettings> _instance = new(() => new AppSettings());\n    public static AppSettings Instance => _instance.Value;\n    private AppSettings() { }                    // nobody outside can call new\n}\n\npublic sealed class Money\n{\n    public decimal Amount { get; }\n    private Money(decimal amount) => Amount = amount;\n\n    public static Money FromRupees(decimal rupees)   // validates before creating\n    {\n        ArgumentOutOfRangeException.ThrowIfNegative(rupees);\n        return new Money(rupees);\n    }\n\n    public override string ToString() => $\"Rs {Amount}\";\n}"
        }
      ]
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
        en: "<p>For <code>new Child()</code> the exact order is:</p>\n<ol>\n<li>Child field initializers</li>\n<li>Parent field initializers</li>\n<li>Parent constructor body</li>\n<li>Child constructor body</li>\n</ol>\n<p><b>With static constructors</b> (first creation only): the Child static constructor runs first, before step 1. The Parent static constructor runs when the Parent constructor is first invoked — that is, <i>after</i> the Child field initializers. Full order: Child static → Child field → Parent static → Parent field → Parent ctor → Child ctor. The Base/Derived static-constructor puzzle shows this.</p>\n<ul>\n<li>No <code>base(...)</code> written → the compiler adds <code>base()</code>. If the parent has only constructors with parameters → CS7036; if its parameterless constructor is <code>private</code> → CS0122.</li>\n<li>A constructor can call <code>this(...)</code> <b>or</b> <code>base(...)</code>, not both; the chain ends at a constructor that calls <code>base</code>.</li>\n</ul>\n<p>Follow-up: this order is exactly what the \"constructor order\" puzzle tests.</p>",
        hi: "<p><code>new Child()</code> के लिए exact order:</p>\n<ol>\n<li>Child field initializers</li>\n<li>Parent field initializers</li>\n<li>Parent constructor body</li>\n<li>Child constructor body</li>\n</ol>\n<p><b>Static constructors के साथ</b> (सिर्फ़ पहली बार object बनने पर): Child का static constructor सबसे पहले चलता है, step 1 से भी पहले। Parent का static constructor तब चलता है जब Parent constructor पहली बार invoke होता है — यानी Child field initializers के <i>बाद</i>। पूरा order: Child static → Child field → Parent static → Parent field → Parent ctor → Child ctor। Base/Derived static-constructor वाला puzzle यही दिखाता है।</p>\n<ul>\n<li><code>base(...)</code> नहीं लिखा → compiler <code>base()</code> जोड़ देता है। अगर parent में सिर्फ़ parameters वाले constructors हैं → CS7036; अगर उसका parameterless constructor <code>private</code> है → CS0122।</li>\n<li>Constructor <code>this(...)</code> <b>या</b> <code>base(...)</code> call कर सकता है, दोनों नहीं; chain उस constructor पर ख़त्म होती है जो <code>base</code> call करता है।</li>\n</ul>\n<p>Follow-up: \"constructor order\" puzzle बिल्कुल यही order test करता है।</p>",
        hg: "<p><code>new Child()</code> ke liye exact order:</p>\n<ol>\n<li>Child field initializers</li>\n<li>Parent field initializers</li>\n<li>Parent constructor body</li>\n<li>Child constructor body</li>\n</ol>\n<p><b>Static constructors ke saath</b> (sirf pehli baar object banne par): Child ka static constructor sabse pehle chalta hai, step 1 se bhi pehle. Parent ka static constructor tab chalta hai jab Parent constructor pehli baar invoke hota hai — yaani Child field initializers ke <i>baad</i>. Poora order: Child static → Child field → Parent static → Parent field → Parent ctor → Child ctor. Base/Derived static-constructor wala puzzle yahi dikhata hai.</p>\n<ul>\n<li><code>base(...)</code> nahi likha → compiler <code>base()</code> jod deta hai. Agar parent mein sirf parameters wale constructors hain → CS7036; agar uska parameterless constructor <code>private</code> hai → CS0122.</li>\n<li>Constructor <code>this(...)</code> <b>ya</b> <code>base(...)</code> call kar sakta hai, dono nahi; chain us constructor par khatam hoti hai jo <code>base</code> call karta hai.</li>\n</ul>\n<p>Follow-up: \"constructor order\" puzzle bilkul yahi order test karta hai.</p>"
      }
    },
    {
      id: "abstract-vs-virtual",
      depth: "detailed",
      q: "What is the difference between an abstract method and a virtual method?",
      answer: "A virtual method has a default body that a derived class may override. An abstract method has no body, lives only in an abstract class (or as a body-less interface member), and every non-abstract derived class must override it.",
      meaning: {
        hi: "Virtual method की default body होती है जिसे derived class चाहे तो override करे। Abstract method की body नहीं होती, वो सिर्फ़ abstract class में (या interface के बिना body वाले member के रूप में) हो सकता है, और हर non-abstract derived class को उसे override करना ही पड़ता है।",
        hg: "Virtual method ki default body hoti hai jise derived class chahe to override kare. Abstract method ki body nahi hoti, woh sirf abstract class mein (ya interface ke bina body wale member ke roop mein) ho sakta hai, aur har non-abstract derived class ko use override karna hi padta hai."
      },
      explain: {
        en: "<ul>\n<li><code>virtual</code> = \"here is a sensible default, change it if you need\". Example: <code>ToString()</code>, <code>Equals()</code> on <code>object</code>.</li>\n<li><code>abstract</code> = \"every child must decide this\". Example: <code>protected abstract void WriteBody()</code> in a report base class.</li>\n<li>An abstract class may also have zero abstract methods — used only to stop direct instantiation.</li>\n<li>An abstract class can override a virtual method as <code>abstract</code> again, forcing its children to re-implement it.</li>\n</ul>\n<p>Follow-up: \"Can an abstract method be private?\" No — it must be overridable, so it cannot be private (and cannot be static unless it is a static abstract interface member).</p>",
        hi: "<ul>\n<li><code>virtual</code> = \"यह एक ठीक-ठाक default है, ज़रूरत हो तो बदल लो\"। Example: <code>object</code> पर <code>ToString()</code>, <code>Equals()</code>।</li>\n<li><code>abstract</code> = \"हर child को यह ख़ुद तय करना है\"। Example: report base class में <code>protected abstract void WriteBody()</code>।</li>\n<li>Abstract class में zero abstract methods भी हो सकते हैं — सिर्फ़ direct object बनना रोकने के लिए।</li>\n<li>Abstract class किसी virtual method को फिर से <code>abstract</code> बनाकर override कर सकती है, ताकि उसके children को दोबारा implement करना पड़े।</li>\n</ul>\n<p>Follow-up: \"क्या abstract method private हो सकता है?\" नहीं — उसे override होना है, इसलिए private नहीं हो सकता (और static भी नहीं, जब तक वो static abstract interface member न हो)।</p>",
        hg: "<ul>\n<li><code>virtual</code> = \"yeh ek theek-thaak default hai, zaroorat ho to badal lo\". Example: <code>object</code> par <code>ToString()</code>, <code>Equals()</code>.</li>\n<li><code>abstract</code> = \"har child ko yeh khud tay karna hai\". Example: report base class mein <code>protected abstract void WriteBody()</code>.</li>\n<li>Abstract class mein zero abstract methods bhi ho sakte hain — sirf direct object banna rokne ke liye.</li>\n<li>Abstract class kisi virtual method ko phir se <code>abstract</code> banakar override kar sakti hai, taaki uske children ko dobara implement karna pade.</li>\n</ul>\n<p>Follow-up: \"Kya abstract method private ho sakta hai?\" Nahi — use override hona hai, isliye private nahi ho sakta (aur static bhi nahi, jab tak woh static abstract interface member na ho).</p>"
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
        en: "<p>Example: <code>protected ReportBase(string title)</code> forces every report to have a title — <code>SalesReport</code> must call <code>: base(\"Sales\")</code>. The rule lives in one place.</p>\n<ul>\n<li>A <code>public</code> constructor on an abstract class works the same as <code>protected</code> (nobody can call it with <code>new</code> anyway), so <code>protected</code> simply states the intent clearly.</li>\n<li>Do not call abstract/virtual methods from that constructor — the derived part is not ready yet (see the next question and the \"abstract + constructor\" puzzle).</li>\n</ul>",
        hi: "<p>Example: <code>protected ReportBase(string title)</code> हर report को title रखने पर मजबूर करता है — <code>SalesReport</code> को <code>: base(\"Sales\")</code> call करना ही पड़ेगा। Rule एक ही जगह रहता है।</p>\n<ul>\n<li>Abstract class पर <code>public</code> constructor भी <code>protected</code> की तरह ही काम करता है (कोई <code>new</code> से call कर ही नहीं सकता), इसलिए <code>protected</code> बस intent साफ़ बताता है।</li>\n<li>उस constructor से abstract/virtual methods call मत करो — derived हिस्सा अभी तैयार नहीं है (अगला सवाल और \"abstract + constructor\" puzzle देखो)।</li>\n</ul>",
        hg: "<p>Example: <code>protected ReportBase(string title)</code> har report ko title rakhne par majboor karta hai — <code>SalesReport</code> ko <code>: base(\"Sales\")</code> call karna hi padega. Rule ek hi jagah rehta hai.</p>\n<ul>\n<li>Abstract class par <code>public</code> constructor bhi <code>protected</code> ki tarah hi kaam karta hai (koi <code>new</code> se call kar hi nahi sakta), isliye <code>protected</code> bas intent saaf batata hai.</li>\n<li>Us constructor se abstract/virtual methods call mat karo — derived hissa abhi taiyaar nahi hai (agla sawaal aur \"abstract + constructor\" puzzle dekho).</li>\n</ul>"
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
        en: "<ul>\n<li>Fields with initializers (<code>private string _title = \"Sales\";</code>) are already set, because derived field initializers run before the base constructor. Fields assigned in the derived constructor body are not.</li>\n<li>Code analysis rule <b>CA2214</b>: \"Do not call overridable methods in constructors\".</li>\n<li>Fixes: pass the needed values into the base constructor, make the method non-virtual, or move the work to a separate <code>Initialize()</code>/factory step.</li>\n</ul>\n<p>The \"abstract + constructor\" puzzle shows exactly this: it prints <code>Sales: 0</code>, not <code>Sales: 500</code>.</p>",
        hi: "<ul>\n<li>जिन fields के initializers हैं (<code>private string _title = \"Sales\";</code>), वो पहले से set होते हैं, क्योंकि derived field initializers base constructor से पहले चलते हैं। जो fields derived constructor body में assign होते हैं, वो नहीं।</li>\n<li>Code analysis rule <b>CA2214</b>: \"Do not call overridable methods in constructors\"।</li>\n<li>Fixes: ज़रूरी values base constructor में pass करो, method को non-virtual बनाओ, या काम को अलग <code>Initialize()</code>/factory step में ले जाओ।</li>\n</ul>\n<p>\"abstract + constructor\" puzzle बिल्कुल यही दिखाता है: वो <code>Sales: 0</code> print करता है, <code>Sales: 500</code> नहीं।</p>",
        hg: "<ul>\n<li>Jin fields ke initializers hain (<code>private string _title = \"Sales\";</code>), woh pehle se set hote hain, kyunki derived field initializers base constructor se pehle chalte hain. Jo fields derived constructor body mein assign hote hain, woh nahi.</li>\n<li>Code analysis rule <b>CA2214</b>: \"Do not call overridable methods in constructors\".</li>\n<li>Fixes: zaroori values base constructor mein pass karo, method ko non-virtual banao, ya kaam ko alag <code>Initialize()</code>/factory step mein le jao.</li>\n</ul>\n<p>\"abstract + constructor\" puzzle bilkul yahi dikhata hai: woh <code>Sales: 0</code> print karta hai, <code>Sales: 500</code> nahi.</p>"
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
        en: "<ul>\n<li>Extension methods must live in a non-generic static class.</li>\n<li>Static <b>mutable</b> state is shared by every request and thread — a common source of bugs in web apps and hard to reset between tests.</li>\n<li>In ASP.NET Core the usual \"singleton\" is a DI registration: <code>builder.Services.AddSingleton&lt;IRateCache, RateCache&gt;()</code>. Its lifetime is managed by the container and it can be swapped in tests.</li>\n</ul>\n<p>Rule of thumb: pure functions with no state → static class; anything with state, dependencies or a reason to mock → a normal class registered as a singleton.</p>",
        hi: "<ul>\n<li>Extension methods non-generic static class में ही रहने चाहिए।</li>\n<li>Static <b>mutable</b> state हर request और thread के बीच share होता है — web apps में bugs का common कारण, और tests के बीच reset करना मुश्किल।</li>\n<li>ASP.NET Core में आम \"singleton\" एक DI registration होता है: <code>builder.Services.AddSingleton&lt;IRateCache, RateCache&gt;()</code>। उसकी lifetime container संभालता है और tests में उसे बदला जा सकता है।</li>\n</ul>\n<p>Rule of thumb: बिना state वाले pure functions → static class; जिसमें state, dependencies या mock करने की वजह हो → normal class, singleton के रूप में register।</p>",
        hg: "<ul>\n<li>Extension methods non-generic static class mein hi rehne chahiye.</li>\n<li>Static <b>mutable</b> state har request aur thread ke beech share hota hai — web apps mein bugs ka common kaaran, aur tests ke beech reset karna mushkil.</li>\n<li>ASP.NET Core mein aam \"singleton\" ek DI registration hota hai: <code>builder.Services.AddSingleton&lt;IRateCache, RateCache&gt;()</code>. Uski lifetime container sambhaalta hai aur tests mein use badla ja sakta hai.</li>\n</ul>\n<p>Rule of thumb: bina state wale pure functions → static class; jismein state, dependencies ya mock karne ki wajah ho → normal class, singleton ke roop mein register.</p>"
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
        en: "<ul>\n<li><code>override</code> reuses the base slot → polymorphic. <code>new</code> leaves the base slot alone — the hiding method is a separate member (a non-virtual method, bound by the compiler from the declared type, or a brand-new slot if you write <code>new virtual</code>). That is why a base reference still calls the base version.</li>\n<li>When the JIT can prove the exact type (sealed class, local <code>new</code>), it can skip the table and call directly — <b>devirtualization</b>.</li>\n<li>Two decisions happen in two phases: <b>which overload</b> (compile time, declared types) and <b>which override</b> of that overload (run time, actual object).</li>\n</ul>\n<p>The \"overload vs override\" puzzle shows both phases in one program.</p>",
        hi: "<ul>\n<li><code>override</code> base वाला slot ही reuse करता है → polymorphic। <code>new</code> base slot को छूता ही नहीं — hiding method एक अलग member है (non-virtual method जिसे compiler declared type से bind करता है, या <code>new virtual</code> लिखो तो एक बिल्कुल नया slot)। इसीलिए base reference से base version ही चलता है।</li>\n<li>जब JIT exact type साबित कर सके (sealed class, local <code>new</code>), तो table skip करके सीधे call कर सकता है — <b>devirtualization</b>।</li>\n<li>दो फ़ैसले दो phases में होते हैं: <b>कौन सा overload</b> (compile time, declared types) और उस overload का <b>कौन सा override</b> (run time, असली object)।</li>\n</ul>\n<p>\"overload vs override\" puzzle दोनों phases एक ही program में दिखाता है।</p>",
        hg: "<ul>\n<li><code>override</code> base wala slot hi reuse karta hai → polymorphic. <code>new</code> base slot ko chhoota hi nahi — hiding method ek alag member hai (non-virtual method jise compiler declared type se bind karta hai, ya <code>new virtual</code> likho to ek bilkul naya slot). Isiliye base reference se base version hi chalta hai.</li>\n<li>Jab JIT exact type saabit kar sake (sealed class, local <code>new</code>), to table skip karke seedhe call kar sakta hai — <b>devirtualization</b>.</li>\n<li>Do faisle do phases mein hote hain: <b>kaun sa overload</b> (compile time, declared types) aur us overload ka <b>kaun sa override</b> (run time, asli object).</li>\n</ul>\n<p>\"overload vs override\" puzzle dono phases ek hi program mein dikhata hai.</p>"
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
        en: "<ul>\n<li>Explicit members have no access modifier and are not visible on the class type: <code>device.Start()</code> → CS1061.</li>\n<li>Real .NET example: <code>List&lt;T&gt;</code> implements <code>ICollection&lt;T&gt;.IsReadOnly</code> explicitly, so it does not clutter the normal API.</li>\n<li>Calling an explicit member on a <code>struct</code> through the interface boxes it — worth knowing for hot paths.</li>\n</ul>",
        hi: "<ul>\n<li>Explicit members पर कोई access modifier नहीं होता और वो class type पर दिखते नहीं: <code>device.Start()</code> → CS1061।</li>\n<li>असली .NET example: <code>List&lt;T&gt;</code>, <code>ICollection&lt;T&gt;.IsReadOnly</code> को explicitly implement करता है, ताकि normal API भरा-भरा न लगे।</li>\n<li><code>struct</code> पर explicit member को interface से call करने पर boxing होती है — hot paths में यह जानना काम का है।</li>\n</ul>",
        hg: "<ul>\n<li>Explicit members par koi access modifier nahi hota aur woh class type par dikhte nahi: <code>device.Start()</code> → CS1061.</li>\n<li>Asli .NET example: <code>List&lt;T&gt;</code>, <code>ICollection&lt;T&gt;.IsReadOnly</code> ko explicitly implement karta hai, taaki normal API bhara-bhara na lage.</li>\n<li><code>struct</code> par explicit member ko interface se call karne par boxing hoti hai — hot paths mein yeh jaanna kaam ka hai.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "Two interfaces, same method name, different meaning",
            hi: "दो interfaces, same method नाम, अलग मतलब",
            hg: "Do interfaces, same method naam, alag matlab"
          },
          check: "run",
          expected: "Printing...\nScanning...",
          src: "var device = new SmartDevice();\n((IPrinter)device).Start();\nIScanner scanner = device;\nscanner.Start();\n// device.Start();   // CS1061: explicit members are not visible on the class\n\ninterface IPrinter { void Start(); }\ninterface IScanner { void Start(); }\n\nclass SmartDevice : IPrinter, IScanner\n{\n    void IPrinter.Start() => Console.WriteLine(\"Printing...\");\n    void IScanner.Start() => Console.WriteLine(\"Scanning...\");\n}"
        }
      ]
    },
    {
      id: "inheritance-code-review",
      depth: "detailed",
      q: "As a tech lead, what inheritance problems do you look for in a code review?",
      answer: "Deep hierarchies, base classes used only for helper reuse, overrides that break the parent's contract (Liskov), method hiding with new, and protected fields. I push for shallow hierarchies, interfaces plus composition, and sealing what is not designed for extension.",
      meaning: {
        hi: "गहरी hierarchies, सिर्फ़ helper code share करने के लिए बनी base classes, ऐसे overrides जो parent का contract तोड़ें (Liskov violation), new से method hiding, और protected fields जो अंदर की चीज़ें बाहर दिखाएँ। मेरा आम fix: छोटी hierarchy, interfaces + composition, और जो classes extension के लिए नहीं बनीं उन्हें seal करना।",
        hg: "Gehri hierarchies, sirf helper code share karne ke liye bani base classes, aise overrides jo parent ka contract todein (Liskov violation), new se method hiding, aur protected fields jo andar ki cheezein bahar dikhayein. Mera aam fix: chhoti hierarchy, interfaces + composition, aur jo classes extension ke liye nahi banin unhe seal karna."
      },
      explain: {
        en: "<ul>\n<li><b>Deep tree</b> (<code>BaseService → CrudService → AuditedCrudService → OrderService</code>): to understand one method you must read four classes. Keep hierarchies shallow — ideally one or two levels.</li>\n<li><b>\"Utility\" base class</b> (<code>BaseController</code> with 30 helpers): move helpers into injected services.</li>\n<li><b>Liskov violation</b>: an override that throws <code>NotSupportedException</code> or ignores a rule of the parent means the child is not really an is-a. (You will meet the <b>L</b> of SOLID later in the course.)</li>\n<li><b>protected fields</b>: children can break invariants; expose protected methods or properties instead.</li>\n<li><b><code>new</code> on methods</b>: different behaviour depending on the reference type — almost always a bug waiting to happen.</li>\n</ul>\n<p>Say it as a team practice: \"We default to composition and interfaces, use inheritance for real is-a families, and seal everything else.\"</p>",
        hi: "<ul>\n<li><b>गहरा tree</b> (<code>BaseService → CrudService → AuditedCrudService → OrderService</code>): एक method समझने के लिए चार classes पढ़नी पड़ती हैं। Hierarchies छोटी रखो — ideally एक या दो levels।</li>\n<li><b>\"Utility\" base class</b> (30 helpers वाला <code>BaseController</code>): helpers को injected services में ले जाओ।</li>\n<li><b>Liskov violation</b>: जो override <code>NotSupportedException</code> फेंके या parent का कोई rule ignore करे, उसका मतलब child सच में is-a नहीं है। (SOLID का <b>L</b> आगे course में आएगा।)</li>\n<li><b>protected fields</b>: children invariants तोड़ सकते हैं; उसकी जगह protected methods या properties expose करो।</li>\n<li>Methods पर <b><code>new</code></b>: reference type के हिसाब से अलग behaviour — लगभग हमेशा एक छुपा हुआ bug।</li>\n</ul>\n<p>इसे team practice की तरह बोलो: \"हम default में composition और interfaces use करते हैं, असली is-a families के लिए inheritance, और बाकी सब seal करते हैं।\"</p>",
        hg: "<ul>\n<li><b>Gehra tree</b> (<code>BaseService → CrudService → AuditedCrudService → OrderService</code>): ek method samajhne ke liye chaar classes padhni padti hain. Hierarchies chhoti rakho — ideally ek ya do levels.</li>\n<li><b>\"Utility\" base class</b> (30 helpers wala <code>BaseController</code>): helpers ko injected services mein le jao.</li>\n<li><b>Liskov violation</b>: jo override <code>NotSupportedException</code> phenke ya parent ka koi rule ignore kare, uska matlab child sach mein is-a nahi hai. (SOLID ka <b>L</b> aage course mein aayega.)</li>\n<li><b>protected fields</b>: children invariants tod sakte hain; uski jagah protected methods ya properties expose karo.</li>\n<li>Methods par <b><code>new</code></b>: reference type ke hisaab se alag behaviour — lagbhag hamesha ek chhupa hua bug.</li>\n</ul>\n<p>Ise team practice ki tarah bolo: \"Hum default mein composition aur interfaces use karte hain, asli is-a families ke liye inheritance, aur baaki sab seal karte hain.\"</p>"
      }
    }
  ],
  puzzles: [
    {
      id: "virtual-override-new",
      src: "A a = new C();\na.Show();\nB b = new C();\nb.Show();\nC c = new C();\nc.Show();\n\nclass A { public virtual void Show() => Console.WriteLine(\"A\"); }\nclass B : A { public override void Show() => Console.WriteLine(\"B\"); }\nclass C : B { public new void Show() => Console.WriteLine(\"C\"); }",
      answer: "B\nB\nC",
      explain: {
        en: "<ul>\n<li>The object is always a <code>C</code>. But <code>C.Show</code> uses <code>new</code>, so it does <b>not</b> override — it just hides.</li>\n<li><code>a.Show()</code>: <code>A.Show</code> is virtual; the most-derived <b>override</b> is <code>B.Show</code> → <b>B</b>.</li>\n<li><code>b.Show()</code>: same virtual chain → <b>B</b>.</li>\n<li><code>c.Show()</code>: the reference type is <code>C</code>, so the compiler picks the hiding method <code>C.Show</code> → <b>C</b>.</li>\n</ul>\n<p>Override follows the object; new follows the reference.</p>",
        hi: "<ul>\n<li>Object हमेशा <code>C</code> है। पर <code>C.Show</code> में <code>new</code> है, इसलिए यह override <b>नहीं</b> करता — सिर्फ़ hide करता है।</li>\n<li><code>a.Show()</code>: <code>A.Show</code> virtual है; सबसे नीचे वाला <b>override</b> <code>B.Show</code> है → <b>B</b>।</li>\n<li><code>b.Show()</code>: वही virtual chain → <b>B</b>।</li>\n<li><code>c.Show()</code>: reference type <code>C</code> है, इसलिए compiler hiding method <code>C.Show</code> चुनता है → <b>C</b>।</li>\n</ul>\n<p>Override object को follow करता है; new reference को।</p>",
        hg: "<ul>\n<li>Object hamesha <code>C</code> hai. Par <code>C.Show</code> mein <code>new</code> hai, isliye yeh override <b>nahi</b> karta — sirf hide karta hai.</li>\n<li><code>a.Show()</code>: <code>A.Show</code> virtual hai; sabse neeche wala <b>override</b> <code>B.Show</code> hai → <b>B</b>.</li>\n<li><code>b.Show()</code>: wahi virtual chain → <b>B</b>.</li>\n<li><code>c.Show()</code>: reference type <code>C</code> hai, isliye compiler hiding method <code>C.Show</code> chunta hai → <b>C</b>.</li>\n</ul>\n<p>Override object ko follow karta hai; new reference ko.</p>"
      }
    },
    {
      id: "base-ref-derived-object",
      src: "Animal a = new Dog();\na.Speak();\na.Move();\nConsole.WriteLine(a.GetType().Name);\n((Dog)a).Move();\n\nclass Animal\n{\n    public virtual void Speak() => Console.WriteLine(\"Animal speaks\");\n    public void Move() => Console.WriteLine(\"Animal moves\");\n}\n\nclass Dog : Animal\n{\n    public override void Speak() => Console.WriteLine(\"Dog barks\");\n    public new void Move() => Console.WriteLine(\"Dog runs\");\n}",
      answer: "Dog barks\nAnimal moves\nDog\nDog runs",
      explain: {
        en: "<ul>\n<li>Reference type = <code>Animal</code>, object type = <code>Dog</code>.</li>\n<li><code>Speak</code> is virtual + overridden → decided by the object → <b>Dog barks</b>.</li>\n<li><code>Move</code> is not virtual; <code>Dog.Move</code> only hides it → decided by the reference → <b>Animal moves</b>.</li>\n<li><code>GetType()</code> always returns the real runtime type → <b>Dog</b>.</li>\n<li>After the cast the reference type is <code>Dog</code> → <b>Dog runs</b>.</li>\n</ul>",
        hi: "<ul>\n<li>Reference type = <code>Animal</code>, object type = <code>Dog</code>।</li>\n<li><code>Speak</code> virtual है + override हुआ है → object तय करता है → <b>Dog barks</b>।</li>\n<li><code>Move</code> virtual नहीं है; <code>Dog.Move</code> उसे सिर्फ़ hide करता है → reference तय करता है → <b>Animal moves</b>।</li>\n<li><code>GetType()</code> हमेशा असली runtime type देता है → <b>Dog</b>।</li>\n<li>Cast के बाद reference type <code>Dog</code> है → <b>Dog runs</b>।</li>\n</ul>",
        hg: "<ul>\n<li>Reference type = <code>Animal</code>, object type = <code>Dog</code>.</li>\n<li><code>Speak</code> virtual hai + override hua hai → object tay karta hai → <b>Dog barks</b>.</li>\n<li><code>Move</code> virtual nahi hai; <code>Dog.Move</code> use sirf hide karta hai → reference tay karta hai → <b>Animal moves</b>.</li>\n<li><code>GetType()</code> hamesha asli runtime type deta hai → <b>Dog</b>.</li>\n<li>Cast ke baad reference type <code>Dog</code> hai → <b>Dog runs</b>.</li>\n</ul>"
      }
    },
    {
      id: "overload-vs-override",
      src: "var printer = new Printer();\nAnimal a = new Dog();\nprinter.Print(a);\nprinter.Print(new Dog());\na.Describe();\n\nclass Animal { public virtual void Describe() => Console.WriteLine(\"I am an Animal\"); }\nclass Dog : Animal { public override void Describe() => Console.WriteLine(\"I am a Dog\"); }\n\nclass Printer\n{\n    public void Print(Animal x) => Console.WriteLine(\"Print(Animal)\");\n    public void Print(Dog x) => Console.WriteLine(\"Print(Dog)\");\n}",
      answer: "Print(Animal)\nPrint(Dog)\nI am a Dog",
      explain: {
        en: "<ul>\n<li><b>Overloads are chosen at compile time</b> from the declared type of the argument. <code>a</code> is declared as <code>Animal</code> → <b>Print(Animal)</b>, even though the object is a Dog.</li>\n<li><code>new Dog()</code> has static type <code>Dog</code> → the more specific overload <b>Print(Dog)</b>.</li>\n<li><b>Overrides are chosen at run time</b> from the object → <b>I am a Dog</b>.</li>\n</ul>\n<p>Interview line: \"Overload resolution uses the static type; virtual dispatch uses the runtime type.\"</p>",
        hi: "<ul>\n<li><b>Overloads compile time पर चुने जाते हैं</b>, argument के declared type से। <code>a</code> का declared type <code>Animal</code> है → <b>Print(Animal)</b>, भले ही object Dog है।</li>\n<li><code>new Dog()</code> का static type <code>Dog</code> है → ज़्यादा specific overload <b>Print(Dog)</b>।</li>\n<li><b>Overrides run time पर चुने जाते हैं</b>, object से → <b>I am a Dog</b>।</li>\n</ul>\n<p>Interview line: \"Overload resolution static type use करता है; virtual dispatch runtime type।\"</p>",
        hg: "<ul>\n<li><b>Overloads compile time par chune jaate hain</b>, argument ke declared type se. <code>a</code> ka declared type <code>Animal</code> hai → <b>Print(Animal)</b>, bhale hi object Dog hai.</li>\n<li><code>new Dog()</code> ka static type <code>Dog</code> hai → zyada specific overload <b>Print(Dog)</b>.</li>\n<li><b>Overrides run time par chune jaate hain</b>, object se → <b>I am a Dog</b>.</li>\n</ul>\n<p>Interview line: \"Overload resolution static type use karta hai; virtual dispatch runtime type.\"</p>"
      }
    },
    {
      id: "constructor-order",
      src: "new Child();\n\nclass Parent\n{\n    private readonly Log _p = new(\"Parent field\");\n    public Parent() => Console.WriteLine(\"Parent ctor\");\n}\n\nclass Child : Parent\n{\n    private readonly Log _c = new(\"Child field\");\n    public Child() => Console.WriteLine(\"Child ctor\");\n}\n\nclass Log\n{\n    public Log(string text) => Console.WriteLine(text);\n}",
      answer: "Child field\nParent field\nParent ctor\nChild ctor",
      explain: {
        en: "<p>Most people answer \"Parent field, Parent ctor, Child field, Child ctor\" — that is the Java order. In C#:</p>\n<ol>\n<li><b>Derived field initializers</b> run first → Child field</li>\n<li>then the base constructor is invoked, which runs <b>base field initializers</b> → Parent field</li>\n<li><b>base constructor body</b> → Parent ctor</li>\n<li><b>derived constructor body</b> → Child ctor</li>\n</ol>\n<p>Constructor <b>bodies</b> still run base-first, which is what matters most in practice.</p>",
        hi: "<p>ज़्यादातर लोग \"Parent field, Parent ctor, Child field, Child ctor\" बोलते हैं — वो Java का order है। C# में:</p>\n<ol>\n<li><b>Derived field initializers</b> सबसे पहले → Child field</li>\n<li>फिर base constructor call होता है, जो <b>base field initializers</b> चलाता है → Parent field</li>\n<li><b>Base constructor body</b> → Parent ctor</li>\n<li><b>Derived constructor body</b> → Child ctor</li>\n</ol>\n<p>Constructor <b>bodies</b> फिर भी base-first चलती हैं, और practice में यही सबसे ज़्यादा मायने रखता है।</p>",
        hg: "<p>Zyaadatar log \"Parent field, Parent ctor, Child field, Child ctor\" bolte hain — woh Java ka order hai. C# mein:</p>\n<ol>\n<li><b>Derived field initializers</b> sabse pehle → Child field</li>\n<li>Phir base constructor call hota hai, jo <b>base field initializers</b> chalata hai → Parent field</li>\n<li><b>Base constructor body</b> → Parent ctor</li>\n<li><b>Derived constructor body</b> → Child ctor</li>\n</ol>\n<p>Constructor <b>bodies</b> phir bhi base-first chalti hain, aur practice mein yahi sabse zyada maayne rakhta hai.</p>"
      }
    },
    {
      id: "static-constructor-once",
      src: "Console.WriteLine(\"Start\");\nvar first = new Config();\nvar second = new Config();\nConsole.WriteLine(Config.Count);\n\nclass Config\n{\n    public static int Count;\n\n    static Config()\n    {\n        Console.WriteLine(\"Static ctor\");\n    }\n\n    public Config()\n    {\n        Count++;\n        Console.WriteLine(\"Instance ctor\");\n    }\n}",
      answer: "Start\nStatic ctor\nInstance ctor\nInstance ctor\n2",
      explain: {
        en: "<ul>\n<li>\"Start\" prints first — the static constructor waits until the type is first used.</li>\n<li>The first <code>new Config()</code> triggers the static constructor <b>once</b>, then the instance constructor.</li>\n<li>The second <code>new</code> runs only the instance constructor.</li>\n<li><code>Count</code> is static — one copy shared by all objects → <b>2</b>.</li>\n</ul>",
        hi: "<ul>\n<li>\"Start\" पहले print होता है — static constructor type के पहले use तक इंतज़ार करता है।</li>\n<li>पहला <code>new Config()</code> static constructor को <b>एक बार</b> चलाता है, फिर instance constructor।</li>\n<li>दूसरा <code>new</code> सिर्फ़ instance constructor चलाता है।</li>\n<li><code>Count</code> static है — सभी objects के बीच एक ही copy → <b>2</b>।</li>\n</ul>",
        hg: "<ul>\n<li>\"Start\" pehle print hota hai — static constructor type ke pehle use tak intezaar karta hai.</li>\n<li>Pehla <code>new Config()</code> static constructor ko <b>ek baar</b> chalata hai, phir instance constructor.</li>\n<li>Doosra <code>new</code> sirf instance constructor chalata hai.</li>\n<li><code>Count</code> static hai — sabhi objects ke beech ek hi copy → <b>2</b>.</li>\n</ul>"
      }
    },
    {
      id: "static-constructor-inheritance",
      src: "Console.WriteLine(\"Main\");\nnew Derived();\nnew Derived();\n\nclass Base\n{\n    static Base() { Console.WriteLine(\"Base static\"); }\n    public Base() { Console.WriteLine(\"Base instance\"); }\n}\n\nclass Derived : Base\n{\n    static Derived() { Console.WriteLine(\"Derived static\"); }\n    public Derived() { Console.WriteLine(\"Derived instance\"); }\n}",
      answer: "Main\nDerived static\nBase static\nBase instance\nDerived instance\nBase instance\nDerived instance",
      explain: {
        en: "<ul>\n<li>Static constructors go <b>derived first</b>: creating a <code>Derived</code> needs <code>Derived</code>'s static constructor before its instance constructor starts. That instance constructor first calls <code>Base()</code> — the first use of <code>Base</code> — so now <b>Base static</b> runs.</li>\n<li>Instance constructor bodies go <b>base first</b>: Base instance, then Derived instance.</li>\n<li>Second <code>new Derived()</code>: static constructors never run again → only the two instance lines.</li>\n</ul>\n<p>Memory trick: <b>statics go down → up, instance bodies go up → down</b>.</p>",
        hi: "<ul>\n<li>Static constructors <b>derived पहले</b>: <code>Derived</code> बनाने के लिए उसका instance constructor शुरू होने से पहले <code>Derived</code> का static constructor चाहिए। वो instance constructor सबसे पहले <code>Base()</code> call करता है — यह <code>Base</code> का पहला use है — इसलिए अब <b>Base static</b> चलता है।</li>\n<li>Instance constructor bodies <b>base पहले</b>: Base instance, फिर Derived instance।</li>\n<li>दूसरा <code>new Derived()</code>: static constructors दोबारा कभी नहीं चलते → सिर्फ़ दो instance lines।</li>\n</ul>\n<p>याद रखने की trick: <b>statics नीचे से ऊपर, instance bodies ऊपर से नीचे</b>।</p>",
        hg: "<ul>\n<li>Static constructors <b>derived pehle</b>: <code>Derived</code> banane ke liye uska instance constructor shuru hone se pehle <code>Derived</code> ka static constructor chahiye. Woh instance constructor sabse pehle <code>Base()</code> call karta hai — yeh <code>Base</code> ka pehla use hai — isliye ab <b>Base static</b> chalta hai.</li>\n<li>Instance constructor bodies <b>base pehle</b>: Base instance, phir Derived instance.</li>\n<li>Doosra <code>new Derived()</code>: static constructors dobara kabhi nahi chalte → sirf do instance lines.</li>\n</ul>\n<p>Yaad rakhne ki trick: <b>statics neeche se upar, instance bodies upar se neeche</b>.</p>"
      }
    },
    {
      id: "default-interface-method",
      src: "IGreeter english = new English();\nIGreeter hindi = new Hindi();\nenglish.Bye();\nhindi.Bye();\nHindi h = new Hindi();\nh.Hello();\n((IGreeter)h).Bye();\n\ninterface IGreeter\n{\n    void Hello();\n    void Bye() => Console.WriteLine(\"Bye (default)\");\n}\n\nclass English : IGreeter\n{\n    public void Hello() => Console.WriteLine(\"Hello\");\n    public void Bye() => Console.WriteLine(\"Goodbye\");\n}\n\nclass Hindi : IGreeter\n{\n    public void Hello() => Console.WriteLine(\"Namaste\");\n}",
      answer: "Goodbye\nBye (default)\nNamaste\nBye (default)",
      explain: {
        en: "<ul>\n<li><code>English</code> implements <code>Bye</code> itself, so its version replaces the default → <b>Goodbye</b>.</li>\n<li><code>Hindi</code> does not, so the interface's default body runs → <b>Bye (default)</b>.</li>\n<li><code>h.Hello()</code> → <b>Namaste</b>.</li>\n<li><code>h.Bye()</code> would <b>not compile</b> (CS1061): a default method is not a member of the class. Through the interface cast it works → <b>Bye (default)</b>.</li>\n</ul>",
        hi: "<ul>\n<li><code>English</code> ने <code>Bye</code> ख़ुद implement किया है, इसलिए उसका version default की जगह लेता है → <b>Goodbye</b>।</li>\n<li><code>Hindi</code> ने नहीं किया, इसलिए interface की default body चलती है → <b>Bye (default)</b>।</li>\n<li><code>h.Hello()</code> → <b>Namaste</b>।</li>\n<li><code>h.Bye()</code> compile <b>नहीं</b> होगा (CS1061): default method class का member नहीं है। Interface cast से चलता है → <b>Bye (default)</b>।</li>\n</ul>",
        hg: "<ul>\n<li><code>English</code> ne <code>Bye</code> khud implement kiya hai, isliye uska version default ki jagah leta hai → <b>Goodbye</b>.</li>\n<li><code>Hindi</code> ne nahi kiya, isliye interface ki default body chalti hai → <b>Bye (default)</b>.</li>\n<li><code>h.Hello()</code> → <b>Namaste</b>.</li>\n<li><code>h.Bye()</code> compile <b>nahi</b> hoga (CS1061): default method class ka member nahi hai. Interface cast se chalta hai → <b>Bye (default)</b>.</li>\n</ul>"
      }
    },
    {
      id: "abstract-constructor-virtual-call",
      src: "new SalesReport();\n\nabstract class Report\n{\n    protected Report()\n    {\n        Console.WriteLine(\"Report ctor\");\n        Print();                      // virtual call from a base constructor\n    }\n\n    protected abstract void Print();\n}\n\nclass SalesReport : Report\n{\n    private readonly string _title = \"Sales\";\n    private int _total;\n\n    public SalesReport()\n    {\n        _total = 500;\n        Console.WriteLine(\"SalesReport ctor\");\n    }\n\n    protected override void Print() => Console.WriteLine($\"{_title}: {_total}\");\n}",
      answer: "Report ctor\nSales: 0\nSalesReport ctor",
      explain: {
        en: "<ul>\n<li>The abstract class's constructor runs as part of creating <code>SalesReport</code>.</li>\n<li><code>Print()</code> is abstract, so the call goes to <code>SalesReport.Print</code> — even though <code>SalesReport</code>'s constructor body has not run yet.</li>\n<li><code>_title</code> has a field initializer, which runs <b>before</b> the base constructor → \"Sales\" is ready.</li>\n<li><code>_total</code> is set in the constructor body, which runs <b>after</b> → still <b>0</b>.</li>\n</ul>\n<p>Lesson: do not call virtual/abstract methods from a constructor (analyzer rule CA2214).</p>",
        hi: "<ul>\n<li><code>SalesReport</code> बनाते समय abstract class का constructor भी चलता है।</li>\n<li><code>Print()</code> abstract है, इसलिए call <code>SalesReport.Print</code> पर जाती है — जबकि <code>SalesReport</code> की constructor body अभी चली ही नहीं।</li>\n<li><code>_title</code> का field initializer है, जो base constructor से <b>पहले</b> चलता है → \"Sales\" तैयार है।</li>\n<li><code>_total</code> constructor body में set होता है, जो <b>बाद में</b> चलती है → अभी भी <b>0</b>।</li>\n</ul>\n<p>सीख: constructor से virtual/abstract methods call मत करो (analyzer rule CA2214)।</p>",
        hg: "<ul>\n<li><code>SalesReport</code> banate samay abstract class ka constructor bhi chalta hai.</li>\n<li><code>Print()</code> abstract hai, isliye call <code>SalesReport.Print</code> par jaati hai — jabki <code>SalesReport</code> ki constructor body abhi chali hi nahi.</li>\n<li><code>_title</code> ka field initializer hai, jo base constructor se <b>pehle</b> chalta hai → \"Sales\" taiyaar hai.</li>\n<li><code>_total</code> constructor body mein set hota hai, jo <b>baad mein</b> chalti hai → abhi bhi <b>0</b>.</li>\n</ul>\n<p>Seekh: constructor se virtual/abstract methods call mat karo (analyzer rule CA2214).</p>"
      }
    }
  ],
  revision: {
    en: [
      "<b>Class</b> = blueprint; <b>object</b> = one instance made with <code>new</code>. A class variable holds a <b>reference</b>.",
      "<b>Field</b> stores data (keep it private); <b>property</b> guards it with <code>get</code>/<code>set</code>; <code>init</code> = set once at creation.",
      "<b>Method</b> = one named action; parameters in, return value out; <code>void</code> returns nothing.",
      "<b>Constructor</b> runs on <code>new</code>: asks for required values, validates them, leaves the object valid.",
      "<b>Encapsulation</b>: private data + public actions that enforce the rules (<code>private set</code>, <code>TryClose</code>).",
      "<b>Abstraction</b>: depend on a contract (<code>INotifier</code>), not on a concrete class (<code>SmsNotifier</code>).",
      "<b>Inheritance</b>: <code>Child : Parent</code> for a true is-a; call <code>: base(...)</code>; only one base class.",
      "<b>Polymorphism</b>: <code>virtual</code> + <code>override</code>, or one interface with many implementations — the actual object decides at run time.",
      "<b>Abstract class</b> = shared code + state + constructor, only one base class. <b>Interface</b> = contract, no instance state, implement many.",
      "<b>override follows the object, new follows the reference.</b> Method hiding with <code>new</code> is not polymorphism.",
      "<b>Favor composition (has-a) over inheritance (is-a)</b>: loose coupling, swappable parts, easy mocking — exactly what DI does."
    ],
    meaning: {
      hi: [
        "Class नक्शा है, object उससे बनी एक चीज़; class variable में reference होता है",
        "Field data रखता है, property उसकी रखवाली करती है; init = बनते समय एक बार",
        "Method एक नाम वाला काम है; parameters अंदर, return value बाहर; void कुछ नहीं लौटाता",
        "Constructor new पर चलता है: ज़रूरी values लेता है, जाँचता है, object को सही हालत में छोड़ता है",
        "Encapsulation: data private, rules लागू करने वाले काम public",
        "Abstraction: असली class पर नहीं, contract (interface) पर निर्भर रहो",
        "Inheritance: सच्चे is-a रिश्ते के लिए; base(...) call करो; base class सिर्फ़ एक",
        "Polymorphism: virtual + override या एक interface की कई implementations — run time पर असली object तय करता है",
        "Abstract class = shared code + state + constructor, base class सिर्फ़ एक। Interface = contract, instance state नहीं, कई implement कर सकते हो।",
        "override object को follow करता है, new reference को। new से hiding polymorphism नहीं है।",
        "Inheritance (is-a) से ज़्यादा composition (has-a) पसंद करो: loose coupling, parts बदल सकते हो, mocking आसान — DI यही करता है।"
      ],
      hg: [
        "Class naksha hai, object usse bani ek cheez; class variable mein reference hota hai",
        "Field data rakhta hai, property uski rakhwaali karti hai; init = bante samay ek baar",
        "Method ek naam wala kaam hai; parameters andar, return value bahar; void kuch nahi lautaata",
        "Constructor new par chalta hai: zaroori values leta hai, jaanchta hai, object ko sahi haalat mein chhodta hai",
        "Encapsulation: data private, rules laagu karne wale kaam public",
        "Abstraction: asli class par nahi, contract (interface) par nirbhar raho",
        "Inheritance: sacche is-a rishte ke liye; base(...) call karo; base class sirf ek",
        "Polymorphism: virtual + override ya ek interface ki kai implementations — run time par asli object tay karta hai",
        "Abstract class = shared code + state + constructor, base class sirf ek. Interface = contract, instance state nahi, kai implement kar sakte ho.",
        "override object ko follow karta hai, new reference ko. new se hiding polymorphism nahi hai.",
        "Inheritance (is-a) se zyada composition (has-a) pasand karo: loose coupling, parts badal sakte ho, mocking aasaan — DI yahi karta hai."
      ]
    }
  }
};
