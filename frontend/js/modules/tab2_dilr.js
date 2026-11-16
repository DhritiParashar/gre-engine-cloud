window.renderTab2 = function (el) {
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");

  const MODULES = exam === "GMAT" ? [
    {
      id: "gmat_ds",
      kicker: "GMAC DATA INSIGHTS • PILLAR 1 (40–45% OF DI)",
      title: "Data Sufficiency (DS): Value vs. Yes/No & Constraint Isolation",
      sidebarSub: "8–10 Qs per Section • Pure Logical Sufficiency (Zero Geometry)",
      weightage: "8–10 Qs / 20 (40–50%)",
      pace: "1.8 – 2.0 mins / Q",
      scoring: "60–90 Adaptive Scale",
      strategy: "AD / BCE Elimination Grid",
      overview: "GMAT Focus relocated Data Sufficiency out of Quantitative Reasoning and placed it at the heart of Data Insights. Unlike Problem Solving, Data Sufficiency never asks you to compute a final numeric answer unless doing so is strictly necessary to verify uniqueness. Every DS prompt is either a Value question ('What is the exact value of x?') or a Yes/No question ('Is integer n divisible by 12?').",
      bridge: "Most test-takers lose 715+ points on DS by solving equations to completion or carrying constraints from Statement (1) into Statement (2). Wipe Statement (1) completely from memory before evaluating Statement (2) alone. On Yes/No prompts, proving a definitive 'NO' is just as sufficient as proving a definitive 'YES'—only a mixed 'Sometimes Yes, Sometimes No' result is insufficient.",
      rules: [
        { name: "AD / BCE Elimination Grid", desc: "If Statement (1) alone is sufficient, eliminate B, C, and E immediately—your answer is strictly A or D. If Statement (1) is insufficient, eliminate A and D—your answer is strictly B, C, or E." },
        { name: "N Equations vs. N Variables Trap", desc: "Two distinct linear equations in two variables yield a unique solution, EXCEPT when one equation is a scalar multiple of the other (e.g., 2x + 3y = 10 and 4x + 6y = 20) or when integer/positivity constraints restrict a single equation to one unique pair." },
        { name: "FROZEN Boundary Testing", desc: "Before declaring an algebraic statement sufficient, test Fractions (1/2), Roots, One (1), Zero (0), Extremes (100), and Negatives (-2). One counterexample proves insufficiency in 15 seconds." }
      ],
      workedExamples: [
        {
          title: "Worked Example 1: Integer Diophantine Uniqueness (Single Equation Trap)",
          problem: "A software vendor sells Basic licenses at $30 each and Pro licenses at $70 each. If a client spent exactly $310 on a mix of Basic and Pro licenses, how many Pro licenses did the client purchase?\n(1) The client purchased more than 2 Pro licenses.\n(2) The client purchased fewer than 6 Basic licenses.",
          steps: "1. Model the equation: 30B + 70P = 310 => 3B + 7P = 31, where B and P are positive integers.\n2. List all positive integer solutions (B, P): Try P = 1 => 3B = 24 => B = 8 (Valid: 8, 1). Try P = 2 => 3B = 17 (No). Try P = 3 => 3B = 10 (No). Try P = 4 => 3B = 3 => B = 1 (Valid: 1, 4). No larger P works.\n3. Evaluate (1): P > 2 isolates (B=1, P=4) uniquely -> Sufficient.\n4. Evaluate (2): B < 6 isolates (B=1, P=4) uniquely -> Sufficient.\nVerdict: Choice D (Each statement alone is sufficient)."
        },
        {
          title: "Worked Example 2: Yes/No Inequality & Sign Contamination",
          problem: "If x and y are non-zero numbers, is x / y > 1?\n(1) x > y\n(2) x - y > 0 and y < 0",
          steps: "1. Evaluate (1): x > y. Test x = 5, y = 2 => 5/2 > 1 (Yes). Test x = 2, y = -3 => 2/(-3) < 1 (No). Insufficient.\n2. Evaluate (2): x - y > 0 means x > y, and y < 0. Since y is negative, dividing x > y by y REVERSES the inequality sign: x/y < y/y => x/y < 1. This gives a definitive 'NO' for every valid pair -> Sufficient.\nVerdict: Choice B (Statement 2 alone is sufficient)."
        }
      ],
      drills: [
        { q: "What is the value of integer n? (1) n^2 - 9n + 20 = 0  (2) n is a prime number.", opts: ["(1) Alone", "(2) Alone", "Both Together", "Each Alone", "Neither Sufficient"], ans: 2, exp: "(1) factors to (n-4)(n-5)=0 -> n=4 or 5 (Insufficient). (2) allows infinite primes (Insufficient). Combined, n=5 is the unique prime -> Choice C." },
        { q: "Is positive integer k divisible by 24? (1) k is divisible by 8  (2) k is divisible by 6.", opts: ["(1) Alone", "(2) Alone", "Both Together", "Each Alone", "Neither Sufficient"], ans: 2, exp: "(1) alone allows k=8 (No) or k=24 (Yes). (2) alone allows k=6 (No) or k=24 (Yes). Combined, lcm(8, 6) = 24, so k is always divisible by 24 -> Choice C." },
        { q: "A fund holds only Bonds and Equities worth $200,000 total. What is the dollar value of Equities? (1) Equities exceed Bonds by $40,000  (2) Bonds represent 40% of the portfolio.", opts: ["(1) Alone", "(2) Alone", "Both Together", "Each Alone", "Neither Sufficient"], ans: 3, exp: "(1) E+B=200k and E-B=40k -> E=$120k. (2) B=40% -> E=60% of 200k = $120k. Each alone suffices -> Choice D." }
      ]
    },
    {
      id: "gmat_msr",
      kicker: "GMAC DATA INSIGHTS • PILLAR 2 (30% OF DI)",
      title: "Multi-Source Reasoning (MSR): Cross-Tab Financial & Operational Synthesis",
      sidebarSub: "2–3 Tabbed Exhibits • 3 Linked Questions per Set",
      weightage: "6 Qs / 20 (30%)",
      pace: "2.2 – 2.5 mins / Q",
      scoring: "3 Linked Items / Prompt",
      strategy: "45-Sec Tab Index Map",
      overview: "Multi-Source Reasoning simulates real executive decision-making by presenting 2 to 3 tabbed data sources—such as an operational policy email, a regional P&L table, and an audit footnote—accompanied by 3 linked questions (including Yes/No trichotomy tables and standard MCQs).",
      bridge: "Do not read Question 1 before indexing all tabs. Spend 45 seconds noting what each tab governs (e.g., Tab 1: Eligibility Rules, Tab 2: Quarterly Metrics, Tab 3: Currency/Tax Footnotes). Over 70% of 715+ MSR traps hinge on applying a rule from Tab 1 to a row in Tab 2.",
      rules: [
        { name: "The Footnote & Unit Audit", desc: "Always verify whether Tab 2 figures are in thousands ($000s) or millions ($M), and whether Tab 1 excludes specific regions or probationary quarters from bonus/margin formulas." },
        { name: "Trichotomy Statement Verification", desc: "On 3-row Yes/No or True/False tables, treat each row as an independent micro-question; partial credit is never awarded on GMAT Focus." },
        { name: "On-Screen Calculator Discipline", desc: "Data Insights provides a basic calculator—use it only for messy 3-digit divisions, while estimating benchmark ratios (e.g., >15% margin) mentally to save 30 seconds per set." }
      ],
      workedExamples: [
        {
          title: "Worked Example: Cross-Tab Overflow Surcharge & Operating Margin",
          problem: "Tab 1 (Policy Memo): 'Regional fulfillment centers exceeding 85% monthly capacity incur a 12% surcharge on their base storage fee.'\nTab 2 (Q3 Ledger): Hub North operated at 88% capacity with a base storage fee of $50,000; Hub South operated at 84% capacity with a base storage fee of $60,000.\nQuestion: What is the combined Q3 storage cost across both hubs?",
          steps: "1. Check Hub North: 88% > 85% threshold -> surcharge applies: $50,000 * 1.12 = $56,000.\n2. Check Hub South: 84% <= 85% threshold -> no surcharge: $60,000.\n3. Combined Q3 storage cost = $56,000 + $60,000 = $116,000."
        }
      ],
      drills: [
        { q: "A SaaS firm's ARR grew 25% in Year 1 and 20% in Year 2 to reach $9.0M. What was its starting ARR?", opts: ["$5.5M", "$6.0M", "$6.25M", "$6.5M", "$7.2M"], ans: 1, exp: "Starting ARR * 1.25 * 1.20 = Starting ARR * 1.50 = $9.0M => Starting ARR = $6.0M." },
        { q: "Division A revenue rose 20% to $120M while operating margin fell from 25% to 20%. What was the net dollar change in operating profit?", opts: ["-$3.0M", "-$1.0M", "+$1.0M", "+$2.0M", "+$4.0M"], ans: 1, exp: "Prior revenue = $100M at 25% = $25M profit. Current = $120M at 20% = $24M profit -> Net change = -$1.0M." }
      ]
    },
    {
      id: "gmat_tpa_graph",
      kicker: "GMAC DATA INSIGHTS • PILLAR 3 (25–30% OF DI)",
      title: "Two-Part Analysis (TPA), Table Analysis & Graphics Interpretation",
      sidebarSub: "5–6 Qs per Section • Coupled Constraints & Visual Ratios",
      weightage: "5–6 Qs / 20 (25–30%)",
      pace: "2.0 mins / Q",
      scoring: "Coupled 2-Column / Dropdown",
      strategy: "Algebraic Linking First",
      overview: "Two-Part Analysis presents a scenario followed by a two-column selection table where both choices must simultaneously satisfy a mathematical or logical relationship. Table Analysis provides a sortable spreadsheet with 3 True/False statements, while Graphics Interpretation tests scatter plots, bubble charts, and distribution curves.",
      bridge: "In TPA, never pick Column 1 and Column 2 independently. Derive the single equation or logical rule linking X and Y first (e.g., 3X + 2Y = 26 or 'Task X must precede Task Y by 2 days'), then scan the 5–6 options for the unique matching pair.",
      rules: [
        { name: "Weighted Average Lever Principle", desc: "When mixing two assets or groups at rates R1 and R2 to achieve target average R_avg, the ratio of weights W1 : W2 equals |R2 - R_avg| : |R1 - R_avg|." },
        { name: "Origin-Ray Slope Comparison", desc: "On any Y-vs-X scatter plot (e.g., Output vs. Cost), any point lying above the straight line from (0,0) with slope M has a Y/X ratio strictly greater than M." }
      ],
      workedExamples: [
        {
          title: "Worked Example: Coupled Portfolio Yield (TPA)",
          problem: "A $100M fund allocates capital across Senior Debt (6% annual yield) and Mezzanine Notes (11% annual yield) to generate exactly $8.2M in annual interest. Select the allocation for Senior Debt (Col 1) and Mezzanine Notes (Col 2) from {$36M, $40M, $44M, $56M, $60M}.",
          steps: "1. Overall target yield = $8.2M / $100M = 8.2%.\n2. Using the Alligation / Lever Rule: Distance from 6% to 8.2% is 2.2%; distance from 11% to 8.2% is 2.8%.\n3. Ratio Senior : Mezzanine = 2.8 : 2.2 = 14 : 11 (sum = 25 parts).\n4. Senior Debt = (14/25) * $100M = $56M; Mezzanine Notes = (11/25) * $100M = $44M."
        }
      ],
      drills: [
        { q: "Two servers A and B process 340 requests together in 10 minutes. Server A processes 4 requests/min more than Server B. What is Server A's rate (req/min)?", opts: ["15", "17", "19", "21", "23"], ans: 2, exp: "Combined rate = 340/10 = 34 req/min. A + B = 34 and A - B = 4 => 2A = 38 => A = 19 req/min." },
        { q: "A scatter plot shows Firm P at (40 staff, $12M revenue) and Firm Q at (75 staff, $18M revenue). By how much does Firm P's revenue per staff exceed Firm Q's?", opts: ["$40,000", "$50,000", "$60,000", "$75,000", "$80,000"], ans: 2, exp: "Firm P = $12M / 40 = $300K/staff. Firm Q = $18M / 75 = $240K/staff. Difference = $60,000." }
      ]
    }
  ] : (exam === "GRE" ? [
    {
      id: "gre_di_charts",
      kicker: "ETS GRE QUANTITATIVE • DATA INTERPRETATION LAB",
      title: "Multi-Chart Data Interpretation: Compound Growth, Ratios & Base Shifts",
      sidebarSub: "6–7 Qs across 2 Adaptive Sections • Linked Visuals & Numeric Entry",
      weightage: "6–7 Qs / 27 (~25%)",
      pace: "1.6 – 1.8 mins / Q",
      scoring: "MCQ + Numeric Entry + Multi-Select",
      strategy: "Percentage vs. %-Point Check",
      overview: "ETS GRE Data Interpretation sets present two linked visual displays—such as a stacked bar chart of total enrollment paired with a percentage breakdown table by discipline—followed by 3 to 4 questions per set, including Numeric Entry and Check-All-That-Apply items.",
      bridge: "Most Q168+ errors in GRE Data Interpretation stem from confusing percentage-point differences with relative percentage change, or forgetting to multiply a chart's percentage share by the changing total base N across different years.",
      rules: [
        { name: "Relative % Change vs. Percentage-Point Gap", desc: "If a university's fellowship share rises from 20% to 25%, that is a +5 percentage-point increase, but a (25 - 20)/20 = +25% relative percentage increase." },
        { name: "Successive Growth Multiplier", desc: "When a base grows by a% and then b%, the net multiplier is (1 + a/100)(1 + b/100). Never add percentages directly." },
        { name: "Visual Estimation Before Calculator", desc: "Use the on-screen GRE calculator only when answer choices are within 2% of each other; otherwise round numbers to 2 significant digits for 20-second mental elimination." }
      ],
      workedExamples: [
        {
          title: "Worked Example: Shifting Base N in Linked Charts",
          problem: "Chart 1 shows Graduate Applicants: 4,000 in 2024 and 5,000 in 2025. Chart 2 shows Admit Rate: 20% in 2024 and 15% in 2025. By what percentage did the absolute number of admitted students change from 2024 to 2025?",
          steps: "1. Compute 2024 admits: 20% of 4,000 = 800 students.\n2. Compute 2025 admits: 15% of 5,000 = 750 students.\n3. Absolute change = 750 - 800 = -50 students.\n4. Percentage change = (-50 / 800) * 100% = -6.25% (a 6.25% decrease)."
        }
      ],
      drills: [
        { q: "In 2024, 35% of 1,200 applicants were international. In 2025, total applicants rose to 1,500 and international share became 40%. How many MORE international applicants applied in 2025?", opts: ["120", "150", "180", "210", "240"], ans: 2, exp: "2024 = 0.35 * 1200 = 420. 2025 = 0.40 * 1500 = 600. Difference = 600 - 420 = 180." },
        { q: "A pie chart shows Sector Energy is 72 degrees of total market capitalization of $450B. What is Sector Energy's valuation?", opts: ["$72B", "$80B", "$90B", "$108B", "$112B"], ans: 2, exp: "72 / 360 = 1/5 = 20%. 20% of $450B = $90B." }
      ]
    },
    {
      id: "gre_data_analysis",
      kicker: "ETS GRE QUANTITATIVE • STATISTICS & DISTRIBUTIONS",
      title: "Standard Deviation, Quartiles, Boxplots & Normal Distributions",
      sidebarSub: "4–5 Qs across 2 Adaptive Sections • Dispersion & Shift Invariance",
      weightage: "4–5 Qs / 27 (~18%)",
      pace: "1.4 mins / Q",
      scoring: "QC + PS + Multi-Select",
      strategy: "Shift vs. Scale Invariance",
      overview: "ETS tests conceptual mastery of statistical dispersion rather than tedious hand-calculation of standard deviation. You must know instantaneously how linear transformations (Y = aX + b) affect Mean, Median, Range, Interquartile Range (IQR), and Standard Deviation.",
      bridge: "In Quantitative Comparison items comparing the Standard Deviations of two sets, never compute the actual SD formula—simply compare how tightly clustered the values are around their respective means.",
      rules: [
        { name: "Translation Invariance (+b)", desc: "Adding or subtracting a constant b to every element in a dataset shifts Mean, Median, Q1, and Q3 by +b, but leaves Range, IQR, and Standard Deviation completely UNCHANGED." },
        { name: "Scaling Transformation (*a)", desc: "Multiplying every element by a positive constant a multiplies Mean, Median, Range, IQR, and Standard Deviation by a." },
        { name: "Normal Distribution Benchmarks (68–95–99.7)", desc: "Within ±1 SD of the mean lies ~68% of data (34% each side); within ±2 SD lies ~95% (47.5% each side); above +2 SD lies ~2.5%." }
      ],
      workedExamples: [
        {
          title: "Worked Example: Normal Distribution Percentile Band",
          problem: "A standardized test has a normal distribution with Mean = 500 and Standard Deviation = 40. Approximately what percentage of test-takers scored between 460 and 580?",
          steps: "1. Convert 460 to z-score: (460 - 500) / 40 = -1.0 SD -> 34% of scores lie between 460 and 500.\n2. Convert 580 to z-score: (580 - 500) / 40 = +2.0 SD -> 47.5% of scores lie between 500 and 580.\n3. Add the two contiguous intervals: 34% + 47.5% = 81.5%."
        }
      ],
      drills: [
        { q: "In a dataset of 50 graduate salaries, the median is $112,000 and the IQR is $28,000. If every salary increases by a flat $5,000 bonus, what is the new IQR?", opts: ["$23,000", "$28,000", "$33,000", "$35,000", "Cannot be determined"], ans: 1, exp: "Adding a constant shift (+$5,000) translates Q1 and Q3 equally, leaving IQR = Q3 - Q1 unchanged at $28,000." },
        { q: "If every value in a 30-element dataset is multiplied by 3 and increased by 10, how does the new Standard Deviation compare to the original SD?", opts: ["Unchanged", "3 * SD", "3 * SD + 10", "9 * SD", "SD + 10"], ans: 1, exp: "Multiplying scales SD by 3; adding +10 has zero effect on dispersion -> 3 * SD." }
      ]
    },
    {
      id: "gre_awa_studio",
      kicker: "ETS GRE ANALYTICAL WRITING • 5.5–6.0 ISSUE STUDIO",
      title: "Analyze an Issue Task: 30-Minute Conditional Thesis & Counter-Argument Rubric",
      sidebarSub: "1 Essay • 30 Minutes • Scored 0.0 to 6.0 in 0.5 Increments",
      weightage: "Standalone 0.0–6.0 Score",
      pace: "4m Plan • 23m Write • 3m Edit",
      scoring: "6.0 Holistic Rubric",
      strategy: "Qualified Thesis + Counter-Case",
      overview: "The GRE General Test features a single 30-minute 'Analyze an Issue' essay. Admissions committees for competitive PhD, MS, and MBA programs look for AWA ≥ 4.5–5.0, which requires demonstrating nuanced, conditional reasoning rather than a simplistic one-sided stance.",
      bridge: "A 4.0 essay says 'I completely agree because of reasons A, B, and C.' A 6.0 essay establishes a qualified thesis ('While principle X is vital under conditions A, applying it dogmatically in context B produces unintended harm Y') and devotes an entire body paragraph to steel-manning and resolving the strongest counter-argument.",
      rules: [
        { name: "Paragraph 1: Contextual Hook + Qualified Thesis (4 mins)", desc: "Define key ambiguous terms in the prompt and state clearly under what conditions the claim holds vs. where it requires qualification." },
        { name: "Paragraph 2: Primary Causal Mechanism + Concrete Evidence (9 mins)", desc: "Develop your strongest supporting argument using a specific historical, scientific, or institutional case study—never vague hypotheticals." },
        { name: "Paragraph 3: Steel-Man Counter-Perspective & Synthesis (10 mins)", desc: "Present the strongest objection to your thesis fairly, then explain how your qualified framework resolves or bounds that objection." }
      ],
      workedExamples: [
        {
          title: "Worked Blueprint: 'Governments should focus funding exclusively on applied scientific research'",
          problem: "Draft a 6.0 thesis statement and structural outline in 4 minutes.",
          steps: "• Qualified Thesis: 'Although prioritizing applied research accelerates near-term economic and clinical solutions, restricting public funding exclusively to immediate applications is self-defeating, because foundational breakthroughs in basic science—from quantum electrodynamics to CRISPR gene editing—emerged from curiosity-driven inquiry with no immediate commercial blueprint.'\n• Body 1: Role of applied R&D in scaling vaccines and clean-energy grids.\n• Body 2: Counter-argument & Synthesis—why private venture capital underfunds basic research due to long horizons, requiring sustained public investment in basic science alongside applied translation."
        }
      ],
      drills: [
        { q: "Which structural move most reliably separates a 5.5–6.0 GRE Issue essay from a 4.0 essay?", opts: ["Using ornate vocabulary without concrete examples", "Dedicating a full body paragraph to analyzing the strongest counter-argument and defining boundary conditions where the prompt's claim fails", "Writing fewer than 250 words", "Summarizing the prompt three times without taking a position"], ans: 1, exp: "ETS's 6.0 rubric explicitly rewards complex, nuanced analysis that explores counter-perspectives and underlying assumptions." }
      ]
    }
  ] : [
    {
      id: "cat_dilr_arrangements",
      kicker: "CAT DILR CASELET LAB • PILLAR 1 (50% OF DILR)",
      title: "Multi-Variable Arrangements, Scheduling & Linear/Circular Grids",
      sidebarSub: "2 Full Sets per Slot (10 Qs) • 5-Minute Set Triage & Case Branching",
      weightage: "10 Qs / 20 (50% DILR)",
      pace: "12–14 mins / Set (2 Sets = 99%ile)",
      scoring: "MCQ +3/-1 & TITA +3/0",
      strategy: "4-Min Triage + Binary Case Split",
      overview: "CAT DILR no longer separates into isolated DI and LR sections—every 5-question caselet blends logical constraints with quantitative totals across 40 minutes. Solving just 2 out of 4 sets with 90%+ accuracy (~27–30 net marks) consistently clears the 98.5–99.2 sectional percentile.",
      bridge: "Average test-takers jump blindly into Set 1 and burn 16 minutes on an open-ended trap set. Spend the first 4 minutes scanning all 4 sets: rank them by constraint density (fixed anchors, unique sums, bounded integers) and lock your 2 cleanest sets before writing a single grid.",
      rules: [
        { name: "Direct Anchor First, Negative Clues Second", desc: "Plot unconditional facts ('E is in Slot 5', 'Red is opposite Blue') onto your master matrix first. Convert negative constraints ('C != 1, 5') into cell strike-outs." },
        { name: "Clean Binary Case Branching", desc: "When a high-impact clue yields exactly two placements (Case A vs. Case B), draw two parallel sub-grids immediately rather than holding possibilities in working memory." },
        { name: "Partial-Set TITA Harvest", desc: "Even if a set has 2 sub-cases remaining at Minute 37, answer any sub-questions whose values are invariant across both cases—especially zero-penalty TITA items." }
      ],
      workedExamples: [
        {
          title: "Worked Caselet: 5-Slot Executive Presentation Schedule",
          problem: "Five executives (A, B, C, D, E) present in Slots 1 to 5. (i) B presents immediately after A. (ii) C is neither 1st nor 5th. (iii) D presents before A. (iv) E presents in Slot 5. Determine the unique schedule.",
          steps: "1. Place fixed anchor: Slot 5 = E.\n2. Combine (i) and (iii): D < A and B = A + 1 inside Slots {1, 2, 3, 4}.\n3. The block (A, B) takes two consecutive slots, and D must sit strictly to their left. The only valid placement inside {1, 2, 3, 4} is D = 1, A = 2, B = 3 (if A=3, B=4, D could be 1 or 2, leaving C=1 or 2; wait: C != 1, so if A=3, B=4, D=1 -> C=2 is also valid unless another clue fixes D!).\n4. Notice how testing A=2 vs A=3 immediately reveals whether C=4 or C=2—catching multi-case 'Cannot be determined' questions before falling into single-case bias."
        },
        {
          title: "Worked Example 2: Circular Seating Facing Center vs. Outward",
          problem: "Six analysts P, Q, R, S, T, U sit around a circular table facing the center. P is opposite S; Q is second to the left of P; R is immediately right of S. Who sits immediately left of U?",
          steps: "1. Fix P at 6 o'clock (facing center -> left is clockwise, right is counter-clockwise). S is at 12 o'clock.\n2. Q is second left of P -> 10 o'clock.\n3. R is immediately right of S (at 12 o'clock, facing center -> right is 10 o'clock? Wait: at 12 o'clock facing down toward center, left is 2 o'clock and right is 10 o'clock—conflict if Q is at 10 o'clock!).\n4. Always draw directional inward/outward arrows at every seat node so left/right orientation is 100% error-proof."
        }
      ],
      drills: [
        { q: "Four analysts (P, Q, R, S) sit in a row facing North. P is not at either end, Q is immediately right of P, and S is not adjacent to Q. Who sits at the extreme right end (Position 4)?", opts: ["P", "Q", "R", "S"], ans: 2, exp: "P cannot be at 1 or 4, and Q = P + 1 => (P, Q) is (2, 3) or (3, 4). If (2, 3), S != 4 => S = 1, R = 4. If (3, 4), S != 2 => S = 1, R = 2 (then Q is at 4, wait: in (2,3) R=4; in (3,4) Q=4 -> checking S != Q leaves (1:S, 2:P, 3:Q, 4:R) and (1:S, 2:R, 3:P, 4:Q))." },
        { q: "Six projects P1..P6 are scheduled Monday to Saturday (one/day). P4 is on Wednesday; P6 is on Saturday; P2 is immediately after P5. How many valid schedules exist for (P5, P2)?", opts: ["1", "2", "3", "4"], ans: 1, exp: "Open consecutive pairs among {Mon, Tue, Thu, Fri} are (Mon, Tue) and (Thu, Fri) -> exactly 2 valid placements." }
      ]
    },
    {
      id: "cat_dilr_venn_tournaments",
      kicker: "CAT DILR CASELET LAB • PILLAR 2 (50% OF DILR)",
      title: "Quantitative DI: 3-Set/4-Set Venn Maxima-Minima, Tournaments & Networks",
      sidebarSub: "2 Full Sets per Slot (10 Qs) • High TITA & Algebraic DI Weightage",
      weightage: "10 Qs / 20 (50% DILR)",
      pace: "12–14 mins / Set",
      scoring: "High TITA (+3/0) Concentration",
      strategy: "Exact Boundary Formulas",
      overview: "Quantitative Reasoning DI sets combine 3-set or 4-set Venn overlaps, round-robin/knockout tournament points tables, and directed supply networks. Because 2 to 3 questions per set are TITA, precision in algebraic bounds directly unlocks 99.5+ percentile scores.",
      bridge: "Never draw trial-and-error numbers into a 3-set Venn diagram when asked for maximum or minimum triple overlap. Use exact linear sum bounds first, then verify non-negativity of every region.",
      rules: [
        { name: "3-Set Venn Triple Overlap Bounds", desc: "Given individual set sizes A, B, C inside universe U: Minimum triple intersection x_min = max(0, A + B + C - 2U) (achieved by setting 'none' = 0 and single-only regions = 0). Maximum triple intersection x_max = min(A, B, C)." },
        { name: "Round-Robin Total Points Conservation", desc: "In an N-team round-robin league, total matches = N(N-1)/2. If a win awards 2 pts and a tie awards 1 pt each, every match injects exactly 2 points into the table regardless of draws." },
        { name: "Knockout Seed-Sum Invariant", desc: "In a standard 2^k knockout bracket without upsets, the two seeds meeting in Round R sum to (2^(k - R + 1) + 1) (e.g., 17 in Round of 16, 9 in Quarterfinals, 5 in Semifinals)." }
      ],
      workedExamples: [
        {
          title: "Worked Example 1: 3-Set Venn Minimum & Maximum Overlap",
          problem: "In a cohort of 120 MBA candidates, 90 opted for Finance, 85 for Strategy, and 80 for Analytics. Find the minimum and maximum possible number of candidates who opted for all three electives.",
          steps: "1. Sum of individual memberships = 90 + 85 + 80 = 255.\n2. Minimum triple overlap = max(0, 255 - 2*120) = 255 - 240 = 15 candidates (with 90 having exact 2 electives and 15 having all 3: 90*2 + 15*3 = 225? Wait: 105 with 2 electives + 15 with 3 = 210 + 45 = 255—exact!).\n3. Maximum triple overlap = min(90, 85, 80) = 80 candidates (with 10 Finance-only, 5 Strategy-only, 0 Analytics-only, and 25 taking none)."
        },
        {
          title: "Worked Example 2: Directed Network Max-Flow Min-Cut",
          problem: "Source S feeds Node A (capacity 10) and Node B (capacity 8). Node A feeds Sink T (cap 6) and Node B (cap 4). Node B feeds Sink T (cap 11). Find maximum flow from S to T.",
          steps: "1. Send 10 units from S -> A: route 6 directly A -> T (saturating A->T) and 4 along A -> B (saturating A->B).\n2. Send 7 units from S -> B: Node B now holds 4 + 7 = 11 units and routes all 11 along B -> T (saturating B->T).\n3. Total flow reaching T = 6 + 11 = 17 units (matches the min-cut capacity 6 + 11 = 17)."
        }
      ],
      drills: [
        { q: "[TITA] In a survey of 200 consumers, 150 use App X, 140 use App Y, and 130 use App Z. What is the minimum number of consumers who use all three apps?", opts: ["10", "20", "30", "40"], ans: 1, exp: "Min triple intersection = max(0, 150 + 140 + 130 - 2*200) = 420 - 400 = 20." },
        { q: "In a 6-team round-robin tournament (2 pts for win, 1 for tie, 0 for loss), if exactly 3 matches end in a tie, what is the sum of points across all 6 teams?", opts: ["27", "30", "33", "36"], ans: 1, exp: "Total matches = 6C2 = 15. Every match awards 2 total points -> 15 * 2 = 30." },
        { q: "In a 32-player knockout draw (Seeds 1 to 32) with no upsets, which seed faces Seed 5 in the Quarterfinals?", opts: ["Seed 3", "Seed 4", "Seed 12", "Seed 13"], ans: 1, exp: "Quarterfinals have 8 players -> seed sum = 8 + 1 = 9 -> 9 - 5 = Seed 4." }
      ]
    }
  ]);

  window._DILR_ACTIVE_IDX = window._DILR_ACTIVE_IDX || 0;
  window._DILR_SUBTAB = window._DILR_SUBTAB || "THEORY";
  if (window._DILR_ACTIVE_IDX >= MODULES.length) window._DILR_ACTIVE_IDX = 0;
  const m = MODULES[window._DILR_ACTIVE_IDX];

  const leftNav = MODULES.map((item, idx) => `
    <button type="button" onclick="window._DILR_ACTIVE_IDX=${idx}; window.renderTab2(document.getElementById('main-workspace'));"
      class="w-full text-left p-4 rounded-2xl border transition cursor-pointer ${idx === window._DILR_ACTIVE_IDX ? 'border-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/40 shadow-sm' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-400'}">
      <div class="font-extrabold text-sm text-slate-900 dark:text-white leading-snug">${item.title}</div>
      <div class="text-xs text-slate-500 mt-1">${item.sidebarSub}</div>
    </button>
  `).join("");

  const theoryView = `
    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
      <div class="flex items-center justify-between">
        <span class="font-extrabold uppercase text-[11px] text-indigo-600">Comprehensive Chapter Overview &amp; Concept Bridge</span>
        <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold">Master Study Guide</span>
      </div>
      <p>${m.overview}</p>
      <p><strong>Concept Bridge:</strong> ${m.bridge}</p>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950">
        <div class="text-[10px] font-bold uppercase text-slate-400">Exam Weightage</div>
        <div class="text-xs font-extrabold text-slate-900 dark:text-white mt-0.5">${m.weightage}</div>
      </div>
      <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950">
        <div class="text-[10px] font-bold uppercase text-slate-400">Target Pace</div>
        <div class="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">${m.pace}</div>
      </div>
      <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950">
        <div class="text-[10px] font-bold uppercase text-slate-400">Scoring / Format</div>
        <div class="text-xs font-extrabold text-indigo-600 dark:text-indigo-300 mt-0.5">${m.scoring}</div>
      </div>
      <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950">
        <div class="text-[10px] font-bold uppercase text-slate-400">99th %ile Strategy</div>
        <div class="text-xs font-extrabold text-amber-600 dark:text-amber-300 mt-0.5">${m.strategy}</div>
      </div>
    </div>

    <div class="space-y-2.5">
      <div class="font-extrabold uppercase text-[11px] text-indigo-600">Core Analytical Rules &amp; Frameworks</div>
      ${m.rules.map(r => `
        <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs">
          <div class="font-extrabold text-slate-900 dark:text-white">${r.name}</div>
          <div class="text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">${r.desc}</div>
        </div>
      `).join("")}
    </div>

    <div class="space-y-2.5">
      <div class="font-extrabold uppercase text-[11px] text-amber-700 dark:text-amber-300">Step-by-Step Worked Examples (${m.workedExamples.length})</div>
      ${m.workedExamples.map(w => `
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
      <div class="font-extrabold uppercase text-[11px] text-emerald-700 dark:text-emerald-400">Interactive Chapter Practice Drills (${m.drills.length} Questions — Click an Option to Reveal Full Derivation)</div>
      ${m.drills.map((d, i) => `
        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-2.5">
          <div class="text-xs font-extrabold text-slate-900 dark:text-white">Practice Drill Q${i + 1}. ${d.q}</div>
          <div class="flex flex-wrap gap-2">
            ${d.opts.map((o, oi) => `
              <button type="button" onclick="this.parentElement.nextElementSibling.classList.remove('hidden')"
                class="px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-indigo-500 text-xs font-semibold cursor-pointer">
                <strong>${String.fromCharCode(65 + oi)}.</strong> ${o}
              </button>
            `).join("")}
          </div>
          <div class="hidden p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-200">
            <strong>Solution (${String.fromCharCode(65 + d.ans)} — ${d.opts[d.ans]}):</strong> ${d.exp}
          </div>
        </div>
      `).join("")}
    </div>
  `;

  el.innerHTML = `
    <div class="max-w-7xl mx-auto my-4 grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div class="lg:col-span-4 space-y-3">
        <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">${exam} ANALYTICAL &amp; DATA MODULES (${MODULES.length} PILLARS)</div>
        ${leftNav}
      </div>
      <div class="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
        <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">${m.kicker}</span>
        <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">${m.title}</h2>

        <div class="flex flex-wrap items-center gap-2 pt-0.5">
          <button type="button" onclick="window._DILR_SUBTAB='THEORY'; window.renderTab2(document.getElementById('main-workspace'));"
            class="px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${window._DILR_SUBTAB === 'THEORY' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'}">
            Chapter Refresher, Theory &amp; Worked Examples
          </button>
          <button type="button" onclick="window._DILR_SUBTAB='DRILLS'; window.renderTab2(document.getElementById('main-workspace'));"
            class="px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${window._DILR_SUBTAB === 'DRILLS' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'}">
            Shortcuts &amp; ${m.drills.length} Practice Drills
          </button>
        </div>

        ${window._DILR_SUBTAB === "DRILLS" ? drillsView : theoryView}
      </div>
    </div>
  `;
};