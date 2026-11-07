// Day 26 — Security and performance, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 26,
  format: "lesson",
  title: {
    en: "Security + Performance for .NET Tech Leads — OWASP Top 10 mapped to .NET, secure coding, threat modelling, measure first, common performance wins",
    hi: "Tech Leads के लिए Security + Performance — OWASP Top 10 का .NET mapping, secure coding, threat modelling, measure first, common performance wins",
    hg: "Tech Leads ke liye Security + Performance — OWASP Top 10 ka .NET mapping, secure coding, threat modelling, measure first, common performance wins"
  },
  summary: {
    en: "<p>Day 26 makes the <b>customer-care CRM</b> safer and faster in 8 short lessons. First the OWASP Top 10 (2025) mapped to .NET, then four fixes on the CRM: ownership checks (IDOR), SQL parameters, output encoding and password hashing. Then threat modelling with STRIDE, and two performance habits: measure first against a budget, and cache with a safe key.</p><p>Every lesson follows the same path: what it is, why you need it, an analogy, a complete program with its output, line-by-line notes, common mistakes, a small exercise and a quick quiz. The Deep Dive holds the extra reference: CSRF, misconfiguration, SSRF, CI checks, allocations, async and load testing.</p>",
    hi: "<p>Day 26 में 8 छोटे पाठों में <b>customer-care CRM</b> को ज़्यादा सुरक्षित और तेज़ बनाते हैं। पहले OWASP Top 10 (2025) और .NET में उनके जवाब, फिर CRM पर चार सुधार: ownership checks (IDOR), SQL parameters, output encoding और password hashing। उसके बाद STRIDE से threat modelling, और performance की दो आदतें: budget के सामने पहले नापना, और सुरक्षित key के साथ cache करना।</p><p>हर पाठ एक ही क्रम में चलता है: यह क्या है, क्यों चाहिए, एक मिसाल, output के साथ पूरा program, लाइन-दर-लाइन समझ, आम ग़लतियाँ, एक छोटा exercise और एक झटपट quiz। Deep Dive में extra reference है: CSRF, misconfiguration, SSRF, CI checks, allocations, async और load testing।</p>",
    hg: "<p>Day 26 mein 8 chhote lessons mein <b>customer-care CRM</b> ko zyada surakshit aur tez banate hain. Pehle OWASP Top 10 (2025) aur .NET mein unke jawaab, phir CRM par chaar sudhaar: ownership checks (IDOR), SQL parameters, output encoding aur password hashing. Uske baad STRIDE se threat modelling, aur performance ki do aadatein: budget ke saamne pehle naapna, aur surakshit key ke saath cache karna.</p><p>Har lesson ek hi kram mein chalta hai: ye kya hai, kyun chahiye, ek misaal, output ke saath poora program, line-by-line samajh, aam galtiyan, ek chhota exercise aur ek jhatpat quiz. Deep Dive mein extra reference hai: CSRF, misconfiguration, SSRF, CI checks, allocations, async aur load testing.</p>"
  },
  sections: [
    {
      id: "owasp-map",
      depth: "short",
      title: {
        en: "OWASP Top 10 (2025) mapped to .NET",
        hi: "OWASP Top 10 (2025) और .NET में उनके जवाब",
        hg: "OWASP Top 10 (2025) aur .NET mein unke jawaab"
      },
      code: [
        {
          caption: {
            en: "OWASP Top 10 (2025) as a table: CRM example, .NET answer, and where today covers it",
            hi: "OWASP Top 10 (2025) एक table में: CRM मिसाल, .NET जवाब, और आज कहाँ आता है",
            hg: "OWASP Top 10 (2025) ek table mein: CRM misaal, .NET jawaab, aur aaj kahan aata hai"
          },
          src: "var risks = new List<Risk>\n{\n    new(\"A01\", \"Broken Access Control\", \"agent opens another agent's ticket\", \"ownership check on every object\", 2),\n    new(\"A02\", \"Security Misconfiguration\", \"stack trace shown on the live site\", \"UseExceptionHandler, security headers\", 0),\n    new(\"A03\", \"Software Supply Chain Failures\", \"old NuGet package with a known flaw\", \"NuGet Audit, Dependabot\", 0),\n    new(\"A04\", \"Cryptographic Failures\", \"passwords hashed with fast SHA-256 and no salt\", \"PBKDF2 or PasswordHasher, TLS\", 5),\n    new(\"A05\", \"Injection\", \"ticket search glued into SQL text\", \"SQL parameters, HtmlEncoder\", 3),\n    new(\"A06\", \"Insecure Design\", \"no limit on password-reset tries\", \"threat modelling, rate limits\", 6),\n    new(\"A07\", \"Authentication Failures\", \"unlimited password guesses, no MFA\", \"Identity lockout, MFA\", 0),\n    new(\"A08\", \"Software or Data Integrity Failures\", \"unsafe deserialization of a queue message\", \"System.Text.Json into DTOs\", 0),\n    new(\"A09\", \"Security Logging and Alerting Failures\", \"failed logins are never logged\", \"structured logs plus alerts\", 0),\n    new(\"A10\", \"Mishandling of Exceptional Conditions\", \"error path lets the request through\", \"fail closed, ProblemDetails\", 0)\n};\n\nforeach (var r in risks.Take(3))\n    Console.WriteLine($\"{r.Id} {r.Name}: CRM risk = {r.CrmRisk}; .NET answer = {r.DotNetAnswer}\");\n\nvar today = risks.Where(r => r.Lesson > 0).Select(r => r.Id);\nConsole.WriteLine(\"Taught as a lesson today: \" + string.Join(\", \", today));\nConsole.WriteLine(\"Left for the Deep Dive: \" + risks.Count(r => r.Lesson == 0));\n\nrecord Risk(string Id, string Name, string CrmRisk, string DotNetAnswer, int Lesson);\n",
          check: "run",
          expected: "A01 Broken Access Control: CRM risk = agent opens another agent's ticket; .NET answer = ownership check on every object\nA02 Security Misconfiguration: CRM risk = stack trace shown on the live site; .NET answer = UseExceptionHandler, security headers\nA03 Software Supply Chain Failures: CRM risk = old NuGet package with a known flaw; .NET answer = NuGet Audit, Dependabot\nTaught as a lesson today: A01, A04, A05, A06\nLeft for the Deep Dive: 6"
        }
      ],
      lesson: {
        buildsOn: {
          en: "<p>Day 25 gave the CRM tests, so we can change it safely. Today the CRM is attacked on paper first: each OWASP item gets a CRM example and a .NET answer, and the next lessons fix the biggest ones in code. Day 13 already taught 401/403, CORS and rate limits, and Day 20 taught Key Vault; today only adds the security angle.</p>",
          hi: "<p>Day 25 में CRM के tests बने, इसलिए अब उसे सुरक्षित तरीके से बदल सकते हैं। आज CRM पर पहले काग़ज़ पर \"हमला\" करते हैं: OWASP की हर item के लिए एक CRM मिसाल और एक .NET जवाब। अगले lessons सबसे बड़ी items को code में ठीक करते हैं। 401/403, CORS और rate limit Day 13 में, Key Vault Day 20 में आ चुके हैं; आज सिर्फ़ security का नज़रिया जुड़ता है।</p>",
          hg: "<p>Day 25 mein CRM ke tests bane, isliye ab use surakshit tareeke se badal sakte hain. Aaj CRM par pehle kaagaz par \"hamla\" karte hain: OWASP ki har item ke liye ek CRM misaal aur ek .NET jawaab. Agle lessons sabse badi items ko code mein theek karte hain. 401/403, CORS aur rate limit Day 13 mein, Key Vault Day 20 mein aa chuke hain; aaj sirf security ka nazariya judta hai.</p>"
        },
        what: {
          en: "<p>The <b>OWASP Top 10</b> is a list of the ten most common weaknesses in web applications, built from real data. The current release is <b>2025</b>; the 2021 list is the older one and many interviewers still quote it.</p><p>Use it as a <b>checklist</b>: for each item, name one place it can hurt your app and one .NET tool that answers it.</p>",
          hi: "<p><b>OWASP Top 10</b> web applications की दस सबसे आम कमज़ोरियों की list है, जो असली data से बनी है। अभी की release <b>2025</b> है; 2021 वाली list पुरानी है और कई interviewers अब भी उसके नाम बोलते हैं।</p><p>इसे <b>checklist</b> की तरह इस्तेमाल करो: हर item के लिए बताओ कि वह आपकी app में कहाँ चोट कर सकती है और कौन-सा .NET tool उसका जवाब है।</p>",
          hg: "<p><b>OWASP Top 10</b> web applications ki das sabse aam kamzoriyon ki list hai, jo asli data se bani hai. Abhi ki release <b>2025</b> hai; 2021 wali list purani hai aur kai interviewers ab bhi uske naam bolte hain.</p><p>Ise <b>checklist</b> ki tarah istemaal karo: har item ke liye batao ki woh aapki app mein kahan chot kar sakti hai aur kaunsa .NET tool uska jawaab hai.</p>"
        },
        why: {
          en: "<p>Nobody remembers every attack. Ten names give the team a shared language for design talks and code reviews: \"this is an A01 problem\" is faster than a long story.</p><p>In a Tech Lead interview, do not recite ten names. Pick the two or three that fit the question and say what you would do in .NET.</p>",
          hi: "<p>हर attack किसी को याद नहीं रहता। दस नाम team को design बातचीत और code review के लिए common भाषा देते हैं: \"यह A01 वाली problem है\" कहना लंबी कहानी से तेज़ है।</p><p>Tech Lead interview में दसों नाम मत रटो। दो-तीन चुनो जो सवाल से मेल खाएँ और बताओ कि .NET में तुम क्या करोगे।</p>",
          hg: "<p>Har attack kisi ko yaad nahi rehta. Das naam team ko design baatcheet aur code review ke liye common bhasha dete hain: \"ye A01 wali problem hai\" kehna lambi kahani se tez hai.</p><p>Tech Lead interview mein dasoon naam mat ratto. Do-teen chuno jo sawaal se mel khayein aur batao ki .NET mein tum kya karoge.</p>"
        },
        analogy: {
          en: "<p>A housing society does not rely on one guard. There is a gate register, a lock on each flat and a CCTV. The OWASP Top 10 is the society committee's list of the <b>ten most common ways the gates are left open</b>.</p>",
          hi: "<p>एक housing society सिर्फ़ एक guard के भरोसे नहीं रहती। गेट पर register होता है, हर flat में ताला और ऊपर CCTV। OWASP Top 10 society committee की वह list है जिसमें लिखा है कि <b>गेट सबसे आम किन दस तरीक़ों से खुले रह जाते हैं</b>।</p>",
          hg: "<p>Ek housing society sirf ek guard ke bharose nahi rehti. Gate par register hota hai, har flat mein taala aur upar CCTV. OWASP Top 10 society committee ki woh list hai jismein likha hai ki <b>gate sabse aam kin das tareeqon se khule reh jaate hain</b>.</p>"
        },
        lines: [
          {
            code: "var risks = new List<Risk>",
            note: {
              en: "One row per OWASP item: id, official name, a CRM example, the .NET answer, and the lesson that teaches it today (0 means the Deep Dive).",
              hi: "OWASP की हर item के लिए एक row: id, official नाम, CRM मिसाल, .NET जवाब, और वह lesson जो आज इसे सिखाता है (0 मतलब Deep Dive)।",
              hg: "OWASP ki har item ke liye ek row: id, official naam, CRM misaal, .NET jawaab, aur woh lesson jo aaj ise sikhata hai (0 matlab Deep Dive)."
            }
          },
          {
            code: "new(\"A01\", \"Broken Access Control\", \"agent opens another agent's ticket\", \"ownership check on every object\", 2),",
            note: {
              en: "A01 is the top item. In the 2025 list it also holds SSRF, which was its own item in 2021. Lesson 2 builds this one.",
              hi: "A01 सबसे ऊपर की item है। 2025 की list में इसमें SSRF भी आ गया है, जो 2021 में अलग item था। Lesson 2 इसे बनाता है।",
              hg: "A01 sabse upar ki item hai. 2025 ki list mein ismein SSRF bhi aa gaya hai, jo 2021 mein alag item tha. Lesson 2 ise banata hai."
            }
          },
          {
            code: "new(\"A03\", \"Software Supply Chain Failures\", \"old NuGet package with a known flaw\", \"NuGet Audit, Dependabot\", 0),",
            note: {
              en: "New name in 2025 (2021 called it \"Vulnerable and Outdated Components\"). Lesson number 0: it sits in the Deep Dive.",
              hi: "2025 में नया नाम (2021 में इसका नाम \"Vulnerable and Outdated Components\" था)। Lesson number 0: यह Deep Dive में है।",
              hg: "2025 mein naya naam (2021 mein iska naam \"Vulnerable and Outdated Components\" tha). Lesson number 0: ye Deep Dive mein hai."
            }
          },
          {
            code: "new(\"A10\", \"Mishandling of Exceptional Conditions\", \"error path lets the request through\", \"fail closed, ProblemDetails\", 0)",
            note: {
              en: "Also new in 2025: when an error happens, the code must deny (fail closed), not let the request pass.",
              hi: "यह भी 2025 में नया है: error आने पर code को मना करना चाहिए (fail closed), request को जाने नहीं देना चाहिए।",
              hg: "Ye bhi 2025 mein naya hai: error aane par code ko mana karna chahiye (fail closed), request ko jaane nahi dena chahiye."
            }
          },
          {
            code: "foreach (var r in risks.Take(3))",
            note: {
              en: "Prints only the first three rows so the output stays short.",
              hi: "सिर्फ़ पहली तीन rows print करता है, ताकि output छोटा रहे।",
              hg: "Sirf pehli teen rows print karta hai, taaki output chhota rahe."
            }
          },
          {
            code: "var today = risks.Where(r => r.Lesson > 0).Select(r => r.Id);",
            note: {
              en: "Filters the items that have a lesson today: A01, A04, A05, A06. The other six, including A07 (lockout, MFA), are in the Deep Dive.",
              hi: "वे items छाँटता है जिनका आज lesson है: A01, A04, A05, A06। बाक़ी छह, A07 (lockout, MFA) समेत, Deep Dive में हैं।",
              hg: "Woh items chhaantta hai jinka aaj lesson hai: A01, A04, A05, A06. Baaki chhah, A07 (lockout, MFA) samet, Deep Dive mein hain."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Learning the ten names by heart without a .NET answer for each. The name alone helps nobody.</li><li>Treating the Top 10 as a complete standard. It is an awareness list; for a real audit use OWASP ASVS and a penetration test.</li><li>Mixing editions: SSRF is part of A01 in 2025 but was A10 in 2021. Say which list you mean.</li></ul>",
          hi: "<ul><li>दसों नाम रट लेना, पर हर एक का .NET जवाब न जानना। सिर्फ़ नाम से किसी का काम नहीं चलता।</li><li>Top 10 को पूरा standard समझ लेना। यह awareness list है; असली audit के लिए OWASP ASVS और penetration test चाहिए।</li><li>Editions मिला देना: SSRF 2025 में A01 का हिस्सा है, पर 2021 में A10 था। बताओ कि कौन-सी list की बात कर रहे हो।</li></ul>",
          hg: "<ul><li>Dasoon naam ratt lena, par har ek ka .NET jawaab na jaanna. Sirf naam se kisi ka kaam nahi chalta.</li><li>Top 10 ko poora standard samajh lena. Ye awareness list hai; asli audit ke liye OWASP ASVS aur penetration test chahiye.</li><li>Editions mila dena: SSRF 2025 mein A01 ka hissa hai, par 2021 mein A10 tha. Batao ki kaunsi list ki baat kar rahe ho.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use the list as a checklist in design reviews and pull-request templates, and as shared vocabulary in the team. When a new feature starts, ask \"which of these ten can this feature touch?\"</p>",
          hi: "<p>List को design review और pull-request template में checklist की तरह रखो, और team की common भाषा बनाओ। नया feature शुरू हो तो पूछो: \"इन दस में से कौन-सी चीज़ें यह feature छू सकता है?\"</p>",
          hg: "<p>List ko design review aur pull-request template mein checklist ki tarah rakho, aur team ki common bhasha banao. Naya feature shuru ho to poocho: \"In das mein se kaunsi cheezein ye feature chhu sakta hai?\"</p>"
        },
        exercise: {
          task: {
            en: "<p>Print the six items that have no lesson today (<code>Lesson == 0</code>), with the highest id first, as <code>A10 Mishandling of Exceptional Conditions</code>.</p>",
            hi: "<p>वे छह items print करो जिनका आज कोई lesson नहीं है (<code>Lesson == 0</code>), सबसे बड़े id से शुरू करके, जैसे <code>A10 Mishandling of Exceptional Conditions</code>।</p>",
            hg: "<p>Woh chhah items print karo jinka aaj koi lesson nahi hai (<code>Lesson == 0</code>), sabse bade id se shuru karke, jaise <code>A10 Mishandling of Exceptional Conditions</code>.</p>"
          },
          hint: {
            en: "<p>Use <code>Where</code> to filter and <code>OrderByDescending(r =&gt; r.Id)</code> to sort. The ids are strings like \"A10\", and they sort correctly as text.</p>",
            hi: "<p>छाँटने के लिए <code>Where</code> और sort के लिए <code>OrderByDescending(r =&gt; r.Id)</code> लो। ids \"A10\" जैसे strings हैं और text की तरह ठीक sort होते हैं।</p>",
            hg: "<p>Chhaantne ke liye <code>Where</code> aur sort ke liye <code>OrderByDescending(r =&gt; r.Id)</code> lo. Ids \"A10\" jaise strings hain aur text ki tarah theek sort hote hain.</p>"
          },
          solution: {
            caption: {
              en: "Solution: the items left for the Deep Dive",
              hi: "हल: Deep Dive के लिए बची items",
              hg: "Hal: Deep Dive ke liye bachi items"
            },
            src: "var risks = new List<Risk>\n{\n    new(\"A01\", \"Broken Access Control\", 2), new(\"A02\", \"Security Misconfiguration\", 0),\n    new(\"A03\", \"Software Supply Chain Failures\", 0), new(\"A04\", \"Cryptographic Failures\", 5),\n    new(\"A05\", \"Injection\", 3), new(\"A06\", \"Insecure Design\", 6),\n    new(\"A07\", \"Authentication Failures\", 0), new(\"A08\", \"Software or Data Integrity Failures\", 0),\n    new(\"A09\", \"Security Logging and Alerting Failures\", 0), new(\"A10\", \"Mishandling of Exceptional Conditions\", 0)\n};\n\nvar left = risks.Where(r => r.Lesson == 0).OrderByDescending(r => r.Id);\nforeach (var r in left) Console.WriteLine($\"{r.Id} {r.Name}\");\n\nrecord Risk(string Id, string Name, int Lesson);\n",
            check: "run",
            expected: "A10 Mishandling of Exceptional Conditions\nA09 Security Logging and Alerting Failures\nA08 Software or Data Integrity Failures\nA07 Authentication Failures\nA03 Software Supply Chain Failures\nA02 Security Misconfiguration"
          }
        },
        quiz: {
          q: {
            en: "<p>Which OWASP item is \"a flaw in the design itself\", which code review alone cannot fix?</p>",
            hi: "<p>OWASP की कौन-सी item \"design में ही कमी\" है, जिसे सिर्फ़ code review से ठीक नहीं किया जा सकता?</p>",
            hg: "<p>OWASP ki kaunsi item \"design mein hi kami\" hai, jise sirf code review se theek nahi kiya ja sakta?</p>"
          },
          options: [
            {
              en: "A09 Security Logging and Alerting Failures",
              hi: "A09 Security Logging and Alerting Failures वाली item",
              hg: "A09 Security Logging and Alerting Failures wali item"
            },
            {
              en: "A05 Injection",
              hi: "A05 Injection वाली item",
              hg: "A05 Injection wali item"
            },
            {
              en: "A06 Insecure Design",
              hi: "A06 Insecure Design वाली item",
              hg: "A06 Insecure Design wali item"
            },
            {
              en: "A03 Software Supply Chain Failures",
              hi: "A03 Software Supply Chain Failures वाली item",
              hg: "A03 Software Supply Chain Failures wali item"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>A06 Insecure Design. The code can be perfect and the feature still unsafe, for example a password reset with no limit on tries. You find this by thinking about abuse before building (lesson 6).</p>",
            hi: "<p>A06 Insecure Design। Code बिल्कुल सही हो सकता है और feature फिर भी असुरक्षित, जैसे password reset जिसमें कोशिशों की कोई सीमा नहीं। इसे बनाने से पहले ग़लत इस्तेमाल के बारे में सोचकर पकड़ते हैं (lesson 6)।</p>",
            hg: "<p>A06 Insecure Design. Code bilkul sahi ho sakta hai aur feature phir bhi asurakshit, jaise password reset jismein koshishon ki koi seema nahi. Ise banane se pehle galat istemaal ke baare mein sochkar pakadte hain (lesson 6).</p>"
          }
        },
        recap: {
          en: "<ul><li>OWASP Top 10 (2025) is a checklist of the ten most common web weaknesses; 2021 is the older list.</li><li>For each item, know one CRM example and one .NET answer.</li><li>It is an awareness list, not a complete audit; threat-model new features (lesson 6).</li></ul>",
          hi: "<ul><li>OWASP Top 10 (2025) web की दस सबसे आम कमज़ोरियों की checklist है; 2021 पुरानी list है।</li><li>हर item के लिए एक CRM मिसाल और एक .NET जवाब आना चाहिए।</li><li>यह awareness list है, पूरा audit नहीं; नए features का threat model बनाओ (lesson 6)।</li></ul>",
          hg: "<ul><li>OWASP Top 10 (2025) web ki das sabse aam kamzoriyon ki checklist hai; 2021 purani list hai.</li><li>Har item ke liye ek CRM misaal aur ek .NET jawaab aana chahiye.</li><li>Ye awareness list hai, poora audit nahi; naye features ka threat model banao (lesson 6).</li></ul>"
        }
      }
    },
    {
      id: "broken-access",
      depth: "short",
      title: {
        en: "Broken access control: check ownership (IDOR)",
        hi: "Broken access control: मालिकाना हक़ जाँचो (IDOR)",
        hg: "Broken access control: malikana haq jaancho (IDOR)"
      },
      code: [
        {
          caption: {
            en: "IDOR: an agent reads another agent's ticket, then the ownership check",
            hi: "IDOR: एक agent दूसरे agent की ticket पढ़ लेता है, फिर ownership check",
            hg: "IDOR: ek agent doosre agent ki ticket padh leta hai, phir ownership check"
          },
          src: "var store = new TicketStore();\nvar meena = new User(\"Meena\", \"Agent\");\nvar kiran = new User(\"Kiran\", \"Agent\");\nvar neha = new User(\"Neha\", \"Supervisor\");\n\n// Ticket 501 belongs to Asha and is assigned to Meena.\nConsole.WriteLine(\"bad : Kiran reads 501 -> \" + (store.FindBad(501)?.Issue ?? \"not found\"));\nConsole.WriteLine(\"good: Kiran reads 501 -> \" + (store.FindFor(kiran, 501)?.Issue ?? \"not found\"));\nConsole.WriteLine(\"good: Meena reads 501 -> \" + (store.FindFor(meena, 501)?.Issue ?? \"not found\"));\nConsole.WriteLine(\"good: Neha reads 501  -> \" + (store.FindFor(neha, 501)?.Issue ?? \"not found\"));\nConsole.WriteLine(\"good: Kiran reads 999 -> \" + (store.FindFor(kiran, 999)?.Issue ?? \"not found\"));\n\nrecord User(string Name, string Role);\nrecord Ticket(int Id, string Customer, string Agent, string Issue);\n\nclass TicketStore\n{\n    private readonly Dictionary<int, Ticket> _tickets = new()\n    {\n        [501] = new Ticket(501, \"Asha\", \"Meena\", \"Router not working\"),\n        [502] = new Ticket(502, \"Ravi\", \"Kiran\", \"Wrong bill\")\n    };\n\n    // BAD: \"logged in\" is the only check, so any id works for any agent (IDOR)\n    public Ticket? FindBad(int id) => _tickets.GetValueOrDefault(id);\n\n    // GOOD: the rule \"who may see this ticket\" lives in one place\n    public Ticket? FindFor(User caller, int id)\n    {\n        var ticket = _tickets.GetValueOrDefault(id);\n        if (ticket is null) return null;\n        bool allowed = caller.Role == \"Supervisor\" || ticket.Agent == caller.Name;\n        return allowed ? ticket : null;   // same answer as \"missing\": hides that the id exists\n    }\n}\n",
          check: "run",
          expected: "bad : Kiran reads 501 -> Router not working\ngood: Kiran reads 501 -> not found\ngood: Meena reads 501 -> Router not working\ngood: Neha reads 501  -> Router not working\ngood: Kiran reads 999 -> not found"
        }
      ],
      lesson: {
        buildsOn: {
          en: "<p>Lesson 1 mapped A01 to \"ownership check on every object\". Here we build it on the CRM's <code>SupportTicket</code>. Day 13 taught 401 (not logged in) and 403 (not allowed to call this endpoint); this lesson is about the rule that depends on the data: may <b>this</b> user see <b>this</b> ticket?</p>",
          hi: "<p>Lesson 1 ने A01 को \"हर object पर ownership check\" से जोड़ा। यहाँ हम इसे CRM के <code>SupportTicket</code> पर बनाते हैं। Day 13 में 401 (login नहीं) और 403 (इस endpoint को call करने की इजाज़त नहीं) आए थे; यह lesson उस rule का है जो data पर निर्भर है: क्या <b>यह</b> user <b>यह</b> ticket देख सकता है?</p>",
          hg: "<p>Lesson 1 ne A01 ko \"har object par ownership check\" se joda. Yahan hum ise CRM ke <code>SupportTicket</code> par banate hain. Day 13 mein 401 (login nahi) aur 403 (is endpoint ko call karne ki ijaazat nahi) aaye the; ye lesson us rule ka hai jo data par nirbhar hai: kya <b>ye</b> user <b>ye</b> ticket dekh sakta hai?</p>"
        },
        what: {
          en: "<p><b>IDOR</b> (insecure direct object reference) means the app takes an id from the request and returns that object without asking \"is it yours?\".</p><p>Logging in proves <b>who</b> you are. It does not prove <b>what</b> you may open. Ownership must be checked for every object, on every read and write.</p>",
          hi: "<p><b>IDOR</b> (insecure direct object reference) का मतलब: app request से id लेती है और उस object को बिना पूछे लौटा देती है कि \"यह तुम्हारा है?\"।</p><p>Login से सिर्फ़ पता चलता है कि तुम <b>कौन</b> हो। यह नहीं कि तुम <b>क्या</b> खोल सकते हो। हर object पर, हर read और write में ownership जाँचनी पड़ती है।</p>",
          hg: "<p><b>IDOR</b> (insecure direct object reference) ka matlab: app request se id leti hai aur us object ko bina poochhe lauta deti hai ki \"ye tumhara hai?\".</p><p>Login se sirf pata chalta hai ki tum <b>kaun</b> ho. Ye nahi ki tum <b>kya</b> khol sakte ho. Har object par, har read aur write mein ownership jaanchni padti hai.</p>"
        },
        why: {
          en: "<p>Broken access control is number one on the list. The attack needs no tools: an agent changes <code>/tickets/502</code> to <code>/tickets/501</code> in the address bar and reads a stranger's ticket.</p><p>\"The UI does not show that button\" is not a defence. The attacker does not use your UI.</p>",
          hi: "<p>Broken access control list में नंबर एक है। इस attack में कोई tool नहीं चाहिए: agent address bar में <code>/tickets/502</code> को <code>/tickets/501</code> कर देता है और किसी अजनबी की ticket पढ़ लेता है।</p><p>\"UI में वह button दिखता ही नहीं\" कोई बचाव नहीं है। attacker आपकी UI इस्तेमाल नहीं करता।</p>",
          hg: "<p>Broken access control list mein number ek hai. Is attack mein koi tool nahi chahiye: agent address bar mein <code>/tickets/502</code> ko <code>/tickets/501</code> kar deta hai aur kisi ajnabi ki ticket padh leta hai.</p><p>\"UI mein woh button dikhta hi nahi\" koi bachaav nahi hai. Attacker aapki UI istemaal nahi karta.</p>"
        },
        analogy: {
          en: "<p>You are a real bank customer. Your passbook page URL says <code>/accounts/1001</code>. You change it to <code>/accounts/1002</code> and see someone else's balance, because nobody checked <b>whose</b> account it is. The gate guard let you in, but no one checked the locker number on your key.</p>",
          hi: "<p>तुम बैंक के असली customer हो। तुम्हारे passbook page का URL है <code>/accounts/1001</code>। तुम उसे <code>/accounts/1002</code> कर देते हो और किसी और का balance दिख जाता है, क्योंकि किसी ने जाँचा ही नहीं कि वह account <b>किसका</b> है। गेट पर guard ने अंदर आने दिया, पर तुम्हारी चाबी पर लिखा locker नंबर किसी ने नहीं देखा।</p>",
          hg: "<p>Tum bank ke asli customer ho. Tumhare passbook page ka URL hai <code>/accounts/1001</code>. Tum use <code>/accounts/1002</code> kar dete ho aur kisi aur ka balance dikh jaata hai, kyunki kisi ne jaancha hi nahi ki woh account <b>kiska</b> hai. Gate par guard ne andar aane diya, par tumhari chaabi par likha locker number kisi ne nahi dekha.</p>"
        },
        lines: [
          {
            code: "var neha = new User(\"Neha\", \"Supervisor\");",
            note: {
              en: "The caller has a name and a role. In ASP.NET Core they come from the signed-in identity (claims), never from the request body or query string.",
              hi: "Caller का एक नाम और एक role है। ASP.NET Core में ये signed-in identity (claims) से आते हैं, request body या query string से कभी नहीं।",
              hg: "Caller ka ek naam aur ek role hai. ASP.NET Core mein ye signed-in identity (claims) se aate hain, request body ya query string se kabhi nahi."
            }
          },
          {
            code: "public Ticket? FindBad(int id) => _tickets.GetValueOrDefault(id);",
            note: {
              en: "The bad version: \"logged in\" is the only check, so any id works for any agent.",
              hi: "बुरा version: सिर्फ़ \"logged in\" की जाँच है, इसलिए किसी भी agent के लिए कोई भी id चल जाता है।",
              hg: "Bura version: sirf \"logged in\" ki jaanch hai, isliye kisi bhi agent ke liye koi bhi id chal jaata hai."
            }
          },
          {
            code: "bool allowed = caller.Role == \"Supervisor\" || ticket.Agent == caller.Name;",
            note: {
              en: "The rule in one place: a supervisor, or the agent the ticket is assigned to. Change the rule here and every endpoint follows.",
              hi: "Rule एक ही जगह: supervisor, या वह agent जिसे ticket assign है। Rule यहाँ बदलो तो हर endpoint उसे मानता है।",
              hg: "Rule ek hi jagah: supervisor, ya woh agent jise ticket assign hai. Rule yahan badlo to har endpoint use manta hai."
            }
          },
          {
            code: "return allowed ? ticket : null;",
            note: {
              en: "A forbidden ticket returns the same answer as a missing one, so an attacker cannot learn which ids exist. In an API that means 404 Not Found for both.",
              hi: "मना की गई ticket का जवाब वही है जो ग़ायब ticket का, इसलिए attacker को पता नहीं चलता कि कौन-से ids मौजूद हैं। API में इसका मतलब: दोनों के लिए 404 Not Found।",
              hg: "Mana ki gayi ticket ka jawaab wahi hai jo gaayab ticket ka, isliye attacker ko pata nahi chalta ki kaunse ids maujood hain. API mein iska matlab: dono ke liye 404 Not Found."
            }
          },
          {
            code: "Console.WriteLine(\"bad : Kiran reads 501 -> \" + (store.FindBad(501)?.Issue ?? \"not found\"));",
            note: {
              en: "Kiran is not assigned to 501, yet the bad version shows Asha's issue.",
              hi: "Kiran को 501 assign नहीं है, फिर भी बुरा version Asha की issue दिखा देता है।",
              hg: "Kiran ko 501 assign nahi hai, phir bhi bura version Asha ki issue dikha deta hai."
            }
          },
          {
            code: "Console.WriteLine(\"good: Kiran reads 999 -> \" + (store.FindFor(kiran, 999)?.Issue ?? \"not found\"));",
            note: {
              en: "Ticket 999 does not exist and ticket 501 is forbidden, and both print \"not found\". The caller learns nothing.",
              hi: "Ticket 999 है ही नहीं और ticket 501 मना है, और दोनों \"not found\" print करते हैं। Caller को कुछ पता नहीं चलता।",
              hg: "Ticket 999 hai hi nahi aur ticket 501 mana hai, aur dono \"not found\" print karte hain. Caller ko kuch pata nahi chalta."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Checking only on read. Update and delete need the same ownership check.</li><li>Taking the user id from the request body or a hidden field. Take it from the signed-in identity (claims).</li><li>Using GUID ids as the only protection. A GUID is hard to guess, but it leaks through logs, e-mails and shared links.</li></ul>",
          hi: "<ul><li>सिर्फ़ read पर जाँच करना। Update और delete पर भी वही ownership check चाहिए।</li><li>User id को request body या hidden field से लेना। इसे signed-in identity (claims) से लो।</li><li>सिर्फ़ GUID ids के भरोसे रहना। GUID का अंदाज़ा लगाना मुश्किल है, पर वह logs, e-mails और shared links से बाहर निकल जाता है।</li></ul>",
          hg: "<ul><li>Sirf read par jaanch karna. Update aur delete par bhi wahi ownership check chahiye.</li><li>User id ko request body ya hidden field se lena. Ise signed-in identity (claims) se lo.</li><li>Sirf GUID ids ke bharose rehna. GUID ka andaaza lagana mushkil hai, par woh logs, e-mails aur shared links se bahar nikal jaata hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Every endpoint that takes an id for data that belongs to someone needs this check. In ASP.NET Core, put the rule in a resource-based authorization handler (see the Deep Dive) or filter the query by the caller's id, so the rule lives in one place and deny is the default.</p>",
          hi: "<p>जो भी endpoint किसी के data की id लेता है, उस पर यह check चाहिए। ASP.NET Core में rule को resource-based authorization handler में रखो (Deep Dive देखो) या query को caller की id से filter करो, ताकि rule एक जगह रहे और default \"मना\" हो।</p>",
          hg: "<p>Jo bhi endpoint kisi ke data ki id leta hai, us par ye check chahiye. ASP.NET Core mein rule ko resource-based authorization handler mein rakho (Deep Dive dekho) ya query ko caller ki id se filter karo, taaki rule ek jagah rahe aur default \"mana\" ho.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a <b>Customer</b> role: a customer may read only tickets where <code>ticket.Customer</code> is their own name. Show that Asha can read 501 and Ravi cannot. Unknown roles must be denied.</p>",
            hi: "<p><b>Customer</b> role जोड़ो: customer सिर्फ़ वही tickets पढ़ सकता है जिनमें <code>ticket.Customer</code> उसका अपना नाम हो। दिखाओ कि Asha 501 पढ़ सकती है और Ravi नहीं। अनजान role को मना करना है।</p>",
            hg: "<p><b>Customer</b> role jodo: customer sirf wahi tickets padh sakta hai jinmein <code>ticket.Customer</code> uska apna naam ho. Dikhao ki Asha 501 padh sakti hai aur Ravi nahi. Anjaan role ko mana karna hai.</p>"
          },
          hint: {
            en: "<p>Replace the <code>allowed</code> line with a <code>switch</code> on <code>caller.Role</code> and end with <code>_ =&gt; false</code>.</p>",
            hi: "<p><code>allowed</code> वाली line की जगह <code>caller.Role</code> पर <code>switch</code> लगाओ और आख़िर में <code>_ =&gt; false</code> रखो।</p>",
            hg: "<p><code>allowed</code> wali line ki jagah <code>caller.Role</code> par <code>switch</code> lagao aur aakhir mein <code>_ =&gt; false</code> rakho.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a Customer role, deny by default",
              hi: "हल: Customer role, default में मना",
              hg: "Hal: Customer role, default mein mana"
            },
            src: "var store = new TicketStore();\nvar asha = new User(\"Asha\", \"Customer\");\nvar ravi = new User(\"Ravi\", \"Customer\");\n\nConsole.WriteLine(\"Asha reads 501: \" + (store.FindFor(asha, 501)?.Issue ?? \"not found\"));\nConsole.WriteLine(\"Ravi reads 501: \" + (store.FindFor(ravi, 501)?.Issue ?? \"not found\"));\n\nrecord User(string Name, string Role);\nrecord Ticket(int Id, string Customer, string Agent, string Issue);\n\nclass TicketStore\n{\n    private readonly Dictionary<int, Ticket> _tickets = new()\n    {\n        [501] = new Ticket(501, \"Asha\", \"Meena\", \"Router not working\")\n    };\n\n    public Ticket? FindFor(User caller, int id)\n    {\n        var ticket = _tickets.GetValueOrDefault(id);\n        if (ticket is null) return null;\n        bool allowed = caller.Role switch\n        {\n            \"Supervisor\" => true,\n            \"Agent\" => ticket.Agent == caller.Name,\n            \"Customer\" => ticket.Customer == caller.Name,\n            _ => false                       // unknown role: deny by default\n        };\n        return allowed ? ticket : null;\n    }\n}\n",
            check: "run",
            expected: "Asha reads 501: Router not working\nRavi reads 501: not found"
          }
        },
        quiz: {
          q: {
            en: "<p>Kiran is logged in. He changes the URL from <code>/tickets/502</code> to <code>/tickets/501</code> and sees Asha's ticket. What is the right fix?</p>",
            hi: "<p>Kiran logged in है। वह URL में <code>/tickets/502</code> को <code>/tickets/501</code> कर देता है और Asha की ticket देख लेता है। सही fix क्या है?</p>",
            hg: "<p>Kiran logged in hai. Woh URL mein <code>/tickets/502</code> ko <code>/tickets/501</code> kar deta hai aur Asha ki ticket dekh leta hai. Sahi fix kya hai?</p>"
          },
          options: [
            {
              en: "On the server, check that the ticket is assigned to the caller",
              hi: "Server पर जाँचो कि ticket caller को assign है",
              hg: "Server par jaancho ki ticket caller ko assign hai"
            },
            {
              en: "Add <code>[Authorize]</code> to the endpoint so only signed-in users get in",
              hi: "Endpoint पर <code>[Authorize]</code> लगा दो ताकि सिर्फ़ signed-in users आएँ",
              hg: "Endpoint par <code>[Authorize]</code> laga do taaki sirf signed-in users aayein"
            },
            {
              en: "Hide the link to ticket 501 in the UI for agents like Kiran",
              hi: "Kiran जैसे agents के लिए UI में ticket 501 का link छुपा दो",
              hg: "Kiran jaise agents ke liye UI mein ticket 501 ka link chhupa do"
            },
            {
              en: "Switch ticket ids to GUIDs so that nobody can guess them",
              hi: "Ticket ids को GUID कर दो ताकि कोई उनका अंदाज़ा न लगा सके",
              hg: "Ticket ids ko GUID kar do taaki koi unka andaaza na laga sake"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>Kiran is already authenticated, so <code>[Authorize]</code> changes nothing. Hiding a link or using GUIDs only makes the attack harder to start, not impossible. The server must ask \"may this caller see this ticket?\" every time.</p>",
            hi: "<p>Kiran पहले से authenticated है, इसलिए <code>[Authorize]</code> से कुछ नहीं बदलता। Link छुपाने या GUID से attack सिर्फ़ मुश्किल होता है, नामुमकिन नहीं। Server को हर बार पूछना है: \"क्या यह caller यह ticket देख सकता है?\"</p>",
            hg: "<p>Kiran pehle se authenticated hai, isliye <code>[Authorize]</code> se kuch nahi badalta. Link chhupane ya GUID se attack sirf mushkil hota hai, naamumkin nahi. Server ko har baar poochna hai: \"kya ye caller ye ticket dekh sakta hai?\"</p>"
          }
        },
        recap: {
          en: "<ul><li>Login proves who you are; ownership must still be checked for every object.</li><li>Put the rule in one place, take the caller from claims, and deny by default.</li><li>A forbidden object and a missing object should look the same to the caller.</li></ul>",
          hi: "<ul><li>Login बताता है कि तुम कौन हो; हर object पर ownership फिर भी जाँचनी है।</li><li>Rule एक जगह रखो, caller को claims से लो, और default \"मना\" रखो।</li><li>मना किया गया object और ग़ायब object caller को एक जैसे दिखने चाहिए।</li></ul>",
          hg: "<ul><li>Login batata hai ki tum kaun ho; har object par ownership phir bhi jaanchni hai.</li><li>Rule ek jagah rakho, caller ko claims se lo, aur default \"mana\" rakho.</li><li>Mana kiya gaya object aur gaayab object caller ko ek jaise dikhne chahiye.</li></ul>"
        }
      }
    },
    {
      id: "sql-injection",
      depth: "short",
      title: {
        en: "SQL injection: parameters, not string gluing",
        hi: "SQL injection: parameters लगाओ, strings मत जोड़ो",
        hg: "SQL injection: parameters lagao, strings mat jodo"
      },
      code: [
        {
          caption: {
            en: "Injection on SQLite in memory: the concatenated SQL vs a parameter",
            hi: "In-memory SQLite पर injection: जोड़ा हुआ SQL बनाम parameter",
            hg: "In-memory SQLite par injection: joda hua SQL banaam parameter"
          },
          src: "using Microsoft.Data.Sqlite;\n\nusing var db = new SqliteConnection(\"Data Source=:memory:\");\ndb.Open();\nRun(\"CREATE TABLE Tickets (Id INTEGER PRIMARY KEY, Customer TEXT, Issue TEXT)\");\nRun(\"INSERT INTO Tickets VALUES (501, 'Asha', 'Router not working'), (502, 'Ravi', 'Slow internet'), (503, 'Neha', 'Card block request')\");\n\nstring typed = \"Asha' OR '1'='1\";      // what an attacker types in the \"my tickets\" box\n\n// BAD: the text is glued into the SQL, so the quote changes the meaning of the query\nstring bad = \"SELECT Id FROM Tickets WHERE Customer = '\" + typed + \"'\";\nConsole.WriteLine(\"bad SQL : \" + bad);\nConsole.WriteLine(\"bad rows: \" + Count(bad));\n\n// GOOD: the SQL text is fixed; the typed text travels separately as a parameter value\nconst string good = \"SELECT Id FROM Tickets WHERE Customer = $name\";\nConsole.WriteLine(\"good SQL : \" + good);\nConsole.WriteLine(\"good rows: \" + Count(good, typed));\nConsole.WriteLine(\"normal input rows: \" + Count(good, \"Asha\"));\n\nvoid Run(string sql)\n{\n    using var cmd = db.CreateCommand();\n    cmd.CommandText = sql;\n    cmd.ExecuteNonQuery();\n}\n\nint Count(string sql, string? name = null)\n{\n    using var cmd = db.CreateCommand();\n    cmd.CommandText = sql;\n    if (name is not null) cmd.Parameters.AddWithValue(\"$name\", name);\n    using var reader = cmd.ExecuteReader();\n    int rows = 0;\n    while (reader.Read()) rows++;\n    return rows;\n}\n",
          check: "run",
          expected: "bad SQL : SELECT Id FROM Tickets WHERE Customer = 'Asha' OR '1'='1'\nbad rows: 3\ngood SQL : SELECT Id FROM Tickets WHERE Customer = $name\ngood rows: 0\nnormal input rows: 1",
          packages: [
            "Microsoft.Data.Sqlite"
          ]
        }
      ],
      lesson: {
        buildsOn: {
          en: "<p>Lesson 2 decided who may read a ticket. An attacker who can change the SQL itself skips that rule completely. Day 5 and Day 6 taught SQL and EF Core, including <code>FromSql</code> with parameters; here we look at the SQL text underneath, on an in-memory SQLite database like Day 5.</p>",
          hi: "<p>Lesson 2 ने तय किया कि ticket कौन पढ़ सकता है। जो attacker SQL को ही बदल दे, वह यह rule पूरी तरह लाँघ जाता है। Day 5 और Day 6 में SQL और EF Core आए थे, <code>FromSql</code> parameters के साथ भी; यहाँ हम नीचे का SQL text देखते हैं, Day 5 की तरह in-memory SQLite पर।</p>",
          hg: "<p>Lesson 2 ne tay kiya ki ticket kaun padh sakta hai. Jo attacker SQL ko hi badal de, woh ye rule poori tarah laangh jaata hai. Day 5 aur Day 6 mein SQL aur EF Core aaye the, <code>FromSql</code> parameters ke saath bhi; yahan hum neeche ka SQL text dekhte hain, Day 5 ki tarah in-memory SQLite par.</p>"
        },
        what: {
          en: "<p><b>Injection</b> happens when user text becomes part of a command. In SQL, a single quote ends your string and everything after it runs as SQL.</p><p>The fix is a <b>parameter</b>: the SQL text is fixed, and the value travels separately, so the database never reads it as SQL.</p>",
          hi: "<p><b>Injection</b> तब होता है जब user का text command का हिस्सा बन जाता है। SQL में एक single quote आपकी string ख़त्म कर देता है और उसके बाद का सब कुछ SQL की तरह चलता है।</p><p>इलाज है <b>parameter</b>: SQL text तय रहता है और value अलग से जाती है, इसलिए database उसे SQL की तरह पढ़ता ही नहीं।</p>",
          hg: "<p><b>Injection</b> tab hota hai jab user ka text command ka hissa ban jaata hai. SQL mein ek single quote aapki string khatam kar deta hai aur uske baad ka sab kuch SQL ki tarah chalta hai.</p><p>Ilaaj hai <b>parameter</b>: SQL text tay rehta hai aur value alag se jaati hai, isliye database use SQL ki tarah padhta hi nahi.</p>"
        },
        why: {
          en: "<p>One glued string can hand over the whole <code>Tickets</code> table, or let an attacker change or delete rows. Parameters cost nothing, work in every database library, and close the hole for good.</p>",
          hi: "<p>एक जोड़ी हुई string पूरी <code>Tickets</code> table दे सकती है, या attacker को rows बदलने और मिटाने दे सकती है। Parameters की कोई क़ीमत नहीं, वे हर database library में चलते हैं और यह छेद हमेशा के लिए बंद कर देते हैं।</p>",
          hg: "<p>Ek jodi hui string poori <code>Tickets</code> table de sakti hai, ya attacker ko rows badalne aur mitaane de sakti hai. Parameters ki koi keemat nahi, ve har database library mein chalte hain aur ye ched hamesha ke liye band kar dete hain.</p>"
        },
        analogy: {
          en: "<p>A canteen order slip says \"one tea, two samosa\". If a customer writes \"one tea, and give the cash box too\" and the cook <b>obeys every word on the slip</b>, that is injection. The fix is a printed slip where the customer can only fill in quantities. The data goes into boxes and is never read as instructions. SQL parameters are those boxes.</p>",
          hi: "<p>Canteen की order slip पर लिखा है \"एक चाय, दो समोसे\"। अगर कोई customer लिख दे \"एक चाय, और गल्ला भी दे दो\" और cook <b>slip का हर शब्द मान ले</b>, तो यह injection है। इलाज है छपी हुई slip जिसमें customer सिर्फ़ मात्रा भर सके। Data डिब्बों में जाता है, हुक्म की तरह कभी नहीं पढ़ा जाता। SQL parameters वही डिब्बे हैं।</p>",
          hg: "<p>Canteen ki order slip par likha hai \"ek chai, do samose\". Agar koi customer likh de \"ek chai, aur galla bhi de do\" aur cook <b>slip ka har shabd maan le</b>, to ye injection hai. Ilaaj hai chhapi hui slip jismein customer sirf maatra bhar sake. Data dibbon mein jaata hai, hukm ki tarah kabhi nahi padha jaata. SQL parameters wahi dibbe hain.</p>"
        },
        focus: {
          caption: {
            en: "Day 6 recap: EF Core, the same rule (not run here)",
            hi: "Day 6 की याद: EF Core में वही rule (यहाँ run नहीं होता)",
            hg: "Day 6 ki yaad: EF Core mein wahi rule (yahan run nahi hota)"
          },
          src: "string typed = \"Asha' OR '1'='1\";\n\n// DANGEROUS: the string is built first, then sent as one SQL text\nvar bad = db.Tickets.FromSqlRaw(\"SELECT * FROM Tickets WHERE Customer = '\" + typed + \"'\");\n\n// SAFE: FromSql turns every {hole} into a DbParameter\nvar good = db.Tickets.FromSql($\"SELECT * FROM Tickets WHERE Customer = {typed}\");\n",
          check: "none"
        },
        lines: [
          {
            code: "string typed = \"Asha' OR '1'='1\";",
            note: {
              en: "What an attacker types into the \"my tickets\" box. The quote after <code>Asha</code> closes the string, then <code>OR '1'='1'</code> is always true.",
              hi: "\"my tickets\" box में attacker जो लिखता है। <code>Asha</code> के बाद वाला quote string बंद कर देता है, फिर <code>OR '1'='1'</code> हमेशा true रहता है।",
              hg: "\"my tickets\" box mein attacker jo likhta hai. <code>Asha</code> ke baad wala quote string band kar deta hai, phir <code>OR '1'='1'</code> hamesha true rehta hai."
            }
          },
          {
            code: "string bad = \"SELECT Id FROM Tickets WHERE Customer = '\" + typed + \"'\";",
            note: {
              en: "The bad way: the typed text is glued into the SQL string. The printed SQL shows the extra <code>OR</code> inside the query.",
              hi: "बुरा तरीक़ा: typed text SQL string में जोड़ दिया गया। Print हुआ SQL दिखाता है कि query के अंदर एक extra <code>OR</code> घुस गया।",
              hg: "Bura tareeqa: typed text SQL string mein jod diya gaya. Print hua SQL dikhata hai ki query ke andar ek extra <code>OR</code> ghus gaya."
            }
          },
          {
            code: "Console.WriteLine(\"bad rows: \" + Count(bad));",
            note: {
              en: "Prints 3: every customer's ticket came back, not only Asha's.",
              hi: "3 print होता है: सिर्फ़ Asha की नहीं, हर customer की ticket वापस आ गई।",
              hg: "3 print hota hai: sirf Asha ki nahi, har customer ki ticket wapas aa gayi."
            }
          },
          {
            code: "const string good = \"SELECT Id FROM Tickets WHERE Customer = $name\";",
            note: {
              en: "The good way: fixed SQL text with a placeholder. SQLite writes it <code>$name</code>; SQL Server writes <code>@name</code>.",
              hi: "अच्छा तरीक़ा: placeholder वाला तय SQL text। SQLite में यह <code>$name</code> लिखा जाता है; SQL Server में <code>@name</code>।",
              hg: "Accha tareeqa: placeholder wala tay SQL text. SQLite mein ye <code>$name</code> likha jaata hai; SQL Server mein <code>@name</code>."
            }
          },
          {
            code: "if (name is not null) cmd.Parameters.AddWithValue(\"$name\", name);",
            note: {
              en: "The value is sent separately. The database never parses it as SQL, so the attacker's quote is just a character in a name.",
              hi: "Value अलग से भेजी जाती है। Database उसे SQL की तरह parse नहीं करता, इसलिए attacker का quote नाम का एक अक्षर भर है।",
              hg: "Value alag se bheji jaati hai. Database use SQL ki tarah parse nahi karta, isliye attacker ka quote naam ka ek akshar bhar hai."
            }
          },
          {
            code: "Console.WriteLine(\"normal input rows: \" + Count(good, \"Asha\"));",
            note: {
              en: "Real input still works: 1 row for Asha. Names such as O'Brien also work, because nothing is removed from the text.",
              hi: "असली input अब भी चलता है: Asha के लिए 1 row। O'Brien जैसे नाम भी चलते हैं, क्योंकि text से कुछ हटाया नहीं जाता।",
              hg: "Asli input ab bhi chalta hai: Asha ke liye 1 row. O'Brien jaise naam bhi chalte hain, kyunki text se kuch hataya nahi jaata."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>\"Cleaning\" input by removing quote characters. It breaks real names like O'Brien and it is not a defence.</li><li>Using <code>FromSqlRaw($\"... {typed}\")</code>. The <code>$</code> builds a plain string first, so it is concatenation in disguise. Use <code>FromSql</code>, or <code>FromSqlRaw</code> with explicit parameters.</li><li>Trying to pass a table name, column name or <code>ORDER BY</code> as a parameter. It does not work; map the user's choice to a fixed list in code (see the exercise).</li></ul>",
          hi: "<ul><li>Quote हटाकर input \"साफ़\" करना। इससे O'Brien जैसे असली नाम टूटते हैं और यह कोई बचाव नहीं है।</li><li><code>FromSqlRaw($\"... {typed}\")</code> लिखना। <code>$</code> पहले एक सादी string बना देता है, यानी यह वेश बदली हुई concatenation है। <code>FromSql</code> लो, या <code>FromSqlRaw</code> साफ़ parameters के साथ।</li><li>Table का नाम, column का नाम या <code>ORDER BY</code> को parameter बनाने की कोशिश। यह चलता नहीं; user की पसंद को code में तय list से मिलाओ (exercise देखो)।</li></ul>",
          hg: "<ul><li>Quote hatakar input \"saaf\" karna. Isse O'Brien jaise asli naam tootte hain aur ye koi bachaav nahi hai.</li><li><code>FromSqlRaw($\"... {typed}\")</code> likhna. <code>$</code> pehle ek saadi string bana deta hai, yaani ye vesh badli hui concatenation hai. <code>FromSql</code> lo, ya <code>FromSqlRaw</code> saaf parameters ke saath.</li><li>Table ka naam, column ka naam ya <code>ORDER BY</code> ko parameter banane ki koshish. Ye chalta nahi; user ki pasand ko code mein tay list se milao (exercise dekho).</li></ul>"
        },
        whenToUse: {
          en: "<p>Parameters are always on, for every query that includes outside text: ADO.NET parameters, Dapper's anonymous object, EF Core LINQ (already parameterised) or <code>FromSql</code>. Also give the app's database login only the rights it needs, so a mistake cannot drop tables.</p>",
          hi: "<p>Parameters हमेशा चालू रहते हैं, बाहर के text वाली हर query में: ADO.NET parameters, Dapper का anonymous object, EF Core LINQ (पहले से parameterised) या <code>FromSql</code>। App के database login को सिर्फ़ ज़रूरी हक़ दो, ताकि कोई चूक tables न उड़ा सके।</p>",
          hg: "<p>Parameters hamesha chalu rehte hain, bahar ke text wali har query mein: ADO.NET parameters, Dapper ka anonymous object, EF Core LINQ (pehle se parameterised) ya <code>FromSql</code>. App ke database login ko sirf zaroori haq do, taaki koi chook tables na uda sake.</p>"
        },
        exercise: {
          task: {
            en: "<p>A \"sort by\" box lets the user type a column name, and a parameter cannot hold a column name. Write an <code>OrderBy</code> function that maps <code>\"id\"</code> and <code>\"customer\"</code> to the real column names and falls back to <code>Id</code> for anything else. Print the SQL for <code>customer</code>, <code>id</code> and <code>Customer; DROP TABLE Tickets</code>.</p>",
            hi: "<p>\"Sort by\" box में user column का नाम लिख सकता है, और parameter में column का नाम नहीं जा सकता। एक <code>OrderBy</code> function लिखो जो <code>\"id\"</code> और <code>\"customer\"</code> को असली column नामों से मिलाए और बाक़ी हर चीज़ पर <code>Id</code> पर लौट आए। <code>customer</code>, <code>id</code> और <code>Customer; DROP TABLE Tickets</code> के लिए SQL print करो।</p>",
            hg: "<p>\"Sort by\" box mein user column ka naam likh sakta hai, aur parameter mein column ka naam nahi ja sakta. Ek <code>OrderBy</code> function likho jo <code>\"id\"</code> aur <code>\"customer\"</code> ko asli column naamon se milaye aur baaki har cheez par <code>Id</code> par laut aaye. <code>customer</code>, <code>id</code> aur <code>Customer; DROP TABLE Tickets</code> ke liye SQL print karo.</p>"
          },
          hint: {
            en: "<p>A <code>switch</code> expression with a <code>_ =&gt;</code> default arm. Only your own constants ever reach the SQL text.</p>",
            hi: "<p>एक <code>switch</code> expression, आख़िर में <code>_ =&gt;</code> default arm के साथ। SQL text में सिर्फ़ आपके अपने constants पहुँचते हैं।</p>",
            hg: "<p>Ek <code>switch</code> expression, aakhir mein <code>_ =&gt;</code> default arm ke saath. SQL text mein sirf aapke apne constants pahunchte hain.</p>"
          },
          solution: {
            caption: {
              en: "Solution: an allow-list for ORDER BY",
              hi: "हल: ORDER BY के लिए allow-list",
              hg: "Hal: ORDER BY ke liye allow-list"
            },
            src: "// Parameters cannot carry a column name, so map the user's choice to a fixed list.\nstring OrderBy(string choice) => choice switch\n{\n    \"id\" => \"Id\",\n    \"customer\" => \"Customer\",\n    _ => \"Id\"                              // anything else falls back to the default\n};\n\nforeach (var typed in new[] { \"customer\", \"id\", \"Customer; DROP TABLE Tickets\" })\n    Console.WriteLine($\"{typed} -> SELECT Id FROM Tickets ORDER BY {OrderBy(typed)}\");\n",
            check: "run",
            expected: "customer -> SELECT Id FROM Tickets ORDER BY Customer\nid -> SELECT Id FROM Tickets ORDER BY Id\nCustomer; DROP TABLE Tickets -> SELECT Id FROM Tickets ORDER BY Id"
          }
        },
        quiz: {
          q: {
            en: "<p>Why does a parameter stop the attacker's quote from changing the query?</p>",
            hi: "<p>Parameter attacker के quote को query बदलने से क्यों रोकता है?</p>",
            hg: "<p>Parameter attacker ke quote ko query badalne se kyun rokta hai?</p>"
          },
          options: [
            {
              en: "The query runs faster, so there is no time left for an attack",
              hi: "Query तेज़ चलती है, इसलिए attack के लिए समय ही नहीं बचता",
              hg: "Query tez chalti hai, isliye attack ke liye samay hi nahi bachta"
            },
            {
              en: "The driver removes every quote character from the value first",
              hi: "Driver पहले value से हर quote character हटा देता है",
              hg: "Driver pehle value se har quote character hata deta hai"
            },
            {
              en: "Parameters encrypt the value before it reaches the database",
              hi: "Parameters value को database तक पहुँचने से पहले encrypt करते हैं",
              hg: "Parameters value ko database tak pahunchne se pehle encrypt karte hain"
            },
            {
              en: "The SQL text is fixed; the value travels separately, as data",
              hi: "SQL text तय रहता है; value अलग से, data की तरह जाती है",
              hg: "SQL text tay rehta hai; value alag se, data ki tarah jaati hai"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>The structure of the query never depends on the value. Nothing is deleted or encrypted; the quote stays a plain character inside a name, so <code>Asha' OR '1'='1</code> simply matches no customer.</p>",
            hi: "<p>Query का ढाँचा value पर कभी निर्भर नहीं करता। कुछ मिटाया या encrypt नहीं होता; quote नाम के अंदर एक सादा अक्षर रहता है, इसलिए <code>Asha' OR '1'='1</code> किसी customer से मेल ही नहीं खाता।</p>",
            hg: "<p>Query ka dhaancha value par kabhi nirbhar nahi karta. Kuch mitaya ya encrypt nahi hota; quote naam ke andar ek saada akshar rehta hai, isliye <code>Asha' OR '1'='1</code> kisi customer se mel hi nahi khata.</p>"
          }
        },
        recap: {
          en: "<ul><li>Never glue user text into SQL; send it as a parameter (<code>FromSql</code> in EF Core).</li><li>Parameters cannot hold table or column names; map the choice to a fixed list in code.</li><li>Do not \"clean\" quotes out of input; it breaks real names and is not a defence.</li></ul>",
          hi: "<ul><li>User का text कभी SQL में मत जोड़ो; parameter की तरह भेजो (EF Core में <code>FromSql</code>)।</li><li>Parameter में table या column का नाम नहीं जा सकता; पसंद को code की तय list से मिलाओ।</li><li>Input से quotes \"साफ़\" मत करो; इससे असली नाम टूटते हैं और यह बचाव नहीं है।</li></ul>",
          hg: "<ul><li>User ka text kabhi SQL mein mat jodo; parameter ki tarah bhejo (EF Core mein <code>FromSql</code>).</li><li>Parameter mein table ya column ka naam nahi ja sakta; pasand ko code ki tay list se milao.</li><li>Input se quotes \"saaf\" mat karo; isse asli naam tootte hain aur ye bachaav nahi hai.</li></ul>"
        }
      }
    },
    {
      id: "output-encoding",
      depth: "short",
      title: {
        en: "XSS: encode output for the page",
        hi: "XSS: page के हिसाब से output को encode करो",
        hg: "XSS: page ke hisaab se output ko encode karo"
      },
      code: [
        {
          caption: {
            en: "A ticket with a script tag: pasted into HTML vs HtmlEncoder",
            hi: "Script tag वाली ticket: HTML में सीधे चिपकाना बनाम HtmlEncoder",
            hg: "Script tag wali ticket: HTML mein seedhe chipkana banaam HtmlEncoder"
          },
          src: "using System.Text.Encodings.Web;\n\n// A customer typed this into the \"describe your problem\" box\nstring issue = \"<img src=x onerror=alert('stolen')> & router is slow\";\n\n// BAD: the text becomes part of the HTML, so the agent's browser would run the onerror script\nstring bad = \"<td>\" + issue + \"</td>\";\n\n// GOOD: encode for the HTML context (Razor's @Model.Issue does this for you)\nstring good = \"<td>\" + HtmlEncoder.Default.Encode(issue) + \"</td>\";\n\nConsole.WriteLine(\"bad : \" + bad);\nConsole.WriteLine(\"good: \" + good);\nConsole.WriteLine(\"encoded text is longer: \" + (good.Length > bad.Length));\n",
          check: "run",
          expected: "bad : <td><img src=x onerror=alert('stolen')> & router is slow</td>\ngood: <td>&lt;img src=x onerror=alert(&#x27;stolen&#x27;)&gt; &amp; router is slow</td>\nencoded text is longer: True"
        }
      ],
      lesson: {
        buildsOn: {
          en: "<p>Lesson 3 kept text from running as SQL. XSS is the same idea one step later: the ticket text is saved safely, but when the agent opens the page it must not run as HTML or script. Day 23 and Day 24 showed <code>innerHTML</code> in JavaScript and React; here the encoding happens on the server.</p>",
          hi: "<p>Lesson 3 ने text को SQL की तरह चलने से रोका। XSS वही बात एक क़दम आगे है: ticket का text सुरक्षित सेव हो गया, पर जब agent page खोले तो वह HTML या script की तरह नहीं चलना चाहिए। Day 23 और Day 24 में JavaScript और React का <code>innerHTML</code> आया था; यहाँ encoding server पर होती है।</p>",
          hg: "<p>Lesson 3 ne text ko SQL ki tarah chalne se roka. XSS wahi baat ek kadam aage hai: ticket ka text surakshit save ho gaya, par jab agent page khole to woh HTML ya script ki tarah nahi chalna chahiye. Day 23 aur Day 24 mein JavaScript aur React ka <code>innerHTML</code> aaya tha; yahan encoding server par hoti hai.</p>"
        },
        what: {
          en: "<p><b>XSS</b> (cross-site scripting) means untrusted text lands in a page as HTML or script and runs in someone else's browser.</p><p>The fix is <b>output encoding</b>: before putting text into HTML, turn <code>&lt;</code>, <code>&gt;</code>, <code>&amp;</code> and quotes into harmless entities. The browser then shows the characters instead of running them.</p>",
          hi: "<p><b>XSS</b> (cross-site scripting) का मतलब: बाहर का text page में HTML या script बनकर पहुँचता है और किसी और के browser में चलता है।</p><p>इलाज है <b>output encoding</b>: text को HTML में रखने से पहले <code>&lt;</code>, <code>&gt;</code>, <code>&amp;</code> और quotes को बेअसर entities में बदल दो। Browser तब उन्हें चलाने की बजाय अक्षरों की तरह दिखाता है।</p>",
          hg: "<p><b>XSS</b> (cross-site scripting) ka matlab: bahar ka text page mein HTML ya script banakar pahunchta hai aur kisi aur ke browser mein chalta hai.</p><p>Ilaaj hai <b>output encoding</b>: text ko HTML mein rakhne se pehle <code>&lt;</code>, <code>&gt;</code>, <code>&amp;</code> aur quotes ko beasar entities mein badal do. Browser tab unhe chalane ki bajay aksharon ki tarah dikhata hai.</p>"
        },
        why: {
          en: "<p>A customer can type a script into a ticket. When an agent opens it, that script runs with the agent's login and can read or change other tickets. One encoded line prevents it.</p>",
          hi: "<p>Customer ticket में script लिख सकता है। Agent जब उसे खोलता है तो वह script agent के login के साथ चलती है और दूसरी tickets पढ़ या बदल सकती है। Encode की हुई एक line इसे रोक देती है।</p>",
          hg: "<p>Customer ticket mein script likh sakta hai. Agent jab use kholta hai to woh script agent ke login ke saath chalti hai aur doosri tickets padh ya badal sakti hai. Encode ki hui ek line ise rok deti hai.</p>"
        },
        analogy: {
          en: "<p>A shop has a notice board that shows whatever customers write. Someone sticks a fake note, \"pay at this number\". Behind a <b>glass frame</b> the note is only <i>shown</i>: people can read the words, but the note cannot act. Encoding puts every customer note behind glass.</p>",
          hi: "<p>एक दुकान में notice board है जिस पर customers जो लिखें वह लगता है। कोई नक़ली पर्ची चिपका देता है, \"इस नंबर पर पैसे दो\"। <b>शीशे के फ़्रेम</b> के पीछे पर्ची सिर्फ़ <i>दिखती</i> है: लोग शब्द पढ़ लेते हैं, पर पर्ची कुछ कर नहीं सकती। Encoding हर customer की पर्ची को शीशे के पीछे रख देती है।</p>",
          hg: "<p>Ek dukaan mein notice board hai jis par customers jo likhein woh lagta hai. Koi nakli parchi chipka deta hai, \"is number par paise do\". <b>Sheeshe ke frame</b> ke peechhe parchi sirf <i>dikhti</i> hai: log shabd padh lete hain, par parchi kuch kar nahi sakti. Encoding har customer ki parchi ko sheeshe ke peechhe rakh deti hai.</p>"
        },
        focus: {
          caption: {
            en: "Razor does this for you; Html.Raw switches it off (not run here)",
            hi: "Razor यह अपने आप करता है; Html.Raw इसे बंद कर देता है (यहाँ run नहीं होता)",
            hg: "Razor ye apne aap karta hai; Html.Raw ise band kar deta hai (yahan run nahi hota)"
          },
          lang: "html",
          src: "<td>@Model.Issue</td>            @* safe: Razor HTML-encodes the text *@\n<td>@Html.Raw(Model.Issue)</td>   @* DANGEROUS: the text is written as HTML *@\n",
          check: "none"
        },
        lines: [
          {
            code: "using System.Text.Encodings.Web;",
            note: {
              en: "This namespace holds <code>HtmlEncoder</code>, <code>UrlEncoder</code> and <code>JavaScriptEncoder</code>. Pick the encoder that matches where the text lands.",
              hi: "इस namespace में <code>HtmlEncoder</code>, <code>UrlEncoder</code> और <code>JavaScriptEncoder</code> हैं। वह encoder चुनो जो उस जगह से मेल खाए जहाँ text जाएगा।",
              hg: "Is namespace mein <code>HtmlEncoder</code>, <code>UrlEncoder</code> aur <code>JavaScriptEncoder</code> hain. Woh encoder chuno jo us jagah se mel khaye jahan text jaayega."
            }
          },
          {
            code: "string issue = \"<img src=x onerror=alert('stolen')> & router is slow\";",
            note: {
              en: "What the customer typed: a broken image whose <code>onerror</code> runs script, plus a real problem description.",
              hi: "Customer ने जो लिखा: एक टूटी image जिसका <code>onerror</code> script चलाता है, और साथ में असली problem का बयान।",
              hg: "Customer ne jo likha: ek tooti image jiska <code>onerror</code> script chalata hai, aur saath mein asli problem ka bayaan."
            }
          },
          {
            code: "string bad = \"<td>\" + issue + \"</td>\";",
            note: {
              en: "The bad way: the text becomes part of the HTML, so the agent's browser would run the script.",
              hi: "बुरा तरीक़ा: text HTML का हिस्सा बन जाता है, इसलिए agent का browser script चला देगा।",
              hg: "Bura tareeqa: text HTML ka hissa ban jaata hai, isliye agent ka browser script chala dega."
            }
          },
          {
            code: "string good = \"<td>\" + HtmlEncoder.Default.Encode(issue) + \"</td>\";",
            note: {
              en: "The good way: encode the text for the HTML context. Razor's <code>@Model.Issue</code> does exactly this.",
              hi: "अच्छा तरीक़ा: text को HTML context के लिए encode करो। Razor का <code>@Model.Issue</code> ठीक यही करता है।",
              hg: "Accha tareeqa: text ko HTML context ke liye encode karo. Razor ka <code>@Model.Issue</code> theek yahi karta hai."
            }
          },
          {
            code: "Console.WriteLine(\"good: \" + good);",
            note: {
              en: "The output shows <code>&amp;lt;</code>, <code>&amp;gt;</code>, <code>&amp;#x27;</code> and <code>&amp;amp;</code>. The browser displays the characters and runs nothing.",
              hi: "Output में <code>&amp;lt;</code>, <code>&amp;gt;</code>, <code>&amp;#x27;</code> और <code>&amp;amp;</code> दिखते हैं। Browser अक्षर दिखाता है और कुछ चलाता नहीं।",
              hg: "Output mein <code>&amp;lt;</code>, <code>&amp;gt;</code>, <code>&amp;#x27;</code> aur <code>&amp;amp;</code> dikhte hain. Browser akshar dikhata hai aur kuch chalata nahi."
            }
          },
          {
            code: "Console.WriteLine(\"encoded text is longer: \" + (good.Length > bad.Length));",
            note: {
              en: "Prints True: entities are longer than the characters they replace. The stored ticket text stays unchanged; only the page copy is encoded.",
              hi: "True print होता है: entities अपने अक्षरों से लंबी होती हैं। Stored ticket का text वैसा ही रहता है; सिर्फ़ page वाली copy encode होती है।",
              hg: "True print hota hai: entities apne aksharon se lambi hoti hain. Stored ticket ka text waisa hi rehta hai; sirf page wali copy encode hoti hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Using <code>Html.Raw</code>, <code>MarkupString</code> or <code>innerHTML</code> with customer text. These switch the protection off.</li><li>Encoding before saving to the database. Save the original text and encode when you write it to a page.</li><li>Using the HTML encoder everywhere. Text inside a script block needs <code>JavaScriptEncoder</code>, and text inside a URL needs <code>UrlEncoder</code>.</li></ul>",
          hi: "<ul><li>Customer के text के साथ <code>Html.Raw</code>, <code>MarkupString</code> या <code>innerHTML</code> इस्तेमाल करना। ये सुरक्षा बंद कर देते हैं।</li><li>Database में सेव करने से पहले encode करना। असली text सेव करो और page पर लिखते समय encode करो।</li><li>हर जगह HTML encoder लगा देना। Script block के अंदर के text को <code>JavaScriptEncoder</code> चाहिए और URL के अंदर के text को <code>UrlEncoder</code>।</li></ul>",
          hg: "<ul><li>Customer ke text ke saath <code>Html.Raw</code>, <code>MarkupString</code> ya <code>innerHTML</code> istemaal karna. Ye suraksha band kar dete hain.</li><li>Database mein save karne se pehle encode karna. Asli text save karo aur page par likhte samay encode karo.</li><li>Har jagah HTML encoder laga dena. Script block ke andar ke text ko <code>JavaScriptEncoder</code> chahiye aur URL ke andar ke text ko <code>UrlEncoder</code>.</li></ul>"
        },
        whenToUse: {
          en: "<p>Always encode when untrusted text goes into a page. In Razor and Blazor this is automatic, so the rule is: do not bypass it. Add a <code>Content-Security-Policy</code> header as a second layer (see the Deep Dive), never as a replacement for encoding.</p>",
          hi: "<p>जब भी बाहर का text page में जाए, encode करो। Razor और Blazor में यह अपने आप होता है, इसलिए rule है: इसे बायपास मत करो। दूसरी परत के तौर पर <code>Content-Security-Policy</code> header लगाओ (Deep Dive देखो), encoding की जगह कभी नहीं।</p>",
          hg: "<p>Jab bhi bahar ka text page mein jaaye, encode karo. Razor aur Blazor mein ye apne aap hota hai, isliye rule hai: ise bypass mat karo. Doosri parat ke taur par <code>Content-Security-Policy</code> header lagao (Deep Dive dekho), encoding ki jagah kabhi nahi.</p>"
        },
        exercise: {
          task: {
            en: "<p>A form field is written as <code>&lt;input value=\"...\"&gt;</code>. A customer types <code>Asha\" onfocus=\"steal()</code> as the name. Build the tag the bad way and the good way, and print both.</p>",
            hi: "<p>Form का एक field <code>&lt;input value=\"...\"&gt;</code> की तरह लिखा जाता है। Customer नाम में <code>Asha\" onfocus=\"steal()</code> लिख देता है। Tag को बुरे तरीक़े से भी बनाओ और अच्छे तरीक़े से भी, और दोनों print करो।</p>",
            hg: "<p>Form ka ek field <code>&lt;input value=\"...\"&gt;</code> ki tarah likha jaata hai. Customer naam mein <code>Asha\" onfocus=\"steal()</code> likh deta hai. Tag ko bure tareeqe se bhi banao aur achhe tareeqe se bhi, aur dono print karo.</p>"
          },
          hint: {
            en: "<p>Encode only the name, not the whole tag. The encoder turns each <code>\"</code> into <code>&amp;quot;</code>, so the value cannot be closed early.</p>",
            hi: "<p>सिर्फ़ नाम को encode करो, पूरे tag को नहीं। Encoder हर <code>\"</code> को <code>&amp;quot;</code> बना देता है, इसलिए value समय से पहले बंद नहीं हो सकती।</p>",
            hg: "<p>Sirf naam ko encode karo, poore tag ko nahi. Encoder har <code>\"</code> ko <code>&amp;quot;</code> bana deta hai, isliye value samay se pehle band nahi ho sakti.</p>"
          },
          solution: {
            caption: {
              en: "Solution: encoding inside an HTML attribute",
              hi: "हल: HTML attribute के अंदर encoding",
              hg: "Hal: HTML attribute ke andar encoding"
            },
            src: "using System.Text.Encodings.Web;\n\nstring name = \"Asha\\\" onfocus=\\\"steal()\";      // tries to break out of the value=\"...\" attribute\n\nstring bad = \"<input value=\\\"\" + name + \"\\\">\";\nstring good = \"<input value=\\\"\" + HtmlEncoder.Default.Encode(name) + \"\\\">\";\n\nConsole.WriteLine(\"bad : \" + bad);\nConsole.WriteLine(\"good: \" + good);\n",
            check: "run",
            expected: "bad : <input value=\"Asha\" onfocus=\"steal()\">\ngood: <input value=\"Asha&quot; onfocus=&quot;steal()\">"
          }
        },
        quiz: {
          q: {
            en: "<p>When should you HTML-encode a customer's ticket text?</p>",
            hi: "<p>Customer की ticket का text HTML-encode कब करना चाहिए?</p>",
            hg: "<p>Customer ki ticket ka text HTML-encode kab karna chahiye?</p>"
          },
          options: [
            {
              en: "Once, before saving it, so every later read is already safe",
              hi: "एक बार, सेव करने से पहले, ताकि आगे हर read पहले से safe हो",
              hg: "Ek baar, save karne se pehle, taaki aage har read pehle se safe ho"
            },
            {
              en: "When writing it into the page; the database keeps the original",
              hi: "Page में लिखते समय; database में असली text रहता है",
              hg: "Page mein likhte samay; database mein asli text rehta hai"
            },
            {
              en: "Never, because <code>Html.Raw</code> already encodes the text",
              hi: "कभी नहीं, क्योंकि <code>Html.Raw</code> text को पहले ही encode करता है",
              hg: "Kabhi nahi, kyunki <code>Html.Raw</code> text ko pehle hi encode karta hai"
            },
            {
              en: "Only on admin pages, because customers see only their own tickets",
              hi: "सिर्फ़ admin pages पर, क्योंकि customers सिर्फ़ अपनी tickets देखते हैं",
              hg: "Sirf admin pages par, kyunki customers sirf apni tickets dekhte hain"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>Encoding depends on where the text lands, so do it at output time. Saving encoded text corrupts the data for other uses (e-mail, search, export). <code>Html.Raw</code> does the opposite of encoding: it writes the text as HTML.</p>",
            hi: "<p>Encoding इस पर निर्भर है कि text कहाँ जा रहा है, इसलिए यह output के समय करो। Encode किया text सेव करने से दूसरे कामों (e-mail, search, export) के लिए data बिगड़ जाता है। <code>Html.Raw</code> encoding का उलटा करता है: text को HTML की तरह लिख देता है।</p>",
            hg: "<p>Encoding is par nirbhar hai ki text kahan ja raha hai, isliye ye output ke samay karo. Encode kiya text save karne se doosre kaamon (e-mail, search, export) ke liye data bigad jaata hai. <code>Html.Raw</code> encoding ka ulta karta hai: text ko HTML ki tarah likh deta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>XSS: untrusted text becomes HTML or script in someone's browser.</li><li>Encode at output time with the encoder that matches the context; Razor does it by default.</li><li>Avoid <code>Html.Raw</code>, <code>MarkupString</code> and <code>innerHTML</code> for customer text.</li></ul>",
          hi: "<ul><li>XSS: बाहर का text किसी के browser में HTML या script बन जाता है।</li><li>Output के समय context से मेल खाते encoder से encode करो; Razor यह default में करता है।</li><li>Customer के text के लिए <code>Html.Raw</code>, <code>MarkupString</code> और <code>innerHTML</code> से बचो।</li></ul>",
          hg: "<ul><li>XSS: bahar ka text kisi ke browser mein HTML ya script ban jaata hai.</li><li>Output ke samay context se mel khate encoder se encode karo; Razor ye default mein karta hai.</li><li>Customer ke text ke liye <code>Html.Raw</code>, <code>MarkupString</code> aur <code>innerHTML</code> se bacho.</li></ul>"
        }
      }
    },
    {
      id: "password-hashing",
      depth: "short",
      title: {
        en: "Passwords: slow, salted hash and constant-time compare",
        hi: "Passwords: slow, salted hash और constant-time compare",
        hg: "Passwords: slow, salted hash aur constant-time compare"
      },
      code: [
        {
          caption: {
            en: "A fast hash vs PBKDF2 with a salt, and a login check with FixedTimeEquals",
            hi: "Fast hash बनाम salt वाला PBKDF2, और FixedTimeEquals से login check",
            hg: "Fast hash banaam salt wala PBKDF2, aur FixedTimeEquals se login check"
          },
          src: "using System.Security.Cryptography;\nusing System.Text;\n\n// Demo salts are fixed so the output is stable. A real app uses RandomNumberGenerator.GetBytes(16) per user and stores it next to the hash.\nbyte[] ashaSalt = Encoding.UTF8.GetBytes(\"salt-for-asha-16\");\nbyte[] raviSalt = Encoding.UTF8.GetBytes(\"salt-for-ravi-16\");\n\nbyte[] Slow(string password, byte[] salt) =>\n    Rfc2898DeriveBytes.Pbkdf2(password, salt, 600_000, HashAlgorithmName.SHA256, 32);\n\nbyte[] Fast(string password) => SHA256.HashData(Encoding.UTF8.GetBytes(password));\n\nbool Same(byte[] a, byte[] b) => CryptographicOperations.FixedTimeEquals(a, b);   // never == or SequenceEqual for secrets\n\n// BAD: fast and unsalted, so two customers with the same password get the same hash\nstring ashaPassword = \"welcome123\", raviPassword = \"welcome123\";   // two customers, same weak habit\nConsole.WriteLine(\"fast hashes equal: \" + Same(Fast(ashaPassword), Fast(raviPassword)));\n\n// GOOD: slow and salted, so the same password gives different hashes\nbyte[] ashaHash = Slow(ashaPassword, ashaSalt);\nbyte[] raviHash = Slow(raviPassword, raviSalt);\nConsole.WriteLine(\"slow hashes equal: \" + Same(ashaHash, raviHash));\n\nbool Login(string typed, byte[] salt, byte[] stored) =>\n    Same(Slow(typed, salt), stored);   // hash what was typed, then compare in constant time\n\nConsole.WriteLine(\"Asha right password: \" + Login(\"welcome123\", ashaSalt, ashaHash));\nConsole.WriteLine(\"Asha wrong password: \" + Login(\"welcome124\", ashaSalt, ashaHash));\nConsole.WriteLine(\"hash length in bytes: \" + ashaHash.Length);\n",
          check: "run",
          expected: "fast hashes equal: True\nslow hashes equal: False\nAsha right password: True\nAsha wrong password: False\nhash length in bytes: 32"
        }
      ],
      lesson: {
        buildsOn: {
          en: "<p>Lessons 3 and 4 stopped attacker text from running as SQL or HTML. Lesson 5 assumes the worst: the database or a backup has leaked. What does the attacker find in the password column? Day 13 covered tokens and JWT; here we look at what the CRM stores for an agent's password.</p>",
          hi: "<p>Lessons 3 और 4 ने attacker के text को SQL या HTML की तरह चलने से रोका। Lesson 5 सबसे बुरा मानकर चलता है: database या backup leak हो गया। Attacker को password column में क्या मिलेगा? Day 13 में tokens और JWT आए थे; यहाँ देखते हैं कि CRM agent के password के लिए क्या सेव करता है।</p>",
          hg: "<p>Lessons 3 aur 4 ne attacker ke text ko SQL ya HTML ki tarah chalne se roka. Lesson 5 sabse bura maanakar chalta hai: database ya backup leak ho gaya. Attacker ko password column mein kya milega? Day 13 mein tokens aur JWT aaye the; yahan dekhte hain ki CRM agent ke password ke liye kya save karta hai.</p>"
        },
        what: {
          en: "<p>Never store the password. Store a <b>slow, salted hash</b> of it.</p><p>A <b>salt</b> is random bytes mixed in per user, so the same password gives a different hash. <b>Slow</b> means a function like PBKDF2 that repeats the work many times, so each guess costs the attacker real time.</p>",
          hi: "<p>Password कभी सेव मत करो। उसका <b>slow, salted hash</b> सेव करो।</p><p><b>Salt</b> हर user के लिए अलग random bytes हैं जो मिलाए जाते हैं, इसलिए एक ही password का hash अलग बनता है। <b>Slow</b> यानी PBKDF2 जैसा function जो काम कई बार दोहराता है, इसलिए attacker की हर कोशिश में असली समय लगता है।</p>",
          hg: "<p>Password kabhi save mat karo. Uska <b>slow, salted hash</b> save karo.</p><p><b>Salt</b> har user ke liye alag random bytes hain jo milaye jaate hain, isliye ek hi password ka hash alag banta hai. <b>Slow</b> yaani PBKDF2 jaisa function jo kaam kai baar dohraata hai, isliye attacker ki har koshish mein asli samay lagta hai.</p>"
        },
        why: {
          en: "<p>Leaks happen. With a fast, unsalted hash such as SHA-256, attackers try billions of guesses per second and spot customers who share a password. With a slow, salted hash the same leak is far less useful.</p><p>Comparing hashes with <code>==</code> can leak timing; <code>FixedTimeEquals</code> takes the same time wherever the bytes differ.</p>",
          hi: "<p>Leak होते रहते हैं। SHA-256 जैसे fast, बिना salt वाले hash पर attacker एक second में अरबों अंदाज़े लगाते हैं और पहचान लेते हैं कि कौन-से customers का password एक ही है। Slow, salted hash के साथ वही leak बहुत कम काम का रहता है।</p><p>Hashes को <code>==</code> से compare करने पर समय से जानकारी निकल सकती है; <code>FixedTimeEquals</code> उतना ही समय लेता है चाहे bytes कहीं भी अलग हों।</p>",
          hg: "<p>Leak hote rehte hain. SHA-256 jaise fast, bina salt wale hash par attacker ek second mein arabon andaaze lagate hain aur pehchaan lete hain ki kaunse customers ka password ek hi hai. Slow, salted hash ke saath wahi leak bahut kam kaam ka rehta hai.</p><p>Hashes ko <code>==</code> se compare karne par samay se jaankari nikal sakti hai; <code>FixedTimeEquals</code> utna hi samay leta hai chahe bytes kahin bhi alag hon.</p>"
        },
        analogy: {
          en: "<p>A good locker room stores a copy of your <b>lock's pattern</b>, not your key. If thieves steal the register they cannot open your locker. A password hash is that pattern. A <b>slow, salted</b> hash means each locker needs its own long effort to crack.</p>",
          hi: "<p>अच्छा locker room आपकी <b>ताले का pattern</b> रखता है, आपकी चाबी नहीं। चोर register चुरा लें तो भी आपका locker नहीं खोल सकते। Password hash वही pattern है। <b>Slow, salted</b> hash का मतलब है कि हर locker तोड़ने के लिए अलग से लंबी मेहनत चाहिए।</p>",
          hg: "<p>Achha locker room aapke <b>taale ka pattern</b> rakhta hai, aapki chaabi nahi. Chor register chura lein to bhi aapka locker nahi khol sakte. Password hash wahi pattern hai. <b>Slow, salted</b> hash ka matlab hai ki har locker todne ke liye alag se lambi mehnat chahiye.</p>"
        },
        lines: [
          {
            code: "byte[] ashaSalt = Encoding.UTF8.GetBytes(\"salt-for-asha-16\");",
            note: {
              en: "Demo salts are fixed so the output is stable. A real app uses <code>RandomNumberGenerator.GetBytes(16)</code> per user and stores the salt next to the hash.",
              hi: "Demo में salts तय हैं ताकि output एक जैसा रहे। असली app हर user के लिए <code>RandomNumberGenerator.GetBytes(16)</code> लेती है और salt को hash के पास सेव करती है।",
              hg: "Demo mein salts tay hain taaki output ek jaisa rahe. Asli app har user ke liye <code>RandomNumberGenerator.GetBytes(16)</code> leti hai aur salt ko hash ke paas save karti hai."
            }
          },
          {
            code: "Rfc2898DeriveBytes.Pbkdf2(password, salt, 600_000, HashAlgorithmName.SHA256, 32);",
            note: {
              en: "PBKDF2 with 600,000 iterations and SHA-256 (the OWASP guidance for this setup), giving 32 bytes. The iteration count is the \"slow\" part.",
              hi: "PBKDF2, 600,000 iterations और SHA-256 के साथ (इस setup के लिए OWASP की सलाह), जो 32 bytes देता है। Iteration की गिनती ही \"slow\" वाला हिस्सा है।",
              hg: "PBKDF2, 600,000 iterations aur SHA-256 ke saath (is setup ke liye OWASP ki salaah), jo 32 bytes deta hai. Iteration ki ginti hi \"slow\" wala hissa hai."
            }
          },
          {
            code: "byte[] Fast(string password) => SHA256.HashData(Encoding.UTF8.GetBytes(password));",
            note: {
              en: "The bad way: one fast, unsalted hash. Fine for file checksums, wrong for passwords.",
              hi: "बुरा तरीक़ा: एक fast, बिना salt का hash। File checksum के लिए ठीक, passwords के लिए ग़लत।",
              hg: "Bura tareeqa: ek fast, bina salt ka hash. File checksum ke liye theek, passwords ke liye galat."
            }
          },
          {
            code: "bool Same(byte[] a, byte[] b) => CryptographicOperations.FixedTimeEquals(a, b);",
            note: {
              en: "One helper for every secret comparison, so nobody uses <code>==</code> or <code>SequenceEqual</code> by accident.",
              hi: "हर secret की तुलना के लिए एक helper, ताकि कोई ग़लती से <code>==</code> या <code>SequenceEqual</code> न लगाए।",
              hg: "Har secret ki tulna ke liye ek helper, taaki koi galti se <code>==</code> ya <code>SequenceEqual</code> na lagaye."
            }
          },
          {
            code: "Console.WriteLine(\"fast hashes equal: \" + Same(Fast(ashaPassword), Fast(raviPassword)));",
            note: {
              en: "Prints True: two customers with the same password get the same fast hash, so a leak shows who shares a password.",
              hi: "True print होता है: एक ही password वाले दो customers को एक ही fast hash मिलता है, इसलिए leak से दिख जाता है कि कौन password share करता है।",
              hg: "True print hota hai: ek hi password wale do customers ko ek hi fast hash milta hai, isliye leak se dikh jaata hai ki kaun password share karta hai."
            }
          },
          {
            code: "Console.WriteLine(\"slow hashes equal: \" + Same(ashaHash, raviHash));",
            note: {
              en: "Prints False: different salts make the same password look different in the database.",
              hi: "False print होता है: अलग salts एक ही password को database में अलग दिखाते हैं।",
              hg: "False print hota hai: alag salts ek hi password ko database mein alag dikhate hain."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Using SHA-256, SHA-1 or MD5 for passwords, even \"with a salt\". They are built to be fast, and fast helps the attacker.</li><li>Comparing secrets with <code>==</code> or <code>SequenceEqual</code>. Use <code>CryptographicOperations.FixedTimeEquals</code>.</li><li>Inventing your own scheme, or writing your own login at all. Use ASP.NET Core Identity or an external provider.</li></ul>",
          hi: "<ul><li>Passwords के लिए SHA-256, SHA-1 या MD5 लगाना, \"salt के साथ\" भी। ये तेज़ चलने के लिए बने हैं, और तेज़ होना attacker के काम आता है।</li><li>Secrets को <code>==</code> या <code>SequenceEqual</code> से compare करना। <code>CryptographicOperations.FixedTimeEquals</code> लो।</li><li>अपनी ही scheme बनाना, या अपना login ही लिखना। ASP.NET Core Identity या बाहरी provider लो।</li></ul>",
          hg: "<ul><li>Passwords ke liye SHA-256, SHA-1 ya MD5 lagana, \"salt ke saath\" bhi. Ye tez chalne ke liye bane hain, aur tez hona attacker ke kaam aata hai.</li><li>Secrets ko <code>==</code> ya <code>SequenceEqual</code> se compare karna. <code>CryptographicOperations.FixedTimeEquals</code> lo.</li><li>Apni hi scheme banana, ya apna login hi likhna. ASP.NET Core Identity ya bahari provider lo.</li></ul>"
        },
        whenToUse: {
          en: "<p>In a real CRM do not hand-roll this. ASP.NET Core Identity's <code>PasswordHasher</code> already does PBKDF2 with a random salt and can upgrade old hashes (see the Deep Dive). Use <code>FixedTimeEquals</code> whenever you compare any secret yourself: tokens, signatures, API keys.</p>",
          hi: "<p>असली CRM में यह ख़ुद मत लिखो। ASP.NET Core Identity का <code>PasswordHasher</code> पहले से random salt के साथ PBKDF2 करता है और पुराने hashes को upgrade कर सकता है (Deep Dive देखो)। जब भी कोई secret ख़ुद compare करो, <code>FixedTimeEquals</code> लो: tokens, signatures, API keys।</p>",
          hg: "<p>Asli CRM mein ye khud mat likho. ASP.NET Core Identity ka <code>PasswordHasher</code> pehle se random salt ke saath PBKDF2 karta hai aur purane hashes ko upgrade kar sakta hai (Deep Dive dekho). Jab bhi koi secret khud compare karo, <code>FixedTimeEquals</code> lo: tokens, signatures, API keys.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write <code>Register(password)</code> that makes a fresh random salt and returns the salt and the hash, and <code>Verify(typed, saved)</code>. Register Asha and Ravi with the same password, then print whether their salts differ, whether their hashes differ, and the result of a right and a wrong login for Asha.</p>",
            hi: "<p><code>Register(password)</code> लिखो जो नया random salt बनाए और salt व hash लौटाए, और <code>Verify(typed, saved)</code>। Asha और Ravi को एक ही password से register करो, फिर print करो कि उनके salts अलग हैं या नहीं, hashes अलग हैं या नहीं, और Asha के सही व ग़लत login का नतीजा।</p>",
            hg: "<p><code>Register(password)</code> likho jo naya random salt banaye aur salt va hash lautaye, aur <code>Verify(typed, saved)</code>. Asha aur Ravi ko ek hi password se register karo, phir print karo ki unke salts alag hain ya nahi, hashes alag hain ya nahi, aur Asha ke sahi va galat login ka nateeja.</p>"
          },
          hint: {
            en: "<p>Return a tuple <code>(byte[] Salt, byte[] Hash)</code>. Verify hashes the typed password with the <b>saved</b> salt, then compares with <code>FixedTimeEquals</code>. Print booleans only, because random salts change every run.</p>",
            hi: "<p>Tuple <code>(byte[] Salt, byte[] Hash)</code> लौटाओ। Verify typed password को <b>सेव किए हुए</b> salt से hash करता है, फिर <code>FixedTimeEquals</code> से compare करता है। सिर्फ़ booleans print करो, क्योंकि random salts हर बार बदलते हैं।</p>",
            hg: "<p>Tuple <code>(byte[] Salt, byte[] Hash)</code> lautao. Verify typed password ko <b>save kiye hue</b> salt se hash karta hai, phir <code>FixedTimeEquals</code> se compare karta hai. Sirf booleans print karo, kyunki random salts har baar badalte hain.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a random salt per user",
              hi: "हल: हर user का random salt",
              hg: "Hal: har user ka random salt"
            },
            src: "using System.Security.Cryptography;\nusing System.Text;\n\n// Register: a fresh random salt per user, stored together with the hash.\n(byte[] Salt, byte[] Hash) Register(string password)\n{\n    byte[] salt = RandomNumberGenerator.GetBytes(16);\n    return (salt, Rfc2898DeriveBytes.Pbkdf2(password, salt, 600_000, HashAlgorithmName.SHA256, 32));\n}\n\nbool Verify(string typed, (byte[] Salt, byte[] Hash) saved) =>\n    CryptographicOperations.FixedTimeEquals(\n        Rfc2898DeriveBytes.Pbkdf2(typed, saved.Salt, 600_000, HashAlgorithmName.SHA256, 32), saved.Hash);\n\nvar asha = Register(\"welcome123\");\nvar ravi = Register(\"welcome123\");\n\nConsole.WriteLine(\"salts differ: \" + !asha.Salt.SequenceEqual(ravi.Salt));\nConsole.WriteLine(\"hashes differ: \" + !CryptographicOperations.FixedTimeEquals(asha.Hash, ravi.Hash));\nConsole.WriteLine(\"Asha right: \" + Verify(\"welcome123\", asha));\nConsole.WriteLine(\"Asha wrong: \" + Verify(\"welcome124\", asha));\n",
            check: "run",
            expected: "salts differ: True\nhashes differ: True\nAsha right: True\nAsha wrong: False"
          }
        },
        quiz: {
          q: {
            en: "<p>Why compare two hashes with <code>CryptographicOperations.FixedTimeEquals</code> instead of <code>==</code>?</p>",
            hi: "<p>दो hashes को <code>==</code> की जगह <code>CryptographicOperations.FixedTimeEquals</code> से compare क्यों करते हैं?</p>",
            hg: "<p>Do hashes ko <code>==</code> ki jagah <code>CryptographicOperations.FixedTimeEquals</code> se compare kyun karte hain?</p>"
          },
          options: [
            {
              en: "It is faster than <code>==</code> on large arrays of hash bytes",
              hi: "Hash bytes के बड़े arrays पर यह <code>==</code> से तेज़ है",
              hg: "Hash bytes ke bade arrays par ye <code>==</code> se tez hai"
            },
            {
              en: "It mixes the salt into the comparison one more time",
              hi: "यह comparison में salt एक बार और मिला देता है",
              hg: "Ye comparison mein salt ek baar aur mila deta hai"
            },
            {
              en: "Its time does not depend on where the bytes differ",
              hi: "इसका समय इस पर निर्भर नहीं कि bytes कहाँ अलग हैं",
              hg: "Iska samay is par nirbhar nahi ki bytes kahan alag hain"
            },
            {
              en: "It decrypts the stored hash first and compares plain text",
              hi: "यह पहले stored hash को decrypt करके plain text compare करता है",
              hg: "Ye pehle stored hash ko decrypt karke plain text compare karta hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>A normal comparison stops at the first different byte, so a very small timing difference can tell an attacker how many leading bytes were right. <code>FixedTimeEquals</code> always looks at every byte. It does not decrypt anything and it is not about speed.</p>",
            hi: "<p>सामान्य comparison पहले अलग byte पर रुक जाता है, इसलिए समय का बहुत छोटा फ़र्क़ attacker को बता सकता है कि शुरू के कितने bytes सही थे। <code>FixedTimeEquals</code> हर byte देखता है। यह कुछ decrypt नहीं करता और इसका speed से कोई लेना-देना नहीं।</p>",
            hg: "<p>Saamanya comparison pehle alag byte par ruk jaata hai, isliye samay ka bahut chhota farq attacker ko bata sakta hai ki shuru ke kitne bytes sahi the. <code>FixedTimeEquals</code> har byte dekhta hai. Ye kuch decrypt nahi karta aur iska speed se koi lena-dena nahi.</p>"
          }
        },
        recap: {
          en: "<ul><li>Store a slow, salted hash (PBKDF2 or Identity's <code>PasswordHasher</code>), never the password or a fast hash.</li><li>A random salt per user makes equal passwords look different.</li><li>Compare secrets with <code>CryptographicOperations.FixedTimeEquals</code>.</li></ul>",
          hi: "<ul><li>Slow, salted hash सेव करो (PBKDF2 या Identity का <code>PasswordHasher</code>), password या fast hash कभी नहीं।</li><li>हर user का अलग random salt एक जैसे passwords को अलग दिखाता है।</li><li>Secrets को <code>CryptographicOperations.FixedTimeEquals</code> से compare करो।</li></ul>",
          hg: "<ul><li>Slow, salted hash save karo (PBKDF2 ya Identity ka <code>PasswordHasher</code>), password ya fast hash kabhi nahi.</li><li>Har user ka alag random salt ek jaise passwords ko alag dikhata hai.</li><li>Secrets ko <code>CryptographicOperations.FixedTimeEquals</code> se compare karo.</li></ul>"
        }
      }
    },
    {
      id: "threat-model",
      depth: "short",
      title: {
        en: "Threat modelling with STRIDE",
        hi: "STRIDE से threat modelling",
        hg: "STRIDE se threat modelling"
      },
      code: [
        {
          caption: {
            en: "A STRIDE table for the customer portal, scored and sorted, with owners",
            hi: "Customer portal की STRIDE table: score, sort और owners के साथ",
            hg: "Customer portal ki STRIDE table: score, sort aur owners ke saath"
          },
          src: "var threats = new List<Threat>\n{\n    new('S', \"Fake agent login\", \"stolen password used from another city\", \"MFA and lockout\", 4, 4, \"Meena\"),\n    new('T', \"Ticket text changed\", \"someone edits a request on public Wi-Fi\", \"HTTPS and HSTS\", 2, 3, \"Kiran\"),\n    new('R', \"Agent denies closing a ticket\", \"no record of who changed the status\", \"audit log with user and time\", 3, 2, \"Neha\"),\n    new('I', \"Customer data leaks\", \"one customer reads another customer's ticket\", \"ownership check on each ticket\", 4, 5, \"Meena\"),\n    new('D', \"Portal flooded\", \"a bot raises thousands of tickets\", \"rate limit and size limit\", 3, 3, \"Kiran\"),\n    new('E', \"Agent becomes admin\", \"role taken from the request body\", \"role from server-side claims\", 2, 5, \"Neha\")\n};\n\nstring Name(char c) => c switch\n{\n    'S' => \"Spoofing\", 'T' => \"Tampering\", 'R' => \"Repudiation\",\n    'I' => \"Information disclosure\", 'D' => \"Denial of service\", _ => \"Elevation of privilege\"\n};\n\nConsole.WriteLine(\"Feature: customer portal where customers raise and view tickets\");\nforeach (var t in threats.OrderByDescending(t => t.Score).ThenBy(t => t.Stride))\n    Console.WriteLine($\"{t.Score,2} {Name(t.Stride)}: {t.Attack} -> {t.Control} (owner {t.Owner})\");\n\nConsole.WriteLine(\"Tickets to create: \" + threats.Count(t => t.Score >= 9));\n\nrecord Threat(char Stride, string Title, string Attack, string Control, int Likelihood, int Impact, string Owner)\n{\n    public int Score => Likelihood * Impact;\n}\n",
          check: "run",
          expected: "Feature: customer portal where customers raise and view tickets\n20 Information disclosure: one customer reads another customer's ticket -> ownership check on each ticket (owner Meena)\n16 Spoofing: stolen password used from another city -> MFA and lockout (owner Meena)\n10 Elevation of privilege: role taken from the request body -> role from server-side claims (owner Neha)\n 9 Denial of service: a bot raises thousands of tickets -> rate limit and size limit (owner Kiran)\n 6 Repudiation: no record of who changed the status -> audit log with user and time (owner Neha)\n 6 Tampering: someone edits a request on public Wi-Fi -> HTTPS and HSTS (owner Kiran)\nTickets to create: 4"
        }
      ],
      lesson: {
        buildsOn: {
          en: "<p>Lessons 2 to 5 fixed four known bugs one by one: IDOR, SQL, XSS and passwords. Lesson 1 showed that A06 Insecure Design cannot be fixed line by line. Threat modelling finds such problems <b>before</b> code is written. Here we use it on a new CRM feature, a customer portal where customers raise and view tickets, and several threats are the lessons you just learned.</p>",
          hi: "<p>Lessons 2 से 5 ने चार जानी-पहचानी bugs एक-एक करके ठीक कीं: IDOR, SQL, XSS और passwords। Lesson 1 में दिखा कि A06 Insecure Design line-by-line ठीक नहीं होता। Threat modelling ऐसी problems <b>code लिखने से पहले</b> पकड़ती है। यहाँ हम इसे CRM के नए feature पर लगाते हैं: एक customer portal जहाँ customers ticket बनाते और देखते हैं, और कई threats वही हैं जो अभी सीखे।</p>",
          hg: "<p>Lessons 2 se 5 ne chaar jaani-pehchaani bugs ek-ek karke theek keen: IDOR, SQL, XSS aur passwords. Lesson 1 mein dikha ki A06 Insecure Design line-by-line theek nahi hota. Threat modelling aisi problems <b>code likhne se pehle</b> pakadti hai. Yahan hum ise CRM ke naye feature par lagate hain: ek customer portal jahan customers ticket banate aur dekhte hain, aur kai threats wahi hain jo abhi seekhe.</p>"
        },
        what: {
          en: "<p><b>Threat modelling</b> is a short meeting before building: draw who talks to what and where the trust boundaries are, then ask the six <b>STRIDE</b> questions at each arrow.</p><p><b>S</b>poofing, <b>T</b>ampering, <b>R</b>epudiation, <b>I</b>nformation disclosure, <b>D</b>enial of service, <b>E</b>levation of privilege. Each answer becomes a threat with a control, a score and an owner.</p>",
          hi: "<p><b>Threat modelling</b> बनाने से पहले की एक छोटी meeting है: बनाओ कि कौन किससे बात करता है और trust की सीमाएँ कहाँ हैं, फिर हर तीर पर छह <b>STRIDE</b> सवाल पूछो।</p><p><b>S</b>poofing (नक़ली पहचान), <b>T</b>ampering (data बदलना), <b>R</b>epudiation (\"मैंने नहीं किया\"), <b>I</b>nformation disclosure (data leak), <b>D</b>enial of service, <b>E</b>levation of privilege (हक़ से ज़्यादा ताक़त)। हर जवाब एक threat बनता है, जिसके साथ control, score और owner होता है।</p>",
          hg: "<p><b>Threat modelling</b> banane se pehle ki ek chhoti meeting hai: banao ki kaun kisse baat karta hai aur trust ki seemayein kahan hain, phir har teer par chhah <b>STRIDE</b> sawaal poocho.</p><p><b>S</b>poofing (nakli pehchaan), <b>T</b>ampering (data badalna), <b>R</b>epudiation (\"maine nahi kiya\"), <b>I</b>nformation disclosure (data leak), <b>D</b>enial of service, <b>E</b>levation of privilege (haq se zyada taaqat). Har jawaab ek threat banta hai, jiske saath control, score aur owner hota hai.</p>"
        },
        why: {
          en: "<p>It is cheap: 15 to 30 minutes. It finds design flaws that code review cannot, and it gives the team a ranked list so the biggest risk is fixed first instead of the most interesting one.</p>",
          hi: "<p>यह सस्ता है: 15 से 30 मिनट। यह वे design की कमियाँ पकड़ता है जो code review नहीं पकड़ता, और team को ranked list देता है, ताकि सबसे बड़ा ख़तरा पहले ठीक हो, सबसे दिलचस्प वाला नहीं।</p>",
          hg: "<p>Ye sasta hai: 15 se 30 minute. Ye woh design ki kamiyan pakadta hai jo code review nahi pakadta, aur team ko ranked list deta hai, taaki sabse bada khatra pehle theek ho, sabse dilchasp wala nahi.</p>"
        },
        analogy: {
          en: "<p>Before a wedding, the family walks through the venue asking \"where can things go wrong?\": a blocked exit, a loose wire, a crowded stage. Threat modelling is that walk-through for a feature, done <b>before</b> the guests arrive.</p>",
          hi: "<p>शादी से पहले परिवार venue में घूमकर पूछता है \"कहाँ गड़बड़ हो सकती है?\": बंद निकास, ढीला तार, भीड़ वाला stage। Threat modelling किसी feature के लिए वही चक्कर है, जो मेहमान आने से <b>पहले</b> लगता है।</p>",
          hg: "<p>Shaadi se pehle parivaar venue mein ghoomkar poochhta hai \"kahan gadbad ho sakti hai?\": band nikaas, dheela taar, bheed wala stage. Threat modelling kisi feature ke liye wahi chakkar hai, jo mehmaan aane se <b>pehle</b> lagta hai.</p>"
        },
        lines: [
          {
            code: "var threats = new List<Threat>",
            note: {
              en: "The output of the meeting: one row per threat, each with an attack, a control, likelihood and impact (1 to 5) and an owner.",
              hi: "Meeting का नतीजा: हर threat की एक row, जिसमें attack, control, likelihood और impact (1 से 5) और एक owner है।",
              hg: "Meeting ka nateeja: har threat ki ek row, jismein attack, control, likelihood aur impact (1 se 5) aur ek owner hai."
            }
          },
          {
            code: "new('I', \"Customer data leaks\", \"one customer reads another customer's ticket\", \"ownership check on each ticket\", 4, 5, \"Meena\"),",
            note: {
              en: "The Information disclosure row is lesson 2 again: the control is the ownership check (the Customer rule from its exercise), and Meena owns it.",
              hi: "Information disclosure वाली row फिर से lesson 2 है: control ownership check है (उसके exercise वाला Customer rule), और owner Meena है।",
              hg: "Information disclosure wali row phir se lesson 2 hai: control ownership check hai (uske exercise wala Customer rule), aur owner Meena hai."
            }
          },
          {
            code: "new('E', \"Agent becomes admin\", \"role taken from the request body\", \"role from server-side claims\", 2, 5, \"Neha\")",
            note: {
              en: "Unlikely (2) but terrible (5): still scores 10 and gets a ticket. Impact matters as much as likelihood.",
              hi: "कम संभावना (2) पर बहुत भयानक (5): फिर भी score 10 और एक ticket मिलती है। Impact उतना ही मायने रखता है जितनी likelihood।",
              hg: "Kam sambhavna (2) par bahut bhayanak (5): phir bhi score 10 aur ek ticket milti hai. Impact utna hi maayne rakhta hai jitni likelihood."
            }
          },
          {
            code: "public int Score => Likelihood * Impact;",
            note: {
              en: "A simple score: likelihood times impact. Simple is fine; the point is to rank, not to be exact.",
              hi: "सीधा score: likelihood गुणा impact। सीधा चलेगा; मक़सद rank करना है, बिल्कुल सही गिनना नहीं।",
              hg: "Seedha score: likelihood guna impact. Seedha chalega; maqsad rank karna hai, bilkul sahi ginna nahi."
            }
          },
          {
            code: "foreach (var t in threats.OrderByDescending(t => t.Score).ThenBy(t => t.Stride))",
            note: {
              en: "Biggest risk first. <code>ThenBy</code> breaks ties the same way every run, so the output is stable.",
              hi: "सबसे बड़ा ख़तरा पहले। <code>ThenBy</code> बराबरी को हर बार एक ही तरह तोड़ता है, इसलिए output स्थिर रहता है।",
              hg: "Sabse bada khatra pehle. <code>ThenBy</code> barabari ko har baar ek hi tarah todta hai, isliye output sthir rehta hai."
            }
          },
          {
            code: "Console.WriteLine(\"Tickets to create: \" + threats.Count(t => t.Score >= 9));",
            note: {
              en: "The team agrees a threshold, here 9. Every threat at or above it becomes a ticket with an owner and a test.",
              hi: "Team एक सीमा तय करती है, यहाँ 9। इससे ऊपर या बराबर हर threat एक ticket बनता है, owner और test के साथ।",
              hg: "Team ek seema tay karti hai, yahan 9. Isse upar ya barabar har threat ek ticket banta hai, owner aur test ke saath."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Doing it after the feature is built. Then a design flaw costs a rewrite.</li><li>Listing threats with no owner and no ticket. A list nobody owns is never fixed.</li><li>Making a huge document. Keep it to one page that the team will really read and update.</li></ul>",
          hi: "<ul><li>Feature बन जाने के बाद करना। तब design की कमी का मतलब rewrite है।</li><li>बिना owner और बिना ticket के threats की list बनाना। जिस list का कोई मालिक नहीं, वह कभी ठीक नहीं होती।</li><li>बहुत बड़ा document बनाना। एक page रखो जिसे team सच में पढ़े और अपडेट करे।</li></ul>",
          hg: "<ul><li>Feature ban jaane ke baad karna. Tab design ki kami ka matlab rewrite hai.</li><li>Bina owner aur bina ticket ke threats ki list banana. Jis list ka koi maalik nahi, woh kabhi theek nahi hoti.</li><li>Bahut bada document banana. Ek page rakho jise team sach mein padhe aur update kare.</li></ul>"
        },
        whenToUse: {
          en: "<p>Threat-model every feature that adds a trust boundary, new personal or financial data, or a new way to log in. A small UI change does not need it. Keep the output as a table in the repo next to the feature, so it is reviewed like code.</p>",
          hi: "<p>हर उस feature का threat model बनाओ जो नई trust सीमा, नया personal या financial data, या login का नया तरीक़ा लाए। छोटे UI बदलाव को इसकी ज़रूरत नहीं। नतीजा feature के पास repo में table की तरह रखो, ताकि code की तरह review हो।</p>",
          hg: "<p>Har us feature ka threat model banao jo nayi trust seema, naya personal ya financial data, ya login ka naya tareeqa laye. Chhote UI badlaav ko iski zaroorat nahi. Nateeja feature ke paas repo mein table ki tarah rakho, taaki code ki tarah review ho.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a new threat, <b>Elevation of privilege: Default admin password left on</b>, with likelihood 5 and impact 5, and print only the top 2 threats by score.</p>",
            hi: "<p>एक नया threat जोड़ो, <b>Elevation of privilege: Default admin password left on</b>, likelihood 5 और impact 5 के साथ, और score के हिसाब से सिर्फ़ ऊपर के 2 threats print करो।</p>",
            hg: "<p>Ek naya threat jodo, <b>Elevation of privilege: Default admin password left on</b>, likelihood 5 aur impact 5 ke saath, aur score ke hisaab se sirf upar ke 2 threats print karo.</p>"
          },
          hint: {
            en: "<p>Add one more <code>new(...)</code> row to the list, then use <code>OrderByDescending(t =&gt; t.Score).Take(2)</code>.</p>",
            hi: "<p>List में एक और <code>new(...)</code> row जोड़ो, फिर <code>OrderByDescending(t =&gt; t.Score).Take(2)</code> लगाओ।</p>",
            hg: "<p>List mein ek aur <code>new(...)</code> row jodo, phir <code>OrderByDescending(t =&gt; t.Score).Take(2)</code> lagao.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a new threat, top two by score",
              hi: "हल: नया threat, score में ऊपर के दो",
              hg: "Hal: naya threat, score mein upar ke do"
            },
            src: "var threats = new List<Threat>\n{\n    new(\"Spoofing\", \"Fake agent login\", 4, 4),\n    new(\"Tampering\", \"Ticket text changed\", 2, 3),\n    new(\"Information disclosure\", \"Customer data leaks\", 4, 5),\n    new(\"Elevation of privilege\", \"Default admin password left on\", 5, 5)   // the new threat\n};\n\nConsole.WriteLine(\"Top 2 threats:\");\nforeach (var t in threats.OrderByDescending(t => t.Score).Take(2))\n    Console.WriteLine($\"{t.Score,2} {t.Stride}: {t.Title}\");\n\nrecord Threat(string Stride, string Title, int Likelihood, int Impact)\n{\n    public int Score => Likelihood * Impact;\n}\n",
            check: "run",
            expected: "Top 2 threats:\n25 Elevation of privilege: Default admin password left on\n20 Information disclosure: Customer data leaks"
          }
        },
        quiz: {
          q: {
            en: "<p>In STRIDE, which letter covers an agent saying \"I never closed that ticket\" because nothing was recorded?</p>",
            hi: "<p>STRIDE में कौन-सा अक्षर उस हालत के लिए है जब agent कहता है \"मैंने वह ticket कभी बंद नहीं की\" क्योंकि कुछ रिकॉर्ड ही नहीं हुआ?</p>",
            hg: "<p>STRIDE mein kaunsa akshar us haalat ke liye hai jab agent kehta hai \"maine woh ticket kabhi band nahi ki\" kyunki kuch record hi nahi hua?</p>"
          },
          options: [
            {
              en: "R, Repudiation",
              hi: "R, यानी Repudiation",
              hg: "R, yaani Repudiation"
            },
            {
              en: "S, Spoofing",
              hi: "S, यानी Spoofing",
              hg: "S, yaani Spoofing"
            },
            {
              en: "T, Tampering",
              hi: "T, यानी Tampering",
              hg: "T, yaani Tampering"
            },
            {
              en: "D, Denial of service",
              hi: "D, यानी Denial of service",
              hg: "D, yaani Denial of service"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>Repudiation is \"I never did that\", and you cannot disprove it without a record. An audit log with user id and time answers it. Spoofing is a fake identity, tampering is changed data, and denial of service is making the system unavailable.</p>",
            hi: "<p>Repudiation का मतलब \"मैंने वह किया ही नहीं\", और रिकॉर्ड के बिना इसे झुठलाया नहीं जा सकता। User id और समय वाला audit log इसका जवाब है। Spoofing नक़ली पहचान है, tampering बदला हुआ data है, और denial of service system को बंद कर देना है।</p>",
            hg: "<p>Repudiation ka matlab \"maine woh kiya hi nahi\", aur record ke bina ise jhutlaya nahi ja sakta. User id aur samay wala audit log iska jawaab hai. Spoofing nakli pehchaan hai, tampering badla hua data hai, aur denial of service system ko band kar dena hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Threat-model a feature before building: draw the data flow, ask the six STRIDE questions at each arrow.</li><li>Score each threat (likelihood times impact), sort, and give each top threat an owner and a ticket.</li><li>Do it for features that add a trust boundary, new sensitive data or a new login path.</li></ul>",
          hi: "<ul><li>Feature बनाने से पहले threat model बनाओ: data flow बनाओ, हर तीर पर छह STRIDE सवाल पूछो।</li><li>हर threat को score दो (likelihood गुणा impact), sort करो, और ऊपर वाले हर threat को owner और ticket दो।</li><li>यह उन features के लिए करो जो trust सीमा, नया sensitive data या login का नया रास्ता लाएँ।</li></ul>",
          hg: "<ul><li>Feature banane se pehle threat model banao: data flow banao, har teer par chhah STRIDE sawaal poocho.</li><li>Har threat ko score do (likelihood guna impact), sort karo, aur upar wale har threat ko owner aur ticket do.</li><li>Ye un features ke liye karo jo trust seema, naya sensitive data ya login ka naya raasta laayein.</li></ul>"
        }
      }
    },
    {
      id: "measure-first",
      depth: "short",
      title: {
        en: "Performance: measure first, set a budget",
        hi: "Performance: पहले नापो, budget तय करो",
        hg: "Performance: pehle naapo, budget tay karo"
      },
      code: [
        {
          caption: {
            en: "Count SQL commands before and after the fix against a budget (EF Core, SQLite in memory)",
            hi: "Budget के सामने fix से पहले और बाद में SQL commands की गिनती (EF Core, in-memory SQLite)",
            hg: "Budget ke saamne fix se pehle aur baad mein SQL commands ki ginti (EF Core, in-memory SQLite)"
          },
          src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Diagnostics;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nint queries = 0;\nvar options = new DbContextOptionsBuilder<CrmContext>()\n    .UseSqlite(connection)\n    .LogTo(_ => queries++, [RelationalEventId.CommandExecuted])   // count every SQL command\n    .Options;\n\nusing (var seed = new CrmContext(options))\n{\n    seed.Database.EnsureCreated();\n    seed.Customers.AddRange(\n        new Customer { Name = \"Asha\", Tickets = { new SupportTicket { Id = 501 }, new SupportTicket { Id = 502, Status = \"Closed\" } } },\n        new Customer { Name = \"Ravi\", Tickets = { new SupportTicket { Id = 503 } } },\n        new Customer { Name = \"Meena\", Tickets = { new SupportTicket { Id = 504 } } });\n    seed.SaveChanges();\n}\n\nconst int Budget = 2;   // agreed budget: at most 2 queries for this screen\n\n// MEASURE the slow version: one query for customers plus one per customer (N+1)\nqueries = 0;\nusing (var db = new CrmContext(options))\n{\n    foreach (var c in db.Customers.ToList())\n        _ = db.Tickets.Count(t => t.CustomerId == c.Id && t.Status == \"Open\");\n}\nConsole.WriteLine($\"before: queries={queries}, budget={Budget} -> {(queries <= Budget ? \"OK\" : \"OVER\")}\");\n\n// FIX the biggest cost, then MEASURE again: the projection makes it one query\nqueries = 0;\nusing (var db = new CrmContext(options))\n{\n    var rows = db.Customers\n        .OrderBy(c => c.Name)\n        .Select(c => new { c.Name, Open = c.Tickets.Count(t => t.Status == \"Open\") })\n        .ToList();\n    foreach (var r in rows) Console.WriteLine($\"{r.Name}: {r.Open} open\");\n}\nConsole.WriteLine($\"after: queries={queries}, budget={Budget} -> {(queries <= Budget ? \"OK\" : \"OVER\")}\");\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Status { get; set; } = \"Open\";\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}\n",
          check: "run",
          expected: "before: queries=4, budget=2 -> OVER\nAsha: 1 open\nMeena: 1 open\nRavi: 1 open\nafter: queries=1, budget=2 -> OK",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ]
        }
      ],
      lesson: {
        buildsOn: {
          en: "<p>Lessons 1 to 6 were about security; now the same CRM must also be fast. Day 6 taught the N+1 problem and <code>Include</code>, and Day 18 taught indexes. Today adds the habit around them: measure the cost, write down a budget, fix the biggest thing, measure again. We count SQL commands with the same <code>LogTo</code> trick as Day 6, because a count is the same on every machine and a timing is not.</p>",
          hi: "<p>Lessons 1 से 6 security के थे; अब उसी CRM को तेज़ भी होना है। Day 6 में N+1 problem और <code>Include</code> आए थे, और Day 18 में indexes। आज उनके आसपास की आदत जुड़ती है: ख़र्च नापो, budget लिखो, सबसे बड़ी चीज़ ठीक करो, फिर नापो। हम SQL commands की गिनती Day 6 वाली <code>LogTo</code> तरकीब से करते हैं, क्योंकि गिनती हर machine पर एक जैसी रहती है और timing नहीं।</p>",
          hg: "<p>Lessons 1 se 6 security ke the; ab usi CRM ko tez bhi hona hai. Day 6 mein N+1 problem aur <code>Include</code> aaye the, aur Day 18 mein indexes. Aaj unke aaspaas ki aadat judti hai: kharch naapo, budget likho, sabse badi cheez theek karo, phir naapo. Hum SQL commands ki ginti Day 6 wali <code>LogTo</code> tarkeeb se karte hain, kyunki ginti har machine par ek jaisi rehti hai aur timing nahi.</p>"
        },
        what: {
          en: "<p><b>Measure first</b> means you do not guess what is slow. You pick a number that matters (SQL commands per request, p95 latency), set a <b>budget</b> for it, change one thing, and measure again.</p><p>Most slow endpoints are slow because of the database or a downstream call, not because of C# code.</p>",
          hi: "<p><b>Measure first</b> का मतलब: अंदाज़े से मत मानो कि क्या धीमा है। एक काम की संख्या चुनो (हर request पर SQL commands, p95 latency), उसका <b>budget</b> तय करो, एक चीज़ बदलो, और फिर नापो।</p><p>ज़्यादातर धीमे endpoints database या किसी दूसरी service की वजह से धीमे होते हैं, C# code की वजह से नहीं।</p>",
          hg: "<p><b>Measure first</b> ka matlab: andaaze se mat maano ki kya dheema hai. Ek kaam ki sankhya chuno (har request par SQL commands, p95 latency), uska <b>budget</b> tay karo, ek cheez badlo, aur phir naapo.</p><p>Zyadatar dheeme endpoints database ya kisi doosri service ki wajah se dheeme hote hain, C# code ki wajah se nahi.</p>"
        },
        why: {
          en: "<p>Developers guess wrong surprisingly often. Without a number you cannot tell whether a change helped, and \"make it faster\" gives a reviewer nothing to say no with. A budget such as \"at most 2 queries for this screen\" is something a test can check.</p>",
          hi: "<p>Developers के अंदाज़े हैरानी की हद तक अक्सर ग़लत होते हैं। संख्या के बिना पता नहीं चलता कि बदलाव से फ़ायदा हुआ या नहीं, और \"इसे तेज़ करो\" से reviewer के पास मना करने की कोई वजह नहीं बचती। \"इस screen के लिए ज़्यादा से ज़्यादा 2 queries\" जैसा budget वह चीज़ है जिसे test जाँच सकता है।</p>",
          hg: "<p>Developers ke andaaze hairani ki had tak aksar galat hote hain. Sankhya ke bina pata nahi chalta ki badlaav se faayda hua ya nahi, aur \"ise tez karo\" se reviewer ke paas mana karne ki koi wajah nahi bachti. \"Is screen ke liye zyada se zyada 2 queries\" jaisa budget woh cheez hai jise test jaanch sakta hai.</p>"
        },
        analogy: {
          en: "<p>Your electricity bill is high. You do not switch off random appliances; you read the meter, find that the AC is the heavy user, and fix that one. Then you read the meter again to confirm the bill dropped.</p>",
          hi: "<p>बिजली का बिल ज़्यादा आया है। आप कोई भी appliance बंद नहीं कर देते; meter पढ़ते हैं, देखते हैं कि AC सबसे ज़्यादा खा रहा है, और उसे ठीक करते हैं। फिर meter दोबारा पढ़कर पक्का करते हैं कि बिल घटा।</p>",
          hg: "<p>Bijli ka bill zyada aaya hai. Aap koi bhi appliance band nahi kar dete; meter padhte hain, dekhte hain ki AC sabse zyada kha raha hai, aur use theek karte hain. Phir meter dobara padhkar pakka karte hain ki bill ghata.</p>"
        },
        lines: [
          {
            code: ".LogTo(_ => queries++, [RelationalEventId.CommandExecuted])",
            note: {
              en: "The meter: EF Core calls this once for every SQL command it runs, and we add 1 to a counter. Same trick as Day 6.",
              hi: "Meter: EF Core हर SQL command चलाने पर इसे एक बार call करता है, और हम counter में 1 जोड़ते हैं। Day 6 वाली वही तरकीब।",
              hg: "Meter: EF Core har SQL command chalane par ise ek baar call karta hai, aur hum counter mein 1 jodte hain. Day 6 wali wahi tarkeeb."
            }
          },
          {
            code: "const int Budget = 2;",
            note: {
              en: "The budget is written down as a constant. A real test would fail when the count goes over it.",
              hi: "Budget एक constant की तरह लिखा है। असली test तब fail होगा जब गिनती इससे ऊपर जाए।",
              hg: "Budget ek constant ki tarah likha hai. Asli test tab fail hoga jab ginti isse upar jaaye."
            }
          },
          {
            code: "_ = db.Tickets.Count(t => t.CustomerId == c.Id && t.Status == \"Open\");",
            note: {
              en: "The slow version: one query inside the loop for each customer, so 1 + 3 = 4 commands (N+1).",
              hi: "धीमा version: loop के अंदर हर customer के लिए एक query, यानी 1 + 3 = 4 commands (N+1)।",
              hg: "Dheema version: loop ke andar har customer ke liye ek query, yaani 1 + 3 = 4 commands (N+1)."
            }
          },
          {
            code: "Console.WriteLine($\"before: queries={queries}, budget={Budget} -> {(queries <= Budget ? \"OK\" : \"OVER\")}\");",
            note: {
              en: "Measure and judge in one line: 4 against a budget of 2 prints OVER.",
              hi: "नापना और फ़ैसला एक line में: 2 के budget के सामने 4 होने पर OVER print होता है।",
              hg: "Naapna aur faisla ek line mein: 2 ke budget ke saamne 4 hone par OVER print hota hai."
            }
          },
          {
            code: "foreach (var c in db.Customers.ToList())",
            note: {
              en: "Query number 1 loads all customers. The loop body then sends one more query per customer.",
              hi: "Query नंबर 1 सारे customers load करती है। फिर loop हर customer के लिए एक और query भेजता है।",
              hg: "Query number 1 saare customers load karti hai. Phir loop har customer ke liye ek aur query bhejta hai."
            }
          },
          {
            code: ".Select(c => new { c.Name, Open = c.Tickets.Count(t => t.Status == \"Open\") })",
            note: {
              en: "The fix is this projection: ask only for the name and the open count, and EF Core puts the count inside one SQL query. That is what takes 4 queries down to 1 (OK).",
              hi: "Fix यही projection है: सिर्फ़ नाम और open की गिनती माँगो, और EF Core गिनती को एक ही SQL query के अंदर रख देता है। इसी से 4 queries घटकर 1 होती हैं (OK)।",
              hg: "Fix yahi projection hai: sirf naam aur open ki ginti maango, aur EF Core ginti ko ek hi SQL query ke andar rakh deta hai. Isi se 4 queries ghatkar 1 hoti hain (OK)."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Guessing and rewriting hot loops with <code>Span</code> while the endpoint makes 40 database calls. Fix the biggest cost first.</li><li>Trusting a <code>Stopwatch</code> loop in a Debug build, or judging by the average. Use Release builds and percentiles (p95, p99), and in tests prefer counting operations.</li><li>Changing three things at once. You can no longer tell which one helped.</li></ul>",
          hi: "<ul><li>अंदाज़े से hot loops को <code>Span</code> में फिर से लिखना, जबकि endpoint 40 database calls करता है। सबसे बड़ा ख़र्च पहले ठीक करो।</li><li>Debug build में <code>Stopwatch</code> loop पर भरोसा करना, या average से फ़ैसला करना। Release build और percentiles (p95, p99) लो, और tests में operations गिनना बेहतर है।</li><li>एक साथ तीन चीज़ें बदलना। फिर पता नहीं चलता कि किससे फ़ायदा हुआ।</li></ul>",
          hg: "<ul><li>Andaaze se hot loops ko <code>Span</code> mein phir se likhna, jabki endpoint 40 database calls karta hai. Sabse bada kharch pehle theek karo.</li><li>Debug build mein <code>Stopwatch</code> loop par bharosa karna, ya average se faisla karna. Release build aur percentiles (p95, p99) lo, aur tests mein operations ginna behtar hai.</li><li>Ek saath teen cheezein badalna. Phir pata nahi chalta ki kisse faayda hua.</li></ul>"
        },
        whenToUse: {
          en: "<p>Do this for every user-facing path: set a budget (queries, payload size, p95), measure with a trace or a counter, fix the biggest cost. In production, use traces from OpenTelemetry or Application Insights (Days 16 and 20) to see which dependency is slow. Use BenchmarkDotNet only for a hot path that a profile has proven (see the Deep Dive).</p>",
          hi: "<p>हर user वाले रास्ते के लिए यह करो: budget तय करो (queries, payload size, p95), trace या counter से नापो, सबसे बड़ा ख़र्च ठीक करो। Production में OpenTelemetry या Application Insights के traces (Day 16 और 20) से देखो कि कौन-सी dependency धीमी है। BenchmarkDotNet सिर्फ़ उस hot path के लिए लो जो profile से साबित हो चुका हो (Deep Dive देखो)।</p>",
          hg: "<p>Har user wale raaste ke liye ye karo: budget tay karo (queries, payload size, p95), trace ya counter se naapo, sabse bada kharch theek karo. Production mein OpenTelemetry ya Application Insights ke traces (Day 16 aur 20) se dekho ki kaunsi dependency dheemi hai. BenchmarkDotNet sirf us hot path ke liye lo jo profile se saabit ho chuka ho (Deep Dive dekho).</p>"
        },
        exercise: {
          task: {
            en: "<p>Load the same screen with <code>Include(c =&gt; c.Tickets)</code> and <code>AsNoTracking</code> instead of a projection. Print each customer with the number of tickets loaded, and show that it is still one query. <code>Include</code> keeps it at one; <code>AsNoTracking</code> only skips change tracking and does not change the count. Notice that it also loads the closed tickets, which the projection did not.</p>",
            hi: "<p>उसी screen को projection की जगह <code>Include(c =&gt; c.Tickets)</code> और <code>AsNoTracking</code> से load करो। हर customer के साथ load हुई tickets की संख्या print करो, और दिखाओ कि अब भी एक ही query है। एक query <code>Include</code> की वजह से है; <code>AsNoTracking</code> सिर्फ़ change tracking छोड़ता है, गिनती नहीं बदलता। ध्यान दो कि इसमें closed tickets भी load होती हैं, जो projection में नहीं होती थीं।</p>",
            hg: "<p>Usi screen ko projection ki jagah <code>Include(c =&gt; c.Tickets)</code> aur <code>AsNoTracking</code> se load karo. Har customer ke saath load hui tickets ki sankhya print karo, aur dikhao ki ab bhi ek hi query hai. Ek query <code>Include</code> ki wajah se hai; <code>AsNoTracking</code> sirf change tracking chhodta hai, ginti nahi badalta. Dhyaan do ki ismein closed tickets bhi load hoti hain, jo projection mein nahi hoti thi.</p>"
          },
          hint: {
            en: "<p>Reset the counter with <code>queries = 0</code> just before the query, and <code>ToList()</code> inside the <code>using</code> block so the query really runs there.</p>",
            hi: "<p>Query से ठीक पहले <code>queries = 0</code> से counter reset करो, और <code>using</code> block के अंदर <code>ToList()</code> लगाओ ताकि query वहीं सच में चले।</p>",
            hg: "<p>Query se theek pehle <code>queries = 0</code> se counter reset karo, aur <code>using</code> block ke andar <code>ToList()</code> lagao taaki query wahin sach mein chale.</p>"
          },
          solution: {
            caption: {
              en: "Solution: Include with AsNoTracking, still one query",
              hi: "हल: AsNoTracking के साथ Include, फिर भी एक query",
              hg: "Hal: AsNoTracking ke saath Include, phir bhi ek query"
            },
            src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Diagnostics;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nint queries = 0;\nvar options = new DbContextOptionsBuilder<CrmContext>()\n    .UseSqlite(connection)\n    .LogTo(_ => queries++, [RelationalEventId.CommandExecuted])\n    .Options;\n\nusing (var seed = new CrmContext(options))\n{\n    seed.Database.EnsureCreated();\n    seed.Customers.AddRange(\n        new Customer { Name = \"Asha\", Tickets = { new SupportTicket { Id = 501 }, new SupportTicket { Id = 502, Status = \"Closed\" } } },\n        new Customer { Name = \"Ravi\", Tickets = { new SupportTicket { Id = 503 } } });\n    seed.SaveChanges();\n}\n\nqueries = 0;\nusing (var db = new CrmContext(options))\n{\n    var customers = db.Customers.AsNoTracking().Include(c => c.Tickets).OrderBy(c => c.Name).ToList();   // one JOIN\n    foreach (var c in customers)\n        Console.WriteLine($\"{c.Name}: {c.Tickets.Count} ticket(s) loaded\");\n    Console.WriteLine(\"closed tickets loaded too: \" + customers.Sum(c => c.Tickets.Count(t => t.Status == \"Closed\")));\n}\nConsole.WriteLine($\"queries={queries}\");   // Include keeps it at one; AsNoTracking does not change the count\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Status { get; set; } = \"Open\";\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}\n",
            check: "run",
            expected: "Asha: 2 ticket(s) loaded\nRavi: 1 ticket(s) loaded\nclosed tickets loaded too: 1\nqueries=1",
            packages: [
              "Microsoft.EntityFrameworkCore.Sqlite"
            ]
          }
        },
        quiz: {
          q: {
            en: "<p>An endpoint is slow. What do you do first?</p>",
            hi: "<p>एक endpoint धीमा है। सबसे पहले क्या करोगे?</p>",
            hg: "<p>Ek endpoint dheema hai. Sabse pehle kya karoge?</p>"
          },
          options: [
            {
              en: "Rewrite the hot loops with <code>Span</code> and pooling",
              hi: "Hot loops को <code>Span</code> और pooling से दोबारा लिखूँगा",
              hg: "Hot loops ko <code>Span</code> aur pooling se dobara likhunga"
            },
            {
              en: "Put a cache in front of every endpoint and query",
              hi: "हर endpoint और query के आगे cache लगा दूँगा",
              hg: "Har endpoint aur query ke aage cache laga dunga"
            },
            {
              en: "Move the app to a bigger server with more CPU",
              hi: "App को ज़्यादा CPU वाले बड़े server पर ले जाऊँगा",
              hg: "App ko zyada CPU wale bade server par le jaunga"
            },
            {
              en: "Measure it to find the biggest cost, then fix that",
              hi: "नापूँगा ताकि सबसे बड़ा ख़र्च मिले, फिर वही ठीक करूँगा",
              hg: "Naapunga taaki sabse bada kharch mile, phir wahi theek karunga"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>Without a measurement every other step is a guess. The trace may show 40 queries, a missing index or a slow downstream call, and none of the other three options would fix those first.</p>",
            hi: "<p>नापे बिना बाक़ी हर क़दम अंदाज़ा है। Trace में 40 queries, कोई छूटा index या कोई धीमी downstream call निकल सकती है, और बाक़ी तीनों options इन्हें पहले ठीक नहीं करते।</p>",
            hg: "<p>Naape bina baaki har kadam andaaza hai. Trace mein 40 queries, koi chhoota index ya koi dheemi downstream call nikal sakti hai, aur baaki teeno options inhe pehle theek nahi karte.</p>"
          }
        },
        recap: {
          en: "<ul><li>Measure first: pick a number that matters, set a budget, change one thing, measure again.</li><li>Count operations (SQL commands) in tests; timings differ on every machine.</li><li>Fix the biggest cost first: N+1 and indexes (here a projection took 4 queries to 1), and only then allocations.</li></ul>",
          hi: "<ul><li>पहले नापो: काम की एक संख्या चुनो, budget तय करो, एक चीज़ बदलो, फिर नापो।</li><li>Tests में operations (SQL commands) गिनो; timings हर machine पर अलग होती हैं।</li><li>सबसे बड़ा ख़र्च पहले ठीक करो: N+1 और indexes (यहाँ projection ने 4 queries को 1 किया), और उसके बाद ही allocations।</li></ul>",
          hg: "<ul><li>Pehle naapo: kaam ki ek sankhya chuno, budget tay karo, ek cheez badlo, phir naapo.</li><li>Tests mein operations (SQL commands) gino; timings har machine par alag hoti hain.</li><li>Sabse bada kharch pehle theek karo: N+1 aur indexes (yahan projection ne 4 queries ko 1 kiya), aur uske baad hi allocations.</li></ul>"
        }
      }
    },
    {
      id: "caching",
      depth: "short",
      title: {
        en: "Caching: keep the answer, with a safe key and an expiry",
        hi: "Caching: जवाब रखो, सही key और expiry के साथ",
        hg: "Caching: jawaab rakho, sahi key aur expiry ke saath"
      },
      code: [
        {
          caption: {
            en: "IMemoryCache for the agent dashboard: database calls counted",
            hi: "Agent dashboard के लिए IMemoryCache: database calls की गिनती",
            hg: "Agent dashboard ke liye IMemoryCache: database calls ki ginti"
          },
          src: "using Microsoft.Extensions.Caching.Memory;\n\nint dbCalls = 0;\nvar tickets = new Dictionary<string, int> { [\"Meena\"] = 3, [\"Kiran\"] = 5 };   // open tickets per agent\nusing var cache = new MemoryCache(new MemoryCacheOptions());\n\nint LoadFromDb(string agent)\n{\n    dbCalls++;                                   // pretend this is a slow query\n    return tickets[agent];\n}\n\nint OpenTickets(string agent) =>\n    cache.GetOrCreate($\"open-tickets:{agent}\", entry =>\n    {\n        entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromSeconds(30);   // always give a cache entry an expiry\n        return LoadFromDb(agent);\n    });\n\nfor (int i = 0; i < 5; i++) OpenTickets(\"Meena\");            // five dashboard refreshes\nConsole.WriteLine($\"5 refreshes for Meena: {dbCalls} database call\");\n\nConsole.WriteLine($\"Kiran sees {OpenTickets(\"Kiran\")}, Meena sees {OpenTickets(\"Meena\")}\");   // key includes the agent\nConsole.WriteLine($\"database calls so far: {dbCalls}\");\n\ntickets[\"Meena\"] = 4;                                        // a new ticket is assigned to Meena\nConsole.WriteLine($\"stale value: {OpenTickets(\"Meena\")}\");\ncache.Remove(\"open-tickets:Meena\");                          // evict when the data changes\nConsole.WriteLine($\"after Remove: {OpenTickets(\"Meena\")}, database calls: {dbCalls}\");\n",
          check: "run",
          expected: "5 refreshes for Meena: 1 database call\nKiran sees 5, Meena sees 3\ndatabase calls so far: 2\nstale value: 3\nafter Remove: 4, database calls: 3",
          packages: [
            "Microsoft.Extensions.Caching.Memory"
          ]
        }
      ],
      lesson: {
        buildsOn: {
          en: "<p>Lesson 7 gave us a meter: SQL commands per screen. After the query is fixed, a cache can bring repeat requests down to zero database calls, and the same kind of counter proves it. Day 13 introduced output caching and <code>HybridCache</code>; here is the basic building block on one server, plus the security angle: a bad cache key can show one agent's data to another.</p>",
          hi: "<p>Lesson 7 ने हमें meter दिया: हर screen पर SQL commands। Query ठीक होने के बाद, cache दोहराई गई requests को zero database calls तक ला सकता है, और उसी तरह का counter यह साबित करता है। Day 13 में output caching और <code>HybridCache</code> आए थे; यहाँ एक server पर बुनियादी हिस्सा है, साथ में security का नज़रिया: ग़लत cache key एक agent का data दूसरे को दिखा सकती है।</p>",
          hg: "<p>Lesson 7 ne hamein meter diya: har screen par SQL commands. Query theek hone ke baad, cache dohrayi gayi requests ko zero database calls tak la sakta hai, aur usi tarah ka counter ye saabit karta hai. Day 13 mein output caching aur <code>HybridCache</code> aaye the; yahan ek server par buniyaadi hissa hai, saath mein security ka nazariya: galat cache key ek agent ka data doosre ko dikha sakti hai.</p>"
        },
        what: {
          en: "<p>A <b>cache</b> keeps the result of slow work so the next request can reuse it. <code>IMemoryCache.GetOrCreate(key, factory)</code> returns the stored value, or runs the factory once and stores the result.</p><p>Three rules: the <b>key</b> must contain everything that changes the answer, every entry needs an <b>expiry</b>, and you <b>evict</b> when the data changes.</p>",
          hi: "<p><b>Cache</b> धीमे काम का नतीजा रख लेता है ताकि अगली request उसे दोबारा इस्तेमाल कर सके। <code>IMemoryCache.GetOrCreate(key, factory)</code> रखी हुई value लौटाता है, या factory को एक बार चलाकर नतीजा रख लेता है।</p><p>तीन नियम: <b>key</b> में वह सब होना चाहिए जिससे जवाब बदलता है, हर entry की <b>expiry</b> हो, और data बदले तो उसे <b>हटाओ</b> (evict)।</p>",
          hg: "<p><b>Cache</b> dheeme kaam ka nateeja rakh leta hai taaki agli request use dobara istemaal kar sake. <code>IMemoryCache.GetOrCreate(key, factory)</code> rakhi hui value lautata hai, ya factory ko ek baar chalakar nateeja rakh leta hai.</p><p>Teen niyam: <b>key</b> mein woh sab hona chahiye jisse jawaab badalta hai, har entry ki <b>expiry</b> ho, aur data badle to use <b>hatao</b> (evict).</p>"
        },
        why: {
          en: "<p>An agent dashboard that shows \"open tickets\" may be refreshed every few seconds by every agent. Running the same count each time wastes the database. One cached value per agent serves all those refreshes.</p>",
          hi: "<p>\"Open tickets\" दिखाने वाला agent dashboard हर agent हर कुछ second में refresh कर सकता है। हर बार वही गिनती चलाना database की बर्बादी है। हर agent की एक cached value उन सारे refreshes को संभाल लेती है।</p>",
          hg: "<p>\"Open tickets\" dikhane wala agent dashboard har agent har kuch second mein refresh kar sakta hai. Har baar wahi ginti chalana database ki barbaadi hai. Har agent ki ek cached value un saare refreshes ko sambhaal leti hai.</p>"
        },
        analogy: {
          en: "<p>A kirana shop that is asked \"do you have 1 kg sugar?\" fifty times an hour keeps a packed bag ready at the counter. That is the cache. The shopkeeper still throws the bag away at the end of the day (expiry) and repacks it when the sugar price changes (evict).</p>",
          hi: "<p>जिस किराना दुकान से घंटे में पचास बार पूछा जाए \"1 kg चीनी है?\", वह काउंटर पर पैक की हुई थैली तैयार रखती है। वही cache है। दुकानदार दिन के अंत में थैली फेंक देता है (expiry) और चीनी का भाव बदले तो दोबारा पैक करता है (evict)।</p>",
          hg: "<p>Jis kirana dukaan se ghante mein pachaas baar poocha jaaye \"1 kg cheeni hai?\", woh counter par pack ki hui thaili taiyaar rakhti hai. Wahi cache hai. Dukaandaar din ke ant mein thaili fenk deta hai (expiry) aur cheeni ka bhaav badle to dobara pack karta hai (evict).</p>"
        },
        lines: [
          {
            code: "using var cache = new MemoryCache(new MemoryCacheOptions());",
            note: {
              en: "A real app injects <code>IMemoryCache</code>; a console program creates one directly. It lives in this process only, so each server has its own cache.",
              hi: "असली app <code>IMemoryCache</code> inject करती है; console program सीधे बना लेता है। यह सिर्फ़ इसी process में रहता है, इसलिए हर server का अपना cache होता है।",
              hg: "Asli app <code>IMemoryCache</code> inject karti hai; console program seedhe bana leta hai. Ye sirf isi process mein rehta hai, isliye har server ka apna cache hota hai."
            }
          },
          {
            code: "cache.GetOrCreate($\"open-tickets:{agent}\", entry =>",
            note: {
              en: "The key contains the agent. Without it, Kiran could be served Meena's number, which is a data leak.",
              hi: "Key में agent शामिल है। इसके बिना Kiran को Meena की संख्या मिल सकती थी, जो data leak है।",
              hg: "Key mein agent shaamil hai. Iske bina Kiran ko Meena ki sankhya mil sakti thi, jo data leak hai."
            }
          },
          {
            code: "entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromSeconds(30);",
            note: {
              en: "Every entry gets an expiry, so a forgotten entry cannot stay wrong forever.",
              hi: "हर entry को expiry मिलती है, इसलिए भूली हुई entry हमेशा के लिए ग़लत नहीं रहती।",
              hg: "Har entry ko expiry milti hai, isliye bhooli hui entry hamesha ke liye galat nahi rehti."
            }
          },
          {
            code: "for (int i = 0; i < 5; i++) OpenTickets(\"Meena\");",
            note: {
              en: "Five dashboard refreshes for Meena. The output shows 1 database call, not 5.",
              hi: "Meena के पाँच dashboard refreshes। Output में 5 नहीं, 1 database call दिखती है।",
              hg: "Meena ke paanch dashboard refreshes. Output mein 5 nahi, 1 database call dikhti hai."
            }
          },
          {
            code: "Console.WriteLine($\"stale value: {OpenTickets(\"Meena\")}\");",
            note: {
              en: "After a new ticket is assigned, the cache still returns the old 3. That is the price of caching: data can be stale until it expires or is evicted.",
              hi: "नई ticket assign होने के बाद भी cache पुराना 3 लौटाता है। यही cache की क़ीमत है: expiry या evict तक data पुराना रह सकता है।",
              hg: "Nayi ticket assign hone ke baad bhi cache purana 3 lautata hai. Yahi cache ki keemat hai: expiry ya evict tak data purana reh sakta hai."
            }
          },
          {
            code: "cache.Remove(\"open-tickets:Meena\");",
            note: {
              en: "Evict when the data changes. The next call reads the database again and returns 4, and the call count goes to 3.",
              hi: "Data बदलने पर evict करो। अगली call फिर database पढ़ती है और 4 लौटाती है, और call की गिनती 3 हो जाती है।",
              hg: "Data badalne par evict karo. Agli call phir database padhti hai aur 4 lautati hai, aur call ki ginti 3 ho jaati hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>A key that misses part of the answer, such as the agent or customer id. One user's data is then shown to another.</li><li>An entry with no expiry, and no eviction when the data changes. The screen shows old numbers for hours.</li><li>Adding a cache to hide a missing index or an N+1. Fix the query first (lesson 7), then cache.</li></ul>",
          hi: "<ul><li>ऐसी key जिसमें जवाब का कोई हिस्सा छूट जाए, जैसे agent या customer id। तब एक user का data दूसरे को दिख जाता है।</li><li>बिना expiry की entry, और data बदलने पर evict नहीं। Screen घंटों तक पुराने आँकड़े दिखाती है।</li><li>छूटे हुए index या N+1 को छुपाने के लिए cache लगाना। पहले query ठीक करो (lesson 7), फिर cache लगाओ।</li></ul>",
          hg: "<ul><li>Aisi key jismein jawaab ka koi hissa chhoot jaaye, jaise agent ya customer id. Tab ek user ka data doosre ko dikh jaata hai.</li><li>Bina expiry ki entry, aur data badalne par evict nahi. Screen ghanton tak purane aankde dikhati hai.</li><li>Chhoote hue index ya N+1 ko chhupane ke liye cache lagana. Pehle query theek karo (lesson 7), phir cache lagao.</li></ul>"
        },
        whenToUse: {
          en: "<p>Cache data that is read often, slow to produce and fine to be a few seconds old, with a clear expiry. If the answer depends on the user, the user goes into the key, as the agent does here. Do not cache data that must always be exact, such as a payment balance. For several servers use a shared cache such as Redis, or <code>HybridCache</code> (Day 13).</p>",
          hi: "<p>वह data cache करो जो अक्सर पढ़ा जाए, बनने में धीमा हो और कुछ second पुराना होने पर भी चल जाए, साफ़ expiry के साथ। अगर जवाब user पर निर्भर है तो user key में जाता है, जैसे यहाँ agent। जो data हमेशा बिल्कुल सही चाहिए, जैसे payment balance, उसे cache मत करो। कई servers हों तो Redis जैसा shared cache या <code>HybridCache</code> लो (Day 13)।</p>",
          hg: "<p>Woh data cache karo jo aksar padha jaaye, banne mein dheema ho aur kuch second purana hone par bhi chal jaaye, saaf expiry ke saath. Agar jawaab user par nirbhar hai to user key mein jaata hai, jaise yahan agent. Jo data hamesha bilkul sahi chahiye, jaise payment balance, use cache mat karo. Kai servers hon to Redis jaisa shared cache ya <code>HybridCache</code> lo (Day 13).</p>"
        },
        exercise: {
          task: {
            en: "<p>Write <code>AssignTicket(agent)</code> that adds 1 to the agent's open tickets and evicts the cached entry in the same place. Show that Meena's count is 3, then 4 after the assignment, using exactly 2 database calls.</p>",
            hi: "<p><code>AssignTicket(agent)</code> लिखो जो agent की open tickets में 1 जोड़े और उसी जगह cached entry को evict करे। दिखाओ कि Meena की गिनती 3 है, फिर assign के बाद 4, और database calls ठीक 2 हुईं।</p>",
            hg: "<p><code>AssignTicket(agent)</code> likho jo agent ki open tickets mein 1 jode aur usi jagah cached entry ko evict kare. Dikhao ki Meena ki ginti 3 hai, phir assign ke baad 4, aur database calls theek 2 huin.</p>"
          },
          hint: {
            en: "<p>Change the dictionary value first, then call <code>cache.Remove</code> with the same key string that <code>OpenTickets</code> uses.</p>",
            hi: "<p>पहले dictionary की value बदलो, फिर <code>cache.Remove</code> उसी key string से call करो जो <code>OpenTickets</code> इस्तेमाल करता है।</p>",
            hg: "<p>Pehle dictionary ki value badlo, phir <code>cache.Remove</code> usi key string se call karo jo <code>OpenTickets</code> istemaal karta hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: change the data and evict together",
              hi: "हल: data बदलो और साथ में evict करो",
              hg: "Hal: data badlo aur saath mein evict karo"
            },
            src: "using Microsoft.Extensions.Caching.Memory;\n\nint dbCalls = 0;\nvar tickets = new Dictionary<string, int> { [\"Meena\"] = 3 };\nusing var cache = new MemoryCache(new MemoryCacheOptions());\n\nint OpenTickets(string agent) =>\n    cache.GetOrCreate($\"open-tickets:{agent}\", entry =>\n    {\n        entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromSeconds(30);\n        dbCalls++;\n        return tickets[agent];\n    });\n\nvoid AssignTicket(string agent)\n{\n    tickets[agent]++;                          // change the data ...\n    cache.Remove($\"open-tickets:{agent}\");     // ... and evict the cached copy in the same place\n}\n\nConsole.WriteLine(\"before: \" + OpenTickets(\"Meena\"));\nAssignTicket(\"Meena\");\nConsole.WriteLine(\"after: \" + OpenTickets(\"Meena\"));\nConsole.WriteLine(\"database calls: \" + dbCalls);\n",
            check: "run",
            expected: "before: 3\nafter: 4\ndatabase calls: 2",
            packages: [
              "Microsoft.Extensions.Caching.Memory"
            ]
          }
        },
        quiz: {
          q: {
            en: "<p>Why does the cache key include the agent name?</p>",
            hi: "<p>Cache key में agent का नाम क्यों शामिल है?</p>",
            hg: "<p>Cache key mein agent ka naam kyun shaamil hai?</p>"
          },
          options: [
            {
              en: "It makes the entry expire later than a plain key would",
              hi: "इससे entry सादी key से देर में expire होती है",
              hg: "Isse entry saadi key se der mein expire hoti hai"
            },
            {
              en: "Otherwise Kiran could get the number cached for Meena",
              hi: "वरना Kiran को Meena के लिए cache हुई संख्या मिल सकती है",
              hg: "Warna Kiran ko Meena ke liye cache hui sankhya mil sakti hai"
            },
            {
              en: "<code>GetOrCreate</code> throws for a key with no name in it",
              hi: "<code>GetOrCreate</code> बिना नाम वाली key पर exception देता है",
              hg: "<code>GetOrCreate</code> bina naam wali key par exception deta hai"
            },
            {
              en: "A longer, more specific key makes each lookup faster",
              hi: "लंबी और ज़्यादा खास key से हर lookup तेज़ होता है",
              hg: "Lambi aur zyada khaas key se har lookup tez hota hai"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>The key must contain everything that changes the answer. The count depends on the agent, so a key without the agent gives the first caller's number to everyone: Kiran would see Meena's count, which is wrong data and a data leak. Key length has no useful effect, and <code>GetOrCreate</code> accepts any key.</p>",
            hi: "<p>Key में वह सब होना चाहिए जिससे जवाब बदलता है। गिनती agent पर निर्भर है, इसलिए agent के बिना वाली key पहले caller की संख्या सबको दे देती है: Kiran को Meena की गिनती दिखती, जो ग़लत data और data leak है। Key की लंबाई का कोई काम का असर नहीं, और <code>GetOrCreate</code> कोई भी key मान लेता है।</p>",
            hg: "<p>Key mein woh sab hona chahiye jisse jawaab badalta hai. Ginti agent par nirbhar hai, isliye agent ke bina wali key pehle caller ki sankhya sabko de deti hai: Kiran ko Meena ki ginti dikhti, jo galat data aur data leak hai. Key ki lambai ka koi kaam ka asar nahi, aur <code>GetOrCreate</code> koi bhi key maan leta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>A cache stores the result of slow work; <code>GetOrCreate</code> runs the factory on a miss and stores the result (it takes no lock, so two requests that miss together can both run it; <code>HybridCache</code> prevents that).</li><li>The key holds everything that changes the answer, every entry has an expiry, and you evict when data changes.</li><li>Fix the query first, then cache; never cache user-specific data under a shared key.</li></ul>",
          hi: "<ul><li>Cache धीमे काम का नतीजा रखता है; <code>GetOrCreate</code> miss पर factory चलाकर नतीजा रख लेता है (यह lock नहीं लेता, इसलिए एक साथ miss हुई दो requests दोनों उसे चला सकती हैं; <code>HybridCache</code> इसे रोकता है)।</li><li>Key में वह सब रहता है जिससे जवाब बदलता है, हर entry की expiry होती है, और data बदलने पर evict करते हैं।</li><li>पहले query ठीक करो, फिर cache; user से जुड़ा data shared key के नीचे कभी cache मत करो।</li></ul>",
          hg: "<ul><li>Cache dheeme kaam ka nateeja rakhta hai; <code>GetOrCreate</code> miss par factory chalakar nateeja rakh leta hai (ye lock nahi leta, isliye ek saath miss hui do requests dono use chala sakti hain; <code>HybridCache</code> ise rokta hai).</li><li>Key mein woh sab rehta hai jisse jawaab badalta hai, har entry ki expiry hoti hai, aur data badalne par evict karte hain.</li><li>Pehle query theek karo, phir cache; user se juda data shared key ke neeche kabhi cache mat karo.</li></ul>"
        }
      }
    },
    {
      id: "injection-xss",
      depth: "detailed",
      title: {
        en: "More on injection and XSS: allow-lists, FromSql and CSP",
        hi: "Injection और XSS की और बातें: allow-lists, FromSql और CSP",
        hg: "Injection aur XSS ki aur baatein: allow-lists, FromSql aur CSP"
      },
      body: {
        en: "<ul>\n<li><b>What parameters cannot do:</b> a table or column name or <code>ORDER BY</code> direction cannot be a parameter. Map the user's choice to a <b>fixed allow-list</b> in code (\"price\" to <code>Price</code>), never paste it.</li>\n<li><b>XSS (cross-site scripting):</b> untrusted text ends up in a page as <b>HTML or script</b>. Razor and Blazor <b>encode output by default</b> (<code>@Model.Comment</code> is safe). The danger is <code>Html.Raw</code>, <code>MarkupString</code>, building HTML with string concatenation, or <code>innerHTML</code> in JavaScript (Days 23 and 24). If you must show rich text, sanitise it with a maintained HTML sanitiser library on the server and allow only a short tag list.</li>\n<li><b>CSP (Content-Security-Policy):</b> a response header that tells the browser which script sources are allowed, for example <code>default-src 'self'</code>. An injected inline script then does not run. It is a <b>second layer</b>, not a replacement for encoding; a strict CSP on an old app with many inline scripts needs work (nonces).</li>\n</ul>\n<p><b>When to use / when not:</b> parameters, default encoding and a least-privilege database login are <b>always on</b> for every endpoint. Use an allow-list for identifiers. Reach for <code>Html.Raw</code> only for content you generated yourself, and say why in a comment. Do not try to \"clean\" input by removing quote characters; that breaks real names like O'Brien and is not a defence.</p>",
        hi: "<ul>\n<li><b>Parameters क्या नहीं कर सकते:</b> table या column का नाम या <code>ORDER BY</code> की direction parameter नहीं हो सकती। User की choice को code में <b>fixed allow-list</b> से map करो (\"price\" से <code>Price</code>), कभी paste मत करो।</li>\n<li><b>XSS (cross-site scripting):</b> untrusted text page में <b>HTML या script</b> बनकर पहुँच जाता है। Razor और Blazor <b>output को default से encode करते हैं</b> (<code>@Model.Comment</code> safe है)। खतरा है <code>Html.Raw</code>, <code>MarkupString</code>, string concatenation से HTML बनाना, या JavaScript में <code>innerHTML</code> (Days 23 और 24)। Rich text दिखाना ही पड़े तो server पर maintained HTML sanitiser library से sanitise करो और सिर्फ़ छोटी tag list allow करो।</li>\n<li><b>CSP (Content-Security-Policy):</b> response header जो browser को बताता है कि कौन-से script sources allowed हैं, जैसे <code>default-src 'self'</code>। तब injected inline script नहीं चलती। यह <b>दूसरी layer</b> है, encoding की जगह नहीं; बहुत inline scripts वाले पुराने app पर strict CSP में मेहनत लगती है (nonces)।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> parameters, default encoding और least-privilege database login <b>हर endpoint के लिए हमेशा on</b> रखो। Identifiers के लिए allow-list use करो। <code>Html.Raw</code> सिर्फ़ उस content के लिए जो तुमने खुद generate किया, और comment में कारण लिखो। Input को \"साफ़\" करने के लिए quote characters मत हटाओ; इससे O'Brien जैसे असली नाम टूटते हैं और यह defence नहीं है।</p>",
        hg: "<ul>\n<li><b>Parameters kya nahi kar sakte:</b> table ya column ka naam ya <code>ORDER BY</code> ki direction parameter nahi ho sakti. User ki choice ko code mein <b>fixed allow-list</b> se map karo (\"price\" se <code>Price</code>), kabhi paste mat karo.</li>\n<li><b>XSS (cross-site scripting):</b> untrusted text page mein <b>HTML ya script</b> bankar pahunch jaata hai. Razor aur Blazor <b>output ko default se encode karte hain</b> (<code>@Model.Comment</code> safe hai). Khatra hai <code>Html.Raw</code>, <code>MarkupString</code>, string concatenation se HTML banana, ya JavaScript mein <code>innerHTML</code> (Days 23 aur 24). Rich text dikhana hi pade to server par maintained HTML sanitiser library se sanitise karo aur sirf chhoti tag list allow karo.</li>\n<li><b>CSP (Content-Security-Policy):</b> response header jo browser ko batata hai ki kaun-se script sources allowed hain, jaise <code>default-src 'self'</code>. Tab injected inline script nahi chalti. Yeh <b>doosri layer</b> hai, encoding ki jagah nahi; bahut inline scripts wale purane app par strict CSP mein mehnat lagti hai (nonces).</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> parameters, default encoding aur least-privilege database login <b>har endpoint ke liye hamesha on</b> rakho. Identifiers ke liye allow-list use karo. <code>Html.Raw</code> sirf us content ke liye jo tumne khud generate kiya, aur comment mein karan likho. Input ko \"saaf\" karne ke liye quote characters mat hatao; isse O'Brien jaise asli naam tootte hain aur yeh defence nahi hai.</p>"
      },
      code: [
        {
          caption: {
            en: "VULNERABLE — don't do this, then the fix: EF Core FromSqlRaw with concatenation vs FromSql with interpolation (compile-checked; Day 6 explains the difference)",
            hi: "VULNERABLE — ऐसा मत करो, फिर fix: concatenation वाला EF Core FromSqlRaw बनाम interpolation वाला FromSql (compile-checked; फ़र्क Day 6 में है)",
            hg: "VULNERABLE — aisa mat karo, phir fix: concatenation wala EF Core FromSqlRaw vs interpolation wala FromSql (compile-checked; farq Day 6 mein hai)"
          },
          check: "compile",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ],
          src: "using Microsoft.EntityFrameworkCore;\n\npublic static class NoteSearch\n{\n    // VULNERABLE - don't do this: the string is built first, then sent as one SQL text\n    public static IQueryable<Note> Bad(AppDb db, string term) =>\n        db.Notes.FromSqlRaw(\"SELECT * FROM Notes WHERE Title LIKE '%\" + term + \"%'\");\n\n    // FIXED: FromSql turns each {hole} into a DbParameter\n    public static IQueryable<Note> Good(AppDb db, string term)\n    {\n        var pattern = \"%\" + term + \"%\";\n        return db.Notes.FromSql($\"SELECT * FROM Notes WHERE Title LIKE {pattern}\");\n    }\n}\n\npublic class Note { public int NoteId { get; set; } public string Title { get; set; } = \"\"; }\npublic class AppDb : DbContext { public DbSet<Note> Notes => Set<Note>(); }"
        }
      ]
    },
    {
      id: "csrf-access-control",
      depth: "detailed",
      title: {
        en: "CSRF, cookies and resource-based authorization",
        hi: "CSRF, cookies और resource-based authorization",
        hg: "CSRF, cookies aur resource-based authorization"
      },
      body: {
        en: "<ul>\n<li><b>CSRF needs a cookie that the browser sends automatically.</b> Defences: <b>antiforgery tokens</b> (Razor Pages validate them automatically; MVC controllers need <code>[ValidateAntiForgeryToken]</code> or <code>[AutoValidateAntiforgeryToken]</code>, often as a global filter; minimal APIs that accept form data need <code>AddAntiforgery()</code> and <code>UseAntiforgery()</code>); <b>SameSite</b> on the auth cookie (Lax is a common default; Strict is stronger but breaks some cross-site links); and not accepting state-changing requests as GET.</li>\n<li><b>Bearer-token APIs</b> read the token from the <code>Authorization</code> header, which a malicious page cannot make the browser add. So classic CSRF mostly does not apply, as long as the token is <b>not</b> stored in a cookie. The trade-off moves to XSS and token storage (Days 13, 23, 24).</li>\n<li><b>Resource-based authorization:</b> when the rule depends on the object (\"only the owner edits this document\"), load the object and call <code>IAuthorizationService.AuthorizeAsync(user, resource, policy)</code>. The check lives in one handler, not scattered <code>if</code>s.</li>\n</ul>\n<p><b>When to use / when not:</b> antiforgery is needed for <b>cookie-authenticated, browser-facing</b> endpoints; for a pure bearer-token API you can disable it on those endpoints. Resource-based checks are for rules that depend on data; use simple policies for role rules. Never skip the ownership check \"because the UI does not show that button\": the attacker does not use your UI.</p>",
        hi: "<ul>\n<li><b>CSRF को ऐसी cookie चाहिए जो browser अपने-आप भेजे।</b> Defences: <b>antiforgery tokens</b> (Razor Pages उन्हें अपने-आप validate करते हैं; MVC controllers को <code>[ValidateAntiForgeryToken]</code> या <code>[AutoValidateAntiforgeryToken]</code> चाहिए, अक्सर global filter की तरह; form data लेने वाली minimal APIs को <code>AddAntiforgery()</code> और <code>UseAntiforgery()</code> चाहिए); auth cookie पर <b>SameSite</b> (Lax common default है; Strict ज़्यादा strong है पर कुछ cross-site links तोड़ता है); और state बदलने वाली requests को GET की तरह accept न करना।</li>\n<li><b>Bearer-token APIs</b> token <code>Authorization</code> header से पढ़ती हैं, जो malicious page browser से नहीं लगवा सकता। इसलिए classic CSRF ज़्यादातर लागू नहीं होता, बशर्ते token cookie में store <b>न</b> हो। Trade-off XSS और token storage पर चला जाता है (Days 13, 23, 24)।</li>\n<li><b>Resource-based authorization:</b> जब rule object पर depend करे (\"सिर्फ़ owner यह document edit करे\"), object load करो और <code>IAuthorizationService.AuthorizeAsync(user, resource, policy)</code> call करो। Check एक handler में रहता है, जगह-जगह बिखरे <code>if</code> में नहीं।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> antiforgery <b>cookie-authenticated, browser-facing</b> endpoints के लिए चाहिए; pure bearer-token API में उन endpoints पर इसे disable कर सकते हो। Resource-based checks उन rules के लिए हैं जो data पर depend करें; role rules के लिए simple policies। Ownership check को कभी यह कहकर skip मत करो कि \"UI में वो button नहीं दिखता\": attacker तुम्हारी UI use नहीं करता।</p>",
        hg: "<ul>\n<li><b>CSRF ko aisi cookie chahiye jo browser apne-aap bheje.</b> Defences: <b>antiforgery tokens</b> (Razor Pages unhein apne-aap validate karte hain; MVC controllers ko <code>[ValidateAntiForgeryToken]</code> ya <code>[AutoValidateAntiforgeryToken]</code> chahiye, aksar global filter ki tarah; form data lene wali minimal APIs ko <code>AddAntiforgery()</code> aur <code>UseAntiforgery()</code> chahiye); auth cookie par <b>SameSite</b> (Lax common default hai; Strict zyada strong hai par kuch cross-site links todta hai); aur state badalne wali requests ko GET ki tarah accept na karna.</li>\n<li><b>Bearer-token APIs</b> token <code>Authorization</code> header se padhti hain, jo malicious page browser se nahi lagwa sakta. Isliye classic CSRF zyadatar lagu nahi hota, basharte token cookie mein store <b>na</b> ho. Trade-off XSS aur token storage par chala jaata hai (Days 13, 23, 24).</li>\n<li><b>Resource-based authorization:</b> jab rule object par depend kare (\"sirf owner yeh document edit kare\"), object load karo aur <code>IAuthorizationService.AuthorizeAsync(user, resource, policy)</code> call karo. Check ek handler mein rehta hai, jagah-jagah bikhre <code>if</code> mein nahi.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> antiforgery <b>cookie-authenticated, browser-facing</b> endpoints ke liye chahiye; pure bearer-token API mein un endpoints par ise disable kar sakte ho. Resource-based checks un rules ke liye hain jo data par depend karein; role rules ke liye simple policies. Ownership check ko kabhi yeh kehkar skip mat karo ki \"UI mein woh button nahi dikhta\": attacker tumhari UI use nahi karta.</p>"
      },
      code: [
        {
          caption: {
            en: "VULNERABLE — don't do this, then the fix: an IDOR endpoint and the same endpoint with a resource-based authorization handler (compile-checked)",
            hi: "VULNERABLE — ऐसा मत करो, फिर fix: IDOR वाला endpoint और वही endpoint resource-based authorization handler के साथ (compile-checked)",
            hg: "VULNERABLE — aisa mat karo, phir fix: IDOR wala endpoint aur wahi endpoint resource-based authorization handler ke saath (compile-checked)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          src: "using System.Security.Claims;\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.Extensions.DependencyInjection;\n\nvar builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddAuthentication(\"cookie\").AddCookie(\"cookie\");\nbuilder.Services.AddAuthorization(o =>\n{\n    o.FallbackPolicy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();   // deny by default\n    o.AddPolicy(\"DocumentOwner\", p => p.Requirements.Add(new OwnerRequirement()));\n});\nbuilder.Services.AddSingleton<IAuthorizationHandler, DocumentOwnerHandler>();\nbuilder.Services.AddSingleton<DocumentStore>();\n\nvar app = builder.Build();\napp.UseAuthentication();\napp.UseAuthorization();\n\n// VULNERABLE - don't do this: logged in is enough, so any user can read any id (IDOR)\napp.MapGet(\"/bad/documents/{id:int}\", (int id, DocumentStore store) =>\n    store.Find(id) is { } d ? Results.Ok(d) : Results.NotFound());\n\n// FIXED: load the object, then ask \"may THIS user see THIS document?\"\napp.MapGet(\"/documents/{id:int}\", async (int id, DocumentStore store, IAuthorizationService auth, ClaimsPrincipal user) =>\n{\n    var doc = store.Find(id);\n    if (doc is null) return Results.NotFound();\n    var result = await auth.AuthorizeAsync(user, doc, \"DocumentOwner\");\n    return result.Succeeded ? Results.Ok(doc) : Results.NotFound();   // 404 also hides that the id exists\n});\n\napp.Run();\n\nrecord Document(int Id, string OwnerId, string Title);\n\nclass DocumentStore\n{\n    private readonly Dictionary<int, Document> _docs = new()\n    {\n        [1] = new Document(1, \"asha\", \"Salary slip\"),\n        [2] = new Document(2, \"ravi\", \"Bank statement\"),\n    };\n    public Document? Find(int id) => _docs.GetValueOrDefault(id);\n}\n\nclass OwnerRequirement : IAuthorizationRequirement { }\n\nclass DocumentOwnerHandler : AuthorizationHandler<OwnerRequirement, Document>\n{\n    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, OwnerRequirement requirement, Document doc)\n    {\n        // the user id comes from the signed-in identity, never from the request\n        if (context.User.FindFirstValue(ClaimTypes.NameIdentifier) == doc.OwnerId)\n            context.Succeed(requirement);\n        return Task.CompletedTask;\n    }\n}"
        },
        {
          caption: {
            en: "Cookie auth with antiforgery, SameSite, HSTS, a global exception handler and basic security headers including CSP (compile-checked; headers are a starting point)",
            hi: "Antiforgery, SameSite, HSTS, global exception handler और CSP समेत basic security headers के साथ cookie auth (compile-checked; headers एक शुरुआत हैं)",
            hg: "Antiforgery, SameSite, HSTS, global exception handler aur CSP samet basic security headers ke saath cookie auth (compile-checked; headers ek shuruaat hain)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nvar builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddProblemDetails();\nbuilder.Services.AddAntiforgery();\nbuilder.Services.AddAuthentication(\"cookie\").AddCookie(\"cookie\", o =>\n{\n    o.Cookie.HttpOnly = true;                              // not readable from JavaScript\n    o.Cookie.SecurePolicy = CookieSecurePolicy.Always;     // only over HTTPS\n    o.Cookie.SameSite = SameSiteMode.Lax;                  // not sent on cross-site POSTs\n});\nbuilder.Services.AddAuthorization();\n\nvar app = builder.Build();\n\nif (!app.Environment.IsDevelopment())\n{\n    app.UseExceptionHandler();   // generic ProblemDetails, no stack trace for callers\n    app.UseHsts();               // tell browsers to use HTTPS only\n}\napp.UseHttpsRedirection();\n\napp.Use(async (context, next) =>\n{\n    var headers = context.Response.Headers;\n    headers[\"X-Content-Type-Options\"] = \"nosniff\";\n    headers[\"Referrer-Policy\"] = \"no-referrer\";\n    headers[\"Content-Security-Policy\"] = \"default-src 'self'; frame-ancestors 'none'\";\n    await next();\n});\n\napp.UseAuthentication();\napp.UseAuthorization();\napp.UseAntiforgery();        // after authentication and authorization\n\napp.MapPost(\"/profile\", ([FromForm] ProfileForm form) => Results.Ok(form.DisplayName)).RequireAuthorization();\n\napp.Run();\n\nrecord ProfileForm(string DisplayName);"
        }
      ]
    },
    {
      id: "auth-crypto",
      depth: "detailed",
      title: {
        en: "Identity, transport and the Data Protection API",
        hi: "Identity, transport और Data Protection API",
        hg: "Identity, transport aur Data Protection API"
      },
      body: {
        en: "<ul>\n<li><b>Do not build your own login.</b> Use <b>ASP.NET Core Identity</b> (users, hashing, lockout, MFA, email confirmation) or an external identity provider such as Microsoft Entra ID or another OIDC provider (Day 13 covers JWT and tokens). Owning passwords means owning breach risk.</li>\n<li><b>Login hygiene:</b> <b>lockout</b> after repeated failures (Identity has it) and rate limits (Day 13); <b>MFA</b> for admins at least; the <b>same error message</b> for \"unknown user\" and \"wrong password\" so attackers cannot list your users; passphrases allowed and a breached-password check if you can.</li>\n<li><b>Transport:</b> TLS everywhere, <code>UseHttpsRedirection</code> and <b>HSTS</b> (<code>UseHsts</code>; the template enables it only outside Development, and it also excludes localhost, because browsers would cache the rule). Internal service-to-service traffic needs TLS too unless the network is genuinely trusted and that decision is written down.</li>\n<li><b>Data Protection API:</b> ASP.NET Core uses it to protect auth cookies and antiforgery tokens, and you can use <code>IDataProtector</code> for small secrets you issue (reset links, state values). Its <b>keys must be shared and persisted</b> across instances (for example a shared blob store protected by Key Vault, Day 20); otherwise users are logged out on every deployment or load-balanced request. It is <b>not</b> a general database encryption tool.</li>\n<li><b>PasswordHasher in practice:</b> Identity's <code>PasswordHasher</code> follows the recipe from lesson 5 for you (V3 format since .NET 7: PBKDF2 with HMAC-SHA512, 100,000 iterations, a random 128-bit salt, and the iteration count stored in the hash; raise it with <code>PasswordHasherOptions.IterationCount</code>) and returns <code>SuccessRehashNeeded</code> so you can upgrade an old hash after a good login. See the first code sample.</li>\n</ul>\n<p><b>When to use / when not:</b> use Identity or an external provider for any user-facing login; hash with <code>PasswordHasher</code>; use <code>FixedTimeEquals</code> whenever a secret is compared. Do not use SHA256 for passwords even \"with a salt\"; do not use <code>Random</code> for security values; do not catch a <code>CryptographicException</code> and carry on as if the data were valid.</p>",
        hi: "<ul>\n<li><b>अपना login मत बनाओ।</b> <b>ASP.NET Core Identity</b> (users, hashing, lockout, MFA, email confirmation) या Microsoft Entra ID जैसा external identity provider या कोई और OIDC provider use करो (JWT और tokens Day 13 में हैं)। Passwords अपने पास रखने का मतलब breach का risk भी अपने पास।</li>\n<li><b>Login hygiene:</b> बार-बार fail होने पर <b>lockout</b> (Identity में है) और rate limits (Day 13); कम से कम admins के लिए <b>MFA</b>; \"unknown user\" और \"wrong password\" के लिए <b>same error message</b> ताकि attackers तुम्हारे users की list न बना सकें; passphrases allowed और हो सके तो breached-password check।</li>\n<li><b>Transport:</b> हर जगह TLS, <code>UseHttpsRedirection</code> और <b>HSTS</b> (<code>UseHsts</code>; template इसे सिर्फ़ Development के बाहर enable करता है, और यह localhost को भी exclude करता है, क्योंकि browser वो rule cache कर लेते)। Internal service-to-service traffic को भी TLS चाहिए, जब तक network सच में trusted न हो और वो decision लिखा हुआ न हो।</li>\n<li><b>Data Protection API:</b> ASP.NET Core इससे auth cookies और antiforgery tokens protect करता है, और तुम जो छोटे secrets issue करते हो (reset links, state values) उनके लिए <code>IDataProtector</code> use कर सकते हो। इसकी <b>keys instances के बीच shared और persisted</b> होनी चाहिए (जैसे Key Vault से protected shared blob store, Day 20); वरना हर deployment या load-balanced request पर users logout हो जाते हैं। यह database encryption का general tool <b>नहीं</b> है।</li>\n<li><b>PasswordHasher असल में:</b> Identity का <code>PasswordHasher</code> lesson 5 वाला तरीक़ा आपके लिए ख़ुद अपनाता है (.NET 7 से V3 format: HMAC-SHA512 वाला PBKDF2, 100,000 iterations, 128-bit random salt, और iteration की गिनती hash में ही रखी; इसे <code>PasswordHasherOptions.IterationCount</code> से बढ़ा सकते हो) और <code>SuccessRehashNeeded</code> लौटाता है ताकि सही login के बाद पुराना hash upgrade हो सके। पहला code sample देखो।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> user-facing login के लिए Identity या external provider; hash के लिए <code>PasswordHasher</code>; जब भी secret compare हो तो <code>FixedTimeEquals</code>। Passwords के लिए SHA256 \"salt के साथ\" भी मत use करो; security values के लिए <code>Random</code> मत use करो; <code>CryptographicException</code> को catch करके ऐसे आगे मत बढ़ो जैसे data valid हो।</p>",
        hg: "<ul>\n<li><b>Apna login mat banao.</b> <b>ASP.NET Core Identity</b> (users, hashing, lockout, MFA, email confirmation) ya Microsoft Entra ID jaisa external identity provider ya koi aur OIDC provider use karo (JWT aur tokens Day 13 mein hain). Passwords apne paas rakhne ka matlab breach ka risk bhi apne paas.</li>\n<li><b>Login hygiene:</b> baar-baar fail hone par <b>lockout</b> (Identity mein hai) aur rate limits (Day 13); kam se kam admins ke liye <b>MFA</b>; \"unknown user\" aur \"wrong password\" ke liye <b>same error message</b> taaki attackers tumhare users ki list na bana sakein; passphrases allowed aur ho sake to breached-password check.</li>\n<li><b>Transport:</b> har jagah TLS, <code>UseHttpsRedirection</code> aur <b>HSTS</b> (<code>UseHsts</code>; template ise sirf Development ke bahar enable karta hai, aur yeh localhost ko bhi exclude karta hai, kyunki browser woh rule cache kar lete). Internal service-to-service traffic ko bhi TLS chahiye, jab tak network sach mein trusted na ho aur woh decision likha hua na ho.</li>\n<li><b>Data Protection API:</b> ASP.NET Core isse auth cookies aur antiforgery tokens protect karta hai, aur tum jo chhote secrets issue karte ho (reset links, state values) unke liye <code>IDataProtector</code> use kar sakte ho. Iski <b>keys instances ke beech shared aur persisted</b> honi chahiye (jaise Key Vault se protected shared blob store, Day 20); warna har deployment ya load-balanced request par users logout ho jaate hain. Yeh database encryption ka general tool <b>nahi</b> hai.</li>\n<li><b>PasswordHasher asal mein:</b> Identity ka <code>PasswordHasher</code> lesson 5 wala tareeqa aapke liye khud apnata hai (.NET 7 se V3 format: HMAC-SHA512 wala PBKDF2, 100,000 iterations, 128-bit random salt, aur iteration ki ginti hash mein hi rakhi; ise <code>PasswordHasherOptions.IterationCount</code> se badha sakte ho) aur <code>SuccessRehashNeeded</code> lautata hai taaki sahi login ke baad purana hash upgrade ho sake. Pehla code sample dekho.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> user-facing login ke liye Identity ya external provider; hash ke liye <code>PasswordHasher</code>; jab bhi secret compare ho to <code>FixedTimeEquals</code>. Passwords ke liye SHA256 \"salt ke saath\" bhi mat use karo; security values ke liye <code>Random</code> mat use karo; <code>CryptographicException</code> ko catch karke aise aage mat badho jaise data valid ho.</p>"
      },
      code: [
        {
          caption: {
            en: "VULNERABLE — don't do this (fast hash, kept only as a labelled local function), then the fix: a login with PasswordHasher, one error message and rehash-on-login",
            hi: "VULNERABLE — ऐसा मत करो (fast hash, सिर्फ़ label लगे local function में), फिर fix: PasswordHasher, एक ही error message और login पर rehash वाला login",
            hg: "VULNERABLE — aisa mat karo (fast hash, sirf label lage local function mein), phir fix: PasswordHasher, ek hi error message aur login par rehash wala login"
          },
          check: "run",
          frameworks: [
            "aspnetcore"
          ],
          expected: "welcome asha\ninvalid user name or password\ninvalid user name or password\nbad hash length: 64",
          src: "using System.Security.Cryptography;\nusing System.Text;\nusing Microsoft.AspNetCore.Identity;\n\n// VULNERABLE - don't do this: a fast, unsalted hash can be cracked with lookup tables (never used below)\nstatic string BadHash(string password) => Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes(password)));\n\n// FIXED: PasswordHasher (PBKDF2 + random salt), the same message for unknown user and wrong password\nvar hasher = new PasswordHasher<string>();\nvar store = new Dictionary<string, string> { [\"asha\"] = hasher.HashPassword(\"asha\", \"Correct-Horse-9\") };\nstring dummyHash = hasher.HashPassword(\"nobody\", \"unused-value\");   // checked for unknown users too, so the work is similar\n\nstring Login(string user, string password)\n{\n    bool known = store.TryGetValue(user, out var hash);\n    var result = hasher.VerifyHashedPassword(user, known ? hash! : dummyHash, password);\n    if (!known || result == PasswordVerificationResult.Failed)\n        return \"invalid user name or password\";\n    if (result == PasswordVerificationResult.SuccessRehashNeeded)\n        store[user] = hasher.HashPassword(user, password);          // upgrade old hashes on a good login\n    return \"welcome \" + user;\n}\n\nConsole.WriteLine(Login(\"asha\", \"Correct-Horse-9\"));\nConsole.WriteLine(Login(\"asha\", \"wrong-password\"));\nConsole.WriteLine(Login(\"ghost\", \"Correct-Horse-9\"));\nConsole.WriteLine(\"bad hash length: \" + BadHash(\"a\").Length);"
        },
        {
          caption: {
            en: "Data Protection API: protect and unprotect a small value, and what a tampered payload does (ephemeral provider for the demo; real apps persist their keys)",
            hi: "Data Protection API: छोटी value protect और unprotect करना, और tampered payload का क्या होता है (demo के लिए ephemeral provider; real apps अपनी keys persist करते हैं)",
            hg: "Data Protection API: chhoti value protect aur unprotect karna, aur tampered payload ka kya hota hai (demo ke liye ephemeral provider; real apps apni keys persist karte hain)"
          },
          check: "run",
          frameworks: [
            "aspnetcore"
          ],
          expected: "round trip: user=asha;exp=2030-01-01\ntampered: rejected\ndifferent protector can read it: False",
          src: "using System.Security.Cryptography;\nusing Microsoft.AspNetCore.DataProtection;\n\n// Demo only: keys live in memory. A real app calls AddDataProtection().PersistKeysTo...(shared store) and protects keys with Key Vault.\nvar provider = new EphemeralDataProtectionProvider();\nIDataProtector protector = provider.CreateProtector(\"ResetLink.v1\");\n\nstring token = protector.Protect(\"user=asha;exp=2030-01-01\");\nConsole.WriteLine(\"round trip: \" + protector.Unprotect(token));\n\nstring tampered = token[..^2] + (token[^2] == 'A' ? \"B\" : \"A\") + token[^1];\ntry\n{\n    protector.Unprotect(tampered);\n    Console.WriteLine(\"tampered: accepted\");\n}\ncatch (CryptographicException)\n{\n    Console.WriteLine(\"tampered: rejected\");\n}\n\n// another purpose string = another key: a token made for one feature is useless in another\nIDataProtector other = provider.CreateProtector(\"Invite.v1\");\nConsole.WriteLine(\"different protector can read it: \" + (TryRead(other, token)));\n\nstatic bool TryRead(IDataProtector p, string t)\n{\n    try { p.Unprotect(t); return true; }\n    catch (CryptographicException) { return false; }\n}"
        }
      ]
    },
    {
      id: "misconfig-supply-ssrf",
      depth: "detailed",
      title: {
        en: "Misconfiguration, vulnerable packages, SSRF, logging and deserialization",
        hi: "Misconfiguration, vulnerable packages, SSRF, logging और deserialization",
        hg: "Misconfiguration, vulnerable packages, SSRF, logging aur deserialization"
      },
      body: {
        en: "<p><b>Analogy:</b> a flat with a strong door but a spare key under the doormat, a delivery boy who delivers wherever the slip says (even inside the society's strong room), and a visitor register where guests write their bank PIN. Each is a small mistake, and each is common.</p>\n<ul>\n<li><b>Security misconfiguration:</b> the developer exception page or stack traces in production; sample or default credentials; <code>AllowAnyOrigin</code> with credentials; open storage containers; debug endpoints (Swagger, health details) exposed publicly; missing headers (<code>X-Content-Type-Options</code>, CSP, HSTS). Fix with <b>environment-specific config in code, reviewed like code</b>, and a startup check in staging that calls the app like an attacker would.</li>\n<li><b>Vulnerable and outdated packages (supply chain):</b> since the .NET 8 SDK, <b>NuGet Audit</b> runs during restore and warns about known-vulnerable packages (codes NU1901 to NU1904 by severity). For .NET 10 projects the default audit mode includes <b>transitive</b> packages; before that the default is direct packages only. <code>dotnet list package --vulnerable --include-transitive</code> shows the same data on demand. Add <b>Dependabot</b> or Renovate for update pull requests, and consider lock files or Central Package Management to control versions.</li>\n<li><b>SSRF (server-side request forgery):</b> your server fetches a URL the user supplied (webhook, \"import from URL\", image proxy), and the attacker points it at <code>http://169.254.169.254/</code> (cloud metadata), <code>localhost</code> or an internal admin service. Defences: an <b>allow-list of hosts</b>, https only, parse the URL before comparing (see the URL puzzle), block private, loopback and link-local addresses <b>after DNS resolution</b>, do not follow redirects blindly, and run the fetcher with no special network access.</li>\n<li><b>Logging and monitoring:</b> log security events (login success and failure, access denied, admin actions) with user id and correlation id, and alert on spikes. <b>Never log passwords, tokens, full card numbers or unneeded PII</b>; log ids, not whole objects. Beware of log injection: use structured logging so user text stays a value, not a new log line.</li>\n<li><b>Deserialization:</b> do not deserialize untrusted data into arbitrary types. <code>BinaryFormatter</code> is removed from modern .NET (Day 22). <code>System.Text.Json</code> into your own DTOs is the safe default; avoid Newtonsoft <code>TypeNameHandling</code> other than <code>None</code> for untrusted input, and never accept a type name from the client.</li>\n</ul>\n<p><b>When to use / when not:</b> turn NuGet Audit on everywhere (it is on by default) and decide in the team <b>which severity fails the build</b>; failing every build on a \"low\" advisory trains people to ignore the warnings. Use an SSRF allow-list for any feature that fetches user URLs; if the feature can be removed (accept an upload instead), remove it. Do not use a deny-list of \"bad\" hosts as the only defence; attackers find spellings you did not list.</p>",
        hi: "<p><b>Analogy:</b> एक flat जिसका दरवाज़ा मज़बूत है पर doormat के नीचे spare key है, एक delivery boy जो slip पर जहाँ लिखा हो वहाँ deliver कर देता है (society के strong room के अंदर भी), और एक visitor register जिसमें guests अपना bank PIN लिख देते हैं। हर एक छोटी गलती है, और हर एक common है।</p>\n<ul>\n<li><b>Security misconfiguration:</b> production में developer exception page या stack traces; sample या default credentials; credentials के साथ <code>AllowAnyOrigin</code>; खुले storage containers; public रूप से exposed debug endpoints (Swagger, health details); missing headers (<code>X-Content-Type-Options</code>, CSP, HSTS)। Fix: <b>code में environment-specific config जिसका review code की तरह हो</b>, और staging में startup check जो app को attacker की तरह call करे।</li>\n<li><b>Vulnerable और outdated packages (supply chain):</b> .NET 8 SDK से <b>NuGet Audit</b> restore के दौरान चलता है और known-vulnerable packages पर warn करता है (severity के हिसाब से codes NU1901 से NU1904)। .NET 10 projects में default audit mode <b>transitive</b> packages भी शामिल करता है; उससे पहले default सिर्फ़ direct packages है। <code>dotnet list package --vulnerable --include-transitive</code> वही data माँगने पर दिखाता है। Update pull requests के लिए <b>Dependabot</b> या Renovate लगाओ, और versions control करने के लिए lock files या Central Package Management सोचो।</li>\n<li><b>SSRF (server-side request forgery):</b> तुम्हारा server user का दिया URL fetch करता है (webhook, \"import from URL\", image proxy), और attacker उसे <code>http://169.254.169.254/</code> (cloud metadata), <code>localhost</code> या internal admin service पर point कर देता है। Defences: <b>hosts की allow-list</b>, सिर्फ़ https, compare करने से पहले URL parse करो (URL puzzle देखो), private, loopback और link-local addresses को <b>DNS resolution के बाद</b> block करो, redirects को आँख बंद करके follow मत करो, और fetcher को बिना special network access के चलाओ।</li>\n<li><b>Logging और monitoring:</b> security events (login success और failure, access denied, admin actions) को user id और correlation id के साथ log करो, और spikes पर alert लगाओ। <b>Passwords, tokens, full card numbers या ग़ैर-ज़रूरी PII कभी log मत करो</b>; पूरे objects की जगह ids log करो। Log injection से सावधान: structured logging use करो ताकि user text एक value रहे, नई log line नहीं।</li>\n<li><b>Deserialization:</b> untrusted data को arbitrary types में deserialize मत करो। <code>BinaryFormatter</code> modern .NET से हटा दिया गया है (Day 22)। अपने DTOs में <code>System.Text.Json</code> safe default है; untrusted input के लिए Newtonsoft <code>TypeNameHandling</code> को <code>None</code> के अलावा avoid करो, और client से type name कभी accept मत करो।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> NuGet Audit हर जगह on रखो (यह default से on है) और team में तय करो कि <b>कौन-सी severity build fail करे</b>; हर \"low\" advisory पर build fail करने से लोग warnings ignore करना सीख जाते हैं। User URLs fetch करने वाले हर feature के लिए SSRF allow-list; अगर feature हटाया जा सकता है (URL की जगह upload accept करो) तो हटा दो। \"Bad\" hosts की deny-list को अकेली defence मत बनाओ; attackers ऐसी spellings ढूँढ लेते हैं जो तुमने list नहीं कीं।</p>",
        hg: "<p><b>Analogy:</b> ek flat jiska darwaza mazboot hai par doormat ke neeche spare key hai, ek delivery boy jo slip par jahan likha ho wahan deliver kar deta hai (society ke strong room ke andar bhi), aur ek visitor register jisme guests apna bank PIN likh dete hain. Har ek chhoti galti hai, aur har ek common hai.</p>\n<ul>\n<li><b>Security misconfiguration:</b> production mein developer exception page ya stack traces; sample ya default credentials; credentials ke saath <code>AllowAnyOrigin</code>; khule storage containers; public roop se exposed debug endpoints (Swagger, health details); missing headers (<code>X-Content-Type-Options</code>, CSP, HSTS). Fix: <b>code mein environment-specific config jiska review code ki tarah ho</b>, aur staging mein startup check jo app ko attacker ki tarah call kare.</li>\n<li><b>Vulnerable aur outdated packages (supply chain):</b> .NET 8 SDK se <b>NuGet Audit</b> restore ke dauran chalta hai aur known-vulnerable packages par warn karta hai (severity ke hisaab se codes NU1901 se NU1904). .NET 10 projects mein default audit mode <b>transitive</b> packages bhi shamil karta hai; usse pehle default sirf direct packages hai. <code>dotnet list package --vulnerable --include-transitive</code> wahi data maangne par dikhata hai. Update pull requests ke liye <b>Dependabot</b> ya Renovate lagao, aur versions control karne ke liye lock files ya Central Package Management socho.</li>\n<li><b>SSRF (server-side request forgery):</b> tumhara server user ka diya URL fetch karta hai (webhook, \"import from URL\", image proxy), aur attacker use <code>http://169.254.169.254/</code> (cloud metadata), <code>localhost</code> ya internal admin service par point kar deta hai. Defences: <b>hosts ki allow-list</b>, sirf https, compare karne se pehle URL parse karo (URL puzzle dekho), private, loopback aur link-local addresses ko <b>DNS resolution ke baad</b> block karo, redirects ko aankh band karke follow mat karo, aur fetcher ko bina special network access ke chalao.</li>\n<li><b>Logging aur monitoring:</b> security events (login success aur failure, access denied, admin actions) ko user id aur correlation id ke saath log karo, aur spikes par alert lagao. <b>Passwords, tokens, full card numbers ya gair-zaroori PII kabhi log mat karo</b>; poore objects ki jagah ids log karo. Log injection se saavdhan: structured logging use karo taaki user text ek value rahe, nayi log line nahi.</li>\n<li><b>Deserialization:</b> untrusted data ko arbitrary types mein deserialize mat karo. <code>BinaryFormatter</code> modern .NET se hata diya gaya hai (Day 22). Apne DTOs mein <code>System.Text.Json</code> safe default hai; untrusted input ke liye Newtonsoft <code>TypeNameHandling</code> ko <code>None</code> ke alawa avoid karo, aur client se type name kabhi accept mat karo.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> NuGet Audit har jagah on rakho (yeh default se on hai) aur team mein tay karo ki <b>kaun-si severity build fail kare</b>; har \"low\" advisory par build fail karne se log warnings ignore karna seekh jaate hain. User URLs fetch karne wale har feature ke liye SSRF allow-list; agar feature hataya ja sakta hai (URL ki jagah upload accept karo) to hata do. \"Bad\" hosts ki deny-list ko akeli defence mat banao; attackers aisi spellings dhoondh lete hain jo tumne list nahi ki.</p>"
      },
      code: [
        {
          lang: "text",
          caption: {
            en: "Repository-level NuGet Audit settings in Directory.Build.props (MSBuild XML shown as text; properties and defaults are from the NuGet docs)",
            hi: "Directory.Build.props में repository-level NuGet Audit settings (MSBuild XML text की तरह; properties और defaults NuGet docs से हैं)",
            hg: "Directory.Build.props mein repository-level NuGet Audit settings (MSBuild XML text ki tarah; properties aur defaults NuGet docs se hain)"
          },
          check: "none",
          src: "<Project>\n  <PropertyGroup>\n    <NuGetAudit>true</NuGetAudit>             <!-- on by default -->\n    <NuGetAuditMode>all</NuGetAuditMode>       <!-- direct + transitive (default is \"all\" only for net10.0+) -->\n    <NuGetAuditLevel>moderate</NuGetAuditLevel> <!-- report moderate, high, critical -->\n  </PropertyGroup>\n  <PropertyGroup>\n    <!-- in the audit pipeline only (restore with -p:AuditPipeline=true): high (NU1903) and critical (NU1904) advisories fail the build -->\n    <WarningsAsErrors Condition=\"'$(AuditPipeline)' == 'true'\">$(WarningsAsErrors);NU1903;NU1904</WarningsAsErrors>\n  </PropertyGroup>\n</Project>"
        },
        {
          lang: "bash",
          caption: {
            en: "Checking packages by hand (dotnet package update --vulnerable needs the .NET 10 SDK)",
            hi: "Packages हाथ से check करना (dotnet package update --vulnerable के लिए .NET 10 SDK चाहिए)",
            hg: "Packages haath se check karna (dotnet package update --vulnerable ke liye .NET 10 SDK chahiye)"
          },
          check: "none",
          src: "dotnet list package --vulnerable --include-transitive   # which packages have known advisories, including transitive ones\ndotnet nuget why MyApp.csproj Some.Vulnerable.Package   # why is it in my graph? (shows the dependency path)\ndotnet package update --vulnerable                      # .NET 10 SDK: move vulnerable packages to the first non-vulnerable version"
        },
        {
          caption: {
            en: "SSRF guard: is a resolved IP address public? (VULNERABLE fetch-anything helper kept only as a labelled, unused local function)",
            hi: "SSRF guard: क्या resolved IP address public है? (VULNERABLE fetch-anything helper सिर्फ़ label लगे, unused local function में)",
            hg: "SSRF guard: kya resolved IP address public hai? (VULNERABLE fetch-anything helper sirf label lage, unused local function mein)"
          },
          check: "run",
          expected: "8.8.8.8          public=True\n10.1.2.3         public=False\n172.16.0.9       public=False\n172.32.0.9       public=True\n192.168.1.20     public=False\n169.254.169.254  public=False\n127.0.0.1        public=False\n::1              public=False\n::ffff:10.0.0.1  public=False",
          src: "using System.Net;\nusing System.Net.Sockets;\n\n// VULNERABLE - don't do this: fetch whatever URL the user supplied (never called below)\nstatic Task<string> BadFetch(HttpClient http, string userUrl) => http.GetStringAsync(userUrl);\n\n// FIXED (part 2 of 3): after DNS resolution, refuse addresses that point inside your network.\n// Parts 1 and 3: allow-list the host first (see the URL puzzle) and connect to the address you checked.\nstatic bool IsPublicAddress(IPAddress ip)\n{\n    if (ip.IsIPv4MappedToIPv6) ip = ip.MapToIPv4();\n    if (IPAddress.IsLoopback(ip)) return false;\n    if (ip.AddressFamily == AddressFamily.InterNetworkV6)\n        return !(ip.IsIPv6LinkLocal || ip.IsIPv6SiteLocal || ip.IsIPv6UniqueLocal);\n\n    var b = ip.GetAddressBytes();\n    bool isPrivate =\n        b[0] == 0 || b[0] == 10 || b[0] == 127 ||\n        (b[0] == 172 && b[1] is >= 16 and <= 31) ||\n        (b[0] == 192 && b[1] == 168) ||\n        (b[0] == 169 && b[1] == 254);          // link-local, includes the cloud metadata address 169.254.169.254\n    return !isPrivate;\n}\n\nforeach (var text in new[] { \"8.8.8.8\", \"10.1.2.3\", \"172.16.0.9\", \"172.32.0.9\", \"192.168.1.20\", \"169.254.169.254\", \"127.0.0.1\", \"::1\", \"::ffff:10.0.0.1\" })\n    Console.WriteLine($\"{text,-16} public={IsPublicAddress(IPAddress.Parse(text))}\");"
        },
        {
          caption: {
            en: "VULNERABLE — don't do this, then the fix: logging a password and a full e-mail vs logging ids and a reason (compile-checked)",
            hi: "VULNERABLE — ऐसा मत करो, फिर fix: password और पूरा e-mail log करना बनाम ids और reason log करना (compile-checked)",
            hg: "VULNERABLE — aisa mat karo, phir fix: password aur poora e-mail log karna vs ids aur reason log karna (compile-checked)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          src: "using Microsoft.Extensions.Logging;\n\npublic class LoginAudit(ILogger<LoginAudit> logger)\n{\n    // VULNERABLE - don't do this: the secret and personal data end up in log files, backups and dashboards\n    public void FailedBad(string email, string password) =>\n        logger.LogWarning(\"Login failed for {Email} with password {Password}\", email, password);\n\n    // FIXED: a stable id and a reason; no secret, no free-text personal data\n    public void Failed(string userId, string reason, string correlationId) =>\n        logger.LogWarning(\"Login failed for user {UserId}, reason {Reason}, correlation {CorrelationId}\", userId, reason, correlationId);\n}"
        }
      ]
    },
    {
      id: "tl-security",
      depth: "detailed",
      title: {
        en: "Secure code-review checklist and security in CI",
        hi: "Secure code-review checklist और CI में security",
        hg: "Secure code-review checklist aur CI mein security"
      },
      body: {
        en: "<ul>\n<li><b>Secure code-review checklist (put it in the PR template):</b> Is every endpoint authenticated and authorized (and the <b>ownership</b> checked)? Any string-built SQL, HTML, shell command or file path? Any new secret, connection string or key in code, config or logs? Is user input validated (type, length, range) and output encoded? Any new outbound URL fetched from user input? New package: licence, maintenance, known advisories? Are errors generic for callers and detailed in logs? Does a new endpoint have a rate limit and a size limit? Is there a test for the abuse case, not only the happy path?</li>\n<li><b>Security in CI (shift left):</b> build fails on known vulnerable packages at an agreed severity; secret scanning on every push (Day 21); static analysis (.NET analyzers, CodeQL or similar) on pull requests; container image scan; pinned versions of pipeline actions and base images; signed or provenance-checked artifacts where your risk needs it; DAST or a pen test on a schedule before big releases.</li>\n</ul>\n<p><b>When to use / when not:</b> keep the checklist to what your reviews really catch; a 60-item form is never read. Tune security tools before you let them fail builds, because a tool that fails on noise gets switched off. Threat modelling itself is lesson 6.</p>",
        hi: "<ul>\n<li><b>Secure code-review checklist (PR template में रखो):</b> क्या हर endpoint authenticated और authorized है (और <b>ownership</b> check हुआ)? कहीं string से बना SQL, HTML, shell command या file path? कोई नया secret, connection string या key code, config या logs में? क्या user input validate हुआ (type, length, range) और output encode हुआ? User input से fetch होने वाला कोई नया outbound URL? नया package: licence, maintenance, known advisories? क्या callers के लिए errors generic हैं और logs में detailed? नए endpoint पर rate limit और size limit है? क्या abuse case का test है, सिर्फ़ happy path का नहीं?</li>\n<li><b>CI में security (shift left):</b> agreed severity पर known vulnerable packages से build fail; हर push पर secret scanning (Day 21); pull requests पर static analysis (.NET analyzers, CodeQL या similar); container image scan; pipeline actions और base images के pinned versions; जहाँ risk माँगे वहाँ signed या provenance-checked artifacts; बड़ी releases से पहले schedule पर DAST या pen test।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> checklist उतनी ही रखो जितना आपके reviews सच में पकड़ते हैं; 60 items का form कोई नहीं पढ़ता। Security tools को build fail करने देने से पहले tune करो, क्योंकि शोर पर fail होने वाला tool बंद कर दिया जाता है। Threat modelling ख़ुद lesson 6 है।</p>",
        hg: "<ul>\n<li><b>Secure code-review checklist (PR template mein rakho):</b> kya har endpoint authenticated aur authorized hai (aur <b>ownership</b> check hua)? Kahin string se bana SQL, HTML, shell command ya file path? Koi naya secret, connection string ya key code, config ya logs mein? Kya user input validate hua (type, length, range) aur output encode hua? User input se fetch hone wala koi naya outbound URL? Naya package: licence, maintenance, known advisories? Kya callers ke liye errors generic hain aur logs mein detailed? Naye endpoint par rate limit aur size limit hai? Kya abuse case ka test hai, sirf happy path ka nahi?</li>\n<li><b>CI mein security (shift left):</b> agreed severity par known vulnerable packages se build fail; har push par secret scanning (Day 21); pull requests par static analysis (.NET analyzers, CodeQL ya similar); container image scan; pipeline actions aur base images ke pinned versions; jahan risk maange wahan signed ya provenance-checked artifacts; badi releases se pehle schedule par DAST ya pen test.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> checklist utni hi rakho jitna aapke reviews sach mein pakadte hain; 60 items ka form koi nahi padhta. Security tools ko build fail karne dene se pehle tune karo, kyunki shor par fail hone wala tool band kar diya jaata hai. Threat modelling khud lesson 6 hai.</p>"
      },
      code: [
        {
          lang: "yaml",
          caption: {
            en: "A dedicated audit job (Azure Pipelines YAML): same repo setting as above, but advisories become errors only when AuditPipeline=true (pattern from the NuGet docs)",
            hi: "अलग audit job (Azure Pipelines YAML): ऊपर वाली repo setting, पर advisories सिर्फ़ AuditPipeline=true पर errors बनती हैं (NuGet docs का pattern)",
            hg: "Alag audit job (Azure Pipelines YAML): upar wali repo setting, par advisories sirf AuditPipeline=true par errors banti hain (NuGet docs ka pattern)"
          },
          check: "none",
          src: "# Directory.Build.props maps the audit codes to errors only when $(AuditPipeline) == 'true'\ntrigger: none\nschedules:\n  - cron: \"0 3 * * *\"          # nightly: new advisories appear without any code change\n    branches: { include: [ main ] }\n    always: true\n\npool: { vmImage: ubuntu-latest }\n\nsteps:\n  - script: dotnet restore -p:AuditPipeline=true\n    displayName: Restore with NuGet Audit as errors\n  - script: dotnet list package --vulnerable --include-transitive\n    displayName: Print the vulnerable packages (for the report)"
        }
      ]
    },
    {
      id: "measure-tools",
      depth: "detailed",
      title: {
        en: "Tools for measuring: BenchmarkDotNet, dotnet-counters, telemetry",
        hi: "नापने के tools: BenchmarkDotNet, dotnet-counters, telemetry",
        hg: "Naapne ke tools: BenchmarkDotNet, dotnet-counters, telemetry"
      },
      body: {
        en: "<ul>\n<li><b>dotnet-counters:</b> live CPU, GC, thread-pool and request-rate counters from a running process. <b>dotnet-trace:</b> CPU sampling trace you open in Visual Studio, PerfView or Speedscope. <b>dotnet-dump / dotnet-gcdump:</b> memory and hang analysis.</li>\n<li><b>Production telemetry:</b> Application Insights or OpenTelemetry traces, metrics and logs show <b>which dependency</b> is slow (Days 16 and 20).</li>\n<li><b>Order of wins (usually):</b> fix N+1 and missing indexes (Days 6, 18); cache what is safe to cache (Day 13); async all the way so threads are not blocked (Day 3); return less data (pagination, projection, compression); only then tune allocations (Spans, pooling).</li>\n</ul>\n<p><b>When to use / when not:</b> micro-benchmarks are for <b>hot paths you have proven are hot</b>, for example a parser that runs millions of times. Do not rewrite readable code with Span tricks because it \"should be faster\"; if a profile does not point at it, the change only adds risk. For a slow endpoint start with a trace, not a benchmark.</p>",
        hi: "<ul>\n<li><b>dotnet-counters:</b> चलते process से live CPU, GC, thread-pool और request-rate counters। <b>dotnet-trace:</b> CPU sampling trace जिसे Visual Studio, PerfView या Speedscope में खोलते हैं। <b>dotnet-dump / dotnet-gcdump:</b> memory और hang का analysis।</li>\n<li><b>Production telemetry:</b> Application Insights या OpenTelemetry के traces, metrics और logs दिखाते हैं कि <b>कौन-सी dependency</b> slow है (Days 16 और 20)।</li>\n<li><b>Wins का order (आमतौर पर):</b> N+1 और missing indexes fix करो (Days 6, 18); जो safe हो उसे cache करो (Day 13); async all the way ताकि threads block न हों (Day 3); कम data लौटाओ (pagination, projection, compression); उसके बाद ही allocations tune करो (Spans, pooling)।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> micro-benchmarks <b>उन hot paths के लिए हैं जो तुमने साबित किए हैं कि hot हैं</b>, जैसे parser जो लाखों बार चलता है। Readable code को Span tricks से इसलिए मत बदलो कि वो \"तेज़ होना चाहिए\"; अगर profile उस ओर इशारा नहीं करता तो change सिर्फ़ risk बढ़ाता है। Slow endpoint के लिए trace से शुरू करो, benchmark से नहीं।</p>",
        hg: "<ul>\n<li><b>dotnet-counters:</b> chalte process se live CPU, GC, thread-pool aur request-rate counters. <b>dotnet-trace:</b> CPU sampling trace jise Visual Studio, PerfView ya Speedscope mein kholte hain. <b>dotnet-dump / dotnet-gcdump:</b> memory aur hang ka analysis.</li>\n<li><b>Production telemetry:</b> Application Insights ya OpenTelemetry ke traces, metrics aur logs dikhate hain ki <b>kaun-si dependency</b> slow hai (Days 16 aur 20).</li>\n<li><b>Wins ka order (aamtaur par):</b> N+1 aur missing indexes fix karo (Days 6, 18); jo safe ho use cache karo (Day 13); async all the way taaki threads block na hon (Day 3); kam data lautao (pagination, projection, compression); uske baad hi allocations tune karo (Spans, pooling).</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> micro-benchmarks <b>un hot paths ke liye hain jo tumne saabit kiye hain ki hot hain</b>, jaise parser jo lakhon baar chalta hai. Readable code ko Span tricks se isliye mat badlo ki woh \"tez hona chahiye\"; agar profile us taraf ishara nahi karta to change sirf risk badhata hai. Slow endpoint ke liye trace se shuru karo, benchmark se nahi.</p>"
      }
    },
    {
      id: "perf-cpu-memory",
      depth: "detailed",
      title: {
        en: "Performance in code: benchmarks, allocations, async and thread-pool starvation",
        hi: "Code में performance: benchmarks, allocations, async और thread-pool starvation",
        hg: "Code mein performance: benchmarks, allocations, async aur thread-pool starvation"
      },
      body: {
        en: "<p><b>Analogy:</b> a railway ticket counter with 8 windows. If each clerk stops and waits on the phone for a slow answer, the queue grows even though the clerks are \"idle\". That is <b>thread-pool starvation</b>: threads blocked on I/O instead of serving other requests. Async means the clerk puts the phone call on hold and serves the next person.</p>\n<ul>\n<li><b>BenchmarkDotNet:</b> run in Release, with <code>[MemoryDiagnoser]</code>; read <b>Mean</b>, <b>Allocated</b> and the GC columns. Benchmark the thing the profile pointed at, with realistic data sizes. Results depend on the machine, so compare variants on the same machine.</li>\n<li><b>Allocations (Days 2 and 3):</b> every allocation adds GC work. Cheap wins: <code>StringBuilder</code> or <code>string.Join</code> instead of repeated <code>+=</code> in loops; <code>Span&lt;T&gt;</code> and <code>ReadOnlySpan&lt;char&gt;</code> to slice without copying; <code>ArrayPool&lt;T&gt;.Shared</code> for large temporary buffers (<b>rented arrays can be longer than asked and contain old data</b>, so use only the length you need and always <code>Return</code>); avoid LINQ and closures in the hottest loops only after measuring; <code>struct</code> and <code>record struct</code> carefully (copying costs, Day 2).</li>\n<li><b>Async all the way:</b> in ASP.NET Core there is no <code>SynchronizationContext</code> deadlock, but blocking with <code>.Result</code>, <code>.Wait()</code> or <code>.GetAwaiter().GetResult()</code> still holds a thread-pool thread. Under load the pool injects threads slowly, so latency climbs while CPU stays low. Use <code>async</code> from the endpoint down to the I/O call, pass the <code>CancellationToken</code> (Day 3), and never wrap sync work in <code>Task.Run</code> inside a request just to look async.</li>\n<li><b>Starvation symptoms:</b> requests slow or time out while CPU is low; <code>dotnet-counters</code> shows a growing <b>ThreadPool Queue Length</b> and a rising thread count; a trace or dump shows many threads waiting in <code>Task.Wait</code> or <code>.Result</code>. Fix the blocking calls; raising the minimum threads is a stop-gap, not a cure.</li>\n</ul>\n<p><b>When to use / when not:</b> reach for Span and pooling in <b>parsers, serializers, protocol code and other proven hot paths</b>. Do not pool small objects or apply these tricks across normal business code: it makes the code harder to read and review, and the GC is good at short-lived objects. Async is the default for every I/O call; keep CPU-bound work off the request path (queue it, Day 16) instead of hiding it with <code>Task.Run</code>.</p>",
        hi: "<p><b>Analogy:</b> 8 windows वाला railway ticket counter। अगर हर clerk किसी slow जवाब के लिए phone पर रुककर इंतज़ार करे, तो clerks \"खाली\" होते हुए भी queue बढ़ती है। यही <b>thread-pool starvation</b> है: threads दूसरी requests serve करने के बजाय I/O पर blocked हैं। Async का मतलब clerk phone call को hold पर रखकर अगले आदमी को serve करता है।</p>\n<ul>\n<li><b>BenchmarkDotNet:</b> Release में चलाओ, <code>[MemoryDiagnoser]</code> के साथ; <b>Mean</b>, <b>Allocated</b> और GC columns पढ़ो। उसी चीज़ को benchmark करो जिसकी तरफ़ profile ने इशारा किया, realistic data sizes के साथ। Results machine पर depend करते हैं, इसलिए variants को एक ही machine पर compare करो।</li>\n<li><b>Allocations (Days 2 और 3):</b> हर allocation GC का काम बढ़ाती है। सस्ते wins: loops में बार-बार <code>+=</code> की जगह <code>StringBuilder</code> या <code>string.Join</code>; बिना copy किए slice करने के लिए <code>Span&lt;T&gt;</code> और <code>ReadOnlySpan&lt;char&gt;</code>; बड़े temporary buffers के लिए <code>ArrayPool&lt;T&gt;.Shared</code> (<b>rent किए arrays माँगे से लंबे हो सकते हैं और उनमें पुराना data हो सकता है</b>, इसलिए सिर्फ़ ज़रूरी length use करो और हमेशा <code>Return</code> करो); सबसे hot loops में LINQ और closures सिर्फ़ measure करने के बाद हटाओ; <code>struct</code> और <code>record struct</code> सावधानी से (copying cost, Day 2)।</li>\n<li><b>Async all the way:</b> ASP.NET Core में <code>SynchronizationContext</code> deadlock नहीं है, पर <code>.Result</code>, <code>.Wait()</code> या <code>.GetAwaiter().GetResult()</code> से blocking अब भी thread-pool thread पकड़े रखती है। Load में pool threads धीरे-धीरे inject करता है, इसलिए CPU कम रहते हुए latency बढ़ती है। Endpoint से I/O call तक <code>async</code> रखो, <code>CancellationToken</code> pass करो (Day 3), और request के अंदर sync काम को सिर्फ़ async दिखाने के लिए <code>Task.Run</code> में मत लपेटो।</li>\n<li><b>Starvation के symptoms:</b> CPU कम है फिर भी requests slow या time out; <code>dotnet-counters</code> में बढ़ती <b>ThreadPool Queue Length</b> और बढ़ता thread count; trace या dump में बहुत से threads <code>Task.Wait</code> या <code>.Result</code> में wait करते हुए। Blocking calls fix करो; minimum threads बढ़ाना stop-gap है, इलाज नहीं।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> Span और pooling <b>parsers, serializers, protocol code और बाकी proven hot paths</b> में use करो। छोटे objects को pool मत करो और ये tricks normal business code में मत फैलाओ: code पढ़ने और review करने में मुश्किल होता है, और GC short-lived objects में अच्छा है। हर I/O call के लिए async default है; CPU-bound काम को request path से बाहर रखो (queue में, Day 16), <code>Task.Run</code> से छुपाओ मत।</p>",
        hg: "<p><b>Analogy:</b> 8 windows wala railway ticket counter. Agar har clerk kisi slow jawab ke liye phone par rukkar intezaar kare, to clerks \"khaali\" hote hue bhi queue badhti hai. Yahi <b>thread-pool starvation</b> hai: threads doosri requests serve karne ke bajay I/O par blocked hain. Async ka matlab clerk phone call ko hold par rakhkar agle aadmi ko serve karta hai.</p>\n<ul>\n<li><b>BenchmarkDotNet:</b> Release mein chalao, <code>[MemoryDiagnoser]</code> ke saath; <b>Mean</b>, <b>Allocated</b> aur GC columns padho. Usi cheez ko benchmark karo jiski taraf profile ne ishara kiya, realistic data sizes ke saath. Results machine par depend karte hain, isliye variants ko ek hi machine par compare karo.</li>\n<li><b>Allocations (Days 2 aur 3):</b> har allocation GC ka kaam badhati hai. Saste wins: loops mein baar-baar <code>+=</code> ki jagah <code>StringBuilder</code> ya <code>string.Join</code>; bina copy kiye slice karne ke liye <code>Span&lt;T&gt;</code> aur <code>ReadOnlySpan&lt;char&gt;</code>; bade temporary buffers ke liye <code>ArrayPool&lt;T&gt;.Shared</code> (<b>rent kiye arrays maange se lambe ho sakte hain aur unmein purana data ho sakta hai</b>, isliye sirf zaroori length use karo aur hamesha <code>Return</code> karo); sabse hot loops mein LINQ aur closures sirf measure karne ke baad hatao; <code>struct</code> aur <code>record struct</code> saavdhani se (copying cost, Day 2).</li>\n<li><b>Async all the way:</b> ASP.NET Core mein <code>SynchronizationContext</code> deadlock nahi hai, par <code>.Result</code>, <code>.Wait()</code> ya <code>.GetAwaiter().GetResult()</code> se blocking ab bhi thread-pool thread pakde rehti hai. Load mein pool threads dheere-dheere inject karta hai, isliye CPU kam rehte hue latency badhti hai. Endpoint se I/O call tak <code>async</code> rakho, <code>CancellationToken</code> pass karo (Day 3), aur request ke andar sync kaam ko sirf async dikhane ke liye <code>Task.Run</code> mein mat lapeto.</li>\n<li><b>Starvation ke symptoms:</b> CPU kam hai phir bhi requests slow ya time out; <code>dotnet-counters</code> mein badhti <b>ThreadPool Queue Length</b> aur badhta thread count; trace ya dump mein bahut se threads <code>Task.Wait</code> ya <code>.Result</code> mein wait karte hue. Blocking calls fix karo; minimum threads badhana stop-gap hai, ilaaj nahi.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> Span aur pooling <b>parsers, serializers, protocol code aur baaki proven hot paths</b> mein use karo. Chhote objects ko pool mat karo aur ye tricks normal business code mein mat phailao: code padhne aur review karne mein mushkil hota hai, aur GC short-lived objects mein achha hai. Har I/O call ke liye async default hai; CPU-bound kaam ko request path se bahar rakho (queue mein, Day 16), <code>Task.Run</code> se chhupao mat.</p>"
      },
      code: [
        {
          caption: {
            en: "BenchmarkDotNet with MemoryDiagnoser: repeated concat vs StringBuilder vs string.Join (compile-checked; run with dotnet run -c Release; numbers depend on your machine so none are shown)",
            hi: "MemoryDiagnoser के साथ BenchmarkDotNet: बार-बार concat बनाम StringBuilder बनाम string.Join (compile-checked; dotnet run -c Release से चलाओ; numbers machine पर depend करते हैं इसलिए नहीं दिखाए)",
            hg: "MemoryDiagnoser ke saath BenchmarkDotNet: baar-baar concat vs StringBuilder vs string.Join (compile-checked; dotnet run -c Release se chalao; numbers machine par depend karte hain isliye nahi dikhaye)"
          },
          check: "compile",
          packages: [
            "BenchmarkDotNet@0.*"
          ],
          src: "using System.Text;\nusing BenchmarkDotNet.Attributes;\nusing BenchmarkDotNet.Running;\n\nBenchmarkRunner.Run<JoinBenchmarks>();\n\n[MemoryDiagnoser]\npublic class JoinBenchmarks\n{\n    private readonly string[] _parts = Enumerable.Range(0, 200).Select(i => \"item\" + i).ToArray();\n\n    [Benchmark(Baseline = true)]\n    public string RepeatedConcat()\n    {\n        var result = \"\";\n        foreach (var part in _parts) result += part + \",\";   // a new string on every pass\n        return result;\n    }\n\n    [Benchmark]\n    public string Builder()\n    {\n        var sb = new StringBuilder();\n        foreach (var part in _parts) sb.Append(part).Append(',');\n        return sb.ToString();\n    }\n\n    [Benchmark]\n    public string Join() => string.Join(',', _parts);\n}"
        },
        {
          caption: {
            en: "Span slicing and a pooled buffer (use only on a proven hot path): parse key=value pairs without creating substrings",
            hi: "Span slicing और pooled buffer (सिर्फ़ proven hot path पर): substrings बनाए बिना key=value pairs parse करना",
            hg: "Span slicing aur pooled buffer (sirf proven hot path par): substrings banaye bina key=value pairs parse karna"
          },
          check: "run",
          expected: "rented is large enough: True\nregion -> south\ntier -> gold\nlimit -> 250\nlimit x 2 = 500",
          src: "using System.Buffers;\nusing System.Text;\n\nstring line = \"region=south;tier=gold;limit=250\";\n\nbyte[] rented = ArrayPool<byte>.Shared.Rent(Encoding.UTF8.GetMaxByteCount(line.Length));\ntry\n{\n    int bytes = Encoding.UTF8.GetBytes(line, rented);          // only the first 'bytes' items are ours\n    Console.WriteLine(\"rented is large enough: \" + (rented.Length >= bytes));\n\n    ReadOnlySpan<char> rest = line;\n    int limit = 0;\n    while (!rest.IsEmpty)\n    {\n        int semi = rest.IndexOf(';');\n        ReadOnlySpan<char> pair = semi < 0 ? rest : rest[..semi];\n        int eq = pair.IndexOf('=');\n        ReadOnlySpan<char> key = pair[..eq];\n        ReadOnlySpan<char> value = pair[(eq + 1)..];\n        if (key.SequenceEqual(\"limit\")) limit = int.Parse(value);\n        Console.WriteLine($\"{key} -> {value}\");\n        rest = semi < 0 ? default : rest[(semi + 1)..];\n    }\n    Console.WriteLine(\"limit x 2 = \" + limit * 2);\n}\nfinally\n{\n    ArrayPool<byte>.Shared.Return(rented);                      // always give it back\n}"
        },
        {
          caption: {
            en: "SLOW — don't do this, then the fix: blocking on an HTTP call with .Result vs async all the way with a CancellationToken (compile-checked)",
            hi: "SLOW — ऐसा मत करो, फिर fix: .Result से HTTP call पर blocking बनाम CancellationToken के साथ async all the way (compile-checked)",
            hg: "SLOW — aisa mat karo, phir fix: .Result se HTTP call par blocking vs CancellationToken ke saath async all the way (compile-checked)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.DependencyInjection;\n\nvar builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddHttpClient();\nvar app = builder.Build();\n\n// SLOW - don't do this: the request thread sits blocked until the HTTP call finishes; under load the thread pool starves\napp.MapGet(\"/bad/rate\", (IHttpClientFactory factory) =>\n    factory.CreateClient().GetStringAsync(\"https://rates.example/usd\").Result);\n\n// FIXED: async all the way; the thread goes back to the pool while the call is in flight, and cancellation is passed down\napp.MapGet(\"/rate\", async (IHttpClientFactory factory, CancellationToken ct) =>\n    await factory.CreateClient().GetStringAsync(\"https://rates.example/usd\", ct));\n\napp.Run();"
        }
      ]
    },
    {
      id: "perf-web-data",
      depth: "detailed",
      title: {
        en: "Performance in the web layer: caching, compression, pagination, EF and protocols",
        hi: "Web layer में performance: caching, compression, pagination, EF और protocols",
        hg: "Web layer mein performance: caching, compression, pagination, EF aur protocols"
      },
      body: {
        en: "<ul>\n<li><b>Caching (Day 13):</b> in-memory, <code>HybridCache</code> and distributed caches store data; <b>output caching</b> (<code>AddOutputCache</code>, <code>UseOutputCache</code>, <code>.CacheOutput()</code>) stores whole responses. By default it caches only 200 responses to GET or HEAD, skips responses that set cookies and skips <b>authenticated</b> requests, which protects you from serving one user's page to another. Place <code>UseOutputCache</code> after authentication, authorization and CORS. Its default store is in memory, so each server has its own cache; use Redis for a shared one. Evict with tags when data changes.</li>\n<li><b>Response compression:</b> <code>AddResponseCompression</code> and <code>UseResponseCompression</code> add Brotli and Gzip. It is off for HTTPS by default (<code>EnableForHttps</code>) because compressing dynamic pages that contain secrets can expose them to CRIME and BREACH style attacks; antiforgery tokens are one mitigation. Many teams compress at the reverse proxy, CDN or gateway instead, which is usually faster than the middleware. Do not compress images or other already-compressed files.</li>\n<li><b>Pagination:</b> never return an unbounded list. Clamp the page size on the server (a client asking for <code>pageSize=100000</code> is both a performance and a denial-of-service problem). <b>Offset paging</b> (<code>Skip</code>/<code>Take</code>) is simple, but gets slower on deep pages and can show duplicates or gaps while data changes (see the puzzle). <b>Keyset paging</b> (\"after id X\") stays fast and stable; it needs a unique, indexed sort key.</li>\n<li><b>EF Core and SQL (Days 6 and 18):</b> fix N+1 with <code>Include</code>, projection (<code>Select</code> to a DTO) or split queries; <code>AsNoTracking</code> for read-only queries; select only the columns you need; make sure filter and sort columns are indexed; avoid loading entities to update one column (<code>ExecuteUpdate</code>); look at the generated SQL and the execution plan before guessing.</li>\n<li><b>HTTP/2 and HTTP/3:</b> HTTP/2 multiplexes many requests on one connection and compresses headers; HTTP/3 runs over QUIC and copes better with lossy mobile networks. Kestrel supports both (HTTP/3 needs the msquic library: built into Windows 11 and Windows Server 2022, libmsquic on Linux, not supported on macOS), and many teams switch them on at the CDN or gateway. They help chatty clients; they do not fix a slow query.</li>\n</ul>\n<p><b>When to use / when not:</b> cache <b>read-heavy, slow-to-compute, same-for-everyone</b> data with a clear expiry; do not cache per-user or sensitive responses in a shared cache. Compress text (JSON, HTML) responses over a certain size; skip tiny ones. Use offset paging for small admin lists and keyset paging for feeds and big tables.</p>",
        hi: "<ul>\n<li><b>Caching (Day 13):</b> in-memory, <code>HybridCache</code> और distributed caches data store करते हैं; <b>output caching</b> (<code>AddOutputCache</code>, <code>UseOutputCache</code>, <code>.CacheOutput()</code>) पूरे responses store करती है। Default में यह GET या HEAD के सिर्फ़ 200 responses cache करती है, cookies set करने वाले responses छोड़ देती है और <b>authenticated</b> requests छोड़ देती है, जिससे एक user का page दूसरे को serve होने से बचता है। <code>UseOutputCache</code> को authentication, authorization और CORS के बाद लगाओ। इसका default store memory में है, इसलिए हर server का अपना cache; shared के लिए Redis। Data बदलने पर tags से evict करो।</li>\n<li><b>Response compression:</b> <code>AddResponseCompression</code> और <code>UseResponseCompression</code> Brotli और Gzip जोड़ते हैं। HTTPS के लिए यह default से off है (<code>EnableForHttps</code>) क्योंकि secrets वाले dynamic pages compress करने से CRIME और BREACH जैसे attacks का खतरा हो सकता है; antiforgery tokens एक mitigation हैं। बहुत सी teams reverse proxy, CDN या gateway पर compress करती हैं, जो आमतौर पर middleware से तेज़ होता है। Images या पहले से compressed files compress मत करो।</li>\n<li><b>Pagination:</b> unbounded list कभी मत लौटाओ। Server पर page size clamp करो (client का <code>pageSize=100000</code> माँगना performance और denial-of-service दोनों की समस्या है)। <b>Offset paging</b> (<code>Skip</code>/<code>Take</code>) simple है, पर deep pages पर slow होती है और data बदलते समय duplicates या gaps दिखा सकती है (puzzle देखो)। <b>Keyset paging</b> (\"id X के बाद\") तेज़ और stable रहती है; उसे unique, indexed sort key चाहिए।</li>\n<li><b>EF Core और SQL (Days 6 और 18):</b> N+1 को <code>Include</code>, projection (DTO में <code>Select</code>) या split queries से fix करो; read-only queries के लिए <code>AsNoTracking</code>; सिर्फ़ ज़रूरी columns select करो; filter और sort columns indexed हों; एक column update करने के लिए entities load मत करो (<code>ExecuteUpdate</code>); अंदाज़ा लगाने से पहले generated SQL और execution plan देखो।</li>\n<li><b>HTTP/2 और HTTP/3:</b> HTTP/2 एक connection पर कई requests multiplex करता है और headers compress करता है; HTTP/3 QUIC पर चलता है और lossy mobile networks में बेहतर संभलता है। Kestrel दोनों support करता है (HTTP/3 को msquic library चाहिए: Windows 11 और Windows Server 2022 में built-in, Linux पर libmsquic, macOS पर supported नहीं), और बहुत सी teams इन्हें CDN या gateway पर on करती हैं। ये chatty clients की मदद करते हैं; slow query को fix नहीं करते।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> <b>read-heavy, compute में slow, सबके लिए same</b> data को clear expiry के साथ cache करो; per-user या sensitive responses को shared cache में मत डालो। एक size से बड़े text (JSON, HTML) responses compress करो; छोटे छोड़ दो। छोटी admin lists के लिए offset paging और feeds तथा big tables के लिए keyset paging।</p>",
        hg: "<ul>\n<li><b>Caching (Day 13):</b> in-memory, <code>HybridCache</code> aur distributed caches data store karte hain; <b>output caching</b> (<code>AddOutputCache</code>, <code>UseOutputCache</code>, <code>.CacheOutput()</code>) poore responses store karti hai. Default mein yeh GET ya HEAD ke sirf 200 responses cache karti hai, cookies set karne wale responses chhod deti hai aur <b>authenticated</b> requests chhod deti hai, jisse ek user ka page doosre ko serve hone se bachta hai. <code>UseOutputCache</code> ko authentication, authorization aur CORS ke baad lagao. Iska default store memory mein hai, isliye har server ka apna cache; shared ke liye Redis. Data badalne par tags se evict karo.</li>\n<li><b>Response compression:</b> <code>AddResponseCompression</code> aur <code>UseResponseCompression</code> Brotli aur Gzip jodte hain. HTTPS ke liye yeh default se off hai (<code>EnableForHttps</code>) kyunki secrets wale dynamic pages compress karne se CRIME aur BREACH jaise attacks ka khatra ho sakta hai; antiforgery tokens ek mitigation hain. Bahut si teams reverse proxy, CDN ya gateway par compress karti hain, jo aamtaur par middleware se tez hota hai. Images ya pehle se compressed files compress mat karo.</li>\n<li><b>Pagination:</b> unbounded list kabhi mat lautao. Server par page size clamp karo (client ka <code>pageSize=100000</code> maangna performance aur denial-of-service dono ki samasya hai). <b>Offset paging</b> (<code>Skip</code>/<code>Take</code>) simple hai, par deep pages par slow hoti hai aur data badalte samay duplicates ya gaps dikha sakti hai (puzzle dekho). <b>Keyset paging</b> (\"id X ke baad\") tez aur stable rehti hai; usse unique, indexed sort key chahiye.</li>\n<li><b>EF Core aur SQL (Days 6 aur 18):</b> N+1 ko <code>Include</code>, projection (DTO mein <code>Select</code>) ya split queries se fix karo; read-only queries ke liye <code>AsNoTracking</code>; sirf zaroori columns select karo; filter aur sort columns indexed hon; ek column update karne ke liye entities load mat karo (<code>ExecuteUpdate</code>); andaza lagane se pehle generated SQL aur execution plan dekho.</li>\n<li><b>HTTP/2 aur HTTP/3:</b> HTTP/2 ek connection par kai requests multiplex karta hai aur headers compress karta hai; HTTP/3 QUIC par chalta hai aur lossy mobile networks mein behtar sambhalta hai. Kestrel dono support karta hai (HTTP/3 ko msquic library chahiye: Windows 11 aur Windows Server 2022 mein built-in, Linux par libmsquic, macOS par supported nahi), aur bahut si teams inhein CDN ya gateway par on karti hain. Ye chatty clients ki madad karte hain; slow query ko fix nahi karte.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> <b>read-heavy, compute mein slow, sabke liye same</b> data ko clear expiry ke saath cache karo; per-user ya sensitive responses ko shared cache mein mat daalo. Ek size se bade text (JSON, HTML) responses compress karo; chhote chhod do. Chhoti admin lists ke liye offset paging aur feeds tatha big tables ke liye keyset paging.</p>"
      },
      code: [
        {
          caption: {
            en: "Output caching with a tag, response compression and keyset pagination with a clamped page size (compile-checked; UseOutputCache comes after authentication and authorization)",
            hi: "Tag वाली output caching, response compression और clamp किए page size के साथ keyset pagination (compile-checked; UseOutputCache authentication और authorization के बाद आता है)",
            hg: "Tag wali output caching, response compression aur clamp kiye page size ke saath keyset pagination (compile-checked; UseOutputCache authentication aur authorization ke baad aata hai)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.OutputCaching;\nusing Microsoft.Extensions.DependencyInjection;\n\nvar builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddAuthentication(\"cookie\").AddCookie(\"cookie\");\nbuilder.Services.AddAuthorization();\nbuilder.Services.AddResponseCompression();                       // Brotli and Gzip; HTTPS compression stays off unless you opt in\nbuilder.Services.AddOutputCache(o => o.AddPolicy(\"Products\", p => p.Expire(TimeSpan.FromSeconds(30)).Tag(\"products\")));\n\nvar app = builder.Build();\napp.UseResponseCompression();\napp.UseAuthentication();\napp.UseAuthorization();\napp.UseOutputCache();                                            // after authentication and authorization\n\nvar products = Enumerable.Range(1, 500).Select(i => new Product(i, \"Item \" + i)).ToList();\n\n// Keyset paging: \"give me the next page after this id\"; the page size is clamped on the server\napp.MapGet(\"/products\", (int? afterId, int pageSize = 20) =>\n{\n    pageSize = Math.Clamp(pageSize, 1, 100);\n    var page = products.Where(p => afterId is null || p.Id > afterId).OrderBy(p => p.Id).Take(pageSize).ToList();\n    return new Page(page, page.Count == pageSize ? page[^1].Id : null);\n}).CacheOutput(\"Products\");\n\n// When data changes, evict everything tagged \"products\"\napp.MapPost(\"/products/evict\", async (IOutputCacheStore store, CancellationToken ct) =>\n{\n    await store.EvictByTagAsync(\"products\", ct);\n    return Results.NoContent();\n}).RequireAuthorization();\n\napp.Run();\n\nrecord Product(int Id, string Name);\nrecord Page(List<Product> Items, int? NextAfterId);"
        }
      ]
    },
    {
      id: "perf-tl",
      depth: "detailed",
      title: {
        en: "Tech Lead angle: budgets, SLOs, load testing and profiling in production",
        hi: "Tech Lead angle: budgets, SLOs, load testing और production में profiling",
        hg: "Tech Lead angle: budgets, SLOs, load testing aur production mein profiling"
      },
      body: {
        en: "<p><b>Analogy:</b> a train timetable says \"Rajdhani, Delhi to Mumbai, 16 hours\". A <b>performance budget</b> is that timetable for a feature, an <b>SLO</b> is the promise \"on 99 of 100 days we arrive within 16 hours\", and a <b>load test</b> is a trial run on a festival-rush day before the real festival.</p>\n<ul>\n<li><b>Performance budget:</b> a written limit per feature, for example \"p95 under 300 ms at 200 requests per second\", \"at most 5 database queries per request\", \"payload under 100 KB\", \"no unbounded list\". Budgets give a reviewer something to say \"no\" with, and stop slow creep.</li>\n<li><b>SLI, SLO, error budget:</b> the <b>SLI</b> is what you measure (share of requests under 300 ms, share without 5xx); the <b>SLO</b> is the target (99% over 30 days); the <b>error budget</b> is what is left (1%). When the budget is spent, the team slows feature work and fixes reliability. Averages hide pain: use <b>percentiles</b> (p95, p99).</li>\n<li><b>Load testing:</b> <b>k6</b> (scripts in JavaScript, thresholds that fail the run), <b>Azure Load Testing</b> (managed service to generate load from the cloud; check the current docs for supported engines) and <b>NBomber</b> (a .NET library, scenarios in C#). Test a <b>production-like environment</b> (same instance size and database size), with realistic data and a mix of requests, and ramp up gradually. Never load-test production or third-party services without agreement.</li>\n<li><b>Profiling in production, safely:</b> prefer <b>low-overhead</b> tools first: metrics and traces (OpenTelemetry, Application Insights, Day 16 and 20), <code>dotnet-counters</code> and sampling <code>dotnet-trace</code>. A <b>memory dump freezes the process</b> while it is written and contains secrets and personal data, so take it from one instance that is out of rotation, restrict who can read it, and delete it after use. Get approval, note the time, and have a rollback.</li>\n</ul>\n<p><b>When to use / when not:</b> budgets and SLOs are for <b>user-facing and revenue-critical</b> paths; an internal admin report can have a looser one. Run big load tests before launches and big changes, and small smoke-level checks in CI. Do not set SLOs nobody can measure, and do not chase 100%: every extra nine costs more than the one before.</p>",
        hi: "<p><b>Analogy:</b> train timetable कहता है \"Rajdhani, Delhi से Mumbai, 16 घंटे\"। <b>Performance budget</b> किसी feature के लिए वही timetable है, <b>SLO</b> वादा है \"100 में से 99 दिन हम 16 घंटे में पहुँचते हैं\", और <b>load test</b> असली त्योहार से पहले festival-rush वाले दिन का trial run है।</p>\n<ul>\n<li><b>Performance budget:</b> हर feature की लिखी हुई limit, जैसे \"200 requests per second पर p95 300 ms से कम\", \"हर request पर ज़्यादा से ज़्यादा 5 database queries\", \"payload 100 KB से कम\", \"कोई unbounded list नहीं\"। Budgets reviewer को \"ना\" कहने की वजह देते हैं और धीरे-धीरे आने वाली slowness रोकते हैं।</li>\n<li><b>SLI, SLO, error budget:</b> <b>SLI</b> वो है जो तुम measure करते हो (300 ms से कम वाली requests का हिस्सा, बिना 5xx वाला हिस्सा); <b>SLO</b> target है (30 दिन में 99%); <b>error budget</b> बचा हुआ हिस्सा है (1%)। Budget खत्म होने पर team feature काम धीमा करके reliability fix करती है। Averages दर्द छुपाते हैं: <b>percentiles</b> (p95, p99) use करो।</li>\n<li><b>Load testing:</b> <b>k6</b> (JavaScript में scripts, thresholds जो run को fail करते हैं), <b>Azure Load Testing</b> (cloud से load generate करने वाली managed service; supported engines के लिए current docs देखो) और <b>NBomber</b> (.NET library, C# में scenarios)। <b>Production जैसे environment</b> पर test करो (same instance size और database size), realistic data और requests के mix के साथ, और धीरे-धीरे ramp up करो। Production या third-party services को बिना सहमति के कभी load-test मत करो।</li>\n<li><b>Production में safely profiling:</b> पहले <b>low-overhead</b> tools लो: metrics और traces (OpenTelemetry, Application Insights, Day 16 और 20), <code>dotnet-counters</code> और sampling <code>dotnet-trace</code>। <b>Memory dump लिखते समय process को freeze करता है</b> और उसमें secrets और personal data होता है, इसलिए उसे ऐसे एक instance से लो जो rotation से बाहर हो, कौन पढ़ सकता है यह सीमित करो, और use के बाद delete करो। Approval लो, time note करो, और rollback तैयार रखो।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> budgets और SLOs <b>user-facing और revenue-critical</b> paths के लिए हैं; internal admin report की limit ढीली हो सकती है। बड़े load tests launches और बड़े changes से पहले चलाओ, और छोटे smoke-level checks CI में। ऐसे SLOs मत बनाओ जिन्हें कोई measure न कर सके, और 100% के पीछे मत भागो: हर extra nine पिछले से ज़्यादा महँगा है।</p>",
        hg: "<p><b>Analogy:</b> train timetable kehta hai \"Rajdhani, Delhi se Mumbai, 16 ghante\". <b>Performance budget</b> kisi feature ke liye wahi timetable hai, <b>SLO</b> waada hai \"100 mein se 99 din hum 16 ghante mein pahunchte hain\", aur <b>load test</b> asli tyohar se pehle festival-rush wale din ka trial run hai.</p>\n<ul>\n<li><b>Performance budget:</b> har feature ki likhi hui limit, jaise \"200 requests per second par p95 300 ms se kam\", \"har request par zyada se zyada 5 database queries\", \"payload 100 KB se kam\", \"koi unbounded list nahi\". Budgets reviewer ko \"na\" kehne ki wajah dete hain aur dheere-dheere aane wali slowness rokte hain.</li>\n<li><b>SLI, SLO, error budget:</b> <b>SLI</b> woh hai jo tum measure karte ho (300 ms se kam wali requests ka hissa, bina 5xx wala hissa); <b>SLO</b> target hai (30 din mein 99%); <b>error budget</b> bacha hua hissa hai (1%). Budget khatam hone par team feature kaam dheema karke reliability fix karti hai. Averages dard chhupate hain: <b>percentiles</b> (p95, p99) use karo.</li>\n<li><b>Load testing:</b> <b>k6</b> (JavaScript mein scripts, thresholds jo run ko fail karte hain), <b>Azure Load Testing</b> (cloud se load generate karne wali managed service; supported engines ke liye current docs dekho) aur <b>NBomber</b> (.NET library, C# mein scenarios). <b>Production jaise environment</b> par test karo (same instance size aur database size), realistic data aur requests ke mix ke saath, aur dheere-dheere ramp up karo. Production ya third-party services ko bina sahmati ke kabhi load-test mat karo.</li>\n<li><b>Production mein safely profiling:</b> pehle <b>low-overhead</b> tools lo: metrics aur traces (OpenTelemetry, Application Insights, Day 16 aur 20), <code>dotnet-counters</code> aur sampling <code>dotnet-trace</code>. <b>Memory dump likhte samay process ko freeze karta hai</b> aur usmein secrets aur personal data hota hai, isliye use aise ek instance se lo jo rotation se bahar ho, kaun padh sakta hai yeh seemit karo, aur use ke baad delete karo. Approval lo, time note karo, aur rollback taiyaar rakho.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> budgets aur SLOs <b>user-facing aur revenue-critical</b> paths ke liye hain; internal admin report ki limit dheeli ho sakti hai. Bade load tests launches aur bade changes se pehle chalao, aur chhote smoke-level checks CI mein. Aise SLOs mat banao jinhein koi measure na kar sake, aur 100% ke peeche mat bhaago: har extra nine pichhle se zyada mehenga hai.</p>"
      },
      code: [
        {
          lang: "bash",
          caption: {
            en: "The diagnostic tools on a running process (install once with dotnet tool install --global; replace PID; dumps contain secrets, handle them as sensitive)",
            hi: "चलते process पर diagnostic tools (एक बार dotnet tool install --global से install करो; PID बदलो; dumps में secrets होते हैं, sensitive की तरह संभालो)",
            hg: "Chalte process par diagnostic tools (ek baar dotnet tool install --global se install karo; PID badlo; dumps mein secrets hote hain, sensitive ki tarah sambhalo)"
          },
          check: "none",
          src: "dotnet tool install --global dotnet-counters\ndotnet tool install --global dotnet-trace\ndotnet tool install --global dotnet-dump\n\ndotnet-counters monitor --process-id <PID> --counters System.Runtime     # CPU, GC, thread-pool queue length, exceptions per second\ndotnet-trace collect --process-id <PID> --duration 00:00:30              # sampling trace; open the .nettrace file in Visual Studio, PerfView or Speedscope\ndotnet-dump collect --process-id <PID>                                   # freezes the process while writing; contains secrets and PII\ndotnet-dump analyze <dump-file>                                          # then: clrstack, threads, dumpheap -stat"
        },
        {
          lang: "javascript",
          caption: {
            en: "A k6 load test with thresholds (display-only, runs in k6 not Node): the run fails if p95 is over 300 ms or more than 1% of requests fail",
            hi: "Thresholds वाला k6 load test (सिर्फ़ दिखाने के लिए, k6 में चलता है, Node में नहीं): p95 300 ms से ऊपर या 1% से ज़्यादा requests fail हों तो run fail",
            hg: "Thresholds wala k6 load test (sirf dikhane ke liye, k6 mein chalta hai, Node mein nahi): p95 300 ms se upar ya 1% se zyada requests fail hon to run fail"
          },
          check: "none",
          src: "import http from \"k6/http\";\nimport { check, sleep } from \"k6\";\n\nexport const options = {\n  stages: [\n    { duration: \"1m\", target: 50 },     // ramp up\n    { duration: \"3m\", target: 50 },     // hold\n    { duration: \"30s\", target: 0 },     // ramp down\n  ],\n  thresholds: {\n    http_req_duration: [\"p(95)<300\"],   // budget: p95 under 300 ms\n    http_req_failed: [\"rate<0.01\"],     // fewer than 1% errors\n  },\n};\n\nexport default function () {\n  const res = http.get(`${__ENV.BASE_URL}/products?pageSize=20`);   // BASE_URL = a production-like test environment\n  check(res, { \"status is 200\": (r) => r.status === 200 });\n  sleep(1);\n}"
        }
      ]
    },
    {
      id: "whats-new",
      depth: "detailed",
      title: {
        en: "What is new in OWASP, NuGet Audit and ASP.NET Core",
        hi: "OWASP, NuGet Audit और ASP.NET Core में नया क्या है",
        hg: "OWASP, NuGet Audit aur ASP.NET Core mein naya kya hai"
      },
      body: {
        en: "<ul>\n<li><b>OWASP Top 10:2025</b> is the current release on owasp.org (2021 is the previous edition). New names to know: Software Supply Chain Failures, Authentication Failures, Security Logging and Alerting Failures and Mishandling of Exceptional Conditions.</li>\n<li><b>NuGet Audit</b> arrived with the .NET 8 SDK; for <code>net10.0</code> projects its default mode includes transitive packages, and the .NET 10 SDK adds <code>dotnet package update --vulnerable</code>.</li>\n<li><b>ASP.NET Core:</b> antiforgery for minimal API form endpoints (.NET 8 and later) uses <code>AddAntiforgery()</code> and <code>UseAntiforgery()</code>; output caching has been built in since .NET 7.</li>\n</ul>",
        hi: "<ul>\n<li><b>OWASP Top 10:2025</b> owasp.org पर अभी की release है (2021 पिछली edition है)। जानने लायक नए नाम: Software Supply Chain Failures, Authentication Failures, Security Logging and Alerting Failures और Mishandling of Exceptional Conditions।</li>\n<li><b>NuGet Audit</b> .NET 8 SDK के साथ आया; <code>net10.0</code> projects में इसके default mode में transitive packages शामिल हैं, और .NET 10 SDK <code>dotnet package update --vulnerable</code> जोड़ता है।</li>\n<li><b>ASP.NET Core:</b> minimal API form endpoints के लिए antiforgery (.NET 8 और बाद) में <code>AddAntiforgery()</code> और <code>UseAntiforgery()</code> use होते हैं; output caching .NET 7 से built-in है।</li>\n</ul>",
        hg: "<ul>\n<li><b>OWASP Top 10:2025</b> owasp.org par abhi ki release hai (2021 pichhli edition hai). Jaanne laayak naye naam: Software Supply Chain Failures, Authentication Failures, Security Logging and Alerting Failures aur Mishandling of Exceptional Conditions.</li>\n<li><b>NuGet Audit</b> .NET 8 SDK ke saath aaya; <code>net10.0</code> projects mein iske default mode mein transitive packages shamil hain, aur .NET 10 SDK <code>dotnet package update --vulnerable</code> jodta hai.</li>\n<li><b>ASP.NET Core:</b> minimal API form endpoints ke liye antiforgery (.NET 8 aur baad) mein <code>AddAntiforgery()</code> aur <code>UseAntiforgery()</code> use hote hain; output caching .NET 7 se built-in hai.</li>\n</ul>"
      }
    }
  ],
  qa: [
    {
      id: "owasp-top10-use",
      depth: "short",
      q: "What is the OWASP Top 10, and how would you use it as a Tech Lead?",
      answer: "It is a ranked awareness list of the most common web application risks. I use it as a checklist for design and code review, mapped to .NET controls, not as a complete standard.",
      meaning: {
        hi: "यह web application के सबसे common risks की ranked awareness list है। मैं इसे design और code review की checklist की तरह use करता हूँ, .NET controls से map करके, पूरे standard की तरह नहीं।",
        hg: "Yeh web application ke sabse common risks ki ranked awareness list hai. Main ise design aur code review ki checklist ki tarah use karta hoon, .NET controls se map karke, poore standard ki tarah nahi."
      },
      explain: {
        en: "<ul>\n<li>The current release on owasp.org is the <b>2025</b> edition; 2021 is the previous one and interviewers may use its names. Say which edition you mean.</li>\n<li>Use: map each to a control in your stack (policies, parameters, NuGet Audit, Identity, Key Vault) and to a line in the PR template.</li>\n<li>Follow-up: \"Which three matter most for our API?\" Usually broken access control, injection and misconfiguration, then supply chain; but answer from your own system's data flow.</li>\n</ul>",
        hi: "<ul>\n<li>owasp.org पर अभी की release <b>2025</b> edition है; 2021 पिछली है और interviewers उसके नाम use कर सकते हैं। बताओ कि तुम कौन-सी edition की बात कर रहे हो।</li>\n<li>Use: हर एक को अपने stack के control से (policies, parameters, NuGet Audit, Identity, Key Vault) और PR template की एक line से map करो।</li>\n<li>Follow-up: \"हमारी API के लिए कौन-से तीन सबसे ज़रूरी?\" आमतौर पर broken access control, injection और misconfiguration, फिर supply chain; पर जवाब अपने system के data flow से दो।</li>\n</ul>",
        hg: "<ul>\n<li>owasp.org par abhi ki release <b>2025</b> edition hai; 2021 pichhli hai aur interviewers uske naam use kar sakte hain. Batao ki tum kaun-si edition ki baat kar rahe ho.</li>\n<li>Use: har ek ko apne stack ke control se (policies, parameters, NuGet Audit, Identity, Key Vault) aur PR template ki ek line se map karo.</li>\n<li>Follow-up: \"Hamari API ke liye kaun-se teen sabse zaroori?\" Aamtaur par broken access control, injection aur misconfiguration, phir supply chain; par jawab apne system ke data flow se do.</li>\n</ul>"
      }
    },
    {
      id: "sql-injection-prevent",
      depth: "short",
      q: "How do you prevent SQL injection in a .NET application?",
      answer: "Never build SQL from user text; send values as parameters. In EF Core use LINQ or FromSql with interpolation, and give the database login least privilege.",
      meaning: {
        hi: "User text से SQL कभी मत बनाओ; values को parameters की तरह भेजो। EF Core में LINQ या interpolation वाला FromSql, और database login को least privilege दो।",
        hg: "User text se SQL kabhi mat banao; values ko parameters ki tarah bhejo. EF Core mein LINQ ya interpolation wala FromSql, aur database login ko least privilege do."
      },
      explain: {
        en: "<ul>\n<li>Injection happens when input is glued into the SQL text. Parameters keep values and SQL separate, so input is only ever data (see the first puzzle).</li>\n<li>ADO.NET and Dapper: parameters. EF Core: LINQ is parameterised; <code>FromSql</code> and <code>ExecuteSql</code> with an interpolated string become parameters; <code>FromSqlRaw</code> with concatenation does not (Day 6).</li>\n<li>Identifiers (column, table, sort direction) cannot be parameters: map the choice to an allow-list in code.</li>\n<li>Follow-up: \"Is a stored procedure safe?\" Only if it does not build dynamic SQL from its parameters; use <code>sp_executesql</code> with parameters inside if it must.</li>\n</ul>",
        hi: "<ul>\n<li>Injection तब होता है जब input SQL text में glue हो जाए। Parameters values और SQL को अलग रखते हैं, इसलिए input सिर्फ़ data रहता है (पहला puzzle देखो)।</li>\n<li>ADO.NET और Dapper: parameters। EF Core: LINQ parameterised है; interpolated string वाले <code>FromSql</code> और <code>ExecuteSql</code> parameters बनते हैं; concatenation वाला <code>FromSqlRaw</code> नहीं बनता (Day 6)।</li>\n<li>Identifiers (column, table, sort direction) parameters नहीं हो सकते: choice को code में allow-list से map करो।</li>\n<li>Follow-up: \"क्या stored procedure safe है?\" तभी जब वो अपने parameters से dynamic SQL न बनाए; बनाना ही पड़े तो अंदर parameters के साथ <code>sp_executesql</code>।</li>\n</ul>",
        hg: "<ul>\n<li>Injection tab hota hai jab input SQL text mein glue ho jaye. Parameters values aur SQL ko alag rakhte hain, isliye input sirf data rehta hai (pehla puzzle dekho).</li>\n<li>ADO.NET aur Dapper: parameters. EF Core: LINQ parameterised hai; interpolated string wale <code>FromSql</code> aur <code>ExecuteSql</code> parameters bante hain; concatenation wala <code>FromSqlRaw</code> nahi banta (Day 6).</li>\n<li>Identifiers (column, table, sort direction) parameters nahi ho sakte: choice ko code mein allow-list se map karo.</li>\n<li>Follow-up: \"Kya stored procedure safe hai?\" Tabhi jab woh apne parameters se dynamic SQL na banaye; banana hi pade to andar parameters ke saath <code>sp_executesql</code>.</li>\n</ul>"
      }
    },
    {
      id: "xss-aspnet-core",
      depth: "short",
      q: "How does ASP.NET Core protect against XSS, and where can it still happen?",
      answer: "Razor and Blazor encode output by default. XSS returns through Html.Raw, MarkupString, string-built HTML or innerHTML, so I avoid those and add a CSP header as a second layer.",
      meaning: {
        hi: "Razor और Blazor output को default से encode करते हैं। XSS वापस आता है Html.Raw, MarkupString, string से बने HTML या innerHTML से, इसलिए इन्हें avoid करता हूँ और दूसरी layer के लिए CSP header लगाता हूँ।",
        hg: "Razor aur Blazor output ko default se encode karte hain. XSS wapas aata hai Html.Raw, MarkupString, string se bane HTML ya innerHTML se, isliye inhein avoid karta hoon aur doosri layer ke liye CSP header lagata hoon."
      },
      explain: {
        en: "<ul>\n<li><code>@Model.Comment</code> in Razor is HTML-encoded; <code>&lt;script&gt;</code> shows as text. That default is your main defence.</li>\n<li>Danger spots: <code>Html.Raw</code>, Blazor <code>MarkupString</code>, building HTML with string concatenation, JavaScript <code>innerHTML</code> and <code>dangerouslySetInnerHTML</code> (Days 23 and 24).</li>\n<li>CSP (<code>Content-Security-Policy</code>) limits where scripts can load from, so an injected inline script is blocked. It is a second layer, not a replacement for encoding.</li>\n<li>Follow-up: \"Where do you store the JWT in a SPA?\" Trade-offs in Day 13 and Day 24: a cookie with HttpOnly is not readable by injected script, but then you need CSRF defences.</li>\n</ul>",
        hi: "<ul>\n<li>Razor में <code>@Model.Comment</code> HTML-encoded होता है; <code>&lt;script&gt;</code> text की तरह दिखता है। यह default तुम्हारी main defence है।</li>\n<li>Danger spots: <code>Html.Raw</code>, Blazor <code>MarkupString</code>, string concatenation से HTML बनाना, JavaScript <code>innerHTML</code> और <code>dangerouslySetInnerHTML</code> (Days 23 और 24)।</li>\n<li>CSP (<code>Content-Security-Policy</code>) सीमित करता है कि scripts कहाँ से load हो सकती हैं, इसलिए injected inline script block हो जाती है। यह दूसरी layer है, encoding की जगह नहीं।</li>\n<li>Follow-up: \"SPA में JWT कहाँ store करते हो?\" Trade-offs Day 13 और Day 24 में हैं: HttpOnly cookie को injected script पढ़ नहीं सकती, पर तब CSRF defences चाहिए।</li>\n</ul>",
        hg: "<ul>\n<li>Razor mein <code>@Model.Comment</code> HTML-encoded hota hai; <code>&lt;script&gt;</code> text ki tarah dikhta hai. Yeh default tumhari main defence hai.</li>\n<li>Danger spots: <code>Html.Raw</code>, Blazor <code>MarkupString</code>, string concatenation se HTML banana, JavaScript <code>innerHTML</code> aur <code>dangerouslySetInnerHTML</code> (Days 23 aur 24).</li>\n<li>CSP (<code>Content-Security-Policy</code>) seemit karta hai ki scripts kahan se load ho sakti hain, isliye injected inline script block ho jaati hai. Yeh doosri layer hai, encoding ki jagah nahi.</li>\n<li>Follow-up: \"SPA mein JWT kahan store karte ho?\" Trade-offs Day 13 aur Day 24 mein hain: HttpOnly cookie ko injected script padh nahi sakti, par tab CSRF defences chahiye.</li>\n</ul>"
      }
    },
    {
      id: "csrf-bearer-api",
      depth: "short",
      q: "What is CSRF, and does a bearer-token Web API need antiforgery protection?",
      answer: "CSRF abuses a cookie the browser sends automatically. A pure bearer-token API is much less exposed because the browser does not add the Authorization header itself, unless the token is kept in a cookie.",
      meaning: {
        hi: "CSRF उस cookie का misuse है जो browser अपने-आप भेजता है। Pure bearer-token API बहुत कम exposed है क्योंकि browser Authorization header खुद नहीं लगाता, जब तक token cookie में न रखा हो।",
        hg: "CSRF us cookie ka misuse hai jo browser apne-aap bhejta hai. Pure bearer-token API bahut kam exposed hai kyunki browser Authorization header khud nahi lagata, jab tak token cookie mein na rakha ho."
      },
      explain: {
        en: "<ul>\n<li>CSRF: a malicious site makes the victim's browser send a state-changing request to your site, and the browser attaches the login cookie.</li>\n<li>Cookie-authenticated apps: antiforgery tokens (automatic in Razor Pages; MVC needs <code>[AutoValidateAntiforgeryToken]</code> or <code>[ValidateAntiForgeryToken]</code>; <code>AddAntiforgery</code> and <code>UseAntiforgery</code> for minimal API forms) plus <code>SameSite</code> on the cookie, and never change state on GET.</li>\n<li>Bearer-token APIs: the token comes from the <code>Authorization</code> header, which a foreign page cannot make the browser add, so classic CSRF mostly does not apply. If the same API also accepts a cookie, it applies again.</li>\n<li>Follow-up: \"Is CORS a CSRF defence?\" No. CORS controls which origins can <b>read</b> responses; a simple cross-site form POST is still sent.</li>\n</ul>",
        hi: "<ul>\n<li>CSRF: कोई malicious site victim के browser से तुम्हारी site पर state बदलने वाली request भिजवाती है, और browser login cookie लगा देता है।</li>\n<li>Cookie-authenticated apps: antiforgery tokens (Razor Pages में automatic; MVC को <code>[AutoValidateAntiforgeryToken]</code> या <code>[ValidateAntiForgeryToken]</code> चाहिए; minimal API forms के लिए <code>AddAntiforgery</code> और <code>UseAntiforgery</code>) और cookie पर <code>SameSite</code>, और GET पर state कभी मत बदलो।</li>\n<li>Bearer-token APIs: token <code>Authorization</code> header से आता है, जिसे कोई बाहरी page browser से नहीं लगवा सकता, इसलिए classic CSRF ज़्यादातर लागू नहीं होता। वही API cookie भी accept करे तो फिर लागू होता है।</li>\n<li>Follow-up: \"क्या CORS CSRF की defence है?\" नहीं। CORS तय करता है कि कौन-से origins responses <b>पढ़</b> सकते हैं; simple cross-site form POST फिर भी भेजा जाता है।</li>\n</ul>",
        hg: "<ul>\n<li>CSRF: koi malicious site victim ke browser se tumhari site par state badalne wali request bhijwati hai, aur browser login cookie laga deta hai.</li>\n<li>Cookie-authenticated apps: antiforgery tokens (Razor Pages mein automatic; MVC ko <code>[AutoValidateAntiforgeryToken]</code> ya <code>[ValidateAntiForgeryToken]</code> chahiye; minimal API forms ke liye <code>AddAntiforgery</code> aur <code>UseAntiforgery</code>) aur cookie par <code>SameSite</code>, aur GET par state kabhi mat badlo.</li>\n<li>Bearer-token APIs: token <code>Authorization</code> header se aata hai, jise koi bahari page browser se nahi lagwa sakta, isliye classic CSRF zyadatar lagu nahi hota. Wahi API cookie bhi accept kare to phir lagu hota hai.</li>\n<li>Follow-up: \"Kya CORS CSRF ki defence hai?\" Nahi. CORS tay karta hai ki kaun-se origins responses <b>padh</b> sakte hain; simple cross-site form POST phir bhi bheja jaata hai.</li>\n</ul>"
      }
    },
    {
      id: "password-storage",
      depth: "short",
      q: "How should passwords be stored in an ASP.NET Core application?",
      answer: "Use ASP.NET Core Identity, whose PasswordHasher applies PBKDF2 with a random salt. Never store plain or reversible passwords, and never use MD5, SHA1 or a plain SHA256 hash.",
      meaning: {
        hi: "ASP.NET Core Identity use करो, जिसका PasswordHasher random salt के साथ PBKDF2 लगाता है। Plain या reversible passwords कभी store मत करो, और MD5, SHA1 या plain SHA256 hash कभी नहीं।",
        hg: "ASP.NET Core Identity use karo, jiska PasswordHasher random salt ke saath PBKDF2 lagata hai. Plain ya reversible passwords kabhi store mat karo, aur MD5, SHA1 ya plain SHA256 hash kabhi nahi."
      },
      explain: {
        en: "<ul>\n<li>A password hash must be <b>slow and salted</b>. MD5, SHA1 and SHA256 are fast, so attackers test billions of guesses per second on stolen hashes.</li>\n<li><code>PasswordHasher&lt;TUser&gt;</code> adds a random salt per password, so equal passwords give different hashes, and its result can be <code>SuccessRehashNeeded</code> when the stored format is older (see the puzzle).</li>\n<li>Around it: lockout, rate limits (Day 13), MFA for privileged users, the same error text for unknown user and wrong password, a breached-password check if possible.</li>\n<li>Follow-up: \"Why not just SHA256 with a salt?\" It is still fast; a purpose-built slow function (PBKDF2, bcrypt, scrypt, Argon2) makes each guess expensive.</li>\n</ul>",
        hi: "<ul>\n<li>Password hash <b>slow और salted</b> होना चाहिए। MD5, SHA1 और SHA256 fast हैं, इसलिए attackers चुराए हुए hashes पर हर सेकंड अरबों guesses आज़माते हैं।</li>\n<li><code>PasswordHasher&lt;TUser&gt;</code> हर password के लिए random salt जोड़ता है, इसलिए equal passwords के hashes अलग होते हैं, और stored format पुराना हो तो result <code>SuccessRehashNeeded</code> हो सकता है (puzzle देखो)।</li>\n<li>उसके आसपास: lockout, rate limits (Day 13), privileged users के लिए MFA, unknown user और wrong password के लिए same error text, हो सके तो breached-password check।</li>\n<li>Follow-up: \"सिर्फ़ salt के साथ SHA256 क्यों नहीं?\" वो फिर भी fast है; purpose-built slow function (PBKDF2, bcrypt, scrypt, Argon2) हर guess को महँगा बनाता है।</li>\n</ul>",
        hg: "<ul>\n<li>Password hash <b>slow aur salted</b> hona chahiye. MD5, SHA1 aur SHA256 fast hain, isliye attackers churaye hue hashes par har second arabon guesses aazmate hain.</li>\n<li><code>PasswordHasher&lt;TUser&gt;</code> har password ke liye random salt jodta hai, isliye equal passwords ke hashes alag hote hain, aur stored format purana ho to result <code>SuccessRehashNeeded</code> ho sakta hai (puzzle dekho).</li>\n<li>Uske aaspaas: lockout, rate limits (Day 13), privileged users ke liye MFA, unknown user aur wrong password ke liye same error text, ho sake to breached-password check.</li>\n<li>Follow-up: \"Sirf salt ke saath SHA256 kyon nahi?\" Woh phir bhi fast hai; purpose-built slow function (PBKDF2, bcrypt, scrypt, Argon2) har guess ko mehenga banata hai.</li>\n</ul>"
      }
    },
    {
      id: "idor-access-control",
      depth: "short",
      q: "A logged-in user changes /orders/101 to /orders/102 and sees another customer's order. What is this, and how do you fix it?",
      answer: "It is IDOR, a broken access control bug: ownership was never checked. I check it on every read and write, with a resource-based authorization handler or a query filtered by the caller's id.",
      meaning: {
        hi: "यह IDOR है, broken access control bug: authentication pass हुआ पर ownership कभी check नहीं हुई। मैं हर read और write पर ownership check करता हूँ, resource-based authorization handler से या caller के id से filter की हुई query से।",
        hg: "Yeh IDOR hai, broken access control bug: authentication pass hua par ownership kabhi check nahi hui. Main har read aur write par ownership check karta hoon, resource-based authorization handler se ya caller ke id se filter ki hui query se."
      },
      explain: {
        en: "<ul>\n<li>Authentication says who you are; authorization says what you may touch. <code>[Authorize]</code> alone does only the first.</li>\n<li>Fix options: filter by owner in the query (<code>Where(o =&gt; o.CustomerId == userId)</code>), or load the object and call <code>IAuthorizationService.AuthorizeAsync(user, order, \"OrderOwner\")</code> so the rule lives in one handler (see the code).</li>\n<li>Take the user id from the claims, never from the URL or body. GUIDs make ids hard to guess but are not an access check.</li>\n<li>Follow-up: \"403 or 404?\" 404 hides that the object exists, 403 is more honest for debugging; pick one policy and be consistent.</li>\n</ul>",
        hi: "<ul>\n<li>Authentication बताता है कि तुम कौन हो; authorization बताता है कि तुम क्या छू सकते हो। अकेला <code>[Authorize]</code> सिर्फ़ पहला करता है।</li>\n<li>Fix के options: query में owner से filter (<code>Where(o =&gt; o.CustomerId == userId)</code>), या object load करके <code>IAuthorizationService.AuthorizeAsync(user, order, \"OrderOwner\")</code> call, ताकि rule एक handler में रहे (code देखो)।</li>\n<li>User id claims से लो, URL या body से कभी नहीं। GUIDs ids को guess करना मुश्किल बनाते हैं पर access check नहीं हैं।</li>\n<li>Follow-up: \"403 या 404?\" 404 object का होना छुपाता है, 403 debugging के लिए ज़्यादा honest है; एक policy चुनो और consistent रहो।</li>\n</ul>",
        hg: "<ul>\n<li>Authentication batata hai ki tum kaun ho; authorization batata hai ki tum kya chhoo sakte ho. Akela <code>[Authorize]</code> sirf pehla karta hai.</li>\n<li>Fix ke options: query mein owner se filter (<code>Where(o =&gt; o.CustomerId == userId)</code>), ya object load karke <code>IAuthorizationService.AuthorizeAsync(user, order, \"OrderOwner\")</code> call, taaki rule ek handler mein rahe (code dekho).</li>\n<li>User id claims se lo, URL ya body se kabhi nahi. GUIDs ids ko guess karna mushkil banate hain par access check nahi hain.</li>\n<li>Follow-up: \"403 ya 404?\" 404 object ka hona chhupata hai, 403 debugging ke liye zyada honest hai; ek policy chuno aur consistent raho.</li>\n</ul>"
      }
    },
    {
      id: "api-slow-what-do-you-do",
      depth: "short",
      q: "Users say the API is slow. What do you do first?",
      answer: "I measure before changing anything: find which endpoint, percentile and dependency is slow using traces and metrics. Then I fix the biggest cost, usually the database or a downstream call, and measure again.",
      meaning: {
        hi: "बदलने से पहले measure करता हूँ: traces और metrics से देखता हूँ कौन-सा endpoint, percentile और dependency slow है। फिर सबसे बड़ा cost fix करता हूँ, आमतौर पर database या downstream call, और फिर measure करता हूँ।",
        hg: "Badalne se pehle measure karta hoon: traces aur metrics se dekhta hoon kaun-sa endpoint, percentile aur dependency slow hai. Phir sabse bada cost fix karta hoon, aamtaur par database ya downstream call, aur phir measure karta hoon."
      },
      explain: {
        en: "<ul>\n<li>Step 1, scope it: which endpoint, since when, p50 or p99, all users or one tenant? Compare with the last deployment and with your SLO.</li>\n<li>Step 2, locate it: distributed traces and Application Insights or OpenTelemetry show time per dependency (Days 16 and 20). Typical culprits: N+1 queries, a missing index (Days 6 and 18), a slow third-party call, blocked threads (Day 3), huge payloads.</li>\n<li>Step 4, fix one thing, re-measure, keep a regression test or a budget alert. Write down what you found.</li>\n<li>Follow-up: \"Would you just add caching?\" Not before knowing the cause; caching can hide a missing index and adds invalidation problems.</li>\n</ul>",
        hi: "<ul>\n<li>Step 1, scope करो: कौन-सा endpoint, कब से, p50 या p99, सब users या एक tenant? पिछली deployment और अपने SLO से compare करो।</li>\n<li>Step 2, locate करो: distributed traces और Application Insights या OpenTelemetry हर dependency का time दिखाते हैं (Days 16 और 20)। आम गुनहगार: N+1 queries, missing index (Days 6 और 18), slow third-party call, blocked threads (Day 3), बहुत बड़े payloads।</li>\n<li>Step 4, एक चीज़ fix करो, फिर measure करो, regression test या budget alert रखो। जो मिला वो लिख लो।</li>\n<li>Follow-up: \"क्या तुम बस caching जोड़ दोगे?\" कारण जानने से पहले नहीं; caching missing index छुपा सकती है और invalidation की समस्याएँ जोड़ती है।</li>\n</ul>",
        hg: "<ul>\n<li>Step 1, scope karo: kaun-sa endpoint, kab se, p50 ya p99, sab users ya ek tenant? Pichhli deployment aur apne SLO se compare karo.</li>\n<li>Step 2, locate karo: distributed traces aur Application Insights ya OpenTelemetry har dependency ka time dikhate hain (Days 16 aur 20). Aam gunahgar: N+1 queries, missing index (Days 6 aur 18), slow third-party call, blocked threads (Day 3), bahut bade payloads.</li>\n<li>Step 4, ek cheez fix karo, phir measure karo, regression test ya budget alert rakho. Jo mila woh likh lo.</li>\n<li>Follow-up: \"Kya tum bas caching jod doge?\" Karan jaanne se pehle nahi; caching missing index chhupa sakti hai aur invalidation ki samasyaayein jodti hai.</li>\n</ul>"
      }
    },
    {
      id: "thread-pool-starvation",
      depth: "short",
      q: "What is thread-pool starvation, how do you recognise it, and how do you fix it?",
      answer: "Threads block on I/O, for example with .Result, so queued requests wait while CPU stays low. I confirm it with thread-pool queue length in dotnet-counters, then remove the blocking and go async all the way.",
      meaning: {
        hi: "Threads I/O पर block हो जाते हैं, जैसे .Result से, इसलिए queued requests wait करती हैं और CPU कम रहता है। मैं dotnet-counters में thread-pool queue length से confirm करता हूँ, फिर blocking हटाकर async all the way करता हूँ।",
        hg: "Threads I/O par block ho jaate hain, jaise .Result se, isliye queued requests wait karti hain aur CPU kam rehta hai. Main dotnet-counters mein thread-pool queue length se confirm karta hoon, phir blocking hatakar async all the way karta hoon."
      },
      explain: {
        en: "<ul>\n<li>The pool starts with a small number of threads and adds more slowly under sustained demand. If every thread waits on a blocking call, new requests queue up.</li>\n<li>Symptoms: latency and timeouts climb with low CPU; <code>dotnet-counters</code> shows a growing queue length and thread count; a dump or trace shows many threads waiting.</li>\n<li>Fix: async from endpoint to I/O (Day 3), pass cancellation tokens, set timeouts, use <code>IHttpClientFactory</code>. Raising minimum threads only buys time.</li>\n<li>Follow-up: \"Does ASP.NET Core still deadlock on .Result?\" The classic SynchronizationContext deadlock is gone, but the blocked thread still hurts under load.</li>\n</ul>",
        hi: "<ul>\n<li>Pool थोड़े threads से शुरू होता है और लगातार demand में धीरे-धीरे और जोड़ता है। अगर हर thread blocking call पर wait कर रहा है, तो नई requests queue में लग जाती हैं।</li>\n<li>Symptoms: CPU कम रहते हुए latency और timeouts बढ़ते हैं; <code>dotnet-counters</code> में बढ़ती queue length और thread count; dump या trace में बहुत से threads wait करते दिखते हैं।</li>\n<li>Fix: endpoint से I/O तक async (Day 3), cancellation tokens pass करो, timeouts लगाओ, <code>IHttpClientFactory</code> use करो। Minimum threads बढ़ाना बस समय खरीदता है।</li>\n<li>Follow-up: \"क्या ASP.NET Core में .Result अब भी deadlock करता है?\" Classic SynchronizationContext deadlock चला गया है, पर blocked thread load में अब भी नुकसान करता है।</li>\n</ul>",
        hg: "<ul>\n<li>Pool thode threads se shuru hota hai aur lagataar demand mein dheere-dheere aur jodta hai. Agar har thread blocking call par wait kar raha hai, to nayi requests queue mein lag jaati hain.</li>\n<li>Symptoms: CPU kam rehte hue latency aur timeouts badhte hain; <code>dotnet-counters</code> mein badhti queue length aur thread count; dump ya trace mein bahut se threads wait karte dikhte hain.</li>\n<li>Fix: endpoint se I/O tak async (Day 3), cancellation tokens pass karo, timeouts lagao, <code>IHttpClientFactory</code> use karo. Minimum threads badhana bas samay kharidta hai.</li>\n<li>Follow-up: \"Kya ASP.NET Core mein .Result ab bhi deadlock karta hai?\" Classic SynchronizationContext deadlock chala gaya hai, par blocked thread load mein ab bhi nuksaan karta hai.</li>\n</ul>"
      }
    },
    {
      id: "threat-modelling-team",
      depth: "detailed",
      q: "How do you run threat modelling in a team, and what is STRIDE?",
      answer: "I draw the data flow with trust boundaries, then walk each part through STRIDE: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege. Top threats get owners, tickets and tests.",
      meaning: {
        hi: "मैं trust boundaries के साथ data flow बनाता हूँ, फिर हर हिस्से को STRIDE से देखता हूँ: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege। Top threats को owners, tickets और tests मिलते हैं।",
        hg: "Main trust boundaries ke saath data flow banata hoon, phir har hisse ko STRIDE se dekhta hoon: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege. Top threats ko owners, tickets aur tests milte hain."
      },
      explain: {
        en: "<ul>\n<li>Run it <b>before building</b> a feature that adds a trust boundary, personal or financial data, or a new login path. 15 to 30 minutes with a developer, a tester and whoever knows the data.</li>\n<li>For each arrow and box ask the six STRIDE questions; write only realistic threats and the planned control (see the section for a .NET answer to each letter).</li>\n<li>Follow-up: \"How is this different from a pen test?\" A threat model is design-time and cheap; a pen test checks the built system and finds what the model missed.</li>\n</ul>",
        hi: "<ul>\n<li>इसे feature <b>बनाने से पहले</b> चलाओ जो trust boundary, personal या financial data, या नया login path जोड़ता हो। एक developer, एक tester और data जानने वाले के साथ 15 से 30 मिनट।</li>\n<li>हर arrow और box के लिए STRIDE के छह सवाल पूछो; सिर्फ़ realistic threats और planned control लिखो (हर letter के .NET जवाब के लिए section देखो)।</li>\n<li>Follow-up: \"यह pen test से कैसे अलग है?\" Threat model design-time पर होता है और सस्ता है; pen test बने हुए system को check करता है और वो पकड़ता है जो model से छूटा।</li>\n</ul>",
        hg: "<ul>\n<li>Ise feature <b>banane se pehle</b> chalao jo trust boundary, personal ya financial data, ya naya login path jode. Ek developer, ek tester aur data jaanne wale ke saath 15 se 30 minute.</li>\n<li>Har arrow aur box ke liye STRIDE ke chhe sawaal poochho; sirf realistic threats aur planned control likho (har letter ke .NET jawab ke liye section dekho).</li>\n<li>Follow-up: \"Yeh pen test se kaise alag hai?\" Threat model design-time par hota hai aur sasta hai; pen test bane hue system ko check karta hai aur woh pakadta hai jo model se chhoota.</li>\n</ul>"
      }
    },
    {
      id: "secure-code-review",
      depth: "detailed",
      q: "What do you look for in a pull request from a security point of view?",
      answer: "Authentication and ownership checks, string-built SQL, HTML or paths, new secrets, unvalidated outbound URLs, new packages, leaky errors or logs, and an abuse-case test.",
      meaning: {
        hi: "हर endpoint पर authentication और ownership checks, string से बने SQL, HTML या paths, नए secrets, unvalidated outbound URLs, नए packages, और details leak करने वाले errors या logs। मैं abuse case का test भी देखता हूँ।",
        hg: "Har endpoint par authentication aur ownership checks, string se bane SQL, HTML ya paths, naye secrets, unvalidated outbound URLs, naye packages, aur details leak karne wale errors ya logs. Main abuse case ka test bhi dekhta hoon."
      },
      explain: {
        en: "<ul>\n<li>Keep the checklist short and in the PR template (the section lists the questions). Reviewers use it only if it is quick.</li>\n<li>Automate what can be automated: analyzers, secret scanning, dependency audit, so humans review logic like ownership checks and design.</li>\n<li>Follow-up: \"A senior colleague pushes back on a security comment.\" Explain the attack in one sentence with a concrete example, offer the fix, and if still disputed, escalate to the agreed risk owner rather than winning an argument.</li>\n</ul>",
        hi: "<ul>\n<li>Checklist छोटी रखो और PR template में (section में सवाल listed हैं)। Reviewers उसे तभी use करते हैं जब वो quick हो।</li>\n<li>जो automate हो सके उसे automate करो: analyzers, secret scanning, dependency audit, ताकि इंसान ownership checks और design जैसी logic review करें।</li>\n<li>Follow-up: \"कोई senior colleague security comment पर push back करे।\" Attack एक sentence में concrete example के साथ समझाओ, fix बताओ, और फिर भी disagreement हो तो बहस जीतने की जगह agreed risk owner तक escalate करो।</li>\n</ul>",
        hg: "<ul>\n<li>Checklist chhoti rakho aur PR template mein (section mein sawaal listed hain). Reviewers use tabhi karte hain jab woh quick ho.</li>\n<li>Jo automate ho sake use automate karo: analyzers, secret scanning, dependency audit, taaki insaan ownership checks aur design jaisi logic review karein.</li>\n<li>Follow-up: \"Koi senior colleague security comment par push back kare.\" Attack ek sentence mein concrete example ke saath samjhao, fix batao, aur phir bhi disagreement ho to behas jeetne ki jagah agreed risk owner tak escalate karo.</li>\n</ul>"
      }
    },
    {
      id: "vulnerable-packages",
      depth: "detailed",
      q: "How do you find and handle vulnerable NuGet packages?",
      answer: "NuGet Audit warns during restore (since the .NET 8 SDK), and dotnet list package --vulnerable lists them on demand. I fail the build at an agreed severity and use Dependabot for update pull requests.",
      meaning: {
        hi: "NuGet Audit restore के दौरान warn करता है (.NET 8 SDK से), और dotnet list package --vulnerable माँगने पर list देता है। मैं agreed severity पर build fail करता हूँ और update pull requests के लिए Dependabot use करता हूँ।",
        hg: "NuGet Audit restore ke dauran warn karta hai (.NET 8 SDK se), aur dotnet list package --vulnerable maangne par list deta hai. Main agreed severity par build fail karta hoon aur update pull requests ke liye Dependabot use karta hoon."
      },
      explain: {
        en: "<ul>\n<li>Warnings NU1901 to NU1904 are low, moderate, high and critical. Settings <code>NuGetAudit</code>, <code>NuGetAuditMode</code> and <code>NuGetAuditLevel</code> control it; the audit mode defaults to <b>all</b> (direct and transitive) for <code>net10.0</code> or higher, otherwise direct only.</li>\n<li>Transitive vulnerability: update the package closest to your direct reference first; otherwise add a direct reference to the fixed version or use Central Package Management transitive pinning, and remove it later. <code>dotnet nuget why</code> shows the path.</li>\n<li>If no fix exists: read the mitigating factors, replace the package, or suppress the one advisory with a note and a review date (<code>NuGetAuditSuppress</code>).</li>\n<li>Follow-up: \"What else is supply chain?\" Typosquatting (check package owners), a private feed or package source mapping, pinned CI actions, and secret scanning (Day 21).</li>\n</ul>",
        hi: "<ul>\n<li>Warnings NU1901 से NU1904 low, moderate, high और critical हैं। Settings <code>NuGetAudit</code>, <code>NuGetAuditMode</code> और <code>NuGetAuditLevel</code> इसे control करती हैं; audit mode <code>net10.0</code> या उससे ऊपर के लिए default में <b>all</b> (direct और transitive) है, वरना सिर्फ़ direct।</li>\n<li>Transitive vulnerability: पहले अपने direct reference के सबसे पास वाला package update करो; वरना fixed version का direct reference जोड़ो या Central Package Management का transitive pinning use करो, और बाद में हटा दो। <code>dotnet nuget why</code> path दिखाता है।</li>\n<li>Fix न हो तो: mitigating factors पढ़ो, package बदलो, या उस एक advisory को note और review date के साथ suppress करो (<code>NuGetAuditSuppress</code>)।</li>\n<li>Follow-up: \"supply chain में और क्या आता है?\" Typosquatting (package owners check करो), private feed या package source mapping, pinned CI actions, और secret scanning (Day 21)।</li>\n</ul>",
        hg: "<ul>\n<li>Warnings NU1901 se NU1904 low, moderate, high aur critical hain. Settings <code>NuGetAudit</code>, <code>NuGetAuditMode</code> aur <code>NuGetAuditLevel</code> ise control karti hain; audit mode <code>net10.0</code> ya usse upar ke liye default mein <b>all</b> (direct aur transitive) hai, warna sirf direct.</li>\n<li>Transitive vulnerability: pehle apne direct reference ke sabse paas wala package update karo; warna fixed version ka direct reference jodo ya Central Package Management ka transitive pinning use karo, aur baad mein hata do. <code>dotnet nuget why</code> path dikhata hai.</li>\n<li>Fix na ho to: mitigating factors padho, package badlo, ya us ek advisory ko note aur review date ke saath suppress karo (<code>NuGetAuditSuppress</code>).</li>\n<li>Follow-up: \"Supply chain mein aur kya aata hai?\" Typosquatting (package owners check karo), private feed ya package source mapping, pinned CI actions, aur secret scanning (Day 21).</li>\n</ul>"
      }
    },
    {
      id: "ssrf-prevent",
      depth: "detailed",
      q: "What is SSRF, and how do you stop a feature like 'import from URL' being abused?",
      answer: "SSRF makes your server fetch an attacker-chosen URL, often an internal address like the cloud metadata endpoint. I allow-list hosts after parsing the URL, require https, block private addresses after DNS resolution, and limit redirects.",
      meaning: {
        hi: "SSRF में तुम्हारा server attacker का चुना URL fetch करता है, अक्सर cloud metadata endpoint जैसा internal address। मैं URL parse करके hosts की allow-list बनाता हूँ, https माँगता हूँ, DNS resolution के बाद private addresses block करता हूँ, और redirects सीमित करता हूँ।",
        hg: "SSRF mein tumhara server attacker ka chuna URL fetch karta hai, aksar cloud metadata endpoint jaisa internal address. Main URL parse karke hosts ki allow-list banata hoon, https maangta hoon, DNS resolution ke baad private addresses block karta hoon, aur redirects seemit karta hoon."
      },
      explain: {
        en: "<ul>\n<li>Typical targets: <code>169.254.169.254</code> (cloud instance metadata), <code>localhost</code> admin ports, internal APIs and databases. A leaked managed-identity token can then be used from outside.</li>\n<li>Allow-list, do not deny-list; parse with <code>Uri</code> and compare <code>Scheme</code> and <code>Host</code> exactly (see the URL puzzle), not <code>StartsWith</code>.</li>\n<li>Resolve the host and reject loopback, private, link-local and unique-local addresses (see the IP code); then connect to the address you checked, to avoid DNS rebinding tricks.</li>\n<li>Follow-up: \"Do cloud metadata protections make this safe?\" They help, but treat them as a second layer; the first is not letting user input pick the target.</li>\n</ul>",
        hi: "<ul>\n<li>Typical targets: <code>169.254.169.254</code> (cloud instance metadata), <code>localhost</code> admin ports, internal APIs और databases। Leak हुआ managed-identity token फिर बाहर से use हो सकता है।</li>\n<li>Allow-list बनाओ, deny-list नहीं; <code>Uri</code> से parse करो और <code>Scheme</code> और <code>Host</code> exactly compare करो (URL puzzle देखो), <code>StartsWith</code> नहीं।</li>\n<li>Host resolve करो और loopback, private, link-local और unique-local addresses reject करो (IP code देखो); फिर उसी address से connect करो जिसे check किया, ताकि DNS rebinding tricks से बचो।</li>\n<li>Follow-up: \"क्या cloud metadata protections इसे safe बना देते हैं?\" मदद करते हैं, पर इन्हें दूसरी layer मानो; पहली है user input को target चुनने न देना।</li>\n</ul>",
        hg: "<ul>\n<li>Typical targets: <code>169.254.169.254</code> (cloud instance metadata), <code>localhost</code> admin ports, internal APIs aur databases. Leak hua managed-identity token phir bahar se use ho sakta hai.</li>\n<li>Allow-list banao, deny-list nahi; <code>Uri</code> se parse karo aur <code>Scheme</code> aur <code>Host</code> exactly compare karo (URL puzzle dekho), <code>StartsWith</code> nahi.</li>\n<li>Host resolve karo aur loopback, private, link-local aur unique-local addresses reject karo (IP code dekho); phir usi address se connect karo jise check kiya, taaki DNS rebinding tricks se bacho.</li>\n<li>Follow-up: \"Kya cloud metadata protections ise safe bana dete hain?\" Madad karte hain, par inhein doosri layer maano; pehli hai user input ko target chunne na dena.</li>\n</ul>"
      }
    },
    {
      id: "data-protection-api",
      depth: "detailed",
      q: "What is the ASP.NET Core Data Protection API, and what must you configure when running several instances?",
      answer: "It encrypts and signs short-lived data such as auth cookies and antiforgery tokens. With several instances the key ring must be shared and persisted, ideally protected by Key Vault, or users get logged out.",
      meaning: {
        hi: "यह auth cookies और antiforgery tokens जैसे short-lived data को encrypt और sign करता है। कई instances में key ring shared और persisted होना चाहिए, Key Vault से protected हो तो बेहतर, वरना users logout हो जाते हैं।",
        hg: "Yeh auth cookies aur antiforgery tokens jaise short-lived data ko encrypt aur sign karta hai. Kai instances mein key ring shared aur persisted hona chahiye, Key Vault se protected ho to behtar, warna users logout ho jaate hain."
      },
      explain: {
        en: "<ul>\n<li>Used internally for auth cookies, antiforgery tokens and TempData; you use <code>IDataProtector</code> for your own small payloads (reset links, state values). A <b>purpose string</b> gives a separate key per use.</li>\n<li>Keys live in a key ring. By default they are stored locally; behind a load balancer or after a redeploy, other instances cannot read cookies made by one instance. Persist the ring in a shared store (blob storage, Redis, a database) and protect it with a key in Key Vault (Day 20); set an application name so apps that should share keys do.</li>\n<li>Follow-up: \"Users are logged out after every deployment.\" Classic sign of keys not persisted or not shared.</li>\n</ul>",
        hi: "<ul>\n<li>Auth cookies, antiforgery tokens और TempData के लिए internally use होता है; अपने छोटे payloads (reset links, state values) के लिए तुम <code>IDataProtector</code> use करते हो। <b>Purpose string</b> हर use के लिए अलग key देती है।</li>\n<li>Keys key ring में रहती हैं। Default में local store होती हैं; load balancer के पीछे या redeploy के बाद दूसरे instances एक instance की बनाई cookies नहीं पढ़ पाते। Ring को shared store (blob storage, Redis, database) में persist करो और Key Vault (Day 20) की key से protect करो; application name set करो ताकि जिन apps को keys share करनी हैं वो करें।</li>\n<li>Follow-up: \"हर deployment के बाद users logout हो जाते हैं।\" यह keys के persist या share न होने की classic निशानी है।</li>\n</ul>",
        hg: "<ul>\n<li>Auth cookies, antiforgery tokens aur TempData ke liye internally use hota hai; apne chhote payloads (reset links, state values) ke liye tum <code>IDataProtector</code> use karte ho. <b>Purpose string</b> har use ke liye alag key deti hai.</li>\n<li>Keys key ring mein rehti hain. Default mein local store hoti hain; load balancer ke peeche ya redeploy ke baad doosre instances ek instance ki banayi cookies nahi padh paate. Ring ko shared store (blob storage, Redis, database) mein persist karo aur Key Vault (Day 20) ki key se protect karo; application name set karo taaki jin apps ko keys share karni hain woh karein.</li>\n<li>Follow-up: \"Har deployment ke baad users logout ho jaate hain.\" Yeh keys ke persist ya share na hone ki classic nishani hai.</li>\n</ul>"
      }
    },
    {
      id: "csp-headers-cors",
      depth: "detailed",
      q: "What security headers do you add to an ASP.NET Core app, and how do CSP and CORS differ?",
      answer: "HSTS, X-Content-Type-Options, a Content-Security-Policy, and a referrer policy as a start. CSP restricts what the page may load or run; CORS only controls which other origins may read this API's responses.",
      meaning: {
        hi: "शुरुआत के लिए HSTS, X-Content-Type-Options, Content-Security-Policy और referrer policy। CSP तय करता है कि page क्या load या run कर सकता है; CORS सिर्फ़ यह तय करता है कि दूसरे origins इस API के responses पढ़ सकते हैं या नहीं।",
        hg: "Shuruaat ke liye HSTS, X-Content-Type-Options, Content-Security-Policy aur referrer policy. CSP tay karta hai ki page kya load ya run kar sakta hai; CORS sirf yeh tay karta hai ki doosre origins is API ke responses padh sakte hain ya nahi."
      },
      explain: {
        en: "<ul>\n<li><b>HSTS</b> (<code>UseHsts</code>; the template enables it only outside Development, and it excludes localhost): browsers use HTTPS only for your host for a period. <code>X-Content-Type-Options: nosniff</code> stops MIME sniffing. <code>Referrer-Policy</code> limits what URLs leak. <code>frame-ancestors</code> in CSP (or <code>X-Frame-Options</code>) stops clickjacking.</li>\n<li><b>CSP</b> is a response header the browser enforces on the <b>page</b>: allowed script, style, image and connect sources. Start with a report-only policy to see what breaks, then enforce; inline scripts need nonces or hashes.</li>\n<li><b>CORS</b> is a browser rule about <b>cross-origin reads</b> of responses; the server opts in with headers. It does not authenticate anyone and does not stop a request from being sent (Day 13).</li>\n<li>Follow-up: \"Is <code>AllowAnyOrigin</code> with credentials allowed?\" Browsers reject the wildcard with credentials; list explicit origins instead.</li>\n</ul>",
        hi: "<ul>\n<li><b>HSTS</b> (<code>UseHsts</code>; template इसे सिर्फ़ Development के बाहर enable करता है, localhost भी exclude है): browsers कुछ समय तक तुम्हारे host के लिए सिर्फ़ HTTPS use करते हैं। <code>X-Content-Type-Options: nosniff</code> MIME sniffing रोकता है। <code>Referrer-Policy</code> सीमित करती है कि कौन-से URLs leak हों। CSP का <code>frame-ancestors</code> (या <code>X-Frame-Options</code>) clickjacking रोकता है।</li>\n<li><b>CSP</b> ऐसा response header है जिसे browser <b>page</b> पर enforce करता है: allowed script, style, image और connect sources। पहले report-only policy से देखो क्या टूटता है, फिर enforce करो; inline scripts को nonces या hashes चाहिए।</li>\n<li><b>CORS</b> responses के <b>cross-origin reads</b> पर browser का नियम है; server headers से opt-in करता है। यह किसी को authenticate नहीं करता और request को भेजे जाने से नहीं रोकता (Day 13)।</li>\n<li>Follow-up: \"क्या credentials के साथ <code>AllowAnyOrigin</code> allowed है?\" Browsers credentials के साथ wildcard reject करते हैं; explicit origins list करो।</li>\n</ul>",
        hg: "<ul>\n<li><b>HSTS</b> (<code>UseHsts</code>; template ise sirf Development ke bahar enable karta hai, localhost bhi exclude hai): browsers kuch samay tak tumhare host ke liye sirf HTTPS use karte hain. <code>X-Content-Type-Options: nosniff</code> MIME sniffing rokta hai. <code>Referrer-Policy</code> seemit karti hai ki kaun-se URLs leak hon. CSP ka <code>frame-ancestors</code> (ya <code>X-Frame-Options</code>) clickjacking rokta hai.</li>\n<li><b>CSP</b> aisa response header hai jise browser <b>page</b> par enforce karta hai: allowed script, style, image aur connect sources. Pehle report-only policy se dekho kya tootta hai, phir enforce karo; inline scripts ko nonces ya hashes chahiye.</li>\n<li><b>CORS</b> responses ke <b>cross-origin reads</b> par browser ka niyam hai; server headers se opt-in karta hai. Yeh kisi ko authenticate nahi karta aur request ko bheje jaane se nahi rokta (Day 13).</li>\n<li>Follow-up: \"Kya credentials ke saath <code>AllowAnyOrigin</code> allowed hai?\" Browsers credentials ke saath wildcard reject karte hain; explicit origins list karo.</li>\n</ul>"
      }
    },
    {
      id: "secrets-and-logging",
      depth: "detailed",
      q: "How do you keep secrets and personal data out of code and logs?",
      answer: "Secrets live in Key Vault with managed identity, user-secrets locally, and secret scanning in CI. For logs I record ids and reasons, use structured logging, and review log statements like code.",
      meaning: {
        hi: "Secrets Key Vault में managed identity के साथ रहते हैं, local में user-secrets, और CI में secret scanning। Logs में मैं ids और reasons रखता हूँ, structured logging use करता हूँ, और log statements का code की तरह review करता हूँ।",
        hg: "Secrets Key Vault mein managed identity ke saath rehte hain, local mein user-secrets, aur CI mein secret scanning. Logs mein main ids aur reasons rakhta hoon, structured logging use karta hoon, aur log statements ka code ki tarah review karta hoon."
      },
      explain: {
        en: "<ul>\n<li>Secrets: not in git or <code>appsettings.json</code>; Key Vault plus managed identity in Azure (Day 20), user-secrets for local development (Day 12), secret scanning on push (Day 21). If one leaks, <b>rotate first</b>, clean history second.</li>\n<li>Logs: log security events and ids; never passwords, tokens, full card numbers or free-text personal data. Prefer allow-listed fields over logging whole request or response bodies.</li>\n<li>Structured logging (<code>{UserId}</code> placeholders) keeps user text as a value, which avoids log-forging with injected newlines.</li>\n<li>Follow-up: \"A password appeared in a log yesterday.\" Rotate or force reset for affected users if needed, purge or redact the log store per policy, fix the statement, add a test or analyzer, and write it up blamelessly.</li>\n</ul>",
        hi: "<ul>\n<li>Secrets: git या <code>appsettings.json</code> में नहीं; Azure में Key Vault और managed identity (Day 20), local development के लिए user-secrets (Day 12), push पर secret scanning (Day 21)। एक leak हो तो <b>पहले rotate करो</b>, history साफ़ करना बाद में।</li>\n<li>Logs: security events और ids log करो; passwords, tokens, full card numbers या free-text personal data कभी नहीं। पूरे request या response bodies log करने की जगह allow-listed fields prefer करो।</li>\n<li>Structured logging (<code>{UserId}</code> placeholders) user text को value बनाए रखती है, जिससे injected newlines से log-forging नहीं होती।</li>\n<li>Follow-up: \"कल एक password log में दिखा।\" ज़रूरत हो तो affected users के लिए rotate या force reset, policy के हिसाब से log store purge या redact, statement fix, test या analyzer जोड़ो, और blameless write-up।</li>\n</ul>",
        hg: "<ul>\n<li>Secrets: git ya <code>appsettings.json</code> mein nahi; Azure mein Key Vault aur managed identity (Day 20), local development ke liye user-secrets (Day 12), push par secret scanning (Day 21). Ek leak ho to <b>pehle rotate karo</b>, history saaf karna baad mein.</li>\n<li>Logs: security events aur ids log karo; passwords, tokens, full card numbers ya free-text personal data kabhi nahi. Poore request ya response bodies log karne ki jagah allow-listed fields prefer karo.</li>\n<li>Structured logging (<code>{UserId}</code> placeholders) user text ko value banaye rakhti hai, jisse injected newlines se log-forging nahi hoti.</li>\n<li>Follow-up: \"Kal ek password log mein dikha.\" Zaroorat ho to affected users ke liye rotate ya force reset, policy ke hisaab se log store purge ya redact, statement fix, test ya analyzer jodo, aur blameless write-up.</li>\n</ul>"
      }
    },
    {
      id: "benchmarkdotnet-pitfalls",
      depth: "detailed",
      q: "How do you benchmark C# code properly, and what are the common mistakes?",
      answer: "Use BenchmarkDotNet in Release with MemoryDiagnoser, on realistic data, and compare variants on the same machine. A Stopwatch loop misleads through JIT warm-up, dead-code elimination and noise.",
      meaning: {
        hi: "BenchmarkDotNet को Release में MemoryDiagnoser के साथ, realistic data पर use करो, और variants को एक ही machine पर compare करो। Stopwatch loop JIT warm-up, dead-code elimination और noise की वजह से गुमराह करता है।",
        hg: "BenchmarkDotNet ko Release mein MemoryDiagnoser ke saath, realistic data par use karo, aur variants ko ek hi machine par compare karo. Stopwatch loop JIT warm-up, dead-code elimination aur noise ki wajah se gumraah karta hai."
      },
      explain: {
        en: "<ul>\n<li>BenchmarkDotNet handles warm-up, many iterations, statistics and process isolation. Run with <code>dotnet run -c Release</code> without a debugger.</li>\n<li>Common mistakes: Debug build; tiny or unrealistic data; benchmarking something the profile did not point to; returning nothing so the JIT removes the work (return the result); comparing numbers from different machines; reading a 3% difference as meaningful when the error is larger.</li>\n<li>Follow-up: \"Would you add benchmarks to CI?\" For a few critical libraries, tracked over time and not as hard pass/fail on shared agents, because CI machines are noisy.</li>\n</ul>",
        hi: "<ul>\n<li>BenchmarkDotNet warm-up, कई iterations, statistics और process isolation संभालता है। <code>dotnet run -c Release</code> से, debugger के बिना चलाओ।</li>\n<li>आम गलतियाँ: Debug build; छोटा या unrealistic data; ऐसी चीज़ benchmark करना जिसकी तरफ़ profile ने इशारा नहीं किया; कुछ return न करना ताकि JIT काम हटा दे (result return करो); अलग machines के numbers compare करना; 3% के फ़र्क को meaningful मानना जब error उससे बड़ा हो।</li>\n<li>Follow-up: \"क्या CI में benchmarks जोड़ोगे?\" कुछ critical libraries के लिए, समय के साथ track करके और shared agents पर hard pass/fail की तरह नहीं, क्योंकि CI machines noisy होती हैं।</li>\n</ul>",
        hg: "<ul>\n<li>BenchmarkDotNet warm-up, kai iterations, statistics aur process isolation sambhalta hai. <code>dotnet run -c Release</code> se, debugger ke bina chalao.</li>\n<li>Aam galtiyaan: Debug build; chhota ya unrealistic data; aisi cheez benchmark karna jiski taraf profile ne ishara nahi kiya; kuch return na karna taaki JIT kaam hata de (result return karo); alag machines ke numbers compare karna; 3% ke farq ko meaningful maanna jab error usse bada ho.</li>\n<li>Follow-up: \"Kya CI mein benchmarks jodoge?\" Kuch critical libraries ke liye, samay ke saath track karke aur shared agents par hard pass/fail ki tarah nahi, kyunki CI machines noisy hoti hain.</li>\n</ul>"
      }
    },
    {
      id: "allocations-span-pool",
      depth: "detailed",
      q: "When are Span, ArrayPool and StringBuilder worth using, and when are they over-engineering?",
      answer: "They pay off in proven hot paths such as parsers and serializers, where profiling shows allocation or GC cost. In ordinary business code they make the code harder to read for little gain.",
      meaning: {
        hi: "ये proven hot paths में फ़ायदा देते हैं, जैसे parsers और serializers, जहाँ profiling allocation या GC cost दिखाती है। साधारण business code में ये थोड़े फ़ायदे के लिए code को पढ़ने में मुश्किल बनाते हैं।",
        hg: "Ye proven hot paths mein faayda dete hain, jaise parsers aur serializers, jahan profiling allocation ya GC cost dikhati hai. Saadharan business code mein ye thode faayde ke liye code ko padhne mein mushkil banate hain."
      },
      explain: {
        en: "<ul>\n<li><code>Span&lt;T&gt;</code> and <code>ReadOnlySpan&lt;char&gt;</code> slice memory without copying; they are <code>ref struct</code>s, so they cannot live on the heap or across <code>await</code> (Day 3).</li>\n<li><code>ArrayPool&lt;T&gt;.Shared.Rent(n)</code> may return a <b>longer</b> array with <b>old contents</b>: use only the length you asked for, clear it if it held secrets, and always <code>Return</code> in a <code>finally</code>.</li>\n<li>Follow-up: \"How would you prove it was worth it?\" A benchmark with MemoryDiagnoser before and after, plus the production allocation rate or GC counters.</li>\n</ul>",
        hi: "<ul>\n<li><code>Span&lt;T&gt;</code> और <code>ReadOnlySpan&lt;char&gt;</code> बिना copy किए memory slice करते हैं; ये <code>ref struct</code> हैं, इसलिए heap पर या <code>await</code> के बाद तक नहीं रह सकते (Day 3)।</li>\n<li><code>ArrayPool&lt;T&gt;.Shared.Rent(n)</code> <b>लंबा</b> array <b>पुराने contents</b> के साथ लौटा सकता है: सिर्फ़ उतनी length use करो जितनी माँगी, secrets रखे हों तो clear करो, और <code>finally</code> में हमेशा <code>Return</code> करो।</li>\n<li>Follow-up: \"कैसे साबित करोगे कि worth था?\" पहले और बाद में MemoryDiagnoser वाला benchmark, और production allocation rate या GC counters।</li>\n</ul>",
        hg: "<ul>\n<li><code>Span&lt;T&gt;</code> aur <code>ReadOnlySpan&lt;char&gt;</code> bina copy kiye memory slice karte hain; ye <code>ref struct</code> hain, isliye heap par ya <code>await</code> ke baad tak nahi reh sakte (Day 3).</li>\n<li><code>ArrayPool&lt;T&gt;.Shared.Rent(n)</code> <b>lamba</b> array <b>purane contents</b> ke saath laut sakta hai: sirf utni length use karo jitni maangi, secrets rakhe hon to clear karo, aur <code>finally</code> mein hamesha <code>Return</code> karo.</li>\n<li>Follow-up: \"Kaise saabit karoge ki worth tha?\" Pehle aur baad mein MemoryDiagnoser wala benchmark, aur production allocation rate ya GC counters.</li>\n</ul>"
      }
    },
    {
      id: "cache-compress-output",
      depth: "detailed",
      q: "How do output caching and response compression differ, and what are the risks of each?",
      answer: "Output caching stores whole responses to skip work; compression shrinks bytes on the wire. Cache risks are serving stale or another user's data; compression over HTTPS needs care because of BREACH-style attacks.",
      meaning: {
        hi: "Output caching पूरे responses store करके काम बचाती है; compression wire पर bytes छोटे करती है। Cache के risks stale या दूसरे user का data serve होना है; HTTPS पर compression में BREACH जैसे attacks की वजह से सावधानी चाहिए।",
        hg: "Output caching poore responses store karke kaam bachati hai; compression wire par bytes chhote karti hai. Cache ke risks stale ya doosre user ka data serve hona hai; HTTPS par compression mein BREACH jaise attacks ki wajah se saavdhani chahiye."
      },
      explain: {
        en: "<ul>\n<li>ASP.NET Core output caching (Day 13): by default only 200 responses to GET or HEAD, not responses that set cookies and not authenticated requests; keep <code>UseOutputCache</code> after authentication, authorization and CORS; use tags to evict; the default store is per server memory (use Redis to share).</li>\n<li>Response compression: Brotli and Gzip; <code>EnableForHttps</code> is off by default because compressing dynamic pages with secrets can enable CRIME and BREACH attacks, and antiforgery tokens are one mitigation. Many teams compress at the proxy or CDN.</li>\n<li>Follow-up: \"Where does <code>HybridCache</code> fit?\" It caches <b>data</b> inside the app (with stampede protection, Day 13); output caching caches the <b>HTTP response</b>.</li>\n</ul>",
        hi: "<ul>\n<li>ASP.NET Core output caching (Day 13): default में सिर्फ़ GET या HEAD के 200 responses, cookies set करने वाले responses नहीं और authenticated requests नहीं; <code>UseOutputCache</code> को authentication, authorization और CORS के बाद रखो; evict करने के लिए tags; default store per-server memory है (share करने के लिए Redis)।</li>\n<li>Response compression: Brotli और Gzip; <code>EnableForHttps</code> default से off है क्योंकि secrets वाले dynamic pages compress करने से CRIME और BREACH attacks संभव हो सकते हैं, और antiforgery tokens एक mitigation हैं। बहुत सी teams proxy या CDN पर compress करती हैं।</li>\n<li>Follow-up: \"<code>HybridCache</code> कहाँ आता है?\" यह app के अंदर <b>data</b> cache करता है (stampede protection के साथ, Day 13); output caching <b>HTTP response</b> cache करती है।</li>\n</ul>",
        hg: "<ul>\n<li>ASP.NET Core output caching (Day 13): default mein sirf GET ya HEAD ke 200 responses, cookies set karne wale responses nahi aur authenticated requests nahi; <code>UseOutputCache</code> ko authentication, authorization aur CORS ke baad rakho; evict karne ke liye tags; default store per-server memory hai (share karne ke liye Redis).</li>\n<li>Response compression: Brotli aur Gzip; <code>EnableForHttps</code> default se off hai kyunki secrets wale dynamic pages compress karne se CRIME aur BREACH attacks sambhav ho sakte hain, aur antiforgery tokens ek mitigation hain. Bahut si teams proxy ya CDN par compress karti hain.</li>\n<li>Follow-up: \"<code>HybridCache</code> kahan aata hai?\" Yeh app ke andar <b>data</b> cache karta hai (stampede protection ke saath, Day 13); output caching <b>HTTP response</b> cache karti hai.</li>\n</ul>"
      }
    },
    {
      id: "pagination-design",
      depth: "detailed",
      q: "Offset pagination or keyset pagination for a large list API, and why?",
      answer: "Keyset for large or changing lists: it stays fast and avoids duplicates and gaps, but needs a unique indexed sort key and no random page jumps. Offset is fine for small, static admin lists.",
      meaning: {
        hi: "बड़ी या बदलती lists के लिए keyset: यह तेज़ रहता है और duplicates और gaps से बचाता है, पर unique indexed sort key चाहिए और random page jump नहीं। छोटी, static admin lists के लिए offset ठीक है।",
        hg: "Badi ya badalti lists ke liye keyset: yeh tez rehta hai aur duplicates aur gaps se bachata hai, par unique indexed sort key chahiye aur random page jump nahi. Chhoti, static admin lists ke liye offset theek hai."
      },
      explain: {
        en: "<ul>\n<li>Offset (<code>Skip(n).Take(m)</code>): simple and allows \"go to page 17\", but the database still walks past the skipped rows, and inserts or deletes between requests cause duplicates or gaps (see the puzzle).</li>\n<li>Keyset (<code>Where(Id &lt; lastId).OrderByDescending(Id).Take(m)</code>): seeks an index; stable under changes. Return a cursor (the last key) in the response. Needs a unique, indexed sort key (add the primary key as a tie-breaker when sorting by a non-unique column).</li>\n<li>Follow-up: \"The UI needs page numbers and sorting by any column.\" Offset with a cap on depth, or a search engine; be explicit that deep paging is expensive.</li>\n</ul>",
        hi: "<ul>\n<li>Offset (<code>Skip(n).Take(m)</code>): simple है और \"page 17 पर जाओ\" allow करता है, पर database फिर भी skip की गई rows के ऊपर से गुज़रता है, और requests के बीच insert या delete से duplicates या gaps आते हैं (puzzle देखो)।</li>\n<li>Keyset (<code>Where(Id &lt; lastId).OrderByDescending(Id).Take(m)</code>): index पर seek करता है; changes में stable। Response में cursor (आख़िरी key) लौटाओ। Unique, indexed sort key चाहिए (non-unique column से sort करते समय tie-breaker के रूप में primary key जोड़ो)।</li>\n<li>Follow-up: \"UI को page numbers और किसी भी column से sorting चाहिए।\" Depth पर cap के साथ offset, या search engine; साफ़ बताओ कि deep paging महँगी है।</li>\n</ul>",
        hg: "<ul>\n<li>Offset (<code>Skip(n).Take(m)</code>): simple hai aur \"page 17 par jao\" allow karta hai, par database phir bhi skip ki gayi rows ke upar se guzarta hai, aur requests ke beech insert ya delete se duplicates ya gaps aate hain (puzzle dekho).</li>\n<li>Keyset (<code>Where(Id &lt; lastId).OrderByDescending(Id).Take(m)</code>): index par seek karta hai; changes mein stable. Response mein cursor (aakhri key) lautao. Unique, indexed sort key chahiye (non-unique column se sort karte samay tie-breaker ke roop mein primary key jodo).</li>\n<li>Follow-up: \"UI ko page numbers aur kisi bhi column se sorting chahiye.\" Depth par cap ke saath offset, ya search engine; saaf batao ki deep paging mehengi hai.</li>\n</ul>"
      }
    },
    {
      id: "profile-production-safely",
      depth: "detailed",
      q: "How do you investigate a performance problem in production without making it worse?",
      answer: "I start with low-overhead metrics and traces, then use dotnet-counters and a sampling dotnet-trace. Memory dumps pause the process and contain secrets, so I take them from one instance out of rotation, with approval.",
      meaning: {
        hi: "मैं low-overhead metrics और traces से शुरू करता हूँ, फिर dotnet-counters और sampling dotnet-trace। Memory dumps process को pause करते हैं और उनमें secrets होते हैं, इसलिए approval के साथ rotation से बाहर एक instance से लेता हूँ।",
        hg: "Main low-overhead metrics aur traces se shuru karta hoon, phir dotnet-counters aur sampling dotnet-trace. Memory dumps process ko pause karte hain aur unmein secrets hote hain, isliye approval ke saath rotation se bahar ek instance se leta hoon."
      },
      explain: {
        en: "<ul>\n<li>Order of intrusiveness: dashboards and traces (OpenTelemetry, Application Insights, Days 16 and 20); <code>dotnet-counters</code> (cheap); sampling <code>dotnet-trace</code> for a short window; a live profiler if your platform offers one; a memory dump last.</li>\n<li>A dump freezes the process while it writes and holds everything in memory: tokens, connection strings, personal data. Treat it as sensitive: restricted storage, short retention, never attach to a ticket.</li>\n<li>Follow-up: \"Production only is slow, staging is fine.\" Look at data size, indexes and statistics, cache state, noisy neighbours, connection limits and feature flags before blaming code.</li>\n</ul>",
        hi: "<ul>\n<li>Intrusiveness का order: dashboards और traces (OpenTelemetry, Application Insights, Days 16 और 20); <code>dotnet-counters</code> (सस्ता); छोटी window के लिए sampling <code>dotnet-trace</code>; तुम्हारा platform दे तो live profiler; memory dump आख़िर में।</li>\n<li>Dump लिखते समय process को freeze करता है और memory की सब चीज़ें रखता है: tokens, connection strings, personal data। उसे sensitive मानो: restricted storage, छोटी retention, ticket पर कभी attach नहीं।</li>\n<li>Follow-up: \"सिर्फ़ production slow है, staging ठीक है।\" Code को दोष देने से पहले data size, indexes और statistics, cache state, noisy neighbours, connection limits और feature flags देखो।</li>\n</ul>",
        hg: "<ul>\n<li>Intrusiveness ka order: dashboards aur traces (OpenTelemetry, Application Insights, Days 16 aur 20); <code>dotnet-counters</code> (sasta); chhoti window ke liye sampling <code>dotnet-trace</code>; tumhara platform de to live profiler; memory dump aakhir mein.</li>\n<li>Dump likhte samay process ko freeze karta hai aur memory ki sab cheezein rakhta hai: tokens, connection strings, personal data. Use sensitive maano: restricted storage, chhoti retention, ticket par kabhi attach nahi.</li>\n<li>Follow-up: \"Sirf production slow hai, staging theek hai.\" Code ko dosh dene se pehle data size, indexes aur statistics, cache state, noisy neighbours, connection limits aur feature flags dekho.</li>\n</ul>"
      }
    },
    {
      id: "performance-budgets-slo",
      depth: "detailed",
      q: "What are performance budgets and SLOs, and how do you use load testing with them?",
      answer: "A budget is a written limit per feature, like p95 under 300 ms; an SLO is the agreed target over time, with an error budget. Production-like load tests check both before release.",
      meaning: {
        hi: "Budget हर feature की लिखी हुई limit है, जैसे p95 300 ms से कम; SLO समय पर agreed target है, error budget के साथ। Production जैसे environment पर load tests release से पहले इन्हें check करते हैं।",
        hg: "Budget har feature ki likhi hui limit hai, jaise p95 300 ms se kam; SLO samay par agreed target hai, error budget ke saath. Production jaise environment par load tests release se pehle inhein check karte hain."
      },
      explain: {
        en: "<ul>\n<li>SLI = what you measure, SLO = target (for example 99% of requests under 300 ms over 30 days), error budget = the allowed 1%. When it is used up, reliability work gets priority over features.</li>\n<li>Load testing tools: k6, Azure Load Testing, NBomber. Use realistic data and a mix of requests, ramp up gradually, watch CPU, GC, thread-pool queue, database waits and connection pools, and never test production or a third party without agreement.</li>\n<li>Follow-up: \"Management wants 100% uptime.\" Explain that each extra nine costs more, agree a realistic SLO from user impact, and use the error budget to decide between features and reliability work.</li>\n</ul>",
        hi: "<ul>\n<li>SLI = जो तुम measure करते हो, SLO = target (जैसे 30 दिन में 99% requests 300 ms से कम), error budget = allowed 1%। यह खत्म हो जाए तो features से पहले reliability काम को priority मिलती है।</li>\n<li>Load testing tools: k6, Azure Load Testing, NBomber। Realistic data और requests का mix use करो, धीरे-धीरे ramp up करो, CPU, GC, thread-pool queue, database waits और connection pools देखो, और production या third party को बिना सहमति के कभी test मत करो।</li>\n<li>Follow-up: \"Management को 100% uptime चाहिए।\" समझाओ कि हर extra nine महँगा है, user impact से realistic SLO agree करो, और features बनाम reliability काम तय करने के लिए error budget use करो।</li>\n</ul>",
        hg: "<ul>\n<li>SLI = jo tum measure karte ho, SLO = target (jaise 30 din mein 99% requests 300 ms se kam), error budget = allowed 1%. Yeh khatam ho jaye to features se pehle reliability kaam ko priority milti hai.</li>\n<li>Load testing tools: k6, Azure Load Testing, NBomber. Realistic data aur requests ka mix use karo, dheere-dheere ramp up karo, CPU, GC, thread-pool queue, database waits aur connection pools dekho, aur production ya third party ko bina sahmati ke kabhi test mat karo.</li>\n<li>Follow-up: \"Management ko 100% uptime chahiye.\" Samjhao ki har extra nine mehenga hai, user impact se realistic SLO agree karo, aur features vs reliability kaam tay karne ke liye error budget use karo.</li>\n</ul>"
      }
    }
  ],
  puzzles: [
    {
      id: "order-by-cannot-be-a-parameter",
      lang: "sql",
      src: "CREATE TABLE dbo.Items (ItemId int PRIMARY KEY, Name varchar(20) NOT NULL, Price int NOT NULL);\nINSERT dbo.Items VALUES (1, 'Tea', 30), (2, 'Samosa', 20), (3, 'Biryani', 150);\nCREATE TABLE dbo.Secrets (Token varchar(20) NOT NULL);\nINSERT dbo.Secrets VALUES ('abc123');\n\n-- the \"sort\" value from a query string: each one asks a yes/no question about dbo.Secrets\nDECLARE @probeA varchar(200) = 'CASE WHEN EXISTS (SELECT 1 FROM dbo.Secrets WHERE Token LIKE ''a%'') THEN Price ELSE ItemId END';\nDECLARE @probeZ varchar(200) = 'CASE WHEN EXISTS (SELECT 1 FROM dbo.Secrets WHERE Token LIKE ''z%'') THEN Price ELSE ItemId END';\nDECLARE @sql nvarchar(400);\n\n-- VULNERABLE - don't do this: the sort text is pasted into ORDER BY (a parameter cannot hold a column name)\nPRINT 'probe a:';\nSET @sql = N'SELECT Name FROM dbo.Items ORDER BY ' + @probeA;\nEXEC (@sql);\nPRINT 'probe z:';\nSET @sql = N'SELECT Name FROM dbo.Items ORDER BY ' + @probeZ;\nEXEC (@sql);\n\n-- FIXED: map the input to a fixed allow-list; anything else gets the default column\nDECLARE @col sysname = CASE @probeA WHEN 'Price' THEN N'Price' WHEN 'Name' THEN N'Name' ELSE N'ItemId' END;\nPRINT 'allow-list:';\nSET @sql = N'SELECT Name FROM dbo.Items ORDER BY ' + QUOTENAME(@col);\nEXEC (@sql);",
      answer: "probe a:\nSamosa\nTea\nBiryani\nprobe z:\nTea\nSamosa\nBiryani\nallow-list:\nTea\nSamosa\nBiryani",
      explain: {
        en: "<p>A parameter can carry a <b>value</b>, but not a column name or an <code>ORDER BY</code> expression, so teams often build that part of the SQL by string. The pasted text is then SQL. Here the attacker's <code>CASE WHEN EXISTS (...)</code> sorts by price when the guess about <code>dbo.Secrets</code> is true (<code>probe a</code>: Samosa, Tea, Biryani) and by id when it is false (<code>probe z</code>: Tea, Samosa, Biryani). The row order leaks one bit per request, with no error and no data in the response. The fix is an <b>allow-list</b>: map the input to a known column (<code>Price</code>, <code>Name</code>) and use the default otherwise; <code>QUOTENAME</code> then quotes the chosen name. In EF Core, do the same with a dictionary of sort keys and <code>OrderBy</code>.</p>",
        hi: "<p>Parameter <b>value</b> ले जा सकता है, column name या <code>ORDER BY</code> expression नहीं, इसलिए teams अक्सर SQL का वो हिस्सा string से बनाती हैं। तब paste किया text SQL बन जाता है। यहाँ attacker का <code>CASE WHEN EXISTS (...)</code> तब price से sort करता है जब <code>dbo.Secrets</code> के बारे में guess सही हो (<code>probe a</code>: Samosa, Tea, Biryani) और गलत हो तो id से (<code>probe z</code>: Tea, Samosa, Biryani)। Rows का order हर request पर एक bit leak करता है, बिना error और बिना response में data के। Fix है <b>allow-list</b>: input को known column (<code>Price</code>, <code>Name</code>) से map करो, वरना default; <code>QUOTENAME</code> चुने हुए नाम को quote कर देता है। EF Core में sort keys की dictionary और <code>OrderBy</code> से यही करो।</p>",
        hg: "<p>Parameter <b>value</b> le ja sakta hai, column name ya <code>ORDER BY</code> expression nahi, isliye teams aksar SQL ka woh hissa string se banati hain. Tab paste kiya text SQL ban jaata hai. Yahan attacker ka <code>CASE WHEN EXISTS (...)</code> tab price se sort karta hai jab <code>dbo.Secrets</code> ke baare mein guess sahi ho (<code>probe a</code>: Samosa, Tea, Biryani) aur galat ho to id se (<code>probe z</code>: Tea, Samosa, Biryani). Rows ka order har request par ek bit leak karta hai, bina error aur bina response mein data ke. Fix hai <b>allow-list</b>: input ko known column (<code>Price</code>, <code>Name</code>) se map karo, warna default; <code>QUOTENAME</code> chune hue naam ko quote kar deta hai. EF Core mein sort keys ki dictionary aur <code>OrderBy</code> se yahi karo.</p>"
      }
    },
    {
      id: "encoder-per-context",
      src: "using System.Text.Encodings.Web;\n\nstring payload = \"</script><b onclick=\\\"x('1')\\\">&\";\nConsole.WriteLine(\"html: \" + HtmlEncoder.Default.Encode(payload));\nConsole.WriteLine(\"js:   \" + JavaScriptEncoder.Default.Encode(payload));\nConsole.WriteLine(\"url:  \" + UrlEncoder.Default.Encode(payload));",
      answer: "html: &lt;/script&gt;&lt;b onclick=&quot;x(&#x27;1&#x27;)&quot;&gt;&amp;\njs:   \\u003C/script\\u003E\\u003Cb onclick=\\u0022x(\\u00271\\u0027)\\u0022\\u003E\\u0026\nurl:  %3C%2Fscript%3E%3Cb%20onclick%3D%22x(%271%27)%22%3E%26",
      explain: {
        en: "<p>The same payload is encoded three different ways because the <b>output context</b> decides which characters are dangerous. In HTML text or attributes, <code>&lt;</code>, <code>&gt;</code>, <code>&amp;</code> and quotes become entities. Inside a JavaScript string they become <code>\\uXXXX</code> escapes. In a URL they become percent-escapes. A string encoded for one context is not safe in another, so Razor encodes for HTML and you must pick <code>JavaScriptEncoder</code> or <code>UrlEncoder</code> yourself when you build those outputs by hand. Encoding is the main defence; a CSP is a second layer.</p>",
        hi: "<p>एक ही payload तीन तरह से encode होता है क्योंकि <b>output context</b> तय करता है कि कौन-से characters dangerous हैं। HTML text या attribute में <code>&lt;</code>, <code>&gt;</code>, <code>&amp;</code> और quotes entities बन जाते हैं। JavaScript string के अंदर वे <code>\\uXXXX</code> escapes बनते हैं। URL में percent-escapes। एक context के लिए encode किया string दूसरे context में safe नहीं होता, इसलिए Razor HTML के लिए encode करता है और जब तुम खुद ये outputs बनाते हो तो <code>JavaScriptEncoder</code> या <code>UrlEncoder</code> खुद चुनना पड़ता है। Encoding main defence है; CSP दूसरी layer है।</p>",
        hg: "<p>Ek hi payload teen tarah se encode hota hai kyunki <b>output context</b> tay karta hai ki kaun-se characters dangerous hain. HTML text ya attribute mein <code>&lt;</code>, <code>&gt;</code>, <code>&amp;</code> aur quotes entities ban jaate hain. JavaScript string ke andar woh <code>\\uXXXX</code> escapes bante hain. URL mein percent-escapes. Ek context ke liye encode kiya string doosre context mein safe nahi hota, isliye Razor HTML ke liye encode karta hai aur jab tum khud ye outputs banate ho to <code>JavaScriptEncoder</code> ya <code>UrlEncoder</code> khud chunna padta hai. Encoding main defence hai; CSP doosri layer hai.</p>"
      }
    },
    {
      id: "password-hasher-results",
      frameworks: [
        "aspnetcore"
      ],
      src: "using Microsoft.AspNetCore.Identity;\nusing Microsoft.Extensions.Options;\n\nvar v3 = new PasswordHasher<string>();\nvar v2 = new PasswordHasher<string>(Options.Create(\n    new PasswordHasherOptions { CompatibilityMode = PasswordHasherCompatibilityMode.IdentityV2 }));\n\nstring h1 = v3.HashPassword(\"asha\", \"Correct-Horse-9\");\nstring h2 = v3.HashPassword(\"asha\", \"Correct-Horse-9\");\nstring old = v2.HashPassword(\"asha\", \"Correct-Horse-9\");\n\nConsole.WriteLine(\"same password, same hash: \" + (h1 == h2));\nConsole.WriteLine(\"right:      \" + v3.VerifyHashedPassword(\"asha\", h1, \"Correct-Horse-9\"));\nConsole.WriteLine(\"wrong case: \" + v3.VerifyHashedPassword(\"asha\", h1, \"correct-horse-9\"));\nConsole.WriteLine(\"old format: \" + v3.VerifyHashedPassword(\"asha\", old, \"Correct-Horse-9\"));",
      answer: "same password, same hash: False\nright:      Success\nwrong case: Failed\nold format: SuccessRehashNeeded",
      explain: {
        en: "<p>Each <code>HashPassword</code> call adds a fresh random salt, so two hashes of the same password differ (<b>False</b>). <code>VerifyHashedPassword</code> returns a <code>PasswordVerificationResult</code>: <b>Success</b> for the right password, <b>Failed</b> for a wrong one (case matters). A hash written in the older IdentityV2 format still verifies but returns <b>SuccessRehashNeeded</b>: the login is valid and you should store a new hash made with <code>HashPassword</code>. Identity's <code>UserManager</code> does this upgrade for you. The hash strings differ on every run, which is why the puzzle prints only comparisons.</p>",
        hi: "<p>हर <code>HashPassword</code> call नया random salt जोड़ता है, इसलिए एक ही password के दो hashes अलग होते हैं (<b>False</b>)। <code>VerifyHashedPassword</code> एक <code>PasswordVerificationResult</code> देता है: सही password पर <b>Success</b>, गलत पर <b>Failed</b> (case matter करता है)। पुराने IdentityV2 format में लिखा hash अब भी verify होता है पर <b>SuccessRehashNeeded</b> आता है: login valid है और तुम्हें <code>HashPassword</code> से बना नया hash store करना चाहिए। Identity का <code>UserManager</code> यह upgrade खुद कर देता है। Hash strings हर run में अलग होती हैं, इसीलिए puzzle सिर्फ़ comparisons print करता है।</p>",
        hg: "<p>Har <code>HashPassword</code> call naya random salt jodta hai, isliye ek hi password ke do hashes alag hote hain (<b>False</b>). <code>VerifyHashedPassword</code> ek <code>PasswordVerificationResult</code> deta hai: sahi password par <b>Success</b>, galat par <b>Failed</b> (case matter karta hai). Purane IdentityV2 format mein likha hash ab bhi verify hota hai par <b>SuccessRehashNeeded</b> aata hai: login valid hai aur tumhein <code>HashPassword</code> se bana naya hash store karna chahiye. Identity ka <code>UserManager</code> yeh upgrade khud kar deta hai. Hash strings har run mein alag hoti hain, isiliye puzzle sirf comparisons print karta hai.</p>"
      }
    },
    {
      id: "fixed-time-hmac-tag",
      src: "using System.Security.Cryptography;\nusing System.Text;\n\nbyte[] key = RandomNumberGenerator.GetBytes(32);\nbyte[] Sign(string msg) => HMACSHA256.HashData(key, Encoding.UTF8.GetBytes(msg));\n\nbyte[] tag = Sign(\"amount=100\");\nConsole.WriteLine(\"same message:  \" + CryptographicOperations.FixedTimeEquals(tag, Sign(\"amount=100\")));\nConsole.WriteLine(\"tampered:      \" + CryptographicOperations.FixedTimeEquals(tag, Sign(\"amount=900\")));\nConsole.WriteLine(\"truncated tag: \" + CryptographicOperations.FixedTimeEquals(tag, tag[..16]));\nConsole.WriteLine(\"tag length:    \" + tag.Length);",
      answer: "same message:  True\ntampered:      False\ntruncated tag: False\ntag length:    32",
      explain: {
        en: "<p>HMAC-SHA256 is deterministic for the same key and message, so the same message gives <b>True</b> and a tampered one gives <b>False</b>. <code>CryptographicOperations.FixedTimeEquals</code> compares in time that depends on the length, not on where the first difference is, so an attacker cannot guess a tag byte by byte from response times. It returns <b>False</b> at once when the lengths differ; the length of a tag is not secret. The tag is 32 bytes (256 bits). <code>SequenceEqual</code> may stop at the first different byte (and <code>==</code> on two byte arrays only compares references), which is why you use <code>FixedTimeEquals</code> for MACs, API keys and tokens.</p>",
        hi: "<p>HMAC-SHA256 same key और message के लिए deterministic है, इसलिए same message पर <b>True</b> और बदले हुए पर <b>False</b>। <code>CryptographicOperations.FixedTimeEquals</code> उस समय में compare करता है जो length पर depend करता है, इस पर नहीं कि पहला फ़र्क कहाँ है, इसलिए attacker response time से tag का एक-एक byte guess नहीं कर सकता। Length अलग हो तो यह तुरंत <b>False</b> देता है; tag की length secret नहीं होती। Tag 32 bytes (256 bits) का है। <code>SequenceEqual</code> पहले अलग byte पर रुक सकता है (और दो byte arrays पर <code>==</code> सिर्फ़ references compare करता है), इसीलिए MACs, API keys और tokens के लिए <code>FixedTimeEquals</code> use करते हैं।</p>",
        hg: "<p>HMAC-SHA256 same key aur message ke liye deterministic hai, isliye same message par <b>True</b> aur badle hue par <b>False</b>. <code>CryptographicOperations.FixedTimeEquals</code> us samay mein compare karta hai jo length par depend karta hai, is par nahi ki pehla farq kahan hai, isliye attacker response time se tag ka ek-ek byte guess nahi kar sakta. Length alag ho to yeh turant <b>False</b> deta hai; tag ki length secret nahi hoti. Tag 32 bytes (256 bits) ka hai. <code>SequenceEqual</code> pehle alag byte par ruk sakta hai (aur do byte arrays par <code>==</code> sirf references compare karta hai), isiliye MACs, API keys aur tokens ke liye <code>FixedTimeEquals</code> use karte hain.</p>"
      }
    },
    {
      id: "path-inside-root",
      src: "string root = Path.GetFullPath(\"uploads\");\n\n// VULNERABLE - don't do this: a prefix match without a directory separator\nbool Naive(string name) => Path.GetFullPath(Path.Combine(root, name)).StartsWith(root);\nbool Safe(string name) =>\n    Path.GetFullPath(Path.Combine(root, name)).StartsWith(root + Path.DirectorySeparatorChar, StringComparison.Ordinal);\n\nforeach (var name in new[] { \"report.pdf\", \"a/../b.txt\", \"../secret.txt\", \"../uploads-private/x.txt\", \"/etc/passwd\" })\n    Console.WriteLine($\"{name,-26} naive={Naive(name)} safe={Safe(name)}\");",
      answer: "report.pdf                 naive=True safe=True\na/../b.txt                 naive=True safe=True\n../secret.txt              naive=False safe=False\n../uploads-private/x.txt   naive=True safe=False\n/etc/passwd                naive=False safe=False",
      explain: {
        en: "<p><code>Path.GetFullPath</code> resolves <code>..</code> segments, so <code>../secret.txt</code> lands outside the root and both checks reject it. <code>a/../b.txt</code> resolves back inside and is fine. The trap is <code>../uploads-private/x.txt</code>: its full path starts with the text of <code>root</code> (<code>.../uploads-private</code> begins with <code>.../uploads</code>), so the naive <code>StartsWith(root)</code> says True. Adding the directory separator makes the check compare whole folder names. A rooted input like <code>/etc/passwd</code> makes <code>Path.Combine</code> drop the root, and the check rejects it. For stored uploads, also generate your own file name instead of using the client's.</p>",
        hi: "<p><code>Path.GetFullPath</code> <code>..</code> segments को resolve करता है, इसलिए <code>../secret.txt</code> root के बाहर जाता है और दोनों checks उसे reject करते हैं। <code>a/../b.txt</code> वापस अंदर resolve होता है और ठीक है। Trap है <code>../uploads-private/x.txt</code>: उसका full path <code>root</code> के text से शुरू होता है (<code>.../uploads-private</code>, <code>.../uploads</code> से शुरू होता है), इसलिए naive <code>StartsWith(root)</code> True कहता है। Directory separator जोड़ने से check पूरे folder names compare करता है। <code>/etc/passwd</code> जैसा rooted input <code>Path.Combine</code> से root हटवा देता है, और check उसे reject करता है। Stored uploads के लिए client का नाम use करने के बजाय अपना file name भी generate करो।</p>",
        hg: "<p><code>Path.GetFullPath</code> <code>..</code> segments ko resolve karta hai, isliye <code>../secret.txt</code> root ke bahar jaata hai aur dono checks use reject karte hain. <code>a/../b.txt</code> wapas andar resolve hota hai aur theek hai. Trap hai <code>../uploads-private/x.txt</code>: uska full path <code>root</code> ke text se shuru hota hai (<code>.../uploads-private</code>, <code>.../uploads</code> se shuru hota hai), isliye naive <code>StartsWith(root)</code> True kehta hai. Directory separator jodne se check poore folder names compare karta hai. <code>/etc/passwd</code> jaisa rooted input <code>Path.Combine</code> se root hatwa deta hai, aur check use reject karta hai. Stored uploads ke liye client ka naam use karne ke bajay apna file name bhi generate karo.</p>"
      }
    },
    {
      id: "url-host-allowlist",
      lang: "javascript",
      src: "const allowed = \"api.partner.example\";\nconst inputs = [\n  \"https://api.partner.example/v1/rates\",\n  \"https://api.partner.example@evil.test/v1/rates\",\n  \"https://api.partner.example.evil.test/v1/rates\",\n  \"http://api.partner.example/v1/rates\",\n];\n// VULNERABLE - don't do this: trusts the text of the URL instead of the parsed host\nconst naive = (s) => s.startsWith(\"https://\" + allowed);\nconst strict = (s) => { const u = new URL(s); return u.protocol === \"https:\" && u.hostname === allowed; };\n\nfor (const s of inputs) console.log(naive(s), strict(s), new URL(s).hostname);",
      answer: "true true api.partner.example\ntrue false evil.test\ntrue false api.partner.example.evil.test\nfalse false api.partner.example",
      explain: {
        en: "<p>Each line prints the naive check, the strict check and the host that a URL parser really sees. The naive <code>startsWith</code> trusts the text, so it also accepts <code>https://api.partner.example@evil.test/...</code> (everything before <code>@</code> is user info; the real host is <code>evil.test</code>) and <code>https://api.partner.example.evil.test/...</code> (a different domain that merely starts with the same words). Parsing first and comparing <code>protocol</code> and <code>hostname</code> exactly accepts only the first URL. The plain-http URL is rejected by both. This is the SSRF allow-list rule: <b>parse, then compare the parsed parts</b>; in .NET use <code>Uri</code> and compare <code>Scheme</code> and <code>Host</code>.</p>",
        hi: "<p>हर line naive check, strict check और वो host print करती है जो URL parser को असल में दिखता है। Naive <code>startsWith</code> text पर भरोसा करता है, इसलिए <code>https://api.partner.example@evil.test/...</code> भी accept करता है (<code>@</code> से पहले सब user info है; असली host <code>evil.test</code> है) और <code>https://api.partner.example.evil.test/...</code> भी (अलग domain जो बस उन्हीं words से शुरू होता है)। पहले parse करके <code>protocol</code> और <code>hostname</code> exactly compare करने से सिर्फ़ पहला URL accept होता है। Plain-http URL दोनों reject करते हैं। यही SSRF allow-list का rule है: <b>parse करो, फिर parsed parts compare करो</b>; .NET में <code>Uri</code> use करो और <code>Scheme</code> और <code>Host</code> compare करो।</p>",
        hg: "<p>Har line naive check, strict check aur woh host print karti hai jo URL parser ko asal mein dikhta hai. Naive <code>startsWith</code> text par bharosa karta hai, isliye <code>https://api.partner.example@evil.test/...</code> bhi accept karta hai (<code>@</code> se pehle sab user info hai; asli host <code>evil.test</code> hai) aur <code>https://api.partner.example.evil.test/...</code> bhi (alag domain jo bas unhi words se shuru hota hai). Pehle parse karke <code>protocol</code> aur <code>hostname</code> exactly compare karne se sirf pehla URL accept hota hai. Plain-http URL dono reject karte hain. Yahi SSRF allow-list ka rule hai: <b>parse karo, phir parsed parts compare karo</b>; .NET mein <code>Uri</code> use karo aur <code>Scheme</code> aur <code>Host</code> compare karo.</p>"
      }
    },
    {
      id: "offset-vs-keyset-page",
      src: "var items = new List<int> { 50, 40, 30, 20, 10 };   // ids, newest first\n\nvar page1 = items.Take(2).ToList();\nint lastSeen = page1[^1];\nitems.Insert(0, 60);                                    // a new row arrives between the two page requests\n\nvar offsetPage2 = items.Skip(2).Take(2).ToList();\nvar keysetPage2 = items.Where(i => i < lastSeen).Take(2).ToList();\n\nConsole.WriteLine(\"page 1:        \" + string.Join(\",\", page1));\nConsole.WriteLine(\"offset page 2: \" + string.Join(\",\", offsetPage2));\nConsole.WriteLine(\"keyset page 2: \" + string.Join(\",\", keysetPage2));",
      answer: "page 1:        50,40\noffset page 2: 40,30\nkeyset page 2: 30,20",
      explain: {
        en: "<p>Page 1 shows 50 and 40. A new row (60) arrives at the top before the user asks for page 2. Offset paging (<code>Skip(2)</code>) now skips 60 and 50, so page 2 starts with <b>40 again</b>: a duplicate, and if a row had been deleted instead, one row would be skipped. Keyset paging remembers the last id seen (40) and asks for ids below it, so page 2 is 30, 20 with no duplicate. It is also faster on big tables because the database seeks an index instead of counting past an offset. The trade-off: keyset needs a stable, unique sort key and cannot jump straight to \"page 17\".</p>",
        hi: "<p>Page 1 में 50 और 40 दिखते हैं। User के page 2 माँगने से पहले ऊपर एक नई row (60) आ जाती है। Offset paging (<code>Skip(2)</code>) अब 60 और 50 skip करती है, इसलिए page 2 <b>फिर से 40</b> से शुरू होता है: duplicate, और अगर row delete हुई होती तो एक row छूट जाती। Keyset paging आख़िरी देखा गया id (40) याद रखती है और उससे छोटे ids माँगती है, इसलिए page 2 = 30, 20, बिना duplicate। Big tables पर यह तेज़ भी है क्योंकि database offset तक गिनने के बजाय index पर seek करता है। Trade-off: keyset को stable, unique sort key चाहिए और सीधे \"page 17\" पर नहीं कूद सकते।</p>",
        hg: "<p>Page 1 mein 50 aur 40 dikhte hain. User ke page 2 maangne se pehle upar ek nayi row (60) aa jaati hai. Offset paging (<code>Skip(2)</code>) ab 60 aur 50 skip karti hai, isliye page 2 <b>phir se 40</b> se shuru hota hai: duplicate, aur agar row delete hui hoti to ek row chhoot jaati. Keyset paging aakhri dekha gaya id (40) yaad rakhti hai aur usse chhote ids maangti hai, isliye page 2 = 30, 20, bina duplicate. Big tables par yeh tez bhi hai kyunki database offset tak ginne ke bajay index par seek karta hai. Trade-off: keyset ko stable, unique sort key chahiye aur seedhe \"page 17\" par nahi kood sakte.</p>"
      }
    }
  ],
  revision: {
    en: [
      "<b>OWASP Top 10 (2025)</b> is a checklist: for each item know one CRM example and one .NET answer (2021 is the older list).",
      "<b>IDOR</b>: logged in is not enough; check ownership of every object, take the caller from claims, deny by default.",
      "<b>SQL injection</b>: fixed SQL text plus parameters (<code>FromSql</code>); column names come from an allow-list.",
      "<b>XSS</b>: encode output for its context (<code>HtmlEncoder</code>); avoid <code>Html.Raw</code>; encode at output, not before saving.",
      "<b>Passwords</b>: slow, salted hash (PBKDF2 or Identity); compare secrets with <code>FixedTimeEquals</code>.",
      "<b>STRIDE</b>: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege; score, owner, ticket.",
      "<b>Measure first</b>: pick a number, set a budget, change one thing, measure again; count operations in tests.",
      "<b>Cache</b>: key holds everything that changes the answer, every entry expires, evict when data changes.",
      "Block SSRF with a parsed-host allow-list, https only, and a check for private addresses after DNS resolution.",
      "Supply chain: NuGet Audit warns on restore; agree which severity fails the build and automate updates.",
      "Thread-pool starvation means blocked threads and low CPU; the fix is async all the way, not more threads."
    ],
    meaning: {
      hi: [
        "OWASP Top 10 (2025) checklist है: हर item के लिए एक CRM मिसाल और एक .NET जवाब आना चाहिए (2021 पुरानी list है)",
        "IDOR: logged in काफ़ी नहीं; हर object की ownership जाँचो, caller को claims से लो, default में मना करो",
        "SQL injection: तय SQL text और parameters (FromSql); column के नाम allow-list से आते हैं",
        "XSS: context के हिसाब से output encode करो (HtmlEncoder); Html.Raw से बचो; सेव करने से पहले नहीं, output पर encode करो",
        "Passwords: slow, salted hash (PBKDF2 या Identity); secrets को FixedTimeEquals से compare करो",
        "STRIDE: छह सवाल: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege; score, owner, ticket",
        "पहले नापो: एक संख्या चुनो, budget तय करो, एक चीज़ बदलो, फिर नापो; tests में operations गिनो",
        "Cache: key में वह सब जिससे जवाब बदलता है, हर entry expire होती है, data बदलने पर evict करो",
        "SSRF को parsed-host allow-list, सिर्फ़ https, और DNS resolution के बाद private addresses के check से रोको।",
        "Supply chain: NuGet Audit restore पर warn करता है; तय करो कौन-सी severity build fail करे और updates automate करो।",
        "Thread-pool starvation का मतलब blocked threads और कम CPU; इलाज async all the way है, ज़्यादा threads नहीं।"
      ],
      hg: [
        "OWASP Top 10 (2025) checklist hai: har item ke liye ek CRM misaal aur ek .NET jawaab aana chahiye (2021 purani list hai)",
        "IDOR: logged in kaafi nahi; har object ki ownership jaancho, caller ko claims se lo, default mein mana karo",
        "SQL injection: tay SQL text aur parameters (FromSql); column ke naam allow-list se aate hain",
        "XSS: context ke hisaab se output encode karo (HtmlEncoder); Html.Raw se bacho; save karne se pehle nahi, output par encode karo",
        "Passwords: slow, salted hash (PBKDF2 ya Identity); secrets ko FixedTimeEquals se compare karo",
        "STRIDE: chhah sawaal: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege; score, owner, ticket",
        "Pehle naapo: ek sankhya chuno, budget tay karo, ek cheez badlo, phir naapo; tests mein operations gino",
        "Cache: key mein woh sab jisse jawaab badalta hai, har entry expire hoti hai, data badalne par evict karo",
        "SSRF ko parsed-host allow-list, sirf https, aur DNS resolution ke baad private addresses ke check se roko.",
        "Supply chain: NuGet Audit restore par warn karta hai; tay karo kaun-si severity build fail kare aur updates automate karo.",
        "Thread-pool starvation ka matlab blocked threads aur kam CPU; ilaaj async all the way hai, zyada threads nahi."
      ]
    }
  }
};
