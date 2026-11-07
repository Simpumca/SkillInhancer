// Day 25 — Testing for .NET Tech Leads, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 25,
  format: "lesson",
  title: {
    en: "Testing for .NET Tech Leads — test pyramid, xUnit, test doubles, WebApplicationFactory, Testcontainers, coverage, flaky tests, team strategy",
    hi: "Tech Leads के लिए Testing — test pyramid, xUnit, test doubles, WebApplicationFactory, Testcontainers, coverage, flaky tests, team strategy",
    hg: "Tech Leads ke liye Testing — test pyramid, xUnit, test doubles, WebApplicationFactory, Testcontainers, coverage, flaky tests, team strategy"
  },
  summary: {
    en: "<p>Day 25 shows how a Tech Lead tests the <b>customer-care CRM</b> in 6 short lessons: the test pyramid and first xUnit tests, test doubles (fake versus mock), an EF Core test on in-memory SQLite, an in-memory Web API test with TestServer, flaky tests with <code>FakeTimeProvider</code>, and a team strategy with categories, quarantine and checkable rules.</p><p>Testcontainers, <code>WebApplicationFactory</code>, Moq, xUnit v3 and coverage versus mutation testing are in the Deep Dive.</p>",
    hi: "<p>Day 25 में दिखता है कि Tech Lead 6 छोटे पाठों में <b>customer-care CRM</b> को कैसे test करता है: test pyramid और पहले xUnit tests, test doubles (fake बनाम mock), in-memory SQLite पर EF Core test, TestServer से in-memory Web API test, <code>FakeTimeProvider</code> के साथ flaky tests, और categories, quarantine व जाँचे जा सकने वाले rules वाली team strategy।</p><p>Testcontainers, <code>WebApplicationFactory</code>, Moq, xUnit v3 और coverage बनाम mutation testing Deep Dive में हैं।</p>",
    hg: "<p>Day 25 mein dikhta hai ki Tech Lead 6 chhote lessons mein <b>customer-care CRM</b> ko kaise test karta hai: test pyramid aur pehle xUnit tests, test doubles (fake banaam mock), in-memory SQLite par EF Core test, TestServer se in-memory Web API test, <code>FakeTimeProvider</code> ke saath flaky tests, aur categories, quarantine aur jaanche ja sakne wale rules wali team strategy.</p><p>Testcontainers, <code>WebApplicationFactory</code>, Moq, xUnit v3 aur coverage banaam mutation testing Deep Dive mein hain.</p>"
  },
  sections: [
    {
      id: "test-pyramid-xunit",
      depth: "short",
      title: {
        en: "Test pyramid and your first xUnit tests",
        hi: "Test pyramid और पहले xUnit tests",
        hg: "Test pyramid aur pehle xUnit tests"
      },
      lesson: {
        buildsOn: {
          en: "Days 1-13 built the CRM: <code>SupportTicket</code>, <code>INotifier</code>, <code>TicketService</code> and the Web API. Today we test that code. The Day 21 pipeline runs these tests on every pull request, so a red test stops a bad merge.",
          hi: "Days 1-13 में CRM बना: <code>SupportTicket</code>, <code>INotifier</code>, <code>TicketService</code> और Web API। आज उसी code को test करेंगे। Day 21 की pipeline हर pull request पर ये tests चलाती है, इसलिए red test गलत merge को रोक देता है।",
          hg: "Days 1-13 mein CRM bana: <code>SupportTicket</code>, <code>INotifier</code>, <code>TicketService</code> aur Web API. Aaj usi code ko test karenge. Day 21 ki pipeline har pull request par ye tests chalati hai, isliye red test galat merge ko rok deta hai."
        },
        what: {
          en: "<p>A <b>unit test</b> runs one piece of code and checks the result in three steps: <b>Arrange</b> (set up), <b>Act</b> (do one thing), <b>Assert</b> (check). In xUnit, <code>[Fact]</code> marks one test and <code>[Theory]</code> with <code>[InlineData]</code> runs one test with many rows.</p><p>xUnit makes a <b>new instance of the test class for every test</b>, so tests never share fields. The <b>test pyramid</b> says how many tests to keep: many unit tests, fewer integration tests, very few end-to-end tests.</p><p>In a real project <code>dotnet test</code> runs these methods from a test project that references <code>xunit.v3</code>. Here a tiny runner copies what xUnit does.</p>",
          hi: "<p><b>Unit test</b> code का एक हिस्सा चलाता है और तीन step में result जाँचता है: <b>Arrange</b> (तैयारी), <b>Act</b> (एक काम), <b>Assert</b> (जाँच)। xUnit में <code>[Fact]</code> एक test को mark करता है और <code>[Theory]</code> के साथ <code>[InlineData]</code> एक test को कई rows के साथ चलाता है।</p><p>xUnit <b>हर test के लिए test class का नया instance</b> बनाता है, इसलिए tests के बीच fields share नहीं होते। <b>Test pyramid</b> बताता है कि कितने tests रखने हैं: बहुत सारे unit tests, कम integration tests, बहुत कम end-to-end tests।</p><p>असली project में <code>dotnet test</code> इन methods को ऐसे test project से चलाता है जो <code>xunit.v3</code> package लेता है। यहाँ एक छोटा runner xUnit की नकल करता है।</p>",
          hg: "<p><b>Unit test</b> code ka ek hissa chalata hai aur teen step mein result jaanchta hai: <b>Arrange</b> (taiyaari), <b>Act</b> (ek kaam), <b>Assert</b> (jaanch). xUnit mein <code>[Fact]</code> ek test ko mark karta hai aur <code>[Theory]</code> ke saath <code>[InlineData]</code> ek test ko kai rows ke saath chalata hai.</p><p>xUnit <b>har test ke liye test class ka naya instance</b> banata hai, isliye tests ke beech fields share nahi hote. <b>Test pyramid</b> batata hai ki kitne tests rakhne hain: bahut saare unit tests, kam integration tests, bahut kam end-to-end tests.</p><p>Asli project mein <code>dotnet test</code> in methods ko aise test project se chalata hai jo <code>xunit.v3</code> package leta hai. Yahan ek chhota runner xUnit ki nakal karta hai.</p>"
        },
        why: {
          en: "<p>A unit test tells you in milliseconds if your edit broke something. Checking the whole CRM by hand takes minutes, so people skip it. Test each thing at the cheapest level that can catch the bug.</p>",
          hi: "<p>Unit test milliseconds में बता देता है कि आपके edit ने कुछ तोड़ा या नहीं। पूरा CRM हाथ से check करने में minutes लगते हैं, इसलिए लोग उसे छोड़ देते हैं। हर चीज़ उस सबसे सस्ते level पर test करो जहाँ bug पकड़ा जा सके।</p>",
          hg: "<p>Unit test milliseconds mein bata deta hai ki aapke edit ne kuch toda ya nahi. Poora CRM haath se check karne mein minutes lagte hain, isliye log use chhod dete hain. Har cheez us sabse sasste level par test karo jahan bug pakda ja sake.</p>"
        },
        analogy: {
          en: "<p>Think of a railway coach yard. A mechanic checks each bolt and brake pad on the spot (unit tests: many, fast). The rake then does a trial run on the track (integration tests). Only now and then is there a full trial with passengers (end-to-end: slow and costly).</p>",
          hi: "<p>Railway के coach yard की सोचो। Mechanic हर bolt और brake pad वहीं खड़े-खड़े जाँचता है (unit tests: बहुत सारे, तेज़)। फिर rake पटरी पर trial run करती है (integration tests)। कभी-कभार ही यात्रियों के साथ पूरा trial होता है (end-to-end: धीमा और महँगा)।</p>",
          hg: "<p>Railway ke coach yard ki socho. Mechanic har bolt aur brake pad wahin khade-khade jaanchta hai (unit tests: bahut saare, tez). Phir rake patri par trial run karti hai (integration tests). Kabhi-kabhaar hi yaatriyon ke saath poora trial hota hai (end-to-end: dheema aur mehnga).</p>"
        },
        focus: {
          caption: {
            en: "The test pyramid",
            hi: "Test pyramid का नक्शा",
            hg: "Test pyramid ka naksha"
          },
          lang: "text",
          src: "        /\\          few   end-to-end   whole system, slow, flaky\n       /  \\         some  integration  API + database, a few seconds\n      /____\\        many  unit         one rule, no I/O, milliseconds",
          check: "none"
        },
        lines: [
          {
            code: "var test = new TicketTests();",
            note: {
              en: "The runner makes a <b>new object for every test and every row</b>, exactly as xUnit does.",
              hi: "Runner <b>हर test और हर row के लिए नया object</b> बनाता है, ठीक xUnit की तरह।",
              hg: "Runner <b>har test aur har row ke liye naya object</b> banata hai, theek xUnit ki tarah."
            }
          },
          {
            code: "private readonly TicketService _service = new(new QuietNotifier());",
            note: {
              en: "A fresh service for every test. <code>QuietNotifier</code> sends nothing: a unit test must not send a real SMS, because that is slow and can fail for reasons unrelated to your code. Lesson 2 covers stand-ins.",
              hi: "हर test के लिए नई service। <code>QuietNotifier</code> कुछ भेजता नहीं: unit test को असली SMS नहीं भेजना चाहिए, क्योंकि वह धीमा है और आपके code से अलग वजहों से fail हो सकता है। Stand-ins पर पाठ 2 में बात होगी।",
              hg: "Har test ke liye nayi service. <code>QuietNotifier</code> kuch bhejta nahi: unit test ko asli SMS nahi bhejna chahiye, kyunki wo dheema hai aur aapke code se alag wajahon se fail ho sakta hai. Stand-ins par lesson 2 mein baat hogi."
            }
          },
          {
            code: "_service.Assign(ticket, \"Meena\");",
            note: {
              en: "<b>Act</b>: one action per test. The ticket above is <b>Arrange</b>; the two <code>Assert</code> lines below check the result. Expected value first, actual second. The name tells the story: <code>Method_Scenario_Expected</code>.",
              hi: "<b>Act</b>: हर test में एक action। ऊपर का ticket <b>Arrange</b> है; नीचे की दो <code>Assert</code> lines result जाँचती हैं। Expected value पहले, actual बाद में। नाम कहानी बताता है: <code>Method_Scenario_Expected</code>।",
              hg: "<b>Act</b>: har test mein ek action. Upar ka ticket <b>Arrange</b> hai; neeche ki do <code>Assert</code> lines result jaanchti hain. Expected value pehle, actual baad mein. Naam kahani batata hai: <code>Method_Scenario_Expected</code>."
            }
          },
          {
            code: "[InlineData(\"Normal\", 24)]",
            note: {
              en: "One row of a Theory. The values go into the method parameters <code>priority</code> and <code>hours</code>. The output shows one PASS line per row, with the values in brackets.",
              hi: "Theory की एक row। Values method के parameters <code>priority</code> और <code>hours</code> में जाती हैं। Output में हर row की एक PASS line दिखती है, कोष्ठक में values के साथ।",
              hg: "Theory ki ek row. Values method ke parameters <code>priority</code> aur <code>hours</code> mein jaati hain. Output mein har row ki ek PASS line dikhti hai, brackets mein values ke saath."
            }
          },
          {
            code: "Assert.Throws<InvalidOperationException>(() => _service.Assign(ticket, \"Kiran\"));",
            note: {
              en: "The error path is behaviour too: a closed ticket cannot be assigned. If an <code>Assert</code> fails, the message shows expected and actual, so you find the bug without a debugger.",
              hi: "Error वाला रास्ता भी behaviour है: closed ticket assign नहीं हो सकता। कोई <code>Assert</code> fail हो तो message expected और actual दिखाता है, इसलिए debugger के बिना bug मिल जाता है।",
              hg: "Error wala raasta bhi behaviour hai: closed ticket assign nahi ho sakta. Koi <code>Assert</code> fail ho to message expected aur actual dikhata hai, isliye debugger ke bina bug mil jaata hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>A vague name such as <code>Test1</code>, one test that checks three behaviours, or a test with no <code>Assert</code>. It passes whatever the code does (see the coverage section in the Deep Dive).</li><li>A <code>static</code> field to pass data between tests, or a real SMS, database or network call in a unit test. Tests become order-dependent, slow and flaky.</li></ul>",
          hi: "<ul><li><code>Test1</code> जैसा vague नाम, एक test में तीन behaviours की जाँच, या बिना <code>Assert</code> वाला test। Code कुछ भी करे, यह pass हो जाता है (Deep Dive का coverage section देखो)।</li><li>Tests के बीच data पहुँचाने के लिए <code>static</code> field, या unit test में असली SMS, database या network call। Tests order पर निर्भर, धीमे और flaky हो जाते हैं।</li></ul>",
          hg: "<ul><li><code>Test1</code> jaisa vague naam, ek test mein teen behaviours ki jaanch, ya bina <code>Assert</code> wala test. Code kuch bhi kare, ye pass ho jaata hai (Deep Dive ka coverage section dekho).</li><li>Tests ke beech data pahunchane ke liye <code>static</code> field, ya unit test mein asli SMS, database ya network call. Tests order par nirbhar, dheeme aur flaky ho jaate hain.</li></ul>"
        },
        whenToUse: {
          en: "<p>Unit tests for rules (status changes, SLA hours, validation); <code>[Theory]</code> when one rule is checked with different data. Integration tests for the seams where bugs hide (HTTP, EF Core). A few end-to-end tests for key journeys only.</p>",
          hi: "<p>Rules के लिए unit tests (status बदलना, SLA के घंटे, validation); एक rule अलग data से जाँचना हो तो <code>[Theory]</code>। जहाँ bugs छुपते हैं (HTTP, EF Core) वहाँ integration tests। End-to-end tests सिर्फ़ मुख्य journeys के लिए, कुछ ही।</p>",
          hg: "<p>Rules ke liye unit tests (status badalna, SLA ke ghante, validation); ek rule alag data se jaanchna ho to <code>[Theory]</code>. Jahan bugs chhupte hain (HTTP, EF Core) wahan integration tests. End-to-end tests sirf mukhya journeys ke liye, kuch hi.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a <code>[Fact]</code> named <code>Assign_ClosedTicket_LeavesAgentEmpty</code>: assigning a closed ticket (Neha, ticket 504) throws, and the ticket's <code>Agent</code> is still <code>null</code>.</p>",
            hi: "<p>एक <code>[Fact]</code> जोड़ो, नाम <code>Assign_ClosedTicket_LeavesAgentEmpty</code>: closed ticket (Neha, ticket 504) assign करने पर exception आए, और ticket का <code>Agent</code> फिर भी <code>null</code> रहे।</p>",
            hg: "<p>Ek <code>[Fact]</code> jodo, naam <code>Assign_ClosedTicket_LeavesAgentEmpty</code>: closed ticket (Neha, ticket 504) assign karne par exception aaye, aur ticket ka <code>Agent</code> phir bhi <code>null</code> rahe.</p>"
          },
          hint: {
            en: "<p>Copy the closed-ticket test, then add <code>Assert.Null(ticket.Agent)</code>. The runner finds new Facts by itself.</p>",
            hi: "<p>Closed-ticket वाला test copy करो, फिर <code>Assert.Null(ticket.Agent)</code> जोड़ दो। Runner नए Facts अपने आप ढूँढ लेता है।</p>",
            hg: "<p>Closed-ticket wala test copy karo, phir <code>Assert.Null(ticket.Agent)</code> jod do. Runner naye Facts apne aap dhoondh leta hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: one more Fact",
              hi: "हल: एक और Fact",
              hg: "Solution: ek aur Fact"
            },
            src: "using System.Reflection;\nusing Xunit;   // only the Assert class (package xunit.v3.assert)\n\n// Mini runner = what xUnit does: find [Fact]/[Theory] methods, make a NEW object per test, call it.\nforeach (var method in typeof(TicketTests).GetMethods()\n             .Where(m => m.GetCustomAttribute<FactAttribute>() != null).OrderBy(m => m.MetadataToken))\n{\n    foreach (var row in method.GetCustomAttributes<InlineDataAttribute>().Select(a => a.Data).DefaultIfEmpty([]))\n    {\n        var test = new TicketTests();                    // fresh instance for every test and every row\n        var name = row.Length == 0 ? method.Name : $\"{method.Name}({string.Join(\", \", row)})\";\n        try { method.Invoke(test, row); Console.WriteLine($\"PASS {name}\"); }\n        catch (TargetInvocationException e) { Console.WriteLine($\"FAIL {name}: {e.InnerException!.Message.Split('\\n')[0]}\"); }\n    }\n}\n\n// ---- the tests: these lines look the same in a real xUnit project ----\npublic class TicketTests\n{\n    private readonly TicketService _service = new(new QuietNotifier());   // new service for every test\n\n    [Fact]\n    public void Assign_OpenTicket_SetsAgentAndStatus()\n    {\n        var ticket = new SupportTicket { Id = 501, Customer = \"Asha\" };      // Arrange\n\n        _service.Assign(ticket, \"Meena\");                                     // Act\n\n        Assert.Equal(\"Meena\", ticket.Agent);                                  // Assert\n        Assert.Equal(TicketStatus.Assigned, ticket.Status);\n    }\n\n    [Fact]\n    public void Assign_ClosedTicket_Throws()\n    {\n        var ticket = new SupportTicket { Id = 502, Customer = \"Ravi\", Status = TicketStatus.Closed };\n\n        Assert.Throws<InvalidOperationException>(() => _service.Assign(ticket, \"Kiran\"));\n    }\n\n    [Fact]\n    public void Assign_ClosedTicket_LeavesAgentEmpty()\n    {\n        var ticket = new SupportTicket { Id = 504, Customer = \"Neha\", Status = TicketStatus.Closed };\n\n        Assert.Throws<InvalidOperationException>(() => _service.Assign(ticket, \"Kiran\"));\n\n        Assert.Null(ticket.Agent);\n    }\n\n    [Theory]\n    [InlineData(\"High\", 4)]\n    [InlineData(\"Normal\", 24)]\n    [InlineData(\"Low\", 72)]\n    public void HoursFor_KnownPriority_ReturnsPromisedHours(string priority, int hours) =>\n        Assert.Equal(hours, SlaRules.HoursFor(priority));\n}\n\n// stand-ins for xUnit's attributes (a real project gets them from the xunit.v3 package)\n[AttributeUsage(AttributeTargets.Method)] public class FactAttribute : Attribute { }\npublic class TheoryAttribute : FactAttribute { }\n[AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]\npublic class InlineDataAttribute(params object[] data) : Attribute { public object[] Data { get; } = data; }\n\npublic static class SlaRules\n{\n    public static int HoursFor(string priority) => priority switch\n    { \"High\" => 4, \"Normal\" => 24, \"Low\" => 72, _ => throw new ArgumentException($\"Unknown {priority}\") };\n}\n\npublic class QuietNotifier : INotifier { public void Send(string to, string message) { } }   // stand-in: sends no real SMS\n\npublic enum TicketStatus { Open, Assigned, Closed }\n\npublic class SupportTicket\n{\n    public int Id { get; set; }                public string Customer { get; set; } = \"\";\n    public TicketStatus Status { get; set; }   public string? Agent { get; set; }\n}\n\npublic interface INotifier { void Send(string to, string message); }\n\npublic class TicketService(INotifier notifier)\n{\n    public void Assign(SupportTicket ticket, string agent)\n    {\n        if (ticket.Status == TicketStatus.Closed) throw new InvalidOperationException(\"Ticket is closed\");\n        ticket.Agent = agent;\n        ticket.Status = TicketStatus.Assigned;\n        notifier.Send(ticket.Customer, $\"Ticket {ticket.Id} assigned to {agent}\");\n    }\n}",
            check: "run",
            expected: "PASS Assign_OpenTicket_SetsAgentAndStatus\nPASS Assign_ClosedTicket_Throws\nPASS Assign_ClosedTicket_LeavesAgentEmpty\nPASS HoursFor_KnownPriority_ReturnsPromisedHours(High, 4)\nPASS HoursFor_KnownPriority_ReturnsPromisedHours(Normal, 24)\nPASS HoursFor_KnownPriority_ReturnsPromisedHours(Low, 72)",
            packages: [
              "xunit.v3.assert@4.0.2"
            ]
          }
        },
        quiz: {
          q: {
            en: "Which test belongs at the bottom of the pyramid?",
            hi: "Pyramid के सबसे नीचे कौन-सा test आएगा?",
            hg: "Pyramid ke sabse neeche kaun-sa test aayega?"
          },
          options: [
            {
              en: "Open the CRM in a browser, log in as Asha and raise a ticket",
              hi: "Browser में CRM खोलो, Asha बनकर login करो और ticket raise करो",
              hg: "Browser mein CRM kholo, Asha bankar login karo aur ticket raise karo"
            },
            {
              en: "Call <code>TicketService.Assign</code> on a closed ticket and expect <code>InvalidOperationException</code>",
              hi: "<code>TicketService.Assign</code> को closed ticket पर call करो और <code>InvalidOperationException</code> की उम्मीद रखो",
              hg: "<code>TicketService.Assign</code> ko closed ticket par call karo aur <code>InvalidOperationException</code> ki ummeed rakho"
            },
            {
              en: "Start the API with a real database and POST a ticket",
              hi: "असली database के साथ API चालू करो और ticket POST करो",
              hg: "Asli database ke saath API chalu karo aur ticket POST karo"
            },
            {
              en: "Run the full regression suite every night",
              hi: "हर रात पूरा regression suite चलाओ",
              hg: "Har raat poora regression suite chalao"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>The bottom of the pyramid is one rule, no I/O, milliseconds. The browser test is end-to-end and the API with a real database is an integration test. Both are slower and belong higher up.</p>",
            hi: "<p>Pyramid का सबसे नीचे का हिस्सा है: एक rule, कोई I/O नहीं, milliseconds। Browser वाला test end-to-end है और असली database वाली API integration test है। दोनों धीमे हैं और ऊपर के levels में आते हैं।</p>",
            hg: "<p>Pyramid ka sabse neeche ka hissa hai: ek rule, koi I/O nahi, milliseconds. Browser wala test end-to-end hai aur asli database wali API integration test hai. Dono dheeme hain aur upar ke levels mein aate hain.</p>"
          }
        },
        recap: {
          en: "<ul><li>Pyramid: many unit tests, some integration tests, few end-to-end tests.</li><li>Arrange-Act-Assert, one behaviour per test; <code>[Fact]</code> = one test, <code>[Theory]</code> = many rows.</li><li>xUnit creates a new test-class instance per test; a unit test uses no real SMS, database or network.</li></ul>",
          hi: "<ul><li>Pyramid: बहुत सारे unit tests, कुछ integration tests, कम end-to-end tests।</li><li>Arrange-Act-Assert, हर test में एक behaviour; <code>[Fact]</code> = एक test, <code>[Theory]</code> = कई rows।</li><li>xUnit हर test के लिए test-class का नया instance बनाता है; unit test में असली SMS, database या network नहीं होता।</li></ul>",
          hg: "<ul><li>Pyramid: bahut saare unit tests, kuch integration tests, kam end-to-end tests.</li><li>Arrange-Act-Assert, har test mein ek behaviour; <code>[Fact]</code> = ek test, <code>[Theory]</code> = kai rows.</li><li>xUnit har test ke liye test-class ka naya instance banata hai; unit test mein asli SMS, database ya network nahi hota.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "xUnit-style tests on TicketService",
            hi: "TicketService पर xUnit-style tests",
            hg: "TicketService par xUnit-style tests"
          },
          src: "using System.Reflection;\nusing Xunit;   // only the Assert class (package xunit.v3.assert)\n\n// Mini runner = what xUnit does: find [Fact]/[Theory] methods, make a NEW object per test, call it.\nforeach (var method in typeof(TicketTests).GetMethods()\n             .Where(m => m.GetCustomAttribute<FactAttribute>() != null).OrderBy(m => m.MetadataToken))\n{\n    foreach (var row in method.GetCustomAttributes<InlineDataAttribute>().Select(a => a.Data).DefaultIfEmpty([]))\n    {\n        var test = new TicketTests();                    // fresh instance for every test and every row\n        var name = row.Length == 0 ? method.Name : $\"{method.Name}({string.Join(\", \", row)})\";\n        try { method.Invoke(test, row); Console.WriteLine($\"PASS {name}\"); }\n        catch (TargetInvocationException e) { Console.WriteLine($\"FAIL {name}: {e.InnerException!.Message.Split('\\n')[0]}\"); }\n    }\n}\n\n// ---- the tests: these lines look the same in a real xUnit project ----\npublic class TicketTests\n{\n    private readonly TicketService _service = new(new QuietNotifier());   // new service for every test\n\n    [Fact]\n    public void Assign_OpenTicket_SetsAgentAndStatus()\n    {\n        var ticket = new SupportTicket { Id = 501, Customer = \"Asha\" };      // Arrange\n\n        _service.Assign(ticket, \"Meena\");                                     // Act\n\n        Assert.Equal(\"Meena\", ticket.Agent);                                  // Assert\n        Assert.Equal(TicketStatus.Assigned, ticket.Status);\n    }\n\n    [Fact]\n    public void Assign_ClosedTicket_Throws()\n    {\n        var ticket = new SupportTicket { Id = 502, Customer = \"Ravi\", Status = TicketStatus.Closed };\n\n        Assert.Throws<InvalidOperationException>(() => _service.Assign(ticket, \"Kiran\"));\n    }\n\n    [Theory]\n    [InlineData(\"High\", 4)]\n    [InlineData(\"Normal\", 24)]\n    [InlineData(\"Low\", 72)]\n    public void HoursFor_KnownPriority_ReturnsPromisedHours(string priority, int hours) =>\n        Assert.Equal(hours, SlaRules.HoursFor(priority));\n}\n\n// stand-ins for xUnit's attributes (a real project gets them from the xunit.v3 package)\n[AttributeUsage(AttributeTargets.Method)] public class FactAttribute : Attribute { }\npublic class TheoryAttribute : FactAttribute { }\n[AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]\npublic class InlineDataAttribute(params object[] data) : Attribute { public object[] Data { get; } = data; }\n\npublic static class SlaRules\n{\n    public static int HoursFor(string priority) => priority switch\n    { \"High\" => 4, \"Normal\" => 24, \"Low\" => 72, _ => throw new ArgumentException($\"Unknown {priority}\") };\n}\n\npublic class QuietNotifier : INotifier { public void Send(string to, string message) { } }   // stand-in: sends no real SMS\n\npublic enum TicketStatus { Open, Assigned, Closed }\n\npublic class SupportTicket\n{\n    public int Id { get; set; }                public string Customer { get; set; } = \"\";\n    public TicketStatus Status { get; set; }   public string? Agent { get; set; }\n}\n\npublic interface INotifier { void Send(string to, string message); }\n\npublic class TicketService(INotifier notifier)\n{\n    public void Assign(SupportTicket ticket, string agent)\n    {\n        if (ticket.Status == TicketStatus.Closed) throw new InvalidOperationException(\"Ticket is closed\");\n        ticket.Agent = agent;\n        ticket.Status = TicketStatus.Assigned;\n        notifier.Send(ticket.Customer, $\"Ticket {ticket.Id} assigned to {agent}\");\n    }\n}",
          check: "run",
          expected: "PASS Assign_OpenTicket_SetsAgentAndStatus\nPASS Assign_ClosedTicket_Throws\nPASS HoursFor_KnownPriority_ReturnsPromisedHours(High, 4)\nPASS HoursFor_KnownPriority_ReturnsPromisedHours(Normal, 24)\nPASS HoursFor_KnownPriority_ReturnsPromisedHours(Low, 72)",
          packages: [
            "xunit.v3.assert@4.0.2"
          ]
        }
      ]
    },
    {
      id: "test-doubles",
      depth: "short",
      title: {
        en: "Test doubles: fake vs mock",
        hi: "Test doubles: fake बनाम mock",
        hg: "Test doubles: fake banaam mock"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 1 tested <code>SlaRules</code>, a pure function. <code>TicketService</code> is harder: it calls <code>INotifier</code> (Day 1), which would send a real SMS. Now you hand it a stand-in, a <b>test double</b>, and learn two ways to check the result.",
          hi: "पाठ 1 में हमने <code>SlaRules</code> test किया, जो एक pure function है। <code>TicketService</code> मुश्किल है: वह <code>INotifier</code> (Day 1) को call करता है, जो असली SMS भेजेगा। अब उसे एक stand-in देते हैं, यानी <b>test double</b>, और नतीजा जाँचने के दो तरीके सीखते हैं।",
          hg: "Lesson 1 mein humne <code>SlaRules</code> test kiya, jo ek pure function hai. <code>TicketService</code> mushkil hai: wo <code>INotifier</code> (Day 1) ko call karta hai, jo asli SMS bhejega. Ab use ek stand-in dete hain, yaani <b>test double</b>, aur nateeja jaanchne ke do tareeke seekhte hain."
        },
        what: {
          en: "<p>A <b>test double</b> is a stand-in for a dependency. A <b>stub</b> returns canned answers. A <b>fake</b> is a small working version, such as a list that remembers sent SMS. A <b>mock</b> checks that a call happened.</p><p>Rule of thumb: prefer checking <b>state</b> (what changed or what was stored) over <b>interaction</b> (which method was called how many times).</p><p>From here on, each <code>Run(...)</code> block in the programs stands for one <code>[Fact]</code>.</p>",
          hi: "<p><b>Test double</b> किसी dependency का stand-in है। <b>Stub</b> पहले से तय जवाब लौटाता है। <b>Fake</b> एक छोटा चलता-फिरता version है, जैसे list जो भेजे गए SMS याद रखती है। <b>Mock</b> जाँचता है कि कोई call हुई या नहीं।</p><p>सीधा rule: <b>state</b> जाँचो (क्या बदला या क्या store हुआ), <b>interaction</b> नहीं (कौन-सा method कितनी बार call हुआ)।</p><p>यहाँ से programs में हर <code>Run(...)</code> block एक <code>[Fact]</code> की जगह है।</p>",
          hg: "<p><b>Test double</b> kisi dependency ka stand-in hai. <b>Stub</b> pehle se tay jawaab lautata hai. <b>Fake</b> ek chhota chalta-phirta version hai, jaise list jo bheje gaye SMS yaad rakhti hai. <b>Mock</b> jaanchta hai ki koi call hui ya nahi.</p><p>Seedha rule: <b>state</b> jaancho (kya badla ya kya store hua), <b>interaction</b> nahi (kaun-sa method kitni baar call hua).</p><p>Yahan se programs mein har <code>Run(...)</code> block ek <code>[Fact]</code> ki jagah hai.</p>"
        },
        why: {
          en: "<p>A real SMS is slow, costs money and can fail for reasons that have nothing to do with your code. A double removes that noise. State checks also survive refactoring, while call checks break when you rename or reorganise internals.</p>",
          hi: "<p>असली SMS धीमा है, पैसे लगते हैं और आपके code से अलग वजहों से fail हो सकता है। Double यह शोर हटा देता है। State की जाँच refactoring के बाद भी टिकती है, जबकि call की जाँच तब टूटती है जब आप अंदर के नाम या ढाँचा बदलते हो।</p>",
          hg: "<p>Asli SMS dheema hai, paise lagte hain aur aapke code se alag wajahon se fail ho sakta hai. Double ye shor hata deta hai. State ki jaanch refactoring ke baad bhi tikti hai, jabki call ki jaanch tab tootti hai jab aap andar ke naam ya dhaancha badalte ho.</p>"
        },
        analogy: {
          en: "<p>In cricket nets a bowling machine is a fake: it behaves like a bowler and you judge your shot by the result. A coach with a clipboard is a mock: he ticks every ball bowled. That is useful only when the number of balls is the point.</p>",
          hi: "<p>Cricket nets में bowling machine एक fake है: वह bowler की तरह behave करती है और आप अपने shot को result से परखते हो। Clipboard वाला coach mock है: वह हर फेंकी गेंद पर tick लगाता है। यह तभी काम का है जब गेंदों की गिनती ही मुद्दा हो।</p>",
          hg: "<p>Cricket nets mein bowling machine ek fake hai: wo bowler ki tarah behave karti hai aur aap apne shot ko result se parakhte ho. Clipboard wala coach mock hai: wo har phenki gend par tick lagata hai. Ye tabhi kaam ka hai jab gendon ki ginti hi mudda ho.</p>"
        },
        lines: [
          {
            code: "public class FakeNotifier : INotifier",
            note: {
              en: "A hand-written fake: plain C#, easy to read, reusable in many tests. For one or two dependencies it is often the clearest choice.",
              hi: "हाथ से लिखा fake: सादा C#, पढ़ने में आसान, कई tests में दोबारा इस्तेमाल हो सकता है। एक-दो dependencies के लिए अक्सर यही सबसे साफ़ रास्ता है।",
              hg: "Haath se likha fake: saada C#, padhne mein aasaan, kai tests mein dobaara use ho sakta hai. Ek-do dependencies ke liye aksar yehi sabse saaf raasta hai."
            }
          },
          {
            code: "public void Send(string to, string message) => Sent.Add((to, message));",
            note: {
              en: "Instead of sending, the fake <b>remembers</b> what it was asked to send.",
              hi: "Fake भेजने की जगह यह <b>याद रखता है</b> कि उससे क्या भेजने को कहा गया।",
              hg: "Fake bhejne ki jagah ye <b>yaad rakhta hai</b> ki usse kya bhejne ko kaha gaya."
            }
          },
          {
            code: "Assert.Equal((\"Asha\", \"Ticket 501 assigned to Meena\"), sms.Sent.Single());",
            note: {
              en: "A <b>state</b> check: exactly one SMS, to Asha, with this text. If the service is refactored but behaves the same, this test stays green.",
              hi: "<b>State</b> की जाँच: ठीक एक SMS, Asha को, इस text के साथ। Service का अंदरूनी ढाँचा बदले पर behaviour वही रहे, तो यह test green रहता है।",
              hg: "<b>State</b> ki jaanch: theek ek SMS, Asha ko, is text ke saath. Service ka andaruni dhaancha badle par behaviour wahi rahe, to ye test green rehta hai."
            }
          },
          {
            code: "var sms = Substitute.For<INotifier>();",
            note: {
              en: "NSubstitute builds a mock for an interface in one line. No class to write.",
              hi: "NSubstitute एक line में interface का mock बना देता है। कोई class लिखनी नहीं पड़ती।",
              hg: "NSubstitute ek line mein interface ka mock bana deta hai. Koi class likhni nahi padti."
            }
          },
          {
            code: "sms.Received(1).Send(\"Asha\", \"Ticket 501 assigned to Meena\");",
            note: {
              en: "An <b>interaction</b> check. It is fair here because the SMS itself is the outcome the customer sees. Keep this style for real side effects like SMS, email or payment.",
              hi: "<b>Interaction</b> की जाँच। यहाँ यह ठीक है क्योंकि SMS ही वह नतीजा है जो customer देखता है। यह style असली side effects के लिए रखो, जैसे SMS, email या payment।",
              hg: "<b>Interaction</b> ki jaanch. Yahan ye theek hai kyunki SMS hi wo nateeja hai jo customer dekhta hai. Ye style asli side effects ke liye rakho, jaise SMS, email ya payment."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Mocking everything, even simple classes of your own. If it is cheap to build for real, build it for real.</li><li>Verifying internals, such as \"the private helper was called twice\". The test fails after a harmless refactor and teaches the team to distrust tests.</li></ul>",
          hi: "<ul><li>सब कुछ mock करना, अपनी सादी classes भी। जो असली बनाना सस्ता है, उसे असली ही बनाओ।</li><li>अंदर की चीज़ें verify करना, जैसे \"private helper दो बार call हुआ\"। बिना नुकसान वाले refactor के बाद test टूट जाता है और team को tests पर शक करना सिखा देता है।</li></ul>",
          hg: "<ul><li>Sab kuch mock karna, apni saadi classes bhi. Jo asli banana sasta hai, use asli hi banao.</li><li>Andar ki cheezein verify karna, jaise \"private helper do baar call hua\". Bina nuksaan wale refactor ke baad test toot jaata hai aur team ko tests par shak karna sikha deta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a <b>fake</b> when the dependency has behaviour that must stay consistent (a repository that stores and returns). Use a <b>stub</b> for simple canned answers. Use a <b>mock</b> only when the call is the outcome. If a test needs ten setups, the class has too many dependencies (Day 8, SRP).</p>",
          hi: "<p><b>Fake</b> तब लो जब dependency का ऐसा behaviour हो जो consistent रहना चाहिए (repository जो store करे और लौटाए)। सादे तय जवाबों के लिए <b>stub</b>। <b>Mock</b> सिर्फ़ तब जब call ही नतीजा हो। अगर एक test को दस setups चाहिए, तो class पर dependencies बहुत हैं (Day 8, SRP)।</p>",
          hg: "<p><b>Fake</b> tab lo jab dependency ka aisa behaviour ho jo consistent rehna chahiye (repository jo store kare aur lautaye). Saade tay jawaabon ke liye <b>stub</b>. <b>Mock</b> sirf tab jab call hi nateeja ho. Agar ek test ko das setups chahiye, to class par dependencies bahut hain (Day 8, SRP).</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a fake-based test: when Kiran is assigned Meena's ticket 503, the SMS must go to the customer (<b>Meena</b>), not to the agent.</p>",
            hi: "<p>Fake पर आधारित एक test जोड़ो: जब Meena का ticket 503 Kiran को assign हो, तो SMS customer (<b>Meena</b>) को जाए, agent को नहीं।</p>",
            hg: "<p>Fake par aadharit ek test jodo: jab Meena ka ticket 503 Kiran ko assign ho, to SMS customer (<b>Meena</b>) ko jaaye, agent ko nahi.</p>"
          },
          hint: {
            en: "<p>The fake keeps tuples <code>(To, Message)</code>. Check <code>sms.Sent.Single().To</code>.</p>",
            hi: "<p>Fake tuples <code>(To, Message)</code> रखता है। <code>sms.Sent.Single().To</code> जाँचो।</p>",
            hg: "<p>Fake tuples <code>(To, Message)</code> rakhta hai. <code>sms.Sent.Single().To</code> jaancho.</p>"
          },
          solution: {
            caption: {
              en: "Solution: the SMS goes to the customer",
              hi: "हल: SMS customer को जाता है",
              hg: "Solution: SMS customer ko jaata hai"
            },
            src: "using NSubstitute;\nusing Xunit;\n\nRun(\"fake: SMS text is right\", () =>              // Fake: we check WHAT happened (state)\n{\n    var sms = new FakeNotifier();\n    var ticket = new SupportTicket { Id = 501, Customer = \"Asha\" };\n\n    new TicketService(sms).Assign(ticket, \"Meena\");\n\n    Assert.Equal((\"Asha\", \"Ticket 501 assigned to Meena\"), sms.Sent.Single());\n});\n\nRun(\"mock: Asha gets exactly one SMS\", () =>      // Mock: the SMS itself is the behaviour\n{\n    var sms = Substitute.For<INotifier>();\n    var ticket = new SupportTicket { Id = 501, Customer = \"Asha\" };\n\n    new TicketService(sms).Assign(ticket, \"Meena\");\n\n    sms.Received(1).Send(\"Asha\", \"Ticket 501 assigned to Meena\");\n});\n\nRun(\"fake: SMS goes to the customer, not the agent\", () =>\n{\n    var sms = new FakeNotifier();\n    var ticket = new SupportTicket { Id = 503, Customer = \"Meena\" };\n\n    new TicketService(sms).Assign(ticket, \"Kiran\");\n\n    Assert.Equal(\"Meena\", sms.Sent.Single().To);\n});\n\nstatic void Run(string name, Action test)\n{\n    try { test(); Console.WriteLine($\"PASS {name}\"); }\n    catch (Exception e) { Console.WriteLine($\"FAIL {name}: {e.Message.Split('\\n')[0]}\"); }\n}\n\npublic class FakeNotifier : INotifier\n{\n    public List<(string To, string Message)> Sent { get; } = new();\n    public void Send(string to, string message) => Sent.Add((to, message));\n}\n\npublic enum TicketStatus { Open, Assigned, Closed }\n\npublic class SupportTicket\n{\n    public int Id { get; set; }                public string Customer { get; set; } = \"\";\n    public TicketStatus Status { get; set; }   public string? Agent { get; set; }\n}\n\npublic interface INotifier { void Send(string to, string message); }\n\npublic class TicketService(INotifier notifier)\n{\n    public void Assign(SupportTicket ticket, string agent)\n    {\n        if (ticket.Status == TicketStatus.Closed) throw new InvalidOperationException(\"Ticket is closed\");\n        ticket.Agent = agent;\n        ticket.Status = TicketStatus.Assigned;\n        notifier.Send(ticket.Customer, $\"Ticket {ticket.Id} assigned to {agent}\");\n    }\n}",
            check: "run",
            expected: "PASS fake: SMS text is right\nPASS mock: Asha gets exactly one SMS\nPASS fake: SMS goes to the customer, not the agent",
            packages: [
              "xunit.v3.assert@4.0.2",
              "NSubstitute@6.*"
            ]
          }
        },
        quiz: {
          q: {
            en: "<code>TicketService</code> is refactored: the internal helper that built the SMS text is removed and the text is built inline. Behaviour is unchanged. Which test breaks?",
            hi: "<code>TicketService</code> को refactor किया: SMS text बनाने वाला internal helper हटा दिया और text अब सीधे वहीं बनता है। Behaviour वही है। कौन-सा test टूटेगा?",
            hg: "<code>TicketService</code> ko refactor kiya: SMS text banane wala internal helper hata diya aur text ab seedhe wahin banta hai. Behaviour wahi hai. Kaun-sa test tootega?"
          },
          options: [
            {
              en: "The test that checks <code>ticket.Agent</code> after <code>Assign</code>",
              hi: "वह test जो <code>Assign</code> के बाद <code>ticket.Agent</code> जाँचता है",
              hg: "Wo test jo <code>Assign</code> ke baad <code>ticket.Agent</code> jaanchta hai"
            },
            {
              en: "The fake test that checks the text in <code>sms.Sent</code>",
              hi: "वह fake test जो <code>sms.Sent</code> में text जाँचता है",
              hg: "Wo fake test jo <code>sms.Sent</code> mein text jaanchta hai"
            },
            {
              en: "A test that verifies the helper was called exactly once",
              hi: "वह test जो verify करता है कि helper ठीक एक बार call हुआ",
              hg: "Wo test jo verify karta hai ki helper theek ek baar call hua"
            },
            {
              en: "None of them can break after a refactor",
              hi: "refactor के बाद कोई भी नहीं टूट सकता",
              hg: "Refactor ke baad koi bhi nahi toot sakta"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>Checking an internal call ties the test to <i>how</i> the code works. State checks (the SMS text, the agent) only care about <i>what</i> it does, so they survive the refactor.</p>",
            hi: "<p>Internal call जाँचने से test इस बात से बँध जाता है कि code <i>कैसे</i> काम करता है। State की जाँचें (SMS text, agent) सिर्फ़ यह देखती हैं कि वह <i>क्या</i> करता है, इसलिए refactor के बाद भी टिकती हैं।</p>",
            hg: "<p>Internal call jaanchne se test is baat se bandh jaata hai ki code <i>kaise</i> kaam karta hai. State ki jaanchein (SMS text, agent) sirf ye dekhti hain ki wo <i>kya</i> karta hai, isliye refactor ke baad bhi tikti hain.</p>"
          }
        },
        recap: {
          en: "<ul><li>Stub = canned answer; fake = small working version; mock = checks that a call happened.</li><li>Prefer state checks. Use a mock only when the call is the real outcome (SMS, email, payment).</li></ul>",
          hi: "<ul><li>Stub = तय जवाब; fake = छोटा चलता version; mock = जाँचता है कि call हुई।</li><li>State की जाँच को पसंद करो। Mock तभी जब call ही असली नतीजा हो (SMS, email, payment)।</li></ul>",
          hg: "<ul><li>Stub = tay jawaab; fake = chhota chalta version; mock = jaanchta hai ki call hui.</li><li>State ki jaanch ko pasand karo. Mock tabhi jab call hi asli nateeja ho (SMS, email, payment).</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Fake vs mock on TicketService",
            hi: "TicketService पर fake बनाम mock",
            hg: "TicketService par fake banaam mock"
          },
          src: "using NSubstitute;\nusing Xunit;\n\nRun(\"fake: SMS text is right\", () =>              // Fake: we check WHAT happened (state)\n{\n    var sms = new FakeNotifier();\n    var ticket = new SupportTicket { Id = 501, Customer = \"Asha\" };\n\n    new TicketService(sms).Assign(ticket, \"Meena\");\n\n    Assert.Equal((\"Asha\", \"Ticket 501 assigned to Meena\"), sms.Sent.Single());\n});\n\nRun(\"mock: Asha gets exactly one SMS\", () =>      // Mock: the SMS itself is the behaviour\n{\n    var sms = Substitute.For<INotifier>();\n    var ticket = new SupportTicket { Id = 501, Customer = \"Asha\" };\n\n    new TicketService(sms).Assign(ticket, \"Meena\");\n\n    sms.Received(1).Send(\"Asha\", \"Ticket 501 assigned to Meena\");\n});\n\nstatic void Run(string name, Action test)\n{\n    try { test(); Console.WriteLine($\"PASS {name}\"); }\n    catch (Exception e) { Console.WriteLine($\"FAIL {name}: {e.Message.Split('\\n')[0]}\"); }\n}\n\npublic class FakeNotifier : INotifier\n{\n    public List<(string To, string Message)> Sent { get; } = new();\n    public void Send(string to, string message) => Sent.Add((to, message));\n}\n\npublic enum TicketStatus { Open, Assigned, Closed }\n\npublic class SupportTicket\n{\n    public int Id { get; set; }                public string Customer { get; set; } = \"\";\n    public TicketStatus Status { get; set; }   public string? Agent { get; set; }\n}\n\npublic interface INotifier { void Send(string to, string message); }\n\npublic class TicketService(INotifier notifier)\n{\n    public void Assign(SupportTicket ticket, string agent)\n    {\n        if (ticket.Status == TicketStatus.Closed) throw new InvalidOperationException(\"Ticket is closed\");\n        ticket.Agent = agent;\n        ticket.Status = TicketStatus.Assigned;\n        notifier.Send(ticket.Customer, $\"Ticket {ticket.Id} assigned to {agent}\");\n    }\n}",
          check: "run",
          expected: "PASS fake: SMS text is right\nPASS mock: Asha gets exactly one SMS",
          packages: [
            "xunit.v3.assert@4.0.2",
            "NSubstitute@6.*"
          ]
        }
      ]
    },
    {
      id: "ef-core-test",
      depth: "short",
      title: {
        en: "Testing EF Core with a real database engine",
        hi: "EF Core को असली database engine पर test करना",
        hg: "EF Core ko asli database engine par test karna"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 2 replaced <code>INotifier</code> with a fake. A database is different: it has behaviour of its own, such as foreign keys and SQL translation, that a fake list will not copy. Day 5 built <code>CrmContext</code> with Customer 1:N SupportTicket; here we run it against SQLite in memory.",
          hi: "पाठ 2 में <code>INotifier</code> की जगह fake लगाया। Database अलग है: उसका अपना behaviour होता है, जैसे foreign keys और SQL translation, जिसे fake list नक़ल नहीं करेगी। Day 5 में Customer 1:N SupportTicket वाला <code>CrmContext</code> बना था; यहाँ उसे memory में चलने वाले SQLite पर चलाते हैं।",
          hg: "Lesson 2 mein <code>INotifier</code> ki jagah fake lagaya. Database alag hai: uska apna behaviour hota hai, jaise foreign keys aur SQL translation, jise fake list nakal nahi karegi. Day 5 mein Customer 1:N SupportTicket wala <code>CrmContext</code> bana tha; yahan use memory mein chalne wale SQLite par chalate hain."
        },
        what: {
          en: "<p>Test EF Core code against a <b>real SQL engine</b>. SQLite in memory is one: a real database that lives inside your test process. Open a connection and keep it open, because the in-memory database disappears when the connection closes. <code>EnsureCreated</code> builds the tables from your model.</p><p>Give <b>every test its own fresh database</b>, so tests never affect each other.</p>",
          hi: "<p>EF Core code को <b>असली SQL engine</b> पर test करो। Memory वाला SQLite ऐसा ही एक engine है: असली database जो आपके test process के अंदर रहता है। Connection खोलो और खुला रखो, क्योंकि connection बंद होते ही in-memory database ग़ायब हो जाता है। <code>EnsureCreated</code> आपके model से tables बना देता है।</p><p><b>हर test को अपना नया database</b> दो, ताकि tests एक-दूसरे पर असर न डालें।</p>",
          hg: "<p>EF Core code ko <b>asli SQL engine</b> par test karo. Memory wala SQLite aisa hi ek engine hai: asli database jo aapke test process ke andar rehta hai. Connection kholo aur khula rakho, kyunki connection band hote hi in-memory database gaayab ho jaata hai. <code>EnsureCreated</code> aapke model se tables bana deta hai.</p><p><b>Har test ko apna naya database</b> do, taaki tests ek-dusre par asar na daalein.</p>"
        },
        why: {
          en: "<p>The EF Core in-memory provider (<code>UseInMemoryDatabase</code>) is a list in disguise. It does not enforce foreign keys and does not translate LINQ to SQL, so a wrong query or bad data can pass. SQLite does both: a ticket for a missing customer saves on the in-memory provider and throws on SQLite. Microsoft docs discourage it for tests. SQLite is still not SQL Server (it compares text case-sensitively), so your real engine has the final word.</p>",
          hi: "<p>EF Core का in-memory provider (<code>UseInMemoryDatabase</code>) असल में भेस बदली हुई list है। वह foreign keys लागू नहीं करता और LINQ को SQL में नहीं बदलता, इसलिए गलत query या गलत data भी pass हो सकता है। SQLite दोनों करता है। हमने जाँचा: जो customer मौजूद नहीं उसके लिए ticket save करना in-memory provider पर सफल हो जाता है और SQLite पर exception देता है। Microsoft docs tests के लिए इससे बचने को कहते हैं। SQLite भी SQL Server नहीं है (वह text case-sensitive तरीके से compare करता है), इसलिए आख़िरी फ़ैसला आपके असली engine का है।</p>",
          hg: "<p>EF Core ka in-memory provider (<code>UseInMemoryDatabase</code>) asal mein bhes badli hui list hai. Wo foreign keys laagu nahi karta aur LINQ ko SQL mein nahi badalta, isliye galat query ya galat data bhi pass ho sakta hai. SQLite dono karta hai. Humne jaancha: jo customer maujood nahi uske liye ticket save karna in-memory provider par safal ho jaata hai aur SQLite par exception deta hai. Microsoft docs tests ke liye isse bachne ko kehte hain. SQLite bhi SQL Server nahi hai (wo text case-sensitive tareeke se compare karta hai), isliye aakhri faisla aapke asli engine ka hai.</p>"
        },
        analogy: {
          en: "<p>For the RTO driving test, practising on a simulator is not the same as driving a real car on a closed test track. The in-memory provider is the simulator. SQLite in memory is the real car on a small track: real gears, real brakes, safe place. The real highway is your production SQL Server (see Testcontainers in the Deep Dive).</p>",
          hi: "<p>RTO के driving test के लिए simulator पर practice करना और बंद test track पर असली गाड़ी चलाना एक बात नहीं है। In-memory provider simulator है। Memory वाला SQLite छोटे track पर असली गाड़ी है: असली gears, असली brakes, सुरक्षित जगह। असली highway आपका production SQL Server है (Deep Dive में Testcontainers देखो)।</p>",
          hg: "<p>RTO ke driving test ke liye simulator par practice karna aur band test track par asli gaadi chalana ek baat nahi hai. In-memory provider simulator hai. Memory wala SQLite chhote track par asli gaadi hai: asli gears, asli brakes, surakshit jagah. Asli highway aapka production SQL Server hai (Deep Dive mein Testcontainers dekho).</p>"
        },
        lines: [
          {
            code: "_connection.Open();",
            note: {
              en: "Keep this connection open for the life of the test. Close it and the in-memory database is gone.",
              hi: "यह connection test की पूरी उम्र खुला रखो। इसे बंद किया तो in-memory database ग़ायब।",
              hg: "Ye connection test ki poori umr khula rakho. Ise band kiya to in-memory database gaayab."
            }
          },
          {
            code: "Db.Database.EnsureCreated();",
            note: {
              en: "Builds the tables from the model, including the foreign key from ticket to customer. Real projects may run migrations instead.",
              hi: "Model से tables बनाता है, ticket से customer तक का foreign key भी। असली projects में इसकी जगह migrations चल सकते हैं।",
              hg: "Model se tables banata hai, ticket se customer tak ka foreign key bhi. Asli projects mein iski jagah migrations chal sakte hain."
            }
          },
          {
            code: "using var testDb = new TestDb();",
            note: {
              en: "A fresh database per test. Seed data (Asha 501 open, 502 closed; Ravi 503 open) is created every time, so no test can leave a mess for the next.",
              hi: "हर test के लिए नया database। Seed data (Asha का 501 open, 502 closed; Ravi का 503 open) हर बार बनता है, इसलिए कोई test अगले के लिए गंदगी नहीं छोड़ता।",
              hg: "Har test ke liye naya database. Seed data (Asha ka 501 open, 502 closed; Ravi ka 503 open) har baar banta hai, isliye koi test agle ke liye gandagi nahi chhodta."
            }
          },
          {
            code: "t.Status == TicketStatus.Open && t.Customer!.Name == \"Asha\"",
            note: {
              en: "The query under test. SQLite really translates it to SQL with a join, so a typo in the filter would show up as a wrong result.",
              hi: "यही query test हो रही है। SQLite इसे सचमुच join वाली SQL में बदलता है, इसलिए filter की गलती गलत result के रूप में दिख जाएगी।",
              hg: "Yahi query test ho rahi hai. SQLite ise sachmuch join wali SQL mein badalta hai, isliye filter ki galti galat result ke roop mein dikh jayegi."
            }
          },
          {
            code: "Assert.Throws<DbUpdateException>(() => testDb.Db.SaveChanges());",
            note: {
              en: "The database itself refuses a ticket for customer 99. The in-memory provider would accept it silently.",
              hi: "Database ख़ुद customer 99 के ticket को मना कर देता है। In-memory provider इसे चुपचाप मान लेता।",
              hg: "Database khud customer 99 ke ticket ko mana kar deta hai. In-memory provider ise chupchaap maan leta."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Using <code>UseInMemoryDatabase</code> for tests that should prove queries or constraints. They go green while production fails.</li><li>Sharing one database across tests. A leftover row from one test changes the result of another. Use a fresh database or unique data.</li></ul>",
          hi: "<ul><li>जिन tests को queries या constraints साबित करने हैं उनके लिए <code>UseInMemoryDatabase</code> लेना। वे green रहते हैं और production fail होता है।</li><li>एक database कई tests में share करना। एक test की बची हुई row दूसरे का result बदल देती है। नया database लो या अलग-अलग data।</li></ul>",
          hg: "<ul><li>Jin tests ko queries ya constraints saabit karne hain unke liye <code>UseInMemoryDatabase</code> lena. Wo green rehte hain aur production fail hota hai.</li><li>Ek database kai tests mein share karna. Ek test ki bachi hui row dusre ka result badal deti hai. Naya database lo ya alag-alag data.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a real engine for queries, constraints, transactions and migrations. SQLite in memory is fast and needs nothing installed. If your code uses SQL Server specific features (types, collation, stored procedures), test on SQL Server in a container (Deep Dive). Do not write tests for EF Core itself, such as \"<code>Add</code> adds a row\".</p>",
          hi: "<p>Queries, constraints, transactions और migrations के लिए असली engine लो। Memory वाला SQLite तेज़ है और कुछ install नहीं करना पड़ता। अगर आपका code SQL Server की ख़ास चीज़ें इस्तेमाल करता है (types, collation, stored procedures), तो container में SQL Server पर test करो (Deep Dive)। EF Core के अपने काम के tests मत लिखो, जैसे \"<code>Add</code> से row जुड़ती है\"।</p>",
          hg: "<p>Queries, constraints, transactions aur migrations ke liye asli engine lo. Memory wala SQLite tez hai aur kuch install nahi karna padta. Agar aapka code SQL Server ki khaas cheezein use karta hai (types, collation, stored procedures), to container mein SQL Server par test karo (Deep Dive). EF Core ke apne kaam ke tests mat likho, jaise \"<code>Add</code> se row judti hai\".</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a test <code>OpenFor_Ravi_ReturnsTicket503</code>: Ravi has one open ticket, 503.</p>",
            hi: "<p>एक test जोड़ो <code>OpenFor_Ravi_ReturnsTicket503</code>: Ravi का एक ही open ticket है, 503।</p>",
            hg: "<p>Ek test jodo <code>OpenFor_Ravi_ReturnsTicket503</code>: Ravi ka ek hi open ticket hai, 503.</p>"
          },
          hint: {
            en: "<p>Copy the Asha test, change the name to <code>\"Ravi\"</code> and the expected id to 503.</p>",
            hi: "<p>Asha वाला test copy करो, नाम <code>\"Ravi\"</code> कर दो और expected id 503।</p>",
            hg: "<p>Asha wala test copy karo, naam <code>\"Ravi\"</code> kar do aur expected id 503.</p>"
          },
          solution: {
            caption: {
              en: "Solution: Ravi's open tickets",
              hi: "हल: Ravi के open tickets",
              hg: "Solution: Ravi ke open tickets"
            },
            src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\nusing Xunit;\n\nRun(\"OpenFor_Asha_ReturnsOnlyHerOpenTickets\", () =>\n{\n    using var testDb = new TestDb();                       // every test gets its own fresh database\n\n    var ids = testDb.Db.Tickets.Where(t => t.Status == TicketStatus.Open && t.Customer!.Name == \"Asha\")\n        .Select(t => t.Id).ToList();\n\n    Assert.Equal(new[] { 501 }, ids);\n});\n\nRun(\"OpenFor_Ravi_ReturnsTicket503\", () =>\n{\n    using var testDb = new TestDb();\n\n    var ids = testDb.Db.Tickets.Where(t => t.Status == TicketStatus.Open && t.Customer!.Name == \"Ravi\")\n        .Select(t => t.Id).ToList();\n\n    Assert.Equal(new[] { 503 }, ids);\n});\n\nRun(\"Save_TicketForMissingCustomer_IsRejectedByTheDatabase\", () =>\n{\n    using var testDb = new TestDb();\n    testDb.Db.Tickets.Add(new SupportTicket { Id = 510, CustomerId = 99 });\n\n    Assert.Throws<DbUpdateException>(() => testDb.Db.SaveChanges());   // the foreign key is really enforced\n});\n\nstatic void Run(string name, Action test)\n{\n    try { test(); Console.WriteLine($\"PASS {name}\"); }\n    catch (Exception e) { Console.WriteLine($\"FAIL {name}: {e.Message.Split('\\n')[0]}\"); }\n}\n\npublic sealed class TestDb : IDisposable\n{\n    private readonly SqliteConnection _connection = new(\"DataSource=:memory:\");\n    public CrmContext Db { get; }\n\n    public TestDb()\n    {\n        _connection.Open();                                // the in-memory database lives while this stays open\n        Db = new CrmContext(new DbContextOptionsBuilder<CrmContext>().UseSqlite(_connection).Options);\n        Db.Database.EnsureCreated();\n        Db.Customers.AddRange(new Customer { Id = 1, Name = \"Asha\" }, new Customer { Id = 2, Name = \"Ravi\" });\n        Db.Tickets.AddRange(\n            new SupportTicket { Id = 501, CustomerId = 1, Status = TicketStatus.Open },\n            new SupportTicket { Id = 502, CustomerId = 1, Status = TicketStatus.Closed },\n            new SupportTicket { Id = 503, CustomerId = 2, Status = TicketStatus.Open });\n        Db.SaveChanges();\n    }\n\n    public void Dispose() { Db.Dispose(); _connection.Dispose(); }\n}\n\npublic enum TicketStatus { Open, Closed }\npublic class Customer { public int Id { get; set; } public string Name { get; set; } = \"\"; }\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public int CustomerId { get; set; }\n    public Customer? Customer { get; set; }\n    public TicketStatus Status { get; set; }\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
            check: "run",
            expected: "PASS OpenFor_Asha_ReturnsOnlyHerOpenTickets\nPASS OpenFor_Ravi_ReturnsTicket503\nPASS Save_TicketForMissingCustomer_IsRejectedByTheDatabase",
            packages: [
              "xunit.v3.assert@4.0.2",
              "Microsoft.EntityFrameworkCore.Sqlite@9.*"
            ]
          }
        },
        quiz: {
          q: {
            en: "What is the main weakness of <code>UseInMemoryDatabase</code> for tests?",
            hi: "Tests के लिए <code>UseInMemoryDatabase</code> की सबसे बड़ी कमज़ोरी क्या है?",
            hg: "Tests ke liye <code>UseInMemoryDatabase</code> ki sabse badi kamzori kya hai?"
          },
          options: [
            {
              en: "It cannot be used with <code>async</code> methods",
              hi: "इसे <code>async</code> methods के साथ इस्तेमाल नहीं कर सकते",
              hg: "Ise <code>async</code> methods ke saath use nahi kar sakte"
            },
            {
              en: "It is too slow for unit tests",
              hi: "यह unit tests के लिए बहुत धीमा है",
              hg: "Ye unit tests ke liye bahut dheema hai"
            },
            {
              en: "It needs Docker to run",
              hi: "इसे चलाने के लिए Docker चाहिए",
              hg: "Ise chalane ke liye Docker chahiye"
            },
            {
              en: "It does not enforce foreign keys or translate LINQ to SQL, so wrong queries and bad data can pass",
              hi: "यह foreign keys लागू नहीं करता और LINQ को SQL में नहीं बदलता, इसलिए गलत queries और गलत data pass हो सकते हैं",
              hg: "Ye foreign keys laagu nahi karta aur LINQ ko SQL mein nahi badalta, isliye galat queries aur galat data pass ho sakte hain"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>It is fast and needs no Docker, which is why people like it. The danger is that it behaves like a list, not a database, so tests can be green for code that fails on a real engine.</p>",
            hi: "<p>यह तेज़ है और Docker नहीं चाहिए, इसीलिए लोग इसे पसंद करते हैं। ख़तरा यह है कि यह list की तरह behave करता है, database की तरह नहीं, इसलिए जो code असली engine पर fail होता है उसके tests भी green रह सकते हैं।</p>",
            hg: "<p>Ye tez hai aur Docker nahi chahiye, isiliye log ise pasand karte hain. Khatra ye hai ki ye list ki tarah behave karta hai, database ki tarah nahi, isliye jo code asli engine par fail hota hai uske tests bhi green reh sakte hain.</p>"
          }
        },
        recap: {
          en: "<ul><li>Test EF Core against a real engine: SQLite in memory is quick, a container is closest to production.</li><li>Keep the connection open, and give every test a fresh database.</li></ul>",
          hi: "<ul><li>EF Core को असली engine पर test करो: memory वाला SQLite तेज़ है, container production के सबसे क़रीब।</li><li>Connection खुला रखो, और हर test को नया database दो।</li></ul>",
          hg: "<ul><li>EF Core ko asli engine par test karo: memory wala SQLite tez hai, container production ke sabse kareeb.</li><li>Connection khula rakho, aur har test ko naya database do.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Two EF Core tests on in-memory SQLite",
            hi: "In-memory SQLite पर दो EF Core tests",
            hg: "In-memory SQLite par do EF Core tests"
          },
          src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\nusing Xunit;\n\nRun(\"OpenFor_Asha_ReturnsOnlyHerOpenTickets\", () =>\n{\n    using var testDb = new TestDb();                       // every test gets its own fresh database\n\n    var ids = testDb.Db.Tickets.Where(t => t.Status == TicketStatus.Open && t.Customer!.Name == \"Asha\")\n        .Select(t => t.Id).ToList();\n\n    Assert.Equal(new[] { 501 }, ids);\n});\n\nRun(\"Save_TicketForMissingCustomer_IsRejectedByTheDatabase\", () =>\n{\n    using var testDb = new TestDb();\n    testDb.Db.Tickets.Add(new SupportTicket { Id = 510, CustomerId = 99 });\n\n    Assert.Throws<DbUpdateException>(() => testDb.Db.SaveChanges());   // the foreign key is really enforced\n});\n\nstatic void Run(string name, Action test)\n{\n    try { test(); Console.WriteLine($\"PASS {name}\"); }\n    catch (Exception e) { Console.WriteLine($\"FAIL {name}: {e.Message.Split('\\n')[0]}\"); }\n}\n\npublic sealed class TestDb : IDisposable\n{\n    private readonly SqliteConnection _connection = new(\"DataSource=:memory:\");\n    public CrmContext Db { get; }\n\n    public TestDb()\n    {\n        _connection.Open();                                // the in-memory database lives while this stays open\n        Db = new CrmContext(new DbContextOptionsBuilder<CrmContext>().UseSqlite(_connection).Options);\n        Db.Database.EnsureCreated();\n        Db.Customers.AddRange(new Customer { Id = 1, Name = \"Asha\" }, new Customer { Id = 2, Name = \"Ravi\" });\n        Db.Tickets.AddRange(\n            new SupportTicket { Id = 501, CustomerId = 1, Status = TicketStatus.Open },\n            new SupportTicket { Id = 502, CustomerId = 1, Status = TicketStatus.Closed },\n            new SupportTicket { Id = 503, CustomerId = 2, Status = TicketStatus.Open });\n        Db.SaveChanges();\n    }\n\n    public void Dispose() { Db.Dispose(); _connection.Dispose(); }\n}\n\npublic enum TicketStatus { Open, Closed }\npublic class Customer { public int Id { get; set; } public string Name { get; set; } = \"\"; }\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public int CustomerId { get; set; }\n    public Customer? Customer { get; set; }\n    public TicketStatus Status { get; set; }\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
          check: "run",
          expected: "PASS OpenFor_Asha_ReturnsOnlyHerOpenTickets\nPASS Save_TicketForMissingCustomer_IsRejectedByTheDatabase",
          packages: [
            "xunit.v3.assert@4.0.2",
            "Microsoft.EntityFrameworkCore.Sqlite@9.*"
          ]
        }
      ]
    },
    {
      id: "api-test-testserver",
      depth: "short",
      title: {
        en: "Testing the Web API in memory with TestServer",
        hi: "Web API को memory में TestServer से test करना",
        hg: "Web API ko memory mein TestServer se test karna"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 3 tested the data layer. Day 12 started an app in memory with <code>UseTestServer()</code> and called it with <code>GetTestClient()</code>, and Day 13 built the endpoints. Now that trick becomes a test: real routing, JSON and DI, with only <code>INotifier</code> swapped for a fake like the one in lesson 2.",
          hi: "पाठ 3 में data layer test हुई। Day 12 में हमने <code>UseTestServer()</code> से app को memory में चलाया और <code>GetTestClient()</code> से call किया, और Day 13 में endpoints बने। अब वही तरकीब test बन जाती है: असली routing, JSON और DI, बस <code>INotifier</code> की जगह पाठ 2 जैसा fake।",
          hg: "Lesson 3 mein data layer test hui. Day 12 mein humne <code>UseTestServer()</code> se app ko memory mein chalaya aur <code>GetTestClient()</code> se call kiya, aur Day 13 mein endpoints bane. Ab wahi tarkeeb test ban jaati hai: asli routing, JSON aur DI, bas <code>INotifier</code> ki jagah lesson 2 jaisa fake."
        },
        what: {
          en: "<p>An <b>API integration test</b> starts your real app inside the test process and calls its endpoints with an <code>HttpClient</code> that is connected in memory. No port, no network. You assert the status code and the effects.</p><p>Replace only the outside world (SMS, payment, clock) and keep everything else real.</p>",
          hi: "<p><b>API integration test</b> आपकी असली app को test process के अंदर चलाता है और उसके endpoints को ऐसे <code>HttpClient</code> से call करता है जो memory में जुड़ा है। कोई port नहीं, कोई network नहीं। आप status code और असर जाँचते हो।</p><p>सिर्फ़ बाहरी दुनिया (SMS, payment, clock) बदलो और बाकी सब असली रखो।</p>",
          hg: "<p><b>API integration test</b> aapki asli app ko test process ke andar chalata hai aur uske endpoints ko aise <code>HttpClient</code> se call karta hai jo memory mein juda hai. Koi port nahi, koi network nahi. Aap status code aur asar jaanchte ho.</p><p>Sirf baahri duniya (SMS, payment, clock) badlo aur baaki sab asli rakho.</p>"
        },
        why: {
          en: "<p>Unit tests cannot catch a wrong route, a JSON name mismatch, a missing DI registration or a wrong status code (409 versus 200). One request through the real pipeline catches all of these.</p>",
          hi: "<p>Unit tests गलत route, JSON के नाम का मेल न खाना, DI registration छूटना या गलत status code (409 की जगह 200) नहीं पकड़ सकते। असली pipeline से गुज़रती एक request ये सब पकड़ लेती है।</p>",
          hg: "<p>Unit tests galat route, JSON ke naam ka mel na khana, DI registration chhootna ya galat status code (409 ki jagah 200) nahi pakad sakte. Asli pipeline se guzarti ek request ye sab pakad leti hai.</p>"
        },
        analogy: {
          en: "<p>Before a new shop branch opens, the owner does a dress rehearsal: real counter, real billing machine, a few friendly customers. No real crowd. An API test is that rehearsal for your endpoints.</p>",
          hi: "<p>नई shop की branch खुलने से पहले मालिक dress rehearsal करता है: असली counter, असली billing machine, कुछ दोस्ताना customers। असली भीड़ नहीं। API test आपके endpoints के लिए वही rehearsal है।</p>",
          hg: "<p>Nayi shop ki branch khulne se pehle maalik dress rehearsal karta hai: asli counter, asli billing machine, kuch dostana customers. Asli bheed nahi. API test aapke endpoints ke liye wahi rehearsal hai.</p>"
        },
        lines: [
          {
            code: "builder.WebHost.UseTestServer();",
            note: {
              en: "Swaps the real web server for an in-memory one. Same pipeline, no port.",
              hi: "असली web server की जगह memory वाला server लगाता है। Pipeline वही, port नहीं।",
              hg: "Asli web server ki jagah memory wala server lagata hai. Pipeline wahi, port nahi."
            }
          },
          {
            code: "builder.Services.AddSingleton(notifier);",
            note: {
              en: "The one replacement: the app gets the test's fake <code>INotifier</code> instead of the SMS gateway.",
              hi: "बस एक बदलाव: app को SMS gateway की जगह test का fake <code>INotifier</code> मिलता है।",
              hg: "Bas ek badlaav: app ko SMS gateway ki jagah test ka fake <code>INotifier</code> milta hai."
            }
          },
          {
            code: "await using var app = await StartApp(sms);",
            note: {
              en: "A <b>new app for every test</b>, with its own ticket data. Tests cannot see each other's changes.",
              hi: "<b>हर test के लिए नई app</b>, अपने ticket data के साथ। Tests एक-दूसरे के बदलाव नहीं देख पाते।",
              hg: "<b>Har test ke liye nayi app</b>, apne ticket data ke saath. Tests ek-dusre ke badlaav nahi dekh paate."
            }
          },
          {
            code: "var response = await client.PostAsJsonAsync(\"/tickets/501/assign\", new AssignRequest(\"Meena\"));",
            note: {
              en: "A real HTTP POST with a JSON body. Routing and model binding run for real.",
              hi: "JSON body के साथ असली HTTP POST। Routing और model binding सचमुच चलते हैं।",
              hg: "JSON body ke saath asli HTTP POST. Routing aur model binding sachmuch chalte hain."
            }
          },
          {
            code: "Assert.Equal(HttpStatusCode.Conflict, response.StatusCode);",
            note: {
              en: "The closed ticket must answer <b>409 Conflict</b>. The next line in the test also checks that no SMS went out.",
              hi: "Closed ticket का जवाब <b>409 Conflict</b> होना चाहिए। Test की अगली line यह भी जाँचती है कि कोई SMS नहीं गया।",
              hg: "Closed ticket ka jawaab <b>409 Conflict</b> hona chahiye. Test ki agli line ye bhi jaanchti hai ki koi SMS nahi gaya."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Replacing so much that you only test your fakes. Keep routing, filters, serialisation and DI real.</li><li>One shared app with mutable data across tests. Results then depend on test order. Build a fresh app per test, or give each test its own data.</li></ul>",
          hi: "<ul><li>इतना कुछ बदल देना कि आप सिर्फ़ अपने fakes को test करो। Routing, filters, serialisation और DI असली रखो।</li><li>एक shared app जिसका data tests के बीच बदलता है। तब result test के order पर निर्भर हो जाता है। हर test के लिए नई app बनाओ, या हर test को अपना data दो।</li></ul>",
          hg: "<ul><li>Itna kuch badal dena ki aap sirf apne fakes ko test karo. Routing, filters, serialisation aur DI asli rakho.</li><li>Ek shared app jiska data tests ke beech badalta hai. Tab result test ke order par nirbhar ho jaata hai. Har test ke liye nayi app banao, ya har test ko apna data do.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use API tests for endpoints, status codes, validation, authorisation rules and the request pipeline. Do not use them for pure business rules (a unit test is faster). For your real <code>Program.cs</code> the standard tool is <code>WebApplicationFactory&lt;Program&gt;</code> (Deep Dive); the idea is the same as this lesson.</p>",
          hi: "<p>API tests endpoints, status codes, validation, authorisation rules और request pipeline के लिए इस्तेमाल करो। सिर्फ़ business rules वाले code के लिए नहीं (unit test तेज़ है)। आपके असली <code>Program.cs</code> के लिए standard tool <code>WebApplicationFactory&lt;Program&gt;</code> है (Deep Dive); idea वही है जो इस पाठ में है।</p>",
          hg: "<p>API tests endpoints, status codes, validation, authorisation rules aur request pipeline ke liye use karo. Sirf business rules wale code ke liye nahi (unit test tez hai). Aapke asli <code>Program.cs</code> ke liye standard tool <code>WebApplicationFactory&lt;Program&gt;</code> hai (Deep Dive); idea wahi hai jo is lesson mein hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a test: assigning ticket 501 twice (first to Meena, then to Kiran) is allowed, and the customer gets <b>two</b> SMS.</p>",
            hi: "<p>एक test जोड़ो: ticket 501 को दो बार assign करना (पहले Meena को, फिर Kiran को) allowed है, और customer को <b>दो</b> SMS मिलते हैं।</p>",
            hg: "<p>Ek test jodo: ticket 501 ko do baar assign karna (pehle Meena ko, phir Kiran ko) allowed hai, aur customer ko <b>do</b> SMS milte hain.</p>"
          },
          hint: {
            en: "<p>Send two POST requests with the same client, then check <code>sms.Sent.Count</code>.</p>",
            hi: "<p>एक ही client से दो POST requests भेजो, फिर <code>sms.Sent.Count</code> जाँचो।</p>",
            hg: "<p>Ek hi client se do POST requests bhejo, phir <code>sms.Sent.Count</code> jaancho.</p>"
          },
          solution: {
            caption: {
              en: "Solution: assign twice",
              hi: "हल: दो बार assign",
              hg: "Solution: do baar assign"
            },
            src: "using System.Net;\nusing System.Net.Http.Json;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\nusing Xunit;\n\nawait RunAsync(\"POST assign on open ticket returns 200 and sends one SMS\", async () =>\n{\n    var sms = new FakeNotifier();                         // only the outside world is replaced\n    await using var app = await StartApp(sms);\n    using var client = app.GetTestClient();\n\n    var response = await client.PostAsJsonAsync(\"/tickets/501/assign\", new AssignRequest(\"Meena\"));\n\n    Assert.Equal(HttpStatusCode.OK, response.StatusCode);\n    Assert.Equal(\"Ticket 501 assigned to Meena\", sms.Sent.Single());\n});\n\nawait RunAsync(\"POST assign on closed ticket returns 409 and sends nothing\", async () =>\n{\n    var sms = new FakeNotifier();\n    await using var app = await StartApp(sms);\n    using var client = app.GetTestClient();\n\n    var response = await client.PostAsJsonAsync(\"/tickets/502/assign\", new AssignRequest(\"Kiran\"));\n\n    Assert.Equal(HttpStatusCode.Conflict, response.StatusCode);\n    Assert.Empty(sms.Sent);\n});\n\nawait RunAsync(\"POST assign twice sends two SMS\", async () =>\n{\n    var sms = new FakeNotifier();\n    await using var app = await StartApp(sms);\n    using var client = app.GetTestClient();\n\n    await client.PostAsJsonAsync(\"/tickets/501/assign\", new AssignRequest(\"Meena\"));\n    await client.PostAsJsonAsync(\"/tickets/501/assign\", new AssignRequest(\"Kiran\"));\n\n    Assert.Equal(2, sms.Sent.Count);\n});\n\n// The app under test. Routing, JSON binding and DI are real; only INotifier is swapped.\nstatic async Task<WebApplication> StartApp(INotifier notifier)\n{\n    var builder = WebApplication.CreateBuilder();\n    builder.Logging.ClearProviders();\n    builder.WebHost.UseTestServer();                      // in memory: no port, no network\n    builder.Services.AddSingleton(notifier);\n    builder.Services.AddSingleton<TicketService>();\n    builder.Services.AddSingleton(new Dictionary<int, SupportTicket>\n    {\n        [501] = new() { Id = 501, Customer = \"Asha\" },\n        [502] = new() { Id = 502, Customer = \"Ravi\", Status = TicketStatus.Closed }\n    });\n\n    var app = builder.Build();\n    app.MapPost(\"/tickets/{id:int}/assign\", (int id, AssignRequest request,\n        Dictionary<int, SupportTicket> tickets, TicketService service) =>\n    {\n        if (!tickets.TryGetValue(id, out var ticket)) return Results.NotFound();\n        try { service.Assign(ticket, request.Agent); return Results.Ok(ticket); }\n        catch (InvalidOperationException) { return Results.Conflict(); }\n    });\n\n    await app.StartAsync();\n    return app;\n}\n\nstatic async Task RunAsync(string name, Func<Task> test)\n{\n    try { await test(); Console.WriteLine($\"PASS {name}\"); }\n    catch (Exception e) { Console.WriteLine($\"FAIL {name}: {e.Message.Split('\\n')[0]}\"); }\n}\n\npublic record AssignRequest(string Agent);\n\npublic class FakeNotifier : INotifier\n{\n    public List<string> Sent { get; } = new();\n    public void Send(string to, string message) => Sent.Add(message);\n}\n\npublic enum TicketStatus { Open, Assigned, Closed }\n\npublic class SupportTicket\n{\n    public int Id { get; set; }                public string Customer { get; set; } = \"\";\n    public TicketStatus Status { get; set; }   public string? Agent { get; set; }\n}\n\npublic interface INotifier { void Send(string to, string message); }\n\npublic class TicketService(INotifier notifier)\n{\n    public void Assign(SupportTicket ticket, string agent)\n    {\n        if (ticket.Status == TicketStatus.Closed) throw new InvalidOperationException(\"Ticket is closed\");\n        ticket.Agent = agent;\n        ticket.Status = TicketStatus.Assigned;\n        notifier.Send(ticket.Customer, $\"Ticket {ticket.Id} assigned to {agent}\");\n    }\n}",
            check: "run",
            expected: "PASS POST assign on open ticket returns 200 and sends one SMS\nPASS POST assign on closed ticket returns 409 and sends nothing\nPASS POST assign twice sends two SMS",
            packages: [
              "xunit.v3.assert@4.0.2",
              "Microsoft.AspNetCore.TestHost@9.*"
            ],
            frameworks: [
              "aspnetcore"
            ]
          }
        },
        quiz: {
          q: {
            en: "In the API tests above, what is replaced by a fake?",
            hi: "ऊपर के API tests में fake से क्या बदला गया है?",
            hg: "Upar ke API tests mein fake se kya badla gaya hai?"
          },
          options: [
            {
              en: "Only <code>INotifier</code>; routing, JSON and DI stay real",
              hi: "सिर्फ़ <code>INotifier</code>; routing, JSON और DI असली रहते हैं",
              hg: "Sirf <code>INotifier</code>; routing, JSON aur DI asli rehte hain"
            },
            {
              en: "The whole web server and all services",
              hi: "पूरा web server और सारी services",
              hg: "Poora web server aur saari services"
            },
            {
              en: "The <code>HttpClient</code> and the routing",
              hi: "<code>HttpClient</code> और routing",
              hg: "<code>HttpClient</code> aur routing"
            },
            {
              en: "Nothing; a real SMS is sent",
              hi: "कुछ नहीं; असली SMS जाता है",
              hg: "Kuch nahi; asli SMS jaata hai"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>The server is an in-memory <i>host</i> of the real pipeline, not a fake. Only the outside dependency (<code>INotifier</code>) is replaced, so the test still proves the route, the JSON and the DI wiring.</p>",
            hi: "<p>Server असली pipeline का memory वाला <i>host</i> है, fake नहीं। सिर्फ़ बाहरी dependency (<code>INotifier</code>) बदली गई है, इसलिए test अब भी route, JSON और DI की wiring साबित करता है।</p>",
            hg: "<p>Server asli pipeline ka memory wala <i>host</i> hai, fake nahi. Sirf baahri dependency (<code>INotifier</code>) badli gayi hai, isliye test ab bhi route, JSON aur DI ki wiring saabit karta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>API test = real app in memory plus an in-memory <code>HttpClient</code>; no port needed.</li><li>Replace only the outside world; keep routing, JSON and DI real.</li></ul>",
          hi: "<ul><li>API test = memory में असली app और memory वाला <code>HttpClient</code>; port नहीं चाहिए।</li><li>सिर्फ़ बाहरी दुनिया बदलो; routing, JSON और DI असली रखो।</li></ul>",
          hg: "<ul><li>API test = memory mein asli app aur memory wala <code>HttpClient</code>; port nahi chahiye.</li><li>Sirf baahri duniya badlo; routing, JSON aur DI asli rakho.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Three API tests with TestServer and a fake INotifier",
            hi: "TestServer और fake INotifier के साथ तीन API tests",
            hg: "TestServer aur fake INotifier ke saath teen API tests"
          },
          src: "using System.Net;\nusing System.Net.Http.Json;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\nusing Xunit;\n\nawait RunAsync(\"POST assign on open ticket returns 200 and sends one SMS\", async () =>\n{\n    var sms = new FakeNotifier();                         // only the outside world is replaced\n    await using var app = await StartApp(sms);\n    using var client = app.GetTestClient();\n\n    var response = await client.PostAsJsonAsync(\"/tickets/501/assign\", new AssignRequest(\"Meena\"));\n\n    Assert.Equal(HttpStatusCode.OK, response.StatusCode);\n    Assert.Equal(\"Ticket 501 assigned to Meena\", sms.Sent.Single());\n});\n\nawait RunAsync(\"POST assign on closed ticket returns 409 and sends nothing\", async () =>\n{\n    var sms = new FakeNotifier();\n    await using var app = await StartApp(sms);\n    using var client = app.GetTestClient();\n\n    var response = await client.PostAsJsonAsync(\"/tickets/502/assign\", new AssignRequest(\"Kiran\"));\n\n    Assert.Equal(HttpStatusCode.Conflict, response.StatusCode);\n    Assert.Empty(sms.Sent);\n});\n\n// The app under test. Routing, JSON binding and DI are real; only INotifier is swapped.\nstatic async Task<WebApplication> StartApp(INotifier notifier)\n{\n    var builder = WebApplication.CreateBuilder();\n    builder.Logging.ClearProviders();\n    builder.WebHost.UseTestServer();                      // in memory: no port, no network\n    builder.Services.AddSingleton(notifier);\n    builder.Services.AddSingleton<TicketService>();\n    builder.Services.AddSingleton(new Dictionary<int, SupportTicket>\n    {\n        [501] = new() { Id = 501, Customer = \"Asha\" },\n        [502] = new() { Id = 502, Customer = \"Ravi\", Status = TicketStatus.Closed }\n    });\n\n    var app = builder.Build();\n    app.MapPost(\"/tickets/{id:int}/assign\", (int id, AssignRequest request,\n        Dictionary<int, SupportTicket> tickets, TicketService service) =>\n    {\n        if (!tickets.TryGetValue(id, out var ticket)) return Results.NotFound();\n        try { service.Assign(ticket, request.Agent); return Results.Ok(ticket); }\n        catch (InvalidOperationException) { return Results.Conflict(); }\n    });\n\n    await app.StartAsync();\n    return app;\n}\n\nstatic async Task RunAsync(string name, Func<Task> test)\n{\n    try { await test(); Console.WriteLine($\"PASS {name}\"); }\n    catch (Exception e) { Console.WriteLine($\"FAIL {name}: {e.Message.Split('\\n')[0]}\"); }\n}\n\npublic record AssignRequest(string Agent);\n\npublic class FakeNotifier : INotifier\n{\n    public List<string> Sent { get; } = new();\n    public void Send(string to, string message) => Sent.Add(message);\n}\n\npublic enum TicketStatus { Open, Assigned, Closed }\n\npublic class SupportTicket\n{\n    public int Id { get; set; }                public string Customer { get; set; } = \"\";\n    public TicketStatus Status { get; set; }   public string? Agent { get; set; }\n}\n\npublic interface INotifier { void Send(string to, string message); }\n\npublic class TicketService(INotifier notifier)\n{\n    public void Assign(SupportTicket ticket, string agent)\n    {\n        if (ticket.Status == TicketStatus.Closed) throw new InvalidOperationException(\"Ticket is closed\");\n        ticket.Agent = agent;\n        ticket.Status = TicketStatus.Assigned;\n        notifier.Send(ticket.Customer, $\"Ticket {ticket.Id} assigned to {agent}\");\n    }\n}",
          check: "run",
          expected: "PASS POST assign on open ticket returns 200 and sends one SMS\nPASS POST assign on closed ticket returns 409 and sends nothing",
          packages: [
            "xunit.v3.assert@4.0.2",
            "Microsoft.AspNetCore.TestHost@9.*"
          ],
          frameworks: [
            "aspnetcore"
          ]
        }
      ]
    },
    {
      id: "flaky-tests-time",
      depth: "short",
      title: {
        en: "Flaky tests: time and shared state",
        hi: "Flaky tests: समय और shared state",
        hg: "Flaky tests: samay aur shared state"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 2-4 gave you stand-ins for SMS, the database and HTTP. Two more hidden inputs make tests flaky: the clock and shared static state. Days 1 and 8 introduced <code>TimeProvider</code>; here we inject it into an SLA check and drive it with <code>FakeTimeProvider</code>.",
          hi: "पाठ 2-4 में SMS, database और HTTP के stand-ins मिले। दो और छुपे inputs tests को flaky बनाते हैं: घड़ी और shared static state। Days 1 और 8 में <code>TimeProvider</code> आया था; यहाँ उसे SLA check में inject करते हैं और <code>FakeTimeProvider</code> से चलाते हैं।",
          hg: "Lessons 2-4 mein SMS, database aur HTTP ke stand-ins mile. Do aur chhupe inputs tests ko flaky banate hain: ghadi aur shared static state. Days 1 aur 8 mein <code>TimeProvider</code> aaya tha; yahan use SLA check mein inject karte hain aur <code>FakeTimeProvider</code> se chalate hain."
        },
        what: {
          en: "<p>A <b>flaky test</b> passes and fails with no code change. Common causes: the real clock or <code>Thread.Sleep</code>, shared static state and test order, random data, the real network, and async work that is not awaited.</p><p>Fix the <i>cause</i>. For time, inject <code>TimeProvider</code> and let the test move a <code>FakeTimeProvider</code> by hand. For order, give every test its own state.</p>",
          hi: "<p><b>Flaky test</b> बिना code बदले कभी pass और कभी fail होता है। आम वजहें: असली घड़ी या <code>Thread.Sleep</code>, shared static state और tests का order, random data, असली network, और ऐसा async काम जिसका await नहीं हुआ।</p><p><i>वजह</i> को ठीक करो। समय के लिए <code>TimeProvider</code> inject करो और test को <code>FakeTimeProvider</code> हाथ से आगे बढ़ाने दो। Order के लिए हर test को अपनी state दो।</p>",
          hg: "<p><b>Flaky test</b> bina code badle kabhi pass aur kabhi fail hota hai. Aam wajahein: asli ghadi ya <code>Thread.Sleep</code>, shared static state aur tests ka order, random data, asli network, aur aisa async kaam jiska await nahi hua.</p><p><i>Wajah</i> ko theek karo. Samay ke liye <code>TimeProvider</code> inject karo aur test ko <code>FakeTimeProvider</code> haath se aage badhane do. Order ke liye har test ko apni state do.</p>"
        },
        why: {
          en: "<p>A flaky test is worse than no test. The team learns to say \"just re-run it\" and soon a real failure is ignored too. A red build must always mean \"something is broken\".</p>",
          hi: "<p>Flaky test बिना test से भी बुरा है। Team कहना सीख जाती है \"बस दोबारा चला लो\", और जल्दी ही असली failure भी नज़रअंदाज़ होने लगता है। Red build का मतलब हमेशा \"कुछ टूटा है\" होना चाहिए।</p>",
          hg: "<p>Flaky test bina test se bhi bura hai. Team kehna seekh jaati hai \"bas dobara chala lo\", aur jaldi hi asli failure bhi nazarandaaz hone lagta hai. Red build ka matlab hamesha \"kuch toota hai\" hona chahiye.</p>"
        },
        analogy: {
          en: "<p>A school bell: to test \"the 4 pm rule\" with the real clock you must wait for the real bell, and you can never test the exact second. With a fake clock you ring the bell yourself, exactly at 4:00:00, as often as you like.</p>",
          hi: "<p>School की घंटी: \"4 बजे वाले rule\" को असली घड़ी से test करना हो तो असली घंटी का इंतज़ार करना पड़ता है, और ठीक उस second को कभी test नहीं कर सकते। Fake घड़ी से घंटी आप ख़ुद बजाते हो, ठीक 4:00:00 पर, जितनी बार चाहो।</p>",
          hg: "<p>School ki ghanti: \"4 baje wale rule\" ko asli ghadi se test karna ho to asli ghanti ka intezaar karna padta hai, aur theek us second ko kabhi test nahi kar sakte. Fake ghadi se ghanti aap khud bajaate ho, theek 4:00:00 par, jitni baar chaho.</p>"
        },
        focus: {
          caption: {
            en: "FLAKY - do not copy: the clock moves between two lines",
            hi: "FLAKY - copy मत करो: दो lines के बीच घड़ी आगे बढ़ जाती है",
            hg: "FLAKY - copy mat karo: do lines ke beech ghadi aage badh jaati hai"
          },
          src: "public bool IsBreached(DateTime openedAt) =>\n    DateTime.UtcNow - openedAt > TimeSpan.FromHours(4);   // hidden clock\n\nvar opened = DateTime.UtcNow.AddHours(-4);               // \"exactly 4 hours ago\"\nAssert.False(policy.IsBreached(opened));                  // a few ticks later it IS breached",
          check: "none"
        },
        lines: [
          {
            code: "public class SlaPolicy(TimeProvider clock)",
            note: {
              en: "The clock is a <b>constructor parameter</b>. Production passes <code>TimeProvider.System</code>; a test passes a fake.",
              hi: "घड़ी <b>constructor parameter</b> है। Production में <code>TimeProvider.System</code> जाता है; test में fake।",
              hg: "Ghadi <b>constructor parameter</b> hai. Production mein <code>TimeProvider.System</code> jaata hai; test mein fake."
            }
          },
          {
            code: "public bool IsBreached(DateTimeOffset openedAt) => clock.GetUtcNow() - openedAt > TimeSpan.FromHours(4);",
            note: {
              en: "No <code>DateTime.UtcNow</code> inside the logic. The rule is \"more than 4 hours\", so exactly 4 hours is <i>not</i> breached.",
              hi: "Logic के अंदर <code>DateTime.UtcNow</code> नहीं। Rule है \"4 घंटे से ज़्यादा\", इसलिए ठीक 4 घंटे पर breach <i>नहीं</i> है।",
              hg: "Logic ke andar <code>DateTime.UtcNow</code> nahi. Rule hai \"4 ghante se zyaada\", isliye theek 4 ghante par breach <i>nahi</i> hai."
            }
          },
          {
            code: "var clock = new FakeTimeProvider(new DateTimeOffset(2026, 3, 2, 9, 0, 0, TimeSpan.Zero));",
            note: {
              en: "A clock that stands still at 09:00. It only moves when the test says so. A new clock is made for every test.",
              hi: "ऐसी घड़ी जो 09:00 पर रुकी है। वह तभी चलती है जब test कहे। हर test के लिए नई घड़ी बनती है।",
              hg: "Aisi ghadi jo 09:00 par ruki hai. Wo tabhi chalti hai jab test kahe. Har test ke liye nayi ghadi banti hai."
            }
          },
          {
            code: "clock.Advance(TimeSpan.FromHours(4));",
            note: {
              en: "Jump exactly 4 hours in zero time: no sleeping, and the boundary case is finally testable.",
              hi: "बिना इंतज़ार के ठीक 4 घंटे आगे: sleep नहीं, और boundary वाला case आख़िर test हो पाता है।",
              hg: "Bina intezaar ke theek 4 ghante aage: sleep nahi, aur boundary wala case aakhir test ho paata hai."
            }
          },
          {
            code: "for (var i = 0; i < 2; i++) Run(\"FirstTicketGets501 (static counter)\", () => Assert.Equal(501, StaticIds.Next()));",
            note: {
              en: "Both runs expect the first id, but a <code>static</code> counter remembers the previous run. The second one fails. In real life this shows up as a test that fails depending on who ran before it.",
              hi: "दोनों runs पहली id की उम्मीद करते हैं, पर <code>static</code> counter पिछला run याद रखता है। दूसरा fail होता है। असल ज़िंदगी में यह ऐसे test के रूप में दिखता है जो इस पर निर्भर है कि उससे पहले कौन चला।",
              hg: "Dono runs pehli id ki ummeed karte hain, par <code>static</code> counter pichhla run yaad rakhta hai. Doosra fail hota hai. Asal zindagi mein ye aise test ke roop mein dikhta hai jo is par nirbhar hai ki usse pehle kaun chala."
            }
          },
          {
            code: "Assert.Equal(501, new TicketIds().Next())",
            note: {
              en: "The fix: each test makes its own counter, so the order never matters.",
              hi: "Fix: हर test अपना counter बनाता है, इसलिए order से फ़र्क नहीं पड़ता।",
              hg: "Fix: har test apna counter banata hai, isliye order se farq nahi padta."
            }
          }
        ],
        mistakes: {
          en: "<ul><li><code>Thread.Sleep</code> or <code>Task.Delay</code> in a test to \"wait for the time\". It is slow and still not exact.</li><li>Sharing <code>static</code> fields or one database between tests. Order starts to matter.</li></ul>",
          hi: "<ul><li>\"समय गुज़रने का इंतज़ार\" करने के लिए test में <code>Thread.Sleep</code> या <code>Task.Delay</code>। यह धीमा है और फिर भी सटीक नहीं।</li><li>Tests के बीच <code>static</code> fields या एक database share करना। Order मायने रखने लगता है।</li></ul>",
          hg: "<ul><li>\"Samay guzarne ka intezaar\" karne ke liye test mein <code>Thread.Sleep</code> ya <code>Task.Delay</code>. Ye dheema hai aur phir bhi sateek nahi.</li><li>Tests ke beech <code>static</code> fields ya ek database share karna. Order maayne rakhne lagta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Inject <code>TimeProvider</code> into any code that has deadlines, expiry or SLA rules, and into retry or cache logic. Give every test its own objects. If a flaky test cannot be fixed today, quarantine it with an owner (lesson 6) instead of ignoring it.</p>",
          hi: "<p>जिस code में deadlines, expiry या SLA rules हैं, और retry या cache logic में, <code>TimeProvider</code> inject करो। हर test को अपने objects दो। अगर flaky test आज ठीक नहीं हो सकता, तो उसे नज़रअंदाज़ करने की जगह owner के साथ quarantine करो (पाठ 6)।</p>",
          hg: "<p>Jis code mein deadlines, expiry ya SLA rules hain, aur retry ya cache logic mein, <code>TimeProvider</code> inject karo. Har test ko apne objects do. Agar flaky test aaj theek nahi ho sakta, to use nazarandaaz karne ki jagah owner ke saath quarantine karo (lesson 6).</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a test <code>Breached_FiveHours_IsTrue</code>: five hours after opening, the ticket is breached.</p>",
            hi: "<p>एक test जोड़ो <code>Breached_FiveHours_IsTrue</code>: खुलने के पाँच घंटे बाद ticket breach हो चुका है।</p>",
            hg: "<p>Ek test jodo <code>Breached_FiveHours_IsTrue</code>: khulne ke paanch ghante baad ticket breach ho chuka hai.</p>"
          },
          hint: {
            en: "<p>Copy the one-tick test, call <code>Arrange()</code>, advance by 5 hours and use <code>Assert.True</code>.</p>",
            hi: "<p>One-tick वाला test copy करो, <code>Arrange()</code> call करो, 5 घंटे आगे बढ़ाओ और <code>Assert.True</code> लगाओ।</p>",
            hg: "<p>One-tick wala test copy karo, <code>Arrange()</code> call karo, 5 ghante aage badhao aur <code>Assert.True</code> lagao.</p>"
          },
          solution: {
            caption: {
              en: "Solution: five hours later",
              hi: "हल: पाँच घंटे बाद",
              hg: "Solution: paanch ghante baad"
            },
            src: "using Microsoft.Extensions.Time.Testing;\nusing Xunit;\n\n// Time: each test owns its clock, so it never sleeps. Ticket 501 (High = 4 hours) opens at 09:00.\nRun(\"Breached_ExactlyAtLimit_IsFalse\", () =>\n{\n    var (clock, sla, opened) = Arrange();\n\n    clock.Advance(TimeSpan.FromHours(4));\n\n    Assert.False(sla.IsBreached(opened));\n});\n\nRun(\"Breached_OneTickPastLimit_IsTrue\", () =>\n{\n    var (clock, sla, opened) = Arrange();\n\n    clock.Advance(TimeSpan.FromHours(4) + TimeSpan.FromTicks(1));\n\n    Assert.True(sla.IsBreached(opened));\n});\n\nRun(\"Breached_FiveHours_IsTrue\", () =>\n{\n    var (clock, sla, opened) = Arrange();\n    clock.Advance(TimeSpan.FromHours(5));\n    Assert.True(sla.IsBreached(opened));\n});\n\n// Order: tests that share a static counter depend on who ran before them.\nfor (var i = 0; i < 2; i++) Run(\"FirstTicketGets501 (static counter)\", () => Assert.Equal(501, StaticIds.Next()));\nfor (var i = 0; i < 2; i++) Run(\"FirstTicketGets501 (own counter)\", () => Assert.Equal(501, new TicketIds().Next()));\n\nstatic (FakeTimeProvider Clock, SlaPolicy Sla, DateTimeOffset OpenedAt) Arrange()\n{\n    var clock = new FakeTimeProvider(new DateTimeOffset(2026, 3, 2, 9, 0, 0, TimeSpan.Zero));\n    return (clock, new SlaPolicy(clock), clock.GetUtcNow());\n}\n\nstatic void Run(string name, Action test)\n{\n    try { test(); Console.WriteLine($\"PASS {name}\"); }\n    catch (Exception e) { Console.WriteLine($\"FAIL {name}: {e.Message.Split('\\n')[0]}\"); }\n}\n\npublic class SlaPolicy(TimeProvider clock)\n{\n    public bool IsBreached(DateTimeOffset openedAt) => clock.GetUtcNow() - openedAt > TimeSpan.FromHours(4);\n}\n\npublic static class StaticIds { private static int _last = 500; public static int Next() => ++_last; }\npublic class TicketIds { private int _last = 500; public int Next() => ++_last; }",
            check: "run",
            expected: "PASS Breached_ExactlyAtLimit_IsFalse\nPASS Breached_OneTickPastLimit_IsTrue\nPASS Breached_FiveHours_IsTrue\nPASS FirstTicketGets501 (static counter)\nFAIL FirstTicketGets501 (static counter): Assert.Equal() Failure: Values differ\nPASS FirstTicketGets501 (own counter)\nPASS FirstTicketGets501 (own counter)",
            packages: [
              "xunit.v3.assert@4.0.2",
              "Microsoft.Extensions.TimeProvider.Testing@9.*"
            ]
          }
        },
        quiz: {
          q: {
            en: "A test calls <code>Thread.Sleep(1100)</code> to wait for a session to expire after 1 second. What is the best fix?",
            hi: "एक test session के 1 second बाद expire होने का इंतज़ार करने के लिए <code>Thread.Sleep(1100)</code> call करता है। सबसे अच्छा fix क्या है?",
            hg: "Ek test session ke 1 second baad expire hone ka intezaar karne ke liye <code>Thread.Sleep(1100)</code> call karta hai. Sabse achha fix kya hai?"
          },
          options: [
            {
              en: "Add a retry attribute so it runs three times",
              hi: "Retry attribute लगाओ ताकि तीन बार चले",
              hg: "Retry attribute lagao taaki teen baar chale"
            },
            {
              en: "Increase the sleep to 3000 ms to be safe",
              hi: "सुरक्षा के लिए sleep को 3000 ms कर दो",
              hg: "Suraksha ke liye sleep ko 3000 ms kar do"
            },
            {
              en: "Inject <code>TimeProvider</code> and call <code>Advance</code> on a <code>FakeTimeProvider</code>",
              hi: "<code>TimeProvider</code> inject करो और <code>FakeTimeProvider</code> पर <code>Advance</code> call करो",
              hg: "<code>TimeProvider</code> inject karo aur <code>FakeTimeProvider</code> par <code>Advance</code> call karo"
            },
            {
              en: "Run it only on the nightly build",
              hi: "इसे सिर्फ़ nightly build में चलाओ",
              hg: "Ise sirf nightly build mein chalao"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>A longer sleep only makes the test slower, and retries hide the problem. Owning the clock removes the waiting and the machine-speed dependence for good.</p>",
            hi: "<p>लंबा sleep सिर्फ़ test को धीमा करता है, और retry समस्या छुपाता है। घड़ी अपने हाथ में लेने से इंतज़ार और machine की speed पर निर्भरता हमेशा के लिए ख़त्म हो जाती है।</p>",
            hg: "<p>Lamba sleep sirf test ko dheema karta hai, aur retry samasya chhupata hai. Ghadi apne haath mein lene se intezaar aur machine ki speed par nirbhartaa hamesha ke liye khatam ho jaati hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Flaky causes: real clock and sleeps, shared static state and order, real network, random data.</li><li>Inject <code>TimeProvider</code>; in tests use <code>FakeTimeProvider.Advance</code> and never sleep.</li></ul>",
          hi: "<ul><li>Flaky की वजहें: असली घड़ी और sleeps, shared static state और order, असली network, random data।</li><li><code>TimeProvider</code> inject करो; tests में <code>FakeTimeProvider.Advance</code> लो और कभी sleep मत करो।</li></ul>",
          hg: "<ul><li>Flaky ki wajahein: asli ghadi aur sleeps, shared static state aur order, asli network, random data.</li><li><code>TimeProvider</code> inject karo; tests mein <code>FakeTimeProvider.Advance</code> lo aur kabhi sleep mat karo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "SLA tests with a fake clock, and a static-state flake",
            hi: "Fake घड़ी वाले SLA tests, और static-state वाला flake",
            hg: "Fake ghadi wale SLA tests, aur static-state wala flake"
          },
          src: "using Microsoft.Extensions.Time.Testing;\nusing Xunit;\n\n// Time: each test owns its clock, so it never sleeps. Ticket 501 (High = 4 hours) opens at 09:00.\nRun(\"Breached_ExactlyAtLimit_IsFalse\", () =>\n{\n    var (clock, sla, opened) = Arrange();\n\n    clock.Advance(TimeSpan.FromHours(4));\n\n    Assert.False(sla.IsBreached(opened));\n});\n\nRun(\"Breached_OneTickPastLimit_IsTrue\", () =>\n{\n    var (clock, sla, opened) = Arrange();\n\n    clock.Advance(TimeSpan.FromHours(4) + TimeSpan.FromTicks(1));\n\n    Assert.True(sla.IsBreached(opened));\n});\n\n// Order: tests that share a static counter depend on who ran before them.\nfor (var i = 0; i < 2; i++) Run(\"FirstTicketGets501 (static counter)\", () => Assert.Equal(501, StaticIds.Next()));\nfor (var i = 0; i < 2; i++) Run(\"FirstTicketGets501 (own counter)\", () => Assert.Equal(501, new TicketIds().Next()));\n\nstatic (FakeTimeProvider Clock, SlaPolicy Sla, DateTimeOffset OpenedAt) Arrange()\n{\n    var clock = new FakeTimeProvider(new DateTimeOffset(2026, 3, 2, 9, 0, 0, TimeSpan.Zero));\n    return (clock, new SlaPolicy(clock), clock.GetUtcNow());\n}\n\nstatic void Run(string name, Action test)\n{\n    try { test(); Console.WriteLine($\"PASS {name}\"); }\n    catch (Exception e) { Console.WriteLine($\"FAIL {name}: {e.Message.Split('\\n')[0]}\"); }\n}\n\npublic class SlaPolicy(TimeProvider clock)\n{\n    public bool IsBreached(DateTimeOffset openedAt) => clock.GetUtcNow() - openedAt > TimeSpan.FromHours(4);\n}\n\npublic static class StaticIds { private static int _last = 500; public static int Next() => ++_last; }\npublic class TicketIds { private int _last = 500; public int Next() => ++_last; }",
          check: "run",
          expected: "PASS Breached_ExactlyAtLimit_IsFalse\nPASS Breached_OneTickPastLimit_IsTrue\nPASS FirstTicketGets501 (static counter)\nFAIL FirstTicketGets501 (static counter): Assert.Equal() Failure: Values differ\nPASS FirstTicketGets501 (own counter)\nPASS FirstTicketGets501 (own counter)",
          packages: [
            "xunit.v3.assert@4.0.2",
            "Microsoft.Extensions.TimeProvider.Testing@9.*"
          ]
        }
      ]
    },
    {
      id: "team-test-strategy",
      depth: "short",
      title: {
        en: "A team test strategy: categories, quarantine, rules",
        hi: "Team की test strategy: categories, quarantine, rules",
        hg: "Team ki test strategy: categories, quarantine, rules"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 1-5 gave you unit, database and API tests, with doubles and a fake clock. As a Tech Lead you now decide how the team <i>runs</i> them. The Day 21 pipeline already runs <code>dotnet test</code> on every pull request, and lesson 5 said a flaky test needs an owner. This lesson turns both into rules.",
          hi: "पाठ 1-5 में unit, database और API tests मिले, doubles और fake घड़ी के साथ। Tech Lead के तौर पर अब आप तय करते हो कि team उन्हें <i>चलाए</i> कैसे। Day 21 की pipeline हर pull request पर पहले से <code>dotnet test</code> चलाती है, और पाठ 5 ने कहा था कि flaky test का owner चाहिए। यह पाठ दोनों को rules में बदलता है।",
          hg: "Lessons 1-5 mein unit, database aur API tests mile, doubles aur fake ghadi ke saath. Tech Lead ke taur par ab aap tay karte ho ki team unhein <i>chalaye</i> kaise. Day 21 ki pipeline har pull request par pehle se <code>dotnet test</code> chalati hai, aur lesson 5 ne kaha tha ki flaky test ka owner chahiye. Ye lesson dono ko rules mein badalta hai."
        },
        what: {
          en: "<p>A team test strategy is a few simple, checkable rules: tag tests with a <b>category</b>; run fast tests on every pull request and slow ones nightly; <b>quarantine</b> a flaky test with an owner and a ticket so it stops blocking everyone but stays visible; and agree one hard rule, such as \"every bug fix comes with a test that failed before the fix\".</p>",
          hi: "<p>Team test strategy कुछ सीधे, जाँचे जा सकने वाले rules हैं: tests पर <b>category</b> का tag लगाओ; fast tests हर pull request पर और slow tests रात में चलाओ; flaky test को owner और ticket के साथ <b>quarantine</b> करो ताकि वह सबको रोकना बंद करे पर दिखता रहे; और एक पक्का rule तय करो, जैसे \"हर bug fix के साथ ऐसा test हो जो fix से पहले fail होता था\"।</p>",
          hg: "<p>Team test strategy kuch seedhe, jaanche ja sakne wale rules hain: tests par <b>category</b> ka tag lagao; fast tests har pull request par aur slow tests raat mein chalao; flaky test ko owner aur ticket ke saath <b>quarantine</b> karo taaki wo sabko rokna band kare par dikhta rahe; aur ek pakka rule tay karo, jaise \"har bug fix ke saath aisa test ho jo fix se pehle fail hota tha\".</p>"
        },
        why: {
          en: "<p>Without rules, the pull-request build takes 40 minutes and people stop waiting for it. One flaky test makes red builds feel normal. Rules written as code (filters, tags, an owner field) are easier to follow than rules written in a wiki.</p>",
          hi: "<p>Rules के बिना pull-request build 40 minutes लेता है और लोग उसका इंतज़ार करना छोड़ देते हैं। एक flaky test red builds को आम बना देता है। Code के रूप में लिखे rules (filters, tags, owner field) wiki में लिखे rules से आसानी से निभते हैं।</p>",
          hg: "<p>Rules ke bina pull-request build 40 minutes leta hai aur log uska intezaar karna chhod dete hain. Ek flaky test red builds ko aam bana deta hai. Code ke roop mein likhe rules (filters, tags, owner field) wiki mein likhe rules se aasaani se nibhte hain.</p>"
        },
        analogy: {
          en: "<p>Think of metro station security. Every passenger goes through the quick bag scan (the pull-request job). Only some get the detailed check (the nightly job). If a scanner is faulty, it gets a tag with the engineer's name and a ticket number. It is not ignored and it does not stop the whole line.</p>",
          hi: "<p>Metro station की security सोचो। हर यात्री quick bag scan से गुज़रता है (pull-request job)। कुछ का ही detailed check होता है (nightly job)। अगर कोई scanner ख़राब है, तो उस पर engineer के नाम और ticket number का tag लगता है। उसे नज़रअंदाज़ नहीं किया जाता और वह पूरी line भी नहीं रोकता।</p>",
          hg: "<p>Metro station ki security socho. Har yaatri quick bag scan se guzarta hai (pull-request job). Kuch ka hi detailed check hota hai (nightly job). Agar koi scanner kharab hai, to us par engineer ke naam aur ticket number ka tag lagta hai. Use nazarandaaz nahi kiya jaata aur wo poori line bhi nahi rokta.</p>"
        },
        lines: [
          {
            code: "new(\"Db_OpenFor_RunsAsRealSql\", \"Integration\"",
            note: {
              en: "Each test carries a <b>category</b>. This slow database test is tagged <code>Integration</code>; in xUnit you write <code>[Trait(\"Category\", \"Integration\")]</code>.",
              hi: "हर test के पास एक <b>category</b> है। यह धीमा database test <code>Integration</code> tag वाला है; xUnit में <code>[Trait(\"Category\", \"Integration\")]</code> लिखते हैं।",
              hg: "Har test ke paas ek <b>category</b> hai. Ye dheema database test <code>Integration</code> tag wala hai; xUnit mein <code>[Trait(\"Category\", \"Integration\")]</code> likhte hain."
            }
          },
          {
            code: "new Quarantine(\"Kiran\", \"QA-214\")),",
            note: {
              en: "The flaky test has a named <b>owner</b> and a <b>ticket</b>. Quarantine without an owner is just deleting the test slowly.",
              hi: "Flaky test का एक तय <b>owner</b> और एक <b>ticket</b> है। Owner के बिना quarantine, test को धीरे-धीरे हटाना ही है।",
              hg: "Flaky test ka ek tay <b>owner</b> aur ek <b>ticket</b> hai. Owner ke bina quarantine, test ko dheere-dheere hatana hi hai."
            }
          },
          {
            code: "RunJob(\"PR job: Category != Integration\", t => t.Category != \"Integration\")",
            note: {
              en: "The pull-request job runs everything except <code>Integration</code>. This matches <code>dotnet test --filter \"Category!=Integration\"</code> (VSTest; xUnit v3 on Microsoft.Testing.Platform: <code>--filter-not-trait \"Category=Integration\"</code>). Fast feedback, minutes not tens of minutes.",
              hi: "Pull-request job <code>Integration</code> छोड़कर सब चलाता है। यह <code>dotnet test --filter \"Category!=Integration\"</code> जैसा है (VSTest; Microsoft.Testing.Platform पर xUnit v3: <code>--filter-not-trait \"Category=Integration\"</code>)। तेज़ feedback, दसियों minutes नहीं बल्कि कुछ minutes।",
              hg: "Pull-request job <code>Integration</code> chhodkar sab chalata hai. Ye <code>dotnet test --filter \"Category!=Integration\"</code> jaisa hai (VSTest; Microsoft.Testing.Platform par xUnit v3: <code>--filter-not-trait \"Category=Integration\"</code>). Tez feedback, dasiyon minutes nahi balki kuch minutes."
            }
          },
          {
            code: "catch (Exception e) when (test.Quarantine is { } q)",
            note: {
              en: "A quarantined test may fail, but the failure is reported with its owner and does <b>not</b> turn the build red.",
              hi: "Quarantine वाला test fail हो सकता है, पर failure owner के नाम के साथ report होता है और build को red <b>नहीं</b> करता।",
              hg: "Quarantine wala test fail ho sakta hai, par failure owner ke naam ke saath report hota hai aur build ko red <b>nahi</b> karta."
            }
          },
          {
            code: "red = true;",
            note: {
              en: "Any other failure turns the build red and blocks the merge. This is the rule that keeps a red build meaningful.",
              hi: "बाकी हर failure build को red करती है और merge रोकती है। इसी rule से red build का मतलब बना रहता है।",
              hg: "Baaki har failure build ko red karti hai aur merge rokti hai. Isi rule se red build ka matlab bana rehta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Quarantine with no owner and no ticket. The test is forgotten and the risk it covered is gone.</li><li>An automatic \"retry on failure\" attribute for everything. It hides flaky tests instead of fixing them.</li></ul>",
          hi: "<ul><li>बिना owner और बिना ticket का quarantine। Test भूल जाता है और जो risk वह ढकता था वह चला जाता है।</li><li>हर चीज़ पर अपने-आप \"fail हो तो retry\" वाला attribute। यह flaky tests को ठीक करने की जगह छुपाता है।</li></ul>",
          hg: "<ul><li>Bina owner aur bina ticket ka quarantine. Test bhool jaata hai aur jo risk wo dhakta tha wo chala jaata hai.</li><li>Har cheez par apne-aap \"fail ho to retry\" wala attribute. Ye flaky tests ko theek karne ki jagah chhupata hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Set up categories and the pull-request gate from day one. Quarantine a flaky test when you cannot fix it within a day, and give the ticket a deadline. Put container-heavy and long suites in a nightly job. Keep one short list of team rules in the pull-request template.</p>",
          hi: "<p>Categories और pull-request gate पहले दिन से लगाओ। Flaky test को तब quarantine करो जब एक दिन में ठीक न हो सके, और ticket को deadline दो। Container वाले भारी और लंबे suites nightly job में रखो। Team के rules की एक छोटी list pull-request template में रखो।</p>",
          hg: "<p>Categories aur pull-request gate pehle din se lagao. Flaky test ko tab quarantine karo jab ek din mein theek na ho sake, aur ticket ko deadline do. Container wale bhaari aur lambe suites nightly job mein rakho. Team ke rules ki ek chhoti list pull-request template mein rakho.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add an <code>Api</code> test <code>Api_AssignClosedTicket_Returns409</code> and a third job that runs only <code>Category == Api</code>.</p>",
            hi: "<p>एक <code>Api</code> test <code>Api_AssignClosedTicket_Returns409</code> जोड़ो और एक तीसरा job जो सिर्फ़ <code>Category == Api</code> चलाए।</p>",
            hg: "<p>Ek <code>Api</code> test <code>Api_AssignClosedTicket_Returns409</code> jodo aur ek teesra job jo sirf <code>Category == Api</code> chalaye.</p>"
          },
          hint: {
            en: "<p>Add one <code>new(...)</code> line to the list and one <code>Console.WriteLine(RunJob(...))</code> line with its own filter.</p>",
            hi: "<p>List में एक <code>new(...)</code> line जोड़ो और अपने filter के साथ एक <code>Console.WriteLine(RunJob(...))</code> line।</p>",
            hg: "<p>List mein ek <code>new(...)</code> line jodo aur apne filter ke saath ek <code>Console.WriteLine(RunJob(...))</code> line.</p>"
          },
          solution: {
            caption: {
              en: "Solution: an Api category and job",
              hi: "हल: Api category और job",
              hg: "Solution: Api category aur job"
            },
            src: "// A test runner with the two controls a TL needs: a category filter and quarantine.\nvar tests = new List<TestCase>\n{\n    new(\"Sla_ExactlyAtLimit_NotBreached\", \"Unit\", () => Expect(!Sla.IsBreached(4))),\n    new(\"Sla_OneHourOver_IsBreached\", \"Unit\", () => Expect(Sla.IsBreached(5))),\n    new(\"Db_OpenFor_RunsAsRealSql\", \"Integration\", () => Expect(Sla.HoursFor(\"High\") == 4)),   // stands in for a slow database test\n    new(\"Api_AssignClosedTicket_Returns409\", \"Api\", () => Expect(Sla.IsBreached(9))),\n    new(\"Notify_Retry_SometimesFails\", \"Unit\", () => throw new TimeoutException(\"timed out\"),\n        new Quarantine(\"Kiran\", \"QA-214\")),\n};\n\nConsole.WriteLine(RunJob(\"PR job: Category != Integration\", t => t.Category != \"Integration\"));\nConsole.WriteLine(RunJob(\"Api job: Category == Api\", t => t.Category == \"Api\"));\nConsole.WriteLine(RunJob(\"Nightly job: everything\", _ => true));\n\nstring RunJob(string name, Func<TestCase, bool> filter)\n{\n    Console.WriteLine($\"== {name}\");\n    var red = false;\n    foreach (var test in tests.Where(filter))\n    {\n        try { test.Body(); Console.WriteLine($\"  PASS {test.Name}\"); }\n        catch (Exception e) when (test.Quarantine is { } q)\n        {\n            Console.WriteLine($\"  QUARANTINED {test.Name}: {e.Message} (owner {q.Owner}, {q.Ticket})\");\n        }\n        catch (Exception e) { red = true; Console.WriteLine($\"  FAIL {test.Name}: {e.Message}\"); }\n    }\n    return red ? \"build: RED\" : \"build: GREEN\";\n}\n\nstatic void Expect(bool condition)\n{\n    if (!condition) throw new InvalidOperationException(\"expectation failed\");\n}\n\npublic record Quarantine(string Owner, string Ticket);\npublic record TestCase(string Name, string Category, Action Body, Quarantine? Quarantine = null);\n\npublic static class Sla\n{\n    public static bool IsBreached(int hoursOpen) => hoursOpen > 4;\n    public static int HoursFor(string priority) => priority == \"High\" ? 4 : 24;\n}",
            check: "run",
            expected: "== PR job: Category != Integration\n  PASS Sla_ExactlyAtLimit_NotBreached\n  PASS Sla_OneHourOver_IsBreached\n  PASS Api_AssignClosedTicket_Returns409\n  QUARANTINED Notify_Retry_SometimesFails: timed out (owner Kiran, QA-214)\nbuild: GREEN\n== Api job: Category == Api\n  PASS Api_AssignClosedTicket_Returns409\nbuild: GREEN\n== Nightly job: everything\n  PASS Sla_ExactlyAtLimit_NotBreached\n  PASS Sla_OneHourOver_IsBreached\n  PASS Db_OpenFor_RunsAsRealSql\n  PASS Api_AssignClosedTicket_Returns409\n  QUARANTINED Notify_Retry_SometimesFails: timed out (owner Kiran, QA-214)\nbuild: GREEN"
          }
        },
        quiz: {
          q: {
            en: "A test fails randomly about once in ten runs and nobody can fix it this week. What is the best Tech Lead move?",
            hi: "एक test दस में एक बार random तरीके से fail होता है और इस हफ़्ते कोई उसे ठीक नहीं कर सकता। Tech Lead की सबसे अच्छी चाल क्या है?",
            hg: "Ek test das mein ek baar random tareeke se fail hota hai aur is hafte koi use theek nahi kar sakta. Tech Lead ki sabse achhi chaal kya hai?"
          },
          options: [
            {
              en: "Delete it, because it is noise",
              hi: "हटा दो, क्योंकि वह शोर है",
              hg: "Hata do, kyunki wo shor hai"
            },
            {
              en: "Quarantine it with an owner and a ticket, so it stops blocking pull requests but stays visible",
              hi: "Owner और ticket के साथ quarantine करो, ताकि वह pull requests को रोके नहीं पर दिखता रहे",
              hg: "Owner aur ticket ke saath quarantine karo, taaki wo pull requests ko roke nahi par dikhta rahe"
            },
            {
              en: "Tell everyone to re-run the build when it fails",
              hi: "सबको कह दो कि fail हो तो build दोबारा चला लें",
              hg: "Sabko keh do ki fail ho to build dobara chalalein"
            },
            {
              en: "Leave it in the pull-request job and ignore red builds",
              hi: "Pull-request job में रहने दो और red builds को नज़रअंदाज़ करो",
              hg: "Pull-request job mein rehne do aur red builds ko nazarandaaz karo"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>Deleting loses the coverage it gave, and \"just re-run\" teaches the team to ignore red. Quarantine protects the pipeline and keeps pressure on the owner to fix it.</p>",
            hi: "<p>हटाने से जो सुरक्षा वह देता था वह चली जाती है, और \"बस दोबारा चला लो\" team को red नज़रअंदाज़ करना सिखाता है। Quarantine pipeline को बचाता है और owner पर ठीक करने का दबाव बनाए रखता है।</p>",
            hg: "<p>Hatane se jo suraksha wo deta tha wo chali jaati hai, aur \"bas dobara chala lo\" team ko red nazarandaaz karna sikhata hai. Quarantine pipeline ko bachata hai aur owner par theek karne ka dabaav banaye rakhta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Tag tests by category; fast tests on every pull request, slow ones nightly.</li><li>Quarantine a flaky test with an owner and a ticket; never leave it silent or auto-retried.</li></ul>",
          hi: "<ul><li>Tests को category से tag करो; fast tests हर pull request पर, slow tests रात में।</li><li>Flaky test को owner और ticket के साथ quarantine करो; उसे चुप या auto-retry पर मत छोड़ो।</li></ul>",
          hg: "<ul><li>Tests ko category se tag karo; fast tests har pull request par, slow tests raat mein.</li><li>Flaky test ko owner aur ticket ke saath quarantine karo; use chup ya auto-retry par mat chhodo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Category filter and quarantine in a tiny runner",
            hi: "छोटे runner में category filter और quarantine",
            hg: "Chhote runner mein category filter aur quarantine"
          },
          src: "// A test runner with the two controls a TL needs: a category filter and quarantine.\nvar tests = new List<TestCase>\n{\n    new(\"Sla_ExactlyAtLimit_NotBreached\", \"Unit\", () => Expect(!Sla.IsBreached(4))),\n    new(\"Sla_OneHourOver_IsBreached\", \"Unit\", () => Expect(Sla.IsBreached(5))),\n    new(\"Db_OpenFor_RunsAsRealSql\", \"Integration\", () => Expect(Sla.HoursFor(\"High\") == 4)),   // stands in for a slow database test\n    new(\"Notify_Retry_SometimesFails\", \"Unit\", () => throw new TimeoutException(\"timed out\"),\n        new Quarantine(\"Kiran\", \"QA-214\")),\n};\n\nConsole.WriteLine(RunJob(\"PR job: Category != Integration\", t => t.Category != \"Integration\"));\nConsole.WriteLine(RunJob(\"Nightly job: everything\", _ => true));\n\nstring RunJob(string name, Func<TestCase, bool> filter)\n{\n    Console.WriteLine($\"== {name}\");\n    var red = false;\n    foreach (var test in tests.Where(filter))\n    {\n        try { test.Body(); Console.WriteLine($\"  PASS {test.Name}\"); }\n        catch (Exception e) when (test.Quarantine is { } q)\n        {\n            Console.WriteLine($\"  QUARANTINED {test.Name}: {e.Message} (owner {q.Owner}, {q.Ticket})\");\n        }\n        catch (Exception e) { red = true; Console.WriteLine($\"  FAIL {test.Name}: {e.Message}\"); }\n    }\n    return red ? \"build: RED\" : \"build: GREEN\";\n}\n\nstatic void Expect(bool condition)\n{\n    if (!condition) throw new InvalidOperationException(\"expectation failed\");\n}\n\npublic record Quarantine(string Owner, string Ticket);\npublic record TestCase(string Name, string Category, Action Body, Quarantine? Quarantine = null);\n\npublic static class Sla\n{\n    public static bool IsBreached(int hoursOpen) => hoursOpen > 4;\n    public static int HoursFor(string priority) => priority == \"High\" ? 4 : 24;\n}",
          check: "run",
          expected: "== PR job: Category != Integration\n  PASS Sla_ExactlyAtLimit_NotBreached\n  PASS Sla_OneHourOver_IsBreached\n  QUARANTINED Notify_Retry_SometimesFails: timed out (owner Kiran, QA-214)\nbuild: GREEN\n== Nightly job: everything\n  PASS Sla_ExactlyAtLimit_NotBreached\n  PASS Sla_OneHourOver_IsBreached\n  PASS Db_OpenFor_RunsAsRealSql\n  QUARANTINED Notify_Retry_SometimesFails: timed out (owner Kiran, QA-214)\nbuild: GREEN"
        }
      ]
    },
    {
      id: "test-shapes",
      depth: "detailed",
      title: {
        en: "Test shapes and test types: trophy, contract tests, FIRST",
        hi: "Test shapes और test types: trophy, contract tests, FIRST",
        hg: "Test shapes aur test types: trophy, contract tests, FIRST"
      },
      body: {
        en: "<p><b>Analogy:</b> a restaurant kitchen checks quality at several points. The cook tastes each ingredient (unit tests), tastes the finished curry (integration test) and the manager occasionally orders a full thali like a customer (end-to-end test). Tasting the whole thali for every pinch of salt would be too slow and too costly.</p>\n<ul>\n<li><b>Testing trophy</b> (Kent C. Dodds) and the <b>honeycomb</b> idea for microservices put more weight on <b>integration</b> tests: they check that the real pieces work together, so they catch bugs that mocked unit tests miss. The shape is a trade-off, not a law.</li>\n<li><b>Unit test:</b> one small piece of logic, no network or database, runs in milliseconds. <b>Integration test:</b> several real parts together (API + EF Core + database). <b>End-to-end test:</b> the whole system through the UI or public API. <b>Contract test:</b> checks that a consumer and a provider agree on the shape of messages or HTTP calls (for example Pact or OpenAPI-based checks), without running both systems together.</li>\n<li><b>FIRST:</b> <b>F</b>ast, <b>I</b>solated (no test depends on another), <b>R</b>epeatable (same result every run), <b>S</b>elf-validating (pass or fail, no manual reading), <b>T</b>imely (written close to the code).</li>\n</ul>",
        hi: "<p><b>Analogy:</b> restaurant की kitchen में quality कई जगह check होती है। Cook हर ingredient चखता है (unit tests), तैयार curry चखता है (integration test) और manager कभी-कभी customer की तरह पूरी thali order करता है (end-to-end test)। हर चुटकी नमक के लिए पूरी thali चखना बहुत slow और महँगा होता।</p>\n<ul>\n<li><b>Testing trophy</b> (Kent C. Dodds) और microservices के लिए <b>honeycomb</b> idea <b>integration</b> tests को ज़्यादा weight देते हैं: वे check करते हैं कि real pieces साथ में काम करते हैं, इसलिए वे ऐसे bugs पकड़ते हैं जो mocked unit tests miss कर देते हैं। Shape एक trade-off है, law नहीं।</li>\n<li><b>Unit test:</b> logic का एक छोटा piece, network या database नहीं, milliseconds में चलता है। <b>Integration test:</b> कई real parts साथ में (API + EF Core + database)। <b>End-to-end test:</b> पूरा system UI या public API से। <b>Contract test:</b> check करता है कि consumer और provider messages या HTTP calls की shape पर agree हैं (जैसे Pact या OpenAPI-based checks), दोनों systems को साथ चलाए बिना।</li>\n<li><b>FIRST:</b> <b>F</b>ast, <b>I</b>solated (कोई test दूसरे पर depend नहीं करता), <b>R</b>epeatable (हर run में same result), <b>S</b>elf-validating (pass या fail, हाथ से पढ़ना नहीं), <b>T</b>imely (code के पास ही लिखा हुआ)।</li>\n</ul>",
        hg: "<p><b>Analogy:</b> restaurant ki kitchen mein quality kai jagah check hoti hai. Cook har ingredient chakhta hai (unit tests), taiyaar curry chakhta hai (integration test) aur manager kabhi-kabhi customer ki tarah poori thali order karta hai (end-to-end test). Har chutki namak ke liye poori thali chakhna bahut slow aur mehenga hota.</p>\n<ul>\n<li><b>Testing trophy</b> (Kent C. Dodds) aur microservices ke liye <b>honeycomb</b> idea <b>integration</b> tests ko zyaada weight dete hain: woh check karte hain ki real pieces saath mein kaam karte hain, isliye woh aise bugs pakadte hain jo mocked unit tests miss kar dete hain. Shape ek trade-off hai, law nahi.</li>\n<li><b>Unit test:</b> logic ka ek chhota piece, network ya database nahi, milliseconds mein chalta hai. <b>Integration test:</b> kai real parts saath mein (API + EF Core + database). <b>End-to-end test:</b> poora system UI ya public API se. <b>Contract test:</b> check karta hai ki consumer aur provider messages ya HTTP calls ki shape par agree hain (jaise Pact ya OpenAPI-based checks), dono systems ko saath chalaye bina.</li>\n<li><b>FIRST:</b> <b>F</b>ast, <b>I</b>solated (koi test doosre par depend nahi karta), <b>R</b>epeatable (har run mein same result), <b>S</b>elf-validating (pass ya fail, haath se padhna nahi), <b>T</b>imely (code ke paas hi likha hua).</li>\n</ul>"
      }
    },
    {
      id: "xunit-fixtures-v3",
      depth: "detailed",
      title: {
        en: "xUnit fixtures, parallelism and v3",
        hi: "xUnit fixtures, parallelism और v3",
        hg: "xUnit fixtures, parallelism aur v3"
      },
      body: {
        en: "<ul>\n<li><b>Fixtures:</b> <code>IClassFixture&lt;T&gt;</code> shares one <code>T</code> within a class. For several classes, define a collection with <code>[CollectionDefinition]</code> and <code>ICollectionFixture&lt;T&gt;</code>, then mark classes with <code>[Collection(\"name\")]</code>. Fixture state is shared, so keep per-test data out of it.</li>\n<li><b>Parallelism:</b> by default each test class is its own collection; collections run in parallel with each other, while the tests in one collection run one after another. Tests that share a database or other global state should share a collection (or be made independent).</li>\n<li><b>Output:</b> inject <code>ITestOutputHelper</code> through the constructor to write diagnostics; <code>Console.WriteLine</code> is not captured per test in xUnit v2.</li>\n<li><b>xUnit v3:</b> the <code>xunit.v3</code> packages are the current generation. Test projects are executables that support Microsoft.Testing.Platform natively, <code>IAsyncLifetime</code> uses <code>ValueTask</code>, and <code>TestContext.Current</code> exposes things like a cancellation token. Many v2 tests port easily; check the official migration guide and your CI tooling before moving a large solution.</li>\n</ul>",
        hi: "<ul>\n<li><b>Fixtures:</b> <code>IClassFixture&lt;T&gt;</code> एक class के अंदर एक <code>T</code> share करता है। कई classes के लिए <code>[CollectionDefinition]</code> और <code>ICollectionFixture&lt;T&gt;</code> से collection बनाओ, फिर classes पर <code>[Collection(\"name\")]</code> लगाओ। Fixture की state shared होती है, इसलिए per-test data उसमें मत रखो।</li>\n<li><b>Parallelism:</b> by default हर test class अपनी collection होती है; collections आपस में parallel चलती हैं, जबकि एक collection के tests एक के बाद एक चलते हैं। जो tests database या कोई global state share करते हैं, उन्हें एक collection share करनी चाहिए (या independent बनाओ)।</li>\n<li><b>Output:</b> diagnostics लिखने के लिए constructor से <code>ITestOutputHelper</code> inject करो; xUnit v2 में <code>Console.WriteLine</code> per-test capture नहीं होता।</li>\n<li><b>xUnit v3:</b> <code>xunit.v3</code> packages current generation हैं। Test projects executables होते हैं (Microsoft.Testing.Platform natively support), <code>IAsyncLifetime</code> में <code>ValueTask</code> आता है, और <code>TestContext.Current</code> से cancellation token जैसी चीज़ें मिलती हैं। कई v2 tests आसानी से port हो जाते हैं; बड़ा solution move करने से पहले official migration guide और CI tooling check करो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Fixtures:</b> <code>IClassFixture&lt;T&gt;</code> ek class ke andar ek <code>T</code> share karta hai. Kai classes ke liye <code>[CollectionDefinition]</code> aur <code>ICollectionFixture&lt;T&gt;</code> se collection banao, phir classes par <code>[Collection(\"name\")]</code> lagao. Fixture ki state shared hoti hai, isliye per-test data usme mat rakho.</li>\n<li><b>Parallelism:</b> by default har test class apni collection hoti hai; collections aapas mein parallel chalti hain, jabki ek collection ke tests ek ke baad ek chalte hain. Jo tests database ya koi global state share karte hain, unhe ek collection share karni chahiye (ya independent banao).</li>\n<li><b>Output:</b> diagnostics likhne ke liye constructor se <code>ITestOutputHelper</code> inject karo; xUnit v2 mein <code>Console.WriteLine</code> per-test capture nahi hota.</li>\n<li><b>xUnit v3:</b> <code>xunit.v3</code> packages current generation hain. Test projects executables hote hain (Microsoft.Testing.Platform natively support), <code>IAsyncLifetime</code> mein <code>ValueTask</code> aata hai, aur <code>TestContext.Current</code> se cancellation token jaisi cheezein milti hain. Kai v2 tests aasaani se port ho jaate hain; bada solution move karne se pehle official migration guide aur CI tooling check karo.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "Class fixture vs collection fixture: one expensive object shared safely (the tests keep their own data).",
            hi: "Class fixture vs collection fixture: एक महँगा object safely share होता है (tests अपना data अलग रखते हैं)।",
            hg: "Class fixture vs collection fixture: ek mehenga object safely share hota hai (tests apna data alag rakhte hain)."
          },
          check: "compile",
          packages: [
            "xunit@2.*"
          ],
          src: "using Xunit;\n\npublic class SharedResourceFixture : IAsyncLifetime\n{\n    public string ConnectionString { get; private set; } = \"\";\n\n    public Task InitializeAsync()       // runs once, before the first test that uses the fixture\n    {\n        ConnectionString = \"Server=localhost;Database=TestDb\";\n        return Task.CompletedTask;\n    }\n\n    public Task DisposeAsync() => Task.CompletedTask;   // runs once, after the last test\n}\n\n// One fixture instance for ONE class\npublic class CatalogTests : IClassFixture<SharedResourceFixture>\n{\n    private readonly SharedResourceFixture _fixture;\n    public CatalogTests(SharedResourceFixture fixture) => _fixture = fixture;\n\n    [Fact]\n    public void Fixture_IsAvailable() => Assert.NotEmpty(_fixture.ConnectionString);\n}\n\n// One fixture instance for MANY classes: they join the same collection (and so run one after another)\n[CollectionDefinition(\"shared-resource\")]\npublic class SharedResourceCollection : ICollectionFixture<SharedResourceFixture> { }\n\n[Collection(\"shared-resource\")]\npublic class OrderTests\n{\n    private readonly SharedResourceFixture _fixture;\n    public OrderTests(SharedResourceFixture fixture) => _fixture = fixture;\n\n    [Fact]\n    public void Fixture_IsShared() => Assert.NotEmpty(_fixture.ConnectionString);\n}\n\n[Collection(\"shared-resource\")]\npublic class InvoiceTests\n{\n    private readonly SharedResourceFixture _fixture;\n    public InvoiceTests(SharedResourceFixture fixture) => _fixture = fixture;\n\n    [Fact]\n    public void Fixture_IsShared() => Assert.NotEmpty(_fixture.ConnectionString);\n}\n"
        },
        {
          caption: {
            en: "xUnit v3 flavour (xunit.v3.core and xunit.v3.assert packages): ValueTask lifecycle and TestContext.Current.CancellationToken.",
            hi: "xUnit v3 flavour (xunit.v3.core और xunit.v3.assert packages): ValueTask lifecycle और TestContext.Current.CancellationToken।",
            hg: "xUnit v3 flavour (xunit.v3.core aur xunit.v3.assert packages): ValueTask lifecycle aur TestContext.Current.CancellationToken."
          },
          check: "compile",
          packages: [
            "xunit.v3.core@4.*",
            "xunit.v3.assert@4.*"
          ],
          src: "using Xunit;\n\npublic class ReportLoader\n{\n    public async Task<int> CountRowsAsync(CancellationToken ct)\n    {\n        await Task.Delay(TimeSpan.Zero, ct);\n        return 3;\n    }\n}\n\npublic class ReportLoaderTests : IAsyncLifetime\n{\n    private ReportLoader? _sut;\n\n    public ValueTask InitializeAsync()      // v3: ValueTask (v2 used Task)\n    {\n        _sut = new ReportLoader();\n        return ValueTask.CompletedTask;\n    }\n\n    public ValueTask DisposeAsync() => ValueTask.CompletedTask;\n\n    [Fact]\n    public async Task CountRowsAsync_Default_ReturnsThree()\n    {\n        var ct = TestContext.Current.CancellationToken;   // new in v3: cancelled when the run is cancelled or the test times out\n\n        var rows = await _sut!.CountRowsAsync(ct);\n\n        Assert.Equal(3, rows);\n    }\n}\n"
        }
      ]
    },
    {
      id: "mocking-libraries",
      depth: "detailed",
      title: {
        en: "Mocking libraries: Moq, NSubstitute and licences",
        hi: "Mocking libraries: Moq, NSubstitute और licences",
        hg: "Mocking libraries: Moq, NSubstitute aur licences"
      },
      body: {
        en: "<p><b>Analogy:</b> a film shoot uses stand-ins. A <b>dummy</b> just fills the frame, a <b>stub</b> says one fixed line, a <b>fake</b> is a cheap working set (looks like a house, but it is plywood), a <b>spy</b> notes down what happened, and a <b>mock</b> comes with a script and complains if the actors do not follow it.</p>\n<ul>\n<li><b>Test doubles</b> (Meszaros / Martin Fowler's terms): <b>dummy</b> (passed but never used), <b>stub</b> (returns canned answers), <b>fake</b> (a working shortcut, like an in-memory repository), <b>spy</b> (records calls), <b>mock</b> (pre-programmed expectations that verify interactions). Libraries like <b>Moq</b> and <b>NSubstitute</b> generate stubs, spies and mocks for interfaces.</li>\n<li><b>Moq:</b> <code>new Mock&lt;T&gt;()</code>, configure with <code>Setup(...).Returns(...)</code>, use <code>.Object</code>, check calls with <code>Verify(..., Times.Once)</code>. If several setups match a call, the <b>most recent</b> matching setup wins (Puzzle 3). The default behaviour is <i>loose</i>: unconfigured calls return a default value.</li>\n<li><b>NSubstitute:</b> <code>Substitute.For&lt;T&gt;()</code>, configure with <code>sub.Method(args).Returns(value)</code>, check with <code>sub.Received(1).Method(args)</code>. Less ceremony than Moq; <code>Returns(a, b, c)</code> gives a sequence (Puzzle 4). Both libraries mock interfaces and virtual members; they cannot intercept static, sealed or non-virtual members.</li>\n<li><b>Licence watch:</b> test libraries can change licence or ship surprises: <b>FluentAssertions</b> v8+ (commercial licence for commercial use; alternatives <b>Shouldly</b>, <b>AwesomeAssertions</b>, built-in <code>Assert</code>) and <b>Moq</b> 4.20.0 (SponsorLink analyzer, removed in 4.20.2). Details are in the Q&amp;A; a TL checks licences and dependency changes before upgrading.</li>\n</ul>",
        hi: "<p><b>Analogy:</b> film shoot में stand-ins होते हैं। <b>Dummy</b> बस frame भरता है, <b>stub</b> एक fixed line बोलता है, <b>fake</b> सस्ता लेकिन चलने वाला set है (घर जैसा दिखता है, पर plywood का है), <b>spy</b> नोट करता है कि क्या हुआ, और <b>mock</b> script के साथ आता है और actors उसे follow न करें तो शिकायत करता है।</p>\n<ul>\n<li><b>Test doubles</b> (Meszaros / Martin Fowler के terms): <b>dummy</b> (pass होता है पर use नहीं होता), <b>stub</b> (canned answers देता है), <b>fake</b> (working shortcut, जैसे in-memory repository), <b>spy</b> (calls record करता है), <b>mock</b> (pre-programmed expectations जो interactions verify करते हैं)। <b>Moq</b> और <b>NSubstitute</b> जैसी libraries interfaces के लिए stubs, spies और mocks बनाती हैं।</li>\n<li><b>Moq:</b> <code>new Mock&lt;T&gt;()</code>, <code>Setup(...).Returns(...)</code> से configure करो, <code>.Object</code> use करो, calls <code>Verify(..., Times.Once)</code> से check करो। कई setups एक call से match करें तो <b>सबसे recent</b> matching setup जीतता है (Puzzle 3)। Default behaviour <i>loose</i> है: unconfigured calls default value return करती हैं।</li>\n<li><b>NSubstitute:</b> <code>Substitute.For&lt;T&gt;()</code>, <code>sub.Method(args).Returns(value)</code> से configure, <code>sub.Received(1).Method(args)</code> से check। Moq से कम ceremony; <code>Returns(a, b, c)</code> एक sequence देता है (Puzzle 4)। दोनों libraries interfaces और virtual members mock करती हैं; static, sealed या non-virtual members को intercept नहीं कर सकतीं।</li>\n<li><b>Licence पर नज़र:</b> test libraries का licence बदल सकता है या surprise आ सकता है: <b>FluentAssertions</b> v8+ (commercial use के लिए commercial licence; alternatives <b>Shouldly</b>, <b>AwesomeAssertions</b>, built-in <code>Assert</code>) और <b>Moq</b> 4.20.0 (SponsorLink analyzer, 4.20.2 में हटा)। Details Q&amp;A में हैं; TL upgrade से पहले licences और dependency changes check करता है।</li>\n</ul>",
        hg: "<p><b>Analogy:</b> film shoot mein stand-ins hote hain. <b>Dummy</b> bas frame bharta hai, <b>stub</b> ek fixed line bolta hai, <b>fake</b> sasta lekin chalne wala set hai (ghar jaisa dikhta hai, par plywood ka hai), <b>spy</b> note karta hai ki kya hua, aur <b>mock</b> script ke saath aata hai aur actors use follow na karein to shikayat karta hai.</p>\n<ul>\n<li><b>Test doubles</b> (Meszaros / Martin Fowler ke terms): <b>dummy</b> (pass hota hai par use nahi hota), <b>stub</b> (canned answers deta hai), <b>fake</b> (working shortcut, jaise in-memory repository), <b>spy</b> (calls record karta hai), <b>mock</b> (pre-programmed expectations jo interactions verify karte hain). <b>Moq</b> aur <b>NSubstitute</b> jaisi libraries interfaces ke liye stubs, spies aur mocks banati hain.</li>\n<li><b>Moq:</b> <code>new Mock&lt;T&gt;()</code>, <code>Setup(...).Returns(...)</code> se configure karo, <code>.Object</code> use karo, calls <code>Verify(..., Times.Once)</code> se check karo. Kai setups ek call se match karein to <b>sabse recent</b> matching setup jeetta hai (Puzzle 3). Default behaviour <i>loose</i> hai: unconfigured calls default value return karti hain.</li>\n<li><b>NSubstitute:</b> <code>Substitute.For&lt;T&gt;()</code>, <code>sub.Method(args).Returns(value)</code> se configure, <code>sub.Received(1).Method(args)</code> se check. Moq se kam ceremony; <code>Returns(a, b, c)</code> ek sequence deta hai (Puzzle 4). Dono libraries interfaces aur virtual members mock karti hain; static, sealed ya non-virtual members ko intercept nahi kar sakti.</li>\n<li><b>Licence par nazar:</b> test libraries ka licence badal sakta hai ya surprise aa sakta hai: <b>FluentAssertions</b> v8+ (commercial use ke liye commercial licence; alternatives <b>Shouldly</b>, <b>AwesomeAssertions</b>, built-in <code>Assert</code>) aur <b>Moq</b> 4.20.0 (SponsorLink analyzer, 4.20.2 mein hata). Details Q&amp;A mein hain; TL upgrade se pehle licences aur dependency changes check karta hai.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "The same stub in Moq and in NSubstitute",
            hi: "वही stub Moq और NSubstitute में",
            hg: "Wahi stub Moq aur NSubstitute mein"
          },
          src: "using Moq;\nusing NSubstitute;\nusing Xunit;\n\npublic record SupportTicket(int Id, string Customer);\npublic interface ITicketStore { SupportTicket? Find(int id); }\n\npublic class TicketLookup(ITicketStore store)\n{\n    public string Describe(int id) =>\n        store.Find(id) is { } ticket ? $\"Ticket {ticket.Id} for {ticket.Customer}\" : \"Not found\";\n}\n\npublic class TicketLookupTests\n{\n    [Fact]\n    public void Describe_KnownId_WithMoq()\n    {\n        var store = new Mock<ITicketStore>();\n        store.Setup(s => s.Find(501)).Returns(new SupportTicket(501, \"Asha\"));   // Moq: Setup(...).Returns(...)\n\n        var text = new TicketLookup(store.Object).Describe(501);                 // .Object is the stand-in\n\n        Assert.Equal(\"Ticket 501 for Asha\", text);\n    }\n\n    [Fact]\n    public void Describe_KnownId_WithNSubstitute()\n    {\n        var store = Substitute.For<ITicketStore>();\n        store.Find(501).Returns(new SupportTicket(501, \"Asha\"));                 // NSubstitute: call it, then .Returns(...)\n\n        var text = new TicketLookup(store).Describe(501);                        // the substitute is the stand-in\n\n        Assert.Equal(\"Ticket 501 for Asha\", text);\n    }\n\n    [Fact]\n    public void Describe_UnknownId_ReturnsNotFound()\n    {\n        var store = Substitute.For<ITicketStore>();                              // unconfigured call returns null\n\n        Assert.Equal(\"Not found\", new TicketLookup(store).Describe(999));\n    }\n}",
          check: "compile",
          packages: [
            "xunit@2.*",
            "Moq@4.20.72",
            "NSubstitute@6.*"
          ]
        }
      ]
    },
    {
      id: "webapp-factory",
      depth: "detailed",
      title: {
        en: "WebApplicationFactory, ConfigureTestServices and test authentication",
        hi: "WebApplicationFactory, ConfigureTestServices और test authentication",
        hg: "WebApplicationFactory, ConfigureTestServices aur test authentication"
      },
      body: {
        en: "<p><b>Analogy:</b> a driving test is done on a real car on a real road layout, but the examiner replaces the busy traffic with a quiet test track. <code>WebApplicationFactory</code> starts your <b>real app</b> (routing, middleware, model binding, serialisation) and you replace only the outside parts.</p>\n<ul>\n<li><b>How it works:</b> <code>WebApplicationFactory&lt;Program&gt;</code> (package <code>Microsoft.AspNetCore.Mvc.Testing</code>) builds your app in memory with the in-process test server; <code>CreateClient()</code> gives an <code>HttpClient</code> that talks to it without opening a real port. Your test project needs access to <code>Program</code>: on .NET 10 the SDK generates it for you; on .NET 8/9 add <code>public partial class Program { }</code> to the app (or use <code>InternalsVisibleTo</code>). Program.cs basics: Day 12.</li>\n<li><b>Replace the outside world:</b> override <code>ConfigureWebHost</code> and call <code>ConfigureTestServices</code>. It runs <b>after</b> the app registered its services, so your registration wins. Use <code>RemoveAll&lt;T&gt;()</code> then add your fake, to avoid ending up with two registrations.</li>\n<li><b>Authentication:</b> do not generate real JWTs in every test. Register a small <b>test authentication handler</b> that creates a <code>ClaimsPrincipal</code> from a header, then test both the 401 (no user) and the 200/201 (user present) paths. Test the real token validation once, separately.</li>\n<li><b>What to assert:</b> status codes, response body, headers (<code>Location</code>), validation errors as ProblemDetails (Day 13), and effects in the fake or database. This catches wiring bugs unit tests cannot: a missing <code>[Authorize]</code>, a wrong route, a JSON naming mismatch.</li>\n</ul>\n<p><b>When to use / when not:</b> use factory tests for endpoints, auth rules and the request pipeline. Do not use them for pure business rules (a plain unit test is faster), and do not replace so much that you test only your fakes: keep routing, filters, serialisation and DI real.</p>",
        hi: "<p><b>Analogy:</b> driving test असली car पर असली road layout पर होता है, पर examiner busy traffic की जगह शांत test track रख देता है। <code>WebApplicationFactory</code> तुम्हारी <b>असली app</b> चलाता है (routing, middleware, model binding, serialisation) और तुम सिर्फ़ बाहरी parts बदलते हो।</p>\n<ul>\n<li><b>कैसे काम करता है:</b> <code>WebApplicationFactory&lt;Program&gt;</code> (package <code>Microsoft.AspNetCore.Mvc.Testing</code>) तुम्हारी app को in-process test server के साथ memory में बनाता है; <code>CreateClient()</code> एक <code>HttpClient</code> देता है जो असली port खोले बिना उससे बात करता है। Test project को <code>Program</code> का access चाहिए: .NET 10 में SDK उसे ख़ुद generate करता है; .NET 8/9 में app में <code>public partial class Program { }</code> जोड़ो (या <code>InternalsVisibleTo</code> use करो)। Program.cs की basics: Day 12।</li>\n<li><b>बाहरी दुनिया बदलो:</b> <code>ConfigureWebHost</code> override करो और <code>ConfigureTestServices</code> call करो। यह app के services register करने के <b>बाद</b> चलता है, इसलिए तुम्हारा registration जीतता है। पहले <code>RemoveAll&lt;T&gt;()</code> करो फिर अपना fake जोड़ो, ताकि दो registrations न बनें।</li>\n<li><b>Authentication:</b> हर test में असली JWT मत बनाओ। छोटा <b>test authentication handler</b> register करो जो header से <code>ClaimsPrincipal</code> बनाए, फिर 401 (user नहीं) और 200/201 (user मौजूद) दोनों paths test करो। असली token validation एक बार, अलग से test करो।</li>\n<li><b>क्या assert करें:</b> status codes, response body, headers (<code>Location</code>), ProblemDetails के रूप में validation errors (Day 13), और fake या database में effects। यह ऐसे wiring bugs पकड़ता है जो unit tests नहीं पकड़ सकते: छूटा हुआ <code>[Authorize]</code>, ग़लत route, JSON naming mismatch।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> endpoints, auth rules और request pipeline के लिए factory tests use करो। Pure business rules के लिए नहीं (plain unit test तेज़ है), और इतना कुछ replace मत करो कि तुम सिर्फ़ अपने fakes को test करो: routing, filters, serialisation और DI को real रखो।</p>",
        hg: "<p><b>Analogy:</b> driving test asli car par asli road layout par hota hai, par examiner busy traffic ki jagah shaant test track rakh deta hai. <code>WebApplicationFactory</code> tumhari <b>asli app</b> chalata hai (routing, middleware, model binding, serialisation) aur tum sirf bahari parts badalte ho.</p>\n<ul>\n<li><b>Kaise kaam karta hai:</b> <code>WebApplicationFactory&lt;Program&gt;</code> (package <code>Microsoft.AspNetCore.Mvc.Testing</code>) tumhari app ko in-process test server ke saath memory mein banata hai; <code>CreateClient()</code> ek <code>HttpClient</code> deta hai jo asli port khole bina usse baat karta hai. Test project ko <code>Program</code> ka access chahiye: .NET 10 mein SDK use khud generate karta hai; .NET 8/9 mein app mein <code>public partial class Program { }</code> jodo (ya <code>InternalsVisibleTo</code> use karo). Program.cs ki basics: Day 12.</li>\n<li><b>Bahari duniya badlo:</b> <code>ConfigureWebHost</code> override karo aur <code>ConfigureTestServices</code> call karo. Yeh app ke services register karne ke <b>baad</b> chalta hai, isliye tumhara registration jeetta hai. Pehle <code>RemoveAll&lt;T&gt;()</code> karo phir apna fake jodo, taaki do registrations na bane.</li>\n<li><b>Authentication:</b> har test mein asli JWT mat banao. Chhota <b>test authentication handler</b> register karo jo header se <code>ClaimsPrincipal</code> banaye, phir 401 (user nahi) aur 200/201 (user maujood) dono paths test karo. Asli token validation ek baar, alag se test karo.</li>\n<li><b>Kya assert karein:</b> status codes, response body, headers (<code>Location</code>), ProblemDetails ke roop mein validation errors (Day 13), aur fake ya database mein effects. Yeh aise wiring bugs pakadta hai jo unit tests nahi pakad sakte: chhoota hua <code>[Authorize]</code>, galat route, JSON naming mismatch.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> endpoints, auth rules aur request pipeline ke liye factory tests use karo. Pure business rules ke liye nahi (plain unit test tez hai), aur itna kuch replace mat karo ki tum sirf apne fakes ko test karo: routing, filters, serialisation aur DI ko real rakho.</p>"
      },
      code: [
        {
          caption: {
            en: "WebApplicationFactory with a fake catalog and a test authentication handler. The app is inline here; in a real solution it lives in its own project.",
            hi: "Fake catalog और test authentication handler के साथ WebApplicationFactory। यहाँ app inline है; real solution में वह अपने project में होती है।",
            hg: "Fake catalog aur test authentication handler ke saath WebApplicationFactory. Yahan app inline hai; real solution mein woh apne project mein hoti hai."
          },
          check: "compile",
          packages: [
            "xunit@2.*",
            "Microsoft.AspNetCore.Mvc.Testing@9.*"
          ],
          frameworks: [
            "aspnetcore"
          ],
          src: "using System.Net;\nusing System.Net.Http.Json;\nusing System.Security.Claims;\nusing System.Text.Encodings.Web;\nusing Microsoft.AspNetCore.Authentication;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Mvc.Testing;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.DependencyInjection.Extensions;\nusing Microsoft.Extensions.Logging;\nusing Microsoft.Extensions.Options;\nusing Xunit;\n\n// ---- the application under test (normally its own project) ----\nvar builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddSingleton<IProductCatalog, SqlProductCatalog>();\nbuilder.Services.AddAuthentication().AddCookie();\nbuilder.Services.AddAuthorization();\n\nvar app = builder.Build();\napp.MapGet(\"/products/{id:int}\", (int id, IProductCatalog catalog) =>\n    catalog.Find(id) is { } product ? Results.Ok(product) : Results.NotFound());\napp.MapPost(\"/admin/products\", (ProductDto dto) => Results.Created($\"/products/{dto.Id}\", dto))\n   .RequireAuthorization();\napp.Run();\n\npublic record ProductDto(int Id, string Name);\npublic interface IProductCatalog { ProductDto? Find(int id); }\n\npublic class SqlProductCatalog : IProductCatalog\n{\n    public ProductDto? Find(int id) => throw new NotImplementedException(\"real version talks to SQL Server\");\n}\n\npublic partial class Program { }   // needed only before .NET 10 (the SDK generates it from .NET 10 on)\n\n// ---- the test project ----\npublic class FakeProductCatalog : IProductCatalog\n{\n    public ProductDto? Find(int id) => id == 1 ? new ProductDto(1, \"Tea\") : null;\n}\n\npublic class TestAuthHandler(\n    IOptionsMonitor<AuthenticationSchemeOptions> options, ILoggerFactory logger, UrlEncoder encoder)\n    : AuthenticationHandler<AuthenticationSchemeOptions>(options, logger, encoder)\n{\n    public const string SchemeName = \"Test\";\n\n    protected override Task<AuthenticateResult> HandleAuthenticateAsync()\n    {\n        if (!Request.Headers.TryGetValue(\"X-Test-User\", out var user))\n            return Task.FromResult(AuthenticateResult.NoResult());      // anonymous\n\n        var identity = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Name, user.ToString()) }, SchemeName);\n        var ticket = new AuthenticationTicket(new ClaimsPrincipal(identity), SchemeName);\n        return Task.FromResult(AuthenticateResult.Success(ticket));\n    }\n}\n\npublic class ApiFactory : WebApplicationFactory<Program>\n{\n    protected override void ConfigureWebHost(IWebHostBuilder builder)\n    {\n        builder.UseEnvironment(\"Testing\");\n        builder.ConfigureTestServices(services =>                      // runs after the app's own registrations\n        {\n            services.RemoveAll<IProductCatalog>();\n            services.AddSingleton<IProductCatalog, FakeProductCatalog>();\n            services.AddAuthentication(TestAuthHandler.SchemeName)\n                    .AddScheme<AuthenticationSchemeOptions, TestAuthHandler>(TestAuthHandler.SchemeName, _ => { });\n        });\n    }\n}\n\npublic class ProductApiTests(ApiFactory factory) : IClassFixture<ApiFactory>\n{\n    private readonly HttpClient _client = factory.CreateClient();\n\n    [Fact]\n    public async Task GetProduct_Existing_Returns200AndBody()\n    {\n        var response = await _client.GetAsync(\"/products/1\");\n\n        Assert.Equal(HttpStatusCode.OK, response.StatusCode);\n        var product = await response.Content.ReadFromJsonAsync<ProductDto>();\n        Assert.Equal(\"Tea\", product!.Name);\n    }\n\n    [Fact]\n    public async Task GetProduct_Unknown_Returns404()\n    {\n        var response = await _client.GetAsync(\"/products/99\");\n\n        Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);\n    }\n\n    [Fact]\n    public async Task PostAdminProduct_Anonymous_Returns401()\n    {\n        var response = await _client.PostAsJsonAsync(\"/admin/products\", new ProductDto(2, \"Coffee\"));\n\n        Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);\n    }\n\n    [Fact]\n    public async Task PostAdminProduct_SignedInUser_Returns201()\n    {\n        using var request = new HttpRequestMessage(HttpMethod.Post, \"/admin/products\")\n        {\n            Content = JsonContent.Create(new ProductDto(2, \"Coffee\"))\n        };\n        request.Headers.Add(\"X-Test-User\", \"asha\");\n\n        var response = await _client.SendAsync(request);\n\n        Assert.Equal(HttpStatusCode.Created, response.StatusCode);\n    }\n}\n"
        }
      ]
    },
    {
      id: "testcontainers-ef",
      depth: "detailed",
      title: {
        en: "Real databases in containers: Testcontainers and EF Core",
        hi: "Containers में असली databases: Testcontainers और EF Core",
        hg: "Containers mein asli databases: Testcontainers aur EF Core"
      },
      body: {
        en: "<p><b>Analogy:</b> you cannot judge a pressure cooker by testing a toy cooker. Testing EF Core against the real engine is like testing the real cooker with real steam, only in a safe kitchen (a container) that you can throw away after each run.</p>\n<ul>\n<li><b>Testcontainers for .NET:</b> starts a throw-away Docker container from test code (for example <code>Testcontainers.MsSql</code>), gives you a connection string and removes the container when the test run ends. Put it in an <code>IAsyncLifetime</code> fixture so one container serves the whole class or collection (Day 7).</li>\n<li><b>EF Core testing choices:</b> a real engine in a container is closest to production; DbSet mocks and the in-memory provider are the weak options (full comparison in the Q&amp;A and Day 7).</li>\n<li><b>Replace the DbContext in the factory:</b> remove the existing options registrations and add your own with the container's connection string, as the snippet shows (the EF Core 9+ detail is explained in the Q&amp;A).</li>\n<li><b>Keep tests independent:</b> create the schema once (<code>EnsureCreated</code> or migrations), then give each test unique data, or reset between tests (for example with a library like Respawn). Never rely on the order in which tests run.</li>\n</ul>\n<p><b>When to use / when not:</b> use a container database for repository, query, migration and transaction behaviour, and for provider-specific features that SQLite does not have. Do not start a new container for every test (too slow); share one per run. Needs Docker on laptops and build agents, so keep the number of such tests sensible.</p>",
        hi: "<p><b>Analogy:</b> pressure cooker को खिलौने वाले cooker से test करके नहीं check कर सकते। EF Core को real engine पर test करना real cooker को real steam के साथ test करने जैसा है, बस एक safe kitchen (container) में जिसे हर run के बाद फेंक सकते हो।</p>\n<ul>\n<li><b>Testcontainers for .NET:</b> test code से throw-away Docker container शुरू करता है (जैसे <code>Testcontainers.MsSql</code>), connection string देता है और test run ख़त्म होने पर container हटा देता है। इसे <code>IAsyncLifetime</code> fixture में रखो ताकि एक container पूरी class या collection को serve करे (Day 7)।</li>\n<li><b>EF Core testing choices:</b> container में real engine production के सबसे क़रीब है; DbSet mocks और in-memory provider कमज़ोर options हैं (पूरी comparison Q&amp;A और Day 7 में)।</li>\n<li><b>Factory में DbContext replace करो:</b> मौजूदा options registrations हटाओ और container की connection string के साथ अपना जोड़ो, जैसा snippet में है (EF Core 9+ की detail Q&amp;A में समझाई है)।</li>\n<li><b>Tests independent रखो:</b> schema एक बार बनाओ (<code>EnsureCreated</code> या migrations), फिर हर test को unique data दो, या tests के बीच reset करो (जैसे Respawn जैसी library से)। Tests किस order में चलते हैं उस पर कभी depend मत करो।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> repository, query, migration और transaction के behaviour के लिए, और उन provider-specific features के लिए जो SQLite में नहीं हैं, container database लो। हर test के लिए नया container मत चलाओ (बहुत धीमा); हर run में एक share करो। Laptops और build agents पर Docker चाहिए, इसलिए ऐसे tests की गिनती समझदारी से रखो।</p>",
        hg: "<p><b>Analogy:</b> pressure cooker ko khilone wale cooker se test karke nahi check kar sakte. EF Core ko real engine par test karna real cooker ko real steam ke saath test karne jaisa hai, bas ek safe kitchen (container) mein jise har run ke baad phenk sakte ho.</p>\n<ul>\n<li><b>Testcontainers for .NET:</b> test code se throw-away Docker container shuru karta hai (jaise <code>Testcontainers.MsSql</code>), connection string deta hai aur test run khatam hone par container hata deta hai. Ise <code>IAsyncLifetime</code> fixture mein rakho taaki ek container poori class ya collection ko serve kare (Day 7).</li>\n<li><b>EF Core testing choices:</b> container mein real engine production ke sabse kareeb hai; DbSet mocks aur in-memory provider kamzor options hain (poori comparison Q&amp;A aur Day 7 mein).</li>\n<li><b>Factory mein DbContext replace karo:</b> maujooda options registrations hatao aur container ki connection string ke saath apna jodo, jaisa snippet mein hai (EF Core 9+ ki detail Q&amp;A mein samjhai hai).</li>\n<li><b>Tests independent rakho:</b> schema ek baar banao (<code>EnsureCreated</code> ya migrations), phir har test ko unique data do, ya tests ke beech reset karo (jaise Respawn jaisi library se). Tests kis order mein chalte hain us par kabhi depend mat karo.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> repository, query, migration aur transaction ke behaviour ke liye, aur un provider-specific features ke liye jo SQLite mein nahi hain, container database lo. Har test ke liye naya container mat chalao (bahut dheema); har run mein ek share karo. Laptops aur build agents par Docker chahiye, isliye aise tests ki ginti samajhdaari se rakho.</p>"
      },
      code: [
        {
          caption: {
            en: "Testcontainers SQL Server shared by a fixture, with WebApplicationFactory pointed at it and an EF Core test against the real engine. Needs Docker to run; here it is compile-checked.",
            hi: "Fixture से share होने वाला Testcontainers SQL Server, जिस पर WebApplicationFactory point करती है, और real engine पर EF Core test। चलाने के लिए Docker चाहिए; यहाँ सिर्फ़ compile-checked है।",
            hg: "Fixture se share hone wala Testcontainers SQL Server, jis par WebApplicationFactory point karti hai, aur real engine par EF Core test. Chalane ke liye Docker chahiye; yahan sirf compile-checked hai."
          },
          check: "compile",
          packages: [
            "xunit@2.*",
            "Microsoft.AspNetCore.Mvc.Testing@9.*",
            "Microsoft.EntityFrameworkCore.SqlServer@9.*",
            "Testcontainers.MsSql@4.*"
          ],
          frameworks: [
            "aspnetcore"
          ],
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Mvc.Testing;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Infrastructure;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.DependencyInjection.Extensions;\nusing Testcontainers.MsSql;\nusing Xunit;\n\n// ---- the application under test (normally its own project) ----\nvar builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddDbContext<ShopDbContext>(o => o.UseSqlServer(\"Server=real-production-server;Database=Shop\"));\nvar app = builder.Build();\napp.MapGet(\"/orders/count\", async (ShopDbContext db) => await db.Orders.CountAsync());\napp.Run();\n\npublic class Order { public int Id { get; set; } public string Customer { get; set; } = \"\"; public decimal Total { get; set; } }\n\npublic class ShopDbContext(DbContextOptions<ShopDbContext> options) : DbContext(options)\n{\n    public DbSet<Order> Orders => Set<Order>();\n}\n\npublic partial class Program { }   // needed only before .NET 10\n\n// ---- the test project ----\n// One real SQL Server in Docker for the whole collection of tests; removed when the run ends.\npublic class SqlServerFixture : IAsyncLifetime\n{\n    // pin a specific image tag in real projects so the database version does not change under you\n    private readonly MsSqlContainer _container = new MsSqlBuilder(\"mcr.microsoft.com/mssql/server:2022-latest\").Build();\n\n    public string ConnectionString => _container.GetConnectionString();\n\n    public Task InitializeAsync() => _container.StartAsync();\n    public Task DisposeAsync() => _container.DisposeAsync().AsTask();\n}\n\n[CollectionDefinition(\"sql\")]\npublic class SqlCollection : ICollectionFixture<SqlServerFixture> { }\n\npublic class ShopApiFactory(string connectionString) : WebApplicationFactory<Program>\n{\n    protected override void ConfigureWebHost(IWebHostBuilder builder)\n    {\n        builder.ConfigureTestServices(services =>\n        {\n            services.RemoveAll<DbContextOptions<ShopDbContext>>();\n            services.RemoveAll<IDbContextOptionsConfiguration<ShopDbContext>>();   // EF Core 9+: the old provider config lives here too\n            services.AddDbContext<ShopDbContext>(o => o.UseSqlServer(connectionString));\n        });\n    }\n}\n\n[Collection(\"sql\")]\npublic class OrderQueryTests(SqlServerFixture sql)\n{\n    [Fact]\n    public async Task Orders_TotalFilter_RunsAsRealSql()\n    {\n        var options = new DbContextOptionsBuilder<ShopDbContext>().UseSqlServer(sql.ConnectionString).Options;\n        await using var db = new ShopDbContext(options);\n        await db.Database.EnsureCreatedAsync();\n        var customer = \"customer-\" + Guid.NewGuid();             // own data: tests stay independent\n        db.Orders.AddRange(new Order { Customer = customer, Total = 500 }, new Order { Customer = customer, Total = 50 });\n        await db.SaveChangesAsync();\n\n        var big = await db.Orders.Where(o => o.Customer == customer && o.Total > 100).ToListAsync();   // translated to SQL\n\n        Assert.Single(big);\n    }\n\n    [Fact]\n    public async Task Api_CountEndpoint_UsesTheContainerDatabase()\n    {\n        await using var factory = new ShopApiFactory(sql.ConnectionString);\n        using var client = factory.CreateClient();\n\n        var response = await client.GetAsync(\"/orders/count\");\n\n        Assert.True(response.IsSuccessStatusCode);\n    }\n}\n"
        }
      ]
    },
    {
      id: "coverage-vs-assertions",
      depth: "detailed",
      title: {
        en: "Coverage shows what ran, not what was checked",
        hi: "Coverage दिखाती है क्या चला, क्या जाँचा गया यह नहीं",
        hg: "Coverage dikhati hai kya chala, kya jaancha gaya ye nahi"
      },
      body: {
        en: "<p><b>Analogy:</b> coverage is the attendance register: it proves the student sat in class. Assertions are the exam marks. A student with 100% attendance can still fail, and a test suite with 100% coverage can still catch nothing. The program below breaks the SLA rule on purpose (a \"mutant\") and shows that the weak suite does not notice, while one boundary test does.</p>\n<ul>\n<li><b>Which coverage tool:</b> coverlet (<code>coverlet.collector</code>) works with the VSTest runner. <code>dotnet-coverage</code> and the <code>Microsoft.Testing.Extensions.CodeCoverage</code> package come from Microsoft and also work with Microsoft.Testing.Platform. Check the documentation of your runner for the exact switch.</li>\n<li><b>Coverage and mutation:</b> coverlet (<code>dotnet test --collect:\"XPlat Code Coverage\"</code>) tells you which lines ran. It does not tell you whether any assertion would notice a bug. <b>Stryker.NET</b> mutates your code (flips <code>&gt;=</code> to <code>&gt;</code>, removes a statement) and checks that some test fails; surviving mutants point at weak tests. It is slow, so run it on changed code or nightly.</li>\n<li><b>Policy:</b> do not make a coverage percentage a pass-or-fail gate for the whole solution; people then write assertion-free tests. Use the report to <i>find gaps</i>, gate only <b>changed code</b> (\"new code needs tests\"), and run mutation testing on critical logic such as billing or SLA, nightly or on changed files.</li>\n<li><b>Snapshot / approval tests</b> (for example the Verify library) compare a serialised result against an approved file. They suit large outputs such as JSON or generated documents; a reviewer must read every changed snapshot in the PR.</li>\n</ul>",
        hi: "<p><b>Analogy:</b> coverage attendance register है: वह साबित करता है कि student class में बैठा था। Assertions exam के marks हैं। 100% attendance वाला student भी फ़ेल हो सकता है, और 100% coverage वाला test suite भी कुछ नहीं पकड़ता। नीचे का program SLA rule को जानबूझकर बिगाड़ता है (एक \"mutant\") और दिखाता है कि weak suite को पता नहीं चलता, जबकि एक boundary test पकड़ लेता है।</p>\n<ul>\n<li><b>कौन-सा coverage tool:</b> coverlet (<code>coverlet.collector</code>) VSTest runner के साथ चलता है। <code>dotnet-coverage</code> और <code>Microsoft.Testing.Extensions.CodeCoverage</code> package Microsoft के हैं और Microsoft.Testing.Platform के साथ भी चलते हैं। सही switch के लिए अपने runner का documentation देखो।</li>\n<li><b>Coverage और mutation:</b> coverlet (<code>dotnet test --collect:\"XPlat Code Coverage\"</code>) बताता है कि कौन-सी lines चलीं। यह नहीं बताता कि कोई assertion bug को notice करेगा या नहीं। <b>Stryker.NET</b> तुम्हारे code को mutate करता है (<code>&gt;=</code> को <code>&gt;</code> कर देता है, statement हटा देता है) और check करता है कि कोई test fail होता है; बचे हुए mutants कमज़ोर tests की ओर इशारा करते हैं। यह slow है, इसलिए changed code पर या nightly चलाओ।</li>\n<li><b>Policy:</b> पूरे solution के लिए coverage percentage को pass-or-fail gate मत बनाओ; तब लोग बिना assertion वाले tests लिखते हैं। Report से <i>कमियाँ ढूँढो</i>, gate सिर्फ़ <b>बदले हुए code</b> पर लगाओ (\"नए code के साथ tests चाहिए\"), और mutation testing billing या SLA जैसे critical logic पर चलाओ, nightly या बदली हुई files पर।</li>\n<li><b>Snapshot / approval tests</b> (जैसे Verify library) serialised result को approved file से compare करते हैं। ये JSON या generated documents जैसे बड़े outputs के लिए ठीक हैं; reviewer को PR में हर बदली हुई snapshot पढ़नी पड़ती है।</li>\n</ul>",
        hg: "<p><b>Analogy:</b> coverage attendance register hai: wo saabit karta hai ki student class mein baitha tha. Assertions exam ke marks hain. 100% attendance wala student bhi fail ho sakta hai, aur 100% coverage wala test suite bhi kuch nahi pakadta. Neeche ka program SLA rule ko jaanbujhkar bigaadta hai (ek \"mutant\") aur dikhata hai ki weak suite ko pata nahi chalta, jabki ek boundary test pakad leta hai.</p>\n<ul>\n<li><b>Kaun-sa coverage tool:</b> coverlet (<code>coverlet.collector</code>) VSTest runner ke saath chalta hai. <code>dotnet-coverage</code> aur <code>Microsoft.Testing.Extensions.CodeCoverage</code> package Microsoft ke hain aur Microsoft.Testing.Platform ke saath bhi chalte hain. Sahi switch ke liye apne runner ka documentation dekho.</li>\n<li><b>Coverage aur mutation:</b> coverlet (<code>dotnet test --collect:\"XPlat Code Coverage\"</code>) batata hai ki kaun-si lines chali. Yeh nahi batata ki koi assertion bug ko notice karega ya nahi. <b>Stryker.NET</b> tumhare code ko mutate karta hai (<code>&gt;=</code> ko <code>&gt;</code> kar deta hai, statement hata deta hai) aur check karta hai ki koi test fail hota hai; bache hue mutants kamzor tests ki taraf ishaara karte hain. Yeh slow hai, isliye changed code par ya nightly chalao.</li>\n<li><b>Policy:</b> poore solution ke liye coverage percentage ko pass-or-fail gate mat banao; tab log bina assertion wale tests likhte hain. Report se <i>kamiyan dhoondho</i>, gate sirf <b>badle hue code</b> par lagao (\"naye code ke saath tests chahiye\"), aur mutation testing billing ya SLA jaise critical logic par chalao, nightly ya badli hui files par.</li>\n<li><b>Snapshot / approval tests</b> (jaise Verify library) serialised result ko approved file se compare karte hain. Yeh JSON ya generated documents jaise bade outputs ke liye theek hain; reviewer ko PR mein har badli hui snapshot padhni padti hai.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "A weak suite and a strong suite against one mutant",
            hi: "एक mutant के सामने weak और strong suite",
            hg: "Ek mutant ke saamne weak aur strong suite"
          },
          src: "// A test with no assert still \"covers\" the line it runs.\nConsole.WriteLine($\"no-assert test passed, covers the line: {RunsWithoutError(() => Sla.IsBreached(10))}\");\n\n// Mutation testing by hand: change the code a little (a \"mutant\") and see if any test notices.\nFunc<int, bool> original = Sla.IsBreached;                  // hours > 4\nFunc<int, bool> mutant = hours => hours >= 4;               // bug: > became >=\n\nvar weakSuite = new (string Name, Func<Func<int, bool>, bool> Passes)[]\n{\n    (\"10 hours is breached\", isBreached => isBreached(10)),\n};\nvar strongSuite = weakSuite.Append((\"exactly 4 hours is NOT breached\", isBreached => !isBreached(4))).ToArray();\n\nReport(\"weak suite  \", weakSuite);                           // covers 100% of the lines, still misses the bug\nReport(\"strong suite\", strongSuite);\n\nvoid Report(string label, (string Name, Func<Func<int, bool>, bool> Passes)[] suite)\n{\n    var originalOk = suite.All(t => t.Passes(original));\n    var mutantCaught = suite.Any(t => !t.Passes(mutant));\n    Console.WriteLine($\"{label}: original {(originalOk ? \"passes\" : \"fails\")}, mutant {(mutantCaught ? \"killed\" : \"SURVIVED\")}\");\n}\n\nstatic bool RunsWithoutError(Action test)\n{\n    try { test(); return true; } catch { return false; }\n}\n\npublic static class Sla\n{\n    public static bool IsBreached(int hoursOpen) => hoursOpen > 4;   // High priority: 4 hours allowed\n}",
          check: "run",
          expected: "no-assert test passed, covers the line: True\nweak suite  : original passes, mutant SURVIVED\nstrong suite: original passes, mutant killed"
        },
        {
          caption: {
            en: "Coverage and mutation from the command line (display only). Coverage finds untested code; Stryker checks whether tests would notice a bug.",
            hi: "Command line से coverage और mutation (सिर्फ़ दिखाने के लिए)। Coverage untested code ढूँढती है; Stryker check करता है कि tests bug को notice करेंगे या नहीं।",
            hg: "Command line se coverage aur mutation (sirf dikhane ke liye). Coverage untested code dhoondhti hai; Stryker check karta hai ki tests bug ko notice karenge ya nahi."
          },
          lang: "bash",
          check: "none",
          src: "# 1) run tests and collect coverage (the test project references the coverlet.collector package)\ndotnet test --collect:\"XPlat Code Coverage\" --results-directory ./TestResults\n\n# 2) optional: turn the cobertura XML into an HTML report\ndotnet tool install --global dotnet-reportgenerator-globaltool\nreportgenerator -reports:\"TestResults/**/coverage.cobertura.xml\" -targetdir:coverage-report\n\n# 3) mutation testing (slow): run on a critical project, or only on code changed since main\ndotnet tool install --global dotnet-stryker\ncd tests/Orders.Tests\ndotnet stryker --since:main\n"
        }
      ]
    },
    {
      id: "tdd-and-review",
      depth: "detailed",
      title: {
        en: "TDD and a test review checklist",
        hi: "TDD और test review checklist",
        hg: "TDD aur test review checklist"
      },
      body: {
        en: "<p><b>Analogy:</b> a building inspector does not count bricks; he checks that the pillars would hold. In a test review you do not count tests or coverage; you check that each test would <b>fail for the right reason</b>.</p>\n<ul>\n<li><b>Review checklist for a test PR:</b> (1) does the name state behaviour and scenario? (2) would the test fail if the production code were wrong (is there a real assertion)? (3) one behaviour, clear AAA? (4) no sleeps, no real clock, no network, no shared state? (5) are doubles used only at boundaries, and do assertions check results rather than internals? (6) is the test independent and order-free? (7) for a bug fix: did the new test fail before the fix?</li>\n<li><b>TDD</b> (red, green, refactor): write a failing test, make it pass in the simplest way, clean up. It works very well for business rules and bug fixes. A TL usually promotes it as a habit and mandates a smaller rule that is easy to check: <b>every bug fix comes with a test that failed before the fix</b>.</li>\n<li><b>TDD in a team:</b> encourage test-first for rules, algorithms and bug fixes; do not mandate it for exploratory spikes, UI layout or thin glue code. What you can check in review is the outcome (a test exists and is meaningful), not the order in which it was written.</li>\n</ul>\n<p><b>When to use / when not:</b> use the checklist in code review and put it in the PR template. Do not turn it into a points system, and do not block a hotfix for missing perfect tests: agree a rule like \"hotfix now, test within a day\".</p>",
        hi: "<p><b>Analogy:</b> building inspector ईंटें नहीं गिनता; वह check करता है कि pillars टिकेंगे या नहीं। Test review में तुम tests या coverage नहीं गिनते; तुम check करते हो कि हर test <b>सही कारण से fail</b> होगा।</p>\n<ul>\n<li><b>Test PR का review checklist:</b> (1) नाम behaviour और scenario बताता है? (2) production code ग़लत हो तो test fail होगा (क्या असली assertion है)? (3) एक behaviour, साफ़ AAA? (4) कोई sleep नहीं, real clock नहीं, network नहीं, shared state नहीं? (5) doubles सिर्फ़ boundaries पर हैं, और assertions internals की जगह results check करते हैं? (6) test independent और order-free है? (7) bug fix के लिए: नया test fix से पहले fail हुआ था?</li>\n<li><b>TDD</b> (red, green, refactor): failing test लिखो, सबसे simple तरीके से pass कराओ, clean up करो। Business rules और bug fixes के लिए यह बहुत अच्छा काम करता है। TL आमतौर पर इसे habit की तरह promote करता है और एक छोटा, आसानी से check होने वाला rule mandate करता है: <b>हर bug fix के साथ ऐसा test जो fix से पहले fail होता था</b>।</li>\n<li><b>Team में TDD:</b> rules, algorithms और bug fixes के लिए test-first को encourage करो; exploratory spikes, UI layout या पतले glue code के लिए mandate मत करो। Review में तुम outcome check कर सकते हो (test मौजूद है और meaningful है), यह नहीं कि किस order में लिखा गया।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> checklist को code review में use करो और PR template में रखो। इसे points system मत बनाओ, और hotfix को perfect tests की कमी पर मत रोको: \"अभी hotfix, एक दिन में test\" जैसा rule agree करो।</p>",
        hg: "<p><b>Analogy:</b> building inspector eentein nahi ginta; woh check karta hai ki pillars tikenge ya nahi. Test review mein tum tests ya coverage nahi ginte; tum check karte ho ki har test <b>sahi kaaran se fail</b> hoga.</p>\n<ul>\n<li><b>Test PR ka review checklist:</b> (1) naam behaviour aur scenario batata hai? (2) production code galat ho to test fail hoga (kya asli assertion hai)? (3) ek behaviour, saaf AAA? (4) koi sleep nahi, real clock nahi, network nahi, shared state nahi? (5) doubles sirf boundaries par hain, aur assertions internals ki jagah results check karte hain? (6) test independent aur order-free hai? (7) bug fix ke liye: naya test fix se pehle fail hua tha?</li>\n<li><b>TDD</b> (red, green, refactor): failing test likho, sabse simple tareeke se pass karao, clean up karo. Business rules aur bug fixes ke liye yeh bahut achha kaam karta hai. TL aamtaur par ise habit ki tarah promote karta hai aur ek chhota, aasaani se check hone wala rule mandate karta hai: <b>har bug fix ke saath aisa test jo fix se pehle fail hota tha</b>.</li>\n<li><b>Team mein TDD:</b> rules, algorithms aur bug fixes ke liye test-first ko encourage karo; exploratory spikes, UI layout ya patle glue code ke liye mandate mat karo. Review mein tum outcome check kar sakte ho (test maujood hai aur meaningful hai), yeh nahi ki kis order mein likha gaya.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> checklist ko code review mein use karo aur PR template mein rakho. Ise points system mat banao, aur hotfix ko perfect tests ki kami par mat roko: \"abhi hotfix, ek din mein test\" jaisa rule agree karo.</p>"
      },
      code: [
        {
          caption: {
            en: "Review exercise: a smelly test (do not copy it) and the clean version that a TL would approve.",
            hi: "Review exercise: एक smelly test (copy मत करो) और clean version जिसे TL approve करेगा।",
            hg: "Review exercise: ek smelly test (copy mat karo) aur clean version jise TL approve karega."
          },
          check: "compile",
          packages: [
            "xunit@2.*",
            "Moq@4.20.72"
          ],
          src: "using Moq;\nusing Xunit;\n\npublic interface IStock { int Available(string sku); void Reserve(string sku, int qty); }\npublic interface IAudit { void Log(string message); }\n\npublic class ReservationService(IStock stock, IAudit audit)\n{\n    public bool TryReserve(string sku, int qty)\n    {\n        if (stock.Available(sku) < qty) return false;\n        stock.Reserve(sku, qty);\n        audit.Log(\"reserved \" + sku);\n        return true;\n    }\n}\n\npublic class ReservationServiceSmellyTests\n{\n    // SMELLY - do not copy: vague name, two behaviours, a sleep that proves nothing,\n    // a weak assertion, and verification of an internal detail (the audit log).\n    [Fact]\n    public void Test1()\n    {\n        var stock = new Mock<IStock>();\n        stock.Setup(s => s.Available(It.IsAny<string>())).Returns(10);\n        var audit = new Mock<IAudit>();\n        var sut = new ReservationService(stock.Object, audit.Object);\n\n        var ok = sut.TryReserve(\"tea\", 3);\n        Thread.Sleep(500);\n        var notOk = sut.TryReserve(\"tea\", 30);\n\n        Assert.True(ok || notOk);\n        audit.Verify(a => a.Log(It.IsAny<string>()), Times.AtLeastOnce);\n    }\n}\n\npublic class ReservationServiceTests\n{\n    private readonly Mock<IStock> _stock = new();\n    private readonly Mock<IAudit> _audit = new();\n    private readonly ReservationService _sut;\n\n    public ReservationServiceTests() => _sut = new ReservationService(_stock.Object, _audit.Object);\n\n    [Fact]\n    public void TryReserve_EnoughStock_ReturnsTrueAndReservesQuantity()\n    {\n        _stock.Setup(s => s.Available(\"tea\")).Returns(10);\n\n        var result = _sut.TryReserve(\"tea\", 3);\n\n        Assert.True(result);\n        _stock.Verify(s => s.Reserve(\"tea\", 3), Times.Once);        // the real side effect\n    }\n\n    [Fact]\n    public void TryReserve_NotEnoughStock_ReturnsFalseAndReservesNothing()\n    {\n        _stock.Setup(s => s.Available(\"tea\")).Returns(2);\n\n        var result = _sut.TryReserve(\"tea\", 3);\n\n        Assert.False(result);\n        _stock.Verify(s => s.Reserve(It.IsAny<string>(), It.IsAny<int>()), Times.Never);\n    }\n}\n"
        },
        {
          caption: {
            en: "A pipeline split (Azure DevOps style, see Day 21)",
            hi: "Pipeline का बँटवारा (Azure DevOps style, Day 21 देखो)",
            hg: "Pipeline ka bantwaara (Azure DevOps style, Day 21 dekho)"
          },
          lang: "yaml",
          check: "none",
          src: "jobs:\n- job: FastTests                       # every PR: minutes, not tens of minutes\n  steps:\n  - script: dotnet test --configuration Release --filter \"Category!=Integration\" --collect:\"XPlat Code Coverage\" --logger trx\n    displayName: Unit and in-memory API tests\n  - task: PublishTestResults@2\n    condition: succeededOrFailed()\n    inputs: { testResultsFormat: VSTest, testResultsFiles: '**/*.trx' }\n\n- job: IntegrationTests                # needs Docker on the agent (Testcontainers)\n  steps:\n  - script: dotnet test --configuration Release --filter \"Category=Integration\" --logger trx\n    displayName: Container-backed database tests\n  - task: PublishTestResults@2\n    condition: succeededOrFailed()\n    inputs: { testResultsFormat: VSTest, testResultsFiles: '**/*.trx' }\n"
        }
      ]
    },
    {
      id: "whats-new",
      depth: "detailed",
      title: {
        en: "What is new in testing tools",
        hi: "Testing tools में नया क्या है",
        hg: "Testing tools mein naya kya hai"
      },
      body: {
        en: "<p><b>What is current (verify versions on NuGet before you pin):</b> <b>xUnit v3</b> (<code>xunit.v3</code> packages) is released next to v2 and supports Microsoft.Testing.Platform natively; <b>MSTest</b> v4 is the current major version; <code>TimeProvider</code> with <code>FakeTimeProvider</code> replaces hand-made clocks; on <b>.NET 10</b> the SDK generates the <code>Program</code> class that <code>WebApplicationFactory</code> needs, so an explicit <code>public partial class Program { }</code> is only for .NET 8/9; FluentAssertions v8+ is commercially licensed (see the Q&amp;A).</p>",
        hi: "<p><b>अभी का हाल (pin करने से पहले NuGet पर versions verify करो):</b> <b>xUnit v3</b> (<code>xunit.v3</code> packages) v2 के साथ released है और Microsoft.Testing.Platform natively support करता है; <b>MSTest</b> v4 current major version है; <code>TimeProvider</code> और <code>FakeTimeProvider</code> hand-made clocks की जगह लेते हैं; <b>.NET 10</b> में SDK वह <code>Program</code> class generate करता है जो <code>WebApplicationFactory</code> को चाहिए, इसलिए explicit <code>public partial class Program { }</code> सिर्फ़ .NET 8/9 के लिए है; FluentAssertions v8+ commercially licensed है (Q&amp;A देखो)।</p>",
        hg: "<p><b>Abhi ka haal (pin karne se pehle NuGet par versions verify karo):</b> <b>xUnit v3</b> (<code>xunit.v3</code> packages) v2 ke saath released hai aur Microsoft.Testing.Platform natively support karta hai; <b>MSTest</b> v4 current major version hai; <code>TimeProvider</code> aur <code>FakeTimeProvider</code> hand-made clocks ki jagah lete hain; <b>.NET 10</b> mein SDK woh <code>Program</code> class generate karta hai jo <code>WebApplicationFactory</code> ko chahiye, isliye explicit <code>public partial class Program { }</code> sirf .NET 8/9 ke liye hai; FluentAssertions v8+ commercially licensed hai (Q&amp;A dekho).</p>"
      }
    }
  ],
  qa: [
    {
      id: "pyramid-vs-trophy",
      depth: "short",
      q: "What is the test pyramid, and is it still the right shape? What about the testing trophy?",
      answer: "The pyramid wants many unit tests, fewer integration tests and very few end-to-end tests; the trophy leans on integration tests. Both are trade-offs; I shape the suite from where bugs occur.",
      meaning: {
        hi: "Pyramid में बहुत सारे unit tests, कम integration tests और बहुत कम end-to-end tests होते हैं; trophy integration tests पर झुकता है। दोनों trade-offs हैं; मैं suite की shape वहाँ से बनाता हूँ जहाँ bugs आते हैं।",
        hg: "Pyramid mein bahut saare unit tests, kam integration tests aur bahut kam end-to-end tests hote hain; trophy integration tests par jhukta hai. Dono trade-offs hain; main suite ki shape wahan se banata hoon jahan bugs aate hain."
      },
      explain: {
        en: "<ul>\n<li>Pyramid (Mike Cohn): speed and cost grow as you go up, so keep the top thin. It was a reaction to suites that leaned heavily on slow UI tests.</li>\n<li>Trophy (Kent C. Dodds) and the microservices honeycomb: most bugs are in the wiring between parts, and mocks hide wiring bugs, so integration tests give more confidence per test.</li>\n<li>For an ASP.NET Core API on EF Core there is often little pure logic; endpoint tests with <code>WebApplicationFactory</code> and a real database may be the biggest group, and that is fine.</li>\n<li>TL angle: ask \"where did our last ten production bugs come from?\" and shape the suite to catch those. Do not argue about shapes without that data.</li>\n<li>Follow-up: \"Isn't it an anti-pattern to have an ice-cream cone (many UI tests, few unit tests)?\" Yes, usually: slow, flaky and expensive to debug.</li>\n</ul>",
        hi: "<ul>\n<li>Pyramid (Mike Cohn): ऊपर जाने पर speed और cost बढ़ती है, इसलिए top पतला रखो। यह slow UI tests पर बहुत ज़्यादा टिकी suites की reaction थी।</li>\n<li>Trophy (Kent C. Dodds) और microservices honeycomb: ज़्यादातर bugs parts के बीच की wiring में होते हैं, और mocks wiring bugs छुपाते हैं, इसलिए integration tests हर test पर ज़्यादा confidence देते हैं।</li>\n<li>EF Core पर ASP.NET Core API में अक्सर pure logic कम होती है; <code>WebApplicationFactory</code> और real database वाले endpoint tests सबसे बड़ा group हो सकते हैं, और वो ठीक है।</li>\n<li>TL angle: पूछो \"हमारे पिछले दस production bugs कहाँ से आए?\" और suite की shape वैसी बनाओ जो उन्हें पकड़े। उस data के बिना shapes पर बहस मत करो।</li>\n<li>Follow-up: \"Ice-cream cone (बहुत UI tests, कम unit tests) anti-pattern है न?\" हाँ, आमतौर पर: slow, flaky और debug करने में महँगा।</li>\n</ul>",
        hg: "<ul>\n<li>Pyramid (Mike Cohn): upar jaane par speed aur cost badhti hai, isliye top patla rakho. Yeh slow UI tests par bahut zyaada tiki suites ki reaction thi.</li>\n<li>Trophy (Kent C. Dodds) aur microservices honeycomb: zyaadatar bugs parts ke beech ki wiring mein hote hain, aur mocks wiring bugs chhupate hain, isliye integration tests har test par zyaada confidence dete hain.</li>\n<li>EF Core par ASP.NET Core API mein aksar pure logic kam hoti hai; <code>WebApplicationFactory</code> aur real database wale endpoint tests sabse bada group ho sakte hain, aur woh theek hai.</li>\n<li>TL angle: poochho \"hamare pichhle das production bugs kahan se aaye?\" aur suite ki shape waisi banao jo unhe pakde. Us data ke bina shapes par bahas mat karo.</li>\n<li>Follow-up: \"Ice-cream cone (bahut UI tests, kam unit tests) anti-pattern hai na?\" Haan, aamtaur par: slow, flaky aur debug karne mein mehenga.</li>\n</ul>"
      }
    },
    {
      id: "test-types",
      depth: "short",
      q: "Explain unit, integration, end-to-end and contract tests. Where does each one sit in your strategy?",
      answer: "Unit tests check one piece of logic without I/O; integration tests check real parts together; end-to-end tests drive the whole system; contract tests check that consumer and provider agree on message shape.",
      meaning: {
        hi: "Unit tests I/O के बिना logic का एक piece check करते हैं; integration tests real parts को साथ में check करते हैं; end-to-end tests पूरा system चलाते हैं; contract tests check करते हैं कि consumer और provider message की shape पर agree हैं।",
        hg: "Unit tests I/O ke bina logic ka ek piece check karte hain; integration tests real parts ko saath mein check karte hain; end-to-end tests poora system chalate hain; contract tests check karte hain ki consumer aur provider message ki shape par agree hain."
      },
      explain: {
        en: "<ul>\n<li><b>Unit</b> tests cover rules and calculations; they run in milliseconds and need no Docker. <b>Integration</b> tests cover seams: HTTP pipeline, EF Core queries, serialisation, messaging.</li>\n<li><b>End-to-end</b> tests (browser or a full deployed environment) prove a few critical journeys such as login and checkout. They are slow and flaky-prone, so keep them few.</li>\n<li><b>Contract tests</b> matter when teams deploy independently (Day 16 microservices): the consumer states what it needs, the provider verifies it in its own pipeline (Pact is a common tool; OpenAPI diff checks are a lighter form).</li>\n<li>Also name the extras if asked: smoke tests after deploy, performance tests, security tests. Not everything needs automation on every PR.</li>\n<li>Follow-up: \"Where do you put validation rules?\" Unit tests for the rule itself, one integration test that the endpoint returns the right ProblemDetails (Day 13).</li>\n</ul>",
        hi: "<ul>\n<li><b>Unit</b> tests rules और calculations cover करते हैं; milliseconds में चलते हैं और Docker नहीं चाहिए। <b>Integration</b> tests seams cover करते हैं: HTTP pipeline, EF Core queries, serialisation, messaging।</li>\n<li><b>End-to-end</b> tests (browser या पूरा deployed environment) कुछ critical journeys prove करते हैं, जैसे login और checkout। ये slow और flaky होने की ओर रहते हैं, इसलिए कम रखो।</li>\n<li><b>Contract tests</b> तब ज़रूरी हैं जब teams independently deploy करती हैं (Day 16 जैसे microservices): consumer बताता है उसे क्या चाहिए, provider अपनी pipeline में उसे verify करता है (Pact common tool है; OpenAPI diff checks हल्का रूप हैं)।</li>\n<li>पूछा जाए तो extras भी बताओ: deploy के बाद smoke tests, performance tests, security tests। हर चीज़ हर PR पर automate नहीं करनी होती।</li>\n<li>Follow-up: \"Validation rules कहाँ रखते हो?\" Rule के लिए unit tests, और एक integration test कि endpoint सही ProblemDetails return करता है (Day 13)।</li>\n</ul>",
        hg: "<ul>\n<li><b>Unit</b> tests rules aur calculations cover karte hain; milliseconds mein chalte hain aur Docker nahi chahiye. <b>Integration</b> tests seams cover karte hain: HTTP pipeline, EF Core queries, serialisation, messaging.</li>\n<li><b>End-to-end</b> tests (browser ya poora deployed environment) kuch critical journeys prove karte hain, jaise login aur checkout. Yeh slow aur flaky hone ki taraf rehte hain, isliye kam rakho.</li>\n<li><b>Contract tests</b> tab zaroori hain jab teams independently deploy karti hain (Day 16 jaise microservices): consumer batata hai use kya chahiye, provider apni pipeline mein use verify karta hai (Pact common tool hai; OpenAPI diff checks halka roop hain).</li>\n<li>Poocha jaye to extras bhi batao: deploy ke baad smoke tests, performance tests, security tests. Har cheez har PR par automate nahi karni hoti.</li>\n<li>Follow-up: \"Validation rules kahan rakhte ho?\" Rule ke liye unit tests, aur ek integration test ki endpoint sahi ProblemDetails return karta hai (Day 13).</li>\n</ul>"
      }
    },
    {
      id: "good-unit-test",
      depth: "short",
      q: "What makes a good unit test? How do you name and structure yours?",
      answer: "It is fast, isolated, repeatable and self-checking, tests one behaviour, follows Arrange-Act-Assert, and has a name like Method_Scenario_Expected so a failure explains itself.",
      meaning: {
        hi: "वो fast, isolated, repeatable और self-checking होता है, एक behaviour test करता है, Arrange-Act-Assert follow करता है, और उसका नाम Method_Scenario_Expected जैसा होता है ताकि failure ख़ुद समझा दे।",
        hg: "Woh fast, isolated, repeatable aur self-checking hota hai, ek behaviour test karta hai, Arrange-Act-Assert follow karta hai, aur uska naam Method_Scenario_Expected jaisa hota hai taaki failure khud samjha de."
      },
      explain: {
        en: "<ul>\n<li><b>FIRST:</b> Fast, Isolated, Repeatable, Self-validating, Timely. A test that needs the network, the clock or another test's leftovers breaks the rules.</li>\n<li><b>One behaviour</b> does not mean one assert line: several asserts on one result object are fine. It means one reason to fail per test.</li>\n<li><b>Naming:</b> <code>Total_NoDiscount_MultipliesPriceByQuantity</code> or a sentence style; pick one convention for the team and write it down. Avoid <code>Test1</code> and <code>ShouldWork</code>.</li>\n<li><b>Test through the public behaviour</b>, not private methods. Tests tied to internals break on every refactor and teach the team to hate tests.</li>\n<li>TL angle: tests are documentation. A new joiner should understand the rule by reading the test names alone.</li>\n</ul>",
        hi: "<ul>\n<li><b>FIRST:</b> Fast, Isolated, Repeatable, Self-validating, Timely। जो test network, clock या दूसरे test के बचे हुए data पर depend करे, वो rules तोड़ता है।</li>\n<li><b>एक behaviour</b> का मतलब एक assert line नहीं है: एक result object पर कई asserts ठीक हैं। मतलब यह कि हर test के fail होने की एक ही वजह हो।</li>\n<li><b>Naming:</b> <code>Total_NoDiscount_MultipliesPriceByQuantity</code> या sentence style; team के लिए एक convention चुनो और लिख लो। <code>Test1</code> और <code>ShouldWork</code> से बचो।</li>\n<li><b>Public behaviour के through test करो</b>, private methods नहीं। Internals से बंधे tests हर refactor पर टूटते हैं और team को tests से नफ़रत सिखा देते हैं।</li>\n<li>TL angle: tests documentation हैं। नए joiner को सिर्फ़ test names पढ़कर rule समझ आना चाहिए।</li>\n</ul>",
        hg: "<ul>\n<li><b>FIRST:</b> Fast, Isolated, Repeatable, Self-validating, Timely. Jo test network, clock ya doosre test ke bache hue data par depend kare, woh rules todta hai.</li>\n<li><b>Ek behaviour</b> ka matlab ek assert line nahi hai: ek result object par kai asserts theek hain. Matlab yeh ki har test ke fail hone ki ek hi wajah ho.</li>\n<li><b>Naming:</b> <code>Total_NoDiscount_MultipliesPriceByQuantity</code> ya sentence style; team ke liye ek convention chuno aur likh lo. <code>Test1</code> aur <code>ShouldWork</code> se bacho.</li>\n<li><b>Public behaviour ke through test karo</b>, private methods nahi. Internals se bandhe tests har refactor par tootte hain aur team ko tests se nafrat sikha dete hain.</li>\n<li>TL angle: tests documentation hain. Naye joiner ko sirf test names padhkar rule samajh aana chahiye.</li>\n</ul>"
      }
    },
    {
      id: "fact-vs-theory",
      depth: "short",
      q: "In xUnit, what is the difference between Fact and Theory, and how do you feed data to a Theory?",
      answer: "A Fact is a test with no parameters. A Theory runs the same test for several data rows, supplied by InlineData, MemberData or ClassData, and each row is reported separately.",
      meaning: {
        hi: "Fact बिना parameters वाला test है। Theory वही test कई data rows के लिए चलाती है, जो InlineData, MemberData या ClassData से आती हैं, और हर row अलग report होती है।",
        hg: "Fact bina parameters wala test hai. Theory wahi test kai data rows ke liye chalati hai, jo InlineData, MemberData ya ClassData se aati hain, aur har row alag report hoti hai."
      },
      explain: {
        en: "<ul>\n<li><code>[InlineData(1, 2, 3)]</code> takes compile-time constants; <code>[MemberData(nameof(Cases))]</code> points at a static property/method (objects, generated rows); <code>[ClassData(typeof(X))]</code> uses a class that yields rows.</li>\n<li>Rows run independently: if row 3 fails, rows 1, 2, 4 still run and show as separate results (Puzzle 2 models this).</li>\n<li>Use a Theory for the same behaviour with different inputs (boundaries, invalid values). If the expected behaviour differs per row, they should be separate Facts.</li>\n<li>Gotcha: data must be serialisable for individual rows to show separately in some runners; otherwise the whole theory appears as one test.</li>\n<li>Follow-up: \"How do you test that something throws?\" <code>Assert.Throws&lt;T&gt;</code> (exact type) or <code>Assert.ThrowsAny&lt;T&gt;</code> (derived types allowed), and use the async versions for async code.</li>\n</ul>",
        hi: "<ul>\n<li><code>[InlineData(1, 2, 3)]</code> compile-time constants लेता है; <code>[MemberData(nameof(Cases))]</code> static property/method की ओर point करता है (objects, generated rows); <code>[ClassData(typeof(X))]</code> ऐसी class use करता है जो rows yield करे।</li>\n<li>Rows independently चलती हैं: row 3 fail हो तो rows 1, 2, 4 फिर भी चलती हैं और अलग results दिखती हैं (Puzzle 2 यही model करता है)।</li>\n<li>Same behaviour अलग inputs (boundaries, invalid values) के लिए Theory use करो। अगर हर row का expected behaviour अलग है तो वे अलग Facts होने चाहिए।</li>\n<li>Gotcha: कुछ runners में rows अलग दिखने के लिए data serialisable होना चाहिए; वरना पूरी theory एक test की तरह दिखती है।</li>\n<li>Follow-up: \"Throw होने को कैसे test करते हो?\" <code>Assert.Throws&lt;T&gt;</code> (exact type) या <code>Assert.ThrowsAny&lt;T&gt;</code> (derived types allowed), और async code के लिए async versions।</li>\n</ul>",
        hg: "<ul>\n<li><code>[InlineData(1, 2, 3)]</code> compile-time constants leta hai; <code>[MemberData(nameof(Cases))]</code> static property/method ki taraf point karta hai (objects, generated rows); <code>[ClassData(typeof(X))]</code> aisi class use karta hai jo rows yield kare.</li>\n<li>Rows independently chalti hain: row 3 fail ho to rows 1, 2, 4 phir bhi chalti hain aur alag results dikhti hain (Puzzle 2 yahi model karta hai).</li>\n<li>Same behaviour alag inputs (boundaries, invalid values) ke liye Theory use karo. Agar har row ka expected behaviour alag hai to woh alag Facts hone chahiye.</li>\n<li>Gotcha: kuch runners mein rows alag dikhne ke liye data serialisable hona chahiye; warna poori theory ek test ki tarah dikhti hai.</li>\n<li>Follow-up: \"Throw hone ko kaise test karte ho?\" <code>Assert.Throws&lt;T&gt;</code> (exact type) ya <code>Assert.ThrowsAny&lt;T&gt;</code> (derived types allowed), aur async code ke liye async versions.</li>\n</ul>"
      }
    },
    {
      id: "xunit-isolation",
      depth: "short",
      q: "How does xUnit isolate tests, and how do you share an expensive resource such as a database or a web factory?",
      answer: "xUnit creates a new instance of the test class for every test, so instance state never leaks. For expensive setup, use IClassFixture within a class or ICollectionFixture across classes.",
      meaning: {
        hi: "xUnit हर test के लिए test class का नया instance बनाता है, इसलिए instance state कभी leak नहीं होती। महँगे setup के लिए class के अंदर IClassFixture या classes के बीच ICollectionFixture use करो।",
        hg: "xUnit har test ke liye test class ka naya instance banata hai, isliye instance state kabhi leak nahi hoti. Mehenge setup ke liye class ke andar IClassFixture ya classes ke beech ICollectionFixture use karo."
      },
      explain: {
        en: "<ul>\n<li>Constructor = per-test setup; <code>IDisposable.Dispose</code> = per-test cleanup. NUnit differs: it uses one instance per fixture by default with <code>[SetUp]</code> methods, which makes shared fields easier to leak by mistake.</li>\n<li><code>IClassFixture&lt;T&gt;</code>: xUnit creates <code>T</code> once, injects it into the constructor of every test in that class, and disposes it at the end. <code>ICollectionFixture&lt;T&gt;</code> does the same across all classes marked <code>[Collection(\"name\")]</code>.</li>\n<li>Rule: the shared fixture must not hold per-test state; each test brings its own data. Otherwise you re-create the order dependence that per-test instances were meant to remove.</li>\n<li>Puzzle 1 models the lifecycle: three tests, three constructor runs, one fixture.</li>\n<li>Follow-up: \"Async setup?\" Implement <code>IAsyncLifetime</code> (<code>Task</code> in v2, <code>ValueTask</code> in v3).</li>\n</ul>",
        hi: "<ul>\n<li>Constructor = per-test setup; <code>IDisposable.Dispose</code> = per-test cleanup। NUnit अलग है: वह default में हर fixture के लिए एक instance और <code>[SetUp]</code> methods use करता है, जिससे shared fields ग़लती से leak होना आसान है।</li>\n<li><code>IClassFixture&lt;T&gt;</code>: xUnit <code>T</code> एक बार बनाता है, उस class के हर test के constructor में inject करता है और आख़िर में dispose करता है। <code>ICollectionFixture&lt;T&gt;</code> वही काम <code>[Collection(\"name\")]</code> वाली सभी classes के लिए करता है।</li>\n<li>Rule: shared fixture में per-test state नहीं होनी चाहिए; हर test अपना data लाए। वरना तुम वही order dependence वापस बना लेते हो जिसे per-test instances हटाने के लिए थे।</li>\n<li>Puzzle 1 lifecycle model करता है: तीन tests, तीन constructor runs, एक fixture।</li>\n<li>Follow-up: \"Async setup?\" <code>IAsyncLifetime</code> implement करो (v2 में <code>Task</code>, v3 में <code>ValueTask</code>)।</li>\n</ul>",
        hg: "<ul>\n<li>Constructor = per-test setup; <code>IDisposable.Dispose</code> = per-test cleanup. NUnit alag hai: woh default mein har fixture ke liye ek instance aur <code>[SetUp]</code> methods use karta hai, jisse shared fields galti se leak hona aasaan hai.</li>\n<li><code>IClassFixture&lt;T&gt;</code>: xUnit <code>T</code> ek baar banata hai, us class ke har test ke constructor mein inject karta hai aur aakhir mein dispose karta hai. <code>ICollectionFixture&lt;T&gt;</code> wahi kaam <code>[Collection(\"name\")]</code> wali sabhi classes ke liye karta hai.</li>\n<li>Rule: shared fixture mein per-test state nahi honi chahiye; har test apna data laye. Warna tum wahi order dependence wapas bana lete ho jise per-test instances hatane ke liye the.</li>\n<li>Puzzle 1 lifecycle model karta hai: teen tests, teen constructor runs, ek fixture.</li>\n<li>Follow-up: \"Async setup?\" <code>IAsyncLifetime</code> implement karo (v2 mein <code>Task</code>, v3 mein <code>ValueTask</code>).</li>\n</ul>"
      }
    },
    {
      id: "stub-fake-mock",
      depth: "short",
      q: "What is the difference between a stub, a fake, a spy and a mock? Which do you prefer?",
      answer: "A stub returns canned answers, a fake is a working shortcut, a spy records calls, a mock verifies expected interactions. I prefer fakes and stubs with state assertions, and mocks for real side effects.",
      meaning: {
        hi: "Stub canned answers देता है, fake एक working shortcut है, spy calls record करता है, mock expected interactions verify करता है। मैं state assertions के साथ fakes और stubs को prefer करता हूँ, और mocks real side effects के लिए।",
        hg: "Stub canned answers deta hai, fake ek working shortcut hai, spy calls record karta hai, mock expected interactions verify karta hai. Main state assertions ke saath fakes aur stubs ko prefer karta hoon, aur mocks real side effects ke liye."
      },
      explain: {
        en: "<ul>\n<li>Terms come from Gerard Meszaros (xUnit Test Patterns), popularised by Martin Fowler's \"Mocks Aren't Stubs\": dummy, stub, fake, spy, mock. In everyday speech people call them all \"mocks\"; in an interview, show you know the difference.</li>\n<li><b>State-based</b> tests ask \"what is the result or the stored state?\" and survive refactoring. <b>Interaction-based</b> tests ask \"which methods were called?\" and break when you restructure code that still behaves the same.</li>\n<li>Use a mock when the call <i>is</i> the observable outcome: an email sent, a message published, a payment charged exactly once.</li>\n<li>Day 8 explains why you can fake things at all: depend on abstractions (DIP) at real boundaries.</li>\n<li>Follow-up: \"Your test needs 10 mock setups; what does it tell you?\" The class under test likely does too much (SRP) or the design is too chatty with its collaborators.</li>\n</ul>",
        hi: "<ul>\n<li>Terms Gerard Meszaros (xUnit Test Patterns) से आए हैं, Martin Fowler के \"Mocks Aren't Stubs\" से popular हुए: dummy, stub, fake, spy, mock। रोज़ की बोलचाल में लोग सबको \"mocks\" कह देते हैं; interview में दिखाओ कि तुम्हें फ़र्क़ पता है।</li>\n<li><b>State-based</b> tests पूछते हैं \"result या stored state क्या है?\" और refactoring में टिकते हैं। <b>Interaction-based</b> tests पूछते हैं \"कौन-से methods call हुए?\" और उस code को restructure करने पर टूटते हैं जो वैसे ही behave करता है।</li>\n<li>Mock तब use करो जब call ही observable outcome हो: email भेजा गया, message publish हुआ, payment ठीक एक बार charge हुआ।</li>\n<li>Day 8 बताता है कि चीज़ें fake कैसे हो सकती हैं: real boundaries पर abstractions पर depend करो (DIP)।</li>\n<li>Follow-up: \"तुम्हारे test को 10 mock setups चाहिए; यह क्या बताता है?\" Class शायद बहुत कुछ करती है (SRP) या design अपने collaborators से बहुत chatty है।</li>\n</ul>",
        hg: "<ul>\n<li>Terms Gerard Meszaros (xUnit Test Patterns) se aaye hain, Martin Fowler ke \"Mocks Aren't Stubs\" se popular hue: dummy, stub, fake, spy, mock. Roz ki bolchal mein log sabko \"mocks\" keh dete hain; interview mein dikhao ki tumhe farq pata hai.</li>\n<li><b>State-based</b> tests poochte hain \"result ya stored state kya hai?\" aur refactoring mein tikte hain. <b>Interaction-based</b> tests poochte hain \"kaun-se methods call hue?\" aur us code ko restructure karne par tootte hain jo waise hi behave karta hai.</li>\n<li>Mock tab use karo jab call hi observable outcome ho: email bheja gaya, message publish hua, payment theek ek baar charge hua.</li>\n<li>Day 8 batata hai ki cheezein fake kaise ho sakti hain: real boundaries par abstractions par depend karo (DIP).</li>\n<li>Follow-up: \"Tumhare test ko 10 mock setups chahiye; yeh kya batata hai?\" Class shaayad bahut kuch karti hai (SRP) ya design apne collaborators se bahut chatty hai.</li>\n</ul>"
      }
    },
    {
      id: "webapp-factory",
      depth: "short",
      q: "How do you write integration tests for an ASP.NET Core API?",
      answer: "Use WebApplicationFactory&lt;Program&gt; to run the real app in memory, call it with CreateClient, and override only external services in ConfigureTestServices, such as the database, clock or auth.",
      meaning: {
        hi: "WebApplicationFactory&lt;Program&gt; से real app memory में चलाओ, CreateClient से call करो, और ConfigureTestServices में सिर्फ़ बाहरी services override करो, जैसे database, clock या auth।",
        hg: "WebApplicationFactory&lt;Program&gt; se real app memory mein chalao, CreateClient se call karo, aur ConfigureTestServices mein sirf bahari services override karo, jaise database, clock ya auth."
      },
      explain: {
        en: "<ul>\n<li>The factory builds your real <code>Program</code> pipeline: routing, middleware, model binding, filters, DI (Day 12, Day 13) with an in-memory test server, so tests run fast and need no port.</li>\n<li>Make <code>Program</code> visible: .NET 10 generates it; on .NET 8/9 add <code>public partial class Program { }</code> when using top-level statements.</li>\n<li>Override in <code>ConfigureTestServices</code> (runs after the app's registrations). Typical overrides: payment client to a fake, <code>TimeProvider</code> to a <code>FakeTimeProvider</code>, DbContext to a container database, authentication to a test handler.</li>\n<li>Assert on status codes, bodies, headers and persisted effects. This catches missing <code>[Authorize]</code>, wrong routes and serialisation mismatches.</li>\n<li>Follow-up: \"How do you handle authentication?\" A test auth handler that builds the principal from a header; test real JWT validation once separately.</li>\n</ul>",
        hi: "<ul>\n<li>Factory तुम्हारी real <code>Program</code> pipeline बनाता है: routing, middleware, model binding, filters, DI (Day 12, Day 13), in-memory test server के साथ, इसलिए tests fast चलते हैं और port नहीं चाहिए।</li>\n<li><code>Program</code> को visible करो: .NET 10 उसे generate करता है; .NET 8/9 में top-level statements के साथ <code>public partial class Program { }</code> जोड़ो।</li>\n<li><code>ConfigureTestServices</code> में override करो (app की registrations के बाद चलता है)। Typical overrides: payment client को fake, <code>TimeProvider</code> को <code>FakeTimeProvider</code>, DbContext को container database, authentication को test handler।</li>\n<li>Status codes, bodies, headers और persisted effects पर assert करो। यह छूटा <code>[Authorize]</code>, ग़लत routes और serialisation mismatch पकड़ता है।</li>\n<li>Follow-up: \"Authentication कैसे handle करते हो?\" Test auth handler जो header से principal बनाए; real JWT validation एक बार अलग से test करो।</li>\n</ul>",
        hg: "<ul>\n<li>Factory tumhari real <code>Program</code> pipeline banata hai: routing, middleware, model binding, filters, DI (Day 12, Day 13), in-memory test server ke saath, isliye tests fast chalte hain aur port nahi chahiye.</li>\n<li><code>Program</code> ko visible karo: .NET 10 use generate karta hai; .NET 8/9 mein top-level statements ke saath <code>public partial class Program { }</code> jodo.</li>\n<li><code>ConfigureTestServices</code> mein override karo (app ki registrations ke baad chalta hai). Typical overrides: payment client ko fake, <code>TimeProvider</code> ko <code>FakeTimeProvider</code>, DbContext ko container database, authentication ko test handler.</li>\n<li>Status codes, bodies, headers aur persisted effects par assert karo. Yeh chhoota <code>[Authorize]</code>, galat routes aur serialisation mismatch pakadta hai.</li>\n<li>Follow-up: \"Authentication kaise handle karte ho?\" Test auth handler jo header se principal banaye; real JWT validation ek baar alag se test karo.</li>\n</ul>"
      }
    },
    {
      id: "coverage-meaning",
      depth: "short",
      q: "Your team has 90% code coverage but still ships bugs. What does coverage tell you and what does it not?",
      answer: "Coverage shows which lines ran, not whether any assertion would catch a bug, so it finds untested areas but is a poor target. I also review assertion quality and consider mutation testing.",
      meaning: {
        hi: "Coverage दिखाती है कि कौन-सी lines चलीं, यह नहीं कि कोई assertion bug पकड़ेगा, इसलिए वो untested areas ढूँढती है पर target के रूप में कमज़ोर है। मैं assertion quality भी review करता हूँ और mutation testing सोचता हूँ।",
        hg: "Coverage dikhati hai ki kaun-si lines chali, yeh nahi ki koi assertion bug pakdega, isliye woh untested areas dhoondhti hai par target ke roop mein kamzor hai. Main assertion quality bhi review karta hoon aur mutation testing sochta hoon."
      },
      explain: {
        en: "<ul>\n<li>A test with no assertion still executes lines, so it adds coverage and proves nothing (Puzzle 7: 100% line coverage and a bug that no test notices).</li>\n<li>Coverage also ignores missing tests for behaviour that is not in the code at all (a missing validation) and says nothing about integration between parts.</li>\n<li>Once coverage becomes a target, people write assertion-free tests to hit it (Goodhart's law). Prefer \"new and changed code is tested\" plus reading uncovered lines of risky code.</li>\n<li>Better signals: mutation score (Stryker.NET, Puzzle 6), bugs that escaped, how often tests fail for the right reason, and review of assertions.</li>\n<li>Tooling: <code>coverlet.collector</code> with <code>dotnet test --collect:\"XPlat Code Coverage\"</code>, then a report tool; line vs branch coverage — branch coverage is stricter.</li>\n</ul>",
        hi: "<ul>\n<li>बिना assertion का test भी lines execute करता है, इसलिए coverage बढ़ाता है और कुछ prove नहीं करता (Puzzle 7: 100% line coverage और ऐसा bug जिसे कोई test notice नहीं करता)।</li>\n<li>Coverage उस behaviour के missing tests को भी ignore करती है जो code में है ही नहीं (missing validation), और parts के बीच integration के बारे में कुछ नहीं बताती।</li>\n<li>Coverage target बन जाए तो लोग उसे hit करने के लिए assertion-free tests लिखते हैं (Goodhart's law)। \"नया और बदला हुआ code tested है\" को prefer करो, और risky code की uncovered lines पढ़ो।</li>\n<li>बेहतर signals: mutation score (Stryker.NET, Puzzle 6), बचकर निकले bugs, tests कितनी बार सही कारण से fail होते हैं, और assertions का review।</li>\n<li>Tooling: <code>coverlet.collector</code> के साथ <code>dotnet test --collect:\"XPlat Code Coverage\"</code>, फिर report tool; line vs branch coverage — branch coverage ज़्यादा strict है।</li>\n</ul>",
        hg: "<ul>\n<li>Bina assertion ka test bhi lines execute karta hai, isliye coverage badhata hai aur kuch prove nahi karta (Puzzle 7: 100% line coverage aur aisa bug jise koi test notice nahi karta).</li>\n<li>Coverage us behaviour ke missing tests ko bhi ignore karti hai jo code mein hai hi nahi (missing validation), aur parts ke beech integration ke baare mein kuch nahi batati.</li>\n<li>Coverage target ban jaye to log use hit karne ke liye assertion-free tests likhte hain (Goodhart's law). \"Naya aur badla hua code tested hai\" ko prefer karo, aur risky code ki uncovered lines padho.</li>\n<li>Behtar signals: mutation score (Stryker.NET, Puzzle 6), bachkar nikle bugs, tests kitni baar sahi kaaran se fail hote hain, aur assertions ka review.</li>\n<li>Tooling: <code>coverlet.collector</code> ke saath <code>dotnet test --collect:\"XPlat Code Coverage\"</code>, phir report tool; line vs branch coverage — branch coverage zyaada strict hai.</li>\n</ul>"
      }
    },
    {
      id: "moq-vs-nsubstitute",
      depth: "detailed",
      q: "Moq or NSubstitute? And what was the Moq SponsorLink controversy?",
      answer: "Both mock interfaces well; NSubstitute has lighter syntax, Moq is more widespread. Moq 4.20.0 added a SponsorLink analyzer that read the git email; after a backlash it was removed in 4.20.2.",
      meaning: {
        hi: "दोनों interfaces अच्छे से mock करते हैं; NSubstitute का syntax हल्का है, Moq ज़्यादा widespread है। Moq 4.20.0 में SponsorLink analyzer आया जो git email पढ़ता था; backlash के बाद 4.20.2 में हटा दिया गया।",
        hg: "Dono interfaces achhe se mock karte hain; NSubstitute ka syntax halka hai, Moq zyaada widespread hai. Moq 4.20.0 mein SponsorLink analyzer aaya jo git email padhta tha; backlash ke baad 4.20.2 mein hata diya gaya."
      },
      explain: {
        en: "<ul>\n<li><b>Syntax:</b> Moq: <code>mock.Setup(x =&gt; x.Get(1)).Returns(2)</code>, <code>mock.Object</code>, <code>Verify</code>. NSubstitute: <code>sub.Get(1).Returns(2)</code>, the substitute <i>is</i> the object, <code>Received</code>. Both: interfaces and virtual members only, no static or sealed.</li>\n<li><b>Behavioural details to know:</b> in Moq the latest matching setup wins (Puzzle 3); NSubstitute <code>Returns(a, b, c)</code> plays a sequence then repeats the last (Puzzle 4), and unconfigured members return defaults (empty string for string).</li>\n<li><b>SponsorLink, factually (Aug 2023):</b> Moq 4.20.0 included a closed-source, obfuscated build analyzer; developers reported that it read the local git email, hashed it and checked it against a sponsorship service, with no way to opt out (the maintainer said the email itself is never sent). Many objected (privacy, corporate security rules). The maintainer defended it as a way to fund open source. Version 4.20.2 removed it. Sources: the Moq GitHub issue and the 4.20.2 release notes.</li>\n<li><b>TL lesson:</b> pin and review versions of test dependencies, use dependency scanning, and know your licences. Test packages run on every developer machine and build agent. Do not tell the interviewer that a library is \"bad\"; say what happened and how you protect the team.</li>\n<li>Follow-up: \"Would you migrate away from Moq?\" Cost versus risk: Moq 4.20.2 removed SponsorLink; teams moved for various reasons, and migrating a large suite is real work. Decide on policy and cost, not on the news cycle.</li>\n</ul>",
        hi: "<ul>\n<li><b>Syntax:</b> Moq: <code>mock.Setup(x =&gt; x.Get(1)).Returns(2)</code>, <code>mock.Object</code>, <code>Verify</code>। NSubstitute: <code>sub.Get(1).Returns(2)</code>, substitute ख़ुद object <i>है</i>, <code>Received</code>। दोनों: सिर्फ़ interfaces और virtual members, static या sealed नहीं।</li>\n<li><b>Behavioural details:</b> Moq में सबसे latest matching setup जीतता है (Puzzle 3); NSubstitute <code>Returns(a, b, c)</code> sequence चलाता है फिर आख़िरी दोहराता है (Puzzle 4), और unconfigured members defaults देते हैं (string के लिए empty string)।</li>\n<li><b>SponsorLink, factually (Aug 2023):</b> Moq 4.20.0 में closed-source, obfuscated build analyzer था; developers ने report किया कि वो local git email पढ़ता, hash करता और sponsorship service से check करता था, opt-out का रास्ता नहीं था (maintainer ने कहा कि email ख़ुद कभी भेजा नहीं जाता)। कई लोगों ने objection किया (privacy, corporate security rules)। Maintainer ने इसे open source को fund करने का तरीक़ा बताकर defend किया। Version 4.20.2 ने इसे हटा दिया। Sources: Moq का GitHub issue और 4.20.2 release notes।</li>\n<li><b>TL lesson:</b> test dependencies के versions pin और review करो, dependency scanning use करो, और licences जानो। Test packages हर developer machine और build agent पर चलते हैं। Interviewer को library \"बुरी\" मत बताओ; बताओ क्या हुआ और तुम team को कैसे protect करते हो।</li>\n<li>Follow-up: \"क्या Moq से migrate करोगे?\" Cost बनाम risk: Moq 4.20.2 ने SponsorLink हटा दिया; teams अलग-अलग कारणों से move हुईं, और बड़ी suite migrate करना असली काम है। Policy और cost पर decide करो, news cycle पर नहीं।</li>\n</ul>",
        hg: "<ul>\n<li><b>Syntax:</b> Moq: <code>mock.Setup(x =&gt; x.Get(1)).Returns(2)</code>, <code>mock.Object</code>, <code>Verify</code>. NSubstitute: <code>sub.Get(1).Returns(2)</code>, substitute khud object <i>hai</i>, <code>Received</code>. Dono: sirf interfaces aur virtual members, static ya sealed nahi.</li>\n<li><b>Behavioural details:</b> Moq mein sabse latest matching setup jeetta hai (Puzzle 3); NSubstitute <code>Returns(a, b, c)</code> sequence chalata hai phir aakhri dohrata hai (Puzzle 4), aur unconfigured members defaults dete hain (string ke liye empty string).</li>\n<li><b>SponsorLink, factually (Aug 2023):</b> Moq 4.20.0 mein closed-source, obfuscated build analyzer tha; developers ne report kiya ki woh local git email padhta, hash karta aur sponsorship service se check karta tha, opt-out ka raasta nahi tha (maintainer ne kaha ki email khud kabhi bheja nahi jaata). Kai logon ne objection kiya (privacy, corporate security rules). Maintainer ne ise open source ko fund karne ka tareeka bataakar defend kiya. Version 4.20.2 ne ise hata diya. Sources: Moq ka GitHub issue aur 4.20.2 release notes.</li>\n<li><b>TL lesson:</b> test dependencies ke versions pin aur review karo, dependency scanning use karo, aur licences jaano. Test packages har developer machine aur build agent par chalte hain. Interviewer ko library \"buri\" mat batao; batao kya hua aur tum team ko kaise protect karte ho.</li>\n<li>Follow-up: \"Kya Moq se migrate karoge?\" Cost banam risk: Moq 4.20.2 ne SponsorLink hata diya; teams alag-alag kaaranon se move hui, aur badi suite migrate karna asli kaam hai. Policy aur cost par decide karo, news cycle par nahi.</li>\n</ul>"
      }
    },
    {
      id: "assertion-library-licence",
      depth: "detailed",
      q: "FluentAssertions changed its licence. What happened, and what do you do about it in a company codebase?",
      answer: "FluentAssertions v8 and later need a paid licence for commercial use, while v7 stays Apache 2.0. Options: stay on v7, buy the licence, or move to Shouldly, AwesomeAssertions or built-in Assert.",
      meaning: {
        hi: "FluentAssertions v8 और उसके बाद commercial use के लिए paid licence माँगते हैं, जबकि v7 Apache 2.0 रहता है। Options: v7 पर रहो, licence ख़रीदो, या Shouldly, AwesomeAssertions या built-in Assert पर जाओ।",
        hg: "FluentAssertions v8 aur uske baad commercial use ke liye paid licence maangte hain, jabki v7 Apache 2.0 rehta hai. Options: v7 par raho, licence kharido, ya Shouldly, AwesomeAssertions ya built-in Assert par jao."
      },
      explain: {
        en: "<ul>\n<li><b>Facts (check the official site before you decide):</b> FluentAssertions version 8 and above are free for open-source and non-commercial use; commercial use needs a paid licence sold through Xceed, with whom the library's creators have a partnership. Version 7 stays under Apache 2.0 and continues to get fixes.</li>\n<li><b>Alternatives:</b> <b>Shouldly</b> (<code>result.ShouldBe(5)</code>), <b>AwesomeAssertions</b> (a community fork of FluentAssertions under Apache 2.0, with almost the same API), or the framework's own <code>Assert</code> (xUnit, NUnit). Assertion libraries are cheap to swap compared with mocking frameworks, but a large suite still needs a search-and-replace plan.</li>\n<li><b>TL decision frame:</b> (1) ask legal/procurement whether your usage counts as commercial; (2) check the exact version in every project, because an automatic upgrade from 7 to 8 would change the licence; (3) choose pin, pay or migrate and record it as a short ADR.</li>\n<li>The built-in assertions are enough for most tests; a fluent library mainly improves failure messages and collection/object comparison.</li>\n<li>Do not quote prices or claim the licence is \"evil\"; state what changed and the options.</li>\n</ul>",
        hi: "<ul>\n<li><b>Facts (decide करने से पहले official site check करो):</b> FluentAssertions version 8 और ऊपर open-source और non-commercial use के लिए free हैं; commercial use के लिए Xceed के ज़रिए paid licence चाहिए, जिनके साथ library के creators की partnership है। Version 7 Apache 2.0 में रहता है और fixes मिलते रहते हैं।</li>\n<li><b>Alternatives:</b> <b>Shouldly</b> (<code>result.ShouldBe(5)</code>), <b>AwesomeAssertions</b> (FluentAssertions का community fork, Apache 2.0 में, लगभग same API), या framework का अपना <code>Assert</code> (xUnit, NUnit)। Assertion libraries को mocking frameworks के मुक़ाबले बदलना सस्ता है, पर बड़ी suite के लिए भी search-and-replace plan चाहिए।</li>\n<li><b>TL decision frame:</b> (1) legal/procurement से पूछो कि तुम्हारा use commercial गिना जाएगा या नहीं; (2) हर project में exact version check करो, क्योंकि 7 से 8 का automatic upgrade licence बदल देगा; (3) pin, pay या migrate चुनो और छोटे ADR में record करो।</li>\n<li>ज़्यादातर tests के लिए built-in assertions काफ़ी हैं; fluent library मुख्य रूप से failure messages और collection/object comparison बेहतर करती है।</li>\n<li>Prices मत बताओ और licence को \"evil\" मत कहो; बताओ क्या बदला और options क्या हैं।</li>\n</ul>",
        hg: "<ul>\n<li><b>Facts (decide karne se pehle official site check karo):</b> FluentAssertions version 8 aur upar open-source aur non-commercial use ke liye free hain; commercial use ke liye Xceed ke zariye paid licence chahiye, jinke saath library ke creators ki partnership hai. Version 7 Apache 2.0 mein rehta hai aur fixes milte rehte hain.</li>\n<li><b>Alternatives:</b> <b>Shouldly</b> (<code>result.ShouldBe(5)</code>), <b>AwesomeAssertions</b> (FluentAssertions ka community fork, Apache 2.0 mein, lagbhag same API), ya framework ka apna <code>Assert</code> (xUnit, NUnit). Assertion libraries ko mocking frameworks ke muqable badalna sasta hai, par badi suite ke liye bhi search-and-replace plan chahiye.</li>\n<li><b>TL decision frame:</b> (1) legal/procurement se poochho ki tumhara use commercial ginaa jayega ya nahi; (2) har project mein exact version check karo, kyonki 7 se 8 ka automatic upgrade licence badal dega; (3) pin, pay ya migrate chuno aur chhote ADR mein record karo.</li>\n<li>Zyaadatar tests ke liye built-in assertions kaafi hain; fluent library mukhya roop se failure messages aur collection/object comparison behtar karti hai.</li>\n<li>Prices mat batao aur licence ko \"evil\" mat kaho; batao kya badla aur options kya hain.</li>\n</ul>"
      }
    },
    {
      id: "xunit-v3",
      depth: "detailed",
      q: "What is xUnit v3, and would you migrate an existing v2 solution?",
      answer: "xUnit v3 is the current generation: test projects are executables, async lifecycle uses ValueTask, and TestContext.Current is available. Migrate when you need its features and your CI tooling is ready, not by default.",
      meaning: {
        hi: "xUnit v3 current generation है: test projects executables हैं, async lifecycle में ValueTask, और TestContext.Current मिलता है। Migrate तब करो जब उसके features चाहिए और CI tooling तैयार हो, by default नहीं।",
        hg: "xUnit v3 current generation hai: test projects executables hain, async lifecycle mein ValueTask, aur TestContext.Current milta hai. Migrate tab karo jab uske features chahiye aur CI tooling taiyaar ho, by default nahi."
      },
      explain: {
        en: "<ul>\n<li><b>What is new (xunit.net docs):</b> package ids are <code>xunit.v3</code> (plus <code>xunit.v3.core</code>, <code>xunit.v3.assert</code>, the console runner); test projects run as separate executables and support Microsoft.Testing.Platform natively; <code>TestContext.Current</code> gives a cancellation token, diagnostic messages and attachments; assembly-wide fixtures exist; parallelism algorithm is configurable; some features need .NET 8+ (for example generic <code>[Collection&lt;T&gt;]</code>).</li>\n<li><b>Status:</b> v3 is released and stable on NuGet, shown as 3.x and 4.x versions at the time of writing; v2 (<code>xunit</code> 2.9.x) is still widely used. Check xunit.net and NuGet for the current version before you write a migration plan.</li>\n<li><b>Migration risk:</b> check <code>IAsyncLifetime</code> signatures (<code>ValueTask</code>), namespace moves (for example <code>ITestOutputHelper</code>), third-party extensions that target v2 (some packages have separate v3 versions), and your CI and IDE test adapters.</li>\n<li>TL angle: no big-bang migration; start with a new test project, or migrate one project per sprint. The test names and AAA structure do not change, so it is mostly mechanical.</li>\n<li>Honest answer in an interview: \"I know v3 exists and what changed; for a stable v2 suite I would migrate when a feature or support policy justifies it.\"</li>\n</ul>",
        hi: "<ul>\n<li><b>क्या नया है (xunit.net docs):</b> package ids <code>xunit.v3</code> हैं (साथ में <code>xunit.v3.core</code>, <code>xunit.v3.assert</code>, console runner); test projects अलग executables की तरह चलते हैं और Microsoft.Testing.Platform natively support करते हैं; <code>TestContext.Current</code> cancellation token, diagnostic messages और attachments देता है; assembly-wide fixtures हैं; parallelism algorithm configurable है; कुछ features को .NET 8+ चाहिए (जैसे generic <code>[Collection&lt;T&gt;]</code>)।</li>\n<li><b>Status:</b> v3 released और NuGet पर stable है, लिखते समय 3.x और 4.x versions दिखते हैं; v2 (<code>xunit</code> 2.9.x) अब भी widely use होता है। Migration plan लिखने से पहले xunit.net और NuGet पर current version check करो।</li>\n<li><b>Migration risk:</b> <code>IAsyncLifetime</code> signatures (<code>ValueTask</code>), namespace moves (जैसे <code>ITestOutputHelper</code>), v2 को target करने वाले third-party extensions (कुछ packages के अलग v3 versions हैं), और तुम्हारे CI और IDE test adapters check करो।</li>\n<li>TL angle: big-bang migration नहीं; नए test project से शुरू करो, या हर sprint में एक project migrate करो। Test names और AAA structure नहीं बदलते, इसलिए ज़्यादातर काम mechanical है।</li>\n<li>Interview में honest answer: \"मुझे पता है v3 क्या है और क्या बदला; stable v2 suite को मैं तब migrate करूँगा जब कोई feature या support policy justify करे।\"</li>\n</ul>",
        hg: "<ul>\n<li><b>Kya naya hai (xunit.net docs):</b> package ids <code>xunit.v3</code> hain (saath mein <code>xunit.v3.core</code>, <code>xunit.v3.assert</code>, console runner); test projects alag executables ki tarah chalte hain aur Microsoft.Testing.Platform natively support karte hain; <code>TestContext.Current</code> cancellation token, diagnostic messages aur attachments deta hai; assembly-wide fixtures hain; parallelism algorithm configurable hai; kuch features ko .NET 8+ chahiye (jaise generic <code>[Collection&lt;T&gt;]</code>).</li>\n<li><b>Status:</b> v3 released aur NuGet par stable hai, likhte samay 3.x aur 4.x versions dikhte hain; v2 (<code>xunit</code> 2.9.x) ab bhi widely use hota hai. Migration plan likhne se pehle xunit.net aur NuGet par current version check karo.</li>\n<li><b>Migration risk:</b> <code>IAsyncLifetime</code> signatures (<code>ValueTask</code>), namespace moves (jaise <code>ITestOutputHelper</code>), v2 ko target karne wale third-party extensions (kuch packages ke alag v3 versions hain), aur tumhare CI aur IDE test adapters check karo.</li>\n<li>TL angle: big-bang migration nahi; naye test project se shuru karo, ya har sprint mein ek project migrate karo. Test names aur AAA structure nahi badalte, isliye zyaadatar kaam mechanical hai.</li>\n<li>Interview mein honest answer: \"Mujhe pata hai v3 kya hai aur kya badla; stable v2 suite ko main tab migrate karunga jab koi feature ya support policy justify kare.\"</li>\n</ul>"
      }
    },
    {
      id: "xunit-nunit-mstest",
      depth: "detailed",
      q: "xUnit vs NUnit vs MSTest: which would you pick for a new .NET project and why?",
      answer: "All three are solid; I would choose xUnit for its per-test isolation and common use, while MSTest or NUnit are fine if the team knows them. Consistency matters more than the brand.",
      meaning: {
        hi: "तीनों solid हैं; मैं xUnit चुनूँगा क्योंकि उसमें per-test isolation है और वो आम है, जबकि team MSTest या NUnit जानती हो तो वे भी ठीक हैं। Brand से ज़्यादा consistency matter करती है।",
        hg: "Teeno solid hain; main xUnit chunoonga kyonki usme per-test isolation hai aur woh aam hai, jabki team MSTest ya NUnit jaanti ho to woh bhi theek hain. Brand se zyaada consistency matter karti hai."
      },
      explain: {
        en: "<ul>\n<li><b>xUnit:</b> <code>[Fact]</code>/<code>[Theory]</code>, constructor and <code>IDisposable</code> instead of setup attributes, new instance per test, no <code>[ExpectedException]</code>. Used by the .NET runtime and ASP.NET Core repositories themselves, and most templates and samples.</li>\n<li><b>NUnit:</b> <code>[Test]</code>/<code>[TestCase]</code>, <code>[SetUp]</code>/<code>[TearDown]</code>, rich constraint model <code>Assert.That(x, Is.EqualTo(3))</code>, one instance per fixture by default.</li>\n<li><b>MSTest:</b> <code>[TestClass]</code>/<code>[TestMethod]</code>/<code>[DataRow]</code>. Microsoft's docs describe MSTest as fully supported and open source, with v3 a rewrite and v4 the current major version at the time of writing; it supports only the latest release, and recommends MSTest.Sdk with Microsoft.Testing.Platform for new projects.</li>\n<li>All run with <code>dotnet test</code> and on Azure Pipelines / GitHub Actions. Differences are mostly attributes, lifecycle style and extensibility.</li>\n<li>TL answer: \"The framework is rarely the bottleneck. I standardise one per solution, add shared test helpers and an analyzer set, and spend the effort on the strategy.\"</li>\n</ul>",
        hi: "<ul>\n<li><b>xUnit:</b> <code>[Fact]</code>/<code>[Theory]</code>, setup attributes की जगह constructor और <code>IDisposable</code>, हर test के लिए नया instance, <code>[ExpectedException]</code> नहीं। .NET runtime और ASP.NET Core repositories ख़ुद इसे use करते हैं, और ज़्यादातर templates और samples भी।</li>\n<li><b>NUnit:</b> <code>[Test]</code>/<code>[TestCase]</code>, <code>[SetUp]</code>/<code>[TearDown]</code>, rich constraint model <code>Assert.That(x, Is.EqualTo(3))</code>, default में हर fixture के लिए एक instance।</li>\n<li><b>MSTest:</b> <code>[TestClass]</code>/<code>[TestMethod]</code>/<code>[DataRow]</code>। Microsoft की docs MSTest को fully supported और open source बताती हैं, v3 एक rewrite और v4 लिखते समय current major version; यह सिर्फ़ latest release support करता है, और नए projects के लिए Microsoft.Testing.Platform के साथ MSTest.Sdk recommend करता है।</li>\n<li>तीनों <code>dotnet test</code> से और Azure Pipelines / GitHub Actions पर चलते हैं। फ़र्क़ ज़्यादातर attributes, lifecycle style और extensibility का है।</li>\n<li>TL answer: \"Framework शायद ही bottleneck होता है। मैं हर solution में एक standardise करता हूँ, shared test helpers और analyzer set जोड़ता हूँ, और मेहनत strategy पर लगाता हूँ।\"</li>\n</ul>",
        hg: "<ul>\n<li><b>xUnit:</b> <code>[Fact]</code>/<code>[Theory]</code>, setup attributes ki jagah constructor aur <code>IDisposable</code>, har test ke liye naya instance, <code>[ExpectedException]</code> nahi. .NET runtime aur ASP.NET Core repositories khud ise use karti hain, aur zyaadatar templates aur samples bhi.</li>\n<li><b>NUnit:</b> <code>[Test]</code>/<code>[TestCase]</code>, <code>[SetUp]</code>/<code>[TearDown]</code>, rich constraint model <code>Assert.That(x, Is.EqualTo(3))</code>, default mein har fixture ke liye ek instance.</li>\n<li><b>MSTest:</b> <code>[TestClass]</code>/<code>[TestMethod]</code>/<code>[DataRow]</code>. Microsoft ki docs MSTest ko fully supported aur open source batati hain, v3 ek rewrite aur v4 likhte samay current major version; yeh sirf latest release support karta hai, aur naye projects ke liye Microsoft.Testing.Platform ke saath MSTest.Sdk recommend karta hai.</li>\n<li>Teeno <code>dotnet test</code> se aur Azure Pipelines / GitHub Actions par chalte hain. Farq zyaadatar attributes, lifecycle style aur extensibility ka hai.</li>\n<li>TL answer: \"Framework shaayad hi bottleneck hota hai. Main har solution mein ek standardise karta hoon, shared test helpers aur analyzer set jodta hoon, aur mehnat strategy par lagata hoon.\"</li>\n</ul>"
      }
    },
    {
      id: "xunit-parallelism",
      depth: "detailed",
      q: "How does xUnit run tests in parallel, and how does that affect tests that share a database?",
      answer: "Test collections run in parallel; tests inside one collection run one after another. Each class is its own collection by default, so classes sharing a database must join one collection or use isolated data.",
      meaning: {
        hi: "Test collections parallel चलती हैं; एक collection के अंदर tests एक के बाद एक चलते हैं। Default में हर class अपनी collection है, इसलिए database share करने वाली classes एक collection में जाएँ या isolated data use करें।",
        hg: "Test collections parallel chalti hain; ek collection ke andar tests ek ke baad ek chalte hain. Default mein har class apni collection hai, isliye database share karne wali classes ek collection mein jayein ya isolated data use karein."
      },
      explain: {
        en: "<ul>\n<li>Default: classes in different collections run at the same time; so two classes that both write to the same table can interfere. Symptom: tests pass alone, fail together.</li>\n<li>Options: (1) put the classes in one <code>[Collection]</code> so they run sequentially (simple, slower); (2) make data independent (unique keys per test, separate schemas or databases); (3) disable parallelism for the assembly as a last resort (<code>[assembly: CollectionBehavior(DisableTestParallelization = true)]</code>).</li>\n<li>Tests inside one class never run in parallel with each other, but their order is not something to rely on.</li>\n<li>In v3 the parallelism algorithm and limits are configurable; check the current docs.</li>\n<li>Follow-up: \"How do you find an order dependency?\" Run the suite in a different order or with parallelism toggled; xUnit can randomise order in newer versions.</li>\n</ul>",
        hi: "<ul>\n<li>Default: अलग collections की classes एक ही समय पर चलती हैं; इसलिए एक ही table में लिखने वाली दो classes आपस में टकरा सकती हैं। Symptom: tests अकेले pass, साथ में fail।</li>\n<li>Options: (1) classes को एक <code>[Collection]</code> में डालो ताकि वे sequentially चलें (simple, slower); (2) data independent बनाओ (हर test के unique keys, अलग schemas या databases); (3) last resort के तौर पर assembly के लिए parallelism बंद करो (<code>[assembly: CollectionBehavior(DisableTestParallelization = true)]</code>)।</li>\n<li>एक class के अंदर tests आपस में parallel कभी नहीं चलते, पर उनके order पर depend नहीं करना चाहिए।</li>\n<li>v3 में parallelism algorithm और limits configurable हैं; current docs check करो।</li>\n<li>Follow-up: \"Order dependency कैसे ढूँढते हो?\" Suite को अलग order में या parallelism toggle करके चलाओ; नए versions में xUnit order randomise कर सकता है।</li>\n</ul>",
        hg: "<ul>\n<li>Default: alag collections ki classes ek hi samay par chalti hain; isliye ek hi table mein likhne wali do classes aapas mein takra sakti hain. Symptom: tests akele pass, saath mein fail.</li>\n<li>Options: (1) classes ko ek <code>[Collection]</code> mein daalo taaki woh sequentially chalein (simple, slower); (2) data independent banao (har test ke unique keys, alag schemas ya databases); (3) last resort ke taur par assembly ke liye parallelism band karo (<code>[assembly: CollectionBehavior(DisableTestParallelization = true)]</code>).</li>\n<li>Ek class ke andar tests aapas mein parallel kabhi nahi chalte, par unke order par depend nahi karna chahiye.</li>\n<li>v3 mein parallelism algorithm aur limits configurable hain; current docs check karo.</li>\n<li>Follow-up: \"Order dependency kaise dhoondhte ho?\" Suite ko alag order mein ya parallelism toggle karke chalao; naye versions mein xUnit order randomise kar sakta hai.</li>\n</ul>"
      }
    },
    {
      id: "ef-testing-strategy",
      depth: "detailed",
      q: "How do you test code that uses EF Core: mock DbContext, in-memory provider, SQLite, or a real database?",
      answer: "Mock a repository interface for business logic, but test queries and mappings against a real engine, ideally SQL Server or PostgreSQL in a container. The in-memory provider is discouraged because it is not relational.",
      meaning: {
        hi: "Business logic के लिए repository interface mock करो, पर queries और mappings को real engine पर test करो, बेहतर हो तो container में SQL Server या PostgreSQL। In-memory provider discouraged है क्योंकि वो relational नहीं है।",
        hg: "Business logic ke liye repository interface mock karo, par queries aur mappings ko real engine par test karo, behtar ho to container mein SQL Server ya PostgreSQL. In-memory provider discouraged hai kyonki woh relational nahi hai."
      },
      explain: {
        en: "<ul>\n<li>This repeats the Day 7 answer with the full picture: <b>mocking DbSet</b> runs LINQ in memory, so untranslatable queries pass (Day 4); <b>in-memory provider</b> has no SQL, no constraints, no real transactions, and Microsoft advises against it for testing.</li>\n<li><b>SQLite</b> is fast and relational but a different dialect: types, collations, locking, <code>DateTimeOffset</code> and provider-specific SQL behave differently from SQL Server.</li>\n<li><b>Real engine in a container (Testcontainers)</b> is closest to production: test migrations, unique indexes, concurrency tokens, raw SQL. Cost: Docker on dev machines and agents, and seconds of start-up (share one container).</li>\n<li>A sensible split: unit tests with fakes for domain logic (no EF at all); a modest number of integration tests for repositories, queries and migrations on a real engine; WebApplicationFactory tests for the endpoints.</li>\n<li>Follow-up: \"How do you keep database tests independent?\" Unique data per test or reset between tests (for example Respawn); never rely on rows left by another test.</li>\n</ul>",
        hi: "<ul>\n<li>यह Day 7 के answer का पूरा picture है: <b>DbSet mock</b> करने से LINQ memory में चलता है, इसलिए untranslatable queries pass हो जाती हैं (Day 4); <b>in-memory provider</b> में SQL नहीं, constraints नहीं, real transactions नहीं, और Microsoft testing के लिए उसके against advise करता है।</li>\n<li><b>SQLite</b> fast और relational है पर अलग dialect: types, collations, locking, <code>DateTimeOffset</code> और provider-specific SQL SQL Server से अलग behave करते हैं।</li>\n<li><b>Container में real engine (Testcontainers)</b> production के सबसे क़रीब है: migrations, unique indexes, concurrency tokens, raw SQL test करो। Cost: dev machines और agents पर Docker, और start-up के कुछ seconds (एक container share करो)।</li>\n<li>समझदार split: domain logic के लिए fakes वाले unit tests (EF बिल्कुल नहीं); repositories, queries और migrations के लिए real engine पर limited integration tests; endpoints के लिए WebApplicationFactory tests।</li>\n<li>Follow-up: \"Database tests independent कैसे रखते हो?\" हर test का unique data या tests के बीच reset (जैसे Respawn); किसी दूसरे test की छोड़ी rows पर कभी depend मत करो।</li>\n</ul>",
        hg: "<ul>\n<li>Yeh Day 7 ke answer ka poora picture hai: <b>DbSet mock</b> karne se LINQ memory mein chalta hai, isliye untranslatable queries pass ho jaati hain (Day 4); <b>in-memory provider</b> mein SQL nahi, constraints nahi, real transactions nahi, aur Microsoft testing ke liye uske against advise karta hai.</li>\n<li><b>SQLite</b> fast aur relational hai par alag dialect: types, collations, locking, <code>DateTimeOffset</code> aur provider-specific SQL SQL Server se alag behave karte hain.</li>\n<li><b>Container mein real engine (Testcontainers)</b> production ke sabse kareeb hai: migrations, unique indexes, concurrency tokens, raw SQL test karo. Cost: dev machines aur agents par Docker, aur start-up ke kuch seconds (ek container share karo).</li>\n<li>Samajhdaar split: domain logic ke liye fakes wale unit tests (EF bilkul nahi); repositories, queries aur migrations ke liye real engine par limited integration tests; endpoints ke liye WebApplicationFactory tests.</li>\n<li>Follow-up: \"Database tests independent kaise rakhte ho?\" Har test ka unique data ya tests ke beech reset (jaise Respawn); kisi doosre test ki chhodi rows par kabhi depend mat karo.</li>\n</ul>"
      }
    },
    {
      id: "testcontainers-tradeoffs",
      depth: "detailed",
      q: "What are the trade-offs of Testcontainers, and how do you make those tests acceptable in CI?",
      answer: "You get a real engine and clean throw-away environments, at the cost of Docker, start-up time and image pulls. Share one container per run and run these tests in a separate CI job.",
      meaning: {
        hi: "Real engine और साफ़ throw-away environments मिलते हैं, Docker, start-up time और image pulls की cost पर। हर run में एक container share करो और इन tests को अलग CI job में चलाओ।",
        hg: "Real engine aur saaf throw-away environments milte hain, Docker, start-up time aur image pulls ki cost par. Har run mein ek container share karo aur in tests ko alag CI job mein chalao."
      },
      explain: {
        en: "<ul>\n<li><b>Benefits:</b> the same engine as production, a fresh instance per run, no shared test server that people corrupt, and the setup is code in the repo (Day 7, Day 21).</li>\n<li><b>Costs:</b> Docker (or a compatible runtime) on every developer machine and build agent, image download time, a few seconds to start SQL Server, licence terms of the images used, and memory use on laptops.</li>\n<li><b>Mitigations:</b> one container per fixture or collection (not per test); pin the image tag; cache images on agents; tag the tests with a trait so unit tests stay fast and you can run containers in their own job (see the CI split in this day).</li>\n<li><b>Alternatives:</b> a shared dev database (slow, flaky, shared state), SQLite (different engine), or cloud-provisioned test databases per PR for larger teams.</li>\n<li>Follow-up: \"A developer has no Docker allowed on the laptop?\" Offer a remote dev environment or let those tests run in CI only, and keep unit tests runnable locally.</li>\n</ul>",
        hi: "<ul>\n<li><b>Benefits:</b> production वाला ही engine, हर run में fresh instance, कोई shared test server नहीं जिसे लोग बिगाड़ दें, और setup repo में code है (Day 7, Day 21)।</li>\n<li><b>Costs:</b> हर developer machine और build agent पर Docker (या compatible runtime), image download time, SQL Server शुरू होने में कुछ seconds, इस्तेमाल हुई images के licence terms, और laptops पर memory use।</li>\n<li><b>Mitigations:</b> हर fixture या collection के लिए एक container (हर test के लिए नहीं); image tag pin करो; agents पर images cache करो; tests को trait से tag करो ताकि unit tests fast रहें और containers अपने job में चल सकें (इस day का CI split देखो)।</li>\n<li><b>Alternatives:</b> shared dev database (slow, flaky, shared state), SQLite (अलग engine), या बड़ी teams के लिए हर PR पर cloud-provisioned test databases।</li>\n<li>Follow-up: \"किसी developer के laptop पर Docker allowed नहीं है?\" Remote dev environment दो या वे tests सिर्फ़ CI में चलने दो, और unit tests locally चलने लायक रखो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Benefits:</b> production wala hi engine, har run mein fresh instance, koi shared test server nahi jise log bigaad dein, aur setup repo mein code hai (Day 7, Day 21).</li>\n<li><b>Costs:</b> har developer machine aur build agent par Docker (ya compatible runtime), image download time, SQL Server shuru hone mein kuch seconds, istemaal hui images ke licence terms, aur laptops par memory use.</li>\n<li><b>Mitigations:</b> har fixture ya collection ke liye ek container (har test ke liye nahi); image tag pin karo; agents par images cache karo; tests ko trait se tag karo taaki unit tests fast rahein aur containers apne job mein chal sakein (is day ka CI split dekho).</li>\n<li><b>Alternatives:</b> shared dev database (slow, flaky, shared state), SQLite (alag engine), ya badi teams ke liye har PR par cloud-provisioned test databases.</li>\n<li>Follow-up: \"Kisi developer ke laptop par Docker allowed nahi hai?\" Remote dev environment do ya woh tests sirf CI mein chalne do, aur unit tests locally chalne layak rakho.</li>\n</ul>"
      }
    },
    {
      id: "time-in-tests",
      depth: "detailed",
      q: "How do you test code that depends on the current time, timers or delays?",
      answer: "Inject TimeProvider instead of calling DateTime.UtcNow, and in tests pass FakeTimeProvider and call Advance. The test controls the clock, never sleeps, and can hit exact boundaries.",
      meaning: {
        hi: "DateTime.UtcNow call करने की जगह TimeProvider inject करो, और tests में FakeTimeProvider देकर Advance call करो। Test clock को control करता है, कभी sleep नहीं करता, और exact boundaries hit कर सकता है।",
        hg: "DateTime.UtcNow call karne ki jagah TimeProvider inject karo, aur tests mein FakeTimeProvider dekar Advance call karo. Test clock ko control karta hai, kabhi sleep nahi karta, aur exact boundaries hit kar sakta hai."
      },
      explain: {
        en: "<ul>\n<li><code>TimeProvider</code> is built into .NET 8+ (<code>TimeProvider.System</code> in production); <code>FakeTimeProvider</code> comes from <code>Microsoft.Extensions.TimeProvider.Testing</code>. Register <code>TimeProvider.System</code> in DI (Day 1, Day 8).</li>\n<li>It also covers timers and delays: <code>CreateTimer</code> and <code>Task.Delay(..., timeProvider)</code> follow the fake clock, so <code>Advance(...)</code> fires them deterministically (Puzzle 5). Day 16 uses it to test a circuit breaker.</li>\n<li>Test the boundary precisely: one tick before expiry and at expiry. A real <code>Thread.Sleep</code> test can only guess.</li>\n<li>For code you cannot change, wrap the static call behind a small interface you own; <code>TimeProvider</code> is now the standard abstraction, so do not invent <code>IClock</code>.</li>\n<li>Time zones: store and compare in UTC (<code>DateTimeOffset</code>); fake the local time zone through <code>TimeProvider.LocalTimeZone</code> only if the logic really needs it.</li>\n</ul>",
        hi: "<ul>\n<li><code>TimeProvider</code> .NET 8+ में built-in है (production में <code>TimeProvider.System</code>); <code>FakeTimeProvider</code> <code>Microsoft.Extensions.TimeProvider.Testing</code> से आता है। DI में <code>TimeProvider.System</code> register करो (Day 1, Day 8)।</li>\n<li>यह timers और delays भी cover करता है: <code>CreateTimer</code> और <code>Task.Delay(..., timeProvider)</code> fake clock को follow करते हैं, इसलिए <code>Advance(...)</code> उन्हें deterministic तरीक़े से fire करता है (Puzzle 5)। Day 16 इसे circuit breaker test करने के लिए use करता है।</li>\n<li>Boundary precisely test करो: expiry से एक tick पहले और expiry पर। असली <code>Thread.Sleep</code> test सिर्फ़ अंदाज़ा लगा सकता है।</li>\n<li>जिस code को बदल नहीं सकते, उसकी static call को अपने छोटे interface के पीछे wrap करो; <code>TimeProvider</code> अब standard abstraction है, इसलिए <code>IClock</code> मत बनाओ।</li>\n<li>Time zones: UTC में store और compare करो (<code>DateTimeOffset</code>); local time zone को <code>TimeProvider.LocalTimeZone</code> से सिर्फ़ तब fake करो जब logic को सच में चाहिए।</li>\n</ul>",
        hg: "<ul>\n<li><code>TimeProvider</code> .NET 8+ mein built-in hai (production mein <code>TimeProvider.System</code>); <code>FakeTimeProvider</code> <code>Microsoft.Extensions.TimeProvider.Testing</code> se aata hai. DI mein <code>TimeProvider.System</code> register karo (Day 1, Day 8).</li>\n<li>Yeh timers aur delays bhi cover karta hai: <code>CreateTimer</code> aur <code>Task.Delay(..., timeProvider)</code> fake clock ko follow karte hain, isliye <code>Advance(...)</code> unhe deterministic tareeke se fire karta hai (Puzzle 5). Day 16 ise circuit breaker test karne ke liye use karta hai.</li>\n<li>Boundary precisely test karo: expiry se ek tick pehle aur expiry par. Asli <code>Thread.Sleep</code> test sirf andaaza laga sakta hai.</li>\n<li>Jis code ko badal nahi sakte, uski static call ko apne chhote interface ke peeche wrap karo; <code>TimeProvider</code> ab standard abstraction hai, isliye <code>IClock</code> mat banao.</li>\n<li>Time zones: UTC mein store aur compare karo (<code>DateTimeOffset</code>); local time zone ko <code>TimeProvider.LocalTimeZone</code> se sirf tab fake karo jab logic ko sach mein chahiye.</li>\n</ul>"
      }
    },
    {
      id: "replace-services-auth",
      depth: "detailed",
      q: "In WebApplicationFactory tests, how do you replace the DbContext and handle authentication?",
      answer: "In ConfigureTestServices remove the existing DbContext registrations and add your own pointing at a test database. For auth, register a test authentication handler that builds the user from a header.",
      meaning: {
        hi: "ConfigureTestServices में मौजूदा DbContext registrations हटाओ और test database की ओर point करने वाला अपना जोड़ो। Auth के लिए test authentication handler register करो जो header से user बनाए।",
        hg: "ConfigureTestServices mein maujooda DbContext registrations hatao aur test database ki taraf point karne wala apna jodo. Auth ke liye test authentication handler register karo jo header se user banaye."
      },
      explain: {
        en: "<ul>\n<li><b>DbContext:</b> <code>RemoveAll&lt;DbContextOptions&lt;T&gt;&gt;()</code>, in EF Core 9 and later also <code>RemoveAll&lt;IDbContextOptionsConfiguration&lt;T&gt;&gt;()</code>, then <code>AddDbContext&lt;T&gt;(o =&gt; o.UseSqlServer(testConnectionString))</code>. If you only add a second registration, the original provider setup can still be applied. Use the same pattern when the test database is SQLite.</li>\n<li><b>Seed data</b> after the host starts (create a scope, get the context, <code>EnsureCreated</code> or migrate) or in the fixture, and give each test its own keys.</li>\n<li><b>Auth:</b> a test handler registered with <code>AddScheme</code> makes <code>[Authorize]</code> work without real tokens. Let tests choose the user and roles through headers, and test the 401, 403 and allowed paths.</li>\n<li>Keep one separate test that goes through the real JWT bearer validation (with a locally signed token), so the real configuration is also exercised (Day 13).</li>\n<li>Pitfall: replacing too much. If you swap routing, filters and serialisation as well, you are testing a different app.</li>\n</ul>",
        hi: "<ul>\n<li><b>DbContext:</b> <code>RemoveAll&lt;DbContextOptions&lt;T&gt;&gt;()</code>, EF Core 9 और उसके बाद <code>RemoveAll&lt;IDbContextOptionsConfiguration&lt;T&gt;&gt;()</code> भी, फिर <code>AddDbContext&lt;T&gt;(o =&gt; o.UseSqlServer(testConnectionString))</code>। सिर्फ़ दूसरा registration जोड़ोगे तो original provider setup अब भी apply हो सकता है। Test database SQLite हो तब भी यही pattern।</li>\n<li><b>Seed data</b> host शुरू होने के बाद करो (scope बनाओ, context लो, <code>EnsureCreated</code> या migrate) या fixture में, और हर test को अपने keys दो।</li>\n<li><b>Auth:</b> <code>AddScheme</code> से register किया test handler असली tokens के बिना <code>[Authorize]</code> चला देता है। Tests को headers से user और roles चुनने दो, और 401, 403 और allowed path <b>तीनों</b> test करो।</li>\n<li>एक अलग test रखो जो real JWT bearer validation से गुज़रे (locally signed token के साथ), ताकि real configuration भी exercise हो (Day 13)।</li>\n<li>Pitfall: बहुत ज़्यादा replace करना। Routing, filters और serialisation भी बदल दोगे तो तुम दूसरी app test कर रहे हो।</li>\n</ul>",
        hg: "<ul>\n<li><b>DbContext:</b> <code>RemoveAll&lt;DbContextOptions&lt;T&gt;&gt;()</code>, EF Core 9 aur uske baad <code>RemoveAll&lt;IDbContextOptionsConfiguration&lt;T&gt;&gt;()</code> bhi, phir <code>AddDbContext&lt;T&gt;(o =&gt; o.UseSqlServer(testConnectionString))</code>. Sirf doosra registration jodoge to original provider setup ab bhi apply ho sakta hai. Test database SQLite ho tab bhi yahi pattern.</li>\n<li><b>Seed data</b> host shuru hone ke baad karo (scope banao, context lo, <code>EnsureCreated</code> ya migrate) ya fixture mein, aur har test ko apne keys do.</li>\n<li><b>Auth:</b> <code>AddScheme</code> se register kiya test handler asli tokens ke bina <code>[Authorize]</code> chala deta hai. Tests ko headers se user aur roles chunne do, aur 401, 403 aur allowed path <b>teeno</b> test karo.</li>\n<li>Ek alag test rakho jo real JWT bearer validation se guzre (locally signed token ke saath), taaki real configuration bhi exercise ho (Day 13).</li>\n<li>Pitfall: bahut zyaada replace karna. Routing, filters aur serialisation bhi badal doge to tum doosri app test kar rahe ho.</li>\n</ul>"
      }
    },
    {
      id: "flaky-tests",
      depth: "detailed",
      q: "A test passes locally but fails randomly in CI. How do you find and fix flaky tests, and what policy do you set?",
      answer: "Reproduce by repeating and reordering, then fix the cause: time, shared state, real network, random data, sleeps or async races. If not fixable now, quarantine it with an owner and deadline.",
      meaning: {
        hi: "Repeat और reorder करके reproduce करो, फिर cause fix करो: time, shared state, real network, random data, sleeps या async races। अभी fix न हो तो owner और deadline के साथ quarantine करो।",
        hg: "Repeat aur reorder karke reproduce karo, phir cause fix karo: time, shared state, real network, random data, sleeps ya async races. Abhi fix na ho to owner aur deadline ke saath quarantine karo."
      },
      explain: {
        en: "<ul>\n<li><b>Find it:</b> run the test 50 times in a loop; run the suite in a different order or with parallelism on and off; compare CI and local (CPU speed, time zone, culture, file paths, Docker).</li>\n<li><b>Causes and fixes:</b> clock → <code>FakeTimeProvider</code>; shared static or database state → per-test data and no statics; real network or external API → fake handler or container; random/GUID data → seeded or fixed values; <code>Thread.Sleep</code>/<code>Task.Delay</code> waiting for something → await the real signal or a <code>TaskCompletionSource</code>; unawaited async work → await it; port clashes → let the test server pick.</li>\n<li><b>Policy:</b> a flaky test is a bug with an owner. Do not use blind automatic retries as the fix (they hide real races); a retry may be acceptable as a temporary, visible stopgap while the cause is fixed. Quarantine means it is excluded from the blocking build, still runs and reports, and has a ticket with a date.</li>\n<li><b>Why TLs care:</b> once the team learns to say \"just re-run it\", real failures get ignored too. Track the flaky rate as a team health metric.</li>\n<li>Puzzle 8-style bugs (order dependence) are the classic case; Puzzle 5 shows a deterministic alternative to sleeping.</li>\n</ul>",
        hi: "<ul>\n<li><b>ढूँढो:</b> test को loop में 50 बार चलाओ; suite को अलग order में या parallelism on और off के साथ चलाओ; CI और local की तुलना करो (CPU speed, time zone, culture, file paths, Docker)।</li>\n<li><b>Causes और fixes:</b> clock → <code>FakeTimeProvider</code>; shared static या database state → per-test data और statics नहीं; real network या external API → fake handler या container; random/GUID data → seeded या fixed values; किसी चीज़ का इंतज़ार करता <code>Thread.Sleep</code>/<code>Task.Delay</code> → असली signal या <code>TaskCompletionSource</code> का await; बिना await का async काम → await करो; port clashes → test server को port चुनने दो।</li>\n<li><b>Policy:</b> flaky test एक bug है जिसका owner है। Blind automatic retries को fix मत बनाओ (वे real races छुपाते हैं); retry cause fix होने तक temporary, visible stopgap के रूप में ठीक हो सकता है। Quarantine का मतलब: blocking build से बाहर, फिर भी चलता और report होता है, और तारीख़ वाला ticket है।</li>\n<li><b>TLs को क्यों फ़िक्र:</b> एक बार team \"बस re-run कर दो\" कहना सीख ले तो real failures भी ignore होने लगती हैं। Flaky rate को team health metric की तरह track करो।</li>\n<li>Puzzle 8-style bugs (order dependence) classic case हैं; Puzzle 5 sleep का deterministic option दिखाता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Dhoondho:</b> test ko loop mein 50 baar chalao; suite ko alag order mein ya parallelism on aur off ke saath chalao; CI aur local ki tulna karo (CPU speed, time zone, culture, file paths, Docker).</li>\n<li><b>Causes aur fixes:</b> clock → <code>FakeTimeProvider</code>; shared static ya database state → per-test data aur statics nahi; real network ya external API → fake handler ya container; random/GUID data → seeded ya fixed values; kisi cheez ka intezaar karta <code>Thread.Sleep</code>/<code>Task.Delay</code> → asli signal ya <code>TaskCompletionSource</code> ka await; bina await ka async kaam → await karo; port clashes → test server ko port chunne do.</li>\n<li><b>Policy:</b> flaky test ek bug hai jiska owner hai. Blind automatic retries ko fix mat banao (woh real races chhupate hain); retry cause fix hone tak temporary, visible stopgap ke roop mein theek ho sakta hai. Quarantine ka matlab: blocking build se bahar, phir bhi chalta aur report hota hai, aur taareekh wala ticket hai.</li>\n<li><b>TLs ko kyon fikar:</b> ek baar team \"bas re-run kar do\" kehna seekh le to real failures bhi ignore hone lagti hain. Flaky rate ko team health metric ki tarah track karo.</li>\n<li>Puzzle 8-style bugs (order dependence) classic case hain; Puzzle 5 sleep ka deterministic option dikhata hai.</li>\n</ul>"
      }
    },
    {
      id: "tdd-mandate",
      depth: "detailed",
      q: "Do you practise TDD? Would you mandate it for your team?",
      answer: "I use red-green-refactor for business rules and bug fixes, where it clarifies design. I would not mandate it everywhere; I would mandate a checkable rule: every bug fix ships with a test that failed first.",
      meaning: {
        hi: "मैं business rules और bug fixes के लिए red-green-refactor use करता हूँ, जहाँ यह design साफ़ करता है। मैं इसे हर जगह mandate नहीं करूँगा; मैं एक checkable rule mandate करूँगा: हर bug fix के साथ ऐसा test जो पहले fail हुआ।",
        hg: "Main business rules aur bug fixes ke liye red-green-refactor use karta hoon, jahan yeh design saaf karta hai. Main ise har jagah mandate nahi karunga; main ek checkable rule mandate karunga: har bug fix ke saath aisa test jo pehle fail hua."
      },
      explain: {
        en: "<ul>\n<li><b>The loop:</b> red (write a small failing test), green (simplest code that passes), refactor (clean up with the tests as a safety net). Short cycles, minutes each.</li>\n<li><b>Where it shines:</b> clear business rules, algorithms, parsers, bug fixes (the failing test is the reproduction), APIs where the design is unclear and you want to feel the caller's side first.</li>\n<li><b>Where it is weak:</b> exploratory spikes, UI layout, glue code, and when requirements are changing hourly. Writing the test after a spike is fine.</li>\n<li><b>TL stance:</b> be honest that research on TDD benefits is mixed; the lasting value is testable design and fast feedback. Mandating a process is hard to verify and creates resentment; mandating <i>outcomes</i> (tests with every change, failing test first for bugs) can be checked in the PR.</li>\n<li>Follow-up: \"What is the difference between TDD and BDD?\" BDD focuses on describing behaviour in business language (Given-When-Then, tools like Reqnroll, the successor to SpecFlow); you can do TDD without BDD tooling.</li>\n</ul>",
        hi: "<ul>\n<li><b>Loop:</b> red (छोटा failing test लिखो), green (pass कराने वाला सबसे simple code), refactor (tests को safety net बनाकर clean up)। छोटे cycles, हर एक मिनटों का।</li>\n<li><b>कहाँ चमकता है:</b> साफ़ business rules, algorithms, parsers, bug fixes (failing test ही reproduction है), ऐसे APIs जहाँ design साफ़ नहीं और पहले caller की तरफ़ से महसूस करना है।</li>\n<li><b>कहाँ कमज़ोर:</b> exploratory spikes, UI layout, glue code, और जब requirements हर घंटे बदल रही हों। Spike के बाद test लिखना ठीक है।</li>\n<li><b>TL stance:</b> honest रहो कि TDD के फ़ायदों पर research mixed है; टिकने वाली value testable design और fast feedback है। Process mandate करना verify करना मुश्किल है और नाराज़गी पैदा करता है; <i>outcomes</i> mandate करना (हर change के साथ tests, bugs के लिए पहले failing test) PR में check हो सकता है।</li>\n<li>Follow-up: \"TDD और BDD में क्या फ़र्क़ है?\" BDD behaviour को business language में describe करने पर focus करता है (Given-When-Then, Reqnroll (SpecFlow का successor) जैसे tools); BDD tooling के बिना भी TDD हो सकता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Loop:</b> red (chhota failing test likho), green (pass karane wala sabse simple code), refactor (tests ko safety net banakar clean up). Chhote cycles, har ek minuton ka.</li>\n<li><b>Kahan chamakta hai:</b> saaf business rules, algorithms, parsers, bug fixes (failing test hi reproduction hai), aise APIs jahan design saaf nahi aur pehle caller ki taraf se mehsoos karna hai.</li>\n<li><b>Kahan kamzor:</b> exploratory spikes, UI layout, glue code, aur jab requirements har ghante badal rahi hon. Spike ke baad test likhna theek hai.</li>\n<li><b>TL stance:</b> honest raho ki TDD ke faaydon par research mixed hai; tikne wali value testable design aur fast feedback hai. Process mandate karna verify karna mushkil hai aur naaraazgi paida karta hai; <i>outcomes</i> mandate karna (har change ke saath tests, bugs ke liye pehle failing test) PR mein check ho sakta hai.</li>\n<li>Follow-up: \"TDD aur BDD mein kya farq hai?\" BDD behaviour ko business language mein describe karne par focus karta hai (Given-When-Then, Reqnroll (SpecFlow ka successor) jaise tools); BDD tooling ke bina bhi TDD ho sakta hai.</li>\n</ul>"
      }
    },
    {
      id: "mutation-snapshot",
      depth: "detailed",
      q: "What are mutation testing and snapshot (approval) testing, and when would you use them?",
      answer: "Mutation testing (Stryker.NET) changes your code and checks that tests fail, exposing weak assertions. Snapshot testing (Verify) compares output with an approved file, useful for large structured results.",
      meaning: {
        hi: "Mutation testing (Stryker.NET) तुम्हारा code बदलकर check करती है कि tests fail होते हैं, जिससे कमज़ोर assertions पकड़ में आते हैं। Snapshot testing (Verify) output को approved file से compare करती है, बड़े structured results के लिए काम की।",
        hg: "Mutation testing (Stryker.NET) tumhara code badalkar check karti hai ki tests fail hote hain, jisse kamzor assertions pakad mein aate hain. Snapshot testing (Verify) output ko approved file se compare karti hai, bade structured results ke liye kaam ki."
      },
      explain: {
        en: "<ul>\n<li><b>Mutation testing:</b> the tool makes many small changes (mutants): <code>&gt;=</code> to <code>&gt;</code>, <code>+</code> to <code>-</code>, remove a statement. If tests still pass, the mutant <b>survived</b> and points at a missing test or assertion (Puzzle 6: the boundary mutant survives until you test age 18). The mutation score is killed / total.</li>\n<li>It is slow (the suite runs once per mutant, optimised by tools). Run it on critical logic, in changed files (<code>--since</code>) or nightly; do not put it on every PR of a big solution.</li>\n<li><b>Snapshot / approval tests:</b> serialise a result (JSON, HTML, a generated PDF text) and compare with a committed <code>.verified</code> file; a difference fails the test and shows a diff you accept or reject. Verify is a popular .NET library for this.</li>\n<li>Use snapshots for big outputs where hand-written asserts would be long. Risks: people approve diffs without reading them, and snapshots with random data or timestamps are flaky unless scrubbed.</li>\n<li>TL angle: reviewers must read changed snapshot files in the PR just like code.</li>\n</ul>",
        hi: "<ul>\n<li><b>Mutation testing:</b> tool बहुत छोटे बदलाव करता है (mutants): <code>&gt;=</code> को <code>&gt;</code>, <code>+</code> को <code>-</code>, statement हटाना। Tests फिर भी pass हों तो mutant <b>survive</b> कर गया और missing test या assertion की ओर इशारा करता है (Puzzle 6: boundary mutant तब तक बचता है जब तक age 18 test न करो)। Mutation score = killed / total।</li>\n<li>यह slow है (suite हर mutant के लिए एक बार चलती है, tools optimise करते हैं)। इसे critical logic पर, changed files में (<code>--since</code>) या nightly चलाओ; बड़े solution के हर PR पर मत लगाओ।</li>\n<li><b>Snapshot / approval tests:</b> result को serialise करो (JSON, HTML, generated PDF का text) और committed <code>.verified</code> file से compare करो; फ़र्क़ test fail करता है और diff दिखाता है जिसे तुम accept या reject करते हो। Verify इसके लिए popular .NET library है।</li>\n<li>बड़े outputs के लिए snapshots use करो जहाँ hand-written asserts लंबे होंगे। Risks: लोग diffs बिना पढ़े approve कर देते हैं, और random data या timestamps वाली snapshots scrub किए बिना flaky हैं।</li>\n<li>TL angle: reviewers को PR में बदली हुई snapshot files भी code की तरह पढ़नी चाहिए।</li>\n</ul>",
        hg: "<ul>\n<li><b>Mutation testing:</b> tool bahut chhote badlav karta hai (mutants): <code>&gt;=</code> ko <code>&gt;</code>, <code>+</code> ko <code>-</code>, statement hatana. Tests phir bhi pass hon to mutant <b>survive</b> kar gaya aur missing test ya assertion ki taraf ishaara karta hai (Puzzle 6: boundary mutant tab tak bachta hai jab tak age 18 test na karo). Mutation score = killed / total.</li>\n<li>Yeh slow hai (suite har mutant ke liye ek baar chalti hai, tools optimise karte hain). Ise critical logic par, changed files mein (<code>--since</code>) ya nightly chalao; bade solution ke har PR par mat lagao.</li>\n<li><b>Snapshot / approval tests:</b> result ko serialise karo (JSON, HTML, generated PDF ka text) aur committed <code>.verified</code> file se compare karo; farq test fail karta hai aur diff dikhata hai jise tum accept ya reject karte ho. Verify iske liye popular .NET library hai.</li>\n<li>Bade outputs ke liye snapshots use karo jahan hand-written asserts lambe honge. Risks: log diffs bina padhe approve kar dete hain, aur random data ya timestamps wali snapshots scrub kiye bina flaky hain.</li>\n<li>TL angle: reviewers ko PR mein badli hui snapshot files bhi code ki tarah padhni chahiye.</li>\n</ul>"
      }
    },
    {
      id: "team-testing-strategy",
      depth: "detailed",
      q: "As Tech Lead, how would you define the testing strategy for a team, and how would you put it into CI?",
      answer: "One page: what each test level covers, what must run on every PR versus nightly, naming and review standards, a bug-fix-needs-a-test rule, flaky-test ownership, and coverage used as a signal, not a target.",
      meaning: {
        hi: "एक page: हर test level क्या cover करता है, हर PR पर क्या चलेगा बनाम nightly, naming और review standards, bug-fix-needs-a-test rule, flaky-test ownership, और coverage signal की तरह, target की तरह नहीं।",
        hg: "Ek page: har test level kya cover karta hai, har PR par kya chalega banam nightly, naming aur review standards, bug-fix-needs-a-test rule, flaky-test ownership, aur coverage signal ki tarah, target ki tarah nahi."
      },
      explain: {
        en: "<ul>\n<li><b>Levels:</b> unit tests for rules; integration tests (WebApplicationFactory + real database in a container) for endpoints, queries and auth; a few end-to-end and smoke checks after deploy; contract tests between services deployed independently.</li>\n<li><b>Pipeline (Day 21):</b> PR build = compile, unit tests, fast API tests, static analysis, coverage on changed code; separate or nightly job = container-heavy suites and mutation testing on critical modules; post-deploy = smoke tests. Red build blocks merge; publish results.</li>\n<li><b>Standards:</b> one framework per solution, naming convention, AAA, shared test helpers, doubles only at boundaries, no sleeps, test code reviewed like production code (use the review checklist of this day).</li>\n<li><b>Rules:</b> every bug fix has a test that failed first; flaky tests get an owner within a day; new code needs tests; coverage trend is watched, not worshipped.</li>\n<li><b>Introduce it gradually in a legacy codebase:</b> start with characterisation tests around the code you are about to change; add integration tests on the main user journeys first; do not stop feature work for a \"testing month\".</li>\n<li>Follow-up: \"A manager asks for 80% coverage.\" Offer a floor for new code and the mutation or bug-escape trend as better indicators, and explain why in plain business terms (fewer production incidents).</li>\n</ul>",
        hi: "<ul>\n<li><b>Levels:</b> rules के लिए unit tests; endpoints, queries और auth के लिए integration tests (WebApplicationFactory + container में real database); deploy के बाद कुछ end-to-end और smoke checks; independently deploy होने वाली services के बीच contract tests।</li>\n<li><b>Pipeline (Day 21):</b> PR build = compile, unit tests, fast API tests, static analysis, changed code पर coverage; अलग या nightly job = container-heavy suites और critical modules पर mutation testing; post-deploy = smoke tests। Red build merge रोकता है; results publish करो।</li>\n<li><b>Standards:</b> हर solution में एक framework, naming convention, AAA, shared test helpers, doubles सिर्फ़ boundaries पर, sleeps नहीं, test code का review production code की तरह (इस day का review checklist use करो)।</li>\n<li><b>Rules:</b> हर bug fix के साथ ऐसा test जो पहले fail हुआ; flaky tests को एक दिन में owner; नए code के लिए tests; coverage का trend देखा जाए, पूजा नहीं।</li>\n<li><b>Legacy codebase में धीरे-धीरे लाओ:</b> जिस code को बदलने वाले हो उसके चारों ओर characterisation tests से शुरू करो; पहले main user journeys पर integration tests जोड़ो; \"testing month\" के लिए feature work मत रोको।</li>\n<li>Follow-up: \"Manager 80% coverage माँगता है।\" नए code के लिए floor दो और mutation या bug-escape trend को बेहतर indicators बताओ, और सीधे business terms में समझाओ (कम production incidents)।</li>\n</ul>",
        hg: "<ul>\n<li><b>Levels:</b> rules ke liye unit tests; endpoints, queries aur auth ke liye integration tests (WebApplicationFactory + container mein real database); deploy ke baad kuch end-to-end aur smoke checks; independently deploy hone wali services ke beech contract tests.</li>\n<li><b>Pipeline (Day 21):</b> PR build = compile, unit tests, fast API tests, static analysis, changed code par coverage; alag ya nightly job = container-heavy suites aur critical modules par mutation testing; post-deploy = smoke tests. Red build merge rokta hai; results publish karo.</li>\n<li><b>Standards:</b> har solution mein ek framework, naming convention, AAA, shared test helpers, doubles sirf boundaries par, sleeps nahi, test code ka review production code ki tarah (is day ka review checklist use karo).</li>\n<li><b>Rules:</b> har bug fix ke saath aisa test jo pehle fail hua; flaky tests ko ek din mein owner; naye code ke liye tests; coverage ka trend dekha jaye, pooja nahi.</li>\n<li><b>Legacy codebase mein dheere-dheere lao:</b> jis code ko badalne wale ho uske charon or characterisation tests se shuru karo; pehle main user journeys par integration tests jodo; \"testing month\" ke liye feature work mat roko.</li>\n<li>Follow-up: \"Manager 80% coverage maangta hai.\" Naye code ke liye floor do aur mutation ya bug-escape trend ko behtar indicators batao, aur seedhe business terms mein samjhao (kam production incidents).</li>\n</ul>"
      }
    },
    {
      id: "what-not-to-mock",
      depth: "detailed",
      q: "What should you not mock, and how do you spot over-mocking in a code review?",
      answer: "Do not mock types you do not own, simple value objects or pure logic. Over-mocking shows as many setups, assertions on internals and tests that break on harmless refactors while bugs still slip through.",
      meaning: {
        hi: "जो types तुम्हारे नहीं हैं, simple value objects या pure logic mock मत करो। Over-mocking ऐसे दिखता है: बहुत सारे setups, internals पर assertions, और tests जो harmless refactors पर टूटते हैं जबकि bugs फिर भी निकल जाते हैं।",
        hg: "Jo types tumhare nahi hain, simple value objects ya pure logic mock mat karo. Over-mocking aise dikhta hai: bahut saare setups, internals par assertions, aur tests jo harmless refactors par tootte hain jabki bugs phir bhi nikal jaate hain."
      },
      explain: {
        en: "<ul>\n<li><b>Do not mock:</b> types you do not own (<code>HttpClient</code>, <code>DbContext</code>: wrap them behind your interface, or use a fake <code>HttpMessageHandler</code> or a real test database); value objects and DTOs; pure functions; the class under test.</li>\n<li><b>Smells in review:</b> more setup lines than assertion lines; <code>Verify</code> on every call; mocks returning mocks; tests that mirror the implementation line by line; a bug fix that needs five tests to change.</li>\n<li><b>Fixes:</b> use a fake or a real in-memory collaborator you wrote; test at a higher level (integration) when the logic is mostly wiring; reduce dependencies (SRP, Day 8) so there is less to mock.</li>\n<li>Mocks still have a place for real side effects and failures that are hard to trigger: payment declined, timeout, message published once.</li>\n<li>Follow-up: \"Mock the repository in a service test?\" Fine for service rules; and also test the repository itself against a real database, otherwise the mapping and query are never checked.</li>\n</ul>",
        hi: "<ul>\n<li><b>Mock मत करो:</b> जो types तुम्हारे नहीं हैं (<code>HttpClient</code>, <code>DbContext</code>: उन्हें अपने interface के पीछे wrap करो, या fake <code>HttpMessageHandler</code> या real test database use करो); value objects और DTOs; pure functions; जिस class को test कर रहे हो वह ख़ुद।</li>\n<li><b>Review में smells:</b> assertion lines से ज़्यादा setup lines; हर call पर <code>Verify</code>; mocks जो mocks return करें; ऐसे tests जो implementation की line-by-line नक़ल हों; ऐसा bug fix जिसमें पाँच tests बदलने पड़ें।</li>\n<li><b>Fixes:</b> fake या अपना लिखा real in-memory collaborator use करो; जब logic ज़्यादातर wiring हो तो higher level (integration) पर test करो; dependencies घटाओ (SRP, Day 8) ताकि mock करने को कम रहे।</li>\n<li>Mocks की जगह फिर भी है: real side effects और ऐसी failures के लिए जिन्हें trigger करना मुश्किल है: payment declined, timeout, message एक बार publish।</li>\n<li>Follow-up: \"Service test में repository mock करें?\" Service rules के लिए ठीक; और repository को भी real database पर test करो, वरना mapping और query कभी check नहीं होंगे।</li>\n</ul>",
        hg: "<ul>\n<li><b>Mock mat karo:</b> jo types tumhare nahi hain (<code>HttpClient</code>, <code>DbContext</code>: unhe apne interface ke peeche wrap karo, ya fake <code>HttpMessageHandler</code> ya real test database use karo); value objects aur DTOs; pure functions; jis class ko test kar rahe ho woh khud.</li>\n<li><b>Review mein smells:</b> assertion lines se zyaada setup lines; har call par <code>Verify</code>; mocks jo mocks return karein; aise tests jo implementation ki line-by-line nakal hon; aisa bug fix jisme paanch tests badalne padein.</li>\n<li><b>Fixes:</b> fake ya apna likha real in-memory collaborator use karo; jab logic zyaadatar wiring ho to higher level (integration) par test karo; dependencies ghatao (SRP, Day 8) taaki mock karne ko kam rahe.</li>\n<li>Mocks ki jagah phir bhi hai: real side effects aur aisi failures ke liye jinhe trigger karna mushkil hai: payment declined, timeout, message ek baar publish.</li>\n<li>Follow-up: \"Service test mein repository mock karein?\" Service rules ke liye theek; aur repository ko bhi real database par test karo, warna mapping aur query kabhi check nahi honge.</li>\n</ul>"
      }
    }
  ],
  puzzles: [
    {
      id: "instance-per-test",
      src: "using System.Reflection;\n\nvar fixture = new SharedFixture();\nvar disposed = 0;\nvar methods = typeof(CartTests).GetMethods()\n    .Where(m => m.GetCustomAttribute<TestAttribute>() != null)\n    .OrderBy(m => m.Name);\n\nforeach (var method in methods)\n{\n    var instance = new CartTests(fixture);   // xUnit builds a NEW instance for every test\n    method.Invoke(instance, null);\n    Console.WriteLine($\"{method.Name}: items={instance.Items.Count} ctorRuns={CartTests.CtorRuns} fixtureUses={fixture.Uses}\");\n    instance.Dispose();\n    disposed++;\n}\nConsole.WriteLine($\"disposed={disposed} fixturesCreated={SharedFixture.Created}\");\n\n[AttributeUsage(AttributeTargets.Method)]\nclass TestAttribute : Attribute { }\n\nclass SharedFixture\n{\n    public static int Created;\n    public int Uses;\n    public SharedFixture() => Created++;\n}\n\nclass CartTests : IDisposable\n{\n    public static int CtorRuns;\n    public List<string> Items { get; } = new();\n    private readonly SharedFixture _fixture;\n\n    public CartTests(SharedFixture fixture)\n    {\n        _fixture = fixture;\n        _fixture.Uses++;\n        CtorRuns++;\n    }\n\n    [Test] public void Add_one_item() => Items.Add(\"tea\");\n    [Test] public void Add_two_items() { Items.Add(\"tea\"); Items.Add(\"biscuit\"); }\n    [Test] public void Starts_empty() { }\n\n    public void Dispose() => Items.Clear();\n}\n",
      answer: "Add_one_item: items=1 ctorRuns=1 fixtureUses=1\nAdd_two_items: items=2 ctorRuns=2 fixtureUses=2\nStarts_empty: items=0 ctorRuns=3 fixtureUses=3\ndisposed=3 fixturesCreated=1",
      explain: {
        en: "<ul>\n<li>Every test gets a <b>new</b> <code>CartTests</code> instance, so <code>Items</code> starts empty each time: <code>Add_two_items</code> sees only its own 2 items and <code>Starts_empty</code> sees 0, even though earlier tests added items. That is xUnit's isolation.</li>\n<li>The static <code>CtorRuns</code> counter shows the constructor ran once per test (3 tests, 3 runs). A static field is exactly the kind of shared state that survives between tests, so avoid it for test data.</li>\n<li>The fixture was created <b>once</b> and shared (<code>Created = 1</code>) while each test's constructor used it (<code>Uses</code> grows 1, 2, 3). A shared fixture is for expensive resources, not for per-test data.</li>\n<li><code>Dispose</code> ran after each test (3 times). The tests are sorted by name here only to keep the output fixed; do not depend on test order in real suites.</li>\n</ul>",
        hi: "<ul>\n<li>हर test को <code>CartTests</code> का <b>नया</b> instance मिलता है, इसलिए <code>Items</code> हर बार खाली शुरू होता है: <code>Add_two_items</code> सिर्फ़ अपने 2 items देखता है और <code>Starts_empty</code> 0 देखता है, भले ही पहले के tests ने items जोड़े हों। यही xUnit की isolation है।</li>\n<li>Static <code>CtorRuns</code> counter दिखाता है कि constructor हर test के लिए एक बार चला (3 tests, 3 runs)। Static field ठीक वही shared state है जो tests के बीच बचता है, इसलिए test data के लिए उससे बचो।</li>\n<li>Fixture <b>एक बार</b> बना और share हुआ (<code>Created = 1</code>), जबकि हर test के constructor ने उसे use किया (<code>Uses</code> 1, 2, 3 बढ़ता है)। Shared fixture महँगे resources के लिए है, per-test data के लिए नहीं।</li>\n<li><code>Dispose</code> हर test के बाद चला (3 बार)। यहाँ tests को नाम से sort सिर्फ़ output fixed रखने के लिए किया है; real suites में test order पर depend मत करो।</li>\n</ul>",
        hg: "<ul>\n<li>Har test ko <code>CartTests</code> ka <b>naya</b> instance milta hai, isliye <code>Items</code> har baar khaali shuru hota hai: <code>Add_two_items</code> sirf apne 2 items dekhta hai aur <code>Starts_empty</code> 0 dekhta hai, bhale hi pehle ke tests ne items jode hon. Yahi xUnit ki isolation hai.</li>\n<li>Static <code>CtorRuns</code> counter dikhata hai ki constructor har test ke liye ek baar chala (3 tests, 3 runs). Static field theek wahi shared state hai jo tests ke beech bachta hai, isliye test data ke liye usse bacho.</li>\n<li>Fixture <b>ek baar</b> bana aur share hua (<code>Created = 1</code>), jabki har test ke constructor ne use use kiya (<code>Uses</code> 1, 2, 3 badhta hai). Shared fixture mehenge resources ke liye hai, per-test data ke liye nahi.</li>\n<li><code>Dispose</code> har test ke baad chala (3 baar). Yahan tests ko naam se sort sirf output fixed rakhne ke liye kiya hai; real suites mein test order par depend mat karo.</li>\n</ul>"
      }
    },
    {
      id: "theory-rows",
      src: "var calc = new Calc();\nint run = 0, passed = 0;\n\nforeach (var (name, row) in Rows())\n{\n    run++;\n    try\n    {\n        var result = calc.Add((int)row[0], (int)row[1]);\n        if (result != (int)row[2]) throw new Exception($\"expected {row[2]} but was {result}\");\n        passed++;\n        Console.WriteLine($\"PASS {name}({string.Join(\", \", row)})\");\n    }\n    catch (Exception ex)\n    {\n        Console.WriteLine($\"FAIL {name}({string.Join(\", \", row)}): {ex.Message}\");\n    }\n}\nConsole.WriteLine($\"{run} run, {passed} passed, {run - passed} failed\");\n\n// like [InlineData] x3 plus [MemberData(nameof(Extra))] that yields 2 rows\nIEnumerable<(string, object[])> Rows()\n{\n    yield return (\"Add\", new object[] { 2, 3, 5 });\n    yield return (\"Add\", new object[] { -1, 1, 0 });\n    yield return (\"Add\", new object[] { 0, 0, 1 });\n    foreach (var extra in Extra()) yield return (\"Add\", extra);\n}\n\nIEnumerable<object[]> Extra()\n{\n    yield return new object[] { 7, 8, 15 };\n    yield return new object[] { 10, 20, 30 };\n}\n\nclass Calc\n{\n    public int Add(int a, int b) => a + b;\n}\n",
      answer: "PASS Add(2, 3, 5)\nPASS Add(-1, 1, 0)\nFAIL Add(0, 0, 1): expected 1 but was 0\nPASS Add(7, 8, 15)\nPASS Add(10, 20, 30)\n5 run, 4 passed, 1 failed",
      explain: {
        en: "<ul>\n<li>Three <code>[InlineData]</code>-style rows plus two rows from a <code>[MemberData]</code>-style source give <b>5 test cases</b> from one method; the report says \"5 run\".</li>\n<li>Row 3 (<code>0 + 0</code> expected <code>1</code>) is a wrong expectation, so it fails with its own message, but the rows after it still run: rows are independent.</li>\n<li>Row names include the arguments, so a failure tells you which data broke. That is why a Theory beats one Fact with a loop inside: a loop stops at the first failure and hides the rest.</li>\n<li>Rows that share the same expected behaviour belong in a Theory; rows that need different assertions belong in separate Facts.</li>\n</ul>",
        hi: "<ul>\n<li>तीन <code>[InlineData]</code>-style rows और एक <code>[MemberData]</code>-style source की दो rows से एक ही method के <b>5 test cases</b> बनते हैं; report कहती है \"5 run\"।</li>\n<li>Row 3 (<code>0 + 0</code>, expected <code>1</code>) ग़लत expectation है, इसलिए वह अपने message के साथ fail होती है, पर उसके बाद की rows फिर भी चलती हैं: rows independent हैं।</li>\n<li>Row names में arguments शामिल होते हैं, इसलिए failure बताती है कि किस data पर टूटा। इसीलिए Theory एक Fact के अंदर loop से बेहतर है: loop पहली failure पर रुक जाता है और बाकी छुपा देता है।</li>\n<li>जिन rows का expected behaviour same है वे Theory में रखो; जिन्हें अलग assertions चाहिए वे अलग Facts में।</li>\n</ul>",
        hg: "<ul>\n<li>Teen <code>[InlineData]</code>-style rows aur ek <code>[MemberData]</code>-style source ki do rows se ek hi method ke <b>5 test cases</b> bante hain; report kehti hai \"5 run\".</li>\n<li>Row 3 (<code>0 + 0</code>, expected <code>1</code>) galat expectation hai, isliye woh apne message ke saath fail hoti hai, par uske baad ki rows phir bhi chalti hain: rows independent hain.</li>\n<li>Row names mein arguments shaamil hote hain, isliye failure batati hai ki kis data par toota. Isiliye Theory ek Fact ke andar loop se behtar hai: loop pehli failure par ruk jata hai aur baaki chhupa deta hai.</li>\n<li>Jin rows ka expected behaviour same hai woh Theory mein rakho; jinhe alag assertions chahiye woh alag Facts mein.</li>\n</ul>"
      }
    },
    {
      id: "moq-last-setup-wins",
      src: "using Moq;\n\nvar repo = new Mock<IPriceRepo>();\nrepo.Setup(r => r.PriceOf(It.IsAny<string>())).Returns(100);\nrepo.Setup(r => r.PriceOf(\"tea\")).Returns(20);\n\nConsole.WriteLine(\"1: \" + repo.Object.PriceOf(\"tea\") + \" \" + repo.Object.PriceOf(\"rice\"));\n\nrepo.Setup(r => r.PriceOf(It.IsAny<string>())).Returns(5);   // added later, matches everything\n\nConsole.WriteLine(\"2: \" + repo.Object.PriceOf(\"tea\") + \" \" + repo.Object.PriceOf(\"rice\"));\n\nrepo.Verify(r => r.PriceOf(\"tea\"), Times.Exactly(2));\nConsole.WriteLine(\"verify tea x2 passed\");\n\nvar loose = new Mock<IPriceRepo>();                         // default behaviour is Loose\nConsole.WriteLine(\"3: \" + loose.Object.PriceOf(\"tea\"));\n\npublic interface IPriceRepo\n{\n    int PriceOf(string item);\n}\n",
      answer: "1: 20 100\n2: 5 5\nverify tea x2 passed\n3: 0",
      packages: [
        "Moq@4.20.72"
      ],
      explain: {
        en: "<ul>\n<li>Moq checks setups from the <b>most recent to the oldest</b> and uses the first that matches. In step 1 the specific <code>\"tea\"</code> setup was added after the broad one, so tea is 20 and everything else 100.</li>\n<li>In step 2 a new broad <code>It.IsAny&lt;string&gt;()</code> setup was added <b>later</b>, so it now wins for every item, including tea: <code>5 5</code>. Order of setups matters: put general setups first and specific ones after.</li>\n<li><code>Verify(..., Times.Exactly(2))</code> counts calls, not setups: tea was asked twice (once per print), so it passes.</li>\n<li>A default (loose) mock returns the default value for anything not set up, here <code>0</code>. A strict mock would throw instead. TL tip: a test that sets up the same call twice is usually a smell.</li>\n</ul>",
        hi: "<ul>\n<li>Moq setups को <b>सबसे recent से सबसे पुराने</b> की ओर check करता है और पहला matching use करता है। Step 1 में specific <code>\"tea\"</code> setup broad वाले के बाद जोड़ा गया, इसलिए tea 20 है और बाकी सब 100।</li>\n<li>Step 2 में नया broad <code>It.IsAny&lt;string&gt;()</code> setup <b>बाद में</b> जोड़ा गया, इसलिए अब वह हर item के लिए जीतता है, tea के लिए भी: <code>5 5</code>। Setups का order मायने रखता है: general setups पहले, specific बाद में रखो।</li>\n<li><code>Verify(..., Times.Exactly(2))</code> calls गिनता है, setups नहीं: tea दो बार माँगा गया (हर print में एक बार), इसलिए pass होता है।</li>\n<li>Default (loose) mock जो set up नहीं हुआ उसके लिए default value देता है, यहाँ <code>0</code>। Strict mock इसकी जगह throw करता। TL tip: जो test एक ही call दो बार set up करे वह आमतौर पर smell है।</li>\n</ul>",
        hg: "<ul>\n<li>Moq setups ko <b>sabse recent se sabse purane</b> ki or check karta hai aur pehla matching use karta hai. Step 1 mein specific <code>\"tea\"</code> setup broad wale ke baad jodaa gaya, isliye tea 20 hai aur baaki sab 100.</li>\n<li>Step 2 mein naya broad <code>It.IsAny&lt;string&gt;()</code> setup <b>baad mein</b> jodaa gaya, isliye ab woh har item ke liye jeetta hai, tea ke liye bhi: <code>5 5</code>. Setups ka order maayne rakhta hai: general setups pehle, specific baad mein rakho.</li>\n<li><code>Verify(..., Times.Exactly(2))</code> calls ginta hai, setups nahi: tea do baar maanga gaya (har print mein ek baar), isliye pass hota hai.</li>\n<li>Default (loose) mock jo set up nahi hua uske liye default value deta hai, yahan <code>0</code>. Strict mock iski jagah throw karta. TL tip: jo test ek hi call do baar set up kare woh aamtaur par smell hai.</li>\n</ul>"
      }
    },
    {
      id: "nsubstitute-returns-sequence",
      src: "using NSubstitute;\n\nvar otp = Substitute.For<IOtpService>();\notp.Next(\"user1\").Returns(\"111\", \"222\", \"333\");\n\nvar seen = new List<string>();\nfor (int i = 0; i < 4; i++) seen.Add(otp.Next(\"user1\"));\nseen.Add(otp.Next(\"user2\") ?? \"null\");\nseen.Add(otp.Next(\"user1\"));\n\nConsole.WriteLine(string.Join(\",\", seen));\nConsole.WriteLine(\"calls: \" + otp.ReceivedCalls().Count());\notp.Received(5).Next(\"user1\");\nConsole.WriteLine(\"Received(5) for user1 passed\");\n\npublic interface IOtpService\n{\n    string Next(string user);\n}\n",
      answer: "111,222,333,333,,333\ncalls: 6\nReceived(5) for user1 passed",
      packages: [
        "NSubstitute@6.*"
      ],
      explain: {
        en: "<ul>\n<li><code>Returns(\"111\", \"222\", \"333\")</code> plays the values in order and then <b>keeps repeating the last one</b>: user1 gets 111, 222, 333, 333, and the later call gets 333 again.</li>\n<li><code>Next(\"user2\")</code> was never configured, so NSubstitute returns an <b>automatic default</b> for a string: an empty string, not null. That is why the output has an empty slot between the commas.</li>\n<li><code>ReceivedCalls()</code> counts the 6 real calls made on the substitute (4 + 1 + 1). The line that configures <code>Returns</code> is not counted as a call.</li>\n<li><code>Received(5).Next(\"user1\")</code> checks the argument too: 5 calls were for user1, one for user2. Sequences are handy for simulating a flaky dependency (fail, fail, succeed) in retry tests.</li>\n</ul>",
        hi: "<ul>\n<li><code>Returns(\"111\", \"222\", \"333\")</code> values को order में चलाता है और फिर <b>आख़िरी को दोहराता रहता है</b>: user1 को 111, 222, 333, 333 मिलता है, और बाद की call को फिर 333।</li>\n<li><code>Next(\"user2\")</code> कभी configure नहीं हुआ, इसलिए NSubstitute string के लिए <b>automatic default</b> देता है: empty string, null नहीं। इसीलिए output में commas के बीच खाली जगह है।</li>\n<li><code>ReceivedCalls()</code> substitute पर हुई 6 असली calls गिनता है (4 + 1 + 1)। <code>Returns</code> configure करने वाली line को call नहीं गिना जाता।</li>\n<li><code>Received(5).Next(\"user1\")</code> argument भी check करता है: 5 calls user1 के लिए थीं, एक user2 के लिए। Sequences retry tests में flaky dependency (fail, fail, succeed) simulate करने के लिए काम के हैं।</li>\n</ul>",
        hg: "<ul>\n<li><code>Returns(\"111\", \"222\", \"333\")</code> values ko order mein chalata hai aur phir <b>aakhri ko dohrata rehta hai</b>: user1 ko 111, 222, 333, 333 milta hai, aur baad ki call ko phir 333.</li>\n<li><code>Next(\"user2\")</code> kabhi configure nahi hua, isliye NSubstitute string ke liye <b>automatic default</b> deta hai: empty string, null nahi. Isiliye output mein commas ke beech khaali jagah hai.</li>\n<li><code>ReceivedCalls()</code> substitute par hui 6 asli calls ginta hai (4 + 1 + 1). <code>Returns</code> configure karne wali line ko call nahi ginte.</li>\n<li><code>Received(5).Next(\"user1\")</code> argument bhi check karta hai: 5 calls user1 ke liye thin, ek user2 ke liye. Sequences retry tests mein flaky dependency (fail, fail, succeed) simulate karne ke liye kaam ke hain.</li>\n</ul>"
      }
    },
    {
      id: "fake-timer-advance",
      src: "using Microsoft.Extensions.Time.Testing;\n\nvar start = new DateTimeOffset(2026, 1, 1, 9, 0, 0, TimeSpan.Zero);\nvar clock = new FakeTimeProvider(start);\nvar ticks = 0;\n\nusing var timer = clock.CreateTimer(\n    _ => { ticks++; Console.WriteLine(\"tick \" + ticks + \" at +\" + (int)(clock.GetUtcNow() - start).TotalMinutes + \"m\"); },\n    null,\n    dueTime: TimeSpan.FromMinutes(5),\n    period: TimeSpan.FromMinutes(10));\n\nclock.Advance(TimeSpan.FromMinutes(4));\nConsole.WriteLine(\"after 4m: ticks=\" + ticks);\n\nclock.Advance(TimeSpan.FromMinutes(1));\nConsole.WriteLine(\"after 5m: ticks=\" + ticks);\n\nclock.Advance(TimeSpan.FromMinutes(30));\nConsole.WriteLine(\"after 35m: ticks=\" + ticks);\n",
      answer: "after 4m: ticks=0\ntick 1 at +5m\nafter 5m: ticks=1\ntick 2 at +35m\ntick 3 at +35m\ntick 4 at +35m\nafter 35m: ticks=4",
      packages: [
        "Microsoft.Extensions.TimeProvider.Testing@9.*"
      ],
      explain: {
        en: "<ul>\n<li>The timer is due after 5 minutes, then every 10 minutes. After <code>Advance(4m)</code> nothing is due yet; after one more minute (5m) the first tick fires. No real time passes: the test is instant.</li>\n<li>Advancing 30 more minutes (to 35m) makes three more ticks due (at 15m, 25m and 35m), so the total is 4. The fake clock runs every callback that became due.</li>\n<li>Look at the printed times: all three callbacks report <code>+35m</code>. With current 9.x/10.x packages, <code>Advance</code> moves the clock to the target time and then runs the due callbacks, so the callbacks see the final time, not their own due time. Assert on the <b>count</b>, not on the time inside a callback.</li>\n<li>This works for any code that uses <code>TimeProvider.CreateTimer</code> (background refresh, cache expiry, debounce), so such code needs no sleeping tests. Compare Day 16, which uses the fake clock for a circuit breaker.</li>\n</ul>",
        hi: "<ul>\n<li>Timer 5 मिनट बाद due है, फिर हर 10 मिनट पर। <code>Advance(4m)</code> के बाद अभी कुछ due नहीं; एक मिनट और (5m) बाद पहली tick fire होती है। असली समय नहीं बीतता: test instant है।</li>\n<li>30 मिनट और आगे (35m तक) बढ़ाने पर तीन और ticks due हो जाती हैं (15m, 25m और 35m पर), इसलिए कुल 4। Fake clock हर due हुआ callback चला देता है।</li>\n<li>Printed times देखो: तीनों callbacks <code>+35m</code> बताते हैं। current 9.x/10.x packages में <code>Advance</code> clock को target time पर ले जाता है और फिर due callbacks चलाता है, इसलिए callbacks को final time दिखता है, अपना due time नहीं। <b>Count</b> पर assert करो, callback के अंदर के time पर नहीं।</li>\n<li>यह उस हर code के लिए काम करता है जो <code>TimeProvider.CreateTimer</code> use करता है (background refresh, cache expiry, debounce), इसलिए ऐसे code को sleeping tests नहीं चाहिए। Day 16 से compare करो, जो fake clock को circuit breaker के लिए use करता है।</li>\n</ul>",
        hg: "<ul>\n<li>Timer 5 minute baad due hai, phir har 10 minute par. <code>Advance(4m)</code> ke baad abhi kuch due nahi; ek minute aur (5m) baad pehli tick fire hoti hai. Asli samay nahi beetta: test instant hai.</li>\n<li>30 minute aur aage (35m tak) badhane par teen aur ticks due ho jaati hain (15m, 25m aur 35m par), isliye kul 4. Fake clock har due hua callback chala deta hai.</li>\n<li>Printed times dekho: teeno callbacks <code>+35m</code> batate hain. Current 9.x/10.x packages mein <code>Advance</code> clock ko target time par le jaata hai aur phir due callbacks chalata hai, isliye callbacks ko final time dikhta hai, apna due time nahi. <b>Count</b> par assert karo, callback ke andar ke time par nahi.</li>\n<li>Yeh us har code ke liye kaam karta hai jo <code>TimeProvider.CreateTimer</code> use karta hai (background refresh, cache expiry, debounce), isliye aise code ko sleeping tests nahi chahiye. Day 16 se compare karo, jo fake clock ko circuit breaker ke liye use karta hai.</li>\n</ul>"
      }
    },
    {
      id: "mutants-survive",
      src: "var original = (int age) => age >= 18;\n\nvar mutants = new (string Name, Func<int, bool> Fn)[]\n{\n    (\"age > 18\",   age => age > 18),\n    (\"age >= 19\",  age => age >= 19),\n    (\"age <= 18\",  age => age <= 18),\n    (\"always true\", age => true),\n};\n\nvar weakTests = new (int Input, bool Expected)[] { (30, true), (10, false) };\nvar strongTests = weakTests.Append((18, true)).ToArray();\n\nReport(\"weak suite\", weakTests);\nReport(\"strong suite\", strongTests);\n\nvoid Report(string label, (int Input, bool Expected)[] tests)\n{\n    bool Passes(Func<int, bool> fn) => tests.All(t => fn(t.Input) == t.Expected);\n\n    Console.WriteLine($\"{label}: original passes = {Passes(original)}\");\n    var survivors = mutants.Where(m => Passes(m.Fn)).Select(m => m.Name).ToList();\n    Console.WriteLine($\"{label}: killed {mutants.Length - survivors.Count}/{mutants.Length}, survivors: {(survivors.Count == 0 ? \"none\" : string.Join(\"; \", survivors))}\");\n}\n",
      answer: "weak suite: original passes = True\nweak suite: killed 2/4, survivors: age > 18; age >= 19\nstrong suite: original passes = True\nstrong suite: killed 4/4, survivors: none",
      explain: {
        en: "<ul>\n<li>A <b>mutant</b> is a copy of the code with one small deliberate bug. A <b>killed</b> mutant makes at least one test fail; a <b>survivor</b> passes all tests, which means the tests cannot see that bug.</li>\n<li>The weak suite checks ages 30 and 10 only. The mutants <code>age &gt; 18</code> and <code>age &gt;= 19</code> both give the same answers for 30 and 10, so they survive: 2 of 4 killed (a 50% mutation score). The classic off-by-one boundary bug is invisible.</li>\n<li>Adding the boundary test <code>(18, true)</code> kills both survivors. All four mutants die, and the original still passes.</li>\n<li>Line coverage of the weak suite would already be 100% (one expression), which is why Stryker.NET gives information coverage cannot. TL use: read survivors as a list of missing tests, start with critical logic.</li>\n</ul>",
        hi: "<ul>\n<li><b>Mutant</b> code की कॉपी है जिसमें एक छोटा जानबूझकर डाला bug है। <b>Killed</b> mutant कम से कम एक test fail करा देता है; <b>survivor</b> सारे tests pass कर देता है, यानी tests उस bug को देख नहीं सकते।</li>\n<li>Weak suite सिर्फ़ ages 30 और 10 check करती है। Mutants <code>age &gt; 18</code> और <code>age &gt;= 19</code> दोनों 30 और 10 पर same answers देते हैं, इसलिए बच जाते हैं: 4 में से 2 killed (50% mutation score)। Classic off-by-one boundary bug दिखता ही नहीं।</li>\n<li>Boundary test <code>(18, true)</code> जोड़ने से दोनों survivors मर जाते हैं। चारों mutants मरते हैं, और original फिर भी pass होता है।</li>\n<li>Weak suite की line coverage पहले से 100% होती (एक expression), इसीलिए Stryker.NET वह जानकारी देता है जो coverage नहीं दे सकती। TL use: survivors को missing tests की list की तरह पढ़ो, critical logic से शुरू करो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Mutant</b> code ki copy hai jisme ek chhota jaanbujhkar daala bug hai. <b>Killed</b> mutant kam se kam ek test fail kara deta hai; <b>survivor</b> saare tests pass kar deta hai, yaani tests us bug ko dekh nahi sakte.</li>\n<li>Weak suite sirf ages 30 aur 10 check karti hai. Mutants <code>age &gt; 18</code> aur <code>age &gt;= 19</code> dono 30 aur 10 par same answers dete hain, isliye bach jaate hain: 4 mein se 2 killed (50% mutation score). Classic off-by-one boundary bug dikhta hi nahi.</li>\n<li>Boundary test <code>(18, true)</code> jodne se dono survivors mar jaate hain. Chaaron mutants marte hain, aur original phir bhi pass hota hai.</li>\n<li>Weak suite ki line coverage pehle se 100% hoti (ek expression), isiliye Stryker.NET woh jaankari deta hai jo coverage nahi de sakti. TL use: survivors ko missing tests ki list ki tarah padho, critical logic se shuru karo.</li>\n</ul>"
      }
    },
    {
      id: "coverage-without-assert",
      src: "var hit = new HashSet<int>();\n\ndecimal Discount(decimal total)\n{\n    hit.Add(1);\n    if (total > 100)\n    {\n        hit.Add(2);\n        return total - total * 0.10m;      // spec says 15 percent off, so this is a bug\n    }\n    hit.Add(3);\n    return total;\n}\n\nvar tests = new List<(string Name, Func<bool> Run)>\n{\n    (\"big_order_runs\", () => { Discount(200); return true; }),                  // no assertion\n    (\"small_order_unchanged\", () => Discount(50) == 50),\n};\n\nforeach (var (name, run) in tests)\n    Console.WriteLine($\"{name}: {(run() ? \"pass\" : \"FAIL\")}\");\n\nConsole.WriteLine($\"line coverage: {hit.Count}/3 = {hit.Count * 100 / 3}%\");\nConsole.WriteLine($\"Discount(200) = {Discount(200)}\");\n\nvar withAssert = Discount(200) == 170m;\nConsole.WriteLine($\"big_order_is_15_percent_off: {(withAssert ? \"pass\" : \"FAIL\")}\");\n",
      answer: "big_order_runs: pass\nsmall_order_unchanged: pass\nline coverage: 3/3 = 100%\nDiscount(200) = 180.00\nbig_order_is_15_percent_off: FAIL",
      explain: {
        en: "<ul>\n<li><code>big_order_runs</code> calls <code>Discount(200)</code> and returns <code>true</code> without checking the result. It still executes the \"big order\" lines, so together with the small-order test all 3 instrumented lines are hit: <b>100% coverage</b> and a green build.</li>\n<li>The code has a bug: the spec says 15 percent off but the code takes 10 percent, so <code>Discount(200)</code> is <code>180.00</code> instead of <code>170</code>. Coverage cannot see it because no assertion looks at the value.</li>\n<li>The last test, which actually asserts the value, fails. Same code, same coverage, different assertion quality.</li>\n<li>The program counts hit lines by hand, as coverlet does with instrumentation. In review, ask \"what would make this test fail?\"; a test that cannot fail adds coverage but no safety.</li>\n</ul>",
        hi: "<ul>\n<li><code>big_order_runs</code> <code>Discount(200)</code> call करता है और result check किए बिना <code>true</code> return करता है। फिर भी वह \"big order\" lines execute करता है, इसलिए small-order test के साथ तीनों instrumented lines hit होती हैं: <b>100% coverage</b> और green build।</li>\n<li>Code में bug है: spec में 15 percent off है पर code 10 percent लेता है, इसलिए <code>Discount(200)</code> <code>170</code> की जगह <code>180.00</code> है। Coverage उसे नहीं देख सकती क्योंकि कोई assertion value नहीं देखता।</li>\n<li>आख़िरी test, जो value सच में assert करता है, fail होता है। Same code, same coverage, अलग assertion quality।</li>\n<li>Program hit lines हाथ से गिनता है, जैसे coverlet instrumentation से करता है। Review में पूछो \"इस test को क्या fail कराएगा?\"; जो test fail हो ही नहीं सकता वह coverage बढ़ाता है, safety नहीं।</li>\n</ul>",
        hg: "<ul>\n<li><code>big_order_runs</code> <code>Discount(200)</code> call karta hai aur result check kiye bina <code>true</code> return karta hai. Phir bhi woh \"big order\" lines execute karta hai, isliye small-order test ke saath teeno instrumented lines hit hoti hain: <b>100% coverage</b> aur green build.</li>\n<li>Code mein bug hai: spec mein 15 percent off hai par code 10 percent leta hai, isliye <code>Discount(200)</code> <code>170</code> ki jagah <code>180.00</code> hai. Coverage use nahi dekh sakti kyonki koi assertion value nahi dekhta.</li>\n<li>Aakhri test, jo value sach mein assert karta hai, fail hota hai. Same code, same coverage, alag assertion quality.</li>\n<li>Program hit lines haath se ginta hai, jaise coverlet instrumentation se karta hai. Review mein poochho \"is test ko kya fail karayega?\"; jo test fail ho hi nahi sakta woh coverage badhata hai, safety nahi.</li>\n</ul>"
      }
    },
    {
      id: "order-dependent-tests",
      src: "var orders = new[]\n{\n    new[] { \"Starts_empty\", \"Add_one\", \"Clear_all\" },\n    new[] { \"Add_one\", \"Starts_empty\", \"Clear_all\" },\n    new[] { \"Add_one\", \"Clear_all\", \"Starts_empty\" },\n};\n\nvar shared = new List<string>();                         // static-style state shared by every test\nvar sharedTests = new Dictionary<string, Func<bool>>\n{\n    [\"Starts_empty\"] = () => shared.Count == 0,\n    [\"Add_one\"] = () => { shared.Add(\"tea\"); return shared.Count == 1; },\n    [\"Clear_all\"] = () => { shared.Clear(); return shared.Count == 0; },\n};\n\nvar isolatedTests = new Dictionary<string, Func<bool>>\n{\n    [\"Starts_empty\"] = () => new List<string>().Count == 0,\n    [\"Add_one\"] = () => { var items = new List<string>(); items.Add(\"tea\"); return items.Count == 1; },\n    [\"Clear_all\"] = () => { var items = new List<string> { \"tea\" }; items.Clear(); return items.Count == 0; },\n};\n\nstring Run(Dictionary<string, Func<bool>> tests, string[] order) =>\n    string.Join(\" \", order.Select(name => name + \"=\" + (tests[name]() ? \"ok\" : \"FAIL\")));\n\nfor (int i = 0; i < orders.Length; i++)\n{\n    shared.Clear();                                       // every run starts clean\n    Console.WriteLine($\"shared  order {i + 1}: {Run(sharedTests, orders[i])}\");\n}\nfor (int i = 0; i < orders.Length; i++)\n    Console.WriteLine($\"isolated order {i + 1}: {Run(isolatedTests, orders[i])}\");\n",
      answer: "shared  order 1: Starts_empty=ok Add_one=ok Clear_all=ok\nshared  order 2: Add_one=ok Starts_empty=FAIL Clear_all=ok\nshared  order 3: Add_one=ok Clear_all=ok Starts_empty=ok\nisolated order 1: Starts_empty=ok Add_one=ok Clear_all=ok\nisolated order 2: Add_one=ok Starts_empty=ok Clear_all=ok\nisolated order 3: Add_one=ok Clear_all=ok Starts_empty=ok",
      explain: {
        en: "<ul>\n<li>With <b>shared state</b>, <code>Starts_empty</code> passes only when no earlier test left an item behind. In order 1 it runs first and passes; in order 2 <code>Add_one</code> runs before it and it fails; in order 3 <code>Clear_all</code> happens to clean up first, so it passes again. Same tests, three different results.</li>\n<li>This is the typical flaky pattern: CI uses another order or parallelism than your laptop, so the failure looks random. The failing test is not the guilty one; the shared list is.</li>\n<li>The <b>isolated</b> version builds the state inside each test, so every order passes. This is what xUnit's per-test instance gives you when you keep data in instance fields, not in statics.</li>\n<li>To hunt such bugs: run the suite in different orders, run a single test alone, and treat \"passes alone, fails together\" as a shared-state alarm.</li>\n</ul>",
        hi: "<ul>\n<li><b>Shared state</b> के साथ <code>Starts_empty</code> तभी pass होता है जब किसी पहले के test ने item नहीं छोड़ा। Order 1 में वह पहले चलता है और pass होता है; order 2 में <code>Add_one</code> उससे पहले चलता है और वह fail होता है; order 3 में <code>Clear_all</code> luck से पहले साफ़ कर देता है, इसलिए वह फिर pass होता है। वही tests, तीन अलग results।</li>\n<li>यह typical flaky pattern है: CI तुम्हारे laptop से अलग order या parallelism use करता है, इसलिए failure random दिखती है। Fail होने वाला test culprit नहीं है; shared list culprit है।</li>\n<li><b>Isolated</b> version हर test के अंदर state बनाता है, इसलिए हर order pass होता है। xUnit का per-test instance यही देता है जब तुम data को statics की जगह instance fields में रखते हो।</li>\n<li>ऐसे bugs ढूँढने के लिए: suite को अलग orders में चलाओ, एक test अकेले चलाओ, और \"अकेले pass, साथ में fail\" को shared-state का alarm मानो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Shared state</b> ke saath <code>Starts_empty</code> tabhi pass hota hai jab kisi pehle ke test ne item nahi chhoda. Order 1 mein woh pehle chalta hai aur pass hota hai; order 2 mein <code>Add_one</code> usse pehle chalta hai aur woh fail hota hai; order 3 mein <code>Clear_all</code> luck se pehle saaf kar deta hai, isliye woh phir pass hota hai. Wahi tests, teen alag results.</li>\n<li>Yeh typical flaky pattern hai: CI tumhare laptop se alag order ya parallelism use karta hai, isliye failure random dikhti hai. Fail hone wala test culprit nahi hai; shared list culprit hai.</li>\n<li><b>Isolated</b> version har test ke andar state banata hai, isliye har order pass hota hai. xUnit ka per-test instance yahi deta hai jab tum data ko statics ki jagah instance fields mein rakhte ho.</li>\n<li>Aise bugs dhoondhne ke liye: suite ko alag orders mein chalao, ek test akele chalao, aur \"akele pass, saath mein fail\" ko shared-state ka alarm maano.</li>\n</ul>"
      }
    }
  ],
  revision: {
    en: [
      "<b>Pyramid</b>: many unit, some integration, few end-to-end. Arrange-Act-Assert; <code>[Fact]</code> = one test, <code>[Theory]</code> = many rows; a new class instance per test.",
      "<b>Doubles</b>: stub = canned answer, fake = small working version, mock = checks a call. Prefer state checks.",
      "<b>EF Core tests</b>: use a real engine (SQLite in memory or a container); a fresh database per test.",
      "<b>API tests</b>: <code>UseTestServer()</code> + <code>GetTestClient()</code> run the real pipeline in memory; replace only the outside world.",
      "<b>Flaky tests</b>: fix the cause. Inject <code>TimeProvider</code>, use <code>FakeTimeProvider.Advance</code>, never sleep.",
      "<b>Coverage</b> shows what ran, not what was checked; a surviving mutant means a weak test.",
      "<b>Team strategy</b>: categories, fast tests on every pull request, slow tests nightly, quarantine with an owner and a ticket.",
      "FluentAssertions v8 and later need a paid licence for commercial use; v7 stays Apache 2.0; check licences before upgrading.",
      "Moq 4.20.0 shipped SponsorLink and was criticised; 4.20.2 removed it; pin and review test dependencies.",
      "As a TL mandate checkable rules: every bug fix has a test that failed first, and tests are reviewed like production code."
    ],
    meaning: {
      hi: [
        "Pyramid: बहुत unit, कुछ integration, कम end-to-end। Arrange-Act-Assert; [Fact] = एक test, [Theory] = कई rows; हर test का नया class instance",
        "Doubles: stub = तय जवाब, fake = छोटा चलता version, mock = call जाँचता है। State checks को पसंद करो",
        "EF Core tests: असली engine लो (memory वाला SQLite या container); हर test को नया database",
        "API tests: UseTestServer() + GetTestClient() असली pipeline memory में चलाते हैं; सिर्फ़ बाहरी दुनिया बदलो",
        "Flaky tests: वजह ठीक करो। TimeProvider inject करो, FakeTimeProvider.Advance लो, कभी sleep मत करो",
        "Coverage दिखाती है क्या चला, क्या जाँचा गया यह नहीं; बचा हुआ mutant यानी कमज़ोर test",
        "Team strategy: categories, हर pull request पर fast tests, रात में slow tests, owner और ticket के साथ quarantine",
        "FluentAssertions v8 और उसके बाद commercial use के लिए paid licence माँगते हैं; v7 Apache 2.0 रहता है; upgrade से पहले licences check करो।",
        "Moq 4.20.0 में SponsorLink आया और criticism हुई; 4.20.2 ने हटाया; test dependencies pin और review करो।",
        "TL के तौर पर checkable rules mandate करो: हर bug fix के साथ पहले fail होने वाला test, और tests का review production code की तरह।"
      ],
      hg: [
        "Pyramid: bahut unit, kuch integration, kam end-to-end. Arrange-Act-Assert; [Fact] = ek test, [Theory] = kai rows; har test ka naya class instance",
        "Doubles: stub = tay jawaab, fake = chhota chalta version, mock = call jaanchta hai. State checks ko pasand karo",
        "EF Core tests: asli engine lo (memory wala SQLite ya container); har test ko naya database",
        "API tests: UseTestServer() + GetTestClient() asli pipeline memory mein chalate hain; sirf baahri duniya badlo",
        "Flaky tests: wajah theek karo. TimeProvider inject karo, FakeTimeProvider.Advance lo, kabhi sleep mat karo",
        "Coverage dikhati hai kya chala, kya jaancha gaya ye nahi; bacha hua mutant yaani kamzor test",
        "Team strategy: categories, har pull request par fast tests, raat mein slow tests, owner aur ticket ke saath quarantine",
        "FluentAssertions v8 aur uske baad commercial use ke liye paid licence maangte hain; v7 Apache 2.0 rehta hai; upgrade se pehle licences check karo.",
        "Moq 4.20.0 mein SponsorLink aaya aur criticism hui; 4.20.2 ne hataya; test dependencies pin aur review karo.",
        "TL ke taur par checkable rules mandate karo: har bug fix ke saath pehle fail hone wala test, aur tests ka review production code ki tarah."
      ]
    }
  }
};
