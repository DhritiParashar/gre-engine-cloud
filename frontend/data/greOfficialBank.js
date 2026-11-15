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