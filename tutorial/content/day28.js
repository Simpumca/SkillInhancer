// Day 28 — TL Leadership & Behavioral. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 28,
  title: {
    en: "TL Leadership and Behavioral Interviews — what a TL is, STAR stories, estimation, conflict, mentoring, stakeholders, incidents, tech debt, hiring, and your own pitch",
    hi: "TL Leadership और Behavioral Interviews — TL क्या होता है, STAR stories, estimation, conflict, mentoring, stakeholders, incidents, tech debt, hiring, और तुम्हारा अपना pitch",
    hg: "TL Leadership aur Behavioral Interviews — TL kya hota hai, STAR stories, estimation, conflict, mentoring, stakeholders, incidents, tech debt, hiring, aur tumhara apna pitch"
  },
  summary: {
    en: `<p>"<b>Tell me about a time when...</b>" is where many good developers lose confidence. Think of a cricket captain. He may still bat and bowl, but the job being judged is <b>how he reads the game, backs the team and takes the blame when it goes wrong</b>. A Tech Lead interview asks the same: not "can you code" (Days 1 to 27 did that) but "<b>can you lead people, risk and uncertainty</b>". Eleven years of real work already contain your answers. This day gives you the shape to say them calmly.</p>
<ul>
<li><b>What a TL is:</b> usually a senior engineer who is also accountable for the team's delivery and technical direction. Often about half hands-on and half leading, but it changes by company. It is not the same as an engineering manager (people, careers, hiring) or an architect (broad design, often less hands-on).</li>
<li><b>STAR:</b> Situation, Task, Action, Result. Prepare <b>6 to 8 stories</b> in a story bank (conflict, failure, influence, tough feedback, incident, deadline, mentoring, manager disagreement, tech debt, hiring) and reuse each for several questions. Add a <b>Learning</b> line (STAR-L) for failures. Use "I" for your part and "we" for the team.</li>
<li><b>Estimation:</b> an estimate is a range, not a promise. Use <b>three-point (PERT)</b>: (O + 4M + P) / 6, with (P - O) / 6 as a rough spread. Forecast with <b>velocity ranges</b>, say the uncertainty out loud, and negotiate <b>scope</b>, not truth.</li>
<li><b>Conflict and reviews:</b> keep it about the code and the data; use a prototype, a measurement or an <b>ADR</b> (Day 15); then <b>disagree and commit</b>. Review tone and blocking vs non-blocking comments follow Day 21.</li>
<li><b>Mentoring and delegation:</b> match your style to the person's skill and confidence, hold regular 1:1s, give a small growth plan, and <b>do not take the keyboard</b>.</li>
<li><b>Stakeholders:</b> translate technology into time, money and risk; send short, regular status updates; keep a risk register; say "no" with options.</li>
<li><b>Incidents:</b> one incident commander, a communication cadence, <b>mitigate first, find root cause after</b>, then a blameless post-mortem (Day 21 has rollback and DORA).</li>
<li><b>Tech debt:</b> make it visible, rank by cost of delay and risk (WSJF is one tool), and treat a fixed 20% as one option, not a law.</li>
<li><b>Your pitch:</b> "Tell me about yourself" and "Why should we hire you as TL?" as fill-in templates with clearly labelled samples. <b>Samples are shapes, not your history</b>: replace every detail with your own real project.</li>
</ul>
<p>Plan (Short about 20 minutes; Detailed is reference): read Short mode, say the answers aloud, fill in the templates on paper (that is the real work of this day), then try the five puzzles.</p>`,
    hi: `<p>"<b>Tell me about a time when...</b>" यहाँ कई अच्छे developers का confidence गिर जाता है। एक cricket captain सोचो। वो अब भी bat और bowl कर सकता है, पर जिस काम को judge किया जाता है वो है <b>वो game कैसे पढ़ता है, team का साथ कैसे देता है, और गड़बड़ होने पर ज़िम्मेदारी कैसे लेता है</b>। Tech Lead interview भी यही पूछता है: "code कर सकते हो?" नहीं (Day 1 से 27 ने वो कराया), बल्कि "<b>लोगों, risk और uncertainty को lead कर सकते हो?</b>" ग्यारह साल के असली काम में तुम्हारे answers पहले से हैं। ये day उन्हें शांति से बोलने का shape देता है।</p>
<ul>
<li><b>TL क्या है:</b> आम तौर पर senior engineer जो team की delivery और technical direction के लिए भी accountable होता है। अक्सर आधा hands-on और आधा leading, पर company के हिसाब से बदलता है। ये engineering manager (लोग, careers, hiring) या architect (बड़ा design, अक्सर कम hands-on) जैसा नहीं है।</li>
<li><b>STAR:</b> Situation, Task, Action, Result। <b>6 से 8 stories</b> का story bank बनाओ (conflict, failure, influence, tough feedback, incident, deadline, mentoring, manager से disagreement, tech debt, hiring) और हर story कई सवालों में reuse करो। Failure के लिए <b>Learning</b> line जोड़ो (STAR-L)। अपने हिस्से के लिए "I" और team के लिए "we" बोलो।</li>
<li><b>Estimation:</b> estimate एक range है, promise नहीं। <b>Three-point (PERT)</b> use करो: (O + 4M + P) / 6, और (P - O) / 6 को मोटा spread मानो। <b>Velocity ranges</b> से forecast करो, uncertainty बोलकर बताओ, और <b>scope</b> negotiate करो, सच नहीं।</li>
<li><b>Conflict और reviews:</b> बात code और data की रखो; prototype, measurement या <b>ADR</b> (Day 15) use करो; फिर <b>disagree and commit</b>। Review का tone और blocking vs non-blocking comments Day 21 जैसे।</li>
<li><b>Mentoring और delegation:</b> अपना style सामने वाले की skill और confidence से match करो, regular 1:1s रखो, छोटा growth plan दो, और <b>keyboard खुद मत पकड़ो</b>।</li>
<li><b>Stakeholders:</b> technology को time, money और risk में translate करो; छोटे, regular status updates भेजो; risk register रखो; "no" को options के साथ बोलो।</li>
<li><b>Incidents:</b> एक incident commander, communication cadence, <b>पहले mitigate, root cause बाद में</b>, फिर blameless post-mortem (Day 21 में rollback और DORA है)।</li>
<li><b>Tech debt:</b> उसे visible बनाओ, cost of delay और risk से rank करो (WSJF एक tool है), और fixed 20% को एक option मानो, कानून नहीं।</li>
<li><b>तुम्हारा pitch:</b> "Tell me about yourself" और "Why should we hire you as TL?" fill-in templates और साफ़ labelled samples के साथ। <b>Samples shape हैं, तुम्हारी history नहीं</b>: हर detail अपने असली project से बदलो।</li>
</ul>
<p>Plan (Short लगभग 20 मिनट; Detailed reference है): Short mode पढ़ो, answers ज़ोर से बोलो, templates कागज़ पर भरो (इस day का असली काम यही है), फिर पाँच puzzles try करो।</p>`,
    hg: `<p>"<b>Tell me about a time when...</b>" yahan kai achhe developers ka confidence gir jaata hai. Ek cricket captain socho. Woh ab bhi bat aur bowl kar sakta hai, par jis kaam ko judge kiya jaata hai woh hai <b>woh game kaise padhta hai, team ka saath kaise deta hai, aur gadbad hone par zimmedaari kaise leta hai</b>. Tech Lead interview bhi yahi poochta hai: "code kar sakte ho?" nahi (Day 1 se 27 ne woh karaya), balki "<b>logon, risk aur uncertainty ko lead kar sakte ho?</b>" Gyarah saal ke asli kaam mein tumhare answers pehle se hain. Yeh day unhe shaanti se bolne ka shape deta hai.</p>
<ul>
<li><b>TL kya hai:</b> aam taur par senior engineer jo team ki delivery aur technical direction ke liye bhi accountable hota hai. Aksar aadha hands-on aur aadha leading, par company ke hisaab se badalta hai. Yeh engineering manager (log, careers, hiring) ya architect (bada design, aksar kam hands-on) jaisa nahi hai.</li>
<li><b>STAR:</b> Situation, Task, Action, Result. <b>6 se 8 stories</b> ka story bank banao (conflict, failure, influence, tough feedback, incident, deadline, mentoring, manager se disagreement, tech debt, hiring) aur har story kai sawaalon mein reuse karo. Failure ke liye <b>Learning</b> line jodo (STAR-L). Apne hisse ke liye "I" aur team ke liye "we" bolo.</li>
<li><b>Estimation:</b> estimate ek range hai, promise nahi. <b>Three-point (PERT)</b> use karo: (O + 4M + P) / 6, aur (P - O) / 6 ko mota spread mano. <b>Velocity ranges</b> se forecast karo, uncertainty bolkar batao, aur <b>scope</b> negotiate karo, sach nahi.</li>
<li><b>Conflict aur reviews:</b> baat code aur data ki rakho; prototype, measurement ya <b>ADR</b> (Day 15) use karo; phir <b>disagree and commit</b>. Review ka tone aur blocking vs non-blocking comments Day 21 jaise.</li>
<li><b>Mentoring aur delegation:</b> apna style saamne wale ki skill aur confidence se match karo, regular 1:1s rakho, chhota growth plan do, aur <b>keyboard khud mat pakdo</b>.</li>
<li><b>Stakeholders:</b> technology ko time, money aur risk mein translate karo; chhote, regular status updates bhejo; risk register rakho; "no" ko options ke saath bolo.</li>
<li><b>Incidents:</b> ek incident commander, communication cadence, <b>pehle mitigate, root cause baad mein</b>, phir blameless post-mortem (Day 21 mein rollback aur DORA hai).</li>
<li><b>Tech debt:</b> use visible banao, cost of delay aur risk se rank karo (WSJF ek tool hai), aur fixed 20% ko ek option mano, kanoon nahi.</li>
<li><b>Tumhara pitch:</b> "Tell me about yourself" aur "Why should we hire you as TL?" fill-in templates aur saaf labelled samples ke saath. <b>Samples shape hain, tumhari history nahi</b>: har detail apne asli project se badlo.</li>
</ul>
<p>Plan (Short lagbhag 20 minute; Detailed reference hai): Short mode padho, answers zor se bolo, templates kagaz par bharo (is day ka asli kaam yahi hai), phir paanch puzzles try karo.</p>`
  },
  sections: [
    {
      id: "tl-role",
      depth: "short",
      title: {
        en: "What a Tech Lead really is (and is not)",
        hi: "Tech Lead असल में क्या है (और क्या नहीं)",
        hg: "Tech Lead asal mein kya hai (aur kya nahi)"
      },
      body: {
        en: `<p><b>Analogy:</b> in a wedding kitchen, the head cook still stirs the big pot, but he also decides the menu order, tells the helpers who cuts what, and tastes everything before it leaves. If the food is late, <b>he answers to the family</b>, not the helper. A Tech Lead is the head cook of a team: still close to the code, but judged on what the whole team delivers.</p>
<p>Companies use the title differently, so ask early: "<b>What does the TL do day to day here?</b>" A common split is <b>roughly 50/50 hands-on and leading</b>, but it can be 80/20 either way. Treat the table below as a typical picture, not a rule.</p>
<ul>
<li><b>Senior developer:</b> owns hard tasks and quality of their own work; influences through code and advice.</li>
<li><b>Tech Lead:</b> owns the team's technical direction and delivery; still codes and reviews, but also unblocks people, shapes design, talks to stakeholders.</li>
<li><b>Engineering manager:</b> owns people and process: hiring, performance, career growth, team health, budget. Often codes little or not at all.</li>
<li><b>Architect:</b> owns broad design across teams or systems; guides rather than manages, and is often further from daily code. (Some companies make the TL do this too.)</li>
</ul>
<p>What interviewers listen for: <b>ownership</b> (you take responsibility for outcomes), <b>judgement</b> (trade-offs, not slogans), <b>people skills</b> (you grow others), and <b>communication</b> (you make risk visible early). Your force multiplier is the team, so a good week is measured by what the team shipped, not by how many tickets you closed yourself.</p>
<p>You may think "I have not been an official TL". Many candidates have led without the title: onboarding people, running a release, being the one who handles incidents. That is real leadership experience and you will use it in the story bank next.</p>
<p><b>When to use / when not:</b> use this framing when you answer "What is your idea of a TL?" or "How is it different from your current role?". Do not claim to be a manager if the role is not, and do not say "TL means no coding": most companies expect you to stay hands-on enough to review designs and code credibly.</p>`,
        hi: `<p><b>Analogy:</b> शादी की kitchen में head cook अब भी बड़ा पतीला चलाता है, पर वो menu का order भी decide करता है, helpers को बताता है कि कौन क्या काटेगा, और खाना बाहर जाने से पहले सब चखता है। खाना late हो तो <b>जवाब परिवार को वो देता है</b>, helper नहीं। Tech Lead team का head cook है: code के पास रहता है, पर judge इस पर होता है कि पूरी team ने क्या deliver किया।</p>
<p>Companies title अलग-अलग तरह से use करती हैं, इसलिए जल्दी पूछो: "<b>यहाँ TL रोज़ क्या करता है?</b>" आम split <b>लगभग 50/50 hands-on और leading</b> है, पर ये किसी तरफ 80/20 भी हो सकता है। नीचे की list को typical picture मानो, rule नहीं।</p>
<ul>
<li><b>Senior developer:</b> मुश्किल tasks और अपने काम की quality का owner; code और advice से influence करता है।</li>
<li><b>Tech Lead:</b> team की technical direction और delivery का owner; अब भी code और review करता है, पर लोगों को unblock भी करता है, design shape करता है, stakeholders से बात करता है।</li>
<li><b>Engineering manager:</b> लोगों और process का owner: hiring, performance, career growth, team health, budget। अक्सर code कम या बिल्कुल नहीं करता।</li>
<li><b>Architect:</b> teams या systems के बीच बड़े design का owner; manage करने की जगह guide करता है, और अक्सर daily code से दूर होता है। (कुछ companies TL से ये भी कराती हैं।)</li>
</ul>
<p>Interviewers क्या सुनते हैं: <b>ownership</b> (outcomes की ज़िम्मेदारी लेते हो), <b>judgement</b> (trade-offs, slogans नहीं), <b>people skills</b> (दूसरों को grow कराते हो), और <b>communication</b> (risk जल्दी visible करते हो)। तुम्हारा force multiplier team है, इसलिए अच्छा हफ़्ता वो है जिसमें team ने ship किया, ये नहीं कि तुमने खुद कितने tickets close किए।</p>
<p>तुम सोच सकते हो "मैं official TL नहीं रहा"। कई candidates ने title के बिना lead किया है: लोगों को onboard करना, release चलाना, incidents संभालना। ये असली leadership experience है और इसे तुम आगे story bank में use करोगे।</p>
<p><b>When to use / when not:</b> इस framing को तब use करो जब "TL के बारे में तुम्हारा idea क्या है?" या "ये तुम्हारे current role से कैसे अलग है?" पूछा जाए। अगर role manager का नहीं है तो खुद को manager मत कहो, और "TL मतलब coding नहीं" मत कहो: ज़्यादातर companies चाहती हैं कि तुम इतने hands-on रहो कि designs और code credibly review कर सको।</p>`,
        hg: `<p><b>Analogy:</b> shaadi ki kitchen mein head cook ab bhi bada patila chalata hai, par woh menu ka order bhi decide karta hai, helpers ko batata hai ki kaun kya kaatega, aur khana bahar jaane se pehle sab chakhta hai. Khana late ho to <b>jawab parivaar ko woh deta hai</b>, helper nahi. Tech Lead team ka head cook hai: code ke paas rehta hai, par judge is par hota hai ki poori team ne kya deliver kiya.</p>
<p>Companies title alag-alag tarah se use karti hain, isliye jaldi poochho: "<b>Yahan TL roz kya karta hai?</b>" Aam split <b>lagbhag 50/50 hands-on aur leading</b> hai, par yeh kisi taraf 80/20 bhi ho sakta hai. Neeche ki list ko typical picture mano, rule nahi.</p>
<ul>
<li><b>Senior developer:</b> mushkil tasks aur apne kaam ki quality ka owner; code aur advice se influence karta hai.</li>
<li><b>Tech Lead:</b> team ki technical direction aur delivery ka owner; ab bhi code aur review karta hai, par logon ko unblock bhi karta hai, design shape karta hai, stakeholders se baat karta hai.</li>
<li><b>Engineering manager:</b> logon aur process ka owner: hiring, performance, career growth, team health, budget. Aksar code kam ya bilkul nahi karta.</li>
<li><b>Architect:</b> teams ya systems ke beech bade design ka owner; manage karne ki jagah guide karta hai, aur aksar daily code se door hota hai. (Kuch companies TL se yeh bhi karati hain.)</li>
</ul>
<p>Interviewers kya sunte hain: <b>ownership</b> (outcomes ki zimmedaari lete ho), <b>judgement</b> (trade-offs, slogans nahi), <b>people skills</b> (doosron ko grow karaate ho), aur <b>communication</b> (risk jaldi visible karte ho). Tumhara force multiplier team hai, isliye achha hafta woh hai jisme team ne ship kiya, yeh nahi ki tumne khud kitne tickets close kiye.</p>
<p>Tum soch sakte ho "main official TL nahi raha". Kai candidates ne title ke bina lead kiya hai: logon ko onboard karna, release chalana, incidents sambhalna. Yeh asli leadership experience hai aur ise tum aage story bank mein use karoge.</p>
<p><b>When to use / when not:</b> is framing ko tab use karo jab "TL ke baare mein tumhara idea kya hai?" ya "yeh tumhare current role se kaise alag hai?" poocha jaaye. Agar role manager ka nahi hai to khud ko manager mat kaho, aur "TL matlab coding nahi" mat kaho: zyaadatar companies chahti hain ki tum itne hands-on raho ki designs aur code credibly review kar sako.</p>`
      }
    },
    {
      id: "star-story-bank",
      depth: "short",
      title: {
        en: "STAR and your story bank: 6 to 8 stories, many questions",
        hi: "STAR और तुम्हारा story bank: 6 से 8 stories, कई सवाल",
        hg: "STAR aur tumhara story bank: 6 se 8 stories, kai sawaal"
      },
      body: {
        en: `<p><b>Analogy:</b> a good kirana shopkeeper does not buy a new item for each customer. He keeps <b>a few well-stocked shelves</b> and combines them: rice, dal and oil go into many different baskets. Your stories are the shelves. Eight good stories can answer thirty different behavioral questions.</p>
<p><b>STAR</b> keeps a story short and clear:</p>
<ul>
<li><b>Situation:</b> one or two sentences of context (system, team, what was at stake).</li>
<li><b>Task:</b> what <i>you</i> were responsible for.</li>
<li><b>Action:</b> what <i>you</i> did, step by step. This is the longest part (about 60%).</li>
<li><b>Result:</b> what changed, with a number if you honestly have one (time saved, errors down, release on time). If you do not have a number, say what improved and how you know.</li>
</ul>
<p>Variants you may hear: <b>STAR-L</b> adds a <b>Learning</b> line (best for failure questions), and <b>CARL</b> is Context, Action, Result, Learning, which is the same idea with a shorter start. Pick one and stay with it; the interviewer cares about the content, not the acronym.</p>
<p><b>Story bank</b> (aim for 6 to 8 real stories, each tagged with the questions it can answer):</p>
<ul>
<li><b>Conflict</b> with a teammate or another team (technical or personal).</li>
<li><b>Failure or mistake</b> you owned, with what you changed afterwards.</li>
<li><b>Influence without authority</b>: you changed a decision without being the boss.</li>
<li><b>Tough feedback</b> you gave, or received and acted on.</li>
<li><b>Production incident</b> you led or helped fix.</li>
<li><b>Deadline pressure</b> and a scope or quality trade-off.</li>
<li><b>Mentoring</b> someone who grew.</li>
<li><b>Disagreement with your manager</b> and how it ended.</li>
<li><b>Tech-debt decision</b>: you chose to pay it down or to delay it.</li>
<li><b>Hiring or interviewing</b>, if you have done it.</li>
</ul>
<p>Tips: practise each story aloud for <b>about 2 minutes</b>; use "I" for your actions and "we" for team results; never blame a named person; tell the truth (interviewers probe with follow-ups, and an invented story breaks quickly). It is fine to pick a story where the result was mixed, as long as you show judgement and learning.</p>
<p><b>When to use / when not:</b> use STAR for "Tell me about a time..." questions. Do not use it for opinion questions ("How do you handle conflict?"): answer first in one sentence with your principle, then support it with a short story.</p>`,
        hi: `<p><b>Analogy:</b> अच्छा kirana दुकानदार हर customer के लिए नया सामान नहीं खरीदता। वो <b>कुछ अच्छी भरी shelves</b> रखता है और उन्हें मिलाता है: चावल, दाल, तेल अलग-अलग baskets में जाते हैं। तुम्हारी stories वो shelves हैं। आठ अच्छी stories तीस अलग behavioral सवालों का answer दे सकती हैं।</p>
<p><b>STAR</b> story को छोटा और साफ़ रखता है:</p>
<ul>
<li><b>Situation:</b> context के एक-दो वाक्य (system, team, क्या दाँव पर था)।</li>
<li><b>Task:</b> <i>तुम्हारी</i> ज़िम्मेदारी क्या थी।</li>
<li><b>Action:</b> <i>तुमने</i> क्या किया, step by step। ये सबसे लंबा हिस्सा है (लगभग 60%)।</li>
<li><b>Result:</b> क्या बदला, number के साथ अगर सच में है (time बचा, errors कम हुए, release on time)। Number नहीं है तो बताओ क्या बेहतर हुआ और तुम्हें कैसे पता।</li>
</ul>
<p>Variants जो सुन सकते हो: <b>STAR-L</b> में <b>Learning</b> line जुड़ती है (failure सवालों के लिए best), और <b>CARL</b> यानी Context, Action, Result, Learning, जो वही idea है छोटी शुरुआत के साथ। एक चुनो और उसी पर रहो; interviewer को content से मतलब है, acronym से नहीं।</p>
<p><b>Story bank</b> (6 से 8 असली stories का target रखो, हर एक पर लिखो कि वो किन सवालों का answer दे सकती है):</p>
<ul>
<li>Teammate या दूसरी team के साथ <b>conflict</b> (technical या personal)।</li>
<li><b>Failure या mistake</b> जिसकी ज़िम्मेदारी तुमने ली, और बाद में क्या बदला।</li>
<li><b>Influence without authority</b>: boss बने बिना तुमने decision बदला।</li>
<li><b>Tough feedback</b> जो तुमने दिया, या मिला और उस पर काम किया।</li>
<li><b>Production incident</b> जो तुमने lead किया या fix कराने में मदद की।</li>
<li><b>Deadline pressure</b> और scope या quality का trade-off।</li>
<li><b>Mentoring</b> किसी को जो grow हुआ।</li>
<li><b>Manager से disagreement</b> और वो कैसे खत्म हुआ।</li>
<li><b>Tech-debt decision</b>: तुमने उसे चुकाना चुना या टालना।</li>
<li><b>Hiring या interviewing</b>, अगर किया है।</li>
</ul>
<p>Tips: हर story ज़ोर से <b>लगभग 2 मिनट</b> practise करो; अपने actions के लिए "I" और team results के लिए "we"; किसी named person को blame मत करो; सच बोलो (interviewers follow-ups से probe करते हैं और बनाई हुई story जल्दी टूट जाती है)। ऐसी story भी ठीक है जिसका result mixed था, बस judgement और learning दिखाओ।</p>
<p><b>When to use / when not:</b> "Tell me about a time..." सवालों में STAR use करो। Opinion सवालों ("conflict कैसे handle करते हो?") में नहीं: पहले एक वाक्य में अपना principle बोलो, फिर एक छोटी story से support करो।</p>`,
        hg: `<p><b>Analogy:</b> achha kirana dukaandaar har customer ke liye naya saamaan nahi kharidta. Woh <b>kuch achhi bhari shelves</b> rakhta hai aur unhe milata hai: chawal, dal, tel alag-alag baskets mein jaate hain. Tumhari stories woh shelves hain. Aath achhi stories tees alag behavioral sawaalon ka answer de sakti hain.</p>
<p><b>STAR</b> story ko chhota aur saaf rakhta hai:</p>
<ul>
<li><b>Situation:</b> context ke ek-do vaakya (system, team, kya daanv par tha).</li>
<li><b>Task:</b> <i>tumhari</i> zimmedaari kya thi.</li>
<li><b>Action:</b> <i>tumne</i> kya kiya, step by step. Yeh sabse lamba hissa hai (lagbhag 60%).</li>
<li><b>Result:</b> kya badla, number ke saath agar sach mein hai (time bacha, errors kam hue, release on time). Number nahi hai to batao kya behtar hua aur tumhe kaise pata.</li>
</ul>
<p>Variants jo sun sakte ho: <b>STAR-L</b> mein <b>Learning</b> line judti hai (failure sawaalon ke liye best), aur <b>CARL</b> yaani Context, Action, Result, Learning, jo wahi idea hai chhoti shuruaat ke saath. Ek chuno aur usi par raho; interviewer ko content se matlab hai, acronym se nahi.</p>
<p><b>Story bank</b> (6 se 8 asli stories ka target rakho, har ek par likho ki woh kin sawaalon ka answer de sakti hai):</p>
<ul>
<li>Teammate ya doosri team ke saath <b>conflict</b> (technical ya personal).</li>
<li><b>Failure ya mistake</b> jiski zimmedaari tumne li, aur baad mein kya badla.</li>
<li><b>Influence without authority</b>: boss bane bina tumne decision badla.</li>
<li><b>Tough feedback</b> jo tumne diya, ya mila aur us par kaam kiya.</li>
<li><b>Production incident</b> jo tumne lead kiya ya fix karane mein madad ki.</li>
<li><b>Deadline pressure</b> aur scope ya quality ka trade-off.</li>
<li><b>Mentoring</b> kisi ko jo grow hua.</li>
<li><b>Manager se disagreement</b> aur woh kaise khatam hua.</li>
<li><b>Tech-debt decision</b>: tumne use chukana chuna ya taalna.</li>
<li><b>Hiring ya interviewing</b>, agar kiya hai.</li>
</ul>
<p>Tips: har story zor se <b>lagbhag 2 minute</b> practise karo; apne actions ke liye "I" aur team results ke liye "we"; kisi named person ko blame mat karo; sach bolo (interviewers follow-ups se probe karte hain aur banayi hui story jaldi toot jaati hai). Aisi story bhi theek hai jiska result mixed tha, bas judgement aur learning dikhao.</p>
<p><b>When to use / when not:</b> "Tell me about a time..." sawaalon mein STAR use karo. Opinion sawaalon ("conflict kaise handle karte ho?") mein nahi: pehle ek vaakya mein apna principle bolo, phir ek chhoti story se support karo.</p>`
      }
    },
    {
      id: "story-templates",
      depth: "detailed",
      title: {
        en: "Your own stories: fill-in templates and labelled samples",
        hi: "तुम्हारी अपनी stories: fill-in templates और labelled samples",
        hg: "Tumhari apni stories: fill-in templates aur labelled samples"
      },
      body: {
        en: `<p><b>Analogy:</b> a tailor gives you a paper pattern, not a finished shirt. You still cut your own cloth to your own size. The templates below are <b>patterns</b>; the samples are <b>a demonstration shirt on a mannequin</b>. They show the shape and the length, but <b>they are not your history</b>. Never say a sample as if it happened to you.</p>
<p><b>How to use this section (30 to 40 minutes, on paper or in a notes file):</b></p>
<ul>
<li>Pick <b>four real moments</b> from your 11 years: an incident, a conflict, a mentoring case, a mistake. Small is fine. A mid-sized, real story beats a dramatic, vague one.</li>
<li>Fill in the template lines with <b>your</b> facts. Leave a line blank rather than invent a number.</li>
<li>Say it aloud for 2 minutes and trim. Then write the question tags next to it (for example: conflict story also answers "influence without authority").</li>
<li>Check confidentiality: no client names, no secrets, nothing your NDA forbids. "A telecom billing system" is enough.</li>
</ul>
<p>Common mistakes: a long Situation and a tiny Action; saying only "we"; a hero story with no teammates; blaming; and a failure story with no learning. Interviewers like <b>honest, specific, modest</b>.</p>
<p><b>When to use / when not:</b> use the template for any "Tell me about a time..." question and rehearse until the structure is automatic. Do not memorise the sample word for word and do not borrow its details; if a detail is not true for you, it should not be in your answer.</p>`,
        hi: `<p><b>Analogy:</b> tailor तुम्हें paper pattern देता है, तैयार shirt नहीं। कपड़ा तुम खुद अपने नाप से काटते हो। नीचे के templates <b>patterns</b> हैं; samples <b>mannequin पर एक demonstration shirt</b> हैं। वो shape और length दिखाते हैं, पर <b>वो तुम्हारी history नहीं हैं</b>। कभी किसी sample को ऐसे मत बोलो जैसे वो तुम्हारे साथ हुआ हो।</p>
<p><b>इस section को कैसे use करें (30 से 40 मिनट, कागज़ पर या notes file में):</b></p>
<ul>
<li>अपने 11 सालों से <b>चार असली moments</b> चुनो: एक incident, एक conflict, एक mentoring case, एक mistake। छोटा भी चलेगा। Mid-size असली story, dramatic पर vague story से बेहतर है।</li>
<li>Template की lines <b>अपने</b> facts से भरो। Number बनाने से बेहतर है line खाली छोड़ दो।</li>
<li>2 मिनट ज़ोर से बोलो और छोटा करो। फिर उसके बगल में question tags लिखो (जैसे: conflict story "influence without authority" का भी answer देती है)।</li>
<li>Confidentiality check करो: client names नहीं, secrets नहीं, कुछ भी जो NDA मना करे नहीं। "एक telecom billing system" काफ़ी है।</li>
</ul>
<p>आम गलतियाँ: Situation लंबी और Action छोटी; सिर्फ़ "we" बोलना; teammates के बिना hero story; blame करना; और learning के बिना failure story। Interviewers को <b>honest, specific, modest</b> पसंद आता है।</p>
<p><b>When to use / when not:</b> किसी भी "Tell me about a time..." सवाल के लिए template use करो और तब तक rehearse करो जब तक structure automatic न हो जाए। Sample को शब्द-दर-शब्द याद मत करो और उसकी details मत उधार लो; अगर कोई detail तुम्हारे लिए सच नहीं है तो वो तुम्हारे answer में नहीं होनी चाहिए।</p>`,
        hg: `<p><b>Analogy:</b> tailor tumhe paper pattern deta hai, tayyar shirt nahi. Kapda tum khud apne naap se kaatte ho. Neeche ke templates <b>patterns</b> hain; samples <b>mannequin par ek demonstration shirt</b> hain. Woh shape aur length dikhate hain, par <b>woh tumhari history nahi hain</b>. Kabhi kisi sample ko aise mat bolo jaise woh tumhare saath hua ho.</p>
<p><b>Is section ko kaise use karein (30 se 40 minute, kagaz par ya notes file mein):</b></p>
<ul>
<li>Apne 11 saalon se <b>chaar asli moments</b> chuno: ek incident, ek conflict, ek mentoring case, ek mistake. Chhota bhi chalega. Mid-size asli story, dramatic par vague story se behtar hai.</li>
<li>Template ki lines <b>apne</b> facts se bharo. Number banane se behtar hai line khaali chhod do.</li>
<li>2 minute zor se bolo aur chhota karo. Phir uske baju question tags likho (jaise: conflict story "influence without authority" ka bhi answer deti hai).</li>
<li>Confidentiality check karo: client names nahi, secrets nahi, kuch bhi jo NDA mana kare nahi. "Ek telecom billing system" kaafi hai.</li>
</ul>
<p>Aam galtiyan: Situation lambi aur Action chhoti; sirf "we" bolna; teammates ke bina hero story; blame karna; aur learning ke bina failure story. Interviewers ko <b>honest, specific, modest</b> pasand aata hai.</p>
<p><b>When to use / when not:</b> kisi bhi "Tell me about a time..." sawaal ke liye template use karo aur tab tak rehearse karo jab tak structure automatic na ho jaaye. Sample ko shabd-ba-shabd yaad mat karo aur uski details udhaar mat lo; agar koi detail tumhare liye sach nahi hai to woh tumhare answer mein nahi honi chahiye.</p>`
      },
      code: [
        {
          lang: "text",
          caption: {
            en: "Template (fill in with your own facts; leave a line empty rather than invent a number)",
            hi: "Template (अपने facts से भरो; number बनाने से बेहतर है line खाली छोड़ो)",
            hg: "Template (apne facts se bharo; number banane se behtar hai line khaali chhodo)"
          },
          src: `QUESTION TAGS: [which questions can this story answer?]

SITUATION (1-2 sentences): [system/product, team size, what was at stake]
TASK (1 sentence):         [what was YOUR responsibility?]
ACTION (3-5 steps):        1. [what I did first, and why]
                           2. [what I did next]
                           3. [who I involved / asked / told]
                           4. [the hard choice and the trade-off I accepted]
RESULT (1-2 sentences):    [what changed; a number only if you truly have one]
LEARNING (1 sentence):     [what I do differently now]
CONFIDENTIALITY CHECK:     [no client names, no secrets, NDA okay]`,
          check: "none"
        },
        {
          lang: "text",
          caption: {
            en: "Sample, incident — Sample — replace with your own (invented demonstration; not the learner's history)",
            hi: "Sample, incident — Sample — replace with your own (बनाई हुई demonstration; learner की history नहीं)",
            hg: "Sample, incident — Sample — replace with your own (banayi hui demonstration; learner ki history nahi)"
          },
          src: `SAMPLE - REPLACE WITH YOUR OWN. Invented for demonstration only.

SITUATION: Our order API started timing out on a weekend evening. Support tickets were rising.
TASK:      I was on call, so I took the incident commander role.
ACTION:    1. I posted in the incident channel: "I am IC. Priya checks the database, Arjun checks the last deploy."
           2. Arjun found a deploy 40 minutes earlier; we rolled it back first, root cause later.
           3. I sent a short update to support every 30 minutes, even when the update was "no change yet".
           4. When errors dropped, I stayed on for another 30 minutes to watch before closing.
RESULT:    Service recovered; support had one clear message to send customers.
LEARNING:  We added a missing alert and a rule that large migrations ship with a rollback note.`,
          check: "none"
        },
        {
          lang: "text",
          caption: {
            en: "Sample, conflict — Sample — replace with your own (invented demonstration; not the learner's history)",
            hi: "Sample, conflict — Sample — replace with your own (बनाई हुई demonstration; learner की history नहीं)",
            hg: "Sample, conflict — Sample — replace with your own (banayi hui demonstration; learner ki history nahi)"
          },
          src: `SAMPLE - REPLACE WITH YOUR OWN. Invented for demonstration only.

SITUATION: Two senior developers disagreed on caching in a reporting service: one wanted a distributed cache, one wanted in-memory only.
TASK:      As the lead I had to unblock the decision without picking a winner by rank.
ACTION:    1. I asked each to write down their goal and constraint, and we agreed latency and operational cost were what mattered.
           2. We ran a half-day prototype with real query sizes and measured both.
           3. I wrote a one-page ADR with the numbers, the choice, and when we would revisit it.
           4. One of them still disagreed, so we agreed to disagree and commit and review after one quarter.
RESULT:    We shipped on time, and both developers stayed engaged because the decision was based on data.
LEARNING:  I now ask for the goal behind the opinion first.`,
          check: "none"
        },
        {
          lang: "text",
          caption: {
            en: "Sample, mentoring — Sample — replace with your own (invented demonstration; not the learner's history)",
            hi: "Sample, mentoring — Sample — replace with your own (बनाई हुई demonstration; learner की history नहीं)",
            hg: "Sample, mentoring — Sample — replace with your own (banayi hui demonstration; learner ki history nahi)"
          },
          src: `SAMPLE - REPLACE WITH YOUR OWN. Invented for demonstration only.

SITUATION: A junior developer was stuck on EF Core queries and his pull requests came back with the same comments each week.
TASK:      Help him become independent, not just fix his tickets.
ACTION:    1. In our 1:1 I asked what part felt hard; he said reading generated SQL.
           2. We paired once on logging the SQL, then I gave him a small query task and stayed out of the keyboard.
           3. I turned my repeated review comments into a short checklist we both used.
           4. After a month I handed him a small feature end to end and reviewed only the design.
RESULT:    His PRs needed fewer rounds, and he started reviewing others' queries.
LEARNING:  Asking questions first works better than giving the answer.`,
          check: "none"
        },
        {
          lang: "text",
          caption: {
            en: "Sample, failure — Sample — replace with your own (invented demonstration; not the learner's history)",
            hi: "Sample, failure — Sample — replace with your own (बनाई हुई demonstration; learner की history नहीं)",
            hg: "Sample, failure — Sample — replace with your own (banayi hui demonstration; learner ki history nahi)"
          },
          src: `SAMPLE - REPLACE WITH YOUR OWN. Invented for demonstration only.

SITUATION: I estimated a data migration as "two days" without asking who owned the legacy data.
TASK:      I owned the estimate and the delivery date I had promised.
ACTION:    1. When data quality problems appeared, I told my manager on day two, not day five.
           2. I re-estimated with a range, listed the unknowns, and proposed moving one low-value report out of scope.
           3. I asked the data owner to join a short daily check.
RESULT:    The migration finished later than my first promise, but the stakeholders had no surprises.
LEARNING:  I now give ranges, name assumptions, and check data ownership before I commit to a date.`,
          check: "none"
        }
      ]
    },
    {
      id: "estimation",
      depth: "detailed",
      title: {
        en: "Estimation: why it is uncertain, story points vs hours, PERT",
        hi: "Estimation: ये uncertain क्यों है, story points vs hours, PERT",
        hg: "Estimation: yeh uncertain kyon hai, story points vs hours, PERT"
      },
      body: {
        en: `<p><b>Analogy:</b> "How long from Pune to Mumbai?" The honest answer is "<b>about 3 hours, 4 if the Ghat is jammed, 2.5 if the expressway is clear</b>". Nobody says "exactly 3:07". Software is the same road with more unknown turns, so an estimate is a <b>range with a most-likely value</b>, not a promise.</p>
<p><b>Why estimates are uncertain:</b> requirements change, we find unknown work only after starting (the "unknown unknowns"), people are pulled into other things, and humans are usually optimistic about their own tasks (the planning fallacy). Early in a project the range is wide; it narrows as you learn. That is why small, early slices and quick prototypes are worth it.</p>
<p><b>Story points vs hours vs no estimates:</b></p>
<ul>
<li><b>Story points:</b> a relative size (often 1, 2, 3, 5, 8, 13) agreed by the team. Good for comparing work and for velocity; weak if managers convert them into hours or compare teams.</li>
<li><b>Hours or days:</b> easy to understand and fine for small, known tasks; people tend to treat them as a commitment and be surprised when they are wrong.</li>
<li><b>No-estimates style:</b> slice work into similar small items and count them (throughput, cycle time). Works when items are small and steady; it still needs a forecast, just from a different measure.</li>
<li>There is no winner. Choose the one the team will use <b>honestly</b>, and explain how you would adapt to the company's way.</li>
</ul>
<p><b>Three-point (PERT) estimate:</b> ask for three numbers: <b>O</b> (optimistic), <b>M</b> (most likely), <b>P</b> (pessimistic). The expected value is <b>(O + 4M + P) / 6</b>, and a rough spread is <b>(P - O) / 6</b>. PERT came from a 1950s US Navy project; today treat it as a simple, honest way to <i>show</i> uncertainty, not as exact maths. For a list of tasks, add the expected values; to combine the spreads add the <i>squares</i> (variances) and take the square root, which assumes tasks are independent (often not quite true).</p>
<p><b>How to say it:</b> "My estimate is about 5 days, best case 2, worst case 12. The risk is the third-party API; I will know more after a one-day spike."</p>
<p><b>When to use / when not:</b> use ranges and PERT when the work has real unknowns or when a stakeholder needs a date. For tiny, well-understood tasks a single number is fine, and PERT adds ceremony. Never give a single number under pressure without saying the assumptions.</p>`,
        hi: `<p><b>Analogy:</b> "Pune से Mumbai कितनी देर?" Honest answer है "<b>लगभग 3 घंटे, Ghat में jam हो तो 4, expressway खाली हो तो 2.5</b>"। कोई नहीं कहता "ठीक 3:07"। Software वही रास्ता है पर अनजान मोड़ ज़्यादा हैं, इसलिए estimate एक <b>range है जिसमें सबसे likely value होती है</b>, promise नहीं।</p>
<p><b>Estimates uncertain क्यों होते हैं:</b> requirements बदलती हैं, अनजाना काम शुरू करने के बाद ही मिलता है ("unknown unknowns"), लोग दूसरे कामों में खिंच जाते हैं, और इंसान अपने tasks को लेकर आम तौर पर optimistic होते हैं (planning fallacy)। Project की शुरुआत में range चौड़ी होती है; सीखते-सीखते narrow होती है। इसीलिए छोटे, जल्दी के slices और quick prototypes काम के हैं।</p>
<p><b>Story points vs hours vs no estimates:</b></p>
<ul>
<li><b>Story points:</b> relative size (अक्सर 1, 2, 3, 5, 8, 13) जिस पर team agree करती है। काम compare करने और velocity के लिए अच्छे; कमज़ोर तब जब managers उन्हें hours में बदलें या teams की तुलना करें।</li>
<li><b>Hours या days:</b> समझने में आसान और छोटे, जाने-पहचाने tasks के लिए ठीक; लोग इन्हें commitment मान लेते हैं और गलत होने पर हैरान होते हैं।</li>
<li><b>No-estimates style:</b> काम को एक जैसे छोटे items में काटो और गिनो (throughput, cycle time)। तब चलता है जब items छोटे और steady हों; forecast फिर भी चाहिए, बस किसी दूसरे measure से।</li>
<li>कोई winner नहीं है। वो चुनो जिसे team <b>honestly</b> use करे, और बताओ कि company के तरीके में कैसे adapt करोगे।</li>
</ul>
<p><b>Three-point (PERT) estimate:</b> तीन numbers माँगो: <b>O</b> (optimistic), <b>M</b> (most likely), <b>P</b> (pessimistic)। Expected value है <b>(O + 4M + P) / 6</b>, और मोटा spread है <b>(P - O) / 6</b>। PERT 1950 के दशक के एक US Navy project से आया; आज इसे uncertainty <i>दिखाने</i> का simple, honest तरीका मानो, exact maths नहीं। Tasks की list के लिए expected values जोड़ो; spreads को मिलाने के लिए उनके <i>squares</i> (variances) जोड़ो और square root लो, जो मानता है कि tasks independent हैं (अक्सर पूरी तरह सच नहीं)।</p>
<p><b>कैसे बोलें:</b> "मेरा estimate लगभग 5 दिन है, best case 2, worst case 12। Risk third-party API है; एक दिन की spike के बाद ज़्यादा पता चलेगा।"</p>
<p><b>When to use / when not:</b> जब काम में असली unknowns हों या stakeholder को date चाहिए, तब ranges और PERT use करो। छोटे, अच्छे से समझे tasks के लिए एक number ठीक है, और PERT सिर्फ़ ceremony जोड़ता है। Pressure में assumptions बताए बिना एक single number मत दो।</p>`,
        hg: `<p><b>Analogy:</b> "Pune se Mumbai kitni der?" Honest answer hai "<b>lagbhag 3 ghante, Ghat mein jam ho to 4, expressway khaali ho to 2.5</b>". Koi nahi kehta "theek 3:07". Software wahi raasta hai par anjaan mod zyada hain, isliye estimate ek <b>range hai jisme sabse likely value hoti hai</b>, promise nahi.</p>
<p><b>Estimates uncertain kyon hote hain:</b> requirements badalti hain, anjaana kaam shuru karne ke baad hi milta hai ("unknown unknowns"), log doosre kaamon mein khinch jaate hain, aur insaan apne tasks ko lekar aam taur par optimistic hote hain (planning fallacy). Project ki shuruaat mein range chaudi hoti hai; seekhte-seekhte narrow hoti hai. Isiliye chhote, jaldi ke slices aur quick prototypes kaam ke hain.</p>
<p><b>Story points vs hours vs no estimates:</b></p>
<ul>
<li><b>Story points:</b> relative size (aksar 1, 2, 3, 5, 8, 13) jis par team agree karti hai. Kaam compare karne aur velocity ke liye achhe; kamzor tab jab managers unhe hours mein badlein ya teams ki tulna karein.</li>
<li><b>Hours ya days:</b> samajhne mein aasaan aur chhote, jaane-pehchaane tasks ke liye theek; log inhe commitment maan lete hain aur galat hone par hairaan hote hain.</li>
<li><b>No-estimates style:</b> kaam ko ek jaise chhote items mein kaato aur ginte (throughput, cycle time). Tab chalta hai jab items chhote aur steady hon; forecast phir bhi chahiye, bas kisi doosre measure se.</li>
<li>Koi winner nahi hai. Woh chuno jise team <b>honestly</b> use kare, aur batao ki company ke tareeke mein kaise adapt karoge.</li>
</ul>
<p><b>Three-point (PERT) estimate:</b> teen numbers maango: <b>O</b> (optimistic), <b>M</b> (most likely), <b>P</b> (pessimistic). Expected value hai <b>(O + 4M + P) / 6</b>, aur mota spread hai <b>(P - O) / 6</b>. PERT 1950 ke dashak ke ek US Navy project se aaya; aaj ise uncertainty <i>dikhane</i> ka simple, honest tareeka mano, exact maths nahi. Tasks ki list ke liye expected values jodo; spreads ko milane ke liye unke <i>squares</i> (variances) jodo aur square root lo, jo maanta hai ki tasks independent hain (aksar poori tarah sach nahi).</p>
<p><b>Kaise bolein:</b> "Mera estimate lagbhag 5 din hai, best case 2, worst case 12. Risk third-party API hai; ek din ki spike ke baad zyada pata chalega."</p>
<p><b>When to use / when not:</b> jab kaam mein asli unknowns hon ya stakeholder ko date chahiye, tab ranges aur PERT use karo. Chhote, achhe se samjhe tasks ke liye ek number theek hai, aur PERT sirf ceremony jodta hai. Pressure mein assumptions bataye bina ek single number mat do.</p>`
      },
      code: [
        {
          caption: {
            en: "PERT for one task, in days (O = 2, M = 4, P = 12): the expected value is pulled up by the long tail",
            hi: "एक task के लिए PERT, days में (O = 2, M = 4, P = 12): long tail expected value को ऊपर खींचती है",
            hg: "Ek task ke liye PERT, days mein (O = 2, M = 4, P = 12): long tail expected value ko upar kheenchti hai"
          },
          src: `using System.Globalization;

double Expected(double opt, double likely, double pess) => (opt + 4 * likely + pess) / 6;
double Spread(double opt, double pess) => (pess - opt) / 6;
string F(double v) => v.ToString("0.0", CultureInfo.InvariantCulture);

double o = 2, m = 4, p = 12;
Console.WriteLine("PERT expected: " + F(Expected(o, m, p)) + " days");
Console.WriteLine("Spread:        " + F(Spread(o, p)) + " days");
Console.WriteLine("Plain average: " + F((o + m + p) / 3) + " days");`,
          check: "run",
          expected: `PERT expected: 5.0 days
Spread:        1.7 days
Plain average: 6.0 days`
        }
      ]
    },
    {
      id: "forecast-and-saying-no",
      depth: "detailed",
      title: {
        en: "Forecasting with velocity ranges, communicating uncertainty, saying no",
        hi: "Velocity ranges से forecasting, uncertainty बताना, no बोलना",
        hg: "Velocity ranges se forecasting, uncertainty batana, no bolna"
      },
      body: {
        en: `<p><b>Analogy:</b> a kirana owner who sells 40, 50 and 60 packets on three Sundays does not promise "exactly 50 next Sunday". He plans for <b>a range</b> and keeps some spare stock. A team's <b>velocity</b> (points finished per sprint) is the same kind of number: it varies, so forecast with a range.</p>
<p><b>Forecast with a range:</b> take the last 5 to 8 sprints; use the <b>slowest</b>, <b>average</b> and <b>fastest</b> velocity. Sprints needed = <b>ceiling</b>(remaining points / velocity). Slow velocity gives the late date, fast velocity the early date, and the average gives the "likely" one. Whole sprints only: 4.2 sprints means 5. Say all three: "likely 6 sprints, between 5 and 8".</p>
<p><b>Communicate uncertainty well:</b></p>
<ul>
<li>Give a <b>range and a confidence</b>, not a single date: "about 80% sure by end of October".</li>
<li>Name the <b>assumptions and risks</b> (team size, scope not growing, the external API).</li>
<li>Update early when the range changes. A small early warning is better than a big late surprise.</li>
<li>Do not turn a forecast into a promise, and do not sandbag (hide a lot of padding) either. Be transparent.</li>
</ul>
<p><b>Saying no, with options:</b> "No" alone feels like blocking; "<b>Yes, if...</b>" gives choices. Typical levers: <b>cut or phase scope</b>, <b>move the date</b>, <b>add people</b> (often helps less than expected for late work, and it adds onboarding cost), or <b>accept a named risk or lower quality</b> (say the cost out loud). Ask "what is driving this date?" first; sometimes a launch event, sometimes only a guess, and the answer changes the options.</p>
<p><b>Example sentence:</b> "I cannot fit all five features by the 30th. I can deliver the top three with good quality, or all five with higher risk of bugs. Which do you prefer?"</p>
<p><b>When to use / when not:</b> velocity forecasting works when the team and sprint length are stable and the stories are of similar size. It is weak for a brand-new team, a changing team or work that is mostly research. In those cases use shorter checkpoints and re-forecast often.</p>`,
        hi: `<p><b>Analogy:</b> kirana owner जो तीन Sundays पर 40, 50 और 60 packets बेचता है वो "अगले Sunday ठीक 50" का promise नहीं करता। वो <b>range</b> के लिए plan करता है और थोड़ा extra stock रखता है। Team की <b>velocity</b> (हर sprint में पूरे हुए points) इसी तरह का number है: बदलता रहता है, इसलिए range से forecast करो।</p>
<p><b>Range से forecast:</b> पिछले 5 से 8 sprints लो; <b>सबसे slow</b>, <b>average</b> और <b>सबसे fast</b> velocity use करो। Sprints needed = <b>ceiling</b>(बचे points / velocity)। Slow velocity late date देती है, fast velocity early date, और average "likely" वाली। सिर्फ़ पूरे sprints: 4.2 sprints का मतलब 5। तीनों बोलो: "likely 6 sprints, 5 से 8 के बीच"।</p>
<p><b>Uncertainty अच्छे से बताना:</b></p>
<ul>
<li>एक date की जगह <b>range और confidence</b> दो: "लगभग 80% sure कि October के end तक"।</li>
<li><b>Assumptions और risks</b> बताओ (team size, scope न बढ़ना, external API)।</li>
<li>Range बदले तो जल्दी update करो। छोटी early warning, बड़े late surprise से बेहतर है।</li>
<li>Forecast को promise मत बनाओ, और sandbag भी मत करो (बहुत सारा padding छुपाना)। Transparent रहो।</li>
</ul>
<p><b>Options के साथ no बोलना:</b> अकेला "No" blocking जैसा लगता है; "<b>Yes, if...</b>" choices देता है। आम levers: <b>scope cut या phase करना</b>, <b>date आगे करना</b>, <b>लोग जोड़ना</b> (late काम में अक्सर उम्मीद से कम मदद करता है, और onboarding cost जोड़ता है), या <b>named risk या कम quality accept करना</b> (cost ज़ोर से बोलो)। पहले पूछो "ये date किस वजह से है?"; कभी launch event होता है, कभी सिर्फ़ अंदाज़ा, और जवाब से options बदलते हैं।</p>
<p><b>Example वाक्य:</b> "मैं 30 तारीख तक सारे पाँच features नहीं डाल सकता। मैं top तीन अच्छी quality से दे सकता हूँ, या पाँचों ज़्यादा bugs के risk के साथ। आप क्या prefer करेंगे?"</p>
<p><b>When to use / when not:</b> velocity forecasting तब चलता है जब team और sprint length stable हों और stories लगभग एक size की हों। Brand-new team, बदलती team या ज़्यादातर research वाले काम में कमज़ोर है। उन cases में छोटे checkpoints रखो और बार-बार re-forecast करो।</p>`,
        hg: `<p><b>Analogy:</b> kirana owner jo teen Sundays par 40, 50 aur 60 packets bechta hai woh "agle Sunday theek 50" ka promise nahi karta. Woh <b>range</b> ke liye plan karta hai aur thoda extra stock rakhta hai. Team ki <b>velocity</b> (har sprint mein poore hue points) isi tarah ka number hai: badalta rehta hai, isliye range se forecast karo.</p>
<p><b>Range se forecast:</b> pichhle 5 se 8 sprints lo; <b>sabse slow</b>, <b>average</b> aur <b>sabse fast</b> velocity use karo. Sprints needed = <b>ceiling</b>(bache points / velocity). Slow velocity late date deti hai, fast velocity early date, aur average "likely" wali. Sirf poore sprints: 4.2 sprints ka matlab 5. Teeno bolo: "likely 6 sprints, 5 se 8 ke beech".</p>
<p><b>Uncertainty achhe se batana:</b></p>
<ul>
<li>Ek date ki jagah <b>range aur confidence</b> do: "lagbhag 80% sure ki October ke end tak".</li>
<li><b>Assumptions aur risks</b> batao (team size, scope na badhna, external API).</li>
<li>Range badle to jaldi update karo. Chhoti early warning, bade late surprise se behtar hai.</li>
<li>Forecast ko promise mat banao, aur sandbag bhi mat karo (bahut saara padding chhupana). Transparent raho.</li>
</ul>
<p><b>Options ke saath no bolna:</b> akela "No" blocking jaisa lagta hai; "<b>Yes, if...</b>" choices deta hai. Aam levers: <b>scope cut ya phase karna</b>, <b>date aage karna</b>, <b>log jodna</b> (late kaam mein aksar ummeed se kam madad karta hai, aur onboarding cost jodta hai), ya <b>named risk ya kam quality accept karna</b> (cost zor se bolo). Pehle poochho "yeh date kis wajah se hai?"; kabhi launch event hota hai, kabhi sirf andaaza, aur jawab se options badalte hain.</p>
<p><b>Example vaakya:</b> "Main 30 tareekh tak saare paanch features nahi daal sakta. Main top teen achhi quality se de sakta hoon, ya paanchon zyada bugs ke risk ke saath. Aap kya prefer karenge?"</p>
<p><b>When to use / when not:</b> velocity forecasting tab chalta hai jab team aur sprint length stable hon aur stories lagbhag ek size ki hon. Brand-new team, badalti team ya zyaadatar research waale kaam mein kamzor hai. Un cases mein chhote checkpoints rakho aur baar-baar re-forecast karo.</p>`
      },
      code: [
        {
          caption: {
            en: "Sprints needed for 60 remaining points at slow, average and fast velocity (integer ceiling division)",
            hi: "60 बचे points के लिए slow, average और fast velocity पर कितने sprints (integer ceiling division)",
            hg: "60 bache points ke liye slow, average aur fast velocity par kitne sprints (integer ceiling division)"
          },
          src: `int SprintsNeeded(int remaining, int velocity) => (remaining + velocity - 1) / velocity;

int remaining = 60;
var velocities = new (string Name, int Points)[] { ("slow", 8), ("average", 10), ("fast", 12) };

foreach (var v in velocities)
    Console.WriteLine($"{v.Name} ({v.Points}/sprint): {SprintsNeeded(remaining, v.Points)} sprints");`,
          check: "run",
          expected: `slow (8/sprint): 8 sprints
average (10/sprint): 6 sprints
fast (12/sprint): 5 sprints`
        }
      ]
    },
    {
      id: "conflict-and-reviews",
      depth: "detailed",
      title: {
        en: "Handling conflict and code review culture",
        hi: "Conflict handle करना और code review culture",
        hg: "Conflict handle karna aur code review culture"
      },
      body: {
        en: `<p><b>Analogy:</b> two drivers argue about the route to the airport. Shouting does not help; <b>opening the maps app and comparing the times does</b>. Technical disagreements are the same: move from "I think" to "here is what we measured".</p>
<p><b>Technical disagreements, step by step:</b></p>
<ul>
<li><b>Understand the goal behind each opinion.</b> Often both want the same thing (fast, safe, cheap) with different fears.</li>
<li><b>Agree on the criteria</b> (latency, cost, team skill, time) before comparing options.</li>
<li><b>Use data</b>: a measurement, a small <b>prototype or spike</b>, or an example from production logs.</li>
<li><b>Write the decision down</b> as an <b>ADR</b> (Day 15): context, options, decision, consequences, and when to revisit.</li>
<li><b>Disagree and commit:</b> once decided, everyone backs it, including the person who lost. The phrase is popularised by Amazon, and it works only if people were truly heard first.</li>
<li>If it stays stuck, escalate <b>the decision, not the person</b>, with both options and a recommendation.</li>
</ul>
<p><b>Personal conflict:</b> talk privately and early, describe the behaviour and its effect ("in the last two reviews the comments felt personal to me"), ask for their view, and agree on one small change. Do not talk about someone to others before talking to them.</p>
<p><b>Code review culture</b> (the full flow and checks are on Day 21; here is the people side):</p>
<ul>
<li><b>Tone:</b> comment on the code, not the person; ask questions ("what happens if the list is empty?"); give a reason; praise good work too.</li>
<li><b>Blocking vs non-blocking:</b> mark what must change before merge (bug, security, data loss, broken contract) and label the rest as suggestions or nitpicks ("nit:", "optional:"). Do not block a merge on style a linter can enforce.</li>
<li><b>Response time:</b> agree a team norm, for example a first response within one working day, so work does not wait. Small PRs make this possible.</li>
<li><b>Models the behaviour:</b> as TL, your own PRs get reviewed too, and you accept comments gracefully.</li>
<li>Handle a long review thread by <b>moving to a quick call</b> and writing the outcome back in the PR.</li>
</ul>
<p><b>When to use / when not:</b> prototype and measure when the decision is costly to reverse; for small, easily reversed choices decide quickly and move on, otherwise you waste the team's time. Do not use "disagree and commit" to silence concerns about safety or ethics; those need to be escalated properly.</p>`,
        hi: `<p><b>Analogy:</b> दो drivers airport के रास्ते पर बहस कर रहे हैं। चिल्लाने से कुछ नहीं होता; <b>maps app खोलकर times compare करने से होता है</b>। Technical disagreements भी ऐसे ही हैं: "मुझे लगता है" से "हमने ये measure किया" पर आओ।</p>
<p><b>Technical disagreements, step by step:</b></p>
<ul>
<li><b>हर opinion के पीछे का goal समझो।</b> अक्सर दोनों एक ही चीज़ चाहते हैं (fast, safe, cheap), बस डर अलग हैं।</li>
<li>Options compare करने से पहले <b>criteria agree करो</b> (latency, cost, team skill, time)।</li>
<li><b>Data use करो</b>: measurement, छोटा <b>prototype या spike</b>, या production logs का example।</li>
<li><b>फ़ैसला लिखो</b> <b>ADR</b> में (Day 15): context, options, decision, consequences, और कब दोबारा देखना है।</li>
<li><b>Disagree and commit:</b> फ़ैसला होने के बाद सब उसका साथ देते हैं, हारने वाला भी। ये phrase Amazon की वजह से popular हुआ, और तभी चलता है जब लोगों की बात पहले सच में सुनी गई हो।</li>
<li>अटका रहे तो <b>decision को escalate करो, person को नहीं</b>, दोनों options और एक recommendation के साथ।</li>
</ul>
<p><b>Personal conflict:</b> अकेले में और जल्दी बात करो, behaviour और उसका असर बताओ ("पिछले दो reviews में comments मुझे personal लगे"), उनका view पूछो, और एक छोटे बदलाव पर agree करो। किसी से बात करने से पहले दूसरों से उसके बारे में बात मत करो।</p>
<p><b>Code review culture</b> (पूरा flow और checks Day 21 में हैं; यहाँ लोगों वाला पहलू):</p>
<ul>
<li><b>Tone:</b> code पर comment करो, person पर नहीं; सवाल पूछो ("list खाली हो तो क्या होगा?"); reason दो; अच्छे काम की तारीफ़ भी करो।</li>
<li><b>Blocking vs non-blocking:</b> जो merge से पहले बदलना ज़रूरी है उसे mark करो (bug, security, data loss, टूटा contract) और बाकी को suggestions या nitpicks लिखो ("nit:", "optional:")। जिस style को linter enforce कर सकता है उस पर merge block मत करो।</li>
<li><b>Response time:</b> team norm agree करो, जैसे एक working day में पहला response, ताकि काम रुके नहीं। छोटे PRs इसे possible बनाते हैं।</li>
<li><b>खुद model बनो:</b> TL के तौर पर तुम्हारे अपने PRs भी review होते हैं, और तुम comments को graciously लेते हो।</li>
<li>लंबा review thread हो तो <b>quick call पर जाओ</b> और नतीजा PR में लिख दो।</li>
</ul>
<p><b>When to use / when not:</b> जब decision को पलटना महँगा हो तब prototype और measure करो; छोटे, आसानी से पलटने वाले choices में जल्दी decide करो और आगे बढ़ो, वरना team का time खराब होता है। "Disagree and commit" से safety या ethics की चिंताओं को चुप मत कराओ; उन्हें ठीक से escalate करना चाहिए।</p>`,
        hg: `<p><b>Analogy:</b> do drivers airport ke raaste par bahas kar rahe hain. Chillane se kuch nahi hota; <b>maps app kholkar times compare karne se hota hai</b>. Technical disagreements bhi aise hi hain: "mujhe lagta hai" se "humne yeh measure kiya" par aao.</p>
<p><b>Technical disagreements, step by step:</b></p>
<ul>
<li><b>Har opinion ke peechhe ka goal samjho.</b> Aksar dono ek hi cheez chahte hain (fast, safe, cheap), bas darr alag hain.</li>
<li>Options compare karne se pehle <b>criteria agree karo</b> (latency, cost, team skill, time).</li>
<li><b>Data use karo</b>: measurement, chhota <b>prototype ya spike</b>, ya production logs ka example.</li>
<li><b>Faisla likho</b> <b>ADR</b> mein (Day 15): context, options, decision, consequences, aur kab dobara dekhna hai.</li>
<li><b>Disagree and commit:</b> faisla hone ke baad sab uska saath dete hain, harne wala bhi. Yeh phrase Amazon ki wajah se popular hua, aur tabhi chalta hai jab logon ki baat pehle sach mein suni gayi ho.</li>
<li>Atka rahe to <b>decision ko escalate karo, person ko nahi</b>, dono options aur ek recommendation ke saath.</li>
</ul>
<p><b>Personal conflict:</b> akele mein aur jaldi baat karo, behaviour aur uska asar batao ("pichhle do reviews mein comments mujhe personal lage"), unka view poochho, aur ek chhote badlaav par agree karo. Kisi se baat karne se pehle doosron se uske baare mein baat mat karo.</p>
<p><b>Code review culture</b> (poora flow aur checks Day 21 mein hain; yahan logon wala pehlu):</p>
<ul>
<li><b>Tone:</b> code par comment karo, person par nahi; sawaal poochho ("list khaali ho to kya hoga?"); reason do; achhe kaam ki taareef bhi karo.</li>
<li><b>Blocking vs non-blocking:</b> jo merge se pehle badalna zaroori hai use mark karo (bug, security, data loss, toota contract) aur baaki ko suggestions ya nitpicks likho ("nit:", "optional:"). Jis style ko linter enforce kar sakta hai us par merge block mat karo.</li>
<li><b>Response time:</b> team norm agree karo, jaise ek working day mein pehla response, taaki kaam ruke nahi. Chhote PRs ise possible banate hain.</li>
<li><b>Khud model bano:</b> TL ke taur par tumhare apne PRs bhi review hote hain, aur tum comments ko graciously lete ho.</li>
<li>Lamba review thread ho to <b>quick call par jao</b> aur nateeja PR mein likh do.</li>
</ul>
<p><b>When to use / when not:</b> jab decision ko palatna mehnga ho tab prototype aur measure karo; chhote, aasaani se palatne waale choices mein jaldi decide karo aur aage badho, warna team ka time kharab hota hai. "Disagree and commit" se safety ya ethics ki chintaon ko chup mat karao; unhe theek se escalate karna chahiye.</p>`
      },
      code: [
        {
          lang: "text",
          caption: {
            en: "A short ADR for a disagreement (fill in; keep it to one page)",
            hi: "Disagreement के लिए छोटा ADR (भरो; एक page में रखो)",
            hg: "Disagreement ke liye chhota ADR (bharo; ek page mein rakho)"
          },
          src: `ADR-[number]: [short decision title]
Status:       proposed | accepted | superseded
Context:      [the problem, the constraints, who is affected]
Options:      A. [option, one line]   B. [option, one line]
Evidence:     [measurement / prototype result / link to logs]
Decision:     [what we chose and why, in 2-3 sentences]
Consequences: [what gets easier, what gets harder, what we accept]
Revisit when: [date or trigger, e.g. "after one quarter" or "if traffic doubles"]
Dissent:      [who disagreed, and that we agreed to commit]`,
          check: "none"
        },
        {
          lang: "text",
          caption: {
            en: "Review comment labels: what blocks the merge and what does not (examples)",
            hi: "Review comment labels: क्या merge रोकता है और क्या नहीं (examples)",
            hg: "Review comment labels: kya merge rokta hai aur kya nahi (examples)"
          },
          src: `blocking: This query concatenates user input into SQL. Can we use a parameter? (Day 26)
blocking: If the payment call times out we charge twice. Can we add an idempotency key?
question: What happens when the list is empty? I could not see it in the tests.
suggestion: A guard clause here would reduce nesting. Happy either way.
nit: typo in the method name. Not blocking.
praise: Nice test names, they read like a spec.`,
          check: "none"
        }
      ]
    },
    {
      id: "mentoring-delegation",
      depth: "detailed",
      title: {
        en: "Mentoring and delegation: 1:1s, growth plans, not taking the keyboard",
        hi: "Mentoring और delegation: 1:1s, growth plans, keyboard न पकड़ना",
        hg: "Mentoring aur delegation: 1:1s, growth plans, keyboard na pakadna"
      },
      body: {
        en: `<p><b>Analogy:</b> teaching a child to ride a cycle. First you hold the seat and run alongside; then you let go for a few metres; then you just watch from the gate. If you keep holding the seat, <b>the child never learns</b>, and if you let go too early they fall. Mentoring is choosing the right amount of hold for this person, on this task.</p>
<p><b>Situational leadership</b> (Hersey and Blanchard) gives a simple map. Match your style to the person's <b>skill and confidence for that task</b>:</p>
<ul>
<li><b>New and keen (low skill):</b> <b>directing</b>: clear steps, close check-ins.</li>
<li><b>Learning but wobbly:</b> <b>coaching</b>: explain why, invite questions, give feedback often.</li>
<li><b>Skilled but unsure:</b> <b>supporting</b>: ask what they think, encourage, let them decide.</li>
<li><b>Skilled and confident:</b> <b>delegating</b>: agree on the outcome and step back.</li>
</ul>
<p>The same person can need different styles for different tasks. It is a thinking aid, not a science, so use it lightly.</p>
<p><b>1:1s:</b> regular (often weekly or fortnightly), <b>their agenda first</b>, then yours. Ask: what is blocking you, what do you want to learn, how is workload, what feedback do you have for me. Keep short notes and follow up on what you promised.</p>
<p><b>Growth plan:</b> pick one or two goals for a quarter (for example "own a feature end to end", "lead a design review"), a few concrete steps, and a check date. Stretch assignments with support beat generic training lists.</p>
<p><b>Delegation:</b> give the <b>outcome, the why, the boundaries and the deadline</b>, not a step-by-step script. Agree check-ins, then let them choose the how. Your comment on the result is feedback, not a rewrite.</p>
<p><b>Do not take the keyboard:</b> when a junior is slow, it is tempting to fix it yourself. It is faster today and costs you every week afterwards. Pair, ask questions ("what have you tried?"), and let them type. Take over only for a real emergency, and explain what you did afterwards.</p>
<p><b>When to use / when not:</b> use coaching when time allows learning. In a production fire, switch to directing (clear instructions now, teach later). Delegating a task that is far beyond someone's current skill with no support is neglect, not trust.</p>`,
        hi: `<p><b>Analogy:</b> बच्चे को cycle सिखाना। पहले तुम seat पकड़कर साथ दौड़ते हो; फिर कुछ मीटर छोड़ देते हो; फिर gate से बस देखते हो। अगर seat पकड़े रहो तो <b>बच्चा कभी सीखता नहीं</b>, और बहुत जल्दी छोड़ दो तो वो गिरता है। Mentoring इस person के लिए, इस task पर, सही मात्रा की पकड़ चुनना है।</p>
<p><b>Situational leadership</b> (Hersey और Blanchard) एक simple map देती है। अपना style person की <b>उस task के लिए skill और confidence</b> से match करो:</p>
<ul>
<li><b>नया और उत्साही (कम skill):</b> <b>directing</b>: साफ़ steps, close check-ins।</li>
<li><b>सीख रहा है पर डगमगा रहा है:</b> <b>coaching</b>: why समझाओ, सवाल बुलाओ, feedback अक्सर दो।</li>
<li><b>Skilled पर unsure:</b> <b>supporting</b>: पूछो वो क्या सोचते हैं, encourage करो, decide करने दो।</li>
<li><b>Skilled और confident:</b> <b>delegating</b>: outcome पर agree करो और पीछे हटो।</li>
</ul>
<p>एक ही person को अलग tasks के लिए अलग styles चाहिए हो सकते हैं। ये सोचने का सहारा है, science नहीं, इसलिए हल्के से use करो।</p>
<p><b>1:1s:</b> regular (अक्सर weekly या fortnightly), <b>पहले उनका agenda</b>, फिर तुम्हारा। पूछो: क्या रोक रहा है, क्या सीखना है, workload कैसा है, मेरे लिए क्या feedback है। छोटे notes रखो और जो promise किया उस पर follow up करो।</p>
<p><b>Growth plan:</b> एक quarter के लिए एक या दो goals चुनो (जैसे "एक feature end to end own करना", "design review lead करना"), कुछ concrete steps, और check date। Support के साथ stretch assignments, generic training lists से बेहतर हैं।</p>
<p><b>Delegation:</b> <b>outcome, why, boundaries और deadline</b> दो, step-by-step script नहीं। Check-ins agree करो, फिर उन्हें how चुनने दो। Result पर तुम्हारा comment feedback है, rewrite नहीं।</p>
<p><b>Keyboard मत पकड़ो:</b> junior slow हो तो खुद fix करने का मन करता है। आज ये तेज़ है और उसके बाद हर हफ़्ते तुम्हें महँगा पड़ता है। Pair करो, सवाल पूछो ("तुमने क्या try किया?"), और उन्हें type करने दो। असली emergency में ही take over करो, और बाद में बताओ कि क्या किया।</p>
<p><b>When to use / when not:</b> जब time हो और सीखना possible हो तब coaching use करो। Production की आग में directing पर जाओ (अभी साफ़ instructions, सिखाना बाद में)। जो task किसी की मौजूदा skill से बहुत आगे हो उसे बिना support delegate करना trust नहीं, लापरवाही है।</p>`,
        hg: `<p><b>Analogy:</b> bachche ko cycle sikhana. Pehle tum seat pakadkar saath daudte ho; phir kuch meter chhod dete ho; phir gate se bas dekhte ho. Agar seat pakde raho to <b>bachcha kabhi seekhta nahi</b>, aur bahut jaldi chhod do to woh girta hai. Mentoring is person ke liye, is task par, sahi maatra ki pakad chunna hai.</p>
<p><b>Situational leadership</b> (Hersey aur Blanchard) ek simple map deti hai. Apna style person ki <b>us task ke liye skill aur confidence</b> se match karo:</p>
<ul>
<li><b>Naya aur utsaahi (kam skill):</b> <b>directing</b>: saaf steps, close check-ins.</li>
<li><b>Seekh raha hai par dagmaga raha hai:</b> <b>coaching</b>: why samjhao, sawaal bulao, feedback aksar do.</li>
<li><b>Skilled par unsure:</b> <b>supporting</b>: poochho woh kya sochte hain, encourage karo, decide karne do.</li>
<li><b>Skilled aur confident:</b> <b>delegating</b>: outcome par agree karo aur peechhe hato.</li>
</ul>
<p>Ek hi person ko alag tasks ke liye alag styles chahiye ho sakte hain. Yeh sochne ka sahara hai, science nahi, isliye halke se use karo.</p>
<p><b>1:1s:</b> regular (aksar weekly ya fortnightly), <b>pehle unka agenda</b>, phir tumhara. Poochho: kya rok raha hai, kya seekhna hai, workload kaisa hai, mere liye kya feedback hai. Chhote notes rakho aur jo promise kiya us par follow up karo.</p>
<p><b>Growth plan:</b> ek quarter ke liye ek ya do goals chuno (jaise "ek feature end to end own karna", "design review lead karna"), kuch concrete steps, aur check date. Support ke saath stretch assignments, generic training lists se behtar hain.</p>
<p><b>Delegation:</b> <b>outcome, why, boundaries aur deadline</b> do, step-by-step script nahi. Check-ins agree karo, phir unhe how chunne do. Result par tumhara comment feedback hai, rewrite nahi.</p>
<p><b>Keyboard mat pakdo:</b> junior slow ho to khud fix karne ka mann karta hai. Aaj yeh tez hai aur uske baad har hafte tumhe mehnga padta hai. Pair karo, sawaal poochho ("tumne kya try kiya?"), aur unhe type karne do. Asli emergency mein hi take over karo, aur baad mein batao ki kya kiya.</p>
<p><b>When to use / when not:</b> jab time ho aur seekhna possible ho tab coaching use karo. Production ki aag mein directing par jao (abhi saaf instructions, sikhana baad mein). Jo task kisi ki maujooda skill se bahut aage ho use bina support delegate karna trust nahi, laparwaahi hai.</p>`
      },
      code: [
        {
          lang: "text",
          caption: {
            en: "A simple 1:1 agenda and a one-quarter growth plan (templates; fill in with the real person and goals)",
            hi: "एक simple 1:1 agenda और एक quarter का growth plan (templates; असली person और goals से भरो)",
            hg: "Ek simple 1:1 agenda aur ek quarter ka growth plan (templates; asli person aur goals se bharo)"
          },
          src: `1:1 AGENDA (30 min)
1. Their topics first: [what is on your mind?]
2. Blockers: [what is slowing you down that I can remove?]
3. Learning: [what do you want to get better at?]
4. Feedback both ways: [one thing I should do more or less of?]
5. Actions: [who does what by when]

GROWTH PLAN - [name] - [quarter]
Goal:        [e.g. own one feature end to end]
Steps:       [1. design doc review with me  2. pair on the hard part  3. present demo]
Support:     [what I will do: reviews, intro to the right people, time protected]
Check date:  [date]  How we will know: [observable sign, not a score]`,
          check: "none"
        }
      ]
    },
    {
      id: "stakeholders",
      depth: "detailed",
      title: {
        en: "Stakeholder management: translating tech, managing up, status updates, risk registers",
        hi: "Stakeholder management: tech को translate करना, managing up, status updates, risk registers",
        hg: "Stakeholder management: tech ko translate karna, managing up, status updates, risk registers"
      },
      body: {
        en: `<p><b>Analogy:</b> a doctor does not explain the whole biology to the family in the waiting room. He says: "<b>The operation went fine. Next 24 hours are the risk. Here is what we watch.</b>" Stakeholders (product, business, support, your manager) want the same: <b>what happened, what it means for them, what you need from them</b>.</p>
<p><b>Translate technology into business terms:</b></p>
<ul>
<li>"We need to refactor the payment module" becomes "<b>Releases in this area take 3 weeks and break often; a 2-week cleanup should bring that down</b>" (only if you can support the claim).</li>
<li>Talk in <b>time, money, risk and customer impact</b>. Avoid jargon; if you must use a term, explain it in one line.</li>
<li>Give a <b>recommendation with options</b>, not only a problem.</li>
</ul>
<p><b>Managing up:</b> no surprises. Bring bad news <b>early</b> with a plan. Know what your manager is judged on and help them look prepared. Ask for decisions with a deadline ("I need a yes or no by Thursday to hold the date").</p>
<p><b>Status updates</b> (short, regular, same format): progress against the goal, what is next, <b>risks and blockers</b>, and the <b>ask</b>. Use plain colours only if you explain them. A weekly 5-line email beats a monthly 20-slide deck.</p>
<p><b>Risk register:</b> a small table of what could go wrong: the risk, likelihood, impact, an owner, a mitigation, and a trigger. Review it in team meetings and remove risks when they pass or are fixed. It makes uncertainty visible and shared.</p>
<p>Other habits: write down decisions and who made them, keep a list of stakeholders and what each cares about, and say "I don't know yet, I will find out by Wednesday" instead of guessing.</p>
<p><b>When to use / when not:</b> match the detail to the audience: executives want the headline and the ask; engineers want specifics. Do not hide a real problem to look good, and do not flood people with raw technical detail they did not ask for.</p>`,
        hi: `<p><b>Analogy:</b> doctor waiting room में परिवार को पूरी biology नहीं समझाता। वो कहता है: "<b>Operation ठीक रहा। अगले 24 घंटे risk के हैं। हम ये देखेंगे।</b>" Stakeholders (product, business, support, तुम्हारे manager) भी यही चाहते हैं: <b>क्या हुआ, उनके लिए इसका क्या मतलब है, तुम्हें उनसे क्या चाहिए</b>।</p>
<p><b>Technology को business की भाषा में translate करो:</b></p>
<ul>
<li>"हमें payment module refactor करना है" बनता है "<b>इस area में releases को 3 हफ़्ते लगते हैं और अक्सर टूटते हैं; 2 हफ़्ते की सफ़ाई इसे कम करनी चाहिए</b>" (सिर्फ़ तब जब claim का support हो)।</li>
<li><b>Time, money, risk और customer impact</b> में बात करो। Jargon से बचो; कोई term ज़रूरी हो तो एक line में समझाओ।</li>
<li>सिर्फ़ problem नहीं, <b>options के साथ recommendation</b> दो।</li>
</ul>
<p><b>Managing up:</b> कोई surprise नहीं। बुरी खबर <b>जल्दी</b> plan के साथ लाओ। जानो कि तुम्हारा manager किस पर judge होता है और उन्हें prepared दिखने में मदद करो। Decisions deadline के साथ माँगो ("date पकड़े रखने के लिए गुरुवार तक yes या no चाहिए")।</p>
<p><b>Status updates</b> (छोटे, regular, एक ही format): goal के सामने progress, आगे क्या, <b>risks और blockers</b>, और <b>ask</b>। Colours तभी use करो जब उनका मतलब समझाओ। हफ़्ते की 5 line की email, महीने के 20 slides के deck से बेहतर है।</p>
<p><b>Risk register:</b> क्या गलत हो सकता है उसकी छोटी table: risk, likelihood, impact, एक owner, mitigation, और trigger। Team meetings में review करो और risks जब निकल जाएँ या fix हो जाएँ तो हटा दो। ये uncertainty को visible और shared बनाता है।</p>
<p>और आदतें: decisions और उन्हें किसने लिया लिखो, stakeholders की list रखो कि किसे क्या फ़िक्र है, और अंदाज़ा लगाने की जगह कहो "अभी पता नहीं, बुधवार तक पता करता हूँ"।</p>
<p><b>When to use / when not:</b> detail audience के हिसाब से रखो: executives को headline और ask चाहिए; engineers को specifics। अच्छा दिखने के लिए असली problem मत छुपाओ, और ऐसी raw technical detail की बाढ़ मत लाओ जो किसी ने माँगी नहीं।</p>`,
        hg: `<p><b>Analogy:</b> doctor waiting room mein parivaar ko poori biology nahi samjhata. Woh kehta hai: "<b>Operation theek raha. Agle 24 ghante risk ke hain. Hum yeh dekhenge.</b>" Stakeholders (product, business, support, tumhare manager) bhi yahi chahte hain: <b>kya hua, unke liye iska kya matlab hai, tumhe unse kya chahiye</b>.</p>
<p><b>Technology ko business ki bhasha mein translate karo:</b></p>
<ul>
<li>"Hamein payment module refactor karna hai" banta hai "<b>Is area mein releases ko 3 hafte lagte hain aur aksar tootte hain; 2 hafte ki safai ise kam karni chahiye</b>" (sirf tab jab claim ka support ho).</li>
<li><b>Time, money, risk aur customer impact</b> mein baat karo. Jargon se bacho; koi term zaroori ho to ek line mein samjhao.</li>
<li>Sirf problem nahi, <b>options ke saath recommendation</b> do.</li>
</ul>
<p><b>Managing up:</b> koi surprise nahi. Buri khabar <b>jaldi</b> plan ke saath lao. Jaano ki tumhara manager kis par judge hota hai aur unhe prepared dikhne mein madad karo. Decisions deadline ke saath maango ("date pakde rakhne ke liye guruvaar tak yes ya no chahiye").</p>
<p><b>Status updates</b> (chhote, regular, ek hi format): goal ke saamne progress, aage kya, <b>risks aur blockers</b>, aur <b>ask</b>. Colours tabhi use karo jab unka matlab samjhao. Hafte ki 5 line ki email, mahine ke 20 slides ke deck se behtar hai.</p>
<p><b>Risk register:</b> kya galat ho sakta hai uski chhoti table: risk, likelihood, impact, ek owner, mitigation, aur trigger. Team meetings mein review karo aur risks jab nikal jaayein ya fix ho jaayein to hata do. Yeh uncertainty ko visible aur shared banata hai.</p>
<p>Aur aadatein: decisions aur unhe kisne liya likho, stakeholders ki list rakho ki kise kya fikr hai, aur andaaza lagane ki jagah kaho "abhi pata nahi, budhvaar tak pata karta hoon".</p>
<p><b>When to use / when not:</b> detail audience ke hisaab se rakho: executives ko headline aur ask chahiye; engineers ko specifics. Achha dikhne ke liye asli problem mat chhupao, aur aisi raw technical detail ki baadh mat lao jo kisi ne maangi nahi.</p>`
      },
      code: [
        {
          lang: "text",
          caption: {
            en: "A weekly status update and a risk register row (templates; replace the bracketed parts with your real project)",
            hi: "Weekly status update और risk register की एक row (templates; bracket वाले हिस्से अपने असली project से बदलो)",
            hg: "Weekly status update aur risk register ki ek row (templates; bracket waale hisse apne asli project se badlo)"
          },
          src: `STATUS - [project] - week of [date]
Goal:      [one line]
Done:      [2-3 bullets, in business words]
Next:      [2-3 bullets]
Risks:     [top risk, owner, what we are doing about it]
Ask:       [the decision or help you need, and by when]

RISK REGISTER ROW
Risk:        [what could go wrong]
Likelihood:  low | medium | high      Impact: low | medium | high
Owner:       [name]
Mitigation:  [what we do now to reduce it]
Trigger:     [the sign that it is happening]  Status: open | closed`,
          check: "none"
        }
      ]
    },
    {
      id: "incident-handling",
      depth: "detailed",
      title: {
        en: "Production incidents: incident commander, communication, blameless post-mortem",
        hi: "Production incidents को संभालना: incident commander, communication, blameless post-mortem",
        hg: "Production incidents: incident commander, communication, blameless post-mortem"
      },
      body: {
        en: `<p><b>Analogy:</b> a train derails near a station. The station master does not inspect the track himself. He <b>takes charge of the whole response</b>: stops other trains, informs control, sends the repair team, and tells passengers what is happening every few minutes. That is the <b>incident commander</b>: a person who coordinates, not the one who fixes everything.</p>
<p><b>During the incident:</b></p>
<ul>
<li><b>One incident commander (IC)</b> decides and coordinates. Others take clear roles: someone investigates, someone communicates, someone scribes a timeline. The IC does not need to be the most senior or the best debugger.</li>
<li><b>Mitigate first, find the root cause later.</b> Roll back, turn off the feature flag, scale up or fail over to stop the pain (Day 21 covers rollback and flags). Deep debugging while customers suffer is a common mistake.</li>
<li><b>Communicate on a cadence:</b> post an update every 30 minutes (or whatever you agreed) even if it says "no change". Say what we know, what we do not know, and when the next update comes. One channel, one source of truth.</li>
<li><b>Keep a timeline</b> as you go: times, actions, decisions. It makes the post-mortem factual.</li>
<li>Close properly: confirm recovery with metrics, announce it, and keep watching for a short while.</li>
</ul>
<p><b>Blameless post-mortem</b> (the idea is described in Google's SRE book and was championed by John Allspaw at Etsy):</p>
<ul>
<li>Assume people acted sensibly with what they knew. Ask <b>how the system allowed this</b>, not who to blame. Blame teaches people to hide mistakes.</li>
<li>Write: summary, impact, timeline, what went well, what went badly, where we got lucky, <b>action items with owners and dates</b>.</li>
<li>Share it widely. Track the actions to the end, otherwise it is only a document.</li>
</ul>
<p><b>Caution on "5 whys":</b> it is a handy way to start, but it tends to follow one chain and stop at "human error" or one root cause. Real incidents usually have several contributing factors (a missing alert, a risky deploy, unclear ownership), so look for <b>many causes and fixes</b>, not one culprit.</p>
<p><b>When to use / when not:</b> use the full process (IC, cadence, post-mortem) for customer-facing or data-risk incidents. For a small, quick fix, a short note is enough; a heavy ceremony for every blip tires the team.</p>`,
        hi: `<p><b>Analogy:</b> station के पास train derail हो गई। Station master खुद track नहीं जाँचता। वो <b>पूरे response की कमान लेता है</b>: दूसरी trains रोकता है, control को बताता है, repair team भेजता है, और हर कुछ मिनट पर passengers को बताता है कि क्या हो रहा है। यही <b>incident commander</b> है: जो coordinate करता है, सब कुछ खुद fix करने वाला नहीं।</p>
<p><b>Incident के दौरान:</b></p>
<ul>
<li><b>एक incident commander (IC)</b> decide और coordinate करता है। बाकी साफ़ roles लेते हैं: कोई investigate करे, कोई communicate करे, कोई timeline लिखे। IC का सबसे senior या सबसे अच्छा debugger होना ज़रूरी नहीं।</li>
<li><b>पहले mitigate, root cause बाद में।</b> Rollback करो, feature flag बंद करो, scale up या failover करो ताकि तकलीफ़ रुके (Day 21 में rollback और flags हैं)। Customers परेशान हों और तुम गहरी debugging करो, ये आम गलती है।</li>
<li><b>Cadence पर communicate करो:</b> हर 30 मिनट (या जो agree हुआ) update डालो, चाहे उसमें "कोई बदलाव नहीं" हो। बताओ क्या पता है, क्या नहीं पता, और अगला update कब। एक channel, एक source of truth।</li>
<li>साथ-साथ <b>timeline रखो</b>: times, actions, decisions। इससे post-mortem factual बनता है।</li>
<li>ठीक से close करो: metrics से recovery confirm करो, announce करो, और थोड़ी देर watch करते रहो।</li>
</ul>
<p><b>Blameless post-mortem</b> (idea Google की SRE book में बताया गया है और Etsy में John Allspaw ने इसे आगे बढ़ाया):</p>
<ul>
<li>मानो कि लोगों ने जो पता था उसके हिसाब से समझदारी से काम किया। पूछो <b>system ने ये कैसे होने दिया</b>, किसे blame करें ये नहीं। Blame लोगों को गलतियाँ छुपाना सिखाता है।</li>
<li>लिखो: summary, impact, timeline, क्या अच्छा गया, क्या बुरा गया, कहाँ किस्मत से बचे, <b>owners और dates के साथ action items</b>।</li>
<li>इसे ख़ूब share करो। Actions को आख़िर तक track करो, वरना ये सिर्फ़ document है।</li>
</ul>
<p><b>"5 whys" पर सावधानी:</b> शुरू करने का handy तरीका है, पर ये एक ही chain follow करके "human error" या एक root cause पर रुक जाता है। असली incidents में आम तौर पर कई contributing factors होते हैं (छूटा alert, risky deploy, unclear ownership), इसलिए <b>कई causes और fixes</b> ढूँढो, एक दोषी नहीं।</p>
<p><b>When to use / when not:</b> customer-facing या data-risk incidents के लिए पूरा process (IC, cadence, post-mortem) use करो। छोटे, quick fix के लिए छोटा note काफ़ी है; हर blip पर भारी ceremony team को थका देती है।</p>`,
        hg: `<p><b>Analogy:</b> station ke paas train derail ho gayi. Station master khud track nahi jaanchta. Woh <b>poore response ki kamaan leta hai</b>: doosri trains rokta hai, control ko batata hai, repair team bhejta hai, aur har kuch minute par passengers ko batata hai ki kya ho raha hai. Yahi <b>incident commander</b> hai: jo coordinate karta hai, sab kuch khud fix karne wala nahi.</p>
<p><b>Incident ke dauraan:</b></p>
<ul>
<li><b>Ek incident commander (IC)</b> decide aur coordinate karta hai. Baaki saaf roles lete hain: koi investigate kare, koi communicate kare, koi timeline likhe. IC ka sabse senior ya sabse achha debugger hona zaroori nahi.</li>
<li><b>Pehle mitigate, root cause baad mein.</b> Rollback karo, feature flag band karo, scale up ya failover karo taaki taklif ruke (Day 21 mein rollback aur flags hain). Customers pareshaan hon aur tum gehri debugging karo, yeh aam galti hai.</li>
<li><b>Cadence par communicate karo:</b> har 30 minute (ya jo agree hua) update daalo, chahe usme "koi badlaav nahi" ho. Batao kya pata hai, kya nahi pata, aur agla update kab. Ek channel, ek source of truth.</li>
<li>Saath-saath <b>timeline rakho</b>: times, actions, decisions. Isse post-mortem factual banta hai.</li>
<li>Theek se close karo: metrics se recovery confirm karo, announce karo, aur thodi der watch karte raho.</li>
</ul>
<p><b>Blameless post-mortem</b> (idea Google ki SRE book mein bataya gaya hai aur Etsy mein John Allspaw ne ise aage badhaya):</p>
<ul>
<li>Maano ki logon ne jo pata tha uske hisaab se samajhdaari se kaam kiya. Poochho <b>system ne yeh kaise hone diya</b>, kise blame karein yeh nahi. Blame logon ko galtiyan chhupana sikhata hai.</li>
<li>Likho: summary, impact, timeline, kya achha gaya, kya bura gaya, kahan kismat se bache, <b>owners aur dates ke saath action items</b>.</li>
<li>Ise khoob share karo. Actions ko aakhir tak track karo, warna yeh sirf document hai.</li>
</ul>
<p><b>"5 whys" par saavdhaani:</b> shuru karne ka handy tareeka hai, par yeh ek hi chain follow karke "human error" ya ek root cause par ruk jaata hai. Asli incidents mein aam taur par kai contributing factors hote hain (chhoota alert, risky deploy, unclear ownership), isliye <b>kai causes aur fixes</b> dhundho, ek doshi nahi.</p>
<p><b>When to use / when not:</b> customer-facing ya data-risk incidents ke liye poora process (IC, cadence, post-mortem) use karo. Chhote, quick fix ke liye chhota note kaafi hai; har blip par bhaari ceremony team ko thaka deti hai.</p>`
      },
      code: [
        {
          caption: {
            en: "Incident time maths with fixed timestamps (no clock): time to acknowledge and time to recover",
            hi: "Fixed timestamps के साथ incident time maths (clock नहीं): acknowledge होने और recover होने का time",
            hg: "Fixed timestamps ke saath incident time maths (clock nahi): acknowledge hone aur recover hone ka time"
          },
          src: `var started = new DateTime(2026, 3, 14, 18, 5, 0);
var acknowledged = new DateTime(2026, 3, 14, 18, 12, 0);
var recovered = new DateTime(2026, 3, 14, 19, 5, 0);

Console.WriteLine("Time to acknowledge: " + (acknowledged - started).TotalMinutes + " min");
Console.WriteLine("Time to recover:     " + (recovered - started).TotalMinutes + " min");`,
          check: "run",
          expected: `Time to acknowledge: 7 min
Time to recover:     60 min`
        },
        {
          lang: "text",
          caption: {
            en: "Incident update message and blameless post-mortem skeleton (templates; fill in with your real incident)",
            hi: "Incident update message और blameless post-mortem skeleton (templates; अपने असली incident से भरो)",
            hg: "Incident update message aur blameless post-mortem skeleton (templates; apne asli incident se bharo)"
          },
          src: `UPDATE [time] - [service] - status: investigating | mitigated | resolved
Impact:      [who is affected, how badly]
Known:       [what we know]
Unknown:     [what we do not know yet]
Doing:       [who is doing what]
Next update: [time]

POST-MORTEM (blameless)
Summary / Impact / Detection:   [what, who, how long, how we noticed]
Timeline:                       [time - event - decision]
What went well / badly / lucky: [3 short lists]
Contributing factors:           [several; not "human error"]
Action items:                   [action - owner - date - how we check it is done]`,
          check: "none"
        }
      ]
    },
    {
      id: "tech-debt",
      depth: "detailed",
      title: {
        en: "Tech debt: make it visible, prioritise it, defend the time",
        hi: "Tech debt: visible बनाओ, prioritise करो, time की रक्षा करो",
        hg: "Tech debt: visible banao, prioritise karo, time ki raksha karo"
      },
      body: {
        en: `<p><b>Analogy:</b> a leaking tap in the kitchen. Fixing it today takes ten minutes and a washer. Ignoring it for a year wastes water, rots the cabinet and costs a plumber and a carpenter. Tech debt is the same: <b>a shortcut that gives speed now and charges interest later</b>. Some debt is a smart loan (a deliberate shortcut to hit a launch, with a plan to repay); some is just a mess.</p>
<p><b>Step 1, make it visible.</b> Keep a <b>tech-debt list</b> in the backlog: what it is, where, what it costs (incidents, slow releases, onboarding pain), and a rough size. Debt nobody can see cannot be prioritised. Attach evidence: bugs, DORA numbers (Day 21), time lost.</p>
<p><b>Step 2, prioritise by cost of delay and risk.</b> Ask: what does it cost <b>each month we wait</b>, how risky is it (security, data loss, outage), and how big is the fix? A simple method is <b>WSJF, Weighted Shortest Job First</b>, from the SAFe framework: <b>score = cost of delay / job size</b>. Cost of delay is often scored as value plus time criticality plus risk reduction. Higher score first. It is a conversation tool, not an oracle: the numbers are rough team judgements.</p>
<p><b>Step 3, pay it down in a sustainable way.</b></p>
<ul>
<li><b>Boy-scout rule:</b> leave the code a little better when you touch it.</li>
<li><b>Attach to features:</b> do the refactor that makes the next feature easy, and tell the product owner why.</li>
<li><b>Reserve capacity:</b> a fixed share such as <b>20% of the sprint</b> is one popular option. It is a heuristic, not a law; a team drowning in debt may need more for a while, a healthy team less.</li>
<li><b>Dedicated project:</b> for big items (migrating off an old framework, Day 24), with a clear business case.</li>
</ul>
<p><b>Selling it to the business:</b> use their language: "<b>This module causes about two incidents a quarter and slows every feature there by a week.</b>" Do not say "the code is ugly". And be honest about trade-offs: sometimes the right decision is to <b>not</b> fix it.</p>
<p><b>When to use / when not:</b> pay down debt that is on the path of upcoming work, risky, or causing real pain. Leave stable, rarely changed code alone even if it is ugly; rewriting it has a cost and a risk with no payoff. Avoid giant "big rewrite" plans without incremental steps.</p>`,
        hi: `<p><b>Analogy:</b> kitchen में टपकता नल। आज fix करने में दस मिनट और एक washer लगता है। साल भर ignore करो तो पानी बर्बाद होता है, cabinet सड़ता है और plumber और carpenter का खर्चा आता है। Tech debt ऐसा ही है: <b>एक shortcut जो अभी speed देता है और बाद में interest वसूलता है</b>। कुछ debt समझदारी का loan है (launch पकड़ने के लिए सोचा-समझा shortcut, चुकाने के plan के साथ); कुछ सिर्फ़ गंदगी है।</p>
<p><b>Step 1, visible बनाओ।</b> Backlog में <b>tech-debt list</b> रखो: क्या है, कहाँ है, कितना महँगा है (incidents, slow releases, onboarding की तकलीफ़), और मोटा size। जो debt कोई देख नहीं सकता उसे prioritise नहीं कर सकते। Evidence जोड़ो: bugs, DORA numbers (Day 21), खोया हुआ time।</p>
<p><b>Step 2, cost of delay और risk से prioritise करो।</b> पूछो: <b>हर महीने इंतज़ार का</b> क्या खर्चा है, कितना risky है (security, data loss, outage), और fix कितना बड़ा है? एक simple तरीका <b>WSJF, Weighted Shortest Job First</b> है, SAFe framework से: <b>score = cost of delay / job size</b>। Cost of delay को अक्सर value + time criticality + risk reduction से score करते हैं। ऊँचा score पहले। ये बातचीत का tool है, oracle नहीं: numbers team के मोटे judgements हैं।</p>
<p><b>Step 3, sustainable तरीके से चुकाओ।</b></p>
<ul>
<li><b>Boy-scout rule:</b> code छुओ तो उसे थोड़ा बेहतर छोड़ो।</li>
<li><b>Features से जोड़ो:</b> वो refactor करो जो अगला feature आसान बनाए, और product owner को बताओ क्यों।</li>
<li><b>Capacity reserve करो:</b> <b>sprint का 20%</b> जैसा fixed हिस्सा एक popular option है। ये heuristic है, कानून नहीं; debt में डूबी team को कुछ समय के लिए ज़्यादा चाहिए, healthy team को कम।</li>
<li><b>Dedicated project:</b> बड़े items के लिए (पुराने framework से migrate करना, Day 24), साफ़ business case के साथ।</li>
</ul>
<p><b>Business को बेचना:</b> उनकी भाषा में बोलो: "<b>ये module quarter में लगभग दो incidents करता है और वहाँ हर feature को एक हफ़्ता slow करता है।</b>" "code ugly है" मत कहो। और trade-offs के बारे में honest रहो: कभी सही फ़ैसला उसे <b>न</b> सुधारना होता है।</p>
<p><b>When to use / when not:</b> वो debt चुकाओ जो आने वाले काम के रास्ते में हो, risky हो, या असली तकलीफ़ दे रहा हो। Stable, कम बदलने वाले code को ugly होने पर भी छोड़ दो; उसे rewrite करने में cost और risk है और फ़ायदा नहीं। Incremental steps के बिना बड़े "big rewrite" plans से बचो।</p>`,
        hg: `<p><b>Analogy:</b> kitchen mein tapakta nal. Aaj fix karne mein das minute aur ek washer lagta hai. Saal bhar ignore karo to paani barbaad hota hai, cabinet sadta hai aur plumber aur carpenter ka kharcha aata hai. Tech debt aisa hi hai: <b>ek shortcut jo abhi speed deta hai aur baad mein interest vasoolta hai</b>. Kuch debt samajhdaari ka loan hai (launch pakadne ke liye socha-samjha shortcut, chukane ke plan ke saath); kuch sirf gandagi hai.</p>
<p><b>Step 1, visible banao.</b> Backlog mein <b>tech-debt list</b> rakho: kya hai, kahan hai, kitna mehnga hai (incidents, slow releases, onboarding ki taklif), aur mota size. Jo debt koi dekh nahi sakta use prioritise nahi kar sakte. Evidence jodo: bugs, DORA numbers (Day 21), khoya hua time.</p>
<p><b>Step 2, cost of delay aur risk se prioritise karo.</b> Poochho: <b>har mahine intezaar ka</b> kya kharcha hai, kitna risky hai (security, data loss, outage), aur fix kitna bada hai? Ek simple tareeka <b>WSJF, Weighted Shortest Job First</b> hai, SAFe framework se: <b>score = cost of delay / job size</b>. Cost of delay ko aksar value + time criticality + risk reduction se score karte hain. Ooncha score pehle. Yeh baatcheet ka tool hai, oracle nahi: numbers team ke mote judgements hain.</p>
<p><b>Step 3, sustainable tareeke se chukao.</b></p>
<ul>
<li><b>Boy-scout rule:</b> code chhuo to use thoda behtar chhodo.</li>
<li><b>Features se jodo:</b> woh refactor karo jo agla feature aasaan banaye, aur product owner ko batao kyon.</li>
<li><b>Capacity reserve karo:</b> <b>sprint ka 20%</b> jaisa fixed hissa ek popular option hai. Yeh heuristic hai, kanoon nahi; debt mein doobi team ko kuch time ke liye zyada chahiye, healthy team ko kam.</li>
<li><b>Dedicated project:</b> bade items ke liye (purane framework se migrate karna, Day 24), saaf business case ke saath.</li>
</ul>
<p><b>Business ko bechna:</b> unki bhasha mein bolo: "<b>Yeh module quarter mein lagbhag do incidents karta hai aur wahan har feature ko ek hafta slow karta hai.</b>" "code ugly hai" mat kaho. Aur trade-offs ke baare mein honest raho: kabhi sahi faisla use <b>na</b> sudharna hota hai.</p>
<p><b>When to use / when not:</b> woh debt chukao jo aane waale kaam ke raaste mein ho, risky ho, ya asli taklif de raha ho. Stable, kam badalne waale code ko ugly hone par bhi chhod do; use rewrite karne mein cost aur risk hai aur faayda nahi. Incremental steps ke bina bade "big rewrite" plans se bacho.</p>`
      },
      code: [
        {
          caption: {
            en: "WSJF ranking: cost of delay divided by job size, highest score first (tiny example)",
            hi: "WSJF ranking: cost of delay को job size से भाग, ऊँचा score पहले (छोटा example)",
            hg: "WSJF ranking: cost of delay ko job size se bhaag, ooncha score pehle (chhota example)"
          },
          src: `using System.Globalization;

var items = new (string Name, int CostOfDelay, int Size)[]
{
    ("Flaky payment tests", 8, 2),
    ("Upgrade old framework", 13, 5),
    ("Add missing alert", 5, 1),
};

foreach (var i in items.OrderByDescending(x => (double)x.CostOfDelay / x.Size))
    Console.WriteLine(i.Name + ": " + ((double)i.CostOfDelay / i.Size).ToString("0.0", CultureInfo.InvariantCulture));`,
          check: "run",
          expected: `Add missing alert: 5.0
Flaky payment tests: 4.0
Upgrade old framework: 2.6`
        },
        {
          lang: "text",
          caption: {
            en: "A tech-debt ticket that a business person can understand (template)",
            hi: "Tech-debt ticket जिसे business person समझ सके (template)",
            hg: "Tech-debt ticket jise business person samajh sake (template)"
          },
          src: `TITLE:       [plain name, e.g. "Order module: slow and fragile releases"]
PAIN TODAY:  [incidents per quarter, release time, bugs - evidence, with link]
COST OF WAIT:[what happens if we delay another quarter?]
RISK:        [security / data loss / outage / hiring - or "low"]
FIX SIZE:    [S / M / L and what we would do]
OPTIONS:     [do now | attach to feature X | defer - with the trade-off]
RECOMMENDATION: [one line]`,
          check: "none"
        }
      ]
    },
    {
      id: "hiring-and-career-talk",
      depth: "detailed",
      title: {
        en: "Hiring others, questions to ask, salary and notice-period talk",
        hi: "दूसरों को hire करना, पूछने के सवाल, salary और notice-period की बात",
        hg: "Doosron ko hire karna, poochne ke sawaal, salary aur notice-period ki baat"
      },
      body: {
        en: `<p><b>Analogy:</b> choosing a new cook for your restaurant. You do not only ask "can you cook?"; you let them <b>cook one dish</b>, watch how they handle a busy kitchen, and check whether they will get along with the team. Interviewing others as a TL is the same: structured, fair and about real work.</p>
<p><b>Interviewing others (brief):</b></p>
<ul>
<li><b>Agree the role and the signals first:</b> what must a person show to succeed here? Use the same questions and a scoring guide for each candidate, so you compare fairly.</li>
<li><b>Prefer real work:</b> read some code together, discuss a design, pair for 30 minutes. Puzzle tricks and trivia tell you little.</li>
<li><b>Be kind and clear:</b> candidates are nervous (you were too). Explain the format, give hints when they are stuck, leave time for their questions.</li>
<li><b>Watch bias:</b> do not hire a copy of yourself. Write notes <b>before</b> the debrief, and decide on evidence, not on "gut feeling".</li>
<li><b>Hire for growth and team fit as well as skill</b>; skills can be taught, honesty and curiosity are harder.</li>
</ul>
<p><b>Questions to ask the interviewer</b> (pick 3 or 4; they also show your TL thinking):</p>
<ul>
<li>"What does a TL spend a typical week on here, roughly hands-on versus leading?"</li>
<li>"What are the biggest technical or delivery problems the team has right now?"</li>
<li>"How are technical decisions made and written down?" (Do they use ADRs?)</li>
<li>"How do you handle on-call and incidents? Is there a blameless review?"</li>
<li>"What does success look like for this role after 6 months?"</li>
<li>"How does the team deal with tech debt and testing?"</li>
</ul>
<p><b>Salary and notice period (no numbers here, keep it professional):</b></p>
<ul>
<li>Do your <b>market research</b> beforehand (similar roles in your city, level and domain) and decide your range and your minimum.</li>
<li>If asked early, you can say: "I would like to understand the role and scope first; I expect a package in line with TL roles in this market. What range have you budgeted?" Let them name a range first when you can.</li>
<li>Think about the <b>whole package</b>: fixed pay, variable, benefits, learning budget, role scope, growth path, not only one number.</li>
<li><b>Notice period:</b> state it honestly, including whether it is negotiable (for example buyout or early release) only if you have checked your own contract. Do not promise what you cannot deliver.</li>
<li>Be polite and consistent; never lie about your current pay or about other offers. Companies can and do verify.</li>
</ul>
<p><b>When to use / when not:</b> ask your questions at the end, and make them specific to the company. Do not ask about salary in the first minutes of a technical round; wait for the HR or offer stage unless they ask. Avoid questions you could answer from the website.</p>`,
        hi: `<p><b>Analogy:</b> अपने restaurant के लिए नया cook चुनना। तुम सिर्फ़ "cook कर सकते हो?" नहीं पूछते; <b>एक dish बनवाते हो</b>, देखते हो कि busy kitchen कैसे संभालते हैं, और कि team के साथ निभेगी या नहीं। TL के तौर पर दूसरों को interview करना भी ऐसा ही है: structured, fair और असली काम के बारे में।</p>
<p><b>दूसरों को interview करना (संक्षेप में):</b></p>
<ul>
<li><b>पहले role और signals agree करो:</b> यहाँ सफल होने के लिए क्या दिखाना ज़रूरी है? हर candidate के लिए वही सवाल और scoring guide use करो, ताकि fair तुलना हो।</li>
<li><b>असली काम को prefer करो:</b> साथ में कुछ code पढ़ो, design discuss करो, 30 मिनट pair करो। Puzzle tricks और trivia से कम पता चलता है।</li>
<li><b>Kind और clear रहो:</b> candidates nervous होते हैं (तुम भी थे)। Format समझाओ, अटके तो hints दो, उनके सवालों के लिए time रखो।</li>
<li><b>Bias पर नज़र रखो:</b> अपनी copy को hire मत करो। Debrief से <b>पहले</b> notes लिखो, और "gut feeling" पर नहीं, evidence पर decide करो।</li>
<li><b>Skill के साथ growth और team fit के लिए भी hire करो</b>; skills सिखाई जा सकती हैं, honesty और curiosity मुश्किल हैं।</li>
</ul>
<p><b>Interviewer से पूछने के सवाल</b> (3 या 4 चुनो; ये तुम्हारी TL thinking भी दिखाते हैं):</p>
<ul>
<li>"यहाँ TL का typical हफ़्ता किस पर जाता है, लगभग hands-on बनाम leading?"</li>
<li>"Team की अभी सबसे बड़ी technical या delivery problems क्या हैं?"</li>
<li>"Technical decisions कैसे लिए और लिखे जाते हैं?" (क्या ADRs use होते हैं?)</li>
<li>"On-call और incidents कैसे handle होते हैं? क्या blameless review होता है?"</li>
<li>"6 महीने बाद इस role में success कैसी दिखती है?"</li>
<li>"Team tech debt और testing को कैसे handle करती है?"</li>
</ul>
<p><b>Salary और notice period (यहाँ numbers नहीं, professional रखो):</b></p>
<ul>
<li>पहले <b>market research</b> करो (अपने शहर, level और domain में similar roles) और अपनी range और minimum तय करो।</li>
<li>जल्दी पूछा जाए तो कह सकते हो: "मैं पहले role और scope समझना चाहूँगा; मैं इस market में TL roles के हिसाब का package expect करता हूँ। आपने कौन सी range budget की है?" जब हो सके, range पहले उन्हें बोलने दो।</li>
<li><b>पूरे package</b> के बारे में सोचो: fixed pay, variable, benefits, learning budget, role scope, growth path, सिर्फ़ एक number नहीं।</li>
<li><b>Notice period:</b> honestly बताओ, और negotiable है या नहीं (जैसे buyout या early release) ये तभी बताओ जब अपना contract check किया हो। जो deliver नहीं कर सकते उसका promise मत करो।</li>
<li>Polite और consistent रहो; अपनी current pay या दूसरे offers के बारे में कभी झूठ मत बोलो। Companies verify कर सकती हैं और करती हैं।</li>
</ul>
<p><b>When to use / when not:</b> अपने सवाल end में पूछो, और उन्हें company के लिए specific रखो। Technical round के पहले मिनटों में salary मत पूछो; HR या offer stage का इंतज़ार करो जब तक वो खुद न पूछें। ऐसे सवाल मत पूछो जिनका जवाब website से मिल जाए।</p>`,
        hg: `<p><b>Analogy:</b> apne restaurant ke liye naya cook chunna. Tum sirf "cook kar sakte ho?" nahi poochhte; <b>ek dish banwate ho</b>, dekhte ho ki busy kitchen kaise sambhalte hain, aur ki team ke saath nibhegi ya nahi. TL ke taur par doosron ko interview karna bhi aisa hi hai: structured, fair aur asli kaam ke baare mein.</p>
<p><b>Doosron ko interview karna (sankshep mein):</b></p>
<ul>
<li><b>Pehle role aur signals agree karo:</b> yahan safal hone ke liye kya dikhana zaroori hai? Har candidate ke liye wahi sawaal aur scoring guide use karo, taaki fair tulna ho.</li>
<li><b>Asli kaam ko prefer karo:</b> saath mein kuch code padho, design discuss karo, 30 minute pair karo. Puzzle tricks aur trivia se kam pata chalta hai.</li>
<li><b>Kind aur clear raho:</b> candidates nervous hote hain (tum bhi the). Format samjhao, atke to hints do, unke sawaalon ke liye time rakho.</li>
<li><b>Bias par nazar rakho:</b> apni copy ko hire mat karo. Debrief se <b>pehle</b> notes likho, aur "gut feeling" par nahi, evidence par decide karo.</li>
<li><b>Skill ke saath growth aur team fit ke liye bhi hire karo</b>; skills sikhayi ja sakti hain, honesty aur curiosity mushkil hain.</li>
</ul>
<p><b>Interviewer se poochne ke sawaal</b> (3 ya 4 chuno; yeh tumhari TL thinking bhi dikhate hain):</p>
<ul>
<li>"Yahan TL ka typical hafta kis par jaata hai, lagbhag hands-on banaam leading?"</li>
<li>"Team ki abhi sabse badi technical ya delivery problems kya hain?"</li>
<li>"Technical decisions kaise liye aur likhe jaate hain?" (Kya ADRs use hote hain?)</li>
<li>"On-call aur incidents kaise handle hote hain? Kya blameless review hota hai?"</li>
<li>"6 mahine baad is role mein success kaisi dikhti hai?"</li>
<li>"Team tech debt aur testing ko kaise handle karti hai?"</li>
</ul>
<p><b>Salary aur notice period (yahan numbers nahi, professional rakho):</b></p>
<ul>
<li>Pehle <b>market research</b> karo (apne shehar, level aur domain mein similar roles) aur apni range aur minimum tay karo.</li>
<li>Jaldi poochha jaaye to keh sakte ho: "Main pehle role aur scope samajhna chahunga; main is market mein TL roles ke hisaab ka package expect karta hoon. Aapne kaun si range budget ki hai?" Jab ho sake, range pehle unhe bolne do.</li>
<li><b>Poore package</b> ke baare mein socho: fixed pay, variable, benefits, learning budget, role scope, growth path, sirf ek number nahi.</li>
<li><b>Notice period:</b> honestly batao, aur negotiable hai ya nahi (jaise buyout ya early release) yeh tabhi batao jab apna contract check kiya ho. Jo deliver nahi kar sakte uska promise mat karo.</li>
<li>Polite aur consistent raho; apni current pay ya doosre offers ke baare mein kabhi jhooth mat bolo. Companies verify kar sakti hain aur karti hain.</li>
</ul>
<p><b>When to use / when not:</b> apne sawaal end mein poochho, aur unhe company ke liye specific rakho. Technical round ke pehle minuton mein salary mat poochho; HR ya offer stage ka intezaar karo jab tak woh khud na poochhein. Aise sawaal mat poochho jinka jawab website se mil jaaye.</p>`
      },
      code: [
        {
          lang: "text",
          caption: {
            en: "Interviewer scorecard (structured; same questions for every candidate) and your pre-interview questions list (templates)",
            hi: "Interviewer scorecard (structured; हर candidate के लिए वही सवाल) और interview से पहले की सवालों की list (templates)",
            hg: "Interviewer scorecard (structured; har candidate ke liye wahi sawaal) aur interview se pehle ki sawaalon ki list (templates)"
          },
          src: `SCORECARD - [candidate] - [role]
Signal 1: [e.g. designs a simple API sensibly]    evidence: [what they said/did]   1-4
Signal 2: [e.g. reviews code kindly and clearly]  evidence: [...]                  1-4
Signal 3: [e.g. owns a mistake and learns]        evidence: [...]                  1-4
Concerns: [specific, evidence-based]     Questions I still have: [...]
Notes written BEFORE the debrief: yes / no

MY QUESTIONS FOR THEM (choose 3-4)
1. [what does a TL do in a typical week here?]
2. [what is the hardest delivery problem right now?]
3. [how are technical decisions made and recorded?]
4. [what does success look like at 6 months?]`,
          check: "none"
        }
      ]
    },
    {
      id: "your-pitch",
      depth: "detailed",
      title: {
        en: "Your pitch: \"Tell me about yourself\" and \"Why should we hire you as TL?\"",
        hi: "तुम्हारा pitch: \"Tell me about yourself\" और \"Why should we hire you as TL?\"",
        hg: "Tumhara pitch: \"Tell me about yourself\" aur \"Why should we hire you as TL?\""
      },
      body: {
        en: `<p><b>Analogy:</b> your pitch is the <b>trailer of a film</b>, not the whole film. In 90 seconds it shows the hero, the best scenes and why you should come back to watch. You will say it at the start of almost every interview, so it must be smooth and true.</p>
<p><b>"Tell me about yourself"</b>: use <b>Present, Past, Future</b>, about 60 to 90 seconds:</p>
<ul>
<li><b>Present:</b> who you are now (role, years, domain, what you are strongest at).</li>
<li><b>Past:</b> two or three highlights that show growth toward leading (not a full CV): a system you helped scale, people you helped, a problem you owned.</li>
<li><b>Future:</b> why a TL role, why this company, what you want to build.</li>
</ul>
<p><b>"Why should we hire you as TL?"</b> Three parts: <b>1) proof of technical depth</b> (your 11 years with .NET, APIs, databases, cloud), <b>2) proof you already lead</b> (mentoring, reviews, incidents, estimates, even without the title), <b>3) fit with what they need</b> (from the job description and what you learned in the interview). Add one honest sentence about growth: "I am still learning the people-management side, and I have started by..." Honesty about growth lands better than pretending you know everything.</p>
<p><b>Confidence tips for the interview:</b></p>
<ul>
<li>Speak slowly and pause; it is fine to say "let me think for a moment".</li>
<li>Your experience is real. You do not need to sound like a book; you need to sound like <b>someone who has done the work and learned from it</b>.</li>
<li>It is okay not to know. "I have not done that, but here is how I would approach it" is a strong TL answer.</li>
<li>Practise aloud, record yourself, and rehearse with a friend. English fluency improves most from saying the same short stories out loud many times.</li>
</ul>
<p><b>"Will AI replace me?"</b> and similar are in Day 27; for "Where do you see yourself in 3 years?" say something real: grow the team, own a bigger area, keep learning.</p>
<p><b>When to use / when not:</b> adapt the pitch to the company and the round (shorter for HR, more technical for engineers). Do not recite a memorised speech in a flat voice, and do not copy the sample: it is built to be replaced.</p>`,
        hi: `<p><b>Analogy:</b> तुम्हारा pitch <b>film का trailer</b> है, पूरी film नहीं। 90 seconds में ये hero, best scenes और दिखाता है कि तुम्हें वापस क्यों बुलाना चाहिए। तुम इसे लगभग हर interview की शुरुआत में बोलोगे, इसलिए ये smooth और सच होना चाहिए।</p>
<p><b>"Tell me about yourself"</b>: <b>Present, Past, Future</b> use करो, लगभग 60 से 90 seconds:</p>
<ul>
<li><b>Present:</b> अभी तुम कौन हो (role, years, domain, किसमें सबसे strong हो)।</li>
<li><b>Past:</b> दो या तीन highlights जो lead करने की तरफ़ growth दिखाएँ (पूरा CV नहीं): एक system जिसे scale कराने में मदद की, लोग जिनकी मदद की, एक problem जिसे own किया।</li>
<li><b>Future:</b> TL role क्यों, ये company क्यों, क्या बनाना चाहते हो।</li>
</ul>
<p><b>"Why should we hire you as TL?"</b> तीन हिस्से: <b>1) technical depth का proof</b> (.NET, APIs, databases, cloud के तुम्हारे 11 साल), <b>2) proof कि तुम पहले से lead करते हो</b> (mentoring, reviews, incidents, estimates, title के बिना भी), <b>3) जो उन्हें चाहिए उससे fit</b> (job description और interview में सीखी बातों से)। Growth के बारे में एक honest वाक्य जोड़ो: "People-management वाला पहलू मैं अब भी सीख रहा हूँ, और मैंने ... से शुरुआत की है।" Growth के बारे में honesty, सब कुछ जानने का दिखावा करने से बेहतर असर करती है।</p>
<p><b>Interview के लिए confidence tips:</b></p>
<ul>
<li>धीरे बोलो और pause लो; "एक moment सोचने दीजिए" कहना ठीक है।</li>
<li>तुम्हारा experience असली है। तुम्हें किताब जैसा sound करने की ज़रूरत नहीं; <b>ऐसे इंसान जैसा sound करो जिसने काम किया है और उससे सीखा है</b>।</li>
<li>न पता होना ठीक है। "मैंने ये नहीं किया, पर मैं ऐसे approach करूँगा" एक strong TL answer है।</li>
<li>ज़ोर से practise करो, खुद को record करो, और दोस्त के साथ rehearse करो। English fluency सबसे ज़्यादा तब सुधरती है जब वही छोटी stories कई बार ज़ोर से बोलो।</li>
</ul>
<p><b>"Will AI replace me?"</b> जैसे सवाल Day 27 में हैं; "3 साल में खुद को कहाँ देखते हो?" के लिए कुछ असली बोलो: team grow करना, बड़ा area own करना, सीखते रहना।</p>
<p><b>When to use / when not:</b> pitch को company और round के हिसाब से adapt करो (HR के लिए छोटा, engineers के लिए ज़्यादा technical)। रटा हुआ speech flat आवाज़ में मत सुनाओ, और sample copy मत करो: वो बदलने के लिए बना है।</p>`,
        hg: `<p><b>Analogy:</b> tumhara pitch <b>film ka trailer</b> hai, poori film nahi. 90 seconds mein yeh hero, best scenes aur dikhata hai ki tumhe wapas kyon bulana chahiye. Tum ise lagbhag har interview ki shuruaat mein bologe, isliye yeh smooth aur sach hona chahiye.</p>
<p><b>"Tell me about yourself"</b>: <b>Present, Past, Future</b> use karo, lagbhag 60 se 90 seconds:</p>
<ul>
<li><b>Present:</b> abhi tum kaun ho (role, years, domain, kisme sabse strong ho).</li>
<li><b>Past:</b> do ya teen highlights jo lead karne ki taraf growth dikhayein (poora CV nahi): ek system jise scale karane mein madad ki, log jinki madad ki, ek problem jise own kiya.</li>
<li><b>Future:</b> TL role kyon, yeh company kyon, kya banana chahte ho.</li>
</ul>
<p><b>"Why should we hire you as TL?"</b> teen hisse: <b>1) technical depth ka proof</b> (.NET, APIs, databases, cloud ke tumhare 11 saal), <b>2) proof ki tum pehle se lead karte ho</b> (mentoring, reviews, incidents, estimates, title ke bina bhi), <b>3) jo unhe chahiye usse fit</b> (job description aur interview mein seekhi baaton se). Growth ke baare mein ek honest vaakya jodo: "People-management wala pehlu main ab bhi seekh raha hoon, aur maine ... se shuruaat ki hai." Growth ke baare mein honesty, sab kuch jaanne ka dikhawa karne se behtar asar karti hai.</p>
<p><b>Interview ke liye confidence tips:</b></p>
<ul>
<li>Dheere bolo aur pause lo; "ek moment sochne dijiye" kehna theek hai.</li>
<li>Tumhara experience asli hai. Tumhe kitaab jaisa sound karne ki zaroorat nahi; <b>aise insaan jaisa sound karo jisne kaam kiya hai aur usse seekha hai</b>.</li>
<li>Na pata hona theek hai. "Maine yeh nahi kiya, par main aise approach karunga" ek strong TL answer hai.</li>
<li>Zor se practise karo, khud ko record karo, aur dost ke saath rehearse karo. English fluency sabse zyada tab sudharti hai jab wahi chhoti stories kai baar zor se bolo.</li>
</ul>
<p><b>"Will AI replace me?"</b> jaise sawaal Day 27 mein hain; "3 saal mein khud ko kahan dekhte ho?" ke liye kuch asli bolo: team grow karna, bada area own karna, seekhte rehna.</p>
<p><b>When to use / when not:</b> pitch ko company aur round ke hisaab se adapt karo (HR ke liye chhota, engineers ke liye zyada technical). Ratta hua speech flat awaaz mein mat sunao, aur sample copy mat karo: woh badalne ke liye bana hai.</p>`
      },
      code: [
        {
          lang: "text",
          caption: {
            en: "Template: Tell me about yourself (Present, Past, Future) and Why hire me as TL (fill in with your own facts)",
            hi: "Template: Tell me about yourself (Present, Past, Future) और Why hire me as TL (अपने facts से भरो)",
            hg: "Template: Tell me about yourself (Present, Past, Future) aur Why hire me as TL (apne facts se bharo)"
          },
          src: `TELL ME ABOUT YOURSELF (60-90 seconds)
Present: I am a [role] with [N] years in [.NET / domain], strongest at [2 things].
Past:    [highlight 1: what I owned and the result]
         [highlight 2: how I helped others or the team]
Future:  I want to move into a Tech Lead role because [real reason], and [company] because [specific reason].

WHY SHOULD WE HIRE YOU AS TL?
1. Technical depth:  [my strongest areas + one proof]
2. I already lead:   [mentoring / reviews / incidents / estimates I did, one concrete example]
3. Fit with you:     [what the job description and the interviewer said you need]
Growth (honest):     [one area I am still developing and what I am doing about it]`,
          check: "none"
        },
        {
          lang: "text",
          caption: {
            en: "Sample — replace with your own (a shape with placeholders, not the learner's history)",
            hi: "Sample — replace with your own (placeholders वाला shape, learner की history नहीं)",
            hg: "Sample — replace with your own (placeholders wala shape, learner ki history nahi)"
          },
          src: `SAMPLE - REPLACE WITH YOUR OWN. Placeholders in brackets must become your real facts.

Tell me about yourself:
"I am a .NET developer with [N] years of experience building [kind of systems] in [domain].
I am strongest at [API design / SQL performance / ...]. Recently I [real highlight: owned X and result],
and I have been the person who [mentors juniors / reviews designs / handles releases].
I now want to take on a Tech Lead role, where I can combine hands-on work with helping a team deliver,
and [company] interests me because [specific reason from your research]."

Why should we hire you as TL:
"You need someone who can keep the team shipping and the design sound. I bring [N] years of .NET depth,
plus practice leading without the title: [one concrete example]. From our conversation, your main challenge is
[their challenge], and I would start by [first 30-day action]. I am still growing in [honest area],
and I am working on it by [real step]."`,
          check: "none"
        }
      ]
    },
  ],
  qa: [
    {
      id: "what-is-a-tech-lead",
      depth: "short",
      q: "What is a Tech Lead, and how is it different from a senior developer, an engineering manager and an architect?",
      answer: "A TL is a senior engineer accountable for the team's technical direction and delivery, usually part hands-on. A manager owns people and careers; an architect guides design across systems.",
      meaning: {
        hi: "TL एक senior engineer है जो team की technical direction और delivery के लिए accountable है, आम तौर पर कुछ hands-on भी। Manager लोगों और careers का owner है; architect कई systems के design को guide करता है।",
        hg: "TL ek senior engineer hai jo team ki technical direction aur delivery ke liye accountable hai, aam taur par kuch hands-on bhi. Manager logon aur careers ka owner hai; architect kai systems ke design ko guide karta hai."
      },
      explain: {
        en: `<ul>
<li>Say it is context-dependent: a common split is about 50/50 hands-on and leading. Name what you would ask the company: "What does the TL own here?"</li>
<li>Senior developer: owns hard tasks and own quality. TL: also unblocks people, shapes design, talks to stakeholders.</li>
<li>Follow-up: "Will you still code?" Yes, enough to review designs and code credibly, but your output is the team's output.</li>
</ul>`,
        hi: `<ul>
<li>बोलो कि ये context पर depend करता है: आम split लगभग 50/50 hands-on और leading है। बताओ कि तुम company से क्या पूछोगे: "यहाँ TL किसका owner है?"</li>
<li>Senior developer: मुश्किल tasks और अपनी quality का owner। TL: लोगों को unblock भी करता है, design shape करता है, stakeholders से बात करता है।</li>
<li>Follow-up: "क्या तुम अब भी code करोगे?" हाँ, इतना कि designs और code credibly review कर सको, पर तुम्हारा output team का output है।</li>
</ul>`,
        hg: `<ul>
<li>Bolo ki yeh context par depend karta hai: aam split lagbhag 50/50 hands-on aur leading hai. Batao ki tum company se kya poochoge: "Yahan TL kiska owner hai?"</li>
<li>Senior developer: mushkil tasks aur apni quality ka owner. TL: logon ko unblock bhi karta hai, design shape karta hai, stakeholders se baat karta hai.</li>
<li>Follow-up: "Kya tum ab bhi code karoge?" Haan, itna ki designs aur code credibly review kar sako, par tumhara output team ka output hai.</li>
</ul>`
      }
    },
    {
      id: "star-method",
      depth: "short",
      q: "What is the STAR method and how do you prepare for behavioral questions?",
      answer: "STAR is Situation, Task, Action, Result. I prepare six to eight real stories, practise them aloud for about two minutes, and reuse each for several questions.",
      meaning: {
        hi: "STAR यानी Situation, Task, Action, Result। मैं छह से आठ असली stories तैयार करता हूँ, लगभग दो मिनट ज़ोर से practise करता हूँ, और हर story कई सवालों में reuse करता हूँ।",
        hg: "STAR yaani Situation, Task, Action, Result. Main chhe se aath asli stories tayyar karta hoon, lagbhag do minute zor se practise karta hoon, aur har story kai sawaalon mein reuse karta hoon."
      },
      explain: {
        en: `<ul>
<li>Spend about 60% of the time on Action, and say what <i>you</i> did. Add a Learning line for failures (STAR-L).</li>
<li>Tag each story with the questions it answers (conflict, failure, influence, mentoring, incident, deadline).</li>
<li>Follow-up: "What if you have no story for that question?" Use the closest real one and say so honestly, or describe how you <i>would</i> act, clearly marked as hypothetical.</li>
</ul>`,
        hi: `<ul>
<li>लगभग 60% time Action पर लगाओ, और बोलो कि <i>तुमने</i> क्या किया। Failure के लिए Learning line जोड़ो (STAR-L)।</li>
<li>हर story पर tag लगाओ कि वो किन सवालों का answer देती है (conflict, failure, influence, mentoring, incident, deadline)।</li>
<li>Follow-up: "अगर उस सवाल की कोई story न हो?" सबसे नज़दीकी असली story लो और honestly बताओ, या बताओ कि तुम <i>कैसे</i> करते, साफ़ hypothetical कहकर।</li>
</ul>`,
        hg: `<ul>
<li>Lagbhag 60% time Action par lagao, aur bolo ki <i>tumne</i> kya kiya. Failure ke liye Learning line jodo (STAR-L).</li>
<li>Har story par tag lagao ki woh kin sawaalon ka answer deti hai (conflict, failure, influence, mentoring, incident, deadline).</li>
<li>Follow-up: "Agar us sawaal ki koi story na ho?" Sabse nazdeeki asli story lo aur honestly batao, ya batao ki tum <i>kaise</i> karte, saaf hypothetical kehkar.</li>
</ul>`
      }
    },
    {
      id: "technical-disagreement",
      depth: "short",
      q: "How do you handle a technical disagreement in your team?",
      answer: "I find the goal behind each view, agree criteria, and settle it with data or a small prototype. I record the decision in an ADR, then we disagree and commit.",
      meaning: {
        hi: "मैं हर view के पीछे का goal ढूँढता हूँ, criteria agree करता हूँ, और data या छोटे prototype से सुलझाता हूँ। Decision ADR में लिखता हूँ, फिर हम disagree and commit करते हैं।",
        hg: "Main har view ke peechhe ka goal dhundhta hoon, criteria agree karta hoon, aur data ya chhote prototype se suljhata hoon. Decision ADR mein likhta hoon, phir hum disagree and commit karte hain."
      },
      explain: {
        en: `<ul>
<li>Link to Day 15 (ADRs). Keep it about the options, not the people; make sure everyone feels heard before deciding.</li>
<li>If it stays stuck, escalate the decision with both options and a recommendation, not the person.</li>
<li>Follow-up: "What if you were the one who lost?" I commit, and revisit when the agreed trigger or date arrives.</li>
</ul>`,
        hi: `<ul>
<li>Day 15 (ADRs) से जोड़ो। बात options की रखो, लोगों की नहीं; फ़ैसले से पहले पक्का करो कि सबको सुना गया।</li>
<li>अटका रहे तो decision को दोनों options और recommendation के साथ escalate करो, person को नहीं।</li>
<li>Follow-up: "अगर हारने वाले तुम हो?" मैं commit करता हूँ, और agreed trigger या date आने पर फिर देखता हूँ।</li>
</ul>`,
        hg: `<ul>
<li>Day 15 (ADRs) se jodo. Baat options ki rakho, logon ki nahi; faisle se pehle pakka karo ki sabko suna gaya.</li>
<li>Atka rahe to decision ko dono options aur recommendation ke saath escalate karo, person ko nahi.</li>
<li>Follow-up: "Agar harne wale tum ho?" Main commit karta hoon, aur agreed trigger ya date aane par phir dekhta hoon.</li>
</ul>`
      }
    },
    {
      id: "estimate-and-uncertainty",
      depth: "short",
      q: "How do you estimate work, and how do you communicate uncertainty to stakeholders?",
      answer: "I give a range with assumptions, using three-point estimates or velocity ranges, and say what could move it. I update early when it changes.",
      meaning: {
        hi: "मैं assumptions के साथ एक range देता हूँ, three-point estimates या velocity ranges से, और बताता हूँ कि क्या उसे बदल सकता है। बदलाव हो तो जल्दी update करता हूँ।",
        hg: "Main assumptions ke saath ek range deta hoon, three-point estimates ya velocity ranges se, aur batata hoon ki kya use badal sakta hai. Badlaav ho to jaldi update karta hoon."
      },
      explain: {
        en: `<ul>
<li>PERT: (O + 4M + P) / 6. Example: "about 5 days, best 2, worst 12; the risk is the third-party API."</li>
<li>Slice early, run a spike for the biggest unknown, and re-forecast every sprint as the range narrows.</li>
<li>Follow-up: "Do you pad estimates?" I show assumptions and risks openly instead of hiding padding.</li>
</ul>`,
        hi: `<ul>
<li>PERT: (O + 4M + P) / 6। Example: "लगभग 5 दिन, best 2, worst 12; risk third-party API है।"</li>
<li>जल्दी slice करो, सबसे बड़े unknown के लिए spike चलाओ, और range narrow होने पर हर sprint re-forecast करो।</li>
<li>Follow-up: "क्या तुम estimates में padding डालते हो?" मैं padding छुपाने की जगह assumptions और risks खुलकर दिखाता हूँ।</li>
</ul>`,
        hg: `<ul>
<li>PERT: (O + 4M + P) / 6. Example: "lagbhag 5 din, best 2, worst 12; risk third-party API hai."</li>
<li>Jaldi slice karo, sabse bade unknown ke liye spike chalao, aur range narrow hone par har sprint re-forecast karo.</li>
<li>Follow-up: "Kya tum estimates mein padding daalte ho?" Main padding chhupane ki jagah assumptions aur risks khulkar dikhata hoon.</li>
</ul>`
      }
    },
    {
      id: "deadline-say-no",
      depth: "short",
      q: "A stakeholder wants five features by Friday and the team can do three. What do you do?",
      answer: "I explain what drives the date, then offer options: top three with quality, a phased plan, or all five with a named risk. I let them choose with the trade-off clear.",
      meaning: {
        hi: "मैं समझाता हूँ कि date किस वजह से है, फिर options देता हूँ: top तीन अच्छी quality से, phased plan, या पाँचों named risk के साथ। Trade-off साफ़ करके उन्हें चुनने देता हूँ।",
        hg: "Main samjhata hoon ki date kis wajah se hai, phir options deta hoon: top teen achhi quality se, phased plan, ya paanchon named risk ke saath. Trade-off saaf karke unhe chunne deta hoon."
      },
      explain: {
        en: `<ul>
<li>"Yes, if..." instead of a flat "no". Levers: cut or phase scope, move the date, add people (limited help for late work), or accept a named risk.</li>
<li>Bring data: velocity range, the remaining backlog, the risks. Offer a recommendation.</li>
<li>Follow-up: "They insist on all five." Write the risk down, escalate through the agreed path, and plan a visible fallback.</li>
</ul>`,
        hi: `<ul>
<li>सीधे "no" की जगह "Yes, if...". Levers: scope cut या phase, date आगे, लोग जोड़ना (late काम में सीमित मदद), या named risk accept करना।</li>
<li>Data लाओ: velocity range, बचा backlog, risks। एक recommendation दो।</li>
<li>Follow-up: "वो पाँचों पर अड़े हैं।" Risk लिख लो, agreed रास्ते से escalate करो, और एक visible fallback plan बनाओ।</li>
</ul>`,
        hg: `<ul>
<li>Seedhe "no" ki jagah "Yes, if...". Levers: scope cut ya phase, date aage, log jodna (late kaam mein seemit madad), ya named risk accept karna.</li>
<li>Data lao: velocity range, bacha backlog, risks. Ek recommendation do.</li>
<li>Follow-up: "Woh paanchon par ade hain." Risk likh lo, agreed raaste se escalate karo, aur ek visible fallback plan banao.</li>
</ul>`
      }
    },
    {
      id: "lead-an-incident",
      depth: "short",
      q: "Walk me through how you lead a production incident.",
      answer: "I name one incident commander, assign roles, mitigate first by rolling back or disabling a flag, and post updates on a fixed cadence. Root cause and the post-mortem come after recovery.",
      meaning: {
        hi: "मैं एक incident commander तय करता हूँ, roles बाँटता हूँ, पहले rollback या flag बंद करके mitigate करता हूँ, और fixed cadence पर updates डालता हूँ। Root cause और post-mortem recovery के बाद आते हैं।",
        hg: "Main ek incident commander tay karta hoon, roles baantta hoon, pehle rollback ya flag band karke mitigate karta hoon, aur fixed cadence par updates daalta hoon. Root cause aur post-mortem recovery ke baad aate hain."
      },
      explain: {
        en: `<ul>
<li>Roles: commander, investigator, communicator, scribe. Keep a timeline. Rollback and flags are on Day 21.</li>
<li>Updates say what we know, what we do not, and the next update time, even when it is "no change".</li>
<li>Follow-up: "Who should be the IC?" Whoever is best at coordinating, not necessarily the best debugger or the most senior.</li>
</ul>`,
        hi: `<ul>
<li>Roles: commander, investigator, communicator, scribe। Timeline रखो। Rollback और flags Day 21 में हैं।</li>
<li>Updates में बताओ क्या पता है, क्या नहीं, और अगला update कब, चाहे "कोई बदलाव नहीं" हो।</li>
<li>Follow-up: "IC कौन होना चाहिए?" जो coordinate करने में सबसे अच्छा हो, ज़रूरी नहीं कि सबसे अच्छा debugger या सबसे senior हो।</li>
</ul>`,
        hg: `<ul>
<li>Roles: commander, investigator, communicator, scribe. Timeline rakho. Rollback aur flags Day 21 mein hain.</li>
<li>Updates mein batao kya pata hai, kya nahi, aur agla update kab, chahe "koi badlaav nahi" ho.</li>
<li>Follow-up: "IC kaun hona chahiye?" Jo coordinate karne mein sabse achha ho, zaroori nahi ki sabse achha debugger ya sabse senior ho.</li>
</ul>`
      }
    },
    {
      id: "blameless-postmortem",
      depth: "short",
      q: "What is a blameless post-mortem and why is it useful?",
      answer: "It is a review that asks how the system allowed the failure, not who to blame, ending in owned action items. Blame makes people hide problems.",
      meaning: {
        hi: "ये ऐसा review है जो पूछता है कि system ने failure कैसे होने दी, किसे blame करें ये नहीं, और owned action items पर खत्म होता है। Blame लोगों से problems छुपवाता है।",
        hg: "Yeh aisa review hai jo poochta hai ki system ne failure kaise hone di, kise blame karein yeh nahi, aur owned action items par khatam hota hai. Blame logon se problems chhupwata hai."
      },
      explain: {
        en: `<ul>
<li>Contents: summary, impact, timeline, what went well and badly, contributing factors, actions with owners and dates.</li>
<li>Caution on 5 whys: it can stop at one root cause or "human error". Look for several contributing factors.</li>
<li>Follow-up: "What if someone was careless?" Still look at the system first (review, alerts, training); handle real conduct issues privately, not in the post-mortem.</li>
</ul>`,
        hi: `<ul>
<li>Contents: summary, impact, timeline, क्या अच्छा और बुरा गया, contributing factors, owners और dates के साथ actions।</li>
<li>5 whys पर सावधानी: ये एक root cause या "human error" पर रुक सकता है। कई contributing factors ढूँढो।</li>
<li>Follow-up: "अगर किसी ने लापरवाही की हो?" फिर भी पहले system देखो (review, alerts, training); असली conduct issues अकेले में handle करो, post-mortem में नहीं।</li>
</ul>`,
        hg: `<ul>
<li>Contents: summary, impact, timeline, kya achha aur bura gaya, contributing factors, owners aur dates ke saath actions.</li>
<li>5 whys par saavdhaani: yeh ek root cause ya "human error" par ruk sakta hai. Kai contributing factors dhundho.</li>
<li>Follow-up: "Agar kisi ne laparwaahi ki ho?" Phir bhi pehle system dekho (review, alerts, training); asli conduct issues akele mein handle karo, post-mortem mein nahi.</li>
</ul>`
      }
    },
    {
      id: "why-hire-me-as-tl",
      depth: "short",
      q: "Why should we hire you as our Tech Lead?",
      answer: "I bring eleven years of .NET depth and I already lead through reviews, mentoring and incidents. I will help your team ship reliably, and I am open about the skills I am still growing.",
      meaning: {
        hi: "मेरे पास .NET की ग्यारह साल की depth है और मैं reviews, mentoring और incidents के ज़रिए पहले से lead करता हूँ। मैं आपकी team को reliably ship कराने में मदद करूँगा, और जो skills अभी सीख रहा हूँ उनके बारे में open हूँ।",
        hg: "Mere paas .NET ki gyarah saal ki depth hai aur main reviews, mentoring aur incidents ke zariye pehle se lead karta hoon. Main aapki team ko reliably ship karane mein madad karunga, aur jo skills abhi seekh raha hoon unke baare mein open hoon."
      },
      explain: {
        en: `<ul>
<li>Structure: technical depth, proof you already lead (one concrete example you can truly back up), fit with their needs. Use the template in the pitch section and your own facts.</li>
<li>Add one honest growth area with what you are doing about it.</li>
<li>Follow-up: "What will you do in your first 30 days?" Listen, learn the system and people, fix one small pain point, agree on goals with your manager.</li>
</ul>`,
        hi: `<ul>
<li>Structure: technical depth, proof कि तुम पहले से lead करते हो (एक concrete example जिसे सच में support कर सको), उनकी ज़रूरत से fit। Pitch section का template और अपने facts use करो।</li>
<li>एक honest growth area जोड़ो और बताओ कि उस पर क्या कर रहे हो।</li>
<li>Follow-up: "पहले 30 दिनों में क्या करोगे?" सुनो, system और लोगों को सीखो, एक छोटा pain point fix करो, manager के साथ goals agree करो।</li>
</ul>`,
        hg: `<ul>
<li>Structure: technical depth, proof ki tum pehle se lead karte ho (ek concrete example jise sach mein support kar sako), unki zaroorat se fit. Pitch section ka template aur apne facts use karo.</li>
<li>Ek honest growth area jodo aur batao ki us par kya kar rahe ho.</li>
<li>Follow-up: "Pehle 30 dinon mein kya karoge?" Suno, system aur logon ko seekho, ek chhota pain point fix karo, manager ke saath goals agree karo.</li>
</ul>`
      }
    },
    {
      id: "review-feedback-tone",
      depth: "detailed",
      q: "How do you give critical code review feedback without demotivating the author?",
      answer: "I comment on the code with a reason or a question, mark what blocks the merge, label the rest as suggestions, and praise good work. For long threads, I move to a quick call.",
      meaning: {
        hi: "मैं code पर reason या सवाल के साथ comment करता हूँ, जो merge रोकता है उसे mark करता हूँ, बाकी को suggestions लिखता हूँ, और अच्छे काम की तारीफ़ करता हूँ। लंबे threads में quick call पर जाता हूँ।",
        hg: "Main code par reason ya sawaal ke saath comment karta hoon, jo merge rokta hai use mark karta hoon, baaki ko suggestions likhta hoon, aur achhe kaam ki taareef karta hoon. Lambe threads mein quick call par jaata hoon."
      },
      explain: {
        en: `<ul>
<li>The full review flow, checks and response-time norms are on Day 21; this is the people side. Do not block merges on style a linter can enforce.</li>
<li>Follow-up: "Your own PR gets harsh comments." Say thanks, ask what is behind them, and fix or discuss calmly. Leaders model how to receive feedback.</li>
</ul>`,
        hi: `<ul>
<li>पूरा review flow, checks और response-time norms Day 21 में हैं; ये लोगों वाला पहलू है। जिस style को linter enforce कर सकता है उस पर merge block मत करो।</li>
<li>Follow-up: "तुम्हारे अपने PR पर कड़े comments आएँ।" Thanks बोलो, पूछो कि पीछे क्या है, और शांति से fix या discuss करो। Leaders दिखाते हैं कि feedback कैसे लेते हैं।</li>
</ul>`,
        hg: `<ul>
<li>Poora review flow, checks aur response-time norms Day 21 mein hain; yeh logon wala pehlu hai. Jis style ko linter enforce kar sakta hai us par merge block mat karo.</li>
<li>Follow-up: "Tumhare apne PR par kade comments aayein." Thanks bolo, poochho ki peechhe kya hai, aur shaanti se fix ya discuss karo. Leaders dikhate hain ki feedback kaise lete hain.</li>
</ul>`
      }
    },
    {
      id: "points-vs-hours",
      depth: "detailed",
      q: "Story points or hours: which do you prefer for estimating, and why?",
      answer: "It depends on the team. Points compare relative size and feed velocity; hours suit small known tasks. I choose what the team will use honestly, and never turn points into a performance measure.",
      meaning: {
        hi: "ये team पर depend करता है। Points relative size compare करते हैं और velocity देते हैं; hours छोटे जाने-पहचाने tasks के लिए ठीक हैं। मैं वो चुनता हूँ जिसे team honestly use करे, और points को performance measure नहीं बनाता।",
        hg: "Yeh team par depend karta hai. Points relative size compare karte hain aur velocity dete hain; hours chhote jaane-pehchaane tasks ke liye theek hain. Main woh chunta hoon jise team honestly use kare, aur points ko performance measure nahi banata."
      },
      explain: {
        en: `<ul>
<li>Points can be abused (compared across teams, converted to hours). Hours can feel like promises. No-estimates teams slice items small and count them.</li>
<li>Follow-up: "Your company uses hours; will you adapt?" Yes, and I would still show ranges and assumptions.</li>
</ul>`,
        hi: `<ul>
<li>Points का misuse हो सकता है (teams के बीच compare, hours में convert)। Hours promise जैसे लग सकते हैं। No-estimates teams items छोटे काटकर गिनती हैं।</li>
<li>Follow-up: "तुम्हारी company hours use करती है; adapt करोगे?" हाँ, और मैं फिर भी ranges और assumptions दिखाऊँगा।</li>
</ul>`,
        hg: `<ul>
<li>Points ka misuse ho sakta hai (teams ke beech compare, hours mein convert). Hours promise jaise lag sakte hain. No-estimates teams items chhote kaatkar ginti hain.</li>
<li>Follow-up: "Tumhari company hours use karti hai; adapt karoge?" Haan, aur main phir bhi ranges aur assumptions dikhaunga.</li>
</ul>`
      }
    },
    {
      id: "pert-and-velocity",
      depth: "detailed",
      q: "Explain a PERT estimate and how you forecast a release date from velocity.",
      answer: "PERT is (O + 4M + P) / 6, with (P - O) / 6 as the spread. For a release I divide remaining points by slow, average and fast velocity, rounding up.",
      meaning: {
        hi: "PERT है (O + 4M + P) / 6, और (P - O) / 6 spread। Release के लिए मैं बचे points को slow, average और fast velocity से भाग देकर round up करता हूँ।",
        hg: "PERT hai (O + 4M + P) / 6, aur (P - O) / 6 spread. Release ke liye main bache points ko slow, average aur fast velocity se bhaag dekar round up karta hoon."
      },
      explain: {
        en: `<ul>
<li>Example: 60 points left, velocity 8, 10, 12 gives 8, 6 and 5 sprints. Say "likely 6, between 5 and 8".</li>
<li>Weak when the team or sprint length changes. Spreads of several tasks combine by adding variances, assuming independence.</li>
<li>Follow-up: "Why divide by 6?" It treats O to P as roughly six standard deviations wide; it is a convention, not a law.</li>
</ul>`,
        hi: `<ul>
<li>Example: 60 points बचे, velocity 8, 10, 12 से 8, 6 और 5 sprints। बोलो "likely 6, 5 से 8 के बीच"।</li>
<li>Team या sprint length बदले तो कमज़ोर। कई tasks के spreads variances जोड़कर मिलते हैं, independence मानकर।</li>
<li>Follow-up: "6 से भाग क्यों?" ये O से P को लगभग छह standard deviations चौड़ा मानता है; ये convention है, कानून नहीं।</li>
</ul>`,
        hg: `<ul>
<li>Example: 60 points bache, velocity 8, 10, 12 se 8, 6 aur 5 sprints. Bolo "likely 6, 5 se 8 ke beech".</li>
<li>Team ya sprint length badle to kamzor. Kai tasks ke spreads variances jodkar milte hain, independence maankar.</li>
<li>Follow-up: "6 se bhaag kyon?" Yeh O se P ko lagbhag chhe standard deviations chaudha maanta hai; yeh convention hai, kanoon nahi.</li>
</ul>`
      }
    },
    {
      id: "junior-is-slow",
      depth: "detailed",
      q: "A junior developer is slow and your deadline is close. What do you do?",
      answer: "I find out what blocks them, pair briefly, and give a smaller task with clear support. I avoid taking the keyboard unless it is a real emergency.",
      meaning: {
        hi: "मैं पता करता हूँ कि उन्हें क्या रोक रहा है, थोड़ी देर pair करता हूँ, और साफ़ support के साथ छोटा task देता हूँ। असली emergency के अलावा keyboard खुद नहीं पकड़ता।",
        hg: "Main pata karta hoon ki unhe kya rok raha hai, thodi der pair karta hoon, aur saaf support ke saath chhota task deta hoon. Asli emergency ke alawa keyboard khud nahi pakadta."
      },
      explain: {
        en: `<ul>
<li>Use the situational view: new or unsure people need directing and coaching; skilled people need space. Ask "what have you tried?".</li>
<li>Protect the deadline separately: re-plan scope or reassign the risky part, and tell stakeholders early.</li>
<li>Follow-up: "Isn't it faster if you just do it?" Today yes, but it costs you every week afterwards and the person does not grow.</li>
</ul>`,
        hi: `<ul>
<li>Situational view use करो: नए या unsure लोगों को directing और coaching चाहिए; skilled लोगों को space। पूछो "तुमने क्या try किया?"।</li>
<li>Deadline को अलग से बचाओ: scope re-plan करो या risky हिस्सा reassign करो, और stakeholders को जल्दी बताओ।</li>
<li>Follow-up: "क्या तुम खुद कर लो तो तेज़ नहीं?" आज हाँ, पर बाद में हर हफ़्ते महँगा पड़ता है और person grow नहीं होता।</li>
</ul>`,
        hg: `<ul>
<li>Situational view use karo: naye ya unsure logon ko directing aur coaching chahiye; skilled logon ko space. Poochho "tumne kya try kiya?".</li>
<li>Deadline ko alag se bachao: scope re-plan karo ya risky hissa reassign karo, aur stakeholders ko jaldi batao.</li>
<li>Follow-up: "Kya tum khud kar lo to tez nahi?" Aaj haan, par baad mein har hafte mehnga padta hai aur person grow nahi hota.</li>
</ul>`
      }
    },
    {
      id: "underperformer",
      depth: "detailed",
      q: "How do you handle a team member who is underperforming?",
      answer: "I talk privately and early, share specific examples, listen for causes, and agree clear expectations with support and a check date. If nothing changes, I involve my manager and HR.",
      meaning: {
        hi: "मैं अकेले में और जल्दी बात करता हूँ, specific examples देता हूँ, कारण सुनता हूँ, और support और check date के साथ साफ़ expectations agree करता हूँ। कुछ न बदले तो manager और HR को involve करता हूँ।",
        hg: "Main akele mein aur jaldi baat karta hoon, specific examples deta hoon, kaaran sunta hoon, aur support aur check date ke saath saaf expectations agree karta hoon. Kuch na badle to manager aur HR ko involve karta hoon."
      },
      explain: {
        en: `<ul>
<li>Causes vary: unclear goals, skill gap, personal difficulty, wrong role. Fix the cause, not just the symptom. Many companies keep formal performance steps with the manager and HR; a TL usually supports, not decides.</li>
<li>Follow-up: "What if it is affecting the team?" Protect the team's delivery, keep the conversation respectful, and keep your manager informed.</li>
</ul>`,
        hi: `<ul>
<li>कारण अलग हो सकते हैं: unclear goals, skill gap, personal मुश्किल, गलत role। Symptom नहीं, कारण ठीक करो। कई companies में formal performance steps manager और HR के पास होते हैं; TL आम तौर पर support करता है, decide नहीं।</li>
<li>Follow-up: "अगर team पर असर पड़ रहा हो?" Team की delivery बचाओ, बात respectful रखो, और manager को informed रखो।</li>
</ul>`,
        hg: `<ul>
<li>Kaaran alag ho sakte hain: unclear goals, skill gap, personal mushkil, galat role. Symptom nahi, kaaran theek karo. Kai companies mein formal performance steps manager aur HR ke paas hote hain; TL aam taur par support karta hai, decide nahi.</li>
<li>Follow-up: "Agar team par asar pad raha ho?" Team ki delivery bachao, baat respectful rakho, aur manager ko informed rakho.</li>
</ul>`
      }
    },
    {
      id: "prioritise-tech-debt",
      depth: "detailed",
      q: "How do you decide which tech debt to fix, and how do you convince the business?",
      answer: "I make debt visible with evidence, rank it by cost of delay, risk and fix size (for example WSJF), and explain it in business terms. A fixed 20% is one option, not a rule.",
      meaning: {
        hi: "मैं evidence के साथ debt को visible करता हूँ, cost of delay, risk और fix size से rank करता हूँ (जैसे WSJF), और business की भाषा में समझाता हूँ। Fixed 20% एक option है, rule नहीं।",
        hg: "Main evidence ke saath debt ko visible karta hoon, cost of delay, risk aur fix size se rank karta hoon (jaise WSJF), aur business ki bhasha mein samjhata hoon. Fixed 20% ek option hai, rule nahi."
      },
      explain: {
        en: `<ul>
<li>Business wording: incidents per quarter, release delay, onboarding time. Attach refactors to upcoming features when possible.</li>
<li>Follow-up: "Management refuses any time for debt." Start with the most painful item, show before and after numbers, and use the boy-scout rule meanwhile.</li>
</ul>`,
        hi: `<ul>
<li>Business की भाषा: incidents per quarter, release delay, onboarding time। हो सके तो refactors को आने वाले features से जोड़ो।</li>
<li>Follow-up: "Management debt के लिए कोई time नहीं देता।" सबसे दर्दनाक item से शुरू करो, before और after numbers दिखाओ, और तब तक boy-scout rule use करो।</li>
</ul>`,
        hg: `<ul>
<li>Business ki bhasha: incidents per quarter, release delay, onboarding time. Ho sake to refactors ko aane waale features se jodo.</li>
<li>Follow-up: "Management debt ke liye koi time nahi deta." Sabse dardnaak item se shuru karo, before aur after numbers dikhao, aur tab tak boy-scout rule use karo.</li>
</ul>`
      }
    },
    {
      id: "disagree-with-manager",
      depth: "detailed",
      q: "Tell me about a time you disagreed with your manager.",
      answer: "I raise it privately with data and an alternative, listen to their constraints, and accept the decision if it is made. I escalate only for safety or ethics.",
      meaning: {
        hi: "मैं अकेले में data और एक alternative के साथ बात उठाता हूँ, उनकी constraints सुनता हूँ, और decision हो जाए तो मान लेता हूँ। Escalate सिर्फ़ safety या ethics पर करता हूँ।",
        hg: "Main akele mein data aur ek alternative ke saath baat uthata hoon, unki constraints sunta hoon, aur decision ho jaaye to maan leta hoon. Escalate sirf safety ya ethics par karta hoon."
      },
      explain: {
        en: `<ul>
<li>Use your own real story with the STAR template (a labelled sample is in the story section; do not borrow its details). Show respect, evidence, and a good ending, even if you lost.</li>
<li>Follow-up: "Were you right?" Be modest: describe what happened and what you learned, even if the result was mixed.</li>
</ul>`,
        hi: `<ul>
<li>अपनी असली story STAR template के साथ बोलो (labelled sample story वाले section में है; उसकी details उधार मत लो)। Respect, evidence और अच्छा ending दिखाओ, चाहे हार गए हो।</li>
<li>Follow-up: "क्या तुम सही थे?" Modest रहो: बताओ क्या हुआ और क्या सीखा, चाहे result mixed हो।</li>
</ul>`,
        hg: `<ul>
<li>Apni asli story STAR template ke saath bolo (labelled sample story waale section mein hai; uski details udhaar mat lo). Respect, evidence aur achha ending dikhao, chahe haar gaye ho.</li>
<li>Follow-up: "Kya tum sahi the?" Modest raho: batao kya hua aur kya seekha, chahe result mixed ho.</li>
</ul>`
      }
    },
    {
      id: "tell-me-about-yourself",
      depth: "detailed",
      q: "Tell me about yourself.",
      answer: "I am a .NET developer with eleven years of experience, strongest at [your strengths]. Recently I [your real highlight], and I now want a Tech Lead role to help a team deliver.",
      meaning: {
        hi: "मैं ग्यारह साल के experience वाला .NET developer हूँ, [तुम्हारी strengths] में सबसे strong। हाल ही में मैंने [तुम्हारा असली highlight] किया, और अब मैं Tech Lead role चाहता हूँ ताकि team को deliver कराने में मदद कर सकूँ।",
        hg: "Main gyarah saal ke experience wala .NET developer hoon, [tumhari strengths] mein sabse strong. Haal hi mein maine [tumhara asli highlight] kiya, aur ab main Tech Lead role chahta hoon taaki team ko deliver karane mein madad kar sakoon."
      },
      explain: {
        en: `<ul>
<li>Present, Past, Future in about 60 to 90 seconds. Fill the brackets with your own facts from the template in the pitch section; the sample there is only a shape.</li>
<li>Follow-up: "Why are you leaving your current company?" Talk about what you want to grow into, not complaints about the old place.</li>
</ul>`,
        hi: `<ul>
<li>Present, Past, Future लगभग 60 से 90 seconds में। Brackets को pitch section के template से अपने facts से भरो; वहाँ का sample सिर्फ़ shape है।</li>
<li>Follow-up: "अभी की company क्यों छोड़ रहे हो?" बताओ कि तुम किसमें grow करना चाहते हो, पुरानी जगह की शिकायतें नहीं।</li>
</ul>`,
        hg: `<ul>
<li>Present, Past, Future lagbhag 60 se 90 seconds mein. Brackets ko pitch section ke template se apne facts se bharo; wahan ka sample sirf shape hai.</li>
<li>Follow-up: "Abhi ki company kyon chhod rahe ho?" Batao ki tum kisme grow karna chahte ho, purani jagah ki shikayatein nahi.</li>
</ul>`
      }
    },
    {
      id: "first-time-tl",
      depth: "detailed",
      q: "You have not been an official Tech Lead before. Why will you succeed?",
      answer: "I have already led without the title: reviews, mentoring, releases and incidents. I am clear about what I am still learning, and I will ask for feedback early.",
      meaning: {
        hi: "मैं title के बिना पहले से lead कर चुका हूँ: reviews, mentoring, releases और incidents। मुझे साफ़ पता है कि मैं क्या सीख रहा हूँ, और मैं feedback जल्दी माँगूँगा।",
        hg: "Main title ke bina pehle se lead kar chuka hoon: reviews, mentoring, releases aur incidents. Mujhe saaf pata hai ki main kya seekh raha hoon, aur main feedback jaldi maangunga."
      },
      explain: {
        en: `<ul>
<li>Pick one or two real examples of leading without authority (use the story bank). Do not exaggerate; modest and specific is stronger.</li>
<li>Mention a simple plan: first 30 days listen and learn, 60 days small improvement, 90 days agreed goals. Follow-up: "What is your biggest gap?" Name a real one and the step you are taking.</li>
</ul>`,
        hi: `<ul>
<li>Authority के बिना lead करने के एक-दो असली examples चुनो (story bank use करो)। बढ़ा-चढ़ाकर मत बोलो; modest और specific ज़्यादा strong है।</li>
<li>एक simple plan बताओ: पहले 30 दिन सुनना और सीखना, 60 दिन छोटा improvement, 90 दिन agreed goals। Follow-up: "तुम्हारा सबसे बड़ा gap क्या है?" एक असली बताओ और जो step ले रहे हो वो।</li>
</ul>`,
        hg: `<ul>
<li>Authority ke bina lead karne ke ek-do asli examples chuno (story bank use karo). Badha-chadhakar mat bolo; modest aur specific zyada strong hai.</li>
<li>Ek simple plan batao: pehle 30 din sunna aur seekhna, 60 din chhota improvement, 90 din agreed goals. Follow-up: "Tumhara sabse bada gap kya hai?" Ek asli batao aur jo step le rahe ho woh.</li>
</ul>`
      }
    },
    {
      id: "hiring-process",
      depth: "detailed",
      q: "How would you interview a candidate for your team?",
      answer: "I agree on the signals first, ask the same questions with a scoring guide, use real work like code reading or design discussion, and write notes before the debrief.",
      meaning: {
        hi: "मैं पहले signals agree करता हूँ, scoring guide के साथ वही सवाल पूछता हूँ, code reading या design discussion जैसा असली काम use करता हूँ, और debrief से पहले notes लिखता हूँ।",
        hg: "Main pehle signals agree karta hoon, scoring guide ke saath wahi sawaal poochta hoon, code reading ya design discussion jaisa asli kaam use karta hoon, aur debrief se pehle notes likhta hoon."
      },
      explain: {
        en: `<ul>
<li>Be kind, explain the format, give hints, leave time for their questions. Watch bias and "hire a copy of me" thinking.</li>
<li>Follow-up: "You are split on a candidate." Go back to the written signals and evidence; consider a follow-up round on the unclear signal.</li>
</ul>`,
        hi: `<ul>
<li>Kind रहो, format समझाओ, hints दो, उनके सवालों के लिए time रखो। Bias और "मेरी copy hire करो" वाली सोच पर नज़र रखो।</li>
<li>Follow-up: "Candidate पर तुम्हारी राय बँटी है।" लिखे हुए signals और evidence पर लौटो; unclear signal पर एक और round सोचो।</li>
</ul>`,
        hg: `<ul>
<li>Kind raho, format samjhao, hints do, unke sawaalon ke liye time rakho. Bias aur "meri copy hire karo" waali soch par nazar rakho.</li>
<li>Follow-up: "Candidate par tumhari raay banti hai." Likhe hue signals aur evidence par lauto; unclear signal par ek aur round socho.</li>
</ul>`
      }
    },
    {
      id: "salary-and-notice",
      depth: "detailed",
      q: "What are your salary expectations, and what is your notice period?",
      answer: "I would like to understand the scope first, and I expect a package in line with Tech Lead roles in this market. My notice period is [your real terms].",
      meaning: {
        hi: "मैं पहले scope समझना चाहूँगा, और इस market में Tech Lead roles के हिसाब के package की उम्मीद है। मेरा notice period [तुम्हारे असली terms] है।",
        hg: "Main pehle scope samajhna chahunga, aur is market mein Tech Lead roles ke hisaab ke package ki ummeed hai. Mera notice period [tumhare asli terms] hai."
      },
      explain: {
        en: `<ul>
<li>Research the market first and decide your range and minimum. Think of the whole package, not one number. Let them name a range first when possible.</li>
<li>Be honest about current pay and other offers; companies verify. Check your contract before promising an early release.</li>
<li>Follow-up: "Can you join sooner?" Say only what you have confirmed.</li>
</ul>`,
        hi: `<ul>
<li>पहले market research करो और अपनी range और minimum तय करो। पूरे package के बारे में सोचो, एक number नहीं। हो सके तो range पहले उन्हें बोलने दो।</li>
<li>Current pay और दूसरे offers के बारे में honest रहो; companies verify करती हैं। Early release का promise करने से पहले अपना contract check करो।</li>
<li>Follow-up: "क्या जल्दी join कर सकते हो?" सिर्फ़ वही बोलो जो तुमने confirm किया हो।</li>
</ul>`,
        hg: `<ul>
<li>Pehle market research karo aur apni range aur minimum tay karo. Poore package ke baare mein socho, ek number nahi. Ho sake to range pehle unhe bolne do.</li>
<li>Current pay aur doosre offers ke baare mein honest raho; companies verify karti hain. Early release ka promise karne se pehle apna contract check karo.</li>
<li>Follow-up: "Kya jaldi join kar sakte ho?" Sirf wahi bolo jo tumne confirm kiya ho.</li>
</ul>`
      }
    },
  ],
  puzzles: [
    {
      id: "pert-task-list-spread",
      src: `using System.Globalization;

var tasks = new (string Name, double O, double M, double P)[]
{
    ("API", 1, 2, 3),
    ("Migration", 2, 5, 14),
    ("Tests", 3, 4, 5),
    ("Deploy", 4, 8, 10),
};

string F(double v) => v.ToString("0.00", CultureInfo.InvariantCulture);

double total = 0, variance = 0, naive = 0;
foreach (var t in tasks)
{
    double e = (t.O + 4 * t.M + t.P) / 6;
    double sd = (t.P - t.O) / 6;
    total += e;
    variance += sd * sd;
    naive += sd;
    Console.WriteLine(t.Name + " " + F(e) + " +/- " + F(sd));
}

Console.WriteLine("Total " + F(total));
Console.WriteLine("Spread " + F(Math.Sqrt(variance)));
Console.WriteLine("Naive " + F(naive));`,
      answer: `API 2.00 +/- 0.33
Migration 6.00 +/- 2.00
Tests 4.00 +/- 0.33
Deploy 7.67 +/- 1.00
Total 19.67
Spread 2.29
Naive 3.67`,
      explain: {
        en: `<p>Each task prints its PERT expected value and its spread <code>(P - O) / 6</code>. The total is the <b>sum of the expected values</b>. For the combined spread you add the <b>variances</b> (the squared spreads) and take the square root, which assumes the tasks are independent. Adding the spreads directly (the "Naive" line) overstates the uncertainty. Note how "Migration" has a long tail (14) that pulls its expected value above its most likely value of 5.</p>`,
        hi: `<p>हर task अपनी PERT expected value और spread <code>(P - O) / 6</code> print करता है। Total <b>expected values का sum</b> है। Combined spread के लिए <b>variances</b> (spreads के squares) जोड़ते हैं और square root लेते हैं, जो मानता है कि tasks independent हैं। Spreads को सीधे जोड़ना ("Naive" line) uncertainty को ज़्यादा दिखाता है। देखो "Migration" की long tail (14) उसकी expected value को most likely value 5 से ऊपर खींचती है।</p>`,
        hg: `<p>Har task apni PERT expected value aur spread <code>(P - O) / 6</code> print karta hai. Total <b>expected values ka sum</b> hai. Combined spread ke liye <b>variances</b> (spreads ke squares) jodte hain aur square root lete hain, jo maanta hai ki tasks independent hain. Spreads ko seedhe jodna ("Naive" line) uncertainty ko zyada dikhata hai. Dekho "Migration" ki long tail (14) uski expected value ko most likely value 5 se upar kheenchti hai.</p>`
      }
    },
    {
      id: "velocity-with-scope-growth",
      src: `int Plain(int backlog, int velocity) => (backlog + velocity - 1) / velocity;

int WithGrowth(int backlog, int velocity, int growth)
{
    int sprints = 0, remaining = backlog;
    while (remaining > 0)
    {
        sprints++;
        remaining -= velocity;
        if (remaining > 0) remaining += growth;
    }
    return sprints;
}

var velocities = new (string Name, int V)[] { ("min", 6), ("avg", 9), ("max", 12) };
foreach (var v in velocities)
    Console.WriteLine($"{v.Name}: plain {Plain(47, v.V)}, with +2 scope per sprint {WithGrowth(47, v.V, 2)}");`,
      answer: `min: plain 8, with +2 scope per sprint 12
avg: plain 6, with +2 scope per sprint 7
max: plain 4, with +2 scope per sprint 5`,
      explain: {
        en: `<p><code>Plain</code> is ceiling division using integers: <code>(backlog + velocity - 1) / velocity</code>. <code>WithGrowth</code> simulates sprints where two new points of scope arrive after each sprint that did not finish the work. Slow velocity suffers most because scope growth eats a larger share of every sprint. The lesson for a TL: when scope grows, the forecast range widens fast, so talk about scope control, not only speed.</p>`,
        hi: `<p><code>Plain</code> integers से ceiling division है: <code>(backlog + velocity - 1) / velocity</code>। <code>WithGrowth</code> उन sprints को simulate करता है जिनमें काम पूरा न करने वाले हर sprint के बाद scope के दो नए points आते हैं। Slow velocity को सबसे ज़्यादा नुकसान होता है क्योंकि scope growth हर sprint का बड़ा हिस्सा खा जाती है। TL के लिए सीख: scope बढ़े तो forecast range तेज़ी से चौड़ी होती है, इसलिए सिर्फ़ speed की नहीं, scope control की बात करो।</p>`,
        hg: `<p><code>Plain</code> integers se ceiling division hai: <code>(backlog + velocity - 1) / velocity</code>. <code>WithGrowth</code> un sprints ko simulate karta hai jinme kaam poora na karne waale har sprint ke baad scope ke do naye points aate hain. Slow velocity ko sabse zyada nuksaan hota hai kyunki scope growth har sprint ka bada hissa kha jaati hai. TL ke liye seekh: scope badhe to forecast range tezi se chaudi hoti hai, isliye sirf speed ki nahi, scope control ki baat karo.</p>`
      }
    },
    {
      id: "wsjf-ties",
      src: `var items = new (string Name, int Value, int Time, int Risk, int Size)[]
{
    ("Upgrade library", 5, 3, 2, 5),
    ("Fix flaky tests", 3, 1, 2, 3),
    ("Add alert", 2, 1, 1, 2),
    ("Split big class", 6, 3, 4, 4),
    ("Rotate secrets", 4, 2, 2, 2),
};

var ranked = items
    .Select(i => (i.Name, i.Size, Score: (decimal)(i.Value + i.Time + i.Risk) / i.Size))
    .OrderByDescending(x => x.Score)
    .ThenBy(x => x.Size)
    .ThenBy(x => x.Name, StringComparer.Ordinal)
    .ToList();

for (int k = 0; k < ranked.Count; k++)
    Console.WriteLine($"{k + 1}. {ranked[k].Name} {ranked[k].Score:0.00}");`,
      answer: `1. Rotate secrets 4.00
2. Split big class 3.25
3. Add alert 2.00
4. Fix flaky tests 2.00
5. Upgrade library 2.00`,
      explain: {
        en: `<p>The score is cost of delay (value + time criticality + risk reduction) divided by job size, as <code>decimal</code> so the division is exact enough to compare. Several items score exactly 2.00. The tie-break is deterministic: smaller job first, then name by ordinal comparison. In real life a tie is a cue to talk, since the numbers are rough team guesses.</p>`,
        hi: `<p>Score = cost of delay (value + time criticality + risk reduction) को job size से भाग, <code>decimal</code> में ताकि compare करने के लिए division काफ़ी exact रहे। कई items का score ठीक 2.00 है। Tie-break deterministic है: पहले छोटा job, फिर name की ordinal comparison। असल ज़िंदगी में tie बात करने का इशारा है, क्योंकि numbers team के मोटे अंदाज़े हैं।</p>`,
        hg: `<p>Score = cost of delay (value + time criticality + risk reduction) ko job size se bhaag, <code>decimal</code> mein taaki compare karne ke liye division kaafi exact rahe. Kai items ka score theek 2.00 hai. Tie-break deterministic hai: pehle chhota job, phir name ki ordinal comparison. Asal zindagi mein tie baat karne ka ishaara hai, kyunki numbers team ke mote andaaze hain.</p>`
      }
    },
    {
      id: "incident-mtta-mttr",
      src: `using System.Globalization;

var incidents = new (string Id, DateTime Start, DateTime Ack, DateTime? Resolved)[]
{
    ("INC-1", new DateTime(2026, 5, 1, 23, 50, 0), new DateTime(2026, 5, 1, 23, 58, 0), new DateTime(2026, 5, 2, 0, 50, 0)),
    ("INC-2", new DateTime(2026, 5, 3, 10, 0, 0), new DateTime(2026, 5, 3, 10, 4, 0), new DateTime(2026, 5, 3, 10, 34, 0)),
    ("INC-3", new DateTime(2026, 5, 4, 9, 0, 0), new DateTime(2026, 5, 4, 9, 15, 0), null),
    ("INC-4", new DateTime(2026, 5, 6, 14, 0, 0), new DateTime(2026, 5, 6, 14, 3, 0), new DateTime(2026, 5, 6, 15, 33, 0)),
};

string F(double v) => v.ToString("0.0", CultureInfo.InvariantCulture);

var resolved = incidents.Where(i => i.Resolved.HasValue).ToList();
double mttr = resolved.Average(i => (i.Resolved!.Value - i.Start).TotalMinutes);
double mtta = incidents.Average(i => (i.Ack - i.Start).TotalMinutes);
var longest = resolved.OrderByDescending(i => i.Resolved!.Value - i.Start).First();

Console.WriteLine("Resolved " + resolved.Count + " of " + incidents.Length);
Console.WriteLine("MTTA " + F(mtta));
Console.WriteLine("MTTR " + F(mttr));
Console.WriteLine("Longest " + longest.Id);`,
      answer: `Resolved 3 of 4
MTTA 7.5
MTTR 62.3
Longest INC-4`,
      explain: {
        en: `<p>Mean time to acknowledge (MTTA) uses all four incidents. Mean time to recover (MTTR) uses only the <b>resolved</b> ones, so the open INC-3 is left out (and that should be said when you report the number). INC-1 crosses midnight; <code>DateTime</code> subtraction handles that, where subtracting clock times would not. MTTR is a mean, so one long incident moves it a lot; in real reports teams often also look at the median.</p>`,
        hi: `<p>Mean time to acknowledge (MTTA) चारों incidents लेता है। Mean time to recover (MTTR) सिर्फ़ <b>resolved</b> वाले लेता है, इसलिए open INC-3 बाहर है (और number report करते समय ये बताना चाहिए)। INC-1 midnight पार करता है; <code>DateTime</code> की subtraction इसे संभालती है, जबकि clock times घटाने से नहीं होता। MTTR एक mean है, इसलिए एक लंबा incident उसे बहुत हिलाता है; असली reports में teams अक्सर median भी देखती हैं।</p>`,
        hg: `<p>Mean time to acknowledge (MTTA) chaaron incidents leta hai. Mean time to recover (MTTR) sirf <b>resolved</b> waale leta hai, isliye open INC-3 bahar hai (aur number report karte samay yeh batana chahiye). INC-1 midnight paar karta hai; <code>DateTime</code> ki subtraction ise sambhalti hai, jabki clock times ghatane se nahi hota. MTTR ek mean hai, isliye ek lamba incident use bahut hilata hai; asli reports mein teams aksar median bhi dekhti hain.</p>`
      }
    },
    {
      id: "fibonacci-snap",
      src: `int[] scale = { 1, 2, 3, 5, 8, 13 };

int Snap(int raw)
{
    int best = scale[0];
    foreach (int s in scale)
    {
        int d = Math.Abs(s - raw), bd = Math.Abs(best - raw);
        if (d < bd || (d == bd && s > best)) best = s;
    }
    return best;
}

int total = 0;
foreach (int raw in new[] { 1, 4, 6, 10, 11, 20 })
{
    int pts = Snap(raw);
    total += pts;
    Console.WriteLine($"{raw} -> {pts}" + (pts > 8 ? " split it" : ""));
}
Console.WriteLine("Total " + total);`,
      answer: `1 -> 1
4 -> 5
6 -> 5
10 -> 8
11 -> 13 split it
20 -> 13 split it
Total 45`,
      explain: {
        en: `<p>Each raw size snaps to the nearest value on the scale; on an exact tie the code picks the <b>larger</b> value (4 sits between 3 and 5, so it becomes 5; 11 is closer to 13 than to 8). Anything above 8 is flagged to split. The point for a TL: the gaps in the scale grow on purpose, because the bigger the item, the less precise the estimate can honestly be; a big number is a signal to slice the work smaller.</p>`,
        hi: `<p>हर raw size scale की सबसे नज़दीकी value पर snap होता है; exact tie पर code <b>बड़ी</b> value चुनता है (4, 3 और 5 के बीच है, इसलिए 5 बनता है; 11, 8 से ज़्यादा 13 के पास है)। 8 से ऊपर वाली चीज़ पर split का flag लगता है। TL के लिए बात: scale के gaps जानबूझकर बढ़ते हैं, क्योंकि item जितना बड़ा, estimate उतना कम precise honestly हो सकता है; बड़ा number काम को छोटा slice करने का signal है।</p>`,
        hg: `<p>Har raw size scale ki sabse nazdeeki value par snap hota hai; exact tie par code <b>badi</b> value chunta hai (4, 3 aur 5 ke beech hai, isliye 5 banta hai; 11, 8 se zyada 13 ke paas hai). 8 se upar waali cheez par split ka flag lagta hai. TL ke liye baat: scale ke gaps jaanbujhkar badhte hain, kyunki item jitna bada, estimate utna kam precise honestly ho sakta hai; bada number kaam ko chhota slice karne ka signal hai.</p>`
      }
    },
  ],
  revision: {
    en: [
      "A Tech Lead owns team delivery and technical direction, usually part hands-on; a manager owns people, an architect owns broad design.",
      "STAR is Situation, Task, Action, Result; spend most of the time on what you did.",
      "Prepare six to eight real stories of your own and reuse each for several questions; samples are only shapes.",
      "An estimate is a range with assumptions, not a promise.",
      "PERT expected value is (O + 4M + P) / 6, with (P - O) / 6 as the rough spread.",
      "Forecast with slow, average and fast velocity, round sprints up, and state the range.",
      "Say \"yes, if\" and offer scope, date or risk options instead of a flat no.",
      "For a technical disagreement: goal first, then data or a prototype, write an ADR, then disagree and commit.",
      "In an incident: one commander, mitigate before root cause, update on a fixed cadence.",
      "A blameless post-mortem asks how the system allowed the failure and ends in owned actions.",
      "Rank tech debt by cost of delay, risk and size, and explain it in business terms.",
      "Do not take the keyboard: ask what they tried, coach, and delegate outcomes."
    ],
    meaning: {
      hi: [
        "Tech Lead team की delivery और technical direction का owner है, आम तौर पर कुछ hands-on; manager लोगों का, architect बड़े design का owner है।",
        "STAR यानी Situation, Task, Action, Result; ज़्यादातर time इस पर लगाओ कि तुमने क्या किया।",
        "अपनी छह से आठ असली stories तैयार करो और हर एक कई सवालों में reuse करो; samples सिर्फ़ shape हैं।",
        "Estimate assumptions के साथ एक range है, promise नहीं।",
        "PERT expected value है (O + 4M + P) / 6, और मोटा spread (P - O) / 6।",
        "Slow, average और fast velocity से forecast करो, sprints round up करो, और range बोलो।",
        "सीधे no की जगह \"yes, if\" बोलो और scope, date या risk के options दो।",
        "Technical disagreement में: पहले goal, फिर data या prototype, ADR लिखो, फिर disagree and commit।",
        "Incident में: एक commander, root cause से पहले mitigate, fixed cadence पर update।",
        "Blameless post-mortem पूछता है कि system ने failure कैसे होने दी और owned actions पर खत्म होता है।",
        "Tech debt को cost of delay, risk और size से rank करो, और business की भाषा में समझाओ।",
        "Keyboard मत पकड़ो: पूछो उन्होंने क्या try किया, coach करो, और outcomes delegate करो।"
      ],
      hg: [
        "Tech Lead team ki delivery aur technical direction ka owner hai, aam taur par kuch hands-on; manager logon ka, architect bade design ka owner hai.",
        "STAR yaani Situation, Task, Action, Result; zyaadatar time is par lagao ki tumne kya kiya.",
        "Apni chhe se aath asli stories tayyar karo aur har ek kai sawaalon mein reuse karo; samples sirf shape hain.",
        "Estimate assumptions ke saath ek range hai, promise nahi.",
        "PERT expected value hai (O + 4M + P) / 6, aur mota spread (P - O) / 6.",
        "Slow, average aur fast velocity se forecast karo, sprints round up karo, aur range bolo.",
        "Seedhe no ki jagah \"yes, if\" bolo aur scope, date ya risk ke options do.",
        "Technical disagreement mein: pehle goal, phir data ya prototype, ADR likho, phir disagree and commit.",
        "Incident mein: ek commander, root cause se pehle mitigate, fixed cadence par update.",
        "Blameless post-mortem poochta hai ki system ne failure kaise hone di aur owned actions par khatam hota hai.",
        "Tech debt ko cost of delay, risk aur size se rank karo, aur business ki bhasha mein samjhao.",
        "Keyboard mat pakdo: poochho unhone kya try kiya, coach karo, aur outcomes delegate karo."
      ]
    }
  }
};
