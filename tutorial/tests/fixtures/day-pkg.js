window.TL_DAY = {
  day: 97,
  title: { en: "Pkg fixture", hi: "पैकेज", hg: "Pkg fixture" },
  summary: { en: "s", hi: "स", hg: "s" },
  sections: [{
    id: "pkg",
    depth: "short",
    title: { en: "T", hi: "ट", hg: "T" },
    body: { en: "b", hi: "ब", hg: "b" },
    code: [{
      caption: { en: "c", hi: "क", hg: "c" },
      src: "new Azure.Identity.DefaultAzureCredential();\nConsole.WriteLine(\"ok\");",
      check: "compile",
      packages: ["Azure.Identity@1.*"]
    }]
  }],
  qa: [],
  puzzles: [],
  revision: { en: ["r"], meaning: { hi: ["र"], hg: ["r"] } }
};
