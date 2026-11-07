// Day 28 — TL Leadership & Behavioral Interviews, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 28,
  format: "lesson",
  title: {
    en: "TL Leadership and Behavioral Interviews — what a TL is, STAR stories, estimation, conflict, mentoring, stakeholders, incidents, tech debt, hiring, and your own pitch",
    hi: "TL Leadership और Behavioral Interviews — TL क्या होता है, STAR stories, estimation, conflict, mentoring, stakeholders, incidents, tech debt, hiring, और तुम्हारा अपना pitch",
    hg: "TL Leadership aur Behavioral Interviews — TL kya hota hai, STAR stories, estimation, conflict, mentoring, stakeholders, incidents, tech debt, hiring, aur tumhara apna pitch"
  },
  summary: {
    en: "<p>Day 28 turns your experience into <b>interview stories</b> in 8 short lessons. First what a Tech Lead is and how to tell a STAR story. Then the situations TLs get asked about: estimates, a technical disagreement, mentoring a junior, a stakeholder update with \"yes, if\", a production incident, and your own pitch.</p><p>Most lessons give a <b>model answer</b> on the CRM team (Asha, Ravi, Meena, Kiran), with notes on why each line works, a weak-versus-strong exercise and a judgement quiz. The samples are shapes, not your history: replace every detail with your own real project.</p>",
    hi: "<p>Day 28 तुम्हारे अनुभव को 8 छोटे पाठों में <b>interview stories</b> में बदलता है। पहले Tech Lead क्या है और STAR story कैसे सुनाते हैं। फिर वे हालात जिनके बारे में TLs से पूछा जाता है: estimates, technical disagreement, junior को mentor करना, \"yes, if\" वाला stakeholder update, production incident, और तुम्हारा अपना pitch।</p><p>ज़्यादातर पाठों में CRM team (Asha, Ravi, Meena, Kiran) पर एक <b>model जवाब</b> है, हर line क्यों काम करती है इसके notes के साथ, कमज़ोर बनाम मज़बूत जवाब का exercise और judgement का quiz। Samples ढाँचा हैं, तुम्हारी history नहीं: हर detail अपने असली project से बदलो।</p>",
    hg: "<p>Day 28 tumhare anubhav ko 8 chhote lessons mein <b>interview stories</b> mein badalta hai. Pehle Tech Lead kya hai aur STAR story kaise sunaate hain. Phir woh haalaat jinke baare mein TLs se poochha jaata hai: estimates, technical disagreement, junior ko mentor karna, \"yes, if\" wala stakeholder update, production incident, aur tumhara apna pitch.</p><p>Zyaadatar lessons mein CRM team (Asha, Ravi, Meena, Kiran) par ek <b>model jawab</b> hai, har line kyon kaam karti hai iske notes ke saath, kamzor banaam mazboot jawab ka exercise aur judgement ka quiz. Samples dhaancha hain, tumhari history nahi: har detail apne asli project se badlo.</p>"
  },
  sections: [
    {
      id: "tl-role",
      depth: "short",
      title: {
        en: "What a Tech Lead is, in one minute",
        hi: "Tech Lead क्या होता है, एक मिनट में",
        hg: "Tech Lead kya hota hai, ek minute mein"
      },
      lesson: {
        buildsOn: {
          en: "<p>Days 1 to 27 gave you the technical depth: OOP, C#, LINQ, EF Core, SOLID, patterns, DevOps, security and more. The CRM you built there is now the team you lead. Today <b>turns that knowledge into stories you can tell in an interview</b>. In today's examples Asha and Ravi are developers, Kiran is a junior developer, and Meena leads the support team that uses the CRM.</p>",
          hi: "<p>Day 1 से 27 ने तुम्हें technical depth दी: OOP, C#, LINQ, EF Core, SOLID, patterns, DevOps, security और बहुत कुछ। वहाँ जो CRM बना, अब वही वह team है जिसे तुम lead करते हो। आज का day उस knowledge को <b>ऐसी stories में बदलता है जो interview में सुना सको</b>। आज के examples में Asha और Ravi developers हैं, Kiran junior developer है, और Meena उस support team की lead है जो CRM use करती है।</p>",
          hg: "<p>Day 1 se 27 ne tumhe technical depth di: OOP, C#, LINQ, EF Core, SOLID, patterns, DevOps, security aur bahut kuch. Wahan jo CRM bana, ab wahi woh team hai jise tum lead karte ho. Aaj ka day us knowledge ko <b>aisi stories mein badalta hai jo interview mein suna sako</b>. Aaj ke examples mein Asha aur Ravi developers hain, Kiran junior developer hai, aur Meena us support team ki lead hai jo CRM use karti hai.</p>"
        },
        what: {
          en: "<p>A <b>Tech Lead (TL)</b> is a senior engineer who is also accountable for what the whole team delivers and for its technical direction. He still codes and reviews, but he is judged on the <b>team's</b> result, not on his own ticket count.</p><p>It is not an <b>engineering manager</b> (hiring, performance, careers) and not an <b>architect</b> (broad design across many teams).</p>",
          hi: "<p><b>Tech Lead (TL)</b> एक senior engineer है जो पूरी team की delivery और technical direction के लिए भी ज़िम्मेदार होता है। वह अब भी code और review करता है, पर उसे <b>team के</b> नतीजे पर परखा जाता है, अपने tickets की गिनती पर नहीं।</p><p>यह <b>engineering manager</b> (hiring, performance, careers) नहीं है, और <b>architect</b> (कई teams का बड़ा design) भी नहीं।</p>",
          hg: "<p><b>Tech Lead (TL)</b> ek senior engineer hai jo poori team ki delivery aur technical direction ke liye bhi zimmedaar hota hai. Woh ab bhi code aur review karta hai, par use <b>team ke</b> nateeje par parkha jaata hai, apne tickets ki ginti par nahi.</p><p>Yeh <b>engineering manager</b> (hiring, performance, careers) nahi hai, aur <b>architect</b> (kai teams ka bada design) bhi nahi.</p>"
        },
        why: {
          en: "<p>The first TL question is almost always \"What is your idea of a TL?\" No code can test it. If your picture is wrong (\"the best coder who assigns tasks\" or \"a manager who stopped coding\"), the rest of the interview gets harder. One clear minute shows <b>ownership, judgement and people skills</b> together.</p><p>What interviewers listen for: do you measure success by the team's result, do you know the boundaries with a manager and an architect, and are you still hands-on.</p>",
          hi: "<p>TL का पहला सवाल लगभग हमेशा यही होता है: \"TL के बारे में तुम्हारा idea क्या है?\" इसे code से test नहीं किया जा सकता। अगर तुम्हारी तस्वीर ग़लत है (\"सबसे अच्छा coder जो tasks बाँटता है\" या \"manager जिसने code करना छोड़ दिया\"), तो आगे का interview मुश्किल हो जाता है। एक साफ़ मिनट में <b>ownership, judgement और लोगों को सँभालने की समझ</b> एक साथ दिख जाती है।</p><p>Interviewer ये सुनते हैं: क्या तुम सफलता team के नतीजे से नापते हो, क्या manager और architect से फ़र्क़ पता है, और क्या तुम अब भी hands-on हो।</p>",
          hg: "<p>TL ka pehla sawaal lagbhag hamesha yahi hota hai: \"TL ke baare mein tumhara idea kya hai?\" Ise code se test nahi kiya ja sakta. Agar tumhari tasveer galat hai (\"sabse achha coder jo tasks baantta hai\" ya \"manager jisne code karna chhod diya\"), to aage ka interview mushkil ho jaata hai. Ek saaf minute mein <b>ownership, judgement aur logon ko sambhaalne ki samajh</b> ek saath dikh jaati hai.</p><p>Interviewer ye sunte hain: kya tum safalta team ke nateeje se naapte ho, kya manager aur architect se fark pata hai, aur kya tum ab bhi hands-on ho.</p>"
        },
        analogy: {
          en: "<p>in a wedding kitchen, the head cook still stirs the big pot, but he also decides the menu order, tells the helpers who cuts what, and tastes everything before it leaves. If the food is late, <b>he answers to the family</b>, not the helper. A Tech Lead is the head cook of a team: still close to the code, but judged on what the whole team delivers.</p>",
          hi: "<p>शादी की kitchen में head cook अब भी बड़ा पतीला चलाता है, पर वो menu का order भी decide करता है, helpers को बताता है कि कौन क्या काटेगा, और खाना बाहर जाने से पहले सब चखता है। खाना late हो तो <b>जवाब परिवार को वो देता है</b>, helper नहीं। Tech Lead team का head cook है: code के पास रहता है, पर judge इस पर होता है कि पूरी team ने क्या deliver किया।</p>",
          hg: "<p>shaadi ki kitchen mein head cook ab bhi bada patila chalata hai, par woh menu ka order bhi decide karta hai, helpers ko batata hai ki kaun kya kaatega, aur khana bahar jaane se pehle sab chakhta hai. Khana late ho to <b>jawab parivaar ko woh deta hai</b>, helper nahi. Tech Lead team ka head cook hai: code ke paas rehta hai, par judge is par hota hai ki poori team ne kya deliver kiya.</p>"
        },
        lines: [
          {
            code: "a Tech Lead is a senior engineer who is accountable for what the whole team delivers",
            note: {
              en: "Start with the definition in one sentence. Interviewers want to hear \"accountable for the team\", not \"the best coder\".",
              hi: "पहले एक वाक्य में definition दो। Interviewer को \"team के लिए accountable\" सुनना है, \"सबसे अच्छा coder\" नहीं।",
              hg: "Pehle ek vaakya mein definition do. Interviewer ko \"team ke liye accountable\" sunna hai, \"sabse achha coder\" nahi."
            }
          },
          {
            code: "A senior developer owns hard tasks and the quality of his own work.",
            note: {
              en: "Compare fairly. A senior developer is not \"less\"; the scope is different. Never put the role down.",
              hi: "फ़र्क़ ईमानदारी से बताओ। Senior developer \"कम\" नहीं है; उसका scope अलग है। किसी role को नीचा मत दिखाओ।",
              hg: "Fark imaandaari se batao. Senior developer \"kam\" nahi hai; uska scope alag hai. Kisi role ko neecha mat dikhao."
            }
          },
          {
            code: "who owns hiring, performance and careers",
            note: {
              en: "Naming what a manager owns shows you know the boundary. You are not claiming a job you do not have.",
              hi: "Manager किसका owner है, यह बताने से दिखता है कि boundary पता है। जो job तुम्हारी नहीं, उसका दावा नहीं कर रहे।",
              hg: "Manager kiska owner hai, yeh batane se dikhta hai ki boundary pata hai. Jo job tumhari nahi, uska daava nahi kar rahe."
            }
          },
          {
            code: "a good week for me is when Kiran ships his first feature",
            note: {
              en: "A concrete picture beats a slogan. Success is measured by what the team ships, here Kiran and Meena's team.",
              hi: "Slogan से बेहतर है एक ठोस तस्वीर। सफलता team के shipped काम से नापी जाती है, यहाँ Kiran और Meena की team।",
              hg: "Slogan se behtar hai ek thos tasveer. Safalta team ke shipped kaam se naapi jaati hai, yahan Kiran aur Meena ki team."
            }
          },
          {
            code: "I still write code and review pull requests every week",
            note: {
              en: "A TL who stops coding cannot judge designs. Saying you stay hands-on makes your advice credible.",
              hi: "जो TL code करना छोड़ दे, वह design परख नहीं सकता। hands-on रहने की बात तुम्हारी सलाह को भरोसेमंद बनाती है।",
              hg: "Jo TL code karna chhod de, woh design parakh nahi sakta. Hands-on rehne ki baat tumhari salaah ko bharosemand banati hai."
            }
          },
          {
            code: "I have not held the title yet",
            note: {
              en: "Say it honestly, then show the proof: releases, incidents, mentoring. Honest plus evidence is stronger than a stretched claim.",
              hi: "ईमानदारी से बोलो, फिर proof दिखाओ: releases, incidents, mentoring। ईमानदारी और सबूत, बढ़ाकर बोले दावे से ज़्यादा मज़बूत हैं।",
              hg: "Imaandaari se bolo, phir proof dikhao: releases, incidents, mentoring. Imaandaari aur saboot, badhakar bole daave se zyada mazboot hain."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Saying \"a TL does not code\". Most companies expect you to stay hands-on enough to review code and designs credibly.</li><li>Saying \"a TL is the person who knows the most\". The job is the team's result; your force multiplier is the team.</li><li>Saying \"I have not been a TL, so I cannot answer\". Running a release, onboarding someone or handling an incident is real leadership, with or without the title.</li></ul>",
          hi: "<ul><li>\"TL code नहीं करता\" कहना। ज़्यादातर companies चाहती हैं कि तुम code और design को भरोसे से review करने लायक hands-on रहो।</li><li>\"TL वह है जिसे सबसे ज़्यादा आता है\" कहना। Job team के नतीजे की है; तुम्हारी असली ताक़त team है।</li><li>\"मैं TL नहीं रहा, इसलिए जवाब नहीं दे सकता\" कहना। Release चलाना, किसी को onboard करना या incident सँभालना असली leadership है, title हो या न हो।</li></ul>",
          hg: "<ul><li>\"TL code nahi karta\" kehna. Zyaadatar companies chahti hain ki tum code aur design ko bharose se review karne laayak hands-on raho.</li><li>\"TL woh hai jise sabse zyada aata hai\" kehna. Job team ke nateeje ki hai; tumhari asli taaqat team hai.</li><li>\"Main TL nahi raha, isliye jawab nahi de sakta\" kehna. Release chalana, kisi ko onboard karna ya incident sambhaalna asli leadership hai, title ho ya na ho.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use this answer for \"What is your idea of a TL?\", \"Senior developer versus TL\" and \"How is this different from your current role?\". Also ask early: \"What does the TL do day to day here?\" The hands-on versus leading split changes by company; it can be about 50/50 or lean either way.</p>",
          hi: "<p>यह जवाब इन सवालों पर use करो: \"TL के बारे में तुम्हारा idea?\", \"Senior developer बनाम TL\" और \"यह तुम्हारे अभी के role से कैसे अलग है?\" साथ ही शुरू में ही पूछो: \"यहाँ TL रोज़ क्या करता है?\" Hands-on और leading का split company के हिसाब से बदलता है; लगभग 50/50 हो सकता है या किसी तरफ़ झुका हुआ।</p>",
          hg: "<p>Yeh jawab in sawaalon par use karo: \"TL ke baare mein tumhara idea?\", \"Senior developer banaam TL\" aur \"Yeh tumhare abhi ke role se kaise alag hai?\" Saath hi shuru mein hi poochho: \"Yahan TL roz kya karta hai?\" Hands-on aur leading ka split company ke hisaab se badalta hai; lagbhag 50/50 ho sakta hai ya kisi taraf jhuka hua.</p>"
        },
        exercise: {
          task: {
            en: "<p>A weak answer: \"A TL is the best coder in the team who also assigns tasks.\" Rewrite it as a strong four-sentence answer. Use the CRM team (Kiran, Meena) and keep it true to your own work.</p>",
            hi: "<p>एक कमज़ोर जवाब: \"TL team का सबसे अच्छा coder होता है जो tasks भी बाँटता है।\" इसे चार वाक्यों के मज़बूत जवाब में बदलो। CRM team (Kiran, Meena) का example लो और अपने असली काम के हिसाब से रखो।</p>",
            hg: "<p>Ek kamzor jawab: \"TL team ka sabse achha coder hota hai jo tasks bhi baantta hai.\" Ise chaar vaakyon ke mazboot jawab mein badlo. CRM team (Kiran, Meena) ka example lo aur apne asli kaam ke hisaab se rakho.</p>"
          },
          hint: {
            en: "<p>Sentence 1: definition. Sentence 2: what you own beyond a senior developer. Sentence 3: how you measure a good week. Sentence 4: how you stay hands-on.</p>",
            hi: "<p>वाक्य 1: definition। वाक्य 2: senior developer से ऊपर तुम किसके owner हो। वाक्य 3: अच्छा हफ़्ता कैसे नापते हो। वाक्य 4: hands-on कैसे रहते हो।</p>",
            hg: "<p>Vaakya 1: definition. Vaakya 2: senior developer se upar tum kiske owner ho. Vaakya 3: achha hafta kaise naapte ho. Vaakya 4: hands-on kaise rehte ho.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a strong four-sentence answer",
              hi: "हल: चार वाक्यों का मज़बूत जवाब",
              hg: "Solution: chaar vaakyon ka mazboot jawab"
            },
            lang: "text",
            check: "none",
            src: "\"A Tech Lead is a senior engineer who is accountable for the team's delivery and technical direction, not only for his own code.\nCompared with a senior developer, I also decide the design direction, set review standards and remove blockers for people like Kiran.\nI measure a good week by what the team shipped, not by how many tickets I closed myself.\nI stay hands-on with reviews and some coding, so my design advice stays credible.\""
          }
        },
        quiz: {
          q: {
            en: "<p>The interviewer asks: \"What is your idea of a Tech Lead?\" Which answer is strongest?</p>",
            hi: "<p>Interviewer पूछता है: \"Tech Lead के बारे में तुम्हारा idea क्या है?\" कौन-सा जवाब सबसे मज़बूत है?</p>",
            hg: "<p>Interviewer poochhta hai: \"Tech Lead ke baare mein tumhara idea kya hai?\" Kaunsa jawab sabse mazboot hai?</p>"
          },
          options: [
            {
              en: "\"The strongest engineer in the team, who takes the hardest tickets and sets the coding standards that everyone follows.\"",
              hi: "\"Team का सबसे strong engineer, जो सबसे मुश्किल tickets लेता है और ऐसे coding standards तय करता है जिन्हें सब follow करें।\"",
              hg: "\"Team ka sabse strong engineer, jo sabse mushkil tickets leta hai aur aise coding standards tay karta hai jinhe sab follow karein.\""
            },
            {
              en: "\"A senior engineer who owns the team's delivery and technical direction, and still codes and reviews enough to judge designs.\"",
              hi: "\"एक senior engineer जो team की delivery और technical direction का owner है, और design परखने लायक अब भी code और review करता है।\"",
              hg: "\"Ek senior engineer jo team ki delivery aur technical direction ka owner hai, aur design parakhne laayak ab bhi code aur review karta hai.\""
            },
            {
              en: "\"Someone who mainly plans the sprints, assigns the tasks and reports progress to management, so developers can focus on code.\"",
              hi: "\"वह जो मुख्य रूप से sprints plan करता है, tasks बाँटता है और management को progress बताता है, ताकि developers code पर ध्यान दें।\"",
              hg: "\"Woh jo mainly sprints plan karta hai, tasks baantta hai aur management ko progress batata hai, taaki developers code par dhyaan dein.\""
            },
            {
              en: "\"The person who designs the architecture for all the teams and leaves day-to-day coding and reviews to the developers.\"",
              hi: "\"वह जो सारी teams का architecture design करता है और रोज़ की coding और reviews developers पर छोड़ देता है।\"",
              hg: "\"Woh jo saari teams ka architecture design karta hai aur roz ki coding aur reviews developers par chhod deta hai.\""
            }
          ],
          answer: 1,
          explain: {
            en: "<p>Only the \"owns the team's delivery\" answer combines the team's result, technical direction and staying hands-on. The \"strongest engineer\" answer describes a strong individual contributor (judged on his own work), the \"plans sprints and reports progress\" answer is closer to a manager or Scrum Master, and the \"architecture for all teams\" answer is an architect who no longer reviews the team's code.</p>",
            hi: "<p>सिर्फ़ \"team की delivery का owner\" वाले जवाब में team का नतीजा, technical direction और hands-on रहना, तीनों साथ हैं। \"सबसे strong engineer\" वाला जवाब एक strong individual contributor है (अपने काम पर परखा जाता है), \"sprints plan करता है और progress बताता है\" वाला manager या Scrum Master के ज़्यादा पास है, और \"सारी teams का architecture\" वाला ऐसा architect है जो अब team का code review नहीं करता।</p>",
            hg: "<p>Sirf \"team ki delivery ka owner\" wale jawab mein team ka nateeja, technical direction aur hands-on rehna, teeno saath hain. \"Sabse strong engineer\" wala jawab ek strong individual contributor hai (apne kaam par parkha jaata hai), \"sprints plan karta hai aur progress batata hai\" wala manager ya Scrum Master ke zyada paas hai, aur \"saari teams ka architecture\" wala aisa architect hai jo ab team ka code review nahi karta.</p>"
          }
        },
        recap: {
          en: "<ul><li>A TL is accountable for the team's delivery and technical direction, and stays hands-on.</li><li>Not a manager (people) and not an architect (broad design).</li><li>Say the definition first, then one concrete picture of a good week.</li></ul>",
          hi: "<ul><li>TL team की delivery और technical direction के लिए accountable है, और hands-on रहता है।</li><li>Manager (लोग) नहीं, architect (बड़ा design) भी नहीं।</li><li>पहले definition बोलो, फिर अच्छे हफ़्ते की एक ठोस तस्वीर।</li></ul>",
          hg: "<ul><li>TL team ki delivery aur technical direction ke liye accountable hai, aur hands-on rehta hai.</li><li>Manager (log) nahi, architect (bada design) bhi nahi.</li><li>Pehle definition bolo, phir achhe hafte ki ek thos tasveer.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A model answer to say aloud (replace the details with your own)",
            hi: "ज़ोर से बोलने के लिए model जवाब (details अपनी रखो)",
            hg: "Zor se bolne ke liye model jawab (details apni rakho)"
          },
          lang: "text",
          check: "none",
          src: "QUESTION: \"What is your idea of a Tech Lead, and how is it different from a senior developer?\"\n\nSAMPLE ANSWER - REPLACE THE DETAILS WITH YOUR OWN (about 60 seconds):\n\n\"For me a Tech Lead is a senior engineer who is accountable for what the whole team delivers, not only for his own tickets.\nA senior developer owns hard tasks and the quality of his own work. A Tech Lead also owns the technical direction: design choices, review standards, and unblocking people.\nIt is different from an engineering manager, who owns hiring, performance and careers, and from an architect, who owns broad design across many teams.\nIn our CRM team, a good week for me is when Kiran ships his first feature without waiting for me, and Meena's support team gets the date I promised.\nI still write code and review pull requests every week, because I cannot judge a design I do not understand.\nI have not held the title yet, but I have led releases, handled incidents and mentored two juniors, and I want to do that with full ownership.\""
        }
      ]
    },
    {
      id: "star-story",
      depth: "short",
      title: {
        en: "STAR: tell one story in two minutes",
        hi: "STAR: दो मिनट में एक story",
        hg: "STAR: do minute mein ek story"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 1 gave you a claim: \"a TL is accountable for the team's result\". A claim needs proof. <b>STAR is how you give proof in two minutes</b>, using a real moment from your own work. The story below is a CRM incident, and lesson 7 returns to the same incident as a playbook.</p>",
          hi: "<p>पाठ 1 ने एक दावा दिया: \"TL team के नतीजे के लिए accountable है\"। दावे को proof चाहिए। <b>STAR दो मिनट में proof देने का तरीक़ा है</b>, अपने असली काम के एक पल से। नीचे की story CRM का एक incident है, और पाठ 7 उसी incident पर playbook के रूप में लौटेगा।</p>",
          hg: "<p>Lesson 1 ne ek daava diya: \"TL team ke nateeje ke liye accountable hai\". Daave ko proof chahiye. <b>STAR do minute mein proof dene ka tareeka hai</b>, apne asli kaam ke ek pal se. Neeche ki story CRM ka ek incident hai, aur lesson 7 usi incident par playbook ke roop mein lautega.</p>"
        },
        what: {
          en: "<p><b>STAR</b> is a simple shape for a story: <b>S</b>ituation (context), <b>T</b>ask (your responsibility), <b>A</b>ction (what you did) and <b>R</b>esult (what changed). For a mistake or failure, add a <b>L</b>earning line (STAR-L).</p><p>Spend about 60% of your time on the Action.</p>",
          hi: "<p><b>STAR</b> एक story का सीधा ढाँचा है: <b>S</b>ituation (हालात), <b>T</b>ask (तुम्हारी ज़िम्मेदारी), <b>A</b>ction (तुमने क्या किया) और <b>R</b>esult (क्या बदला)। ग़लती या failure के लिए एक <b>L</b>earning line जोड़ो (STAR-L)।</p><p>अपना लगभग 60% समय Action पर लगाओ।</p>",
          hg: "<p><b>STAR</b> ek story ka seedha dhaancha hai: <b>S</b>ituation (haalaat), <b>T</b>ask (tumhari zimmedaari), <b>A</b>ction (tumne kya kiya) aur <b>R</b>esult (kya badla). Galti ya failure ke liye ek <b>L</b>earning line jodo (STAR-L).</p><p>Apna lagbhag 60% samay Action par lagao.</p>"
        },
        why: {
          en: "<p>\"Tell me about a time when...\" is the most common behavioral question. Without a shape, people give a long background and a tiny action. Prepare <b>6 to 8 real stories</b> (conflict, failure, influence, tough feedback, incident, deadline, mentoring, disagreement with a manager). One story can answer many questions, so eight stories cover about thirty.</p>",
          hi: "<p>\"Tell me about a time when...\" सबसे आम behavioral सवाल है। ढाँचे के बिना लोग लंबा background और छोटा action बोलते हैं। <b>6 से 8 असली stories</b> तैयार रखो (conflict, failure, influence, tough feedback, incident, deadline, mentoring, manager से disagreement)। एक story कई सवालों का जवाब बन सकती है, इसलिए आठ stories लगभग तीस सवाल सँभाल लेती हैं।</p>",
          hg: "<p>\"Tell me about a time when...\" sabse aam behavioral sawaal hai. Dhaanche ke bina log lamba background aur chhota action bolte hain. <b>6 se 8 asli stories</b> taiyaar rakho (conflict, failure, influence, tough feedback, incident, deadline, mentoring, manager se disagreement). Ek story kai sawaalon ka jawab ban sakti hai, isliye aath stories lagbhag tees sawaal sambhaal leti hain.</p>"
        },
        analogy: {
          en: "<p>a good kirana shopkeeper does not buy a new item for each customer. He keeps <b>a few well-stocked shelves</b> and combines them: rice, dal and oil go into many different baskets. Your stories are the shelves. Eight good stories can answer thirty different behavioral questions.</p>",
          hi: "<p>अच्छा kirana दुकानदार हर customer के लिए नया सामान नहीं खरीदता। वो <b>कुछ अच्छी भरी shelves</b> रखता है और उन्हें मिलाता है: चावल, दाल, तेल अलग-अलग baskets में जाते हैं। तुम्हारी stories वो shelves हैं। आठ अच्छी stories तीस अलग behavioral सवालों का answer दे सकती हैं।</p>",
          hg: "<p>achha kirana dukaandaar har customer ke liye naya saamaan nahi kharidta. Woh <b>kuch achhi bhari shelves</b> rakhta hai aur unhe milata hai: chawal, dal, tel alag-alag baskets mein jaate hain. Tumhari stories woh shelves hain. Aath achhi stories tees alag behavioral sawaalon ka answer de sakti hain.</p>"
        },
        focus: {
          caption: {
            en: "The shape in five lines",
            hi: "पाँच lines में ढाँचा",
            hg: "Paanch lines mein dhaancha"
          },
          lang: "text",
          check: "none",
          src: "S  Situation   1-2 sentences: system, team, what was at stake\nT  Task        1 sentence: what was YOUR responsibility\nA  Action      3-4 steps, about 60% of the time (\"I\" for your part)\nR  Result      what changed; a number only if you truly have one\nL  Learning    1 sentence (for mistakes and failures)"
        },
        lines: [
          {
            code: "SITUATION: On a Friday evening our CRM stopped sending SMS updates.",
            note: {
              en: "Situation is short: the system and what was at stake. The interviewer should understand it in ten seconds.",
              hi: "Situation छोटी है: system और दाँव पर क्या था। Interviewer दस सेकंड में समझ जाए।",
              hg: "Situation chhoti hai: system aur daanv par kya tha. Interviewer das second mein samajh jaaye."
            }
          },
          {
            code: "TASK:      I was the senior on call, so I had to lead the response",
            note: {
              en: "One sentence for your own responsibility. This is where \"I\" starts, and it shows ownership.",
              hi: "अपनी ज़िम्मेदारी के लिए एक वाक्य। यहीं से \"I\" शुरू होता है, और यह ownership दिखाता है।",
              hg: "Apni zimmedaari ke liye ek vaakya. Yahin se \"I\" shuru hota hai, aur yeh ownership dikhata hai."
            }
          },
          {
            code: "\"I am the incident lead. Kiran checks the SMS gateway, Ravi checks today's deploy.\"",
            note: {
              en: "The Action starts with a clear move that gives roles to teammates by name. You are leading, not playing hero.",
              hi: "Action एक साफ़ कदम से शुरू होता है जिसमें teammates को नाम लेकर roles मिलते हैं। तुम lead कर रहे हो, hero नहीं बन रहे।",
              hg: "Action ek saaf kadam se shuru hota hai jisme teammates ko naam lekar roles milte hain. Tum lead kar rahe ho, hero nahi ban rahe."
            }
          },
          {
            code: "I chose to roll back first and look for the root cause on Monday.",
            note: {
              en: "The hard choice and its trade-off, in one line. Interviewers listen for judgement here more than anywhere else.",
              hi: "मुश्किल choice और उसका trade-off, एक line में। Interviewer सबसे ज़्यादा यहीं judgement सुनते हैं।",
              hg: "Mushkil choice aur uska trade-off, ek line mein. Interviewer sabse zyada yahin judgement sunte hain."
            }
          },
          {
            code: "one short update every 30 minutes",
            note: {
              en: "A small, checkable habit: communication on a fixed cadence. It shows you looked after people, not only the code.",
              hi: "एक छोटी, जाँचने लायक आदत: fixed cadence पर communication। यह दिखाती है कि तुमने सिर्फ़ code की नहीं, लोगों की भी देखभाल की।",
              hg: "Ek chhoti, jaanchne laayak aadat: fixed cadence par communication. Yeh dikhati hai ki tumne sirf code ki nahi, logon ki bhi dekhbhaal ki."
            }
          },
          {
            code: "LEARNING:  We added an alert",
            note: {
              en: "End with what changed afterwards. \"We\" for the team's fix, \"I\" for your own actions: both together sound honest.",
              hi: "आख़िर में बताओ कि बाद में क्या बदला। Team के fix के लिए \"We\", अपने कामों के लिए \"I\": दोनों मिलकर ईमानदार लगते हैं।",
              hg: "Aakhir mein batao ki baad mein kya badla. Team ke fix ke liye \"We\", apne kaamon ke liye \"I\": dono milkar imaandaar lagte hain."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>A long Situation and a tiny Action. If you speak for a minute before you say what <b>you</b> did, you have lost the interviewer.</li><li>Only \"we\": the interviewer cannot tell what your part was. Use \"I\" for your actions and \"we\" for team results.</li><li>Blaming a named person, or inventing a story. Interviewers ask follow-up questions, and an invented story breaks quickly. A true story with a mixed result is fine if it shows judgement and learning.</li></ul>",
          hi: "<ul><li>लंबी Situation और छोटा Action। अगर <b>तुमने</b> क्या किया यह बोलने से पहले एक मिनट निकल गया, तो interviewer हाथ से गया।</li><li>सिर्फ़ \"we\": interviewer समझ नहीं पाता कि तुम्हारा हिस्सा क्या था। अपने कामों के लिए \"I\" और team के नतीजों के लिए \"we\" बोलो।</li><li>किसी नाम वाले को दोष देना, या story गढ़ना। Interviewer follow-up सवाल पूछते हैं, और गढ़ी हुई story जल्दी टूट जाती है। मिला-जुला नतीजा चलता है, बशर्ते वह judgement और सीख दिखाए।</li></ul>",
          hg: "<ul><li>Lambi Situation aur chhota Action. Agar <b>tumne</b> kya kiya yeh bolne se pehle ek minute nikal gaya, to interviewer haath se gaya.</li><li>Sirf \"we\": interviewer samajh nahi paata ki tumhara hissa kya tha. Apne kaamon ke liye \"I\" aur team ke nateejon ke liye \"we\" bolo.</li><li>Kisi naam wale ko dosh dena, ya story gadhna. Interviewer follow-up sawaal poochhte hain, aur gadhi hui story jaldi toot jaati hai. Mila-jula nateeja chalta hai, bashart woh judgement aur seekh dikhaaye.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use STAR for \"Tell me about a time...\" questions. For an opinion question such as \"How do you handle conflict?\", first give your principle in one sentence, then support it with a short story (lesson 4 shows this). Practise each story aloud for about two minutes, and keep client names and secrets out of it.</p>",
          hi: "<p>\"Tell me about a time...\" वाले सवालों पर STAR use करो। राय वाले सवाल पर, जैसे \"Conflict कैसे सँभालते हो?\", पहले एक वाक्य में अपना principle बोलो, फिर छोटी story से उसे सहारा दो (पाठ 4 में यही दिखता है)। हर story ज़ोर से लगभग दो मिनट practise करो, और client के नाम व secrets बाहर रखो।</p>",
          hg: "<p>\"Tell me about a time...\" wale sawaalon par STAR use karo. Raay wale sawaal par, jaise \"Conflict kaise sambhaalte ho?\", pehle ek vaakya mein apna principle bolo, phir chhoti story se use sahaara do (lesson 4 mein yahi dikhta hai). Har story zor se lagbhag do minute practise karo, aur client ke naam va secrets baahar rakho.</p>"
        },
        exercise: {
          task: {
            en: "<p>A weak failure answer: \"We had a bad release once, it was my fault, we fixed it and moved on.\" Turn it into a STAR-L story about a ticket-status change in the CRM (ticket 512 reopened wrongly). Own the mistake and end with a learning.</p>",
            hi: "<p>एक कमज़ोर failure जवाब: \"एक बार bad release हुई थी, मेरी ग़लती थी, हमने fix किया और आगे बढ़ गए।\" इसे CRM में ticket-status बदलाव की STAR-L story बनाओ (ticket 512 ग़लत तरह से reopen हुआ)। ग़लती अपनी मानो और सीख पर ख़त्म करो।</p>",
            hg: "<p>Ek kamzor failure jawab: \"Ek baar bad release hui thi, meri galti thi, humne fix kiya aur aage badh gaye.\" Ise CRM mein ticket-status badlaav ki STAR-L story banao (ticket 512 galat tarah se reopen hua). Galti apni mano aur seekh par khatam karo.</p>"
          },
          hint: {
            en: "<p>Task: \"I owned the change, so I owned the fix\". In Action show that you told your manager early, fixed the cause, and told the team what you missed.</p>",
            hi: "<p>Task: \"बदलाव मेरा था, इसलिए fix भी मेरा\"। Action में दिखाओ कि तुमने manager को जल्दी बताया, कारण ठीक किया, और team को बताया कि तुमसे क्या छूटा।</p>",
            hg: "<p>Task: \"Badlaav mera tha, isliye fix bhi mera\". Action mein dikhao ki tumne manager ko jaldi bataya, kaaran theek kiya, aur team ko bataya ki tumse kya chhoota.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a STAR-L failure story",
              hi: "हल: STAR-L failure story",
              hg: "Solution: STAR-L failure story"
            },
            lang: "text",
            check: "none",
            src: "SITUATION: I changed the ticket status rules in the CRM and merged without testing the Closed to Open path.\nTASK:      I owned the change, so I owned the fix.\nACTION:    1. When Meena's team reported that ticket 512 had reopened wrongly, I told my manager the same hour, not the next day.\n           2. I reverted my change, wrote the missing test, and released it again the next morning with Asha reviewing.\n           3. I posted a short note to the team about what I had missed.\nRESULT:    The wrong reopen was corrected within a day, and support had a clear message for the customer.\nLEARNING:  I now test every status transition, and I ask for a second reviewer on rule changes."
          }
        },
        quiz: {
          q: {
            en: "<p>You tell a story about a production incident. Which version of the <b>Action</b> part is strongest?</p>",
            hi: "<p>तुम production incident की story सुना रहे हो। <b>Action</b> वाला कौन-सा हिस्सा सबसे मज़बूत है?</p>",
            hg: "<p>Tum production incident ki story suna rahe ho. <b>Action</b> wala kaunsa hissa sabse mazboot hai?</p>"
          },
          options: [
            {
              en: "\"We all joined a call, checked the logs and the afternoon deploy together, and had it fixed within the hour as a team.\"",
              hi: "\"हम सब call पर आए, logs और दोपहर का deploy मिलकर देखा, और team के रूप में एक घंटे के अंदर fix कर दिया।\"",
              hg: "\"Hum sab call par aaye, logs aur dopahar ka deploy milkar dekha, aur team ke roop mein ek ghante ke andar fix kar diya.\""
            },
            {
              en: "\"I took over the laptop, went through the logs myself, found the bad setting and fixed it in production before others joined.\"",
              hi: "\"मैंने laptop सँभाला, logs ख़ुद देखे, ग़लत setting ढूँढी और दूसरों के आने से पहले production में fix कर दी।\"",
              hg: "\"Maine laptop sambhaala, logs khud dekhe, galat setting dhoondhi aur doosron ke aane se pehle production mein fix kar di.\""
            },
            {
              en: "\"I gave Kiran and Ravi clear roles, chose to roll back before debugging, and sent support an update every 30 minutes.\"",
              hi: "\"मैंने Kiran और Ravi को साफ़ roles दिए, debugging से पहले rollback चुना, और हर 30 मिनट पर support को update भेजा।\"",
              hg: "\"Maine Kiran aur Ravi ko saaf roles diye, debugging se pehle rollback chuna, aur har 30 minute par support ko update bheja.\""
            },
            {
              en: "\"I spent the evening tracing the exact root cause, so that the fix we shipped was permanent and not just a workaround.\"",
              hi: "\"मैंने शाम भर exact root cause ढूँढा, ताकि जो fix ship हो वह पक्का हो, सिर्फ़ workaround नहीं।\"",
              hg: "\"Maine shaam bhar exact root cause dhoondha, taaki jo fix ship ho woh pakka ho, sirf workaround nahi.\""
            }
          ],
          answer: 2,
          explain: {
            en: "<p>It uses \"I\" for your own moves, names the teammates' roles and includes a hard choice (roll back first). The \"we\" version hides your part, the hero version leaves the team out and changes production alone, and chasing the exact root cause first keeps customers waiting.</p>",
            hi: "<p>इसमें अपने कदमों के लिए \"I\" है, teammates के roles हैं, और एक मुश्किल choice (पहले rollback) भी। \"We\" वाला जवाब तुम्हारा हिस्सा छुपाता है, hero वाला team को बाहर रखता है और अकेले production बदलता है, और पहले exact root cause ढूँढने से customers इंतज़ार करते रहते हैं।</p>",
            hg: "<p>Isme apne kadmon ke liye \"I\" hai, teammates ke roles hain, aur ek mushkil choice (pehle rollback) bhi. \"We\" wala jawab tumhara hissa chhupata hai, hero wala team ko baahar rakhta hai aur akele production badalta hai, aur pehle exact root cause dhoondhne se customers intezaar karte rehte hain.</p>"
          }
        },
        recap: {
          en: "<ul><li>STAR: short Situation and Task, long Action with \"I\", then Result; add Learning for mistakes.</li><li>Keep 6 to 8 real stories; each can answer several questions.</li><li>Practise aloud for about two minutes; stay truthful and do not blame people.</li></ul>",
          hi: "<ul><li>STAR: छोटी Situation और Task, लंबा Action \"I\" के साथ, फिर Result; ग़लती हो तो Learning जोड़ो।</li><li>6 से 8 असली stories रखो; हर एक कई सवालों का जवाब बन सकती है।</li><li>ज़ोर से लगभग दो मिनट practise करो; सच बोलो और किसी को दोष मत दो।</li></ul>",
          hg: "<ul><li>STAR: chhoti Situation aur Task, lamba Action \"I\" ke saath, phir Result; galti ho to Learning jodo.</li><li>6 se 8 asli stories rakho; har ek kai sawaalon ka jawab ban sakti hai.</li><li>Zor se lagbhag do minute practise karo; sach bolo aur kisi ko dosh mat do.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A model STAR story: a CRM incident (replace with your own)",
            hi: "एक model STAR story: CRM incident (अपनी रखो)",
            hg: "Ek model STAR story: CRM incident (apni rakho)"
          },
          lang: "text",
          check: "none",
          src: "QUESTION: \"Tell me about a time you handled a problem in production under pressure.\"\n\nSAMPLE STORY - REPLACE WITH YOUR OWN. Invented for demonstration only.\n\nSITUATION: On a Friday evening our CRM stopped sending SMS updates. Customers like Asha and Ravi were calling the support desk because they heard nothing about their tickets.\nTASK:      I was the senior on call, so I had to lead the response and keep support informed.\nACTION:    1. I wrote in the incident channel: \"I am the incident lead. Kiran checks the SMS gateway, Ravi checks today's deploy.\"\n           2. Ravi found that a release from that afternoon had changed the notifier settings. I chose to roll back first and look for the root cause on Monday.\n           3. I sent Meena's support team one short update every 30 minutes, even when it said \"no change yet\".\n           4. After SMS started again, I watched the queue for 30 more minutes before closing the incident.\nRESULT:    Messages flowed again in about 45 minutes, and support had one clear line for customers.\nLEARNING:  We added an alert on \"SMS sent per hour\" and a rollback note to every release."
        }
      ]
    },
    {
      id: "estimate-range",
      depth: "short",
      title: {
        en: "Estimation: give a range, not a promise",
        hi: "Estimation: promise नहीं, range दो",
        hg: "Estimation: promise nahi, range do"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 2 gave you the shape of a story. Many stories are about dates: a deadline you met or missed. The skill behind them is <b>giving an estimate as a range</b>. This lesson uses a small C# program, like the earlier days, to make the arithmetic clear.</p>",
          hi: "<p>पाठ 2 ने story का ढाँचा दिया। कई stories तारीख़ों की होती हैं: deadline जो पूरी हुई या छूटी। इनके पीछे की skill है <b>estimate को range के रूप में देना</b>। यह पाठ छोटे C# program से, पिछले days की तरह, हिसाब साफ़ करता है।</p>",
          hg: "<p>Lesson 2 ne story ka dhaancha diya. Kai stories taareekhon ki hoti hain: deadline jo poori hui ya chhooti. Inke peechhe ki skill hai <b>estimate ko range ke roop mein dena</b>. Yeh lesson chhote C# program se, pichhle days ki tarah, hisaab saaf karta hai.</p>"
        },
        what: {
          en: "<p>An <b>estimate</b> is a range with a most-likely value, not a promise. The <b>three-point (PERT)</b> way: give three numbers, best case (O), most likely (M) and worst case (P). Expected value is <code>(O + 4M + P) / 6</code> and a rough spread is <code>(P - O) / 6</code>.</p>",
          hi: "<p><b>Estimate</b> एक range है जिसमें सबसे likely value होती है, promise नहीं। <b>Three-point (PERT)</b> तरीक़ा: तीन numbers दो, best case (O), most likely (M) और worst case (P)। Expected value <code>(O + 4M + P) / 6</code> है और मोटा spread <code>(P - O) / 6</code>।</p>",
          hg: "<p><b>Estimate</b> ek range hai jisme sabse likely value hoti hai, promise nahi. <b>Three-point (PERT)</b> tareeka: teen numbers do, best case (O), most likely (M) aur worst case (P). Expected value <code>(O + 4M + P) / 6</code> hai aur mota spread <code>(P - O) / 6</code>.</p>"
        },
        why: {
          en: "<p>Requirements change, unknown work appears only after you start, and people are usually optimistic about their own tasks. A single number becomes a promise and then a surprise. A range with <b>assumptions, a risk and a next step</b> is what a TL says, and it is what interviewers listen for.</p>",
          hi: "<p>Requirements बदलती हैं, अनजाना काम शुरू करने के बाद ही दिखता है, और लोग अपने tasks के बारे में आम तौर पर ज़्यादा optimistic होते हैं। एक अकेला number promise बन जाता है और फिर झटका। <b>Assumptions, एक risk और अगला कदम</b> के साथ range वही है जो TL बोलता है, और interviewer यही सुनते हैं।</p>",
          hg: "<p>Requirements badalti hain, anjaana kaam shuru karne ke baad hi dikhta hai, aur log apne tasks ke baare mein aam taur par zyada optimistic hote hain. Ek akela number promise ban jaata hai aur phir jhatka. <b>Assumptions, ek risk aur agla kadam</b> ke saath range wahi hai jo TL bolta hai, aur interviewer yahi sunte hain.</p>"
        },
        analogy: {
          en: "<p>\"How long from Pune to Mumbai?\" The honest answer is \"<b>about 3 hours, 4 if the Ghat is jammed, 2.5 if the expressway is clear</b>\". Nobody says \"exactly 3:07\". Software is the same road with more unknown turns, so an estimate is a <b>range with a most-likely value</b>, not a promise.</p>",
          hi: "<p>\"Pune से Mumbai कितनी देर?\" Honest answer है \"<b>लगभग 3 घंटे, Ghat में jam हो तो 4, expressway खाली हो तो 2.5</b>\"। कोई नहीं कहता \"ठीक 3:07\"। Software वही रास्ता है पर अनजान मोड़ ज़्यादा हैं, इसलिए estimate एक <b>range है जिसमें सबसे likely value होती है</b>, promise नहीं।</p>",
          hg: "<p>\"Pune se Mumbai kitni der?\" Honest answer hai \"<b>lagbhag 3 ghante, Ghat mein jam ho to 4, expressway khaali ho to 2.5</b>\". Koi nahi kehta \"theek 3:07\". Software wahi raasta hai par anjaan mod zyada hain, isliye estimate ek <b>range hai jisme sabse likely value hoti hai</b>, promise nahi.</p>"
        },
        lines: [
          {
            code: "var tasks = new (string Name, double Best, double Likely, double Worst)[]",
            note: {
              en: "Each task carries three numbers, not one. Ticket escalation rules has best 2, likely 4, worst 12: a wide range, so it is the risky task.",
              hi: "हर task के साथ एक नहीं, तीन numbers हैं। Ticket escalation rules में best 2, likely 4, worst 12 है: चौड़ी range, यानी यही risky task है।",
              hg: "Har task ke saath ek nahi, teen numbers hain. Ticket escalation rules mein best 2, likely 4, worst 12 hai: chaudi range, yaani yahi risky task hai."
            }
          },
          {
            code: "double expected = (t.Best + 4 * t.Likely + t.Worst) / 6;",
            note: {
              en: "The PERT expected value. The most-likely number counts four times, so one wild worst case does not swing the result too much.",
              hi: "PERT expected value। Most-likely number चार बार गिना जाता है, इसलिए एक बहुत बड़ा worst case नतीजे को ज़्यादा नहीं हिलाता।",
              hg: "PERT expected value. Most-likely number chaar baar ginaa jaata hai, isliye ek bahut bada worst case nateeje ko zyada nahi hilaata."
            }
          },
          {
            code: "double spread = (t.Worst - t.Best) / 6;",
            note: {
              en: "A rough measure of uncertainty. A big spread (1.7 for escalation rules) tells you where to do a spike first.",
              hi: "uncertainty का मोटा माप। बड़ा spread (escalation rules का 1.7) बताता है कि पहले spike कहाँ करना है।",
              hg: "Uncertainty ka mota maap. Bada spread (escalation rules ka 1.7) batata hai ki pehle spike kahan karna hai."
            }
          },
          {
            code: "Console.WriteLine(\"Assumptions: Kiran joins the SMS task; the vendor sandbox is ready.\");",
            note: {
              en: "Always name your assumptions. If one fails, the date moves, and everyone already knows why.",
              hi: "Assumptions हमेशा बोलो। उनमें से एक टूटी तो तारीख़ खिसकेगी, और सबको पहले से पता है क्यों।",
              hg: "Assumptions hamesha bolo. Unmein se ek tooti to taareekh khiskegi, aur sabko pehle se pata hai kyon."
            }
          },
          {
            code: "Math.Ceiling(total)",
            note: {
              en: "Round up for a date you say out loud: 10.3 days becomes \"about 11\". Whole days only, and slightly cautious.",
              hi: "जो तारीख़ ज़ोर से बोलनी है उसे round up करो: 10.3 दिन \"लगभग 11\" बनता है। पूरे दिन, और थोड़ा सावधान।",
              hg: "Jo taareekh zor se bolni hai use round up karo: 10.3 din \"lagbhag 11\" banta hai. Poore din, aur thoda saavdhaan."
            }
          },
          {
            code: "string F(double v) => v.ToString(\"0.0\", CultureInfo.InvariantCulture);",
            note: {
              en: "A small helper so numbers print the same on every machine. Not about leadership, just clean output.",
              hi: "छोटा helper ताकि numbers हर machine पर एक जैसे print हों। Leadership से नहीं, साफ़ output से मतलब है।",
              hg: "Chhota helper taaki numbers har machine par ek jaise print hon. Leadership se nahi, saaf output se matlab hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Giving one number under pressure (\"5 days\") with no assumptions. It will be heard as a promise.</li><li>Treating PERT as exact maths. It is a simple, honest way to show uncertainty. Adding all the best cases and all the worst cases, as the Say line does, gives outer limits that are both unlikely; the combined spread of these three tasks is only about 1.8 days, because spreads combine by adding squares (the Deep Dive explains).</li><li>Hiding padding. Do not sandbag secretly: show the range and the reason for it.</li></ul>",
          hi: "<ul><li>दबाव में एक number दे देना (\"5 दिन\") बिना assumptions के। उसे promise की तरह सुना जाएगा।</li><li>PERT को सटीक गणित समझना। यह uncertainty दिखाने का सीधा, ईमानदार तरीक़ा है। सारे best cases और सारे worst cases जोड़ना, जैसा Say line करती है, बाहरी सीमाएँ देता है जो दोनों ही कम होती हैं; इन तीन tasks का मिला हुआ spread सिर्फ़ लगभग 1.8 दिन है, क्योंकि spreads squares जोड़कर मिलते हैं (Deep Dive समझाता है)।</li><li>चुपके से padding छुपाना। चोरी-छुपे ज़्यादा time मत रखो: range और उसका कारण दिखाओ।</li></ul>",
          hg: "<ul><li>Dabaav mein ek number de dena (\"5 din\") bina assumptions ke. Use promise ki tarah suna jaayega.</li><li>PERT ko sateek ganit samajhna. Yeh uncertainty dikhane ka seedha, imaandaar tareeka hai. Saare best cases aur saare worst cases jodna, jaisa Say line karti hai, baahari limits deta hai jo dono hi kam hoti hain; in teen tasks ka mila hua spread sirf lagbhag 1.8 din hai, kyunki spreads squares jodkar milte hain (Deep Dive samjhata hai).</li><li>Chupke se padding chhupana. Chori-chhupe zyada time mat rakho: range aur uska kaaran dikhao.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use ranges and PERT when the work has real unknowns or when a stakeholder needs a date. For a tiny, well-understood task, one number is fine and PERT only adds ceremony. Exact phrase to say: <b>\"About 11 days, best case 5, worst case 21. The risk is the escalation rules; I will know more after a one-day spike.\"</b></p>",
          hi: "<p>जब काम में असली unknowns हों या stakeholder को तारीख़ चाहिए, तब range और PERT use करो। छोटे, अच्छी तरह समझे task के लिए एक number चलता है और PERT सिर्फ़ रस्म बढ़ाता है। बोलने का exact वाक्य: <b>\"लगभग 11 दिन, best case 5, worst case 21। Risk escalation rules में है; एक दिन के spike के बाद ज़्यादा पता चलेगा।\"</b></p>",
          hg: "<p>Jab kaam mein asli unknowns hon ya stakeholder ko taareekh chahiye, tab range aur PERT use karo. Chhote, achhi tarah samjhe task ke liye ek number chalta hai aur PERT sirf rasm badhata hai. Bolne ka exact vaakya: <b>\"Lagbhag 11 din, best case 5, worst case 21. Risk escalation rules mein hai; ek din ke spike ke baad zyada pata chalega.\"</b></p>"
        },
        exercise: {
          task: {
            en: "<p>Meena asks for one more task: an <b>audit log</b> with best 1, likely 2, worst 3 days. Add it to the list and print the new total expected days with one decimal (<code>Total expected: ...</code>). Then say the answer aloud as a range.</p>",
            hi: "<p>Meena एक और task माँगती है: <b>audit log</b>, best 1, likely 2, worst 3 दिन। उसे list में जोड़ो और नया total expected days एक decimal के साथ print करो (<code>Total expected: ...</code>)। फिर जवाब ज़ोर से range में बोलो।</p>",
            hg: "<p>Meena ek aur task maangti hai: <b>audit log</b>, best 1, likely 2, worst 3 din. Use list mein jodo aur naya total expected days ek decimal ke saath print karo (<code>Total expected: ...</code>). Phir jawab zor se range mein bolo.</p>"
          },
          hint: {
            en: "<p>Add a fourth tuple <code>(1, 2, 3)</code> and sum <code>(Best + 4 * Likely + Worst) / 6</code> with LINQ.</p>",
            hi: "<p>चौथा tuple <code>(1, 2, 3)</code> जोड़ो और LINQ से <code>(Best + 4 * Likely + Worst) / 6</code> का sum लो।</p>",
            hg: "<p>Chautha tuple <code>(1, 2, 3)</code> jodo aur LINQ se <code>(Best + 4 * Likely + Worst) / 6</code> ka sum lo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: four tasks, one total",
              hi: "हल: चार tasks, एक total",
              hg: "Solution: chaar tasks, ek total"
            },
            src: "using System.Globalization;\n\nvar tasks = new (double Best, double Likely, double Worst)[]\n{\n    (2, 4, 12),\n    (1, 2, 5),\n    (2, 3, 4),\n    (1, 2, 3),\n};\n\ndouble total = tasks.Sum(t => (t.Best + 4 * t.Likely + t.Worst) / 6);\nConsole.WriteLine(\"Total expected: \" + total.ToString(\"0.0\", CultureInfo.InvariantCulture) + \" days\");",
            check: "run",
            expected: "Total expected: 12.3 days"
          }
        },
        quiz: {
          q: {
            en: "<p>Meena asks: \"How long will these three CRM tasks take?\" The numbers are the ones in the program above. Which answer is strongest?</p>",
            hi: "<p>Meena पूछती है: \"इन तीन CRM tasks में कितना time लगेगा?\" Numbers वही हैं जो ऊपर के program में हैं। कौन-सा जवाब सबसे मज़बूत है?</p>",
            hg: "<p>Meena poochhti hai: \"In teen CRM tasks mein kitna time lagega?\" Numbers wahi hain jo upar ke program mein hain. Kaunsa jawab sabse mazboot hai?</p>"
          },
          options: [
            {
              en: "\"About 11 days, best case 5, worst case 21. The biggest risk is the escalation rules; a one-day spike will narrow it.\"",
              hi: "\"लगभग 11 दिन, best case 5, worst case 21। सबसे बड़ा risk escalation rules हैं; एक दिन का spike range छोटी कर देगा।\"",
              hg: "\"Lagbhag 11 din, best case 5, worst case 21. Sabse bada risk escalation rules hain; ek din ka spike range chhoti kar dega.\""
            },
            {
              en: "\"Around 9 days, if nothing unexpected comes up. The team is experienced and we have done similar CRM work before.\"",
              hi: "\"लगभग 9 दिन, अगर कुछ अचानक न आए। Team experienced है और हमने पहले भी ऐसा CRM काम किया है।\"",
              hg: "\"Lagbhag 9 din, agar kuch achaanak na aaye. Team experienced hai aur humne pehle bhi aisa CRM kaam kiya hai.\""
            },
            {
              en: "\"21 days, to be safe. I would rather commit to the worst case and finish early than risk missing the date.\"",
              hi: "\"Safe रहने के लिए 21 दिन। मैं worst case पर commit करके जल्दी ख़त्म करना पसंद करूँगा, बजाय तारीख़ चूकने के।\"",
              hg: "\"Safe rehne ke liye 21 din. Main worst case par commit karke jaldi khatam karna pasand karunga, bajaay taareekh chookne ke.\""
            },
            {
              en: "\"About 9 days: 4 for escalation, 2 for SMS retry and 3 for the report, based on how long Ravi took for similar work.\"",
              hi: "\"लगभग 9 दिन: escalation के 4, SMS retry के 2 और report के 3, इस हिसाब से कि Ravi को ऐसे काम में कितना time लगा था।\"",
              hg: "\"Lagbhag 9 din: escalation ke 4, SMS retry ke 2 aur report ke 3, is hisaab se ki Ravi ko aise kaam mein kitna time laga tha.\""
            }
          ],
          answer: 0,
          explain: {
            en: "<p>It gives a range, names the biggest risk and offers a next step that reduces uncertainty. \"Around 9 days, if nothing comes up\" is the sum of the most-likely values, which is optimistic and will be heard as a promise. \"21 days to be safe\" is hidden padding. Adding up Ravi's old numbers gives a single figure and ignores this work's own unknowns.</p>",
            hi: "<p>इसमें range है, सबसे बड़ा risk नाम से है, और uncertainty घटाने वाला अगला कदम भी। \"लगभग 9 दिन, अगर कुछ न आए\" सिर्फ़ most-likely values का जोड़ है, जो optimistic है और promise की तरह सुना जाएगा। \"Safe रहने के लिए 21 दिन\" छुपी हुई padding है। Ravi के पुराने numbers जोड़ने से एक ही number मिलता है और इस काम के अपने unknowns छूट जाते हैं।</p>",
            hg: "<p>Isme range hai, sabse bada risk naam se hai, aur uncertainty ghatane wala agla kadam bhi. \"Lagbhag 9 din, agar kuch na aaye\" sirf most-likely values ka jod hai, jo optimistic hai aur promise ki tarah suna jaayega. \"Safe rehne ke liye 21 din\" chhupi hui padding hai. Ravi ke purane numbers jodne se ek hi number milta hai aur is kaam ke apne unknowns chhoot jaate hain.</p>"
          }
        },
        recap: {
          en: "<ul><li>An estimate is a range with assumptions, not a promise.</li><li>PERT: expected = (O + 4M + P) / 6, spread = (P - O) / 6.</li><li>Say range, biggest risk, and the next step that reduces uncertainty.</li></ul>",
          hi: "<ul><li>Estimate assumptions के साथ एक range है, promise नहीं।</li><li>PERT: expected = (O + 4M + P) / 6, spread = (P - O) / 6।</li><li>Range, सबसे बड़ा risk और uncertainty घटाने वाला अगला कदम बोलो।</li></ul>",
          hg: "<ul><li>Estimate assumptions ke saath ek range hai, promise nahi.</li><li>PERT: expected = (O + 4M + P) / 6, spread = (P - O) / 6.</li><li>Range, sabse bada risk aur uncertainty ghatane wala agla kadam bolo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "PERT for three CRM tasks",
            hi: "तीन CRM tasks के लिए PERT",
            hg: "Teen CRM tasks ke liye PERT"
          },
          src: "using System.Globalization;\n\nvar tasks = new (string Name, double Best, double Likely, double Worst)[]\n{\n    (\"Ticket escalation rules\", 2, 4, 12),\n    (\"SMS notifier retry\", 1, 2, 5),\n    (\"Agent workload report\", 2, 3, 4),\n};\n\ndouble total = 0;\nforeach (var t in tasks)\n{\n    double expected = (t.Best + 4 * t.Likely + t.Worst) / 6;\n    double spread = (t.Worst - t.Best) / 6;\n    total += expected;\n    Console.WriteLine($\"{t.Name}: expected {F(expected)} days, spread {F(spread)}\");\n}\n\nConsole.WriteLine($\"Total expected: {F(total)} days\");\nConsole.WriteLine(\"Assumptions: Kiran joins the SMS task; the vendor sandbox is ready.\");\nConsole.WriteLine($\"Say: about {Math.Ceiling(total)} days, best case {tasks.Sum(t => t.Best)}, worst case {tasks.Sum(t => t.Worst)}.\");\n\nstring F(double v) => v.ToString(\"0.0\", CultureInfo.InvariantCulture);",
          check: "run",
          expected: "Ticket escalation rules: expected 5.0 days, spread 1.7\nSMS notifier retry: expected 2.3 days, spread 0.7\nAgent workload report: expected 3.0 days, spread 0.3\nTotal expected: 10.3 days\nAssumptions: Kiran joins the SMS task; the vendor sandbox is ready.\nSay: about 11 days, best case 5, worst case 21."
        }
      ]
    },
    {
      id: "technical-disagreement",
      depth: "short",
      title: {
        en: "Technical disagreement: from opinions to a written decision",
        hi: "Technical disagreement: राय से लिखे हुए फ़ैसले तक",
        hg: "Technical disagreement: raay se likhe hue faisle tak"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 3 turned a guess into evidence with a spike and a number. The same move solves a team conflict: replace \"I think\" with \"we measured\", then <b>write the decision down</b>. This lesson also shows the answer shape from lesson 2 for an opinion question: principle first, story second.</p>",
          hi: "<p>पाठ 3 ने spike और number से अंदाज़े को सबूत बनाया। यही कदम team के conflict को भी हल करता है: \"मुझे लगता है\" की जगह \"हमने नापा\", फिर <b>फ़ैसला लिख दो</b>। यह पाठ पाठ 2 का वह जवाब-ढाँचा भी दिखाता है जो राय वाले सवाल के लिए है: पहले principle, फिर story।</p>",
          hg: "<p>Lesson 3 ne spike aur number se andaaze ko saboot banaya. Yahi kadam team ke conflict ko bhi hal karta hai: \"Mujhe lagta hai\" ki jagah \"humne naapa\", phir <b>faisla likh do</b>. Yeh lesson lesson 2 ka woh jawab-dhaancha bhi dikhata hai jo raay wale sawaal ke liye hai: pehle principle, phir story.</p>"
        },
        what: {
          en: "<p>A <b>technical disagreement</b> is two good engineers wanting different solutions. A TL's job is not to win it but to move it from opinion to evidence: understand the <b>goal</b> behind each view, agree <b>criteria</b>, use <b>data</b> (a measurement or a short prototype), write an <b>ADR</b> (a decision record), then <b>disagree and commit</b>.</p>",
          hi: "<p><b>Technical disagreement</b> मतलब दो अच्छे engineers अलग solution चाहते हैं। TL का काम इसे जीतना नहीं, राय से सबूत तक ले जाना है: हर view के पीछे का <b>goal</b> समझो, <b>criteria</b> तय करो, <b>data</b> use करो (नाप या छोटा prototype), <b>ADR</b> (फ़ैसले का record) लिखो, फिर <b>disagree and commit</b>।</p>",
          hg: "<p><b>Technical disagreement</b> matlab do achhe engineers alag solution chahte hain. TL ka kaam ise jeetna nahi, raay se saboot tak le jaana hai: har view ke peechhe ka <b>goal</b> samjho, <b>criteria</b> tay karo, <b>data</b> use karo (naap ya chhota prototype), <b>ADR</b> (faisle ka record) likho, phir <b>disagree and commit</b>.</p>"
        },
        why: {
          en: "<p>If you decide by rank, the loser stops sharing ideas. If you let it drag, the team loses days. Interviewers use this question to see <b>judgement and fairness</b>: do you protect people, use evidence and still make a decision.</p>",
          hi: "<p>अगर rank से फ़ैसला करोगे, तो हारने वाला ideas देना बंद कर देता है। अगर खींचने दोगे, तो team के दिन जाते हैं। Interviewer इस सवाल से <b>judgement और fairness</b> देखते हैं: क्या तुम लोगों को बचाते हो, सबूत use करते हो, और फिर भी फ़ैसला लेते हो।</p>",
          hg: "<p>Agar rank se faisla karoge, to haarne wala ideas dena band kar deta hai. Agar kheenchne doge, to team ke din jaate hain. Interviewer is sawaal se <b>judgement aur fairness</b> dekhte hain: kya tum logon ko bachate ho, saboot use karte ho, aur phir bhi faisla lete ho.</p>"
        },
        analogy: {
          en: "<p>two drivers argue about the route to the airport. Shouting does not help; <b>opening the maps app and comparing the times does</b>. Technical disagreements are the same: move from \"I think\" to \"here is what we measured\".</p>",
          hi: "<p>दो drivers airport के रास्ते पर बहस कर रहे हैं। चिल्लाने से कुछ नहीं होता; <b>maps app खोलकर times compare करने से होता है</b>। Technical disagreements भी ऐसे ही हैं: \"मुझे लगता है\" से \"हमने ये measure किया\" पर आओ।</p>",
          hg: "<p>do drivers airport ke raaste par bahas kar rahe hain. Chillane se kuch nahi hota; <b>maps app kholkar times compare karne se hota hai</b>. Technical disagreements bhi aise hi hain: \"mujhe lagta hai\" se \"humne yeh measure kiya\" par aao.</p>"
        },
        lines: [
          {
            code: "My principle: understand the goal behind each opinion",
            note: {
              en: "For an opinion question, give your principle in one sentence first. The story then proves it.",
              hi: "राय वाले सवाल पर पहले एक वाक्य में अपना principle दो। फिर story उसे साबित करती है।",
              hg: "Raay wale sawaal par pehle ek vaakya mein apna principle do. Phir story use saabit karti hai."
            }
          },
          {
            code: "so I did not decide by seniority",
            note: {
              en: "You say how you protected both people. Deciding by rank is the answer interviewers are afraid of.",
              hi: "तुम बता रहे हो कि दोनों लोगों को कैसे बचाया। Rank से फ़ैसला करना वही जवाब है जिससे interviewer डरते हैं।",
              hg: "Tum bata rahe ho ki dono logon ko kaise bachaya. Rank se faisla karna wahi jawab hai jisse interviewer darte hain."
            }
          },
          {
            code: "I asked each of them for the goal.",
            note: {
              en: "Ask \"what do you want to be true?\" Often both want fast, safe and cheap, with different fears.",
              hi: "पूछो \"तुम क्या सच होते देखना चाहते हो?\" अक्सर दोनों fast, safe और cheap चाहते हैं, बस डर अलग होते हैं।",
              hg: "Poochho \"tum kya sach hote dekhna chahte ho?\" Aksar dono fast, safe aur cheap chahte hain, bas dar alag hote hain."
            }
          },
          {
            code: "We ran a half-day spike with real ticket-list sizes and measured both options.",
            note: {
              en: "Data ends the argument. Note \"real sizes\": a prototype with toy data proves nothing.",
              hi: "Data बहस ख़त्म करता है। \"Real sizes\" पर ध्यान दो: खिलौना data वाला prototype कुछ साबित नहीं करता।",
              hg: "Data bahas khatam karta hai. \"Real sizes\" par dhyaan do: khilauna data wala prototype kuch saabit nahi karta."
            }
          },
          {
            code: "I wrote a one-page decision record",
            note: {
              en: "An ADR (Day 15) keeps the options, numbers, choice and a review date in one place, so nobody re-argues it in three months.",
              hi: "ADR (Day 15) में options, numbers, choice और review की तारीख़ एक जगह रहती है, ताकि तीन महीने बाद कोई फिर बहस न करे।",
              hg: "ADR (Day 15) mein options, numbers, choice aur review ki taareekh ek jagah rehti hai, taaki teen mahine baad koi phir bahas na kare."
            }
          },
          {
            code: "we agreed to disagree and commit",
            note: {
              en: "Once decided, everyone backs it, including the person who lost. Asha's concern became an alert, so she was heard, not ignored.",
              hi: "फ़ैसला होने के बाद सब उसका साथ देते हैं, हारने वाला भी। Asha की चिंता एक alert बन गई, यानी उसकी सुनी गई, अनदेखी नहीं हुई।",
              hg: "Faisla hone ke baad sab uska saath dete hain, haarne wala bhi. Asha ki chinta ek alert ban gayi, yaani uski suni gayi, andekhi nahi hui."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>A story where you \"convinced him\". Interviewers hear a winner and a loser. Show a fair process instead.</li><li>Using \"disagree and commit\" to silence a safety or ethics concern. Those must be escalated properly, not committed away.</li><li>Dragging a small, easily reversed choice into a long study. Decide quickly and move on. If it truly stays stuck, escalate the decision, not the person, with both options and your recommendation.</li></ul>",
          hi: "<ul><li>ऐसी story जिसमें तुमने \"उसे मना लिया\"। Interviewer को एक जीतने वाला और एक हारने वाला सुनाई देता है। इसकी जगह fair process दिखाओ।</li><li>\"Disagree and commit\" से safety या ethics की चिंता को चुप कराना। उन्हें ठीक से escalate करना है, commit करके दबाना नहीं।</li><li>छोटे, आसानी से पलटने वाले choice को लंबी पड़ताल बना देना। जल्दी decide करो और आगे बढ़ो। सच में अटका रहे तो decision को escalate करो, person को नहीं, दोनों options और अपनी recommendation के साथ।</li></ul>",
          hg: "<ul><li>Aisi story jisme tumne \"use mana liya\". Interviewer ko ek jeetne wala aur ek haarne wala sunaayi deta hai. Iski jagah fair process dikhao.</li><li>\"Disagree and commit\" se safety ya ethics ki chinta ko chup karana. Unhe theek se escalate karna hai, commit karke dabana nahi.</li><li>Chhote, aasani se palatne wale choice ko lambi padtaal bana dena. Jaldi decide karo aur aage badho. Sach mein atka rahe to decision ko escalate karo, person ko nahi, dono options aur apni recommendation ke saath.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use this for \"How do you handle a technical disagreement?\", \"Tell me about a time you influenced a decision\" and \"Disagreement with a peer\". Prototype and measure when the decision is costly to reverse. Always start with your one-line principle, then the story.</p>",
          hi: "<p>इसे इन सवालों पर use करो: \"Technical disagreement कैसे सँभालते हो?\", \"कोई ऐसा समय जब तुमने किसी decision को influence किया\" और \"साथी से disagreement\"। जब फ़ैसला पलटना महँगा हो तब prototype बनाकर नापो। हमेशा एक line के principle से शुरू करो, फिर story।</p>",
          hg: "<p>Ise in sawaalon par use karo: \"Technical disagreement kaise sambhaalte ho?\", \"Koi aisa samay jab tumne kisi decision ko influence kiya\" aur \"Saathi se disagreement\". Jab faisla palatna mahnga ho tab prototype banakar naapo. Hamesha ek line ke principle se shuru karo, phir story.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write the one-page decision record (ADR) for Asha's and Ravi's caching disagreement. Fill every field: status, context, options, evidence, decision, consequences, revisit date and dissent.</p>",
            hi: "<p>Asha और Ravi के caching disagreement का एक page का decision record (ADR) लिखो। हर field भरो: status, context, options, evidence, decision, consequences, revisit date और dissent।</p>",
            hg: "<p>Asha aur Ravi ke caching disagreement ka ek page ka decision record (ADR) likho. Har field bharo: status, context, options, evidence, decision, consequences, revisit date aur dissent.</p>"
          },
          hint: {
            en: "<p>Dissent is not a secret: write who preferred the other option and that you agreed to commit. Revisit when: a date or a trigger like \"if traffic doubles\".</p>",
            hi: "<p>Dissent कोई छुपी बात नहीं: लिखो कि दूसरा option किसे पसंद था और कि commit करने पर सहमति हुई। Revisit when: तारीख़ या trigger, जैसे \"traffic दोगुना हो तो\"।</p>",
            hg: "<p>Dissent koi chhupi baat nahi: likho ki doosra option kise pasand tha aur ki commit karne par sahmati hui. Revisit when: taareekh ya trigger, jaise \"traffic dugna ho to\".</p>"
          },
          solution: {
            caption: {
              en: "Solution: a filled decision record",
              hi: "हल: भरा हुआ decision record",
              hg: "Solution: bhara hua decision record"
            },
            lang: "text",
            check: "none",
            src: "ADR-12: In-memory cache for the ticket-list API\nStatus:       accepted\nContext:      Ticket lists are slow at peak time. Asha and Ravi disagreed: a distributed cache or an in-memory cache.\nOptions:      A. Distributed cache   B. In-memory cache in each API instance\nEvidence:     Half-day spike with real ticket-list sizes: response times were close; B needs no extra service.\nDecision:     We chose B because it is simpler and cheaper when the numbers are close.\nConsequences: Data can be stale between servers for a short time; we added a stale-data alert.\nRevisit when: After one quarter, or if traffic doubles.\nDissent:      Asha preferred A; we agreed to commit."
          }
        },
        quiz: {
          q: {
            en: "<p>Two senior developers disagree about caching and the team is stuck. What should the TL do first?</p>",
            hi: "<p>दो senior developers caching पर असहमत हैं और team अटकी है। TL को सबसे पहले क्या करना चाहिए?</p>",
            hg: "<p>Do senior developers caching par asahmat hain aur team atki hai. TL ko sabse pehle kya karna chahiye?</p>"
          },
          options: [
            {
              en: "Go with the more experienced developer's option; their track record is a reasonable guide and it saves the team time.",
              hi: "ज़्यादा experienced developer का option ले लो; उनका track record ठीक-ठाक guide है और team का time बचता है।",
              hg: "Zyada experienced developer ka option le lo; unka track record theek-thaak guide hai aur team ka time bachta hai."
            },
            {
              en: "Take both options to your manager with a short summary and ask for a decision, so neither person feels you took sides.",
              hi: "दोनों options छोटे summary के साथ अपने manager के पास ले जाओ और decision माँगो, ताकि किसी को न लगे कि तुमने side ली।",
              hg: "Dono options chhote summary ke saath apne manager ke paas le jao aur decision maango, taaki kisi ko na lage ki tumne side li."
            },
            {
              en: "Pick the option you would have built yourself, explain your reasons clearly, and ask both of them to commit to it.",
              hi: "वह option चुनो जो तुम ख़ुद बनाते, अपनी वजहें साफ़ समझाओ, और दोनों से उस पर commit करने को कहो।",
              hg: "Woh option chuno jo tum khud banaate, apni wajahein saaf samjhao, aur dono se us par commit karne ko kaho."
            },
            {
              en: "Ask each for the goal behind their view, agree the criteria together, then measure both options in a short spike.",
              hi: "हर एक से उसके view के पीछे का goal पूछो, criteria मिलकर तय करो, फिर छोटे spike में दोनों options को नापो।",
              hg: "Har ek se uske view ke peechhe ka goal poochho, criteria milkar tay karo, phir chhote spike mein dono options ko naapo."
            }
          ],
          answer: 3,
          explain: {
            en: "<p>Goal first, criteria second, evidence third is a fair process that keeps both people engaged. Deciding by experience or by your own taste is still deciding by rank, and the other person stops sharing ideas. Going straight to the manager hands away a decision that is your job. Escalate only when a fair process has really failed.</p>",
            hi: "<p>पहले goal, फिर criteria, फिर सबूत: यह fair process है जो दोनों को जुड़ा रखता है। Experience से या अपनी पसंद से फ़ैसला करना भी rank से फ़ैसला है, और दूसरा इंसान ideas देना बंद कर देता है। सीधे manager के पास जाना वह फ़ैसला सौंप देना है जो तुम्हारा काम है। Escalate तभी करो जब fair process सच में fail हो जाए।</p>",
            hg: "<p>Pehle goal, phir criteria, phir saboot: yeh fair process hai jo dono ko juda rakhta hai. Experience se ya apni pasand se faisla karna bhi rank se faisla hai, aur doosra insaan ideas dena band kar deta hai. Seedhe manager ke paas jaana woh faisla saunp dena hai jo tumhara kaam hai. Escalate tabhi karo jab fair process sach mein fail ho jaaye.</p>"
          }
        },
        recap: {
          en: "<ul><li>Goal first, then criteria, then data from a measurement or spike.</li><li>Write the decision (ADR) with a revisit date, then disagree and commit.</li><li>Opinion question: one-line principle first, short story second.</li></ul>",
          hi: "<ul><li>पहले goal, फिर criteria, फिर नाप या spike से data।</li><li>फ़ैसला (ADR) revisit की तारीख़ के साथ लिखो, फिर disagree and commit।</li><li>राय वाला सवाल: पहले एक line का principle, फिर छोटी story।</li></ul>",
          hg: "<ul><li>Pehle goal, phir criteria, phir naap ya spike se data.</li><li>Faisla (ADR) revisit ki taareekh ke saath likho, phir disagree and commit.</li><li>Raay wala sawaal: pehle ek line ka principle, phir chhoti story.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A model answer: a caching disagreement between Asha and Ravi",
            hi: "Model जवाब: Asha और Ravi का caching disagreement",
            hg: "Model jawab: Asha aur Ravi ka caching disagreement"
          },
          lang: "text",
          check: "none",
          src: "QUESTION: \"How do you handle a technical disagreement in your team?\"\n\nSAMPLE ANSWER - REPLACE THE DETAILS WITH YOUR OWN (about 90 seconds):\n\n\"My principle: understand the goal behind each opinion, agree on the criteria, use data, write the decision down, and then everyone commits.\nHere is an example. Asha wanted a distributed cache for the ticket-list API and Ravi wanted a simple in-memory cache. Both are strong engineers, so I did not decide by seniority.\nI asked each of them for the goal. Both wanted fast ticket lists; Asha feared stale data across servers, Ravi feared the extra cost and operations. We agreed on three criteria: response time, stale-data risk and running cost.\nWe ran a half-day spike with real ticket-list sizes and measured both options.\nI wrote a one-page decision record with the options, the numbers, the choice and a date to review it after one quarter.\nResponse times were within a few milliseconds of each other, so the simpler, cheaper in-memory cache won. Asha still had concerns, so we agreed to disagree and commit, and she added an alert for stale data.\nWe shipped on time, and both stayed engaged because the decision was based on data and written down.\""
        }
      ]
    },
    {
      id: "mentoring-1on1",
      depth: "short",
      title: {
        en: "Mentoring: 1:1s, a growth plan, and staying off the keyboard",
        hi: "Mentoring: 1:1, growth plan, और keyboard से दूर रहना",
        hg: "Mentoring: 1:1, growth plan, aur keyboard se door rehna"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 4 treated a peer with respect: goal first, evidence second. Mentoring is the same respect for someone junior: <b>ask first, tell later</b>. It also gives you the \"mentored someone who grew\" story from the story bank in lesson 2.</p>",
          hi: "<p>पाठ 4 ने साथी के साथ इज़्ज़त से पेश आना सिखाया: पहले goal, फिर सबूत। Mentoring वही इज़्ज़त junior के लिए है: <b>पहले पूछो, बाद में बताओ</b>। यह पाठ 2 के story bank की \"जिसे mentor किया और वह आगे बढ़ा\" वाली story भी देता है।</p>",
          hg: "<p>Lesson 4 ne saathi ke saath izzat se pesh aana sikhaya: pehle goal, phir saboot. Mentoring wahi izzat junior ke liye hai: <b>pehle poochho, baad mein batao</b>. Yeh lesson lesson 2 ke story bank ki \"jise mentor kiya aur woh aage badha\" wali story bhi deta hai.</p>"
        },
        what: {
          en: "<p><b>Mentoring</b> is helping someone grow so that they need you less over time. Three tools: a regular <b>1:1</b> (their agenda first), a small <b>growth plan</b> (one goal for a quarter, concrete steps, a check date) and <b>\"do not take the keyboard\"</b> (ask questions, let them type).</p>",
          hi: "<p><b>Mentoring</b> मतलब किसी को इस तरह आगे बढ़ाना कि समय के साथ उसे तुम्हारी कम ज़रूरत पड़े। तीन औज़ार: regular <b>1:1</b> (पहले उनका agenda), छोटा <b>growth plan</b> (एक quarter का एक goal, ठोस कदम, check की तारीख़) और <b>\"keyboard मत पकड़ो\"</b> (सवाल पूछो, उन्हें type करने दो)।</p>",
          hg: "<p><b>Mentoring</b> matlab kisi ko is tarah aage badhana ki samay ke saath use tumhari kam zaroorat pade. Teen auzaar: regular <b>1:1</b> (pehle unka agenda), chhota <b>growth plan</b> (ek quarter ka ek goal, thos kadam, check ki taareekh) aur <b>\"keyboard mat pakdo\"</b> (sawaal poochho, unhe type karne do).</p>"
        },
        why: {
          en: "<p>When a junior is slow it is tempting to fix the task yourself. It is faster today and costs you every week afterwards. A TL is a force multiplier: a good week is when <b>other people</b> can do more. Interviewers listen for whether you grow people or become the bottleneck.</p>",
          hi: "<p>जब junior धीमा हो तो task ख़ुद ठीक कर देने का मन करता है। आज यह तेज़ है, पर उसके बाद हर हफ़्ते महँगा पड़ता है। TL force multiplier है: अच्छा हफ़्ता वह है जब <b>दूसरे लोग</b> ज़्यादा कर पाएँ। Interviewer सुनते हैं कि तुम लोगों को बढ़ाते हो या ख़ुद bottleneck बन जाते हो।</p>",
          hg: "<p>Jab junior dheema ho to task khud theek kar dene ka man karta hai. Aaj yeh tez hai, par uske baad har hafte mahnga padta hai. TL force multiplier hai: achha hafta woh hai jab <b>doosre log</b> zyada kar paayein. Interviewer sunte hain ki tum logon ko badhate ho ya khud bottleneck ban jaate ho.</p>"
        },
        analogy: {
          en: "<p>teaching a child to ride a cycle. First you hold the seat and run alongside; then you let go for a few metres; then you just watch from the gate. If you keep holding the seat, <b>the child never learns</b>, and if you let go too early they fall. Mentoring is choosing the right amount of hold for this person, on this task.</p>",
          hi: "<p>बच्चे को cycle सिखाना। पहले तुम seat पकड़कर साथ दौड़ते हो; फिर कुछ मीटर छोड़ देते हो; फिर gate से बस देखते हो। अगर seat पकड़े रहो तो <b>बच्चा कभी सीखता नहीं</b>, और बहुत जल्दी छोड़ दो तो वो गिरता है। Mentoring इस person के लिए, इस task पर, सही मात्रा की पकड़ चुनना है।</p>",
          hg: "<p>bachche ko cycle sikhana. Pehle tum seat pakadkar saath daudte ho; phir kuch meter chhod dete ho; phir gate se bas dekhte ho. Agar seat pakde raho to <b>bachcha kabhi seekhta nahi</b>, aur bahut jaldi chhod do to woh girta hai. Mentoring is person ke liye, is task par, sahi maatra ki pakad chunna hai.</p>"
        },
        lines: [
          {
            code: "In our 1:1 I started with his agenda",
            note: {
              en: "The 1:1 is their time first. You learn the real blocker only when they speak first.",
              hi: "1:1 पहले उनका समय है। असली रुकावट तभी पता चलती है जब वे पहले बोलें।",
              hg: "1:1 pehle unka samay hai. Asli rukaavat tabhi pata chalti hai jab woh pehle bolein."
            }
          },
          {
            code: "I asked, \"What part feels hardest?\"",
            note: {
              en: "An open question, not \"Why are you slow?\". The answer (reading generated SQL) was a skill gap, not laziness.",
              hi: "खुला सवाल, \"तुम धीमे क्यों हो?\" नहीं। जवाब (generated SQL पढ़ना) skill की कमी थी, आलस नहीं।",
              hg: "Khula sawaal, \"Tum dheeme kyon ho?\" nahi. Jawab (generated SQL padhna) skill ki kami thi, aalas nahi."
            }
          },
          {
            code: "I stayed off the keyboard.",
            note: {
              en: "The most important line. If you type, he watches and learns nothing. Ask \"What have you tried?\" and let him type.",
              hi: "सबसे ज़रूरी line। तुम type करोगे तो वह देखेगा और कुछ नहीं सीखेगा। \"तुमने क्या try किया?\" पूछो और उसे type करने दो।",
              hg: "Sabse zaroori line. Tum type karoge to woh dekhega aur kuch nahi seekhega. \"Tumne kya try kiya?\" poochho aur use type karne do."
            }
          },
          {
            code: "Goal for the quarter: own the ticket search feature end to end.",
            note: {
              en: "A growth plan is one goal, a few steps and a check date. A stretch task with support beats a long list of courses.",
              hi: "Growth plan एक goal, कुछ कदम और check की तारीख़ है। सहारे के साथ stretch task, courses की लंबी list से बेहतर है।",
              hg: "Growth plan ek goal, kuch kadam aur check ki taareekh hai. Sahaare ke saath stretch task, courses ki lambi list se behtar hai."
            }
          },
          {
            code: "I turned my repeated review comments into a checklist",
            note: {
              en: "Repeated comments mean a missing habit. A shared checklist teaches once instead of commenting every week.",
              hi: "बार-बार वही comments का मतलब है कोई आदत छूटी है। Team की common checklist एक बार सिखाती है, हर हफ़्ते comment नहीं करना पड़ता।",
              hg: "Baar-baar wahi comments ka matlab hai koi aadat chhooti hai. Team ki common checklist ek baar sikhati hai, har hafte comment nahi karna padta."
            }
          },
          {
            code: "If it had been a production fire, I would have given direct instructions first",
            note: {
              en: "Coaching needs time. In a real emergency you direct first and teach afterwards. Saying this shows judgement about when to use which style.",
              hi: "Coaching को समय चाहिए। असली emergency में पहले साफ़ instructions दो, सिखाओ बाद में। यह कहना दिखाता है कि कौन-सा style कब use करना है, इसका judgement है।",
              hg: "Coaching ko samay chahiye. Asli emergency mein pehle saaf instructions do, sikhao baad mein. Yeh kehna dikhata hai ki kaunsa style kab use karna hai, iska judgement hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Taking the keyboard \"just this once\". It becomes every time, and the person learns that you will always rescue them.</li><li>A 1:1 that is only your status questions. Their topics come first; keep short notes and follow up on what you promised.</li><li>Delegating a task far beyond someone's skill with no support and calling it trust. That is neglect. Give the outcome, the why, the boundaries and the deadline, plus a check-in.</li></ul>",
          hi: "<ul><li>\"बस इस बार\" keyboard ले लेना। यह हर बार बन जाता है, और सामने वाला सीखता है कि तुम हमेशा बचा लोगे।</li><li>ऐसा 1:1 जिसमें सिर्फ़ तुम्हारे status सवाल हों। पहले उनके topics; छोटे notes रखो और जो वादा किया उसे follow up करो।</li><li>किसी की skill से बहुत आगे का task बिना सहारे दे देना और उसे भरोसा कहना। यह लापरवाही है। Outcome, वजह, boundaries और deadline दो, साथ में एक check-in।</li></ul>",
          hg: "<ul><li>\"Bas is baar\" keyboard le lena. Yeh har baar ban jaata hai, aur saamne wala seekhta hai ki tum hamesha bacha loge.</li><li>Aisa 1:1 jisme sirf tumhare status sawaal hon. Pehle unke topics; chhote notes rakho aur jo vaada kiya use follow up karo.</li><li>Kisi ki skill se bahut aage ka task bina sahaare de dena aur use bharosa kehna. Yeh laaparwaahi hai. Outcome, wajah, boundaries aur deadline do, saath mein ek check-in.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use this for \"How do you mentor a junior?\", \"A junior is slow and the deadline is close\" and \"Tell me about a time someone grew because of you\". Use coaching when time allows learning; in a production fire switch to clear instructions. For a skilled and confident person, delegate the outcome and step back.</p>",
          hi: "<p>इसे इन सवालों पर use करो: \"Junior को mentor कैसे करते हो?\", \"Junior धीमा है और deadline पास है\" और \"कोई ऐसा समय जब तुम्हारी वजह से कोई आगे बढ़ा\"। समय हो तो coaching; production की आग में साफ़ instructions। skilled और confident इंसान को outcome delegate करके पीछे हट जाओ।</p>",
          hg: "<p>Ise in sawaalon par use karo: \"Junior ko mentor kaise karte ho?\", \"Junior dheema hai aur deadline paas hai\" aur \"Koi aisa samay jab tumhari wajah se koi aage badha\". Samay ho to coaching; production ki aag mein saaf instructions. Skilled aur confident insaan ko outcome delegate karke peechhe hat jao.</p>"
        },
        exercise: {
          task: {
            en: "<p>Ravi is skilled and confident. Write a short delegation message that hands him the <b>SMS retry</b> feature. Include four things: the outcome, the why, the boundaries and the deadline. Do not tell him how to build it.</p>",
            hi: "<p>Ravi skilled और confident है। उसे <b>SMS retry</b> feature सौंपने वाला छोटा delegation message लिखो। चार बातें रखो: outcome, वजह, boundaries और deadline। यह मत बताओ कि बनाना कैसे है।</p>",
            hg: "<p>Ravi skilled aur confident hai. Use <b>SMS retry</b> feature saunpne wala chhota delegation message likho. Chaar baatein rakho: outcome, wajah, boundaries aur deadline. Yeh mat batao ki banana kaise hai.</p>"
          },
          hint: {
            en: "<p>Outcome is what should be true at the end (for example \"a failed SMS is retried three times, then an alert\"). Add one check-in date so he is not alone.</p>",
            hi: "<p>Outcome वह है जो अंत में सच होना चाहिए (जैसे \"fail हुआ SMS तीन बार retry हो, फिर alert\")। एक check-in की तारीख़ जोड़ो ताकि वह अकेला न रहे।</p>",
            hg: "<p>Outcome woh hai jo ant mein sach hona chahiye (jaise \"fail hua SMS teen baar retry ho, phir alert\"). Ek check-in ki taareekh jodo taaki woh akela na rahe.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a delegation message",
              hi: "हल: एक delegation message",
              hg: "Solution: ek delegation message"
            },
            lang: "text",
            check: "none",
            src: "\"Ravi, I would like you to own the SMS retry feature.\nWhy: when an SMS fails, customers like Asha hear nothing about their ticket.\nOutcome: a failed SMS is retried three times, and then an alert is raised.\nBoundaries: keep the INotifier interface as it is; talk to me before you add a new package or a new cost.\nDeadline: demo on Thursday, with a short check-in on Tuesday.\nHow you build it is your choice.\""
          }
        },
        quiz: {
          q: {
            en: "<p>Kiran is slow on a task and the deadline is Friday. Which is the strongest TL response?</p>",
            hi: "<p>Kiran एक task पर धीमा है और deadline शुक्रवार है। TL का सबसे मज़बूत जवाब कौन-सा है?</p>",
            hg: "<p>Kiran ek task par dheema hai aur deadline shukravaar hai. TL ka sabse mazboot jawab kaunsa hai?</p>"
          },
          options: [
            {
              en: "Pair for 30 minutes, ask what he has tried, let him type, and cut scope with Meena if the date is still at risk.",
              hi: "30 मिनट pair करो, पूछो उसने क्या try किया, उसे type करने दो, और तारीख़ फिर भी ख़तरे में हो तो Meena के साथ scope घटाओ।",
              hg: "30 minute pair karo, poochho usne kya try kiya, use type karne do, aur taareekh phir bhi khatre mein ho to Meena ke saath scope ghataao."
            },
            {
              en: "Move the task to Ravi, who knows that area well, and give Kiran a smaller ticket so he feels less pressure.",
              hi: "Task Ravi को दे दो, जिसे वह area अच्छे से आता है, और Kiran को छोटा ticket दो ताकि उस पर दबाव कम हो।",
              hg: "Task Ravi ko de do, jise woh area achhe se aata hai, aur Kiran ko chhota ticket do taaki us par dabaav kam ho."
            },
            {
              en: "Finish the ticket yourself tonight so the date is safe, then walk Kiran through your solution on Monday.",
              hi: "आज रात ticket ख़ुद ख़त्म कर दो ताकि तारीख़ बची रहे, फिर Monday को Kiran को अपना solution समझा दो।",
              hg: "Aaj raat ticket khud khatam kar do taaki taareekh bachi rahe, phir Monday ko Kiran ko apna solution samjha do."
            },
            {
              en: "Give him space until Thursday so he learns by working it out alone, and step in only if it is still not done.",
              hi: "Thursday तक उसे अकेला छोड़ दो ताकि वह ख़ुद हल करके सीखे, और तब भी न हो तभी बीच में आओ।",
              hg: "Thursday tak use akela chhod do taaki woh khud hal karke seekhe, aur tab bhi na ho tabhi beech mein aao."
            }
          ],
          answer: 0,
          explain: {
            en: "<p>It helps him learn, keeps the keyboard with him, and protects the date by agreeing scope openly. Finishing it yourself saves this week and teaches him nothing. Moving the task to Ravi also saves the date, but Kiran learns that he gets rescued and the skill gap stays. Leaving him alone until Thursday finds the problem too late to fix.</p>",
            hi: "<p>इससे वह सीखता है, keyboard उसके पास रहता है, और तारीख़ खुलकर scope तय करने से बचती है। ख़ुद ख़त्म करने से यह हफ़्ता बचता है पर वह कुछ नहीं सीखता। Task Ravi को देने से भी तारीख़ बचती है, पर Kiran सीखता है कि उसे कोई बचा लेगा, और skill की कमी वहीं रहती है। Thursday तक अकेला छोड़ने से problem इतनी देर से पता चलती है कि ठीक करने का time नहीं बचता।</p>",
            hg: "<p>Isse woh seekhta hai, keyboard uske paas rehta hai, aur taareekh khulkar scope tay karne se bachti hai. Khud khatam karne se yeh hafta bachta hai par woh kuch nahi seekhta. Task Ravi ko dene se bhi taareekh bachti hai, par Kiran seekhta hai ki use koi bacha lega, aur skill ki kami wahin rehti hai. Thursday tak akela chhodne se problem itni der se pata chalti hai ki theek karne ka time nahi bachta.</p>"
          }
        },
        recap: {
          en: "<ul><li>1:1: their agenda first, open questions, short notes, follow up.</li><li>Growth plan: one goal, a few steps, a check date; stretch task with support.</li><li>Do not take the keyboard: ask \"What have you tried?\"; direct only in a real emergency.</li></ul>",
          hi: "<ul><li>1:1: पहले उनका agenda, खुले सवाल, छोटे notes, follow up।</li><li>Growth plan: एक goal, कुछ कदम, check की तारीख़; सहारे के साथ stretch task।</li><li>Keyboard मत पकड़ो: \"तुमने क्या try किया?\" पूछो; सिर्फ़ असली emergency में साफ़ instructions दो।</li></ul>",
          hg: "<ul><li>1:1: pehle unka agenda, khule sawaal, chhote notes, follow up.</li><li>Growth plan: ek goal, kuch kadam, check ki taareekh; sahaare ke saath stretch task.</li><li>Keyboard mat pakdo: \"Tumne kya try kiya?\" poochho; sirf asli emergency mein saaf instructions do.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A model answer: mentoring Kiran",
            hi: "Model जवाब: Kiran को mentor करना",
            hg: "Model jawab: Kiran ko mentor karna"
          },
          lang: "text",
          check: "none",
          src: "QUESTION: \"How do you mentor a junior developer who is struggling?\"\n\nSAMPLE ANSWER - REPLACE THE DETAILS WITH YOUR OWN (about 90 seconds):\n\n\"Kiran, a junior in our CRM team, was stuck on EF Core queries and got the same review comments every week.\nIn our 1:1 I started with his agenda, not mine. I asked, \"What part feels hardest?\" He said reading the SQL that EF Core generates.\nWe paired once. He typed, I asked \"What have you tried?\", and I stayed off the keyboard.\nThen we wrote a small growth plan. Goal for the quarter: own the ticket search feature end to end. Steps: a design review with me, pairing on the hardest query, and a demo to Meena's team. Check date: after six weeks.\nI turned my repeated review comments into a checklist that we both used.\nBy the six-week check he had shipped ticket search, and I reviewed only his design. His pull requests went from three or four review rounds to one or two.\nI learned that questions work better than answers. If it had been a production fire, I would have given direct instructions first and taught him afterwards.\""
        }
      ]
    },
    {
      id: "stakeholder-update",
      depth: "short",
      title: {
        en: "Stakeholders: a status update and \"yes, if\"",
        hi: "Stakeholders: status update और \"yes, if\"",
        hg: "Stakeholders: status update aur \"yes, if\""
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 5 explained work to a teammate in technical words. A stakeholder such as Meena needs the same work in <b>time, money and risk</b>. The range and assumptions from lesson 3 go straight into this update, and the early warning habit from lesson 2 (\"I told my manager the same hour\") becomes a weekly format.</p>",
          hi: "<p>पाठ 5 ने teammate को technical शब्दों में काम समझाया। Meena जैसे stakeholder को वही काम <b>time, पैसे और risk</b> में चाहिए। पाठ 3 की range और assumptions सीधे इस update में जाती हैं, और पाठ 2 की जल्दी बताने की आदत (\"manager को उसी घंटे बताया\") एक weekly format बन जाती है।</p>",
          hg: "<p>Lesson 5 ne teammate ko technical shabdon mein kaam samjhaya. Meena jaise stakeholder ko wahi kaam <b>time, paise aur risk</b> mein chahiye. Lesson 3 ki range aur assumptions seedhe is update mein jaati hain, aur lesson 2 ki jaldi batane ki aadat (\"manager ko usi ghante bataya\") ek weekly format ban jaati hai.</p>"
        },
        what: {
          en: "<p>A <b>stakeholder update</b> is a short, regular message in the same five-line format: <b>Goal, Done, Next, Risks, Ask</b>. And <b>\"yes, if\"</b> is how you say no: you offer options (cut scope, move the date, accept a named risk) instead of a flat \"not possible\".</p>",
          hi: "<p><b>Stakeholder update</b> एक छोटा, regular message है जो हर बार पाँच-line format में आता है: <b>Goal, Done, Next, Risks, Ask</b>। और <b>\"yes, if\"</b> वह तरीक़ा है जिससे तुम \"no\" बोलते हो: सीधे \"नहीं हो सकता\" की जगह options देते हो (scope घटाओ, तारीख़ बढ़ाओ, एक नाम वाला risk मानो)।</p>",
          hg: "<p><b>Stakeholder update</b> ek chhota, regular message hai jo har baar paanch-line format mein aata hai: <b>Goal, Done, Next, Risks, Ask</b>. Aur <b>\"yes, if\"</b> woh tareeka hai jisse tum \"no\" bolte ho: seedhe \"nahi ho sakta\" ki jagah options dete ho (scope ghataao, taareekh badhao, ek naam wala risk mano).</p>"
        },
        why: {
          en: "<p>Stakeholders do not want technology; they want to know what happened, what it means for them and what you need from them. \"No surprises\" is the rule: bring bad news early, with a plan. A weekly five-line message beats a monthly twenty-slide deck. Interviewers listen for <b>communication and managing up</b>.</p>",
          hi: "<p>Stakeholders को technology नहीं चाहिए; उन्हें जानना है कि क्या हुआ, उनके लिए इसका मतलब क्या है, और तुम्हें उनसे क्या चाहिए। नियम है \"कोई surprise नहीं\": बुरी ख़बर जल्दी दो, plan के साथ। हर हफ़्ते के पाँच line के message का मुक़ाबला महीने भर का बीस slides का deck नहीं कर सकता। Interviewer <b>communication और ऊपर वालों को सँभालना</b> सुनते हैं।</p>",
          hg: "<p>Stakeholders ko technology nahi chahiye; unhe jaanna hai ki kya hua, unke liye iska matlab kya hai, aur tumhe unse kya chahiye. Niyam hai \"koi surprise nahi\": buri khabar jaldi do, plan ke saath. Har hafte ke paanch line ke message ka muqaabla mahine bhar ka bees slides ka deck nahi kar sakta. Interviewer <b>communication aur upar walon ko sambhaalna</b> sunte hain.</p>"
        },
        analogy: {
          en: "<p>a doctor does not explain the whole biology to the family in the waiting room. He says: \"<b>The operation went fine. Next 24 hours are the risk. Here is what we watch.</b>\" Stakeholders (product, business, support, your manager) want the same: <b>what happened, what it means for them, what you need from them</b>.</p>",
          hi: "<p>doctor waiting room में परिवार को पूरी biology नहीं समझाता। वो कहता है: \"<b>Operation ठीक रहा। अगले 24 घंटे risk के हैं। हम ये देखेंगे।</b>\" Stakeholders (product, business, support, तुम्हारे manager) भी यही चाहते हैं: <b>क्या हुआ, उनके लिए इसका क्या मतलब है, तुम्हें उनसे क्या चाहिए</b>।</p>",
          hg: "<p>doctor waiting room mein parivaar ko poori biology nahi samjhata. Woh kehta hai: \"<b>Operation theek raha. Agle 24 ghante risk ke hain. Hum yeh dekhenge.</b>\" Stakeholders (product, business, support, tumhare manager) bhi yahi chahte hain: <b>kya hua, unke liye iska kya matlab hai, tumhe unse kya chahiye</b>.</p>"
        },
        lines: [
          {
            code: "Customers get an SMS on every ticket status change by the 30th.",
            note: {
              en: "The goal is one line in business words: what customers get and by when. No class names, no framework names.",
              hi: "Goal एक line में business की भाषा में: customers को क्या मिलेगा और कब तक। न class के नाम, न framework के नाम।",
              hg: "Goal ek line mein business ki bhaasha mein: customers ko kya milega aur kab tak. Na class ke naam, na framework ke naam."
            }
          },
          {
            code: "Agents can see a list of failed SMS and resend them.",
            note: {
              en: "Done is told as what people can now do, not what code changed. Meena can picture her team using it.",
              hi: "Done इस तरह बताओ कि लोग अब क्या कर सकते हैं, code में क्या बदला नहीं। Meena अपनी team को इसे use करते देख सकती है।",
              hg: "Done is tarah batao ki log ab kya kar sakte hain, code mein kya badla nahi. Meena apni team ko ise use karte dekh sakti hai."
            }
          },
          {
            code: "Owner: Ravi.",
            note: {
              en: "Every risk has an owner. A risk with no name is a worry; a risk with a name is a plan.",
              hi: "हर risk का एक owner। बिना नाम का risk चिंता है; नाम वाला risk plan है।",
              hg: "Har risk ka ek owner. Bina naam ka risk chinta hai; naam wala risk plan hai."
            }
          },
          {
            code: "We have asked the vendor for a faster test system.",
            note: {
              en: "Bad news arrives with an action already started. That is how you \"bring problems with a plan\".",
              hi: "बुरी ख़बर ऐसे आती है कि action पहले से शुरू है। इसी तरह तुम \"problem plan के साथ\" लाते हो।",
              hg: "Buri khabar aise aati hai ki action pehle se shuru hai. Isi tarah tum \"problem plan ke saath\" laate ho."
            }
          },
          {
            code: "I can deliver the top three with good quality, or all five with a higher risk of bugs.",
            note: {
              en: "This is \"yes, if\": two real options, and the cost of each said out loud. The decision goes back to the person who owns the business priority.",
              hi: "यह \"yes, if\" है: दो असली options, और हर एक की क़ीमत साफ़ बोली हुई। फ़ैसला उसी के पास लौटता है जिसकी business priority है।",
              hg: "Yeh \"yes, if\" hai: do asli options, aur har ek ki keemat saaf boli hui. Faisla usi ke paas lautta hai jiski business priority hai."
            }
          },
          {
            code: "Please choose by Wednesday so I can hold the date.",
            note: {
              en: "Ask for a decision with a deadline and a reason. Without a deadline, the Ask is easy to ignore.",
              hi: "Deadline और वजह के साथ फ़ैसला माँगो। Deadline के बिना Ask को अनदेखा करना आसान है।",
              hg: "Deadline aur wajah ke saath faisla maango. Deadline ke bina Ask ko andekha karna aasaan hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Jargon in the update (\"we refactored the notifier\"). Say what changed for people: faster list, easier to change vendor. Only claim it if you can support it.</li><li>A flat \"no\", or a silent \"yes\" followed by a missed date. Offer options and name the cost of each.</li><li>Hiding a real problem to look good, or flooding people with raw detail they did not ask for. Executives want the headline and the ask; engineers want specifics.</li></ul>",
          hi: "<ul><li>Update में jargon (\"हमने notifier refactor किया\")। लोगों के लिए क्या बदला यह बताओ: तेज़ list, vendor बदलना आसान। तभी कहो जब सबूत हो।</li><li>सीधा \"no\", या चुपचाप \"yes\" और फिर चूकी हुई तारीख़। Options दो और हर एक की क़ीमत बताओ।</li><li>अच्छा दिखने के लिए असली problem छुपाना, या ऐसा raw detail उड़ेलना जो किसी ने माँगा नहीं। Executives को headline और ask चाहिए; engineers को specifics।</li></ul>",
          hg: "<ul><li>Update mein jargon (\"humne notifier refactor kiya\"). Logon ke liye kya badla yeh batao: tez list, vendor badalna aasaan. Tabhi kaho jab saboot ho.</li><li>Seedha \"no\", ya chupchaap \"yes\" aur phir chooki hui taareekh. Options do aur har ek ki keemat batao.</li><li>Achha dikhne ke liye asli problem chhupana, ya aisa raw detail udelna jo kisi ne maanga nahi. Executives ko headline aur ask chahiye; engineers ko specifics.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use this for \"How do you communicate with non-technical stakeholders?\", \"A stakeholder wants five features by Friday and the team can do three\" and \"How do you manage up?\". Ask first what is driving the date; sometimes it is a launch event, sometimes only a guess, and the answer changes the options. For tech debt, use the same business words: \"this module causes about two incidents a quarter\" (only if true), never \"the code is ugly\".</p>",
          hi: "<p>इसे इन सवालों पर use करो: \"Non-technical stakeholders से बात कैसे करते हो?\", \"Stakeholder को शुक्रवार तक पाँच features चाहिए और team तीन कर सकती है\" और \"ऊपर वालों को कैसे सँभालते हो?\" पहले पूछो कि तारीख़ किस वजह से है; कभी launch event होता है, कभी सिर्फ़ अंदाज़ा, और जवाब से options बदलते हैं। Tech debt के लिए भी यही business भाषा: \"इस module से हर quarter में लगभग दो incidents होते हैं\" (सिर्फ़ सच हो तो), \"code ugly है\" कभी नहीं।</p>",
          hg: "<p>Ise in sawaalon par use karo: \"Non-technical stakeholders se baat kaise karte ho?\", \"Stakeholder ko shukravaar tak paanch features chahiye aur team teen kar sakti hai\" aur \"Upar walon ko kaise sambhaalte ho?\" Pehle poochho ki taareekh kis wajah se hai; kabhi launch event hota hai, kabhi sirf andaaza, aur jawab se options badalte hain. Tech debt ke liye bhi yahi business bhaasha: \"Is module se har quarter mein lagbhag do incidents hote hain\" (sirf sach ho to), \"code ugly hai\" kabhi nahi.</p>"
        },
        exercise: {
          task: {
            en: "<p>Rewrite this jargon update in business words for Meena: <i>\"We refactored the notifier to use dependency injection and removed an N+1 query.\"</i> Write it as a <b>Done</b> line, plus a line for the evidence you would attach.</p>",
            hi: "<p>इस jargon वाले update को Meena के लिए business की भाषा में दोबारा लिखो: <i>\"हमने notifier को dependency injection पर refactor किया और एक N+1 query हटाई।\"</i> इसे <b>Done</b> line की तरह लिखो, साथ में एक line उस सबूत की जो तुम लगाओगे।</p>",
            hg: "<p>Is jargon wale update ko Meena ke liye business ki bhaasha mein dobara likho: <i>\"Humne notifier ko dependency injection par refactor kiya aur ek N+1 query hatayi.\"</i> Ise <b>Done</b> line ki tarah likho, saath mein ek line us saboot ki jo tum lagaoge.</p>"
          },
          hint: {
            en: "<p>Ask: what can the agents or customers do now, or what got cheaper or faster? Do not put a number you have not measured.</p>",
            hi: "<p>पूछो: agents या customers अब क्या कर सकते हैं, या क्या सस्ता या तेज़ हुआ? जो number नापा नहीं, वह मत लिखो।</p>",
            hg: "<p>Poochho: agents ya customers ab kya kar sakte hain, ya kya sasta ya tez hua? Jo number naapa nahi, woh mat likho.</p>"
          },
          solution: {
            caption: {
              en: "Solution: jargon turned into a Done line",
              hi: "हल: jargon से Done line",
              hg: "Solution: jargon se Done line"
            },
            lang: "text",
            check: "none",
            src: "BEFORE (jargon): \"We refactored the notifier to use dependency injection and removed an N+1 query.\"\n\nAFTER (business words):\nDone:     The ticket list now opens faster for agents, and changing the SMS vendor later will be a small change, not a big project.\nEvidence: [add your own measurement here, for example load time before and after; only if you have it]"
          }
        },
        quiz: {
          q: {
            en: "<p>Meena asks for five features by Friday, but the team can finish only three. Which reply is strongest?</p>",
            hi: "<p>Meena शुक्रवार तक पाँच features माँगती है, पर team सिर्फ़ तीन पूरे कर सकती है। कौन-सा जवाब सबसे मज़बूत है?</p>",
            hg: "<p>Meena shukravaar tak paanch features maangti hai, par team sirf teen poore kar sakti hai. Kaunsa jawab sabse mazboot hai?</p>"
          },
          options: [
            {
              en: "\"Yes, we will do all five. I will ask the team to put in some extra hours this week so your launch is not affected.\"",
              hi: "\"हाँ, पाँचों कर देंगे। मैं team से इस हफ़्ते कुछ extra hours लगाने को कहूँगा ताकि आपका launch न रुके।\"",
              hg: "\"Haan, paanchon kar denge. Main team se is hafte kuch extra hours lagaane ko kahunga taaki aapka launch na ruke.\""
            },
            {
              en: "\"I can give you the top three with good quality, or all five with a higher risk of bugs. Which do you prefer, by Wednesday?\"",
              hi: "\"मैं ऊपर के तीन अच्छी quality से दे सकता हूँ, या पाँचों ज़्यादा bugs के risk के साथ। Wednesday तक बताइए, आप कौन-सा चाहेंगी?\"",
              hg: "\"Main upar ke teen achhi quality se de sakta hoon, ya paanchon zyada bugs ke risk ke saath. Wednesday tak bataiye, aap kaunsa chahengi?\""
            },
            {
              en: "\"Okay, we will start with the top three and try to fit in the rest. I will tell you on Thursday if two of them slip.\"",
              hi: "\"ठीक है, ऊपर के तीन से शुरू करेंगे और बाकी भी fit करने की कोशिश करेंगे। दो छूटे तो Thursday को बता दूँगा।\"",
              hg: "\"Theek hai, upar ke teen se shuru karenge aur baaki bhi fit karne ki koshish karenge. Do chhoote to Thursday ko bata dunga.\""
            },
            {
              en: "\"Only three can be done by Friday. I have moved the other two into the next sprint, and I will share the new plan today.\"",
              hi: "\"शुक्रवार तक सिर्फ़ तीन हो सकते हैं। बाकी दो मैंने अगले sprint में डाल दिए हैं, और नया plan आज share करूँगा।\"",
              hg: "\"Shukravaar tak sirf teen ho sakte hain. Baaki do maine agle sprint mein daal diye hain, aur naya plan aaj share karunga.\""
            }
          ],
          answer: 1,
          explain: {
            en: "<p>It is \"yes, if\": two options, the cost of each, and a decision deadline, with the business choice left to Meena. Promising all five with extra hours spends quality and the team's energy without anyone agreeing to it. Moving two features yourself is honest but takes away Meena's choice. \"We will try\" and a Thursday warning turn into a late surprise.</p>",
            hi: "<p>यह \"yes, if\" है: दो options, हर एक की क़ीमत, और फ़ैसले की deadline, और business का फ़ैसला Meena के पास। Extra hours के साथ पाँचों का वादा quality और team की energy खर्च करता है, बिना किसी की सहमति के। ख़ुद दो features हटाना ईमानदार है, पर Meena का choice छीन लेता है। \"कोशिश करेंगे\" और Thursday की चेतावनी आख़िर में surprise बन जाती है।</p>",
            hg: "<p>Yeh \"yes, if\" hai: do options, har ek ki keemat, aur faisle ki deadline, aur business ka faisla Meena ke paas. Extra hours ke saath paanchon ka vaada quality aur team ki energy kharch karta hai, bina kisi ki sahmati ke. Khud do features hataana imaandaar hai, par Meena ka choice chheen leta hai. \"Koshish karenge\" aur Thursday ki warning aakhir mein surprise ban jaati hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Update format: Goal, Done, Next, Risks (with owner), Ask (with a deadline).</li><li>Use business words: time, money, risk, customer impact.</li><li>Say \"yes, if\" with options and the cost of each, never a flat no.</li></ul>",
          hi: "<ul><li>Update format: Goal, Done, Next, Risks (owner के साथ), Ask (deadline के साथ)।</li><li>Business की भाषा: time, पैसा, risk, customer पर असर।</li><li>\"Yes, if\" बोलो, options और हर एक की क़ीमत के साथ, सीधा no कभी नहीं।</li></ul>",
          hg: "<ul><li>Update format: Goal, Done, Next, Risks (owner ke saath), Ask (deadline ke saath).</li><li>Business ki bhaasha: time, paisa, risk, customer par asar.</li><li>\"Yes, if\" bolo, options aur har ek ki keemat ke saath, seedha no kabhi nahi.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A model status update to Meena (replace with your own project)",
            hi: "Meena को model status update (अपना project रखो)",
            hg: "Meena ko model status update (apna project rakho)"
          },
          lang: "text",
          check: "none",
          src: "SUBJECT: CRM status - this week\nTo: Meena (support lead)\n\nGoal:  Customers get an SMS on every ticket status change by the 30th.\nDone:  SMS now works for new and closed tickets. Agents can see a list of failed SMS and resend them.\nNext:  SMS for reopened tickets. Then a weekly report of failed SMS for your team.\nRisks: The SMS vendor's test system is slow. If it stays slow, reopened-ticket SMS may slip by three days. Owner: Ravi. We have asked the vendor for a faster test system.\nAsk:   You asked for five features by the 30th. I can deliver the top three with good quality, or all five with a higher risk of bugs. Please choose by Wednesday so I can hold the date."
        }
      ]
    },
    {
      id: "incident-lead",
      depth: "short",
      title: {
        en: "Incidents: lead the response, then learn without blame",
        hi: "Incidents: response lead करो, फिर बिना दोष के सीखो",
        hg: "Incidents: response lead karo, phir bina dosh ke seekho"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 2 told the Friday SMS incident as a two-minute STAR story. Lesson 6 gave you the update format. This lesson does not retell it; it opens the <b>playbook behind that story</b>: the order of actions, the live update Meena's team saw at 18:55, and the blameless post-mortem on Monday.</p>",
          hi: "<p>पाठ 2 ने Friday वाला SMS incident दो मिनट की STAR story के रूप में सुनाया। पाठ 6 ने update का format दिया। यह पाठ वह story दोबारा नहीं सुनाता; यह उसके पीछे का <b>playbook</b> खोलता है: कदमों का order, 18:55 पर Meena की team को मिला live update, और Monday का blameless post-mortem।</p>",
          hg: "<p>Lesson 2 ne Friday wala SMS incident do minute ki STAR story ke roop mein sunaya. Lesson 6 ne update ka format diya. Yeh lesson woh story dobara nahi sunata; yeh uske peechhe ka <b>playbook</b> kholta hai: kadmon ka order, 18:55 par Meena ki team ko mila live update, aur Monday ka blameless post-mortem.</p>"
        },
        what: {
          en: "<p>To <b>lead an incident</b> means one named <b>incident lead</b> coordinates (investigate, communicate, keep a timeline), <b>mitigates first</b> (roll back, switch off a feature flag, scale up) and finds the root cause later, and updates everyone on a <b>fixed cadence</b>. Afterwards a <b>blameless post-mortem</b> asks how the system allowed it, not who to blame.</p>",
          hi: "<p><b>Incident lead करने</b> का मतलब: एक नाम वाला <b>incident lead</b> coordinate करता है (जाँच, communication, timeline), <b>पहले mitigate</b> करता है (rollback, feature flag बंद, scale up) और root cause बाद में ढूँढता है, और सबको <b>fixed cadence</b> पर update देता है। बाद में <b>blameless post-mortem</b> पूछता है कि system ने यह कैसे होने दिया, किसे दोष दें यह नहीं।</p>",
          hg: "<p><b>Incident lead karne</b> ka matlab: ek naam wala <b>incident lead</b> coordinate karta hai (jaanch, communication, timeline), <b>pehle mitigate</b> karta hai (rollback, feature flag band, scale up) aur root cause baad mein dhoondhta hai, aur sabko <b>fixed cadence</b> par update deta hai. Baad mein <b>blameless post-mortem</b> poochhta hai ki system ne yeh kaise hone diya, kise dosh dein yeh nahi.</p>"
        },
        why: {
          en: "<p>In an incident, customers and support are waiting. Deep debugging while people suffer, silence between updates and a hunt for someone to blame are the three classic mistakes. Interviewers listen for <b>calm, order and learning</b>. Day 21 covers rollback and release practice; here the focus is people and communication.</p>",
          hi: "<p>Incident में customers और support इंतज़ार कर रहे होते हैं। लोग परेशान हों और गहरी debugging चल रही हो, updates के बीच चुप्पी हो, और किसी को दोष देने की खोज हो: ये तीन क्लासिक ग़लतियाँ हैं। Interviewer <b>शांति, क्रम और सीख</b> सुनते हैं। Day 21 में rollback और release practice है; यहाँ ध्यान लोगों और communication पर है।</p>",
          hg: "<p>Incident mein customers aur support intezaar kar rahe hote hain. Log pareshaan hon aur gehri debugging chal rahi ho, updates ke beech chuppi ho, aur kisi ko dosh dene ki khoj ho: ye teen classic galtiyan hain. Interviewer <b>shaanti, kram aur seekh</b> sunte hain. Day 21 mein rollback aur release practice hai; yahan dhyaan logon aur communication par hai.</p>"
        },
        analogy: {
          en: "<p>a train derails near a station. The station master does not inspect the track himself. He <b>takes charge of the whole response</b>: stops other trains, informs control, sends the repair team, and tells passengers what is happening every few minutes. That is the <b>incident commander</b>: a person who coordinates, not the one who fixes everything.</p>",
          hi: "<p>station के पास train derail हो गई। Station master खुद track नहीं जाँचता। वो <b>पूरे response की कमान लेता है</b>: दूसरी trains रोकता है, control को बताता है, repair team भेजता है, और हर कुछ मिनट पर passengers को बताता है कि क्या हो रहा है। यही <b>incident commander</b> है: जो coordinate करता है, सब कुछ खुद fix करने वाला नहीं।</p>",
          hg: "<p>station ke paas train derail ho gayi. Station master khud track nahi jaanchta. Woh <b>poore response ki kamaan leta hai</b>: doosri trains rokta hai, control ko batata hai, repair team bhejta hai, aur har kuch minute par passengers ko batata hai ki kya ho raha hai. Yahi <b>incident commander</b> hai: jo coordinate karta hai, sab kuch khud fix karne wala nahi.</p>"
        },
        lines: [
          {
            code: "Mitigate first, find the root cause later.",
            note: {
              en: "The first rule. Roll back or switch off first so the pain stops; investigate calmly afterwards.",
              hi: "पहला नियम। पहले rollback या बंद करो ताकि तकलीफ़ रुके; जाँच शांति से बाद में।",
              hg: "Pehla niyam. Pehle rollback ya band karo taaki taklif ruke; jaanch shaanti se baad mein."
            }
          },
          {
            code: "Customers such as Asha and Ravi got no SMS on ticket changes from 18:05 to 18:50.",
            note: {
              en: "Impact says who is affected and for how long, in plain words. Do not start with the cause.",
              hi: "Impact सादे शब्दों में बताता है कि कौन affected है और कब से कब तक। कारण से शुरू मत करो।",
              hg: "Impact saade shabdon mein batata hai ki kaun affected hai aur kab se kab tak. Kaaran se shuru mat karo."
            }
          },
          {
            code: "Unknown: Why the change passed testing.",
            note: {
              en: "Say what you do not know. Saying \"unknown\" is more trusted than a confident guess that later turns out wrong.",
              hi: "जो नहीं पता वह बोलो। \"Unknown\" कहना उस confident अंदाज़े से ज़्यादा भरोसेमंद है जो बाद में ग़लत निकले।",
              hg: "Jo nahi pata woh bolo. \"Unknown\" kehna us confident andaaze se zyada bharosemand hai jo baad mein galat nikle."
            }
          },
          {
            code: "Next update: 19:25",
            note: {
              en: "Always say when the next update comes. People stop pinging you when they know the time. Post it even if it says \"no change\".",
              hi: "हमेशा बताओ कि अगला update कब आएगा। समय पता हो तो लोग बार-बार नहीं पूछते। \"No change\" हो तब भी भेजो।",
              hg: "Hamesha batao ki agla update kab aayega. Samay pata ho to log baar-baar nahi poochhte. \"No change\" ho tab bhi bhejo."
            }
          },
          {
            code: "Several causes, not \"human error\".",
            note: {
              en: "Real incidents have several contributing factors. \"Human error\" is where the search should start, not end, and naming one person teaches people to hide mistakes next time.",
              hi: "असली incidents में कई कारण मिलकर काम करते हैं। \"Human error\" पर खोज शुरू होनी चाहिए, ख़त्म नहीं, और एक इंसान का नाम लेना लोगों को अगली बार ग़लती छुपाना सिखाता है।",
              hg: "Asli incidents mein kai kaaran milkar kaam karte hain. \"Human error\" par khoj shuru honi chahiye, khatam nahi, aur ek insaan ka naam lena logon ko agli baar galti chhupana sikhata hai."
            }
          },
          {
            code: "Add the alert - Kiran - due next Friday.",
            note: {
              en: "Every action has an owner and a date. A post-mortem without owned actions is only a document.",
              hi: "हर action का एक owner और एक तारीख़। Owned actions के बिना post-mortem सिर्फ़ एक document है।",
              hg: "Har action ka ek owner aur ek taareekh. Owned actions ke bina post-mortem sirf ek document hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Debugging deeply while customers suffer. Mitigate first: a rollback or a flag switch is not a defeat.</li><li>Going silent. No update is worse than \"no change yet\", because people start to guess.</li><li>Stopping at \"human error\" or one root cause (\"5 whys\" can lead you there). Look for several factors: a missing alert, a risky deploy, unclear ownership.</li></ul>",
          hi: "<ul><li>Customers परेशान हैं और तुम गहरी debugging में लगे हो। पहले mitigate: rollback या flag बंद करना हार नहीं है।</li><li>चुप हो जाना। कोई update न देना \"अभी कोई बदलाव नहीं\" से बुरा है, क्योंकि लोग अंदाज़े लगाने लगते हैं।</li><li>\"Human error\" या एक root cause पर रुक जाना (\"5 whys\" वहाँ पहुँचा सकता है)। कई कारण खोजो: गायब alert, जोखिम भरा deploy, साफ़ ownership का न होना।</li></ul>",
          hg: "<ul><li>Customers pareshaan hain aur tum gehri debugging mein lage ho. Pehle mitigate: rollback ya flag band karna haar nahi hai.</li><li>Chup ho jaana. Koi update na dena \"abhi koi badlaav nahi\" se bura hai, kyunki log andaaze lagaane lagte hain.</li><li>\"Human error\" ya ek root cause par ruk jaana (\"5 whys\" wahan pahuncha sakta hai). Kai kaaran khojo: gaayab alert, jokhim bhara deploy, saaf ownership ka na hona.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use this for \"Walk me through how you lead a production incident\", \"What is a blameless post-mortem?\" and \"Tell me about your worst outage\". Use the full process (lead, cadence, post-mortem) for customer-facing or data-risk incidents. For a small, quick fix a short note is enough; a heavy ceremony for every blip tires the team.</p>",
          hi: "<p>इसे इन सवालों पर use करो: \"Production incident कैसे lead करते हो, step by step बताओ\", \"Blameless post-mortem क्या है?\" और \"अपना सबसे बुरा outage बताओ\"। Customer पर असर या data के जोखिम वाले incidents में पूरा process (lead, cadence, post-mortem) लगाओ। छोटे, जल्दी के fix के लिए छोटा note काफ़ी है; हर छोटी गड़बड़ पर भारी रस्म team को थका देती है।</p>",
          hg: "<p>Ise in sawaalon par use karo: \"Production incident kaise lead karte ho, step by step batao\", \"Blameless post-mortem kya hai?\" aur \"Apna sabse bura outage batao\". Customer par asar ya data ke jokhim wale incidents mein poora process (lead, cadence, post-mortem) lagao. Chhote, jaldi ke fix ke liye chhota note kaafi hai; har chhoti gadbad par bhaari rasm team ko thaka deti hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>The SMS queue is clean and messages are flowing. Write <b>Update 3</b> (status: resolved, 19:25) using the same fields: Impact, Known, Unknown, Doing, Next update. Say that the post-mortem will follow.</p>",
            hi: "<p>SMS queue साफ़ है और messages चल रहे हैं। <b>Update 3</b> लिखो (status: resolved, 19:25), वही fields रखकर: Impact, Known, Unknown, Doing, Next update। बताओ कि post-mortem आगे आएगा।</p>",
            hg: "<p>SMS queue saaf hai aur messages chal rahe hain. <b>Update 3</b> likho (status: resolved, 19:25), wahi fields rakhkar: Impact, Known, Unknown, Doing, Next update. Batao ki post-mortem aage aayega.</p>"
          },
          hint: {
            en: "<p>Resolved does not mean silent. Say how you confirmed recovery (a metric) and when the post-mortem will be shared.</p>",
            hi: "<p>Resolved का मतलब चुप्पी नहीं। बताओ कि recovery कैसे पक्की की (कोई metric) और post-mortem कब share होगा।</p>",
            hg: "<p>Resolved ka matlab chuppi nahi. Batao ki recovery kaise pakki ki (koi metric) aur post-mortem kab share hoga.</p>"
          },
          solution: {
            caption: {
              en: "Solution: the closing update",
              hi: "हल: आख़िरी update",
              hg: "Solution: aakhiri update"
            },
            lang: "text",
            check: "none",
            src: "INCIDENT UPDATE 3 - SMS notifications - status: resolved (19:25)\nImpact:      No customer is affected now. SMS sent per hour is back to normal for 30 minutes.\nKnown:       The old release is running. The missed messages from 18:05 to 18:50 were resent.\nUnknown:     Why the settings change passed testing; we will cover this in the post-mortem.\nDoing:       Kiran keeps watching the queue tonight. Everyone else can stop.\nNext update: This is the last live update. The post-mortem will be shared on Monday."
          }
        },
        quiz: {
          q: {
            en: "<p>SMS has stopped and a release went out an hour ago. As incident lead, which instruction is strongest?</p>",
            hi: "<p>SMS बंद हो गए हैं और एक घंटे पहले release गया था। Incident lead के तौर पर कौन-सी instruction सबसे मज़बूत है?</p>",
            hg: "<p>SMS band ho gaye hain aur ek ghante pehle release gaya tha. Incident lead ke taur par kaunsi instruction sabse mazboot hai?</p>"
          },
          options: [
            {
              en: "\"Let us find the root cause first, so we fix the real problem instead of hiding it with a rollback.\"",
              hi: "\"पहले root cause ढूँढते हैं, ताकि असली problem ठीक हो, rollback से उसे छुपाएँ नहीं।\"",
              hg: "\"Pehle root cause dhoondhte hain, taaki asli problem theek ho, rollback se use chhupaayein nahi.\""
            },
            {
              en: "\"Start the rollback, and tell support only once it is confirmed fixed, so they do not pass on wrong information.\"",
              hi: "\"Rollback शुरू करो, और support को तभी बताना जब fix पक्का हो जाए, ताकि वे ग़लत जानकारी आगे न दें।\"",
              hg: "\"Rollback shuru karo, aur support ko tabhi batana jab fix pakka ho jaaye, taaki woh galat jaankaari aage na dein.\""
            },
            {
              en: "\"Wait for the developer who wrote the release to come online; he knows the change and will find it fastest.\"",
              hi: "\"जिसने release लिखी, उसके online आने का इंतज़ार करो; उसे change पता है और वही सबसे जल्दी ढूँढेगा।\"",
              hg: "\"Jisne release likhi, uske online aane ka intezaar karo; use change pata hai aur wahi sabse jaldi dhoondhega.\""
            },
            {
              en: "\"Roll back the last release now, keep investigating once SMS flows, and I will update support every 30 minutes.\"",
              hi: "\"अभी पिछली release rollback करो, SMS चलने के बाद जाँच जारी रखो, और मैं हर 30 मिनट पर support को update दूँगा।\"",
              hg: "\"Abhi pichhli release rollback karo, SMS chalne ke baad jaanch jaari rakho, aur main har 30 minute par support ko update dunga.\""
            }
          ],
          answer: 3,
          explain: {
            en: "<p>It mitigates first, keeps the investigation going and sets a communication cadence. Hunting the root cause first keeps customers waiting; a rollback stops the pain and the cause is still found afterwards. Waiting for one person wastes time when a rollback needs no expert. Rolling back but staying silent leaves support guessing; an update can say what is known and unknown without being wrong.</p>",
            hi: "<p>यह पहले mitigate करता है, जाँच जारी रखता है और communication की cadence तय करता है। पहले root cause ढूँढने से customers इंतज़ार करते रहते हैं; rollback तकलीफ़ रोकता है और कारण बाद में भी मिल जाता है। एक इंसान का इंतज़ार time खाता है, जबकि rollback के लिए expert ज़रूरी नहीं। Rollback करके चुप रहने से support अंदाज़े लगाता है; update बता सकता है कि क्या पता है और क्या नहीं, बिना ग़लत हुए।</p>",
            hg: "<p>Yeh pehle mitigate karta hai, jaanch jaari rakhta hai aur communication ki cadence tay karta hai. Pehle root cause dhoondhne se customers intezaar karte rehte hain; rollback taklif rokta hai aur kaaran baad mein bhi mil jaata hai. Ek insaan ka intezaar time khata hai, jabki rollback ke liye expert zaroori nahi. Rollback karke chup rehne se support andaaze lagata hai; update bata sakta hai ki kya pata hai aur kya nahi, bina galat hue.</p>"
          }
        },
        recap: {
          en: "<ul><li>One named incident lead, clear roles, a timeline.</li><li>Mitigate first, root cause later; update on a fixed cadence, even \"no change\".</li><li>Blameless post-mortem: several factors, owned actions with dates.</li></ul>",
          hi: "<ul><li>एक नाम वाला incident lead, साफ़ roles, एक timeline।</li><li>पहले mitigate, root cause बाद में; fixed cadence पर update, \"no change\" हो तब भी।</li><li>Blameless post-mortem: कई कारण, तारीख़ों वाले owned actions।</li></ul>",
          hg: "<ul><li>Ek naam wala incident lead, saaf roles, ek timeline.</li><li>Pehle mitigate, root cause baad mein; fixed cadence par update, \"no change\" ho tab bhi.</li><li>Blameless post-mortem: kai kaaran, taareekhon wale owned actions.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A model live update and a short blameless post-mortem",
            hi: "Model live update और छोटा blameless post-mortem",
            hg: "Model live update aur chhota blameless post-mortem"
          },
          lang: "text",
          check: "none",
          src: "HOW I LEAD AN INCIDENT (say it in this order):\n1. Name one incident lead and give roles.   2. Mitigate first, find the root cause later.\n3. Update everyone on a fixed cadence.      4. Confirm recovery with a metric.\n5. Blameless post-mortem with owned actions.\n\nINCIDENT UPDATE 2 - SMS notifications - status: mitigated (18:55)\nImpact:      Customers such as Asha and Ravi got no SMS on ticket changes from 18:05 to 18:50. Tickets and emails worked.\nKnown:       The 17:30 release changed the SMS notifier settings. We rolled back at 18:50 and messages are flowing again.\nUnknown:     Why the change passed testing. Whether we can resend the missed messages.\nDoing:       Kiran watches the SMS queue. Ravi prepares the resend. I am the incident lead.\nNext update: 19:25\n\nPOST-MORTEM (blameless, short)\nDetection:   Support noticed first, from customer calls. We had no alert.\nWent well:   Roles were named in the first ten minutes, and Ravi found the release quickly.\nWent badly:  No alert on SMS sent per hour. Rollback steps were not written down.\nLucky:       It happened early in the evening, while the whole team was online.\nFactors:     Missing alert, no written rollback steps, a settings change reviewed like a small change. Several causes, not \"human error\".\nActions:     Add the alert - Kiran - due next Friday. Write rollback steps for every release - Asha - due next Friday."
        }
      ]
    },
    {
      id: "your-pitch",
      depth: "short",
      title: {
        en: "Your pitch: \"Tell me about yourself\" and \"Why TL?\"",
        hi: "तुम्हारा pitch: \"Tell me about yourself\" और \"Why TL?\"",
        hg: "Tumhara pitch: \"Tell me about yourself\" aur \"Why TL?\""
      },
      lesson: {
        buildsOn: {
          en: "<p>Lessons 1 to 7 gave you the TL picture, a STAR story, ranges, a fair way to settle disagreements, mentoring, stakeholder updates and incident leadership. The pitch is the <b>90-second trailer that points to those stories</b>. It is the first thing you say in almost every interview.</p>",
          hi: "<p>पाठ 1 से 7 ने तुम्हें TL की तस्वीर, STAR story, ranges, disagreement सुलझाने का fair तरीक़ा, mentoring, stakeholder updates और incident leadership दिए। Pitch वह <b>90 सेकंड का trailer है जो इन stories की तरफ़ इशारा करता है</b>। लगभग हर interview में तुम सबसे पहले यही बोलते हो।</p>",
          hg: "<p>Lesson 1 se 7 ne tumhe TL ki tasveer, STAR story, ranges, disagreement suljhane ka fair tareeka, mentoring, stakeholder updates aur incident leadership diye. Pitch woh <b>90 second ka trailer hai jo in stories ki taraf ishaara karta hai</b>. Lagbhag har interview mein tum sabse pehle yahi bolte ho.</p>"
        },
        what: {
          en: "<p>Two short answers. <b>\"Tell me about yourself\"</b> follows Present, Past, Future in 60 to 90 seconds. <b>\"Why should we hire you as TL?\"</b> has three parts: proof of technical depth, proof that you already lead, and fit with what they need, plus one honest growth area.</p>",
          hi: "<p>दो छोटे जवाब। <b>\"Tell me about yourself\"</b> 60 से 90 सेकंड में Present, Past, Future के क्रम में चलता है। <b>\"Why should we hire you as TL?\"</b> के तीन हिस्से हैं: technical depth का proof, इस बात का proof कि तुम पहले से lead करते हो, और उनकी ज़रूरत से मेल, साथ में एक ईमानदार growth area।</p>",
          hg: "<p>Do chhote jawab. <b>\"Tell me about yourself\"</b> 60 se 90 second mein Present, Past, Future ke kram mein chalta hai. <b>\"Why should we hire you as TL?\"</b> ke teen hisse hain: technical depth ka proof, is baat ka proof ki tum pehle se lead karte ho, aur unki zaroorat se mel, saath mein ek imaandaar growth area.</p>"
        },
        why: {
          en: "<p>An unstructured answer becomes a CV reading (\"I know C#, SQL, Azure, ...\"). A pitch picks two or three highlights that point toward leading. It also tells the interviewer which of your stories to ask about, so you choose the ground you fight on.</p>",
          hi: "<p>बिना ढाँचे का जवाब CV पढ़ना बन जाता है (\"मुझे C#, SQL, Azure आता है, ...\")। Pitch दो-तीन highlights चुनता है जो lead करने की तरफ़ इशारा करें। यह interviewer को यह भी बताता है कि तुम्हारी कौन-सी stories के बारे में पूछे, यानी तुम चुनते हो कि किस मैदान पर खेलना है।</p>",
          hg: "<p>Bina dhaanche ka jawab CV padhna ban jaata hai (\"Mujhe C#, SQL, Azure aata hai, ...\"). Pitch do-teen highlights chunta hai jo lead karne ki taraf ishaara karein. Yeh interviewer ko yeh bhi batata hai ki tumhari kaunsi stories ke baare mein poochhe, yaani tum chunte ho ki kis maidaan par khelna hai.</p>"
        },
        analogy: {
          en: "<p>your pitch is the <b>trailer of a film</b>, not the whole film. In 90 seconds it shows the hero, the best scenes and why you should come back to watch. You will say it at the start of almost every interview, so it must be smooth and true.</p>",
          hi: "<p>तुम्हारा pitch <b>film का trailer</b> है, पूरी film नहीं। 90 seconds में ये hero, best scenes और दिखाता है कि तुम्हें वापस क्यों बुलाना चाहिए। तुम इसे लगभग हर interview की शुरुआत में बोलोगे, इसलिए ये smooth और सच होना चाहिए।</p>",
          hg: "<p>tumhara pitch <b>film ka trailer</b> hai, poori film nahi. 90 seconds mein yeh hero, best scenes aur dikhata hai ki tumhe wapas kyon bulana chahiye. Tum ise lagbhag har interview ki shuruaat mein bologe, isliye yeh smooth aur sach hona chahiye.</p>"
        },
        lines: [
          {
            code: "strongest at API design and SQL performance",
            note: {
              en: "Name one or two real strengths. Not a list of ten technologies.",
              hi: "एक-दो असली strengths बताओ। दस technologies की list नहीं।",
              hg: "Ek-do asli strengths batao. Das technologies ki list nahi."
            }
          },
          {
            code: "I helped Kiran grow from stuck on EF Core to owning a feature.",
            note: {
              en: "A highlight that shows growth toward leading, and it points to your mentoring story (lesson 5). The interviewer may ask you about it next.",
              hi: "ऐसा highlight जो lead करने की तरफ़ बढ़ना दिखाए, और तुम्हारी mentoring story (पाठ 5) की तरफ़ इशारा करे। Interviewer अगला सवाल उसी पर पूछ सकता है।",
              hg: "Aisa highlight jo lead karne ki taraf badhna dikhaye, aur tumhari mentoring story (lesson 5) ki taraf ishaara kare. Interviewer agla sawaal usi par pooch sakta hai."
            }
          },
          {
            code: "I already lead without the title",
            note: {
              en: "This one sentence answers \"you have not been a TL\". Follow it with two examples: releases and incidents.",
              hi: "यह एक वाक्य \"तुम TL नहीं रहे\" का जवाब है। इसके बाद दो examples: releases और incidents।",
              hg: "Yeh ek vaakya \"tum TL nahi rahe\" ka jawab hai. Iske baad do examples: releases aur incidents."
            }
          },
          {
            code: "Now I want a Tech Lead role",
            note: {
              en: "The Future part gives a real reason: combine hands-on work with helping a team deliver. Add one specific thing about the company from your research.",
              hi: "Future वाले हिस्से में असली वजह दो: hands-on काम को team की delivery में मदद के साथ जोड़ना। अपनी research से company के बारे में एक ख़ास बात जोड़ो।",
              hg: "Future wale hisse mein asli wajah do: hands-on kaam ko team ki delivery mein madad ke saath jodna. Apni research se company ke baare mein ek khaas baat jodo."
            }
          },
          {
            code: "your biggest challenge is [their challenge]",
            note: {
              en: "Fit means you listened. Use what the job description and the interviewer told you, and say what you would do in the first 30 days.",
              hi: "Fit का मतलब है तुमने सुना। Job description और interviewer ने जो बताया उसे use करो, और पहले 30 दिनों में क्या करोगे यह बोलो।",
              hg: "Fit ka matlab hai tumne suna. Job description aur interviewer ne jo bataya use use karo, aur pehle 30 dinon mein kya karoge yeh bolo."
            }
          },
          {
            code: "I am still growing in [honest area]",
            note: {
              en: "One honest growth area, with a real step. Honesty about growth lands better than pretending to know everything.",
              hi: "एक ईमानदार growth area, एक असली कदम के साथ। सब कुछ आने का दिखावा करने से बढ़ने की ईमानदारी बेहतर लगती है।",
              hg: "Ek imaandaar growth area, ek asli kadam ke saath. Sab kuch aane ka dikhaava karne se badhne ki imaandaari behtar lagti hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Reading your CV aloud: every year, every tool. Pick two or three highlights that point toward leading.</li><li>Reciting a memorised speech in a flat voice, or copying this sample. Brackets must become your own facts; if a detail is not true for you, it should not be in your answer.</li><li>Pretending to know everything. \"I have not done that, but here is how I would approach it\" is a strong TL answer. Speak slowly and pause; \"let me think for a moment\" is fine.</li></ul>",
          hi: "<ul><li>अपना CV ज़ोर से पढ़ना: हर साल, हर tool। दो-तीन highlights चुनो जो lead करने की तरफ़ इशारा करें।</li><li>रटा हुआ भाषण सपाट आवाज़ में बोलना, या इस sample की नक़ल। Brackets की जगह अपने facts रखो; जो detail तुम्हारे लिए सच नहीं, वह तुम्हारे जवाब में नहीं होनी चाहिए।</li><li>सब कुछ आने का दिखावा करना। \"मैंने यह नहीं किया, पर मैं इसे ऐसे करूँगा\" एक मज़बूत TL जवाब है। धीरे बोलो और रुको; \"एक पल सोचने दीजिए\" ठीक है।</li></ul>",
          hg: "<ul><li>Apna CV zor se padhna: har saal, har tool. Do-teen highlights chuno jo lead karne ki taraf ishaara karein.</li><li>Ratta hua bhaashan sapaat awaaz mein bolna, ya is sample ki nakal. Brackets ki jagah apne facts rakho; jo detail tumhare liye sach nahi, woh tumhare jawab mein nahi honi chahiye.</li><li>Sab kuch aane ka dikhaava karna. \"Maine yeh nahi kiya, par main ise aise karunga\" ek mazboot TL jawab hai. Dheere bolo aur ruko; \"ek pal sochne dijiye\" theek hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use the pitch at the start of every round and adapt it: shorter for HR, more technical for engineers. For \"Where do you see yourself in 3 years?\" say something real, such as growing the team, owning a bigger area and still learning. Practise aloud and record yourself; fluency in English grows most from saying the same short stories many times.</p>",
          hi: "<p>हर round की शुरुआत में pitch use करो और उसे ढालो: HR के लिए छोटा, engineers के लिए ज़्यादा technical। \"3 साल में ख़ुद को कहाँ देखते हो?\" पर कुछ असली बोलो, जैसे team बढ़ाना, बड़ा area सँभालना और सीखते रहना। ज़ोर से practise करो और अपनी recording सुनो; English में fluency सबसे ज़्यादा तब आती है जब वही छोटी stories कई बार बोली जाएँ।</p>",
          hg: "<p>Har round ki shuruaat mein pitch use karo aur use dhaalo: HR ke liye chhota, engineers ke liye zyada technical. \"3 saal mein khud ko kahan dekhte ho?\" par kuch asli bolo, jaise team badhana, bada area sambhaalna aur seekhte rehna. Zor se practise karo aur apni recording suno; English mein fluency sabse zyada tab aati hai jab wahi chhoti stories kai baar boli jaayein.</p>"
        },
        exercise: {
          task: {
            en: "<p>Weak answer: \"I have 11 years of experience in .NET, C#, SQL and Azure and many projects. I am hardworking and a team player.\" Rewrite it as a three-sentence pitch with a highlight that shows leading. Keep brackets for the facts only you know.</p>",
            hi: "<p>कमज़ोर जवाब: \"मुझे .NET, C#, SQL और Azure में 11 साल का experience है और कई projects किए हैं। मैं मेहनती और team player हूँ।\" इसे तीन वाक्यों के pitch में बदलो जिसमें lead करना दिखाने वाला एक highlight हो। जो facts सिर्फ़ तुम जानते हो, उनके लिए brackets रखो।</p>",
            hg: "<p>Kamzor jawab: \"Mujhe .NET, C#, SQL aur Azure mein 11 saal ka experience hai aur kai projects kiye hain. Main mehnati aur team player hoon.\" Ise teen vaakyon ke pitch mein badlo jisme lead karna dikhane wala ek highlight ho. Jo facts sirf tum jaante ho, unke liye brackets rakho.</p>"
          },
          hint: {
            en: "<p>Sentence 1: role, years, one strength. Sentence 2: one highlight about helping a person or a team. Sentence 3: why TL now.</p>",
            hi: "<p>वाक्य 1: role, साल, एक strength। वाक्य 2: किसी इंसान या team की मदद का एक highlight। वाक्य 3: अब TL क्यों।</p>",
            hg: "<p>Vaakya 1: role, saal, ek strength. Vaakya 2: kisi insaan ya team ki madad ka ek highlight. Vaakya 3: ab TL kyon.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a three-sentence pitch",
              hi: "हल: तीन वाक्यों का pitch",
              hg: "Solution: teen vaakyon ka pitch"
            },
            lang: "text",
            check: "none",
            src: "\"I am a .NET developer with 11 years in customer-facing systems, strongest at API design and SQL performance.\nRecently I [real highlight: the person or team you helped, and what changed], and I run our releases and lead incidents.\nI now want a Tech Lead role so I can combine hands-on work with helping a team deliver.\""
          }
        },
        quiz: {
          q: {
            en: "<p>\"Why should we hire you as a Tech Lead?\" Which answer is strongest?</p>",
            hi: "<p>\"हम तुम्हें Tech Lead क्यों चुनें?\" कौन-सा जवाब सबसे मज़बूत है?</p>",
            hg: "<p>\"Hum tumhe Tech Lead kyon chunein?\" Kaunsa jawab sabse mazboot hai?</p>"
          },
          options: [
            {
              en: "\"I have 11 years in .NET, C#, SQL, Azure and Angular across many large projects, so I can handle any technical problem your team faces.\"",
              hi: "\"मेरे पास .NET, C#, SQL, Azure और Angular में कई बड़े projects के साथ 11 साल हैं, इसलिए आपकी team की कोई भी technical problem सँभाल सकता हूँ।\"",
              hg: "\"Mere paas .NET, C#, SQL, Azure aur Angular mein kai bade projects ke saath 11 saal hain, isliye aapki team ki koi bhi technical problem sambhaal sakta hoon.\""
            },
            {
              en: "\"I am passionate about leadership, hardworking and a strong team player, and I always put the team first. I feel ready for this step.\"",
              hi: "\"मुझे leadership का passion है, मैं मेहनती और अच्छा team player हूँ, और हमेशा team को आगे रखता हूँ। मुझे लगता है मैं इस कदम के लिए तैयार हूँ।\"",
              hg: "\"Mujhe leadership ka passion hai, main mehnati aur achha team player hoon, aur hamesha team ko aage rakhta hoon. Mujhe lagta hai main is kadam ke liye taiyaar hoon.\""
            },
            {
              en: "\"I already lead our releases and incidents and mentored Kiran to own a feature. You need X, I would start with Y; I am still growing in Z.\"",
              hi: "\"मैं पहले से हमारी releases और incidents lead करता हूँ, और Kiran को mentor करके feature का owner बनाया। आपको X चाहिए, मैं Y से शुरू करूँगा, और Z में अभी सीख रहा हूँ।\"",
              hg: "\"Main pehle se hamari releases aur incidents lead karta hoon, aur Kiran ko mentor karke feature ka owner banaya. Aapko X chahiye, main Y se shuru karunga, aur Z mein abhi seekh raha hoon.\""
            },
            {
              en: "\"I am the strongest coder in my current team, so people already bring me every hard problem. As TL I would take the hardest work myself.\"",
              hi: "\"मैं अपनी अभी की team का सबसे strong coder हूँ, इसलिए लोग हर मुश्किल problem मेरे पास लाते हैं। TL बनकर सबसे मुश्किल काम मैं ख़ुद लूँगा।\"",
              hg: "\"Main apni abhi ki team ka sabse strong coder hoon, isliye log har mushkil problem mere paas laate hain. TL bankar sabse mushkil kaam main khud lunga.\""
            }
          ],
          answer: 2,
          explain: {
            en: "<p>It gives proof that you already lead, fit with their need and an honest growth area, and it points to stories the interviewer can ask about. The \"11 years in .NET, C#, SQL...\" answer is a CV reading with no leadership proof, the \"passionate and hardworking\" answer is adjectives anyone can claim, and the \"strongest coder\" answer is the picture that turns the TL into the team's bottleneck.</p>",
            hi: "<p>इसमें पहले से lead करने का proof है, उनकी ज़रूरत से मेल है और एक ईमानदार growth area, और यह उन stories की तरफ़ इशारा करता है जिन पर interviewer पूछ सकता है। \"11 साल .NET, C#, SQL...\" वाला जवाब CV पढ़ना है जिसमें leadership का proof नहीं, \"passion और मेहनती\" वाले में ऐसे adjectives हैं जो कोई भी बोल सकता है, और \"सबसे strong coder\" वाला जवाब वह तस्वीर है जो TL को team का bottleneck बना देती है।</p>",
            hg: "<p>Isme pehle se lead karne ka proof hai, unki zaroorat se mel hai aur ek imaandaar growth area, aur yeh un stories ki taraf ishaara karta hai jin par interviewer pooch sakta hai. \"11 saal .NET, C#, SQL...\" wala jawab CV padhna hai jisme leadership ka proof nahi, \"passion aur mehnati\" wale mein aise adjectives hain jo koi bhi bol sakta hai, aur \"sabse strong coder\" wala jawab woh tasveer hai jo TL ko team ka bottleneck bana deti hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>\"Tell me about yourself\": Present, Past, Future in 60 to 90 seconds, with two or three highlights.</li><li>\"Why TL?\": technical depth, proof you already lead, fit with their need, one honest growth area.</li><li>Brackets become your own facts; practise aloud, speak slowly, and it is fine to pause.</li></ul>",
          hi: "<ul><li>\"Tell me about yourself\": 60 से 90 सेकंड में Present, Past, Future, दो-तीन highlights के साथ।</li><li>\"Why TL?\": technical depth, पहले से lead करने का proof, उनकी ज़रूरत से मेल, एक ईमानदार growth area।</li><li>Brackets की जगह अपने facts; ज़ोर से practise करो, धीरे बोलो, और रुकना ठीक है।</li></ul>",
          hg: "<ul><li>\"Tell me about yourself\": 60 se 90 second mein Present, Past, Future, do-teen highlights ke saath.</li><li>\"Why TL?\": technical depth, pehle se lead karne ka proof, unki zaroorat se mel, ek imaandaar growth area.</li><li>Brackets ki jagah apne facts; zor se practise karo, dheere bolo, aur rukna theek hai.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A model pitch (the brackets must become your own facts)",
            hi: "Model pitch (brackets की जगह अपने facts रखो)",
            hg: "Model pitch (brackets ki jagah apne facts rakho)"
          },
          lang: "text",
          check: "none",
          src: "QUESTION 1: \"Tell me about yourself.\"\n\nSAMPLE ANSWER - REPLACE THE DETAILS WITH YOUR OWN (about 75 seconds):\n\n\"I am a .NET developer with 11 years in customer-facing systems, strongest at API design and SQL performance. Right now I am the senior developer on a customer-care CRM team of five.\nTwo things I am proud of: I made the ticket-list API faster by fixing its queries, and I helped Kiran grow from stuck on EF Core to owning a feature.\nI already lead without the title: I run our releases and I lead incidents.\nNow I want a Tech Lead role, where I can combine hands-on work with helping a team deliver. [Company] interests me because [one specific reason from your research].\"\n\nQUESTION 2: \"Why should we hire you as a Tech Lead?\"\n\n\"I bring 11 years of .NET depth and real practice leading: releases, incidents and mentoring.\nFrom our conversation, your biggest challenge is [their challenge], and in my first 30 days I would [first action].\nI am still growing in [honest area], and I am working on it by [real step].\""
        }
      ]
    },
    {
      id: "story-bank-and-templates",
      depth: "detailed",
      title: {
        en: "Your story bank and fill-in templates",
        hi: "तुम्हारा story bank और भरने वाले templates",
        hg: "Tumhara story bank aur bharne wale templates"
      },
      body: {
        en: "<p><b>Analogy:</b> a tailor gives you a paper pattern, not a finished shirt. You still cut your own cloth to your own size. The templates below are <b>patterns</b>; the samples are <b>a demonstration shirt on a mannequin</b>. They show the shape and the length, but <b>they are not your history</b>. Never say a sample as if it happened to you.</p>\n<p><b>Story bank</b> (aim for 6 to 8 real stories, each tagged with the questions it can answer):</p>\n<ul>\n<li><b>Conflict</b> with a teammate or another team (technical or personal).</li>\n<li><b>Failure or mistake</b> you owned, with what you changed afterwards.</li>\n<li><b>Influence without authority</b>: you changed a decision without being the boss.</li>\n<li><b>Tough feedback</b> you gave, or received and acted on.</li>\n<li><b>Production incident</b> you led or helped fix.</li>\n<li><b>Deadline pressure</b> and a scope or quality trade-off.</li>\n<li><b>Mentoring</b> someone who grew.</li>\n<li><b>Disagreement with your manager</b> and how it ended.</li>\n<li><b>Tech-debt decision</b>: you chose to pay it down or to delay it.</li>\n<li><b>Hiring or interviewing</b>, if you have done it.</li>\n</ul>\n<p><b>How to use this section (30 to 40 minutes, on paper or in a notes file):</b></p>\n<ul>\n<li>Pick <b>four real moments</b> from your 11 years: an incident, a conflict, a mentoring case, a mistake. Small is fine. A mid-sized, real story beats a dramatic, vague one.</li>\n<li>Fill in the template lines with <b>your</b> facts. Leave a line blank rather than invent a number.</li>\n<li>Say it aloud for 2 minutes and trim. Then write the question tags next to it (for example: conflict story also answers \"influence without authority\").</li>\n<li>Check confidentiality: no client names, no secrets, nothing your NDA forbids. \"A telecom billing system\" is enough.</li>\n</ul>\n<p><b>When to use / when not:</b> use the template for any \"Tell me about a time...\" question and rehearse until the structure is automatic. Do not memorise the sample word for word and do not borrow its details; if a detail is not true for you, it should not be in your answer.</p>",
        hi: "<p><b>Analogy:</b> tailor तुम्हें paper pattern देता है, तैयार shirt नहीं। कपड़ा तुम खुद अपने नाप से काटते हो। नीचे के templates <b>patterns</b> हैं; samples <b>mannequin पर एक demonstration shirt</b> हैं। वो shape और length दिखाते हैं, पर <b>वो तुम्हारी history नहीं हैं</b>। कभी किसी sample को ऐसे मत बोलो जैसे वो तुम्हारे साथ हुआ हो।</p>\n<p><b>Story bank</b> (6 से 8 असली stories का target रखो, हर एक पर लिखो कि वो किन सवालों का answer दे सकती है):</p>\n<ul>\n<li>Teammate या दूसरी team के साथ <b>conflict</b> (technical या personal)।</li>\n<li><b>Failure या mistake</b> जिसकी ज़िम्मेदारी तुमने ली, और बाद में क्या बदला।</li>\n<li><b>Influence without authority</b>: boss बने बिना तुमने decision बदला।</li>\n<li><b>Tough feedback</b> जो तुमने दिया, या मिला और उस पर काम किया।</li>\n<li><b>Production incident</b> जो तुमने lead किया या fix कराने में मदद की।</li>\n<li><b>Deadline pressure</b> और scope या quality का trade-off।</li>\n<li><b>Mentoring</b> किसी को जो grow हुआ।</li>\n<li><b>Manager से disagreement</b> और वो कैसे खत्म हुआ।</li>\n<li><b>Tech-debt decision</b>: तुमने उसे चुकाना चुना या टालना।</li>\n<li><b>Hiring या interviewing</b>, अगर किया है।</li>\n</ul>\n<p><b>इस section को कैसे use करें (30 से 40 मिनट, कागज़ पर या notes file में):</b></p>\n<ul>\n<li>अपने 11 सालों से <b>चार असली moments</b> चुनो: एक incident, एक conflict, एक mentoring case, एक mistake। छोटा भी चलेगा। Mid-size असली story, dramatic पर vague story से बेहतर है।</li>\n<li>Template की lines <b>अपने</b> facts से भरो। Number बनाने से बेहतर है line खाली छोड़ दो।</li>\n<li>2 मिनट ज़ोर से बोलो और छोटा करो। फिर उसके साथ question tags लिखो (जैसे: conflict story \"influence without authority\" का भी answer देती है)।</li>\n<li>Confidentiality check करो: client names नहीं, secrets नहीं, कुछ भी जो NDA मना करे नहीं। \"एक telecom billing system\" काफ़ी है।</li>\n</ul>\n<p><b>When to use / when not:</b> किसी भी \"Tell me about a time...\" सवाल के लिए template use करो और तब तक rehearse करो जब तक structure automatic न हो जाए। Sample को शब्द-दर-शब्द याद मत करो और उसकी details मत उधार लो; अगर कोई detail तुम्हारे लिए सच नहीं है तो वो तुम्हारे answer में नहीं होनी चाहिए।</p>",
        hg: "<p><b>Analogy:</b> tailor tumhe paper pattern deta hai, tayyar shirt nahi. Kapda tum khud apne naap se kaatte ho. Neeche ke templates <b>patterns</b> hain; samples <b>mannequin par ek demonstration shirt</b> hain. Woh shape aur length dikhate hain, par <b>woh tumhari history nahi hain</b>. Kabhi kisi sample ko aise mat bolo jaise woh tumhare saath hua ho.</p>\n<p><b>Story bank</b> (6 se 8 asli stories ka target rakho, har ek par likho ki woh kin sawaalon ka answer de sakti hai):</p>\n<ul>\n<li>Teammate ya doosri team ke saath <b>conflict</b> (technical ya personal).</li>\n<li><b>Failure ya mistake</b> jiski zimmedaari tumne li, aur baad mein kya badla.</li>\n<li><b>Influence without authority</b>: boss bane bina tumne decision badla.</li>\n<li><b>Tough feedback</b> jo tumne diya, ya mila aur us par kaam kiya.</li>\n<li><b>Production incident</b> jo tumne lead kiya ya fix karane mein madad ki.</li>\n<li><b>Deadline pressure</b> aur scope ya quality ka trade-off.</li>\n<li><b>Mentoring</b> kisi ko jo grow hua.</li>\n<li><b>Manager se disagreement</b> aur woh kaise khatam hua.</li>\n<li><b>Tech-debt decision</b>: tumne use chukana chuna ya taalna.</li>\n<li><b>Hiring ya interviewing</b>, agar kiya hai.</li>\n</ul>\n<p><b>Is section ko kaise use karein (30 se 40 minute, kagaz par ya notes file mein):</b></p>\n<ul>\n<li>Apne 11 saalon se <b>chaar asli moments</b> chuno: ek incident, ek conflict, ek mentoring case, ek mistake. Chhota bhi chalega. Mid-size asli story, dramatic par vague story se behtar hai.</li>\n<li>Template ki lines <b>apne</b> facts se bharo. Number banane se behtar hai line khaali chhod do.</li>\n<li>2 minute zor se bolo aur chhota karo. Phir uske bagal mein question tags likho (jaise: conflict story \"influence without authority\" ka bhi answer deti hai).</li>\n<li>Confidentiality check karo: client names nahi, secrets nahi, kuch bhi jo NDA mana kare nahi. \"Ek telecom billing system\" kaafi hai.</li>\n</ul>\n<p><b>When to use / when not:</b> kisi bhi \"Tell me about a time...\" sawaal ke liye template use karo aur tab tak rehearse karo jab tak structure automatic na ho jaaye. Sample ko shabd-ba-shabd yaad mat karo aur uski details udhaar mat lo; agar koi detail tumhare liye sach nahi hai to woh tumhare answer mein nahi honi chahiye.</p>"
      },
      code: [
        {
          lang: "text",
          caption: {
            en: "Template (fill in with your own facts; leave a line empty rather than invent a number)",
            hi: "Template (अपने facts से भरो; number बनाने से बेहतर है line खाली छोड़ो)",
            hg: "Template (apne facts se bharo; number banane se behtar hai line khaali chhodo)"
          },
          src: "QUESTION TAGS: [which questions can this story answer?]\n\nSITUATION (1-2 sentences): [system/product, team size, what was at stake]\nTASK (1 sentence):         [what was YOUR responsibility?]\nACTION (3-5 steps):        1. [what I did first, and why]\n                           2. [what I did next]\n                           3. [who I involved / asked / told]\n                           4. [the hard choice and the trade-off I accepted]\nRESULT (1-2 sentences):    [what changed; a number only if you truly have one]\nLEARNING (1 sentence):     [what I do differently now]\nCONFIDENTIALITY CHECK:     [no client names, no secrets, NDA okay]",
          check: "none"
        },
        {
          lang: "text",
          caption: {
            en: "Sample (invented), failure — replace with your own",
            hi: "Sample (invented), failure — अपने असली example से replace करो",
            hg: "Sample (invented), failure — replace with your own"
          },
          src: "SAMPLE - REPLACE WITH YOUR OWN. Invented for demonstration only.\n\nSITUATION: I estimated a data migration as \"two days\" without asking who owned the legacy data.\nTASK:      I owned the estimate and the delivery date I had promised.\nACTION:    1. When data quality problems appeared, I told my manager on day two, not day five.\n           2. I re-estimated with a range, listed the unknowns, and proposed moving one low-value report out of scope.\n           3. I asked the data owner to join a short daily check.\nRESULT:    The migration finished later than my first promise, but the stakeholders had no surprises.\nLEARNING:  I now give ranges, name assumptions, and check data ownership before I commit to a date.",
          check: "none"
        }
      ]
    },
    {
      id: "estimation-and-forecast",
      depth: "detailed",
      title: {
        en: "Estimation deep dive and velocity forecasting",
        hi: "Estimation की गहराई और velocity से forecast",
        hg: "Estimation ki gehraai aur velocity se forecast"
      },
      body: {
        en: "<p><b>Why estimates are uncertain:</b> requirements change, we find unknown work only after starting (the \"unknown unknowns\"), people are pulled into other things, and humans are usually optimistic about their own tasks (the planning fallacy). Early in a project the range is wide; it narrows as you learn. That is why small, early slices and quick prototypes are worth it.</p>\n<p><b>Story points vs hours vs no estimates:</b></p>\n<ul>\n<li><b>Story points:</b> a relative size (often 1, 2, 3, 5, 8, 13) agreed by the team. Good for comparing work and for velocity; weak if managers convert them into hours or compare teams.</li>\n<li><b>Hours or days:</b> easy to understand and fine for small, known tasks; people tend to treat them as a commitment and be surprised when they are wrong.</li>\n<li><b>No-estimates style:</b> slice work into similar small items and count them (throughput, cycle time). Works when items are small and steady; it still needs a forecast, just from a different measure.</li>\n<li>There is no winner. Choose the one the team will use <b>honestly</b>, and explain how you would adapt to the company's way.</li>\n</ul>\n<p><b>Three-point (PERT) estimate:</b> ask for three numbers: <b>O</b> (optimistic), <b>M</b> (most likely), <b>P</b> (pessimistic). The expected value is <b>(O + 4M + P) / 6</b>, and a rough spread is <b>(P - O) / 6</b>. PERT came from a 1950s US Navy project; today treat it as a simple, honest way to <i>show</i> uncertainty, not as exact maths. For a list of tasks, add the expected values; to combine the spreads add the <i>squares</i> (variances) and take the square root, which assumes tasks are independent (often not quite true).</p>\n<p><b>Forecast with a range:</b> take the last 5 to 8 sprints; use the <b>slowest</b>, <b>average</b> and <b>fastest</b> velocity. Sprints needed = <b>ceiling</b>(remaining points / velocity). Slow velocity gives the late date, fast velocity the early date, and the average gives the \"likely\" one. Whole sprints only: 4.2 sprints means 5. Say all three: \"likely 6 sprints, between 5 and 8\".</p>\n<p><b>Communicate uncertainty well:</b></p>\n<ul>\n<li>Give a <b>range and a confidence</b>, not a single date: \"about 80% sure by end of October\".</li>\n<li>Name the <b>assumptions and risks</b> (team size, scope not growing, the external API).</li>\n<li>Update early when the range changes. A small early warning is better than a big late surprise.</li>\n<li>Do not turn a forecast into a promise, and do not sandbag (hide a lot of padding) either. Be transparent.</li>\n</ul>\n<p><b>When to use / when not:</b> velocity forecasting works when the team and sprint length are stable and the stories are of similar size. It is weak for a brand-new team, a changing team or work that is mostly research. In those cases use shorter checkpoints and re-forecast often.</p>",
        hi: "<p><b>Estimates uncertain क्यों होते हैं:</b> requirements बदलती हैं, अनजाना काम शुरू करने के बाद ही मिलता है (\"unknown unknowns\"), लोग दूसरे कामों में खिंच जाते हैं, और इंसान अपने tasks को लेकर आम तौर पर optimistic होते हैं (planning fallacy)। Project की शुरुआत में range चौड़ी होती है; सीखते-सीखते narrow होती है। इसीलिए छोटे, जल्दी के slices और quick prototypes काम के हैं।</p>\n<p><b>Story points vs hours vs no estimates:</b></p>\n<ul>\n<li><b>Story points:</b> relative size (अक्सर 1, 2, 3, 5, 8, 13) जिस पर team agree करती है। काम compare करने और velocity के लिए अच्छे; कमज़ोर तब जब managers उन्हें hours में बदलें या teams की तुलना करें।</li>\n<li><b>Hours या days:</b> समझने में आसान और छोटे, जाने-पहचाने tasks के लिए ठीक; लोग इन्हें commitment मान लेते हैं और गलत होने पर हैरान होते हैं।</li>\n<li><b>No-estimates style:</b> काम को एक जैसे छोटे items में काटो और गिनो (throughput, cycle time)। तब चलता है जब items छोटे और steady हों; forecast फिर भी चाहिए, बस किसी दूसरे measure से।</li>\n<li>कोई winner नहीं है। वो चुनो जिसे team <b>honestly</b> use करे, और बताओ कि company के तरीके में कैसे adapt करोगे।</li>\n</ul>\n<p><b>Three-point (PERT) estimate:</b> तीन numbers माँगो: <b>O</b> (optimistic), <b>M</b> (most likely), <b>P</b> (pessimistic)। Expected value है <b>(O + 4M + P) / 6</b>, और मोटा spread है <b>(P - O) / 6</b>। PERT 1950 के दशक के एक US Navy project से आया; आज इसे uncertainty <i>दिखाने</i> का simple, honest तरीका मानो, exact maths नहीं। Tasks की list के लिए expected values जोड़ो; spreads को मिलाने के लिए उनके <i>squares</i> (variances) जोड़ो और square root लो, जो मानता है कि tasks independent हैं (अक्सर पूरी तरह सच नहीं)।</p>\n<p><b>Range से forecast:</b> पिछले 5 से 8 sprints लो; <b>सबसे slow</b>, <b>average</b> और <b>सबसे fast</b> velocity use करो। Sprints needed = <b>ceiling</b>(बचे points / velocity)। Slow velocity late date देती है, fast velocity early date, और average \"likely\" वाली। सिर्फ़ पूरे sprints: 4.2 sprints का मतलब 5। तीनों बोलो: \"likely 6 sprints, 5 से 8 के बीच\"।</p>\n<p><b>Uncertainty अच्छे से बताना:</b></p>\n<ul>\n<li>एक date की जगह <b>range और confidence</b> दो: \"लगभग 80% sure कि October के end तक\"।</li>\n<li><b>Assumptions और risks</b> बताओ (team size, scope न बढ़ना, external API)।</li>\n<li>Range बदले तो जल्दी update करो। छोटी early warning, बड़े late surprise से बेहतर है।</li>\n<li>Forecast को promise मत बनाओ, और sandbag भी मत करो (बहुत सारा padding छुपाना)। Transparent रहो।</li>\n</ul>\n<p><b>When to use / when not:</b> velocity forecasting तब चलता है जब team और sprint length stable हों और stories लगभग एक size की हों। Brand-new team, बदलती team या ज़्यादातर research वाले काम में कमज़ोर है। उन cases में छोटे checkpoints रखो और बार-बार re-forecast करो।</p>",
        hg: "<p><b>Estimates uncertain kyon hote hain:</b> requirements badalti hain, anjaana kaam shuru karne ke baad hi milta hai (\"unknown unknowns\"), log doosre kaamon mein khinch jaate hain, aur insaan apne tasks ko lekar aam taur par optimistic hote hain (planning fallacy). Project ki shuruaat mein range chaudi hoti hai; seekhte-seekhte narrow hoti hai. Isiliye chhote, jaldi ke slices aur quick prototypes kaam ke hain.</p>\n<p><b>Story points vs hours vs no estimates:</b></p>\n<ul>\n<li><b>Story points:</b> relative size (aksar 1, 2, 3, 5, 8, 13) jis par team agree karti hai. Kaam compare karne aur velocity ke liye achhe; kamzor tab jab managers unhe hours mein badlein ya teams ki tulna karein.</li>\n<li><b>Hours ya days:</b> samajhne mein aasaan aur chhote, jaane-pehchaane tasks ke liye theek; log inhe commitment maan lete hain aur galat hone par hairaan hote hain.</li>\n<li><b>No-estimates style:</b> kaam ko ek jaise chhote items mein kaato aur gino (throughput, cycle time). Tab chalta hai jab items chhote aur steady hon; forecast phir bhi chahiye, bas kisi doosre measure se.</li>\n<li>Koi winner nahi hai. Woh chuno jise team <b>honestly</b> use kare, aur batao ki company ke tareeke mein kaise adapt karoge.</li>\n</ul>\n<p><b>Three-point (PERT) estimate:</b> teen numbers maango: <b>O</b> (optimistic), <b>M</b> (most likely), <b>P</b> (pessimistic). Expected value hai <b>(O + 4M + P) / 6</b>, aur mota spread hai <b>(P - O) / 6</b>. PERT 1950 ke dashak ke ek US Navy project se aaya; aaj ise uncertainty <i>dikhane</i> ka simple, honest tareeka mano, exact maths nahi. Tasks ki list ke liye expected values jodo; spreads ko milane ke liye unke <i>squares</i> (variances) jodo aur square root lo, jo maanta hai ki tasks independent hain (aksar poori tarah sach nahi).</p>\n<p><b>Range se forecast:</b> pichhle 5 se 8 sprints lo; <b>sabse slow</b>, <b>average</b> aur <b>sabse fast</b> velocity use karo. Sprints needed = <b>ceiling</b>(bache points / velocity). Slow velocity late date deti hai, fast velocity early date, aur average \"likely\" wali. Sirf poore sprints: 4.2 sprints ka matlab 5. Teeno bolo: \"likely 6 sprints, 5 se 8 ke beech\".</p>\n<p><b>Uncertainty achhe se batana:</b></p>\n<ul>\n<li>Ek date ki jagah <b>range aur confidence</b> do: \"lagbhag 80% sure ki October ke end tak\".</li>\n<li><b>Assumptions aur risks</b> batao (team size, scope na badhna, external API).</li>\n<li>Range badle to jaldi update karo. Chhoti early warning, bade late surprise se behtar hai.</li>\n<li>Forecast ko promise mat banao, aur sandbag bhi mat karo (bahut saara padding chhupana). Transparent raho.</li>\n</ul>\n<p><b>When to use / when not:</b> velocity forecasting tab chalta hai jab team aur sprint length stable hon aur stories lagbhag ek size ki hon. Brand-new team, badalti team ya zyaadatar research waale kaam mein kamzor hai. Un cases mein chhote checkpoints rakho aur baar-baar re-forecast karo.</p>"
      },
      code: [
        {
          caption: {
            en: "Sprints needed for 60 remaining points at slow, average and fast velocity (integer ceiling division)",
            hi: "60 बचे points के लिए slow, average और fast velocity पर कितने sprints (integer ceiling division)",
            hg: "60 bache points ke liye slow, average aur fast velocity par kitne sprints (integer ceiling division)"
          },
          src: "int SprintsNeeded(int remaining, int velocity) => (remaining + velocity - 1) / velocity;\n\nint remaining = 60;\nvar velocities = new (string Name, int Points)[] { (\"slow\", 8), (\"average\", 10), (\"fast\", 12) };\n\nforeach (var v in velocities)\n    Console.WriteLine($\"{v.Name} ({v.Points}/sprint): {SprintsNeeded(remaining, v.Points)} sprints\");",
          check: "run",
          expected: "slow (8/sprint): 8 sprints\naverage (10/sprint): 6 sprints\nfast (12/sprint): 5 sprints"
        }
      ]
    },
    {
      id: "review-and-personal-conflict",
      depth: "detailed",
      title: {
        en: "Personal conflict and code review culture",
        hi: "Personal conflict और code review culture",
        hg: "Personal conflict aur code review culture"
      },
      body: {
        en: "<p><b>Personal conflict:</b> talk privately and early, describe the behaviour and its effect (\"in the last two reviews the comments felt personal to me\"), ask for their view, and agree on one small change. Do not talk about someone to others before talking to them.</p>\n<p><b>Code review culture</b> (the full flow and checks are on Day 21; here is the people side):</p>\n<ul>\n<li><b>Tone:</b> comment on the code, not the person; ask questions (\"what happens if the list is empty?\"); give a reason; praise good work too.</li>\n<li><b>Blocking vs non-blocking:</b> mark what must change before merge (bug, security, data loss, broken contract) and label the rest as suggestions or nitpicks (\"nit:\", \"optional:\"). Do not block a merge on style a linter can enforce.</li>\n<li><b>Response time:</b> agree a team norm, for example a first response within one working day, so work does not wait. Small PRs make this possible.</li>\n<li><b>Model the behaviour:</b> as TL, your own PRs get reviewed too, and you accept comments gracefully.</li>\n<li>Handle a long review thread by <b>moving to a quick call</b> and writing the outcome back in the PR.</li>\n</ul>",
        hi: "<p><b>Personal conflict:</b> अकेले में और जल्दी बात करो, behaviour और उसका असर बताओ (\"पिछले दो reviews में comments मुझे personal लगे\"), उनका view पूछो, और एक छोटे बदलाव पर agree करो। किसी से बात करने से पहले दूसरों से उसके बारे में बात मत करो।</p>\n<p><b>Code review culture</b> (पूरा flow और checks Day 21 में हैं; यहाँ लोगों वाला पहलू):</p>\n<ul>\n<li><b>Tone:</b> code पर comment करो, person पर नहीं; सवाल पूछो (\"list खाली हो तो क्या होगा?\"); reason दो; अच्छे काम की तारीफ़ भी करो।</li>\n<li><b>Blocking vs non-blocking:</b> जो merge से पहले बदलना ज़रूरी है उसे mark करो (bug, security, data loss, टूटा contract) और बाकी को suggestions या nitpicks लिखो (\"nit:\", \"optional:\")। जिस style को linter enforce कर सकता है उस पर merge block मत करो।</li>\n<li><b>Response time:</b> team norm agree करो, जैसे एक working day में पहला response, ताकि काम रुके नहीं। छोटे PRs इसे possible बनाते हैं।</li>\n<li><b>खुद model बनो:</b> TL के तौर पर तुम्हारे अपने PRs भी review होते हैं, और तुम comments को graciously लेते हो।</li>\n<li>लंबा review thread हो तो <b>quick call पर जाओ</b> और नतीजा PR में लिख दो।</li>\n</ul>",
        hg: "<p><b>Personal conflict:</b> akele mein aur jaldi baat karo, behaviour aur uska asar batao (\"pichhle do reviews mein comments mujhe personal lage\"), unka view poochho, aur ek chhote badlaav par agree karo. Kisi se baat karne se pehle doosron se uske baare mein baat mat karo.</p>\n<p><b>Code review culture</b> (poora flow aur checks Day 21 mein hain; yahan logon wala pehlu):</p>\n<ul>\n<li><b>Tone:</b> code par comment karo, person par nahi; sawaal poochho (\"list khaali ho to kya hoga?\"); reason do; achhe kaam ki taareef bhi karo.</li>\n<li><b>Blocking vs non-blocking:</b> jo merge se pehle badalna zaroori hai use mark karo (bug, security, data loss, toota contract) aur baaki ko suggestions ya nitpicks likho (\"nit:\", \"optional:\"). Jis style ko linter enforce kar sakta hai us par merge block mat karo.</li>\n<li><b>Response time:</b> team norm agree karo, jaise ek working day mein pehla response, taaki kaam ruke nahi. Chhote PRs ise possible banate hain.</li>\n<li><b>Khud model bano:</b> TL ke taur par tumhare apne PRs bhi review hote hain, aur tum comments ko graciously lete ho.</li>\n<li>Lamba review thread ho to <b>quick call par jao</b> aur nateeja PR mein likh do.</li>\n</ul>"
      },
      code: [
        {
          lang: "text",
          caption: {
            en: "Review comment labels: what blocks the merge and what does not (examples)",
            hi: "Review comment labels: क्या merge रोकता है और क्या नहीं (examples)",
            hg: "Review comment labels: kya merge rokta hai aur kya nahi (examples)"
          },
          src: "blocking: This query concatenates user input into SQL. Can we use a parameter? (Day 26)\nblocking: If the payment call times out we charge twice. Can we add an idempotency key?\nquestion: What happens when the list is empty? I could not see it in the tests.\nsuggestion: A guard clause here would reduce nesting. Happy either way.\nnit: typo in the method name. Not blocking.\npraise: Nice test names, they read like a spec.",
          check: "none"
        }
      ]
    },
    {
      id: "situational-leadership",
      depth: "detailed",
      title: {
        en: "Situational leadership: match your style to the person",
        hi: "Situational leadership: style को इंसान के हिसाब से बदलो",
        hg: "Situational leadership: style ko insaan ke hisaab se badlo"
      },
      body: {
        en: "<p><b>Situational leadership</b> (Hersey and Blanchard) gives a simple map. Match your style to the person's <b>skill and confidence for that task</b>:</p>\n<ul>\n<li><b>New and keen (low skill):</b> <b>directing</b>: clear steps, close check-ins.</li>\n<li><b>Learning but wobbly:</b> <b>coaching</b>: explain why, invite questions, give feedback often.</li>\n<li><b>Skilled but unsure:</b> <b>supporting</b>: ask what they think, encourage, let them decide.</li>\n<li><b>Skilled and confident:</b> <b>delegating</b>: agree on the outcome and step back.</li>\n</ul>\n<p>The same person can need different styles for different tasks. It is a thinking aid, not a science, so use it lightly.</p>",
        hi: "<p><b>Situational leadership</b> (Hersey और Blanchard) एक simple map देती है। अपना style person की <b>उस task के लिए skill और confidence</b> से match करो:</p>\n<ul>\n<li><b>नया और keen (कम skill):</b> <b>directing</b>: साफ़ steps, close check-ins।</li>\n<li><b>सीख रहा है पर डगमगा रहा है:</b> <b>coaching</b>: why समझाओ, सवाल बुलाओ, feedback अक्सर दो।</li>\n<li><b>Skilled पर unsure:</b> <b>supporting</b>: पूछो वो क्या सोचते हैं, encourage करो, decide करने दो।</li>\n<li><b>Skilled और confident:</b> <b>delegating</b>: outcome पर agree करो और पीछे हटो।</li>\n</ul>\n<p>एक ही person को अलग tasks के लिए अलग styles चाहिए हो सकते हैं। ये सोचने का सहारा है, science नहीं, इसलिए हल्के से use करो।</p>",
        hg: "<p><b>Situational leadership</b> (Hersey aur Blanchard) ek simple map deti hai. Apna style person ki <b>us task ke liye skill aur confidence</b> se match karo:</p>\n<ul>\n<li><b>Naya aur keen (kam skill):</b> <b>directing</b>: saaf steps, close check-ins.</li>\n<li><b>Seekh raha hai par dagmaga raha hai:</b> <b>coaching</b>: why samjhao, sawaal bulao, feedback aksar do.</li>\n<li><b>Skilled par unsure:</b> <b>supporting</b>: poochho woh kya sochte hain, encourage karo, decide karne do.</li>\n<li><b>Skilled aur confident:</b> <b>delegating</b>: outcome par agree karo aur peechhe hato.</li>\n</ul>\n<p>Ek hi person ko alag tasks ke liye alag styles chahiye ho sakte hain. Yeh sochne ka sahara hai, science nahi, isliye halke se use karo.</p>"
      }
    },
    {
      id: "managing-up-and-risks",
      depth: "detailed",
      title: {
        en: "Managing up and the risk register",
        hi: "ऊपर वालों को सँभालना और risk register",
        hg: "Upar walon ko sambhaalna aur risk register"
      },
      body: {
        en: "<p><b>Translate technology into business terms:</b></p>\n<ul>\n<li>\"We need to refactor the payment module\" becomes \"<b>Releases in this area take 3 weeks and break often; a 2-week cleanup should bring that down</b>\" (only if you can support the claim).</li>\n<li>Talk in <b>time, money, risk and customer impact</b>. Avoid jargon; if you must use a term, explain it in one line.</li>\n<li>Give a <b>recommendation with options</b>, not only a problem.</li>\n</ul>\n<p><b>Managing up:</b> no surprises. Bring bad news <b>early</b> with a plan. Know what your manager is judged on and help them look prepared. Ask for decisions with a deadline (\"I need a yes or no by Thursday to hold the date\").</p>\n<p><b>Risk register:</b> a small table of what could go wrong: the risk, likelihood, impact, an owner, a mitigation, and a trigger. Review it in team meetings and remove risks when they pass or are fixed. It makes uncertainty visible and shared.</p>\n<p>Other habits: write down decisions and who made them, keep a list of stakeholders and what each cares about, and say \"I don't know yet, I will find out by Wednesday\" instead of guessing.</p>",
        hi: "<p><b>Technology को business की भाषा में translate करो:</b></p>\n<ul>\n<li>\"हमें payment module refactor करना है\" बनता है \"<b>इस area में releases को 3 हफ़्ते लगते हैं और अक्सर टूटते हैं; 2 हफ़्ते की सफ़ाई इसे कम करनी चाहिए</b>\" (सिर्फ़ तब जब claim का support हो)।</li>\n<li><b>Time, money, risk और customer impact</b> में बात करो। Jargon से बचो; कोई term ज़रूरी हो तो एक line में समझाओ।</li>\n<li>सिर्फ़ problem नहीं, <b>options के साथ recommendation</b> दो।</li>\n</ul>\n<p><b>Managing up:</b> कोई surprise नहीं। बुरी खबर <b>जल्दी</b> plan के साथ लाओ। जानो कि तुम्हारा manager किस पर judge होता है और उन्हें prepared दिखने में मदद करो। Decisions deadline के साथ माँगो (\"date पकड़े रखने के लिए गुरुवार तक yes या no चाहिए\")।</p>\n<p><b>Risk register:</b> क्या गलत हो सकता है उसकी छोटी table: risk, likelihood, impact, एक owner, mitigation, और trigger। Team meetings में review करो और risks जब निकल जाएँ या fix हो जाएँ तो हटा दो। ये uncertainty को visible और shared बनाता है।</p>\n<p>और आदतें: decisions और उन्हें किसने लिया लिखो, stakeholders की list रखो कि किसे क्या फ़िक्र है, और अंदाज़ा लगाने की जगह कहो \"अभी पता नहीं, बुधवार तक पता करता हूँ\"।</p>",
        hg: "<p><b>Technology ko business ki bhasha mein translate karo:</b></p>\n<ul>\n<li>\"Hamein payment module refactor karna hai\" banta hai \"<b>Is area mein releases ko 3 hafte lagte hain aur aksar tootte hain; 2 hafte ki safai ise kam karni chahiye</b>\" (sirf tab jab claim ka support ho).</li>\n<li><b>Time, money, risk aur customer impact</b> mein baat karo. Jargon se bacho; koi term zaroori ho to ek line mein samjhao.</li>\n<li>Sirf problem nahi, <b>options ke saath recommendation</b> do.</li>\n</ul>\n<p><b>Managing up:</b> koi surprise nahi. Buri khabar <b>jaldi</b> plan ke saath lao. Jaano ki tumhara manager kis par judge hota hai aur unhe prepared dikhne mein madad karo. Decisions deadline ke saath maango (\"date pakde rakhne ke liye guruvaar tak yes ya no chahiye\").</p>\n<p><b>Risk register:</b> kya galat ho sakta hai uski chhoti table: risk, likelihood, impact, ek owner, mitigation, aur trigger. Team meetings mein review karo aur risks jab nikal jaayein ya fix ho jaayein to hata do. Yeh uncertainty ko visible aur shared banata hai.</p>\n<p>Aur aadatein: decisions aur unhe kisne liya likho, stakeholders ki list rakho ki kise kya fikr hai, aur andaaza lagane ki jagah kaho \"abhi pata nahi, budhvaar tak pata karta hoon\".</p>"
      },
      code: [
        {
          caption: {
            en: "One row of a risk register",
            hi: "Risk register की एक row",
            hg: "Risk register ki ek row"
          },
          lang: "text",
          check: "none",
          src: "Risk:        [what could go wrong]\nLikelihood:  low | medium | high      Impact: low | medium | high\nOwner:       [name]\nMitigation:  [what we do now to reduce it]\nTrigger:     [the sign that it is happening]  Status: open | closed"
        }
      ]
    },
    {
      id: "postmortem-and-incident-numbers",
      depth: "detailed",
      title: {
        en: "Blameless post-mortems and incident numbers",
        hi: "Blameless post-mortems और incident के numbers",
        hg: "Blameless post-mortems aur incident ke numbers"
      },
      body: {
        en: "<p><b>Where \"blameless\" comes from:</b> the practice is described in Google's SRE book and was championed by John Allspaw at Etsy. One habit the lesson did not cover: share the post-mortem beyond your own team, so other teams can learn from it too.</p>\n<p><b>Incident numbers:</b> <b>MTTA</b> (mean time to acknowledge) is the average time from the start of an incident, or its first alert, until a person takes ownership of it. <b>MTTR</b> is the average time until service is back; people expand the R as recover, restore, repair or resolve, so say which one you mean. Look at the trend over many incidents: one incident is a story, not a statistic. In the SMS incident from lessons 2 and 7, someone took ownership after 7 minutes and SMS was flowing again after 45.</p>\n<p><b>Going past one chain:</b> \"5 whys\" picks one answer at each step, so it gives a single line of causes. At each step also ask \"what else made this possible?\", and sort the factors into groups such as detection, deploy process, tooling and ownership. Each group gets its own action.</p>",
        hi: "<p><b>\"Blameless\" कहाँ से आया:</b> यह तरीक़ा Google की SRE book में बताया गया है और Etsy में John Allspaw ने इसे आगे बढ़ाया। एक आदत जो पाठ में नहीं थी: post-mortem अपनी team से बाहर भी share करो, ताकि दूसरी teams भी सीखें।</p>\n<p><b>Incident के numbers:</b> <b>MTTA</b> (mean time to acknowledge) incident शुरू होने, या पहले alert, से लेकर किसी इंसान के उसे अपने हाथ में लेने तक का average time है। <b>MTTR</b> service वापस चालू होने तक का average time है; R को लोग recover, restore, repair या resolve पढ़ते हैं, इसलिए बताओ कि तुम्हारा मतलब कौन-सा है। कई incidents का trend देखो: एक incident एक story है, statistic नहीं। पाठ 2 और 7 वाले SMS incident में 7 मिनट बाद किसी ने ownership ली और 45 मिनट बाद SMS फिर चलने लगे।</p>\n<p><b>एक chain से आगे जाना:</b> \"5 whys\" हर कदम पर एक ही जवाब चुनता है, इसलिए कारणों की एक ही line मिलती है। हर कदम पर यह भी पूछो \"और किस चीज़ ने इसे होने दिया?\", और factors को groups में बाँटो, जैसे detection, deploy process, tooling और ownership। हर group का अपना action होता है।</p>",
        hg: "<p><b>\"Blameless\" kahan se aaya:</b> yeh tareeka Google ki SRE book mein bataya gaya hai aur Etsy mein John Allspaw ne ise aage badhaya. Ek aadat jo lesson mein nahi thi: post-mortem apni team se baahar bhi share karo, taaki doosri teams bhi seekhein.</p>\n<p><b>Incident ke numbers:</b> <b>MTTA</b> (mean time to acknowledge) incident shuru hone, ya pehle alert, se lekar kisi insaan ke use apne haath mein lene tak ka average time hai. <b>MTTR</b> service wapas chaalu hone tak ka average time hai; R ko log recover, restore, repair ya resolve padhte hain, isliye batao ki tumhara matlab kaunsa hai. Kai incidents ka trend dekho: ek incident ek story hai, statistic nahi. Lesson 2 aur 7 wale SMS incident mein 7 minute baad kisi ne ownership li aur 45 minute baad SMS phir chalne lage.</p>\n<p><b>Ek chain se aage jaana:</b> \"5 whys\" har kadam par ek hi jawab chunta hai, isliye kaaranon ki ek hi line milti hai. Har kadam par yeh bhi poochho \"aur kis cheez ne ise hone diya?\", aur factors ko groups mein baanto, jaise detection, deploy process, tooling aur ownership. Har group ka apna action hota hai.</p>"
      },
      code: [
        {
          caption: {
            en: "The SMS incident in numbers (fixed timestamps, no clock): time to acknowledge and time to recover",
            hi: "SMS incident numbers में (fixed timestamps, clock नहीं): acknowledge का time और recover का time",
            hg: "SMS incident numbers mein (fixed timestamps, clock nahi): acknowledge ka time aur recover ka time"
          },
          check: "run",
          src: "var started = new DateTime(2026, 3, 13, 18, 5, 0);       // Friday evening: SMS stops\nvar acknowledged = new DateTime(2026, 3, 13, 18, 12, 0); // the incident lead takes ownership\nvar recovered = new DateTime(2026, 3, 13, 18, 50, 0);    // rollback done, SMS flowing again\n\nConsole.WriteLine(\"Time to acknowledge: \" + (acknowledged - started).TotalMinutes + \" min\");\nConsole.WriteLine(\"Time to recover:     \" + (recovered - started).TotalMinutes + \" min\");",
          expected: "Time to acknowledge: 7 min\nTime to recover:     45 min"
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
        en: "<p><b>Analogy:</b> a leaking tap in the kitchen. Fixing it today takes ten minutes and a washer. Ignoring it for a year wastes water, rots the cabinet and costs a plumber and a carpenter. Tech debt is the same: <b>a shortcut that gives speed now and charges interest later</b>. Some debt is a smart loan (a deliberate shortcut to hit a launch, with a plan to repay); some is just a mess.</p>\n<p><b>Step 1, make it visible.</b> Keep a <b>tech-debt list</b> in the backlog: what it is, where, what it costs (incidents, slow releases, onboarding pain), and a rough size. Debt nobody can see cannot be prioritised. Attach evidence: bugs, DORA numbers (Day 21), time lost.</p>\n<p><b>Step 2, prioritise by cost of delay and risk.</b> Ask: what does it cost <b>each month we wait</b>, how risky is it (security, data loss, outage), and how big is the fix? A simple method is <b>WSJF, Weighted Shortest Job First</b>, from Don Reinertsen's cost-of-delay work, popularised by the SAFe framework: <b>score = cost of delay / job size</b>. Cost of delay is often scored as value plus time criticality plus risk reduction. Higher score first. It is a conversation tool, not an oracle: the numbers are rough team judgements.</p>\n<p><b>Step 3, pay it down in a sustainable way.</b></p>\n<ul>\n<li><b>Boy-scout rule:</b> leave the code a little better when you touch it.</li>\n<li><b>Attach to features:</b> do the refactor that makes the next feature easy, and tell the product owner why.</li>\n<li><b>Reserve capacity:</b> a fixed share such as <b>20% of the sprint</b> is one popular option. It is a heuristic, not a law; a team drowning in debt may need more for a while, a healthy team less.</li>\n<li><b>Dedicated project:</b> for big items (migrating off an old framework, Day 22), with a clear business case.</li>\n</ul>\n<p><b>Selling it to the business:</b> use their language: \"<b>This module causes about two incidents a quarter and slows every feature there by a week.</b>\" Do not say \"the code is ugly\". And be honest about trade-offs: sometimes the right decision is to <b>not</b> fix it.</p>\n<p><b>When to use / when not:</b> pay down debt that is on the path of upcoming work, risky, or causing real pain. Leave stable, rarely changed code alone even if it is ugly; rewriting it has a cost and a risk with no payoff. Avoid giant \"big rewrite\" plans without incremental steps.</p>",
        hi: "<p><b>Analogy:</b> kitchen में टपकता नल। आज fix करने में दस मिनट और एक washer लगता है। साल भर ignore करो तो पानी बर्बाद होता है, cabinet सड़ता है और plumber और carpenter का खर्चा आता है। Tech debt ऐसा ही है: <b>एक shortcut जो अभी speed देता है और बाद में interest वसूलता है</b>। कुछ debt समझदारी का loan है (launch पकड़ने के लिए सोचा-समझा shortcut, चुकाने के plan के साथ); कुछ सिर्फ़ गंदगी है।</p>\n<p><b>Step 1, visible बनाओ।</b> Backlog में <b>tech-debt list</b> रखो: क्या है, कहाँ है, कितना महँगा है (incidents, slow releases, onboarding की तकलीफ़), और मोटा size। जो debt कोई देख नहीं सकता उसे prioritise नहीं कर सकते। Evidence जोड़ो: bugs, DORA numbers (Day 21), खोया हुआ time।</p>\n<p><b>Step 2, cost of delay और risk से prioritise करो।</b> पूछो: <b>हर महीने इंतज़ार का</b> क्या खर्चा है, कितना risky है (security, data loss, outage), और fix कितना बड़ा है? एक simple तरीका <b>WSJF, Weighted Shortest Job First</b> है, Don Reinertsen के cost-of-delay काम से, जिसे SAFe framework ने popular किया: <b>score = cost of delay / job size</b>। Cost of delay को अक्सर value + time criticality + risk reduction से score करते हैं। ऊँचा score पहले। ये बातचीत का tool है, oracle नहीं: numbers team के मोटे judgements हैं।</p>\n<p><b>Step 3, sustainable तरीके से चुकाओ।</b></p>\n<ul>\n<li><b>Boy-scout rule:</b> code छुओ तो उसे थोड़ा बेहतर छोड़ो।</li>\n<li><b>Features से जोड़ो:</b> वो refactor करो जो अगला feature आसान बनाए, और product owner को बताओ क्यों।</li>\n<li><b>Capacity reserve करो:</b> <b>sprint का 20%</b> जैसा fixed हिस्सा एक popular option है। ये heuristic है, कानून नहीं; debt में डूबी team को कुछ समय के लिए ज़्यादा चाहिए, healthy team को कम।</li>\n<li><b>Dedicated project:</b> बड़े items के लिए (पुराने framework से migrate करना, Day 22), साफ़ business case के साथ।</li>\n</ul>\n<p><b>Business को बेचना:</b> उनकी भाषा में बोलो: \"<b>ये module quarter में लगभग दो incidents करता है और वहाँ हर feature को एक हफ़्ता slow करता है।</b>\" \"code ugly है\" मत कहो। और trade-offs के बारे में honest रहो: कभी सही फ़ैसला उसे <b>न</b> सुधारना होता है।</p>\n<p><b>When to use / when not:</b> वो debt चुकाओ जो आने वाले काम के रास्ते में हो, risky हो, या असली तकलीफ़ दे रहा हो। Stable, कम बदलने वाले code को ugly होने पर भी छोड़ दो; उसे rewrite करने में cost और risk है और फ़ायदा नहीं। Incremental steps के बिना बड़े \"big rewrite\" plans से बचो।</p>",
        hg: "<p><b>Analogy:</b> kitchen mein tapakta nal. Aaj fix karne mein das minute aur ek washer lagta hai. Saal bhar ignore karo to paani barbaad hota hai, cabinet sadta hai aur plumber aur carpenter ka kharcha aata hai. Tech debt aisa hi hai: <b>ek shortcut jo abhi speed deta hai aur baad mein interest vasoolta hai</b>. Kuch debt samajhdaari ka loan hai (launch pakadne ke liye socha-samjha shortcut, chukane ke plan ke saath); kuch sirf gandagi hai.</p>\n<p><b>Step 1, visible banao.</b> Backlog mein <b>tech-debt list</b> rakho: kya hai, kahan hai, kitna mehnga hai (incidents, slow releases, onboarding ki taklif), aur mota size. Jo debt koi dekh nahi sakta use prioritise nahi kar sakte. Evidence jodo: bugs, DORA numbers (Day 21), khoya hua time.</p>\n<p><b>Step 2, cost of delay aur risk se prioritise karo.</b> Poochho: <b>har mahine intezaar ka</b> kya kharcha hai, kitna risky hai (security, data loss, outage), aur fix kitna bada hai? Ek simple tareeka <b>WSJF, Weighted Shortest Job First</b> hai, Don Reinertsen ke cost-of-delay kaam se, jise SAFe framework ne popular kiya: <b>score = cost of delay / job size</b>. Cost of delay ko aksar value + time criticality + risk reduction se score karte hain. Ooncha score pehle. Yeh baatcheet ka tool hai, oracle nahi: numbers team ke mote judgements hain.</p>\n<p><b>Step 3, sustainable tareeke se chukao.</b></p>\n<ul>\n<li><b>Boy-scout rule:</b> code chhuo to use thoda behtar chhodo.</li>\n<li><b>Features se jodo:</b> woh refactor karo jo agla feature aasaan banaye, aur product owner ko batao kyon.</li>\n<li><b>Capacity reserve karo:</b> <b>sprint ka 20%</b> jaisa fixed hissa ek popular option hai. Yeh heuristic hai, kanoon nahi; debt mein doobi team ko kuch time ke liye zyada chahiye, healthy team ko kam.</li>\n<li><b>Dedicated project:</b> bade items ke liye (purane framework se migrate karna, Day 22), saaf business case ke saath.</li>\n</ul>\n<p><b>Business ko bechna:</b> unki bhasha mein bolo: \"<b>Yeh module quarter mein lagbhag do incidents karta hai aur wahan har feature ko ek hafta slow karta hai.</b>\" \"code ugly hai\" mat kaho. Aur trade-offs ke baare mein honest raho: kabhi sahi faisla use <b>na</b> sudharna hota hai.</p>\n<p><b>When to use / when not:</b> woh debt chukao jo aane waale kaam ke raaste mein ho, risky ho, ya asli taklif de raha ho. Stable, kam badalne waale code ko ugly hone par bhi chhod do; use rewrite karne mein cost aur risk hai aur faayda nahi. Incremental steps ke bina bade \"big rewrite\" plans se bacho.</p>"
      },
      code: [
        {
          caption: {
            en: "WSJF ranking: cost of delay divided by job size, highest score first (tiny example)",
            hi: "WSJF ranking: cost of delay को job size से भाग, ऊँचा score पहले (छोटा example)",
            hg: "WSJF ranking: cost of delay ko job size se bhaag, ooncha score pehle (chhota example)"
          },
          src: "using System.Globalization;\n\nvar items = new (string Name, int CostOfDelay, int Size)[]\n{\n    (\"Flaky payment tests\", 8, 2),\n    (\"Upgrade old framework\", 13, 5),\n    (\"Add missing alert\", 5, 1),\n};\n\nforeach (var i in items.OrderByDescending(x => (double)x.CostOfDelay / x.Size))\n    Console.WriteLine(i.Name + \": \" + ((double)i.CostOfDelay / i.Size).ToString(\"0.0\", CultureInfo.InvariantCulture));",
          check: "run",
          expected: "Add missing alert: 5.0\nFlaky payment tests: 4.0\nUpgrade old framework: 2.6"
        },
        {
          lang: "text",
          caption: {
            en: "A tech-debt ticket that a business person can understand (template)",
            hi: "Tech-debt ticket जिसे business person समझ सके (template)",
            hg: "Tech-debt ticket jise business person samajh sake (template)"
          },
          src: "TITLE:       [plain name, e.g. \"Order module: slow and fragile releases\"]\nPAIN TODAY:  [incidents per quarter, release time, bugs - evidence, with link]\nCOST OF WAIT:[what happens if we delay another quarter?]\nRISK:        [security / data loss / outage / hiring - or \"low\"]\nFIX SIZE:    [S / M / L and what we would do]\nOPTIONS:     [do now | attach to feature X | defer - with the trade-off]\nRECOMMENDATION: [one line]",
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
        en: "<p><b>Analogy:</b> choosing a new cook for your restaurant. You do not only ask \"can you cook?\"; you let them <b>cook one dish</b>, watch how they handle a busy kitchen, and check whether they will get along with the team. Interviewing others as a TL is the same: structured, fair and about real work.</p>\n<p><b>Interviewing others (brief):</b></p>\n<ul>\n<li><b>Agree the role and the signals first:</b> what must a person show to succeed here? Use the same questions and a scoring guide for each candidate, so you compare fairly.</li>\n<li><b>Prefer real work:</b> read some code together, discuss a design, pair for 30 minutes. Puzzle tricks and trivia tell you little.</li>\n<li><b>Be kind and clear:</b> candidates are nervous (you were too). Explain the format, give hints when they are stuck, leave time for their questions.</li>\n<li><b>Watch bias:</b> do not hire a copy of yourself. Write notes <b>before</b> the debrief, and decide on evidence, not on \"gut feeling\".</li>\n<li><b>Hire for growth and team fit as well as skill</b>; skills can be taught, honesty and curiosity are harder.</li>\n</ul>\n<p><b>Questions to ask the interviewer</b> (pick 3 or 4; they also show your TL thinking):</p>\n<ul>\n<li>\"What does a TL spend a typical week on here, roughly hands-on versus leading?\"</li>\n<li>\"What are the biggest technical or delivery problems the team has right now?\"</li>\n<li>\"How are technical decisions made and written down?\" (Do they use ADRs?)</li>\n<li>\"How do you handle on-call and incidents? Is there a blameless review?\"</li>\n<li>\"What does success look like for this role after 6 months?\"</li>\n<li>\"How does the team deal with tech debt and testing?\"</li>\n</ul>\n<p><b>Salary and notice period (no numbers here, keep it professional):</b></p>\n<ul>\n<li>Do your <b>market research</b> beforehand (similar roles in your city, level and domain) and decide your range and your minimum.</li>\n<li>In India, recruiters usually ask your <b>current CTC, expected CTC and notice period</b> in the first call, and sometimes ask for payslips later. Prepare your answers before that call.</li>\n<li>If they insist on a number: state your current CTC honestly and give your expected CTC as a <b>researched range for TL roles</b>, not just a percentage hike on your current pay.</li>\n<li>If asked early, you can say: \"I would like to understand the role and scope first; I expect a package in line with TL roles in this market. What range have you budgeted?\" Let them name a range first when you can.</li>\n<li>Think about the <b>whole package</b>: fixed pay, variable, benefits, learning budget, role scope, growth path, not only one number.</li>\n<li><b>Notice period:</b> state it honestly. 60 to 90 days is a common norm in India, and a <b>buyout</b> (early release by agreement) is sometimes an option; mention it only after you have checked your own contract. Do not promise what you cannot deliver.</li>\n<li>Be polite and consistent; never lie about your current pay or about other offers. Companies can and do verify.</li>\n</ul>\n<p><b>When to use / when not:</b> ask your questions at the end, and make them specific to the company. Do not ask about salary in the first minutes of a technical round; wait for the HR or offer stage unless they ask. Avoid questions you could answer from the website.</p>",
        hi: "<p><b>Analogy:</b> अपने restaurant के लिए नया cook चुनना। तुम सिर्फ़ \"cook कर सकते हो?\" नहीं पूछते; <b>एक dish बनवाते हो</b>, देखते हो कि busy kitchen कैसे संभालते हैं, और कि team के साथ निभेगी या नहीं। TL के तौर पर दूसरों को interview करना भी ऐसा ही है: structured, fair और असली काम के बारे में।</p>\n<p><b>दूसरों को interview करना (short में):</b></p>\n<ul>\n<li><b>पहले role और signals agree करो:</b> यहाँ सफल होने के लिए क्या दिखाना ज़रूरी है? हर candidate के लिए वही सवाल और scoring guide use करो, ताकि fair तुलना हो।</li>\n<li><b>असली काम को prefer करो:</b> साथ में कुछ code पढ़ो, design discuss करो, 30 मिनट pair करो। Puzzle tricks और trivia से कम पता चलता है।</li>\n<li><b>Kind और clear रहो:</b> candidates nervous होते हैं (तुम भी थे)। Format समझाओ, अटके तो hints दो, उनके सवालों के लिए time रखो।</li>\n<li><b>Bias पर नज़र रखो:</b> अपनी copy को hire मत करो। Debrief से <b>पहले</b> notes लिखो, और \"gut feeling\" पर नहीं, evidence पर decide करो।</li>\n<li><b>Skill के साथ growth और team fit के लिए भी hire करो</b>; skills सिखाई जा सकती हैं, honesty और curiosity मुश्किल हैं।</li>\n</ul>\n<p><b>Interviewer से पूछने के सवाल</b> (3 या 4 चुनो; ये तुम्हारी TL thinking भी दिखाते हैं):</p>\n<ul>\n<li>\"यहाँ TL का typical हफ़्ता किस पर जाता है, लगभग hands-on बनाम leading?\"</li>\n<li>\"Team की अभी सबसे बड़ी technical या delivery problems क्या हैं?\"</li>\n<li>\"Technical decisions कैसे लिए और लिखे जाते हैं?\" (क्या ADRs use होते हैं?)</li>\n<li>\"On-call और incidents कैसे handle होते हैं? क्या blameless review होता है?\"</li>\n<li>\"6 महीने बाद इस role में success कैसी दिखती है?\"</li>\n<li>\"Team tech debt और testing को कैसे handle करती है?\"</li>\n</ul>\n<p><b>Salary और notice period (यहाँ numbers नहीं, professional रखो):</b></p>\n<ul>\n<li>पहले <b>market research</b> करो (अपने शहर, level और domain में similar roles) और अपनी range और minimum तय करो।</li>\n<li>India में recruiters आम तौर पर पहली call में तुम्हारा <b>current CTC, expected CTC और notice period</b> पूछते हैं, और कभी-कभी बाद में payslips भी माँगते हैं। उस call से पहले अपने answers तैयार रखो।</li>\n<li>वो number पर अड़ जाएँ तो: current CTC honestly बताओ और expected CTC को <b>TL roles की researched range</b> की तरह दो, सिर्फ़ current pay पर कुछ percent hike की तरह नहीं।</li>\n<li>जल्दी पूछा जाए तो कह सकते हो: \"मैं पहले role और scope समझना चाहूँगा; मैं इस market में TL roles के हिसाब का package expect करता हूँ। आपने कौन सी range budget की है?\" जब हो सके, range पहले उन्हें बोलने दो।</li>\n<li><b>पूरे package</b> के बारे में सोचो: fixed pay, variable, benefits, learning budget, role scope, growth path, सिर्फ़ एक number नहीं।</li>\n<li><b>Notice period:</b> honestly बताओ। India में 60 से 90 दिन आम norm है, और <b>buyout</b> (agreement से early release) कभी-कभी option होता है; इसे तभी बोलो जब अपना contract check कर लिया हो। जो deliver नहीं कर सकते उसका promise मत करो।</li>\n<li>Polite और consistent रहो; अपनी current pay या दूसरे offers के बारे में कभी झूठ मत बोलो। Companies verify कर सकती हैं और करती हैं।</li>\n</ul>\n<p><b>When to use / when not:</b> अपने सवाल end में पूछो, और उन्हें company के लिए specific रखो। Technical round के पहले मिनटों में salary मत पूछो; HR या offer stage का इंतज़ार करो जब तक वो खुद न पूछें। ऐसे सवाल मत पूछो जिनका जवाब website से मिल जाए।</p>",
        hg: "<p><b>Analogy:</b> apne restaurant ke liye naya cook chunna. Tum sirf \"cook kar sakte ho?\" nahi poochhte; <b>ek dish banwate ho</b>, dekhte ho ki busy kitchen kaise sambhalte hain, aur ki team ke saath nibhegi ya nahi. TL ke taur par doosron ko interview karna bhi aisa hi hai: structured, fair aur asli kaam ke baare mein.</p>\n<p><b>Doosron ko interview karna (short mein):</b></p>\n<ul>\n<li><b>Pehle role aur signals agree karo:</b> yahan safal hone ke liye kya dikhana zaroori hai? Har candidate ke liye wahi sawaal aur scoring guide use karo, taaki fair tulna ho.</li>\n<li><b>Asli kaam ko prefer karo:</b> saath mein kuch code padho, design discuss karo, 30 minute pair karo. Puzzle tricks aur trivia se kam pata chalta hai.</li>\n<li><b>Kind aur clear raho:</b> candidates nervous hote hain (tum bhi the). Format samjhao, atke to hints do, unke sawaalon ke liye time rakho.</li>\n<li><b>Bias par nazar rakho:</b> apni copy ko hire mat karo. Debrief se <b>pehle</b> notes likho, aur \"gut feeling\" par nahi, evidence par decide karo.</li>\n<li><b>Skill ke saath growth aur team fit ke liye bhi hire karo</b>; skills sikhayi ja sakti hain, honesty aur curiosity mushkil hain.</li>\n</ul>\n<p><b>Interviewer se poochne ke sawaal</b> (3 ya 4 chuno; yeh tumhari TL thinking bhi dikhate hain):</p>\n<ul>\n<li>\"Yahan TL ka typical hafta kis par jaata hai, lagbhag hands-on banaam leading?\"</li>\n<li>\"Team ki abhi sabse badi technical ya delivery problems kya hain?\"</li>\n<li>\"Technical decisions kaise liye aur likhe jaate hain?\" (Kya ADRs use hote hain?)</li>\n<li>\"On-call aur incidents kaise handle hote hain? Kya blameless review hota hai?\"</li>\n<li>\"6 mahine baad is role mein success kaisi dikhti hai?\"</li>\n<li>\"Team tech debt aur testing ko kaise handle karti hai?\"</li>\n</ul>\n<p><b>Salary aur notice period (yahan numbers nahi, professional rakho):</b></p>\n<ul>\n<li>Pehle <b>market research</b> karo (apne shehar, level aur domain mein similar roles) aur apni range aur minimum tay karo.</li>\n<li>India mein recruiters aam taur par pehli call mein tumhara <b>current CTC, expected CTC aur notice period</b> poochhte hain, aur kabhi-kabhi baad mein payslips bhi maangte hain. Us call se pehle apne answers tayyar rakho.</li>\n<li>Woh number par ad jaayein to: current CTC honestly batao aur expected CTC ko <b>TL roles ki researched range</b> ki tarah do, sirf current pay par kuch percent hike ki tarah nahi.</li>\n<li>Jaldi poochha jaaye to keh sakte ho: \"Main pehle role aur scope samajhna chahunga; main is market mein TL roles ke hisaab ka package expect karta hoon. Aapne kaun si range budget ki hai?\" Jab ho sake, range pehle unhe bolne do.</li>\n<li><b>Poore package</b> ke baare mein socho: fixed pay, variable, benefits, learning budget, role scope, growth path, sirf ek number nahi.</li>\n<li><b>Notice period:</b> honestly batao. India mein 60 se 90 din aam norm hai, aur <b>buyout</b> (agreement se early release) kabhi-kabhi option hota hai; ise tabhi bolo jab apna contract check kar liya ho. Jo deliver nahi kar sakte uska promise mat karo.</li>\n<li>Polite aur consistent raho; apni current pay ya doosre offers ke baare mein kabhi jhooth mat bolo. Companies verify kar sakti hain aur karti hain.</li>\n</ul>\n<p><b>When to use / when not:</b> apne sawaal end mein poochho, aur unhe company ke liye specific rakho. Technical round ke pehle minuton mein salary mat poochho; HR ya offer stage ka intezaar karo jab tak woh khud na poochhein. Aise sawaal mat poochho jinka jawab website se mil jaaye.</p>"
      },
      code: [
        {
          lang: "text",
          caption: {
            en: "Interviewer scorecard (structured; same questions for every candidate) and your pre-interview questions list (templates)",
            hi: "Interviewer scorecard (structured; हर candidate के लिए वही सवाल) और interview से पहले की सवालों की list (templates)",
            hg: "Interviewer scorecard (structured; har candidate ke liye wahi sawaal) aur interview se pehle ki sawaalon ki list (templates)"
          },
          src: "SCORECARD - [candidate] - [role]\nSignal 1: [e.g. designs a simple API sensibly]    evidence: [what they said/did]   1-4\nSignal 2: [e.g. reviews code kindly and clearly]  evidence: [...]                  1-4\nSignal 3: [e.g. owns a mistake and learns]        evidence: [...]                  1-4\nConcerns: [specific, evidence-based]     Questions I still have: [...]\nNotes written BEFORE the debrief: yes / no\n\nMY QUESTIONS FOR THEM (choose 3-4)\n1. [what does a TL do in a typical week here?]\n2. [what is the hardest delivery problem right now?]\n3. [how are technical decisions made and recorded?]\n4. [what does success look like at 6 months?]",
          check: "none"
        }
      ]
    }
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
        en: "<ul>\n<li>Say it is context-dependent: a common split is about 50/50 hands-on and leading. Name what you would ask the company: \"What does the TL own here?\"</li>\n<li>Senior developer: owns hard tasks and own quality. TL: also unblocks people, shapes design, talks to stakeholders.</li>\n<li>Follow-up: \"Will you still code?\" Yes, enough to review designs and code credibly, but your output is the team's output.</li>\n</ul>",
        hi: "<ul>\n<li>बोलो कि ये context पर depend करता है: आम split लगभग 50/50 hands-on और leading है। बताओ कि तुम company से क्या पूछोगे: \"यहाँ TL किसका owner है?\"</li>\n<li>Senior developer: मुश्किल tasks और अपनी quality का owner। TL: लोगों को unblock भी करता है, design shape करता है, stakeholders से बात करता है।</li>\n<li>Follow-up: \"क्या तुम अब भी code करोगे?\" हाँ, इतना कि designs और code credibly review कर सको, पर तुम्हारा output team का output है।</li>\n</ul>",
        hg: "<ul>\n<li>Bolo ki yeh context par depend karta hai: aam split lagbhag 50/50 hands-on aur leading hai. Batao ki tum company se kya poochoge: \"Yahan TL kiska owner hai?\"</li>\n<li>Senior developer: mushkil tasks aur apni quality ka owner. TL: logon ko unblock bhi karta hai, design shape karta hai, stakeholders se baat karta hai.</li>\n<li>Follow-up: \"Kya tum ab bhi code karoge?\" Haan, itna ki designs aur code credibly review kar sako, par tumhara output team ka output hai.</li>\n</ul>"
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
        en: "<ul>\n<li>Spend about 60% of the time on Action, and say what <i>you</i> did. Add a Learning line for failures (STAR-L).</li>\n<li>Tag each story with the questions it answers (conflict, failure, influence, mentoring, incident, deadline).</li>\n<li>Follow-up: \"What if you have no story for that question?\" Use the closest real one and say so honestly, or describe how you <i>would</i> act, clearly marked as hypothetical.</li>\n</ul>",
        hi: "<ul>\n<li>लगभग 60% time Action पर लगाओ, और बोलो कि <i>तुमने</i> क्या किया। Failure के लिए Learning line जोड़ो (STAR-L)।</li>\n<li>हर story पर tag लगाओ कि वो किन सवालों का answer देती है (conflict, failure, influence, mentoring, incident, deadline)।</li>\n<li>Follow-up: \"अगर उस सवाल की कोई story न हो?\" सबसे नज़दीकी असली story लो और honestly बताओ, या बताओ कि तुम <i>कैसे</i> करते, साफ़ hypothetical कहकर।</li>\n</ul>",
        hg: "<ul>\n<li>Lagbhag 60% time Action par lagao, aur bolo ki <i>tumne</i> kya kiya. Failure ke liye Learning line jodo (STAR-L).</li>\n<li>Har story par tag lagao ki woh kin sawaalon ka answer deti hai (conflict, failure, influence, mentoring, incident, deadline).</li>\n<li>Follow-up: \"Agar us sawaal ki koi story na ho?\" Sabse nazdeeki asli story lo aur honestly batao, ya batao ki tum <i>kaise</i> karte, saaf hypothetical kehkar.</li>\n</ul>"
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
        en: "<ul>\n<li>Link to Day 15 (ADRs). Keep it about the options, not the people; make sure everyone feels heard before deciding.</li>\n<li>If it stays stuck, escalate the decision with both options and a recommendation, not the person.</li>\n<li>Follow-up: \"What if you were the one who lost?\" I commit, and revisit when the agreed trigger or date arrives.</li>\n</ul>",
        hi: "<ul>\n<li>Day 15 (ADRs) से जोड़ो। बात options की रखो, लोगों की नहीं; फ़ैसले से पहले पक्का करो कि सबको सुना गया।</li>\n<li>अटका रहे तो decision को दोनों options और recommendation के साथ escalate करो, person को नहीं।</li>\n<li>Follow-up: \"अगर हारने वाले तुम हो?\" मैं commit करता हूँ, और agreed trigger या date आने पर फिर देखता हूँ।</li>\n</ul>",
        hg: "<ul>\n<li>Day 15 (ADRs) se jodo. Baat options ki rakho, logon ki nahi; faisle se pehle pakka karo ki sabko suna gaya.</li>\n<li>Atka rahe to decision ko dono options aur recommendation ke saath escalate karo, person ko nahi.</li>\n<li>Follow-up: \"Agar harne wale tum ho?\" Main commit karta hoon, aur agreed trigger ya date aane par phir dekhta hoon.</li>\n</ul>"
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
        en: "<ul>\n<li>PERT: (O + 4M + P) / 6. Example: \"about 5 days, best 2, worst 12; the risk is the third-party API.\"</li>\n<li>Slice early, run a spike for the biggest unknown, and re-forecast every sprint as the range narrows.</li>\n<li>Follow-up: \"Do you pad estimates?\" I show assumptions and risks openly instead of hiding padding.</li>\n</ul>",
        hi: "<ul>\n<li>PERT: (O + 4M + P) / 6। Example: \"लगभग 5 दिन, best 2, worst 12; risk third-party API है।\"</li>\n<li>जल्दी slice करो, सबसे बड़े unknown के लिए spike चलाओ, और range narrow होने पर हर sprint re-forecast करो।</li>\n<li>Follow-up: \"क्या तुम estimates में padding डालते हो?\" मैं padding छुपाने की जगह assumptions और risks खुलकर दिखाता हूँ।</li>\n</ul>",
        hg: "<ul>\n<li>PERT: (O + 4M + P) / 6. Example: \"lagbhag 5 din, best 2, worst 12; risk third-party API hai.\"</li>\n<li>Jaldi slice karo, sabse bade unknown ke liye spike chalao, aur range narrow hone par har sprint re-forecast karo.</li>\n<li>Follow-up: \"Kya tum estimates mein padding daalte ho?\" Main padding chhupane ki jagah assumptions aur risks khulkar dikhata hoon.</li>\n</ul>"
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
        en: "<ul>\n<li>\"Yes, if...\" instead of a flat \"no\". Levers: cut or phase scope, move the date, add people (limited help for late work), or accept a named risk.</li>\n<li>Bring data: velocity range, the remaining backlog, the risks. Offer a recommendation.</li>\n<li>Follow-up: \"They insist on all five.\" Write the risk down, escalate through the agreed path, and plan a visible fallback.</li>\n</ul>",
        hi: "<ul>\n<li>सीधे \"no\" की जगह \"Yes, if...\". Levers: scope cut या phase, date आगे, लोग जोड़ना (late काम में सीमित मदद), या named risk accept करना।</li>\n<li>Data लाओ: velocity range, बचा backlog, risks। एक recommendation दो।</li>\n<li>Follow-up: \"वो पाँचों पर अड़े हैं।\" Risk लिख लो, agreed रास्ते से escalate करो, और एक visible fallback plan बनाओ।</li>\n</ul>",
        hg: "<ul>\n<li>Seedhe \"no\" ki jagah \"Yes, if...\". Levers: scope cut ya phase, date aage, log jodna (late kaam mein seemit madad), ya named risk accept karna.</li>\n<li>Data lao: velocity range, bacha backlog, risks. Ek recommendation do.</li>\n<li>Follow-up: \"Woh paanchon par ade hain.\" Risk likh lo, agreed raaste se escalate karo, aur ek visible fallback plan banao.</li>\n</ul>"
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
        en: "<ul>\n<li>Roles: commander, investigator, communicator, scribe. Keep a timeline. Rollback and flags are on Day 21.</li>\n<li>Updates say what we know, what we do not, and the next update time, even when it is \"no change\".</li>\n<li>Follow-up: \"Who should be the IC?\" Whoever is best at coordinating, not necessarily the best debugger or the most senior.</li>\n</ul>",
        hi: "<ul>\n<li>Roles: commander, investigator, communicator, scribe। Timeline रखो। Rollback और flags Day 21 में हैं।</li>\n<li>Updates में बताओ क्या पता है, क्या नहीं, और अगला update कब, चाहे \"कोई बदलाव नहीं\" हो।</li>\n<li>Follow-up: \"IC कौन होना चाहिए?\" जो coordinate करने में सबसे अच्छा हो, ज़रूरी नहीं कि सबसे अच्छा debugger या सबसे senior हो।</li>\n</ul>",
        hg: "<ul>\n<li>Roles: commander, investigator, communicator, scribe. Timeline rakho. Rollback aur flags Day 21 mein hain.</li>\n<li>Updates mein batao kya pata hai, kya nahi, aur agla update kab, chahe \"koi badlaav nahi\" ho.</li>\n<li>Follow-up: \"IC kaun hona chahiye?\" Jo coordinate karne mein sabse achha ho, zaroori nahi ki sabse achha debugger ya sabse senior ho.</li>\n</ul>"
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
        en: "<ul>\n<li>Contents: summary, impact, timeline, what went well and badly, contributing factors, actions with owners and dates.</li>\n<li>Caution on 5 whys: it can stop at one root cause or \"human error\". Look for several contributing factors.</li>\n<li>Follow-up: \"What if someone was careless?\" Still look at the system first (review, alerts, training); handle real conduct issues privately, not in the post-mortem.</li>\n</ul>",
        hi: "<ul>\n<li>Contents: summary, impact, timeline, क्या अच्छा और बुरा गया, contributing factors, owners और dates के साथ actions।</li>\n<li>5 whys पर सावधानी: ये एक root cause या \"human error\" पर रुक सकता है। कई contributing factors ढूँढो।</li>\n<li>Follow-up: \"अगर किसी ने लापरवाही की हो?\" फिर भी पहले system देखो (review, alerts, training); असली conduct issues अकेले में handle करो, post-mortem में नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>Contents: summary, impact, timeline, kya achha aur bura gaya, contributing factors, owners aur dates ke saath actions.</li>\n<li>5 whys par saavdhaani: yeh ek root cause ya \"human error\" par ruk sakta hai. Kai contributing factors dhundho.</li>\n<li>Follow-up: \"Agar kisi ne laparwaahi ki ho?\" Phir bhi pehle system dekho (review, alerts, training); asli conduct issues akele mein handle karo, post-mortem mein nahi.</li>\n</ul>"
      }
    },
    {
      id: "why-hire-me-as-tl",
      depth: "short",
      q: "Why should we hire you as our Tech Lead?",
      answer: "I bring eleven years of .NET depth and I already lead through [reviews / mentoring / incidents: pick what is true]. I will help your team ship reliably, and I am open about skills I am still growing.",
      meaning: {
        hi: "मेरे पास .NET की ग्यारह साल की depth है और मैं [reviews / mentoring / incidents: जो सच है वही चुनो] के ज़रिए पहले से lead करता हूँ। मैं आपकी team को reliably ship कराने में मदद करूँगा, और जो skills अभी सीख रहा हूँ उनके बारे में open हूँ।",
        hg: "Mere paas .NET ki gyarah saal ki depth hai aur main [reviews / mentoring / incidents: jo sach hai wahi chuno] ke zariye pehle se lead karta hoon. Main aapki team ko reliably ship karane mein madad karunga, aur jo skills abhi seekh raha hoon unke baare mein open hoon."
      },
      explain: {
        en: "<ul>\n<li>Structure: technical depth, proof you already lead (one concrete example you can truly back up), fit with their needs. Use the template in the pitch section and your own facts.</li>\n<li>Add one honest growth area with what you are doing about it.</li>\n<li>Follow-up: \"What will you do in your first 30 days?\" Listen, learn the system and people, fix one small pain point, agree on goals with your manager.</li>\n</ul>",
        hi: "<ul>\n<li>Structure: technical depth, proof कि तुम पहले से lead करते हो (एक concrete example जिसे सच में support कर सको), उनकी ज़रूरत से fit। Pitch section का template और अपने facts use करो।</li>\n<li>एक honest growth area जोड़ो और बताओ कि उस पर क्या कर रहे हो।</li>\n<li>Follow-up: \"पहले 30 दिनों में क्या करोगे?\" सुनो, system और लोगों को सीखो, एक छोटा pain point fix करो, manager के साथ goals agree करो।</li>\n</ul>",
        hg: "<ul>\n<li>Structure: technical depth, proof ki tum pehle se lead karte ho (ek concrete example jise sach mein support kar sako), unki zaroorat se fit. Pitch section ka template aur apne facts use karo.</li>\n<li>Ek honest growth area jodo aur batao ki us par kya kar rahe ho.</li>\n<li>Follow-up: \"Pehle 30 dinon mein kya karoge?\" Suno, system aur logon ko seekho, ek chhota pain point fix karo, manager ke saath goals agree karo.</li>\n</ul>"
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
        en: "<ul>\n<li>The full review flow, checks and response-time norms are on Day 21; this is the people side. Do not block merges on style a linter can enforce.</li>\n<li>Follow-up: \"Your own PR gets harsh comments.\" Say thanks, ask what is behind them, and fix or discuss calmly. Leaders model how to receive feedback.</li>\n</ul>",
        hi: "<ul>\n<li>पूरा review flow, checks और response-time norms Day 21 में हैं; ये लोगों वाला पहलू है। जिस style को linter enforce कर सकता है उस पर merge block मत करो।</li>\n<li>Follow-up: \"तुम्हारे अपने PR पर कड़े comments आएँ।\" Thanks बोलो, पूछो कि पीछे क्या है, और शांति से fix या discuss करो। Leaders दिखाते हैं कि feedback कैसे लेते हैं।</li>\n</ul>",
        hg: "<ul>\n<li>Poora review flow, checks aur response-time norms Day 21 mein hain; yeh logon wala pehlu hai. Jis style ko linter enforce kar sakta hai us par merge block mat karo.</li>\n<li>Follow-up: \"Tumhare apne PR par kade comments aayein.\" Thanks bolo, poochho ki peechhe kya hai, aur shaanti se fix ya discuss karo. Leaders dikhate hain ki feedback kaise lete hain.</li>\n</ul>"
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
        en: "<ul>\n<li>Points can be abused (compared across teams, converted to hours). Hours can feel like promises. No-estimates teams slice items small and count them.</li>\n<li>Follow-up: \"Your company uses hours; will you adapt?\" Yes, and I would still show ranges and assumptions.</li>\n</ul>",
        hi: "<ul>\n<li>Points का misuse हो सकता है (teams के बीच compare, hours में convert)। Hours promise जैसे लग सकते हैं। No-estimates teams items छोटे काटकर गिनती हैं।</li>\n<li>Follow-up: \"तुम्हारी company hours use करती है; adapt करोगे?\" हाँ, और मैं फिर भी ranges और assumptions दिखाऊँगा।</li>\n</ul>",
        hg: "<ul>\n<li>Points ka misuse ho sakta hai (teams ke beech compare, hours mein convert). Hours promise jaise lag sakte hain. No-estimates teams items chhote kaatkar ginti hain.</li>\n<li>Follow-up: \"Tumhari company hours use karti hai; adapt karoge?\" Haan, aur main phir bhi ranges aur assumptions dikhaunga.</li>\n</ul>"
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
        en: "<ul>\n<li>Example: 60 points left, velocity 8, 10, 12 gives 8, 6 and 5 sprints. Say \"likely 6, between 5 and 8\".</li>\n<li>Weak when the team or sprint length changes. Spreads of several tasks combine by adding variances, assuming independence.</li>\n<li>Follow-up: \"Why divide by 6?\" It treats O to P as roughly six standard deviations wide; it is a convention, not a law.</li>\n</ul>",
        hi: "<ul>\n<li>Example: 60 points बचे, velocity 8, 10, 12 से 8, 6 और 5 sprints। बोलो \"likely 6, 5 से 8 के बीच\"।</li>\n<li>Team या sprint length बदले तो कमज़ोर। कई tasks के spreads variances जोड़कर मिलते हैं, independence मानकर।</li>\n<li>Follow-up: \"6 से भाग क्यों?\" ये O से P को लगभग छह standard deviations चौड़ा मानता है; ये convention है, कानून नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>Example: 60 points bache, velocity 8, 10, 12 se 8, 6 aur 5 sprints. Bolo \"likely 6, 5 se 8 ke beech\".</li>\n<li>Team ya sprint length badle to kamzor. Kai tasks ke spreads variances jodkar milte hain, independence maankar.</li>\n<li>Follow-up: \"6 se bhaag kyon?\" Yeh O se P ko lagbhag chhe standard deviations chaudha maanta hai; yeh convention hai, kanoon nahi.</li>\n</ul>"
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
        en: "<ul>\n<li>Use the situational view: new or unsure people need directing and coaching; skilled people need space. Ask \"what have you tried?\".</li>\n<li>Protect the deadline separately: re-plan scope or reassign the risky part, and tell stakeholders early.</li>\n<li>Follow-up: \"Isn't it faster if you just do it?\" Today yes, but it costs you every week afterwards and the person does not grow.</li>\n</ul>",
        hi: "<ul>\n<li>Situational view use करो: नए या unsure लोगों को directing और coaching चाहिए; skilled लोगों को space। पूछो \"तुमने क्या try किया?\"।</li>\n<li>Deadline को अलग से बचाओ: scope re-plan करो या risky हिस्सा reassign करो, और stakeholders को जल्दी बताओ।</li>\n<li>Follow-up: \"क्या तुम खुद कर लो तो तेज़ नहीं?\" आज हाँ, पर बाद में हर हफ़्ते महँगा पड़ता है और person grow नहीं होता।</li>\n</ul>",
        hg: "<ul>\n<li>Situational view use karo: naye ya unsure logon ko directing aur coaching chahiye; skilled logon ko space. Poochho \"tumne kya try kiya?\".</li>\n<li>Deadline ko alag se bachao: scope re-plan karo ya risky hissa reassign karo, aur stakeholders ko jaldi batao.</li>\n<li>Follow-up: \"Kya tum khud kar lo to tez nahi?\" Aaj haan, par baad mein har hafte mehnga padta hai aur person grow nahi hota.</li>\n</ul>"
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
        en: "<ul>\n<li>Causes vary: unclear goals, skill gap, personal difficulty, wrong role. Fix the cause, not just the symptom. Many companies keep formal performance steps with the manager and HR; a TL usually supports, not decides.</li>\n<li>Follow-up: \"What if it is affecting the team?\" Protect the team's delivery, keep the conversation respectful, and keep your manager informed.</li>\n</ul>",
        hi: "<ul>\n<li>कारण अलग हो सकते हैं: unclear goals, skill gap, personal मुश्किल, गलत role। Symptom नहीं, कारण ठीक करो। कई companies में formal performance steps manager और HR के पास होते हैं; TL आम तौर पर support करता है, decide नहीं।</li>\n<li>Follow-up: \"अगर team पर असर पड़ रहा हो?\" Team की delivery बचाओ, बात respectful रखो, और manager को informed रखो।</li>\n</ul>",
        hg: "<ul>\n<li>Kaaran alag ho sakte hain: unclear goals, skill gap, personal mushkil, galat role. Symptom nahi, kaaran theek karo. Kai companies mein formal performance steps manager aur HR ke paas hote hain; TL aam taur par support karta hai, decide nahi.</li>\n<li>Follow-up: \"Agar team par asar pad raha ho?\" Team ki delivery bachao, baat respectful rakho, aur manager ko informed rakho.</li>\n</ul>"
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
        en: "<ul>\n<li>Business wording: incidents per quarter, release delay, onboarding time. Attach refactors to upcoming features when possible.</li>\n<li>Follow-up: \"Management refuses any time for debt.\" Start with the most painful item, show before and after numbers, and use the boy-scout rule meanwhile.</li>\n</ul>",
        hi: "<ul>\n<li>Business की भाषा: incidents per quarter, release delay, onboarding time। हो सके तो refactors को आने वाले features से जोड़ो।</li>\n<li>Follow-up: \"Management debt के लिए कोई time नहीं देता।\" सबसे ज़्यादा pain देने वाले item से शुरू करो, before और after numbers दिखाओ, और तब तक boy-scout rule use करो।</li>\n</ul>",
        hg: "<ul>\n<li>Business ki bhasha: incidents per quarter, release delay, onboarding time. Ho sake to refactors ko aane waale features se jodo.</li>\n<li>Follow-up: \"Management debt ke liye koi time nahi deta.\" Sabse zyada pain dene wale item se shuru karo, before aur after numbers dikhao, aur tab tak boy-scout rule use karo.</li>\n</ul>"
      }
    },
    {
      id: "disagree-with-manager",
      depth: "detailed",
      q: "Tell me about a time you disagreed with your manager.",
      answer: "On [project] I disagreed with my manager about [topic]. I raised it privately with data and an alternative, listened to their constraints, and [result]. I escalate mainly for safety or ethics.",
      meaning: {
        hi: "[Project] पर [topic] को लेकर मैं manager से सहमत नहीं था। मैंने अकेले में data और alternative के साथ बात उठाई, उनकी constraints सुनीं, और [result]। Escalate मुख्य रूप से safety या ethics पर करता हूँ।",
        hg: "[Project] par [topic] ko lekar main manager se sehmat nahi tha. Maine akele mein data aur alternative ke saath baat uthayi, unki constraints sunin, aur [result]. Escalate mukhya roop se safety ya ethics par karta hoon."
      },
      explain: {
        en: "<ul>\n<li>Use your own real story with the STAR template (a labelled sample is in the story section; do not borrow its details). Show respect, evidence, and a good ending, even if you lost.</li>\n<li>Follow-up: \"Were you right?\" Be modest: describe what happened and what you learned, even if the result was mixed.</li>\n</ul>",
        hi: "<ul>\n<li>अपनी असली story STAR template के साथ बोलो (labelled sample story वाले section में है; उसकी details उधार मत लो)। Respect, evidence और अच्छा ending दिखाओ, चाहे हार गए हो।</li>\n<li>Follow-up: \"क्या तुम सही थे?\" Modest रहो: बताओ क्या हुआ और क्या सीखा, चाहे result mixed हो।</li>\n</ul>",
        hg: "<ul>\n<li>Apni asli story STAR template ke saath bolo (labelled sample story waale section mein hai; uski details udhaar mat lo). Respect, evidence aur achha ending dikhao, chahe haar gaye ho.</li>\n<li>Follow-up: \"Kya tum sahi the?\" Modest raho: batao kya hua aur kya seekha, chahe result mixed ho.</li>\n</ul>"
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
        en: "<ul>\n<li>Present, Past, Future in about 60 to 90 seconds. Fill the brackets with your own facts from the template in the pitch section; the sample there is only a shape.</li>\n<li>Follow-up: \"Why are you leaving your current company?\" Talk about what you want to grow into, not complaints about the old place.</li>\n</ul>",
        hi: "<ul>\n<li>Present, Past, Future लगभग 60 से 90 seconds में। Brackets को pitch section के template से अपने facts से भरो; वहाँ का sample सिर्फ़ shape है।</li>\n<li>Follow-up: \"अभी की company क्यों छोड़ रहे हो?\" बताओ कि तुम किसमें grow करना चाहते हो, पुरानी जगह की शिकायतें नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>Present, Past, Future lagbhag 60 se 90 seconds mein. Brackets ko pitch section ke template se apne facts se bharo; wahan ka sample sirf shape hai.</li>\n<li>Follow-up: \"Abhi ki company kyon chhod rahe ho?\" Batao ki tum kisme grow karna chahte ho, purani jagah ki shikayatein nahi.</li>\n</ul>"
      }
    },
    {
      id: "first-time-tl",
      depth: "detailed",
      q: "You have not been an official Tech Lead before. Why will you succeed?",
      answer: "I have led without the title through [your real examples: reviews / mentoring / releases / incidents]. I am clear about what I am still learning, and I will ask for feedback early.",
      meaning: {
        hi: "मैं title के बिना [तुम्हारे असली examples: reviews / mentoring / releases / incidents] के ज़रिए lead कर चुका हूँ। मुझे साफ़ पता है कि मैं क्या सीख रहा हूँ, और मैं feedback जल्दी माँगूँगा।",
        hg: "Main title ke bina [tumhare asli examples: reviews / mentoring / releases / incidents] ke zariye lead kar chuka hoon. Mujhe saaf pata hai ki main kya seekh raha hoon, aur main feedback jaldi maangunga."
      },
      explain: {
        en: "<ul>\n<li>Pick one or two real examples of leading without authority (use the story bank). Do not exaggerate; modest and specific is stronger.</li>\n<li>Mention a simple plan: first 30 days listen and learn, 60 days small improvement, 90 days agreed goals. Follow-up: \"What is your biggest gap?\" Name a real one and the step you are taking.</li>\n</ul>",
        hi: "<ul>\n<li>Authority के बिना lead करने के एक-दो असली examples चुनो (story bank use करो)। बढ़ा-चढ़ाकर मत बोलो; modest और specific ज़्यादा strong है।</li>\n<li>एक simple plan बताओ: पहले 30 दिन सुनना और सीखना, 60 दिन छोटा improvement, 90 दिन agreed goals। Follow-up: \"तुम्हारा सबसे बड़ा gap क्या है?\" एक असली बताओ और जो step ले रहे हो वो।</li>\n</ul>",
        hg: "<ul>\n<li>Authority ke bina lead karne ke ek-do asli examples chuno (story bank use karo). Badha-chadhakar mat bolo; modest aur specific zyada strong hai.</li>\n<li>Ek simple plan batao: pehle 30 din sunna aur seekhna, 60 din chhota improvement, 90 din agreed goals. Follow-up: \"Tumhara sabse bada gap kya hai?\" Ek asli batao aur jo step le rahe ho woh.</li>\n</ul>"
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
        en: "<ul>\n<li>Be kind, explain the format, give hints, leave time for their questions. Watch bias and \"hire a copy of me\" thinking.</li>\n<li>Follow-up: \"You are split on a candidate.\" Go back to the written signals and evidence; consider a follow-up round on the unclear signal.</li>\n</ul>",
        hi: "<ul>\n<li>Kind रहो, format समझाओ, hints दो, उनके सवालों के लिए time रखो। Bias और \"मेरी copy hire करो\" वाली सोच पर नज़र रखो।</li>\n<li>Follow-up: \"Candidate पर तुम्हारी राय बँटी है।\" लिखे हुए signals और evidence पर लौटो; unclear signal पर एक और round सोचो।</li>\n</ul>",
        hg: "<ul>\n<li>Kind raho, format samjhao, hints do, unke sawaalon ke liye time rakho. Bias aur \"meri copy hire karo\" waali soch par nazar rakho.</li>\n<li>Follow-up: \"Candidate par tumhari raay banti hai.\" Likhe hue signals aur evidence par lauto; unclear signal par ek aur round socho.</li>\n</ul>"
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
        en: "<ul>\n<li>In India, recruiters usually ask current CTC, expected CTC and notice period in the first call, sometimes payslips later. Research the market first and decide your range and minimum; think of the whole package.</li>\n<li>Be honest about current pay and other offers; companies verify. Check your contract before promising an early release.</li>\n<li>Follow-up: \"We need a number.\" State your current CTC honestly and give your expected CTC as a researched range for TL roles, not just a percentage hike.</li>\n<li>Follow-up: \"Can you join sooner?\" 60 to 90 days is a common notice norm; a buyout is sometimes possible. Say only what you have confirmed.</li>\n</ul>",
        hi: "<ul>\n<li>India में recruiters आम तौर पर पहली call में current CTC, expected CTC और notice period पूछते हैं, कभी-कभी payslips भी। पहले market research करो और अपनी range और minimum तय करो; पूरे package के बारे में सोचो।</li>\n<li>Current pay और दूसरे offers के बारे में honest रहो; companies verify करती हैं। Early release का promise करने से पहले अपना contract check करो।</li>\n<li>Follow-up: \"हमें number चाहिए।\" Current CTC honestly बताओ और expected CTC को TL roles की researched range की तरह दो, सिर्फ़ percent hike नहीं।</li>\n<li>Follow-up: \"क्या जल्दी join कर सकते हो?\" 60 से 90 दिन notice आम norm है; buyout कभी-कभी possible है। सिर्फ़ वही बोलो जो तुमने confirm किया हो।</li>\n</ul>",
        hg: "<ul>\n<li>India mein recruiters aam taur par pehli call mein current CTC, expected CTC aur notice period poochhte hain, kabhi-kabhi payslips bhi. Pehle market research karo aur apni range aur minimum tay karo; poore package ke baare mein socho.</li>\n<li>Current pay aur doosre offers ke baare mein honest raho; companies verify karti hain. Early release ka promise karne se pehle apna contract check karo.</li>\n<li>Follow-up: \"Hamein number chahiye.\" Current CTC honestly batao aur expected CTC ko TL roles ki researched range ki tarah do, sirf percent hike nahi.</li>\n<li>Follow-up: \"Kya jaldi join kar sakte ho?\" 60 se 90 din notice aam norm hai; buyout kabhi-kabhi possible hai. Sirf wahi bolo jo tumne confirm kiya ho.</li>\n</ul>"
      }
    }
  ],
  puzzles: [
    {
      id: "pert-task-list-spread",
      src: "using System.Globalization;\n\nvar tasks = new (string Name, double O, double M, double P)[]\n{\n    (\"API\", 1, 2, 3),\n    (\"Migration\", 2, 5, 14),\n    (\"Tests\", 3, 4, 5),\n    (\"Deploy\", 4, 8, 10),\n};\n\nstring F(double v) => v.ToString(\"0.00\", CultureInfo.InvariantCulture);\n\ndouble total = 0, variance = 0, naive = 0;\nforeach (var t in tasks)\n{\n    double e = (t.O + 4 * t.M + t.P) / 6;\n    double sd = (t.P - t.O) / 6;\n    total += e;\n    variance += sd * sd;\n    naive += sd;\n    Console.WriteLine(t.Name + \" \" + F(e) + \" +/- \" + F(sd));\n}\n\nConsole.WriteLine(\"Total \" + F(total));\nConsole.WriteLine(\"Spread \" + F(Math.Sqrt(variance)));\nConsole.WriteLine(\"Naive \" + F(naive));",
      answer: "API 2.00 +/- 0.33\nMigration 6.00 +/- 2.00\nTests 4.00 +/- 0.33\nDeploy 7.67 +/- 1.00\nTotal 19.67\nSpread 2.29\nNaive 3.67",
      explain: {
        en: "<p>Each task prints its PERT expected value and its spread <code>(P - O) / 6</code>. The total is the <b>sum of the expected values</b>. For the combined spread you add the <b>variances</b> (the squared spreads) and take the square root, which assumes the tasks are independent. Adding the spreads directly (the \"Naive\" line) overstates the uncertainty. Note how \"Migration\" has a long tail (14) that pulls its expected value above its most likely value of 5.</p>",
        hi: "<p>हर task अपनी PERT expected value और spread <code>(P - O) / 6</code> print करता है। Total <b>expected values का sum</b> है। Combined spread के लिए <b>variances</b> (spreads के squares) जोड़ते हैं और square root लेते हैं, जो मानता है कि tasks independent हैं। Spreads को सीधे जोड़ना (\"Naive\" line) uncertainty को ज़्यादा दिखाता है। देखो \"Migration\" की long tail (14) उसकी expected value को most likely value 5 से ऊपर खींचती है।</p>",
        hg: "<p>Har task apni PERT expected value aur spread <code>(P - O) / 6</code> print karta hai. Total <b>expected values ka sum</b> hai. Combined spread ke liye <b>variances</b> (spreads ke squares) jodte hain aur square root lete hain, jo maanta hai ki tasks independent hain. Spreads ko seedhe jodna (\"Naive\" line) uncertainty ko zyada dikhata hai. Dekho \"Migration\" ki long tail (14) uski expected value ko most likely value 5 se upar kheenchti hai.</p>"
      }
    },
    {
      id: "velocity-with-scope-growth",
      src: "int Plain(int backlog, int velocity) => (backlog + velocity - 1) / velocity;\n\nint WithGrowth(int backlog, int velocity, int growth)\n{\n    int sprints = 0, remaining = backlog;\n    while (remaining > 0)\n    {\n        sprints++;\n        remaining -= velocity;\n        if (remaining > 0) remaining += growth;\n    }\n    return sprints;\n}\n\nvar velocities = new (string Name, int V)[] { (\"min\", 6), (\"avg\", 9), (\"max\", 12) };\nforeach (var v in velocities)\n    Console.WriteLine($\"{v.Name}: plain {Plain(47, v.V)}, with +2 scope per sprint {WithGrowth(47, v.V, 2)}\");",
      answer: "min: plain 8, with +2 scope per sprint 12\navg: plain 6, with +2 scope per sprint 7\nmax: plain 4, with +2 scope per sprint 5",
      explain: {
        en: "<p><code>Plain</code> is ceiling division using integers: <code>(backlog + velocity - 1) / velocity</code>. <code>WithGrowth</code> simulates sprints where two new points of scope arrive after each sprint that did not finish the work. Slow velocity suffers most because scope growth eats a larger share of every sprint. The lesson for a TL: when scope grows, the forecast range widens fast, so talk about scope control, not only speed.</p>",
        hi: "<p><code>Plain</code> integers से ceiling division है: <code>(backlog + velocity - 1) / velocity</code>। <code>WithGrowth</code> उन sprints को simulate करता है जिनमें काम पूरा न करने वाले हर sprint के बाद scope के दो नए points आते हैं। Slow velocity को सबसे ज़्यादा नुकसान होता है क्योंकि scope growth हर sprint का बड़ा हिस्सा खा जाती है। TL के लिए सीख: scope बढ़े तो forecast range तेज़ी से चौड़ी होती है, इसलिए सिर्फ़ speed की नहीं, scope control की बात करो।</p>",
        hg: "<p><code>Plain</code> integers se ceiling division hai: <code>(backlog + velocity - 1) / velocity</code>. <code>WithGrowth</code> un sprints ko simulate karta hai jinme kaam poora na karne waale har sprint ke baad scope ke do naye points aate hain. Slow velocity ko sabse zyada nuksaan hota hai kyunki scope growth har sprint ka bada hissa kha jaati hai. TL ke liye seekh: scope badhe to forecast range tezi se chaudi hoti hai, isliye sirf speed ki nahi, scope control ki baat karo.</p>"
      }
    },
    {
      id: "wsjf-ties",
      src: "using System.Globalization;\n\nvar items = new (string Name, int Value, int Time, int Risk, int Size)[]\n{\n    (\"Upgrade library\", 5, 3, 2, 5),\n    (\"Fix flaky tests\", 3, 1, 2, 3),\n    (\"Add alert\", 2, 1, 1, 2),\n    (\"Split big class\", 6, 3, 4, 4),\n    (\"Rotate secrets\", 4, 2, 2, 2),\n};\n\nvar ranked = items\n    .Select(i => (i.Name, i.Size, Score: (decimal)(i.Value + i.Time + i.Risk) / i.Size))\n    .OrderByDescending(x => x.Score)\n    .ThenBy(x => x.Size)\n    .ThenBy(x => x.Name, StringComparer.Ordinal)\n    .ToList();\n\nfor (int k = 0; k < ranked.Count; k++)\n    Console.WriteLine($\"{k + 1}. {ranked[k].Name} {ranked[k].Score.ToString(\"0.00\", CultureInfo.InvariantCulture)}\");",
      answer: "1. Rotate secrets 4.00\n2. Split big class 3.25\n3. Add alert 2.00\n4. Fix flaky tests 2.00\n5. Upgrade library 2.00",
      explain: {
        en: "<p>The score is cost of delay (value + time criticality + risk reduction) divided by job size, as <code>decimal</code> so the division is exact enough to compare. Several items score exactly 2.00. The tie-break is deterministic: smaller job first, then name by ordinal comparison. In real life a tie is a cue to talk, since the numbers are rough team guesses.</p>",
        hi: "<p>Score = cost of delay (value + time criticality + risk reduction) को job size से भाग, <code>decimal</code> में ताकि compare करने के लिए division काफ़ी exact रहे। कई items का score ठीक 2.00 है। Tie-break deterministic है: पहले छोटा job, फिर name की ordinal comparison। असल ज़िंदगी में tie बात करने का इशारा है, क्योंकि numbers team के मोटे अंदाज़े हैं।</p>",
        hg: "<p>Score = cost of delay (value + time criticality + risk reduction) ko job size se bhaag, <code>decimal</code> mein taaki compare karne ke liye division kaafi exact rahe. Kai items ka score theek 2.00 hai. Tie-break deterministic hai: pehle chhota job, phir name ki ordinal comparison. Asal zindagi mein tie baat karne ka ishaara hai, kyunki numbers team ke mote andaaze hain.</p>"
      }
    },
    {
      id: "incident-mtta-mttr",
      src: "using System.Globalization;\n\nvar incidents = new (string Id, DateTime Start, DateTime Ack, DateTime? Resolved)[]\n{\n    (\"INC-1\", new DateTime(2026, 5, 1, 23, 50, 0), new DateTime(2026, 5, 1, 23, 58, 0), new DateTime(2026, 5, 2, 0, 50, 0)),\n    (\"INC-2\", new DateTime(2026, 5, 3, 10, 0, 0), new DateTime(2026, 5, 3, 10, 4, 0), new DateTime(2026, 5, 3, 10, 34, 0)),\n    (\"INC-3\", new DateTime(2026, 5, 4, 9, 0, 0), new DateTime(2026, 5, 4, 9, 15, 0), null),\n    (\"INC-4\", new DateTime(2026, 5, 6, 14, 0, 0), new DateTime(2026, 5, 6, 14, 3, 0), new DateTime(2026, 5, 6, 15, 33, 0)),\n};\n\nstring F(double v) => v.ToString(\"0.0\", CultureInfo.InvariantCulture);\n\nvar resolved = incidents.Where(i => i.Resolved.HasValue).ToList();\ndouble mttr = resolved.Average(i => (i.Resolved!.Value - i.Start).TotalMinutes);\ndouble mtta = incidents.Average(i => (i.Ack - i.Start).TotalMinutes);\nvar longest = resolved.OrderByDescending(i => i.Resolved!.Value - i.Start).First();\n\nConsole.WriteLine(\"Resolved \" + resolved.Count + \" of \" + incidents.Length);\nConsole.WriteLine(\"MTTA \" + F(mtta));\nConsole.WriteLine(\"MTTR \" + F(mttr));\nConsole.WriteLine(\"Longest \" + longest.Id);",
      answer: "Resolved 3 of 4\nMTTA 7.5\nMTTR 62.3\nLongest INC-4",
      explain: {
        en: "<p>Mean time to acknowledge (MTTA) uses all four incidents. Mean time to recover (MTTR) uses only the <b>resolved</b> ones, so the open INC-3 is left out (and that should be said when you report the number). INC-1 crosses midnight; <code>DateTime</code> subtraction handles that, where subtracting clock times would not. MTTR is a mean, so one long incident moves it a lot; in real reports teams often also look at the median.</p>",
        hi: "<p>Mean time to acknowledge (MTTA) चारों incidents लेता है। Mean time to recover (MTTR) सिर्फ़ <b>resolved</b> वाले लेता है, इसलिए open INC-3 बाहर है (और number report करते समय ये बताना चाहिए)। INC-1 midnight पार करता है; <code>DateTime</code> की subtraction इसे संभालती है, जबकि clock times घटाने से नहीं होता। MTTR एक mean है, इसलिए एक लंबा incident उसे बहुत हिलाता है; असली reports में teams अक्सर median भी देखती हैं।</p>",
        hg: "<p>Mean time to acknowledge (MTTA) chaaron incidents leta hai. Mean time to recover (MTTR) sirf <b>resolved</b> waale leta hai, isliye open INC-3 bahar hai (aur number report karte samay yeh batana chahiye). INC-1 midnight paar karta hai; <code>DateTime</code> ki subtraction ise sambhalti hai, jabki clock times ghatane se nahi hota. MTTR ek mean hai, isliye ek lamba incident use bahut hilata hai; asli reports mein teams aksar median bhi dekhti hain.</p>"
      }
    },
    {
      id: "fibonacci-snap",
      src: "int[] scale = { 1, 2, 3, 5, 8, 13 };\n\nint Snap(int raw)\n{\n    int best = scale[0];\n    foreach (int s in scale)\n    {\n        int d = Math.Abs(s - raw), bd = Math.Abs(best - raw);\n        if (d < bd || (d == bd && s > best)) best = s;\n    }\n    return best;\n}\n\nint total = 0;\nforeach (int raw in new[] { 1, 4, 6, 10, 11, 20 })\n{\n    int pts = Snap(raw);\n    total += pts;\n    Console.WriteLine($\"{raw} -> {pts}\" + (pts > 8 ? \" split it\" : \"\"));\n}\nConsole.WriteLine(\"Total \" + total);",
      answer: "1 -> 1\n4 -> 5\n6 -> 5\n10 -> 8\n11 -> 13 split it\n20 -> 13 split it\nTotal 45",
      explain: {
        en: "<p>Each raw size snaps to the nearest value on the scale; on an exact tie the code picks the <b>larger</b> value (4 sits between 3 and 5, so it becomes 5; 11 is closer to 13 than to 8). Anything above 8 is flagged to split. The point for a TL: the gaps in the scale grow on purpose, because the bigger the item, the less precise the estimate can honestly be; a big number is a signal to slice the work smaller.</p>",
        hi: "<p>हर raw size scale की सबसे नज़दीकी value पर snap होता है; exact tie पर code <b>बड़ी</b> value चुनता है (4, 3 और 5 के बीच है, इसलिए 5 बनता है; 11, 8 से ज़्यादा 13 के पास है)। 8 से ऊपर वाली चीज़ पर split का flag लगता है। TL के लिए बात: scale के gaps जानबूझकर बढ़ते हैं, क्योंकि item जितना बड़ा, estimate उतना कम precise honestly हो सकता है; बड़ा number काम को छोटा slice करने का signal है।</p>",
        hg: "<p>Har raw size scale ki sabse nazdeeki value par snap hota hai; exact tie par code <b>badi</b> value chunta hai (4, 3 aur 5 ke beech hai, isliye 5 banta hai; 11, 8 se zyada 13 ke paas hai). 8 se upar waali cheez par split ka flag lagta hai. TL ke liye baat: scale ke gaps jaanbujhkar badhte hain, kyunki item jitna bada, estimate utna kam precise honestly ho sakta hai; bada number kaam ko chhota slice karne ka signal hai.</p>"
      }
    }
  ],
  revision: {
    en: [
      "<b>Tech Lead</b>: accountable for the team's delivery and technical direction, still hands-on; not a manager (people) or an architect (broad design).",
      "<b>STAR</b>: short Situation and Task, long Action with \"I\", then Result; add Learning for mistakes.",
      "<b>Estimate</b> = a range with assumptions, the biggest risk and a next step (\"about 11 days, best 5, worst 21\").",
      "<b>Disagreement</b>: goal first, criteria, a measurement or spike, a written ADR, then disagree and commit.",
      "<b>Mentoring</b>: their agenda in the 1:1, ask \"What have you tried?\", a small growth plan, stay off the keyboard.",
      "<b>Stakeholder update</b>: Goal, Done, Next, Risks with an owner, Ask with a deadline; say \"yes, if\" with options.",
      "<b>Incident</b>: name a lead, mitigate before root cause, update on a fixed cadence, blameless post-mortem with owned actions.",
      "<b>Pitch</b>: Present, Past, Future in about 75 seconds; then depth, proof you lead, fit, and one honest growth area.",
      "PERT expected value is (O + 4M + P) / 6, with (P - O) / 6 as the rough spread.",
      "Forecast with slow, average and fast velocity, round sprints up, and state the range.",
      "Rank tech debt by cost of delay, risk and size, and explain it in business terms."
    ],
    meaning: {
      hi: [
        "Tech Lead team की delivery और technical direction के लिए accountable, hands-on भी; manager (लोग) या architect (बड़ा design) नहीं",
        "STAR: छोटी Situation और Task, \"I\" वाला लंबा Action, फिर Result; ग़लती हो तो Learning",
        "Estimate = assumptions, सबसे बड़े risk और अगले कदम के साथ range (\"लगभग 11 दिन, best 5, worst 21\")",
        "Disagreement: पहले goal, criteria, नाप या spike, लिखा हुआ ADR, फिर disagree and commit",
        "Mentoring: 1:1 में उनका agenda, \"तुमने क्या try किया?\" पूछो, छोटा growth plan, keyboard से दूर",
        "Stakeholder update: Goal, Done, Next, owner के साथ Risks, deadline के साथ Ask; options के साथ \"yes, if\" बोलो",
        "Incident: lead तय करो, root cause से पहले mitigate, fixed cadence पर update, owned actions वाला blameless post-mortem",
        "Pitch: लगभग 75 सेकंड में Present, Past, Future; फिर depth, lead करने का proof, fit और एक ईमानदार growth area",
        "PERT expected value है (O + 4M + P) / 6, और मोटा spread (P - O) / 6।",
        "Slow, average और fast velocity से forecast करो, sprints round up करो, और range बोलो।",
        "Tech debt को cost of delay, risk और size से rank करो, और business की भाषा में समझाओ।"
      ],
      hg: [
        "Tech Lead team ki delivery aur technical direction ke liye accountable, hands-on bhi; manager (log) ya architect (bada design) nahi",
        "STAR: chhoti Situation aur Task, \"I\" wala lamba Action, phir Result; galti ho to Learning",
        "Estimate = assumptions, sabse bade risk aur agle kadam ke saath range (\"lagbhag 11 din, best 5, worst 21\")",
        "Disagreement: pehle goal, criteria, naap ya spike, likha hua ADR, phir disagree and commit",
        "Mentoring: 1:1 mein unka agenda, \"tumne kya try kiya?\" poochho, chhota growth plan, keyboard se door",
        "Stakeholder update: Goal, Done, Next, owner ke saath Risks, deadline ke saath Ask; options ke saath \"yes, if\" bolo",
        "Incident: lead tay karo, root cause se pehle mitigate, fixed cadence par update, owned actions wala blameless post-mortem",
        "Pitch: lagbhag 75 second mein Present, Past, Future; phir depth, lead karne ka proof, fit aur ek imaandaar growth area",
        "PERT expected value hai (O + 4M + P) / 6, aur mota spread (P - O) / 6.",
        "Slow, average aur fast velocity se forecast karo, sprints round up karo, aur range bolo.",
        "Tech debt ko cost of delay, risk aur size se rank karo, aur business ki bhasha mein samjhao."
      ]
    }
  }
};
