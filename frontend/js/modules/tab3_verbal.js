// ==============================================================================
// DEFINITIVE TABS 2, 3, 4, 5 RENDERERS (STRICT 1-TO-1 TEST-PREP MAPPING)
// ==============================================================================
(function () {
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");

  // TAB 3: VERBAL STUDIO (VARC / CR & RC / TC, SE & RC)
  window.renderVerbalStudio3 = function (el) {
    const sets = exam === "GMAT" ? [
      {
        tag: "GMAT FOCUS CRITICAL REASONING • NECESSARY ASSUMPTION",
        title: "Supply-Chain Automation & Unit Margin Paradox",
        passage: "Over the past two years, Meridien Logistics automated 70% of its regional sorting hubs, cutting per-parcel handling labor costs by 38%. Nevertheless, Meridien's overall operating margin declined by 2.4 percentage points over the same period, even though total parcel volume and average revenue per parcel remained unchanged.",
        q: "Which of the following, if true, most helps to explain the decline in Meridien's overall operating margin?",
        opts: [
          "Competitors in the regional parcel market also invested heavily in automated sorting equipment.",
          "Depreciation and specialized maintenance contracts for the new sorting hardware exceeded the dollar savings from reduced handling labor.",
          "Customer delivery satisfaction scores improved significantly after hub automation was completed.",
          "Fuel prices for long-haul freight remained stable throughout the two-year period.",
          "Meridien plans to automate its remaining 30% of sorting hubs next fiscal year."
        ],
        ans: 1,
        exp: "Total cost = Labor + Equipment/Overhead. Even with revenue constant and labor down 38%, if hardware depreciation + maintenance rose by more than the labor dollar savings, operating margin falls."
      },
      {
        tag: "GMAT FOCUS READING COMPREHENSION • INFERENCE & AUTHOR STRUCTURE",
        title: "Behavioral Pricing & Reference-Point Anchoring",
        passage: "Classical microeconomic models posit that rational consumers evaluate price changes solely by comparing marginal utility against budget constraints. Empirical pricing studies, however, reveal strong reference-dependence: consumers penalize perceived price surcharges far more sharply than they reward economically identical discounts from a higher list price, particularly when competitor pricing is transparent.",
        q: "The passage suggests that a firm seeking to minimize consumer resistance during a cost-driven price adjustment would most likely succeed by:",
        opts: [
          "Introducing frequent temporary surcharges rather than altering its published list price.",
          "Eliminating all competitor price comparisons from its marketing materials.",
          "Establishing a higher transparent list price paired with targeted promotional discounts rather than adding surcharges to a low base price.",
          "Assuming consumers evaluate marginal utility independently of historical prices.",
          "Reducing product quality while keeping nominal prices fixed."
        ],
        ans: 2,
        exp: "Because consumers penalize surcharges far more sharply than equivalent discounts from a higher list price, framing around a higher list price with discounts minimizes reference-point resistance."
      }
    ] : (exam === "GRE" ? [
      {
        tag: "GRE VERBAL • TEXT COMPLETION & SENTENCE EQUIVALENCE",
        title: "Multi-Clause Contrast & Semantic Pair Mastery",
        passage: "Although early historiographers portrayed the 14th-century maritime guilds as rigidly (i) ______ institutions resistant to navigational innovation, archival port ledgers reveal a far more (ii) ______ posture: guild captains routinely underwrote experimental astrolabe trials whenever cross-oceanic freight margins justified the risk.",
        q: "Select the best pair of entries for Blank (i) and Blank (ii):",
        opts: [
          "(i) hidebound  |  (ii) pragmatic",
          "(i) mercurial  |  (ii) dogmatic",
          "(i) prescient  |  (ii) sclerotic",
          "(i) malleable  |  (ii) doctrinaire",
          "(i) iconoclastic | (ii) orthodox"
        ],
        ans: 0,
        exp: "'Although' signals contrast: 'hidebound' (narrowly traditional/resistant to innovation) contrasts with 'pragmatic' (practical, underwriting trials when margins justified risk)."
      },
      {
        tag: "GRE READING COMPREHENSION • SCIENTIFIC HYPOTHESIS CRITIQUE",
        title: "Deep-Ocean Thermal Vents & Chemosynthetic Ecosystems",
        passage: "Until the discovery of hydrothermal vent communities along the Galapagos Rift, biologists assumed that all complex trophic webs depended ultimately on solar photosynthesis. At abyssal depths devoid of sunlight, however, chemoautotrophic bacteria oxidize hydrogen sulfide dissolved in superheated vent plumes to fix inorganic carbon, sustaining dense colonies of tubeworms and bivalves.",
        q: "Which of the following is most directly supported by the passage?",
        opts: [
          "Photosynthetic organisms cannot survive anywhere in the Galapagos Rift.",
          "At least some complex biological food webs fix inorganic carbon without relying on solar energy.",
          "Hydrogen sulfide is toxic to all multicellular marine invertebrates.",
          "Abyssal tubeworms oxidize hydrogen sulfide directly without bacterial symbiosis.",
          "Solar photosynthesis is less efficient than chemosynthesis in shallow waters."
        ],
        ans: 1,
        exp: "Chemoautotrophic bacteria fix inorganic carbon using hydrogen sulfide in sunlight-free abyssal depths, sustaining complex colonies of tubeworms and bivalves."
      }
    ] : [
      {
        tag: "CAT VARC STUDIO • READING COMPREHENSION & TITA PARA-SUMMARY",
        title: "Epistemic Humility, Algorithmic Forecasting & Fat-Tail Risk",
        passage: "Modern financial and epidemiological forecasting models excel within stationary regimes where historical variance reliably bounds future outcomes. Yet in complex adaptive systems characterized by fat-tailed distributions, optimizing models solely for in-sample precision induces fragility: rare structural breaks—precisely the events carrying catastrophic consequence—lie outside the calibration window and are systematically underpriced.",
        q: "Which of the following best captures the central thesis of the passage?",
        opts: [
          "Historical variance is completely useless for modeling stationary financial or epidemiological systems.",
          "Over-optimizing predictive models on historical data creates systemic vulnerability to rare, high-impact structural breaks in fat-tailed domains.",
          "Complex adaptive systems can be accurately predicted by expanding in-sample calibration windows.",
          "Catastrophic events occur exclusively in epidemiological rather than financial systems."
        ],
        ans: 1,
        exp: "The author contrasts stationary regimes with fat-tailed adaptive systems, arguing that optimizing for in-sample precision makes models fragile to rare, catastrophic structural breaks."
      },
      {
        tag: "CAT VARC STUDIO • TITA PARA-JUMBLE (4-SENTENCE COHERENCE)",
        title: "Arrange the 4 Sentences Into a Coherent Paragraph (TITA)",
        passage: "1. Consequently, central banks face an asymmetric trade-off between anchoring long-term inflation expectations and avoiding premature liquidity tightening.\n2. Supply-side energy shocks initially raise headline price indices without reflecting excess aggregate demand.\n3. Raising policy rates aggressively in response to such cost-push pressures can depress capital investment while doing little to expand physical energy supply.\n4. Yet allowing elevated headline inflation to persist risks spilling over into wage-setting behavior across services.",
        q: "Identify the logical 4-digit sequence (No Negative Marking in CAT TITA):",
        opts: ["2 - 3 - 4 - 1", "1 - 2 - 3 - 4", "2 - 4 - 1 - 3", "3 - 2 - 4 - 1"],
        ans: 0,
        exp: "Sentence 2 introduces supply-side energy shocks -> Sentence 3 explains why raising rates hurts capex -> Sentence 4 ('Yet') gives the counter-risk of wage spillover -> Sentence 1 ('Consequently') concludes with the central bank trade-off: 2341."
      }
    ]);

    el.innerHTML = `
      <div class="max-w-6xl mx-auto my-4 space-y-4">
        <div class="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-lg">
          <span class="text-[10px] uppercase font-bold text-indigo-300">${exam} High-Percentile Verbal Studio</span>
          <h2 class="text-xl font-extrabold mt-1">${exam === "CAT" ? "CAT VARC Studio: Dense RC Passages, Para-Jumbles & TITA Summaries" : (exam === "GMAT" ? "GMAT Verbal Studio: Critical Reasoning & Analytical RC" : "GRE Verbal Studio: Text Completion, Sentence Equivalence & RC")}</h2>
          <p class="text-xs text-slate-300 mt-1">Practice passage structure mapping, assumption negation tests, and zero-penalty TITA / Multi-Blank logic.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          ${sets.map((s, idx) => `
            <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-3 shadow-sm">
              <span class="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-300">${s.tag}</span>
              <h3 class="text-base font-extrabold text-slate-900 dark:text-white">${s.title}</h3>
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">${s.passage}</div>
              <div class="text-xs font-bold text-slate-900 dark:text-white pt-1">Q${idx+1}. ${s.q}</div>
              <div class="space-y-2">
                ${s.opts.map((o, oi) => `
                  <button type="button" onclick="this.parentElement.nextElementSibling.classList.remove('hidden')"
                    class="w-full text-left px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 text-xs font-medium text-slate-800 dark:text-slate-200 cursor-pointer">
                    <strong>${String.fromCharCode(65 + oi)}.</strong> ${o}
                  </button>
                `).join("")}
              </div>
              <div class="hidden p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-200">
                <strong>Correct Answer: ${String.fromCharCode(65 + s.ans)}</strong> — ${s.exp}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  };

  // TAB 4: TIMED DIAGNOSTIC MOCK SIMULATOR (WITH CLEAN QUESTION STEMS & LIVE TAB 6 SYNC)
  window.renderMockSimulator4 = function (el) {
    const bank = [
      { topic: "Algebra & Inequalities", q: "How many integer values of x satisfy |2x - 7| + |x - 1| <= 8?", opts: ["4", "5", "6", "7"], ans: 2, exp: "Testing boundary integers x = 0, 1, 2, 3, 4, 5 gives |2x-7|+|x-1| = 8, 5, 4, 3, 4, 7 (all <= 8), while x = -1 gives 11 and x = 6 gives 10 -> 6 integer solutions." },
      { topic: "Arithmetic & Weighted Ratios", q: "A 40-liter solution contains 30% alcohol. How many liters of pure alcohol must be added to raise the concentration to 44%?", opts: ["8 L", "10 L", "12 L", "14 L"], ans: 1, exp: "Water remains constant at 70% of 40 L = 28 L. At 44% alcohol, water is 56% of new total V => 0.56V = 28 => V = 50 L => Added = 50 - 40 = 10 L." },
      { topic: "Number Properties", q: "What is the remainder when 7^2026 is divided by 5?", opts: ["1", "2", "3", "4"], ans: 3, exp: "7 ≡ 2 (mod 5). Powers of 2 mod 5 cycle with length 4: 2, 4, 3, 1. Since 2026 = 4*506 + 2, 7^2026 ≡ 2^2 = 4 (mod 5)." },
      { topic: "Combinatorics & Probability", q: "In how many ways can 6 distinct software modules be assigned to 3 servers such that each server receives at least 1 module?", opts: ["360", "540", "600", "720"], ans: 1, exp: "Total unrestricted assignments = 3^6 = 729. Subtract assignments missing at least 1 server: 3*(2^6) - 3*(1^6) = 192 - 3 = 189 => 729 - 189 = 540." },
      { topic: "Data Logic & Rates", q: "Working together, Pipelines A and B fill a reservoir in 12 hours. If Pipeline A operates alone for 4 hours and Pipeline B finishes the remaining work in 18 hours, how long would Pipeline B take alone?", opts: ["21 hrs", "24 hrs", "27 hrs", "30 hrs"], ans: 0, exp: "4/A + 18/B = 1 and 1/A + 1/B = 1/12 => 4(1/12 - 1/B) + 18/B = 1 => 1/3 + 14/B = 1 => 14/B = 2/3 => B = 21 hours." }
    ];

    window._MOCK4_ANSWERS = {};
    const scheme = exam === "CAT" ? "MCQ +3 / -1 (Negative Marking Active)" : "Adaptive Scaled +1 / 0 (Zero Negative Marking)";

    el.innerHTML = `
      <div class="max-w-5xl mx-auto my-4 space-y-4">
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-3 shadow-sm">
          <div>
            <span class="text-[10px] font-extrabold uppercase text-indigo-600">${exam} Live Timed Section Drill</span>
            <h2 class="text-lg font-extrabold text-slate-900 dark:text-white">Diagnostic Mock Simulator — ${exam} High-Yield Set</h2>
            <div class="text-xs text-slate-500">Marking Scheme: <strong>${scheme}</strong> &bull; Submits directly into Tab 6 Score Forecaster</div>
          </div>
          <button type="button" onclick="
            let correct = 0, wrong = 0;
            const bankLen = 5;
            const ansKey = [2, 1, 3, 1, 0];
            for (let i = 0; i < bankLen; i++) {
              if (window._MOCK4_ANSWERS[i] === undefined) continue;
              if (window._MOCK4_ANSWERS[i] === ansKey[i]) correct++; else wrong++;
            }
            const isCat = window.location.host.toLowerCase().includes('cat') || (!window.location.host.includes('gmat') && !window.location.host.includes('gre'));
            const score = isCat ? Math.max(0, correct * 3 - wrong * 1) : correct;
            const maxScore = isCat ? bankLen * 3 : bankLen;
            const hist = JSON.parse(localStorage.getItem('ipm_mock_history_v1') || '[]');
            hist.unshift({ date: new Date().toLocaleDateString(), score, maxScore, correct, wrong });
            localStorage.setItem('ipm_mock_history_v1', JSON.stringify(hist));
            document.getElementById('mock4-result-banner').innerHTML = '<strong>Submitted!</strong> Correct: ' + correct + '/5 | Wrong: ' + wrong + ' | Net Score: ' + score + '/' + maxScore + ' — Telemetry synced to Header &amp; Tab 6 Score Forecaster.';
            document.getElementById('mock4-result-banner').classList.remove('hidden');
            document.querySelectorAll('.mock4-exp').forEach(e => e.classList.remove('hidden'));
          " class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow cursor-pointer">
            Submit &amp; Sync to Tab 6 Forecaster
          </button>
        </div>

        <div id="mock4-result-banner" class="hidden p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-700 text-xs text-emerald-900 dark:text-emerald-200"></div>

        <div class="space-y-3">
          ${bank.map((item, idx) => `
            <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-3 shadow-sm">
              <div class="flex justify-between items-center text-xs">
                <span class="font-extrabold text-indigo-600">Q${idx + 1} &bull; ${item.topic}</span>
                <span class="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold">${exam === "CAT" ? "+3 / -1 MCQ" : "+1 / 0 Adaptive"}</span>
              </div>
              <div class="text-sm font-semibold text-slate-900 dark:text-white">${item.q}</div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                ${item.opts.map((opt, oi) => `
                  <label class="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 text-xs font-semibold cursor-pointer">
                    <input type="radio" name="mock4_q_${idx}" onchange="window._MOCK4_ANSWERS[${idx}]=${oi}">
                    <span><strong>${String.fromCharCode(65 + oi)}.</strong> ${opt}</span>
                  </label>
                `).join("")}
              </div>
              <div class="mock4-exp hidden p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-900 dark:text-indigo-200">
                <strong>Solution (${String.fromCharCode(65 + item.ans)}):</strong> ${item.exp}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  };

  // Enforce strict 1-to-1 tab assignment across all 3 portals
  window.renderTab3 = window.renderVerbalStudio3;
  window.renderTab4 = window.renderMockSimulator4;
  if (typeof window.renderTrapClinic5 === "function") {
    window.renderTab5 = window.renderTrapClinic5;
  }
})();