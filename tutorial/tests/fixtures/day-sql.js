window.TL_DAY = {
  day: 96,
  title: { en: "Fixture", hi: "फिक्स्चर", hg: "Fixture" },
  summary: { en: "s", hi: "स", hg: "s" },
  sections: [{
    id: "sql",
    depth: "short",
    title: { en: "T", hi: "ट", hg: "T" },
    body: { en: "b", hi: "ब", hg: "b" },
    code: [
      { caption: { en: "c", hi: "क", hg: "c" }, lang: "sql", src: "CREATE TABLE t(id int);\nINSERT t VALUES (1),(2);\nSELECT COUNT(*) AS n FROM t;", check: "run", expected: "2" },
      { caption: { en: "c", hi: "क", hg: "c" }, lang: "sql", src: "CREATE TABLE u(id int);", check: "compile" },
      { caption: { en: "c", hi: "क", hg: "c" }, lang: "yaml", src: "a: 1", check: "none" }
    ]
  }],
  qa: [],
  puzzles: [{
    id: "sum",
    lang: "sql",
    src: "SELECT 1 + 2;",
    answer: "3",
    explain: { en: "e", hi: "ई", hg: "e" }
  }],
  revision: { en: ["r"], meaning: { hi: ["र"], hg: ["r"] } }
};
