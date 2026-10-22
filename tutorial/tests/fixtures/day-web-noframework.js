window.TL_DAY = {
  day: 97,
  title: { en: "Web fixture without frameworks", hi: "वेब", hg: "Web fixture" },
  summary: { en: "s", hi: "स", hg: "s" },
  sections: [],
  qa: [],
  puzzles: [{
    id: "status",
    src: "var builder = Microsoft.AspNetCore.Builder.WebApplication.CreateBuilder();\nSystem.Console.WriteLine(builder.Environment.EnvironmentName);",
    answer: "Production",
    explain: { en: "Needs frameworks: [\"aspnetcore\"]; without it the checker must FAIL, not skip.", hi: "ई", hg: "e" }
  }],
  revision: { en: ["r"], meaning: { hi: ["र"], hg: ["r"] } }
};
