window.TL_DAY = {
  day: 99,
  title: { en: "Fixture", hi: "फिक्स्चर", hg: "Fixture" },
  summary: { en: "s", hi: "स", hg: "s" },
  sections: [{
    id: "types",
    depth: "short",
    title: { en: "T", hi: "ट", hg: "T" },
    body: { en: "b", hi: "ब", hg: "b" },
    code: [
      { caption: { en: "c", hi: "क", hg: "c" }, src: "public class Dog { public string Name { get; set; } = \"Rex\"; }", check: "compile" },
      { caption: { en: "c", hi: "क", hg: "c" }, src: "this is not C#", check: "none" }
    ]
  }],
  qa: [{
    id: "hello",
    depth: "short",
    q: "q",
    answer: "a",
    meaning: { hi: "म", hg: "m" },
    explain: { en: "e", hi: "ई", hg: "e" },
    code: [{ caption: { en: "c", hi: "क", hg: "c" }, src: "System.Console.WriteLine(\"hi\");", check: "run", expected: "hi" }]
  }],
  puzzles: [{
    id: "sum",
    src: "int a = 1, b = 2;\nSystem.Console.WriteLine(a + b);\nSystem.Console.WriteLine(\"x\");",
    answer: "4\nx",
    explain: { en: "e", hi: "ई", hg: "e" }
  }],
  revision: { en: ["r"], meaning: { hi: ["र"], hg: ["r"] } }
};
