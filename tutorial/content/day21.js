// Day 21 — DevOps for .NET Tech Leads. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 21,
  title: {
    en: "DevOps for .NET Tech Leads — Git workflow, branching, pull requests, Azure Pipelines YAML, Docker, CI/CD",
    hi: "DevOps — .NET Tech Leads के लिए: Git workflow, branching, pull requests, Azure Pipelines YAML, Docker, CI/CD",
    hg: "DevOps — .NET Tech Leads ke liye: Git workflow, branching, pull requests, Azure Pipelines YAML, Docker, CI/CD"
  },
  summary: {
    en: `<p>DevOps is a 2/10 topic for you, and that is fine: a Tech Lead is asked "<b>how does code travel from a laptop to production safely, and how do you keep the team fast?</b>" Today you learn that road from the ground up: Git, branches, pull requests, pipelines, containers.</p>
<ul>
<li><b>Git:</b> history is a graph of commits. <b>Merge</b> keeps the true history; <b>rebase</b> rewrites it into a straight line. Golden rule: do not rebase commits that others already pulled. <b>Revert</b> adds an undo commit (safe on shared branches); <b>reset</b> moves a branch pointer (rewrites). <b>Reflog</b> is the safety net.</li>
<li><b>Branching:</b> trunk-based development (short-lived branches, merge to main often, unfinished work hidden behind feature flags) suits teams that deploy often; GitFlow suits scheduled, versioned releases; GitHub flow is the simple middle.</li>
<li><b>Pull requests:</b> small PRs, required reviewers, a build that must pass, <code>CODEOWNERS</code>. As a TL you review for correctness, design, tests and risk, and you keep the tone kind and specific.</li>
<li><b>Azure Pipelines YAML:</b> a pipeline has stages, a stage has jobs, a job has steps. Jobs run on agents (Microsoft-hosted or self-hosted). Use variable groups (linked to Key Vault for secrets, Day 20), templates for reuse, and environments with approvals for deployments.</li>
<li><b>Docker:</b> an image is a read-only package; a container is a running copy. Layers are cached, so order instructions from least to most changing. Use a multi-stage Dockerfile (SDK image to build, ASP.NET runtime image to run), a <code>.dockerignore</code>, and a non-root user.</li>
<li><b>CI/CD principles:</b> build once, deploy the same artifact to every environment, keep config outside the artifact, version with SemVer, apply database changes with idempotent scripts or bundles (Day 5), and have a rollback plan. DORA metrics tell you whether the system is improving.</li>
</ul>
<p>Plan (about 20 minutes for Short plus about 2 hours for Detailed): Short mode, then Q&amp;A aloud, then the code sections (YAML, Dockerfile and bash are display-only; the C# one compiles), then the six puzzles, which run offline.</p>`,
    hi: `<p>DevOps तुम्हारे लिए 2/10 वाला topic है, और यह ठीक है: Tech Lead से पूछा जाता है "<b>code laptop से production तक safely कैसे पहुँचता है, और team को fast कैसे रखते हो?</b>" आज तुम यह रास्ता ground से सीखोगे: Git, branches, pull requests, pipelines, containers।</p>
<ul>
<li><b>Git:</b> history commits का एक graph है। <b>Merge</b> सच्ची history रखता है; <b>rebase</b> उसे सीधी line में rewrite करता है। Golden rule: जिन commits को दूसरे pull कर चुके हैं उन्हें rebase मत करो। <b>Revert</b> एक undo commit जोड़ता है (shared branches पर safe); <b>reset</b> branch pointer हिलाता है (history rewrite)। <b>Reflog</b> safety net है।</li>
<li><b>Branching:</b> trunk-based development (छोटी-सी उम्र वाली branches, main में बार-बार merge, अधूरा काम feature flags के पीछे) उन teams के लिए जो अक्सर deploy करती हैं; GitFlow scheduled, versioned releases के लिए; GitHub flow simple बीच का रास्ता है।</li>
<li><b>Pull requests:</b> छोटे PRs, required reviewers, ऐसा build जो pass होना ज़रूरी है, <code>CODEOWNERS</code>। TL के तौर पर तुम correctness, design, tests और risk देखते हो, और tone kind और specific रखते हो।</li>
<li><b>Azure Pipelines YAML:</b> pipeline में stages, stage में jobs, job में steps। Jobs agents पर चलते हैं (Microsoft-hosted या self-hosted)। Variable groups (secrets के लिए Key Vault से linked, Day 20), reuse के लिए templates, और deployments के लिए approvals वाले environments।</li>
<li><b>Docker:</b> image एक read-only package है; container उसकी चलती हुई copy। Layers cache होती हैं, इसलिए instructions को कम बदलने वाले से ज़्यादा बदलने वाले के order में रखो। Multi-stage Dockerfile (build के लिए SDK image, चलाने के लिए ASP.NET runtime image), <code>.dockerignore</code>, और non-root user।</li>
<li><b>CI/CD principles:</b> एक बार build करो, हर environment में वही artifact deploy करो, config artifact के बाहर रखो, SemVer से version दो, database changes idempotent scripts या bundles से लगाओ (Day 5), और rollback plan रखो। DORA metrics बताते हैं कि system बेहतर हो रहा है या नहीं।</li>
</ul>
<p>Plan (Short लगभग 20 मिनट, Detailed लगभग 2 घंटे अलग से): पहले Short mode, फिर Q&amp;A ज़ोर से, फिर code sections (YAML, Dockerfile और bash सिर्फ़ दिखाने के लिए हैं; C# वाला compile होता है), फिर छह puzzles जो offline चलते हैं।</p>`,
    hg: `<p>DevOps tumhare liye 2/10 wala topic hai, aur yeh theek hai: Tech Lead se poocha jaata hai "<b>code laptop se production tak safely kaise pahunchta hai, aur team ko fast kaise rakhte ho?</b>" Aaj tum yeh raasta ground se seekhoge: Git, branches, pull requests, pipelines, containers.</p>
<ul>
<li><b>Git:</b> history commits ka ek graph hai. <b>Merge</b> sachchi history rakhta hai; <b>rebase</b> use seedhi line mein rewrite karta hai. Golden rule: jin commits ko dusre pull kar chuke hain unhe rebase mat karo. <b>Revert</b> ek undo commit jodta hai (shared branches par safe); <b>reset</b> branch pointer hilata hai (history rewrite). <b>Reflog</b> safety net hai.</li>
<li><b>Branching:</b> trunk-based development (chhoti umar wali branches, main mein baar-baar merge, adhoora kaam feature flags ke peeche) un teams ke liye jo aksar deploy karti hain; GitFlow scheduled, versioned releases ke liye; GitHub flow simple beech ka raasta hai.</li>
<li><b>Pull requests:</b> chhote PRs, required reviewers, aisa build jo pass hona zaroori hai, <code>CODEOWNERS</code>. TL ke taur par tum correctness, design, tests aur risk dekhte ho, aur tone kind aur specific rakhte ho.</li>
<li><b>Azure Pipelines YAML:</b> pipeline mein stages, stage mein jobs, job mein steps. Jobs agents par chalte hain (Microsoft-hosted ya self-hosted). Variable groups (secrets ke liye Key Vault se linked, Day 20), reuse ke liye templates, aur deployments ke liye approvals wale environments.</li>
<li><b>Docker:</b> image ek read-only package hai; container uski chalti hui copy. Layers cache hoti hain, isliye instructions ko kam badalne wale se zyada badalne wale ke order mein rakho. Multi-stage Dockerfile (build ke liye SDK image, chalane ke liye ASP.NET runtime image), <code>.dockerignore</code>, aur non-root user.</li>
<li><b>CI/CD principles:</b> ek baar build karo, har environment mein wahi artifact deploy karo, config artifact ke bahar rakho, SemVer se version do, database changes idempotent scripts ya bundles se lagao (Day 5), aur rollback plan rakho. DORA metrics batate hain ki system behtar ho raha hai ya nahi.</li>
</ul>
<p>Plan (Short lagbhag 20 minute, Detailed lagbhag 2 ghante alag se): pehle Short mode, phir Q&amp;A zor se, phir code sections (YAML, Dockerfile aur bash sirf dikhane ke liye hain; C# wala compile hota hai), phir chhe puzzles jo offline chalte hain.</p>`
  },
  sections: [
    {
      id: "git-fundamentals-overview",
      depth: "short",
      title: {
        en: "Git fundamentals a TL is asked: merge vs rebase, revert vs reset, reflog",
        hi: "Git fundamentals जो TL से पूछे जाते हैं: merge बनाम rebase, revert बनाम reset, reflog",
        hg: "Git fundamentals jo TL se poochhe jaate hain: merge vs rebase, revert vs reset, reflog"
      },
      body: {
        en: `<p><b>Picture — a family photo album with page numbers:</b> every commit is a page that remembers the page before it. A <b>branch</b> is just a sticky note pointing at one page. Moving the sticky note is cheap; that is why Git branches are cheap.</p>
<ul>
<li><b>Commit, branch, merge:</b> a commit is a snapshot plus a parent link. Merging branch B into A joins two lines of history. If A has not moved since B started, Git can just slide A's pointer forward: a <b>fast-forward</b>, no new commit.</li>
<li><b>Three ways to land a branch:</b> <b>fast-forward</b> (straight line, no merge commit), <b>merge commit</b> (<code>--no-ff</code>; history shows the branch and a merge point), <b>squash</b> (all branch commits become one new commit on main; the branch's own commits are not in main's history).</li>
<li><b>Merge vs rebase:</b> merge keeps what really happened. <b>Rebase</b> replays your commits on top of another branch, creating new commits with new ids, so history looks linear. <b>Golden rule:</b> do not rebase commits that other people already pulled; rebase only your own local or private branch.</li>
<li><b>Interactive rebase</b> (<code>git rebase -i</code>) lets you squash, reorder, reword or drop your own commits before the PR. It rewrites history, so same rule.</li>
<li><b>Cherry-pick</b> copies one commit onto the current branch (new commit id). Typical use: a hotfix from main to a release branch.</li>
<li><b>Revert vs reset:</b> <code>git revert</code> creates a new commit that undoes an old one; history is kept, so it is safe on shared branches. <code>git reset</code> moves the branch pointer (and with <code>--hard</code> also your files), which rewrites history; use it on local work only.</li>
<li><b>Reflog:</b> a local journal of where <code>HEAD</code> and branches pointed. After a bad reset or rebase, <code>git reflog</code> shows the old commit id and you can get it back. It is local and entries expire eventually (default roughly 90 days for reachable, 30 for unreachable ones).</li>
</ul>
<p><b>When to use / when not:</b> rebase your own feature branch to tidy it, then merge or squash into main. Do not rebase or force-push a shared branch (main, release, a branch someone else works on); use revert there. Squash is neat for tiny PRs but loses the step-by-step commits, so use it when those steps do not matter.</p>`,
        hi: `<p><b>Picture — page numbers वाली family photo album:</b> हर commit एक page है जो अपने पिछले page को याद रखता है। <b>Branch</b> बस एक sticky note है जो एक page की तरफ़ इशारा करता है। Sticky note हिलाना सस्ता है; इसीलिए Git branches सस्ती हैं।</p>
<ul>
<li><b>Commit, branch, merge:</b> commit एक snapshot plus parent link है। Branch B को A में merge करने से history की दो lines जुड़ती हैं। अगर B शुरू होने के बाद A आगे नहीं बढ़ा, तो Git बस A का pointer आगे सरका सकता है: <b>fast-forward</b>, नया commit नहीं।</li>
<li><b>Branch land करने के तीन तरीके:</b> <b>fast-forward</b> (सीधी line, merge commit नहीं), <b>merge commit</b> (<code>--no-ff</code>; history में branch और merge point दिखता है), <b>squash</b> (branch के सारे commits main पर एक नया commit बन जाते हैं; branch के अपने commits main की history में नहीं होते)।</li>
<li><b>Merge बनाम rebase:</b> merge वही रखता है जो सच में हुआ। <b>Rebase</b> तुम्हारे commits को दूसरी branch के ऊपर replay करता है, नए ids वाले नए commits बनते हैं, इसलिए history linear दिखती है। <b>Golden rule:</b> जिन commits को दूसरे लोग pull कर चुके हैं उन्हें rebase मत करो; सिर्फ़ अपनी local या private branch rebase करो।</li>
<li><b>Interactive rebase</b> (<code>git rebase -i</code>) से तुम PR से पहले अपने commits squash, reorder, reword या drop कर सकते हो। यह history rewrite करता है, इसलिए वही rule।</li>
<li><b>Cherry-pick</b> एक commit को current branch पर copy करता है (नया commit id)। आम use: main से release branch पर hotfix।</li>
<li><b>Revert बनाम reset:</b> <code>git revert</code> एक नया commit बनाता है जो पुराने को undo करता है; history बनी रहती है, इसलिए shared branches पर safe है। <code>git reset</code> branch pointer हिलाता है (<code>--hard</code> के साथ files भी), यानी history rewrite; सिर्फ़ local काम पर use करो।</li>
<li><b>Reflog:</b> local journal कि <code>HEAD</code> और branches कहाँ इशारा करते थे। खराब reset या rebase के बाद <code>git reflog</code> पुराना commit id दिखाता है और तुम उसे वापस ला सकते हो। यह local है और entries आख़िर में expire हो जाती हैं (default लगभग 90 दिन reachable के लिए, 30 unreachable के लिए)।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> अपनी feature branch को साफ़ करने के लिए rebase करो, फिर main में merge या squash करो। Shared branch (main, release, जिस पर कोई और काम कर रहा है) को rebase या force-push मत करो; वहाँ revert use करो। Squash छोटे PRs के लिए neat है पर step-by-step commits खो देता है, इसलिए तभी जब वे steps मायने नहीं रखते।</p>`,
        hg: `<p><b>Picture — page numbers wali family photo album:</b> har commit ek page hai jo apne pichhle page ko yaad rakhta hai. <b>Branch</b> bas ek sticky note hai jo ek page ki taraf ishara karta hai. Sticky note hilana sasta hai; isiliye Git branches sasti hain.</p>
<ul>
<li><b>Commit, branch, merge:</b> commit ek snapshot plus parent link hai. Branch B ko A mein merge karne se history ki do lines judti hain. Agar B shuru hone ke baad A aage nahi badha, to Git bas A ka pointer aage sarka sakta hai: <b>fast-forward</b>, naya commit nahi.</li>
<li><b>Branch land karne ke teen tareeke:</b> <b>fast-forward</b> (seedhi line, merge commit nahi), <b>merge commit</b> (<code>--no-ff</code>; history mein branch aur merge point dikhta hai), <b>squash</b> (branch ke saare commits main par ek naya commit ban jaate hain; branch ke apne commits main ki history mein nahi hote).</li>
<li><b>Merge vs rebase:</b> merge wahi rakhta hai jo sach mein hua. <b>Rebase</b> tumhare commits ko dusri branch ke upar replay karta hai, naye ids wale naye commits bante hain, isliye history linear dikhti hai. <b>Golden rule:</b> jin commits ko dusre log pull kar chuke hain unhe rebase mat karo; sirf apni local ya private branch rebase karo.</li>
<li><b>Interactive rebase</b> (<code>git rebase -i</code>) se tum PR se pehle apne commits squash, reorder, reword ya drop kar sakte ho. Yeh history rewrite karta hai, isliye wahi rule.</li>
<li><b>Cherry-pick</b> ek commit ko current branch par copy karta hai (naya commit id). Aam use: main se release branch par hotfix.</li>
<li><b>Revert vs reset:</b> <code>git revert</code> ek naya commit banata hai jo purane ko undo karta hai; history bani rehti hai, isliye shared branches par safe hai. <code>git reset</code> branch pointer hilata hai (<code>--hard</code> ke saath files bhi), yaani history rewrite; sirf local kaam par use karo.</li>
<li><b>Reflog:</b> local journal ki <code>HEAD</code> aur branches kahan ishara karte the. Kharab reset ya rebase ke baad <code>git reflog</code> purana commit id dikhata hai aur tum use wapas la sakte ho. Yeh local hai aur entries aakhir mein expire ho jaati hain (default lagbhag 90 din reachable ke liye, 30 unreachable ke liye).</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> apni feature branch ko saaf karne ke liye rebase karo, phir main mein merge ya squash karo. Shared branch (main, release, jis par koi aur kaam kar raha hai) ko rebase ya force-push mat karo; wahan revert use karo. Squash chhote PRs ke liye neat hai par step-by-step commits kho deta hai, isliye tabhi jab woh steps matter nahi karte.</p>`
      }
    },
    {
      id: "branching-and-pr-overview",
      depth: "short",
      title: {
        en: "Branching strategies and the pull request flow",
        hi: "Branching strategies और pull request flow",
        hg: "Branching strategies aur pull request flow"
      },
      body: {
        en: `<p><b>Picture — a railway timetable vs a local bus:</b> <b>GitFlow</b> is the scheduled express: it leaves on fixed dates, with its own platform (release branch). <b>Trunk-based</b> is the local bus that runs every few minutes: small hops, always on the main road.</p>
<ul>
<li><b>Trunk-based development:</b> everyone merges to <code>main</code> (the trunk) often, with branches that live hours or a day or two. Unfinished work is hidden behind <b>feature flags</b>. Needs fast automated tests and a reliable pipeline. It fits continuous delivery and is the style DORA research associates with high performance.</li>
<li><b>GitFlow:</b> long-lived <code>main</code> and <code>develop</code>, plus feature, release and hotfix branches. It suits products with scheduled, versioned releases or several supported versions (installed software, mobile apps, libraries). The cost: big merges, slow feedback, more ceremony.</li>
<li><b>GitHub flow:</b> <code>main</code> is always deployable; every change is a short branch with a PR, merged and deployed. Simple, popular for web apps. Trunk-based with short branches is close to it.</li>
<li><b>Release branches</b> still appear in trunk-based teams when they must patch an old version: cut a branch from main at release time, then cherry-pick fixes.</li>
<li><b>PR flow:</b> branch, commit small, push, open a PR, automated build and tests run, reviewers comment, you fix, approvals, merge. <b>Branch policies</b> (Azure Repos) or <b>branch protection</b> (GitHub) can require a minimum number of reviewers, a passing build, linked work items or resolved comments, and block direct pushes to main. <code>CODEOWNERS</code> (GitHub; Azure Repos has a similar reviewer-by-path setting) auto-requests the right reviewers.</li>
<li><b>TL review angle:</b> keep PRs small (a few hundred changed lines is easier to review than thousands). Look for correctness and edge cases, design fit, tests, security, performance and rollout risk; style is the linter's job. Comment on the code, not the person; ask questions ("what happens if this is null?"), explain why, separate must-fix from nice-to-have, and say what is good too.</li>
</ul>
<p><b>When to use / when not:</b> choose by release cadence and team maturity: frequent deploys and good tests lean to trunk-based or GitHub flow; scheduled versioned releases lean to GitFlow or release branches. Do not adopt trunk-based without tests and feature flags (you will break main), and do not adopt GitFlow just because it is famous.</p>`,
        hi: `<p><b>Picture — railway timetable बनाम local bus:</b> <b>GitFlow</b> scheduled express है: fixed dates पर निकलती है, अपने platform (release branch) के साथ। <b>Trunk-based</b> local bus है जो हर कुछ मिनट में चलती है: छोटे hops, हमेशा main सड़क पर।</p>
<ul>
<li><b>Trunk-based development:</b> सब लोग <code>main</code> (trunk) में बार-बार merge करते हैं, branches कुछ घंटे या एक-दो दिन जीती हैं। अधूरा काम <b>feature flags</b> के पीछे छिपा रहता है। इसके लिए fast automated tests और भरोसेमंद pipeline चाहिए। यह continuous delivery में फिट होता है और DORA research इसी style को high performance से जोड़ती है।</li>
<li><b>GitFlow:</b> लंबी उम्र वाली <code>main</code> और <code>develop</code>, plus feature, release और hotfix branches। यह scheduled, versioned releases या कई supported versions वाले products के लिए है (installed software, mobile apps, libraries)। कीमत: बड़े merges, धीमा feedback, ज़्यादा ceremony।</li>
<li><b>GitHub flow:</b> <code>main</code> हमेशा deployable; हर बदलाव PR वाली छोटी branch है, merge और deploy। Simple, web apps में popular। छोटी branches वाला trunk-based इसके करीब है।</li>
<li><b>Release branches</b> trunk-based teams में भी आती हैं जब पुराने version को patch करना हो: release के समय main से branch काटो, फिर fixes cherry-pick करो।</li>
<li><b>PR flow:</b> branch, छोटे commits, push, PR खोलो, automated build और tests चलते हैं, reviewers comment करते हैं, तुम fix करते हो, approvals, merge। <b>Branch policies</b> (Azure Repos) या <b>branch protection</b> (GitHub) minimum reviewers, passing build, linked work items या resolved comments माँग सकती हैं और main पर direct push रोक सकती हैं। <code>CODEOWNERS</code> (GitHub; Azure Repos में path के हिसाब से reviewer वाली similar setting है) सही reviewers को खुद request करता है।</li>
<li><b>TL review angle:</b> PRs छोटे रखो (कुछ सौ changed lines हज़ारों से आसानी से review होती हैं)। correctness और edge cases, design fit, tests, security, performance और rollout risk देखो; style linter का काम है। Code पर comment करो, इंसान पर नहीं; सवाल पूछो ("यह null हो तो क्या होगा?"), why समझाओ, must-fix और nice-to-have अलग करो, और जो अच्छा है वह भी बोलो।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> release cadence और team maturity से चुनो: बार-बार deploy और अच्छे tests हों तो trunk-based या GitHub flow; scheduled versioned releases हों तो GitFlow या release branches। Tests और feature flags के बिना trunk-based मत अपनाओ (main टूटेगी), और GitFlow सिर्फ़ इसलिए मत अपनाओ कि वह famous है।</p>`,
        hg: `<p><b>Picture — railway timetable vs local bus:</b> <b>GitFlow</b> scheduled express hai: fixed dates par nikalti hai, apne platform (release branch) ke saath. <b>Trunk-based</b> local bus hai jo har kuch minute mein chalti hai: chhote hops, hamesha main sadak par.</p>
<ul>
<li><b>Trunk-based development:</b> sab log <code>main</code> (trunk) mein baar-baar merge karte hain, branches kuch ghante ya ek-do din jeeti hain. Adhoora kaam <b>feature flags</b> ke peeche chhupa rehta hai. Iske liye fast automated tests aur bharosemand pipeline chahiye. Yeh continuous delivery mein fit hota hai aur DORA research isi style ko high performance se jodti hai.</li>
<li><b>GitFlow:</b> lambi umar wali <code>main</code> aur <code>develop</code>, plus feature, release aur hotfix branches. Yeh scheduled, versioned releases ya kai supported versions wale products ke liye hai (installed software, mobile apps, libraries). Keemat: bade merges, dheema feedback, zyada ceremony.</li>
<li><b>GitHub flow:</b> <code>main</code> hamesha deployable; har badlaav PR wali chhoti branch hai, merge aur deploy. Simple, web apps mein popular. Chhoti branches wala trunk-based iske kareeb hai.</li>
<li><b>Release branches</b> trunk-based teams mein bhi aati hain jab purane version ko patch karna ho: release ke samay main se branch kaato, phir fixes cherry-pick karo.</li>
<li><b>PR flow:</b> branch, chhote commits, push, PR kholo, automated build aur tests chalte hain, reviewers comment karte hain, tum fix karte ho, approvals, merge. <b>Branch policies</b> (Azure Repos) ya <b>branch protection</b> (GitHub) minimum reviewers, passing build, linked work items ya resolved comments maang sakti hain aur main par direct push rok sakti hain. <code>CODEOWNERS</code> (GitHub; Azure Repos mein path ke hisaab se reviewer wali similar setting hai) sahi reviewers ko khud request karta hai.</li>
<li><b>TL review angle:</b> PRs chhote rakho (kuch sau changed lines hazaron se aasaani se review hoti hain). Correctness aur edge cases, design fit, tests, security, performance aur rollout risk dekho; style linter ka kaam hai. Code par comment karo, insaan par nahi; sawaal poocho ("yeh null ho to kya hoga?"), why samjhao, must-fix aur nice-to-have alag karo, aur jo achha hai woh bhi bolo.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> release cadence aur team maturity se chuno: baar-baar deploy aur achhe tests hon to trunk-based ya GitHub flow; scheduled versioned releases hon to GitFlow ya release branches. Tests aur feature flags ke bina trunk-based mat apnao (main tootegi), aur GitFlow sirf isliye mat apnao ki woh famous hai.</p>`
      }
    },
    {
      id: "pipelines-docker-cicd-overview",
      depth: "short",
      title: {
        en: "Pipelines, Docker and CI/CD principles in one map",
        hi: "Pipelines, Docker और CI/CD principles एक map में",
        hg: "Pipelines, Docker aur CI/CD principles ek map mein"
      },
      body: {
        en: `<p><b>Picture — a tiffin service:</b> the kitchen cooks once (<b>build</b>), packs the tiffin in a sealed box (<b>artifact or image</b>), and the same box is delivered to every office (<b>dev, test, prod</b>). Only the pickle on the side changes per customer (<b>configuration</b>). You never re-cook at the customer's door.</p>
<ul>
<li><b>CI</b> (continuous integration): every push or PR builds and tests the code. <b>CD</b>: continuous <i>delivery</i> keeps every build releasable (a person approves the release); continuous <i>deployment</i> releases automatically after the checks pass.</li>
<li><b>Azure Pipelines YAML:</b> <code>trigger</code> (CI on pushes) starts it. For PR validation, <code>pr</code> in YAML works for GitHub and Bitbucket repos; for Azure Repos Git you add a <b>Build validation</b> branch policy instead. A pipeline has <b>stages</b> (Build, Test, Deploy), a stage has <b>jobs</b>, a job has <b>steps</b> (script or task). A job runs on an <b>agent</b> from a <b>pool</b>: Microsoft-hosted (fresh VM per job, you maintain nothing) or self-hosted (your machines, private network access, you patch them).</li>
<li><b>Variables and secrets:</b> plain variables in YAML, <b>variable groups</b> in the Library, and groups <b>linked to Key Vault</b> for secrets (Day 20). Secret variables are masked in logs. Pass them to scripts explicitly (for example through <code>env:</code>).</li>
<li><b>Templates and environments:</b> step, job and stage <b>templates</b> remove copy-paste; an <code>extends</code> template can force a company-approved structure. An <b>environment</b> (dev, test, prod) is a deployment target that records history and can require <b>approvals and checks</b> before a deployment job runs. Deployment strategies: <b>runOnce</b>, <b>rolling</b> (VM targets), <b>canary</b>.</li>
<li><b>GitHub Actions</b> is the same idea: workflow file in <code>.github/workflows</code>, <code>on:</code> triggers, jobs with <code>runs-on</code>, steps with <code>uses</code> or <code>run</code>, environments with required reviewers, secrets in repo or environment settings.</li>
<li><b>Docker:</b> an <b>image</b> is the sealed box (layers); a <b>container</b> is one running copy. Build with a multi-stage Dockerfile and run as non-root. The same image goes to every environment.</li>
<li><b>Principles:</b> build once, deploy many; config outside the artifact; SemVer for releases; deploy by the pipeline only; database changes by idempotent script or bundle (Day 5); keep a rollback (previous artifact, slot swap back, Day 20); and measure with <b>DORA</b> metrics.</li>
</ul>
<p><b>When to use / when not:</b> automate everything repeatable that touches production. Do not add stages and approvals nobody needs: every gate slows lead time, so keep a gate only where it protects something real (prod approval, security scan).</p>`,
        hi: `<p><b>Picture — tiffin service:</b> kitchen एक बार पकाती है (<b>build</b>), tiffin को sealed डिब्बे में पैक करती है (<b>artifact या image</b>), और वही डिब्बा हर office में जाता है (<b>dev, test, prod</b>)। हर customer के लिए बस बगल का अचार बदलता है (<b>configuration</b>)। Customer के दरवाज़े पर दोबारा नहीं पकाते।</p>
<ul>
<li><b>CI</b> (continuous integration): हर push या PR पर code build और test होता है। <b>CD</b>: continuous <i>delivery</i> हर build को releasable रखती है (release कोई इंसान approve करता है); continuous <i>deployment</i> checks पास होने पर अपने-आप release करती है।</li>
<li><b>Azure Pipelines YAML:</b> <code>trigger</code> (push पर CI) इसे शुरू करता है। PR validation के लिए YAML का <code>pr</code> GitHub और Bitbucket repos में चलता है; Azure Repos Git में इसकी जगह <b>Build validation</b> branch policy लगाते हैं। Pipeline में <b>stages</b> (Build, Test, Deploy), stage में <b>jobs</b>, job में <b>steps</b> (script या task)। Job एक <b>pool</b> के <b>agent</b> पर चलता है: Microsoft-hosted (हर job के लिए fresh VM, तुम कुछ maintain नहीं करते) या self-hosted (तुम्हारी machines, private network access, patch तुम करते हो)।</li>
<li><b>Variables और secrets:</b> YAML में plain variables, Library में <b>variable groups</b>, और secrets के लिए <b>Key Vault से linked</b> groups (Day 20)। Secret variables logs में masked रहते हैं। उन्हें scripts को साफ़ तौर पर दो (जैसे <code>env:</code> से)।</li>
<li><b>Templates और environments:</b> step, job और stage <b>templates</b> copy-paste हटाते हैं; <code>extends</code> template company-approved structure force कर सकता है। <b>Environment</b> (dev, test, prod) एक deployment target है जो history रखता है और deployment job चलने से पहले <b>approvals और checks</b> माँग सकता है। Deployment strategies: <b>runOnce</b>, <b>rolling</b> (VM targets), <b>canary</b>।</li>
<li><b>GitHub Actions</b> वही idea है: <code>.github/workflows</code> में workflow file, <code>on:</code> triggers, <code>runs-on</code> वाले jobs, <code>uses</code> या <code>run</code> वाले steps, required reviewers वाले environments, repo या environment settings में secrets।</li>
<li><b>Docker:</b> <b>image</b> sealed डिब्बा है (layers); <b>container</b> उसकी एक चलती copy। Multi-stage Dockerfile से build करो और non-root चलाओ। वही image हर environment में जाती है।</li>
<li><b>Principles:</b> build once, deploy many; config artifact के बाहर; releases के लिए SemVer; deploy सिर्फ़ pipeline से; database changes idempotent script या bundle से (Day 5); rollback रखो (पिछला artifact, slot swap वापस, Day 20); और <b>DORA</b> metrics से नापो।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> production को छूने वाली हर दोहराई जाने वाली चीज़ automate करो। ऐसे stages और approvals मत जोड़ो जिनकी किसी को ज़रूरत नहीं: हर gate lead time बढ़ाता है, इसलिए gate तभी रखो जब वह कुछ असली बचाता हो (prod approval, security scan)।</p>`,
        hg: `<p><b>Picture — tiffin service:</b> kitchen ek baar pakati hai (<b>build</b>), tiffin ko sealed dabbe mein pack karti hai (<b>artifact ya image</b>), aur wahi dabba har office mein jaata hai (<b>dev, test, prod</b>). Har customer ke liye bas bagal ka achaar badalta hai (<b>configuration</b>). Customer ke darwaze par dobara nahi pakate.</p>
<ul>
<li><b>CI</b> (continuous integration): har push ya PR par code build aur test hota hai. <b>CD</b>: continuous <i>delivery</i> har build ko releasable rakhti hai (release koi insaan approve karta hai); continuous <i>deployment</i> checks pass hone par apne-aap release karti hai.</li>
<li><b>Azure Pipelines YAML:</b> <code>trigger</code> (push par CI) ise shuru karta hai. PR validation ke liye YAML ka <code>pr</code> GitHub aur Bitbucket repos mein chalta hai; Azure Repos Git mein iski jagah <b>Build validation</b> branch policy lagate hain. Pipeline mein <b>stages</b> (Build, Test, Deploy), stage mein <b>jobs</b>, job mein <b>steps</b> (script ya task). Job ek <b>pool</b> ke <b>agent</b> par chalta hai: Microsoft-hosted (har job ke liye fresh VM, tum kuch maintain nahi karte) ya self-hosted (tumhari machines, private network access, patch tum karte ho).</li>
<li><b>Variables aur secrets:</b> YAML mein plain variables, Library mein <b>variable groups</b>, aur secrets ke liye <b>Key Vault se linked</b> groups (Day 20). Secret variables logs mein masked rehte hain. Unhe scripts ko saaf taur par do (jaise <code>env:</code> se).</li>
<li><b>Templates aur environments:</b> step, job aur stage <b>templates</b> copy-paste hataate hain; <code>extends</code> template company-approved structure force kar sakta hai. <b>Environment</b> (dev, test, prod) ek deployment target hai jo history rakhta hai aur deployment job chalne se pehle <b>approvals aur checks</b> maang sakta hai. Deployment strategies: <b>runOnce</b>, <b>rolling</b> (VM targets), <b>canary</b>.</li>
<li><b>GitHub Actions</b> wahi idea hai: <code>.github/workflows</code> mein workflow file, <code>on:</code> triggers, <code>runs-on</code> wale jobs, <code>uses</code> ya <code>run</code> wale steps, required reviewers wale environments, repo ya environment settings mein secrets.</li>
<li><b>Docker:</b> <b>image</b> sealed dabba hai (layers); <b>container</b> uski ek chalti copy. Multi-stage Dockerfile se build karo aur non-root chalao. Wahi image har environment mein jaati hai.</li>
<li><b>Principles:</b> build once, deploy many; config artifact ke bahar; releases ke liye SemVer; deploy sirf pipeline se; database changes idempotent script ya bundle se (Day 5); rollback rakho (pichhla artifact, slot swap wapas, Day 20); aur <b>DORA</b> metrics se naapo.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> production ko chhoone wali har dohrayi jaane wali cheez automate karo. Aise stages aur approvals mat jodo jinki kisi ko zaroorat nahi: har gate lead time badhata hai, isliye gate tabhi rakho jab woh kuch asli bachata ho (prod approval, security scan).</p>`
      }
    },
    {
      id: "git-in-practice",
      depth: "detailed",
      title: {
        en: "In practice: the Git commands behind a clean PR, a hotfix and an undo",
        hi: "Practice में: clean PR, hotfix और undo के पीछे के Git commands",
        hg: "Practice mein: clean PR, hotfix aur undo ke peeche ke Git commands"
      },
      body: {
        en: `<p><b>Analogy — editing a wedding invitation before printing:</b> while the draft is only on your desk, you can rewrite lines freely (rebase, amend, squash). Once the cards are posted to guests (pushed and pulled by others), you do not recall them; you send a correction card (revert).</p>
<ul>
<li>The first snippet shows a typical day: branch from <code>main</code>, commit, tidy your own commits with <code>git rebase -i</code>, update your branch on top of the latest main, and push. After a rebase of a branch you already pushed, the push needs <code>--force-with-lease</code>, which refuses to overwrite work you have not seen. Only do that on your own PR branch.</li>
<li>A <b>hotfix</b> is often a fix merged to <code>main</code> and then <code>git cherry-pick</code>ed onto the release branch. Use <code>-x</code> to record the original commit id in the message.</li>
<li><b>Undo, by situation:</b> not committed yet, <code>git restore</code>; last commit not pushed, <code>git commit --amend</code> or <code>git reset --soft HEAD~1</code>; already on a shared branch, <code>git revert</code>. For a merge commit, revert needs <code>-m 1</code> to say which parent to keep.</li>
<li><b>Lost something?</b> <code>git reflog</code> lists previous positions of HEAD; <code>git branch rescue &lt;id&gt;</code> brings the commit back.</li>
<li>The snippet is bash, shown for reading and not run here. Branch and file names are made up.</li>
</ul>
<p><b>When to use:</b> rebase and amend on your private branch before review; cherry-pick for hotfix back-ports; revert on anything shared. <b>When not:</b> never force-push main or a shared branch, and avoid <code>reset --hard</code> when you have uncommitted work you want to keep (it throws that work away).</p>`,
        hi: `<p><b>Analogy — छपाई से पहले शादी का card edit करना:</b> जब तक draft सिर्फ़ तुम्हारी मेज़ पर है, lines खुलकर बदल सकते हो (rebase, amend, squash)। जब card मेहमानों को post हो गए (दूसरों ने push/pull कर लिया), तो उन्हें वापस नहीं बुलाते; correction card भेजते हैं (revert)।</p>
<ul>
<li>पहला snippet एक आम दिन दिखाता है: <code>main</code> से branch, commit, <code>git rebase -i</code> से अपने commits साफ़ करना, branch को latest main के ऊपर update करना, और push। जो branch पहले push हो चुकी है उसके rebase के बाद push में <code>--force-with-lease</code> चाहिए, जो ऐसा काम overwrite करने से मना करता है जो तुमने देखा नहीं। यह सिर्फ़ अपनी PR branch पर करो।</li>
<li><b>Hotfix</b> अक्सर <code>main</code> में merged fix होता है जिसे <code>git cherry-pick</code> से release branch पर लाते हैं। <code>-x</code> से message में original commit id दर्ज हो जाता है।</li>
<li><b>Undo, situation के हिसाब से:</b> अभी commit नहीं हुआ तो <code>git restore</code>; आख़िरी commit push नहीं हुआ तो <code>git commit --amend</code> या <code>git reset --soft HEAD~1</code>; shared branch पर जा चुका है तो <code>git revert</code>। Merge commit के लिए revert में <code>-m 1</code> चाहिए ताकि पता चले कौन-सा parent रखना है।</li>
<li><b>कुछ खो गया?</b> <code>git reflog</code> HEAD की पिछली positions दिखाता है; <code>git branch rescue &lt;id&gt;</code> commit वापस ले आता है।</li>
<li>Snippet bash है, पढ़ने के लिए है, यहाँ चलता नहीं। Branch और file names बनावटी हैं।</li>
</ul>
<p><b>कब use करें:</b> review से पहले अपनी private branch पर rebase और amend; hotfix back-port के लिए cherry-pick; जो कुछ shared है उस पर revert। <b>कब नहीं:</b> main या shared branch को कभी force-push मत करो, और जब uncommitted काम बचाना हो तब <code>reset --hard</code> से बचो (वह उस काम को फेंक देता है)।</p>`,
        hg: `<p><b>Analogy — chhapai se pehle shaadi ka card edit karna:</b> jab tak draft sirf tumhari mez par hai, lines khulkar badal sakte ho (rebase, amend, squash). Jab card mehmaano ko post ho gaye (dusron ne push/pull kar liya), to unhe wapas nahi bulate; correction card bhejte hain (revert).</p>
<ul>
<li>Pehla snippet ek aam din dikhata hai: <code>main</code> se branch, commit, <code>git rebase -i</code> se apne commits saaf karna, branch ko latest main ke upar update karna, aur push. Jo branch pehle push ho chuki hai uske rebase ke baad push mein <code>--force-with-lease</code> chahiye, jo aisa kaam overwrite karne se mana karta hai jo tumne dekha nahi. Yeh sirf apni PR branch par karo.</li>
<li><b>Hotfix</b> aksar <code>main</code> mein merged fix hota hai jise <code>git cherry-pick</code> se release branch par laate hain. <code>-x</code> se message mein original commit id darj ho jaata hai.</li>
<li><b>Undo, situation ke hisaab se:</b> abhi commit nahi hua to <code>git restore</code>; aakhri commit push nahi hua to <code>git commit --amend</code> ya <code>git reset --soft HEAD~1</code>; shared branch par ja chuka hai to <code>git revert</code>. Merge commit ke liye revert mein <code>-m 1</code> chahiye taaki pata chale kaun-sa parent rakhna hai.</li>
<li><b>Kuch kho gaya?</b> <code>git reflog</code> HEAD ki pichhli positions dikhata hai; <code>git branch rescue &lt;id&gt;</code> commit wapas le aata hai.</li>
<li>Snippet bash hai, padhne ke liye hai, yahan chalta nahi. Branch aur file names banaavati hain.</li>
</ul>
<p><b>Kab use karein:</b> review se pehle apni private branch par rebase aur amend; hotfix back-port ke liye cherry-pick; jo kuch shared hai us par revert. <b>Kab nahi:</b> main ya shared branch ko kabhi force-push mat karo, aur jab uncommitted kaam bachana ho tab <code>reset --hard</code> se bacho (woh us kaam ko phenk deta hai).</p>`
      },
      code: [
        {
          lang: "bash",
          caption: {
            en: "A typical PR day, a hotfix back-port, and the three undo tools (display-only; adjust names to your repo)",
            hi: "एक आम PR day, hotfix back-port, और तीन undo tools (सिर्फ़ दिखाने के लिए; अपने repo के नाम लगाओ)",
            hg: "Ek aam PR day, hotfix back-port, aur teen undo tools (sirf dikhane ke liye; apne repo ke naam lagao)"
          },
          check: "none",
          src: `# --- a normal PR day (your own branch) ---
git switch -c feature/coupon-codes main
git commit -am "feat: coupon codes"
git commit -am "fix: rounding"
git fetch origin
git rebase origin/main            # replay your commits on the latest main
git rebase -i origin/main         # optional: squash/reword YOUR commits before review
git push -u origin feature/coupon-codes   # first push: no force needed
# if you rebase AFTER pushing, update your own PR branch with: git push --force-with-lease

# --- hotfix: fix on main first, then back-port to the release branch ---
git switch release/1.4
git cherry-pick -x 3f2a9c1        # -x records "(cherry picked from commit ...)"

# --- undo, from safest to most dangerous ---
git revert 4c8a1f3                # shared branch: add an undo commit, history kept
git revert -m 1 7be3c52           # undo a MERGE commit, keep parent 1 (the mainline)
git reset --soft HEAD~1           # local only: un-commit, keep the changes staged

# --- lost a commit after a bad reset or rebase? ---
git reflog                        # find the old id, e.g. HEAD@{3}
git branch rescue 9d41e07         # point a new branch at it`
        }
      ]
    },
    {
      id: "azure-pipelines-yaml-in-practice",
      depth: "detailed",
      title: {
        en: "In practice: a multi-stage Azure Pipelines YAML, a deploy template, and the GitHub Actions twin",
        hi: "Practice में: multi-stage Azure Pipelines YAML, एक deploy template, और GitHub Actions का जुड़वाँ",
        hg: "Practice mein: multi-stage Azure Pipelines YAML, ek deploy template, aur GitHub Actions ka judwa"
      },
      body: {
        en: `<p><b>Analogy — a factory assembly line with a quality gate:</b> the Build stage makes one sealed product; test and prod are later stations. The prod station has a supervisor who must sign before the line moves on (an <b>approval</b> on the environment).</p>
<ul>
<li><b>Main file:</b> <code>trigger</code> and <code>pr</code> on <code>main</code> (<code>pr</code> works for GitHub repos; Azure Repos Git uses a Build validation branch policy instead); a variable group for shared values; a <b>Build</b> stage that restores, tests, publishes and uploads ONE artifact named <code>drop</code>; then deploy stages that <b>reuse</b> that artifact (build once, deploy many).</li>
<li><b>Deployment job:</b> <code>deployment:</code> with an <code>environment:</code> records deployment history and enables approvals and checks. These are configured on the environment in Azure DevOps (not in the YAML): add the prod approver there, and protect the service connection too, because checks only run for jobs that target the protected resource. A deployment job does not check out the repo automatically and downloads the artifact in its <code>deploy</code> hook.</li>
<li><b>Stage template:</b> <code>deploy-stage.yml</code> takes parameters (stage name, environment, app name, service connection) so test and prod are the same steps with different values. Prod is just a second call. An <code>extends</code> template goes further and defines a company-approved shape, but it only constrains pipelines that extend it; to enforce it, add a <b>Required template</b> check on the protected resource (environment, service connection or repo).</li>
<li><b>Secrets:</b> the Azure service connection holds the identity used to deploy; app secrets come from a Key Vault-linked variable group (Day 20) or, better, from the app's managed identity at runtime. Never echo secrets in scripts.</li>
<li><b>Strategies:</b> <code>runOnce</code> here; <code>rolling</code> (only for VM targets) and <code>canary</code> add lifecycle hooks (<code>preDeploy</code>, <code>deploy</code>, <code>routeTraffic</code>, <code>postRouteTraffic</code>, <code>on: failure</code>). For App Service, many teams get the same safety by deploying to a slot and swapping (Day 20).</li>
<li><b>GitHub Actions twin:</b> same shape in <code>.github/workflows/ci.yml</code>: <code>on</code>, <code>jobs</code>, <code>needs</code> (= <code>dependsOn</code>), <code>environment</code> with required reviewers, <code>uses</code> for ready-made actions. Pin third-party actions to a version or commit SHA, and check the current major versions.</li>
</ul>
<p><b>When to use:</b> YAML in the repo for every service (reviewable, versioned with the code), templates once you copy the same stage a second time. <b>When not:</b> do not template everything on day one (premature abstraction), and do not put approvals on dev, which only slows feedback.</p>`,
        hi: `<p><b>Analogy — quality gate वाली factory assembly line:</b> Build stage एक sealed product बनाता है; test और prod बाद के stations हैं। Prod station पर एक supervisor है जिसके sign के बिना line आगे नहीं बढ़ती (environment पर <b>approval</b>)।</p>
<ul>
<li><b>Main file:</b> <code>main</code> पर <code>trigger</code> और <code>pr</code> (<code>pr</code> GitHub repos में चलता है; Azure Repos Git में Build validation branch policy लगती है); shared values के लिए variable group; <b>Build</b> stage जो restore, test, publish करता है और <code>drop</code> नाम का एक ही artifact upload करता है; फिर deploy stages जो उसी artifact को <b>reuse</b> करते हैं (build once, deploy many)।</li>
<li><b>Deployment job:</b> <code>environment:</code> वाला <code>deployment:</code> deployment history दर्ज करता है और approvals व checks चालू करता है। ये Azure DevOps में environment पर configure होते हैं (YAML में नहीं): prod approver वहीं जोड़ो, और service connection भी protect करो, क्योंकि checks सिर्फ़ protected resource को target करने वाले jobs पर चलते हैं। Deployment job repo को खुद checkout नहीं करता और artifact अपने <code>deploy</code> hook में download करता है।</li>
<li><b>Stage template:</b> <code>deploy-stage.yml</code> parameters लेता है (stage name, environment, app name, service connection) ताकि test और prod वही steps हों बस values अलग। Prod बस दूसरी call है। <code>extends</code> template आगे जाकर company-approved shape तय करता है, पर वह सिर्फ़ उन्हीं pipelines को बाँधता है जो उसे extend करती हैं; इसे लागू कराने के लिए protected resource (environment, service connection या repo) पर <b>Required template</b> check लगाओ।</li>
<li><b>Secrets:</b> Azure service connection में वह identity है जिससे deploy होता है; app secrets Key Vault-linked variable group (Day 20) से, या बेहतर, runtime पर app की managed identity से आते हैं। Scripts में secrets echo मत करो।</li>
<li><b>Strategies:</b> यहाँ <code>runOnce</code>; <code>rolling</code> (सिर्फ़ VM targets के लिए) और <code>canary</code> lifecycle hooks जोड़ते हैं (<code>preDeploy</code>, <code>deploy</code>, <code>routeTraffic</code>, <code>postRouteTraffic</code>, <code>on: failure</code>)। App Service के लिए कई teams वही safety slot पर deploy और swap से पाती हैं (Day 20)।</li>
<li><b>GitHub Actions का जुड़वाँ:</b> <code>.github/workflows/ci.yml</code> में वही shape: <code>on</code>, <code>jobs</code>, <code>needs</code> (= <code>dependsOn</code>), required reviewers वाला <code>environment</code>, ready-made actions के लिए <code>uses</code>। Third-party actions को version या commit SHA पर pin करो, और current major versions check करो।</li>
</ul>
<p><b>कब use करें:</b> हर service के लिए repo में YAML (reviewable, code के साथ versioned), और templates तब जब वही stage दूसरी बार copy करो। <b>कब नहीं:</b> पहले दिन सब कुछ template मत बनाओ (premature abstraction), और dev पर approvals मत लगाओ, उससे सिर्फ़ feedback धीमा होता है।</p>`,
        hg: `<p><b>Analogy — quality gate wali factory assembly line:</b> Build stage ek sealed product banata hai; test aur prod baad ke stations hain. Prod station par ek supervisor hai jiske sign ke bina line aage nahi badhti (environment par <b>approval</b>).</p>
<ul>
<li><b>Main file:</b> <code>main</code> par <code>trigger</code> aur <code>pr</code> (<code>pr</code> GitHub repos mein chalta hai; Azure Repos Git mein Build validation branch policy lagti hai); shared values ke liye variable group; <b>Build</b> stage jo restore, test, publish karta hai aur <code>drop</code> naam ka ek hi artifact upload karta hai; phir deploy stages jo usi artifact ko <b>reuse</b> karte hain (build once, deploy many).</li>
<li><b>Deployment job:</b> <code>environment:</code> wala <code>deployment:</code> deployment history darj karta hai aur approvals aur checks chalu karta hai. Yeh Azure DevOps mein environment par configure hote hain (YAML mein nahi): prod approver wahin jodo, aur service connection bhi protect karo, kyunki checks sirf protected resource ko target karne wale jobs par chalte hain. Deployment job repo ko khud checkout nahi karta aur artifact apne <code>deploy</code> hook mein download karta hai.</li>
<li><b>Stage template:</b> <code>deploy-stage.yml</code> parameters leta hai (stage name, environment, app name, service connection) taaki test aur prod wahi steps hon bas values alag. Prod bas doosri call hai. <code>extends</code> template aage jaakar company-approved shape tay karta hai, par woh sirf unhi pipelines ko baandhta hai jo use extend karti hain; ise lagu karwane ke liye protected resource (environment, service connection ya repo) par <b>Required template</b> check lagao.</li>
<li><b>Secrets:</b> Azure service connection mein woh identity hai jisse deploy hota hai; app secrets Key Vault-linked variable group (Day 20) se, ya behtar, runtime par app ki managed identity se aate hain. Scripts mein secrets echo mat karo.</li>
<li><b>Strategies:</b> yahan <code>runOnce</code>; <code>rolling</code> (sirf VM targets ke liye) aur <code>canary</code> lifecycle hooks jodte hain (<code>preDeploy</code>, <code>deploy</code>, <code>routeTraffic</code>, <code>postRouteTraffic</code>, <code>on: failure</code>). App Service ke liye kai teams wahi safety slot par deploy aur swap se paati hain (Day 20).</li>
<li><b>GitHub Actions ka judwa:</b> <code>.github/workflows/ci.yml</code> mein wahi shape: <code>on</code>, <code>jobs</code>, <code>needs</code> (= <code>dependsOn</code>), required reviewers wala <code>environment</code>, ready-made actions ke liye <code>uses</code>. Third-party actions ko version ya commit SHA par pin karo, aur current major versions check karo.</li>
</ul>
<p><b>Kab use karein:</b> har service ke liye repo mein YAML (reviewable, code ke saath versioned), aur templates tab jab wahi stage doosri baar copy karo. <b>Kab nahi:</b> pehle din sab kuch template mat banao (premature abstraction), aur dev par approvals mat lagao, usse sirf feedback dheema hota hai.</p>`
      },
      code: [
        {
          lang: "yaml",
          caption: {
            en: "azure-pipelines.yml: build once, then deploy the same artifact to test and prod (display-only; names are examples)",
            hi: "azure-pipelines.yml: एक बार build, फिर वही artifact test और prod पर deploy (सिर्फ़ दिखाने के लिए; names examples हैं)",
            hg: "azure-pipelines.yml: ek baar build, phir wahi artifact test aur prod par deploy (sirf dikhane ke liye; names examples hain)"
          },
          check: "none",
          src: `trigger:
  branches:
    include: [ main ]
# pr: works for GitHub and Bitbucket repos. For Azure Repos Git it has no effect:
# PR validation there comes from a Build validation branch policy on main.
pr:
  branches:
    include: [ main ]

variables:
  - group: shop-common            # variable group (can be linked to Key Vault)
  - name: buildConfiguration
    value: Release

stages:
- stage: Build
  jobs:
  - job: BuildAndTest
    pool:
      vmImage: ubuntu-latest      # Microsoft-hosted agent
    steps:
    - task: UseDotNet@2
      inputs:
        packageType: sdk
        version: 10.0.x
    - script: dotnet test --configuration $(buildConfiguration)
      displayName: Restore, build and test
    - script: dotnet publish src/Shop.Api -c $(buildConfiguration) -o $(Build.ArtifactStagingDirectory)/api
      displayName: Publish
    - publish: $(Build.ArtifactStagingDirectory)/api
      artifact: drop              # the ONE artifact every environment will use

- template: templates/deploy-stage.yml
  parameters:
    stageName: DeployTest
    environment: shop-test
    appName: shop-api-test
    serviceConnection: sc-shop-test
    dependsOn: Build

- template: templates/deploy-stage.yml
  parameters:
    stageName: DeployProd
    environment: shop-prod        # approvals and checks are set on this environment
    appName: shop-api-prod
    serviceConnection: sc-shop-prod
    dependsOn: DeployTest`
        },
        {
          lang: "yaml",
          caption: {
            en: "templates/deploy-stage.yml: a stage template with parameters and a deployment job",
            hi: "templates/deploy-stage.yml: parameters और deployment job वाला stage template",
            hg: "templates/deploy-stage.yml: parameters aur deployment job wala stage template"
          },
          check: "none",
          src: `parameters:
- name: stageName
  type: string
- name: environment
  type: string
- name: appName
  type: string
- name: serviceConnection
  type: string
- name: dependsOn
  type: string

stages:
- stage: \${{ parameters.stageName }}
  dependsOn: \${{ parameters.dependsOn }}
  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))
  jobs:
  - deployment: Deploy
    pool:
      vmImage: ubuntu-latest
    environment: \${{ parameters.environment }}
    strategy:
      runOnce:
        deploy:
          steps:
          - download: current
            artifact: drop
          - task: AzureWebApp@1
            inputs:
              azureSubscription: \${{ parameters.serviceConnection }}
              appType: webAppLinux
              appName: \${{ parameters.appName }}
              package: $(Pipeline.Workspace)/drop`
        },
        {
          lang: "yaml",
          caption: {
            en: "The GitHub Actions twin of the build job plus a protected deploy (display-only; check current action versions)",
            hi: "Build job और protected deploy का GitHub Actions जुड़वाँ (सिर्फ़ दिखाने के लिए; current action versions check करो)",
            hg: "Build job aur protected deploy ka GitHub Actions judwa (sirf dikhane ke liye; current action versions check karo)"
          },
          check: "none",
          src: `name: ci
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: actions/setup-dotnet@v6
        with:
          dotnet-version: 10.0.x
      - run: dotnet test --configuration Release
      - run: dotnet publish src/Shop.Api -c Release -o out
      - uses: actions/upload-artifact@v7
        with:
          name: drop
          path: out

  deploy-prod:
    needs: build                  # same idea as dependsOn
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    environment: production       # required reviewers are set on the environment
    steps:
      - uses: actions/download-artifact@v8
        with:
          name: drop
      - run: echo "deploy the downloaded artifact here"`
        }
      ]
    },
    {
      id: "docker-for-dotnet",
      depth: "detailed",
      title: {
        en: "In practice: a multi-stage Dockerfile for ASP.NET Core, .dockerignore, non-root and chiseled images",
        hi: "Practice में: ASP.NET Core का multi-stage Dockerfile, .dockerignore, non-root और chiseled images",
        hg: "Practice mein: ASP.NET Core ka multi-stage Dockerfile, .dockerignore, non-root aur chiseled images"
      },
      body: {
        en: `<p><b>Analogy — packing a tiffin in a steel dabba:</b> in the kitchen (the <b>build</b> stage, the big SDK image) you chop, cook and make a mess. Only the finished food goes into the small dabba (the <b>final</b> stage, the slim runtime image). The customer never receives the knives.</p>
<ul>
<li><b>Layers and cache:</b> each instruction makes a layer. Docker reuses a cached layer only if that instruction and everything before it are unchanged. So copy the <code>.csproj</code> first and restore, then copy the source: a code edit then reuses the slow restore layer (puzzle 3 shows this).</li>
<li><b>Multi-stage:</b> <code>sdk</code> image to build and publish; <code>aspnet</code> image to run. The final image has no compilers, so it is smaller and has a smaller attack surface.</li>
<li><b><code>.dockerignore</code>:</b> keeps <code>bin</code>, <code>obj</code>, <code>.git</code>, local settings and secrets out of the build context. It makes builds faster and stops secrets leaking into layers.</li>
<li><b>Non-root:</b> since .NET 8 the Microsoft images ship a non-root user <code>app</code> and define <code>APP_UID</code>, but the default tags still start as root unless you add <code>USER $APP_UID</code>. They listen on port <b>8080</b> by default (not 80), which a non-root user can bind.</li>
<li><b>Chiseled images</b> (for example <code>mcr.microsoft.com/dotnet/aspnet:10.0-noble-chiseled</code>): Ubuntu-based, minimal packages, <b>no shell and no package manager</b>, and non-root by default. Smaller and safer, but you cannot <code>RUN</code> shell commands in the final stage or <code>docker exec</code> a shell to debug. Verify tags on the .NET Docker documentation; they change with each release.</li>
<li><b>Without a Dockerfile:</b> <code>dotnet publish /t:PublishContainer</code> (SDK 8+) builds an image directly and loads it into your local container runtime (Docker or Podman); set <code>ContainerRegistry</code> to push it to a registry instead. For ASP.NET apps it picks the aspnet base image and runs as the non-root <code>app</code> user by default; <code>ContainerFamily</code> picks a flavour such as <code>noble-chiseled</code>. It cannot run <code>RUN</code> commands, so use a Dockerfile if you need OS packages.</li>
<li><b>Tags:</b> tag with the version (and optionally the commit id), not only <code>latest</code>. For repeatable builds, pin base images by version (or digest) and update them on purpose.</li>
</ul>
<p><b>When to use:</b> containers for services you deploy to Container Apps, AKS or any host with Docker; chiseled plus non-root for production. <b>When not:</b> do not containerize for its own sake: a plain web API on App Service (Day 20) needs no Dockerfile. Do not put secrets in <code>ENV</code> or <code>COPY</code> them into the image.</p>`,
        hi: `<p><b>Analogy — steel के dabba में tiffin पैक करना:</b> kitchen में (<b>build</b> stage, बड़ी SDK image) तुम काटते, पकाते और गंदगी करते हो। सिर्फ़ तैयार खाना छोटे dabba (<b>final</b> stage, slim runtime image) में जाता है। Customer को चाकू नहीं मिलते।</p>
<ul>
<li><b>Layers और cache:</b> हर instruction एक layer बनाता है। Docker cached layer तभी reuse करता है जब वह instruction और उसके पहले सब कुछ unchanged हो। इसलिए पहले <code>.csproj</code> copy करके restore करो, फिर source copy करो: code edit पर slow restore layer reuse होती है (puzzle 3 यही दिखाता है)।</li>
<li><b>Multi-stage:</b> build और publish के लिए <code>sdk</code> image; चलाने के लिए <code>aspnet</code> image। Final image में compilers नहीं होते, इसलिए वह छोटी है और attack surface कम है।</li>
<li><b><code>.dockerignore</code>:</b> <code>bin</code>, <code>obj</code>, <code>.git</code>, local settings और secrets को build context से बाहर रखता है। Build तेज़ होता है और secrets layers में leak नहीं होते।</li>
<li><b>Non-root:</b> .NET 8 से Microsoft images में non-root user <code>app</code> आता है और <code>APP_UID</code> defined है, पर default tags फिर भी root से शुरू होते हैं जब तक तुम <code>USER $APP_UID</code> न जोड़ो। वे default रूप से port <b>8080</b> पर सुनते हैं (80 नहीं), जिसे non-root user bind कर सकता है।</li>
<li><b>Chiseled images</b> (जैसे <code>mcr.microsoft.com/dotnet/aspnet:10.0-noble-chiseled</code>): Ubuntu-based, minimal packages, <b>shell नहीं और package manager नहीं</b>, और default से non-root। छोटी और ज़्यादा safe, पर final stage में shell commands <code>RUN</code> नहीं कर सकते और debug के लिए shell में <code>docker exec</code> नहीं कर सकते। Tags .NET Docker documentation पर verify करो; वे हर release के साथ बदलते हैं।</li>
<li><b>बिना Dockerfile:</b> <code>dotnet publish /t:PublishContainer</code> (SDK 8+) सीधे image build करके तुम्हारे local container runtime (Docker या Podman) में load करता है; registry में push करने के लिए <code>ContainerRegistry</code> set करो। ASP.NET apps के लिए aspnet base image चुनता है और default से non-root <code>app</code> user से चलता है; <code>ContainerFamily</code> <code>noble-chiseled</code> जैसा flavour चुनता है। वह <code>RUN</code> commands नहीं चला सकता, इसलिए OS packages चाहिए तो Dockerfile लो।</li>
<li><b>Tags:</b> version (और चाहें तो commit id) से tag करो, सिर्फ़ <code>latest</code> से नहीं। Repeatable builds के लिए base images को version (या digest) पर pin करो और जान-बूझकर update करो।</li>
</ul>
<p><b>कब use करें:</b> जिन services को Container Apps, AKS या Docker वाले किसी host पर deploy करते हो उनके लिए containers; production के लिए chiseled plus non-root। <b>कब नहीं:</b> containers सिर्फ़ containers के लिए मत बनाओ: App Service (Day 20) पर सादी web API को Dockerfile नहीं चाहिए। Secrets को <code>ENV</code> में मत रखो या image में <code>COPY</code> मत करो।</p>`,
        hg: `<p><b>Analogy — steel ke dabba mein tiffin pack karna:</b> kitchen mein (<b>build</b> stage, badi SDK image) tum kaatte, pakate aur gandagi karte ho. Sirf taiyaar khaana chhote dabba (<b>final</b> stage, slim runtime image) mein jaata hai. Customer ko chaaku nahi milte.</p>
<ul>
<li><b>Layers aur cache:</b> har instruction ek layer banata hai. Docker cached layer tabhi reuse karta hai jab woh instruction aur uske pehle sab kuch unchanged ho. Isliye pehle <code>.csproj</code> copy karke restore karo, phir source copy karo: code edit par slow restore layer reuse hoti hai (puzzle 3 yahi dikhata hai).</li>
<li><b>Multi-stage:</b> build aur publish ke liye <code>sdk</code> image; chalane ke liye <code>aspnet</code> image. Final image mein compilers nahi hote, isliye woh chhoti hai aur attack surface kam hai.</li>
<li><b><code>.dockerignore</code>:</b> <code>bin</code>, <code>obj</code>, <code>.git</code>, local settings aur secrets ko build context se bahar rakhta hai. Build tez hota hai aur secrets layers mein leak nahi hote.</li>
<li><b>Non-root:</b> .NET 8 se Microsoft images mein non-root user <code>app</code> aata hai aur <code>APP_UID</code> defined hai, par default tags phir bhi root se shuru hote hain jab tak tum <code>USER $APP_UID</code> na jodo. Woh default roop se port <b>8080</b> par sunte hain (80 nahi), jise non-root user bind kar sakta hai.</li>
<li><b>Chiseled images</b> (jaise <code>mcr.microsoft.com/dotnet/aspnet:10.0-noble-chiseled</code>): Ubuntu-based, minimal packages, <b>shell nahi aur package manager nahi</b>, aur default se non-root. Chhoti aur zyada safe, par final stage mein shell commands <code>RUN</code> nahi kar sakte aur debug ke liye shell mein <code>docker exec</code> nahi kar sakte. Tags .NET Docker documentation par verify karo; woh har release ke saath badalte hain.</li>
<li><b>Bina Dockerfile:</b> <code>dotnet publish /t:PublishContainer</code> (SDK 8+) seedha image build karke tumhare local container runtime (Docker ya Podman) mein load karta hai; registry mein push karne ke liye <code>ContainerRegistry</code> set karo. ASP.NET apps ke liye aspnet base image chunta hai aur default se non-root <code>app</code> user se chalta hai; <code>ContainerFamily</code> <code>noble-chiseled</code> jaisa flavour chunta hai. Woh <code>RUN</code> commands nahi chala sakta, isliye OS packages chahiye to Dockerfile lo.</li>
<li><b>Tags:</b> version (aur chaho to commit id) se tag karo, sirf <code>latest</code> se nahi. Repeatable builds ke liye base images ko version (ya digest) par pin karo aur jaan-boojhkar update karo.</li>
</ul>
<p><b>Kab use karein:</b> jin services ko Container Apps, AKS ya Docker wale kisi host par deploy karte ho unke liye containers; production ke liye chiseled plus non-root. <b>Kab nahi:</b> containers sirf containers ke liye mat banao: App Service (Day 20) par saadi web API ko Dockerfile nahi chahiye. Secrets ko <code>ENV</code> mein mat rakho ya image mein <code>COPY</code> mat karo.</p>`
      },
      code: [
        {
          lang: "dockerfile",
          caption: {
            en: "Multi-stage Dockerfile: restore as its own cached layer, chiseled runtime, non-root (display-only)",
            hi: "Multi-stage Dockerfile: restore अपनी cached layer में, chiseled runtime, non-root (सिर्फ़ दिखाने के लिए)",
            hg: "Multi-stage Dockerfile: restore apni cached layer mein, chiseled runtime, non-root (sirf dikhane ke liye)"
          },
          check: "none",
          src: `# ---- build stage: big image with the SDK ----
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

# 1) project files first: this layer + restore stay cached until a package changes.
#    Copy EVERY referenced .csproj (plus Directory.Packages.props and nuget.config if you have them) before restore.
COPY src/Shop.Api/Shop.Api.csproj src/Shop.Api/
RUN dotnet restore src/Shop.Api/Shop.Api.csproj

# 2) then the source: changes often, so it comes later
COPY . .
RUN dotnet publish src/Shop.Api/Shop.Api.csproj -c Release -o /app/publish --no-restore

# ---- final stage: small runtime image, no SDK, no shell ----
FROM mcr.microsoft.com/dotnet/aspnet:10.0-noble-chiseled AS final
WORKDIR /app
COPY --from=build /app/publish .

# non-root (chiseled images already default to non-root)
USER $APP_UID
# .NET 8+ images listen on 8080
EXPOSE 8080
ENTRYPOINT ["dotnet", "Shop.Api.dll"]`
        },
        {
          lang: "text",
          caption: {
            en: ".dockerignore: keep the build context small and secret-free",
            hi: ".dockerignore: build context को छोटा और secret-free रखो",
            hg: ".dockerignore: build context ko chhota aur secret-free rakho"
          },
          check: "none",
          src: `**/bin
**/obj
**/.vs
.git
.gitignore
**/*.user
**/appsettings.Development.json
**/secrets.json
.env
Dockerfile*
*.md`
        },
        {
          lang: "bash",
          caption: {
            en: "Build and run locally, or skip the Dockerfile with the SDK container publish (display-only)",
            hi: "Local में build और run, या SDK container publish से Dockerfile छोड़ दो (सिर्फ़ दिखाने के लिए)",
            hg: "Local mein build aur run, ya SDK container publish se Dockerfile chhod do (sirf dikhane ke liye)"
          },
          check: "none",
          src: `# with a Dockerfile
docker build -t shop-api:1.4.2 .
docker run --rm -p 8080:8080 -e ASPNETCORE_ENVIRONMENT=Production shop-api:1.4.2

# without a Dockerfile: the .NET SDK builds the image (SDK 8 or later).
# ContainerFamily is appended to the base tag, here 10.0-noble-chiseled.
# The image is loaded into local Docker/Podman; add -p ContainerRegistry=<registry> to push it.
dotnet publish src/Shop.Api --os linux --arch x64 /t:PublishContainer \\
  -p ContainerFamily=noble-chiseled -p ContainerImageTag=1.4.2`
        }
      ]
    },
    {
      id: "release-safety-in-practice",
      depth: "detailed",
      title: {
        en: "In practice: versioning, config per environment, DB migrations in the pipeline, rollback, DORA",
        hi: "Practice में: versioning, हर environment की config, pipeline में DB migrations, rollback, DORA",
        hg: "Practice mein: versioning, har environment ki config, pipeline mein DB migrations, rollback, DORA"
      },
      body: {
        en: `<p><b>Analogy — a train with a guard and a reverse gear:</b> before leaving the station the guard checks the doors (health checks), and if the next station is blocked the train can reverse to the last good platform (rollback). A pipeline needs both.</p>
<ul>
<li><b>Versioning:</b> use <b>SemVer</b> <code>MAJOR.MINOR.PATCH</code> (breaking, feature, fix) with optional pre-release (<code>1.0.0-rc.1</code>); a pre-release sorts lower than the release (puzzle 1). Stamp the version into the build, tag the Git commit, and expose it, so you can answer "which build is running in prod?". The C# snippet shows a <code>/version</code> endpoint reading the assembly's informational version, plus a simple readiness endpoint for the deploy step to poll.</li>
<li><b>Config per environment:</b> the artifact is identical everywhere; environment variables, App Service settings, variable groups and Key Vault supply the differences (Day 12 configuration layers, Day 20 secrets). If you must rebuild to change a connection string, the design is wrong.</li>
<li><b>Database migrations:</b> generate an <b>idempotent SQL script</b> (<code>dotnet ef migrations script --idempotent</code>) or an <b>EF migration bundle</b> in the build, review it, and apply it as a deployment step before or as the new version starts (Day 5). Use the <b>expand and contract</b> pattern so old and new code both work during the rollout: add columns first, backfill, switch code, remove the old column in a later release.</li>
<li><b>Rollback options:</b> redeploy the previous artifact (it still exists because you build once); swap the App Service slot back (Day 20); turn off the feature flag (fastest, no deploy). Database rollback is the hard part, which is why migrations should be backward-compatible and rolling forward with a fix is often safer than reversing data changes.</li>
<li><b>Blue-green and canary:</b> blue-green keeps two full environments and switches traffic at once (a slot swap is the App Service form); canary sends a small percentage to the new version first and watches errors (puzzle 5 shows a stable percentage rollout). Both need good monitoring (Day 20).</li>
<li><b>DORA metrics</b> (five): deployment frequency, change lead time, failed deployment recovery time, change fail rate, and deployment rework rate. The first three show throughput and the last two show instability. Use them to find bottlenecks as a team, not to rank people.</li>
<li><b>Infrastructure as code:</b> keep Bicep or Terraform in the repo (Day 20). Show the <code>what-if</code> (Bicep) or <code>plan</code> (Terraform) output in the PR, apply through the pipeline after approval, and make no portal changes in prod.</li>
<li><b>Pipeline secrets scanning:</b> add a secret scanner step in CI, as promised on Day 20, and never print secret variables.</li>
</ul>
<p><b>When to use:</b> all of it for anything that reaches users. <b>When not:</b> do not chase blue-green or canary for an internal tool with ten users, and do not measure DORA numbers as targets for individuals (Goodhart's law: a measure that becomes a target stops being a good measure).</p>`,
        hi: `<p><b>Analogy — guard और reverse gear वाली train:</b> station छोड़ने से पहले guard दरवाज़े check करता है (health checks), और अगला station बंद हो तो train आख़िरी अच्छे platform तक reverse कर सकती है (rollback)। Pipeline को दोनों चाहिए।</p>
<ul>
<li><b>Versioning:</b> <b>SemVer</b> <code>MAJOR.MINOR.PATCH</code> (breaking, feature, fix) और optional pre-release (<code>1.0.0-rc.1</code>); pre-release release से नीचे sort होता है (puzzle 1)। Version को build में stamp करो, Git commit पर tag लगाओ, और उसे expose करो, ताकि "prod में कौन-सा build चल रहा है?" का जवाब दे सको। C# snippet एक <code>/version</code> endpoint दिखाता है जो assembly का informational version पढ़ता है, और deploy step के poll करने के लिए एक simple readiness endpoint।</li>
<li><b>हर environment की config:</b> artifact हर जगह identical है; फ़र्क environment variables, App Service settings, variable groups और Key Vault से आता है (Day 12 की configuration layers, Day 20 के secrets)। अगर connection string बदलने के लिए rebuild करना पड़े तो design गलत है।</li>
<li><b>Database migrations:</b> build में <b>idempotent SQL script</b> (<code>dotnet ef migrations script --idempotent</code>) या <b>EF migration bundle</b> बनाओ, review करो, और deployment step में नए version के शुरू होने से पहले या साथ लगाओ (Day 5)। <b>Expand and contract</b> pattern रखो ताकि rollout के दौरान पुराना और नया code दोनों चलें: पहले columns जोड़ो, backfill, code बदलो, पुराना column बाद की release में हटाओ।</li>
<li><b>Rollback options:</b> पिछला artifact दोबारा deploy करो (वह मौजूद है क्योंकि build once); App Service slot वापस swap करो (Day 20); feature flag बंद करो (सबसे तेज़, deploy नहीं)। Database rollback मुश्किल हिस्सा है, इसीलिए migrations backward-compatible हों और data changes उलटने से अक्सर fix के साथ आगे बढ़ना ज़्यादा safe है।</li>
<li><b>Blue-green और canary:</b> blue-green दो पूरे environments रखता है और traffic एक साथ switch करता है (slot swap उसका App Service रूप है); canary पहले छोटा percentage नए version को भेजता है और errors देखता है (puzzle 5 stable percentage rollout दिखाता है)। दोनों को अच्छी monitoring चाहिए (Day 20)।</li>
<li><b>DORA metrics</b> (पाँच): deployment frequency, change lead time, failed deployment recovery time, change fail rate और deployment rework rate। पहले तीन throughput दिखाते हैं और आख़िरी दो instability। इन्हें team के bottlenecks ढूँढने के लिए use करो, लोगों को rank करने के लिए नहीं।</li>
<li><b>Infrastructure as code:</b> Bicep या Terraform repo में रखो (Day 20)। PR में <code>what-if</code> (Bicep) या <code>plan</code> (Terraform) का output दिखाओ, approval के बाद pipeline से apply करो, और prod में portal से कोई बदलाव मत करो।</li>
<li><b>Pipeline में secrets scanning:</b> CI में secret scanner step जोड़ो, जैसा Day 20 में वादा किया था, और secret variables कभी print मत करो।</li>
</ul>
<p><b>कब use करें:</b> जो कुछ users तक पहुँचता है उस सबके लिए। <b>कब नहीं:</b> दस users वाले internal tool के लिए blue-green या canary के पीछे मत भागो, और DORA numbers को लोगों के targets मत बनाओ (Goodhart's law: जो measure target बन जाता है वह अच्छा measure नहीं रहता)।</p>`,
        hg: `<p><b>Analogy — guard aur reverse gear wali train:</b> station chhodne se pehle guard darwaze check karta hai (health checks), aur agla station band ho to train aakhri achhe platform tak reverse kar sakti hai (rollback). Pipeline ko dono chahiye.</p>
<ul>
<li><b>Versioning:</b> <b>SemVer</b> <code>MAJOR.MINOR.PATCH</code> (breaking, feature, fix) aur optional pre-release (<code>1.0.0-rc.1</code>); pre-release release se neeche sort hota hai (puzzle 1). Version ko build mein stamp karo, Git commit par tag lagao, aur use expose karo, taaki "prod mein kaun-sa build chal raha hai?" ka jawab de sako. C# snippet ek <code>/version</code> endpoint dikhata hai jo assembly ka informational version padhta hai, aur deploy step ke poll karne ke liye ek simple readiness endpoint.</li>
<li><b>Har environment ki config:</b> artifact har jagah identical hai; farq environment variables, App Service settings, variable groups aur Key Vault se aata hai (Day 12 ki configuration layers, Day 20 ke secrets). Agar connection string badalne ke liye rebuild karna pade to design galat hai.</li>
<li><b>Database migrations:</b> build mein <b>idempotent SQL script</b> (<code>dotnet ef migrations script --idempotent</code>) ya <b>EF migration bundle</b> banao, review karo, aur deployment step mein naye version ke shuru hone se pehle ya saath lagao (Day 5). <b>Expand and contract</b> pattern rakho taaki rollout ke dauran purana aur naya code dono chalein: pehle columns jodo, backfill, code badlo, purana column baad ki release mein hatao.</li>
<li><b>Rollback options:</b> pichhla artifact dobara deploy karo (woh maujood hai kyunki build once); App Service slot wapas swap karo (Day 20); feature flag band karo (sabse tez, deploy nahi). Database rollback mushkil hissa hai, isiliye migrations backward-compatible hon aur data changes ulatne se aksar fix ke saath aage badhna zyada safe hai.</li>
<li><b>Blue-green aur canary:</b> blue-green do poore environments rakhta hai aur traffic ek saath switch karta hai (slot swap uska App Service roop hai); canary pehle chhota percentage naye version ko bhejta hai aur errors dekhta hai (puzzle 5 stable percentage rollout dikhata hai). Dono ko achhi monitoring chahiye (Day 20).</li>
<li><b>DORA metrics</b> (paanch): deployment frequency, change lead time, failed deployment recovery time, change fail rate aur deployment rework rate. Pehle teen throughput dikhate hain aur aakhri do instability. Inhe team ke bottlenecks dhoondhne ke liye use karo, logon ko rank karne ke liye nahi.</li>
<li><b>Infrastructure as code:</b> Bicep ya Terraform repo mein rakho (Day 20). PR mein <code>what-if</code> (Bicep) ya <code>plan</code> (Terraform) ka output dikhao, approval ke baad pipeline se apply karo, aur prod mein portal se koi badlaav mat karo.</li>
<li><b>Pipeline mein secrets scanning:</b> CI mein secret scanner step jodo, jaisa Day 20 mein waada kiya tha, aur secret variables kabhi print mat karo.</li>
</ul>
<p><b>Kab use karein:</b> jo kuch users tak pahunchta hai us sabke liye. <b>Kab nahi:</b> das users wale internal tool ke liye blue-green ya canary ke peeche mat bhaago, aur DORA numbers ko logon ke targets mat banao (Goodhart's law: jo measure target ban jaata hai woh achha measure nahi rehta).</p>`
      },
      code: [
        {
          caption: {
            en: "A /version endpoint and a readiness endpoint a deployment step can poll (compile-checked)",
            hi: "एक /version endpoint और readiness endpoint जिसे deployment step poll कर सकता है (compile-checked)",
            hg: "Ek /version endpoint aur readiness endpoint jise deployment step poll kar sakta hai (compile-checked)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using System.Reflection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// The build stamps the version (for example dotnet publish -p:Version=1.4.2+sha.3f2a9c1).
var version = Assembly.GetExecutingAssembly()
    .GetCustomAttribute<AssemblyInformationalVersionAttribute>()?.InformationalVersion ?? "unknown";

app.MapGet("/version", () => Results.Ok(new { version, environment = app.Environment.EnvironmentName }));

// Cheap readiness check: "the process is up and can serve". Keep deep dependency checks separate.
app.MapGet("/ready", () => Results.Ok("ready"));

app.Run();`
        },
        {
          lang: "bash",
          caption: {
            en: "Pipeline steps: stamp the version, make the migration script, apply it, and roll back by swapping (display-only)",
            hi: "Pipeline steps: version stamp, migration script बनाना, लगाना, और swap से rollback (सिर्फ़ दिखाने के लिए)",
            hg: "Pipeline steps: version stamp, migration script banana, lagana, aur swap se rollback (sirf dikhane ke liye)"
          },
          check: "none",
          src: `# build: stamp the version once, tag the commit
dotnet publish src/Shop.Api -c Release -p:Version=1.4.2 -o out
git tag v1.4.2 && git push origin v1.4.2

# build: produce the DB change as a reviewable artifact (Day 5)
dotnet ef migrations script --idempotent --project src/Shop.Data -o migrate.sql
# or: dotnet ef migrations bundle -o efbundle   (then run: ./efbundle --connection "$CONN")

# deploy: apply the migration, deploy to the staging slot, smoke-test, then swap (Day 20)
sqlcmd -S "$SQL_SERVER" -d shop -G -i migrate.sql      # -G = Microsoft Entra authentication
curl --fail https://shop-api-prod-staging.azurewebsites.net/ready
az webapp deployment slot swap -n shop-api-prod -g rg-shop-prod --slot staging --target-slot production

# rollback: swap back (the previous version is still in the other slot)
az webapp deployment slot swap -n shop-api-prod -g rg-shop-prod --slot staging --target-slot production`
        }
      ]
    }
  ],
  qa: [
    {
      id: "merge-vs-rebase",
      depth: "short",
      q: "Merge or rebase: what is the difference and when do you use each?",
      answer: "Merge joins histories and keeps what really happened; rebase replays my commits on a new base, giving a linear history with new commit ids. I rebase only my own unshared branch.",
      meaning: {
        hi: "Merge history जोड़ता है और सच्ची history रखता है; rebase मेरे commits को नए base पर replay करता है। Rebase सिर्फ़ अपनी unshared branch पर।",
        hg: "Merge history jodta hai aur sachchi history rakhta hai; rebase mere commits ko naye base par replay karta hai. Rebase sirf apni unshared branch par."
      },
      explain: {
        en: `<ul>
<li>Rebase creates <b>new commits</b> (new ids), so anyone who already pulled the old ones now has diverged history. That is the golden rule: do not rebase shared commits.</li>
<li>A common team habit: rebase your own branch on main to stay current, then merge (or squash) into main through the PR.</li>
<li>Follow-up: "What if someone rebased a shared branch?" Everyone who pulled it must reset or rebase their local copy onto the new history, which is painful; use revert instead and agree rules in the team.</li>
</ul>`,
        hi: `<ul>
<li>Rebase <b>नए commits</b> बनाता है (नए ids), इसलिए जिसने पुराने commits पहले pull कर लिए उसकी history अलग हो जाती है। यही golden rule है: shared commits को rebase मत करो।</li>
<li>Team की आम आदत: अपनी branch को main पर rebase करके current रखो, फिर PR से main में merge (या squash) करो।</li>
<li>Follow-up: "अगर किसी ने shared branch rebase कर दी तो?" जिसने pull किया था उसे अपनी local copy नई history पर reset या rebase करनी पड़ती है, जो तकलीफ़ है; revert use करो और team में rules तय करो।</li>
</ul>`,
        hg: `<ul>
<li>Rebase <b>naye commits</b> banata hai (naye ids), isliye jisne purane commits pehle pull kar liye uski history alag ho jaati hai. Yahi golden rule hai: shared commits ko rebase mat karo.</li>
<li>Team ki aam aadat: apni branch ko main par rebase karke current rakho, phir PR se main mein merge (ya squash) karo.</li>
<li>Follow-up: "Agar kisi ne shared branch rebase kar di to?" Jisne pull kiya tha use apni local copy nayi history par reset ya rebase karni padti hai, jo takleef hai; revert use karo aur team mein rules tay karo.</li>
</ul>`
      }
    },
    {
      id: "revert-vs-reset",
      depth: "short",
      q: "A bad commit reached the main branch. Revert or reset?",
      answer: "Revert: it adds a new commit that undoes the bad one and keeps history intact, so it is safe on shared branches. Reset rewrites history and suits only local, unpushed work.",
      meaning: {
        hi: "Revert: नया commit जो बुरे commit को undo करे, history safe, shared branch पर safe। Reset history rewrite करता है, सिर्फ़ local काम के लिए।",
        hg: "Revert: naya commit jo bure commit ko undo kare, history safe, shared branch par safe. Reset history rewrite karta hai, sirf local kaam ke liye."
      },
      explain: {
        en: `<ul>
<li><code>git revert &lt;id&gt;</code> works on any commit; for a merge commit add <code>-m 1</code> to pick the mainline parent. Note that after reverting a merge, merging the same branch again later needs the revert itself to be reverted first.</li>
<li><code>reset --soft</code> keeps changes staged, <code>--mixed</code> (default) keeps them unstaged, <code>--hard</code> discards them.</li>
<li>Follow-up: "I reset and pushed by mistake." Find the old id with <code>git reflog</code> and restore it locally; to fix the remote, either add a <code>git revert</code> commit or, if the team agrees, a coordinated <code>--force-with-lease</code> push. Avoid force-pushing a shared branch on your own.</li>
</ul>`,
        hi: `<ul>
<li><code>git revert &lt;id&gt;</code> किसी भी commit पर चलता है; merge commit के लिए mainline parent चुनने को <code>-m 1</code> जोड़ो। ध्यान रहे, merge revert करने के बाद वही branch दोबारा merge करनी हो तो पहले उस revert को ही revert करना पड़ता है।</li>
<li><code>reset --soft</code> changes को staged रखता है, <code>--mixed</code> (default) unstaged रखता है, <code>--hard</code> उन्हें फेंक देता है।</li>
<li>Follow-up: "मैंने reset करके गलती से push कर दिया।" <code>git reflog</code> से पुराना id ढूँढकर local में restore करो; remote ठीक करने के लिए या तो <code>git revert</code> commit जोड़ो या team सहमत हो तो coordinated <code>--force-with-lease</code> push करो। Shared branch को अकेले force-push मत करो।</li>
</ul>`,
        hg: `<ul>
<li><code>git revert &lt;id&gt;</code> kisi bhi commit par chalta hai; merge commit ke liye mainline parent chunne ko <code>-m 1</code> jodo. Dhyaan rahe, merge revert karne ke baad wahi branch dobara merge karni ho to pehle us revert ko hi revert karna padta hai.</li>
<li><code>reset --soft</code> changes ko staged rakhta hai, <code>--mixed</code> (default) unstaged rakhta hai, <code>--hard</code> unhe phenk deta hai.</li>
<li>Follow-up: "Maine reset karke galti se push kar diya." <code>git reflog</code> se purana id dhoondkar local mein restore karo; remote theek karne ke liye ya to <code>git revert</code> commit jodo ya team sehmat ho to coordinated <code>--force-with-lease</code> push karo. Shared branch ko akele force-push mat karo.</li>
</ul>`
      }
    },
    {
      id: "trunk-based-vs-gitflow",
      depth: "short",
      q: "Trunk-based development or GitFlow: which would you choose for your team?",
      answer: "It depends on release cadence. Frequent deploys with good automated tests suit trunk-based with short branches and feature flags; scheduled, versioned releases or several supported versions suit GitFlow.",
      meaning: {
        hi: "Release cadence पर depend करता है। बार-बार deploy और अच्छे tests हों तो trunk-based; scheduled versioned releases हों तो GitFlow।",
        hg: "Release cadence par depend karta hai. Baar-baar deploy aur achhe tests hon to trunk-based; scheduled versioned releases hon to GitFlow."
      },
      explain: {
        en: `<ul>
<li>Trunk-based needs: fast CI, solid tests, feature flags for unfinished work, and a team that merges small and often. Long-lived branches mean big painful merges and late feedback.</li>
<li>GitFlow fits packaged products with versions to maintain; its cost is ceremony and slow integration.</li>
<li>TL angle: state the team's context (cadence, test maturity, hosting), pick one, write the rules down, and revisit when metrics (lead time, change fail rate) say it hurts.</li>
<li>Follow-up: "How do you hide unfinished work?" Feature flags, with a plan to remove the flag after rollout so old flags do not pile up.</li>
</ul>`,
        hi: `<ul>
<li>Trunk-based को चाहिए: fast CI, मज़बूत tests, अधूरे काम के लिए feature flags, और ऐसी team जो छोटा और बार-बार merge करे। लंबी branches का मतलब बड़े दर्दनाक merges और देर से feedback।</li>
<li>GitFlow उन packaged products में फिट है जिनके versions maintain करने हैं; इसकी कीमत ceremony और धीमा integration है।</li>
<li>TL angle: team का context बताओ (cadence, test maturity, hosting), एक चुनो, rules लिख दो, और जब metrics (lead time, change fail rate) बताएँ कि तकलीफ़ है तब दोबारा देखो।</li>
<li>Follow-up: "अधूरा काम कैसे छिपाते हो?" Feature flags से, और rollout के बाद flag हटाने के plan के साथ ताकि पुराने flags जमा न हों।</li>
</ul>`,
        hg: `<ul>
<li>Trunk-based ko chahiye: fast CI, majboot tests, adhoore kaam ke liye feature flags, aur aisi team jo chhota aur baar-baar merge kare. Lambi branches ka matlab bade dardnaak merges aur der se feedback.</li>
<li>GitFlow un packaged products mein fit hai jinke versions maintain karne hain; iski keemat ceremony aur dheema integration hai.</li>
<li>TL angle: team ka context batao (cadence, test maturity, hosting), ek chuno, rules likh do, aur jab metrics (lead time, change fail rate) batayein ki takleef hai tab dobara dekho.</li>
<li>Follow-up: "Adhoora kaam kaise chhupate ho?" Feature flags se, aur rollout ke baad flag hatane ke plan ke saath taaki purane flags jama na hon.</li>
</ul>`
      }
    },
    {
      id: "code-review-as-tl",
      depth: "short",
      q: "How do you run code reviews as a Tech Lead?",
      answer: "Small PRs, automated checks first, then human review for correctness, design, tests and risk. I comment on the code with reasons, separate must-fix from suggestions, and praise good work.",
      meaning: {
        hi: "छोटे PRs, पहले automated checks, फिर correctness, design, tests और risk की human review। Code पर reason के साथ comment, must-fix और suggestions अलग, और अच्छे काम की तारीफ़।",
        hg: "Chhote PRs, pehle automated checks, phir correctness, design, tests aur risk ki human review. Code par reason ke saath comment, must-fix aur suggestions alag, aur achhe kaam ki taareef."
      },
      explain: {
        en: `<ul>
<li>Let linters, formatters and the build catch style and compile problems; reviewers spend attention on logic, edge cases, security, performance, naming and whether tests would catch a regression.</li>
<li>Rotate reviewers, use <code>CODEOWNERS</code> for risky areas, set a team expectation for review turnaround (for example within one working day) so PRs do not wait.</li>
<li>Tone: ask questions, give the reason, offer an alternative, use "we" language. Juniors learn from the review, so explain, do not just correct.</li>
<li>Follow-up: "A big PR arrives, what now?" Ask to split it, or review in a call with the author; for urgent cases agree on a risk-focused review and follow up.</li>
</ul>`,
        hi: `<ul>
<li>Style और compile problems linters, formatters और build पकड़ें; reviewers का ध्यान logic, edge cases, security, performance, naming पर लगे और इस पर कि tests regression पकड़ेंगे या नहीं।</li>
<li>Reviewers rotate करो, risky areas के लिए <code>CODEOWNERS</code> लगाओ, review turnaround की team expectation तय करो (जैसे एक working day में) ताकि PRs इंतज़ार न करें।</li>
<li>Tone: सवाल पूछो, reason दो, alternative सुझाओ, "हम" वाली भाषा रखो। Juniors review से सीखते हैं, इसलिए समझाओ, सिर्फ़ ठीक मत करो।</li>
<li>Follow-up: "बड़ा PR आ गया तो?" Split करने को कहो, या author के साथ call पर review करो; urgent case में risk-focused review पर सहमत होकर बाद में follow up करो।</li>
</ul>`,
        hg: `<ul>
<li>Style aur compile problems linters, formatters aur build pakdein; reviewers ka dhyaan logic, edge cases, security, performance, naming par lage aur is par ki tests regression pakdenge ya nahi.</li>
<li>Reviewers rotate karo, risky areas ke liye <code>CODEOWNERS</code> lagao, review turnaround ki team expectation tay karo (jaise ek working day mein) taaki PRs intezaar na karein.</li>
<li>Tone: sawaal poocho, reason do, alternative sujhao, "hum" wali bhasha rakho. Juniors review se seekhte hain, isliye samjhao, sirf theek mat karo.</li>
<li>Follow-up: "Bada PR aa gaya to?" Split karne ko kaho, ya author ke saath call par review karo; urgent case mein risk-focused review par sehmat hokar baad mein follow up karo.</li>
</ul>`
      }
    },
    {
      id: "pipeline-structure",
      depth: "short",
      q: "How is an Azure Pipelines YAML pipeline structured?",
      answer: "A pipeline has stages, a stage has jobs, a job has steps (scripts or tasks). Jobs run on agents from a pool; triggers start it, and dependsOn orders stages.",
      meaning: {
        hi: "Pipeline में stages, stage में jobs, job में steps (scripts या tasks)। Jobs pool के agents पर चलते हैं; triggers शुरू करते हैं, dependsOn stages का order तय करता है।",
        hg: "Pipeline mein stages, stage mein jobs, job mein steps (scripts ya tasks). Jobs pool ke agents par chalte hain; triggers shuru karte hain, dependsOn stages ka order tay karta hai."
      },
      explain: {
        en: `<ul>
<li>Stages run in order unless you use <code>dependsOn</code>; independent stages and jobs can run in parallel. Each job gets its own agent and a fresh workspace, so share files through <b>artifacts</b>.</li>
<li>A simple pipeline can skip <code>stages</code> and <code>jobs</code> and list only <code>steps</code>; the structure is added when you need it.</li>
<li><code>trigger</code> controls CI on pushes, <code>pr</code> controls PR validation for GitHub and Bitbucket repos (Azure Repos Git uses a Build validation branch policy), and <code>condition</code> can skip a stage (for example deploy only from main).</li>
<li>Follow-up: "Classic release pipelines vs YAML?" YAML lives in the repo, is reviewed like code, and covers build and deploy; new work should be YAML.</li>
</ul>`,
        hi: `<ul>
<li><code>dependsOn</code> न हो तो stages order में चलते हैं; independent stages और jobs parallel चल सकते हैं। हर job को अपना agent और fresh workspace मिलता है, इसलिए files <b>artifacts</b> से share करो।</li>
<li>Simple pipeline <code>stages</code> और <code>jobs</code> छोड़कर सिर्फ़ <code>steps</code> लिख सकती है; structure तब जोड़ो जब ज़रूरत हो।</li>
<li><code>trigger</code> push पर CI तय करता है, <code>pr</code> GitHub और Bitbucket repos में PR validation तय करता है (Azure Repos Git में Build validation branch policy), और <code>condition</code> किसी stage को skip कर सकती है (जैसे सिर्फ़ main से deploy)।</li>
<li>Follow-up: "Classic release pipelines बनाम YAML?" YAML repo में रहता है, code की तरह review होता है, और build व deploy दोनों cover करता है; नया काम YAML में हो।</li>
</ul>`,
        hg: `<ul>
<li><code>dependsOn</code> na ho to stages order mein chalte hain; independent stages aur jobs parallel chal sakte hain. Har job ko apna agent aur fresh workspace milta hai, isliye files <b>artifacts</b> se share karo.</li>
<li>Simple pipeline <code>stages</code> aur <code>jobs</code> chhodkar sirf <code>steps</code> likh sakti hai; structure tab jodo jab zaroorat ho.</li>
<li><code>trigger</code> push par CI tay karta hai, <code>pr</code> GitHub aur Bitbucket repos mein PR validation tay karta hai (Azure Repos Git mein Build validation branch policy), aur <code>condition</code> kisi stage ko skip kar sakti hai (jaise sirf main se deploy).</li>
<li>Follow-up: "Classic release pipelines vs YAML?" YAML repo mein rehta hai, code ki tarah review hota hai, aur build aur deploy dono cover karta hai; naya kaam YAML mein ho.</li>
</ul>`
      }
    },
    {
      id: "image-vs-container",
      depth: "short",
      q: "What is the difference between a Docker image and a container?",
      answer: "An image is a read-only, layered package of the app and its dependencies. A container is a running instance of an image with its own writable layer and process.",
      meaning: {
        hi: "Image app और dependencies का read-only, layered package है। Container image का चलता हुआ instance है, अपनी writable layer और process के साथ।",
        hg: "Image app aur dependencies ka read-only, layered package hai. Container image ka chalta hua instance hai, apni writable layer aur process ke saath."
      },
      explain: {
        en: `<ul>
<li>Class and object is a fair comparison: one image, many containers. Containers share the host kernel, so they start faster and are lighter than virtual machines (which carry a full guest OS).</li>
<li>Data written inside a container is lost when it is removed; keep state in volumes or external services.</li>
<li>Follow-up: "Why containers for .NET?" The same image runs on a laptop, test and prod, which removes "works on my machine" and gives a clean unit to scale and roll back.</li>
</ul>`,
        hi: `<ul>
<li>Class और object की तुलना ठीक है: एक image, कई containers। Containers host kernel share करते हैं, इसलिए virtual machines (जिनमें पूरा guest OS होता है) से तेज़ शुरू होते हैं और हल्के हैं।</li>
<li>Container के अंदर लिखा data container हटने पर चला जाता है; state volumes या external services में रखो।</li>
<li>Follow-up: "Containers .NET के लिए क्यों?" वही image laptop, test और prod पर चलती है, जिससे "मेरी machine पर चलता है" खत्म होता है और scale व rollback के लिए साफ़ unit मिलता है।</li>
</ul>`,
        hg: `<ul>
<li>Class aur object ki tulna theek hai: ek image, kai containers. Containers host kernel share karte hain, isliye virtual machines (jinmein poora guest OS hota hai) se tez shuru hote hain aur halke hain.</li>
<li>Container ke andar likha data container hatne par chala jaata hai; state volumes ya external services mein rakho.</li>
<li>Follow-up: "Containers .NET ke liye kyun?" Wahi image laptop, test aur prod par chalti hai, jisse "meri machine par chalta hai" khatam hota hai aur scale aur rollback ke liye saaf unit milta hai.</li>
</ul>`
      }
    },
    {
      id: "multi-stage-dockerfile",
      depth: "short",
      q: "Why use a multi-stage Dockerfile for a .NET app?",
      answer: "The SDK stage builds and publishes; the final stage copies only the published output onto the small ASP.NET runtime image. The result is smaller, faster to pull, and has less attack surface.",
      meaning: {
        hi: "SDK stage build और publish करता है; final stage सिर्फ़ published output को छोटी ASP.NET runtime image पर copy करता है। नतीजा: छोटी, तेज़ pull, कम attack surface।",
        hg: "SDK stage build aur publish karta hai; final stage sirf published output ko chhoti ASP.NET runtime image par copy karta hai. Nateeja: chhoti, tez pull, kam attack surface."
      },
      explain: {
        en: `<ul>
<li>The build stage keeps the SDK, source and build cache; none of it reaches the final image. Copy the <code>.csproj</code> and restore before copying source so the restore layer stays cached.</li>
<li>Pick the runtime image that matches your app: <code>aspnet</code> for web apps, <code>runtime</code> for console or worker apps.</li>
<li>Follow-up: "How do you make it even smaller and safer?" A chiseled image, a non-root user, and a <code>.dockerignore</code>.</li>
</ul>`,
        hi: `<ul>
<li>Build stage SDK, source और build cache रखता है; इनमें से कुछ भी final image तक नहीं पहुँचता। Source copy करने से पहले <code>.csproj</code> copy करके restore करो ताकि restore layer cached रहे।</li>
<li>अपनी app से मेल खाती runtime image चुनो: web apps के लिए <code>aspnet</code>, console या worker apps के लिए <code>runtime</code>।</li>
<li>Follow-up: "और छोटा और safe कैसे करोगे?" Chiseled image, non-root user और <code>.dockerignore</code>।</li>
</ul>`,
        hg: `<ul>
<li>Build stage SDK, source aur build cache rakhta hai; inmein se kuch bhi final image tak nahi pahunchta. Source copy karne se pehle <code>.csproj</code> copy karke restore karo taaki restore layer cached rahe.</li>
<li>Apni app se mel khaati runtime image chuno: web apps ke liye <code>aspnet</code>, console ya worker apps ke liye <code>runtime</code>.</li>
<li>Follow-up: "Aur chhota aur safe kaise karoge?" Chiseled image, non-root user aur <code>.dockerignore</code>.</li>
</ul>`
      }
    },
    {
      id: "build-once-deploy-many",
      depth: "short",
      q: "What does 'build once, deploy many' mean in CI/CD?",
      answer: "Build and test one immutable artifact, then promote that same artifact through dev, test and prod, changing only configuration. What you tested is exactly what you ship.",
      meaning: {
        hi: "एक immutable artifact build और test करो, फिर वही artifact dev, test और prod में promote करो, बस configuration बदलो। जो test किया वही ship होता है।",
        hg: "Ek immutable artifact build aur test karo, phir wahi artifact dev, test aur prod mein promote karo, bas configuration badlo. Jo test kiya wahi ship hota hai."
      },
      explain: {
        en: `<ul>
<li>Rebuilding per environment can pick up different packages or compiler output, so prod would run something nobody tested. One artifact (or one image with a version tag) removes that risk.</li>
<li>Configuration comes from the environment at deploy or run time: app settings, environment variables, Key Vault (Day 20), never baked into the artifact (Day 12).</li>
<li>Follow-up: "How do you know which build is in prod?" Version stamp, Git tag, build number, and the deployment history on the environment.</li>
</ul>`,
        hi: `<ul>
<li>हर environment के लिए rebuild करने पर अलग packages या compiler output आ सकता है, यानी prod पर वह चलेगा जिसे किसी ने test नहीं किया। एक artifact (या version tag वाली एक image) यह risk हटाता है।</li>
<li>Configuration deploy या run time पर environment से आती है: app settings, environment variables, Key Vault (Day 20), artifact में कभी baked नहीं (Day 12)।</li>
<li>Follow-up: "prod में कौन-सा build है कैसे पता चलता है?" Version stamp, Git tag, build number, और environment की deployment history से।</li>
</ul>`,
        hg: `<ul>
<li>Har environment ke liye rebuild karne par alag packages ya compiler output aa sakta hai, yaani prod par woh chalega jise kisi ne test nahi kiya. Ek artifact (ya version tag wali ek image) yeh risk hataata hai.</li>
<li>Configuration deploy ya run time par environment se aati hai: app settings, environment variables, Key Vault (Day 20), artifact mein kabhi baked nahi (Day 12).</li>
<li>Follow-up: "prod mein kaun-sa build hai kaise pata chalta hai?" Version stamp, Git tag, build number, aur environment ki deployment history se.</li>
</ul>`
      }
    },
    {
      id: "ff-merge-squash",
      depth: "detailed",
      q: "Fast-forward, merge commit and squash merge: what ends up in history?",
      answer: "Fast-forward gives a straight line with no merge commit; a merge commit adds a two-parent merge; squash lands one new commit without the branch's own commits.",
      meaning: {
        hi: "Fast-forward: सीधी line, branch commits के साथ, merge commit नहीं। Merge commit: branch commits plus दो parents वाला merge। Squash: एक नया commit, branch के अपने commits main में नहीं।",
        hg: "Fast-forward: seedhi line, branch commits ke saath, merge commit nahi. Merge commit: branch commits plus do parents wala merge. Squash: ek naya commit, branch ke apne commits main mein nahi."
      },
      explain: {
        en: `<ul>
<li>Fast-forward is possible only when main has not moved since the branch started; <code>--no-ff</code> forces a merge commit anyway so the branch stays visible. Puzzle 2 counts the commits for each.</li>
<li>Squash gives a tidy main (one commit per PR, easy to revert) but you lose the step-by-step history and <code>git blame</code> points at the squash commit.</li>
<li>Azure Repos and GitHub let you restrict which merge types a branch allows; teams usually pick one.</li>
</ul>`,
        hi: `<ul>
<li>Fast-forward तभी possible है जब branch शुरू होने के बाद main आगे न बढ़ा हो; <code>--no-ff</code> फिर भी merge commit बनवाता है ताकि branch दिखती रहे। Puzzle 2 हर एक के commits गिनता है।</li>
<li>Squash से main साफ़ रहता है (हर PR का एक commit, revert आसान) पर step-by-step history चली जाती है और <code>git blame</code> squash commit की तरफ़ इशारा करता है।</li>
<li>Azure Repos और GitHub में तय कर सकते हो कि branch कौन-से merge types allow करे; teams आमतौर पर एक चुनती हैं।</li>
</ul>`,
        hg: `<ul>
<li>Fast-forward tabhi possible hai jab branch shuru hone ke baad main aage na badha ho; <code>--no-ff</code> phir bhi merge commit banwata hai taaki branch dikhti rahe. Puzzle 2 har ek ke commits ginta hai.</li>
<li>Squash se main saaf rehta hai (har PR ka ek commit, revert aasaan) par step-by-step history chali jaati hai aur <code>git blame</code> squash commit ki taraf ishara karta hai.</li>
<li>Azure Repos aur GitHub mein tay kar sakte ho ki branch kaun-se merge types allow kare; teams aamtaur par ek chunti hain.</li>
</ul>`
      }
    },
    {
      id: "cherry-pick-reflog",
      depth: "detailed",
      q: "What is cherry-pick, and how does reflog save you after a mistake?",
      answer: "Cherry-pick copies one commit onto the current branch as a new commit, for example a hotfix back-port. Reflog records where HEAD used to point, so a lost commit can be found and restored.",
      meaning: {
        hi: "Cherry-pick एक commit को current branch पर नए commit के रूप में copy करता है, जैसे hotfix back-port। Reflog HEAD की पुरानी positions दर्ज करता है, इसलिए खोया commit मिल जाता है।",
        hg: "Cherry-pick ek commit ko current branch par naye commit ke roop mein copy karta hai, jaise hotfix back-port. Reflog HEAD ki purani positions darj karta hai, isliye khoya commit mil jaata hai."
      },
      explain: {
        en: `<ul>
<li>The copy has a different id and can conflict. Overusing cherry-pick makes branches drift, since the same change exists as two commits.</li>
<li>Reflog is local to your clone and entries expire (defaults: about 90 days for reachable commits and 30 for unreachable). It is not a backup of the remote.</li>
<li>Follow-up: "You did <code>reset --hard</code> and lost work." <code>git reflog</code>, find the id before the reset, <code>git reset --hard &lt;id&gt;</code> or create a branch there. Work that was never committed is not recoverable this way.</li>
</ul>`,
        hi: `<ul>
<li>Copy का id अलग होता है और conflict आ सकता है। Cherry-pick का ज़्यादा use branches को अलग-अलग बहा देता है, क्योंकि वही बदलाव दो commits बनकर रहता है।</li>
<li>Reflog तुम्हारे clone में local है और entries expire होती हैं (defaults: reachable commits के लिए लगभग 90 दिन, unreachable के लिए 30)। यह remote का backup नहीं है।</li>
<li>Follow-up: "तुमने <code>reset --hard</code> किया और काम खो गया।" <code>git reflog</code>, reset से पहले का id ढूँढो, <code>git reset --hard &lt;id&gt;</code> या वहाँ branch बनाओ। जो काम कभी commit ही नहीं हुआ वह इस तरह वापस नहीं आता।</li>
</ul>`,
        hg: `<ul>
<li>Copy ka id alag hota hai aur conflict aa sakta hai. Cherry-pick ka zyada use branches ko alag-alag baha deta hai, kyunki wahi badlaav do commits bankar rehta hai.</li>
<li>Reflog tumhare clone mein local hai aur entries expire hoti hain (defaults: reachable commits ke liye lagbhag 90 din, unreachable ke liye 30). Yeh remote ka backup nahi hai.</li>
<li>Follow-up: "Tumne <code>reset --hard</code> kiya aur kaam kho gaya." <code>git reflog</code>, reset se pehle ka id dhoondo, <code>git reset --hard &lt;id&gt;</code> ya wahan branch banao. Jo kaam kabhi commit hi nahi hua woh is tarah wapas nahi aata.</li>
</ul>`
      }
    },
    {
      id: "branch-policies-codeowners",
      depth: "detailed",
      q: "How do you protect the main branch?",
      answer: "Block direct pushes and require a PR with a minimum number of reviewers, a passing build, and resolved comments. Add CODEOWNERS or path-based required reviewers for sensitive code.",
      meaning: {
        hi: "Direct push block करो और PR माँगो: minimum reviewers, passing build, resolved comments। Sensitive code के लिए CODEOWNERS या path-based required reviewers जोड़ो।",
        hg: "Direct push block karo aur PR maango: minimum reviewers, passing build, resolved comments. Sensitive code ke liye CODEOWNERS ya path-based required reviewers jodo."
      },
      explain: {
        en: `<ul>
<li>Azure Repos: <b>branch policies</b> (minimum reviewers, build validation, comment resolution, linked work items, merge types, automatic reviewers by path). GitHub: <b>branch protection rules or rulesets</b> plus <code>CODEOWNERS</code>.</li>
<li>Require that new pushes reset approvals when the code changes materially, and consider requiring the author not to approve their own PR.</li>
<li>Do not make rules so heavy that people work around them; keep emergency access with an audit trail.</li>
<li>Follow-up: "What about hotfixes at 2 a.m.?" A documented fast path (reduced reviewers, post-hoc review) is better than disabling the policy.</li>
</ul>`,
        hi: `<ul>
<li>Azure Repos: <b>branch policies</b> (minimum reviewers, build validation, comment resolution, linked work items, merge types, path के हिसाब से automatic reviewers)। GitHub: <b>branch protection rules या rulesets</b> plus <code>CODEOWNERS</code>।</li>
<li>माँगो कि code में बड़ा बदलाव होने पर नए push से approvals reset हों, और सोचो कि author अपने PR को खुद approve न कर सके।</li>
<li>Rules इतने भारी मत करो कि लोग उनके आसपास से निकलने लगें; emergency access audit trail के साथ रखो।</li>
<li>Follow-up: "रात 2 बजे के hotfixes?" Policy बंद करने से बेहतर है documented fast path (कम reviewers, बाद में review)।</li>
</ul>`,
        hg: `<ul>
<li>Azure Repos: <b>branch policies</b> (minimum reviewers, build validation, comment resolution, linked work items, merge types, path ke hisaab se automatic reviewers). GitHub: <b>branch protection rules ya rulesets</b> plus <code>CODEOWNERS</code>.</li>
<li>Maango ki code mein bada badlaav hone par naye push se approvals reset hon, aur socho ki author apne PR ko khud approve na kar sake.</li>
<li>Rules itne bhaari mat karo ki log unke aaspaas se nikalne lagein; emergency access audit trail ke saath rakho.</li>
<li>Follow-up: "Raat 2 baje ke hotfixes?" Policy band karne se behtar hai documented fast path (kam reviewers, baad mein review).</li>
</ul>`
      }
    },
    {
      id: "hosted-vs-self-hosted-agents",
      depth: "detailed",
      q: "Microsoft-hosted or self-hosted agents: how do you choose?",
      answer: "Microsoft-hosted agents are maintained, fresh VMs per job, so they are the default. Choose self-hosted when you need private network access, special software, or more control over capacity.",
      meaning: {
        hi: "Microsoft-hosted agents maintained होते हैं, हर job के लिए fresh VM, इसलिए default हैं। Private network access, special software या capacity पर ज़्यादा control चाहिए तो self-hosted।",
        hg: "Microsoft-hosted agents maintained hote hain, har job ke liye fresh VM, isliye default hain. Private network access, special software ya capacity par zyada control chahiye to self-hosted."
      },
      explain: {
        en: `<ul>
<li>Hosted: nothing to patch, clean machine each time, but limited customization, parallel-job limits and no direct access to private networks (the middle options are Managed DevOps Pools, which can join your VNet, or scale set agents). Check current limits and pricing in the docs.</li>
<li>Self-hosted: your VMs or containers run the agent software, so you can reach private endpoints (a database in a VNet), keep caches between runs, and pick hardware. You patch, secure and scale them, and a shared long-lived machine can leak state between builds.</li>
<li>Follow-up: "Security concern?" Do not let untrusted PRs (for example from forks) run on self-hosted agents that can reach internal systems.</li>
</ul>`,
        hi: `<ul>
<li>Hosted: patch करने को कुछ नहीं, हर बार साफ़ machine, पर customization सीमित, parallel-job limits, और private networks तक सीधा access नहीं (बीच के options हैं Managed DevOps Pools, जो तुम्हारे VNet से जुड़ सकते हैं, या scale set agents)। Current limits और pricing docs में देखो।</li>
<li>Self-hosted: तुम्हारे VMs या containers agent software चलाते हैं, इसलिए private endpoints तक पहुँच सकते हो (VNet का database), runs के बीच caches रख सकते हो, और hardware चुन सकते हो। Patch, secure और scale तुम करते हो, और shared लंबी-उम्र वाली machine builds के बीच state leak कर सकती है।</li>
<li>Follow-up: "Security concern?" Untrusted PRs (जैसे forks से) को ऐसे self-hosted agents पर मत चलने दो जो internal systems तक पहुँच सकते हैं।</li>
</ul>`,
        hg: `<ul>
<li>Hosted: patch karne ko kuch nahi, har baar saaf machine, par customization seemit, parallel-job limits, aur private networks tak seedha access nahi (beech ke options hain Managed DevOps Pools, jo tumhare VNet se jud sakte hain, ya scale set agents). Current limits aur pricing docs mein dekho.</li>
<li>Self-hosted: tumhare VMs ya containers agent software chalate hain, isliye private endpoints tak pahunch sakte ho (VNet ka database), runs ke beech caches rakh sakte ho, aur hardware chun sakte ho. Patch, secure aur scale tum karte ho, aur shared lambi-umar wali machine builds ke beech state leak kar sakti hai.</li>
<li>Follow-up: "Security concern?" Untrusted PRs (jaise forks se) ko aise self-hosted agents par mat chalne do jo internal systems tak pahunch sakte hain.</li>
</ul>`
      }
    },
    {
      id: "secrets-in-pipelines",
      depth: "detailed",
      q: "How do you handle secrets in a pipeline?",
      answer: "Keep them out of the repo and YAML: use secret variables, Key Vault-linked variable groups or service connections, mask them in logs, and prefer managed identity so the app needs no stored secret at all.",
      meaning: {
        hi: "Repo और YAML से बाहर रखो: secret variables, Key Vault-linked variable groups या service connections, logs में masked, और managed identity को prefer करो ताकि app को कोई stored secret चाहिए ही नहीं।",
        hg: "Repo aur YAML se bahar rakho: secret variables, Key Vault-linked variable groups ya service connections, logs mein masked, aur managed identity ko prefer karo taaki app ko koi stored secret chahiye hi nahi."
      },
      explain: {
        en: `<ul>
<li>Azure Pipelines masks secret variable values in logs, but masking is best-effort; never print them or pass them in a way scripts could echo. Secret variables are not given to scripts automatically; map them with <code>env:</code>.</li>
<li>Limit who can edit the pipeline and which pipelines may use a service connection or variable group (approvals and checks on those resources).</li>
<li>Prefer workload identity or managed identity over long-lived client secrets; rotate the ones that remain (Day 20). Add a secret scanner to CI.</li>
<li>Follow-up: "A secret was committed." Treat it as leaked: rotate it first, then clean history if needed.</li>
</ul>`,
        hi: `<ul>
<li>Azure Pipelines logs में secret variable values mask करता है, पर masking best-effort है; उन्हें print मत करो या ऐसे pass मत करो कि scripts echo कर दें। Secret variables scripts को अपने-आप नहीं मिलते; <code>env:</code> से map करो।</li>
<li>सीमित करो कि कौन pipeline edit कर सकता है और कौन-से pipelines service connection या variable group use कर सकते हैं (उन resources पर approvals और checks)।</li>
<li>Long-lived client secrets की जगह workload identity या managed identity prefer करो; जो बचें उन्हें rotate करो (Day 20)। CI में secret scanner जोड़ो।</li>
<li>Follow-up: "Secret commit हो गया।" उसे leaked मानो: पहले rotate करो, फिर ज़रूरत हो तो history साफ़ करो।</li>
</ul>`,
        hg: `<ul>
<li>Azure Pipelines logs mein secret variable values mask karta hai, par masking best-effort hai; unhe print mat karo ya aise pass mat karo ki scripts echo kar dein. Secret variables scripts ko apne-aap nahi milte; <code>env:</code> se map karo.</li>
<li>Seemit karo ki kaun pipeline edit kar sakta hai aur kaun-se pipelines service connection ya variable group use kar sakte hain (un resources par approvals aur checks).</li>
<li>Long-lived client secrets ki jagah workload identity ya managed identity prefer karo; jo bachein unhe rotate karo (Day 20). CI mein secret scanner jodo.</li>
<li>Follow-up: "Secret commit ho gaya." Use leaked mano: pehle rotate karo, phir zaroorat ho to history saaf karo.</li>
</ul>`
      }
    },
    {
      id: "templates-and-extends",
      depth: "detailed",
      q: "What are pipeline templates, and how does 'extends' help a platform team?",
      answer: "Templates reuse steps, jobs or stages with parameters. An extends template defines a required pipeline shape; to enforce it, add a Required template check on the protected resource, such as an environment or service connection.",
      meaning: {
        hi: "Templates parameters के साथ steps, jobs या stages reuse करते हैं। Extends template ज़रूरी pipeline shape तय करता है; इसे लागू कराने के लिए environment या service connection जैसे protected resource पर Required template check लगाओ।",
        hg: "Templates parameters ke saath steps, jobs ya stages reuse karte hain. Extends template zaroori pipeline shape tay karta hai; ise lagu karwane ke liye environment ya service connection jaise protected resource par Required template check lagao."
      },
      explain: {
        en: `<ul>
<li>Include templates insert content (<code>- template: file.yml</code>); extends templates control the whole structure. Templates can live in another repo and be pinned to a tag.</li>
<li>Template expressions are expanded when the pipeline is compiled, before it runs; runtime variables are not all available there. There are limits on template nesting and file count, so keep structure simple.</li>
<li>Three syntaxes, three moments: <code>\${{ }}</code> is compile time (template expansion and parameters); <code>$(var)</code> is a macro replaced just before a task runs; <code>$[ ]</code> is a runtime expression (conditions, and output variables from other jobs).</li>
<li>Follow-up: "Risks of shared templates?" A change affects every consumer, so version them (pin by tag) and test changes on a sample pipeline.</li>
</ul>`,
        hi: `<ul>
<li>Include templates content insert करते हैं (<code>- template: file.yml</code>); extends templates पूरा structure control करते हैं। Templates दूसरे repo में रह सकते हैं और tag पर pin हो सकते हैं।</li>
<li>Template expressions pipeline compile होते समय expand होते हैं, चलने से पहले; runtime variables वहाँ सब available नहीं होते। Template nesting और file count पर limits हैं, इसलिए structure simple रखो।</li>
<li>तीन syntaxes, तीन moments: <code>\${{ }}</code> compile time है (template expansion और parameters); <code>$(var)</code> macro है जो task चलने से ठीक पहले replace होता है; <code>$[ ]</code> runtime expression है (conditions, और दूसरे jobs के output variables)।</li>
<li>Follow-up: "Shared templates के risks?" एक बदलाव हर consumer पर असर करता है, इसलिए version दो (tag से pin) और बदलाव sample pipeline पर test करो।</li>
</ul>`,
        hg: `<ul>
<li>Include templates content insert karte hain (<code>- template: file.yml</code>); extends templates poora structure control karte hain. Templates doosre repo mein reh sakte hain aur tag par pin ho sakte hain.</li>
<li>Template expressions pipeline compile hote samay expand hote hain, chalne se pehle; runtime variables wahan sab available nahi hote. Template nesting aur file count par limits hain, isliye structure simple rakho.</li>
<li>Teen syntaxes, teen moments: <code>\${{ }}</code> compile time hai (template expansion aur parameters); <code>$(var)</code> macro hai jo task chalne se theek pehle replace hota hai; <code>$[ ]</code> runtime expression hai (conditions, aur dusre jobs ke output variables).</li>
<li>Follow-up: "Shared templates ke risks?" Ek badlaav har consumer par asar karta hai, isliye version do (tag se pin) aur badlaav sample pipeline par test karo.</li>
</ul>`
      }
    },
    {
      id: "environments-approvals-strategies",
      depth: "detailed",
      q: "What do environments, approvals and deployment strategies give you in Azure Pipelines?",
      answer: "An environment is a deployment target with history and optional approvals and checks. Deployment jobs add strategies: runOnce, rolling (VM targets) and canary, each with lifecycle hooks and on-failure steps.",
      meaning: {
        hi: "Environment history और optional approvals व checks वाला deployment target है। Deployment jobs strategies जोड़ते हैं: runOnce, rolling (VM targets) और canary, हर एक lifecycle hooks और on-failure steps के साथ।",
        hg: "Environment history aur optional approvals va checks wala deployment target hai. Deployment jobs strategies jodte hain: runOnce, rolling (VM targets) aur canary, har ek lifecycle hooks aur on-failure steps ke saath."
      },
      explain: {
        en: `<ul>
<li>Approvals and checks (approvers, branch control, business hours, an Azure Monitor check and others) are configured on the resource (environment, service connection), not in YAML. They run only for jobs that use that resource, so protect the service connection too, or a job can bypass them.</li>
<li><code>runOnce</code> runs the hooks once; <code>rolling</code> updates VM targets in batches (<code>maxParallel</code>); <code>canary</code> goes through increments such as 10 then 20 percent while you watch health (the docs example targets Kubernetes).</li>
<li>For App Service, the slot swap from Day 20 often replaces the need for these strategies.</li>
<li>Follow-up: "Where does rollback live?" In the <code>on: failure</code> hook or by redeploying the previous artifact.</li>
</ul>`,
        hi: `<ul>
<li>Approvals और checks (approvers, branch control, business hours, Azure Monitor check वगैरह) resource (environment, service connection) पर configure होते हैं, YAML में नहीं। वे सिर्फ़ उन jobs के लिए चलते हैं जो उस resource को use करते हैं, इसलिए service connection भी protect करो, वरना कोई job उन्हें bypass कर सकता है।</li>
<li><code>runOnce</code> hooks एक बार चलाता है; <code>rolling</code> VM targets को batches में update करता है (<code>maxParallel</code>); <code>canary</code> increments से गुज़रता है जैसे 10 फिर 20 percent, जबकि तुम health देखते हो (docs का example Kubernetes पर है)।</li>
<li>App Service के लिए Day 20 का slot swap अक्सर इन strategies की ज़रूरत हटा देता है।</li>
<li>Follow-up: "Rollback कहाँ रहता है?" <code>on: failure</code> hook में, या पिछला artifact दोबारा deploy करके।</li>
</ul>`,
        hg: `<ul>
<li>Approvals aur checks (approvers, branch control, business hours, Azure Monitor check waghera) resource (environment, service connection) par configure hote hain, YAML mein nahi. Woh sirf un jobs ke liye chalte hain jo us resource ko use karte hain, isliye service connection bhi protect karo, warna koi job unhe bypass kar sakta hai.</li>
<li><code>runOnce</code> hooks ek baar chalata hai; <code>rolling</code> VM targets ko batches mein update karta hai (<code>maxParallel</code>); <code>canary</code> increments se guzarta hai jaise 10 phir 20 percent, jabki tum health dekhte ho (docs ka example Kubernetes par hai).</li>
<li>App Service ke liye Day 20 ka slot swap aksar in strategies ki zaroorat hata deta hai.</li>
<li>Follow-up: "Rollback kahan rehta hai?" <code>on: failure</code> hook mein, ya pichhla artifact dobara deploy karke.</li>
</ul>`
      }
    },
    {
      id: "docker-layer-caching",
      depth: "detailed",
      q: "How does Docker layer caching work, and how do you order a Dockerfile for it?",
      answer: "Each instruction is a layer, reused only if it and all earlier layers are unchanged. Put rarely changing steps first, like copying the csproj and restoring, and frequently changing source later.",
      meaning: {
        hi: "हर instruction एक layer है, जो तभी reuse होती है जब वह और उसके पहले की सब layers unchanged हों। कम बदलने वाले steps पहले रखो (csproj copy और restore), ज़्यादा बदलने वाला source बाद में।",
        hg: "Har instruction ek layer hai, jo tabhi reuse hoti hai jab woh aur uske pehle ki sab layers unchanged hon. Kam badalne wale steps pehle rakho (csproj copy aur restore), zyada badalne wala source baad mein."
      },
      explain: {
        en: `<ul>
<li>A changed layer invalidates every layer after it. Puzzle 3 simulates the bad layout (a code edit rebuilds restore) and the good layout (only the later layers rebuild).</li>
<li><code>.dockerignore</code> matters for cache too: a changing file in the build context (like <code>bin</code> or a log) can invalidate <code>COPY . .</code> needlessly.</li>
<li>CI agents are often fresh machines with an empty cache, so use the build system's cache support or a registry cache to benefit.</li>
<li>Follow-up: "Why combine commands in one <code>RUN</code>?" Fewer layers and no leftovers; a file deleted in a later layer still exists in the earlier one.</li>
</ul>`,
        hi: `<ul>
<li>बदली हुई layer अपने बाद की हर layer को invalidate करती है। Puzzle 3 bad layout (code edit से restore दोबारा चलता है) और good layout (सिर्फ़ बाद की layers rebuild) simulate करता है।</li>
<li><code>.dockerignore</code> cache के लिए भी मायने रखता है: build context की बदलती file (जैसे <code>bin</code> या log) बेवजह <code>COPY . .</code> को invalidate कर सकती है।</li>
<li>CI agents अक्सर fresh machines होते हैं जिनका cache खाली होता है, इसलिए फ़ायदे के लिए build system का cache support या registry cache use करो।</li>
<li>Follow-up: "commands को एक <code>RUN</code> में क्यों जोड़ते हैं?" कम layers और कोई बचा हुआ कचरा नहीं; बाद की layer में delete की गई file पहले वाली layer में तब भी रहती है।</li>
</ul>`,
        hg: `<ul>
<li>Badli hui layer apne baad ki har layer ko invalidate karti hai. Puzzle 3 bad layout (code edit se restore dobara chalta hai) aur good layout (sirf baad ki layers rebuild) simulate karta hai.</li>
<li><code>.dockerignore</code> cache ke liye bhi matter karta hai: build context ki badalti file (jaise <code>bin</code> ya log) bewajah <code>COPY . .</code> ko invalidate kar sakti hai.</li>
<li>CI agents aksar fresh machines hote hain jinka cache khaali hota hai, isliye faayde ke liye build system ka cache support ya registry cache use karo.</li>
<li>Follow-up: "commands ko ek <code>RUN</code> mein kyun jodte hain?" Kam layers aur koi bacha hua kachra nahi; baad ki layer mein delete ki gayi file pehle wali layer mein tab bhi rehti hai.</li>
</ul>`
      }
    },
    {
      id: "non-root-and-chiseled",
      depth: "detailed",
      q: "Why run containers as non-root, and what are chiseled images?",
      answer: "A non-root process limits damage if the app is compromised. Chiseled images are minimal Ubuntu-based images with no shell or package manager, non-root by default, so they are smaller and safer.",
      meaning: {
        hi: "Non-root process से app compromise होने पर नुकसान सीमित रहता है। Chiseled images minimal Ubuntu-based images हैं, बिना shell या package manager के, default से non-root, इसलिए छोटी और safer।",
        hg: "Non-root process se app compromise hone par nuksaan seemit rehta hai. Chiseled images minimal Ubuntu-based images hain, bina shell ya package manager ke, default se non-root, isliye chhoti aur safer."
      },
      explain: {
        en: `<ul>
<li>.NET 8 and later Microsoft images include a user <code>app</code> and an <code>APP_UID</code> variable; add <code>USER $APP_UID</code> in the Dockerfile (default tags still start as root). The default port is 8080, which non-root can bind.</li>
<li>Chiseled images like <code>mcr.microsoft.com/dotnet/aspnet:10.0-noble-chiseled</code> have no shell, so you cannot <code>RUN</code> shell commands in the final stage or open a shell to debug; use logs, metrics, and a debug sidecar or a separate non-chiseled debug image if you must.</li>
<li>Also: scan images for vulnerabilities, keep base images updated, and run with a read-only file system where the app allows.</li>
<li>Follow-up: "File permission errors after switching to non-root?" Write only to paths the user can write (a mounted volume or <code>/tmp</code>).</li>
</ul>`,
        hi: `<ul>
<li>.NET 8 और बाद के Microsoft images में user <code>app</code> और <code>APP_UID</code> variable होता है; Dockerfile में <code>USER $APP_UID</code> जोड़ो (default tags फिर भी root से शुरू होते हैं)। Default port 8080 है, जिसे non-root bind कर सकता है।</li>
<li><code>mcr.microsoft.com/dotnet/aspnet:10.0-noble-chiseled</code> जैसी chiseled images में shell नहीं होता, इसलिए final stage में shell commands <code>RUN</code> नहीं कर सकते या debug के लिए shell नहीं खोल सकते; logs, metrics और debug sidecar या अलग non-chiseled debug image use करो।</li>
<li>साथ ही: images को vulnerabilities के लिए scan करो, base images update रखो, और जहाँ app allow करे वहाँ read-only file system के साथ चलाओ।</li>
<li>Follow-up: "non-root पर जाने के बाद file permission errors?" सिर्फ़ उन paths पर लिखो जहाँ user लिख सके (mounted volume या <code>/tmp</code>)।</li>
</ul>`,
        hg: `<ul>
<li>.NET 8 aur baad ke Microsoft images mein user <code>app</code> aur <code>APP_UID</code> variable hota hai; Dockerfile mein <code>USER $APP_UID</code> jodo (default tags phir bhi root se shuru hote hain). Default port 8080 hai, jise non-root bind kar sakta hai.</li>
<li><code>mcr.microsoft.com/dotnet/aspnet:10.0-noble-chiseled</code> jaisi chiseled images mein shell nahi hota, isliye final stage mein shell commands <code>RUN</code> nahi kar sakte ya debug ke liye shell nahi khol sakte; logs, metrics aur debug sidecar ya alag non-chiseled debug image use karo.</li>
<li>Saath hi: images ko vulnerabilities ke liye scan karo, base images update rakho, aur jahan app allow kare wahan read-only file system ke saath chalao.</li>
<li>Follow-up: "non-root par jaane ke baad file permission errors?" Sirf un paths par likho jahan user likh sake (mounted volume ya <code>/tmp</code>).</li>
</ul>`
      }
    },
    {
      id: "db-migrations-in-pipeline",
      depth: "detailed",
      q: "How do you apply EF Core database migrations safely in a pipeline?",
      answer: "Generate an idempotent SQL script or a migration bundle in the build, review it, and run it as a deployment step with a least-privilege identity. Keep changes backward-compatible so old code still works during rollout.",
      meaning: {
        hi: "Build में idempotent SQL script या migration bundle बनाओ, review करो, और least-privilege identity से deployment step में चलाओ। Changes backward-compatible रखो ताकि rollout में पुराना code भी चले।",
        hg: "Build mein idempotent SQL script ya migration bundle banao, review karo, aur least-privilege identity se deployment step mein chalao. Changes backward-compatible rakho taaki rollout mein purana code bhi chale."
      },
      explain: {
        en: `<ul>
<li>This follows Day 5: avoid calling <code>Database.Migrate()</code> at app startup in production (several instances race, and the app needs schema-change rights).</li>
<li><b>Expand and contract:</b> release 1 adds the new column (nullable), release 2 writes both and backfills, release 3 reads the new one, a later release drops the old one. Then a rollback of the app never hits a missing column.</li>
<li>Take a backup or snapshot before risky changes; test the script on a production-like copy; destructive changes get extra review.</li>
<li>Follow-up: "Migration failed halfway?" An idempotent script that is re-runnable plus transactions where the engine supports them; fix forward is often safer than undo.</li>
</ul>`,
        hi: `<ul>
<li>यह Day 5 से जुड़ता है: production में app startup पर <code>Database.Migrate()</code> मत बुलाओ (कई instances race करते हैं, और app को schema-change rights चाहिए)।</li>
<li><b>Expand and contract:</b> release 1 नया column जोड़ता है (nullable), release 2 दोनों में लिखता है और backfill करता है, release 3 नया वाला पढ़ता है, बाद की release पुराना हटाती है। फिर app का rollback कभी missing column से नहीं टकराता।</li>
<li>Risky changes से पहले backup या snapshot लो; script को production जैसी copy पर test करो; destructive changes की extra review हो।</li>
<li>Follow-up: "Migration बीच में fail हो गया?" Re-runnable idempotent script plus जहाँ engine support करे वहाँ transactions; undo से अक्सर fix forward ज़्यादा safe है।</li>
</ul>`,
        hg: `<ul>
<li>Yeh Day 5 se judta hai: production mein app startup par <code>Database.Migrate()</code> mat bulao (kai instances race karte hain, aur app ko schema-change rights chahiye).</li>
<li><b>Expand and contract:</b> release 1 naya column jodta hai (nullable), release 2 dono mein likhta hai aur backfill karta hai, release 3 naya wala padhta hai, baad ki release purana hatati hai. Phir app ka rollback kabhi missing column se nahi takraata.</li>
<li>Risky changes se pehle backup ya snapshot lo; script ko production jaisi copy par test karo; destructive changes ki extra review ho.</li>
<li>Follow-up: "Migration beech mein fail ho gaya?" Re-runnable idempotent script plus jahan engine support kare wahan transactions; undo se aksar fix forward zyada safe hai.</li>
</ul>`
      }
    },
    {
      id: "rollback-strategy",
      depth: "detailed",
      q: "A release is failing in production. How do you roll back?",
      answer: "Stop the damage first: switch off the feature flag, swap the slot back, or redeploy the previous artifact. Then investigate, and fix forward with a tested change or revert the commit.",
      meaning: {
        hi: "पहले नुकसान रोको: feature flag बंद, slot वापस swap, या पिछला artifact redeploy। फिर जाँच करो, और tested change से fix forward करो या commit revert करो।",
        hg: "Pehle nuksaan roko: feature flag band, slot wapas swap, ya pichhla artifact redeploy. Phir jaanch karo, aur tested change se fix forward karo ya commit revert karo."
      },
      explain: {
        en: `<ul>
<li>Fastest to slowest: feature flag off (seconds), slot swap back (quick, Day 20), redeploy previous artifact (minutes), code revert and full pipeline (longest). This is why you keep old artifacts and build once.</li>
<li>Database changes are the limit: a backward-compatible schema lets the old app version run against the new database.</li>
<li>Afterwards: a short blameless post-mortem, add the missing test or alert. Track recovery time, since DORA's failed deployment recovery time measures exactly this.</li>
<li>Follow-up: "Who decides to roll back?" Define it in advance: on-call engineer can roll back immediately without asking, and discuss after.</li>
</ul>`,
        hi: `<ul>
<li>सबसे तेज़ से धीमे तक: feature flag off (seconds), slot swap वापस (quick, Day 20), पिछला artifact redeploy (minutes), code revert और पूरी pipeline (सबसे लंबा)। इसीलिए पुराने artifacts रखते हैं और build once करते हैं।</li>
<li>Database changes सीमा हैं: backward-compatible schema से पुराना app version नए database पर चल सकता है।</li>
<li>बाद में: छोटा blameless post-mortem, छूटा हुआ test या alert जोड़ो। Recovery time track करो, क्योंकि DORA का failed deployment recovery time यही नापता है।</li>
<li>Follow-up: "rollback कौन तय करता है?" पहले से तय करो: on-call engineer बिना पूछे तुरंत rollback कर सकता है, और बात बाद में।</li>
</ul>`,
        hg: `<ul>
<li>Sabse tez se dheeme tak: feature flag off (seconds), slot swap wapas (quick, Day 20), pichhla artifact redeploy (minutes), code revert aur poori pipeline (sabse lamba). Isiliye purane artifacts rakhte hain aur build once karte hain.</li>
<li>Database changes seema hain: backward-compatible schema se purana app version naye database par chal sakta hai.</li>
<li>Baad mein: chhota blameless post-mortem, chhoota hua test ya alert jodo. Recovery time track karo, kyunki DORA ka failed deployment recovery time yahi naapta hai.</li>
<li>Follow-up: "rollback kaun tay karta hai?" Pehle se tay karo: on-call engineer bina poochhe turant rollback kar sakta hai, aur baat baad mein.</li>
</ul>`
      }
    },
    {
      id: "dora-metrics",
      depth: "detailed",
      q: "What are the DORA metrics and how would you use them as a Tech Lead?",
      answer: "DORA tracks deployment frequency, change lead time and failed deployment recovery time (throughput), plus change fail rate and deployment rework rate (instability). I use them to spot team bottlenecks, not to rank people.",
      meaning: {
        hi: "DORA: deployment frequency, change lead time, failed deployment recovery time (throughput), और change fail rate, deployment rework rate (instability)। Team के bottlenecks ढूँढने के लिए, लोगों को rank करने के लिए नहीं।",
        hg: "DORA: deployment frequency, change lead time, failed deployment recovery time (throughput), aur change fail rate, deployment rework rate (instability). Team ke bottlenecks dhoondhne ke liye, logon ko rank karne ke liye nahi."
      },
      explain: {
        en: `<ul>
<li>Older material lists four metrics (the failed-recovery one was called time to restore service); the current DORA guide lists five, grouped as throughput and instability.</li>
<li>Examples of use: long lead time points at slow reviews or manual approvals; high change fail rate points at weak tests; slow recovery points at poor monitoring or rollback.</li>
<li>Measure per team and service, watch the trend, and pair speed metrics with stability metrics so one is not gamed at the cost of the other.</li>
<li>Follow-up: "Management wants a target number." Explain that targets on a metric invite gaming; use them as conversation starters about the delivery system.</li>
</ul>`,
        hi: `<ul>
<li>पुराने material में चार metrics मिलते हैं (failed-recovery वाले को time to restore service कहते थे); current DORA guide पाँच बताती है, throughput और instability में बँटे हुए।</li>
<li>Use के examples: लंबा lead time धीमी reviews या manual approvals की तरफ़ इशारा करता है; ऊँचा change fail rate कमज़ोर tests की तरफ़; धीमी recovery खराब monitoring या rollback की तरफ़।</li>
<li>Team और service के हिसाब से नापो, trend देखो, और speed metrics को stability metrics के साथ रखो ताकि एक दूसरे की कीमत पर gaming न हो।</li>
<li>Follow-up: "Management को target number चाहिए।" समझाओ कि metric पर target gaming बुलाता है; उन्हें delivery system पर बातचीत शुरू करने के लिए use करो।</li>
</ul>`,
        hg: `<ul>
<li>Purane material mein chaar metrics milte hain (failed-recovery wale ko time to restore service kehte the); current DORA guide paanch batati hai, throughput aur instability mein banti hui.</li>
<li>Use ke examples: lamba lead time dheemi reviews ya manual approvals ki taraf ishara karta hai; ooncha change fail rate kamzor tests ki taraf; dheemi recovery kharab monitoring ya rollback ki taraf.</li>
<li>Team aur service ke hisaab se naapo, trend dekho, aur speed metrics ko stability metrics ke saath rakho taaki ek doosre ki keemat par gaming na ho.</li>
<li>Follow-up: "Management ko target number chahiye." Samjhao ki metric par target gaming bulata hai; unhe delivery system par baatcheet shuru karne ke liye use karo.</li>
</ul>`
      }
    }
  ],
  puzzles: [
    {
      id: "semver-precedence",
      src: `// SemVer 2.0.0 precedence: compare major.minor.patch, then pre-release identifiers; build metadata is ignored.
var versions = new[]
{
    "1.0.0", "1.0.0-rc.1", "1.0.0-beta.11", "1.0.0-alpha.beta", "1.0.0-beta",
    "1.0.0-alpha.1", "1.0.0-alpha", "1.0.0-beta.2", "0.9.9+build.7", "1.0.0+exp.sha.5114f85"
};
var comparer = new SemVerComparer();
var sorted = versions.OrderBy(v => v, comparer).ToList();
foreach (var v in sorted) Console.WriteLine(v);
Console.WriteLine($"equal: {comparer.Compare("1.0.0", "1.0.0+exp.sha.5114f85") == 0}");

class SemVerComparer : IComparer<string>
{
    public int Compare(string? a, string? b)
    {
        var (coreA, preA) = Split(a!);
        var (coreB, preB) = Split(b!);
        for (var i = 0; i < 3; i++)
        {
            var c = coreA[i].CompareTo(coreB[i]);
            if (c != 0) return c;
        }
        if (preA.Length == 0 && preB.Length == 0) return 0;
        if (preA.Length == 0) return 1;   // a release is higher than any of its pre-releases
        if (preB.Length == 0) return -1;
        for (var i = 0; i < Math.Min(preA.Length, preB.Length); i++)
        {
            var c = CompareIdentifier(preA[i], preB[i]);
            if (c != 0) return c;
        }
        return preA.Length.CompareTo(preB.Length); // more identifiers = higher when all earlier ones are equal
    }

    static int CompareIdentifier(string x, string y)
    {
        var xNum = int.TryParse(x, out var xn);
        var yNum = int.TryParse(y, out var yn);
        if (xNum && yNum) return xn.CompareTo(yn);
        if (xNum) return -1;              // numeric identifiers are lower than alphanumeric ones
        if (yNum) return 1;
        return string.CompareOrdinal(x, y);
    }

    static (int[] Core, string[] Pre) Split(string v)
    {
        v = v.Split('+')[0];
        var dash = v.IndexOf('-');
        var core = (dash < 0 ? v : v[..dash]).Split('.').Select(int.Parse).ToArray();
        var pre = dash < 0 ? Array.Empty<string>() : v[(dash + 1)..].Split('.');
        return (core, pre);
    }
}`,
      answer: `0.9.9+build.7
1.0.0-alpha
1.0.0-alpha.1
1.0.0-alpha.beta
1.0.0-beta
1.0.0-beta.2
1.0.0-beta.11
1.0.0-rc.1
1.0.0
1.0.0+exp.sha.5114f85
equal: True`,
      explain: {
        en: `<p>SemVer precedence compares major, minor and patch as numbers. If those are equal, a version <b>with</b> a pre-release is lower than the plain release, so <code>1.0.0-rc.1</code> sorts before <code>1.0.0</code>. Pre-release identifiers are compared one by one: numbers compare numerically (<code>beta.2</code> before <code>beta.11</code>, which a plain string sort gets wrong), numeric identifiers are lower than text ones (<code>alpha.1</code> before <code>alpha.beta</code>), and when all shared identifiers are equal the longer list is higher (<code>alpha</code> before <code>alpha.1</code>). Build metadata after <code>+</code> is ignored, so <code>1.0.0</code> equals <code>1.0.0+exp.sha.5114f85</code>; the sort is stable, so those two keep their input order.</p>`,
        hi: `<p>SemVer precedence major, minor और patch को numbers की तरह compare करता है। अगर ये बराबर हों तो pre-release <b>वाला</b> version सादे release से छोटा होता है, इसलिए <code>1.0.0-rc.1</code>, <code>1.0.0</code> से पहले आता है। Pre-release identifiers एक-एक करके compare होते हैं: numbers numerically compare होते हैं (<code>beta.2</code>, <code>beta.11</code> से पहले, जो सादा string sort गलत करता है), numeric identifiers text वालों से छोटे हैं (<code>alpha.1</code>, <code>alpha.beta</code> से पहले), और सारे common identifiers बराबर हों तो लंबी list बड़ी है (<code>alpha</code>, <code>alpha.1</code> से पहले)। <code>+</code> के बाद का build metadata ignore होता है, इसलिए <code>1.0.0</code>, <code>1.0.0+exp.sha.5114f85</code> के बराबर है; sort stable है, इसलिए वे दोनों input order में ही रहते हैं।</p>`,
        hg: `<p>SemVer precedence major, minor aur patch ko numbers ki tarah compare karta hai. Agar ye barabar hon to pre-release <b>wala</b> version saade release se chhota hota hai, isliye <code>1.0.0-rc.1</code>, <code>1.0.0</code> se pehle aata hai. Pre-release identifiers ek-ek karke compare hote hain: numbers numerically compare hote hain (<code>beta.2</code>, <code>beta.11</code> se pehle, jo saada string sort galat karta hai), numeric identifiers text walon se chhote hain (<code>alpha.1</code>, <code>alpha.beta</code> se pehle), aur saare common identifiers barabar hon to lambi list badi hai (<code>alpha</code>, <code>alpha.1</code> se pehle). <code>+</code> ke baad ka build metadata ignore hota hai, isliye <code>1.0.0</code>, <code>1.0.0+exp.sha.5114f85</code> ke barabar hai; sort stable hai, isliye woh dono input order mein hi rehte hain.</p>`
      }
    },
    {
      id: "ff-vs-merge-vs-squash",
      src: `// How three ways of integrating a feature branch change history. Commit = id + parents.
foreach (var strategy in new[] { "fast-forward", "merge commit (--no-ff)", "squash" })
{
    var commits = new Dictionary<string, string[]>
    {
        ["A"] = [], ["B"] = ["A"], ["C"] = ["B"],        // main: A <- B <- C
        ["F1"] = ["C"], ["F2"] = ["F1"],                 // feature branched at C
    };
    var main = "C";
    switch (strategy)
    {
        case "fast-forward":
            main = "F2";                                 // main only moves its pointer
            break;
        case "merge commit (--no-ff)":
            commits["M"] = ["C", "F2"];                  // two parents
            main = "M";
            break;
        case "squash":
            commits["S"] = ["C"];                        // one new commit, one parent
            main = "S";
            break;
    }
    var reachable = Walk(commits, main);
    var merges = reachable.Count(id => commits[id].Length > 1);
    Console.WriteLine($"{strategy}: tip={main}, commits={reachable.Count}, merges={merges}, F1 in history={reachable.Contains("F1")}");
}

static HashSet<string> Walk(Dictionary<string, string[]> g, string tip)
{
    var seen = new HashSet<string>();
    var stack = new Stack<string>([tip]);
    while (stack.Count > 0)
    {
        var id = stack.Pop();
        if (!seen.Add(id)) continue;
        foreach (var p in g[id]) stack.Push(p);
    }
    return seen;
}`,
      answer: `fast-forward: tip=F2, commits=5, merges=0, F1 in history=True
merge commit (--no-ff): tip=M, commits=6, merges=1, F1 in history=True
squash: tip=S, commits=4, merges=0, F1 in history=False`,
      explain: {
        en: `<p>Main starts as A, B, C and the feature branch adds F1, F2 on top of C. <b>Fast-forward</b> only moves main to F2: five commits, no merge commit. <b>Merge commit</b> adds M with two parents (C and F2): six commits, one merge. <b>Squash</b> adds one new commit S whose only parent is C; F1 and F2 are not reachable from main, so main has four commits and <code>F1 in history</code> is False. The walk counts what is reachable from the tip, which is what <code>git log</code> shows.</p>`,
        hi: `<p>Main शुरू में A, B, C है और feature branch C के ऊपर F1, F2 जोड़ती है। <b>Fast-forward</b> बस main को F2 तक ले जाता है: पाँच commits, merge commit नहीं। <b>Merge commit</b> दो parents (C और F2) वाला M जोड़ता है: छह commits, एक merge। <b>Squash</b> एक नया commit S जोड़ता है जिसका अकेला parent C है; F1 और F2 main से reachable नहीं हैं, इसलिए main में चार commits हैं और <code>F1 in history</code> False है। Walk tip से reachable commits गिनता है, यही <code>git log</code> दिखाता है।</p>`,
        hg: `<p>Main shuru mein A, B, C hai aur feature branch C ke upar F1, F2 jodti hai. <b>Fast-forward</b> bas main ko F2 tak le jaata hai: paanch commits, merge commit nahi. <b>Merge commit</b> do parents (C aur F2) wala M jodta hai: chhe commits, ek merge. <b>Squash</b> ek naya commit S jodta hai jiska akela parent C hai; F1 aur F2 main se reachable nahi hain, isliye main mein chaar commits hain aur <code>F1 in history</code> False hai. Walk tip se reachable commits ginta hai, yahi <code>git log</code> dikhata hai.</p>`
      }
    },
    {
      id: "docker-layer-cache",
      src: `// Docker layer cache model: a layer is reused only if its instruction, its inputs and ALL layers before it are unchanged.
var badLayout = new[]
{
    new Layer("FROM sdk:10.0", ["base"]),
    new Layer("COPY . .", ["App.csproj", "Program.cs"]),
    new Layer("RUN dotnet restore", []),
    new Layer("RUN dotnet publish", []),
};
var goodLayout = new[]
{
    new Layer("FROM sdk:10.0", ["base"]),
    new Layer("COPY App.csproj .", ["App.csproj"]),
    new Layer("RUN dotnet restore", []),
    new Layer("COPY . .", ["App.csproj", "Program.cs"]),
    new Layer("RUN dotnet publish", []),
};

var before = new Dictionary<string, int> { ["base"] = 1, ["App.csproj"] = 1, ["Program.cs"] = 1 };
var editCode = new Dictionary<string, int>(before) { ["Program.cs"] = 2 };
var editPackages = new Dictionary<string, int>(before) { ["App.csproj"] = 2 };

Report("bad layout, edit Program.cs", badLayout, before, editCode);
Report("good layout, edit Program.cs", goodLayout, before, editCode);
Report("good layout, edit App.csproj", goodLayout, before, editPackages);

static void Report(string title, Layer[] layers, Dictionary<string, int> oldFiles, Dictionary<string, int> newFiles)
{
    var oldKeys = Keys(layers, oldFiles);
    var newKeys = Keys(layers, newFiles);
    var rebuilt = 0;
    Console.WriteLine(title);
    for (var i = 0; i < layers.Length; i++)
    {
        var cached = oldKeys[i] == newKeys[i];
        if (!cached) rebuilt++;
        Console.WriteLine($"  {(cached ? "CACHED " : "REBUILT")} {layers[i].Instruction}");
    }
    Console.WriteLine($"  rebuilt={rebuilt}");
}

static string[] Keys(Layer[] layers, Dictionary<string, int> files)
{
    var keys = new string[layers.Length];
    var parent = "";
    for (var i = 0; i < layers.Length; i++)
    {
        var inputs = string.Join(",", layers[i].Inputs.Select(f => $"{f}@{files[f]}"));
        parent = $"{parent}/{layers[i].Instruction}[{inputs}]";   // the parent key is part of the key
        keys[i] = parent;
    }
    return keys;
}

record Layer(string Instruction, string[] Inputs);`,
      answer: `bad layout, edit Program.cs
  CACHED  FROM sdk:10.0
  REBUILT COPY . .
  REBUILT RUN dotnet restore
  REBUILT RUN dotnet publish
  rebuilt=3
good layout, edit Program.cs
  CACHED  FROM sdk:10.0
  CACHED  COPY App.csproj .
  CACHED  RUN dotnet restore
  REBUILT COPY . .
  REBUILT RUN dotnet publish
  rebuilt=2
good layout, edit App.csproj
  CACHED  FROM sdk:10.0
  REBUILT COPY App.csproj .
  REBUILT RUN dotnet restore
  REBUILT COPY . .
  REBUILT RUN dotnet publish
  rebuilt=4`,
      explain: {
        en: `<p>Each layer's cache key includes its instruction, its inputs and the key of the layer before it. In the bad layout <code>COPY . .</code> comes before restore, so editing <code>Program.cs</code> changes that layer and everything after it: three layers rebuild, including the slow restore. In the good layout only the project file is copied before restore, so a code edit leaves the first three layers cached and rebuilds just the last two. Editing <code>App.csproj</code> (a package change) legitimately invalidates everything after the base image, which is the correct behaviour.</p>`,
        hi: `<p>हर layer की cache key में उसका instruction, उसके inputs और उससे पहले वाली layer की key शामिल है। Bad layout में <code>COPY . .</code> restore से पहले है, इसलिए <code>Program.cs</code> बदलने से वह layer और उसके बाद की सब बदल जाती हैं: तीन layers rebuild होती हैं, slow restore समेत। Good layout में restore से पहले सिर्फ़ project file copy होती है, इसलिए code edit पर पहली तीन layers cached रहती हैं और सिर्फ़ आख़िरी दो rebuild होती हैं। <code>App.csproj</code> बदलना (package change) base image के बाद की सब layers को सही में invalidate करता है, जो सही behaviour है।</p>`,
        hg: `<p>Har layer ki cache key mein uska instruction, uske inputs aur usse pehle wali layer ki key shamil hai. Bad layout mein <code>COPY . .</code> restore se pehle hai, isliye <code>Program.cs</code> badalne se woh layer aur uske baad ki sab badal jaati hain: teen layers rebuild hoti hain, slow restore samet. Good layout mein restore se pehle sirf project file copy hoti hai, isliye code edit par pehli teen layers cached rehti hain aur sirf aakhri do rebuild hoti hain. <code>App.csproj</code> badalna (package change) base image ke baad ki sab layers ko sahi mein invalidate karta hai, jo sahi behaviour hai.</p>`
      }
    },
    {
      id: "stage-dependency-waves",
      src: `// Pipeline stages with dependsOn run in "waves"; stages in one wave can run in parallel. Ties keep declaration order.
var stages = new List<(string Name, string[] DependsOn)>
{
    ("Build", []),
    ("UnitTests", ["Build"]),
    ("SecurityScan", ["Build"]),
    ("DeployDev", ["UnitTests"]),
    ("DeployTest", ["DeployDev", "SecurityScan"]),
    ("DeployProd", ["DeployTest"]),
};
Print(stages);

stages[0] = ("Build", ["DeployProd"]);   // now Build waits for the last stage
Print(stages);

static void Print(List<(string Name, string[] DependsOn)> stages)
{
    var done = new HashSet<string>();
    var wave = 1;
    while (done.Count < stages.Count)
    {
        var ready = stages.Where(s => !done.Contains(s.Name) && s.DependsOn.All(done.Contains))
                          .Select(s => s.Name).ToList();
        if (ready.Count == 0)
        {
            var stuck = stages.Where(s => !done.Contains(s.Name)).Select(s => s.Name);
            Console.WriteLine($"cycle detected among: {string.Join(", ", stuck)}");
            return;
        }
        Console.WriteLine($"wave {wave++}: {string.Join(" | ", ready)}");
        foreach (var r in ready) done.Add(r);
    }
}`,
      answer: `wave 1: Build
wave 2: UnitTests | SecurityScan
wave 3: DeployDev
wave 4: DeployTest
wave 5: DeployProd
cycle detected among: Build, UnitTests, SecurityScan, DeployDev, DeployTest, DeployProd`,
      explain: {
        en: `<p>Each wave contains the stages whose <code>dependsOn</code> are all finished. <code>Build</code> goes first; <code>UnitTests</code> and <code>SecurityScan</code> both need only <code>Build</code>, so they can run in parallel in wave 2. <code>DeployTest</code> waits for both <code>DeployDev</code> and <code>SecurityScan</code>, then <code>DeployProd</code> follows. In the second run <code>Build</code> depends on <code>DeployProd</code>, which depends (through the chain) on <code>Build</code>: nothing is ready, so the loop reports a cycle. Azure Pipelines rejects such a pipeline when it validates the YAML. The wave model is a simplification: Azure starts a stage as soon as its own dependencies finish, without waiting for the rest of the wave.</p>`,
        hi: `<p>हर wave में वे stages हैं जिनके <code>dependsOn</code> सब पूरे हो चुके हैं। <code>Build</code> पहले; <code>UnitTests</code> और <code>SecurityScan</code> दोनों को सिर्फ़ <code>Build</code> चाहिए, इसलिए वे wave 2 में parallel चल सकते हैं। <code>DeployTest</code> <code>DeployDev</code> और <code>SecurityScan</code> दोनों का इंतज़ार करता है, फिर <code>DeployProd</code>। दूसरे run में <code>Build</code>, <code>DeployProd</code> पर depend करता है, जो chain के ज़रिए <code>Build</code> पर depend करता है: कुछ ready नहीं, इसलिए loop cycle report करता है। Azure Pipelines ऐसी pipeline को YAML validate करते समय reject कर देता है। Wave model एक simplification है: Azure किसी stage को तभी शुरू कर देता है जब उसकी अपनी dependencies पूरी हों, बाकी wave का इंतज़ार नहीं करता।</p>`,
        hg: `<p>Har wave mein woh stages hain jinke <code>dependsOn</code> sab poore ho chuke hain. <code>Build</code> pehle; <code>UnitTests</code> aur <code>SecurityScan</code> dono ko sirf <code>Build</code> chahiye, isliye woh wave 2 mein parallel chal sakte hain. <code>DeployTest</code> <code>DeployDev</code> aur <code>SecurityScan</code> dono ka intezaar karta hai, phir <code>DeployProd</code>. Doosre run mein <code>Build</code>, <code>DeployProd</code> par depend karta hai, jo chain ke zariye <code>Build</code> par depend karta hai: kuch ready nahi, isliye loop cycle report karta hai. Azure Pipelines aisi pipeline ko YAML validate karte samay reject kar deta hai. Wave model ek simplification hai: Azure kisi stage ko tabhi shuru kar deta hai jab uski apni dependencies poori hon, baaki wave ka intezaar nahi karta.</p>`
      }
    },
    {
      id: "stable-percentage-rollout",
      src: `// Percentage rollout: a stable hash of flag + user decides, so the same user always gets the same answer,
// and raising the percentage only ever ADDS users (nobody flips back off).
var users = Enumerable.Range(1, 12).Select(i => $"user-{i:00}").ToList();
foreach (var percent in new[] { 0, 25, 50, 100 })
{
    var on = users.Where(u => IsEnabled("new-checkout", u, percent)).ToList();
    Console.WriteLine($"{percent,3}% -> {on.Count} on: {string.Join(" ", on.Select(u => u[5..]))}");
}

var at25 = users.Where(u => IsEnabled("new-checkout", u, 25)).ToHashSet();
var at50 = users.Where(u => IsEnabled("new-checkout", u, 50)).ToHashSet();
Console.WriteLine($"25% is subset of 50%: {at25.IsSubsetOf(at50)}");
Console.WriteLine($"other flag at 25%: {string.Join(" ", users.Where(u => IsEnabled("dark-mode", u, 25)).Select(u => u[5..]))}");

static bool IsEnabled(string flag, string userId, int percent) => Bucket(flag, userId) < percent;

static int Bucket(string flag, string userId)
{
    // FNV-1a 32-bit: the same on every run and machine (string.GetHashCode is randomised per process).
    uint hash = 2166136261;
    foreach (var b in System.Text.Encoding.UTF8.GetBytes($"{flag}:{userId}"))
    {
        hash ^= b;
        hash *= 16777619;
    }
    return (int)(hash % 100);
}`,
      answer: `  0% -> 0 on:
 25% -> 5 on: 03 05 06 08 10
 50% -> 7 on: 03 05 06 07 08 09 10
100% -> 12 on: 01 02 03 04 05 06 07 08 09 10 11 12
25% is subset of 50%: True
other flag at 25%: 05`,
      explain: {
        en: `<p>The bucket (0 to 99) comes from a hash of <code>flag:user</code>, so a user's bucket never changes between calls, servers or restarts. A user is enabled when their bucket is below the percentage. Going from 25 to 50 percent can only add users, so the 25 percent set is a subset of the 50 percent set: nobody sees the feature disappear. Including the flag name in the hash gives each flag its own, independent group (the other flag enables a different set). The hash is FNV-1a on purpose: <code>string.GetHashCode()</code> is randomised per process in .NET, which would reshuffle users on every restart. With only 12 users the counts are not exactly 25 and 50 percent; they converge on large populations.</p>`,
        hi: `<p>Bucket (0 से 99) <code>flag:user</code> के hash से आता है, इसलिए user का bucket calls, servers या restarts के बीच कभी नहीं बदलता। User तब enabled होता है जब उसका bucket percentage से नीचे हो। 25 से 50 percent जाने पर सिर्फ़ users जुड़ सकते हैं, इसलिए 25 percent वाला set 50 percent वाले set का subset है: किसी को feature गायब होता नहीं दिखता। Hash में flag का नाम शामिल करने से हर flag को अपना independent group मिलता है (दूसरा flag अलग set enable करता है)। Hash जान-बूझकर FNV-1a है: .NET में <code>string.GetHashCode()</code> हर process में randomised होता है, जो हर restart पर users को फिर से बाँट देता। सिर्फ़ 12 users के साथ counts ठीक 25 और 50 percent नहीं होते; बड़ी population में वे उसके करीब आते हैं।</p>`,
        hg: `<p>Bucket (0 se 99) <code>flag:user</code> ke hash se aata hai, isliye user ka bucket calls, servers ya restarts ke beech kabhi nahi badalta. User tab enabled hota hai jab uska bucket percentage se neeche ho. 25 se 50 percent jaane par sirf users jud sakte hain, isliye 25 percent wala set 50 percent wale set ka subset hai: kisi ko feature gayab hota nahi dikhta. Hash mein flag ka naam shamil karne se har flag ko apna independent group milta hai (doosra flag alag set enable karta hai). Hash jaan-boojhkar FNV-1a hai: .NET mein <code>string.GetHashCode()</code> har process mein randomised hota hai, jo har restart par users ko phir se baant deta. Sirf 12 users ke saath counts theek 25 aur 50 percent nahi hote; badi population mein woh uske kareeb aate hain.</p>`
      }
    },
    {
      id: "version-bump-and-build-number",
      src: `// Next version from commit messages (Conventional Commits style): breaking change -> major, feat -> minor, fix -> patch.
// Also an Azure Pipelines style build number yyyyMMdd.r (r restarts at 1 each day).
var current = (Major: 1, Minor: 4, Patch: 2);
var batches = new[]
{
    new[] { "fix: null check in cart", "docs: update readme", "fix: typo" },
    new[] { "feat: coupon codes", "fix: rounding", "chore: bump packages" },
    new[] { "feat!: remove v1 endpoints", "feat: add v2 endpoints", "fix: header" },
    new[] { "docs: contributing guide", "chore: ci tweak" },
};
foreach (var commits in batches)
{
    var bump = commits.Select(Classify).Max();
    current = bump switch
    {
        Bump.Major => (current.Major + 1, 0, 0),
        Bump.Minor => (current.Major, current.Minor + 1, 0),
        Bump.Patch => (current.Major, current.Minor, current.Patch + 1),
        _ => current,
    };
    Console.WriteLine($"{bump,-5} -> {current.Major}.{current.Minor}.{current.Patch}");
}

var runs = new[] { "2026-10-21", "2026-10-21", "2026-10-21", "2026-10-22", "2026-10-22" };
var counters = new Dictionary<string, int>();
foreach (var day in runs)
{
    counters[day] = counters.GetValueOrDefault(day) + 1;
    Console.WriteLine($"{day.Replace("-", "")}.{counters[day]}");
}

static Bump Classify(string message)
{
    var type = message.Split(':')[0];
    if (type.EndsWith('!')) return Bump.Major;
    return type switch { "feat" => Bump.Minor, "fix" => Bump.Patch, _ => Bump.None };
}

enum Bump { None, Patch, Minor, Major }`,
      answer: `Patch -> 1.4.3
Minor -> 1.5.0
Major -> 2.0.0
None  -> 2.0.0
20261021.1
20261021.2
20261021.3
20261022.1
20261022.2`,
      explain: {
        en: `<p>The highest-impact commit in a batch decides the bump: <code>fix</code> is a patch, <code>feat</code> is a minor, and <code>!</code> after the type marks a breaking change, a major. The first batch has only fixes (plus a docs commit that does not count), so 1.4.2 becomes 1.4.3. A minor resets the patch to 0 (1.5.0), a major resets minor and patch (2.0.0), and a batch with only docs and chores leaves the version alone (<code>None</code>). The build number <code>yyyyMMdd.r</code> restarts the revision counter on each new date: 21 Oct gets .1, .2, .3, then 22 Oct starts again at .1, because the counter is per day (a simple model of the idea). Azure Pipelines offers the same idea with <code>name: $(Date:yyyyMMdd)$(Rev:.r)</code>.</p>`,
        hi: `<p>Batch में सबसे ज़्यादा असर वाला commit bump तय करता है: <code>fix</code> patch है, <code>feat</code> minor है, और type के बाद <code>!</code> breaking change यानी major दिखाता है। पहले batch में सिर्फ़ fixes हैं (plus एक docs commit जो गिना नहीं जाता), इसलिए 1.4.2 से 1.4.3। Minor patch को 0 कर देता है (1.5.0), major minor और patch दोनों reset करता है (2.0.0), और सिर्फ़ docs व chores वाला batch version को वैसा ही छोड़ता है (<code>None</code>)। Build number <code>yyyyMMdd.r</code> हर नई date पर revision counter restart करता है: 21 Oct को .1, .2, .3 मिलता है, फिर 22 Oct फिर से .1 से शुरू होता है, क्योंकि counter दिन के हिसाब से है (idea का एक simple model)। Azure Pipelines में यही idea <code>name: $(Date:yyyyMMdd)$(Rev:.r)</code> से मिलता है।</p>`,
        hg: `<p>Batch mein sabse zyada asar wala commit bump tay karta hai: <code>fix</code> patch hai, <code>feat</code> minor hai, aur type ke baad <code>!</code> breaking change yaani major dikhata hai. Pehle batch mein sirf fixes hain (plus ek docs commit jo ginaa nahi jaata), isliye 1.4.2 se 1.4.3. Minor patch ko 0 kar deta hai (1.5.0), major minor aur patch dono reset karta hai (2.0.0), aur sirf docs va chores wala batch version ko waisa hi chhodta hai (<code>None</code>). Build number <code>yyyyMMdd.r</code> har nayi date par revision counter restart karta hai: 21 Oct ko .1, .2, .3 milta hai, phir 22 Oct phir se .1 se shuru hota hai, kyunki counter din ke hisaab se hai (idea ka ek simple model). Azure Pipelines mein yahi idea <code>name: $(Date:yyyyMMdd)$(Rev:.r)</code> se milta hai.</p>`
      }
    }
  ],
  revision: {
    en: [
      "Merge keeps true history; rebase rewrites it, so rebase only your own unshared commits.",
      "Revert adds an undo commit and is safe on shared branches; reset rewrites history and is for local work.",
      "Reflog is your local safety net for finding commits lost to a bad reset or rebase.",
      "Trunk-based means short branches, frequent merges and feature flags; GitFlow suits scheduled, versioned releases.",
      "A good PR is small, passes the build, and is reviewed for correctness, design, tests and risk.",
      "Pipeline structure: stages contain jobs, jobs contain steps, and jobs run on agents from a pool.",
      "Approvals and checks live on the resource, so protect the service connection as well as the environment.",
      "Keep secrets in secret variables or Key Vault-linked groups, never in the repo or YAML.",
      "Multi-stage Dockerfile: the SDK image builds, the small runtime image runs.",
      "Run containers as non-root, for example with USER $APP_UID.",
      "Build once and deploy the same artifact everywhere, with config kept outside it.",
      "Apply database changes with idempotent scripts or bundles and keep them backward-compatible so rollback stays possible."
    ],
    meaning: {
      hi: [
        "Merge सच्ची history रखता है; rebase उसे rewrite करता है, इसलिए सिर्फ़ अपने unshared commits rebase करो।",
        "Revert undo commit जोड़ता है और shared branches पर safe है; reset history rewrite करता है और local काम के लिए है।",
        "Reflog तुम्हारा local safety net है जिससे खराब reset या rebase में खोए commits मिलते हैं।",
        "Trunk-based यानी छोटी branches, बार-बार merge और feature flags; GitFlow scheduled, versioned releases के लिए।",
        "अच्छा PR छोटा होता है, build pass करता है, और correctness, design, tests, risk के लिए review होता है।",
        "Pipeline structure: stages में jobs, jobs में steps, और jobs pool के agents पर चलते हैं।",
        "Approvals और checks resource पर रहते हैं, इसलिए environment के साथ service connection भी protect करो।",
        "Secrets को secret variables या Key Vault-linked groups में रखो, repo या YAML में कभी नहीं।",
        "Multi-stage Dockerfile: SDK image build करती है, छोटी runtime image चलाती है।",
        "Containers non-root चलाओ, जैसे USER $APP_UID से।",
        "एक बार build करो और हर जगह वही artifact deploy करो, config उसके बाहर रखकर।",
        "Database changes idempotent scripts या bundles से लगाओ और उन्हें backward-compatible रखो ताकि rollback possible रहे।"
      ],
      hg: [
        "Merge sachchi history rakhta hai; rebase use rewrite karta hai, isliye sirf apne unshared commits rebase karo.",
        "Revert undo commit jodta hai aur shared branches par safe hai; reset history rewrite karta hai aur local kaam ke liye hai.",
        "Reflog tumhara local safety net hai jisse kharab reset ya rebase mein khoye commits milte hain.",
        "Trunk-based yaani chhoti branches, baar-baar merge aur feature flags; GitFlow scheduled, versioned releases ke liye.",
        "Achha PR chhota hota hai, build pass karta hai, aur correctness, design, tests, risk ke liye review hota hai.",
        "Pipeline structure: stages mein jobs, jobs mein steps, aur jobs pool ke agents par chalte hain.",
        "Approvals aur checks resource par rehte hain, isliye environment ke saath service connection bhi protect karo.",
        "Secrets ko secret variables ya Key Vault-linked groups mein rakho, repo ya YAML mein kabhi nahi.",
        "Multi-stage Dockerfile: SDK image build karti hai, chhoti runtime image chalati hai.",
        "Containers non-root chalao, jaise USER $APP_UID se.",
        "Ek baar build karo aur har jagah wahi artifact deploy karo, config uske bahar rakhkar.",
        "Database changes idempotent scripts ya bundles se lagao aur unhe backward-compatible rakho taaki rollback possible rahe."
      ]
    }
  },
  whatsNew: {
    en: `<ul>
<li><b>.NET container images:</b> since .NET 8 the Microsoft images include a non-root user (<code>app</code>, <code>APP_UID</code>) and listen on port 8080 by default. Chiseled Ubuntu images exist for current versions, for example <code>10.0-noble-chiseled</code> (verify tags before you copy them).</li>
<li><b>SDK container publish:</b> <code>dotnet publish /t:PublishContainer</code> works without a Dockerfile from SDK 8; <code>ContainerFamily</code> picks the base image flavour and <code>ContainerUser</code> defaults to the non-root user for .NET 8 or higher Microsoft images.</li>
<li><b>DORA:</b> the current guide lists five software delivery metrics (change lead time, deployment frequency, failed deployment recovery time, change fail rate, deployment rework rate); older material says four.</li>
</ul>`,
    hi: `<ul>
<li><b>.NET container images:</b> .NET 8 से Microsoft images में non-root user (<code>app</code>, <code>APP_UID</code>) है और वे default रूप से port 8080 पर सुनती हैं। Current versions के लिए chiseled Ubuntu images हैं, जैसे <code>10.0-noble-chiseled</code> (copy करने से पहले tags verify करो)।</li>
<li><b>SDK container publish:</b> SDK 8 से <code>dotnet publish /t:PublishContainer</code> बिना Dockerfile के चलता है; <code>ContainerFamily</code> base image का flavour चुनता है और .NET 8 या ऊपर की Microsoft images के लिए <code>ContainerUser</code> default से non-root user है।</li>
<li><b>DORA:</b> current guide पाँच software delivery metrics बताती है (change lead time, deployment frequency, failed deployment recovery time, change fail rate, deployment rework rate); पुराना material चार कहता है।</li>
</ul>`,
    hg: `<ul>
<li><b>.NET container images:</b> .NET 8 se Microsoft images mein non-root user (<code>app</code>, <code>APP_UID</code>) hai aur woh default roop se port 8080 par sunti hain. Current versions ke liye chiseled Ubuntu images hain, jaise <code>10.0-noble-chiseled</code> (copy karne se pehle tags verify karo).</li>
<li><b>SDK container publish:</b> SDK 8 se <code>dotnet publish /t:PublishContainer</code> bina Dockerfile ke chalta hai; <code>ContainerFamily</code> base image ka flavour chunta hai aur .NET 8 ya upar ki Microsoft images ke liye <code>ContainerUser</code> default se non-root user hai.</li>
<li><b>DORA:</b> current guide paanch software delivery metrics batati hai (change lead time, deployment frequency, failed deployment recovery time, change fail rate, deployment rework rate); purana material chaar kehta hai.</li>
</ul>`
  }
};
