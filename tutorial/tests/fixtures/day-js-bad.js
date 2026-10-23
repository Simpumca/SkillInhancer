window.TL_DAY = {
  day: 93,
  title: { en: "JS fixture", hi: "जेएस", hg: "JS fixture" },
  summary: { en: "s", hi: "स", hg: "s" },
  sections: [{
    id: "js",
    depth: "short",
    title: { en: "T", hi: "ट", hg: "T" },
    body: { en: "b", hi: "ब", hg: "b" },
    code: [
      { caption: { en: "c", hi: "क", hg: "c" }, lang: "javascript", src: "console.log('a');", check: "run", expected: "b" },
      { caption: { en: "c", hi: "क", hg: "c" }, lang: "javascript", src: "const = ;", check: "compile" },
      { caption: { en: "c", hi: "क", hg: "c" }, lang: "javascript", src: "const = ;", check: "run", expected: "x" },
      { caption: { en: "c", hi: "क", hg: "c" }, lang: "javascript", src: "console.log('hi');\nprocess.exit(3);", check: "run", expected: "hi" }
    ]
  }],
  qa: [],
  puzzles: [
    { id: "sum", lang: "javascript", src: "console.log(1 + 1);", answer: "3", explain: { en: "e", hi: "ई", hg: "e" } }
  ],
  revision: { en: ["r"], meaning: { hi: ["र"], hg: ["r"] } }
};
