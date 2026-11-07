// Day 21 — DevOps for .NET Tech Leads, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 21,
  format: "lesson",
  title: {
    en: "DevOps for .NET Tech Leads — Git workflow, branching, pull requests, Azure Pipelines YAML, Docker, CI/CD",
    hi: "DevOps — .NET Tech Leads के लिए: Git workflow, branching, pull requests, Azure Pipelines YAML, Docker, CI/CD",
    hg: "DevOps — .NET Tech Leads ke liye: Git workflow, branching, pull requests, Azure Pipelines YAML, Docker, CI/CD"
  },
  summary: {
    en: "<p>Day 21 takes the <b>customer-care CRM</b> from a laptop to production in 7 short lessons. First Git: commits, branches and the three ways to merge, then undoing mistakes safely, then the pull request gate with branch policies.</p><p>Then automation: an Azure Pipelines YAML file that builds, tests and publishes <code>Crm.Api</code>, a multi-stage Dockerfile, deploy stages with environments and approvals, and SemVer with build info. Git, YAML and Dockerfile lessons are shown for reading; the merge, policy and versioning ideas run as small C# programs. Trunk-based vs GitFlow, templates, GitHub Actions and rollback are in the Deep Dive.</p>",
    hi: "<p>Day 21 <b>customer-care CRM</b> को laptop से production तक 7 छोटे पाठों में ले जाता है। पहले Git: commits, branches और merge के तीन तरीके, फिर गलतियों को safe तरीके से undo करना, फिर branch policies के साथ pull request का gate।</p><p>फिर automation: Azure Pipelines की YAML file जो <code>Crm.Api</code> को build, test और publish करती है, multi-stage Dockerfile, environments और approvals वाले deploy stages, और build info के साथ SemVer। Git, YAML और Dockerfile के पाठ पढ़ने के लिए दिखाए गए हैं; merge, policy और versioning के idea छोटे C# programs में चलते हैं। Trunk-based बनाम GitFlow, templates, GitHub Actions और rollback Deep Dive में हैं।</p>",
    hg: "<p>Day 21 <b>customer-care CRM</b> ko laptop se production tak 7 chhote lessons mein le jaata hai. Pehle Git: commits, branches aur merge ke teen tareeke, phir galtiyon ko safe tareeke se undo karna, phir branch policies ke saath pull request ka gate.</p><p>Phir automation: Azure Pipelines ki YAML file jo <code>Crm.Api</code> ko build, test aur publish karti hai, multi-stage Dockerfile, environments aur approvals wale deploy stages, aur build info ke saath SemVer. Git, YAML aur Dockerfile ke lessons padhne ke liye dikhaye gaye hain; merge, policy aur versioning ke idea chhote C# programs mein chalte hain. Trunk-based vs GitFlow, templates, GitHub Actions aur rollback Deep Dive mein hain.</p>"
  },
  sections: [
    {
      id: "commit-branch-merge",
      depth: "short",
      title: {
        en: "Commits, branches and three ways to merge",
        hi: "Commits, branches और merge करने के तीन तरीके",
        hg: "Commits, branches aur merge karne ke teen tareeke"
      },
      lesson: {
        buildsOn: {
          en: "<p>Day 20 put <code>Crm.Api</code> on Azure by hand: App Service slots, Key Vault, logs. Day 21 automates the whole road from a developer laptop to that slot. The road starts in Git, so we first see how code history is stored and how a branch lands on <code>main</code>.</p>",
          hi: "<p>Day 20 में <code>Crm.Api</code> हाथ से Azure पर गई: App Service slots, Key Vault, logs। Day 21 developer के laptop से उस slot तक का पूरा रास्ता automate करता है। रास्ता Git से शुरू होता है, इसलिए पहले देखते हैं कि code की history कैसे रखी जाती है और branch <code>main</code> पर कैसे उतरती है।</p>",
          hg: "<p>Day 20 mein <code>Crm.Api</code> haath se Azure par gayi: App Service slots, Key Vault, logs. Day 21 developer ke laptop se us slot tak ka poora raasta automate karta hai. Raasta Git se shuru hota hai, isliye pehle dekhte hain ki code ki history kaise rakhi jaati hai aur branch <code>main</code> par kaise utarti hai.</p>"
        },
        what: {
          en: "<p>A <b>commit</b> is a snapshot of the code with a link to the commit before it (its <b>parent</b>). A <b>branch</b> is only a name that points at one commit. Merging joins two lines of work in one of three ways: <b>fast-forward</b>, <b>merge commit</b> or <b>squash</b>.</p>",
          hi: "<p><b>Commit</b> code का एक snapshot है, जिसमें उससे पहले वाले commit का link (उसका <b>parent</b>) होता है। <b>Branch</b> सिर्फ़ एक नाम है जो किसी एक commit की तरफ़ इशारा करता है। Merge दो काम की लाइनों को तीन तरीकों में से एक से जोड़ता है: <b>fast-forward</b>, <b>merge commit</b> या <b>squash</b>।</p>",
          hg: "<p><b>Commit</b> code ka ek snapshot hai, jismein usse pehle wale commit ka link (uska <b>parent</b>) hota hai. <b>Branch</b> sirf ek naam hai jo kisi ek commit ki taraf ishaara karta hai. Merge do kaam ki lines ko teen tareeko mein se ek se jodta hai: <b>fast-forward</b>, <b>merge commit</b> ya <b>squash</b>.</p>"
        },
        why: {
          en: "<p>A Tech Lead reads history to find \"what changed before the bug\" and chooses how PRs land. Because a branch is just a pointer, branches are cheap: make one per change. The merge style decides how clean <code>main</code> stays, and a clean <code>main</code> is easy to revert and release.</p>",
          hi: "<p>Tech Lead history पढ़कर पता लगाता है कि \"bug से पहले क्या बदला\" और तय करता है कि PRs कैसे उतरें। Branch सिर्फ़ pointer है, इसलिए branches सस्ती हैं: हर change के लिए एक बनाओ। Merge का तरीका तय करता है कि <code>main</code> कितनी साफ़ रहे, और साफ़ <code>main</code> को revert और release करना आसान है।</p>",
          hg: "<p>Tech Lead history padhkar pata lagata hai ki \"bug se pehle kya badla\" aur tay karta hai ki PRs kaise utren. Branch sirf pointer hai, isliye branches sasti hain: har change ke liye ek banao. Merge ka tareeka tay karta hai ki <code>main</code> kitni saaf rahe, aur saaf <code>main</code> ko revert aur release karna aasaan hai.</p>"
        },
        analogy: {
          en: "<p>Think of a school notebook where every page says \"continues from page N\". A branch is a bookmark: moving a bookmark costs nothing. Fast-forward is just sliding the main bookmark ahead. A merge commit is a new page that says \"continues from both page 6 and page 5\". Squash is copying your rough work into one neat page.</p>",
          hi: "<p>स्कूल की एक कॉपी सोचो जिसके हर पन्ने पर लिखा है \"पन्ना N से आगे\"। Branch एक bookmark है: bookmark खिसकाने में कुछ खर्च नहीं होता। Fast-forward मतलब main का bookmark आगे सरका देना। Merge commit एक नया पन्ना है जिस पर लिखा है \"पन्ना 6 और पन्ना 5 दोनों से आगे\"। Squash मतलब अपना कच्चा काम एक साफ़ पन्ने पर उतार देना।</p>",
          hg: "<p>School ki ek copy socho jiske har panne par likha hai \"panna N se aage\". Branch ek bookmark hai: bookmark khiskane mein kuch kharch nahi hota. Fast-forward matlab main ka bookmark aage sarka dena. Merge commit ek naya panna hai jis par likha hai \"panna 6 aur panna 5 dono se aage\". Squash matlab apna kachcha kaam ek saaf panne par utaar dena.</p>"
        },
        focus: {
          lang: "bash",
          caption: {
            en: "The real Git commands for the three ways (shown for reading; branch names are examples)",
            hi: "तीनों तरीकों के असली Git commands (पढ़ने के लिए; branch के नाम उदाहरण हैं)",
            hg: "Teeno tareeko ke asli Git commands (padhne ke liye; branch ke naam udaharan hain)"
          },
          src: "git switch -c feature/priority          # new branch at the current commit\ngit commit -am \"Add Priority to ticket\"\ngit switch main\ngit merge --ff-only feature/priority    # fast-forward, or refuse if main moved\ngit merge --no-ff feature/sla           # always create a merge commit\ngit merge --squash feature/notes        # stage all changes, then: git commit",
          check: "none"
        },
        lines: [
          {
            code: "public record Commit(int Id, string Message, int? Parent, int? Parent2 = null);",
            note: {
              en: "A commit has an id, a message and a <b>parent</b> link. <code>Parent2</code> is only filled for a merge commit, which has two parents.",
              hi: "Commit में id, message और <b>parent</b> link होता है। <code>Parent2</code> सिर्फ़ merge commit में भरा होता है, क्योंकि उसके दो parents होते हैं।",
              hg: "Commit mein id, message aur <b>parent</b> link hota hai. <code>Parent2</code> sirf merge commit mein bhara hota hai, kyunki uske do parents hote hain."
            }
          },
          {
            code: "public void CreateBranch(string name, string from) => _branches[name] = _branches[from];",
            note: {
              en: "Creating a branch copies only a pointer (a name to a commit id). No files are copied, so it is instant.",
              hi: "Branch बनाने में सिर्फ़ एक pointer (नाम से commit id) copy होता है। कोई file copy नहीं होती, इसलिए यह तुरंत होता है।",
              hg: "Branch banane mein sirf ek pointer (naam se commit id) copy hota hai. Koi file copy nahi hoti, isliye ye turant hota hai."
            }
          },
          {
            code: "public void FastForward(string into, string from) => _branches[into] = _branches[from];",
            note: {
              en: "<b>Fast-forward</b>: move the pointer, nothing else. No new commit is created, which is why the first output line says 4 commits.",
              hi: "<b>Fast-forward</b>: सिर्फ़ pointer खिसकाओ, और कुछ नहीं। कोई नया commit नहीं बनता, इसीलिए पहली output line में 4 commits हैं।",
              hg: "<b>Fast-forward</b>: sirf pointer khiskao, aur kuch nahi. Koi naya commit nahi banta, isiliye pehli output line mein 4 commits hain."
            }
          },
          {
            code: "Add(into, $\"Merge {from}\", _branches[into], _branches[from]);",
            note: {
              en: "<b>Merge commit</b>: a new commit with two parents, so the history keeps both lines. Needed when both branches moved.",
              hi: "<b>Merge commit</b>: दो parents वाला नया commit, इसलिए history में दोनों lines बची रहती हैं। यह तब चाहिए जब दोनों branches आगे बढ़ चुकी हों।",
              hg: "<b>Merge commit</b>: do parents wala naya commit, isliye history mein dono lines bachi rehti hain. Ye tab chahiye jab dono branches aage badh chuki hon."
            }
          },
          {
            code: "Add(into, message, _branches[into], null);",
            note: {
              en: "<b>Squash</b>: one new commit with only <b>one</b> parent (the old main tip). The branch commits are not linked to it.",
              hi: "<b>Squash</b>: सिर्फ़ <b>एक</b> parent (main का पुराना tip) वाला एक नया commit। Branch के commits इससे जुड़े नहीं होते।",
              hg: "<b>Squash</b>: sirf <b>ek</b> parent (main ka purana tip) wala ek naya commit. Branch ke commits isse jude nahi hote."
            }
          },
          {
            code: "foreach (var line in git.History(\"main\")) Console.WriteLine(\"  \" + line);",
            note: {
              en: "The history walks the parent links from the tip of <code>main</code>. Notice that c8 and c9 are missing: squash hid the branch steps.",
              hi: "History <code>main</code> के tip से parent links पर चलती है। देखो c8 और c9 गायब हैं: squash ने branch के steps छिपा दिए।",
              hg: "History <code>main</code> ke tip se parent links par chalti hai. Dekho c8 aur c9 gaayab hain: squash ne branch ke steps chhipa diye."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Thinking a branch is a copy of the files. It is a pointer; that is why it costs nothing.</li><li>Expecting a fast-forward after <code>main</code> has moved. Git then needs a merge commit (or <code>--ff-only</code> refuses).</li><li>Squash-merging a branch and then continuing on the same branch. Its old commits are not in <code>main</code>, so the next merge shows the same changes again. Delete the branch after a squash.</li></ul>",
          hi: "<ul><li>यह सोचना कि branch files की copy है। यह pointer है; इसीलिए इसमें कुछ खर्च नहीं होता।</li><li><code>main</code> के आगे बढ़ने के बाद भी fast-forward की उम्मीद करना। तब Git को merge commit चाहिए (या <code>--ff-only</code> मना कर देता है)।</li><li>Branch को squash-merge करके उसी branch पर काम चालू रखना। उसके पुराने commits <code>main</code> में नहीं हैं, इसलिए अगले merge में वही changes फिर दिखते हैं। Squash के बाद branch delete कर दो।</li></ul>",
          hg: "<ul><li>Ye sochna ki branch files ki copy hai. Ye pointer hai; isiliye ismein kuch kharch nahi hota.</li><li><code>main</code> ke aage badhne ke baad bhi fast-forward ki ummeed karna. Tab Git ko merge commit chahiye (ya <code>--ff-only</code> mana kar deta hai).</li><li>Branch ko squash-merge karke usi branch par kaam chalu rakhna. Uske purane commits <code>main</code> mein nahi hain, isliye agle merge mein wahi changes phir dikhte hain. Squash ke baad branch delete kar do.</li></ul>"
        },
        whenToUse: {
          en: "<p><b>Fast-forward</b> (or a rebase first) for a tiny change on a quiet <code>main</code>. <b>Merge commit</b> when the story of the branch matters. <b>Squash</b> for small PRs whose step-by-step commits nobody needs. Pick one default for the team in the repo settings and keep it.</p>",
          hi: "<p>शांत <code>main</code> पर छोटे change के लिए <b>fast-forward</b> (या पहले rebase)। जब branch की कहानी मायने रखती हो तब <b>merge commit</b>। छोटे PRs के लिए <b>squash</b>, जिनके step-by-step commits किसी को नहीं चाहिए। Repo settings में team के लिए एक default चुनो और उसी पर टिके रहो।</p>",
          hg: "<p>Shaant <code>main</code> par chhote change ke liye <b>fast-forward</b> (ya pehle rebase). Jab branch ki kahaani mayne rakhti ho tab <b>merge commit</b>. Chhote PRs ke liye <b>squash</b>, jinke step-by-step commits kisi ko nahi chahiye. Repo settings mein team ke liye ek default chuno aur usi par tike raho.</p>"
        },
        exercise: {
          task: {
            en: "<p>A feature branch has 3 commits. Print how many commits each way adds to <code>main</code>. Assume <code>main</code> moved too, except for fast-forward. Expected: 3, 4 and 1.</p>",
            hi: "<p>एक feature branch में 3 commits हैं। print करो कि हर तरीका <code>main</code> में कितने commits जोड़ता है। मान लो fast-forward को छोड़कर <code>main</code> भी आगे बढ़ चुकी है। Expected: 3, 4 और 1।</p>",
            hg: "<p>Ek feature branch mein 3 commits hain. Print karo ki har tareeka <code>main</code> mein kitne commits jodta hai. Maan lo fast-forward ko chhodkar <code>main</code> bhi aage badh chuki hai. Expected: 3, 4 aur 1.</p>"
          },
          hint: {
            en: "<p>Merge adds the branch commits plus one merge commit. Use a <code>switch</code> expression on the strategy name.</p>",
            hi: "<p>Merge branch के commits के साथ एक merge commit भी जोड़ता है। Strategy के नाम पर <code>switch</code> expression लिखो।</p>",
            hg: "<p>Merge branch ke commits ke saath ek merge commit bhi jodta hai. Strategy ke naam par <code>switch</code> expression likho.</p>"
          },
          solution: {
            caption: {
              en: "Solution: commits added by each strategy",
              hi: "हल: हर strategy से जुड़ने वाले commits",
              hg: "Solution: har strategy se judne wale commits"
            },
            src: "foreach (var strategy in new[] { \"fast-forward\", \"merge\", \"squash\" })\n    Console.WriteLine($\"{strategy} adds {CommitsAdded(strategy, 3)} commit(s) to main\");\n\n// A feature branch with 3 commits; for merge, main has also moved on.\nstatic int CommitsAdded(string strategy, int branchCommits) => strategy switch\n{\n    \"fast-forward\" => branchCommits,\n    \"merge\" => branchCommits + 1,\n    \"squash\" => 1,\n    _ => throw new ArgumentException(strategy)\n};",
            check: "run",
            expected: "fast-forward adds 3 commit(s) to main\nmerge adds 4 commit(s) to main\nsquash adds 1 commit(s) to main"
          }
        },
        quiz: {
          q: {
            en: "After a squash merge of a 2-commit branch, what does the history of <code>main</code> contain?",
            hi: "2-commit वाली branch के squash merge के बाद <code>main</code> की history में क्या होता है?",
            hg: "2-commit wali branch ke squash merge ke baad <code>main</code> ki history mein kya hota hai?"
          },
          options: [
            {
              en: "A merge commit with two parents",
              hi: "दो parents वाला merge commit",
              hg: "Do parents wala merge commit"
            },
            {
              en: "The 2 branch commits plus a squash commit",
              hi: "Branch के 2 commits और एक squash commit",
              hg: "Branch ke 2 commits aur ek squash commit"
            },
            {
              en: "One new commit; the branch's 2 commits are not in the history",
              hi: "एक नया commit; branch के 2 commits history में नहीं होते",
              hg: "Ek naya commit; branch ke 2 commits history mein nahi hote"
            },
            {
              en: "Nothing changes; only the pointer moves",
              hi: "कुछ नहीं बदलता; सिर्फ़ pointer खिसकता है",
              hg: "Kuch nahi badalta; sirf pointer khisakta hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>Squash makes one new commit with one parent. The branch commits stay only on the branch, so they never appear in <code>main</code>.</p>",
            hi: "<p>Squash एक parent वाला एक नया commit बनाता है। Branch के commits सिर्फ़ branch पर रहते हैं, इसलिए वे <code>main</code> में कभी नहीं दिखते।</p>",
            hg: "<p>Squash ek parent wala ek naya commit banata hai. Branch ke commits sirf branch par rehte hain, isliye ve <code>main</code> mein kabhi nahi dikhte.</p>"
          }
        },
        recap: {
          en: "<ul><li>A commit points to its parent; a branch is just a movable name for one commit.</li><li>Fast-forward moves the pointer; merge commit has two parents; squash makes one new commit.</li><li>Pick one merge style for the team and delete branches after merging.</li></ul>",
          hi: "<ul><li>Commit अपने parent की तरफ़ इशारा करता है; branch एक commit का खिसकने वाला नाम है।</li><li>Fast-forward pointer खिसकाता है; merge commit के दो parents होते हैं; squash एक नया commit बनाता है।</li><li>Team के लिए एक merge style चुनो और merge के बाद branches delete करो।</li></ul>",
          hg: "<ul><li>Commit apne parent ki taraf ishaara karta hai; branch ek commit ka khisakne wala naam hai.</li><li>Fast-forward pointer khiskata hai; merge commit ke do parents hote hain; squash ek naya commit banata hai.</li><li>Team ke liye ek merge style chuno aur merge ke baad branches delete karo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "MiniGit: fast-forward, merge commit and squash on the CRM history",
            hi: "MiniGit: CRM की history पर fast-forward, merge commit और squash",
            hg: "MiniGit: CRM ki history par fast-forward, merge commit aur squash"
          },
          src: "var git = new MiniGit();\ngit.Commit(\"main\", \"Add Customer\");\ngit.Commit(\"main\", \"Add SupportTicket\");\n\n// 1) Fast-forward: main has not moved, so only its pointer slides forward.\ngit.CreateBranch(\"feature/priority\", \"main\");\ngit.Commit(\"feature/priority\", \"Add Priority to ticket\");\ngit.Commit(\"feature/priority\", \"Show Priority in list\");\ngit.FastForward(\"main\", \"feature/priority\");\nConsole.WriteLine($\"fast-forward: main at {git.Tip(\"main\")}, commits made: {git.Total}\");\n\n// 2) Merge commit: both branches moved, so Git joins them with a new commit.\ngit.CreateBranch(\"feature/sla\", \"main\");\ngit.Commit(\"feature/sla\", \"Add SLA timer\");\ngit.Commit(\"main\", \"Hotfix: null email\");\ngit.Merge(\"main\", \"feature/sla\");\nConsole.WriteLine($\"merge: main at {git.Tip(\"main\")}, commits made: {git.Total}\");\n\n// 3) Squash: the branch commits become ONE new commit on main.\ngit.CreateBranch(\"feature/notes\", \"main\");\ngit.Commit(\"feature/notes\", \"Add notes field\");\ngit.Commit(\"feature/notes\", \"Fix notes typo\");\ngit.Squash(\"main\", \"feature/notes\", \"Add notes to ticket\");\nConsole.WriteLine($\"squash: main at {git.Tip(\"main\")}, commits made: {git.Total}\");\n\nConsole.WriteLine(\"main history:\");\nforeach (var line in git.History(\"main\")) Console.WriteLine(\"  \" + line);\n\npublic record Commit(int Id, string Message, int? Parent, int? Parent2 = null);\n\npublic class MiniGit\n{\n    private readonly List<Commit> _commits = new();\n    private readonly Dictionary<string, int> _branches = new();\n\n    public int Total => _commits.Count;\n    public string Tip(string branch) => $\"c{_branches[branch]}\";\n\n    public void Commit(string branch, string message)\n    {\n        int? parent = _branches.TryGetValue(branch, out var tip) ? tip : null;\n        Add(branch, message, parent, null);\n    }\n\n    public void CreateBranch(string name, string from) => _branches[name] = _branches[from];\n\n    public void FastForward(string into, string from) => _branches[into] = _branches[from];\n\n    public void Merge(string into, string from) =>\n        Add(into, $\"Merge {from}\", _branches[into], _branches[from]);\n\n    public void Squash(string into, string from, string message) =>\n        Add(into, message, _branches[into], null);\n\n    private void Add(string branch, string message, int? parent, int? parent2)\n    {\n        _commits.Add(new Commit(_commits.Count + 1, message, parent, parent2));\n        _branches[branch] = _commits.Count;\n    }\n\n    public List<string> History(string branch)\n    {\n        var seen = new HashSet<int>();\n        var todo = new Stack<int>();\n        todo.Push(_branches[branch]);\n        while (todo.Count > 0)\n        {\n            var c = _commits[todo.Pop() - 1];\n            if (!seen.Add(c.Id)) continue;\n            if (c.Parent is int p) todo.Push(p);\n            if (c.Parent2 is int p2) todo.Push(p2);\n        }\n        return seen.OrderByDescending(id => id)\n                   .Select(id => $\"c{id} {_commits[id - 1].Message}\").ToList();\n    }\n}",
          check: "run",
          expected: "fast-forward: main at c4, commits made: 4\nmerge: main at c7, commits made: 7\nsquash: main at c10, commits made: 10\nmain history:\n  c10 Add notes to ticket\n  c7 Merge feature/sla\n  c6 Hotfix: null email\n  c5 Add SLA timer\n  c4 Show Priority in list\n  c3 Add Priority to ticket\n  c2 Add SupportTicket\n  c1 Add Customer"
        }
      ]
    },
    {
      id: "rebase-revert-reflog",
      depth: "short",
      title: {
        en: "Rebase, revert, reset and reflog",
        hi: "Rebase, revert, reset और reflog",
        hg: "Rebase, revert, reset aur reflog"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 1 showed that history is commits joined by parent links and that a branch is only a pointer. Every tool here does one of three things with that picture: replay commits (rebase), add a new undo commit (revert), or move a pointer back (reset). Reflog is the diary of where pointers used to be.</p>",
          hi: "<p>पाठ 1 में देखा कि history parent links से जुड़े commits हैं और branch सिर्फ़ pointer है। यहाँ का हर tool उसी picture पर तीन में से एक काम करता है: commits दोबारा चलाना (rebase), नया undo commit जोड़ना (revert), या pointer पीछे खिसकाना (reset)। Reflog उस diary का नाम है जिसमें लिखा है कि pointers पहले कहाँ थे।</p>",
          hg: "<p>Lesson 1 mein dekha ki history parent links se jude commits hain aur branch sirf pointer hai. Yahan ka har tool usi picture par teen mein se ek kaam karta hai: commits dobara chalana (rebase), naya undo commit jodna (revert), ya pointer peechhe khiskana (reset). Reflog us diary ka naam hai jismein likha hai ki pointers pehle kahan the.</p>"
        },
        what: {
          en: "<p><b>Rebase</b> replays your commits on top of the latest <code>main</code> (they get new ids). <b>Revert</b> adds a new commit that undoes an old one. <b>Reset</b> moves the branch pointer back. <b>Reflog</b> is a local journal of where <code>HEAD</code> pointed, so you can find a lost commit.</p>",
          hi: "<p><b>Rebase</b> तुम्हारे commits को latest <code>main</code> के ऊपर दोबारा चलाता है (उन्हें नए ids मिलते हैं)। <b>Revert</b> एक नया commit जोड़ता है जो पुराने commit को undo करता है। <b>Reset</b> branch का pointer पीछे ले जाता है। <b>Reflog</b> एक local journal है कि <code>HEAD</code> कहाँ-कहाँ था, ताकि खोया commit मिल सके।</p>",
          hg: "<p><b>Rebase</b> tumhare commits ko latest <code>main</code> ke upar dobara chalata hai (unhe naye ids milte hain). <b>Revert</b> ek naya commit jodta hai jo purane commit ko undo karta hai. <b>Reset</b> branch ka pointer peechhe le jaata hai. <b>Reflog</b> ek local journal hai ki <code>HEAD</code> kahan-kahan tha, taaki khoya commit mil sake.</p>"
        },
        why: {
          en: "<p>Everyone makes mistakes: a bad commit, a messy branch, a wrong reset. The Tech Lead must know which fix is safe on a branch that others already pulled. The wrong tool rewrites shared history and breaks teammates.</p>",
          hi: "<p>गलती सब से होती है: खराब commit, गंदी branch, गलत reset। Tech Lead को पता होना चाहिए कि जिस branch को दूसरे pull कर चुके हैं, उस पर कौन-सा fix safe है। गलत tool shared history को बदल देता है और teammates का काम बिगाड़ देता है।</p>",
          hg: "<p>Galti sab se hoti hai: kharab commit, gandi branch, galat reset. Tech Lead ko pata hona chahiye ki jis branch ko doosre pull kar chuke hain, us par kaunsa fix safe hai. Galat tool shared history ko badal deta hai aur teammates ka kaam bigaad deta hai.</p>"
        },
        analogy: {
          en: "<p>A wedding invitation. While the draft is only on your desk you can erase and rewrite (rebase, amend). Once the cards are posted to guests (pushed and pulled by others), you do not call them back. You send a correction card instead. That correction card is <b>revert</b>.</p>",
          hi: "<p>शादी का invitation card। जब तक draft सिर्फ़ तुम्हारी मेज़ पर है, मिटाकर दोबारा लिख सकते हो (rebase, amend)। एक बार cards मेहमानों को post हो गए (push हो गए और दूसरों ने pull कर लिए), तो उन्हें वापस नहीं बुलाते। उसकी जगह सुधार वाला card भेजते हैं। वही सुधार वाला card <b>revert</b> है।</p>",
          hg: "<p>Shaadi ka invitation card. Jab tak draft sirf tumhari mez par hai, mitakar dobara likh sakte ho (rebase, amend). Ek baar cards mehmaanon ko post ho gaye (push ho gaye aur doosron ne pull kar liye), to unhe wapas nahi bulate. Uski jagah sudhaar wala card bhejte hain. Wahi sudhaar wala card <b>revert</b> hai.</p>"
        },
        lines: [
          {
            code: "git rebase origin/main              # replay your commits on the latest main",
            note: {
              en: "Takes your branch commits and replays them after the newest <code>origin/main</code>. They become new commits with new ids, so only do this on your own branch.",
              hi: "तुम्हारी branch के commits को सबसे नए <code>origin/main</code> के बाद दोबारा चलाता है। वे नए ids वाले नए commits बन जाते हैं, इसलिए यह सिर्फ़ अपनी branch पर करो।",
              hg: "Tumhari branch ke commits ko sabse naye <code>origin/main</code> ke baad dobara chalata hai. Ve naye ids wale naye commits ban jaate hain, isliye ye sirf apni branch par karo."
            }
          },
          {
            code: "git push --force-with-lease         # only because you rebased a branch you had already pushed",
            note: {
              en: "After a rebase the old pushed commits are gone, so a normal push is rejected. <code>--force-with-lease</code> overwrites only if nobody else pushed meanwhile.",
              hi: "Rebase के बाद पहले push किए commits हट जाते हैं, इसलिए normal push reject होता है। <code>--force-with-lease</code> तभी overwrite करता है जब बीच में किसी और ने push न किया हो।",
              hg: "Rebase ke baad pehle push kiye commits hat jaate hain, isliye normal push reject hota hai. <code>--force-with-lease</code> tabhi overwrite karta hai jab beech mein kisi aur ne push na kiya ho."
            }
          },
          {
            code: "git revert 4c8a1f3                  # history is kept, safe to push",
            note: {
              en: "Creates a <b>new</b> commit that does the opposite of <code>4c8a1f3</code>. Nothing is rewritten, so it is safe on shared branches.",
              hi: "एक <b>नया</b> commit बनाता है जो <code>4c8a1f3</code> का उल्टा करता है। कुछ rewrite नहीं होता, इसलिए shared branches पर safe है।",
              hg: "Ek <b>naya</b> commit banata hai jo <code>4c8a1f3</code> ka ulta karta hai. Kuch rewrite nahi hota, isliye shared branches par safe hai."
            }
          },
          {
            code: "git revert -m 1 7be3c52             # undoing a MERGE commit: keep parent 1 (mainline)",
            note: {
              en: "A merge commit has two parents, so Git asks which side to keep. <code>-m 1</code> keeps parent 1, the mainline you merged into.",
              hi: "Merge commit के दो parents होते हैं, इसलिए Git पूछता है कि कौन-सी side रखनी है। <code>-m 1</code> parent 1 रखता है, यानी वह mainline जिसमें merge हुआ था।",
              hg: "Merge commit ke do parents hote hain, isliye Git poochta hai ki kaunsi side rakhni hai. <code>-m 1</code> parent 1 rakhta hai, yaani wo mainline jismein merge hua tha."
            }
          },
          {
            code: "git reset --soft HEAD~1             # un-commit, keep the changes staged",
            note: {
              en: "Moves the branch pointer one commit back but keeps your changes. This rewrites history, so use it only for commits you have not pushed.",
              hi: "Branch का pointer एक commit पीछे ले जाता है पर तुम्हारे changes रखता है। यह history बदलता है, इसलिए सिर्फ़ उन commits पर use करो जो push नहीं हुए।",
              hg: "Branch ka pointer ek commit peechhe le jaata hai par tumhare changes rakhta hai. Ye history badalta hai, isliye sirf un commits par use karo jo push nahi hue."
            }
          },
          {
            code: "git reflog                          # find the old id, e.g. HEAD@{3}",
            note: {
              en: "Lists where <code>HEAD</code> pointed before. After a bad reset or rebase, the lost commit id is here.",
              hi: "पहले <code>HEAD</code> कहाँ था, उसकी list देता है। खराब reset या rebase के बाद खोए commit का id यहीं मिलता है।",
              hg: "Pehle <code>HEAD</code> kahan tha, uski list deta hai. Kharab reset ya rebase ke baad khoye commit ka id yahin milta hai."
            }
          },
          {
            code: "git branch rescue 9d41e07           # point a new branch at it",
            note: {
              en: "Gives the old commit a branch name again, so it is safe from cleanup. Reflog is local to your clone, and entries for commits no branch points to expire (by default after 30 days).",
              hi: "पुराने commit को फिर से branch का नाम देता है, ताकि वह cleanup से बच जाए। Reflog सिर्फ़ तुम्हारी local copy में है, और जिन commits पर कोई branch नहीं है उनकी entries expire हो जाती हैं (default 30 दिन)।",
              hg: "Purane commit ko phir se branch ka naam deta hai, taaki wo cleanup se bach jaye. Reflog sirf tumhari local copy mein hai, aur jin commits par koi branch nahi hai unki entries expire ho jaati hain (default 30 din)."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Rebasing or resetting a branch that teammates already pulled. They get duplicate commits and painful conflicts. Use <code>revert</code> there.</li><li>Using <code>git push --force</code> instead of <code>--force-with-lease</code>. Plain force can erase a teammate's new commit.</li><li>Running <code>git reset --hard</code> with uncommitted work. It throws that work away, and reflog cannot bring back changes that were never committed.</li></ul>",
          hi: "<ul><li>ऐसी branch को rebase या reset करना जिसे teammates pull कर चुके हैं। उन्हें duplicate commits और मुश्किल conflicts मिलते हैं। वहाँ <code>revert</code> use करो।</li><li><code>--force-with-lease</code> की जगह <code>git push --force</code> लिखना। सादा force teammate का नया commit मिटा सकता है।</li><li>Uncommitted काम के साथ <code>git reset --hard</code> चलाना। वह काम फेंक देता है, और जो changes कभी commit ही नहीं हुए उन्हें reflog वापस नहीं ला सकता।</li></ul>",
          hg: "<ul><li>Aisi branch ko rebase ya reset karna jise teammates pull kar chuke hain. Unhe duplicate commits aur mushkil conflicts milte hain. Wahan <code>revert</code> use karo.</li><li><code>--force-with-lease</code> ki jagah <code>git push --force</code> likhna. Saada force teammate ka naya commit mita sakta hai.</li><li>Uncommitted kaam ke saath <code>git reset --hard</code> chalana. Wo kaam phenk deta hai, aur jo changes kabhi commit hi nahi hue unhe reflog wapas nahi la sakta.</li></ul>"
        },
        whenToUse: {
          en: "<p>On your <b>own, unshared</b> branch: rebase, amend and soft reset to tidy before review. On <b>shared</b> branches (<code>main</code>, release): only <code>revert</code>. When something vanished: <code>reflog</code> first, panic later.</p>",
          hi: "<p>अपनी <b>unshared</b> branch पर: review से पहले सफ़ाई के लिए rebase, amend और soft reset। <b>Shared</b> branches (<code>main</code>, release) पर: सिर्फ़ <code>revert</code>। जब कुछ गायब हो जाए: पहले <code>reflog</code>, घबराना बाद में।</p>",
          hg: "<p>Apni <b>unshared</b> branch par: review se pehle safaai ke liye rebase, amend aur soft reset. <b>Shared</b> branches (<code>main</code>, release) par: sirf <code>revert</code>. Jab kuch gaayab ho jaye: pehle <code>reflog</code>, ghabrana baad mein.</p>"
        },
        exercise: {
          task: {
            en: "<p>A bad commit <code>a1b2c3d</code> is already on <code>main</code> and your team has pulled it. Write the commands that undo it safely and publish the fix.</p>",
            hi: "<p>एक खराब commit <code>a1b2c3d</code> <code>main</code> पर है और तुम्हारी team उसे pull कर चुकी है। ऐसे commands लिखो जो उसे safe तरीके से undo करें और fix publish करें।</p>",
            hg: "<p>Ek kharab commit <code>a1b2c3d</code> <code>main</code> par hai aur tumhari team use pull kar chuki hai. Aise commands likho jo use safe tareeke se undo karein aur fix publish karein.</p>"
          },
          hint: {
            en: "<p>Shared branch means no history rewriting. Which command adds a new commit instead?</p>",
            hi: "<p>Shared branch यानी history rewrite नहीं। कौन-सा command इसकी जगह नया commit जोड़ता है?</p>",
            hg: "<p>Shared branch yaani history rewrite nahi. Kaunsa command iski jagah naya commit jodta hai?</p>"
          },
          solution: {
            lang: "bash",
            caption: {
              en: "Solution: revert on the shared branch, then a normal push",
              hi: "हल: shared branch पर revert, फिर normal push",
              hg: "Solution: shared branch par revert, phir normal push"
            },
            src: "git switch main\ngit pull\ngit revert a1b2c3d\ngit push origin main",
            check: "none"
          }
        },
        quiz: {
          q: {
            en: "A bad commit is on <code>main</code> and teammates have already pulled it. What is the safest fix?",
            hi: "एक खराब commit <code>main</code> पर है और teammates उसे pull कर चुके हैं। सबसे safe fix क्या है?",
            hg: "Ek kharab commit <code>main</code> par hai aur teammates use pull kar chuke hain. Sabse safe fix kya hai?"
          },
          options: [
            {
              en: "<code>git revert</code> the commit and push normally",
              hi: "Commit को <code>git revert</code> करो और normal push करो",
              hg: "Commit ko <code>git revert</code> karo aur normal push karo"
            },
            {
              en: "<code>git reset --hard HEAD~1</code> and force-push",
              hi: "<code>git reset --hard HEAD~1</code> और force-push",
              hg: "<code>git reset --hard HEAD~1</code> aur force-push"
            },
            {
              en: "Rebase <code>main</code> and drop the commit",
              hi: "<code>main</code> को rebase करके commit drop करो",
              hg: "<code>main</code> ko rebase karke commit drop karo"
            },
            {
              en: "Delete <code>main</code> and recreate it",
              hi: "<code>main</code> delete करके दोबारा बनाओ",
              hg: "<code>main</code> delete karke dobara banao"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>Revert adds a new commit and rewrites nothing, so teammates just pull it. The other options rewrite shared history.</p>",
            hi: "<p>Revert नया commit जोड़ता है और कुछ rewrite नहीं करता, इसलिए teammates बस pull कर लेते हैं। बाकी options shared history बदलते हैं।</p>",
            hg: "<p>Revert naya commit jodta hai aur kuch rewrite nahi karta, isliye teammates bas pull kar lete hain. Baaki options shared history badalte hain.</p>"
          }
        },
        recap: {
          en: "<ul><li>Rebase, amend and soft reset rewrite history: use them only on your own unshared branch.</li><li>On shared branches undo with <code>git revert</code> (use <code>-m 1</code> for a merge commit).</li><li><code>git reflog</code> finds lost commits; save one with <code>git branch rescue &lt;id&gt;</code>.</li></ul>",
          hi: "<ul><li>Rebase, amend और soft reset history बदलते हैं: इन्हें सिर्फ़ अपनी unshared branch पर use करो।</li><li>Shared branches पर <code>git revert</code> से undo करो (merge commit के लिए <code>-m 1</code>)।</li><li><code>git reflog</code> खोए commits ढूँढता है; <code>git branch rescue &lt;id&gt;</code> से उसे बचा लो।</li></ul>",
          hg: "<ul><li>Rebase, amend aur soft reset history badalte hain: inhe sirf apni unshared branch par use karo.</li><li>Shared branches par <code>git revert</code> se undo karo (merge commit ke liye <code>-m 1</code>).</li><li><code>git reflog</code> khoye commits dhoondhta hai; <code>git branch rescue &lt;id&gt;</code> se use bacha lo.</li></ul>"
        }
      },
      code: [
        {
          lang: "bash",
          caption: {
            en: "Tidy your own branch, undo on a shared branch, and rescue a lost commit (shown for reading; ids and names are examples)",
            hi: "अपनी branch की सफ़ाई, shared branch पर undo, और खोए commit को बचाना (पढ़ने के लिए; ids और नाम उदाहरण हैं)",
            hg: "Apni branch ki safaai, shared branch par undo, aur khoye commit ko bachana (padhne ke liye; ids aur naam udaharan hain)"
          },
          src: "# --- your own branch: tidy before review ---\ngit switch feature/priority\ngit fetch origin\ngit rebase origin/main              # replay your commits on the latest main\ngit push --force-with-lease         # only because you rebased a branch you had already pushed\n\n# --- a bad commit reached shared main: undo with a NEW commit ---\ngit revert 4c8a1f3                  # history is kept, safe to push\ngit revert -m 1 7be3c52             # undoing a MERGE commit: keep parent 1 (mainline)\n\n# --- local only: take the last commit back ---\ngit reset --soft HEAD~1             # un-commit, keep the changes staged\n\n# --- lost commits after a bad reset? ---\ngit reflog                          # find the old id, e.g. HEAD@{3}\ngit branch rescue 9d41e07           # point a new branch at it",
          check: "none"
        }
      ]
    },
    {
      id: "pull-request-gate",
      depth: "short",
      title: {
        en: "Pull request and the branch policy gate",
        hi: "Pull request और branch policy का gate",
        hg: "Pull request aur branch policy ka gate"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lessons 1 and 2 showed how a branch lands on <code>main</code> and how to repair history after a mistake. The best repair is a mistake that never lands. A pull request (PR) is the checkpoint before the merge, and a branch policy makes the checkpoint automatic.</p>",
          hi: "<p>पाठ 1 और 2 में देखा कि branch <code>main</code> पर कैसे उतरती है और गलती के बाद history कैसे ठीक होती है। सबसे अच्छा fix वह गलती है जो कभी उतरी ही नहीं। Pull request (PR) merge से पहले की जाँच-चौकी है, और branch policy उस चौकी को automatic बना देती है।</p>",
          hg: "<p>Lessons 1 aur 2 mein dekha ki branch <code>main</code> par kaise utarti hai aur galti ke baad history kaise theek hoti hai. Sabse achha fix wo galti hai jo kabhi utri hi nahi. Pull request (PR) merge se pehle ki jaanch-chowki hai, aur branch policy us chowki ko automatic bana deti hai.</p>"
        },
        what: {
          en: "<p>A <b>pull request</b> asks the team to review a branch before it merges into <code>main</code>. A <b>branch policy</b> (Azure Repos) or <b>branch protection</b> (GitHub) is a set of rules the tool enforces: minimum reviewers, a passing build, resolved comments. No one can push straight to <code>main</code>.</p>",
          hi: "<p><b>Pull request</b> team से कहता है कि branch को <code>main</code> में merge होने से पहले review करो। <b>Branch policy</b> (Azure Repos) या <b>branch protection</b> (GitHub) कुछ rules का set है जिसे tool खुद लागू करता है: कम से कम reviewers, build pass, comments resolved। कोई सीधे <code>main</code> पर push नहीं कर सकता।</p>",
          hg: "<p><b>Pull request</b> team se kehta hai ki branch ko <code>main</code> mein merge hone se pehle review karo. <b>Branch policy</b> (Azure Repos) ya <b>branch protection</b> (GitHub) kuch rules ka set hai jise tool khud laagu karta hai: kam se kam reviewers, build pass, comments resolved. Koi seedhe <code>main</code> par push nahi kar sakta.</p>"
        },
        why: {
          en: "<p>Reviews catch design and edge-case problems; the build catches broken code. If these are only \"good habits\", they get skipped on a busy Friday. A policy makes the safe path the only path, and it protects the Tech Lead from late-night reverts.</p>",
          hi: "<p>Reviews design और edge-case की गलतियाँ पकड़ते हैं; build टूटा हुआ code पकड़ता है। अगर ये सिर्फ़ \"अच्छी आदतें\" हैं, तो busy Friday को छूट जाएँगी। Policy safe रास्ते को इकलौता रास्ता बना देती है, और Tech Lead को रात के revert से बचाती है।</p>",
          hg: "<p>Reviews design aur edge-case ki galtiyan pakadte hain; build toota hua code pakadta hai. Agar ye sirf \"achhi aadatein\" hain, to busy Friday ko chhoot jayengi. Policy safe raaste ko ikloota raasta bana deti hai, aur Tech Lead ko raat ke revert se bachati hai.</p>"
        },
        analogy: {
          en: "<p>The gate of a housing society. The guard does not trust \"I am a good person\". He checks the visitor register, the ID and a call to the flat owner. A branch policy is that guard: same checks for every visitor, even the society president.</p>",
          hi: "<p>Housing society का gate। Guard \"मैं अच्छा आदमी हूँ\" पर भरोसा नहीं करता। वह visitor register, ID और flat वाले को फ़ोन देखता है। Branch policy वही guard है: हर visitor के लिए वही जाँच, society के president के लिए भी।</p>",
          hg: "<p>Housing society ka gate. Guard \"main achha aadmi hoon\" par bharosa nahi karta. Wo visitor register, ID aur flat wale ko phone dekhta hai. Branch policy wahi guard hai: har visitor ke liye wahi jaanch, society ke president ke liye bhi.</p>"
        },
        lines: [
          {
            code: "var policy = new BranchPolicy(MinReviewers: 2, RequireBuild: true, RequireResolvedComments: true);",
            note: {
              en: "The rules for <code>main</code>, written once. In Azure Repos you set the same three things on the branch: minimum reviewers, build validation, comment resolution.",
              hi: "<code>main</code> के rules, एक बार लिखे हुए। Azure Repos में तुम branch पर यही तीन चीज़ें set करते हो: minimum reviewers, build validation, comment resolution।",
              hg: "<code>main</code> ke rules, ek baar likhe hue. Azure Repos mein tum branch par yahi teen cheezein set karte ho: minimum reviewers, build validation, comment resolution."
            }
          },
          {
            code: "if (pr.Approvals < MinReviewers)",
            note: {
              en: "Rule 1: enough people looked at the change. Two pairs of eyes is a common minimum.",
              hi: "Rule 1: काफ़ी लोगों ने change देखा। दो जोड़ी आँखें एक आम minimum है।",
              hg: "Rule 1: kaafi logon ne change dekha. Do jodi aankhein ek aam minimum hai."
            }
          },
          {
            code: "if (RequireBuild && !pr.BuildPassed)",
            note: {
              en: "Rule 2: the build and tests pass. In Azure Repos Git this is a <b>Build validation</b> policy that runs your pipeline on the PR (lesson 4).",
              hi: "Rule 2: build और tests pass हों। Azure Repos Git में यह <b>Build validation</b> policy है जो PR पर तुम्हारी pipeline चलाती है (पाठ 4)।",
              hg: "Rule 2: build aur tests pass hon. Azure Repos Git mein ye <b>Build validation</b> policy hai jo PR par tumhari pipeline chalati hai (lesson 4)."
            }
          },
          {
            code: "if (RequireResolvedComments && pr.OpenComments > 0)",
            note: {
              en: "Rule 3: every review comment is answered or fixed before merge, so nothing is forgotten.",
              hi: "Rule 3: merge से पहले हर review comment का जवाब या fix हो चुका हो, ताकि कुछ भूले नहीं।",
              hg: "Rule 3: merge se pehle har review comment ka jawab ya fix ho chuka ho, taaki kuch bhoole nahi."
            }
          },
          {
            code: "var size = pr.ChangedLines > 800 ?",
            note: {
              en: "Size is not a tool rule here but a team habit: huge PRs get shallow reviews. A few hundred changed lines review well; thousands do not.",
              hi: "Size यहाँ tool का rule नहीं बल्कि team की आदत है: बहुत बड़े PRs का review ऊपरी होता है। कुछ सौ lines अच्छे से review होती हैं; हज़ारों नहीं।",
              hg: "Size yahan tool ka rule nahi balki team ki aadat hai: bahut bade PRs ka review upari hota hai. Kuch sau lines achhe se review hoti hain; hazaron nahi."
            }
          },
          {
            code: "string.Join(\", \", problems)",
            note: {
              en: "The author sees all problems at once, not one per attempt. Good tool messages save a round of waiting.",
              hi: "Author को सारी problems एक साथ दिखती हैं, हर कोशिश में एक नहीं। अच्छे messages एक round का इंतज़ार बचाते हैं।",
              hg: "Author ko saari problems ek saath dikhti hain, har koshish mein ek nahi. Achhe messages ek round ka intezaar bachate hain."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Writing <code>pr:</code> in the YAML of an <b>Azure Repos Git</b> repo and expecting PR builds. It only works for GitHub and Bitbucket Cloud; Azure Repos needs a Build validation branch policy.</li><li>A policy with no build rule. A green \"approved\" PR with broken code still merges.</li><li>Letting PRs grow to thousands of lines. Reviewers skim, and bugs slip through.</li></ul>",
          hi: "<ul><li><b>Azure Repos Git</b> repo की YAML में <code>pr:</code> लिखकर PR builds की उम्मीद करना। यह सिर्फ़ GitHub और Bitbucket Cloud में चलता है; Azure Repos को Build validation branch policy चाहिए।</li><li>बिना build rule की policy। टूटे code वाला \"approved\" PR भी merge हो जाता है।</li><li>PRs को हज़ारों lines तक बढ़ने देना। Reviewers सरसरी नज़र डालते हैं और bugs निकल जाते हैं।</li></ul>",
          hg: "<ul><li><b>Azure Repos Git</b> repo ki YAML mein <code>pr:</code> likhkar PR builds ki ummeed karna. Ye sirf GitHub aur Bitbucket Cloud mein chalta hai; Azure Repos ko Build validation branch policy chahiye.</li><li>Bina build rule ki policy. Toote code wala \"approved\" PR bhi merge ho jaata hai.</li><li>PRs ko hazaron lines tak badhne dena. Reviewers sarsari nazar daalte hain aur bugs nikal jaate hain.</li></ul>"
        },
        whenToUse: {
          en: "<p>Protect <code>main</code> and every release branch on every team repo. Start with: 2 reviewers, build validation, resolved comments, no direct push. As a TL, comment on the code and not the person, ask questions, and say what is good too.</p>",
          hi: "<p>हर team repo में <code>main</code> और हर release branch को protect करो। शुरुआत: 2 reviewers, build validation, resolved comments, सीधा push बंद। TL के रूप में code पर comment करो, इंसान पर नहीं, सवाल पूछो, और जो अच्छा है वह भी बताओ।</p>",
          hg: "<p>Har team repo mein <code>main</code> aur har release branch ko protect karo. Shuruaat: 2 reviewers, build validation, resolved comments, seedha push band. TL ke roop mein code par comment karo, insaan par nahi, sawaal poochho, aur jo achha hai wo bhi batao.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a fourth rule: a PR also needs a <b>linked work item</b>. Write <code>CanMerge</code> with three parameters and print the result for three PRs. Expected: True, False, False.</p>",
            hi: "<p>चौथा rule जोड़ो: PR में एक <b>linked work item</b> भी चाहिए। तीन parameters वाला <code>CanMerge</code> लिखो और तीन PRs के लिए result print करो। Expected: True, False, False।</p>",
            hg: "<p>Chautha rule jodo: PR mein ek <b>linked work item</b> bhi chahiye. Teen parameters wala <code>CanMerge</code> likho aur teen PRs ke liye result print karo. Expected: True, False, False.</p>"
          },
          hint: {
            en: "<p>Join all conditions with <code>&amp;&amp;</code>. The third PR has only 1 approval.</p>",
            hi: "<p>सभी conditions को <code>&amp;&amp;</code> से जोड़ो। तीसरे PR में सिर्फ़ 1 approval है।</p>",
            hg: "<p>Sabhi conditions ko <code>&amp;&amp;</code> se jodo. Teesre PR mein sirf 1 approval hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a CanMerge helper with a work-item rule",
              hi: "हल: work-item rule वाला CanMerge helper",
              hg: "Solution: work-item rule wala CanMerge helper"
            },
            src: "Console.WriteLine(CanMerge(approvals: 2, buildPassed: true, hasLinkedWorkItem: true));\nConsole.WriteLine(CanMerge(approvals: 2, buildPassed: true, hasLinkedWorkItem: false));\nConsole.WriteLine(CanMerge(approvals: 1, buildPassed: true, hasLinkedWorkItem: true));\n\nstatic bool CanMerge(int approvals, bool buildPassed, bool hasLinkedWorkItem) =>\n    approvals >= 2 && buildPassed && hasLinkedWorkItem;",
            check: "run",
            expected: "True\nFalse\nFalse"
          }
        },
        quiz: {
          q: {
            en: "Your repo is in Azure Repos Git. How do you run the pipeline on every PR to <code>main</code>?",
            hi: "तुम्हारा repo Azure Repos Git में है। <code>main</code> के हर PR पर pipeline कैसे चलाओगे?",
            hg: "Tumhara repo Azure Repos Git mein hai. <code>main</code> ke har PR par pipeline kaise chalaoge?"
          },
          options: [
            {
              en: "Add <code>pr:</code> to the YAML file",
              hi: "YAML file में <code>pr:</code> जोड़ो",
              hg: "YAML file mein <code>pr:</code> jodo"
            },
            {
              en: "Ask reviewers to run the build locally",
              hi: "Reviewers से कहो कि build local चलाएँ",
              hg: "Reviewers se kaho ki build local chalayein"
            },
            {
              en: "Run the pipeline every night instead",
              hi: "इसकी जगह pipeline हर रात चलाओ",
              hg: "Iski jagah pipeline har raat chalao"
            },
            {
              en: "Add a Build validation branch policy on <code>main</code>",
              hi: "<code>main</code> पर Build validation branch policy जोड़ो",
              hg: "<code>main</code> par Build validation branch policy jodo"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>For Azure Repos Git the YAML <code>pr:</code> trigger is ignored. A Build validation policy on the branch runs the pipeline for each PR and can block the merge when it fails.</p>",
            hi: "<p>Azure Repos Git में YAML का <code>pr:</code> trigger ignore होता है। Branch पर Build validation policy हर PR के लिए pipeline चलाती है और fail होने पर merge रोक सकती है।</p>",
            hg: "<p>Azure Repos Git mein YAML ka <code>pr:</code> trigger ignore hota hai. Branch par Build validation policy har PR ke liye pipeline chalati hai aur fail hone par merge rok sakti hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>A PR is the review checkpoint; a branch policy enforces the rules for everyone.</li><li>Typical rules: minimum reviewers, passing build validation, resolved comments, no direct push to <code>main</code>.</li><li>Keep PRs small; Azure Repos needs Build validation, not <code>pr:</code> in YAML.</li></ul>",
          hi: "<ul><li>PR review की जाँच-चौकी है; branch policy हर किसी पर rules लागू करती है।</li><li>आम rules: minimum reviewers, build validation pass, resolved comments, <code>main</code> पर सीधा push नहीं।</li><li>PRs छोटे रखो; Azure Repos को Build validation चाहिए, YAML में <code>pr:</code> नहीं।</li></ul>",
          hg: "<ul><li>PR review ki jaanch-chowki hai; branch policy har kisi par rules laagu karti hai.</li><li>Aam rules: minimum reviewers, build validation pass, resolved comments, <code>main</code> par seedha push nahi.</li><li>PRs chhote rakho; Azure Repos ko Build validation chahiye, YAML mein <code>pr:</code> nahi.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A BranchPolicy checks three PRs the way a branch policy would",
            hi: "BranchPolicy तीन PRs को वैसे जाँचती है जैसे branch policy जाँचेगी",
            hg: "BranchPolicy teen PRs ko waise jaanchti hai jaise branch policy jaanchegi"
          },
          src: "var policy = new BranchPolicy(MinReviewers: 2, RequireBuild: true, RequireResolvedComments: true);\n\nvar pullRequests = new[]\n{\n    new PullRequest(101, \"Add SLA timer\", Approvals: 2, BuildPassed: true, OpenComments: 0, ChangedLines: 180),\n    new PullRequest(102, \"Rewrite ticket module\", Approvals: 1, BuildPassed: true, OpenComments: 3, ChangedLines: 2400),\n    new PullRequest(103, \"Fix email null check\", Approvals: 2, BuildPassed: false, OpenComments: 0, ChangedLines: 12)\n};\n\nforeach (var pr in pullRequests)\n{\n    var problems = policy.Check(pr);\n    var size = pr.ChangedLines > 800 ? $\" (big PR: {pr.ChangedLines} lines, please split)\" : \"\";\n    Console.WriteLine(problems.Count == 0\n        ? $\"PR #{pr.Id} {pr.Title}: ready to merge\"\n        : $\"PR #{pr.Id} {pr.Title}: blocked - {string.Join(\", \", problems)}{size}\");\n}\n\npublic record PullRequest(int Id, string Title, int Approvals, bool BuildPassed, int OpenComments, int ChangedLines);\n\npublic record BranchPolicy(int MinReviewers, bool RequireBuild, bool RequireResolvedComments)\n{\n    public List<string> Check(PullRequest pr)\n    {\n        var problems = new List<string>();\n        if (pr.Approvals < MinReviewers)\n            problems.Add($\"needs {MinReviewers} approvals (has {pr.Approvals})\");\n        if (RequireBuild && !pr.BuildPassed)\n            problems.Add(\"build failed\");\n        if (RequireResolvedComments && pr.OpenComments > 0)\n            problems.Add($\"{pr.OpenComments} unresolved comments\");\n        return problems;\n    }\n}",
          check: "run",
          expected: "PR #101 Add SLA timer: ready to merge\nPR #102 Rewrite ticket module: blocked - needs 2 approvals (has 1), 3 unresolved comments (big PR: 2400 lines, please split)\nPR #103 Fix email null check: blocked - build failed"
        }
      ]
    },
    {
      id: "pipeline-yaml-ci",
      depth: "short",
      title: {
        en: "Azure Pipelines YAML: build, test and publish",
        hi: "Azure Pipelines YAML: build, test और publish",
        hg: "Azure Pipelines YAML: build, test aur publish"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 3 added a branch policy that needs a build to say \"this PR is healthy\". This lesson writes that build as a pipeline file in the repo: it builds the CRM, runs <code>Crm.Tests</code> and publishes <code>Crm.Api</code> as one artifact.</p>",
          hi: "<p>पाठ 3 में एक branch policy जुड़ी जिसे यह बताने के लिए build चाहिए कि \"यह PR ठीक है\"। यह पाठ वही build repo की pipeline file के रूप में लिखता है: CRM build करती है, <code>Crm.Tests</code> चलाती है और <code>Crm.Api</code> को एक artifact के रूप में publish करती है।</p>",
          hg: "<p>Lesson 3 mein ek branch policy judi jise ye batane ke liye build chahiye ki \"ye PR theek hai\". Ye lesson wahi build repo ki pipeline file ke roop mein likhta hai: CRM build karti hai, <code>Crm.Tests</code> chalati hai aur <code>Crm.Api</code> ko ek artifact ke roop mein publish karti hai.</p>"
        },
        what: {
          en: "<p>An Azure Pipelines <b>YAML</b> file describes the build as code. A <b>trigger</b> starts it. Work is split into <b>stages</b>, each stage has <b>jobs</b>, each job has <b>steps</b>. A job runs on an <b>agent</b> (a machine) taken from a <b>pool</b>. If any step fails, the run stops and turns red.</p>",
          hi: "<p>Azure Pipelines की <b>YAML</b> file build को code के रूप में बताती है। <b>Trigger</b> उसे शुरू करता है। काम <b>stages</b> में बँटा है, हर stage में <b>jobs</b>, हर job में <b>steps</b>। Job एक <b>agent</b> (machine) पर चलता है जो <b>pool</b> से मिलता है। कोई भी step fail हुआ तो run रुक जाता है और लाल हो जाता है।</p>",
          hg: "<p>Azure Pipelines ki <b>YAML</b> file build ko code ke roop mein batati hai. <b>Trigger</b> use shuru karta hai. Kaam <b>stages</b> mein baanta jaata hai, har stage mein <b>jobs</b>, har job mein <b>steps</b>. Job ek <b>agent</b> (machine) par chalta hai jo <b>pool</b> se milta hai. Koi bhi step fail hua to run ruk jaata hai aur laal ho jaata hai.</p>"
        },
        why: {
          en: "<p>A build that lives in someone's head or on one laptop is not repeatable. YAML in the repo is reviewed in PRs like code, has history, and every branch gets the same build. Everyone sees the same red or green.</p>",
          hi: "<p>जो build किसी के दिमाग़ में या एक laptop पर रहता है वह दोहराया नहीं जा सकता। Repo में YAML का PRs में code की तरह review होता है, उसकी history रहती है, और हर branch को वही build मिलता है। सबको वही लाल या हरा दिखता है।</p>",
          hg: "<p>Jo build kisi ke dimaag mein ya ek laptop par rehta hai wo dohraya nahi ja sakta. Repo mein YAML ka PRs mein code ki tarah review hota hai, uski history rehti hai, aur har branch ko wahi build milta hai. Sabko wahi laal ya hara dikhta hai.</p>"
        },
        analogy: {
          en: "<p>A recipe card. Stage = a course of the meal, job = one cook in one kitchen, steps = the numbered instructions. If step 3 burns the dal, the cook stops: nothing gets served. Anyone with the card cooks the same dish.</p>",
          hi: "<p>Recipe card। Stage = खाने का एक course, job = एक kitchen में एक cook, steps = number वाली instructions। अगर step 3 में दाल जल गई तो cook रुक जाता है: कुछ परोसा नहीं जाता। कार्ड वाला कोई भी वही dish बनाता है।</p>",
          hg: "<p>Recipe card. Stage = khane ka ek course, job = ek kitchen mein ek cook, steps = number wali instructions. Agar step 3 mein daal jal gayi to cook ruk jaata hai: kuch parosa nahi jaata. Card wala koi bhi wahi dish banata hai.</p>"
        },
        lines: [
          {
            code: "trigger:",
            note: {
              en: "The CI <code>trigger</code>: start the pipeline on every push to a branch in the <code>include</code> list, here <code>main</code>. PR builds on Azure Repos come from the Build validation policy (lesson 3), not from this file.",
              hi: "CI <code>trigger</code>: <code>include</code> list की किसी branch पर हर push पर pipeline शुरू करो, यहाँ <code>main</code>। Azure Repos पर PR builds इस file से नहीं, Build validation policy (पाठ 3) से चलते हैं।",
              hg: "CI <code>trigger</code>: <code>include</code> list ki kisi branch par har push par pipeline shuru karo, yahan <code>main</code>. Azure Repos par PR builds is file se nahi, Build validation policy (lesson 3) se chalte hain."
            }
          },
          {
            code: "vmImage: ubuntu-latest",
            note: {
              en: "The <b>pool</b>: a Microsoft-hosted Linux agent. A fresh VM per job, nothing for you to patch. The .NET SDK is installed by a step below.",
              hi: "<b>Pool</b>: Microsoft का hosted Linux agent। हर job के लिए नई VM, तुम्हें कुछ patch नहीं करना। .NET SDK नीचे वाले step से install होगी।",
              hg: "<b>Pool</b>: Microsoft ka hosted Linux agent. Har job ke liye nayi VM, tumhe kuch patch nahi karna. .NET SDK neeche wale step se install hogi."
            }
          },
          {
            code: "- stage: Build",
            note: {
              en: "A <b>stage</b> is a big phase of the run. Later (lesson 6) we add deploy stages after this one.",
              hi: "<b>Stage</b> run का एक बड़ा phase है। आगे (पाठ 6) इसके बाद deploy stages जोड़ेंगे।",
              hg: "<b>Stage</b> run ka ek bada phase hai. Aage (lesson 6) iske baad deploy stages jodenge."
            }
          },
          {
            code: "- job: BuildAndTest",
            note: {
              en: "A <b>job</b> runs on one agent. Its steps share the same machine and the same files, so one step can use what the previous one built.",
              hi: "<b>Job</b> एक agent पर चलता है। उसके steps एक ही machine और एक ही files share करते हैं, इसलिए एक step पिछले step का बनाया इस्तेमाल कर सकता है।",
              hg: "<b>Job</b> ek agent par chalta hai. Uske steps ek hi machine aur ek hi files share karte hain, isliye ek step pichhle step ka banaya istemaal kar sakta hai."
            }
          },
          {
            code: "- task: UseDotNet@2",
            note: {
              en: "A <b>task</b> is a ready-made step (<code>@2</code> is the task version). <code>UseDotNet@2</code> installs the SDK you ask for; <code>10.0.x</code> means the newest 10.0 patch, so every run builds with .NET 10.",
              hi: "<b>Task</b> पहले से बना step है (<code>@2</code> task की version है)। <code>UseDotNet@2</code> माँगी गई SDK install करता है; <code>10.0.x</code> मतलब 10.0 का सबसे नया patch, ताकि हर run .NET 10 से build हो।",
              hg: "<b>Task</b> pehle se bana step hai (<code>@2</code> task ki version hai). <code>UseDotNet@2</code> maangi gayi SDK install karta hai; <code>10.0.x</code> matlab 10.0 ka sabse naya patch, taaki har run .NET 10 se build ho."
            }
          },
          {
            code: "command: test",
            note: {
              en: "<code>DotNetCoreCLI@2</code> runs <code>dotnet test</code> on the <code>Crm.Tests</code> project named below. It restores and builds first. Failed tests fail the step, and results show on the run page.",
              hi: "<code>DotNetCoreCLI@2</code> नीचे लिखे <code>Crm.Tests</code> project पर <code>dotnet test</code> चलाता है। पहले restore और build करता है। Tests fail हुए तो step fail, और results run page पर दिखते हैं।",
              hg: "<code>DotNetCoreCLI@2</code> neeche likhe <code>Crm.Tests</code> project par <code>dotnet test</code> chalata hai. Pehle restore aur build karta hai. Tests fail hue to step fail, aur results run page par dikhte hain."
            }
          },
          {
            code: "publishWebProjects: false",
            note: {
              en: "By default the publish command looks for web projects by itself. <code>false</code> lets us name <code>Crm.Api</code> exactly in <code>projects</code>.",
              hi: "Default में publish command web projects खुद ढूँढता है। <code>false</code> से हम <code>projects</code> में <code>Crm.Api</code> का नाम ठीक-ठीक देते हैं।",
              hg: "Default mein publish command web projects khud dhoondhta hai. <code>false</code> se hum <code>projects</code> mein <code>Crm.Api</code> ka naam theek-theek dete hain."
            }
          },
          {
            code: "zipAfterPublish: false",
            note: {
              en: "Keep the output as plain files in a folder, not a zip. The deploy step in lesson 6 uses that folder.",
              hi: "Output को zip नहीं, folder में सादी files के रूप में रखो। पाठ 6 का deploy step वही folder use करता है।",
              hg: "Output ko zip nahi, folder mein saadi files ke roop mein rakho. Lesson 6 ka deploy step wahi folder use karta hai."
            }
          },
          {
            code: "modifyOutputPath: false",
            note: {
              en: "By default the task adds a <code>Crm.Api</code> sub-folder under the output path. <code>false</code> puts the files straight into <code>api</code>, so <code>Crm.Api.dll</code> sits at the root of the artifact.",
              hi: "Default में task output path के नीचे एक <code>Crm.Api</code> sub-folder जोड़ देता है। <code>false</code> से files सीधे <code>api</code> में जाती हैं, इसलिए <code>Crm.Api.dll</code> artifact के root में रहती है।",
              hg: "Default mein task output path ke neeche ek <code>Crm.Api</code> sub-folder jod deta hai. <code>false</code> se files seedhe <code>api</code> mein jaati hain, isliye <code>Crm.Api.dll</code> artifact ke root mein rehti hai."
            }
          },
          {
            code: "arguments: --configuration Release --output $(Build.ArtifactStagingDirectory)/api",
            note: {
              en: "Extra <code>dotnet</code> options. <code>Build.ArtifactStagingDirectory</code> is a predefined folder on the agent for files you will publish.",
              hi: "Extra <code>dotnet</code> options। <code>Build.ArtifactStagingDirectory</code> agent पर पहले से तय folder है उन files के लिए जो तुम publish करोगे।",
              hg: "Extra <code>dotnet</code> options. <code>Build.ArtifactStagingDirectory</code> agent par pehle se tay folder hai un files ke liye jo tum publish karoge."
            }
          },
          {
            code: "artifact: drop",
            note: {
              en: "Uploads the folder as ONE artifact named <code>drop</code>. Every later stage downloads this same artifact: build once, deploy many.",
              hi: "Folder को <code>drop</code> नाम के एक ही artifact के रूप में upload करता है। आगे के सभी stages यही artifact download करते हैं: एक बार build, कई जगह deploy।",
              hg: "Folder ko <code>drop</code> naam ke ek hi artifact ke roop mein upload karta hai. Aage ke sabhi stages yahi artifact download karte hain: ek baar build, kai jagah deploy."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Wrong indentation. YAML uses spaces (never tabs), and a step moved by two spaces changes its meaning or breaks the file.</li><li>Putting every step in a <code>script:</code> with copied commands in ten pipelines. Use ready-made tasks and, later, templates.</li><li>Rebuilding in every stage. Build and publish once, then pass the artifact on.</li></ul>",
          hi: "<ul><li>गलत indentation। YAML में spaces चलते हैं (tabs कभी नहीं), और दो space खिसका हुआ step उसका मतलब बदल देता है या file तोड़ देता है।</li><li>हर step को <code>script:</code> में डालकर वही commands दस pipelines में copy करना। Ready-made tasks और आगे templates use करो।</li><li>हर stage में दोबारा build करना। एक बार build और publish करो, फिर artifact आगे दो।</li></ul>",
          hg: "<ul><li>Galat indentation. YAML mein spaces chalte hain (tabs kabhi nahi), aur do space khiska hua step uska matlab badal deta hai ya file tod deta hai.</li><li>Har step ko <code>script:</code> mein daalkar wahi commands das pipelines mein copy karna. Ready-made tasks aur aage templates use karo.</li><li>Har stage mein dobara build karna. Ek baar build aur publish karo, phir artifact aage do.</li></ul>"
        },
        whenToUse: {
          en: "<p>Keep one <code>azure-pipelines.yml</code> in every service repo. The CI part (build, test, publish) runs on every change; deploying comes after it as extra stages (lesson 6). Keep the file short; repeated parts go into templates.</p>",
          hi: "<p>हर service repo में एक <code>azure-pipelines.yml</code> रखो। CI वाला हिस्सा (build, test, publish) हर change पर चलता है; deploy उसके बाद extra stages में आता है (पाठ 6)। File छोटी रखो; दोहराए हिस्से templates में डालो।</p>",
          hg: "<p>Har service repo mein ek <code>azure-pipelines.yml</code> rakho. CI wala hissa (build, test, publish) har change par chalta hai; deploy uske baad extra stages mein aata hai (lesson 6). File chhoti rakho; dohraye hisse templates mein daalo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Change the test step so it also collects code coverage. Write the whole step. (The test project needs the <code>coverlet.collector</code> package.)</p>",
            hi: "<p>Test step को ऐसे बदलो कि वह code coverage भी इकट्ठा करे। पूरा step लिखो। (Test project में <code>coverlet.collector</code> package चाहिए।)</p>",
            hg: "<p>Test step ko aise badlo ki wo code coverage bhi ikattha kare. Poora step likho. (Test project mein <code>coverlet.collector</code> package chahiye.)</p>"
          },
          hint: {
            en: "<p>Add an option to <code>arguments</code>: <code>--collect:\"XPlat Code Coverage\"</code>. Quote the whole value with single quotes.</p>",
            hi: "<p><code>arguments</code> में एक option जोड़ो: <code>--collect:\"XPlat Code Coverage\"</code>। पूरी value को single quotes में रखो।</p>",
            hg: "<p><code>arguments</code> mein ek option jodo: <code>--collect:\"XPlat Code Coverage\"</code>. Poori value ko single quotes mein rakho.</p>"
          },
          solution: {
            lang: "yaml",
            caption: {
              en: "Solution: the test step with code coverage",
              hi: "हल: code coverage वाला test step",
              hg: "Solution: code coverage wala test step"
            },
            src: "    - task: DotNetCoreCLI@2\n      displayName: Run tests with coverage\n      inputs:\n        command: test\n        projects: Crm.Tests/Crm.Tests.csproj\n        arguments: '--configuration Release --collect:\"XPlat Code Coverage\"'",
            check: "none"
          }
        },
        quiz: {
          q: {
            en: "In Azure Pipelines YAML, how are the parts nested?",
            hi: "Azure Pipelines YAML में हिस्से किस क्रम में अंदर-अंदर रहते हैं?",
            hg: "Azure Pipelines YAML mein hisse kis kram mein andar-andar rehte hain?"
          },
          options: [
            {
              en: "A step contains jobs, and a job contains stages",
              hi: "Step में jobs और job में stages होते हैं",
              hg: "Step mein jobs aur job mein stages hote hain"
            },
            {
              en: "A stage contains jobs, and a job contains steps",
              hi: "Stage में jobs और job में steps होते हैं",
              hg: "Stage mein jobs aur job mein steps hote hain"
            },
            {
              en: "A pool contains stages, and a stage contains agents",
              hi: "Pool में stages और stage में agents होते हैं",
              hg: "Pool mein stages aur stage mein agents hote hain"
            },
            {
              en: "A trigger contains steps, and a step contains jobs",
              hi: "Trigger में steps और step में jobs होते हैं",
              hg: "Trigger mein steps aur step mein jobs hote hain"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>The order is stage, then job, then step. A job runs on one agent from the pool, and a trigger only decides when the run starts.</p>",
            hi: "<p>क्रम है stage, फिर job, फिर step। Job pool के एक agent पर चलता है, और trigger सिर्फ़ तय करता है कि run कब शुरू हो।</p>",
            hg: "<p>Kram hai stage, phir job, phir step. Job pool ke ek agent par chalta hai, aur trigger sirf tay karta hai ki run kab shuru ho.</p>"
          }
        },
        recap: {
          en: "<ul><li>A pipeline is a YAML file in the repo: trigger, then stages, jobs and steps on an agent from a pool.</li><li>Use ready-made tasks (<code>UseDotNet@2</code>, <code>DotNetCoreCLI@2</code>) to install, test and publish.</li><li>Publish one artifact (<code>drop</code>) so later stages reuse the same build.</li></ul>",
          hi: "<ul><li>Pipeline repo में एक YAML file है: trigger, फिर pool के agent पर stages, jobs और steps।</li><li>Install, test और publish के लिए ready-made tasks (<code>UseDotNet@2</code>, <code>DotNetCoreCLI@2</code>) use करो।</li><li>एक artifact (<code>drop</code>) publish करो ताकि आगे के stages वही build दोबारा इस्तेमाल करें।</li></ul>",
          hg: "<ul><li>Pipeline repo mein ek YAML file hai: trigger, phir pool ke agent par stages, jobs aur steps.</li><li>Install, test aur publish ke liye ready-made tasks (<code>UseDotNet@2</code>, <code>DotNetCoreCLI@2</code>) use karo.</li><li>Ek artifact (<code>drop</code>) publish karo taaki aage ke stages wahi build dobara istemaal karein.</li></ul>"
        }
      },
      code: [
        {
          lang: "yaml",
          caption: {
            en: "azure-pipelines.yml: build, test and publish Crm.Api as one artifact (shown for reading)",
            hi: "azure-pipelines.yml: Crm.Api को build, test और एक artifact के रूप में publish करना (पढ़ने के लिए)",
            hg: "azure-pipelines.yml: Crm.Api ko build, test aur ek artifact ke roop mein publish karna (padhne ke liye)"
          },
          src: "trigger:\n  branches:\n    include:\n    - main\n\npool:\n  vmImage: ubuntu-latest\n\nstages:\n- stage: Build\n  jobs:\n  - job: BuildAndTest\n    steps:\n    - task: UseDotNet@2\n      inputs:\n        packageType: sdk\n        version: 10.0.x\n    - task: DotNetCoreCLI@2\n      displayName: Run tests\n      inputs:\n        command: test\n        projects: Crm.Tests/Crm.Tests.csproj\n        arguments: --configuration Release\n    - task: DotNetCoreCLI@2\n      displayName: Publish Crm.Api\n      inputs:\n        command: publish\n        publishWebProjects: false\n        projects: Crm.Api/Crm.Api.csproj\n        arguments: --configuration Release --output $(Build.ArtifactStagingDirectory)/api\n        zipAfterPublish: false\n        modifyOutputPath: false\n    - publish: $(Build.ArtifactStagingDirectory)/api\n      artifact: drop",
          check: "none"
        }
      ]
    },
    {
      id: "dockerfile-multistage",
      depth: "short",
      title: {
        en: "A multi-stage Dockerfile for Crm.Api",
        hi: "Crm.Api के लिए multi-stage Dockerfile",
        hg: "Crm.Api ke liye multi-stage Dockerfile"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 4 ended with a published folder of <code>Crm.Api</code>. A Docker image packs that output with the runtime into one sealed box that runs the same on a laptop, in test and in production. This lesson writes the recipe for the box.</p>",
          hi: "<p>पाठ 4 <code>Crm.Api</code> के published folder पर ख़त्म हुआ। Docker image उस output को runtime के साथ एक सील बंद डिब्बे में पैक करती है जो laptop, test और production में एक जैसा चलता है। यह पाठ उस डिब्बे की recipe लिखता है।</p>",
          hg: "<p>Lesson 4 <code>Crm.Api</code> ke published folder par khatam hua. Docker image us output ko runtime ke saath ek seal band dabbe mein pack karti hai jo laptop, test aur production mein ek jaisa chalta hai. Ye lesson us dabbe ki recipe likhta hai.</p>"
        },
        what: {
          en: "<p>A <b>Dockerfile</b> is a recipe for an <b>image</b> (a stack of layers). A <b>container</b> is one running copy of an image. A <b>multi-stage</b> Dockerfile uses the big <code>sdk</code> image to build and the small <code>aspnet</code> image to run, and copies only the published output across.</p>",
          hi: "<p><b>Dockerfile</b> एक <b>image</b> (layers का ढेर) की recipe है। <b>Container</b> image की एक चलती हुई copy है। <b>Multi-stage</b> Dockerfile build के लिए बड़ी <code>sdk</code> image और चलाने के लिए छोटी <code>aspnet</code> image लेती है, और सिर्फ़ published output आगे copy करती है।</p>",
          hg: "<p><b>Dockerfile</b> ek <b>image</b> (layers ka dher) ki recipe hai. <b>Container</b> image ki ek chalti hui copy hai. <b>Multi-stage</b> Dockerfile build ke liye badi <code>sdk</code> image aur chalane ke liye chhoti <code>aspnet</code> image leti hai, aur sirf published output aage copy karti hai.</p>"
        },
        why: {
          en: "<p>The final image has no compiler and no source code, so it is smaller and has less to attack. A good instruction order also reuses Docker's cache: a code edit does not repeat the slow package restore. Running as a non-root user limits the damage if the app is hacked.</p>",
          hi: "<p>Final image में compiler और source code नहीं होता, इसलिए वह छोटी है और हमले की जगह कम है। Instructions का सही क्रम Docker का cache भी reuse कराता है: code बदलने पर धीमा package restore दोबारा नहीं चलता। Non-root user से चलाने पर app hack होने पर नुकसान कम रहता है।</p>",
          hg: "<p>Final image mein compiler aur source code nahi hota, isliye wo chhoti hai aur hamle ki jagah kam hai. Instructions ka sahi kram Docker ka cache bhi reuse karata hai: code badalne par dheema package restore dobara nahi chalta. Non-root user se chalane par app hack hone par nuksan kam rehta hai.</p>"
        },
        analogy: {
          en: "<p>Packing a tiffin. In the kitchen (the build stage) you chop, cook and make a mess with big pots. Only the finished food goes into the small steel dabba (the final stage). The office never receives the knives or the pots.</p>",
          hi: "<p>Tiffin पैक करना। Kitchen में (build stage) तुम बड़े बर्तनों में काटते, पकाते और गंदगी करते हो। सिर्फ़ तैयार खाना छोटे steel के dabba (final stage) में जाता है। Office को चाकू और बर्तन कभी नहीं मिलते।</p>",
          hg: "<p>Tiffin pack karna. Kitchen mein (build stage) tum bade bartano mein kaatte, pakate aur gandagi karte ho. Sirf taiyaar khana chhote steel ke dabbe (final stage) mein jaata hai. Office ko chaaku aur bartan kabhi nahi milte.</p>"
        },
        lines: [
          {
            code: "FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build",
            note: {
              en: "Start the <b>build stage</b> from the big image that has the .NET 10 SDK. <code>AS build</code> names the stage so we can copy from it later.",
              hi: "बड़ी image से <b>build stage</b> शुरू करो जिसमें .NET 10 SDK है। <code>AS build</code> stage को नाम देता है ताकि बाद में उससे copy कर सकें।",
              hg: "Badi image se <b>build stage</b> shuru karo jismein .NET 10 SDK hai. <code>AS build</code> stage ko naam deta hai taaki baad mein usse copy kar sakein."
            }
          },
          {
            code: "WORKDIR /src",
            note: {
              en: "Sets the working folder inside the image (and creates it). The next commands run from <code>/src</code>.",
              hi: "Image के अंदर working folder तय करता है (और बनाता है)। अगले commands <code>/src</code> से चलते हैं।",
              hg: "Image ke andar working folder tay karta hai (aur banata hai). Agle commands <code>/src</code> se chalte hain."
            }
          },
          {
            code: "COPY Crm.Api/Crm.Api.csproj Crm.Api/",
            note: {
              en: "Copy ONLY the project file first. This layer changes rarely (only when packages change), so Docker can cache the restore that follows.",
              hi: "पहले सिर्फ़ project file copy करो। यह layer कम बदलती है (सिर्फ़ packages बदलने पर), इसलिए Docker अगला restore cache कर सकता है।",
              hg: "Pehle sirf project file copy karo. Ye layer kam badalti hai (sirf packages badalne par), isliye Docker agla restore cache kar sakta hai."
            }
          },
          {
            code: "RUN dotnet restore Crm.Api/Crm.Api.csproj",
            note: {
              en: "Download the NuGet packages. This is the slow step; with the cache it is skipped when only code changed. If <code>Crm.Api</code> references other projects, copy their <code>.csproj</code> files before this line.",
              hi: "NuGet packages download करो। यह धीमा step है; cache के साथ यह तब छूट जाता है जब सिर्फ़ code बदला हो। अगर <code>Crm.Api</code> दूसरे projects को reference करता है, तो इस line से पहले उनकी <code>.csproj</code> files copy करो।",
              hg: "NuGet packages download karo. Ye dheema step hai; cache ke saath ye tab chhoot jaata hai jab sirf code badla ho. Agar <code>Crm.Api</code> doosre projects ko reference karta hai, to is line se pehle unki <code>.csproj</code> files copy karo."
            }
          },
          {
            code: "COPY Crm.Api/ Crm.Api/",
            note: {
              en: "Now copy the source code. It changes on almost every commit, so it comes AFTER the restore. Order matters for the cache.",
              hi: "अब source code copy करो। यह लगभग हर commit में बदलता है, इसलिए restore के <b>बाद</b> आता है। Cache के लिए क्रम मायने रखता है।",
              hg: "Ab source code copy karo. Ye lagbhag har commit mein badalta hai, isliye restore ke <b>baad</b> aata hai. Cache ke liye kram mayne rakhta hai."
            }
          },
          {
            code: "RUN dotnet publish Crm.Api/Crm.Api.csproj -c Release -o /app/publish --no-restore",
            note: {
              en: "Build and publish into <code>/app/publish</code>. <code>--no-restore</code> reuses the packages from the cached restore layer.",
              hi: "Build और publish करके <code>/app/publish</code> में रखो। <code>--no-restore</code> cached restore layer के packages ही इस्तेमाल करता है।",
              hg: "Build aur publish karke <code>/app/publish</code> mein rakho. <code>--no-restore</code> cached restore layer ke packages hi istemaal karta hai."
            }
          },
          {
            code: "FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final",
            note: {
              en: "Start a NEW stage from the small runtime image: no SDK, no compiler. Everything from the build stage is left behind except what we copy.",
              hi: "छोटी runtime image से एक <b>नया</b> stage शुरू करो: न SDK, न compiler। Build stage का सब कुछ पीछे छूट जाता है, सिर्फ़ वही जो हम copy करें।",
              hg: "Chhoti runtime image se ek <b>naya</b> stage shuru karo: na SDK, na compiler. Build stage ka sab kuch peechhe chhoot jaata hai, sirf wahi jo hum copy karein."
            }
          },
          {
            code: "COPY --from=build /app/publish .",
            note: {
              en: "Copies the published output from the <code>build</code> stage into <code>/app</code> (the <code>WORKDIR</code> of this stage). This is the only thing that crosses over.",
              hi: "<code>build</code> stage से published output को <code>/app</code> (इस stage का <code>WORKDIR</code>) में copy करता है। सिर्फ़ यही चीज़ पार जाती है।",
              hg: "<code>build</code> stage se published output ko <code>/app</code> (is stage ka <code>WORKDIR</code>) mein copy karta hai. Sirf yahi cheez paar jaati hai."
            }
          },
          {
            code: "USER $APP_UID",
            note: {
              en: "Run as the non-root user. .NET 8 and later images include a user <code>app</code> and define <code>APP_UID</code>, but the image still starts as root unless you add this line.",
              hi: "Non-root user से चलाओ। .NET 8 और बाद की images में user <code>app</code> होता है और <code>APP_UID</code> defined है, पर image फिर भी root से शुरू होती है जब तक यह line न जोड़ो।",
              hg: "Non-root user se chalao. .NET 8 aur baad ki images mein user <code>app</code> hota hai aur <code>APP_UID</code> defined hai, par image phir bhi root se shuru hoti hai jab tak ye line na jodo."
            }
          },
          {
            code: "EXPOSE 8080",
            note: {
              en: "Only documents the port; it opens nothing. Since .NET 8 the images set <code>ASPNETCORE_HTTP_PORTS=8080</code>, so the app listens on <b>8080</b> (not 80), a port a non-root user is allowed to use.",
              hi: "सिर्फ़ port को document करता है; कुछ खोलता नहीं। .NET 8 से images <code>ASPNETCORE_HTTP_PORTS=8080</code> set करती हैं, इसलिए app <b>8080</b> पर सुनती है (80 पर नहीं), यह ऐसा port है जो non-root user use कर सकता है।",
              hg: "Sirf port ko document karta hai; kuch kholta nahi. .NET 8 se images <code>ASPNETCORE_HTTP_PORTS=8080</code> set karti hain, isliye app <b>8080</b> par sunti hai (80 par nahi), ye aisa port hai jo non-root user use kar sakta hai."
            }
          },
          {
            code: "ENTRYPOINT [\"dotnet\", \"Crm.Api.dll\"]",
            note: {
              en: "The command that runs when the container starts. The list (exec) form lets the app receive stop signals properly.",
              hi: "Container शुरू होने पर चलने वाला command। List (exec) form से app को stop signals ठीक से मिलते हैं।",
              hg: "Container shuru hone par chalne wala command. List (exec) form se app ko stop signals theek se milte hain."
            }
          }
        ],
        mistakes: {
          en: "<ul><li><code>COPY . .</code> before the restore. Every code edit then breaks the cache and the packages download again.</li><li>Forgetting <code>.dockerignore</code>. <code>bin</code>, <code>obj</code>, <code>.git</code> and local secret files end up in the build context.</li><li>Putting secrets in <code>ENV</code> or copying them into the image. Anyone who gets the image can read them.</li></ul>",
          hi: "<ul><li>Restore से पहले <code>COPY . .</code> लिखना। तब हर code edit cache तोड़ देता है और packages फिर से download होते हैं।</li><li><code>.dockerignore</code> भूल जाना। <code>bin</code>, <code>obj</code>, <code>.git</code> और local secret files build context में पहुँच जाती हैं।</li><li>Secrets को <code>ENV</code> में रखना या image में copy करना। जिसके पास image आए वह उन्हें पढ़ सकता है।</li></ul>",
          hg: "<ul><li>Restore se pehle <code>COPY . .</code> likhna. Tab har code edit cache tod deta hai aur packages phir se download hote hain.</li><li><code>.dockerignore</code> bhool jaana. <code>bin</code>, <code>obj</code>, <code>.git</code> aur local secret files build context mein pahunch jaati hain.</li><li>Secrets ko <code>ENV</code> mein rakhna ya image mein copy karna. Jiske paas image aaye wo unhe padh sakta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a Dockerfile for services you run on Container Apps, AKS or any Docker host. Tag images with the version, not only <code>latest</code>. A plain web API on App Service (Day 20) does not need one.</p>",
          hi: "<p>जिन services को Container Apps, AKS या किसी Docker host पर चलाते हो उनके लिए Dockerfile use करो। Images को version से tag करो, सिर्फ़ <code>latest</code> से नहीं। App Service (Day 20) पर सादी web API को इसकी ज़रूरत नहीं।</p>",
          hg: "<p>Jin services ko Container Apps, AKS ya kisi Docker host par chalate ho unke liye Dockerfile use karo. Images ko version se tag karo, sirf <code>latest</code> se nahi. App Service (Day 20) par saadi web API ko iski zaroorat nahi.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write the two commands that build the image as <code>crm-api:1.0.0</code> and run it so that port 5000 on your laptop reaches the app inside.</p>",
            hi: "<p>दो commands लिखो: image को <code>crm-api:1.0.0</code> नाम से build करना, और उसे ऐसे चलाना कि laptop का port 5000 अंदर की app तक पहुँचे।</p>",
            hg: "<p>Do commands likho: image ko <code>crm-api:1.0.0</code> naam se build karna, aur use aise chalana ki laptop ka port 5000 andar ki app tak pahunche.</p>"
          },
          hint: {
            en: "<p><code>docker build -t name:tag .</code> builds. For <code>-p</code> the order is host port, then container port. The app listens on 8080.</p>",
            hi: "<p><code>docker build -t name:tag .</code> build करता है। <code>-p</code> में क्रम है host port, फिर container port। App 8080 पर सुनती है।</p>",
            hg: "<p><code>docker build -t name:tag .</code> build karta hai. <code>-p</code> mein kram hai host port, phir container port. App 8080 par sunti hai.</p>"
          },
          solution: {
            lang: "bash",
            caption: {
              en: "Solution: build the image and run it on port 5000",
              hi: "हल: image build करो और port 5000 पर चलाओ",
              hg: "Solution: image build karo aur port 5000 par chalao"
            },
            src: "docker build -t crm-api:1.0.0 .\ndocker run --rm -p 5000:8080 crm-api:1.0.0",
            check: "none"
          }
        },
        quiz: {
          q: {
            en: "Why does the Dockerfile copy the <code>.csproj</code> and restore BEFORE copying the rest of the source?",
            hi: "Dockerfile बाकी source copy करने से <b>पहले</b> <code>.csproj</code> copy करके restore क्यों करता है?",
            hg: "Dockerfile baaki source copy karne se <b>pehle</b> <code>.csproj</code> copy karke restore kyun karta hai?"
          },
          options: [
            {
              en: "Docker cannot copy source before restore",
              hi: "Docker restore से पहले source copy नहीं कर सकता",
              hg: "Docker restore se pehle source copy nahi kar sakta"
            },
            {
              en: "It makes the final image smaller",
              hi: "इससे final image छोटी होती है",
              hg: "Isse final image chhoti hoti hai"
            },
            {
              en: "The restore layer stays cached until packages change, so code edits build faster",
              hi: "Packages बदलने तक restore layer cached रहती है, इसलिए code edit पर build तेज़ होता है",
              hg: "Packages badalne tak restore layer cached rehti hai, isliye code edit par build tez hota hai"
            },
            {
              en: "It runs the app as a non-root user",
              hi: "इससे app non-root user से चलती है",
              hg: "Isse app non-root user se chalti hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>Docker reuses a layer only if that instruction and everything before it are unchanged. Source changes often and the project file rarely, so restore goes first.</p>",
            hi: "<p>Docker layer तभी reuse करता है जब वह instruction और उसके पहले सब कुछ unchanged हो। Source अक्सर बदलता है और project file कम, इसलिए restore पहले आता है।</p>",
            hg: "<p>Docker layer tabhi reuse karta hai jab wo instruction aur uske pehle sab kuch unchanged ho. Source aksar badalta hai aur project file kam, isliye restore pehle aata hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Multi-stage: the <code>sdk</code> image builds, the <code>aspnet</code> image runs, and only the published output is copied across.</li><li>Copy the <code>.csproj</code> and restore first, then the source, so the cache survives code edits.</li><li>Add <code>USER $APP_UID</code>; the app listens on port 8080 by default.</li></ul>",
          hi: "<ul><li>Multi-stage: <code>sdk</code> image build करती है, <code>aspnet</code> image चलाती है, और सिर्फ़ published output आगे copy होता है।</li><li>पहले <code>.csproj</code> copy करके restore, फिर source, ताकि code edit पर cache बचा रहे।</li><li><code>USER $APP_UID</code> जोड़ो; app default से port 8080 पर सुनती है।</li></ul>",
          hg: "<ul><li>Multi-stage: <code>sdk</code> image build karti hai, <code>aspnet</code> image chalati hai, aur sirf published output aage copy hota hai.</li><li>Pehle <code>.csproj</code> copy karke restore, phir source, taaki code edit par cache bacha rahe.</li><li><code>USER $APP_UID</code> jodo; app default se port 8080 par sunti hai.</li></ul>"
        }
      },
      code: [
        {
          lang: "dockerfile",
          caption: {
            en: "Dockerfile: build with the SDK image, run on the small ASP.NET image as non-root (shown for reading)",
            hi: "Dockerfile: SDK image से build, छोटी ASP.NET image पर non-root चलाना (पढ़ने के लिए)",
            hg: "Dockerfile: SDK image se build, chhoti ASP.NET image par non-root chalana (padhne ke liye)"
          },
          src: "FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build\nWORKDIR /src\nCOPY Crm.Api/Crm.Api.csproj Crm.Api/\nRUN dotnet restore Crm.Api/Crm.Api.csproj\nCOPY Crm.Api/ Crm.Api/\nRUN dotnet publish Crm.Api/Crm.Api.csproj -c Release -o /app/publish --no-restore\n\nFROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final\nWORKDIR /app\nCOPY --from=build /app/publish .\nUSER $APP_UID\nEXPOSE 8080\nENTRYPOINT [\"dotnet\", \"Crm.Api.dll\"]",
          check: "none"
        }
      ]
    },
    {
      id: "deploy-environments",
      depth: "short",
      title: {
        en: "Deploy stages, environments and approvals",
        hi: "Deploy stages, environments और approvals",
        hg: "Deploy stages, environments aur approvals"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 4 published one artifact named <code>drop</code> (lesson 5 packs the same output into an image). This lesson adds the stages that take that same artifact to the Test app and then to Production, the apps you set up on Azure in Day 20, with a human approval before Production.</p>",
          hi: "<p>पाठ 4 ने <code>drop</code> नाम का एक artifact publish किया (पाठ 5 उसी output को image में पैक करता है)। यह पाठ वे stages जोड़ता है जो वही artifact Test app तक और फिर Production तक ले जाते हैं, यानी Day 20 में Azure पर बनाई apps, और Production से पहले एक इंसान की approval।</p>",
          hg: "<p>Lesson 4 ne <code>drop</code> naam ka ek artifact publish kiya (lesson 5 usi output ko image mein pack karta hai). Ye lesson wo stages jodta hai jo wahi artifact Test app tak aur phir Production tak le jaate hain, yaani Day 20 mein Azure par banayi apps, aur Production se pehle ek insaan ki approval.</p>"
        },
        what: {
          en: "<p>A <b>deployment job</b> targets an <b>environment</b> (<code>crm-test</code>, <code>crm-prod</code>). The environment records every deployment and can hold <b>approvals and checks</b>. The job downloads the artifact built earlier, so each stage deploys the same bits: <b>build once, deploy many</b>.</p>",
          hi: "<p><b>Deployment job</b> एक <b>environment</b> (<code>crm-test</code>, <code>crm-prod</code>) को target करता है। Environment हर deployment का record रखता है और उस पर <b>approvals और checks</b> लग सकते हैं। Job पहले बना artifact download करता है, इसलिए हर stage वही bits deploy करता है: <b>एक बार build, कई जगह deploy</b>।</p>",
          hg: "<p><b>Deployment job</b> ek <b>environment</b> (<code>crm-test</code>, <code>crm-prod</code>) ko target karta hai. Environment har deployment ka record rakhta hai aur us par <b>approvals aur checks</b> lag sakte hain. Job pehle bana artifact download karta hai, isliye har stage wahi bits deploy karta hai: <b>ek baar build, kai jagah deploy</b>.</p>"
        },
        why: {
          en: "<p>If you rebuild for each environment, Production runs code that was never tested. With one artifact, what passed in Test is exactly what reaches Production, and only the settings change. The approval gives a person the last word before users are affected.</p>",
          hi: "<p>अगर हर environment के लिए दोबारा build करो, तो Production वह code चलाता है जो कभी test नहीं हुआ। एक artifact से जो Test में पास हुआ वही Production पहुँचता है, और सिर्फ़ settings बदलती हैं। Approval users पर असर पड़ने से पहले आखिरी फ़ैसला एक इंसान को देती है।</p>",
          hg: "<p>Agar har environment ke liye dobara build karo, to Production wo code chalata hai jo kabhi test nahi hua. Ek artifact se jo Test mein pass hua wahi Production pahunchta hai, aur sirf settings badalti hain. Approval users par asar padne se pehle aakhri faisla ek insaan ko deti hai.</p>"
        },
        analogy: {
          en: "<p>An exam paper. The paper is set once and photocopied the same for every centre. The sealed envelope is the artifact. At the Production centre the invigilator opens the envelope only after the principal signs: that signature is the approval.</p>",
          hi: "<p>Exam का पेपर। पेपर एक बार बनता है और हर centre के लिए वही photocopy होता है। सील बंद लिफ़ाफ़ा artifact है। Production centre पर invigilator लिफ़ाफ़ा तभी खोलता है जब principal sign करे: वह sign ही approval है।</p>",
          hg: "<p>Exam ka paper. Paper ek baar banta hai aur har centre ke liye wahi photocopy hota hai. Seal band lifafa artifact hai. Production centre par invigilator lifafa tabhi kholta hai jab principal sign kare: wo sign hi approval hai.</p>"
        },
        lines: [
          {
            code: "- stage: DeployTest",
            note: {
              en: "A new stage after <code>Build</code>. This snippet continues the file from lesson 4 under the same <code>stages:</code> list.",
              hi: "<code>Build</code> के बाद एक नया stage। यह snippet पाठ 4 की file को उसी <code>stages:</code> list में आगे बढ़ाता है।",
              hg: "<code>Build</code> ke baad ek naya stage. Ye snippet lesson 4 ki file ko usi <code>stages:</code> list mein aage badhata hai."
            }
          },
          {
            code: "dependsOn: Build",
            note: {
              en: "Run only after the <code>Build</code> stage finishes. Without it, stages with no dependency can start together.",
              hi: "<code>Build</code> stage ख़त्म होने के बाद ही चलो। इसके बिना जिन stages की कोई dependency नहीं वे साथ शुरू हो सकते हैं।",
              hg: "<code>Build</code> stage khatam hone ke baad hi chalo. Iske bina jin stages ki koi dependency nahi ve saath shuru ho sakte hain."
            }
          },
          {
            code: "condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))",
            note: {
              en: "Deploy only if the build succeeded AND the run is for <code>main</code>. Feature-branch builds never reach Test or Production.",
              hi: "Deploy तभी करो जब build सफल हो <b>और</b> run <code>main</code> का हो। Feature-branch के builds Test या Production तक कभी नहीं पहुँचते।",
              hg: "Deploy tabhi karo jab build safal ho <b>aur</b> run <code>main</code> ka ho. Feature-branch ke builds Test ya Production tak kabhi nahi pahunchte."
            }
          },
          {
            code: "- deployment: DeployApi",
            note: {
              en: "A <b>deployment job</b> is a job with extra powers: deployment history, an environment and lifecycle steps. It does not check out the repo.",
              hi: "<b>Deployment job</b> एक ख़ास job है: deployment history, environment और lifecycle steps के साथ। यह repo checkout नहीं करता।",
              hg: "<b>Deployment job</b> ek khaas job hai: deployment history, environment aur lifecycle steps ke saath. Ye repo checkout nahi karta."
            }
          },
          {
            code: "environment: crm-test",
            note: {
              en: "The target. Azure DevOps records each deployment here and applies the environment's approvals and checks before the job runs.",
              hi: "Target। Azure DevOps हर deployment यहाँ record करता है और job चलने से पहले environment की approvals और checks लगाता है।",
              hg: "Target. Azure DevOps har deployment yahan record karta hai aur job chalne se pehle environment ki approvals aur checks lagata hai."
            }
          },
          {
            code: "runOnce:",
            note: {
              en: "The simplest deployment strategy: run the steps one time. <code>rolling</code> and <code>canary</code> exist for other targets.",
              hi: "सबसे सादी deployment strategy: steps एक बार चलाओ। दूसरे targets के लिए <code>rolling</code> और <code>canary</code> भी हैं।",
              hg: "Sabse saadi deployment strategy: steps ek baar chalao. Doosre targets ke liye <code>rolling</code> aur <code>canary</code> bhi hain."
            }
          },
          {
            code: "- download: current",
            note: {
              en: "In the <code>deploy</code> hook a deployment job downloads every artifact of the run by itself; this step limits it to the <code>drop</code> artifact the Build stage published, into <code>$(Pipeline.Workspace)/drop</code>. No rebuild: this is \"build once\".",
              hi: "<code>deploy</code> hook में deployment job run के सारे artifacts खुद download करता है; यह step उसे सिर्फ़ Build stage के publish किए <code>drop</code> artifact तक रखता है, <code>$(Pipeline.Workspace)/drop</code> में। दोबारा build नहीं: यही \"एक बार build\" है।",
              hg: "<code>deploy</code> hook mein deployment job run ke saare artifacts khud download karta hai; ye step use sirf Build stage ke publish kiye <code>drop</code> artifact tak rakhta hai, <code>$(Pipeline.Workspace)/drop</code> mein. Dobara build nahi: yahi \"ek baar build\" hai."
            }
          },
          {
            code: "- task: AzureWebApp@1",
            note: {
              en: "The ready-made task that deploys a folder or zip to an Azure App Service.",
              hi: "यह ready-made task folder या zip को Azure App Service पर deploy करता है।",
              hg: "Ye ready-made task folder ya zip ko Azure App Service par deploy karta hai."
            }
          },
          {
            code: "azureSubscription: sc-crm-test",
            note: {
              en: "The name of a <b>service connection</b>: the identity Azure DevOps uses to talk to Azure. Test and Production have separate ones.",
              hi: "<b>Service connection</b> का नाम: वह identity जिससे Azure DevOps Azure से बात करता है। Test और Production के अलग-अलग होते हैं।",
              hg: "<b>Service connection</b> ka naam: wo identity jisse Azure DevOps Azure se baat karta hai. Test aur Production ke alag-alag hote hain."
            }
          },
          {
            code: "package: $(Pipeline.Workspace)/drop",
            note: {
              en: "What to deploy: the downloaded artifact folder. Because lesson 4 used <code>modifyOutputPath: false</code>, the app files sit right at its root.",
              hi: "क्या deploy करना है: download हुआ artifact folder। पाठ 4 में <code>modifyOutputPath: false</code> था, इसलिए app की files सीधे इसके root में हैं।",
              hg: "Kya deploy karna hai: download hua artifact folder. Lesson 4 mein <code>modifyOutputPath: false</code> tha, isliye app ki files seedhe iske root mein hain."
            }
          },
          {
            code: "environment: crm-prod",
            note: {
              en: "The Production environment. The approval is set on <b>this environment in Azure DevOps</b> (Pipelines, Environments, Approvals and checks), not in YAML. The run pauses here until the approver says yes.",
              hi: "Production environment। Approval <b>Azure DevOps में इसी environment पर</b> लगती है (Pipelines, Environments, Approvals and checks), YAML में नहीं। Approver के हाँ कहने तक run यहाँ रुका रहता है।",
              hg: "Production environment. Approval <b>Azure DevOps mein isi environment par</b> lagti hai (Pipelines, Environments, Approvals and checks), YAML mein nahi. Approver ke haan kehne tak run yahan ruka rehta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Looking for the approval in the YAML. It lives on the environment, so the YAML never shows who must approve.</li><li>Protecting the environment but not the service connection. Checks run only for jobs that use the protected resource, so protect the production service connection too.</li><li>Rebuilding inside the deploy stage. Download the artifact; do not build again.</li></ul>",
          hi: "<ul><li>Approval को YAML में ढूँढना। वह environment पर रहती है, इसलिए YAML कभी नहीं दिखाती कि किसे approve करना है।</li><li>Environment protect करना पर service connection नहीं। Checks सिर्फ़ उन jobs के लिए चलते हैं जो protected resource use करते हैं, इसलिए production की service connection भी protect करो।</li><li>Deploy stage के अंदर दोबारा build करना। Artifact download करो; फिर से build मत करो।</li></ul>",
          hg: "<ul><li>Approval ko YAML mein dhoondhna. Wo environment par rehti hai, isliye YAML kabhi nahi dikhati ki kise approve karna hai.</li><li>Environment protect karna par service connection nahi. Checks sirf un jobs ke liye chalte hain jo protected resource use karte hain, isliye production ki service connection bhi protect karo.</li><li>Deploy stage ke andar dobara build karna. Artifact download karo; phir se build mat karo.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a deployment job for every deploy, so history and approvals work. Auto-deploy to Test; put an approval on Production. For zero-downtime, deploy to an App Service slot and swap (Day 20), or use the rolling or canary strategies.</p>",
          hi: "<p>हर deploy के लिए deployment job use करो, ताकि history और approvals काम करें। Test पर auto-deploy; Production पर approval लगाओ। Zero-downtime के लिए App Service slot पर deploy करके swap करो (Day 20), या rolling या canary strategy use करो।</p>",
          hg: "<p>Har deploy ke liye deployment job use karo, taaki history aur approvals kaam karein. Test par auto-deploy; Production par approval lagao. Zero-downtime ke liye App Service slot par deploy karke swap karo (Day 20), ya rolling ya canary strategy use karo.</p>"
        },
        exercise: {
          task: {
            en: "<p>After the Test deployment, add a step that smoke-tests <code>https://crm-api-test.azurewebsites.net/ready</code> and fails the stage if the app is not ready.</p>",
            hi: "<p>Test deployment के बाद एक step जोड़ो जो <code>https://crm-api-test.azurewebsites.net/ready</code> को smoke-test करे और app ready न हो तो stage fail कर दे।</p>",
            hg: "<p>Test deployment ke baad ek step jodo jo <code>https://crm-api-test.azurewebsites.net/ready</code> ko smoke-test kare aur app ready na ho to stage fail kar de.</p>"
          },
          hint: {
            en: "<p>A <code>script:</code> step with <code>curl --fail</code>. <code>--fail</code> makes curl return an error on HTTP 4xx or 5xx, so the step fails.</p>",
            hi: "<p><code>curl --fail</code> वाला <code>script:</code> step। <code>--fail</code> HTTP 4xx या 5xx पर curl से error दिलाता है, इसलिए step fail होता है।</p>",
            hg: "<p><code>curl --fail</code> wala <code>script:</code> step. <code>--fail</code> HTTP 4xx ya 5xx par curl se error dilata hai, isliye step fail hota hai.</p>"
          },
          solution: {
            lang: "yaml",
            caption: {
              en: "Solution: a smoke-test step after AzureWebApp@1",
              hi: "हल: AzureWebApp@1 के बाद smoke-test step",
              hg: "Solution: AzureWebApp@1 ke baad smoke-test step"
            },
            src: "          - script: curl --fail --silent https://crm-api-test.azurewebsites.net/ready\n            displayName: Smoke test /ready",
            check: "none"
          }
        },
        quiz: {
          q: {
            en: "Where do you configure \"Production needs a manager's approval\"?",
            hi: "\"Production के लिए manager की approval चाहिए\" यह कहाँ configure करते हैं?",
            hg: "\"Production ke liye manager ki approval chahiye\" ye kahan configure karte hain?"
          },
          options: [
            {
              en: "In the <code>UseDotNet@2</code> task",
              hi: "<code>UseDotNet@2</code> task में",
              hg: "<code>UseDotNet@2</code> task mein"
            },
            {
              en: "In the <code>trigger:</code> section of the YAML",
              hi: "YAML के <code>trigger:</code> section में",
              hg: "YAML ke <code>trigger:</code> section mein"
            },
            {
              en: "Inside the Dockerfile",
              hi: "Dockerfile के अंदर",
              hg: "Dockerfile ke andar"
            },
            {
              en: "On the <code>crm-prod</code> environment in Azure DevOps (Approvals and checks)",
              hi: "Azure DevOps में <code>crm-prod</code> environment पर (Approvals and checks)",
              hg: "Azure DevOps mein <code>crm-prod</code> environment par (Approvals and checks)"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>Approvals and checks belong to the environment (and other protected resources) in Azure DevOps. The YAML only names the environment; the run pauses there until the approver says yes.</p>",
            hi: "<p>Approvals और checks Azure DevOps में environment (और दूसरे protected resources) के होते हैं। YAML सिर्फ़ environment का नाम लेती है; approver के हाँ कहने तक run वहाँ रुकता है।</p>",
            hg: "<p>Approvals aur checks Azure DevOps mein environment (aur doosre protected resources) ke hote hain. YAML sirf environment ka naam leti hai; approver ke haan kehne tak run wahan rukta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Deployment jobs target an environment that records history and holds approvals and checks.</li><li>Every stage downloads the same <code>drop</code> artifact: build once, deploy many.</li><li>Set the approval on the environment in Azure DevOps, and protect the service connection too.</li></ul>",
          hi: "<ul><li>Deployment jobs एक environment को target करते हैं जो history रखता है और approvals व checks संभालता है।</li><li>हर stage वही <code>drop</code> artifact download करता है: एक बार build, कई जगह deploy।</li><li>Approval Azure DevOps में environment पर लगाओ, और service connection भी protect करो।</li></ul>",
          hg: "<ul><li>Deployment jobs ek environment ko target karte hain jo history rakhta hai aur approvals va checks sambhalta hai.</li><li>Har stage wahi <code>drop</code> artifact download karta hai: ek baar build, kai jagah deploy.</li><li>Approval Azure DevOps mein environment par lagao, aur service connection bhi protect karo.</li></ul>"
        }
      },
      code: [
        {
          lang: "yaml",
          caption: {
            en: "More stages for the same file: deploy the drop artifact to Test, then to Production behind an approval (shown for reading; names are examples)",
            hi: "उसी file के और stages: drop artifact को Test पर, फिर approval के पीछे Production पर deploy करना (पढ़ने के लिए; नाम उदाहरण हैं)",
            hg: "Usi file ke aur stages: drop artifact ko Test par, phir approval ke peechhe Production par deploy karna (padhne ke liye; naam udaharan hain)"
          },
          src: "# ... the Build stage from lesson 4 comes first ...\n\n- stage: DeployTest\n  dependsOn: Build\n  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))\n  jobs:\n  - deployment: DeployApi\n    environment: crm-test\n    strategy:\n      runOnce:\n        deploy:\n          steps:\n          - download: current\n            artifact: drop\n          - task: AzureWebApp@1\n            inputs:\n              azureSubscription: sc-crm-test\n              appType: webAppLinux\n              appName: crm-api-test\n              package: $(Pipeline.Workspace)/drop\n\n- stage: DeployProd\n  dependsOn: DeployTest\n  jobs:\n  - deployment: DeployApi\n    environment: crm-prod\n    strategy:\n      runOnce:\n        deploy:\n          steps:\n          - download: current\n            artifact: drop\n          - task: AzureWebApp@1\n            inputs:\n              azureSubscription: sc-crm-prod\n              appType: webAppLinux\n              appName: crm-api-prod\n              package: $(Pipeline.Workspace)/drop",
          check: "none"
        }
      ]
    },
    {
      id: "semver-build-info",
      depth: "short",
      title: {
        en: "Version every build: SemVer and build info",
        hi: "हर build का version: SemVer और build info",
        hg: "Har build ka version: SemVer aur build info"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 6 deploys the same artifact to Test and Production. Now two questions appear: what number does the next release get, and \"which build is running in Production right now?\". This lesson answers both with a version number and the build facts the pipeline already knows.</p>",
          hi: "<p>पाठ 6 वही artifact Test और Production में deploy करता है। अब दो सवाल उठते हैं: अगले release को कौन-सा number मिले, और \"अभी Production में कौन-सा build चल रहा है?\" यह पाठ दोनों का जवाब देता है: version number और वे build facts जो pipeline को पहले से पता हैं।</p>",
          hg: "<p>Lesson 6 wahi artifact Test aur Production mein deploy karta hai. Ab do sawaal uthte hain: agle release ko kaunsa number mile, aur \"abhi Production mein kaunsa build chal raha hai?\" Ye lesson dono ka jawab deta hai: version number aur wo build facts jo pipeline ko pehle se pata hain.</p>"
        },
        what: {
          en: "<p><b>SemVer</b> is <code>MAJOR.MINOR.PATCH</code>: <b>MAJOR</b> for a breaking change, <b>MINOR</b> for a new feature that does not break anyone, <b>PATCH</b> for a bug fix. The pipeline stamps this version into the build, along with the commit id and build number, which it gets from predefined environment variables.</p>",
          hi: "<p><b>SemVer</b> है <code>MAJOR.MINOR.PATCH</code>: <b>MAJOR</b> उस change के लिए जो किसी को तोड़ता है, <b>MINOR</b> नए feature के लिए जो किसी को नहीं तोड़ता, <b>PATCH</b> bug fix के लिए। Pipeline यह version, commit id और build number के साथ build में stamp करती है, जो उसे predefined environment variables से मिलते हैं।</p>",
          hg: "<p><b>SemVer</b> hai <code>MAJOR.MINOR.PATCH</code>: <b>MAJOR</b> us change ke liye jo kisi ko todta hai, <b>MINOR</b> naye feature ke liye jo kisi ko nahi todta, <b>PATCH</b> bug fix ke liye. Pipeline ye version, commit id aur build number ke saath build mein stamp karti hai, jo use predefined environment variables se milte hain.</p>"
        },
        why: {
          en: "<p>When a customer reports a problem you must know the exact code that runs. A version plus a commit id tells you, and a Git tag lets you check out that exact code. The numbers also tell clients how risky an upgrade is: a PATCH is safe, a MAJOR needs a plan.</p>",
          hi: "<p>जब customer कोई problem बताता है तब तुम्हें ठीक वही code पता होना चाहिए जो चल रहा है। Version और commit id यह बताते हैं, और Git tag से तुम ठीक वही code checkout कर सकते हो। Numbers clients को यह भी बताते हैं कि upgrade कितना risky है: PATCH safe है, MAJOR के लिए plan चाहिए।</p>",
          hg: "<p>Jab customer koi problem batata hai tab tumhe theek wahi code pata hona chahiye jo chal raha hai. Version aur commit id ye batate hain, aur Git tag se tum theek wahi code checkout kar sakte ho. Numbers clients ko ye bhi batate hain ki upgrade kitna risky hai: PATCH safe hai, MAJOR ke liye plan chahiye.</p>"
        },
        analogy: {
          en: "<p>The batch number on a medicine strip. If one batch has a problem, the batch number tells exactly which lot to recall and nothing else. The build number and commit id are the batch number of your software.</p>",
          hi: "<p>दवा की strip पर batch number। अगर किसी एक batch में दिक्कत हो, तो batch number बताता है कि कौन-सा lot वापस बुलाना है, और कुछ नहीं। Build number और commit id तुम्हारे software का batch number हैं।</p>",
          hg: "<p>Dawa ki strip par batch number. Agar kisi ek batch mein dikkat ho, to batch number batata hai ki kaunsa lot wapas bulana hai, aur kuch nahi. Build number aur commit id tumhare software ka batch number hain.</p>"
        },
        focus: {
          lang: "bash",
          caption: {
            en: "Stamp the version into the build and tag the commit (shown for reading; the number is an example)",
            hi: "Build में version stamp करना और commit पर tag लगाना (पढ़ने के लिए; number उदाहरण है)",
            hg: "Build mein version stamp karna aur commit par tag lagana (padhne ke liye; number udaharan hai)"
          },
          src: "dotnet publish Crm.Api -c Release -p:Version=1.5.0 -o out\ngit tag v1.5.0\ngit push origin v1.5.0",
          check: "none"
        },
        lines: [
          {
            code: "public record SemVer(int Major, int Minor, int Patch)",
            note: {
              en: "A version is three whole numbers. A <code>record</code> gives value equality and a clean immutable type.",
              hi: "Version तीन पूरे numbers हैं। <code>record</code> value equality और साफ़ immutable type देता है।",
              hg: "Version teen poore numbers hain. <code>record</code> value equality aur saaf immutable type deta hai."
            }
          },
          {
            code: "Change.Major => new SemVer(Major + 1, 0, 0),",
            note: {
              en: "A breaking change raises MAJOR and <b>resets</b> MINOR and PATCH to zero: 1.4.2 becomes 2.0.0.",
              hi: "Breaking change MAJOR बढ़ाता है और MINOR व PATCH को <b>zero</b> कर देता है: 1.4.2 बनता है 2.0.0।",
              hg: "Breaking change MAJOR badhata hai aur MINOR va PATCH ko <b>zero</b> kar deta hai: 1.4.2 banta hai 2.0.0."
            }
          },
          {
            code: "Change.Minor => new SemVer(Major, Minor + 1, 0),",
            note: {
              en: "A new feature raises MINOR and resets PATCH: 1.4.2 becomes 1.5.0, not 1.5.2.",
              hi: "नया feature MINOR बढ़ाता है और PATCH zero करता है: 1.4.2 बनता है 1.5.0, 1.5.2 नहीं।",
              hg: "Naya feature MINOR badhata hai aur PATCH zero karta hai: 1.4.2 banta hai 1.5.0, 1.5.2 nahi."
            }
          },
          {
            code: "_ => new SemVer(Major, Minor, Patch + 1)",
            note: {
              en: "A bug fix only raises PATCH: 1.4.2 becomes 1.4.3.",
              hi: "Bug fix सिर्फ़ PATCH बढ़ाता है: 1.4.2 बनता है 1.4.3।",
              hg: "Bug fix sirf PATCH badhata hai: 1.4.2 banta hai 1.4.3."
            }
          },
          {
            code: "[\"BUILD_BUILDNUMBER\"] = \"20261107.3\",",
            note: {
              en: "Azure Pipelines turns the variable <code>Build.BuildNumber</code> into the environment variable <code>BUILD_BUILDNUMBER</code>: upper case, dots become underscores. Here the default number is date plus a counter.",
              hi: "Azure Pipelines variable <code>Build.BuildNumber</code> को environment variable <code>BUILD_BUILDNUMBER</code> बना देता है: upper case, dots की जगह underscores। यहाँ default number तारीख़ और counter है।",
              hg: "Azure Pipelines variable <code>Build.BuildNumber</code> ko environment variable <code>BUILD_BUILDNUMBER</code> bana deta hai: upper case, dots ki jagah underscores. Yahan default number taareekh aur counter hai."
            }
          },
          {
            code: "var sha = env(\"BUILD_SOURCEVERSION\") ?? \"local\";",
            note: {
              en: "<code>Build.SourceVersion</code> is the full commit id. The <code>?? \"local\"</code> fallback keeps the code working on a laptop, where the variable does not exist.",
              hi: "<code>Build.SourceVersion</code> पूरा commit id है। <code>?? \"local\"</code> fallback code को laptop पर चलने देता है, जहाँ यह variable होता ही नहीं।",
              hg: "<code>Build.SourceVersion</code> poora commit id hai. <code>?? \"local\"</code> fallback code ko laptop par chalne deta hai, jahan ye variable hota hi nahi."
            }
          },
          {
            code: "Console.WriteLine(BuildInfo.From(_ => null, next));",
            note: {
              en: "Simulates a laptop: no variables, so the result shows <code>local</code> and <code>unknown</code>. Passing the lookup as a function also makes the code easy to test.",
              hi: "Laptop की नकल: कोई variables नहीं, इसलिए result में <code>local</code> और <code>unknown</code> दिखता है। Lookup को function के रूप में देने से code test करना भी आसान होता है।",
              hg: "Laptop ki nakal: koi variables nahi, isliye result mein <code>local</code> aur <code>unknown</code> dikhta hai. Lookup ko function ke roop mein dene se code test karna bhi aasaan hota hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Raising only PATCH for a breaking change. Clients upgrade without fear and their code breaks.</li><li>Forgetting to reset the lower numbers: 1.4.2 plus a feature is 1.5.0, not 1.5.2.</li><li>Moving or re-using a Git tag after release. A tag must always point to the same commit, otherwise \"which code is v1.5.0?\" has no answer.</li></ul>",
          hi: "<ul><li>Breaking change के लिए सिर्फ़ PATCH बढ़ाना। Clients बेफ़िक्र होकर upgrade करते हैं और उनका code टूट जाता है।</li><li>छोटे numbers को zero करना भूल जाना: 1.4.2 में एक feature जुड़ने पर 1.5.0 होता है, 1.5.2 नहीं।</li><li>Release के बाद Git tag खिसकाना या दोबारा use करना। Tag हमेशा एक ही commit पर रहना चाहिए, वरना \"v1.5.0 में कौन-सा code है?\" का जवाब नहीं मिलता।</li></ul>",
          hg: "<ul><li>Breaking change ke liye sirf PATCH badhana. Clients befikar hokar upgrade karte hain aur unka code toot jaata hai.</li><li>Chhote numbers ko zero karna bhool jaana: 1.4.2 mein ek feature judne par 1.5.0 hota hai, 1.5.2 nahi.</li><li>Release ke baad Git tag khiskana ya dobara use karna. Tag hamesha ek hi commit par rehna chahiye, warna \"v1.5.0 mein kaunsa code hai?\" ka jawab nahi milta.</li></ul>"
        },
        whenToUse: {
          en: "<p>Version every artifact the pipeline produces and tag the commit of every release. Show the version and commit id in a <code>/version</code> endpoint or in the logs (see the Deep Dive). Pre-release tags like <code>1.5.0-rc.1</code> sort lower than <code>1.5.0</code>.</p>",
          hi: "<p>Pipeline जो भी artifact बनाए उसे version दो और हर release के commit पर tag लगाओ। Version और commit id <code>/version</code> endpoint या logs में दिखाओ (Deep Dive देखो)। <code>1.5.0-rc.1</code> जैसे pre-release tags <code>1.5.0</code> से छोटे गिने जाते हैं।</p>",
          hg: "<p>Pipeline jo bhi artifact banaye use version do aur har release ke commit par tag lagao. Version aur commit id <code>/version</code> endpoint ya logs mein dikhao (Deep Dive dekho). <code>1.5.0-rc.1</code> jaise pre-release tags <code>1.5.0</code> se chhote gine jaate hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>The default build number looks like <code>20261107.3</code>: date, a dot, then the counter for that day. Split it and print <code>build 3 of 20261107</code>.</p>",
            hi: "<p>Default build number ऐसा दिखता है <code>20261107.3</code>: तारीख़, एक dot, फिर उस दिन का counter। इसे बाँटो और <code>build 3 of 20261107</code> print करो।</p>",
            hg: "<p>Default build number aisa dikhta hai <code>20261107.3</code>: taareekh, ek dot, phir us din ka counter. Ise baanto aur <code>build 3 of 20261107</code> print karo.</p>"
          },
          hint: {
            en: "<p><code>\"20261107.3\".Split('.')</code> returns two parts: index 0 is the date, index 1 the counter.</p>",
            hi: "<p><code>\"20261107.3\".Split('.')</code> दो हिस्से देता है: index 0 तारीख़ है, index 1 counter।</p>",
            hg: "<p><code>\"20261107.3\".Split('.')</code> do hisse deta hai: index 0 taareekh hai, index 1 counter.</p>"
          },
          solution: {
            caption: {
              en: "Solution: split the build number",
              hi: "हल: build number को बाँटना",
              hg: "Solution: build number ko baantna"
            },
            src: "var buildNumber = \"20261107.3\";\nvar parts = buildNumber.Split('.');\nConsole.WriteLine($\"build {parts[1]} of {parts[0]}\");",
            check: "run",
            expected: "build 3 of 20261107"
          }
        },
        quiz: {
          q: {
            en: "Version 1.4.2 is live. You add a new endpoint that breaks no existing client. What is the next version?",
            hi: "Version 1.4.2 live है। तुम एक नया endpoint जोड़ते हो जो किसी मौजूदा client को नहीं तोड़ता। अगला version क्या है?",
            hg: "Version 1.4.2 live hai. Tum ek naya endpoint jodte ho jo kisi maujooda client ko nahi todta. Agla version kya hai?"
          },
          options: [
            {
              en: "1.4.3",
              hi: "Version 1.4.3 होगा",
              hg: "Version 1.4.3 hoga"
            },
            {
              en: "1.5.0",
              hi: "Version 1.5.0 होगा",
              hg: "Version 1.5.0 hoga"
            },
            {
              en: "1.5.2",
              hi: "Version 1.5.2 होगा",
              hg: "Version 1.5.2 hoga"
            },
            {
              en: "2.0.0",
              hi: "Version 2.0.0 होगा",
              hg: "Version 2.0.0 hoga"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>A new feature that breaks no one raises MINOR and resets PATCH to zero: 1.5.0. A bug fix would be 1.4.3 and a breaking change 2.0.0.</p>",
            hi: "<p>जो नया feature किसी को नहीं तोड़ता वह MINOR बढ़ाता है और PATCH को zero करता है: 1.5.0। Bug fix 1.4.3 होता और breaking change 2.0.0।</p>",
            hg: "<p>Jo naya feature kisi ko nahi todta wo MINOR badhata hai aur PATCH ko zero karta hai: 1.5.0. Bug fix 1.4.3 hota aur breaking change 2.0.0.</p>"
          }
        },
        recap: {
          en: "<ul><li>SemVer: MAJOR for breaking, MINOR for features, PATCH for fixes; lower numbers reset to zero.</li><li>Stamp the version, commit id and build number into every build, and tag the release commit.</li><li>Read build facts from predefined variables (<code>BUILD_BUILDNUMBER</code>) and keep a fallback for local runs.</li></ul>",
          hi: "<ul><li>SemVer: breaking के लिए MAJOR, features के लिए MINOR, fixes के लिए PATCH; छोटे numbers zero हो जाते हैं।</li><li>हर build में version, commit id और build number stamp करो, और release के commit पर tag लगाओ।</li><li>Build facts predefined variables (<code>BUILD_BUILDNUMBER</code>) से पढ़ो और local runs के लिए fallback रखो।</li></ul>",
          hg: "<ul><li>SemVer: breaking ke liye MAJOR, features ke liye MINOR, fixes ke liye PATCH; chhote numbers zero ho jaate hain.</li><li>Har build mein version, commit id aur build number stamp karo, aur release ke commit par tag lagao.</li><li>Build facts predefined variables (<code>BUILD_BUILDNUMBER</code>) se padho aur local runs ke liye fallback rakho.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "SemVer bump and build info read from pipeline environment variables",
            hi: "SemVer bump और pipeline के environment variables से पढ़ी build info",
            hg: "SemVer bump aur pipeline ke environment variables se padhi build info"
          },
          src: "// What an Azure Pipelines agent exposes: variable Build.BuildNumber becomes BUILD_BUILDNUMBER.\nvar pipelineEnv = new Dictionary<string, string>\n{\n    [\"BUILD_BUILDNUMBER\"] = \"20261107.3\",\n    [\"BUILD_SOURCEVERSION\"] = \"3f2a9c1d8e7b6a5f4c3b2a1908d7e6f5a4b3c2d1\",\n    [\"BUILD_SOURCEBRANCHNAME\"] = \"main\"\n};\n\nvar current = SemVer.Parse(\"1.4.2\");\nConsole.WriteLine($\"bug fix:  {current.Bump(Change.Patch)}\");\nConsole.WriteLine($\"feature:  {current.Bump(Change.Minor)}\");\nConsole.WriteLine($\"breaking: {current.Bump(Change.Major)}\");\n\nvar next = current.Bump(Change.Minor);\nConsole.WriteLine(BuildInfo.From(name => pipelineEnv.GetValueOrDefault(name), next));\nConsole.WriteLine(BuildInfo.From(_ => null, next));   // on a laptop the variables do not exist\n\npublic enum Change { Patch, Minor, Major }\n\npublic record SemVer(int Major, int Minor, int Patch)\n{\n    public static SemVer Parse(string text)\n    {\n        var p = text.Split('.').Select(int.Parse).ToArray();\n        return new SemVer(p[0], p[1], p[2]);\n    }\n\n    public SemVer Bump(Change change) => change switch\n    {\n        Change.Major => new SemVer(Major + 1, 0, 0),\n        Change.Minor => new SemVer(Major, Minor + 1, 0),\n        _ => new SemVer(Major, Minor, Patch + 1)\n    };\n\n    public override string ToString() => $\"{Major}.{Minor}.{Patch}\";\n}\n\npublic static class BuildInfo\n{\n    public static string From(Func<string, string?> env, SemVer version)\n    {\n        var sha = env(\"BUILD_SOURCEVERSION\") ?? \"local\";\n        var shortSha = sha.Length > 7 ? sha[..7] : sha;\n        var build = env(\"BUILD_BUILDNUMBER\") ?? \"local\";\n        var branch = env(\"BUILD_SOURCEBRANCHNAME\") ?? \"unknown\";\n        return $\"{version}+sha.{shortSha} (build {build}, branch {branch})\";\n    }\n}",
          check: "run",
          expected: "bug fix:  1.4.3\nfeature:  1.5.0\nbreaking: 2.0.0\n1.5.0+sha.3f2a9c1 (build 20261107.3, branch main)\n1.5.0+sha.local (build local, branch unknown)"
        }
      ]
    },
    {
      id: "cherry-pick-hotfix",
      depth: "detailed",
      title: {
        en: "Cherry-pick: back-port a hotfix",
        hi: "Cherry-pick: hotfix को पुरानी branch पर लाना",
        hg: "Cherry-pick: hotfix ko purani branch par laana"
      },
      body: {
        en: "<ul>\n<li><b>Cherry-pick</b> copies one commit onto the current branch (new commit id). Typical use: a hotfix from main to a release branch.</li>\n<li>A <b>hotfix</b> is often a fix merged to <code>main</code> and then <code>git cherry-pick</code>ed onto the release branch. Use <code>-x</code> to record the original commit id in the message.</li>\n</ul>",
        hi: "<ul>\n<li><b>Cherry-pick</b> एक commit को current branch पर copy करता है (नया commit id)। आम use: main से release branch पर hotfix।</li>\n<li><b>Hotfix</b> अक्सर <code>main</code> में merged fix होता है जिसे <code>git cherry-pick</code> से release branch पर लाते हैं। <code>-x</code> से message में original commit id दर्ज हो जाता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Cherry-pick</b> ek commit ko current branch par copy karta hai (naya commit id). Aam use: main se release branch par hotfix.</li>\n<li><b>Hotfix</b> aksar <code>main</code> mein merged fix hota hai jise <code>git cherry-pick</code> se release branch par laate hain. <code>-x</code> se message mein original commit id darj ho jaata hai.</li>\n</ul>"
      },
      code: [
        {
          lang: "bash",
          caption: {
            en: "Back-port a fix from main to a release branch (display-only; the commit id is an example)",
            hi: "main से fix को release branch पर लाना (सिर्फ़ दिखाने के लिए; commit id उदाहरण है)",
            hg: "main se fix ko release branch par laana (sirf dikhane ke liye; commit id udaharan hai)"
          },
          src: "git switch release/1.4\ngit cherry-pick -x 3f2a9c1        # -x records \"(cherry picked from commit ...)\"",
          check: "none"
        }
      ]
    },
    {
      id: "branching-strategies",
      depth: "detailed",
      title: {
        en: "Branching strategies and the pull request flow",
        hi: "Branching strategies और pull request flow",
        hg: "Branching strategies aur pull request flow"
      },
      body: {
        en: "<p><b>Picture — a railway timetable vs a local bus:</b> <b>GitFlow</b> is the scheduled express: it leaves on fixed dates, with its own platform (release branch). <b>Trunk-based</b> is the local bus that runs every few minutes: small hops, always on the main road.</p>\n<ul>\n<li><b>Trunk-based development:</b> everyone merges to <code>main</code> (the trunk) often, with branches that live hours or a day or two. Unfinished work is hidden behind <b>feature flags</b>. Needs fast automated tests and a reliable pipeline. It fits continuous delivery and is the style DORA research associates with high performance.</li>\n<li><b>GitFlow:</b> long-lived <code>main</code> and <code>develop</code>, plus feature, release and hotfix branches. It suits products with scheduled, versioned releases or several supported versions (installed software, mobile apps, libraries). The cost: big merges, slow feedback, more ceremony.</li>\n<li><b>GitHub flow:</b> <code>main</code> is always deployable; every change is a short branch with a PR, merged and deployed. Simple, popular for web apps. Trunk-based with short branches is close to it.</li>\n<li><b>Release branches</b> still appear in trunk-based teams when they must patch an old version: cut a branch from main at release time, then cherry-pick fixes.</li>\n<li><b>TL review angle:</b> keep PRs small (a few hundred changed lines is easier to review than thousands). Look for correctness and edge cases, design fit, tests, security, performance and rollout risk; style is the linter's job. Comment on the code, not the person; ask questions (\"what happens if this is null?\"), explain why, separate must-fix from nice-to-have, and say what is good too.</li>\n</ul>\n<p><b>When to use / when not:</b> choose by release cadence and team maturity: frequent deploys and good tests lean to trunk-based or GitHub flow; scheduled versioned releases lean to GitFlow or release branches. Do not adopt trunk-based without tests and feature flags (you will break main), and do not adopt GitFlow just because it is famous.</p>",
        hi: "<p><b>Picture — railway timetable बनाम local bus:</b> <b>GitFlow</b> scheduled express है: fixed dates पर निकलती है, अपने platform (release branch) के साथ। <b>Trunk-based</b> local bus है जो हर कुछ मिनट में चलती है: छोटे hops, हमेशा main सड़क पर।</p>\n<ul>\n<li><b>Trunk-based development:</b> सब लोग <code>main</code> (trunk) में बार-बार merge करते हैं, branches कुछ घंटे या एक-दो दिन जीती हैं। अधूरा काम <b>feature flags</b> के पीछे छिपा रहता है। इसके लिए fast automated tests और भरोसेमंद pipeline चाहिए। यह continuous delivery में फिट होता है और DORA research इसी style को high performance से जोड़ती है।</li>\n<li><b>GitFlow:</b> लंबी उम्र वाली <code>main</code> और <code>develop</code>, plus feature, release और hotfix branches। यह scheduled, versioned releases या कई supported versions वाले products के लिए है (installed software, mobile apps, libraries)। कीमत: बड़े merges, धीमा feedback, ज़्यादा ceremony।</li>\n<li><b>GitHub flow:</b> <code>main</code> हमेशा deployable; हर बदलाव PR वाली छोटी branch है, merge और deploy। Simple, web apps में popular। छोटी branches वाला trunk-based इसके करीब है।</li>\n<li><b>Release branches</b> trunk-based teams में भी आती हैं जब पुराने version को patch करना हो: release के समय main से branch काटो, फिर fixes cherry-pick करो।</li>\n<li><b>TL review angle:</b> PRs छोटे रखो (कुछ सौ changed lines हज़ारों से आसानी से review होती हैं)। correctness और edge cases, design fit, tests, security, performance और rollout risk देखो; style linter का काम है। Code पर comment करो, इंसान पर नहीं; सवाल पूछो (\"यह null हो तो क्या होगा?\"), why समझाओ, must-fix और nice-to-have अलग करो, और जो अच्छा है वह भी बोलो।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> release cadence और team maturity से चुनो: बार-बार deploy और अच्छे tests हों तो trunk-based या GitHub flow; scheduled versioned releases हों तो GitFlow या release branches। Tests और feature flags के बिना trunk-based मत अपनाओ (main टूटेगी), और GitFlow सिर्फ़ इसलिए मत अपनाओ कि वह famous है।</p>",
        hg: "<p><b>Picture — railway timetable vs local bus:</b> <b>GitFlow</b> scheduled express hai: fixed dates par nikalti hai, apne platform (release branch) ke saath. <b>Trunk-based</b> local bus hai jo har kuch minute mein chalti hai: chhote hops, hamesha main sadak par.</p>\n<ul>\n<li><b>Trunk-based development:</b> sab log <code>main</code> (trunk) mein baar-baar merge karte hain, branches kuch ghante ya ek-do din jeeti hain. Adhoora kaam <b>feature flags</b> ke peeche chhupa rehta hai. Iske liye fast automated tests aur bharosemand pipeline chahiye. Yeh continuous delivery mein fit hota hai aur DORA research isi style ko high performance se jodti hai.</li>\n<li><b>GitFlow:</b> lambi umar wali <code>main</code> aur <code>develop</code>, plus feature, release aur hotfix branches. Yeh scheduled, versioned releases ya kai supported versions wale products ke liye hai (installed software, mobile apps, libraries). Keemat: bade merges, dheema feedback, zyada ceremony.</li>\n<li><b>GitHub flow:</b> <code>main</code> hamesha deployable; har badlaav PR wali chhoti branch hai, merge aur deploy. Simple, web apps mein popular. Chhoti branches wala trunk-based iske kareeb hai.</li>\n<li><b>Release branches</b> trunk-based teams mein bhi aati hain jab purane version ko patch karna ho: release ke samay main se branch kaato, phir fixes cherry-pick karo.</li>\n<li><b>TL review angle:</b> PRs chhote rakho (kuch sau changed lines hazaron se aasaani se review hoti hain). Correctness aur edge cases, design fit, tests, security, performance aur rollout risk dekho; style linter ka kaam hai. Code par comment karo, insaan par nahi; sawaal poocho (\"yeh null ho to kya hoga?\"), why samjhao, must-fix aur nice-to-have alag karo, aur jo achha hai woh bhi bolo.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> release cadence aur team maturity se chuno: baar-baar deploy aur achhe tests hon to trunk-based ya GitHub flow; scheduled versioned releases hon to GitFlow ya release branches. Tests aur feature flags ke bina trunk-based mat apnao (main tootegi), aur GitFlow sirf isliye mat apnao ki woh famous hai.</p>"
      }
    },
    {
      id: "ci-cd-and-secrets",
      depth: "detailed",
      title: {
        en: "Pipelines, Docker and CI/CD principles in one map",
        hi: "Pipelines, Docker और CI/CD principles एक map में",
        hg: "Pipelines, Docker aur CI/CD principles ek map mein"
      },
      body: {
        en: "<ul>\n<li><b>CI</b> (continuous integration): every push or PR builds and tests the code. <b>CD</b>: continuous <i>delivery</i> keeps every build releasable (a person approves the release); continuous <i>deployment</i> releases automatically after the checks pass.</li>\n<li><b>Variables and secrets:</b> plain variables in YAML, <b>variable groups</b> in the Library, and groups <b>linked to Key Vault</b> for secrets (Day 20). Secret variables are masked in logs. Pass them to scripts explicitly (for example through <code>env:</code>).</li>\n</ul>\n<p><b>When to use / when not:</b> automate everything repeatable that touches production. Do not add stages and approvals nobody needs: every gate slows lead time, so keep a gate only where it protects something real (prod approval, security scan).</p>",
        hi: "<ul>\n<li><b>CI</b> (continuous integration): हर push या PR पर code build और test होता है। <b>CD</b>: continuous <i>delivery</i> हर build को releasable रखती है (release कोई इंसान approve करता है); continuous <i>deployment</i> checks पास होने पर अपने-आप release करती है।</li>\n<li><b>Variables और secrets:</b> YAML में plain variables, Library में <b>variable groups</b>, और secrets के लिए <b>Key Vault से linked</b> groups (Day 20)। Secret variables logs में masked रहते हैं। उन्हें scripts को साफ़ तौर पर दो (जैसे <code>env:</code> से)।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> production को छूने वाली हर दोहराई जाने वाली चीज़ automate करो। ऐसे stages और approvals मत जोड़ो जिनकी किसी को ज़रूरत नहीं: हर gate lead time बढ़ाता है, इसलिए gate तभी रखो जब वह कुछ असली बचाता हो (prod approval, security scan)।</p>",
        hg: "<ul>\n<li><b>CI</b> (continuous integration): har push ya PR par code build aur test hota hai. <b>CD</b>: continuous <i>delivery</i> har build ko releasable rakhti hai (release koi insaan approve karta hai); continuous <i>deployment</i> checks pass hone par apne-aap release karti hai.</li>\n<li><b>Variables aur secrets:</b> YAML mein plain variables, Library mein <b>variable groups</b>, aur secrets ke liye <b>Key Vault se linked</b> groups (Day 20). Secret variables logs mein masked rehte hain. Unhe scripts ko saaf taur par do (jaise <code>env:</code> se).</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> production ko chhoone wali har dohrayi jaane wali cheez automate karo. Aise stages aur approvals mat jodo jinki kisi ko zaroorat nahi: har gate lead time badhata hai, isliye gate tabhi rakho jab woh kuch asli bachata ho (prod approval, security scan).</p>"
      }
    },
    {
      id: "templates-and-github-actions",
      depth: "detailed",
      title: {
        en: "In practice: a multi-stage Azure Pipelines YAML, a deploy template, and the GitHub Actions twin",
        hi: "Practice में: multi-stage Azure Pipelines YAML, एक deploy template, और GitHub Actions का जुड़वाँ",
        hg: "Practice mein: multi-stage Azure Pipelines YAML, ek deploy template, aur GitHub Actions ka judwa"
      },
      body: {
        en: "<ul>\n<li><b>Stage template:</b> <code>deploy-stage.yml</code> takes parameters (stage name, environment, app name, service connection) so test and prod are the same steps with different values. Prod is just a second call. An <code>extends</code> template goes further and defines a company-approved shape, but it only constrains pipelines that extend it; to enforce it, add a <b>Required template</b> check on the protected resource (environment, service connection or repo).</li>\n<li><b>Secrets:</b> the Azure service connection holds the identity used to deploy; app secrets come from a Key Vault-linked variable group (Day 20) or, better, from the app's managed identity at runtime. Never echo secrets in scripts.</li>\n<li><b>Strategies:</b> <code>runOnce</code> here; <code>rolling</code> (only for VM targets) and <code>canary</code> add lifecycle hooks (<code>preDeploy</code>, <code>deploy</code>, <code>routeTraffic</code>, <code>postRouteTraffic</code>, <code>on: failure</code>). For App Service, many teams get the same safety by deploying to a slot and swapping (Day 20).</li>\n<li><b>GitHub Actions twin:</b> same shape in <code>.github/workflows/ci.yml</code>: <code>on</code>, <code>jobs</code>, <code>needs</code> (= <code>dependsOn</code>), <code>environment</code> with required reviewers, <code>uses</code> for ready-made actions. Pin third-party actions to a version or commit SHA, and check the current major versions.</li>\n</ul>\n<p><b>When to use:</b> YAML in the repo for every service (reviewable, versioned with the code), templates once you copy the same stage a second time. <b>When not:</b> do not template everything on day one (premature abstraction), and do not put approvals on dev, which only slows feedback.</p>",
        hi: "<ul>\n<li><b>Stage template:</b> <code>deploy-stage.yml</code> parameters लेता है (stage name, environment, app name, service connection) ताकि test और prod वही steps हों बस values अलग। Prod बस दूसरी call है। <code>extends</code> template आगे जाकर company-approved shape तय करता है, पर वह सिर्फ़ उन्हीं pipelines को बाँधता है जो उसे extend करती हैं; इसे लागू कराने के लिए protected resource (environment, service connection या repo) पर <b>Required template</b> check लगाओ।</li>\n<li><b>Secrets:</b> Azure service connection में वह identity है जिससे deploy होता है; app secrets Key Vault-linked variable group (Day 20) से, या बेहतर, runtime पर app की managed identity से आते हैं। Scripts में secrets echo मत करो।</li>\n<li><b>Strategies:</b> यहाँ <code>runOnce</code>; <code>rolling</code> (सिर्फ़ VM targets के लिए) और <code>canary</code> lifecycle hooks जोड़ते हैं (<code>preDeploy</code>, <code>deploy</code>, <code>routeTraffic</code>, <code>postRouteTraffic</code>, <code>on: failure</code>)। App Service के लिए कई teams वही safety slot पर deploy और swap से पाती हैं (Day 20)।</li>\n<li><b>GitHub Actions का जुड़वाँ:</b> <code>.github/workflows/ci.yml</code> में वही shape: <code>on</code>, <code>jobs</code>, <code>needs</code> (= <code>dependsOn</code>), required reviewers वाला <code>environment</code>, ready-made actions के लिए <code>uses</code>। Third-party actions को version या commit SHA पर pin करो, और current major versions check करो।</li>\n</ul>\n<p><b>कब use करें:</b> हर service के लिए repo में YAML (reviewable, code के साथ versioned), और templates तब जब वही stage दूसरी बार copy करो। <b>कब नहीं:</b> पहले दिन सब कुछ template मत बनाओ (premature abstraction), और dev पर approvals मत लगाओ, उससे सिर्फ़ feedback धीमा होता है।</p>",
        hg: "<ul>\n<li><b>Stage template:</b> <code>deploy-stage.yml</code> parameters leta hai (stage name, environment, app name, service connection) taaki test aur prod wahi steps hon bas values alag. Prod bas doosri call hai. <code>extends</code> template aage jaakar company-approved shape tay karta hai, par woh sirf unhi pipelines ko baandhta hai jo use extend karti hain; ise lagu karwane ke liye protected resource (environment, service connection ya repo) par <b>Required template</b> check lagao.</li>\n<li><b>Secrets:</b> Azure service connection mein woh identity hai jisse deploy hota hai; app secrets Key Vault-linked variable group (Day 20) se, ya behtar, runtime par app ki managed identity se aate hain. Scripts mein secrets echo mat karo.</li>\n<li><b>Strategies:</b> yahan <code>runOnce</code>; <code>rolling</code> (sirf VM targets ke liye) aur <code>canary</code> lifecycle hooks jodte hain (<code>preDeploy</code>, <code>deploy</code>, <code>routeTraffic</code>, <code>postRouteTraffic</code>, <code>on: failure</code>). App Service ke liye kai teams wahi safety slot par deploy aur swap se paati hain (Day 20).</li>\n<li><b>GitHub Actions ka judwa:</b> <code>.github/workflows/ci.yml</code> mein wahi shape: <code>on</code>, <code>jobs</code>, <code>needs</code> (= <code>dependsOn</code>), required reviewers wala <code>environment</code>, ready-made actions ke liye <code>uses</code>. Third-party actions ko version ya commit SHA par pin karo, aur current major versions check karo.</li>\n</ul>\n<p><b>Kab use karein:</b> har service ke liye repo mein YAML (reviewable, code ke saath versioned), aur templates tab jab wahi stage doosri baar copy karo. <b>Kab nahi:</b> pehle din sab kuch template mat banao (premature abstraction), aur dev par approvals mat lagao, usse sirf feedback dheema hota hai.</p>"
      },
      code: [
        {
          lang: "yaml",
          caption: {
            en: "templates/deploy-stage.yml: a stage template with parameters and a deployment job",
            hi: "templates/deploy-stage.yml: parameters और deployment job वाला stage template",
            hg: "templates/deploy-stage.yml: parameters aur deployment job wala stage template"
          },
          check: "none",
          src: "parameters:\n- name: stageName\n  type: string\n- name: environment\n  type: string\n- name: appName\n  type: string\n- name: serviceConnection\n  type: string\n- name: dependsOn\n  type: string\n\nstages:\n- stage: ${{ parameters.stageName }}\n  dependsOn: ${{ parameters.dependsOn }}\n  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))\n  jobs:\n  - deployment: Deploy\n    pool:\n      vmImage: ubuntu-latest\n    environment: ${{ parameters.environment }}\n    strategy:\n      runOnce:\n        deploy:\n          steps:\n          - download: current\n            artifact: drop\n          - task: AzureWebApp@1\n            inputs:\n              azureSubscription: ${{ parameters.serviceConnection }}\n              appType: webAppLinux\n              appName: ${{ parameters.appName }}\n              package: $(Pipeline.Workspace)/drop"
        },
        {
          lang: "yaml",
          caption: {
            en: "The GitHub Actions twin of the build job plus a protected deploy (display-only; check current action versions)",
            hi: "Build job और protected deploy का GitHub Actions जुड़वाँ (सिर्फ़ दिखाने के लिए; current action versions check करो)",
            hg: "Build job aur protected deploy ka GitHub Actions judwa (sirf dikhane ke liye; current action versions check karo)"
          },
          check: "none",
          src: "name: ci\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v7\n      - uses: actions/setup-dotnet@v6\n        with:\n          dotnet-version: 10.0.x\n      - run: dotnet test --configuration Release\n      - run: dotnet publish src/Shop.Api -c Release -o out\n      - uses: actions/upload-artifact@v7\n        with:\n          name: drop\n          path: out\n\n  deploy-prod:\n    needs: build                  # same idea as dependsOn\n    if: github.ref == 'refs/heads/main'\n    runs-on: ubuntu-latest\n    environment: production       # required reviewers are set on the environment\n    steps:\n      - uses: actions/download-artifact@v8\n        with:\n          name: drop\n      - run: echo \"deploy the downloaded artifact here\""
        }
      ]
    },
    {
      id: "docker-more",
      depth: "detailed",
      title: {
        en: "In practice: a multi-stage Dockerfile for ASP.NET Core, .dockerignore, non-root and chiseled images",
        hi: "Practice में: ASP.NET Core का multi-stage Dockerfile, .dockerignore, non-root और chiseled images",
        hg: "Practice mein: ASP.NET Core ka multi-stage Dockerfile, .dockerignore, non-root aur chiseled images"
      },
      body: {
        en: "<ul>\n<li><b><code>.dockerignore</code>:</b> keeps <code>bin</code>, <code>obj</code>, <code>.git</code>, local settings and secrets out of the build context. It makes builds faster and stops secrets leaking into layers.</li>\n<li><b>Chiseled images</b> (for example <code>mcr.microsoft.com/dotnet/aspnet:10.0-noble-chiseled</code>): Ubuntu-based, minimal packages, <b>no shell and no package manager</b>, and non-root by default. Smaller and safer, but you cannot <code>RUN</code> shell commands in the final stage or <code>docker exec</code> a shell to debug. Verify tags on the .NET Docker documentation; they change with each release.</li>\n<li><b>Without a Dockerfile:</b> <code>dotnet publish /t:PublishContainer</code> (SDK 8+) builds an image directly and loads it into your local container runtime (Docker or Podman); set <code>ContainerRegistry</code> to push it to a registry instead. For ASP.NET apps it picks the aspnet base image and runs as the non-root <code>app</code> user by default; <code>ContainerFamily</code> picks a flavour such as <code>noble-chiseled</code>. It cannot run <code>RUN</code> commands, so use a Dockerfile if you need OS packages.</li>\n<li><b>Tags:</b> tag with the version (and optionally the commit id), not only <code>latest</code>. For repeatable builds, pin base images by version (or digest) and update them on purpose.</li>\n</ul>",
        hi: "<ul>\n<li><b><code>.dockerignore</code>:</b> <code>bin</code>, <code>obj</code>, <code>.git</code>, local settings और secrets को build context से बाहर रखता है। Build तेज़ होता है और secrets layers में leak नहीं होते।</li>\n<li><b>Chiseled images</b> (जैसे <code>mcr.microsoft.com/dotnet/aspnet:10.0-noble-chiseled</code>): Ubuntu-based, minimal packages, <b>shell नहीं और package manager नहीं</b>, और default से non-root। छोटी और ज़्यादा safe, पर final stage में shell commands <code>RUN</code> नहीं कर सकते और debug के लिए shell में <code>docker exec</code> नहीं कर सकते। Tags .NET Docker documentation पर verify करो; वे हर release के साथ बदलते हैं।</li>\n<li><b>बिना Dockerfile:</b> <code>dotnet publish /t:PublishContainer</code> (SDK 8+) सीधे image build करके तुम्हारे local container runtime (Docker या Podman) में load करता है; registry में push करने के लिए <code>ContainerRegistry</code> set करो। ASP.NET apps के लिए aspnet base image चुनता है और default से non-root <code>app</code> user से चलता है; <code>ContainerFamily</code> <code>noble-chiseled</code> जैसा flavour चुनता है। वह <code>RUN</code> commands नहीं चला सकता, इसलिए OS packages चाहिए तो Dockerfile लो।</li>\n<li><b>Tags:</b> version (और चाहें तो commit id) से tag करो, सिर्फ़ <code>latest</code> से नहीं। Repeatable builds के लिए base images को version (या digest) पर pin करो और जान-बूझकर update करो।</li>\n</ul>",
        hg: "<ul>\n<li><b><code>.dockerignore</code>:</b> <code>bin</code>, <code>obj</code>, <code>.git</code>, local settings aur secrets ko build context se bahar rakhta hai. Build tez hota hai aur secrets layers mein leak nahi hote.</li>\n<li><b>Chiseled images</b> (jaise <code>mcr.microsoft.com/dotnet/aspnet:10.0-noble-chiseled</code>): Ubuntu-based, minimal packages, <b>shell nahi aur package manager nahi</b>, aur default se non-root. Chhoti aur zyada safe, par final stage mein shell commands <code>RUN</code> nahi kar sakte aur debug ke liye shell mein <code>docker exec</code> nahi kar sakte. Tags .NET Docker documentation par verify karo; woh har release ke saath badalte hain.</li>\n<li><b>Bina Dockerfile:</b> <code>dotnet publish /t:PublishContainer</code> (SDK 8+) seedha image build karke tumhare local container runtime (Docker ya Podman) mein load karta hai; registry mein push karne ke liye <code>ContainerRegistry</code> set karo. ASP.NET apps ke liye aspnet base image chunta hai aur default se non-root <code>app</code> user se chalta hai; <code>ContainerFamily</code> <code>noble-chiseled</code> jaisa flavour chunta hai. Woh <code>RUN</code> commands nahi chala sakta, isliye OS packages chahiye to Dockerfile lo.</li>\n<li><b>Tags:</b> version (aur chaho to commit id) se tag karo, sirf <code>latest</code> se nahi. Repeatable builds ke liye base images ko version (ya digest) par pin karo aur jaan-boojhkar update karo.</li>\n</ul>"
      },
      code: [
        {
          lang: "text",
          caption: {
            en: ".dockerignore: keep the build context small and secret-free",
            hi: ".dockerignore: build context को छोटा और secret-free रखो",
            hg: ".dockerignore: build context ko chhota aur secret-free rakho"
          },
          check: "none",
          src: "**/bin\n**/obj\n**/.vs\n.git\n.gitignore\n**/*.user\n**/appsettings.Development.json\n**/secrets.json\n.env\nDockerfile*\n*.md"
        },
        {
          lang: "bash",
          caption: {
            en: "Build and run locally, or skip the Dockerfile with the SDK container publish (display-only)",
            hi: "Local में build और run, या SDK container publish से Dockerfile छोड़ दो (सिर्फ़ दिखाने के लिए)",
            hg: "Local mein build aur run, ya SDK container publish se Dockerfile chhod do (sirf dikhane ke liye)"
          },
          check: "none",
          src: "# with a Dockerfile\ndocker build -t shop-api:1.4.2 .\ndocker run --rm -p 8080:8080 -e ASPNETCORE_ENVIRONMENT=Production shop-api:1.4.2\n\n# without a Dockerfile: the .NET SDK builds the image (SDK 8 or later).\n# ContainerFamily is appended to the base tag, here 10.0-noble-chiseled.\n# The image is loaded into local Docker/Podman; add -p ContainerRegistry=<registry> to push it.\ndotnet publish src/Shop.Api --os linux --arch x64 /t:PublishContainer \\\n  -p ContainerFamily=noble-chiseled -p ContainerImageTag=1.4.2"
        }
      ]
    },
    {
      id: "release-safety",
      depth: "detailed",
      title: {
        en: "In practice: versioning, config per environment, DB migrations in the pipeline, rollback, DORA",
        hi: "Practice में: versioning, हर environment की config, pipeline में DB migrations, rollback, DORA",
        hg: "Practice mein: versioning, har environment ki config, pipeline mein DB migrations, rollback, DORA"
      },
      body: {
        en: "<p><b>Analogy — a train with a guard and a reverse gear:</b> before leaving the station the guard checks the doors (health checks), and if the next station is blocked the train can reverse to the last good platform (rollback). A pipeline needs both.</p>\n<ul>\n<li><b>Expose the version:</b> after stamping it (lesson 7), make it visible so anyone can answer \"which build is running in prod?\". The C# snippet shows a <code>/version</code> endpoint reading the assembly's informational version, plus a simple readiness endpoint for the deploy step to poll. Pre-release ordering is in puzzle 1.</li>\n<li><b>Config per environment:</b> the artifact is identical everywhere; environment variables, App Service settings, variable groups and Key Vault supply the differences (Day 12 configuration layers, Day 20 secrets). If you must rebuild to change a connection string, the design is wrong.</li>\n<li><b>Database migrations:</b> generate an <b>idempotent SQL script</b> (<code>dotnet ef migrations script --idempotent</code>) or an <b>EF migration bundle</b> in the build, review it, and apply it as a deployment step before or as the new version starts (Day 5). Use the <b>expand and contract</b> pattern so old and new code both work during the rollout: add columns first, backfill, switch code, remove the old column in a later release.</li>\n<li><b>Rollback options:</b> redeploy the previous artifact (it still exists because you build once); swap the App Service slot back (Day 20); turn off the feature flag (fastest, no deploy). Database rollback is the hard part, which is why migrations should be backward-compatible and rolling forward with a fix is often safer than reversing data changes.</li>\n<li><b>Blue-green and canary:</b> blue-green keeps two full environments and switches traffic at once (a slot swap is the App Service form); canary sends a small percentage to the new version first and watches errors (puzzle 5 shows a stable percentage rollout). Both need good monitoring (Day 20).</li>\n<li><b>DORA metrics</b> (five): deployment frequency, change lead time, failed deployment recovery time, change fail rate, and deployment rework rate. The first three show throughput and the last two show instability. Use them to find bottlenecks as a team, not to rank people.</li>\n<li><b>Infrastructure as code:</b> keep Bicep or Terraform in the repo (Day 20). Show the <code>what-if</code> (Bicep) or <code>plan</code> (Terraform) output in the PR, apply through the pipeline after approval, and make no portal changes in prod.</li>\n<li><b>Pipeline secrets scanning:</b> add a secret scanner step in CI, as promised on Day 20, and never print secret variables.</li>\n</ul>\n<p><b>When to use:</b> all of it for anything that reaches users. <b>When not:</b> do not chase blue-green or canary for an internal tool with ten users, and do not measure DORA numbers as targets for individuals (Goodhart's law: a measure that becomes a target stops being a good measure).</p>",
        hi: "<p><b>Analogy — guard और reverse gear वाली train:</b> station छोड़ने से पहले guard दरवाज़े check करता है (health checks), और अगला station बंद हो तो train आख़िरी अच्छे platform तक reverse कर सकती है (rollback)। Pipeline को दोनों चाहिए।</p>\n<ul>\n<li><b>Version दिखाओ:</b> stamp करने के बाद (पाठ 7) उसे दिखाओ, ताकि कोई भी बता सके \"prod में कौन-सा build चल रहा है?\"। C# snippet एक <code>/version</code> endpoint दिखाता है जो assembly का informational version पढ़ता है, और deploy step के poll करने के लिए एक simple readiness endpoint। Pre-release का क्रम puzzle 1 में है।</li>\n<li><b>हर environment की config:</b> artifact हर जगह identical है; फ़र्क environment variables, App Service settings, variable groups और Key Vault से आता है (Day 12 की configuration layers, Day 20 के secrets)। अगर connection string बदलने के लिए rebuild करना पड़े तो design गलत है।</li>\n<li><b>Database migrations:</b> build में <b>idempotent SQL script</b> (<code>dotnet ef migrations script --idempotent</code>) या <b>EF migration bundle</b> बनाओ, review करो, और deployment step में नए version के शुरू होने से पहले या साथ लगाओ (Day 5)। <b>Expand and contract</b> pattern रखो ताकि rollout के दौरान पुराना और नया code दोनों चलें: पहले columns जोड़ो, backfill, code बदलो, पुराना column बाद की release में हटाओ।</li>\n<li><b>Rollback options:</b> पिछला artifact दोबारा deploy करो (वह मौजूद है क्योंकि build once); App Service slot वापस swap करो (Day 20); feature flag बंद करो (सबसे तेज़, deploy नहीं)। Database rollback मुश्किल हिस्सा है, इसीलिए migrations backward-compatible हों और data changes उलटने से अक्सर fix के साथ आगे बढ़ना ज़्यादा safe है।</li>\n<li><b>Blue-green और canary:</b> blue-green दो पूरे environments रखता है और traffic एक साथ switch करता है (slot swap उसका App Service रूप है); canary पहले छोटा percentage नए version को भेजता है और errors देखता है (puzzle 5 stable percentage rollout दिखाता है)। दोनों को अच्छी monitoring चाहिए (Day 20)।</li>\n<li><b>DORA metrics</b> (पाँच): deployment frequency, change lead time, failed deployment recovery time, change fail rate और deployment rework rate। पहले तीन throughput दिखाते हैं और आख़िरी दो instability। इन्हें team के bottlenecks ढूँढने के लिए use करो, लोगों को rank करने के लिए नहीं।</li>\n<li><b>Infrastructure as code:</b> Bicep या Terraform repo में रखो (Day 20)। PR में <code>what-if</code> (Bicep) या <code>plan</code> (Terraform) का output दिखाओ, approval के बाद pipeline से apply करो, और prod में portal से कोई बदलाव मत करो।</li>\n<li><b>Pipeline में secrets scanning:</b> CI में secret scanner step जोड़ो, जैसा Day 20 में वादा किया था, और secret variables कभी print मत करो।</li>\n</ul>\n<p><b>कब use करें:</b> जो कुछ users तक पहुँचता है उस सबके लिए। <b>कब नहीं:</b> दस users वाले internal tool के लिए blue-green या canary के पीछे मत भागो, और DORA numbers को लोगों के targets मत बनाओ (Goodhart's law: जो measure target बन जाता है वह अच्छा measure नहीं रहता)।</p>",
        hg: "<p><b>Analogy — guard aur reverse gear wali train:</b> station chhodne se pehle guard darwaze check karta hai (health checks), aur agla station band ho to train aakhri achhe platform tak reverse kar sakti hai (rollback). Pipeline ko dono chahiye.</p>\n<ul>\n<li><b>Version dikhao:</b> stamp karne ke baad (lesson 7) use dikhao, taaki koi bhi bata sake \"prod mein kaun-sa build chal raha hai?\". C# snippet ek <code>/version</code> endpoint dikhata hai jo assembly ka informational version padhta hai, aur deploy step ke poll karne ke liye ek simple readiness endpoint. Pre-release ka order puzzle 1 mein hai.</li>\n<li><b>Har environment ki config:</b> artifact har jagah identical hai; farq environment variables, App Service settings, variable groups aur Key Vault se aata hai (Day 12 ki configuration layers, Day 20 ke secrets). Agar connection string badalne ke liye rebuild karna pade to design galat hai.</li>\n<li><b>Database migrations:</b> build mein <b>idempotent SQL script</b> (<code>dotnet ef migrations script --idempotent</code>) ya <b>EF migration bundle</b> banao, review karo, aur deployment step mein naye version ke shuru hone se pehle ya saath lagao (Day 5). <b>Expand and contract</b> pattern rakho taaki rollout ke dauran purana aur naya code dono chalein: pehle columns jodo, backfill, code badlo, purana column baad ki release mein hatao.</li>\n<li><b>Rollback options:</b> pichhla artifact dobara deploy karo (woh maujood hai kyunki build once); App Service slot wapas swap karo (Day 20); feature flag band karo (sabse tez, deploy nahi). Database rollback mushkil hissa hai, isiliye migrations backward-compatible hon aur data changes ulatne se aksar fix ke saath aage badhna zyada safe hai.</li>\n<li><b>Blue-green aur canary:</b> blue-green do poore environments rakhta hai aur traffic ek saath switch karta hai (slot swap uska App Service roop hai); canary pehle chhota percentage naye version ko bhejta hai aur errors dekhta hai (puzzle 5 stable percentage rollout dikhata hai). Dono ko achhi monitoring chahiye (Day 20).</li>\n<li><b>DORA metrics</b> (paanch): deployment frequency, change lead time, failed deployment recovery time, change fail rate aur deployment rework rate. Pehle teen throughput dikhate hain aur aakhri do instability. Inhe team ke bottlenecks dhoondhne ke liye use karo, logon ko rank karne ke liye nahi.</li>\n<li><b>Infrastructure as code:</b> Bicep ya Terraform repo mein rakho (Day 20). PR mein <code>what-if</code> (Bicep) ya <code>plan</code> (Terraform) ka output dikhao, approval ke baad pipeline se apply karo, aur prod mein portal se koi badlaav mat karo.</li>\n<li><b>Pipeline mein secrets scanning:</b> CI mein secret scanner step jodo, jaisa Day 20 mein waada kiya tha, aur secret variables kabhi print mat karo.</li>\n</ul>\n<p><b>Kab use karein:</b> jo kuch users tak pahunchta hai us sabke liye. <b>Kab nahi:</b> das users wale internal tool ke liye blue-green ya canary ke peeche mat bhaago, aur DORA numbers ko logon ke targets mat banao (Goodhart's law: jo measure target ban jaata hai woh achha measure nahi rehta).</p>"
      },
      code: [
        {
          caption: {
            en: "A /version endpoint and a readiness endpoint a deployment step can poll (compile-checked)",
            hi: "एक /version endpoint और readiness endpoint जिसे deployment step poll कर सकता है (compile-checked)",
            hg: "Ek /version endpoint aur readiness endpoint jise deployment step poll kar sakta hai (compile-checked)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          src: "using System.Reflection;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Http;\n\nvar builder = WebApplication.CreateBuilder(args);\nvar app = builder.Build();\n\n// The build stamps the version (for example dotnet publish -p:Version=1.4.2+sha.3f2a9c1).\nvar version = Assembly.GetExecutingAssembly()\n    .GetCustomAttribute<AssemblyInformationalVersionAttribute>()?.InformationalVersion ?? \"unknown\";\n\napp.MapGet(\"/version\", () => Results.Ok(new { version, environment = app.Environment.EnvironmentName }));\n\n// Cheap readiness check: \"the process is up and can serve\". Keep deep dependency checks separate.\napp.MapGet(\"/ready\", () => Results.Ok(\"ready\"));\n\napp.Run();"
        },
        {
          lang: "bash",
          caption: {
            en: "Pipeline steps: make the migration script, apply it, and roll back by swapping (display-only)",
            hi: "Pipeline steps: migration script बनाना, लगाना, और swap से rollback (सिर्फ़ दिखाने के लिए)",
            hg: "Pipeline steps: migration script banana, lagana, aur swap se rollback (sirf dikhane ke liye)"
          },
          check: "none",
          src: "# build: produce the DB change as a reviewable artifact (Day 5)\ndotnet ef migrations script --idempotent --project src/Shop.Data -o migrate.sql\n# or: dotnet ef migrations bundle -o efbundle   (then run: ./efbundle --connection \"$CONN\")\n\n# deploy: apply the migration, deploy to the staging slot, smoke-test, then swap (Day 20)\nsqlcmd -S \"$SQL_SERVER\" -d shop -G -i migrate.sql      # -G = Microsoft Entra authentication\ncurl --fail https://shop-api-prod-staging.azurewebsites.net/ready\naz webapp deployment slot swap -n shop-api-prod -g rg-shop-prod --slot staging --target-slot production\n\n# rollback: swap back (the previous version is still in the other slot)\naz webapp deployment slot swap -n shop-api-prod -g rg-shop-prod --slot staging --target-slot production"
        }
      ]
    },
    {
      id: "whats-new",
      depth: "detailed",
      title: {
        en: "What is new in .NET containers and DORA",
        hi: ".NET containers और DORA में नया क्या है",
        hg: ".NET containers aur DORA mein naya kya hai"
      },
      body: {
        en: "<ul>\n<li><b>.NET container images:</b> since .NET 8 the Microsoft images include a non-root user (<code>app</code>, <code>APP_UID</code>) and listen on port 8080 by default. Chiseled Ubuntu images exist for current versions, for example <code>10.0-noble-chiseled</code> (verify tags before you copy them).</li>\n<li><b>SDK container publish:</b> <code>dotnet publish /t:PublishContainer</code> works without a Dockerfile from SDK 8; <code>ContainerFamily</code> picks the base image flavour and <code>ContainerUser</code> defaults to the non-root user for .NET 8 or higher Microsoft images.</li>\n<li><b>DORA:</b> the current guide lists five software delivery metrics (change lead time, deployment frequency, failed deployment recovery time, change fail rate, deployment rework rate); older material says four.</li>\n</ul>",
        hi: "<ul>\n<li><b>.NET container images:</b> .NET 8 से Microsoft images में non-root user (<code>app</code>, <code>APP_UID</code>) है और वे default रूप से port 8080 पर सुनती हैं। Current versions के लिए chiseled Ubuntu images हैं, जैसे <code>10.0-noble-chiseled</code> (copy करने से पहले tags verify करो)।</li>\n<li><b>SDK container publish:</b> SDK 8 से <code>dotnet publish /t:PublishContainer</code> बिना Dockerfile के चलता है; <code>ContainerFamily</code> base image का flavour चुनता है और .NET 8 या ऊपर की Microsoft images के लिए <code>ContainerUser</code> default से non-root user है।</li>\n<li><b>DORA:</b> current guide पाँच software delivery metrics बताती है (change lead time, deployment frequency, failed deployment recovery time, change fail rate, deployment rework rate); पुराना material चार कहता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>.NET container images:</b> .NET 8 se Microsoft images mein non-root user (<code>app</code>, <code>APP_UID</code>) hai aur woh default roop se port 8080 par sunti hain. Current versions ke liye chiseled Ubuntu images hain, jaise <code>10.0-noble-chiseled</code> (copy karne se pehle tags verify karo).</li>\n<li><b>SDK container publish:</b> SDK 8 se <code>dotnet publish /t:PublishContainer</code> bina Dockerfile ke chalta hai; <code>ContainerFamily</code> base image ka flavour chunta hai aur .NET 8 ya upar ki Microsoft images ke liye <code>ContainerUser</code> default se non-root user hai.</li>\n<li><b>DORA:</b> current guide paanch software delivery metrics batati hai (change lead time, deployment frequency, failed deployment recovery time, change fail rate, deployment rework rate); purana material chaar kehta hai.</li>\n</ul>"
      }
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
        en: "<ul>\n<li>Rebase creates <b>new commits</b> (new ids), so anyone who already pulled the old ones now has diverged history. That is the golden rule: do not rebase shared commits.</li>\n<li>A common team habit: rebase your own branch on main to stay current, then merge (or squash) into main through the PR.</li>\n<li>Follow-up: \"What if someone rebased a shared branch?\" Everyone who pulled it must reset or rebase their local copy onto the new history, which is painful; use revert instead and agree rules in the team.</li>\n</ul>",
        hi: "<ul>\n<li>Rebase <b>नए commits</b> बनाता है (नए ids), इसलिए जिसने पुराने commits पहले pull कर लिए उसकी history अलग हो जाती है। यही golden rule है: shared commits को rebase मत करो।</li>\n<li>Team की आम आदत: अपनी branch को main पर rebase करके current रखो, फिर PR से main में merge (या squash) करो।</li>\n<li>Follow-up: \"अगर किसी ने shared branch rebase कर दी तो?\" जिसने pull किया था उसे अपनी local copy नई history पर reset या rebase करनी पड़ती है, जो तकलीफ़ है; revert use करो और team में rules तय करो।</li>\n</ul>",
        hg: "<ul>\n<li>Rebase <b>naye commits</b> banata hai (naye ids), isliye jisne purane commits pehle pull kar liye uski history alag ho jaati hai. Yahi golden rule hai: shared commits ko rebase mat karo.</li>\n<li>Team ki aam aadat: apni branch ko main par rebase karke current rakho, phir PR se main mein merge (ya squash) karo.</li>\n<li>Follow-up: \"Agar kisi ne shared branch rebase kar di to?\" Jisne pull kiya tha use apni local copy nayi history par reset ya rebase karni padti hai, jo takleef hai; revert use karo aur team mein rules tay karo.</li>\n</ul>"
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
        en: "<ul>\n<li><code>git revert &lt;id&gt;</code> works on any commit; for a merge commit add <code>-m 1</code> to pick the mainline parent. Note that after reverting a merge, merging the same branch again later needs the revert itself to be reverted first.</li>\n<li><code>reset --soft</code> keeps changes staged, <code>--mixed</code> (default) keeps them unstaged, <code>--hard</code> discards them.</li>\n<li>Follow-up: \"I reset and pushed by mistake.\" Find the old id with <code>git reflog</code> and restore it locally; to fix the remote, either add a <code>git revert</code> commit or, if the team agrees, a coordinated <code>--force-with-lease</code> push. Avoid force-pushing a shared branch on your own.</li>\n</ul>",
        hi: "<ul>\n<li><code>git revert &lt;id&gt;</code> किसी भी commit पर चलता है; merge commit के लिए mainline parent चुनने को <code>-m 1</code> जोड़ो। ध्यान रहे, merge revert करने के बाद वही branch दोबारा merge करनी हो तो पहले उस revert को ही revert करना पड़ता है।</li>\n<li><code>reset --soft</code> changes को staged रखता है, <code>--mixed</code> (default) unstaged रखता है, <code>--hard</code> उन्हें फेंक देता है।</li>\n<li>Follow-up: \"मैंने reset करके गलती से push कर दिया।\" <code>git reflog</code> से पुराना id ढूँढकर local में restore करो; remote ठीक करने के लिए या तो <code>git revert</code> commit जोड़ो या team सहमत हो तो coordinated <code>--force-with-lease</code> push करो। Shared branch को अकेले force-push मत करो।</li>\n</ul>",
        hg: "<ul>\n<li><code>git revert &lt;id&gt;</code> kisi bhi commit par chalta hai; merge commit ke liye mainline parent chunne ko <code>-m 1</code> jodo. Dhyaan rahe, merge revert karne ke baad wahi branch dobara merge karni ho to pehle us revert ko hi revert karna padta hai.</li>\n<li><code>reset --soft</code> changes ko staged rakhta hai, <code>--mixed</code> (default) unstaged rakhta hai, <code>--hard</code> unhe phenk deta hai.</li>\n<li>Follow-up: \"Maine reset karke galti se push kar diya.\" <code>git reflog</code> se purana id dhoondkar local mein restore karo; remote theek karne ke liye ya to <code>git revert</code> commit jodo ya team sehmat ho to coordinated <code>--force-with-lease</code> push karo. Shared branch ko akele force-push mat karo.</li>\n</ul>"
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
        en: "<ul>\n<li>Trunk-based needs: fast CI, solid tests, feature flags for unfinished work, and a team that merges small and often. Long-lived branches mean big painful merges and late feedback.</li>\n<li>GitFlow fits packaged products with versions to maintain; its cost is ceremony and slow integration.</li>\n<li>TL angle: state the team's context (cadence, test maturity, hosting), pick one, write the rules down, and revisit when metrics (lead time, change fail rate) say it hurts.</li>\n<li>Follow-up: \"How do you hide unfinished work?\" Feature flags, with a plan to remove the flag after rollout so old flags do not pile up.</li>\n</ul>",
        hi: "<ul>\n<li>Trunk-based को चाहिए: fast CI, मज़बूत tests, अधूरे काम के लिए feature flags, और ऐसी team जो छोटा और बार-बार merge करे। लंबी branches का मतलब बड़े दर्दनाक merges और देर से feedback।</li>\n<li>GitFlow उन packaged products में फिट है जिनके versions maintain करने हैं; इसकी कीमत ceremony और धीमा integration है।</li>\n<li>TL angle: team का context बताओ (cadence, test maturity, hosting), एक चुनो, rules लिख दो, और जब metrics (lead time, change fail rate) बताएँ कि तकलीफ़ है तब दोबारा देखो।</li>\n<li>Follow-up: \"अधूरा काम कैसे छिपाते हो?\" Feature flags से, और rollout के बाद flag हटाने के plan के साथ ताकि पुराने flags जमा न हों।</li>\n</ul>",
        hg: "<ul>\n<li>Trunk-based ko chahiye: fast CI, majboot tests, adhoore kaam ke liye feature flags, aur aisi team jo chhota aur baar-baar merge kare. Lambi branches ka matlab bade dardnaak merges aur der se feedback.</li>\n<li>GitFlow un packaged products mein fit hai jinke versions maintain karne hain; iski keemat ceremony aur dheema integration hai.</li>\n<li>TL angle: team ka context batao (cadence, test maturity, hosting), ek chuno, rules likh do, aur jab metrics (lead time, change fail rate) batayein ki takleef hai tab dobara dekho.</li>\n<li>Follow-up: \"Adhoora kaam kaise chhupate ho?\" Feature flags se, aur rollout ke baad flag hatane ke plan ke saath taaki purane flags jama na hon.</li>\n</ul>"
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
        en: "<ul>\n<li>Let linters, formatters and the build catch style and compile problems; reviewers spend attention on logic, edge cases, security, performance, naming and whether tests would catch a regression.</li>\n<li>Rotate reviewers, use <code>CODEOWNERS</code> for risky areas, set a team expectation for review turnaround (for example within one working day) so PRs do not wait.</li>\n<li>Tone: ask questions, give the reason, offer an alternative, use \"we\" language. Juniors learn from the review, so explain, do not just correct.</li>\n<li>Follow-up: \"A big PR arrives, what now?\" Ask to split it, or review in a call with the author; for urgent cases agree on a risk-focused review and follow up.</li>\n</ul>",
        hi: "<ul>\n<li>Style और compile problems linters, formatters और build पकड़ें; reviewers का ध्यान logic, edge cases, security, performance, naming पर लगे और इस पर कि tests regression पकड़ेंगे या नहीं।</li>\n<li>Reviewers rotate करो, risky areas के लिए <code>CODEOWNERS</code> लगाओ, review turnaround की team expectation तय करो (जैसे एक working day में) ताकि PRs इंतज़ार न करें।</li>\n<li>Tone: सवाल पूछो, reason दो, alternative सुझाओ, \"हम\" वाली भाषा रखो। Juniors review से सीखते हैं, इसलिए समझाओ, सिर्फ़ ठीक मत करो।</li>\n<li>Follow-up: \"बड़ा PR आ गया तो?\" Split करने को कहो, या author के साथ call पर review करो; urgent case में risk-focused review पर सहमत होकर बाद में follow up करो।</li>\n</ul>",
        hg: "<ul>\n<li>Style aur compile problems linters, formatters aur build pakdein; reviewers ka dhyaan logic, edge cases, security, performance, naming par lage aur is par ki tests regression pakdenge ya nahi.</li>\n<li>Reviewers rotate karo, risky areas ke liye <code>CODEOWNERS</code> lagao, review turnaround ki team expectation tay karo (jaise ek working day mein) taaki PRs intezaar na karein.</li>\n<li>Tone: sawaal poocho, reason do, alternative sujhao, \"hum\" wali bhasha rakho. Juniors review se seekhte hain, isliye samjhao, sirf theek mat karo.</li>\n<li>Follow-up: \"Bada PR aa gaya to?\" Split karne ko kaho, ya author ke saath call par review karo; urgent case mein risk-focused review par sehmat hokar baad mein follow up karo.</li>\n</ul>"
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
        en: "<ul>\n<li>Stages run in order unless you use <code>dependsOn</code>; independent stages and jobs can run in parallel. Each job gets its own agent and a fresh workspace, so share files through <b>artifacts</b>.</li>\n<li>A simple pipeline can skip <code>stages</code> and <code>jobs</code> and list only <code>steps</code>; the structure is added when you need it.</li>\n<li><code>trigger</code> controls CI on pushes, <code>pr</code> controls PR validation for GitHub and Bitbucket repos (Azure Repos Git uses a Build validation branch policy), and <code>condition</code> can skip a stage (for example deploy only from main).</li>\n<li>Follow-up: \"Classic release pipelines vs YAML?\" YAML lives in the repo, is reviewed like code, and covers build and deploy; new work should be YAML.</li>\n</ul>",
        hi: "<ul>\n<li><code>dependsOn</code> न हो तो stages order में चलते हैं; independent stages और jobs parallel चल सकते हैं। हर job को अपना agent और fresh workspace मिलता है, इसलिए files <b>artifacts</b> से share करो।</li>\n<li>Simple pipeline <code>stages</code> और <code>jobs</code> छोड़कर सिर्फ़ <code>steps</code> लिख सकती है; structure तब जोड़ो जब ज़रूरत हो।</li>\n<li><code>trigger</code> push पर CI तय करता है, <code>pr</code> GitHub और Bitbucket repos में PR validation तय करता है (Azure Repos Git में Build validation branch policy), और <code>condition</code> किसी stage को skip कर सकती है (जैसे सिर्फ़ main से deploy)।</li>\n<li>Follow-up: \"Classic release pipelines बनाम YAML?\" YAML repo में रहता है, code की तरह review होता है, और build व deploy दोनों cover करता है; नया काम YAML में हो।</li>\n</ul>",
        hg: "<ul>\n<li><code>dependsOn</code> na ho to stages order mein chalte hain; independent stages aur jobs parallel chal sakte hain. Har job ko apna agent aur fresh workspace milta hai, isliye files <b>artifacts</b> se share karo.</li>\n<li>Simple pipeline <code>stages</code> aur <code>jobs</code> chhodkar sirf <code>steps</code> likh sakti hai; structure tab jodo jab zaroorat ho.</li>\n<li><code>trigger</code> push par CI tay karta hai, <code>pr</code> GitHub aur Bitbucket repos mein PR validation tay karta hai (Azure Repos Git mein Build validation branch policy), aur <code>condition</code> kisi stage ko skip kar sakti hai (jaise sirf main se deploy).</li>\n<li>Follow-up: \"Classic release pipelines vs YAML?\" YAML repo mein rehta hai, code ki tarah review hota hai, aur build aur deploy dono cover karta hai; naya kaam YAML mein ho.</li>\n</ul>"
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
        en: "<ul>\n<li>Class and object is a fair comparison: one image, many containers. Containers share the host kernel, so they start faster and are lighter than virtual machines (which carry a full guest OS).</li>\n<li>Data written inside a container is lost when it is removed; keep state in volumes or external services.</li>\n<li>Follow-up: \"Why containers for .NET?\" The same image runs on a laptop, test and prod, which removes \"works on my machine\" and gives a clean unit to scale and roll back.</li>\n</ul>",
        hi: "<ul>\n<li>Class और object की तुलना ठीक है: एक image, कई containers। Containers host kernel share करते हैं, इसलिए virtual machines (जिनमें पूरा guest OS होता है) से तेज़ शुरू होते हैं और हल्के हैं।</li>\n<li>Container के अंदर लिखा data container हटने पर चला जाता है; state volumes या external services में रखो।</li>\n<li>Follow-up: \"Containers .NET के लिए क्यों?\" वही image laptop, test और prod पर चलती है, जिससे \"मेरी machine पर चलता है\" खत्म होता है और scale व rollback के लिए साफ़ unit मिलता है।</li>\n</ul>",
        hg: "<ul>\n<li>Class aur object ki tulna theek hai: ek image, kai containers. Containers host kernel share karte hain, isliye virtual machines (jinmein poora guest OS hota hai) se tez shuru hote hain aur halke hain.</li>\n<li>Container ke andar likha data container hatne par chala jaata hai; state volumes ya external services mein rakho.</li>\n<li>Follow-up: \"Containers .NET ke liye kyun?\" Wahi image laptop, test aur prod par chalti hai, jisse \"meri machine par chalta hai\" khatam hota hai aur scale aur rollback ke liye saaf unit milta hai.</li>\n</ul>"
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
        en: "<ul>\n<li>The build stage keeps the SDK, source and build cache; none of it reaches the final image. Copy the <code>.csproj</code> and restore before copying source so the restore layer stays cached.</li>\n<li>Pick the runtime image that matches your app: <code>aspnet</code> for web apps, <code>runtime</code> for console or worker apps.</li>\n<li>Follow-up: \"How do you make it even smaller and safer?\" A chiseled image, a non-root user, and a <code>.dockerignore</code>.</li>\n</ul>",
        hi: "<ul>\n<li>Build stage SDK, source और build cache रखता है; इनमें से कुछ भी final image तक नहीं पहुँचता। Source copy करने से पहले <code>.csproj</code> copy करके restore करो ताकि restore layer cached रहे।</li>\n<li>अपनी app से मेल खाती runtime image चुनो: web apps के लिए <code>aspnet</code>, console या worker apps के लिए <code>runtime</code>।</li>\n<li>Follow-up: \"और छोटा और safe कैसे करोगे?\" Chiseled image, non-root user और <code>.dockerignore</code>।</li>\n</ul>",
        hg: "<ul>\n<li>Build stage SDK, source aur build cache rakhta hai; inmein se kuch bhi final image tak nahi pahunchta. Source copy karne se pehle <code>.csproj</code> copy karke restore karo taaki restore layer cached rahe.</li>\n<li>Apni app se mel khaati runtime image chuno: web apps ke liye <code>aspnet</code>, console ya worker apps ke liye <code>runtime</code>.</li>\n<li>Follow-up: \"Aur chhota aur safe kaise karoge?\" Chiseled image, non-root user aur <code>.dockerignore</code>.</li>\n</ul>"
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
        en: "<ul>\n<li>Rebuilding per environment can pick up different packages or compiler output, so prod would run something nobody tested. One artifact (or one image with a version tag) removes that risk.</li>\n<li>Configuration comes from the environment at deploy or run time: app settings, environment variables, Key Vault (Day 20), never baked into the artifact (Day 12).</li>\n<li>Follow-up: \"How do you know which build is in prod?\" Version stamp, Git tag, build number, and the deployment history on the environment.</li>\n</ul>",
        hi: "<ul>\n<li>हर environment के लिए rebuild करने पर अलग packages या compiler output आ सकता है, यानी prod पर वह चलेगा जिसे किसी ने test नहीं किया। एक artifact (या version tag वाली एक image) यह risk हटाता है।</li>\n<li>Configuration deploy या run time पर environment से आती है: app settings, environment variables, Key Vault (Day 20), artifact में कभी baked नहीं (Day 12)।</li>\n<li>Follow-up: \"prod में कौन-सा build है कैसे पता चलता है?\" Version stamp, Git tag, build number, और environment की deployment history से।</li>\n</ul>",
        hg: "<ul>\n<li>Har environment ke liye rebuild karne par alag packages ya compiler output aa sakta hai, yaani prod par woh chalega jise kisi ne test nahi kiya. Ek artifact (ya version tag wali ek image) yeh risk hataata hai.</li>\n<li>Configuration deploy ya run time par environment se aati hai: app settings, environment variables, Key Vault (Day 20), artifact mein kabhi baked nahi (Day 12).</li>\n<li>Follow-up: \"prod mein kaun-sa build hai kaise pata chalta hai?\" Version stamp, Git tag, build number, aur environment ki deployment history se.</li>\n</ul>"
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
        en: "<ul>\n<li>Fast-forward is possible only when main has not moved since the branch started; <code>--no-ff</code> forces a merge commit anyway so the branch stays visible. Puzzle 2 counts the commits for each.</li>\n<li>Squash gives a tidy main (one commit per PR, easy to revert) but you lose the step-by-step history and <code>git blame</code> points at the squash commit.</li>\n<li>Azure Repos and GitHub let you restrict which merge types a branch allows; teams usually pick one.</li>\n</ul>",
        hi: "<ul>\n<li>Fast-forward तभी possible है जब branch शुरू होने के बाद main आगे न बढ़ा हो; <code>--no-ff</code> फिर भी merge commit बनवाता है ताकि branch दिखती रहे। Puzzle 2 हर एक के commits गिनता है।</li>\n<li>Squash से main साफ़ रहता है (हर PR का एक commit, revert आसान) पर step-by-step history चली जाती है और <code>git blame</code> squash commit की तरफ़ इशारा करता है।</li>\n<li>Azure Repos और GitHub में तय कर सकते हो कि branch कौन-से merge types allow करे; teams आमतौर पर एक चुनती हैं।</li>\n</ul>",
        hg: "<ul>\n<li>Fast-forward tabhi possible hai jab branch shuru hone ke baad main aage na badha ho; <code>--no-ff</code> phir bhi merge commit banwata hai taaki branch dikhti rahe. Puzzle 2 har ek ke commits ginta hai.</li>\n<li>Squash se main saaf rehta hai (har PR ka ek commit, revert aasaan) par step-by-step history chali jaati hai aur <code>git blame</code> squash commit ki taraf ishara karta hai.</li>\n<li>Azure Repos aur GitHub mein tay kar sakte ho ki branch kaun-se merge types allow kare; teams aamtaur par ek chunti hain.</li>\n</ul>"
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
        en: "<ul>\n<li>The copy has a different id and can conflict. Overusing cherry-pick makes branches drift, since the same change exists as two commits.</li>\n<li>Reflog is local to your clone and entries expire (defaults: about 90 days for reachable commits and 30 for unreachable). It is not a backup of the remote.</li>\n<li>Follow-up: \"You did <code>reset --hard</code> and lost work.\" <code>git reflog</code>, find the id before the reset, <code>git reset --hard &lt;id&gt;</code> or create a branch there. Work that was never committed is not recoverable this way.</li>\n</ul>",
        hi: "<ul>\n<li>Copy का id अलग होता है और conflict आ सकता है। Cherry-pick का ज़्यादा use branches को अलग-अलग बहा देता है, क्योंकि वही बदलाव दो commits बनकर रहता है।</li>\n<li>Reflog तुम्हारे clone में local है और entries expire होती हैं (defaults: reachable commits के लिए लगभग 90 दिन, unreachable के लिए 30)। यह remote का backup नहीं है।</li>\n<li>Follow-up: \"तुमने <code>reset --hard</code> किया और काम खो गया।\" <code>git reflog</code>, reset से पहले का id ढूँढो, <code>git reset --hard &lt;id&gt;</code> या वहाँ branch बनाओ। जो काम कभी commit ही नहीं हुआ वह इस तरह वापस नहीं आता।</li>\n</ul>",
        hg: "<ul>\n<li>Copy ka id alag hota hai aur conflict aa sakta hai. Cherry-pick ka zyada use branches ko alag-alag baha deta hai, kyunki wahi badlaav do commits bankar rehta hai.</li>\n<li>Reflog tumhare clone mein local hai aur entries expire hoti hain (defaults: reachable commits ke liye lagbhag 90 din, unreachable ke liye 30). Yeh remote ka backup nahi hai.</li>\n<li>Follow-up: \"Tumne <code>reset --hard</code> kiya aur kaam kho gaya.\" <code>git reflog</code>, reset se pehle ka id dhoondo, <code>git reset --hard &lt;id&gt;</code> ya wahan branch banao. Jo kaam kabhi commit hi nahi hua woh is tarah wapas nahi aata.</li>\n</ul>"
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
        en: "<ul>\n<li>Azure Repos: <b>branch policies</b> (minimum reviewers, build validation, comment resolution, linked work items, merge types, automatic reviewers by path). GitHub: <b>branch protection rules or rulesets</b> plus <code>CODEOWNERS</code>.</li>\n<li>Require that new pushes reset approvals when the code changes materially, and consider requiring the author not to approve their own PR.</li>\n<li>Do not make rules so heavy that people work around them; keep emergency access with an audit trail.</li>\n<li>Follow-up: \"What about hotfixes at 2 a.m.?\" A documented fast path (reduced reviewers, post-hoc review) is better than disabling the policy.</li>\n</ul>",
        hi: "<ul>\n<li>Azure Repos: <b>branch policies</b> (minimum reviewers, build validation, comment resolution, linked work items, merge types, path के हिसाब से automatic reviewers)। GitHub: <b>branch protection rules या rulesets</b> plus <code>CODEOWNERS</code>।</li>\n<li>माँगो कि code में बड़ा बदलाव होने पर नए push से approvals reset हों, और सोचो कि author अपने PR को खुद approve न कर सके।</li>\n<li>Rules इतने भारी मत करो कि लोग उनके आसपास से निकलने लगें; emergency access audit trail के साथ रखो।</li>\n<li>Follow-up: \"रात 2 बजे के hotfixes?\" Policy बंद करने से बेहतर है documented fast path (कम reviewers, बाद में review)।</li>\n</ul>",
        hg: "<ul>\n<li>Azure Repos: <b>branch policies</b> (minimum reviewers, build validation, comment resolution, linked work items, merge types, path ke hisaab se automatic reviewers). GitHub: <b>branch protection rules ya rulesets</b> plus <code>CODEOWNERS</code>.</li>\n<li>Maango ki code mein bada badlaav hone par naye push se approvals reset hon, aur socho ki author apne PR ko khud approve na kar sake.</li>\n<li>Rules itne bhaari mat karo ki log unke aaspaas se nikalne lagein; emergency access audit trail ke saath rakho.</li>\n<li>Follow-up: \"Raat 2 baje ke hotfixes?\" Policy band karne se behtar hai documented fast path (kam reviewers, baad mein review).</li>\n</ul>"
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
        en: "<ul>\n<li>Hosted: nothing to patch, clean machine each time, but limited customization, parallel-job limits and no direct access to private networks (the middle options are Managed DevOps Pools, which can join your VNet, or scale set agents). Check current limits and pricing in the docs.</li>\n<li>Self-hosted: your VMs or containers run the agent software, so you can reach private endpoints (a database in a VNet), keep caches between runs, and pick hardware. You patch, secure and scale them, and a shared long-lived machine can leak state between builds.</li>\n<li>Follow-up: \"Security concern?\" Do not let untrusted PRs (for example from forks) run on self-hosted agents that can reach internal systems.</li>\n</ul>",
        hi: "<ul>\n<li>Hosted: patch करने को कुछ नहीं, हर बार साफ़ machine, पर customization सीमित, parallel-job limits, और private networks तक सीधा access नहीं (बीच के options हैं Managed DevOps Pools, जो तुम्हारे VNet से जुड़ सकते हैं, या scale set agents)। Current limits और pricing docs में देखो।</li>\n<li>Self-hosted: तुम्हारे VMs या containers agent software चलाते हैं, इसलिए private endpoints तक पहुँच सकते हो (VNet का database), runs के बीच caches रख सकते हो, और hardware चुन सकते हो। Patch, secure और scale तुम करते हो, और shared लंबी-उम्र वाली machine builds के बीच state leak कर सकती है।</li>\n<li>Follow-up: \"Security concern?\" Untrusted PRs (जैसे forks से) को ऐसे self-hosted agents पर मत चलने दो जो internal systems तक पहुँच सकते हैं।</li>\n</ul>",
        hg: "<ul>\n<li>Hosted: patch karne ko kuch nahi, har baar saaf machine, par customization seemit, parallel-job limits, aur private networks tak seedha access nahi (beech ke options hain Managed DevOps Pools, jo tumhare VNet se jud sakte hain, ya scale set agents). Current limits aur pricing docs mein dekho.</li>\n<li>Self-hosted: tumhare VMs ya containers agent software chalate hain, isliye private endpoints tak pahunch sakte ho (VNet ka database), runs ke beech caches rakh sakte ho, aur hardware chun sakte ho. Patch, secure aur scale tum karte ho, aur shared lambi-umar wali machine builds ke beech state leak kar sakti hai.</li>\n<li>Follow-up: \"Security concern?\" Untrusted PRs (jaise forks se) ko aise self-hosted agents par mat chalne do jo internal systems tak pahunch sakte hain.</li>\n</ul>"
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
        en: "<ul>\n<li>Azure Pipelines masks secret variable values in logs, but masking is best-effort; never print them or pass them in a way scripts could echo. Secret variables are not given to scripts automatically; map them with <code>env:</code>.</li>\n<li>Limit who can edit the pipeline and which pipelines may use a service connection or variable group (approvals and checks on those resources).</li>\n<li>Prefer workload identity or managed identity over long-lived client secrets; rotate the ones that remain (Day 20). Add a secret scanner to CI.</li>\n<li>Follow-up: \"A secret was committed.\" Treat it as leaked: rotate it first, then clean history if needed.</li>\n</ul>",
        hi: "<ul>\n<li>Azure Pipelines logs में secret variable values mask करता है, पर masking best-effort है; उन्हें print मत करो या ऐसे pass मत करो कि scripts echo कर दें। Secret variables scripts को अपने-आप नहीं मिलते; <code>env:</code> से map करो।</li>\n<li>सीमित करो कि कौन pipeline edit कर सकता है और कौन-से pipelines service connection या variable group use कर सकते हैं (उन resources पर approvals और checks)।</li>\n<li>Long-lived client secrets की जगह workload identity या managed identity prefer करो; जो बचें उन्हें rotate करो (Day 20)। CI में secret scanner जोड़ो।</li>\n<li>Follow-up: \"Secret commit हो गया।\" उसे leaked मानो: पहले rotate करो, फिर ज़रूरत हो तो history साफ़ करो।</li>\n</ul>",
        hg: "<ul>\n<li>Azure Pipelines logs mein secret variable values mask karta hai, par masking best-effort hai; unhe print mat karo ya aise pass mat karo ki scripts echo kar dein. Secret variables scripts ko apne-aap nahi milte; <code>env:</code> se map karo.</li>\n<li>Seemit karo ki kaun pipeline edit kar sakta hai aur kaun-se pipelines service connection ya variable group use kar sakte hain (un resources par approvals aur checks).</li>\n<li>Long-lived client secrets ki jagah workload identity ya managed identity prefer karo; jo bachein unhe rotate karo (Day 20). CI mein secret scanner jodo.</li>\n<li>Follow-up: \"Secret commit ho gaya.\" Use leaked mano: pehle rotate karo, phir zaroorat ho to history saaf karo.</li>\n</ul>"
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
        en: "<ul>\n<li>Include templates insert content (<code>- template: file.yml</code>); extends templates control the whole structure. Templates can live in another repo and be pinned to a tag.</li>\n<li>Template expressions are expanded when the pipeline is compiled, before it runs; runtime variables are not all available there. There are limits on template nesting and file count, so keep structure simple.</li>\n<li>Three syntaxes, three moments: <code>${{ }}</code> is compile time (template expansion and parameters); <code>$(var)</code> is a macro replaced just before a task runs; <code>$[ ]</code> is a runtime expression (conditions, and output variables from other jobs).</li>\n<li>Follow-up: \"Risks of shared templates?\" A change affects every consumer, so version them (pin by tag) and test changes on a sample pipeline.</li>\n</ul>",
        hi: "<ul>\n<li>Include templates content insert करते हैं (<code>- template: file.yml</code>); extends templates पूरा structure control करते हैं। Templates दूसरे repo में रह सकते हैं और tag पर pin हो सकते हैं।</li>\n<li>Template expressions pipeline compile होते समय expand होते हैं, चलने से पहले; runtime variables वहाँ सब available नहीं होते। Template nesting और file count पर limits हैं, इसलिए structure simple रखो।</li>\n<li>तीन syntaxes, तीन moments: <code>${{ }}</code> compile time है (template expansion और parameters); <code>$(var)</code> macro है जो task चलने से ठीक पहले replace होता है; <code>$[ ]</code> runtime expression है (conditions, और दूसरे jobs के output variables)।</li>\n<li>Follow-up: \"Shared templates के risks?\" एक बदलाव हर consumer पर असर करता है, इसलिए version दो (tag से pin) और बदलाव sample pipeline पर test करो।</li>\n</ul>",
        hg: "<ul>\n<li>Include templates content insert karte hain (<code>- template: file.yml</code>); extends templates poora structure control karte hain. Templates doosre repo mein reh sakte hain aur tag par pin ho sakte hain.</li>\n<li>Template expressions pipeline compile hote samay expand hote hain, chalne se pehle; runtime variables wahan sab available nahi hote. Template nesting aur file count par limits hain, isliye structure simple rakho.</li>\n<li>Teen syntaxes, teen moments: <code>${{ }}</code> compile time hai (template expansion aur parameters); <code>$(var)</code> macro hai jo task chalne se theek pehle replace hota hai; <code>$[ ]</code> runtime expression hai (conditions, aur dusre jobs ke output variables).</li>\n<li>Follow-up: \"Shared templates ke risks?\" Ek badlaav har consumer par asar karta hai, isliye version do (tag se pin) aur badlaav sample pipeline par test karo.</li>\n</ul>"
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
        en: "<ul>\n<li>Approvals and checks (approvers, branch control, business hours, an Azure Monitor check and others) are configured on the resource (environment, service connection), not in YAML. They run only for jobs that use that resource, so protect the service connection too, or a job can bypass them.</li>\n<li><code>runOnce</code> runs the hooks once; <code>rolling</code> updates VM targets in batches (<code>maxParallel</code>); <code>canary</code> goes through increments such as 10 then 20 percent while you watch health (the docs example targets Kubernetes).</li>\n<li>For App Service, the slot swap from Day 20 often replaces the need for these strategies.</li>\n<li>Follow-up: \"Where does rollback live?\" In the <code>on: failure</code> hook or by redeploying the previous artifact.</li>\n</ul>",
        hi: "<ul>\n<li>Approvals और checks (approvers, branch control, business hours, Azure Monitor check वगैरह) resource (environment, service connection) पर configure होते हैं, YAML में नहीं। वे सिर्फ़ उन jobs के लिए चलते हैं जो उस resource को use करते हैं, इसलिए service connection भी protect करो, वरना कोई job उन्हें bypass कर सकता है।</li>\n<li><code>runOnce</code> hooks एक बार चलाता है; <code>rolling</code> VM targets को batches में update करता है (<code>maxParallel</code>); <code>canary</code> increments से गुज़रता है जैसे 10 फिर 20 percent, जबकि तुम health देखते हो (docs का example Kubernetes पर है)।</li>\n<li>App Service के लिए Day 20 का slot swap अक्सर इन strategies की ज़रूरत हटा देता है।</li>\n<li>Follow-up: \"Rollback कहाँ रहता है?\" <code>on: failure</code> hook में, या पिछला artifact दोबारा deploy करके।</li>\n</ul>",
        hg: "<ul>\n<li>Approvals aur checks (approvers, branch control, business hours, Azure Monitor check waghera) resource (environment, service connection) par configure hote hain, YAML mein nahi. Woh sirf un jobs ke liye chalte hain jo us resource ko use karte hain, isliye service connection bhi protect karo, warna koi job unhe bypass kar sakta hai.</li>\n<li><code>runOnce</code> hooks ek baar chalata hai; <code>rolling</code> VM targets ko batches mein update karta hai (<code>maxParallel</code>); <code>canary</code> increments se guzarta hai jaise 10 phir 20 percent, jabki tum health dekhte ho (docs ka example Kubernetes par hai).</li>\n<li>App Service ke liye Day 20 ka slot swap aksar in strategies ki zaroorat hata deta hai.</li>\n<li>Follow-up: \"Rollback kahan rehta hai?\" <code>on: failure</code> hook mein, ya pichhla artifact dobara deploy karke.</li>\n</ul>"
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
        en: "<ul>\n<li>A changed layer invalidates every layer after it. Puzzle 3 simulates the bad layout (a code edit rebuilds restore) and the good layout (only the later layers rebuild).</li>\n<li><code>.dockerignore</code> matters for cache too: a changing file in the build context (like <code>bin</code> or a log) can invalidate <code>COPY . .</code> needlessly.</li>\n<li>CI agents are often fresh machines with an empty cache, so use the build system's cache support or a registry cache to benefit.</li>\n<li>Follow-up: \"Why combine commands in one <code>RUN</code>?\" Fewer layers and no leftovers; a file deleted in a later layer still exists in the earlier one.</li>\n</ul>",
        hi: "<ul>\n<li>बदली हुई layer अपने बाद की हर layer को invalidate करती है। Puzzle 3 bad layout (code edit से restore दोबारा चलता है) और good layout (सिर्फ़ बाद की layers rebuild) simulate करता है।</li>\n<li><code>.dockerignore</code> cache के लिए भी मायने रखता है: build context की बदलती file (जैसे <code>bin</code> या log) बेवजह <code>COPY . .</code> को invalidate कर सकती है।</li>\n<li>CI agents अक्सर fresh machines होते हैं जिनका cache खाली होता है, इसलिए फ़ायदे के लिए build system का cache support या registry cache use करो।</li>\n<li>Follow-up: \"commands को एक <code>RUN</code> में क्यों जोड़ते हैं?\" कम layers और कोई बचा हुआ कचरा नहीं; बाद की layer में delete की गई file पहले वाली layer में तब भी रहती है।</li>\n</ul>",
        hg: "<ul>\n<li>Badli hui layer apne baad ki har layer ko invalidate karti hai. Puzzle 3 bad layout (code edit se restore dobara chalta hai) aur good layout (sirf baad ki layers rebuild) simulate karta hai.</li>\n<li><code>.dockerignore</code> cache ke liye bhi matter karta hai: build context ki badalti file (jaise <code>bin</code> ya log) bewajah <code>COPY . .</code> ko invalidate kar sakti hai.</li>\n<li>CI agents aksar fresh machines hote hain jinka cache khaali hota hai, isliye faayde ke liye build system ka cache support ya registry cache use karo.</li>\n<li>Follow-up: \"commands ko ek <code>RUN</code> mein kyun jodte hain?\" Kam layers aur koi bacha hua kachra nahi; baad ki layer mein delete ki gayi file pehle wali layer mein tab bhi rehti hai.</li>\n</ul>"
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
        en: "<ul>\n<li>.NET 8 and later Microsoft images include a user <code>app</code> and an <code>APP_UID</code> variable; add <code>USER $APP_UID</code> in the Dockerfile (default tags still start as root). The default port is 8080, which non-root can bind.</li>\n<li>Chiseled images like <code>mcr.microsoft.com/dotnet/aspnet:10.0-noble-chiseled</code> have no shell, so you cannot <code>RUN</code> shell commands in the final stage or open a shell to debug; use logs, metrics, and a debug sidecar or a separate non-chiseled debug image if you must.</li>\n<li>Also: scan images for vulnerabilities, keep base images updated, and run with a read-only file system where the app allows.</li>\n<li>Follow-up: \"File permission errors after switching to non-root?\" Write only to paths the user can write (a mounted volume or <code>/tmp</code>).</li>\n</ul>",
        hi: "<ul>\n<li>.NET 8 और बाद के Microsoft images में user <code>app</code> और <code>APP_UID</code> variable होता है; Dockerfile में <code>USER $APP_UID</code> जोड़ो (default tags फिर भी root से शुरू होते हैं)। Default port 8080 है, जिसे non-root bind कर सकता है।</li>\n<li><code>mcr.microsoft.com/dotnet/aspnet:10.0-noble-chiseled</code> जैसी chiseled images में shell नहीं होता, इसलिए final stage में shell commands <code>RUN</code> नहीं कर सकते या debug के लिए shell नहीं खोल सकते; logs, metrics और debug sidecar या अलग non-chiseled debug image use करो।</li>\n<li>साथ ही: images को vulnerabilities के लिए scan करो, base images update रखो, और जहाँ app allow करे वहाँ read-only file system के साथ चलाओ।</li>\n<li>Follow-up: \"non-root पर जाने के बाद file permission errors?\" सिर्फ़ उन paths पर लिखो जहाँ user लिख सके (mounted volume या <code>/tmp</code>)।</li>\n</ul>",
        hg: "<ul>\n<li>.NET 8 aur baad ke Microsoft images mein user <code>app</code> aur <code>APP_UID</code> variable hota hai; Dockerfile mein <code>USER $APP_UID</code> jodo (default tags phir bhi root se shuru hote hain). Default port 8080 hai, jise non-root bind kar sakta hai.</li>\n<li><code>mcr.microsoft.com/dotnet/aspnet:10.0-noble-chiseled</code> jaisi chiseled images mein shell nahi hota, isliye final stage mein shell commands <code>RUN</code> nahi kar sakte ya debug ke liye shell nahi khol sakte; logs, metrics aur debug sidecar ya alag non-chiseled debug image use karo.</li>\n<li>Saath hi: images ko vulnerabilities ke liye scan karo, base images update rakho, aur jahan app allow kare wahan read-only file system ke saath chalao.</li>\n<li>Follow-up: \"non-root par jaane ke baad file permission errors?\" Sirf un paths par likho jahan user likh sake (mounted volume ya <code>/tmp</code>).</li>\n</ul>"
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
        en: "<ul>\n<li>This follows Day 5: avoid calling <code>Database.Migrate()</code> at app startup in production (several instances race, and the app needs schema-change rights).</li>\n<li><b>Expand and contract:</b> release 1 adds the new column (nullable), release 2 writes both and backfills, release 3 reads the new one, a later release drops the old one. Then a rollback of the app never hits a missing column.</li>\n<li>Take a backup or snapshot before risky changes; test the script on a production-like copy; destructive changes get extra review.</li>\n<li>Follow-up: \"Migration failed halfway?\" An idempotent script that is re-runnable plus transactions where the engine supports them; fix forward is often safer than undo.</li>\n</ul>",
        hi: "<ul>\n<li>यह Day 5 से जुड़ता है: production में app startup पर <code>Database.Migrate()</code> मत बुलाओ (कई instances race करते हैं, और app को schema-change rights चाहिए)।</li>\n<li><b>Expand and contract:</b> release 1 नया column जोड़ता है (nullable), release 2 दोनों में लिखता है और backfill करता है, release 3 नया वाला पढ़ता है, बाद की release पुराना हटाती है। फिर app का rollback कभी missing column से नहीं टकराता।</li>\n<li>Risky changes से पहले backup या snapshot लो; script को production जैसी copy पर test करो; destructive changes की extra review हो।</li>\n<li>Follow-up: \"Migration बीच में fail हो गया?\" Re-runnable idempotent script plus जहाँ engine support करे वहाँ transactions; undo से अक्सर fix forward ज़्यादा safe है।</li>\n</ul>",
        hg: "<ul>\n<li>Yeh Day 5 se judta hai: production mein app startup par <code>Database.Migrate()</code> mat bulao (kai instances race karte hain, aur app ko schema-change rights chahiye).</li>\n<li><b>Expand and contract:</b> release 1 naya column jodta hai (nullable), release 2 dono mein likhta hai aur backfill karta hai, release 3 naya wala padhta hai, baad ki release purana hatati hai. Phir app ka rollback kabhi missing column se nahi takraata.</li>\n<li>Risky changes se pehle backup ya snapshot lo; script ko production jaisi copy par test karo; destructive changes ki extra review ho.</li>\n<li>Follow-up: \"Migration beech mein fail ho gaya?\" Re-runnable idempotent script plus jahan engine support kare wahan transactions; undo se aksar fix forward zyada safe hai.</li>\n</ul>"
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
        en: "<ul>\n<li>Fastest to slowest: feature flag off (seconds), slot swap back (quick, Day 20), redeploy previous artifact (minutes), code revert and full pipeline (longest). This is why you keep old artifacts and build once.</li>\n<li>Database changes are the limit: a backward-compatible schema lets the old app version run against the new database.</li>\n<li>Afterwards: a short blameless post-mortem, add the missing test or alert. Track recovery time, since DORA's failed deployment recovery time measures exactly this.</li>\n<li>Follow-up: \"Who decides to roll back?\" Define it in advance: on-call engineer can roll back immediately without asking, and discuss after.</li>\n</ul>",
        hi: "<ul>\n<li>सबसे तेज़ से धीमे तक: feature flag off (seconds), slot swap वापस (quick, Day 20), पिछला artifact redeploy (minutes), code revert और पूरी pipeline (सबसे लंबा)। इसीलिए पुराने artifacts रखते हैं और build once करते हैं।</li>\n<li>Database changes सीमा हैं: backward-compatible schema से पुराना app version नए database पर चल सकता है।</li>\n<li>बाद में: छोटा blameless post-mortem, छूटा हुआ test या alert जोड़ो। Recovery time track करो, क्योंकि DORA का failed deployment recovery time यही नापता है।</li>\n<li>Follow-up: \"rollback कौन तय करता है?\" पहले से तय करो: on-call engineer बिना पूछे तुरंत rollback कर सकता है, और बात बाद में।</li>\n</ul>",
        hg: "<ul>\n<li>Sabse tez se dheeme tak: feature flag off (seconds), slot swap wapas (quick, Day 20), pichhla artifact redeploy (minutes), code revert aur poori pipeline (sabse lamba). Isiliye purane artifacts rakhte hain aur build once karte hain.</li>\n<li>Database changes seema hain: backward-compatible schema se purana app version naye database par chal sakta hai.</li>\n<li>Baad mein: chhota blameless post-mortem, chhoota hua test ya alert jodo. Recovery time track karo, kyunki DORA ka failed deployment recovery time yahi naapta hai.</li>\n<li>Follow-up: \"rollback kaun tay karta hai?\" Pehle se tay karo: on-call engineer bina poochhe turant rollback kar sakta hai, aur baat baad mein.</li>\n</ul>"
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
        en: "<ul>\n<li>Older material lists four metrics (the failed-recovery one was called time to restore service); the current DORA guide lists five, grouped as throughput and instability.</li>\n<li>Examples of use: long lead time points at slow reviews or manual approvals; high change fail rate points at weak tests; slow recovery points at poor monitoring or rollback.</li>\n<li>Measure per team and service, watch the trend, and pair speed metrics with stability metrics so one is not gamed at the cost of the other.</li>\n<li>Follow-up: \"Management wants a target number.\" Explain that targets on a metric invite gaming; use them as conversation starters about the delivery system.</li>\n</ul>",
        hi: "<ul>\n<li>पुराने material में चार metrics मिलते हैं (failed-recovery वाले को time to restore service कहते थे); current DORA guide पाँच बताती है, throughput और instability में बँटे हुए।</li>\n<li>Use के examples: लंबा lead time धीमी reviews या manual approvals की तरफ़ इशारा करता है; ऊँचा change fail rate कमज़ोर tests की तरफ़; धीमी recovery खराब monitoring या rollback की तरफ़।</li>\n<li>Team और service के हिसाब से नापो, trend देखो, और speed metrics को stability metrics के साथ रखो ताकि एक दूसरे की कीमत पर gaming न हो।</li>\n<li>Follow-up: \"Management को target number चाहिए।\" समझाओ कि metric पर target gaming बुलाता है; उन्हें delivery system पर बातचीत शुरू करने के लिए use करो।</li>\n</ul>",
        hg: "<ul>\n<li>Purane material mein chaar metrics milte hain (failed-recovery wale ko time to restore service kehte the); current DORA guide paanch batati hai, throughput aur instability mein banti hui.</li>\n<li>Use ke examples: lamba lead time dheemi reviews ya manual approvals ki taraf ishara karta hai; ooncha change fail rate kamzor tests ki taraf; dheemi recovery kharab monitoring ya rollback ki taraf.</li>\n<li>Team aur service ke hisaab se naapo, trend dekho, aur speed metrics ko stability metrics ke saath rakho taaki ek doosre ki keemat par gaming na ho.</li>\n<li>Follow-up: \"Management ko target number chahiye.\" Samjhao ki metric par target gaming bulata hai; unhe delivery system par baatcheet shuru karne ke liye use karo.</li>\n</ul>"
      }
    }
  ],
  puzzles: [
    {
      id: "semver-precedence",
      src: "// SemVer 2.0.0 precedence: compare major.minor.patch, then pre-release identifiers; build metadata is ignored.\nvar versions = new[]\n{\n    \"1.0.0\", \"1.0.0-rc.1\", \"1.0.0-beta.11\", \"1.0.0-alpha.beta\", \"1.0.0-beta\",\n    \"1.0.0-alpha.1\", \"1.0.0-alpha\", \"1.0.0-beta.2\", \"0.9.9+build.7\", \"1.0.0+exp.sha.5114f85\"\n};\nvar comparer = new SemVerComparer();\nvar sorted = versions.OrderBy(v => v, comparer).ToList();\nforeach (var v in sorted) Console.WriteLine(v);\nConsole.WriteLine($\"equal: {comparer.Compare(\"1.0.0\", \"1.0.0+exp.sha.5114f85\") == 0}\");\n\nclass SemVerComparer : IComparer<string>\n{\n    public int Compare(string? a, string? b)\n    {\n        var (coreA, preA) = Split(a!);\n        var (coreB, preB) = Split(b!);\n        for (var i = 0; i < 3; i++)\n        {\n            var c = coreA[i].CompareTo(coreB[i]);\n            if (c != 0) return c;\n        }\n        if (preA.Length == 0 && preB.Length == 0) return 0;\n        if (preA.Length == 0) return 1;   // a release is higher than any of its pre-releases\n        if (preB.Length == 0) return -1;\n        for (var i = 0; i < Math.Min(preA.Length, preB.Length); i++)\n        {\n            var c = CompareIdentifier(preA[i], preB[i]);\n            if (c != 0) return c;\n        }\n        return preA.Length.CompareTo(preB.Length); // more identifiers = higher when all earlier ones are equal\n    }\n\n    static int CompareIdentifier(string x, string y)\n    {\n        var xNum = int.TryParse(x, out var xn);\n        var yNum = int.TryParse(y, out var yn);\n        if (xNum && yNum) return xn.CompareTo(yn);\n        if (xNum) return -1;              // numeric identifiers are lower than alphanumeric ones\n        if (yNum) return 1;\n        return string.CompareOrdinal(x, y);\n    }\n\n    static (int[] Core, string[] Pre) Split(string v)\n    {\n        v = v.Split('+')[0];\n        var dash = v.IndexOf('-');\n        var core = (dash < 0 ? v : v[..dash]).Split('.').Select(int.Parse).ToArray();\n        var pre = dash < 0 ? Array.Empty<string>() : v[(dash + 1)..].Split('.');\n        return (core, pre);\n    }\n}",
      answer: "0.9.9+build.7\n1.0.0-alpha\n1.0.0-alpha.1\n1.0.0-alpha.beta\n1.0.0-beta\n1.0.0-beta.2\n1.0.0-beta.11\n1.0.0-rc.1\n1.0.0\n1.0.0+exp.sha.5114f85\nequal: True",
      explain: {
        en: "<p>SemVer precedence compares major, minor and patch as numbers. If those are equal, a version <b>with</b> a pre-release is lower than the plain release, so <code>1.0.0-rc.1</code> sorts before <code>1.0.0</code>. Pre-release identifiers are compared one by one: numbers compare numerically (<code>beta.2</code> before <code>beta.11</code>, which a plain string sort gets wrong), numeric identifiers are lower than text ones (<code>alpha.1</code> before <code>alpha.beta</code>), and when all shared identifiers are equal the longer list is higher (<code>alpha</code> before <code>alpha.1</code>). Build metadata after <code>+</code> is ignored, so <code>1.0.0</code> equals <code>1.0.0+exp.sha.5114f85</code>; the sort is stable, so those two keep their input order.</p>",
        hi: "<p>SemVer precedence major, minor और patch को numbers की तरह compare करता है। अगर ये बराबर हों तो pre-release <b>वाला</b> version सादे release से छोटा होता है, इसलिए <code>1.0.0-rc.1</code>, <code>1.0.0</code> से पहले आता है। Pre-release identifiers एक-एक करके compare होते हैं: numbers numerically compare होते हैं (<code>beta.2</code>, <code>beta.11</code> से पहले, जो सादा string sort गलत करता है), numeric identifiers text वालों से छोटे हैं (<code>alpha.1</code>, <code>alpha.beta</code> से पहले), और सारे common identifiers बराबर हों तो लंबी list बड़ी है (<code>alpha</code>, <code>alpha.1</code> से पहले)। <code>+</code> के बाद का build metadata ignore होता है, इसलिए <code>1.0.0</code>, <code>1.0.0+exp.sha.5114f85</code> के बराबर है; sort stable है, इसलिए वे दोनों input order में ही रहते हैं।</p>",
        hg: "<p>SemVer precedence major, minor aur patch ko numbers ki tarah compare karta hai. Agar ye barabar hon to pre-release <b>wala</b> version saade release se chhota hota hai, isliye <code>1.0.0-rc.1</code>, <code>1.0.0</code> se pehle aata hai. Pre-release identifiers ek-ek karke compare hote hain: numbers numerically compare hote hain (<code>beta.2</code>, <code>beta.11</code> se pehle, jo saada string sort galat karta hai), numeric identifiers text walon se chhote hain (<code>alpha.1</code>, <code>alpha.beta</code> se pehle), aur saare common identifiers barabar hon to lambi list badi hai (<code>alpha</code>, <code>alpha.1</code> se pehle). <code>+</code> ke baad ka build metadata ignore hota hai, isliye <code>1.0.0</code>, <code>1.0.0+exp.sha.5114f85</code> ke barabar hai; sort stable hai, isliye woh dono input order mein hi rehte hain.</p>"
      }
    },
    {
      id: "ff-vs-merge-vs-squash",
      src: "// How three ways of integrating a feature branch change history. Commit = id + parents.\nforeach (var strategy in new[] { \"fast-forward\", \"merge commit (--no-ff)\", \"squash\" })\n{\n    var commits = new Dictionary<string, string[]>\n    {\n        [\"A\"] = [], [\"B\"] = [\"A\"], [\"C\"] = [\"B\"],        // main: A <- B <- C\n        [\"F1\"] = [\"C\"], [\"F2\"] = [\"F1\"],                 // feature branched at C\n    };\n    var main = \"C\";\n    switch (strategy)\n    {\n        case \"fast-forward\":\n            main = \"F2\";                                 // main only moves its pointer\n            break;\n        case \"merge commit (--no-ff)\":\n            commits[\"M\"] = [\"C\", \"F2\"];                  // two parents\n            main = \"M\";\n            break;\n        case \"squash\":\n            commits[\"S\"] = [\"C\"];                        // one new commit, one parent\n            main = \"S\";\n            break;\n    }\n    var reachable = Walk(commits, main);\n    var merges = reachable.Count(id => commits[id].Length > 1);\n    Console.WriteLine($\"{strategy}: tip={main}, commits={reachable.Count}, merges={merges}, F1 in history={reachable.Contains(\"F1\")}\");\n}\n\nstatic HashSet<string> Walk(Dictionary<string, string[]> g, string tip)\n{\n    var seen = new HashSet<string>();\n    var stack = new Stack<string>([tip]);\n    while (stack.Count > 0)\n    {\n        var id = stack.Pop();\n        if (!seen.Add(id)) continue;\n        foreach (var p in g[id]) stack.Push(p);\n    }\n    return seen;\n}",
      answer: "fast-forward: tip=F2, commits=5, merges=0, F1 in history=True\nmerge commit (--no-ff): tip=M, commits=6, merges=1, F1 in history=True\nsquash: tip=S, commits=4, merges=0, F1 in history=False",
      explain: {
        en: "<p>Main starts as A, B, C and the feature branch adds F1, F2 on top of C. <b>Fast-forward</b> only moves main to F2: five commits, no merge commit. <b>Merge commit</b> adds M with two parents (C and F2): six commits, one merge. <b>Squash</b> adds one new commit S whose only parent is C; F1 and F2 are not reachable from main, so main has four commits and <code>F1 in history</code> is False. The walk counts what is reachable from the tip, which is what <code>git log</code> shows.</p>",
        hi: "<p>Main शुरू में A, B, C है और feature branch C के ऊपर F1, F2 जोड़ती है। <b>Fast-forward</b> बस main को F2 तक ले जाता है: पाँच commits, merge commit नहीं। <b>Merge commit</b> दो parents (C और F2) वाला M जोड़ता है: छह commits, एक merge। <b>Squash</b> एक नया commit S जोड़ता है जिसका अकेला parent C है; F1 और F2 main से reachable नहीं हैं, इसलिए main में चार commits हैं और <code>F1 in history</code> False है। Walk tip से reachable commits गिनता है, यही <code>git log</code> दिखाता है।</p>",
        hg: "<p>Main shuru mein A, B, C hai aur feature branch C ke upar F1, F2 jodti hai. <b>Fast-forward</b> bas main ko F2 tak le jaata hai: paanch commits, merge commit nahi. <b>Merge commit</b> do parents (C aur F2) wala M jodta hai: chhe commits, ek merge. <b>Squash</b> ek naya commit S jodta hai jiska akela parent C hai; F1 aur F2 main se reachable nahi hain, isliye main mein chaar commits hain aur <code>F1 in history</code> False hai. Walk tip se reachable commits ginta hai, yahi <code>git log</code> dikhata hai.</p>"
      }
    },
    {
      id: "docker-layer-cache",
      src: "// Docker layer cache model: a layer is reused only if its instruction, its inputs and ALL layers before it are unchanged.\nvar badLayout = new[]\n{\n    new Layer(\"FROM sdk:10.0\", [\"base\"]),\n    new Layer(\"COPY . .\", [\"App.csproj\", \"Program.cs\"]),\n    new Layer(\"RUN dotnet restore\", []),\n    new Layer(\"RUN dotnet publish\", []),\n};\nvar goodLayout = new[]\n{\n    new Layer(\"FROM sdk:10.0\", [\"base\"]),\n    new Layer(\"COPY App.csproj .\", [\"App.csproj\"]),\n    new Layer(\"RUN dotnet restore\", []),\n    new Layer(\"COPY . .\", [\"App.csproj\", \"Program.cs\"]),\n    new Layer(\"RUN dotnet publish\", []),\n};\n\nvar before = new Dictionary<string, int> { [\"base\"] = 1, [\"App.csproj\"] = 1, [\"Program.cs\"] = 1 };\nvar editCode = new Dictionary<string, int>(before) { [\"Program.cs\"] = 2 };\nvar editPackages = new Dictionary<string, int>(before) { [\"App.csproj\"] = 2 };\n\nReport(\"bad layout, edit Program.cs\", badLayout, before, editCode);\nReport(\"good layout, edit Program.cs\", goodLayout, before, editCode);\nReport(\"good layout, edit App.csproj\", goodLayout, before, editPackages);\n\nstatic void Report(string title, Layer[] layers, Dictionary<string, int> oldFiles, Dictionary<string, int> newFiles)\n{\n    var oldKeys = Keys(layers, oldFiles);\n    var newKeys = Keys(layers, newFiles);\n    var rebuilt = 0;\n    Console.WriteLine(title);\n    for (var i = 0; i < layers.Length; i++)\n    {\n        var cached = oldKeys[i] == newKeys[i];\n        if (!cached) rebuilt++;\n        Console.WriteLine($\"  {(cached ? \"CACHED \" : \"REBUILT\")} {layers[i].Instruction}\");\n    }\n    Console.WriteLine($\"  rebuilt={rebuilt}\");\n}\n\nstatic string[] Keys(Layer[] layers, Dictionary<string, int> files)\n{\n    var keys = new string[layers.Length];\n    var parent = \"\";\n    for (var i = 0; i < layers.Length; i++)\n    {\n        var inputs = string.Join(\",\", layers[i].Inputs.Select(f => $\"{f}@{files[f]}\"));\n        parent = $\"{parent}/{layers[i].Instruction}[{inputs}]\";   // the parent key is part of the key\n        keys[i] = parent;\n    }\n    return keys;\n}\n\nrecord Layer(string Instruction, string[] Inputs);",
      answer: "bad layout, edit Program.cs\n  CACHED  FROM sdk:10.0\n  REBUILT COPY . .\n  REBUILT RUN dotnet restore\n  REBUILT RUN dotnet publish\n  rebuilt=3\ngood layout, edit Program.cs\n  CACHED  FROM sdk:10.0\n  CACHED  COPY App.csproj .\n  CACHED  RUN dotnet restore\n  REBUILT COPY . .\n  REBUILT RUN dotnet publish\n  rebuilt=2\ngood layout, edit App.csproj\n  CACHED  FROM sdk:10.0\n  REBUILT COPY App.csproj .\n  REBUILT RUN dotnet restore\n  REBUILT COPY . .\n  REBUILT RUN dotnet publish\n  rebuilt=4",
      explain: {
        en: "<p>Each layer's cache key includes its instruction, its inputs and the key of the layer before it. In the bad layout <code>COPY . .</code> comes before restore, so editing <code>Program.cs</code> changes that layer and everything after it: three layers rebuild, including the slow restore. In the good layout only the project file is copied before restore, so a code edit leaves the first three layers cached and rebuilds just the last two. Editing <code>App.csproj</code> (a package change) legitimately invalidates everything after the base image, which is the correct behaviour.</p>",
        hi: "<p>हर layer की cache key में उसका instruction, उसके inputs और उससे पहले वाली layer की key शामिल है। Bad layout में <code>COPY . .</code> restore से पहले है, इसलिए <code>Program.cs</code> बदलने से वह layer और उसके बाद की सब बदल जाती हैं: तीन layers rebuild होती हैं, slow restore समेत। Good layout में restore से पहले सिर्फ़ project file copy होती है, इसलिए code edit पर पहली तीन layers cached रहती हैं और सिर्फ़ आख़िरी दो rebuild होती हैं। <code>App.csproj</code> बदलना (package change) base image के बाद की सब layers को सही में invalidate करता है, जो सही behaviour है।</p>",
        hg: "<p>Har layer ki cache key mein uska instruction, uske inputs aur usse pehle wali layer ki key shamil hai. Bad layout mein <code>COPY . .</code> restore se pehle hai, isliye <code>Program.cs</code> badalne se woh layer aur uske baad ki sab badal jaati hain: teen layers rebuild hoti hain, slow restore samet. Good layout mein restore se pehle sirf project file copy hoti hai, isliye code edit par pehli teen layers cached rehti hain aur sirf aakhri do rebuild hoti hain. <code>App.csproj</code> badalna (package change) base image ke baad ki sab layers ko sahi mein invalidate karta hai, jo sahi behaviour hai.</p>"
      }
    },
    {
      id: "stage-dependency-waves",
      src: "// Pipeline stages with dependsOn run in \"waves\"; stages in one wave can run in parallel. Ties keep declaration order.\nvar stages = new List<(string Name, string[] DependsOn)>\n{\n    (\"Build\", []),\n    (\"UnitTests\", [\"Build\"]),\n    (\"SecurityScan\", [\"Build\"]),\n    (\"DeployDev\", [\"UnitTests\"]),\n    (\"DeployTest\", [\"DeployDev\", \"SecurityScan\"]),\n    (\"DeployProd\", [\"DeployTest\"]),\n};\nPrint(stages);\n\nstages[0] = (\"Build\", [\"DeployProd\"]);   // now Build waits for the last stage\nPrint(stages);\n\nstatic void Print(List<(string Name, string[] DependsOn)> stages)\n{\n    var done = new HashSet<string>();\n    var wave = 1;\n    while (done.Count < stages.Count)\n    {\n        var ready = stages.Where(s => !done.Contains(s.Name) && s.DependsOn.All(done.Contains))\n                          .Select(s => s.Name).ToList();\n        if (ready.Count == 0)\n        {\n            var stuck = stages.Where(s => !done.Contains(s.Name)).Select(s => s.Name);\n            Console.WriteLine($\"cycle detected among: {string.Join(\", \", stuck)}\");\n            return;\n        }\n        Console.WriteLine($\"wave {wave++}: {string.Join(\" | \", ready)}\");\n        foreach (var r in ready) done.Add(r);\n    }\n}",
      answer: "wave 1: Build\nwave 2: UnitTests | SecurityScan\nwave 3: DeployDev\nwave 4: DeployTest\nwave 5: DeployProd\ncycle detected among: Build, UnitTests, SecurityScan, DeployDev, DeployTest, DeployProd",
      explain: {
        en: "<p>Each wave contains the stages whose <code>dependsOn</code> are all finished. <code>Build</code> goes first; <code>UnitTests</code> and <code>SecurityScan</code> both need only <code>Build</code>, so they can run in parallel in wave 2. <code>DeployTest</code> waits for both <code>DeployDev</code> and <code>SecurityScan</code>, then <code>DeployProd</code> follows. In the second run <code>Build</code> depends on <code>DeployProd</code>, which depends (through the chain) on <code>Build</code>: nothing is ready, so the loop reports a cycle. Azure Pipelines rejects such a pipeline when it validates the YAML. The wave model is a simplification: Azure starts a stage as soon as its own dependencies finish, without waiting for the rest of the wave.</p>",
        hi: "<p>हर wave में वे stages हैं जिनके <code>dependsOn</code> सब पूरे हो चुके हैं। <code>Build</code> पहले; <code>UnitTests</code> और <code>SecurityScan</code> दोनों को सिर्फ़ <code>Build</code> चाहिए, इसलिए वे wave 2 में parallel चल सकते हैं। <code>DeployTest</code> <code>DeployDev</code> और <code>SecurityScan</code> दोनों का इंतज़ार करता है, फिर <code>DeployProd</code>। दूसरे run में <code>Build</code>, <code>DeployProd</code> पर depend करता है, जो chain के ज़रिए <code>Build</code> पर depend करता है: कुछ ready नहीं, इसलिए loop cycle report करता है। Azure Pipelines ऐसी pipeline को YAML validate करते समय reject कर देता है। Wave model एक simplification है: Azure किसी stage को तभी शुरू कर देता है जब उसकी अपनी dependencies पूरी हों, बाकी wave का इंतज़ार नहीं करता।</p>",
        hg: "<p>Har wave mein woh stages hain jinke <code>dependsOn</code> sab poore ho chuke hain. <code>Build</code> pehle; <code>UnitTests</code> aur <code>SecurityScan</code> dono ko sirf <code>Build</code> chahiye, isliye woh wave 2 mein parallel chal sakte hain. <code>DeployTest</code> <code>DeployDev</code> aur <code>SecurityScan</code> dono ka intezaar karta hai, phir <code>DeployProd</code>. Doosre run mein <code>Build</code>, <code>DeployProd</code> par depend karta hai, jo chain ke zariye <code>Build</code> par depend karta hai: kuch ready nahi, isliye loop cycle report karta hai. Azure Pipelines aisi pipeline ko YAML validate karte samay reject kar deta hai. Wave model ek simplification hai: Azure kisi stage ko tabhi shuru kar deta hai jab uski apni dependencies poori hon, baaki wave ka intezaar nahi karta.</p>"
      }
    },
    {
      id: "stable-percentage-rollout",
      src: "// Percentage rollout: a stable hash of flag + user decides, so the same user always gets the same answer,\n// and raising the percentage only ever ADDS users (nobody flips back off).\nvar users = Enumerable.Range(1, 12).Select(i => $\"user-{i:00}\").ToList();\nforeach (var percent in new[] { 0, 25, 50, 100 })\n{\n    var on = users.Where(u => IsEnabled(\"new-checkout\", u, percent)).ToList();\n    Console.WriteLine($\"{percent,3}% -> {on.Count} on: {string.Join(\" \", on.Select(u => u[5..]))}\");\n}\n\nvar at25 = users.Where(u => IsEnabled(\"new-checkout\", u, 25)).ToHashSet();\nvar at50 = users.Where(u => IsEnabled(\"new-checkout\", u, 50)).ToHashSet();\nConsole.WriteLine($\"25% is subset of 50%: {at25.IsSubsetOf(at50)}\");\nConsole.WriteLine($\"other flag at 25%: {string.Join(\" \", users.Where(u => IsEnabled(\"dark-mode\", u, 25)).Select(u => u[5..]))}\");\n\nstatic bool IsEnabled(string flag, string userId, int percent) => Bucket(flag, userId) < percent;\n\nstatic int Bucket(string flag, string userId)\n{\n    // FNV-1a 32-bit: the same on every run and machine (string.GetHashCode is randomised per process).\n    uint hash = 2166136261;\n    foreach (var b in System.Text.Encoding.UTF8.GetBytes($\"{flag}:{userId}\"))\n    {\n        hash ^= b;\n        hash *= 16777619;\n    }\n    return (int)(hash % 100);\n}",
      answer: "  0% -> 0 on:\n 25% -> 5 on: 03 05 06 08 10\n 50% -> 7 on: 03 05 06 07 08 09 10\n100% -> 12 on: 01 02 03 04 05 06 07 08 09 10 11 12\n25% is subset of 50%: True\nother flag at 25%: 05",
      explain: {
        en: "<p>The bucket (0 to 99) comes from a hash of <code>flag:user</code>, so a user's bucket never changes between calls, servers or restarts. A user is enabled when their bucket is below the percentage. Going from 25 to 50 percent can only add users, so the 25 percent set is a subset of the 50 percent set: nobody sees the feature disappear. Including the flag name in the hash gives each flag its own, independent group (the other flag enables a different set). The hash is FNV-1a on purpose: <code>string.GetHashCode()</code> is randomised per process in .NET, which would reshuffle users on every restart. With only 12 users the counts are not exactly 25 and 50 percent; they converge on large populations.</p>",
        hi: "<p>Bucket (0 से 99) <code>flag:user</code> के hash से आता है, इसलिए user का bucket calls, servers या restarts के बीच कभी नहीं बदलता। User तब enabled होता है जब उसका bucket percentage से नीचे हो। 25 से 50 percent जाने पर सिर्फ़ users जुड़ सकते हैं, इसलिए 25 percent वाला set 50 percent वाले set का subset है: किसी को feature गायब होता नहीं दिखता। Hash में flag का नाम शामिल करने से हर flag को अपना independent group मिलता है (दूसरा flag अलग set enable करता है)। Hash जान-बूझकर FNV-1a है: .NET में <code>string.GetHashCode()</code> हर process में randomised होता है, जो हर restart पर users को फिर से बाँट देता। सिर्फ़ 12 users के साथ counts ठीक 25 और 50 percent नहीं होते; बड़ी population में वे उसके करीब आते हैं।</p>",
        hg: "<p>Bucket (0 se 99) <code>flag:user</code> ke hash se aata hai, isliye user ka bucket calls, servers ya restarts ke beech kabhi nahi badalta. User tab enabled hota hai jab uska bucket percentage se neeche ho. 25 se 50 percent jaane par sirf users jud sakte hain, isliye 25 percent wala set 50 percent wale set ka subset hai: kisi ko feature gayab hota nahi dikhta. Hash mein flag ka naam shamil karne se har flag ko apna independent group milta hai (doosra flag alag set enable karta hai). Hash jaan-boojhkar FNV-1a hai: .NET mein <code>string.GetHashCode()</code> har process mein randomised hota hai, jo har restart par users ko phir se baant deta. Sirf 12 users ke saath counts theek 25 aur 50 percent nahi hote; badi population mein woh uske kareeb aate hain.</p>"
      }
    },
    {
      id: "version-bump-and-build-number",
      src: "// Next version from commit messages (Conventional Commits style): breaking change -> major, feat -> minor, fix -> patch.\n// Also an Azure Pipelines style build number yyyyMMdd.r (r restarts at 1 each day).\nvar current = (Major: 1, Minor: 4, Patch: 2);\nvar batches = new[]\n{\n    new[] { \"fix: null check in cart\", \"docs: update readme\", \"fix: typo\" },\n    new[] { \"feat: coupon codes\", \"fix: rounding\", \"chore: bump packages\" },\n    new[] { \"feat!: remove v1 endpoints\", \"feat: add v2 endpoints\", \"fix: header\" },\n    new[] { \"docs: contributing guide\", \"chore: ci tweak\" },\n};\nforeach (var commits in batches)\n{\n    var bump = commits.Select(Classify).Max();\n    current = bump switch\n    {\n        Bump.Major => (current.Major + 1, 0, 0),\n        Bump.Minor => (current.Major, current.Minor + 1, 0),\n        Bump.Patch => (current.Major, current.Minor, current.Patch + 1),\n        _ => current,\n    };\n    Console.WriteLine($\"{bump,-5} -> {current.Major}.{current.Minor}.{current.Patch}\");\n}\n\nvar runs = new[] { \"2026-10-21\", \"2026-10-21\", \"2026-10-21\", \"2026-10-22\", \"2026-10-22\" };\nvar counters = new Dictionary<string, int>();\nforeach (var day in runs)\n{\n    counters[day] = counters.GetValueOrDefault(day) + 1;\n    Console.WriteLine($\"{day.Replace(\"-\", \"\")}.{counters[day]}\");\n}\n\nstatic Bump Classify(string message)\n{\n    var type = message.Split(':')[0];\n    if (type.EndsWith('!')) return Bump.Major;\n    return type switch { \"feat\" => Bump.Minor, \"fix\" => Bump.Patch, _ => Bump.None };\n}\n\nenum Bump { None, Patch, Minor, Major }",
      answer: "Patch -> 1.4.3\nMinor -> 1.5.0\nMajor -> 2.0.0\nNone  -> 2.0.0\n20261021.1\n20261021.2\n20261021.3\n20261022.1\n20261022.2",
      explain: {
        en: "<p>The highest-impact commit in a batch decides the bump: <code>fix</code> is a patch, <code>feat</code> is a minor, and <code>!</code> after the type marks a breaking change, a major. The first batch has only fixes (plus a docs commit that does not count), so 1.4.2 becomes 1.4.3. A minor resets the patch to 0 (1.5.0), a major resets minor and patch (2.0.0), and a batch with only docs and chores leaves the version alone (<code>None</code>). The build number <code>yyyyMMdd.r</code> restarts the revision counter on each new date: 21 Oct gets .1, .2, .3, then 22 Oct starts again at .1, because the counter is per day (a simple model of the idea). Azure Pipelines offers the same idea with <code>name: $(Date:yyyyMMdd)$(Rev:.r)</code>.</p>",
        hi: "<p>Batch में सबसे ज़्यादा असर वाला commit bump तय करता है: <code>fix</code> patch है, <code>feat</code> minor है, और type के बाद <code>!</code> breaking change यानी major दिखाता है। पहले batch में सिर्फ़ fixes हैं (plus एक docs commit जो गिना नहीं जाता), इसलिए 1.4.2 से 1.4.3। Minor patch को 0 कर देता है (1.5.0), major minor और patch दोनों reset करता है (2.0.0), और सिर्फ़ docs व chores वाला batch version को वैसा ही छोड़ता है (<code>None</code>)। Build number <code>yyyyMMdd.r</code> हर नई date पर revision counter restart करता है: 21 Oct को .1, .2, .3 मिलता है, फिर 22 Oct फिर से .1 से शुरू होता है, क्योंकि counter दिन के हिसाब से है (idea का एक simple model)। Azure Pipelines में यही idea <code>name: $(Date:yyyyMMdd)$(Rev:.r)</code> से मिलता है।</p>",
        hg: "<p>Batch mein sabse zyada asar wala commit bump tay karta hai: <code>fix</code> patch hai, <code>feat</code> minor hai, aur type ke baad <code>!</code> breaking change yaani major dikhata hai. Pehle batch mein sirf fixes hain (plus ek docs commit jo ginaa nahi jaata), isliye 1.4.2 se 1.4.3. Minor patch ko 0 kar deta hai (1.5.0), major minor aur patch dono reset karta hai (2.0.0), aur sirf docs va chores wala batch version ko waisa hi chhodta hai (<code>None</code>). Build number <code>yyyyMMdd.r</code> har nayi date par revision counter restart karta hai: 21 Oct ko .1, .2, .3 milta hai, phir 22 Oct phir se .1 se shuru hota hai, kyunki counter din ke hisaab se hai (idea ka ek simple model). Azure Pipelines mein yahi idea <code>name: $(Date:yyyyMMdd)$(Rev:.r)</code> se milta hai.</p>"
      }
    }
  ],
  revision: {
    en: [
      "<b>Commit</b> = snapshot with a parent link; <b>branch</b> = movable name for one commit; fast-forward moves a pointer, merge commit has two parents, squash makes one new commit.",
      "Rewrite only your own unshared commits (<code>rebase</code>, amend, soft reset); on shared branches use <code>git revert</code>; <code>reflog</code> finds lost commits.",
      "A <b>branch policy</b> enforces PR rules: minimum reviewers, build validation, resolved comments; on Azure Repos use Build validation, not <code>pr:</code>.",
      "<b>Pipeline YAML</b>: <code>trigger</code>, then stages, jobs and steps on an agent from a pool; publish ONE artifact (<code>drop</code>).",
      "<b>Multi-stage Dockerfile</b>: <code>sdk</code> builds, <code>aspnet</code> runs; copy <code>.csproj</code> and restore first for the cache; <code>USER $APP_UID</code>, port 8080.",
      "<b>Deployment job</b> targets an environment; approvals live on the environment, not in YAML; every stage downloads the same artifact.",
      "<b>SemVer</b> <code>MAJOR.MINOR.PATCH</code>: breaking, feature, fix; reset lower numbers; stamp version + commit id and tag the release.",
      "Trunk-based means short branches, frequent merges and feature flags; GitFlow suits scheduled, versioned releases.",
      "Approvals and checks live on the resource, so protect the service connection as well as the environment.",
      "Keep secrets in secret variables or Key Vault-linked groups, never in the repo or YAML.",
      "Apply database changes with idempotent scripts or bundles and keep them backward-compatible so rollback stays possible."
    ],
    meaning: {
      hi: [
        "Commit parent link वाला snapshot है; branch एक commit का खिसकने वाला नाम; fast-forward pointer खिसकाता है, merge commit के दो parents, squash एक नया commit",
        "Rewrite सिर्फ़ अपने unshared commits पर; shared branches पर git revert; reflog खोए commits ढूँढता है",
        "Branch policy PR के rules लागू करती है: minimum reviewers, build validation, resolved comments; Azure Repos पर Build validation, pr: नहीं",
        "Pipeline YAML: trigger, फिर pool के agent पर stages, jobs, steps; एक ही artifact (drop) publish करो",
        "Multi-stage Dockerfile: sdk build करती है, aspnet चलाती है; cache के लिए पहले .csproj और restore; USER $APP_UID, port 8080",
        "Deployment job environment को target करता है; approvals environment पर रहती हैं, YAML में नहीं; हर stage वही artifact लेता है",
        "SemVer MAJOR.MINOR.PATCH: breaking, feature, fix; छोटे numbers zero; version + commit id stamp करो और release tag करो",
        "Trunk-based यानी छोटी branches, बार-बार merge और feature flags; GitFlow scheduled, versioned releases के लिए।",
        "Approvals और checks resource पर रहते हैं, इसलिए environment के साथ service connection भी protect करो।",
        "Secrets को secret variables या Key Vault-linked groups में रखो, repo या YAML में कभी नहीं।",
        "Database changes idempotent scripts या bundles से लगाओ और उन्हें backward-compatible रखो ताकि rollback possible रहे।"
      ],
      hg: [
        "Commit parent link wala snapshot hai; branch ek commit ka khisakne wala naam; fast-forward pointer khiskata hai, merge commit ke do parents, squash ek naya commit",
        "Rewrite sirf apne unshared commits par; shared branches par git revert; reflog khoye commits dhoondhta hai",
        "Branch policy PR ke rules laagu karti hai: minimum reviewers, build validation, resolved comments; Azure Repos par Build validation, pr: nahi",
        "Pipeline YAML: trigger, phir pool ke agent par stages, jobs, steps; ek hi artifact (drop) publish karo",
        "Multi-stage Dockerfile: sdk build karti hai, aspnet chalati hai; cache ke liye pehle .csproj aur restore; USER $APP_UID, port 8080",
        "Deployment job environment ko target karta hai; approvals environment par rehti hain, YAML mein nahi; har stage wahi artifact leta hai",
        "SemVer MAJOR.MINOR.PATCH: breaking, feature, fix; chhote numbers zero; version + commit id stamp karo aur release tag karo",
        "Trunk-based yaani chhoti branches, baar-baar merge aur feature flags; GitFlow scheduled, versioned releases ke liye.",
        "Approvals aur checks resource par rehte hain, isliye environment ke saath service connection bhi protect karo.",
        "Secrets ko secret variables ya Key Vault-linked groups mein rakho, repo ya YAML mein kabhi nahi.",
        "Database changes idempotent scripts ya bundles se lagao aur unhe backward-compatible rakho taaki rollback possible rahe."
      ]
    }
  }
};
