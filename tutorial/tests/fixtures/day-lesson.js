window.TL_DAY = {
  day: 98,
  format: "lesson",
  title: { en: "Lessons", hi: "पाठ", hg: "Lessons" },
  summary: { en: "Two lessons.", hi: "दो पाठ।", hg: "Do lessons." },
  sections: [{
    id: "class-object",
    depth: "short",
    title: { en: "Class and object", hi: "Class और object", hg: "Class aur object" },
    lesson: {
      what: { en: "A class is a blueprint.", hi: "Class एक नक्शा है।", hg: "Class ek naksha hai." },
      why: { en: "To group data.", hi: "Data को साथ रखने के लिए।", hg: "Data ko saath rakhne ke liye." },
      analogy: { en: "A form and a filled form.", hi: "खाली form और भरा हुआ form।", hg: "Khaali form aur bhara hua form." },
      lines: [{
        code: "var c = new Customer { Name = \"Asha\" };",
        note: { en: "Creates an object.", hi: "एक object बनता है।", hg: "Ek object banta hai." }
      }],
      mistakes: { en: "Forgetting new.", hi: "new भूल जाना।", hg: "new bhool jaana." },
      whenToUse: { en: "Always.", hi: "हमेशा।", hg: "Hamesha." },
      exercise: {
        task: { en: "Create Ravi.", hi: "Ravi बनाओ।", hg: "Ravi banao." },
        hint: { en: "Use new.", hi: "new लिखो।", hg: "new likho." },
        solution: {
          caption: { en: "Solution", hi: "हल", hg: "Hal" },
          src: "var c = new Customer { Name = \"Ravi\" };\nSystem.Console.WriteLine(c.Name);\nclass Customer { public string Name { get; set; } = \"\"; }",
          check: "run",
          expected: "Ravi"
        }
      },
      quiz: {
        q: { en: "What is an object?", hi: "Object क्या है?", hg: "Object kya hai?" },
        options: [
          { en: "An instance", hi: "एक instance", hg: "Ek instance" },
          { en: "A keyword", hi: "एक keyword", hg: "Ek keyword" }
        ],
        answer: 0,
        explain: { en: "new makes an instance.", hi: "new से instance बनता है।", hg: "new se instance banta hai." }
      },
      recap: { en: "Class = blueprint.", hi: "Class = नक्शा।", hg: "Class = naksha." }
    },
    code: [{
      caption: { en: "Customer", hi: "Customer का उदाहरण", hg: "Customer example" },
      src: "var c = new Customer { Name = \"Asha\" };\nSystem.Console.WriteLine(c.Name);\nclass Customer { public string Name { get; set; } = \"\"; }",
      check: "run",
      expected: "Asha"
    }]
  }, {
    id: "methods",
    depth: "short",
    title: { en: "Methods", hi: "Methods (काम)", hg: "Methods" },
    lesson: {
      buildsOn: { en: "Adds behaviour to Customer.", hi: "Customer में व्यवहार जोड़ता है।", hg: "Customer mein behaviour jodta hai." },
      what: { en: "A method is an action.", hi: "Method एक काम है।", hg: "Method ek kaam hai." },
      why: { en: "Keep logic with data.", hi: "Logic को data के साथ रखो।", hg: "Logic ko data ke saath rakho." },
      analogy: { en: "A button on a machine.", hi: "मशीन का बटन।", hg: "Machine ka button." },
      focus: {
        caption: { en: "Focus", hi: "मुख्य हिस्सा", hg: "Focus" },
        src: "public string Greet() => $\"Hi {Name}\";",
        check: "none"
      },
      lines: [{
        code: "public string Greet() => $\"Hi {Name}\";",
        note: { en: "Returns a greeting.", hi: "Greeting लौटाता है।", hg: "Greeting return karta hai." }
      }],
      mistakes: { en: "Public fields.", hi: "Public fields रखना।", hg: "Public fields rakhna." },
      whenToUse: { en: "For behaviour.", hi: "व्यवहार के लिए।", hg: "Behaviour ke liye." },
      exercise: {
        task: { en: "Add Bye().", hi: "Bye() जोड़ो।", hg: "Bye() jodo." },
        solution: {
          caption: { en: "Solution", hi: "हल", hg: "Hal" },
          src: "class Customer { public string Name { get; set; } = \"\"; public string Bye() => $\"Bye {Name}\"; }",
          check: "compile"
        }
      },
      quiz: {
        q: { en: "Where does logic go?", hi: "Logic कहाँ जाता है?", hg: "Logic kahan jaata hai?" },
        options: [
          { en: "In methods", hi: "Methods में", hg: "Methods mein" },
          { en: "In comments", hi: "Comments में", hg: "Comments mein" },
          { en: "Nowhere", hi: "कहीं नहीं", hg: "Kahin nahi" }
        ],
        answer: 0,
        explain: { en: "Methods hold behaviour.", hi: "Methods में व्यवहार होता है।", hg: "Methods mein behaviour hota hai." }
      },
      recap: { en: "Method = action.", hi: "Method = काम।", hg: "Method = kaam." }
    },
    code: [{
      caption: { en: "Greet", hi: "Greet का उदाहरण", hg: "Greet example" },
      src: "var c = new Customer { Name = \"Asha\" };\nSystem.Console.WriteLine(c.Greet());\nclass Customer\n{\n    public string Name { get; set; } = \"\";\n    public string Greet() => $\"Hi {Name}\";\n}",
      check: "run",
      expected: "Hi Asha"
    }]
  }, {
    id: "deep-hiding",
    depth: "detailed",
    title: { en: "Method hiding", hi: "Method छिपाना", hg: "Method hiding" },
    body: { en: "Use new to hide.", hi: "छिपाने के लिए new।", hg: "Chhupane ke liye new." }
  }],
  qa: [{
    id: "q1",
    depth: "short",
    q: "What is a class?",
    answer: "A blueprint for objects.",
    meaning: { hi: "Objects का नक्शा।", hg: "Objects ka naksha." },
    explain: { en: "Blueprint.", hi: "नक्शा।", hg: "Naksha." }
  }],
  puzzles: [{
    id: "p1",
    src: "System.Console.WriteLine(2);",
    answer: "2",
    explain: { en: "Prints two.", hi: "दो print होता है।", hg: "Do print hota hai." }
  }],
  revision: {
    en: ["Class is a blueprint"],
    meaning: { hi: ["Class एक नक्शा है"], hg: ["Class ek naksha hai"] }
  }
};
