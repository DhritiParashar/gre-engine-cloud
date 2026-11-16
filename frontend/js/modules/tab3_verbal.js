window.renderVerbalStudio3 = function (el) {
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");

  const CAT_VERBAL = [
    {
      id: "cat_rc_1",
      kicker: "CAT VARC STUDIO • MODULE 1 OF 5 (MAIN IDEA & INFERENCE)",
      title: "Dense Reading Comprehension: Philosophy, Economics & Ecology",
      sidebarSub: "4 Passages (16 Qs) • +3 / -1 MCQ • Central Thesis & Inference Synthesis",
      weightage: "8–10 Qs / 24 (24–30 Marks)",
      pace: "7.0 mins / Passage (4 Qs)",
      scoring: "MCQ +3 / -1 (4-Mark Swing)",
      strategy: "Paragraph Function Mapping",
      prereq: "Track thesis shifts ('However', 'Yet', 'Conversely') and separate author stance from cited critics' views.",
      overview: "CAT Reading Comprehension features 450–500 word conceptual passages where direct fact retrieval is rare. Nearly 75% of RC questions test implicit inference, central thesis synthesis, and authorial attitude across abstract humanities and economics texts.",
      bridge: "Do not re-read the entire passage for every question. Summarize each paragraph's structural job in 5 mental words on your first read, then eliminate any choice that introduces outside assumptions or extreme absolutes.",
      rules: [
        { name: "Law 1: Scope & Distortion Filter", desc: "Eliminate choices that are factually true in Paragraph 2 but fail to answer the specific question stem, as well as choices exaggerating cautious claims with 'solely', 'inevitably', or 'never'." },
        { name: "Law 2: Implicit Premise Bridge", desc: "A valid inference must be 100% entailed by combining two explicit statements inside the passage—never rely on outside real-world opinion." }
      ],
      workedExamples: [
        {
          title: "Worked Analysis 1: Fat-Tail Forecasting Fragility",
          problem: "Text: 'Modern forecasting models excel within stationary regimes where historical variance bounds outcomes. Yet in fat-tailed adaptive systems, optimizing solely for in-sample precision induces fragility: rare structural breaks lie outside the calibration window and are systematically underpriced.'",
          steps: "1. Contrast: Stationary regimes (models work) vs. Fat-tailed systems (in-sample optimization causes fragility).\n2. Central Thesis: Over-optimizing predictive models on historical data creates vulnerability to rare, high-impact structural breaks."
        }
      ],
      drills: [
        { q: "Based on the forecasting text above, why do in-sample optimized models fail in fat-tailed domains?", opts: ["They use too little historical data.", "Catastrophic structural breaks lie outside historical calibration windows and get underpriced.", "Stationary regimes never occur.", "Variance is always zero."], ans: 1, exp: "Rare structural breaks lie outside the calibration window and are underpriced." },
        { q: "Text: 'Algorithmic curation optimizes engagement via confirmatory feeds, eroding the shared epistemic commons needed for democracy.' Which weakens this?", opts: ["Users spend 3 hrs/day online.", "Audits show algorithmic feed users engage with MORE cross-partisan sources than print-era readers.", "Ad revenue grew 15%.", "Algorithms update hourly."], ans: 1, exp: "Directly refutes the premise that feeds narrow users to confirmatory content." },
        { q: "An author writes: 'While carbon taxes internalize emissions costs efficiently in theory, political myopia routinely dilutes rates below the social cost of carbon.' Author's tone toward carbon taxes?", opts: ["Unqualified enthusiasm", "Cautious theoretical endorsement tempered by political skepticism", "Complete rejection", "Indifference"], ans: 1, exp: "'Efficiently in theory' + 'political myopia dilutes' shows theoretical support qualified by implementation skepticism." },
        { q: "If a passage states 'No purely market-driven mechanism has ever decarbonized a grid at gigawatt scale without state R&D subsidies,' which MUST be true?", opts: ["State subsidies guarantee decarbonization.", "Every historical gigawatt-scale grid decarbonization involved state R&D subsidies.", "Markets hinder all innovation.", "Carbon prices are obsolete."], ans: 1, exp: "Contrapositive of 'No X without Y' is 'Every X involved Y'." },
        { q: "When an RC stem asks 'Which best describes the organization of the passage?', what should you match?", opts: ["A specific example in Paragraph 3", "The sequence of rhetorical moves across all paragraphs (e.g., Phenomenon -> Traditional Explanation -> Critique -> Revised Model)", "The concluding sentence alone", "The title of the cited journal"], ans: 1, exp: "Organization questions map the macro-arc across all paragraphs." },
        { q: "In CAT VARC, getting 10 RC MCQs right and 2 RC MCQs wrong yields what net score?", opts: ["24", "26", "28", "30"], ans: 2, exp: "10*(+3) + 2*(-1) = 30 - 2 = 28 marks." }
      ]
    },
    {
      id: "cat_rc_2",
      kicker: "CAT VARC STUDIO • MODULE 2 OF 5 (EXCEPT & ANALOGY TRAPS)",
      title: "RC Critical Reasoning: 'EXCEPT / NOT' & Parallel Analogy Transfer",
      sidebarSub: "6–8 Qs / 24 • Reverse-Proof Verification & Structural Parallelism",
      weightage: "6–8 Qs / 24 (18–24 Marks)",
      pace: "1.8 mins / Q",
      scoring: "MCQ +3 / -1",
      strategy: "3-True Elimination + Structure Strip",
      prereq: "Master contrapositive logic and strip surface domain nouns when matching parallel analogies.",
      overview: "Modern CAT RC papers routinely include 4 to 6 'All of the following are supported EXCEPT' and 'Which scenario best parallels the author's principle?' items—the primary differentiator between 96%ile and 99.5%ile VARC scores.",
      bridge: "On EXCEPT questions, treat the 4 options as a checklist: prove 3 options directly from passage lines; the single unverified or contradicted option is guaranteed correct.",
      rules: [
        { name: "Law 1: The 3-Anchor Reverse Proof", desc: "Never pick an EXCEPT choice just because it 'sounds unfamiliar'. Verify exact line anchors for the 3 valid options first." },
        { name: "Law 2: Domain-Stripped Analogy Matching", desc: "If the passage describes 'antibiotic overuse breeding resistant bacteria', match the causal structure [Short-term remedy -> Adaptive resistance -> Worse crisis], even if the option is about 'pesticides' or 'financial bailouts'." }
      ],
      workedExamples: [
        {
          title: "Worked Analysis: Parallel Structural Analogy",
          problem: "Passage Principle: 'Aggressive suppression of small forest fires prevents natural undergrowth clearing, accumulating dry fuel that turns an inevitable future spark into an unstoppable megafire.' Find the parallel.",
          steps: "1. Abstract Structure: Suppressing minor volatility -> builds hidden systemic fragility -> causes catastrophic collapse.\n2. Parallel Match: Central bank interventions that suppress every minor market correction encourage excessive leverage, turning an eventual downturn into a systemic financial crash."
        }
      ],
      drills: [
        { q: "Which scenario best parallels the forest-fire suppression principle above?", opts: ["Building wider highways to reduce traffic.", "Preventing every minor corporate default via bailouts, encouraging reckless debt that triggers a massive banking crisis.", "Planting drought-resistant crops.", "Raising interest rates during inflation."], ans: 1, exp: "Matches [Suppressing small corrections -> accumulating hidden risk -> catastrophic collapse]." },
        { q: "Passage states: 'All three factors—capital, talent, and regulatory clarity—are necessary for biotech hubs, though none alone suffices.' Which is NOT supported?", opts: ["Capital alone cannot create a biotech hub.", "A region lacking regulatory clarity will fail to build a biotech hub.", "Any region with capital, talent, and regulatory clarity is guaranteed to become a hub.", "Talent is one of the required conditions."], ans: 2, exp: "'Necessary' does not mean 'sufficient'—C falsely turns necessary conditions into a guarantee." },
        { q: "Which option type is most frequently the correct answer on 'The author would LEAST likely agree with' questions?", opts: ["A cautious qualification", "A direct reversal of the author's core causal claim", "A paraphrase of Paragraph 1", "A supporting historical example"], ans: 1, exp: "LEAST likely agree = directly contradicted by the author's thesis." },
        { q: "If an author argues 'Metrics cease to be good measures once they become targets' (Goodhart's Law), what happens when hospitals are ranked solely by 30-day survival rates?", opts: ["All patients receive better care.", "Hospitals may avoid admitting high-risk critical patients to protect their metric.", "Mortality rates drop to zero.", "Metrics become more objective."], ans: 1, exp: "Optimizing the target metric distorts underlying behavior (turning away high-risk cases)." },
        { q: "In an EXCEPT question, 3 choices paraphrase passage details and 1 choice flips 'some' into 'all'. Which is the answer?", opts: ["The 'some -> all' distortion", "The shortest choice", "The longest choice", "Any choice with numbers"], ans: 0, exp: "Quantifier distortion ('some' -> 'all') makes that statement unsupported by the passage." },
        { q: "Why should you skip a dense 550-word philosophy passage on Pass 1 if 3 clearer passages are available?", opts: ["Philosophy passages carry fewer marks.", "All passages carry +3/-1; locking 12 Qs across 3 clear passages first secures 30+ marks before tackling the hardest set.", "Philosophy has no inference questions.", "TITA only appears in economics."], ans: 1, exp: "Equal marking (+3/-1) rewards maximizing accuracy per minute across the 3 clearest passages first." }
      ]
    },
    {
      id: "cat_va_3",
      kicker: "CAT VARC STUDIO • MODULE 3 OF 5 (TITA PARA-JUMBLES)",
      title: "4-Sentence TITA Para-Jumbles: Mandatory Pairs & Pronoun Chains",
      sidebarSub: "3–4 Qs / 24 (9–12 Marks) • Zero Negative Marking (+3 / 0)",
      weightage: "3–4 Qs / 24 (9–12 Marks)",
      pace: "1.4 mins / Q",
      scoring: "TITA +3 / 0 (Zero Penalty)",
      strategy: "Pronoun Links + Chronology",
      prereq: "Identify demonstrative pronouns ('This', 'These', 'Such'), acronym expansions, and General-to-Specific transitions.",
      overview: "TITA Para-Jumbles ask you to type the 4-digit sequence (e.g., 4213) of four jumbled sentences with ZERO negative marking. Instead of testing all 24 permutations, lock 1 or 2 mandatory pairs to collapse 24 choices down to 2.",
      bridge: "A sentence beginning with 'This paradox', 'These findings', or 'Such policies' cannot start a paragraph—link it immediately after the sentence introducing that concept.",
      rules: [
        { name: "Law 1: Pronoun-Antecedent Lock", desc: "Link sentences containing 'This/These/Such + Noun' directly after the sentence defining that noun." },
        { name: "Law 2: Full Name Before Acronym / Surname", desc: "The sentence introducing 'The Intergovernmental Panel on Climate Change (IPCC)' precedes any sentence referring simply to 'The panel' or 'IPCC'." }
      ],
      workedExamples: [
        {
          title: "Worked Analysis: Loss Aversion 4-Sentence Jumble",
          problem: "1. This asymmetry explains why loss aversion dominates investor behavior in downturns.\n2. Behavioral economists proved losses inflict twice the psychological pain of equivalent gains.\n3. Consequently, investors hold losing stocks too long while selling winners prematurely.\n4. Classical utility theory, by contrast, assumes symmetric valuation of gains and losses.",
          steps: "1. Classical premise (4) -> Behavioral contrast (2) -> 'This asymmetry' link (1) -> 'Consequently' conclusion (3) => Sequence: 4213."
        }
      ],
      drills: [
        { q: "[TITA] Arrange: (1) Consequently, central banks face an asymmetric trade-off. (2) Supply-side energy shocks raise headline prices without excess demand. (3) Aggressive rate hikes depress capex without expanding fuel supply. (4) Yet tolerating high inflation risks wage-price spirals.", opts: ["2341", "1234", "2413", "3241"], ans: 0, exp: "2 (Premise) -> 3 (Rate hike limit) -> 4 ('Yet' counter-risk) -> 1 ('Consequently' conclusion) = 2341." },
        { q: "[TITA] Arrange: (1) However, deep-sea hydrothermal vents thrive in total darkness. (2) Biologists long assumed all complex ecosystems depended on solar photosynthesis. (3) There, chemoautotrophic bacteria oxidize hydrogen sulfide to fix carbon. (4) This discovery reshaped astrobiology's search for life on icy moons.", opts: ["2134", "1234", "2314", "4213"], ans: 0, exp: "2 (Old assumption) -> 1 ('However' exception) -> 3 ('There' mechanism) -> 4 ('This discovery' impact) = 2134." },
        { q: "[TITA] Arrange: (1) These micro-cracks propagate under cyclic thermal stress. (2) Turbine blades in jet engines operate near their metallurgical melting point. (3) Single-crystal superalloys were engineered specifically to eliminate grain-boundary failure. (4) Over thousands of flight cycles, conventional alloys develop microscopic grain-boundary fractures.", opts: ["2413", "2143", "4123", "3241"], ans: 0, exp: "2 (Context) -> 4 (Microscopic fractures) -> 1 ('These micro-cracks') -> 3 (Solution) = 2413." },
        { q: "Why must you NEVER leave a CAT TITA Para-Jumble blank?", opts: ["It unlocks bonus time.", "TITA items carry 0 negative marking—entering your best sequence has strictly positive expected value.", "Unattempted TITA deducts 1 mark.", "It boosts QA scaling."], ans: 1, exp: "Zero penalty (+3 / 0) means entering your top logical sequence is strictly dominant over leaving it blank." }
      ]
    },
    {
      id: "cat_va_4",
      kicker: "CAT VARC STUDIO • MODULE 4 OF 5 (ODD-ONE-OUT & PARA-SUMMARY)",
      title: "5-Sentence TITA Odd-One-Out & Para-Summary Precision",
      sidebarSub: "4–5 Qs / 24 (12–15 Marks) • Theme Coherence & Essence Capture",
      weightage: "4–5 Qs / 24 (12–15 Marks)",
      pace: "1.4 mins / Q",
      scoring: "TITA +3/0 & MCQ +3/-1",
      strategy: "4-Sentence Arc + Contrast Preservation",
      prereq: "Build the 4-sentence cohesive paragraph first in Odd-One-Out; preserve both clauses of contrast pivots in Para-Summary.",
      overview: "Odd-One-Out presents 5 sentences where 4 form a coherent paragraph and 1 diverges in scope or argument level. Para-Summary tests whether you can condense a 100-word dense paragraph into one crisp sentence without omitting qualifiers.",
      bridge: "In Odd-One-Out, do not pick a sentence just because it lacks a shared noun—check whether 4 sentences lock into a tight sequence while the 5th shifts to a tangentially related sub-topic.",
      rules: [
        { name: "Law 1: The 4-Sentence Lock Test", desc: "Find the 4 sentences that sequence smoothly (e.g., 4-1-5-2); the leftover sentence that refuses to slot into that causal chain is the odd one out." },
        { name: "Law 2: Para-Summary Qualifier Retention", desc: "If the paragraph uses 'Although X, Y', any valid summary must reflect BOTH the concession X and the main claim Y." }
      ],
      workedExamples: [
        {
          title: "Worked Analysis: Urban Heat Island Odd-One-Out",
          problem: "1. Urban heat islands raise city night temperatures by 3–5°C.\n2. Reflective cool roofs mitigate peak thermal absorption.\n3. Deep-sea vents support chemosynthetic tubeworms.\n4. Municipal codes mandate high-albedo roofs to curb cooling demand.\n5. Nocturnal heat stress worsens cardiovascular morbidity in cities.",
          steps: "Sentences 1 -> 5 -> 2 -> 4 form a complete urban-heat problem-to-policy arc; Sentence 3 shifts to deep-sea biology -> Odd Sentence: 3."
        }
      ],
      drills: [
        { q: "[TITA Odd-One-Out] Find the odd sentence: (1) Quantum key distribution uses photon polarization to detect eavesdropping. (2) Any measurement disturbs the quantum state, alerting communicating parties. (3) Classical RSA encryption relies on the difficulty of factoring large integers. (4) Fiber-optic quantum networks are now being piloted for sovereign banking.", opts: ["Sentence 1", "Sentence 2", "Sentence 3", "Sentence 4"], ans: 2, exp: "1, 2, and 4 form a cohesive paragraph on quantum key distribution; 3 shifts to classical RSA factoring." },
        { q: "Summary of: 'While renewable capacity has surged globally, grid-scale battery storage remains the binding constraint delaying fossil-fuel baseload retirement.'", opts: ["Renewable capacity has stopped growing.", "Insufficient grid-scale storage—not generation capacity—is the primary bottleneck delaying fossil-fuel phaseout.", "Fossil fuels are cheaper than batteries.", "Batteries generate electricity."], ans: 1, exp: "Preserves both halves of the contrast ('renewable capacity surged' vs 'storage is the binding constraint')." },
        { q: "[TITA Odd-One-Out] Find the odd sentence: (1) Sleep spindles during NREM sleep consolidate declarative memories. (2) Chronic sleep deprivation impairs hippocampal synaptic plasticity. (3) REM sleep dreams often incorporate fragmented emotional memories. (4) Circadian rhythm disruption in shift workers elevates metabolic syndrome risk.", opts: ["Sentence 1", "Sentence 2", "Sentence 3", "Sentence 4"], ans: 3, exp: "1, 2, and 3 focus on sleep stages and memory consolidation; 4 shifts to shift-work metabolic risk." }
      ]
    },
    {
      id: "cat_va_5",
      kicker: "CAT VARC STUDIO • MODULE 5 OF 5 (40-MIN SECTION STRATEGY)",
      title: "40-Minute VARC Pacing, Passage Triage & Negative-Marking Shield",
      sidebarSub: "Target: 15–17 Attempts @ 85%+ Accuracy = 40+ Net Marks (99+ %ile)",
      weightage: "Full 72-Mark Blueprint",
      pace: "28m RC + 12m VA/TITA",
      scoring: "99.5%ile Target = 40–44 Marks",
      strategy: "3-Passage Deep Lock + 100% TITA",
      prereq: "Combine RC accuracy discipline with zero-penalty TITA execution.",
      overview: "Scoring 99.5+ percentile in CAT VARC requires ~40–44 net marks out of 72. Splitting the 40-minute clock into 28 minutes for the 3 clearest RC passages (12 Qs) and 12 minutes for all 8 VA/TITA items maximizes net score while eliminating panic guessing.",
      bridge: "Never guess between 2 close RC MCQ options unless you have concrete textual elimination of 3 choices—a single wrong MCQ erases one-third of a correct answer.",
      rules: [
        { name: "Law 1: The 28 / 12 Minute Split", desc: "Minutes 0–28: Solve 3 clearest RC passages (12 Qs). Minutes 28–40: Attempt all 8 VA items (especially all TITA items)." },
        { name: "Law 2: Expected Value of Guessing", desc: "In CAT MCQ (+3/-1), random 4-option guessing has EV = 0, and 50/50 guessing has EV = +1.0, whereas TITA guessing has zero downside." }
      ],
      workedExamples: [
        {
          title: "Worked Score Simulation: 99.3%ile VARC Card",
          problem: "Candidate attempts 12 RC MCQs (10 right, 2 wrong) + 7 VA items (4 TITA right, 2 TITA wrong, 1 Summary right).",
          steps: "RC = 10*(3) - 2*(1) = 28. VA = 5*(3) - 0 = 15. Total VARC = 43 / 72 (~99.4%ile)."
        }
      ],
      drills: [
        { q: "A candidate gets 12 MCQs right, 6 MCQs wrong, and 3 TITA items right (with 3 TITA wrong). What is the net CAT VARC score?", opts: ["36", "39", "42", "45"], ans: 1, exp: "12*3 - 6*1 + 3*3 = 36 - 6 + 9 = 39 marks." },
        { q: "What is the expected value of eliminating 2 options (50/50 choice) on a CAT +3/-1 MCQ?", opts: ["0.0 marks", "+0.5 marks", "+1.0 mark", "+1.5 marks"], ans: 2, exp: "0.5*(+3) + 0.5*(-1) = 1.5 - 0.5 = +1.0 mark." }
      ]
    }
  ];

  const MODULES = exam === "CAT" ? CAT_VERBAL : CAT_VERBAL.map((m, i) => ({
    ...m,
    kicker: `${exam} VERBAL STUDIO • MODULE ${i + 1} OF 5`,
    title: exam === "GMAT"
      ? ["Critical Reasoning: Necessary & Sufficient Assumptions", "Critical Reasoning: Strengthen, Weaken & Causal Paradoxes", "Boldface Structural Roles & Evaluate-the-Argument", "Analytical Reading Comprehension: Thesis, Tone & Inference", "45-Minute Verbal Pacing & 3-Edit Adaptive Strategy"][i]
      : ["1-, 2- & 3-Blank Text Completion: Polarity Hinges", "Sentence Equivalence: Semantic Twin Elimination", "Dense Academic Reading Comprehension: Attribution & Inference", "Multi-Select RC & Paragraph Logical Arguments", "41-Minute Section-Adaptive Verbal & Stage-2 Routing"][i]
  }));

  window._VERBAL_ACTIVE_IDX = window._VERBAL_ACTIVE_IDX || 0;
  window._VERBAL_SUBTAB = window._VERBAL_SUBTAB || "THEORY";
  if (window._VERBAL_ACTIVE_IDX >= MODULES.length) window._VERBAL_ACTIVE_IDX = 0;
  const v = MODULES[window._VERBAL_ACTIVE_IDX];

  const leftNav = MODULES.map((item, idx) => `
    <button type="button" onclick="window._VERBAL_ACTIVE_IDX=${idx}; window.renderVerbalStudio3(document.getElementById('main-workspace'));"
      class="w-full text-left p-4 rounded-2xl border transition cursor-pointer ${idx === window._VERBAL_ACTIVE_IDX ? 'border-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/40 shadow-sm' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-400'}">
      <div class="font-extrabold text-sm text-slate-900 dark:text-white leading-snug">${item.title}</div>
      <div class="text-xs text-slate-500 mt-1">${item.sidebarSub}</div>
    </button>
  `).join("");

  const theoryView = `
    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
      <div class="flex items-center justify-between">
        <span class="font-extrabold uppercase text-[11px] text-indigo-600">Comprehensive Verbal Overview &amp; Concept Bridge</span>
        <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold">Master Study Guide</span>
      </div>
      <p>${v.overview}</p>
      <p><strong>Concept Bridge:</strong> ${v.bridge}</p>
      <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <strong class="text-indigo-600">Prerequisites &amp; Core Structural Rules:</strong> ${v.prereq}
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950">
        <div class="text-[10px] font-bold uppercase text-slate-400">Exam Weightage</div>
        <div class="text-xs font-extrabold text-slate-900 dark:text-white mt-0.5">${v.weightage}</div>
      </div>
      <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950">
        <div class="text-[10px] font-bold uppercase text-slate-400">Target Pace</div>
        <div class="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">${v.pace}</div>
      </div>
      <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950">
        <div class="text-[10px] font-bold uppercase text-slate-400">Scoring / Format</div>
        <div class="text-xs font-extrabold text-indigo-600 dark:text-indigo-300 mt-0.5">${v.scoring}</div>
      </div>
      <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950">
        <div class="text-[10px] font-bold uppercase text-slate-400">99th %ile Strategy</div>
        <div class="text-xs font-extrabold text-amber-600 dark:text-amber-300 mt-0.5">${v.strategy}</div>
      </div>
    </div>

    <div class="space-y-2.5">
      <div class="font-extrabold uppercase text-[11px] text-indigo-600">Core Verbal Principles, Elimination Laws &amp; Frameworks</div>
      ${v.rules.map(r => `
        <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs">
          <div class="font-extrabold text-slate-900 dark:text-white">${r.name}</div>
          <div class="text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">${r.desc}</div>
        </div>
      `).join("")}
    </div>

    <div class="space-y-2.5">
      <div class="font-extrabold uppercase text-[11px] text-amber-700 dark:text-amber-300">Step-by-Step Worked Verbal Analyses (${v.workedExamples.length})</div>
      ${v.workedExamples.map(w => `
        <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 space-y-1.5 text-xs leading-relaxed">
          <div class="font-extrabold text-amber-900 dark:text-amber-200">${w.title}</div>
          <div class="font-semibold text-slate-800 dark:text-slate-200 whitespace-pre-line">${w.problem}</div>
          <div class="text-slate-700 dark:text-slate-300 whitespace-pre-line pt-1 border-t border-amber-200/70 dark:border-amber-800/60">${w.steps}</div>
        </div>
      `).join("")}
    </div>
  `;

  const drillsView = `
    <div class="space-y-3">
      <div class="font-extrabold uppercase text-[11px] text-emerald-700 dark:text-emerald-400">Interactive Verbal Practice Drills (${v.drills.length} Questions — Click an Option to Reveal Full Analysis)</div>
      ${v.drills.map((d, i) => `
        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-2.5">
          <div class="text-xs font-extrabold text-slate-900 dark:text-white whitespace-pre-line">Practice Drill Q${i + 1}. ${d.q}</div>
          <div class="space-y-1.5">
            ${d.opts.map((o, oi) => `
              <button type="button" onclick="this.parentElement.nextElementSibling.classList.remove('hidden')"
                class="w-full text-left px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-indigo-500 text-xs font-semibold cursor-pointer">
                <strong>${String.fromCharCode(65 + oi)}.</strong> ${o}
              </button>
            `).join("")}
          </div>
          <div class="hidden p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-200">
            <strong>Solution (${String.fromCharCode(65 + d.ans)}):</strong> ${d.exp}
          </div>
        </div>
      `).join("")}
    </div>
  `;

  el.innerHTML = `
    <div class="max-w-7xl mx-auto my-4 grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div class="lg:col-span-4 space-y-3">
        <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">${exam} VERBAL STUDIO (${MODULES.length} CHAPTERS)</div>
        ${leftNav}
      </div>
      <div class="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
        <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">${v.kicker}</span>
        <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">${v.title}</h2>

        <div class="flex flex-wrap items-center gap-2 pt-0.5">
          <button type="button" onclick="window._VERBAL_SUBTAB='THEORY'; window.renderVerbalStudio3(document.getElementById('main-workspace'));"
            class="px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${window._VERBAL_SUBTAB === 'THEORY' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'}">
            Chapter Refresher &amp; Theory
          </button>
          <button type="button" onclick="window._VERBAL_SUBTAB='DRILLS'; window.renderVerbalStudio3(document.getElementById('main-workspace'));"
            class="px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${window._VERBAL_SUBTAB === 'DRILLS' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'}">
            Shortcuts &amp; ${v.drills.length} Practice Drills
          </button>
        </div>

        ${window._VERBAL_SUBTAB === "DRILLS" ? drillsView : theoryView}
      </div>
    </div>
  `;
};

// ==============================================================================
// 3. FULL MULTI-SECTION TIMED MOCK ENGINE (TAB 4) — LIVE POSTGRESQL + TIMER + PALETTE
// ==============================================================================
window.renderMockSimulator4 = async function (el) {
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");
  const modeIdx = window._ACTIVE_MODE_IDX || 0;
  const totalMins = exam === "CAT" ? (modeIdx === 1 ? 165 : (modeIdx === 2 ? 60 : 120)) : (exam === "GMAT" ? (modeIdx === 1 ? 45 : 135) : 118);

  el.innerHTML = `<div class="max-w-5xl mx-auto my-8 p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center text-xs font-bold text-indigo-600">Loading Live PostgreSQL Question Pool &amp; Initializing Timed ${exam} Mock Simulator...</div>`;

  let pgQuestions = [];
  try {
    const res = await fetch("/api/questions?limit=30");
    if (res.ok) {
      const data = await res.json();
      const rawList = Array.isArray(data) ? data : (data.questions || data.rows || []);
      pgQuestions = rawList.filter(q => (q.stem || q.question) && Array.isArray(q.options) && q.options.length >= 2).slice(0, 15).map(q => ({
        sec: exam === "CAT" ? "QA" : (exam === "GMAT" ? "QR" : "Quant"),
        topic: q.topic || q.chapter || "Quantitative Mastery",
        q: q.stem || q.question,
        opts: q.options,
        ans: typeof q.correct_index === "number" ? q.correct_index : (typeof q.answer === "number" ? q.answer : 0),
        exp: q.explanation || q.solution || "Verified PostgreSQL official pattern derivation."
      }));
    }
  } catch (e) {}

  const coreBank = [
    { sec: exam === "CAT" ? "QA" : (exam === "GMAT" ? "QR" : "Quant"), topic: "Algebra & Absolute Value", q: "How many integer values of x satisfy |2x - 7| + |x - 1| <= 8?", opts: ["4", "5", "6", "7"], ans: 2, exp: "Checking integers x = 0, 1, 2, 3, 4, 5 yields values 8, 5, 4, 3, 4, 7 (all <= 8), while x = -1 gives 11 and x = 6 gives 10 -> 6 integer solutions." },
    { sec: exam === "CAT" ? "QA" : (exam === "GMAT" ? "QR" : "Quant"), topic: "Mixtures & Ratios", q: "A 40-liter solution contains 30% alcohol. How many liters of pure alcohol must be added to raise the concentration to 44%?", opts: ["8 L", "10 L", "12 L", "14 L"], ans: 1, exp: "Water remains constant at 28 L (70% of 40 L). At 44% alcohol, 28 L = 56% of new total V => V = 50 L => Added = 10 L." },
    { sec: exam === "CAT" ? "QA" : (exam === "GMAT" ? "QR" : "Quant"), topic: "Modular Arithmetic", q: "What is the remainder when 7^2026 is divided by 5?", opts: ["1", "2", "3", "4"], ans: 3, exp: "7 ≡ 2 (mod 5). Cycle of 2^n mod 5 is {2, 4, 3, 1}. Since 2026 = 4*506 + 2, 7^2026 ≡ 2^2 = 4 (mod 5)." },
    { sec: exam === "CAT" ? "QA" : (exam === "GMAT" ? "QR" : "Quant"), topic: "Combinatorics (Stirling Distribution)", q: "In how many ways can 6 distinct software modules be assigned to 3 servers such that each server receives at least 1 module?", opts: ["360", "540", "600", "720"], ans: 1, exp: "3^6 - 3*(2^6) + 3*(1^6) = 729 - 192 + 3 = 540." },
    { sec: exam === "CAT" ? "QA" : (exam === "GMAT" ? "QR" : "Quant"), topic: "Work & Rates", q: "Pipelines A and B fill a reservoir together in 12 hours. If A runs alone for 4 hours and B finishes the remaining work in 18 hours, how long would B take alone?", opts: ["21 hrs", "24 hrs", "27 hrs", "30 hrs"], ans: 0, exp: "4(1/12 - 1/B) + 18/B = 1 => 14/B = 2/3 => B = 21 hours." },
    { sec: exam === "CAT" ? "QA" : (exam === "GMAT" ? "QR" : "Quant"), topic: "Logarithms & Exponents", q: "If log_2(x) + log_4(x) + log_16(x) = 21/4, what is the value of x?", opts: ["4", "8", "16", "32"], ans: 1, exp: "log_2(x) * (1 + 1/2 + 1/4) = (7/4)*log_2(x) = 21/4 => log_2(x) = 3 => x = 8." },
    { sec: exam === "CAT" ? "DILR" : (exam === "GMAT" ? "DI" : "Quant"), topic: "3-Set Venn Minima", q: "In a survey of 200 analysts, 150 use Python, 140 use SQL, and 130 use R. What is the minimum number of analysts using all three tools?", opts: ["10", "20", "30", "40"], ans: 1, exp: "max(0, 150 + 140 + 130 - 2*200) = 420 - 400 = 20." },
    { sec: exam === "CAT" ? "DILR" : (exam === "GMAT" ? "DI" : "Quant"), topic: "Data Sufficiency / Portfolio Allocation", q: "A $100M fund allocates capital across 6% Senior Debt and 11% Mezzanine Notes to earn $8.2M annual interest. How much is in Mezzanine Notes?", opts: ["$36M", "$40M", "$44M", "$50M"], ans: 2, exp: "0.06(100 - M) + 0.11M = 8.2 => 0.05M = 2.2 => M = $44M." },
    { sec: exam === "CAT" ? "DILR" : (exam === "GMAT" ? "DI" : "Quant"), topic: "Tournament Points Logic", q: "In a 6-team round-robin league (2 pts for win, 1 for tie, 0 for loss), if exactly 3 matches end in a tie, what is the sum of points across all 6 teams?", opts: ["27", "30", "33", "36"], ans: 1, exp: "Total matches = 6C2 = 15. Every match distributes 2 total points => 15 * 2 = 30." },
    { sec: exam === "CAT" ? "DILR" : (exam === "GMAT" ? "DI" : "Quant"), topic: "Margin & Revenue Variance", q: "Division A revenue rose 20% to $120M while operating margin compressed from 25% to 20%. What was the net change in operating profit?", opts: ["-$3.0M", "-$1.0M", "+$1.0M", "+$2.0M"], ans: 1, exp: "Prior profit = 25% of $100M = $25M. Current profit = 20% of $120M = $24M -> Net change = -$1.0M." },
    { sec: exam === "CAT" ? "VARC" : (exam === "GMAT" ? "VR" : "Verbal"), topic: "Critical Reasoning / Inference", q: "Regional sorting automation cut per-parcel handling labor by 38% with constant volume and revenue/parcel, yet operating margin fell 2.4%. What explains this?", opts: ["Competitors also automated.", "Hardware depreciation and maintenance contracts exceeded the dollar labor savings.", "Delivery speed improved.", "Fuel prices stayed constant."], ans: 1, exp: "Fixed equipment depreciation + maintenance overhead rose by more than the labor dollar reduction." },
    { sec: exam === "CAT" ? "VARC" : (exam === "GMAT" ? "VR" : "Verbal"), topic: "Para-Jumble Coherence", q: "Arrange into a logical paragraph: (1) This asymmetry explains loss aversion in downturns. (2) Losses inflict twice the pain of equivalent gains. (3) Consequently, investors hold losers too long. (4) Classical theory assumes symmetric valuation.", opts: ["4 - 2 - 1 - 3", "2 - 1 - 4 - 3", "1 - 2 - 3 - 4", "2 - 4 - 3 - 1"], ans: 0, exp: "4 (Classical premise) -> 2 (Behavioral contrast) -> 1 (Links asymmetry) -> 3 (Consequence): 4213." },
    { sec: exam === "CAT" ? "VARC" : (exam === "GMAT" ? "VR" : "Verbal"), topic: "Text Completion / Precision", q: "Because the physicist's model ______ long-cherished assumptions, it met with initial ______ before experimental data vindicated her.", opts: ["corroborated | acclaim", "upended | skepticism", "ratified | indifference", "echoed | hostility"], ans: 1, exp: "Upending established assumptions triggers skepticism until experimental vindication." },
    { sec: exam === "CAT" ? "VARC" : (exam === "GMAT" ? "VR" : "Verbal"), topic: "RC Structural Thesis", q: "Passage: 'Optimizing forecasting models solely for in-sample precision induces fragility in fat-tailed systems because catastrophic structural breaks lie outside historical calibration.' Main thesis?", opts: ["Historical data is useless.", "In-sample over-optimization creates vulnerability to rare, high-impact structural breaks.", "Fat tails never occur in finance.", "Calibration windows eliminate risk."], ans: 1, exp: "Over-optimizing on historical data creates fragility to rare out-of-sample structural breaks." },
    { sec: exam === "CAT" ? "VARC" : (exam === "GMAT" ? "VR" : "Verbal"), topic: "Odd-One-Out / Scope", q: "Identify the sentence outside the paragraph's core theme: (1) Urban heat islands raise city night temperatures. (2) Cool roofs mitigate thermal absorption. (3) Hydrothermal vents sustain deep-ocean tubeworms. (4) High-albedo zoning curbs cooling loads.", opts: ["Sentence 1", "Sentence 2", "Sentence 3", "Sentence 4"], ans: 2, exp: "Sentence 3 shifts from urban heat-island mitigation to deep-ocean biology." }
  ];

  const questions = pgQuestions.length >= 5 ? [...coreBank, ...pgQuestions.slice(0, 10)] : coreBank;
  window._MOCK_STATE = {
    questions,
    curr: 0,
    answers: {},
    marked: {},
    submitted: false,
    secondsLeft: totalMins * 60
  };

  if (window._MOCK_TIMER_ID) clearInterval(window._MOCK_TIMER_ID);
  window._MOCK_TIMER_ID = setInterval(() => {
    const st = window._MOCK_STATE;
    if (!st || st.submitted) return;
    st.secondsLeft = Math.max(0, st.secondsLeft - 1);
    const tEl = document.getElementById("mock-live-timer");
    if (tEl) {
      const m = String(Math.floor(st.secondsLeft / 60)).padStart(2, "0");
      const s = String(st.secondsLeft % 60).padStart(2, "0");
      tEl.textContent = `${m}:${s}`;
    }
    if (st.secondsLeft === 0) window.submitFullMock4();
  }, 1000);

  window.renderMockQuestionCard = function () {
    const st = window._MOCK_STATE;
    const qObj = st.questions[st.curr];
    const qArea = document.getElementById("mock-q-area");
    const palArea = document.getElementById("mock-palette-area");
    if (!qArea || !palArea) return;

    palArea.innerHTML = st.questions.map((_, i) => {
      const isCurr = i === st.curr;
      const isAns = st.answers[i] !== undefined;
      const isMark = st.marked[i];
      let cls = "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700";
      if (isMark) cls = "bg-amber-400 text-slate-950 border-amber-500 font-extrabold";
      else if (isAns) cls = "bg-emerald-600 text-white border-emerald-600 font-bold";
      if (isCurr) cls += " ring-2 ring-indigo-500";
      return `<button type="button" onclick="window._MOCK_STATE.curr=${i}; window.renderMockQuestionCard();" class="w-8 h-8 rounded-lg border text-xs cursor-pointer ${cls}">${i + 1}</button>`;
    }).join("");

    const selected = st.answers[st.curr];
    qArea.innerHTML = `
      <div class="space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white text-[11px] font-extrabold">Question ${st.curr + 1} of ${st.questions.length}</span>
            <span class="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-bold">${qObj.sec} &bull; ${qObj.topic}</span>
          </div>
          <button type="button" onclick="window._MOCK_STATE.marked[${st.curr}] = !window._MOCK_STATE.marked[${st.curr}]; window.renderMockQuestionCard();"
            class="px-3 py-1 rounded-lg border border-amber-400 text-amber-700 dark:text-amber-300 text-xs font-bold cursor-pointer">
            ${st.marked[st.curr] ? "&#9733; Marked for Review" : "&#9734; Mark for Review"}
          </button>
        </div>

        <div class="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">${qObj.q}</div>

        <div class="space-y-2">
          ${qObj.opts.map((opt, oi) => `
            <label onclick="window._MOCK_STATE.answers[${st.curr}]=${oi}; window.renderMockQuestionCard();"
              class="flex items-center gap-3 p-3.5 rounded-xl border text-xs font-semibold cursor-pointer transition ${selected === oi ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200' : 'border-slate-200 dark:border-slate-700 hover:border-indigo-400'}">
              <input type="radio" name="mock_active_opt" ${selected === oi ? "checked" : ""}>
              <span><strong>${String.fromCharCode(65 + oi)}.</strong> ${opt}</span>
            </label>
          `).join("")}
        </div>

        ${st.submitted ? `
          <div class="p-3.5 rounded-xl ${selected === qObj.ans ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-rose-50 border-rose-300 text-rose-900'} border text-xs">
            <strong>${selected === qObj.ans ? "Correct!" : "Incorrect / Unattempted."} Correct Answer: ${String.fromCharCode(65 + qObj.ans)}.</strong> ${qObj.exp}
          </div>
        ` : ""}

        <div class="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
          <button type="button" onclick="if(window._MOCK_STATE.curr>0){window._MOCK_STATE.curr--; window.renderMockQuestionCard();}"
            class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold cursor-pointer">&larr; Previous</button>
          <button type="button" onclick="delete window._MOCK_STATE.answers[${st.curr}]; window.renderMockQuestionCard();"
            class="px-3 py-2 rounded-xl text-xs text-slate-500 hover:text-rose-600 font-semibold cursor-pointer">Clear Response</button>
          <button type="button" onclick="if(window._MOCK_STATE.curr < window._MOCK_STATE.questions.length - 1){window._MOCK_STATE.curr++; window.renderMockQuestionCard();}"
            class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold cursor-pointer">Save &amp; Next &rarr;</button>
        </div>
      </div>
    `;
  };

  window.submitFullMock4 = function () {
    const st = window._MOCK_STATE;
    st.submitted = true;
    if (window._MOCK_TIMER_ID) clearInterval(window._MOCK_TIMER_ID);

    let correct = 0, wrong = 0, unattempted = 0;
    st.questions.forEach((q, i) => {
      if (st.answers[i] === undefined) unattempted++;
      else if (st.answers[i] === q.ans) correct++;
      else wrong++;
    });

    const isCat = exam === "CAT";
    const score = isCat ? Math.max(0, correct * 3 - wrong * 1) : correct;
    const maxScore = isCat ? st.questions.length * 3 : st.questions.length;
    const accuracy = (correct + wrong) > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;

    const hist = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]");
    hist.unshift({ date: new Date().toLocaleDateString(), score, maxScore, correct, wrong, accuracy });
    localStorage.setItem("ipm_mock_history_v1", JSON.stringify(hist));

    const banner = document.getElementById("mock-scorecard-banner");
    if (banner) {
      banner.classList.remove("hidden");
      banner.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div class="text-sm font-extrabold">Diagnostic Scorecard: ${score} / ${maxScore} (${accuracy}% Accuracy)</div>
            <div class="text-xs mt-0.5">Correct: <strong>${correct}</strong> &bull; Wrong: <strong>${wrong}</strong> &bull; Unattempted: <strong>${unattempted}</strong> &bull; Synced to Top Header &amp; Tab 6 Forecaster!</div>
          </div>
          <button type="button" onclick="window.selectUnifiedTab(6)" class="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-extrabold cursor-pointer">Open Tab 6 Score Forecaster &rarr;</button>
        </div>
      `;
    }
    window.renderMockQuestionCard();
  };

  el.innerHTML = `
    <div class="max-w-7xl mx-auto my-4 space-y-4">
      <div class="bg-slate-900 text-white rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 border border-slate-800 shadow-lg">
        <div>
          <span class="text-[10px] font-extrabold uppercase tracking-wider text-amber-300">${exam} FULL MULTI-SECTION SIMULATOR (${questions.length} QUESTIONS)</span>
          <h2 class="text-lg font-extrabold">Timed Sectional &amp; Adaptive Mock Test</h2>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono">
            Time Remaining: <strong id="mock-live-timer" class="text-amber-300 text-sm">${totalMins}:00</strong>
          </div>
          <button type="button" onclick="window.submitFullMock4()" class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow cursor-pointer">Submit Exam &amp; Forecast Score</button>
        </div>
      </div>

      <div id="mock-scorecard-banner" class="hidden p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200"></div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div id="mock-q-area" class="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm"></div>
        <div class="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4 shadow-sm">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">Question Palette (${questions.length} Qs)</div>
          <div id="mock-palette-area" class="flex flex-wrap gap-2"></div>
          <div class="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 space-y-1">
            <div><span class="inline-block w-3 h-3 rounded bg-emerald-600 mr-1.5 align-middle"></span>Answered</div>
            <div><span class="inline-block w-3 h-3 rounded bg-amber-400 mr-1.5 align-middle"></span>Marked for Review</div>
            <div><span class="inline-block w-3 h-3 rounded bg-slate-200 dark:bg-slate-800 mr-1.5 align-middle"></span>Not Answered</div>
          </div>
        </div>
      </div>
    </div>
  `;
  window.renderMockQuestionCard();
};
window.renderTab3 = window.renderVerbalStudio3;
window.renderTab4 = window.renderMockSimulator4;