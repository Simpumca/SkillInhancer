// Day 24 — React and Next.js basics for a .NET developer. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 24,
  title: {
    en: "React and Next.js basics — components, JSX, props/state, hooks, forms, calling an ASP.NET Core API, App Router server vs client components",
    hi: "React और Next.js basics — components, JSX, props/state, hooks, forms, ASP.NET Core API call, App Router में server vs client components",
    hg: "React aur Next.js basics — components, JSX, props/state, hooks, forms, ASP.NET Core API call, App Router mein server vs client components"
  },
  summary: {
    en: `<p>React and Next.js are rated <b>1/10</b> for you, so we start from zero and map ideas to ASP.NET wherever it helps. A .NET Tech Lead is rarely asked to build a React screen live. You are asked "<b>why did this component re-render or show stale data?</b>", "<b>when would we pick Next.js?</b>" and "<b>how does the front end call our Web API safely?</b>" Eight ideas cover most of it.</p>
<ul>
<li><b>What React is:</b> a <b>UI library</b>, not a full framework. You write <b>components</b> (functions that return UI) and describe <b>what</b> the screen should look like for the current data; React works out the DOM changes.</li>
<li><b>JSX:</b> HTML-like syntax that compiles to plain function calls. Use <code>className</code>, put JavaScript in <code>{}</code>, and give every list item a stable <code>key</code>.</li>
<li><b>Props vs state:</b> props come in from the parent and are read-only; state is memory owned by the component. Data flows <b>one way</b>, down; when two siblings need the same data, <b>lift state up</b> to their parent.</li>
<li><b>State rules:</b> a render sees a <b>snapshot</b> of state, updates are queued and batched, so use <code>setCount(c =&gt; c + 1)</code> when the next value depends on the previous one. Do not mutate objects or arrays in state; create new ones.</li>
<li><b>Effects:</b> <code>useEffect</code> synchronises with something outside React (network, timers, subscriptions). List its dependencies, return a cleanup function, and expect Strict Mode to run setup and cleanup an extra time in development. Many effects are not needed at all.</li>
<li><b>Calling your API:</b> use <code>fetch</code> (Day 23) or a data library such as TanStack Query, handle loading and error states, configure CORS on the ASP.NET Core side (Day 13), and do not keep sensitive tokens in <code>localStorage</code> carelessly.</li>
<li><b>Next.js App Router:</b> components are <b>Server Components by default</b>; add <code>'use client'</code> where you need state, effects or browser APIs. Pages can be static, cached, or rendered per request, and Route Handlers give you small API endpoints.</li>
<li><b>TL decision:</b> Next.js vs plain React (Vite) vs Blazor is a trade-off of SEO and first load, team skills, hosting and how much you want a second server runtime next to ASP.NET.</li>
</ul>
<p>Plan (about 25 minutes for Short plus about 2 hours for Detailed): Short mode, then Q&amp;A aloud, then the code sections (JSX and TSX are display-only; the small JavaScript models run on Node), then the seven puzzles, which run offline without React.</p>`,
    hi: `<p>React और Next.js में तुम्हारी rating <b>1/10</b> है, इसलिए हम zero से शुरू करेंगे और जहाँ मदद मिले वहाँ ASP.NET से map करेंगे। .NET Tech Lead से live React screen बनवाना कम ही होता है। पूछा जाता है "<b>यह component बार-बार re-render क्यों हुआ या पुराना data क्यों दिखा?</b>", "<b>हम Next.js कब चुनेंगे?</b>" और "<b>front end हमारी Web API को safely कैसे call करता है?</b>" आठ ideas इसका ज़्यादातर हिस्सा cover कर देते हैं।</p>
<ul>
<li><b>React क्या है:</b> एक <b>UI library</b>, पूरा framework नहीं। तुम <b>components</b> लिखते हो (ऐसे functions जो UI return करते हैं) और बताते हो कि मौजूदा data के लिए screen <b>कैसी</b> दिखनी चाहिए; DOM में क्या बदलना है, यह React खुद निकालता है।</li>
<li><b>JSX:</b> HTML जैसा syntax जो plain function calls में compile होता है। <code>className</code> use करो, JavaScript को <code>{}</code> में रखो, और list के हर item को stable <code>key</code> दो।</li>
<li><b>Props vs state:</b> props parent से आते हैं और read-only हैं; state component की अपनी memory है। Data <b>एक ही तरफ़</b>, नीचे की ओर बहता है; जब दो siblings को same data चाहिए तो state को उनके parent में <b>lift up</b> करो।</li>
<li><b>State के rules:</b> हर render state का एक <b>snapshot</b> देखता है, updates queue होकर batch होते हैं, इसलिए जब अगली value पिछली पर depend करे तो <code>setCount(c =&gt; c + 1)</code> use करो। State में objects या arrays को mutate मत करो; नए बनाओ।</li>
<li><b>Effects:</b> <code>useEffect</code> React के बाहर की किसी चीज़ से sync करता है (network, timers, subscriptions)। उसकी dependencies लिखो, cleanup function return करो, और development में Strict Mode setup और cleanup एक extra बार चलाएगा। कई effects की ज़रूरत ही नहीं होती।</li>
<li><b>अपनी API call करना:</b> <code>fetch</code> (Day 23) या TanStack Query जैसी data library use करो, loading और error states handle करो, ASP.NET Core की तरफ़ CORS configure करो (Day 13), और sensitive tokens को <code>localStorage</code> में लापरवाही से मत रखो।</li>
<li><b>Next.js App Router:</b> components by default <b>Server Components</b> होते हैं; <code>'use client'</code> वहाँ लगाओ जहाँ state, effects या browser APIs चाहिए। Pages static, cached, या हर request पर render हो सकते हैं, और Route Handlers छोटे API endpoints देते हैं।</li>
<li><b>TL decision:</b> Next.js vs plain React (Vite) vs Blazor एक trade-off है: SEO और first load, team skills, hosting, और ASP.NET के साथ दूसरा server runtime चाहिए या नहीं।</li>
</ul>
<p>Plan (Short लगभग 25 मिनट, Detailed लगभग 2 घंटे अलग से): पहले Short mode, फिर Q&amp;A ज़ोर से, फिर code sections (JSX और TSX सिर्फ़ दिखाने के लिए हैं; छोटे JavaScript models Node पर चलते हैं), फिर सात puzzles जो React के बिना offline चलते हैं।</p>`,
    hg: `<p>React aur Next.js mein tumhari rating <b>1/10</b> hai, isliye hum zero se shuru karenge aur jahan madad mile wahan ASP.NET se map karenge. .NET Tech Lead se live React screen banwana kam hi hota hai. Poocha jaata hai "<b>yeh component baar-baar re-render kyon hua ya purana data kyon dikha?</b>", "<b>hum Next.js kab chunenge?</b>" aur "<b>front end hamari Web API ko safely kaise call karta hai?</b>" Aath ideas iska zyaadatar hissa cover kar dete hain.</p>
<ul>
<li><b>React kya hai:</b> ek <b>UI library</b>, poora framework nahi. Tum <b>components</b> likhte ho (aise functions jo UI return karte hain) aur batate ho ki maujooda data ke liye screen <b>kaisi</b> dikhni chahiye; DOM mein kya badalna hai, yeh React khud nikaalta hai.</li>
<li><b>JSX:</b> HTML jaisa syntax jo plain function calls mein compile hota hai. <code>className</code> use karo, JavaScript ko <code>{}</code> mein rakho, aur list ke har item ko stable <code>key</code> do.</li>
<li><b>Props vs state:</b> props parent se aate hain aur read-only hain; state component ki apni memory hai. Data <b>ek hi taraf</b>, neeche ki or behta hai; jab do siblings ko same data chahiye to state ko unke parent mein <b>lift up</b> karo.</li>
<li><b>State ke rules:</b> har render state ka ek <b>snapshot</b> dekhta hai, updates queue hokar batch hote hain, isliye jab agli value pichli par depend kare to <code>setCount(c =&gt; c + 1)</code> use karo. State mein objects ya arrays ko mutate mat karo; naye banao.</li>
<li><b>Effects:</b> <code>useEffect</code> React ke bahar ki kisi cheez se sync karta hai (network, timers, subscriptions). Uski dependencies likho, cleanup function return karo, aur development mein Strict Mode setup aur cleanup ek extra baar chalayega. Kai effects ki zaroorat hi nahi hoti.</li>
<li><b>Apni API call karna:</b> <code>fetch</code> (Day 23) ya TanStack Query jaisi data library use karo, loading aur error states handle karo, ASP.NET Core ki taraf CORS configure karo (Day 13), aur sensitive tokens ko <code>localStorage</code> mein laparwahi se mat rakho.</li>
<li><b>Next.js App Router:</b> components by default <b>Server Components</b> hote hain; <code>'use client'</code> wahan lagao jahan state, effects ya browser APIs chahiye. Pages static, cached, ya har request par render ho sakte hain, aur Route Handlers chhote API endpoints dete hain.</li>
<li><b>TL decision:</b> Next.js vs plain React (Vite) vs Blazor ek trade-off hai: SEO aur first load, team skills, hosting, aur ASP.NET ke saath doosra server runtime chahiye ya nahi.</li>
</ul>
<p>Plan (Short lagbhag 25 minute, Detailed lagbhag 2 ghante alag se): pehle Short mode, phir Q&amp;A zor se, phir code sections (JSX aur TSX sirf dikhane ke liye hain; chhote JavaScript models Node par chalte hain), phir saat puzzles jo React ke bina offline chalte hain.</p>`
  },
  sections: [
    {
      id: "react-mental-model-overview",
      depth: "short",
      title: {
        en: "React mental model — components, JSX, props, state, keys",
        hi: "React का mental model — components, JSX, props, state, keys",
        hg: "React ka mental model — components, JSX, props, state, keys"
      },
      body: {
        en: `<p><b>Analogy:</b> think of the departure board at a railway station. Nobody repaints the board; the control room only updates the <b>data</b> (platform, delay) and the board redraws the rows that changed. In React you write the "board design" once as a function of the data, and React updates the screen when the data changes.</p>
<ul>
<li><b>What React is:</b> a library for building UIs from <b>components</b>. It is declarative: you describe the UI for the current state instead of writing step-by-step DOM updates. It is not a full framework: routing, data loading and the build setup come from other tools (Next.js, Vite and so on).</li>
<li><b>Components:</b> a function whose name starts with a capital letter and returns UI. Think of a Razor partial view or a Blazor component, but it is plain JavaScript.</li>
<li><b>JSX:</b> HTML-like syntax inside JavaScript. A build tool compiles <code>&lt;Greeting name="Asha" /&gt;</code> into a function call that produces a description object. Use <code>className</code> (not <code>class</code>), put expressions in <code>{}</code>, and use <code>cond &amp;&amp; &lt;X /&gt;</code> or a ternary for conditional UI.</li>
<li><b>Props vs state:</b> <b>props</b> are inputs passed by the parent; the child must not change them. <b>State</b> is memory the component owns (<code>useState</code>). Changing state asks React to render again.</li>
<li><b>One-way data flow and lifting state up:</b> data goes down through props, and events go up through callback props. If two siblings need the same value, keep it in their closest common parent.</li>
<li><b>Lists and keys:</b> render a list with <code>items.map(...)</code> and give each element a <code>key</code> that is stable and unique among siblings (a database id). Index keys are risky when items can be inserted, removed or reordered, because React then attaches the wrong component state to the wrong row.</li>
<li><b>Virtual DOM, carefully worded:</b> React keeps a lightweight description of the UI, compares the old and new descriptions (reconciliation) and applies only the needed DOM changes. This is a design trade-off, not a promise that React is always faster than hand-written DOM code.</li>
</ul>`,
        hi: `<p><b>Analogy:</b> railway station का departure board सोचो। कोई board को दोबारा paint नहीं करता; control room सिर्फ़ <b>data</b> (platform, delay) update करता है और board बदली हुई rows को फिर से बना देता है। React में तुम "board का design" data के function की तरह एक बार लिखते हो, और data बदलने पर React screen update कर देता है।</p>
<ul>
<li><b>React क्या है:</b> <b>components</b> से UI बनाने की library। यह declarative है: step-by-step DOM updates लिखने की जगह तुम मौजूदा state के लिए UI describe करते हो। यह पूरा framework नहीं है: routing, data loading और build setup दूसरे tools से आते हैं (Next.js, Vite वग़ैरह)।</li>
<li><b>Components:</b> ऐसा function जिसका नाम capital letter से शुरू होता है और जो UI return करता है। Razor partial view या Blazor component जैसा सोचो, पर यह plain JavaScript है।</li>
<li><b>JSX:</b> JavaScript के अंदर HTML जैसा syntax। Build tool <code>&lt;Greeting name="Asha" /&gt;</code> को function call में compile करता है जो एक description object बनाता है। <code>className</code> use करो (<code>class</code> नहीं), expressions को <code>{}</code> में रखो, और conditional UI के लिए <code>cond &amp;&amp; &lt;X /&gt;</code> या ternary use करो।</li>
<li><b>Props vs state:</b> <b>props</b> parent से मिले inputs हैं; child उन्हें बदलता नहीं। <b>State</b> वह memory है जो component की अपनी होती है (<code>useState</code>)। State बदलने से React दोबारा render करता है।</li>
<li><b>One-way data flow और lifting state up:</b> data props से नीचे जाता है, और events callback props से ऊपर। अगर दो siblings को same value चाहिए तो उसे उनके सबसे नज़दीकी common parent में रखो।</li>
<li><b>Lists और keys:</b> list को <code>items.map(...)</code> से render करो और हर element को ऐसा <code>key</code> दो जो stable हो और siblings में unique हो (database id)। जब items insert, remove या reorder हो सकते हैं तब index keys risky हैं, क्योंकि React ग़लत row के साथ ग़लत component state जोड़ देता है।</li>
<li><b>Virtual DOM, सँभलकर बोलो:</b> React UI का हल्का description रखता है, पुराने और नए description को compare करता है (reconciliation) और सिर्फ़ ज़रूरी DOM changes लगाता है। यह एक design trade-off है, यह वादा नहीं कि React हमेशा hand-written DOM code से तेज़ है।</li>
</ul>`,
        hg: `<p><b>Analogy:</b> railway station ka departure board socho. Koi board ko dobara paint nahi karta; control room sirf <b>data</b> (platform, delay) update karta hai aur board badli hui rows ko phir se bana deta hai. React mein tum "board ka design" data ke function ki tarah ek baar likhte ho, aur data badalne par React screen update kar deta hai.</p>
<ul>
<li><b>React kya hai:</b> <b>components</b> se UI banane ki library. Yeh declarative hai: step-by-step DOM updates likhne ki jagah tum maujooda state ke liye UI describe karte ho. Yeh poora framework nahi hai: routing, data loading aur build setup doosre tools se aate hain (Next.js, Vite waghairah).</li>
<li><b>Components:</b> aisa function jiska naam capital letter se shuru hota hai aur jo UI return karta hai. Razor partial view ya Blazor component jaisa socho, par yeh plain JavaScript hai.</li>
<li><b>JSX:</b> JavaScript ke andar HTML jaisa syntax. Build tool <code>&lt;Greeting name="Asha" /&gt;</code> ko function call mein compile karta hai jo ek description object banata hai. <code>className</code> use karo (<code>class</code> nahi), expressions ko <code>{}</code> mein rakho, aur conditional UI ke liye <code>cond &amp;&amp; &lt;X /&gt;</code> ya ternary use karo.</li>
<li><b>Props vs state:</b> <b>props</b> parent se mile inputs hain; child unhe badalta nahi. <b>State</b> woh memory hai jo component ki apni hoti hai (<code>useState</code>). State badalne se React dobara render karta hai.</li>
<li><b>One-way data flow aur lifting state up:</b> data props se neeche jaata hai, aur events callback props se upar. Agar do siblings ko same value chahiye to use unke sabse nazdeeki common parent mein rakho.</li>
<li><b>Lists aur keys:</b> list ko <code>items.map(...)</code> se render karo aur har element ko aisa <code>key</code> do jo stable ho aur siblings mein unique ho (database id). Jab items insert, remove ya reorder ho sakte hain tab index keys risky hain, kyonki React galat row ke saath galat component state jod deta hai.</li>
<li><b>Virtual DOM, sambhalkar bolo:</b> React UI ka halka description rakhta hai, purane aur naye description ko compare karta hai (reconciliation) aur sirf zaroori DOM changes lagata hai. Yeh ek design trade-off hai, yeh vaada nahi ki React hamesha hand-written DOM code se tez hai.</li>
</ul>`
      }
    },
    {
      id: "hooks-and-api-overview",
      depth: "short",
      title: {
        en: "Hooks, forms and calling your ASP.NET Core API",
        hi: "Hooks, forms और अपनी ASP.NET Core API को call करना",
        hg: "Hooks, forms aur apni ASP.NET Core API ko call karna"
      },
      body: {
        en: `<p><b>Analogy:</b> a component is a small shop counter. <b>State</b> is the register notebook on the counter, a <b>snapshot</b> is the photocopy of that notebook taken at the start of each customer, and an <b>effect</b> is the shopkeeper phoning the wholesaler after the sale: it talks to the outside world, and he must also cancel the call if the customer leaves.</p>
<ul>
<li><b>useState:</b> returns the current value and a setter. A render sees a <b>snapshot</b>: <code>setCount(count + 1)</code> three times in one handler still adds 1, because <code>count</code> is the same old value each time. Use <code>setCount(c =&gt; c + 1)</code> to build on the latest queued value. React 18 and later batch updates in event handlers, timeouts and promises alike.</li>
<li><b>Immutability:</b> React compares state with <code>Object.is</code>. If you <code>push</code> into the same array and set it back, the reference is unchanged and React may skip the update. Create a new array or object: <code>[...items, x]</code>.</li>
<li><b>useEffect:</b> runs <b>after</b> render to synchronise with something outside React. Dependencies decide when it re-runs: none = every render, <code>[]</code> = on mount, <code>[id]</code> = when <code>id</code> changes. The returned function is the <b>cleanup</b> (cancel the request, clear the timer). In development, Strict Mode deliberately runs setup, cleanup, setup again to expose missing cleanup.</li>
<li><b>You might not need an effect:</b> values that can be computed during render, and logic that belongs in an event handler, should not be effects.</li>
<li><b>useMemo / useCallback / useRef:</b> <code>useMemo</code> and <code>useCallback</code> cache a value or function between renders; reach for them after measuring, not by default. <code>useRef</code> holds a mutable value or a DOM node that does not trigger re-render. A <b>custom hook</b> is just a function starting with <code>use</code> that shares hook logic.</li>
<li><b>Controlled forms:</b> the input's <code>value</code> comes from state and <code>onChange</code> updates it, so React is the single source of truth.</li>
<li><b>Calling the API:</b> fetch in an effect (with cleanup and loading/error states) or use a library like TanStack Query for caching and retries. The browser enforces CORS, so the ASP.NET Core API must allow your front-end origin (Day 13). Treat tokens carefully: <code>localStorage</code> is readable by any script on the page, so an XSS bug can steal them; many teams prefer an <code>HttpOnly</code> cookie, often through a BFF (Day 16).</li>
</ul>`,
        hi: `<p><b>Analogy:</b> component को एक छोटा दुकान का counter समझो। <b>State</b> counter पर रखी register notebook है, <b>snapshot</b> हर customer की शुरुआत में उस notebook की photocopy है, और <b>effect</b> sale के बाद दुकानदार का wholesaler को phone करना है: वह बाहर की दुनिया से बात करता है, और customer चला जाए तो उसे call cancel भी करनी होगी।</p>
<ul>
<li><b>useState:</b> मौजूदा value और एक setter देता है। हर render एक <b>snapshot</b> देखता है: एक handler में <code>setCount(count + 1)</code> तीन बार चलाओ तब भी सिर्फ़ 1 बढ़ता है, क्योंकि <code>count</code> हर बार वही पुरानी value है। Latest queued value पर बढ़ाने के लिए <code>setCount(c =&gt; c + 1)</code> use करो। React 18 और उसके बाद updates को event handlers, timeouts और promises में एक जैसा batch करते हैं।</li>
<li><b>Immutability:</b> React state को <code>Object.is</code> से compare करता है। उसी array में <code>push</code> करके वापस set करोगे तो reference वही रहता है और React update skip कर सकता है। नया array या object बनाओ: <code>[...items, x]</code>।</li>
<li><b>useEffect:</b> render के <b>बाद</b> चलता है, ताकि React के बाहर की किसी चीज़ से sync हो। Dependencies तय करती हैं कि यह कब दोबारा चलेगा: कुछ नहीं = हर render, <code>[]</code> = mount पर, <code>[id]</code> = जब <code>id</code> बदले। Return किया गया function <b>cleanup</b> है (request cancel करो, timer clear करो)। Development में Strict Mode जानबूझकर setup, cleanup, फिर setup चलाता है ताकि missing cleanup पकड़ा जाए।</li>
<li><b>You might not need an effect:</b> जो values render के दौरान compute हो सकती हैं, और जो logic event handler का है, वह effect नहीं होना चाहिए।</li>
<li><b>useMemo / useCallback / useRef:</b> <code>useMemo</code> और <code>useCallback</code> renders के बीच value या function cache करते हैं; पहले measure करो, default में मत लगाओ। <code>useRef</code> ऐसी mutable value या DOM node रखता है जो re-render trigger नहीं करती। <b>Custom hook</b> बस <code>use</code> से शुरू होने वाला function है जो hook logic share करता है।</li>
<li><b>Controlled forms:</b> input की <code>value</code> state से आती है और <code>onChange</code> उसे update करता है, इसलिए React ही single source of truth है।</li>
<li><b>API call करना:</b> effect में fetch करो (cleanup और loading/error states के साथ) या caching और retries के लिए TanStack Query जैसी library use करो। CORS browser enforce करता है, इसलिए ASP.NET Core API को तुम्हारा front-end origin allow करना पड़ता है (Day 13)। Tokens को सँभलकर रखो: <code>localStorage</code> को page का कोई भी script पढ़ सकता है, इसलिए XSS bug से वे चोरी हो सकते हैं; कई teams <code>HttpOnly</code> cookie पसंद करती हैं, अक्सर BFF के ज़रिए (Day 16)।</li>
</ul>`,
        hg: `<p><b>Analogy:</b> component ko ek chhota dukaan ka counter samjho. <b>State</b> counter par rakhi register notebook hai, <b>snapshot</b> har customer ki shuruaat mein us notebook ki photocopy hai, aur <b>effect</b> sale ke baad dukaandaar ka wholesaler ko phone karna hai: woh bahar ki duniya se baat karta hai, aur customer chala jaaye to use call cancel bhi karni hogi.</p>
<ul>
<li><b>useState:</b> maujooda value aur ek setter deta hai. Har render ek <b>snapshot</b> dekhta hai: ek handler mein <code>setCount(count + 1)</code> teen baar chalao tab bhi sirf 1 badhta hai, kyonki <code>count</code> har baar wahi purani value hai. Latest queued value par badhane ke liye <code>setCount(c =&gt; c + 1)</code> use karo. React 18 aur uske baad updates ko event handlers, timeouts aur promises mein ek jaisa batch karte hain.</li>
<li><b>Immutability:</b> React state ko <code>Object.is</code> se compare karta hai. Usi array mein <code>push</code> karke wapas set karoge to reference wahi rehta hai aur React update skip kar sakta hai. Naya array ya object banao: <code>[...items, x]</code>.</li>
<li><b>useEffect:</b> render ke <b>baad</b> chalta hai, taaki React ke bahar ki kisi cheez se sync ho. Dependencies tay karti hain ki yeh kab dobara chalega: kuch nahi = har render, <code>[]</code> = mount par, <code>[id]</code> = jab <code>id</code> badle. Return kiya gaya function <b>cleanup</b> hai (request cancel karo, timer clear karo). Development mein Strict Mode jaanbujhkar setup, cleanup, phir setup chalata hai taaki missing cleanup pakda jaaye.</li>
<li><b>You might not need an effect:</b> jo values render ke dauran compute ho sakti hain, aur jo logic event handler ka hai, woh effect nahi hona chahiye.</li>
<li><b>useMemo / useCallback / useRef:</b> <code>useMemo</code> aur <code>useCallback</code> renders ke beech value ya function cache karte hain; pehle measure karo, default mein mat lagao. <code>useRef</code> aisi mutable value ya DOM node rakhta hai jo re-render trigger nahi karti. <b>Custom hook</b> bas <code>use</code> se shuru hone wala function hai jo hook logic share karta hai.</li>
<li><b>Controlled forms:</b> input ki <code>value</code> state se aati hai aur <code>onChange</code> use update karta hai, isliye React hi single source of truth hai.</li>
<li><b>API call karna:</b> effect mein fetch karo (cleanup aur loading/error states ke saath) ya caching aur retries ke liye TanStack Query jaisi library use karo. CORS browser enforce karta hai, isliye ASP.NET Core API ko tumhara front-end origin allow karna padta hai (Day 13). Tokens ko sambhalkar rakho: <code>localStorage</code> ko page ka koi bhi script padh sakta hai, isliye XSS bug se woh chori ho sakte hain; kai teams <code>HttpOnly</code> cookie pasand karti hain, aksar BFF ke zariye (Day 16).</li>
</ul>`
      }
    },
    {
      id: "nextjs-overview",
      depth: "short",
      title: {
        en: "Next.js App Router — server vs client components, rendering strategies, and when to choose it",
        hi: "Next.js App Router — server vs client components, rendering strategies, और कब चुनें",
        hg: "Next.js App Router — server vs client components, rendering strategies, aur kab chunein"
      },
      body: {
        en: `<p><b>Analogy:</b> a restaurant kitchen. <b>Server Components</b> are dishes cooked in the kitchen and sent to the table ready to eat (little JavaScript travels to the browser). <b>Client Components</b> are the DIY parts at the table, like a chaat counter where you add toppings yourself; they need JavaScript in the browser.</p>
<ul>
<li><b>Next.js</b> is a React framework: routing by folders, server rendering, data fetching, bundling and API endpoints in one project. It runs on Node.js (or a compatible runtime), so it is a second server technology next to ASP.NET Core.</li>
<li><b>App Router:</b> folders under <code>app/</code> define routes; <code>page.tsx</code> is the page, <code>layout.tsx</code> wraps it, <code>route.ts</code> is an API endpoint (Route Handler).</li>
<li><b>Server Components are the default.</b> They can <code>await</code> data, read secrets and talk to a database or your API on the server, and their code is not shipped to the browser. They cannot use state, effects or event handlers.</li>
<li><b>Client Components:</b> add <code>'use client'</code> at the top of the file when you need <code>useState</code>, <code>useEffect</code>, event handlers or browser APIs. Keep them small and push them to the leaves of the tree. Props passed from server to client must be serialisable.</li>
<li><b>Rendering strategies:</b> <b>SSG</b> builds HTML at build time. <b>ISR</b> serves pre-built HTML and refreshes it in the background after a time or an event. <b>SSR</b> renders on each request. <b>CSR</b> renders in the browser after JavaScript loads. A Next.js app can mix them route by route, and newer versions blur the lines with streaming and caching.</li>
<li><b>Caching is the part that changed most between versions.</b> In current docs, <code>fetch</code> results are not cached by default, and caching is opted into (Next.js 16 documents Cache Components and the <code>use cache</code> directive). Check the docs for the version you run before promising cache behaviour.</li>
<li><b>Next.js vs Vite React vs Blazor:</b> choose Next.js for public, SEO-sensitive sites and when you want server rendering. Plain React with Vite fits an internal dashboard behind login, served as static files next to your API. Blazor fits a team that wants to stay in C#, at the cost of a smaller ecosystem and heavier runtime options.</li>
</ul>`,
        hi: `<p><b>Analogy:</b> एक restaurant की kitchen। <b>Server Components</b> वे dishes हैं जो kitchen में पककर table पर तैयार आती हैं (browser तक थोड़ा ही JavaScript पहुँचता है)। <b>Client Components</b> table पर वाले DIY हिस्से हैं, जैसे chaat counter जहाँ toppings तुम ख़ुद डालते हो; इन्हें browser में JavaScript चाहिए।</p>
<ul>
<li><b>Next.js</b> एक React framework है: folders से routing, server rendering, data fetching, bundling और API endpoints, सब एक project में। यह Node.js (या compatible runtime) पर चलता है, इसलिए ASP.NET Core के बग़ल में यह दूसरी server technology है।</li>
<li><b>App Router:</b> <code>app/</code> के नीचे folders routes तय करते हैं; <code>page.tsx</code> page है, <code>layout.tsx</code> उसे wrap करता है, <code>route.ts</code> API endpoint (Route Handler) है।</li>
<li><b>Server Components default हैं।</b> ये data को <code>await</code> कर सकते हैं, secrets पढ़ सकते हैं और server पर database या तुम्हारी API से बात कर सकते हैं, और इनका code browser को नहीं भेजा जाता। ये state, effects या event handlers use नहीं कर सकते।</li>
<li><b>Client Components:</b> जब <code>useState</code>, <code>useEffect</code>, event handlers या browser APIs चाहिए तो file की सबसे ऊपर <code>'use client'</code> लगाओ। इन्हें छोटा रखो और tree के leaves की तरफ़ धकेलो। Server से client को दिए जाने वाले props serialisable होने चाहिए।</li>
<li><b>Rendering strategies:</b> <b>SSG</b> build time पर HTML बनाता है। <b>ISR</b> पहले से बना HTML देता है और कुछ समय या event के बाद उसे background में refresh करता है। <b>SSR</b> हर request पर render करता है। <b>CSR</b> JavaScript load होने के बाद browser में render करता है। Next.js app route-by-route इन्हें mix कर सकती है, और नए versions streaming और caching से इनकी सीमाएँ धुँधली कर देते हैं।</li>
<li><b>Caching वह हिस्सा है जो versions के बीच सबसे ज़्यादा बदला।</b> मौजूदा docs में <code>fetch</code> के results by default cache नहीं होते, और caching opt-in है (Next.js 16 Cache Components और <code>use cache</code> directive document करता है)। Cache behaviour का वादा करने से पहले अपने version के docs देखो।</li>
<li><b>Next.js vs Vite React vs Blazor:</b> public, SEO वाली sites के लिए और server rendering चाहिए तो Next.js। Login के पीछे वाला internal dashboard, जो तुम्हारी API के बग़ल में static files की तरह serve हो, उसके लिए Vite वाला plain React ठीक है। जो team C# में रहना चाहती है उसके लिए Blazor, पर छोटे ecosystem और भारी runtime options की क़ीमत पर।</li>
</ul>`,
        hg: `<p><b>Analogy:</b> ek restaurant ki kitchen. <b>Server Components</b> woh dishes hain jo kitchen mein pakkar table par taiyaar aati hain (browser tak thoda hi JavaScript pahunchta hai). <b>Client Components</b> table par wale DIY hisse hain, jaise chaat counter jahan toppings tum khud daalte ho; inhe browser mein JavaScript chahiye.</p>
<ul>
<li><b>Next.js</b> ek React framework hai: folders se routing, server rendering, data fetching, bundling aur API endpoints, sab ek project mein. Yeh Node.js (ya compatible runtime) par chalta hai, isliye ASP.NET Core ke bagal mein yeh doosri server technology hai.</li>
<li><b>App Router:</b> <code>app/</code> ke neeche folders routes tay karte hain; <code>page.tsx</code> page hai, <code>layout.tsx</code> use wrap karta hai, <code>route.ts</code> API endpoint (Route Handler) hai.</li>
<li><b>Server Components default hain.</b> Yeh data ko <code>await</code> kar sakte hain, secrets padh sakte hain aur server par database ya tumhari API se baat kar sakte hain, aur inka code browser ko nahi bheja jaata. Yeh state, effects ya event handlers use nahi kar sakte.</li>
<li><b>Client Components:</b> jab <code>useState</code>, <code>useEffect</code>, event handlers ya browser APIs chahiye to file ki sabse upar <code>'use client'</code> lagao. Inhe chhota rakho aur tree ke leaves ki taraf dhakelo. Server se client ko diye jaane wale props serialisable hone chahiye.</li>
<li><b>Rendering strategies:</b> <b>SSG</b> build time par HTML banata hai. <b>ISR</b> pehle se bana HTML deta hai aur kuch samay ya event ke baad use background mein refresh karta hai. <b>SSR</b> har request par render karta hai. <b>CSR</b> JavaScript load hone ke baad browser mein render karta hai. Next.js app route-by-route inhe mix kar sakti hai, aur naye versions streaming aur caching se inki seemayein dhundhli kar dete hain.</li>
<li><b>Caching woh hissa hai jo versions ke beech sabse zyaada badla.</b> Maujooda docs mein <code>fetch</code> ke results by default cache nahi hote, aur caching opt-in hai (Next.js 16 Cache Components aur <code>use cache</code> directive document karta hai). Cache behaviour ka vaada karne se pehle apne version ke docs dekho.</li>
<li><b>Next.js vs Vite React vs Blazor:</b> public, SEO wali sites ke liye aur server rendering chahiye to Next.js. Login ke peeche wala internal dashboard, jo tumhari API ke bagal mein static files ki tarah serve ho, uske liye Vite wala plain React theek hai. Jo team C# mein rehna chahti hai uske liye Blazor, par chhote ecosystem aur bhaari runtime options ki keemat par.</li>
</ul>`
      }
    },
    {
      id: "components-jsx-lists-in-code",
      depth: "detailed",
      title: {
        en: "Components, JSX, conditional rendering, lists and lifting state",
        hi: "Components, JSX, conditional rendering, lists और lifting state",
        hg: "Components, JSX, conditional rendering, lists aur lifting state"
      },
      body: {
        en: `<p><b>Analogy:</b> a thali. Each katori is a component with its own job; the parent plate decides which katori goes where and passes in the ingredients (props). A katori never reaches over to rearrange the plate; it only asks the parent to do so through a callback.</p>
<ul>
<li><b>JSX is not magic:</b> a compiler turns each tag into a function call that returns a plain description object. The first snippet below models that in plain JavaScript so you can run it.</li>
<li><b>Conditional rendering</b> uses ordinary JavaScript: <code>if</code>, a ternary, or <code>cond &amp;&amp; &lt;X /&gt;</code>. Trap: <code>{count &amp;&amp; &lt;X /&gt;}</code> renders a literal <code>0</code> when <code>count</code> is 0, so write <code>count &gt; 0 &amp;&amp; ...</code>.</li>
<li><b>Lists:</b> map an array to elements and give each a <code>key</code> from your data (an id). The key tells React which item is which between renders, so it can keep the right state with the right row. An index key is acceptable only for a static list that never reorders or filters.</li>
<li><b>Lifting state up:</b> in the second snippet the parent owns <code>selectedId</code>; the list reads it through props and reports clicks through <code>onSelect</code>. Compare it with passing a value down to child views in MVC, and an event back up.</li>
<li><b>TypeScript:</b> typing the props gives you compile-time checks, similar to a C# parameter type. This is the usual choice on teams that already value C# type safety.</li>
<li><b>When to use / when not:</b> lift state to the <b>closest common parent</b>, no higher. If many distant components need the value, consider context or a state library instead of passing props through ten layers (prop drilling). Do not copy a prop into state "just in case"; that creates two sources of truth that drift apart. Prefer composition (passing <code>children</code>) over deep inheritance-style component hierarchies.</li>
</ul>`,
        hi: `<p><b>Analogy:</b> एक thali। हर katori एक component है जिसका अपना काम है; parent plate तय करती है कि कौन-सी katori कहाँ रखी जाए और ingredients (props) देती है। Katori ख़ुद plate को rearrange नहीं करती; वह callback के ज़रिए parent से कहती है।</p>
<ul>
<li><b>JSX कोई जादू नहीं है:</b> compiler हर tag को function call में बदल देता है जो एक plain description object लौटाता है। नीचे का पहला snippet इसे plain JavaScript में model करता है ताकि तुम चला सको।</li>
<li><b>Conditional rendering</b> normal JavaScript से होती है: <code>if</code>, ternary, या <code>cond &amp;&amp; &lt;X /&gt;</code>। Trap: <code>{count &amp;&amp; &lt;X /&gt;}</code> में <code>count</code> 0 हो तो literal <code>0</code> render होता है, इसलिए <code>count &gt; 0 &amp;&amp; ...</code> लिखो।</li>
<li><b>Lists:</b> array को elements में map करो और हर एक को अपने data से (id) <code>key</code> दो। Key React को बताती है कि renders के बीच कौन-सा item कौन-सा है, ताकि सही row के साथ सही state रहे। Index key सिर्फ़ ऐसी static list के लिए ठीक है जो कभी reorder या filter नहीं होती।</li>
<li><b>Lifting state up:</b> दूसरे snippet में parent <code>selectedId</code> का owner है; list उसे props से पढ़ती है और clicks को <code>onSelect</code> से report करती है। इसे MVC में child views को value नीचे देने और event वापस ऊपर भेजने से compare करो।</li>
<li><b>TypeScript:</b> props को type करने से compile-time checks मिलते हैं, C# के parameter type जैसे। जिन teams को C# की type safety पसंद है वहाँ यही आम choice है।</li>
<li><b>कब use करें / कब नहीं:</b> state को <b>सबसे नज़दीकी common parent</b> में lift करो, उससे ऊपर नहीं। अगर कई दूर-दूर के components को value चाहिए तो दस layers में props पास करने (prop drilling) की जगह context या state library सोचो। Prop को "क्या पता" सोचकर state में copy मत करो; इससे दो sources of truth बन जाते हैं जो अलग-अलग हो जाते हैं। गहरी inheritance जैसी component hierarchies की जगह composition (<code>children</code> पास करना) पसंद करो।</li>
</ul>`,
        hg: `<p><b>Analogy:</b> ek thali. Har katori ek component hai jiska apna kaam hai; parent plate tay karti hai ki kaun-si katori kahan rakhi jaaye aur ingredients (props) deti hai. Katori khud plate ko rearrange nahi karti; woh callback ke zariye parent se kehti hai.</p>
<ul>
<li><b>JSX koi jaadu nahi hai:</b> compiler har tag ko function call mein badal deta hai jo ek plain description object lautata hai. Neeche ka pehla snippet ise plain JavaScript mein model karta hai taaki tum chala sako.</li>
<li><b>Conditional rendering</b> normal JavaScript se hoti hai: <code>if</code>, ternary, ya <code>cond &amp;&amp; &lt;X /&gt;</code>. Trap: <code>{count &amp;&amp; &lt;X /&gt;}</code> mein <code>count</code> 0 ho to literal <code>0</code> render hota hai, isliye <code>count &gt; 0 &amp;&amp; ...</code> likho.</li>
<li><b>Lists:</b> array ko elements mein map karo aur har ek ko apne data se (id) <code>key</code> do. Key React ko batati hai ki renders ke beech kaun-sa item kaun-sa hai, taaki sahi row ke saath sahi state rahe. Index key sirf aisi static list ke liye theek hai jo kabhi reorder ya filter nahi hoti.</li>
<li><b>Lifting state up:</b> doosre snippet mein parent <code>selectedId</code> ka owner hai; list use props se padhti hai aur clicks ko <code>onSelect</code> se report karti hai. Ise MVC mein child views ko value neeche dene aur event wapas upar bhejne se compare karo.</li>
<li><b>TypeScript:</b> props ko type karne se compile-time checks milte hain, C# ke parameter type jaise. Jin teams ko C# ki type safety pasand hai wahan yahi aam choice hai.</li>
<li><b>Kab use karein / kab nahi:</b> state ko <b>sabse nazdeeki common parent</b> mein lift karo, usse upar nahi. Agar kai door-door ke components ko value chahiye to das layers mein props pass karne (prop drilling) ki jagah context ya state library socho. Prop ko "kya pata" sochkar state mein copy mat karo; isse do sources of truth ban jaate hain jo alag-alag ho jaate hain. Gehri inheritance jaisi component hierarchies ki jagah composition (<code>children</code> pass karna) pasand karo.</li>
</ul>`
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "A simplified model of what JSX compiles to: each tag becomes a function call that returns a plain object (runs on Node, no React needed)",
            hi: "JSX किसमें compile होता है इसका सरल model: हर tag एक function call बनता है जो plain object लौटाता है (Node पर चलता है, React नहीं चाहिए)",
            hg: "JSX kisme compile hota hai uska saral model: har tag ek function call banta hai jo plain object lautata hai (Node par chalta hai, React nahi chahiye)"
          },
          check: "run",
          src: `// <div><Greeting name="Asha" /></div>  compiles (conceptually) to:
function h(type, props, ...children) {
  return { type, props: { ...props, children } };
}

function Greeting({ name }) {
  return h("p", { className: "hello" }, "Hello, ", name);
}

const tree = h("div", null, h(Greeting, { name: "Asha" }));
console.log(tree.type);
console.log(tree.props.children[0].type === Greeting);
console.log(JSON.stringify(tree.props.children[0].props));
// A component is just a function from props to a description:
console.log(JSON.stringify(Greeting({ name: "Asha" })));`,
          expected: `div
true
{"name":"Asha","children":[]}
{"type":"p","props":{"className":"hello","children":["Hello, ","Asha"]}}`
        },
        {
          lang: "jsx",
          caption: {
            en: "Props, conditional rendering and a list with stable keys (JSX, display-only)",
            hi: "Props, conditional rendering और stable keys वाली list (JSX, सिर्फ़ दिखाने के लिए)",
            hg: "Props, conditional rendering aur stable keys wali list (JSX, sirf dikhane ke liye)"
          },
          check: "none",
          src: `function Badge({ count }) {
  // count && <X /> would print a literal 0 when count is 0
  return count > 0 ? <span className="badge">{count}</span> : null;
}

function OrderList({ orders }) {
  if (orders.length === 0) {
    return <p>No orders yet.</p>;
  }
  return (
    <ul>
      {orders.map((o) => (
        // stable id from the database, not the array index
        <li key={o.id}>
          {o.customer} <Badge count={o.items} />
        </li>
      ))}
    </ul>
  );
}`
        },
        {
          lang: "tsx",
          caption: {
            en: "Lifting state up: the parent owns selectedId, the children get props and report events (TSX, display-only)",
            hi: "Lifting state up: parent selectedId का owner है, children को props मिलते हैं और वे events report करते हैं (TSX, सिर्फ़ दिखाने के लिए)",
            hg: "Lifting state up: parent selectedId ka owner hai, children ko props milte hain aur woh events report karte hain (TSX, sirf dikhane ke liye)"
          },
          check: "none",
          src: `import { useState } from "react";

type Order = { id: number; customer: string };

type OrderListProps = {
  orders: Order[];
  selectedId: number | null;
  onSelect: (id: number) => void;
};

function OrderList({ orders, selectedId, onSelect }: OrderListProps) {
  return (
    <ul>
      {orders.map((o) => (
        <li key={o.id}>
          <button
            aria-pressed={o.id === selectedId}
            onClick={() => onSelect(o.id)}
          >
            {o.customer}
          </button>
        </li>
      ))}
    </ul>
  );
}

function OrderDetail({ order }: { order: Order | undefined }) {
  return order ? <h2>Order for {order.customer}</h2> : <p>Pick an order.</p>;
}

export default function OrdersPage({ orders }: { orders: Order[] }) {
  // One owner for the shared value: both siblings stay in sync
  const [selectedId, setSelectedId] = useState<number | null>(null);
  return (
    <>
      <OrderList orders={orders} selectedId={selectedId} onSelect={setSelectedId} />
      <OrderDetail order={orders.find((o) => o.id === selectedId)} />
    </>
  );
}`
        }
      ]
    },
    {
      id: "state-snapshots-immutability-in-code",
      depth: "detailed",
      title: {
        en: "useState in depth — snapshots, batching, updater functions and immutability",
        hi: "useState गहराई से — snapshots, batching, updater functions और immutability",
        hg: "useState gehraai se — snapshots, batching, updater functions aur immutability"
      },
      body: {
        en: `<p><b>Analogy:</b> a railway ticket-booking form. When you open the form, you see the seat chart as it was at that moment (the <b>snapshot</b>). Clicking "add one seat" three times on that same stale chart still books one extra seat unless each click says "one more than whatever is booked now" (the <b>updater function</b>).</p>
<ul>
<li><b>Snapshot:</b> inside one render and its event handlers, <code>count</code> is a constant. Calling <code>setCount</code> does not change that variable; it asks React to render again with a new value.</li>
<li><b>Queue and batching:</b> several <code>set...</code> calls in one handler are queued and processed together, giving one re-render. Since React 18 this also applies inside timeouts, promises and native handlers, not only React events.</li>
<li><b>Updater function:</b> <code>setCount(c =&gt; c + 1)</code> receives the latest queued value. Use it whenever the new state depends on the old state. Passing a plain value replaces the state with that value.</li>
<li><b>Immutability:</b> state objects and arrays are treated as read-only. Produce a copy with spread, <code>map</code>, <code>filter</code> or <code>toSorted</code>. React compares with <code>Object.is</code>, so a mutated array that is set back looks "unchanged". The spread copy is <b>shallow</b>: nested objects are still shared, so copy each level you change (or use a helper library such as Immer).</li>
<li><b>Same state again:</b> if the new value is <code>Object.is</code> equal to the current one, React skips re-rendering the children.</li>
<li><b>When to use / when not:</b> use state for values that change over time and affect what is shown. Do not put derived values in state (compute <code>total</code> from <code>items</code> during render), and do not store things that never affect the UI (use a ref or a plain variable outside the component). Use the updater form when the next value depends on the previous one; a plain value is fine when it does not (for example, setting a text field's value).</li>
</ul>`,
        hi: `<p><b>Analogy:</b> railway ticket-booking form। Form खोलते ही तुम seat chart वैसा देखते हो जैसा उस पल था (<b>snapshot</b>)। उसी पुराने chart पर "एक seat जोड़ो" तीन बार दबाने से भी एक ही seat extra बुक होती है, जब तक हर click यह न कहे कि "अभी जितनी बुक है उससे एक ज़्यादा" (<b>updater function</b>)।</p>
<ul>
<li><b>Snapshot:</b> एक render और उसके event handlers के अंदर <code>count</code> constant है। <code>setCount</code> call करने से वह variable नहीं बदलता; वह React से नई value के साथ दोबारा render करने को कहता है।</li>
<li><b>Queue और batching:</b> एक handler में कई <code>set...</code> calls queue होती हैं और साथ में process होती हैं, नतीजा एक ही re-render। React 18 से यह timeouts, promises और native handlers में भी लागू है, सिर्फ़ React events में नहीं।</li>
<li><b>Updater function:</b> <code>setCount(c =&gt; c + 1)</code> को latest queued value मिलती है। जब भी नया state पुराने state पर depend करे, इसे use करो। Plain value देने से state उसी value से replace हो जाता है।</li>
<li><b>Immutability:</b> state के objects और arrays को read-only मानो। Spread, <code>map</code>, <code>filter</code> या <code>toSorted</code> से copy बनाओ। React <code>Object.is</code> से compare करता है, इसलिए mutate करके वापस set किया गया array "unchanged" दिखता है। Spread वाली copy <b>shallow</b> है: nested objects अब भी share होते हैं, इसलिए जिस level को बदल रहे हो उसे copy करो (या Immer जैसी helper library)।</li>
<li><b>वही state दोबारा:</b> अगर नई value मौजूदा के बराबर (<code>Object.is</code>) है तो React children को re-render करना skip कर देता है।</li>
<li><b>कब use करें / कब नहीं:</b> state उन values के लिए use करो जो समय के साथ बदलती हैं और जो दिखता है उस पर असर डालती हैं। Derived values को state में मत रखो (<code>total</code> को render के दौरान <code>items</code> से compute करो), और जो चीज़ें UI पर असर नहीं डालतीं उन्हें store मत करो (ref या component के बाहर का plain variable use करो)। जब अगली value पिछली पर depend करे तो updater form use करो; जब नहीं करती (जैसे text field की value set करना) तो plain value ठीक है।</li>
</ul>`,
        hg: `<p><b>Analogy:</b> railway ticket-booking form. Form kholte hi tum seat chart waisa dekhte ho jaisa us pal tha (<b>snapshot</b>). Usi purane chart par "ek seat jodo" teen baar dabane se bhi ek hi seat extra book hoti hai, jab tak har click yeh na kahe ki "abhi jitni book hai usse ek zyaada" (<b>updater function</b>).</p>
<ul>
<li><b>Snapshot:</b> ek render aur uske event handlers ke andar <code>count</code> constant hai. <code>setCount</code> call karne se woh variable nahi badalta; woh React se nayi value ke saath dobara render karne ko kehta hai.</li>
<li><b>Queue aur batching:</b> ek handler mein kai <code>set...</code> calls queue hoti hain aur saath mein process hoti hain, nateeja ek hi re-render. React 18 se yeh timeouts, promises aur native handlers mein bhi laagu hai, sirf React events mein nahi.</li>
<li><b>Updater function:</b> <code>setCount(c =&gt; c + 1)</code> ko latest queued value milti hai. Jab bhi naya state purane state par depend kare, ise use karo. Plain value dene se state usi value se replace ho jaata hai.</li>
<li><b>Immutability:</b> state ke objects aur arrays ko read-only mano. Spread, <code>map</code>, <code>filter</code> ya <code>toSorted</code> se copy banao. React <code>Object.is</code> se compare karta hai, isliye mutate karke wapas set kiya gaya array "unchanged" dikhta hai. Spread wali copy <b>shallow</b> hai: nested objects ab bhi share hote hain, isliye jis level ko badal rahe ho use copy karo (ya Immer jaisi helper library).</li>
<li><b>Wahi state dobara:</b> agar nayi value maujooda ke barabar (<code>Object.is</code>) hai to React children ko re-render karna skip kar deta hai.</li>
<li><b>Kab use karein / kab nahi:</b> state un values ke liye use karo jo samay ke saath badalti hain aur jo dikhta hai us par asar daalti hain. Derived values ko state mein mat rakho (<code>total</code> ko render ke dauran <code>items</code> se compute karo), aur jo cheezein UI par asar nahi daalti unhe store mat karo (ref ya component ke bahar ka plain variable use karo). Jab agli value pichli par depend kare to updater form use karo; jab nahi karti (jaise text field ki value set karna) to plain value theek hai.</li>
</ul>`
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "A tiny model of useState: updates are queued, then applied in order (runs on Node)",
            hi: "useState का छोटा model: updates queue होती हैं, फिर order में apply होती हैं (Node पर चलता है)",
            hg: "useState ka chhota model: updates queue hoti hain, phir order mein apply hoti hain (Node par chalta hai)"
          },
          check: "run",
          src: `const snapshot = 0; // what this render's handler sees; it never changes inside the handler

// Three plain updates: each is computed from the same snapshot, so the last one wins
const plain = [snapshot + 1, snapshot + 1, snapshot + 1].at(-1);

// Three updaters: each one receives the result of the previous one
const updaters = [(c) => c + 1, (c) => c + 1, (c) => c + 1].reduce((s, fn) => fn(s), snapshot);

console.log("3 x setCount(count + 1):", plain);
console.log("3 x setCount(c => c + 1):", updaters);
console.log("count in this render is still", snapshot);`,
          expected: `3 x setCount(count + 1): 1
3 x setCount(c => c + 1): 3
count in this render is still 0`
        },
        {
          lang: "javascript",
          caption: {
            en: "Why mutation hides changes: React compares with Object.is, and spread copies are shallow (runs on Node)",
            hi: "Mutation बदलाव क्यों छुपा देता है: React Object.is से compare करता है, और spread copies shallow हैं (Node पर चलता है)",
            hg: "Mutation badlaav kyon chhupa deta hai: React Object.is se compare karta hai, aur spread copies shallow hain (Node par chalta hai)"
          },
          check: "run",
          src: `const items = ["a", "b"];
items.push("c"); // mutation: same array object as before
console.log("same reference after push:", Object.is(items, items));

const next = [...items, "d"]; // new array
console.log("same reference after spread:", Object.is(items, next));

const user = { name: "Asha", address: { city: "Pune" } };
const shallow = { ...user, name: "Ravi" };
console.log("nested object shared:", shallow.address === user.address);`,
          expected: `same reference after push: true
same reference after spread: false
nested object shared: true`
        },
        {
          lang: "jsx",
          caption: {
            en: "The same ideas in a component: updater form and an immutable list update (JSX, display-only)",
            hi: "Component में वही ideas: updater form और immutable list update (JSX, सिर्फ़ दिखाने के लिए)",
            hg: "Component mein wahi ideas: updater form aur immutable list update (JSX, sirf dikhane ke liye)"
          },
          check: "none",
          src: `import { useState } from "react";

export default function Cart() {
  const [qty, setQty] = useState(0);
  const [items, setItems] = useState([]);

  function addThree() {
    // each updater receives the latest queued value, so this adds 3
    setQty((q) => q + 1);
    setQty((q) => q + 1);
    setQty((q) => q + 1);
  }

  function addItem(name) {
    // new array, never items.push(name)
    setItems((prev) => [...prev, { id: crypto.randomUUID(), name }]);
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  return (
    <>
      <button onClick={addThree}>Qty: {qty}</button>
      <button onClick={() => addItem("Masala chai")}>Add item</button>
      <ul>
        {items.map((i) => (
          <li key={i.id} onClick={() => removeItem(i.id)}>{i.name}</li>
        ))}
      </ul>
    </>
  );
}`
        }
      ]
    },
    {
      id: "effects-and-custom-hooks-in-code",
      depth: "detailed",
      title: {
        en: "useEffect, cleanup, Strict Mode, useMemo/useCallback/useRef and custom hooks",
        hi: "useEffect, cleanup, Strict Mode, useMemo/useCallback/useRef और custom hooks",
        hg: "useEffect, cleanup, Strict Mode, useMemo/useCallback/useRef aur custom hooks"
      },
      body: {
        en: `<p><b>Analogy:</b> a newspaper subscription. When you move house (a dependency changes), you first <b>cancel</b> the old subscription (cleanup) and then <b>start</b> a new one (setup). If you forget to cancel, two papers arrive and you pay twice. React's development-only Strict Mode is like a friend who moves you out and in once on day one, just to check that your cancel step really works.</p>
<ul>
<li><b>What an effect is for:</b> synchronising with something <b>outside React</b>: a network request, a timer, a WebSocket, a browser API. It runs <b>after</b> React commits the changes to the screen (usually after the browser paints).</li>
<li><b>Dependencies:</b> React re-runs the effect when a value in the array changed (compared with <code>Object.is</code>). List every reactive value the effect reads; the <code>react-hooks/exhaustive-deps</code> lint rule checks this. An object or array literal created during render is a new reference each time, so it re-runs the effect on every render.</li>
<li><b>Cleanup:</b> the function you return runs before the next run and on unmount. Use it to abort requests, clear timers and unsubscribe. <b>Strict Mode</b> (development only) runs setup, cleanup and setup again on mount; if that breaks your effect, the cleanup is missing or wrong. Production runs it once.</li>
<li><b>Stale closures:</b> an effect with <code>[]</code> that reads <code>count</code> keeps the <code>count</code> from the first render, like the closures on Day 23. Fix it by listing the dependency or by using an updater function.</li>
<li><b>You might not need an effect:</b> compute derived values during render, handle user actions in event handlers, and reset state with a <code>key</code>. Effects are for synchronisation, not for copying state into more state.</li>
<li><b><code>useMemo</code>/<code>useCallback</code>:</b> cache a computed value or a function between renders. They are performance hints, not guarantees; first measure, and note that <code>React.memo</code> and stable references matter mainly when a memoised child receives the function. <b><code>useRef</code></b> keeps a value or a DOM node between renders without causing a re-render. A <b>custom hook</b> is a function whose name starts with <code>use</code> that calls other hooks; each caller gets its own state, so it shares logic, not data.</li>
<li><b>When to use / when not:</b> use an effect for external synchronisation and data fetching when you do not use a data library. Do not use one to transform data for display, to fire a handler "after state changes" that belongs in the click handler, or to fetch in a Server Component (Next.js can <code>await</code> there). Skip <code>useMemo</code>/<code>useCallback</code> unless a measured render is slow or a memoised child depends on the reference. For production data fetching, a library such as TanStack Query handles caching, deduplication, retries and races for you.</li>
</ul>`,
        hi: `<p><b>Analogy:</b> अख़बार की subscription। घर बदलने पर (dependency बदली) पहले पुरानी subscription <b>cancel</b> करते हो (cleanup) और फिर नई <b>शुरू</b> करते हो (setup)। Cancel करना भूल गए तो दो अख़बार आएँगे और दो बार पैसे लगेंगे। React का सिर्फ़ development वाला Strict Mode एक दोस्त जैसा है जो पहले दिन तुम्हें एक बार बाहर निकालकर वापस ले आता है, बस यह देखने के लिए कि तुम्हारा cancel step सच में काम करता है।</p>
<ul>
<li><b>Effect किसलिए है:</b> <b>React के बाहर</b> की किसी चीज़ से sync करने के लिए: network request, timer, WebSocket, browser API। यह तब चलता है जब React changes को screen पर commit कर चुका होता है (आम तौर पर browser के paint के <b>बाद</b>)।</li>
<li><b>Dependencies:</b> array की कोई value बदली हो तो React effect दोबारा चलाता है (<code>Object.is</code> से compare करके)। Effect जो भी reactive value पढ़ता है उसे list करो; <code>react-hooks/exhaustive-deps</code> lint rule यह check करता है। Render के दौरान बना object या array literal हर बार नया reference होता है, इसलिए वह effect को हर render पर चला देता है।</li>
<li><b>Cleanup:</b> जो function तुम return करते हो वह अगले run से पहले और unmount पर चलता है। Requests abort करने, timers clear करने और unsubscribe करने में use करो। <b>Strict Mode</b> (सिर्फ़ development) mount पर setup, cleanup और फिर setup चलाता है; इससे तुम्हारा effect टूटे तो cleanup missing या ग़लत है। Production में यह एक बार ही चलता है।</li>
<li><b>Stale closures:</b> <code>[]</code> वाला effect जो <code>count</code> पढ़ता है, वह पहले render वाला <code>count</code> पकड़े रखता है, Day 23 के closures जैसा। Dependency list करके या updater function से इसे ठीक करो।</li>
<li><b>You might not need an effect:</b> derived values को render के दौरान compute करो, user actions को event handlers में handle करो, और state को <code>key</code> से reset करो। Effects synchronisation के लिए हैं, state को और state में copy करने के लिए नहीं।</li>
<li><b><code>useMemo</code>/<code>useCallback</code>:</b> renders के बीच computed value या function cache करते हैं। ये performance hints हैं, guarantees नहीं; पहले measure करो, और याद रखो कि <code>React.memo</code> और stable references ज़्यादातर तब मायने रखते हैं जब memoised child को function मिलता है। <b><code>useRef</code></b> renders के बीच value या DOM node रखता है, re-render किए बिना। <b>Custom hook</b> वह function है जिसका नाम <code>use</code> से शुरू होता है और जो दूसरे hooks call करता है; हर caller को अपना state मिलता है, इसलिए यह logic share करता है, data नहीं।</li>
<li><b>कब use करें / कब नहीं:</b> external synchronisation के लिए और data library न हो तो data fetching के लिए effect use करो। Display के लिए data transform करने, click handler में होने वाले काम को "state बदलने के बाद" चलाने, या Server Component में fetch करने के लिए effect मत use करो (Next.js वहाँ सीधे <code>await</code> कर सकता है)। जब तक measured render धीमा न हो या memoised child reference पर depend न करे, <code>useMemo</code>/<code>useCallback</code> छोड़ दो। Production data fetching में TanStack Query जैसी library caching, deduplication, retries और races सँभाल देती है।</li>
</ul>`,
        hg: `<p><b>Analogy:</b> akhbaar ki subscription. Ghar badalne par (dependency badli) pehle purani subscription <b>cancel</b> karte ho (cleanup) aur phir nayi <b>shuru</b> karte ho (setup). Cancel karna bhool gaye to do akhbaar aayenge aur do baar paise lagenge. React ka sirf development wala Strict Mode ek dost jaisa hai jo pehle din tumhe ek baar bahar nikaalkar wapas le aata hai, bas yeh dekhne ke liye ki tumhara cancel step sach mein kaam karta hai.</p>
<ul>
<li><b>Effect kisliye hai:</b> <b>React ke bahar</b> ki kisi cheez se sync karne ke liye: network request, timer, WebSocket, browser API. Yeh tab chalta hai jab React changes ko screen par commit kar chuka hota hai (aam taur par browser ke paint ke <b>baad</b>).</li>
<li><b>Dependencies:</b> array ki koi value badli ho to React effect dobara chalata hai (<code>Object.is</code> se compare karke). Effect jo bhi reactive value padhta hai use list karo; <code>react-hooks/exhaustive-deps</code> lint rule yeh check karta hai. Render ke dauran bana object ya array literal har baar naya reference hota hai, isliye woh effect ko har render par chala deta hai.</li>
<li><b>Cleanup:</b> jo function tum return karte ho woh agle run se pehle aur unmount par chalta hai. Requests abort karne, timers clear karne aur unsubscribe karne mein use karo. <b>Strict Mode</b> (sirf development) mount par setup, cleanup aur phir setup chalata hai; isse tumhara effect toote to cleanup missing ya galat hai. Production mein yeh ek baar hi chalta hai.</li>
<li><b>Stale closures:</b> <code>[]</code> wala effect jo <code>count</code> padhta hai, woh pehle render wala <code>count</code> pakde rehta hai, Day 23 ke closures jaisa. Dependency list karke ya updater function se ise theek karo.</li>
<li><b>You might not need an effect:</b> derived values ko render ke dauran compute karo, user actions ko event handlers mein handle karo, aur state ko <code>key</code> se reset karo. Effects synchronisation ke liye hain, state ko aur state mein copy karne ke liye nahi.</li>
<li><b><code>useMemo</code>/<code>useCallback</code>:</b> renders ke beech computed value ya function cache karte hain. Yeh performance hints hain, guarantees nahi; pehle measure karo, aur yaad rakho ki <code>React.memo</code> aur stable references zyaadatar tab maayne rakhte hain jab memoised child ko function milta hai. <b><code>useRef</code></b> renders ke beech value ya DOM node rakhta hai, re-render kiye bina. <b>Custom hook</b> woh function hai jiska naam <code>use</code> se shuru hota hai aur jo doosre hooks call karta hai; har caller ko apna state milta hai, isliye yeh logic share karta hai, data nahi.</li>
<li><b>Kab use karein / kab nahi:</b> external synchronisation ke liye aur data library na ho to data fetching ke liye effect use karo. Display ke liye data transform karne, click handler mein hone wale kaam ko "state badalne ke baad" chalane, ya Server Component mein fetch karne ke liye effect mat use karo (Next.js wahan seedhe <code>await</code> kar sakta hai). Jab tak measured render dheema na ho ya memoised child reference par depend na kare, <code>useMemo</code>/<code>useCallback</code> chhod do. Production data fetching mein TanStack Query jaisi library caching, deduplication, retries aur races sambhaal deti hai.</li>
</ul>`
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "A model of effect lifecycle: cleanup of the old run happens before the next setup (runs on Node)",
            hi: "Effect lifecycle का model: पुराने run का cleanup अगले setup से पहले होता है (Node पर चलता है)",
            hg: "Effect lifecycle ka model: purane run ka cleanup agle setup se pehle hota hai (Node par chalta hai)"
          },
          check: "run",
          src: `const log = [];

function runEffect(id) {
  log.push("connect " + id); // setup
  return () => log.push("disconnect " + id); // the cleanup it returns
}

let cleanup = runEffect(1); // mount
// The dependency changes from 1 to 2: React runs the OLD cleanup first, then the new setup
cleanup();
cleanup = runEffect(2);
cleanup(); // unmount
console.log(log.join("\\n"));`,
          expected: `connect 1
disconnect 1
connect 2
disconnect 2`
        },
        {
          lang: "jsx",
          caption: {
            en: "Fetch in an effect with abort cleanup and loading/error states; the parent passes key={status} so state resets (JSX, display-only)",
            hi: "Effect में fetch, abort cleanup और loading/error states के साथ; parent key={status} देता है ताकि state reset हो (JSX, सिर्फ़ दिखाने के लिए)",
            hg: "Effect mein fetch, abort cleanup aur loading/error states ke saath; parent key={status} deta hai taaki state reset ho (JSX, sirf dikhane ke liye)"
          },
          check: "none",
          src: `import { useEffect, useState } from "react";

// Parent: <Orders key={status} status={status} />  -> new key = fresh state
export function Orders({ status }) {
  const [orders, setOrders] = useState(null); // null = still loading
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const url = "https://api.example.com/orders?status=" + encodeURIComponent(status);

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("HTTP " + res.status); // fetch does not reject on 404/500 (Day 23)
        return res.json();
      })
      .then(setOrders)
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      });

    // Cleanup: cancel the request when status changes or the component unmounts
    return () => controller.abort();
  }, [status]);

  if (error) return <p role="alert">Could not load orders: {error}</p>;
  if (orders === null) return <p>Loading...</p>;
  return <ul>{orders.map((o) => <li key={o.id}>{o.customer}</li>)}</ul>;
}`
        },
        {
          lang: "jsx",
          caption: {
            en: "Not every effect is needed, and a custom hook shares logic (JSX, display-only)",
            hi: "हर effect की ज़रूरत नहीं होती, और custom hook logic share करता है (JSX, सिर्फ़ दिखाने के लिए)",
            hg: "Har effect ki zaroorat nahi hoti, aur custom hook logic share karta hai (JSX, sirf dikhane ke liye)"
          },
          check: "none",
          src: `import { useEffect, useRef, useState } from "react";

function Totals({ items }) {
  // Derived value: compute during render. No useEffect + extra state needed.
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  return <p>Total: {total}</p>;
}

// Custom hook: shares logic (subscribe + cleanup), not state between callers
function useOnlineStatus() {
  const [online, setOnline] = useState(true);
  useEffect(() => {
    const update = () => setOnline(navigator.onLine);
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);
  return online;
}

function SearchBox() {
  const inputRef = useRef(null); // DOM node, no re-render when it changes
  const online = useOnlineStatus();
  return (
    <>
      <input ref={inputRef} placeholder="Search" disabled={!online} />
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
    </>
  );
}`
        }
      ]
    },
    {
      id: "forms-and-api-in-code",
      depth: "detailed",
      title: {
        en: "Controlled forms and calling an ASP.NET Core Web API (CORS, errors, tokens)",
        hi: "Controlled forms और ASP.NET Core Web API को call करना (CORS, errors, tokens)",
        hg: "Controlled forms aur ASP.NET Core Web API ko call karna (CORS, errors, tokens)"
      },
      body: {
        en: `<p><b>Analogy:</b> a bank counter slip. The form on the screen is your slip; the browser is the security guard at the gate of a <b>different building</b> (another origin). The guard lets your slip reach the clerk only if the clerk's building has published "visitors from that address are welcome" (CORS). That rule is enforced by the browser, so Postman or curl do not run into it.</p>
<ul>
<li><b>Controlled input:</b> <code>value</code> comes from state and <code>onChange</code> writes to state, so React always knows what the field contains. This makes validation, resetting and disabling simple. An <b>uncontrolled</b> input lets the DOM hold the value and reads it with a ref or <code>FormData</code>; that is fine for simple forms.</li>
<li><b>Calling the API:</b> use <code>fetch</code> with an <code>AbortController</code> in an effect (Day 23 covers <code>res.ok</code>), or a data library such as <b>TanStack Query</b> (optional; it adds caching, retries and background refresh). Always model three states: loading, error, data. Show the server's <code>ProblemDetails</code> <code>title</code> or validation errors (Day 13) instead of a generic message.</li>
<li><b>CORS on ASP.NET Core:</b> the browser compares origins (scheme, host, port). Register a named policy with the exact front-end origins and call <code>app.UseCors(...)</code>. Do not use <code>AllowAnyOrigin</code> together with credentials; ASP.NET Core refuses that combination (it throws at startup) and the CORS protocol forbids it; in production list your real origins. A development proxy (Vite or Next.js rewrites) can avoid CORS locally by making the call same-origin.</li>
<li><b>Auth tokens:</b> a token in <code>localStorage</code> or <code>sessionStorage</code> can be read by any script on your page, so one XSS hole exposes it. A common safer shape is an <code>HttpOnly</code>, <code>Secure</code> cookie with a suitable <code>SameSite</code> value, set by the server; the browser sends it and JavaScript cannot read it. Cookies then need CSRF thinking (Day 26 covers security). The <b>BFF</b> pattern (Day 16) keeps tokens on a small server component and gives the browser only a session cookie.</li>
<li><b>When to use / when not:</b> controlled inputs for fields you validate or react to as the user types; uncontrolled for simple submit-only forms. Use a data library when several components share server data; plain <code>fetch</code> in an effect is acceptable for one small screen. Do not widen CORS to <code>*</code> to "make the error go away", and do not hide a failing call behind an empty catch. Library choices such as React Hook Form or Zod for bigger forms are team decisions, not interview facts.</li>
</ul>`,
        hi: `<p><b>Analogy:</b> bank counter की slip। Screen का form तुम्हारी slip है; browser <b>दूसरी building</b> (दूसरे origin) के gate का security guard है। Guard तुम्हारी slip को clerk तक तभी जाने देता है जब clerk की building ने "उस address से आने वाले visitors का स्वागत है" publish किया हो (CORS)। यह rule browser enforce करता है, इसलिए Postman या curl को यह नहीं मिलता।</p>
<ul>
<li><b>Controlled input:</b> <code>value</code> state से आती है और <code>onChange</code> state में लिखता है, इसलिए React को हमेशा पता रहता है कि field में क्या है। इससे validation, reset और disable आसान हो जाते हैं। <b>Uncontrolled</b> input में value DOM रखता है और तुम उसे ref या <code>FormData</code> से पढ़ते हो; simple forms के लिए यह ठीक है।</li>
<li><b>API call करना:</b> effect में <code>AbortController</code> के साथ <code>fetch</code> use करो (Day 23 में <code>res.ok</code> है), या <b>TanStack Query</b> जैसी data library (optional; यह caching, retries और background refresh जोड़ती है)। हमेशा तीन states model करो: loading, error, data। Generic message की जगह server का <code>ProblemDetails</code> <code>title</code> या validation errors दिखाओ (Day 13)।</li>
<li><b>ASP.NET Core पर CORS:</b> browser origins compare करता है (scheme, host, port)। Exact front-end origins के साथ एक named policy register करो और <code>app.UseCors(...)</code> call करो। Credentials के साथ <code>AllowAnyOrigin</code> use मत करो; ASP.NET Core इस combination को refuse करता है (startup पर throw करता है) और CORS protocol भी इसे मना करता है; production में अपने असली origins list करो। Development proxy (Vite या Next.js rewrites) call को same-origin बनाकर local में CORS से बचा सकता है।</li>
<li><b>Auth tokens:</b> <code>localStorage</code> या <code>sessionStorage</code> में रखा token तुम्हारे page का कोई भी script पढ़ सकता है, इसलिए एक XSS hole उसे expose कर देता है। आम तौर पर ज़्यादा safe shape है server द्वारा set की गई <code>HttpOnly</code>, <code>Secure</code> cookie, सही <code>SameSite</code> value के साथ; browser उसे भेजता है और JavaScript उसे पढ़ नहीं सकता। फिर cookies के लिए CSRF सोचना पड़ता है (Day 26 security cover करेगा)। <b>BFF</b> pattern (Day 16) tokens को एक छोटे server component पर रखता है और browser को सिर्फ़ session cookie देता है।</li>
<li><b>कब use करें / कब नहीं:</b> जिन fields को तुम validate करते हो या user के type करते ही react करते हो उनके लिए controlled inputs; simple submit-only forms के लिए uncontrolled। जब कई components server data share करें तो data library use करो; एक छोटी screen के लिए effect में plain <code>fetch</code> चल जाता है। "error हटाने" के लिए CORS को <code>*</code> मत करो, और failing call को खाली catch के पीछे मत छुपाओ। बड़े forms के लिए React Hook Form या Zod जैसी library choices team decisions हैं, interview facts नहीं।</li>
</ul>`,
        hg: `<p><b>Analogy:</b> bank counter ki slip. Screen ka form tumhari slip hai; browser <b>doosri building</b> (doosre origin) ke gate ka security guard hai. Guard tumhari slip ko clerk tak tabhi jaane deta hai jab clerk ki building ne "us address se aane wale visitors ka swagat hai" publish kiya ho (CORS). Yeh rule browser enforce karta hai, isliye Postman ya curl ko yeh nahi milta.</p>
<ul>
<li><b>Controlled input:</b> <code>value</code> state se aati hai aur <code>onChange</code> state mein likhta hai, isliye React ko hamesha pata rehta hai ki field mein kya hai. Isse validation, reset aur disable aasaan ho jaate hain. <b>Uncontrolled</b> input mein value DOM rakhta hai aur tum use ref ya <code>FormData</code> se padhte ho; simple forms ke liye yeh theek hai.</li>
<li><b>API call karna:</b> effect mein <code>AbortController</code> ke saath <code>fetch</code> use karo (Day 23 mein <code>res.ok</code> hai), ya <b>TanStack Query</b> jaisi data library (optional; yeh caching, retries aur background refresh jodti hai). Hamesha teen states model karo: loading, error, data. Generic message ki jagah server ka <code>ProblemDetails</code> <code>title</code> ya validation errors dikhao (Day 13).</li>
<li><b>ASP.NET Core par CORS:</b> browser origins compare karta hai (scheme, host, port). Exact front-end origins ke saath ek named policy register karo aur <code>app.UseCors(...)</code> call karo. Credentials ke saath <code>AllowAnyOrigin</code> use mat karo; ASP.NET Core is combination ko refuse karta hai (startup par throw karta hai) aur CORS protocol bhi ise mana karta hai; production mein apne asli origins list karo. Development proxy (Vite ya Next.js rewrites) call ko same-origin banakar local mein CORS se bacha sakta hai.</li>
<li><b>Auth tokens:</b> <code>localStorage</code> ya <code>sessionStorage</code> mein rakha token tumhare page ka koi bhi script padh sakta hai, isliye ek XSS hole use expose kar deta hai. Aam taur par zyaada safe shape hai server dwara set ki gayi <code>HttpOnly</code>, <code>Secure</code> cookie, sahi <code>SameSite</code> value ke saath; browser use bhejta hai aur JavaScript use padh nahi sakta. Phir cookies ke liye CSRF sochna padta hai (Day 26 security cover karega). <b>BFF</b> pattern (Day 16) tokens ko ek chhote server component par rakhta hai aur browser ko sirf session cookie deta hai.</li>
<li><b>Kab use karein / kab nahi:</b> jin fields ko tum validate karte ho ya user ke type karte hi react karte ho unke liye controlled inputs; simple submit-only forms ke liye uncontrolled. Jab kai components server data share karein to data library use karo; ek chhoti screen ke liye effect mein plain <code>fetch</code> chal jaata hai. "Error hatane" ke liye CORS ko <code>*</code> mat karo, aur failing call ko khaali catch ke peeche mat chhupao. Bade forms ke liye React Hook Form ya Zod jaisi library choices team decisions hain, interview facts nahi.</li>
</ul>`
      },
      code: [
        {
          lang: "tsx",
          caption: {
            en: "A controlled form that POSTs to the API and shows ProblemDetails errors (TSX, display-only)",
            hi: "Controlled form जो API को POST करता है और ProblemDetails errors दिखाता है (TSX, सिर्फ़ दिखाने के लिए)",
            hg: "Controlled form jo API ko POST karta hai aur ProblemDetails errors dikhata hai (TSX, sirf dikhane ke liye)"
          },
          check: "none",
          src: `import { FormEvent, useState } from "react";

type NewOrder = { customer: string; quantity: number };

export function OrderForm({ onCreated }: { onCreated: () => void }) {
  const [customer, setCustomer] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const body: NewOrder = { customer, quantity };
      const res = await fetch("https://api.example.com/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // send the HttpOnly session cookie (needs AllowCredentials on the API)
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const problem = await res.json().catch(() => null); // ProblemDetails (Day 13)
        throw new Error(problem?.title ?? "HTTP " + res.status);
      }
      setCustomer("");
      setQuantity(1);
      onCreated();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Customer
        <input value={customer} onChange={(e) => setCustomer(e.target.value)} required />
      </label>
      <label>
        Quantity
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </label>
      <button disabled={saving}>{saving ? "Saving..." : "Save"}</button>
      {error && <p role="alert">{error}</p>}
    </form>
  );
}`
        },
        {
          lang: "tsx",
          caption: {
            en: "Optional: the same read with TanStack Query (needs a QueryClientProvider higher up) (TSX, display-only)",
            hi: "Optional: वही read TanStack Query के साथ (ऊपर कहीं QueryClientProvider चाहिए) (TSX, सिर्फ़ दिखाने के लिए)",
            hg: "Optional: wahi read TanStack Query ke saath (upar kahin QueryClientProvider chahiye) (TSX, sirf dikhane ke liye)"
          },
          check: "none",
          src: `import { useQuery } from "@tanstack/react-query";

type Order = { id: number; customer: string };

async function fetchOrders(): Promise<Order[]> {
  const res = await fetch("https://api.example.com/api/orders", { credentials: "include" });
  if (!res.ok) throw new Error("HTTP " + res.status);
  return res.json();
}

export function OrderList() {
  // The library handles caching, de-duplication, retries and refetching
  const { data, isPending, error } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  if (isPending) return <p>Loading...</p>;
  if (error) return <p role="alert">{error.message}</p>;
  return <ul>{data.map((o) => <li key={o.id}>{o.customer}</li>)}</ul>;
}`
        },
        {
          lang: "csharp",
          caption: {
            en: "ASP.NET Core side: a named CORS policy for the SPA origins, with credentials (compiles)",
            hi: "ASP.NET Core की तरफ़: SPA origins के लिए named CORS policy, credentials के साथ (compile होता है)",
            hg: "ASP.NET Core ki taraf: SPA origins ke liye named CORS policy, credentials ke saath (compile hota hai)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("Spa", policy => policy
        .WithOrigins("https://app.example.com", "http://localhost:5173") // exact origins, no wildcard
        .WithMethods("GET", "POST", "PUT", "DELETE")
        .WithHeaders("Content-Type", "Authorization")
        .AllowCredentials()); // needed for cookies; cannot be combined with AllowAnyOrigin
});

var app = builder.Build();

app.UseCors("Spa");

app.MapGet("/api/orders", () => new[] { new { Id = 1, Customer = "Asha" } });

app.Run();`
        }
      ]
    },
    {
      id: "nextjs-in-code",
      depth: "detailed",
      title: {
        en: "Next.js App Router in code — server components, 'use client', caching, route handlers and a BFF",
        hi: "Next.js App Router code में — server components, 'use client', caching, route handlers और BFF",
        hg: "Next.js App Router code mein — server components, 'use client', caching, route handlers aur BFF"
      },
      body: {
        en: `<p><b>Analogy:</b> a wedding caterer. The kitchen (server) cooks the main dishes in bulk and may keep some ready in the cold room (cache); a live counter (client component) makes dosa to order. Putting every dish at the live counter makes the queue slow and the guests carry lots of equipment (JavaScript).</p>
<ul>
<li><b>Server Component page:</b> <code>async</code> function, <code>await</code> data directly, render HTML on the server. Secrets (API keys, connection details) stay on the server. In Next.js 15 and later, <code>params</code> and <code>searchParams</code> are promises you <code>await</code>.</li>
<li><b>Client Component:</b> a file that starts with <code>'use client'</code>. It is still pre-rendered to HTML on the server for the first load, then <b>hydrated</b> in the browser so handlers work. Everything that file imports joins the client bundle, so keep the interactive part small and pass server-rendered content in as <code>children</code>.</li>
<li><b>Data in server components:</b> call your ASP.NET Core API with <code>fetch</code> (or a database client) on the server. According to the current docs, <code>fetch</code> results are <b>not cached by default</b>, and slow fetches can be wrapped in <code>&lt;Suspense&gt;</code> so the rest of the page streams first.</li>
<li><b>Caching (version-sensitive):</b> Next.js 16 documents Cache Components: you opt in with <code>cacheComponents: true</code> in the config, then mark data or components with <code>'use cache'</code> and choose a lifetime with <code>cacheLife</code>. Without Cache Components (and in earlier versions) you use route segment options and <code>revalidate</code>. Check the docs for your installed version.</li>
<li><b>SSG / ISR / SSR / CSR in practice:</b> a page with no request-time data can be prebuilt (static); <code>generateStaticParams</code> lists dynamic URLs to prebuild; cached content refreshes by a time or an on-demand call (the ISR idea); request data such as cookies makes that part render per request (SSR) and is best wrapped in <code>&lt;Suspense&gt;</code>; <code>'use client'</code> parts with fetch-in-effect are CSR.</li>
<li><b>Route Handlers:</b> a <code>route.ts</code> file exporting <code>GET</code>, <code>POST</code> and so on. In the current docs, they are not cached by default. A handler can act as a small <b>BFF</b> (Day 16): read an HttpOnly cookie on the server, call the ASP.NET Core API with the token, and return only what the browser needs.</li>
<li><b>When to use / when not:</b> use server components for data-heavy, SEO-visible pages and keep client components for interactivity. Use a Route Handler as a BFF for token handling; do not rebuild your whole business API in it when ASP.NET Core already owns that logic. Do not add <code>'use client'</code> to a whole layout "to make an error go away"; find the one component that needs state. Avoid a Node-based Next.js server when a static Vite build behind your API would do.</li>
</ul>`,
        hi: `<p><b>Analogy:</b> शादी का caterer। Kitchen (server) मुख्य dishes bulk में पकाती है और कुछ cold room में तैयार रख सकती है (cache); live counter (client component) order पर dosa बनाता है। हर dish live counter पर रखोगे तो queue धीमी होगी और मेहमानों को ढेर सारा equipment (JavaScript) उठाना पड़ेगा।</p>
<ul>
<li><b>Server Component page:</b> <code>async</code> function, data को सीधे <code>await</code> करो, HTML server पर render करो। Secrets (API keys, connection details) server पर ही रहते हैं। Next.js 15 और उसके बाद <code>params</code> और <code>searchParams</code> promises हैं जिन्हें <code>await</code> करना पड़ता है।</li>
<li><b>Client Component:</b> वह file जो <code>'use client'</code> से शुरू होती है। पहले load के लिए यह भी server पर HTML में pre-render होती है, फिर browser में <b>hydrate</b> होती है ताकि handlers काम करें। उस file के सारे imports client bundle में जाते हैं, इसलिए interactive हिस्सा छोटा रखो और server-rendered content को <code>children</code> की तरह पास करो।</li>
<li><b>Server components में data:</b> server पर <code>fetch</code> (या database client) से अपनी ASP.NET Core API call करो। मौजूदा docs के हिसाब से <code>fetch</code> results by default <b>cache नहीं</b> होते, और धीमे fetches को <code>&lt;Suspense&gt;</code> में रखा जा सकता है ताकि बाक़ी page पहले stream हो।</li>
<li><b>Caching (version-sensitive):</b> Next.js 16 Cache Components document करता है: config में <code>cacheComponents: true</code> से opt in करते हो, फिर data या components को <code>'use cache'</code> से mark करते हो और <code>cacheLife</code> से lifetime चुनते हो। Cache Components के बिना (और पुराने versions में) route segment options और <code>revalidate</code> use करते हैं। अपने installed version के docs देखो।</li>
<li><b>SSG / ISR / SSR / CSR practice में:</b> जिस page में request-time data नहीं है वह पहले से बन सकता है (static); <code>generateStaticParams</code> prebuild होने वाले dynamic URLs list करता है; cached content समय या on-demand call से refresh होता है (ISR का idea); cookies जैसा request data उस हिस्से को हर request पर render करवाता है (SSR) और उसे <code>&lt;Suspense&gt;</code> में रखना बेहतर है; effect में fetch करने वाले <code>'use client'</code> हिस्से CSR हैं।</li>
<li><b>Route Handlers:</b> <code>route.ts</code> file जो <code>GET</code>, <code>POST</code> वग़ैरह export करती है। मौजूदा docs में ये by default cache नहीं होते। Handler एक छोटे <b>BFF</b> (Day 16) का काम कर सकता है: server पर HttpOnly cookie पढ़ो, token के साथ ASP.NET Core API call करो, और browser को सिर्फ़ वही लौटाओ जो उसे चाहिए।</li>
<li><b>कब use करें / कब नहीं:</b> data-heavy, SEO में दिखने वाले pages के लिए server components और interactivity के लिए client components। Token handling के लिए Route Handler को BFF की तरह use करो; जब ASP.NET Core पहले से वह logic own करता है तो पूरी business API उसमें दोबारा मत बनाओ। "error हटाने" के लिए पूरे layout पर <code>'use client'</code> मत लगाओ; वह एक component खोजो जिसे state चाहिए। जब तुम्हारी API के पीछे static Vite build काफ़ी हो तब Node-based Next.js server से बचो।</li>
</ul>`,
        hg: `<p><b>Analogy:</b> shaadi ka caterer. Kitchen (server) mukhya dishes bulk mein pakati hai aur kuch cold room mein taiyaar rakh sakti hai (cache); live counter (client component) order par dosa banata hai. Har dish live counter par rakhoge to queue dheemi hogi aur mehmaano ko dher saara equipment (JavaScript) uthana padega.</p>
<ul>
<li><b>Server Component page:</b> <code>async</code> function, data ko seedhe <code>await</code> karo, HTML server par render karo. Secrets (API keys, connection details) server par hi rehte hain. Next.js 15 aur uske baad <code>params</code> aur <code>searchParams</code> promises hain jinhe <code>await</code> karna padta hai.</li>
<li><b>Client Component:</b> woh file jo <code>'use client'</code> se shuru hoti hai. Pehle load ke liye yeh bhi server par HTML mein pre-render hoti hai, phir browser mein <b>hydrate</b> hoti hai taaki handlers kaam karein. Us file ke saare imports client bundle mein jaate hain, isliye interactive hissa chhota rakho aur server-rendered content ko <code>children</code> ki tarah pass karo.</li>
<li><b>Server components mein data:</b> server par <code>fetch</code> (ya database client) se apni ASP.NET Core API call karo. Maujooda docs ke hisaab se <code>fetch</code> results by default <b>cache nahi</b> hote, aur dheemi fetches ko <code>&lt;Suspense&gt;</code> mein rakha ja sakta hai taaki baaki page pehle stream ho.</li>
<li><b>Caching (version-sensitive):</b> Next.js 16 Cache Components document karta hai: config mein <code>cacheComponents: true</code> se opt in karte ho, phir data ya components ko <code>'use cache'</code> se mark karte ho aur <code>cacheLife</code> se lifetime chunte ho. Cache Components ke bina (aur purane versions mein) route segment options aur <code>revalidate</code> use karte hain. Apne installed version ke docs dekho.</li>
<li><b>SSG / ISR / SSR / CSR practice mein:</b> jis page mein request-time data nahi hai woh pehle se ban sakta hai (static); <code>generateStaticParams</code> prebuild hone wale dynamic URLs list karta hai; cached content samay ya on-demand call se refresh hota hai (ISR ka idea); cookies jaisa request data us hisse ko har request par render karwata hai (SSR) aur use <code>&lt;Suspense&gt;</code> mein rakhna behtar hai; effect mein fetch karne wale <code>'use client'</code> hisse CSR hain.</li>
<li><b>Route Handlers:</b> <code>route.ts</code> file jo <code>GET</code>, <code>POST</code> waghairah export karti hai. Maujooda docs mein yeh by default cache nahi hote. Handler ek chhote <b>BFF</b> (Day 16) ka kaam kar sakta hai: server par HttpOnly cookie padho, token ke saath ASP.NET Core API call karo, aur browser ko sirf wahi lautao jo use chahiye.</li>
<li><b>Kab use karein / kab nahi:</b> data-heavy, SEO mein dikhne wale pages ke liye server components aur interactivity ke liye client components. Token handling ke liye Route Handler ko BFF ki tarah use karo; jab ASP.NET Core pehle se woh logic own karta hai to poori business API usme dobara mat banao. "Error hatane" ke liye poore layout par <code>'use client'</code> mat lagao; woh ek component khojo jise state chahiye. Jab tumhari API ke peeche static Vite build kaafi ho tab Node-based Next.js server se bacho.</li>
</ul>`
      },
      code: [
        {
          lang: "tsx",
          caption: {
            en: "A Server Component page: await data on the server and pass a small piece to a client component (TSX, display-only)",
            hi: "Server Component page: server पर data await करो और एक छोटा हिस्सा client component को दो (TSX, सिर्फ़ दिखाने के लिए)",
            hg: "Server Component page: server par data await karo aur ek chhota hissa client component ko do (TSX, sirf dikhane ke liye)"
          },
          check: "none",
          src: `// app/orders/[id]/page.tsx  (no 'use client': this runs on the server)
import { Suspense } from "react";
import LikeButton from "@/app/ui/like-button";

type Order = { id: number; customer: string; likes: number };

async function getOrder(id: string): Promise<Order> {
  // The API key stays on the server; it is never sent to the browser
  const res = await fetch("https://api.example.com/api/orders/" + id, {
    headers: { "X-Api-Key": process.env.ORDERS_API_KEY ?? "" },
  });
  if (!res.ok) throw new Error("Order request failed: " + res.status);
  return res.json();
}

async function OrderDetails({ id }: { id: string }) {
  const order = await getOrder(id);
  return (
    <section>
      <h1>Order for {order.customer}</h1>
      <LikeButton likes={order.likes} />
    </section>
  );
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // params is a promise in current Next.js versions
  return (
    <Suspense fallback={<p>Loading order...</p>}>
      <OrderDetails id={id} />
    </Suspense>
  );
}`
        },
        {
          lang: "tsx",
          caption: {
            en: "The Client Component: only the interactive leaf needs 'use client' (TSX, display-only)",
            hi: "Client Component: सिर्फ़ interactive leaf को 'use client' चाहिए (TSX, सिर्फ़ दिखाने के लिए)",
            hg: "Client Component: sirf interactive leaf ko 'use client' chahiye (TSX, sirf dikhane ke liye)"
          },
          check: "none",
          src: `// app/ui/like-button.tsx
"use client"; // state and onClick need the browser

import { useState } from "react";

export default function LikeButton({ likes }: { likes: number }) {
  const [count, setCount] = useState(likes); // initial value comes from the server
  return <button onClick={() => setCount((c) => c + 1)}>Likes: {count}</button>;
}`
        },
        {
          lang: "typescript",
          caption: {
            en: "A Route Handler acting as a small BFF: the token stays in an HttpOnly cookie, never in browser JavaScript (TypeScript, display-only)",
            hi: "छोटे BFF की तरह काम करने वाला Route Handler: token HttpOnly cookie में रहता है, browser JavaScript में नहीं (TypeScript, सिर्फ़ दिखाने के लिए)",
            hg: "Chhote BFF ki tarah kaam karne wala Route Handler: token HttpOnly cookie mein rehta hai, browser JavaScript mein nahi (TypeScript, sirf dikhane ke liye)"
          },
          check: "none",
          src: `// app/api/orders/route.ts
import { cookies } from "next/headers";

export async function GET() {
  const token = (await cookies()).get("access_token")?.value; // HttpOnly cookie set at login
  if (!token) {
    return Response.json({ title: "Not signed in" }, { status: 401 });
  }

  // Server-to-server call: no CORS involved, the token never reaches the page
  const upstream = await fetch("https://api.example.com/api/orders", {
    headers: { Authorization: "Bearer " + token },
  });
  if (!upstream.ok) {
    return Response.json({ title: "Upstream error" }, { status: 502 });
  }

  const orders: { id: number; customer: string; internalNotes?: string }[] = await upstream.json();
  // Return only what the browser needs
  return Response.json(orders.map(({ id, customer }) => ({ id, customer })));
}`
        },
        {
          lang: "tsx",
          caption: {
            en: "Caching with Cache Components (Next.js 16 docs; needs cacheComponents: true, check your version) (TSX, display-only)",
            hi: "Cache Components के साथ caching (Next.js 16 docs; cacheComponents: true चाहिए, अपना version देखो) (TSX, सिर्फ़ दिखाने के लिए)",
            hg: "Cache Components ke saath caching (Next.js 16 docs; cacheComponents: true chahiye, apna version dekho) (TSX, sirf dikhane ke liye)"
          },
          check: "none",
          src: `// next.config.ts: const nextConfig = { cacheComponents: true };
import { cacheLife } from "next/cache";
import { Suspense } from "react";
import { cookies } from "next/headers";

async function PriceList() {
  "use cache"; // same result for everyone, refreshed on the 'hours' profile
  cacheLife("hours");
  const res = await fetch("https://api.example.com/api/prices");
  const prices: { sku: string; price: number }[] = await res.json();
  return <ul>{prices.map((p) => <li key={p.sku}>{p.sku}: {p.price}</li>)}</ul>;
}

async function Greeting() {
  const name = (await cookies()).get("name")?.value ?? "guest"; // per-request data
  return <p>Hello, {name}</p>;
}

export default function Page() {
  return (
    <>
      <PriceList />
      <Suspense fallback={<p>Loading...</p>}>
        <Greeting />
      </Suspense>
    </>
  );
}`
        }
      ]
    },
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
        en: `<ul>
<li>React's core job is small: components, state, rendering. You add a router, a data library and a build tool yourself, or you pick a framework on top (Next.js, Remix and others).</li>
<li>It is <b>declarative</b>: you say what the UI looks like for this data, not which DOM nodes to change.</li>
<li>.NET comparison: React is closer to the view layer of MVC plus component logic, while Angular is closer to a full framework like ASP.NET Core with its built-in services.</li>
<li>TL angle: a library gives freedom and also decisions. Someone must choose and own the router, data layer and conventions, or every screen will look different.</li>
<li>Follow-up: "Why did you pick React for this project?" Talk about ecosystem, hiring pool and team familiarity rather than "it is faster".</li>
</ul>`,
        hi: `<ul>
<li>React का core काम छोटा है: components, state, rendering। Router, data library और build tool तुम ख़ुद जोड़ते हो, या ऊपर से कोई framework चुनते हो (Next.js, Remix वग़ैरह)।</li>
<li>यह <b>declarative</b> है: तुम बताते हो कि इस data के लिए UI कैसी दिखती है, यह नहीं कि कौन-से DOM nodes बदलने हैं।</li>
<li>.NET से comparison: React MVC की view layer और component logic के ज़्यादा क़रीब है, जबकि Angular ASP.NET Core जैसे पूरे framework के क़रीब है जिसमें built-in services हैं।</li>
<li>TL angle: library आज़ादी देती है और साथ में decisions भी। किसी को router, data layer और conventions चुनने और own करने होंगे, वरना हर screen अलग दिखेगी।</li>
<li>Follow-up: "इस project के लिए React क्यों चुना?" "यह faster है" की जगह ecosystem, hiring pool और team की familiarity की बात करो।</li>
</ul>`,
        hg: `<ul>
<li>React ka core kaam chhota hai: components, state, rendering. Router, data library aur build tool tum khud jodte ho, ya upar se koi framework chunte ho (Next.js, Remix waghairah).</li>
<li>Yeh <b>declarative</b> hai: tum batate ho ki is data ke liye UI kaisi dikhti hai, yeh nahi ki kaun-se DOM nodes badalne hain.</li>
<li>.NET se comparison: React MVC ki view layer aur component logic ke zyaada kareeb hai, jabki Angular ASP.NET Core jaise poore framework ke kareeb hai jisme built-in services hain.</li>
<li>TL angle: library aazaadi deti hai aur saath mein decisions bhi. Kisi ko router, data layer aur conventions chunne aur own karne honge, warna har screen alag dikhegi.</li>
<li>Follow-up: "Is project ke liye React kyon chuna?" "Yeh faster hai" ki jagah ecosystem, hiring pool aur team ki familiarity ki baat karo.</li>
</ul>`
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
        en: `<ul>
<li>Props are like method parameters in C#: the caller supplies them and the method does not reassign the caller's variables. State is like a private field that survives between calls, but changing it must go through the setter.</li>
<li>A child tells its parent something by calling a <b>callback prop</b> (<code>onSelect</code>), not by editing the parent's data.</li>
<li>If two siblings need the same value, move the state to their closest common parent (lifting state up).</li>
<li>Do not copy props into state unless you really want an initial value that then diverges.</li>
<li>Follow-up: "What causes a re-render?" A state change in the component, a parent re-rendering, or a changed context value it reads.</li>
</ul>`,
        hi: `<ul>
<li>Props C# के method parameters जैसे हैं: caller देता है और method caller के variables को reassign नहीं करता। State एक private field जैसी है जो calls के बीच बची रहती है, पर उसे बदलना setter से ही होगा।</li>
<li>Child अपने parent को कुछ बताता है <b>callback prop</b> (<code>onSelect</code>) call करके, parent का data edit करके नहीं।</li>
<li>अगर दो siblings को same value चाहिए तो state को उनके सबसे नज़दीकी common parent में ले जाओ (lifting state up)।</li>
<li>Props को state में copy मत करो, जब तक तुम्हें सच में ऐसी initial value नहीं चाहिए जो बाद में अलग हो जाए।</li>
<li>Follow-up: "Re-render किस वजह से होता है?" component में state change, parent का re-render, या जो context value वह पढ़ता है उसका बदलना।</li>
</ul>`,
        hg: `<ul>
<li>Props C# ke method parameters jaise hain: caller deta hai aur method caller ke variables ko reassign nahi karta. State ek private field jaisi hai jo calls ke beech bachi rehti hai, par use badalna setter se hi hoga.</li>
<li>Child apne parent ko kuch batata hai <b>callback prop</b> (<code>onSelect</code>) call karke, parent ka data edit karke nahi.</li>
<li>Agar do siblings ko same value chahiye to state ko unke sabse nazdeeki common parent mein le jao (lifting state up).</li>
<li>Props ko state mein copy mat karo, jab tak tumhe sach mein aisi initial value nahi chahiye jo baad mein alag ho jaaye.</li>
<li>Follow-up: "Re-render kis wajah se hota hai?" component mein state change, parent ka re-render, ya jo context value woh padhta hai uska badalna.</li>
</ul>`
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
        en: `<ul>
<li>Think of a key like a primary key. React uses it to decide "this is the same item as before" and keep its state (for example text typed in an input in that row).</li>
<li>With index keys, deleting the first row makes the old second row take index 0, so React reuses the first row's component state for it. Puzzle 3 shows this with a small model.</li>
<li>Keys must be unique among siblings only, not globally. Do not generate them with <code>Math.random()</code> during render; that forces a new component on every render.</li>
<li>An index key is acceptable for a static list that is never reordered, filtered or edited.</li>
<li>Follow-up: "Can you use a key to reset a component's state?" Yes, changing the key creates a fresh instance.</li>
</ul>`,
        hi: `<ul>
<li>Key को primary key जैसा समझो। React इससे तय करता है कि "यह वही item है जो पहले था" और उसकी state रखता है (जैसे उस row के input में typed text)।</li>
<li>Index keys के साथ पहली row delete करने पर पुरानी दूसरी row को index 0 मिल जाता है, इसलिए React पहली row की component state उसे दे देता है। Puzzle 3 इसे छोटे model से दिखाता है।</li>
<li>Keys सिर्फ़ siblings में unique होनी चाहिए, globally नहीं। उन्हें render के दौरान <code>Math.random()</code> से मत बनाओ; इससे हर render पर नया component बन जाता है।</li>
<li>Index key उस static list के लिए ठीक है जो कभी reorder, filter या edit नहीं होती।</li>
<li>Follow-up: "क्या key से component की state reset कर सकते हैं?" हाँ, key बदलने से fresh instance बनता है।</li>
</ul>`,
        hg: `<ul>
<li>Key ko primary key jaisa samjho. React isse tay karta hai ki "yeh wahi item hai jo pehle tha" aur uski state rakhta hai (jaise us row ke input mein typed text).</li>
<li>Index keys ke saath pehli row delete karne par purani doosri row ko index 0 mil jaata hai, isliye React pehli row ki component state use de deta hai. Puzzle 3 ise chhote model se dikhata hai.</li>
<li>Keys sirf siblings mein unique honi chahiye, globally nahi. Unhe render ke dauran <code>Math.random()</code> se mat banao; isse har render par naya component ban jaata hai.</li>
<li>Index key us static list ke liye theek hai jo kabhi reorder, filter ya edit nahi hoti.</li>
<li>Follow-up: "Kya key se component ki state reset kar sakte hain?" Haan, key badalne se fresh instance banta hai.</li>
</ul>`
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
        en: `<ul>
<li><code>count</code> is a constant for the whole render and its handlers. <code>setCount</code> schedules the next render; it does not change the variable you already hold.</li>
<li>React batches the queued updates and re-renders once. With plain values the queue is "1, 1, 1" and the last wins; with updaters it is "+1, +1, +1" applied in order.</li>
<li>Reading the state right after calling the setter in the same handler gives the old value; this surprises people coming from C# properties.</li>
<li>Batching also applies in timeouts, promises and native event handlers since React 18.</li>
<li>Follow-up: "When is a plain value fine?" When the new value does not depend on the old one, such as <code>setName(e.target.value)</code>.</li>
</ul>`,
        hi: `<ul>
<li>पूरे render और उसके handlers के लिए <code>count</code> एक constant है। <code>setCount</code> अगला render schedule करता है; जो variable तुम्हारे पास पहले से है उसे नहीं बदलता।</li>
<li>React queued updates को batch करके एक बार re-render करता है। Plain values के साथ queue "1, 1, 1" होती है और आख़िरी जीतती है; updaters के साथ वह "+1, +1, +1" है जो order में apply होती है।</li>
<li>उसी handler में setter call करने के तुरंत बाद state पढ़ोगे तो पुरानी value मिलेगी; C# properties से आने वालों को यह चौंकाता है।</li>
<li>React 18 से batching timeouts, promises और native event handlers में भी लागू होती है।</li>
<li>Follow-up: "Plain value कब ठीक है?" जब नई value पुरानी पर depend न करे, जैसे <code>setName(e.target.value)</code>।</li>
</ul>`,
        hg: `<ul>
<li>Poore render aur uske handlers ke liye <code>count</code> ek constant hai. <code>setCount</code> agla render schedule karta hai; jo variable tumhare paas pehle se hai use nahi badalta.</li>
<li>React queued updates ko batch karke ek baar re-render karta hai. Plain values ke saath queue "1, 1, 1" hoti hai aur aakhri jeetti hai; updaters ke saath woh "+1, +1, +1" hai jo order mein apply hoti hai.</li>
<li>Usi handler mein setter call karne ke turant baad state padhoge to purani value milegi; C# properties se aane walon ko yeh chaunkata hai.</li>
<li>React 18 se batching timeouts, promises aur native event handlers mein bhi laagu hoti hai.</li>
<li>Follow-up: "Plain value kab theek hai?" jab nayi value purani par depend na kare, jaise <code>setName(e.target.value)</code>.</li>
</ul>`
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
        en: `<ul>
<li>List every reactive value (props, state, values derived from them) that the effect reads. The <code>react-hooks/exhaustive-deps</code> ESLint rule flags missing ones; treat its warning as a bug report.</li>
<li>An object, array or function created in the component body is a new reference every render, so as a dependency it re-runs the effect each time. Move it inside the effect or outside the component, or depend on its primitive fields.</li>
<li>Cleanup runs before the next run and on unmount; use it to abort requests, clear timers and unsubscribe.</li>
<li>Lying about dependencies (an empty array while reading <code>count</code>) gives stale closures, like the loop traps on Day 23.</li>
<li>Follow-up: "Is an effect the right place for this?" See "You might not need an effect" below.</li>
</ul>`,
        hi: `<ul>
<li>Effect जो भी reactive value (props, state, उनसे बनी values) पढ़ता है उसे list करो। <code>react-hooks/exhaustive-deps</code> ESLint rule missing वाली flag करता है; उसकी warning को bug report समझो।</li>
<li>Component body में बना object, array या function हर render पर नया reference होता है, इसलिए dependency के रूप में वह effect को हर बार चला देता है। उसे effect के अंदर या component के बाहर ले जाओ, या उसके primitive fields पर depend करो।</li>
<li>Cleanup अगले run से पहले और unmount पर चलता है; requests abort करने, timers clear करने और unsubscribe करने में use करो।</li>
<li>Dependencies के बारे में झूठ बोलना (<code>count</code> पढ़ते हुए खाली array) stale closures देता है, Day 23 के loop traps जैसे।</li>
<li>Follow-up: "क्या इसके लिए effect सही जगह है?" नीचे "You might not need an effect" देखो।</li>
</ul>`,
        hg: `<ul>
<li>Effect jo bhi reactive value (props, state, unse bani values) padhta hai use list karo. <code>react-hooks/exhaustive-deps</code> ESLint rule missing wali flag karta hai; uski warning ko bug report samjho.</li>
<li>Component body mein bana object, array ya function har render par naya reference hota hai, isliye dependency ke roop mein woh effect ko har baar chala deta hai. Use effect ke andar ya component ke bahar le jao, ya uske primitive fields par depend karo.</li>
<li>Cleanup agle run se pehle aur unmount par chalta hai; requests abort karne, timers clear karne aur unsubscribe karne mein use karo.</li>
<li>Dependencies ke baare mein jhooth bolna (<code>count</code> padhte hue khaali array) stale closures deta hai, Day 23 ke loop traps jaise.</li>
<li>Follow-up: "Kya iske liye effect sahi jagah hai?" neeche "You might not need an effect" dekho.</li>
</ul>`
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
        en: `<ul>
<li><code>'use client'</code> marks a <b>boundary</b>: that file and the modules it imports go to the browser bundle. You do not need it on every client-side component; put it on the interactive entry points.</li>
<li>Client Components are still pre-rendered to HTML on the server for the first load and then hydrated. "Client" means "also runs in the browser", not "runs only in the browser".</li>
<li>Props from server to client must be serialisable (plain data, not functions or class instances). A server component can also pass a promise that a client component reads with React's <code>use</code> API.</li>
<li>A server component can be passed into a client component as <code>children</code>, which keeps the server part out of the bundle.</li>
<li>Follow-up: "Can a Client Component import a Server Component?" Importing it makes it part of the client bundle; pass it as <code>children</code> instead.</li>
</ul>`,
        hi: `<ul>
<li><code>'use client'</code> एक <b>boundary</b> mark करता है: वह file और उसके imported modules browser bundle में जाते हैं। हर client-side component पर इसकी ज़रूरत नहीं; इसे interactive entry points पर लगाओ।</li>
<li>Client Components भी पहले load के लिए server पर HTML में pre-render होते हैं और फिर hydrate होते हैं। "Client" का मतलब "browser में भी चलता है", "सिर्फ़ browser में चलता है" नहीं।</li>
<li>Server से client को जाने वाले props serialisable होने चाहिए (plain data, functions या class instances नहीं)। Server component एक promise भी दे सकता है जिसे client component React के <code>use</code> API से पढ़ता है।</li>
<li>Server component को client component में <code>children</code> की तरह दिया जा सकता है, जिससे server वाला हिस्सा bundle से बाहर रहता है।</li>
<li>Follow-up: "क्या Client Component किसी Server Component को import कर सकता है?" import करने से वह client bundle का हिस्सा बन जाता है; उसकी जगह <code>children</code> की तरह पास करो।</li>
</ul>`,
        hg: `<ul>
<li><code>'use client'</code> ek <b>boundary</b> mark karta hai: woh file aur uske imported modules browser bundle mein jaate hain. Har client-side component par iski zaroorat nahi; ise interactive entry points par lagao.</li>
<li>Client Components bhi pehle load ke liye server par HTML mein pre-render hote hain aur phir hydrate hote hain. "Client" ka matlab "browser mein bhi chalta hai", "sirf browser mein chalta hai" nahi.</li>
<li>Server se client ko jaane wale props serialisable hone chahiye (plain data, functions ya class instances nahi). Server component ek promise bhi de sakta hai jise client component React ke <code>use</code> API se padhta hai.</li>
<li>Server component ko client component mein <code>children</code> ki tarah diya ja sakta hai, jisse server wala hissa bundle se bahar rehta hai.</li>
<li>Follow-up: "Kya Client Component kisi Server Component ko import kar sakta hai?" import karne se woh client bundle ka hissa ban jaata hai; uski jagah <code>children</code> ki tarah pass karo.</li>
</ul>`
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
        en: `<ul>
<li><b>SSG:</b> fastest to serve (a file on a CDN), but content is as old as the last build. Good for docs and marketing pages.</li>
<li><b>ISR:</b> like SSG, but pages are refreshed after a time or on demand, so you avoid a full rebuild for every content change.</li>
<li><b>SSR:</b> HTML per request, for personalised or always-fresh data, at the cost of server work on each request.</li>
<li><b>CSR:</b> the server sends a shell and JavaScript fetches data; fine behind a login where SEO does not matter, but the first meaningful paint comes later.</li>
<li>In the App Router you rarely pick one global mode: static parts, cached parts and request-time parts can live on the same page with <code>&lt;Suspense&gt;</code>. Exact APIs and defaults changed across Next.js 14, 15 and 16, so confirm with the docs of your version.</li>
<li>Follow-up: "A product page with price changes every few minutes?" Cache with a short lifetime (ISR idea) or stream the price part, instead of fully dynamic rendering.</li>
</ul>`,
        hi: `<ul>
<li><b>SSG:</b> serve करने में सबसे तेज़ (CDN पर एक file), पर content उतना ही पुराना जितना आख़िरी build। Docs और marketing pages के लिए अच्छा।</li>
<li><b>ISR:</b> SSG जैसा, पर pages समय के बाद या on demand refresh होते हैं, इसलिए हर content change पर पूरा rebuild नहीं करना पड़ता।</li>
<li><b>SSR:</b> हर request पर HTML, personalised या हमेशा-fresh data के लिए, हर request पर server के काम की क़ीमत पर।</li>
<li><b>CSR:</b> server एक shell भेजता है और JavaScript data fetch करता है; login के पीछे जहाँ SEO मायने नहीं रखता वहाँ ठीक है, पर पहला meaningful paint देर से आता है।</li>
<li>App Router में तुम शायद ही कोई एक global mode चुनते हो: static हिस्से, cached हिस्से और request-time हिस्से एक ही page पर <code>&lt;Suspense&gt;</code> के साथ रह सकते हैं। Exact APIs और defaults Next.js 14, 15 और 16 में बदले हैं, इसलिए अपने version के docs से confirm करो।</li>
<li>Follow-up: "Product page जिसकी price हर कुछ मिनट में बदलती है?" पूरी तरह dynamic rendering की जगह छोटी lifetime के साथ cache करो (ISR का idea) या price वाला हिस्सा stream करो।</li>
</ul>`,
        hg: `<ul>
<li><b>SSG:</b> serve karne mein sabse tez (CDN par ek file), par content utna hi purana jitna aakhri build. Docs aur marketing pages ke liye achha.</li>
<li><b>ISR:</b> SSG jaisa, par pages samay ke baad ya on demand refresh hote hain, isliye har content change par poora rebuild nahi karna padta.</li>
<li><b>SSR:</b> har request par HTML, personalised ya hamesha-fresh data ke liye, har request par server ke kaam ki keemat par.</li>
<li><b>CSR:</b> server ek shell bhejta hai aur JavaScript data fetch karta hai; login ke peeche jahan SEO maayne nahi rakhta wahan theek hai, par pehla meaningful paint der se aata hai.</li>
<li>App Router mein tum shaayad hi koi ek global mode chunte ho: static hisse, cached hisse aur request-time hisse ek hi page par <code>&lt;Suspense&gt;</code> ke saath reh sakte hain. Exact APIs aur defaults Next.js 14, 15 aur 16 mein badle hain, isliye apne version ke docs se confirm karo.</li>
<li>Follow-up: "Product page jiski price har kuch minute mein badalti hai?" Poori tarah dynamic rendering ki jagah chhoti lifetime ke saath cache karo (ISR ka idea) ya price wala hissa stream karo.</li>
</ul>`
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
        en: `<ul>
<li><b>Next.js:</b> server rendering and streaming for public pages, built-in routing and Route Handlers. Costs: a Node.js server (or a hosting platform) next to ASP.NET Core, a fast-moving framework (caching behaviour changed across major versions), and two languages in the team.</li>
<li><b>Vite + React SPA:</b> static files you can host on a CDN or from the ASP.NET Core <code>wwwroot</code>; simple and cheap to run. Weaker for SEO and first paint, which rarely matters behind a login.</li>
<li><b>Blazor:</b> C# end to end, shared models and validation with the API. Trade-offs: a smaller front-end ecosystem and hiring pool, and the hosting model matters (Blazor Server keeps a live connection per user; WebAssembly downloads a runtime to the browser). Check the current options for your .NET version.</li>
<li>Decision inputs to name: public vs internal, SEO, team's JavaScript depth, hiring, hosting and operations (who runs Node), how many front ends the company already has.</li>
<li>Follow-up: "What if the team knows only C#?" Start with the option that keeps delivery risk low and invest in training before adopting a second stack.</li>
</ul>`,
        hi: `<ul>
<li><b>Next.js:</b> public pages के लिए server rendering और streaming, built-in routing और Route Handlers। क़ीमत: ASP.NET Core के बग़ल में Node.js server (या hosting platform), तेज़ी से बदलता framework (caching behaviour major versions में बदला है), और team में दो languages।</li>
<li><b>Vite + React SPA:</b> static files जिन्हें CDN पर या ASP.NET Core के <code>wwwroot</code> से host कर सकते हो; चलाना सरल और सस्ता। SEO और first paint में कमज़ोर, जो login के पीछे कम ही मायने रखता है।</li>
<li><b>Blazor:</b> शुरू से आख़िर तक C#, API के साथ shared models और validation। Trade-offs: छोटा front-end ecosystem और hiring pool, और hosting model मायने रखता है (Blazor Server हर user के लिए live connection रखता है; WebAssembly browser में runtime download करता है)। अपने .NET version के current options देखो।</li>
<li>Decision inputs जो बोलने हैं: public vs internal, SEO, team की JavaScript depth, hiring, hosting और operations (Node कौन चलाएगा), company में पहले से कितने front ends हैं।</li>
<li>Follow-up: "अगर team सिर्फ़ C# जानती है?" वह option शुरू करो जिसमें delivery risk कम हो और दूसरा stack अपनाने से पहले training में invest करो।</li>
</ul>`,
        hg: `<ul>
<li><b>Next.js:</b> public pages ke liye server rendering aur streaming, built-in routing aur Route Handlers. Keemat: ASP.NET Core ke bagal mein Node.js server (ya hosting platform), tezi se badalta framework (caching behaviour major versions mein badla hai), aur team mein do languages.</li>
<li><b>Vite + React SPA:</b> static files jinhe CDN par ya ASP.NET Core ke <code>wwwroot</code> se host kar sakte ho; chalana saral aur sasta. SEO aur first paint mein kamzor, jo login ke peeche kam hi maayne rakhta hai.</li>
<li><b>Blazor:</b> shuru se aakhir tak C#, API ke saath shared models aur validation. Trade-offs: chhota front-end ecosystem aur hiring pool, aur hosting model maayne rakhta hai (Blazor Server har user ke liye live connection rakhta hai; WebAssembly browser mein runtime download karta hai). Apne .NET version ke current options dekho.</li>
<li>Decision inputs jo bolne hain: public vs internal, SEO, team ki JavaScript depth, hiring, hosting aur operations (Node kaun chalayega), company mein pehle se kitne front ends hain.</li>
<li>Follow-up: "Agar team sirf C# jaanti hai?" woh option shuru karo jisme delivery risk kam ho aur doosra stack apnaane se pehle training mein invest karo.</li>
</ul>`
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
        en: `<ul>
<li>On each render, components return a tree of plain objects. React diffs it against the previous tree and updates only the DOM nodes that differ.</li>
<li>The diff uses two heuristics: elements of a different type are replaced, and <b>keys</b> identify children in lists. That is why unstable keys hurt.</li>
<li>The benefit is a simple mental model (UI = function of state) with reasonable performance, not a guarantee of speed. Re-rendering a huge tree on every keystroke can still be slow.</li>
<li>Follow-up: "Does a re-render mean the DOM changed?" No. React renders (calls your function) first, and touches the DOM only for differences.</li>
</ul>`,
        hi: `<ul>
<li>हर render पर components plain objects का tree return करते हैं। React उसे पिछले tree से diff करता है और सिर्फ़ वे DOM nodes update करता है जो अलग हैं।</li>
<li>Diff दो heuristics use करता है: अलग type के elements replace होते हैं, और lists में children की पहचान <b>keys</b> से होती है। इसीलिए unstable keys नुकसान करती हैं।</li>
<li>फ़ायदा है सरल mental model (UI = state का function) और ठीक-ठाक performance, speed की guarantee नहीं। हर keystroke पर बहुत बड़े tree को re-render करना फिर भी धीमा हो सकता है।</li>
<li>Follow-up: "क्या re-render का मतलब DOM बदला?" नहीं। React पहले render करता है (तुम्हारा function call करता है), और DOM को सिर्फ़ differences के लिए छूता है।</li>
</ul>`,
        hg: `<ul>
<li>Har render par components plain objects ka tree return karte hain. React use pichle tree se diff karta hai aur sirf woh DOM nodes update karta hai jo alag hain.</li>
<li>Diff do heuristics use karta hai: alag type ke elements replace hote hain, aur lists mein children ki pehchaan <b>keys</b> se hoti hai. Isiliye unstable keys nuksaan karti hain.</li>
<li>Faayda hai saral mental model (UI = state ka function) aur theek-thaak performance, speed ki guarantee nahi. Har keystroke par bahut bade tree ko re-render karna phir bhi dheema ho sakta hai.</li>
<li>Follow-up: "Kya re-render ka matlab DOM badla?" Nahi. React pehle render karta hai (tumhara function call karta hai), aur DOM ko sirf differences ke liye chhoota hai.</li>
</ul>`
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
        en: `<ul>
<li>A tag becomes a call that returns a description object; the first snippet in the components section models this in plain JavaScript.</li>
<li>JSX differences from HTML: <code>className</code>, <code>htmlFor</code>, camelCase event names such as <code>onClick</code>, and every tag must be closed. An expression goes in <code>{}</code>; statements such as <code>if</code> do not.</li>
<li>JSX escapes text by default, which helps against XSS; <code>dangerouslySetInnerHTML</code> is the deliberate escape hatch and needs trusted or sanitised input.</li>
<li>A component returns one root, or a fragment <code>&lt;&gt;...&lt;/&gt;</code>.</li>
<li>Follow-up: "Is JSX required?" No, you can call the element function directly, but almost nobody does.</li>
</ul>`,
        hi: `<ul>
<li>Tag एक call बन जाता है जो description object return करती है; components section का पहला snippet इसे plain JavaScript में model करता है।</li>
<li>HTML से JSX के फ़र्क: <code>className</code>, <code>htmlFor</code>, <code>onClick</code> जैसे camelCase event names, और हर tag बंद होना चाहिए। Expression <code>{}</code> में जाता है; <code>if</code> जैसे statements नहीं।</li>
<li>JSX text को default में escape करता है, जो XSS से बचाने में मदद करता है; <code>dangerouslySetInnerHTML</code> जानबूझकर वाला escape hatch है और trusted या sanitised input माँगता है।</li>
<li>Component एक root return करता है, या fragment <code>&lt;&gt;...&lt;/&gt;</code>।</li>
<li>Follow-up: "क्या JSX ज़रूरी है?" नहीं, element function सीधे call कर सकते हो, पर लगभग कोई नहीं करता।</li>
</ul>`,
        hg: `<ul>
<li>Tag ek call ban jaata hai jo description object return karti hai; components section ka pehla snippet ise plain JavaScript mein model karta hai.</li>
<li>HTML se JSX ke fark: <code>className</code>, <code>htmlFor</code>, <code>onClick</code> jaise camelCase event names, aur har tag band hona chahiye. Expression <code>{}</code> mein jaata hai; <code>if</code> jaise statements nahi.</li>
<li>JSX text ko default mein escape karta hai, jo XSS se bachane mein madad karta hai; <code>dangerouslySetInnerHTML</code> jaanbujhkar wala escape hatch hai aur trusted ya sanitised input maangta hai.</li>
<li>Component ek root return karta hai, ya fragment <code>&lt;&gt;...&lt;/&gt;</code>.</li>
<li>Follow-up: "Kya JSX zaroori hai?" Nahi, element function seedhe call kar sakte ho, par lagbhag koi nahi karta.</li>
</ul>`
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
        en: `<ul>
<li>It keeps one source of truth and avoids two copies drifting apart. Puzzle 6 models a parent with two siblings.</li>
<li>Do not lift higher than needed: every state change re-renders the owner and, by default, its children.</li>
<li>If the value is needed by many distant components (theme, current user), React context avoids prop drilling. In Next.js, context providers must be Client Components.</li>
<li>For server data shared across screens, a data library cache (TanStack Query) is often a better home than component state.</li>
<li>Follow-up: "Context or Redux?" Start with props and context; adopt a state library when you have complex shared client state that benefits from its tooling.</li>
</ul>`,
        hi: `<ul>
<li>इससे एक ही source of truth रहता है और दो copies के अलग होने से बचाव होता है। Puzzle 6 एक parent और दो siblings को model करता है।</li>
<li>ज़रूरत से ऊपर lift मत करो: हर state change owner को और, default में, उसके children को re-render करता है।</li>
<li>अगर value कई दूर-दूर के components को चाहिए (theme, current user) तो React context prop drilling से बचाता है। Next.js में context providers Client Components होने चाहिए।</li>
<li>Screens के बीच share होने वाले server data के लिए data library का cache (TanStack Query) अक्सर component state से बेहतर घर है।</li>
<li>Follow-up: "Context या Redux?" props और context से शुरू करो; जब complex shared client state हो जिसे library के tooling से फ़ायदा हो तब state library लाओ।</li>
</ul>`,
        hg: `<ul>
<li>Isse ek hi source of truth rehta hai aur do copies ke alag hone se bachaav hota hai. Puzzle 6 ek parent aur do siblings ko model karta hai.</li>
<li>Zaroorat se upar lift mat karo: har state change owner ko aur, default mein, uske children ko re-render karta hai.</li>
<li>Agar value kai door-door ke components ko chahiye (theme, current user) to React context prop drilling se bachata hai. Next.js mein context providers Client Components hone chahiye.</li>
<li>Screens ke beech share hone wale server data ke liye data library ka cache (TanStack Query) aksar component state se behtar ghar hai.</li>
<li>Follow-up: "Context ya Redux?" props aur context se shuru karo; jab complex shared client state ho jise library ke tooling se faayda ho tab state library lao.</li>
</ul>`
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
        en: `<ul>
<li>The extra cycle simulates a user leaving and returning to the screen. A correct effect (with cleanup) behaves the same either way; a leaking one shows duplicate subscriptions or requests.</li>
<li>Typical fixes: abort the fetch in cleanup, remove event listeners, clear timers, disconnect sockets. Puzzle 7 models the leak.</li>
<li>For a one-time action such as sending analytics on page view, an effect is still the place (no cleanup needed); a duplicate log in development is acceptable. Do not use a "ran once" ref flag to hide the double run.</li>
<li>Follow-up: "A POST in an effect fired twice in dev?" A POST belongs in an event handler (user action), not in an effect.</li>
</ul>`,
        hi: `<ul>
<li>Extra cycle एक user के screen छोड़कर वापस आने को simulate करता है। सही effect (cleanup के साथ) दोनों तरह एक जैसा चलता है; leak करने वाला duplicate subscriptions या requests दिखाता है।</li>
<li>Typical fixes: cleanup में fetch abort करो, event listeners हटाओ, timers clear करो, sockets disconnect करो। Puzzle 7 leak को model करता है।</li>
<li>Page view पर analytics भेजने जैसे one-time action के लिए effect अब भी सही जगह है (cleanup की ज़रूरत नहीं); development में duplicate log चलेगा। Double run छुपाने के लिए "ran once" वाला ref flag मत लगाओ।</li>
<li>Follow-up: "Effect में POST dev में दो बार चला?" POST event handler (user action) में होना चाहिए, effect में नहीं।</li>
</ul>`,
        hg: `<ul>
<li>Extra cycle ek user ke screen chhodkar wapas aane ko simulate karta hai. Sahi effect (cleanup ke saath) dono tarah ek jaisa chalta hai; leak karne wala duplicate subscriptions ya requests dikhata hai.</li>
<li>Typical fixes: cleanup mein fetch abort karo, event listeners hatao, timers clear karo, sockets disconnect karo. Puzzle 7 leak ko model karta hai.</li>
<li>Page view par analytics bhejne jaise one-time action ke liye effect ab bhi sahi jagah hai (cleanup ki zaroorat nahi); development mein duplicate log chalega. Double run chhupane ke liye "ran once" wala ref flag mat lagao.</li>
<li>Follow-up: "Effect mein POST dev mein do baar chala?" POST event handler (user action) mein hona chahiye, effect mein nahi.</li>
</ul>`
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
        en: `<ul>
<li>Pattern to avoid: <code>useEffect(() =&gt; setFullName(first + " " + last), [first, last])</code>. It renders with the old value, then again with the new one. Write <code>const fullName = first + " " + last</code>.</li>
<li>Resetting state when a prop changes: give the component a <code>key</code> instead of an effect.</li>
<li>Sending a form: do it in <code>onSubmit</code>. The user's action caused it, not a state change.</li>
<li>Data fetching in an effect works but needs cleanup, races handling and caching by hand; a data library or a Server Component is usually better.</li>
<li>Follow-up: "How would you review this in a pull request?" Ask "what outside system is this synchronising with?" If the answer is "none", it probably is not an effect.</li>
</ul>`,
        hi: `<ul>
<li>बचने वाला pattern: <code>useEffect(() =&gt; setFullName(first + " " + last), [first, last])</code>। यह पुरानी value से render करता है, फिर नई से दोबारा। लिखो <code>const fullName = first + " " + last</code>।</li>
<li>Prop बदलने पर state reset करना: effect की जगह component को <code>key</code> दो।</li>
<li>Form भेजना: <code>onSubmit</code> में करो। इसकी वजह user की action है, state change नहीं।</li>
<li>Effect में data fetching चलती है, पर cleanup, races handling और caching हाथ से करनी पड़ती है; data library या Server Component आम तौर पर बेहतर है।</li>
<li>Follow-up: "Pull request में इसे कैसे review करोगे?" पूछो "यह बाहर के किस system से sync हो रहा है?" जवाब "कोई नहीं" हो तो शायद यह effect नहीं है।</li>
</ul>`,
        hg: `<ul>
<li>Bachne wala pattern: <code>useEffect(() =&gt; setFullName(first + " " + last), [first, last])</code>. Yeh purani value se render karta hai, phir nayi se dobara. Likho <code>const fullName = first + " " + last</code>.</li>
<li>Prop badalne par state reset karna: effect ki jagah component ko <code>key</code> do.</li>
<li>Form bhejna: <code>onSubmit</code> mein karo. Iski wajah user ki action hai, state change nahi.</li>
<li>Effect mein data fetching chalti hai, par cleanup, races handling aur caching haath se karni padti hai; data library ya Server Component aam taur par behtar hai.</li>
<li>Follow-up: "Pull request mein ise kaise review karoge?" poocho "yeh bahar ke kis system se sync ho raha hai?" Jawab "koi nahi" ho to shaayad yeh effect nahi hai.</li>
</ul>`
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
        en: `<ul>
<li><code>useMemo(() =&gt; compute(a), [a])</code> remembers the result until <code>a</code> changes. <code>useCallback(fn, deps)</code> remembers the function itself.</li>
<li><code>useCallback</code> helps only when the function goes to a child wrapped in <code>React.memo</code> or into another hook's dependency list. Otherwise it adds code and no benefit.</li>
<li>React may discard cached values, so the code must stay correct without them. Measure with the React DevTools Profiler first.</li>
<li>Newer React tooling (the React Compiler) can add memoisation automatically; whether your project uses it is a team and version decision.</li>
<li>Follow-up: "Is it wrong to wrap everything in useCallback?" It is noise: harder to read and the comparisons themselves cost something.</li>
</ul>`,
        hi: `<ul>
<li><code>useMemo(() =&gt; compute(a), [a])</code> result को तब तक याद रखता है जब तक <code>a</code> बदलता नहीं। <code>useCallback(fn, deps)</code> function को ही याद रखता है।</li>
<li><code>useCallback</code> तभी मदद करता है जब function <code>React.memo</code> में लिपटे child को या किसी दूसरे hook की dependency list में जाए। वरना code बढ़ता है, फ़ायदा नहीं।</li>
<li>React cached values फेंक सकता है, इसलिए code उनके बिना भी सही रहना चाहिए। पहले React DevTools Profiler से measure करो।</li>
<li>नया React tooling (React Compiler) memoisation अपने-आप जोड़ सकता है; तुम्हारा project उसे use करता है या नहीं, यह team और version का decision है।</li>
<li>Follow-up: "क्या सब कुछ useCallback में लपेटना ग़लत है?" यह noise है: पढ़ना मुश्किल और comparisons की भी अपनी cost है।</li>
</ul>`,
        hg: `<ul>
<li><code>useMemo(() =&gt; compute(a), [a])</code> result ko tab tak yaad rakhta hai jab tak <code>a</code> badalta nahi. <code>useCallback(fn, deps)</code> function ko hi yaad rakhta hai.</li>
<li><code>useCallback</code> tabhi madad karta hai jab function <code>React.memo</code> mein lipte child ko ya kisi doosre hook ki dependency list mein jaaye. Warna code badhta hai, faayda nahi.</li>
<li>React cached values phenk sakta hai, isliye code unke bina bhi sahi rehna chahiye. Pehle React DevTools Profiler se measure karo.</li>
<li>Naya React tooling (React Compiler) memoisation apne-aap jod sakta hai; tumhara project use use karta hai ya nahi, yeh team aur version ka decision hai.</li>
<li>Follow-up: "Kya sab kuch useCallback mein lapetna galat hai?" Yeh noise hai: padhna mushkil aur comparisons ki bhi apni cost hai.</li>
</ul>`
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
        en: `<ul>
<li>Common uses: focus an input, hold a timer id, keep the previous value, store an <code>AbortController</code>.</li>
<li>Do not read or write <code>ref.current</code> during render for values that affect output; React cannot see the change. Write it in event handlers or effects.</li>
<li>Rule of thumb: if the screen must change when it changes, use state; if only your code needs to remember it, use a ref.</li>
<li>Follow-up: "Is a ref the same as a module-level variable?" No. A ref is per component instance and survives re-renders, while a module variable is shared by every instance.</li>
</ul>`,
        hi: `<ul>
<li>आम use: input को focus करना, timer id रखना, पिछली value रखना, <code>AbortController</code> store करना।</li>
<li>जो values output पर असर डालती हैं उनके लिए render के दौरान <code>ref.current</code> पढ़ो या लिखो मत; React को बदलाव दिखता नहीं। इसे event handlers या effects में लिखो।</li>
<li>Rule of thumb: जिसके बदलने पर screen बदलनी चाहिए उसके लिए state, जिसे सिर्फ़ तुम्हारा code याद रखे उसके लिए ref।</li>
<li>Follow-up: "क्या ref और module-level variable एक ही चीज़ है?" नहीं। Ref हर component instance का अपना है और re-renders में बचा रहता है, जबकि module variable हर instance में share होता है।</li>
</ul>`,
        hg: `<ul>
<li>Aam use: input ko focus karna, timer id rakhna, pichli value rakhna, <code>AbortController</code> store karna.</li>
<li>Jo values output par asar daalti hain unke liye render ke dauran <code>ref.current</code> padho ya likho mat; React ko badlaav dikhta nahi. Ise event handlers ya effects mein likho.</li>
<li>Rule of thumb: jiske badalne par screen badalni chahiye uske liye state, jise sirf tumhara code yaad rakhe uske liye ref.</li>
<li>Follow-up: "Kya ref aur module-level variable ek hi cheez hai?" Nahi. Ref har component instance ka apna hai aur re-renders mein bacha rehta hai, jabki module variable har instance mein share hota hai.</li>
</ul>`
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
        en: `<ul>
<li>Example: <code>useOnlineStatus()</code> or <code>useDebouncedValue(value, ms)</code> wraps state plus effect plus cleanup behind a simple call.</li>
<li>The <code>use</code> prefix lets lint rules enforce the rules of hooks: call hooks at the top level of a component or another hook, not inside loops, conditions or nested functions.</li>
<li>Analogy for a .NET dev: a custom hook is like an extension method or a helper service, but each caller gets its own instance state, like a transient service.</li>
<li>To share data between components, lift state or use context or a data library.</li>
<li>Follow-up: "How do you test a custom hook?" With a test renderer helper from your testing library, or by testing a component that uses it (Day 25 covers testing).</li>
</ul>`,
        hi: `<ul>
<li>Example: <code>useOnlineStatus()</code> या <code>useDebouncedValue(value, ms)</code> state, effect और cleanup को एक simple call के पीछे रखता है।</li>
<li><code>use</code> prefix से lint rules hooks के rules enforce कर पाते हैं: hooks को component या दूसरे hook के top level पर call करो, loops, conditions या nested functions के अंदर नहीं।</li>
<li>.NET dev के लिए analogy: custom hook extension method या helper service जैसा है, पर हर caller को अपना instance state मिलता है, transient service जैसा।</li>
<li>Components के बीच data share करने के लिए state lift करो या context या data library use करो।</li>
<li>Follow-up: "Custom hook को test कैसे करोगे?" अपनी testing library के test renderer helper से, या उसे use करने वाले component को test करके (Day 25 testing cover करता है)।</li>
</ul>`,
        hg: `<ul>
<li>Example: <code>useOnlineStatus()</code> ya <code>useDebouncedValue(value, ms)</code> state, effect aur cleanup ko ek simple call ke peeche rakhta hai.</li>
<li><code>use</code> prefix se lint rules hooks ke rules enforce kar paate hain: hooks ko component ya doosre hook ke top level par call karo, loops, conditions ya nested functions ke andar nahi.</li>
<li>.NET dev ke liye analogy: custom hook extension method ya helper service jaisa hai, par har caller ko apna instance state milta hai, transient service jaisa.</li>
<li>Components ke beech data share karne ke liye state lift karo ya context ya data library use karo.</li>
<li>Follow-up: "Custom hook ko test kaise karoge?" apni testing library ke test renderer helper se, ya use use karne wale component ko test karke (Day 25 testing cover karta hai).</li>
</ul>`
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
        en: `<ul>
<li>Controlled: <code>&lt;input value={name} onChange={e =&gt; setName(e.target.value)} /&gt;</code>. Easy live validation, disabling the submit button, formatting while typing.</li>
<li>If you set <code>value</code> without <code>onChange</code>, the field becomes read-only and React warns.</li>
<li>Uncontrolled: use <code>defaultValue</code> and read the value on submit with <code>FormData</code> or a ref; less code, fewer re-renders for big forms.</li>
<li>Server-side validation still decides: the ASP.NET Core API must validate again (Day 13); client checks are for user experience.</li>
<li>Follow-up: "How do form libraries relate?" Libraries such as React Hook Form mostly use uncontrolled inputs underneath to reduce re-renders; choosing one is a team decision.</li>
</ul>`,
        hi: `<ul>
<li>Controlled: <code>&lt;input value={name} onChange={e =&gt; setName(e.target.value)} /&gt;</code>। Live validation, submit button disable करना, typing के दौरान formatting आसान।</li>
<li><code>onChange</code> के बिना <code>value</code> set करोगे तो field read-only हो जाता है और React warn करता है।</li>
<li>Uncontrolled: <code>defaultValue</code> use करो और submit पर <code>FormData</code> या ref से value पढ़ो; कम code, बड़े forms में कम re-renders।</li>
<li>Server-side validation अब भी फ़ैसला करती है: ASP.NET Core API को फिर से validate करना होगा (Day 13); client checks user experience के लिए हैं।</li>
<li>Follow-up: "Form libraries का इससे क्या लेना-देना?" React Hook Form जैसी libraries re-renders घटाने के लिए नीचे ज़्यादातर uncontrolled inputs use करती हैं; कौन-सी लेनी है यह team decision है।</li>
</ul>`,
        hg: `<ul>
<li>Controlled: <code>&lt;input value={name} onChange={e =&gt; setName(e.target.value)} /&gt;</code>. Live validation, submit button disable karna, typing ke dauran formatting aasaan.</li>
<li><code>onChange</code> ke bina <code>value</code> set karoge to field read-only ho jaata hai aur React warn karta hai.</li>
<li>Uncontrolled: <code>defaultValue</code> use karo aur submit par <code>FormData</code> ya ref se value padho; kam code, bade forms mein kam re-renders.</li>
<li>Server-side validation ab bhi faisla karti hai: ASP.NET Core API ko phir se validate karna hoga (Day 13); client checks user experience ke liye hain.</li>
<li>Follow-up: "Form libraries ka isse kya lena-dena?" React Hook Form jaisi libraries re-renders ghatane ke liye neeche zyaadatar uncontrolled inputs use karti hain; kaun-si leni hai yeh team decision hai.</li>
</ul>`
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
        en: `<ul>
<li>Origin = scheme + host + port, so <code>localhost:5173</code> and <code>localhost:5001</code> are different origins. The browser sends the request (or a <b>preflight</b> <code>OPTIONS</code> request first for non-simple calls) and refuses to expose the response unless the server's CORS headers allow it.</li>
<li>Fix on the server: <code>AddCors</code> with a named policy (see the C# snippet), <code>UseCors</code> in the pipeline (Day 13 covers CORS in depth). Add <code>AllowCredentials</code> only with explicit origins when you use cookies.</li>
<li>Alternative in development: a dev-server proxy so the browser calls the same origin. In production a reverse proxy or gateway (Day 16) can serve both under one origin, removing CORS.</li>
<li>CORS protects the user's browser; it is not an authentication or server-side security control. curl and Postman ignore it, so do not rely on it to protect the API.</li>
<li>Follow-up: "The request works in Postman but not the browser?" That points to CORS, not to the API logic.</li>
</ul>`,
        hi: `<ul>
<li>Origin = scheme + host + port, इसलिए <code>localhost:5173</code> और <code>localhost:5001</code> अलग origins हैं। Browser request भेजता है (या non-simple calls के लिए पहले <b>preflight</b> <code>OPTIONS</code> request) और server के CORS headers allow न करें तो response expose करने से मना कर देता है।</li>
<li>Server पर fix: named policy के साथ <code>AddCors</code> (C# snippet देखो), pipeline में <code>UseCors</code> (Day 13 CORS को गहराई से cover करता है)। Cookies use करो तो <code>AllowCredentials</code> सिर्फ़ explicit origins के साथ लगाओ।</li>
<li>Development में alternative: dev-server proxy ताकि browser same origin को call करे। Production में reverse proxy या gateway (Day 16) दोनों को एक origin के नीचे serve करके CORS हटा सकता है।</li>
<li>CORS user के browser की हिफ़ाज़त करता है; यह authentication या server-side security control नहीं है। curl और Postman इसे ignore करते हैं, इसलिए API की security के लिए इस पर भरोसा मत करो।</li>
<li>Follow-up: "Request Postman में चलती है पर browser में नहीं?" यह CORS की तरफ़ इशारा करता है, API logic की तरफ़ नहीं।</li>
</ul>`,
        hg: `<ul>
<li>Origin = scheme + host + port, isliye <code>localhost:5173</code> aur <code>localhost:5001</code> alag origins hain. Browser request bhejta hai (ya non-simple calls ke liye pehle <b>preflight</b> <code>OPTIONS</code> request) aur server ke CORS headers allow na karein to response expose karne se mana kar deta hai.</li>
<li>Server par fix: named policy ke saath <code>AddCors</code> (C# snippet dekho), pipeline mein <code>UseCors</code> (Day 13 CORS ko gehraai se cover karta hai). Cookies use karo to <code>AllowCredentials</code> sirf explicit origins ke saath lagao.</li>
<li>Development mein alternative: dev-server proxy taaki browser same origin ko call kare. Production mein reverse proxy ya gateway (Day 16) dono ko ek origin ke neeche serve karke CORS hata sakta hai.</li>
<li>CORS user ke browser ki hifaazat karta hai; yeh authentication ya server-side security control nahi hai. curl aur Postman ise ignore karte hain, isliye API ki security ke liye is par bharosa mat karo.</li>
<li>Follow-up: "Request Postman mein chalti hai par browser mein nahi?" yeh CORS ki taraf ishaara karta hai, API logic ki taraf nahi.</li>
</ul>`
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
        en: `<ul>
<li><code>localStorage</code>/<code>sessionStorage</code>: simple, but readable by any script running on the page (your code, a compromised npm package, an XSS bug). Short-lived tokens limit the damage but do not remove the risk.</li>
<li><b>HttpOnly cookie:</b> JavaScript cannot read it. Use <code>Secure</code>, a suitable <code>SameSite</code> value, and CSRF defences for state-changing requests. Cookies are sent automatically, which is the CSRF risk.</li>
<li><b>BFF pattern (Day 16):</b> a small server next to the front end performs the login flow, keeps the tokens server-side and gives the browser only a session cookie. Next.js Route Handlers or ASP.NET Core can play this role.</li>
<li>Either way: sanitise output, set a Content-Security-Policy, keep dependencies updated. Security is a layered topic; Day 26 goes deeper.</li>
<li>Follow-up: "Is a cookie always safer?" It trades XSS exposure for CSRF concerns; the right answer is a layered one, not a slogan.</li>
</ul>`,
        hi: `<ul>
<li><code>localStorage</code>/<code>sessionStorage</code>: सरल, पर page पर चलने वाला कोई भी script इन्हें पढ़ सकता है (तुम्हारा code, कोई compromised npm package, XSS bug)। छोटी उम्र वाले tokens नुकसान सीमित करते हैं पर risk ख़त्म नहीं करते।</li>
<li><b>HttpOnly cookie:</b> JavaScript इसे पढ़ नहीं सकता। <code>Secure</code>, सही <code>SameSite</code> value, और state बदलने वाले requests के लिए CSRF defences लगाओ। Cookies अपने-आप भेजी जाती हैं, यही CSRF का risk है।</li>
<li><b>BFF pattern (Day 16):</b> front end के बग़ल का छोटा server login flow करता है, tokens server-side रखता है और browser को सिर्फ़ session cookie देता है। यह role Next.js Route Handlers या ASP.NET Core निभा सकते हैं।</li>
<li>दोनों तरह: output sanitise करो, Content-Security-Policy लगाओ, dependencies updated रखो। Security layered topic है; Day 26 और गहराई में जाता है।</li>
<li>Follow-up: "क्या cookie हमेशा ज़्यादा safe है?" यह XSS exposure को CSRF concerns से बदलती है; सही जवाब layered है, slogan नहीं।</li>
</ul>`,
        hg: `<ul>
<li><code>localStorage</code>/<code>sessionStorage</code>: saral, par page par chalne wala koi bhi script inhe padh sakta hai (tumhara code, koi compromised npm package, XSS bug). Chhoti umar wale tokens nuksaan seemit karte hain par risk khatam nahi karte.</li>
<li><b>HttpOnly cookie:</b> JavaScript ise padh nahi sakta. <code>Secure</code>, sahi <code>SameSite</code> value, aur state badalne wale requests ke liye CSRF defences lagao. Cookies apne-aap bheji jaati hain, yahi CSRF ka risk hai.</li>
<li><b>BFF pattern (Day 16):</b> front end ke bagal ka chhota server login flow karta hai, tokens server-side rakhta hai aur browser ko sirf session cookie deta hai. Yeh role Next.js Route Handlers ya ASP.NET Core nibha sakte hain.</li>
<li>Dono tarah: output sanitise karo, Content-Security-Policy lagao, dependencies updated rakho. Security layered topic hai; Day 26 aur gehraai mein jaata hai.</li>
<li>Follow-up: "Kya cookie hamesha zyaada safe hai?" yeh XSS exposure ko CSRF concerns se badalti hai; sahi jawab layered hai, slogan nahi.</li>
</ul>`
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
        en: `<ul>
<li>Example: <code>type Props = { order: Order; onSelect: (id: number) =&gt; void; children?: React.ReactNode }</code>.</li>
<li>Generate API types from your OpenAPI document (ASP.NET Core can publish one) so the front-end and back-end contracts do not drift; this is a good TL-level practice.</li>
<li>TypeScript checks at build time only. Data arriving from the network is still untrusted at runtime; validate it at the boundary if the shape matters.</li>
<li>Prefer <code>unknown</code> over <code>any</code>; the compiler then forces a check. Turn on <code>strict</code> in <code>tsconfig</code>.</li>
<li>Follow-up: "type or interface?" Both work for props; pick one and let ESLint enforce it.</li>
</ul>`,
        hi: `<ul>
<li>Example: <code>type Props = { order: Order; onSelect: (id: number) =&gt; void; children?: React.ReactNode }</code>।</li>
<li>अपने OpenAPI document से API types generate करो (ASP.NET Core एक publish कर सकता है) ताकि front-end और back-end के contracts अलग न हों; यह TL-level की अच्छी practice है।</li>
<li>TypeScript सिर्फ़ build time पर check करता है। Network से आने वाला data runtime पर अब भी untrusted है; shape मायने रखती हो तो boundary पर validate करो।</li>
<li><code>any</code> की जगह <code>unknown</code> पसंद करो; तब compiler check करवाता है। <code>tsconfig</code> में <code>strict</code> चालू करो।</li>
<li>Follow-up: "type या interface?" दोनों props के लिए चलते हैं; एक चुनो और ESLint से enforce करवाओ।</li>
</ul>`,
        hg: `<ul>
<li>Example: <code>type Props = { order: Order; onSelect: (id: number) =&gt; void; children?: React.ReactNode }</code>.</li>
<li>Apne OpenAPI document se API types generate karo (ASP.NET Core ek publish kar sakta hai) taaki front-end aur back-end ke contracts alag na hon; yeh TL-level ki achhi practice hai.</li>
<li>TypeScript sirf build time par check karta hai. Network se aane wala data runtime par ab bhi untrusted hai; shape maayne rakhti ho to boundary par validate karo.</li>
<li><code>any</code> ki jagah <code>unknown</code> pasand karo; tab compiler check karwata hai. <code>tsconfig</code> mein <code>strict</code> chalu karo.</li>
<li>Follow-up: "type ya interface?" dono props ke liye chalte hain; ek chuno aur ESLint se enforce karwao.</li>
</ul>`
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
        en: `<ul>
<li>A <code>route.ts</code> exports <code>GET</code>, <code>POST</code> and so on using the Web <code>Request</code>/<code>Response</code> types. It cannot live at the same segment as a <code>page</code> file.</li>
<li>Good fits: a BFF that reads an HttpOnly cookie and calls ASP.NET Core with a bearer token, a webhook receiver, a thin proxy that removes fields the browser should not see.</li>
<li>Poor fits: duplicating business logic that already lives in ASP.NET Core. That creates two backends to secure, test and deploy. A Server Component can call the API or database directly without an extra hop.</li>
<li>Caching defaults have changed between versions; in the current docs Route Handlers are not cached by default. Check your version.</li>
<li>Follow-up: "Why not call the API from the browser?" Valid when the API is designed for browsers (CORS, short-lived tokens); a BFF is chosen when you want tokens off the client.</li>
</ul>`,
        hi: `<ul>
<li><code>route.ts</code> Web <code>Request</code>/<code>Response</code> types के साथ <code>GET</code>, <code>POST</code> वग़ैरह export करती है। यह <code>page</code> file वाले same segment में नहीं रह सकती।</li>
<li>अच्छे fit: BFF जो HttpOnly cookie पढ़कर bearer token के साथ ASP.NET Core call करे, webhook receiver, पतला proxy जो वे fields हटा दे जो browser को नहीं दिखने चाहिए।</li>
<li>ख़राब fit: वह business logic दोहराना जो पहले से ASP.NET Core में है। इससे दो backends बन जाते हैं जिन्हें secure, test और deploy करना पड़ता है। Server Component बिना extra hop के API या database को सीधे call कर सकता है।</li>
<li>Caching defaults versions के बीच बदले हैं; मौजूदा docs में Route Handlers by default cache नहीं होते। अपना version देखो।</li>
<li>Follow-up: "Browser से API क्यों call नहीं करते?" जब API browsers के लिए design हो (CORS, छोटी उम्र के tokens) तब ठीक है; जब tokens को client से दूर रखना हो तब BFF चुना जाता है।</li>
</ul>`,
        hg: `<ul>
<li><code>route.ts</code> Web <code>Request</code>/<code>Response</code> types ke saath <code>GET</code>, <code>POST</code> waghairah export karti hai. Yeh <code>page</code> file wale same segment mein nahi reh sakti.</li>
<li>Achhe fit: BFF jo HttpOnly cookie padhkar bearer token ke saath ASP.NET Core call kare, webhook receiver, patla proxy jo woh fields hata de jo browser ko nahi dikhne chahiye.</li>
<li>Kharaab fit: woh business logic dohrana jo pehle se ASP.NET Core mein hai. Isse do backends ban jaate hain jinhe secure, test aur deploy karna padta hai. Server Component bina extra hop ke API ya database ko seedhe call kar sakta hai.</li>
<li>Caching defaults versions ke beech badle hain; maujooda docs mein Route Handlers by default cache nahi hote. Apna version dekho.</li>
<li>Follow-up: "Browser se API kyon call nahi karte?" jab API browsers ke liye design ho (CORS, chhoti umar ke tokens) tab theek hai; jab tokens ko client se door rakhna ho tab BFF chuna jaata hai.</li>
</ul>`
      }
    },
  ],
  puzzles: [
    {
      id: "snapshot-and-batching",
      lang: "javascript",
      src: `let state = 10;
let renders = 0;
const queue = [];
const setCount = (update) => queue.push(update);

function clickHandler(count) { // count is the snapshot of this render
  setCount(count + 5);
  setCount((c) => c * 2);
  setCount(count + 1);
  setCount((c) => c + 100);
  console.log("inside handler, count =", count);
}

function flushAndRender() {
  for (const update of queue) {
    state = typeof update === "function" ? update(state) : update;
  }
  queue.length = 0;
  renders++;
}

clickHandler(state);
console.log(queue.length + " updates queued, renders so far: " + renders);
flushAndRender();
console.log("new state: " + state + ", renders: " + renders);`,
      answer: `inside handler, count = 10
4 updates queued, renders so far: 0
new state: 111, renders: 1`,
      explain: {
        en: `<p>The handler sees the snapshot <code>count = 10</code> the whole time, and the setters only <b>queue</b> work, so nothing has rendered yet (0 renders). React then processes the queue once, in order, and renders once.</p>
<p>The queue is: replace with <code>15</code>, then <code>x * 2</code> gives <code>30</code>, then replace with <code>11</code> (the snapshot plus 1), then <code>+ 100</code> gives <code>111</code>. A plain value throws away everything before it; an updater builds on what came before.</p>`,
        hi: `<p>Handler पूरे समय snapshot <code>count = 10</code> देखता है, और setters सिर्फ़ काम <b>queue</b> करते हैं, इसलिए अभी तक कोई render नहीं हुआ (0 renders)। फिर React queue को एक बार, order में process करता है और एक बार render करता है।</p>
<p>Queue यह है: <code>15</code> से replace, फिर <code>x * 2</code> से <code>30</code>, फिर <code>11</code> से replace (snapshot plus 1), फिर <code>+ 100</code> से <code>111</code>। Plain value अपने पहले का सब कुछ फेंक देती है; updater पहले जो हुआ उस पर बनता है।</p>`,
        hg: `<p>Handler poore samay snapshot <code>count = 10</code> dekhta hai, aur setters sirf kaam <b>queue</b> karte hain, isliye abhi tak koi render nahi hua (0 renders). Phir React queue ko ek baar, order mein process karta hai aur ek baar render karta hai.</p>
<p>Queue yeh hai: <code>15</code> se replace, phir <code>x * 2</code> se <code>30</code>, phir <code>11</code> se replace (snapshot plus 1), phir <code>+ 100</code> se <code>111</code>. Plain value apne pehle ka sab kuch phenk deti hai; updater pehle jo hua us par banta hai.</p>`
      }
    },
    {
      id: "stale-closure-interval",
      lang: "javascript",
      src: `function simulate(strategy) {
  let state = 0;
  const setState = (u) => {
    state = typeof u === "function" ? u(state) : u;
  };
  let latest; // the closures from the most recent render

  function render() {
    const count = state; // this render's snapshot
    latest = {
      plain: () => setState(count + 1),
      updater: () => setState((c) => c + 1),
    };
    return latest;
  }

  const first = render(); // the effect with [] captures only this render
  const tick =
    strategy === "plain" ? first.plain :
    strategy === "updater" ? first.updater :
    () => latest.plain(); // effect re-subscribed on every [count] change

  for (let i = 0; i < 3; i++) {
    tick();
    render(); // React re-renders after each state change
  }
  return state;
}

console.log("[] deps, plain value:", simulate("plain"));
console.log("[] deps, updater:", simulate("updater"));
console.log("[count] deps, re-subscribed:", simulate("deps"));`,
      answer: `[] deps, plain value: 1
[] deps, updater: 3
[count] deps, re-subscribed: 3`,
      explain: {
        en: `<p>An effect with <code>[]</code> runs once and keeps the closure from the <b>first</b> render, where <code>count</code> is 0. Every tick runs <code>setState(0 + 1)</code>, so the counter sticks at 1: a stale closure, the same idea as the closures on Day 23 but inside a component.</p>
<p>Two fixes: use an updater (<code>c =&gt; c + 1</code>), which reads the latest state instead of a captured number, or list <code>count</code> as a dependency so the effect re-subscribes with the newest closure. For an interval, the updater is usually simpler and avoids resetting the timer on every tick.</p>`,
        hi: `<p><code>[]</code> वाला effect एक बार चलता है और <b>पहले</b> render का closure पकड़े रखता है, जहाँ <code>count</code> 0 है। हर tick <code>setState(0 + 1)</code> चलाता है, इसलिए counter 1 पर अटका रहता है: stale closure, Day 23 के closures जैसा ही idea पर component के अंदर।</p>
<p>दो fixes: updater (<code>c =&gt; c + 1</code>) use करो, जो captured number की जगह latest state पढ़ता है, या <code>count</code> को dependency बनाओ ताकि effect सबसे नए closure के साथ दोबारा subscribe हो। Interval के लिए updater आम तौर पर सरल है और हर tick पर timer reset नहीं होता।</p>`,
        hg: `<p><code>[]</code> wala effect ek baar chalta hai aur <b>pehle</b> render ka closure pakde rehta hai, jahan <code>count</code> 0 hai. Har tick <code>setState(0 + 1)</code> chalata hai, isliye counter 1 par atka rehta hai: stale closure, Day 23 ke closures jaisa hi idea par component ke andar.</p>
<p>Do fixes: updater (<code>c =&gt; c + 1</code>) use karo, jo captured number ki jagah latest state padhta hai, ya <code>count</code> ko dependency banao taaki effect sabse naye closure ke saath dobara subscribe ho. Interval ke liye updater aam taur par saral hai aur har tick par timer reset nahi hota.</p>`
      }
    },
    {
      id: "index-keys-reconciliation",
      lang: "javascript",
      src: `// React keeps a row's local state (like text typed in its input) with the instance it matched by key
function reconcile(prevRows, nextItems, keyOf) {
  return nextItems.map((item, index) => {
    const key = keyOf(item, index);
    const match = prevRows.find((r) => r.key === key);
    return { key, item, draft: match ? match.draft : "" };
  });
}

const items = [
  { id: 101, name: "Asha" },
  { id: 102, name: "Ravi" },
  { id: 103, name: "Meena" },
];

function run(label, keyOf) {
  let rows = reconcile([], items, keyOf);
  rows[0].draft = "call back at 5"; // the user types a note in Asha's row
  rows = reconcile(rows, items.slice(1), keyOf); // Asha is removed
  console.log(label + ": " + rows.map((r) => r.item.name + "=[" + r.draft + "]").join(", "));
}

run("index key", (item, i) => i);
run("id key", (item) => item.id);`,
      answer: `index key: Ravi=[call back at 5], Meena=[]
id key: Ravi=[], Meena=[]`,
      explain: {
        en: `<p>With index keys, after Asha is removed, Ravi becomes index 0, the same key Asha's row had, so React hands Ravi the row state that belonged to Asha: the note "call back at 5" now appears on the wrong person.</p>
<p>With the database id as the key, Ravi's key (102) never matched Asha's row (101), so the note disappears together with Asha's row, which is correct. Real React also reuses DOM nodes and component state by key in the same spirit; this is a simplified model of that matching, not React's real algorithm.</p>`,
        hi: `<p>Index keys के साथ Asha के हटने के बाद Ravi index 0 बन जाता है, वही key जो Asha की row की थी, इसलिए React Ravi को वह row state दे देता है जो Asha की थी: note "call back at 5" अब ग़लत इंसान पर दिखता है।</p>
<p>Database id को key बनाने पर Ravi की key (102) Asha की row (101) से कभी match नहीं हुई, इसलिए note Asha की row के साथ ग़ायब हो जाता है, जो सही है। असली React भी DOM nodes और component state को key से इसी तरह reuse करता है; यह उस matching का simplified model है, React का असली algorithm नहीं।</p>`,
        hg: `<p>Index keys ke saath Asha ke hatne ke baad Ravi index 0 ban jaata hai, wahi key jo Asha ki row ki thi, isliye React Ravi ko woh row state de deta hai jo Asha ki thi: note "call back at 5" ab galat insaan par dikhta hai.</p>
<p>Database id ko key banane par Ravi ki key (102) Asha ki row (101) se kabhi match nahi hui, isliye note Asha ki row ke saath gaayab ho jaata hai, jo sahi hai. Asli React bhi DOM nodes aur component state ko key se isi tarah reuse karta hai; yeh us matching ka simplified model hai, React ka asli algorithm nahi.</p>`
      }
    },
    {
      id: "effect-dependency-rerun",
      lang: "javascript",
      src: `function createHooks() {
  const prev = {};
  return function useEffectModel(name, deps, ran) {
    const old = prev[name];
    const changed =
      deps === undefined ||
      !old ||
      deps.length !== old.length ||
      deps.some((d, i) => !Object.is(d, old[i]));
    prev[name] = deps;
    if (changed) ran.push(name);
  };
}

const useEffectModel = createHooks();

function renderComponent(props) {
  const ran = [];
  const options = { sort: "asc" }; // a new object on every render
  useEffectModel("A[id]", [props.id], ran);
  useEffectModel("B[]", [], ran);
  useEffectModel("C[options]", [options], ran);
  useEffectModel("D[options.sort]", [options.sort], ran);
  useEffectModel("E(no array)", undefined, ran);
  return ran;
}

[{ id: 1 }, { id: 1 }, { id: 2 }].forEach((props, i) => {
  console.log("render " + (i + 1) + " (id=" + props.id + "): " + renderComponent(props).join(", "));
});`,
      answer: `render 1 (id=1): A[id], B[], C[options], D[options.sort], E(no array)
render 2 (id=1): C[options], E(no array)
render 3 (id=2): A[id], C[options], E(no array)`,
      explain: {
        en: `<p>On the first render every effect runs. After that: <b>A</b> re-runs only when <code>id</code> changes (render 3); <b>B</b> with <code>[]</code> never runs again; <b>E</b> without an array runs after every render.</p>
<p><b>C</b> depends on an object literal created during render. It is a new reference each time, so <code>Object.is</code> says "changed" and the effect re-runs on every render, probably not what you wanted. <b>D</b> depends on the primitive <code>options.sort</code>, which stays <code>"asc"</code>, so it runs once. Fix C by depending on primitives, moving the object inside the effect, or creating it outside the component.</p>`,
        hi: `<p>पहले render पर हर effect चलता है। उसके बाद: <b>A</b> सिर्फ़ तब दोबारा चलता है जब <code>id</code> बदले (render 3); <code>[]</code> वाला <b>B</b> फिर कभी नहीं चलता; array के बिना वाला <b>E</b> हर render के बाद चलता है।</p>
<p><b>C</b> render के दौरान बने object literal पर depend करता है। वह हर बार नया reference है, इसलिए <code>Object.is</code> "changed" कहता है और effect हर render पर दोबारा चलता है, जो शायद तुम्हें नहीं चाहिए था। <b>D</b> primitive <code>options.sort</code> पर depend करता है, जो <code>"asc"</code> ही रहता है, इसलिए वह एक बार चलता है। C को ठीक करने के लिए primitives पर depend करो, object को effect के अंदर ले जाओ, या component के बाहर बनाओ।</p>`,
        hg: `<p>Pehle render par har effect chalta hai. Uske baad: <b>A</b> sirf tab dobara chalta hai jab <code>id</code> badle (render 3); <code>[]</code> wala <b>B</b> phir kabhi nahi chalta; array ke bina wala <b>E</b> har render ke baad chalta hai.</p>
<p><b>C</b> render ke dauran bane object literal par depend karta hai. Woh har baar naya reference hai, isliye <code>Object.is</code> "changed" kehta hai aur effect har render par dobara chalta hai, jo shaayad tumhe nahi chahiye tha. <b>D</b> primitive <code>options.sort</code> par depend karta hai, jo <code>"asc"</code> hi rehta hai, isliye woh ek baar chalta hai. C ko theek karne ke liye primitives par depend karo, object ko effect ke andar le jao, ya component ke bahar banao.</p>`
      }
    },
    {
      id: "mutation-hides-update",
      lang: "javascript",
      src: `function createStore(initial) {
  let state = initial;
  let renders = 1;
  return {
    set(next) {
      if (Object.is(state, next)) return; // same reference: bail out, no re-render
      state = next;
      renders++;
    },
    get state() { return state; },
    get renders() { return renders; },
  };
}

const todos = createStore([{ id: 1, done: false }]);

const arr = todos.state;
arr.push({ id: 2, done: false }); // mutation
todos.set(arr);
console.log("after push + set:", todos.renders, todos.state.length);

todos.set([...todos.state, { id: 3, done: false }]);
console.log("after spread + set:", todos.renders, todos.state.length);

const first = todos.state[0];
first.done = true; // nested mutation
todos.set([...todos.state]); // new array, same objects
console.log("after nested mutation:", todos.renders, todos.state[0].done, todos.state[0] === first);

todos.set(todos.state.map((t) => (t.id === 1 ? { ...t, done: false } : t)));
console.log("after map copy:", todos.renders, todos.state[0].done, todos.state[0] === first);`,
      answer: `after push + set: 1 2
after spread + set: 2 3
after nested mutation: 3 true true
after map copy: 4 false false`,
      explain: {
        en: `<p>Line 1: <code>push</code> changed the data (length 2) but <code>set</code> received the <b>same array reference</b>, so <code>Object.is</code> is true and nothing re-rendered (still 1 render). The data and the screen are now out of sync.</p>
<p>Line 2: a spread copy is a new reference, so it renders. Line 3: the new array is fine, but the first todo object was mutated in place, so any memoised child that compares that object by reference would not notice the change. Line 4: copying the changed object with <code>{ ...t, done: false }</code> gives a new reference, so comparisons see it. Copy every level you change. (This is a model of React's comparison; real React has more machinery around it.)</p>`,
        hi: `<p>Line 1: <code>push</code> ने data बदला (length 2) पर <code>set</code> को <b>वही array reference</b> मिला, इसलिए <code>Object.is</code> true है और कुछ re-render नहीं हुआ (अब भी 1 render)। Data और screen अब sync में नहीं हैं।</p>
<p>Line 2: spread copy नया reference है, इसलिए render होता है। Line 3: नया array ठीक है, पर पहला todo object अपनी जगह पर mutate हुआ, इसलिए जो भी memoised child उस object को reference से compare करता है उसे बदलाव दिखेगा नहीं। Line 4: बदले हुए object को <code>{ ...t, done: false }</code> से copy करने पर नया reference मिलता है, इसलिए comparisons को दिखता है। जिस भी level को बदलो उसे copy करो। (यह React की comparison का model है; असली React में इसके आसपास और machinery है।)</p>`,
        hg: `<p>Line 1: <code>push</code> ne data badla (length 2) par <code>set</code> ko <b>wahi array reference</b> mila, isliye <code>Object.is</code> true hai aur kuch re-render nahi hua (ab bhi 1 render). Data aur screen ab sync mein nahi hain.</p>
<p>Line 2: spread copy naya reference hai, isliye render hota hai. Line 3: naya array theek hai, par pehla todo object apni jagah par mutate hua, isliye jo bhi memoised child us object ko reference se compare karta hai use badlaav dikhega nahi. Line 4: badle hue object ko <code>{ ...t, done: false }</code> se copy karne par naya reference milta hai, isliye comparisons ko dikhta hai. Jis bhi level ko badlo use copy karo. (Yeh React ki comparison ka model hai; asli React mein iske aaspaas aur machinery hai.)</p>`
      }
    },
    {
      id: "lifting-state-model",
      lang: "javascript",
      src: `// Design A: each sibling keeps its own copy of "selected"
const listA = { selected: null };
const detailA = { selected: null };
function clickA(id) {
  listA.selected = id; // the detail panel never hears about it
}

// Design B: the parent owns the state and passes it down
function createParent() {
  let selected = null;
  return {
    select: (id) => { selected = id; },          // callback prop going up
    listProps: () => ({ selected }),              // props going down
    detailProps: () => ({ selected }),
  };
}
const parentB = createParent();

clickA(2);
parentB.select(2);

console.log("A: list=" + listA.selected + " detail=" + detailA.selected);
console.log("B: list=" + parentB.listProps().selected + " detail=" + parentB.detailProps().selected);`,
      answer: `A: list=2 detail=null
B: list=2 detail=2`,
      explain: {
        en: `<p>In design A the two siblings each hold a private copy, and the click only updates the list's copy, so the detail panel is out of date: two sources of truth.</p>
<p>In design B the parent owns <code>selected</code>. The click calls the parent's callback, and the parent passes the same value to both children as props, so they cannot disagree. This is the "lift state up" pattern: one owner, data down, events up.</p>`,
        hi: `<p>Design A में दोनों siblings अपनी private copy रखते हैं, और click सिर्फ़ list की copy update करता है, इसलिए detail panel पुराना रह जाता है: दो sources of truth।</p>
<p>Design B में parent <code>selected</code> का owner है। Click parent का callback call करता है, और parent वही value दोनों children को props की तरह देता है, इसलिए उनमें mismatch नहीं हो सकता। यही "lift state up" pattern है: एक owner, data नीचे, events ऊपर।</p>`,
        hg: `<p>Design A mein dono siblings apni private copy rakhte hain, aur click sirf list ki copy update karta hai, isliye detail panel purana reh jaata hai: do sources of truth.</p>
<p>Design B mein parent <code>selected</code> ka owner hai. Click parent ka callback call karta hai, aur parent wahi value dono children ko props ki tarah deta hai, isliye unmein mismatch nahi ho sakta. Yahi "lift state up" pattern hai: ek owner, data neeche, events upar.</p>`
      }
    },
    {
      id: "strict-mode-cleanup",
      lang: "javascript",
      src: `const bus = { listeners: new Set() };

function effectWithCleanup() {
  const handler = () => {};
  bus.listeners.add(handler);
  return () => bus.listeners.delete(handler);
}

function effectWithoutCleanup() {
  bus.listeners.add(() => {}); // returns nothing: nothing removes it
}

// Strict Mode in development: setup, cleanup, setup again; later a real unmount
function mountInStrictMode(effect) {
  bus.listeners.clear();
  let cleanup = effect();
  if (cleanup) cleanup();
  cleanup = effect();
  const mounted = bus.listeners.size;
  if (cleanup) cleanup();
  return "mounted=" + mounted + ", after unmount=" + bus.listeners.size;
}

console.log("with cleanup: " + mountInStrictMode(effectWithCleanup));
console.log("no cleanup: " + mountInStrictMode(effectWithoutCleanup));`,
      answer: `with cleanup: mounted=1, after unmount=0
no cleanup: mounted=2, after unmount=2`,
      explain: {
        en: `<p>Strict Mode's extra setup, cleanup, setup cycle is a test of your cleanup. With a proper cleanup, the first subscription is removed before the second is added, so exactly one listener exists and unmounting removes it.</p>
<p>Without a cleanup, the first listener stays: two listeners after mounting and still two after unmount, a leak that causes duplicate handler calls. In production builds the extra cycle does not run, so the bug would stay hidden until it appears as a slow, odd behaviour. Strict Mode shows it early, which is why you fix the cleanup instead of removing Strict Mode.</p>`,
        hi: `<p>Strict Mode का extra setup, cleanup, setup cycle तुम्हारे cleanup का test है। सही cleanup के साथ पहली subscription दूसरी जुड़ने से पहले हट जाती है, इसलिए ठीक एक listener रहता है और unmount उसे हटा देता है।</p>
<p>Cleanup के बिना पहला listener रह जाता है: mount के बाद दो listeners और unmount के बाद भी दो, एक leak जो duplicate handler calls करवाता है। Production builds में extra cycle नहीं चलता, इसलिए bug छुपा रहता और बाद में धीमे, अजीब behaviour की तरह दिखता। Strict Mode इसे जल्दी दिखा देता है, इसीलिए Strict Mode हटाने की जगह cleanup ठीक करो।</p>`,
        hg: `<p>Strict Mode ka extra setup, cleanup, setup cycle tumhare cleanup ka test hai. Sahi cleanup ke saath pehli subscription doosri judne se pehle hat jaati hai, isliye theek ek listener rehta hai aur unmount use hata deta hai.</p>
<p>Cleanup ke bina pehla listener reh jaata hai: mount ke baad do listeners aur unmount ke baad bhi do, ek leak jo duplicate handler calls karwata hai. Production builds mein extra cycle nahi chalta, isliye bug chhupa rehta aur baad mein dheeme, ajeeb behaviour ki tarah dikhta. Strict Mode ise jaldi dikha deta hai, isiliye Strict Mode hatane ki jagah cleanup theek karo.</p>`
      }
    },
  ],
  revision: {
    en: [
      "React is a UI library: components describe the UI for the current state, while routing and data loading come from other tools.",
      "JSX compiles to plain function calls (className, expressions in {}).",
      "Props are read-only inputs from the parent; state is owned by the component.",
      "A render sees a snapshot of state; use setCount(c =&gt; c + 1) when the next value depends on the previous one.",
      "Do not mutate state arrays or objects; React compares with Object.is, so copy and replace.",
      "Index keys can attach row state to the wrong item when a list reorders or shrinks; prefer stable ids.",
      "useEffect synchronises with outside systems: list every dependency and return a cleanup function.",
      "Compute derived values during render and handle clicks in event handlers; many effects are not needed.",
      "The browser enforces CORS, so the ASP.NET Core API must allow your exact front-end origin.",
      "Do not keep sensitive tokens in localStorage carelessly; prefer an HttpOnly cookie, often through a BFF.",
      "In the Next.js App Router, components are Server Components by default; add 'use client' only for state, effects or browser APIs.",
      "SSG, ISR, SSR and CSR trade freshness against speed and SEO; pick per route and check caching defaults for your Next.js version.",
    ],
    meaning: {
      hi: [
      "React एक UI library है: components मौजूदा state के लिए UI describe करते हैं, जबकि routing और data loading दूसरे tools से आते हैं।",
      "JSX plain function calls में compile होता है (className, expressions {} में)।",
      "Props parent से मिले read-only inputs हैं; state component की अपनी है।",
      "हर render state का snapshot देखता है; अगली value पिछली पर depend करे तो setCount(c =&gt; c + 1) use करो।",
      "State के arrays या objects को mutate मत करो; React Object.is से compare करता है, इसलिए copy बनाकर replace करो।",
      "List reorder या छोटी होने पर index keys row की state ग़लत item से जोड़ सकती हैं; stable ids पसंद करो।",
      "useEffect बाहर के systems से sync करता है: हर dependency list करो और cleanup function return करो।",
      "Derived values को render के दौरान compute करो और clicks को event handlers में handle करो; कई effects की ज़रूरत नहीं होती।",
      "CORS browser enforce करता है, इसलिए ASP.NET Core API को तुम्हारा exact front-end origin allow करना होगा।",
      "Sensitive tokens को localStorage में लापरवाही से मत रखो; HttpOnly cookie पसंद करो, अक्सर BFF के ज़रिए।",
      "Next.js App Router में components by default Server Components हैं; 'use client' सिर्फ़ state, effects या browser APIs के लिए लगाओ।",
      "SSG, ISR, SSR और CSR में freshness बनाम speed और SEO का trade-off है; route के हिसाब से चुनो और अपने Next.js version के caching defaults देखो।",
      ],
      hg: [
      "React ek UI library hai: components maujooda state ke liye UI describe karte hain, jabki routing aur data loading doosre tools se aate hain.",
      "JSX plain function calls mein compile hota hai (className, expressions {} mein).",
      "Props parent se mile read-only inputs hain; state component ki apni hai.",
      "Har render state ka snapshot dekhta hai; agli value pichli par depend kare to setCount(c =&gt; c + 1) use karo.",
      "State ke arrays ya objects ko mutate mat karo; React Object.is se compare karta hai, isliye copy banakar replace karo.",
      "List reorder ya chhoti hone par index keys row ki state galat item se jod sakti hain; stable ids pasand karo.",
      "useEffect bahar ke systems se sync karta hai: har dependency list karo aur cleanup function return karo.",
      "Derived values ko render ke dauran compute karo aur clicks ko event handlers mein handle karo; kai effects ki zaroorat nahi hoti.",
      "CORS browser enforce karta hai, isliye ASP.NET Core API ko tumhara exact front-end origin allow karna hoga.",
      "Sensitive tokens ko localStorage mein laparwahi se mat rakho; HttpOnly cookie pasand karo, aksar BFF ke zariye.",
      "Next.js App Router mein components by default Server Components hain; 'use client' sirf state, effects ya browser APIs ke liye lagao.",
      "SSG, ISR, SSR aur CSR mein freshness banam speed aur SEO ka trade-off hai; route ke hisaab se chuno aur apne Next.js version ke caching defaults dekho.",
      ]
    }
  },
  whatsNew: {
    en: `<p><b>Currency check (this area moves fast):</b> React 19 became stable in December 2024 (confirmed by the Next.js 15.1 announcement). It adds Actions, form actions, <code>useActionState</code>, <code>useOptimistic</code> and the <code>use</code> API; the Next.js docs confirm <code>use</code>, so check react.dev for the rest and for current status. Next.js 16 documents a stable <code>reactCompiler</code> option (it needs <code>babel-plugin-react-compiler</code>), which can reduce hand-written <code>useMemo</code>/<code>useCallback</code>; check react.dev for the compiler's current status. A Next.js static export (<code>output: 'export'</code>) produces plain HTML, CSS and JavaScript files that need no Node.js server, but cookies, Server Actions and ISR are not available there.</p>`,
    hi: `<p><b>Currency check (यह area तेज़ी से बदलता है):</b> React 19 December 2024 में stable हुआ (Next.js 15.1 के announcement से confirmed)। इसमें Actions, form actions, <code>useActionState</code>, <code>useOptimistic</code> और <code>use</code> API आते हैं; Next.js docs <code>use</code> को confirm करते हैं, बाक़ी के लिए और current status के लिए react.dev देखो। Next.js 16 एक stable <code>reactCompiler</code> option document करता है (इसे <code>babel-plugin-react-compiler</code> चाहिए), जो हाथ से लिखे <code>useMemo</code>/<code>useCallback</code> घटा सकता है; compiler के current status के लिए react.dev देखो। Next.js static export (<code>output: 'export'</code>) plain HTML, CSS और JavaScript files बनाता है जिन्हें Node.js server नहीं चाहिए, पर cookies, Server Actions और ISR वहाँ नहीं मिलते।</p>`,
    hg: `<p><b>Currency check (yeh area tezi se badalta hai):</b> React 19 December 2024 mein stable hua (Next.js 15.1 ke announcement se confirmed). Isme Actions, form actions, <code>useActionState</code>, <code>useOptimistic</code> aur <code>use</code> API aate hain; Next.js docs <code>use</code> ko confirm karte hain, baaki ke liye aur current status ke liye react.dev dekho. Next.js 16 ek stable <code>reactCompiler</code> option document karta hai (ise <code>babel-plugin-react-compiler</code> chahiye), jo haath se likhe <code>useMemo</code>/<code>useCallback</code> ghata sakta hai; compiler ke current status ke liye react.dev dekho. Next.js static export (<code>output: 'export'</code>) plain HTML, CSS aur JavaScript files banata hai jinhe Node.js server nahi chahiye, par cookies, Server Actions aur ISR wahan nahi milte.</p>`
  }
};
