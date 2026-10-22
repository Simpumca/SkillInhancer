window.TL_DAY = {
  day: 98,
  title: { en: "Web fixture", hi: "वेब", hg: "Web fixture" },
  summary: { en: "s", hi: "स", hg: "s" },
  sections: [{
    id: "web",
    depth: "short",
    title: { en: "T", hi: "ट", hg: "T" },
    body: { en: "b", hi: "ब", hg: "b" },
    code: [{
      caption: { en: "c", hi: "क", hg: "c" },
      src: "var b = Microsoft.AspNetCore.Builder.WebApplication.CreateBuilder();\nb.Build();",
      check: "compile",
      frameworks: ["aspnetcore"]
    }]
  }],
  qa: [],
  puzzles: [{
    id: "status",
    src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nawait using var app = builder.Build();\napp.MapGet(\"/ping\", () => \"pong\");\nawait app.StartAsync();\nvar res = await app.GetTestClient().GetAsync(\"/ping\");\nSystem.Console.WriteLine((int)res.StatusCode);",
    answer: "200",
    explain: { en: "e", hi: "ई", hg: "e" },
    packages: ["Microsoft.AspNetCore.TestHost"],
    frameworks: ["aspnetcore"]
  }],
  revision: { en: ["r"], meaning: { hi: ["र"], hg: ["r"] } }
};
