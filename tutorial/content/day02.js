// Day 2 — C# core, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 2,
  format: "lesson",
  title: {
    en: "C# Core — types, memory, strings, generics, collections, delegates",
    hi: "C# Core — types, memory, strings, generics, collections, delegates (C# की बुनियाद)",
    hg: "C# Core — types, memory, strings, generics, collections, delegates"
  },
  summary: {
    en: "<p>Day 2 deepens the same <b>customer-care CRM</b> in 8 short lessons on C# core. First how data is copied: value vs reference types, passing to methods, boxing. Then safer data: strings, immutability, generics, and the right collection for each job. It ends with delegates and a <code>TicketClosed</code> event.</p><p>Every lesson follows the same path: what it is, why you need it, an analogy, a complete program with its output, line-by-line notes, common mistakes, a small exercise and a quick quiz. Mark a lesson done when you can explain it without looking.</p>",
    hi: "<p>Day 2 उसी <b>customer-care CRM</b> को C# core के 8 छोटे पाठों में और गहरा करता है। पहले data कैसे copy होता है: value बनाम reference types, methods को देना, boxing। फिर सुरक्षित data: strings, immutability, generics और हर काम के लिए सही collection। अंत में delegates और <code>TicketClosed</code> event।</p><p>हर पाठ एक ही क्रम में चलता है: यह क्या है, क्यों चाहिए, एक मिसाल, output के साथ पूरा program, लाइन-दर-लाइन समझ, आम ग़लतियाँ, एक छोटा exercise और एक झटपट quiz। जब बिना देखे समझा सको, तब पाठ को पूरा mark करो।</p>",
    hg: "<p>Day 2 usi <b>customer-care CRM</b> ko C# core ke 8 chhote lessons mein aur gehra karta hai. Pehle data kaise copy hota hai: value banaam reference types, methods ko dena, boxing. Phir surakshit data: strings, immutability, generics aur har kaam ke liye sahi collection. Ant mein delegates aur <code>TicketClosed</code> event.</p><p>Har lesson ek hi kram mein chalta hai: ye kya hai, kyun chahiye, ek misaal, output ke saath poora program, line-by-line samajh, aam galtiyan, ek chhota exercise aur ek jhatpat quiz. Jab bina dekhe samjha sako, tab lesson ko poora mark karo.</p>"
  },
  sections: [
    {
      id: "value-vs-reference",
      depth: "short",
      title: {
        en: "Value types vs reference types",
        hi: "Value types बनाम reference types",
        hg: "Value types banaam reference types"
      },
      lesson: {
        buildsOn: {
          en: "Day 1 built <code>Customer</code> and <code>SupportTicket</code> as classes. Today we look under the hood: what really happens when you copy a variable, and why a class and a struct behave differently.",
          hi: "Day 1 में हमने <code>Customer</code> और <code>SupportTicket</code> को class के रूप में बनाया था। आज अंदर झाँकेंगे: variable copy करने पर असल में क्या होता है, और class व struct अलग क्यों चलते हैं।",
          hg: "Day 1 mein humne <code>Customer</code> aur <code>SupportTicket</code> ko class ke roop mein banaya tha. Aaj andar jhaankenge: variable copy karne par asal mein kya hota hai, aur class va struct alag kyun chalte hain."
        },
        what: {
          en: "<p>A <b>value type</b> (<code>int</code>, <code>decimal</code>, <code>bool</code>, <code>struct</code>) holds the <b>data itself</b>. Copying it makes an independent copy.</p><p>A <b>reference type</b> (<code>class</code>, <code>string</code>, arrays) holds a <b>reference</b> to an object on the heap. Copying it makes a second variable pointing to the <b>same</b> object.</p><p>In simple words: small local values usually sit on the <b>stack</b>; class objects live on the <b>heap</b> and are cleaned up by the garbage collector. Do not memorise \"value types are always on the stack\" — a value type lives wherever its container lives (see the Deep Dive).</p>",
          hi: "<p><b>Value type</b> (<code>int</code>, <code>decimal</code>, <code>bool</code>, <code>struct</code>) में <b>data खुद</b> रहता है। उसे copy करो तो एक अलग, स्वतंत्र copy बनती है।</p><p><b>Reference type</b> (<code>class</code>, <code>string</code>, arrays) में heap पर बने object का <b>reference</b> रहता है। उसे copy करो तो दूसरा variable <b>उसी</b> object को point करता है।</p><p>आसान भाषा में: छोटी local values आम तौर पर <b>stack</b> पर रहती हैं; class के objects <b>heap</b> पर रहते हैं और garbage collector उन्हें साफ़ करता है। \"value type हमेशा stack पर\" रटो मत — value type वहीं रहता है जहाँ उसे रखने वाली चीज़ रहती है (Deep Dive देखो)।</p>",
          hg: "<p><b>Value type</b> (<code>int</code>, <code>decimal</code>, <code>bool</code>, <code>struct</code>) mein <b>data khud</b> rehta hai. Usse copy karo to ek alag, swatantra copy banti hai.</p><p><b>Reference type</b> (<code>class</code>, <code>string</code>, arrays) mein heap par bane object ka <b>reference</b> rehta hai. Usse copy karo to doosra variable <b>usi</b> object ko point karta hai.</p><p>Aasaan bhasha mein: chhoti local values aam taur par <b>stack</b> par rehti hain; class ke objects <b>heap</b> par rehte hain aur garbage collector unhe saaf karta hai. \"Value type hamesha stack par\" ratto mat — value type wahin rehta hai jahan usse rakhne wali cheez rehti hai (Deep Dive dekho).</p>"
        },
        why: {
          en: "<p>Many bugs come from one question: \"did I change my copy, or the original?\" A support agent edits a <code>Customer</code> and the customer record changes everywhere. But editing a copy of a <code>Money</code> struct changes nothing outside. Knowing which one you have saves hours of debugging.</p>",
          hi: "<p>बहुत से bugs एक सवाल से आते हैं: \"मैंने अपनी copy बदली या original?\" Agent एक <code>Customer</code> बदलता है और customer का record हर जगह बदल जाता है। लेकिन <code>Money</code> struct की copy बदलने से बाहर कुछ नहीं बदलता। कौन-सा है, यह पता हो तो debugging के घंटे बचते हैं।</p>",
          hg: "<p>Bahut se bugs ek sawaal se aate hain: \"maine apni copy badli ya original?\" Agent ek <code>Customer</code> badalta hai aur customer ka record har jagah badal jaata hai. Lekin <code>Money</code> struct ki copy badalne se bahar kuch nahi badalta. Kaunsa hai, ye pata ho to debugging ke ghante bachte hain.</p>"
        },
        analogy: {
          en: "<p>A <b>₹100 note</b> handed to a friend is a value type: they now hold their own note, and what they do with it does not change yours. A <b>shared Google Drive link</b> to the customer file is a reference type: everyone with the link opens the same file, so one person's edit is seen by all.</p>",
          hi: "<p>दोस्त को दिया हुआ <b>₹100 का नोट</b> value type है: अब उसके पास अपना नोट है, वह उसका जो भी करे, आपका नहीं बदलता। Customer file का <b>shared Google Drive link</b> reference type है: link वाला हर व्यक्ति वही एक file खोलता है, इसलिए एक की edit सबको दिखती है।</p>",
          hg: "<p>Dost ko diya hua <b>₹100 ka note</b> value type hai: ab uske paas apna note hai, woh uska jo bhi kare, aapka nahi badalta. Customer file ka <b>shared Google Drive link</b> reference type hai: link wala har vyakti wahi ek file kholta hai, isliye ek ki edit sabko dikhti hai.</p>"
        },
        lines: [
          {
            code: "var sameAsha = asha;",
            note: {
              en: "A class variable: only the <b>reference</b> is copied. There is still one <code>Customer</code> object and two names for it.",
              hi: "Class variable: सिर्फ़ <b>reference</b> copy होता है। <code>Customer</code> object अभी भी एक ही है, उसके दो नाम हैं।",
              hg: "Class variable: sirf <b>reference</b> copy hota hai. <code>Customer</code> object abhi bhi ek hi hai, uske do naam hain."
            }
          },
          {
            code: "sameAsha.City = \"Mumbai\";",
            note: {
              en: "Changes the one shared object, so <code>asha.City</code> shows <code>Mumbai</code> too.",
              hi: "एक ही shared object बदलता है, इसलिए <code>asha.City</code> में भी <code>Mumbai</code> दिखता है।",
              hg: "Ek hi shared object badalta hai, isliye <code>asha.City</code> mein bhi <code>Mumbai</code> dikhta hai."
            }
          },
          {
            code: "var feeCopy = fee;",
            note: {
              en: "A struct variable: <b>all the data</b> is copied. <code>feeCopy</code> is a separate <code>Money</code> value.",
              hi: "Struct variable: <b>पूरा data</b> copy होता है। <code>feeCopy</code> एक अलग <code>Money</code> value है।",
              hg: "Struct variable: <b>poora data</b> copy hota hai. <code>feeCopy</code> ek alag <code>Money</code> value hai."
            }
          },
          {
            code: "feeCopy.Amount = 250m;",
            note: {
              en: "Changes only the copy. <code>fee.Amount</code> stays <code>100</code>.",
              hi: "सिर्फ़ copy बदलती है। <code>fee.Amount</code> <code>100</code> ही रहता है।",
              hg: "Sirf copy badalti hai. <code>fee.Amount</code> <code>100</code> hi rehta hai."
            }
          },
          {
            code: "public struct Money { public decimal Amount; }",
            note: {
              en: "<code>struct</code> makes a value type. It is mutable here <b>only to show copying</b>; lesson 5 shows how to make structs safe with <code>readonly</code>.",
              hi: "<code>struct</code> से value type बनता है। यहाँ यह mutable है <b>सिर्फ़ copy दिखाने के लिए</b>; struct को <code>readonly</code> से सुरक्षित बनाना पाठ 5 में है।",
              hg: "<code>struct</code> se value type banta hai. Yahan ye mutable hai <b>sirf copy dikhane ke liye</b>; struct ko <code>readonly</code> se surakshit banana lesson 5 mein hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Thinking <code>var b = a;</code> copies a class object. It copies only the reference.</li><li>Changing a struct inside a list: <code>list[0].Amount = 5;</code> gives error CS1612, because <code>list[0]</code> returns a copy. Take the item out, change it, and put it back.</li><li>Making big, mutable structs \"for speed\". Copies add up and surprise you; keep structs small and unchanging.</li></ul>",
          hi: "<ul><li>यह सोचना कि <code>var b = a;</code> class object की copy बनाता है। यह सिर्फ़ reference copy करता है।</li><li>List के अंदर struct बदलना: <code>list[0].Amount = 5;</code> पर error CS1612 आता है, क्योंकि <code>list[0]</code> एक copy लौटाता है। Item बाहर निकालो, बदलो, वापस रखो।</li><li>\"speed के लिए\" बड़े और mutable structs बनाना। Copies जुड़ती जाती हैं और चौंकाती हैं; struct छोटे और न बदलने वाले रखो।</li></ul>",
          hg: "<ul><li>Ye sochna ki <code>var b = a;</code> class object ki copy banata hai. Ye sirf reference copy karta hai.</li><li>List ke andar struct badalna: <code>list[0].Amount = 5;</code> par error CS1612 aata hai, kyunki <code>list[0]</code> ek copy lautaata hai. Item bahar nikaalo, badlo, wapas rakho.</li><li>\"Speed ke liye\" bade aur mutable structs banana. Copies judti jaati hain aur chaunkati hain; struct chhote aur na badalne wale rakho.</li></ul>"
        },
        whenToUse: {
          en: "<p>A <code>class</code> is the normal default (<code>Customer</code>, <code>SupportTicket</code>). Choose a <code>struct</code> only for small, value-like data that you treat as one unit: an amount of money, a coordinate, a date range. Keep it small and, ideally, <code>readonly</code>.</p>",
          hi: "<p>सामान्य default <code>class</code> है (<code>Customer</code>, <code>SupportTicket</code>)। <code>struct</code> सिर्फ़ छोटे, value जैसे data के लिए चुनो जिसे एक इकाई की तरह देखते हो: पैसे की रक़म, coordinate, तारीख़ों की range। उसे छोटा और हो सके तो <code>readonly</code> रखो।</p>",
          hg: "<p>Saamanya default <code>class</code> hai (<code>Customer</code>, <code>SupportTicket</code>). <code>struct</code> sirf chhote, value jaise data ke liye chuno jise ek ikaai ki tarah dekhte ho: paise ki raqam, coordinate, taareekhon ki range. Use chhota aur ho sake to <code>readonly</code> rakho.</p>"
        },
        exercise: {
          task: {
            en: "<p>Make another copy of <code>fee</code> called <code>refund</code>, set <code>refund.Amount</code> to <code>40</code>, and print <code>fee=100 refund=40</code>.</p>",
            hi: "<p><code>fee</code> की एक और copy <code>refund</code> नाम से बनाओ, <code>refund.Amount</code> को <code>40</code> करो, और <code>fee=100 refund=40</code> print करो।</p>",
            hg: "<p><code>fee</code> ki ek aur copy <code>refund</code> naam se banao, <code>refund.Amount</code> ko <code>40</code> karo, aur <code>fee=100 refund=40</code> print karo.</p>"
          },
          hint: {
            en: "<p>Because <code>Money</code> is a struct, <code>var refund = fee;</code> already gives you an independent copy.</p>",
            hi: "<p><code>Money</code> struct है, इसलिए <code>var refund = fee;</code> से ही स्वतंत्र copy मिल जाती है।</p>",
            hg: "<p><code>Money</code> struct hai, isliye <code>var refund = fee;</code> se hi swatantra copy mil jaati hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a struct copy",
              hi: "हल: struct की copy",
              hg: "Solution: struct ki copy"
            },
            src: "var fee = new Money { Amount = 100m };\nvar refund = fee;\nrefund.Amount = 40m;\nConsole.WriteLine($\"fee={fee.Amount} refund={refund.Amount}\");\n\n// Mutable only to show copying; real structs should be readonly.\npublic struct Money { public decimal Amount; }",
            check: "run",
            expected: "fee=100 refund=40"
          }
        },
        quiz: {
          q: {
            en: "Which statement is true after <code>var b = a;</code>?",
            hi: "<code>var b = a;</code> के बाद कौन-सा कथन सही है?",
            hg: "<code>var b = a;</code> ke baad kaunsa kathan sahi hai?"
          },
          options: [
            {
              en: "If <code>a</code> is a <code>Customer</code> (class), <code>b</code> is an independent copy",
              hi: "अगर <code>a</code> एक <code>Customer</code> (class) है, तो <code>b</code> स्वतंत्र copy है",
              hg: "Agar <code>a</code> ek <code>Customer</code> (class) hai, to <code>b</code> swatantra copy hai"
            },
            {
              en: "If <code>a</code> is a <code>Money</code> (struct), <code>b</code> points to the same data",
              hi: "अगर <code>a</code> एक <code>Money</code> (struct) है, तो <code>b</code> उसी data को point करता है",
              hg: "Agar <code>a</code> ek <code>Money</code> (struct) hai, to <code>b</code> usi data ko point karta hai"
            },
            {
              en: "If <code>a</code> is a <code>Customer</code>, <code>b</code> refers to the same object; if <code>a</code> is a <code>Money</code>, <code>b</code> is a separate copy",
              hi: "अगर <code>a</code> <code>Customer</code> है तो <code>b</code> उसी object को refer करता है; अगर <code>Money</code> है तो <code>b</code> अलग copy है",
              hg: "Agar <code>a</code> <code>Customer</code> hai to <code>b</code> usi object ko refer karta hai; agar <code>Money</code> hai to <code>b</code> alag copy hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>A class variable copies the reference, so both names point to one object. A struct variable copies all its data, so the two are independent.</p>",
            hi: "<p>Class variable reference copy करता है, इसलिए दोनों नाम एक object को point करते हैं। Struct variable पूरा data copy करता है, इसलिए दोनों स्वतंत्र रहते हैं।</p>",
            hg: "<p>Class variable reference copy karta hai, isliye dono naam ek object ko point karte hain. Struct variable poora data copy karta hai, isliye dono swatantra rehte hain.</p>"
          }
        },
        recap: {
          en: "<ul><li>Value type: the variable holds the data; assignment copies the data.</li><li>Reference type: the variable holds a reference; assignment shares one object.</li><li>Default to <code>class</code>; use a small, <code>readonly</code> <code>struct</code> for value-like data.</li></ul>",
          hi: "<ul><li>Value type: variable में data रहता है; assignment data copy करता है।</li><li>Reference type: variable में reference रहता है; assignment एक object share करता है।</li><li>Default <code>class</code> रखो; value जैसे data के लिए छोटा, <code>readonly</code> <code>struct</code> इस्तेमाल करो।</li></ul>",
          hg: "<ul><li>Value type: variable mein data rehta hai; assignment data copy karta hai.</li><li>Reference type: variable mein reference rehta hai; assignment ek object share karta hai.</li><li>Default <code>class</code> rakho; value jaise data ke liye chhota, <code>readonly</code> <code>struct</code> use karo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Class shares, struct copies",
            hi: "Class share करती है, struct copy करता है",
            hg: "Class share karti hai, struct copy karta hai"
          },
          src: "var asha = new Customer { Name = \"Asha\", City = \"Pune\" };\nvar sameAsha = asha;            // copies the reference: one object, two names\nsameAsha.City = \"Mumbai\";\nConsole.WriteLine($\"{asha.Name} lives in {asha.City}\");\n\nvar fee = new Money { Amount = 100m };\nvar feeCopy = fee;              // copies the data: two independent values\nfeeCopy.Amount = 250m;\nConsole.WriteLine($\"fee={fee.Amount} copy={feeCopy.Amount}\");\n\npublic class Customer\n{\n    public string Name { get; set; } = \"\";\n    public string City { get; set; } = \"\";\n}\n\n// Mutable only to show copying; real structs should be readonly (lesson 5).\npublic struct Money { public decimal Amount; }",
          check: "run",
          expected: "Asha lives in Mumbai\nfee=100 copy=250"
        }
      ]
    },
    {
      id: "passing-to-methods",
      depth: "short",
      title: {
        en: "Passing to methods: by value, ref, out, in",
        hi: "Methods को देना: by value, ref, out, in",
        hg: "Methods ko dena: by value, ref, out, in"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 1 showed what a copy means. Now apply it to method calls: a method receives a <b>copy</b> of whatever you pass. <code>ref</code>, <code>out</code> and <code>in</code> change that rule.",
          hi: "पाठ 1 में copy का मतलब देखा। अब उसे method calls पर लगाएँ: method को जो भी दो, उसकी <b>copy</b> मिलती है। <code>ref</code>, <code>out</code> और <code>in</code> इस नियम को बदलते हैं।",
          hg: "Lesson 1 mein copy ka matlab dekha. Ab use method calls par lagayein: method ko jo bhi do, uski <b>copy</b> milti hai. <code>ref</code>, <code>out</code> aur <code>in</code> is niyam ko badalte hain."
        },
        what: {
          en: "<p>By default C# passes arguments <b>by value</b>: the method gets a copy. For a class, that copy is the <i>reference</i>, so the method can change the object's contents, but cannot replace your variable.</p><ul><li><code>out</code>: the method must give a value back through this parameter (the <code>TryXxx</code> pattern).</li><li><code>ref</code>: the method works on your variable itself and may replace it.</li><li><code>in</code>: pass by reference but read-only; no copy of a big struct.</li></ul>",
          hi: "<p>C# में arguments by default <b>by value</b> जाते हैं: method को copy मिलती है। Class के लिए वह copy <i>reference</i> होती है, इसलिए method object के अंदर की बात बदल सकता है, पर आपका variable replace नहीं कर सकता।</p><ul><li><code>out</code>: method को इसी parameter से value लौटानी ही होती है (<code>TryXxx</code> pattern)।</li><li><code>ref</code>: method आपके variable पर ही काम करता है और उसे replace कर सकता है।</li><li><code>in</code>: reference से जाता है पर read-only; बड़े struct की copy नहीं बनती।</li></ul>",
          hg: "<p>C# mein arguments by default <b>by value</b> jaate hain: method ko copy milti hai. Class ke liye woh copy <i>reference</i> hoti hai, isliye method object ke andar ki baat badal sakta hai, par aapka variable replace nahi kar sakta.</p><ul><li><code>out</code>: method ko isi parameter se value lautaani hi hoti hai (<code>TryXxx</code> pattern).</li><li><code>ref</code>: method aapke variable par hi kaam karta hai aur use replace kar sakta hai.</li><li><code>in</code>: reference se jaata hai par read-only; bade struct ki copy nahi banti.</li></ul>"
        },
        why: {
          en: "<p>Looking up a ticket that may not exist is everyday CRM work. <code>out</code> lets one call return both \"found or not\" and the ticket, without exceptions. And knowing that a method can edit your object, but not swap it, explains many \"why did my object change?\" surprises.</p>",
          hi: "<p>ऐसा ticket खोजना जो शायद न हो, CRM का रोज़ का काम है। <code>out</code> से एक ही call \"मिला या नहीं\" और ticket दोनों लौटा देती है, exception के बिना। और यह जानना कि method आपका object edit कर सकता है पर बदल नहीं सकता, कई \"मेरा object क्यों बदल गया?\" वाली हैरानी समझा देता है।</p>",
          hg: "<p>Aisa ticket khojna jo shayad na ho, CRM ka roz ka kaam hai. <code>out</code> se ek hi call \"mila ya nahi\" aur ticket dono lauta deti hai, exception ke bina. Aur ye jaanna ki method aapka object edit kar sakta hai par badal nahi sakta, kai \"mera object kyun badal gaya?\" wali hairani samjha deta hai.</p>"
        },
        analogy: {
          en: "<p>You hand a courier a <b>photocopy of an address slip</b> (by value). He can walk to the house and repaint the gate, but tearing up his photocopy does not change your slip. With <code>ref</code> you give him <b>your own diary page</b>: if he crosses out the address and writes a new one, your diary is changed.</p>",
          hi: "<p>आप courier को <b>address slip की photocopy</b> देते हैं (by value)। वह घर जाकर gate रंग सकता है, पर अपनी photocopy फाड़ने से आपकी slip नहीं बदलती। <code>ref</code> में आप उसे <b>अपनी diary का पन्ना</b> देते हैं: वह पता काटकर नया लिख दे तो आपकी diary बदल जाती है।</p>",
          hg: "<p>Aap courier ko <b>address slip ki photocopy</b> dete hain (by value). Woh ghar jaakar gate rang sakta hai, par apni photocopy phaadne se aapki slip nahi badalti. <code>ref</code> mein aap use <b>apni diary ka panna</b> dete hain: woh pata kaatkar naya likh de to aapki diary badal jaati hai.</p>"
        },
        lines: [
          {
            code: "if (TryFindTicket(tickets, 502, out var found))",
            note: {
              en: "The <code>TryXxx</code> pattern: returns <code>true</code> or <code>false</code> and hands the ticket back through <code>out</code>. <code>out var</code> declares the variable right here.",
              hi: "<code>TryXxx</code> pattern: <code>true</code> या <code>false</code> लौटाता है और ticket <code>out</code> से वापस देता है। <code>out var</code> उसी जगह variable declare कर देता है।",
              hg: "<code>TryXxx</code> pattern: <code>true</code> ya <code>false</code> lautaata hai aur ticket <code>out</code> se wapas deta hai. <code>out var</code> usi jagah variable declare kar deta hai."
            }
          },
          {
            code: "if (!TryFindTicket(tickets, 999, out _))",
            note: {
              en: "<code>out _</code> says \"I do not need the value\". The method still sets it (to <code>null</code>).",
              hi: "<code>out _</code> मतलब \"मुझे value नहीं चाहिए\"। Method फिर भी उसे set करता है (<code>null</code> पर)।",
              hg: "<code>out _</code> matlab \"mujhe value nahi chahiye\". Method phir bhi use set karta hai (<code>null</code> par)."
            }
          },
          {
            code: "AddNote(ticket);",
            note: {
              en: "By value, but the value is a reference to the same object. The method edits that object, and you see the change.",
              hi: "By value, पर value उसी object का reference है। Method उस object को edit करता है और आपको बदलाव दिखता है।",
              hg: "By value, par value usi object ka reference hai. Method us object ko edit karta hai aur aapko badlaav dikhta hai."
            }
          },
          {
            code: "ReplaceByValue(ticket);",
            note: {
              en: "The method assigns a new object to its <b>own copy</b> of the reference. Your <code>ticket</code> still points to ticket 501.",
              hi: "Method reference की <b>अपनी copy</b> में नया object रखता है। आपका <code>ticket</code> अभी भी 501 को ही point करता है।",
              hg: "Method reference ki <b>apni copy</b> mein naya object rakhta hai. Aapka <code>ticket</code> abhi bhi 501 ko hi point karta hai."
            }
          },
          {
            code: "ReplaceByRef(ref ticket);",
            note: {
              en: "With <code>ref</code> the method works on your variable itself, so after the call <code>ticket</code> is the new object (900). You must write <code>ref</code> at the call too.",
              hi: "<code>ref</code> में method आपके variable पर ही काम करता है, इसलिए call के बाद <code>ticket</code> नया object (900) है। Call में भी <code>ref</code> लिखना पड़ता है।",
              hg: "<code>ref</code> mein method aapke variable par hi kaam karta hai, isliye call ke baad <code>ticket</code> naya object (900) hai. Call mein bhi <code>ref</code> likhna padta hai."
            }
          },
          {
            code: "static decimal WithGst(in Money fee)",
            note: {
              en: "<code>in</code> passes the struct by reference without copying it, and the method cannot assign to it (CS8331). Useful for large <code>readonly struct</code>s.",
              hi: "<code>in</code> struct को बिना copy किए reference से देता है, और method उसमें assign नहीं कर सकता (CS8331)। बड़े <code>readonly struct</code> के लिए काम का।",
              hg: "<code>in</code> struct ko bina copy kiye reference se deta hai, aur method usmein assign nahi kar sakta (CS8331). Bade <code>readonly struct</code> ke liye kaam ka."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Expecting <code>o = new Order()</code> inside a method to change the caller's variable. Without <code>ref</code> it does not.</li><li>Forgetting to assign an <code>out</code> parameter on every path: error CS0177. A <code>ref</code> variable must be assigned <i>before</i> the call: error CS0165.</li><li>Adding <code>ref</code> to a class parameter \"for speed\". A reference is already small; <code>ref</code> only lets the method replace your object.</li></ul>",
          hi: "<ul><li>यह उम्मीद करना कि method के अंदर <code>o = new Order()</code> caller का variable बदल देगा। <code>ref</code> के बिना नहीं बदलता।</li><li>हर रास्ते पर <code>out</code> parameter assign करना भूलना: error CS0177। <code>ref</code> variable call से <i>पहले</i> assign होना चाहिए: error CS0165।</li><li>\"speed के लिए\" class parameter पर <code>ref</code> लगाना। Reference पहले से छोटा है; <code>ref</code> सिर्फ़ method को आपका object replace करने देता है।</li></ul>",
          hg: "<ul><li>Ye ummeed karna ki method ke andar <code>o = new Order()</code> caller ka variable badal dega. <code>ref</code> ke bina nahi badalta.</li><li>Har raaste par <code>out</code> parameter assign karna bhoolna: error CS0177. <code>ref</code> variable call se <i>pehle</i> assign hona chahiye: error CS0165.</li><li>\"Speed ke liye\" class parameter par <code>ref</code> lagana. Reference pehle se chhota hai; <code>ref</code> sirf method ko aapka object replace karne deta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use <code>out</code> for <code>TryXxx</code> methods (<code>int.TryParse</code>, <code>dictionary.TryGetValue</code>, your own <code>TryFindTicket</code>). Use <code>in</code> for large <code>readonly struct</code>s on hot paths. Otherwise prefer returning a value or a tuple such as <code>(bool ok, decimal total)</code>; it reads better. <code>ref</code> is rare in business code.</p>",
          hi: "<p><code>TryXxx</code> methods के लिए <code>out</code> इस्तेमाल करो (<code>int.TryParse</code>, <code>dictionary.TryGetValue</code>, आपका अपना <code>TryFindTicket</code>)। Hot paths पर बड़े <code>readonly struct</code> के लिए <code>in</code>। बाक़ी जगह value या tuple लौटाना बेहतर है, जैसे <code>(bool ok, decimal total)</code>; पढ़ने में साफ़ रहता है। Business code में <code>ref</code> कम ही चाहिए।</p>",
          hg: "<p><code>TryXxx</code> methods ke liye <code>out</code> use karo (<code>int.TryParse</code>, <code>dictionary.TryGetValue</code>, aapka apna <code>TryFindTicket</code>). Hot paths par bade <code>readonly struct</code> ke liye <code>in</code>. Baaki jagah value ya tuple lautaana behtar hai, jaise <code>(bool ok, decimal total)</code>; padhne mein saaf rehta hai. Business code mein <code>ref</code> kam hi chahiye.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write <code>static bool TryParseTicketId(string text, out int id)</code> that wraps <code>int.TryParse</code>. Call it with <code>\"501\"</code> and <code>\"abc\"</code> and print <code>501</code> and <code>invalid</code>.</p>",
            hi: "<p><code>static bool TryParseTicketId(string text, out int id)</code> लिखो जो <code>int.TryParse</code> को wrap करे। उसे <code>\"501\"</code> और <code>\"abc\"</code> से call करो और <code>501</code> व <code>invalid</code> print करो।</p>",
            hg: "<p><code>static bool TryParseTicketId(string text, out int id)</code> likho jo <code>int.TryParse</code> ko wrap kare. Use <code>\"501\"</code> aur <code>\"abc\"</code> se call karo aur <code>501</code> va <code>invalid</code> print karo.</p>"
          },
          hint: {
            en: "<p>The body can be one line: <code>return int.TryParse(text, out id);</code>. That assigns <code>id</code> on every path.</p>",
            hi: "<p>Body एक line का हो सकता है: <code>return int.TryParse(text, out id);</code>। इससे <code>id</code> हर रास्ते पर assign हो जाता है।</p>",
            hg: "<p>Body ek line ka ho sakta hai: <code>return int.TryParse(text, out id);</code>. Isse <code>id</code> har raaste par assign ho jaata hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: own TryXxx method",
              hi: "हल: अपना TryXxx method",
              hg: "Solution: apna TryXxx method"
            },
            src: "if (TryParseTicketId(\"501\", out int id)) Console.WriteLine(id);\nif (!TryParseTicketId(\"abc\", out _)) Console.WriteLine(\"invalid\");\n\nstatic bool TryParseTicketId(string text, out int id) => int.TryParse(text, out id);",
            check: "run",
            expected: "501\ninvalid"
          }
        },
        quiz: {
          q: {
            en: "A method does <code>o = new Order();</code> on its parameter (no <code>ref</code>). What does the caller see?",
            hi: "Method अपने parameter पर <code>o = new Order();</code> करता है (<code>ref</code> के बिना)। Caller को क्या दिखता है?",
            hg: "Method apne parameter par <code>o = new Order();</code> karta hai (<code>ref</code> ke bina). Caller ko kya dikhta hai?"
          },
          options: [
            {
              en: "Nothing changes: the caller still has the old object",
              hi: "कुछ नहीं बदलता: caller के पास अभी भी पुराना object है",
              hg: "Kuch nahi badalta: caller ke paas abhi bhi purana object hai"
            },
            {
              en: "The caller's variable now points to the new object",
              hi: "Caller का variable अब नए object को point करता है",
              hg: "Caller ka variable ab naye object ko point karta hai"
            },
            {
              en: "A compile error",
              hi: "Compile error आता है",
              hg: "Compile error aata hai"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>The method got its own copy of the reference. Re-pointing that copy does not touch the caller's variable. Only <code>ref</code> would.</p>",
            hi: "<p>Method को reference की अपनी copy मिली थी। उस copy को नई जगह point करने से caller का variable नहीं छूता। सिर्फ़ <code>ref</code> छूता।</p>",
            hg: "<p>Method ko reference ki apni copy mili thi. Us copy ko nayi jagah point karne se caller ka variable nahi chhoota. Sirf <code>ref</code> chhoota.</p>"
          }
        },
        recap: {
          en: "<ul><li>Arguments go by value: a class passes a copy of the reference, a struct passes a copy of the data.</li><li><code>out</code> for <code>TryXxx</code>, <code>in</code> for big read-only structs, <code>ref</code> only when the method must replace your variable.</li><li>Prefer returning a value or a tuple when you can.</li></ul>",
          hi: "<ul><li>Arguments by value जाते हैं: class में reference की copy जाती है, struct में data की copy।</li><li><code>TryXxx</code> के लिए <code>out</code>, बड़े read-only structs के लिए <code>in</code>, <code>ref</code> सिर्फ़ तब जब method को आपका variable replace करना हो।</li><li>जब हो सके, value या tuple लौटाओ।</li></ul>",
          hg: "<ul><li>Arguments by value jaate hain: class mein reference ki copy jaati hai, struct mein data ki copy.</li><li><code>TryXxx</code> ke liye <code>out</code>, bade read-only structs ke liye <code>in</code>, <code>ref</code> sirf tab jab method ko aapka variable replace karna ho.</li><li>Jab ho sake, value ya tuple lautao.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "TryFindTicket and the parameter modes",
            hi: "TryFindTicket और parameter modes",
            hg: "TryFindTicket aur parameter modes"
          },
          src: "using System.Diagnostics.CodeAnalysis;\n\nvar tickets = new List<SupportTicket>\n{\n    new SupportTicket { Id = 501, Issue = \"Login fails\" },\n    new SupportTicket { Id = 502, Issue = \"Refund pending\" }\n};\n\nif (TryFindTicket(tickets, 502, out var found))\n    Console.WriteLine($\"Found: {found.Issue}\");\nif (!TryFindTicket(tickets, 999, out _))\n    Console.WriteLine(\"Ticket 999 not found\");\n\nvar ticket = tickets[0];\nAddNote(ticket);                 // same object: the caller sees the change\nConsole.WriteLine(ticket.Issue);\nReplaceByValue(ticket);          // only the method's copy of the reference changes\nConsole.WriteLine(ticket.Id);\nReplaceByRef(ref ticket);        // the caller's variable is replaced (demo only: rare)\nConsole.WriteLine(ticket.Id);\n\nvar fee = new Money(100m);\nConsole.WriteLine(WithGst(in fee));\n\nstatic bool TryFindTicket(List<SupportTicket> list, int id, [NotNullWhen(true)] out SupportTicket? ticket)\n{\n    ticket = list.FirstOrDefault(t => t.Id == id);\n    return ticket != null;\n}\n\nstatic void AddNote(SupportTicket t) => t.Issue += \" (note added)\";\nstatic void ReplaceByValue(SupportTicket t) { t = new SupportTicket { Id = 900 }; }\nstatic void ReplaceByRef(ref SupportTicket t) { t = new SupportTicket { Id = 900 }; }\nstatic decimal WithGst(in Money fee) => fee.Amount * 1.18m;\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n}\n\npublic readonly struct Money(decimal amount)\n{\n    public decimal Amount { get; } = amount;\n}",
          check: "run",
          expected: "Found: Refund pending\nTicket 999 not found\nLogin fails (note added)\n501\n900\n118.00"
        }
      ]
    },
    {
      id: "boxing-unboxing",
      depth: "short",
      title: {
        en: "Boxing and unboxing",
        hi: "Boxing और unboxing",
        hg: "Boxing aur unboxing"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 1 said a value type holds its data directly. What if you must put that value where an <code>object</code> is expected? C# wraps it in a heap box. That wrapping is the hidden cost this lesson explains.",
          hi: "पाठ 1 में कहा था कि value type में data सीधे रहता है। अगर उस value को वहाँ रखना पड़े जहाँ <code>object</code> चाहिए? C# उसे heap के डिब्बे में लपेटता है। यही छिपा हुआ खर्च इस पाठ में समझेंगे।",
          hg: "Lesson 1 mein kaha tha ki value type mein data seedha rehta hai. Agar us value ko wahan rakhna pade jahan <code>object</code> chahiye? C# use heap ke dibbe mein lapetta hai. Yahi chhipa hua kharcha is lesson mein samjhenge."
        },
        what: {
          en: "<p><b>Boxing</b> means converting a value type to <code>object</code> (or to an interface it implements). The runtime allocates a small object on the heap and <b>copies</b> the value into it.</p><p><b>Unboxing</b> means casting it back, and it must use the <b>exact</b> original type.</p>",
          hi: "<p><b>Boxing</b> का मतलब value type को <code>object</code> (या उसके interface) में बदलना है। Runtime heap पर एक छोटा object बनाता है और value को उसमें <b>copy</b> कर देता है।</p><p><b>Unboxing</b> का मतलब cast करके वापस निकालना, और इसमें <b>ठीक वही</b> original type लिखना पड़ता है।</p>",
          hg: "<p><b>Boxing</b> ka matlab value type ko <code>object</code> (ya uske interface) mein badalna hai. Runtime heap par ek chhota object banata hai aur value ko usmein <b>copy</b> kar deta hai.</p><p><b>Unboxing</b> ka matlab cast karke wapas nikaalna, aur isme <b>theek wahi</b> original type likhna padta hai.</p>"
        },
        why: {
          en: "<p>Every box is a heap allocation plus extra work for the garbage collector. One box is nothing. But old non-generic collections box on every <code>Add</code>, so a big list of ticket ids slows down and creates garbage. Knowing this helps you spot it in code review.</p>",
          hi: "<p>हर box एक heap allocation है और garbage collector के लिए अतिरिक्त काम। एक box कुछ नहीं। पर पुराने non-generic collections हर <code>Add</code> पर box करते हैं, इसलिए ticket ids की बड़ी list धीमी होती है और कचरा बनता है। यह जानने से code review में पकड़ना आसान होता है।</p>",
          hg: "<p>Har box ek heap allocation hai aur garbage collector ke liye atirikt kaam. Ek box kuch nahi. Par purane non-generic collections har <code>Add</code> par box karte hain, isliye ticket ids ki badi list dheemi hoti hai aur kachra banta hai. Ye jaanne se code review mein pakadna aasaan hota hai.</p>"
        },
        analogy: {
          en: "<p>A courier accepts only <b>boxes</b>. To send one small item (an <code>int</code>), you pack it in a box: that is boxing. The receiver must unpack it and must know exactly what is inside: that is unboxing. If you change the item at home after posting, the parcel does not change, because it holds a <b>copy</b>.</p>",
          hi: "<p>Courier सिर्फ़ <b>डिब्बे</b> लेता है। एक छोटी चीज़ (<code>int</code>) भेजनी हो तो उसे डिब्बे में पैक करना पड़ता है: यही boxing है। पाने वाले को खोलना पड़ता है और ठीक पता होना चाहिए कि अंदर क्या है: यही unboxing है। Post करने के बाद घर पर चीज़ बदलो तो parcel नहीं बदलता, क्योंकि उसमें <b>copy</b> है।</p>",
          hg: "<p>Courier sirf <b>dibbe</b> leta hai. Ek chhoti cheez (<code>int</code>) bhejni ho to use dibbe mein pack karna padta hai: yahi boxing hai. Paane wale ko kholna padta hai aur theek pata hona chahiye ki andar kya hai: yahi unboxing hai. Post karne ke baad ghar par cheez badlo to parcel nahi badalta, kyunki usme <b>copy</b> hai.</p>"
        },
        focus: {
          caption: {
            en: "Boxing needs no special syntax",
            hi: "Boxing के लिए कोई ख़ास syntax नहीं",
            hg: "Boxing ke liye koi khaas syntax nahi"
          },
          src: "object boxed = 12;         // boxing: implicit\nint back = (int)boxed;     // unboxing: explicit, exact type",
          check: "none"
        },
        lines: [
          {
            code: "object boxed = openTickets;",
            note: {
              en: "Boxing happens silently: a copy of <code>12</code> is placed in a new heap object.",
              hi: "Boxing चुपचाप होता है: <code>12</code> की copy एक नए heap object में रखी जाती है।",
              hg: "Boxing chupchaap hota hai: <code>12</code> ki copy ek naye heap object mein rakhi jaati hai."
            }
          },
          {
            code: "openTickets = 15;",
            note: {
              en: "Changing the original does not touch the box, so <code>boxed</code> still prints <code>12</code>.",
              hi: "Original बदलने से box नहीं बदलता, इसलिए <code>boxed</code> अभी भी <code>12</code> print करता है।",
              hg: "Original badalne se box nahi badalta, isliye <code>boxed</code> abhi bhi <code>12</code> print karta hai."
            }
          },
          {
            code: "int back = (int)boxed;",
            note: {
              en: "Unboxing is a cast to the exact type. A boxed <code>int</code> comes back as <code>int</code>.",
              hi: "Unboxing exact type का cast है। Box किया हुआ <code>int</code>, <code>int</code> बनकर ही लौटता है।",
              hg: "Unboxing exact type ka cast hai. Box kiya hua <code>int</code>, <code>int</code> banakar hi lautaata hai."
            }
          },
          {
            code: "long wrong = (long)boxed;",
            note: {
              en: "Throws <code>InvalidCastException</code>: a boxed <code>int</code> is not a <code>long</code>. Unbox to <code>int</code> first, then widen: <code>(long)(int)boxed</code>.",
              hi: "<code>InvalidCastException</code> फेंकता है: box किया हुआ <code>int</code>, <code>long</code> नहीं है। पहले <code>int</code> में unbox करो, फिर चौड़ा करो: <code>(long)(int)boxed</code>।",
              hg: "<code>InvalidCastException</code> phenkta hai: box kiya hua <code>int</code>, <code>long</code> nahi hai. Pehle <code>int</code> mein unbox karo, phir chauda karo: <code>(long)(int)boxed</code>."
            }
          },
          {
            code: "var oldIds = new ArrayList { 501, 502, 503 };",
            note: {
              en: "The old non-generic <code>ArrayList</code> stores <code>object</code>, so every id is boxed and every read needs a cast. Shown here only to avoid.",
              hi: "पुराना non-generic <code>ArrayList</code> <code>object</code> रखता है, इसलिए हर id box होती है और हर पढ़ने पर cast चाहिए। यहाँ सिर्फ़ बचने के लिए दिखाया है।",
              hg: "Purana non-generic <code>ArrayList</code> <code>object</code> rakhta hai, isliye har id box hoti hai aur har padhne par cast chahiye. Yahan sirf bachne ke liye dikhaya hai."
            }
          },
          {
            code: "var newIds = new List<int> { 501, 502, 503 };",
            note: {
              en: "The generic <code>List&lt;int&gt;</code> stores real ints: no boxing, no casts, and the compiler checks the type.",
              hi: "Generic <code>List&lt;int&gt;</code> असली ints रखती है: न boxing, न cast, और compiler type जाँचता है।",
              hg: "Generic <code>List&lt;int&gt;</code> asli ints rakhti hai: na boxing, na cast, aur compiler type jaanchta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Unboxing to a different type, such as <code>(long)boxed</code> for a boxed <code>int</code>: <code>InvalidCastException</code>.</li><li>Using <code>ArrayList</code> or <code>Hashtable</code> in new code. Use <code>List&lt;T&gt;</code> and <code>Dictionary&lt;K,V&gt;</code>.</li><li>Expecting the box to follow later changes of the original variable. The box holds a separate copy.</li></ul>",
          hi: "<ul><li>अलग type में unbox करना, जैसे box किए <code>int</code> के लिए <code>(long)boxed</code>: <code>InvalidCastException</code>।</li><li>नए code में <code>ArrayList</code> या <code>Hashtable</code> इस्तेमाल करना। <code>List&lt;T&gt;</code> और <code>Dictionary&lt;K,V&gt;</code> लो।</li><li>यह सोचना कि box original variable के बाद के बदलाव पर चलेगा। Box में अलग copy है।</li></ul>",
          hg: "<ul><li>Alag type mein unbox karna, jaise box kiye <code>int</code> ke liye <code>(long)boxed</code>: <code>InvalidCastException</code>.</li><li>Naye code mein <code>ArrayList</code> ya <code>Hashtable</code> use karna. <code>List&lt;T&gt;</code> aur <code>Dictionary&lt;K,V&gt;</code> lo.</li><li>Ye sochna ki box original variable ke baad ke badlaav par chalega. Box mein alag copy hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Do not micro-optimise: boxing a number once for a log line is fine. Care about it in tight loops, large collections and high-traffic APIs. There, use generic collections (<code>List&lt;int&gt;</code>), generic methods and <code>IEquatable&lt;T&gt;</code> instead of <code>object</code> parameters. A profiler or allocation report shows hidden boxing clearly.</p>",
          hi: "<p>Micro-optimise मत करो: log की एक line के लिए एक बार number box करना ठीक है। Tight loops, बड़े collections और ज़्यादा traffic वाले APIs में ध्यान दो। वहाँ <code>object</code> parameters की जगह generic collections (<code>List&lt;int&gt;</code>), generic methods और <code>IEquatable&lt;T&gt;</code> लो। Profiler या allocation report छिपी boxing साफ़ दिखा देता है।</p>",
          hg: "<p>Micro-optimise mat karo: log ki ek line ke liye ek baar number box karna theek hai. Tight loops, bade collections aur zyada traffic wale APIs mein dhyaan do. Wahan <code>object</code> parameters ki jagah generic collections (<code>List&lt;int&gt;</code>), generic methods aur <code>IEquatable&lt;T&gt;</code> lo. Profiler ya allocation report chhipi boxing saaf dikha deta hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Box the ticket id <code>501</code> into an <code>object</code>, unbox it into a <code>long</code> the correct way, add <code>1</code>, and print <code>502</code>.</p>",
            hi: "<p>Ticket id <code>501</code> को <code>object</code> में box करो, सही तरीक़े से <code>long</code> में unbox करो, <code>1</code> जोड़ो और <code>502</code> print करो।</p>",
            hg: "<p>Ticket id <code>501</code> ko <code>object</code> mein box karo, sahi tareeqe se <code>long</code> mein unbox karo, <code>1</code> jodo aur <code>502</code> print karo.</p>"
          },
          hint: {
            en: "<p>Unbox to <code>int</code> first, then widen: <code>(long)(int)boxed</code>.</p>",
            hi: "<p>पहले <code>int</code> में unbox करो, फिर widen: <code>(long)(int)boxed</code>।</p>",
            hg: "<p>Pehle <code>int</code> mein unbox karo, phir widen: <code>(long)(int)boxed</code>.</p>"
          },
          solution: {
            caption: {
              en: "Solution: exact-type unboxing",
              hi: "हल: exact type में unboxing",
              hg: "Solution: exact type mein unboxing"
            },
            src: "object boxed = 501;\nlong id = (long)(int)boxed;\nConsole.WriteLine(id + 1);",
            check: "run",
            expected: "502"
          }
        },
        quiz: {
          q: {
            en: "Which line causes boxing?",
            hi: "किस line में boxing होती है?",
            hg: "Kis line mein boxing hoti hai?"
          },
          options: [
            {
              en: "<code>var ids = new List&lt;int&gt;(); ids.Add(501);</code>",
              hi: "<code>var ids = new List&lt;int&gt;(); ids.Add(501);</code> — यह line",
              hg: "<code>var ids = new List&lt;int&gt;(); ids.Add(501);</code> — ye line"
            },
            {
              en: "<code>int next = id + 1;</code>",
              hi: "<code>int next = id + 1;</code> — यह line",
              hg: "<code>int next = id + 1;</code> — ye line"
            },
            {
              en: "<code>Customer c = new Customer();</code>",
              hi: "<code>Customer c = new Customer();</code> — यह line",
              hg: "<code>Customer c = new Customer();</code> — ye line"
            },
            {
              en: "<code>object o = id;</code> where <code>id</code> is an <code>int</code>",
              hi: "<code>object o = id;</code> जहाँ <code>id</code> एक <code>int</code> है",
              hg: "<code>object o = id;</code> jahan <code>id</code> ek <code>int</code> hai"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>Assigning an <code>int</code> to <code>object</code> copies it into a heap box. <code>List&lt;int&gt;</code> stores real ints, and a <code>Customer</code> is already a reference type.</p>",
            hi: "<p><code>int</code> को <code>object</code> में assign करने पर वह heap के box में copy होता है। <code>List&lt;int&gt;</code> असली ints रखती है, और <code>Customer</code> पहले से reference type है।</p>",
            hg: "<p><code>int</code> ko <code>object</code> mein assign karne par woh heap ke box mein copy hota hai. <code>List&lt;int&gt;</code> asli ints rakhti hai, aur <code>Customer</code> pehle se reference type hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Boxing copies a value type into a heap object; unboxing is a cast to the exact type.</li><li>It costs an allocation each time, which matters in hot paths.</li><li>Use generic collections and methods to avoid it.</li></ul>",
          hi: "<ul><li>Boxing value type को heap object में copy करती है; unboxing exact type का cast है।</li><li>हर बार एक allocation लगती है, जो hot paths में मायने रखती है।</li><li>इससे बचने के लिए generic collections और methods लो।</li></ul>",
          hg: "<ul><li>Boxing value type ko heap object mein copy karti hai; unboxing exact type ka cast hai.</li><li>Har baar ek allocation lagti hai, jo hot paths mein maayne rakhti hai.</li><li>Isse bachne ke liye generic collections aur methods lo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Boxing, exact-type unboxing, and generics",
            hi: "Boxing, exact-type unboxing और generics",
            hg: "Boxing, exact-type unboxing aur generics"
          },
          src: "using System.Collections;\n\nint openTickets = 12;\nobject boxed = openTickets;      // boxing: a copy goes to the heap\nopenTickets = 15;                // the box is not affected\nConsole.WriteLine($\"openTickets={openTickets}, boxed={boxed}\");\n\nint back = (int)boxed;           // unboxing: exact type\nConsole.WriteLine(back + 1);\n\ntry\n{\n    long wrong = (long)boxed;    // a boxed int is not a long\n    Console.WriteLine(wrong);\n}\ncatch (InvalidCastException)\n{\n    Console.WriteLine(\"InvalidCastException: unbox to the exact type\");\n}\nlong widened = (int)boxed;       // unbox to int first, then widen\nConsole.WriteLine(widened);\n\n// Old way (avoid): every Add boxes, every read needs a cast.\nvar oldIds = new ArrayList { 501, 502, 503 };\nint sumOld = 0;\nforeach (object o in oldIds) sumOld += (int)o;\n\n// Better: a generic list stores real ints, no boxing.\nvar newIds = new List<int> { 501, 502, 503 };\nint sumNew = 0;\nforeach (int id in newIds) sumNew += id;\n\nConsole.WriteLine($\"{sumOld} {sumNew}\");",
          check: "run",
          expected: "openTickets=15, boxed=12\n13\nInvalidCastException: unbox to the exact type\n12\n1506 1506"
        }
      ]
    },
    {
      id: "strings-stringbuilder",
      depth: "short",
      title: {
        en: "Strings: immutability and StringBuilder",
        hi: "Strings: immutability और StringBuilder",
        hg: "Strings: immutability aur StringBuilder"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 3 showed a hidden cost: boxing quietly copies a value to the heap. Strings have a similar hidden cost. A <code>string</code> is a reference type (lesson 1), yet it never changes after creation, so every \"edit\" makes a new copy. Here you see why, and build a ticket report the efficient way.",
          hi: "पाठ 3 में एक छिपा खर्च देखा: boxing चुपचाप value को heap पर copy करती है। Strings में भी ऐसा ही छिपा खर्च है। <code>string</code> reference type है (पाठ 1), फिर भी बनने के बाद कभी नहीं बदलती, इसलिए हर \"edit\" एक नई copy बनाता है। यहाँ वजह समझेंगे और ticket report सही (efficient) तरीक़े से बनाएँगे।",
          hg: "Lesson 3 mein ek chhipa kharcha dekha: boxing chupchaap value ko heap par copy karti hai. Strings mein bhi aisa hi chhipa kharcha hai. <code>string</code> reference type hai (lesson 1), phir bhi banne ke baad kabhi nahi badalti, isliye har \"edit\" ek nayi copy banata hai. Yahan wajah samjhenge aur ticket report sahi (efficient) tareeqe se banayenge."
        },
        what: {
          en: "<p>A <code>string</code> is <b>immutable</b>: once created, its text never changes. Every \"change\" (<code>+=</code>, <code>Replace</code>, <code>ToUpper</code>, <code>Trim</code>) returns a <b>new</b> string and leaves the old one alone.</p><p><code>StringBuilder</code> is a growable text buffer. You append many pieces, then call <code>ToString()</code> once at the end.</p>",
          hi: "<p><code>string</code> <b>immutable</b> है: बनने के बाद उसका text कभी नहीं बदलता। हर \"बदलाव\" (<code>+=</code>, <code>Replace</code>, <code>ToUpper</code>, <code>Trim</code>) एक <b>नई</b> string लौटाता है और पुरानी को नहीं छूता।</p><p><code>StringBuilder</code> बढ़ने वाला text buffer है। कई टुकड़े append करो, फिर अंत में एक बार <code>ToString()</code> बुलाओ।</p>",
          hg: "<p><code>string</code> <b>immutable</b> hai: banne ke baad uska text kabhi nahi badalta. Har \"badlaav\" (<code>+=</code>, <code>Replace</code>, <code>ToUpper</code>, <code>Trim</code>) ek <b>nayi</b> string lautaata hai aur purani ko nahi chhoota.</p><p><code>StringBuilder</code> badhne wala text buffer hai. Kai tukde append karo, phir ant mein ek baar <code>ToString()</code> bulao.</p>"
        },
        why: {
          en: "<p>Immutable strings are safe to share between threads and safe as dictionary keys. The price: <code>s += x</code> in a loop copies the whole text every pass. A report with thousands of tickets would create thousands of throw-away strings. <code>StringBuilder</code> avoids that.</p>",
          hi: "<p>Immutable strings threads के बीच share करने और dictionary keys के लिए सुरक्षित हैं। क़ीमत: loop में <code>s += x</code> हर बार पूरा text दोबारा copy करता है। हज़ारों tickets की report में हज़ारों बेकार strings बनतीं। <code>StringBuilder</code> इससे बचाता है।</p>",
          hg: "<p>Immutable strings threads ke beech share karne aur dictionary keys ke liye surakshit hain. Keemat: loop mein <code>s += x</code> har baar poora text dobara copy karta hai. Hazaaron tickets ki report mein hazaaron bekaar strings banti. <code>StringBuilder</code> isse bachata hai.</p>"
        },
        analogy: {
          en: "<p>A <b>printed railway ticket</b> cannot be edited: a spelling correction means printing a new ticket. That is a <code>string</code>. A <code>StringBuilder</code> is your <b>rough notebook</b>: write, cut and add on the same page, then make one clean copy at the end.</p>",
          hi: "<p>छपे हुए <b>रेल टिकट</b> में बदलाव नहीं होता: spelling ठीक करनी हो तो नया टिकट छपता है। यह <code>string</code> है। <code>StringBuilder</code> आपकी <b>रफ़ कॉपी</b> है: एक ही पन्ने पर लिखो, काटो, जोड़ो, और अंत में एक साफ़ कॉपी बनाओ।</p>",
          hg: "<p>Chhape hue <b>rail ticket</b> mein badlaav nahi hota: spelling theek karni ho to naya ticket chhapta hai. Ye <code>string</code> hai. <code>StringBuilder</code> aapki <b>rough copy</b> hai: ek hi panne par likho, kaato, jodo, aur ant mein ek saaf copy banao.</p>"
        },
        lines: [
          {
            code: "status.ToUpper();",
            note: {
              en: "The new uppercase string is thrown away. <code>status</code> is unchanged and still prints <code>open</code>.",
              hi: "नई uppercase string फेंक दी जाती है। <code>status</code> नहीं बदला और अभी भी <code>open</code> print होता है।",
              hg: "Nayi uppercase string phenk di jaati hai. <code>status</code> nahi badla aur abhi bhi <code>open</code> print hota hai."
            }
          },
          {
            code: "status = status.ToUpper();",
            note: {
              en: "Keep the <b>new</b> string by assigning it back. Now it prints <code>OPEN</code>.",
              hi: "<b>नई</b> string को वापस assign करके रखो। अब <code>OPEN</code> print होता है।",
              hg: "<b>Nayi</b> string ko wapas assign karke rakho. Ab <code>OPEN</code> print hota hai."
            }
          },
          {
            code: "var report = new StringBuilder();",
            note: {
              en: "One growable buffer. Appending to it does not create a new string each time.",
              hi: "एक बढ़ने वाला buffer। उसमें append करने पर हर बार नई string नहीं बनती।",
              hg: "Ek badhne wala buffer. Usme append karne par har baar nayi string nahi banti."
            }
          },
          {
            code: "report.AppendLine($\"#{id} {customer}: {issue}\");",
            note: {
              en: "Interpolation (<code>$\"...\"</code>) builds each line from a few fixed pieces: clear and efficient. <code>AppendLine</code> adds a line break.",
              hi: "Interpolation (<code>$\"...\"</code>) कुछ तय टुकड़ों से हर line बनाता है: साफ़ और efficient। <code>AppendLine</code> line break जोड़ता है।",
              hg: "Interpolation (<code>$\"...\"</code>) kuch tay tukdon se har line banata hai: saaf aur efficient. <code>AppendLine</code> line break jodta hai."
            }
          },
          {
            code: "Console.Write(report.ToString());",
            note: {
              en: "The single final string is made here, once.",
              hi: "अंतिम एक string यहाँ, एक ही बार बनती है।",
              hg: "Antim ek string yahan, ek hi baar banti hai."
            }
          },
          {
            code: "string.Join(\", \", tickets.Select(t => t.Id))",
            note: {
              en: "<code>string.Join</code> is the neat way to glue a whole collection with a separator.",
              hi: "<code>string.Join</code> पूरे collection को separator के साथ जोड़ने का सबसे साफ़ तरीक़ा है।",
              hg: "<code>string.Join</code> poore collection ko separator ke saath jodne ka sabse saaf tareeqa hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Calling <code>name.Trim();</code> or <code>ToUpper()</code> on its own line and expecting <code>name</code> to change. Assign the result.</li><li>Trying <code>s[0] = 'x';</code>: error CS0200, strings are read-only. Build a new string instead.</li><li>Using <code>+=</code> in a big loop, or the opposite: a <code>StringBuilder</code> for just two or three pieces, which only adds noise.</li></ul>",
          hi: "<ul><li><code>name.Trim();</code> या <code>ToUpper()</code> को अकेली line में बुलाकर उम्मीद करना कि <code>name</code> बदलेगा। Result को assign करो।</li><li><code>s[0] = 'x';</code> की कोशिश: error CS0200, strings read-only हैं। नई string बनाओ।</li><li>बड़े loop में <code>+=</code>, या उल्टा: दो-तीन टुकड़ों के लिए <code>StringBuilder</code>, जो बस शोर बढ़ाता है।</li></ul>",
          hg: "<ul><li><code>name.Trim();</code> ya <code>ToUpper()</code> ko akeli line mein bulaakar ummeed karna ki <code>name</code> badlega. Result ko assign karo.</li><li><code>s[0] = 'x';</code> ki koshish: error CS0200, strings read-only hain. Nayi string banao.</li><li>Bade loop mein <code>+=</code>, ya ulta: do-teen tukdon ke liye <code>StringBuilder</code>, jo bas shor badhata hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>A few fixed pieces: <code>+</code> or <code>$\"...\"</code>. A loop or an unknown number of appends (report, CSV, email body): <code>StringBuilder</code>. A whole collection: <code>string.Join</code>. Compare text with <code>==</code> or <code>StringComparison.OrdinalIgnoreCase</code>, never by reference (details in the Deep Dive).</p>",
          hi: "<p>कुछ तय टुकड़े: <code>+</code> या <code>$\"...\"</code>। Loop या अनजानी संख्या में append (report, CSV, email body): <code>StringBuilder</code>। पूरा collection: <code>string.Join</code>। Text की तुलना <code>==</code> या <code>StringComparison.OrdinalIgnoreCase</code> से करो, reference से कभी नहीं (विवरण Deep Dive में)।</p>",
          hg: "<p>Kuch tay tukde: <code>+</code> ya <code>$\"...\"</code>. Loop ya anjaani sankhya mein append (report, CSV, email body): <code>StringBuilder</code>. Poora collection: <code>string.Join</code>. Text ki tulna <code>==</code> ya <code>StringComparison.OrdinalIgnoreCase</code> se karo, reference se kabhi nahi (vivaran Deep Dive mein).</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a total line to the report: after the loop, append <code>Total: 3</code> using <code>report.AppendLine($\"Total: {tickets.Length}\")</code>, and print the whole report.</p>",
            hi: "<p>Report में total की line जोड़ो: loop के बाद <code>report.AppendLine($\"Total: {tickets.Length}\")</code> से <code>Total: 3</code> append करो, और पूरी report print करो।</p>",
            hg: "<p>Report mein total ki line jodo: loop ke baad <code>report.AppendLine($\"Total: {tickets.Length}\")</code> se <code>Total: 3</code> append karo, aur poori report print karo.</p>"
          },
          hint: {
            en: "<p>Write the new <code>AppendLine</code> after the <code>foreach</code> and before <code>Console.Write</code>.</p>",
            hi: "<p>नई <code>AppendLine</code> को <code>foreach</code> के बाद और <code>Console.Write</code> से पहले लिखो।</p>",
            hg: "<p>Nayi <code>AppendLine</code> ko <code>foreach</code> ke baad aur <code>Console.Write</code> se pehle likho.</p>"
          },
          solution: {
            caption: {
              en: "Solution: report with a total",
              hi: "हल: total के साथ report",
              hg: "Solution: total ke saath report"
            },
            src: "using System.Text;\n\nvar tickets = new[] { 501, 502, 503 };\nvar report = new StringBuilder();\nforeach (int id in tickets)\n    report.AppendLine($\"#{id}\");\nreport.AppendLine($\"Total: {tickets.Length}\");\nConsole.Write(report.ToString());",
            check: "run",
            expected: "#501\n#502\n#503\nTotal: 3"
          }
        },
        quiz: {
          q: {
            en: "After <code>string s = \"ticket\"; s.ToUpper();</code> what is <code>s</code>?",
            hi: "<code>string s = \"ticket\"; s.ToUpper();</code> के बाद <code>s</code> क्या है?",
            hg: "<code>string s = \"ticket\"; s.ToUpper();</code> ke baad <code>s</code> kya hai?"
          },
          options: [
            {
              en: "<code>\"TICKET\"</code>",
              hi: "<code>\"TICKET\"</code> होगा",
              hg: "<code>\"TICKET\"</code> hoga"
            },
            {
              en: "<code>\"ticket\"</code>, because the result was not assigned",
              hi: "<code>\"ticket\"</code>, क्योंकि result assign नहीं हुआ",
              hg: "<code>\"ticket\"</code>, kyunki result assign nahi hua"
            },
            {
              en: "<code>null</code>",
              hi: "<code>null</code> होगा",
              hg: "<code>null</code> hoga"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>Strings are immutable. <code>ToUpper()</code> returns a new string; unless you assign it, it is lost and <code>s</code> stays <code>\"ticket\"</code>.</p>",
            hi: "<p>Strings immutable हैं। <code>ToUpper()</code> नई string लौटाता है; assign न करो तो वह खो जाती है और <code>s</code> <code>\"ticket\"</code> ही रहता है।</p>",
            hg: "<p>Strings immutable hain. <code>ToUpper()</code> nayi string lautaata hai; assign na karo to woh kho jaati hai aur <code>s</code> <code>\"ticket\"</code> hi rehta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>A string never changes; every \"change\" returns a new string, so assign the result.</li><li><code>StringBuilder</code> for loops and unknown counts; <code>$\"...\"</code> for a few pieces; <code>string.Join</code> for a collection.</li><li>Compare text with <code>==</code> or an Ordinal comparer.</li></ul>",
          hi: "<ul><li>String कभी नहीं बदलती; हर \"बदलाव\" नई string लौटाता है, इसलिए result को assign करो।</li><li>Loops और अनजानी गिनती के लिए <code>StringBuilder</code>; कुछ टुकड़ों के लिए <code>$\"...\"</code>; collection के लिए <code>string.Join</code>।</li><li>Text की तुलना <code>==</code> या Ordinal comparer से करो।</li></ul>",
          hg: "<ul><li>String kabhi nahi badalti; har \"badlaav\" nayi string lautaata hai, isliye result ko assign karo.</li><li>Loops aur anjaani ginti ke liye <code>StringBuilder</code>; kuch tukdon ke liye <code>$\"...\"</code>; collection ke liye <code>string.Join</code>.</li><li>Text ki tulna <code>==</code> ya Ordinal comparer se karo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Building a ticket report",
            hi: "Ticket report बनाना",
            hg: "Ticket report banana"
          },
          src: "using System.Text;\n\nstring status = \"open\";\nstatus.ToUpper();                // the new string is thrown away\nConsole.WriteLine(status);\nstatus = status.ToUpper();       // keep the NEW string\nConsole.WriteLine(status);\n\nvar tickets = new (int Id, string Customer, string Issue)[]\n{\n    (501, \"Asha\", \"Login fails\"),\n    (502, \"Ravi\", \"Refund pending\"),\n    (503, \"Meena\", \"Wrong invoice\")\n};\n\n// A loop: one growing buffer, one final string\nvar report = new StringBuilder();\nreport.AppendLine(\"Ticket report\");\nforeach (var (id, customer, issue) in tickets)\n    report.AppendLine($\"#{id} {customer}: {issue}\");\nConsole.Write(report.ToString());\n\n// Joining a whole collection\nConsole.WriteLine(string.Join(\", \", tickets.Select(t => t.Id)));",
          check: "run",
          expected: "open\nOPEN\nTicket report\n#501 Asha: Login fails\n#502 Ravi: Refund pending\n#503 Meena: Wrong invoice\n501, 502, 503"
        }
      ]
    },
    {
      id: "immutability",
      depth: "short",
      title: {
        en: "Immutability: const, readonly, init",
        hi: "Immutability: const, readonly, init (बदलाव रोकना)",
        hg: "Immutability: const, readonly, init (badlaav rokna)"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 4 showed that a <code>string</code> never changes after creation. You can give your own types the same safety. Here the <code>SupportTicket</code> gets a fixed id, a fixed creation date and shared SLA rules.",
          hi: "पाठ 4 में देखा कि <code>string</code> बनने के बाद कभी नहीं बदलती। यही सुरक्षा आप अपने types को भी दे सकते हैं। यहाँ <code>SupportTicket</code> को पक्की id, पक्की creation date और shared SLA नियम मिलते हैं।",
          hg: "Lesson 4 mein dekha ki <code>string</code> banne ke baad kabhi nahi badalti. Yahi suraksha aap apne types ko bhi de sakte hain. Yahan <code>SupportTicket</code> ko pakki id, pakki creation date aur shared SLA niyam milte hain."
        },
        what: {
          en: "<p>Immutability means a value cannot change after it is set. C# has four tools:</p><ul><li><code>const</code>: a compile-time constant (numbers, <code>bool</code>, <code>char</code>, <code>string</code>, enums).</li><li><code>readonly</code>: a field you can assign only in its declaration or the constructor. <code>static readonly</code> is one runtime value per type.</li><li>get-only property (<code>{ get; }</code>): set once in the constructor.</li><li><code>init</code>: a property you can set only while creating the object.</li></ul>",
          hi: "<p>Immutability का मतलब है कि value set होने के बाद बदल नहीं सकती। C# में चार औज़ार हैं:</p><ul><li><code>const</code>: compile-time constant, यानी build के समय ही तय पक्का मान (numbers, <code>bool</code>, <code>char</code>, <code>string</code>, enums)।</li><li><code>readonly</code>: ऐसा field जो सिर्फ़ declaration में या constructor में assign हो सकता है। <code>static readonly</code> हर type का एक runtime value है।</li><li>get-only property (<code>{ get; }</code>): constructor में एक बार set होती है।</li><li><code>init</code>: ऐसी property जो सिर्फ़ object बनाते समय set हो सकती है।</li></ul>",
          hg: "<p>Immutability ka matlab hai ki value set hone ke baad badal nahi sakti. C# mein chaar auzaar hain:</p><ul><li><code>const</code>: compile-time constant, yaani build ke samay hi tay pakka maan (numbers, <code>bool</code>, <code>char</code>, <code>string</code>, enums).</li><li><code>readonly</code>: aisa field jo sirf declaration mein ya constructor mein assign ho sakta hai. <code>static readonly</code> har type ka ek runtime value hai.</li><li>get-only property (<code>{ get; }</code>): constructor mein ek baar set hoti hai.</li><li><code>init</code>: aisi property jo sirf object banate samay set ho sakti hai.</li></ul>"
        },
        why: {
          en: "<p>A ticket's id and creation date must never change by accident, or reports and SLA checks become wrong. Immutable data is also safe to share between threads and easy to reason about: if it cannot change, nobody can break it.</p>",
          hi: "<p>Ticket की id और creation date ग़लती से कभी नहीं बदलनी चाहिए, वरना reports और SLA जाँच ग़लत हो जाती हैं। Immutable data threads के बीच share करना भी सुरक्षित है और समझना आसान: जो बदल ही नहीं सकता, उसे कोई बिगाड़ नहीं सकता।</p>",
          hg: "<p>Ticket ki id aur creation date galti se kabhi nahi badalni chahiye, warna reports aur SLA jaanch galat ho jaati hain. Immutable data threads ke beech share karna bhi surakshit hai aur samajhna aasaan: jo badal hi nahi sakta, use koi bigaad nahi sakta.</p>"
        },
        analogy: {
          en: "<p>The <b>MRP printed on a packet</b> is fixed at the factory and the same on every bill: <code>const</code>. The <b>manufacturing date</b> is stamped once when each packet is made, and differs per packet: <code>readonly</code> or <code>init</code>.</p>",
          hi: "<p>पैकेट पर छपा <b>MRP</b> फ़ैक्टरी में तय होता है और हर bill पर वही रहता है: <code>const</code>। <b>निर्माण की तारीख़</b> हर पैकेट बनते समय एक बार छपती है और पैकेट-पैकेट अलग होती है: <code>readonly</code> या <code>init</code>।</p>",
          hg: "<p>Packet par chhapa <b>MRP</b> factory mein tay hota hai aur har bill par wahi rehta hai: <code>const</code>. <b>Nirmaan ki taareekh</b> har packet bante samay ek baar chhapti hai aur packet-packet alag hoti hai: <code>readonly</code> ya <code>init</code>.</p>"
        },
        lines: [
          {
            code: "public const int MaxReopens = 3;",
            note: {
              en: "A compile-time constant, shared by all tickets (implicitly <code>static</code>). The value is copied into every assembly that uses it.",
              hi: "Compile-time constant, सभी tickets में shared (अपने आप <code>static</code>)। यह value हर उस assembly में copy हो जाती है जो इसे इस्तेमाल करती है।",
              hg: "Compile-time constant, sabhi tickets mein shared (apne aap <code>static</code>). Ye value har us assembly mein copy ho jaati hai jo ise use karti hai."
            }
          },
          {
            code: "public static readonly TimeSpan Sla = TimeSpan.FromHours(24);",
            note: {
              en: "A <code>TimeSpan</code> cannot be <code>const</code> (error CS0283), so use <code>static readonly</code>: one runtime value for the whole type.",
              hi: "<code>TimeSpan</code> <code>const</code> नहीं हो सकता (error CS0283), इसलिए <code>static readonly</code> लो: पूरे type के लिए एक runtime value।",
              hg: "<code>TimeSpan</code> <code>const</code> nahi ho sakta (error CS0283), isliye <code>static readonly</code> lo: poore type ke liye ek runtime value."
            }
          },
          {
            code: "private readonly List<string> _notes = [];",
            note: {
              en: "A <code>readonly</code> field: the variable always points to the same list. It is <b>shallow</b>: the list itself can still grow.",
              hi: "<code>readonly</code> field: variable हमेशा उसी list को point करता है। यह <b>shallow</b> है: list खुद अभी भी बढ़ सकती है।",
              hg: "<code>readonly</code> field: variable hamesha usi list ko point karta hai. Ye <b>shallow</b> hai: list khud abhi bhi badh sakti hai."
            }
          },
          {
            code: "public int Id { get; } = id;",
            note: {
              en: "A get-only property, set from the constructor parameter. There is no setter, so the id can never change.",
              hi: "Get-only property, constructor के parameter से set। Setter नहीं है, इसलिए id कभी नहीं बदल सकती।",
              hg: "Get-only property, constructor ke parameter se set. Setter nahi hai, isliye id kabhi nahi badal sakti."
            }
          },
          {
            code: "public required string Issue { get; init; }",
            note: {
              en: "<code>init</code> allows setting only in the object initializer. A later <code>ticket.Issue = ...</code> is error CS8852. <code>required</code> forces the caller to set it.",
              hi: "<code>init</code> सिर्फ़ object initializer में set करने देता है। बाद में <code>ticket.Issue = ...</code> पर error CS8852 आता है। <code>required</code> caller को set करने पर मजबूर करता है।",
              hg: "<code>init</code> sirf object initializer mein set karne deta hai. Baad mein <code>ticket.Issue = ...</code> par error CS8852 aata hai. <code>required</code> caller ko set karne par majboor karta hai."
            }
          },
          {
            code: "public IReadOnlyList<string> Notes => _notes;",
            note: {
              en: "Callers get a read-only view, so they can read notes but cannot <code>Add</code>. Only <code>AddNote</code> changes the list.",
              hi: "Callers को read-only view मिलता है, इसलिए वे notes पढ़ सकते हैं पर <code>Add</code> नहीं कर सकते। सिर्फ़ <code>AddNote</code> list बदलता है।",
              hg: "Callers ko read-only view milta hai, isliye woh notes padh sakte hain par <code>Add</code> nahi kar sakte. Sirf <code>AddNote</code> list badalta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Making <code>public const</code> values in a library for things that may change. Callers keep the old value until they recompile; use <code>static readonly</code> instead.</li><li>Believing <code>readonly</code> makes the object inside unchangeable. A <code>readonly List&lt;T&gt;</code> field cannot point to another list, but anyone can still <code>Add</code> to it.</li><li>Assigning a <code>readonly</code> field outside the constructor: error CS0191. A non-constant value for <code>const</code>: error CS0133.</li></ul>",
          hi: "<ul><li>Library में बदल सकने वाली चीज़ों के लिए <code>public const</code> बनाना। Callers recompile होने तक पुरानी value रखते हैं; इसके बजाय <code>static readonly</code> लो।</li><li>यह मानना कि <code>readonly</code> अंदर के object को भी न बदलने वाला बना देता है। <code>readonly List&lt;T&gt;</code> field दूसरी list को point नहीं कर सकता, पर उसमें कोई भी <code>Add</code> कर सकता है।</li><li><code>readonly</code> field को constructor के बाहर assign करना: error CS0191। <code>const</code> को non-constant value देना: error CS0133।</li></ul>",
          hg: "<ul><li>Library mein badal sakne wali cheezon ke liye <code>public const</code> banana. Callers recompile hone tak purani value rakhte hain; iske bajay <code>static readonly</code> lo.</li><li>Ye maanna ki <code>readonly</code> andar ke object ko bhi na badalne wala bana deta hai. <code>readonly List&lt;T&gt;</code> field doosri list ko point nahi kar sakta, par usmein koi bhi <code>Add</code> kar sakta hai.</li><li><code>readonly</code> field ko constructor ke bahar assign karna: error CS0191. <code>const</code> ko non-constant value dena: error CS0133.</li></ul>"
        },
        whenToUse: {
          en: "<p>Make values and messages immutable: money, ids, creation dates, DTOs, settings snapshots. Use <code>const</code> only for values that can never change (such as 7 days in a week) inside one assembly, and <code>static readonly</code> for other shared values. Entities that move through states (a ticket going Open to Closed) are naturally mutable; protect them with encapsulation (Day 1) instead of forcing a new object on every change.</p>",
          hi: "<p>Values और messages को immutable बनाओ: पैसा, ids, creation dates, DTOs, settings की snapshot। <code>const</code> सिर्फ़ उन मानों के लिए जो कभी नहीं बदलेंगे (जैसे हफ़्ते में 7 दिन), और वह भी एक ही assembly के अंदर; बाक़ी shared values के लिए <code>static readonly</code>। जो entities states से गुज़रती हैं (ticket का Open से Closed होना) वे स्वभाव से mutable हैं; हर बदलाव पर नया object बनाने के बजाय उन्हें encapsulation (Day 1) से सुरक्षित रखो।</p>",
          hg: "<p>Values aur messages ko immutable banao: paisa, ids, creation dates, DTOs, settings ki snapshot. <code>const</code> sirf un values ke liye jo kabhi nahi badlengi (jaise hafte mein 7 din), aur woh bhi ek hi assembly ke andar; baaki shared values ke liye <code>static readonly</code>. Jo entities states se guzarti hain (ticket ka Open se Closed hona) woh swabhaav se mutable hain; har badlaav par naya object banane ke bajay unhe encapsulation (Day 1) se surakshit rakho.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add an init-only property <code>public int Priority { get; init; } = 1;</code> to the ticket, create a ticket with <code>Priority = 8</code>, and print <code>Priority 8</code>.</p>",
            hi: "<p>Ticket में init-only property <code>public int Priority { get; init; } = 1;</code> जोड़ो, <code>Priority = 8</code> वाला ticket बनाओ और <code>Priority 8</code> print करो।</p>",
            hg: "<p>Ticket mein init-only property <code>public int Priority { get; init; } = 1;</code> jodo, <code>Priority = 8</code> wala ticket banao aur <code>Priority 8</code> print karo.</p>"
          },
          hint: {
            en: "<p>Set it in the object initializer: <code>new SupportTicket { Priority = 8 }</code>. Setting it later would be error CS8852.</p>",
            hi: "<p>Object initializer में set करो: <code>new SupportTicket { Priority = 8 }</code>। बाद में set करना error CS8852 होता।</p>",
            hg: "<p>Object initializer mein set karo: <code>new SupportTicket { Priority = 8 }</code>. Baad mein set karna error CS8852 hota.</p>"
          },
          solution: {
            caption: {
              en: "Solution: an init-only property",
              hi: "हल: init-only property",
              hg: "Solution: init-only property"
            },
            src: "var ticket = new SupportTicket { Priority = 8 };\nConsole.WriteLine($\"Priority {ticket.Priority}\");\n\npublic class SupportTicket\n{\n    public int Priority { get; init; } = 1;\n}",
            check: "run",
            expected: "Priority 8"
          }
        },
        quiz: {
          q: {
            en: "You need one shared <code>TimeSpan</code> SLA value for all tickets. Which declaration is correct?",
            hi: "सभी tickets के लिए एक shared <code>TimeSpan</code> SLA value चाहिए। कौन-सा declaration सही है?",
            hg: "Sabhi tickets ke liye ek shared <code>TimeSpan</code> SLA value chahiye. Kaunsa declaration sahi hai?"
          },
          options: [
            {
              en: "<code>public const TimeSpan Sla = TimeSpan.FromHours(24);</code>",
              hi: "<code>public const TimeSpan Sla = TimeSpan.FromHours(24);</code> — यह",
              hg: "<code>public const TimeSpan Sla = TimeSpan.FromHours(24);</code> — ye"
            },
            {
              en: "<code>public init TimeSpan Sla = TimeSpan.FromHours(24);</code>",
              hi: "<code>public init TimeSpan Sla = TimeSpan.FromHours(24);</code> — यह",
              hg: "<code>public init TimeSpan Sla = TimeSpan.FromHours(24);</code> — ye"
            },
            {
              en: "<code>public static readonly TimeSpan Sla = TimeSpan.FromHours(24);</code>",
              hi: "<code>public static readonly TimeSpan Sla = TimeSpan.FromHours(24);</code> — यह",
              hg: "<code>public static readonly TimeSpan Sla = TimeSpan.FromHours(24);</code> — ye"
            }
          ],
          answer: 2,
          explain: {
            en: "<p><code>TimeSpan</code> cannot be <code>const</code> (CS0283), and <code>init</code> belongs on properties, not fields. <code>static readonly</code> gives one runtime value per type.</p>",
            hi: "<p><code>TimeSpan</code> <code>const</code> नहीं हो सकता (CS0283), और <code>init</code> properties के लिए है, fields के लिए नहीं। <code>static readonly</code> हर type का एक runtime value देता है।</p>",
            hg: "<p><code>TimeSpan</code> <code>const</code> nahi ho sakta (CS0283), aur <code>init</code> properties ke liye hai, fields ke liye nahi. <code>static readonly</code> har type ka ek runtime value deta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>const</code> = compile-time; <code>readonly</code> = set once in a constructor; <code>init</code> = set only while creating.</li><li>Use <code>static readonly</code> when <code>const</code> is not allowed (<code>TimeSpan</code>, objects).</li><li><code>readonly</code> is shallow: a readonly list can still be changed; expose <code>IReadOnlyList&lt;T&gt;</code>.</li></ul>",
          hi: "<ul><li><code>const</code> = compile-time; <code>readonly</code> = constructor में एक बार set; <code>init</code> = सिर्फ़ बनाते समय set।</li><li>जब <code>const</code> मना हो (<code>TimeSpan</code>, objects) तब <code>static readonly</code> लो।</li><li><code>readonly</code> shallow है: readonly list फिर भी बदल सकती है; <code>IReadOnlyList&lt;T&gt;</code> बाहर दिखाओ।</li></ul>",
          hg: "<ul><li><code>const</code> = compile-time; <code>readonly</code> = constructor mein ek baar set; <code>init</code> = sirf banate samay set.</li><li>Jab <code>const</code> mana ho (<code>TimeSpan</code>, objects) tab <code>static readonly</code> lo.</li><li><code>readonly</code> shallow hai: readonly list phir bhi badal sakti hai; <code>IReadOnlyList&lt;T&gt;</code> bahar dikhao.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A ticket with fixed id, date and SLA rules",
            hi: "पक्की id, date और SLA नियमों वाला ticket",
            hg: "Pakki id, date aur SLA niyamon wala ticket"
          },
          src: "var ticket = new SupportTicket(501, new DateTime(2026, 10, 26)) { Issue = \"Login fails\" };\n// ticket.Issue = \"Other\";           // CS8852: init-only property\nticket.AddNote(\"Customer called back\");\n\nConsole.WriteLine($\"#{ticket.Id} {ticket.Issue}\");\nConsole.WriteLine($\"Created {ticket.CreatedAt:yyyy-MM-dd}, due {ticket.DueAt:yyyy-MM-dd}\");\nConsole.WriteLine($\"SLA {SupportTicket.Sla.TotalHours}h, max reopens {SupportTicket.MaxReopens}\");\nConsole.WriteLine(ticket.Notes.Count);\n\npublic class SupportTicket(int id, DateTime createdAt)\n{\n    public const int MaxReopens = 3;                                       // compile-time constant\n    public static readonly TimeSpan Sla = TimeSpan.FromHours(24);          // runtime value, set once\n\n    private readonly List<string> _notes = [];                             // the variable never changes\n\n    public int Id { get; } = id;                                           // get-only: set in the constructor\n    public DateTime CreatedAt { get; } = createdAt;\n    public required string Issue { get; init; }                            // set only while creating\n    public DateTime DueAt => CreatedAt + Sla;\n    public IReadOnlyList<string> Notes => _notes;                          // callers can read, not Add\n\n    public void AddNote(string note) => _notes.Add(note);\n}",
          check: "run",
          expected: "#501 Login fails\nCreated 2026-10-26, due 2026-10-27\nSLA 24h, max reopens 3\n1"
        }
      ]
    },
    {
      id: "generics",
      depth: "short",
      title: {
        en: "Generics: one class for many types",
        hi: "Generics: कई types के लिए एक class",
        hg: "Generics: kai types ke liye ek class"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 5 exposed notes as <code>IReadOnlyList&lt;string&gt;</code>, and lesson 3 ended with <code>List&lt;int&gt;</code> beating <code>ArrayList</code>. Both are <b>generic</b> types. Now you write your own: one <code>Repository&lt;T&gt;</code> that stores tickets, customers or anything else.",
          hi: "पाठ 5 में notes को <code>IReadOnlyList&lt;string&gt;</code> के रूप में दिखाया, और पाठ 3 <code>List&lt;int&gt;</code> के <code>ArrayList</code> से बेहतर होने पर ख़त्म हुआ था। दोनों <b>generic</b> types हैं। अब अपना बनाओ: एक <code>Repository&lt;T&gt;</code> जो tickets, customers या कुछ भी रखे।",
          hg: "Lesson 5 mein notes ko <code>IReadOnlyList&lt;string&gt;</code> ke roop mein dikhaya, aur lesson 3 <code>List&lt;int&gt;</code> ke <code>ArrayList</code> se behtar hone par khatam hua tha. Dono <b>generic</b> types hain. Ab apna banao: ek <code>Repository&lt;T&gt;</code> jo tickets, customers ya kuch bhi rakhe."
        },
        what: {
          en: "<p>A <b>generic</b> type or method has a <b>type parameter</b> (<code>T</code>) that you fill in later: <code>Repository&lt;SupportTicket&gt;</code>. The code is written once and the compiler checks the types for you.</p><p>A <b>constraint</b> (<code>where T : IEntity</code>) tells the compiler what <code>T</code> must be able to do, so you may use those members inside.</p>",
          hi: "<p><b>Generic</b> type या method में एक <b>type parameter</b> (<code>T</code>) होता है जिसे आप बाद में भरते हो: <code>Repository&lt;SupportTicket&gt;</code>। Code एक बार लिखा जाता है और compiler types जाँचता है।</p><p><b>Constraint</b> (<code>where T : IEntity</code>) compiler को बताता है कि <code>T</code> क्या-क्या कर सकना चाहिए, ताकि अंदर वे members इस्तेमाल हो सकें।</p>",
          hg: "<p><b>Generic</b> type ya method mein ek <b>type parameter</b> (<code>T</code>) hota hai jise aap baad mein bharte ho: <code>Repository&lt;SupportTicket&gt;</code>. Code ek baar likha jaata hai aur compiler types jaanchta hai.</p><p><b>Constraint</b> (<code>where T : IEntity</code>) compiler ko batata hai ki <code>T</code> kya-kya kar sakna chahiye, taaki andar woh members use ho sakein.</p>"
        },
        why: {
          en: "<p>Without generics you would copy-paste a <code>TicketRepository</code>, a <code>CustomerRepository</code>, an <code>AgentRepository</code>, or store <code>object</code> and cast (lesson 3 problems). Generics give you reuse, type safety and no boxing together.</p>",
          hi: "<p>Generics के बिना आप <code>TicketRepository</code>, <code>CustomerRepository</code>, <code>AgentRepository</code> copy-paste करते, या <code>object</code> रखकर cast करते (पाठ 3 की दिक़्क़तें)। Generics reuse, type safety और बिना boxing, तीनों साथ देते हैं।</p>",
          hg: "<p>Generics ke bina aap <code>TicketRepository</code>, <code>CustomerRepository</code>, <code>AgentRepository</code> copy-paste karte, ya <code>object</code> rakhkar cast karte (lesson 3 ki dikkatein). Generics reuse, type safety aur bina boxing, teeno saath dete hain.</p>"
        },
        analogy: {
          en: "<p>One <b>steel tiffin carrier design</b> serves every office: it holds dal in one house, sabzi in another. That is the generic type. The rule \"it must have a lid that fits\" is the constraint. The tiffin is checked when it is packed (compile time), not at lunch.</p>",
          hi: "<p>एक <b>स्टील टिफ़िन का डिज़ाइन</b> हर दफ़्तर के काम आता है: एक घर में दाल, दूसरे में सब्ज़ी। यह generic type है। \"ढक्कन ठीक बैठना चाहिए\" वाला नियम constraint है। टिफ़िन पैक करते समय (compile time) जाँचा जाता है, खाने के समय नहीं।</p>",
          hg: "<p>Ek <b>steel tiffin ka design</b> har daftar ke kaam aata hai: ek ghar mein daal, doosre mein sabzi. Ye generic type hai. \"Dhakkan theek baithna chahiye\" wala niyam constraint hai. Tiffin pack karte samay (compile time) jaancha jaata hai, khaane ke samay nahi.</p>"
        },
        lines: [
          {
            code: "public interface IEntity { int Id { get; } }",
            note: {
              en: "The contract: anything stored in the repository must have an <code>Id</code>.",
              hi: "Contract: repository में रखी हर चीज़ में <code>Id</code> होनी चाहिए।",
              hg: "Contract: repository mein rakhi har cheez mein <code>Id</code> honi chahiye."
            }
          },
          {
            code: "public class Repository<T> where T : class, IEntity",
            note: {
              en: "<code>T</code> is the type parameter. The constraints say: <code>T</code> must be a class and implement <code>IEntity</code>.",
              hi: "<code>T</code> type parameter है। Constraints कहते हैं: <code>T</code> class हो और <code>IEntity</code> implement करे।",
              hg: "<code>T</code> type parameter hai. Constraints kehte hain: <code>T</code> class ho aur <code>IEntity</code> implement kare."
            }
          },
          {
            code: "public void Add(T item) => _items[item.Id] = item;",
            note: {
              en: "<code>item.Id</code> is allowed only because of the <code>IEntity</code> constraint. Without it this line would not compile.",
              hi: "<code>item.Id</code> सिर्फ़ <code>IEntity</code> constraint की वजह से चलता है। उसके बिना यह line compile नहीं होती।",
              hg: "<code>item.Id</code> sirf <code>IEntity</code> constraint ki wajah se chalta hai. Uske bina ye line compile nahi hoti."
            }
          },
          {
            code: "var tickets = new Repository<SupportTicket>();",
            note: {
              en: "Fill in <code>T</code> with a real type. This repository accepts only <code>SupportTicket</code>; adding a customer is a compile error.",
              hi: "<code>T</code> की जगह असली type भरो। यह repository सिर्फ़ <code>SupportTicket</code> लेती है; customer जोड़ना compile error है।",
              hg: "<code>T</code> ki jagah asli type bharo. Ye repository sirf <code>SupportTicket</code> leti hai; customer jodna compile error hai."
            }
          },
          {
            code: "static T Largest<T>(T a, T b) where T : IComparable<T>",
            note: {
              en: "A generic <b>method</b>. The compiler infers <code>T</code> from the arguments, so you write just <code>Largest(3, 7)</code>.",
              hi: "Generic <b>method</b>। Compiler arguments से <code>T</code> खुद समझ लेता है, इसलिए बस <code>Largest(3, 7)</code> लिखते हैं।",
              hg: "Generic <b>method</b>. Compiler arguments se <code>T</code> khud samajh leta hai, isliye bas <code>Largest(3, 7)</code> likhte hain."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Using a type that breaks the constraint, such as <code>Repository&lt;string&gt;</code>: error CS0311. The compiler stops you early, which is the point.</li><li>Calling a member that the constraint does not promise. Without <code>where T : IEntity</code>, <code>item.Id</code> does not compile.</li><li>Over-engineering: generics with many type parameters and nested constraints that nobody can read.</li></ul>",
          hi: "<ul><li>Constraint तोड़ने वाला type इस्तेमाल करना, जैसे <code>Repository&lt;string&gt;</code>: error CS0311। Compiler आपको पहले ही रोक देता है, यही फ़ायदा है।</li><li>ऐसा member बुलाना जिसका constraint वादा नहीं करता। <code>where T : IEntity</code> के बिना <code>item.Id</code> compile नहीं होता।</li><li>ज़रूरत से ज़्यादा जटिल बनाना: कई type parameters और nested constraints जिन्हें कोई पढ़ न सके।</li></ul>",
          hg: "<ul><li>Constraint todne wala type use karna, jaise <code>Repository&lt;string&gt;</code>: error CS0311. Compiler aapko pehle hi rok deta hai, yahi fayda hai.</li><li>Aisa member bulaana jiska constraint wada nahi karta. <code>where T : IEntity</code> ke bina <code>item.Id</code> compile nahi hota.</li><li>Zaroorat se zyada jatil banana: kai type parameters aur nested constraints jinhe koi padh na sake.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use generics for reusable containers and algorithms that differ only by type: repositories, caches, <code>Result&lt;T&gt;</code> wrappers, paged lists, validation helpers. If only one type will ever be used, keep the code simple and non-generic. In a review, readability matters more than cleverness.</p>",
          hi: "<p>Reusable containers और algorithms के लिए generics लो जो सिर्फ़ type में अलग हों: repositories, caches, <code>Result&lt;T&gt;</code> wrappers, paged lists, validation helpers। अगर सिर्फ़ एक ही type इस्तेमाल होगा, तो code सीधा और non-generic रखो। Review में चतुराई से ज़्यादा यह मायने रखता है कि code आसानी से पढ़ा जा सके।</p>",
          hg: "<p>Reusable containers aur algorithms ke liye generics lo jo sirf type mein alag hon: repositories, caches, <code>Result&lt;T&gt;</code> wrappers, paged lists, validation helpers. Agar sirf ek hi type use hoga, to code seedha aur non-generic rakho. Review mein chaturai se zyada padhne ki saralta maayne rakhti hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add <code>Agent</code> (<code>Id</code>, <code>Name</code>) implementing <code>IEntity</code>, store agent <b>Kiran</b> (id 7) in a <code>Repository&lt;Agent&gt;</code> and print <code>Kiran</code>.</p>",
            hi: "<p><code>IEntity</code> implement करने वाला <code>Agent</code> (<code>Id</code>, <code>Name</code>) जोड़ो, agent <b>Kiran</b> (id 7) को <code>Repository&lt;Agent&gt;</code> में रखो और <code>Kiran</code> print करो।</p>",
            hg: "<p><code>IEntity</code> implement karne wala <code>Agent</code> (<code>Id</code>, <code>Name</code>) jodo, agent <b>Kiran</b> (id 7) ko <code>Repository&lt;Agent&gt;</code> mein rakho aur <code>Kiran</code> print karo.</p>"
          },
          hint: {
            en: "<p>Copy the shape of <code>Customer</code> from the example. The repository needs no change at all.</p>",
            hi: "<p>Example के <code>Customer</code> जैसा ही बनाओ। Repository में कोई बदलाव नहीं चाहिए।</p>",
            hg: "<p>Example ke <code>Customer</code> jaisa hi banao. Repository mein koi badlaav nahi chahiye.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a repository of agents",
              hi: "हल: agents की repository",
              hg: "Solution: agents ki repository"
            },
            src: "var agents = new Repository<Agent>();\nagents.Add(new Agent(7, \"Kiran\"));\nConsole.WriteLine(agents.GetById(7)?.Name);\n\npublic interface IEntity { int Id { get; } }\n\npublic class Agent(int id, string name) : IEntity\n{\n    public int Id { get; } = id;\n    public string Name { get; } = name;\n}\n\npublic class Repository<T> where T : class, IEntity\n{\n    private readonly Dictionary<int, T> _items = new();\n\n    public void Add(T item) => _items[item.Id] = item;\n    public T? GetById(int id) => _items.GetValueOrDefault(id);\n}",
            check: "run",
            expected: "Kiran"
          }
        },
        quiz: {
          q: {
            en: "What does <code>where T : IEntity</code> allow you to do inside <code>Repository&lt;T&gt;</code>?",
            hi: "<code>where T : IEntity</code> से <code>Repository&lt;T&gt;</code> के अंदर आप क्या कर सकते हो?",
            hg: "<code>where T : IEntity</code> se <code>Repository&lt;T&gt;</code> ke andar aap kya kar sakte ho?"
          },
          options: [
            {
              en: "Store values of any type, even <code>string</code>",
              hi: "किसी भी type की value रख सकते हो, <code>string</code> भी",
              hg: "Kisi bhi type ki value rakh sakte ho, <code>string</code> bhi"
            },
            {
              en: "Use <code>item.Id</code>, because every <code>T</code> must have it",
              hi: "<code>item.Id</code> इस्तेमाल कर सकते हो, क्योंकि हर <code>T</code> में वह होगी",
              hg: "<code>item.Id</code> use kar sakte ho, kyunki har <code>T</code> mein woh hogi"
            },
            {
              en: "Skip type checking until run time",
              hi: "Type की जाँच run time तक टाल सकते हो",
              hg: "Type ki jaanch run time tak taal sakte ho"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>The constraint guarantees every <code>T</code> implements <code>IEntity</code>, so <code>Id</code> is safe to use. A type that does not implement it, such as <code>string</code>, is rejected at compile time (CS0311).</p>",
            hi: "<p>Constraint पक्का करता है कि हर <code>T</code>, <code>IEntity</code> implement करता है, इसलिए <code>Id</code> इस्तेमाल करना सुरक्षित है। जो type उसे implement नहीं करता, जैसे <code>string</code>, वह compile time पर ही रद्द हो जाता है (CS0311)।</p>",
            hg: "<p>Constraint pakka karta hai ki har <code>T</code>, <code>IEntity</code> implement karta hai, isliye <code>Id</code> use karna surakshit hai. Jo type use implement nahi karta, jaise <code>string</code>, woh compile time par hi radd ho jaata hai (CS0311).</p>"
          }
        },
        recap: {
          en: "<ul><li>A generic type or method takes a type parameter <code>T</code>: write once, reuse for many types.</li><li>A constraint (<code>where T : ...</code>) says what <code>T</code> can do and lets you use those members.</li><li>The compiler checks types, and value types are not boxed.</li></ul>",
          hi: "<ul><li>Generic type या method type parameter <code>T</code> लेता है: एक बार लिखो, कई types के लिए इस्तेमाल करो।</li><li>Constraint (<code>where T : ...</code>) बताता है कि <code>T</code> क्या कर सकता है और वे members इस्तेमाल करने देता है।</li><li>Compiler types जाँचता है, और value types box नहीं होते।</li></ul>",
          hg: "<ul><li>Generic type ya method type parameter <code>T</code> leta hai: ek baar likho, kai types ke liye use karo.</li><li>Constraint (<code>where T : ...</code>) batata hai ki <code>T</code> kya kar sakta hai aur woh members use karne deta hai.</li><li>Compiler types jaanchta hai, aur value types box nahi hote.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A generic repository with a constraint",
            hi: "Constraint वाली generic repository",
            hg: "Constraint wali generic repository"
          },
          src: "var tickets = new Repository<SupportTicket>();\ntickets.Add(new SupportTicket(501, \"Login fails\"));\ntickets.Add(new SupportTicket(502, \"Refund pending\"));\n\nvar customers = new Repository<Customer>();\ncustomers.Add(new Customer(1, \"Asha\"));\n\nConsole.WriteLine(tickets.GetById(502)?.Issue);\nConsole.WriteLine(customers.GetById(9)?.Name ?? \"not found\");\nConsole.WriteLine($\"{tickets.Count} tickets, {customers.Count} customers\");\n\nConsole.WriteLine(Largest(3, 7));            // T is inferred as int\nConsole.WriteLine(Largest(\"Asha\", \"Ravi\"));  // T is inferred as string\n\nstatic T Largest<T>(T a, T b) where T : IComparable<T> => a.CompareTo(b) >= 0 ? a : b;\n\npublic interface IEntity { int Id { get; } }\n\npublic class Customer(int id, string name) : IEntity\n{\n    public int Id { get; } = id;\n    public string Name { get; } = name;\n}\n\npublic class SupportTicket(int id, string issue) : IEntity\n{\n    public int Id { get; } = id;\n    public string Issue { get; } = issue;\n}\n\npublic class Repository<T> where T : class, IEntity\n{\n    private readonly Dictionary<int, T> _items = new();\n\n    public int Count => _items.Count;\n    public void Add(T item) => _items[item.Id] = item;\n    public T? GetById(int id) => _items.GetValueOrDefault(id);\n}",
          check: "run",
          expected: "Refund pending\nnot found\n2 tickets, 1 customers\n7\nRavi"
        }
      ]
    },
    {
      id: "collections",
      depth: "short",
      title: {
        en: "Choosing a collection: List, Dictionary, HashSet, Queue",
        hi: "Collection चुनना: List, Dictionary, HashSet, Queue",
        hg: "Collection chunna: List, Dictionary, HashSet, Queue"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 6 used a <code>Dictionary</code> inside <code>Repository&lt;T&gt;</code> without explaining why. Here you learn the four everyday generic collections and how to pick one by the main operation you need.",
          hi: "पाठ 6 में <code>Repository&lt;T&gt;</code> के अंदर <code>Dictionary</code> बिना वजह बताए इस्तेमाल हुई थी। यहाँ चार रोज़ के generic collections सीखोगे और यह भी कि ज़रूरी मुख्य काम के हिसाब से कौन-सा चुनना है।",
          hg: "Lesson 6 mein <code>Repository&lt;T&gt;</code> ke andar <code>Dictionary</code> bina wajah bataye use hui thi. Yahan chaar roz ke generic collections seekhoge aur ye bhi ki zaroori mukhya kaam ke hisaab se kaunsa chunna hai."
        },
        what: {
          en: "<p>Choose by the <b>main operation</b>:</p><ul><li><code>List&lt;T&gt;</code>: items in order, access by position.</li><li><code>Dictionary&lt;K,V&gt;</code>: find a value by key, fast.</li><li><code>HashSet&lt;T&gt;</code>: only unique items, fast \"is it there?\".</li><li><code>Queue&lt;T&gt;</code>: first in, first out (<code>Stack&lt;T&gt;</code> is last in, first out).</li></ul>",
          hi: "<p><b>मुख्य काम</b> देखकर चुनो:</p><ul><li><code>List&lt;T&gt;</code>: items क्रम में, position से access।</li><li><code>Dictionary&lt;K,V&gt;</code>: key से value तेज़ी से खोजना।</li><li><code>HashSet&lt;T&gt;</code>: सिर्फ़ unique items (हर item एक ही बार), तेज़ \"है या नहीं?\"।</li><li><code>Queue&lt;T&gt;</code>: पहले आया, पहले गया (<code>Stack&lt;T&gt;</code> में आख़िर में आया, पहले गया)।</li></ul>",
          hg: "<p><b>Mukhya kaam</b> dekhkar chuno:</p><ul><li><code>List&lt;T&gt;</code>: items kram mein, position se access.</li><li><code>Dictionary&lt;K,V&gt;</code>: key se value tezi se khojna.</li><li><code>HashSet&lt;T&gt;</code>: sirf unique items (har item ek hi baar), tez \"hai ya nahi?\".</li><li><code>Queue&lt;T&gt;</code>: pehle aaya, pehle gaya (<code>Stack&lt;T&gt;</code> mein aakhir mein aaya, pehle gaya).</li></ul>"
        },
        why: {
          en: "<p>The right choice is the difference between a screen that opens instantly and one that crawls. Finding ticket 502 in a list of 100,000 by scanning is slow; a dictionary jumps straight to it. Interviewers also love \"which collection and why?\".</p>",
          hi: "<p>सही चुनाव का मतलब है कि screen तुरंत खुले या रेंगती रहे। 100,000 की list में ticket 502 स्कैन करके खोजना धीमा है; dictionary सीधे वहाँ पहुँचती है। Interview में \"कौन-सा collection और क्यों?\" भी ख़ूब पूछा जाता है।</p>",
          hg: "<p>Sahi chunaav ka matlab hai ki screen turant khule ya rengti rahe. 100,000 ki list mein ticket 502 scan karke khojna dheema hai; dictionary seedhe wahan pahunchti hai. Interview mein \"kaunsa collection aur kyun?\" bhi khoob poocha jaata hai.</p>"
        },
        analogy: {
          en: "<p>At a railway reservation office: the <b>passenger chart</b> in coach order is a <code>List</code>. Finding a booking <b>by PNR number</b> is a <code>Dictionary</code>. The list of <b>station codes</b> where each appears once is a <code>HashSet</code>. The <b>waiting list</b>, first come first confirmed, is a <code>Queue</code>.</p>",
          hi: "<p>रेलवे reservation office में: डिब्बे के क्रम में <b>passenger chart</b> <code>List</code> है। <b>PNR नंबर</b> से booking खोजना <code>Dictionary</code> है। <b>station codes</b> की सूची जहाँ हर code एक बार आता है, <code>HashSet</code> है। <b>waiting list</b>, जो पहले आया उसे पहले confirm, <code>Queue</code> है।</p>",
          hg: "<p>Railway reservation office mein: dibbe ke kram mein <b>passenger chart</b> <code>List</code> hai. <b>PNR number</b> se booking khojna <code>Dictionary</code> hai. <b>Station codes</b> ki soochi jahan har code ek baar aata hai, <code>HashSet</code> hai. <b>Waiting list</b>, jo pehle aaya use pehle confirm, <code>Queue</code> hai.</p>"
        },
        lines: [
          {
            code: "var byId = tickets.ToDictionary(t => t.Id);",
            note: {
              en: "Builds a dictionary keyed by ticket id from the list. Keys must be unique, or this throws.",
              hi: "List से ticket id की key वाली dictionary बनाता है। Keys unique होनी चाहिए (कोई key दो बार नहीं), वरना यह exception फेंकता है।",
              hg: "List se ticket id ki key wali dictionary banata hai. Keys unique honi chahiye (koi key do baar nahi), warna ye exception phenkta hai."
            }
          },
          {
            code: "if (byId.TryGetValue(502, out var found))",
            note: {
              en: "One fast lookup. <code>TryGetValue</code> returns <code>false</code> for a missing key, while <code>byId[999]</code> would throw <code>KeyNotFoundException</code>.",
              hi: "एक तेज़ lookup। Key न हो तो <code>TryGetValue</code> <code>false</code> लौटाता है, जबकि <code>byId[999]</code> <code>KeyNotFoundException</code> फेंकता।",
              hg: "Ek tez lookup. Key na ho to <code>TryGetValue</code> <code>false</code> lautaata hai, jabki <code>byId[999]</code> <code>KeyNotFoundException</code> phenkta."
            }
          },
          {
            code: "var tags = new HashSet<string>(StringComparer.OrdinalIgnoreCase);",
            note: {
              en: "A set of unique tags. The comparer makes <code>billing</code> and <code>BILLING</code> count as the same tag.",
              hi: "Unique tags का set। Comparer की वजह से <code>billing</code> और <code>BILLING</code> एक ही tag गिने जाते हैं।",
              hg: "Unique tags ka set. Comparer ki wajah se <code>billing</code> aur <code>BILLING</code> ek hi tag gine jaate hain."
            }
          },
          {
            code: "Console.WriteLine(tags.Add(\"BILLING\"));",
            note: {
              en: "<code>Add</code> returns <code>false</code> because the tag is already there. No duplicate is stored.",
              hi: "<code>Add</code> <code>false</code> लौटाता है क्योंकि tag पहले से है। Duplicate store नहीं होता।",
              hg: "<code>Add</code> <code>false</code> lautaata hai kyunki tag pehle se hai. Duplicate store nahi hota."
            }
          },
          {
            code: "var waiting = new Queue<SupportTicket>(tickets);",
            note: {
              en: "A queue of tickets waiting for an agent, in the order they arrived.",
              hi: "Agent का इंतज़ार कर रहे tickets की queue, उसी क्रम में जिसमें वे आए।",
              hg: "Agent ka intezaar kar rahe tickets ki queue, usi kram mein jisme woh aaye."
            }
          },
          {
            code: "var next = waiting.Dequeue();",
            note: {
              en: "<code>Dequeue</code> removes and returns the oldest ticket (501). On an empty queue it throws <code>InvalidOperationException</code>.",
              hi: "<code>Dequeue</code> सबसे पुराना ticket (501) निकालकर लौटाता है। ख़ाली queue पर यह <code>InvalidOperationException</code> फेंकता है।",
              hg: "<code>Dequeue</code> sabse purana ticket (501) nikaalkar lautaata hai. Khaali queue par ye <code>InvalidOperationException</code> phenkta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Adding to or removing from a <code>List</code> inside a <code>foreach</code> over it: <code>InvalidOperationException</code> (\"Collection was modified\"). Use <code>RemoveAll</code> or loop over a copy.</li><li>Reading <code>dict[key]</code> when the key may be missing: <code>KeyNotFoundException</code>. Use <code>TryGetValue</code>. And <code>dict.Add</code> with an existing key throws <code>ArgumentException</code>; the indexer <code>dict[key] = v</code> adds or overwrites.</li><li>Calling <code>list.Contains(x)</code> inside a big loop. It scans the whole list each time; build a <code>HashSet</code> first.</li></ul>",
          hi: "<ul><li><code>List</code> पर <code>foreach</code> चलाते हुए उसी में जोड़ना या हटाना: <code>InvalidOperationException</code> (\"Collection was modified\")। <code>RemoveAll</code> लो या copy पर loop चलाओ।</li><li>Key शायद न हो, फिर भी <code>dict[key]</code> पढ़ना: <code>KeyNotFoundException</code>। <code>TryGetValue</code> लो। और मौजूद key से <code>dict.Add</code> <code>ArgumentException</code> फेंकता है; indexer <code>dict[key] = v</code> जोड़ता या overwrite करता है।</li><li>बड़े loop में <code>list.Contains(x)</code> बुलाना। यह हर बार पूरी list स्कैन करता है; पहले <code>HashSet</code> बनाओ।</li></ul>",
          hg: "<ul><li><code>List</code> par <code>foreach</code> chalate hue usi mein jodna ya hatana: <code>InvalidOperationException</code> (\"Collection was modified\"). <code>RemoveAll</code> lo ya copy par loop chalao.</li><li>Key shayad na ho, phir bhi <code>dict[key]</code> padhna: <code>KeyNotFoundException</code>. <code>TryGetValue</code> lo. Aur maujood key se <code>dict.Add</code> <code>ArgumentException</code> phenkta hai; indexer <code>dict[key] = v</code> jodta ya overwrite karta hai.</li><li>Bade loop mein <code>list.Contains(x)</code> bulaana. Ye har baar poori list scan karta hai; pehle <code>HashSet</code> banao.</li></ul>"
        },
        whenToUse: {
          en: "<p>By position or in order: <code>List</code>. By key: <code>Dictionary</code>. \"Seen it already?\" or unique values: <code>HashSet</code>. Processing order: <code>Queue</code> (FIFO), <code>Stack</code> (LIFO) or <code>PriorityQueue</code>. Do not wrap everything in concurrent collections \"just in case\"; they cost more. More options (read-only, immutable, frozen, concurrent) are in the Deep Dive.</p>",
          hi: "<p>Position से या क्रम में: <code>List</code>। Key से: <code>Dictionary</code>। \"पहले देखा?\" या unique values: <code>HashSet</code>। Processing का क्रम: <code>Queue</code> (FIFO), <code>Stack</code> (LIFO) या <code>PriorityQueue</code>। सब कुछ \"कहीं ज़रूरत पड़ जाए\" सोचकर concurrent collections में मत लपेटो; वे महँगे हैं। और विकल्प (read-only, immutable, frozen, concurrent) Deep Dive में हैं।</p>",
          hg: "<p>Position se ya kram mein: <code>List</code>. Key se: <code>Dictionary</code>. \"Pehle dekha?\" ya unique values: <code>HashSet</code>. Processing ka kram: <code>Queue</code> (FIFO), <code>Stack</code> (LIFO) ya <code>PriorityQueue</code>. Sab kuch \"kahin zaroorat pad jaaye\" sochkar concurrent collections mein mat lapeto; woh mahange hain. Aur vikalp (read-only, immutable, frozen, concurrent) Deep Dive mein hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Count tickets per customer with a <code>Dictionary&lt;string, int&gt;</code> for the names <code>Asha</code>, <code>Ravi</code>, <code>Asha</code>, and print <code>Asha: 2</code> and <code>Ravi: 1</code>.</p>",
            hi: "<p>नाम <code>Asha</code>, <code>Ravi</code>, <code>Asha</code> के लिए <code>Dictionary&lt;string, int&gt;</code> से हर customer के tickets गिनो, और <code>Asha: 2</code> व <code>Ravi: 1</code> print करो।</p>",
            hg: "<p>Naam <code>Asha</code>, <code>Ravi</code>, <code>Asha</code> ke liye <code>Dictionary&lt;string, int&gt;</code> se har customer ke tickets gino, aur <code>Asha: 2</code> va <code>Ravi: 1</code> print karo.</p>"
          },
          hint: {
            en: "<p>Inside the loop: <code>counts[name] = counts.GetValueOrDefault(name) + 1;</code>. A missing key gives <code>0</code>.</p>",
            hi: "<p>Loop के अंदर: <code>counts[name] = counts.GetValueOrDefault(name) + 1;</code>। Key न हो तो <code>0</code> मिलता है।</p>",
            hg: "<p>Loop ke andar: <code>counts[name] = counts.GetValueOrDefault(name) + 1;</code>. Key na ho to <code>0</code> milta hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: counting with a dictionary",
              hi: "हल: dictionary से गिनती",
              hg: "Solution: dictionary se ginti"
            },
            src: "var counts = new Dictionary<string, int>();\nforeach (var name in new[] { \"Asha\", \"Ravi\", \"Asha\" })\n    counts[name] = counts.GetValueOrDefault(name) + 1;\n\nConsole.WriteLine($\"Asha: {counts[\"Asha\"]}\");\nConsole.WriteLine($\"Ravi: {counts[\"Ravi\"]}\");",
            check: "run",
            expected: "Asha: 2\nRavi: 1"
          }
        },
        quiz: {
          q: {
            en: "You process 50,000 tickets and must quickly check \"have I already handled this ticket id?\". Which collection fits best?",
            hi: "आप 50,000 tickets process करते हो और जल्दी जाँचना है \"यह ticket id पहले handle हुई?\" कौन-सा collection सबसे ठीक है?",
            hg: "Aap 50,000 tickets process karte ho aur jaldi jaanchna hai \"ye ticket id pehle handle hui?\" Kaunsa collection sabse theek hai?"
          },
          options: [
            {
              en: "<code>List&lt;int&gt;</code> with <code>Contains</code>",
              hi: "<code>List&lt;int&gt;</code> और <code>Contains</code>",
              hg: "<code>List&lt;int&gt;</code> aur <code>Contains</code>"
            },
            {
              en: "<code>Queue&lt;int&gt;</code>",
              hi: "<code>Queue&lt;int&gt;</code> — यह",
              hg: "<code>Queue&lt;int&gt;</code> — ye"
            },
            {
              en: "<code>Stack&lt;int&gt;</code>",
              hi: "<code>Stack&lt;int&gt;</code> — यह",
              hg: "<code>Stack&lt;int&gt;</code> — ye"
            },
            {
              en: "<code>HashSet&lt;int&gt;</code>",
              hi: "<code>HashSet&lt;int&gt;</code> — यह",
              hg: "<code>HashSet&lt;int&gt;</code> — ye"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>A <code>HashSet</code> answers \"is it there?\" in roughly constant time and stores each id once. <code>List.Contains</code> scans the whole list every time, which gets slow at this size.</p>",
            hi: "<p><code>HashSet</code> \"है या नहीं?\" का जवाब लगभग constant time में देता है (data बढ़ने पर भी समय लगभग उतना ही) और हर id एक बार रखता है। <code>List.Contains</code> हर बार पूरी list स्कैन करता है, जो इस आकार पर धीमा हो जाता है।</p>",
            hg: "<p><code>HashSet</code> \"hai ya nahi?\" ka jawaab lagbhag constant time mein deta hai (data badhne par bhi samay lagbhag utna hi) aur har id ek baar rakhta hai. <code>List.Contains</code> har baar poori list scan karta hai, jo is aakaar par dheema ho jaata hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Pick by the main operation: <code>List</code> by position, <code>Dictionary</code> by key, <code>HashSet</code> for uniqueness, <code>Queue</code> for first-come-first-served.</li><li>Use <code>TryGetValue</code> for lookups that may miss.</li><li>Never change a collection while looping over it.</li></ul>",
          hi: "<ul><li>मुख्य काम से चुनो: position के लिए <code>List</code>, key के लिए <code>Dictionary</code>, unique values के लिए <code>HashSet</code>, पहले-आओ-पहले-पाओ के लिए <code>Queue</code>।</li><li>जो lookup चूक सकता है उसके लिए <code>TryGetValue</code> लो।</li><li>Loop चलाते हुए collection कभी मत बदलो।</li></ul>",
          hg: "<ul><li>Mukhya kaam se chuno: position ke liye <code>List</code>, key ke liye <code>Dictionary</code>, unique values ke liye <code>HashSet</code>, pehle-aao-pehle-paao ke liye <code>Queue</code>.</li><li>Jo lookup chook sakta hai uske liye <code>TryGetValue</code> lo.</li><li>Loop chalate hue collection kabhi mat badlo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Ticket queue, lookup by id, unique tags",
            hi: "Ticket queue, id से lookup, unique tags",
            hg: "Ticket queue, id se lookup, unique tags"
          },
          src: "List<SupportTicket> tickets =\n[\n    new() { Id = 501, Customer = \"Asha\", Issue = \"Login fails\" },\n    new() { Id = 502, Customer = \"Ravi\", Issue = \"Refund pending\" },\n    new() { Id = 503, Customer = \"Meena\", Issue = \"Wrong invoice\" }\n];\n\n// List: ordered, access by position\nConsole.WriteLine($\"{tickets.Count} tickets, last is #{tickets[^1].Id}\");\n\n// Dictionary: fast lookup by key\nvar byId = tickets.ToDictionary(t => t.Id);\nif (byId.TryGetValue(502, out var found))\n    Console.WriteLine($\"#{found.Id} belongs to {found.Customer}\");\n\n// HashSet: unique values only\nvar tags = new HashSet<string>(StringComparer.OrdinalIgnoreCase);\nConsole.WriteLine(tags.Add(\"billing\"));\nConsole.WriteLine(tags.Add(\"BILLING\"));\n\n// Queue: first in, first out\nvar waiting = new Queue<SupportTicket>(tickets);\nvar next = waiting.Dequeue();\nConsole.WriteLine($\"Next to handle: #{next.Id}, still waiting: {waiting.Count}\");\n\npublic class SupportTicket\n{\n    public int Id { get; init; }\n    public string Customer { get; init; } = \"\";\n    public string Issue { get; init; } = \"\";\n}",
          check: "run",
          expected: "3 tickets, last is #503\n#502 belongs to Ravi\nTrue\nFalse\nNext to handle: #501, still waiting: 2"
        }
      ]
    },
    {
      id: "delegates-events",
      depth: "short",
      title: {
        en: "Delegates, lambdas and events",
        hi: "Delegates, lambdas और events",
        hg: "Delegates, lambdas aur events"
      },
      lesson: {
        buildsOn: {
          en: "Until now the CRM only stored and passed data around. Now it needs to <b>react</b>: when a ticket is closed, the customer gets an SMS and the dashboard updates. The tools are delegates and events. The standard event type <code>EventHandler&lt;T&gt;</code> is a generic delegate (lesson 6), and an event keeps a list of handlers and calls them in order, much like walking a <code>List</code> (lesson 7).",
          hi: "अब तक CRM सिर्फ़ data रखता और भेजता था। अब उसे <b>react</b> करना है (कुछ होने पर जवाब देना): ticket बंद होते ही customer को SMS जाए और dashboard बदले। इसके औज़ार delegates और events हैं। Standard event type <code>EventHandler&lt;T&gt;</code> एक generic delegate है (पाठ 6), और event handlers की एक list रखकर उन्हें क्रम से बुलाता है, लगभग <code>List</code> पर loop जैसा (पाठ 7)।",
          hg: "Ab tak CRM sirf data rakhta aur bhejta tha. Ab use <b>react</b> karna hai (kuch hone par jawab dena): ticket band hote hi customer ko SMS jaaye aur dashboard badle. Iske auzaar delegates aur events hain. Standard event type <code>EventHandler&lt;T&gt;</code> ek generic delegate hai (lesson 6), aur event handlers ki ek list rakhkar unhe kram se bulaata hai, lagbhag <code>List</code> par loop jaisa (lesson 7)."
        },
        what: {
          en: "<p>A <b>delegate</b> is a variable that holds a method. <code>Func&lt;int, bool&gt;</code> is a method taking an <code>int</code> and returning <code>bool</code>; <code>Action&lt;string&gt;</code> takes a <code>string</code> and returns nothing. A <b>lambda</b> (<code>x =&gt; x &gt; 5</code>) is a short way to write such a method inline.</p><p>An <b>event</b> is a delegate with a safety rule: outsiders may only subscribe (<code>+=</code>) or unsubscribe (<code>-=</code>); only the owner can raise it.</p>",
          hi: "<p><b>Delegate</b> ऐसा variable है जिसमें method रखा जाता है। <code>Func&lt;int, bool&gt;</code> एक <code>int</code> लेकर <code>bool</code> लौटाने वाला method है; <code>Action&lt;string&gt;</code> एक <code>string</code> लेता है और कुछ नहीं लौटाता। <b>Lambda</b> (<code>x =&gt; x &gt; 5</code>) ऐसा method वहीं लिखने का छोटा तरीक़ा है।</p><p><b>Event</b> सुरक्षा-नियम वाला delegate है: बाहर वाले सिर्फ़ subscribe (<code>+=</code>) या unsubscribe (<code>-=</code>) कर सकते हैं; उसे उठाने (raise) का हक़ सिर्फ़ मालिक को है।</p>",
          hg: "<p><b>Delegate</b> aisa variable hai jisme method rakha jaata hai. <code>Func&lt;int, bool&gt;</code> ek <code>int</code> lekar <code>bool</code> lautane wala method hai; <code>Action&lt;string&gt;</code> ek <code>string</code> leta hai aur kuch nahi lautaata. <b>Lambda</b> (<code>x =&gt; x &gt; 5</code>) aisa method wahin likhne ka chhota tareeqa hai.</p><p><b>Event</b> suraksha-niyam wala delegate hai: bahar wale sirf subscribe (<code>+=</code>) ya unsubscribe (<code>-=</code>) kar sakte hain; use uthane (raise) ka haq sirf maalik ko hai.</p>"
        },
        why: {
          en: "<p><code>TicketService</code> should not know about SMS, email or the dashboard. If it raises a <code>TicketClosed</code> event, any number of listeners can plug in without changing the service. Passing behaviour as a <code>Func</code> also removes the need for tiny one-method classes.</p>",
          hi: "<p><code>TicketService</code> को SMS, email या dashboard के बारे में पता नहीं होना चाहिए। वह <code>TicketClosed</code> event उठाए तो कितने भी listeners बिना service बदले जुड़ सकते हैं। व्यवहार (behaviour) को <code>Func</code> की तरह देने से एक-method वाली छोटी classes की ज़रूरत भी नहीं रहती।</p>",
          hg: "<p><code>TicketService</code> ko SMS, email ya dashboard ke baare mein pata nahi hona chahiye. Woh <code>TicketClosed</code> event uthaye to kitne bhi listeners bina service badle jud sakte hain. Vyavhaar (behaviour) ko <code>Func</code> ki tarah dene se ek-method wali chhoti classes ki zaroorat bhi nahi rehti.</p>"
        },
        analogy: {
          en: "<p>Think of a <b>food-delivery order update</b>. When the restaurant marks an order \"Ready\", the customer app, the delivery partner app and the restaurant dashboard all get the news. The restaurant does not know who is listening; it just raises the event. Apps subscribe and unsubscribe at will.</p>",
          hi: "<p><b>खाने की delivery के order update</b> जैसा सोचो। Restaurant जब order \"Ready\" mark करता है, तो customer app, delivery partner app और restaurant dashboard सबको ख़बर मिलती है। Restaurant को पता नहीं कौन सुन रहा है; वह बस event उठा देता है। Apps अपनी मर्ज़ी से subscribe और unsubscribe करते हैं।</p>",
          hg: "<p><b>Khaane ki delivery ke order update</b> jaisa socho. Restaurant jab order \"Ready\" mark karta hai, to customer app, delivery partner app aur restaurant dashboard sabko khabar milti hai. Restaurant ko pata nahi kaun sun raha hai; woh bas event utha deta hai. Apps apni marzi se subscribe aur unsubscribe karte hain.</p>"
        },
        lines: [
          {
            code: "public event EventHandler<TicketClosedEventArgs>? TicketClosed;",
            note: {
              en: "The event. <code>EventHandler&lt;T&gt;</code> is the standard shape: <code>(object? sender, T e)</code>. It is <code>null</code> until someone subscribes.",
              hi: "यह event है। <code>EventHandler&lt;T&gt;</code> मानक रूप है: <code>(object? sender, T e)</code>। जब तक कोई subscribe न करे, यह <code>null</code> रहता है।",
              hg: "Ye event hai. <code>EventHandler&lt;T&gt;</code> maanak roop hai: <code>(object? sender, T e)</code>. Jab tak koi subscribe na kare, ye <code>null</code> rehta hai."
            }
          },
          {
            code: "TicketClosed?.Invoke(this, new(ticketId, customer, agent));",
            note: {
              en: "Raises the event. <code>?.</code> means \"do nothing if there are no subscribers\", so it never throws a null error.",
              hi: "Event उठाता है। <code>?.</code> का मतलब \"कोई subscriber न हो तो कुछ मत करो\", इसलिए null error कभी नहीं आता।",
              hg: "Event uthata hai. <code>?.</code> ka matlab \"koi subscriber na ho to kuch mat karo\", isliye null error kabhi nahi aata."
            }
          },
          {
            code: "service.TicketClosed += sms;",
            note: {
              en: "Subscribes the SMS handler. Handlers run in the order they were added.",
              hi: "SMS handler को subscribe करता है। Handlers उसी क्रम में चलते हैं जिसमें जोड़े गए।",
              hg: "SMS handler ko subscribe karta hai. Handlers usi kram mein chalte hain jisme jode gaye."
            }
          },
          {
            code: "service.TicketClosed -= sms;",
            note: {
              en: "Unsubscribes it. Keep the handler in a variable so you can remove it later; a forgotten subscription can keep an object alive.",
              hi: "उसे unsubscribe करता है। Handler को variable में रखो ताकि बाद में हटा सको; भूली हुई subscription object को ज़िंदा रख सकती है।",
              hg: "Use unsubscribe karta hai. Handler ko variable mein rakho taaki baad mein hata sako; bhooli hui subscription object ko zinda rakh sakti hai."
            }
          },
          {
            code: "Func<int, bool> isUrgent = priority => priority >= 8;",
            note: {
              en: "A lambda stored in a <code>Func</code>: takes an <code>int</code> priority and returns <code>true</code> or <code>false</code>.",
              hi: "<code>Func</code> में रखा lambda: <code>int</code> priority लेता है और <code>true</code> या <code>false</code> लौटाता है।",
              hg: "<code>Func</code> mein rakha lambda: <code>int</code> priority leta hai aur <code>true</code> ya <code>false</code> lautaata hai."
            }
          },
          {
            code: "Action<string> log = message => Console.WriteLine($\"[log] {message}\");",
            note: {
              en: "An <code>Action</code> returns nothing. Behaviour is now a value you can pass to other methods, like <code>priorities.Count(isUrgent)</code>.",
              hi: "<code>Action</code> कुछ नहीं लौटाता। अब behaviour एक value है जिसे दूसरे methods को दे सकते हो, जैसे <code>priorities.Count(isUrgent)</code>।",
              hg: "<code>Action</code> kuch nahi lautaata. Ab behaviour ek value hai jise doosre methods ko de sakte ho, jaise <code>priorities.Count(isUrgent)</code>."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Trying to raise or overwrite an event from outside its class: error CS0070. Only the owner can raise it; outsiders use <code>+=</code> and <code>-=</code>.</li><li>Calling <code>TicketClosed(this, e)</code> directly: it throws if nobody subscribed. Use <code>TicketClosed?.Invoke(this, e)</code>.</li><li>Never unsubscribing from a long-lived publisher. The publisher keeps a reference to every subscriber, so short-lived objects stay in memory (a leak).</li></ul>",
          hi: "<ul><li>Event को उसकी class के बाहर से उठाने या overwrite करने की कोशिश: error CS0070। सिर्फ़ मालिक उठा सकता है; बाहर वाले <code>+=</code> और <code>-=</code> इस्तेमाल करते हैं।</li><li><code>TicketClosed(this, e)</code> सीधे बुलाना: कोई subscriber न हो तो exception आता है। <code>TicketClosed?.Invoke(this, e)</code> लो।</li><li>लंबे समय तक रहने वाले publisher से कभी unsubscribe न करना। Publisher हर subscriber का reference रखता है, इसलिए कम उम्र के objects memory में टिके रहते हैं (leak)।</li></ul>",
          hg: "<ul><li>Event ko uski class ke bahar se uthane ya overwrite karne ki koshish: error CS0070. Sirf maalik utha sakta hai; bahar wale <code>+=</code> aur <code>-=</code> use karte hain.</li><li><code>TicketClosed(this, e)</code> seedhe bulaana: koi subscriber na ho to exception aata hai. <code>TicketClosed?.Invoke(this, e)</code> lo.</li><li>Lambe samay tak rehne wale publisher se kabhi unsubscribe na karna. Publisher har subscriber ka reference rakhta hai, isliye kam umr ke objects memory mein tike rehte hain (leak).</li></ul>"
        },
        whenToUse: {
          en: "<p>Use <code>Func</code>/<code>Action</code> parameters for small pluggable behaviour: a pricing rule, a filter, a retry callback. Use events when one object must notify <b>many optional listeners</b> inside the same process. For communication between services use a message broker (Day 16), not events. Long chains of events are hard to trace; a plain interface call is often easier to debug.</p>",
          hi: "<p>छोटे जोड़े जा सकने वाले behaviour के लिए <code>Func</code>/<code>Action</code> parameters लो: pricing rule, filter, retry callback। Events तब लो जब एक ही process के अंदर एक object को <b>कई optional listeners</b> (जो चाहें वे जुड़ें) को बताना हो। Services के बीच बातचीत के लिए message broker (Day 16) लो, events नहीं। Events की लंबी कड़ियाँ ट्रेस करना मुश्किल है; सीधी interface call अक्सर debug करने में आसान होती है।</p>",
          hg: "<p>Chhote jode ja sakne wale behaviour ke liye <code>Func</code>/<code>Action</code> parameters lo: pricing rule, filter, retry callback. Events tab lo jab ek hi process ke andar ek object ko <b>kai optional listeners</b> (jo chahein woh judein) ko batana ho. Services ke beech baatcheet ke liye message broker (Day 16) lo, events nahi. Events ki lambi kadiyan trace karna mushkil hai; seedhi interface call aksar debug karne mein aasaan hoti hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write <code>Func&lt;decimal, decimal&gt; addGst = amount =&gt; amount * 1.18m;</code> and print the result for <code>100m</code>. The output should be <code>118.00</code>.</p>",
            hi: "<p><code>Func&lt;decimal, decimal&gt; addGst = amount =&gt; amount * 1.18m;</code> लिखो और <code>100m</code> के लिए result print करो। Output <code>118.00</code> होना चाहिए।</p>",
            hg: "<p><code>Func&lt;decimal, decimal&gt; addGst = amount =&gt; amount * 1.18m;</code> likho aur <code>100m</code> ke liye result print karo. Output <code>118.00</code> hona chahiye.</p>"
          },
          hint: {
            en: "<p>Call it like a method: <code>addGst(100m)</code>.</p>",
            hi: "<p>Method की तरह बुलाओ: <code>addGst(100m)</code>।</p>",
            hg: "<p>Method ki tarah bulao: <code>addGst(100m)</code>.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a Func with GST",
              hi: "हल: GST वाला Func",
              hg: "Solution: GST wala Func"
            },
            src: "Func<decimal, decimal> addGst = amount => amount * 1.18m;\nConsole.WriteLine(addGst(100m));",
            check: "run",
            expected: "118.00"
          }
        },
        quiz: {
          q: {
            en: "What does the <code>event</code> keyword add compared with a plain public delegate field?",
            hi: "सामान्य public delegate field की तुलना में <code>event</code> keyword क्या जोड़ता है?",
            hg: "Saamanya public delegate field ki tulna mein <code>event</code> keyword kya jodta hai?"
          },
          options: [
            {
              en: "Outsiders can only <code>+=</code> and <code>-=</code>; they cannot raise it or replace the handlers",
              hi: "बाहर वाले सिर्फ़ <code>+=</code> और <code>-=</code> कर सकते हैं; उसे raise नहीं कर सकते, न handlers बदल सकते",
              hg: "Bahar wale sirf <code>+=</code> aur <code>-=</code> kar sakte hain; use raise nahi kar sakte, na handlers badal sakte"
            },
            {
              en: "Handlers run on a separate thread",
              hi: "Handlers अलग thread पर चलते हैं",
              hg: "Handlers alag thread par chalte hain"
            },
            {
              en: "Handlers are called automatically in parallel",
              hi: "Handlers अपने आप parallel में बुलाए जाते हैं",
              hg: "Handlers apne aap parallel mein bulaaye jaate hain"
            }
          ],
          answer: 0,
          explain: {
            en: "<p><code>event</code> only restricts access: outside code can subscribe and unsubscribe, while raising it (or assigning with <code>=</code>) is allowed only inside the owner class (CS0070). Handlers still run one after another on the calling thread.</p>",
            hi: "<p><code>event</code> सिर्फ़ access सीमित करता है: बाहर का code subscribe और unsubscribe कर सकता है, जबकि raise करना (या <code>=</code> से assign करना) सिर्फ़ मालिक class के अंदर allowed है (CS0070)। Handlers फिर भी बुलाने वाले thread पर एक के बाद एक चलते हैं।</p>",
            hg: "<p><code>event</code> sirf access seemit karta hai: bahar ka code subscribe aur unsubscribe kar sakta hai, jabki raise karna (ya <code>=</code> se assign karna) sirf maalik class ke andar allowed hai (CS0070). Handlers phir bhi bulaane wale thread par ek ke baad ek chalte hain.</p>"
          }
        },
        recap: {
          en: "<ul><li>A delegate holds a method; <code>Func</code> returns a value, <code>Action</code> returns nothing; a lambda writes one inline.</li><li>An event lets many listeners subscribe; only the owner raises it, using <code>?.Invoke</code>.</li><li>Unsubscribe from long-lived publishers to avoid leaks.</li></ul>",
          hi: "<ul><li>Delegate में method रहता है; <code>Func</code> value लौटाता है, <code>Action</code> कुछ नहीं; lambda उसे वहीं लिख देता है।</li><li>Event कई listeners को subscribe करने देता है; सिर्फ़ मालिक उसे <code>?.Invoke</code> से उठाता है।</li><li>लंबे समय वाले publishers से unsubscribe करो ताकि leak न हो।</li></ul>",
          hg: "<ul><li>Delegate mein method rehta hai; <code>Func</code> value lautaata hai, <code>Action</code> kuch nahi; lambda use wahin likh deta hai.</li><li>Event kai listeners ko subscribe karne deta hai; sirf maalik use <code>?.Invoke</code> se uthata hai.</li><li>Lambe samay wale publishers se unsubscribe karo taaki leak na ho.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "TicketClosed event, Func and Action",
            hi: "TicketClosed event, Func और Action",
            hg: "TicketClosed event, Func aur Action"
          },
          src: "var service = new TicketService();\n\nEventHandler<TicketClosedEventArgs> sms = (sender, e) =>\n    Console.WriteLine($\"SMS to {e.Customer}: ticket #{e.TicketId} is closed\");\nservice.TicketClosed += sms;\nservice.TicketClosed += (sender, e) =>\n    Console.WriteLine($\"Dashboard: #{e.TicketId} closed by {e.Agent}\");\n\nservice.Close(501, \"Asha\", \"Meena\");\nservice.TicketClosed -= sms;                 // unsubscribe: the SMS handler stops\nservice.Close(502, \"Ravi\", \"Kiran\");\n\n// Func and Action: behaviour as a value\nFunc<int, bool> isUrgent = priority => priority >= 8;\nAction<string> log = message => Console.WriteLine($\"[log] {message}\");\nvar priorities = new List<int> { 3, 9, 5, 8 };\nlog($\"Urgent tickets: {priorities.Count(isUrgent)}\");\n\npublic class TicketClosedEventArgs(int ticketId, string customer, string agent) : EventArgs\n{\n    public int TicketId { get; } = ticketId;\n    public string Customer { get; } = customer;\n    public string Agent { get; } = agent;\n}\n\npublic class TicketService\n{\n    public event EventHandler<TicketClosedEventArgs>? TicketClosed;\n\n    public void Close(int ticketId, string customer, string agent)\n    {\n        // ... mark the ticket closed, then tell everyone who listens\n        TicketClosed?.Invoke(this, new(ticketId, customer, agent));\n    }\n}",
          check: "run",
          expected: "SMS to Asha: ticket #501 is closed\nDashboard: #501 closed by Meena\nDashboard: #502 closed by Kiran\n[log] Urgent tickets: 2"
        }
      ]
    },
    {
      id: "value-types-storage",
      depth: "detailed",
      title: {
        en: "Where value types really live: the stack/heap myth",
        hi: "Value types असल में कहाँ रहते हैं: stack/heap का भ्रम",
        hg: "Value types asal mein kahan rehte hain: stack/heap ka bhram"
      },
      body: {
        en: "<ul>\n<li><b>Where they live — be precise:</b> \"value types always go on the stack\" is a <b>myth</b>. A value type lives <b>where its container lives</b>:\n<ul>\n<li>a local variable in a method → usually on the <b>stack</b> (or just a CPU register);</li>\n<li>a field inside a class object → <b>inside that object, on the heap</b>;</li>\n<li>an element of an array → inside the array, on the heap;</li>\n<li><b>boxed</b> → its value is copied into a new object on the heap; <b>captured</b> by a lambda or used across an <code>await</code> → the variable itself is moved (hoisted) into a compiler-generated object on the heap.</li>\n</ul></li>\n<li>Objects of reference types are created on the <b>heap</b> and cleaned up by the <b>garbage collector (GC)</b>. The reference itself is stored like any value: on the stack if it is a local, inside an object if it is a field.</li>\n</ul>\n<p>As Eric Lippert (former C# compiler team) put it, <b>the stack is an implementation detail</b>. In an interview, lead with the meaning — <b>copy the data vs share the object</b> — and then explain storage.</p>",
        hi: "<ul>\n<li><b>ये कहाँ रहते हैं — सही बोलो:</b> \"value types हमेशा stack पर जाते हैं\" एक <b>myth</b> है। Value type <b>वहीं रहता है जहाँ उसका container रहता है</b>:\n<ul>\n<li>method का local variable → अक्सर <b>stack</b> पर (या सिर्फ़ CPU register में);</li>\n<li>class object का field → <b>उसी object के अंदर, heap पर</b>;</li>\n<li>array का element → array के अंदर, heap पर;</li>\n<li><b>boxed</b> हो → value heap पर एक नए object में copy होती है; lambda ने <b>capture</b> किया हो या <code>await</code> के पार use हो → variable ख़ुद compiler के बनाए object में heap पर चला जाता है (hoist होता है)।</li>\n</ul></li>\n<li>Reference types के objects <b>heap</b> पर बनते हैं और <b>garbage collector (GC)</b> उन्हें साफ़ करता है। Reference ख़ुद एक normal value की तरह store होता है: local है तो stack पर, field है तो object के अंदर।</li>\n</ul>\n<p>Eric Lippert (C# compiler team में रह चुके) के शब्दों में, <b>stack एक implementation detail है</b>। Interview में पहले meaning बोलो — <b>data की copy बनाम object share करना</b> — फिर storage समझाओ।</p>",
        hg: "<ul>\n<li><b>Yeh kahan rehte hain — sahi bolo:</b> \"value types hamesha stack par jaate hain\" ek <b>myth</b> hai. Value type <b>wahin rehta hai jahan uska container rehta hai</b>:\n<ul>\n<li>method ka local variable → aksar <b>stack</b> par (ya sirf CPU register mein);</li>\n<li>class object ka field → <b>usi object ke andar, heap par</b>;</li>\n<li>array ka element → array ke andar, heap par;</li>\n<li><b>boxed</b> ho → value heap par ek naye object mein copy hoti hai; lambda ne <b>capture</b> kiya ho ya <code>await</code> ke paar use ho → variable khud compiler ke banaye object mein heap par chala jaata hai (hoist hota hai).</li>\n</ul></li>\n<li>Reference types ke objects <b>heap</b> par bante hain aur <b>garbage collector (GC)</b> unhe saaf karta hai. Reference khud ek normal value ki tarah store hota hai: local hai to stack par, field hai to object ke andar.</li>\n</ul>\n<p>Eric Lippert (C# compiler team mein reh chuke) ke shabdon mein, <b>stack ek implementation detail hai</b>. Interview mein pehle meaning bolo — <b>data ki copy vs object share karna</b> — phir storage samjhao.</p>"
      }
    },
    {
      id: "strings-interning-comparison",
      depth: "detailed",
      title: {
        en: "Strings: why immutable, interning and comparison",
        hi: "Strings: immutable क्यों, interning और तुलना",
        hg: "Strings: immutable kyun, interning aur tulna"
      },
      body: {
        en: "<p><b>Why are strings immutable?</b></p>\n<ul>\n<li><b>Thread safety</b> — many threads can read the same string with no locks.</li>\n<li><b>Safe dictionary keys</b> — the hash code can never change after the key is stored.</li>\n<li><b>Sharing / interning</b> — identical literals can safely share one object.</li>\n<li><b>Security</b> — a file path or connection string that was validated cannot be changed later by other code holding the same reference.</li>\n</ul>\n<p><b>Comparison:</b> <code>==</code> on two <code>string</code> variables compares the text. For identifiers, keys, file names and headers use <code>StringComparison.Ordinal</code> / <code>OrdinalIgnoreCase</code> (fast, culture-independent). Use culture-aware comparison mainly for sorting text shown to users. Avoid <code>a.ToLower() == b.ToLower()</code> — it creates two extra strings.</p>\n<p><b>Interning:</b> the runtime keeps one shared object for each string <b>literal</b> (and compile-time constants like <code>\"hel\" + \"lo\"</code>). Strings built at run time are new objects, even with the same text. <b>When not:</b> do not call <code>string.Intern</code> yourself without a measured reason: interned strings stay alive for the whole process. (<code>StringBuilder</code> vs <code>+</code> is in lesson 4.)</p>",
        hi: "<p><b>Strings immutable क्यों हैं?</b></p>\n<ul>\n<li><b>Thread safety</b> — कई threads बिना lock के same string पढ़ सकते हैं।</li>\n<li><b>Safe dictionary keys</b> — key store होने के बाद उसका hash code कभी नहीं बदल सकता।</li>\n<li><b>Sharing / interning</b> — एक जैसे literals safely एक ही object share कर सकते हैं।</li>\n<li><b>Security</b> — validate किया हुआ file path या connection string बाद में कोई दूसरा code (जिसके पास same reference है) नहीं बदल सकता।</li>\n</ul>\n<p><b>Comparison:</b> दो <code>string</code> variables पर <code>==</code> text compare करता है। Identifiers, keys, file names और headers के लिए <code>StringComparison.Ordinal</code> / <code>OrdinalIgnoreCase</code> use करो (तेज़, culture से independent)। Culture-aware comparison मुख्य रूप से users को दिखने वाले text की sorting के लिए। <code>a.ToLower() == b.ToLower()</code> से बचो — इससे दो extra strings बनती हैं।</p>\n<p><b>Interning:</b> runtime हर string <b>literal</b> (और <code>\"hel\" + \"lo\"</code> जैसे compile-time constants) के लिए एक ही shared object रखता है। Run time पर बनी strings नए objects होती हैं, text वही हो तब भी। <b>कब नहीं:</b> बिना नापे (measure किए) ख़ुद <code>string.Intern</code> मत बुलाओ: intern हुई strings पूरे process चलने तक memory में रहती हैं। (<code>StringBuilder</code> बनाम <code>+</code> पाठ 4 में है।)</p>",
        hg: "<p><b>Strings immutable kyun hain?</b></p>\n<ul>\n<li><b>Thread safety</b> — kai threads bina lock ke same string padh sakte hain.</li>\n<li><b>Safe dictionary keys</b> — key store hone ke baad uska hash code kabhi nahi badal sakta.</li>\n<li><b>Sharing / interning</b> — ek jaise literals safely ek hi object share kar sakte hain.</li>\n<li><b>Security</b> — validate kiya hua file path ya connection string baad mein koi doosra code (jiske paas same reference hai) nahi badal sakta.</li>\n</ul>\n<p><b>Comparison:</b> do <code>string</code> variables par <code>==</code> text compare karta hai. Identifiers, keys, file names aur headers ke liye <code>StringComparison.Ordinal</code> / <code>OrdinalIgnoreCase</code> use karo (tez, culture se independent). Culture-aware comparison mukhya roop se users ko dikhne wale text ki sorting ke liye. <code>a.ToLower() == b.ToLower()</code> se bacho — isse do extra strings banti hain.</p>\n<p><b>Interning:</b> runtime har string <b>literal</b> (aur <code>\"hel\" + \"lo\"</code> jaise compile-time constants) ke liye ek hi shared object rakhta hai. Run time par bani strings naye objects hoti hain, text wahi ho tab bhi. <b>Kab nahi:</b> bina naape (measure kiye) khud <code>string.Intern</code> mat bulao: intern hui strings poore process chalne tak memory mein rehti hain. (<code>StringBuilder</code> banaam <code>+</code> lesson 4 mein hai.)</p>"
      },
      code: [
        {
          caption: {
            en: "Interning: literals share one object, runtime strings do not; == compares text",
            hi: "Interning: literals एक object share करते हैं, runtime strings नहीं; == text की तुलना करता है",
            hg: "Interning: literals ek object share karte hain, runtime strings nahi; == text ki tulna karta hai"
          },
          src: "string literal = \"hello\";\nstring folded = \"hel\" + \"lo\";                  // constants: joined at compile time, then interned\nConsole.WriteLine(object.ReferenceEquals(literal, folded));               // one shared object\n\nstring part = \"hel\";\nstring built = part + \"lo\";                    // built at run time: a separate object\nConsole.WriteLine(built == \"hello\");                                      // == compares the text\nConsole.WriteLine(object.ReferenceEquals(built, \"hello\"));                // different objects\nConsole.WriteLine(object.ReferenceEquals(string.Intern(built), \"hello\")); // Intern returns the pooled one\n\nConsole.WriteLine(string.Equals(\"PUNE\", \"pune\", StringComparison.OrdinalIgnoreCase));",
          check: "run",
          expected: "True\nTrue\nFalse\nTrue\nTrue"
        }
      ]
    },
    {
      id: "immutability-readonly-struct",
      depth: "detailed",
      title: {
        en: "readonly struct, with, and the shallow readonly trap",
        hi: "readonly struct, with और shallow readonly का जाल",
        hg: "readonly struct, with aur shallow readonly ka jaal"
      },
      body: {
        en: "<p><b>Analogy:</b> your <b>Aadhaar card</b> is never edited. An address change gives you a <b>new</b> card and the old one still shows the old address. That is non-destructive mutation, which <code>with</code> does for values.</p>\n<ul>\n<li><code>readonly struct</code> — every field must be <code>readonly</code> (CS8340); the compiler then avoids hidden defensive copies.</li>\n<li><code>with</code> — creates a changed <b>copy</b>; works with records, structs (C# 10+) and anonymous types.</li>\n<li><b>Trap: defensive copy.</b> Calling a method on a <code>readonly</code> field (or an <code>in</code> parameter) of a <b>mutable</b> struct makes the compiler call it on a hidden <b>copy</b>, so the change is lost silently. With a <code>readonly struct</code> no copy is needed. (The shallow <code>readonly</code> trap for lists is in lesson 5.)</li>\n</ul>",
        hi: "<p><b>मिसाल:</b> आपका <b>Aadhaar card</b> कभी edit नहीं होता। पता बदलने पर आपको <b>नया</b> card मिलता है और पुराना अब भी पुराना पता दिखाता है। यही non-destructive बदलाव है, जो <code>with</code> values के लिए करता है।</p>\n<ul>\n<li><code>readonly struct</code> — हर field <code>readonly</code> होना चाहिए (CS8340); फिर compiler छुपी हुई defensive copies से बचता है।</li>\n<li><code>with</code> — बदली हुई <b>copy</b> बनाता है; records, structs (C# 10+) और anonymous types के साथ चलता है।</li>\n<li><b>Trap: defensive copy.</b> <b>Mutable</b> struct वाले <code>readonly</code> field (या <code>in</code> parameter) पर method बुलाओ तो compiler उसे एक छिपी <b>copy</b> पर चलाता है, इसलिए बदलाव चुपचाप खो जाता है। <code>readonly struct</code> हो तो copy की ज़रूरत नहीं पड़ती। (List वाला shallow <code>readonly</code> trap पाठ 5 में है।)</li>\n</ul>",
        hg: "<p><b>Misaal:</b> aapka <b>Aadhaar card</b> kabhi edit nahi hota. Pata badalne par aapko <b>naya</b> card milta hai aur purana ab bhi purana pata dikhata hai. Yahi non-destructive badlaav hai, jo <code>with</code> values ke liye karta hai.</p>\n<ul>\n<li><code>readonly struct</code> — har field <code>readonly</code> hona chahiye (CS8340); phir compiler chhupi hui defensive copies se bachta hai.</li>\n<li><code>with</code> — badli hui <b>copy</b> banata hai; records, structs (C# 10+) aur anonymous types ke saath chalta hai.</li>\n<li><b>Trap: defensive copy.</b> <b>Mutable</b> struct wale <code>readonly</code> field (ya <code>in</code> parameter) par method bulao to compiler use ek chhupi <b>copy</b> par chalata hai, isliye badlaav chupchaap kho jaata hai. <code>readonly struct</code> ho to copy ki zaroorat nahi padti. (List wala shallow <code>readonly</code> trap lesson 5 mein hai.)</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "readonly struct + with, and the defensive-copy trap",
            hi: "readonly struct + with, और defensive copy का जाल",
            hg: "readonly struct + with, aur defensive copy ka jaal"
          },
          src: "var fee = new Money(100m, \"INR\");\nvar discounted = fee with { Amount = 90m };   // a new value; fee is unchanged\nConsole.WriteLine($\"{fee.Amount} -> {discounted.Amount} {discounted.Currency}\");\n\nvar counter = new TicketCounter();\ncounter.Bump();\ncounter.Bump();\nConsole.WriteLine(counter.Count);             // 0: each Bump ran on a hidden copy\n\npublic readonly struct Money(decimal amount, string currency)\n{\n    public decimal Amount { get; init; } = amount;\n    public string Currency { get; init; } = currency;\n}\n\npublic struct MutableCount                    // mutable struct: the trap\n{\n    public int Value;\n    public void Increment() => Value++;\n}\n\npublic class TicketCounter\n{\n    private readonly MutableCount _count;     // readonly field of a MUTABLE struct\n    public void Bump() => _count.Increment(); // the compiler copies _count first\n    public int Count => _count.Value;\n}",
          check: "run",
          expected: "100 -> 90 INR\n0"
        }
      ]
    },
    {
      id: "generics-variance-runtime",
      depth: "detailed",
      title: {
        en: "Generics: all constraints, runtime behaviour and variance",
        hi: "Generics: सारे constraints, runtime व्यवहार और variance",
        hg: "Generics: saare constraints, runtime vyavhaar aur variance"
      },
      body: {
        en: "<ul>\n<li><b>Constraints</b>: <code>where T : class</code> (reference type, else CS0452), <code>struct</code> (non-nullable value type, else CS0453), <code>new()</code> (public parameterless constructor, else CS0310), a base class, an interface (<code>IComparable&lt;T&gt;</code> — else CS0311 for a class, CS0315 for a struct), <code>notnull</code>, <code>unmanaged</code>, another type parameter (<code>where T : U</code>). C# 13 added <code>allows ref struct</code>.</li>\n<li><b>Generics are real at runtime</b> (unlike Java's type erasure): <code>List&lt;int&gt;</code> and <code>List&lt;string&gt;</code> are different types. The JIT creates specialised code for each value-type argument (so <code>List&lt;int&gt;</code> stores real ints, no boxing) and shares one copy of code for reference types. Static fields are <b>per closed type</b> — <code>Cache&lt;int&gt;.Count</code> and <code>Cache&lt;string&gt;.Count</code> are separate.</li>\n<li><b>Variance</b> (interfaces and delegates only, reference types only): <b>covariance</b> <code>out T</code> — <code>IEnumerable&lt;string&gt;</code> can be used as <code>IEnumerable&lt;object&gt;</code>; <b>contravariance</b> <code>in T</code> — an <code>Action&lt;object&gt;</code> can be used as <code>Action&lt;string&gt;</code>. But <code>List&lt;string&gt;</code> → <code>List&lt;object&gt;</code> is CS0029, because a list also accepts writes.</li>\n<li><code>default(T)</code> / <code>default</code> gives <code>null</code> for reference types and zero for value types.</li>\n</ul>",
        hi: "<ul>\n<li><b>Constraints</b>: <code>where T : class</code> (reference type, वरना CS0452), <code>struct</code> (non-nullable value type, वरना CS0453), <code>new()</code> (public parameterless constructor, वरना CS0310), कोई base class, कोई interface (<code>IComparable&lt;T&gt;</code> — वरना class के लिए CS0311, struct के लिए CS0315), <code>notnull</code>, <code>unmanaged</code>, दूसरा type parameter (<code>where T : U</code>)। C# 13 में <code>allows ref struct</code> आया।</li>\n<li><b>Generics runtime पर असली हैं</b> (Java के type erasure जैसे नहीं): <code>List&lt;int&gt;</code> और <code>List&lt;string&gt;</code> अलग types हैं। JIT हर value-type argument के लिए अलग specialised code बनाता है (इसलिए <code>List&lt;int&gt;</code> असली ints रखती है, boxing नहीं) और reference types के लिए एक ही code share करता है। Static fields <b>हर closed type के अलग</b> होते हैं — <code>Cache&lt;int&gt;.Count</code> और <code>Cache&lt;string&gt;.Count</code> अलग हैं।</li>\n<li><b>Variance</b> (सिर्फ़ interfaces और delegates, सिर्फ़ reference types): <b>covariance</b> <code>out T</code> — <code>IEnumerable&lt;string&gt;</code> को <code>IEnumerable&lt;object&gt;</code> की तरह use कर सकते हो; <b>contravariance</b> <code>in T</code> — <code>Action&lt;object&gt;</code> को <code>Action&lt;string&gt;</code> की तरह use कर सकते हो। पर <code>List&lt;string&gt;</code> → <code>List&lt;object&gt;</code> CS0029 है, क्योंकि list में लिख भी सकते हैं।</li>\n<li><code>default(T)</code> / <code>default</code> reference types के लिए <code>null</code> और value types के लिए zero देता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Constraints</b>: <code>where T : class</code> (reference type, warna CS0452), <code>struct</code> (non-nullable value type, warna CS0453), <code>new()</code> (public parameterless constructor, warna CS0310), koi base class, koi interface (<code>IComparable&lt;T&gt;</code> — warna class ke liye CS0311, struct ke liye CS0315), <code>notnull</code>, <code>unmanaged</code>, doosra type parameter (<code>where T : U</code>). C# 13 mein <code>allows ref struct</code> aaya.</li>\n<li><b>Generics runtime par asli hain</b> (Java ke type erasure jaise nahi): <code>List&lt;int&gt;</code> aur <code>List&lt;string&gt;</code> alag types hain. JIT har value-type argument ke liye alag specialised code banata hai (isliye <code>List&lt;int&gt;</code> asli ints rakhti hai, boxing nahi) aur reference types ke liye ek hi code share karta hai. Static fields <b>har closed type ke alag</b> hote hain — <code>Cache&lt;int&gt;.Count</code> aur <code>Cache&lt;string&gt;.Count</code> alag hain.</li>\n<li><b>Variance</b> (sirf interfaces aur delegates, sirf reference types): <b>covariance</b> <code>out T</code> — <code>IEnumerable&lt;string&gt;</code> ko <code>IEnumerable&lt;object&gt;</code> ki tarah use kar sakte ho; <b>contravariance</b> <code>in T</code> — <code>Action&lt;object&gt;</code> ko <code>Action&lt;string&gt;</code> ki tarah use kar sakte ho. Par <code>List&lt;string&gt;</code> → <code>List&lt;object&gt;</code> CS0029 hai, kyunki list mein likh bhi sakte hain.</li>\n<li><code>default(T)</code> / <code>default</code> reference types ke liye <code>null</code> aur value types ke liye zero deta hai.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "Variance, and static fields per closed type",
            hi: "Variance, और हर closed type का अपना static field",
            hg: "Variance, aur har closed type ka apna static field"
          },
          src: "IEnumerable<string> names = [\"Asha\", \"Ravi\"];\nIEnumerable<object> objects = names;          // covariance: IEnumerable<out T>\nConsole.WriteLine(objects.Count());\n\nAction<object> printAny = o => Console.WriteLine($\"got {o}\");\nAction<string> printName = printAny;          // contravariance: Action<in T>\nprintName(\"Meena\");\n// List<object> list = new List<string>();    // CS0029: List<T> also accepts writes, so it is not covariant\n\nCache<int>.Count++;\nCache<int>.Count++;\nCache<string>.Count++;\nConsole.WriteLine($\"{Cache<int>.Count} {Cache<string>.Count}\");   // static fields are per closed type\n\npublic static class Cache<T>\n{\n    public static int Count;\n}",
          check: "run",
          expected: "2\ngot Meena\n2 1"
        }
      ]
    },
    {
      id: "collections-more",
      depth: "detailed",
      title: {
        en: "Collections: read-only, immutable, frozen, concurrent",
        hi: "Collections: read-only, immutable, frozen, concurrent (और विकल्प)",
        hg: "Collections: read-only, immutable, frozen, concurrent (aur vikalp)"
      },
      body: {
        en: "<ul>\n<li><b>Big-O cheat sheet</b>: <code>List&lt;T&gt;</code> index O(1), <code>Add</code> O(1) amortised, <code>Contains</code>/<code>Insert</code>/<code>Remove</code> O(n). <code>Dictionary</code>/<code>HashSet</code> lookup O(1) on average. <code>SortedDictionary</code> O(log n), always sorted by key.</li>\n<li><b>Read-only view</b> (<code>AsReadOnly()</code>, <code>IReadOnlyList&lt;T&gt;</code>): callers cannot change it, but they <b>do see</b> changes made to the inner list. <b>Immutable</b> (<code>ImmutableList&lt;T&gt;</code>, <code>ImmutableArray&lt;T&gt;</code>): never changes; \"Add\" returns a new collection. <b>Frozen</b> (<code>FrozenDictionary</code>/<code>FrozenSet</code>, .NET 8+): slower to build, very fast to read — ideal for lookup tables built at startup.</li>\n<li><b>Threads</b>: <code>List</code> and <code>Dictionary</code> are not safe for concurrent writes. Use <code>ConcurrentDictionary</code>, <code>ConcurrentQueue</code>, <code>Channel&lt;T&gt;</code> (producer/consumer), or a <code>lock</code>.</li>\n</ul>",
        hi: "<ul>\n<li><b>Big-O cheat sheet</b>: <code>List&lt;T&gt;</code> index O(1), <code>Add</code> amortised O(1), <code>Contains</code>/<code>Insert</code>/<code>Remove</code> O(n)। <code>Dictionary</code>/<code>HashSet</code> lookup average O(1)। <code>SortedDictionary</code> O(log n), हमेशा key से sorted।</li>\n<li><b>Read-only view</b> (<code>AsReadOnly()</code>, <code>IReadOnlyList&lt;T&gt;</code>): callers इसे बदल नहीं सकते, पर अंदर की list में हुए बदलाव उन्हें <b>दिखते हैं</b>। <b>Immutable</b> (<code>ImmutableList&lt;T&gt;</code>, <code>ImmutableArray&lt;T&gt;</code>): कभी नहीं बदलता; \"Add\" नया collection return करता है। <b>Frozen</b> (<code>FrozenDictionary</code>/<code>FrozenSet</code>, .NET 8+): बनाने में धीमा, पढ़ने में बहुत तेज़ — startup पर बनने वाली lookup tables के लिए बढ़िया।</li>\n<li><b>Threads</b>: <code>List</code> और <code>Dictionary</code> concurrent writes के लिए safe नहीं हैं। <code>ConcurrentDictionary</code>, <code>ConcurrentQueue</code>, <code>Channel&lt;T&gt;</code> (producer/consumer), या <code>lock</code> use करो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Big-O cheat sheet</b>: <code>List&lt;T&gt;</code> index O(1), <code>Add</code> amortised O(1), <code>Contains</code>/<code>Insert</code>/<code>Remove</code> O(n). <code>Dictionary</code>/<code>HashSet</code> lookup average O(1). <code>SortedDictionary</code> O(log n), hamesha key se sorted.</li>\n<li><b>Read-only view</b> (<code>AsReadOnly()</code>, <code>IReadOnlyList&lt;T&gt;</code>): callers ise badal nahi sakte, par andar ki list mein hue badlaav unhe <b>dikhte hain</b>. <b>Immutable</b> (<code>ImmutableList&lt;T&gt;</code>, <code>ImmutableArray&lt;T&gt;</code>): kabhi nahi badalta; \"Add\" naya collection return karta hai. <b>Frozen</b> (<code>FrozenDictionary</code>/<code>FrozenSet</code>, .NET 8+): banane mein dheema, padhne mein bahut tez — startup par banne wali lookup tables ke liye badhiya.</li>\n<li><b>Threads</b>: <code>List</code> aur <code>Dictionary</code> concurrent writes ke liye safe nahi hain. <code>ConcurrentDictionary</code>, <code>ConcurrentQueue</code>, <code>Channel&lt;T&gt;</code> (producer/consumer), ya <code>lock</code> use karo.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "Read-only view vs immutable snapshot, FrozenSet, Stack, ConcurrentDictionary",
            hi: "Read-only view बनाम immutable snapshot, FrozenSet, Stack, ConcurrentDictionary",
            hg: "Read-only view banaam immutable snapshot, FrozenSet, Stack, ConcurrentDictionary"
          },
          src: "using System.Collections.Concurrent;\nusing System.Collections.Frozen;\nusing System.Collections.Immutable;\n\n// Read-only VIEW sees later changes; immutable SNAPSHOT does not\nvar list = new List<string> { \"A\" };\nIReadOnlyList<string> view = list.AsReadOnly();\nImmutableList<string> snapshot = list.ToImmutableList();\nlist.Add(\"B\");\nConsole.WriteLine($\"view={view.Count} snapshot={snapshot.Count}\");\n\n// Frozen (.NET 8+): build once, read many times, very fast\nFrozenSet<string> metroCities = new[] { \"Delhi\", \"Mumbai\", \"Kolkata\", \"Chennai\" }.ToFrozenSet();\nConsole.WriteLine(metroCities.Contains(\"Pune\"));\n\n// Stack = last in, first out\nvar forms = new Stack<int>([1, 2, 3]);\nConsole.WriteLine(forms.Pop());\n\n// Concurrent: safe when many threads write\nvar counts = new ConcurrentDictionary<string, int>();\ncounts.AddOrUpdate(\"Asha\", 1, (key, current) => current + 1);\ncounts.AddOrUpdate(\"Asha\", 1, (key, current) => current + 1);\nConsole.WriteLine(counts[\"Asha\"]);",
          check: "run",
          expected: "view=2 snapshot=1\nFalse\n3\n2"
        },
        {
          caption: {
            en: "C# 13 (.NET 9+): params collections — params is no longer limited to arrays",
            hi: "C# 13 (.NET 9+): params collections — params अब सिर्फ़ arrays तक सीमित नहीं",
            hg: "C# 13 (.NET 9+): params collections — params ab sirf arrays tak seemit nahi"
          },
          check: "run",
          expected: "6\n0\nAsha & Ravi",
          src: "Console.WriteLine(Sum(1, 2, 3));\nConsole.WriteLine(Sum());\nConsole.WriteLine(JoinNames(\"Asha\", \"Ravi\"));\n\n// params ReadOnlySpan<T>: the compiler can pass the values without allocating an array\nstatic int Sum(params ReadOnlySpan<int> values)\n{\n    int total = 0;\n    foreach (int v in values) total += v;\n    return total;\n}\n\nstatic string JoinNames(params IEnumerable<string> names) => string.Join(\" & \", names);"
        }
      ]
    },
    {
      id: "closures-multicast",
      depth: "detailed",
      title: {
        en: "Closures, multicast delegates and expression trees",
        hi: "Closures, multicast delegates और expression trees",
        hg: "Closures, multicast delegates aur expression trees"
      },
      body: {
        en: "<ul>\n<li>A <b>delegate</b> type is a class (derived from <code>MulticastDelegate</code>) that holds an <b>invocation list</b> of methods. Calling it calls each method in the order they were added.</li>\n<li>If a multicast delegate returns a value, you get <b>only the last</b> method's result. If one handler throws, the remaining handlers do not run.</li>\n<li><b>Lambdas</b> compile to a delegate (<code>Func</code>/<code>Action</code>) — or to an <b>expression tree</b> (<code>Expression&lt;Func&lt;T,bool&gt;&gt;</code>), which is how EF Core turns LINQ into SQL (Days 4–6).</li>\n<li><b>Closures</b>: a lambda that uses an outer local variable <b>captures the variable</b> — the compiler moves it into a hidden class on the heap. Changing the variable later changes what the lambda sees. A <code>static</code> lambda (C# 9) cannot capture (CS8820) — handy to avoid accidental allocations.</li>\n</ul>",
        hi: "<ul>\n<li><b>Delegate</b> type एक class है (<code>MulticastDelegate</code> से बनी) जो methods की एक <b>invocation list</b> रखती है। इसे call करो तो हर method उसी order में call होता है जिसमें जोड़ा गया था।</li>\n<li>अगर multicast delegate value return करता है, तो <b>सिर्फ़ आख़िरी</b> method का result मिलता है। अगर एक handler exception फेंके, तो बाकी handlers नहीं चलते।</li>\n<li><b>Lambdas</b> delegate (<code>Func</code>/<code>Action</code>) में compile होते हैं — या <b>expression tree</b> (<code>Expression&lt;Func&lt;T,bool&gt;&gt;</code>) में, और इसी से EF Core LINQ को SQL में बदलता है (Days 4–6)।</li>\n<li><b>Closures</b>: जो lambda बाहर का local variable use करता है वो <b>variable को capture</b> करता है — compiler उसे heap पर एक छुपी class में ले जाता है। बाद में variable बदलो तो lambda को भी बदली value दिखती है। <code>static</code> lambda (C# 9) capture नहीं कर सकता (CS8820) — गलती से होने वाले allocations रोकने में काम आता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Delegate</b> type ek class hai (<code>MulticastDelegate</code> se bani) jo methods ki ek <b>invocation list</b> rakhti hai. Ise call karo to har method usi order mein call hota hai jismein joda gaya tha.</li>\n<li>Agar multicast delegate value return karta hai, to <b>sirf aakhri</b> method ka result milta hai. Agar ek handler exception phenke, to baaki handlers nahi chalte.</li>\n<li><b>Lambdas</b> delegate (<code>Func</code>/<code>Action</code>) mein compile hote hain — ya <b>expression tree</b> (<code>Expression&lt;Func&lt;T,bool&gt;&gt;</code>) mein, aur isi se EF Core LINQ ko SQL mein badalta hai (Days 4–6).</li>\n<li><b>Closures</b>: jo lambda bahar ka local variable use karta hai woh <b>variable ko capture</b> karta hai — compiler use heap par ek chhupi class mein le jaata hai. Baad mein variable badlo to lambda ko bhi badli value dikhti hai. <code>static</code> lambda (C# 9) capture nahi kar sakta (CS8820) — galti se hone wale allocations rokne mein kaam aata hai.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "Closures, multicast return values, Predicate and static lambdas",
            hi: "Closures, multicast के return values, Predicate और static lambdas",
            hg: "Closures, multicast ke return values, Predicate aur static lambdas"
          },
          src: "// Closure: the lambda captures the VARIABLE, not its value at that moment\nint discount = 10;\nFunc<int, int> priceAfterDiscount = p => p - discount;\ndiscount = 50;\nConsole.WriteLine(priceAfterDiscount(100));\n\n// Multicast with a return value: every method runs, but you get only the LAST result\nFunc<string, string> notify = s => { Console.WriteLine($\"SMS: {s}\"); return \"sms\"; };\nnotify += s => { Console.WriteLine($\"Email: {s}\"); return \"email\"; };\nConsole.WriteLine(notify(\"Ticket 501 closed\"));\n\n// Predicate<T> is a named Func<T, bool>, used by List<T>.FindAll\nPredicate<int> isUrgent = priority => priority >= 8;\nConsole.WriteLine(new List<int> { 3, 9, 8 }.FindAll(isUrgent).Count);\n\n// static lambda: cannot capture locals (CS8820), so no hidden closure object\nFunc<int, int> twice = static x => x * 2;\nConsole.WriteLine(twice(21));",
          check: "run",
          expected: "50\nSMS: Ticket 501 closed\nEmail: Ticket 501 closed\nemail\n2\n42"
        }
      ]
    },
    {
      id: "extension-methods",
      depth: "detailed",
      title: {
        en: "Extension methods (and C# 14 extension members)",
        hi: "Extension methods (और C# 14 extension members)",
        hg: "Extension methods (aur C# 14 extension members)"
      },
      body: {
        en: "<p><b>Analogy — mobile cover with a stand:</b> you cannot open your phone and add a stand inside it, but a cover adds that feature from outside. The phone does not change; the cover only uses what the phone already exposes. An extension method adds a method to a type <b>from outside</b>, using only its public members.</p>\n<ul>\n<li><b>Rules</b>: a <code>static</code> method in a non-generic, non-nested <code>static</code> class (CS1106; CS1109 if nested); the first parameter has <code>this</code>. Callers need the class's namespace in a <code>using</code>.</li>\n<li>It is <b>pure syntax</b>: <code>name.IsBlank()</code> compiles to <code>StringExtensions.IsBlank(name)</code>. So it can be called on <code>null</code> without a <code>NullReferenceException</code> — decide whether that makes sense, or throw <code>ArgumentNullException</code> yourself.</li>\n<li>It is chosen at <b>compile time</b> from the declared type — no <code>virtual</code> dispatch. An applicable <b>instance method always wins</b> over an extension with the same signature.</li>\n<li>It cannot see <code>private</code> or <code>protected</code> members.</li>\n<li>Works on interfaces, sealed classes, structs and enums. <b>LINQ</b> is a set of extension methods on <code>IEnumerable&lt;T&gt;</code>; ASP.NET Core uses them for setup: <code>services.AddOrdering()</code> groups a feature's DI registrations.</li>\n<li><b>C# 14 (.NET 10)</b> adds <b>extension members</b>: an <code>extension(...)</code> block inside the static class can declare extension <b>properties</b> and <b>static</b> extension members, not only methods. Existing extension methods keep working.</li>\n</ul>\n<p><b>When to use:</b> helpers for types you do not own (<code>string</code>, <code>IEnumerable&lt;T&gt;</code>, <code>IServiceCollection</code>), fluent setup APIs, small reusable conversions. <b>When not:</b> logic that needs private state or is core domain behaviour — put it in the class itself; and avoid piling extensions on <code>object</code> or <code>string</code> in shared libraries — they show up in everyone's IntelliSense.</p>",
        hi: "<p><b>Analogy — stand वाला mobile cover:</b> आप phone खोलकर अंदर stand नहीं जोड़ सकते, पर cover बाहर से वो feature जोड़ देता है। Phone नहीं बदलता; cover बस वही use करता है जो phone पहले से बाहर दिखाता है। Extension method किसी type में <b>बाहर से</b> method जोड़ता है, सिर्फ़ उसके public members use करके।</p>\n<ul>\n<li><b>Rules</b>: non-generic, non-nested <code>static</code> class के अंदर <code>static</code> method (वरना CS1106; nested हो तो CS1109); पहले parameter पर <code>this</code>। Callers को उस class का namespace <code>using</code> में चाहिए।</li>\n<li>यह <b>सिर्फ़ syntax</b> है: <code>name.IsBlank()</code> compile होकर <code>StringExtensions.IsBlank(name)</code> बनता है। इसलिए इसे <code>null</code> पर भी बिना <code>NullReferenceException</code> के call कर सकते हो — तय करो कि यह सही है या नहीं, वरना ख़ुद <code>ArgumentNullException</code> फेंको।</li>\n<li>यह <b>compile time</b> पर declared type से चुना जाता है — कोई <code>virtual</code> dispatch नहीं। Same signature वाला लागू होने लायक <b>instance method हमेशा जीतता है</b>।</li>\n<li>यह <code>private</code> या <code>protected</code> members नहीं देख सकता।</li>\n<li>Interfaces, sealed classes, structs और enums पर भी चलता है। <b>LINQ</b> <code>IEnumerable&lt;T&gt;</code> पर extension methods का set है; ASP.NET Core setup में इन्हें use करता है: <code>services.AddOrdering()</code> किसी feature की सारी DI registrations एक जगह रखता है।</li>\n<li><b>C# 14 (.NET 10)</b> में <b>extension members</b> आए: static class के अंदर <code>extension(...)</code> block में extension <b>properties</b> और <b>static</b> extension members भी लिख सकते हो, सिर्फ़ methods नहीं। पुराने extension methods वैसे ही चलते रहते हैं।</li>\n</ul>\n<p><b>कब use करें:</b> जो types आपके नहीं हैं (<code>string</code>, <code>IEnumerable&lt;T&gt;</code>, <code>IServiceCollection</code>) उनके helpers, fluent setup APIs, छोटे reusable conversions। <b>कब नहीं:</b> जिस logic को private state चाहिए या जो core domain behaviour है — उसे class में ही रखो; और shared libraries में <code>object</code> या <code>string</code> पर ढेर सारे extensions मत डालो — वो सबकी IntelliSense में दिखते हैं।</p>",
        hg: "<p><b>Analogy — stand wala mobile cover:</b> aap phone kholkar andar stand nahi jod sakte, par cover bahar se woh feature jod deta hai. Phone nahi badalta; cover bas wahi use karta hai jo phone pehle se bahar dikhata hai. Extension method kisi type mein <b>bahar se</b> method jodta hai, sirf uske public members use karke.</p>\n<ul>\n<li><b>Rules</b>: non-generic, non-nested <code>static</code> class ke andar <code>static</code> method (warna CS1106; nested ho to CS1109); pehle parameter par <code>this</code>. Callers ko us class ka namespace <code>using</code> mein chahiye.</li>\n<li>Yeh <b>sirf syntax</b> hai: <code>name.IsBlank()</code> compile hokar <code>StringExtensions.IsBlank(name)</code> banta hai. Isliye ise <code>null</code> par bhi bina <code>NullReferenceException</code> ke call kar sakte ho — tay karo ki yeh sahi hai ya nahi, warna khud <code>ArgumentNullException</code> phenko.</li>\n<li>Yeh <b>compile time</b> par declared type se chuna jaata hai — koi <code>virtual</code> dispatch nahi. Same signature wala laagu hone laayak <b>instance method hamesha jeetta hai</b>.</li>\n<li>Yeh <code>private</code> ya <code>protected</code> members nahi dekh sakta.</li>\n<li>Interfaces, sealed classes, structs aur enums par bhi chalta hai. <b>LINQ</b> <code>IEnumerable&lt;T&gt;</code> par extension methods ka set hai; ASP.NET Core setup mein inhe use karta hai: <code>services.AddOrdering()</code> kisi feature ki saari DI registrations ek jagah rakhta hai.</li>\n<li><b>C# 14 (.NET 10)</b> mein <b>extension members</b> aaye: static class ke andar <code>extension(...)</code> block mein extension <b>properties</b> aur <b>static</b> extension members bhi likh sakte ho, sirf methods nahi. Purane extension methods waise hi chalte rehte hain.</li>\n</ul>\n<p><b>Kab use karein:</b> jo types aapke nahi hain (<code>string</code>, <code>IEnumerable&lt;T&gt;</code>, <code>IServiceCollection</code>) unke helpers, fluent setup APIs, chhote reusable conversions. <b>Kab nahi:</b> jis logic ko private state chahiye ya jo core domain behaviour hai — use class mein hi rakho; aur shared libraries mein <code>object</code> ya <code>string</code> par dher saare extensions mat daalo — woh sabki IntelliSense mein dikhte hain.</p>"
      },
      code: [
        {
          caption: {
            en: "Extension methods: called on null, compiled to a static call, instance method wins",
            hi: "Extension methods: null पर call, static call में compile, instance method जीतता है",
            hg: "Extension methods: null par call, static call mein compile, instance method jeetta hai"
          },
          check: "run",
          expected: "True\nTrue\nFalse\nProduct: Atta\n2",
          src: "string? name = null;\nConsole.WriteLine(name.IsBlank());                 // works on null: it is just a static call\nConsole.WriteLine(\"   \".IsBlank());\nConsole.WriteLine(StringExtensions.IsBlank(\"x\"));  // what the compiler really calls\n\nvar atta = new Product(\"Atta\");\nConsole.WriteLine(atta.Describe());                // instance method wins over the extension\n\nint[] orders = [120, 80, 300];\nConsole.WriteLine(orders.CountAbove(100));         // works on arrays/lists via IEnumerable<T>\n\npublic static class StringExtensions\n{\n    public static bool IsBlank(this string? value) => string.IsNullOrWhiteSpace(value);\n}\n\npublic static class EnumerableExtensions\n{\n    public static int CountAbove(this IEnumerable<int> source, int limit)\n    {\n        ArgumentNullException.ThrowIfNull(source);\n        return source.Count(x => x > limit);\n    }\n}\n\npublic class Product(string name)\n{\n    public string Name { get; } = name;\n    public string Describe() => $\"Product: {Name}\";\n}\n\npublic static class ProductExtensions\n{\n    public static string Describe(this Product p) => \"extension\";   // never chosen: instance method wins\n}"
        },
        {
          caption: {
            en: "C# 14 only (.NET 10 SDK): extension members — extension property and static extension member",
            hi: "सिर्फ़ C# 14 (.NET 10 SDK): extension members — extension property और static extension member",
            hg: "Sirf C# 14 (.NET 10 SDK): extension members — extension property aur static extension member"
          },
          check: "none",
          src: "// C# 14: needs the .NET 10 SDK (not compiled here - local SDK is .NET 9 / C# 13)\nstring? city = \"  \";\nif (city.IsBlank)                       // extension PROPERTY - no ()\n    Console.WriteLine(string.Placeholder);\n\npublic static class StringExtensions\n{\n    extension(string? value)            // members that act on a string instance\n    {\n        public bool IsBlank => string.IsNullOrWhiteSpace(value);\n    }\n\n    extension(string)                   // static members added to the string type itself\n    {\n        public static string Placeholder => \"(not provided)\";\n    }\n}"
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
        en: "<p>Current: <b>C# 14 / .NET 10 LTS</b> (Nov 2025). Recent features related to today's topics — each tagged with its version:</p>\n<ul>\n<li><b>C# 13</b> (.NET 9) — <b>params collections</b>: <code>params</code> now works with <code>Span&lt;T&gt;</code>, <code>ReadOnlySpan&lt;T&gt;</code>, <code>List&lt;T&gt;</code>, <code>IEnumerable&lt;T&gt;</code> and more, not only arrays (see the collections section).</li>\n<li><b>C# 13</b> — the <code>lock</code> statement recognises the new .NET 9 type <code>System.Threading.Lock</code>: <code>lock (gate)</code> on a <code>Lock</code> object uses its dedicated, more efficient API instead of <code>Monitor</code>.</li>\n<li><b>C# 13</b> — <code>\\e</code> escape sequence for the ESC character (terminal colours), instead of <code>\\u001b</code>.</li>\n<li><b>C# 13</b> — <code>allows ref struct</code> in generic constraints, and <code>ref struct</code> types can implement interfaces.</li>\n<li><b>C# 14</b> (.NET 10) — <b>extension members</b>: <code>extension(...)</code> blocks add extension <b>properties</b> and <b>static</b> extension members (see the extension methods section).</li>\n<li><b>C# 14</b> — the <code>field</code> keyword: use the compiler-generated backing field inside an accessor, e.g. <code>public string Name { get; set =&gt; field = value.Trim(); }</code>.</li>\n<li><b>C# 14</b> — null-conditional assignment: <code>customer?.Address = newAddress;</code> assigns only when <code>customer</code> is not null.</li>\n<li><b>C# 14</b> — <code>nameof</code> with unbound generic types: <code>nameof(List&lt;&gt;)</code> gives <code>\"List\"</code>.</li>\n<li><b>C# 14</b> — lambda parameters with modifiers but no types: <code>(text, out result) =&gt; ...</code>.</li>\n<li><b>C# 14</b> — \"first-class spans\": array → <code>Span&lt;T&gt;</code>/<code>ReadOnlySpan&lt;T&gt;</code> conversions existed since C# 7.2 as user-defined operators; now the language itself understands them, so they also work for extension-method receivers and generic type inference.</li>\n</ul>\n<p>The code checker for this tutorial uses the .NET 9 SDK (C# 13), so C# 14 snippets are marked as not compiled.</p>\n<p><b>Next (as of Oct 2026):</b> .NET 11 (STS) is due in November 2026; .NET 10 stays the LTS.</p>",
        hi: "<p>Current: <b>C# 14 / .NET 10 LTS</b> (Nov 2025)। आज के topics से जुड़े नए features — हर एक पर उसका version लिखा है:</p>\n<ul>\n<li><b>C# 13</b> (.NET 9) — <b>params collections</b>: <code>params</code> अब सिर्फ़ arrays नहीं, <code>Span&lt;T&gt;</code>, <code>ReadOnlySpan&lt;T&gt;</code>, <code>List&lt;T&gt;</code>, <code>IEnumerable&lt;T&gt;</code> वगैरह के साथ भी चलता है (collections section देखो)।</li>\n<li><b>C# 13</b> — <code>lock</code> statement .NET 9 के नए type <code>System.Threading.Lock</code> को पहचानता है: <code>Lock</code> object पर <code>lock (gate)</code> <code>Monitor</code> की जगह उसका अपना, ज़्यादा efficient API use करता है।</li>\n<li><b>C# 13</b> — ESC character (terminal colours) के लिए <code>\\u001b</code> की जगह <code>\\e</code> escape sequence।</li>\n<li><b>C# 13</b> — generic constraints में <code>allows ref struct</code>, और <code>ref struct</code> types अब interfaces implement कर सकते हैं।</li>\n<li><b>C# 14</b> (.NET 10) — <b>extension members</b>: <code>extension(...)</code> blocks से extension <b>properties</b> और <b>static</b> extension members (extension methods section देखो)।</li>\n<li><b>C# 14</b> — <code>field</code> keyword: accessor के अंदर compiler का बनाया backing field use करो, जैसे <code>public string Name { get; set =&gt; field = value.Trim(); }</code>।</li>\n<li><b>C# 14</b> — null-conditional assignment: <code>customer?.Address = newAddress;</code> तभी assign करता है जब <code>customer</code> null न हो।</li>\n<li><b>C# 14</b> — unbound generic types के साथ <code>nameof</code>: <code>nameof(List&lt;&gt;)</code> से <code>\"List\"</code> मिलता है।</li>\n<li><b>C# 14</b> — lambda parameters पर modifiers, बिना types लिखे: <code>(text, out result) =&gt; ...</code>।</li>\n<li><b>C# 14</b> — \"first-class spans\": array → <code>Span&lt;T&gt;</code>/<code>ReadOnlySpan&lt;T&gt;</code> conversions C# 7.2 से user-defined operators के रूप में थे; अब language ख़ुद इन्हें समझती है, इसलिए ये extension-method receivers और generic type inference में भी चलते हैं।</li>\n</ul>\n<p>इस tutorial का code checker .NET 9 SDK (C# 13) use करता है, इसलिए C# 14 snippets \"compile नहीं हुए\" mark किए गए हैं।</p>\n<p><b>आगे (Oct 2026 तक की जानकारी):</b> .NET 11 (STS) November 2026 में आने वाला है; .NET 10 ही LTS रहेगा।</p>",
        hg: "<p>Current: <b>C# 14 / .NET 10 LTS</b> (Nov 2025). Aaj ke topics se jude naye features — har ek par uska version likha hai:</p>\n<ul>\n<li><b>C# 13</b> (.NET 9) — <b>params collections</b>: <code>params</code> ab sirf arrays nahi, <code>Span&lt;T&gt;</code>, <code>ReadOnlySpan&lt;T&gt;</code>, <code>List&lt;T&gt;</code>, <code>IEnumerable&lt;T&gt;</code> waghera ke saath bhi chalta hai (collections section dekho).</li>\n<li><b>C# 13</b> — <code>lock</code> statement .NET 9 ke naye type <code>System.Threading.Lock</code> ko pehchanta hai: <code>Lock</code> object par <code>lock (gate)</code> <code>Monitor</code> ki jagah uska apna, zyada efficient API use karta hai.</li>\n<li><b>C# 13</b> — ESC character (terminal colours) ke liye <code>\\u001b</code> ki jagah <code>\\e</code> escape sequence.</li>\n<li><b>C# 13</b> — generic constraints mein <code>allows ref struct</code>, aur <code>ref struct</code> types ab interfaces implement kar sakte hain.</li>\n<li><b>C# 14</b> (.NET 10) — <b>extension members</b>: <code>extension(...)</code> blocks se extension <b>properties</b> aur <b>static</b> extension members (extension methods section dekho).</li>\n<li><b>C# 14</b> — <code>field</code> keyword: accessor ke andar compiler ka banaya backing field use karo, jaise <code>public string Name { get; set =&gt; field = value.Trim(); }</code>.</li>\n<li><b>C# 14</b> — null-conditional assignment: <code>customer?.Address = newAddress;</code> tabhi assign karta hai jab <code>customer</code> null na ho.</li>\n<li><b>C# 14</b> — unbound generic types ke saath <code>nameof</code>: <code>nameof(List&lt;&gt;)</code> se <code>\"List\"</code> milta hai.</li>\n<li><b>C# 14</b> — lambda parameters par modifiers, bina types likhe: <code>(text, out result) =&gt; ...</code>.</li>\n<li><b>C# 14</b> — \"first-class spans\": array → <code>Span&lt;T&gt;</code>/<code>ReadOnlySpan&lt;T&gt;</code> conversions C# 7.2 se user-defined operators ke roop mein the; ab language khud inhe samajhti hai, isliye yeh extension-method receivers aur generic type inference mein bhi chalte hain.</li>\n</ul>\n<p>Is tutorial ka code checker .NET 9 SDK (C# 13) use karta hai, isliye C# 14 snippets \"compile nahi hue\" mark kiye gaye hain.</p>\n<p><b>Aage (Oct 2026 tak ki jaankari):</b> .NET 11 (STS) November 2026 mein aane wala hai; .NET 10 hi LTS rahega.</p>"
      }
    }
  ],
  qa: [
    {
      id: "value-vs-reference",
      depth: "short",
      q: "What is the difference between value types and reference types in C#?",
      answer: "A value-type variable holds the data itself, so assignment copies the data. A reference-type variable holds a reference to an object, so assignment copies the reference and both variables share one object.",
      meaning: {
        hi: "Value-type variable में data ख़ुद रहता है, इसलिए assignment data copy करता है। Reference-type variable में object का reference रहता है, इसलिए assignment reference copy करता है और दोनों variables एक ही object share करते हैं।",
        hg: "Value-type variable mein data khud rehta hai, isliye assignment data copy karta hai. Reference-type variable mein object ka reference rehta hai, isliye assignment reference copy karta hai aur dono variables ek hi object share karte hain."
      },
      explain: {
        en: "<ul>\n<li><b>Value types</b>: <code>int</code>, <code>decimal</code>, <code>bool</code>, <code>enum</code>, <code>struct</code>, <code>DateTime</code>, tuples. Default = zero. Cannot be <code>null</code> unless written as <code>int?</code> (<code>Nullable&lt;T&gt;</code>). Structs cannot inherit from another struct or class, but can implement interfaces.</li>\n<li><b>Reference types</b>: <code>class</code>, <code>interface</code>, <code>delegate</code>, <code>record</code>, <code>string</code>, arrays. Default = <code>null</code>. Support inheritance.</li>\n<li><b>Passing to a method</b>: both are passed by value by default — for a reference type the <i>reference</i> is copied, so the method can change the object but cannot replace the caller's variable (unless <code>ref</code>).</li>\n<li><b>Equality</b>: a class compares references by default; a struct's <code>Equals</code> compares field values.</li>\n</ul>\n<p>Follow-up: \"Is <code>string</code> a value type?\" — No. It is a reference type that <i>behaves</i> like a value: immutable, and <code>==</code> compares text.</p>\n<p>Follow-up: \"Give a bug you have seen.\" — e.g. two lists \"copied\" with <code>var b = a;</code> and then one changed — both changed, because only the reference was copied.</p>",
        hi: "<ul>\n<li><b>Value types</b>: <code>int</code>, <code>decimal</code>, <code>bool</code>, <code>enum</code>, <code>struct</code>, <code>DateTime</code>, tuples। Default = zero। <code>null</code> नहीं हो सकते जब तक <code>int?</code> (<code>Nullable&lt;T&gt;</code>) न लिखो। Struct किसी दूसरे struct या class से inherit नहीं कर सकता, पर interfaces implement कर सकता है।</li>\n<li><b>Reference types</b>: <code>class</code>, <code>interface</code>, <code>delegate</code>, <code>record</code>, <code>string</code>, arrays। Default = <code>null</code>। Inheritance support करते हैं।</li>\n<li><b>Method में pass करना</b>: by default दोनों by value pass होते हैं — reference type में <i>reference</i> copy होता है, इसलिए method object बदल सकता है पर caller का variable replace नहीं कर सकता (जब तक <code>ref</code> न हो)।</li>\n<li><b>Equality</b>: class by default references compare करती है; struct का <code>Equals</code> field values compare करता है।</li>\n</ul>\n<p>Follow-up: \"क्या <code>string</code> value type है?\" — नहीं। यह reference type है जो value की तरह <i>behave</i> करती है: immutable है, और <code>==</code> text compare करता है।</p>\n<p>Follow-up: \"कोई bug बताओ जो आपने देखा हो।\" — जैसे दो lists को <code>var b = a;</code> से \"copy\" किया और फिर एक बदली — दोनों बदल गईं, क्योंकि सिर्फ़ reference copy हुआ था।</p>",
        hg: "<ul>\n<li><b>Value types</b>: <code>int</code>, <code>decimal</code>, <code>bool</code>, <code>enum</code>, <code>struct</code>, <code>DateTime</code>, tuples. Default = zero. <code>null</code> nahi ho sakte jab tak <code>int?</code> (<code>Nullable&lt;T&gt;</code>) na likho. Struct kisi doosre struct ya class se inherit nahi kar sakta, par interfaces implement kar sakta hai.</li>\n<li><b>Reference types</b>: <code>class</code>, <code>interface</code>, <code>delegate</code>, <code>record</code>, <code>string</code>, arrays. Default = <code>null</code>. Inheritance support karte hain.</li>\n<li><b>Method mein pass karna</b>: by default dono by value pass hote hain — reference type mein <i>reference</i> copy hota hai, isliye method object badal sakta hai par caller ka variable replace nahi kar sakta (jab tak <code>ref</code> na ho).</li>\n<li><b>Equality</b>: class by default references compare karti hai; struct ka <code>Equals</code> field values compare karta hai.</li>\n</ul>\n<p>Follow-up: \"Kya <code>string</code> value type hai?\" — Nahi. Yeh reference type hai jo value ki tarah <i>behave</i> karti hai: immutable hai, aur <code>==</code> text compare karta hai.</p>\n<p>Follow-up: \"Koi bug batao jo aapne dekha ho.\" — Jaise do lists ko <code>var b = a;</code> se \"copy\" kiya aur phir ek badli — dono badal gayin, kyunki sirf reference copy hua tha.</p>"
      }
    },
    {
      id: "stack-vs-heap",
      depth: "short",
      q: "Where are value types and reference types stored — on the stack or the heap?",
      answer: "Reference-type objects live on the managed heap. A value type lives where its container lives: a local on the stack, a field inside its heap object, and boxed or captured values on the heap.",
      meaning: {
        hi: "Reference-type objects managed heap पर रहते हैं। Value type वहीं रहता है जहाँ उसका container है: local variable हो तो stack पर, field हो तो heap पर object के अंदर, और boxed हो या lambda ने capture किया हो तो heap पर।",
        hg: "Reference-type objects managed heap par rehte hain. Value type wahin rehta hai jahan uska container hai: local variable ho to stack par, field ho to heap par object ke andar, aur boxed ho ya lambda ne capture kiya ho to heap par."
      },
      explain: {
        en: "<p>The common answer \"value types on the stack, reference types on the heap\" is <b>half right</b>, and interviewers for senior roles notice it.</p>\n<ul>\n<li><b>Stack</b>: one per thread; each method call gets a frame that is freed automatically when the method returns. Very cheap.</li>\n<li><b>Heap</b>: shared memory for objects; freed by the <b>garbage collector</b> when nothing references them (GC generations — Day 3).</li>\n<li>An <code>int</code> field of an <code>Order</code> object lives <b>inside</b> that object on the heap. An <code>int[]</code> keeps all its ints on the heap. A local captured by a lambda or used across <code>await</code> is moved into a compiler-generated object on the heap.</li>\n<li>The reference itself (the \"address\") is stored like a value: a local reference is on the stack, the object it points to is on the heap.</li>\n<li>In .NET 10 the JIT can even stack-allocate some small objects that never leave a method (escape analysis) — an optimisation you should not depend on.</li>\n</ul>\n<p><b>TL angle:</b> what matters in design is the <b>semantics</b> (copy vs share) and the <b>cost</b> (allocations create GC work; large structs are expensive to copy). Storage location is an implementation detail.</p>\n<p>Follow-up: \"Then why do people say value types are faster?\" — a local struct needs no heap allocation and no GC; but a large struct copied around often can be slower than a class.</p>",
        hi: "<p>आम जवाब \"value types stack पर, reference types heap पर\" <b>आधा सही</b> है, और senior roles के interviewers यह notice करते हैं।</p>\n<ul>\n<li><b>Stack</b>: हर thread का अपना; हर method call को एक frame मिलता है जो method return होते ही अपने-आप free हो जाता है। बहुत सस्ता।</li>\n<li><b>Heap</b>: objects के लिए shared memory; जब किसी का reference न बचे तो <b>garbage collector</b> इसे free करता है (GC generations — Day 3)।</li>\n<li><code>Order</code> object का <code>int</code> field उसी object के <b>अंदर</b> heap पर रहता है। <code>int[]</code> अपने सारे ints heap पर रखता है। Lambda ने जो local capture किया या जो <code>await</code> के पार use हुआ, वो compiler के बनाए object में heap पर चला जाता है।</li>\n<li>Reference ख़ुद (\"address\") एक value की तरह store होता है: local reference stack पर, और जिस object पर वो point करता है वो heap पर।</li>\n<li>.NET 10 में JIT कुछ छोटे objects को, जो method से बाहर नहीं जाते, stack पर भी allocate कर सकता है (escape analysis) — यह optimisation है, इस पर depend मत करो।</li>\n</ul>\n<p><b>TL angle:</b> design में ज़रूरी है <b>semantics</b> (copy बनाम share) और <b>cost</b> (allocations से GC का काम बढ़ता है; बड़े structs copy करना महँगा है)। Storage location एक implementation detail है।</p>\n<p>Follow-up: \"तो लोग क्यों कहते हैं कि value types तेज़ हैं?\" — local struct को heap allocation और GC नहीं चाहिए; पर बार-बार copy होने वाला बड़ा struct class से धीमा भी हो सकता है।</p>",
        hg: "<p>Aam jawaab \"value types stack par, reference types heap par\" <b>aadha sahi</b> hai, aur senior roles ke interviewers yeh notice karte hain.</p>\n<ul>\n<li><b>Stack</b>: har thread ka apna; har method call ko ek frame milta hai jo method return hote hi apne-aap free ho jaata hai. Bahut sasta.</li>\n<li><b>Heap</b>: objects ke liye shared memory; jab kisi ka reference na bache to <b>garbage collector</b> ise free karta hai (GC generations — Day 3).</li>\n<li><code>Order</code> object ka <code>int</code> field usi object ke <b>andar</b> heap par rehta hai. <code>int[]</code> apne saare ints heap par rakhta hai. Lambda ne jo local capture kiya ya jo <code>await</code> ke paar use hua, woh compiler ke banaye object mein heap par chala jaata hai.</li>\n<li>Reference khud (\"address\") ek value ki tarah store hota hai: local reference stack par, aur jis object par woh point karta hai woh heap par.</li>\n<li>.NET 10 mein JIT kuch chhote objects ko, jo method se bahar nahi jaate, stack par bhi allocate kar sakta hai (escape analysis) — yeh optimisation hai, is par depend mat karo.</li>\n</ul>\n<p><b>TL angle:</b> design mein zaroori hai <b>semantics</b> (copy vs share) aur <b>cost</b> (allocations se GC ka kaam badhta hai; bade structs copy karna mehenga hai). Storage location ek implementation detail hai.</p>\n<p>Follow-up: \"To log kyun kehte hain ki value types tez hain?\" — local struct ko heap allocation aur GC nahi chahiye; par baar-baar copy hone wala bada struct class se dheema bhi ho sakta hai.</p>"
      }
    },
    {
      id: "boxing-unboxing",
      depth: "short",
      q: "What is boxing and unboxing? Why should we avoid it?",
      answer: "Boxing wraps a value type in a heap object when it is used as object or as an interface; unboxing casts it back to the exact type. Each box costs an allocation and a copy, so avoid it in hot paths by using generics.",
      meaning: {
        hi: "Boxing मतलब value type को object या interface की तरह use करने पर उसे heap object में लपेटना; unboxing मतलब exact type में cast करके वापस निकालना। हर box में allocation और copy का खर्च है, इसलिए hot paths में generics use करके इससे बचो।",
        hg: "Boxing matlab value type ko object ya interface ki tarah use karne par use heap object mein lapetna; unboxing matlab exact type mein cast karke wapas nikaalna. Har box mein allocation aur copy ka kharch hai, isliye hot paths mein generics use karke isse bacho."
      },
      explain: {
        en: "<ul>\n<li><b>Where it hides</b>: non-generic collections (<code>ArrayList</code>, <code>Hashtable</code>), methods taking <code>object</code> (e.g. <code>string.Format(\"{0}\", 5)</code>), casting a struct to an interface (<code>IComparable c = 5;</code>), and storing structs in <code>object</code> fields.</li>\n<li><b>The copy</b>: the box holds a <b>snapshot</b>. Changing the original variable later does not change the box (see the puzzles).</li>\n<li><b>Unboxing rule</b>: the cast must match the exact boxed type (or its nullable). <code>(long)obj</code> on a boxed <code>int</code> throws <code>InvalidCastException</code>.</li>\n<li><b>Fixes</b>: generic collections and methods, <code>IEquatable&lt;T&gt;</code>/<code>IComparable&lt;T&gt;</code>, constraints like <code>where T : IComparable&lt;T&gt;</code> (calls on a struct <code>T</code> do not box).</li>\n</ul>\n<p>Follow-up: \"How would you find boxing in a real app?\" — look at allocation profiles (Visual Studio profiler, PerfView, <code>dotnet-trace</code>/<code>dotnet-counters</code>); in IL it is the <code>box</code> instruction.</p>\n<p><b>TL angle:</b> do not micro-optimise every box; care about it in hot loops and high-throughput endpoints.</p>",
        hi: "<ul>\n<li><b>यह कहाँ छुपी होती है</b>: non-generic collections (<code>ArrayList</code>, <code>Hashtable</code>), <code>object</code> लेने वाले methods (जैसे <code>string.Format(\"{0}\", 5)</code>), struct को interface में cast करना (<code>IComparable c = 5;</code>), और structs को <code>object</code> fields में रखना।</li>\n<li><b>Copy</b>: box में एक <b>snapshot</b> होता है। बाद में original variable बदलो तो box नहीं बदलता (puzzles देखो)।</li>\n<li><b>Unboxing rule</b>: cast ठीक उसी type से होना चाहिए जो box किया था (या उसका nullable)। Boxed <code>int</code> पर <code>(long)obj</code> करने से <code>InvalidCastException</code> आता है।</li>\n<li><b>Fixes</b>: generic collections और methods, <code>IEquatable&lt;T&gt;</code>/<code>IComparable&lt;T&gt;</code>, और <code>where T : IComparable&lt;T&gt;</code> जैसे constraints (struct <code>T</code> पर calls box नहीं करतीं)।</li>\n</ul>\n<p>Follow-up: \"Real app में boxing कैसे ढूँढोगे?\" — allocation profiles देखो (Visual Studio profiler, PerfView, <code>dotnet-trace</code>/<code>dotnet-counters</code>); IL में यह <code>box</code> instruction है।</p>\n<p><b>TL angle:</b> हर box को micro-optimise मत करो; hot loops और high-throughput endpoints में इसका ध्यान रखो।</p>",
        hg: "<ul>\n<li><b>Yeh kahan chhupi hoti hai</b>: non-generic collections (<code>ArrayList</code>, <code>Hashtable</code>), <code>object</code> lene wale methods (jaise <code>string.Format(\"{0}\", 5)</code>), struct ko interface mein cast karna (<code>IComparable c = 5;</code>), aur structs ko <code>object</code> fields mein rakhna.</li>\n<li><b>Copy</b>: box mein ek <b>snapshot</b> hota hai. Baad mein original variable badlo to box nahi badalta (puzzles dekho).</li>\n<li><b>Unboxing rule</b>: cast theek usi type se hona chahiye jo box kiya tha (ya uska nullable). Boxed <code>int</code> par <code>(long)obj</code> karne se <code>InvalidCastException</code> aata hai.</li>\n<li><b>Fixes</b>: generic collections aur methods, <code>IEquatable&lt;T&gt;</code>/<code>IComparable&lt;T&gt;</code>, aur <code>where T : IComparable&lt;T&gt;</code> jaise constraints (struct <code>T</code> par calls box nahi karti).</li>\n</ul>\n<p>Follow-up: \"Real app mein boxing kaise dhoondhoge?\" — allocation profiles dekho (Visual Studio profiler, PerfView, <code>dotnet-trace</code>/<code>dotnet-counters</code>); IL mein yeh <code>box</code> instruction hai.</p>\n<p><b>TL angle:</b> har box ko micro-optimise mat karo; hot loops aur high-throughput endpoints mein iska dhyaan rakho.</p>"
      }
    },
    {
      id: "string-vs-stringbuilder",
      depth: "short",
      q: "String vs StringBuilder — what is the difference and when would you use which?",
      answer: "string is immutable, so every change creates a new string; StringBuilder edits one growable buffer. I use StringBuilder when appending in a loop or an unknown number of times, and concatenation or interpolation for a few fixed pieces.",
      meaning: {
        hi: "string immutable है, इसलिए हर बदलाव नई string बनाता है; StringBuilder एक बढ़ने वाले buffer को ही edit करता है। Loop में या पता न हो कितनी बार append करना है तो StringBuilder, और कुछ fixed हिस्सों के लिए concatenation या interpolation।",
        hg: "string immutable hai, isliye har badlaav nayi string banata hai; StringBuilder ek badhne wale buffer ko hi edit karta hai. Loop mein ya pata na ho kitni baar append karna hai to StringBuilder, aur kuch fixed hisson ke liye concatenation ya interpolation."
      },
      explain: {
        en: "<ul>\n<li><code>s += x</code> in a loop of n items copies the growing text each time — roughly O(n²) character copies plus n garbage strings.</li>\n<li><code>StringBuilder</code> appends into an internal buffer that grows in chunks; <code>ToString()</code> makes the final string once. Give a <code>capacity</code> if you know the rough size.</li>\n<li>The compiler already optimises simple cases: <code>a + b + c</code> becomes one <code>string.Concat</code> call; constant pieces (<code>\"a\" + \"b\"</code>) are joined at compile time; <code>$\"...\"</code> (C# 10+) uses an efficient interpolation handler.</li>\n<li>For a collection, <code>string.Join(\", \", items)</code> is clearer than any loop.</li>\n</ul>\n<p>Follow-up: \"Is StringBuilder always faster?\" — No. For two or three pieces it adds overhead and noise; measure before \"optimising\".</p>\n<p>Follow-up: \"Is StringBuilder thread-safe?\" — No; do not share one instance across threads.</p>",
        hi: "<ul>\n<li>n items वाले loop में <code>s += x</code> हर बार बढ़ता हुआ text copy करता है — लगभग O(n²) character copies और n garbage strings।</li>\n<li><code>StringBuilder</code> अंदर के buffer में append करता है जो chunks में बढ़ता है; <code>ToString()</code> आख़िरी string एक बार बनाता है। अगर size का अंदाज़ा है तो <code>capacity</code> दे दो।</li>\n<li>Compiler simple cases पहले से optimise करता है: <code>a + b + c</code> एक <code>string.Concat</code> call बन जाता है; constant हिस्से (<code>\"a\" + \"b\"</code>) compile time पर ही जुड़ जाते हैं; <code>$\"...\"</code> (C# 10+) एक efficient interpolation handler use करता है।</li>\n<li>Collection के लिए <code>string.Join(\", \", items)</code> किसी भी loop से ज़्यादा साफ़ है।</li>\n</ul>\n<p>Follow-up: \"क्या StringBuilder हमेशा तेज़ है?\" — नहीं। दो-तीन हिस्सों के लिए यह overhead और noise बढ़ाता है; \"optimise\" करने से पहले measure करो।</p>\n<p>Follow-up: \"क्या StringBuilder thread-safe है?\" — नहीं; एक instance को कई threads में share मत करो।</p>",
        hg: "<ul>\n<li>n items wale loop mein <code>s += x</code> har baar badhta hua text copy karta hai — lagbhag O(n²) character copies aur n garbage strings.</li>\n<li><code>StringBuilder</code> andar ke buffer mein append karta hai jo chunks mein badhta hai; <code>ToString()</code> aakhri string ek baar banata hai. Agar size ka andaaza hai to <code>capacity</code> de do.</li>\n<li>Compiler simple cases pehle se optimise karta hai: <code>a + b + c</code> ek <code>string.Concat</code> call ban jaata hai; constant hisse (<code>\"a\" + \"b\"</code>) compile time par hi jud jaate hain; <code>$\"...\"</code> (C# 10+) ek efficient interpolation handler use karta hai.</li>\n<li>Collection ke liye <code>string.Join(\", \", items)</code> kisi bhi loop se zyada saaf hai.</li>\n</ul>\n<p>Follow-up: \"Kya StringBuilder hamesha tez hai?\" — Nahi. Do-teen hisson ke liye yeh overhead aur noise badhata hai; \"optimise\" karne se pehle measure karo.</p>\n<p>Follow-up: \"Kya StringBuilder thread-safe hai?\" — Nahi; ek instance ko kai threads mein share mat karo.</p>"
      }
    },
    {
      id: "string-immutable-interning",
      depth: "short",
      q: "Why are strings immutable in C#? What is string interning?",
      answer: "Immutability makes strings thread-safe, safe as dictionary keys and safe to share. Interning means identical string literals share one object from the runtime's intern pool, which saves memory precisely because nobody can change it.",
      meaning: {
        hi: "Immutability से strings thread-safe होती हैं, dictionary keys के रूप में safe होती हैं और share करना safe होता है। Interning मतलब एक जैसे string literals runtime के intern pool से एक ही object share करते हैं — memory बचती है, क्योंकि कोई उसे बदल ही नहीं सकता।",
        hg: "Immutability se strings thread-safe hoti hain, dictionary keys ke roop mein safe hoti hain aur share karna safe hota hai. Interning matlab ek jaise string literals runtime ke intern pool se ek hi object share karte hain — memory bachti hai, kyunki koi use badal hi nahi sakta."
      },
      explain: {
        en: "<ul>\n<li><b>Why immutable</b>: lock-free sharing between threads; a key's hash code never changes inside a <code>Dictionary</code>; validated values (paths, SQL, tokens) cannot be altered later through another reference; interning becomes possible.</li>\n<li><b>Interning</b>: string <b>literals</b> are interned automatically. Compile-time constant expressions such as <code>\"a\" + \"b\"</code> are folded into the literal <code>\"ab\"</code>, so they are interned too. Strings built at runtime (concatenation of variables, <code>ReadLine</code>, JSON) are <b>new objects</b> unless you call <code>string.Intern</code>.</li>\n<li>That is why <code>object.ReferenceEquals</code> on strings gives \"random-looking\" results — always compare with <code>==</code> or <code>string.Equals(..., StringComparison.Ordinal)</code>.</li>\n</ul>\n<p>Follow-up: \"How does <code>==</code> work for strings?\" — <code>string</code> overloads <code>==</code> to compare characters (ordinal). But if both variables are typed as <code>object</code>, <code>==</code> compares references — see puzzle \"== vs Equals\".</p>\n<p>Follow-up: \"Can you change a string in place?\" — Not in safe code; <code>s[0] = 'x'</code> is CS0200 (read-only indexer).</p>",
        hi: "<ul>\n<li><b>Immutable क्यों</b>: threads के बीच बिना lock share करना; <code>Dictionary</code> के अंदर key का hash code कभी नहीं बदलता; validate की गई values (paths, SQL, tokens) बाद में किसी दूसरे reference से बदली नहीं जा सकतीं; interning संभव होती है।</li>\n<li><b>Interning</b>: string <b>literals</b> अपने-आप intern होते हैं। <code>\"a\" + \"b\"</code> जैसे compile-time constant expressions literal <code>\"ab\"</code> में बदल जाते हैं, इसलिए वो भी intern होते हैं। Runtime पर बनी strings (variables का concatenation, <code>ReadLine</code>, JSON) <b>नए objects</b> होती हैं, जब तक <code>string.Intern</code> call न करो।</li>\n<li>इसीलिए strings पर <code>object.ReferenceEquals</code> के results \"random जैसे\" लगते हैं — हमेशा <code>==</code> या <code>string.Equals(..., StringComparison.Ordinal)</code> से compare करो।</li>\n</ul>\n<p>Follow-up: \"Strings के लिए <code>==</code> कैसे काम करता है?\" — <code>string</code> <code>==</code> को overload करके characters compare करती है (ordinal)। पर अगर दोनों variables का type <code>object</code> है, तो <code>==</code> references compare करता है — puzzle \"== vs Equals\" देखो।</p>\n<p>Follow-up: \"क्या string को उसी जगह बदल सकते हो?\" — Safe code में नहीं; <code>s[0] = 'x'</code> CS0200 है (read-only indexer)।</p>",
        hg: "<ul>\n<li><b>Immutable kyun</b>: threads ke beech bina lock share karna; <code>Dictionary</code> ke andar key ka hash code kabhi nahi badalta; validate ki gayi values (paths, SQL, tokens) baad mein kisi doosre reference se badli nahi ja sakti; interning sambhav hoti hai.</li>\n<li><b>Interning</b>: string <b>literals</b> apne-aap intern hote hain. <code>\"a\" + \"b\"</code> jaise compile-time constant expressions literal <code>\"ab\"</code> mein badal jaate hain, isliye woh bhi intern hote hain. Runtime par bani strings (variables ka concatenation, <code>ReadLine</code>, JSON) <b>naye objects</b> hoti hain, jab tak <code>string.Intern</code> call na karo.</li>\n<li>Isiliye strings par <code>object.ReferenceEquals</code> ke results \"random jaise\" lagte hain — hamesha <code>==</code> ya <code>string.Equals(..., StringComparison.Ordinal)</code> se compare karo.</li>\n</ul>\n<p>Follow-up: \"Strings ke liye <code>==</code> kaise kaam karta hai?\" — <code>string</code> <code>==</code> ko overload karke characters compare karti hai (ordinal). Par agar dono variables ka type <code>object</code> hai, to <code>==</code> references compare karta hai — puzzle \"== vs Equals\" dekho.</p>\n<p>Follow-up: \"Kya string ko usi jagah badal sakte ho?\" — Safe code mein nahi; <code>s[0] = 'x'</code> CS0200 hai (read-only indexer).</p>"
      }
    },
    {
      id: "generics-why",
      depth: "short",
      q: "What are generics and what problems do they solve?",
      answer: "Generics let you write a class or method once with a type parameter, like List&lt;T&gt;, and reuse it for any type — with compile-time type safety, no casts, and no boxing for value types.",
      meaning: {
        hi: "Generics से आप class या method एक बार type parameter के साथ लिखते हो, जैसे List&lt;T&gt;, और किसी भी type के लिए reuse करते हो — compile-time type safety के साथ, बिना casts, और value types की boxing के बिना।",
        hg: "Generics se aap class ya method ek baar type parameter ke saath likhte ho, jaise List&lt;T&gt;, aur kisi bhi type ke liye reuse karte ho — compile-time type safety ke saath, bina casts, aur value types ki boxing ke bina."
      },
      explain: {
        en: "<ul>\n<li><b>Before generics</b> (.NET 1.x): <code>ArrayList</code> stored <code>object</code> — every read needed a cast, a wrong type failed only at runtime, and every <code>int</code> was boxed.</li>\n<li><b>With generics</b>: <code>List&lt;int&gt;</code> stores real ints; <code>list.Add(\"x\")</code> is a compile error.</li>\n<li><b>Constraints</b> (<code>where T : ...</code>) let you call members on <code>T</code> safely, e.g. <code>where T : IComparable&lt;T&gt;</code> lets you call <code>CompareTo</code>.</li>\n<li>C# generics are <b>reified</b>: the runtime knows <code>List&lt;int&gt;</code> and <code>List&lt;string&gt;</code> are different types (Java erases type arguments). The JIT generates specialised code for value types.</li>\n</ul>\n<p>Follow-up: \"Where have you written your own generic type?\" — e.g. <code>Result&lt;T&gt;</code> for service responses, <code>PagedList&lt;T&gt;</code> for paging, a generic repository or cache.</p>\n<p>Follow-up: \"Is a static field shared between <code>Cache&lt;int&gt;</code> and <code>Cache&lt;string&gt;</code>?\" — No, each closed type has its own static fields (see puzzle).</p>",
        hi: "<ul>\n<li><b>Generics से पहले</b> (.NET 1.x): <code>ArrayList</code> <code>object</code> रखती थी — हर read पर cast चाहिए, गलत type सिर्फ़ runtime पर fail होता, और हर <code>int</code> box होता।</li>\n<li><b>Generics के साथ</b>: <code>List&lt;int&gt;</code> असली ints रखती है; <code>list.Add(\"x\")</code> compile error है।</li>\n<li><b>Constraints</b> (<code>where T : ...</code>) से आप <code>T</code> पर safely members call कर सकते हो, जैसे <code>where T : IComparable&lt;T&gt;</code> से <code>CompareTo</code> call कर सकते हो।</li>\n<li>C# generics <b>reified</b> हैं: runtime जानता है कि <code>List&lt;int&gt;</code> और <code>List&lt;string&gt;</code> अलग types हैं (Java type arguments मिटा देता है)। JIT value types के लिए specialised code बनाता है।</li>\n</ul>\n<p>Follow-up: \"आपने अपना generic type कहाँ लिखा है?\" — जैसे service responses के लिए <code>Result&lt;T&gt;</code>, paging के लिए <code>PagedList&lt;T&gt;</code>, generic repository या cache।</p>\n<p>Follow-up: \"क्या <code>Cache&lt;int&gt;</code> और <code>Cache&lt;string&gt;</code> के बीच static field share होता है?\" — नहीं, हर closed type के अपने static fields होते हैं (puzzle देखो)।</p>",
        hg: "<ul>\n<li><b>Generics se pehle</b> (.NET 1.x): <code>ArrayList</code> <code>object</code> rakhti thi — har read par cast chahiye, galat type sirf runtime par fail hota, aur har <code>int</code> box hota.</li>\n<li><b>Generics ke saath</b>: <code>List&lt;int&gt;</code> asli ints rakhti hai; <code>list.Add(\"x\")</code> compile error hai.</li>\n<li><b>Constraints</b> (<code>where T : ...</code>) se aap <code>T</code> par safely members call kar sakte ho, jaise <code>where T : IComparable&lt;T&gt;</code> se <code>CompareTo</code> call kar sakte ho.</li>\n<li>C# generics <b>reified</b> hain: runtime jaanta hai ki <code>List&lt;int&gt;</code> aur <code>List&lt;string&gt;</code> alag types hain (Java type arguments mita deta hai). JIT value types ke liye specialised code banata hai.</li>\n</ul>\n<p>Follow-up: \"Aapne apna generic type kahan likha hai?\" — jaise service responses ke liye <code>Result&lt;T&gt;</code>, paging ke liye <code>PagedList&lt;T&gt;</code>, generic repository ya cache.</p>\n<p>Follow-up: \"Kya <code>Cache&lt;int&gt;</code> aur <code>Cache&lt;string&gt;</code> ke beech static field share hota hai?\" — Nahi, har closed type ke apne static fields hote hain (puzzle dekho).</p>"
      }
    },
    {
      id: "delegate-vs-event",
      depth: "short",
      q: "What is the difference between a delegate and an event?",
      answer: "A delegate is a type-safe reference to one or more methods. An event is a delegate with access control: outside code can only subscribe or unsubscribe, and only the owning class can raise it.",
      meaning: {
        hi: "Delegate एक या ज़्यादा methods का type-safe reference है। Event access control वाला delegate है: बाहर का code सिर्फ़ subscribe या unsubscribe कर सकता है, और raise सिर्फ़ owner class कर सकती है।",
        hg: "Delegate ek ya zyada methods ka type-safe reference hai. Event access control wala delegate hai: bahar ka code sirf subscribe ya unsubscribe kar sakta hai, aur raise sirf owner class kar sakti hai."
      },
      explain: {
        en: "<p>Why does the <code>event</code> keyword exist? With a <b>public delegate field</b>, any subscriber could:</p>\n<ul>\n<li>write <code>OnChanged = handler;</code> (with <code>=</code>, not <code>+=</code>) and silently remove everyone else's handlers, or</li>\n<li>call <code>OnChanged(...)</code> itself and fake a notification.</li>\n</ul>\n<p>With <code>event</code>, both are compile errors outside the class (CS0070). Outsiders get only <code>+=</code> and <code>-=</code>.</p>\n<ul>\n<li>Convention: <code>public event EventHandler&lt;OrderPlacedEventArgs&gt;? OrderPlaced;</code>, raised as <code>OrderPlaced?.Invoke(this, args)</code>.</li>\n<li>The compiler-generated <code>add</code>/<code>remove</code> for a field-like event are thread-safe.</li>\n</ul>\n<p>Follow-up: \"Delegate vs interface for a callback?\" — one method and no state → <code>Func</code>/<code>Action</code>; several related methods or a named role → an interface.</p>\n<p>Follow-up: \"Can events cause memory leaks?\" — Yes, see the detailed question on event leaks.</p>",
        hi: "<p><code>event</code> keyword क्यों है? <b>Public delegate field</b> के साथ कोई भी subscriber:</p>\n<ul>\n<li><code>OnChanged = handler;</code> लिख सकता है (<code>+=</code> की जगह <code>=</code>) और चुपचाप बाकी सबके handlers हटा सकता है, या</li>\n<li>ख़ुद <code>OnChanged(...)</code> call करके नकली notification भेज सकता है।</li>\n</ul>\n<p><code>event</code> के साथ class के बाहर दोनों compile errors हैं (CS0070)। बाहर वालों को सिर्फ़ <code>+=</code> और <code>-=</code> मिलता है।</p>\n<ul>\n<li>Convention: <code>public event EventHandler&lt;OrderPlacedEventArgs&gt;? OrderPlaced;</code>, और raise होता है <code>OrderPlaced?.Invoke(this, args)</code> से।</li>\n<li>Field-like event के लिए compiler जो <code>add</code>/<code>remove</code> बनाता है, वो thread-safe हैं।</li>\n</ul>\n<p>Follow-up: \"Callback के लिए delegate या interface?\" — एक method और कोई state नहीं → <code>Func</code>/<code>Action</code>; कई related methods या कोई named role → interface।</p>\n<p>Follow-up: \"क्या events से memory leak हो सकता है?\" — हाँ, event leaks वाला detailed question देखो।</p>",
        hg: "<p><code>event</code> keyword kyun hai? <b>Public delegate field</b> ke saath koi bhi subscriber:</p>\n<ul>\n<li><code>OnChanged = handler;</code> likh sakta hai (<code>+=</code> ki jagah <code>=</code>) aur chupchaap baaki sabke handlers hata sakta hai, ya</li>\n<li>khud <code>OnChanged(...)</code> call karke nakli notification bhej sakta hai.</li>\n</ul>\n<p><code>event</code> ke saath class ke bahar dono compile errors hain (CS0070). Bahar walon ko sirf <code>+=</code> aur <code>-=</code> milta hai.</p>\n<ul>\n<li>Convention: <code>public event EventHandler&lt;OrderPlacedEventArgs&gt;? OrderPlaced;</code>, aur raise hota hai <code>OrderPlaced?.Invoke(this, args)</code> se.</li>\n<li>Field-like event ke liye compiler jo <code>add</code>/<code>remove</code> banata hai, woh thread-safe hain.</li>\n</ul>\n<p>Follow-up: \"Callback ke liye delegate ya interface?\" — ek method aur koi state nahi → <code>Func</code>/<code>Action</code>; kai related methods ya koi named role → interface.</p>\n<p>Follow-up: \"Kya events se memory leak ho sakta hai?\" — Haan, event leaks wala detailed question dekho.</p>"
      }
    },
    {
      id: "extension-methods",
      depth: "short",
      q: "What are extension methods and how do they work internally?",
      answer: "Static methods in a static class whose first parameter has this, so they read like instance methods. The compiler rewrites each call into an ordinary static call — that is how LINQ works.",
      meaning: {
        hi: "ये static class के अंदर static methods हैं जिनके पहले parameter पर this लगा होता है, इसलिए इन्हें instance methods की तरह call कर सकते हो। Compiler बस call को normal static method call में बदल देता है — LINQ ऐसे ही बना है।",
        hg: "Yeh static class ke andar static methods hain jinke pehle parameter par this laga hota hai, isliye inhe instance methods ki tarah call kar sakte ho. Compiler bas call ko normal static method call mein badal deta hai — LINQ aise hi bana hai."
      },
      explain: {
        en: "<ul>\n<li><code>orders.Where(o =&gt; o.Total &gt; 500)</code> compiles to <code>Enumerable.Where(orders, o =&gt; o.Total &gt; 500)</code>.</li>\n<li>Bound at <b>compile time</b> using the declared type; no polymorphism. If an applicable instance method exists, it always wins.</li>\n<li>No access to private members — it is just an outside static method.</li>\n<li>Can be called on <code>null</code> (no automatic <code>NullReferenceException</code>).</li>\n<li>Need the namespace imported (<code>using</code>), which is how ASP.NET Core \"adds\" methods like <code>AddControllers()</code> to <code>IServiceCollection</code>.</li>\n<li><b>C# 14</b> adds extension <b>members</b>: extension properties and static extension members using an <code>extension(...)</code> block.</li>\n</ul>\n<p>Follow-up: \"Can you override an extension method?\" — No; it is static and chosen at compile time.</p>\n<p>Follow-up: \"How do you mock one in a unit test?\" — You cannot mock a static method with Moq. Keep extension methods small and pure (test them directly), or put the behaviour behind an interface.</p>",
        hi: "<ul>\n<li><code>orders.Where(o =&gt; o.Total &gt; 500)</code> compile होकर <code>Enumerable.Where(orders, o =&gt; o.Total &gt; 500)</code> बनता है।</li>\n<li><b>Compile time</b> पर declared type से bind होता है; कोई polymorphism नहीं। अगर लागू होने लायक instance method मौजूद है, तो वही हमेशा जीतता है।</li>\n<li>Private members तक पहुँच नहीं — यह बस बाहर का एक static method है।</li>\n<li><code>null</code> पर भी call हो सकता है (अपने-आप <code>NullReferenceException</code> नहीं)।</li>\n<li>Namespace import (<code>using</code>) चाहिए — इसी तरह ASP.NET Core <code>IServiceCollection</code> में <code>AddControllers()</code> जैसे methods \"जोड़ता\" है।</li>\n<li><b>C# 14</b> में extension <b>members</b> आए: <code>extension(...)</code> block से extension properties और static extension members।</li>\n</ul>\n<p>Follow-up: \"क्या extension method override कर सकते हो?\" — नहीं; यह static है और compile time पर चुना जाता है।</p>\n<p>Follow-up: \"Unit test में इसे mock कैसे करोगे?\" — Moq से static method mock नहीं होता। Extension methods छोटे और pure रखो (उन्हें सीधे test करो), या behaviour को interface के पीछे रखो।</p>",
        hg: "<ul>\n<li><code>orders.Where(o =&gt; o.Total &gt; 500)</code> compile hokar <code>Enumerable.Where(orders, o =&gt; o.Total &gt; 500)</code> banta hai.</li>\n<li><b>Compile time</b> par declared type se bind hota hai; koi polymorphism nahi. Agar laagu hone laayak instance method maujood hai, to wahi hamesha jeetta hai.</li>\n<li>Private members tak pahunch nahi — yeh bas bahar ka ek static method hai.</li>\n<li><code>null</code> par bhi call ho sakta hai (apne-aap <code>NullReferenceException</code> nahi).</li>\n<li>Namespace import (<code>using</code>) chahiye — isi tarah ASP.NET Core <code>IServiceCollection</code> mein <code>AddControllers()</code> jaise methods \"jodta\" hai.</li>\n<li><b>C# 14</b> mein extension <b>members</b> aaye: <code>extension(...)</code> block se extension properties aur static extension members.</li>\n</ul>\n<p>Follow-up: \"Kya extension method override kar sakte ho?\" — Nahi; yeh static hai aur compile time par chuna jaata hai.</p>\n<p>Follow-up: \"Unit test mein ise mock kaise karoge?\" — Moq se static method mock nahi hota. Extension methods chhote aur pure rakho (unhe seedhe test karo), ya behaviour ko interface ke peeche rakho.</p>"
      }
    },
    {
      id: "struct-vs-class",
      depth: "detailed",
      q: "When would you choose a struct over a class?",
      answer: "For small, immutable, value-like data that is created often and rarely boxed — money, coordinates, a date range. For everything else a class is the safer default.",
      meaning: {
        hi: "छोटे, immutable, value जैसे data के लिए जो बार-बार बनता है और कम box होता है — money, coordinates, date range। बाकी सब के लिए class ज़्यादा safe default है।",
        hg: "Chhote, immutable, value jaise data ke liye jo baar-baar banta hai aur kam box hota hai — money, coordinates, date range. Baaki sab ke liye class zyada safe default hai."
      },
      explain: {
        en: "<p>Microsoft's design guidelines say: consider a struct when the type <b>logically represents a single value</b>, is <b>small</b> (around 16 bytes or less), is <b>immutable</b>, and will <b>not be boxed often</b>.</p>\n<ul>\n<li>Make it a <code>readonly struct</code> (or a <code>readonly record struct</code>, C# 10, which also generates value equality).</li>\n<li>Implement <code>IEquatable&lt;T&gt;</code> (or use a record struct) — the default <code>ValueType.Equals</code> may use reflection, which is slow for dictionary keys. User-defined structs also get no <code>==</code> operator by default (CS0019).</li>\n<li><b>Downsides</b>: copying a large struct on every assignment or call; mutable-struct bugs (you change a copy, not the original); no inheritance; <code>default(T)</code> gives all-zero fields even if your constructor has rules.</li>\n</ul>\n<p>Follow-up: \"What is a <code>ref struct</code>?\" — a struct that must stay on the stack, like <code>Span&lt;T&gt;</code>: it cannot be boxed or stored in a class field (Span basics — Day 3).</p>\n<p><b>TL angle:</b> in code review, a mutable public struct is a red flag; ask for <code>readonly struct</code> or a class.</p>",
        hi: "<p>Microsoft की design guidelines कहती हैं: struct तब सोचो जब type <b>logically एक ही value</b> हो, <b>छोटा</b> हो (करीब 16 bytes या कम), <b>immutable</b> हो, और <b>बार-बार box न हो</b>।</p>\n<ul>\n<li>इसे <code>readonly struct</code> बनाओ (या <code>readonly record struct</code>, C# 10, जो value equality भी ख़ुद बना देता है)।</li>\n<li><code>IEquatable&lt;T&gt;</code> implement करो (या record struct use करो) — default <code>ValueType.Equals</code> reflection use कर सकता है, जो dictionary keys के लिए धीमा है। User-defined structs को by default <code>==</code> operator भी नहीं मिलता (CS0019)।</li>\n<li><b>नुकसान</b>: हर assignment या call पर बड़े struct की copy; mutable-struct bugs (आप copy बदलते हो, original नहीं); inheritance नहीं; <code>default(T)</code> सारे fields zero कर देता है, चाहे आपके constructor में rules हों।</li>\n</ul>\n<p>Follow-up: \"<code>ref struct</code> क्या है?\" — ऐसा struct जिसे stack पर ही रहना है, जैसे <code>Span&lt;T&gt;</code>: इसे box नहीं कर सकते, न class field में रख सकते (Span basics — Day 3)।</p>\n<p><b>TL angle:</b> code review में mutable public struct एक red flag है; <code>readonly struct</code> या class माँगो।</p>",
        hg: "<p>Microsoft ki design guidelines kehti hain: struct tab socho jab type <b>logically ek hi value</b> ho, <b>chhota</b> ho (kareeb 16 bytes ya kam), <b>immutable</b> ho, aur <b>baar-baar box na ho</b>.</p>\n<ul>\n<li>Ise <code>readonly struct</code> banao (ya <code>readonly record struct</code>, C# 10, jo value equality bhi khud bana deta hai).</li>\n<li><code>IEquatable&lt;T&gt;</code> implement karo (ya record struct use karo) — default <code>ValueType.Equals</code> reflection use kar sakta hai, jo dictionary keys ke liye dheema hai. User-defined structs ko by default <code>==</code> operator bhi nahi milta (CS0019).</li>\n<li><b>Nuksaan</b>: har assignment ya call par bade struct ki copy; mutable-struct bugs (aap copy badalte ho, original nahi); inheritance nahi; <code>default(T)</code> saare fields zero kar deta hai, chahe aapke constructor mein rules hon.</li>\n</ul>\n<p>Follow-up: \"<code>ref struct</code> kya hai?\" — aisa struct jise stack par hi rehna hai, jaise <code>Span&lt;T&gt;</code>: ise box nahi kar sakte, na class field mein rakh sakte (Span basics — Day 3).</p>\n<p><b>TL angle:</b> code review mein mutable public struct ek red flag hai; <code>readonly struct</code> ya class maango.</p>"
      }
    },
    {
      id: "ref-out-in",
      depth: "detailed",
      q: "What is the difference between ref, out and in parameters?",
      answer: "All three pass a variable by reference. ref must be initialised and can be read and changed; out must be assigned by the method, as in TryParse; in is read-only and avoids copying large structs.",
      meaning: {
        hi: "तीनों variable को by reference pass करते हैं। ref पहले से initialised होना चाहिए और पढ़ा-बदला जा सकता है; out को method assign करता ही है, जैसे TryParse में; in read-only है और बड़े structs की copy बचाता है।",
        hg: "Teeno variable ko by reference pass karte hain. ref pehle se initialised hona chahiye aur padha-badla ja sakta hai; out ko method assign karta hi hai, jaise TryParse mein; in read-only hai aur bade structs ki copy bachata hai."
      },
      explain: {
        en: "<ul>\n<li><code>ref</code>: caller must assign it first (CS0165 otherwise); method may read and write.</li>\n<li><code>out</code>: caller need not assign; method <b>must</b> assign before returning (CS0177). Inline declaration: <code>int.TryParse(s, out var n)</code>.</li>\n<li><code>in</code>: passed by reference but read-only inside (CS8331 if you assign). Useful for large <code>readonly struct</code>s. C# 12 also added <code>ref readonly</code> parameters.</li>\n<li>Async methods and iterators cannot have <code>ref</code>/<code>out</code>/<code>in</code> parameters (CS1988 for async) — return a tuple or a result object instead.</li>\n</ul>\n<p>Follow-up (very common): \"If I pass a <code>List</code> to a method without <code>ref</code> and the method does <code>list = new List&lt;int&gt;()</code>, what does the caller see?\" — The <b>old</b> list. Only the method's copy of the reference changed. But <code>list.Add(5)</code> inside the method <b>is</b> visible, because both references point to the same object.</p>\n<p><b>TL angle:</b> many <code>ref</code>/<code>out</code> parameters make an API hard to read; prefer returning a tuple or a small result type.</p>",
        hi: "<ul>\n<li><code>ref</code>: caller को पहले assign करना होगा (वरना CS0165); method पढ़ भी सकता है, लिख भी सकता है।</li>\n<li><code>out</code>: caller को assign करने की ज़रूरत नहीं; method को return से पहले assign करना <b>ही</b> होगा (CS0177)। Inline declaration: <code>int.TryParse(s, out var n)</code>।</li>\n<li><code>in</code>: by reference pass होता है पर अंदर read-only (assign करो तो CS8331)। बड़े <code>readonly struct</code>s के लिए useful। C# 12 में <code>ref readonly</code> parameters भी आए।</li>\n<li>Async methods और iterators में <code>ref</code>/<code>out</code>/<code>in</code> parameters नहीं हो सकते (async के लिए CS1988) — इसकी जगह tuple या result object return करो।</li>\n</ul>\n<p>Follow-up (बहुत common): \"अगर मैं method को बिना <code>ref</code> के <code>List</code> pass करूँ और method <code>list = new List&lt;int&gt;()</code> करे, तो caller को क्या दिखेगा?\" — <b>पुरानी</b> list। सिर्फ़ method की reference copy बदली। पर method के अंदर <code>list.Add(5)</code> caller को <b>दिखेगा</b>, क्योंकि दोनों references एक ही object पर point करते हैं।</p>\n<p><b>TL angle:</b> बहुत सारे <code>ref</code>/<code>out</code> parameters API को पढ़ना मुश्किल बनाते हैं; tuple या छोटा result type return करना बेहतर है।</p>",
        hg: "<ul>\n<li><code>ref</code>: caller ko pehle assign karna hoga (warna CS0165); method padh bhi sakta hai, likh bhi sakta hai.</li>\n<li><code>out</code>: caller ko assign karne ki zaroorat nahi; method ko return se pehle assign karna <b>hi</b> hoga (CS0177). Inline declaration: <code>int.TryParse(s, out var n)</code>.</li>\n<li><code>in</code>: by reference pass hota hai par andar read-only (assign karo to CS8331). Bade <code>readonly struct</code>s ke liye useful. C# 12 mein <code>ref readonly</code> parameters bhi aaye.</li>\n<li>Async methods aur iterators mein <code>ref</code>/<code>out</code>/<code>in</code> parameters nahi ho sakte (async ke liye CS1988) — iski jagah tuple ya result object return karo.</li>\n</ul>\n<p>Follow-up (bahut common): \"Agar main method ko bina <code>ref</code> ke <code>List</code> pass karoon aur method <code>list = new List&lt;int&gt;()</code> kare, to caller ko kya dikhega?\" — <b>Purani</b> list. Sirf method ki reference copy badli. Par method ke andar <code>list.Add(5)</code> caller ko <b>dikhega</b>, kyunki dono references ek hi object par point karte hain.</p>\n<p><b>TL angle:</b> bahut saare <code>ref</code>/<code>out</code> parameters API ko padhna mushkil banate hain; tuple ya chhota result type return karna behtar hai.</p>"
      }
    },
    {
      id: "const-vs-readonly",
      depth: "detailed",
      q: "What is the difference between const, readonly and static readonly?",
      answer: "const is a compile-time constant copied into every caller; readonly is set once per object, in the declaration or constructor; static readonly is set once per type at runtime. For public library values I prefer static readonly.",
      meaning: {
        hi: "const compile-time constant है जो हर caller में copy हो जाता है; readonly हर object के लिए एक बार set होता है, declaration या constructor में; static readonly पूरे type के लिए runtime पर एक बार set होता है। Library की public values के लिए static readonly बेहतर है।",
        hg: "const compile-time constant hai jo har caller mein copy ho jaata hai; readonly har object ke liye ek baar set hota hai, declaration ya constructor mein; static readonly poore type ke liye runtime par ek baar set hota hai. Library ki public values ke liye static readonly behtar hai."
      },
      explain: {
        en: "<ul>\n<li><code>const</code>: value known at compile time; only primitive types, <code>string</code>, enums (another type such as <code>DateTime</code> gives CS0283; a non-constant value gives CS0133). Implicitly static. Can be used in <code>switch</code> cases and attribute arguments.</li>\n<li><code>readonly</code>: any type; assigned in the declaration or a constructor (CS0191 elsewhere); different objects can hold different values.</li>\n<li><code>static readonly</code>: any type, one value per type, computed at runtime — e.g. <code>static readonly TimeSpan Timeout = TimeSpan.FromSeconds(30);</code> (CS0198 if assigned outside the static constructor/initializer).</li>\n</ul>\n<p><b>The versioning trap</b> (TL-level): library A has <code>public const int MaxItems = 50;</code>. App B compiles against it — the number 50 is <b>copied into B's IL</b>. A ships 100, but B still uses 50 until B is recompiled. With <code>static readonly</code>, B reads the value from A at runtime.</p>\n<p>Follow-up: \"Does readonly make an object immutable?\" — No, it is shallow: a <code>readonly List&lt;T&gt;</code> can still be modified; only the reference is fixed.</p>",
        hi: "<ul>\n<li><code>const</code>: value compile time पर पता होनी चाहिए; सिर्फ़ primitive types, <code>string</code>, enums (<code>DateTime</code> जैसा दूसरा type दो तो CS0283; non-constant value दो तो CS0133)। अपने-आप static। <code>switch</code> cases और attribute arguments में use हो सकता है।</li>\n<li><code>readonly</code>: कोई भी type; declaration या constructor में assign होता है (कहीं और CS0191); अलग objects की अलग values हो सकती हैं।</li>\n<li><code>static readonly</code>: कोई भी type, पूरे type के लिए एक value, runtime पर calculate — जैसे <code>static readonly TimeSpan Timeout = TimeSpan.FromSeconds(30);</code> (static constructor/initializer के बाहर assign करो तो CS0198)।</li>\n</ul>\n<p><b>Versioning trap</b> (TL-level): library A में <code>public const int MaxItems = 50;</code> है। App B उसके against compile होता है — number 50 <b>B के IL में copy हो जाता है</b>। A ने 100 ship किया, पर B तब तक 50 ही use करेगा जब तक B recompile न हो। <code>static readonly</code> में B runtime पर A से value पढ़ता है।</p>\n<p>Follow-up: \"क्या readonly object को immutable बना देता है?\" — नहीं, यह shallow है: <code>readonly List&lt;T&gt;</code> अब भी बदल सकती है; सिर्फ़ reference fix है।</p>",
        hg: "<ul>\n<li><code>const</code>: value compile time par pata honi chahiye; sirf primitive types, <code>string</code>, enums (<code>DateTime</code> jaisa doosra type do to CS0283; non-constant value do to CS0133). Apne-aap static. <code>switch</code> cases aur attribute arguments mein use ho sakta hai.</li>\n<li><code>readonly</code>: koi bhi type; declaration ya constructor mein assign hota hai (kahin aur CS0191); alag objects ki alag values ho sakti hain.</li>\n<li><code>static readonly</code>: koi bhi type, poore type ke liye ek value, runtime par calculate — jaise <code>static readonly TimeSpan Timeout = TimeSpan.FromSeconds(30);</code> (static constructor/initializer ke bahar assign karo to CS0198).</li>\n</ul>\n<p><b>Versioning trap</b> (TL-level): library A mein <code>public const int MaxItems = 50;</code> hai. App B uske against compile hota hai — number 50 <b>B ke IL mein copy ho jaata hai</b>. A ne 100 ship kiya, par B tab tak 50 hi use karega jab tak B recompile na ho. <code>static readonly</code> mein B runtime par A se value padhta hai.</p>\n<p>Follow-up: \"Kya readonly object ko immutable bana deta hai?\" — Nahi, yeh shallow hai: <code>readonly List&lt;T&gt;</code> ab bhi badal sakti hai; sirf reference fix hai.</p>"
      }
    },
    {
      id: "equality",
      depth: "detailed",
      q: "What is the difference between == and Equals()? How do they behave for strings, classes and structs?",
      answer: "For classes, == and Equals compare references unless overridden; string and records override them to compare values. Structs get a value-based Equals, but no == unless you define one.",
      meaning: {
        hi: "Classes में == और Equals override न हों तो references compare करते हैं; string और records इन्हें override करके values compare करते हैं। Structs को value-based Equals मिलता है, पर == तभी जब आप ख़ुद define करो।",
        hg: "Classes mein == aur Equals override na hon to references compare karte hain; string aur records inhe override karke values compare karte hain. Structs ko value-based Equals milta hai, par == tabhi jab aap khud define karo."
      },
      explain: {
        en: "<ul>\n<li><code>==</code> is an <b>operator</b> — chosen at compile time from the <b>declared</b> types. <code>Equals</code> is a <b>virtual method</b> — chosen at runtime from the object.</li>\n<li>So <code>object a = \"hi\"; object b = new string(\"hi\");</code> → <code>a == b</code> is <b>False</b> (object's <code>==</code> = reference check), <code>a.Equals(b)</code> is <b>True</b> (string's override). See the puzzle.</li>\n<li><code>object.ReferenceEquals(a, b)</code> always checks identity.</li>\n<li><b>Contract</b>: if you override <code>Equals</code>, also override <code>GetHashCode</code> (equal objects must have equal hash codes) — otherwise <code>Dictionary</code>/<code>HashSet</code> break. <code>HashCode.Combine(a, b)</code> helps. Better: implement <code>IEquatable&lt;T&gt;</code>, or use a <b>record</b>, which generates all of it.</li>\n</ul>\n<p>Follow-up: \"How do you compare strings ignoring case?\" — <code>string.Equals(a, b, StringComparison.OrdinalIgnoreCase)</code>, not <code>ToLower()</code> on both.</p>\n<p><b>TL angle:</b> for entities, equality is usually by <b>Id</b>; for value objects (Money, Address), by <b>all values</b> — records fit value objects well.</p>",
        hi: "<ul>\n<li><code>==</code> एक <b>operator</b> है — compile time पर <b>declared</b> types से चुना जाता है। <code>Equals</code> एक <b>virtual method</b> है — runtime पर object से चुना जाता है।</li>\n<li>इसलिए <code>object a = \"hi\"; object b = new string(\"hi\");</code> → <code>a == b</code> <b>False</b> है (object का <code>==</code> = reference check), <code>a.Equals(b)</code> <b>True</b> है (string का override)। Puzzle देखो।</li>\n<li><code>object.ReferenceEquals(a, b)</code> हमेशा identity check करता है।</li>\n<li><b>Contract</b>: <code>Equals</code> override करो तो <code>GetHashCode</code> भी करो (बराबर objects के hash codes बराबर होने चाहिए) — वरना <code>Dictionary</code>/<code>HashSet</code> गड़बड़ करेंगे। <code>HashCode.Combine(a, b)</code> मदद करता है। बेहतर: <code>IEquatable&lt;T&gt;</code> implement करो, या <b>record</b> use करो, जो यह सब ख़ुद बना देता है।</li>\n</ul>\n<p>Follow-up: \"Case ignore करके strings कैसे compare करोगे?\" — <code>string.Equals(a, b, StringComparison.OrdinalIgnoreCase)</code>, दोनों पर <code>ToLower()</code> नहीं।</p>\n<p><b>TL angle:</b> entities की equality आम तौर पर <b>Id</b> से होती है; value objects (Money, Address) की <b>सारी values</b> से — value objects के लिए records अच्छे बैठते हैं।</p>",
        hg: "<ul>\n<li><code>==</code> ek <b>operator</b> hai — compile time par <b>declared</b> types se chuna jaata hai. <code>Equals</code> ek <b>virtual method</b> hai — runtime par object se chuna jaata hai.</li>\n<li>Isliye <code>object a = \"hi\"; object b = new string(\"hi\");</code> → <code>a == b</code> <b>False</b> hai (object ka <code>==</code> = reference check), <code>a.Equals(b)</code> <b>True</b> hai (string ka override). Puzzle dekho.</li>\n<li><code>object.ReferenceEquals(a, b)</code> hamesha identity check karta hai.</li>\n<li><b>Contract</b>: <code>Equals</code> override karo to <code>GetHashCode</code> bhi karo (barabar objects ke hash codes barabar hone chahiye) — warna <code>Dictionary</code>/<code>HashSet</code> gadbad karenge. <code>HashCode.Combine(a, b)</code> madad karta hai. Behtar: <code>IEquatable&lt;T&gt;</code> implement karo, ya <b>record</b> use karo, jo yeh sab khud bana deta hai.</li>\n</ul>\n<p>Follow-up: \"Case ignore karke strings kaise compare karoge?\" — <code>string.Equals(a, b, StringComparison.OrdinalIgnoreCase)</code>, dono par <code>ToLower()</code> nahi.</p>\n<p><b>TL angle:</b> entities ki equality aam taur par <b>Id</b> se hoti hai; value objects (Money, Address) ki <b>saari values</b> se — value objects ke liye records achhe baithte hain.</p>"
      }
    },
    {
      id: "var-dynamic-object",
      depth: "detailed",
      q: "What is the difference between var, dynamic and object?",
      answer: "var is compile-time type inference — the variable is still strongly typed. object is the base type: value types get boxed and you must cast. dynamic skips compile-time checks and binds members at runtime.",
      meaning: {
        hi: "var compile-time type inference है — variable फिर भी strongly typed रहता है। object base type है: value types box होते हैं और cast करना पड़ता है। dynamic compile-time checks छोड़ देता है और members runtime पर bind करता है।",
        hg: "var compile-time type inference hai — variable phir bhi strongly typed rehta hai. object base type hai: value types box hote hain aur cast karna padta hai. dynamic compile-time checks chhod deta hai aur members runtime par bind karta hai."
      },
      explain: {
        en: "<p><b>Analogy:</b> <code>var</code> is a parcel whose label the post office fills in for you — the label is still there and checked. <code>object</code> is a plain brown box — anything fits, but you must open it and check what is inside before using it (cast). <code>dynamic</code> is accepting the parcel <b>without any check</b> — you find out only when you open it at home (runtime).</p>\n<ul>\n<li><code>var count = 5;</code> — the compiler infers <code>int</code>. Later <code>count = \"x\";</code> is a compile error (CS0029). Same performance and safety as writing <code>int</code>.</li>\n<li><code>object o = 5;</code> — boxing; <code>o + 1</code> does not compile (CS0019) until you cast: <code>(int)o + 1</code>.</li>\n<li><code>dynamic d = 5;</code> — <code>d + 1</code>, <code>d.Length</code>, <code>d.Foo()</code> all compile. The runtime binder (Microsoft.CSharp) decides at runtime; a missing member throws <code>RuntimeBinderException</code>.</li>\n<li><b>Cost of dynamic</b>: runtime binding work (cached after the first call, but still slower than a normal call), no IntelliSense, no compile-time safety, and errors move from your build to production.</li>\n</ul>\n<p><b>When dynamic is justified:</b> COM interop (Office automation), talking to dynamic languages or scripting hosts, or quick handling of loosely-shaped data where you have no type. For JSON in normal app code, prefer typed DTOs with <code>System.Text.Json</code>, or <code>JsonNode</code>/<code>JsonElement</code> for truly unknown shapes.</p>\n<p>Follow-up: \"Is <code>var</code> bad for readability?\" — a team style choice: common convention is <code>var</code> when the type is obvious from the right side (<code>var orders = new List&lt;Order&gt;();</code>), explicit type when it is not.</p>",
        hi: "<p><b>Analogy:</b> <code>var</code> ऐसा parcel है जिस पर label post office ख़ुद भर देता है — label फिर भी है और check होता है। <code>object</code> एक सादा भूरा box है — कुछ भी आ जाता है, पर use करने से पहले खोलकर check करना पड़ता है कि अंदर क्या है (cast)। <code>dynamic</code> मतलब parcel <b>बिना किसी check के</b> ले लेना — घर पर खोलकर ही पता चलता है (runtime)।</p>\n<ul>\n<li><code>var count = 5;</code> — compiler <code>int</code> समझ लेता है। बाद में <code>count = \"x\";</code> compile error है (CS0029)। <code>int</code> लिखने जितनी ही performance और safety।</li>\n<li><code>object o = 5;</code> — boxing; <code>o + 1</code> तब तक compile नहीं होता (CS0019) जब तक cast न करो: <code>(int)o + 1</code>।</li>\n<li><code>dynamic d = 5;</code> — <code>d + 1</code>, <code>d.Length</code>, <code>d.Foo()</code> सब compile हो जाते हैं। Runtime binder (Microsoft.CSharp) runtime पर तय करता है; member न मिले तो <code>RuntimeBinderException</code> आता है।</li>\n<li><b>dynamic की कीमत</b>: runtime binding का काम (पहली call के बाद cache होता है, फिर भी normal call से धीमा), IntelliSense नहीं, compile-time safety नहीं, और errors build से हटकर production में पहुँच जाते हैं।</li>\n</ul>\n<p><b>dynamic कब ठीक है:</b> COM interop (Office automation), dynamic languages या scripting hosts से बात करना, या ढीले-ढाले shape वाला data जिसका कोई type नहीं है। Normal app code में JSON के लिए <code>System.Text.Json</code> के साथ typed DTOs लो, या सच में अनजान shape हो तो <code>JsonNode</code>/<code>JsonElement</code>।</p>\n<p>Follow-up: \"क्या <code>var</code> readability के लिए बुरा है?\" — यह team की style choice है: आम convention है कि type right side से साफ़ दिखे तो <code>var</code> (<code>var orders = new List&lt;Order&gt;();</code>), न दिखे तो explicit type।</p>",
        hg: "<p><b>Analogy:</b> <code>var</code> aisa parcel hai jis par label post office khud bhar deta hai — label phir bhi hai aur check hota hai. <code>object</code> ek saada bhoora box hai — kuch bhi aa jaata hai, par use karne se pehle kholkar check karna padta hai ki andar kya hai (cast). <code>dynamic</code> matlab parcel <b>bina kisi check ke</b> le lena — ghar par kholkar hi pata chalta hai (runtime).</p>\n<ul>\n<li><code>var count = 5;</code> — compiler <code>int</code> samajh leta hai. Baad mein <code>count = \"x\";</code> compile error hai (CS0029). <code>int</code> likhne jitni hi performance aur safety.</li>\n<li><code>object o = 5;</code> — boxing; <code>o + 1</code> tab tak compile nahi hota (CS0019) jab tak cast na karo: <code>(int)o + 1</code>.</li>\n<li><code>dynamic d = 5;</code> — <code>d + 1</code>, <code>d.Length</code>, <code>d.Foo()</code> sab compile ho jaate hain. Runtime binder (Microsoft.CSharp) runtime par tay karta hai; member na mile to <code>RuntimeBinderException</code> aata hai.</li>\n<li><b>dynamic ki keemat</b>: runtime binding ka kaam (pehli call ke baad cache hota hai, phir bhi normal call se dheema), IntelliSense nahi, compile-time safety nahi, aur errors build se hatkar production mein pahunch jaate hain.</li>\n</ul>\n<p><b>dynamic kab theek hai:</b> COM interop (Office automation), dynamic languages ya scripting hosts se baat karna, ya dheele-dhaale shape wala data jiska koi type nahi hai. Normal app code mein JSON ke liye <code>System.Text.Json</code> ke saath typed DTOs lo, ya sach mein anjaan shape ho to <code>JsonNode</code>/<code>JsonElement</code>.</p>\n<p>Follow-up: \"Kya <code>var</code> readability ke liye bura hai?\" — yeh team ki style choice hai: aam convention hai ki type right side se saaf dikhe to <code>var</code> (<code>var orders = new List&lt;Order&gt;();</code>), na dikhe to explicit type.</p>"
      },
      code: [
        {
          caption: {
            en: "var is still typed, object needs a cast, dynamic binds at runtime (and can fail at runtime)",
            hi: "var फिर भी typed है, object को cast चाहिए, dynamic runtime पर bind होता है (और runtime पर fail हो सकता है)",
            hg: "var phir bhi typed hai, object ko cast chahiye, dynamic runtime par bind hota hai (aur runtime par fail ho sakta hai)"
          },
          check: "run",
          expected: "Int32\n6\n6\n12\nRuntimeBinderException",
          src: "var count = 5;                 // var: inferred as int at compile time\n// count = \"x\";                // CS0029: count is an int\nobject boxed = count;          // object: boxing\n// var bad = boxed + 1;        // CS0019: cast first\ndynamic late = count;          // dynamic: members are bound at runtime\n\nConsole.WriteLine(count.GetType().Name);\nConsole.WriteLine((int)boxed + 1);\nConsole.WriteLine(late + 1);\n\nlate = \"now a string\";         // allowed: the type can change\nConsole.WriteLine(late.Length);\n\ntry\n{\n    late.Foo();                // compiles, fails only at runtime\n}\ncatch (Microsoft.CSharp.RuntimeBinder.RuntimeBinderException)\n{\n    Console.WriteLine(\"RuntimeBinderException\");\n}"
        }
      ]
    },
    {
      id: "generic-constraints",
      depth: "detailed",
      q: "What generic constraints are available in C#, and why would you use them?",
      answer: "Constraints such as class, struct, new(), notnull, unmanaged, a base class or an interface limit what T can be. The compiler then lets you use those capabilities inside the generic code and rejects wrong types at compile time.",
      meaning: {
        hi: "class, struct, new(), notnull, unmanaged, कोई base class या interface जैसे constraints तय करते हैं कि T क्या हो सकता है। फिर compiler generic code के अंदर वो capabilities use करने देता है और गलत types को compile time पर ही रोक देता है।",
        hg: "class, struct, new(), notnull, unmanaged, koi base class ya interface jaise constraints tay karte hain ki T kya ho sakta hai. Phir compiler generic code ke andar woh capabilities use karne deta hai aur galat types ko compile time par hi rok deta hai."
      },
      explain: {
        en: "<ul>\n<li><code>where T : class</code> — reference type (CS0452 for <code>int</code>); <code>class?</code> allows nullable reference types.</li>\n<li><code>where T : struct</code> — non-nullable value type (CS0453 for <code>string</code>).</li>\n<li><code>where T : new()</code> — public parameterless constructor, so you can write <code>new T()</code> (CS0310 otherwise).</li>\n<li><code>where T : BaseClass</code> / <code>where T : IInterface</code> — call their members on <code>T</code> (a non-matching reference type gives CS0311, a non-matching struct gives CS0315).</li>\n<li><code>notnull</code>, <code>unmanaged</code> (no references inside — for low-level/binary code), <code>where T : U</code>, <code>Enum</code>/<code>Delegate</code> base constraints (C# 7.3), and <code>allows ref struct</code> (C# 13).</li>\n<li>Combine them: <code>where T : class, IEntity, new()</code>.</li>\n</ul>\n<p>Follow-up: \"Why not just accept <code>object</code>?\" — you lose type safety and box value types. With a constraint, <code>Max&lt;T&gt;(T a, T b) where T : IComparable&lt;T&gt;</code> works for <code>int</code> without boxing.</p>",
        hi: "<ul>\n<li><code>where T : class</code> — reference type (<code>int</code> दो तो CS0452); <code>class?</code> nullable reference types भी allow करता है।</li>\n<li><code>where T : struct</code> — non-nullable value type (<code>string</code> दो तो CS0453)।</li>\n<li><code>where T : new()</code> — public parameterless constructor, ताकि <code>new T()</code> लिख सको (वरना CS0310)।</li>\n<li><code>where T : BaseClass</code> / <code>where T : IInterface</code> — <code>T</code> पर उनके members call करो (match न करने वाला reference type दो तो CS0311, struct दो तो CS0315)।</li>\n<li><code>notnull</code>, <code>unmanaged</code> (अंदर कोई reference नहीं — low-level/binary code के लिए), <code>where T : U</code>, <code>Enum</code>/<code>Delegate</code> base constraints (C# 7.3), और <code>allows ref struct</code> (C# 13)।</li>\n<li>इन्हें जोड़ भी सकते हो: <code>where T : class, IEntity, new()</code>।</li>\n</ul>\n<p>Follow-up: \"सीधे <code>object</code> क्यों नहीं ले लेते?\" — type safety चली जाती है और value types box होते हैं। Constraint के साथ <code>Max&lt;T&gt;(T a, T b) where T : IComparable&lt;T&gt;</code> <code>int</code> के लिए बिना boxing चलता है।</p>",
        hg: "<ul>\n<li><code>where T : class</code> — reference type (<code>int</code> do to CS0452); <code>class?</code> nullable reference types bhi allow karta hai.</li>\n<li><code>where T : struct</code> — non-nullable value type (<code>string</code> do to CS0453).</li>\n<li><code>where T : new()</code> — public parameterless constructor, taaki <code>new T()</code> likh sako (warna CS0310).</li>\n<li><code>where T : BaseClass</code> / <code>where T : IInterface</code> — <code>T</code> par unke members call karo (match na karne wala reference type do to CS0311, struct do to CS0315).</li>\n<li><code>notnull</code>, <code>unmanaged</code> (andar koi reference nahi — low-level/binary code ke liye), <code>where T : U</code>, <code>Enum</code>/<code>Delegate</code> base constraints (C# 7.3), aur <code>allows ref struct</code> (C# 13).</li>\n<li>Inhe jod bhi sakte ho: <code>where T : class, IEntity, new()</code>.</li>\n</ul>\n<p>Follow-up: \"Seedhe <code>object</code> kyun nahi le lete?\" — type safety chali jaati hai aur value types box hote hain. Constraint ke saath <code>Max&lt;T&gt;(T a, T b) where T : IComparable&lt;T&gt;</code> <code>int</code> ke liye bina boxing chalta hai.</p>"
      }
    },
    {
      id: "covariance-contravariance",
      depth: "detailed",
      q: "What are covariance and contravariance in generics?",
      answer: "Covariance (out T) lets you use a more specific type argument where a general one is expected, like IEnumerable&lt;string&gt; as IEnumerable&lt;object&gt;. Contravariance (in T) goes the other way, like Action&lt;object&gt; as Action&lt;string&gt;.",
      meaning: {
        hi: "Covariance (out T) से जहाँ general type चाहिए वहाँ ज़्यादा specific type argument use कर सकते हो, जैसे IEnumerable&lt;string&gt; को IEnumerable&lt;object&gt; की तरह। Contravariance (in T) उल्टी दिशा में है, जैसे Action&lt;object&gt; को Action&lt;string&gt; की तरह।",
        hg: "Covariance (out T) se jahan general type chahiye wahan zyada specific type argument use kar sakte ho, jaise IEnumerable&lt;string&gt; ko IEnumerable&lt;object&gt; ki tarah. Contravariance (in T) ulti disha mein hai, jaise Action&lt;object&gt; ko Action&lt;string&gt; ki tarah."
      },
      explain: {
        en: "<p><b>Analogy:</b> a basket that <b>only gives out</b> mangoes can be treated as a \"basket that gives out fruit\" — safe (covariance, <code>out</code>). A juicer that <b>accepts any fruit</b> can be used where \"a juicer that accepts mangoes\" is needed — safe (contravariance, <code>in</code>).</p>\n<ul>\n<li>Only on <b>generic interfaces and delegates</b> — <code>IEnumerable&lt;out T&gt;</code>, <code>IReadOnlyList&lt;out T&gt;</code>, <code>Func&lt;out TResult&gt;</code>, <code>Action&lt;in T&gt;</code>, <code>IComparer&lt;in T&gt;</code>.</li>\n<li>Only for <b>reference-type</b> arguments: <code>IEnumerable&lt;int&gt;</code> → <code>IEnumerable&lt;object&gt;</code> is not allowed (CS0266), because ints would need boxing.</li>\n<li>Classes are never variant: <code>List&lt;string&gt;</code> → <code>List&lt;object&gt;</code> is CS0029. If it were allowed, someone could <code>Add(42)</code> into a list of strings.</li>\n<li>Arrays are covariant for historical reasons: <code>object[] arr = new string[1]; arr[0] = 1;</code> compiles but throws <code>ArrayTypeMismatchException</code> at runtime.</li>\n</ul>\n<p>Follow-up: \"Why is that useful in real code?\" — a method taking <code>IEnumerable&lt;Animal&gt;</code> accepts a <code>List&lt;Dog&gt;</code> directly — one reason to accept <code>IEnumerable&lt;T&gt;</code>/<code>IReadOnlyList&lt;T&gt;</code> instead of <code>List&lt;T&gt;</code>.</p>",
        hi: "<p><b>Analogy:</b> जो टोकरी <b>सिर्फ़ आम निकालती</b> है, उसे \"फल निकालने वाली टोकरी\" मान सकते हो — safe (covariance, <code>out</code>)। जो juicer <b>कोई भी फल ले लेता</b> है, उसे वहाँ use कर सकते हो जहाँ \"आम लेने वाला juicer\" चाहिए — safe (contravariance, <code>in</code>)।</p>\n<ul>\n<li>सिर्फ़ <b>generic interfaces और delegates</b> पर — <code>IEnumerable&lt;out T&gt;</code>, <code>IReadOnlyList&lt;out T&gt;</code>, <code>Func&lt;out TResult&gt;</code>, <code>Action&lt;in T&gt;</code>, <code>IComparer&lt;in T&gt;</code>।</li>\n<li>सिर्फ़ <b>reference-type</b> arguments के लिए: <code>IEnumerable&lt;int&gt;</code> → <code>IEnumerable&lt;object&gt;</code> allowed नहीं (CS0266), क्योंकि ints को boxing चाहिए।</li>\n<li>Classes कभी variant नहीं होतीं: <code>List&lt;string&gt;</code> → <code>List&lt;object&gt;</code> CS0029 है। अगर allowed होता, तो कोई strings की list में <code>Add(42)</code> कर देता।</li>\n<li>Arrays पुराने कारणों से covariant हैं: <code>object[] arr = new string[1]; arr[0] = 1;</code> compile होता है पर runtime पर <code>ArrayTypeMismatchException</code> देता है।</li>\n</ul>\n<p>Follow-up: \"Real code में यह क्यों useful है?\" — <code>IEnumerable&lt;Animal&gt;</code> लेने वाला method सीधे <code>List&lt;Dog&gt;</code> ले लेता है — यही एक कारण है कि <code>List&lt;T&gt;</code> की जगह <code>IEnumerable&lt;T&gt;</code>/<code>IReadOnlyList&lt;T&gt;</code> accept करो।</p>",
        hg: "<p><b>Analogy:</b> jo tokri <b>sirf aam nikaalti</b> hai, use \"phal nikaalne wali tokri\" maan sakte ho — safe (covariance, <code>out</code>). Jo juicer <b>koi bhi phal le leta</b> hai, use wahan use kar sakte ho jahan \"aam lene wala juicer\" chahiye — safe (contravariance, <code>in</code>).</p>\n<ul>\n<li>Sirf <b>generic interfaces aur delegates</b> par — <code>IEnumerable&lt;out T&gt;</code>, <code>IReadOnlyList&lt;out T&gt;</code>, <code>Func&lt;out TResult&gt;</code>, <code>Action&lt;in T&gt;</code>, <code>IComparer&lt;in T&gt;</code>.</li>\n<li>Sirf <b>reference-type</b> arguments ke liye: <code>IEnumerable&lt;int&gt;</code> → <code>IEnumerable&lt;object&gt;</code> allowed nahi (CS0266), kyunki ints ko boxing chahiye.</li>\n<li>Classes kabhi variant nahi hoti: <code>List&lt;string&gt;</code> → <code>List&lt;object&gt;</code> CS0029 hai. Agar allowed hota, to koi strings ki list mein <code>Add(42)</code> kar deta.</li>\n<li>Arrays purane kaaranon se covariant hain: <code>object[] arr = new string[1]; arr[0] = 1;</code> compile hota hai par runtime par <code>ArrayTypeMismatchException</code> deta hai.</li>\n</ul>\n<p>Follow-up: \"Real code mein yeh kyun useful hai?\" — <code>IEnumerable&lt;Animal&gt;</code> lene wala method seedhe <code>List&lt;Dog&gt;</code> le leta hai — yahi ek kaaran hai ki <code>List&lt;T&gt;</code> ki jagah <code>IEnumerable&lt;T&gt;</code>/<code>IReadOnlyList&lt;T&gt;</code> accept karo.</p>"
      }
    },
    {
      id: "readonly-vs-immutable-collections",
      depth: "detailed",
      q: "IReadOnlyList vs ReadOnlyCollection vs ImmutableList vs FrozenDictionary — what is the difference?",
      answer: "A read-only interface or ReadOnlyCollection only stops the caller from changing it; the owner still can. Immutable collections never change — every 'change' returns a new one. Frozen collections are built once and tuned for very fast reads.",
      meaning: {
        hi: "Read-only interface या ReadOnlyCollection सिर्फ़ caller को बदलने से रोकते हैं; owner अब भी बदल सकता है। Immutable collections कभी नहीं बदलते — हर 'बदलाव' नया collection return करता है। Frozen collections एक बार बनते हैं और बहुत तेज़ reads के लिए tuned होते हैं।",
        hg: "Read-only interface ya ReadOnlyCollection sirf caller ko badalne se rokte hain; owner ab bhi badal sakta hai. Immutable collections kabhi nahi badalte — har 'badlaav' naya collection return karta hai. Frozen collections ek baar bante hain aur bahut tez reads ke liye tuned hote hain."
      },
      explain: {
        en: "<ul>\n<li><code>IReadOnlyList&lt;T&gt;</code> — just an interface. If you return your inner <code>List&lt;T&gt;</code> typed as this, a caller can still cast it back to <code>List&lt;T&gt;</code> and change it.</li>\n<li><code>ReadOnlyCollection&lt;T&gt;</code> (<code>list.AsReadOnly()</code>) — a wrapper/<b>view</b>: the caller cannot cast around it, but changes made to the inner list show through.</li>\n<li><code>ImmutableList&lt;T&gt;</code>, <code>ImmutableDictionary</code> (System.Collections.Immutable) — truly never change; <code>Add</code> returns a new instance that shares most structure with the old one. Great for snapshots shared between threads. <code>ImmutableArray&lt;T&gt;</code> is faster to read but copies on every change.</li>\n<li><code>FrozenDictionary</code>/<code>FrozenSet</code> (.NET 8+) — immutable and optimised for lookups; creating them costs more. Ideal for config/lookup tables built once at startup and read on every request.</li>\n</ul>\n<p><b>TL angle:</b> from a domain class, expose <code>IReadOnlyList&lt;T&gt;</code> (backed by <code>AsReadOnly()</code> if the risk matters). For <b>read-mostly</b> data shared across threads, immutable or frozen collections let readers skip locks — but writers still need coordination: build a new collection and swap the reference with <code>ImmutableInterlocked</code> or under a <code>lock</code>. For write-heavy data, concurrent collections usually fit better. It is a trade-off, not a rule.</p>",
        hi: "<ul>\n<li><code>IReadOnlyList&lt;T&gt;</code> — सिर्फ़ एक interface। अगर आप अपनी अंदर की <code>List&lt;T&gt;</code> इसी type में return करते हो, तो caller उसे वापस <code>List&lt;T&gt;</code> में cast करके बदल सकता है।</li>\n<li><code>ReadOnlyCollection&lt;T&gt;</code> (<code>list.AsReadOnly()</code>) — एक wrapper/<b>view</b>: caller इसे cast करके नहीं बदल सकता, पर अंदर की list में हुए बदलाव इसमें दिखते हैं।</li>\n<li><code>ImmutableList&lt;T&gt;</code>, <code>ImmutableDictionary</code> (System.Collections.Immutable) — सच में कभी नहीं बदलते; <code>Add</code> नया instance return करता है जो पुराने के साथ ज़्यादातर structure share करता है। Threads के बीच share होने वाले snapshots के लिए बढ़िया। <code>ImmutableArray&lt;T&gt;</code> पढ़ने में तेज़ है पर हर बदलाव पर copy करता है।</li>\n<li><code>FrozenDictionary</code>/<code>FrozenSet</code> (.NET 8+) — immutable और lookups के लिए optimised; बनाने में ज़्यादा खर्च। Startup पर एक बार बनने वाली और हर request में पढ़ी जाने वाली config/lookup tables के लिए बढ़िया।</li>\n</ul>\n<p><b>TL angle:</b> domain class से <code>IReadOnlyList&lt;T&gt;</code> expose करो (risk ज़रूरी हो तो <code>AsReadOnly()</code> के साथ)। Threads के बीच share होने वाला data अगर <b>ज़्यादातर पढ़ा</b> जाता है, तो immutable या frozen collections से readers को lock नहीं चाहिए — पर writers को फिर भी coordination चाहिए: नया collection बनाओ और reference को <code>ImmutableInterlocked</code> से या <code>lock</code> के अंदर swap करो। जहाँ writes ज़्यादा हों, वहाँ concurrent collections अक्सर बेहतर हैं। यह trade-off है, fixed rule नहीं।</p>",
        hg: "<ul>\n<li><code>IReadOnlyList&lt;T&gt;</code> — sirf ek interface. Agar aap apni andar ki <code>List&lt;T&gt;</code> isi type mein return karte ho, to caller use wapas <code>List&lt;T&gt;</code> mein cast karke badal sakta hai.</li>\n<li><code>ReadOnlyCollection&lt;T&gt;</code> (<code>list.AsReadOnly()</code>) — ek wrapper/<b>view</b>: caller ise cast karke nahi badal sakta, par andar ki list mein hue badlaav ismein dikhte hain.</li>\n<li><code>ImmutableList&lt;T&gt;</code>, <code>ImmutableDictionary</code> (System.Collections.Immutable) — sach mein kabhi nahi badalte; <code>Add</code> naya instance return karta hai jo purane ke saath zyaadatar structure share karta hai. Threads ke beech share hone wale snapshots ke liye badhiya. <code>ImmutableArray&lt;T&gt;</code> padhne mein tez hai par har badlaav par copy karta hai.</li>\n<li><code>FrozenDictionary</code>/<code>FrozenSet</code> (.NET 8+) — immutable aur lookups ke liye optimised; banane mein zyada kharch. Startup par ek baar banne wali aur har request mein padhi jaane wali config/lookup tables ke liye badhiya.</li>\n</ul>\n<p><b>TL angle:</b> domain class se <code>IReadOnlyList&lt;T&gt;</code> expose karo (risk zaroori ho to <code>AsReadOnly()</code> ke saath). Threads ke beech share hone wala data agar <b>zyaadatar padha</b> jaata hai, to immutable ya frozen collections se readers ko lock nahi chahiye — par writers ko phir bhi coordination chahiye: naya collection banao aur reference ko <code>ImmutableInterlocked</code> se ya <code>lock</code> ke andar swap karo. Jahan writes zyada hon, wahan concurrent collections aksar behtar hain. Yeh trade-off hai, fixed rule nahi.</p>"
      }
    },
    {
      id: "dictionary-internals",
      depth: "detailed",
      q: "How does Dictionary&lt;TKey, TValue&gt; work internally? What is its lookup complexity?",
      answer: "It is a hash table: the key's GetHashCode picks a bucket and Equals finds the exact entry, so lookups are O(1) on average. Keys need a stable hash code and an Equals that agrees with it.",
      meaning: {
        hi: "यह hash table है: key का GetHashCode bucket चुनता है और Equals सही entry ढूँढता है, इसलिए lookups average O(1) हैं। Keys का hash code stable होना चाहिए और Equals उसके साथ consistent होना चाहिए।",
        hg: "Yeh hash table hai: key ka GetHashCode bucket chunta hai aur Equals sahi entry dhoondhta hai, isliye lookups average O(1) hain. Keys ka hash code stable hona chahiye aur Equals uske saath consistent hona chahiye."
      },
      explain: {
        en: "<p><b>Analogy:</b> a post office sorting rack. The PIN code (hash code) tells which pigeonhole (bucket) to look in; inside the pigeonhole you read the full address (Equals) to find the exact letter.</p>\n<ul>\n<li>Internally: an array of buckets plus an array of entries; entries that land in the same bucket (a <b>collision</b>) are chained together.</li>\n<li>Average O(1) for add/lookup/remove; worst case O(n) if many keys collide (a bad <code>GetHashCode</code>, e.g. one that returns a constant).</li>\n<li>When full, it grows (roughly doubles) and re-buckets every entry — pass a <b>capacity</b> to the constructor when you know the size.</li>\n<li><b>Rules for keys</b>: if <code>a.Equals(b)</code> then their hash codes must be equal; do not change a key's fields after adding it (its hash changes and the entry is \"lost\"). Records and strings are good keys.</li>\n<li>Not thread-safe for writes; do not depend on its enumeration order.</li>\n</ul>\n<p>Follow-up: \"Two different keys with the same hash code?\" — both are stored; <code>Equals</code> tells them apart. Correct, just slower if it happens a lot.</p>\n<p>Follow-up: \"Dictionary vs <code>SortedDictionary</code>?\" — hash table O(1) average and no order vs balanced tree O(log n) kept sorted by key.</p>",
        hi: "<p><b>Analogy:</b> post office का sorting rack। PIN code (hash code) बताता है कि किस खाने (bucket) में देखना है; खाने के अंदर पूरा address (Equals) पढ़कर सही चिट्ठी ढूँढते हो।</p>\n<ul>\n<li>अंदर: buckets का एक array और entries का एक array; जो entries same bucket में आती हैं (<b>collision</b>) वो आपस में chain हो जाती हैं।</li>\n<li>Add/lookup/remove average O(1); worst case O(n) अगर बहुत keys collide करें (ख़राब <code>GetHashCode</code>, जैसे हमेशा एक constant return करना)।</li>\n<li>भर जाने पर यह बढ़ता है (लगभग double) और हर entry को फिर से bucket में डालता है — size पता हो तो constructor में <b>capacity</b> दे दो।</li>\n<li><b>Keys के rules</b>: अगर <code>a.Equals(b)</code> है तो उनके hash codes बराबर होने चाहिए; add करने के बाद key के fields मत बदलो (उसका hash बदल जाता है और entry \"खो\" जाती है)। Records और strings अच्छी keys हैं।</li>\n<li>Writes के लिए thread-safe नहीं; इसके enumeration order पर depend मत करो।</li>\n</ul>\n<p>Follow-up: \"दो अलग keys का same hash code हो तो?\" — दोनों store होती हैं; <code>Equals</code> उन्हें अलग पहचानता है। सही चलता है, बस ऐसा बहुत हो तो धीमा।</p>\n<p>Follow-up: \"Dictionary बनाम <code>SortedDictionary</code>?\" — hash table average O(1) और कोई order नहीं, बनाम balanced tree O(log n) जो key से sorted रहता है।</p>",
        hg: "<p><b>Analogy:</b> post office ka sorting rack. PIN code (hash code) batata hai ki kis khaane (bucket) mein dekhna hai; khaane ke andar poora address (Equals) padhkar sahi chitthi dhoondhte ho.</p>\n<ul>\n<li>Andar: buckets ka ek array aur entries ka ek array; jo entries same bucket mein aati hain (<b>collision</b>) woh aapas mein chain ho jaati hain.</li>\n<li>Add/lookup/remove average O(1); worst case O(n) agar bahut keys collide karein (kharaab <code>GetHashCode</code>, jaise hamesha ek constant return karna).</li>\n<li>Bhar jaane par yeh badhta hai (lagbhag double) aur har entry ko phir se bucket mein daalta hai — size pata ho to constructor mein <b>capacity</b> de do.</li>\n<li><b>Keys ke rules</b>: agar <code>a.Equals(b)</code> hai to unke hash codes barabar hone chahiye; add karne ke baad key ke fields mat badlo (uska hash badal jaata hai aur entry \"kho\" jaati hai). Records aur strings achhi keys hain.</li>\n<li>Writes ke liye thread-safe nahi; iske enumeration order par depend mat karo.</li>\n</ul>\n<p>Follow-up: \"Do alag keys ka same hash code ho to?\" — dono store hoti hain; <code>Equals</code> unhe alag pehchanta hai. Sahi chalta hai, bas aisa bahut ho to dheema.</p>\n<p>Follow-up: \"Dictionary vs <code>SortedDictionary</code>?\" — hash table average O(1) aur koi order nahi, vs balanced tree O(log n) jo key se sorted rehta hai.</p>"
      }
    },
    {
      id: "thread-safe-collections",
      depth: "detailed",
      q: "Which collections would you use when multiple threads read and write the same data?",
      answer: "Concurrent collections such as ConcurrentDictionary and ConcurrentQueue, Channel&lt;T&gt; for producer–consumer, or immutable collections for shared snapshots. Plain List and Dictionary are not safe for concurrent writes.",
      meaning: {
        hi: "ConcurrentDictionary और ConcurrentQueue जैसे concurrent collections, producer–consumer के लिए Channel&lt;T&gt;, या shared snapshots के लिए immutable collections। Normal List और Dictionary concurrent writes के लिए safe नहीं हैं।",
        hg: "ConcurrentDictionary aur ConcurrentQueue jaise concurrent collections, producer–consumer ke liye Channel&lt;T&gt;, ya shared snapshots ke liye immutable collections. Normal List aur Dictionary concurrent writes ke liye safe nahi hain."
      },
      explain: {
        en: "<ul>\n<li><code>ConcurrentDictionary</code>: use its atomic methods — <code>GetOrAdd</code>, <code>AddOrUpdate</code>, <code>TryRemove</code>. Avoid \"check then act\" (<code>if (!ContainsKey) Add</code>) — another thread can act in between.</li>\n<li>Gotcha: the value factory in <code>GetOrAdd</code>/<code>AddOrUpdate</code> may run <b>more than once</b> under contention (only one result is stored). For expensive or side-effect work, store <code>Lazy&lt;T&gt;</code> values.</li>\n<li><code>ConcurrentQueue</code>/<code>ConcurrentBag</code>; <code>Channel&lt;T&gt;</code> (System.Threading.Channels) for async producer–consumer pipelines.</li>\n<li>For a simple shared number, <code>Interlocked.Increment</code>; for a small critical section, <code>lock</code> — in .NET 9+ lock on a dedicated <code>System.Threading.Lock</code> object (C# 13 knows this type).</li>\n</ul>\n<p><b>TL angle:</b> in ASP.NET Core, any <b>singleton</b> service that holds a <code>List</code>/<code>Dictionary</code> is shared by all requests — a classic production bug. Code reviews should check singletons for shared mutable state.</p>",
        hi: "<ul>\n<li><code>ConcurrentDictionary</code>: इसके atomic methods use करो — <code>GetOrAdd</code>, <code>AddOrUpdate</code>, <code>TryRemove</code>। \"पहले check फिर काम\" (<code>if (!ContainsKey) Add</code>) से बचो — बीच में कोई दूसरा thread काम कर सकता है।</li>\n<li>Gotcha: contention होने पर <code>GetOrAdd</code>/<code>AddOrUpdate</code> का value factory <b>एक से ज़्यादा बार</b> चल सकता है (store सिर्फ़ एक result होता है)। महँगे या side-effect वाले काम के लिए <code>Lazy&lt;T&gt;</code> values रखो।</li>\n<li><code>ConcurrentQueue</code>/<code>ConcurrentBag</code>; async producer–consumer pipelines के लिए <code>Channel&lt;T&gt;</code> (System.Threading.Channels)।</li>\n<li>एक simple shared number के लिए <code>Interlocked.Increment</code>; छोटे critical section के लिए <code>lock</code> — .NET 9+ में एक dedicated <code>System.Threading.Lock</code> object पर lock करो (C# 13 इस type को पहचानता है)।</li>\n</ul>\n<p><b>TL angle:</b> ASP.NET Core में जो भी <b>singleton</b> service <code>List</code>/<code>Dictionary</code> रखती है, वो सारी requests में share होती है — यह production का classic bug है। Code reviews में singletons के अंदर shared mutable state check करो।</p>",
        hg: "<ul>\n<li><code>ConcurrentDictionary</code>: iske atomic methods use karo — <code>GetOrAdd</code>, <code>AddOrUpdate</code>, <code>TryRemove</code>. \"Pehle check phir kaam\" (<code>if (!ContainsKey) Add</code>) se bacho — beech mein koi doosra thread kaam kar sakta hai.</li>\n<li>Gotcha: contention hone par <code>GetOrAdd</code>/<code>AddOrUpdate</code> ka value factory <b>ek se zyada baar</b> chal sakta hai (store sirf ek result hota hai). Mehenge ya side-effect wale kaam ke liye <code>Lazy&lt;T&gt;</code> values rakho.</li>\n<li><code>ConcurrentQueue</code>/<code>ConcurrentBag</code>; async producer–consumer pipelines ke liye <code>Channel&lt;T&gt;</code> (System.Threading.Channels).</li>\n<li>Ek simple shared number ke liye <code>Interlocked.Increment</code>; chhote critical section ke liye <code>lock</code> — .NET 9+ mein ek dedicated <code>System.Threading.Lock</code> object par lock karo (C# 13 is type ko pehchanta hai).</li>\n</ul>\n<p><b>TL angle:</b> ASP.NET Core mein jo bhi <b>singleton</b> service <code>List</code>/<code>Dictionary</code> rakhti hai, woh saari requests mein share hoti hai — yeh production ka classic bug hai. Code reviews mein singletons ke andar shared mutable state check karo.</p>"
      },
      code: [
        {
          caption: {
            en: "ConcurrentDictionary.AddOrUpdate, Interlocked, and the C# 13 Lock type — the totals are always correct",
            hi: "ConcurrentDictionary.AddOrUpdate, Interlocked, और C# 13 का Lock type — totals हमेशा सही आते हैं",
            hg: "ConcurrentDictionary.AddOrUpdate, Interlocked, aur C# 13 ka Lock type — totals hamesha sahi aate hain"
          },
          check: "run",
          expected: "home=500, cart=500\n1000\n1000 orders, total 10000",
          src: "using System.Collections.Concurrent;\n\nvar hits = new ConcurrentDictionary<string, int>();\nParallel.For(0, 1000, i =>\n{\n    string page = i % 2 == 0 ? \"home\" : \"cart\";\n    hits.AddOrUpdate(page, 1, (_, old) => old + 1);   // atomic per key\n});\nConsole.WriteLine($\"home={hits[\"home\"]}, cart={hits[\"cart\"]}\");\n\nint simpleCount = 0;\nParallel.For(0, 1000, _ => Interlocked.Increment(ref simpleCount));\nConsole.WriteLine(simpleCount);\n\nvar stats = new OrderStats();\nParallel.For(0, 1000, _ => stats.Record(10m));\nConsole.WriteLine($\"{stats.Count} orders, total {stats.Total}\");\n\npublic class OrderStats\n{\n    private readonly Lock _gate = new();   // .NET 9+ / C# 13: a dedicated lock object\n    private int _count;\n    private decimal _total;\n\n    public void Record(decimal amount)\n    {\n        lock (_gate)                       // two fields must change together\n        {\n            _count++;\n            _total += amount;\n        }\n    }\n\n    public int Count { get { lock (_gate) { return _count; } } }\n    public decimal Total { get { lock (_gate) { return _total; } } }\n}"
        }
      ]
    },
    {
      id: "func-action-predicate",
      depth: "detailed",
      q: "What is the difference between Func, Action and Predicate?",
      answer: "All three are built-in generic delegates. Func returns a value (its last type argument is the result), Action returns void, and Predicate&lt;T&gt; returns bool. Newer APIs like LINQ use Func&lt;T, bool&gt; instead of Predicate&lt;T&gt;.",
      meaning: {
        hi: "तीनों built-in generic delegates हैं। Func value return करता है (आख़िरी type argument result है), Action void return करता है, और Predicate&lt;T&gt; bool return करता है। LINQ जैसे नए APIs Predicate&lt;T&gt; की जगह Func&lt;T, bool&gt; use करते हैं।",
        hg: "Teeno built-in generic delegates hain. Func value return karta hai (aakhri type argument result hai), Action void return karta hai, aur Predicate&lt;T&gt; bool return karta hai. LINQ jaise naye APIs Predicate&lt;T&gt; ki jagah Func&lt;T, bool&gt; use karte hain."
      },
      explain: {
        en: "<ul>\n<li><code>Func&lt;int, int, int&gt; add = (a, b) =&gt; a + b;</code> — two inputs, one <code>int</code> result. Up to 16 inputs.</li>\n<li><code>Action&lt;string&gt; log = msg =&gt; Console.WriteLine(msg);</code> — no result.</li>\n<li><code>Predicate&lt;int&gt; isEven = n =&gt; n % 2 == 0;</code> — used by older APIs: <code>List&lt;T&gt;.FindAll</code>, <code>RemoveAll</code>, <code>Array.Find</code>.</li>\n<li><code>Predicate&lt;T&gt;</code> and <code>Func&lt;T,bool&gt;</code> have the same shape but are <b>different types</b> — you cannot assign one variable to the other directly (a lambda works for both).</li>\n<li>Before generic delegates you declared your own: <code>delegate decimal PriceRule(decimal price);</code>. A named delegate is still useful when the name documents intent or you need <code>ref</code>/<code>out</code> parameters.</li>\n</ul>\n<p>Follow-up: \"What does <code>Expression&lt;Func&lt;Order,bool&gt;&gt;</code> mean?\" — the lambda is kept as a data tree, not compiled code, so a provider like EF Core can translate it to SQL (Days 4–6).</p>",
        hi: "<ul>\n<li><code>Func&lt;int, int, int&gt; add = (a, b) =&gt; a + b;</code> — दो inputs, एक <code>int</code> result। 16 inputs तक।</li>\n<li><code>Action&lt;string&gt; log = msg =&gt; Console.WriteLine(msg);</code> — कोई result नहीं।</li>\n<li><code>Predicate&lt;int&gt; isEven = n =&gt; n % 2 == 0;</code> — पुराने APIs में use होता है: <code>List&lt;T&gt;.FindAll</code>, <code>RemoveAll</code>, <code>Array.Find</code>।</li>\n<li><code>Predicate&lt;T&gt;</code> और <code>Func&lt;T,bool&gt;</code> की shape same है पर ये <b>अलग types</b> हैं — एक का variable सीधे दूसरे में assign नहीं कर सकते (lambda दोनों में चल जाता है)।</li>\n<li>Generic delegates से पहले आप अपना delegate declare करते थे: <code>delegate decimal PriceRule(decimal price);</code>। Named delegate अब भी useful है जब नाम से intent साफ़ होता हो या <code>ref</code>/<code>out</code> parameters चाहिए हों।</li>\n</ul>\n<p>Follow-up: \"<code>Expression&lt;Func&lt;Order,bool&gt;&gt;</code> का क्या मतलब है?\" — lambda compiled code की जगह data tree के रूप में रखा जाता है, ताकि EF Core जैसा provider उसे SQL में बदल सके (Days 4–6)।</p>",
        hg: "<ul>\n<li><code>Func&lt;int, int, int&gt; add = (a, b) =&gt; a + b;</code> — do inputs, ek <code>int</code> result. 16 inputs tak.</li>\n<li><code>Action&lt;string&gt; log = msg =&gt; Console.WriteLine(msg);</code> — koi result nahi.</li>\n<li><code>Predicate&lt;int&gt; isEven = n =&gt; n % 2 == 0;</code> — purane APIs mein use hota hai: <code>List&lt;T&gt;.FindAll</code>, <code>RemoveAll</code>, <code>Array.Find</code>.</li>\n<li><code>Predicate&lt;T&gt;</code> aur <code>Func&lt;T,bool&gt;</code> ki shape same hai par yeh <b>alag types</b> hain — ek ka variable seedhe doosre mein assign nahi kar sakte (lambda dono mein chal jaata hai).</li>\n<li>Generic delegates se pehle aap apna delegate declare karte the: <code>delegate decimal PriceRule(decimal price);</code>. Named delegate ab bhi useful hai jab naam se intent saaf hota ho ya <code>ref</code>/<code>out</code> parameters chahiye hon.</li>\n</ul>\n<p>Follow-up: \"<code>Expression&lt;Func&lt;Order,bool&gt;&gt;</code> ka kya matlab hai?\" — lambda compiled code ki jagah data tree ke roop mein rakha jaata hai, taaki EF Core jaisa provider use SQL mein badal sake (Days 4–6).</p>"
      }
    },
    {
      id: "closure-loop-capture",
      depth: "detailed",
      q: "What is a closure? Explain the classic loop-variable capture problem.",
      answer: "A closure is a lambda that captures variables themselves, not their values. A for loop has one shared variable, so all lambdas see the final value; foreach creates a fresh one per iteration (C# 5+).",
      meaning: {
        hi: "Closure वो lambda है जो बाहर के variables capture करता है — variables ख़ुद, उनकी values नहीं। for loop में सारे lambdas एक ही loop variable share करते हैं, इसलिए सबको आख़िरी value दिखती है; C# 5 से foreach में हर iteration का नया variable होता है।",
        hg: "Closure woh lambda hai jo bahar ke variables capture karta hai — variables khud, unki values nahi. for loop mein saare lambdas ek hi loop variable share karte hain, isliye sabko aakhri value dikhti hai; C# 5 se foreach mein har iteration ka naya variable hota hai."
      },
      explain: {
        en: "<ul>\n<li>The compiler moves captured locals into a hidden class (a \"display class\") on the heap; the lambda and the method both use that same field.</li>\n<li><code>for (int i = 0; i &lt; 3; i++) actions.Add(() =&gt; Console.Write(i));</code> → prints <b>333</b>: one <code>i</code>, and it is 3 when the lambdas finally run.</li>\n<li>Fix: copy into a local inside the loop — <code>int copy = i; actions.Add(() =&gt; Console.Write(copy));</code> → <b>012</b>. Or use <code>foreach</code>, which since C# 5 creates a new variable per iteration.</li>\n<li>Same trap with tasks/timers started in a loop, and with captured variables changed later.</li>\n<li>Cost: capturing allocates the hidden object. A <code>static</code> lambda (C# 9) forbids capture (CS8820) — useful on hot paths.</li>\n</ul>\n<p><b>TL angle:</b> in code review, watch for lambdas that capture a loop counter, a <code>DbContext</code>, or a scoped service and run later on another thread — the captured object may be changed or disposed by then.</p>",
        hi: "<ul>\n<li>Compiler capture किए गए locals को heap पर एक छुपी class (\"display class\") में ले जाता है; lambda और method दोनों उसी field को use करते हैं।</li>\n<li><code>for (int i = 0; i &lt; 3; i++) actions.Add(() =&gt; Console.Write(i));</code> → <b>333</b> print करता है: <code>i</code> एक ही है, और जब lambdas आख़िर में चलते हैं तब वो 3 है।</li>\n<li>Fix: loop के अंदर local में copy करो — <code>int copy = i; actions.Add(() =&gt; Console.Write(copy));</code> → <b>012</b>। या <code>foreach</code> use करो, जो C# 5 से हर iteration में नया variable बनाता है।</li>\n<li>Loop में शुरू किए tasks/timers में भी यही trap है, और उन captured variables में भी जो बाद में बदलते हैं।</li>\n<li>Cost: capture करने से छुपा object allocate होता है। <code>static</code> lambda (C# 9) capture नहीं करने देता (CS8820) — hot paths पर useful।</li>\n</ul>\n<p><b>TL angle:</b> code review में ऐसे lambdas देखो जो loop counter, <code>DbContext</code> या scoped service capture करते हैं और बाद में किसी दूसरे thread पर चलते हैं — तब तक captured object बदल या dispose हो चुका हो सकता है।</p>",
        hg: "<ul>\n<li>Compiler capture kiye gaye locals ko heap par ek chhupi class (\"display class\") mein le jaata hai; lambda aur method dono usi field ko use karte hain.</li>\n<li><code>for (int i = 0; i &lt; 3; i++) actions.Add(() =&gt; Console.Write(i));</code> → <b>333</b> print karta hai: <code>i</code> ek hi hai, aur jab lambdas aakhir mein chalte hain tab woh 3 hai.</li>\n<li>Fix: loop ke andar local mein copy karo — <code>int copy = i; actions.Add(() =&gt; Console.Write(copy));</code> → <b>012</b>. Ya <code>foreach</code> use karo, jo C# 5 se har iteration mein naya variable banata hai.</li>\n<li>Loop mein shuru kiye tasks/timers mein bhi yahi trap hai, aur un captured variables mein bhi jo baad mein badalte hain.</li>\n<li>Cost: capture karne se chhupa object allocate hota hai. <code>static</code> lambda (C# 9) capture nahi karne deta (CS8820) — hot paths par useful.</li>\n</ul>\n<p><b>TL angle:</b> code review mein aise lambdas dekho jo loop counter, <code>DbContext</code> ya scoped service capture karte hain aur baad mein kisi doosre thread par chalte hain — tab tak captured object badal ya dispose ho chuka ho sakta hai.</p>"
      }
    },
    {
      id: "event-memory-leak",
      depth: "detailed",
      q: "How can events cause memory leaks, and how do you prevent them?",
      answer: "An event holds strong references to its subscribers. If the publisher lives longer — a singleton or a static event — subscribers cannot be garbage-collected until they unsubscribe. So unsubscribe, typically in Dispose.",
      meaning: {
        hi: "Event अपने subscribers के strong references रखता है। अगर publisher ज़्यादा देर तक रहता है — singleton या static event — तो subscribers unsubscribe किए बिना garbage-collect नहीं हो सकते। इसलिए unsubscribe करो, आम तौर पर Dispose में।",
        hg: "Event apne subscribers ke strong references rakhta hai. Agar publisher zyada der tak rehta hai — singleton ya static event — to subscribers unsubscribe kiye bina garbage-collect nahi ho sakte. Isliye unsubscribe karo, aam taur par Dispose mein."
      },
      explain: {
        en: "<ul>\n<li><code>publisher.Changed += subscriber.OnChanged;</code> stores a delegate that points to <code>subscriber</code>. As long as <code>publisher</code> is alive, <code>subscriber</code> is reachable — the GC cannot collect it.</li>\n<li>Short-lived publisher (both die together) → no problem. Long-lived publisher (singleton service, static event, app-wide cache) + short-lived subscribers (pages, view models, per-request objects) → they pile up.</li>\n<li><b>Fixes</b>: unsubscribe with <code>-=</code> (keep the handler in a field — an inline lambda cannot be removed later), implement <code>IDisposable</code> and unsubscribe in <code>Dispose</code>, avoid static events, or use a weak-event pattern (e.g. WPF's <code>WeakEventManager</code>) in UI apps.</li>\n<li>Symptom: memory grows steadily; a memory dump shows many old subscriber objects kept alive by an event's invocation list.</li>\n</ul>\n<p><b>TL angle (ASP.NET Core):</b> a scoped or transient service subscribing to a <b>singleton's</b> event is both a leak and a lifetime bug — the singleton keeps request objects alive after the request ends.</p>",
        hi: "<ul>\n<li><code>publisher.Changed += subscriber.OnChanged;</code> एक delegate store करता है जो <code>subscriber</code> पर point करता है। जब तक <code>publisher</code> ज़िंदा है, <code>subscriber</code> reachable है — GC उसे collect नहीं कर सकता।</li>\n<li>Publisher कम समय वाला हो (दोनों साथ ख़त्म) → कोई problem नहीं। Publisher लंबे समय वाला (singleton service, static event, app-wide cache) + subscribers कम समय वाले (pages, view models, per-request objects) → ये जमा होते जाते हैं।</li>\n<li><b>Fixes</b>: <code>-=</code> से unsubscribe करो (handler को field में रखो — inline lambda बाद में हटाया नहीं जा सकता), <code>IDisposable</code> implement करके <code>Dispose</code> में unsubscribe करो, static events से बचो, या UI apps में weak-event pattern use करो (जैसे WPF का <code>WeakEventManager</code>)।</li>\n<li>लक्षण: memory लगातार बढ़ती है; memory dump में दिखता है कि event की invocation list ने बहुत सारे पुराने subscriber objects ज़िंदा रखे हैं।</li>\n</ul>\n<p><b>TL angle (ASP.NET Core):</b> scoped या transient service का किसी <b>singleton</b> के event को subscribe करना leak भी है और lifetime bug भी — singleton request ख़त्म होने के बाद भी request objects को ज़िंदा रखता है।</p>",
        hg: "<ul>\n<li><code>publisher.Changed += subscriber.OnChanged;</code> ek delegate store karta hai jo <code>subscriber</code> par point karta hai. Jab tak <code>publisher</code> zinda hai, <code>subscriber</code> reachable hai — GC use collect nahi kar sakta.</li>\n<li>Publisher kam samay wala ho (dono saath khatam) → koi problem nahi. Publisher lambe samay wala (singleton service, static event, app-wide cache) + subscribers kam samay wale (pages, view models, per-request objects) → yeh jama hote jaate hain.</li>\n<li><b>Fixes</b>: <code>-=</code> se unsubscribe karo (handler ko field mein rakho — inline lambda baad mein hataya nahi ja sakta), <code>IDisposable</code> implement karke <code>Dispose</code> mein unsubscribe karo, static events se bacho, ya UI apps mein weak-event pattern use karo (jaise WPF ka <code>WeakEventManager</code>).</li>\n<li>Lakshan: memory lagaataar badhti hai; memory dump mein dikhta hai ki event ki invocation list ne bahut saare purane subscriber objects zinda rakhe hain.</li>\n</ul>\n<p><b>TL angle (ASP.NET Core):</b> scoped ya transient service ka kisi <b>singleton</b> ke event ko subscribe karna leak bhi hai aur lifetime bug bhi — singleton request khatam hone ke baad bhi request objects ko zinda rakhta hai.</p>"
      }
    },
    {
      id: "collection-interfaces",
      depth: "detailed",
      q: "Which collection type should a method accept and return — IEnumerable, ICollection, IList or List?",
      answer: "Accept the most general type you actually need, often IEnumerable&lt;T&gt; or IReadOnlyCollection&lt;T&gt;. Return a read-only but useful type such as IReadOnlyList&lt;T&gt;, so callers get Count and indexing without being able to change your data.",
      meaning: {
        hi: "Parameter में सबसे general type लो जो सच में चाहिए, अक्सर IEnumerable&lt;T&gt; या IReadOnlyCollection&lt;T&gt;। Return में IReadOnlyList&lt;T&gt; जैसा read-only पर useful type दो, ताकि callers को Count और indexing मिले पर वो आपका data न बदल सकें।",
        hg: "Parameter mein sabse general type lo jo sach mein chahiye, aksar IEnumerable&lt;T&gt; ya IReadOnlyCollection&lt;T&gt;. Return mein IReadOnlyList&lt;T&gt; jaisa read-only par useful type do, taaki callers ko Count aur indexing mile par woh aapka data na badal sakein."
      },
      explain: {
        en: "<ul>\n<li><code>IEnumerable&lt;T&gt;</code> — only \"loop over it\". May be <b>lazy</b> (a LINQ query, a DB query): enumerating twice can run the work twice (Day 4). No <code>Count</code> without walking it.</li>\n<li><code>IReadOnlyCollection&lt;T&gt;</code> — adds <code>Count</code>. <code>IReadOnlyList&lt;T&gt;</code> — adds the indexer.</li>\n<li><code>ICollection&lt;T&gt;</code>/<code>IList&lt;T&gt;</code> — add mutation (<code>Add</code>, <code>Remove</code>); expose only if callers really should change it.</li>\n<li><code>List&lt;T&gt;</code> — a concrete class; returning it from a public API ties you to it and invites outside changes.</li>\n</ul>\n<p><b>Trade-off:</b> accepting <code>IEnumerable&lt;T&gt;</code> is flexible, but if your method enumerates it twice, either accept <code>IReadOnlyCollection&lt;T&gt;</code> or materialise once with <code>ToList()</code>.</p>\n<p><b>TL angle:</b> this is a team convention worth writing down — e.g. \"services return <code>IReadOnlyList&lt;T&gt;</code> of DTOs; never return <code>IQueryable</code> from a repository unless we decide that deliberately\".</p>",
        hi: "<ul>\n<li><code>IEnumerable&lt;T&gt;</code> — सिर्फ़ \"इस पर loop चलाओ\"। <b>Lazy</b> हो सकता है (LINQ query, DB query): दो बार enumerate करने पर काम दो बार चल सकता है (Day 4)। पूरा घूमे बिना <code>Count</code> नहीं।</li>\n<li><code>IReadOnlyCollection&lt;T&gt;</code> — <code>Count</code> जोड़ता है। <code>IReadOnlyList&lt;T&gt;</code> — indexer भी जोड़ता है।</li>\n<li><code>ICollection&lt;T&gt;</code>/<code>IList&lt;T&gt;</code> — बदलाव (<code>Add</code>, <code>Remove</code>) जोड़ते हैं; सिर्फ़ तब expose करो जब callers को सच में बदलना चाहिए।</li>\n<li><code>List&lt;T&gt;</code> — concrete class; public API से इसे return करने पर आप इससे बँध जाते हो और बाहर से बदलाव को न्योता देते हो।</li>\n</ul>\n<p><b>Trade-off:</b> <code>IEnumerable&lt;T&gt;</code> लेना flexible है, पर अगर आपका method उसे दो बार enumerate करता है, तो या तो <code>IReadOnlyCollection&lt;T&gt;</code> लो या <code>ToList()</code> से एक बार materialise कर लो।</p>\n<p><b>TL angle:</b> यह team convention लिखकर रखने लायक है — जैसे \"services DTOs की <code>IReadOnlyList&lt;T&gt;</code> return करती हैं; repository से <code>IQueryable</code> तभी return करेंगे जब सोच-समझकर तय करें\"।</p>",
        hg: "<ul>\n<li><code>IEnumerable&lt;T&gt;</code> — sirf \"is par loop chalao\". <b>Lazy</b> ho sakta hai (LINQ query, DB query): do baar enumerate karne par kaam do baar chal sakta hai (Day 4). Poora ghoome bina <code>Count</code> nahi.</li>\n<li><code>IReadOnlyCollection&lt;T&gt;</code> — <code>Count</code> jodta hai. <code>IReadOnlyList&lt;T&gt;</code> — indexer bhi jodta hai.</li>\n<li><code>ICollection&lt;T&gt;</code>/<code>IList&lt;T&gt;</code> — badlaav (<code>Add</code>, <code>Remove</code>) jodte hain; sirf tab expose karo jab callers ko sach mein badalna chahiye.</li>\n<li><code>List&lt;T&gt;</code> — concrete class; public API se ise return karne par aap isse bandh jaate ho aur bahar se badlaav ko nyota dete ho.</li>\n</ul>\n<p><b>Trade-off:</b> <code>IEnumerable&lt;T&gt;</code> lena flexible hai, par agar aapka method use do baar enumerate karta hai, to ya to <code>IReadOnlyCollection&lt;T&gt;</code> lo ya <code>ToList()</code> se ek baar materialise kar lo.</p>\n<p><b>TL angle:</b> yeh team convention likhkar rakhne laayak hai — jaise \"services DTOs ki <code>IReadOnlyList&lt;T&gt;</code> return karti hain; repository se <code>IQueryable</code> tabhi return karenge jab soch-samajhkar tay karein\".</p>"
      }
    }
  ],
  puzzles: [
    {
      id: "struct-vs-class-copy",
      src: "var s1 = new Point { X = 1 };\nvar s2 = s1;\ns2.X = 2;\n\nvar c1 = new Box { X = 1 };\nvar c2 = c1;\nc2.X = 2;\n\nPoint[] points = [new Point { X = 1 }];\nvar p = points[0];\np.X = 5;\nConsole.WriteLine($\"{s1.X} {c1.X} {points[0].X}\");\n\npoints[0].X = 7;\nConsole.WriteLine(points[0].X);\n\nstruct Point { public int X; }   // mutable only to show copying\nclass Box { public int X; }",
      answer: "1 2 1\n7",
      explain: {
        en: "<ul>\n<li><code>s2 = s1</code> copies the struct → changing <code>s2</code> leaves <code>s1.X</code> = <b>1</b>.</li>\n<li><code>c2 = c1</code> copies the reference → one object → <code>c1.X</code> = <b>2</b>.</li>\n<li><code>var p = points[0]</code> copies the struct out of the array → changing <code>p</code> leaves the array element at <b>1</b>.</li>\n<li><code>points[0].X = 7</code> changes the element <b>in place</b> (an array element is a variable) → <b>7</b>. With a <code>List&lt;Point&gt;</code> the same line is a compile error (CS1612), because the list indexer returns a copy.</li>\n</ul>",
        hi: "<ul>\n<li><code>s2 = s1</code> struct को copy करता है → <code>s2</code> बदलने पर <code>s1.X</code> = <b>1</b> ही रहता है।</li>\n<li><code>c2 = c1</code> reference copy करता है → object एक ही → <code>c1.X</code> = <b>2</b>।</li>\n<li><code>var p = points[0]</code> array से struct की copy निकालता है → <code>p</code> बदलने पर array element <b>1</b> ही रहता है।</li>\n<li><code>points[0].X = 7</code> element को <b>उसी जगह</b> बदलता है (array element एक variable है) → <b>7</b>। <code>List&lt;Point&gt;</code> के साथ यही line compile error है (CS1612), क्योंकि list का indexer copy return करता है।</li>\n</ul>",
        hg: "<ul>\n<li><code>s2 = s1</code> struct ko copy karta hai → <code>s2</code> badalne par <code>s1.X</code> = <b>1</b> hi rehta hai.</li>\n<li><code>c2 = c1</code> reference copy karta hai → object ek hi → <code>c1.X</code> = <b>2</b>.</li>\n<li><code>var p = points[0]</code> array se struct ki copy nikaalta hai → <code>p</code> badalne par array element <b>1</b> hi rehta hai.</li>\n<li><code>points[0].X = 7</code> element ko <b>usi jagah</b> badalta hai (array element ek variable hai) → <b>7</b>. <code>List&lt;Point&gt;</code> ke saath yahi line compile error hai (CS1612), kyunki list ka indexer copy return karta hai.</li>\n</ul>"
      }
    },
    {
      id: "reference-passed-by-value",
      src: "var cart = new List<string> { \"Atta\" };\nAddItem(cart);\nReplace(cart);\nConsole.WriteLine(string.Join(\",\", cart));\n\nReplaceByRef(ref cart);\nConsole.WriteLine(string.Join(\",\", cart));\n\nint qty = 1;\nIncrement(qty);\nConsole.WriteLine(qty);\n\nstatic void AddItem(List<string> items) => items.Add(\"Dal\");\nstatic void Replace(List<string> items) { items = new List<string> { \"Oil\" }; }\nstatic void ReplaceByRef(ref List<string> items) { items = new List<string> { \"Oil\" }; }\nstatic void Increment(int n) { n++; }",
      answer: "Atta,Dal\nOil\n1",
      explain: {
        en: "<ul>\n<li><code>AddItem</code> gets a copy of the reference, but it points to the <b>same list</b> → \"Dal\" is added.</li>\n<li><code>Replace</code> points <b>its own copy</b> of the reference to a new list; the caller's <code>cart</code> is untouched → <b>Atta,Dal</b>.</li>\n<li><code>ReplaceByRef</code> receives the caller's variable itself → <code>cart</code> now points to the new list → <b>Oil</b>.</li>\n<li><code>Increment</code> gets a copy of the <code>int</code> → <code>qty</code> stays <b>1</b>.</li>\n</ul>\n<p>Interview line: \"C# passes everything by value by default — for reference types, the value is the reference.\"</p>",
        hi: "<ul>\n<li><code>AddItem</code> को reference की copy मिलती है, पर वो <b>उसी list</b> पर point करती है → \"Dal\" जुड़ जाता है।</li>\n<li><code>Replace</code> <b>अपनी copy</b> वाले reference को नई list पर point करता है; caller का <code>cart</code> नहीं बदलता → <b>Atta,Dal</b>।</li>\n<li><code>ReplaceByRef</code> को caller का variable ही मिलता है → <code>cart</code> अब नई list पर point करता है → <b>Oil</b>।</li>\n<li><code>Increment</code> को <code>int</code> की copy मिलती है → <code>qty</code> <b>1</b> ही रहता है।</li>\n</ul>\n<p>Interview line: \"C# by default सब कुछ by value pass करता है — reference types में वो value reference होती है।\"</p>",
        hg: "<ul>\n<li><code>AddItem</code> ko reference ki copy milti hai, par woh <b>usi list</b> par point karti hai → \"Dal\" jud jaata hai.</li>\n<li><code>Replace</code> <b>apni copy</b> wale reference ko nayi list par point karta hai; caller ka <code>cart</code> nahi badalta → <b>Atta,Dal</b>.</li>\n<li><code>ReplaceByRef</code> ko caller ka variable hi milta hai → <code>cart</code> ab nayi list par point karta hai → <b>Oil</b>.</li>\n<li><code>Increment</code> ko <code>int</code> ki copy milti hai → <code>qty</code> <b>1</b> hi rehta hai.</li>\n</ul>\n<p>Interview line: \"C# by default sab kuch by value pass karta hai — reference types mein woh value reference hoti hai.\"</p>"
      }
    },
    {
      id: "boxing-snapshot",
      src: "int x = 10;\nobject o = x;\nx++;\nConsole.WriteLine($\"{x} {o}\");\n\nobject a = 5;\nobject b = 5;\nConsole.WriteLine(a == b);\nConsole.WriteLine(a.Equals(b));\n\ntry\n{\n    Console.WriteLine((long)a);\n}\ncatch (InvalidCastException)\n{\n    Console.WriteLine(\"InvalidCastException\");\n}",
      answer: "11 10\nFalse\nTrue\nInvalidCastException",
      explain: {
        en: "<ul>\n<li><code>object o = x</code> boxes a <b>copy</b> of 10. <code>x++</code> changes only <code>x</code> → <b>11 10</b>.</li>\n<li><code>a</code> and <code>b</code> are two <b>different boxes</b>. <code>==</code> on <code>object</code> compares references → <b>False</b>.</li>\n<li><code>Equals</code> is virtual → <code>Int32.Equals</code> compares the values → <b>True</b>.</li>\n<li>A boxed <code>int</code> can only be unboxed to <code>int</code> (or <code>int?</code>) → <code>(long)a</code> throws <b>InvalidCastException</b>. <code>(long)(int)a</code> would work.</li>\n</ul>",
        hi: "<ul>\n<li><code>object o = x</code> 10 की एक <b>copy</b> box करता है। <code>x++</code> सिर्फ़ <code>x</code> बदलता है → <b>11 10</b>।</li>\n<li><code>a</code> और <code>b</code> दो <b>अलग boxes</b> हैं। <code>object</code> पर <code>==</code> references compare करता है → <b>False</b>।</li>\n<li><code>Equals</code> virtual है → <code>Int32.Equals</code> values compare करता है → <b>True</b>।</li>\n<li>Boxed <code>int</code> सिर्फ़ <code>int</code> (या <code>int?</code>) में unbox हो सकता है → <code>(long)a</code> <b>InvalidCastException</b> फेंकता है। <code>(long)(int)a</code> चल जाता।</li>\n</ul>",
        hg: "<ul>\n<li><code>object o = x</code> 10 ki ek <b>copy</b> box karta hai. <code>x++</code> sirf <code>x</code> badalta hai → <b>11 10</b>.</li>\n<li><code>a</code> aur <code>b</code> do <b>alag boxes</b> hain. <code>object</code> par <code>==</code> references compare karta hai → <b>False</b>.</li>\n<li><code>Equals</code> virtual hai → <code>Int32.Equals</code> values compare karta hai → <b>True</b>.</li>\n<li>Boxed <code>int</code> sirf <code>int</code> (ya <code>int?</code>) mein unbox ho sakta hai → <code>(long)a</code> <b>InvalidCastException</b> phenkta hai. <code>(long)(int)a</code> chal jaata.</li>\n</ul>"
      }
    },
    {
      id: "boxed-struct-interface",
      src: "var counter = new Counter();\nICounter boxed = counter;     // boxing copies the struct\nboxed.Increment();\nboxed.Increment();\ncounter.Increment();\n\nConsole.WriteLine(counter.Value);\nConsole.WriteLine(boxed.Value);\nConsole.WriteLine(((Counter)boxed).Value);\n\ninterface ICounter\n{\n    int Value { get; }\n    void Increment();\n}\n\nstruct Counter : ICounter      // a mutable struct: exactly the kind to avoid\n{\n    public int Value { get; private set; }\n    public void Increment() => Value++;\n}",
      answer: "1\n2\n2",
      explain: {
        en: "<ul>\n<li>Assigning a struct to an interface variable <b>boxes</b> it: <code>boxed</code> is a separate copy on the heap.</li>\n<li>Two calls through <code>boxed</code> change the <b>box</b> → its value is <b>2</b>.</li>\n<li>One call on <code>counter</code> changes the original → <b>1</b>.</li>\n<li>Unboxing <code>(Counter)boxed</code> copies the box's current value → <b>2</b>.</li>\n</ul>\n<p>Lesson: mutable structs + interfaces = surprising bugs. Keep structs <code>readonly</code>.</p>",
        hi: "<ul>\n<li>Struct को interface variable में assign करने पर वो <b>box</b> होता है: <code>boxed</code> heap पर एक अलग copy है।</li>\n<li><code>boxed</code> से दो calls <b>box</b> को बदलती हैं → उसकी value <b>2</b>।</li>\n<li><code>counter</code> पर एक call original को बदलती है → <b>1</b>।</li>\n<li><code>(Counter)boxed</code> unboxing box की current value copy करती है → <b>2</b>।</li>\n</ul>\n<p>सीख: mutable structs + interfaces = चौंकाने वाले bugs। Structs को <code>readonly</code> रखो।</p>",
        hg: "<ul>\n<li>Struct ko interface variable mein assign karne par woh <b>box</b> hota hai: <code>boxed</code> heap par ek alag copy hai.</li>\n<li><code>boxed</code> se do calls <b>box</b> ko badalti hain → uski value <b>2</b>.</li>\n<li><code>counter</code> par ek call original ko badalti hai → <b>1</b>.</li>\n<li><code>(Counter)boxed</code> unboxing box ki current value copy karti hai → <b>2</b>.</li>\n</ul>\n<p>Seekh: mutable structs + interfaces = chaunkane wale bugs. Structs ko <code>readonly</code> rakho.</p>"
      }
    },
    {
      id: "string-immutability-interning",
      src: "string a = \"hello\";\nstring b = a;\nb += \"!\";\nConsole.WriteLine(a);\n\nstring city = \"  Pune  \";\ncity.Trim();\nConsole.WriteLine($\"[{city}]\");\n\nstring lit = \"ab\";\nstring folded = \"a\" + \"b\";    // both constants: joined at compile time\nstring part = \"a\";\nstring built = part + \"b\";    // joined at runtime\nConsole.WriteLine(object.ReferenceEquals(lit, folded));\nConsole.WriteLine(object.ReferenceEquals(lit, built));\nConsole.WriteLine(lit == built);",
      answer: "hello\n[  Pune  ]\nTrue\nFalse\nTrue",
      explain: {
        en: "<ul>\n<li><code>b += \"!\"</code> creates a <b>new</b> string and points <code>b</code> to it; <code>a</code> still points to \"hello\".</li>\n<li><code>city.Trim()</code> returns a new string that is thrown away; <code>city</code> is unchanged → <b>[  Pune  ]</b>.</li>\n<li><code>\"a\" + \"b\"</code> is a constant expression, so the compiler emits the literal \"ab\" — the same interned object as <code>lit</code> → <b>True</b>.</li>\n<li><code>part + \"b\"</code> is built at runtime → a new object → <b>False</b>, but the text is equal → <code>==</code> gives <b>True</b>.</li>\n</ul>",
        hi: "<ul>\n<li><code>b += \"!\"</code> एक <b>नई</b> string बनाता है और <code>b</code> को उस पर point करता है; <code>a</code> अब भी \"hello\" पर point करता है।</li>\n<li><code>city.Trim()</code> नई string return करता है जो फेंक दी जाती है; <code>city</code> नहीं बदलती → <b>[  Pune  ]</b>।</li>\n<li><code>\"a\" + \"b\"</code> constant expression है, इसलिए compiler सीधे literal \"ab\" लिख देता है — <code>lit</code> वाला ही interned object → <b>True</b>।</li>\n<li><code>part + \"b\"</code> runtime पर बनती है → नया object → <b>False</b>, पर text बराबर है → <code>==</code> से <b>True</b>।</li>\n</ul>",
        hg: "<ul>\n<li><code>b += \"!\"</code> ek <b>nayi</b> string banata hai aur <code>b</code> ko us par point karta hai; <code>a</code> ab bhi \"hello\" par point karta hai.</li>\n<li><code>city.Trim()</code> nayi string return karta hai jo phenk di jaati hai; <code>city</code> nahi badalti → <b>[  Pune  ]</b>.</li>\n<li><code>\"a\" + \"b\"</code> constant expression hai, isliye compiler seedhe literal \"ab\" likh deta hai — <code>lit</code> wala hi interned object → <b>True</b>.</li>\n<li><code>part + \"b\"</code> runtime par banti hai → naya object → <b>False</b>, par text barabar hai → <code>==</code> se <b>True</b>.</li>\n</ul>"
      }
    },
    {
      id: "equals-vs-operator",
      src: "string s1 = \"hi\";\nstring s2 = new string(\"hi\");   // a separate string object with the same text\nobject o1 = s1;\nobject o2 = s2;\n\nConsole.WriteLine(s1 == s2);\nConsole.WriteLine(o1 == o2);\nConsole.WriteLine(o1.Equals(o2));",
      answer: "True\nFalse\nTrue",
      explain: {
        en: "<ul>\n<li><code>s1 == s2</code>: both declared as <code>string</code> → the compiler picks <b>string's</b> <code>==</code> → compares text → <b>True</b>.</li>\n<li><code>o1 == o2</code>: both declared as <code>object</code> → the compiler picks <b>object's</b> <code>==</code> → compares references; two different objects → <b>False</b>.</li>\n<li><code>o1.Equals(o2)</code>: <code>Equals</code> is <b>virtual</b> → the runtime calls <code>string.Equals</code> → <b>True</b>.</li>\n</ul>\n<p>Interview line: \"Operators are resolved at compile time from declared types; <code>Equals</code> is virtual and resolved at runtime.\"</p>",
        hi: "<ul>\n<li><code>s1 == s2</code>: दोनों <code>string</code> declared हैं → compiler <b>string का</b> <code>==</code> चुनता है → text compare → <b>True</b>।</li>\n<li><code>o1 == o2</code>: दोनों <code>object</code> declared हैं → compiler <b>object का</b> <code>==</code> चुनता है → references compare; दो अलग objects → <b>False</b>।</li>\n<li><code>o1.Equals(o2)</code>: <code>Equals</code> <b>virtual</b> है → runtime <code>string.Equals</code> call करता है → <b>True</b>।</li>\n</ul>\n<p>Interview line: \"Operators compile time पर declared types से तय होते हैं; <code>Equals</code> virtual है और runtime पर तय होता है।\"</p>",
        hg: "<ul>\n<li><code>s1 == s2</code>: dono <code>string</code> declared hain → compiler <b>string ka</b> <code>==</code> chunta hai → text compare → <b>True</b>.</li>\n<li><code>o1 == o2</code>: dono <code>object</code> declared hain → compiler <b>object ka</b> <code>==</code> chunta hai → references compare; do alag objects → <b>False</b>.</li>\n<li><code>o1.Equals(o2)</code>: <code>Equals</code> <b>virtual</b> hai → runtime <code>string.Equals</code> call karta hai → <b>True</b>.</li>\n</ul>\n<p>Interview line: \"Operators compile time par declared types se tay hote hain; <code>Equals</code> virtual hai aur runtime par tay hota hai.\"</p>"
      }
    },
    {
      id: "closure-for-vs-foreach",
      src: "var actions = new List<Action>();\nfor (int i = 0; i < 3; i++)\n    actions.Add(() => Console.Write(i));\nforeach (var act in actions) act();\nConsole.WriteLine();\n\nactions.Clear();\nforeach (var n in new[] { 0, 1, 2 })\n    actions.Add(() => Console.Write(n));\nforeach (var act in actions) act();\nConsole.WriteLine();",
      answer: "333\n012",
      explain: {
        en: "<ul>\n<li>A lambda captures the <b>variable</b>, not its value.</li>\n<li>The <code>for</code> loop has <b>one</b> <code>i</code> for all iterations. When the lambdas run, the loop has finished and <code>i</code> is 3 → <b>333</b>.</li>\n<li>Since C# 5, <code>foreach</code> creates a <b>new</b> <code>n</code> for each iteration, so each lambda has its own → <b>012</b>.</li>\n</ul>\n<p>Fix for <code>for</code>: <code>int copy = i;</code> inside the loop and capture <code>copy</code>.</p>",
        hi: "<ul>\n<li>Lambda <b>variable</b> capture करता है, उसकी value नहीं।</li>\n<li><code>for</code> loop में सारे iterations के लिए <b>एक ही</b> <code>i</code> है। जब lambdas चलते हैं, loop ख़त्म हो चुका है और <code>i</code> 3 है → <b>333</b>।</li>\n<li>C# 5 से <code>foreach</code> हर iteration में <b>नया</b> <code>n</code> बनाता है, इसलिए हर lambda का अपना है → <b>012</b>।</li>\n</ul>\n<p><code>for</code> का fix: loop के अंदर <code>int copy = i;</code> और <code>copy</code> capture करो।</p>",
        hg: "<ul>\n<li>Lambda <b>variable</b> capture karta hai, uski value nahi.</li>\n<li><code>for</code> loop mein saare iterations ke liye <b>ek hi</b> <code>i</code> hai. Jab lambdas chalte hain, loop khatam ho chuka hai aur <code>i</code> 3 hai → <b>333</b>.</li>\n<li>C# 5 se <code>foreach</code> har iteration mein <b>naya</b> <code>n</code> banata hai, isliye har lambda ka apna hai → <b>012</b>.</li>\n</ul>\n<p><code>for</code> ka fix: loop ke andar <code>int copy = i;</code> aur <code>copy</code> capture karo.</p>"
      }
    },
    {
      id: "multicast-delegate",
      src: "Func<int> getNumber = () => 1;\ngetNumber += () => 2;\ngetNumber += () => 3;\nConsole.WriteLine(getNumber());\nConsole.WriteLine(getNumber.GetInvocationList().Length);\n\nAction greet = () => Console.Write(\"A\");\nAction sayB = () => Console.Write(\"B\");\ngreet += sayB;\ngreet += sayB;\ngreet -= sayB;\ngreet();\nConsole.WriteLine();",
      answer: "3\n3\nAB",
      explain: {
        en: "<ul>\n<li>A multicast <code>Func</code> runs <b>all three</b> lambdas, but only the <b>last</b> return value comes back → <b>3</b>.</li>\n<li>The invocation list still has three methods → <b>3</b>.</li>\n<li><code>greet</code> = A, B, B. <code>-= sayB</code> removes <b>one</b> occurrence (the last one) → A, B → <b>AB</b>.</li>\n</ul>\n<p>That is why events use <code>void</code> handlers — return values from many subscribers would be lost.</p>",
        hi: "<ul>\n<li>Multicast <code>Func</code> <b>तीनों</b> lambdas चलाता है, पर वापस सिर्फ़ <b>आख़िरी</b> return value आती है → <b>3</b>।</li>\n<li>Invocation list में अब भी तीन methods हैं → <b>3</b>।</li>\n<li><code>greet</code> = A, B, B। <code>-= sayB</code> <b>एक</b> occurrence (आख़िरी वाली) हटाता है → A, B → <b>AB</b>।</li>\n</ul>\n<p>इसीलिए events <code>void</code> handlers use करते हैं — कई subscribers की return values खो जातीं।</p>",
        hg: "<ul>\n<li>Multicast <code>Func</code> <b>teeno</b> lambdas chalata hai, par wapas sirf <b>aakhri</b> return value aati hai → <b>3</b>.</li>\n<li>Invocation list mein ab bhi teen methods hain → <b>3</b>.</li>\n<li><code>greet</code> = A, B, B. <code>-= sayB</code> <b>ek</b> occurrence (aakhri wali) hatata hai → A, B → <b>AB</b>.</li>\n</ul>\n<p>Isiliye events <code>void</code> handlers use karte hain — kai subscribers ki return values kho jaatin.</p>"
      }
    },
    {
      id: "generic-static-per-type",
      src: "Counter<int>.Hit();\nCounter<int>.Hit();\nCounter<string>.Hit();\n\nConsole.WriteLine(Counter<int>.Count);\nConsole.WriteLine(Counter<string>.Count);\nConsole.WriteLine(Counter<long>.Count);\nConsole.WriteLine(typeof(List<int>) == typeof(List<string>));\n\nstatic class Counter<T>\n{\n    public static int Count;\n    public static void Hit() => Count++;\n}",
      answer: "2\n1\n0\nFalse",
      explain: {
        en: "<ul>\n<li>Each <b>closed</b> generic type (<code>Counter&lt;int&gt;</code>, <code>Counter&lt;string&gt;</code>, ...) is a separate type at runtime with its <b>own static fields</b>.</li>\n<li><code>Counter&lt;int&gt;</code> was hit twice → <b>2</b>; <code>Counter&lt;string&gt;</code> once → <b>1</b>; <code>Counter&lt;long&gt;</code> never → <b>0</b>.</li>\n<li>Generics are reified in .NET, so <code>List&lt;int&gt;</code> and <code>List&lt;string&gt;</code> are different types → <b>False</b>.</li>\n</ul>\n<p>Real use: a per-type cache such as <code>static class Cache&lt;T&gt;</code> — but remember it is one cache <b>per T</b>.</p>",
        hi: "<ul>\n<li>हर <b>closed</b> generic type (<code>Counter&lt;int&gt;</code>, <code>Counter&lt;string&gt;</code>, ...) runtime पर अलग type है और उसके <b>अपने static fields</b> हैं।</li>\n<li><code>Counter&lt;int&gt;</code> दो बार hit हुआ → <b>2</b>; <code>Counter&lt;string&gt;</code> एक बार → <b>1</b>; <code>Counter&lt;long&gt;</code> कभी नहीं → <b>0</b>।</li>\n<li>.NET में generics reified हैं, इसलिए <code>List&lt;int&gt;</code> और <code>List&lt;string&gt;</code> अलग types हैं → <b>False</b>।</li>\n</ul>\n<p>Real use: per-type cache जैसे <code>static class Cache&lt;T&gt;</code> — पर याद रखो, यह <b>हर T का</b> अलग cache है।</p>",
        hg: "<ul>\n<li>Har <b>closed</b> generic type (<code>Counter&lt;int&gt;</code>, <code>Counter&lt;string&gt;</code>, ...) runtime par alag type hai aur uske <b>apne static fields</b> hain.</li>\n<li><code>Counter&lt;int&gt;</code> do baar hit hua → <b>2</b>; <code>Counter&lt;string&gt;</code> ek baar → <b>1</b>; <code>Counter&lt;long&gt;</code> kabhi nahi → <b>0</b>.</li>\n<li>.NET mein generics reified hain, isliye <code>List&lt;int&gt;</code> aur <code>List&lt;string&gt;</code> alag types hain → <b>False</b>.</li>\n</ul>\n<p>Real use: per-type cache jaise <code>static class Cache&lt;T&gt;</code> — par yaad rakho, yeh <b>har T ka</b> alag cache hai.</p>"
      }
    },
    {
      id: "extension-static-binding",
      src: "var printer = new Printer();\nprinter.Print(\"hi\");\n\nstring? name = null;\nConsole.WriteLine(name.OrDefault(\"guest\"));\n\nAnimal pet = new Dog();\nConsole.WriteLine(pet.Describe());\nConsole.WriteLine(new Dog().Describe());\n\nclass Printer\n{\n    public void Print(string s) => Console.WriteLine($\"instance: {s}\");\n}\n\nclass Animal { }\nclass Dog : Animal { }\n\nstatic class Extensions\n{\n    public static void Print(this Printer p, string s) => Console.WriteLine($\"extension: {s}\");\n    public static string OrDefault(this string? s, string fallback) => s ?? fallback;\n    public static string Describe(this Animal a) => \"animal\";\n    public static string Describe(this Dog d) => \"dog\";\n}",
      answer: "instance: hi\nguest\nanimal\ndog",
      explain: {
        en: "<ul>\n<li><code>Printer</code> has its own <code>Print(string)</code> → the <b>instance method wins</b>; the extension is never considered → <b>instance: hi</b>.</li>\n<li>An extension method is a static call, so calling it on <code>null</code> is fine → <b>guest</b>.</li>\n<li><code>pet</code> is <b>declared</b> as <code>Animal</code>. Extension methods are chosen at compile time from the declared type → <b>animal</b> (no virtual dispatch).</li>\n<li><code>new Dog()</code> has static type <code>Dog</code> → the more specific extension → <b>dog</b>.</li>\n</ul>",
        hi: "<ul>\n<li><code>Printer</code> का अपना <code>Print(string)</code> है → <b>instance method जीतता है</b>; extension पर विचार ही नहीं होता → <b>instance: hi</b>।</li>\n<li>Extension method एक static call है, इसलिए <code>null</code> पर call करना ठीक है → <b>guest</b>।</li>\n<li><code>pet</code> का <b>declared</b> type <code>Animal</code> है। Extension methods compile time पर declared type से चुने जाते हैं → <b>animal</b> (कोई virtual dispatch नहीं)।</li>\n<li><code>new Dog()</code> का static type <code>Dog</code> है → ज़्यादा specific extension → <b>dog</b>।</li>\n</ul>",
        hg: "<ul>\n<li><code>Printer</code> ka apna <code>Print(string)</code> hai → <b>instance method jeetta hai</b>; extension par vichaar hi nahi hota → <b>instance: hi</b>.</li>\n<li>Extension method ek static call hai, isliye <code>null</code> par call karna theek hai → <b>guest</b>.</li>\n<li><code>pet</code> ka <b>declared</b> type <code>Animal</code> hai. Extension methods compile time par declared type se chune jaate hain → <b>animal</b> (koi virtual dispatch nahi).</li>\n<li><code>new Dog()</code> ka static type <code>Dog</code> hai → zyada specific extension → <b>dog</b>.</li>\n</ul>"
      }
    }
  ],
  revision: {
    en: [
      "<b>Value type</b> copies the data; <b>reference type</b> copies the reference: two variables, one object. Default to <code>class</code>; small <code>readonly struct</code> for value-like data.",
      "Arguments go <b>by value</b>. <code>out</code> for <code>TryXxx</code>, <code>in</code> for big read-only structs, <code>ref</code> only to replace the caller's variable.",
      "<b>Boxing</b> = value type into <code>object</code> (a heap copy); <b>unboxing</b> = cast to the <b>exact</b> type. Avoid it with generics.",
      "<b>string</b> is immutable: every \"change\" returns a new string, so assign the result. <code>StringBuilder</code> for loops, <code>string.Join</code> for collections.",
      "<b>const</b> = compile-time; <b>readonly</b> = set in the constructor; <b>init</b> = set only while creating. <code>readonly</code> is shallow.",
      "<b>Generics</b> = write once, reuse for many types, with type safety and no boxing. A constraint (<code>where T : IEntity</code>) unlocks members on <code>T</code>.",
      "Pick the collection by the main operation: <b>List</b> by position, <b>Dictionary</b> by key, <b>HashSet</b> unique, <b>Queue</b> first-in-first-out. <code>TryGetValue</code> for lookups that may miss.",
      "<b>Delegate</b> holds a method (<code>Func</code> returns, <code>Action</code> void). <b>Event</b>: outsiders only <code>+=</code>/<code>-=</code>, the owner raises with <code>?.Invoke</code>. Unsubscribe to avoid leaks.",
      "A value type lives <b>where its container lives</b>: local → stack, field → inside the heap object, boxed → copied to the heap, captured → hoisted into a heap closure object. Class objects → heap, cleaned by the GC.",
      "String <b>literals are interned</b>, runtime strings are not. Compare with <code>==</code> or <code>StringComparison.Ordinal(IgnoreCase)</code>, never by reference.",
      "<b>Covariance</b> <code>out T</code> (<code>IEnumerable&lt;string&gt;</code> as <code>IEnumerable&lt;object&gt;</code>), <b>contravariance</b> <code>in T</code> (<code>Action&lt;object&gt;</code> as <code>Action&lt;string&gt;</code>) — interfaces/delegates, reference types only.",
      "Lambdas capture <b>variables</b> (closures): a <code>for</code> loop shares one variable, <code>foreach</code> makes a new one. <b>Extension methods</b> = static calls bound at compile time; instance methods win."
    ],
    meaning: {
      hi: [
        "Value type data copy करता है; reference type reference: दो variables, एक object",
        "Arguments by value जाते हैं; TryXxx के लिए out, बड़े read-only struct के लिए in, ref सिर्फ़ caller का variable बदलने के लिए",
        "Boxing = value type को object में (heap पर copy); unboxing = ठीक उसी type में cast; generics से बचो",
        "string immutable है: हर बदलाव नई string लौटाता है, result assign करो; loop में StringBuilder",
        "const = compile-time; readonly = constructor में set; init = बनाते समय set; readonly shallow है",
        "Generics = एक बार लिखो, कई types में चलाओ; type safety और बिना boxing; constraint से T के members मिलते हैं",
        "मुख्य काम से collection चुनो: List position, Dictionary key, HashSet unique, Queue पहले-आओ-पहले-जाओ",
        "Delegate में method रहता है (Func लौटाता है, Action नहीं); event: बाहर वाले सिर्फ़ += / -=, मालिक ?.Invoke से उठाता है",
        "Value type वहीं रहता है जहाँ उसका container है: local → stack, field → heap object के अंदर, boxed → heap पर copy, captured → heap के closure object में hoist। Class objects → heap, जिन्हें GC साफ़ करता है।",
        "String literals intern होते हैं, runtime strings नहीं। == या StringComparison.Ordinal(IgnoreCase) से compare करो, reference से कभी नहीं।",
        "Covariance out T (IEnumerable&lt;string&gt; को IEnumerable&lt;object&gt; की तरह), contravariance in T (Action&lt;object&gt; को Action&lt;string&gt; की तरह) — सिर्फ़ interfaces/delegates और reference types।",
        "Lambdas variables capture करते हैं (closures): for loop एक ही variable share करता है, foreach हर बार नया बनाता है। Extension methods = compile time पर bind होने वाले static calls; instance methods जीतते हैं।"
      ],
      hg: [
        "Value type data copy karta hai; reference type reference: do variables, ek object",
        "Arguments by value jaate hain; TryXxx ke liye out, bade read-only struct ke liye in, ref sirf caller ka variable badalne ke liye",
        "Boxing = value type ko object mein (heap par copy); unboxing = theek usi type mein cast; generics se bacho",
        "string immutable hai: har badlaav nayi string lautaata hai, result assign karo; loop mein StringBuilder",
        "const = compile-time; readonly = constructor mein set; init = banate samay set; readonly shallow hai",
        "Generics = ek baar likho, kai types mein chalao; type safety aur bina boxing; constraint se T ke members milte hain",
        "Mukhya kaam se collection chuno: List position, Dictionary key, HashSet unique, Queue pehle-aao-pehle-jao",
        "Delegate mein method rehta hai (Func lautaata hai, Action nahi); event: bahar wale sirf += / -=, maalik ?.Invoke se uthata hai",
        "Value type wahin rehta hai jahan uska container hai: local → stack, field → heap object ke andar, boxed → heap par copy, captured → heap ke closure object mein hoist. Class objects → heap, jinhe GC saaf karta hai.",
        "String literals intern hote hain, runtime strings nahi. == ya StringComparison.Ordinal(IgnoreCase) se compare karo, reference se kabhi nahi.",
        "Covariance out T (IEnumerable&lt;string&gt; ko IEnumerable&lt;object&gt; ki tarah), contravariance in T (Action&lt;object&gt; ko Action&lt;string&gt; ki tarah) — sirf interfaces/delegates aur reference types.",
        "Lambdas variables capture karte hain (closures): for loop ek hi variable share karta hai, foreach har baar naya banata hai. Extension methods = compile time par bind hone wale static calls; instance methods jeette hain."
      ]
    }
  }
};
