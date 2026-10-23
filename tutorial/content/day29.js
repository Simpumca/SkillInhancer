// Day 29 — Mock interview 1 (mixed technical rounds). Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 29,
  title: {
    en: "Mock Interview 1 — four timed technical rounds",
    hi: "Mock Interview 1 — चार timed technical rounds",
    hg: "Mock Interview 1 — chaar timed technical rounds"
  },
  summary: {
    en: `<p>Today is a <b>practice interview</b>, not a lesson. You have studied Days 1 to 28; now you test yourself the way a real round tests you: a question, a clock, and your own voice. Read less, answer more.</p>
<p><b>Plan for about 1 hour 15 minutes:</b></p>
<ul>
<li><b>Setup (5 min, Short mode)</b> — read "How to run this mock" and "How to answer technical questions". Keep a pen and a timer ready.</li>
<li><b>4 rounds × about 15 minutes (Q&amp;A)</b> — Round 1 C# and EF Core, Round 2 design and ASP.NET Core, Round 3 data and architecture, Round 4 Azure, DevOps, testing, security and JavaScript. Say each answer <b>aloud first</b>, then open it and score yourself 0, 1 or 2.</li>
<li><b>Rapid-fire puzzles (Detailed mode, 5 min)</b> — seven "what will this print?" questions in C#, SQL and JavaScript.</li>
<li><b>Debrief (5 min)</b> — turn every 0 or 1 into a "revise Day N" list. That list is tomorrow's plan.</li>
</ul>
<p>Short mode shows the 8 questions most likely in a real Tech Lead screen. A wrong answer today is cheap; the same wrong answer in the real interview is not. That is why we do this now.</p>`,
    hi: `<p>आज एक <b>practice interview</b> है, lesson नहीं। आपने Day 1 से 28 पढ़ लिए हैं; अब वैसे ही खुद को test करो जैसे real round करता है: एक सवाल, एक घड़ी, और आपकी अपनी आवाज़। पढ़ो कम, जवाब दो ज़्यादा।</p>
<p><b>लगभग 1 घंटा 15 मिनट का plan:</b></p>
<ul>
<li><b>Setup (5 min, Short mode)</b> — "How to run this mock" और "How to answer technical questions" पढ़ो। Pen और timer पास रखो।</li>
<li><b>4 rounds × लगभग 15 मिनट (Q&amp;A)</b> — Round 1 C# और EF Core, Round 2 design और ASP.NET Core, Round 3 data और architecture, Round 4 Azure, DevOps, testing, security और JavaScript। हर answer पहले <b>ज़ोर से बोलो</b>, फिर खोलो और खुद को 0, 1 या 2 दो।</li>
<li><b>Rapid-fire puzzles (Detailed mode, 5 min)</b> — C#, SQL और JavaScript के सात "यह क्या print करेगा?" सवाल।</li>
<li><b>Debrief (5 min)</b> — हर 0 या 1 को "revise Day N" list में बदलो। वही list कल का plan है।</li>
</ul>
<p>Short mode में वो 8 सवाल हैं जो real Tech Lead screen में सबसे ज़्यादा पूछे जाते हैं। आज की ग़लती सस्ती है; वही ग़लती real interview में महँगी पड़ती है। इसीलिए यह अभी कर रहे हैं।</p>`,
    hg: `<p>Aaj ek <b>practice interview</b> hai, lesson nahi. Aapne Day 1 se 28 padh liye hain; ab waise hi khud ko test karo jaise real round karta hai: ek sawaal, ek ghadi, aur aapki apni awaaz. Padho kam, jawab do zyada.</p>
<p><b>Lagbhag 1 ghanta 15 minute ka plan:</b></p>
<ul>
<li><b>Setup (5 min, Short mode)</b> — "How to run this mock" aur "How to answer technical questions" padho. Pen aur timer paas rakho.</li>
<li><b>4 rounds × lagbhag 15 minute (Q&amp;A)</b> — Round 1 C# aur EF Core, Round 2 design aur ASP.NET Core, Round 3 data aur architecture, Round 4 Azure, DevOps, testing, security aur JavaScript. Har answer pehle <b>zor se bolo</b>, phir kholo aur khud ko 0, 1 ya 2 do.</li>
<li><b>Rapid-fire puzzles (Detailed mode, 5 min)</b> — C#, SQL aur JavaScript ke saat "yeh kya print karega?" sawaal.</li>
<li><b>Debrief (5 min)</b> — har 0 ya 1 ko "revise Day N" list mein badlo. Wahi list kal ka plan hai.</li>
</ul>
<p>Short mode mein woh 8 sawaal hain jo real Tech Lead screen mein sabse zyada poochhe jaate hain. Aaj ki galti sasti hai; wahi galti real interview mein mehngi padti hai. Isiliye yeh abhi kar rahe hain.</p>`
  },
  sections: [
    {
      id: "run-the-mock",
      depth: "short",
      title: { en: "How to run this mock", hi: "यह mock कैसे चलाएँ", hg: "Yeh mock kaise chalayein" },
      body: {
        en: `<p><b>Analogy:</b> a cricket net session. Nobody learns batting by reading the rulebook; you face real balls with the bowler waiting. The mock is your net session.</p>
<ul>
<li><b>Timing:</b> 4 rounds × about 15 minutes. Per question: 2 minutes to answer aloud, 1 minute to read the explanation. Set a timer on your phone.</li>
<li><b>Answer aloud, then reveal.</b> Thinking silently feels easy; speaking shows the gaps. Open the crisp answer only after you finish.</li>
<li><b>Score each question 0 to 2:</b> <b>2</b> = same idea, clear and structured; <b>1</b> = half right or rambling; <b>0</b> = blank or wrong. 22 questions give a maximum of 44.</li>
<li><b>What interviewers listen for:</b> do you <b>clarify</b> the question first, give a <b>structure</b>, name <b>trade-offs</b>, and back it with a real <b>example</b> from your 11 years.</li>
</ul>
<p><b>When to use:</b> in the last week before interviews, and again after each real interview. <b>When not:</b> do not use it to learn a topic for the first time; go back to that day's lesson, then return.</p>`,
        hi: `<p><b>Analogy:</b> cricket का net session। Rulebook पढ़कर कोई batting नहीं सीखता; bowler के सामने real गेंदें खेलनी पड़ती हैं। यह mock आपका net session है।</p>
<ul>
<li><b>Timing:</b> 4 rounds × लगभग 15 मिनट। हर सवाल पर: 2 मिनट ज़ोर से जवाब देना, 1 मिनट explanation पढ़ना। Phone में timer लगाओ।</li>
<li><b>पहले ज़ोर से बोलो, फिर खोलो।</b> मन में सोचना आसान लगता है; बोलने से gaps दिखते हैं। Crisp answer तब खोलो जब आप पूरा बोल चुके हों।</li>
<li><b>हर सवाल को 0 से 2 score दो:</b> <b>2</b> = वही idea, साफ़ और structured; <b>1</b> = आधा सही या भटका हुआ; <b>0</b> = खाली या ग़लत। 22 सवालों का maximum 44 है।</li>
<li><b>Interviewers क्या सुनते हैं:</b> क्या आप सवाल <b>clarify</b> करते हैं, <b>structure</b> देते हैं, <b>trade-offs</b> बताते हैं, और अपने 11 साल के <b>example</b> से बात पक्की करते हैं।</li>
</ul>
<p><b>कब use करें:</b> interviews से पहले आख़िरी हफ़्ते में, और हर real interview के बाद। <b>कब नहीं:</b> किसी topic को पहली बार सीखने के लिए नहीं; उसके लिए उस दिन का lesson पढ़ो, फिर यहाँ लौटो।</p>`,
        hg: `<p><b>Analogy:</b> cricket ka net session. Rulebook padhkar koi batting nahi seekhta; bowler ke saamne real gendein khelni padti hain. Yeh mock aapka net session hai.</p>
<ul>
<li><b>Timing:</b> 4 rounds × lagbhag 15 minute. Har sawaal par: 2 minute zor se jawab dena, 1 minute explanation padhna. Phone mein timer lagao.</li>
<li><b>Pehle zor se bolo, phir kholo.</b> Man mein sochna aasaan lagta hai; bolne se gaps dikhte hain. Crisp answer tab kholo jab aap poora bol chuke ho.</li>
<li><b>Har sawaal ko 0 se 2 score do:</b> <b>2</b> = wahi idea, saaf aur structured; <b>1</b> = aadha sahi ya bhatka hua; <b>0</b> = khaali ya galat. 22 sawaalon ka maximum 44 hai.</li>
<li><b>Interviewers kya sunte hain:</b> kya aap sawaal <b>clarify</b> karte ho, <b>structure</b> dete ho, <b>trade-offs</b> batate ho, aur apne 11 saal ke <b>example</b> se baat pakki karte ho.</li>
</ul>
<p><b>Kab use karein:</b> interviews se pehle aakhri hafte mein, aur har real interview ke baad. <b>Kab nahi:</b> kisi topic ko pehli baar seekhne ke liye nahi; uske liye us din ka lesson padho, phir yahan lauto.</p>`
      }
    },
    {
      id: "answer-structure",
      depth: "short",
      title: { en: "How to answer technical questions", hi: "Technical सवालों का जवाब कैसे दें", hg: "Technical sawaalon ka jawab kaise dein" },
      body: {
        en: `<p><b>Analogy:</b> a tiffin with four boxes. If every box is in its place, the person eating finds everything fast. A good answer also has four boxes, always in the same order.</p>
<ol>
<li><b>One-line answer</b> — say the headline first, in under 15 seconds.</li>
<li><b>Why</b> — one reason, in plain words.</li>
<li><b>Example</b> — a real project moment: "In our WhatsApp bot we ...".</li>
<li><b>Trade-off or when not</b> — this separates a Tech Lead from a senior developer.</li>
</ol>
<ul>
<li><b>Clarify first</b> for open questions: "How many users? Read-heavy or write-heavy? Is a few seconds of stale data fine?"</li>
<li><b>If you do not know:</b> say "I have not used that in production. I would first check X, then try Y, and read the official docs for Z." That is a strong answer; guessing confidently is a weak one.</li>
<li><b>Do not</b> read a memorised paragraph; pause, breathe, speak in short sentences.</li>
</ul>
<p><b>When to use:</b> every question that starts with "why", "how would you" or "compare". <b>When not:</b> a yes/no or one-fact question ("Which HTTP status for a created resource?") needs only the one-liner.</p>`,
        hi: `<p><b>Analogy:</b> चार डिब्बों वाला tiffin। हर डिब्बा अपनी जगह पर हो तो खाने वाले को सब जल्दी मिल जाता है। अच्छे answer में भी चार डिब्बे होते हैं, हमेशा एक ही order में।</p>
<ol>
<li><b>One-line answer</b> — पहले headline बोलो, 15 सेकंड से कम में।</li>
<li><b>Why</b> — एक वजह, सीधे शब्दों में।</li>
<li><b>Example</b> — किसी real project का पल: "हमारे WhatsApp bot में हमने ..."।</li>
<li><b>Trade-off या when not</b> — यही Tech Lead को senior developer से अलग करता है।</li>
</ol>
<ul>
<li>Open सवालों में पहले <b>clarify</b> करो: "कितने users? Read-heavy या write-heavy? कुछ सेकंड पुराना data चलेगा?"</li>
<li><b>अगर पता नहीं:</b> बोलो "मैंने इसे production में use नहीं किया। मैं पहले X check करूँगा, फिर Y try करूँगा, और Z के लिए official docs पढ़ूँगा।" यह strong answer है; भरोसे से अंदाज़ा लगाना कमज़ोर answer है।</li>
<li>याद किया हुआ paragraph <b>मत</b> पढ़ो; रुको, साँस लो, छोटे sentences में बोलो।</li>
</ul>
<p><b>कब use करें:</b> हर वो सवाल जो "why", "how would you" या "compare" से शुरू हो। <b>कब नहीं:</b> yes/no या एक-fact वाले सवाल ("Created resource के लिए कौन-सा HTTP status?") में सिर्फ़ one-liner काफ़ी है।</p>`,
        hg: `<p><b>Analogy:</b> chaar dibbon wala tiffin. Har dibba apni jagah par ho to khane wale ko sab jaldi mil jaata hai. Achhe answer mein bhi chaar dibbe hote hain, hamesha ek hi order mein.</p>
<ol>
<li><b>One-line answer</b> — pehle headline bolo, 15 second se kam mein.</li>
<li><b>Why</b> — ek wajah, seedhe shabdon mein.</li>
<li><b>Example</b> — kisi real project ka pal: "Hamare WhatsApp bot mein humne ...".</li>
<li><b>Trade-off ya when not</b> — yahi Tech Lead ko senior developer se alag karta hai.</li>
</ol>
<ul>
<li>Open sawaalon mein pehle <b>clarify</b> karo: "Kitne users? Read-heavy ya write-heavy? Kuch second purana data chalega?"</li>
<li><b>Agar pata nahi:</b> bolo "Maine ise production mein use nahi kiya. Main pehle X check karunga, phir Y try karunga, aur Z ke liye official docs padhunga." Yeh strong answer hai; bharose se andaza lagana kamzor answer hai.</li>
<li>Yaad kiya hua paragraph <b>mat</b> padho; ruko, saans lo, chhote sentences mein bolo.</li>
</ul>
<p><b>Kab use karein:</b> har woh sawaal jo "why", "how would you" ya "compare" se shuru ho. <b>Kab nahi:</b> yes/no ya ek-fact wale sawaal ("Created resource ke liye kaun-sa HTTP status?") mein sirf one-liner kaafi hai.</p>`
      }
    },
    {
      id: "round-map",
      depth: "short",
      title: { en: "Round map — what each round covers", hi: "Round map — हर round में क्या आता है", hg: "Round map — har round mein kya aata hai" },
      body: {
        en: `<p><b>Analogy:</b> a railway timetable. You do not need every train; you need to know which platform leads where. If a question goes wrong, this map tells you which day to reopen.</p>
<ul>
<li><b>Round 1 — C#, .NET runtime, LINQ, EF Core</b> (6 questions): Days 1 to 7. Request journey, iterators, bulk work, time handling, hash keys, limiting concurrency.</li>
<li><b>Round 2 — design, SOLID, ASP.NET Core, Web API</b> (6 questions): mainly Days 8 to 14. Open/Closed, Strategy, health checks, paging, long-running calls, configuration.</li>
<li><b>Round 3 — data, architecture, microservices</b> (5 questions): Days 15 to 19. Top-N SQL, parameter sniffing, latency, sargable filters, PostgreSQL versus SQL Server.</li>
<li><b>Round 4 — Azure, DevOps, testing, security, JavaScript</b> (5 questions): Days 20 to 26. Secrets in Git, CI/CD, mocks versus real databases, package vulnerabilities, <code>forEach</code> with async.</li>
</ul>
<p>The seven puzzles at the end cross all rounds. Every explanation ends with "Revise: Day N".</p>
<p><b>When to use:</b> after scoring, to find your weak round. <b>When not:</b> do not skip a round because it feels easy; the easy round is where a quick 2 builds confidence.</p>`,
        hi: `<p><b>Analogy:</b> railway timetable। हर train याद नहीं रखनी; बस यह पता होना चाहिए कि कौन-सा platform कहाँ जाता है। कोई सवाल बिगड़े तो यह map बताता है कि कौन-सा दिन दोबारा खोलना है।</p>
<ul>
<li><b>Round 1 — C#, .NET runtime, LINQ, EF Core</b> (6 सवाल): Day 1 से 7। Request journey, iterators, bulk काम, time handling, hash keys, concurrency सीमित करना।</li>
<li><b>Round 2 — design, SOLID, ASP.NET Core, Web API</b> (6 सवाल): मुख्य रूप से Day 8 से 14। Open/Closed, Strategy, health checks, paging, long-running calls, configuration।</li>
<li><b>Round 3 — data, architecture, microservices</b> (5 सवाल): Day 15 से 19। Top-N SQL, parameter sniffing, latency, sargable filters, PostgreSQL बनाम SQL Server।</li>
<li><b>Round 4 — Azure, DevOps, testing, security, JavaScript</b> (5 सवाल): Day 20 से 26। Git में secrets, CI/CD, mocks बनाम real databases, package vulnerabilities, async के साथ <code>forEach</code>।</li>
</ul>
<p>आख़िर के सात puzzles सभी rounds को cross करते हैं। हर explanation "Revise: Day N" पर ख़त्म होता है।</p>
<p><b>कब use करें:</b> score करने के बाद, अपना weak round ढूँढने के लिए। <b>कब नहीं:</b> कोई round आसान लगे तो उसे skip मत करो; आसान round में जल्दी मिला 2 confidence बनाता है।</p>`,
        hg: `<p><b>Analogy:</b> railway timetable. Har train yaad nahi rakhni; bas yeh pata hona chahiye ki kaun-sa platform kahan jaata hai. Koi sawaal bigde to yeh map batata hai ki kaun-sa din dobara kholna hai.</p>
<ul>
<li><b>Round 1 — C#, .NET runtime, LINQ, EF Core</b> (6 sawaal): Day 1 se 7. Request journey, iterators, bulk kaam, time handling, hash keys, concurrency seemit karna.</li>
<li><b>Round 2 — design, SOLID, ASP.NET Core, Web API</b> (6 sawaal): mainly Day 8 se 14. Open/Closed, Strategy, health checks, paging, long-running calls, configuration.</li>
<li><b>Round 3 — data, architecture, microservices</b> (5 sawaal): Day 15 se 19. Top-N SQL, parameter sniffing, latency, sargable filters, PostgreSQL vs SQL Server.</li>
<li><b>Round 4 — Azure, DevOps, testing, security, JavaScript</b> (5 sawaal): Day 20 se 26. Git mein secrets, CI/CD, mocks vs real databases, package vulnerabilities, async ke saath <code>forEach</code>.</li>
</ul>
<p>Aakhir ke saat puzzles sabhi rounds ko cross karte hain. Har explanation "Revise: Day N" par khatam hota hai.</p>
<p><b>Kab use karein:</b> score karne ke baad, apna weak round dhoondhne ke liye. <b>Kab nahi:</b> koi round aasaan lage to use skip mat karo; aasaan round mein jaldi mila 2 confidence banata hai.</p>`
      }
    },
    {
      id: "scoring-next-steps",
      depth: "detailed",
      title: { en: "Scoring and next steps — turn misses into a revision list", hi: "Scoring और next steps — misses को revision list में बदलो", hg: "Scoring aur next steps — misses ko revision list mein badlo" },
      body: {
        en: `<p><b>Analogy:</b> a doctor reads your blood report line by line and marks only the values that are off. You do the same with your scores: mark only the weak topics, then treat those.</p>
<ol>
<li><b>Add up per round</b> (max 12, 12, 10, 10). Below 60% = <b>re-read</b> the lesson. 60% to 79% = <b>redo the questions</b> in 2 days. 80% and above = <b>skim</b> the revision bullets.</li>
<li><b>List each 0 and 1</b> with its "Revise: Day N" line. Group the same day together; two misses on one day means that day goes first.</li>
<li><b>Fix by type of miss:</b> a blank (0) means you lack the concept, so read the lesson; a rambling 1 means you know it but not the shape, so rehearse the four-box answer aloud.</li>
<li><b>Retest in 48 hours</b> with the same weak questions only. Day 30 is the second mock, so use today's list to decide what to revise before it.</li>
</ol>
<p>The snippet below sorts topics by score and prints the action. Use a spreadsheet, a notebook or code, whatever you will really open tomorrow.</p>
<p><b>When to use:</b> after every mock, every time. <b>When not:</b> do not chase 44 out of 44; a 36 with a clear weak list is more useful than a lucky 40 with no plan.</p>`,
        hi: `<p><b>Analogy:</b> doctor आपकी blood report line by line पढ़ता है और सिर्फ़ वही values mark करता है जो ठीक नहीं हैं। आप भी scores के साथ वही करो: सिर्फ़ weak topics mark करो, फिर उनका इलाज करो।</p>
<ol>
<li><b>हर round का total निकालो</b> (max 12, 12, 10, 10)। 60% से नीचे = lesson <b>दोबारा पढ़ो</b>। 60% से 79% = 2 दिन में <b>सवाल दोबारा करो</b>। 80% और ऊपर = revision bullets <b>skim</b> करो।</li>
<li><b>हर 0 और 1 को list करो</b> उसकी "Revise: Day N" line के साथ। एक ही day को साथ group करो; एक day पर दो misses हों तो वह day पहले।</li>
<li><b>Miss के type के हिसाब से fix:</b> खाली (0) मतलब concept नहीं है, इसलिए lesson पढ़ो; भटका हुआ 1 मतलब आता है पर shape नहीं, इसलिए चार-डिब्बे वाला answer ज़ोर से rehearse करो।</li>
<li><b>48 घंटे में retest</b> करो, सिर्फ़ वही weak सवाल। Day 30 दूसरा mock है, इसलिए आज की list से तय करो कि उससे पहले क्या revise करना है।</li>
</ol>
<p>नीचे का snippet topics को score से sort करके action print करता है। Spreadsheet, notebook या code, जो कल सच में खोलोगे वही use करो।</p>
<p><b>कब use करें:</b> हर mock के बाद, हर बार। <b>कब नहीं:</b> 44 में से 44 के पीछे मत भागो; साफ़ weak list के साथ 36, बिना plan के किस्मत वाले 40 से ज़्यादा काम का है।</p>`,
        hg: `<p><b>Analogy:</b> doctor aapki blood report line by line padhta hai aur sirf wahi values mark karta hai jo theek nahi hain. Aap bhi scores ke saath wahi karo: sirf weak topics mark karo, phir unka ilaj karo.</p>
<ol>
<li><b>Har round ka total nikalo</b> (max 12, 12, 10, 10). 60% se neeche = lesson <b>dobara padho</b>. 60% se 79% = 2 din mein <b>sawaal dobara karo</b>. 80% aur upar = revision bullets <b>skim</b> karo.</li>
<li><b>Har 0 aur 1 ko list karo</b> uski "Revise: Day N" line ke saath. Ek hi day ko saath group karo; ek day par do misses hon to woh day pehle.</li>
<li><b>Miss ke type ke hisaab se fix:</b> khaali (0) matlab concept nahi hai, isliye lesson padho; bhatka hua 1 matlab aata hai par shape nahi, isliye chaar-dibbe wala answer zor se rehearse karo.</li>
<li><b>48 ghante mein retest</b> karo, sirf wahi weak sawaal. Day 30 doosra mock hai, isliye aaj ki list se tay karo ki usse pehle kya revise karna hai.</li>
</ol>
<p>Neeche ka snippet topics ko score se sort karke action print karta hai. Spreadsheet, notebook ya code, jo kal sach mein khologe wahi use karo.</p>
<p><b>Kab use karein:</b> har mock ke baad, har baar. <b>Kab nahi:</b> 44 mein se 44 ke peeche mat bhaago; saaf weak list ke saath 36, bina plan ke kismat wale 40 se zyada kaam ka hai.</p>`
      },
      code: [
        {
          caption: {
            en: "Sort topics by score and print the next action",
            hi: "Topics को score से sort करके अगला action print करो",
            hg: "Topics ko score se sort karke agla action print karo"
          },
          src: `var scores = new (string Topic, int Day, int Points, int Max)[]
{
    ("C# and OOP", 1, 9, 12),
    ("LINQ and EF Core", 4, 5, 12),
    ("Patterns and ASP.NET Core", 8, 10, 12),
    ("SQL and architecture", 15, 6, 12),
};

foreach (var s in scores.OrderBy(s => s.Points * 1.0 / s.Max))
{
    var pct = s.Points * 100 / s.Max;
    var action = pct < 60 ? "re-read" : pct < 80 ? "redo questions" : "skim";
    Console.WriteLine($"{s.Topic}: {pct}% -> {action} (Day {s.Day})");
}`,
          check: "run",
          expected: `LINQ and EF Core: 41% -> re-read (Day 4)
SQL and architecture: 50% -> re-read (Day 15)
C# and OOP: 75% -> redo questions (Day 1)
Patterns and ASP.NET Core: 83% -> skim (Day 8)`
        }
      ]
    }
  ],
  qa: [
    // ---------- Round 1: C#, .NET runtime, LINQ, EF Core ----------
    {
      id: "r1-request-journey",
      depth: "short",
      q: "A browser calls GET /orders/42 on your ASP.NET Core API, which reads SQL Server through EF Core. Walk me through everything that happens.",
      answer: "Kestrel accepts it, middleware such as routing and authentication runs, DI builds the controller, EF Core turns LINQ into SQL on a pooled connection, and the result is serialised to JSON on the way back.",
      meaning: {
        hi: "Kestrel request लेता है, routing और authentication जैसे middleware चलते हैं, DI controller बनाता है, EF Core LINQ को SQL बनाकर pooled connection पर चलाता है, और result वापसी में JSON बनता है।",
        hg: "Kestrel request leta hai, routing aur authentication jaise middleware chalte hain, DI controller banata hai, EF Core LINQ ko SQL banakar pooled connection par chalata hai, aur result wapsi mein JSON banta hai."
      },
      explain: {
        en: `<ul>
<li><b>Order matters:</b> server (Kestrel) → middleware pipeline → endpoint routing → filters → action. A middleware that short-circuits ends the journey early.</li>
<li><b>Inside the action:</b> the scoped <code>DbContext</code> is created per request, the query is translated, the connection comes from the pool, and rows are materialised (tracked unless you use <code>AsNoTracking</code>).</li>
<li><b>On the way back:</b> the response passes through the same middleware in reverse order; headers are locked once the body starts.</li>
<li>Follow-up: "Where would you add logging, and where would a slow request hide?" (middleware for logging; the query, serialisation or a blocked thread).</li>
</ul>
<p>Revise: Day 12 (pipeline), Day 5 (EF Core queries), Day 14 (Week 2 quiz).</p>`,
        hi: `<ul>
<li><b>Order मायने रखता है:</b> server (Kestrel) → middleware pipeline → endpoint routing → filters → action। Short-circuit करने वाला middleware journey जल्दी ख़त्म कर देता है।</li>
<li><b>Action के अंदर:</b> scoped <code>DbContext</code> हर request पर बनता है, query translate होती है, connection pool से आता है, और rows बनती हैं (tracked, जब तक <code>AsNoTracking</code> न हो)।</li>
<li><b>वापसी में:</b> response उसी middleware से उल्टे order में गुज़रता है; body शुरू होते ही headers lock हो जाते हैं।</li>
<li>Follow-up: "Logging कहाँ लगाओगे, और slow request कहाँ छुपेगी?" (logging middleware में; slow हिस्सा query, serialisation या blocked thread।)</li>
</ul>
<p>Revise: Day 12 (pipeline), Day 5 (EF Core queries), Day 14 (Week 2 quiz)।</p>`,
        hg: `<ul>
<li><b>Order matter karta hai:</b> server (Kestrel) → middleware pipeline → endpoint routing → filters → action. Short-circuit karne wala middleware journey jaldi khatam kar deta hai.</li>
<li><b>Action ke andar:</b> scoped <code>DbContext</code> har request par banta hai, query translate hoti hai, connection pool se aata hai, aur rows banti hain (tracked, jab tak <code>AsNoTracking</code> na ho).</li>
<li><b>Wapsi mein:</b> response usi middleware se ulte order mein guzarta hai; body shuru hote hi headers lock ho jaate hain.</li>
<li>Follow-up: "Logging kahan lagaoge, aur slow request kahan chhupegi?" (logging middleware mein; slow hissa query, serialisation ya blocked thread.)</li>
</ul>
<p>Revise: Day 12 (pipeline), Day 5 (EF Core queries).</p>`
      }
    },
    {
      id: "r1-iterator-yield",
      depth: "detailed",
      q: "What does yield return do, and what goes wrong when a caller enumerates the result twice?",
      answer: "The compiler turns the method into a lazy state machine that produces one item per MoveNext. Each new enumeration restarts it, so side effects and database calls repeat; call ToList when you need one run.",
      meaning: {
        hi: "Compiler method को lazy state machine बना देता है जो हर MoveNext पर एक item देती है। हर नई enumeration दोबारा शुरू होती है, इसलिए side effects और database calls repeat होते हैं; एक ही run चाहिए तो ToList करो।",
        hg: "Compiler method ko lazy state machine bana deta hai jo har MoveNext par ek item deti hai. Har nayi enumeration dobara shuru hoti hai, isliye side effects aur database calls repeat hote hain; ek hi run chahiye to ToList karo."
      },
      explain: {
        en: `<ul>
<li><b>Lazy:</b> nothing in the method body runs until someone calls <code>foreach</code>, <code>ToList</code> or <code>First</code>. Items are produced on demand, so a huge sequence needs little memory.</li>
<li><b>Trap:</b> two <code>foreach</code> loops (or <code>Count()</code> then <code>foreach</code>) run the whole method twice. If it reads a file or calls an API, you pay twice and the data may differ.</li>
<li><b>Cleanup:</b> a <code>finally</code> block in the iterator runs when the loop ends or is disposed early (see the puzzle below).</li>
<li>Follow-up: "How is this different from returning a List?" (the list is eager and already filled).</li>
</ul>
<p>Revise: Day 4.</p>`,
        hi: `<ul>
<li><b>Lazy:</b> जब तक कोई <code>foreach</code>, <code>ToList</code> या <code>First</code> न बुलाए, method body का कुछ नहीं चलता। Items ज़रूरत पर बनते हैं, इसलिए बहुत बड़ी sequence में भी कम memory लगती है।</li>
<li><b>Trap:</b> दो <code>foreach</code> loops (या <code>Count()</code> फिर <code>foreach</code>) पूरा method दो बार चलाते हैं। अगर वह file पढ़ता है या API बुलाता है तो दो बार खर्च होता है और data अलग भी हो सकता है।</li>
<li><b>Cleanup:</b> iterator का <code>finally</code> block तब चलता है जब loop ख़त्म हो या जल्दी dispose हो (नीचे का puzzle देखो)।</li>
<li>Follow-up: "List return करने से यह कैसे अलग है?" (list eager है और पहले से भरी हुई।)</li>
</ul>
<p>Revise: Day 4।</p>`,
        hg: `<ul>
<li><b>Lazy:</b> jab tak koi <code>foreach</code>, <code>ToList</code> ya <code>First</code> na bulaye, method body ka kuch nahi chalta. Items zaroorat par bante hain, isliye bahut badi sequence mein bhi kam memory lagti hai.</li>
<li><b>Trap:</b> do <code>foreach</code> loops (ya <code>Count()</code> phir <code>foreach</code>) poora method do baar chalate hain. Agar woh file padhta hai ya API bulata hai to do baar kharch hota hai aur data alag bhi ho sakta hai.</li>
<li><b>Cleanup:</b> iterator ka <code>finally</code> block tab chalta hai jab loop khatam ho ya jaldi dispose ho (neeche ka puzzle dekho).</li>
<li>Follow-up: "List return karne se yeh kaise alag hai?" (list eager hai aur pehle se bhari hui.)</li>
</ul>
<p>Revise: Day 4.</p>`
      }
    },
    {
      id: "r1-bulk-import",
      depth: "short",
      q: "A nightly job must insert 200,000 rows into SQL Server. How do you do it with EF Core?",
      answer: "SaveChanges batches its commands, but tracking 200,000 entities is heavy. Save in chunks and clear the tracker, or use SqlBulkCopy or a bulk library when speed matters.",
      meaning: {
        hi: "SaveChanges commands को batch करता है, पर 200,000 entities track करना भारी है। Chunks में save करो और tracker clear करो, या speed चाहिए तो SqlBulkCopy या bulk library use करो।",
        hg: "SaveChanges commands ko batch karta hai, par 200,000 entities track karna bhaari hai. Chunks mein save karo aur tracker clear karo, ya speed chahiye to SqlBulkCopy ya bulk library use karo."
      },
      explain: {
        en: `<ul>
<li><b>Default path:</b> <code>AddRange</code> + one <code>SaveChanges</code> works but keeps every entity in memory and in the change tracker. Memory and time grow with the batch.</li>
<li><b>Chunked path:</b> add 1,000 to 5,000 rows, call <code>SaveChanges</code>, then <code>ChangeTracker.Clear()</code>. Memory stays flat; you decide the retry unit.</li>
<li><b>Fastest path:</b> <code>SqlBulkCopy</code> on SQL Server (or a bulk-extensions library) skips tracking, at the cost of fewer EF features.</li>
<li><b>TL angle:</b> make the job restartable (idempotent), log progress, and run it off-peak. Measure first; do not assume.</li>
<li>Follow-up: "What if row 150,000 fails?" (chunk transaction, a failed-rows table, and a restart point).</li>
</ul>
<p>Revise: Day 6.</p>`,
        hi: `<ul>
<li><b>Default रास्ता:</b> <code>AddRange</code> + एक <code>SaveChanges</code> चलता है, पर हर entity memory और change tracker में रहती है। Batch के साथ memory और time बढ़ते हैं।</li>
<li><b>Chunked रास्ता:</b> 1,000 से 5,000 rows add करो, <code>SaveChanges</code> बुलाओ, फिर <code>ChangeTracker.Clear()</code>। Memory flat रहती है; retry की unit आप तय करते हो।</li>
<li><b>सबसे तेज़ रास्ता:</b> SQL Server पर <code>SqlBulkCopy</code> (या bulk-extensions library) tracking skip करती है, पर EF के features कम मिलते हैं।</li>
<li><b>TL angle:</b> job को restartable (idempotent) बनाओ, progress log करो, और off-peak में चलाओ। पहले measure करो; अंदाज़ा मत लगाओ।</li>
<li>Follow-up: "Row 150,000 fail हो जाए तो?" (chunk transaction, failed-rows table, और restart point।)</li>
</ul>
<p>Revise: Day 6।</p>`,
        hg: `<ul>
<li><b>Default rasta:</b> <code>AddRange</code> + ek <code>SaveChanges</code> chalta hai, par har entity memory aur change tracker mein rehti hai. Batch ke saath memory aur time badhte hain.</li>
<li><b>Chunked rasta:</b> 1,000 se 5,000 rows add karo, <code>SaveChanges</code> bulao, phir <code>ChangeTracker.Clear()</code>. Memory flat rehti hai; retry ki unit aap tay karte ho.</li>
<li><b>Sabse tez rasta:</b> SQL Server par <code>SqlBulkCopy</code> (ya bulk-extensions library) tracking skip karti hai, par EF ke features kam milte hain.</li>
<li><b>TL angle:</b> job ko restartable (idempotent) banao, progress log karo, aur off-peak mein chalao. Pehle measure karo; andaza mat lagao.</li>
<li>Follow-up: "Row 150,000 fail ho jaye to?" (chunk transaction, failed-rows table, aur restart point.)</li>
</ul>
<p>Revise: Day 6.</p>`
      }
    },
    {
      id: "r1-time-handling",
      depth: "detailed",
      q: "Your users are in several countries and a scheduled job runs around midnight. How do you handle dates and times in .NET?",
      answer: "Store and compare times in UTC, preferably as DateTimeOffset, and convert to the user time zone only for display. Inject TimeProvider so tests can control the clock.",
      meaning: {
        hi: "Times को UTC में store और compare करो, बेहतर है DateTimeOffset में, और user के time zone में सिर्फ़ दिखाने के लिए बदलो। TimeProvider inject करो ताकि tests clock control कर सकें।",
        hg: "Times ko UTC mein store aur compare karo, behtar hai DateTimeOffset mein, aur user ke time zone mein sirf dikhane ke liye badlo. TimeProvider inject karo taki tests clock control kar sakein."
      },
      explain: {
        en: `<ul>
<li><b>UTC inside, local at the edge:</b> a <code>DateTime</code> has a <code>Kind</code> that is easy to leave as <code>Unspecified</code>, and then nobody knows what it means. <code>DateTimeOffset</code> carries the offset, so comparing two values is safe.</li>
<li><b>An offset is not a time zone:</b> +05:30 does not know about daylight saving rules elsewhere. For "9 a.m. in the user's city" store the time-zone id (<code>TimeZoneInfo</code>) and convert at the time you need it.</li>
<li><b>Testable clock:</b> inject <code>TimeProvider</code> (.NET 8) instead of calling <code>DateTime.Now</code>; tests use <code>FakeTimeProvider</code> to move time forward. <code>DateTime.Now</code> in business logic also depends on the server's zone.</li>
<li><b>Midnight jobs:</b> on a daylight-saving change a local day can have 23 or 25 hours, so schedule in UTC or use a zone-aware scheduler and test that day.</li>
<li>Follow-up: "What do you store in the database?" (UTC, or <code>datetimeoffset</code> in SQL Server).</li>
</ul>
<p>Revise: Day 25 (TimeProvider in tests).</p>`,
        hi: `<ul>
<li><b>अंदर UTC, किनारे पर local:</b> <code>DateTime</code> की <code>Kind</code> को <code>Unspecified</code> छोड़ देना आसान है, फिर किसी को मतलब पता नहीं रहता। <code>DateTimeOffset</code> offset साथ रखता है, इसलिए दो values compare करना safe है।</li>
<li><b>Offset time zone नहीं है:</b> +05:30 को दूसरी जगह की daylight saving rules पता नहीं होतीं। "User के शहर में सुबह 9 बजे" के लिए time-zone id (<code>TimeZoneInfo</code>) store करो और ज़रूरत के समय convert करो।</li>
<li><b>Testable clock:</b> <code>DateTime.Now</code> की जगह <code>TimeProvider</code> (.NET 8) inject करो; tests समय आगे बढ़ाने के लिए <code>FakeTimeProvider</code> use करते हैं। Business logic में <code>DateTime.Now</code> server के zone पर भी निर्भर है।</li>
<li><b>Midnight jobs:</b> daylight saving बदलने पर local दिन 23 या 25 घंटे का हो सकता है, इसलिए UTC में schedule करो या zone-aware scheduler लो और उस दिन को test करो।</li>
<li>Follow-up: "Database में क्या store करते हो?" (UTC, या SQL Server में <code>datetimeoffset</code>।)</li>
</ul>
<p>Revise: Day 25 (tests में TimeProvider)।</p>`,
        hg: `<ul>
<li><b>Andar UTC, kinare par local:</b> <code>DateTime</code> ki <code>Kind</code> ko <code>Unspecified</code> chhod dena aasaan hai, phir kisi ko matlab pata nahi rehta. <code>DateTimeOffset</code> offset saath rakhta hai, isliye do values compare karna safe hai.</li>
<li><b>Offset time zone nahi hai:</b> +05:30 ko doosri jagah ki daylight saving rules pata nahi hoti. "User ke shehar mein subah 9 baje" ke liye time-zone id (<code>TimeZoneInfo</code>) store karo aur zaroorat ke samay convert karo.</li>
<li><b>Testable clock:</b> <code>DateTime.Now</code> ki jagah <code>TimeProvider</code> (.NET 8) inject karo; tests samay aage badhane ke liye <code>FakeTimeProvider</code> use karte hain. Business logic mein <code>DateTime.Now</code> server ke zone par bhi nirbhar hai.</li>
<li><b>Midnight jobs:</b> daylight saving badalne par local din 23 ya 25 ghante ka ho sakta hai, isliye UTC mein schedule karo ya zone-aware scheduler lo aur us din ko test karo.</li>
<li>Follow-up: "Database mein kya store karte ho?" (UTC, ya SQL Server mein <code>datetimeoffset</code>.)</li>
</ul>
<p>Revise: Day 25 (tests mein TimeProvider).</p>`
      }
    },
    {
      id: "r1-mutable-hash-key",
      depth: "detailed",
      q: "An object is stored in a HashSet, and then one of the properties used in its GetHashCode is changed. What happens?",
      answer: "The set looks in the bucket for the new hash code, so Contains can return false although the item is still stored. Use immutable keys such as strings, ids or records.",
      meaning: {
        hi: "Set नए hash code वाले bucket में देखता है, इसलिए item अंदर होते हुए भी Contains false दे सकता है। Strings, ids या records जैसी immutable keys use करो।",
        hg: "Set naye hash code wale bucket mein dekhta hai, isliye item andar hote hue bhi Contains false de sakta hai. Strings, ids ya records jaisi immutable keys use karo."
      },
      explain: {
        en: `<ul>
<li>A hash set stores each item in a bucket picked from its hash code at insert time. It does not re-hash later.</li>
<li>After you mutate a field that feeds <code>GetHashCode</code>, <code>Contains</code> computes a different hash, checks the wrong bucket and says "not found". The item is still inside, so you cannot remove it normally either: a quiet leak.</li>
<li><b>Rule:</b> only use fields that never change after construction in <code>Equals</code>/<code>GetHashCode</code>, or use an immutable type.</li>
<li>Follow-up: "What is the contract between Equals and GetHashCode?" (equal objects must give equal hash codes).</li>
</ul>
<p>Revise: Day 2.</p>`,
        hi: `<ul>
<li>Hash set हर item को insert के समय उसके hash code से चुने bucket में रखता है। यह बाद में दोबारा hash नहीं करता।</li>
<li><code>GetHashCode</code> में आने वाला field बदलने के बाद <code>Contains</code> अलग hash निकालता है, ग़लत bucket देखता है और "not found" कहता है। Item अंदर ही रहता है, इसलिए उसे normal तरीक़े से remove भी नहीं कर सकते: एक चुप leak।</li>
<li><b>Rule:</b> <code>Equals</code>/<code>GetHashCode</code> में सिर्फ़ वो fields रखो जो construction के बाद बदलते नहीं, या immutable type use करो।</li>
<li>Follow-up: "Equals और GetHashCode का contract क्या है?" (बराबर objects के hash codes बराबर होने चाहिए।)</li>
</ul>
<p>Revise: Day 2।</p>`,
        hg: `<ul>
<li>Hash set har item ko insert ke samay uske hash code se chune bucket mein rakhta hai. Yeh baad mein dobara hash nahi karta.</li>
<li><code>GetHashCode</code> mein aane wala field badalne ke baad <code>Contains</code> alag hash nikalta hai, galat bucket dekhta hai aur "not found" kehta hai. Item andar hi rehta hai, isliye use normal tareeqe se remove bhi nahi kar sakte: ek chup leak.</li>
<li><b>Rule:</b> <code>Equals</code>/<code>GetHashCode</code> mein sirf woh fields rakho jo construction ke baad badalte nahi, ya immutable type use karo.</li>
<li>Follow-up: "Equals aur GetHashCode ka contract kya hai?" (barabar objects ke hash codes barabar hone chahiye.)</li>
</ul>
<p>Revise: Day 2.</p>`
      }
    },
    {
      id: "r1-limit-concurrency",
      depth: "detailed",
      q: "A job calls a partner API for 5,000 ids, and Task.WhenAll on all of them overloaded the partner. How do you fix it?",
      answer: "Limit concurrency instead of starting everything at once. Use Parallel.ForEachAsync with MaxDegreeOfParallelism, or a SemaphoreSlim, and add retries with backoff.",
      meaning: {
        hi: "सब कुछ एक साथ शुरू करने की जगह concurrency सीमित करो। MaxDegreeOfParallelism के साथ Parallel.ForEachAsync या SemaphoreSlim use करो, और backoff वाले retries जोड़ो।",
        hg: "Sab kuch ek saath shuru karne ki jagah concurrency seemit karo. MaxDegreeOfParallelism ke saath Parallel.ForEachAsync ya SemaphoreSlim use karo, aur backoff wale retries jodo."
      },
      explain: {
        en: `<ul>
<li><b>Why it hurts:</b> <code>Task.WhenAll(ids.Select(CallAsync))</code> starts all 5,000 calls at once. That can exhaust sockets, trigger the partner's rate limit (HTTP 429) and make everything slower.</li>
<li><b>Bounded parallelism:</b> <code>Parallel.ForEachAsync(ids, new ParallelOptions { MaxDegreeOfParallelism = 8, CancellationToken = ct }, async (id, token) =&gt; ...)</code> (.NET 6+). A <code>SemaphoreSlim</code> around each call gives the same limit; batching is a third option.</li>
<li><b>Be a good client:</b> honour <code>Retry-After</code> on 429, retry with backoff and jitter, and pass the <code>CancellationToken</code> through.</li>
<li><b>Pick the number by measuring:</b> start at the partner's documented limit or lower and raise it while error rates stay flat. Do not share one <code>DbContext</code> between the parallel workers.</li>
<li>Follow-up: "Order of results?" (not guaranteed; collect into a thread-safe structure or use the id as the key).</li>
</ul>
<p>Revise: Day 3.</p>`,
        hi: `<ul>
<li><b>क्यों नुकसान:</b> <code>Task.WhenAll(ids.Select(CallAsync))</code> सारी 5,000 calls एक साथ शुरू करता है। इससे sockets ख़त्म हो सकते हैं, partner की rate limit (HTTP 429) लग सकती है और सब कुछ धीमा हो जाता है।</li>
<li><b>सीमित parallelism:</b> <code>Parallel.ForEachAsync(ids, new ParallelOptions { MaxDegreeOfParallelism = 8, CancellationToken = ct }, async (id, token) =&gt; ...)</code> (.NET 6+)। हर call के आसपास <code>SemaphoreSlim</code> वही limit देता है; batching तीसरा option है।</li>
<li><b>अच्छे client बनो:</b> 429 पर <code>Retry-After</code> मानो, backoff और jitter के साथ retry करो, और <code>CancellationToken</code> आगे pass करो।</li>
<li><b>Number measure करके चुनो:</b> partner की documented limit या उससे कम से शुरू करो और error rate flat रहे तब तक बढ़ाओ। Parallel workers के बीच एक <code>DbContext</code> share मत करो।</li>
<li>Follow-up: "Results का order?" (guaranteed नहीं; thread-safe structure में collect करो या id को key बनाओ।)</li>
</ul>
<p>Revise: Day 3।</p>`,
        hg: `<ul>
<li><b>Kyon nuksaan:</b> <code>Task.WhenAll(ids.Select(CallAsync))</code> saari 5,000 calls ek saath shuru karta hai. Isse sockets khatam ho sakte hain, partner ki rate limit (HTTP 429) lag sakti hai aur sab kuch dheema ho jaata hai.</li>
<li><b>Seemit parallelism:</b> <code>Parallel.ForEachAsync(ids, new ParallelOptions { MaxDegreeOfParallelism = 8, CancellationToken = ct }, async (id, token) =&gt; ...)</code> (.NET 6+). Har call ke aaspaas <code>SemaphoreSlim</code> wahi limit deta hai; batching teesra option hai.</li>
<li><b>Achhe client bano:</b> 429 par <code>Retry-After</code> mano, backoff aur jitter ke saath retry karo, aur <code>CancellationToken</code> aage pass karo.</li>
<li><b>Number measure karke chuno:</b> partner ki documented limit ya usse kam se shuru karo aur error rate flat rahe tab tak badhao. Parallel workers ke beech ek <code>DbContext</code> share mat karo.</li>
<li>Follow-up: "Results ka order?" (guaranteed nahi; thread-safe structure mein collect karo ya id ko key banao.)</li>
</ul>
<p>Revise: Day 3.</p>`
      }
    },
    // ---------- Round 2: design, SOLID, ASP.NET Core, Web API ----------
    {
      id: "r2-add-sms-channel",
      depth: "short",
      q: "OrderService sends an email today. Next quarter you must add SMS and WhatsApp without editing OrderService each time. How do you design it?",
      answer: "Depend on an INotifier abstraction with one class per channel, registered in DI. OrderService calls the injected IEnumerable&lt;INotifier&gt;, so a new channel is a new class plus one registration.",
      meaning: {
        hi: "INotifier abstraction पर depend करो, हर channel की एक class, DI में registered। OrderService injected IEnumerable&lt;INotifier&gt; को बुलाती है, इसलिए नया channel मतलब नई class और एक registration।",
        hg: "INotifier abstraction par depend karo, har channel ki ek class, DI mein registered. OrderService injected IEnumerable&lt;INotifier&gt; ko bulati hai, isliye naya channel matlab nayi class aur ek registration."
      },
      explain: {
        en: `<ul>
<li><b>Open/Closed:</b> the old class stays closed for change; behaviour grows by adding classes. <b>Dependency Inversion:</b> <code>OrderService</code> depends on the interface, not on <code>SmtpClient</code>.</li>
<li><b>Wiring:</b> register each notifier (<code>AddScoped&lt;INotifier, EmailNotifier&gt;()</code> and so on); DI injects all of them as <code>IEnumerable&lt;INotifier&gt;</code>. Use keyed services if you need one specific channel.</li>
<li><b>Trade-off:</b> a failing channel should not fail the order. Send after the order is saved, ideally through a queue, and retry per channel.</li>
<li>Follow-up: "Why not a switch on channel type?" (every new channel edits tested code and grows a god class).</li>
</ul>
<p>Revise: Day 8 (Open/Closed), Day 9.</p>`,
        hi: `<ul>
<li><b>Open/Closed:</b> पुरानी class change के लिए बंद रहती है; classes जोड़कर behaviour बढ़ता है। <b>Dependency Inversion:</b> <code>OrderService</code> interface पर depend करती है, <code>SmtpClient</code> पर नहीं।</li>
<li><b>Wiring:</b> हर notifier register करो (<code>AddScoped&lt;INotifier, EmailNotifier&gt;()</code> वगैरह); DI सबको <code>IEnumerable&lt;INotifier&gt;</code> के रूप में inject करता है। एक specific channel चाहिए तो keyed services use करो।</li>
<li><b>Trade-off:</b> कोई channel fail हो तो order fail नहीं होना चाहिए। Order save होने के बाद भेजो, बेहतर है queue से, और retry channel के हिसाब से करो।</li>
<li>Follow-up: "Channel type पर switch क्यों नहीं?" (हर नया channel tested code बदलता है और god class बढ़ती है।)</li>
</ul>
<p>Revise: Day 8 (Open/Closed), Day 9।</p>`,
        hg: `<ul>
<li><b>Open/Closed:</b> purani class change ke liye band rehti hai; classes jodkar behaviour badhta hai. <b>Dependency Inversion:</b> <code>OrderService</code> interface par depend karti hai, <code>SmtpClient</code> par nahi.</li>
<li><b>Wiring:</b> har notifier register karo (<code>AddScoped&lt;INotifier, EmailNotifier&gt;()</code> wagairah); DI sabko <code>IEnumerable&lt;INotifier&gt;</code> ke roop mein inject karta hai. Ek specific channel chahiye to keyed services use karo.</li>
<li><b>Trade-off:</b> koi channel fail ho to order fail nahi hona chahiye. Order save hone ke baad bhejo, behtar hai queue se, aur retry channel ke hisaab se karo.</li>
<li>Follow-up: "Channel type par switch kyon nahi?" (har naya channel tested code badalta hai aur god class badhti hai.)</li>
</ul>
<p>Revise: Day 8 (Open/Closed), Day 9.</p>`
      }
    },
    {
      id: "r2-switch-smell",
      depth: "detailed",
      q: "You find the same switch on PaymentType in six places. Which pattern helps, and what is the trade-off?",
      answer: "Replace the switch with Strategy: one class per payment type behind an interface, picked by a factory or keyed DI. The trade-off is more classes, so skip it for two stable cases.",
      meaning: {
        hi: "Switch की जगह Strategy लाओ: हर payment type की एक class, interface के पीछे, factory या keyed DI से चुनी हुई। Trade-off है ज़्यादा classes, इसलिए दो stable cases के लिए मत करो।",
        hg: "Switch ki jagah Strategy lao: har payment type ki ek class, interface ke peeche, factory ya keyed DI se chuni hui. Trade-off hai zyada classes, isliye do stable cases ke liye mat karo."
      },
      explain: {
        en: `<ul>
<li><b>Smell:</b> the same <code>switch</code> repeated is <b>shotgun surgery</b>; a new payment type means six edits and one is always missed.</li>
<li><b>Strategy:</b> <code>IPaymentProcessor</code> with <code>UpiProcessor</code>, <code>CardProcessor</code> and so on. One place chooses the processor (a factory, or a dictionary built from DI); the rest of the code just calls the interface.</li>
<li><b>Trade-off:</b> more files and a lookup step. For two cases that never change, a plain <code>switch</code> expression is simpler and honest. Do not add patterns for decoration.</li>
<li>Follow-up: "What if the logic differs only a little?" (shared base or composition for the common part).</li>
</ul>
<p>Revise: Day 10 (Strategy), Day 9 (Factory).</p>`,
        hi: `<ul>
<li><b>Smell:</b> वही <code>switch</code> बार-बार हो तो यह <b>shotgun surgery</b> है; नया payment type मतलब छह जगह edit और एक हमेशा छूट जाती है।</li>
<li><b>Strategy:</b> <code>IPaymentProcessor</code> के साथ <code>UpiProcessor</code>, <code>CardProcessor</code> वगैरह। एक ही जगह processor चुनी जाती है (factory, या DI से बना dictionary); बाक़ी code सिर्फ़ interface बुलाता है।</li>
<li><b>Trade-off:</b> ज़्यादा files और एक lookup step। दो cases जो कभी नहीं बदलते, उनके लिए सादा <code>switch</code> expression आसान और ईमानदार है। सजावट के लिए patterns मत लगाओ।</li>
<li>Follow-up: "Logic में थोड़ा ही फ़र्क़ हो तो?" (common हिस्से के लिए shared base या composition।)</li>
</ul>
<p>Revise: Day 10 (Strategy), Day 9 (Factory)।</p>`,
        hg: `<ul>
<li><b>Smell:</b> wahi <code>switch</code> baar-baar ho to yeh <b>shotgun surgery</b> hai; naya payment type matlab chhe jagah edit aur ek hamesha chhoot jaati hai.</li>
<li><b>Strategy:</b> <code>IPaymentProcessor</code> ke saath <code>UpiProcessor</code>, <code>CardProcessor</code> wagairah. Ek hi jagah processor chuni jaati hai (factory, ya DI se bana dictionary); baaki code sirf interface bulata hai.</li>
<li><b>Trade-off:</b> zyada files aur ek lookup step. Do cases jo kabhi nahi badalte, unke liye saada <code>switch</code> expression aasaan aur imaandaar hai. Sajaawat ke liye patterns mat lagao.</li>
<li>Follow-up: "Logic mein thoda hi farq ho to?" (common hisse ke liye shared base ya composition.)</li>
</ul>
<p>Revise: Day 10 (Strategy), Day 9 (Factory).</p>`
      }
    },
    {
      id: "r2-health-checks",
      depth: "detailed",
      q: "Kubernetes keeps restarting your pods even though the app is fine. How do health checks help, and how do liveness and readiness differ?",
      answer: "Liveness asks if the process is alive; readiness asks if it can take traffic now. Keep liveness cheap with no database call, or a database blip makes the orchestrator restart healthy pods.",
      meaning: {
        hi: "Liveness पूछता है कि process ज़िंदा है या नहीं; readiness पूछता है कि अभी traffic ले सकता है या नहीं। Liveness सस्ता रखो, database call नहीं, वरना database की एक hiccup से orchestrator healthy pods restart करने लगता है।",
        hg: "Liveness poochhta hai ki process zinda hai ya nahi; readiness poochhta hai ki abhi traffic le sakta hai ya nahi. Liveness sasta rakho, database call nahi, warna database ki ek hiccup se orchestrator healthy pods restart karne lagta hai."
      },
      explain: {
        en: `<ul>
<li><b>Liveness:</b> "restart me if this fails". Should only fail when the process is stuck, so it checks almost nothing.</li>
<li><b>Readiness:</b> "do not send me traffic if this fails". It may check the database or a queue, and it recovers by itself when the dependency returns. A deploy step can also poll it before swapping traffic.</li>
<li><b>Mistake:</b> a liveness endpoint that calls SQL. When SQL is slow, every pod fails liveness, all restart together, and a small problem becomes an outage.</li>
<li>In ASP.NET Core you add checks with <code>AddHealthChecks()</code> and expose endpoints with <code>MapHealthChecks</code>; tag checks so each endpoint runs only its own.</li>
<li>Follow-up: "Should health endpoints be public?" (usually internal only; they leak details).</li>
</ul>
<p>Revise: Day 21 (only the readiness endpoint is covered there; the liveness/readiness split is standard Kubernetes practice).</p>`,
        hi: `<ul>
<li><b>Liveness:</b> "यह fail हो तो मुझे restart करो"। यह तभी fail होना चाहिए जब process अटका हो, इसलिए लगभग कुछ check नहीं करता।</li>
<li><b>Readiness:</b> "यह fail हो तो मुझे traffic मत भेजो"। यह database या queue check कर सकता है, और dependency लौटते ही अपने-आप ठीक हो जाता है। Deploy step traffic swap से पहले इसे poll भी कर सकता है।</li>
<li><b>ग़लती:</b> SQL बुलाने वाला liveness endpoint। SQL धीमा हो तो हर pod का liveness fail होता है, सब साथ restart होते हैं, और छोटी problem outage बन जाती है।</li>
<li>ASP.NET Core में checks <code>AddHealthChecks()</code> से जोड़ते हैं और endpoints <code>MapHealthChecks</code> से खोलते हैं; checks को tag करो ताकि हर endpoint सिर्फ़ अपने checks चलाए।</li>
<li>Follow-up: "Health endpoints public होने चाहिए?" (आमतौर पर सिर्फ़ internal; ये details leak करते हैं।)</li>
</ul>
<p>Revise: Day 21 (वहाँ सिर्फ़ readiness endpoint है; liveness/readiness का फ़र्क़ standard Kubernetes practice है)।</p>`,
        hg: `<ul>
<li><b>Liveness:</b> "yeh fail ho to mujhe restart karo". Yeh tabhi fail hona chahiye jab process atka ho, isliye lagbhag kuch check nahi karta.</li>
<li><b>Readiness:</b> "yeh fail ho to mujhe traffic mat bhejo". Yeh database ya queue check kar sakta hai, aur dependency lautte hi apne-aap theek ho jaata hai. Deploy step traffic swap se pehle ise poll bhi kar sakta hai.</li>
<li><b>Galti:</b> SQL bulane wala liveness endpoint. SQL dheema ho to har pod ka liveness fail hota hai, sab saath restart hote hain, aur chhoti problem outage ban jaati hai.</li>
<li>ASP.NET Core mein checks <code>AddHealthChecks()</code> se jodte hain aur endpoints <code>MapHealthChecks</code> se kholte hain; checks ko tag karo taki har endpoint sirf apne checks chalaye.</li>
<li>Follow-up: "Health endpoints public hone chahiye?" (aamtaur par sirf internal; yeh details leak karte hain.)</li>
</ul>
<p>Revise: Day 21 (wahan sirf readiness endpoint hai; liveness/readiness ka farq standard Kubernetes practice hai).</p>`
      }
    },
    {
      id: "r2-list-endpoint-paging",
      depth: "short",
      q: "A list endpoint sits on a table with 10 million orders. How do you design the paging?",
      answer: "Never return everything: cap the page size and return one page. Offset paging is simple but slow on deep pages; keyset paging remembers the last key and stays fast, without jumping to page 57.",
      meaning: {
        hi: "सब कुछ कभी return मत करो: page size की सीमा रखो और एक page लौटाओ। Offset paging आसान है पर deep pages पर धीमा; keyset paging आख़िरी key याद रखता है और तेज़ रहता है, पर page 57 पर jump नहीं।",
        hg: "Sab kuch kabhi return mat karo: page size ki seema rakho aur ek page lautao. Offset paging aasaan hai par deep pages par dheema; keyset paging aakhri key yaad rakhta hai aur tez rehta hai, par page 57 par jump nahi."
      },
      explain: {
        en: `<ul>
<li><b>Contract:</b> accept <code>pageSize</code> with a maximum (say 100), return the items plus a <code>nextCursor</code> or total count if the UI needs it.</li>
<li><b>Offset (<code>Skip/Take</code>):</b> the database still reads and discards all skipped rows, so page 50,000 is slow. Fine for small admin lists.</li>
<li><b>Keyset:</b> <code>Where(o =&gt; o.Id &gt; lastId).OrderBy(o =&gt; o.Id).Take(size)</code> uses the index and is fast at any depth. It needs a stable, unique sort key; add a tie-breaker column if sorting by date.</li>
<li><b>Always</b> include a deterministic <code>OrderBy</code>; paging without ordering gives unstable pages.</li>
<li>Follow-up: "A count of 10 million rows is slow too, what do you do?" (skip the total, or show an approximate one).</li>
</ul>
<p>Revise: Day 4 (keyset paging), Day 26.</p>`,
        hi: `<ul>
<li><b>Contract:</b> <code>pageSize</code> maximum के साथ लो (मान लो 100), items के साथ <code>nextCursor</code> लौटाओ, या UI को चाहिए तो total count।</li>
<li><b>Offset (<code>Skip/Take</code>):</b> database फिर भी skip होने वाली सारी rows पढ़कर फेंकता है, इसलिए page 50,000 धीमा है। छोटी admin lists के लिए ठीक।</li>
<li><b>Keyset:</b> <code>Where(o =&gt; o.Id &gt; lastId).OrderBy(o =&gt; o.Id).Take(size)</code> index use करता है और किसी भी depth पर तेज़ है। इसे stable, unique sort key चाहिए; date से sort करो तो tie-breaker column जोड़ो।</li>
<li><b>हमेशा</b> deterministic <code>OrderBy</code> रखो; ordering के बिना paging में pages अस्थिर होते हैं।</li>
<li>Follow-up: "10 million rows का count भी धीमा है, क्या करोगे?" (total छोड़ दो, या अंदाज़न दिखाओ।)</li>
</ul>
<p>Revise: Day 4 (keyset paging), Day 26।</p>`,
        hg: `<ul>
<li><b>Contract:</b> <code>pageSize</code> maximum ke saath lo (maan lo 100), items ke saath <code>nextCursor</code> lautao, ya UI ko chahiye to total count.</li>
<li><b>Offset (<code>Skip/Take</code>):</b> database phir bhi skip hone wali saari rows padhkar phenkta hai, isliye page 50,000 dheema hai. Chhoti admin lists ke liye theek.</li>
<li><b>Keyset:</b> <code>Where(o =&gt; o.Id &gt; lastId).OrderBy(o =&gt; o.Id).Take(size)</code> index use karta hai aur kisi bhi depth par tez hai. Ise stable, unique sort key chahiye; date se sort karo to tie-breaker column jodo.</li>
<li><b>Hamesha</b> deterministic <code>OrderBy</code> rakho; ordering ke bina paging mein pages asthir hote hain.</li>
<li>Follow-up: "10 million rows ka count bhi dheema hai, kya karoge?" (total chhod do, ya andaazan dikhao.)</li>
</ul>
<p>Revise: Day 4 (keyset paging), Day 26.</p>`
      }
    },
    {
      id: "r2-long-running-report",
      depth: "detailed",
      q: "A report endpoint takes three minutes to generate. How should the API handle it?",
      answer: "Return 202 Accepted with a status URL, queue the work for a background worker, and let the client poll or receive a callback. Do not hold an HTTP request open for minutes.",
      meaning: {
        hi: "Status URL के साथ 202 Accepted लौटाओ, काम background worker के लिए queue करो, और client को poll करने दो या callback दो। HTTP request को मिनटों तक खुला मत रखो।",
        hg: "Status URL ke saath 202 Accepted lautao, kaam background worker ke liye queue karo, aur client ko poll karne do ya callback do. HTTP request ko minuton tak khula mat rakho."
      },
      explain: {
        en: `<ul>
<li><b>Flow:</b> <code>POST /reports</code> stores a job row, puts a message on a queue and returns <code>202</code> with a <code>Location</code> header like <code>/reports/77</code>. A worker does the heavy work.</li>
<li><b>Status:</b> <code>GET /reports/77</code> returns <code>pending</code>, <code>running</code>, <code>done</code> (with a download link) or <code>failed</code> with a reason. A webhook or push message is an alternative to polling.</li>
<li><b>Why not wait:</b> proxies, gateways and browsers time out, a dropped connection loses the work, and a held request keeps a connection and request resources busy.</li>
<li><b>Make it safe:</b> an idempotency key so a double click does not start two reports, a retention period for old files, and authorisation on the status URL.</li>
<li>Follow-up: "When is waiting fine?" (a few hundred milliseconds, no queue needed).</li>
</ul>
<p>Revise: Day 13 (status codes), Day 14 (work after the response).</p>`,
        hi: `<ul>
<li><b>Flow:</b> <code>POST /reports</code> एक job row रखता है, queue में message डालता है और <code>Location</code> header (जैसे <code>/reports/77</code>) के साथ <code>202</code> लौटाता है। Worker भारी काम करता है।</li>
<li><b>Status:</b> <code>GET /reports/77</code> <code>pending</code>, <code>running</code>, <code>done</code> (download link के साथ) या कारण के साथ <code>failed</code> लौटाता है। Polling का विकल्प webhook या push message है।</li>
<li><b>इंतज़ार क्यों नहीं:</b> proxies, gateways और browsers timeout करते हैं, connection टूटे तो काम खो जाता है, और खुली request एक connection और request resources रोके रखती है।</li>
<li><b>Safe बनाओ:</b> idempotency key ताकि double click से दो reports न बनें, पुरानी files की retention period, और status URL पर authorisation।</li>
<li>Follow-up: "इंतज़ार कब ठीक है?" (कुछ सौ milliseconds, queue की ज़रूरत नहीं।)</li>
</ul>
<p>Revise: Day 13 (status codes), Day 14 (response के बाद का काम)।</p>`,
        hg: `<ul>
<li><b>Flow:</b> <code>POST /reports</code> ek job row rakhta hai, queue mein message daalta hai aur <code>Location</code> header (jaise <code>/reports/77</code>) ke saath <code>202</code> lautata hai. Worker bhaari kaam karta hai.</li>
<li><b>Status:</b> <code>GET /reports/77</code> <code>pending</code>, <code>running</code>, <code>done</code> (download link ke saath) ya kaaran ke saath <code>failed</code> lautata hai. Polling ka vikalp webhook ya push message hai.</li>
<li><b>Intezaar kyon nahi:</b> proxies, gateways aur browsers timeout karte hain, connection toote to kaam kho jaata hai, aur khuli request ek connection aur request resources roke rakhti hai.</li>
<li><b>Safe banao:</b> idempotency key taki double click se do reports na bane, purani files ki retention period, aur status URL par authorisation.</li>
<li>Follow-up: "Intezaar kab theek hai?" (kuch sau milliseconds, queue ki zaroorat nahi.)</li>
</ul>
<p>Revise: Day 13 (status codes), Day 14 (response ke baad ka kaam).</p>`
      }
    },
    {
      id: "r2-config-per-environment",
      depth: "detailed",
      q: "How do you manage configuration and secrets across Dev, Test and Prod in an ASP.NET Core app?",
      answer: "Layered configuration where the last source wins: appsettings.json, the environment file, user secrets in Development, environment variables, command line. Production adds Key Vault; no passwords in the repo.",
      meaning: {
        hi: "Layered configuration जिसमें आख़िरी source जीतता है: appsettings.json, environment file, Development में user secrets, environment variables, command line। Production में Key Vault जुड़ता है; repo में कोई password नहीं।",
        hg: "Layered configuration jisme aakhri source jeetta hai: appsettings.json, environment file, Development mein user secrets, environment variables, command line. Production mein Key Vault judta hai; repo mein koi password nahi."
      },
      explain: {
        en: `<ul>
<li><b>Default order (the last source wins):</b> <code>appsettings.json</code> → <code>appsettings.{Environment}.json</code> → user secrets (Development only) → environment variables → command-line arguments. Key Vault is added on top as an extra provider.</li>
<li><b>Use it like this:</b> the base file holds defaults, each environment file overrides only what differs, and the pipeline or platform sets environment variables for the rest.</li>
<li><b>Secrets:</b> <code>dotnet user-secrets</code> on a developer machine; in Azure use Key Vault (references or the vault provider) with a Managed Identity so the app holds no credential at all.</li>
<li><b>Typed access:</b> bind sections to classes with the options pattern and validate on startup, so a missing value fails at deploy time, not at 2 a.m.</li>
<li><b>Same artifact everywhere:</b> config stays outside the build, as the CI/CD principle says.</li>
<li>Follow-up: "How does a changed setting reach a running app?" (restart, or <code>IOptionsMonitor</code> for reloadable sources).</li>
</ul>
<p>Revise: Day 12 (configuration), Day 20.</p>`,
        hi: `<ul>
<li><b>Default order (आख़िरी source जीतता है):</b> <code>appsettings.json</code> → <code>appsettings.{Environment}.json</code> → user secrets (सिर्फ़ Development में) → environment variables → command-line arguments। Key Vault ऊपर से एक extra provider के रूप में जुड़ता है।</li>
<li><b>ऐसे use करो:</b> base file में defaults, हर environment file सिर्फ़ वही override करती है जो अलग है, और बाक़ी के लिए pipeline या platform environment variables सेट करता है।</li>
<li><b>Secrets:</b> developer machine पर <code>dotnet user-secrets</code>; Azure में Key Vault (references या vault provider) Managed Identity के साथ ताकि app के पास कोई credential हो ही नहीं।</li>
<li><b>Typed access:</b> options pattern से sections को classes में bind करो और startup पर validate करो, ताकि missing value deploy के समय fail हो, रात 2 बजे नहीं।</li>
<li><b>हर जगह वही artifact:</b> config build के बाहर रहता है, जैसा CI/CD principle कहता है।</li>
<li>Follow-up: "बदली हुई setting चल रहे app तक कैसे पहुँचती है?" (restart, या reloadable sources के लिए <code>IOptionsMonitor</code>।)</li>
</ul>
<p>Revise: Day 12 (configuration), Day 20।</p>`,
        hg: `<ul>
<li><b>Default order (aakhri source jeetta hai):</b> <code>appsettings.json</code> → <code>appsettings.{Environment}.json</code> → user secrets (sirf Development mein) → environment variables → command-line arguments. Key Vault upar se ek extra provider ke roop mein judta hai.</li>
<li><b>Aise use karo:</b> base file mein defaults, har environment file sirf wahi override karti hai jo alag hai, aur baaki ke liye pipeline ya platform environment variables set karta hai.</li>
<li><b>Secrets:</b> developer machine par <code>dotnet user-secrets</code>; Azure mein Key Vault (references ya vault provider) Managed Identity ke saath taki app ke paas koi credential ho hi nahi.</li>
<li><b>Typed access:</b> options pattern se sections ko classes mein bind karo aur startup par validate karo, taki missing value deploy ke samay fail ho, raat 2 baje nahi.</li>
<li><b>Har jagah wahi artifact:</b> config build ke bahar rehta hai, jaisa CI/CD principle kehta hai.</li>
<li>Follow-up: "Badli hui setting chalte app tak kaise pahunchti hai?" (restart, ya reloadable sources ke liye <code>IOptionsMonitor</code>.)</li>
</ul>
<p>Revise: Day 12 (configuration), Day 20.</p>`
      }
    },
    // ---------- Round 3: data, architecture, microservices ----------
    {
      id: "r3-top-n-per-customer",
      depth: "short",
      q: "Write a SQL Server query that returns the two highest orders for each customer.",
      answer: "Use ROW_NUMBER() OVER (PARTITION BY CustomerId ORDER BY Amount DESC) in a CTE and keep rows where the number is 2 or less. Use RANK or DENSE_RANK if tied rows should all stay.",
      meaning: {
        hi: "CTE में ROW_NUMBER() OVER (PARTITION BY CustomerId ORDER BY Amount DESC) लगाओ और जहाँ number 2 या कम हो वो rows रखो। Tied rows सब रखनी हों तो RANK या DENSE_RANK।",
        hg: "CTE mein ROW_NUMBER() OVER (PARTITION BY CustomerId ORDER BY Amount DESC) lagao aur jahan number 2 ya kam ho woh rows rakho. Tied rows sab rakhni hon to RANK ya DENSE_RANK."
      },
      explain: {
        en: `<ul>
<li><b>Why a CTE:</b> a window function cannot be used in <code>WHERE</code> directly, so number the rows first, then filter in the outer query.</li>
<li><b>Tie-breaker:</b> add a unique column to <code>ORDER BY</code> (like <code>OrderId</code>) so the result is deterministic when two amounts are equal.</li>
<li><b>Ties policy:</b> <code>ROW_NUMBER</code> picks exactly 2 rows per customer; <code>RANK</code> or <code>DENSE_RANK</code> can return more when amounts tie. Say which one the business wants.</li>
<li><b>Performance:</b> an index on <code>(CustomerId, Amount DESC)</code> lets SQL Server avoid a big sort.</li>
<li>Follow-up: "Same in EF Core?" (<code>GroupBy</code> with <code>OrderByDescending().Take(2)</code> translates in recent versions; check the generated SQL).</li>
</ul>
<p>Revise: Day 18.</p>`,
        hi: `<ul>
<li><b>CTE क्यों:</b> window function सीधे <code>WHERE</code> में नहीं लगा सकते, इसलिए पहले rows number करो, फिर बाहरी query में filter।</li>
<li><b>Tie-breaker:</b> <code>ORDER BY</code> में एक unique column (जैसे <code>OrderId</code>) जोड़ो ताकि दो amounts बराबर हों तब भी result deterministic रहे।</li>
<li><b>Ties की policy:</b> <code>ROW_NUMBER</code> हर customer की ठीक 2 rows चुनता है; amounts tie हों तो <code>RANK</code> या <code>DENSE_RANK</code> ज़्यादा rows दे सकते हैं। बताओ कि business को कौन-सा चाहिए।</li>
<li><b>Performance:</b> <code>(CustomerId, Amount DESC)</code> पर index से SQL Server को बड़ी sort नहीं करनी पड़ती।</li>
<li>Follow-up: "EF Core में यही?" (<code>GroupBy</code> के साथ <code>OrderByDescending().Take(2)</code> नए versions में translate होता है; generated SQL देखो।)</li>
</ul>
<p>Revise: Day 18।</p>`,
        hg: `<ul>
<li><b>CTE kyon:</b> window function seedhe <code>WHERE</code> mein nahi laga sakte, isliye pehle rows number karo, phir bahari query mein filter.</li>
<li><b>Tie-breaker:</b> <code>ORDER BY</code> mein ek unique column (jaise <code>OrderId</code>) jodo taki do amounts barabar hon tab bhi result deterministic rahe.</li>
<li><b>Ties ki policy:</b> <code>ROW_NUMBER</code> har customer ki theek 2 rows chunta hai; amounts tie hon to <code>RANK</code> ya <code>DENSE_RANK</code> zyada rows de sakte hain. Batao ki business ko kaun-sa chahiye.</li>
<li><b>Performance:</b> <code>(CustomerId, Amount DESC)</code> par index se SQL Server ko badi sort nahi karni padti.</li>
<li>Follow-up: "EF Core mein yahi?" (<code>GroupBy</code> ke saath <code>OrderByDescending().Take(2)</code> naye versions mein translate hota hai; generated SQL dekho.)</li>
</ul>
<p>Revise: Day 18.</p>`
      },
      code: [
        {
          caption: {
            en: "Top 2 orders per customer with ROW_NUMBER (SQL Server)",
            hi: "ROW_NUMBER से हर customer की top 2 orders (SQL Server)",
            hg: "ROW_NUMBER se har customer ki top 2 orders (SQL Server)"
          },
          lang: "sql",
          src: `CREATE TABLE dbo.Orders (OrderId int PRIMARY KEY, CustomerId int NOT NULL, Amount int NOT NULL);
INSERT dbo.Orders VALUES (1, 1, 500), (2, 1, 900), (3, 1, 700), (4, 2, 300), (5, 2, 300), (6, 2, 100);

WITH ranked AS (
    SELECT OrderId, CustomerId, Amount,
           ROW_NUMBER() OVER (PARTITION BY CustomerId ORDER BY Amount DESC, OrderId) AS rn
    FROM dbo.Orders
)
SELECT CustomerId, OrderId, Amount
FROM ranked
WHERE rn <= 2
ORDER BY CustomerId, rn;`,
          check: "run",
          expected: `1 2 900
1 3 700
2 4 300
2 5 300`
        }
      ]
    },
    {
      id: "r3-sproc-one-big-customer",
      depth: "detailed",
      q: "A stored procedure is fast for most customers but takes a minute for one very large customer. What do you suspect and how do you confirm it?",
      answer: "Parameter sniffing: the plan was built for a small first value and is reused for a large one. Compare actual plans, then try OPTION (RECOMPILE), OPTIMIZE FOR, or Query Store plan forcing.",
      meaning: {
        hi: "Parameter sniffing: plan छोटी पहली value के लिए बना और बड़ी value पर भी reuse हुआ। Actual plans compare करो, फिर OPTION (RECOMPILE), OPTIMIZE FOR या Query Store plan forcing try करो।",
        hg: "Parameter sniffing: plan chhoti pehli value ke liye bana aur badi value par bhi reuse hua. Actual plans compare karo, phir OPTION (RECOMPILE), OPTIMIZE FOR ya Query Store plan forcing try karo."
      },
      explain: {
        en: `<ul>
<li><b>What happens:</b> SQL Server compiles the plan using the parameter values of the first call and caches it. A plan good for 10 rows (seek and key lookups) is bad for 5 million rows (it needs a scan).</li>
<li><b>Confirm:</b> run the procedure for both customers with the actual execution plan on; compare estimated and actual rows; check the compiled parameter value in the plan. Query Store shows plan changes over time.</li>
<li><b>Fixes (trade-offs):</b> <code>OPTION (RECOMPILE)</code> costs CPU on every call; <code>OPTIMIZE FOR</code> favours one case; Query Store forcing pins a good plan; fresh statistics or a better index may remove the problem. SQL Server 2022 adds parameter-sensitive plan optimization for some cases.</li>
<li>Follow-up: "Why does it happen after a restart only?" (the plan cache was cleared and the first caller was a small customer).</li>
</ul>
<p>Revise: Day 18.</p>`,
        hi: `<ul>
<li><b>क्या होता है:</b> SQL Server पहली call की parameter values से plan compile करके cache कर लेता है। 10 rows के लिए अच्छा plan (seek और key lookups) 5 million rows के लिए बुरा है (वहाँ scan चाहिए)।</li>
<li><b>Confirm कैसे:</b> actual execution plan on करके procedure दोनों customers के लिए चलाओ; estimated और actual rows compare करो; plan में compiled parameter value देखो। Query Store समय के साथ plan changes दिखाता है।</li>
<li><b>Fixes (trade-offs):</b> <code>OPTION (RECOMPILE)</code> हर call पर CPU खर्च करता है; <code>OPTIMIZE FOR</code> एक case का पक्ष लेता है; Query Store forcing अच्छा plan pin करता है; fresh statistics या बेहतर index से problem हट सकती है। SQL Server 2022 कुछ cases के लिए parameter-sensitive plan optimization जोड़ता है।</li>
<li>Follow-up: "यह सिर्फ़ restart के बाद क्यों होता है?" (plan cache साफ़ हो गया और पहला caller छोटा customer था।)</li>
</ul>
<p>Revise: Day 18।</p>`,
        hg: `<ul>
<li><b>Kya hota hai:</b> SQL Server pehli call ki parameter values se plan compile karke cache kar leta hai. 10 rows ke liye achha plan (seek aur key lookups) 5 million rows ke liye bura hai (wahan scan chahiye).</li>
<li><b>Confirm kaise:</b> actual execution plan on karke procedure dono customers ke liye chalao; estimated aur actual rows compare karo; plan mein compiled parameter value dekho. Query Store samay ke saath plan changes dikhata hai.</li>
<li><b>Fixes (trade-offs):</b> <code>OPTION (RECOMPILE)</code> har call par CPU kharch karta hai; <code>OPTIMIZE FOR</code> ek case ka paksh leta hai; Query Store forcing achha plan pin karta hai; fresh statistics ya behtar index se problem hat sakti hai. SQL Server 2022 kuch cases ke liye parameter-sensitive plan optimization jodta hai.</li>
<li>Follow-up: "Yeh sirf restart ke baad kyon hota hai?" (plan cache saaf ho gaya aur pehla caller chhota customer tha.)</li>
</ul>
<p>Revise: Day 18.</p>`
      }
    },
    {
      id: "r3-latency-budget",
      depth: "short",
      q: "Each request to your API makes three downstream service calls and the 95th-percentile latency is two seconds. How do you bring it down?",
      answer: "Find where the time goes with traces first. Then run independent calls in parallel with Task.WhenAll, cache stable data, set timeouts, and merge chatty calls into one.",
      meaning: {
        hi: "पहले traces से देखो कि समय कहाँ जा रहा है। फिर independent calls को Task.WhenAll से parallel चलाओ, stable data cache करो, timeouts लगाओ, और chatty calls को एक में मिलाओ।",
        hg: "Pehle traces se dekho ki samay kahan ja raha hai. Phir independent calls ko Task.WhenAll se parallel chalao, stable data cache karo, timeouts lagao, aur chatty calls ko ek mein milao."
      },
      explain: {
        en: `<ul>
<li><b>Measure first:</b> a distributed trace shows which of the three calls (or the database) dominates. Optimising the wrong one wastes a week.</li>
<li><b>Parallel:</b> if call B does not need call A's result, start both and <code>await Task.WhenAll</code>. Latency becomes the slowest call, not the sum. Never share one <code>DbContext</code> across parallel tasks.</li>
<li><b>Less work:</b> cache data that rarely changes, ask for only the fields you need, and replace many small calls with one batch call or a read model.</li>
<li><b>Tail control:</b> a timeout, a retry with backoff and a circuit breaker keep one slow service from setting your p95.</li>
<li>Follow-up: "Why p95 and not the average?" (the average hides the slow requests that users remember).</li>
</ul>
<p>Revise: Day 16 (tracing, timeouts), Day 3 (WhenAll).</p>`,
        hi: `<ul>
<li><b>पहले measure:</b> distributed trace दिखाता है कि तीन calls (या database) में से कौन हावी है। ग़लत चीज़ optimise करने में हफ़्ता बर्बाद होता है।</li>
<li><b>Parallel:</b> call B को call A का result न चाहिए तो दोनों शुरू करो और <code>await Task.WhenAll</code> करो। Latency सबसे धीमी call के बराबर हो जाती है, योग के नहीं। एक <code>DbContext</code> को parallel tasks में कभी share मत करो।</li>
<li><b>कम काम:</b> जो data कम बदलता है उसे cache करो, सिर्फ़ ज़रूरी fields माँगो, और कई छोटी calls की जगह एक batch call या read model लाओ।</li>
<li><b>Tail control:</b> timeout, backoff वाला retry और circuit breaker एक धीमी service को आपका p95 तय करने से रोकते हैं।</li>
<li>Follow-up: "Average क्यों नहीं, p95 क्यों?" (average उन slow requests को छुपा देता है जो users को याद रहती हैं।)</li>
</ul>
<p>Revise: Day 16 (tracing, timeouts), Day 3 (WhenAll)।</p>`,
        hg: `<ul>
<li><b>Pehle measure:</b> distributed trace dikhata hai ki teen calls (ya database) mein se kaun haavi hai. Galat cheez optimise karne mein hafta barbaad hota hai.</li>
<li><b>Parallel:</b> call B ko call A ka result na chahiye to dono shuru karo aur <code>await Task.WhenAll</code> karo. Latency sabse dheemi call ke barabar ho jaati hai, yog ke nahi. Ek <code>DbContext</code> ko parallel tasks mein kabhi share mat karo.</li>
<li><b>Kam kaam:</b> jo data kam badalta hai use cache karo, sirf zaroori fields maango, aur kai chhoti calls ki jagah ek batch call ya read model lao.</li>
<li><b>Tail control:</b> timeout, backoff wala retry aur circuit breaker ek dheemi service ko aapka p95 tay karne se rokte hain.</li>
<li>Follow-up: "Average kyon nahi, p95 kyon?" (average un slow requests ko chhupa deta hai jo users ko yaad rehti hain.)</li>
</ul>
<p>Revise: Day 16 (tracing, timeouts), Day 3 (WhenAll).</p>`
      }
    },
    {
      id: "r3-sargable-year-filter",
      depth: "detailed",
      q: "A report filters with WHERE YEAR(OrderDate) = 2025 and ignores the index on OrderDate. Why, and how do you rewrite it?",
      answer: "A function on the column makes the predicate non-sargable, so SQL Server cannot seek the index. Rewrite it as a range: OrderDate &gt;= 2025-01-01 and OrderDate &lt; 2026-01-01.",
      meaning: {
        hi: "Column पर function लगाने से predicate non-sargable हो जाता है, इसलिए SQL Server index seek नहीं कर पाता। इसे range बनाओ: OrderDate &gt;= 2025-01-01 और OrderDate &lt; 2026-01-01।",
        hg: "Column par function lagane se predicate non-sargable ho jaata hai, isliye SQL Server index seek nahi kar paata. Ise range banao: OrderDate &gt;= 2025-01-01 aur OrderDate &lt; 2026-01-01."
      },
      explain: {
        en: `<ul>
<li><b>Why:</b> an index is sorted by the raw <code>OrderDate</code> values. <code>YEAR(OrderDate)</code> must be computed for every row, so the engine scans instead of seeking.</li>
<li><b>Rewrite:</b> <code>WHERE OrderDate &gt;= '2025-01-01' AND OrderDate &lt; '2026-01-01'</code>. The half-open range also avoids the end-of-day bug of <code>BETWEEN</code> with <code>datetime</code> values.</li>
<li><b>Same trap:</b> <code>LEFT(Name, 3)</code>, <code>ISNULL(col, 0)</code>, <code>CONVERT</code> on the column, a leading wildcard <code>LIKE '%abc'</code>, and a parameter whose type differs from the column (implicit conversion).</li>
<li><b>EF Core:</b> a filter such as <code>o.OrderDate.Year == 2025</code> can translate to a function on the column; write the range yourself and read the generated SQL.</li>
<li>Follow-up: "How do you prove it?" (compare the actual plan: Index Scan versus Index Seek, and the logical reads).</li>
</ul>
<p>Revise: Day 18.</p>`,
        hi: `<ul>
<li><b>क्यों:</b> index कच्ची <code>OrderDate</code> values के हिसाब से sorted है। <code>YEAR(OrderDate)</code> हर row के लिए निकालना पड़ता है, इसलिए engine seek की जगह scan करता है।</li>
<li><b>Rewrite:</b> <code>WHERE OrderDate &gt;= '2025-01-01' AND OrderDate &lt; '2026-01-01'</code>। यह half-open range <code>datetime</code> values वाले <code>BETWEEN</code> के end-of-day bug से भी बचाती है।</li>
<li><b>वही trap:</b> <code>LEFT(Name, 3)</code>, <code>ISNULL(col, 0)</code>, column पर <code>CONVERT</code>, शुरू में wildcard वाला <code>LIKE '%abc'</code>, और ऐसा parameter जिसका type column से अलग हो (implicit conversion)।</li>
<li><b>EF Core:</b> <code>o.OrderDate.Year == 2025</code> जैसा filter column पर function में translate हो सकता है; range खुद लिखो और generated SQL पढ़ो।</li>
<li>Follow-up: "साबित कैसे करोगे?" (actual plan compare करो: Index Scan बनाम Index Seek, और logical reads।)</li>
</ul>
<p>Revise: Day 18।</p>`,
        hg: `<ul>
<li><b>Kyon:</b> index kachchi <code>OrderDate</code> values ke hisaab se sorted hai. <code>YEAR(OrderDate)</code> har row ke liye nikaalna padta hai, isliye engine seek ki jagah scan karta hai.</li>
<li><b>Rewrite:</b> <code>WHERE OrderDate &gt;= '2025-01-01' AND OrderDate &lt; '2026-01-01'</code>. Yeh half-open range <code>datetime</code> values wale <code>BETWEEN</code> ke end-of-day bug se bhi bachati hai.</li>
<li><b>Wahi trap:</b> <code>LEFT(Name, 3)</code>, <code>ISNULL(col, 0)</code>, column par <code>CONVERT</code>, shuru mein wildcard wala <code>LIKE '%abc'</code>, aur aisa parameter jiska type column se alag ho (implicit conversion).</li>
<li><b>EF Core:</b> <code>o.OrderDate.Year == 2025</code> jaisa filter column par function mein translate ho sakta hai; range khud likho aur generated SQL padho.</li>
<li>Follow-up: "Saabit kaise karoge?" (actual plan compare karo: Index Scan vs Index Seek, aur logical reads.)</li>
</ul>
<p>Revise: Day 18.</p>`
      }
    },
    {
      id: "r3-sqlserver-or-postgres",
      depth: "detailed",
      q: "A new service is starting and your team knows SQL Server well. Would you still consider PostgreSQL?",
      answer: "Decide on team skill, hosting, required features and total cost, not fashion. PostgreSQL offers strong JSONB and extensions; SQL Server fits an existing Microsoft stack, tooling and team experience.",
      meaning: {
        hi: "Team की skill, hosting, ज़रूरी features और total cost से तय करो, fashion से नहीं। PostgreSQL में मज़बूत JSONB और extensions हैं; SQL Server मौजूदा Microsoft stack, tooling और team के experience में फिट बैठता है।",
        hg: "Team ki skill, hosting, zaroori features aur total cost se tay karo, fashion se nahi. PostgreSQL mein mazboot JSONB aur extensions hain; SQL Server maujooda Microsoft stack, tooling aur team ke experience mein fit baithta hai."
      },
      explain: {
        en: `<ul>
<li><b>Questions to ask:</b> Who will run it at 3 a.m.? Where is it hosted (Azure SQL, managed PostgreSQL, on-prem)? Which features matter: JSONB and extensions, or SQL Server tooling, SSIS or reporting?</li>
<li><b>Cost:</b> compare total cost (licences or managed service price, backups, people), not the sticker price.</li>
<li><b>Real differences to mention:</b> MVCC and VACUUM in PostgreSQL, upsert syntax, case sensitivity and identifier folding, and default isolation behaviour. Migrating later costs real effort, so decide once, with a short written reason.</li>
<li><b>TL answer:</b> "Our skills favour SQL Server today; I would pick PostgreSQL if a feature or the cost clearly needs it, and I would try a small proof first."</li>
<li>Follow-up: "Will EF Core code change?" (mostly the provider; check raw SQL, types and case sensitivity).</li>
</ul>
<p>Revise: Day 19.</p>`,
        hi: `<ul>
<li><b>पूछने वाले सवाल:</b> रात 3 बजे इसे कौन चलाएगा? Hosting कहाँ है (Azure SQL, managed PostgreSQL, on-prem)? कौन-से features मायने रखते हैं: JSONB और extensions, या SQL Server tooling, SSIS या reporting?</li>
<li><b>Cost:</b> total cost compare करो (licences या managed service की कीमत, backups, लोग), sticker price नहीं।</li>
<li><b>असली फ़र्क़ जो बताने हैं:</b> PostgreSQL में MVCC और VACUUM, upsert syntax, case sensitivity और identifier folding, और default isolation behaviour। बाद में migrate करना असली मेहनत है, इसलिए एक बार छोटी लिखित वजह के साथ तय करो।</li>
<li><b>TL answer:</b> "हमारी skills आज SQL Server की तरफ़ हैं; कोई feature या cost साफ़ माँगे तो मैं PostgreSQL चुनूँगा, और पहले छोटा proof करूँगा।"</li>
<li>Follow-up: "EF Core code बदलेगा?" (ज़्यादातर provider; raw SQL, types और case sensitivity देखो।)</li>
</ul>
<p>Revise: Day 19।</p>`,
        hg: `<ul>
<li><b>Poochhne wale sawaal:</b> raat 3 baje ise kaun chalayega? Hosting kahan hai (Azure SQL, managed PostgreSQL, on-prem)? Kaun-se features matter karte hain: JSONB aur extensions, ya SQL Server tooling, SSIS ya reporting?</li>
<li><b>Cost:</b> total cost compare karo (licences ya managed service ki keemat, backups, log), sticker price nahi.</li>
<li><b>Asli farq jo batane hain:</b> PostgreSQL mein MVCC aur VACUUM, upsert syntax, case sensitivity aur identifier folding, aur default isolation behaviour. Baad mein migrate karna asli mehnat hai, isliye ek baar chhoti likhit wajah ke saath tay karo.</li>
<li><b>TL answer:</b> "Hamari skills aaj SQL Server ki taraf hain; koi feature ya cost saaf maange to main PostgreSQL chunoonga, aur pehle chhota proof karunga."</li>
<li>Follow-up: "EF Core code badlega?" (zyadatar provider; raw SQL, types aur case sensitivity dekho.)</li>
</ul>
<p>Revise: Day 19.</p>`
      }
    },
    // ---------- Round 4: Azure, DevOps, testing, security, JavaScript ----------
    {
      id: "r4-password-in-git",
      depth: "short",
      q: "You discover a database password committed to Git. What do you do, in order?",
      answer: "Rotate the password first, because Git history stays readable. Then move the secret to Key Vault or environment variables, clean the repo, and add secret scanning to the pipeline.",
      meaning: {
        hi: "सबसे पहले password rotate करो, क्योंकि Git history पढ़ी जा सकती है। फिर secret को Key Vault या environment variables में ले जाओ, repo साफ़ करो, और pipeline में secret scanning जोड़ो।",
        hg: "Sabse pehle password rotate karo, kyonki Git history padhi ja sakti hai. Phir secret ko Key Vault ya environment variables mein le jao, repo saaf karo, aur pipeline mein secret scanning jodo."
      },
      explain: {
        en: `<ul>
<li><b>1. Treat it as leaked:</b> anyone who cloned the repo has it. Rotate the credential now and check the database logs for unknown logins.</li>
<li><b>2. Replace it:</b> read the secret from Key Vault, user-secrets or environment variables; where possible use a Managed Identity so there is no password at all.</li>
<li><b>3. Clean up:</b> remove it from the code; rewriting history is optional and does not undo the leak, so never rely on it instead of rotating.</li>
<li><b>4. Prevent:</b> secret scanning in the pipeline, a pre-commit check, and a blameless note for the team.</li>
<li>Follow-up: "Whose mistake is it?" (the process's; fix the guardrail, not the person).</li>
</ul>
<p>Revise: Day 21 (secret scanning), Day 20 (Key Vault, Managed Identity).</p>`,
        hi: `<ul>
<li><b>1. इसे leak मानो:</b> जिसने भी repo clone किया उसके पास यह है। Credential अभी rotate करो और database logs में अनजान logins देखो।</li>
<li><b>2. बदलो:</b> secret Key Vault, user-secrets या environment variables से पढ़ो; जहाँ हो सके Managed Identity लो ताकि password ही न रहे।</li>
<li><b>3. साफ़ करो:</b> code से हटाओ; history rewrite optional है और leak को undo नहीं करती, इसलिए rotate की जगह उस पर भरोसा मत करो।</li>
<li><b>4. रोको:</b> pipeline में secret scanning, pre-commit check, और team के लिए बिना blame वाला note।</li>
<li>Follow-up: "ग़लती किसकी है?" (process की; guardrail ठीक करो, इंसान को नहीं।)</li>
</ul>
<p>Revise: Day 21 (secret scanning), Day 20 (Key Vault, Managed Identity)।</p>`,
        hg: `<ul>
<li><b>1. Ise leak mano:</b> jisne bhi repo clone kiya uske paas yeh hai. Credential abhi rotate karo aur database logs mein anjaan logins dekho.</li>
<li><b>2. Badlo:</b> secret Key Vault, user-secrets ya environment variables se padho; jahan ho sake Managed Identity lo taki password hi na rahe.</li>
<li><b>3. Saaf karo:</b> code se hatao; history rewrite optional hai aur leak ko undo nahi karti, isliye rotate ki jagah us par bharosa mat karo.</li>
<li><b>4. Roko:</b> pipeline mein secret scanning, pre-commit check, aur team ke liye bina blame wala note.</li>
<li>Follow-up: "Galti kiski hai?" (process ki; guardrail theek karo, insaan ko nahi.)</li>
</ul>
<p>Revise: Day 21 (secret scanning), Day 20 (Key Vault, Managed Identity).</p>`
      }
    },
    {
      id: "r4-pipeline-outline",
      depth: "short",
      q: "Describe a CI/CD pipeline for a .NET API that deploys to Azure.",
      answer: "Build once, run unit and integration tests, publish one artifact, deploy to staging, smoke-test, then swap or promote to production through the pipeline only. Configuration stays outside the artifact.",
      meaning: {
        hi: "एक बार build करो, unit और integration tests चलाओ, एक ही artifact publish करो, staging पर deploy करो, smoke-test करो, फिर सिर्फ़ pipeline से production में swap या promote करो। Configuration artifact के बाहर रहता है।",
        hg: "Ek baar build karo, unit aur integration tests chalao, ek hi artifact publish karo, staging par deploy karo, smoke-test karo, phir sirf pipeline se production mein swap ya promote karo. Configuration artifact ke bahar rehta hai."
      },
      explain: {
        en: `<ul>
<li><b>CI part:</b> restore, build, test, scan dependencies, publish one versioned artifact (SemVer plus build number). Fail fast on the first red step.</li>
<li><b>CD part:</b> the same artifact goes to every environment; per-environment settings come from outside. Staging slot, smoke test, approval if needed, then a slot swap; database changes run as idempotent scripts.</li>
<li><b>Rollback plan:</b> swap back, or redeploy the previous artifact; the pipeline must make that one click.</li>
<li><b>TL angle:</b> short feedback (under about 10 minutes for CI), protected main branch, and nobody deploys by hand.</li>
<li>Follow-up: "How do you keep the pipeline itself safe?" (pinned actions, least-privilege identities, no long-lived secrets).</li>
</ul>
<p>Revise: Day 21 (CI/CD), Day 20 (slots).</p>`,
        hi: `<ul>
<li><b>CI हिस्सा:</b> restore, build, test, dependencies scan, और एक versioned artifact publish (SemVer और build number)। पहले red step पर तुरंत fail।</li>
<li><b>CD हिस्सा:</b> वही artifact हर environment में जाता है; per-environment settings बाहर से आती हैं। Staging slot, smoke test, ज़रूरत हो तो approval, फिर slot swap; database changes idempotent scripts से चलते हैं।</li>
<li><b>Rollback plan:</b> वापस swap करो, या पिछला artifact redeploy करो; pipeline में यह एक click का होना चाहिए।</li>
<li><b>TL angle:</b> छोटा feedback (CI लगभग 10 मिनट से कम), protected main branch, और कोई हाथ से deploy नहीं करता।</li>
<li>Follow-up: "Pipeline को खुद safe कैसे रखते हो?" (pinned actions, least-privilege identities, लंबे समय वाले secrets नहीं।)</li>
</ul>
<p>Revise: Day 21 (CI/CD), Day 20 (slots)।</p>`,
        hg: `<ul>
<li><b>CI hissa:</b> restore, build, test, dependencies scan, aur ek versioned artifact publish (SemVer aur build number). Pehle red step par turant fail.</li>
<li><b>CD hissa:</b> wahi artifact har environment mein jaata hai; per-environment settings bahar se aati hain. Staging slot, smoke test, zaroorat ho to approval, phir slot swap; database changes idempotent scripts se chalte hain.</li>
<li><b>Rollback plan:</b> wapas swap karo, ya pichhla artifact redeploy karo; pipeline mein yeh ek click ka hona chahiye.</li>
<li><b>TL angle:</b> chhota feedback (CI lagbhag 10 minute se kam), protected main branch, aur koi haath se deploy nahi karta.</li>
<li>Follow-up: "Pipeline ko khud safe kaise rakhte ho?" (pinned actions, least-privilege identities, lambe samay wale secrets nahi.)</li>
</ul>
<p>Revise: Day 21 (CI/CD), Day 20 (slots).</p>`
      }
    },
    {
      id: "r4-mock-or-real-database",
      depth: "detailed",
      q: "Where do you use mocks in tests and where do you use a real database?",
      answer: "Mock or fake things you do not own, such as email or payment APIs. For EF Core queries use a real database, for example with Testcontainers, instead of the in-memory provider.",
      meaning: {
        hi: "जो चीज़ें आपकी नहीं हैं, जैसे email या payment APIs, उन्हें mock या fake करो। EF Core queries के लिए in-memory provider की जगह real database use करो, जैसे Testcontainers के साथ।",
        hg: "Jo cheezein aapki nahi hain, jaise email ya payment APIs, unhe mock ya fake karo. EF Core queries ke liye in-memory provider ki jagah real database use karo, jaise Testcontainers ke saath."
      },
      explain: {
        en: `<ul>
<li><b>Mock the boundary you do not control:</b> the email gateway, a payment API, the clock (<code>TimeProvider</code>). They are slow, costly or non-deterministic.</li>
<li><b>Do not mock what you are testing:</b> if you mock <code>DbContext</code>, you test your mock, not your query. The EF in-memory provider ignores real SQL behaviour (constraints, translation, case rules), so it can pass while production fails.</li>
<li><b>Real database in a container:</b> Testcontainers starts SQL Server or PostgreSQL per test run; use one shared container per test class or collection, and reset data between tests.</li>
<li><b>Balance:</b> many fast unit tests for logic, fewer integration tests for the data and HTTP layers, very few end-to-end tests.</li>
<li>Follow-up: "Too many mocks in a test suite — what does it signal?" (tests tied to implementation; design may be too coupled).</li>
</ul>
<p>Revise: Day 25.</p>`,
        hi: `<ul>
<li><b>जिस boundary पर आपका control नहीं उसे mock करो:</b> email gateway, payment API, clock (<code>TimeProvider</code>)। ये धीमे, महँगे या non-deterministic होते हैं।</li>
<li><b>जिसे test कर रहे हो उसे mock मत करो:</b> <code>DbContext</code> को mock करोगे तो अपना mock test करोगे, अपनी query नहीं। EF in-memory provider असली SQL behaviour (constraints, translation, case rules) नहीं मानता, इसलिए test pass हो सकता है जबकि production fail हो।</li>
<li><b>Container में real database:</b> Testcontainers हर test run पर SQL Server या PostgreSQL चालू करता है; हर test class या collection के लिए एक shared container रखो, और tests के बीच data reset करो।</li>
<li><b>Balance:</b> logic के लिए बहुत से तेज़ unit tests, data और HTTP layers के लिए कम integration tests, बहुत कम end-to-end tests।</li>
<li>Follow-up: "Test suite में बहुत ज़्यादा mocks क्या बताते हैं?" (tests implementation से बँधे हैं; design शायद बहुत coupled है।)</li>
</ul>
<p>Revise: Day 25।</p>`,
        hg: `<ul>
<li><b>Jis boundary par aapka control nahi use mock karo:</b> email gateway, payment API, clock (<code>TimeProvider</code>). Yeh dheeme, mehnge ya non-deterministic hote hain.</li>
<li><b>Jise test kar rahe ho use mock mat karo:</b> <code>DbContext</code> ko mock karoge to apna mock test karoge, apni query nahi. EF in-memory provider asli SQL behaviour (constraints, translation, case rules) nahi maanta, isliye test pass ho sakta hai jabki production fail ho.</li>
<li><b>Container mein real database:</b> Testcontainers har test run par SQL Server ya PostgreSQL chalu karta hai; har test class ya collection ke liye ek shared container rakho, aur tests ke beech data reset karo.</li>
<li><b>Balance:</b> logic ke liye bahut se tez unit tests, data aur HTTP layers ke liye kam integration tests, bahut kam end-to-end tests.</li>
<li>Follow-up: "Test suite mein bahut zyada mocks kya batate hain?" (tests implementation se bandhe hain; design shayad bahut coupled hai.)</li>
</ul>
<p>Revise: Day 25.</p>`
      }
    },
    {
      id: "r4-critical-package-cve",
      depth: "detailed",
      q: "A security scan reports a critical vulnerability in a NuGet package your service uses. What is your process?",
      answer: "Check whether the vulnerable code path is reachable, then upgrade or patch the package, including transitive ones, run the tests, and release through the normal pipeline. Automate with NuGet Audit and Dependabot.",
      meaning: {
        hi: "देखो कि vulnerable code path तक पहुँचा जा सकता है या नहीं, फिर package को upgrade या patch करो, transitive packages समेत, tests चलाओ, और normal pipeline से release करो। NuGet Audit और Dependabot से automate करो।",
        hg: "Dekho ki vulnerable code path tak pahuncha ja sakta hai ya nahi, phir package ko upgrade ya patch karo, transitive packages samet, tests chalao, aur normal pipeline se release karo. NuGet Audit aur Dependabot se automate karo."
      },
      explain: {
        en: `<ul>
<li><b>Triage:</b> read the advisory; is our code calling the affected API, and is the service exposed to the internet? That sets urgency (hours or the next sprint), not whether to act.</li>
<li><b>Fix:</b> <code>dotnet list package --vulnerable --include-transitive</code> finds the chain. Upgrade the direct package, or pin a safe version of the transitive one; if no fix exists, apply the vendor's workaround or replace the library.</li>
<li><b>Ship it properly:</b> tests, then the normal pipeline. A hotfix that skips the pipeline creates the next incident.</li>
<li><b>Prevent:</b> NuGet Audit during restore, Dependabot or similar pull requests, and a policy that fails the build on high and critical findings.</li>
<li>Follow-up: "What if the package is abandoned?" (fork, replace, or wrap it behind an interface so replacing is cheap).</li>
</ul>
<p>Revise: Day 26.</p>`,
        hi: `<ul>
<li><b>Triage:</b> advisory पढ़ो; क्या हमारा code affected API बुलाता है, और क्या service internet पर exposed है? इससे urgency तय होती है (घंटों में या अगले sprint में), यह नहीं कि कुछ करना है या नहीं।</li>
<li><b>Fix:</b> <code>dotnet list package --vulnerable --include-transitive</code> पूरी chain ढूँढता है। Direct package upgrade करो, या transitive का safe version pin करो; fix न हो तो vendor का workaround लगाओ या library बदलो।</li>
<li><b>ठीक से ship करो:</b> tests, फिर normal pipeline। Pipeline skip करने वाला hotfix अगला incident बनाता है।</li>
<li><b>रोको:</b> restore के दौरान NuGet Audit, Dependabot जैसे pull requests, और policy कि high और critical findings पर build fail हो।</li>
<li>Follow-up: "Package abandoned हो तो?" (fork करो, बदलो, या उसे interface के पीछे wrap करो ताकि बदलना सस्ता रहे।)</li>
</ul>
<p>Revise: Day 26।</p>`,
        hg: `<ul>
<li><b>Triage:</b> advisory padho; kya hamara code affected API bulata hai, aur kya service internet par exposed hai? Isse urgency tay hoti hai (ghanton mein ya agle sprint mein), yeh nahi ki kuch karna hai ya nahi.</li>
<li><b>Fix:</b> <code>dotnet list package --vulnerable --include-transitive</code> poori chain dhoondhta hai. Direct package upgrade karo, ya transitive ka safe version pin karo; fix na ho to vendor ka workaround lagao ya library badlo.</li>
<li><b>Theek se ship karo:</b> tests, phir normal pipeline. Pipeline skip karne wala hotfix agla incident banata hai.</li>
<li><b>Roko:</b> restore ke dauran NuGet Audit, Dependabot jaise pull requests, aur policy ki high aur critical findings par build fail ho.</li>
<li>Follow-up: "Package abandoned ho to?" (fork karo, badlo, ya use interface ke peeche wrap karo taki badalna sasta rahe.)</li>
</ul>
<p>Revise: Day 26.</p>`
      }
    },
    {
      id: "r4-foreach-async-callback",
      depth: "detailed",
      q: "In JavaScript, why does items.forEach(async item => await save(item)) not wait for the saves to finish?",
      answer: "forEach ignores the promises its callback returns, so the code after it runs first. Use for...of with await for sequential work, or await Promise.all(items.map(...)) for parallel work.",
      meaning: {
        hi: "forEach callback के लौटाए promises को ignore करता है, इसलिए उसके बाद का code पहले चल जाता है। Sequential काम के लिए await के साथ for...of, या parallel के लिए await Promise.all(items.map(...))।",
        hg: "forEach callback ke lautaye promises ko ignore karta hai, isliye uske baad ka code pehle chal jaata hai. Sequential kaam ke liye await ke saath for...of, ya parallel ke liye await Promise.all(items.map(...))."
      },
      explain: {
        en: `<ul>
<li><b>Why:</b> an <code>async</code> callback returns a promise immediately at its first <code>await</code>. <code>forEach</code> throws that return value away and returns <code>undefined</code>, so there is nothing to await.</li>
<li><b>Sequential:</b> <code>for (const item of items) await save(item)</code>. Order is kept and one failure stops the loop.</li>
<li><b>Parallel:</b> <code>await Promise.all(items.map(save))</code>. Fast, but all start at once, so cap concurrency for thousands of items or rate-limited APIs. Use <code>Promise.allSettled</code> when one failure must not hide the others.</li>
<li><b>Related trap:</b> errors thrown inside the unawaited callbacks become unhandled rejections.</li>
<li>Follow-up: "How is this like C# <code>async void</code>?" (both start work nobody can await).</li>
</ul>
<p>Revise: Day 23.</p>`,
        hi: `<ul>
<li><b>क्यों:</b> <code>async</code> callback अपने पहले <code>await</code> पर तुरंत promise लौटा देता है। <code>forEach</code> उस return value को फेंक देता है और <code>undefined</code> लौटाता है, इसलिए await करने को कुछ नहीं बचता।</li>
<li><b>Sequential:</b> <code>for (const item of items) await save(item)</code>। Order बना रहता है और एक failure पर loop रुक जाता है।</li>
<li><b>Parallel:</b> <code>await Promise.all(items.map(save))</code>। तेज़, पर सब एक साथ शुरू होते हैं, इसलिए हज़ारों items या rate-limited APIs में concurrency की सीमा रखो। एक failure बाक़ियों को न छुपाए तो <code>Promise.allSettled</code> use करो।</li>
<li><b>जुड़ा trap:</b> unawaited callbacks के अंदर फेंके errors unhandled rejections बन जाते हैं।</li>
<li>Follow-up: "यह C# <code>async void</code> जैसा कैसे है?" (दोनों ऐसा काम शुरू करते हैं जिसे कोई await नहीं कर सकता।)</li>
</ul>
<p>Revise: Day 23।</p>`,
        hg: `<ul>
<li><b>Kyon:</b> <code>async</code> callback apne pehle <code>await</code> par turant promise lauta deta hai. <code>forEach</code> us return value ko phenk deta hai aur <code>undefined</code> lautata hai, isliye await karne ko kuch nahi bachta.</li>
<li><b>Sequential:</b> <code>for (const item of items) await save(item)</code>. Order bana rehta hai aur ek failure par loop ruk jaata hai.</li>
<li><b>Parallel:</b> <code>await Promise.all(items.map(save))</code>. Tez, par sab ek saath shuru hote hain, isliye hazaaron items ya rate-limited APIs mein concurrency ki seema rakho. Ek failure baakiyon ko na chhupaye to <code>Promise.allSettled</code> use karo.</li>
<li><b>Juda trap:</b> unawaited callbacks ke andar phenke errors unhandled rejections ban jaate hain.</li>
<li>Follow-up: "Yeh C# <code>async void</code> jaisa kaise hai?" (dono aisa kaam shuru karte hain jise koi await nahi kar sakta.)</li>
</ul>
<p>Revise: Day 23.</p>`
      }
    }
  ],
  puzzles: [
    {
      id: "iterator-finally-on-break",
      src: `foreach (var n in Numbers())
{
    Console.WriteLine($"got {n}");
    if (n == 2) break;
}
Console.WriteLine("done");

static IEnumerable<int> Numbers()
{
    try
    {
        Console.WriteLine("start");
        yield return 1;
        yield return 2;
        yield return 3;
    }
    finally
    {
        Console.WriteLine("cleanup");
    }
}`,
      answer: `start
got 1
got 2
cleanup
done`,
      explain: {
        en: `<p>The iterator is lazy: "start" prints only when the loop asks for the first item. After <code>got 2</code> the loop breaks, and <code>foreach</code> disposes the enumerator, which runs the iterator's <code>finally</code> block, so "cleanup" prints <b>before</b> "done". The value 3 is never produced. This is why iterators can safely hold files or connections: cleanup runs even on an early exit. Interview line: "<code>yield</code> builds a state machine; <code>finally</code> runs on dispose."</p>`,
        hi: `<p>Iterator lazy है: "start" तभी print होता है जब loop पहला item माँगता है। <code>got 2</code> के बाद loop break होता है, और <code>foreach</code> enumerator को dispose करता है, जिससे iterator का <code>finally</code> block चलता है, इसलिए "cleanup" "done" से <b>पहले</b> print होता है। Value 3 कभी बनती ही नहीं। इसीलिए iterators files या connections safely पकड़ सकते हैं: जल्दी निकलने पर भी cleanup चलता है। Interview line: "<code>yield</code> state machine बनाता है; <code>finally</code> dispose पर चलता है।"</p>`,
        hg: `<p>Iterator lazy hai: "start" tabhi print hota hai jab loop pehla item maangta hai. <code>got 2</code> ke baad loop break hota hai, aur <code>foreach</code> enumerator ko dispose karta hai, jisse iterator ka <code>finally</code> block chalta hai, isliye "cleanup" "done" se <b>pehle</b> print hota hai. Value 3 kabhi banti hi nahi. Isiliye iterators files ya connections safely pakad sakte hain: jaldi nikalne par bhi cleanup chalta hai. Interview line: "<code>yield</code> state machine banata hai; <code>finally</code> dispose par chalta hai."</p>`
      }
    },
    {
      id: "mutated-key-hashset",
      src: `var set = new HashSet<Tag>();
var tag = new Tag { Name = "net" };
set.Add(tag);

Console.WriteLine(set.Contains(tag));
tag.Name = "dotnet";
Console.WriteLine(set.Contains(tag));
Console.WriteLine(set.Count);
Console.WriteLine(set.Any(t => ReferenceEquals(t, tag)));

class Tag
{
    public string Name = "";
    public override bool Equals(object? obj) => obj is Tag t && t.Name == Name;
    public override int GetHashCode() => Name.GetHashCode();
}`,
      answer: `True
False
1
True`,
      explain: {
        en: `<p>The tag is stored using the hash of <code>"net"</code>. After the rename, <code>Contains</code> computes the hash of <code>"dotnet"</code>, looks in the wrong place and returns <code>False</code>, although <code>Count</code> is still 1 and a linear search (<code>Any</code>) still finds the same object. The item is "lost" inside the set. Fix: do not put mutable fields into <code>Equals</code>/<code>GetHashCode</code>; use immutable keys such as ids, strings or records.</p>`,
        hi: `<p>Tag को <code>"net"</code> के hash से रखा गया था। Rename के बाद <code>Contains</code> <code>"dotnet"</code> का hash निकालता है, ग़लत जगह देखता है और <code>False</code> लौटाता है, जबकि <code>Count</code> अब भी 1 है और linear search (<code>Any</code>) वही object ढूँढ लेती है। Item set के अंदर "खो" गया है। Fix: <code>Equals</code>/<code>GetHashCode</code> में mutable fields मत रखो; ids, strings या records जैसी immutable keys use करो।</p>`,
        hg: `<p>Tag ko <code>"net"</code> ke hash se rakha gaya tha. Rename ke baad <code>Contains</code> <code>"dotnet"</code> ka hash nikalta hai, galat jagah dekhta hai aur <code>False</code> lautata hai, jabki <code>Count</code> ab bhi 1 hai aur linear search (<code>Any</code>) wahi object dhoondh leti hai. Item set ke andar "kho" gaya hai. Fix: <code>Equals</code>/<code>GetHashCode</code> mein mutable fields mat rakho; ids, strings ya records jaisi immutable keys use karo.</p>`
      }
    },
    {
      id: "checked-overflow-and-casts",
      src: `int big = int.MaxValue;
Console.WriteLine(unchecked(big + 1));
try
{
    Console.WriteLine(checked(big + 1));
}
catch (OverflowException)
{
    Console.WriteLine("overflow");
}

int n = 300;
Console.WriteLine((byte)n);
try
{
    Console.WriteLine(checked((byte)n));
}
catch (OverflowException)
{
    Console.WriteLine("overflow again");
}

Console.WriteLine(Math.Round(2.5));
Console.WriteLine(Math.Round(3.5));
Console.WriteLine((int)-3.99);`,
      answer: `-2147483648
overflow
44
overflow again
2
4
-3`,
      explain: {
        en: `<p>Integer arithmetic is <b>unchecked</b> by default in normal code, so <code>int.MaxValue + 1</code> wraps to <code>-2147483648</code>; <code>checked</code> throws <code>OverflowException</code> instead. The same for casts: 300 does not fit a byte, so the plain cast keeps the low 8 bits (300 - 256 = 44), while <code>checked</code> throws. <code>Math.Round(2.5)</code> is 2 because the default is <b>banker's rounding</b> (to the nearest even), so 3.5 gives 4. A cast to <code>int</code> truncates towards zero, so -3.99 becomes -3. For money use <code>decimal</code> and state the rounding rule. (A project can switch the default with the <code>CheckForOverflowUnderflow</code> setting.)</p>`,
        hi: `<p>Normal code में integer arithmetic default रूप से <b>unchecked</b> होती है, इसलिए <code>int.MaxValue + 1</code> घूमकर <code>-2147483648</code> बन जाता है; <code>checked</code> में <code>OverflowException</code> फेंकता है। Casts के साथ भी वही: 300 byte में नहीं समाता, इसलिए plain cast नीचे के 8 bits रखता है (300 - 256 = 44), जबकि <code>checked</code> exception फेंकता है। <code>Math.Round(2.5)</code> 2 है क्योंकि default <b>banker's rounding</b> (नज़दीकी even की तरफ़) है, इसलिए 3.5 से 4 मिलता है। <code>int</code> cast zero की तरफ़ truncate करता है, इसलिए -3.99 से -3 बनता है। पैसों के लिए <code>decimal</code> use करो और rounding rule साफ़ बताओ। (Project <code>CheckForOverflowUnderflow</code> setting से default बदल सकता है।)</p>`,
        hg: `<p>Normal code mein integer arithmetic default roop se <b>unchecked</b> hoti hai, isliye <code>int.MaxValue + 1</code> ghoomkar <code>-2147483648</code> ban jaata hai; <code>checked</code> mein <code>OverflowException</code> phenkta hai. Casts ke saath bhi wahi: 300 byte mein nahi samata, isliye plain cast neeche ke 8 bits rakhta hai (300 - 256 = 44), jabki <code>checked</code> exception phenkta hai. <code>Math.Round(2.5)</code> 2 hai kyonki default <b>banker's rounding</b> (nazdeeki even ki taraf) hai, isliye 3.5 se 4 milta hai. <code>int</code> cast zero ki taraf truncate karta hai, isliye -3.99 se -3 banta hai. Paison ke liye <code>decimal</code> use karo aur rounding rule saaf batao. (Project <code>CheckForOverflowUnderflow</code> setting se default badal sakta hai.)</p>`
      }
    },
    {
      id: "top-with-ties",
      lang: "sql",
      src: `CREATE TABLE dbo.Scores (Name varchar(10) NOT NULL, Points int NOT NULL);
INSERT dbo.Scores VALUES ('Asha', 90), ('Ravi', 85), ('Neha', 85), ('Imran', 70);

PRINT 'top 2:';
SELECT TOP 2 Name FROM dbo.Scores ORDER BY Points DESC, Name;

PRINT 'top 2 with ties:';
SELECT COUNT(*) FROM (SELECT TOP 2 WITH TIES Name FROM dbo.Scores ORDER BY Points DESC) AS t;`,
      answer: `top 2:
Asha
Neha
top 2 with ties:
3`,
      explain: {
        en: `<p>With <code>ORDER BY Points DESC, Name</code> the tie between Ravi and Neha is broken alphabetically, so the top 2 are Asha and Neha. <code>TOP 2 WITH TIES</code> keeps every row tied with the last one returned: Asha (90), then both 85s, so the count is 3. Without a tie-breaker, <b>which</b> of two tied rows <code>TOP 1</code> returns is not defined. Interview line: "<code>TOP</code> and paging need a deterministic <code>ORDER BY</code>; add a unique tie-breaker."</p>`,
        hi: `<p><code>ORDER BY Points DESC, Name</code> में Ravi और Neha की tie alphabetical order से टूटती है, इसलिए top 2 Asha और Neha हैं। <code>TOP 2 WITH TIES</code> आख़िरी लौटी row के साथ tied हर row रखता है: Asha (90), फिर दोनों 85, इसलिए count 3 है। Tie-breaker के बिना दो tied rows में से <code>TOP 1</code> <b>कौन-सी</b> देगा, यह तय नहीं। Interview line: "<code>TOP</code> और paging को deterministic <code>ORDER BY</code> चाहिए; unique tie-breaker जोड़ो।"</p>`,
        hg: `<p><code>ORDER BY Points DESC, Name</code> mein Ravi aur Neha ki tie alphabetical order se tootti hai, isliye top 2 Asha aur Neha hain. <code>TOP 2 WITH TIES</code> aakhri lauti row ke saath tied har row rakhta hai: Asha (90), phir dono 85, isliye count 3 hai. Tie-breaker ke bina do tied rows mein se <code>TOP 1</code> <b>kaun-si</b> dega, yeh tay nahi. Interview line: "<code>TOP</code> aur paging ko deterministic <code>ORDER BY</code> chahiye; unique tie-breaker jodo."</p>`
      }
    },
    {
      id: "sql-division-and-concat",
      lang: "sql",
      src: `SELECT 7 / 2 AS int_div, 7 / 2.0 AS dec_div, 7 % 2 AS remainder;
SELECT '10' + '5' AS text_plus_text, '10' + 5 AS text_plus_int;
SELECT CASE WHEN NULL = NULL THEN 'equal' ELSE 'not equal' END AS null_compare;`,
      answer: `3 3.500000 1
105 15
not equal`,
      explain: {
        en: `<p><code>7 / 2</code> is <b>integer division</b> (3); making one side decimal gives <code>3.500000</code> (a decimal with six places). <code>%</code> is the remainder (1). <code>'10' + '5'</code> joins two strings (<code>105</code>), but <code>'10' + 5</code> mixes types and SQL Server's data type precedence converts the <b>string to int</b>, so the result is 15, not <code>105</code>. Finally <code>NULL = NULL</code> is <b>unknown</b>, not true, so the <code>CASE</code> takes the <code>ELSE</code> branch; use <code>IS NULL</code>. Interview line: "In T-SQL the type with higher precedence wins, and any comparison with NULL is unknown."</p>`,
        hi: `<p><code>7 / 2</code> <b>integer division</b> है (3); एक तरफ़ decimal कर दो तो <code>3.500000</code> मिलता है (six places वाला decimal)। <code>%</code> remainder है (1)। <code>'10' + '5'</code> दो strings जोड़ता है (<code>105</code>), पर <code>'10' + 5</code> types मिलाता है और SQL Server की data type precedence <b>string को int</b> में बदल देती है, इसलिए result 15 है, <code>105</code> नहीं। आख़िर में <code>NULL = NULL</code> true नहीं, <b>unknown</b> है, इसलिए <code>CASE</code> <code>ELSE</code> branch लेता है; <code>IS NULL</code> use करो। Interview line: "T-SQL में ऊँची precedence वाला type जीतता है, और NULL से हर comparison unknown होता है।"</p>`,
        hg: `<p><code>7 / 2</code> <b>integer division</b> hai (3); ek taraf decimal kar do to <code>3.500000</code> milta hai (six places wala decimal). <code>%</code> remainder hai (1). <code>'10' + '5'</code> do strings jodta hai (<code>105</code>), par <code>'10' + 5</code> types milata hai aur SQL Server ki data type precedence <b>string ko int</b> mein badal deti hai, isliye result 15 hai, <code>105</code> nahi. Aakhir mein <code>NULL = NULL</code> true nahi, <b>unknown</b> hai, isliye <code>CASE</code> <code>ELSE</code> branch leta hai; <code>IS NULL</code> use karo. Interview line: "T-SQL mein oonchi precedence wala type jeetta hai, aur NULL se har comparison unknown hota hai."</p>`
      }
    },
    {
      id: "optional-chaining-short-circuit",
      lang: "javascript",
      src: `const user = {
  name: "Asha",
  greet() {
    return \`hi \${this.name}\`;
  },
};

let n = 0;
console.log(user.missing?.(n++));
console.log(user.greet?.());
console.log(n);
console.log(user.profile?.address.city);`,
      answer: `undefined
hi Asha
0
undefined`,
      explain: {
        en: `<p>Optional chaining <b>short-circuits</b>: when the part before <code>?.</code> is <code>null</code> or <code>undefined</code>, the rest of the expression is skipped and the result is <code>undefined</code>. For <code>user.missing?.(n++)</code> the call never happens, so even the argument <code>n++</code> is not evaluated and <code>n</code> stays 0. <code>user.greet?.()</code> exists, so it runs normally, and <code>this</code> is still <code>user</code> (hi Asha). In <code>user.profile?.address.city</code> the whole chain stops at <code>profile</code>, so <code>.city</code> does not throw. Interview line: "<code>?.</code> skips the whole remaining chain when its left side is null or undefined."</p>`,
        hi: `<p>Optional chaining <b>short-circuit</b> करता है: <code>?.</code> से पहले वाला हिस्सा <code>null</code> या <code>undefined</code> हो तो बाक़ी expression छोड़ दिया जाता है और result <code>undefined</code> होता है। <code>user.missing?.(n++)</code> में call होती ही नहीं, इसलिए argument <code>n++</code> भी evaluate नहीं होता और <code>n</code> 0 रहता है। <code>user.greet?.()</code> मौजूद है, इसलिए normal चलता है, और <code>this</code> अब भी <code>user</code> है (hi Asha)। <code>user.profile?.address.city</code> में पूरी chain <code>profile</code> पर रुक जाती है, इसलिए <code>.city</code> throw नहीं करता। Interview line: "<code>?.</code> का left side null या undefined हो तो वह बाक़ी पूरी chain skip कर देता है।"</p>`,
        hg: `<p>Optional chaining <b>short-circuit</b> karta hai: <code>?.</code> se pehle wala hissa <code>null</code> ya <code>undefined</code> ho to baaki expression chhod diya jaata hai aur result <code>undefined</code> hota hai. <code>user.missing?.(n++)</code> mein call hoti hi nahi, isliye argument <code>n++</code> bhi evaluate nahi hota aur <code>n</code> 0 rehta hai. <code>user.greet?.()</code> maujood hai, isliye normal chalta hai, aur <code>this</code> ab bhi <code>user</code> hai (hi Asha). <code>user.profile?.address.city</code> mein poori chain <code>profile</code> par ruk jaati hai, isliye <code>.city</code> throw nahi karta. Interview line: "<code>?.</code> ka left side null ya undefined ho to woh baaki poori chain skip kar deta hai."</p>`
      }
    },
    {
      id: "json-stringify-edge-cases",
      lang: "javascript",
      src: `const data = {
  a: undefined,
  b: () => 1,
  c: NaN,
  d: new Date(0),
  e: [undefined],
  f: { toJSON: () => "custom" },
};
console.log(JSON.stringify(data));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify("x"));`,
      answer: `{"c":null,"d":"1970-01-01T00:00:00.000Z","e":[null],"f":"custom"}
undefined
"x"`,
      explain: {
        en: `<p><code>JSON.stringify</code> silently <b>drops</b> object properties whose value is <code>undefined</code> or a function (<code>a</code> and <code>b</code> vanish), but turns them into <code>null</code> inside arrays (<code>e</code>). <code>NaN</code> becomes <code>null</code> because JSON has no NaN. A <code>Date</code> becomes its ISO string through its own <code>toJSON</code>, and any object with a <code>toJSON</code> method is replaced by what it returns (<code>f</code>). Stringifying <code>undefined</code> itself returns <code>undefined</code> (not a string), which <code>console.log</code> prints as <code>undefined</code>; a string gets quotes. Interview line: "JSON round trips lose undefined, functions and NaN; check what your API really sends."</p>`,
        hi: `<p><code>JSON.stringify</code> ऐसी object properties को चुपचाप <b>छोड़</b> देता है जिनकी value <code>undefined</code> या function है (<code>a</code> और <code>b</code> ग़ायब), पर arrays के अंदर उन्हें <code>null</code> बना देता है (<code>e</code>)। <code>NaN</code> <code>null</code> बन जाता है क्योंकि JSON में NaN नहीं होता। <code>Date</code> अपने <code>toJSON</code> से ISO string बन जाता है, और जिस object में <code>toJSON</code> method हो वह उसकी लौटाई value से बदल जाता है (<code>f</code>)। <code>undefined</code> को खुद stringify करो तो <code>undefined</code> लौटता है (string नहीं), जिसे <code>console.log</code> <code>undefined</code> print करता है; string में quotes लगते हैं। Interview line: "JSON round trip में undefined, functions और NaN खो जाते हैं; देखो आपकी API सच में क्या भेजती है।"</p>`,
        hg: `<p><code>JSON.stringify</code> aisi object properties ko chupchaap <b>chhod</b> deta hai jinki value <code>undefined</code> ya function hai (<code>a</code> aur <code>b</code> ghaayab), par arrays ke andar unhe <code>null</code> bana deta hai (<code>e</code>). <code>NaN</code> <code>null</code> ban jaata hai kyonki JSON mein NaN nahi hota. <code>Date</code> apne <code>toJSON</code> se ISO string ban jaata hai, aur jis object mein <code>toJSON</code> method ho woh uski lautai value se badal jaata hai (<code>f</code>). <code>undefined</code> ko khud stringify karo to <code>undefined</code> lautta hai (string nahi), jise <code>console.log</code> <code>undefined</code> print karta hai; string mein quotes lagte hain. Interview line: "JSON round trip mein undefined, functions aur NaN kho jaate hain; dekho aapki API sach mein kya bhejti hai."</p>`
      }
    }
  ],
  revision: {
    en: [
      "Answer in four boxes: one-line answer, why, example, trade-off.",
      "Clarify first: users, read or write heavy, how stale data may be.",
      "If you do not know, say how you would find out, never guess.",
      "A request travels Kestrel, middleware, endpoint, DI, EF Core and back as JSON.",
      "Measure before you optimise: traces and execution plans, not hunches.",
      "Across service databases avoid one big transaction; think events, outbox and idempotency.",
      "Liveness must stay cheap; readiness may check dependencies.",
      "Rotate a leaked secret first; cleaning Git history alone is not a fix.",
      "Real database for query tests; mock only boundaries you do not own.",
      "After a mock, turn every 0 or 1 into a Revise Day N list and retest in 48 hours."
    ],
    meaning: {
      hi: [
        "चार डिब्बों में जवाब दो: one-line answer, why, example, trade-off।",
        "पहले clarify करो: users, read या write heavy, data कितना पुराना चलेगा।",
        "पता न हो तो बताओ कि कैसे पता करोगे, अंदाज़ा मत लगाओ।",
        "Request Kestrel, middleware, endpoint, DI, EF Core से गुज़रती है और JSON बनकर लौटती है।",
        "Optimise करने से पहले measure करो: traces और execution plans, अंदाज़े नहीं।",
        "Services के databases के पार एक बड़ा transaction टालो; events, outbox और idempotency सोचो।",
        "Liveness सस्ता रखो; readiness dependencies check कर सकता है।",
        "Leak हुआ secret पहले rotate करो; सिर्फ़ Git history साफ़ करना fix नहीं है।",
        "Query tests के लिए real database; सिर्फ़ उन्हीं boundaries को mock करो जो आपकी नहीं।",
        "Mock के बाद हर 0 या 1 को Revise Day N list में बदलो और 48 घंटे में retest करो।"
      ],
      hg: [
        "Chaar dibbon mein jawab do: one-line answer, why, example, trade-off.",
        "Pehle clarify karo: users, read ya write heavy, data kitna purana chalega.",
        "Pata na ho to batao ki kaise pata karoge, andaza mat lagao.",
        "Request Kestrel, middleware, endpoint, DI, EF Core se guzarti hai aur JSON bankar lautti hai.",
        "Optimise karne se pehle measure karo: traces aur execution plans, andaze nahi.",
        "Services ke databases ke paar ek bada transaction taalo; events, outbox aur idempotency socho.",
        "Liveness sasta rakho; readiness dependencies check kar sakta hai.",
        "Leak hua secret pehle rotate karo; sirf Git history saaf karna fix nahi hai.",
        "Query tests ke liye real database; sirf unhi boundaries ko mock karo jo aapki nahi.",
        "Mock ke baad har 0 ya 1 ko Revise Day N list mein badlo aur 48 ghante mein retest karo."
      ]
    }
  }
};
