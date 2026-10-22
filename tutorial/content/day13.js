// Day 13 — Web API. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 13,
  title: {
    en: "Web API",
    hi: "Web API (REST से rate limiting तक)",
    hg: "Web API (REST se rate limiting tak)"
  },
  summary: {
    en: `<p>You rate Web API 3/10, but Day 12 gave you the plumbing (pipeline, DI, filters). Today we use it to build a <b>good HTTP API</b>. Think of it as a checklist you can walk through aloud in an interview: <b>design</b> (REST, verbs, status codes), <b>safety</b> (validation, errors, auth, CORS), <b>speed and protection</b> (caching, rate limiting), <b>operations</b> (OpenAPI, HttpClientFactory).</p>
<ul>
<li><b>REST</b>: resources are nouns in the URL (<code>/orders/42</code>), the HTTP verb is the action, each request is <b>stateless</b>. <b>Safe</b> = read-only (GET, HEAD, OPTIONS); <b>idempotent</b> = repeating gives the same server state (those plus PUT and DELETE). POST and PATCH are not idempotent by definition.</li>
<li><b>Status codes</b> tell the client what to do: 201 + <code>Location</code> after create, 204 with no body, 400 bad input, 401 not authenticated, 403 not allowed, 404 missing, 409 conflict, 412 precondition failed, 415 wrong media type, 429 too many requests, 503 unavailable.</li>
<li><b>Validation</b>: DataAnnotations plus <code>[ApiController]</code> gives an automatic 400 with <code>ValidationProblemDetails</code>. <b>Errors</b>: <code>UseExceptionHandler</code> invokes your <code>IExceptionHandler</code> classes; <code>AddProblemDetails</code> gives one standard JSON shape (RFC 9457).</li>
<li><b>Versioning</b> (URL, query, header, media type) with the <code>Asp.Versioning.*</code> packages. <b>JWT</b> is signed, not encrypted: <code>AddAuthentication().AddJwtBearer(...)</code>; OAuth 2.0 is about access, OpenID Connect adds identity; policies decide who may do what.</li>
<li><b>CORS</b> is a browser rule, not API security. <b>Caching</b>: response caching, output caching (.NET 7+), <code>IMemoryCache</code>, <code>HybridCache</code> (.NET 9+), ETag and 304. <b>Rate limiting</b> is built in since .NET 7 (default rejection is 503, set 429).</li>
<li><b>OpenAPI</b>: <code>Microsoft.AspNetCore.OpenApi</code> is built in (.NET 9+). <b>HttpClientFactory</b> avoids socket exhaustion and stale DNS; <code>AddStandardResilienceHandler</code> adds retry, timeout and circuit breaker.</li>
</ul>
<p>Tip: almost every answer today follows the same shape: "what it is, which status code or header, and the trap". Learn that shape and the 8 short questions become easy.</p>`,
    hi: `<p>आप Web API को 3/10 देते हैं, पर Day 12 ने आपको plumbing (pipeline, DI, filters) दे दी है। आज उसी से एक <b>अच्छी HTTP API</b> बनाते हैं। इसे ऐसी checklist समझिए जो interview में बोलकर सुनाई जा सके: <b>design</b> (REST, verbs, status codes), <b>safety</b> (validation, errors, auth, CORS), <b>speed और protection</b> (caching, rate limiting), <b>operations</b> (OpenAPI, HttpClientFactory)।</p>
<ul>
<li><b>REST</b>: resources URL में संज्ञा (noun) होते हैं (<code>/orders/42</code>), HTTP verb ही action है, हर request <b>stateless</b> है। <b>Safe</b> = सिर्फ़ पढ़ना (GET, HEAD, OPTIONS); <b>idempotent</b> = दोहराने पर server की state वही रहे (ये तीनों और PUT, DELETE)। POST और PATCH परिभाषा से idempotent नहीं हैं।</li>
<li><b>Status codes</b> client को बताते हैं कि आगे क्या करना है: create के बाद 201 + <code>Location</code>, बिना body के 204, ग़लत input पर 400, authenticated नहीं तो 401, इजाज़त नहीं तो 403, नहीं मिला तो 404, टकराव पर 409, precondition fail पर 412, ग़लत media type पर 415, बहुत requests पर 429, service उपलब्ध नहीं तो 503।</li>
<li><b>Validation</b>: DataAnnotations और <code>[ApiController]</code> से अपने-आप 400 मिलता है, <code>ValidationProblemDetails</code> के साथ। <b>Errors</b>: <code>UseExceptionHandler</code> आपकी <code>IExceptionHandler</code> classes को बुलाता है; <code>AddProblemDetails</code> एक standard JSON shape देता है (RFC 9457)।</li>
<li><b>Versioning</b> (URL, query, header, media type) <code>Asp.Versioning.*</code> packages से। <b>JWT</b> signed होता है, encrypted नहीं: <code>AddAuthentication().AddJwtBearer(...)</code>; OAuth 2.0 access की बात करता है, OpenID Connect पहचान (identity) जोड़ता है; policies तय करती हैं कौन क्या कर सकता है।</li>
<li><b>CORS</b> browser का नियम है, API की security नहीं। <b>Caching</b>: response caching, output caching (.NET 7+), <code>IMemoryCache</code>, <code>HybridCache</code> (.NET 9+), ETag और 304। <b>Rate limiting</b> .NET 7 से built-in है (default rejection 503 है, 429 set करो)।</li>
<li><b>OpenAPI</b>: <code>Microsoft.AspNetCore.OpenApi</code> built-in है (.NET 9+)। <b>HttpClientFactory</b> socket exhaustion और पुराने DNS से बचाता है; <code>AddStandardResilienceHandler</code> retry, timeout और circuit breaker जोड़ता है।</li>
</ul>
<p>Tip: आज लगभग हर जवाब एक ही shape का है: "यह क्या है, कौन-सा status code या header, और जाल (trap) क्या है"। यह shape सीख लो तो 8 short सवाल आसान हो जाते हैं।</p>`,
    hg: `<p>Aap Web API ko 3/10 dete ho, par Day 12 ne aapko plumbing (pipeline, DI, filters) de di hai. Aaj usi se ek <b>achhi HTTP API</b> banate hain. Ise aisi checklist samjho jo interview mein bolkar sunai ja sake: <b>design</b> (REST, verbs, status codes), <b>safety</b> (validation, errors, auth, CORS), <b>speed aur protection</b> (caching, rate limiting), <b>operations</b> (OpenAPI, HttpClientFactory).</p>
<ul>
<li><b>REST</b>: resources URL mein noun hote hain (<code>/orders/42</code>), HTTP verb hi action hai, har request <b>stateless</b> hai. <b>Safe</b> = sirf padhna (GET, HEAD, OPTIONS); <b>idempotent</b> = dohrane par server ki state wahi rahe (ye teeno aur PUT, DELETE). POST aur PATCH definition se idempotent nahi hain.</li>
<li><b>Status codes</b> client ko batate hain ki aage kya karna hai: create ke baad 201 + <code>Location</code>, bina body ke 204, galat input par 400, authenticated nahi to 401, ijazat nahi to 403, nahi mila to 404, takraav par 409, precondition fail par 412, galat media type par 415, bahut requests par 429, service available nahi to 503.</li>
<li><b>Validation</b>: DataAnnotations aur <code>[ApiController]</code> se apne-aap 400 milta hai, <code>ValidationProblemDetails</code> ke saath. <b>Errors</b>: <code>UseExceptionHandler</code> aapki <code>IExceptionHandler</code> classes ko bulata hai; <code>AddProblemDetails</code> ek standard JSON shape deta hai (RFC 9457).</li>
<li><b>Versioning</b> (URL, query, header, media type) <code>Asp.Versioning.*</code> packages se. <b>JWT</b> signed hota hai, encrypted nahi: <code>AddAuthentication().AddJwtBearer(...)</code>; OAuth 2.0 access ki baat karta hai, OpenID Connect pehchaan (identity) jodta hai; policies tay karti hain kaun kya kar sakta hai.</li>
<li><b>CORS</b> browser ka niyam hai, API ki security nahi. <b>Caching</b>: response caching, output caching (.NET 7+), <code>IMemoryCache</code>, <code>HybridCache</code> (.NET 9+), ETag aur 304. <b>Rate limiting</b> .NET 7 se built-in hai (default rejection 503 hai, 429 set karo).</li>
<li><b>OpenAPI</b>: <code>Microsoft.AspNetCore.OpenApi</code> built-in hai (.NET 9+). <b>HttpClientFactory</b> socket exhaustion aur purane DNS se bachata hai; <code>AddStandardResilienceHandler</code> retry, timeout aur circuit breaker jodta hai.</li>
</ul>
<p>Tip: aaj lagbhag har jawab ek hi shape ka hai: "yeh kya hai, kaun-sa status code ya header, aur jaal (trap) kya hai". Yeh shape seekh lo to 8 short sawaal aasaan ho jaate hain.</p>`
  },
  sections: [
    {
      id: "rest-status-overview",
      depth: "short",
      title: {
        en: "REST and status codes: the language of an API",
        hi: "REST और status codes: API की भाषा",
        hg: "REST aur status codes: API ki bhasha"
      },
      body: {
        en: `<p><b>Analogy — a kirana shop counter:</b> the shelf address is the URL (<code>/rice/basmati</code>), what you ask the shopkeeper to do is the verb (look, add, replace, throw away), and his reply "done / not available / not allowed" is the status code. A good shop (API) never needs to remember your last visit: you say everything each time. That is <b>stateless</b>.</p>
<ul>
<li><b>Resources and verbs</b>: URLs are <b>nouns</b>, usually plural (<code>/orders</code>, <code>/orders/42/items</code>); the <b>HTTP verb</b> is the action. Avoid verbs in URLs such as <code>/getOrders</code>.</li>
<li><b>Safe vs idempotent</b>: <b>safe</b> = does not change state (GET, HEAD, OPTIONS). <b>Idempotent</b> = calling it 1 or 10 times leaves the same state: GET, HEAD, OPTIONS, <b>PUT</b>, <b>DELETE</b>. <b>POST</b> and <b>PATCH</b> are not idempotent, so retrying them can duplicate work.</li>
<li><b>PUT vs PATCH</b>: PUT <b>replaces</b> the whole resource; PATCH sends only the <b>changes</b> (formats: JSON Patch RFC 6902, JSON Merge Patch RFC 7396, or your own partial DTO). POST creates a child or triggers an action.</li>
<li><b>Stateless</b>: the server keeps no per-client session between requests; each request carries what it needs (for example a bearer token). That makes it easy to scale out behind a load balancer.</li>
<li><b>HATEOAS</b> (hypermedia): responses include links to the next possible actions. It is the top level of the Richardson maturity model; most real "REST" APIs stop before it, and that is acceptable if you say so.</li>
<li><b>Status code families</b>: 2xx success, 3xx redirect or not modified, 4xx the <b>client</b> is wrong, 5xx the <b>server</b> is wrong. Pick the most specific code; do not return 200 with an error inside the body.</li>
<li><b>Which one when</b>: 200 OK (with body), 201 Created (+ <code>Location</code> header), 202 Accepted (work queued), 204 No Content, 400 malformed or invalid input, 401 not authenticated, 403 authenticated but not allowed, 404 not found, 409 conflict (duplicate, wrong state), 412 precondition failed (<code>If-Match</code> no longer matches), 415 unsupported media type, 422 well-formed but semantically invalid (some teams use it for validation; ASP.NET Core's default is 400), 429 too many requests, 500 unexpected server error, 503 temporarily unavailable.</li>
</ul>
<p><b>When to use / when not:</b> use plain REST for public or partner APIs and CRUD-style services: it is simple, cacheable and well understood. For chatty internal service-to-service calls, or when clients need to shape their own queries, consider gRPC or GraphQL instead. Do not chase "pure REST" (HATEOAS everywhere) if no client will use the links.</p>`,
        hi: `<p><b>Analogy — kirana दुकान का counter:</b> shelf का पता URL है (<code>/rice/basmati</code>), दुकानदार से आप जो करवाते हैं वह verb है (देखो, जोड़ो, बदलो, फेंको), और उसका जवाब "हो गया / नहीं है / इजाज़त नहीं" status code है। अच्छी दुकान (API) को आपकी पिछली visit याद रखने की ज़रूरत नहीं: हर बार आप पूरी बात बताते हो। यही <b>stateless</b> है।</p>
<ul>
<li><b>Resources और verbs</b>: URLs <b>संज्ञा (noun)</b> होते हैं, आमतौर पर बहुवचन (<code>/orders</code>, <code>/orders/42/items</code>); <b>HTTP verb</b> ही action है। URL में <code>/getOrders</code> जैसे verbs से बचो।</li>
<li><b>Safe vs idempotent</b>: <b>safe</b> = state नहीं बदलता (GET, HEAD, OPTIONS)। <b>Idempotent</b> = 1 बार या 10 बार बुलाने पर state वही रहती है: GET, HEAD, OPTIONS, <b>PUT</b>, <b>DELETE</b>। <b>POST</b> और <b>PATCH</b> idempotent नहीं हैं, इसलिए retry से काम दोहर सकता है।</li>
<li><b>PUT vs PATCH</b>: PUT पूरा resource <b>बदल देता</b> है; PATCH सिर्फ़ <b>बदलाव</b> भेजता है (formats: JSON Patch RFC 6902, JSON Merge Patch RFC 7396, या अपना partial DTO)। POST child बनाता है या कोई action चलाता है।</li>
<li><b>Stateless</b>: server requests के बीच client का session नहीं रखता; हर request में ज़रूरी चीज़ें होती हैं (जैसे bearer token)। इससे load balancer के पीछे scale out करना आसान होता है।</li>
<li><b>HATEOAS</b> (hypermedia): responses में अगले possible actions के links होते हैं। यह Richardson maturity model का सबसे ऊपर का level है; ज़्यादातर असली "REST" APIs वहाँ तक नहीं पहुँचतीं, और बता दो तो यह ठीक है।</li>
<li><b>Status code families</b>: 2xx सफलता, 3xx redirect या not modified, 4xx <b>client</b> की ग़लती, 5xx <b>server</b> की ग़लती। सबसे specific code चुनो; body में error रखकर 200 मत लौटाओ।</li>
<li><b>कब कौन-सा</b>: 200 OK (body के साथ), 201 Created (+ <code>Location</code> header), 202 Accepted (काम queue में गया), 204 No Content, 400 ग़लत या invalid input, 401 authenticated नहीं, 403 authenticated पर इजाज़त नहीं, 404 नहीं मिला, 409 conflict (duplicate, ग़लत state), 412 precondition failed (<code>If-Match</code> अब मेल नहीं खाता), 415 unsupported media type, 422 सही बनावट पर अर्थ में ग़लत (कुछ teams validation के लिए use करती हैं; ASP.NET Core का default 400 है), 429 बहुत requests, 500 अनपेक्षित server error, 503 कुछ देर के लिए उपलब्ध नहीं।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> public या partner APIs और CRUD-style services के लिए सादा REST use करो: यह आसान, cacheable और सबको समझ आने वाला है। बहुत chatty internal service-to-service calls के लिए, या जब clients को अपनी query shape करनी हो, gRPC या GraphQL सोचो। अगर कोई client links इस्तेमाल नहीं करेगा तो "pure REST" (हर जगह HATEOAS) के पीछे मत भागो।</p>`,
        hg: `<p><b>Analogy — kirana dukaan ka counter:</b> shelf ka pata URL hai (<code>/rice/basmati</code>), dukaandaar se aap jo karwate ho woh verb hai (dekho, jodo, badlo, phenko), aur uska jawab "ho gaya / nahi hai / ijazat nahi" status code hai. Achhi dukaan (API) ko aapki pichhli visit yaad rakhne ki zaroorat nahi: har baar aap poori baat batate ho. Yahi <b>stateless</b> hai.</p>
<ul>
<li><b>Resources aur verbs</b>: URLs <b>noun</b> hote hain, aamtaur par bahuvachan (<code>/orders</code>, <code>/orders/42/items</code>); <b>HTTP verb</b> hi action hai. URL mein <code>/getOrders</code> jaise verbs se bacho.</li>
<li><b>Safe vs idempotent</b>: <b>safe</b> = state nahi badalta (GET, HEAD, OPTIONS). <b>Idempotent</b> = 1 baar ya 10 baar bulane par state wahi rehti hai: GET, HEAD, OPTIONS, <b>PUT</b>, <b>DELETE</b>. <b>POST</b> aur <b>PATCH</b> idempotent nahi hain, isliye retry se kaam dohar sakta hai.</li>
<li><b>PUT vs PATCH</b>: PUT poora resource <b>badal deta</b> hai; PATCH sirf <b>badlaav</b> bhejta hai (formats: JSON Patch RFC 6902, JSON Merge Patch RFC 7396, ya apna partial DTO). POST child banata hai ya koi action chalata hai.</li>
<li><b>Stateless</b>: server requests ke beech client ka session nahi rakhta; har request mein zaroori cheezein hoti hain (jaise bearer token). Isse load balancer ke peeche scale out karna aasaan hota hai.</li>
<li><b>HATEOAS</b> (hypermedia): responses mein agle possible actions ke links hote hain. Yeh Richardson maturity model ka sabse upar ka level hai; zyaadatar asli "REST" APIs wahan tak nahi pahunchti, aur bata do to yeh theek hai.</li>
<li><b>Status code families</b>: 2xx safalta, 3xx redirect ya not modified, 4xx <b>client</b> ki galti, 5xx <b>server</b> ki galti. Sabse specific code chuno; body mein error rakhkar 200 mat lautao.</li>
<li><b>Kab kaun-sa</b>: 200 OK (body ke saath), 201 Created (+ <code>Location</code> header), 202 Accepted (kaam queue mein gaya), 204 No Content, 400 galat ya invalid input, 401 authenticated nahi, 403 authenticated par ijazat nahi, 404 nahi mila, 409 conflict (duplicate, galat state), 412 precondition failed (<code>If-Match</code> ab match nahi karta), 415 unsupported media type, 422 sahi banaavat par arth mein galat (kuch teams validation ke liye use karti hain; ASP.NET Core ka default 400 hai), 429 bahut requests, 500 anapekshit server error, 503 kuch der ke liye available nahi.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> public ya partner APIs aur CRUD-style services ke liye saada REST use karo: yeh aasaan, cacheable aur sabko samajh aane wala hai. Bahut chatty internal service-to-service calls ke liye, ya jab clients ko apni query shape karni ho, gRPC ya GraphQL socho. Agar koi client links istemal nahi karega to "pure REST" (har jagah HATEOAS) ke peeche mat bhaago.</p>`
      }
    },
    {
      id: "cross-cutting-overview",
      depth: "short",
      title: {
        en: "Validation, errors, versioning, auth and CORS: the safety layer",
        hi: "Validation, errors, versioning, auth और CORS: safety layer",
        hg: "Validation, errors, versioning, auth aur CORS: safety layer"
      },
      body: {
        en: `<p><b>Analogy — an office building:</b> the reception desk checks the visitor form (<b>validation</b>), the guard checks your ID (<b>authentication</b>), your badge opens only some floors (<b>authorization</b>), and when something breaks the building shows one standard apology notice, not a stack trace (<b>ProblemDetails</b>). New wings keep the old entrance open for a while (<b>versioning</b>). The "visitors from other buildings only via the front gate" rule is <b>CORS</b>, which only browsers follow.</p>
<ul>
<li><b>Validation</b>: put DataAnnotations (<code>[Required]</code>, <code>[Range]</code>, <code>[StringLength]</code>) on request models. With <code>[ApiController]</code>, an invalid model returns <b>400</b> with <code>ValidationProblemDetails</code> automatically, before your action runs. <b>FluentValidation</b> is an optional library for rules that are complex or shared. Minimal APIs got built-in validation in .NET 10 (<code>AddValidation()</code>).</li>
<li><b>Global errors</b>: <code>AddProblemDetails()</code> + <code>AddExceptionHandler&lt;T&gt;()</code> + <code>UseExceptionHandler()</code> placed first. <code>UseExceptionHandler</code> <b>invokes</b> your <code>IExceptionHandler</code> classes in registration order until one returns <code>true</code>. Response shape: RFC 9457 ProblemDetails (it replaced RFC 7807), media type <code>application/problem+json</code>. Show details only in Development.</li>
<li><b>Versioning</b>: change the contract without breaking old clients. Choices: URL segment (<code>/v2/orders</code>), query string (<code>?api-version=2.0</code>), header, or media type. Packages: <code>Asp.Versioning.Http</code> (Minimal APIs), <code>Asp.Versioning.Mvc</code> (controllers).</li>
<li><b>JWT bearer</b>: the client sends <code>Authorization: Bearer &lt;token&gt;</code>. A JWT is <code>header.payload.signature</code>, <b>signed, not encrypted</b>. The API checks signature, issuer, audience and expiry. Access tokens are short-lived; a refresh token gets a new one. <code>AddAuthentication().AddJwtBearer()</code>.</li>
<li><b>OAuth 2.0 vs OpenID Connect</b>: OAuth 2.0 = delegated <b>access</b> (access token for an API); OpenID Connect = <b>sign-in identity</b> on top of OAuth 2.0 (ID token). <b>Authorization</b> in your API: roles, claims and <b>policies</b>.</li>
<li><b>CORS</b>: browsers block a page from reading a response from another origin unless the server allows it. The server adds <code>Access-Control-Allow-*</code> headers; for non-simple requests the browser first sends a <b>preflight</b> <code>OPTIONS</code>. It does not stop curl or another server, so it is never a substitute for authentication.</li>
<li><b>Order</b> (Day 12 rules): <code>UseExceptionHandler</code> first, then routing, <code>UseCors</code>, <code>UseAuthentication</code>, <code>UseAuthorization</code>, then endpoints.</li>
</ul>
<p><b>When to use / when not:</b> every public API needs validation, consistent errors and authentication from day one. Add versioning when you have external clients you cannot force to upgrade; for a single internal client that deploys together with the API, a simple backward-compatible change policy is often enough. Enable CORS only for browser clients and only for the origins you name.</p>`,
        hi: `<p><b>Analogy — office building:</b> reception visitor form जाँचता है (<b>validation</b>), guard आपकी ID जाँचता है (<b>authentication</b>), आपका badge कुछ ही floors खोलता है (<b>authorization</b>), और कुछ टूटे तो building एक standard माफ़ीनामा दिखाती है, stack trace नहीं (<b>ProblemDetails</b>)। नया wing बनने पर पुराना entrance कुछ समय खुला रहता है (<b>versioning</b>)। "दूसरी buildings के visitors सिर्फ़ front gate से" वाला नियम <b>CORS</b> है, जिसे सिर्फ़ browsers मानते हैं।</p>
<ul>
<li><b>Validation</b>: request models पर DataAnnotations लगाओ (<code>[Required]</code>, <code>[Range]</code>, <code>[StringLength]</code>)। <code>[ApiController]</code> के साथ invalid model पर अपने-आप <b>400</b> और <code>ValidationProblemDetails</code> मिलता है, आपके action से पहले। जटिल या shared rules के लिए <b>FluentValidation</b> optional library है। Minimal APIs में built-in validation .NET 10 में आया (<code>AddValidation()</code>)।</li>
<li><b>Global errors</b>: <code>AddProblemDetails()</code> + <code>AddExceptionHandler&lt;T&gt;()</code> + सबसे पहले <code>UseExceptionHandler()</code>। <code>UseExceptionHandler</code> आपकी <code>IExceptionHandler</code> classes को registration order में <b>बुलाता</b> है जब तक कोई <code>true</code> न लौटाए। Response shape: RFC 9457 ProblemDetails (इसने RFC 7807 की जगह ली), media type <code>application/problem+json</code>। Details सिर्फ़ Development में दिखाओ।</li>
<li><b>Versioning</b>: contract बदलो पर पुराने clients न टूटें। विकल्प: URL segment (<code>/v2/orders</code>), query string (<code>?api-version=2.0</code>), header, या media type। Packages: <code>Asp.Versioning.Http</code> (Minimal APIs), <code>Asp.Versioning.Mvc</code> (controllers)।</li>
<li><b>JWT bearer</b>: client <code>Authorization: Bearer &lt;token&gt;</code> भेजता है। JWT <code>header.payload.signature</code> है, <b>signed, encrypted नहीं</b>। API signature, issuer, audience और expiry जाँचती है। Access tokens छोटी उम्र के होते हैं; refresh token नया दिलाता है। <code>AddAuthentication().AddJwtBearer()</code>।</li>
<li><b>OAuth 2.0 vs OpenID Connect</b>: OAuth 2.0 = delegated <b>access</b> (API के लिए access token); OpenID Connect = OAuth 2.0 के ऊपर <b>sign-in identity</b> (ID token)। आपकी API में <b>authorization</b>: roles, claims और <b>policies</b>।</li>
<li><b>CORS</b>: browser किसी page को दूसरे origin का response पढ़ने से रोकता है जब तक server इजाज़त न दे। Server <code>Access-Control-Allow-*</code> headers जोड़ता है; non-simple requests पर browser पहले एक <b>preflight</b> <code>OPTIONS</code> भेजता है। यह curl या दूसरे server को नहीं रोकता, इसलिए authentication का विकल्प कभी नहीं है।</li>
<li><b>Order</b> (Day 12 के नियम): सबसे पहले <code>UseExceptionHandler</code>, फिर routing, <code>UseCors</code>, <code>UseAuthentication</code>, <code>UseAuthorization</code>, फिर endpoints।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> हर public API को पहले दिन से validation, एक जैसे errors और authentication चाहिए। Versioning तब जोड़ो जब बाहरी clients हों जिन्हें आप upgrade के लिए मजबूर नहीं कर सकते; API के साथ ही deploy होने वाले एक internal client के लिए अक्सर simple backward-compatible बदलाव की policy काफ़ी होती है। CORS सिर्फ़ browser clients के लिए और सिर्फ़ उन origins के लिए खोलो जिनके नाम आप लो।</p>`,
        hg: `<p><b>Analogy — office building:</b> reception visitor form jaanchta hai (<b>validation</b>), guard aapki ID jaanchta hai (<b>authentication</b>), aapka badge kuch hi floors kholta hai (<b>authorization</b>), aur kuch toote to building ek standard maafinama dikhati hai, stack trace nahi (<b>ProblemDetails</b>). Naya wing banne par purana entrance kuch samay khula rehta hai (<b>versioning</b>). "Doosri buildings ke visitors sirf front gate se" wala niyam <b>CORS</b> hai, jise sirf browsers maante hain.</p>
<ul>
<li><b>Validation</b>: request models par DataAnnotations lagao (<code>[Required]</code>, <code>[Range]</code>, <code>[StringLength]</code>). <code>[ApiController]</code> ke saath invalid model par apne-aap <b>400</b> aur <code>ValidationProblemDetails</code> milta hai, aapke action se pehle. Jatil ya shared rules ke liye <b>FluentValidation</b> optional library hai. Minimal APIs mein built-in validation .NET 10 mein aaya (<code>AddValidation()</code>).</li>
<li><b>Global errors</b>: <code>AddProblemDetails()</code> + <code>AddExceptionHandler&lt;T&gt;()</code> + sabse pehle <code>UseExceptionHandler()</code>. <code>UseExceptionHandler</code> aapki <code>IExceptionHandler</code> classes ko registration order mein <b>bulata</b> hai jab tak koi <code>true</code> na lautaye. Response shape: RFC 9457 ProblemDetails (isne RFC 7807 ki jagah li), media type <code>application/problem+json</code>. Details sirf Development mein dikhao.</li>
<li><b>Versioning</b>: contract badlo par purane clients na tootein. Options: URL segment (<code>/v2/orders</code>), query string (<code>?api-version=2.0</code>), header, ya media type. Packages: <code>Asp.Versioning.Http</code> (Minimal APIs), <code>Asp.Versioning.Mvc</code> (controllers).</li>
<li><b>JWT bearer</b>: client <code>Authorization: Bearer &lt;token&gt;</code> bhejta hai. JWT <code>header.payload.signature</code> hai, <b>signed, encrypted nahi</b>. API signature, issuer, audience aur expiry jaanchti hai. Access tokens chhoti umr ke hote hain; refresh token naya dilata hai. <code>AddAuthentication().AddJwtBearer()</code>.</li>
<li><b>OAuth 2.0 vs OpenID Connect</b>: OAuth 2.0 = delegated <b>access</b> (API ke liye access token); OpenID Connect = OAuth 2.0 ke upar <b>sign-in identity</b> (ID token). Aapki API mein <b>authorization</b>: roles, claims aur <b>policies</b>.</li>
<li><b>CORS</b>: browser kisi page ko doosre origin ka response padhne se rokta hai jab tak server ijazat na de. Server <code>Access-Control-Allow-*</code> headers jodta hai; non-simple requests par browser pehle ek <b>preflight</b> <code>OPTIONS</code> bhejta hai. Yeh curl ya doosre server ko nahi rokta, isliye authentication ka vikalp kabhi nahi hai.</li>
<li><b>Order</b> (Day 12 ke niyam): sabse pehle <code>UseExceptionHandler</code>, phir routing, <code>UseCors</code>, <code>UseAuthentication</code>, <code>UseAuthorization</code>, phir endpoints.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> har public API ko pehle din se validation, ek jaise errors aur authentication chahiye. Versioning tab jodo jab baahri clients hon jinhe aap upgrade ke liye majboor nahi kar sakte; API ke saath hi deploy hone wale ek internal client ke liye aksar simple backward-compatible badlaav ki policy kaafi hoti hai. CORS sirf browser clients ke liye aur sirf un origins ke liye kholo jinke naam aap lo.</p>`
      }
    },
    {
      id: "performance-overview",
      depth: "short",
      title: {
        en: "Caching, rate limiting, OpenAPI and HttpClientFactory",
        hi: "Caching, rate limiting, OpenAPI और HttpClientFactory",
        hg: "Caching, rate limiting, OpenAPI aur HttpClientFactory"
      },
      body: {
        en: `<p><b>Analogy — a busy chai stall:</b> the kettle of ready chai is the <b>cache</b> (do not boil water for every customer). A "max 2 cups per person per round" board is the <b>rate limit</b> (one rowdy customer must not empty the kettle). The printed menu is the <b>OpenAPI</b> document (customers know what to ask for). And you do not hire a new helper for every order; you keep a few and rotate them: that is <b>HttpClientFactory</b>.</p>
<ul>
<li><b>Caching layers</b>: <b>response caching</b> follows HTTP cache headers (client and proxy caching; the server middleware is rarely what you want); <b>output caching</b> (.NET 7+) lets <i>the server</i> decide, with policies and tag-based eviction; <code>IMemoryCache</code> is in-process data; <code>IDistributedCache</code> is shared (Redis, SQL Server); <b>HybridCache</b> (.NET 9+) combines an in-memory level with an optional shared level and stops a stampede on one key.</li>
<li><b>ETag</b>: a version label for a response. Client sends <code>If-None-Match</code> on GET; unchanged gives <b>304</b> with no body. <code>If-Match</code> on PUT gives <b>412</b> if the resource changed (optimistic concurrency, like Day 6's row version).</li>
<li><b>Rate limiting</b> (<code>Microsoft.AspNetCore.RateLimiting</code>, in the framework since .NET 7): fixed window, sliding window, token bucket, concurrency. Partition by user, IP or API key. The default rejection status is <b>503</b>; set <code>RejectionStatusCode</code> to <b>429</b>.</li>
<li><b>OpenAPI</b> (.NET 9+): <code>Microsoft.AspNetCore.OpenApi</code> generates the document (<code>AddOpenApi</code>, <code>MapOpenApi</code>). A UI (Swagger UI, Scalar) is separate. Swashbuckle is no longer in the default template but still works.</li>
<li><b>HttpClientFactory</b>: a new <code>HttpClient</code> per call can exhaust sockets; one forever-static client may never notice a DNS change. The factory pools and recycles handlers and gives <b>named</b> or <b>typed</b> clients. <code>AddStandardResilienceHandler()</code> (.NET 8+) adds retry, circuit breaker and timeouts.</li>
</ul>
<p><b>When to use / when not:</b> cache data that is read often and changes rarely, and always decide how it gets invalidated. Rate limit every public endpoint; protect expensive ones harder. Do not cache per-user or private responses in a shared cache without varying the key. Do not add retries to non-idempotent calls without an idempotency key.</p>`,
        hi: `<p><b>Analogy — भीड़ वाला chai stall:</b> तैयार chai की केतली <b>cache</b> है (हर ग्राहक के लिए पानी नहीं उबालते)। "एक round में एक आदमी को 2 कप" का board <b>rate limit</b> है (एक हुड़दंगी ग्राहक पूरी केतली ख़ाली न कर दे)। छपा हुआ menu <b>OpenAPI</b> document है (ग्राहक जानते हैं क्या माँगना है)। और हर order के लिए नया helper नहीं रखते; कुछ रखकर बारी-बारी चलाते हैं: यही <b>HttpClientFactory</b> है।</p>
<ul>
<li><b>Caching layers</b>: <b>response caching</b> HTTP cache headers को मानता है (client और proxy caching; server middleware शायद ही वह हो जो आप चाहें); <b>output caching</b> (.NET 7+) में <i>server</i> फ़ैसला करता है, policies और tag-based eviction के साथ; <code>IMemoryCache</code> in-process data है; <code>IDistributedCache</code> shared है (Redis, SQL Server); <b>HybridCache</b> (.NET 9+) in-memory level और optional shared level जोड़ता है और एक key पर stampede रोकता है।</li>
<li><b>ETag</b>: response का version label। Client GET पर <code>If-None-Match</code> भेजता है; unchanged हो तो बिना body के <b>304</b>। PUT पर <code>If-Match</code> से resource बदला हो तो <b>412</b> (optimistic concurrency, Day 6 के row version जैसा)।</li>
<li><b>Rate limiting</b> (<code>Microsoft.AspNetCore.RateLimiting</code>, .NET 7 से framework में): fixed window, sliding window, token bucket, concurrency। User, IP या API key से partition करो। Default rejection status <b>503</b> है; <code>RejectionStatusCode</code> को <b>429</b> करो।</li>
<li><b>OpenAPI</b> (.NET 9+): <code>Microsoft.AspNetCore.OpenApi</code> document बनाता है (<code>AddOpenApi</code>, <code>MapOpenApi</code>)। UI (Swagger UI, Scalar) अलग है। Swashbuckle अब default template में नहीं है पर चलता है।</li>
<li><b>HttpClientFactory</b>: हर call पर नया <code>HttpClient</code> sockets ख़त्म कर सकता है; हमेशा-ज़िंदा एक static client को DNS बदलाव का पता शायद न चले। Factory handlers को pool और recycle करता है और <b>named</b> या <b>typed</b> clients देता है। <code>AddStandardResilienceHandler()</code> (.NET 8+) retry, circuit breaker और timeouts जोड़ता है।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> वह data cache करो जो अक्सर पढ़ा जाए और कम बदले, और हमेशा तय करो कि invalidate कैसे होगा। हर public endpoint पर rate limit लगाओ; भारी endpoints को ज़्यादा सख़्ती से बचाओ। user-specific या private responses को key बदले बिना shared cache में मत रखो। idempotency key के बिना non-idempotent calls पर retries मत जोड़ो।</p>`,
        hg: `<p><b>Analogy — bheed wala chai stall:</b> taiyaar chai ki ketli <b>cache</b> hai (har grahak ke liye paani nahi ubaalte). "Ek round mein ek aadmi ko 2 cup" ka board <b>rate limit</b> hai (ek hudangi grahak poori ketli khaali na kar de). Chhapa hua menu <b>OpenAPI</b> document hai (grahak jaante hain kya maangna hai). Aur har order ke liye naya helper nahi rakhte; kuch rakhkar baari-baari chalate hain: yahi <b>HttpClientFactory</b> hai.</p>
<ul>
<li><b>Caching layers</b>: <b>response caching</b> HTTP cache headers ko maanta hai (client aur proxy caching; server middleware shaayad hi woh ho jo aap chaho); <b>output caching</b> (.NET 7+) mein <i>server</i> faisla karta hai, policies aur tag-based eviction ke saath; <code>IMemoryCache</code> in-process data hai; <code>IDistributedCache</code> shared hai (Redis, SQL Server); <b>HybridCache</b> (.NET 9+) in-memory level aur optional shared level jodta hai aur ek key par stampede rokta hai.</li>
<li><b>ETag</b>: response ka version label. Client GET par <code>If-None-Match</code> bhejta hai; unchanged ho to bina body ke <b>304</b>. PUT par <code>If-Match</code> se resource badla ho to <b>412</b> (optimistic concurrency, Day 6 ke row version jaisa).</li>
<li><b>Rate limiting</b> (<code>Microsoft.AspNetCore.RateLimiting</code>, .NET 7 se framework mein): fixed window, sliding window, token bucket, concurrency. User, IP ya API key se partition karo. Default rejection status <b>503</b> hai; <code>RejectionStatusCode</code> ko <b>429</b> karo.</li>
<li><b>OpenAPI</b> (.NET 9+): <code>Microsoft.AspNetCore.OpenApi</code> document banata hai (<code>AddOpenApi</code>, <code>MapOpenApi</code>). UI (Swagger UI, Scalar) alag hai. Swashbuckle ab default template mein nahi hai par chalta hai.</li>
<li><b>HttpClientFactory</b>: har call par naya <code>HttpClient</code> sockets khatam kar sakta hai; hamesha-zinda ek static client ko DNS badlaav ka pata shaayad na chale. Factory handlers ko pool aur recycle karta hai aur <b>named</b> ya <b>typed</b> clients deta hai. <code>AddStandardResilienceHandler()</code> (.NET 8+) retry, circuit breaker aur timeouts jodta hai.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> woh data cache karo jo aksar padha jaye aur kam badle, aur hamesha tay karo ki invalidate kaise hoga. Har public endpoint par rate limit lagao; bhaari endpoints ko zyaada sakhti se bachao. User-specific ya private responses ko key badle bina shared cache mein mat rakho. Idempotency key ke bina non-idempotent calls par retries mat jodo.</p>`
      }
    },
    {
      id: "rest-in-code",
      depth: "detailed",
      title: {
        en: "A REST controller in code: verbs, status codes, Location",
        hi: "REST controller code में: verbs, status codes, Location",
        hg: "REST controller code mein: verbs, status codes, Location"
      },
      body: {
        en: `<p><b>Analogy — a railway ticket counter:</b> booking a ticket gives you a PNR and a slip telling you where to look it up later (<b>201 + Location</b>). Checking the status is harmless (<b>GET</b>). Changing the whole booking replaces it (<b>PUT</b>); asking for the same change twice leaves the same booking. Cancelling twice leaves it cancelled (<b>DELETE</b>), though the clerk's second answer is "no such booking" (404).</p>
<ul>
<li><b>Create</b> returns <code>201 Created</code> and a <code>Location</code> header pointing at the new resource: <code>CreatedAtAction</code> / <code>CreatedAtRoute</code> in controllers, <code>Results.Created</code> / <code>Results.CreatedAtRoute</code> in Minimal APIs. The body is usually the created resource.</li>
<li><b>Read</b>: <code>GET /orders/42</code> returns 200 or 404. Return a DTO, not your EF entity (Day 6: keep the database model private).</li>
<li><b>Replace</b>: <code>PUT /orders/42</code> sends the whole representation and returns 204 (or 200 with the body). Idempotent: send it three times, same state.</li>
<li><b>Delete</b>: 204 if it existed. Many teams return 204 even when it was already gone (idempotent outcome); others return 404. Either is defensible if documented.</li>
<li><b>Conflict</b>: a duplicate or a state clash is <b>409</b>, not 400 and not 500.</li>
<li><b>Return types</b>: <code>ActionResult&lt;T&gt;</code> keeps the success type visible to OpenAPI while still allowing <code>NotFound()</code> and friends; add <code>[ProducesResponseType]</code> when more codes are possible.</li>
<li><b>Trap</b>: <code>[ApiController]</code> already returns 400 for an invalid model, so do not repeat <code>if (!ModelState.IsValid)</code> in every action.</li>
</ul>
<p><b>When to use / when not:</b> controllers are a good fit for larger APIs with many filters, versions and conventions; Minimal APIs fit small services (Day 12 compares them). Use PUT when the client always has the full resource; use PATCH for large resources or when clients edit single fields. Do not tunnel everything through POST just because it is easier on the client.</p>`,
        hi: `<p><b>Analogy — railway ticket counter:</b> ticket book करने पर PNR मिलता है और एक पर्ची कि बाद में कहाँ देखना है (<b>201 + Location</b>)। status देखना बेनुकसान है (<b>GET</b>)। पूरी booking बदलना उसे replace करता है (<b>PUT</b>); वही बदलाव दो बार माँगो तो booking वही रहती है। दो बार cancel करने पर भी वह cancelled रहती है (<b>DELETE</b>), बस clerk का दूसरा जवाब "ऐसी booking नहीं है" (404) होता है।</p>
<ul>
<li><b>Create</b> पर <code>201 Created</code> और नए resource की ओर इशारा करता <code>Location</code> header लौटता है: controllers में <code>CreatedAtAction</code> / <code>CreatedAtRoute</code>, Minimal APIs में <code>Results.Created</code> / <code>Results.CreatedAtRoute</code>। Body में आमतौर पर बना हुआ resource होता है।</li>
<li><b>Read</b>: <code>GET /orders/42</code> पर 200 या 404। EF entity नहीं, DTO लौटाओ (Day 6: database model को private रखो)।</li>
<li><b>Replace</b>: <code>PUT /orders/42</code> पूरा representation भेजता है और 204 लौटाता है (या body के साथ 200)। Idempotent: तीन बार भेजो, state वही।</li>
<li><b>Delete</b>: मौजूद था तो 204। कई teams पहले से हटा होने पर भी 204 देती हैं (idempotent नतीजा); कुछ 404 देती हैं। दोनों ठीक हैं बशर्ते documented हों।</li>
<li><b>Conflict</b>: duplicate या state का टकराव <b>409</b> है, 400 या 500 नहीं।</li>
<li><b>Return types</b>: <code>ActionResult&lt;T&gt;</code> success type को OpenAPI के लिए दिखाता रखता है और <code>NotFound()</code> जैसे results भी देता है; ज़्यादा codes संभव हों तो <code>[ProducesResponseType]</code> जोड़ो।</li>
<li><b>Trap</b>: <code>[ApiController]</code> invalid model पर पहले से 400 लौटाता है, इसलिए हर action में <code>if (!ModelState.IsValid)</code> दोहराओ मत।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> बड़ी APIs के लिए जिनमें कई filters, versions और conventions हों, controllers अच्छे हैं; छोटी services के लिए Minimal APIs (Day 12 में तुलना है)। जब client के पास हमेशा पूरा resource हो तब PUT; बड़े resources या single field edit के लिए PATCH। सिर्फ़ client के लिए आसान है इसलिए सब कुछ POST से मत भेजो।</p>`,
        hg: `<p><b>Analogy — railway ticket counter:</b> ticket book karne par PNR milta hai aur ek parchi ki baad mein kahan dekhna hai (<b>201 + Location</b>). Status dekhna benuksaan hai (<b>GET</b>). Poori booking badalna use replace karta hai (<b>PUT</b>); wahi badlaav do baar maango to booking wahi rehti hai. Do baar cancel karne par bhi woh cancelled rehti hai (<b>DELETE</b>), bas clerk ka doosra jawab "aisi booking nahi hai" (404) hota hai.</p>
<ul>
<li><b>Create</b> par <code>201 Created</code> aur naye resource ki taraf ishaara karta <code>Location</code> header lautta hai: controllers mein <code>CreatedAtAction</code> / <code>CreatedAtRoute</code>, Minimal APIs mein <code>Results.Created</code> / <code>Results.CreatedAtRoute</code>. Body mein aamtaur par bana hua resource hota hai.</li>
<li><b>Read</b>: <code>GET /orders/42</code> par 200 ya 404. EF entity nahi, DTO lautao (Day 6: database model ko private rakho).</li>
<li><b>Replace</b>: <code>PUT /orders/42</code> poora representation bhejta hai aur 204 lautata hai (ya body ke saath 200). Idempotent: teen baar bhejo, state wahi.</li>
<li><b>Delete</b>: maujood tha to 204. Kai teams pehle se hata hone par bhi 204 deti hain (idempotent nateeja); kuch 404 deti hain. Dono theek hain basharte documented hon.</li>
<li><b>Conflict</b>: duplicate ya state ka takraav <b>409</b> hai, 400 ya 500 nahi.</li>
<li><b>Return types</b>: <code>ActionResult&lt;T&gt;</code> success type ko OpenAPI ke liye dikhta rakhta hai aur <code>NotFound()</code> jaise results bhi deta hai; zyaada codes sambhav hon to <code>[ProducesResponseType]</code> jodo.</li>
<li><b>Trap</b>: <code>[ApiController]</code> invalid model par pehle se 400 lautata hai, isliye har action mein <code>if (!ModelState.IsValid)</code> dohrao mat.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> badi APIs ke liye jinmein kai filters, versions aur conventions hon, controllers achhe hain; chhoti services ke liye Minimal APIs (Day 12 mein tulna hai). Jab client ke paas hamesha poora resource ho tab PUT; bade resources ya single field edit ke liye PATCH. Sirf client ke liye aasaan hai isliye sab kuch POST se mat bhejo.</p>`
      },
      code: [
        {
          caption: {
            en: "OrdersController: 201 + Location, 404, 409, 204 (compile-checked, not run)",
            hi: "OrdersController: 201 + Location, 404, 409, 204 (compile-checked, run नहीं)",
            hg: "OrdersController: 201 + Location, 404, 409, 204 (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddSingleton<OrderStore>();

var app = builder.Build();
app.MapControllers();
app.Run();

public record OrderDto(int Id, string Item, int Quantity);
public record NewOrder(string Item, int Quantity);

public class OrderStore
{
    private readonly Dictionary<int, OrderDto> _orders = new();
    private int _nextId = 1;
    public OrderDto? Find(int id) => _orders.GetValueOrDefault(id);
    public bool ItemExists(string item) => _orders.Values.Any(o => o.Item == item);
    public OrderDto Add(NewOrder n) { var o = new OrderDto(_nextId++, n.Item, n.Quantity); _orders[o.Id] = o; return o; }
    public bool Replace(int id, NewOrder n) { if (!_orders.ContainsKey(id)) return false; _orders[id] = new OrderDto(id, n.Item, n.Quantity); return true; }
    public bool Remove(int id) => _orders.Remove(id);
}

[ApiController]
[Route("api/orders")]
public class OrdersController(OrderStore store) : ControllerBase
{
    [HttpGet("{id:int}", Name = "GetOrder")]
    public ActionResult<OrderDto> Get(int id) =>
        store.Find(id) is { } order ? order : NotFound();

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status409Conflict)]
    public ActionResult<OrderDto> Create(NewOrder input)
    {
        if (store.ItemExists(input.Item))
            return Conflict(new ProblemDetails { Title = "Order for this item already exists" });

        var created = store.Add(input);
        // 201 + Location: /api/orders/{id}
        return CreatedAtRoute("GetOrder", new { id = created.Id }, created);
    }

    [HttpPut("{id:int}")]
    public IActionResult Replace(int id, NewOrder input) =>
        store.Replace(id, input) ? NoContent() : NotFound();

    [HttpDelete("{id:int}")]
    public IActionResult Delete(int id) =>
        store.Remove(id) ? NoContent() : NotFound();
}`
        }
      ]
    },
    {
      id: "errors-validation-in-code",
      depth: "detailed",
      title: {
        en: "Validation and global errors in code: ProblemDetails + IExceptionHandler",
        hi: "Validation और global errors code में: ProblemDetails + IExceptionHandler",
        hg: "Validation aur global errors code mein: ProblemDetails + IExceptionHandler"
      },
      body: {
        en: `<p><b>Analogy — a bank counter slip:</b> if you fill the form wrongly, the clerk returns it with red circles on exactly the wrong fields (<b>validation, 400 with field names</b>). If the bank's computer crashes, you do not get the error log; you get one standard "we are sorry, reference number 123" notice (<b>ProblemDetails</b> with a trace id), while the engineers read the log.</p>
<ul>
<li><b>Validation</b>: DataAnnotations on the DTO; <code>[ApiController]</code> adds an automatic filter that returns <code>400</code> with <code>ValidationProblemDetails</code> (an <code>errors</code> dictionary keyed by field) before the action body runs. You can switch this off with <code>ApiBehaviorOptions.SuppressModelStateInvalidFilter</code>.</li>
<li><b>Validation limits</b>: attributes are good for shape (required, range, length). Rules that need the database ("email already used") or cross-field logic belong in a service or a library such as <b>FluentValidation</b> (optional, third-party); the service then returns 409 or 422 deliberately.</li>
<li><b>Minimal APIs</b> did not validate DataAnnotations automatically before .NET 10. On .NET 10 you call <code>builder.Services.AddValidation()</code> and attributes on parameters and record types produce a 400 (check the version note in the What's new section).</li>
<li><b>Global exceptions</b>: <code>AddProblemDetails()</code> registers the service that writes RFC 9457 JSON. <code>AddExceptionHandler&lt;T&gt;()</code> registers a handler. <code>UseExceptionHandler()</code> (first in the pipeline) is what <b>calls</b> your handlers, in registration order, until one returns <code>true</code>. With no handler matching, <code>UseExceptionHandler()</code> with <code>AddProblemDetails</code> writes a generic 500 ProblemDetails.</li>
<li><b>Handler rules</b>: return <code>true</code> only after writing the full response; return <code>false</code> to pass the exception on. Registering a handler without calling <code>UseExceptionHandler</code> does nothing (Day 12).</li>
<li><b>Safety</b>: map known domain exceptions (not found, conflict) to 404/409 with a safe title; for everything else return a generic 500 and log the details. Do not send <code>ex.Message</code> or stack traces to clients outside Development.</li>
</ul>
<p><b>When to use / when not:</b> use exceptions for unexpected failures and rare domain violations; for common outcomes like "not found" a plain <code>NotFound()</code> result is cheaper and clearer than throwing. One global handler beats try/catch in every action, but do not hide bugs: log every unhandled exception once with the trace id.</p>`,
        hi: `<p><b>Analogy — bank counter की पर्ची:</b> form ग़लत भरो तो clerk उसे ठीक उन्हीं ग़लत fields पर लाल गोले लगाकर लौटाता है (<b>validation, field names के साथ 400</b>)। बैंक का computer crash हो तो आपको error log नहीं मिलता; एक standard "हमें खेद है, reference number 123" नोटिस मिलता है (trace id के साथ <b>ProblemDetails</b>), और engineers log पढ़ते हैं।</p>
<ul>
<li><b>Validation</b>: DTO पर DataAnnotations; <code>[ApiController]</code> एक automatic filter जोड़ता है जो action body चलने से पहले <code>ValidationProblemDetails</code> के साथ <code>400</code> लौटाता है (field के नाम से बना <code>errors</code> dictionary)। इसे <code>ApiBehaviorOptions.SuppressModelStateInvalidFilter</code> से बंद कर सकते हो।</li>
<li><b>Validation की सीमाएँ</b>: attributes shape के लिए अच्छे हैं (required, range, length)। जिन rules को database चाहिए ("email पहले से used है") या cross-field logic, वे service या <b>FluentValidation</b> जैसी library में जाते हैं (optional, third-party); फिर service जानबूझकर 409 या 422 लौटाती है।</li>
<li><b>Minimal APIs</b> .NET 10 से पहले DataAnnotations अपने-आप validate नहीं करती थीं। .NET 10 पर <code>builder.Services.AddValidation()</code> बुलाते हो और parameters व record types के attributes से 400 मिलता है (What's new section का version note देखो)।</li>
<li><b>Global exceptions</b>: <code>AddProblemDetails()</code> वह service register करता है जो RFC 9457 JSON लिखती है। <code>AddExceptionHandler&lt;T&gt;()</code> handler register करता है। <code>UseExceptionHandler()</code> (pipeline में सबसे पहले) ही आपके handlers को registration order में <b>बुलाता</b> है जब तक कोई <code>true</code> न लौटाए। कोई handler match न करे तो <code>AddProblemDetails</code> के साथ <code>UseExceptionHandler()</code> एक general 500 ProblemDetails लिखता है।</li>
<li><b>Handler के नियम</b>: पूरा response लिखने के बाद ही <code>true</code> लौटाओ; exception आगे बढ़ाने के लिए <code>false</code>। handler register करके <code>UseExceptionHandler</code> न बुलाओ तो कुछ नहीं होता (Day 12)।</li>
<li><b>Safety</b>: जाने-पहचाने domain exceptions (not found, conflict) को safe title के साथ 404/409 से map करो; बाकी सबके लिए general 500 लौटाओ और details log करो। Development के बाहर <code>ex.Message</code> या stack traces clients को मत भेजो।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> अनपेक्षित failures और दुर्लभ domain violations के लिए exceptions use करो; "not found" जैसे आम नतीजों के लिए सादा <code>NotFound()</code> result throw करने से सस्ता और साफ़ है। हर action में try/catch से एक global handler बेहतर है, पर bugs छुपाओ मत: हर unhandled exception को trace id के साथ एक बार log करो।</p>`,
        hg: `<p><b>Analogy — bank counter ki parchi:</b> form galat bharo to clerk use theek unhi galat fields par laal gole lagakar lautata hai (<b>validation, field names ke saath 400</b>). Bank ka computer crash ho to aapko error log nahi milta; ek standard "humein khed hai, reference number 123" notice milta hai (trace id ke saath <b>ProblemDetails</b>), aur engineers log padhte hain.</p>
<ul>
<li><b>Validation</b>: DTO par DataAnnotations; <code>[ApiController]</code> ek automatic filter jodta hai jo action body chalne se pehle <code>ValidationProblemDetails</code> ke saath <code>400</code> lautata hai (field ke naam se bana <code>errors</code> dictionary). Ise <code>ApiBehaviorOptions.SuppressModelStateInvalidFilter</code> se band kar sakte ho.</li>
<li><b>Validation ki seemayein</b>: attributes shape ke liye achhe hain (required, range, length). Jin rules ko database chahiye ("email pehle se used hai") ya cross-field logic, woh service ya <b>FluentValidation</b> jaisi library mein jaate hain (optional, third-party); phir service jaanbujhkar 409 ya 422 lautati hai.</li>
<li><b>Minimal APIs</b> .NET 10 se pehle DataAnnotations apne-aap validate nahi karti thi. .NET 10 par <code>builder.Services.AddValidation()</code> bulate ho aur parameters va record types ke attributes se 400 milta hai (What's new section ka version note dekho).</li>
<li><b>Global exceptions</b>: <code>AddProblemDetails()</code> woh service register karta hai jo RFC 9457 JSON likhti hai. <code>AddExceptionHandler&lt;T&gt;()</code> handler register karta hai. <code>UseExceptionHandler()</code> (pipeline mein sabse pehle) hi aapke handlers ko registration order mein <b>bulata</b> hai jab tak koi <code>true</code> na lautaye. Koi handler match na kare to <code>AddProblemDetails</code> ke saath <code>UseExceptionHandler()</code> ek general 500 ProblemDetails likhta hai.</li>
<li><b>Handler ke niyam</b>: poora response likhne ke baad hi <code>true</code> lautao; exception aage badhane ke liye <code>false</code>. Handler register karke <code>UseExceptionHandler</code> na bulao to kuch nahi hota (Day 12).</li>
<li><b>Safety</b>: jaane-pehchaane domain exceptions (not found, conflict) ko safe title ke saath 404/409 se map karo; baaki sabke liye general 500 lautao aur details log karo. Development ke baahar <code>ex.Message</code> ya stack traces clients ko mat bhejo.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> anapekshit failures aur durlabh domain violations ke liye exceptions use karo; "not found" jaise aam nateejon ke liye saada <code>NotFound()</code> result throw karne se sasta aur saaf hai. Har action mein try/catch se ek global handler behtar hai, par bugs chhupao mat: har unhandled exception ko trace id ke saath ek baar log karo.</p>`
      },
      code: [
        {
          caption: {
            en: "IExceptionHandler writing ProblemDetails, wired with UseExceptionHandler (compile-checked, not run)",
            hi: "IExceptionHandler जो ProblemDetails लिखता है, UseExceptionHandler से जुड़ा (compile-checked, run नहीं)",
            hg: "IExceptionHandler jo ProblemDetails likhta hai, UseExceptionHandler se juda (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.ComponentModel.DataAnnotations;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddProblemDetails();                      // the service that writes RFC 9457 JSON
builder.Services.AddExceptionHandler<DomainExceptionHandler>();

var app = builder.Build();
app.UseExceptionHandler();                                 // first: this is what CALLS the handler
app.MapControllers();
app.Run();

public class NotFoundException(string what) : Exception(what);
public class ConflictException(string what) : Exception(what);

public sealed class DomainExceptionHandler(IProblemDetailsService problems, ILogger<DomainExceptionHandler> logger)
    : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(HttpContext context, Exception exception, CancellationToken ct)
    {
        var (status, title) = exception switch
        {
            NotFoundException => (StatusCodes.Status404NotFound, "Resource not found"),
            ConflictException => (StatusCodes.Status409Conflict, "Conflict with current state"),
            _ => (0, "")
        };
        if (status == 0) return false;   // not ours: the fallback writes a generic 500 and logs it

        logger.LogWarning(exception, "Handled {Kind}", exception.GetType().Name);
        context.Response.StatusCode = status;
        return await problems.TryWriteAsync(new ProblemDetailsContext
        {
            HttpContext = context,
            Exception = exception,
            ProblemDetails = { Status = status, Title = title }   // no ex.Message: it may leak internals
        });
    }
}

// Validation: [ApiController] returns 400 + ValidationProblemDetails automatically.
public class NewProduct
{
    [Required, StringLength(50, MinimumLength = 2)] public string Name { get; set; } = "";
    [Range(1, 100_000)] public decimal Price { get; set; }
}

[ApiController]
[Route("api/products")]
public class ProductsController : ControllerBase
{
    [HttpPost]
    public IActionResult Create(NewProduct product)   // no ModelState.IsValid check needed
    {
        if (product.Name == "duplicate") throw new ConflictException("Product exists");
        return Created("/api/products/1", product);
    }
}`
        }
      ]
    },
    {
      id: "versioning-auth-cors-in-code",
      depth: "detailed",
      title: {
        en: "Versioning, JWT bearer, policies and CORS in code",
        hi: "Versioning, JWT bearer, policies और CORS code में",
        hg: "Versioning, JWT bearer, policies aur CORS code mein"
      },
      body: {
        en: `<p><b>Analogy — a wedding venue gate:</b> the guard at the gate checks the invitation card (<b>JWT</b>: is the signature genuine, is it for this wedding, has it expired?). Inside, a colour-coded wristband decides who may enter the kitchen or the stage (<b>policies and claims</b>). The card itself is printed openly: anyone holding it can read the names on it (<b>signed, not encrypted</b>). Meanwhile guests from the neighbouring hall are stopped by the <i>venue's own staff</i> (the browser, <b>CORS</b>), but a delivery man walking in from the back lane is not stopped by that rule at all.</p>
<ul>
<li><b>JWT bearer</b>: install <code>Microsoft.AspNetCore.Authentication.JwtBearer</code>; <code>AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(...)</code>. Normally set <code>Authority</code> (the identity provider's metadata supplies the public signing keys) and <code>Audience</code>. Validated by default: signature, issuer, audience, lifetime. A token signed with a shared secret (HMAC) means the API holds the secret; an identity provider that signs with a private key (RSA/ECDSA) lets the API verify with the public key only.</li>
<li><b>Tokens</b>: access token = short-lived (minutes), sent on every call; <b>refresh token</b> = long-lived, stored server-side, rotated on use, sent only to the token endpoint. A JWT cannot be revoked before it expires (unless you add a deny-list check), which is why lifetimes are short. Do not put secrets in the payload and keep tokens out of URLs.</li>
<li><b>OAuth 2.0 vs OpenID Connect</b>: OAuth 2.0 answers "may this app call this API for this user?" (access token). OpenID Connect adds "who signed in?" (ID token + user info). Authorization code flow with PKCE suits SPAs and mobile apps; client credentials suits service-to-service. Your API validates <b>access tokens</b>; ID tokens are for the client app.</li>
<li><b>Authorization</b>: <code>[Authorize]</code> = must be authenticated; <code>[Authorize(Roles = "Admin")]</code> = role check; <b>policies</b> = named rules, e.g. <code>RequireClaim("scope", "orders.write")</code> or a custom <code>IAuthorizationHandler</code> for resource-based rules ("only the owner"). Missing/invalid token gives 401; valid token without permission gives 403 (Day 12).</li>
<li><b>CORS</b>: <code>AddCors</code> defines a named policy (<code>WithOrigins</code>, <code>WithMethods</code>, <code>WithHeaders</code>); <code>UseCors("name")</code> goes after routing and before authentication, so a preflight (no credentials) is answered before auth runs. <code>AllowAnyOrigin()</code> cannot be combined with <code>AllowCredentials()</code>.</li>
<li><b>Versioning</b>: the <code>Asp.Versioning.Http</code> and <code>Asp.Versioning.Mvc</code> packages (they replaced the older <code>Microsoft.AspNetCore.Mvc.Versioning</code>). <code>ReportApiVersions</code> adds <code>api-supported-versions</code> and <code>api-deprecated-versions</code> response headers. Strategy trade-offs: URL segment = most visible and easy to test in a browser; header or media type = clean URLs but harder to test and cache; query string = simple, easy to forget.</li>
</ul>
<p><b>When to use / when not:</b> use JWT bearer for APIs called by SPAs, mobile apps and other services; prefer an existing identity provider over writing your own token server. For a browser-only app on the same site, secure cookies can be simpler and safer. Version by URL for public APIs with many unknown clients; for a private API with one client, avoid version sprawl and evolve additively instead.</p>`,
        hi: `<p><b>Analogy — शादी के venue का gate:</b> gate का guard invitation card जाँचता है (<b>JWT</b>: signature असली है, इसी शादी का है, expire तो नहीं हुआ?)। अंदर रंगीन wristband तय करता है कि किचन या stage पर कौन जा सकता है (<b>policies और claims</b>)। card खुला छपा होता है: जिसके हाथ में है वह उस पर लिखे नाम पढ़ सकता है (<b>signed, encrypted नहीं</b>)। उधर पड़ोस के hall के मेहमानों को <i>venue का अपना staff</i> (browser, <b>CORS</b>) रोकता है, पर पिछली गली से आता delivery वाला उस नियम से बिल्कुल नहीं रुकता।</p>
<ul>
<li><b>JWT bearer</b>: <code>Microsoft.AspNetCore.Authentication.JwtBearer</code> install करो; <code>AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(...)</code>। आमतौर पर <code>Authority</code> (identity provider का metadata public signing keys देता है) और <code>Audience</code> set करते हैं। Default में validate होता है: signature, issuer, audience, lifetime। shared secret (HMAC) से signed token का मतलब API के पास secret है; private key (RSA/ECDSA) से sign करने वाला identity provider API को सिर्फ़ public key से verify करने देता है।</li>
<li><b>Tokens</b>: access token = छोटी उम्र (minutes), हर call पर भेजा जाता है; <b>refresh token</b> = लंबी उम्र, server-side रखा जाता है, use पर rotate होता है, सिर्फ़ token endpoint को भेजा जाता है। JWT expire होने से पहले revoke नहीं हो सकता (जब तक deny-list check न जोड़ो), इसीलिए lifetime छोटी रखते हैं। payload में secrets मत रखो और tokens को URLs से बाहर रखो।</li>
<li><b>OAuth 2.0 vs OpenID Connect</b>: OAuth 2.0 जवाब देता है "क्या यह app इस user के लिए इस API को बुला सकती है?" (access token)। OpenID Connect जोड़ता है "किसने sign-in किया?" (ID token + user info)। SPAs और mobile apps के लिए PKCE वाला authorization code flow; service-to-service के लिए client credentials। आपकी API <b>access tokens</b> validate करती है; ID tokens client app के लिए हैं।</li>
<li><b>Authorization</b>: <code>[Authorize]</code> = authenticated होना ज़रूरी; <code>[Authorize(Roles = "Admin")]</code> = role check; <b>policies</b> = नाम वाले rules, जैसे <code>RequireClaim("scope", "orders.write")</code> या resource-based rules ("सिर्फ़ owner") के लिए custom <code>IAuthorizationHandler</code>। Token न हो या invalid हो तो 401; valid token पर permission न हो तो 403 (Day 12)।</li>
<li><b>CORS</b>: <code>AddCors</code> नाम वाली policy बनाता है (<code>WithOrigins</code>, <code>WithMethods</code>, <code>WithHeaders</code>); <code>UseCors("name")</code> routing के बाद और authentication से पहले आता है, ताकि preflight (बिना credentials) का जवाब auth चलने से पहले मिल जाए। <code>AllowAnyOrigin()</code> को <code>AllowCredentials()</code> के साथ नहीं जोड़ सकते।</li>
<li><b>Versioning</b>: <code>Asp.Versioning.Http</code> और <code>Asp.Versioning.Mvc</code> packages (इन्होंने पुराने <code>Microsoft.AspNetCore.Mvc.Versioning</code> की जगह ली)। <code>ReportApiVersions</code> response में <code>api-supported-versions</code> और <code>api-deprecated-versions</code> headers जोड़ता है। Strategy trade-offs: URL segment = सबसे दिखने वाला और browser में test करना आसान; header या media type = साफ़ URLs पर test और cache करना कठिन; query string = सरल, पर भूलना आसान।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> SPAs, mobile apps और दूसरी services से बुलाई जाने वाली APIs के लिए JWT bearer use करो; अपना token server लिखने की जगह मौजूदा identity provider चुनो। उसी site की सिर्फ़-browser app के लिए secure cookies सरल और सुरक्षित हो सकती हैं। बहुत सारे अनजान clients वाली public APIs के लिए URL से version करो; एक client वाली private API में version की भरमार से बचो और बदलाव additive रखो।</p>`,
        hg: `<p><b>Analogy — shaadi ke venue ka gate:</b> gate ka guard invitation card jaanchta hai (<b>JWT</b>: signature asli hai, isi shaadi ka hai, expire to nahi hua?). Andar rangeen wristband tay karta hai ki kitchen ya stage par kaun ja sakta hai (<b>policies aur claims</b>). Card khula chhapa hota hai: jiske haath mein hai woh us par likhe naam padh sakta hai (<b>signed, encrypted nahi</b>). Udhar padosi hall ke mehmaanon ko <i>venue ka apna staff</i> (browser, <b>CORS</b>) rokta hai, par pichhli gali se aata delivery wala us niyam se bilkul nahi rukta.</p>
<ul>
<li><b>JWT bearer</b>: <code>Microsoft.AspNetCore.Authentication.JwtBearer</code> install karo; <code>AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(...)</code>. Aamtaur par <code>Authority</code> (identity provider ka metadata public signing keys deta hai) aur <code>Audience</code> set karte hain. Default mein validate hota hai: signature, issuer, audience, lifetime. Shared secret (HMAC) se signed token ka matlab API ke paas secret hai; private key (RSA/ECDSA) se sign karne wala identity provider API ko sirf public key se verify karne deta hai.</li>
<li><b>Tokens</b>: access token = chhoti umr (minutes), har call par bheja jaata hai; <b>refresh token</b> = lambi umr, server-side rakha jaata hai, use par rotate hota hai, sirf token endpoint ko bheja jaata hai. JWT expire hone se pehle revoke nahi ho sakta (jab tak deny-list check na jodo), isiliye lifetime chhoti rakhte hain. Payload mein secrets mat rakho aur tokens ko URLs se baahar rakho.</li>
<li><b>OAuth 2.0 vs OpenID Connect</b>: OAuth 2.0 jawab deta hai "kya yeh app is user ke liye is API ko bula sakti hai?" (access token). OpenID Connect jodta hai "kisne sign-in kiya?" (ID token + user info). SPAs aur mobile apps ke liye PKCE wala authorization code flow; service-to-service ke liye client credentials. Aapki API <b>access tokens</b> validate karti hai; ID tokens client app ke liye hain.</li>
<li><b>Authorization</b>: <code>[Authorize]</code> = authenticated hona zaroori; <code>[Authorize(Roles = "Admin")]</code> = role check; <b>policies</b> = naam wale rules, jaise <code>RequireClaim("scope", "orders.write")</code> ya resource-based rules ("sirf owner") ke liye custom <code>IAuthorizationHandler</code>. Token na ho ya invalid ho to 401; valid token par permission na ho to 403 (Day 12).</li>
<li><b>CORS</b>: <code>AddCors</code> naam wali policy banata hai (<code>WithOrigins</code>, <code>WithMethods</code>, <code>WithHeaders</code>); <code>UseCors("name")</code> routing ke baad aur authentication se pehle aata hai, taaki preflight (bina credentials) ka jawab auth chalne se pehle mil jaye. <code>AllowAnyOrigin()</code> ko <code>AllowCredentials()</code> ke saath nahi jod sakte.</li>
<li><b>Versioning</b>: <code>Asp.Versioning.Http</code> aur <code>Asp.Versioning.Mvc</code> packages (inhone purane <code>Microsoft.AspNetCore.Mvc.Versioning</code> ki jagah li). <code>ReportApiVersions</code> response mein <code>api-supported-versions</code> aur <code>api-deprecated-versions</code> headers jodta hai. Strategy trade-offs: URL segment = sabse dikhne wala aur browser mein test karna aasaan; header ya media type = saaf URLs par test aur cache karna kathin; query string = saral, par bhoolna aasaan.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> SPAs, mobile apps aur doosri services se bulayi jaane wali APIs ke liye JWT bearer use karo; apna token server likhne ki jagah maujooda identity provider chuno. Usi site ki sirf-browser app ke liye secure cookies saral aur surakshit ho sakti hain. Bahut saare anjaan clients wali public APIs ke liye URL se version karo; ek client wali private API mein version ki bharmaar se bacho aur badlaav additive rakho.</p>`
      },
      code: [
        {
          caption: {
            en: "Asp.Versioning: URL-segment versions on controllers (not compile-checked: Asp.Versioning is a third-party package outside the checker's net9 package set; shows the API shape)",
            hi: "Asp.Versioning: controllers पर URL-segment versions (compile-checked नहीं: Asp.Versioning third-party package है, checker के net9 packages में नहीं; API की shape दिखाता है)",
            hg: "Asp.Versioning: controllers par URL-segment versions (compile-checked nahi: Asp.Versioning third-party package hai, checker ke net9 packages mein nahi; API ki shape dikhata hai)"
          },
          check: "none",
          src: `// dotnet add package Asp.Versioning.Mvc
// (Minimal APIs: Asp.Versioning.Http; OpenAPI integration: Asp.Versioning.Mvc.ApiExplorer)
using Asp.Versioning;

builder.Services
    .AddApiVersioning(options =>
    {
        options.DefaultApiVersion = new ApiVersion(1, 0);
        options.AssumeDefaultVersionWhenUnspecified = true;
        options.ReportApiVersions = true;   // adds api-supported-versions / api-deprecated-versions headers
        options.ApiVersionReader = ApiVersionReader.Combine(
            new UrlSegmentApiVersionReader(),            // /api/v2/orders
            new HeaderApiVersionReader("X-Api-Version")); // or a header
    })
    .AddMvc();

[ApiController]
[ApiVersion("1.0", Deprecated = true)]
[ApiVersion("2.0")]
[Route("api/v{version:apiVersion}/orders")]
public class OrdersController : ControllerBase
{
    [HttpGet, MapToApiVersion("1.0")] public string GetV1() => "v1: flat list";
    [HttpGet, MapToApiVersion("2.0")] public string GetV2() => "v2: paged list";
}`
        },
        {
          caption: {
            en: "JWT bearer, a scope policy, and CORS in the right order (compile-checked, not run)",
            hi: "JWT bearer, एक scope policy, और सही order में CORS (compile-checked, run नहीं)",
            hg: "JWT bearer, ek scope policy, aur sahi order mein CORS (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          packages: ["Microsoft.AspNetCore.Authentication.JwtBearer"],
          src: `using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        // The identity provider's metadata supplies the public signing keys.
        options.Authority = builder.Configuration["Auth:Authority"];
        options.Audience = builder.Configuration["Auth:Audience"];
        // Signature, issuer, audience and lifetime are validated by default.
    });

builder.Services.AddAuthorizationBuilder()
    .AddPolicy("CanWriteOrders", p => p.RequireAuthenticatedUser().RequireClaim("scope", "orders.write"));

builder.Services.AddCors(o => o.AddPolicy("shop-web", p => p
    .WithOrigins("https://shop.example.com")
    .WithMethods("GET", "POST", "PUT", "DELETE")
    .WithHeaders("Authorization", "Content-Type")));

var app = builder.Build();

app.UseRouting();
app.UseCors("shop-web");       // before authentication: a preflight carries no token
app.UseAuthentication();       // reads the bearer token, sets HttpContext.User
app.UseAuthorization();        // 401 if not authenticated, 403 if the policy fails

app.MapGet("/orders", () => Results.Ok(new[] { "o1", "o2" })).RequireAuthorization();
app.MapPost("/orders", () => Results.Created("/orders/3", null)).RequireAuthorization("CanWriteOrders");

app.Run();`
        }
      ]
    },
    {
      id: "caching-ratelimit-in-code",
      depth: "detailed",
      title: {
        en: "Caching and rate limiting in code",
        hi: "Caching और rate limiting code में",
        hg: "Caching aur rate limiting code mein"
      },
      body: {
        en: `<p><b>Analogy — a sweet shop on Diwali:</b> the most-asked sweets (<b>cache</b>) are packed in boxes at the counter, so the staff do not cook for every customer. A board says "one box per family per visit" (<b>rate limit</b>). If the recipe changes, the old boxes are removed together (<b>tag eviction</b>). And a regular customer asks "has the menu changed since my copy?" (<b>ETag</b>); the shop says "no, same as before" (<b>304</b>) without handing over the whole list again.</p>
<ul>
<li><b>Response caching</b> (<code>AddResponseCaching</code>/<code>UseResponseCaching</code>, <code>[ResponseCache]</code>): driven by HTTP headers; <code>[ResponseCache]</code> mainly sets <code>Cache-Control</code> for clients and proxies. The server-side middleware honours client request headers such as <code>Cache-Control: no-cache</code>, so you do not fully control it. Put <code>UseCors</code> before it.</li>
<li><b>Output caching</b> (.NET 7+, <code>AddOutputCache</code>/<code>UseOutputCache</code>, <code>CacheOutput()</code> or <code>[OutputCache]</code>): <i>the server</i> decides. Named policies, vary by query or header, <b>tag-based eviction</b> with <code>IOutputCacheStore.EvictByTagAsync</code>. The default policy caches only successful GET/HEAD responses and skips responses that set cookies or answer authenticated requests. Call <code>UseOutputCache</code> after <code>UseCors</code>.</li>
<li><b>IMemoryCache</b>: in-process, fastest, but each server instance has its own copy and a restart empties it. <b>IDistributedCache</b>: shared (Redis, SQL Server), you serialize, no stampede protection.</li>
<li><b>HybridCache</b> (package <code>Microsoft.Extensions.Caching.Hybrid</code>, documented for .NET 9 and later): one <code>GetOrCreateAsync(key, factory)</code> call. L1 in-memory plus an optional L2 distributed cache; concurrent callers for one key share a single factory call (<b>stampede protection</b>); tags for invalidation. Without an <code>IDistributedCache</code> it still caches in-process.</li>
<li><b>ETag</b>: send <code>ETag</code> on GET; the client replays it in <code>If-None-Match</code>; unchanged resource gives <b>304 Not Modified</b>, no body. For writes, <code>If-Match</code> mismatch gives <b>412</b> (Day 6 row version is the usual source of the tag).</li>
<li><b>Rate limiting</b>: <code>AddRateLimiter</code> + <code>UseRateLimiter</code> + <code>RequireRateLimiting("policy")</code> (or <code>[EnableRateLimiting]</code>). <b>Fixed window</b> = N per window (burst at the boundary); <b>sliding window</b> = smoother; <b>token bucket</b> = allows bursts, refills steadily; <b>concurrency</b> = N in flight at once. Default rejection is <b>503</b>; set <code>RejectionStatusCode = 429</code> and add <code>Retry-After</code> in <code>OnRejected</code> if you can.</li>
<li><b>Traps</b>: limiter state lives in each server's memory, so N servers allow roughly N times the limit unless you add a shared gateway limit. Behind a proxy, <code>RemoteIpAddress</code> is the proxy unless forwarded headers are configured. Do not partition by raw user input: each key allocates a limiter.</li>
</ul>
<p><b>When to use / when not:</b> output-cache public, read-heavy, rarely changing GET endpoints (catalogue, config). Use HybridCache inside services for expensive lookups. Do not cache user-specific data under a shared key, and do not cache writes. Use rate limiting on login, search and any expensive endpoint; for global protection against floods use a gateway or WAF in front, because per-process limiters are not a DDoS defence.</p>`,
        hi: `<p><b>Analogy — दिवाली पर मिठाई की दुकान:</b> सबसे ज़्यादा माँगी जाने वाली मिठाइयाँ (<b>cache</b>) counter पर डिब्बों में पैक रखी हैं, ताकि हर ग्राहक के लिए नया न बनाना पड़े। board कहता है "एक visit में एक परिवार को एक डिब्बा" (<b>rate limit</b>)। recipe बदले तो पुराने डिब्बे एक साथ हटाए जाते हैं (<b>tag eviction</b>)। और नियमित ग्राहक पूछता है "मेरी copy के बाद menu बदला क्या?" (<b>ETag</b>); दुकान कहती है "नहीं, पहले जैसा" (<b>304</b>), पूरी list दोबारा थमाए बिना।</p>
<ul>
<li><b>Response caching</b> (<code>AddResponseCaching</code>/<code>UseResponseCaching</code>, <code>[ResponseCache]</code>): HTTP headers से चलता है; <code>[ResponseCache]</code> मुख्यतः clients और proxies के लिए <code>Cache-Control</code> set करता है। server-side middleware client के request headers (जैसे <code>Cache-Control: no-cache</code>) को मानता है, इसलिए आपका पूरा control नहीं रहता। <code>UseCors</code> इससे पहले रखो।</li>
<li><b>Output caching</b> (.NET 7+, <code>AddOutputCache</code>/<code>UseOutputCache</code>, <code>CacheOutput()</code> या <code>[OutputCache]</code>): <i>server</i> फ़ैसला करता है। Named policies, query या header से vary, <code>IOutputCacheStore.EvictByTagAsync</code> से <b>tag-based eviction</b>। Default policy सिर्फ़ सफल GET/HEAD responses cache करती है और cookies set करने वाले या authenticated requests के responses छोड़ देती है। <code>UseOutputCache</code> को <code>UseCors</code> के बाद बुलाओ।</li>
<li><b>IMemoryCache</b>: in-process, सबसे तेज़, पर हर server instance की अपनी copy होती है और restart पर ख़ाली हो जाता है। <b>IDistributedCache</b>: shared (Redis, SQL Server), serialize आप करते हो, stampede protection नहीं।</li>
<li><b>HybridCache</b> (package <code>Microsoft.Extensions.Caching.Hybrid</code>, .NET 9 और बाद के लिए documented): एक <code>GetOrCreateAsync(key, factory)</code> call। L1 in-memory और optional L2 distributed cache; एक key के concurrent callers एक ही factory call साझा करते हैं (<b>stampede protection</b>); invalidation के लिए tags। <code>IDistributedCache</code> न हो तो भी in-process cache करता है।</li>
<li><b>ETag</b>: GET पर <code>ETag</code> भेजो; client उसे <code>If-None-Match</code> में लौटाता है; resource न बदला हो तो <b>304 Not Modified</b>, बिना body। writes पर <code>If-Match</code> mismatch से <b>412</b> (tag का आम स्रोत Day 6 का row version है)।</li>
<li><b>Rate limiting</b>: <code>AddRateLimiter</code> + <code>UseRateLimiter</code> + <code>RequireRateLimiting("policy")</code> (या <code>[EnableRateLimiting]</code>)। <b>Fixed window</b> = हर window में N (boundary पर burst); <b>sliding window</b> = ज़्यादा smooth; <b>token bucket</b> = burst की इजाज़त, लगातार refill; <b>concurrency</b> = एक साथ N चलते हुए। Default rejection <b>503</b> है; <code>RejectionStatusCode = 429</code> set करो और हो सके तो <code>OnRejected</code> में <code>Retry-After</code> जोड़ो।</li>
<li><b>Traps</b>: limiter की state हर server की memory में रहती है, इसलिए N servers लगभग N गुना limit देते हैं जब तक shared gateway limit न जोड़ो। Proxy के पीछे forwarded headers configure न हों तो <code>RemoteIpAddress</code> proxy का होता है। raw user input से partition मत करो: हर key एक limiter बनाती है।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> public, read-heavy, कम बदलने वाले GET endpoints (catalogue, config) को output-cache करो। महँगे lookups के लिए services के अंदर HybridCache use करो। user-specific data को shared key पर cache मत करो, और writes cache मत करो। login, search और हर महँगे endpoint पर rate limiting लगाओ; बाढ़ से global बचाव के लिए आगे gateway या WAF लगाओ, क्योंकि per-process limiters DDoS का बचाव नहीं हैं।</p>`,
        hg: `<p><b>Analogy — Diwali par mithai ki dukaan:</b> sabse zyaada maangi jaane wali mithaiyan (<b>cache</b>) counter par dibbon mein pack rakhi hain, taaki har grahak ke liye nayi na banani pade. Board kehta hai "ek visit mein ek parivaar ko ek dibba" (<b>rate limit</b>). Recipe badle to purane dibbe ek saath hataye jaate hain (<b>tag eviction</b>). Aur niyamit grahak poochta hai "meri copy ke baad menu badla kya?" (<b>ETag</b>); dukaan kehti hai "nahi, pehle jaisa" (<b>304</b>), poori list dobara thamaye bina.</p>
<ul>
<li><b>Response caching</b> (<code>AddResponseCaching</code>/<code>UseResponseCaching</code>, <code>[ResponseCache]</code>): HTTP headers se chalta hai; <code>[ResponseCache]</code> mukhyatah clients aur proxies ke liye <code>Cache-Control</code> set karta hai. Server-side middleware client ke request headers (jaise <code>Cache-Control: no-cache</code>) ko maanta hai, isliye aapka poora control nahi rehta. <code>UseCors</code> isse pehle rakho.</li>
<li><b>Output caching</b> (.NET 7+, <code>AddOutputCache</code>/<code>UseOutputCache</code>, <code>CacheOutput()</code> ya <code>[OutputCache]</code>): <i>server</i> faisla karta hai. Named policies, query ya header se vary, <code>IOutputCacheStore.EvictByTagAsync</code> se <b>tag-based eviction</b>. Default policy sirf safal GET/HEAD responses cache karti hai aur cookies set karne wale ya authenticated requests ke responses chhod deti hai. <code>UseOutputCache</code> ko <code>UseCors</code> ke baad bulao.</li>
<li><b>IMemoryCache</b>: in-process, sabse tez, par har server instance ki apni copy hoti hai aur restart par khaali ho jaata hai. <b>IDistributedCache</b>: shared (Redis, SQL Server), serialize aap karte ho, stampede protection nahi.</li>
<li><b>HybridCache</b> (package <code>Microsoft.Extensions.Caching.Hybrid</code>, .NET 9 aur baad ke liye documented): ek <code>GetOrCreateAsync(key, factory)</code> call. L1 in-memory aur optional L2 distributed cache; ek key ke concurrent callers ek hi factory call saajha karte hain (<b>stampede protection</b>); invalidation ke liye tags. <code>IDistributedCache</code> na ho to bhi in-process cache karta hai.</li>
<li><b>ETag</b>: GET par <code>ETag</code> bhejo; client use <code>If-None-Match</code> mein lautata hai; resource na badla ho to <b>304 Not Modified</b>, bina body. Writes par <code>If-Match</code> mismatch se <b>412</b> (tag ka aam source Day 6 ka row version hai).</li>
<li><b>Rate limiting</b>: <code>AddRateLimiter</code> + <code>UseRateLimiter</code> + <code>RequireRateLimiting("policy")</code> (ya <code>[EnableRateLimiting]</code>). <b>Fixed window</b> = har window mein N (boundary par burst); <b>sliding window</b> = zyaada smooth; <b>token bucket</b> = burst ki ijazat, lagaatar refill; <b>concurrency</b> = ek saath N chalte hue. Default rejection <b>503</b> hai; <code>RejectionStatusCode = 429</code> set karo aur ho sake to <code>OnRejected</code> mein <code>Retry-After</code> jodo.</li>
<li><b>Traps</b>: limiter ki state har server ki memory mein rehti hai, isliye N servers lagbhag N guna limit dete hain jab tak shared gateway limit na jodo. Proxy ke peeche forwarded headers configure na hon to <code>RemoteIpAddress</code> proxy ka hota hai. Raw user input se partition mat karo: har key ek limiter banati hai.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> public, read-heavy, kam badalne wale GET endpoints (catalogue, config) ko output-cache karo. Mehnge lookups ke liye services ke andar HybridCache use karo. User-specific data ko shared key par cache mat karo, aur writes cache mat karo. Login, search aur har mehnge endpoint par rate limiting lagao; baadh se global bachaav ke liye aage gateway ya WAF lagao, kyunki per-process limiters DDoS ka bachaav nahi hain.</p>`
      },
      code: [
        {
          caption: {
            en: "Output cache with tag eviction, rate-limit policies (429), and a manual ETag (compile-checked, not run)",
            hi: "tag eviction वाला output cache, rate-limit policies (429), और हाथ से ETag (compile-checked, run नहीं)",
            hg: "tag eviction wala output cache, rate-limit policies (429), aur haath se ETag (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using System.Threading.RateLimiting;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.OutputCaching;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOutputCache(o =>
    o.AddPolicy("Catalogue", p => p.Expire(TimeSpan.FromSeconds(30)).Tag("catalogue")));

builder.Services.AddRateLimiter(o =>
{
    o.RejectionStatusCode = StatusCodes.Status429TooManyRequests;   // default would be 503
    o.AddFixedWindowLimiter("search", x =>
    {
        x.PermitLimit = 10;
        x.Window = TimeSpan.FromSeconds(10);
        x.QueueLimit = 0;
    });
    o.AddPolicy("per-user", ctx => RateLimitPartition.GetTokenBucketLimiter(
        ctx.User.Identity?.Name ?? "anonymous",
        _ => new TokenBucketRateLimiterOptions
        {
            TokenLimit = 20,                      // burst size
            TokensPerPeriod = 5,                  // refill
            ReplenishmentPeriod = TimeSpan.FromSeconds(10),
            QueueLimit = 0
        }));
});

var app = builder.Build();

app.UseRouting();
app.UseRateLimiter();   // after UseRouting because endpoint policies are used
app.UseOutputCache();   // after UseCors if you use CORS

app.MapGet("/products", () => Results.Ok(new[] { "tea", "coffee" })).CacheOutput("Catalogue");
app.MapPost("/products", async (IOutputCacheStore cache, CancellationToken ct) =>
{
    await cache.EvictByTagAsync("catalogue", ct);   // data changed: drop cached lists together
    return Results.NoContent();
});
app.MapGet("/search", (string q) => Results.Ok(q)).RequireRateLimiting("search");

var version = 1;   // stand-in for a row version (Day 6)
app.MapGet("/profile", (HttpContext ctx) =>
{
    var etag = $"\\"v{version}\\"";
    ctx.Response.Headers.ETag = etag;
    return ctx.Request.Headers.IfNoneMatch == etag
        ? Results.StatusCode(StatusCodes.Status304NotModified)
        : Results.Ok(new { name = "Asha", version });
});

app.Run();`
        },
        {
          caption: {
            en: "HybridCache: one call, stampede-safe (compile-checked, not run)",
            hi: "HybridCache: एक call, stampede-safe (compile-checked, run नहीं)",
            hg: "HybridCache: ek call, stampede-safe (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          packages: ["Microsoft.Extensions.Caching.Hybrid"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Caching.Hybrid;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddHybridCache(options =>
{
    options.DefaultEntryOptions = new HybridCacheEntryOptions
    {
        Expiration = TimeSpan.FromMinutes(5),            // shared (L2) lifetime
        LocalCacheExpiration = TimeSpan.FromMinutes(1)   // in-memory (L1) lifetime
    };
});
builder.Services.AddSingleton<PriceService>();

var app = builder.Build();
app.MapGet("/prices/{sku}", (string sku, PriceService svc, CancellationToken ct) => svc.GetPriceAsync(sku, ct));
app.Run();

public class PriceService(HybridCache cache)
{
    // If 100 requests ask for the same key at once, the factory runs once; the others wait for it.
    public ValueTask<decimal> GetPriceAsync(string sku, CancellationToken ct) =>
        cache.GetOrCreateAsync(
            $"price:{sku}",
            async token => { await Task.Delay(10, token); return 99.5m; },   // pretend database call
            cancellationToken: ct);
}`
        }
      ]
    },
    {
      id: "openapi-httpclient-in-code",
      depth: "detailed",
      title: {
        en: "OpenAPI and HttpClientFactory (with resilience) in code",
        hi: "OpenAPI और HttpClientFactory (resilience के साथ) code में",
        hg: "OpenAPI aur HttpClientFactory (resilience ke saath) code mein"
      },
      body: {
        en: `<p><b>Analogy — a restaurant menu and a delivery-boy pool:</b> the printed menu (<b>OpenAPI</b>) lets any customer or tool know what can be ordered without asking the chef. For calling <i>other</i> restaurants you do not send a new boy each time and you do not keep one boy forever on the same old route; you keep a small pool that is refreshed regularly (<b>HttpClientFactory</b>), and each boy knows to retry once, give up after a limit, and stop going to a closed shop (<b>resilience: retry, timeout, circuit breaker</b>).</p>
<ul>
<li><b>OpenAPI built in (.NET 9+)</b>: package <code>Microsoft.AspNetCore.OpenApi</code>; <code>builder.Services.AddOpenApi()</code> and <code>app.MapOpenApi()</code> serve the document at <code>/openapi/v1.json</code>. On .NET 10 the default is OpenAPI 3.1. The framework generates the <b>document only</b>; a UI is a separate choice (Swagger UI, Scalar).</li>
<li><b>Swashbuckle</b>: the older library that generated the document and bundled Swagger UI. The Web API template stopped including it from .NET 9, but the package still works; teams choose it for features or existing customisation. Clients (Postman, code generators) consume the same JSON either way.</li>
<li><b>Describe your responses</b>: <code>[ProducesResponseType]</code> / <code>TypedResults</code> / <code>.Produces&lt;T&gt;()</code> so the document lists 201, 404, 409 and not only 200. Treat the OpenAPI file as the contract: review it in pull requests to catch accidental breaking changes.</li>
<li><b>HttpClient problems</b>: <code>new HttpClient()</code> per request leaves sockets in TIME_WAIT, so under load you can run out (socket exhaustion; Day 3 trap). A single static client reuses connections but keeps them for ever, so a DNS change may be ignored.</li>
<li><b>IHttpClientFactory</b>: <code>AddHttpClient</code> pools and recycles the underlying handlers (default handler lifetime two minutes). <b>Named</b> clients: <code>factory.CreateClient("billing")</code>. <b>Typed</b> clients: <code>AddHttpClient&lt;BillingClient&gt;()</code>, the class receives an <code>HttpClient</code> in its constructor; this is the usual choice. Typed clients are transient, so do not hold one in a singleton for a long time.</li>
<li><b>Resilience</b>: package <code>Microsoft.Extensions.Http.Resilience</code>, <code>AddStandardResilienceHandler()</code> (.NET 8+). It stacks, outermost first: rate limiter, total timeout (30 s), retry (3 attempts, exponential backoff with jitter), circuit breaker, per-attempt timeout (10 s). Retries cover 5xx, 408 and 429 and network errors. The defaults retry every HTTP method, so for POST either call <code>options.Retry.DisableForUnsafeHttpMethods()</code> or make the call idempotent with an idempotency key.</li>
</ul>
<p><b>When to use / when not:</b> always use IHttpClientFactory (typed clients) in ASP.NET Core instead of creating clients by hand. Add the standard handler to any call to another service over a network; do not stack several resilience handlers on one client. Expose OpenAPI for any API with external consumers; for a tiny internal endpoint it can be skipped.</p>`,
        hi: `<p><b>Analogy — restaurant का menu और delivery-boy pool:</b> छपा हुआ menu (<b>OpenAPI</b>) हर ग्राहक या tool को बताता है कि क्या order हो सकता है, chef से पूछे बिना। <i>दूसरे</i> restaurants को बुलाने के लिए हर बार नया लड़का नहीं भेजते और एक ही लड़के को हमेशा उसी पुराने रास्ते पर नहीं रखते; एक छोटा pool रखते हैं जो समय-समय पर बदलता रहता है (<b>HttpClientFactory</b>), और हर लड़का जानता है कि एक बार retry करो, सीमा के बाद छोड़ दो, और बंद दुकान पर जाना रोक दो (<b>resilience: retry, timeout, circuit breaker</b>)।</p>
<ul>
<li><b>OpenAPI built-in (.NET 9+)</b>: package <code>Microsoft.AspNetCore.OpenApi</code>; <code>builder.Services.AddOpenApi()</code> और <code>app.MapOpenApi()</code> document को <code>/openapi/v1.json</code> पर देते हैं। .NET 10 में default OpenAPI 3.1 है। Framework सिर्फ़ <b>document</b> बनाता है; UI अलग चुनाव है (Swagger UI, Scalar)।</li>
<li><b>Swashbuckle</b>: पुरानी library जो document बनाती थी और Swagger UI साथ लाती थी। Web API template ने .NET 9 से इसे शामिल करना बंद किया, पर package अब भी चलता है; teams features या मौजूदा customisation के लिए इसे चुनती हैं। Clients (Postman, code generators) दोनों तरह वही JSON पढ़ते हैं।</li>
<li><b>Responses describe करो</b>: <code>[ProducesResponseType]</code> / <code>TypedResults</code> / <code>.Produces&lt;T&gt;()</code> ताकि document में सिर्फ़ 200 नहीं, 201, 404, 409 भी दिखें। OpenAPI file को contract मानो: अनजाने breaking changes पकड़ने के लिए pull requests में उसे review करो।</li>
<li><b>HttpClient की समस्याएँ</b>: हर request पर <code>new HttpClient()</code> sockets को TIME_WAIT में छोड़ता है, इसलिए load में sockets ख़त्म हो सकते हैं (socket exhaustion; Day 3 का trap)। एक static client connections reuse करता है पर उन्हें हमेशा रखता है, इसलिए DNS बदलाव अनदेखा हो सकता है।</li>
<li><b>IHttpClientFactory</b>: <code>AddHttpClient</code> अंदर के handlers को pool और recycle करता है (default handler lifetime दो मिनट)। <b>Named</b> clients: <code>factory.CreateClient("billing")</code>। <b>Typed</b> clients: <code>AddHttpClient&lt;BillingClient&gt;()</code>, class को constructor में <code>HttpClient</code> मिलता है; यही आम चुनाव है। Typed clients transient होते हैं, इसलिए उन्हें singleton में लंबे समय तक मत रखो।</li>
<li><b>Resilience</b>: package <code>Microsoft.Extensions.Http.Resilience</code>, <code>AddStandardResilienceHandler()</code> (.NET 8+)। यह सबसे बाहर से क्रम में जमाता है: rate limiter, total timeout (30 s), retry (3 attempts, jitter के साथ exponential backoff), circuit breaker, per-attempt timeout (10 s)। Retries 5xx, 408, 429 और network errors पर होते हैं। Defaults हर HTTP method को retry करते हैं, इसलिए POST के लिए या तो <code>options.Retry.DisableForUnsafeHttpMethods()</code> बुलाओ या idempotency key से call को idempotent बनाओ।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> ASP.NET Core में clients हाथ से बनाने की जगह हमेशा IHttpClientFactory (typed clients) use करो। network पर किसी दूसरी service को बुलाने वाली हर call में standard handler जोड़ो; एक client पर कई resilience handlers मत जमाओ। बाहरी users वाली हर API के लिए OpenAPI दो; एक छोटे internal endpoint के लिए छोड़ा जा सकता है।</p>`,
        hg: `<p><b>Analogy — restaurant ka menu aur delivery-boy pool:</b> chhapa hua menu (<b>OpenAPI</b>) har grahak ya tool ko batata hai ki kya order ho sakta hai, chef se poochhe bina. <i>Doosre</i> restaurants ko bulane ke liye har baar naya ladka nahi bhejte aur ek hi ladke ko hamesha usi purane raaste par nahi rakhte; ek chhota pool rakhte hain jo samay-samay par badalta rehta hai (<b>HttpClientFactory</b>), aur har ladka jaanta hai ki ek baar retry karo, seema ke baad chhod do, aur band dukaan par jaana rok do (<b>resilience: retry, timeout, circuit breaker</b>).</p>
<ul>
<li><b>OpenAPI built-in (.NET 9+)</b>: package <code>Microsoft.AspNetCore.OpenApi</code>; <code>builder.Services.AddOpenApi()</code> aur <code>app.MapOpenApi()</code> document ko <code>/openapi/v1.json</code> par dete hain. .NET 10 mein default OpenAPI 3.1 hai. Framework sirf <b>document</b> banata hai; UI alag chunaav hai (Swagger UI, Scalar).</li>
<li><b>Swashbuckle</b>: purani library jo document banati thi aur Swagger UI saath laati thi. Web API template ne .NET 9 se ise shaamil karna band kiya, par package ab bhi chalta hai; teams features ya maujooda customisation ke liye ise chunti hain. Clients (Postman, code generators) dono tarah wahi JSON padhte hain.</li>
<li><b>Responses describe karo</b>: <code>[ProducesResponseType]</code> / <code>TypedResults</code> / <code>.Produces&lt;T&gt;()</code> taaki document mein sirf 200 nahi, 201, 404, 409 bhi dikhein. OpenAPI file ko contract maano: anjaane breaking changes pakadne ke liye pull requests mein use review karo.</li>
<li><b>HttpClient ki samasyayein</b>: har request par <code>new HttpClient()</code> sockets ko TIME_WAIT mein chhodta hai, isliye load mein sockets khatam ho sakte hain (socket exhaustion; Day 3 ka trap). Ek static client connections reuse karta hai par unhe hamesha rakhta hai, isliye DNS badlaav andekha ho sakta hai.</li>
<li><b>IHttpClientFactory</b>: <code>AddHttpClient</code> andar ke handlers ko pool aur recycle karta hai (default handler lifetime do minute). <b>Named</b> clients: <code>factory.CreateClient("billing")</code>. <b>Typed</b> clients: <code>AddHttpClient&lt;BillingClient&gt;()</code>, class ko constructor mein <code>HttpClient</code> milta hai; yahi aam chunaav hai. Typed clients transient hote hain, isliye unhe singleton mein lambe samay tak mat rakho.</li>
<li><b>Resilience</b>: package <code>Microsoft.Extensions.Http.Resilience</code>, <code>AddStandardResilienceHandler()</code> (.NET 8+). Yeh sabse baahar se kram mein jamata hai: rate limiter, total timeout (30 s), retry (3 attempts, jitter ke saath exponential backoff), circuit breaker, per-attempt timeout (10 s). Retries 5xx, 408, 429 aur network errors par hote hain. Defaults har HTTP method ko retry karte hain, isliye POST ke liye ya to <code>options.Retry.DisableForUnsafeHttpMethods()</code> bulao ya idempotency key se call ko idempotent banao.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> ASP.NET Core mein clients haath se banane ki jagah hamesha IHttpClientFactory (typed clients) use karo. Network par kisi doosri service ko bulane wali har call mein standard handler jodo; ek client par kai resilience handlers mat jamao. Baahari users wali har API ke liye OpenAPI do; ek chhote internal endpoint ke liye chhoda ja sakta hai.</p>`
      },
      code: [
        {
          caption: {
            en: "Built-in OpenAPI document generation (compile-checked, not run)",
            hi: "Built-in OpenAPI document generation (compile-checked, run नहीं)",
            hg: "Built-in OpenAPI document generation (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          packages: ["Microsoft.AspNetCore.OpenApi"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddOpenApi();            // Microsoft.AspNetCore.OpenApi (built in since .NET 9)

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();                     // JSON document at /openapi/v1.json (a UI is a separate package)
}

app.MapGet("/orders/{id:int}", (int id) =>
        id == 1 ? TypedResults.Ok(new Order(1, "tea")) : (IResult)TypedResults.NotFound())
    .WithName("GetOrder")
    .WithSummary("Get one order")
    .Produces<Order>(StatusCodes.Status200OK)
    .Produces(StatusCodes.Status404NotFound);

app.Run();

public record Order(int Id, string Item);`
        },
        {
          caption: {
            en: "Typed HttpClient + standard resilience handler (compile-checked, not run)",
            hi: "Typed HttpClient + standard resilience handler (compile-checked, run नहीं)",
            hg: "Typed HttpClient + standard resilience handler (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          packages: ["Microsoft.Extensions.Http.Resilience"],
          src: `using System.Net.Http.Json;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Http.Resilience;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddHttpClient<BillingClient>(client => client.BaseAddress = new Uri("https://billing.internal/"))
    .AddStandardResilienceHandler(options =>
    {
        // Defaults: rate limiter, 30 s total timeout, 3 retries with backoff + jitter,
        // circuit breaker, 10 s per attempt. They retry every method, so protect POST:
        options.Retry.DisableForUnsafeHttpMethods();
    });

var app = builder.Build();
app.MapGet("/invoices/{id:int}", (int id, BillingClient billing, CancellationToken ct) => billing.GetInvoiceAsync(id, ct));
app.Run();

public record Invoice(int Id, decimal Total);

// Typed client: receives an HttpClient made by the factory (pooled, recycled handlers).
public class BillingClient(HttpClient http)
{
    public Task<Invoice?> GetInvoiceAsync(int id, CancellationToken ct) =>
        http.GetFromJsonAsync<Invoice>($"invoices/{id}", ct);
}`
        }
      ]
    }
  ],
  qa: [
    {
      id: "rest-principles",
      depth: "short",
      q: "What makes an API RESTful?",
      answer: "Resources identified by URLs, handled with standard HTTP verbs, stateless requests, and responses with proper status codes. Full REST adds hypermedia links (HATEOAS), which few APIs implement.",
      meaning: {
        hi: "Resources URLs से पहचाने जाते हैं, standard HTTP verbs से चलते हैं, requests stateless होती हैं, और सही status codes मिलते हैं। पूरा REST hypermedia links (HATEOAS) भी जोड़ता है, जो कम APIs करती हैं।",
        hg: "Resources URLs se pehchane jaate hain, standard HTTP verbs se chalte hain, requests stateless hoti hain, aur sahi status codes milte hain. Poora REST hypermedia links (HATEOAS) bhi jodta hai, jo kam APIs karti hain."
      },
      explain: {
        en: `<ul>
<li>Resource = noun in the URL (<code>/orders/42</code>); the verb is the HTTP method, not part of the path.</li>
<li><b>Stateless</b>: the server stores no client session between calls, so any instance can serve any request (easy scale-out).</li>
<li>Uniform interface: same verbs and status codes everywhere, so clients and tools behave predictably.</li>
<li>HATEOAS: links to next actions inside responses; most "REST" APIs are really HTTP + JSON APIs, and that is acceptable if the team is honest about it.</li>
<li>Follow-up: "Is REST a standard?" — it is an architectural style (Roy Fielding), not a protocol; HTTP is the protocol.</li>
<li>TL angle: agree conventions (naming, plural nouns, error format, paging) once in an API guideline and enforce them in review.</li>
</ul>`,
        hi: `<ul>
<li>Resource = URL में संज्ञा (<code>/orders/42</code>); verb HTTP method है, path का हिस्सा नहीं।</li>
<li><b>Stateless</b>: server calls के बीच client का session नहीं रखता, इसलिए कोई भी instance कोई भी request संभाल सकता है (scale-out आसान)।</li>
<li>Uniform interface: हर जगह वही verbs और status codes, इसलिए clients और tools का व्यवहार अनुमान योग्य रहता है।</li>
<li>HATEOAS: responses के अंदर अगले actions के links; ज़्यादातर "REST" APIs असल में HTTP + JSON APIs हैं, और team ईमानदार हो तो यह ठीक है।</li>
<li>Follow-up: "क्या REST एक standard है?" — यह architectural style है (Roy Fielding), protocol नहीं; protocol HTTP है।</li>
<li>TL angle: conventions (naming, plural nouns, error format, paging) एक बार API guideline में तय करो और review में लागू करो।</li>
</ul>`,
        hg: `<ul>
<li>Resource = URL mein noun (<code>/orders/42</code>); verb HTTP method hai, path ka hissa nahi.</li>
<li><b>Stateless</b>: server calls ke beech client ka session nahi rakhta, isliye koi bhi instance koi bhi request sambhal sakta hai (scale-out aasaan).</li>
<li>Uniform interface: har jagah wahi verbs aur status codes, isliye clients aur tools ka vyavhaar anumaan yogya rehta hai.</li>
<li>HATEOAS: responses ke andar agle actions ke links; zyaadatar "REST" APIs asal mein HTTP + JSON APIs hain, aur team imaandaar ho to yeh theek hai.</li>
<li>Follow-up: "Kya REST ek standard hai?" — yeh architectural style hai (Roy Fielding), protocol nahi; protocol HTTP hai.</li>
<li>TL angle: conventions (naming, plural nouns, error format, paging) ek baar API guideline mein tay karo aur review mein laagu karo.</li>
</ul>`
      }
    },
    {
      id: "verbs-safe-idempotent",
      depth: "short",
      q: "Which HTTP methods are safe and idempotent, and how do PUT, PATCH and POST differ?",
      answer: "GET, HEAD and OPTIONS are safe; those plus PUT and DELETE are idempotent. POST creates or triggers and is not idempotent; PUT replaces the whole resource; PATCH changes part of it.",
      meaning: {
        hi: "GET, HEAD, OPTIONS safe हैं; ये और PUT, DELETE idempotent हैं। POST बनाता या trigger करता है और idempotent नहीं है; PUT पूरा resource बदलता है; PATCH उसका हिस्सा बदलता है।",
        hg: "GET, HEAD, OPTIONS safe hain; ye aur PUT, DELETE idempotent hain. POST banata ya trigger karta hai aur idempotent nahi hai; PUT poora resource badalta hai; PATCH uska hissa badalta hai."
      },
      explain: {
        en: `<ul>
<li><b>Safe</b> = no state change expected (so caches and crawlers may call it). <b>Idempotent</b> = repeating the call leaves the same server state; the response may differ (DELETE: 204, then 404).</li>
<li><b>PUT</b> with the same body three times = same resource; <b>POST /orders</b> three times = three orders (Puzzle: "put-post-idempotency").</li>
<li><b>PATCH</b> is not idempotent by definition (for example "add 1 to the quantity"), though a specific patch ("set status = shipped") can behave idempotently.</li>
<li>Why it matters: clients, proxies and libraries (like the resilience handler) decide whether a retry is safe from the method.</li>
<li>Follow-up: "Can GET have side effects?" — it should not; logging and counters are fine, state changes are not.</li>
<li>Follow-up: "PUT creates or updates?" — it can do both when the client chooses the id (upsert); return 201 when it creates.</li>
</ul>`,
        hi: `<ul>
<li><b>Safe</b> = state बदलने की अपेक्षा नहीं (इसलिए caches और crawlers इसे बुला सकते हैं)। <b>Idempotent</b> = call दोहराने पर server की state वही रहती है; response अलग हो सकता है (DELETE: 204, फिर 404)।</li>
<li>एक ही body के साथ <b>PUT</b> तीन बार = वही resource; <b>POST /orders</b> तीन बार = तीन orders (Puzzle: "put-post-idempotency")।</li>
<li><b>PATCH</b> परिभाषा से idempotent नहीं है (जैसे "quantity में 1 जोड़ो"), हालाँकि कोई ख़ास patch ("status = shipped रखो") idempotent की तरह व्यवहार कर सकता है।</li>
<li>क्यों ज़रूरी: clients, proxies और libraries (जैसे resilience handler) method देखकर तय करते हैं कि retry सुरक्षित है या नहीं।</li>
<li>Follow-up: "क्या GET के side effects हो सकते हैं?" — नहीं होने चाहिए; logging और counters ठीक हैं, state बदलना नहीं।</li>
<li>Follow-up: "PUT बनाता है या update करता है?" — client जब id चुनता है तो दोनों कर सकता है (upsert); बनाए तो 201 लौटाओ।</li>
</ul>`,
        hg: `<ul>
<li><b>Safe</b> = state badalne ki apeksha nahi (isliye caches aur crawlers ise bula sakte hain). <b>Idempotent</b> = call dohrane par server ki state wahi rehti hai; response alag ho sakta hai (DELETE: 204, phir 404).</li>
<li>Ek hi body ke saath <b>PUT</b> teen baar = wahi resource; <b>POST /orders</b> teen baar = teen orders (Puzzle: "put-post-idempotency").</li>
<li><b>PATCH</b> definition se idempotent nahi hai (jaise "quantity mein 1 jodo"), halanki koi khaas patch ("status = shipped rakho") idempotent ki tarah vyavhaar kar sakta hai.</li>
<li>Kyun zaroori: clients, proxies aur libraries (jaise resilience handler) method dekhkar tay karte hain ki retry surakshit hai ya nahi.</li>
<li>Follow-up: "Kya GET ke side effects ho sakte hain?" — nahi hone chahiye; logging aur counters theek hain, state badalna nahi.</li>
<li>Follow-up: "PUT banata hai ya update karta hai?" — client jab id chunta hai to dono kar sakta hai (upsert); banaye to 201 lautao.</li>
</ul>`
      }
    },
    {
      id: "status-codes-when",
      depth: "short",
      q: "Which status codes would you return from a CRUD API, and when?",
      answer: "200 OK, 201 Created with Location, 204 No Content, 400 invalid input, 401 not authenticated, 403 not allowed, 404 missing, 409 conflict, 429 throttled, 500 unexpected. Avoid 200 with an error body.",
      meaning: {
        hi: "200 OK, Location के साथ 201 Created, 204 No Content, ग़लत input पर 400, authenticated नहीं तो 401, इजाज़त नहीं तो 403, नहीं मिला तो 404, टकराव पर 409, throttle पर 429, अनपेक्षित पर 500। error body के साथ 200 से बचो।",
        hg: "200 OK, Location ke saath 201 Created, 204 No Content, galat input par 400, authenticated nahi to 401, ijazat nahi to 403, nahi mila to 404, takraav par 409, throttle par 429, anapekshit par 500. Error body ke saath 200 se bacho."
      },
      explain: {
        en: `<ul>
<li><b>201 + Location</b> after POST creates; <b>202 Accepted</b> if work is queued and the result comes later; <b>204</b> for a successful PUT/DELETE with nothing to return.</li>
<li><b>400 vs 422</b>: 400 = malformed or invalid request (ASP.NET Core's default for model errors); 422 = syntactically fine but semantically rejected. Either is fine if the team picks one and documents it.</li>
<li><b>401 vs 403</b> (Day 12): 401 = we do not know who you are; 403 = we know, you may not. Some APIs return 404 instead of 403 to hide that a resource exists.</li>
<li><b>409</b> for duplicates and state conflicts; <b>412</b> when <code>If-Match</code> fails; <b>415</b> for an unsupported <code>Content-Type</code>; <b>429</b> when rate limited (with <code>Retry-After</code> if possible).</li>
<li><b>500 vs 503</b>: 500 = our bug; 503 = temporarily unavailable (maintenance, overload), clients may retry later.</li>
<li>Follow-up: "Why not always return 200 with a success flag?" — clients, caches, monitoring and retry logic all rely on real status codes.</li>
</ul>`,
        hi: `<ul>
<li>POST से create होने पर <b>201 + Location</b>; काम queue में गया और नतीजा बाद में आएगा तो <b>202 Accepted</b>; लौटाने को कुछ न हो तो सफल PUT/DELETE पर <b>204</b>।</li>
<li><b>400 vs 422</b>: 400 = ग़लत बनावट या invalid request (model errors के लिए ASP.NET Core का default); 422 = बनावट सही पर अर्थ में अस्वीकार। team एक चुनकर document कर दे तो दोनों ठीक हैं।</li>
<li><b>401 vs 403</b> (Day 12): 401 = हम नहीं जानते आप कौन हैं; 403 = जानते हैं, पर इजाज़त नहीं। कुछ APIs resource का होना छुपाने के लिए 403 की जगह 404 देती हैं।</li>
<li>duplicates और state conflicts पर <b>409</b>; <code>If-Match</code> fail होने पर <b>412</b>; unsupported <code>Content-Type</code> पर <b>415</b>; rate limit होने पर <b>429</b> (हो सके तो <code>Retry-After</code> के साथ)।</li>
<li><b>500 vs 503</b>: 500 = हमारा bug; 503 = कुछ देर के लिए उपलब्ध नहीं (maintenance, overload), clients बाद में retry कर सकते हैं।</li>
<li>Follow-up: "हमेशा success flag के साथ 200 क्यों नहीं?" — clients, caches, monitoring और retry logic सब असली status codes पर निर्भर हैं।</li>
</ul>`,
        hg: `<ul>
<li>POST se create hone par <b>201 + Location</b>; kaam queue mein gaya aur nateeja baad mein aayega to <b>202 Accepted</b>; lautane ko kuch na ho to safal PUT/DELETE par <b>204</b>.</li>
<li><b>400 vs 422</b>: 400 = galat banaavat ya invalid request (model errors ke liye ASP.NET Core ka default); 422 = banaavat sahi par arth mein asweekaar. Team ek chunkar document kar de to dono theek hain.</li>
<li><b>401 vs 403</b> (Day 12): 401 = hum nahi jaante aap kaun hain; 403 = jaante hain, par ijazat nahi. Kuch APIs resource ka hona chhupane ke liye 403 ki jagah 404 deti hain.</li>
<li>Duplicates aur state conflicts par <b>409</b>; <code>If-Match</code> fail hone par <b>412</b>; unsupported <code>Content-Type</code> par <b>415</b>; rate limit hone par <b>429</b> (ho sake to <code>Retry-After</code> ke saath).</li>
<li><b>500 vs 503</b>: 500 = hamara bug; 503 = kuch der ke liye available nahi (maintenance, overload), clients baad mein retry kar sakte hain.</li>
<li>Follow-up: "Hamesha success flag ke saath 200 kyun nahi?" — clients, caches, monitoring aur retry logic sab asli status codes par nirbhar hain.</li>
</ul>`
      }
    },
    {
      id: "global-errors",
      depth: "short",
      q: "How do you handle errors globally in a Web API and return one consistent format?",
      answer: "Call AddProblemDetails, register IExceptionHandler classes with AddExceptionHandler, and put UseExceptionHandler first. UseExceptionHandler invokes the handlers, which write RFC 9457 ProblemDetails; details go to logs.",
      meaning: {
        hi: "AddProblemDetails बुलाओ, AddExceptionHandler से IExceptionHandler classes register करो, और UseExceptionHandler सबसे पहले रखो। UseExceptionHandler handlers को बुलाता है, जो RFC 9457 ProblemDetails लिखते हैं; details logs में जाती हैं।",
        hg: "AddProblemDetails bulao, AddExceptionHandler se IExceptionHandler classes register karo, aur UseExceptionHandler sabse pehle rakho. UseExceptionHandler handlers ko bulata hai, jo RFC 9457 ProblemDetails likhte hain; details logs mein jaati hain."
      },
      explain: {
        en: `<ul>
<li><code>IExceptionHandler</code> (.NET 8+) is <b>invoked by</b> the exception-handler middleware (<code>UseExceptionHandler</code>); registering it alone does nothing (Day 12 said the same).</li>
<li>Handlers run in registration order; return <code>true</code> after writing the full response, <code>false</code> to let the next handler or the fallback run.</li>
<li>ProblemDetails fields: <code>type</code>, <code>title</code>, <code>status</code>, <code>detail</code>, <code>instance</code> plus extensions such as a trace id. Media type <code>application/problem+json</code>. RFC 9457 replaced RFC 7807 with the same core shape.</li>
<li>Map known domain exceptions to 404/409; return a generic 500 for the rest and log the exception once with the trace id.</li>
<li>Follow-up: "Exception filter or middleware?" — middleware also catches errors from other middleware and result execution; filters only see MVC actions (Day 12).</li>
<li>Follow-up: "Should you throw for 'not found'?" — prefer returning a result for expected outcomes; exceptions are costlier and noisier in logs.</li>
</ul>`,
        hi: `<ul>
<li><code>IExceptionHandler</code> (.NET 8+) को exception-handler middleware (<code>UseExceptionHandler</code>) <b>बुलाता है</b>; सिर्फ़ register करने से कुछ नहीं होता (Day 12 ने भी यही कहा)।</li>
<li>Handlers registration order में चलते हैं; पूरा response लिखने के बाद <code>true</code>, अगला handler या fallback चलाने के लिए <code>false</code>।</li>
<li>ProblemDetails fields: <code>type</code>, <code>title</code>, <code>status</code>, <code>detail</code>, <code>instance</code> और trace id जैसे extensions। Media type <code>application/problem+json</code>। RFC 9457 ने उसी मूल shape के साथ RFC 7807 की जगह ली।</li>
<li>जाने-पहचाने domain exceptions को 404/409 से map करो; बाकी के लिए general 500 लौटाओ और exception को trace id के साथ एक बार log करो।</li>
<li>Follow-up: "Exception filter या middleware?" — middleware दूसरे middleware और result execution के errors भी पकड़ता है; filters सिर्फ़ MVC actions देखते हैं (Day 12)।</li>
<li>Follow-up: "'not found' के लिए throw करना चाहिए?" — अपेक्षित नतीजों के लिए result लौटाना बेहतर; exceptions महँगे हैं और logs में शोर करते हैं।</li>
</ul>`,
        hg: `<ul>
<li><code>IExceptionHandler</code> (.NET 8+) ko exception-handler middleware (<code>UseExceptionHandler</code>) <b>bulata hai</b>; sirf register karne se kuch nahi hota (Day 12 ne bhi yahi kaha).</li>
<li>Handlers registration order mein chalte hain; poora response likhne ke baad <code>true</code>, agla handler ya fallback chalane ke liye <code>false</code>.</li>
<li>ProblemDetails fields: <code>type</code>, <code>title</code>, <code>status</code>, <code>detail</code>, <code>instance</code> aur trace id jaise extensions. Media type <code>application/problem+json</code>. RFC 9457 ne usi mool shape ke saath RFC 7807 ki jagah li.</li>
<li>Jaane-pehchaane domain exceptions ko 404/409 se map karo; baaki ke liye general 500 lautao aur exception ko trace id ke saath ek baar log karo.</li>
<li>Follow-up: "Exception filter ya middleware?" — middleware doosre middleware aur result execution ke errors bhi pakadta hai; filters sirf MVC actions dekhte hain (Day 12).</li>
<li>Follow-up: "'not found' ke liye throw karna chahiye?" — apekshit nateejon ke liye result lautana behtar; exceptions mehnge hain aur logs mein shor karte hain.</li>
</ul>`
      }
    },
    {
      id: "validation-apicontroller",
      depth: "short",
      q: "How does model validation work in a Web API?",
      answer: "Put DataAnnotations on the request model. With [ApiController], an invalid model automatically returns 400 with ValidationProblemDetails before your action runs; use FluentValidation if rules get complex.",
      meaning: {
        hi: "Request model पर DataAnnotations लगाओ। [ApiController] के साथ invalid model पर आपके action से पहले अपने-आप ValidationProblemDetails के साथ 400 मिलता है; rules जटिल हों तो FluentValidation use करो।",
        hg: "Request model par DataAnnotations lagao. [ApiController] ke saath invalid model par aapke action se pehle apne-aap ValidationProblemDetails ke saath 400 milta hai; rules jatil hon to FluentValidation use karo."
      },
      explain: {
        en: `<ul>
<li>The automatic 400 comes from an <code>[ApiController]</code> convention (a filter), so it needs no <code>ModelState.IsValid</code> check. The body is a <code>ValidationProblemDetails</code> with an <code>errors</code> dictionary keyed by field name (Puzzle: "apicontroller-auto-400").</li>
<li>Binding errors (wrong type in JSON, missing body) also end up as 400.</li>
<li>DataAnnotations cover shape: <code>[Required]</code>, <code>[Range]</code>, <code>[StringLength]</code>, <code>[EmailAddress]</code>. Database-dependent rules ("email already exists") belong in the service, returning 409 or 422.</li>
<li><b>FluentValidation</b> is an optional third-party library: rules live in a validator class, easier to test and reuse; you call it yourself or through an integration package. It is not required.</li>
<li><b>Minimal APIs</b>: no automatic DataAnnotations validation before .NET 10; on .NET 10 call <code>AddValidation()</code>. On earlier versions validate manually or use a library.</li>
<li>Follow-up: "Never trust the client" — validate on the server even if the UI validates too; avoid binding straight to your entity (over-posting): use request DTOs.</li>
</ul>`,
        hi: `<ul>
<li>Automatic 400 एक <code>[ApiController]</code> convention (एक filter) से आता है, इसलिए <code>ModelState.IsValid</code> check नहीं चाहिए। Body <code>ValidationProblemDetails</code> है जिसमें field name के हिसाब से <code>errors</code> dictionary है (Puzzle: "apicontroller-auto-400")।</li>
<li>Binding errors (JSON में ग़लत type, body ग़ायब) भी 400 बनते हैं।</li>
<li>DataAnnotations shape संभालते हैं: <code>[Required]</code>, <code>[Range]</code>, <code>[StringLength]</code>, <code>[EmailAddress]</code>। database पर निर्भर rules ("email पहले से है") service में होने चाहिए, 409 या 422 लौटाते हुए।</li>
<li><b>FluentValidation</b> optional third-party library है: rules एक validator class में रहते हैं, test और reuse आसान; आप ख़ुद या integration package से बुलाते हो। यह ज़रूरी नहीं है।</li>
<li><b>Minimal APIs</b>: .NET 10 से पहले DataAnnotations की automatic validation नहीं; .NET 10 पर <code>AddValidation()</code> बुलाओ। पुराने versions पर हाथ से validate करो या library use करो।</li>
<li>Follow-up: "client पर भरोसा मत करो" — UI validate करे तब भी server पर validate करो; सीधे entity पर bind मत करो (over-posting): request DTOs use करो।</li>
</ul>`,
        hg: `<ul>
<li>Automatic 400 ek <code>[ApiController]</code> convention (ek filter) se aata hai, isliye <code>ModelState.IsValid</code> check nahi chahiye. Body <code>ValidationProblemDetails</code> hai jismein field name ke hisaab se <code>errors</code> dictionary hai (Puzzle: "apicontroller-auto-400").</li>
<li>Binding errors (JSON mein galat type, body gaayab) bhi 400 bante hain.</li>
<li>DataAnnotations shape sambhalte hain: <code>[Required]</code>, <code>[Range]</code>, <code>[StringLength]</code>, <code>[EmailAddress]</code>. Database par nirbhar rules ("email pehle se hai") service mein hone chahiye, 409 ya 422 lautate hue.</li>
<li><b>FluentValidation</b> optional third-party library hai: rules ek validator class mein rehte hain, test aur reuse aasaan; aap khud ya integration package se bulate ho. Yeh zaroori nahi hai.</li>
<li><b>Minimal APIs</b>: .NET 10 se pehle DataAnnotations ki automatic validation nahi; .NET 10 par <code>AddValidation()</code> bulao. Purane versions par haath se validate karo ya library use karo.</li>
<li>Follow-up: "client par bharosa mat karo" — UI validate kare tab bhi server par validate karo; seedhe entity par bind mat karo (over-posting): request DTOs use karo.</li>
</ul>`
      }
    },
    {
      id: "jwt-basics",
      depth: "short",
      q: "How does JWT authentication work, and is a JWT encrypted?",
      answer: "A JWT is header.payload.signature; the API verifies signature, issuer, audience and expiry without a session lookup. It is signed, not encrypted, so anyone holding it can read the payload.",
      meaning: {
        hi: "JWT का रूप header.payload.signature है। API बिना session lookup के signature, issuer, audience और expiry जाँचती है। यह signed है, encrypted नहीं, इसलिए जिसके पास है वह payload पढ़ सकता है।",
        hg: "JWT ka roop header.payload.signature hai. API bina session lookup ke signature, issuer, audience aur expiry jaanchti hai. Yeh signed hai, encrypted nahi, isliye jiske paas hai woh payload padh sakta hai."
      },
      explain: {
        en: `<ul>
<li>Three base64url parts: header (algorithm), payload (claims such as <code>sub</code>, <code>iss</code>, <code>aud</code>, <code>exp</code>, scopes), signature (proof nobody changed it).</li>
<li>Flow: user signs in at the identity provider, gets an access token, the client sends <code>Authorization: Bearer ...</code>; <code>AddAuthentication().AddJwtBearer()</code> validates it and builds <code>HttpContext.User</code> from the claims.</li>
<li><b>Signed, not encrypted</b> (a standard JWT is a JWS): do not store passwords or sensitive personal data in the payload; send tokens only over HTTPS.</li>
<li>Stateless = scalable, but a token stays valid until <code>exp</code>: keep lifetimes short and use refresh tokens (next questions).</li>
<li>Follow-up: "Where does the client store it?" — SPAs have trade-offs: memory (lost on refresh), or HttpOnly cookie (CSRF considerations); avoid long-lived tokens in localStorage if XSS is a concern.</li>
<li>Follow-up: "HMAC or RSA signing?" — HMAC shares one secret with the API; RSA/ECDSA lets the API verify with a public key only, which is safer when many services validate tokens.</li>
</ul>`,
        hi: `<ul>
<li>तीन base64url हिस्से: header (algorithm), payload (claims जैसे <code>sub</code>, <code>iss</code>, <code>aud</code>, <code>exp</code>, scopes), signature (सबूत कि किसी ने बदला नहीं)।</li>
<li>Flow: user identity provider पर sign-in करता है, access token पाता है, client <code>Authorization: Bearer ...</code> भेजता है; <code>AddAuthentication().AddJwtBearer()</code> उसे validate करके claims से <code>HttpContext.User</code> बनाता है।</li>
<li><b>Signed, encrypted नहीं</b> (standard JWT एक JWS है): payload में passwords या संवेदनशील personal data मत रखो; tokens सिर्फ़ HTTPS पर भेजो।</li>
<li>Stateless = scalable, पर token <code>exp</code> तक valid रहता है: lifetime छोटी रखो और refresh tokens use करो (अगले सवाल)।</li>
<li>Follow-up: "client इसे कहाँ रखे?" — SPAs में trade-offs हैं: memory (refresh पर खो जाता है), या HttpOnly cookie (CSRF का ध्यान); XSS की चिंता हो तो localStorage में लंबी उम्र के tokens से बचो।</li>
<li>Follow-up: "HMAC या RSA signing?" — HMAC में API के साथ एक secret साझा होता है; RSA/ECDSA में API सिर्फ़ public key से verify करती है, जो कई services के tokens validate करने पर ज़्यादा सुरक्षित है।</li>
</ul>`,
        hg: `<ul>
<li>Teen base64url hisse: header (algorithm), payload (claims jaise <code>sub</code>, <code>iss</code>, <code>aud</code>, <code>exp</code>, scopes), signature (saboot ki kisi ne badla nahi).</li>
<li>Flow: user identity provider par sign-in karta hai, access token paata hai, client <code>Authorization: Bearer ...</code> bhejta hai; <code>AddAuthentication().AddJwtBearer()</code> use validate karke claims se <code>HttpContext.User</code> banata hai.</li>
<li><b>Signed, encrypted nahi</b> (standard JWT ek JWS hai): payload mein passwords ya sanvedansheel personal data mat rakho; tokens sirf HTTPS par bhejo.</li>
<li>Stateless = scalable, par token <code>exp</code> tak valid rehta hai: lifetime chhoti rakho aur refresh tokens use karo (agle sawaal).</li>
<li>Follow-up: "client ise kahan rakhe?" — SPAs mein trade-offs hain: memory (refresh par kho jaata hai), ya HttpOnly cookie (CSRF ka dhyan); XSS ki chinta ho to localStorage mein lambi umr ke tokens se bacho.</li>
<li>Follow-up: "HMAC ya RSA signing?" — HMAC mein API ke saath ek secret saajha hota hai; RSA/ECDSA mein API sirf public key se verify karti hai, jo kai services ke tokens validate karne par zyaada surakshit hai.</li>
</ul>`
      }
    },
    {
      id: "cors-what",
      depth: "short",
      q: "What is CORS and what does it protect?",
      answer: "CORS lets a server tell browsers which other origins may read its responses. It protects users inside browsers only; curl and other servers ignore it, so it is not API security.",
      meaning: {
        hi: "CORS से server browsers को बताता है कि कौन-से दूसरे origins उसके responses पढ़ सकते हैं। यह सिर्फ़ browsers के अंदर users को बचाता है; curl और दूसरे servers इसे नहीं मानते, इसलिए यह API security नहीं है।",
        hg: "CORS se server browsers ko batata hai ki kaun-se doosre origins uske responses padh sakte hain. Yeh sirf browsers ke andar users ko bachata hai; curl aur doosre servers ise nahi maante, isliye yeh API security nahi hai."
      },
      explain: {
        en: `<ul>
<li>An <b>origin</b> is scheme + host + port. A page from <code>https://shop.example</code> calling <code>https://api.example</code> is cross-origin; the browser blocks JavaScript from reading the response unless the API sends matching <code>Access-Control-Allow-Origin</code>.</li>
<li><b>Preflight</b>: for "non-simple" requests (methods like PUT/DELETE, custom headers, JSON content type) the browser first sends <code>OPTIONS</code> with <code>Origin</code> and <code>Access-Control-Request-Method</code>; the API answers with allowed origin, methods and headers (Puzzle: "cors-preflight-headers").</li>
<li>The request can still reach your server and run: CORS limits what the <i>browser</i> shows the page, so authentication and authorization are still needed.</li>
<li>ASP.NET Core: <code>AddCors</code> policy + <code>UseCors("name")</code> after routing, before authentication (so the preflight, which has no token, is answered). Name exact origins; <code>AllowAnyOrigin()</code> with <code>AllowCredentials()</code> is not allowed.</li>
<li>Follow-up: "CORS error but the API works in Postman?" — Postman is not a browser, so it does not enforce CORS; fix the server policy.</li>
</ul>`,
        hi: `<ul>
<li><b>Origin</b> = scheme + host + port। <code>https://shop.example</code> का page <code>https://api.example</code> को बुलाए तो वह cross-origin है; API जब तक मेल खाता <code>Access-Control-Allow-Origin</code> न भेजे, browser JavaScript को response पढ़ने से रोकता है।</li>
<li><b>Preflight</b>: "non-simple" requests (PUT/DELETE जैसे methods, custom headers, JSON content type) पर browser पहले <code>Origin</code> और <code>Access-Control-Request-Method</code> के साथ <code>OPTIONS</code> भेजता है; API allowed origin, methods और headers के साथ जवाब देती है (Puzzle: "cors-preflight-headers")।</li>
<li>Request फिर भी आपके server तक पहुँचकर चल सकती है: CORS सिर्फ़ यह सीमित करता है कि <i>browser</i> page को क्या दिखाए, इसलिए authentication और authorization फिर भी चाहिए।</li>
<li>ASP.NET Core: <code>AddCors</code> policy + routing के बाद, authentication से पहले <code>UseCors("name")</code> (ताकि बिना token वाले preflight का जवाब मिले)। सटीक origins के नाम लो; <code>AllowAnyOrigin()</code> और <code>AllowCredentials()</code> साथ नहीं चलते।</li>
<li>Follow-up: "CORS error पर API Postman में चलती है?" — Postman browser नहीं है, इसलिए CORS लागू नहीं करता; server की policy ठीक करो।</li>
</ul>`,
        hg: `<ul>
<li><b>Origin</b> = scheme + host + port. <code>https://shop.example</code> ka page <code>https://api.example</code> ko bulaye to woh cross-origin hai; API jab tak match karta <code>Access-Control-Allow-Origin</code> na bheje, browser JavaScript ko response padhne se rokta hai.</li>
<li><b>Preflight</b>: "non-simple" requests (PUT/DELETE jaise methods, custom headers, JSON content type) par browser pehle <code>Origin</code> aur <code>Access-Control-Request-Method</code> ke saath <code>OPTIONS</code> bhejta hai; API allowed origin, methods aur headers ke saath jawab deti hai (Puzzle: "cors-preflight-headers").</li>
<li>Request phir bhi aapke server tak pahunchkar chal sakti hai: CORS sirf yeh seemit karta hai ki <i>browser</i> page ko kya dikhaye, isliye authentication aur authorization phir bhi chahiye.</li>
<li>ASP.NET Core: <code>AddCors</code> policy + routing ke baad, authentication se pehle <code>UseCors("name")</code> (taaki bina token wale preflight ka jawab mile). Sateek origins ke naam lo; <code>AllowAnyOrigin()</code> aur <code>AllowCredentials()</code> saath nahi chalte.</li>
<li>Follow-up: "CORS error par API Postman mein chalti hai?" — Postman browser nahi hai, isliye CORS laagu nahi karta; server ki policy theek karo.</li>
</ul>`
      }
    },
    {
      id: "versioning-strategies",
      depth: "short",
      q: "How would you version a Web API?",
      answer: "Pick one scheme: URL segment (/v2/orders), query string, header or media type, using the Asp.Versioning packages. Avoid breaking existing clients, and announce deprecation before removing a version.",
      meaning: {
        hi: "एक scheme चुनो: URL segment (/v2/orders), query string, header या media type, Asp.Versioning packages के साथ। मौजूदा clients को मत तोड़ो, और version हटाने से पहले deprecation की सूचना दो।",
        hg: "Ek scheme chuno: URL segment (/v2/orders), query string, header ya media type, Asp.Versioning packages ke saath. Maujooda clients ko mat todo, aur version hatane se pehle deprecation ki soochna do."
      },
      explain: {
        en: `<ul>
<li><b>URL segment</b> (<code>/api/v2/orders</code>): most visible, easy to route, cache and test in a browser; the URL of a resource changes between versions.</li>
<li><b>Query string</b> (<code>?api-version=2.0</code>): simple; easy for a client to forget. <b>Header</b> (<code>X-Api-Version</code>) and <b>media type</b> (<code>Accept: application/json;v=2</code>): clean URLs, but harder to test by hand and to cache.</li>
<li>Packages: <code>Asp.Versioning.Http</code> (Minimal APIs), <code>Asp.Versioning.Mvc</code> (controllers), <code>Asp.Versioning.Mvc.ApiExplorer</code> (OpenAPI/Swagger per version). They replaced the older <code>Microsoft.AspNetCore.Mvc.Versioning</code> packages.</li>
<li>Prefer <b>additive, backward-compatible</b> changes (new optional fields) so that most changes need no new version; breaking changes (remove or rename a field, change a meaning) need a new version.</li>
<li>Deprecation process: mark the version deprecated, report it in headers (<code>ReportApiVersions</code>), set a sunset date, watch usage in logs, then remove.</li>
<li>Follow-up: "Is version-per-endpoint or whole-API better?" — whole-API versions are easier for clients to reason about; fine-grained versions create a matrix to maintain.</li>
</ul>`,
        hi: `<ul>
<li><b>URL segment</b> (<code>/api/v2/orders</code>): सबसे दिखने वाला, route, cache और browser में test करना आसान; versions के बीच resource का URL बदलता है।</li>
<li><b>Query string</b> (<code>?api-version=2.0</code>): सरल; client के लिए भूलना आसान। <b>Header</b> (<code>X-Api-Version</code>) और <b>media type</b> (<code>Accept: application/json;v=2</code>): साफ़ URLs, पर हाथ से test और cache करना कठिन।</li>
<li>Packages: <code>Asp.Versioning.Http</code> (Minimal APIs), <code>Asp.Versioning.Mvc</code> (controllers), <code>Asp.Versioning.Mvc.ApiExplorer</code> (हर version के लिए OpenAPI/Swagger)। इन्होंने पुराने <code>Microsoft.AspNetCore.Mvc.Versioning</code> packages की जगह ली।</li>
<li><b>Additive, backward-compatible</b> बदलाव पसंद करो (नए optional fields) ताकि ज़्यादातर बदलावों को नया version न चाहिए; breaking changes (field हटाना या नाम बदलना, मतलब बदलना) को नया version चाहिए।</li>
<li>Deprecation process: version को deprecated mark करो, headers में report करो (<code>ReportApiVersions</code>), sunset date रखो, logs में usage देखो, फिर हटाओ।</li>
<li>Follow-up: "version-per-endpoint या पूरी API का version बेहतर?" — पूरी API के versions clients के लिए समझना आसान है; बारीक versions maintain करने का matrix बना देते हैं।</li>
</ul>`,
        hg: `<ul>
<li><b>URL segment</b> (<code>/api/v2/orders</code>): sabse dikhne wala, route, cache aur browser mein test karna aasaan; versions ke beech resource ka URL badalta hai.</li>
<li><b>Query string</b> (<code>?api-version=2.0</code>): saral; client ke liye bhoolna aasaan. <b>Header</b> (<code>X-Api-Version</code>) aur <b>media type</b> (<code>Accept: application/json;v=2</code>): saaf URLs, par haath se test aur cache karna kathin.</li>
<li>Packages: <code>Asp.Versioning.Http</code> (Minimal APIs), <code>Asp.Versioning.Mvc</code> (controllers), <code>Asp.Versioning.Mvc.ApiExplorer</code> (har version ke liye OpenAPI/Swagger). Inhone purane <code>Microsoft.AspNetCore.Mvc.Versioning</code> packages ki jagah li.</li>
<li><b>Additive, backward-compatible</b> badlaav pasand karo (naye optional fields) taaki zyaadatar badlaavon ko naya version na chahiye; breaking changes (field hatana ya naam badalna, matlab badalna) ko naya version chahiye.</li>
<li>Deprecation process: version ko deprecated mark karo, headers mein report karo (<code>ReportApiVersions</code>), sunset date rakho, logs mein usage dekho, phir hatao.</li>
<li>Follow-up: "version-per-endpoint ya poori API ka version behtar?" — poori API ke versions clients ke liye samajhna aasaan hai; baareek versions maintain karne ka matrix bana dete hain.</li>
</ul>`
      }
    },
    {
      id: "oauth-vs-oidc",
      depth: "detailed",
      q: "What is the difference between OAuth 2.0 and OpenID Connect?",
      answer: "OAuth 2.0 delegates access: a client gets an access token to call an API. OpenID Connect adds an identity layer on top: an ID token that says who signed in.",
      meaning: {
        hi: "OAuth 2.0 access delegate करता है: client को API बुलाने के लिए access token मिलता है। OpenID Connect उसके ऊपर पहचान की परत जोड़ता है: ID token जो बताता है कि किसने sign-in किया।",
        hg: "OAuth 2.0 access delegate karta hai: client ko API bulane ke liye access token milta hai. OpenID Connect uske upar pehchaan ki parat jodta hai: ID token jo batata hai ki kisne sign-in kiya."
      },
      explain: {
        en: `<ul>
<li>Analogy: a hotel key card (access token) opens your room; it does not say who you are. The check-in form (ID token) states your identity.</li>
<li><b>OAuth 2.0</b> = authorization framework. Roles: resource owner (user), client (app), authorization server, resource server (your API). Your API validates <b>access tokens</b>.</li>
<li><b>OpenID Connect</b> = authentication on OAuth 2.0: adds the ID token (a JWT), the <code>openid</code> scope and a user-info endpoint. The client app reads the ID token; the API should not accept it as an access token.</li>
<li>Common flows: <b>authorization code + PKCE</b> for SPAs, mobile and server-rendered web apps; <b>client credentials</b> for service-to-service. The implicit flow and password grant are discouraged for new apps.</li>
<li>In ASP.NET Core: the API uses <code>AddJwtBearer</code> (validate access tokens); a web app that signs users in uses <code>AddOpenIdConnect</code>.</li>
<li>TL angle: use a proven identity provider (Entra ID, Keycloak, Auth0 and others) instead of writing your own token server.</li>
</ul>`,
        hi: `<ul>
<li>Analogy: hotel की key card (access token) आपका कमरा खोलती है; वह नहीं बताती कि आप कौन हैं। check-in form (ID token) आपकी पहचान बताता है।</li>
<li><b>OAuth 2.0</b> = authorization framework। Roles: resource owner (user), client (app), authorization server, resource server (आपकी API)। आपकी API <b>access tokens</b> validate करती है।</li>
<li><b>OpenID Connect</b> = OAuth 2.0 पर authentication: ID token (एक JWT), <code>openid</code> scope और user-info endpoint जोड़ता है। Client app ID token पढ़ती है; API को उसे access token की तरह नहीं मानना चाहिए।</li>
<li>आम flows: SPAs, mobile और server-rendered web apps के लिए <b>authorization code + PKCE</b>; service-to-service के लिए <b>client credentials</b>। नई apps के लिए implicit flow और password grant को हतोत्साहित किया जाता है।</li>
<li>ASP.NET Core में: API <code>AddJwtBearer</code> use करती है (access tokens validate); users को sign-in कराने वाली web app <code>AddOpenIdConnect</code> use करती है।</li>
<li>TL angle: अपना token server लिखने की जगह भरोसेमंद identity provider use करो (Entra ID, Keycloak, Auth0 वग़ैरह)।</li>
</ul>`,
        hg: `<ul>
<li>Analogy: hotel ki key card (access token) aapka kamra kholti hai; woh nahi batati ki aap kaun hain. Check-in form (ID token) aapki pehchaan batata hai.</li>
<li><b>OAuth 2.0</b> = authorization framework. Roles: resource owner (user), client (app), authorization server, resource server (aapki API). Aapki API <b>access tokens</b> validate karti hai.</li>
<li><b>OpenID Connect</b> = OAuth 2.0 par authentication: ID token (ek JWT), <code>openid</code> scope aur user-info endpoint jodta hai. Client app ID token padhti hai; API ko use access token ki tarah nahi maanna chahiye.</li>
<li>Aam flows: SPAs, mobile aur server-rendered web apps ke liye <b>authorization code + PKCE</b>; service-to-service ke liye <b>client credentials</b>. Nayi apps ke liye implicit flow aur password grant ko hatotsaahit kiya jaata hai.</li>
<li>ASP.NET Core mein: API <code>AddJwtBearer</code> use karti hai (access tokens validate); users ko sign-in karane wali web app <code>AddOpenIdConnect</code> use karti hai.</li>
<li>TL angle: apna token server likhne ki jagah bharosemand identity provider use karo (Entra ID, Keycloak, Auth0 vagairah).</li>
</ul>`
      }
    },
    {
      id: "refresh-tokens",
      depth: "detailed",
      q: "Why use short-lived access tokens with refresh tokens?",
      answer: "A JWT cannot be revoked easily before it expires, so keep it short, for example minutes. A server-stored, rotated refresh token then gets new access tokens without asking the user to sign in again.",
      meaning: {
        hi: "JWT expire होने से पहले आसानी से revoke नहीं होता, इसलिए उसे छोटा रखो, जैसे कुछ minutes। Server में रखा, rotate होने वाला refresh token फिर user से दोबारा sign-in कराए बिना नए access tokens दिलाता है।",
        hg: "JWT expire hone se pehle aasaani se revoke nahi hota, isliye use chhota rakho, jaise kuch minutes. Server mein rakha, rotate hone wala refresh token phir user se dobara sign-in karaye bina naye access tokens dilata hai."
      },
      explain: {
        en: `<ul>
<li>Analogy: a day-pass wristband (access token) expires tonight; the season-ticket card (refresh token) at the gate office gets a new wristband each morning. Lose the wristband and the damage ends tonight.</li>
<li>If a stolen access token lives 5 minutes, the attacker's window is 5 minutes. A refresh token lives longer, so it is stored more carefully (server-side, hashed) and is sent only to the token endpoint.</li>
<li><b>Rotation</b>: each refresh issues a new refresh token and invalidates the old one; if an old one is used again, treat it as theft and revoke the whole chain.</li>
<li>Revocation of access tokens before expiry needs extra work: a deny-list or a token-version check on each request, which gives up some of JWT's statelessness.</li>
<li>Follow-up: "Where do you keep a refresh token in a SPA?" — an HttpOnly, Secure, SameSite cookie handled by a backend-for-frontend is a common answer; localStorage exposes it to XSS.</li>
<li>Follow-up: "What goes in the payload?" — only what the API needs (subject, scopes, roles); remember the payload is readable.</li>
</ul>`,
        hi: `<ul>
<li>Analogy: day-pass wristband (access token) आज रात expire हो जाता है; gate office का season-ticket card (refresh token) हर सुबह नया wristband दिलाता है। wristband खो जाए तो नुकसान आज रात ख़त्म।</li>
<li>चोरी हुआ access token 5 मिनट जिए तो attacker की window 5 मिनट है। Refresh token ज़्यादा जीता है, इसलिए उसे ज़्यादा सावधानी से रखते हैं (server-side, hashed) और सिर्फ़ token endpoint को भेजते हैं।</li>
<li><b>Rotation</b>: हर refresh नया refresh token देता है और पुराना invalid कर देता है; पुराना दोबारा use हो तो उसे चोरी मानो और पूरी chain revoke करो।</li>
<li>expiry से पहले access tokens revoke करने में अतिरिक्त काम लगता है: deny-list या हर request पर token-version check, जिससे JWT की कुछ stateless-ness छूटती है।</li>
<li>Follow-up: "SPA में refresh token कहाँ रखें?" — backend-for-frontend द्वारा संभाली गई HttpOnly, Secure, SameSite cookie आम जवाब है; localStorage उसे XSS के सामने खोल देता है।</li>
<li>Follow-up: "payload में क्या रखें?" — सिर्फ़ वह जो API को चाहिए (subject, scopes, roles); याद रखो payload पढ़ा जा सकता है।</li>
</ul>`,
        hg: `<ul>
<li>Analogy: day-pass wristband (access token) aaj raat expire ho jaata hai; gate office ka season-ticket card (refresh token) har subah naya wristband dilata hai. Wristband kho jaye to nuksaan aaj raat khatam.</li>
<li>Chori hua access token 5 minute jiye to attacker ki window 5 minute hai. Refresh token zyaada jeeta hai, isliye use zyaada saavdhaani se rakhte hain (server-side, hashed) aur sirf token endpoint ko bhejte hain.</li>
<li><b>Rotation</b>: har refresh naya refresh token deta hai aur purana invalid kar deta hai; purana dobara use ho to use chori maano aur poori chain revoke karo.</li>
<li>Expiry se pehle access tokens revoke karne mein atirikt kaam lagta hai: deny-list ya har request par token-version check, jisse JWT ki kuch stateless-ness chhootti hai.</li>
<li>Follow-up: "SPA mein refresh token kahan rakhein?" — backend-for-frontend dwara sambhali gayi HttpOnly, Secure, SameSite cookie aam jawab hai; localStorage use XSS ke saamne khol deta hai.</li>
<li>Follow-up: "payload mein kya rakhein?" — sirf woh jo API ko chahiye (subject, scopes, roles); yaad rakho payload padha ja sakta hai.</li>
</ul>`
      }
    },
    {
      id: "roles-claims-policies",
      depth: "detailed",
      q: "What is the difference between roles, claims and policies in ASP.NET Core authorization?",
      answer: "A claim is a fact about the user; a role is a simple claim-based label. A policy is a named rule built from requirements, so prefer policies for anything beyond simple roles.",
      meaning: {
        hi: "Claim user के बारे में एक तथ्य है; role एक सादा claim-based label है। Policy requirements से बना नाम वाला rule है, इसलिए सादे roles से आगे की हर बात के लिए policies चुनो।",
        hg: "Claim user ke baare mein ek tathya hai; role ek saada claim-based label hai. Policy requirements se bana naam wala rule hai, isliye saade roles se aage ki har baat ke liye policies chuno."
      },
      explain: {
        en: `<ul>
<li><b>Claims</b>: name/value facts in the token (<code>email</code>, <code>scope</code>, <code>department</code>). <b>Roles</b>: the <code>role</code> claim, checked with <code>[Authorize(Roles = "Admin")]</code>.</li>
<li><b>Policies</b>: <code>AddAuthorizationBuilder().AddPolicy("CanWriteOrders", p =&gt; p.RequireClaim("scope", "orders.write"))</code>, applied with <code>[Authorize(Policy = "...")]</code> or <code>.RequireAuthorization("...")</code>. Rule changes happen in one place.</li>
<li><b>Resource-based</b>: "only the owner may edit this order" needs the loaded resource, so inject <code>IAuthorizationService</code> and call <code>AuthorizeAsync(user, order, policy)</code> in the handler or action.</li>
<li><b>Fallback and default policy</b>: set a fallback policy requiring authenticated users so that a forgotten attribute does not leave an endpoint open; use <code>[AllowAnonymous]</code> for the few public ones.</li>
<li>Results: no valid identity gives 401, a valid identity failing the policy gives 403 (Day 12).</li>
<li>TL angle: roles explode ("Admin2", "AdminReadOnly"); scopes and policies scale better, and they are easy to unit test.</li>
</ul>`,
        hi: `<ul>
<li><b>Claims</b>: token में name/value तथ्य (<code>email</code>, <code>scope</code>, <code>department</code>)। <b>Roles</b>: <code>role</code> claim, जिसे <code>[Authorize(Roles = "Admin")]</code> से जाँचते हैं।</li>
<li><b>Policies</b>: <code>AddAuthorizationBuilder().AddPolicy("CanWriteOrders", p =&gt; p.RequireClaim("scope", "orders.write"))</code>, जिसे <code>[Authorize(Policy = "...")]</code> या <code>.RequireAuthorization("...")</code> से लगाते हैं। नियम बदलना एक ही जगह होता है।</li>
<li><b>Resource-based</b>: "सिर्फ़ owner यह order edit करे" के लिए load हुआ resource चाहिए, इसलिए <code>IAuthorizationService</code> inject करो और handler या action में <code>AuthorizeAsync(user, order, policy)</code> बुलाओ।</li>
<li><b>Fallback और default policy</b>: ऐसी fallback policy रखो जो authenticated users माँगे, ताकि भूला हुआ attribute endpoint को खुला न छोड़े; कुछ public endpoints के लिए <code>[AllowAnonymous]</code>।</li>
<li>नतीजे: valid पहचान नहीं तो 401, valid पहचान पर policy fail तो 403 (Day 12)।</li>
<li>TL angle: roles बेतहाशा बढ़ते हैं ("Admin2", "AdminReadOnly"); scopes और policies बेहतर scale होती हैं, और unit test करना आसान है।</li>
</ul>`,
        hg: `<ul>
<li><b>Claims</b>: token mein name/value tathya (<code>email</code>, <code>scope</code>, <code>department</code>). <b>Roles</b>: <code>role</code> claim, jise <code>[Authorize(Roles = "Admin")]</code> se jaanchte hain.</li>
<li><b>Policies</b>: <code>AddAuthorizationBuilder().AddPolicy("CanWriteOrders", p =&gt; p.RequireClaim("scope", "orders.write"))</code>, jise <code>[Authorize(Policy = "...")]</code> ya <code>.RequireAuthorization("...")</code> se lagate hain. Niyam badalna ek hi jagah hota hai.</li>
<li><b>Resource-based</b>: "sirf owner yeh order edit kare" ke liye load hua resource chahiye, isliye <code>IAuthorizationService</code> inject karo aur handler ya action mein <code>AuthorizeAsync(user, order, policy)</code> bulao.</li>
<li><b>Fallback aur default policy</b>: aisi fallback policy rakho jo authenticated users maange, taaki bhoola hua attribute endpoint ko khula na chhode; kuch public endpoints ke liye <code>[AllowAnonymous]</code>.</li>
<li>Nateeje: valid pehchaan nahi to 401, valid pehchaan par policy fail to 403 (Day 12).</li>
<li>TL angle: roles betahaasha badhte hain ("Admin2", "AdminReadOnly"); scopes aur policies behtar scale hoti hain, aur unit test karna aasaan hai.</li>
</ul>`
      }
    },
    {
      id: "caching-layers",
      depth: "detailed",
      q: "Response caching vs output caching vs IMemoryCache vs HybridCache: how do you choose?",
      answer: "Response caching follows HTTP cache headers; output caching (.NET 7+) lets the server decide and evict by tag; IMemoryCache holds in-process data; HybridCache (.NET 9+) adds a shared level and stampede protection.",
      meaning: {
        hi: "Response caching HTTP cache headers को मानता है; output caching (.NET 7+) में server फ़ैसला करता है और tag से evict करता है; IMemoryCache in-process data रखता है; HybridCache (.NET 9+) shared level और stampede protection जोड़ता है।",
        hg: "Response caching HTTP cache headers ko maanta hai; output caching (.NET 7+) mein server faisla karta hai aur tag se evict karta hai; IMemoryCache in-process data rakhta hai; HybridCache (.NET 9+) shared level aur stampede protection jodta hai."
      },
      explain: {
        en: `<ul>
<li><b>Cache whole HTTP responses</b>: <i>response caching</i> (headers decide; clients can bypass with <code>no-cache</code>) or <i>output caching</i> (server policy, tags, vary-by rules, you control invalidation). For APIs, output caching is usually the better fit.</li>
<li><b>Cache data inside code</b>: <code>IMemoryCache</code> (per process, fast, lost on restart, each instance has its own copy); <code>IDistributedCache</code> (shared via Redis or SQL Server, you serialize); <code>HybridCache</code> combines both and de-duplicates concurrent loads of one key.</li>
<li><b>Cache stampede</b>: many requests miss at once and all hit the database. HybridCache runs one factory call per key per instance and shares the result; with <code>IMemoryCache</code> you must add your own locking.</li>
<li>Multi-server trap: an in-memory entry invalidated on server A is still cached on server B; shared invalidation needs a shared store or short lifetimes.</li>
<li>Rules of thumb: give every entry an expiry, build keys from trusted ids only, do not cache per-user data under a shared key, and measure the hit rate.</li>
<li>Follow-up: "Cache invalidation?" — expiry plus explicit eviction (by key or tag) when data changes; the hard part is knowing every place the data lives.</li>
</ul>`,
        hi: `<ul>
<li><b>पूरे HTTP responses cache करना</b>: <i>response caching</i> (headers तय करते हैं; clients <code>no-cache</code> से bypass कर सकते हैं) या <i>output caching</i> (server policy, tags, vary-by rules, invalidation आपके हाथ में)। APIs के लिए आमतौर पर output caching बेहतर बैठता है।</li>
<li><b>code के अंदर data cache करना</b>: <code>IMemoryCache</code> (per process, तेज़, restart पर खो जाता है, हर instance की अपनी copy); <code>IDistributedCache</code> (Redis या SQL Server से shared, serialize आप करते हो); <code>HybridCache</code> दोनों जोड़ता है और एक key के concurrent loads को एक कर देता है।</li>
<li><b>Cache stampede</b>: कई requests एक साथ miss होकर सब database पर टूट पड़ती हैं। HybridCache हर instance में हर key के लिए एक factory call चलाता है और नतीजा साझा करता है; <code>IMemoryCache</code> के साथ locking आपको ख़ुद जोड़नी पड़ती है।</li>
<li>Multi-server trap: server A पर invalidate हुई in-memory entry server B पर अब भी cached है; साझा invalidation के लिए shared store या छोटी lifetimes चाहिए।</li>
<li>अँगूठे के नियम: हर entry को expiry दो, keys सिर्फ़ भरोसेमंद ids से बनाओ, user-specific data को shared key पर cache मत करो, और hit rate नापो।</li>
<li>Follow-up: "Cache invalidation?" — expiry और data बदलने पर साफ़ eviction (key या tag से); मुश्किल यह जानना है कि data कहाँ-कहाँ रहता है।</li>
</ul>`,
        hg: `<ul>
<li><b>Poore HTTP responses cache karna</b>: <i>response caching</i> (headers tay karte hain; clients <code>no-cache</code> se bypass kar sakte hain) ya <i>output caching</i> (server policy, tags, vary-by rules, invalidation aapke haath mein). APIs ke liye aamtaur par output caching behtar baithta hai.</li>
<li><b>Code ke andar data cache karna</b>: <code>IMemoryCache</code> (per process, tez, restart par kho jaata hai, har instance ki apni copy); <code>IDistributedCache</code> (Redis ya SQL Server se shared, serialize aap karte ho); <code>HybridCache</code> dono jodta hai aur ek key ke concurrent loads ko ek kar deta hai.</li>
<li><b>Cache stampede</b>: kai requests ek saath miss hokar sab database par toot padti hain. HybridCache har instance mein har key ke liye ek factory call chalata hai aur nateeja saajha karta hai; <code>IMemoryCache</code> ke saath locking aapko khud jodni padti hai.</li>
<li>Multi-server trap: server A par invalidate hui in-memory entry server B par ab bhi cached hai; saajha invalidation ke liye shared store ya chhoti lifetimes chahiye.</li>
<li>Angoothe ke niyam: har entry ko expiry do, keys sirf bharosemand ids se banao, user-specific data ko shared key par cache mat karo, aur hit rate naapo.</li>
<li>Follow-up: "Cache invalidation?" — expiry aur data badalne par saaf eviction (key ya tag se); mushkil yeh jaanna hai ki data kahan-kahan rehta hai.</li>
</ul>`
      }
    },
    {
      id: "etag-conditional",
      depth: "detailed",
      q: "What are ETags and conditional requests used for?",
      answer: "An ETag identifies a version of a response. If-None-Match on a GET returns 304 with no body when unchanged; If-Match on a PUT returns 412 if someone else changed it, giving optimistic concurrency.",
      meaning: {
        hi: "ETag response के एक version की पहचान है। GET पर If-None-Match, बदलाव न हो तो बिना body के 304 देता है; PUT पर If-Match, किसी और ने बदला हो तो 412 देता है, यानी optimistic concurrency।",
        hg: "ETag response ke ek version ki pehchaan hai. GET par If-None-Match, badlaav na ho to bina body ke 304 deta hai; PUT par If-Match, kisi aur ne badla ho to 412 deta hai, yaani optimistic concurrency."
      },
      explain: {
        en: `<ul>
<li>Analogy: you hold the 12th edition of a catalogue. You ask "is 12 still current?" and the shop answers "yes" (304) instead of reprinting it. For edits: "change it only if it is still edition 12" (<code>If-Match</code>), otherwise 412.</li>
<li><b>Read side</b>: server sends <code>ETag: "v7"</code>; client stores it and sends <code>If-None-Match: "v7"</code> later; unchanged gives <b>304 Not Modified</b>, saving bandwidth. Puzzle: "etag-304-second-request".</li>
<li><b>Write side</b>: the client sends <code>If-Match</code> with the ETag it read; if the stored version differs the server answers <b>412 Precondition Failed</b> (or 409 by team convention), preventing a silent lost update. A <b>rowversion</b> column (Day 6) is a natural source for the tag.</li>
<li>Strong ETags mean byte-identical; weak ETags (<code>W/"..."</code>) mean semantically equal. The comparison is done on the opaque string, so the server decides what goes into it.</li>
<li>ASP.NET Core has no automatic ETag generator for API responses; compute it from a version or hash and compare headers yourself (or with a small filter or library).</li>
<li>Follow-up: "ETag vs Last-Modified?" — Last-Modified has one-second resolution; ETag can represent any version identifier.</li>
</ul>`,
        hi: `<ul>
<li>Analogy: आपके पास catalogue का 12वाँ edition है। आप पूछते हैं "क्या 12 अब भी चालू है?" और दुकान "हाँ" (304) कहती है, दोबारा छापे बिना। edits के लिए: "बदलो, पर तभी जब अब भी edition 12 हो" (<code>If-Match</code>), वरना 412।</li>
<li><b>Read side</b>: server <code>ETag: "v7"</code> भेजता है; client उसे रखता है और बाद में <code>If-None-Match: "v7"</code> भेजता है; unchanged हो तो <b>304 Not Modified</b>, bandwidth बचती है। Puzzle: "etag-304-second-request"।</li>
<li><b>Write side</b>: client पढ़े हुए ETag के साथ <code>If-Match</code> भेजता है; stored version अलग हो तो server <b>412 Precondition Failed</b> देता है (या team convention से 409), जिससे चुपचाप lost update रुकता है। Tag का स्वाभाविक स्रोत <b>rowversion</b> column है (Day 6)।</li>
<li>Strong ETag का मतलब byte-identical; weak ETag (<code>W/"..."</code>) का मतलब अर्थ में बराबर। तुलना opaque string पर होती है, इसलिए उसमें क्या जाए यह server तय करता है।</li>
<li>ASP.NET Core में API responses के लिए automatic ETag generator नहीं है; version या hash से बनाओ और headers ख़ुद compare करो (या छोटे filter या library से)।</li>
<li>Follow-up: "ETag vs Last-Modified?" — Last-Modified की resolution एक सेकंड है; ETag कोई भी version identifier हो सकता है।</li>
</ul>`,
        hg: `<ul>
<li>Analogy: aapke paas catalogue ka 12va edition hai. Aap poochte ho "kya 12 ab bhi chaalu hai?" aur dukaan "haan" (304) kehti hai, dobara chhape bina. Edits ke liye: "badlo, par tabhi jab ab bhi edition 12 ho" (<code>If-Match</code>), warna 412.</li>
<li><b>Read side</b>: server <code>ETag: "v7"</code> bhejta hai; client use rakhta hai aur baad mein <code>If-None-Match: "v7"</code> bhejta hai; unchanged ho to <b>304 Not Modified</b>, bandwidth bachti hai. Puzzle: "etag-304-second-request".</li>
<li><b>Write side</b>: client padhe hue ETag ke saath <code>If-Match</code> bhejta hai; stored version alag ho to server <b>412 Precondition Failed</b> deta hai (ya team convention se 409), jisse chupchaap lost update rukta hai. Tag ka swabhaavik source <b>rowversion</b> column hai (Day 6).</li>
<li>Strong ETag ka matlab byte-identical; weak ETag (<code>W/"..."</code>) ka matlab arth mein barabar. Tulna opaque string par hoti hai, isliye usmein kya jaye yeh server tay karta hai.</li>
<li>ASP.NET Core mein API responses ke liye automatic ETag generator nahi hai; version ya hash se banao aur headers khud compare karo (ya chhote filter ya library se).</li>
<li>Follow-up: "ETag vs Last-Modified?" — Last-Modified ki resolution ek second hai; ETag koi bhi version identifier ho sakta hai.</li>
</ul>`
      }
    },
    {
      id: "rate-limiting-how",
      depth: "detailed",
      q: "How would you rate limit an API in ASP.NET Core?",
      answer: "Use the built-in AddRateLimiter middleware (.NET 7+): fixed window, sliding window, token bucket or concurrency policies, partitioned per user or IP. Set RejectionStatusCode to 429; the default is 503.",
      meaning: {
        hi: "Built-in AddRateLimiter middleware (.NET 7+) use करो: fixed window, sliding window, token bucket या concurrency policies, user या IP के हिसाब से partition करके। RejectionStatusCode को 429 करो; default 503 है।",
        hg: "Built-in AddRateLimiter middleware (.NET 7+) use karo: fixed window, sliding window, token bucket ya concurrency policies, user ya IP ke hisaab se partition karke. RejectionStatusCode ko 429 karo; default 503 hai."
      },
      explain: {
        en: `<ul>
<li>Wire-up: <code>AddRateLimiter</code> (define policies), <code>UseRateLimiter</code> (after <code>UseRouting</code> when you use endpoint policies), then <code>RequireRateLimiting("name")</code> or <code>[EnableRateLimiting("name")]</code> on endpoints; <code>[DisableRateLimiting]</code> opts out. It is in the shared framework: <code>Microsoft.AspNetCore.RateLimiting</code>, no extra package.</li>
<li><b>Fixed window</b>: N requests per window, resets at the boundary (a burst across two windows is possible). <b>Sliding window</b>: same idea with segments, smoother. <b>Token bucket</b>: a bucket refilled steadily; bursts allowed up to the bucket size. <b>Concurrency</b>: limits requests in flight, not requests per time.</li>
<li><b>Partitioning</b>: <code>RateLimitPartition.GetFixedWindowLimiter(key, ...)</code> with the user name, API key or IP, so one noisy client cannot use everyone's quota. Behind a proxy, configure forwarded headers or every client looks like the proxy.</li>
<li>Rejected requests get the status set in <code>RejectionStatusCode</code> (default <b>503</b>; Puzzle: "rate-limit-429"). Use <code>OnRejected</code> to write a body or a <code>Retry-After</code> header.</li>
<li>Limits are per server process; with several instances put a limit at the gateway/WAF too. Rate limiting reduces abuse but is not a DDoS defence.</li>
<li>Follow-up: "Which algorithm for login?" — fixed or sliding window per IP + per username with a low limit; for a public search API, token bucket allows short bursts.</li>
</ul>`,
        hi: `<ul>
<li>Wire-up: <code>AddRateLimiter</code> (policies define करो), <code>UseRateLimiter</code> (endpoint policies हों तो <code>UseRouting</code> के बाद), फिर endpoints पर <code>RequireRateLimiting("name")</code> या <code>[EnableRateLimiting("name")]</code>; <code>[DisableRateLimiting]</code> से छूट। यह shared framework में है: <code>Microsoft.AspNetCore.RateLimiting</code>, कोई extra package नहीं।</li>
<li><b>Fixed window</b>: हर window में N requests, boundary पर reset (दो windows के बीच burst संभव)। <b>Sliding window</b>: वही विचार segments के साथ, ज़्यादा smooth। <b>Token bucket</b>: एक bucket जो लगातार भरता है; bucket के size तक burst की इजाज़त। <b>Concurrency</b>: चल रही requests सीमित करता है, समय के हिसाब से requests नहीं।</li>
<li><b>Partitioning</b>: user name, API key या IP के साथ <code>RateLimitPartition.GetFixedWindowLimiter(key, ...)</code>, ताकि एक शोर करने वाला client सबका quota न खा जाए। Proxy के पीछे forwarded headers configure करो वरना हर client proxy जैसा दिखेगा।</li>
<li>Reject हुई requests को <code>RejectionStatusCode</code> का status मिलता है (default <b>503</b>; Puzzle: "rate-limit-429")। Body या <code>Retry-After</code> header लिखने के लिए <code>OnRejected</code> use करो।</li>
<li>Limits per server process हैं; कई instances हों तो gateway/WAF पर भी limit रखो। Rate limiting abuse घटाता है पर DDoS का बचाव नहीं है।</li>
<li>Follow-up: "login के लिए कौन-सा algorithm?" — कम limit के साथ per IP + per username fixed या sliding window; public search API के लिए token bucket छोटे bursts की इजाज़त देता है।</li>
</ul>`,
        hg: `<ul>
<li>Wire-up: <code>AddRateLimiter</code> (policies define karo), <code>UseRateLimiter</code> (endpoint policies hon to <code>UseRouting</code> ke baad), phir endpoints par <code>RequireRateLimiting("name")</code> ya <code>[EnableRateLimiting("name")]</code>; <code>[DisableRateLimiting]</code> se chhoot. Yeh shared framework mein hai: <code>Microsoft.AspNetCore.RateLimiting</code>, koi extra package nahi.</li>
<li><b>Fixed window</b>: har window mein N requests, boundary par reset (do windows ke beech burst sambhav). <b>Sliding window</b>: wahi vichaar segments ke saath, zyaada smooth. <b>Token bucket</b>: ek bucket jo lagaatar bharta hai; bucket ke size tak burst ki ijazat. <b>Concurrency</b>: chal rahi requests seemit karta hai, samay ke hisaab se requests nahi.</li>
<li><b>Partitioning</b>: user name, API key ya IP ke saath <code>RateLimitPartition.GetFixedWindowLimiter(key, ...)</code>, taaki ek shor karne wala client sabka quota na kha jaye. Proxy ke peeche forwarded headers configure karo warna har client proxy jaisa dikhega.</li>
<li>Reject hui requests ko <code>RejectionStatusCode</code> ka status milta hai (default <b>503</b>; Puzzle: "rate-limit-429"). Body ya <code>Retry-After</code> header likhne ke liye <code>OnRejected</code> use karo.</li>
<li>Limits per server process hain; kai instances hon to gateway/WAF par bhi limit rakho. Rate limiting abuse ghatata hai par DDoS ka bachaav nahi hai.</li>
<li>Follow-up: "login ke liye kaun-sa algorithm?" — kam limit ke saath per IP + per username fixed ya sliding window; public search API ke liye token bucket chhote bursts ki ijazat deta hai.</li>
</ul>`
      }
    },
    {
      id: "httpclient-factory-why",
      depth: "detailed",
      q: "Why use IHttpClientFactory instead of new HttpClient()?",
      answer: "A new HttpClient per call can exhaust sockets; a single default static client may miss DNS changes. The factory pools and recycles handlers and gives named or typed clients with resilience attached.",
      meaning: {
        hi: "हर call पर नया HttpClient sockets ख़त्म कर सकता है; एक default static client DNS बदलाव चूक सकता है। Factory handlers को pool और recycle करता है और resilience वाले named या typed clients देता है।",
        hg: "Har call par naya HttpClient sockets khatam kar sakta hai; ek default static client DNS badlaav chook sakta hai. Factory handlers ko pool aur recycle karta hai aur resilience wale named ya typed clients deta hai."
      },
      explain: {
        en: `<ul>
<li>The expensive part is the <code>HttpMessageHandler</code> (connection pool), not <code>HttpClient</code> itself. Disposing a client per request leaves closed connections in TIME_WAIT, so under load you run out of ports (socket exhaustion; Day 3 trap).</li>
<li>A single long-lived client avoids that but keeps connections for ever, so a DNS change (blue/green, failover) can be ignored. Another option without DI: a shared client with <code>SocketsHttpHandler.PooledConnectionLifetime</code> set (Day 8).</li>
<li><b>IHttpClientFactory</b> rotates handlers (default lifetime two minutes), centralises configuration (<code>BaseAddress</code>, headers) and lets you add <code>DelegatingHandler</code>s (logging, auth token) and resilience.</li>
<li><b>Named</b> client: <code>CreateClient("billing")</code> (magic strings). <b>Typed</b> client: a class with an <code>HttpClient</code> constructor parameter, registered with <code>AddHttpClient&lt;T&gt;()</code>; testable and the usual choice.</li>
<li>Traps: do not inject a typed client into a singleton and keep it for hours (it holds one handler); do not dispose the injected <code>HttpClient</code> yourself.</li>
<li>Follow-up: "How do you unit test code that calls HTTP?" — typed client + a fake <code>HttpMessageHandler</code>, or integration tests against a test server.</li>
</ul>`,
        hi: `<ul>
<li>महँगा हिस्सा <code>HttpMessageHandler</code> (connection pool) है, <code>HttpClient</code> ख़ुद नहीं। हर request पर client dispose करने से बंद connections TIME_WAIT में रह जाते हैं, इसलिए load में ports ख़त्म हो जाते हैं (socket exhaustion; Day 3 का trap)।</li>
<li>एक लंबी उम्र वाला client इससे बचाता है पर connections हमेशा रखता है, इसलिए DNS बदलाव (blue/green, failover) अनदेखा हो सकता है। DI के बिना एक और विकल्प: <code>SocketsHttpHandler.PooledConnectionLifetime</code> set किया हुआ shared client (Day 8)।</li>
<li><b>IHttpClientFactory</b> handlers को rotate करता है (default lifetime दो मिनट), configuration एक जगह रखता है (<code>BaseAddress</code>, headers) और <code>DelegatingHandler</code>s (logging, auth token) व resilience जोड़ने देता है।</li>
<li><b>Named</b> client: <code>CreateClient("billing")</code> (magic strings)। <b>Typed</b> client: constructor में <code>HttpClient</code> लेने वाली class, <code>AddHttpClient&lt;T&gt;()</code> से register; testable और आम चुनाव।</li>
<li>Traps: typed client को singleton में inject करके घंटों मत रखो (वह एक handler पकड़े रहता है); inject हुआ <code>HttpClient</code> ख़ुद dispose मत करो।</li>
<li>Follow-up: "HTTP बुलाने वाले code का unit test कैसे?" — typed client + fake <code>HttpMessageHandler</code>, या test server के विरुद्ध integration tests।</li>
</ul>`,
        hg: `<ul>
<li>Mehnga hissa <code>HttpMessageHandler</code> (connection pool) hai, <code>HttpClient</code> khud nahi. Har request par client dispose karne se band connections TIME_WAIT mein reh jaate hain, isliye load mein ports khatam ho jaate hain (socket exhaustion; Day 3 ka trap).</li>
<li>Ek lambi umr wala client isse bachata hai par connections hamesha rakhta hai, isliye DNS badlaav (blue/green, failover) andekha ho sakta hai. DI ke bina ek aur vikalp: <code>SocketsHttpHandler.PooledConnectionLifetime</code> set kiya hua shared client (Day 8).</li>
<li><b>IHttpClientFactory</b> handlers ko rotate karta hai (default lifetime do minute), configuration ek jagah rakhta hai (<code>BaseAddress</code>, headers) aur <code>DelegatingHandler</code>s (logging, auth token) va resilience jodne deta hai.</li>
<li><b>Named</b> client: <code>CreateClient("billing")</code> (magic strings). <b>Typed</b> client: constructor mein <code>HttpClient</code> lene wali class, <code>AddHttpClient&lt;T&gt;()</code> se register; testable aur aam chunaav.</li>
<li>Traps: typed client ko singleton mein inject karke ghanton mat rakho (woh ek handler pakde rehta hai); inject hua <code>HttpClient</code> khud dispose mat karo.</li>
<li>Follow-up: "HTTP bulane wale code ka unit test kaise?" — typed client + fake <code>HttpMessageHandler</code>, ya test server ke viruddh integration tests.</li>
</ul>`
      }
    },
    {
      id: "resilience-handler",
      depth: "detailed",
      q: "How do you make outgoing HTTP calls resilient in .NET?",
      answer: "Add AddStandardResilienceHandler (Microsoft.Extensions.Http.Resilience, .NET 8+): rate limiter, total timeout, retry, circuit breaker and attempt timeout. Disable retries for unsafe methods like POST unless the call is idempotent.",
      meaning: {
        hi: "AddStandardResilienceHandler जोड़ो (Microsoft.Extensions.Http.Resilience, .NET 8+): rate limiter, total timeout, retry, circuit breaker और attempt timeout। POST जैसे unsafe methods पर retries बंद करो जब तक call idempotent न हो।",
        hg: "AddStandardResilienceHandler jodo (Microsoft.Extensions.Http.Resilience, .NET 8+): rate limiter, total timeout, retry, circuit breaker aur attempt timeout. POST jaise unsafe methods par retries band karo jab tak call idempotent na ho."
      },
      explain: {
        en: `<ul>
<li>Order, outermost to innermost: rate limiter (concurrency limit), total timeout (default 30 s), retry (3 attempts, exponential backoff with jitter), circuit breaker, per-attempt timeout (default 10 s).</li>
<li>Retries and the breaker react to 5xx, 408, 429 and network exceptions. Built on Polly; the package is <code>Microsoft.Extensions.Http.Resilience</code> (Day 3 mentioned it).</li>
<li><b>Circuit breaker</b>: after too many failures it opens and fails fast for a short time, protecting the struggling dependency and your threads; then it lets a trial request through.</li>
<li><b>Trap</b>: the defaults retry every HTTP method. A retried POST can create two orders; call <code>options.Retry.DisableForUnsafeHttpMethods()</code>, or make the operation idempotent (see the idempotency-key question).</li>
<li>Add one resilience handler per client; do not stack several. Use <code>AddResilienceHandler</code> if you need a custom pipeline, and tune values from configuration rather than guessing.</li>
<li>Follow-up: "What is hedging?" — <code>AddStandardHedgingHandler</code> sends a parallel request to another endpoint if the first is slow; it suits idempotent reads with several replicas.</li>
</ul>`,
        hi: `<ul>
<li>क्रम, सबसे बाहर से अंदर: rate limiter (concurrency limit), total timeout (default 30 s), retry (3 attempts, jitter के साथ exponential backoff), circuit breaker, per-attempt timeout (default 10 s)।</li>
<li>Retries और breaker 5xx, 408, 429 और network exceptions पर प्रतिक्रिया करते हैं। Polly पर बना है; package <code>Microsoft.Extensions.Http.Resilience</code> है (Day 3 ने इसका ज़िक्र किया था)।</li>
<li><b>Circuit breaker</b>: बहुत failures के बाद वह खुल जाता है और थोड़ी देर तुरंत fail करता है, जिससे जूझती dependency और आपके threads बचते हैं; फिर एक trial request जाने देता है।</li>
<li><b>Trap</b>: defaults हर HTTP method को retry करते हैं। retry हुआ POST दो orders बना सकता है; <code>options.Retry.DisableForUnsafeHttpMethods()</code> बुलाओ, या operation को idempotent बनाओ (idempotency-key वाला सवाल देखो)।</li>
<li>हर client पर एक resilience handler जोड़ो; कई मत जमाओ। custom pipeline चाहिए तो <code>AddResilienceHandler</code> use करो, और values अंदाज़े से नहीं, configuration से tune करो।</li>
<li>Follow-up: "hedging क्या है?" — <code>AddStandardHedgingHandler</code> पहला endpoint धीमा हो तो दूसरे endpoint पर parallel request भेजता है; कई replicas वाले idempotent reads के लिए ठीक है।</li>
</ul>`,
        hg: `<ul>
<li>Kram, sabse baahar se andar: rate limiter (concurrency limit), total timeout (default 30 s), retry (3 attempts, jitter ke saath exponential backoff), circuit breaker, per-attempt timeout (default 10 s).</li>
<li>Retries aur breaker 5xx, 408, 429 aur network exceptions par pratikriya karte hain. Polly par bana hai; package <code>Microsoft.Extensions.Http.Resilience</code> hai (Day 3 ne iska zikr kiya tha).</li>
<li><b>Circuit breaker</b>: bahut failures ke baad woh khul jaata hai aur thodi der turant fail karta hai, jisse joojhti dependency aur aapke threads bachte hain; phir ek trial request jaane deta hai.</li>
<li><b>Trap</b>: defaults har HTTP method ko retry karte hain. Retry hua POST do orders bana sakta hai; <code>options.Retry.DisableForUnsafeHttpMethods()</code> bulao, ya operation ko idempotent banao (idempotency-key wala sawaal dekho).</li>
<li>Har client par ek resilience handler jodo; kai mat jamao. Custom pipeline chahiye to <code>AddResilienceHandler</code> use karo, aur values andaaze se nahi, configuration se tune karo.</li>
<li>Follow-up: "hedging kya hai?" — <code>AddStandardHedgingHandler</code> pehla endpoint dheema ho to doosre endpoint par parallel request bhejta hai; kai replicas wale idempotent reads ke liye theek hai.</li>
</ul>`
      }
    },
    {
      id: "openapi-vs-swashbuckle",
      depth: "detailed",
      q: "How do you document a Web API in .NET 9 and 10: built-in OpenAPI or Swashbuckle?",
      answer: "Use built-in Microsoft.AspNetCore.OpenApi: AddOpenApi and MapOpenApi serve the JSON document. A UI such as Swagger UI or Scalar is separate; Swashbuckle remains an option but is no longer in the template.",
      meaning: {
        hi: "Built-in Microsoft.AspNetCore.OpenApi use करो: AddOpenApi और MapOpenApi JSON document देते हैं। Swagger UI या Scalar जैसी UI अलग है; Swashbuckle अब भी विकल्प है पर template में नहीं है।",
        hg: "Built-in Microsoft.AspNetCore.OpenApi use karo: AddOpenApi aur MapOpenApi JSON document dete hain. Swagger UI ya Scalar jaisi UI alag hai; Swashbuckle ab bhi vikalp hai par template mein nahi hai."
      },
      explain: {
        en: `<ul>
<li>Built in since .NET 9: package <code>Microsoft.AspNetCore.OpenApi</code>; <code>AddOpenApi()</code> + <code>MapOpenApi()</code> give <code>/openapi/v1.json</code>. .NET 10 generates OpenAPI 3.1 documents by default. Customise with document and operation transformers.</li>
<li>The framework gives the <b>document only</b>. For an interactive page add Swagger UI or Scalar (a separate package) pointing at that JSON; many teams keep it in Development only.</li>
<li><b>Swashbuckle</b> generated the document and bundled Swagger UI; the Web API template used it up to .NET 8 and stopped including it from .NET 9. It still works, and teams keep it for existing filters and extensions. Check current maintenance status of any third-party package before choosing it.</li>
<li><b>Build-time generation</b>: add <code>Microsoft.Extensions.ApiDescription.Server</code> to write the document during build, useful for client generation and contract checks in CI.</li>
<li>Quality: declare responses (<code>Produces</code>, <code>ProducesResponseType</code>) and ProblemDetails for errors, otherwise generated clients only know the 200 case.</li>
<li>TL angle: treat the OpenAPI file as the contract; diff it in CI to flag breaking changes, and use it to generate clients and Postman collections.</li>
</ul>`,
        hi: `<ul>
<li>.NET 9 से built-in: package <code>Microsoft.AspNetCore.OpenApi</code>; <code>AddOpenApi()</code> + <code>MapOpenApi()</code> से <code>/openapi/v1.json</code> मिलता है। .NET 10 default में OpenAPI 3.1 documents बनाता है। document और operation transformers से customise करो।</li>
<li>Framework सिर्फ़ <b>document</b> देता है। interactive page के लिए उसी JSON की ओर इशारा करता Swagger UI या Scalar (अलग package) जोड़ो; कई teams उसे सिर्फ़ Development में रखती हैं।</li>
<li><b>Swashbuckle</b> document बनाता था और Swagger UI साथ लाता था; Web API template ने .NET 8 तक इसे use किया और .NET 9 से शामिल करना बंद किया। यह अब भी चलता है, और teams मौजूदा filters और extensions के लिए इसे रखती हैं। कोई भी third-party package चुनने से पहले उसकी maintenance की मौजूदा स्थिति देखो।</li>
<li><b>Build-time generation</b>: build के दौरान document लिखने के लिए <code>Microsoft.Extensions.ApiDescription.Server</code> जोड़ो; client generation और CI में contract checks के लिए काम का।</li>
<li>Quality: responses declare करो (<code>Produces</code>, <code>ProducesResponseType</code>) और errors के लिए ProblemDetails, वरना generated clients सिर्फ़ 200 case जानते हैं।</li>
<li>TL angle: OpenAPI file को contract मानो; breaking changes पकड़ने के लिए CI में उसका diff करो, और clients व Postman collections generate करने में use करो।</li>
</ul>`,
        hg: `<ul>
<li>.NET 9 se built-in: package <code>Microsoft.AspNetCore.OpenApi</code>; <code>AddOpenApi()</code> + <code>MapOpenApi()</code> se <code>/openapi/v1.json</code> milta hai. .NET 10 default mein OpenAPI 3.1 documents banata hai. Document aur operation transformers se customise karo.</li>
<li>Framework sirf <b>document</b> deta hai. Interactive page ke liye usi JSON ki taraf ishaara karta Swagger UI ya Scalar (alag package) jodo; kai teams use sirf Development mein rakhti hain.</li>
<li><b>Swashbuckle</b> document banata tha aur Swagger UI saath laata tha; Web API template ne .NET 8 tak ise use kiya aur .NET 9 se shaamil karna band kiya. Yeh ab bhi chalta hai, aur teams maujooda filters aur extensions ke liye ise rakhti hain. Koi bhi third-party package chunne se pehle uski maintenance ki maujooda sthiti dekho.</li>
<li><b>Build-time generation</b>: build ke dauraan document likhne ke liye <code>Microsoft.Extensions.ApiDescription.Server</code> jodo; client generation aur CI mein contract checks ke kaam ka.</li>
<li>Quality: responses declare karo (<code>Produces</code>, <code>ProducesResponseType</code>) aur errors ke liye ProblemDetails, warna generated clients sirf 200 case jaante hain.</li>
<li>TL angle: OpenAPI file ko contract maano; breaking changes pakadne ke liye CI mein uska diff karo, aur clients va Postman collections generate karne mein use karo.</li>
</ul>`
      }
    },
    {
      id: "idempotency-key",
      depth: "detailed",
      q: "How do you make a POST safe to retry, for example a payment?",
      answer: "Have the client send an Idempotency-Key header; the server stores the key with the result and returns the stored response for a repeat. Without it, retries can create duplicates.",
      meaning: {
        hi: "Client एक Idempotency-Key header भेजे; server key को नतीजे के साथ रखता है और दोहराने पर रखा हुआ response लौटाता है। इसके बिना retries से duplicates बन सकते हैं।",
        hg: "Client ek Idempotency-Key header bheje; server key ko nateeje ke saath rakhta hai aur dohrane par rakha hua response lautata hai. Iske bina retries se duplicates ban sakte hain."
      },
      explain: {
        en: `<ul>
<li>Problem: the client times out, retries, and the first request had in fact succeeded: two payments. POST is not idempotent, and retry handlers cannot tell.</li>
<li>Pattern: client generates a unique key per logical operation; server checks a store (database table with a unique index, or a cache) for the key: seen before gives the saved status and body; new key processes the request and saves the outcome atomically.</li>
<li>Details: scope keys per client, give them a retention period (for example 24 hours), return 409 or 422 if the same key arrives with a different body, and handle two concurrent requests with the same key (unique constraint or lock).</li>
<li>The <code>Idempotency-Key</code> header is a widely used convention (several payment APIs, and an IETF draft), not a finished standard.</li>
<li>Alternatives: use PUT with a client-chosen id (<code>PUT /orders/{guid}</code>), or a natural unique business key with a unique index.</li>
<li>TL angle: decide this at design time for every payment-like POST, and agree that the resilience handler does not retry unsafe methods unless the endpoint supports keys.</li>
</ul>`,
        hi: `<ul>
<li>समस्या: client timeout होकर retry करता है, जबकि पहली request असल में सफल हो चुकी थी: दो payments। POST idempotent नहीं है, और retry handlers यह फ़र्क नहीं जान सकते।</li>
<li>Pattern: client हर logical operation के लिए अनोखी key बनाता है; server key के लिए store (unique index वाली database table, या cache) देखता है: पहले देखी हो तो saved status और body लौटाता है; नई key हो तो request process करके नतीजा atomically save करता है।</li>
<li>Details: keys को per client scope करो, retention period दो (जैसे 24 घंटे), वही key अलग body के साथ आए तो 409 या 422 लौटाओ, और एक ही key की दो concurrent requests संभालो (unique constraint या lock)।</li>
<li><code>Idempotency-Key</code> header व्यापक रूप से use होने वाली convention है (कई payment APIs, और एक IETF draft), पूरा हो चुका standard नहीं।</li>
<li>विकल्प: client की चुनी id के साथ PUT (<code>PUT /orders/{guid}</code>), या unique index वाली natural unique business key।</li>
<li>TL angle: हर payment जैसे POST के लिए design के समय यह तय करो, और मानो कि endpoint keys सपोर्ट न करे तो resilience handler unsafe methods retry नहीं करेगा।</li>
</ul>`,
        hg: `<ul>
<li>Samasya: client timeout hokar retry karta hai, jabki pehli request asal mein safal ho chuki thi: do payments. POST idempotent nahi hai, aur retry handlers yeh farq nahi jaan sakte.</li>
<li>Pattern: client har logical operation ke liye anokhi key banata hai; server key ke liye store (unique index wali database table, ya cache) dekhta hai: pehle dekhi ho to saved status aur body lautata hai; nayi key ho to request process karke nateeja atomically save karta hai.</li>
<li>Details: keys ko per client scope karo, retention period do (jaise 24 ghante), wahi key alag body ke saath aaye to 409 ya 422 lautao, aur ek hi key ki do concurrent requests sambhalo (unique constraint ya lock).</li>
<li><code>Idempotency-Key</code> header vyapak roop se use hone wali convention hai (kai payment APIs, aur ek IETF draft), poora ho chuka standard nahi.</li>
<li>Vikalp: client ki chuni id ke saath PUT (<code>PUT /orders/{guid}</code>), ya unique index wali natural unique business key.</li>
<li>TL angle: har payment jaise POST ke liye design ke samay yeh tay karo, aur maano ki endpoint keys support na kare to resilience handler unsafe methods retry nahi karega.</li>
</ul>`
      }
    }
  ],
  puzzles: [
    {
      id: "created-at-route-location",
      frameworks: ["aspnetcore"],
      packages: ["Microsoft.AspNetCore.TestHost"],
      src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder();
builder.Logging.ClearProviders();
builder.WebHost.UseTestServer();
var app = builder.Build();

app.MapGet("/orders/{id:int}", (int id) => Results.Ok(new { id })).WithName("GetOrder");
app.MapPost("/orders", () => Results.CreatedAtRoute("GetOrder", new { id = 42 }, new { id = 42 }));

await app.StartAsync();
var client = app.GetTestClient();

var created = await client.PostAsync("/orders", null);
Console.WriteLine($"{(int)created.StatusCode} {created.Headers.Location}");

var followed = await client.GetAsync(created.Headers.Location!);
Console.WriteLine((int)followed.StatusCode);
await app.StopAsync();`,
      answer: "201 http://localhost/orders/42\n200",
      explain: {
        en: "<p><code>Results.CreatedAtRoute</code> returns <b>201 Created</b> and builds the <code>Location</code> header from the named route <code>GetOrder</code> with <code>id = 42</code>. The TestServer's base address is <code>http://localhost</code>, so the header is the absolute URL <code>http://localhost/orders/42</code>. The client can follow it with a GET, and that answers <b>200</b>. This is the standard \"create, then tell the client where it lives\" pattern; controllers use <code>CreatedAtAction</code> or <code>CreatedAtRoute</code> the same way.</p>",
        hi: "<p><code>Results.CreatedAtRoute</code> <b>201 Created</b> लौटाता है और named route <code>GetOrder</code> से <code>id = 42</code> के साथ <code>Location</code> header बनाता है। TestServer का base address <code>http://localhost</code> है, इसलिए header पूरा URL <code>http://localhost/orders/42</code> बनता है। Client उसे GET से follow कर सकता है, और वह <b>200</b> देता है। यही \"बनाओ, फिर client को बताओ वह कहाँ है\" का standard pattern है; controllers में <code>CreatedAtAction</code> या <code>CreatedAtRoute</code> इसी तरह चलते हैं।</p>",
        hg: "<p><code>Results.CreatedAtRoute</code> <b>201 Created</b> lautata hai aur named route <code>GetOrder</code> se <code>id = 42</code> ke saath <code>Location</code> header banata hai. TestServer ka base address <code>http://localhost</code> hai, isliye header poora URL <code>http://localhost/orders/42</code> banta hai. Client use GET se follow kar sakta hai, aur woh <b>200</b> deta hai. Yahi \"banao, phir client ko batao woh kahan hai\" ka standard pattern hai; controllers mein <code>CreatedAtAction</code> ya <code>CreatedAtRoute</code> isi tarah chalte hain.</p>"
      }
    },
    {
      id: "apicontroller-auto-400",
      frameworks: ["aspnetcore"],
      packages: ["Microsoft.AspNetCore.TestHost"],
      src: `using System.ComponentModel.DataAnnotations;
using System.Net.Http.Json;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder();
builder.Logging.ClearProviders();
builder.WebHost.UseTestServer();
builder.Services.AddControllers();
var app = builder.Build();
app.MapControllers();

await app.StartAsync();
var client = app.GetTestClient();

var bad = await client.PostAsJsonAsync("/api/products", new { Name = "", Price = -5 });
Console.WriteLine((int)bad.StatusCode + " " + bad.Content.Headers.ContentType?.MediaType);
var problem = await bad.Content.ReadFromJsonAsync<ValidationProblemDetails>();
Console.WriteLine(string.Join(",", problem!.Errors.Keys.Order()) + " | " + problem.Title);

var good = await client.PostAsJsonAsync("/api/products", new { Name = "Tea", Price = 5 });
Console.WriteLine((int)good.StatusCode);
await app.StopAsync();

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpPost]
    public IActionResult Create(NewProduct product) => Ok();   // no ModelState check
}

public class NewProduct
{
    [Required, MinLength(2)] public string Name { get; set; } = "";
    [Range(1, 1000)] public int Price { get; set; }
}`,
      answer: "400 application/problem+json\nName,Price | One or more validation errors occurred.\n200",
      explain: {
        en: "<p>The action body never checks <code>ModelState</code>, yet the bad request gets <b>400</b>: <code>[ApiController]</code> adds a filter that stops invalid models before the action runs. The body is <code>ValidationProblemDetails</code> (media type <code>application/problem+json</code>) whose <code>errors</code> dictionary has one key per bad field: <code>Name</code> (empty fails <code>MinLength(2)</code> and <code>Required</code>) and <code>Price</code> (-5 is outside 1..1000). The keys are sorted before printing so the output does not depend on dictionary order. The valid request reaches the action and returns <b>200</b>.</p>",
        hi: "<p>Action body कभी <code>ModelState</code> check नहीं करती, फिर भी ग़लत request को <b>400</b> मिलता है: <code>[ApiController]</code> एक filter जोड़ता है जो invalid models को action चलने से पहले रोक देता है। Body <code>ValidationProblemDetails</code> है (media type <code>application/problem+json</code>) जिसके <code>errors</code> dictionary में हर ग़लत field की एक key है: <code>Name</code> (ख़ाली string <code>MinLength(2)</code> और <code>Required</code> में fail) और <code>Price</code> (-5, 1..1000 से बाहर)। Keys print से पहले sort की गई हैं ताकि output dictionary के order पर निर्भर न रहे। सही request action तक पहुँचती है और <b>200</b> लौटाती है।</p>",
        hg: "<p>Action body kabhi <code>ModelState</code> check nahi karti, phir bhi galat request ko <b>400</b> milta hai: <code>[ApiController]</code> ek filter jodta hai jo invalid models ko action chalne se pehle rok deta hai. Body <code>ValidationProblemDetails</code> hai (media type <code>application/problem+json</code>) jiske <code>errors</code> dictionary mein har galat field ki ek key hai: <code>Name</code> (khaali string <code>MinLength(2)</code> aur <code>Required</code> mein fail) aur <code>Price</code> (-5, 1..1000 se baahar). Keys print se pehle sort ki gayi hain taaki output dictionary ke order par nirbhar na rahe. Sahi request action tak pahunchti hai aur <b>200</b> lautati hai.</p>"
      }
    },
    {
      id: "exception-handler-problem-details",
      frameworks: ["aspnetcore"],
      packages: ["Microsoft.AspNetCore.TestHost"],
      src: `using System.Net.Http.Json;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder();
builder.Logging.ClearProviders();
builder.WebHost.UseTestServer();
builder.Services.AddProblemDetails();
builder.Services.AddExceptionHandler<MissingHandler>();
var app = builder.Build();

app.UseExceptionHandler();   // this is what invokes MissingHandler
app.MapGet("/a", () => { throw new KeyNotFoundException("no such order"); return "a"; });
app.MapGet("/b", () => { throw new InvalidOperationException("secret detail"); return "b"; });

await app.StartAsync();
var client = app.GetTestClient();
foreach (var path in new[] { "/a", "/b" })
{
    var response = await client.GetAsync(path);
    var problem = await response.Content.ReadFromJsonAsync<ProblemDetails>();
    Console.WriteLine($"{path} {(int)response.StatusCode} {problem!.Title}");
}
await app.StopAsync();

public sealed class MissingHandler(IProblemDetailsService problems) : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(HttpContext context, Exception exception, CancellationToken ct)
    {
        if (exception is not KeyNotFoundException) return false;   // pass it on
        context.Response.StatusCode = StatusCodes.Status404NotFound;
        return await problems.TryWriteAsync(new ProblemDetailsContext
        {
            HttpContext = context,
            ProblemDetails = { Status = 404, Title = "Not found" }
        });
    }
}`,
      answer: "/a 404 Not found\n/b 500 An error occurred while processing your request.",
      explain: {
        en: "<p><code>UseExceptionHandler()</code> catches the exception and <b>invokes</b> the registered <code>IExceptionHandler</code>. For <code>/a</code> the handler recognises <code>KeyNotFoundException</code>, sets 404 and writes ProblemDetails with the title \"Not found\"; returning <code>true</code> stops further handling. For <code>/b</code> the handler returns <code>false</code>, so the middleware falls back to what <code>AddProblemDetails</code> provides: a generic <b>500</b> ProblemDetails with the framework's default title. The message \"secret detail\" never reaches the client. Remove the <code>UseExceptionHandler()</code> line and the handler would never run.</p>",
        hi: "<p><code>UseExceptionHandler()</code> exception पकड़ता है और registered <code>IExceptionHandler</code> को <b>बुलाता</b> है। <code>/a</code> के लिए handler <code>KeyNotFoundException</code> पहचानता है, 404 set करता है और title \"Not found\" के साथ ProblemDetails लिखता है; <code>true</code> लौटाने पर आगे की handling रुक जाती है। <code>/b</code> के लिए handler <code>false</code> लौटाता है, इसलिए middleware उस पर लौटता है जो <code>AddProblemDetails</code> देता है: framework के default title वाला general <b>500</b> ProblemDetails। \"secret detail\" message client तक कभी नहीं पहुँचता। <code>UseExceptionHandler()</code> वाली line हटा दो तो handler कभी नहीं चलेगा।</p>",
        hg: "<p><code>UseExceptionHandler()</code> exception pakadta hai aur registered <code>IExceptionHandler</code> ko <b>bulata</b> hai. <code>/a</code> ke liye handler <code>KeyNotFoundException</code> pehchanta hai, 404 set karta hai aur title \"Not found\" ke saath ProblemDetails likhta hai; <code>true</code> lautane par aage ki handling ruk jaati hai. <code>/b</code> ke liye handler <code>false</code> lautata hai, isliye middleware us par lautta hai jo <code>AddProblemDetails</code> deta hai: framework ke default title wala general <b>500</b> ProblemDetails. \"secret detail\" message client tak kabhi nahi pahunchta. <code>UseExceptionHandler()</code> wali line hata do to handler kabhi nahi chalega.</p>"
      }
    },
    {
      id: "rate-limit-429",
      frameworks: ["aspnetcore"],
      packages: ["Microsoft.AspNetCore.TestHost"],
      src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

foreach (var setStatus in new[] { true, false })
{
    var builder = WebApplication.CreateBuilder();
    builder.Logging.ClearProviders();
    builder.WebHost.UseTestServer();
    builder.Services.AddRateLimiter(o =>
    {
        if (setStatus) o.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
        o.AddFixedWindowLimiter("fixed", x =>
        {
            x.PermitLimit = 2;
            x.Window = TimeSpan.FromHours(1);   // long window: no timing dependence
            x.QueueLimit = 0;
        });
    });
    var app = builder.Build();
    app.UseRateLimiter();
    app.MapGet("/limited", () => "ok").RequireRateLimiting("fixed");
    app.MapGet("/free", () => "free");

    await app.StartAsync();
    var client = app.GetTestClient();
    var codes = new List<int>();
    for (var i = 0; i < 4; i++) codes.Add((int)(await client.GetAsync("/limited")).StatusCode);
    codes.Add((int)(await client.GetAsync("/free")).StatusCode);
    Console.WriteLine($"{(setStatus ? "429 set" : "default")}: {string.Join(" ", codes)}");
    await app.StopAsync();
}`,
      answer: "429 set: 200 200 429 429 200\ndefault: 200 200 503 503 200",
      explain: {
        en: "<p>The fixed window allows <b>2</b> permits per (one-hour) window, with no queue. Requests 1 and 2 get <b>200</b>; requests 3 and 4 are rejected. The last request goes to <code>/free</code>, which has no <code>RequireRateLimiting</code>, so it is not limited: <b>200</b>. The two runs differ only in <code>RejectionStatusCode</code>: set to 429 you get 429; left alone the middleware rejects with its default <b>503 Service Unavailable</b>, a classic surprise. The one-hour window makes the result independent of timing.</p>",
        hi: "<p>Fixed window (एक घंटे की) हर window में <b>2</b> permits देती है, queue नहीं। Requests 1 और 2 को <b>200</b> मिलता है; requests 3 और 4 reject होती हैं। आख़िरी request <code>/free</code> पर जाती है, जिसमें <code>RequireRateLimiting</code> नहीं है, इसलिए वह limit नहीं होती: <b>200</b>। दोनों runs में फ़र्क सिर्फ़ <code>RejectionStatusCode</code> का है: 429 set करो तो 429 मिलता है; न छेड़ो तो middleware अपने default <b>503 Service Unavailable</b> से reject करता है, एक पुराना आश्चर्य। एक घंटे की window से नतीजा timing पर निर्भर नहीं रहता।</p>",
        hg: "<p>Fixed window (ek ghante ki) har window mein <b>2</b> permits deti hai, queue nahi. Requests 1 aur 2 ko <b>200</b> milta hai; requests 3 aur 4 reject hoti hain. Aakhri request <code>/free</code> par jaati hai, jismein <code>RequireRateLimiting</code> nahi hai, isliye woh limit nahi hoti: <b>200</b>. Dono runs mein farq sirf <code>RejectionStatusCode</code> ka hai: 429 set karo to 429 milta hai; na chhedo to middleware apne default <b>503 Service Unavailable</b> se reject karta hai, ek purana aashcharya. Ek ghante ki window se nateeja timing par nirbhar nahi rehta.</p>"
      }
    },
    {
      id: "cors-preflight-headers",
      frameworks: ["aspnetcore"],
      packages: ["Microsoft.AspNetCore.TestHost"],
      src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder();
builder.Logging.ClearProviders();
builder.WebHost.UseTestServer();
builder.Services.AddCors(o => o.AddPolicy("shop", p => p
    .WithOrigins("https://shop.example")
    .WithMethods("GET", "PUT")
    .WithHeaders("content-type")));
var app = builder.Build();
app.UseCors("shop");
app.MapGet("/items", () => "items");

await app.StartAsync();
var client = app.GetTestClient();

foreach (var origin in new[] { "https://shop.example", "https://evil.example" })
{
    var preflight = new HttpRequestMessage(HttpMethod.Options, "/items");
    preflight.Headers.Add("Origin", origin);
    preflight.Headers.Add("Access-Control-Request-Method", "PUT");
    var r = await client.SendAsync(preflight);
    r.Headers.TryGetValues("Access-Control-Allow-Origin", out var allowOrigin);
    r.Headers.TryGetValues("Access-Control-Allow-Methods", out var allowMethods);
    Console.WriteLine($"{(int)r.StatusCode} origin={allowOrigin?.FirstOrDefault() ?? "-"} methods={allowMethods?.FirstOrDefault() ?? "-"}");
}

var simple = new HttpRequestMessage(HttpMethod.Get, "/items");
simple.Headers.Add("Origin", "https://evil.example");
var s = await client.SendAsync(simple);
Console.WriteLine($"{(int)s.StatusCode} {await s.Content.ReadAsStringAsync()} {s.Headers.Contains("Access-Control-Allow-Origin")}");
await app.StopAsync();`,
      answer: "204 origin=https://shop.example methods=GET,PUT\n204 origin=- methods=-\n200 items False",
      explain: {
        en: "<p>A browser sends a <b>preflight</b> (<code>OPTIONS</code> with <code>Origin</code> and <code>Access-Control-Request-Method</code>) before a PUT. For the allowed origin the CORS middleware answers <b>204</b> itself with <code>Access-Control-Allow-Origin</code> and the allowed methods <code>GET,PUT</code>. For <code>evil.example</code> it also answers 204 but adds <b>no</b> allow headers, so a browser would refuse to continue. The last line is the key lesson: a plain GET from the disallowed origin still <b>runs and returns 200 with the body</b>; there is just no <code>Access-Control-Allow-Origin</code> header, so only the <i>browser</i> hides the response from the page. CORS is not a server-side access control.</p>",
        hi: "<p>Browser PUT से पहले <b>preflight</b> भेजता है (<code>Origin</code> और <code>Access-Control-Request-Method</code> के साथ <code>OPTIONS</code>)। allowed origin के लिए CORS middleware ख़ुद <b>204</b> से जवाब देता है, <code>Access-Control-Allow-Origin</code> और allowed methods <code>GET,PUT</code> के साथ। <code>evil.example</code> के लिए भी वह 204 देता है पर कोई allow header <b>नहीं</b> जोड़ता, इसलिए browser आगे बढ़ने से मना कर देगा। आख़िरी line असली सबक है: disallowed origin से आया सादा GET फिर भी <b>चलता है और body के साथ 200 लौटाता है</b>; बस <code>Access-Control-Allow-Origin</code> header नहीं होता, इसलिए सिर्फ़ <i>browser</i> response को page से छुपाता है। CORS server-side access control नहीं है।</p>",
        hg: "<p>Browser PUT se pehle <b>preflight</b> bhejta hai (<code>Origin</code> aur <code>Access-Control-Request-Method</code> ke saath <code>OPTIONS</code>). Allowed origin ke liye CORS middleware khud <b>204</b> se jawab deta hai, <code>Access-Control-Allow-Origin</code> aur allowed methods <code>GET,PUT</code> ke saath. <code>evil.example</code> ke liye bhi woh 204 deta hai par koi allow header <b>nahi</b> jodta, isliye browser aage badhne se mana kar dega. Aakhri line asli sabak hai: disallowed origin se aaya saada GET phir bhi <b>chalta hai aur body ke saath 200 lautata hai</b>; bas <code>Access-Control-Allow-Origin</code> header nahi hota, isliye sirf <i>browser</i> response ko page se chhupata hai. CORS server-side access control nahi hai.</p>"
      }
    },
    {
      id: "etag-304-second-request",
      frameworks: ["aspnetcore"],
      packages: ["Microsoft.AspNetCore.TestHost"],
      src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder();
builder.Logging.ClearProviders();
builder.WebHost.UseTestServer();
var app = builder.Build();

var version = 1;
app.MapGet("/doc", (HttpContext ctx) =>
{
    var etag = $"\\"v{version}\\"";
    ctx.Response.Headers.ETag = etag;
    if (ctx.Request.Headers.IfNoneMatch == etag) return Results.StatusCode(StatusCodes.Status304NotModified);
    return Results.Text($"body v{version}");
});
app.MapPut("/doc", () => { version++; return Results.NoContent(); });

await app.StartAsync();
var client = app.GetTestClient();

var first = await client.GetAsync("/doc");
var tag = first.Headers.ETag!.Tag;
Console.WriteLine($"{(int)first.StatusCode} {tag} {await first.Content.ReadAsStringAsync()}");

var second = new HttpRequestMessage(HttpMethod.Get, "/doc");
second.Headers.TryAddWithoutValidation("If-None-Match", tag);
var r2 = await client.SendAsync(second);
Console.WriteLine($"{(int)r2.StatusCode} length={(await r2.Content.ReadAsStringAsync()).Length}");

await client.PutAsync("/doc", null);   // the document changes: version becomes 2
var third = new HttpRequestMessage(HttpMethod.Get, "/doc");
third.Headers.TryAddWithoutValidation("If-None-Match", tag);
var r3 = await client.SendAsync(third);
Console.WriteLine($"{(int)r3.StatusCode} {r3.Headers.ETag!.Tag} {await r3.Content.ReadAsStringAsync()}");
await app.StopAsync();`,
      answer: "200 \"v1\" body v1\n304 length=0\n200 \"v2\" body v2",
      explain: {
        en: "<p>The first GET returns <b>200</b> with <code>ETag: \"v1\"</code> and the body. The second GET replays that tag in <code>If-None-Match</code>; the server sees it still matches the current version, so it answers <b>304 Not Modified</b> with an empty body (length 0): the client keeps its cached copy. After the PUT bumps the version to 2, the old tag no longer matches, so the third GET is a normal <b>200</b> with the new tag <code>\"v2\"</code> and the new body. ASP.NET Core does not generate API ETags for you; here the endpoint computes the tag from a version and compares headers itself.</p>",
        hi: "<p>पहला GET <b>200</b> लौटाता है, <code>ETag: \"v1\"</code> और body के साथ। दूसरा GET वही tag <code>If-None-Match</code> में दोहराता है; server देखता है कि वह अब भी मौजूदा version से मेल खाता है, इसलिए ख़ाली body (length 0) के साथ <b>304 Not Modified</b> देता है: client अपनी cached copy रखता है। PUT के version को 2 कर देने के बाद पुराना tag मेल नहीं खाता, इसलिए तीसरा GET नए tag <code>\"v2\"</code> और नई body के साथ सामान्य <b>200</b> है। ASP.NET Core API के लिए ETag अपने-आप नहीं बनाता; यहाँ endpoint version से tag बनाता है और headers ख़ुद compare करता है।</p>",
        hg: "<p>Pehla GET <b>200</b> lautata hai, <code>ETag: \"v1\"</code> aur body ke saath. Doosra GET wahi tag <code>If-None-Match</code> mein dohrata hai; server dekhta hai ki woh ab bhi maujooda version se match karta hai, isliye khaali body (length 0) ke saath <b>304 Not Modified</b> deta hai: client apni cached copy rakhta hai. PUT ke version ko 2 kar dene ke baad purana tag match nahi karta, isliye teesra GET naye tag <code>\"v2\"</code> aur nayi body ke saath saamanya <b>200</b> hai. ASP.NET Core API ke liye ETag apne-aap nahi banata; yahan endpoint version se tag banata hai aur headers khud compare karta hai.</p>"
      }
    },
    {
      id: "put-post-idempotency",
      frameworks: ["aspnetcore"],
      packages: ["Microsoft.AspNetCore.TestHost"],
      src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder();
builder.Logging.ClearProviders();
builder.WebHost.UseTestServer();
var app = builder.Build();

var orders = new List<string>();
var profileName = "none";

app.MapPost("/orders", (string item) =>
{
    orders.Add(item);
    return Results.Created($"/orders/{orders.Count}", null);
});
app.MapPut("/profile", (string name) =>
{
    profileName = name;
    return Results.NoContent();
});

await app.StartAsync();
var client = app.GetTestClient();

for (var i = 0; i < 3; i++)
{
    await client.PostAsync("/orders?item=tea", null);
    await client.PutAsync("/profile?name=asha", null);
}
Console.WriteLine($"orders={orders.Count} profile={profileName}");

var again = await client.PostAsync("/orders?item=tea", null);
Console.WriteLine(again.Headers.Location);
await app.StopAsync();`,
      answer: "orders=3 profile=asha\n/orders/4",
      explain: {
        en: "<p>Each loop sends one POST and one PUT, three times. <b>PUT</b> sets the profile name to the same value every time, so the end state is one value: <code>asha</code>. That is <b>idempotent</b>. <b>POST</b> appends a new order each time, so three calls leave three orders. A fourth POST creates order number 4, and its <code>Location</code> is <code>/orders/4</code> (a relative URL, because the handler passed a relative string). This is why a retry handler must not blindly retry a POST: the repeated call is a new order, not the same one.</p>",
        hi: "<p>हर loop एक POST और एक PUT भेजता है, तीन बार। <b>PUT</b> हर बार profile name को वही value देता है, इसलिए अंतिम state एक ही value है: <code>asha</code>। यह <b>idempotent</b> है। <b>POST</b> हर बार नया order जोड़ता है, इसलिए तीन calls के बाद तीन orders रहते हैं। चौथा POST order number 4 बनाता है, और उसका <code>Location</code> <code>/orders/4</code> है (relative URL, क्योंकि handler ने relative string दी)। इसीलिए retry handler को POST अंधाधुंध retry नहीं करना चाहिए: दोहराई गई call वही order नहीं, एक नया order है।</p>",
        hg: "<p>Har loop ek POST aur ek PUT bhejta hai, teen baar. <b>PUT</b> har baar profile name ko wahi value deta hai, isliye antim state ek hi value hai: <code>asha</code>. Yeh <b>idempotent</b> hai. <b>POST</b> har baar naya order jodta hai, isliye teen calls ke baad teen orders rehte hain. Chautha POST order number 4 banata hai, aur uska <code>Location</code> <code>/orders/4</code> hai (relative URL, kyunki handler ne relative string di). Isiliye retry handler ko POST andhadhund retry nahi karna chahiye: dohrayi gayi call wahi order nahi, ek naya order hai.</p>"
      }
    }
  ],
  revision: {
    en: [
      "Safe means read-only (GET, HEAD, OPTIONS); idempotent adds PUT and DELETE; POST and PATCH are not idempotent.",
      "PUT replaces the whole resource; PATCH sends only the changes.",
      "Return 201 with a Location header after create; 401 not authenticated, 403 not allowed, 409 conflict, 429 throttled.",
      "With [ApiController], an invalid model gets 400 ValidationProblemDetails before the action runs.",
      "UseExceptionHandler invokes your IExceptionHandler classes; AddProblemDetails gives the RFC 9457 error shape.",
      "Version by URL, query, header or media type with the Asp.Versioning packages; prefer additive changes.",
      "A JWT is signed, not encrypted: keep the payload non-secret and the lifetime short.",
      "CORS is enforced by browsers only; it does not replace authentication.",
      "Output caching lets the server decide and evict by tag; HybridCache (.NET 9+) adds stampede protection.",
      "ETag with If-None-Match gives 304 on a read; If-Match gives 412 on a stale write.",
      "Rate limiting is built in since .NET 7; set RejectionStatusCode to 429 because the default is 503.",
      "Use IHttpClientFactory with AddStandardResilienceHandler, and disable retries for unsafe methods like POST."
    ],
    meaning: {
      hi: [
        "Safe यानी सिर्फ़ पढ़ना (GET, HEAD, OPTIONS); idempotent में PUT और DELETE भी आते हैं; POST और PATCH idempotent नहीं हैं।",
        "PUT पूरा resource बदलता है; PATCH सिर्फ़ बदलाव भेजता है।",
        "create के बाद Location header के साथ 201; authenticated नहीं तो 401, इजाज़त नहीं तो 403, टकराव पर 409, throttle पर 429।",
        "[ApiController] के साथ invalid model को action चलने से पहले 400 ValidationProblemDetails मिलता है।",
        "UseExceptionHandler आपकी IExceptionHandler classes को बुलाता है; AddProblemDetails RFC 9457 error shape देता है।",
        "Asp.Versioning packages से URL, query, header या media type से version करो; additive बदलाव पसंद करो।",
        "JWT signed होता है, encrypted नहीं: payload में secret मत रखो और lifetime छोटी रखो।",
        "CORS सिर्फ़ browsers लागू करते हैं; यह authentication का विकल्प नहीं है।",
        "Output caching में server फ़ैसला करता है और tag से evict करता है; HybridCache (.NET 9+) stampede protection जोड़ता है।",
        "ETag के साथ If-None-Match पढ़ने पर 304 देता है; If-Match पुरानी write पर 412 देता है।",
        "Rate limiting .NET 7 से built-in है; RejectionStatusCode को 429 करो क्योंकि default 503 है।",
        "IHttpClientFactory के साथ AddStandardResilienceHandler use करो, और POST जैसे unsafe methods पर retries बंद करो।"
      ],
      hg: [
        "Safe yaani sirf padhna (GET, HEAD, OPTIONS); idempotent mein PUT aur DELETE bhi aate hain; POST aur PATCH idempotent nahi hain.",
        "PUT poora resource badalta hai; PATCH sirf badlaav bhejta hai.",
        "Create ke baad Location header ke saath 201; authenticated nahi to 401, ijazat nahi to 403, takraav par 409, throttle par 429.",
        "[ApiController] ke saath invalid model ko action chalne se pehle 400 ValidationProblemDetails milta hai.",
        "UseExceptionHandler aapki IExceptionHandler classes ko bulata hai; AddProblemDetails RFC 9457 error shape deta hai.",
        "Asp.Versioning packages se URL, query, header ya media type se version karo; additive badlaav pasand karo.",
        "JWT signed hota hai, encrypted nahi: payload mein secret mat rakho aur lifetime chhoti rakho.",
        "CORS sirf browsers laagu karte hain; yeh authentication ka vikalp nahi hai.",
        "Output caching mein server faisla karta hai aur tag se evict karta hai; HybridCache (.NET 9+) stampede protection jodta hai.",
        "ETag ke saath If-None-Match padhne par 304 deta hai; If-Match purani write par 412 deta hai.",
        "Rate limiting .NET 7 se built-in hai; RejectionStatusCode ko 429 karo kyunki default 503 hai.",
        "IHttpClientFactory ke saath AddStandardResilienceHandler use karo, aur POST jaise unsafe methods par retries band karo."
      ]
    }
  },
  whatsNew: {
    en: `<p>Many Web API blog posts predate these changes. What each version <b>added</b> (library features, by .NET version):</p>
<ul>
<li><b>.NET 7</b> — built-in <b>rate limiting</b> middleware (<code>Microsoft.AspNetCore.RateLimiting</code>) and <b>output caching</b> (<code>AddOutputCache</code>, tag eviction).</li>
<li><b>.NET 8</b> — <code>IExceptionHandler</code> with <code>AddExceptionHandler</code> (invoked by <code>UseExceptionHandler</code>); the resilience library <code>Microsoft.Extensions.Http.Resilience</code> with <code>AddStandardResilienceHandler</code> (built on Polly).</li>
<li><b>.NET 9</b> — built-in OpenAPI document generation (<code>Microsoft.AspNetCore.OpenApi</code>: <code>AddOpenApi</code>, <code>MapOpenApi</code>); the Web API template no longer includes Swashbuckle; <b>HybridCache</b> (<code>Microsoft.Extensions.Caching.Hybrid</code>, documented for .NET 9 and later).</li>
<li><b>.NET 10 (LTS)</b> — OpenAPI documents are generated as <b>OpenAPI 3.1</b> by default; <b>built-in validation for Minimal APIs</b>: register <code>builder.Services.AddValidation()</code> and DataAnnotations on parameters and record types give a 400 (call <code>.DisableValidation()</code> on an endpoint to opt out); handled exceptions (an <code>IExceptionHandler</code> returning <code>true</code>) no longer emit the default exception log and metrics unless you set <code>SuppressDiagnosticsCallback</code>.</li>
</ul>
<p>The checker for this tutorial runs on .NET 9, so the .NET 10-only items above are described, not executed.</p>
<p><b>Next (as of Oct 2026):</b> .NET 11 (STS) is due in November 2026; .NET 10 stays the LTS.</p>`,
    hi: `<p>बहुत से Web API blog posts इन बदलावों से पहले के हैं। हर version ने क्या <b>जोड़ा</b> (library features, .NET version के हिसाब से):</p>
<ul>
<li><b>.NET 7</b> — built-in <b>rate limiting</b> middleware (<code>Microsoft.AspNetCore.RateLimiting</code>) और <b>output caching</b> (<code>AddOutputCache</code>, tag eviction)।</li>
<li><b>.NET 8</b> — <code>AddExceptionHandler</code> के साथ <code>IExceptionHandler</code> (<code>UseExceptionHandler</code> द्वारा बुलाया जाता है); resilience library <code>Microsoft.Extensions.Http.Resilience</code> और <code>AddStandardResilienceHandler</code> (Polly पर बना)।</li>
<li><b>.NET 9</b> — built-in OpenAPI document generation (<code>Microsoft.AspNetCore.OpenApi</code>: <code>AddOpenApi</code>, <code>MapOpenApi</code>); Web API template में अब Swashbuckle नहीं आता; <b>HybridCache</b> (<code>Microsoft.Extensions.Caching.Hybrid</code>, .NET 9 और बाद के लिए documented)।</li>
<li><b>.NET 10 (LTS)</b> — OpenAPI documents default में <b>OpenAPI 3.1</b> बनते हैं; <b>Minimal APIs के लिए built-in validation</b>: <code>builder.Services.AddValidation()</code> register करो और parameters व record types पर DataAnnotations से 400 मिलता है (बाहर निकलने के लिए endpoint पर <code>.DisableValidation()</code>); handled exceptions (<code>true</code> लौटाता <code>IExceptionHandler</code>) अब default exception log और metrics नहीं देते जब तक <code>SuppressDiagnosticsCallback</code> न बदलो।</li>
</ul>
<p>इस tutorial का checker .NET 9 पर चलता है, इसलिए ऊपर के सिर्फ़-.NET 10 items बताए गए हैं, चलाए नहीं गए।</p>
<p><b>आगे (Oct 2026 तक की जानकारी):</b> .NET 11 (STS) November 2026 में आने वाला है; .NET 10 ही LTS रहेगा।</p>`,
    hg: `<p>Bahut se Web API blog posts in badlaavon se pehle ke hain. Har version ne kya <b>joda</b> (library features, .NET version ke hisaab se):</p>
<ul>
<li><b>.NET 7</b> — built-in <b>rate limiting</b> middleware (<code>Microsoft.AspNetCore.RateLimiting</code>) aur <b>output caching</b> (<code>AddOutputCache</code>, tag eviction).</li>
<li><b>.NET 8</b> — <code>AddExceptionHandler</code> ke saath <code>IExceptionHandler</code> (<code>UseExceptionHandler</code> dwara bulaya jaata hai); resilience library <code>Microsoft.Extensions.Http.Resilience</code> aur <code>AddStandardResilienceHandler</code> (Polly par bana).</li>
<li><b>.NET 9</b> — built-in OpenAPI document generation (<code>Microsoft.AspNetCore.OpenApi</code>: <code>AddOpenApi</code>, <code>MapOpenApi</code>); Web API template mein ab Swashbuckle nahi aata; <b>HybridCache</b> (<code>Microsoft.Extensions.Caching.Hybrid</code>, .NET 9 aur baad ke liye documented).</li>
<li><b>.NET 10 (LTS)</b> — OpenAPI documents default mein <b>OpenAPI 3.1</b> bante hain; <b>Minimal APIs ke liye built-in validation</b>: <code>builder.Services.AddValidation()</code> register karo aur parameters va record types par DataAnnotations se 400 milta hai (baahar nikalne ke liye endpoint par <code>.DisableValidation()</code>); handled exceptions (<code>true</code> lautata <code>IExceptionHandler</code>) ab default exception log aur metrics nahi dete jab tak <code>SuppressDiagnosticsCallback</code> na badlo.</li>
</ul>
<p>Is tutorial ka checker .NET 9 par chalta hai, isliye upar ke sirf-.NET 10 items bataye gaye hain, chalaye nahi gaye.</p>
<p><b>Aage (Oct 2026 tak ki jaankari):</b> .NET 11 (STS) November 2026 mein aane wala hai; .NET 10 hi LTS rahega.</p>`
  }
};
