// Day 25 — Testing for .NET Tech Leads. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 25,
  title: {
    en: "Testing for .NET Tech Leads — test pyramid, xUnit, test doubles, WebApplicationFactory, Testcontainers, coverage, flaky tests, team strategy",
    hi: "Tech Leads के लिए Testing — test pyramid, xUnit, test doubles, WebApplicationFactory, Testcontainers, coverage, flaky tests, team strategy",
    hg: "Tech Leads ke liye Testing — test pyramid, xUnit, test doubles, WebApplicationFactory, Testcontainers, coverage, flaky tests, team strategy"
  },
  summary: {
    en: `<p>A Tech Lead is rarely asked "write a test for this method". You are asked "<b>what is your team's testing strategy?</b>", "<b>why do you have 90% coverage and still ship bugs?</b>" and "<b>how do you keep tests fast and not flaky?</b>" Think of tests as the <b>safety net under a trapeze artist</b>: you want enough net to catch real falls, not a net so heavy that nobody dares to jump.</p>
<ul>
<li><b>Shape of the suite:</b> the <b>test pyramid</b> (many fast unit tests, fewer integration tests, very few end-to-end tests) and the <b>testing trophy</b> (more weight on integration tests) are trade-offs, not laws. For an ASP.NET Core API with EF Core, integration tests against a real database often give the best value.</li>
<li><b>Good unit test:</b> fast, isolated, repeatable, self-checking (FIRST); written as Arrange-Act-Assert; one behaviour per test; a name that reads like a sentence, e.g. <code>Total_WithTenPercentDiscount_ReducesPrice</code>.</li>
<li><b>xUnit:</b> <code>[Fact]</code> for one case, <code>[Theory]</code> with <code>[InlineData]</code> or <code>[MemberData]</code> for many. xUnit creates a <b>new test-class instance for every test</b> (constructor = setup, <code>IDisposable</code> = teardown) and shares expensive setup with class or collection fixtures.</li>
<li><b>Test doubles:</b> dummy, stub, fake, spy and mock are different things. Prefer a <b>fake or stub</b> and check results; use a mock (Moq or NSubstitute) mainly when the interaction itself is the behaviour. Use <code>TimeProvider</code> and <code>FakeTimeProvider</code> for time.</li>
<li><b>Libraries and licences:</b> FluentAssertions v8 and later need a paid licence for commercial use (v7 stays Apache 2.0); Shouldly, AwesomeAssertions or xUnit's built-in <code>Assert</code> are alternatives. Moq 4.20.0 shipped the SponsorLink analyzer, which caused a backlash and was removed in 4.20.2.</li>
<li><b>ASP.NET Core integration tests:</b> <code>WebApplicationFactory&lt;Program&gt;</code> runs your real pipeline in memory; override services with <code>ConfigureTestServices</code> and add a test authentication handler. For a real database use Testcontainers (Day 7), not the EF in-memory provider.</li>
<li><b>Quality signals:</b> coverage tells you what code <b>ran</b>, not what was <b>checked</b>. Mutation testing (Stryker.NET) and code review of assertions go further. Fix flaky tests (time, order, shared state, sleeps) or quarantine them; do not just ignore them.</li>
<li><b>TL decision:</b> write a one-page team strategy: what runs on every PR, what runs nightly, what is mandatory (for example a failing test first for every bug fix) and what is left to judgement (TDD for everything is usually not mandated).</li>
</ul>
<p>Plan (about 25 minutes for Short plus about 2 hours for Detailed): Short mode, then Q&amp;A aloud, then the code sections (compile-checked with pinned packages), then the eight puzzles, which are plain console programs that model test behaviour.</p>`,
    hi: `<p>Tech Lead से शायद ही कोई कहता है "इस method का test लिखो"। तुमसे पूछा जाता है "<b>तुम्हारी team की testing strategy क्या है?</b>", "<b>90% coverage है फिर भी bugs क्यों जाते हैं?</b>" और "<b>tests को fast और non-flaky कैसे रखते हो?</b>" Tests को trapeze वाले कलाकार के नीचे लगे <b>safety net</b> की तरह सोचो: इतना net चाहिए कि असली गिरावट पकड़े, इतना भारी नहीं कि कोई कूदने की हिम्मत ही न करे।</p>
<ul>
<li><b>Suite की shape:</b> <b>test pyramid</b> (बहुत सारे fast unit tests, कम integration tests, बहुत कम end-to-end tests) और <b>testing trophy</b> (integration tests पर ज़्यादा weight) trade-offs हैं, कोई law नहीं। EF Core वाली ASP.NET Core API के लिए real database पर integration tests अक्सर सबसे ज़्यादा value देते हैं।</li>
<li><b>अच्छा unit test:</b> fast, isolated, repeatable, self-checking (FIRST); Arrange-Act-Assert में लिखा हुआ; एक test में एक behaviour; ऐसा नाम जो sentence जैसा पढ़े, जैसे <code>Total_WithTenPercentDiscount_ReducesPrice</code>।</li>
<li><b>xUnit:</b> एक case के लिए <code>[Fact]</code>, कई cases के लिए <code>[Theory]</code> के साथ <code>[InlineData]</code> या <code>[MemberData]</code>। xUnit <b>हर test के लिए test-class का नया instance</b> बनाता है (constructor = setup, <code>IDisposable</code> = teardown) और महँगा setup class या collection fixtures से share होता है।</li>
<li><b>Test doubles:</b> dummy, stub, fake, spy और mock अलग-अलग चीज़ें हैं। <b>Fake या stub</b> को prefer करो और result check करो; mock (Moq या NSubstitute) मुख्य रूप से तब जब interaction ही behaviour हो। Time के लिए <code>TimeProvider</code> और <code>FakeTimeProvider</code> use करो।</li>
<li><b>Libraries और licences:</b> FluentAssertions v8 और उसके बाद commercial use के लिए paid licence माँगते हैं (v7 Apache 2.0 रहता है); Shouldly, AwesomeAssertions या xUnit का built-in <code>Assert</code> alternatives हैं। Moq 4.20.0 में SponsorLink analyzer आया जिस पर backlash हुआ और 4.20.2 में उसे हटा दिया गया।</li>
<li><b>ASP.NET Core integration tests:</b> <code>WebApplicationFactory&lt;Program&gt;</code> तुम्हारी real pipeline memory में चलाता है; services को <code>ConfigureTestServices</code> से override करो और test authentication handler जोड़ो। Real database के लिए Testcontainers (Day 7), EF in-memory provider नहीं।</li>
<li><b>Quality signals:</b> coverage बताती है कि कौन-सा code <b>चला</b>, यह नहीं कि क्या <b>check हुआ</b>। Mutation testing (Stryker.NET) और assertions का code review आगे जाते हैं। Flaky tests (time, order, shared state, sleeps) को fix करो या quarantine करो; बस ignore मत करो।</li>
<li><b>TL decision:</b> एक page की team strategy लिखो: हर PR पर क्या चलेगा, nightly क्या चलेगा, क्या mandatory है (जैसे हर bug fix के लिए पहले failing test) और क्या judgement पर छोड़ा है (सब कुछ TDD से करना आमतौर पर mandate नहीं होता)।</li>
</ul>
<p>Plan (Short के लिए लगभग 25 मिनट और Detailed के लिए लगभग 2 घंटे): पहले Short mode, फिर Q&amp;A ज़ोर से बोलकर, फिर code sections (pinned packages के साथ compile-checked), फिर आठ puzzles, जो simple console programs हैं और test behaviour को model करते हैं।</p>`,
    hg: `<p>Tech Lead se shaayad hi koi kehta hai "is method ka test likho". Tumse poocha jata hai "<b>tumhari team ki testing strategy kya hai?</b>", "<b>90% coverage hai phir bhi bugs kyon jaate hain?</b>" aur "<b>tests ko fast aur non-flaky kaise rakhte ho?</b>" Tests ko trapeze wale kalakaar ke neeche lage <b>safety net</b> ki tarah socho: itna net chahiye ki asli girawat pakde, itna bhaari nahi ki koi koodne ki himmat hi na kare.</p>
<ul>
<li><b>Suite ki shape:</b> <b>test pyramid</b> (bahut saare fast unit tests, kam integration tests, bahut kam end-to-end tests) aur <b>testing trophy</b> (integration tests par zyaada weight) trade-offs hain, koi law nahi. EF Core wali ASP.NET Core API ke liye real database par integration tests aksar sabse zyaada value dete hain.</li>
<li><b>Achha unit test:</b> fast, isolated, repeatable, self-checking (FIRST); Arrange-Act-Assert mein likha hua; ek test mein ek behaviour; aisa naam jo sentence jaisa padhe, jaise <code>Total_WithTenPercentDiscount_ReducesPrice</code>.</li>
<li><b>xUnit:</b> ek case ke liye <code>[Fact]</code>, kai cases ke liye <code>[Theory]</code> ke saath <code>[InlineData]</code> ya <code>[MemberData]</code>. xUnit <b>har test ke liye test-class ka naya instance</b> banata hai (constructor = setup, <code>IDisposable</code> = teardown) aur mehenga setup class ya collection fixtures se share hota hai.</li>
<li><b>Test doubles:</b> dummy, stub, fake, spy aur mock alag-alag cheezein hain. <b>Fake ya stub</b> ko prefer karo aur result check karo; mock (Moq ya NSubstitute) mukhya roop se tab jab interaction hi behaviour ho. Time ke liye <code>TimeProvider</code> aur <code>FakeTimeProvider</code> use karo.</li>
<li><b>Libraries aur licences:</b> FluentAssertions v8 aur uske baad commercial use ke liye paid licence maangte hain (v7 Apache 2.0 rehta hai); Shouldly, AwesomeAssertions ya xUnit ka built-in <code>Assert</code> alternatives hain. Moq 4.20.0 mein SponsorLink analyzer aaya jis par backlash hua aur 4.20.2 mein use hata diya gaya.</li>
<li><b>ASP.NET Core integration tests:</b> <code>WebApplicationFactory&lt;Program&gt;</code> tumhari real pipeline memory mein chalata hai; services ko <code>ConfigureTestServices</code> se override karo aur test authentication handler jodo. Real database ke liye Testcontainers (Day 7), EF in-memory provider nahi.</li>
<li><b>Quality signals:</b> coverage batati hai ki kaun-sa code <b>chala</b>, yeh nahi ki kya <b>check hua</b>. Mutation testing (Stryker.NET) aur assertions ka code review aage jaate hain. Flaky tests (time, order, shared state, sleeps) ko fix karo ya quarantine karo; bas ignore mat karo.</li>
<li><b>TL decision:</b> ek page ki team strategy likho: har PR par kya chalega, nightly kya chalega, kya mandatory hai (jaise har bug fix ke liye pehle failing test) aur kya judgement par chhoda hai (sab kuch TDD se karna aamtaur par mandate nahi hota).</li>
</ul>
<p>Plan (Short ke liye lagbhag 25 minute aur Detailed ke liye lagbhag 2 ghante): pehle Short mode, phir Q&amp;A zor se bolkar, phir code sections (pinned packages ke saath compile-checked), phir aath puzzles, jo simple console programs hain aur test behaviour ko model karte hain.</p>`
  },
  sections: [
    {
      id: "strategy-overview",
      depth: "short",
      title: {
        en: "Test strategy — pyramid or trophy, test types, what a good unit test looks like",
        hi: "Test strategy — pyramid या trophy, test types, अच्छा unit test कैसा दिखता है",
        hg: "Test strategy — pyramid ya trophy, test types, achha unit test kaisa dikhta hai"
      },
      body: {
        en: `<p><b>Analogy:</b> a restaurant kitchen checks quality at several points. The cook tastes each ingredient (unit tests), tastes the finished curry (integration test) and the manager occasionally orders a full thali like a customer (end-to-end test). Tasting the whole thali for every pinch of salt would be too slow and too costly.</p>
<ul>
<li><b>Test pyramid</b> (Mike Cohn): many fast <b>unit</b> tests at the bottom, fewer <b>integration</b> (service) tests in the middle, very few <b>UI / end-to-end</b> tests on top, because the higher you go the slower, costlier and flakier the test.</li>
<li><b>Testing trophy</b> (Kent C. Dodds) and the <b>honeycomb</b> idea for microservices put more weight on <b>integration</b> tests: they check that the real pieces work together, so they catch bugs that mocked unit tests miss. The shape is a trade-off, not a law.</li>
<li><b>Unit test:</b> one small piece of logic, no network or database, runs in milliseconds. <b>Integration test:</b> several real parts together (API + EF Core + database). <b>End-to-end test:</b> the whole system through the UI or public API. <b>Contract test:</b> checks that a consumer and a provider agree on the shape of messages or HTTP calls (for example Pact or OpenAPI-based checks), without running both systems together.</li>
<li><b>FIRST:</b> <b>F</b>ast, <b>I</b>solated (no test depends on another), <b>R</b>epeatable (same result every run), <b>S</b>elf-validating (pass or fail, no manual reading), <b>T</b>imely (written close to the code).</li>
<li><b>Arrange-Act-Assert (AAA):</b> set up, do the one thing, check the outcome. <b>One behaviour</b> per test (a few related asserts are fine; unrelated ones are not). Name it so a failure tells the story: <code>Method_Scenario_ExpectedResult</code>, or a plain sentence.</li>
</ul>
<p><b>When to use / when not:</b> write unit tests for rules and calculations (pricing, validation, state changes) where most branching lives. Use integration tests for the seams (HTTP, EF Core, messaging, serialisation) where bugs usually hide. Keep end-to-end tests to a handful of critical journeys (login, checkout). Do not chase a perfect shape: for a thin CRUD API there may be very little pure logic, so integration tests will be the majority and that is fine.</p>`,
        hi: `<p><b>Analogy:</b> restaurant की kitchen में quality कई जगह check होती है। Cook हर ingredient चखता है (unit tests), तैयार curry चखता है (integration test) और manager कभी-कभी customer की तरह पूरी thali order करता है (end-to-end test)। हर चुटकी नमक के लिए पूरी thali चखना बहुत slow और महँगा होता।</p>
<ul>
<li><b>Test pyramid</b> (Mike Cohn): नीचे बहुत सारे fast <b>unit</b> tests, बीच में कम <b>integration</b> (service) tests, ऊपर बहुत कम <b>UI / end-to-end</b> tests, क्योंकि जितना ऊपर जाओ test उतना slow, महँगा और flaky होता है।</li>
<li><b>Testing trophy</b> (Kent C. Dodds) और microservices के लिए <b>honeycomb</b> idea <b>integration</b> tests को ज़्यादा weight देते हैं: वे check करते हैं कि real pieces साथ में काम करते हैं, इसलिए वे ऐसे bugs पकड़ते हैं जो mocked unit tests miss कर देते हैं। Shape एक trade-off है, law नहीं।</li>
<li><b>Unit test:</b> logic का एक छोटा piece, network या database नहीं, milliseconds में चलता है। <b>Integration test:</b> कई real parts साथ में (API + EF Core + database)। <b>End-to-end test:</b> पूरा system UI या public API से। <b>Contract test:</b> check करता है कि consumer और provider messages या HTTP calls की shape पर agree हैं (जैसे Pact या OpenAPI-based checks), दोनों systems को साथ चलाए बिना।</li>
<li><b>FIRST:</b> <b>F</b>ast, <b>I</b>solated (कोई test दूसरे पर depend नहीं करता), <b>R</b>epeatable (हर run में same result), <b>S</b>elf-validating (pass या fail, हाथ से पढ़ना नहीं), <b>T</b>imely (code के पास ही लिखा हुआ)।</li>
<li><b>Arrange-Act-Assert (AAA):</b> setup करो, एक काम करो, outcome check करो। हर test में <b>एक behaviour</b> (कुछ related asserts ठीक हैं; unrelated नहीं)। नाम ऐसा रखो कि failure पूरी कहानी बता दे: <code>Method_Scenario_ExpectedResult</code>, या सीधा sentence।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> rules और calculations (pricing, validation, state changes) के लिए unit tests लिखो जहाँ ज़्यादातर branching होती है। Seams (HTTP, EF Core, messaging, serialisation) के लिए integration tests use करो, जहाँ bugs अक्सर छुपते हैं। End-to-end tests कुछ ही critical journeys (login, checkout) तक रखो। Perfect shape के पीछे मत भागो: पतली CRUD API में pure logic बहुत कम हो सकती है, तो integration tests ज़्यादा होंगे और वो ठीक है।</p>`,
        hg: `<p><b>Analogy:</b> restaurant ki kitchen mein quality kai jagah check hoti hai. Cook har ingredient chakhta hai (unit tests), taiyaar curry chakhta hai (integration test) aur manager kabhi-kabhi customer ki tarah poori thali order karta hai (end-to-end test). Har chutki namak ke liye poori thali chakhna bahut slow aur mehenga hota.</p>
<ul>
<li><b>Test pyramid</b> (Mike Cohn): neeche bahut saare fast <b>unit</b> tests, beech mein kam <b>integration</b> (service) tests, upar bahut kam <b>UI / end-to-end</b> tests, kyonki jitna upar jao test utna slow, mehenga aur flaky hota hai.</li>
<li><b>Testing trophy</b> (Kent C. Dodds) aur microservices ke liye <b>honeycomb</b> idea <b>integration</b> tests ko zyaada weight dete hain: woh check karte hain ki real pieces saath mein kaam karte hain, isliye woh aise bugs pakadte hain jo mocked unit tests miss kar dete hain. Shape ek trade-off hai, law nahi.</li>
<li><b>Unit test:</b> logic ka ek chhota piece, network ya database nahi, milliseconds mein chalta hai. <b>Integration test:</b> kai real parts saath mein (API + EF Core + database). <b>End-to-end test:</b> poora system UI ya public API se. <b>Contract test:</b> check karta hai ki consumer aur provider messages ya HTTP calls ki shape par agree hain (jaise Pact ya OpenAPI-based checks), dono systems ko saath chalaye bina.</li>
<li><b>FIRST:</b> <b>F</b>ast, <b>I</b>solated (koi test doosre par depend nahi karta), <b>R</b>epeatable (har run mein same result), <b>S</b>elf-validating (pass ya fail, haath se padhna nahi), <b>T</b>imely (code ke paas hi likha hua).</li>
<li><b>Arrange-Act-Assert (AAA):</b> setup karo, ek kaam karo, outcome check karo. Har test mein <b>ek behaviour</b> (kuch related asserts theek hain; unrelated nahi). Naam aisa rakho ki failure poori kahani bata de: <code>Method_Scenario_ExpectedResult</code>, ya seedha sentence.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> rules aur calculations (pricing, validation, state changes) ke liye unit tests likho jahan zyaadatar branching hoti hai. Seams (HTTP, EF Core, messaging, serialisation) ke liye integration tests use karo, jahan bugs aksar chhupte hain. End-to-end tests kuch hi critical journeys (login, checkout) tak rakho. Perfect shape ke peeche mat bhaago: patli CRUD API mein pure logic bahut kam ho sakti hai, to integration tests zyaada honge aur woh theek hai.</p>`
      }
    },
    {
      id: "tools-overview",
      depth: "short",
      title: {
        en: "Tools — xUnit, test doubles, mocking libraries, assertion libraries and licences",
        hi: "Tools — xUnit, test doubles, mocking libraries, assertion libraries और licences",
        hg: "Tools — xUnit, test doubles, mocking libraries, assertion libraries aur licences"
      },
      body: {
        en: `<p><b>Analogy:</b> a film shoot uses stand-ins. A <b>dummy</b> just fills the frame, a <b>stub</b> says one fixed line, a <b>fake</b> is a cheap working set (looks like a house, but it is plywood), a <b>spy</b> notes down what happened, and a <b>mock</b> comes with a script and complains if the actors do not follow it.</p>
<ul>
<li><b>xUnit.net</b> is the most common .NET test framework (NUnit and MSTest are alternatives). <code>[Fact]</code> = one case; <code>[Theory]</code> + <code>[InlineData]</code>/<code>[MemberData]</code> = same test, many inputs. xUnit builds a <b>new instance of the test class for every test</b>, so fields are not shared between tests. <b>xUnit v3</b> (<code>xunit.v3</code> packages) is the current generation next to v2; test projects become executables.</li>
<li><b>Fixtures</b> share expensive setup: <code>IClassFixture&lt;T&gt;</code> = one instance per test class; <code>ICollectionFixture&lt;T&gt;</code> + <code>[Collection]</code> = shared across classes. Test classes in different collections can run in parallel; tests inside one class run one after another.</li>
<li><b>Test doubles</b> (Meszaros / Martin Fowler's terms): <b>dummy</b> (passed but never used), <b>stub</b> (returns canned answers), <b>fake</b> (a working shortcut, like an in-memory repository), <b>spy</b> (records calls), <b>mock</b> (pre-programmed expectations that verify interactions). Libraries like <b>Moq</b> and <b>NSubstitute</b> generate stubs, spies and mocks for interfaces.</li>
<li><b>Prefer state over interaction:</b> check what the code returned or stored, not how many times it called a helper. Interaction checks (<code>Verify</code>, <code>Received</code>) make tests break on harmless refactors; keep them for real side effects (an email sent, a message published).</li>
<li><b>Licence watch:</b> <b>FluentAssertions</b> v8 and later use a commercial licence for commercial use (v7 remains Apache 2.0); alternatives are <b>Shouldly</b>, the community fork <b>AwesomeAssertions</b> (Apache 2.0) or xUnit's built-in <code>Assert</code>. <b>Moq</b> 4.20.0 included the <b>SponsorLink</b> build analyzer, widely criticised for reading the developer's git email; it was removed in 4.20.2. A TL should check licences and dependency changes before upgrading test libraries.</li>
<li><b>Time:</b> inject <code>TimeProvider</code> (Day 1, Day 8) and use <code>FakeTimeProvider</code> from <code>Microsoft.Extensions.TimeProvider.Testing</code> so the test moves the clock by hand and never sleeps.</li>
</ul>
<p><b>When to use / when not:</b> use a mock library when the other side is a real boundary (payment gateway, email, message bus) and the interaction is the thing to verify. Do not mock what is cheap to build for real (a value object, a pure helper, your own simple class), and do not mock types you do not own (HttpClient, DbContext): wrap them or use a fake handler or a real test database.</p>`,
        hi: `<p><b>Analogy:</b> film shoot में stand-ins होते हैं। <b>Dummy</b> बस frame भरता है, <b>stub</b> एक fixed line बोलता है, <b>fake</b> सस्ता लेकिन चलने वाला set है (घर जैसा दिखता है, पर plywood का है), <b>spy</b> नोट करता है कि क्या हुआ, और <b>mock</b> script के साथ आता है और actors उसे follow न करें तो शिकायत करता है।</p>
<ul>
<li><b>xUnit.net</b> सबसे common .NET test framework है (NUnit और MSTest alternatives हैं)। <code>[Fact]</code> = एक case; <code>[Theory]</code> + <code>[InlineData]</code>/<code>[MemberData]</code> = वही test, कई inputs। xUnit <b>हर test के लिए test class का नया instance</b> बनाता है, इसलिए fields tests के बीच share नहीं होते। <b>xUnit v3</b> (<code>xunit.v3</code> packages) v2 के साथ current generation है; test projects executables बन जाते हैं।</li>
<li><b>Fixtures</b> महँगा setup share करते हैं: <code>IClassFixture&lt;T&gt;</code> = हर test class के लिए एक instance; <code>ICollectionFixture&lt;T&gt;</code> + <code>[Collection]</code> = classes के बीच share। अलग collections की test classes parallel चल सकती हैं; एक class के अंदर tests एक के बाद एक चलते हैं।</li>
<li><b>Test doubles</b> (Meszaros / Martin Fowler के terms): <b>dummy</b> (pass होता है पर use नहीं होता), <b>stub</b> (canned answers देता है), <b>fake</b> (working shortcut, जैसे in-memory repository), <b>spy</b> (calls record करता है), <b>mock</b> (pre-programmed expectations जो interactions verify करते हैं)। <b>Moq</b> और <b>NSubstitute</b> जैसी libraries interfaces के लिए stubs, spies और mocks बनाती हैं।</li>
<li><b>State को interaction से ऊपर रखो:</b> check करो कि code ने क्या return या store किया, यह नहीं कि helper को कितनी बार call किया। Interaction checks (<code>Verify</code>, <code>Received</code>) harmless refactor पर भी tests तोड़ देते हैं; उन्हें real side effects (email भेजना, message publish करना) के लिए रखो।</li>
<li><b>Licence पर नज़र:</b> <b>FluentAssertions</b> v8 और उसके बाद commercial use के लिए commercial licence इस्तेमाल करते हैं (v7 Apache 2.0 रहता है); alternatives हैं <b>Shouldly</b>, community fork <b>AwesomeAssertions</b> (Apache 2.0) या xUnit का built-in <code>Assert</code>। <b>Moq</b> 4.20.0 में <b>SponsorLink</b> build analyzer था, जिसकी developer का git email पढ़ने के लिए बहुत आलोचना हुई; 4.20.2 में उसे हटा दिया गया। TL को test libraries upgrade करने से पहले licences और dependency changes check करने चाहिए।</li>
<li><b>Time:</b> <code>TimeProvider</code> inject करो (Day 1, Day 8) और <code>Microsoft.Extensions.TimeProvider.Testing</code> का <code>FakeTimeProvider</code> use करो ताकि test घड़ी को हाथ से आगे बढ़ाए और कभी sleep न करे।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> mock library तब use करो जब दूसरी तरफ real boundary हो (payment gateway, email, message bus) और interaction ही verify करनी हो। जो चीज़ असली बनाना सस्ता है (value object, pure helper, अपनी simple class) उसे mock मत करो, और जो types तुम्हारे नहीं हैं (HttpClient, DbContext) उन्हें mock मत करो: उन्हें wrap करो या fake handler या real test database use करो।</p>`,
        hg: `<p><b>Analogy:</b> film shoot mein stand-ins hote hain. <b>Dummy</b> bas frame bharta hai, <b>stub</b> ek fixed line bolta hai, <b>fake</b> sasta lekin chalne wala set hai (ghar jaisa dikhta hai, par plywood ka hai), <b>spy</b> note karta hai ki kya hua, aur <b>mock</b> script ke saath aata hai aur actors use follow na karein to shikayat karta hai.</p>
<ul>
<li><b>xUnit.net</b> sabse common .NET test framework hai (NUnit aur MSTest alternatives hain). <code>[Fact]</code> = ek case; <code>[Theory]</code> + <code>[InlineData]</code>/<code>[MemberData]</code> = wahi test, kai inputs. xUnit <b>har test ke liye test class ka naya instance</b> banata hai, isliye fields tests ke beech share nahi hote. <b>xUnit v3</b> (<code>xunit.v3</code> packages) v2 ke saath current generation hai; test projects executables ban jaate hain.</li>
<li><b>Fixtures</b> mehenga setup share karte hain: <code>IClassFixture&lt;T&gt;</code> = har test class ke liye ek instance; <code>ICollectionFixture&lt;T&gt;</code> + <code>[Collection]</code> = classes ke beech share. Alag collections ki test classes parallel chal sakti hain; ek class ke andar tests ek ke baad ek chalte hain.</li>
<li><b>Test doubles</b> (Meszaros / Martin Fowler ke terms): <b>dummy</b> (pass hota hai par use nahi hota), <b>stub</b> (canned answers deta hai), <b>fake</b> (working shortcut, jaise in-memory repository), <b>spy</b> (calls record karta hai), <b>mock</b> (pre-programmed expectations jo interactions verify karte hain). <b>Moq</b> aur <b>NSubstitute</b> jaisi libraries interfaces ke liye stubs, spies aur mocks banati hain.</li>
<li><b>State ko interaction se upar rakho:</b> check karo ki code ne kya return ya store kiya, yeh nahi ki helper ko kitni baar call kiya. Interaction checks (<code>Verify</code>, <code>Received</code>) harmless refactor par bhi tests tod dete hain; unhe real side effects (email bhejna, message publish karna) ke liye rakho.</li>
<li><b>Licence par nazar:</b> <b>FluentAssertions</b> v8 aur uske baad commercial use ke liye commercial licence istemaal karte hain (v7 Apache 2.0 rehta hai); alternatives hain <b>Shouldly</b>, community fork <b>AwesomeAssertions</b> (Apache 2.0) ya xUnit ka built-in <code>Assert</code>. <b>Moq</b> 4.20.0 mein <b>SponsorLink</b> build analyzer tha, jiski developer ka git email padhne ke liye bahut aalochna hui; 4.20.2 mein use hata diya gaya. TL ko test libraries upgrade karne se pehle licences aur dependency changes check karne chahiye.</li>
<li><b>Time:</b> <code>TimeProvider</code> inject karo (Day 1, Day 8) aur <code>Microsoft.Extensions.TimeProvider.Testing</code> ka <code>FakeTimeProvider</code> use karo taaki test ghadi ko haath se aage badhaye aur kabhi sleep na kare.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> mock library tab use karo jab doosri taraf real boundary ho (payment gateway, email, message bus) aur interaction hi verify karni ho. Jo cheez asli banana sasta hai (value object, pure helper, apni simple class) use mock mat karo, aur jo types tumhare nahi hain (HttpClient, DbContext) unhe mock mat karo: unhe wrap karo ya fake handler ya real test database use karo.</p>`
      }
    },
    {
      id: "team-strategy-overview",
      depth: "short",
      title: {
        en: "Integration tests, coverage, flaky tests, TDD and a team strategy",
        hi: "Integration tests, coverage, flaky tests, TDD और team strategy",
        hg: "Integration tests, coverage, flaky tests, TDD aur team strategy"
      },
      body: {
        en: `<p><b>Analogy:</b> before opening a new shop branch you do a dress rehearsal with real stock, real billing counter and a few friendly customers. Integration tests are that rehearsal: the real wiring, but under your control.</p>
<ul>
<li><b>WebApplicationFactory&lt;Program&gt;</b> (package <code>Microsoft.AspNetCore.Mvc.Testing</code>) starts your real ASP.NET Core app in memory, with routing, middleware, filters and DI (Day 12, Day 13). Use <code>ConfigureTestServices</code> to replace only the outside world: payment client, clock, database, authentication.</li>
<li><b>Database tests:</b> for EF Core code use a <b>real engine</b>, usually in a container with <b>Testcontainers</b> (Day 7). The EF Core <b>in-memory provider</b> is not a relational database, so Microsoft's guidance advises against it for testing. SQLite is a faster but different engine.</li>
<li><b>Coverage</b> (coverlet) shows which lines <b>ran</b>. A test with no assertion still gives coverage. Use it to find <b>untested</b> areas, not as a target to chase; <b>mutation testing</b> (Stryker.NET) checks whether tests notice a deliberately introduced bug.</li>
<li><b>Flaky tests</b> (sometimes pass, sometimes fail) usually come from time, ordering and shared state, real network, random data, <code>Thread.Sleep</code> or async races. Fix the cause; if you cannot fix quickly, <b>quarantine</b> (run separately, tracked) so one flaky test does not teach the team to ignore red builds.</li>
<li><b>TDD</b> (red, green, refactor): write a failing test, make it pass in the simplest way, clean up. It works very well for business rules and bug fixes. A TL usually promotes it as a habit and mandates a smaller rule that is easy to check: <b>every bug fix comes with a test that failed before the fix</b>.</li>
<li><b>Team strategy:</b> fast unit tests plus integration tests on every PR (Day 21 pipeline), slower or broader suites nightly, a few end-to-end checks after deploy, tests reviewed like production code, and ownership of flaky tests.</li>
</ul>
<p><b>When to use / when not:</b> a Testcontainers database test suits repository, query and migration behaviour; it needs Docker on developer machines and build agents, so keep the count sensible and share one container per test run. Do not add an end-to-end browser test for something an integration test can prove, and do not set a coverage number as a pass-fail rule without also reviewing assertion quality.</p>`,
        hi: `<p><b>Analogy:</b> नई shop branch खोलने से पहले तुम real stock, real billing counter और कुछ friendly customers के साथ dress rehearsal करते हो। Integration tests वही rehearsal हैं: real wiring, पर तुम्हारे control में।</p>
<ul>
<li><b>WebApplicationFactory&lt;Program&gt;</b> (package <code>Microsoft.AspNetCore.Mvc.Testing</code>) तुम्हारी real ASP.NET Core app को memory में चलाता है, routing, middleware, filters और DI के साथ (Day 12, Day 13)। <code>ConfigureTestServices</code> से सिर्फ़ बाहरी दुनिया बदलो: payment client, clock, database, authentication।</li>
<li><b>Database tests:</b> EF Core code के लिए <b>real engine</b> use करो, आमतौर पर <b>Testcontainers</b> से container में (Day 7)। EF Core का <b>in-memory provider</b> relational database नहीं है, इसलिए Microsoft की guidance testing के लिए उसके against है। SQLite तेज़ है पर अलग engine है।</li>
<li><b>Coverage</b> (coverlet) दिखाती है कि कौन-सी lines <b>चलीं</b>। बिना assertion वाला test भी coverage देता है। इसे <b>untested</b> areas ढूँढने के लिए use करो, पीछा करने वाले target की तरह नहीं; <b>mutation testing</b> (Stryker.NET) check करती है कि tests जानबूझकर डाले गए bug को notice करते हैं या नहीं।</li>
<li><b>Flaky tests</b> (कभी pass, कभी fail) आमतौर पर time, ordering और shared state, real network, random data, <code>Thread.Sleep</code> या async races से आते हैं। Cause fix करो; जल्दी fix न हो तो <b>quarantine</b> करो (अलग चलाओ, track करो) ताकि एक flaky test team को red builds ignore करना न सिखा दे।</li>
<li><b>TDD</b> (red, green, refactor): failing test लिखो, सबसे simple तरीके से pass कराओ, clean up करो। Business rules और bug fixes के लिए यह बहुत अच्छा काम करता है। TL आमतौर पर इसे habit की तरह promote करता है और एक छोटा, आसानी से check होने वाला rule mandate करता है: <b>हर bug fix के साथ ऐसा test जो fix से पहले fail होता था</b>।</li>
<li><b>Team strategy:</b> हर PR पर fast unit tests और integration tests (Day 21 pipeline), slower या broader suites nightly, deploy के बाद कुछ end-to-end checks, tests का review production code की तरह, और flaky tests की ownership।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> Testcontainers database test repository, query और migration behaviour के लिए ठीक है; इसके लिए developer machines और build agents पर Docker चाहिए, इसलिए count समझदारी से रखो और हर test run के लिए एक container share करो। जो बात integration test से prove हो सकती है उसके लिए end-to-end browser test मत जोड़ो, और assertion quality review किए बिना coverage number को pass-fail rule मत बनाओ।</p>`,
        hg: `<p><b>Analogy:</b> nayi shop branch kholne se pehle tum real stock, real billing counter aur kuch friendly customers ke saath dress rehearsal karte ho. Integration tests wahi rehearsal hain: real wiring, par tumhare control mein.</p>
<ul>
<li><b>WebApplicationFactory&lt;Program&gt;</b> (package <code>Microsoft.AspNetCore.Mvc.Testing</code>) tumhari real ASP.NET Core app ko memory mein chalata hai, routing, middleware, filters aur DI ke saath (Day 12, Day 13). <code>ConfigureTestServices</code> se sirf bahari duniya badlo: payment client, clock, database, authentication.</li>
<li><b>Database tests:</b> EF Core code ke liye <b>real engine</b> use karo, aamtaur par <b>Testcontainers</b> se container mein (Day 7). EF Core ka <b>in-memory provider</b> relational database nahi hai, isliye Microsoft ki guidance testing ke liye uske against hai. SQLite tez hai par alag engine hai.</li>
<li><b>Coverage</b> (coverlet) dikhati hai ki kaun-si lines <b>chali</b>. Bina assertion wala test bhi coverage deta hai. Ise <b>untested</b> areas dhoondhne ke liye use karo, peecha karne wale target ki tarah nahi; <b>mutation testing</b> (Stryker.NET) check karti hai ki tests jaanbujhkar daale gaye bug ko notice karte hain ya nahi.</li>
<li><b>Flaky tests</b> (kabhi pass, kabhi fail) aamtaur par time, ordering aur shared state, real network, random data, <code>Thread.Sleep</code> ya async races se aate hain. Cause fix karo; jaldi fix na ho to <b>quarantine</b> karo (alag chalao, track karo) taaki ek flaky test team ko red builds ignore karna na sikha de.</li>
<li><b>TDD</b> (red, green, refactor): failing test likho, sabse simple tareeke se pass karao, clean up karo. Business rules aur bug fixes ke liye yeh bahut achha kaam karta hai. TL aamtaur par ise habit ki tarah promote karta hai aur ek chhota, aasaani se check hone wala rule mandate karta hai: <b>har bug fix ke saath aisa test jo fix se pehle fail hota tha</b>.</li>
<li><b>Team strategy:</b> har PR par fast unit tests aur integration tests (Day 21 pipeline), slower ya broader suites nightly, deploy ke baad kuch end-to-end checks, tests ka review production code ki tarah, aur flaky tests ki ownership.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> Testcontainers database test repository, query aur migration behaviour ke liye theek hai; iske liye developer machines aur build agents par Docker chahiye, isliye count samajhdaari se rakho aur har test run ke liye ek container share karo. Jo baat integration test se prove ho sakti hai uske liye end-to-end browser test mat jodo, aur assertion quality review kiye bina coverage number ko pass-fail rule mat banao.</p>`
      }
    },
    {
      id: "xunit-in-code",
      depth: "detailed",
      title: {
        en: "xUnit in code — Fact, Theory, per-test instance, fixtures, v3",
        hi: "Code में xUnit — Fact, Theory, per-test instance, fixtures, v3",
        hg: "Code mein xUnit — Fact, Theory, per-test instance, fixtures, v3"
      },
      body: {
        en: `<p><b>Analogy:</b> each test gets a <b>fresh exam hall desk</b>: the constructor sets the desk up and <code>Dispose</code> clears it. If a student leaves notes on one desk, the next student never sees them. A <b>fixture</b> is the shared water cooler: set up once and used by many, so it must not hold anyone's private papers.</p>
<ul>
<li><b>Fact vs Theory:</b> a <code>[Fact]</code> has no parameters. A <code>[Theory]</code> gets rows from <code>[InlineData]</code> (constants), <code>[MemberData]</code> (a static member, good for objects or generated rows) or <code>[ClassData]</code>. Each row is reported as its own test, so one failing row does not hide the others.</li>
<li><b>Lifecycle:</b> a new instance of the class per test, so instance fields start fresh; use the constructor for setup and <code>IDisposable</code> (or <code>IAsyncLifetime</code>) for cleanup. Do not use static fields to pass data between tests.</li>
<li><b>Fixtures:</b> <code>IClassFixture&lt;T&gt;</code> shares one <code>T</code> within a class. For several classes, define a collection with <code>[CollectionDefinition]</code> and <code>ICollectionFixture&lt;T&gt;</code>, then mark classes with <code>[Collection("name")]</code>. Fixture state is shared, so keep per-test data out of it.</li>
<li><b>Parallelism:</b> by default each test class is its own collection; collections run in parallel with each other, while the tests in one collection run one after another. Tests that share a database or other global state should share a collection (or be made independent).</li>
<li><b>Output:</b> inject <code>ITestOutputHelper</code> through the constructor to write diagnostics; <code>Console.WriteLine</code> is not captured per test in xUnit v2.</li>
<li><b>xUnit v3:</b> the <code>xunit.v3</code> packages are the current generation. Test projects are executables, <code>IAsyncLifetime</code> uses <code>ValueTask</code>, and <code>TestContext.Current</code> exposes things like a cancellation token. Many v2 tests port easily; check the official migration guide and your CI tooling before moving a large solution.</li>
</ul>
<p><b>When to use / when not:</b> use <code>[Theory]</code> when the same rule is checked with different data, not to cram different behaviours into one method. Use a class fixture for a costly resource (container, web factory), but keep each test's data independent (own rows, unique ids) so the shared fixture does not create hidden order dependence.</p>`,
        hi: `<p><b>Analogy:</b> हर test को <b>exam hall की नई desk</b> मिलती है: constructor desk सजाता है और <code>Dispose</code> उसे साफ़ करता है। कोई student एक desk पर notes छोड़ दे तो अगला student उन्हें कभी नहीं देखता। <b>Fixture</b> साझा water cooler है: एक बार लगता है और कई लोग use करते हैं, इसलिए उसमें किसी के private कागज़ नहीं रखने चाहिए।</p>
<ul>
<li><b>Fact vs Theory:</b> <code>[Fact]</code> में parameters नहीं होते। <code>[Theory]</code> को rows मिलती हैं <code>[InlineData]</code> (constants), <code>[MemberData]</code> (static member, objects या generated rows के लिए अच्छा) या <code>[ClassData]</code> से। हर row अलग test की तरह report होती है, इसलिए एक row fail होने से बाकी छुपती नहीं।</li>
<li><b>Lifecycle:</b> हर test के लिए class का नया instance, इसलिए instance fields fresh शुरू होते हैं; setup के लिए constructor और cleanup के लिए <code>IDisposable</code> (या <code>IAsyncLifetime</code>) use करो। Tests के बीच data पहुँचाने के लिए static fields use मत करो।</li>
<li><b>Fixtures:</b> <code>IClassFixture&lt;T&gt;</code> एक class के अंदर एक <code>T</code> share करता है। कई classes के लिए <code>[CollectionDefinition]</code> और <code>ICollectionFixture&lt;T&gt;</code> से collection बनाओ, फिर classes पर <code>[Collection("name")]</code> लगाओ। Fixture की state shared होती है, इसलिए per-test data उसमें मत रखो।</li>
<li><b>Parallelism:</b> by default हर test class अपनी collection होती है; collections आपस में parallel चलती हैं, जबकि एक collection के tests एक के बाद एक चलते हैं। जो tests database या कोई global state share करते हैं, उन्हें एक collection share करनी चाहिए (या independent बनाओ)।</li>
<li><b>Output:</b> diagnostics लिखने के लिए constructor से <code>ITestOutputHelper</code> inject करो; xUnit v2 में <code>Console.WriteLine</code> per-test capture नहीं होता।</li>
<li><b>xUnit v3:</b> <code>xunit.v3</code> packages current generation हैं। Test projects executables होते हैं, <code>IAsyncLifetime</code> में <code>ValueTask</code> आता है, और <code>TestContext.Current</code> से cancellation token जैसी चीज़ें मिलती हैं। कई v2 tests आसानी से port हो जाते हैं; बड़ा solution move करने से पहले official migration guide और CI tooling check करो।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> <code>[Theory]</code> तब use करो जब same rule अलग data से check हो रहा हो, अलग behaviours को एक method में ठूँसने के लिए नहीं। महँगे resource (container, web factory) के लिए class fixture use करो, पर हर test का data independent रखो (अपनी rows, unique ids) ताकि shared fixture छुपी हुई order dependence न बनाए।</p>`,
        hg: `<p><b>Analogy:</b> har test ko <b>exam hall ki nayi desk</b> milti hai: constructor desk sajata hai aur <code>Dispose</code> use saaf karta hai. Koi student ek desk par notes chhod de to agla student unhe kabhi nahi dekhta. <b>Fixture</b> saajha water cooler hai: ek baar lagta hai aur kai log use karte hain, isliye usme kisi ke private kaagaz nahi rakhne chahiye.</p>
<ul>
<li><b>Fact vs Theory:</b> <code>[Fact]</code> mein parameters nahi hote. <code>[Theory]</code> ko rows milti hain <code>[InlineData]</code> (constants), <code>[MemberData]</code> (static member, objects ya generated rows ke liye achha) ya <code>[ClassData]</code> se. Har row alag test ki tarah report hoti hai, isliye ek row fail hone se baaki chhupti nahi.</li>
<li><b>Lifecycle:</b> har test ke liye class ka naya instance, isliye instance fields fresh shuru hote hain; setup ke liye constructor aur cleanup ke liye <code>IDisposable</code> (ya <code>IAsyncLifetime</code>) use karo. Tests ke beech data pahunchane ke liye static fields use mat karo.</li>
<li><b>Fixtures:</b> <code>IClassFixture&lt;T&gt;</code> ek class ke andar ek <code>T</code> share karta hai. Kai classes ke liye <code>[CollectionDefinition]</code> aur <code>ICollectionFixture&lt;T&gt;</code> se collection banao, phir classes par <code>[Collection("name")]</code> lagao. Fixture ki state shared hoti hai, isliye per-test data usme mat rakho.</li>
<li><b>Parallelism:</b> by default har test class apni collection hoti hai; collections aapas mein parallel chalti hain, jabki ek collection ke tests ek ke baad ek chalte hain. Jo tests database ya koi global state share karte hain, unhe ek collection share karni chahiye (ya independent banao).</li>
<li><b>Output:</b> diagnostics likhne ke liye constructor se <code>ITestOutputHelper</code> inject karo; xUnit v2 mein <code>Console.WriteLine</code> per-test capture nahi hota.</li>
<li><b>xUnit v3:</b> <code>xunit.v3</code> packages current generation hain. Test projects executables hote hain, <code>IAsyncLifetime</code> mein <code>ValueTask</code> aata hai, aur <code>TestContext.Current</code> se cancellation token jaisi cheezein milti hain. Kai v2 tests aasaani se port ho jaate hain; bada solution move karne se pehle official migration guide aur CI tooling check karo.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> <code>[Theory]</code> tab use karo jab same rule alag data se check ho raha ho, alag behaviours ko ek method mein thoonsne ke liye nahi. Mehenge resource (container, web factory) ke liye class fixture use karo, par har test ka data independent rakho (apni rows, unique ids) taaki shared fixture chhupi hui order dependence na banaye.</p>`
      },
      code: [
        {
          caption: {
            en: "A well-shaped xUnit v2 test class: AAA, one behaviour per test, Theory with InlineData and MemberData, per-test constructor and Dispose.",
            hi: "अच्छी shape की xUnit v2 test class: AAA, हर test में एक behaviour, InlineData और MemberData वाली Theory, per-test constructor और Dispose।",
            hg: "Achhi shape ki xUnit v2 test class: AAA, har test mein ek behaviour, InlineData aur MemberData wali Theory, per-test constructor aur Dispose."
          },
          check: "compile",
          packages: ["xunit@2.*"],
          src: `using Xunit;
using Xunit.Abstractions;

public class PriceCalculator
{
    public decimal Total(decimal unitPrice, int quantity, decimal discountPercent = 0)
    {
        if (quantity <= 0) throw new ArgumentOutOfRangeException(nameof(quantity));
        var gross = unitPrice * quantity;
        return gross - gross * discountPercent / 100m;
    }
}

public class PriceCalculatorTests : IDisposable
{
    private readonly ITestOutputHelper _output;
    private readonly PriceCalculator _sut = new();   // xUnit creates a new test-class instance per test

    public PriceCalculatorTests(ITestOutputHelper output)
    {
        _output = output;
        _output.WriteLine("constructor: runs before each test");
    }

    [Fact]
    public void Total_NoDiscount_MultipliesPriceByQuantity()
    {
        // Arrange
        const int quantity = 3;

        // Act
        var total = _sut.Total(50m, quantity);

        // Assert
        Assert.Equal(150m, total);
    }

    [Theory]
    [InlineData(100, 2, 10, 180)]
    [InlineData(100, 1, 0, 100)]
    [InlineData(80, 5, 25, 300)]
    public void Total_WithDiscount_ReducesPrice(int price, int quantity, int percent, int expected)
    {
        var total = _sut.Total(price, quantity, percent);

        Assert.Equal((decimal)expected, total);
    }

    public static IEnumerable<object[]> InvalidQuantities()
    {
        yield return new object[] { 0 };
        yield return new object[] { -1 };
    }

    [Theory]
    [MemberData(nameof(InvalidQuantities))]
    public void Total_NonPositiveQuantity_Throws(int quantity)
    {
        Assert.Throws<ArgumentOutOfRangeException>(() => _sut.Total(10m, quantity));
    }

    public void Dispose() => _output.WriteLine("Dispose: runs after each test");
}
`
        },
        {
          caption: {
            en: "Class fixture vs collection fixture: one expensive object shared safely (the tests keep their own data).",
            hi: "Class fixture vs collection fixture: एक महँगा object safely share होता है (tests अपना data अलग रखते हैं)।",
            hg: "Class fixture vs collection fixture: ek mehenga object safely share hota hai (tests apna data alag rakhte hain)."
          },
          check: "compile",
          packages: ["xunit@2.*"],
          src: `using Xunit;

public class SharedResourceFixture : IAsyncLifetime
{
    public string ConnectionString { get; private set; } = "";

    public Task InitializeAsync()       // runs once, before the first test that uses the fixture
    {
        ConnectionString = "Server=localhost;Database=TestDb";
        return Task.CompletedTask;
    }

    public Task DisposeAsync() => Task.CompletedTask;   // runs once, after the last test
}

// One fixture instance for ONE class
public class CatalogTests : IClassFixture<SharedResourceFixture>
{
    private readonly SharedResourceFixture _fixture;
    public CatalogTests(SharedResourceFixture fixture) => _fixture = fixture;

    [Fact]
    public void Fixture_IsAvailable() => Assert.NotEmpty(_fixture.ConnectionString);
}

// One fixture instance for MANY classes: they join the same collection (and so run one after another)
[CollectionDefinition("shared-resource")]
public class SharedResourceCollection : ICollectionFixture<SharedResourceFixture> { }

[Collection("shared-resource")]
public class OrderTests
{
    private readonly SharedResourceFixture _fixture;
    public OrderTests(SharedResourceFixture fixture) => _fixture = fixture;

    [Fact]
    public void Fixture_IsShared() => Assert.NotEmpty(_fixture.ConnectionString);
}

[Collection("shared-resource")]
public class InvoiceTests
{
    private readonly SharedResourceFixture _fixture;
    public InvoiceTests(SharedResourceFixture fixture) => _fixture = fixture;

    [Fact]
    public void Fixture_IsShared() => Assert.NotEmpty(_fixture.ConnectionString);
}
`
        },
        {
          caption: {
            en: "xUnit v3 flavour (xunit.v3.core and xunit.v3.assert packages): ValueTask lifecycle and TestContext.Current.CancellationToken.",
            hi: "xUnit v3 flavour (xunit.v3.core और xunit.v3.assert packages): ValueTask lifecycle और TestContext.Current.CancellationToken।",
            hg: "xUnit v3 flavour (xunit.v3.core aur xunit.v3.assert packages): ValueTask lifecycle aur TestContext.Current.CancellationToken."
          },
          check: "compile",
          packages: ["xunit.v3.core@4.*", "xunit.v3.assert@4.*"],
          src: `using Xunit;

public class ReportLoader
{
    public async Task<int> CountRowsAsync(CancellationToken ct)
    {
        await Task.Delay(TimeSpan.Zero, ct);
        return 3;
    }
}

public class ReportLoaderTests : IAsyncLifetime
{
    private ReportLoader? _sut;

    public ValueTask InitializeAsync()      // v3: ValueTask (v2 used Task)
    {
        _sut = new ReportLoader();
        return ValueTask.CompletedTask;
    }

    public ValueTask DisposeAsync() => ValueTask.CompletedTask;

    [Fact]
    public async Task CountRowsAsync_Default_ReturnsThree()
    {
        var ct = TestContext.Current.CancellationToken;   // new in v3: cancelled when the run is cancelled or the test times out

        var rows = await _sut!.CountRowsAsync(ct);

        Assert.Equal(3, rows);
    }
}
`
        }
      ]
    },
    {
      id: "doubles-in-code",
      depth: "detailed",
      title: {
        en: "Test doubles in code — hand-written fake, Moq, NSubstitute, FakeTimeProvider",
        hi: "Code में test doubles — hand-written fake, Moq, NSubstitute, FakeTimeProvider",
        hg: "Code mein test doubles — hand-written fake, Moq, NSubstitute, FakeTimeProvider"
      },
      body: {
        en: `<p><b>Analogy:</b> to test a delivery app you do not send a real rider to a real address every time. A <b>fake rider</b> who always "delivers" instantly is enough for the order-flow test; a <b>strict supervisor</b> (mock) is useful only when the thing to prove is "the customer got exactly one SMS".</p>
<ul>
<li><b>Hand-written fake or spy:</b> a small class such as <code>InMemoryEmailSender</code> with a <code>Sent</code> list. It is plain C#, easy to read, survives refactoring and can be reused by many tests. For two or three dependencies this is often the clearest option.</li>
<li><b>Moq:</b> <code>new Mock&lt;T&gt;()</code>, configure with <code>Setup(...).Returns(...)</code>, use <code>.Object</code>, check calls with <code>Verify(..., Times.Once)</code>. If several setups match a call, the <b>most recent</b> matching setup wins (Puzzle 3). The default behaviour is <i>loose</i>: unconfigured calls return a default value.</li>
<li><b>NSubstitute:</b> <code>Substitute.For&lt;T&gt;()</code>, configure with <code>sub.Method(args).Returns(value)</code>, check with <code>sub.Received(1).Method(args)</code>. Less ceremony than Moq; <code>Returns(a, b, c)</code> gives a sequence (Puzzle 4). Both libraries mock interfaces and virtual members; they cannot intercept static, sealed or non-virtual members.</li>
<li><b>Time:</b> never call <code>DateTime.UtcNow</code> inside logic you want to test. Inject <code>TimeProvider</code> (Day 1, Day 8); in tests pass <code>FakeTimeProvider</code> and call <code>Advance(...)</code>. No sleeping, no flaky edge cases near an expiry (Day 16 uses it for a circuit breaker; Puzzle 5 uses its fake timers).</li>
<li><b>Verify only what matters:</b> a payment gateway charge or an email sent is a real outcome, so verify it. Verifying that a private helper or repository method was called makes tests fail after harmless refactors.</li>
</ul>
<p><b>When to use / when not:</b> choose a fake when the dependency has behaviour you want to keep consistent (a repository that stores and returns), a stub for simple canned answers, a mock for real side effects. Do not mock simple data classes or your own pure functions, and do not set up long chains of mocks: if a test needs ten setups, the class under test probably has too many dependencies (Day 8, SRP).</p>`,
        hi: `<p><b>Analogy:</b> delivery app test करने के लिए हर बार असली rider को असली address पर नहीं भेजते। Order-flow test के लिए एक <b>fake rider</b> जो हमेशा तुरंत "deliver" कर दे, काफ़ी है; <b>strict supervisor</b> (mock) तभी काम का है जब prove यह करना हो कि "customer को ठीक एक SMS मिला"।</p>
<ul>
<li><b>Hand-written fake या spy:</b> छोटी class जैसे <code>InMemoryEmailSender</code> जिसमें <code>Sent</code> list हो। यह plain C# है, पढ़ने में आसान, refactoring में टिकती है और कई tests में reuse हो सकती है। दो-तीन dependencies के लिए अक्सर यही सबसे clear option है।</li>
<li><b>Moq:</b> <code>new Mock&lt;T&gt;()</code>, <code>Setup(...).Returns(...)</code> से configure करो, <code>.Object</code> use करो, calls <code>Verify(..., Times.Once)</code> से check करो। कई setups एक call से match करें तो <b>सबसे recent</b> matching setup जीतता है (Puzzle 3)। Default behaviour <i>loose</i> है: unconfigured calls default value return करती हैं।</li>
<li><b>NSubstitute:</b> <code>Substitute.For&lt;T&gt;()</code>, <code>sub.Method(args).Returns(value)</code> से configure, <code>sub.Received(1).Method(args)</code> से check। Moq से कम ceremony; <code>Returns(a, b, c)</code> एक sequence देता है (Puzzle 4)। दोनों libraries interfaces और virtual members mock करती हैं; static, sealed या non-virtual members को intercept नहीं कर सकतीं।</li>
<li><b>Time:</b> जिस logic को test करना है उसके अंदर <code>DateTime.UtcNow</code> call मत करो। <code>TimeProvider</code> inject करो (Day 1, Day 8); tests में <code>FakeTimeProvider</code> दो और <code>Advance(...)</code> call करो। न sleep, न expiry के आसपास flaky edge cases (Day 16 इसे circuit breaker के लिए use करता है; Puzzle 5 इसके fake timers use करता है)।</li>
<li><b>सिर्फ़ ज़रूरी चीज़ verify करो:</b> payment gateway का charge या भेजा गया email असली outcome है, इसलिए उसे verify करो। Private helper या repository method call हुआ यह verify करने से harmless refactor के बाद tests fail होते हैं।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> जब dependency में ऐसा behaviour हो जिसे consistent रखना है (store और return करने वाला repository) तो fake चुनो, simple canned answers के लिए stub, real side effects के लिए mock। Simple data classes या अपने pure functions को mock मत करो, और mocks की लंबी chains set up मत करो: test को दस setups चाहिए तो class में शायद dependencies बहुत ज़्यादा हैं (Day 8, SRP)।</p>`,
        hg: `<p><b>Analogy:</b> delivery app test karne ke liye har baar asli rider ko asli address par nahi bhejte. Order-flow test ke liye ek <b>fake rider</b> jo hamesha turant "deliver" kar de, kaafi hai; <b>strict supervisor</b> (mock) tabhi kaam ka hai jab prove yeh karna ho ki "customer ko theek ek SMS mila".</p>
<ul>
<li><b>Hand-written fake ya spy:</b> chhoti class jaise <code>InMemoryEmailSender</code> jisme <code>Sent</code> list ho. Yeh plain C# hai, padhne mein aasaan, refactoring mein tikti hai aur kai tests mein reuse ho sakti hai. Do-teen dependencies ke liye aksar yahi sabse clear option hai.</li>
<li><b>Moq:</b> <code>new Mock&lt;T&gt;()</code>, <code>Setup(...).Returns(...)</code> se configure karo, <code>.Object</code> use karo, calls <code>Verify(..., Times.Once)</code> se check karo. Kai setups ek call se match karein to <b>sabse recent</b> matching setup jeetta hai (Puzzle 3). Default behaviour <i>loose</i> hai: unconfigured calls default value return karti hain.</li>
<li><b>NSubstitute:</b> <code>Substitute.For&lt;T&gt;()</code>, <code>sub.Method(args).Returns(value)</code> se configure, <code>sub.Received(1).Method(args)</code> se check. Moq se kam ceremony; <code>Returns(a, b, c)</code> ek sequence deta hai (Puzzle 4). Dono libraries interfaces aur virtual members mock karti hain; static, sealed ya non-virtual members ko intercept nahi kar sakti.</li>
<li><b>Time:</b> jis logic ko test karna hai uske andar <code>DateTime.UtcNow</code> call mat karo. <code>TimeProvider</code> inject karo (Day 1, Day 8); tests mein <code>FakeTimeProvider</code> do aur <code>Advance(...)</code> call karo. Na sleep, na expiry ke aaspaas flaky edge cases (Day 16 ise circuit breaker ke liye use karta hai; Puzzle 5 iske fake timers use karta hai).</li>
<li><b>Sirf zaroori cheez verify karo:</b> payment gateway ka charge ya bheja gaya email asli outcome hai, isliye use verify karo. Private helper ya repository method call hua yeh verify karne se harmless refactor ke baad tests fail hote hain.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> jab dependency mein aisa behaviour ho jise consistent rakhna hai (store aur return karne wala repository) to fake chuno, simple canned answers ke liye stub, real side effects ke liye mock. Simple data classes ya apne pure functions ko mock mat karo, aur mocks ki lambi chains set up mat karo: test ko das setups chahiye to class mein shaayad dependencies bahut zyaada hain (Day 8, SRP).</p>`
      },
      code: [
        {
          caption: {
            en: "Same behaviour tested two ways: a Moq mock for the real side effect, and a hand-written fake for state-based checking.",
            hi: "Same behaviour दो तरीकों से test: real side effect के लिए Moq mock, और state-based checking के लिए hand-written fake।",
            hg: "Same behaviour do tareekon se test: real side effect ke liye Moq mock, aur state-based checking ke liye hand-written fake."
          },
          check: "compile",
          packages: ["xunit@2.*", "Moq@4.20.72"],
          src: `using Moq;
using Xunit;

public interface IPaymentGateway { Task<bool> ChargeAsync(string customerId, decimal amount); }
public interface IEmailSender { Task SendAsync(string to, string subject); }

public class OrderService(IPaymentGateway gateway, IEmailSender email)
{
    public async Task<string> PlaceAsync(string customerId, decimal amount)
    {
        if (!await gateway.ChargeAsync(customerId, amount)) return "Declined";
        await email.SendAsync(customerId, "Receipt");
        return "Confirmed";
    }
}

// Hand-written fake: plain C#, reusable, records what happened
public class InMemoryEmailSender : IEmailSender
{
    public List<(string To, string Subject)> Sent { get; } = new();

    public Task SendAsync(string to, string subject)
    {
        Sent.Add((to, subject));
        return Task.CompletedTask;
    }
}

public class OrderServiceTests
{
    [Fact]
    public async Task PlaceAsync_PaymentSucceeds_ConfirmsOrderAndEmailsReceiptOnce()
    {
        var gateway = new Mock<IPaymentGateway>();
        gateway.Setup(g => g.ChargeAsync("c1", 500m)).ReturnsAsync(true);   // stub: canned answer
        var email = new Mock<IEmailSender>();
        var sut = new OrderService(gateway.Object, email.Object);

        var result = await sut.PlaceAsync("c1", 500m);

        Assert.Equal("Confirmed", result);
        email.Verify(e => e.SendAsync("c1", "Receipt"), Times.Once);        // the email IS the behaviour
    }

    [Fact]
    public async Task PlaceAsync_PaymentDeclined_ReturnsDeclinedAndSendsNoEmail()
    {
        var gateway = new Mock<IPaymentGateway>();
        gateway.Setup(g => g.ChargeAsync(It.IsAny<string>(), It.IsAny<decimal>())).ReturnsAsync(false);
        var email = new InMemoryEmailSender();                              // fake: check state, no Verify
        var sut = new OrderService(gateway.Object, email);

        var result = await sut.PlaceAsync("c1", 500m);

        Assert.Equal("Declined", result);
        Assert.Empty(email.Sent);
    }
}
`
        },
        {
          caption: {
            en: "NSubstitute plus FakeTimeProvider: no sleeping, the test moves the clock past the expiry by hand.",
            hi: "NSubstitute के साथ FakeTimeProvider: sleep नहीं, test घड़ी को expiry के पार हाथ से आगे बढ़ाता है।",
            hg: "NSubstitute ke saath FakeTimeProvider: sleep nahi, test ghadi ko expiry ke paar haath se aage badhata hai."
          },
          check: "compile",
          packages: ["xunit@2.*", "NSubstitute@6.*", "Microsoft.Extensions.TimeProvider.Testing@9.*"],
          src: `using Microsoft.Extensions.Time.Testing;
using NSubstitute;
using Xunit;

public interface IOtpSender { void Send(string phone, string code); }

public class OtpService(IOtpSender sender, TimeProvider clock)
{
    private readonly Dictionary<string, (string Code, DateTimeOffset ExpiresAt)> _issued = new();

    public void Issue(string phone, string code)
    {
        _issued[phone] = (code, clock.GetUtcNow().AddMinutes(5));
        sender.Send(phone, code);
    }

    public bool Verify(string phone, string code) =>
        _issued.TryGetValue(phone, out var o) && o.Code == code && clock.GetUtcNow() < o.ExpiresAt;
}

public class OtpServiceTests
{
    private readonly FakeTimeProvider _clock = new(new DateTimeOffset(2026, 1, 1, 9, 0, 0, TimeSpan.Zero));
    private readonly IOtpSender _sender = Substitute.For<IOtpSender>();
    private readonly OtpService _sut;

    public OtpServiceTests() => _sut = new OtpService(_sender, _clock);

    [Fact]
    public void Verify_JustBeforeExpiry_ReturnsTrue()
    {
        _sut.Issue("98100", "4321");
        _clock.Advance(TimeSpan.FromMinutes(4) + TimeSpan.FromSeconds(59));

        Assert.True(_sut.Verify("98100", "4321"));
    }

    [Fact]
    public void Verify_AtExpiry_ReturnsFalseAndSmsWasSentOnce()
    {
        _sut.Issue("98100", "4321");
        _clock.Advance(TimeSpan.FromMinutes(5));

        Assert.False(_sut.Verify("98100", "4321"));
        _sender.Received(1).Send("98100", "4321");
    }
}
`
        }
      ]
    },
    {
      id: "webapp-in-code",
      depth: "detailed",
      title: {
        en: "ASP.NET Core integration tests — WebApplicationFactory, ConfigureTestServices, test auth",
        hi: "ASP.NET Core के integration tests — WebApplicationFactory, ConfigureTestServices, test auth",
        hg: "ASP.NET Core integration tests — WebApplicationFactory, ConfigureTestServices, test auth"
      },
      body: {
        en: `<p><b>Analogy:</b> a driving test is done on a real car on a real road layout, but the examiner replaces the busy traffic with a quiet test track. <code>WebApplicationFactory</code> starts your <b>real app</b> (routing, middleware, model binding, serialisation) and you replace only the outside parts.</p>
<ul>
<li><b>How it works:</b> <code>WebApplicationFactory&lt;Program&gt;</code> (package <code>Microsoft.AspNetCore.Mvc.Testing</code>) builds your app in memory with the in-process test server; <code>CreateClient()</code> gives an <code>HttpClient</code> that talks to it without opening a real port. Your test project needs access to <code>Program</code>: with top-level statements add <code>public partial class Program { }</code> to the app (Program.cs basics: Day 12).</li>
<li><b>Replace the outside world:</b> override <code>ConfigureWebHost</code> and call <code>ConfigureTestServices</code>. It runs <b>after</b> the app registered its services, so your registration wins. Use <code>RemoveAll&lt;T&gt;()</code> then add your fake, to avoid ending up with two registrations.</li>
<li><b>Authentication:</b> do not generate real JWTs in every test. Register a small <b>test authentication handler</b> that creates a <code>ClaimsPrincipal</code> from a header, then test both the 401 (no user) and the 200/201 (user present) paths. Test the real token validation once, separately.</li>
<li><b>What to assert:</b> status codes, response body, headers (<code>Location</code>), validation errors as ProblemDetails (Day 13), and effects in the fake or database. This catches wiring bugs unit tests cannot: a missing <code>[Authorize]</code>, a wrong route, a JSON naming mismatch.</li>
<li><b>Isolation:</b> a class fixture shares one factory for the class, which is fast. Then each test must use its own data or reset the state, otherwise tests start to depend on each other.</li>
</ul>
<p><b>When to use / when not:</b> use factory tests for endpoints, auth rules and the request pipeline. Do not use them for pure business rules (a plain unit test is faster), and do not replace so much that you test only your fakes: keep routing, filters, serialisation and DI real.</p>`,
        hi: `<p><b>Analogy:</b> driving test असली car पर असली road layout पर होता है, पर examiner busy traffic की जगह शांत test track रख देता है। <code>WebApplicationFactory</code> तुम्हारी <b>असली app</b> चलाता है (routing, middleware, model binding, serialisation) और तुम सिर्फ़ बाहरी parts बदलते हो।</p>
<ul>
<li><b>कैसे काम करता है:</b> <code>WebApplicationFactory&lt;Program&gt;</code> (package <code>Microsoft.AspNetCore.Mvc.Testing</code>) तुम्हारी app को in-process test server के साथ memory में बनाता है; <code>CreateClient()</code> एक <code>HttpClient</code> देता है जो असली port खोले बिना उससे बात करता है। Test project को <code>Program</code> का access चाहिए: top-level statements के साथ app में <code>public partial class Program { }</code> जोड़ो (Program.cs की basics: Day 12)।</li>
<li><b>बाहरी दुनिया बदलो:</b> <code>ConfigureWebHost</code> override करो और <code>ConfigureTestServices</code> call करो। यह app के services register करने के <b>बाद</b> चलता है, इसलिए तुम्हारा registration जीतता है। पहले <code>RemoveAll&lt;T&gt;()</code> करो फिर अपना fake जोड़ो, ताकि दो registrations न बनें।</li>
<li><b>Authentication:</b> हर test में असली JWT मत बनाओ। छोटा <b>test authentication handler</b> register करो जो header से <code>ClaimsPrincipal</code> बनाए, फिर 401 (user नहीं) और 200/201 (user मौजूद) दोनों paths test करो। असली token validation एक बार, अलग से test करो।</li>
<li><b>क्या assert करें:</b> status codes, response body, headers (<code>Location</code>), ProblemDetails के रूप में validation errors (Day 13), और fake या database में effects। यह ऐसे wiring bugs पकड़ता है जो unit tests नहीं पकड़ सकते: छूटा हुआ <code>[Authorize]</code>, ग़लत route, JSON naming mismatch।</li>
<li><b>Isolation:</b> class fixture एक class के लिए एक factory share करता है, जो fast है। तब हर test को अपना data use करना होगा या state reset करनी होगी, वरना tests एक-दूसरे पर depend करने लगते हैं।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> endpoints, auth rules और request pipeline के लिए factory tests use करो। Pure business rules के लिए नहीं (plain unit test तेज़ है), और इतना कुछ replace मत करो कि तुम सिर्फ़ अपने fakes को test करो: routing, filters, serialisation और DI को real रखो।</p>`,
        hg: `<p><b>Analogy:</b> driving test asli car par asli road layout par hota hai, par examiner busy traffic ki jagah shaant test track rakh deta hai. <code>WebApplicationFactory</code> tumhari <b>asli app</b> chalata hai (routing, middleware, model binding, serialisation) aur tum sirf bahari parts badalte ho.</p>
<ul>
<li><b>Kaise kaam karta hai:</b> <code>WebApplicationFactory&lt;Program&gt;</code> (package <code>Microsoft.AspNetCore.Mvc.Testing</code>) tumhari app ko in-process test server ke saath memory mein banata hai; <code>CreateClient()</code> ek <code>HttpClient</code> deta hai jo asli port khole bina usse baat karta hai. Test project ko <code>Program</code> ka access chahiye: top-level statements ke saath app mein <code>public partial class Program { }</code> jodo (Program.cs ki basics: Day 12).</li>
<li><b>Bahari duniya badlo:</b> <code>ConfigureWebHost</code> override karo aur <code>ConfigureTestServices</code> call karo. Yeh app ke services register karne ke <b>baad</b> chalta hai, isliye tumhara registration jeetta hai. Pehle <code>RemoveAll&lt;T&gt;()</code> karo phir apna fake jodo, taaki do registrations na bane.</li>
<li><b>Authentication:</b> har test mein asli JWT mat banao. Chhota <b>test authentication handler</b> register karo jo header se <code>ClaimsPrincipal</code> banaye, phir 401 (user nahi) aur 200/201 (user maujood) dono paths test karo. Asli token validation ek baar, alag se test karo.</li>
<li><b>Kya assert karein:</b> status codes, response body, headers (<code>Location</code>), ProblemDetails ke roop mein validation errors (Day 13), aur fake ya database mein effects. Yeh aise wiring bugs pakadta hai jo unit tests nahi pakad sakte: chhoota hua <code>[Authorize]</code>, galat route, JSON naming mismatch.</li>
<li><b>Isolation:</b> class fixture ek class ke liye ek factory share karta hai, jo fast hai. Tab har test ko apna data use karna hoga ya state reset karni hogi, warna tests ek-doosre par depend karne lagte hain.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> endpoints, auth rules aur request pipeline ke liye factory tests use karo. Pure business rules ke liye nahi (plain unit test tez hai), aur itna kuch replace mat karo ki tum sirf apne fakes ko test karo: routing, filters, serialisation aur DI ko real rakho.</p>`
      },
      code: [
        {
          caption: {
            en: "WebApplicationFactory with a fake catalog and a test authentication handler. The app is inline here; in a real solution it lives in its own project.",
            hi: "Fake catalog और test authentication handler के साथ WebApplicationFactory। यहाँ app inline है; real solution में वह अपने project में होती है।",
            hg: "Fake catalog aur test authentication handler ke saath WebApplicationFactory. Yahan app inline hai; real solution mein woh apne project mein hoti hai."
          },
          check: "compile",
          packages: ["xunit@2.*", "Microsoft.AspNetCore.Mvc.Testing@9.*"],
          frameworks: ["aspnetcore"],
          src: `using System.Net;
using System.Net.Http.Json;
using System.Security.Claims;
using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Xunit;

// ---- the application under test (normally its own project) ----
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSingleton<IProductCatalog, SqlProductCatalog>();
builder.Services.AddAuthentication().AddCookie();
builder.Services.AddAuthorization();

var app = builder.Build();
app.MapGet("/products/{id:int}", (int id, IProductCatalog catalog) =>
    catalog.Find(id) is { } product ? Results.Ok(product) : Results.NotFound());
app.MapPost("/admin/products", (ProductDto dto) => Results.Created($"/products/{dto.Id}", dto))
   .RequireAuthorization();
app.Run();

public record ProductDto(int Id, string Name);
public interface IProductCatalog { ProductDto? Find(int id); }

public class SqlProductCatalog : IProductCatalog
{
    public ProductDto? Find(int id) => throw new NotImplementedException("real version talks to SQL Server");
}

public partial class Program { }   // lets the test project see Program

// ---- the test project ----
public class FakeProductCatalog : IProductCatalog
{
    public ProductDto? Find(int id) => id == 1 ? new ProductDto(1, "Tea") : null;
}

public class TestAuthHandler(
    IOptionsMonitor<AuthenticationSchemeOptions> options, ILoggerFactory logger, UrlEncoder encoder)
    : AuthenticationHandler<AuthenticationSchemeOptions>(options, logger, encoder)
{
    public const string SchemeName = "Test";

    protected override Task<AuthenticateResult> HandleAuthenticateAsync()
    {
        if (!Request.Headers.TryGetValue("X-Test-User", out var user))
            return Task.FromResult(AuthenticateResult.NoResult());      // anonymous

        var identity = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Name, user.ToString()) }, SchemeName);
        var ticket = new AuthenticationTicket(new ClaimsPrincipal(identity), SchemeName);
        return Task.FromResult(AuthenticateResult.Success(ticket));
    }
}

public class ApiFactory : WebApplicationFactory<Program>
{
    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.UseEnvironment("Testing");
        builder.ConfigureTestServices(services =>                      // runs after the app's own registrations
        {
            services.RemoveAll<IProductCatalog>();
            services.AddSingleton<IProductCatalog, FakeProductCatalog>();
            services.AddAuthentication(TestAuthHandler.SchemeName)
                    .AddScheme<AuthenticationSchemeOptions, TestAuthHandler>(TestAuthHandler.SchemeName, _ => { });
        });
    }
}

public class ProductApiTests(ApiFactory factory) : IClassFixture<ApiFactory>
{
    private readonly HttpClient _client = factory.CreateClient();

    [Fact]
    public async Task GetProduct_Existing_Returns200AndBody()
    {
        var response = await _client.GetAsync("/products/1");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        var product = await response.Content.ReadFromJsonAsync<ProductDto>();
        Assert.Equal("Tea", product!.Name);
    }

    [Fact]
    public async Task GetProduct_Unknown_Returns404()
    {
        var response = await _client.GetAsync("/products/99");

        Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);
    }

    [Fact]
    public async Task PostAdminProduct_Anonymous_Returns401()
    {
        var response = await _client.PostAsJsonAsync("/admin/products", new ProductDto(2, "Coffee"));

        Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
    }

    [Fact]
    public async Task PostAdminProduct_SignedInUser_Returns201()
    {
        using var request = new HttpRequestMessage(HttpMethod.Post, "/admin/products")
        {
            Content = JsonContent.Create(new ProductDto(2, "Coffee"))
        };
        request.Headers.Add("X-Test-User", "asha");

        var response = await _client.SendAsync(request);

        Assert.Equal(HttpStatusCode.Created, response.StatusCode);
    }
}
`
        }
      ]
    },
    {
      id: "data-and-quality-in-code",
      depth: "detailed",
      title: {
        en: "Real databases and test quality — Testcontainers, EF Core, flaky fixes, coverage, mutation",
        hi: "Real databases और test quality — Testcontainers, EF Core, flaky fixes, coverage, mutation",
        hg: "Real databases aur test quality — Testcontainers, EF Core, flaky fixes, coverage, mutation"
      },
      body: {
        en: `<p><b>Analogy:</b> you cannot judge a pressure cooker by testing a toy cooker. Testing EF Core against the real engine is like testing the real cooker with real steam, only in a safe kitchen (a container) that you can throw away after each run.</p>
<ul>
<li><b>Testcontainers for .NET:</b> starts a throw-away Docker container from test code (for example <code>Testcontainers.MsSql</code>), gives you a connection string and removes the container when the test run ends. Put it in an <code>IAsyncLifetime</code> fixture so one container serves the whole class or collection (Day 7).</li>
<li><b>EF Core testing choices:</b> the in-memory provider is not relational (no SQL, no constraints, different behaviour), so Microsoft advises against it; SQLite is a real but different engine; a real SQL Server or PostgreSQL in a container is closest to production. Mocking <code>DbSet</code> hides translation errors because LINQ runs in memory (Day 4).</li>
<li><b>Replace the DbContext in the factory:</b> remove the existing options registration and add your own with the container's connection string. In EF Core 9 and later also remove <code>IDbContextOptionsConfiguration&lt;T&gt;</code>, otherwise the original provider configuration can still be applied.</li>
<li><b>Keep tests independent:</b> create the schema once (<code>EnsureCreated</code> or migrations), then give each test unique data, or reset between tests (for example with a library like Respawn). Never rely on the order in which tests run.</li>
<li><b>Flaky tests:</b> the usual causes are the clock, shared state or order, real network, random data, <code>Thread.Sleep</code> / fixed delays and unawaited async work. Fix the cause: inject <code>TimeProvider</code>, give each test its own data, await the real signal instead of sleeping.</li>
<li><b>Coverage and mutation:</b> coverlet (<code>dotnet test --collect:"XPlat Code Coverage"</code>) tells you which lines ran. It does not tell you whether any assertion would notice a bug. <b>Stryker.NET</b> mutates your code (flips <code>&gt;=</code> to <code>&gt;</code>, removes a statement) and checks that some test fails; surviving mutants point at weak tests. It is slow, so run it on changed code or nightly.</li>
<li><b>Snapshot / approval tests</b> (for example the Verify library) compare a serialised result against an approved file. They suit large outputs such as JSON or generated documents; a reviewer must read every changed snapshot in the PR.</li>
</ul>
<p><b>When to use / when not:</b> use a container database for repository, query, migration and transaction behaviour. Do not start a new container per test (too slow); share one per run. Use coverage to find untested areas, not as a quality score; run mutation testing on critical business logic, not the whole solution.</p>`,
        hi: `<p><b>Analogy:</b> pressure cooker को खिलौने वाले cooker से test करके नहीं परख सकते। EF Core को real engine पर test करना real cooker को real steam के साथ test करने जैसा है, बस एक safe kitchen (container) में जिसे हर run के बाद फेंक सकते हो।</p>
<ul>
<li><b>Testcontainers for .NET:</b> test code से throw-away Docker container शुरू करता है (जैसे <code>Testcontainers.MsSql</code>), connection string देता है और test run ख़त्म होने पर container हटा देता है। इसे <code>IAsyncLifetime</code> fixture में रखो ताकि एक container पूरी class या collection को serve करे (Day 7)।</li>
<li><b>EF Core testing choices:</b> in-memory provider relational नहीं है (SQL नहीं, constraints नहीं, अलग behaviour), इसलिए Microsoft उसके against advise करता है; SQLite real पर अलग engine है; container में real SQL Server या PostgreSQL production के सबसे क़रीब है। <code>DbSet</code> को mock करने से translation errors छुप जाते हैं क्योंकि LINQ memory में चलता है (Day 4)।</li>
<li><b>Factory में DbContext replace करो:</b> मौजूदा options registration हटाओ और container की connection string के साथ अपना जोड़ो। EF Core 9 और उसके बाद <code>IDbContextOptionsConfiguration&lt;T&gt;</code> भी हटाओ, वरना original provider configuration अब भी apply हो सकती है।</li>
<li><b>Tests independent रखो:</b> schema एक बार बनाओ (<code>EnsureCreated</code> या migrations), फिर हर test को unique data दो, या tests के बीच reset करो (जैसे Respawn जैसी library से)। Tests किस order में चलते हैं उस पर कभी depend मत करो।</li>
<li><b>Flaky tests:</b> आम causes हैं clock, shared state या order, real network, random data, <code>Thread.Sleep</code> / fixed delays और बिना await किया async काम। Cause fix करो: <code>TimeProvider</code> inject करो, हर test को अपना data दो, sleep की जगह असली signal का await करो।</li>
<li><b>Coverage और mutation:</b> coverlet (<code>dotnet test --collect:"XPlat Code Coverage"</code>) बताता है कि कौन-सी lines चलीं। यह नहीं बताता कि कोई assertion bug को notice करेगा या नहीं। <b>Stryker.NET</b> तुम्हारे code को mutate करता है (<code>&gt;=</code> को <code>&gt;</code> कर देता है, statement हटा देता है) और check करता है कि कोई test fail होता है; बचे हुए mutants कमज़ोर tests की ओर इशारा करते हैं। यह slow है, इसलिए changed code पर या nightly चलाओ।</li>
<li><b>Snapshot / approval tests</b> (जैसे Verify library) serialised result को approved file से compare करते हैं। ये JSON या generated documents जैसे बड़े outputs के लिए ठीक हैं; reviewer को PR में हर बदली हुई snapshot पढ़नी पड़ती है।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> repository, query, migration और transaction behaviour के लिए container database use करो। हर test के लिए नया container मत चलाओ (बहुत slow); हर run के लिए एक share करो। Coverage को untested areas ढूँढने के लिए use करो, quality score की तरह नहीं; mutation testing critical business logic पर चलाओ, पूरे solution पर नहीं।</p>`,
        hg: `<p><b>Analogy:</b> pressure cooker ko khilone wale cooker se test karke nahi parakh sakte. EF Core ko real engine par test karna real cooker ko real steam ke saath test karne jaisa hai, bas ek safe kitchen (container) mein jise har run ke baad phenk sakte ho.</p>
<ul>
<li><b>Testcontainers for .NET:</b> test code se throw-away Docker container shuru karta hai (jaise <code>Testcontainers.MsSql</code>), connection string deta hai aur test run khatam hone par container hata deta hai. Ise <code>IAsyncLifetime</code> fixture mein rakho taaki ek container poori class ya collection ko serve kare (Day 7).</li>
<li><b>EF Core testing choices:</b> in-memory provider relational nahi hai (SQL nahi, constraints nahi, alag behaviour), isliye Microsoft uske against advise karta hai; SQLite real par alag engine hai; container mein real SQL Server ya PostgreSQL production ke sabse kareeb hai. <code>DbSet</code> ko mock karne se translation errors chhup jaate hain kyonki LINQ memory mein chalta hai (Day 4).</li>
<li><b>Factory mein DbContext replace karo:</b> maujooda options registration hatao aur container ki connection string ke saath apna jodo. EF Core 9 aur uske baad <code>IDbContextOptionsConfiguration&lt;T&gt;</code> bhi hatao, warna original provider configuration ab bhi apply ho sakti hai.</li>
<li><b>Tests independent rakho:</b> schema ek baar banao (<code>EnsureCreated</code> ya migrations), phir har test ko unique data do, ya tests ke beech reset karo (jaise Respawn jaisi library se). Tests kis order mein chalte hain us par kabhi depend mat karo.</li>
<li><b>Flaky tests:</b> aam causes hain clock, shared state ya order, real network, random data, <code>Thread.Sleep</code> / fixed delays aur bina await kiya async kaam. Cause fix karo: <code>TimeProvider</code> inject karo, har test ko apna data do, sleep ki jagah asli signal ka await karo.</li>
<li><b>Coverage aur mutation:</b> coverlet (<code>dotnet test --collect:"XPlat Code Coverage"</code>) batata hai ki kaun-si lines chali. Yeh nahi batata ki koi assertion bug ko notice karega ya nahi. <b>Stryker.NET</b> tumhare code ko mutate karta hai (<code>&gt;=</code> ko <code>&gt;</code> kar deta hai, statement hata deta hai) aur check karta hai ki koi test fail hota hai; bache hue mutants kamzor tests ki taraf ishaara karte hain. Yeh slow hai, isliye changed code par ya nightly chalao.</li>
<li><b>Snapshot / approval tests</b> (jaise Verify library) serialised result ko approved file se compare karte hain. Yeh JSON ya generated documents jaise bade outputs ke liye theek hain; reviewer ko PR mein har badli hui snapshot padhni padti hai.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> repository, query, migration aur transaction behaviour ke liye container database use karo. Har test ke liye naya container mat chalao (bahut slow); har run ke liye ek share karo. Coverage ko untested areas dhoondhne ke liye use karo, quality score ki tarah nahi; mutation testing critical business logic par chalao, poore solution par nahi.</p>`
      },
      code: [
        {
          caption: {
            en: "Testcontainers SQL Server shared by a fixture, with WebApplicationFactory pointed at it and an EF Core test against the real engine. Needs Docker to run; here it is compile-checked.",
            hi: "Fixture से share होने वाला Testcontainers SQL Server, जिस पर WebApplicationFactory point करती है, और real engine पर EF Core test। चलाने के लिए Docker चाहिए; यहाँ सिर्फ़ compile-checked है।",
            hg: "Fixture se share hone wala Testcontainers SQL Server, jis par WebApplicationFactory point karti hai, aur real engine par EF Core test. Chalane ke liye Docker chahiye; yahan sirf compile-checked hai."
          },
          check: "compile",
          packages: ["xunit@2.*", "Microsoft.AspNetCore.Mvc.Testing@9.*", "Microsoft.EntityFrameworkCore.SqlServer", "Testcontainers.MsSql@4.*"],
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Testcontainers.MsSql;
using Xunit;

// ---- the application under test (normally its own project) ----
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ShopDbContext>(o => o.UseSqlServer("Server=real-production-server;Database=Shop"));
var app = builder.Build();
app.MapGet("/orders/count", async (ShopDbContext db) => await db.Orders.CountAsync());
app.Run();

public class Order { public int Id { get; set; } public string Customer { get; set; } = ""; public decimal Total { get; set; } }

public class ShopDbContext(DbContextOptions<ShopDbContext> options) : DbContext(options)
{
    public DbSet<Order> Orders => Set<Order>();
}

public partial class Program { }

// ---- the test project ----
// One real SQL Server in Docker for the whole collection of tests; removed when the run ends.
public class SqlServerFixture : IAsyncLifetime
{
    private readonly MsSqlContainer _container = new MsSqlBuilder("mcr.microsoft.com/mssql/server:2022-latest").Build();

    public string ConnectionString => _container.GetConnectionString();

    public Task InitializeAsync() => _container.StartAsync();
    public Task DisposeAsync() => _container.DisposeAsync().AsTask();
}

[CollectionDefinition("sql")]
public class SqlCollection : ICollectionFixture<SqlServerFixture> { }

public class ShopApiFactory(string connectionString) : WebApplicationFactory<Program>
{
    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.ConfigureTestServices(services =>
        {
            services.RemoveAll<DbContextOptions<ShopDbContext>>();
            services.RemoveAll<IDbContextOptionsConfiguration<ShopDbContext>>();   // EF Core 9+: the old provider config lives here too
            services.AddDbContext<ShopDbContext>(o => o.UseSqlServer(connectionString));
        });
    }
}

[Collection("sql")]
public class OrderQueryTests(SqlServerFixture sql)
{
    [Fact]
    public async Task Orders_TotalFilter_RunsAsRealSql()
    {
        var options = new DbContextOptionsBuilder<ShopDbContext>().UseSqlServer(sql.ConnectionString).Options;
        await using var db = new ShopDbContext(options);
        await db.Database.EnsureCreatedAsync();
        var customer = "customer-" + Guid.NewGuid();             // own data: tests stay independent
        db.Orders.AddRange(new Order { Customer = customer, Total = 500 }, new Order { Customer = customer, Total = 50 });
        await db.SaveChangesAsync();

        var big = await db.Orders.Where(o => o.Customer == customer && o.Total > 100).ToListAsync();   // translated to SQL

        Assert.Single(big);
    }

    [Fact]
    public async Task Api_CountEndpoint_UsesTheContainerDatabase()
    {
        await using var factory = new ShopApiFactory(sql.ConnectionString);
        using var client = factory.CreateClient();

        var response = await client.GetAsync("/orders/count");

        Assert.True(response.IsSuccessStatusCode);
    }
}
`
        },
        {
          caption: {
            en: "Flaky by design — do not do this: reads the real clock and sleeps. It passes on a fast machine and fails near the boundary.",
            hi: "Design से ही flaky — ऐसा मत करो: real clock पढ़ता है और sleep करता है। Fast machine पर pass होता है और boundary के पास fail।",
            hg: "Design se hi flaky — aisa mat karo: real clock padhta hai aur sleep karta hai. Fast machine par pass hota hai aur boundary ke paas fail."
          },
          check: "compile",
          packages: ["xunit@2.*"],
          src: `using Xunit;

public class SessionStore
{
    private DateTime _createdAt;
    public void Start() => _createdAt = DateTime.UtcNow;                              // hidden dependency on the clock
    public bool IsExpired() => DateTime.UtcNow - _createdAt > TimeSpan.FromSeconds(1);
}

public class SessionStoreFlakyTests
{
    // FLAKY - do not copy: real clock, real sleep, slow, and the result depends on machine load
    [Fact]
    public void IsExpired_AfterSleeping_ReturnsTrue()
    {
        var store = new SessionStore();
        store.Start();
        Thread.Sleep(1100);
        Assert.True(store.IsExpired());
    }
}
`
        },
        {
          caption: {
            en: "The fix: inject TimeProvider and advance a FakeTimeProvider. Instant, exact at the boundary, no machine dependence.",
            hi: "Fix: TimeProvider inject करो और FakeTimeProvider को advance करो। Instant, boundary पर exact, machine पर depend नहीं।",
            hg: "Fix: TimeProvider inject karo aur FakeTimeProvider ko advance karo. Instant, boundary par exact, machine par depend nahi."
          },
          check: "compile",
          packages: ["xunit@2.*", "Microsoft.Extensions.TimeProvider.Testing@9.*"],
          src: `using Microsoft.Extensions.Time.Testing;
using Xunit;

public class SessionStore(TimeProvider clock)
{
    private DateTimeOffset _createdAt;
    public void Start() => _createdAt = clock.GetUtcNow();
    public bool IsExpired() => clock.GetUtcNow() - _createdAt > TimeSpan.FromSeconds(1);
}

public class SessionStoreTests
{
    private readonly FakeTimeProvider _clock = new(new DateTimeOffset(2026, 1, 1, 0, 0, 0, TimeSpan.Zero));

    [Fact]
    public void IsExpired_ExactlyAtLimit_ReturnsFalse()
    {
        var store = new SessionStore(_clock);
        store.Start();

        _clock.Advance(TimeSpan.FromSeconds(1));

        Assert.False(store.IsExpired());
    }

    [Fact]
    public void IsExpired_OneTickPastLimit_ReturnsTrue()
    {
        var store = new SessionStore(_clock);
        store.Start();

        _clock.Advance(TimeSpan.FromSeconds(1) + TimeSpan.FromTicks(1));

        Assert.True(store.IsExpired());
    }
}
`
        },
        {
          caption: {
            en: "Coverage and mutation from the command line (display only). Coverage finds untested code; Stryker checks whether tests would notice a bug.",
            hi: "Command line से coverage और mutation (सिर्फ़ दिखाने के लिए)। Coverage untested code ढूँढती है; Stryker check करता है कि tests bug को notice करेंगे या नहीं।",
            hg: "Command line se coverage aur mutation (sirf dikhane ke liye). Coverage untested code dhoondhti hai; Stryker check karta hai ki tests bug ko notice karenge ya nahi."
          },
          lang: "bash",
          check: "none",
          src: `# 1) run tests and collect coverage (the test project references the coverlet.collector package)
dotnet test --collect:"XPlat Code Coverage" --results-directory ./TestResults

# 2) optional: turn the cobertura XML into an HTML report
dotnet tool install --global dotnet-reportgenerator-globaltool
reportgenerator -reports:"TestResults/**/coverage.cobertura.xml" -targetdir:coverage-report

# 3) mutation testing (slow): run on a critical project, or only on code changed since main
dotnet tool install --global dotnet-stryker
cd tests/Orders.Tests
dotnet stryker --since:main
`
        }
      ]
    },
    {
      id: "review-checklist-in-practice",
      depth: "detailed",
      title: {
        en: "TL in practice — test review checklist, a smelly test vs a clean test, CI split",
        hi: "TL की practice में — test review checklist, smelly test vs clean test, CI split",
        hg: "TL in practice — test review checklist, smelly test vs clean test, CI split"
      },
      body: {
        en: `<p><b>Analogy:</b> a building inspector does not count bricks; he checks that the pillars would hold. In a test review you do not count tests or coverage; you check that each test would <b>fail for the right reason</b>.</p>
<ul>
<li><b>Review checklist for a test PR:</b> (1) does the name state behaviour and scenario? (2) would the test fail if the production code were wrong (is there a real assertion)? (3) one behaviour, clear AAA? (4) no sleeps, no real clock, no network, no shared state? (5) are doubles used only at boundaries, and do assertions check results rather than internals? (6) is the test independent and order-free? (7) for a bug fix: did the new test fail before the fix?</li>
<li><b>Team rules that scale:</b> tests run on every PR and a red build blocks the merge; test code gets the same review and naming standards as production code; categories (<code>[Trait("Category", "Integration")]</code>) let the pipeline run fast tests first (Day 21); a flaky test gets an owner and a ticket within a day, or is quarantined.</li>
<li><b>CI split:</b> on every PR run unit tests and the fast API integration tests; run the container-heavy or long suites in a separate job or nightly; run a few end-to-end checks against a deployed environment. Publish test results and coverage so trends are visible.</li>
<li><b>Coverage policy:</b> a floor on <i>changed</i> code (for example "new code needs tests") is more useful than a global number. Watch the trend, and read the uncovered lines of risky code instead of arguing about 80 versus 85 percent.</li>
<li><b>TDD in a team:</b> encourage test-first for rules, algorithms and bug fixes; do not mandate it for exploratory spikes, UI layout or thin glue code. What you can check in review is the outcome (a test exists and is meaningful), not the order in which it was written.</li>
</ul>
<p><b>When to use / when not:</b> use the checklist in code review and put it in the PR template. Do not turn it into a points system, and do not block a hotfix for missing perfect tests: agree a rule like "hotfix now, test within a day".</p>`,
        hi: `<p><b>Analogy:</b> building inspector ईंटें नहीं गिनता; वह check करता है कि pillars टिकेंगे या नहीं। Test review में तुम tests या coverage नहीं गिनते; तुम check करते हो कि हर test <b>सही कारण से fail</b> होगा।</p>
<ul>
<li><b>Test PR का review checklist:</b> (1) नाम behaviour और scenario बताता है? (2) production code ग़लत हो तो test fail होगा (क्या असली assertion है)? (3) एक behaviour, साफ़ AAA? (4) कोई sleep नहीं, real clock नहीं, network नहीं, shared state नहीं? (5) doubles सिर्फ़ boundaries पर हैं, और assertions internals की जगह results check करते हैं? (6) test independent और order-free है? (7) bug fix के लिए: नया test fix से पहले fail हुआ था?</li>
<li><b>Team rules जो scale होते हैं:</b> हर PR पर tests चलें और red build merge रोके; test code को production code जैसा review और naming standard मिले; categories (<code>[Trait("Category", "Integration")]</code>) से pipeline fast tests पहले चला सके (Day 21); flaky test को एक दिन में owner और ticket मिले, या quarantine हो।</li>
<li><b>CI split:</b> हर PR पर unit tests और fast API integration tests चलाओ; container-heavy या लंबी suites अलग job में या nightly चलाओ; कुछ end-to-end checks deployed environment पर चलाओ। Test results और coverage publish करो ताकि trends दिखें।</li>
<li><b>Coverage policy:</b> <i>changed</i> code पर floor (जैसे "नए code के tests चाहिए") global number से ज़्यादा काम का है। Trend देखो, और 80 बनाम 85 percent पर बहस करने की जगह risky code की uncovered lines पढ़ो।</li>
<li><b>Team में TDD:</b> rules, algorithms और bug fixes के लिए test-first को encourage करो; exploratory spikes, UI layout या पतले glue code के लिए mandate मत करो। Review में तुम outcome check कर सकते हो (test मौजूद है और meaningful है), यह नहीं कि किस order में लिखा गया।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> checklist को code review में use करो और PR template में रखो। इसे points system मत बनाओ, और hotfix को perfect tests की कमी पर मत रोको: "अभी hotfix, एक दिन में test" जैसा rule agree करो।</p>`,
        hg: `<p><b>Analogy:</b> building inspector eentein nahi ginta; woh check karta hai ki pillars tikenge ya nahi. Test review mein tum tests ya coverage nahi ginte; tum check karte ho ki har test <b>sahi kaaran se fail</b> hoga.</p>
<ul>
<li><b>Test PR ka review checklist:</b> (1) naam behaviour aur scenario batata hai? (2) production code galat ho to test fail hoga (kya asli assertion hai)? (3) ek behaviour, saaf AAA? (4) koi sleep nahi, real clock nahi, network nahi, shared state nahi? (5) doubles sirf boundaries par hain, aur assertions internals ki jagah results check karte hain? (6) test independent aur order-free hai? (7) bug fix ke liye: naya test fix se pehle fail hua tha?</li>
<li><b>Team rules jo scale hote hain:</b> har PR par tests chalein aur red build merge roke; test code ko production code jaisa review aur naming standard mile; categories (<code>[Trait("Category", "Integration")]</code>) se pipeline fast tests pehle chala sake (Day 21); flaky test ko ek din mein owner aur ticket mile, ya quarantine ho.</li>
<li><b>CI split:</b> har PR par unit tests aur fast API integration tests chalao; container-heavy ya lambi suites alag job mein ya nightly chalao; kuch end-to-end checks deployed environment par chalao. Test results aur coverage publish karo taaki trends dikhein.</li>
<li><b>Coverage policy:</b> <i>changed</i> code par floor (jaise "naye code ke tests chahiye") global number se zyaada kaam ka hai. Trend dekho, aur 80 banam 85 percent par bahas karne ki jagah risky code ki uncovered lines padho.</li>
<li><b>Team mein TDD:</b> rules, algorithms aur bug fixes ke liye test-first ko encourage karo; exploratory spikes, UI layout ya patle glue code ke liye mandate mat karo. Review mein tum outcome check kar sakte ho (test maujood hai aur meaningful hai), yeh nahi ki kis order mein likha gaya.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> checklist ko code review mein use karo aur PR template mein rakho. Ise points system mat banao, aur hotfix ko perfect tests ki kami par mat roko: "abhi hotfix, ek din mein test" jaisa rule agree karo.</p>`
      },
      code: [
        {
          caption: {
            en: "Review exercise: a smelly test (do not copy it) and the clean version that a TL would approve.",
            hi: "Review exercise: एक smelly test (copy मत करो) और clean version जिसे TL approve करेगा।",
            hg: "Review exercise: ek smelly test (copy mat karo) aur clean version jise TL approve karega."
          },
          check: "compile",
          packages: ["xunit@2.*", "Moq@4.20.72"],
          src: `using Moq;
using Xunit;

public interface IStock { int Available(string sku); void Reserve(string sku, int qty); }
public interface IAudit { void Log(string message); }

public class ReservationService(IStock stock, IAudit audit)
{
    public bool TryReserve(string sku, int qty)
    {
        if (stock.Available(sku) < qty) return false;
        stock.Reserve(sku, qty);
        audit.Log("reserved " + sku);
        return true;
    }
}

public class ReservationServiceSmellyTests
{
    // SMELLY - do not copy: vague name, two behaviours, a sleep that proves nothing,
    // a weak assertion, and verification of an internal detail (the audit log).
    [Fact]
    public void Test1()
    {
        var stock = new Mock<IStock>();
        stock.Setup(s => s.Available(It.IsAny<string>())).Returns(10);
        var audit = new Mock<IAudit>();
        var sut = new ReservationService(stock.Object, audit.Object);

        var ok = sut.TryReserve("tea", 3);
        Thread.Sleep(500);
        var notOk = sut.TryReserve("tea", 30);

        Assert.True(ok || notOk);
        audit.Verify(a => a.Log(It.IsAny<string>()), Times.AtLeastOnce);
    }
}

public class ReservationServiceTests
{
    private readonly Mock<IStock> _stock = new();
    private readonly Mock<IAudit> _audit = new();
    private readonly ReservationService _sut;

    public ReservationServiceTests() => _sut = new ReservationService(_stock.Object, _audit.Object);

    [Fact]
    public void TryReserve_EnoughStock_ReturnsTrueAndReservesQuantity()
    {
        _stock.Setup(s => s.Available("tea")).Returns(10);

        var result = _sut.TryReserve("tea", 3);

        Assert.True(result);
        _stock.Verify(s => s.Reserve("tea", 3), Times.Once);        // the real side effect
    }

    [Fact]
    public void TryReserve_NotEnoughStock_ReturnsFalseAndReservesNothing()
    {
        _stock.Setup(s => s.Available("tea")).Returns(2);

        var result = _sut.TryReserve("tea", 3);

        Assert.False(result);
        _stock.Verify(s => s.Reserve(It.IsAny<string>(), It.IsAny<int>()), Times.Never);
    }
}
`
        },
        {
          caption: {
            en: "CI split (display only, Azure Pipelines style, see Day 21): fast tests on every PR, container-heavy tests in a separate job.",
            hi: "CI split (सिर्फ़ दिखाने के लिए, Azure Pipelines style, Day 21 देखो): हर PR पर fast tests, container-heavy tests अलग job में।",
            hg: "CI split (sirf dikhane ke liye, Azure Pipelines style, Day 21 dekho): har PR par fast tests, container-heavy tests alag job mein."
          },
          lang: "yaml",
          check: "none",
          src: `jobs:
- job: FastTests                       # every PR: minutes, not tens of minutes
  steps:
  - script: dotnet test --configuration Release --filter "Category!=Integration" --collect:"XPlat Code Coverage" --logger trx
    displayName: Unit and in-memory API tests
  - task: PublishTestResults@2
    condition: succeededOrFailed()
    inputs: { testResultsFormat: VSTest, testResultsFiles: '**/*.trx' }

- job: IntegrationTests                # needs Docker on the agent (Testcontainers)
  steps:
  - script: dotnet test --configuration Release --filter "Category=Integration" --logger trx
    displayName: Container-backed database tests
  - task: PublishTestResults@2
    condition: succeededOrFailed()
    inputs: { testResultsFormat: VSTest, testResultsFiles: '**/*.trx' }
`
        }
      ]
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
        en: `<ul>
<li>Pyramid (Mike Cohn): speed and cost grow as you go up, so keep the top thin. It was a reaction to suites made only of slow UI tests.</li>
<li>Trophy (Kent C. Dodds) and the microservices honeycomb: most bugs are in the wiring between parts, and mocks hide wiring bugs, so integration tests give more confidence per test.</li>
<li>For an ASP.NET Core API on EF Core there is often little pure logic; endpoint tests with <code>WebApplicationFactory</code> and a real database may be the biggest group, and that is fine.</li>
<li>TL angle: ask "where did our last ten production bugs come from?" and shape the suite to catch those. Do not argue about shapes without that data.</li>
<li>Follow-up: "Isn't it anti-pattern to have an ice-cream cone (many UI tests, few unit tests)?" Yes, usually: slow, flaky and expensive to debug.</li>
</ul>`,
        hi: `<ul>
<li>Pyramid (Mike Cohn): ऊपर जाने पर speed और cost बढ़ती है, इसलिए top पतला रखो। यह सिर्फ़ slow UI tests वाली suites की reaction थी।</li>
<li>Trophy (Kent C. Dodds) और microservices honeycomb: ज़्यादातर bugs parts के बीच की wiring में होते हैं, और mocks wiring bugs छुपाते हैं, इसलिए integration tests हर test पर ज़्यादा confidence देते हैं।</li>
<li>EF Core पर ASP.NET Core API में अक्सर pure logic कम होती है; <code>WebApplicationFactory</code> और real database वाले endpoint tests सबसे बड़ा group हो सकते हैं, और वो ठीक है।</li>
<li>TL angle: पूछो "हमारे पिछले दस production bugs कहाँ से आए?" और suite की shape वैसी बनाओ जो उन्हें पकड़े। उस data के बिना shapes पर बहस मत करो।</li>
<li>Follow-up: "Ice-cream cone (बहुत UI tests, कम unit tests) anti-pattern है न?" हाँ, आमतौर पर: slow, flaky और debug करने में महँगा।</li>
</ul>`,
        hg: `<ul>
<li>Pyramid (Mike Cohn): upar jaane par speed aur cost badhti hai, isliye top patla rakho. Yeh sirf slow UI tests wali suites ki reaction thi.</li>
<li>Trophy (Kent C. Dodds) aur microservices honeycomb: zyaadatar bugs parts ke beech ki wiring mein hote hain, aur mocks wiring bugs chhupate hain, isliye integration tests har test par zyaada confidence dete hain.</li>
<li>EF Core par ASP.NET Core API mein aksar pure logic kam hoti hai; <code>WebApplicationFactory</code> aur real database wale endpoint tests sabse bada group ho sakte hain, aur woh theek hai.</li>
<li>TL angle: poochho "hamare pichhle das production bugs kahan se aaye?" aur suite ki shape waisi banao jo unhe pakde. Us data ke bina shapes par bahas mat karo.</li>
<li>Follow-up: "Ice-cream cone (bahut UI tests, kam unit tests) anti-pattern hai na?" Haan, aamtaur par: slow, flaky aur debug karne mein mehenga.</li>
</ul>`
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
        en: `<ul>
<li><b>Unit</b> tests cover rules and calculations; they run in milliseconds and need no Docker. <b>Integration</b> tests cover seams: HTTP pipeline, EF Core queries, serialisation, messaging.</li>
<li><b>End-to-end</b> tests (browser or a full deployed environment) prove a few critical journeys such as login and checkout. They are slow and flaky-prone, so keep them few.</li>
<li><b>Contract tests</b> matter when teams deploy independently (Day 16 microservices): the consumer states what it needs, the provider verifies it in its own pipeline (Pact is a common tool; OpenAPI diff checks are a lighter form).</li>
<li>Also name the extras if asked: smoke tests after deploy, performance tests, security tests. Not everything needs automation on every PR.</li>
<li>Follow-up: "Where do you put validation rules?" Unit tests for the rule itself, one integration test that the endpoint returns the right ProblemDetails (Day 13).</li>
</ul>`,
        hi: `<ul>
<li><b>Unit</b> tests rules और calculations cover करते हैं; milliseconds में चलते हैं और Docker नहीं चाहिए। <b>Integration</b> tests seams cover करते हैं: HTTP pipeline, EF Core queries, serialisation, messaging।</li>
<li><b>End-to-end</b> tests (browser या पूरा deployed environment) कुछ critical journeys prove करते हैं, जैसे login और checkout। ये slow और flaky होने की ओर रहते हैं, इसलिए कम रखो।</li>
<li><b>Contract tests</b> तब ज़रूरी हैं जब teams independently deploy करती हैं (Day 16 जैसे microservices): consumer बताता है उसे क्या चाहिए, provider अपनी pipeline में उसे verify करता है (Pact common tool है; OpenAPI diff checks हल्का रूप हैं)।</li>
<li>पूछा जाए तो extras भी बताओ: deploy के बाद smoke tests, performance tests, security tests। हर चीज़ हर PR पर automate नहीं करनी होती।</li>
<li>Follow-up: "Validation rules कहाँ रखते हो?" Rule के लिए unit tests, और एक integration test कि endpoint सही ProblemDetails return करता है (Day 13)।</li>
</ul>`,
        hg: `<ul>
<li><b>Unit</b> tests rules aur calculations cover karte hain; milliseconds mein chalte hain aur Docker nahi chahiye. <b>Integration</b> tests seams cover karte hain: HTTP pipeline, EF Core queries, serialisation, messaging.</li>
<li><b>End-to-end</b> tests (browser ya poora deployed environment) kuch critical journeys prove karte hain, jaise login aur checkout. Yeh slow aur flaky hone ki taraf rehte hain, isliye kam rakho.</li>
<li><b>Contract tests</b> tab zaroori hain jab teams independently deploy karti hain (Day 16 jaise microservices): consumer batata hai use kya chahiye, provider apni pipeline mein use verify karta hai (Pact common tool hai; OpenAPI diff checks halka roop hain).</li>
<li>Poocha jaye to extras bhi batao: deploy ke baad smoke tests, performance tests, security tests. Har cheez har PR par automate nahi karni hoti.</li>
<li>Follow-up: "Validation rules kahan rakhte ho?" Rule ke liye unit tests, aur ek integration test ki endpoint sahi ProblemDetails return karta hai (Day 13).</li>
</ul>`
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
        en: `<ul>
<li><b>FIRST:</b> Fast, Isolated, Repeatable, Self-validating, Timely. A test that needs the network, the clock or another test's leftovers breaks the rules.</li>
<li><b>One behaviour</b> does not mean one assert line: several asserts on one result object are fine. It means that one reason to fail per test.</li>
<li><b>Naming:</b> <code>Total_NoDiscount_MultipliesPriceByQuantity</code> or a sentence style; pick one convention for the team and write it down. Avoid <code>Test1</code> and <code>ShouldWork</code>.</li>
<li><b>Test through the public behaviour</b>, not private methods. Tests tied to internals break on every refactor and teach the team to hate tests.</li>
<li>TL angle: tests are documentation. A new joiner should understand the rule by reading the test names alone.</li>
</ul>`,
        hi: `<ul>
<li><b>FIRST:</b> Fast, Isolated, Repeatable, Self-validating, Timely। जो test network, clock या दूसरे test के बचे हुए data पर निर्भर करे, वो rules तोड़ता है।</li>
<li><b>एक behaviour</b> का मतलब एक assert line नहीं है: एक result object पर कई asserts ठीक हैं। मतलब यह कि हर test के fail होने की एक ही वजह हो।</li>
<li><b>Naming:</b> <code>Total_NoDiscount_MultipliesPriceByQuantity</code> या sentence style; team के लिए एक convention चुनो और लिख लो। <code>Test1</code> और <code>ShouldWork</code> से बचो।</li>
<li><b>Public behaviour के through test करो</b>, private methods नहीं। Internals से बंधे tests हर refactor पर टूटते हैं और team को tests से नफ़रत सिखा देते हैं।</li>
<li>TL angle: tests documentation हैं। नए joiner को सिर्फ़ test names पढ़कर rule समझ आना चाहिए।</li>
</ul>`,
        hg: `<ul>
<li><b>FIRST:</b> Fast, Isolated, Repeatable, Self-validating, Timely. Jo test network, clock ya doosre test ke bache hue data par nirbhar kare, woh rules todta hai.</li>
<li><b>Ek behaviour</b> ka matlab ek assert line nahi hai: ek result object par kai asserts theek hain. Matlab yeh ki har test ke fail hone ki ek hi wajah ho.</li>
<li><b>Naming:</b> <code>Total_NoDiscount_MultipliesPriceByQuantity</code> ya sentence style; team ke liye ek convention chuno aur likh lo. <code>Test1</code> aur <code>ShouldWork</code> se bacho.</li>
<li><b>Public behaviour ke through test karo</b>, private methods nahi. Internals se bandhe tests har refactor par tootte hain aur team ko tests se nafrat sikha dete hain.</li>
<li>TL angle: tests documentation hain. Naye joiner ko sirf test names padhkar rule samajh aana chahiye.</li>
</ul>`
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
        en: `<ul>
<li><code>[InlineData(1, 2, 3)]</code> takes compile-time constants; <code>[MemberData(nameof(Cases))]</code> points at a static property/method (objects, generated rows); <code>[ClassData(typeof(X))]</code> uses a class that yields rows.</li>
<li>Rows run independently: if row 3 fails, rows 1, 2, 4 still run and show as separate results (Puzzle 2 models this).</li>
<li>Use a Theory for the same behaviour with different inputs (boundaries, invalid values). If the expected behaviour differs per row, they should be separate Facts.</li>
<li>Gotcha: data must be serialisable for individual rows to show separately in some runners; otherwise the whole theory appears as one test.</li>
<li>Follow-up: "How do you test that something throws?" <code>Assert.Throws&lt;T&gt;</code> (exact type) or <code>Assert.ThrowsAny&lt;T&gt;</code> (derived types allowed), and use the async versions for async code.</li>
</ul>`,
        hi: `<ul>
<li><code>[InlineData(1, 2, 3)]</code> compile-time constants लेता है; <code>[MemberData(nameof(Cases))]</code> static property/method की ओर point करता है (objects, generated rows); <code>[ClassData(typeof(X))]</code> ऐसी class use करता है जो rows yield करे।</li>
<li>Rows independently चलती हैं: row 3 fail हो तो rows 1, 2, 4 फिर भी चलती हैं और अलग results दिखती हैं (Puzzle 2 यही model करता है)।</li>
<li>Same behaviour अलग inputs (boundaries, invalid values) के लिए Theory use करो। अगर हर row का expected behaviour अलग है तो वे अलग Facts होने चाहिए।</li>
<li>Gotcha: कुछ runners में rows अलग दिखने के लिए data serialisable होना चाहिए; वरना पूरी theory एक test की तरह दिखती है।</li>
<li>Follow-up: "Throw होने को कैसे test करते हो?" <code>Assert.Throws&lt;T&gt;</code> (exact type) या <code>Assert.ThrowsAny&lt;T&gt;</code> (derived types allowed), और async code के लिए async versions।</li>
</ul>`,
        hg: `<ul>
<li><code>[InlineData(1, 2, 3)]</code> compile-time constants leta hai; <code>[MemberData(nameof(Cases))]</code> static property/method ki taraf point karta hai (objects, generated rows); <code>[ClassData(typeof(X))]</code> aisi class use karta hai jo rows yield kare.</li>
<li>Rows independently chalti hain: row 3 fail ho to rows 1, 2, 4 phir bhi chalti hain aur alag results dikhti hain (Puzzle 2 yahi model karta hai).</li>
<li>Same behaviour alag inputs (boundaries, invalid values) ke liye Theory use karo. Agar har row ka expected behaviour alag hai to woh alag Facts hone chahiye.</li>
<li>Gotcha: kuch runners mein rows alag dikhne ke liye data serialisable hona chahiye; warna poori theory ek test ki tarah dikhti hai.</li>
<li>Follow-up: "Throw hone ko kaise test karte ho?" <code>Assert.Throws&lt;T&gt;</code> (exact type) ya <code>Assert.ThrowsAny&lt;T&gt;</code> (derived types allowed), aur async code ke liye async versions.</li>
</ul>`
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
        en: `<ul>
<li>Constructor = per-test setup; <code>IDisposable.Dispose</code> = per-test cleanup. NUnit differs: it uses one instance per fixture by default with <code>[SetUp]</code> methods, which makes shared fields easier to leak by mistake.</li>
<li><code>IClassFixture&lt;T&gt;</code>: xUnit creates <code>T</code> once, injects it into the constructor of every test in that class, and disposes it at the end. <code>ICollectionFixture&lt;T&gt;</code> does the same across all classes marked <code>[Collection("name")]</code>.</li>
<li>Rule: the shared fixture must not hold per-test state; each test brings its own data. Otherwise you re-create the order dependence that per-test instances were meant to remove.</li>
<li>Puzzle 1 models the lifecycle: three tests, three constructor runs, one fixture.</li>
<li>Follow-up: "Async setup?" Implement <code>IAsyncLifetime</code> (<code>Task</code> in v2, <code>ValueTask</code> in v3).</li>
</ul>`,
        hi: `<ul>
<li>Constructor = per-test setup; <code>IDisposable.Dispose</code> = per-test cleanup। NUnit अलग है: वह default में हर fixture के लिए एक instance और <code>[SetUp]</code> methods use करता है, जिससे shared fields ग़लती से leak होना आसान है।</li>
<li><code>IClassFixture&lt;T&gt;</code>: xUnit <code>T</code> एक बार बनाता है, उस class के हर test के constructor में inject करता है और आख़िर में dispose करता है। <code>ICollectionFixture&lt;T&gt;</code> वही काम <code>[Collection("name")]</code> वाली सभी classes के लिए करता है।</li>
<li>Rule: shared fixture में per-test state नहीं होनी चाहिए; हर test अपना data लाए। वरना तुम वही order dependence वापस बना लेते हो जिसे per-test instances हटाने के लिए थे।</li>
<li>Puzzle 1 lifecycle model करता है: तीन tests, तीन constructor runs, एक fixture।</li>
<li>Follow-up: "Async setup?" <code>IAsyncLifetime</code> implement करो (v2 में <code>Task</code>, v3 में <code>ValueTask</code>)।</li>
</ul>`,
        hg: `<ul>
<li>Constructor = per-test setup; <code>IDisposable.Dispose</code> = per-test cleanup. NUnit alag hai: woh default mein har fixture ke liye ek instance aur <code>[SetUp]</code> methods use karta hai, jisse shared fields galti se leak hona aasaan hai.</li>
<li><code>IClassFixture&lt;T&gt;</code>: xUnit <code>T</code> ek baar banata hai, us class ke har test ke constructor mein inject karta hai aur aakhir mein dispose karta hai. <code>ICollectionFixture&lt;T&gt;</code> wahi kaam <code>[Collection("name")]</code> wali sabhi classes ke liye karta hai.</li>
<li>Rule: shared fixture mein per-test state nahi honi chahiye; har test apna data laye. Warna tum wahi order dependence wapas bana lete ho jise per-test instances hatane ke liye the.</li>
<li>Puzzle 1 lifecycle model karta hai: teen tests, teen constructor runs, ek fixture.</li>
<li>Follow-up: "Async setup?" <code>IAsyncLifetime</code> implement karo (v2 mein <code>Task</code>, v3 mein <code>ValueTask</code>).</li>
</ul>`
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
        en: `<ul>
<li>Terms come from Gerard Meszaros (xUnit Test Patterns), popularised by Martin Fowler's "Mocks Aren't Stubs": dummy, stub, fake, spy, mock. In everyday speech people call them all "mocks"; in an interview, show you know the difference.</li>
<li><b>State-based</b> tests ask "what is the result or the stored state?" and survive refactoring. <b>Interaction-based</b> tests ask "which methods were called?" and break when you restructure code that still behaves the same.</li>
<li>Use a mock when the call <i>is</i> the observable outcome: an email sent, a message published, a payment charged exactly once.</li>
<li>Day 8 explains why you can fake things at all: depend on abstractions (DIP) at real boundaries.</li>
<li>Follow-up: "Your test needs 10 mock setups; what does it tell you?" The class under test likely does too much (SRP) or the design is too chatty with its collaborators.</li>
</ul>`,
        hi: `<ul>
<li>Terms Gerard Meszaros (xUnit Test Patterns) से आए हैं, Martin Fowler के "Mocks Aren't Stubs" से popular हुए: dummy, stub, fake, spy, mock। रोज़ की बोलचाल में लोग सबको "mocks" कह देते हैं; interview में दिखाओ कि तुम्हें फ़र्क़ पता है।</li>
<li><b>State-based</b> tests पूछते हैं "result या stored state क्या है?" और refactoring में टिकते हैं। <b>Interaction-based</b> tests पूछते हैं "कौन-से methods call हुए?" और उस code को restructure करने पर टूटते हैं जो वैसे ही behave करता है।</li>
<li>Mock तब use करो जब call ही observable outcome हो: email भेजा गया, message publish हुआ, payment ठीक एक बार charge हुआ।</li>
<li>Day 8 बताता है कि चीज़ें fake कैसे हो सकती हैं: real boundaries पर abstractions पर depend करो (DIP)।</li>
<li>Follow-up: "तुम्हारे test को 10 mock setups चाहिए; यह क्या बताता है?" Class शायद बहुत कुछ करती है (SRP) या design अपने collaborators से बहुत chatty है।</li>
</ul>`,
        hg: `<ul>
<li>Terms Gerard Meszaros (xUnit Test Patterns) se aaye hain, Martin Fowler ke "Mocks Aren't Stubs" se popular hue: dummy, stub, fake, spy, mock. Roz ki bolchal mein log sabko "mocks" keh dete hain; interview mein dikhao ki tumhe farq pata hai.</li>
<li><b>State-based</b> tests poochte hain "result ya stored state kya hai?" aur refactoring mein tikte hain. <b>Interaction-based</b> tests poochte hain "kaun-se methods call hue?" aur us code ko restructure karne par tootte hain jo waise hi behave karta hai.</li>
<li>Mock tab use karo jab call hi observable outcome ho: email bheja gaya, message publish hua, payment theek ek baar charge hua.</li>
<li>Day 8 batata hai ki cheezein fake kaise ho sakti hain: real boundaries par abstractions par depend karo (DIP).</li>
<li>Follow-up: "Tumhare test ko 10 mock setups chahiye; yeh kya batata hai?" Class shaayad bahut kuch karti hai (SRP) ya design apne collaborators se bahut chatty hai.</li>
</ul>`
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
        en: `<ul>
<li>The factory builds your real <code>Program</code> pipeline: routing, middleware, model binding, filters, DI (Day 12, Day 13) with an in-memory test server, so tests run fast and need no port.</li>
<li>Make <code>Program</code> visible with <code>public partial class Program { }</code> when using top-level statements.</li>
<li>Override in <code>ConfigureTestServices</code> (runs after the app's registrations). Typical overrides: payment client to a fake, <code>TimeProvider</code> to a <code>FakeTimeProvider</code>, DbContext to a container database, authentication to a test handler.</li>
<li>Assert on status codes, bodies, headers and persisted effects. This catches missing <code>[Authorize]</code>, wrong routes and serialisation mismatches.</li>
<li>Follow-up: "How do you handle authentication?" A test auth handler that builds the principal from a header; test real JWT validation once separately.</li>
</ul>`,
        hi: `<ul>
<li>Factory तुम्हारी real <code>Program</code> pipeline बनाता है: routing, middleware, model binding, filters, DI (Day 12, Day 13), in-memory test server के साथ, इसलिए tests fast चलते हैं और port नहीं चाहिए।</li>
<li>Top-level statements के साथ <code>public partial class Program { }</code> से <code>Program</code> को visible करो।</li>
<li><code>ConfigureTestServices</code> में override करो (app की registrations के बाद चलता है)। Typical overrides: payment client को fake, <code>TimeProvider</code> को <code>FakeTimeProvider</code>, DbContext को container database, authentication को test handler।</li>
<li>Status codes, bodies, headers और persisted effects पर assert करो। यह छूटा <code>[Authorize]</code>, ग़लत routes और serialisation mismatch पकड़ता है।</li>
<li>Follow-up: "Authentication कैसे handle करते हो?" Test auth handler जो header से principal बनाए; real JWT validation एक बार अलग से test करो।</li>
</ul>`,
        hg: `<ul>
<li>Factory tumhari real <code>Program</code> pipeline banata hai: routing, middleware, model binding, filters, DI (Day 12, Day 13), in-memory test server ke saath, isliye tests fast chalte hain aur port nahi chahiye.</li>
<li>Top-level statements ke saath <code>public partial class Program { }</code> se <code>Program</code> ko visible karo.</li>
<li><code>ConfigureTestServices</code> mein override karo (app ki registrations ke baad chalta hai). Typical overrides: payment client ko fake, <code>TimeProvider</code> ko <code>FakeTimeProvider</code>, DbContext ko container database, authentication ko test handler.</li>
<li>Status codes, bodies, headers aur persisted effects par assert karo. Yeh chhoota <code>[Authorize]</code>, galat routes aur serialisation mismatch pakadta hai.</li>
<li>Follow-up: "Authentication kaise handle karte ho?" Test auth handler jo header se principal banaye; real JWT validation ek baar alag se test karo.</li>
</ul>`
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
        en: `<ul>
<li>A test with no assertion still executes lines, so it adds coverage and proves nothing (Puzzle 7: 100% line coverage and a bug that no test notices).</li>
<li>Coverage also ignores missing tests for behaviour that is not in the code at all (a missing validation) and says nothing about integration between parts.</li>
<li>Once coverage becomes a target, people write assertion-free tests to hit it (Goodhart's law). Prefer "new and changed code is tested" plus reading uncovered lines of risky code.</li>
<li>Better signals: mutation score (Stryker.NET, Puzzle 6), bugs that escaped, how often tests fail for the right reason, and review of assertions.</li>
<li>Tooling: <code>coverlet.collector</code> with <code>dotnet test --collect:"XPlat Code Coverage"</code>, then a report tool; line vs branch coverage — branch coverage is stricter.</li>
</ul>`,
        hi: `<ul>
<li>बिना assertion का test भी lines execute करता है, इसलिए coverage बढ़ाता है और कुछ prove नहीं करता (Puzzle 7: 100% line coverage और ऐसा bug जिसे कोई test notice नहीं करता)।</li>
<li>Coverage उस behaviour के missing tests को भी ignore करती है जो code में है ही नहीं (missing validation), और parts के बीच integration के बारे में कुछ नहीं बताती।</li>
<li>Coverage target बन जाए तो लोग उसे hit करने के लिए assertion-free tests लिखते हैं (Goodhart's law)। "नया और बदला हुआ code tested है" को prefer करो, और risky code की uncovered lines पढ़ो।</li>
<li>बेहतर signals: mutation score (Stryker.NET, Puzzle 6), बचकर निकले bugs, tests कितनी बार सही कारण से fail होते हैं, और assertions का review।</li>
<li>Tooling: <code>coverlet.collector</code> के साथ <code>dotnet test --collect:"XPlat Code Coverage"</code>, फिर report tool; line vs branch coverage — branch coverage ज़्यादा strict है।</li>
</ul>`,
        hg: `<ul>
<li>Bina assertion ka test bhi lines execute karta hai, isliye coverage badhata hai aur kuch prove nahi karta (Puzzle 7: 100% line coverage aur aisa bug jise koi test notice nahi karta).</li>
<li>Coverage us behaviour ke missing tests ko bhi ignore karti hai jo code mein hai hi nahi (missing validation), aur parts ke beech integration ke baare mein kuch nahi batati.</li>
<li>Coverage target ban jaye to log use hit karne ke liye assertion-free tests likhte hain (Goodhart's law). "Naya aur badla hua code tested hai" ko prefer karo, aur risky code ki uncovered lines padho.</li>
<li>Behtar signals: mutation score (Stryker.NET, Puzzle 6), bachkar nikle bugs, tests kitni baar sahi kaaran se fail hote hain, aur assertions ka review.</li>
<li>Tooling: <code>coverlet.collector</code> ke saath <code>dotnet test --collect:"XPlat Code Coverage"</code>, phir report tool; line vs branch coverage — branch coverage zyaada strict hai.</li>
</ul>`
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
        en: `<ul>
<li><b>Syntax:</b> Moq: <code>mock.Setup(x =&gt; x.Get(1)).Returns(2)</code>, <code>mock.Object</code>, <code>Verify</code>. NSubstitute: <code>sub.Get(1).Returns(2)</code>, the substitute <i>is</i> the object, <code>Received</code>. Both: interfaces and virtual members only, no static or sealed.</li>
<li><b>Behavioural details to know:</b> in Moq the latest matching setup wins (Puzzle 3); NSubstitute <code>Returns(a, b, c)</code> plays a sequence then repeats the last (Puzzle 4), and unconfigured members return defaults (empty string for string).</li>
<li><b>SponsorLink, factually (Aug 2023):</b> Moq 4.20.0 included a closed-source, obfuscated build analyzer; developers reported that it read the local git email, hashed it and checked it against a sponsorship service, with no way to opt out (the maintainer said the email itself is never sent). Many objected (privacy, corporate security rules). The maintainer defended it as a way to fund open source. Version 4.20.2 removed it. Sources: the Moq GitHub issue and the 4.20.2 release notes.</li>
<li><b>TL lesson:</b> pin and review versions of test dependencies, use dependency scanning, and know your licences. Test packages run on every developer machine and build agent. Do not tell the learner that a library is "bad"; say what happened and how you protect the team.</li>
<li>Follow-up: "Would you migrate away from Moq?" Cost versus risk: Moq 4.20.2 removed SponsorLink; teams moved for various reasons, and migrating a large suite is real work. Decide on policy and cost, not on the news cycle.</li>
</ul>`,
        hi: `<ul>
<li><b>Syntax:</b> Moq: <code>mock.Setup(x =&gt; x.Get(1)).Returns(2)</code>, <code>mock.Object</code>, <code>Verify</code>। NSubstitute: <code>sub.Get(1).Returns(2)</code>, substitute ख़ुद object <i>है</i>, <code>Received</code>। दोनों: सिर्फ़ interfaces और virtual members, static या sealed नहीं।</li>
<li><b>Behavioural details:</b> Moq में सबसे latest matching setup जीतता है (Puzzle 3); NSubstitute <code>Returns(a, b, c)</code> sequence चलाता है फिर आख़िरी दोहराता है (Puzzle 4), और unconfigured members defaults देते हैं (string के लिए empty string)।</li>
<li><b>SponsorLink, factually (Aug 2023):</b> Moq 4.20.0 में closed-source, obfuscated build analyzer था; developers ने report किया कि वो local git email पढ़ता, hash करता और sponsorship service से check करता था, opt-out का रास्ता नहीं था (maintainer ने कहा कि email ख़ुद कभी भेजा नहीं जाता)। कई लोगों ने objection किया (privacy, corporate security rules)। Maintainer ने इसे open source को fund करने का तरीक़ा बताकर defend किया। Version 4.20.2 ने इसे हटा दिया। Sources: Moq का GitHub issue और 4.20.2 release notes।</li>
<li><b>TL lesson:</b> test dependencies के versions pin और review करो, dependency scanning use करो, और licences जानो। Test packages हर developer machine और build agent पर चलते हैं। Library को "बुरी" मत कहो; बताओ क्या हुआ और तुम team को कैसे protect करते हो।</li>
<li>Follow-up: "क्या Moq से migrate करोगे?" Cost बनाम risk: Moq 4.20.2 ने SponsorLink हटा दिया; teams अलग-अलग कारणों से move हुईं, और बड़ी suite migrate करना असली काम है। Policy और cost पर decide करो, news cycle पर नहीं।</li>
</ul>`,
        hg: `<ul>
<li><b>Syntax:</b> Moq: <code>mock.Setup(x =&gt; x.Get(1)).Returns(2)</code>, <code>mock.Object</code>, <code>Verify</code>. NSubstitute: <code>sub.Get(1).Returns(2)</code>, substitute khud object <i>hai</i>, <code>Received</code>. Dono: sirf interfaces aur virtual members, static ya sealed nahi.</li>
<li><b>Behavioural details:</b> Moq mein sabse latest matching setup jeetta hai (Puzzle 3); NSubstitute <code>Returns(a, b, c)</code> sequence chalata hai phir aakhri dohrata hai (Puzzle 4), aur unconfigured members defaults dete hain (string ke liye empty string).</li>
<li><b>SponsorLink, factually (Aug 2023):</b> Moq 4.20.0 mein closed-source, obfuscated build analyzer tha; developers ne report kiya ki woh local git email padhta, hash karta aur sponsorship service se check karta tha, opt-out ka raasta nahi tha (maintainer ne kaha ki email khud kabhi bheja nahi jaata). Kai logon ne objection kiya (privacy, corporate security rules). Maintainer ne ise open source ko fund karne ka tareeka bataakar defend kiya. Version 4.20.2 ne ise hata diya. Sources: Moq ka GitHub issue aur 4.20.2 release notes.</li>
<li><b>TL lesson:</b> test dependencies ke versions pin aur review karo, dependency scanning use karo, aur licences jaano. Test packages har developer machine aur build agent par chalte hain. Library ko "buri" mat kaho; batao kya hua aur tum team ko kaise protect karte ho.</li>
<li>Follow-up: "Kya Moq se migrate karoge?" Cost banam risk: Moq 4.20.2 ne SponsorLink hata diya; teams alag-alag kaaranon se move hui, aur badi suite migrate karna asli kaam hai. Policy aur cost par decide karo, news cycle par nahi.</li>
</ul>`
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
        en: `<ul>
<li><b>Facts (check the official site before you decide):</b> FluentAssertions version 8 and above are free for open-source and non-commercial use; commercial use needs a paid licence sold through Xceed, with whom the library's creators have a partnership. Version 7 stays under Apache 2.0 and continues to get fixes.</li>
<li><b>Alternatives:</b> <b>Shouldly</b> (<code>result.ShouldBe(5)</code>), <b>AwesomeAssertions</b> (a community fork of FluentAssertions under Apache 2.0, with almost the same API), or the framework's own <code>Assert</code> (xUnit, NUnit). Assertion libraries are cheap to swap compared with mocking frameworks, but a large suite still needs a search-and-replace plan.</li>
<li><b>TL decision frame:</b> (1) ask legal/procurement whether your usage counts as commercial; (2) check the exact version in every project, because an automatic upgrade from 7 to 8 would change the licence; (3) choose pin, pay or migrate and record it as a short ADR.</li>
<li>The built-in assertions are enough for most tests; a fluent library mainly improves failure messages and collection/object comparison.</li>
<li>Do not quote prices or claim the licence is "evil"; state what changed and the options.</li>
</ul>`,
        hi: `<ul>
<li><b>Facts (decide करने से पहले official site check करो):</b> FluentAssertions version 8 और ऊपर open-source और non-commercial use के लिए free हैं; commercial use के लिए Xceed के ज़रिए paid licence चाहिए, जिनके साथ library के creators की partnership है। Version 7 Apache 2.0 में रहता है और fixes मिलते रहते हैं।</li>
<li><b>Alternatives:</b> <b>Shouldly</b> (<code>result.ShouldBe(5)</code>), <b>AwesomeAssertions</b> (FluentAssertions का community fork, Apache 2.0 में, लगभग same API), या framework का अपना <code>Assert</code> (xUnit, NUnit)। Assertion libraries को mocking frameworks के मुक़ाबले बदलना सस्ता है, पर बड़ी suite के लिए भी search-and-replace plan चाहिए।</li>
<li><b>TL decision frame:</b> (1) legal/procurement से पूछो कि तुम्हारा use commercial गिना जाएगा या नहीं; (2) हर project में exact version check करो, क्योंकि 7 से 8 का automatic upgrade licence बदल देगा; (3) pin, pay या migrate चुनो और छोटे ADR में record करो।</li>
<li>ज़्यादातर tests के लिए built-in assertions काफ़ी हैं; fluent library मुख्य रूप से failure messages और collection/object comparison बेहतर करती है।</li>
<li>Prices मत बताओ और licence को "evil" मत कहो; बताओ क्या बदला और options क्या हैं।</li>
</ul>`,
        hg: `<ul>
<li><b>Facts (decide karne se pehle official site check karo):</b> FluentAssertions version 8 aur upar open-source aur non-commercial use ke liye free hain; commercial use ke liye Xceed ke zariye paid licence chahiye, jinke saath library ke creators ki partnership hai. Version 7 Apache 2.0 mein rehta hai aur fixes milte rehte hain.</li>
<li><b>Alternatives:</b> <b>Shouldly</b> (<code>result.ShouldBe(5)</code>), <b>AwesomeAssertions</b> (FluentAssertions ka community fork, Apache 2.0 mein, lagbhag same API), ya framework ka apna <code>Assert</code> (xUnit, NUnit). Assertion libraries ko mocking frameworks ke muqable badalna sasta hai, par badi suite ke liye bhi search-and-replace plan chahiye.</li>
<li><b>TL decision frame:</b> (1) legal/procurement se poochho ki tumhara use commercial ginaa jayega ya nahi; (2) har project mein exact version check karo, kyonki 7 se 8 ka automatic upgrade licence badal dega; (3) pin, pay ya migrate chuno aur chhote ADR mein record karo.</li>
<li>Zyaadatar tests ke liye built-in assertions kaafi hain; fluent library mukhya roop se failure messages aur collection/object comparison behtar karti hai.</li>
<li>Prices mat batao aur licence ko "evil" mat kaho; batao kya badla aur options kya hain.</li>
</ul>`
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
        en: `<ul>
<li><b>What is new (xunit.net docs):</b> package ids are <code>xunit.v3</code> (plus <code>xunit.v3.core</code>, <code>xunit.v3.assert</code>, the console runner); test projects run as separate executables; <code>TestContext.Current</code> gives a cancellation token, diagnostic messages and attachments; assembly-wide fixtures exist; parallelism algorithm is configurable; some features need .NET 8+ (for example generic <code>[Collection&lt;T&gt;]</code>).</li>
<li><b>Status:</b> v3 is released and stable on NuGet, shown as 3.x and 4.x versions at the time of writing; v2 (<code>xunit</code> 2.9.x) is still widely used. Check xunit.net and NuGet for the current version before you write a migration plan.</li>
<li><b>Migration risk:</b> check <code>IAsyncLifetime</code> signatures (<code>ValueTask</code>), namespace moves (for example <code>ITestOutputHelper</code>), third-party extensions that target v2 (some packages have separate v3 versions), and your CI and IDE test adapters.</li>
<li>TL angle: no big-bang migration; start with a new test project, or migrate one project per sprint. The test names and AAA structure do not change, so it is mostly mechanical.</li>
<li>Honest answer in an interview: "I know v3 exists and what changed; for a stable v2 suite I would migrate when a feature or support policy justifies it."</li>
</ul>`,
        hi: `<ul>
<li><b>क्या नया है (xunit.net docs):</b> package ids <code>xunit.v3</code> हैं (साथ में <code>xunit.v3.core</code>, <code>xunit.v3.assert</code>, console runner); test projects अलग executables की तरह चलते हैं; <code>TestContext.Current</code> cancellation token, diagnostic messages और attachments देता है; assembly-wide fixtures हैं; parallelism algorithm configurable है; कुछ features को .NET 8+ चाहिए (जैसे generic <code>[Collection&lt;T&gt;]</code>)।</li>
<li><b>Status:</b> v3 released और NuGet पर stable है, लिखते समय 3.x और 4.x versions दिखते हैं; v2 (<code>xunit</code> 2.9.x) अब भी widely use होता है। Migration plan लिखने से पहले xunit.net और NuGet पर current version check करो।</li>
<li><b>Migration risk:</b> <code>IAsyncLifetime</code> signatures (<code>ValueTask</code>), namespace moves (जैसे <code>ITestOutputHelper</code>), v2 को target करने वाले third-party extensions (कुछ packages के अलग v3 versions हैं), और तुम्हारे CI और IDE test adapters check करो।</li>
<li>TL angle: big-bang migration नहीं; नए test project से शुरू करो, या हर sprint में एक project migrate करो। Test names और AAA structure नहीं बदलते, इसलिए ज़्यादातर काम mechanical है।</li>
<li>Interview में honest answer: "मुझे पता है v3 क्या है और क्या बदला; stable v2 suite को मैं तब migrate करूँगा जब कोई feature या support policy justify करे।"</li>
</ul>`,
        hg: `<ul>
<li><b>Kya naya hai (xunit.net docs):</b> package ids <code>xunit.v3</code> hain (saath mein <code>xunit.v3.core</code>, <code>xunit.v3.assert</code>, console runner); test projects alag executables ki tarah chalte hain; <code>TestContext.Current</code> cancellation token, diagnostic messages aur attachments deta hai; assembly-wide fixtures hain; parallelism algorithm configurable hai; kuch features ko .NET 8+ chahiye (jaise generic <code>[Collection&lt;T&gt;]</code>).</li>
<li><b>Status:</b> v3 released aur NuGet par stable hai, likhte samay 3.x aur 4.x versions dikhte hain; v2 (<code>xunit</code> 2.9.x) ab bhi widely use hota hai. Migration plan likhne se pehle xunit.net aur NuGet par current version check karo.</li>
<li><b>Migration risk:</b> <code>IAsyncLifetime</code> signatures (<code>ValueTask</code>), namespace moves (jaise <code>ITestOutputHelper</code>), v2 ko target karne wale third-party extensions (kuch packages ke alag v3 versions hain), aur tumhare CI aur IDE test adapters check karo.</li>
<li>TL angle: big-bang migration nahi; naye test project se shuru karo, ya har sprint mein ek project migrate karo. Test names aur AAA structure nahi badalte, isliye zyaadatar kaam mechanical hai.</li>
<li>Interview mein honest answer: "Mujhe pata hai v3 kya hai aur kya badla; stable v2 suite ko main tab migrate karunga jab koi feature ya support policy justify kare."</li>
</ul>`
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
        en: `<ul>
<li><b>xUnit:</b> <code>[Fact]</code>/<code>[Theory]</code>, constructor and <code>IDisposable</code> instead of setup attributes, new instance per test, no <code>[ExpectedException]</code>. Used by the .NET runtime and ASP.NET Core repositories themselves, and most templates and samples.</li>
<li><b>NUnit:</b> <code>[Test]</code>/<code>[TestCase]</code>, <code>[SetUp]</code>/<code>[TearDown]</code>, rich constraint model <code>Assert.That(x, Is.EqualTo(3))</code>, one instance per fixture by default.</li>
<li><b>MSTest:</b> <code>[TestClass]</code>/<code>[TestMethod]</code>/<code>[DataRow]</code>. Microsoft's docs describe MSTest as fully supported and open source, with v3 a rewrite and v4 the current major version at the time of writing; it supports only the latest release, and recommends MSTest.Sdk with Microsoft.Testing.Platform for new projects.</li>
<li>All run with <code>dotnet test</code> and on Azure Pipelines / GitHub Actions. Differences are mostly attributes, lifecycle style and extensibility.</li>
<li>TL answer: "The framework is rarely the bottleneck. I standardise one per solution, add shared test helpers and an analyzer set, and spend the effort on the strategy."</li>
</ul>`,
        hi: `<ul>
<li><b>xUnit:</b> <code>[Fact]</code>/<code>[Theory]</code>, setup attributes की जगह constructor और <code>IDisposable</code>, हर test के लिए नया instance, <code>[ExpectedException]</code> नहीं। .NET runtime और ASP.NET Core repositories ख़ुद इसे use करते हैं, और ज़्यादातर templates और samples भी।</li>
<li><b>NUnit:</b> <code>[Test]</code>/<code>[TestCase]</code>, <code>[SetUp]</code>/<code>[TearDown]</code>, rich constraint model <code>Assert.That(x, Is.EqualTo(3))</code>, default में हर fixture के लिए एक instance।</li>
<li><b>MSTest:</b> <code>[TestClass]</code>/<code>[TestMethod]</code>/<code>[DataRow]</code>। Microsoft की docs MSTest को fully supported और open source बताती हैं, v3 एक rewrite और v4 लिखते समय current major version; यह सिर्फ़ latest release support करता है, और नए projects के लिए Microsoft.Testing.Platform के साथ MSTest.Sdk recommend करता है।</li>
<li>तीनों <code>dotnet test</code> से और Azure Pipelines / GitHub Actions पर चलते हैं। फ़र्क़ ज़्यादातर attributes, lifecycle style और extensibility का है।</li>
<li>TL answer: "Framework शायद ही bottleneck होता है। मैं हर solution में एक standardise करता हूँ, shared test helpers और analyzer set जोड़ता हूँ, और मेहनत strategy पर लगाता हूँ।"</li>
</ul>`,
        hg: `<ul>
<li><b>xUnit:</b> <code>[Fact]</code>/<code>[Theory]</code>, setup attributes ki jagah constructor aur <code>IDisposable</code>, har test ke liye naya instance, <code>[ExpectedException]</code> nahi. .NET runtime aur ASP.NET Core repositories khud ise use karti hain, aur zyaadatar templates aur samples bhi.</li>
<li><b>NUnit:</b> <code>[Test]</code>/<code>[TestCase]</code>, <code>[SetUp]</code>/<code>[TearDown]</code>, rich constraint model <code>Assert.That(x, Is.EqualTo(3))</code>, default mein har fixture ke liye ek instance.</li>
<li><b>MSTest:</b> <code>[TestClass]</code>/<code>[TestMethod]</code>/<code>[DataRow]</code>. Microsoft ki docs MSTest ko fully supported aur open source batati hain, v3 ek rewrite aur v4 likhte samay current major version; yeh sirf latest release support karta hai, aur naye projects ke liye Microsoft.Testing.Platform ke saath MSTest.Sdk recommend karta hai.</li>
<li>Teeno <code>dotnet test</code> se aur Azure Pipelines / GitHub Actions par chalte hain. Farq zyaadatar attributes, lifecycle style aur extensibility ka hai.</li>
<li>TL answer: "Framework shaayad hi bottleneck hota hai. Main har solution mein ek standardise karta hoon, shared test helpers aur analyzer set jodta hoon, aur mehnat strategy par lagata hoon."</li>
</ul>`
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
        en: `<ul>
<li>Default: classes in different collections run at the same time; so two classes that both write to the same table can interfere. Symptom: tests pass alone, fail together.</li>
<li>Options: (1) put the classes in one <code>[Collection]</code> so they run sequentially (simple, slower); (2) make data independent (unique keys per test, separate schemas or databases); (3) disable parallelism for the assembly as a last resort (<code>[assembly: CollectionBehavior(DisableTestParallelization = true)]</code>).</li>
<li>Tests inside one class never run in parallel with each other, but their order is not something to rely on.</li>
<li>In v3 the parallelism algorithm and limits are configurable; check the current docs.</li>
<li>Follow-up: "How do you find an order dependency?" Run the suite in a different order or with parallelism toggled; xUnit can randomise order in newer versions.</li>
</ul>`,
        hi: `<ul>
<li>Default: अलग collections की classes एक ही समय पर चलती हैं; इसलिए एक ही table में लिखने वाली दो classes आपस में टकरा सकती हैं। Symptom: tests अकेले pass, साथ में fail।</li>
<li>Options: (1) classes को एक <code>[Collection]</code> में डालो ताकि वे sequentially चलें (simple, slower); (2) data independent बनाओ (हर test के unique keys, अलग schemas या databases); (3) आख़िरी उपाय के तौर पर assembly के लिए parallelism बंद करो (<code>[assembly: CollectionBehavior(DisableTestParallelization = true)]</code>)।</li>
<li>एक class के अंदर tests आपस में parallel कभी नहीं चलते, पर उनके order पर depend नहीं करना चाहिए।</li>
<li>v3 में parallelism algorithm और limits configurable हैं; current docs check करो।</li>
<li>Follow-up: "Order dependency कैसे ढूँढते हो?" Suite को अलग order में या parallelism toggle करके चलाओ; नए versions में xUnit order randomise कर सकता है।</li>
</ul>`,
        hg: `<ul>
<li>Default: alag collections ki classes ek hi samay par chalti hain; isliye ek hi table mein likhne wali do classes aapas mein takra sakti hain. Symptom: tests akele pass, saath mein fail.</li>
<li>Options: (1) classes ko ek <code>[Collection]</code> mein daalo taaki woh sequentially chalein (simple, slower); (2) data independent banao (har test ke unique keys, alag schemas ya databases); (3) aakhri upaay ke taur par assembly ke liye parallelism band karo (<code>[assembly: CollectionBehavior(DisableTestParallelization = true)]</code>).</li>
<li>Ek class ke andar tests aapas mein parallel kabhi nahi chalte, par unke order par depend nahi karna chahiye.</li>
<li>v3 mein parallelism algorithm aur limits configurable hain; current docs check karo.</li>
<li>Follow-up: "Order dependency kaise dhoondhte ho?" Suite ko alag order mein ya parallelism toggle karke chalao; naye versions mein xUnit order randomise kar sakta hai.</li>
</ul>`
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
        en: `<ul>
<li>This repeats the Day 7 answer with the full picture: <b>mocking DbSet</b> runs LINQ in memory, so untranslatable queries pass (Day 4); <b>in-memory provider</b> has no SQL, no constraints, no real transactions, and Microsoft advises against it for testing.</li>
<li><b>SQLite</b> is fast and relational but a different dialect: types, collations, locking, <code>DateTimeOffset</code> and provider-specific SQL behave differently from SQL Server.</li>
<li><b>Real engine in a container (Testcontainers)</b> is closest to production: test migrations, unique indexes, concurrency tokens, raw SQL. Cost: Docker on dev machines and agents, and seconds of start-up (share one container).</li>
<li>A sensible split: unit tests with fakes for domain logic (no EF at all); a modest number of integration tests for repositories, queries and migrations on a real engine; WebApplicationFactory tests for the endpoints.</li>
<li>Follow-up: "How do you keep database tests independent?" Unique data per test or reset between tests (for example Respawn); never rely on rows left by another test.</li>
</ul>`,
        hi: `<ul>
<li>यह Day 7 के answer का पूरा picture है: <b>DbSet mock</b> करने से LINQ memory में चलता है, इसलिए untranslatable queries pass हो जाती हैं (Day 4); <b>in-memory provider</b> में SQL नहीं, constraints नहीं, real transactions नहीं, और Microsoft testing के लिए उसके against advise करता है।</li>
<li><b>SQLite</b> fast और relational है पर अलग dialect: types, collations, locking, <code>DateTimeOffset</code> और provider-specific SQL SQL Server से अलग behave करते हैं।</li>
<li><b>Container में real engine (Testcontainers)</b> production के सबसे क़रीब है: migrations, unique indexes, concurrency tokens, raw SQL test करो। Cost: dev machines और agents पर Docker, और start-up के कुछ seconds (एक container share करो)।</li>
<li>समझदार split: domain logic के लिए fakes वाले unit tests (EF बिल्कुल नहीं); repositories, queries और migrations के लिए real engine पर सीमित integration tests; endpoints के लिए WebApplicationFactory tests।</li>
<li>Follow-up: "Database tests independent कैसे रखते हो?" हर test का unique data या tests के बीच reset (जैसे Respawn); किसी दूसरे test की छोड़ी rows पर कभी depend मत करो।</li>
</ul>`,
        hg: `<ul>
<li>Yeh Day 7 ke answer ka poora picture hai: <b>DbSet mock</b> karne se LINQ memory mein chalta hai, isliye untranslatable queries pass ho jaati hain (Day 4); <b>in-memory provider</b> mein SQL nahi, constraints nahi, real transactions nahi, aur Microsoft testing ke liye uske against advise karta hai.</li>
<li><b>SQLite</b> fast aur relational hai par alag dialect: types, collations, locking, <code>DateTimeOffset</code> aur provider-specific SQL SQL Server se alag behave karte hain.</li>
<li><b>Container mein real engine (Testcontainers)</b> production ke sabse kareeb hai: migrations, unique indexes, concurrency tokens, raw SQL test karo. Cost: dev machines aur agents par Docker, aur start-up ke kuch seconds (ek container share karo).</li>
<li>Samajhdaar split: domain logic ke liye fakes wale unit tests (EF bilkul nahi); repositories, queries aur migrations ke liye real engine par seemit integration tests; endpoints ke liye WebApplicationFactory tests.</li>
<li>Follow-up: "Database tests independent kaise rakhte ho?" Har test ka unique data ya tests ke beech reset (jaise Respawn); kisi doosre test ki chhodi rows par kabhi depend mat karo.</li>
</ul>`
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
        en: `<ul>
<li><b>Benefits:</b> the same engine as production, a fresh instance per run, no shared test server that people corrupt, and the setup is code in the repo (Day 7, Day 21).</li>
<li><b>Costs:</b> Docker (or a compatible runtime) on every developer machine and build agent, image download time, a few seconds to start SQL Server, licence terms of the images used, and memory use on laptops.</li>
<li><b>Mitigations:</b> one container per fixture or collection (not per test); pin the image tag; cache images on agents; tag the tests with a trait so unit tests stay fast and you can run containers in their own job (see the CI split in this day).</li>
<li><b>Alternatives:</b> a shared dev database (slow, flaky, shared state), SQLite (different engine), or cloud-provisioned test databases per PR for larger teams.</li>
<li>Follow-up: "A developer has no Docker allowed on the laptop?" Offer a remote dev environment or let those tests run in CI only, and keep unit tests runnable locally.</li>
</ul>`,
        hi: `<ul>
<li><b>Benefits:</b> production वाला ही engine, हर run में fresh instance, कोई shared test server नहीं जिसे लोग बिगाड़ दें, और setup repo में code है (Day 7, Day 21)।</li>
<li><b>Costs:</b> हर developer machine और build agent पर Docker (या compatible runtime), image download time, SQL Server शुरू होने में कुछ seconds, इस्तेमाल हुई images के licence terms, और laptops पर memory use।</li>
<li><b>Mitigations:</b> हर fixture या collection के लिए एक container (हर test के लिए नहीं); image tag pin करो; agents पर images cache करो; tests को trait से tag करो ताकि unit tests fast रहें और containers अपने job में चल सकें (इस day का CI split देखो)।</li>
<li><b>Alternatives:</b> shared dev database (slow, flaky, shared state), SQLite (अलग engine), या बड़ी teams के लिए हर PR पर cloud-provisioned test databases।</li>
<li>Follow-up: "किसी developer के laptop पर Docker allowed नहीं है?" Remote dev environment दो या वे tests सिर्फ़ CI में चलने दो, और unit tests locally चलने लायक रखो।</li>
</ul>`,
        hg: `<ul>
<li><b>Benefits:</b> production wala hi engine, har run mein fresh instance, koi shared test server nahi jise log bigaad dein, aur setup repo mein code hai (Day 7, Day 21).</li>
<li><b>Costs:</b> har developer machine aur build agent par Docker (ya compatible runtime), image download time, SQL Server shuru hone mein kuch seconds, istemaal hui images ke licence terms, aur laptops par memory use.</li>
<li><b>Mitigations:</b> har fixture ya collection ke liye ek container (har test ke liye nahi); image tag pin karo; agents par images cache karo; tests ko trait se tag karo taaki unit tests fast rahein aur containers apne job mein chal sakein (is day ka CI split dekho).</li>
<li><b>Alternatives:</b> shared dev database (slow, flaky, shared state), SQLite (alag engine), ya badi teams ke liye har PR par cloud-provisioned test databases.</li>
<li>Follow-up: "Kisi developer ke laptop par Docker allowed nahi hai?" Remote dev environment do ya woh tests sirf CI mein chalne do, aur unit tests locally chalne layak rakho.</li>
</ul>`
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
        en: `<ul>
<li><code>TimeProvider</code> is built into .NET 8+ (<code>TimeProvider.System</code> in production); <code>FakeTimeProvider</code> comes from <code>Microsoft.Extensions.TimeProvider.Testing</code>. Register <code>TimeProvider.System</code> in DI (Day 1, Day 8).</li>
<li>It also covers timers and delays: <code>CreateTimer</code> and <code>Task.Delay(..., timeProvider)</code> follow the fake clock, so <code>Advance(...)</code> fires them deterministically (Puzzle 5). Day 16 uses it to test a circuit breaker.</li>
<li>Test the boundary precisely: one tick before expiry and at expiry. A real <code>Thread.Sleep</code> test can only guess.</li>
<li>For code you cannot change, wrap the static call behind a small interface you own; <code>TimeProvider</code> is now the standard abstraction, so do not invent <code>IClock</code>.</li>
<li>Time zones: store and compare in UTC (<code>DateTimeOffset</code>); fake the local time zone through <code>TimeProvider.LocalTimeZone</code> only if the logic really needs it.</li>
</ul>`,
        hi: `<ul>
<li><code>TimeProvider</code> .NET 8+ में built-in है (production में <code>TimeProvider.System</code>); <code>FakeTimeProvider</code> <code>Microsoft.Extensions.TimeProvider.Testing</code> से आता है। DI में <code>TimeProvider.System</code> register करो (Day 1, Day 8)।</li>
<li>यह timers और delays भी cover करता है: <code>CreateTimer</code> और <code>Task.Delay(..., timeProvider)</code> fake clock को follow करते हैं, इसलिए <code>Advance(...)</code> उन्हें deterministic तरीक़े से fire करता है (Puzzle 5)। Day 16 इसे circuit breaker test करने के लिए use करता है।</li>
<li>Boundary precisely test करो: expiry से एक tick पहले और expiry पर। असली <code>Thread.Sleep</code> test सिर्फ़ अंदाज़ा लगा सकता है।</li>
<li>जिस code को बदल नहीं सकते, उसकी static call को अपने छोटे interface के पीछे wrap करो; <code>TimeProvider</code> अब standard abstraction है, इसलिए <code>IClock</code> मत गढ़ो।</li>
<li>Time zones: UTC में store और compare करो (<code>DateTimeOffset</code>); local time zone को <code>TimeProvider.LocalTimeZone</code> से सिर्फ़ तब fake करो जब logic को सच में चाहिए।</li>
</ul>`,
        hg: `<ul>
<li><code>TimeProvider</code> .NET 8+ mein built-in hai (production mein <code>TimeProvider.System</code>); <code>FakeTimeProvider</code> <code>Microsoft.Extensions.TimeProvider.Testing</code> se aata hai. DI mein <code>TimeProvider.System</code> register karo (Day 1, Day 8).</li>
<li>Yeh timers aur delays bhi cover karta hai: <code>CreateTimer</code> aur <code>Task.Delay(..., timeProvider)</code> fake clock ko follow karte hain, isliye <code>Advance(...)</code> unhe deterministic tareeke se fire karta hai (Puzzle 5). Day 16 ise circuit breaker test karne ke liye use karta hai.</li>
<li>Boundary precisely test karo: expiry se ek tick pehle aur expiry par. Asli <code>Thread.Sleep</code> test sirf andaaza laga sakta hai.</li>
<li>Jis code ko badal nahi sakte, uski static call ko apne chhote interface ke peeche wrap karo; <code>TimeProvider</code> ab standard abstraction hai, isliye <code>IClock</code> mat gadho.</li>
<li>Time zones: UTC mein store aur compare karo (<code>DateTimeOffset</code>); local time zone ko <code>TimeProvider.LocalTimeZone</code> se sirf tab fake karo jab logic ko sach mein chahiye.</li>
</ul>`
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
        en: `<ul>
<li><b>DbContext:</b> <code>RemoveAll&lt;DbContextOptions&lt;T&gt;&gt;()</code>, in EF Core 9 and later also <code>RemoveAll&lt;IDbContextOptionsConfiguration&lt;T&gt;&gt;()</code>, then <code>AddDbContext&lt;T&gt;(o =&gt; o.UseSqlServer(testConnectionString))</code>. If you only add a second registration, the original provider setup can still be applied. Use the same pattern when the test database is SQLite.</li>
<li><b>Seed data</b> after the host starts (create a scope, get the context, <code>EnsureCreated</code> or migrate) or in the fixture, and give each test its own keys.</li>
<li><b>Auth:</b> a test handler registered with <code>AddScheme</code> makes <code>[Authorize]</code> work without real tokens. Let tests choose the user and roles through headers, and test <b>both</b> the 401 and 403 paths and the allowed path.</li>
<li>Keep one separate test that goes through the real JWT bearer validation (with a locally signed token), so the real configuration is also exercised (Day 13).</li>
<li>Pitfall: replacing too much. If you swap routing, filters and serialisation as well, you are testing a different app.</li>
</ul>`,
        hi: `<ul>
<li><b>DbContext:</b> <code>RemoveAll&lt;DbContextOptions&lt;T&gt;&gt;()</code>, EF Core 9 और उसके बाद <code>RemoveAll&lt;IDbContextOptionsConfiguration&lt;T&gt;&gt;()</code> भी, फिर <code>AddDbContext&lt;T&gt;(o =&gt; o.UseSqlServer(testConnectionString))</code>। सिर्फ़ दूसरा registration जोड़ोगे तो original provider setup अब भी apply हो सकता है। Test database SQLite हो तब भी यही pattern।</li>
<li><b>Seed data</b> host शुरू होने के बाद करो (scope बनाओ, context लो, <code>EnsureCreated</code> या migrate) या fixture में, और हर test को अपने keys दो।</li>
<li><b>Auth:</b> <code>AddScheme</code> से register किया test handler असली tokens के बिना <code>[Authorize]</code> चला देता है। Tests को headers से user और roles चुनने दो, और 401, 403 और allowed path <b>तीनों</b> test करो।</li>
<li>एक अलग test रखो जो real JWT bearer validation से गुज़रे (locally signed token के साथ), ताकि real configuration भी exercise हो (Day 13)।</li>
<li>Pitfall: बहुत ज़्यादा replace करना। Routing, filters और serialisation भी बदल दोगे तो तुम दूसरी app test कर रहे हो।</li>
</ul>`,
        hg: `<ul>
<li><b>DbContext:</b> <code>RemoveAll&lt;DbContextOptions&lt;T&gt;&gt;()</code>, EF Core 9 aur uske baad <code>RemoveAll&lt;IDbContextOptionsConfiguration&lt;T&gt;&gt;()</code> bhi, phir <code>AddDbContext&lt;T&gt;(o =&gt; o.UseSqlServer(testConnectionString))</code>. Sirf doosra registration jodoge to original provider setup ab bhi apply ho sakta hai. Test database SQLite ho tab bhi yahi pattern.</li>
<li><b>Seed data</b> host shuru hone ke baad karo (scope banao, context lo, <code>EnsureCreated</code> ya migrate) ya fixture mein, aur har test ko apne keys do.</li>
<li><b>Auth:</b> <code>AddScheme</code> se register kiya test handler asli tokens ke bina <code>[Authorize]</code> chala deta hai. Tests ko headers se user aur roles chunne do, aur 401, 403 aur allowed path <b>teeno</b> test karo.</li>
<li>Ek alag test rakho jo real JWT bearer validation se guzre (locally signed token ke saath), taaki real configuration bhi exercise ho (Day 13).</li>
<li>Pitfall: bahut zyaada replace karna. Routing, filters aur serialisation bhi badal doge to tum doosri app test kar rahe ho.</li>
</ul>`
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
        en: `<ul>
<li><b>Find it:</b> run the test 50 times in a loop; run the suite in a different order or with parallelism on and off; compare CI and local (CPU speed, time zone, culture, file paths, Docker).</li>
<li><b>Causes and fixes:</b> clock → <code>FakeTimeProvider</code>; shared static or database state → per-test data and no statics; real network or external API → fake handler or container; random/GUID data → seeded or fixed values; <code>Thread.Sleep</code>/<code>Task.Delay</code> waiting for something → await the real signal or a <code>TaskCompletionSource</code>; unawaited async work → await it; port clashes → let the test server pick.</li>
<li><b>Policy:</b> a flaky test is a bug with an owner. Do not use blind automatic retries as the fix (they hide real races); a retry may be acceptable as a temporary, visible stopgap while the cause is fixed. Quarantine means it is excluded from the blocking build, still runs and reports, and has a ticket with a date.</li>
<li><b>Why TLs care:</b> once the team learns to say "just re-run it", real failures get ignored too. Track the flaky rate as a team health metric.</li>
<li>Puzzle 8-style bugs (order dependence) are the classic case; Puzzle 5 shows a deterministic alternative to sleeping.</li>
</ul>`,
        hi: `<ul>
<li><b>ढूँढो:</b> test को loop में 50 बार चलाओ; suite को अलग order में या parallelism on और off के साथ चलाओ; CI और local की तुलना करो (CPU speed, time zone, culture, file paths, Docker)।</li>
<li><b>Causes और fixes:</b> clock → <code>FakeTimeProvider</code>; shared static या database state → per-test data और statics नहीं; real network या external API → fake handler या container; random/GUID data → seeded या fixed values; किसी चीज़ का इंतज़ार करता <code>Thread.Sleep</code>/<code>Task.Delay</code> → असली signal या <code>TaskCompletionSource</code> का await; बिना await का async काम → await करो; port clashes → test server को port चुनने दो।</li>
<li><b>Policy:</b> flaky test एक bug है जिसका owner है। Blind automatic retries को fix मत बनाओ (वे real races छुपाते हैं); retry cause fix होने तक temporary, visible stopgap के रूप में ठीक हो सकता है। Quarantine का मतलब: blocking build से बाहर, फिर भी चलता और report होता है, और तारीख़ वाला ticket है।</li>
<li><b>TLs को क्यों फ़िक्र:</b> एक बार team "बस re-run कर दो" कहना सीख ले तो real failures भी ignore होने लगती हैं। Flaky rate को team health metric की तरह track करो।</li>
<li>Puzzle 8-style bugs (order dependence) classic case हैं; Puzzle 5 sleep का deterministic विकल्प दिखाता है।</li>
</ul>`,
        hg: `<ul>
<li><b>Dhoondho:</b> test ko loop mein 50 baar chalao; suite ko alag order mein ya parallelism on aur off ke saath chalao; CI aur local ki tulna karo (CPU speed, time zone, culture, file paths, Docker).</li>
<li><b>Causes aur fixes:</b> clock → <code>FakeTimeProvider</code>; shared static ya database state → per-test data aur statics nahi; real network ya external API → fake handler ya container; random/GUID data → seeded ya fixed values; kisi cheez ka intezaar karta <code>Thread.Sleep</code>/<code>Task.Delay</code> → asli signal ya <code>TaskCompletionSource</code> ka await; bina await ka async kaam → await karo; port clashes → test server ko port chunne do.</li>
<li><b>Policy:</b> flaky test ek bug hai jiska owner hai. Blind automatic retries ko fix mat banao (woh real races chhupate hain); retry cause fix hone tak temporary, visible stopgap ke roop mein theek ho sakta hai. Quarantine ka matlab: blocking build se bahar, phir bhi chalta aur report hota hai, aur taareekh wala ticket hai.</li>
<li><b>TLs ko kyon fikar:</b> ek baar team "bas re-run kar do" kehna seekh le to real failures bhi ignore hone lagti hain. Flaky rate ko team health metric ki tarah track karo.</li>
<li>Puzzle 8-style bugs (order dependence) classic case hain; Puzzle 5 sleep ka deterministic vikalp dikhata hai.</li>
</ul>`
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
        en: `<ul>
<li><b>The loop:</b> red (write a small failing test), green (simplest code that passes), refactor (clean up with the tests as a safety net). Short cycles, minutes each.</li>
<li><b>Where it shines:</b> clear business rules, algorithms, parsers, bug fixes (the failing test is the reproduction), APIs where the design is unclear and you want to feel the caller's side first.</li>
<li><b>Where it is weak:</b> exploratory spikes, UI layout, glue code, and when requirements are changing hourly. Writing the test after a spike is fine.</li>
<li><b>TL stance:</b> be honest that research on TDD benefits is mixed; the lasting value is testable design and fast feedback. Mandating a process is hard to verify and creates resentment; mandating <i>outcomes</i> (tests with every change, failing test first for bugs) can be checked in the PR.</li>
<li>Follow-up: "What is the difference between TDD and BDD?" BDD focuses on describing behaviour in business language (Given-When-Then, tools like Reqnroll/SpecFlow); you can do TDD without BDD tooling.</li>
</ul>`,
        hi: `<ul>
<li><b>Loop:</b> red (छोटा failing test लिखो), green (pass कराने वाला सबसे simple code), refactor (tests को safety net बनाकर clean up)। छोटे cycles, हर एक मिनटों का।</li>
<li><b>कहाँ चमकता है:</b> साफ़ business rules, algorithms, parsers, bug fixes (failing test ही reproduction है), ऐसे APIs जहाँ design साफ़ नहीं और पहले caller की तरफ़ से महसूस करना है।</li>
<li><b>कहाँ कमज़ोर:</b> exploratory spikes, UI layout, glue code, और जब requirements हर घंटे बदल रही हों। Spike के बाद test लिखना ठीक है।</li>
<li><b>TL stance:</b> honest रहो कि TDD के फ़ायदों पर research mixed है; टिकने वाली value testable design और fast feedback है। Process mandate करना verify करना मुश्किल है और नाराज़गी पैदा करता है; <i>outcomes</i> mandate करना (हर change के साथ tests, bugs के लिए पहले failing test) PR में check हो सकता है।</li>
<li>Follow-up: "TDD और BDD में क्या फ़र्क़ है?" BDD behaviour को business language में describe करने पर focus करता है (Given-When-Then, Reqnroll/SpecFlow जैसे tools); BDD tooling के बिना भी TDD हो सकता है।</li>
</ul>`,
        hg: `<ul>
<li><b>Loop:</b> red (chhota failing test likho), green (pass karane wala sabse simple code), refactor (tests ko safety net banakar clean up). Chhote cycles, har ek minuton ka.</li>
<li><b>Kahan chamakta hai:</b> saaf business rules, algorithms, parsers, bug fixes (failing test hi reproduction hai), aise APIs jahan design saaf nahi aur pehle caller ki taraf se mehsoos karna hai.</li>
<li><b>Kahan kamzor:</b> exploratory spikes, UI layout, glue code, aur jab requirements har ghante badal rahi hon. Spike ke baad test likhna theek hai.</li>
<li><b>TL stance:</b> honest raho ki TDD ke faaydon par research mixed hai; tikne wali value testable design aur fast feedback hai. Process mandate karna verify karna mushkil hai aur naaraazgi paida karta hai; <i>outcomes</i> mandate karna (har change ke saath tests, bugs ke liye pehle failing test) PR mein check ho sakta hai.</li>
<li>Follow-up: "TDD aur BDD mein kya farq hai?" BDD behaviour ko business language mein describe karne par focus karta hai (Given-When-Then, Reqnroll/SpecFlow jaise tools); BDD tooling ke bina bhi TDD ho sakta hai.</li>
</ul>`
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
        en: `<ul>
<li><b>Mutation testing:</b> the tool makes many small changes (mutants): <code>&gt;=</code> to <code>&gt;</code>, <code>+</code> to <code>-</code>, remove a statement. If tests still pass, the mutant <b>survived</b> and points at a missing test or assertion (Puzzle 6: the boundary mutant survives until you test age 18). The mutation score is killed / total.</li>
<li>It is slow (the suite runs once per mutant, optimised by tools). Run it on critical logic, in changed files (<code>--since</code>) or nightly; do not put it on every PR of a big solution.</li>
<li><b>Snapshot / approval tests:</b> serialise a result (JSON, HTML, a generated PDF text) and compare with a committed <code>.verified</code> file; a difference fails the test and shows a diff you accept or reject. Verify is a popular .NET library for this.</li>
<li>Use snapshots for big outputs where hand-written asserts would be long. Risks: people approve diffs without reading them, and snapshots with random data or timestamps are flaky unless scrubbed.</li>
<li>TL angle: reviewers must read changed snapshot files in the PR just like code.</li>
</ul>`,
        hi: `<ul>
<li><b>Mutation testing:</b> tool बहुत छोटे बदलाव करता है (mutants): <code>&gt;=</code> को <code>&gt;</code>, <code>+</code> को <code>-</code>, statement हटाना। Tests फिर भी pass हों तो mutant <b>survive</b> कर गया और missing test या assertion की ओर इशारा करता है (Puzzle 6: boundary mutant तब तक बचता है जब तक age 18 test न करो)। Mutation score = killed / total।</li>
<li>यह slow है (suite हर mutant के लिए एक बार चलती है, tools optimise करते हैं)। इसे critical logic पर, changed files में (<code>--since</code>) या nightly चलाओ; बड़े solution के हर PR पर मत लगाओ।</li>
<li><b>Snapshot / approval tests:</b> result को serialise करो (JSON, HTML, generated PDF का text) और committed <code>.verified</code> file से compare करो; फ़र्क़ test fail करता है और diff दिखाता है जिसे तुम accept या reject करते हो। Verify इसके लिए popular .NET library है।</li>
<li>बड़े outputs के लिए snapshots use करो जहाँ hand-written asserts लंबे होंगे। Risks: लोग diffs बिना पढ़े approve कर देते हैं, और random data या timestamps वाली snapshots scrub किए बिना flaky हैं।</li>
<li>TL angle: reviewers को PR में बदली हुई snapshot files भी code की तरह पढ़नी चाहिए।</li>
</ul>`,
        hg: `<ul>
<li><b>Mutation testing:</b> tool bahut chhote badlav karta hai (mutants): <code>&gt;=</code> ko <code>&gt;</code>, <code>+</code> ko <code>-</code>, statement hatana. Tests phir bhi pass hon to mutant <b>survive</b> kar gaya aur missing test ya assertion ki taraf ishaara karta hai (Puzzle 6: boundary mutant tab tak bachta hai jab tak age 18 test na karo). Mutation score = killed / total.</li>
<li>Yeh slow hai (suite har mutant ke liye ek baar chalti hai, tools optimise karte hain). Ise critical logic par, changed files mein (<code>--since</code>) ya nightly chalao; bade solution ke har PR par mat lagao.</li>
<li><b>Snapshot / approval tests:</b> result ko serialise karo (JSON, HTML, generated PDF ka text) aur committed <code>.verified</code> file se compare karo; farq test fail karta hai aur diff dikhata hai jise tum accept ya reject karte ho. Verify iske liye popular .NET library hai.</li>
<li>Bade outputs ke liye snapshots use karo jahan hand-written asserts lambe honge. Risks: log diffs bina padhe approve kar dete hain, aur random data ya timestamps wali snapshots scrub kiye bina flaky hain.</li>
<li>TL angle: reviewers ko PR mein badli hui snapshot files bhi code ki tarah padhni chahiye.</li>
</ul>`
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
        en: `<ul>
<li><b>Levels:</b> unit tests for rules; integration tests (WebApplicationFactory + real database in a container) for endpoints, queries and auth; a few end-to-end and smoke checks after deploy; contract tests between services deployed independently.</li>
<li><b>Pipeline (Day 21):</b> PR build = compile, unit tests, fast API tests, static analysis, coverage on changed code; separate or nightly job = container-heavy suites and mutation testing on critical modules; post-deploy = smoke tests. Red build blocks merge; publish results.</li>
<li><b>Standards:</b> one framework per solution, naming convention, AAA, shared test helpers, doubles only at boundaries, no sleeps, test code reviewed like production code (use the review checklist of this day).</li>
<li><b>Rules:</b> every bug fix has a test that failed first; flaky tests get an owner within a day; new code needs tests; coverage trend is watched, not worshipped.</li>
<li><b>Introduce it gradually in a legacy codebase:</b> start with characterisation tests around the code you are about to change; add integration tests on the main user journeys first; do not stop feature work for a "testing month".</li>
<li>Follow-up: "A manager asks for 80% coverage." Offer a floor for new code and the mutation or bug-escape trend as better indicators, and explain why in plain business terms (fewer production incidents).</li>
</ul>`,
        hi: `<ul>
<li><b>Levels:</b> rules के लिए unit tests; endpoints, queries और auth के लिए integration tests (WebApplicationFactory + container में real database); deploy के बाद कुछ end-to-end और smoke checks; independently deploy होने वाली services के बीच contract tests।</li>
<li><b>Pipeline (Day 21):</b> PR build = compile, unit tests, fast API tests, static analysis, changed code पर coverage; अलग या nightly job = container-heavy suites और critical modules पर mutation testing; post-deploy = smoke tests। Red build merge रोकता है; results publish करो।</li>
<li><b>Standards:</b> हर solution में एक framework, naming convention, AAA, shared test helpers, doubles सिर्फ़ boundaries पर, sleeps नहीं, test code का review production code की तरह (इस day का review checklist use करो)।</li>
<li><b>Rules:</b> हर bug fix के साथ ऐसा test जो पहले fail हुआ; flaky tests को एक दिन में owner; नए code के लिए tests; coverage का trend देखा जाए, पूजा नहीं।</li>
<li><b>Legacy codebase में धीरे-धीरे लाओ:</b> जिस code को बदलने वाले हो उसके चारों ओर characterisation tests से शुरू करो; पहले main user journeys पर integration tests जोड़ो; "testing month" के लिए feature work मत रोको।</li>
<li>Follow-up: "Manager 80% coverage माँगता है।" नए code के लिए floor दो और mutation या bug-escape trend को बेहतर indicators बताओ, और सीधे business terms में समझाओ (कम production incidents)।</li>
</ul>`,
        hg: `<ul>
<li><b>Levels:</b> rules ke liye unit tests; endpoints, queries aur auth ke liye integration tests (WebApplicationFactory + container mein real database); deploy ke baad kuch end-to-end aur smoke checks; independently deploy hone wali services ke beech contract tests.</li>
<li><b>Pipeline (Day 21):</b> PR build = compile, unit tests, fast API tests, static analysis, changed code par coverage; alag ya nightly job = container-heavy suites aur critical modules par mutation testing; post-deploy = smoke tests. Red build merge rokta hai; results publish karo.</li>
<li><b>Standards:</b> har solution mein ek framework, naming convention, AAA, shared test helpers, doubles sirf boundaries par, sleeps nahi, test code ka review production code ki tarah (is day ka review checklist use karo).</li>
<li><b>Rules:</b> har bug fix ke saath aisa test jo pehle fail hua; flaky tests ko ek din mein owner; naye code ke liye tests; coverage ka trend dekha jaye, pooja nahi.</li>
<li><b>Legacy codebase mein dheere-dheere lao:</b> jis code ko badalne wale ho uske charon or characterisation tests se shuru karo; pehle main user journeys par integration tests jodo; "testing month" ke liye feature work mat roko.</li>
<li>Follow-up: "Manager 80% coverage maangta hai." Naye code ke liye floor do aur mutation ya bug-escape trend ko behtar indicators batao, aur seedhe business terms mein samjhao (kam production incidents).</li>
</ul>`
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
        en: `<ul>
<li><b>Do not mock:</b> types you do not own (<code>HttpClient</code>, <code>DbContext</code>: wrap them behind your interface, or use a fake <code>HttpMessageHandler</code> or a real test database); value objects and DTOs; pure functions; the class under test.</li>
<li><b>Smells in review:</b> more setup lines than assertion lines; <code>Verify</code> on every call; mocks returning mocks; tests that mirror the implementation line by line; a bug fix that needs five tests to change.</li>
<li><b>Fixes:</b> use a fake or a real in-memory collaborator you wrote; test at a higher level (integration) when the logic is mostly wiring; reduce dependencies (SRP, Day 8) so there is less to mock.</li>
<li>Mocks still have a place for real side effects and failures that are hard to trigger: payment declined, timeout, message published once.</li>
<li>Follow-up: "Mock the repository in a service test?" Fine for service rules; and also test the repository itself against a real database, otherwise the mapping and query are never checked.</li>
</ul>`,
        hi: `<ul>
<li><b>Mock मत करो:</b> जो types तुम्हारे नहीं हैं (<code>HttpClient</code>, <code>DbContext</code>: उन्हें अपने interface के पीछे wrap करो, या fake <code>HttpMessageHandler</code> या real test database use करो); value objects और DTOs; pure functions; जिस class को test कर रहे हो वह ख़ुद।</li>
<li><b>Review में smells:</b> assertion lines से ज़्यादा setup lines; हर call पर <code>Verify</code>; mocks जो mocks return करें; ऐसे tests जो implementation की line-by-line नक़ल हों; ऐसा bug fix जिसमें पाँच tests बदलने पड़ें।</li>
<li><b>Fixes:</b> fake या अपना लिखा real in-memory collaborator use करो; जब logic ज़्यादातर wiring हो तो higher level (integration) पर test करो; dependencies घटाओ (SRP, Day 8) ताकि mock करने को कम रहे।</li>
<li>Mocks की जगह फिर भी है: real side effects और ऐसी failures के लिए जिन्हें trigger करना मुश्किल है: payment declined, timeout, message एक बार publish।</li>
<li>Follow-up: "Service test में repository mock करें?" Service rules के लिए ठीक; और repository को भी real database पर test करो, वरना mapping और query कभी check नहीं होंगे।</li>
</ul>`,
        hg: `<ul>
<li><b>Mock mat karo:</b> jo types tumhare nahi hain (<code>HttpClient</code>, <code>DbContext</code>: unhe apne interface ke peeche wrap karo, ya fake <code>HttpMessageHandler</code> ya real test database use karo); value objects aur DTOs; pure functions; jis class ko test kar rahe ho woh khud.</li>
<li><b>Review mein smells:</b> assertion lines se zyaada setup lines; har call par <code>Verify</code>; mocks jo mocks return karein; aise tests jo implementation ki line-by-line nakal hon; aisa bug fix jisme paanch tests badalne padein.</li>
<li><b>Fixes:</b> fake ya apna likha real in-memory collaborator use karo; jab logic zyaadatar wiring ho to higher level (integration) par test karo; dependencies ghatao (SRP, Day 8) taaki mock karne ko kam rahe.</li>
<li>Mocks ki jagah phir bhi hai: real side effects aur aisi failures ke liye jinhe trigger karna mushkil hai: payment declined, timeout, message ek baar publish.</li>
<li>Follow-up: "Service test mein repository mock karein?" Service rules ke liye theek; aur repository ko bhi real database par test karo, warna mapping aur query kabhi check nahi honge.</li>
</ul>`
      }
    }
  ],
  puzzles: [
    {
      id: "instance-per-test",
      src: `using System.Reflection;

var fixture = new SharedFixture();
var disposed = 0;
var methods = typeof(CartTests).GetMethods()
    .Where(m => m.GetCustomAttribute<TestAttribute>() != null)
    .OrderBy(m => m.Name);

foreach (var method in methods)
{
    var instance = new CartTests(fixture);   // xUnit builds a NEW instance for every test
    method.Invoke(instance, null);
    Console.WriteLine($"{method.Name}: items={instance.Items.Count} ctorRuns={CartTests.CtorRuns} fixtureUses={fixture.Uses}");
    instance.Dispose();
    disposed++;
}
Console.WriteLine($"disposed={disposed} fixturesCreated={SharedFixture.Created}");

[AttributeUsage(AttributeTargets.Method)]
class TestAttribute : Attribute { }

class SharedFixture
{
    public static int Created;
    public int Uses;
    public SharedFixture() => Created++;
}

class CartTests : IDisposable
{
    public static int CtorRuns;
    public List<string> Items { get; } = new();
    private readonly SharedFixture _fixture;

    public CartTests(SharedFixture fixture)
    {
        _fixture = fixture;
        _fixture.Uses++;
        CtorRuns++;
    }

    [Test] public void Add_one_item() => Items.Add("tea");
    [Test] public void Add_two_items() { Items.Add("tea"); Items.Add("biscuit"); }
    [Test] public void Starts_empty() { }

    public void Dispose() => Items.Clear();
}
`,
      answer: `Add_one_item: items=1 ctorRuns=1 fixtureUses=1
Add_two_items: items=2 ctorRuns=2 fixtureUses=2
Starts_empty: items=0 ctorRuns=3 fixtureUses=3
disposed=3 fixturesCreated=1`,
      explain: {
        en: `<ul>
<li>Every test gets a <b>new</b> <code>CartTests</code> instance, so <code>Items</code> starts empty each time: <code>Add_two_items</code> sees only its own 2 items and <code>Starts_empty</code> sees 0, even though earlier tests added items. That is xUnit's isolation.</li>
<li>The static <code>CtorRuns</code> counter shows the constructor ran once per test (3 tests, 3 runs). A static field is exactly the kind of shared state that survives between tests, so avoid it for test data.</li>
<li>The fixture was created <b>once</b> and shared (<code>Created = 1</code>) while each test's constructor used it (<code>Uses</code> grows 1, 2, 3). A shared fixture is for expensive resources, not for per-test data.</li>
<li><code>Dispose</code> ran after each test (3 times). The tests are sorted by name here only to keep the output fixed; do not depend on test order in real suites.</li>
</ul>`,
        hi: `<ul>
<li>हर test को <code>CartTests</code> का <b>नया</b> instance मिलता है, इसलिए <code>Items</code> हर बार खाली शुरू होता है: <code>Add_two_items</code> सिर्फ़ अपने 2 items देखता है और <code>Starts_empty</code> 0 देखता है, भले ही पहले के tests ने items जोड़े हों। यही xUnit की isolation है।</li>
<li>Static <code>CtorRuns</code> counter दिखाता है कि constructor हर test के लिए एक बार चला (3 tests, 3 runs)। Static field ठीक वही shared state है जो tests के बीच बचता है, इसलिए test data के लिए उससे बचो।</li>
<li>Fixture <b>एक बार</b> बना और share हुआ (<code>Created = 1</code>), जबकि हर test के constructor ने उसे use किया (<code>Uses</code> 1, 2, 3 बढ़ता है)। Shared fixture महँगे resources के लिए है, per-test data के लिए नहीं।</li>
<li><code>Dispose</code> हर test के बाद चला (3 बार)। यहाँ tests को नाम से sort सिर्फ़ output fixed रखने के लिए किया है; real suites में test order पर depend मत करो।</li>
</ul>`,
        hg: `<ul>
<li>Har test ko <code>CartTests</code> ka <b>naya</b> instance milta hai, isliye <code>Items</code> har baar khaali shuru hota hai: <code>Add_two_items</code> sirf apne 2 items dekhta hai aur <code>Starts_empty</code> 0 dekhta hai, bhale hi pehle ke tests ne items jode hon. Yahi xUnit ki isolation hai.</li>
<li>Static <code>CtorRuns</code> counter dikhata hai ki constructor har test ke liye ek baar chala (3 tests, 3 runs). Static field theek wahi shared state hai jo tests ke beech bachta hai, isliye test data ke liye usse bacho.</li>
<li>Fixture <b>ek baar</b> bana aur share hua (<code>Created = 1</code>), jabki har test ke constructor ne use use kiya (<code>Uses</code> 1, 2, 3 badhta hai). Shared fixture mehenge resources ke liye hai, per-test data ke liye nahi.</li>
<li><code>Dispose</code> har test ke baad chala (3 baar). Yahan tests ko naam se sort sirf output fixed rakhne ke liye kiya hai; real suites mein test order par depend mat karo.</li>
</ul>`
      }
    },
    {
      id: "theory-rows",
      src: `var calc = new Calc();
int run = 0, passed = 0;

foreach (var (name, row) in Rows())
{
    run++;
    try
    {
        var result = calc.Add((int)row[0], (int)row[1]);
        if (result != (int)row[2]) throw new Exception($"expected {row[2]} but was {result}");
        passed++;
        Console.WriteLine($"PASS {name}({string.Join(", ", row)})");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"FAIL {name}({string.Join(", ", row)}): {ex.Message}");
    }
}
Console.WriteLine($"{run} run, {passed} passed, {run - passed} failed");

// like [InlineData] x3 plus [MemberData(nameof(Extra))] that yields 2 rows
IEnumerable<(string, object[])> Rows()
{
    yield return ("Add", new object[] { 2, 3, 5 });
    yield return ("Add", new object[] { -1, 1, 0 });
    yield return ("Add", new object[] { 0, 0, 1 });
    foreach (var extra in Extra()) yield return ("Add", extra);
}

IEnumerable<object[]> Extra()
{
    yield return new object[] { 7, 8, 15 };
    yield return new object[] { 10, 20, 30 };
}

class Calc
{
    public int Add(int a, int b) => a + b;
}
`,
      answer: `PASS Add(2, 3, 5)
PASS Add(-1, 1, 0)
FAIL Add(0, 0, 1): expected 1 but was 0
PASS Add(7, 8, 15)
PASS Add(10, 20, 30)
5 run, 4 passed, 1 failed`,
      explain: {
        en: `<ul>
<li>Three <code>[InlineData]</code>-style rows plus two rows from a <code>[MemberData]</code>-style source give <b>5 test cases</b> from one method; the report says "5 run".</li>
<li>Row 3 (<code>0 + 0</code> expected <code>1</code>) is a wrong expectation, so it fails with its own message, but the rows after it still run: rows are independent.</li>
<li>Row names include the arguments, so a failure tells you which data broke. That is why a Theory beats one Fact with a loop inside: a loop stops at the first failure and hides the rest.</li>
<li>Rows that share the same expected behaviour belong in a Theory; rows that need different assertions belong in separate Facts.</li>
</ul>`,
        hi: `<ul>
<li>तीन <code>[InlineData]</code>-style rows और एक <code>[MemberData]</code>-style source की दो rows से एक ही method के <b>5 test cases</b> बनते हैं; report कहती है "5 run"।</li>
<li>Row 3 (<code>0 + 0</code>, expected <code>1</code>) ग़लत expectation है, इसलिए वह अपने message के साथ fail होती है, पर उसके बाद की rows फिर भी चलती हैं: rows independent हैं।</li>
<li>Row names में arguments शामिल होते हैं, इसलिए failure बताती है कि किस data पर टूटा। इसीलिए Theory एक Fact के अंदर loop से बेहतर है: loop पहली failure पर रुक जाता है और बाकी छुपा देता है।</li>
<li>जिन rows का expected behaviour same है वे Theory में रखो; जिन्हें अलग assertions चाहिए वे अलग Facts में।</li>
</ul>`,
        hg: `<ul>
<li>Teen <code>[InlineData]</code>-style rows aur ek <code>[MemberData]</code>-style source ki do rows se ek hi method ke <b>5 test cases</b> bante hain; report kehti hai "5 run".</li>
<li>Row 3 (<code>0 + 0</code>, expected <code>1</code>) galat expectation hai, isliye woh apne message ke saath fail hoti hai, par uske baad ki rows phir bhi chalti hain: rows independent hain.</li>
<li>Row names mein arguments shaamil hote hain, isliye failure batati hai ki kis data par toota. Isiliye Theory ek Fact ke andar loop se behtar hai: loop pehli failure par ruk jata hai aur baaki chhupa deta hai.</li>
<li>Jin rows ka expected behaviour same hai woh Theory mein rakho; jinhe alag assertions chahiye woh alag Facts mein.</li>
</ul>`
      }
    },
    {
      id: "moq-last-setup-wins",
      src: `using Moq;

var repo = new Mock<IPriceRepo>();
repo.Setup(r => r.PriceOf(It.IsAny<string>())).Returns(100);
repo.Setup(r => r.PriceOf("tea")).Returns(20);

Console.WriteLine("1: " + repo.Object.PriceOf("tea") + " " + repo.Object.PriceOf("rice"));

repo.Setup(r => r.PriceOf(It.IsAny<string>())).Returns(5);   // added later, matches everything

Console.WriteLine("2: " + repo.Object.PriceOf("tea") + " " + repo.Object.PriceOf("rice"));

repo.Verify(r => r.PriceOf("tea"), Times.Exactly(2));
Console.WriteLine("verify tea x2 passed");

var loose = new Mock<IPriceRepo>();                         // default behaviour is Loose
Console.WriteLine("3: " + loose.Object.PriceOf("tea"));

public interface IPriceRepo
{
    int PriceOf(string item);
}
`,
      answer: `1: 20 100
2: 5 5
verify tea x2 passed
3: 0`,
      packages: ["Moq@4.20.72"],
      explain: {
        en: `<ul>
<li>Moq checks setups from the <b>most recent to the oldest</b> and uses the first that matches. In step 1 the specific <code>"tea"</code> setup was added after the broad one, so tea is 20 and everything else 100.</li>
<li>In step 2 a new broad <code>It.IsAny&lt;string&gt;()</code> setup was added <b>later</b>, so it now wins for every item, including tea: <code>5 5</code>. Order of setups matters: put general setups first and specific ones after.</li>
<li><code>Verify(..., Times.Exactly(2))</code> counts calls, not setups: tea was asked twice (once per print), so it passes.</li>
<li>A default (loose) mock returns the default value for anything not set up, here <code>0</code>. A strict mock would throw instead. TL tip: a test that sets up the same call twice is usually a smell.</li>
</ul>`,
        hi: `<ul>
<li>Moq setups को <b>सबसे recent से सबसे पुराने</b> की ओर check करता है और पहला matching use करता है। Step 1 में specific <code>"tea"</code> setup broad वाले के बाद जोड़ा गया, इसलिए tea 20 है और बाकी सब 100।</li>
<li>Step 2 में नया broad <code>It.IsAny&lt;string&gt;()</code> setup <b>बाद में</b> जोड़ा गया, इसलिए अब वह हर item के लिए जीतता है, tea के लिए भी: <code>5 5</code>। Setups का order मायने रखता है: general setups पहले, specific बाद में रखो।</li>
<li><code>Verify(..., Times.Exactly(2))</code> calls गिनता है, setups नहीं: tea दो बार माँगा गया (हर print में एक बार), इसलिए pass होता है।</li>
<li>Default (loose) mock जो set up नहीं हुआ उसके लिए default value देता है, यहाँ <code>0</code>। Strict mock इसकी जगह throw करता। TL tip: जो test एक ही call दो बार set up करे वह आमतौर पर smell है।</li>
</ul>`,
        hg: `<ul>
<li>Moq setups ko <b>sabse recent se sabse purane</b> ki or check karta hai aur pehla matching use karta hai. Step 1 mein specific <code>"tea"</code> setup broad wale ke baad jodaa gaya, isliye tea 20 hai aur baaki sab 100.</li>
<li>Step 2 mein naya broad <code>It.IsAny&lt;string&gt;()</code> setup <b>baad mein</b> jodaa gaya, isliye ab woh har item ke liye jeetta hai, tea ke liye bhi: <code>5 5</code>. Setups ka order maayne rakhta hai: general setups pehle, specific baad mein rakho.</li>
<li><code>Verify(..., Times.Exactly(2))</code> calls ginta hai, setups nahi: tea do baar maanga gaya (har print mein ek baar), isliye pass hota hai.</li>
<li>Default (loose) mock jo set up nahi hua uske liye default value deta hai, yahan <code>0</code>. Strict mock iski jagah throw karta. TL tip: jo test ek hi call do baar set up kare woh aamtaur par smell hai.</li>
</ul>`
      }
    },
    {
      id: "nsubstitute-returns-sequence",
      src: `using NSubstitute;

var otp = Substitute.For<IOtpService>();
otp.Next("user1").Returns("111", "222", "333");

var seen = new List<string>();
for (int i = 0; i < 4; i++) seen.Add(otp.Next("user1"));
seen.Add(otp.Next("user2") ?? "null");
seen.Add(otp.Next("user1"));

Console.WriteLine(string.Join(",", seen));
Console.WriteLine("calls: " + otp.ReceivedCalls().Count());
otp.Received(5).Next("user1");
Console.WriteLine("Received(5) for user1 passed");

public interface IOtpService
{
    string Next(string user);
}
`,
      answer: `111,222,333,333,,333
calls: 6
Received(5) for user1 passed`,
      packages: ["NSubstitute@6.*"],
      explain: {
        en: `<ul>
<li><code>Returns("111", "222", "333")</code> plays the values in order and then <b>keeps repeating the last one</b>: user1 gets 111, 222, 333, 333, and the later call gets 333 again.</li>
<li><code>Next("user2")</code> was never configured, so NSubstitute returns an <b>automatic default</b> for a string: an empty string, not null. That is why the output has an empty slot between the commas.</li>
<li><code>ReceivedCalls()</code> counts the 6 real calls made on the substitute (4 + 1 + 1). The line that configures <code>Returns</code> is not counted as a call.</li>
<li><code>Received(5).Next("user1")</code> checks the argument too: 5 calls were for user1, one for user2. Sequences are handy for simulating a flaky dependency (fail, fail, succeed) in retry tests.</li>
</ul>`,
        hi: `<ul>
<li><code>Returns("111", "222", "333")</code> values को order में चलाता है और फिर <b>आख़िरी को दोहराता रहता है</b>: user1 को 111, 222, 333, 333 मिलता है, और बाद की call को फिर 333।</li>
<li><code>Next("user2")</code> कभी configure नहीं हुआ, इसलिए NSubstitute string के लिए <b>automatic default</b> देता है: empty string, null नहीं। इसीलिए output में commas के बीच खाली जगह है।</li>
<li><code>ReceivedCalls()</code> substitute पर हुई 6 असली calls गिनता है (4 + 1 + 1)। <code>Returns</code> configure करने वाली line को call नहीं गिना जाता।</li>
<li><code>Received(5).Next("user1")</code> argument भी check करता है: 5 calls user1 के लिए थीं, एक user2 के लिए। Sequences retry tests में flaky dependency (fail, fail, succeed) simulate करने के लिए काम के हैं।</li>
</ul>`,
        hg: `<ul>
<li><code>Returns("111", "222", "333")</code> values ko order mein chalata hai aur phir <b>aakhri ko dohrata rehta hai</b>: user1 ko 111, 222, 333, 333 milta hai, aur baad ki call ko phir 333.</li>
<li><code>Next("user2")</code> kabhi configure nahi hua, isliye NSubstitute string ke liye <b>automatic default</b> deta hai: empty string, null nahi. Isiliye output mein commas ke beech khaali jagah hai.</li>
<li><code>ReceivedCalls()</code> substitute par hui 6 asli calls ginta hai (4 + 1 + 1). <code>Returns</code> configure karne wali line ko call nahi ginte.</li>
<li><code>Received(5).Next("user1")</code> argument bhi check karta hai: 5 calls user1 ke liye thin, ek user2 ke liye. Sequences retry tests mein flaky dependency (fail, fail, succeed) simulate karne ke liye kaam ke hain.</li>
</ul>`
      }
    },
    {
      id: "fake-timer-advance",
      src: `using Microsoft.Extensions.Time.Testing;

var start = new DateTimeOffset(2026, 1, 1, 9, 0, 0, TimeSpan.Zero);
var clock = new FakeTimeProvider(start);
var ticks = 0;

using var timer = clock.CreateTimer(
    _ => { ticks++; Console.WriteLine("tick " + ticks + " at +" + (int)(clock.GetUtcNow() - start).TotalMinutes + "m"); },
    null,
    dueTime: TimeSpan.FromMinutes(5),
    period: TimeSpan.FromMinutes(10));

clock.Advance(TimeSpan.FromMinutes(4));
Console.WriteLine("after 4m: ticks=" + ticks);

clock.Advance(TimeSpan.FromMinutes(1));
Console.WriteLine("after 5m: ticks=" + ticks);

clock.Advance(TimeSpan.FromMinutes(30));
Console.WriteLine("after 35m: ticks=" + ticks);
`,
      answer: `after 4m: ticks=0
tick 1 at +5m
after 5m: ticks=1
tick 2 at +35m
tick 3 at +35m
tick 4 at +35m
after 35m: ticks=4`,
      packages: ["Microsoft.Extensions.TimeProvider.Testing@9.*"],
      explain: {
        en: `<ul>
<li>The timer is due after 5 minutes, then every 10 minutes. After <code>Advance(4m)</code> nothing is due yet; after one more minute (5m) the first tick fires. No real time passes: the test is instant.</li>
<li>Advancing 30 more minutes (to 35m) makes three more ticks due (at 15m, 25m and 35m), so the total is 4. The fake clock runs every callback that became due.</li>
<li>Look at the printed times: all three callbacks report <code>+35m</code>. With this package version, <code>Advance</code> moves the clock to the target time and then runs the due callbacks, so the callbacks see the final time, not their own due time. Assert on the <b>count</b>, not on the time inside a callback.</li>
<li>This works for any code that uses <code>TimeProvider.CreateTimer</code> (background refresh, cache expiry, debounce), so such code needs no sleeping tests. Compare Day 16, which uses the fake clock for a circuit breaker.</li>
</ul>`,
        hi: `<ul>
<li>Timer 5 मिनट बाद due है, फिर हर 10 मिनट पर। <code>Advance(4m)</code> के बाद अभी कुछ due नहीं; एक मिनट और (5m) बाद पहली tick fire होती है। असली समय नहीं बीतता: test instant है।</li>
<li>30 मिनट और आगे (35m तक) बढ़ाने पर तीन और ticks due हो जाती हैं (15m, 25m और 35m पर), इसलिए कुल 4। Fake clock हर due हुआ callback चला देता है।</li>
<li>Printed times देखो: तीनों callbacks <code>+35m</code> बताते हैं। इस package version में <code>Advance</code> clock को target time पर ले जाता है और फिर due callbacks चलाता है, इसलिए callbacks को final time दिखता है, अपना due time नहीं। <b>Count</b> पर assert करो, callback के अंदर के time पर नहीं।</li>
<li>यह उस हर code के लिए काम करता है जो <code>TimeProvider.CreateTimer</code> use करता है (background refresh, cache expiry, debounce), इसलिए ऐसे code को sleeping tests नहीं चाहिए। Day 16 से compare करो, जो fake clock को circuit breaker के लिए use करता है।</li>
</ul>`,
        hg: `<ul>
<li>Timer 5 minute baad due hai, phir har 10 minute par. <code>Advance(4m)</code> ke baad abhi kuch due nahi; ek minute aur (5m) baad pehli tick fire hoti hai. Asli samay nahi beetta: test instant hai.</li>
<li>30 minute aur aage (35m tak) badhane par teen aur ticks due ho jaati hain (15m, 25m aur 35m par), isliye kul 4. Fake clock har due hua callback chala deta hai.</li>
<li>Printed times dekho: teeno callbacks <code>+35m</code> batate hain. Is package version mein <code>Advance</code> clock ko target time par le jaata hai aur phir due callbacks chalata hai, isliye callbacks ko final time dikhta hai, apna due time nahi. <b>Count</b> par assert karo, callback ke andar ke time par nahi.</li>
<li>Yeh us har code ke liye kaam karta hai jo <code>TimeProvider.CreateTimer</code> use karta hai (background refresh, cache expiry, debounce), isliye aise code ko sleeping tests nahi chahiye. Day 16 se compare karo, jo fake clock ko circuit breaker ke liye use karta hai.</li>
</ul>`
      }
    },
    {
      id: "mutants-survive",
      src: `var original = (int age) => age >= 18;

var mutants = new (string Name, Func<int, bool> Fn)[]
{
    ("age > 18",   age => age > 18),
    ("age >= 19",  age => age >= 19),
    ("age <= 18",  age => age <= 18),
    ("always true", age => true),
};

var weakTests = new (int Input, bool Expected)[] { (30, true), (10, false) };
var strongTests = weakTests.Append((18, true)).ToArray();

Report("weak suite", weakTests);
Report("strong suite", strongTests);

void Report(string label, (int Input, bool Expected)[] tests)
{
    bool Passes(Func<int, bool> fn) => tests.All(t => fn(t.Input) == t.Expected);

    Console.WriteLine($"{label}: original passes = {Passes(original)}");
    var survivors = mutants.Where(m => Passes(m.Fn)).Select(m => m.Name).ToList();
    Console.WriteLine($"{label}: killed {mutants.Length - survivors.Count}/{mutants.Length}, survivors: {(survivors.Count == 0 ? "none" : string.Join("; ", survivors))}");
}
`,
      answer: `weak suite: original passes = True
weak suite: killed 2/4, survivors: age > 18; age >= 19
strong suite: original passes = True
strong suite: killed 4/4, survivors: none`,
      explain: {
        en: `<ul>
<li>A <b>mutant</b> is a copy of the code with one small deliberate bug. A <b>killed</b> mutant makes at least one test fail; a <b>survivor</b> passes all tests, which means the tests cannot see that bug.</li>
<li>The weak suite checks ages 30 and 10 only. The mutants <code>age &gt; 18</code> and <code>age &gt;= 19</code> both give the same answers for 30 and 10, so they survive: 2 of 4 killed (a 50% mutation score). The classic off-by-one boundary bug is invisible.</li>
<li>Adding the boundary test <code>(18, true)</code> kills both survivors. All four mutants die, and the original still passes.</li>
<li>Line coverage of the weak suite would already be 100% (one expression), which is why Stryker.NET gives information coverage cannot. TL use: read survivors as a list of missing tests, start with critical logic.</li>
</ul>`,
        hi: `<ul>
<li><b>Mutant</b> code की कॉपी है जिसमें एक छोटा जानबूझकर डाला bug है। <b>Killed</b> mutant कम से कम एक test fail करा देता है; <b>survivor</b> सारे tests pass कर देता है, यानी tests उस bug को देख नहीं सकते।</li>
<li>Weak suite सिर्फ़ ages 30 और 10 check करती है। Mutants <code>age &gt; 18</code> और <code>age &gt;= 19</code> दोनों 30 और 10 पर same answers देते हैं, इसलिए बच जाते हैं: 4 में से 2 killed (50% mutation score)। Classic off-by-one boundary bug दिखता ही नहीं।</li>
<li>Boundary test <code>(18, true)</code> जोड़ने से दोनों survivors मर जाते हैं। चारों mutants मरते हैं, और original फिर भी pass होता है।</li>
<li>Weak suite की line coverage पहले से 100% होती (एक expression), इसीलिए Stryker.NET वह जानकारी देता है जो coverage नहीं दे सकती। TL use: survivors को missing tests की list की तरह पढ़ो, critical logic से शुरू करो।</li>
</ul>`,
        hg: `<ul>
<li><b>Mutant</b> code ki copy hai jisme ek chhota jaanbujhkar daala bug hai. <b>Killed</b> mutant kam se kam ek test fail kara deta hai; <b>survivor</b> saare tests pass kar deta hai, yaani tests us bug ko dekh nahi sakte.</li>
<li>Weak suite sirf ages 30 aur 10 check karti hai. Mutants <code>age &gt; 18</code> aur <code>age &gt;= 19</code> dono 30 aur 10 par same answers dete hain, isliye bach jaate hain: 4 mein se 2 killed (50% mutation score). Classic off-by-one boundary bug dikhta hi nahi.</li>
<li>Boundary test <code>(18, true)</code> jodne se dono survivors mar jaate hain. Chaaron mutants marte hain, aur original phir bhi pass hota hai.</li>
<li>Weak suite ki line coverage pehle se 100% hoti (ek expression), isiliye Stryker.NET woh jaankari deta hai jo coverage nahi de sakti. TL use: survivors ko missing tests ki list ki tarah padho, critical logic se shuru karo.</li>
</ul>`
      }
    },
    {
      id: "coverage-without-assert",
      src: `var hit = new HashSet<int>();

decimal Discount(decimal total)
{
    hit.Add(1);
    if (total > 100)
    {
        hit.Add(2);
        return total - total * 0.10m;      // spec says 15 percent off, so this is a bug
    }
    hit.Add(3);
    return total;
}

var tests = new List<(string Name, Func<bool> Run)>
{
    ("big_order_runs", () => { Discount(200); return true; }),                  // no assertion
    ("small_order_unchanged", () => Discount(50) == 50),
};

foreach (var (name, run) in tests)
    Console.WriteLine($"{name}: {(run() ? "pass" : "FAIL")}");

Console.WriteLine($"line coverage: {hit.Count}/3 = {hit.Count * 100 / 3}%");
Console.WriteLine($"Discount(200) = {Discount(200)}");

var withAssert = Discount(200) == 170m;
Console.WriteLine($"big_order_is_15_percent_off: {(withAssert ? "pass" : "FAIL")}");
`,
      answer: `big_order_runs: pass
small_order_unchanged: pass
line coverage: 3/3 = 100%
Discount(200) = 180.00
big_order_is_15_percent_off: FAIL`,
      explain: {
        en: `<ul>
<li><code>big_order_runs</code> calls <code>Discount(200)</code> and returns <code>true</code> without checking the result. It still executes the "big order" lines, so together with the small-order test all 3 instrumented lines are hit: <b>100% coverage</b> and a green build.</li>
<li>The code has a bug: the spec says 15 percent off but the code takes 10 percent, so <code>Discount(200)</code> is <code>180.00</code> instead of <code>170</code>. Coverage cannot see it because no assertion looks at the value.</li>
<li>The last test, which actually asserts the value, fails. Same code, same coverage, different assertion quality.</li>
<li>The program counts hit lines by hand, as coverlet does with instrumentation. In review, ask "what would make this test fail?"; a test that cannot fail adds coverage but no safety.</li>
</ul>`,
        hi: `<ul>
<li><code>big_order_runs</code> <code>Discount(200)</code> call करता है और result check किए बिना <code>true</code> return करता है। फिर भी वह "big order" lines execute करता है, इसलिए small-order test के साथ तीनों instrumented lines hit होती हैं: <b>100% coverage</b> और green build।</li>
<li>Code में bug है: spec में 15 percent off है पर code 10 percent लेता है, इसलिए <code>Discount(200)</code> <code>170</code> की जगह <code>180.00</code> है। Coverage उसे नहीं देख सकती क्योंकि कोई assertion value नहीं देखता।</li>
<li>आख़िरी test, जो value सच में assert करता है, fail होता है। Same code, same coverage, अलग assertion quality।</li>
<li>Program hit lines हाथ से गिनता है, जैसे coverlet instrumentation से करता है। Review में पूछो "इस test को क्या fail कराएगा?"; जो test fail हो ही नहीं सकता वह coverage बढ़ाता है, safety नहीं।</li>
</ul>`,
        hg: `<ul>
<li><code>big_order_runs</code> <code>Discount(200)</code> call karta hai aur result check kiye bina <code>true</code> return karta hai. Phir bhi woh "big order" lines execute karta hai, isliye small-order test ke saath teeno instrumented lines hit hoti hain: <b>100% coverage</b> aur green build.</li>
<li>Code mein bug hai: spec mein 15 percent off hai par code 10 percent leta hai, isliye <code>Discount(200)</code> <code>170</code> ki jagah <code>180.00</code> hai. Coverage use nahi dekh sakti kyonki koi assertion value nahi dekhta.</li>
<li>Aakhri test, jo value sach mein assert karta hai, fail hota hai. Same code, same coverage, alag assertion quality.</li>
<li>Program hit lines haath se ginta hai, jaise coverlet instrumentation se karta hai. Review mein poochho "is test ko kya fail karayega?"; jo test fail ho hi nahi sakta woh coverage badhata hai, safety nahi.</li>
</ul>`
      }
    },
    {
      id: "order-dependent-tests",
      src: `var orders = new[]
{
    new[] { "Starts_empty", "Add_one", "Clear_all" },
    new[] { "Add_one", "Starts_empty", "Clear_all" },
    new[] { "Add_one", "Clear_all", "Starts_empty" },
};

var shared = new List<string>();                         // static-style state shared by every test
var sharedTests = new Dictionary<string, Func<bool>>
{
    ["Starts_empty"] = () => shared.Count == 0,
    ["Add_one"] = () => { shared.Add("tea"); return shared.Count == 1; },
    ["Clear_all"] = () => { shared.Clear(); return shared.Count == 0; },
};

var isolatedTests = new Dictionary<string, Func<bool>>
{
    ["Starts_empty"] = () => new List<string>().Count == 0,
    ["Add_one"] = () => { var items = new List<string>(); items.Add("tea"); return items.Count == 1; },
    ["Clear_all"] = () => { var items = new List<string> { "tea" }; items.Clear(); return items.Count == 0; },
};

string Run(Dictionary<string, Func<bool>> tests, string[] order) =>
    string.Join(" ", order.Select(name => name + "=" + (tests[name]() ? "ok" : "FAIL")));

for (int i = 0; i < orders.Length; i++)
{
    shared.Clear();                                       // every run starts clean
    Console.WriteLine($"shared  order {i + 1}: {Run(sharedTests, orders[i])}");
}
for (int i = 0; i < orders.Length; i++)
    Console.WriteLine($"isolated order {i + 1}: {Run(isolatedTests, orders[i])}");
`,
      answer: `shared  order 1: Starts_empty=ok Add_one=ok Clear_all=ok
shared  order 2: Add_one=ok Starts_empty=FAIL Clear_all=ok
shared  order 3: Add_one=ok Clear_all=ok Starts_empty=ok
isolated order 1: Starts_empty=ok Add_one=ok Clear_all=ok
isolated order 2: Add_one=ok Starts_empty=ok Clear_all=ok
isolated order 3: Add_one=ok Clear_all=ok Starts_empty=ok`,
      explain: {
        en: `<ul>
<li>With <b>shared state</b>, <code>Starts_empty</code> passes only when no earlier test left an item behind. In order 1 it runs first and passes; in order 2 <code>Add_one</code> runs before it and it fails; in order 3 <code>Clear_all</code> happens to clean up first, so it passes again. Same tests, three different results.</li>
<li>This is the typical flaky pattern: CI uses another order or parallelism than your laptop, so the failure looks random. The failing test is not the guilty one; the shared list is.</li>
<li>The <b>isolated</b> version builds the state inside each test, so every order passes. This is what xUnit's per-test instance gives you when you keep data in instance fields, not in statics.</li>
<li>To hunt such bugs: run the suite in different orders, run a single test alone, and treat "passes alone, fails together" as a shared-state alarm.</li>
</ul>`,
        hi: `<ul>
<li><b>Shared state</b> के साथ <code>Starts_empty</code> तभी pass होता है जब किसी पहले के test ने item नहीं छोड़ा। Order 1 में वह पहले चलता है और pass होता है; order 2 में <code>Add_one</code> उससे पहले चलता है और वह fail होता है; order 3 में <code>Clear_all</code> संयोग से पहले साफ़ कर देता है, इसलिए वह फिर pass होता है। वही tests, तीन अलग results।</li>
<li>यह typical flaky pattern है: CI तुम्हारे laptop से अलग order या parallelism use करता है, इसलिए failure random दिखती है। Fail होने वाला test दोषी नहीं है; shared list दोषी है।</li>
<li><b>Isolated</b> version हर test के अंदर state बनाता है, इसलिए हर order pass होता है। xUnit का per-test instance यही देता है जब तुम data को statics की जगह instance fields में रखते हो।</li>
<li>ऐसे bugs ढूँढने के लिए: suite को अलग orders में चलाओ, एक test अकेले चलाओ, और "अकेले pass, साथ में fail" को shared-state का alarm मानो।</li>
</ul>`,
        hg: `<ul>
<li><b>Shared state</b> ke saath <code>Starts_empty</code> tabhi pass hota hai jab kisi pehle ke test ne item nahi chhoda. Order 1 mein woh pehle chalta hai aur pass hota hai; order 2 mein <code>Add_one</code> usse pehle chalta hai aur woh fail hota hai; order 3 mein <code>Clear_all</code> sanyog se pehle saaf kar deta hai, isliye woh phir pass hota hai. Wahi tests, teen alag results.</li>
<li>Yeh typical flaky pattern hai: CI tumhare laptop se alag order ya parallelism use karta hai, isliye failure random dikhti hai. Fail hone wala test doshi nahi hai; shared list doshi hai.</li>
<li><b>Isolated</b> version har test ke andar state banata hai, isliye har order pass hota hai. xUnit ka per-test instance yahi deta hai jab tum data ko statics ki jagah instance fields mein rakhte ho.</li>
<li>Aise bugs dhoondhne ke liye: suite ko alag orders mein chalao, ek test akele chalao, aur "akele pass, saath mein fail" ko shared-state ka alarm maano.</li>
</ul>`
      }
    }
  ],
  revision: {
    en: [
      "Pyramid and trophy are trade-offs: shape the suite from where your real bugs occur.",
      "A good unit test is fast, isolated, one behaviour, Arrange-Act-Assert, and named so a failure explains itself.",
      "xUnit creates a new test-class instance per test; constructor is setup, IDisposable is teardown.",
      "Prefer fakes and stubs with state assertions; use a mock only when the interaction is the behaviour.",
      "FluentAssertions v8 and later need a paid licence for commercial use; v7 stays Apache 2.0; check licences before upgrading.",
      "Moq 4.20.0 shipped SponsorLink and was criticised; 4.20.2 removed it; pin and review test dependencies.",
      "Inject TimeProvider and use FakeTimeProvider.Advance instead of DateTime.UtcNow and sleeping.",
      "WebApplicationFactory runs the real pipeline in memory; override only external services in ConfigureTestServices.",
      "For EF Core code test against a real engine, such as Testcontainers; avoid the in-memory provider.",
      "Coverage shows what ran, not what was checked; mutation testing exposes weak assertions.",
      "Fix flaky tests at the cause (time, shared state, sleeps) or quarantine them with an owner.",
      "As a TL mandate checkable rules: every bug fix has a test that failed first, and tests are reviewed like production code."
    ],
    meaning: {
      hi: [
        "Pyramid और trophy trade-offs हैं: suite की shape इस पर रखो कि तुम्हारे real bugs कहाँ आते हैं।",
        "अच्छा unit test fast, isolated, एक behaviour, Arrange-Act-Assert होता है, और नाम ऐसा कि failure ख़ुद समझा दे।",
        "xUnit हर test के लिए test-class का नया instance बनाता है; constructor setup है, IDisposable teardown।",
        "State assertions के साथ fakes और stubs को prefer करो; mock तभी जब interaction ही behaviour हो।",
        "FluentAssertions v8 और उसके बाद commercial use के लिए paid licence माँगते हैं; v7 Apache 2.0 रहता है; upgrade से पहले licences check करो।",
        "Moq 4.20.0 में SponsorLink आया और आलोचना हुई; 4.20.2 ने हटाया; test dependencies pin और review करो।",
        "DateTime.UtcNow और sleep की जगह TimeProvider inject करो और FakeTimeProvider.Advance use करो।",
        "WebApplicationFactory real pipeline memory में चलाता है; ConfigureTestServices में सिर्फ़ बाहरी services override करो।",
        "EF Core code को real engine पर test करो, जैसे Testcontainers; in-memory provider से बचो।",
        "Coverage दिखाती है क्या चला, क्या check हुआ यह नहीं; mutation testing कमज़ोर assertions पकड़ती है।",
        "Flaky tests को cause पर fix करो (time, shared state, sleeps) या owner के साथ quarantine करो।",
        "TL के तौर पर checkable rules mandate करो: हर bug fix के साथ पहले fail होने वाला test, और tests का review production code की तरह।"
      ],
      hg: [
        "Pyramid aur trophy trade-offs hain: suite ki shape is par rakho ki tumhare real bugs kahan aate hain.",
        "Achha unit test fast, isolated, ek behaviour, Arrange-Act-Assert hota hai, aur naam aisa ki failure khud samjha de.",
        "xUnit har test ke liye test-class ka naya instance banata hai; constructor setup hai, IDisposable teardown.",
        "State assertions ke saath fakes aur stubs ko prefer karo; mock tabhi jab interaction hi behaviour ho.",
        "FluentAssertions v8 aur uske baad commercial use ke liye paid licence maangte hain; v7 Apache 2.0 rehta hai; upgrade se pehle licences check karo.",
        "Moq 4.20.0 mein SponsorLink aaya aur aalochna hui; 4.20.2 ne hataya; test dependencies pin aur review karo.",
        "DateTime.UtcNow aur sleep ki jagah TimeProvider inject karo aur FakeTimeProvider.Advance use karo.",
        "WebApplicationFactory real pipeline memory mein chalata hai; ConfigureTestServices mein sirf bahari services override karo.",
        "EF Core code ko real engine par test karo, jaise Testcontainers; in-memory provider se bacho.",
        "Coverage dikhati hai kya chala, kya check hua yeh nahi; mutation testing kamzor assertions pakadti hai.",
        "Flaky tests ko cause par fix karo (time, shared state, sleeps) ya owner ke saath quarantine karo.",
        "TL ke taur par checkable rules mandate karo: har bug fix ke saath pehle fail hone wala test, aur tests ka review production code ki tarah."
      ]
    }
  },
  whatsNew: {
    en: `<p><b>What is current (verify versions on NuGet before you pin):</b> <b>xUnit v3</b> (<code>xunit.v3</code> packages) is released next to v2; <b>MSTest</b> v4 is the current major version and works with Microsoft.Testing.Platform; <code>TimeProvider</code> (.NET 8) with <code>FakeTimeProvider</code> replaces hand-made clocks; <b>FluentAssertions</b> v8+ is commercially licensed for commercial use, with Shouldly and the AwesomeAssertions fork as alternatives; in <b>EF Core 9+</b>, replacing a DbContext in <code>WebApplicationFactory</code> also needs <code>IDbContextOptionsConfiguration&lt;T&gt;</code> removed.</p>`,
    hi: `<p><b>अभी का हाल (pin करने से पहले NuGet पर versions verify करो):</b> <b>xUnit v3</b> (<code>xunit.v3</code> packages) v2 के साथ released है; <b>MSTest</b> v4 current major version है और Microsoft.Testing.Platform के साथ चलता है; <code>TimeProvider</code> (.NET 8) और <code>FakeTimeProvider</code> hand-made clocks की जगह लेते हैं; <b>FluentAssertions</b> v8+ commercial use के लिए commercially licensed है, alternatives हैं Shouldly और AwesomeAssertions fork; <b>EF Core 9+</b> में <code>WebApplicationFactory</code> में DbContext replace करने के लिए <code>IDbContextOptionsConfiguration&lt;T&gt;</code> भी हटाना पड़ता है।</p>`,
    hg: `<p><b>Abhi ka haal (pin karne se pehle NuGet par versions verify karo):</b> <b>xUnit v3</b> (<code>xunit.v3</code> packages) v2 ke saath released hai; <b>MSTest</b> v4 current major version hai aur Microsoft.Testing.Platform ke saath chalta hai; <code>TimeProvider</code> (.NET 8) aur <code>FakeTimeProvider</code> hand-made clocks ki jagah lete hain; <b>FluentAssertions</b> v8+ commercial use ke liye commercially licensed hai, alternatives hain Shouldly aur AwesomeAssertions fork; <b>EF Core 9+</b> mein <code>WebApplicationFactory</code> mein DbContext replace karne ke liye <code>IDbContextOptionsConfiguration&lt;T&gt;</code> bhi hatana padta hai.</p>`
  }
};
