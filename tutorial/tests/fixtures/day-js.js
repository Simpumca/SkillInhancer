window.TL_DAY = {
  day: 94,
  title: { en: "JS fixture", hi: "जेएस", hg: "JS fixture" },
  summary: { en: "s", hi: "स", hg: "s" },
  sections: [{
    id: "js",
    depth: "short",
    title: { en: "T", hi: "ट", hg: "T" },
    body: { en: "b", hi: "ब", hg: "b" },
    code: [
      { caption: { en: "c", hi: "क", hg: "c" }, lang: "javascript", src: "const xs = [3, 1, 2].sort((a, b) => a - b);\nconsole.log(xs.join(','));\nconsole.error('noise');", check: "run", expected: "1,2,3" },
      { caption: { en: "c", hi: "क", hg: "c" }, lang: "javascript", src: "export const f = (n) => n * 2;", check: "compile" },
      { caption: { en: "c", hi: "क", hg: "c" }, lang: "jsx", src: "const a = <div/>;", check: "none" },
      { caption: { en: "c", hi: "क", hg: "c" }, lang: "html", src: "<p>x</p>", check: "none" }
    ]
  }],
  qa: [],
  puzzles: [
    { id: "sum", lang: "javascript", src: "console.log(1 + 2);\nconsole.log(typeof null);", answer: "3\nobject", explain: { en: "e", hi: "ई", hg: "e" } }
  ],
  revision: { en: ["r"], meaning: { hi: ["र"], hg: ["r"] } }
};
