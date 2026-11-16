window.renderVerbalStudio3 = function (el) {
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");

  const VERBAL_BANK = exam === "GMAT" ? [
    {
      id: "gmat_cr_assump", badge: "GMAT VERBAL • CRITICAL REASONING PILLAR 1",
      title: "Necessary Assumption, Strengthen & Weaken Arguments",
      meta: "12–13 CR Qs per Section • Negation Test & Causal Gap Analysis",
      theory: "Every GMAT Critical Reasoning argument links Premises to a Conclusion via an unstated bridge. To find a Necessary Assumption, apply the Negation Test: negate the candidate choice—if the conclusion collapses, that choice is required.",
      worked: "Worked Example:\nPremise: Employees using standing desks report 22% fewer back-pain days.\nConclusion: Installing standing desks across all floors will reduce company-wide sick leave by 22%.\nGap / Assumption: Back-pain days account for 100% of sick leave (or non-back sick days will not increase).",
      drills: [
        { q: "City transit ridership rose 18% after express bus lanes were introduced, yet average commute times remained unchanged. Which explains this?", opts: ["Bus fares stayed constant.", "Private car traffic shifted into the remaining lanes, creating congestion that slowed cross-streets shared by buses.", "Express buses have newer engines.", "Subway ridership also grew."], ans: 1, exp: "Cross-street congestion from displaced private cars offsets express-lane gains, keeping total commute times unchanged." },
        { q: "Pharmaceutical Firm K's new drug lowers LDL cholesterol twice as fast as rival drugs. Therefore, Firm K will capture the majority of the cholesterol-drug market within 12 months. Which is a necessary assumption?", opts: ["Rival firms will not lower prices.", "The new drug does not carry severe side effects that prevent physicians from prescribing it.", "LDL cholesterol is the sole cause of heart disease.", "Firm K owns its manufacturing plants."], ans: 1, exp: "Negating B ('it DOES carry severe side effects preventing prescriptions') destroys the market-capture conclusion." }
      ]
    },
    {
      id: "gmat_cr_boldface", badge: "GMAT VERBAL • CRITICAL REASONING PILLAR 2",
      title: "Boldface Structural Roles & Evaluate-the-Argument",
      meta: "High-Band (705+) Differentiator • Structural Mapping",
      theory: "On Boldface CR prompts, ignore content complexity and map structural tags: [Conceded Counter-Premise], [Intermediate Conclusion], [Main Thesis], or [Supporting Evidence]. Look for pivot markers ('However', 'Yet', 'Consequently').",
      worked: "Worked Heuristic: When Statement 1 follows 'While critics argue that...' and Statement 2 follows 'Nevertheless, empirical audits confirm...', Statement 1 is a position the argument seeks to refute, and Statement 2 is evidence supporting the main conclusion.",
      drills: [
        { q: "In an argument stating: 'Many economists contend that minimum-wage hikes inevitably reduce entry-level employment. However, recent county-level studies show no measurable job loss in retail,' what role does the first sentence play?", opts: ["The main conclusion of the argument", "A widely held view that the author's evidence challenges", "An uncontested empirical premise", "A concession required to qualify the main conclusion"], ans: 1, exp: "The pivot 'However' signals that the second sentence challenges the position stated in the first sentence." }
      ]
    },
    {
      id: "gmat_rc_dense", badge: "GMAT VERBAL • READING COMPREHENSION PILLAR 3",
      title: "Analytical Reading Comprehension: Primary Purpose, Inference & Tone",
      meta: "3–4 Passages (10–11 Qs) • Economic, Scientific & Business Texts",
      theory: "Read Paragraph 1 closely to capture the thesis and authorial attitude, then skim Paragraphs 2–3 for structural transitions ('In contrast', 'A second mechanism'). Never pick answers that introduce outside facts or extreme absolutes.",
      worked: "Passage Excerpt: 'Unlike shareholder-primacy governance, German co-determination mandates worker representation on supervisory boards, trading short-term dividend velocity for long-term human-capital retention.'\nInference: Co-determination prioritizes workforce stability over rapid short-term payouts.",
      drills: [
        { q: "Based on the excerpt above, a critic arguing from a pure shareholder-primacy perspective would most likely fault German co-determination for:", opts: ["Eliminating supervisory boards entirely", "Potentially slowing near-term capital returns to equity holders", "Increasing employee turnover", "Violating labor regulations"], ans: 1, exp: "The text explicitly notes it trades 'short-term dividend velocity' for long-term retention." }
      ]
    }
  ] : (exam === "GRE" ? [
    {
      id: "gre_tc_multi", badge: "GRE VERBAL • TEXT COMPLETION PILLAR 1",
      title: "1-, 2-, and 3-Blank Text Completion: Logic Pivots & Polarity",
      meta: "12 Qs across 2 Adaptive Sections • Zero Partial Credit",
      theory: "Never plug vocabulary options into blanks blindly. First identify structural hinges ('although', 'belie', 'corroborate', 'far from'), predict your own simple word with exact (+/-) polarity, and solve the most constrained blank first.",
      worked: "Worked Example: 'Far from ______ the committee's doubts, the director's evasive testimony only ______ their suspicion that key ledger entries had been altered.'\nLogic: 'Far from' creates contrast -> Blank 1 = 'allaying / dispelling' (- doubts), Blank 2 = 'exacerbated / deepened' (+ suspicion).",
      drills: [
        { q: "Because the physicist's latest paper ______ several long-cherished assumptions in quantum optics, it initially met with ______ from senior theorists before experimental replication vindicated her model.", opts: ["(i) corroborated | (ii) acclaim", "(i) upended | (ii) skepticism", "(i) ratified | (ii) indifference", "(i) echoed | (ii) hostility"], ans: 1, exp: "Challenging ('upended') cherished assumptions naturally triggers initial 'skepticism' prior to experimental vindication." },
        { q: "Though outwardly ______ in public debates, the jurist was privately ______ among close colleagues, dissecting statutory ambiguities with razor-sharp wit.", opts: ["laconic | loquacious", "garrulous | taciturn", "ebullient | morose", "mercurial | steadfast"], ans: 0, exp: "'Though' contrasts outward reserve ('laconic' = brief/reserved) with private talkativeness ('loquacious')." }
      ]
    },
    {
      id: "gre_se_pairs", badge: "GRE VERBAL • SENTENCE EQUIVALENCE PILLAR 2",
      title: "Sentence Equivalence: Exact Semantic Twin Elimination",
      meta: "6 Qs across 2 Adaptive Sections • Select 2 of 6 Choices",
      theory: "Both chosen words must fit the sentence logic AND produce two sentences with identical meaning. Immediately eliminate any choice that lacks a synonym partner among the 6 options.",
      worked: "Worked Example: 'The envoy's ______ remarks eased tensions between the rival delegations.'\nOptions: [A. incendiary, B. conciliatory, C. arcane, D. propitiatory, E. terse, F. belligerent].\nPairs: (A/F = hostile, wrong polarity) vs (B/D = peacemaking, exact fit). Answer: B and D.",
      drills: [
        { q: "Select the twin pair that best completes: 'Once a ______ critic of quantitative easing, the central banker gradually moderated her stance as deflationary pressures mounted.'", opts: ["strident & vociferous", "tepid & lukewarm", "prescient & prophetic", "diffident & reticent"], ans: 0, exp: "'Strident' and 'vociferous' both mean forceful/outspoken, contrasting with 'moderated her stance'." }
      ]
    },
    {
      id: "gre_rc_logic", badge: "GRE VERBAL • READING COMPREHENSION & ARGUMENT PILLAR 3",
      title: "Dense Academic RC & Paragraph Arguments (Check-All-That-Apply)",
      meta: "9 Qs across 2 Adaptive Sections • Humanities, Social & Natural Sciences",
      theory: "GRE passages pack dense qualification into 1–3 paragraphs. Distinguish carefully between views the author attributes to 'traditional scholars' vs. the author's own revised thesis.",
      worked: "Worked Heuristic: On 3-choice 'Select all that apply' RC items, evaluate each statement A, B, and C independently as a standalone True/False test against explicit passage text.",
      drills: [
        { q: "Passage: 'While tree-ring dendrochronology reliably dates temperate timber, tropical species often lack distinct annual growth rings due to minimal seasonal temperature variation.' What can be inferred?", opts: ["Dendrochronology cannot be applied to any tropical trees.", "Seasonal temperature shifts contribute to the formation of distinct annual tree rings in temperate zones.", "Tropical timber is denser than temperate timber.", "Radiocarbon dating is inaccurate in temperate climates."], ans: 1, exp: "Since lack of seasonal temperature variation explains the absence of annual rings in the tropics, seasonal variation drives distinct rings in temperate species." }
      ]
    }
  ] : [
    {
      id: "cat_rc_main", badge: "CAT VARC STUDIO • PILLAR 1",
      title: "High-Density Reading Comprehension: Philosophy, Economics, Ecology & Tech",
      meta: "4 Passages (16 Qs) • +3 / -1 MCQ • Inference & Author Tone Mastery",
      theory: "CAT VARC accounts for 36% of total exam marks (72/198). Modern CAT RCs rarely ask direct fact lookup—they test 'except/not inferred', 'author would most agree with', and 'structural role of paragraph 2'. Eliminate distortions, extreme absolutes, and out-of-scope true statements.",
      worked: "Worked Passage Analysis:\nText: 'Algorithmic curation optimizes engagement by feeding users confirmatory content, inadvertently eroding the shared epistemic commons required for democratic deliberation.'\nMain Idea: Engagement-driven algorithms undermine shared public discourse by reinforcing confirmation bias.",
      drills: [
        { q: "Based on the passage above, why does algorithmic curation weaken democratic deliberation?", opts: ["It lowers internet bandwidth speeds.", "It narrows exposure to diverse viewpoints, fragmenting the common informational ground needed for collective debate.", "It prevents users from accessing historical archives.", "It eliminates all commercial advertising."], ans: 1, exp: "Feeding confirmatory content erodes the 'shared epistemic commons' essential for deliberation." },
        { q: "Which of the following, if true, would most weaken the author's concern?", opts: ["Users spend 3 hours daily on social platforms.", "Empirical audits show users exposed to algorithmic feeds actually encounter and engage with a wider variety of cross-partisan sources than print-era readers.", "Tech firms report higher quarterly ad revenue.", "Algorithms update every 24 hours."], ans: 1, exp: "Showing that users actually encounter MORE cross-partisan diversity directly refutes the claim that algorithms narrow them to confirmatory content." }
      ]
    },
    {
      id: "cat_va_tita", badge: "CAT VARC STUDIO • PILLAR 2",
      title: "TITA Para-Jumbles, Odd-One-Out & Para-Summary (Zero Negative Marking)",
      meta: "8 Qs per Slot (24 Marks) • Mandatory Attempt Zone (0 Penalty)",
      theory: "CAT Verbal Ability items (Para-Jumbles and Odd-One-Out) are predominantly TITA (Type In The Answer) with ZERO negative marking. Use pronoun-antecedent chains ('This phenomenon', 'Such policies'), chronological markers, and premise-to-conclusion arcs.",
      worked: "Worked Para-Summary:\nText: 'While renewable capacity has surged globally, grid-scale battery storage remains the binding constraint preventing fossil-fuel baseload retirement.'\nBest Summary: Insufficient grid-scale storage—not generation capacity—is the primary bottleneck delaying fossil-fuel phaseout.",
      drills: [
        { q: "[TITA Para-Jumble] Arrange into a coherent paragraph:\n1. This asymmetry explains why loss aversion dominates investor behavior during market downturns.\n2. Behavioral economists have shown that financial losses inflict roughly twice the psychological pain of equivalent gains.\n3. Consequently, retail investors frequently hold losing equities too long while selling winners prematurely.\n4. Standard expected-utility theory, by contrast, assumes symmetric valuation of gains and losses.", opts: ["4 - 2 - 1 - 3", "2 - 1 - 4 - 3", "1 - 2 - 3 - 4", "2 - 4 - 3 - 1"], ans: 0, exp: "4 introduces classical theory -> 2 contrasts behavioral findings -> 1 ('This asymmetry') links to loss aversion -> 3 ('Consequently') gives the investor behavior outcome: 4213." },
        { q: "[TITA Odd-One-Out] Which sentence does NOT belong to the coherent 4-sentence paragraph?\n1. Urban heat islands raise nighttime temperatures in dense cities by 3–5°C.\n2. Reflective cool roofs and urban tree canopies mitigate peak thermal absorption.\n3. Deep-sea hydrothermal vents support unique chemosynthetic ecosystems.\n4. Municipal zoning codes increasingly mandate high-albedo building materials to curb cooling energy demand.", opts: ["Sentence 1", "Sentence 2", "Sentence 3", "Sentence 4"], ans: 2, exp: "Sentences 1, 2, and 4 discuss urban heat islands and architectural mitigation; Sentence 3 shifts completely to deep-sea vents." }
      ]
    },
    {
      id: "cat_rc_triage", badge: "CAT VARC STUDIO • PILLAR 3",
      title: "40-Minute VARC Execution Blueprint & Negative-Marking Control",
      meta: "Target: 15–17 Attempts @ 85%+ Accuracy = 40+ Net Marks (99+ %ile)",
      theory: "Divide the 40-minute VARC section into: Minutes 0–28 (3 clearest RC passages = 12 Qs) and Minutes 28–40 (All 8 VA/TITA items + selective RC pass). Never spend >8 minutes on a dense philosophical passage when 4 TITA VA questions await.",
      worked: "Score Math: Attempting 12 RC MCQs (10 right, 2 wrong = +28) + 6 VA items (4 right, 2 TITA wrong = +12) yields 40/72 Net Marks (~99.1%ile VARC).",
      drills: [
        { q: "In CAT VARC, a candidate gets 11 MCQs right, 5 MCQs wrong, and 3 TITA questions right (with 2 TITA wrong). What is the exact VARC net score?", opts: ["34", "35", "37", "39"], ans: 2, exp: "MCQ = 11*(+3) + 5*(-1) = 33 - 5 = 28. TITA = 3*(+3) + 2*(0) = 9. Total = 28 + 9 = 37." }
      ]
    }
  ]);

  window._VERBAL_ACTIVE_IDX = window._VERBAL_ACTIVE_IDX || 0;
  if (window._VERBAL_ACTIVE_IDX >= VERBAL_BANK.length) window._VERBAL_ACTIVE_IDX = 0;
  const v = VERBAL_BANK[window._VERBAL_ACTIVE_IDX];

  const leftNav = VERBAL_BANK.map((item, idx) => `
    <button type="button" onclick="window._VERBAL_ACTIVE_IDX=${idx}; window.renderVerbalStudio3(document.getElementById('main-workspace'));"
      class="w-full text-left p-4 rounded-2xl border transition cursor-pointer ${idx === window._VERBAL_ACTIVE_IDX ? 'border-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/40 shadow-sm' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-400'}">
      <div class="font-extrabold text-sm text-slate-900 dark:text-white leading-snug">${item.title}</div>
      <div class="text-xs text-slate-500 mt-1">${item.meta}</div>
    </button>
  `).join("");

  const drillsHtml = v.drills.map((d, i) => `
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
  `).join("");

  el.innerHTML = `
    <div class="max-w-7xl mx-auto my-4 grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div class="lg:col-span-4 space-y-3">
        <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">${exam} VERBAL STUDIO (${VERBAL_BANK.length} MODULES)</div>
        ${leftNav}
      </div>
      <div class="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
        <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">${v.badge}</span>
        <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">${v.title}</h2>

        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
          <div class="font-extrabold uppercase text-[11px] text-indigo-600">Comprehensive Verbal Theory &amp; Elimination Strategy</div>
          <p>${v.theory}</p>
        </div>

        <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 space-y-1.5 text-xs leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line">
          <div class="font-extrabold uppercase text-[11px] text-amber-700 dark:text-amber-300">Worked Passage / Logic Analysis</div>
          <div>${v.worked}</div>
        </div>

        <div class="space-y-3 pt-1">
          <div class="font-extrabold uppercase text-[11px] text-emerald-700 dark:text-emerald-400">Interactive Verbal Drills (${v.drills.length} Questions)</div>
          ${drillsHtml}
        </div>
      </div>
    </div>
  `;
};

// ==============================================================================
// 3. FULL MULTI-SECTION TIMED MOCK ENGINE (TAB 4) — LIVE POSTGRESQL + TIMER + PALETTE
# ==============================================================================
window.renderMockSimulator4 = async function (el) {
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");
  const modeIdx = window._ACTIVE_MODE_IDX || 0;
  const totalMins = exam === "CAT" ? (modeIdx === 1 ? 165 : (modeIdx === 2 ? 60 : 120)) : (exam === "GMAT" ? (modeIdx === 1 ? 45 : 135) : 118);

  el.innerHTML = `<div class="max-w-5xl mx-auto my-8 p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center text-xs font-bold text-indigo-600">Loading Live PostgreSQL Question Pool &amp; Initializing Timed ${exam} Mock Simulator...</div>`;

  // Pull live PYQs/questions from PostgreSQL backend if available
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

  // Curated Multi-Section High-Percentile Exam Bank (Quant + DILR/DI + Verbal)
  const coreBank = [
    // Section 1: Quant
    { sec: exam === "CAT" ? "QA" : (exam === "GMAT" ? "QR" : "Quant"), topic: "Algebra & Absolute Value", q: "How many integer values of x satisfy |2x - 7| + |x - 1| <= 8?", opts: ["4", "5", "6", "7"], ans: 2, exp: "Checking integers x = 0, 1, 2, 3, 4, 5 yields values 8, 5, 4, 3, 4, 7 (all <= 8), while x = -1 gives 11 and x = 6 gives 10 -> 6 integer solutions." },
    { sec: exam === "CAT" ? "QA" : (exam === "GMAT" ? "QR" : "Quant"), topic: "Mixtures & Ratios", q: "A 40-liter solution contains 30% alcohol. How many liters of pure alcohol must be added to raise the concentration to 44%?", opts: ["8 L", "10 L", "12 L", "14 L"], ans: 1, exp: "Water remains constant at 28 L (70% of 40 L). At 44% alcohol, 28 L = 56% of new total V => V = 50 L => Added = 10 L." },
    { sec: exam === "CAT" ? "QA" : (exam === "GMAT" ? "QR" : "Quant"), topic: "Modular Arithmetic", q: "What is the remainder when 7^2026 is divided by 5?", opts: ["1", "2", "3", "4"], ans: 3, exp: "7 ≡ 2 (mod 5). Cycle of 2^n mod 5 is {2, 4, 3, 1}. Since 2026 = 4*506 + 2, 7^2026 ≡ 2^2 = 4 (mod 5)." },
    { sec: exam === "CAT" ? "QA" : (exam === "GMAT" ? "QR" : "Quant"), topic: "Combinatorics (Stirling Distribution)", q: "In how many ways can 6 distinct software modules be assigned to 3 servers such that each server receives at least 1 module?", opts: ["360", "540", "600", "720"], ans: 1, exp: "3^6 - 3*(2^6) + 3*(1^6) = 729 - 192 + 3 = 540." },
    { sec: exam === "CAT" ? "QA" : (exam === "GMAT" ? "QR" : "Quant"), topic: "Work & Rates", q: "Pipelines A and B fill a reservoir together in 12 hours. If A runs alone for 4 hours and B finishes the remaining work in 18 hours, how long would B take alone?", opts: ["21 hrs", "24 hrs", "27 hrs", "30 hrs"], ans: 0, exp: "4(1/12 - 1/B) + 18/B = 1 => 14/B = 2/3 => B = 21 hours." },
    { sec: exam === "CAT" ? "QA" : (exam === "GMAT" ? "QR" : "Quant"), topic: "Logarithms & Exponents", q: "If log_2(x) + log_4(x) + log_16(x) = 21/4, what is the value of x?", opts: ["4", "8", "16", "32"], ans: 1, exp: "log_2(x) * (1 + 1/2 + 1/4) = (7/4)*log_2(x) = 21/4 => log_2(x) = 3 => x = 8." },
    // Section 2: DILR / Data Insights / Data Interpretation
    { sec: exam === "CAT" ? "DILR" : (exam === "GMAT" ? "DI" : "Quant"), topic: "3-Set Venn Minima", q: "In a survey of 200 analysts, 150 use Python, 140 use SQL, and 130 use R. What is the minimum number of analysts using all three tools?", opts: ["10", "20", "30", "40"], ans: 1, exp: "max(0, 150 + 140 + 130 - 2*200) = 420 - 400 = 20." },
    { sec: exam === "CAT" ? "DILR" : (exam === "GMAT" ? "DI" : "Quant"), topic: "Data Sufficiency / Portfolio Allocation", q: "A $100M fund allocates capital across 6% Senior Debt and 11% Mezzanine Notes to earn $8.2M annual interest. How much is in Mezzanine Notes?", opts: ["$36M", "$40M", "$44M", "$50M"], ans: 2, exp: "0.06(100 - M) + 0.11M = 8.2 => 0.05M = 2.2 => M = $44M." },
    { sec: exam === "CAT" ? "DILR" : (exam === "GMAT" ? "DI" : "Quant"), topic: "Tournament Points Logic", q: "In a 6-team round-robin league (2 pts for win, 1 for tie, 0 for loss), if exactly 3 matches end in a tie, what is the sum of points across all 6 teams?", opts: ["27", "30", "33", "36"], ans: 1, exp: "Total matches = 6C2 = 15. Every match distributes 2 total points => 15 * 2 = 30." },
    { sec: exam === "CAT" ? "DILR" : (exam === "GMAT" ? "DI" : "Quant"), topic: "Margin & Revenue Variance", q: "Division A revenue rose 20% to $120M while operating margin compressed from 25% to 20%. What was the net change in operating profit?", opts: ["-$3.0M", "-$1.0M", "+$1.0M", "+$2.0M"], ans: 1, exp: "Prior profit = 25% of $100M = $25M. Current profit = 20% of $120M = $24M -> Net change = -$1.0M." },
    // Section 3: Verbal / VARC
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