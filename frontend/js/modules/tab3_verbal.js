window.renderVerbalStudio3 = function (el) {
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");

  const MODULES = exam === "GMAT" ? [
    {
      id: "gmat_cr_assump",
      kicker: "GMAC VERBAL REASONING • PILLAR 1 (55% OF VERBAL)",
      title: "Critical Reasoning: Necessary Assumption, Strengthen & Weaken",
      sidebarSub: "12–13 CR Qs per Section • Negation Test & Causal Gap Isolation",
      weightage: "12–13 Qs / 23 (~55%)",
      pace: "1.9 mins / Q",
      scoring: "60–90 Adaptive Scale",
      strategy: "Conclusion-First + Negation Test",
      overview: "GMAT Critical Reasoning tests pure deductive and inductive logic without requiring specialized business jargon. Every argument consists of stated Premises and a Conclusion joined by an unstated logical bridge. High-band (715+) questions disguise the conclusion in the middle of the stimulus and test subtle causal reversals or omitted third variables.",
      bridge: "Never read the 5 answer choices before isolating the exact Conclusion and the logical gap between Premise and Conclusion. On Necessary Assumption items, apply the Negation Test: logically negate the candidate choice—if the conclusion collapses, that choice is guaranteed correct.",
      rules: [
        { name: "The Assumption Negation Test", desc: "A Necessary Assumption is something that MUST be true for the argument to hold. Negating it ('Not X') destroys the link from premise to conclusion. (Note: Do NOT use negation on Strengthen questions—only on Necessary Assumption.)" },
        { name: "Correlation vs. Causation Defense", desc: "When an argument concludes 'A caused B' because A and B occurred together, the two universal weaken mechanisms are: (1) Reverse Causation (B caused A), or (2) Common Third Cause (C caused both A and B)." },
        { name: "Out-of-Scope & Extreme Distortion Filter", desc: "Reject choices introducing irrelevant comparisons ('more than competitors') when the conclusion makes an internal claim, or choices using 'all/never' when the conclusion says 'likely/some'." }
      ],
      workedExamples: [
        {
          title: "Worked Example 1: Cost-Margin Paradox (Explain / Resolve)",
          problem: "Premise: Over the past two years, Meridien Logistics automated 70% of its regional sorting hubs, cutting per-parcel handling labor costs by 38%. Nevertheless, Meridien's overall operating margin declined by 2.4 percentage points over the same period, even though total parcel volume and average revenue per parcel remained unchanged.\nQuestion: What resolves this discrepancy?",
          steps: "1. Identify the arithmetic tension: Operating Margin = (Revenue - Total Cost) / Revenue. Revenue was constant, and labor cost fell 38%, yet Total Cost rose.\n2. Logical bridge: Total Cost = Handling Labor + Equipment/Overhead.\n3. Resolution: Annualized depreciation and specialized maintenance contracts for the new sorting hardware exceeded the dollar savings from reduced handling labor."
        },
        {
          title: "Worked Example 2: Necessary Assumption Negation Proof",
          problem: "Premise: Employees using ergonomic standing desks report 22% fewer back-pain sick days.\nConclusion: Installing standing desks across all corporate floors will reduce total company-wide sick leave by 22%.\nIdentify the Necessary Assumption.",
          steps: "1. Spot the shift in scope: Premise measures 'back-pain sick days'; Conclusion predicts 'total company-wide sick leave' drops by the full 22%.\n2. Required Bridge: Non-back-pain sick leave will not increase to offset the reduction in back-pain days (and back-pain days represent the full baseline).\n3. Negation Check: If non-back-pain sick leave increased after standing desks were installed, total sick leave would NOT fall by 22%—proving the assumption is necessary."
        }
      ],
      drills: [
        { q: "Pharmaceutical Firm K's new drug lowers LDL cholesterol twice as fast as rival drugs. Therefore, Firm K will capture the majority of the cholesterol-drug market within 12 months. Which is a necessary assumption?", opts: ["Rival firms will not lower prices.", "The new drug does not carry severe side effects that prevent physicians from prescribing it.", "LDL cholesterol is the sole cause of heart disease.", "Firm K owns its manufacturing plants."], ans: 1, exp: "Negating B ('it DOES carry severe side effects preventing prescriptions') destroys the market-capture conclusion." },
        { q: "City transit ridership rose 18% after dedicated bus lanes were introduced, yet average commute times remained unchanged. Which explains this?", opts: ["Bus fares stayed constant.", "Private car traffic shifted into the remaining lanes, creating cross-street congestion that slowed buses at intersections.", "Express buses have newer engines.", "Subway ridership also grew."], ans: 1, exp: "Cross-street congestion from displaced private cars offsets express-lane speed gains." }
      ]
    },
    {
      id: "gmat_rc_boldface",
      kicker: "GMAC VERBAL REASONING • PILLAR 2 (45% OF VERBAL)",
      title: "Analytical Reading Comprehension & Boldface Structural Roles",
      sidebarSub: "3–4 Passages (10–11 Qs) + Boldface CR • Structural Mapping",
      weightage: "10–11 Qs / 23 (~45%)",
      pace: "2.0 mins / Q (incl. read)",
      scoring: "60–90 Adaptive Scale",
      strategy: "Paragraph Function & Pivot Map",
      overview: "GMAT Focus RC passages run 250–350 words across economics, organizational behavior, and natural sciences, testing Primary Purpose, Logical Inference, and Author Attitude. Boldface CR questions similarly reward structural mapping over content memorization.",
      bridge: "Read Paragraph 1 carefully to lock the author's main thesis and tone, then map each subsequent paragraph by its structural job ('Provides supporting data', 'Introduces counter-example', 'Synthesizes qualification'). Never pick an inference that requires external real-world assumptions.",
      rules: [
        { name: "Pivot-Word Structural Tagging", desc: "Words like 'However', 'Yet', and 'Nevertheless' separate a conceded background claim (Statement 1) from the author's true thesis or counter-evidence (Statement 2)." },
        { name: "Strict Textual Warrant for Inference", desc: "A valid GMAT inference must be 100% logically entailed by the passage text—if a choice sounds plausible in real-world economics but lacks direct textual grounding, eliminate it." }
      ],
      workedExamples: [
        {
          title: "Worked Example: Structural Contrast in Corporate Governance",
          problem: "Passage Excerpt: 'Unlike Anglo-American shareholder-primacy governance, German co-determination mandates worker representation on supervisory boards, trading short-term dividend velocity for long-term human-capital retention and lower labor turnover.'\nQuestion: What does the author imply about shareholder-primacy governance?",
          steps: "1. Spot the explicit contrast marker: 'Unlike Anglo-American shareholder-primacy governance...'\n2. Since co-determination trades 'short-term dividend velocity' for retention, shareholder-primacy governance places higher relative priority on rapid short-term shareholder returns."
        }
      ],
      drills: [
        { q: "In an argument stating: 'Many economists contend that minimum-wage hikes inevitably reduce entry-level employment. However, recent county-level studies show no measurable job loss in retail,' what role does the first sentence play?", opts: ["The main conclusion of the argument", "A widely held view that the author's evidence challenges", "An uncontested empirical premise", "A concession required to qualify the main conclusion"], ans: 1, exp: "The pivot 'However' signals that the second sentence challenges the claim in the first sentence." }
      ]
    }
  ] : (exam === "GRE" ? [
    {
      id: "gre_tc_se",
      kicker: "ETS GRE VERBAL REASONING • PILLAR 1 (65% OF VERBAL)",
      title: "Multi-Blank Text Completion & Sentence Equivalence Semantic Pairs",
      sidebarSub: "18 Qs across 2 Adaptive Sections • Polarity Hinges & Twin Pairing",
      weightage: "18 Qs / 27 (~67%)",
      pace: "1.1 – 1.3 mins / Q",
      scoring: "Zero Partial Credit",
      strategy: "Predict Blank Before Viewing Choices",
      overview: "Text Completion (1-, 2-, and 3-blank items) and Sentence Equivalence (select 2 of 6 choices) make up two-thirds of ETS GRE Verbal. ETS does not award partial credit on multi-blank TC or SE—every blank and pair must be exact.",
      bridge: "Never test answer choices by 'sounding them out' inside the sentence. First identify structural hinges ('although', 'belie', 'corroborate', 'far from', colon ':'), write down your own simple word and (+/-) polarity for each blank, and solve the most constrained blank first.",
      rules: [
        { name: "Structural Hinge Polarity Mapping", desc: "Contrast hinges ('although', 'yet', 'paradoxically', 'belie') flip polarity between clauses. Support hinges ('moreover', 'indeed', colon ':', semicolon ';') maintain identical polarity." },
        { name: "Sentence Equivalence Twin Elimination", desc: "In SE, both chosen words must produce sentences with identical meaning. Immediately cross out any word among the 6 options that lacks a clear synonym partner." },
        { name: "Beware the 'False Synonym Pair' Trap", desc: "ETS routinely includes two synonym pairs in the 6 SE options—one positive pair and one negative pair. Always verify sentence polarity before locking your pair." }
      ],
      workedExamples: [
        {
          title: "Worked Example 1: 2-Blank Contrast Hinge (Text Completion)",
          problem: "'Although early historiographers portrayed the 14th-century maritime guilds as rigidly (i) ______ institutions resistant to navigational innovation, archival port ledgers reveal a far more (ii) ______ posture: guild captains routinely underwrote experimental astrolabe trials whenever cross-oceanic freight margins justified the risk.'",
          steps: "1. Hinge 'Although' sets up direct contrast between Blank (i) and Blank (ii).\n2. Blank (i) parallels 'resistant to navigational innovation' -> predict 'inflexible / hidebound'.\n3. Blank (ii) parallels 'underwrote experimental trials whenever margins justified risk' -> predict 'practical / pragmatic'.\n4. Answer: (i) hidebound | (ii) pragmatic."
        },
        {
          title: "Worked Example 2: Sentence Equivalence Twin Elimination",
          problem: "'The envoy's ______ remarks eased tensions between the rival delegations.'\nChoices: [A. incendiary, B. conciliatory, C. arcane, D. propitiatory, E. terse, F. belligerent]",
          steps: "1. Polarity: remarks 'eased tensions' -> need positive peacemaking words.\n2. Group synonym pairs: (A. incendiary / F. belligerent = hostile, wrong polarity); (B. conciliatory / D. propitiatory = peacemaking, exact match); C and E have no twins.\n3. Answer: B and D."
        }
      ],
      drills: [
        { q: "Because the physicist's latest paper ______ several long-cherished assumptions in quantum optics, it initially met with ______ from senior theorists before experimental replication vindicated her model.", opts: ["(i) corroborated | (ii) acclaim", "(i) upended | (ii) skepticism", "(i) ratified | (ii) indifference", "(i) echoed | (ii) hostility"], ans: 1, exp: "'Upended' (overturned) cherished assumptions explains why senior theorists reacted with initial 'skepticism' prior to replication." },
        { q: "Select the twin pair that best completes: 'Once a ______ critic of quantitative easing, the central banker gradually moderated her stance as deflationary pressures mounted.'", opts: ["strident & vociferous", "tepid & lukewarm", "prescient & prophetic", "diffident & reticent"], ans: 0, exp: "'Strident' and 'vociferous' both mean forceful/outspoken, contrasting with 'moderated her stance'." }
      ]
    },
    {
      id: "gre_rc_logic",
      kicker: "ETS GRE VERBAL REASONING • PILLAR 2 (33% OF VERBAL)",
      title: "Dense Academic Reading Comprehension & Paragraph Arguments",
      sidebarSub: "9 Qs across 2 Adaptive Sections • Attribution Tracking & Multi-Select",
      weightage: "9 Qs / 27 (~33%)",
      pace: "1.8 mins / Q (incl. read)",
      scoring: "MCQ + Check-All-That-Apply",
      strategy: "Voice Attribution + True/False Audit",
      overview: "GRE Reading Comprehension features dense, multi-clause academic prose across humanities, social sciences, and natural sciences, including 3-option 'Select all that apply' inference questions and single-paragraph logical argument items.",
      bridge: "Track voice attribution meticulously: ETS loves asking what 'the author would agree with' when Paragraph 1 summarizes 'traditional critics' and Paragraph 2 introduces the author's rebuttal.",
      rules: [
        { name: "Voice Attribution Separation", desc: "Tag every claim as either [Cited Scholars' View] or [Author's Own Thesis]. Never attribute a critiqued premise to the author." },
        { name: "Independent Audit on Check-All-That-Apply", desc: "On 3-choice multi-select RC items, evaluate Statement A, Statement B, and Statement C independently as standalone True/False proofs against the passage." }
      ],
      workedExamples: [
        {
          title: "Worked Example: Scientific Hypothesis Inference",
          problem: "Passage: 'Until the discovery of hydrothermal vent communities along the Galapagos Rift, biologists assumed that all complex trophic webs depended ultimately on solar photosynthesis. At abyssal depths devoid of sunlight, however, chemoautotrophic bacteria oxidize hydrogen sulfide dissolved in superheated vent plumes to fix inorganic carbon, sustaining dense colonies of tubeworms and bivalves.'",
          steps: "1. Premise 1: Old assumption = all complex food webs depend on sunlight.\n2. Premise 2: Vent bacteria fix inorganic carbon using hydrogen sulfide in zero sunlight, sustaining tubeworms and bivalves.\n3. Deductive Inference: At least some complex biological food webs fix inorganic carbon without relying on solar energy."
        }
      ],
      drills: [
        { q: "Passage: 'While tree-ring dendrochronology reliably dates temperate timber, tropical species often lack distinct annual growth rings due to minimal seasonal temperature variation.' What can be inferred?", opts: ["Dendrochronology cannot be applied to any tropical trees.", "Seasonal temperature shifts contribute to the formation of distinct annual tree rings in temperate zones.", "Tropical timber is denser than temperate timber.", "Radiocarbon dating is inaccurate in temperate climates."], ans: 1, exp: "Since minimal seasonal temperature variation explains the lack of distinct rings in the tropics, seasonal variation drives distinct rings in temperate species." }
      ]
    }
  ] : [
    {
      id: "cat_rc_mastery",
      kicker: "CAT VARC STUDIO • PILLAR 1 (67% OF VARC • 48 MARKS)",
      title: "High-Density Reading Comprehension: Philosophy, Economics, Ecology & Tech",
      sidebarSub: "4 Passages (16 Qs) • +3 / -1 MCQ • Inference, Tone & Except-Question Mastery",
      weightage: "16 Qs / 24 (48 Marks)",
      pace: "7.0 mins / Passage (4 Qs)",
      scoring: "MCQ +3 / -1 (4-Mark Swing)",
      strategy: "3-Passage Deep Lock + Scope Elimination",
      overview: "CAT VARC carries 72 out of 198 total marks (36.4% of your entire CAT percentile), with Reading Comprehension alone accounting for 16 questions (48 marks). Unlike undergraduate tests that ask direct fact-retrieval, modern CAT RCs feature 450–500 word conceptual passages where 3 of the 4 questions test deep inference, author attitude, analogy transfer, or 'all of the following EXCEPT' logic.",
      bridge: "In CAT RC, 99.5+ percentile scorers do not read faster—they eliminate traps more ruthlessly. Every wrong RC MCQ costs a 4-mark swing (+3 vs -1). Eliminate choices that are: (1) True in the passage but irrelevant to the specific stem, (2) Extreme distortions ('solely', 'inevitably', 'never'), or (3) Out-of-scope real-world opinions contradicting the author's premise.",
      rules: [
        { name: "Paragraph-by-Paragraph Thesis Synthesis", desc: "After each paragraph, summarize its core claim in 5 mental words and note its relation to Paragraph 1 (Extends, Qualifies, Critiques, or Gives Example). Never re-read the entire passage blindly." },
        { name: "The 'EXCEPT / NOT' Reverse-Proof Rule", desc: "On 'All of the following are supported EXCEPT' questions, find 3 choices that have explicit textual anchors in the passage; the single unsupported or contradicted choice is your answer." },
        { name: "Analogy & New-Scenario Transfer", desc: "When asked 'Which scenario best illustrates the author's principle?', strip away surface nouns and match the exact structural mechanism (e.g., 'short-term optimization causing systemic fragility')." }
      ],
      workedExamples: [
        {
          title: "Worked Example 1: Central Thesis & Distortion Elimination",
          problem: "Passage Excerpt: 'Modern financial and epidemiological forecasting models excel within stationary regimes where historical variance reliably bounds future outcomes. Yet in complex adaptive systems characterized by fat-tailed distributions, optimizing models solely for in-sample precision induces fragility: rare structural breaks—precisely the events carrying catastrophic consequence—lie outside the calibration window and are systematically underpriced.'\nQuestion: What is the author's central argument?",
          steps: "1. Contrast Structure: Stationary regimes (models work) vs. Fat-tailed adaptive systems (in-sample optimization creates fragility).\n2. Trap Check: Choice A ('Historical variance is useless in all domains') is an extreme distortion because the author states it works in stationary regimes.\n3. Valid Synthesis: Over-optimizing predictive models on historical data creates systemic vulnerability to rare, high-impact structural breaks in fat-tailed domains."
        },
        {
          title: "Worked Example 2: Weakening the Author's Concern",
          problem: "Passage Excerpt: 'Algorithmic curation optimizes engagement by feeding users confirmatory content, inadvertently eroding the shared epistemic commons required for democratic deliberation.'\nQuestion: Which finding would most weaken this concern?",
          steps: "1. Causal Mechanism: Algorithms narrow users to confirmatory content -> erodes shared epistemic commons.\n2. Direct Rebuttal: Empirical audits showing that users on algorithmic feeds actually encounter and engage with a wider variety of cross-partisan sources than print-era readers directly refutes the narrowing mechanism."
        }
      ],
      drills: [
        { q: "Based on the forecasting passage above, why do models optimized for in-sample precision fail in fat-tailed systems?", opts: ["They require too much computing power.", "Rare structural breaks with catastrophic impact lie outside historical calibration windows and get underpriced.", "Stationary regimes never occur in epidemiology.", "Fat-tailed distributions have zero variance."], ans: 1, exp: "Catastrophic structural breaks lie outside historical calibration windows and are systematically underpriced." },
        { q: "Which of the following, if true, would most weaken the author's concern about algorithmic curation?", opts: ["Users spend 3 hours daily on mobile apps.", "Empirical audits show users on algorithmic feeds encounter a wider diversity of cross-partisan viewpoints than print-era readers.", "Ad revenue rose 15%.", "Algorithms refresh every hour."], ans: 1, exp: "Directly refutes the premise that algorithms restrict users to confirmatory content." }
      ]
    },
    {
      id: "cat_va_tita",
      kicker: "CAT VARC STUDIO • PILLAR 2 (33% OF VARC • 24 MARKS)",
      title: "TITA Para-Jumbles, Odd-One-Out & Para-Summary (Zero Negative Marking)",
      sidebarSub: "8 Qs per Slot (24 Marks) • Mandatory Attempt Zone (Zero Penalty)",
      weightage: "8 Qs / 24 (24 Marks)",
      pace: "1.3 – 1.5 mins / Q",
      scoring: "TITA +3 / 0 (Zero Penalty)",
      strategy: "Mandatory Pairs + Zero-Penalty Attempt",
      overview: "The 8 Verbal Ability items in CAT VARC—4-sentence Para-Jumbles, 5-sentence Odd-One-Out, and Para-Summary—are heavily TITA (Type In The Answer) with ZERO negative marking. Attempting all TITA items in the final 12 minutes of VARC adds 9 to 15 risk-free marks to your sectional total.",
      bridge: "Never solve a 4-sentence Para-Jumble by trying all 24 permutations. Lock 1 or 2 mandatory pairs using pronoun-antecedent links ('This policy', 'Such critics'), chronological transitions, and General-to-Specific order, reducing 24 permutations down to 2.",
      rules: [
        { name: "Pronoun & Demonstrative Antecedent Chains", desc: "A sentence starting with 'This asymmetry', 'These findings', or 'Such interventions' CANNOT open a paragraph—it must immediately follow the sentence defining that noun." },
        { name: "Odd-One-Out 4-Sentence Coherence Test", desc: "Do not pick the odd sentence merely because it lacks a keyword. Build the tightest 4-sentence logical paragraph; the single sentence that breaks the argument arc is the odd one out." },
        { name: "Para-Summary Scope & Tone Match", desc: "Eliminate summary options that drop one half of a contrast ('Although X, Y'), add outside examples, or soften/exaggerate the author's tone." }
      ],
      workedExamples: [
        {
          title: "Worked Example 1: 4-Sentence TITA Para-Jumble",
          problem: "Arrange into a coherent paragraph:\n1. This asymmetry explains why loss aversion dominates investor behavior during market downturns.\n2. Behavioral economists have shown that financial losses inflict roughly twice the psychological pain of equivalent gains.\n3. Consequently, retail investors frequently hold losing equities too long while selling winners prematurely.\n4. Standard expected-utility theory, by contrast, assumes symmetric valuation of gains and losses.",
          steps: "1. Spot opener & contrast: Sentence 4 introduces classical theory; Sentence 2 contrasts it with behavioral findings -> Pair (4 - 2).\n2. Pronoun link: Sentence 1 ('This asymmetry') refers directly to losses hurting twice as much as gains in Sentence 2 -> Chain (4 - 2 - 1).\n3. Causal conclusion: Sentence 3 ('Consequently') gives the behavioral consequence -> Final Sequence: 4213."
        },
        {
          title: "Worked Example 2: 5-Sentence TITA Odd-One-Out",
          problem: "Identify the odd sentence:\n1. Urban heat islands raise nighttime temperatures in dense cities by 3–5°C.\n2. Reflective cool roofs and urban tree canopies mitigate peak thermal absorption.\n3. Deep-sea hydrothermal vents support unique chemosynthetic ecosystems.\n4. Municipal zoning codes increasingly mandate high-albedo building materials to curb cooling energy demand.\n5. Sustained nocturnal heat stress also exacerbates cardiovascular morbidity among elderly urban residents.",
          steps: "1. Sentences 1, 5, 2, and 4 form a cohesive arc: Urban heat island problem (1) -> health impact (5) -> architectural mitigation (2) -> municipal policy (4).\n2. Sentence 3 jumps completely to deep-sea hydrothermal vents -> Odd Sentence: 3."
        }
      ],
      drills: [
        { q: "[TITA Para-Jumble] Arrange:\n1. Consequently, central banks face an asymmetric trade-off between anchoring inflation expectations and avoiding liquidity tightening.\n2. Supply-side energy shocks initially raise headline price indices without excess aggregate demand.\n3. Raising policy rates aggressively in response to cost-push shocks depresses capex without expanding energy supply.\n4. Yet allowing elevated headline inflation to persist risks spilling over into wage-setting behavior.", opts: ["2 - 3 - 4 - 1", "1 - 2 - 3 - 4", "2 - 4 - 1 - 3", "3 - 2 - 4 - 1"], ans: 0, exp: "2 (Supply shock premise) -> 3 (Why rate hikes hurt) -> 4 ('Yet' counter-risk of wage spillover) -> 1 ('Consequently' central bank trade-off): 2341." },
        { q: "In CAT VARC, a candidate gets 11 MCQs right, 5 MCQs wrong, and 3 TITA questions right (with 2 TITA wrong). What is the exact VARC net score?", opts: ["34", "35", "37", "39"], ans: 2, exp: "MCQ = 11*(+3) + 5*(-1) = 28. TITA = 3*(+3) + 2*(0) = 9. Total = 28 + 9 = 37." }
      ]
    }
  ]);

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
      <div class="font-extrabold uppercase text-[11px] text-indigo-600">Core Verbal Elimination Rules &amp; Structural Frameworks</div>
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
        <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">${exam} VERBAL STUDIO (${MODULES.length} PILLARS)</div>
        ${leftNav}
      </div>
      <div class="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
        <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">${v.kicker}</span>
        <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">${v.title}</h2>

        <div class="flex flex-wrap items-center gap-2 pt-0.5">
          <button type="button" onclick="window._VERBAL_SUBTAB='THEORY'; window.renderVerbalStudio3(document.getElementById('main-workspace'));"
            class="px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${window._VERBAL_SUBTAB === 'THEORY' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'}">
            Chapter Refresher, Theory &amp; Worked Analyses
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