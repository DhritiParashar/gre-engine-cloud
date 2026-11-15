// Official ETS GRE General Question Bank (Text Completion, Sentence Equivalence, Academic RC, Quantitative Comparison, Problem Solving & Numeric Entry)
window.GRE_OFFICIAL_BANK = {
  verbal: {
    textCompletion: [
      {
        id: "GRE-TC-101",
        subtype: "1-Blank Text Completion",
        difficulty: "Hard (162–168 Level)",
        stem: "Although the biographer's exhaustive archival research was widely praised for its empirical rigor, her reluctance to adjudicate between conflicting eyewitness accounts rendered the final narrative frustratingly ________.",
        blanks: [
          ["noncommittal", "tendentious", "panegyrical", "aphoristic", "pellucid"]
        ],
        correct: [0],
        explanation: "Pivot 'Although' contrasts 'empirical rigor' with 'reluctance to adjudicate between conflicting accounts'. Avoiding taking a stand makes a narrative 'noncommittal' (evasive/neutral). 'Tendentious' (biased) is the exact opposite trap."
      },
      {
        id: "GRE-TC-102",
        subtype: "2-Blank Text Completion",
        difficulty: "Hard (164–170 Level)",
        stem: "Early critics dismissed the composer's late string quartets as (i) ________ exercises in abstract formalism, yet subsequent musicologists have demonstrated that beneath their austere surface lies a deeply (ii) ________ emotional architecture.",
        blanks: [
          ["arid", "maudlin", "eclectic"],
          ["affecting", "jejune", "derivative"]
        ],
        correct: [0, 0],
        explanation: "Blank (i) pairs with 'abstract formalism' and 'austere surface' -> 'arid' (dry, lacking warmth). Pivot 'yet' reverses this in Blank (ii) -> 'affecting' (deeply moving)."
      },
      {
        id: "GRE-TC-103",
        subtype: "3-Blank Text Completion",
        difficulty: "Very Hard (166–170 Level)",
        stem: "Far from (i) ________ the debate over urban zoning reform, the commission's report actually (ii) ________ existing divisions, largely because its recommendations were so (iii) ________ that both developers and preservationists claimed vindication.",
        blanks: [
          ["settling", "igniting", "obfuscating"],
          ["exacerbated", "ameliorated", "circumvented"],
          ["equivocal", "draconian", "unambiguous"]
        ],
        correct: [0, 0, 0],
        explanation: "'Far from (i)' sets up a contrast with (ii): instead of 'settling' the debate, it 'exacerbated' divisions. Why could both opposing sides claim vindication? Because the recommendations were 'equivocal' (open to two opposing interpretations)."
      },
      {
        id: "GRE-TC-104",
        subtype: "2-Blank Text Completion",
        difficulty: "Medium-Hard (158–164 Level)",
        stem: "While proponents of algorithmic hiring argue that automated screening (i) ________ human prejudice, empirical audits reveal that models trained on historical employment data frequently (ii) ________ the very inequities they were designed to eliminate.",
        blanks: [
          ["mitigates", "instantiates", "magnifies"],
          ["entrench", "dissipate", "forestall"]
        ],
        correct: [0, 0],
        explanation: "'While proponents argue X, empirical audits reveal Y': proponents claim it 'mitigates' (reduces) prejudice, whereas audits show models 'entrench' (cement/reinforce) existing inequities."
      }
    ],
    sentenceEquivalence: [
      {
        id: "GRE-SE-201",
        subtype: "Sentence Equivalence (Select Exact 2)",
        difficulty: "Hard (163–169 Level)",
        stem: "Despite the CEO's public assurances that the merger would proceed seamlessly, internal memos revealed a culture of ________ among senior vice presidents regarding incompatible software infrastructures.",
        options: ["trepidation", "nonchalance", "apprehension", "alacrity", "complicity", "hubris"],
        correct: [0, 2],
        explanation: "'Despite public assurances' signals internal worry/unease. 'Trepidation' and 'apprehension' both mean anxiety or fearful anticipation, producing two equivalent sentences."
      },
      {
        id: "GRE-SE-202",
        subtype: "Sentence Equivalence (Select Exact 2)",
        difficulty: "Hard (164–170 Level)",
        stem: "Historians have long noted that revolutions rarely unfold according to the ________ blueprints drafted by their intellectual architects; instead, contingent street-level pressures continually reshape ideological goals.",
        options: ["schematic", "capricious", "doctrinaire", "improvisational", "dogmatic", "ephemeral"],
        correct: [2, 4],
        explanation: "Contrasted with 'contingent street-level pressures' that 'continually reshape' goals, the initial blueprints were rigid and inflexible: 'doctrinaire' and 'dogmatic' form the exact synonym pair."
      },
      {
        id: "GRE-SE-203",
        subtype: "Sentence Equivalence (Select Exact 2)",
        difficulty: "Medium-Hard (158–163 Level)",
        stem: "Because the geological strata in the basin had been repeatedly overturned by tectonic folding, dating the fossilized pollen required ________ paleobotanical detective work.",
        options: ["perfunctory", "painstaking", "assiduous", "desultory", "specious", "trenchant"],
        correct: [1, 2],
        explanation: "Overturned geological strata make dating difficult, requiring thorough, diligent effort: 'painstaking' and 'assiduous' both mean meticulous and diligent."
      }
    ],
    readingComprehension: [
      {
        id: "GRE-RC-301",
        subtype: "Academic RC • Inference & Select-in-Passage",
        difficulty: "Hard (164–170 Level)",
        passageSentences: [
          "For decades, marine biologists attributed the vibrant coloration of deep-reef corals primarily to photoprotection against ultraviolet radiation.",
          "However, recent spectroscopic surveys at depths exceeding sixty meters—where UV irradiance is negligible—have documented intense red and orange fluorescence among several scleractinian species.",
          "Researchers now hypothesize that these long-wavelength pigments convert scarce blue light into wavelengths capable of penetrating deeper into coral tissue, thereby sustaining photosynthetic endosymbionts in light-starved habitats.",
          "Paradoxically, the very pigments that shield shallow-water corals from solar excess appear to function as photon-harvesting amplifiers in the mesophotic twilight zone."
        ],
        questions: [
          {
            qid: "GRE-RC-301A",
            format: "Single-Answer MCQ",
            prompt: "The passage suggests which of the following about the photoprotection hypothesis?",
            options: [
              "It has been entirely invalidated for shallow-water scleractinian corals.",
              "It cannot fully account for the presence of fluorescent pigments in corals inhabiting depths beyond sixty meters.",
              "It correctly predicted that blue light penetrates deeper into coral tissue than red light.",
              "It was formulated after spectroscopic surveys of mesophotic reefs were completed.",
              "It overestimates the number of photosynthetic endosymbionts present in shallow reefs."
            ],
            correct: [1],
            explanation: "Sentence 2 notes that UV irradiance is negligible below 60m yet fluorescence persists, showing photoprotection alone cannot explain deep-reef pigmentation while Sentence 4 confirms its role in shallow water."
          },
          {
            qid: "GRE-RC-301B",
            format: "Select-in-Passage",
            prompt: "Select the sentence in the passage that states the proposed physiological mechanism by which deep-reef pigments assist symbiotic organisms.",
            correctSentenceIndex: 2,
            explanation: "Sentence 3 ('Researchers now hypothesize that these long-wavelength pigments convert scarce blue light...') explicitly describes the mechanism."
          }
        ]
      }
    ]
  },
  quant: [
    {
      id: "GRE-QC-401",
      subtype: "Quantitative Comparison",
      difficulty: "Hard (164–170 Level)",
      stem: "x and y are integers such that x^2 + y^2 = 25 and x > y.",
      quantityA: "x + y",
      quantityB: "5",
      options: [
        "Quantity A is greater.",
        "Quantity B is greater.",
        "The two quantities are equal.",
        "The relationship cannot be determined from the information given."
      ],
      correct: [3],
      explanation: "Integer pairs (x, y) with x^2 + y^2 = 25 and x > y include (4, 3) -> x + y = 7 (> 5), and (3, -4) -> x + y = -1 (< 5). Since Quantity A can be greater or less than 5, choose (D)."
    },
    {
      id: "GRE-QC-402",
      subtype: "Quantitative Comparison",
      difficulty: "Medium-Hard (159–164 Level)",
      stem: "Set S consists of 7 consecutive odd integers whose median is m, where m > 10.",
      quantityA: "The standard deviation of Set S",
      quantityB: "The standard deviation of the set obtained by multiplying each element of S by -1",
      options: [
        "Quantity A is greater.",
        "Quantity B is greater.",
        "The two quantities are equal.",
        "The relationship cannot be determined from the information given."
      ],
      correct: [2],
      explanation: "Multiplying every element of a dataset by -1 reflects all values across 0 without changing pairwise distances from the mean. Thus both standard deviations are identical -> (C)."
    },
    {
      id: "GRE-PS-403",
      subtype: "Numeric Entry (Exact Value)",
      difficulty: "Hard (165–170 Level)",
      stem: "If 3^(2x - 1) + 3^(2x) = 324, what is the value of x?",
      numericAnswer: "2.5",
      options: ["2.5", "2", "3", "3.5", "1.5"],
      correct: [0],
      explanation: "Factor out 3^(2x - 1): 3^(2x - 1) * (1 + 3) = 324 -> 4 * 3^(2x - 1) = 324 -> 3^(2x - 1) = 81 = 3^4. Hence 2x - 1 = 4 -> x = 2.5."
    },
    {
      id: "GRE-PS-404",
      subtype: "Multiple-Answer Problem Solving (Select All That Apply)",
      difficulty: "Hard (163–169 Level)",
      stem: "If n is a positive integer not divisible by 3, which of the following MUST be divisible by 3? (Select all that apply.)",
      multiSelect: true,
      options: [
        "n^2 - 1",
        "n^2 + 2",
        "2n^2 + 1",
        "n^3 - n",
        "n^2 + n"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Since n is not divisible by 3, n = 3k ± 1, so n^2 ≡ 1 (mod 3). Thus n^2 - 1 ≡ 0, n^2 + 2 ≡ 0, 2n^2 + 1 ≡ 0, and n^3 - n = n(n^2 - 1) ≡ 0 (mod 3). Only n^2 + n fails when n = 1 (gives 2)."
    }
  ]
};

// Override inherited IPM/CAT arrays so no grammar, parajumbles, or synonym flashcards appear anywhere
window.IPM_VARC_BANK = window.GRE_OFFICIAL_BANK.verbal.textCompletion.map(q => ({
  id: q.id, topic: q.subtype, difficulty: q.difficulty, question: q.stem,
  options: q.blanks[0], answer: q.correct[0], explanation: q.explanation
}));
window.IPM_DILR_VARC_BANK = window.IPM_VARC_BANK;
window.IPM_QUANT_CORE = [
  {
    id: "GRE-MOD-QC",
    title: "Quantitative Comparison (Quantity A vs. Quantity B)",
    weightage: "High Yield • ~10–11 Qs across 2 GRE Quant Sections",
    refresher: "Always test boundary cases: negative numbers, fractions between 0 and 1, zero, and extreme values. If substituting two valid test cases reverses which quantity is larger, immediately select (D) The relationship cannot be determined.",
    shortcuts: [
      "Subtract or add identical terms from both Quantity A and Quantity B to simplify algebraic expressions.",
      "Never assume geometric figures are drawn to scale unless explicitly stated."
    ],
    drills: window.GRE_OFFICIAL_BANK.quant.filter(q => q.subtype.includes("Quantitative Comparison")).map(q => ({
      id: q.id, question: `${q.stem}\n\nQuantity A: ${q.quantityA}\nQuantity B: ${q.quantityB}`,
      options: q.options, answer: q.correct[0], explanation: q.explanation
    }))
  },
  {
    id: "GRE-MOD-PS",
    title: "Problem Solving, Multi-Select & Numeric Entry",
    weightage: "Core Quant • ~16–17 Qs (Algebra, Number Properties, Data Analysis)",
    refresher: "GRE Problem Solving includes standard 5-choice MCQs, Multiple-Answer ('Select all that apply' — zero partial credit), and exact Numeric Entry boxes.",
    shortcuts: [
      "For remainders and divisibility (e.g., n not divisible by 3), test n = 1 and n = 2 or write n = 3k ± 1.",
      "In Numeric Entry, convert fractions or radicals cleanly to exact decimals when prompted."
    ],
    drills: window.GRE_OFFICIAL_BANK.quant.filter(q => !q.subtype.includes("Quantitative Comparison")).map(q => ({
      id: q.id, question: q.stem, options: q.options, answer: q.correct[0], explanation: q.explanation
    }))
  }
];
// Exhaustive GRE General Chapter Refresher, Concepts, Traps & Practice Drills (Eliminates UNDEFINED & 0 Drills)
window.IPM_REFRESHERS = window.IPM_REFRESHERS || {};
window.IPM_REFRESHERS["GRE-MOD-QC"] = {
  title: "Quantitative Comparison (QC) — ETS 165–170 Mastery Guide",
  summary: "Quantitative Comparison comprises ~40% of GRE Quant (10–11 of 27 questions). Rather than computing exact values, compare Quantity A and Quantity B via algebraic cancellation and boundary-value testing (FROZEN: Fractions, Roots, One, Zero, Extremes, Negatives).",
  keyFormulas: [
    "Allowed Operations: Add/subtract any expression to both quantities; multiply/divide both by a strictly POSITIVE constant.",
    "Forbidden Operations: Multiplying/dividing by a variable whose sign is unknown, or squaring when quantities can be negative.",
    "Choice (D) Rule: If two valid substitutions yield different comparison directions (e.g., A > B once and A < B once), the answer is immediately (D)."
  ],
  workedExample: "Compare x^2 vs. x^3 given x != 0. Test x = 2 -> 4 < 8 (B). Test x = -2 -> 4 > -8 (A). Different outcomes -> (D)."
};
window.IPM_REFRESHERS["GRE-MOD-PS"] = {
  title: "GRE Problem Solving, Multi-Select & Numeric Entry — Complete Blueprint",
  summary: "Covers standard 5-option MCQs, 'Select all that apply' (zero partial credit), and exact Numeric Entry boxes across Algebra, Number Properties, Coordinate Geometry, Combinatorics, and Data Analysis (Normal Distribution & Quartiles).",
  keyFormulas: [
    "Normal Distribution 68-95-99.7 Rule: ~34% between mean and +1 SD; ~13.5% between +1 SD and +2 SD; ~2.5% above +2 SD.",
    "Remainder Identity: If n is not divisible by 3, n = 3k ± 1 => n^2 ≡ 1 (mod 3).",
    "Quadratic Vieta's Formulas: Sum of roots = -b/a; Product of roots = c/a."
  ],
  workedExample: "If 3^(2x - 1) + 3^(2x) = 324, factor out 3^(2x - 1) * (1 + 3) = 324 => 3^(2x - 1) = 81 = 3^4 => 2x - 1 = 4 => x = 2.5."
};

window.IPM_QUANT_CORE = [
  {
    id: "GRE-MOD-QC",
    pillar: "ETS QUANTITATIVE COMPARISON",
    title: "Quantitative Comparison (Quantity A vs. Quantity B)",
    weightage: "High Yield • 10–11 Qs across 2 Adaptive Sections",
    concepts: [
      {
        heading: "The FROZEN Boundary-Testing Protocol",
        formula: "Test: Fractions (1/2), Roots (√2), One (1), Zero (0), Extremes (100), Negatives (-2)",
        derivation: "ETS designs QC traps where positive integers satisfy Quantity A > Quantity B, while negative numbers or fractions in (0, 1) reverse the inequality.",
        shortcut: "Always test x = 1/2 and x = -2 whenever variables lack explicit domain restrictions."
      },
      {
        heading: "Standard Deviation Invariance Under Shifts & Reflections",
        formula: "SD(X + c) = SD(X)  |  SD(-X) = SD(X)  |  SD(kX) = |k| * SD(X)",
        derivation: "Adding a constant translates all points equally without altering spread; multiplying by -1 reflects points across 0 without altering pairwise distances.",
        shortcut: "Never compute explicit square roots when comparing standard deviations of shifted or negated datasets."
      }
    ],
    traps: [
      {
        title: "Assuming Geometric Figures Are Drawn to Scale",
        wrongStep: "Visually judging an acute angle or side length from a GRE diagram.",
        correction: "Stretch or compress unmarked angles/sides to extreme limits while obeying given constraints.",
        penalty: "Lost 170 Quant Ceiling"
      }
    ],
    questions: [
      {
        id: "GRE-QC-Q1",
        stem: "x and y are integers such that x^2 + y^2 = 25 and x > y.\n\nQuantity A: x + y\nQuantity B: 5",
        options: ["Quantity A is greater.", "Quantity B is greater.", "The two quantities are equal.", "The relationship cannot be determined from the information given."],
        answer: 3,
        explanation: "(4, 3) gives x + y = 7 > 5, whereas (3, -4) gives x + y = -1 < 5. Choose (D)."
      },
      {
        id: "GRE-QC-Q2",
        stem: "Set S consists of 7 consecutive odd integers with median m > 10.\n\nQuantity A: Standard deviation of S\nQuantity B: Standard deviation of {-x : x in S}",
        options: ["Quantity A is greater.", "Quantity B is greater.", "The two quantities are equal.", "The relationship cannot be determined from the information given."],
        answer: 2,
        explanation: "Negating every element preserves all pairwise distances from the mean, so both standard deviations are equal -> (C)."
      },
      {
        id: "GRE-QC-Q3",
        stem: "0 < x < 1\n\nQuantity A: x^2 + x^3\nQuantity B: x + x^4",
        options: ["Quantity A is greater.", "Quantity B is greater.", "The two quantities are equal.", "The relationship cannot be determined from the information given."],
        answer: 1,
        explanation: "Subtract Quantity A from Quantity B: (x - x^2) - (x^3 - x^4) = x(1 - x) - x^3(1 - x) = x(1 - x)(1 - x^2) > 0 for 0 < x < 1. Thus Quantity B is greater -> (B)."
      }
    ]
  },
  {
    id: "GRE-MOD-PS",
    pillar: "ETS PROBLEM SOLVING & DATA ANALYSIS",
    title: "Algebra, Number Properties, Combinatorics & Normal Distributions",
    weightage: "Core Quant • 16–17 Qs (MCQ, Multi-Select & Numeric Entry)",
    concepts: [
      {
        heading: "Exponential Equation Factoring",
        formula: "a^(x+k) ± a^x = a^x * (a^k ± 1)",
        derivation: "Factor out the smallest power of the common base to collapse sums of exponentials into a single prime-factor product.",
        shortcut: "Factor out 3^(2x - 1) immediately when powers differ by 1."
      },
      {
        heading: "Normal Distribution Percentile Benchmarks",
        formula: "Mean ± 1 SD = 68%  |  Mean ± 2 SD = 95%  |  Above Mean + 1 SD ≈ 16%",
        derivation: "Symmetry around the mean splits the tails cleanly into 34% / 13.5% / 2.5%.",
        shortcut: "A score at +1 SD corresponds to the 84th percentile (50% + 34%)."
      }
    ],
    traps: [
      {
        title: "Partial Credit Fallacy on GRE Multi-Select",
        wrongStep: "Selecting 3 out of 4 true statements on 'Select all that apply'.",
        correction: "ETS awards 0 points unless EVERY true option and NO false option is selected.",
        penalty: "0 Points Awarded"
      }
    ],
    questions: [
      {
        id: "GRE-PS-Q1",
        stem: "If 3^(2x - 1) + 3^(2x) = 324, what is the exact value of x?",
        options: ["2.5", "2.0", "3.0", "3.5"],
        answer: 0,
        explanation: "3^(2x - 1) * (1 + 3) = 324 => 3^(2x - 1) = 81 = 3^4 => 2x - 1 = 4 => x = 2.5."
      },
      {
        id: "GRE-PS-Q2",
        stem: "In a normally distributed dataset with mean 500 and standard deviation 80, approximately what percent of observations lie between 420 and 660?",
        options: ["81.5%", "68.0%", "84.0%", "95.0%"],
        answer: 0,
        explanation: "420 is -1 SD (34% below mean) and 660 is +2 SD (34% + 13.5% = 47.5% above mean). Total = 34% + 47.5% = 81.5%."
      },
      {
        id: "GRE-PS-Q3",
        stem: "How many positive integers less than 100 are divisible by neither 2 nor 3?",
        options: ["33", "32", "34", "17"],
        answer: 0,
        explanation: "From 1 to 99 (99 integers): multiples of 2 = 49, multiples of 3 = 33, multiples of 6 = 16. Divisible by 2 or 3 = 49 + 33 - 16 = 66. Neither = 99 - 66 = 33."
      }
    ]
  }
];
window.IPM_HIGHER_MATH = [];
window.IPM_DEEP_MODULES = [];
window.IPM_CHAPTER_REFRESHERS = window.IPM_CHAPTER_REFRESHERS || {};
window.IPM_CHAPTER_REFRESHERS["GRE-MOD-QC"] = {
  overview: "Quantitative Comparison (QC) represents ~40% of ETS GRE Quant (10–11 questions across 2 section-adaptive modules). Instead of computing exact values, compare Quantity A and Quantity B using algebraic cancellation and systematic boundary testing (FROZEN: Fractions, Roots, One, Zero, Extremes, Negatives).",
  prerequisites: [
    "Allowed Transformations: Add/subtract any expression on both sides; multiply/divide by strictly POSITIVE constants only.",
    "Forbidden Transformations: Never multiply/divide by a variable of unknown sign or square both sides when quantities may be negative.",
    "Choice (D) Trigger: Finding two valid test values that reverse the inequality immediately proves Choice (D)."
  ],
  workedExamples: [
    {
      level: "Foundation",
      problem: "Compare Quantity A: (x + 2)^2 vs. Quantity B: x^2 + 4 given x > 0.",
      solution: "Expand Quantity A = x^2 + 4x + 4. Subtract (x^2 + 4) from both sides -> Compare 4x vs. 0. Since x > 0, 4x > 0 -> Quantity A is greater (A)."
    },
    {
      level: "Advanced",
      problem: "x and y are integers with x^2 + y^2 = 25 and x > y. Compare Quantity A: x + y vs. Quantity B: 5.",
      solution: "Test (4, 3): x + y = 7 > 5. Test (3, -4): x + y = -1 < 5. Both directions occur -> Relationship cannot be determined (D)."
    }
  ]
};
window.IPM_CHAPTER_REFRESHERS["GRE-MOD-PS"] = {
  overview: "GRE Problem Solving (16–17 questions) tests Arithmetic, Algebra, Coordinate Geometry, Combinatorics, and Data Analysis (Normal Distributions, Quartiles, Standard Deviation) across 5-choice MCQs, Multiple-Answer ('Select all that apply' — zero partial credit), and exact Numeric Entry.",
  prerequisites: [
    "Normal Distribution Empirical Rule: 68% within ±1 SD (34% each side), 95% within ±2 SD (47.5% each side), 99.7% within ±3 SD.",
    "Prime Factorization & Divisors: N = p^a * q^b has (a + 1)(b + 1) positive factors.",
    "Vieta's Formulas: For ax^2 + bx + c = 0, sum of roots = -b/a and product of roots = c/a."
  ],
  workedExamples: [
    {
      level: "Foundation",
      problem: "Solve for exact x: 3^(2x - 1) + 3^(2x) = 324.",
      solution: "Factor out 3^(2x - 1) * (1 + 3) = 324 => 3^(2x - 1) = 81 = 3^4 => 2x - 1 = 4 => x = 2.5."
    },
    {
      level: "Advanced",
      problem: "In a normal distribution with mean 500 and SD 80, what percentage of values fall between 420 and 660?",
      solution: "420 is -1 SD (34% below mean) and 660 is +2 SD (47.5% above mean). Total = 34% + 47.5% = 81.5%."
    }
  ]
};
window.IPM_DEEP_MODULES = [];
window.IPM_HIGHER_MATH = [];
window.IPM_CHAPTER_REFRESHERS = {
  "GRE-MOD-QC": {
    overview: "Quantitative Comparison (QC) comprises ~40% of ETS GRE Quant (10–11 questions across 2 section-adaptive modules on the 130–170 scale). Instead of solving for exact numeric outputs, compare Quantity A and Quantity B using algebraic cancellation and systematic FROZEN boundary testing (Fractions, Roots, One, Zero, Extremes, Negatives).",
    prerequisites: [
      "Allowed Operations: Add/subtract any expression on both sides; multiply/divide by strictly POSITIVE constants only.",
      "Forbidden Operations: Never multiply/divide by a variable of unknown sign or square both sides when quantities can be negative.",
      "Choice (D) Rule: If two valid test substitutions produce opposite comparison directions, immediately select Choice (D)."
    ],
    corePrinciples: [
      "FROZEN Boundary Law: Always test x = 1/2, x = 0, x = 1, x = -2, and x = 100 whenever variables lack explicit domain bounds.",
      "Standard Deviation Shift/Reflection Law: SD(X + c) = SD(X) and SD(-X) = SD(X); scaling by k multiplies SD by |k|.",
      "Diagram Non-Scale Law: Never infer acute/obtuse angles or segment ratios visually from ETS geometry figures."
    ],
    workedExamples: [
      {
        level: "Foundation",
        problem: "Compare Quantity A: (x + 2)^2 vs. Quantity B: x^2 + 4 given x > 0.",
        steps: [
          "Expand Quantity A = x^2 + 4x + 4.",
          "Subtract (x^2 + 4) from both quantities -> Compare 4x vs. 0.",
          "Since x > 0, 4x > 0 => Quantity A is greater (Choice A)."
        ]
      },
      {
        level: "CAT 95%ile",
        problem: "Given 0 < x < 1, compare Quantity A: x^2 + x^3 vs. Quantity B: x + x^4.",
        steps: [
          "Compute Quantity B - Quantity A = (x - x^2) - (x^3 - x^4).",
          "Factor out common terms: x(1 - x) - x^3(1 - x) = x(1 - x)(1 - x^2).",
          "Since 0 < x < 1, all three factors are strictly positive => Quantity B is greater (Choice B)."
        ]
      },
      {
        level: "CAT 99.5%ile",
        problem: "x and y are integers such that x^2 + y^2 = 25 and x > y. Compare Quantity A: x + y vs. Quantity B: 5.",
        steps: [
          "Test valid integer pair (4, 3): 4^2 + 3^2 = 25 and 4 > 3 => x + y = 7 (> 5).",
          "Test valid integer pair (3, -4): 3^2 + (-4)^2 = 25 and 3 > -4 => x + y = -1 (< 5).",
          "Both A > B and A < B occur => Relationship cannot be determined (Choice D)."
        ]
      }
    ]
  },
  "GRE-MOD-PS": {
    overview: "GRE Problem Solving (16–17 questions) spans Algebra, Number Properties, Coordinate Geometry, Combinatorics, and Data Analysis (Normal Distributions, Quartiles, Percentiles) across 5-choice MCQs, Multiple-Answer ('Select all that apply' — zero partial credit), and exact Numeric Entry boxes.",
    prerequisites: [
      "Normal Distribution 68-95-99.7 Rule: ±1 SD = 68% (34% each side); ±2 SD = 95% (47.5% each side).",
      "Prime Factorization Divisor Count: N = p^a * q^b has (a + 1)(b + 1) positive factors.",
      "Quadratic Vieta Formulas: Sum of roots = -b/a; Product of roots = c/a."
    ],
    corePrinciples: [
      "Exponential Common-Base Factoring Law: Factor out the lowest power of the shared base to collapse sums of exponentials.",
      "Zero-Partial-Credit Multi-Select Law: Test every option independently on 'Select all that apply' prompts.",
      "Inclusion-Exclusion Counting Law: |A U B| = |A| + |B| - |A ∩ B|."
    ],
    workedExamples: [
      {
        level: "Foundation",
        problem: "[Numeric Entry] Solve for exact x: 3^(2x - 1) + 3^(2x) = 324.",
        steps: [
          "Factor out 3^(2x - 1): 3^(2x - 1) * (1 + 3) = 324.",
          "Divide by 4: 3^(2x - 1) = 81 = 3^4 => 2x - 1 = 4 => x = 2.5."
        ]
      },
      {
        level: "CAT 99.5%ile",
        problem: "In a normal distribution with mean 500 and SD 80, what percentage of observations fall between 420 and 660?",
        steps: [
          "420 is 1 SD below the mean (34% of distribution).",
          "660 is 2 SDs above the mean (34% + 13.5% = 47.5% of distribution).",
          "Total percentage between 420 and 660 = 34% + 47.5% = 81.5%."
        ]
      }
    ]
  }
};

window.IPM_QUANT_CORE = [
  {
    id: "GRE-MOD-QC",
    pillar: "ETS QUANTITATIVE COMPARISON",
    title: "Quantitative Comparison (Quantity A vs. Quantity B)",
    weightage: "High Yield • 10–11 Qs across 2 Adaptive Sections (130–170 Scale)",
    concepts: [],
    traps: [{ title: "Assuming Diagrams Are Drawn to Scale", wrongStep: "Judging unmarked angles visually.", correction: "Test extreme valid stretches of geometric figures.", penalty: "Lost 170 Quant Ceiling" }],
    questions: [
      { id: "GRE-QR-QC-001", stem: "x, y integers with x^2 + y^2 = 25 and x > y.\n\nQuantity A: x + y\nQuantity B: 5", options: ["Quantity A is greater.", "Quantity B is greater.", "The two quantities are equal.", "The relationship cannot be determined from the information given."], answer: 3, explanation: "(4,3)->7 > 5 and (3,-4)->-1 < 5 => (D)." },
      { id: "GRE-QR-QC-002", stem: "Set S: 7 consecutive odd integers with median m > 10.\n\nQuantity A: SD of S\nQuantity B: SD of -S", options: ["Quantity A is greater.", "Quantity B is greater.", "The two quantities are equal.", "The relationship cannot be determined from the information given."], answer: 2, explanation: "Reflection preserves spread => (C)." }
    ]
  },
  {
    id: "GRE-MOD-PS",
    pillar: "ETS PROBLEM SOLVING & DATA ANALYSIS",
    title: "Algebra, Number Properties, Combinatorics & Normal Distributions",
    weightage: "Core Quant • 16–17 Qs (MCQ, Multi-Select & Numeric Entry)",
    concepts: [],
    traps: [{ title: "Partial Credit Fallacy on GRE Multi-Select", wrongStep: "Selecting only 3 of 4 true statements.", correction: "All true statements must be checked for credit.", penalty: "0 Points Awarded" }],
    questions: [
      { id: "GRE-QR-PS-001", stem: "[Numeric Entry] If 3^(2x - 1) + 3^(2x) = 324, exact value of x?", options: ["2.5", "2.0", "3.0", "3.5"], answer: 0, explanation: "3^(2x - 1) * 4 = 324 => 2x - 1 = 4 => 2.5." },
      { id: "GRE-QR-PS-002", stem: "Normal distribution mean 500, SD 80. Percent between 420 and 660?", options: ["68.0%", "81.5%", "84.0%", "95.0%", "97.5%"], answer: 1, explanation: "34% + 47.5% = 81.5%." }
    ]
  }
];

(async function hydrateGreFromPostgres() {
  try {
    const res = await fetch("/api/questions?exam=GRE_GENERAL&limit=150&t=" + Date.now());
    const data = await res.json();
    if (!data || !Array.isArray(data.questions) || !data.questions.length) return;
    window.GRE_POSTGRES_BANK = data.questions;
    const qaItems = data.questions.filter(q => q.section === "QUANT_CORE");
    if (qaItems.length && window.IPM_QUANT_CORE) {
      const qc = qaItems.filter(q => /Quantitative Comparison/i.test(q.topic || ""));
      const ps = qaItems.filter(q => !/Quantitative Comparison/i.test(q.topic || ""));
      if (qc.length) window.IPM_QUANT_CORE[0].questions = qc.map(q => ({ id: q.id, stem: q.prompt, options: q.options, answer: Number(q.answer), explanation: q.explanation }));
      if (ps.length) window.IPM_QUANT_CORE[1].questions = ps.map(q => ({
        id: q.id, stem: q.prompt,
        options: (Array.isArray(q.options) && q.options.length) ? q.options : [String(q.answer), "2.0", "3.0", "3.5"],
        answer: (Array.isArray(q.options) && q.options.length) ? Number(q.answer) : 0,
        explanation: q.explanation
      }));
    }
    if (typeof window.renderActiveTab === "function") window.renderActiveTab();
  } catch (e) { console.warn("GRE Postgres hydration fallback:", e); }
})();