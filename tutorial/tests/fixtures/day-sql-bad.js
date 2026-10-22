window.TL_DAY = {
  day: 95,
  title: { en: "Fixture", hi: "फिक्स्चर", hg: "Fixture" },
  summary: { en: "s", hi: "स", hg: "s" },
  sections: [{
    id: "sql",
    depth: "short",
    title: { en: "T", hi: "ट", hg: "T" },
    body: { en: "b", hi: "ब", hg: "b" },
    code: [
      { caption: { en: "c", hi: "क", hg: "c" }, lang: "sql", src: "CREATE TABLE t(id int);\nINSERT t VALUES (1),(2);\nSELECT COUNT(*) AS n FROM t;", check: "run", expected: "5" },
      { caption: { en: "c", hi: "क", hg: "c" }, lang: "sql", src: "SELECT * FROM no_such_table;", check: "compile" },
      { caption: { en: "c", hi: "क", hg: "c" }, lang: "yaml", src: "a: 1", check: "none" }
    ]
  }],
  qa: [],
  puzzles: [{
    id: "sum",
    lang: "sql",
    src: "SELECT 1 + 2;",
    answer: "4",
    explain: { en: "e", hi: "ई", hg: "e" }
  }],
  revision: { en: ["r"], meaning: { hi: ["र"], hg: ["r"] } }
};
