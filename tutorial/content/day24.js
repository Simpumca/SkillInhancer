// Day 24 — React and Next.js basics, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 24,
  format: "lesson",
  title: {
    en: "React and Next.js basics — components, JSX, props/state, hooks, forms, calling an ASP.NET Core API, App Router server vs client components",
    hi: "React और Next.js basics — components, JSX, props/state, hooks, forms, ASP.NET Core API call, App Router में server vs client components",
    hg: "React aur Next.js basics — components, JSX, props/state, hooks, forms, ASP.NET Core API call, App Router mein server vs client components"
  },
  summary: {
    en: "<p>Day 24 builds the front end of the <b>customer-care CRM</b> in 8 short lessons. First React itself: components and props, lists and keys, state, immutable updates, effects and forms. Then the two places where React meets your ASP.NET Core API: calling it from the browser (with CORS), and Next.js server and client components.</p><p>Most React ideas here are shown as plain JavaScript you can run (a function component, a tiny <code>useState</code>, a reducer, a fake <code>fetch</code>). The Next.js lesson uses TSX for display only. Mark a lesson done when you can explain it without looking.</p>",
    hi: "<p>Day 24 में 8 छोटे पाठों में <b>customer-care CRM</b> का front end बनता है। पहले React खुद: components और props, lists और keys, state, immutable updates, effects और forms। फिर वे दो जगहें जहाँ React आपकी ASP.NET Core API से मिलता है: browser से उसे call करना (CORS के साथ), और Next.js के server और client components।</p><p>यहाँ React की ज़्यादातर बातें सादे JavaScript में दिखाई गई हैं जिसे आप चला सकते हो (function component, एक छोटा <code>useState</code>, reducer, नकली <code>fetch</code>)। Next.js वाला पाठ TSX सिर्फ़ देखने के लिए use करता है। जब बिना देखे समझा सको, तब पाठ को पूरा mark करो।</p>",
    hg: "<p>Day 24 mein 8 chhote lessons mein <b>customer-care CRM</b> ka front end banta hai. Pehle React khud: components aur props, lists aur keys, state, immutable updates, effects aur forms. Phir woh do jagahein jahan React aapki ASP.NET Core API se milta hai: browser se use call karna (CORS ke saath), aur Next.js ke server aur client components.</p><p>Yahan React ki zyaadatar baatein saade JavaScript mein dikhayi gayi hain jise aap chala sakte ho (function component, ek chhota <code>useState</code>, reducer, nakli <code>fetch</code>). Next.js wala lesson TSX sirf dekhne ke liye use karta hai. Jab bina dekhe samjha sako, tab lesson ko poora mark karo.</p>"
  },
  sections: [
    {
      id: "components-props",
      depth: "short",
      title: {
        en: "Components, JSX and props",
        hi: "Components, JSX और props",
        hg: "Components, JSX aur props"
      },
      lesson: {
        buildsOn: {
          en: "<p>Day 13 built the Web API that returns tickets as JSON, and Day 23 taught the JavaScript you need: functions, objects, destructuring and arrow functions. Today we build the screen that shows those tickets. The first idea is small: in React, a piece of screen is just a JavaScript function.</p>",
          hi: "<p>Day 13 में Web API बनी जो tickets JSON में देती है, और Day 23 में ज़रूरी JavaScript सीखी: functions, objects, destructuring और arrow functions। आज हम वह screen बनाते हैं जो इन tickets को दिखाती है। पहली बात छोटी है: React में screen का एक हिस्सा बस एक JavaScript function होता है।</p>",
          hg: "<p>Day 13 mein Web API bani jo tickets JSON mein deti hai, aur Day 23 mein zaroori JavaScript seekhi: functions, objects, destructuring aur arrow functions. Aaj hum woh screen banate hain jo in tickets ko dikhati hai. Pehli baat chhoti hai: React mein screen ka ek hissa bas ek JavaScript function hota hai.</p>"
        },
        what: {
          en: "<p>A <b>component</b> is a function that takes <b>props</b> (its inputs) and returns a description of the UI. <b>JSX</b> is the HTML-like syntax you use to write that description. A build tool turns every JSX tag into a plain function call.</p>",
          hi: "<p><b>Component</b> एक function है जो <b>props</b> (उसके inputs) लेता है और UI का description लौटाता है। <b>JSX</b> वह HTML जैसी syntax है जिससे आप वह description लिखते हो। Build tool हर JSX tag को एक सादे function call में बदल देता है।</p>",
          hg: "<p><b>Component</b> ek function hai jo <b>props</b> (uske inputs) leta hai aur UI ka description lautata hai. <b>JSX</b> woh HTML jaisi syntax hai jisse aap woh description likhte ho. Build tool har JSX tag ko ek saade function call mein badal deta hai.</p>"
        },
        why: {
          en: "<p>The CRM screen has dozens of ticket rows. You write <code>TicketCard</code> once and reuse it with different props for every ticket. It is similar to a Razor partial view or a Blazor component, but it is plain JavaScript, so there is no new language to learn.</p>",
          hi: "<p>CRM की screen पर दर्जनों ticket rows होती हैं। <code>TicketCard</code> एक बार लिखो और हर ticket के लिए अलग props के साथ दोबारा use करो। यह Razor partial view या Blazor component जैसा है, पर यह सादा JavaScript है, इसलिए कोई नई भाषा नहीं सीखनी पड़ती।</p>",
          hg: "<p>CRM ki screen par darjano ticket rows hoti hain. <code>TicketCard</code> ek baar likho aur har ticket ke liye alag props ke saath dobara use karo. Ye Razor partial view ya Blazor component jaisa hai, par ye saada JavaScript hai, isliye koi nayi bhasha nahi seekhni padti.</p>"
        },
        analogy: {
          en: "<p>A school ID-card template. The layout is fixed once. For each student you fill in name, class and photo (the props) and get one card. The template never edits the student's own record.</p>",
          hi: "<p>School के ID-card का template। Layout एक बार तय होता है। हर student के लिए नाम, class और photo (props) भरते हो और एक card मिल जाता है। Template student का अपना record कभी नहीं बदलता।</p>",
          hg: "<p>School ke ID-card ka template. Layout ek baar tay hota hai. Har student ke liye naam, class aur photo (props) bharte ho aur ek card mil jaata hai. Template student ka apna record kabhi nahi badalta.</p>"
        },
        focus: {
          lang: "jsx",
          caption: {
            en: "The same component written in real JSX (display-only)",
            hi: "वही component असली JSX में (सिर्फ़ देखने के लिए)",
            hg: "Wahi component asli JSX mein (sirf dekhne ke liye)"
          },
          check: "none",
          src: "function TicketCard({ id, customer, issue, priority }) {\n  return (\n    <li className=\"ticket\">\n      <b>#{id}</b> {customer}: {issue}\n      {priority === \"High\" && <span className=\"badge\">High</span>}\n    </li>\n  );\n}\n\n// Used like an HTML tag:\n// <TicketCard id={501} customer=\"Asha\" issue=\"Refund not received\" priority=\"High\" />"
        },
        lines: [
          {
            code: "function h(type, props, ...children) {",
            note: {
              en: "JSX such as <code>&lt;li className=\"ticket\"&gt;</code> is compiled into a call like this. The result is a plain object that <b>describes</b> the UI; it is not a DOM element. (React's real function is a little different, but the idea is the same.)",
              hi: "<code>&lt;li className=\"ticket\"&gt;</code> जैसा JSX इसी तरह के call में compile होता है। नतीजा एक सादा object है जो UI का <b>description</b> देता है; यह DOM element नहीं है। (React का असली function थोड़ा अलग है, पर idea वही है।)",
              hg: "<code>&lt;li className=\"ticket\"&gt;</code> jaisa JSX isi tarah ke call mein compile hota hai. Nateeja ek saada object hai jo UI ka <b>description</b> deta hai; ye DOM element nahi hai. (React ka asli function thoda alag hai, par idea wahi hai.)"
            }
          },
          {
            code: "function TicketCard({ id, customer, issue, priority }) {",
            note: {
              en: "This is the component. The name starts with a capital letter, so React treats it as a component and not as an HTML tag. The <code>{ ... }</code> in the parameter list destructures the props (Day 23).",
              hi: "यही component है। नाम capital letter से शुरू होता है, इसलिए React इसे HTML tag नहीं, component मानता है। Parameter में <code>{ ... }</code> props को destructure करता है (Day 23)।",
              hg: "Yahi component hai. Naam capital letter se shuru hota hai, isliye React ise HTML tag nahi, component maanta hai. Parameter mein <code>{ ... }</code> props ko destructure karta hai (Day 23)."
            }
          },
          {
            code: "if (typeof node.type === \"function\") return renderToString(node.type(node.props));",
            note: {
              en: "The renderer sees a component (a function), calls it with its props, and renders what comes back. This is why a component runs again whenever React needs a fresh description.",
              hi: "Renderer को component (एक function) दिखता है, वह उसे props के साथ call करता है और जो लौटे उसे render करता है। इसीलिए जब React को नया description चाहिए, component फिर से चलता है।",
              hg: "Renderer ko component (ek function) dikhta hai, woh use props ke saath call karta hai aur jo laute use render karta hai. Isiliye jab React ko naya description chahiye, component phir se chalta hai."
            }
          },
          {
            code: "const card = h(TicketCard, { id: 501, customer: \"Asha\", issue: \"Refund not received\", priority: \"High\" });",
            note: {
              en: "Using <code>&lt;TicketCard id={501} ... /&gt;</code> only builds a description object. <code>TicketCard</code> has not run yet, which is why the first output line is <code>true</code>: the element still holds the function itself.",
              hi: "<code>&lt;TicketCard id={501} ... /&gt;</code> लिखने से सिर्फ़ एक description object बनता है। <code>TicketCard</code> अभी चला नहीं है, इसीलिए पहली output line <code>true</code> है: element के पास अभी function ही रखा है।",
              hg: "<code>&lt;TicketCard id={501} ... /&gt;</code> likhne se sirf ek description object banta hai. <code>TicketCard</code> abhi chala nahi hai, isiliye pehli output line <code>true</code> hai: element ke paas abhi function hi rakha hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Naming a component in lowercase (<code>&lt;ticketCard /&gt;</code>). React then looks for an HTML tag with that name.</li><li>Changing a prop inside the component. Props are read-only; the parent owns them.</li><li>Writing <code>class</code> instead of <code>className</code>, or returning two sibling tags without one wrapper (use <code>&lt;&gt;...&lt;/&gt;</code>).</li></ul>",
          hi: "<ul><li>Component का नाम lowercase में रखना (<code>&lt;ticketCard /&gt;</code>)। तब React उस नाम का HTML tag ढूँढता है।</li><li>Component के अंदर prop बदलना। Props read-only हैं; उनका मालिक parent है।</li><li><code>className</code> की जगह <code>class</code> लिखना, या दो sibling tags बिना एक wrapper के लौटाना (<code>&lt;&gt;...&lt;/&gt;</code> use करो)।</li></ul>",
          hg: "<ul><li>Component ka naam lowercase mein rakhna (<code>&lt;ticketCard /&gt;</code>). Tab React us naam ka HTML tag dhundhta hai.</li><li>Component ke andar prop badalna. Props read-only hain; unka malik parent hai.</li><li><code>className</code> ki jagah <code>class</code> likhna, ya do sibling tags bina ek wrapper ke lautana (<code>&lt;&gt;...&lt;/&gt;</code> use karo).</li></ul>"
        },
        whenToUse: {
          en: "<p>Make a component when a piece of UI has its own name or repeats, like <code>TicketCard</code> in a list. Do not make one for every single tag; small, clear components are enough.</p>",
          hi: "<p>Component तब बनाओ जब UI के किसी हिस्से का अपना नाम हो या वह दोहराया जाए, जैसे list में <code>TicketCard</code>। हर tag के लिए अलग component मत बनाओ; छोटे और साफ़ components काफ़ी हैं।</p>",
          hg: "<p>Component tab banao jab UI ke kisi hisse ka apna naam ho ya woh dohraya jaaye, jaise list mein <code>TicketCard</code>. Har tag ke liye alag component mat banao; chhote aur saaf components kaafi hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write an <code>AgentBadge</code> component that takes <code>name</code>. It should show <code>Agent: Kiran</code>, or <code>Unassigned</code> when there is no agent. Render it once with a name and once with <code>null</code>.</p>",
            hi: "<p>एक <code>AgentBadge</code> component लिखो जो <code>name</code> लेता है। वह <code>Agent: Kiran</code> दिखाए, या agent न हो तो <code>Unassigned</code>। उसे एक बार name के साथ और एक बार <code>null</code> के साथ render करो।</p>",
            hg: "<p>Ek <code>AgentBadge</code> component likho jo <code>name</code> leta hai. Woh <code>Agent: Kiran</code> dikhaye, ya agent na ho to <code>Unassigned</code>. Use ek baar name ke saath aur ek baar <code>null</code> ke saath render karo.</p>"
          },
          hint: {
            en: "<p>Use a ternary: <code>name ? \"Agent: \" + name : \"Unassigned\"</code>. <code>null</code> counts as \"no value\".</p>",
            hi: "<p>Ternary use करो: <code>name ? \"Agent: \" + name : \"Unassigned\"</code>। <code>null</code> का मतलब \"कोई value नहीं\" है।</p>",
            hg: "<p>Ternary use karo: <code>name ? \"Agent: \" + name : \"Unassigned\"</code>. <code>null</code> ka matlab \"koi value nahi\" hai.</p>"
          },
          solution: {
            lang: "javascript",
            caption: {
              en: "One possible solution",
              hi: "एक संभव solution",
              hg: "Ek sambhav solution"
            },
            check: "run",
            src: "function h(type, props, ...children) {\n  return { type, props: props ?? {}, children };\n}\n\n// Shows \"Agent: Kiran\", or \"Unassigned\" when there is no agent yet\nfunction AgentBadge({ name }) {\n  return h(\"span\", { className: \"agent\" }, name ? \"Agent: \" + name : \"Unassigned\");\n}\n\nfunction renderToString(node) {\n  if (node === null) return \"\";\n  if (typeof node === \"string\") return node;\n  if (typeof node.type === \"function\") return renderToString(node.type(node.props));\n  const cls = node.props.className ? ' class=\"' + node.props.className + '\"' : \"\";\n  return \"<\" + node.type + cls + \">\" + node.children.map(renderToString).join(\"\") + \"</\" + node.type + \">\";\n}\n\nconsole.log(renderToString(h(AgentBadge, { name: \"Kiran\" })));\nconsole.log(renderToString(h(AgentBadge, { name: null })));",
            expected: "<span class=\"agent\">Agent: Kiran</span>\n<span class=\"agent\">Unassigned</span>"
          }
        },
        quiz: {
          q: {
            en: "What does a React component return?",
            hi: "React component क्या लौटाता है?",
            hg: "React component kya lautata hai?"
          },
          options: [
            {
              en: "A copy of the props it received",
              hi: "मिले हुए props की copy",
              hg: "Mile hue props ki copy"
            },
            {
              en: "A finished DOM element it has already drawn",
              hi: "एक बना-बनाया DOM element जो वह खुद draw कर चुका है",
              hg: "Ek bana-banaya DOM element jo woh khud draw kar chuka hai"
            },
            {
              en: "A description of the UI for the given props",
              hi: "दिए गए props के लिए UI का description",
              hg: "Diye gaye props ke liye UI ka description"
            },
            {
              en: "A promise that resolves to HTML text",
              hi: "एक promise जो HTML text देता है",
              hg: "Ek promise jo HTML text deta hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>A component is a function from props to a description. React compares that description with the previous one and updates the real DOM. The component itself never touches the DOM.</p>",
            hi: "<p>Component props से description बनाने वाला function है। React उस description की पिछले वाले से तुलना करके असली DOM अपडेट करता है। Component खुद DOM को नहीं छूता।</p>",
            hg: "<p>Component props se description banane wala function hai. React us description ki pichhle wale se tulna karke asli DOM update karta hai. Component khud DOM ko nahi chhoota.</p>"
          }
        },
        recap: {
          en: "<ul><li>A component is a function: props in, a UI description out.</li><li>JSX is HTML-like syntax that compiles to function calls; use <code>className</code> and <code>{ }</code> for expressions.</li><li>Component names start with a capital letter; props are read-only.</li></ul>",
          hi: "<ul><li>Component एक function है: props अंदर, UI का description बाहर।</li><li>JSX HTML जैसी syntax है जो function calls में compile होती है; <code>className</code> और expressions के लिए <code>{ }</code> use करो।</li><li>Component का नाम capital letter से शुरू होता है; props read-only हैं।</li></ul>",
          hg: "<ul><li>Component ek function hai: props andar, UI ka description bahar.</li><li>JSX HTML jaisi syntax hai jo function calls mein compile hoti hai; <code>className</code> aur expressions ke liye <code>{ }</code> use karo.</li><li>Component ka naam capital letter se shuru hota hai; props read-only hain.</li></ul>"
        }
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "A component modelled as a plain function, with a tiny renderer (runs on Node, no React needed)",
            hi: "Plain function के रूप में component, एक छोटे renderer के साथ (Node पर चलता है, React नहीं चाहिए)",
            hg: "Plain function ke roop mein component, ek chhote renderer ke saath (Node par chalta hai, React nahi chahiye)"
          },
          check: "run",
          src: "// JSX such as <TicketCard id={501} /> is compiled into calls like h(TicketCard, { id: 501 }).\n// This h() is a simplified stand-in for React's own function.\nfunction h(type, props, ...children) {\n  return { type, props: props ?? {}, children };\n}\n\n// A component: props in, a description of the UI out. The name starts with a capital letter.\nfunction TicketCard({ id, customer, issue, priority }) {\n  return h(\"li\", { className: \"ticket\" },\n    h(\"b\", null, \"#\" + id), \" \" + customer + \": \" + issue,\n    priority === \"High\" ? h(\"span\", { className: \"badge\" }, \"High\") : null);\n}\n\n// A tiny renderer: turns the description into HTML text (React turns it into DOM)\nfunction renderToString(node) {\n  if (node === null) return \"\";\n  if (typeof node === \"string\") return node;\n  if (typeof node.type === \"function\") return renderToString(node.type(node.props));\n  const cls = node.props.className ? ' class=\"' + node.props.className + '\"' : \"\";\n  return \"<\" + node.type + cls + \">\" + node.children.map(renderToString).join(\"\") + \"</\" + node.type + \">\";\n}\n\nconst card = h(TicketCard, { id: 501, customer: \"Asha\", issue: \"Refund not received\", priority: \"High\" });\nconsole.log(card.type === TicketCard);\nconsole.log(renderToString(card));\nconsole.log(renderToString(h(TicketCard, { id: 502, customer: \"Ravi\", issue: \"Change address\", priority: \"Low\" })));",
          expected: "true\n<li class=\"ticket\"><b>#501</b> Asha: Refund not received<span class=\"badge\">High</span></li>\n<li class=\"ticket\"><b>#502</b> Ravi: Change address</li>"
        }
      ]
    },
    {
      id: "lists-keys",
      depth: "short",
      title: {
        en: "Lists and keys",
        hi: "Lists और keys",
        hg: "Lists aur keys"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 1 made one <code>TicketCard</code> from props. Now the API returns many tickets, so we map the array to many cards. The new part is the <code>key</code> prop, which tells React which row is which.</p>",
          hi: "<p>Lesson 1 में props से एक <code>TicketCard</code> बना। अब API कई tickets लौटाती है, इसलिए array को कई cards में map करते हैं। नई चीज़ <code>key</code> prop है, जो React को बताती है कि कौन-सी row कौन-सी है।</p>",
          hg: "<p>Lesson 1 mein props se ek <code>TicketCard</code> bana. Ab API kai tickets lautati hai, isliye array ko kai cards mein map karte hain. Nayi cheez <code>key</code> prop hai, jo React ko batati hai ki kaunsi row kaunsi hai.</p>"
        },
        what: {
          en: "<p>To show a list, call <code>map</code> on the array and return one element per item. Each element needs a <b>key</b>: a value that is stable and unique among its siblings, such as the ticket id. An empty list needs its own message.</p>",
          hi: "<p>List दिखाने के लिए array पर <code>map</code> चलाओ और हर item के लिए एक element लौटाओ। हर element को एक <b>key</b> चाहिए: ऐसी value जो बदलती नहीं और siblings में अलग हो, जैसे ticket id। खाली list के लिए अलग message चाहिए।</p>",
          hg: "<p>List dikhane ke liye array par <code>map</code> chalao aur har item ke liye ek element lautao. Har element ko ek <b>key</b> chahiye: aisi value jo badalti nahi aur siblings mein alag ho, jaise ticket id. Khaali list ke liye alag message chahiye.</p>"
        },
        why: {
          en: "<p>Tickets get closed and new ones arrive, so the list changes all the time. React uses the key to match old rows with new rows. With a wrong key, a note typed in one row can jump to a different customer. Bad keys cause this kind of bug, not a crash.</p>",
          hi: "<p>Tickets close होते हैं और नए आते हैं, इसलिए list हर समय बदलती है। React key से पुरानी rows को नई rows से मिलाता है। ग़लत key हो तो एक row में लिखा note दूसरे customer की row पर पहुँच सकता है। ग़लत key से crash नहीं होता, ऐसा चुपचाप वाला bug होता है।</p>",
          hg: "<p>Tickets close hote hain aur naye aate hain, isliye list har samay badalti hai. React key se purani rows ko nayi rows se milata hai. Galat key ho to ek row mein likha note doosre customer ki row par pahunch sakta hai. Galat key se crash nahi hota, aisa chupchaap wala bug hota hai.</p>"
        },
        analogy: {
          en: "<p>Railway coaches have a number painted on them. If a coach is detached, passengers still find their coach by number. If you identified coaches only by their position in the train, everyone would walk into the wrong one.</p>",
          hi: "<p>Train के डिब्बों पर नंबर लिखा होता है। एक डिब्बा हट जाए तो भी यात्री नंबर से अपना डिब्बा ढूँढ लेते हैं। अगर डिब्बे की पहचान सिर्फ़ train में उसकी position से होती, तो सब ग़लत डिब्बे में चढ़ जाते।</p>",
          hg: "<p>Train ke dibbon par number likha hota hai. Ek dibba hat jaaye to bhi yaatri number se apna dibba dhundh lete hain. Agar dibbe ki pehchaan sirf train mein uski position se hoti, to sab galat dibbe mein chadh jaate.</p>"
        },
        lines: [
          {
            code: "return items.map((t) => \"key=\" + t.id + \" row=#\" + t.id + \" \" + t.customer);",
            note: {
              en: "<code>map</code> turns one array into another: one row per ticket. Each row carries <code>key = t.id</code>, a value that belongs to the ticket and does not change.",
              hi: "<code>map</code> एक array से दूसरा array बनाता है: हर ticket की एक row। हर row के साथ <code>key = t.id</code> जाती है, जो ticket की अपनी है और बदलती नहीं।",
              hg: "<code>map</code> ek array se doosra array banata hai: har ticket ki ek row. Har row ke saath <code>key = t.id</code> jaati hai, jo ticket ki apni hai aur badalti nahi."
            }
          },
          {
            code: "const byIndex = (t, i) => i;",
            note: {
              en: "An index key says \"this is the row in position 0\". When the list shrinks, a different ticket moves into position 0 and inherits the old row's state.",
              hi: "Index key कहती है \"यह position 0 वाली row है\"। List छोटी होने पर कोई दूसरा ticket position 0 पर आ जाता है और पुरानी row की state ले लेता है।",
              hg: "Index key kehti hai \"ye position 0 wali row hai\". List chhoti hone par koi doosra ticket position 0 par aa jaata hai aur purani row ki state le leta hai."
            }
          },
          {
            code: "const afterClose = tickets.slice(1);",
            note: {
              en: "Ticket #501 is closed, so Ravi is now first in the list. This is the moment where keys matter.",
              hi: "Ticket #501 close हो गया, इसलिए अब Ravi list में पहला है। यही वह मौका है जहाँ keys मायने रखती हैं।",
              hg: "Ticket #501 close ho gaya, isliye ab Ravi list mein pehla hai. Yahi woh mauka hai jahan keys maayne rakhti hain."
            }
          },
          {
            code: "console.log(\"key = index: \" + showNotes(afterClose, byIndex, notesByIndex));",
            note: {
              en: "With index keys, Asha's note <code>call back at 5pm</code> now shows on Ravi's row. With id keys, Ravi's row stays empty, which is correct.",
              hi: "Index keys के साथ Asha का note <code>call back at 5pm</code> अब Ravi की row पर दिखता है। Id keys के साथ Ravi की row खाली रहती है, जो सही है।",
              hg: "Index keys ke saath Asha ka note <code>call back at 5pm</code> ab Ravi ki row par dikhta hai. Id keys ke saath Ravi ki row khaali rehti hai, jo sahi hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Using the array index as the key for a list that can shrink, grow or reorder.</li><li>Forgetting the key, or using <code>Math.random()</code> as the key. A new key on every render makes React throw away and rebuild every row.</li><li>Writing <code>{count &amp;&amp; &lt;Badge /&gt;}</code>. When <code>count</code> is <code>0</code>, the screen prints a literal <code>0</code>. Write <code>count &gt; 0 &amp;&amp; ...</code>.</li></ul>",
          hi: "<ul><li>ऐसी list में array index को key बनाना जो छोटी, बड़ी या reorder हो सकती है।</li><li>Key भूल जाना, या <code>Math.random()</code> को key बनाना। हर render पर नई key हो तो React हर row फेंककर दोबारा बनाता है।</li><li><code>{count &amp;&amp; &lt;Badge /&gt;}</code> लिखना। <code>count</code> <code>0</code> हो तो screen पर सच में <code>0</code> छप जाता है। <code>count &gt; 0 &amp;&amp; ...</code> लिखो।</li></ul>",
          hg: "<ul><li>Aisi list mein array index ko key banana jo chhoti, badi ya reorder ho sakti hai.</li><li>Key bhool jaana, ya <code>Math.random()</code> ko key banana. Har render par nayi key ho to React har row phenkkar dobara banata hai.</li><li><code>{count &amp;&amp; &lt;Badge /&gt;}</code> likhna. <code>count</code> <code>0</code> ho to screen par sach mein <code>0</code> chhap jaata hai. <code>count &gt; 0 &amp;&amp; ...</code> likho.</li></ul>"
        },
        whenToUse: {
          en: "<p>Always give list items a key, and take it from your data (the database id). An index key is fine only for a static list that never changes order or length.</p>",
          hi: "<p>List items को हमेशा key दो, और वह अपने data से लो (database id)। Index key सिर्फ़ ऐसी static list में ठीक है जिसका क्रम या length कभी नहीं बदलता।</p>",
          hg: "<p>List items ko hamesha key do, aur woh apne data se lo (database id). Index key sirf aisi static list mein theek hai jiska kram ya length kabhi nahi badalta.</p>"
        },
        exercise: {
          task: {
            en: "<p>Show the zero trap in plain JavaScript. Write <code>badgeWrong(count)</code> using <code>count &amp;&amp; ...</code> and <code>badgeRight(count)</code> using <code>count &gt; 0 ? ... : null</code>. Call the first with <code>0</code> and the second with <code>0</code> and <code>3</code>.</p>",
            hi: "<p>Zero वाला trap सादे JavaScript में दिखाओ। <code>count &amp;&amp; ...</code> से <code>badgeWrong(count)</code> और <code>count &gt; 0 ? ... : null</code> से <code>badgeRight(count)</code> लिखो। पहले को <code>0</code> के साथ और दूसरे को <code>0</code> और <code>3</code> के साथ call करो।</p>",
            hg: "<p>Zero wala trap saade JavaScript mein dikhao. <code>count &amp;&amp; ...</code> se <code>badgeWrong(count)</code> aur <code>count &gt; 0 ? ... : null</code> se <code>badgeRight(count)</code> likho. Pehle ko <code>0</code> ke saath aur doosre ko <code>0</code> aur <code>3</code> ke saath call karo.</p>"
          },
          hint: {
            en: "<p><code>0 &amp;&amp; anything</code> gives back <code>0</code>, because <code>0</code> is falsy and <code>&amp;&amp;</code> returns the first falsy value.</p>",
            hi: "<p><code>0 &amp;&amp; anything</code> का नतीजा <code>0</code> होता है, क्योंकि <code>0</code> falsy है और <code>&amp;&amp;</code> पहली falsy value लौटा देता है।</p>",
            hg: "<p><code>0 &amp;&amp; anything</code> ka nateeja <code>0</code> hota hai, kyunki <code>0</code> falsy hai aur <code>&amp;&amp;</code> pehli falsy value lauta deta hai.</p>"
          },
          solution: {
            lang: "javascript",
            caption: {
              en: "One possible solution",
              hi: "एक संभव solution",
              hg: "Ek sambhav solution"
            },
            check: "run",
            src: "const open = 0;\nconst closed = 3;\n\n// What {count && <Badge />} gives back when the left side is 0\nfunction badgeWrong(count) {\n  return count && \"<Badge \" + count + \">\";\n}\nfunction badgeRight(count) {\n  return count > 0 ? \"<Badge \" + count + \">\" : null;\n}\n\nconsole.log(badgeWrong(open));\nconsole.log(badgeRight(open));\nconsole.log(badgeRight(closed));",
            expected: "0\nnull\n<Badge 3>"
          }
        },
        quiz: {
          q: {
            en: "A ticket list can lose rows when tickets are closed. Which key is the best choice for each row?",
            hi: "Tickets close होने पर list से rows घट सकती हैं। हर row के लिए सबसे अच्छी key कौन-सी है?",
            hg: "Tickets close hone par list se rows ghat sakti hain. Har row ke liye sabse achhi key kaunsi hai?"
          },
          options: [
            {
              en: "The ticket id from the database",
              hi: "Database से आई ticket id",
              hg: "Database se aayi ticket id"
            },
            {
              en: "The row's index in the array",
              hi: "Array में row का index",
              hg: "Array mein row ka index"
            },
            {
              en: "<code>Math.random()</code>",
              hi: "<code>Math.random()</code> से बनी key",
              hg: "<code>Math.random()</code> se bani key"
            },
            {
              en: "The customer name",
              hi: "Customer का नाम",
              hg: "Customer ka naam"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>The id belongs to the ticket and is unique, so React can match each row to the same ticket after every change. An index shifts when rows are removed, a random value changes on every render, and a name can repeat.</p>",
            hi: "<p>Id ticket की अपनी है और अलग-अलग है, इसलिए हर बदलाव के बाद React हर row को उसी ticket से मिला सकता है। Rows हटने पर index खिसक जाता है, random value हर render पर बदलती है, और नाम दोहराया जा सकता है।</p>",
            hg: "<p>Id ticket ki apni hai aur alag-alag hai, isliye har badlaav ke baad React har row ko usi ticket se mila sakta hai. Rows hatne par index khisak jaata hai, random value har render par badalti hai, aur naam dohraya ja sakta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Show a list with <code>items.map(...)</code> and handle the empty case first.</li><li>Each element needs a key that is stable and unique among siblings: the database id.</li><li>Index keys can move a row's state onto the wrong item; <code>count &amp;&amp; ...</code> prints <code>0</code>.</li></ul>",
          hi: "<ul><li>List <code>items.map(...)</code> से दिखाओ और खाली case पहले सँभालो।</li><li>हर element को ऐसी key चाहिए जो बदलती न हो और siblings में अलग हो: database id।</li><li>Index keys एक row की state ग़लत item पर पहुँचा सकती हैं; <code>count &amp;&amp; ...</code> में <code>0</code> छप जाता है।</li></ul>",
          hg: "<ul><li>List <code>items.map(...)</code> se dikhao aur khaali case pehle sambhalo.</li><li>Har element ko aisi key chahiye jo badalti na ho aur siblings mein alag ho: database id.</li><li>Index keys ek row ki state galat item par pahuncha sakti hain; <code>count &amp;&amp; ...</code> mein <code>0</code> chhap jaata hai.</li></ul>"
        }
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "Empty state, keyed rows, and what an index key does when a ticket closes (runs on Node)",
            hi: "खाली state, keys वाली rows, और ticket close होने पर index key क्या करती है (Node पर चलता है)",
            hg: "Khaali state, keys wali rows, aur ticket close hone par index key kya karti hai (Node par chalta hai)"
          },
          check: "run",
          src: "const tickets = [\n  { id: 501, customer: \"Asha\" },\n  { id: 502, customer: \"Ravi\" },\n  { id: 503, customer: \"Meena\" },\n];\n\n// What <TicketList> does: an empty message, or one row per ticket with a key\nfunction ticketList(items) {\n  if (items.length === 0) return [\"No tickets yet.\"];\n  return items.map((t) => \"key=\" + t.id + \" row=#\" + t.id + \" \" + t.customer);\n}\nconsole.log(ticketList(tickets).join(\"\\n\"));\nconsole.log(ticketList([]).join(\"\\n\"));\n\n// Each row remembers a note the agent typed. React keeps that state under the row's key.\nfunction showNotes(list, keyOf, notes) {\n  return list.map((t, i) => t.customer + \": \" + (notes[keyOf(t, i)] ?? \"(empty)\")).join(\" | \");\n}\nconst byId = (t) => t.id;\nconst byIndex = (t, i) => i;\n\n// The agent types a note on the FIRST row (Asha, #501) ...\nconst notesById = { 501: \"call back at 5pm\" };\nconst notesByIndex = { 0: \"call back at 5pm\" };\n// ... then #501 is closed and disappears from the list\nconst afterClose = tickets.slice(1);\n\nconsole.log(\"key = id:    \" + showNotes(afterClose, byId, notesById));\nconsole.log(\"key = index: \" + showNotes(afterClose, byIndex, notesByIndex));",
          expected: "key=501 row=#501 Asha\nkey=502 row=#502 Ravi\nkey=503 row=#503 Meena\nNo tickets yet.\nkey = id:    Ravi: (empty) | Meena: (empty)\nkey = index: Ravi: call back at 5pm | Meena: (empty)"
        }
      ]
    },
    {
      id: "state-snapshots",
      depth: "short",
      title: {
        en: "State and re-rendering",
        hi: "State और re-rendering",
        hg: "State aur re-rendering"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lessons 1 and 2 only showed data that came in through props. A ticket counter or a typed note changes while the user works, so the component needs memory of its own. That memory is <b>state</b>, and changing it makes the function run again with a new description.</p>",
          hi: "<p>Lesson 1 और 2 में सिर्फ़ वही data दिखा जो props से आया। Ticket counter या लिखा हुआ note user के काम करते समय बदलता है, इसलिए component को अपनी याददाश्त चाहिए। वही याददाश्त <b>state</b> है, और उसे बदलने पर function नए description के साथ फिर चलता है।</p>",
          hg: "<p>Lesson 1 aur 2 mein sirf wahi data dikha jo props se aaya. Ticket counter ya likha hua note user ke kaam karte samay badalta hai, isliye component ko apni yaaddaasht chahiye. Wahi yaaddaasht <b>state</b> hai, aur use badalne par function naye description ke saath phir chalta hai.</p>"
        },
        what: {
          en: "<p><code>useState(initial)</code> gives you the current value and a setter. Calling the setter does not change the variable you already have. It <b>asks React to render again</b>. Inside one render, the value is a fixed <b>snapshot</b>.</p>",
          hi: "<p><code>useState(initial)</code> आपको मौजूदा value और एक setter देता है। Setter call करने से आपके पास पहले से मौजूद variable नहीं बदलता। वह <b>React से दोबारा render करने को कहता है</b>। एक render के अंदर value एक तय <b>snapshot</b> होती है।</p>",
          hg: "<p><code>useState(initial)</code> aapko maujooda value aur ek setter deta hai. Setter call karne se aapke paas pehle se maujood variable nahi badalta. Woh <b>React se dobara render karne ko kehta hai</b>. Ek render ke andar value ek tay <b>snapshot</b> hoti hai.</p>"
        },
        why: {
          en: "<p>This is the most asked React fundamental. People write <code>setCount(count + 1)</code> three times and expect 3, but get 1. Once you see that every render has its own snapshot, the updater form <code>setCount(c =&gt; c + 1)</code> makes sense.</p>",
          hi: "<p>यह React की सबसे ज़्यादा पूछी जाने वाली बुनियादी बात है। लोग <code>setCount(count + 1)</code> तीन बार लिखते हैं और 3 की उम्मीद करते हैं, पर मिलता 1 है। जब समझ आ जाए कि हर render का अपना snapshot है, तब updater form <code>setCount(c =&gt; c + 1)</code> का मतलब साफ़ हो जाता है।</p>",
          hg: "<p>Ye React ki sabse zyaada puchhi jaane wali buniyaadi baat hai. Log <code>setCount(count + 1)</code> teen baar likhte hain aur 3 ki ummeed karte hain, par milta 1 hai. Jab samajh aa jaaye ki har render ka apna snapshot hai, tab updater form <code>setCount(c =&gt; c + 1)</code> ka matlab saaf ho jaata hai.</p>"
        },
        analogy: {
          en: "<p>A photocopy of the duty roster. When the shift starts, you get a photocopy. If the supervisor writes three \"add one agent\" notes on your old copy, each note is based on the same old numbers. Writing \"one more than whatever the register says now\" is the updater form.</p>",
          hi: "<p>Duty roster की photocopy। Shift शुरू होने पर आपको एक photocopy मिलती है। Supervisor आपकी पुरानी copy पर तीन बार \"एक agent और जोड़ो\" लिखे, तो हर note उन्हीं पुराने आँकड़ों पर टिका है। \"Register में अभी जो है उससे एक ज़्यादा\" लिखना ही updater form है।</p>",
          hg: "<p>Duty roster ki photocopy. Shift shuru hone par aapko ek photocopy milti hai. Supervisor aapki purani copy par teen baar \"ek agent aur jodo\" likhe, to har note unhi purane aankdon par tika hai. \"Register mein abhi jo hai usse ek zyaada\" likhna hi updater form hai.</p>"
        },
        lines: [
          {
            code: "const setState = (next) => queue.push(next); // only queues; never changes count right now",
            note: {
              en: "The setter only <b>queues</b> the new value. The variable <code>count</code> that the handler already holds stays as it is.",
              hi: "Setter सिर्फ़ नई value को <b>queue</b> में डालता है। Handler के पास पहले से मौजूद variable <code>count</code> वैसा ही रहता है।",
              hg: "Setter sirf nayi value ko <b>queue</b> mein daalta hai. Handler ke paas pehle se maujood variable <code>count</code> waisa hi rehta hai."
            }
          },
          {
            code: "setCount((c) => c + 1); // updater: gets the latest queued value",
            note: {
              en: "Passing a function stores a <b>recipe</b> instead of a number. When React applies the queue, the function receives the value built so far.",
              hi: "Function देने पर number की जगह एक <b>recipe</b> रखी जाती है। Queue चलाते समय React इस function को अब तक बनी value देता है।",
              hg: "Function dene par number ki jagah ek <b>recipe</b> rakhi jaati hai. Queue chalate samay React is function ko ab tak bani value deta hai."
            }
          },
          {
            code: "console.log(\"inside the handler, count is still\", count);",
            note: {
              en: "Prints <code>0</code>. Even after three setter calls, <code>count</code> inside this handler never changes. That is the snapshot.",
              hi: "<code>0</code> छपता है। तीन setter calls के बाद भी इस handler के अंदर <code>count</code> नहीं बदलता। यही snapshot है।",
              hg: "<code>0</code> chhapta hai. Teen setter calls ke baad bhi is handler ke andar <code>count</code> nahi badalta. Yahi snapshot hai."
            }
          },
          {
            code: "for (const next of queue) state = typeof next === \"function\" ? next(state) : next;",
            note: {
              en: "The queue is applied in order: <code>1</code>, then <code>1</code> again (a plain value replaces the state), then the updater turns <code>1</code> into <code>2</code>. One re-render follows, so <code>renders</code> ends at 2 (first render plus one).",
              hi: "Queue क्रम से चलती है: <code>1</code>, फिर दोबारा <code>1</code> (सादी value state को replace करती है), फिर updater <code>1</code> को <code>2</code> बना देता है। उसके बाद एक ही re-render होता है, इसलिए <code>renders</code> 2 पर रुकता है (पहला render और एक और)।",
              hg: "Queue kram se chalti hai: <code>1</code>, phir dobara <code>1</code> (saadi value state ko replace karti hai), phir updater <code>1</code> ko <code>2</code> bana deta hai. Uske baad ek hi re-render hota hai, isliye <code>renders</code> 2 par rukta hai (pehla render aur ek aur)."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Expecting the variable to change right after calling the setter. It changes only in the next render.</li><li>Using <code>setCount(count + 1)</code> several times in one handler. Use the updater form when the new value depends on the old one.</li><li>Storing a value in state that you can calculate during render (such as a total). It will drift out of sync.</li></ul>",
          hi: "<ul><li>Setter call करते ही variable बदलने की उम्मीद करना। वह अगले render में ही बदलता है।</li><li>एक handler में <code>setCount(count + 1)</code> कई बार लिखना। नई value पुरानी पर टिकी हो तो updater form use करो।</li><li>ऐसी value को state में रखना जो render के समय निकाली जा सकती है (जैसे total)। वह sync से बाहर हो जाएगी।</li></ul>",
          hg: "<ul><li>Setter call karte hi variable badalne ki ummeed karna. Woh agle render mein hi badalta hai.</li><li>Ek handler mein <code>setCount(count + 1)</code> kai baar likhna. Nayi value purani par tiki ho to updater form use karo.</li><li>Aisi value ko state mein rakhna jo render ke samay nikaali ja sakti hai (jaise total). Woh sync se bahar ho jaayegi.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use state for values that change over time and change what the screen shows. Use the updater form when the next value depends on the previous one. A plain value is fine when it does not, for example a text field's new text.</p>",
          hi: "<p>State उन values के लिए use करो जो समय के साथ बदलती हैं और screen बदल देती हैं। अगली value पिछली पर टिकी हो तो updater form use करो। न टिकी हो तो सादी value ठीक है, जैसे text field का नया text।</p>",
          hg: "<p>State un values ke liye use karo jo samay ke saath badalti hain aur screen badal deti hain. Agli value pichhli par tiki ho to updater form use karo. Na tiki ho to saadi value theek hai, jaise text field ka naya text.</p>"
        },
        exercise: {
          task: {
            en: "<p>The agent closes three tickets in one click, starting from <code>count = 10</code>. Queue three updaters that each subtract 1, apply the queue, and print the new state and the old snapshot.</p>",
            hi: "<p>Agent एक click में तीन tickets close करता है, <code>count = 10</code> से शुरू करके। तीन updaters queue करो जो हर एक 1 घटाए, queue चलाओ, और नया state और पुराना snapshot print करो।</p>",
            hg: "<p>Agent ek click mein teen tickets close karta hai, <code>count = 10</code> se shuru karke. Teen updaters queue karo jo har ek 1 ghataye, queue chalao, aur naya state aur purana snapshot print karo.</p>"
          },
          hint: {
            en: "<p>Each updater receives the result of the previous one, so <code>10 - 1 - 1 - 1</code> gives 7.</p>",
            hi: "<p>हर updater को पिछले का नतीजा मिलता है, इसलिए <code>10 - 1 - 1 - 1</code> से 7 आता है।</p>",
            hg: "<p>Har updater ko pichhle ka nateeja milta hai, isliye <code>10 - 1 - 1 - 1</code> se 7 aata hai.</p>"
          },
          solution: {
            lang: "javascript",
            caption: {
              en: "One possible solution",
              hi: "एक संभव solution",
              hg: "Ek sambhav solution"
            },
            check: "run",
            src: "let state = 10;\nlet queue = [];\n\nconst setCount = (next) => queue.push(next);\nfunction flush() {\n  for (const next of queue) state = typeof next === \"function\" ? next(state) : next;\n  queue = [];\n}\n\n// The agent closes three tickets in one click, from a snapshot where count = 10\nconst count = 10;\nsetCount((c) => c - 1);\nsetCount((c) => c - 1);\nsetCount((c) => c - 1);\nflush();\nconsole.log(\"open tickets:\", state);\nconsole.log(\"snapshot count:\", count);",
            expected: "open tickets: 7\nsnapshot count: 10"
          }
        },
        quiz: {
          q: {
            en: "A click handler runs <code>setCount(count + 1)</code> three times when <code>count</code> is 0. What is <code>count</code> in the next render?",
            hi: "Click handler में <code>count</code> 0 होने पर <code>setCount(count + 1)</code> तीन बार चलता है। अगले render में <code>count</code> क्या होगा?",
            hg: "Click handler mein <code>count</code> 0 hone par <code>setCount(count + 1)</code> teen baar chalta hai. Agle render mein <code>count</code> kya hoga?"
          },
          options: [
            {
              en: "It throws an error for repeated updates",
              hi: "बार-बार update पर error आता है",
              hg: "Baar-baar update par error aata hai"
            },
            {
              en: "3, because React adds them up",
              hi: "3, क्योंकि React सबको जोड़ देता है",
              hg: "3, kyunki React sabko jod deta hai"
            },
            {
              en: "0, because the setter does nothing outside an effect",
              hi: "0, क्योंकि setter effect के बाहर कुछ नहीं करता",
              hg: "0, kyunki setter effect ke bahar kuch nahi karta"
            },
            {
              en: "1, because each call uses the same snapshot of 0",
              hi: "1, क्योंकि हर call 0 वाला वही snapshot use करता है",
              hg: "1, kyunki har call 0 wala wahi snapshot use karta hai"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>All three calls compute <code>0 + 1</code> from the same snapshot, so they queue the plain value 1 three times. To get 3, use <code>setCount(c =&gt; c + 1)</code> three times.</p>",
            hi: "<p>तीनों calls उसी snapshot से <code>0 + 1</code> निकालते हैं, इसलिए सादी value 1 तीन बार queue होती है। 3 पाने के लिए <code>setCount(c =&gt; c + 1)</code> तीन बार लिखो।</p>",
            hg: "<p>Teeno calls usi snapshot se <code>0 + 1</code> nikaalte hain, isliye saadi value 1 teen baar queue hoti hai. 3 paane ke liye <code>setCount(c =&gt; c + 1)</code> teen baar likho.</p>"
          }
        },
        recap: {
          en: "<ul><li>State is the component's own memory; changing it with the setter makes React render again.</li><li>Inside one render the value is a snapshot; the setter only queues the next value.</li><li>Use the updater form <code>c =&gt; c + 1</code> when the new value depends on the old one.</li></ul>",
          hi: "<ul><li>State component की अपनी याददाश्त है; setter से बदलने पर React फिर render करता है।</li><li>एक render के अंदर value snapshot होती है; setter सिर्फ़ अगली value queue करता है।</li><li>नई value पुरानी पर टिकी हो तो updater form <code>c =&gt; c + 1</code> use करो।</li></ul>",
          hg: "<ul><li>State component ki apni yaaddaasht hai; setter se badalne par React phir render karta hai.</li><li>Ek render ke andar value snapshot hoti hai; setter sirf agli value queue karta hai.</li><li>Nayi value purani par tiki ho to updater form <code>c =&gt; c + 1</code> use karo.</li></ul>"
        }
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "A tiny useState model: queued updates, snapshots and one re-render (runs on Node)",
            hi: "एक छोटा useState model: queued updates, snapshots और एक re-render (Node पर चलता है)",
            hg: "Ek chhota useState model: queued updates, snapshots aur ek re-render (Node par chalta hai)"
          },
          check: "run",
          src: "// A tiny model of useState. React keeps the value outside your function.\nlet state = 0;\nlet queue = [];\nlet renders = 0;\nlet handler;\n\nfunction useState(initial) {\n  if (renders === 0) state = initial;\n  const setState = (next) => queue.push(next); // only queues; never changes count right now\n  return [state, setState];\n}\n\nfunction OpenTicketsCounter() {\n  const [count, setCount] = useState(0);\n  renders++;\n  handler = () => {\n    setCount(count + 1);    // computed from this render's snapshot: 0 + 1\n    setCount(count + 1);    // 0 + 1 again\n    setCount((c) => c + 1); // updater: gets the latest queued value\n    console.log(\"inside the handler, count is still\", count);\n  };\n  return \"Open tickets: \" + count;\n}\n\n// After the handler finishes, React applies the queue in order, then renders once\nfunction flush() {\n  for (const next of queue) state = typeof next === \"function\" ? next(state) : next;\n  queue = [];\n}\n\nconsole.log(OpenTicketsCounter());\nhandler();\nflush();\nconsole.log(OpenTicketsCounter());\nconsole.log(\"renders:\", renders);",
          expected: "Open tickets: 0\ninside the handler, count is still 0\nOpen tickets: 2\nrenders: 2"
        }
      ]
    },
    {
      id: "immutable-state",
      depth: "short",
      title: {
        en: "Immutable updates and reducers",
        hi: "Immutable updates और reducers",
        hg: "Immutable updates aur reducers"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 3 showed that a setter asks for a new render. But if the new value is the same object (<code>Object.is</code>), React skips the update. For tickets in an array, that means you must build a new array, never edit the old one. A reducer is the clean way to do this.</p>",
          hi: "<p>Lesson 3 में दिखा कि setter नया render माँगता है। पर नई value वही object हो (<code>Object.is</code>) तो React update छोड़ देता है। Array में रखी tickets के लिए इसका मतलब है कि नया array बनाओ, पुराने को कभी edit मत करो। Reducer यह काम साफ़ तरीके से करने का तरीका है।</p>",
          hg: "<p>Lesson 3 mein dikha ki setter naya render maangta hai. Par nayi value wahi object ho (<code>Object.is</code>) to React update chhod deta hai. Array mein rakhi tickets ke liye iska matlab hai ki naya array banao, purane ko kabhi edit mat karo. Reducer ye kaam saaf tareeke se karne ka tareeka hai.</p>"
        },
        what: {
          en: "<p>Treat state as <b>read-only</b>. To change a list, produce a copy: <code>[...list, x]</code> to add, <code>map</code> to change one item, <code>filter</code> to remove. A <b>reducer</b> is a function <code>(state, action) =&gt; newState</code> that holds all these changes in one place.</p>",
          hi: "<p>State को <b>read-only</b> मानो। List बदलनी हो तो copy बनाओ: जोड़ने के लिए <code>[...list, x]</code>, एक item बदलने के लिए <code>map</code>, हटाने के लिए <code>filter</code>। <b>Reducer</b> एक function <code>(state, action) =&gt; newState</code> है जो ये सारे बदलाव एक जगह रखता है।</p>",
          hg: "<p>State ko <b>read-only</b> mano. List badalni ho to copy banao: jodne ke liye <code>[...list, x]</code>, ek item badalne ke liye <code>map</code>, hatane ke liye <code>filter</code>. <b>Reducer</b> ek function <code>(state, action) =&gt; newState</code> hai jo ye saare badlaav ek jagah rakhta hai.</p>"
        },
        why: {
          en: "<p>React compares the old and new state with <code>Object.is</code>, a check for the same reference. If you push into the existing array and set it back, the reference is the same, so React may skip the update and the screen stays old.</p>",
          hi: "<p>React पुरानी और नई state की <code>Object.is</code> से तुलना करता है, यानी एक ही reference है या नहीं। मौजूदा array में push करके उसे वापस set करो तो reference वही रहता है, इसलिए React update छोड़ सकता है और screen पुरानी रहती है।</p>",
          hg: "<p>React purani aur nayi state ki <code>Object.is</code> se tulna karta hai, yaani ek hi reference hai ya nahi. Maujooda array mein push karke use wapas set karo to reference wahi rehta hai, isliye React update chhod sakta hai aur screen purani rehti hai.</p>"
        },
        analogy: {
          en: "<p>A government file with stamps. You do not scratch out old entries. You photocopy the file, add the new stamp on the copy, and hand over the copy. Anyone holding the old file can still compare it with the new one and see what changed.</p>",
          hi: "<p>Stamps वाली सरकारी file। आप पुरानी entries काटते नहीं। File की photocopy करते हो, copy पर नई stamp लगाते हो और copy आगे देते हो। पुरानी file वाला कोई भी उसे नई से मिलाकर देख सकता है कि क्या बदला।</p>",
          hg: "<p>Stamps wali sarkaari file. Aap purani entries kaatte nahi. File ki photocopy karte ho, copy par nayi stamp lagate ho aur copy aage dete ho. Purani file wala koi bhi use nayi se milakar dekh sakta hai ki kya badla.</p>"
        },
        lines: [
          {
            code: "function ticketsReducer(tickets, action) {",
            note: {
              en: "A reducer takes the current list and an <b>action</b> (a small object that says what happened) and returns the next list. It does not change what it receives.",
              hi: "Reducer मौजूदा list और एक <b>action</b> (छोटा object जो बताता है कि क्या हुआ) लेता है और अगली list लौटाता है। वह जो पाता है उसे बदलता नहीं।",
              hg: "Reducer maujooda list aur ek <b>action</b> (chhota object jo batata hai ki kya hua) leta hai aur agli list lautata hai. Woh jo paata hai use badalta nahi."
            }
          },
          {
            code: "return tickets.map((t) => (t.id === action.id ? { ...t, status: \"Closed\" } : t));",
            note: {
              en: "Only the matching ticket gets a new object (<code>{ ...t, status }</code> is a copy with one field replaced). Every other ticket is returned as it is, the very same object.",
              hi: "सिर्फ़ मेल खाने वाले ticket को नया object मिलता है (<code>{ ...t, status }</code> एक copy है जिसमें एक field बदली गई)। बाकी हर ticket जैसा है वैसा ही, वही object लौटता है।",
              hg: "Sirf mel khane wale ticket ko naya object milta hai (<code>{ ...t, status }</code> ek copy hai jismein ek field badli gayi). Baaki har ticket jaisa hai waisa hi, wahi object lautta hai."
            }
          },
          {
            code: "console.log(\"untouched ticket is reused:\", Object.is(initial[1], afterClose[1]));",
            note: {
              en: "Prints <code>true</code>. Ravi's ticket is the same object, so a row wrapped in <code>React.memo</code> (Deep Dive) can skip re-rendering.",
              hi: "<code>true</code> छपता है। Ravi का ticket वही object है, इसलिए <code>React.memo</code> वाली row (Deep Dive) re-render छोड़ सकती है।",
              hg: "<code>true</code> chhapta hai. Ravi ka ticket wahi object hai, isliye <code>React.memo</code> wali row (Deep Dive) re-render chhod sakti hai."
            }
          },
          {
            code: "console.log(\"same reference after push:\", Object.is(before, initial));",
            note: {
              en: "Prints <code>true</code>: to React, nothing changed. A spread copy <code>[...initial, x]</code> gives <code>false</code>, a new array, which is the signal React needs.",
              hi: "<code>true</code> छपता है: React के लिए कुछ नहीं बदला। Spread copy <code>[...initial, x]</code> से <code>false</code> आता है, यानी नया array, और React को यही इशारा चाहिए।",
              hg: "<code>true</code> chhapta hai: React ke liye kuch nahi badla. Spread copy <code>[...initial, x]</code> se <code>false</code> aata hai, yaani naya array, aur React ko yahi ishaara chahiye."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Using <code>push</code>, <code>splice</code>, <code>sort</code> or <code>ticket.status = ...</code> directly on state. Use copies: spread, <code>map</code>, <code>filter</code>, <code>toSorted</code>.</li><li>Thinking the spread copy is deep. It is shallow: nested objects are still shared, so copy each level you change.</li><li>Putting side effects (API calls) inside a reducer. A reducer must only calculate the next state.</li></ul>",
          hi: "<ul><li>State पर सीधे <code>push</code>, <code>splice</code>, <code>sort</code> या <code>ticket.status = ...</code> चलाना। Copies use करो: spread, <code>map</code>, <code>filter</code>, <code>toSorted</code>।</li><li>Spread copy को deep समझना। वह shallow है: अंदर के objects अब भी दोनों copies में वही रहते हैं, इसलिए जिस level को बदलो उसकी copy बनाओ।</li><li>Reducer के अंदर side effects (API calls) डालना। Reducer को सिर्फ़ अगली state निकालनी चाहिए।</li></ul>",
          hg: "<ul><li>State par seedhe <code>push</code>, <code>splice</code>, <code>sort</code> ya <code>ticket.status = ...</code> chalana. Copies use karo: spread, <code>map</code>, <code>filter</code>, <code>toSorted</code>.</li><li>Spread copy ko deep samajhna. Woh shallow hai: andar ke objects ab bhi saajha rehte hain, isliye jis level ko badlo uski copy banao.</li><li>Reducer ke andar side effects (API calls) daalna. Reducer ko sirf agli state nikaalni chahiye.</li></ul>"
        },
        whenToUse: {
          en: "<p>Always copy when updating state. Reach for <code>useReducer</code> when one state has several kinds of change (add, close, remove), because the rules then live in one testable function. For a single field, <code>useState</code> is enough.</p>",
          hi: "<p>State update करते समय हमेशा copy बनाओ। जब एक state में कई तरह के बदलाव हों (add, close, remove) तब <code>useReducer</code> लो, क्योंकि तब नियम एक test हो सकने वाले function में रहते हैं। एक field के लिए <code>useState</code> काफ़ी है।</p>",
          hg: "<p>State update karte samay hamesha copy banao. Jab ek state mein kai tarah ke badlaav hon (add, close, remove) tab <code>useReducer</code> lo, kyunki tab niyam ek test ho sakne wale function mein rehte hain. Ek field ke liye <code>useState</code> kaafi hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write <code>assign(list, id, agent)</code> that returns a new list in which only the ticket with that id has its <code>agent</code> set. Prove the original list was not changed and that ticket 501 is reused.</p>",
            hi: "<p><code>assign(list, id, agent)</code> लिखो जो नई list लौटाए जिसमें सिर्फ़ उस id वाले ticket का <code>agent</code> set हो। साबित करो कि original list नहीं बदली और ticket 501 वही reuse हुआ।</p>",
            hg: "<p><code>assign(list, id, agent)</code> likho jo nayi list lautaye jismein sirf us id wale ticket ka <code>agent</code> set ho. Saabit karo ki original list nahi badli aur ticket 501 wahi reuse hua.</p>"
          },
          hint: {
            en: "<p>Use <code>list.map(...)</code> and return <code>{ ...t, agent }</code> only for the matching id.</p>",
            hi: "<p><code>list.map(...)</code> use करो और सिर्फ़ मेल खाने वाली id के लिए <code>{ ...t, agent }</code> लौटाओ।</p>",
            hg: "<p><code>list.map(...)</code> use karo aur sirf mel khane wali id ke liye <code>{ ...t, agent }</code> lautao.</p>"
          },
          solution: {
            lang: "javascript",
            caption: {
              en: "One possible solution",
              hi: "एक संभव solution",
              hg: "Ek sambhav solution"
            },
            check: "run",
            src: "const tickets = [\n  { id: 501, customer: \"Asha\", agent: null },\n  { id: 502, customer: \"Ravi\", agent: null },\n];\n\n// Immutable update: a new list, and a new object only for the changed ticket\nfunction assign(list, id, agent) {\n  return list.map((t) => (t.id === id ? { ...t, agent } : t));\n}\n\nconst next = assign(tickets, 502, \"Kiran\");\nconsole.log(tickets[1].agent);\nconsole.log(next[1].agent);\nconsole.log(Object.is(tickets[0], next[0]));",
            expected: "null\nKiran\ntrue"
          }
        },
        quiz: {
          q: {
            en: "Why can <code>tickets.push(t); setTickets(tickets)</code> leave the screen unchanged?",
            hi: "<code>tickets.push(t); setTickets(tickets)</code> से screen क्यों नहीं बदलती?",
            hg: "<code>tickets.push(t); setTickets(tickets)</code> se screen kyun nahi badalti?"
          },
          options: [
            {
              en: "<code>push</code> is not allowed on arrays in React",
              hi: "React में arrays पर <code>push</code> allowed नहीं है",
              hg: "React mein arrays par <code>push</code> allowed nahi hai"
            },
            {
              en: "The array is the same object, so <code>Object.is</code> sees no change",
              hi: "Array वही object है, इसलिए <code>Object.is</code> को कोई बदलाव नहीं दिखता",
              hg: "Array wahi object hai, isliye <code>Object.is</code> ko koi badlaav nahi dikhta"
            },
            {
              en: "<code>setTickets</code> only accepts functions",
              hi: "<code>setTickets</code> सिर्फ़ functions लेता है",
              hg: "<code>setTickets</code> sirf functions leta hai"
            },
            {
              en: "State updates only work inside <code>useEffect</code>",
              hi: "State updates सिर्फ़ <code>useEffect</code> के अंदर चलते हैं",
              hg: "State updates sirf <code>useEffect</code> ke andar chalte hain"
            }
          ],
          answer: 1,
          explain: {
            en: "<p><code>push</code> changes the array in place, so the reference stays the same. React compares references, finds no difference and may skip the render. Setting <code>[...tickets, t]</code> gives a new reference.</p>",
            hi: "<p><code>push</code> array को उसी जगह बदलता है, इसलिए reference वही रहता है। React references की तुलना करता है, फ़र्क़ नहीं पाता और render छोड़ सकता है। <code>[...tickets, t]</code> set करने से नया reference मिलता है।</p>",
            hg: "<p><code>push</code> array ko usi jagah badalta hai, isliye reference wahi rehta hai. React references ki tulna karta hai, fark nahi paata aur render chhod sakta hai. <code>[...tickets, t]</code> set karne se naya reference milta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>State is read-only: build a copy with spread, <code>map</code> or <code>filter</code>.</li><li>React compares with <code>Object.is</code>, so a mutated array looks unchanged.</li><li>A reducer <code>(state, action) =&gt; newState</code> keeps all list changes in one pure function.</li></ul>",
          hi: "<ul><li>State read-only है: spread, <code>map</code> या <code>filter</code> से copy बनाओ।</li><li>React <code>Object.is</code> से तुलना करता है, इसलिए mutate किया array बदला हुआ नहीं दिखता।</li><li>Reducer <code>(state, action) =&gt; newState</code> list के सारे बदलाव एक pure function में रखता है।</li></ul>",
          hg: "<ul><li>State read-only hai: spread, <code>map</code> ya <code>filter</code> se copy banao.</li><li>React <code>Object.is</code> se tulna karta hai, isliye mutate kiya array badla hua nahi dikhta.</li><li>Reducer <code>(state, action) =&gt; newState</code> list ke saare badlaav ek pure function mein rakhta hai.</li></ul>"
        }
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "A ticket reducer, immutable updates and the mutation trap (runs on Node)",
            hi: "Ticket reducer, immutable updates और mutation का trap (Node पर चलता है)",
            hg: "Ticket reducer, immutable updates aur mutation ka trap (Node par chalta hai)"
          },
          check: "run",
          src: "const initial = [\n  { id: 501, customer: \"Asha\", status: \"Open\" },\n  { id: 502, customer: \"Ravi\", status: \"Open\" },\n];\n\n// A reducer: (current list, action) -> NEW list. It never changes the list it receives.\nfunction ticketsReducer(tickets, action) {\n  switch (action.type) {\n    case \"added\":\n      return [...tickets, action.ticket];\n    case \"closed\":\n      return tickets.map((t) => (t.id === action.id ? { ...t, status: \"Closed\" } : t));\n    case \"removed\":\n      return tickets.filter((t) => t.id !== action.id);\n    default:\n      throw new Error(\"Unknown action: \" + action.type);\n  }\n}\n\nconst afterClose = ticketsReducer(initial, { type: \"closed\", id: 501 });\nconsole.log(\"original still open:\", initial[0].status);\nconsole.log(\"new list:\", !Object.is(initial, afterClose));\nconsole.log(\"closed ticket is a new object:\", !Object.is(initial[0], afterClose[0]));\nconsole.log(\"untouched ticket is reused:\", Object.is(initial[1], afterClose[1]));\n\n// The mutation trap: push changes the array but not its reference\nconst before = initial;\ninitial.push({ id: 503, customer: \"Meena\", status: \"Open\" });\nconsole.log(\"same reference after push:\", Object.is(before, initial));\nconsole.log(\"same reference after spread:\", Object.is(initial, [...initial, { id: 504 }]));",
          expected: "original still open: Open\nnew list: true\nclosed ticket is a new object: true\nuntouched ticket is reused: true\nsame reference after push: true\nsame reference after spread: false"
        }
      ]
    },
    {
      id: "effects-cleanup",
      depth: "short",
      title: {
        en: "Effects, dependencies and cleanup",
        hi: "Effects, dependencies और cleanup",
        hg: "Effects, dependencies aur cleanup"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 4 showed that React decides \"did it change?\" with <code>Object.is</code>. An effect uses the same check on its dependency list. Until now every component only drew things on the screen. Effects let a component also talk to the outside world: the network, a timer, a socket.</p>",
          hi: "<p>Lesson 4 में दिखा कि \"बदला या नहीं?\" React <code>Object.is</code> से तय करता है। Effect अपनी dependency list पर यही check लगाता है। अब तक हर component सिर्फ़ screen पर कुछ बनाता था। Effects से component बाहर की दुनिया से भी बात कर सकता है: network, timer, socket।</p>",
          hg: "<p>Lesson 4 mein dikha ki \"badla ya nahi?\" React <code>Object.is</code> se tay karta hai. Effect apni dependency list par yahi check lagata hai. Ab tak har component sirf screen par kuch banata tha. Effects se component bahar ki duniya se bhi baat kar sakta hai: network, timer, socket.</p>"
        },
        what: {
          en: "<p><code>useEffect(setup, deps)</code> runs <code>setup</code> <b>after</b> the screen is updated, to sync with something outside React. The <b>dependency array</b> says when to run it again. The function that <code>setup</code> returns is the <b>cleanup</b>: it runs before the next setup and when the component goes away.</p>",
          hi: "<p><code>useEffect(setup, deps)</code> screen update होने के <b>बाद</b> <code>setup</code> चलाता है, ताकि React के बाहर की किसी चीज़ से sync रहे। <b>Dependency array</b> बताता है कि इसे दोबारा कब चलाना है। <code>setup</code> जो function लौटाता है वह <b>cleanup</b> है: वह अगले setup से पहले और component हटने पर चलता है।</p>",
          hg: "<p><code>useEffect(setup, deps)</code> screen update hone ke <b>baad</b> <code>setup</code> chalata hai, taaki React ke bahar ki kisi cheez se sync rahe. <b>Dependency array</b> batata hai ki ise dobara kab chalana hai. <code>setup</code> jo function lautata hai woh <b>cleanup</b> hai: woh agle setup se pehle aur component hatne par chalta hai.</p>"
        },
        why: {
          en: "<p>Without cleanup, opening ticket after ticket would leave old subscriptions running, so messages arrive twice and memory grows. A wrong dependency list gives stale data or an endless loop. These are classic interview questions and common production bugs.</p>",
          hi: "<p>Cleanup न हो तो एक के बाद एक ticket खोलने पर पुरानी subscriptions चलती रहेंगी, messages दो बार आएँगे और memory बढ़ेगी। ग़लत dependency list से पुराना data या कभी न रुकने वाला loop मिलता है। ये interview के पुराने सवाल हैं और production के आम bugs भी।</p>",
          hg: "<p>Cleanup na ho to ek ke baad ek ticket kholne par purani subscriptions chalti rahengi, messages do baar aayenge aur memory badhegi. Galat dependency list se purana data ya kabhi na rukne wala loop milta hai. Ye interview ke purane sawaal hain aur production ke aam bugs bhi.</p>"
        },
        analogy: {
          en: "<p>Shifting your Wi-Fi to a new flat. You first cancel the old connection, then start the new one. If you only start the new one, you keep paying for both. Strict Mode is a friend who shifts you out and in once on day one, just to check that the cancel step works.</p>",
          hi: "<p>नए flat में Wi-Fi shift करना। पहले पुराना connection बंद करते हो, फिर नया शुरू करते हो। सिर्फ़ नया शुरू किया तो दोनों का बिल भरते रहोगे। Strict Mode एक दोस्त है जो पहले ही दिन आपको एक बार बाहर-अंदर shift करके देख लेता है कि बंद करने वाला step काम करता है।</p>",
          hg: "<p>Naye flat mein Wi-Fi shift karna. Pehle purana connection band karte ho, phir naya shuru karte ho. Sirf naya shuru kiya to dono ka bill bharte rahoge. Strict Mode ek dost hai jo pehle hi din aapko ek baar bahar-andar shift karke dekh leta hai ki band karne wala step kaam karta hai.</p>"
        },
        focus: {
          lang: "jsx",
          caption: {
            en: "The same pattern in a real component (display-only)",
            hi: "वही pattern असली component में (सिर्फ़ देखने के लिए)",
            hg: "Wahi pattern asli component mein (sirf dekhne ke liye)"
          },
          check: "none",
          src: "function TicketLive({ ticketId }) {\n  useEffect(() => {\n    const socket = new WebSocket(\"wss://crm.example.com/tickets/\" + ticketId);\n    return () => socket.close(); // cleanup: runs before the next setup and on unmount\n  }, [ticketId]); // re-run only when ticketId changes\n\n  return <p>Watching ticket #{ticketId}</p>;\n}"
        },
        lines: [
          {
            code: "function depsChanged(prev, next) {",
            note: {
              en: "React compares the new dependency list with the previous one, item by item, using <code>Object.is</code>. The first render has nothing to compare with, so the effect always runs.",
              hi: "React नई dependency list की पिछली से item-दर-item <code>Object.is</code> से तुलना करता है। पहले render में तुलना के लिए कुछ नहीं होता, इसलिए effect हमेशा चलता है।",
              hg: "React nayi dependency list ki pichhli se item-dar-item <code>Object.is</code> se tulna karta hai. Pehle render mein tulna ke liye kuch nahi hota, isliye effect hamesha chalta hai."
            }
          },
          {
            code: "if (cleanup) cleanup();",
            note: {
              en: "The old cleanup always runs <b>before</b> the new setup. This is the order: disconnect from ticket 501, then connect to ticket 502.",
              hi: "पुराना cleanup हमेशा नए setup से <b>पहले</b> चलता है। क्रम यह है: ticket 501 से disconnect, फिर ticket 502 से connect।",
              hg: "Purana cleanup hamesha naye setup se <b>pehle</b> chalta hai. Kram ye hai: ticket 501 se disconnect, phir ticket 502 se connect."
            }
          },
          {
            code: "console.log(Object.is({ status: \"Open\" }, { status: \"Open\" }));",
            note: {
              en: "Prints <code>false</code>. Two object literals are two different objects. If a dependency is an object written inside the component, the effect re-runs on every render.",
              hi: "<code>false</code> छपता है। दो object literals दो अलग objects हैं। Dependency अगर component के अंदर लिखा object हो, तो effect हर render पर चलता है।",
              hg: "<code>false</code> chhapta hai. Do object literals do alag objects hain. Dependency agar component ke andar likha object ho, to effect har render par chalta hai."
            }
          },
          {
            code: "const stop = watchTicket(501);",
            note: {
              en: "In development, Strict Mode runs setup, cleanup, then setup again on mount. If the effect breaks when run twice, the cleanup is missing or wrong. Production runs it once.",
              hi: "Development में Strict Mode mount पर setup, cleanup, फिर दोबारा setup चलाता है। Effect दो बार चलने पर टूटे तो cleanup छूटा है या ग़लत है। Production में यह एक ही बार चलता है।",
              hg: "Development mein Strict Mode mount par setup, cleanup, phir dobara setup chalata hai. Effect do baar chalne par toote to cleanup chhoota hai ya galat hai. Production mein ye ek hi baar chalta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Leaving out the dependency array, so the effect runs after every render, or hiding a missing dependency from the linter.</li><li>Forgetting cleanup for timers, sockets, listeners and requests.</li><li>Using an effect to calculate a value you can compute during render, or to react to a click that belongs in the click handler.</li></ul>",
          hi: "<ul><li>Dependency array छोड़ देना, जिससे effect हर render के बाद चलता है, या छूटी dependency को linter से छिपाना।</li><li>Timers, sockets, listeners और requests का cleanup भूल जाना।</li><li>ऐसी value निकालने के लिए effect लगाना जो render के समय निकल सकती है, या ऐसे click के लिए जो click handler में होना चाहिए।</li></ul>",
          hg: "<ul><li>Dependency array chhod dena, jisse effect har render ke baad chalta hai, ya chhooti dependency ko linter se chhipana.</li><li>Timers, sockets, listeners aur requests ka cleanup bhool jaana.</li><li>Aisi value nikaalne ke liye effect lagana jo render ke samay nikal sakti hai, ya aise click ke liye jo click handler mein hona chahiye.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use an effect to sync with something outside React: a subscription, a timer, a browser API, or a request when you are not using a data library. Do not use one to prepare data for display or to run code that belongs to a user action.</p>",
          hi: "<p>React के बाहर की चीज़ से sync रखने के लिए effect use करो: subscription, timer, browser API, या request जब आप data library नहीं लगा रहे। Display के लिए data तैयार करने या user के action वाले code के लिए effect मत लगाओ।</p>",
          hg: "<p>React ke bahar ki cheez se sync rakhne ke liye effect use karo: subscription, timer, browser API, ya request jab aap data library nahi laga rahe. Display ke liye data taiyaar karne ya user ke action wale code ke liye effect mat lagao.</p>"
        },
        exercise: {
          task: {
            en: "<p>An effect depends on <code>[status, agent]</code>. Print <code>run</code> or <code>skip</code> for each of these four renders: <code>Open/Meena</code>, <code>Open/Meena</code>, <code>Closed/Meena</code>, <code>Closed/Kiran</code>.</p>",
            hi: "<p>एक effect <code>[status, agent]</code> पर depend करता है। इन चार renders में से हर एक के लिए <code>run</code> या <code>skip</code> print करो: <code>Open/Meena</code>, <code>Open/Meena</code>, <code>Closed/Meena</code>, <code>Closed/Kiran</code>।</p>",
            hg: "<p>Ek effect <code>[status, agent]</code> par depend karta hai. In chaar renders mein se har ek ke liye <code>run</code> ya <code>skip</code> print karo: <code>Open/Meena</code>, <code>Open/Meena</code>, <code>Closed/Meena</code>, <code>Closed/Kiran</code>.</p>"
          },
          hint: {
            en: "<p>Compare each render's list with the previous one using <code>Object.is</code> on every item. The first render always runs.</p>",
            hi: "<p>हर render की list की पिछली से तुलना करो, हर item पर <code>Object.is</code> लगाकर। पहला render हमेशा चलता है।</p>",
            hg: "<p>Har render ki list ki pichhli se tulna karo, har item par <code>Object.is</code> lagakar. Pehla render hamesha chalta hai.</p>"
          },
          solution: {
            lang: "javascript",
            caption: {
              en: "One possible solution",
              hi: "एक संभव solution",
              hg: "Ek sambhav solution"
            },
            check: "run",
            src: "function depsChanged(prev, next) {\n  if (prev === null) return true;\n  return next.some((value, i) => !Object.is(value, prev[i]));\n}\n\n// The effect depends on [status, agent]. Each row is one render.\nconst renders = [\n  [\"Open\", \"Meena\"],\n  [\"Open\", \"Meena\"],\n  [\"Closed\", \"Meena\"],\n  [\"Closed\", \"Kiran\"],\n];\n\nlet prev = null;\nfor (const deps of renders) {\n  console.log(depsChanged(prev, deps) ? \"run\" : \"skip\");\n  prev = deps;\n}",
            expected: "run\nskip\nrun\nrun"
          }
        },
        quiz: {
          q: {
            en: "In development, why does Strict Mode run an effect's setup, cleanup and setup again?",
            hi: "Development में Strict Mode effect का setup, cleanup और फिर setup क्यों चलाता है?",
            hg: "Development mein Strict Mode effect ka setup, cleanup aur phir setup kyun chalata hai?"
          },
          options: [
            {
              en: "To make the page load faster",
              hi: "Page जल्दी load करने के लिए",
              hg: "Page jaldi load karne ke liye"
            },
            {
              en: "Because production also runs every effect twice",
              hi: "क्योंकि production भी हर effect दो बार चलाता है",
              hg: "Kyunki production bhi har effect do baar chalata hai"
            },
            {
              en: "To expose an effect whose cleanup is missing or wrong",
              hi: "ऐसा effect पकड़ने के लिए जिसका cleanup छूटा है या ग़लत है",
              hg: "Aisa effect pakadne ke liye jiska cleanup chhoota hai ya galat hai"
            },
            {
              en: "Because the dependency array is empty",
              hi: "क्योंकि dependency array खाली है",
              hg: "Kyunki dependency array khaali hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>Strict Mode is a development-only check. A correct effect behaves the same when run, cleaned up and run again. Production runs it once.</p>",
            hi: "<p>Strict Mode सिर्फ़ development की जाँच है। सही effect चलने, cleanup होने और फिर चलने पर भी एक जैसा रहता है। Production में यह एक बार चलता है।</p>",
            hg: "<p>Strict Mode sirf development ki jaanch hai. Sahi effect chalne, cleanup hone aur phir chalne par bhi ek jaisa rehta hai. Production mein ye ek baar chalta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>An effect syncs with something outside React and runs after the screen updates.</li><li>The dependency array (compared with <code>Object.is</code>) decides when it runs again; list every value the effect reads.</li><li>Return a cleanup: it runs before the next setup and on unmount. Strict Mode checks it in development.</li></ul>",
          hi: "<ul><li>Effect React के बाहर की चीज़ से sync रखता है और screen update के बाद चलता है।</li><li>Dependency array (<code>Object.is</code> से तुलना) तय करता है कि यह दोबारा कब चलेगा; effect जो भी value पढ़ता है उसे लिखो।</li><li>Cleanup लौटाओ: वह अगले setup से पहले और unmount पर चलता है। Strict Mode development में उसे जाँचता है।</li></ul>",
          hg: "<ul><li>Effect React ke bahar ki cheez se sync rakhta hai aur screen update ke baad chalta hai.</li><li>Dependency array (<code>Object.is</code> se tulna) tay karta hai ki ye dobara kab chalega; effect jo bhi value padhta hai use likho.</li><li>Cleanup lautao: woh agle setup se pehle aur unmount par chalta hai. Strict Mode development mein use jaanchta hai.</li></ul>"
        }
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "An effect lifecycle model: Object.is dependency check, cleanup order and Strict Mode (runs on Node)",
            hi: "Effect lifecycle का model: Object.is dependency check, cleanup का क्रम और Strict Mode (Node पर चलता है)",
            hg: "Effect lifecycle ka model: Object.is dependency check, cleanup ka kram aur Strict Mode (Node par chalta hai)"
          },
          check: "run",
          src: "const log = [];\nlet prevDeps = null;\nlet cleanup = null;\n\n// React re-runs an effect only when a dependency changed, compared one by one with Object.is\nfunction depsChanged(prev, next) {\n  if (prev === null) return true; // first render: always run\n  return next.some((value, i) => !Object.is(value, prev[i]));\n}\n\n// What React does after each render for: useEffect(setup, [ticketId])\nfunction runEffect(deps, setup) {\n  if (!depsChanged(prevDeps, deps)) return;\n  if (cleanup) cleanup();  // the OLD cleanup always runs before the new setup\n  cleanup = setup();\n  prevDeps = deps;\n}\n\nfunction watchTicket(id) {\n  log.push(\"subscribe #\" + id);\n  return () => log.push(\"unsubscribe #\" + id);\n}\n\nrunEffect([501], () => watchTicket(501)); // mount\nrunEffect([501], () => watchTicket(501)); // re-render, same id: skipped\nrunEffect([502], () => watchTicket(502)); // id changed: cleanup, then setup\ncleanup();                                // unmount: the last cleanup runs\nconsole.log(log.join(\"\\n\"));\n\n// A new object literal in the deps is a new reference every render\nconsole.log(Object.is({ status: \"Open\" }, { status: \"Open\" }));\n\n// Development only: Strict Mode runs setup, cleanup, setup on mount to expose a missing cleanup\nlog.length = 0;\nconst stop = watchTicket(501);\nstop();\nwatchTicket(501);\nconsole.log(log.join(\"\\n\"));",
          expected: "subscribe #501\nunsubscribe #501\nsubscribe #502\nunsubscribe #502\nfalse\nsubscribe #501\nunsubscribe #501\nsubscribe #501"
        }
      ]
    },
    {
      id: "controlled-forms",
      depth: "short",
      title: {
        en: "Controlled forms",
        hi: "Controlled forms: state से चलने वाले forms",
        hg: "Controlled forms: state se chalne wale forms"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 3 gave components memory (state) and lesson 4 taught copying objects with spread. A form is exactly that: one state object whose fields change as the agent types. Here we build the <code>NewTicketForm</code>; lesson 7 sends its data to the API.</p>",
          hi: "<p>Lesson 3 में components को याददाश्त (state) मिली और lesson 4 में spread से objects की copy बनाना सीखा। Form ठीक यही है: एक state object जिसके fields agent के type करते समय बदलते हैं। यहाँ हम <code>NewTicketForm</code> बनाते हैं; lesson 7 उसका data API को भेजेगा।</p>",
          hg: "<p>Lesson 3 mein components ko yaaddaasht (state) mili aur lesson 4 mein spread se objects ki copy banana seekha. Form theek yahi hai: ek state object jiske fields agent ke type karte samay badalte hain. Yahan hum <code>NewTicketForm</code> banate hain; lesson 7 uska data API ko bhejega.</p>"
        },
        what: {
          en: "<p>In a <b>controlled</b> input, the text shown comes from state (<code>value={form.customer}</code>) and every keystroke goes back to state through <code>onChange</code>. React state is the single source of truth, not the browser's input box.</p>",
          hi: "<p><b>Controlled</b> input में जो text दिखता है वह state से आता है (<code>value={form.customer}</code>) और हर keystroke <code>onChange</code> से वापस state में जाती है। सच का एक ही ठिकाना React state है, browser का input box नहीं।</p>",
          hg: "<p><b>Controlled</b> input mein jo text dikhta hai woh state se aata hai (<code>value={form.customer}</code>) aur har keystroke <code>onChange</code> se wapas state mein jaati hai. Sach ka ek hi thikaana React state hai, browser ka input box nahi.</p>"
        },
        why: {
          en: "<p>Because the state always knows what is typed, validation, an error message, a disabled button and clearing the form after saving are all simple state changes. It is like <code>@bind</code> in Blazor, with the update written out.</p>",
          hi: "<p>State को हमेशा पता रहता है कि क्या type हुआ है, इसलिए validation, error message, disabled button और save के बाद form खाली करना, सब सादे state बदलाव हैं। यह Blazor के <code>@bind</code> जैसा है, बस update लिखकर करना पड़ता है।</p>",
          hg: "<p>State ko hamesha pata rehta hai ki kya type hua hai, isliye validation, error message, disabled button aur save ke baad form khaali karna, sab saade state badlaav hain. Ye Blazor ke <code>@bind</code> jaisa hai, bas update likhkar karna padta hai.</p>"
        },
        analogy: {
          en: "<p>The display board at a cinema ticket counter. The board shows what the clerk's computer holds. Nobody types on the glass. Typing goes to the computer, and the board repaints from it.</p>",
          hi: "<p>Cinema के ticket counter का display board। Board वही दिखाता है जो clerk के computer में है। कोई शीशे पर type नहीं करता। Typing computer में जाती है, और board उसी से दोबारा बनता है।</p>",
          hg: "<p>Cinema ke ticket counter ka display board. Board wahi dikhata hai jo clerk ke computer mein hai. Koi sheeshe par type nahi karta. Typing computer mein jaati hai, aur board usi se dobara banta hai.</p>"
        },
        lines: [
          {
            code: "function setField(form, name, value) {",
            note: {
              en: "Every keystroke produces a <b>new</b> form object (lesson 4). <code>[name]</code> is a computed key, so one function handles every field.",
              hi: "हर keystroke एक <b>नया</b> form object बनाती है (lesson 4)। <code>[name]</code> computed key है, इसलिए एक ही function हर field सँभाल लेता है।",
              hg: "Har keystroke ek <b>naya</b> form object banati hai (lesson 4). <code>[name]</code> computed key hai, isliye ek hi function har field sambhal leta hai."
            }
          },
          {
            code: "if (form.customer.trim() === \"\") errors.customer = \"Customer is required\";",
            note: {
              en: "Validation is a plain function of the state. <code>trim()</code> stops a name made only of spaces from passing.",
              hi: "Validation state का एक सादा function है। <code>trim()</code> सिर्फ़ spaces वाले नाम को पास होने से रोकता है।",
              hg: "Validation state ka ek saada function hai. <code>trim()</code> sirf spaces wale naam ko pass hone se rokta hai."
            }
          },
          {
            code: "const errors = validate(form);",
            note: {
              en: "On submit, validate first. In a real component this is also where you call <code>e.preventDefault()</code>, so the browser does not reload the page.",
              hi: "Submit पर पहले validate करो। असली component में यहीं <code>e.preventDefault()</code> भी call होता है, ताकि browser page reload न करे।",
              hg: "Submit par pehle validate karo. Asli component mein yahin <code>e.preventDefault()</code> bhi call hota hai, taaki browser page reload na kare."
            }
          },
          {
            code: "body: { customer: form.customer.trim(), issue: form.issue.trim(), priority: form.priority },",
            note: {
              en: "On success, build exactly the object the API expects. Lesson 7 turns it into JSON with <code>JSON.stringify</code> for the POST.",
              hi: "सफल होने पर ठीक वही object बनाओ जो API माँगती है। Lesson 7 इसे POST के लिए <code>JSON.stringify</code> से JSON बनाएगा।",
              hg: "Safal hone par theek wahi object banao jo API maangti hai. Lesson 7 ise POST ke liye <code>JSON.stringify</code> se JSON banayega."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Setting <code>value</code> without <code>onChange</code>. The input becomes read-only and React warns.</li><li>Editing the state object in place (<code>form.customer = ...</code>). Always create a new object.</li><li>Forgetting that a number input still gives a <b>string</b> in <code>e.target.value</code>; convert it with <code>Number(...)</code>.</li></ul>",
          hi: "<ul><li><code>onChange</code> के बिना <code>value</code> लगाना। Input read-only हो जाता है और React warning देता है।</li><li>State object को उसी जगह बदलना (<code>form.customer = ...</code>)। हमेशा नया object बनाओ।</li><li>भूल जाना कि number input भी <code>e.target.value</code> में <b>string</b> देता है; उसे <code>Number(...)</code> से बदलो।</li></ul>",
          hg: "<ul><li><code>onChange</code> ke bina <code>value</code> lagana. Input read-only ho jaata hai aur React warning deta hai.</li><li>State object ko usi jagah badalna (<code>form.customer = ...</code>). Hamesha naya object banao.</li><li>Bhool jaana ki number input bhi <code>e.target.value</code> mein <b>string</b> deta hai; use <code>Number(...)</code> se badlo.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use controlled inputs for fields you validate or react to while the user types. For a simple submit-only form, an uncontrolled form read with <code>FormData</code> is fine. Form libraries such as React Hook Form are a team choice for big forms.</p>",
          hi: "<p>जिन fields को user के type करते समय validate करना हो या जिन पर react करना हो, उनके लिए controlled inputs use करो। सिर्फ़ submit वाले सादे form के लिए <code>FormData</code> से पढ़ा गया uncontrolled form ठीक है। बड़े forms के लिए React Hook Form जैसी libraries team का चुनाव हैं।</p>",
          hg: "<p>Jin fields ko user ke type karte samay validate karna ho ya jin par react karna ho, unke liye controlled inputs use karo. Sirf submit wale saade form ke liye <code>FormData</code> se padha gaya uncontrolled form theek hai. Bade forms ke liye React Hook Form jaisi libraries team ka chunaav hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write a <code>validate(form)</code> that reports <code>customer</code> as required (ignoring spaces) and checks that <code>priority</code> is one of <code>Low</code>, <code>Normal</code> or <code>High</code>. Print the errors, as JSON, for a good form and a bad form.</p>",
            hi: "<p>एक <code>validate(form)</code> लिखो जो <code>customer</code> को ज़रूरी बताए (spaces छोड़कर) और जाँचे कि <code>priority</code> <code>Low</code>, <code>Normal</code> या <code>High</code> में से है। एक सही form और एक ग़लत form के errors JSON में print करो।</p>",
            hg: "<p>Ek <code>validate(form)</code> likho jo <code>customer</code> ko zaroori bataye (spaces chhodkar) aur jaanche ki <code>priority</code> <code>Low</code>, <code>Normal</code> ya <code>High</code> mein se hai. Ek sahi form aur ek galat form ke errors JSON mein print karo.</p>"
          },
          hint: {
            en: "<p>Use <code>[\"Low\", \"Normal\", \"High\"].includes(form.priority)</code> and put a message in the <code>errors</code> object only when a rule fails.</p>",
            hi: "<p><code>[\"Low\", \"Normal\", \"High\"].includes(form.priority)</code> use करो और <code>errors</code> object में message तभी डालो जब कोई rule टूटे।</p>",
            hg: "<p><code>[\"Low\", \"Normal\", \"High\"].includes(form.priority)</code> use karo aur <code>errors</code> object mein message tabhi daalo jab koi rule toote.</p>"
          },
          solution: {
            lang: "javascript",
            caption: {
              en: "One possible solution",
              hi: "एक संभव solution",
              hg: "Ek sambhav solution"
            },
            check: "run",
            src: "function validate(form) {\n  const errors = {};\n  if (form.customer.trim() === \"\") errors.customer = \"Customer is required\";\n  if (![\"Low\", \"Normal\", \"High\"].includes(form.priority)) errors.priority = \"Pick Low, Normal or High\";\n  return errors;\n}\n\nconsole.log(JSON.stringify(validate({ customer: \"Asha\", priority: \"High\" })));\nconsole.log(JSON.stringify(validate({ customer: \"  \", priority: \"Urgent\" })));",
            expected: "{}\n{\"customer\":\"Customer is required\",\"priority\":\"Pick Low, Normal or High\"}"
          }
        },
        quiz: {
          q: {
            en: "What makes an input \"controlled\"?",
            hi: "Input को \"controlled\" क्या बनाता है?",
            hg: "Input ko \"controlled\" kya banata hai?"
          },
          options: [
            {
              en: "Its value comes from state and <code>onChange</code> updates that state",
              hi: "उसकी value state से आती है और <code>onChange</code> उस state को update करता है",
              hg: "Uski value state se aati hai aur <code>onChange</code> us state ko update karta hai"
            },
            {
              en: "It is wrapped in a <code>&lt;form&gt;</code> tag",
              hi: "वह <code>&lt;form&gt;</code> tag के अंदर है",
              hg: "Woh <code>&lt;form&gt;</code> tag ke andar hai"
            },
            {
              en: "It reads its value from a ref after submit",
              hi: "वह submit के बाद ref से अपनी value पढ़ता है",
              hg: "Woh submit ke baad ref se apni value padhta hai"
            },
            {
              en: "It has the <code>required</code> attribute",
              hi: "उस पर <code>required</code> attribute है",
              hg: "Us par <code>required</code> attribute hai"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>Controlled means React state owns the value. The input shows what the state holds, and typing goes through <code>onChange</code> into the state. Reading from a ref after submit is the uncontrolled style.</p>",
            hi: "<p>Controlled का मतलब है value का मालिक React state है। Input वही दिखाता है जो state में है, और typing <code>onChange</code> से state में जाती है। Submit के बाद ref से पढ़ना uncontrolled तरीका है।</p>",
            hg: "<p>Controlled ka matlab hai value ka malik React state hai. Input wahi dikhata hai jo state mein hai, aur typing <code>onChange</code> se state mein jaati hai. Submit ke baad ref se padhna uncontrolled tareeka hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>A controlled input shows <code>value</code> from state and updates state in <code>onChange</code>.</li><li>Keep the whole form in one state object and copy it on every change.</li><li>On submit, stop the reload, validate, then build the object for the API.</li></ul>",
          hi: "<ul><li>Controlled input state से <code>value</code> दिखाता है और <code>onChange</code> में state update करता है।</li><li>पूरा form एक state object में रखो और हर बदलाव पर उसकी copy बनाओ।</li><li>Submit पर reload रोको, validate करो, फिर API के लिए object बनाओ।</li></ul>",
          hg: "<ul><li>Controlled input state se <code>value</code> dikhata hai aur <code>onChange</code> mein state update karta hai.</li><li>Poora form ek state object mein rakho aur har badlaav par uski copy banao.</li><li>Submit par reload roko, validate karo, phir API ke liye object banao.</li></ul>"
        }
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "Form state, validation and the submit payload for NewTicketForm (runs on Node)",
            hi: "NewTicketForm के लिए form state, validation और submit payload (Node पर चलता है)",
            hg: "NewTicketForm ke liye form state, validation aur submit payload (Node par chalta hai)"
          },
          check: "run",
          src: "// A controlled form keeps every field in ONE state object. Each keystroke makes a new object.\nfunction setField(form, name, value) {\n  return { ...form, [name]: value };\n}\n\nfunction validate(form) {\n  const errors = {};\n  if (form.customer.trim() === \"\") errors.customer = \"Customer is required\";\n  if (form.issue.trim().length < 5) errors.issue = \"Describe the issue (5+ characters)\";\n  return errors;\n}\n\n// What onSubmit does: stop the page reload, validate, then build the JSON body for the API\nfunction handleSubmit(form) {\n  const errors = validate(form);\n  if (Object.keys(errors).length > 0) return { ok: false, errors };\n  return {\n    ok: true,\n    body: { customer: form.customer.trim(), issue: form.issue.trim(), priority: form.priority },\n  };\n}\n\nlet form = { customer: \"\", issue: \"\", priority: \"Normal\" };\nform = setField(form, \"customer\", \"Neha\");\nconsole.log(JSON.stringify(handleSubmit(form)));\n\nform = setField(form, \"issue\", \"Printer not working\");\nconsole.log(JSON.stringify(handleSubmit(form)));",
          expected: "{\"ok\":false,\"errors\":{\"issue\":\"Describe the issue (5+ characters)\"}}\n{\"ok\":true,\"body\":{\"customer\":\"Neha\",\"issue\":\"Printer not working\",\"priority\":\"Normal\"}}"
        }
      ]
    },
    {
      id: "calling-the-api",
      depth: "short",
      title: {
        en: "Calling the ASP.NET Core API",
        hi: "ASP.NET Core API को call करना",
        hg: "ASP.NET Core API ko call karna"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 6 ended with the object for a new ticket. Now we send it, and also read the ticket list, from the Day 13 Web API. This uses the <code>fetch</code> and <code>res.ok</code> habits from Day 23, the ProblemDetails errors and CORS policy from Day 13, and the effect pattern from lesson 5.</p>",
          hi: "<p>Lesson 6 नए ticket के object पर खत्म हुआ। अब हम उसे Day 13 की Web API को भेजते हैं, और ticket list भी वहीं से पढ़ते हैं। इसमें Day 23 की <code>fetch</code> और <code>res.ok</code> वाली आदतें, Day 13 के ProblemDetails errors और CORS policy, और lesson 5 का effect pattern काम आते हैं।</p>",
          hg: "<p>Lesson 6 naye ticket ke object par khatam hua. Ab hum use Day 13 ki Web API ko bhejte hain, aur ticket list bhi wahin se padhte hain. Isme Day 23 ki <code>fetch</code> aur <code>res.ok</code> wali aadatein, Day 13 ke ProblemDetails errors aur CORS policy, aur lesson 5 ka effect pattern kaam aate hain.</p>"
        },
        what: {
          en: "<p>The browser calls your API with <code>fetch</code>. A screen always has three states: <b>loading</b>, <b>error</b> and <b>data</b>. Because the page and the API usually live on different origins, the browser also applies <b>CORS</b> (Day 13): the API must say which origins may call it.</p>",
          hi: "<p>Browser आपकी API को <code>fetch</code> से call करता है। Screen की हमेशा तीन states होती हैं: <b>loading</b>, <b>error</b> और <b>data</b>। Page और API आम तौर पर अलग origins पर होते हैं, इसलिए browser <b>CORS</b> (Day 13) भी लगाता है: API को बताना पड़ता है कि कौन-से origins उसे call कर सकते हैं।</p>",
          hg: "<p>Browser aapki API ko <code>fetch</code> se call karta hai. Screen ki hamesha teen states hoti hain: <b>loading</b>, <b>error</b> aur <b>data</b>. Page aur API aam taur par alag origins par hote hain, isliye browser <b>CORS</b> (Day 13) bhi lagata hai: API ko batana padta hai ki kaun-se origins use call kar sakte hain.</p>"
        },
        why: {
          en: "<p>Real networks are slow and fail. A screen that only handles success looks frozen or blank. CORS errors are also the most common first-day problem when a React app meets an ASP.NET Core API, and the fix is on the API side.</p>",
          hi: "<p>असली network धीमा होता है और fail भी होता है। जो screen सिर्फ़ सफलता सँभालती है वह अटकी या खाली दिखती है। React app जब ASP.NET Core API से मिलती है तो पहले दिन की सबसे आम दिक़्क़त भी CORS error ही है, और उसका हल API की तरफ़ होता है।</p>",
          hg: "<p>Asli network dheema hota hai aur fail bhi hota hai. Jo screen sirf safalta sambhalti hai woh atki ya khaali dikhti hai. React app jab ASP.NET Core API se milti hai to pehle din ki sabse aam dikkat bhi CORS error hi hai, aur uska hal API ki taraf hota hai.</p>"
        },
        analogy: {
          en: "<p>The gate of a housing society. The guard (the browser) lets in visitors from other buildings (other origins) only if their address is on the society's visitor list (the CORS policy). The list is kept by the society, not by the visitor. Postman is like a delivery rider who walks in through the office door and never meets this guard.</p>",
          hi: "<p>Housing society का gate। Guard (browser) दूसरी building (दूसरे origin) के visitors को तब ही अंदर आने देता है जब उनका पता society की visitor list (CORS policy) में हो। List society रखती है, visitor नहीं। Postman उस delivery वाले जैसा है जो office के दरवाज़े से आता है और इस guard से कभी मिलता ही नहीं।</p>",
          hg: "<p>Housing society ka gate. Guard (browser) doosri building (doosre origin) ke visitors ko tab hi andar aane deta hai jab unka pata society ki visitor list (CORS policy) mein ho. List society rakhti hai, visitor nahi. Postman us delivery wale jaisa hai jo office ke darwaze se aata hai aur is guard se kabhi milta hi nahi.</p>"
        },
        lines: [
          {
            code: "async function fakeFetch(url, options = {}) {",
            note: {
              en: "A stand-in for the real <code>fetch</code>, so this runs without a network. It answers like the Day 13 API: <code>GET</code> returns tickets, <code>POST</code> creates one. Real <code>fetch(url, options)</code> also returns a promise of a <code>Response</code>.",
              hi: "असली <code>fetch</code> की जगह एक stand-in, ताकि यह बिना network के चले। यह Day 13 की API जैसा जवाब देता है: <code>GET</code> tickets देता है, <code>POST</code> एक बनाता है। असली <code>fetch(url, options)</code> भी <code>Response</code> का promise लौटाता है।",
              hg: "Asli <code>fetch</code> ki jagah ek stand-in, taaki ye bina network ke chale. Ye Day 13 ki API jaisa jawaab deta hai: <code>GET</code> tickets deta hai, <code>POST</code> ek banata hai. Asli <code>fetch(url, options)</code> bhi <code>Response</code> ka promise lautata hai."
            }
          },
          {
            code: "if (!res.ok) { // fetch does NOT throw on 400 or 404 (Day 23)",
            note: {
              en: "<code>fetch</code> rejects only when the network fails. A 400 or 404 is still a normal <code>Response</code>, so you must check <code>res.ok</code> yourself.",
              hi: "<code>fetch</code> सिर्फ़ तब reject होता है जब network फेल हो। 400 या 404 भी सामान्य <code>Response</code> होती है, इसलिए <code>res.ok</code> खुद जाँचना पड़ता है।",
              hg: "<code>fetch</code> sirf tab reject hota hai jab network fail ho. 400 ya 404 bhi saamaanya <code>Response</code> hoti hai, isliye <code>res.ok</code> khud jaanchna padta hai."
            }
          },
          {
            code: "throw new Error(problem?.title ?? \"HTTP \" + res.status);",
            note: {
              en: "Prefer the server's ProblemDetails title; fall back to the status code. <code>.catch(() =&gt; null)</code> above protects the case where the body is empty, as for the 404.",
              hi: "Server का ProblemDetails title पहले लो; न मिले तो status code। ऊपर का <code>.catch(() =&gt; null)</code> उस case को बचाता है जब body खाली हो, जैसे 404 में।",
              hg: "Server ka ProblemDetails title pehle lo; na mile to status code. Upar ka <code>.catch(() =&gt; null)</code> us case ko bachata hai jab body khaali ho, jaise 404 mein."
            }
          },
          {
            code: "await request(API, post({ customer: \"\" }));",
            note: {
              en: "An empty customer makes the fake API answer 400. The screen would show the <code>error:</code> state with the API's own title, not crash and not stay on loading.",
              hi: "खाली customer पर नकली API 400 देती है। Screen <code>error:</code> state दिखाती, API का अपना title दिखाते हुए; न crash होती, न loading पर अटकती।",
              hg: "Khaali customer par nakli API 400 deti hai. Screen <code>error:</code> state dikhati, API ka apna title dikhate hue; na crash hoti, na loading par atakti."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Assuming <code>fetch</code> throws on 400 or 500. Check <code>res.ok</code>.</li><li>Fixing a CORS error in React (for example with <code>mode: \"no-cors\"</code>). That only hides the response. Add the origin to the API's CORS policy.</li><li>Allowing every origin (<code>AllowAnyOrigin</code>) to make the error go away. List the real front-end origins instead.</li></ul>",
          hi: "<ul><li>मान लेना कि 400 या 500 पर <code>fetch</code> throw करता है। <code>res.ok</code> जाँचो।</li><li>CORS error को React में ठीक करने की कोशिश (जैसे <code>mode: \"no-cors\"</code>)। इससे सिर्फ़ response छिप जाता है। Origin को API की CORS policy में जोड़ो।</li><li>Error हटाने के लिए हर origin को allow करना (<code>AllowAnyOrigin</code>)। असली front-end origins की list दो।</li></ul>",
          hg: "<ul><li>Maan lena ki 400 ya 500 par <code>fetch</code> throw karta hai. <code>res.ok</code> jaancho.</li><li>CORS error ko React mein theek karne ki koshish (jaise <code>mode: \"no-cors\"</code>). Isse sirf response chhip jaata hai. Origin ko API ki CORS policy mein jodo.</li><li>Error hatane ke liye har origin ko allow karna (<code>AllowAnyOrigin</code>). Asli front-end origins ki list do.</li></ul>"
        },
        whenToUse: {
          en: "<p>Plain <code>fetch</code> in an effect or a submit handler is fine for one small screen. When several components share server data and you want caching and retries, a library such as TanStack Query helps. In Next.js (lesson 8) a server component can call the API on the server, with no CORS at all.</p>",
          hi: "<p>एक छोटी screen के लिए effect या submit handler में सादा <code>fetch</code> ठीक है। जब कई components एक ही server data बाँटें और caching और retries चाहिए हों, तब TanStack Query जैसी library काम आती है। Next.js में (lesson 8) server component API को server पर call कर सकता है, वहाँ CORS होता ही नहीं।</p>",
          hg: "<p>Ek chhoti screen ke liye effect ya submit handler mein saada <code>fetch</code> theek hai. Jab kai components ek hi server data baantein aur caching aur retries chahiye hon, tab TanStack Query jaisi library kaam aati hai. Next.js mein (lesson 8) server component API ko server par call kar sakta hai, wahan CORS hota hi nahi.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write <code>corsAllows(pageUrl, allowedOrigins)</code> that returns whether the page's origin (scheme + host + port) is in the allowed list. Test it with <code>http://localhost:3000/tickets</code>, <code>http://localhost:5173/tickets</code> and <code>http://crm.example.com/tickets</code>, with the list <code>http://localhost:3000</code> and <code>https://crm.example.com</code>.</p>",
            hi: "<p><code>corsAllows(pageUrl, allowedOrigins)</code> लिखो जो बताए कि page का origin (scheme + host + port) allowed list में है या नहीं। इसे <code>http://localhost:3000/tickets</code>, <code>http://localhost:5173/tickets</code> और <code>http://crm.example.com/tickets</code> से test करो, list में <code>http://localhost:3000</code> और <code>https://crm.example.com</code> रखकर।</p>",
            hg: "<p><code>corsAllows(pageUrl, allowedOrigins)</code> likho jo bataye ki page ka origin (scheme + host + port) allowed list mein hai ya nahi. Ise <code>http://localhost:3000/tickets</code>, <code>http://localhost:5173/tickets</code> aur <code>http://crm.example.com/tickets</code> se test karo, list mein <code>http://localhost:3000</code> aur <code>https://crm.example.com</code> rakhkar.</p>"
          },
          hint: {
            en: "<p><code>new URL(pageUrl).origin</code> gives the origin. Compare it with <code>includes</code>. Note that <code>http</code> and <code>https</code> are different origins.</p>",
            hi: "<p><code>new URL(pageUrl).origin</code> origin देता है। उसे <code>includes</code> से मिलाओ। ध्यान रखो कि <code>http</code> और <code>https</code> अलग origins हैं।</p>",
            hg: "<p><code>new URL(pageUrl).origin</code> origin deta hai. Use <code>includes</code> se milao. Dhyaan rakho ki <code>http</code> aur <code>https</code> alag origins hain.</p>"
          },
          solution: {
            lang: "javascript",
            caption: {
              en: "One possible solution",
              hi: "एक संभव solution",
              hg: "Ek sambhav solution"
            },
            check: "run",
            src: "// The browser compares the page's ORIGIN (scheme + host + port) with the origins the API allows\nfunction corsAllows(pageUrl, allowedOrigins) {\n  return allowedOrigins.includes(new URL(pageUrl).origin);\n}\n\nconst allowed = [\"http://localhost:3000\", \"https://crm.example.com\"];\nconsole.log(corsAllows(\"http://localhost:3000/tickets\", allowed));\nconsole.log(corsAllows(\"http://localhost:5173/tickets\", allowed));\nconsole.log(corsAllows(\"http://crm.example.com/tickets\", allowed));",
            expected: "true\nfalse\nfalse"
          }
        },
        quiz: {
          q: {
            en: "The same <code>GET /api/tickets</code> works in Postman, but the browser blocks it with a CORS error. Where is the fix?",
            hi: "वही <code>GET /api/tickets</code> Postman में चलता है, पर browser CORS error देकर रोकता है। हल कहाँ है?",
            hg: "Wahi <code>GET /api/tickets</code> Postman mein chalta hai, par browser CORS error dekar rokta hai. Hal kahan hai?"
          },
          options: [
            {
              en: "In the component: check <code>res.ok</code> before reading the body",
              hi: "Component में: body पढ़ने से पहले <code>res.ok</code> जाँचना",
              hg: "Component mein: body padhne se pehle <code>res.ok</code> jaanchna"
            },
            {
              en: "In React: add <code>mode: \"no-cors\"</code> to the fetch call",
              hi: "React में: fetch call में <code>mode: \"no-cors\"</code> जोड़ना",
              hg: "React mein: fetch call mein <code>mode: \"no-cors\"</code> jodna"
            },
            {
              en: "In Postman: turn on the CORS setting",
              hi: "Postman में: CORS setting चालू करना",
              hg: "Postman mein: CORS setting chaalu karna"
            },
            {
              en: "In the ASP.NET Core API: add the front end's origin to the CORS policy",
              hi: "ASP.NET Core API में: front end का origin CORS policy में जोड़ना",
              hg: "ASP.NET Core API mein: front end ka origin CORS policy mein jodna"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>The browser enforces CORS, and the API decides who is allowed, so the fix belongs on the API. Postman is not a browser and does not check it. <code>no-cors</code> only gives you an unreadable response.</p>",
            hi: "<p>CORS browser लागू करता है और कौन allowed है यह API तय करती है, इसलिए हल API पर होता है। Postman browser नहीं है और यह जाँच नहीं करता। <code>no-cors</code> सिर्फ़ ऐसा response देता है जो पढ़ा नहीं जा सकता।</p>",
            hg: "<p>CORS browser laagu karta hai aur kaun allowed hai ye API tay karti hai, isliye hal API par hota hai. Postman browser nahi hai aur ye jaanch nahi karta. <code>no-cors</code> sirf aisa response deta hai jo padha nahi ja sakta.</p>"
          }
        },
        recap: {
          en: "<ul><li>Call the API with <code>fetch</code>; model three states: loading, error, data.</li><li><code>fetch</code> does not throw on 400 or 500: check <code>res.ok</code> and show the ProblemDetails title.</li><li>CORS is enforced by the browser; the fix is the API's policy with the exact front-end origin.</li></ul>",
          hi: "<ul><li>API को <code>fetch</code> से call करो; तीन states रखो: loading, error, data।</li><li>400 या 500 पर <code>fetch</code> throw नहीं करता: <code>res.ok</code> जाँचो और ProblemDetails का title दिखाओ।</li><li>CORS browser लागू करता है; हल API की policy में front-end का सही origin जोड़ना है।</li></ul>",
          hg: "<ul><li>API ko <code>fetch</code> se call karo; teen states rakho: loading, error, data.</li><li>400 ya 500 par <code>fetch</code> throw nahi karta: <code>res.ok</code> jaancho aur ProblemDetails ka title dikhao.</li><li>CORS browser laagu karta hai; hal API ki policy mein front-end ka sahi origin jodna hai.</li></ul>"
        }
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "Calling the CRM API with a fake fetch: loading, data, ProblemDetails error and 404 (runs on Node)",
            hi: "Fake fetch से CRM API call करना: loading, data, ProblemDetails error और 404 (Node पर चलता है)",
            hg: "Fake fetch se CRM API call karna: loading, data, ProblemDetails error aur 404 (Node par chalta hai)"
          },
          check: "run",
          src: "const API = \"http://localhost:5000/api/tickets\";\nconst tickets = [\n  { id: 501, customer: \"Asha\", status: \"Open\" },\n  { id: 502, customer: \"Ravi\", status: \"Closed\" },\n];\n\n// A fake fetch that answers like the CRM Web API from Day 13 (no network needed)\nasync function fakeFetch(url, options = {}) {\n  const method = options.method ?? \"GET\";\n  if (url === API && method === \"GET\") {\n    return new Response(JSON.stringify(tickets), { status: 200 });\n  }\n  if (url === API && method === \"POST\") {\n    const body = JSON.parse(options.body);\n    if (!body.customer) {\n      const problem = { title: \"One or more validation errors occurred.\", status: 400 };\n      return new Response(JSON.stringify(problem), { status: 400 });\n    }\n    return new Response(JSON.stringify({ id: 503, ...body }), { status: 201 });\n  }\n  return new Response(null, { status: 404 });\n}\n\n// A component shows one of three states: loading, error or data\nasync function request(url, options) {\n  console.log(\"loading...\");\n  try {\n    const res = await fakeFetch(url, options);\n    if (!res.ok) { // fetch does NOT throw on 400 or 404 (Day 23)\n      const problem = await res.json().catch(() => null);\n      throw new Error(problem?.title ?? \"HTTP \" + res.status);\n    }\n    console.log(\"data:\", JSON.stringify(await res.json()));\n  } catch (err) {\n    console.log(\"error:\", err.message);\n  }\n}\n\nconst post = (ticket) => ({ method: \"POST\", body: JSON.stringify(ticket) });\nawait request(API);\nawait request(API, post({ customer: \"Neha\", issue: \"Printer not working\" }));\nawait request(API, post({ customer: \"\" }));\nawait request(\"http://localhost:5000/api/agents\");",
          expected: "loading...\ndata: [{\"id\":501,\"customer\":\"Asha\",\"status\":\"Open\"},{\"id\":502,\"customer\":\"Ravi\",\"status\":\"Closed\"}]\nloading...\ndata: {\"id\":503,\"customer\":\"Neha\",\"issue\":\"Printer not working\"}\nloading...\nerror: One or more validation errors occurred.\nloading...\nerror: HTTP 404"
        }
      ]
    },
    {
      id: "server-client-components",
      depth: "short",
      title: {
        en: "Next.js: server and client components",
        hi: "Next.js: server और client components",
        hg: "Next.js: server aur client components"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lessons 3 to 7 ran in the browser: state, effects, forms and a <code>fetch</code> that needs CORS. Next.js (App Router) lets a component run on the <b>server</b> instead. Then it can call the API there, keep secrets, and send ready HTML. We keep the browser only for the parts that need state or clicks.</p>",
          hi: "<p>Lesson 3 से 7 browser में चले: state, effects, forms और <code>fetch</code> जिसे CORS चाहिए। Next.js (App Router) में component <b>server</b> पर भी चल सकता है। तब वह API को वहीं से call कर सकता है, secrets server पर ही रख सकता है और तैयार HTML भेज सकता है। Browser सिर्फ़ उन हिस्सों के लिए रखते हैं जिन्हें state या clicks चाहिए।</p>",
          hg: "<p>Lesson 3 se 7 browser mein chale: state, effects, forms aur <code>fetch</code> jise CORS chahiye. Next.js (App Router) mein component <b>server</b> par bhi chal sakta hai. Tab woh API ko wahin se call kar sakta hai, secrets server par hi rakh sakta hai aur taiyaar HTML bhej sakta hai. Browser sirf un hisson ke liye rakhte hain jinhe state ya clicks chahiye.</p>"
        },
        what: {
          en: "<p>In the Next.js App Router, every component is a <b>Server Component</b> by default. It runs on the server, can be <code>async</code> and <code>await</code> data, and sends no JavaScript of its own to the browser. Add <code>\"use client\"</code> at the top of a file to make it a <b>Client Component</b>, which is needed for state, effects, event handlers and browser APIs.</p>",
          hi: "<p>Next.js App Router में हर component by default एक <b>Server Component</b> होता है। वह server पर चलता है, <code>async</code> हो सकता है और data को <code>await</code> कर सकता है, और अपना कोई JavaScript browser को नहीं भेजता। किसी file के ऊपर <code>\"use client\"</code> लगाने से वह <b>Client Component</b> बन जाती है, जो state, effects, event handlers और browser APIs के लिए चाहिए।</p>",
          hg: "<p>Next.js App Router mein har component by default ek <b>Server Component</b> hota hai. Woh server par chalta hai, <code>async</code> ho sakta hai aur data ko <code>await</code> kar sakta hai, aur apna koi JavaScript browser ko nahi bhejta. Kisi file ke upar <code>\"use client\"</code> lagane se woh <b>Client Component</b> ban jaati hai, jo state, effects, event handlers aur browser APIs ke liye chahiye.</p>"
        },
        why: {
          en: "<p>Less JavaScript reaches the browser, so pages open faster. The API key and the API address stay on the server. The server-to-server call needs no CORS. Search engines also get real HTML. The price: you must decide, file by file, where code runs.</p>",
          hi: "<p>Browser तक कम JavaScript पहुँचता है, इसलिए pages जल्दी खुलते हैं। API key और API का address server पर रहते हैं। Server से server के call में CORS नहीं लगता। Search engines को भी असली HTML मिलता है। क़ीमत यह है कि हर file के लिए तय करना पड़ता है कि code कहाँ चलेगा।</p>",
          hg: "<p>Browser tak kam JavaScript pahunchta hai, isliye pages jaldi khulte hain. API key aur API ka address server par rehte hain. Server se server ke call mein CORS nahi lagta. Search engines ko bhi asli HTML milta hai. Keemat ye hai ki har file ke liye tay karna padta hai ki code kahan chalega.</p>"
        },
        analogy: {
          en: "<p>A restaurant kitchen and a chaat counter at the table. The kitchen cooks the main dishes and sends them out ready to eat. At the table, a chaat counter lets guests add toppings themselves. Only that counter needs equipment (JavaScript) at the table.</p>",
          hi: "<p>Restaurant की kitchen और table पर लगा chaat counter। Kitchen मुख्य dishes पकाकर खाने के लिए तैयार भेजती है। Table पर chaat counter में मेहमान खुद toppings डालते हैं। सिर्फ़ उसी counter को table पर सामान (JavaScript) चाहिए।</p>",
          hg: "<p>Restaurant ki kitchen aur table par laga chaat counter. Kitchen mukhya dishes pakakar khaane ke liye taiyaar bhejti hai. Table par chaat counter mein mehmaan khud toppings daalte hain. Sirf usi counter ko table par saaman (JavaScript) chahiye.</p>"
        },
        lines: [
          {
            code: "headers: { \"X-Api-Key\": process.env.CRM_API_KEY ?? \"\" },",
            note: {
              en: "The secret key is read on the server and is never sent to the browser. Only variables whose names start with <code>NEXT_PUBLIC_</code> are exposed to the browser.",
              hi: "Secret key server पर पढ़ी जाती है और browser को कभी नहीं जाती। सिर्फ़ वे variables browser को दिखते हैं जिनका नाम <code>NEXT_PUBLIC_</code> से शुरू होता है।",
              hg: "Secret key server par padhi jaati hai aur browser ko kabhi nahi jaati. Sirf woh variables browser ko dikhte hain jinka naam <code>NEXT_PUBLIC_</code> se shuru hota hai."
            }
          },
          {
            code: "export default async function TicketsPage() {",
            note: {
              en: "The page itself is an <code>async</code> Server Component: it awaits the tickets and returns the finished list. Server Components cannot use <code>useState</code>, effects or <code>onClick</code>.",
              hi: "Page खुद एक <code>async</code> Server Component है: वह tickets का इंतज़ार करके तैयार list लौटाता है। Server Components में <code>useState</code>, effects या <code>onClick</code> नहीं चलते।",
              hg: "Page khud ek <code>async</code> Server Component hai: woh tickets ka intezaar karke taiyaar list lautata hai. Server Components mein <code>useState</code>, effects ya <code>onClick</code> nahi chalte."
            }
          },
          {
            code: "<AssignButton ticketId={t.id} />",
            note: {
              en: "A Server Component can render a Client Component. Props crossing from server to client must be serializable (numbers, strings, plain objects), so pass <code>t.id</code>, not a function.",
              hi: "Server Component किसी Client Component को render कर सकता है। Server से client जाने वाले props serializable होने चाहिए (numbers, strings, plain objects), इसलिए <code>t.id</code> दो, function नहीं।",
              hg: "Server Component kisi Client Component ko render kar sakta hai. Server se client jaane wale props serializable hone chahiye (numbers, strings, plain objects), isliye <code>t.id</code> do, function nahi."
            }
          },
          {
            code: "\"use client\"; // needs useState and onClick, so it must run in the browser",
            note: {
              en: "This line, at the very top of its own file, marks the boundary. This file and everything it imports go into the browser bundle, so keep such files small and at the leaves of the tree.",
              hi: "अपनी file में सबसे ऊपर यह line सीमा तय करती है। यह file और जो कुछ वह import करती है browser bundle में जाता है, इसलिए ऐसी files छोटी रखो और tree की पत्तियों पर।",
              hg: "Apni file mein sabse upar ye line seema tay karti hai. Ye file aur jo kuch woh import karti hai browser bundle mein jaata hai, isliye aisi files chhoti rakho aur tree ki pattiyon par."
            }
          },
          {
            code: "const [assigned, setAssigned] = useState(false);",
            note: {
              en: "Hooks from lesson 3 work here, because this component runs in the browser. The same line in a Server Component would be an error.",
              hi: "Lesson 3 के hooks यहाँ चलते हैं, क्योंकि यह component browser में चलता है। यही line Server Component में error होती।",
              hg: "Lesson 3 ke hooks yahan chalte hain, kyunki ye component browser mein chalta hai. Yahi line Server Component mein error hoti."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Putting <code>\"use client\"</code> on a whole page or layout \"to fix an error\". Find the one component that needs state and mark only that.</li><li>Using <code>useState</code>, <code>useEffect</code> or <code>onClick</code> in a Server Component. Move that part into a small Client Component.</li><li>Believing a secret in a Client Component stays secret. Anything in the browser bundle is public.</li></ul>",
          hi: "<ul><li>\"Error ठीक करने के लिए\" पूरे page या layout पर <code>\"use client\"</code> लगाना। वह एक component ढूँढो जिसे state चाहिए और सिर्फ़ उसी पर लगाओ।</li><li>Server Component में <code>useState</code>, <code>useEffect</code> या <code>onClick</code> use करना। वह हिस्सा किसी छोटे Client Component में ले जाओ।</li><li>मान लेना कि Client Component में रखा secret secret रहता है। Browser bundle की हर चीज़ सबके लिए खुली है।</li></ul>",
          hg: "<ul><li>\"Error theek karne ke liye\" poore page ya layout par <code>\"use client\"</code> lagana. Woh ek component dhundho jise state chahiye aur sirf usi par lagao.</li><li>Server Component mein <code>useState</code>, <code>useEffect</code> ya <code>onClick</code> use karna. Woh hissa kisi chhote Client Component mein le jao.</li><li>Maan lena ki Client Component mein rakha secret secret rehta hai. Browser bundle ki har cheez sabke liye khuli hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Keep components on the server by default, especially data-heavy pages that should be visible to search engines. Use Client Components only for interaction. Next.js is a second server technology next to ASP.NET Core, so for a login-protected internal dashboard a plain Vite React build served next to your API can be simpler.</p>",
          hi: "<p>Components को by default server पर रखो, ख़ासकर data वाले pages जिन्हें search engines को दिखना है। Client Components सिर्फ़ interaction के लिए लो। Next.js ASP.NET Core के साथ एक दूसरी server technology है, इसलिए login वाले internal dashboard के लिए आपकी API के साथ परोसा गया सादा Vite React build आसान हो सकता है।</p>",
          hg: "<p>Components ko by default server par rakho, khaaskar data wale pages jinhe search engines ko dikhna hai. Client Components sirf interaction ke liye lo. Next.js ASP.NET Core ke saath ek doosri server technology hai, isliye login wale internal dashboard ke liye aapki API ke saath parosa gaya saada Vite React build aasaan ho sakta hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>The Agent dashboard page <code>AgentsPage</code> fetches agents on the server and must show a status dropdown (<code>Open</code> or <code>Closed</code>) that remembers the choice. Write the two files so that only the dropdown is a Client Component.</p>",
            hi: "<p>Agent dashboard का page <code>AgentsPage</code> agents को server पर fetch करता है और उसे एक status dropdown (<code>Open</code> या <code>Closed</code>) दिखाना है जो चुनाव याद रखे। दो files ऐसे लिखो कि सिर्फ़ dropdown Client Component हो।</p>",
            hg: "<p>Agent dashboard ka page <code>AgentsPage</code> agents ko server par fetch karta hai aur use ek status dropdown (<code>Open</code> ya <code>Closed</code>) dikhana hai jo chunaav yaad rakhe. Do files aise likho ki sirf dropdown Client Component ho.</p>"
          },
          hint: {
            en: "<p>The page stays an <code>async</code> function without a directive. Move <code>useState</code> and <code>onChange</code> into a separate file that starts with <code>\"use client\"</code>.</p>",
            hi: "<p>Page बिना directive के <code>async</code> function ही रहता है। <code>useState</code> और <code>onChange</code> को अलग file में ले जाओ जो <code>\"use client\"</code> से शुरू हो।</p>",
            hg: "<p>Page bina directive ke <code>async</code> function hi rehta hai. <code>useState</code> aur <code>onChange</code> ko alag file mein le jao jo <code>\"use client\"</code> se shuru ho.</p>"
          },
          solution: {
            lang: "tsx",
            caption: {
              en: "One possible solution (TSX, display-only)",
              hi: "एक संभव solution (TSX, सिर्फ़ देखने के लिए)",
              hg: "Ek sambhav solution (TSX, sirf dekhne ke liye)"
            },
            check: "none",
            src: "// ---- app/agents/page.tsx : stays a Server Component ----\nimport StatusFilter from \"./status-filter\";\n\ntype Agent = { id: number; name: string; openTickets: number };\n\nexport default async function AgentsPage() {\n  const res = await fetch(`${process.env.CRM_API_URL}/api/agents`);\n  if (!res.ok) throw new Error(\"Agents request failed: \" + res.status);\n  const agents: Agent[] = await res.json();\n  return (\n    <>\n      <StatusFilter />\n      <ul>\n        {agents.map((a) => (\n          <li key={a.id}>{a.name}: {a.openTickets} open</li>\n        ))}\n      </ul>\n    </>\n  );\n}\n\n// ---- app/agents/status-filter.tsx : only this small leaf is a Client Component ----\n\"use client\";\n\nimport { useState } from \"react\";\n\nexport default function StatusFilter() {\n  const [status, setStatus] = useState(\"Open\");\n  return (\n    <select value={status} onChange={(e) => setStatus(e.target.value)}>\n      <option>Open</option>\n      <option>Closed</option>\n    </select>\n  );\n}"
          }
        },
        quiz: {
          q: {
            en: "Where should the <code>\"use client\"</code> directive go?",
            hi: "<code>\"use client\"</code> directive कहाँ लगाना चाहिए?",
            hg: "<code>\"use client\"</code> directive kahan lagana chahiye?"
          },
          options: [
            {
              en: "At the top of the root layout, to be safe",
              hi: "Safe रहने के लिए root layout के ऊपर",
              hg: "Safe rehne ke liye root layout ke upar"
            },
            {
              en: "At the top of the smallest file that needs state, effects or event handlers",
              hi: "उस सबसे छोटी file के ऊपर जिसे state, effects या event handlers चाहिए",
              hg: "Us sabse chhoti file ke upar jise state, effects ya event handlers chahiye"
            },
            {
              en: "On every component, because all React components need it",
              hi: "हर component पर, क्योंकि सब React components को यह चाहिए",
              hg: "Har component par, kyunki sab React components ko ye chahiye"
            },
            {
              en: "Inside the function body, before the first hook",
              hi: "Function body के अंदर, पहले hook से पहले",
              hg: "Function body ke andar, pehle hook se pehle"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>The directive goes at the top of a file and turns that file and its imports into client code. On a layout it pulls the layout and all its imports into the browser bundle, losing server benefits for them.</p>",
            hi: "<p>Directive file के सबसे ऊपर जाता है और उस file और उसके imports को client code बना देता है। Layout पर लगाने से layout और उसके सारे imports browser bundle में चले जाते हैं, और उनके लिए server के फ़ायदे खत्म।</p>",
            hg: "<p>Directive file ke sabse upar jaata hai aur us file aur uske imports ko client code bana deta hai. Layout par lagane se layout aur uske saare imports browser bundle mein chale jaate hain, aur unke liye server ke faayde khatam.</p>"
          }
        },
        recap: {
          en: "<ul><li>In the App Router, components are Server Components by default: they run on the server and can <code>await</code> data.</li><li>Add <code>\"use client\"</code> only to small files that need state, effects, handlers or browser APIs.</li><li>Secrets stay in server code; props from server to client must be serializable.</li></ul>",
          hi: "<ul><li>App Router में components by default Server Components हैं: वे server पर चलते हैं और data <code>await</code> कर सकते हैं।</li><li><code>\"use client\"</code> सिर्फ़ उन छोटी files पर लगाओ जिन्हें state, effects, handlers या browser APIs चाहिए।</li><li>Secrets server code में रहते हैं; server से client जाने वाले props serializable होने चाहिए।</li></ul>",
          hg: "<ul><li>App Router mein components by default Server Components hain: woh server par chalte hain aur data <code>await</code> kar sakte hain.</li><li><code>\"use client\"</code> sirf un chhoti files par lagao jinhe state, effects, handlers ya browser APIs chahiye.</li><li>Secrets server code mein rehte hain; server se client jaane wale props serializable hone chahiye.</li></ul>"
        }
      },
      code: [
        {
          lang: "tsx",
          caption: {
            en: "Tickets page: a Server Component that awaits the API, with one Client Component leaf (TSX, display-only; shown as two files)",
            hi: "Tickets page: API को await करने वाला Server Component, और एक Client Component पत्ती (TSX, सिर्फ़ देखने के लिए; दो files के रूप में)",
            hg: "Tickets page: API ko await karne wala Server Component, aur ek Client Component patti (TSX, sirf dekhne ke liye; do files ke roop mein)"
          },
          check: "none",
          src: "// ---- app/tickets/page.tsx : a Server Component (no \"use client\") ----\nimport AssignButton from \"./assign-button\";\n\ntype Ticket = { id: number; customer: string; issue: string };\n\nasync function getTickets(): Promise<Ticket[]> {\n  // Runs on the server: the API key and the API address never reach the browser\n  const res = await fetch(`${process.env.CRM_API_URL}/api/tickets`, {\n    headers: { \"X-Api-Key\": process.env.CRM_API_KEY ?? \"\" },\n  });\n  if (!res.ok) throw new Error(\"Tickets request failed: \" + res.status);\n  return res.json();\n}\n\nexport default async function TicketsPage() {\n  const tickets = await getTickets();\n  return (\n    <ul>\n      {tickets.map((t) => (\n        <li key={t.id}>\n          #{t.id} {t.customer}: {t.issue}\n          <AssignButton ticketId={t.id} />\n        </li>\n      ))}\n    </ul>\n  );\n}\n\n// ---- app/tickets/assign-button.tsx : a Client Component ----\n\"use client\"; // needs useState and onClick, so it must run in the browser\n\nimport { useState } from \"react\";\n\nexport default function AssignButton({ ticketId }: { ticketId: number }) {\n  const [assigned, setAssigned] = useState(false);\n  return (\n    <button disabled={assigned} onClick={() => setAssigned(true)}>\n      {assigned ? \"Assigned to you\" : \"Assign to me\"}\n    </button>\n  );\n}"
        }
      ]
    },
    {
      id: "lifting-state-typescript",
      depth: "detailed",
      title: {
        en: "Lifting state up, composition and TypeScript props",
        hi: "State को ऊपर ले जाना, composition और TypeScript props",
        hg: "State ko upar le jaana, composition aur TypeScript props"
      },
      body: {
        en: "<p><b>One-way data flow.</b> Data goes down through props and events go up through callback props. When two siblings need the same value, keep it in their closest common parent. In the example, the parent owns <code>selectedId</code>; the list reports clicks through <code>onSelect</code> and the detail view only reads the value.</p><p><b>TypeScript.</b> Typing the props gives compile-time checks, similar to a C# parameter type. Teams that value C# type safety usually choose it.</p><p><b>Do not go too high.</b> Lift state to the closest common parent, no higher. If many distant components need the value, consider context or a state library instead of passing props through ten layers (prop drilling). Do not copy a prop into state \"just in case\": two sources of truth drift apart.</p><p><b>Composition.</b> Prefer passing <code>children</code> to deep inheritance-style hierarchies. For deeply nested state, copy each level you change, flatten the shape, or use a helper such as Immer.</p>",
        hi: "<p><b>एक तरफ़ा data flow।</b> Data props से नीचे जाता है और events callback props से ऊपर। दो siblings को एक ही value चाहिए तो उसे उनके सबसे नज़दीकी common parent में रखो। Example में parent <code>selectedId</code> रखता है; list clicks <code>onSelect</code> से बताती है और detail view सिर्फ़ value पढ़ता है।</p><p><b>TypeScript।</b> Props की types देने से compile-time checks मिलते हैं, C# के parameter type जैसे। जो teams C# की type safety को मानती हैं वे आम तौर पर इसे चुनती हैं।</p><p><b>बहुत ऊपर मत ले जाओ।</b> State को सबसे नज़दीकी common parent तक ले जाओ, उससे ऊपर नहीं। बहुत दूर के कई components को value चाहिए तो दस layers से props भेजने (prop drilling) की जगह context या state library सोचो। Prop को \"क्या पता काम आए\" सोचकर state में copy मत करो: दो सच के ठिकाने अलग-अलग हो जाते हैं।</p><p><b>Composition।</b> गहरी inheritance जैसी hierarchy की जगह <code>children</code> पास करना पसंद करो। गहरी nested state में जिस level को बदलो उसकी copy बनाओ, shape को सपाट रखो, या Immer जैसा helper लो।</p>",
        hg: "<p><b>Ek taraf data flow.</b> Data props se neeche jaata hai aur events callback props se upar. Do siblings ko ek hi value chahiye to use unke sabse nazdeeki common parent mein rakho. Example mein parent <code>selectedId</code> rakhta hai; list clicks <code>onSelect</code> se batati hai aur detail view sirf value padhta hai.</p><p><b>TypeScript.</b> Props ki types dene se compile-time checks milte hain, C# ke parameter type jaise. Jo teams C# ki type safety ko maanti hain woh aam taur par ise chunti hain.</p><p><b>Bahut upar mat le jao.</b> State ko sabse nazdeeki common parent tak le jao, usse upar nahi. Bahut door ke kai components ko value chahiye to das layers se props bhejne (prop drilling) ki jagah context ya state library socho. Prop ko \"kya pata kaam aaye\" sochkar state mein copy mat karo: do sach ke thikaane alag-alag ho jaate hain.</p><p><b>Composition.</b> Gehri inheritance jaisi hierarchy ki jagah <code>children</code> paas karna pasand karo. Gehri nested state mein jis level ko badlo uski copy banao, shape ko sapaat rakho, ya Immer jaisa helper lo.</p>"
      },
      code: [
        {
          lang: "tsx",
          caption: {
            en: "Lifting state up: the parent owns selectedId (TSX, display-only)",
            hi: "State ऊपर ले जाना: parent के पास selectedId है (TSX, सिर्फ़ देखने के लिए)",
            hg: "State upar le jaana: parent ke paas selectedId hai (TSX, sirf dekhne ke liye)"
          },
          check: "none",
          src: "import { useState } from \"react\";\n\ntype Ticket = { id: number; customer: string; issue: string };\n\ntype TicketListProps = {\n  tickets: Ticket[];\n  selectedId: number | null;\n  onSelect: (id: number) => void;\n};\n\nfunction TicketList({ tickets, selectedId, onSelect }: TicketListProps) {\n  return (\n    <ul>\n      {tickets.map((t) => (\n        <li key={t.id}>\n          <button aria-pressed={t.id === selectedId} onClick={() => onSelect(t.id)}>\n            #{t.id} {t.customer}\n          </button>\n        </li>\n      ))}\n    </ul>\n  );\n}\n\nfunction TicketDetail({ ticket }: { ticket: Ticket | undefined }) {\n  return ticket ? <h2>{ticket.issue}</h2> : <p>Pick a ticket.</p>;\n}\n\nexport default function TicketsScreen({ tickets }: { tickets: Ticket[] }) {\n  // One owner for the shared value, so both siblings stay in sync\n  const [selectedId, setSelectedId] = useState<number | null>(null);\n  return (\n    <>\n      <TicketList tickets={tickets} selectedId={selectedId} onSelect={setSelectedId} />\n      <TicketDetail ticket={tickets.find((t) => t.id === selectedId)} />\n    </>\n  );\n}"
        }
      ]
    },
    {
      id: "effects-in-practice",
      depth: "detailed",
      title: {
        en: "Fetching in an effect, stale closures and TanStack Query",
        hi: "Effect में fetch, stale closures और TanStack Query",
        hg: "Effect mein fetch, stale closures aur TanStack Query"
      },
      body: {
        en: "<p><b>Fetch in an effect.</b> The first snippet combines lessons 5 and 7: an <code>AbortController</code> cancels the request in the cleanup, <code>AbortError</code> is ignored, and the three states are kept. The parent passes <code>key={status}</code>: a new key throws away the old component and its state, which is a clean way to reset.</p><p><b>Stale closures.</b> An effect with <code>[]</code> that reads <code>count</code> keeps the value from the first render, like the closures in Day 23. Fix it by listing the dependency or by using an updater function.</p><p><b>You might not need an effect.</b> Compute derived values during render, handle user actions in event handlers, and reset state with a <code>key</code>. Do not fetch in an effect inside a Server Component: Next.js can <code>await</code> there.</p><p><b>TanStack Query</b> (optional) adds caching, de-duplication, retries and race handling. It needs a <code>QueryClientProvider</code> higher up. Use it when several components share server data; plain <code>fetch</code> is acceptable for one small screen.</p>",
        hi: "<p><b>Effect में fetch।</b> पहला snippet lesson 5 और 7 को जोड़ता है: cleanup में <code>AbortController</code> request रद्द करता है, <code>AbortError</code> को नज़रअंदाज़ किया जाता है, और तीनों states रखी जाती हैं। Parent <code>key={status}</code> देता है: नई key पुराने component और उसकी state को फेंक देती है, जो reset करने का साफ़ तरीका है।</p><p><b>Stale closures।</b> <code>[]</code> वाला effect जो <code>count</code> पढ़ता है, पहले render की value पकड़े रहता है, Day 23 की closures की तरह। हल: dependency list में लिखो या updater function use करो।</p><p><b>शायद effect की ज़रूरत नहीं।</b> Derived values render के समय निकालो, user के actions event handlers में सँभालो, और state reset <code>key</code> से करो। Server Component के अंदर effect में fetch मत करो: Next.js वहाँ सीधे <code>await</code> कर सकता है।</p><p><b>TanStack Query</b> (optional) caching, de-duplication, retries और race handling देती है। इसे ऊपर कहीं <code>QueryClientProvider</code> चाहिए। कई components एक ही server data बाँटें तब use करो; एक छोटी screen के लिए सादा <code>fetch</code> ठीक है।</p>",
        hg: "<p><b>Effect mein fetch.</b> Pehla snippet lesson 5 aur 7 ko jodta hai: cleanup mein <code>AbortController</code> request radd karta hai, <code>AbortError</code> ko nazarandaaz kiya jaata hai, aur teeno states rakhi jaati hain. Parent <code>key={status}</code> deta hai: nayi key purane component aur uski state ko phenk deti hai, jo reset karne ka saaf tareeka hai.</p><p><b>Stale closures.</b> <code>[]</code> wala effect jo <code>count</code> padhta hai, pehle render ki value pakde rehta hai, Day 23 ki closures ki tarah. Hal: dependency list mein likho ya updater function use karo.</p><p><b>Shayad effect ki zaroorat nahi.</b> Derived values render ke samay nikaalo, user ke actions event handlers mein sambhalo, aur state reset <code>key</code> se karo. Server Component ke andar effect mein fetch mat karo: Next.js wahan seedhe <code>await</code> kar sakta hai.</p><p><b>TanStack Query</b> (optional) caching, de-duplication, retries aur race handling deti hai. Ise upar kahin <code>QueryClientProvider</code> chahiye. Kai components ek hi server data baantein tab use karo; ek chhoti screen ke liye saada <code>fetch</code> theek hai.</p>"
      },
      code: [
        {
          lang: "jsx",
          caption: {
            en: "Fetch in an effect with abort cleanup and loading/error states (JSX, display-only)",
            hi: "Abort cleanup और loading/error states के साथ effect में fetch (JSX, सिर्फ़ देखने के लिए)",
            hg: "Abort cleanup aur loading/error states ke saath effect mein fetch (JSX, sirf dekhne ke liye)"
          },
          check: "none",
          src: "import { useEffect, useState } from \"react\";\n\n// Parent: <TicketList key={status} status={status} />  -> a new key gives fresh state\nexport function TicketList({ status }) {\n  const [tickets, setTickets] = useState(null); // null = still loading\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    const controller = new AbortController();\n    const url = \"http://localhost:5000/api/tickets?status=\" + encodeURIComponent(status);\n\n    fetch(url, { signal: controller.signal })\n      .then((res) => {\n        if (!res.ok) throw new Error(\"HTTP \" + res.status); // fetch does not reject on 404/500 (Day 23)\n        return res.json();\n      })\n      .then(setTickets)\n      .catch((err) => {\n        if (err.name !== \"AbortError\") setError(err.message);\n      });\n\n    // Cleanup: cancel the request when status changes or the component unmounts\n    return () => controller.abort();\n  }, [status]);\n\n  if (error) return <p role=\"alert\">Could not load tickets: {error}</p>;\n  if (tickets === null) return <p>Loading...</p>;\n  return <ul>{tickets.map((t) => <li key={t.id}>{t.customer}</li>)}</ul>;\n}"
        },
        {
          lang: "tsx",
          caption: {
            en: "Optional: the same read with TanStack Query (TSX, display-only)",
            hi: "Optional: वही read TanStack Query से (TSX, सिर्फ़ देखने के लिए)",
            hg: "Optional: wahi read TanStack Query se (TSX, sirf dekhne ke liye)"
          },
          check: "none",
          src: "import { useQuery } from \"@tanstack/react-query\";\n\ntype Ticket = { id: number; customer: string };\n\nasync function fetchTickets(): Promise<Ticket[]> {\n  const res = await fetch(\"http://localhost:5000/api/tickets\");\n  if (!res.ok) throw new Error(\"HTTP \" + res.status);\n  return res.json();\n}\n\nexport function TicketList() {\n  // The library handles caching, de-duplication, retries and refetching\n  const { data, isPending, error } = useQuery({\n    queryKey: [\"tickets\"],\n    queryFn: fetchTickets,\n  });\n\n  if (isPending) return <p>Loading...</p>;\n  if (error) return <p role=\"alert\">{error.message}</p>;\n  return <ul>{data.map((t) => <li key={t.id}>{t.customer}</li>)}</ul>;\n}"
        }
      ]
    },
    {
      id: "memo-ref-custom-hooks",
      depth: "detailed",
      title: {
        en: "useMemo, useCallback, useRef and custom hooks",
        hi: "useMemo, useCallback, useRef और custom hooks",
        hg: "useMemo, useCallback, useRef aur custom hooks"
      },
      body: {
        en: "<p><b>useMemo and useCallback</b> cache a computed value or a function between renders. They are performance hints, not guarantees. Measure first; they matter mainly when a memoised child (<code>React.memo</code>) receives the value or function as a prop and needs a stable reference.</p><p><b>useRef</b> keeps a value or a DOM node between renders without causing a re-render. Use it for a DOM node to focus, or for a value that never affects what is drawn.</p><p><b>Custom hooks.</b> A function whose name starts with <code>use</code> and that calls other hooks. Each caller gets its own state, so it shares <b>logic</b>, not data. The hook below packages a subscription with its cleanup.</p><p><b>Skip them by default.</b> Do not add <code>useMemo</code> or <code>useCallback</code> everywhere. The React Compiler (see What is new) can reduce hand-written memoisation.</p>",
        hi: "<p><b>useMemo और useCallback</b> renders के बीच किसी निकाली हुई value या function को cache करते हैं। ये performance के इशारे हैं, गारंटी नहीं। पहले नापो; ये मुख्य रूप से तब काम आते हैं जब memoised child (<code>React.memo</code>) को value या function prop में मिले और उसे स्थिर reference चाहिए।</p><p><b>useRef</b> renders के बीच value या DOM node रखता है, बिना re-render कराए। इसे focus करने वाले DOM node के लिए लो, या ऐसी value के लिए जो screen पर बने को नहीं बदलती।</p><p><b>Custom hooks।</b> ऐसा function जिसका नाम <code>use</code> से शुरू हो और जो दूसरे hooks call करे। हर call करने वाले को अपनी अलग state मिलती है, इसलिए यह <b>logic</b> बाँटता है, data नहीं। नीचे का hook एक subscription को उसके cleanup के साथ बाँध देता है।</p><p><b>Default में इन्हें छोड़ो।</b> हर जगह <code>useMemo</code> या <code>useCallback</code> मत लगाओ। React Compiler (What is new देखो) हाथ से लिखी memoisation घटा सकता है।</p>",
        hg: "<p><b>useMemo aur useCallback</b> renders ke beech kisi nikaali hui value ya function ko cache karte hain. Ye performance ke ishaare hain, guarantee nahi. Pehle naapo; ye mukhya roop se tab kaam aate hain jab memoised child (<code>React.memo</code>) ko value ya function prop mein mile aur use sthir reference chahiye.</p><p><b>useRef</b> renders ke beech value ya DOM node rakhta hai, bina re-render karaye. Ise focus karne wale DOM node ke liye lo, ya aisi value ke liye jo screen par bane ko nahi badalti.</p><p><b>Custom hooks.</b> Aisa function jiska naam <code>use</code> se shuru ho aur jo doosre hooks call kare. Har call karne wale ko apni alag state milti hai, isliye ye <b>logic</b> baantta hai, data nahi. Neeche ka hook ek subscription ko uske cleanup ke saath baandh deta hai.</p><p><b>Default mein inhe chhodo.</b> Har jagah <code>useMemo</code> ya <code>useCallback</code> mat lagao. React Compiler (What is new dekho) haath se likhi memoisation ghata sakta hai.</p>"
      },
      code: [
        {
          lang: "jsx",
          caption: {
            en: "A derived value, a custom hook and a ref (JSX, display-only)",
            hi: "Derived value, एक custom hook और एक ref (JSX, सिर्फ़ देखने के लिए)",
            hg: "Derived value, ek custom hook aur ek ref (JSX, sirf dekhne ke liye)"
          },
          check: "none",
          src: "import { useEffect, useRef, useState } from \"react\";\n\nfunction SlaSummary({ tickets }) {\n  // Derived value: compute during render. No useEffect plus extra state needed.\n  const overdue = tickets.filter((t) => t.hoursOpen > 24).length;\n  return <p>Overdue: {overdue}</p>;\n}\n\n// Custom hook: shares logic (subscribe + cleanup), not state between callers\nfunction useOnlineStatus() {\n  const [online, setOnline] = useState(true);\n  useEffect(() => {\n    const update = () => setOnline(navigator.onLine);\n    window.addEventListener(\"online\", update);\n    window.addEventListener(\"offline\", update);\n    return () => {\n      window.removeEventListener(\"online\", update);\n      window.removeEventListener(\"offline\", update);\n    };\n  }, []);\n  return online;\n}\n\nfunction TicketSearch() {\n  const inputRef = useRef(null); // a DOM node; changing it does not re-render\n  const online = useOnlineStatus();\n  return (\n    <>\n      <input ref={inputRef} placeholder=\"Search tickets\" disabled={!online} />\n      <button onClick={() => inputRef.current?.focus()}>Focus</button>\n    </>\n  );\n}"
        }
      ]
    },
    {
      id: "forms-cors-tokens",
      depth: "detailed",
      title: {
        en: "Forms in TSX, the CORS policy and where to keep tokens",
        hi: "TSX में forms, CORS policy और tokens कहाँ रखें",
        hg: "TSX mein forms, CORS policy aur tokens kahan rakhein"
      },
      body: {
        en: "<p><b>A full form.</b> The first snippet is a typed <code>NewTicketForm</code> that POSTs to the API, shows the ProblemDetails title and disables the button while saving. An uncontrolled input lets the DOM hold the value and reads it with a ref or <code>FormData</code>; that is fine for simple forms.</p><p><b>CORS with cookies.</b> Day 13 set up the CORS policy. When the browser must send a cookie (<code>credentials: \"include\"</code> above), the policy also needs <code>AllowCredentials()</code> with exact origins. <code>AllowAnyOrigin()</code> plus <code>AllowCredentials()</code> throws <code>InvalidOperationException</code> when the app starts (not at <code>builder.Build()</code>), because the CORS protocol forbids a wildcard origin with credentials. A development proxy (Vite, or Next.js rewrites) can avoid CORS locally by making the call same-origin.</p><p><b>Auth tokens.</b> A token in <code>localStorage</code> or <code>sessionStorage</code> can be read by any script on your page, so one XSS hole exposes it. A common safer shape is an <code>HttpOnly</code>, <code>Secure</code> cookie with a suitable <code>SameSite</code> value, set by the server; the browser sends it and JavaScript cannot read it. Cookies then need CSRF thinking (Day 26 covers security). The BFF pattern (Day 16) keeps tokens on a small server and gives the browser only a session cookie.</p>",
        hi: "<p><b>पूरा form।</b> पहला snippet types वाला <code>NewTicketForm</code> है जो API को POST करता है, ProblemDetails का title दिखाता है और saving के दौरान button बंद रखता है। Uncontrolled input में value DOM के पास रहती है और उसे ref या <code>FormData</code> से पढ़ते हैं; सादे forms के लिए यह ठीक है।</p><p><b>Cookies के साथ CORS।</b> CORS policy Day 13 में बनी थी। जब browser को cookie भेजनी हो (ऊपर <code>credentials: \"include\"</code>), तो policy में सही origins के साथ <code>AllowCredentials()</code> भी चाहिए। <code>AllowAnyOrigin()</code> और <code>AllowCredentials()</code> साथ लगाओ तो app start होते समय <code>InvalidOperationException</code> आता है (<code>builder.Build()</code> पर नहीं), क्योंकि CORS protocol wildcard origin को credentials के साथ मना करता है। Development proxy (Vite, या Next.js rewrites) call को same-origin बनाकर local में CORS से बचा सकता है।</p><p><b>Auth tokens।</b> <code>localStorage</code> या <code>sessionStorage</code> में रखा token page की कोई भी script पढ़ सकती है, इसलिए एक XSS छेद उसे खोल देता है। आम तौर पर ज़्यादा सुरक्षित तरीका है server का set किया <code>HttpOnly</code>, <code>Secure</code> cookie, सही <code>SameSite</code> value के साथ; browser उसे भेजता है और JavaScript उसे पढ़ नहीं सकती। फिर cookies के साथ CSRF भी सोचना पड़ता है (security Day 26 में है)। BFF pattern (Day 16) tokens को एक छोटे server पर रखता है और browser को सिर्फ़ session cookie देता है।</p>",
        hg: "<p><b>Poora form.</b> Pehla snippet types wala <code>NewTicketForm</code> hai jo API ko POST karta hai, ProblemDetails ka title dikhata hai aur saving ke dauran button band rakhta hai. Uncontrolled input mein value DOM ke paas rehti hai aur use ref ya <code>FormData</code> se padhte hain; saade forms ke liye ye theek hai.</p><p><b>Cookies ke saath CORS.</b> CORS policy Day 13 mein bani thi. Jab browser ko cookie bhejni ho (upar <code>credentials: \"include\"</code>), to policy mein sahi origins ke saath <code>AllowCredentials()</code> bhi chahiye. <code>AllowAnyOrigin()</code> aur <code>AllowCredentials()</code> saath lagao to app start hote samay <code>InvalidOperationException</code> aata hai (<code>builder.Build()</code> par nahi), kyunki CORS protocol wildcard origin ko credentials ke saath mana karta hai. Development proxy (Vite, ya Next.js rewrites) call ko same-origin banakar local mein CORS se bacha sakta hai.</p><p><b>Auth tokens.</b> <code>localStorage</code> ya <code>sessionStorage</code> mein rakha token page ki koi bhi script padh sakti hai, isliye ek XSS chhed use khol deta hai. Aam taur par zyaada surakshit tareeka hai server ka set kiya <code>HttpOnly</code>, <code>Secure</code> cookie, sahi <code>SameSite</code> value ke saath; browser use bhejta hai aur JavaScript use padh nahi sakti. Phir cookies ke saath CSRF bhi sochna padta hai (security Day 26 mein hai). BFF pattern (Day 16) tokens ko ek chhote server par rakhta hai aur browser ko sirf session cookie deta hai.</p>"
      },
      code: [
        {
          lang: "tsx",
          caption: {
            en: "A controlled form that POSTs to the API and shows ProblemDetails errors (TSX, display-only)",
            hi: "Controlled form जो API को POST करता है और ProblemDetails errors दिखाता है (TSX, सिर्फ़ देखने के लिए)",
            hg: "Controlled form jo API ko POST karta hai aur ProblemDetails errors dikhata hai (TSX, sirf dekhne ke liye)"
          },
          check: "none",
          src: "import { FormEvent, useState } from \"react\";\n\nexport function NewTicketForm({ onCreated }: { onCreated: () => void }) {\n  const [customer, setCustomer] = useState(\"\");\n  const [issue, setIssue] = useState(\"\");\n  const [error, setError] = useState<string | null>(null);\n  const [saving, setSaving] = useState(false);\n\n  async function handleSubmit(e: FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    setSaving(true);\n    setError(null);\n    try {\n      const res = await fetch(\"https://api.example.com/api/tickets\", {\n        method: \"POST\",\n        headers: { \"Content-Type\": \"application/json\" },\n        credentials: \"include\", // send the HttpOnly session cookie (needs AllowCredentials on the API)\n        body: JSON.stringify({ customer, issue }),\n      });\n      if (!res.ok) {\n        const problem = await res.json().catch(() => null); // ProblemDetails (Day 13)\n        throw new Error(problem?.title ?? \"HTTP \" + res.status);\n      }\n      setCustomer(\"\");\n      setIssue(\"\");\n      onCreated();\n    } catch (err) {\n      setError(err instanceof Error ? err.message : \"Unknown error\");\n    } finally {\n      setSaving(false);\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input value={customer} onChange={(e) => setCustomer(e.target.value)} required />\n      <input value={issue} onChange={(e) => setIssue(e.target.value)} required />\n      <button disabled={saving}>{saving ? \"Saving...\" : \"Create ticket\"}</button>\n      {error && <p role=\"alert\">{error}</p>}\n    </form>\n  );\n}"
        },
        {
          lang: "csharp",
          caption: {
            en: "ASP.NET Core side: a named CORS policy for the front-end origins, with credentials (compiles)",
            hi: "ASP.NET Core की तरफ़: front-end origins के लिए named CORS policy, credentials के साथ (compile होता है)",
            hg: "ASP.NET Core ki taraf: front-end origins ke liye named CORS policy, credentials ke saath (compile hota hai)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.DependencyInjection;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddCors(options =>\n{\n    options.AddPolicy(\"Spa\", policy => policy\n        .WithOrigins(\"https://crm.example.com\", \"http://localhost:3000\") // exact origins, no wildcard\n        .WithMethods(\"GET\", \"POST\", \"PUT\", \"DELETE\")\n        .WithHeaders(\"Content-Type\", \"Authorization\")\n        .AllowCredentials()); // needed for cookies; with AllowAnyOrigin() the app throws at startup\n});\n\nvar app = builder.Build();\n\napp.UseCors(\"Spa\");\n\napp.MapGet(\"/api/tickets\", () => new[] { new { Id = 501, Customer = \"Asha\" } });\n\napp.Run();"
        }
      ]
    },
    {
      id: "nextjs-rendering-caching",
      depth: "detailed",
      title: {
        en: "Rendering strategies, caching and choosing Next.js",
        hi: "Rendering strategies, caching और Next.js चुनना",
        hg: "Rendering strategies, caching aur Next.js chunna"
      },
      body: {
        en: "<p><b>Strategies.</b> SSG builds HTML at build time. ISR serves pre-built HTML and refreshes it in the background after a time or an event. SSR renders on each request. CSR renders in the browser after JavaScript loads. A Next.js app can mix them route by route. A page with no request-time data can be prebuilt; <code>generateStaticParams</code> lists dynamic URLs to prebuild; request data such as cookies makes that part render per request, best wrapped in <code>&lt;Suspense&gt;</code>.</p><p><b>Caching is version-sensitive.</b> In the current docs, <code>fetch</code> results and Route Handlers are not cached by default, and you opt in. Next.js 16 documents Cache Components: set <code>cacheComponents: true</code>, mark data or components with <code>\"use cache\"</code> and choose a lifetime with <code>cacheLife</code>. Earlier setups use route segment options and <code>revalidate</code>. Check the docs for the version you run before promising cache behaviour.</p><p><b>Next.js, Vite React or Blazor?</b> Choose Next.js for public, SEO-sensitive sites that benefit from server rendering. Plain React with Vite fits an internal dashboard behind login, served as static files next to your API. Blazor fits a team that wants to stay in C#, at the cost of a smaller ecosystem and heavier runtime options.</p>",
        hi: "<p><b>Strategies।</b> SSG build के समय HTML बनाता है। ISR पहले से बना HTML परोसता है और कुछ समय या किसी event के बाद background में उसे refresh करता है। SSR हर request पर render करता है। CSR JavaScript load होने के बाद browser में render करता है। Next.js app route-दर-route इन्हें मिला सकती है। जिस page में request के समय का data नहीं, उसे पहले से बना सकते हैं; <code>generateStaticParams</code> पहले से बनने वाले dynamic URLs की list देता है; cookies जैसा request data उस हिस्से को हर request पर render करवाता है, उसे <code>&lt;Suspense&gt;</code> में रखना बेहतर है।</p><p><b>Caching version पर निर्भर है।</b> Current docs में <code>fetch</code> के results और Route Handlers by default cache नहीं होते, आप खुद चालू करते हो। Next.js 16 Cache Components document करता है: <code>cacheComponents: true</code> set करो, data या components पर <code>\"use cache\"</code> लगाओ और <code>cacheLife</code> से अवधि चुनो। पुराने setups route segment options और <code>revalidate</code> use करते हैं। Cache के बारे में कुछ कहने से पहले अपने version के docs देखो।</p><p><b>Next.js, Vite React या Blazor?</b> Public, SEO वाली sites के लिए जिन्हें server rendering से फ़ायदा हो, Next.js चुनो। Login के पीछे के internal dashboard के लिए Vite के साथ सादा React ठीक है, जो आपकी API के बगल में static files की तरह परोसा जाए। Blazor उस team के लिए है जो C# में रहना चाहती है, छोटे ecosystem और भारी runtime options की क़ीमत पर।</p>",
        hg: "<p><b>Strategies.</b> SSG build ke samay HTML banata hai. ISR pehle se bana HTML parosta hai aur kuch samay ya kisi event ke baad background mein use refresh karta hai. SSR har request par render karta hai. CSR JavaScript load hone ke baad browser mein render karta hai. Next.js app route-dar-route inhe mila sakti hai. Jis page mein request ke samay ka data nahi, use pehle se bana sakte hain; <code>generateStaticParams</code> pehle se banne wale dynamic URLs ki list deta hai; cookies jaisa request data us hisse ko har request par render karwata hai, use <code>&lt;Suspense&gt;</code> mein rakhna behtar hai.</p><p><b>Caching version par nirbhar hai.</b> Current docs mein <code>fetch</code> ke results aur Route Handlers by default cache nahi hote, aap khud chaalu karte ho. Next.js 16 Cache Components document karta hai: <code>cacheComponents: true</code> set karo, data ya components par <code>\"use cache\"</code> lagao aur <code>cacheLife</code> se avadhi chuno. Purane setups route segment options aur <code>revalidate</code> use karte hain. Cache ke baare mein kuch kehne se pehle apne version ke docs dekho.</p><p><b>Next.js, Vite React ya Blazor?</b> Public, SEO wali sites ke liye jinhe server rendering se faayda ho, Next.js chuno. Login ke peeche ke internal dashboard ke liye Vite ke saath saada React theek hai, jo aapki API ke bagal mein static files ki tarah parosa jaaye. Blazor us team ke liye hai jo C# mein rehna chahti hai, chhote ecosystem aur bhaari runtime options ki keemat par.</p>"
      },
      code: [
        {
          lang: "tsx",
          caption: {
            en: "Caching with Cache Components (Next.js 16 docs; needs cacheComponents: true, check your version) (TSX, display-only)",
            hi: "Cache Components से caching (Next.js 16 docs; cacheComponents: true चाहिए, अपना version देखो) (TSX, सिर्फ़ देखने के लिए)",
            hg: "Cache Components se caching (Next.js 16 docs; cacheComponents: true chahiye, apna version dekho) (TSX, sirf dekhne ke liye)"
          },
          check: "none",
          src: "// next.config.ts: const nextConfig = { cacheComponents: true };\nimport { cacheLife } from \"next/cache\";\nimport { Suspense } from \"react\";\nimport { cookies } from \"next/headers\";\n\nasync function AgentList() {\n  \"use cache\"; // same result for everyone, refreshed on the 'hours' profile\n  cacheLife(\"hours\");\n  const res = await fetch(`${process.env.CRM_API_URL}/api/agents`);\n  const agents: { id: number; name: string }[] = await res.json();\n  return <ul>{agents.map((a) => <li key={a.id}>{a.name}</li>)}</ul>;\n}\n\nasync function Greeting() {\n  const name = (await cookies()).get(\"name\")?.value ?? \"guest\"; // per-request data\n  return <p>Hello, {name}</p>;\n}\n\nexport default function Page() {\n  return (\n    <>\n      <AgentList />\n      <Suspense fallback={<p>Loading...</p>}>\n        <Greeting />\n      </Suspense>\n    </>\n  );\n}"
        }
      ]
    },
    {
      id: "nextjs-bff-actions",
      depth: "detailed",
      title: {
        en: "Suspense, Route Handlers as a BFF and Server Actions",
        hi: "Suspense, BFF के रूप में Route Handlers और Server Actions",
        hg: "Suspense, BFF ke roop mein Route Handlers aur Server Actions"
      },
      body: {
        en: "<p><b>Dynamic pages and Suspense.</b> In Next.js 15 and later, <code>params</code> and <code>searchParams</code> are promises, so you <code>await</code> them. Wrap a slow part in <code>&lt;Suspense&gt;</code> so the rest of the page streams first and the fallback shows meanwhile.</p><p><b>Route Handlers.</b> A <code>route.ts</code> file exports <code>GET</code>, <code>POST</code> and so on. In the current docs they are not cached by default. A handler can act as a small BFF (Day 16): read an <code>HttpOnly</code> cookie on the server, call the ASP.NET Core API with the token, and return only what the browser needs. Do not rebuild your whole business API in it when ASP.NET Core already owns that logic.</p><p><b>Server Actions (React 19).</b> A function marked <code>\"use server\"</code> can be used as a form <code>action</code>. The client form calls it with <code>useActionState</code>, which gives the last result, the action to pass to the form, and a pending flag. A Server Action is a public HTTP endpoint underneath, so validate and authorize inside it. <code>revalidatePath</code> refreshes cached data after a change.</p>",
        hi: "<p><b>Dynamic pages और Suspense।</b> Next.js 15 और उसके बाद <code>params</code> और <code>searchParams</code> promises हैं, इसलिए उन्हें <code>await</code> करो। धीमे हिस्से को <code>&lt;Suspense&gt;</code> में लपेटो ताकि बाकी page पहले stream हो जाए और तब तक fallback दिखे।</p><p><b>Route Handlers।</b> <code>route.ts</code> file <code>GET</code>, <code>POST</code> वगैरह export करती है। Current docs में ये by default cache नहीं होते। एक handler छोटे BFF का काम कर सकता है (Day 16): server पर <code>HttpOnly</code> cookie पढ़ो, token के साथ ASP.NET Core API call करो, और browser को सिर्फ़ वही लौटाओ जो उसे चाहिए। पूरी business API इसमें दोबारा मत बनाओ जब वह logic ASP.NET Core के पास पहले से है।</p><p><b>Server Actions (React 19)।</b> <code>\"use server\"</code> वाला function form का <code>action</code> बन सकता है। Client form उसे <code>useActionState</code> से call करता है, जो पिछला नतीजा, form को देने वाला action और एक pending flag देता है। Server Action अंदर से एक public HTTP endpoint है, इसलिए validate और authorize उसके अंदर करो। बदलाव के बाद <code>revalidatePath</code> cached data को refresh करता है।</p>",
        hg: "<p><b>Dynamic pages aur Suspense.</b> Next.js 15 aur uske baad <code>params</code> aur <code>searchParams</code> promises hain, isliye unhe <code>await</code> karo. Dheeme hisse ko <code>&lt;Suspense&gt;</code> mein lapeto taaki baaki page pehle stream ho jaaye aur tab tak fallback dikhe.</p><p><b>Route Handlers.</b> <code>route.ts</code> file <code>GET</code>, <code>POST</code> wagairah export karti hai. Current docs mein ye by default cache nahi hote. Ek handler chhote BFF ka kaam kar sakta hai (Day 16): server par <code>HttpOnly</code> cookie padho, token ke saath ASP.NET Core API call karo, aur browser ko sirf wahi lautao jo use chahiye. Poori business API ismein dobara mat banao jab woh logic ASP.NET Core ke paas pehle se hai.</p><p><b>Server Actions (React 19).</b> <code>\"use server\"</code> wala function form ka <code>action</code> ban sakta hai. Client form use <code>useActionState</code> se call karta hai, jo pichhla nateeja, form ko dene wala action aur ek pending flag deta hai. Server Action andar se ek public HTTP endpoint hai, isliye validate aur authorize uske andar karo. Badlaav ke baad <code>revalidatePath</code> cached data ko refresh karta hai.</p>"
      },
      code: [
        {
          lang: "tsx",
          caption: {
            en: "A dynamic Server Component page: await params, stream the slow part with Suspense (TSX, display-only)",
            hi: "Dynamic Server Component page: params को await करो, धीमा हिस्सा Suspense से stream करो (TSX, सिर्फ़ देखने के लिए)",
            hg: "Dynamic Server Component page: params ko await karo, dheema hissa Suspense se stream karo (TSX, sirf dekhne ke liye)"
          },
          check: "none",
          src: "// app/tickets/[id]/page.tsx  (no \"use client\": this runs on the server)\nimport { Suspense } from \"react\";\n\ntype Ticket = { id: number; customer: string; issue: string; status: string };\n\nasync function getTicket(id: string): Promise<Ticket> {\n  const res = await fetch(`${process.env.CRM_API_URL}/api/tickets/${id}`, {\n    headers: { \"X-Api-Key\": process.env.CRM_API_KEY ?? \"\" },\n  });\n  if (!res.ok) throw new Error(\"Ticket request failed: \" + res.status);\n  return res.json();\n}\n\nasync function TicketDetails({ id }: { id: string }) {\n  const ticket = await getTicket(id); // the slow part: wrapped in Suspense below\n  return (\n    <section>\n      <h1>Ticket #{ticket.id} for {ticket.customer}</h1>\n      <p>{ticket.issue} ({ticket.status})</p>\n    </section>\n  );\n}\n\nexport default async function Page({ params }: { params: Promise<{ id: string }> }) {\n  const { id } = await params; // params is a promise in current Next.js versions\n  return (\n    <Suspense fallback={<p>Loading ticket...</p>}>\n      <TicketDetails id={id} />\n    </Suspense>\n  );\n}"
        },
        {
          lang: "typescript",
          caption: {
            en: "A Route Handler acting as a small BFF: the token stays in an HttpOnly cookie (TypeScript, display-only)",
            hi: "छोटे BFF के रूप में Route Handler: token HttpOnly cookie में रहता है (TypeScript, सिर्फ़ देखने के लिए)",
            hg: "Chhote BFF ke roop mein Route Handler: token HttpOnly cookie mein rehta hai (TypeScript, sirf dekhne ke liye)"
          },
          check: "none",
          src: "// app/api/tickets/route.ts : a Route Handler acting as a small BFF\nimport { cookies } from \"next/headers\";\n\nexport async function GET() {\n  const token = (await cookies()).get(\"access_token\")?.value; // HttpOnly cookie set at login\n  if (!token) {\n    return Response.json({ title: \"Not signed in\" }, { status: 401 });\n  }\n\n  // Server-to-server call: no CORS involved, and the token never reaches the page\n  const upstream = await fetch(`${process.env.CRM_API_URL}/api/tickets`, {\n    headers: { Authorization: \"Bearer \" + token },\n  });\n  if (!upstream.ok) {\n    return Response.json({ title: \"Upstream error\" }, { status: 502 });\n  }\n\n  const tickets: { id: number; customer: string; internalNotes?: string }[] = await upstream.json();\n  // Return only what the browser needs\n  return Response.json(tickets.map(({ id, customer }) => ({ id, customer })));\n}"
        },
        {
          lang: "tsx",
          caption: {
            en: "A Server Action with useActionState for NewTicketForm (TSX, display-only; shown as two files)",
            hi: "NewTicketForm के लिए useActionState वाला Server Action (TSX, सिर्फ़ देखने के लिए; दो files के रूप में)",
            hg: "NewTicketForm ke liye useActionState wala Server Action (TSX, sirf dekhne ke liye; do files ke roop mein)"
          },
          check: "none",
          src: "// ---- app/tickets/actions.ts ----\n\"use server\";\n\nimport { revalidatePath } from \"next/cache\";\n\ntype FormState = { error: string | null };\n\nexport async function createTicket(prev: FormState, formData: FormData): Promise<FormState> {\n  // A Server Action is a public endpoint: validate (and authorize) here, on the server\n  const customer = String(formData.get(\"customer\") ?? \"\").trim();\n  const issue = String(formData.get(\"issue\") ?? \"\").trim();\n  if (!customer || issue.length < 5) return { error: \"Customer and an issue of 5+ characters are required\" };\n\n  const res = await fetch(`${process.env.CRM_API_URL}/api/tickets`, {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\", \"X-Api-Key\": process.env.CRM_API_KEY ?? \"\" },\n    body: JSON.stringify({ customer, issue }),\n  });\n  if (!res.ok) return { error: \"Could not create the ticket (HTTP \" + res.status + \")\" };\n\n  revalidatePath(\"/tickets\"); // refresh the cached list\n  return { error: null };\n}\n\n// ---- app/tickets/new-ticket-form.tsx ----\n\"use client\";\n\nimport { useActionState } from \"react\";\nimport { createTicket } from \"./actions\";\n\nexport default function NewTicketForm() {\n  const [state, formAction, pending] = useActionState(createTicket, { error: null });\n  return (\n    <form action={formAction}>\n      <input name=\"customer\" required />\n      <input name=\"issue\" required />\n      <button disabled={pending}>{pending ? \"Saving...\" : \"Create ticket\"}</button>\n      {state.error && <p role=\"alert\">{state.error}</p>}\n    </form>\n  );\n}"
        }
      ]
    },
    {
      id: "whats-new",
      depth: "detailed",
      title: {
        en: "What is new in React and Next.js",
        hi: "React और Next.js में नया क्या है",
        hg: "React aur Next.js mein naya kya hai"
      },
      body: {
        en: "<p><b>Currency check (this area moves fast):</b> React 19 became stable in December 2024 (confirmed by the Next.js 15.1 announcement). It adds Actions, form actions, <code>useActionState</code>, <code>useOptimistic</code> and the <code>use</code> API; the Next.js docs confirm <code>use</code>, so check react.dev for the rest and for current status. Next.js 16 documents a stable <code>reactCompiler</code> option (it needs <code>babel-plugin-react-compiler</code>), which can reduce hand-written <code>useMemo</code>/<code>useCallback</code>; check react.dev for the compiler's current status. A Next.js static export (<code>output: 'export'</code>) produces plain HTML, CSS and JavaScript files that need no Node.js server, but cookies, Server Actions and ISR are not available there.</p>",
        hi: "<p><b>Currency check (यह area तेज़ी से बदलता है):</b> React 19 December 2024 में stable हुआ (Next.js 15.1 के announcement से confirmed)। इसमें Actions, form actions, <code>useActionState</code>, <code>useOptimistic</code> और <code>use</code> API आते हैं; Next.js docs <code>use</code> को confirm करते हैं, बाक़ी के लिए और current status के लिए react.dev देखो। Next.js 16 एक stable <code>reactCompiler</code> option document करता है (इसे <code>babel-plugin-react-compiler</code> चाहिए), जो हाथ से लिखे <code>useMemo</code>/<code>useCallback</code> घटा सकता है; compiler के current status के लिए react.dev देखो। Next.js static export (<code>output: 'export'</code>) plain HTML, CSS और JavaScript files बनाता है जिन्हें Node.js server नहीं चाहिए, पर cookies, Server Actions और ISR वहाँ नहीं मिलते।</p>",
        hg: "<p><b>Currency check (yeh area tezi se badalta hai):</b> React 19 December 2024 mein stable hua (Next.js 15.1 ke announcement se confirmed). Isme Actions, form actions, <code>useActionState</code>, <code>useOptimistic</code> aur <code>use</code> API aate hain; Next.js docs <code>use</code> ko confirm karte hain, baaki ke liye aur current status ke liye react.dev dekho. Next.js 16 ek stable <code>reactCompiler</code> option document karta hai (ise <code>babel-plugin-react-compiler</code> chahiye), jo haath se likhe <code>useMemo</code>/<code>useCallback</code> ghata sakta hai; compiler ke current status ke liye react.dev dekho. Next.js static export (<code>output: 'export'</code>) plain HTML, CSS aur JavaScript files banata hai jinhe Node.js server nahi chahiye, par cookies, Server Actions aur ISR wahan nahi milte.</p>"
      }
    }
  ],
  qa: [
    {
      id: "what-is-react",
      depth: "short",
      q: "What is React, and how is it different from a framework like Angular?",
      answer: "React is a library for building UIs from components that describe the screen for the current state. Routing, data fetching and project structure come from other tools, while Angular ships them built in.",
      meaning: {
        hi: "React components से UI बनाने की library है जो मौजूदा state के लिए screen describe करती है। Routing, data fetching और structure दूसरे tools से आते हैं, जबकि Angular में ये built-in हैं।",
        hg: "React components se UI banane ki library hai jo maujooda state ke liye screen describe karti hai. Routing, data fetching aur structure doosre tools se aate hain, jabki Angular mein yeh built-in hain."
      },
      explain: {
        en: "<ul>\n<li>React's core job is small: components, state, rendering. You add a router, a data library and a build tool yourself, or you pick a framework on top (Next.js, Remix and others).</li>\n<li>It is <b>declarative</b>: you say what the UI looks like for this data, not which DOM nodes to change.</li>\n<li>.NET comparison: React is closer to the view layer of MVC plus component logic, while Angular is closer to a full framework like ASP.NET Core with its built-in services.</li>\n<li>TL angle: a library gives freedom and also decisions. Someone must choose and own the router, data layer and conventions, or every screen will look different.</li>\n<li>Follow-up: \"Why did you pick React for this project?\" Talk about ecosystem, hiring pool and team familiarity rather than \"it is faster\".</li>\n</ul>",
        hi: "<ul>\n<li>React का core काम छोटा है: components, state, rendering। Router, data library और build tool तुम ख़ुद जोड़ते हो, या ऊपर से कोई framework चुनते हो (Next.js, Remix वग़ैरह)।</li>\n<li>यह <b>declarative</b> है: तुम बताते हो कि इस data के लिए UI कैसी दिखती है, यह नहीं कि कौन-से DOM nodes बदलने हैं।</li>\n<li>.NET से comparison: React MVC की view layer और component logic के ज़्यादा क़रीब है, जबकि Angular ASP.NET Core जैसे पूरे framework के क़रीब है जिसमें built-in services हैं।</li>\n<li>TL angle: library आज़ादी देती है और साथ में decisions भी। किसी को router, data layer और conventions चुनने और own करने होंगे, वरना हर screen अलग दिखेगी।</li>\n<li>Follow-up: \"इस project के लिए React क्यों चुना?\" \"यह faster है\" की जगह ecosystem, hiring pool और team की familiarity की बात करो।</li>\n</ul>",
        hg: "<ul>\n<li>React ka core kaam chhota hai: components, state, rendering. Router, data library aur build tool tum khud jodte ho, ya upar se koi framework chunte ho (Next.js, Remix waghairah).</li>\n<li>Yeh <b>declarative</b> hai: tum batate ho ki is data ke liye UI kaisi dikhti hai, yeh nahi ki kaun-se DOM nodes badalne hain.</li>\n<li>.NET se comparison: React MVC ki view layer aur component logic ke zyaada kareeb hai, jabki Angular ASP.NET Core jaise poore framework ke kareeb hai jisme built-in services hain.</li>\n<li>TL angle: library aazaadi deti hai aur saath mein decisions bhi. Kisi ko router, data layer aur conventions chunne aur own karne honge, warna har screen alag dikhegi.</li>\n<li>Follow-up: \"Is project ke liye React kyon chuna?\" \"Yeh faster hai\" ki jagah ecosystem, hiring pool aur team ki familiarity ki baat karo.</li>\n</ul>"
      }
    },
    {
      id: "props-vs-state",
      depth: "short",
      q: "What is the difference between props and state?",
      answer: "Props are read-only inputs passed down by a parent; state is memory a component owns and updates itself. Changing state triggers a re-render, and data flows one way, down the tree.",
      meaning: {
        hi: "Props parent से मिले read-only inputs हैं; state component की अपनी memory है जिसे वह update करता है। State बदलने से re-render होता है, और data एक ही तरफ़, नीचे बहता है।",
        hg: "Props parent se mile read-only inputs hain; state component ki apni memory hai jise woh update karta hai. State badalne se re-render hota hai, aur data ek hi taraf, neeche behta hai."
      },
      explain: {
        en: "<ul>\n<li>Props are like method parameters in C#: the caller supplies them and the method does not reassign the caller's variables. State is like a private field that survives between calls, but changing it must go through the setter.</li>\n<li>A child tells its parent something by calling a <b>callback prop</b> (<code>onSelect</code>), not by editing the parent's data.</li>\n<li>If two siblings need the same value, move the state to their closest common parent (lifting state up).</li>\n<li>Do not copy props into state unless you really want an initial value that then diverges.</li>\n<li>Follow-up: \"What causes a re-render?\" A state change in the component, a parent re-rendering, or a changed context value it reads.</li>\n</ul>",
        hi: "<ul>\n<li>Props C# के method parameters जैसे हैं: caller देता है और method caller के variables को reassign नहीं करता। State एक private field जैसी है जो calls के बीच बची रहती है, पर उसे बदलना setter से ही होगा।</li>\n<li>Child अपने parent को कुछ बताता है <b>callback prop</b> (<code>onSelect</code>) call करके, parent का data edit करके नहीं।</li>\n<li>अगर दो siblings को same value चाहिए तो state को उनके सबसे नज़दीकी common parent में ले जाओ (lifting state up)।</li>\n<li>Props को state में copy मत करो, जब तक तुम्हें सच में ऐसी initial value नहीं चाहिए जो बाद में अलग हो जाए।</li>\n<li>Follow-up: \"Re-render किस वजह से होता है?\" component में state change, parent का re-render, या जो context value वह पढ़ता है उसका बदलना।</li>\n</ul>",
        hg: "<ul>\n<li>Props C# ke method parameters jaise hain: caller deta hai aur method caller ke variables ko reassign nahi karta. State ek private field jaisi hai jo calls ke beech bachi rehti hai, par use badalna setter se hi hoga.</li>\n<li>Child apne parent ko kuch batata hai <b>callback prop</b> (<code>onSelect</code>) call karke, parent ka data edit karke nahi.</li>\n<li>Agar do siblings ko same value chahiye to state ko unke sabse nazdeeki common parent mein le jao (lifting state up).</li>\n<li>Props ko state mein copy mat karo, jab tak tumhe sach mein aisi initial value nahi chahiye jo baad mein alag ho jaaye.</li>\n<li>Follow-up: \"Re-render kis wajah se hota hai?\" component mein state change, parent ka re-render, ya jo context value woh padhta hai uska badalna.</li>\n</ul>"
      }
    },
    {
      id: "keys-in-lists",
      depth: "short",
      q: "Why do list items need keys, and why is using the array index risky?",
      answer: "Keys let React match items between renders. Use a stable, unique id; an index key can attach the wrong state or DOM to a row when the list is reordered, filtered or has items inserted.",
      meaning: {
        hi: "Keys से React renders के बीच items को match करता है। Stable, unique id use करो; list reorder, filter या insert होने पर index key ग़लत row के साथ ग़लत state या DOM जोड़ सकती है।",
        hg: "Keys se React renders ke beech items ko match karta hai. Stable, unique id use karo; list reorder, filter ya insert hone par index key galat row ke saath galat state ya DOM jod sakti hai."
      },
      explain: {
        en: "<ul>\n<li>Think of a key like a primary key. React uses it to decide \"this is the same item as before\" and keep its state (for example text typed in an input in that row).</li>\n<li>With index keys, deleting the first row makes the old second row take index 0, so React reuses the first row's component state for it. Puzzle 3 shows this with a small model.</li>\n<li>Keys must be unique among siblings only, not globally. Do not generate them with <code>Math.random()</code> during render; that forces a new component on every render.</li>\n<li>An index key is acceptable for a static list that is never reordered, filtered or edited.</li>\n<li>Follow-up: \"Can you use a key to reset a component's state?\" Yes, changing the key creates a fresh instance.</li>\n</ul>",
        hi: "<ul>\n<li>Key को primary key जैसा समझो। React इससे तय करता है कि \"यह वही item है जो पहले था\" और उसकी state रखता है (जैसे उस row के input में typed text)।</li>\n<li>Index keys के साथ पहली row delete करने पर पुरानी दूसरी row को index 0 मिल जाता है, इसलिए React पहली row की component state उसे दे देता है। Puzzle 3 इसे छोटे model से दिखाता है।</li>\n<li>Keys सिर्फ़ siblings में unique होनी चाहिए, globally नहीं। उन्हें render के दौरान <code>Math.random()</code> से मत बनाओ; इससे हर render पर नया component बन जाता है।</li>\n<li>Index key उस static list के लिए ठीक है जो कभी reorder, filter या edit नहीं होती।</li>\n<li>Follow-up: \"क्या key से component की state reset कर सकते हैं?\" हाँ, key बदलने से fresh instance बनता है।</li>\n</ul>",
        hg: "<ul>\n<li>Key ko primary key jaisa samjho. React isse tay karta hai ki \"yeh wahi item hai jo pehle tha\" aur uski state rakhta hai (jaise us row ke input mein typed text).</li>\n<li>Index keys ke saath pehli row delete karne par purani doosri row ko index 0 mil jaata hai, isliye React pehli row ki component state use de deta hai. Puzzle 3 ise chhote model se dikhata hai.</li>\n<li>Keys sirf siblings mein unique honi chahiye, globally nahi. Unhe render ke dauran <code>Math.random()</code> se mat banao; isse har render par naya component ban jaata hai.</li>\n<li>Index key us static list ke liye theek hai jo kabhi reorder, filter ya edit nahi hoti.</li>\n<li>Follow-up: \"Kya key se component ki state reset kar sakte hain?\" Haan, key badalne se fresh instance banta hai.</li>\n</ul>"
      }
    },
    {
      id: "setstate-snapshot",
      depth: "short",
      q: "Why does calling setCount(count + 1) three times only increase the count by one?",
      answer: "Each render sees a snapshot where count is fixed, so all three calls queue the same value. Use setCount(c =&gt; c + 1) so each update builds on the latest queued value.",
      meaning: {
        hi: "हर render एक snapshot देखता है जिसमें count fixed है, इसलिए तीनों calls वही value queue करती हैं। setCount(c =&gt; c + 1) use करो ताकि हर update latest queued value पर बने।",
        hg: "Har render ek snapshot dekhta hai jisme count fixed hai, isliye teeno calls wahi value queue karti hain. setCount(c =&gt; c + 1) use karo taaki har update latest queued value par bane."
      },
      explain: {
        en: "<ul>\n<li><code>count</code> is a constant for the whole render and its handlers. <code>setCount</code> schedules the next render; it does not change the variable you already hold.</li>\n<li>React batches the queued updates and re-renders once. With plain values the queue is \"1, 1, 1\" and the last wins; with updaters it is \"+1, +1, +1\" applied in order.</li>\n<li>Reading the state right after calling the setter in the same handler gives the old value; this surprises people coming from C# properties.</li>\n<li>Batching also applies in timeouts, promises and native event handlers since React 18.</li>\n<li>Follow-up: \"When is a plain value fine?\" When the new value does not depend on the old one, such as <code>setName(e.target.value)</code>.</li>\n</ul>",
        hi: "<ul>\n<li>पूरे render और उसके handlers के लिए <code>count</code> एक constant है। <code>setCount</code> अगला render schedule करता है; जो variable तुम्हारे पास पहले से है उसे नहीं बदलता।</li>\n<li>React queued updates को batch करके एक बार re-render करता है। Plain values के साथ queue \"1, 1, 1\" होती है और आख़िरी जीतती है; updaters के साथ वह \"+1, +1, +1\" है जो order में apply होती है।</li>\n<li>उसी handler में setter call करने के तुरंत बाद state पढ़ोगे तो पुरानी value मिलेगी; C# properties से आने वालों को यह चौंकाता है।</li>\n<li>React 18 से batching timeouts, promises और native event handlers में भी लागू होती है।</li>\n<li>Follow-up: \"Plain value कब ठीक है?\" जब नई value पुरानी पर depend न करे, जैसे <code>setName(e.target.value)</code>।</li>\n</ul>",
        hg: "<ul>\n<li>Poore render aur uske handlers ke liye <code>count</code> ek constant hai. <code>setCount</code> agla render schedule karta hai; jo variable tumhare paas pehle se hai use nahi badalta.</li>\n<li>React queued updates ko batch karke ek baar re-render karta hai. Plain values ke saath queue \"1, 1, 1\" hoti hai aur aakhri jeetti hai; updaters ke saath woh \"+1, +1, +1\" hai jo order mein apply hoti hai.</li>\n<li>Usi handler mein setter call karne ke turant baad state padhoge to purani value milegi; C# properties se aane walon ko yeh chaunkata hai.</li>\n<li>React 18 se batching timeouts, promises aur native event handlers mein bhi laagu hoti hai.</li>\n<li>Follow-up: \"Plain value kab theek hai?\" jab nayi value purani par depend na kare, jaise <code>setName(e.target.value)</code>.</li>\n</ul>"
      }
    },
    {
      id: "useeffect-dependencies",
      depth: "short",
      q: "How does the useEffect dependency array work?",
      answer: "React re-runs the effect after a render only if a dependency changed (Object.is). No array means every render, an empty array means once on mount; the returned function cleans up the previous run.",
      meaning: {
        hi: "Render के बाद React effect तभी दोबारा चलाता है जब कोई dependency बदली हो (Object.is से compare)। Array नहीं = हर render, खाली array = mount पर एक बार, और return किया function पिछले run का cleanup करता है।",
        hg: "Render ke baad React effect tabhi dobara chalata hai jab koi dependency badli ho (Object.is se compare). Array nahi = har render, khaali array = mount par ek baar, aur return kiya function pichle run ka cleanup karta hai."
      },
      explain: {
        en: "<ul>\n<li>List every reactive value (props, state, values derived from them) that the effect reads. The <code>react-hooks/exhaustive-deps</code> ESLint rule flags missing ones; treat its warning as a bug report.</li>\n<li>An object, array or function created in the component body is a new reference every render, so as a dependency it re-runs the effect each time. Move it inside the effect or outside the component, or depend on its primitive fields.</li>\n<li>Cleanup runs before the next run and on unmount; use it to abort requests, clear timers and unsubscribe.</li>\n<li>Lying about dependencies (an empty array while reading <code>count</code>) gives stale closures, like the loop traps on Day 23.</li>\n<li>Follow-up: \"Is an effect the right place for this?\" See \"You might not need an effect\" below.</li>\n</ul>",
        hi: "<ul>\n<li>Effect जो भी reactive value (props, state, उनसे बनी values) पढ़ता है उसे list करो। <code>react-hooks/exhaustive-deps</code> ESLint rule missing वाली flag करता है; उसकी warning को bug report समझो।</li>\n<li>Component body में बना object, array या function हर render पर नया reference होता है, इसलिए dependency के रूप में वह effect को हर बार चला देता है। उसे effect के अंदर या component के बाहर ले जाओ, या उसके primitive fields पर depend करो।</li>\n<li>Cleanup अगले run से पहले और unmount पर चलता है; requests abort करने, timers clear करने और unsubscribe करने में use करो।</li>\n<li>Dependencies के बारे में झूठ बोलना (<code>count</code> पढ़ते हुए खाली array) stale closures देता है, Day 23 के loop traps जैसे।</li>\n<li>Follow-up: \"क्या इसके लिए effect सही जगह है?\" नीचे \"You might not need an effect\" देखो।</li>\n</ul>",
        hg: "<ul>\n<li>Effect jo bhi reactive value (props, state, unse bani values) padhta hai use list karo. <code>react-hooks/exhaustive-deps</code> ESLint rule missing wali flag karta hai; uski warning ko bug report samjho.</li>\n<li>Component body mein bana object, array ya function har render par naya reference hota hai, isliye dependency ke roop mein woh effect ko har baar chala deta hai. Use effect ke andar ya component ke bahar le jao, ya uske primitive fields par depend karo.</li>\n<li>Cleanup agle run se pehle aur unmount par chalta hai; requests abort karne, timers clear karne aur unsubscribe karne mein use karo.</li>\n<li>Dependencies ke baare mein jhooth bolna (<code>count</code> padhte hue khaali array) stale closures deta hai, Day 23 ke loop traps jaise.</li>\n<li>Follow-up: \"Kya iske liye effect sahi jagah hai?\" neeche \"You might not need an effect\" dekho.</li>\n</ul>"
      }
    },
    {
      id: "server-vs-client-components",
      depth: "short",
      q: "What is the difference between Server Components and Client Components in the Next.js App Router?",
      answer: "Server Components are the default: they render on the server, can await data and use secrets, and ship no component JavaScript. Client Components ('use client') are for state, effects, event handlers and browser APIs.",
      meaning: {
        hi: "Server Components default हैं: ये server पर render होते हैं, data await कर सकते हैं, secrets use कर सकते हैं और component का JavaScript नहीं भेजते। Client Components ('use client') state, effects, event handlers और browser APIs के लिए हैं।",
        hg: "Server Components default hain: yeh server par render hote hain, data await kar sakte hain, secrets use kar sakte hain aur component ka JavaScript nahi bhejte. Client Components ('use client') state, effects, event handlers aur browser APIs ke liye hain."
      },
      explain: {
        en: "<ul>\n<li><code>'use client'</code> marks a <b>boundary</b>: that file and the modules it imports go to the browser bundle. You do not need it on every client-side component; put it on the interactive entry points.</li>\n<li>Client Components are still pre-rendered to HTML on the server for the first load and then hydrated. \"Client\" means \"also runs in the browser\", not \"runs only in the browser\".</li>\n<li>Props from server to client must be serialisable (plain data, not functions or class instances). A server component can also pass a promise that a client component reads with React's <code>use</code> API.</li>\n<li>A server component can be passed into a client component as <code>children</code>, which keeps the server part out of the bundle.</li>\n<li>Follow-up: \"Can a Client Component import a Server Component?\" Importing it makes it part of the client bundle; pass it as <code>children</code> instead.</li>\n</ul>",
        hi: "<ul>\n<li><code>'use client'</code> एक <b>boundary</b> mark करता है: वह file और उसके imported modules browser bundle में जाते हैं। हर client-side component पर इसकी ज़रूरत नहीं; इसे interactive entry points पर लगाओ।</li>\n<li>Client Components भी पहले load के लिए server पर HTML में pre-render होते हैं और फिर hydrate होते हैं। \"Client\" का मतलब \"browser में भी चलता है\", \"सिर्फ़ browser में चलता है\" नहीं।</li>\n<li>Server से client को जाने वाले props serialisable होने चाहिए (plain data, functions या class instances नहीं)। Server component एक promise भी दे सकता है जिसे client component React के <code>use</code> API से पढ़ता है।</li>\n<li>Server component को client component में <code>children</code> की तरह दिया जा सकता है, जिससे server वाला हिस्सा bundle से बाहर रहता है।</li>\n<li>Follow-up: \"क्या Client Component किसी Server Component को import कर सकता है?\" import करने से वह client bundle का हिस्सा बन जाता है; उसकी जगह <code>children</code> की तरह पास करो।</li>\n</ul>",
        hg: "<ul>\n<li><code>'use client'</code> ek <b>boundary</b> mark karta hai: woh file aur uske imported modules browser bundle mein jaate hain. Har client-side component par iski zaroorat nahi; ise interactive entry points par lagao.</li>\n<li>Client Components bhi pehle load ke liye server par HTML mein pre-render hote hain aur phir hydrate hote hain. \"Client\" ka matlab \"browser mein bhi chalta hai\", \"sirf browser mein chalta hai\" nahi.</li>\n<li>Server se client ko jaane wale props serialisable hone chahiye (plain data, functions ya class instances nahi). Server component ek promise bhi de sakta hai jise client component React ke <code>use</code> API se padhta hai.</li>\n<li>Server component ko client component mein <code>children</code> ki tarah diya ja sakta hai, jisse server wala hissa bundle se bahar rehta hai.</li>\n<li>Follow-up: \"Kya Client Component kisi Server Component ko import kar sakta hai?\" import karne se woh client bundle ka hissa ban jaata hai; uski jagah <code>children</code> ki tarah pass karo.</li>\n</ul>"
      }
    },
    {
      id: "ssr-ssg-isr-csr",
      depth: "short",
      q: "Explain SSR, SSG, ISR and CSR. How do you choose?",
      answer: "SSG builds HTML at build time, ISR refreshes prebuilt pages in the background, SSR renders per request, and CSR renders in the browser after JavaScript loads. Choose per route by freshness and SEO needs.",
      meaning: {
        hi: "SSG build time पर HTML बनाता है, ISR prebuilt pages को background में refresh करता है, SSR हर request पर render करता है, और CSR JavaScript load होने के बाद browser में। Route के हिसाब से freshness और SEO देखकर चुनो।",
        hg: "SSG build time par HTML banata hai, ISR prebuilt pages ko background mein refresh karta hai, SSR har request par render karta hai, aur CSR JavaScript load hone ke baad browser mein. Route ke hisaab se freshness aur SEO dekhkar chuno."
      },
      explain: {
        en: "<ul>\n<li><b>SSG:</b> fastest to serve (a file on a CDN), but content is as old as the last build. Good for docs and marketing pages.</li>\n<li><b>ISR:</b> like SSG, but pages are refreshed after a time or on demand, so you avoid a full rebuild for every content change.</li>\n<li><b>SSR:</b> HTML per request, for personalised or always-fresh data, at the cost of server work on each request.</li>\n<li><b>CSR:</b> the server sends a shell and JavaScript fetches data; fine behind a login where SEO does not matter, but the first meaningful paint comes later.</li>\n<li>In the App Router you rarely pick one global mode: static parts, cached parts and request-time parts can live on the same page with <code>&lt;Suspense&gt;</code>. Exact APIs and defaults changed across Next.js 14, 15 and 16, so confirm with the docs of your version.</li>\n<li>Follow-up: \"A product page with price changes every few minutes?\" Cache with a short lifetime (ISR idea) or stream the price part, instead of fully dynamic rendering.</li>\n</ul>",
        hi: "<ul>\n<li><b>SSG:</b> serve करने में सबसे तेज़ (CDN पर एक file), पर content उतना ही पुराना जितना आख़िरी build। Docs और marketing pages के लिए अच्छा।</li>\n<li><b>ISR:</b> SSG जैसा, पर pages समय के बाद या on demand refresh होते हैं, इसलिए हर content change पर पूरा rebuild नहीं करना पड़ता।</li>\n<li><b>SSR:</b> हर request पर HTML, personalised या हमेशा-fresh data के लिए, हर request पर server के काम की क़ीमत पर।</li>\n<li><b>CSR:</b> server एक shell भेजता है और JavaScript data fetch करता है; login के पीछे जहाँ SEO मायने नहीं रखता वहाँ ठीक है, पर पहला meaningful paint देर से आता है।</li>\n<li>App Router में तुम शायद ही कोई एक global mode चुनते हो: static हिस्से, cached हिस्से और request-time हिस्से एक ही page पर <code>&lt;Suspense&gt;</code> के साथ रह सकते हैं। Exact APIs और defaults Next.js 14, 15 और 16 में बदले हैं, इसलिए अपने version के docs से confirm करो।</li>\n<li>Follow-up: \"Product page जिसकी price हर कुछ मिनट में बदलती है?\" पूरी तरह dynamic rendering की जगह छोटी lifetime के साथ cache करो (ISR का idea) या price वाला हिस्सा stream करो।</li>\n</ul>",
        hg: "<ul>\n<li><b>SSG:</b> serve karne mein sabse tez (CDN par ek file), par content utna hi purana jitna aakhri build. Docs aur marketing pages ke liye achha.</li>\n<li><b>ISR:</b> SSG jaisa, par pages samay ke baad ya on demand refresh hote hain, isliye har content change par poora rebuild nahi karna padta.</li>\n<li><b>SSR:</b> har request par HTML, personalised ya hamesha-fresh data ke liye, har request par server ke kaam ki keemat par.</li>\n<li><b>CSR:</b> server ek shell bhejta hai aur JavaScript data fetch karta hai; login ke peeche jahan SEO maayne nahi rakhta wahan theek hai, par pehla meaningful paint der se aata hai.</li>\n<li>App Router mein tum shaayad hi koi ek global mode chunte ho: static hisse, cached hisse aur request-time hisse ek hi page par <code>&lt;Suspense&gt;</code> ke saath reh sakte hain. Exact APIs aur defaults Next.js 14, 15 aur 16 mein badle hain, isliye apne version ke docs se confirm karo.</li>\n<li>Follow-up: \"Product page jiski price har kuch minute mein badalti hai?\" Poori tarah dynamic rendering ki jagah chhoti lifetime ke saath cache karo (ISR ka idea) ya price wala hissa stream karo.</li>\n</ul>"
      }
    },
    {
      id: "nextjs-vs-react-vs-blazor",
      depth: "short",
      q: "As a Tech Lead in a .NET shop, how would you choose between Next.js, plain React with Vite, and Blazor?",
      answer: "I weigh SEO, team skills, hosting and the cost of a second runtime. Next.js suits public SEO pages, Vite React suits internal SPAs, and Blazor suits teams that want to stay in C#.",
      meaning: {
        hi: "मैं SEO, team skills, hosting और दूसरे runtime की क़ीमत तौलता हूँ। Public SEO pages के लिए Next.js, internal SPAs के लिए Vite React, और C# में रहना चाहने वाली teams के लिए Blazor।",
        hg: "Main SEO, team skills, hosting aur doosre runtime ki keemat taulta hoon. Public SEO pages ke liye Next.js, internal SPAs ke liye Vite React, aur C# mein rehna chahne wali teams ke liye Blazor."
      },
      explain: {
        en: "<ul>\n<li><b>Next.js:</b> server rendering and streaming for public pages, built-in routing and Route Handlers. Costs: a Node.js server (or a hosting platform) next to ASP.NET Core, a fast-moving framework (caching behaviour changed across major versions), and two languages in the team.</li>\n<li><b>Vite + React SPA:</b> static files you can host on a CDN or from the ASP.NET Core <code>wwwroot</code>; simple and cheap to run. Weaker for SEO and first paint, which rarely matters behind a login.</li>\n<li><b>Blazor:</b> C# end to end, shared models and validation with the API. Trade-offs: a smaller front-end ecosystem and hiring pool, and the hosting model matters (Blazor Server keeps a live connection per user; WebAssembly downloads a runtime to the browser). Check the current options for your .NET version.</li>\n<li>Decision inputs to name: public vs internal, SEO, team's JavaScript depth, hiring, hosting and operations (who runs Node), how many front ends the company already has.</li>\n<li>Follow-up: \"What if the team knows only C#?\" Start with the option that keeps delivery risk low and invest in training before adopting a second stack.</li>\n</ul>",
        hi: "<ul>\n<li><b>Next.js:</b> public pages के लिए server rendering और streaming, built-in routing और Route Handlers। क़ीमत: ASP.NET Core के बग़ल में Node.js server (या hosting platform), तेज़ी से बदलता framework (caching behaviour major versions में बदला है), और team में दो languages।</li>\n<li><b>Vite + React SPA:</b> static files जिन्हें CDN पर या ASP.NET Core के <code>wwwroot</code> से host कर सकते हो; चलाना सरल और सस्ता। SEO और first paint में कमज़ोर, जो login के पीछे कम ही मायने रखता है।</li>\n<li><b>Blazor:</b> शुरू से आख़िर तक C#, API के साथ shared models और validation। Trade-offs: छोटा front-end ecosystem और hiring pool, और hosting model मायने रखता है (Blazor Server हर user के लिए live connection रखता है; WebAssembly browser में runtime download करता है)। अपने .NET version के current options देखो।</li>\n<li>Decision inputs जो बोलने हैं: public vs internal, SEO, team की JavaScript depth, hiring, hosting और operations (Node कौन चलाएगा), company में पहले से कितने front ends हैं।</li>\n<li>Follow-up: \"अगर team सिर्फ़ C# जानती है?\" वह option शुरू करो जिसमें delivery risk कम हो और दूसरा stack अपनाने से पहले training में invest करो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Next.js:</b> public pages ke liye server rendering aur streaming, built-in routing aur Route Handlers. Keemat: ASP.NET Core ke bagal mein Node.js server (ya hosting platform), tezi se badalta framework (caching behaviour major versions mein badla hai), aur team mein do languages.</li>\n<li><b>Vite + React SPA:</b> static files jinhe CDN par ya ASP.NET Core ke <code>wwwroot</code> se host kar sakte ho; chalana saral aur sasta. SEO aur first paint mein kamzor, jo login ke peeche kam hi maayne rakhta hai.</li>\n<li><b>Blazor:</b> shuru se aakhir tak C#, API ke saath shared models aur validation. Trade-offs: chhota front-end ecosystem aur hiring pool, aur hosting model maayne rakhta hai (Blazor Server har user ke liye live connection rakhta hai; WebAssembly browser mein runtime download karta hai). Apne .NET version ke current options dekho.</li>\n<li>Decision inputs jo bolne hain: public vs internal, SEO, team ki JavaScript depth, hiring, hosting aur operations (Node kaun chalayega), company mein pehle se kitne front ends hain.</li>\n<li>Follow-up: \"Agar team sirf C# jaanti hai?\" woh option shuru karo jisme delivery risk kam ho aur doosra stack apnaane se pehle training mein invest karo.</li>\n</ul>"
      }
    },
    {
      id: "virtual-dom",
      depth: "detailed",
      q: "What is the virtual DOM, and is it the reason React is fast?",
      answer: "It is a lightweight UI description that React compares between renders (reconciliation) to apply only the needed DOM changes. It makes declarative code practical, but is not automatically faster than careful manual DOM updates.",
      meaning: {
        hi: "यह UI का हल्का description है जिसे React renders के बीच compare करता है (reconciliation) ताकि सिर्फ़ ज़रूरी DOM changes लगें। यह declarative code को practical बनाता है, पर careful manual DOM updates से अपने-आप तेज़ नहीं है।",
        hg: "Yeh UI ka halka description hai jise React renders ke beech compare karta hai (reconciliation) taaki sirf zaroori DOM changes lagein. Yeh declarative code ko practical banata hai, par careful manual DOM updates se apne-aap tez nahi hai."
      },
      explain: {
        en: "<ul>\n<li>On each render, components return a tree of plain objects. React diffs it against the previous tree and updates only the DOM nodes that differ.</li>\n<li>The diff uses two heuristics: elements of a different type are replaced, and <b>keys</b> identify children in lists. That is why unstable keys hurt.</li>\n<li>The benefit is a simple mental model (UI = function of state) with reasonable performance, not a guarantee of speed. Re-rendering a huge tree on every keystroke can still be slow.</li>\n<li>Follow-up: \"Does a re-render mean the DOM changed?\" No. React renders (calls your function) first, and touches the DOM only for differences.</li>\n</ul>",
        hi: "<ul>\n<li>हर render पर components plain objects का tree return करते हैं। React उसे पिछले tree से diff करता है और सिर्फ़ वे DOM nodes update करता है जो अलग हैं।</li>\n<li>Diff दो heuristics use करता है: अलग type के elements replace होते हैं, और lists में children की पहचान <b>keys</b> से होती है। इसीलिए unstable keys नुकसान करती हैं।</li>\n<li>फ़ायदा है सरल mental model (UI = state का function) और ठीक-ठाक performance, speed की guarantee नहीं। हर keystroke पर बहुत बड़े tree को re-render करना फिर भी धीमा हो सकता है।</li>\n<li>Follow-up: \"क्या re-render का मतलब DOM बदला?\" नहीं। React पहले render करता है (तुम्हारा function call करता है), और DOM को सिर्फ़ differences के लिए छूता है।</li>\n</ul>",
        hg: "<ul>\n<li>Har render par components plain objects ka tree return karte hain. React use pichle tree se diff karta hai aur sirf woh DOM nodes update karta hai jo alag hain.</li>\n<li>Diff do heuristics use karta hai: alag type ke elements replace hote hain, aur lists mein children ki pehchaan <b>keys</b> se hoti hai. Isiliye unstable keys nuksaan karti hain.</li>\n<li>Faayda hai saral mental model (UI = state ka function) aur theek-thaak performance, speed ki guarantee nahi. Har keystroke par bahut bade tree ko re-render karna phir bhi dheema ho sakta hai.</li>\n<li>Follow-up: \"Kya re-render ka matlab DOM badla?\" Nahi. React pehle render karta hai (tumhara function call karta hai), aur DOM ko sirf differences ke liye chhoota hai.</li>\n</ul>"
      }
    },
    {
      id: "what-is-jsx",
      depth: "detailed",
      q: "What is JSX, and does the browser understand it?",
      answer: "JSX is HTML-like syntax that a build tool compiles into plain JavaScript function calls. Browsers cannot run it directly, so Vite, Next.js or a similar compiler must transform it first.",
      meaning: {
        hi: "JSX HTML जैसा syntax है जिसे build tool plain JavaScript function calls में compile करता है। Browsers इसे सीधे नहीं चला सकते, इसलिए Vite, Next.js या कोई compiler पहले इसे transform करता है।",
        hg: "JSX HTML jaisa syntax hai jise build tool plain JavaScript function calls mein compile karta hai. Browsers ise seedhe nahi chala sakte, isliye Vite, Next.js ya koi compiler pehle ise transform karta hai."
      },
      explain: {
        en: "<ul>\n<li>A tag becomes a call that returns a description object; the first snippet in the components section models this in plain JavaScript.</li>\n<li>JSX differences from HTML: <code>className</code>, <code>htmlFor</code>, camelCase event names such as <code>onClick</code>, and every tag must be closed. An expression goes in <code>{}</code>; statements such as <code>if</code> do not.</li>\n<li>JSX escapes text by default, which helps against XSS; <code>dangerouslySetInnerHTML</code> is the deliberate escape hatch and needs trusted or sanitised input.</li>\n<li>A component returns one root, or a fragment <code>&lt;&gt;...&lt;/&gt;</code>.</li>\n<li>Follow-up: \"Is JSX required?\" No, you can call the element function directly, but almost nobody does.</li>\n</ul>",
        hi: "<ul>\n<li>Tag एक call बन जाता है जो description object return करती है; components section का पहला snippet इसे plain JavaScript में model करता है।</li>\n<li>HTML से JSX के फ़र्क: <code>className</code>, <code>htmlFor</code>, <code>onClick</code> जैसे camelCase event names, और हर tag बंद होना चाहिए। Expression <code>{}</code> में जाता है; <code>if</code> जैसे statements नहीं।</li>\n<li>JSX text को default में escape करता है, जो XSS से बचाने में मदद करता है; <code>dangerouslySetInnerHTML</code> जानबूझकर वाला escape hatch है और trusted या sanitised input माँगता है।</li>\n<li>Component एक root return करता है, या fragment <code>&lt;&gt;...&lt;/&gt;</code>।</li>\n<li>Follow-up: \"क्या JSX ज़रूरी है?\" नहीं, element function सीधे call कर सकते हो, पर लगभग कोई नहीं करता।</li>\n</ul>",
        hg: "<ul>\n<li>Tag ek call ban jaata hai jo description object return karti hai; components section ka pehla snippet ise plain JavaScript mein model karta hai.</li>\n<li>HTML se JSX ke fark: <code>className</code>, <code>htmlFor</code>, <code>onClick</code> jaise camelCase event names, aur har tag band hona chahiye. Expression <code>{}</code> mein jaata hai; <code>if</code> jaise statements nahi.</li>\n<li>JSX text ko default mein escape karta hai, jo XSS se bachane mein madad karta hai; <code>dangerouslySetInnerHTML</code> jaanbujhkar wala escape hatch hai aur trusted ya sanitised input maangta hai.</li>\n<li>Component ek root return karta hai, ya fragment <code>&lt;&gt;...&lt;/&gt;</code>.</li>\n<li>Follow-up: \"Kya JSX zaroori hai?\" Nahi, element function seedhe call kar sakte ho, par lagbhag koi nahi karta.</li>\n</ul>"
      }
    },
    {
      id: "lifting-state-up",
      depth: "detailed",
      q: "What does 'lifting state up' mean, and when do you stop?",
      answer: "When two components need the same data, move the state to their closest common parent and pass it down as props with callbacks to change it. Stop when props pass through many layers; consider context.",
      meaning: {
        hi: "जब दो components को same data चाहिए, state को उनके सबसे नज़दीकी common parent में ले जाओ और props से नीचे दो, बदलने के लिए callbacks के साथ। जब props कई layers से गुज़रने लगें तो context सोचो।",
        hg: "Jab do components ko same data chahiye, state ko unke sabse nazdeeki common parent mein le jao aur props se neeche do, badalne ke liye callbacks ke saath. Jab props kai layers se guzarne lagein to context socho."
      },
      explain: {
        en: "<ul>\n<li>It keeps one source of truth and avoids two copies drifting apart. Puzzle 6 models a parent with two siblings.</li>\n<li>Do not lift higher than needed: every state change re-renders the owner and, by default, its children.</li>\n<li>If the value is needed by many distant components (theme, current user), React context avoids prop drilling. In Next.js, context providers must be Client Components.</li>\n<li>For server data shared across screens, a data library cache (TanStack Query) is often a better home than component state.</li>\n<li>Follow-up: \"Context or Redux?\" Start with props and context; adopt a state library when you have complex shared client state that benefits from its tooling.</li>\n</ul>",
        hi: "<ul>\n<li>इससे एक ही source of truth रहता है और दो copies के अलग होने से बचाव होता है। Puzzle 6 एक parent और दो siblings को model करता है।</li>\n<li>ज़रूरत से ऊपर lift मत करो: हर state change owner को और, default में, उसके children को re-render करता है।</li>\n<li>अगर value कई दूर-दूर के components को चाहिए (theme, current user) तो React context prop drilling से बचाता है। Next.js में context providers Client Components होने चाहिए।</li>\n<li>Screens के बीच share होने वाले server data के लिए data library का cache (TanStack Query) अक्सर component state से बेहतर घर है।</li>\n<li>Follow-up: \"Context या Redux?\" props और context से शुरू करो; जब complex shared client state हो जिसे library के tooling से फ़ायदा हो तब state library लाओ।</li>\n</ul>",
        hg: "<ul>\n<li>Isse ek hi source of truth rehta hai aur do copies ke alag hone se bachaav hota hai. Puzzle 6 ek parent aur do siblings ko model karta hai.</li>\n<li>Zaroorat se upar lift mat karo: har state change owner ko aur, default mein, uske children ko re-render karta hai.</li>\n<li>Agar value kai door-door ke components ko chahiye (theme, current user) to React context prop drilling se bachata hai. Next.js mein context providers Client Components hone chahiye.</li>\n<li>Screens ke beech share hone wale server data ke liye data library ka cache (TanStack Query) aksar component state se behtar ghar hai.</li>\n<li>Follow-up: \"Context ya Redux?\" props aur context se shuru karo; jab complex shared client state ho jise library ke tooling se faayda ho tab state library lao.</li>\n</ul>"
      }
    },
    {
      id: "effect-runs-twice",
      depth: "detailed",
      q: "Why does my useEffect run twice in development, and is that a bug?",
      answer: "In development, Strict Mode deliberately runs setup, cleanup and setup again on mount to expose missing cleanup. It is not a bug and does not run in production; fix the cleanup, not Strict Mode.",
      meaning: {
        hi: "Development में Strict Mode जानबूझकर mount पर setup, cleanup और फिर setup चलाता है ताकि missing cleanup पकड़ा जाए। यह bug नहीं है और production builds में नहीं होता; Strict Mode हटाने की जगह effect का cleanup ठीक करो।",
        hg: "Development mein Strict Mode jaanbujhkar mount par setup, cleanup aur phir setup chalata hai taaki missing cleanup pakda jaaye. Yeh bug nahi hai aur production builds mein nahi hota; Strict Mode hatane ki jagah effect ka cleanup theek karo."
      },
      explain: {
        en: "<ul>\n<li>The extra cycle simulates a user leaving and returning to the screen. A correct effect (with cleanup) behaves the same either way; a leaking one shows duplicate subscriptions or requests.</li>\n<li>Typical fixes: abort the fetch in cleanup, remove event listeners, clear timers, disconnect sockets. Puzzle 7 models the leak.</li>\n<li>For a one-time action such as sending analytics on page view, an effect is still the place (no cleanup needed); a duplicate log in development is acceptable. Do not use a \"ran once\" ref flag to hide the double run.</li>\n<li>Follow-up: \"A POST in an effect fired twice in dev?\" A POST belongs in an event handler (user action), not in an effect.</li>\n</ul>",
        hi: "<ul>\n<li>Extra cycle एक user के screen छोड़कर वापस आने को simulate करता है। सही effect (cleanup के साथ) दोनों तरह एक जैसा चलता है; leak करने वाला duplicate subscriptions या requests दिखाता है।</li>\n<li>Typical fixes: cleanup में fetch abort करो, event listeners हटाओ, timers clear करो, sockets disconnect करो। Puzzle 7 leak को model करता है।</li>\n<li>Page view पर analytics भेजने जैसे one-time action के लिए effect अब भी सही जगह है (cleanup की ज़रूरत नहीं); development में duplicate log चलेगा। Double run छुपाने के लिए \"ran once\" वाला ref flag मत लगाओ।</li>\n<li>Follow-up: \"Effect में POST dev में दो बार चला?\" POST event handler (user action) में होना चाहिए, effect में नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>Extra cycle ek user ke screen chhodkar wapas aane ko simulate karta hai. Sahi effect (cleanup ke saath) dono tarah ek jaisa chalta hai; leak karne wala duplicate subscriptions ya requests dikhata hai.</li>\n<li>Typical fixes: cleanup mein fetch abort karo, event listeners hatao, timers clear karo, sockets disconnect karo. Puzzle 7 leak ko model karta hai.</li>\n<li>Page view par analytics bhejne jaise one-time action ke liye effect ab bhi sahi jagah hai (cleanup ki zaroorat nahi); development mein duplicate log chalega. Double run chhupane ke liye \"ran once\" wala ref flag mat lagao.</li>\n<li>Follow-up: \"Effect mein POST dev mein do baar chala?\" POST event handler (user action) mein hona chahiye, effect mein nahi.</li>\n</ul>"
      }
    },
    {
      id: "you-might-not-need-an-effect",
      depth: "detailed",
      q: "When should you not use useEffect?",
      answer: "Do not use it to derive values from props or state (compute during render) or to respond to a click (use the event handler). Effects are for synchronising with things outside React.",
      meaning: {
        hi: "Props या state से values निकालने के लिए (render के दौरान compute करो) या click का जवाब देने के लिए (event handler use करो) इसे use मत करो। Effects React के बाहर की चीज़ों से sync करने के लिए हैं।",
        hg: "Props ya state se values nikaalne ke liye (render ke dauran compute karo) ya click ka jawab dene ke liye (event handler use karo) ise use mat karo. Effects React ke bahar ki cheezon se sync karne ke liye hain."
      },
      explain: {
        en: "<ul>\n<li>Pattern to avoid: <code>useEffect(() =&gt; setFullName(first + \" \" + last), [first, last])</code>. It renders with the old value, then again with the new one. Write <code>const fullName = first + \" \" + last</code>.</li>\n<li>Resetting state when a prop changes: give the component a <code>key</code> instead of an effect.</li>\n<li>Sending a form: do it in <code>onSubmit</code>. The user's action caused it, not a state change.</li>\n<li>Data fetching in an effect works but needs cleanup, races handling and caching by hand; a data library or a Server Component is usually better.</li>\n<li>Follow-up: \"How would you review this in a pull request?\" Ask \"what outside system is this synchronising with?\" If the answer is \"none\", it probably is not an effect.</li>\n</ul>",
        hi: "<ul>\n<li>बचने वाला pattern: <code>useEffect(() =&gt; setFullName(first + \" \" + last), [first, last])</code>। यह पुरानी value से render करता है, फिर नई से दोबारा। लिखो <code>const fullName = first + \" \" + last</code>।</li>\n<li>Prop बदलने पर state reset करना: effect की जगह component को <code>key</code> दो।</li>\n<li>Form भेजना: <code>onSubmit</code> में करो। इसकी वजह user की action है, state change नहीं।</li>\n<li>Effect में data fetching चलती है, पर cleanup, races handling और caching हाथ से करनी पड़ती है; data library या Server Component आम तौर पर बेहतर है।</li>\n<li>Follow-up: \"Pull request में इसे कैसे review करोगे?\" पूछो \"यह बाहर के किस system से sync हो रहा है?\" जवाब \"कोई नहीं\" हो तो शायद यह effect नहीं है।</li>\n</ul>",
        hg: "<ul>\n<li>Bachne wala pattern: <code>useEffect(() =&gt; setFullName(first + \" \" + last), [first, last])</code>. Yeh purani value se render karta hai, phir nayi se dobara. Likho <code>const fullName = first + \" \" + last</code>.</li>\n<li>Prop badalne par state reset karna: effect ki jagah component ko <code>key</code> do.</li>\n<li>Form bhejna: <code>onSubmit</code> mein karo. Iski wajah user ki action hai, state change nahi.</li>\n<li>Effect mein data fetching chalti hai, par cleanup, races handling aur caching haath se karni padti hai; data library ya Server Component aam taur par behtar hai.</li>\n<li>Follow-up: \"Pull request mein ise kaise review karoge?\" poocho \"yeh bahar ke kis system se sync ho raha hai?\" Jawab \"koi nahi\" ho to shaayad yeh effect nahi hai.</li>\n</ul>"
      }
    },
    {
      id: "usememo-usecallback",
      depth: "detailed",
      q: "When should you use useMemo and useCallback?",
      answer: "When profiling shows an expensive calculation or unnecessary re-renders of a memoised child. They cache a value or function between renders; they are performance hints, not a default for every function.",
      meaning: {
        hi: "जब profiling दिखाए कि कोई महँगी calculation है या memoised child बेवजह re-render हो रहा है। ये renders के बीच value या function cache करते हैं; ये performance hints हैं, हर function के लिए default नहीं।",
        hg: "Jab profiling dikhaye ki koi mehngi calculation hai ya memoised child bewajah re-render ho raha hai. Yeh renders ke beech value ya function cache karte hain; yeh performance hints hain, har function ke liye default nahi."
      },
      explain: {
        en: "<ul>\n<li><code>useMemo(() =&gt; compute(a), [a])</code> remembers the result until <code>a</code> changes. <code>useCallback(fn, deps)</code> remembers the function itself.</li>\n<li><code>useCallback</code> helps only when the function goes to a child wrapped in <code>React.memo</code> or into another hook's dependency list. Otherwise it adds code and no benefit.</li>\n<li>React may discard cached values, so the code must stay correct without them. Measure with the React DevTools Profiler first.</li>\n<li>Newer React tooling (the React Compiler) can add memoisation automatically; whether your project uses it is a team and version decision.</li>\n<li>Follow-up: \"Is it wrong to wrap everything in useCallback?\" It is noise: harder to read and the comparisons themselves cost something.</li>\n</ul>",
        hi: "<ul>\n<li><code>useMemo(() =&gt; compute(a), [a])</code> result को तब तक याद रखता है जब तक <code>a</code> बदलता नहीं। <code>useCallback(fn, deps)</code> function को ही याद रखता है।</li>\n<li><code>useCallback</code> तभी मदद करता है जब function <code>React.memo</code> में लिपटे child को या किसी दूसरे hook की dependency list में जाए। वरना code बढ़ता है, फ़ायदा नहीं।</li>\n<li>React cached values फेंक सकता है, इसलिए code उनके बिना भी सही रहना चाहिए। पहले React DevTools Profiler से measure करो।</li>\n<li>नया React tooling (React Compiler) memoisation अपने-आप जोड़ सकता है; तुम्हारा project उसे use करता है या नहीं, यह team और version का decision है।</li>\n<li>Follow-up: \"क्या सब कुछ useCallback में लपेटना ग़लत है?\" यह noise है: पढ़ना मुश्किल और comparisons की भी अपनी cost है।</li>\n</ul>",
        hg: "<ul>\n<li><code>useMemo(() =&gt; compute(a), [a])</code> result ko tab tak yaad rakhta hai jab tak <code>a</code> badalta nahi. <code>useCallback(fn, deps)</code> function ko hi yaad rakhta hai.</li>\n<li><code>useCallback</code> tabhi madad karta hai jab function <code>React.memo</code> mein lipte child ko ya kisi doosre hook ki dependency list mein jaaye. Warna code badhta hai, faayda nahi.</li>\n<li>React cached values phenk sakta hai, isliye code unke bina bhi sahi rehna chahiye. Pehle React DevTools Profiler se measure karo.</li>\n<li>Naya React tooling (React Compiler) memoisation apne-aap jod sakta hai; tumhara project use use karta hai ya nahi, yeh team aur version ka decision hai.</li>\n<li>Follow-up: \"Kya sab kuch useCallback mein lapetna galat hai?\" Yeh noise hai: padhna mushkil aur comparisons ki bhi apni cost hai.</li>\n</ul>"
      }
    },
    {
      id: "useref",
      depth: "detailed",
      q: "What is useRef, and how is it different from useState?",
      answer: "useRef holds a mutable value or a DOM node that persists across renders, and changing it does not trigger a re-render. State updates trigger renders and should drive what appears on screen.",
      meaning: {
        hi: "useRef ऐसी mutable value या DOM node रखता है जो renders के बीच बची रहती है, और उसे बदलने से re-render नहीं होता। State updates render करवाते हैं और screen पर जो दिखता है उसे चलाने चाहिए।",
        hg: "useRef aisi mutable value ya DOM node rakhta hai jo renders ke beech bachi rehti hai, aur use badalne se re-render nahi hota. State updates render karwate hain aur screen par jo dikhta hai use chalane chahiye."
      },
      explain: {
        en: "<ul>\n<li>Common uses: focus an input, hold a timer id, keep the previous value, store an <code>AbortController</code>.</li>\n<li>Do not read or write <code>ref.current</code> during render for values that affect output; React cannot see the change. Write it in event handlers or effects.</li>\n<li>Rule of thumb: if the screen must change when it changes, use state; if only your code needs to remember it, use a ref.</li>\n<li>Follow-up: \"Is a ref the same as a module-level variable?\" No. A ref is per component instance and survives re-renders, while a module variable is shared by every instance.</li>\n</ul>",
        hi: "<ul>\n<li>आम use: input को focus करना, timer id रखना, पिछली value रखना, <code>AbortController</code> store करना।</li>\n<li>जो values output पर असर डालती हैं उनके लिए render के दौरान <code>ref.current</code> पढ़ो या लिखो मत; React को बदलाव दिखता नहीं। इसे event handlers या effects में लिखो।</li>\n<li>Rule of thumb: जिसके बदलने पर screen बदलनी चाहिए उसके लिए state, जिसे सिर्फ़ तुम्हारा code याद रखे उसके लिए ref।</li>\n<li>Follow-up: \"क्या ref और module-level variable एक ही चीज़ है?\" नहीं। Ref हर component instance का अपना है और re-renders में बचा रहता है, जबकि module variable हर instance में share होता है।</li>\n</ul>",
        hg: "<ul>\n<li>Aam use: input ko focus karna, timer id rakhna, pichli value rakhna, <code>AbortController</code> store karna.</li>\n<li>Jo values output par asar daalti hain unke liye render ke dauran <code>ref.current</code> padho ya likho mat; React ko badlaav dikhta nahi. Ise event handlers ya effects mein likho.</li>\n<li>Rule of thumb: jiske badalne par screen badalni chahiye uske liye state, jise sirf tumhara code yaad rakhe uske liye ref.</li>\n<li>Follow-up: \"Kya ref aur module-level variable ek hi cheez hai?\" Nahi. Ref har component instance ka apna hai aur re-renders mein bacha rehta hai, jabki module variable har instance mein share hota hai.</li>\n</ul>"
      }
    },
    {
      id: "custom-hooks",
      depth: "detailed",
      q: "What is a custom hook, and do two components using it share state?",
      answer: "A custom hook is a function starting with use that calls other hooks to reuse logic. Each component that calls it gets its own state; hooks share logic, not data.",
      meaning: {
        hi: "Custom hook <code>use</code> से शुरू होने वाला function है जो logic reuse करने के लिए दूसरे hooks call करता है। इसे call करने वाले हर component को अपना state मिलता है; hooks logic share करते हैं, data नहीं।",
        hg: "Custom hook <code>use</code> se shuru hone wala function hai jo logic reuse karne ke liye doosre hooks call karta hai. Ise call karne wale har component ko apna state milta hai; hooks logic share karte hain, data nahi."
      },
      explain: {
        en: "<ul>\n<li>Example: <code>useOnlineStatus()</code> or <code>useDebouncedValue(value, ms)</code> wraps state plus effect plus cleanup behind a simple call.</li>\n<li>The <code>use</code> prefix lets lint rules enforce the rules of hooks: call hooks at the top level of a component or another hook, not inside loops, conditions or nested functions.</li>\n<li>Analogy for a .NET dev: a custom hook is like an extension method or a helper service, but each caller gets its own instance state, like a transient service.</li>\n<li>To share data between components, lift state or use context or a data library.</li>\n<li>Follow-up: \"How do you test a custom hook?\" With a test renderer helper from your testing library, or by testing a component that uses it (Day 25 covers testing).</li>\n</ul>",
        hi: "<ul>\n<li>Example: <code>useOnlineStatus()</code> या <code>useDebouncedValue(value, ms)</code> state, effect और cleanup को एक simple call के पीछे रखता है।</li>\n<li><code>use</code> prefix से lint rules hooks के rules enforce कर पाते हैं: hooks को component या दूसरे hook के top level पर call करो, loops, conditions या nested functions के अंदर नहीं।</li>\n<li>.NET dev के लिए analogy: custom hook extension method या helper service जैसा है, पर हर caller को अपना instance state मिलता है, transient service जैसा।</li>\n<li>Components के बीच data share करने के लिए state lift करो या context या data library use करो।</li>\n<li>Follow-up: \"Custom hook को test कैसे करोगे?\" अपनी testing library के test renderer helper से, या उसे use करने वाले component को test करके (Day 25 testing cover करता है)।</li>\n</ul>",
        hg: "<ul>\n<li>Example: <code>useOnlineStatus()</code> ya <code>useDebouncedValue(value, ms)</code> state, effect aur cleanup ko ek simple call ke peeche rakhta hai.</li>\n<li><code>use</code> prefix se lint rules hooks ke rules enforce kar paate hain: hooks ko component ya doosre hook ke top level par call karo, loops, conditions ya nested functions ke andar nahi.</li>\n<li>.NET dev ke liye analogy: custom hook extension method ya helper service jaisa hai, par har caller ko apna instance state milta hai, transient service jaisa.</li>\n<li>Components ke beech data share karne ke liye state lift karo ya context ya data library use karo.</li>\n<li>Follow-up: \"Custom hook ko test kaise karoge?\" apni testing library ke test renderer helper se, ya use use karne wale component ko test karke (Day 25 testing cover karta hai).</li>\n</ul>"
      }
    },
    {
      id: "controlled-vs-uncontrolled",
      depth: "detailed",
      q: "What is a controlled component, and when would you use an uncontrolled one?",
      answer: "A controlled input gets its value from state and updates it in onChange, so React is the single source of truth. Uncontrolled inputs let the DOM hold the value; fine for simple submit-only forms.",
      meaning: {
        hi: "Controlled input अपनी value state से लेता है और onChange में उसे update करता है, इसलिए React ही single source of truth है। Uncontrolled inputs में value DOM रखता है; simple submit-only forms के लिए ठीक है।",
        hg: "Controlled input apni value state se leta hai aur onChange mein use update karta hai, isliye React hi single source of truth hai. Uncontrolled inputs mein value DOM rakhta hai; simple submit-only forms ke liye theek hai."
      },
      explain: {
        en: "<ul>\n<li>Controlled: <code>&lt;input value={name} onChange={e =&gt; setName(e.target.value)} /&gt;</code>. Easy live validation, disabling the submit button, formatting while typing.</li>\n<li>If you set <code>value</code> without <code>onChange</code>, the field becomes read-only and React warns.</li>\n<li>Uncontrolled: use <code>defaultValue</code> and read the value on submit with <code>FormData</code> or a ref; less code, fewer re-renders for big forms.</li>\n<li>Server-side validation still decides: the ASP.NET Core API must validate again (Day 13); client checks are for user experience.</li>\n<li>Follow-up: \"How do form libraries relate?\" Libraries such as React Hook Form mostly use uncontrolled inputs underneath to reduce re-renders; choosing one is a team decision.</li>\n</ul>",
        hi: "<ul>\n<li>Controlled: <code>&lt;input value={name} onChange={e =&gt; setName(e.target.value)} /&gt;</code>। Live validation, submit button disable करना, typing के दौरान formatting आसान।</li>\n<li><code>onChange</code> के बिना <code>value</code> set करोगे तो field read-only हो जाता है और React warn करता है।</li>\n<li>Uncontrolled: <code>defaultValue</code> use करो और submit पर <code>FormData</code> या ref से value पढ़ो; कम code, बड़े forms में कम re-renders।</li>\n<li>Server-side validation अब भी फ़ैसला करती है: ASP.NET Core API को फिर से validate करना होगा (Day 13); client checks user experience के लिए हैं।</li>\n<li>Follow-up: \"Form libraries का इससे क्या लेना-देना?\" React Hook Form जैसी libraries re-renders घटाने के लिए नीचे ज़्यादातर uncontrolled inputs use करती हैं; कौन-सी लेनी है यह team decision है।</li>\n</ul>",
        hg: "<ul>\n<li>Controlled: <code>&lt;input value={name} onChange={e =&gt; setName(e.target.value)} /&gt;</code>. Live validation, submit button disable karna, typing ke dauran formatting aasaan.</li>\n<li><code>onChange</code> ke bina <code>value</code> set karoge to field read-only ho jaata hai aur React warn karta hai.</li>\n<li>Uncontrolled: <code>defaultValue</code> use karo aur submit par <code>FormData</code> ya ref se value padho; kam code, bade forms mein kam re-renders.</li>\n<li>Server-side validation ab bhi faisla karti hai: ASP.NET Core API ko phir se validate karna hoga (Day 13); client checks user experience ke liye hain.</li>\n<li>Follow-up: \"Form libraries ka isse kya lena-dena?\" React Hook Form jaisi libraries re-renders ghatane ke liye neeche zyaadatar uncontrolled inputs use karti hain; kaun-si leni hai yeh team decision hai.</li>\n</ul>"
      }
    },
    {
      id: "react-calls-aspnet-api-cors",
      depth: "detailed",
      q: "Your React app on localhost:5173 calls our ASP.NET Core API and the browser blocks it. What is happening and how do you fix it?",
      answer: "The browser enforces CORS because the origins differ. Register a CORS policy for the exact front-end origin and call UseCors, or proxy through the dev server; do not allow everything.",
      meaning: {
        hi: "Origins अलग हैं इसलिए browser CORS enforce कर रहा है। API पर exact front-end origin के लिए CORS policy register करो और UseCors call करो, या dev server से proxy करो; सब कुछ allow मत करो।",
        hg: "Origins alag hain isliye browser CORS enforce kar raha hai. API par exact front-end origin ke liye CORS policy register karo aur UseCors call karo, ya dev server se proxy karo; sab kuch allow mat karo."
      },
      explain: {
        en: "<ul>\n<li>Origin = scheme + host + port, so <code>localhost:5173</code> and <code>localhost:5001</code> are different origins. The browser sends the request (or a <b>preflight</b> <code>OPTIONS</code> request first for non-simple calls) and refuses to expose the response unless the server's CORS headers allow it.</li>\n<li>Fix on the server: <code>AddCors</code> with a named policy (see the C# snippet), <code>UseCors</code> in the pipeline (Day 13 covers CORS in depth). Add <code>AllowCredentials</code> only with explicit origins when you use cookies.</li>\n<li>Alternative in development: a dev-server proxy so the browser calls the same origin. In production a reverse proxy or gateway (Day 16) can serve both under one origin, removing CORS.</li>\n<li>CORS protects the user's browser; it is not an authentication or server-side security control. curl and Postman ignore it, so do not rely on it to protect the API.</li>\n<li>Follow-up: \"The request works in Postman but not the browser?\" That points to CORS, not to the API logic.</li>\n</ul>",
        hi: "<ul>\n<li>Origin = scheme + host + port, इसलिए <code>localhost:5173</code> और <code>localhost:5001</code> अलग origins हैं। Browser request भेजता है (या non-simple calls के लिए पहले <b>preflight</b> <code>OPTIONS</code> request) और server के CORS headers allow न करें तो response expose करने से मना कर देता है।</li>\n<li>Server पर fix: named policy के साथ <code>AddCors</code> (C# snippet देखो), pipeline में <code>UseCors</code> (Day 13 CORS को गहराई से cover करता है)। Cookies use करो तो <code>AllowCredentials</code> सिर्फ़ explicit origins के साथ लगाओ।</li>\n<li>Development में alternative: dev-server proxy ताकि browser same origin को call करे। Production में reverse proxy या gateway (Day 16) दोनों को एक origin के नीचे serve करके CORS हटा सकता है।</li>\n<li>CORS user के browser की हिफ़ाज़त करता है; यह authentication या server-side security control नहीं है। curl और Postman इसे ignore करते हैं, इसलिए API की security के लिए इस पर भरोसा मत करो।</li>\n<li>Follow-up: \"Request Postman में चलती है पर browser में नहीं?\" यह CORS की तरफ़ इशारा करता है, API logic की तरफ़ नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>Origin = scheme + host + port, isliye <code>localhost:5173</code> aur <code>localhost:5001</code> alag origins hain. Browser request bhejta hai (ya non-simple calls ke liye pehle <b>preflight</b> <code>OPTIONS</code> request) aur server ke CORS headers allow na karein to response expose karne se mana kar deta hai.</li>\n<li>Server par fix: named policy ke saath <code>AddCors</code> (C# snippet dekho), pipeline mein <code>UseCors</code> (Day 13 CORS ko gehraai se cover karta hai). Cookies use karo to <code>AllowCredentials</code> sirf explicit origins ke saath lagao.</li>\n<li>Development mein alternative: dev-server proxy taaki browser same origin ko call kare. Production mein reverse proxy ya gateway (Day 16) dono ko ek origin ke neeche serve karke CORS hata sakta hai.</li>\n<li>CORS user ke browser ki hifaazat karta hai; yeh authentication ya server-side security control nahi hai. curl aur Postman ise ignore karte hain, isliye API ki security ke liye is par bharosa mat karo.</li>\n<li>Follow-up: \"Request Postman mein chalti hai par browser mein nahi?\" yeh CORS ki taraf ishaara karta hai, API logic ki taraf nahi.</li>\n</ul>"
      }
    },
    {
      id: "spa-token-storage",
      depth: "detailed",
      q: "Where would you store an access token in a single-page app?",
      answer: "I avoid long-lived tokens in localStorage because any XSS can read them. A server-set HttpOnly, Secure, SameSite cookie, often via a BFF, keeps tokens away from JavaScript but needs CSRF protection.",
      meaning: {
        hi: "मैं लंबी उम्र वाले tokens को localStorage में रखने से बचता हूँ क्योंकि कोई भी XSS उन्हें पढ़ सकता है। Server द्वारा set की गई HttpOnly, Secure, SameSite cookie, अक्सर BFF के ज़रिए, tokens को JavaScript से दूर रखती है, पर CSRF protection चाहिए।",
        hg: "Main lambi umar wale tokens ko localStorage mein rakhne se bachta hoon kyonki koi bhi XSS unhe padh sakta hai. Server dwara set ki gayi HttpOnly, Secure, SameSite cookie, aksar BFF ke zariye, tokens ko JavaScript se door rakhti hai, par CSRF protection chahiye."
      },
      explain: {
        en: "<ul>\n<li><code>localStorage</code>/<code>sessionStorage</code>: simple, but readable by any script running on the page (your code, a compromised npm package, an XSS bug). Short-lived tokens limit the damage but do not remove the risk.</li>\n<li><b>HttpOnly cookie:</b> JavaScript cannot read it. Use <code>Secure</code>, a suitable <code>SameSite</code> value, and CSRF defences for state-changing requests. Cookies are sent automatically, which is the CSRF risk.</li>\n<li><b>BFF pattern (Day 16):</b> a small server next to the front end performs the login flow, keeps the tokens server-side and gives the browser only a session cookie. Next.js Route Handlers or ASP.NET Core can play this role.</li>\n<li>Either way: sanitise output, set a Content-Security-Policy, keep dependencies updated. Security is a layered topic; Day 26 goes deeper.</li>\n<li>Follow-up: \"Is a cookie always safer?\" It trades XSS exposure for CSRF concerns; the right answer is a layered one, not a slogan.</li>\n</ul>",
        hi: "<ul>\n<li><code>localStorage</code>/<code>sessionStorage</code>: सरल, पर page पर चलने वाला कोई भी script इन्हें पढ़ सकता है (तुम्हारा code, कोई compromised npm package, XSS bug)। छोटी उम्र वाले tokens नुकसान सीमित करते हैं पर risk ख़त्म नहीं करते।</li>\n<li><b>HttpOnly cookie:</b> JavaScript इसे पढ़ नहीं सकता। <code>Secure</code>, सही <code>SameSite</code> value, और state बदलने वाले requests के लिए CSRF defences लगाओ। Cookies अपने-आप भेजी जाती हैं, यही CSRF का risk है।</li>\n<li><b>BFF pattern (Day 16):</b> front end के बग़ल का छोटा server login flow करता है, tokens server-side रखता है और browser को सिर्फ़ session cookie देता है। यह role Next.js Route Handlers या ASP.NET Core निभा सकते हैं।</li>\n<li>दोनों तरह: output sanitise करो, Content-Security-Policy लगाओ, dependencies updated रखो। Security layered topic है; Day 26 और गहराई में जाता है।</li>\n<li>Follow-up: \"क्या cookie हमेशा ज़्यादा safe है?\" यह XSS exposure को CSRF concerns से बदलती है; सही जवाब layered है, slogan नहीं।</li>\n</ul>",
        hg: "<ul>\n<li><code>localStorage</code>/<code>sessionStorage</code>: saral, par page par chalne wala koi bhi script inhe padh sakta hai (tumhara code, koi compromised npm package, XSS bug). Chhoti umar wale tokens nuksaan seemit karte hain par risk khatam nahi karte.</li>\n<li><b>HttpOnly cookie:</b> JavaScript ise padh nahi sakta. <code>Secure</code>, sahi <code>SameSite</code> value, aur state badalne wale requests ke liye CSRF defences lagao. Cookies apne-aap bheji jaati hain, yahi CSRF ka risk hai.</li>\n<li><b>BFF pattern (Day 16):</b> front end ke bagal ka chhota server login flow karta hai, tokens server-side rakhta hai aur browser ko sirf session cookie deta hai. Yeh role Next.js Route Handlers ya ASP.NET Core nibha sakte hain.</li>\n<li>Dono tarah: output sanitise karo, Content-Security-Policy lagao, dependencies updated rakho. Security layered topic hai; Day 26 aur gehraai mein jaata hai.</li>\n<li>Follow-up: \"Kya cookie hamesha zyaada safe hai?\" yeh XSS exposure ko CSRF concerns se badalti hai; sahi jawab layered hai, slogan nahi.</li>\n</ul>"
      }
    },
    {
      id: "typescript-props",
      depth: "detailed",
      q: "How do you type props in React with TypeScript, and is it worth it?",
      answer: "Declare a type or interface for the props object and annotate the component parameter, including callback signatures and children. It catches wrong props at compile time, like typed method parameters in C#.",
      meaning: {
        hi: "Props object के लिए type या interface declare करो और component parameter को annotate करो, callback signatures और children समेत। यह ग़लत props को compile time पर पकड़ता है, C# के typed method parameters जैसे।",
        hg: "Props object ke liye type ya interface declare karo aur component parameter ko annotate karo, callback signatures aur children samet. Yeh galat props ko compile time par pakadta hai, C# ke typed method parameters jaise."
      },
      explain: {
        en: "<ul>\n<li>Example: <code>type Props = { order: Order; onSelect: (id: number) =&gt; void; children?: React.ReactNode }</code>.</li>\n<li>Generate API types from your OpenAPI document (ASP.NET Core can publish one) so the front-end and back-end contracts do not drift; this is a good TL-level practice.</li>\n<li>TypeScript checks at build time only. Data arriving from the network is still untrusted at runtime; validate it at the boundary if the shape matters.</li>\n<li>Prefer <code>unknown</code> over <code>any</code>; the compiler then forces a check. Turn on <code>strict</code> in <code>tsconfig</code>.</li>\n<li>Follow-up: \"type or interface?\" Both work for props; pick one and let ESLint enforce it.</li>\n</ul>",
        hi: "<ul>\n<li>Example: <code>type Props = { order: Order; onSelect: (id: number) =&gt; void; children?: React.ReactNode }</code>।</li>\n<li>अपने OpenAPI document से API types generate करो (ASP.NET Core एक publish कर सकता है) ताकि front-end और back-end के contracts अलग न हों; यह TL-level की अच्छी practice है।</li>\n<li>TypeScript सिर्फ़ build time पर check करता है। Network से आने वाला data runtime पर अब भी untrusted है; shape मायने रखती हो तो boundary पर validate करो।</li>\n<li><code>any</code> की जगह <code>unknown</code> पसंद करो; तब compiler check करवाता है। <code>tsconfig</code> में <code>strict</code> चालू करो।</li>\n<li>Follow-up: \"type या interface?\" दोनों props के लिए चलते हैं; एक चुनो और ESLint से enforce करवाओ।</li>\n</ul>",
        hg: "<ul>\n<li>Example: <code>type Props = { order: Order; onSelect: (id: number) =&gt; void; children?: React.ReactNode }</code>.</li>\n<li>Apne OpenAPI document se API types generate karo (ASP.NET Core ek publish kar sakta hai) taaki front-end aur back-end ke contracts alag na hon; yeh TL-level ki achhi practice hai.</li>\n<li>TypeScript sirf build time par check karta hai. Network se aane wala data runtime par ab bhi untrusted hai; shape maayne rakhti ho to boundary par validate karo.</li>\n<li><code>any</code> ki jagah <code>unknown</code> pasand karo; tab compiler check karwata hai. <code>tsconfig</code> mein <code>strict</code> chalu karo.</li>\n<li>Follow-up: \"type ya interface?\" dono props ke liye chalte hain; ek chuno aur ESLint se enforce karwao.</li>\n</ul>"
      }
    },
    {
      id: "route-handlers-and-bff",
      depth: "detailed",
      q: "What are Route Handlers in Next.js, and when would you use one instead of calling the ASP.NET Core API directly?",
      answer: "A route.ts file exports HTTP method functions as small server endpoints. Use one as a BFF to keep tokens and secrets server-side or to shape responses; call the API directly from Server Components otherwise.",
      meaning: {
        hi: "route.ts file HTTP method functions को छोटे server endpoints की तरह export करती है। Tokens और secrets server-side रखने या responses का shape बदलने के लिए इसे BFF की तरह use करो; वरना Server Components से सीधे API call करो।",
        hg: "route.ts file HTTP method functions ko chhote server endpoints ki tarah export karti hai. Tokens aur secrets server-side rakhne ya responses ka shape badalne ke liye ise BFF ki tarah use karo; warna Server Components se seedhe API call karo."
      },
      explain: {
        en: "<ul>\n<li>A <code>route.ts</code> exports <code>GET</code>, <code>POST</code> and so on using the Web <code>Request</code>/<code>Response</code> types. It cannot live at the same segment as a <code>page</code> file.</li>\n<li>Good fits: a BFF that reads an HttpOnly cookie and calls ASP.NET Core with a bearer token, a webhook receiver, a thin proxy that removes fields the browser should not see.</li>\n<li>Poor fits: duplicating business logic that already lives in ASP.NET Core. That creates two backends to secure, test and deploy. A Server Component can call the API or database directly without an extra hop.</li>\n<li>Caching defaults have changed between versions; in the current docs Route Handlers are not cached by default. Check your version.</li>\n<li>Follow-up: \"Why not call the API from the browser?\" Valid when the API is designed for browsers (CORS, short-lived tokens); a BFF is chosen when you want tokens off the client.</li>\n</ul>",
        hi: "<ul>\n<li><code>route.ts</code> Web <code>Request</code>/<code>Response</code> types के साथ <code>GET</code>, <code>POST</code> वग़ैरह export करती है। यह <code>page</code> file वाले same segment में नहीं रह सकती।</li>\n<li>अच्छे fit: BFF जो HttpOnly cookie पढ़कर bearer token के साथ ASP.NET Core call करे, webhook receiver, पतला proxy जो वे fields हटा दे जो browser को नहीं दिखने चाहिए।</li>\n<li>ख़राब fit: वह business logic दोहराना जो पहले से ASP.NET Core में है। इससे दो backends बन जाते हैं जिन्हें secure, test और deploy करना पड़ता है। Server Component बिना extra hop के API या database को सीधे call कर सकता है।</li>\n<li>Caching defaults versions के बीच बदले हैं; मौजूदा docs में Route Handlers by default cache नहीं होते। अपना version देखो।</li>\n<li>Follow-up: \"Browser से API क्यों call नहीं करते?\" जब API browsers के लिए design हो (CORS, छोटी उम्र के tokens) तब ठीक है; जब tokens को client से दूर रखना हो तब BFF चुना जाता है।</li>\n</ul>",
        hg: "<ul>\n<li><code>route.ts</code> Web <code>Request</code>/<code>Response</code> types ke saath <code>GET</code>, <code>POST</code> waghairah export karti hai. Yeh <code>page</code> file wale same segment mein nahi reh sakti.</li>\n<li>Achhe fit: BFF jo HttpOnly cookie padhkar bearer token ke saath ASP.NET Core call kare, webhook receiver, patla proxy jo woh fields hata de jo browser ko nahi dikhne chahiye.</li>\n<li>Kharaab fit: woh business logic dohrana jo pehle se ASP.NET Core mein hai. Isse do backends ban jaate hain jinhe secure, test aur deploy karna padta hai. Server Component bina extra hop ke API ya database ko seedhe call kar sakta hai.</li>\n<li>Caching defaults versions ke beech badle hain; maujooda docs mein Route Handlers by default cache nahi hote. Apna version dekho.</li>\n<li>Follow-up: \"Browser se API kyon call nahi karte?\" jab API browsers ke liye design ho (CORS, chhoti umar ke tokens) tab theek hai; jab tokens ko client se door rakhna ho tab BFF chuna jaata hai.</li>\n</ul>"
      }
    }
  ],
  puzzles: [
    {
      id: "snapshot-and-batching",
      lang: "javascript",
      src: "let state = 10;\nlet renders = 0;\nconst queue = [];\nconst setCount = (update) => queue.push(update);\n\nfunction clickHandler(count) { // count is the snapshot of this render\n  setCount(count + 5);\n  setCount((c) => c * 2);\n  setCount(count + 1);\n  setCount((c) => c + 100);\n  console.log(\"inside handler, count =\", count);\n}\n\nfunction flushAndRender() {\n  for (const update of queue) {\n    state = typeof update === \"function\" ? update(state) : update;\n  }\n  queue.length = 0;\n  renders++;\n}\n\nclickHandler(state);\nconsole.log(queue.length + \" updates queued, renders so far: \" + renders);\nflushAndRender();\nconsole.log(\"new state: \" + state + \", renders: \" + renders);",
      answer: "inside handler, count = 10\n4 updates queued, renders so far: 0\nnew state: 111, renders: 1",
      explain: {
        en: "<p>The handler sees the snapshot <code>count = 10</code> the whole time, and the setters only <b>queue</b> work, so nothing has rendered yet (0 renders). React then processes the queue once, in order, and renders once.</p>\n<p>The queue is: replace with <code>15</code>, then <code>x * 2</code> gives <code>30</code>, then replace with <code>11</code> (the snapshot plus 1), then <code>+ 100</code> gives <code>111</code>. A plain value throws away everything before it; an updater builds on what came before.</p>",
        hi: "<p>Handler पूरे समय snapshot <code>count = 10</code> देखता है, और setters सिर्फ़ काम <b>queue</b> करते हैं, इसलिए अभी तक कोई render नहीं हुआ (0 renders)। फिर React queue को एक बार, order में process करता है और एक बार render करता है।</p>\n<p>Queue यह है: <code>15</code> से replace, फिर <code>x * 2</code> से <code>30</code>, फिर <code>11</code> से replace (snapshot plus 1), फिर <code>+ 100</code> से <code>111</code>। Plain value अपने पहले का सब कुछ फेंक देती है; updater पहले जो हुआ उस पर बनता है।</p>",
        hg: "<p>Handler poore samay snapshot <code>count = 10</code> dekhta hai, aur setters sirf kaam <b>queue</b> karte hain, isliye abhi tak koi render nahi hua (0 renders). Phir React queue ko ek baar, order mein process karta hai aur ek baar render karta hai.</p>\n<p>Queue yeh hai: <code>15</code> se replace, phir <code>x * 2</code> se <code>30</code>, phir <code>11</code> se replace (snapshot plus 1), phir <code>+ 100</code> se <code>111</code>. Plain value apne pehle ka sab kuch phenk deti hai; updater pehle jo hua us par banta hai.</p>"
      }
    },
    {
      id: "stale-closure-interval",
      lang: "javascript",
      src: "function simulate(strategy) {\n  let state = 0;\n  const setState = (u) => {\n    state = typeof u === \"function\" ? u(state) : u;\n  };\n  let latest; // the closures from the most recent render\n\n  function render() {\n    const count = state; // this render's snapshot\n    latest = {\n      plain: () => setState(count + 1),\n      updater: () => setState((c) => c + 1),\n    };\n    return latest;\n  }\n\n  const first = render(); // the effect with [] captures only this render\n  const tick =\n    strategy === \"plain\" ? first.plain :\n    strategy === \"updater\" ? first.updater :\n    () => latest.plain(); // effect re-subscribed on every [count] change\n\n  for (let i = 0; i < 3; i++) {\n    tick();\n    render(); // React re-renders after each state change\n  }\n  return state;\n}\n\nconsole.log(\"[] deps, plain value:\", simulate(\"plain\"));\nconsole.log(\"[] deps, updater:\", simulate(\"updater\"));\nconsole.log(\"[count] deps, re-subscribed:\", simulate(\"deps\"));",
      answer: "[] deps, plain value: 1\n[] deps, updater: 3\n[count] deps, re-subscribed: 3",
      explain: {
        en: "<p>An effect with <code>[]</code> runs once and keeps the closure from the <b>first</b> render, where <code>count</code> is 0. Every tick runs <code>setState(0 + 1)</code>, so the counter sticks at 1: a stale closure, the same idea as the closures on Day 23 but inside a component.</p>\n<p>Two fixes: use an updater (<code>c =&gt; c + 1</code>), which reads the latest state instead of a captured number, or list <code>count</code> as a dependency so the effect re-subscribes with the newest closure. For an interval, the updater is usually simpler and avoids resetting the timer on every tick.</p>",
        hi: "<p><code>[]</code> वाला effect एक बार चलता है और <b>पहले</b> render का closure पकड़े रखता है, जहाँ <code>count</code> 0 है। हर tick <code>setState(0 + 1)</code> चलाता है, इसलिए counter 1 पर अटका रहता है: stale closure, Day 23 के closures जैसा ही idea पर component के अंदर।</p>\n<p>दो fixes: updater (<code>c =&gt; c + 1</code>) use करो, जो captured number की जगह latest state पढ़ता है, या <code>count</code> को dependency बनाओ ताकि effect सबसे नए closure के साथ दोबारा subscribe हो। Interval के लिए updater आम तौर पर सरल है और हर tick पर timer reset नहीं होता।</p>",
        hg: "<p><code>[]</code> wala effect ek baar chalta hai aur <b>pehle</b> render ka closure pakde rehta hai, jahan <code>count</code> 0 hai. Har tick <code>setState(0 + 1)</code> chalata hai, isliye counter 1 par atka rehta hai: stale closure, Day 23 ke closures jaisa hi idea par component ke andar.</p>\n<p>Do fixes: updater (<code>c =&gt; c + 1</code>) use karo, jo captured number ki jagah latest state padhta hai, ya <code>count</code> ko dependency banao taaki effect sabse naye closure ke saath dobara subscribe ho. Interval ke liye updater aam taur par saral hai aur har tick par timer reset nahi hota.</p>"
      }
    },
    {
      id: "index-keys-reconciliation",
      lang: "javascript",
      src: "// React keeps a row's local state (like text typed in its input) with the instance it matched by key\nfunction reconcile(prevRows, nextItems, keyOf) {\n  return nextItems.map((item, index) => {\n    const key = keyOf(item, index);\n    const match = prevRows.find((r) => r.key === key);\n    return { key, item, draft: match ? match.draft : \"\" };\n  });\n}\n\nconst items = [\n  { id: 101, name: \"Asha\" },\n  { id: 102, name: \"Ravi\" },\n  { id: 103, name: \"Meena\" },\n];\n\nfunction run(label, keyOf) {\n  let rows = reconcile([], items, keyOf);\n  rows[0].draft = \"call back at 5\"; // the user types a note in Asha's row\n  rows = reconcile(rows, items.slice(1), keyOf); // Asha is removed\n  console.log(label + \": \" + rows.map((r) => r.item.name + \"=[\" + r.draft + \"]\").join(\", \"));\n}\n\nrun(\"index key\", (item, i) => i);\nrun(\"id key\", (item) => item.id);",
      answer: "index key: Ravi=[call back at 5], Meena=[]\nid key: Ravi=[], Meena=[]",
      explain: {
        en: "<p>With index keys, after Asha is removed, Ravi becomes index 0, the same key Asha's row had, so React hands Ravi the row state that belonged to Asha: the note \"call back at 5\" now appears on the wrong person.</p>\n<p>With the database id as the key, Ravi's key (102) never matched Asha's row (101), so the note disappears together with Asha's row, which is correct. Real React also reuses DOM nodes and component state by key in the same spirit; this is a simplified model of that matching, not React's real algorithm.</p>",
        hi: "<p>Index keys के साथ Asha के हटने के बाद Ravi index 0 बन जाता है, वही key जो Asha की row की थी, इसलिए React Ravi को वह row state दे देता है जो Asha की थी: note \"call back at 5\" अब ग़लत इंसान पर दिखता है।</p>\n<p>Database id को key बनाने पर Ravi की key (102) Asha की row (101) से कभी match नहीं हुई, इसलिए note Asha की row के साथ ग़ायब हो जाता है, जो सही है। असली React भी DOM nodes और component state को key से इसी तरह reuse करता है; यह उस matching का simplified model है, React का असली algorithm नहीं।</p>",
        hg: "<p>Index keys ke saath Asha ke hatne ke baad Ravi index 0 ban jaata hai, wahi key jo Asha ki row ki thi, isliye React Ravi ko woh row state de deta hai jo Asha ki thi: note \"call back at 5\" ab galat insaan par dikhta hai.</p>\n<p>Database id ko key banane par Ravi ki key (102) Asha ki row (101) se kabhi match nahi hui, isliye note Asha ki row ke saath gaayab ho jaata hai, jo sahi hai. Asli React bhi DOM nodes aur component state ko key se isi tarah reuse karta hai; yeh us matching ka simplified model hai, React ka asli algorithm nahi.</p>"
      }
    },
    {
      id: "effect-dependency-rerun",
      lang: "javascript",
      src: "function createHooks() {\n  const prev = {};\n  return function useEffectModel(name, deps, ran) {\n    const old = prev[name];\n    const changed =\n      deps === undefined ||\n      !old ||\n      deps.length !== old.length ||\n      deps.some((d, i) => !Object.is(d, old[i]));\n    prev[name] = deps;\n    if (changed) ran.push(name);\n  };\n}\n\nconst useEffectModel = createHooks();\n\nfunction renderComponent(props) {\n  const ran = [];\n  const options = { sort: \"asc\" }; // a new object on every render\n  useEffectModel(\"A[id]\", [props.id], ran);\n  useEffectModel(\"B[]\", [], ran);\n  useEffectModel(\"C[options]\", [options], ran);\n  useEffectModel(\"D[options.sort]\", [options.sort], ran);\n  useEffectModel(\"E(no array)\", undefined, ran);\n  return ran;\n}\n\n[{ id: 1 }, { id: 1 }, { id: 2 }].forEach((props, i) => {\n  console.log(\"render \" + (i + 1) + \" (id=\" + props.id + \"): \" + renderComponent(props).join(\", \"));\n});",
      answer: "render 1 (id=1): A[id], B[], C[options], D[options.sort], E(no array)\nrender 2 (id=1): C[options], E(no array)\nrender 3 (id=2): A[id], C[options], E(no array)",
      explain: {
        en: "<p>On the first render every effect runs. After that: <b>A</b> re-runs only when <code>id</code> changes (render 3); <b>B</b> with <code>[]</code> never runs again; <b>E</b> without an array runs after every render.</p>\n<p><b>C</b> depends on an object literal created during render. It is a new reference each time, so <code>Object.is</code> says \"changed\" and the effect re-runs on every render, probably not what you wanted. <b>D</b> depends on the primitive <code>options.sort</code>, which stays <code>\"asc\"</code>, so it runs once. Fix C by depending on primitives, moving the object inside the effect, or creating it outside the component.</p>",
        hi: "<p>पहले render पर हर effect चलता है। उसके बाद: <b>A</b> सिर्फ़ तब दोबारा चलता है जब <code>id</code> बदले (render 3); <code>[]</code> वाला <b>B</b> फिर कभी नहीं चलता; array के बिना वाला <b>E</b> हर render के बाद चलता है।</p>\n<p><b>C</b> render के दौरान बने object literal पर depend करता है। वह हर बार नया reference है, इसलिए <code>Object.is</code> \"changed\" कहता है और effect हर render पर दोबारा चलता है, जो शायद तुम्हें नहीं चाहिए था। <b>D</b> primitive <code>options.sort</code> पर depend करता है, जो <code>\"asc\"</code> ही रहता है, इसलिए वह एक बार चलता है। C को ठीक करने के लिए primitives पर depend करो, object को effect के अंदर ले जाओ, या component के बाहर बनाओ।</p>",
        hg: "<p>Pehle render par har effect chalta hai. Uske baad: <b>A</b> sirf tab dobara chalta hai jab <code>id</code> badle (render 3); <code>[]</code> wala <b>B</b> phir kabhi nahi chalta; array ke bina wala <b>E</b> har render ke baad chalta hai.</p>\n<p><b>C</b> render ke dauran bane object literal par depend karta hai. Woh har baar naya reference hai, isliye <code>Object.is</code> \"changed\" kehta hai aur effect har render par dobara chalta hai, jo shaayad tumhe nahi chahiye tha. <b>D</b> primitive <code>options.sort</code> par depend karta hai, jo <code>\"asc\"</code> hi rehta hai, isliye woh ek baar chalta hai. C ko theek karne ke liye primitives par depend karo, object ko effect ke andar le jao, ya component ke bahar banao.</p>"
      }
    },
    {
      id: "mutation-hides-update",
      lang: "javascript",
      src: "function createStore(initial) {\n  let state = initial;\n  let renders = 1;\n  return {\n    set(next) {\n      if (Object.is(state, next)) return; // same reference: bail out, no re-render\n      state = next;\n      renders++;\n    },\n    get state() { return state; },\n    get renders() { return renders; },\n  };\n}\n\nconst todos = createStore([{ id: 1, done: false }]);\n\nconst arr = todos.state;\narr.push({ id: 2, done: false }); // mutation\ntodos.set(arr);\nconsole.log(\"after push + set:\", todos.renders, todos.state.length);\n\ntodos.set([...todos.state, { id: 3, done: false }]);\nconsole.log(\"after spread + set:\", todos.renders, todos.state.length);\n\nconst first = todos.state[0];\nfirst.done = true; // nested mutation\ntodos.set([...todos.state]); // new array, same objects\nconsole.log(\"after nested mutation:\", todos.renders, todos.state[0].done, todos.state[0] === first);\n\ntodos.set(todos.state.map((t) => (t.id === 1 ? { ...t, done: false } : t)));\nconsole.log(\"after map copy:\", todos.renders, todos.state[0].done, todos.state[0] === first);",
      answer: "after push + set: 1 2\nafter spread + set: 2 3\nafter nested mutation: 3 true true\nafter map copy: 4 false false",
      explain: {
        en: "<p>Line 1: <code>push</code> changed the data (length 2) but <code>set</code> received the <b>same array reference</b>, so <code>Object.is</code> is true and nothing re-rendered (still 1 render). The data and the screen are now out of sync.</p>\n<p>Line 2: a spread copy is a new reference, so it renders. Line 3: the new array is fine, but the first todo object was mutated in place, so any memoised child that compares that object by reference would not notice the change. Line 4: copying the changed object with <code>{ ...t, done: false }</code> gives a new reference, so comparisons see it. Copy every level you change. (This is a model of React's comparison; real React has more machinery around it.)</p>",
        hi: "<p>Line 1: <code>push</code> ने data बदला (length 2) पर <code>set</code> को <b>वही array reference</b> मिला, इसलिए <code>Object.is</code> true है और कुछ re-render नहीं हुआ (अब भी 1 render)। Data और screen अब sync में नहीं हैं।</p>\n<p>Line 2: spread copy नया reference है, इसलिए render होता है। Line 3: नया array ठीक है, पर पहला todo object अपनी जगह पर mutate हुआ, इसलिए जो भी memoised child उस object को reference से compare करता है उसे बदलाव दिखेगा नहीं। Line 4: बदले हुए object को <code>{ ...t, done: false }</code> से copy करने पर नया reference मिलता है, इसलिए comparisons को दिखता है। जिस भी level को बदलो उसे copy करो। (यह React की comparison का model है; असली React में इसके आसपास और machinery है।)</p>",
        hg: "<p>Line 1: <code>push</code> ne data badla (length 2) par <code>set</code> ko <b>wahi array reference</b> mila, isliye <code>Object.is</code> true hai aur kuch re-render nahi hua (ab bhi 1 render). Data aur screen ab sync mein nahi hain.</p>\n<p>Line 2: spread copy naya reference hai, isliye render hota hai. Line 3: naya array theek hai, par pehla todo object apni jagah par mutate hua, isliye jo bhi memoised child us object ko reference se compare karta hai use badlaav dikhega nahi. Line 4: badle hue object ko <code>{ ...t, done: false }</code> se copy karne par naya reference milta hai, isliye comparisons ko dikhta hai. Jis bhi level ko badlo use copy karo. (Yeh React ki comparison ka model hai; asli React mein iske aaspaas aur machinery hai.)</p>"
      }
    },
    {
      id: "lifting-state-model",
      lang: "javascript",
      src: "// Design A: each sibling keeps its own copy of \"selected\"\nconst listA = { selected: null };\nconst detailA = { selected: null };\nfunction clickA(id) {\n  listA.selected = id; // the detail panel never hears about it\n}\n\n// Design B: the parent owns the state and passes it down\nfunction createParent() {\n  let selected = null;\n  return {\n    select: (id) => { selected = id; },          // callback prop going up\n    listProps: () => ({ selected }),              // props going down\n    detailProps: () => ({ selected }),\n  };\n}\nconst parentB = createParent();\n\nclickA(2);\nparentB.select(2);\n\nconsole.log(\"A: list=\" + listA.selected + \" detail=\" + detailA.selected);\nconsole.log(\"B: list=\" + parentB.listProps().selected + \" detail=\" + parentB.detailProps().selected);",
      answer: "A: list=2 detail=null\nB: list=2 detail=2",
      explain: {
        en: "<p>In design A the two siblings each hold a private copy, and the click only updates the list's copy, so the detail panel is out of date: two sources of truth.</p>\n<p>In design B the parent owns <code>selected</code>. The click calls the parent's callback, and the parent passes the same value to both children as props, so they cannot disagree. This is the \"lift state up\" pattern: one owner, data down, events up.</p>",
        hi: "<p>Design A में दोनों siblings अपनी private copy रखते हैं, और click सिर्फ़ list की copy update करता है, इसलिए detail panel पुराना रह जाता है: दो sources of truth।</p>\n<p>Design B में parent <code>selected</code> का owner है। Click parent का callback call करता है, और parent वही value दोनों children को props की तरह देता है, इसलिए उनमें mismatch नहीं हो सकता। यही \"lift state up\" pattern है: एक owner, data नीचे, events ऊपर।</p>",
        hg: "<p>Design A mein dono siblings apni private copy rakhte hain, aur click sirf list ki copy update karta hai, isliye detail panel purana reh jaata hai: do sources of truth.</p>\n<p>Design B mein parent <code>selected</code> ka owner hai. Click parent ka callback call karta hai, aur parent wahi value dono children ko props ki tarah deta hai, isliye unmein mismatch nahi ho sakta. Yahi \"lift state up\" pattern hai: ek owner, data neeche, events upar.</p>"
      }
    },
    {
      id: "strict-mode-cleanup",
      lang: "javascript",
      src: "const bus = { listeners: new Set() };\n\nfunction effectWithCleanup() {\n  const handler = () => {};\n  bus.listeners.add(handler);\n  return () => bus.listeners.delete(handler);\n}\n\nfunction effectWithoutCleanup() {\n  bus.listeners.add(() => {}); // returns nothing: nothing removes it\n}\n\n// Strict Mode in development: setup, cleanup, setup again; later a real unmount\nfunction mountInStrictMode(effect) {\n  bus.listeners.clear();\n  let cleanup = effect();\n  if (cleanup) cleanup();\n  cleanup = effect();\n  const mounted = bus.listeners.size;\n  if (cleanup) cleanup();\n  return \"mounted=\" + mounted + \", after unmount=\" + bus.listeners.size;\n}\n\nconsole.log(\"with cleanup: \" + mountInStrictMode(effectWithCleanup));\nconsole.log(\"no cleanup: \" + mountInStrictMode(effectWithoutCleanup));",
      answer: "with cleanup: mounted=1, after unmount=0\nno cleanup: mounted=2, after unmount=2",
      explain: {
        en: "<p>Strict Mode's extra setup, cleanup, setup cycle is a test of your cleanup. With a proper cleanup, the first subscription is removed before the second is added, so exactly one listener exists and unmounting removes it.</p>\n<p>Without a cleanup, the first listener stays: two listeners after mounting and still two after unmount, a leak that causes duplicate handler calls. In production builds the extra cycle does not run, so the bug would stay hidden until it appears as a slow, odd behaviour. Strict Mode shows it early, which is why you fix the cleanup instead of removing Strict Mode.</p>",
        hi: "<p>Strict Mode का extra setup, cleanup, setup cycle तुम्हारे cleanup का test है। सही cleanup के साथ पहली subscription दूसरी जुड़ने से पहले हट जाती है, इसलिए ठीक एक listener रहता है और unmount उसे हटा देता है।</p>\n<p>Cleanup के बिना पहला listener रह जाता है: mount के बाद दो listeners और unmount के बाद भी दो, एक leak जो duplicate handler calls करवाता है। Production builds में extra cycle नहीं चलता, इसलिए bug छुपा रहता और बाद में धीमे, अजीब behaviour की तरह दिखता। Strict Mode इसे जल्दी दिखा देता है, इसीलिए Strict Mode हटाने की जगह cleanup ठीक करो।</p>",
        hg: "<p>Strict Mode ka extra setup, cleanup, setup cycle tumhare cleanup ka test hai. Sahi cleanup ke saath pehli subscription doosri judne se pehle hat jaati hai, isliye theek ek listener rehta hai aur unmount use hata deta hai.</p>\n<p>Cleanup ke bina pehla listener reh jaata hai: mount ke baad do listeners aur unmount ke baad bhi do, ek leak jo duplicate handler calls karwata hai. Production builds mein extra cycle nahi chalta, isliye bug chhupa rehta aur baad mein dheeme, ajeeb behaviour ki tarah dikhta. Strict Mode ise jaldi dikha deta hai, isiliye Strict Mode hatane ki jagah cleanup theek karo.</p>"
      }
    }
  ],
  revision: {
    en: [
      "<b>Component</b> = a function from props to a UI description; JSX compiles to calls; names start with a capital letter; props are read-only.",
      "<b>Lists</b>: <code>map</code> with a stable <code>key</code> (the id), handle the empty case; <code>count &amp;&amp; ...</code> prints 0.",
      "<b>State</b> is a snapshot per render; the setter only queues; use <code>c =&gt; c + 1</code> when the new value depends on the old one.",
      "<b>Immutable updates</b>: spread, <code>map</code>, <code>filter</code>; a reducer <code>(state, action) =&gt; newState</code> keeps changes in one place.",
      "<b>useEffect</b>: runs after render, dependencies compared with <code>Object.is</code>, the returned cleanup runs before the next setup; Strict Mode checks it in dev.",
      "<b>Controlled form</b>: <code>value</code> from state, <code>onChange</code> back to state, one state object, validate on submit.",
      "<b>Calling the API</b>: loading, error, data; <code>fetch</code> does not throw on 400/500, so check <code>res.ok</code> and show the ProblemDetails title.",
      "<b>App Router</b>: Server Components by default (async, secrets stay on the server); <code>\"use client\"</code> only on small interactive leaf files.",
      "The browser enforces CORS, so the ASP.NET Core API must allow your exact front-end origin.",
      "Do not keep sensitive tokens in localStorage carelessly; prefer an HttpOnly cookie, often through a BFF.",
      "SSG, ISR, SSR and CSR trade freshness against speed and SEO; pick per route and check caching defaults for your Next.js version."
    ],
    meaning: {
      hi: [
        "Component props से UI description बनाने वाला function है; JSX calls में compile होता है; नाम capital से; props read-only",
        "List में map और stable key (id); खाली case सँभालो; count &amp;&amp; ... में 0 छप जाता है",
        "State हर render का snapshot है; setter सिर्फ़ queue करता है; नई value पुरानी पर टिकी हो तो c =&gt; c + 1",
        "Immutable updates: spread, map, filter; reducer सारे बदलाव एक जगह रखता है",
        "useEffect render के बाद चलता है; dependencies की Object.is से तुलना; cleanup अगले setup से पहले; Strict Mode dev में जाँचता है",
        "Controlled form: value state से, onChange वापस state में, एक state object, submit पर validate",
        "API call: loading, error, data; 400/500 पर fetch throw नहीं करता, res.ok जाँचो और ProblemDetails का title दिखाओ",
        "App Router: components by default server पर (async, secrets server पर); \"use client\" सिर्फ़ छोटी interactive files पर",
        "CORS browser enforce करता है, इसलिए ASP.NET Core API को तुम्हारा exact front-end origin allow करना होगा।",
        "Sensitive tokens को localStorage में लापरवाही से मत रखो; HttpOnly cookie पसंद करो, अक्सर BFF के ज़रिए।",
        "SSG, ISR, SSR और CSR में freshness बनाम speed और SEO का trade-off है; route के हिसाब से चुनो और अपने Next.js version के caching defaults देखो।"
      ],
      hg: [
        "Component props se UI description banane wala function hai; JSX calls mein compile hota hai; naam capital se; props read-only",
        "List mein map aur stable key (id); khaali case sambhalo; count &amp;&amp; ... mein 0 chhap jaata hai",
        "State har render ka snapshot hai; setter sirf queue karta hai; nayi value purani par tiki ho to c =&gt; c + 1",
        "Immutable updates: spread, map, filter; reducer saare badlaav ek jagah rakhta hai",
        "useEffect render ke baad chalta hai; dependencies ki Object.is se tulna; cleanup agle setup se pehle; Strict Mode dev mein jaanchta hai",
        "Controlled form: value state se, onChange wapas state mein, ek state object, submit par validate",
        "API call: loading, error, data; 400/500 par fetch throw nahi karta, res.ok jaancho aur ProblemDetails ka title dikhao",
        "App Router: components by default server par (async, secrets server par); \"use client\" sirf chhoti interactive files par",
        "CORS browser enforce karta hai, isliye ASP.NET Core API ko tumhara exact front-end origin allow karna hoga.",
        "Sensitive tokens ko localStorage mein laparwahi se mat rakho; HttpOnly cookie pasand karo, aksar BFF ke zariye.",
        "SSG, ISR, SSR aur CSR mein freshness banam speed aur SEO ka trade-off hai; route ke hisaab se chuno aur apne Next.js version ke caching defaults dekho."
      ]
    }
  }
};
