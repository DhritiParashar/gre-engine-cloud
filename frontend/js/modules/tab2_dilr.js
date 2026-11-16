window.renderTab2 = function (el) {
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");

  const BANK = exam === "GMAT" ? [
    {
      id: "ds_algebra", badge: "DATA INSIGHTS • PILLAR 1",
      title: "Data Sufficiency (DS): Value vs. Yes/No & Constraint Isolation",
      meta: "8–10 Qs per Section • Pure Logical Sufficiency (Zero Geometry)",
      theory: "Data Sufficiency evaluates whether the given statements provide enough information to determine a unique value (Value DS) or a definitive Yes/No answer (Yes/No DS). Never solve to a final number unless required to confirm uniqueness.",
      worked: "Worked Example: Is integer x > 0? (1) x^2 - 4x = 0  (2) x^3 > 0.\nStep 1: From (1), x(x - 4) = 0 => x = 0 or x = 4. Since x = 0 gives 'No' and x = 4 gives 'Yes', (1) alone is Insufficient.\nStep 2: Wipe (1) completely. From (2), x^3 > 0 => x > 0 is definitively 'Yes' -> (2) alone is Sufficient. Answer: Choice B.",
      drills: [
        { q: "What is the value of integer n? (1) n^2 - 9n + 20 = 0  (2) n is a prime number.", opts: ["(1) Alone", "(2) Alone", "Both Together", "Each Alone", "Neither Sufficient"], ans: 2, exp: "(1) gives n = 4 or n = 5 (two values -> insufficient). (2) alone allows infinitely many primes. Together, the only prime in {4, 5} is n = 5 -> Choice C." },
        { q: "If x and y are non-zero integers, is x/y an integer? (1) x is divisible by 6  (2) y is divisible by 3.", opts: ["(1) Alone", "(2) Alone", "Both Together", "Each Alone", "Neither Sufficient"], ans: 4, exp: "Test x = 6, y = 3 -> x/y = 2 (Yes). Test x = 6, y = 9 -> x/y = 2/3 (No). Even together, neither statement suffices -> Choice E." },
        { q: "A portfolio holds only Bonds and Equities worth $200,000 total. What is the dollar value of Equities? (1) Equities exceed Bonds by $40,000  (2) Bonds represent 40% of the portfolio.", opts: ["(1) Alone", "(2) Alone", "Both Together", "Each Alone", "Neither Sufficient"], ans: 3, exp: "(1) E + B = 200k and E - B = 40k => E = $120k (Sufficient). (2) B = 40% => E = 60% of 200k = $120k (Sufficient). Each alone suffices -> Choice D." }
      ]
    },
    {
      id: "msr_tabs", badge: "DATA INSIGHTS • PILLAR 2",
      title: "Multi-Source Reasoning (MSR): Cross-Tab Financial & Operational Synthesis",
      meta: "2–3 Tabbed Exhibits • 3 Linked Questions per Set",
      theory: "MSR tests executive data synthesis across 2–3 tabs (e.g., Tab 1: Executive Email Policy, Tab 2: Regional Cost Table, Tab 3: Q4 Variance Footnotes). Most 715+ errors occur when candidates ignore conditional exceptions buried in Tab 1 or Tab 3.",
      worked: "Worked Example: Tab 1 states 'Warehouses exceeding 85% capacity incur a 12% overflow surcharge on total monthly storage cost.' Tab 2 lists Hub Alpha at 88% capacity with base storage cost $50,000.\nCalculation: Because 88% > 85%, total cost = $50,000 * 1.12 = $56,000 (not $50,000).",
      drills: [
        { q: "A SaaS firm's ARR grew 25% in Year 1 and 20% in Year 2 to reach $9.0M. What was its starting ARR?", opts: ["$5.5M", "$6.0M", "$6.25M", "$6.5M", "$7.2M"], ans: 1, exp: "Starting ARR * 1.25 * 1.20 = Starting ARR * 1.50 = $9.0M => Starting ARR = $6.0M." },
        { q: "Product X has a 40% gross margin on $150 revenue/unit. If unit cost rises by $15 while selling price stays $150, what is the new gross margin?", opts: ["25%", "30%", "33.3%", "35%", "36%"], ans: 1, exp: "Original cost = 60% of $150 = $90. New cost = $90 + $15 = $105. New profit = $150 - $105 = $45 => 45/150 = 30%." }
      ]
    },
    {
      id: "tpa_table", badge: "DATA INSIGHTS • PILLAR 3",
      title: "Two-Part Analysis (TPA) & Dynamic Table Sorting",
      meta: "5–6 Qs per Section • Coupled Algebraic & Logic Selections",
      theory: "Two-Part Analysis requires selecting two linked values (Column 1 and Column 2) that jointly satisfy a business constraint, mixture equation, or logical schedule.",
      worked: "Worked Example: Find integers (X, Y) from {2, 4, 5, 8, 10} such that 3X + 2Y = 26.\nTest values: If X = 4, 2Y = 14 => Y = 7 (not in set). If X = 6 (not in set). If X = 2, 2Y = 20 => Y = 10 (valid pair: X = 2, Y = 10).",
      drills: [
        { q: "Two servers A and B process 340 requests together in 10 minutes. Server A processes 4 requests/min more than Server B. What is Server A's rate (req/min)?", opts: ["15", "17", "19", "21", "23"], ans: 2, exp: "Combined rate = 340/10 = 34 req/min. A + B = 34 and A - B = 4 => 2A = 38 => A = 19 req/min." },
        { q: "If 20% of employees in Division North (150 staff) transfer to Division South (250 staff), what percentage of total staff is now in Division South?", opts: ["62.5%", "65.0%", "67.5%", "70.0%", "72.5%"], ans: 3, exp: "Transferred = 0.20 * 150 = 30. New South = 250 + 30 = 280 out of 400 total = 280/400 = 70.0%." }
      ]
    },
    {
      id: "graphics_interp", badge: "DATA INSIGHTS • PILLAR 4",
      title: "Graphics Interpretation: Scatter Plots, Bubble Charts & Slope Ratios",
      meta: "3–4 Qs per Section • Visual Trend & Ratio Estimation",
      theory: "Graphics Interpretation embeds dropdown completions directly into statements about scatter plots, stacked bars, or distribution curves. Always check whether axes start at zero and distinguish slope (rate) from absolute height.",
      worked: "Worked Example: On a Revenue (Y-axis) vs. Headcount (X-axis) scatter plot, any firm lying above the ray from the origin with slope $250K/employee exceeds the $250K revenue-per-employee benchmark.",
      drills: [
        { q: "A scatter plot shows Firm P at (40 staff, $12M revenue) and Firm Q at (75 staff, $18M revenue). By how much does Firm P's revenue per staff exceed Firm Q's?", opts: ["$40,000", "$50,000", "$60,000", "$75,000", "$80,000"], ans: 2, exp: "Firm P = $12M / 40 = $300K/staff. Firm Q = $18M / 75 = $240K/staff. Difference = $60,000." }
      ]
    }
  ] : (exam === "GRE" ? [
    {
      id: "gre_di_multi", badge: "GRE QUANTITATIVE • DATA INTERPRETATION 1",
      title: "Multi-Chart Data Interpretation: Compound Growth & Base Shifts",
      meta: "3–4 Qs per Quant Section • Linked Tables, Pie & Bar Displays",
      theory: "ETS GRE Data Interpretation pairs two related charts (e.g., Total Budget by Year + Department Percentage Breakdown). Always verify whether a question asks for percentage change vs. percentage-point difference.",
      worked: "Worked Example: Total R&D rose from $200M (20% Software) to $250M (24% Software).\nSoftware R&D went from 0.20*200 = $40M to 0.24*250 = $60M -> +50% relative increase (even though the share rose by only 4 percentage points).",
      drills: [
        { q: "In 2024, 35% of 1,200 graduate applicants were international. In 2025, total applicants rose to 1,500 and international share became 40%. How many MORE international applicants applied in 2025?", opts: ["120", "150", "180", "210", "240"], ans: 2, exp: "2024 international = 0.35 * 1200 = 420. 2025 international = 0.40 * 1500 = 600. Difference = 600 - 420 = 180." },
        { q: "A pie chart shows Sector Energy is 72 degrees of total market capitalization of $450B. What is Sector Energy's valuation?", opts: ["$72B", "$80B", "$90B", "$108B", "$112B"], ans: 2, exp: "72 / 360 = 1/5 = 20%. 20% of $450B = $90B." }
      ]
    },
    {
      id: "gre_di_stats", badge: "GRE QUANTITATIVE • DATA INTERPRETATION 2",
      title: "Quartiles, Boxplots, Percentiles & Normal Distributions",
      meta: "2–3 Qs per Quant Section • Dispersion & IQR Invariance",
      theory: "GRE Data Analysis heavily tests how adding a constant (+c) or multiplying by a positive factor (*k) transforms Mean, Median, IQR, and Standard Deviation: adding +c shifts Mean/Median by +c but leaves IQR and SD completely unchanged.",
      worked: "Worked Example: A distribution has Mean = 68, SD = 6. A score of 80 is (80 - 68)/6 = +2.0 SD above the mean. Under the Empirical Rule (68-95-99.7), ~97.5% of scores fall below +2.0 SD.",
      drills: [
        { q: "In a normal distribution with mean 500 and standard deviation 40, approximately what percentage of observations lie between 460 and 580?", opts: ["68%", "81.5%", "84%", "95%", "97.5%"], ans: 1, exp: "460 is -1 SD (34% between 460 and 500). 580 is +2 SD (47.5% between 500 and 580). Total = 34% + 47.5% = 81.5%." },
        { q: "If every value in a 30-element dataset is multiplied by 3 and then increased by 10, how does the new Standard Deviation compare to the original SD?", opts: ["Unchanged", "3 * SD", "3 * SD + 10", "9 * SD", "SD + 10"], ans: 1, exp: "Multiplying scales SD by |3| = 3; adding +10 shifts all points equally and does not change dispersion -> 3 * SD." }
      ]
    },
    {
      id: "gre_awa_issue", badge: "GRE ANALYTICAL WRITING • 5.5–6.0 ISSUE STUDIO",
      title: "Analyze an Issue Task: 30-Minute Conditional Thesis Architecture",
      meta: "1 Essay • 30 Mins • Scored 0.0 to 6.0 in 0.5 Increments",
      theory: "ETS graders award 5.5–6.0 scores to essays that stake a clear, nuanced position, examine underlying assumptions, and analyze specific counter-examples where the prompt's claim breaks down.",
      worked: "Worked Blueprint (4 Paragraphs):\n• Para 1 (4 mins): Hook + Qualified Thesis ('While X holds in domain A, unchecked application in domain B undermines Y').\n• Para 2 (9 mins): Core Causal Mechanism + Historical/Scientific Case Study.\n• Para 3 (10 mins): Strongest Counter-Argument + Boundary Condition Synthesis.\n• Para 4 (4 mins): Broader Epistemic Conclusion + 3-min Proofread.",
      drills: [
        { q: "Which essay opening best sets up a 6.0 GRE Issue response on 'Governments should focus funding exclusively on applied scientific research'?", opts: ["Listing 4 unrelated inventions without taking a stand", "Arguing that while applied research yields near-term commercial returns, defunding basic theoretical inquiry starves the foundational breakthroughs (such as quantum mechanics and CRISPR) that make future applied technologies possible", "Agreeing 100% and repeating the prompt wording three times", "Discussing purely personal anecdotes without systemic analysis"], ans: 1, exp: "Distinguishing short-term applied utility from long-term foundational discovery creates an analytical, nuanced 6.0 thesis." }
      ]
    }
  ] : [
    {
      id: "cat_dilr_1", badge: "CAT DILR CASELET LAB • MODULE 1",
      title: "Multi-Variable Arrangements, Scheduling & Linear/Circular Grids",
      meta: "1–2 Sets per Slot (5–10 Qs) • 5-Minute Set Triage & Case Branching",
      theory: "CAT DILR caselets integrate 4–5 parameters (Person, City, Role, Score, Slot) across 6–8 entities. Success depends on converting negative constraints into grid eliminations and branching cleanly into Case A / Case B when a binary split appears.",
      worked: "Worked Caselet: Five executives (A, B, C, D, E) present in Slots 1 to 5. B presents immediately after A; C is neither 1st nor 5th; D presents before A; E is 5th.\nDeduction: Since E = 5 and D < A and B = A + 1, the only valid order for {D, A, B} before 5 is D = 1, A = 2, B = 3, leaving C = 4 (satisfies C != 1, 5). Unique order: D-A-B-C-E.",
      drills: [
        { q: "In the worked arrangement D-A-B-C-E above, if C swaps slots with the executive presenting immediately before A, who now presents in Slot 4?", opts: ["A", "B", "C", "D"], ans: 3, exp: "Immediately before A (Slot 2) is D (Slot 1). Swapping C (Slot 4) and D (Slot 1) places D in Slot 4." },
        { q: "Six projects P1..P6 are scheduled across Monday to Saturday (one per day). P3 is before P1; P4 is on Wednesday; P2 is immediately after P5; P6 is on Saturday. Which project must be on Monday?", opts: ["P2", "P3", "P5", "Cannot be uniquely determined"], ans: 3, exp: "Wed = P4, Sat = P6. Available slots: Mon, Tue, Thu, Fri. Pair (P5, P2) can take (Mon, Tue) or (Thu, Fri), so either P5 or P3 can be on Monday." }
      ]
    },
    {
      id: "cat_dilr_2", badge: "CAT DILR CASELET LAB • MODULE 2",
      title: "Quantitative Reasoning DI: 3-Set & 4-Set Venn Maxima/Minima",
      meta: "1 Set per Slot (5 Qs) • High TITA Weightage",
      theory: "CAT Quantitative DI sets frequently ask for the maximum or minimum possible overlap across 3 or 4 attributes. Master the exact boundary formulas: for 3 sets A, B, C inside universe U, min(A ∩ B ∩ C) = max(0, A + B + C - 2U), and max(A ∩ B ∩ C) = min(A, B, C) when pairwise overlaps permit.",
      worked: "Worked Example: Out of 120 analysts, 90 know Python, 85 know SQL, and 80 know R.\nMinimum knowing all 3 = max(0, 90 + 85 + 80 - 2*120) = 255 - 240 = 15.\nMaximum knowing all 3 = min(90, 85, 80) = 80 (with 10 knowing Python only, 5 SQL only, 0 R only, and 25 knowing none).",
      drills: [
        { q: "[TITA] In a survey of 200 consumers, 150 use App X, 140 use App Y, and 130 use App Z. What is the minimum number of consumers who use all three apps?", opts: ["10", "20", "30", "40"], ans: 1, exp: "Min triple intersection = max(0, 150 + 140 + 130 - 2*200) = 420 - 400 = 20." },
        { q: "Using the same 200-consumer survey (X=150, Y=140, Z=130), what is the maximum possible number of consumers using all three apps?", opts: ["120", "130", "140", "150"], ans: 1, exp: "Triple overlap cannot exceed the smallest individual set: min(150, 140, 130) = 130." }
      ]
    },
    {
      id: "cat_dilr_3", badge: "CAT DILR CASELET LAB • MODULE 3",
      title: "Round-Robin Tournaments, Knockout Seeding & Points Tables",
      meta: "1 Set per Slot (5 Qs) • Classic IIM DILR Favorite",
      theory: "In an N-team round-robin tournament, total matches = N(N-1)/2, and each team plays N-1 matches. When upsets occur in knockout brackets (Seed 1 vs Seed 16, etc.), the sum of seeds in every round-of-16 match equals 17, quarterfinal 9, semifinal 5.",
      worked: "Worked Example: In a 16-player knockout tournament (Seeds 1–16), Seed 14 upsets Seed 3 in Round 1. Who does Seed 14 face in the Quarterfinals assuming higher seeds win all other matches?\nSolution: In Round 1, Seed 3 plays Seed 14 (sum = 17). Their winner plays the winner of Seed 6 vs Seed 11 (sum = 17, where 3 + 6 = 9). Thus Seed 14 faces Seed 6.",
      drills: [
        { q: "In a 5-team round-robin league (2 pts for win, 1 for draw, 0 for loss), if every team finishes with a distinct total score and no team goes undefeated, what is the maximum points the 1st-place team can have?", opts: ["6", "7", "8", "9"], ans: 1, exp: "Each team plays 4 matches (max 8 pts). Since no team is undefeated, max possible points is 7 (3 wins, 1 draw)." },
        { q: "In a 32-player knockout draw (Seeds 1 to 32), if there are no upsets, which seed plays Seed 5 in the Quarterfinals?", opts: ["Seed 3", "Seed 4", "Seed 12", "Seed 13"], ans: 1, exp: "In Quarterfinals (8 players left), seed sum = 9 => 9 - 5 = Seed 4." }
      ]
    },
    {
      id: "cat_dilr_4", badge: "CAT DILR CASELET LAB • MODULE 4",
      title: "Routes, Directed Networks, Supply Capacities & Bottlenecks",
      meta: "1 Set per Slot (5 Qs) • Flow Conservation & Min-Cut Logic",
      theory: "In directed pipeline or road-network sets, total inflow into every intermediate node equals total outflow, and maximum flow from Source to Sink is bounded by the minimum-capacity cut across parallel paths.",
      worked: "Worked Example: Source S sends flow to A (cap 10) and B (cap 8). A sends to Sink T (cap 6) and to B (cap 4). B sends to Sink T (cap 11).\nMax flow: S->A sends 10 (6 direct to T, 4 via A->B). S->B sends 7 (so B receives 4 + 7 = 11 and sends all 11 to T). Total max flow = 6 + 11 = 17 units.",
      drills: [
        { q: "In the network above (S->A cap 10, S->B cap 8, A->T cap 6, A->B cap 4, B->T cap 11), if pipeline A->B is shut down (cap 0), what is the new maximum flow from S to T?", opts: ["12", "14", "15", "16"], ans: 1, exp: "Without A->B, upper path S->A->T carries min(10, 6) = 6, and lower path S->B->T carries min(8, 11) = 8. Total = 6 + 8 = 14." }
      ]
    }
  ]);

  window._DILR_ACTIVE_IDX = window._DILR_ACTIVE_IDX || 0;
  if (window._DILR_ACTIVE_IDX >= BANK.length) window._DILR_ACTIVE_IDX = 0;
  const m = BANK[window._DILR_ACTIVE_IDX];

  const leftList = BANK.map((item, idx) => `
    <button type="button" onclick="window._DILR_ACTIVE_IDX=${idx}; window.renderTab2(document.getElementById('main-workspace'));"
      class="w-full text-left p-4 rounded-2xl border transition cursor-pointer ${idx === window._DILR_ACTIVE_IDX ? 'border-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/40 shadow-sm' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-400'}">
      <div class="font-extrabold text-sm text-slate-900 dark:text-white leading-snug">${item.title}</div>
      <div class="text-xs text-slate-500 mt-1">${item.meta}</div>
    </button>
  `).join("");

  const drillsHtml = m.drills.map((d, i) => `
    <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-2.5">
      <div class="text-xs font-extrabold text-slate-900 dark:text-white">Practice Drill Q${i + 1}. ${d.q}</div>
      <div class="flex flex-wrap gap-2">
        ${d.opts.map((o, oi) => `
          <button type="button" onclick="this.parentElement.nextElementSibling.classList.remove('hidden')"
            class="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-indigo-500 text-xs font-semibold cursor-pointer">
            <strong>${String.fromCharCode(65 + oi)}.</strong> ${o}
          </button>
        `).join("")}
      </div>
      <div class="hidden p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-200">
        <strong>Solution (${String.fromCharCode(65 + d.ans)} — ${d.opts[d.ans]}):</strong> ${d.exp}
      </div>
    </div>
  `).join("");

  el.innerHTML = `
    <div class="max-w-7xl mx-auto my-4 grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div class="lg:col-span-4 space-y-3">
        <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">${exam} ANALYTICAL &amp; DATA MODULES (${BANK.length} PILLARS)</div>
        ${leftList}
      </div>
      <div class="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
        <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">${m.badge}</span>
        <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">${m.title}</h2>

        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
          <div class="font-extrabold uppercase text-[11px] text-indigo-600">Comprehensive Concept Framework</div>
          <p>${m.theory}</p>
        </div>

        <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 space-y-1.5 text-xs leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line">
          <div class="font-extrabold uppercase text-[11px] text-amber-700 dark:text-amber-300">Step-by-Step Worked Example</div>
          <div>${m.worked}</div>
        </div>

        <div class="space-y-3 pt-1">
          <div class="font-extrabold uppercase text-[11px] text-emerald-700 dark:text-emerald-400">Interactive Chapter Drills (${m.drills.length} Questions)</div>
          ${drillsHtml}
        </div>
      </div>
    </div>
  `;
};