window.TL_DAY = {
  day: 1,
  title: { en: "OOP", hi: "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग", hg: "Object Oriented Programming" },
  summary: {
    en: "Class is a blueprint.",
    hi: "Class एक blueprint है।",
    hg: "Class ek blueprint hai."
  },
  sections: [{
    id: "pillars",
    depth: "short",
    title: { en: "Pillars", hi: "चार स्तंभ", hg: "Chaar pillars" },
    body: { en: "Four pillars.", hi: "चार pillars होते हैं।", hg: "Chaar pillars hote hain." },
    code: [{
      caption: { en: "Hello", hi: "हेलो", hg: "Hello example" },
      src: "System.Console.WriteLine(\"hi\");",
      check: "run",
      expected: "hi"
    }]
  }],
  qa: [{
    id: "abstract-vs-interface",
    depth: "short",
    q: "Abstract class vs interface?",
    answer: "Abstract class shares state; interface defines a contract.",
    meaning: { hi: "Abstract class में state share होती है।", hg: "Abstract class mein state share hoti hai." },
    explain: { en: "Think of a template.", hi: "इसे template समझो।", hg: "Isse template samjho." }
  }],
  puzzles: [{
    id: "virtual-new",
    src: "System.Console.WriteLine(1);",
    answer: "1",
    explain: { en: "Prints one.", hi: "एक print होता है।", hg: "Ek print hota hai." }
  }],
  revision: {
    en: ["Class is a blueprint"],
    meaning: { hi: ["Class एक blueprint है"], hg: ["Class ek blueprint hai"] }
  },
  whatsNew: { en: "Primary constructors.", hi: "प्राइमरी constructors।", hg: "Primary constructors aaye hain." }
};
