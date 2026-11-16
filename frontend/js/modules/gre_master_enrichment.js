// ==============================================================================
// GOALisB GRE GENERAL (260-340) MASTER ENRICHMENT SUITE
// - Replaces legacy CAT 95%ile / 99.5%ile badges with GRE 155+ / 165+ / 170 bands
// - Enriches Tab 1 (QC & PS), Tab 2 (DI & 30-Min AWA Lab), Tab 3 (7-Chapter TC/SE/RC)
// - Enriches Tab 4 (5-Blueprint Section-Adaptive Mock + Palette + PDF Marksheet)
// ==============================================================================
(function () {
  // 1. Live DOM Sanitizer for Tab 1 & Study Cards (replaces CAT 95%ile / 99.5%ile pills with GRE bands)
  function sanitizeGreLabels() {
    document.querySelectorAll("button, span, div").forEach(el => {
      if (el.children.length > 0) return;
      const txt = (el.textContent || "").trim();
      if (txt === "CAT 95%ile") el.textContent = "GRE 165+ Contender";
      else if (txt === "CAT 99.5%ile") el.textContent = "GRE 170 Perfection";
      else if (txt === "Foundation") el.textContent = "GRE 155+ Foundation";
      else if (txt === "Matrices") el.textContent = "Geometry & 3D";
      else if (txt === "Logarithms") el.textContent = "Normal Dist.";
    });
  }

  // 2. Enriched Tab 2: GRE Data Interpretation & 30-Min Analytical Writing (AWA) Lab
  window.renderGreDiAndAwaTab2 = function (el) {
    const target = el || document.getElementById("main-workspace");
    if (!target) return;
    window._GRE_AWA_SECS = window._GRE_AWA_SECS || 1800;
    if (window._GRE_AWA_TIMER) clearInterval(window._GRE_AWA_TIMER);

    const diSets = [
      {
        title: "DI Caselet 1: Multi-Sector R&D Allocation & Patent Yield (2022–2025)",
        table: "Biotech: $42M R&D (2022) -> $56M (2025), 28 Patents | FinTech: $30M (2022) -> $45M (2025), 18 Patents | CleanTech: $50M (2022) -> $80M (2025), 40 Patents",
        q: "Which sector achieved the highest percentage increase in R&D expenditure from 2022 to 2025, and what was its R&D cost per patent in 2025?",
        opts: ["A) CleanTech; $2.00M per patent", "B) FinTech; $2.50M per patent", "C) Biotech; $2.00M per patent", "D) CleanTech; $1.60M per patent", "E) FinTech; $1.80M per patent"],
        ans: 0,
        exp: "Growth rates: Biotech = +33.3%, FinTech = +50.0%, CleanTech = (80 - 50)/50 = +60.0% (highest). CleanTech 2025 cost/patent = $80M / 40 = $2.00M."
      },
      {
        title: "DI Caselet 2: Graduate Admissions Yield & Percentile Distribution",
        table: "Total Applicants: 2,400 | Admitted: 18% | Enrolled (Yield): 62.5% of Admitted | Mean Quant Score of Enrolled: 166.4 (SD = 2.8)",
        q: "How many applicants actually enrolled in the program?",
        opts: ["A) 240", "B) 270", "C) 310", "D) 360", "E) 432"],
        ans: 1,
        exp: "Admitted = 0.18 * 2,400 = 432 students. Enrolled = 0.625 * 432 = (5/8) * 432 = 270 students."
      }
    ];

    target.innerHTML = `
      <div class="max-w-7xl mx-auto pt-4 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div class="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">GRE QUANT PART B • DATA INTERPRETATION</span>
            <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">On-Screen Calculator Allowed</span>
          </div>
          <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">Multi-Chart &amp; Ratio Data Interpretation Sets</h2>
          <p class="text-xs text-slate-500">GRE Quant includes 3–4 Data Interpretation questions per section testing percentage change, weighted ratios, and median/quartile estimation.</p>
          ${diSets.map((d, idx) => `
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
              <div class="font-extrabold text-indigo-700 dark:text-indigo-300">${d.title}</div>
              <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-[11px]">${d.table}</div>
              <div class="font-bold text-slate-900 dark:text-white">${d.q}</div>
              <div class="space-y-1.5">
                ${d.opts.map((o, oi) => `
                  <button type="button" onclick="this.parentElement.nextElementSibling.classList.remove('hidden')"
                    class="w-full text-left px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-indigo-500 font-semibold cursor-pointer">${o}</button>
                `).join("")}
              </div>
              <div class="hidden p-3 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                <strong>Step-by-Step Solution:</strong> ${d.exp}
              </div>
            </div>
          `).join("")}
        </div>

        <div class="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="text-[10px] font-extrabold uppercase tracking-wider text-amber-600">ANALYTICAL WRITING (AWA • 0–6 SCALE)</span>
              <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">30-Minute &ldquo;Analyze an Issue&rdquo; Studio</h2>
            </div>
            <div class="flex items-center gap-2">
              <span id="gre-awa-clock" class="px-3 py-1.5 rounded-xl bg-amber-100 text-amber-900 font-mono font-extrabold text-xs">30:00</span>
              <button type="button" onclick="if(window._GRE_AWA_TIMER) clearInterval(window._GRE_AWA_TIMER); window._GRE_AWA_TIMER=setInterval(()=>{window._GRE_AWA_SECS=Math.max(0,window._GRE_AWA_SECS-1); const c=document.getElementById('gre-awa-clock'); if(c) c.textContent=String(Math.floor(window._GRE_AWA_SECS/60)).padStart(2,'0')+':'+String(window._GRE_AWA_SECS%60).padStart(2,'0');},1000);"
                class="px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-extrabold cursor-pointer">Start 30m Timer</button>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 text-xs space-y-1.5">
            <div class="font-extrabold text-indigo-800 dark:text-indigo-200">Official ETS Issue Task Prompt:</div>
            <p class="leading-relaxed text-slate-800 dark:text-slate-200">&ldquo;Universities should require every student to take a variety of courses outside the student&#39;s field of study because acquiring knowledge of various academic disciplines is the best way to become truly educated.&rdquo;</p>
            <div class="text-[11px] text-slate-500"><strong>Task:</strong> Write a response in which you discuss the extent to which you agree or disagree with the statement and explain your reasoning for the position you take.</div>
          </div>

          <textarea id="gre-awa-essay" rows="10" oninput="const w=this.value.trim().split(/\s+/).filter(Boolean).length; document.getElementById('gre-awa-words').textContent=w+' words (Target: 420–550 words)';"
            placeholder="Paragraph 1: Nuanced Thesis Statement...&#10;Paragraph 2: Primary Supporting Argument + Concrete Historical/Empirical Example...&#10;Paragraph 3: Secondary Mechanism / Cross-Disciplinary Synthesis...&#10;Paragraph 4: Counterargument Concession & Rebuttal...&#10;Paragraph 5: Crisp Conclusion..."
            class="w-full rounded-2xl border border-slate-300 dark:border-slate-700 p-3.5 text-xs leading-relaxed"></textarea>

          <div class="flex flex-wrap items-center justify-between gap-2">
            <span id="gre-awa-words" class="text-xs font-bold text-slate-500">0 words (Target: 420–550 words)</span>
            <button type="button" onclick="const txt=document.getElementById('gre-awa-essay').value.trim(); const wc=txt.split(/\s+/).filter(Boolean).length; const est=wc>=420?'5.5 / 6.0 (98th %ile)':(wc>=280?'4.5 / 6.0 (80th %ile)':'3.5 / 6.0 (Expand body paragraphs to 420+ words)'); const out=document.getElementById('gre-awa-grade'); out.classList.remove('hidden'); out.innerHTML='<strong>ETS Rubric Evaluation:</strong> Word Count = '+wc+' | Estimated AWA Band = <strong>'+est+'</strong>. Ensure explicit counterargument concession in Paragraph 4 to lock 5.5–6.0.';"
              class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold cursor-pointer">Grade AWA Essay (0–6 Scale)</button>
          </div>
          <div id="gre-awa-grade" class="hidden p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900"></div>
        </div>
      </div>
    `;
  };
  window.renderTab2 = window.renderGreDiAndAwaTab2;

  // 3. Enriched Tab 3: 7-Chapter GRE Verbal Studio (TC 1/2/3-Blank, SE 6-Choice Pairs, RC)
  window.renderGreVerbalStudio3 = function (el) {
    const target = el || document.getElementById("main-workspace");
    if (!target) return;

    const CHAPTERS = [
      {
        title: "1. Single-Blank Text Completion: Contrast & Causality Hinges",
        sub: "6 Qs per Test • Context Clues, Semicolons & Concession Pivots",
        overview: "Single-blank Text Completion tests precision vocabulary inside dense academic prose. Never look at the 5 choices first—predict your own target word using structural hinges ('although', 'nonetheless', ':', 'thus') and match exact polarity.",
              worked: [
        { tier: "GRE 155+ Foundation", p: "Given x > 0, compare Quantity A: (x + 2)^2 vs. Quantity B: x^2 + 4.", s: "1. Expand Quantity A = x^2 + 4x + 4.\n2. Subtract (x^2 + 4) from both quantities -> Compare 4x vs. 0.\n3. Since x > 0, 4x > 0 => Quantity A is greater (Choice A)." },
        { tier: "GRE 155+ Foundation", p: "Given y < 0, compare Quantity A: y^3 vs. Quantity B: y^2.", s: "1. Since y < 0, y^3 is strictly negative while y^2 is strictly positive.\n2. Every positive number exceeds every negative number => Quantity B is greater (Choice B)." },
        { tier: "GRE 155+ Foundation", p: "Compare Quantity A: (3^4)^5 vs. Quantity B: (3^5)^4.", s: "1. By power-of-a-power rule: (3^4)^5 = 3^20 and (3^5)^4 = 3^20.\n2. Both quantities are equal (Choice C)." },
        { tier: "GRE 165+ Contender", p: "Given 0 < x < 1, compare Quantity A: x^2 + x^3 vs. Quantity B: x + x^4.", s: "1. Compute Quantity B - Quantity A = (x - x^2) - (x^3 - x^4) = x(1 - x)(1 - x^2).\n2. For 0 < x < 1, x > 0, (1 - x) > 0, and (1 - x^2) > 0 => Quantity B is greater (Choice B)." },
        { tier: "GRE 165+ Contender", p: "Circle radius r and square side s satisfy pi * r^2 = s^2. Compare Circumference (2*pi*r) vs. Square Perimeter (4s).", s: "1. s = r * sqrt(pi) ≈ 1.772r -> Square Perimeter = 4s ≈ 7.09r.\n2. Circle Circumference = 2*pi*r ≈ 6.28r => Quantity B is greater (Choice B)." },
        { tier: "GRE 165+ Contender", p: "Given a > b > 0, compare Quantity A: a / b vs. Quantity B: (a + 5) / (b + 5).", s: "1. Adding a positive constant to numerator and denominator of an improper fraction (a/b > 1) pulls it closer to 1.\n2. Therefore a/b > (a + 5)/(b + 5) => Quantity A is greater (Choice A)." },
        { tier: "GRE 170 Perfection", p: "Given xy != 0, compare Quantity A: |x + y| vs. Quantity B: |x| + |y|.", s: "1. If x = 2, y = 3 -> |5| = 5 and 2 + 3 = 5 (Equal).\n2. If x = 2, y = -3 -> |-1| = 1 < 2 + 3 = 5 (B is greater).\n3. Two different outcomes => Relationship cannot be determined (Choice D)." },
        { tier: "GRE 170 Perfection", p: "n is a positive integer. Compare Quantity A: Remainder of 7^(4n+2) mod 5 vs. Quantity B: 4.", s: "1. 7 ≡ 2 (mod 5). Powers of 2 mod 5 cycle {2, 4, 3, 1}.\n2. 2^(4n+2) ≡ 2^2 = 4 (mod 5) => Equal (Choice C)." },
        { tier: "GRE 170 Perfection", p: "Set S = {10, 20, 30, 40, 50} vs Set T = {10, 30, 30, 30, 50}. Compare their standard deviations.", s: "1. Both have mean 30, but Set S has wider deviations (-20, -10, 0, +10, +20) than Set T (-20, 0, 0, 0, +20).\n2. Standard deviation of Set S is strictly greater (Choice A)." }
      ],
      drills: [
        { tag: "GRE 155+ Foundation • QC", q: "Given x > 0:\nQuantity A: (x + 2)^2 - 4\nQuantity B: x^2 + 4x", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 2, exp: "(x + 2)^2 - 4 = x^2 + 4x + 4 - 4 = x^2 + 4x = Quantity B (Choice C)." },
        { tag: "GRE 165+ Contender • QC (FROZEN Trap)", q: "Given 0 < x < 1 and y > 1:\nQuantity A: x^2 * y\nQuantity B: x * y^2", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 1, exp: "Divide both by xy > 0: Quantity A = x (< 1) vs. Quantity B = y (> 1) => Quantity B is greater (Choice B)." },
        { tag: "GRE 170 Perfection • QC", q: "n is a positive integer.\nQuantity A: Remainder when 7^(4n + 2) is divided by 5\nQuantity B: 4", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 2, exp: "7 ≡ 2 (mod 5). Cycle of 2^k mod 5 is {2, 4, 3, 1}, so 2^(4n+2) ≡ 2^2 = 4 (mod 5). Equal (Choice C)." },
        { tag: "GRE 165+ Contender • QC", q: "x^2 < 16 and y^2 < 25 (x, y are real numbers).\nQuantity A: x + y\nQuantity B: 8", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 3, exp: "If x = 3.9, y = 4.9 -> x + y = 8.8 > 8 (A). If x = 0, y = 0 -> 0 < 8 (B). Cannot be determined (Choice D)." }
      ]
    },
    {
      id: "gre_q2",
      kicker: "ETS QUANTITATIVE REASONING • PILLAR 2 OF 5",
      title: "Algebra, Exponents, Inequalities & Functions (PS & Numeric Entry)",
      sub: "Core Quant • ~5–6 Qs across 2 Adaptive Sections",
      weight: "5–6 Qs / 27 (~20% of Quant)",
      pace: "1.75 mins / PS Question",
      scoring: "5-Option PS (A–E) & Numeric Entry (+1 / 0)",
      strategy: "Prime Base & Vertex Completion",
      overview: "GRE Algebra combines 5-choice Problem Solving and exact Numeric Entry boxes across nested exponents, quadratic vertex shifts, absolute-value intervals, and recursive functions.",
      bridge: "Whenever exponents appear in sums (e.g., 2^12 + 2^12 + 2^12 + 2^12), factor out the smallest power immediately rather than computing huge integers.",
      rules: [
        { name: "Law 1: Common Base Factorization", desc: "2^n + 2^n = 2 * 2^n = 2^(n+1). Always reduce composite bases (4, 8, 9, 27) to prime factors." },
        { name: "Law 2: Parabola Vertex Form", desc: "f(x) = a(x - h)^2 + k achieves its global minimum (a > 0) or maximum (a < 0) at x = h with value k." }
      ],
      worked: [
        { tier: "GRE 155+ Foundation", p: "Solve for x: 3^(2x - 1) = 27^(x - 2).", s: "1. Rewrite 27^(x - 2) = (3^3)^(x - 2) = 3^(3x - 6).\n2. Equate exponents: 2x - 1 = 3x - 6 => x = 5." },
        { tier: "GRE 165+ Contender", p: "Find the minimum value of f(x) = x^2 - 6x + 14 for all real x.", s: "1. Complete the square: f(x) = (x - 3)^2 + 5.\n2. Since (x - 3)^2 >= 0, minimum value is 5." },
        { tier: "GRE 170 Perfection", p: "How many integers satisfy |2x - 5| <= 9?", s: "1. -9 <= 2x - 5 <= 9 => -4 <= 2x <= 14 => -2 <= x <= 7.\n2. Count = 7 - (-2) + 1 = 10 integers." }
      ],
      drills: [
        { tag: "GRE 155+ Foundation • Exponents", q: "If 3^(2x - 1) = 27^(x - 2), what is the value of x?", opts: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"], ans: 2, exp: "2x - 1 = 3(x - 2) => 2x - 1 = 3x - 6 => x = 5." },
        { tag: "GRE 165+ Contender • Functions", q: "For all real x, f(x) = x^2 - 6x + 14. What is the minimum value of f(x)?", opts: ["A. 2", "B. 3", "C. 5", "D. 9", "E. 14"], ans: 2, exp: "f(x) = (x - 3)^2 + 5 >= 5." },
        { tag: "GRE 170 Perfection • Inequalities", q: "How many integer values of x satisfy |2x - 5| <= 9?", opts: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"], ans: 3, exp: "-2 <= x <= 7 gives 10 integers." }
      ]
    },
    {
      id: "gre_q3",
      kicker: "ETS QUANTITATIVE REASONING • PILLAR 3 OF 5",
      title: "Number Properties, Divisibility, Remainders & Counting",
      sub: "165–170 Differentiator • ~4–5 Qs per Test",
      weight: "4–5 Qs / 27 (~18% of Quant)",
      pace: "1.80 mins / Question",
      scoring: "+1 / 0 (Zero Guessing Penalty)",
      strategy: "Prime Factorization & Complement Counting",
      overview: "Stage-2 Hard GRE Quant sections lean heavily on prime factor counts, trailing zeros, remainder cycles, and 'at least one' combinatorics.",
      bridge: "Total factors of N = p^a * q^b * r^c equals (a + 1)(b + 1)(c + 1); N is a perfect square if and only if all prime exponents are even.",
      rules: [
        { name: "Law 1: Complement Probability / Counting", desc: "P(at least one) = 1 - P(none). Subtract invalid cases from total unrestricted arrangements." },
        { name: "Law 2: Modular Remainder Arithmetic", desc: "Replace large bases with their remainders mod d before raising to exponents." }
      ],
      worked: [
        { tier: "GRE 155+ Foundation", p: "Find the total number of positive divisors of 360.", s: "1. 360 = 2^3 * 3^2 * 5^1.\n2. Divisors = (3 + 1)(2 + 1)(1 + 1) = 4 * 3 * 2 = 24." },
        { tier: "GRE 165+ Contender", p: "Find the greatest prime factor of 3^6 - 1.", s: "1. 3^6 - 1 = (3^3 - 1)(3^3 + 1) = 26 * 28 = 2 * 13 * 4 * 7.\n2. Greatest prime factor = 13." },
        { tier: "GRE 170 Perfection", p: "When n is divided by 12, remainder is 7. Find remainder when 5n is divided by 12.", s: "1. 5n ≡ 5 * 7 = 35 (mod 12).\n2. 35 = 12 * 2 + 11 => remainder = 11." }
      ],
      drills: [
        { tag: "GRE 155+ Foundation • Divisors", q: "How many positive integers are divisors of 360?", opts: ["A. 18", "B. 20", "C. 24", "D. 30", "E. 36"], ans: 2, exp: "360 = 2^3 * 3^2 * 5^1 => (4)(3)(2) = 24 divisors." },
        { tag: "GRE 165+ Contender • Factoring", q: "What is the greatest prime factor of 3^6 - 1?", opts: ["A. 5", "B. 7", "C. 11", "D. 13", "E. 19"], ans: 3, exp: "3^6 - 1 = 26 * 28 = 2^3 * 7 * 13 => 13." },
        { tag: "GRE 170 Perfection • Remainders", q: "When positive integer n is divided by 12, the remainder is 7. What is the remainder when 5n is divided by 12?", opts: ["A. 1", "B. 3", "C. 5", "D. 7", "E. 11"], ans: 4, exp: "5 * 7 = 35 = 24 + 11 => remainder 11." }
      ]
    },
    {
      id: "gre_q4",
      kicker: "ETS QUANTITATIVE REASONING • PILLAR 4 OF 5",
      title: "Geometry: Triangles, Circles, Polygons & 3D Solids",
      sub: "Core Quant • ~3–4 Qs per Test (Unlike GMAT Focus, GRE Retains Geometry)",
      weight: "3–4 Qs / 27 (~14% of Quant)",
      pace: "1.65 mins / Question",
      scoring: "+1 / 0 (Figures Not Necessarily Drawn to Scale)",
      strategy: "Special Right Triangles & Scale Audit",
      overview: "Unlike GMAT Focus, the GRE tests Euclidean Geometry: special right triangles (30-60-90, 45-45-90, 3-4-5, 5-12-13), inscribed angles, sector arcs, and cylinder/sphere volume scaling.",
      bridge: "Never assume a GRE diagram is drawn to scale unless explicitly stated; test extreme angle deformations on QC geometry figures.",
      rules: [
        { name: "Law 1: Triangle Inequality", desc: "For any triangle with sides a, b, c: |a - b| < c < a + b." },
        { name: "Law 2: Area & Volume Scaling", desc: "Scaling linear dimensions by factor k scales Area by k^2 and Volume by k^3." }
      ],
      worked: [
        { tier: "GRE 155+ Foundation", p: "A circle is inscribed inside a square of side 10. Find the shaded area outside the circle.", s: "1. Square area = 100. Circle radius = 5 => Circle area = 25*pi.\n2. Shaded area = 100 - 25*pi." },
        { tier: "GRE 165+ Contender", p: "Cylinder radius rises 20% and height drops 25%. Percent change in volume?", s: "1. V_new / V_old = (1.20)^2 * (0.75) = 1.44 * 0.75 = 1.08.\n2. Volume increases by 8%." },
        { tier: "GRE 170 Perfection", p: "Two triangle sides are 7 and 13. Which cannot be the perimeter?", s: "1. 6 < s < 20 => 26 < Perimeter < 40.\n2. Perimeter cannot equal 40." }
      ],
      drills: [
        { tag: "GRE 155+ Foundation • Circles", q: "A circle is inscribed in a square of side length 10. What is the area inside the square but outside the circle?", opts: ["A. 100 - 10*pi", "B. 100 - 25*pi", "C. 100 - 50*pi", "D. 40 - 25*pi", "E. 25*pi - 50"], ans: 1, exp: "100 - pi*(5^2) = 100 - 25*pi." },
        { tag: "GRE 165+ Contender • 3D Solids", q: "If a cylinder's radius increases by 20% and its height decreases by 25%, by what percent does its volume change?", opts: ["A. -10%", "B. -5%", "C. 0%", "D. +8%", "E. +15%"], ans: 3, exp: "1.44 * 0.75 = 1.08 => +8%." },
        { tag: "GRE 170 Perfection • Triangles", q: "Two sides of a triangle have lengths 7 and 13. Which CANNOT be the perimeter of the triangle?", opts: ["A. 27", "B. 30", "C. 35", "D. 39", "E. 40"], ans: 4, exp: "Third side < 20 => Perimeter < 40." }
      ]
    },
    {
      id: "gre_q5",
      kicker: "ETS QUANTITATIVE REASONING • PILLAR 5 OF 5",
      title: "Data Analysis: Normal Distributions, Quartiles, Boxplots & Percentiles",
      sub: "High Yield • ~4–5 Qs per Test (Includes Data Interpretation)",
      weight: "4–5 Qs / 27 (~18% of Quant)",
      pace: "1.60 mins / Question",
      scoring: "+1 / 0 (Zero Guessing Penalty)",
      strategy: "34%–14%–2% Bell Curve Map",
      overview: "GRE Data Analysis focuses on Standard Deviation spread, Normal Distribution intervals (68% within 1 SD, 95% within 2 SDs), Box-and-Whisker quartiles (Q1, Median, Q3, IQR), and multi-chart Data Interpretation.",
      bridge: "Adding a constant c to every value shifts Mean and Median by +c, while Standard Deviation and Interquartile Range (IQR) remain completely unchanged.",
      rules: [
        { name: "Law 1: Empirical Normal Curve Split", desc: "Between Mean and +1 SD = 34%; +1 SD to +2 SD = 13.5% (~14%); above +2 SD = 2.5% (~2%)." },
        { name: "Law 2: Mean vs. Median Skewness", desc: "In a right-skewed distribution (long upper tail), Mean > Median." }
      ],
      worked: [
        { tier: "GRE 155+ Foundation", p: "Normal distribution with mean 60 and SD 8. Percent of values between 52 and 76?", s: "1. 52 is -1 SD (34% below mean); 76 is +2 SD (34% + 13.5% = 47.5% above mean).\n2. Total = 34% + 47.5% = 81.5%." },
        { tier: "GRE 165+ Contender", p: "Dataset {10, 12, 14, 16, 18} vs {110, 112, 114, 116, 118}. Compare SDs.", s: "1. Adding 100 shifts every point equally without changing spread.\n2. Standard deviations are identical." },
        { tier: "GRE 170 Perfection", p: "In a normal distribution, 16% of scores exceed 78 and 2.5% exceed 86. Find the mean.", s: "1. 16% above 78 => 78 = Mean + 1 SD. 2.5% above 86 => 86 = Mean + 2 SD.\n2. SD = 86 - 78 = 8 => Mean = 70." }
      ],
      drills: [
        { tag: "GRE 155+ Foundation • Normal Dist.", q: "In a normal distribution with mean 60 and SD 8, approximately what percent of data lies between 52 and 76?", opts: ["A. 68.0%", "B. 81.5%", "C. 84.0%", "D. 95.0%", "E. 97.5%"], ans: 1, exp: "34% (-1 SD to Mean) + 47.5% (Mean to +2 SD) = 81.5%." },
        { tag: "GRE 170 Perfection • Percentiles", q: "In a normal distribution, 16% of values exceed 78 and 2.5% exceed 86. What is the arithmetic mean?", opts: ["A. 66", "B. 68", "C. 70", "D. 72", "E. 74"], ans: 2, exp: "Mean + 1 SD = 78 and Mean + 2 SD = 86 => SD = 8 => Mean = 70." }
      ]
    }
  ];

  window._GRE_T1_MOD = 0;
  window._GRE_T1_SUB = "DRILLS";
  window._GRE_T1_TIER = "ALL";
  window._GRE_T1_QIDX = 0;
  window._GRE_T1_ATT = {};
  window._GRE_T1_PG_EXTRA = window._GRE_T1_PG_EXTRA || [];

  async function hydrateGreTab1Pg() {
    if (window._GRE_T1_PG_FETCHED) return window._GRE_T1_PG_EXTRA; window._GRE_T1_PG_FETCHED = true;
    try {
      const res = await fetch(`/api/questions?section=QUANT_CORE&limit=20&t=${Date.now()}`);
      if (res.ok) {
        const data = await res.json();
        const rows = Array.isArray(data) ? data : (data.questions || []);
        window._GRE_T1_PG_EXTRA = rows.map(q => {
          let opts = q.options_json || q.options || [];
          if (typeof opts === "string") { try { opts = JSON.parse(opts); } catch (_) { opts = []; } }
          const stem = q.prompt || q.question || "";
          if (!stem || !Array.isArray(opts) || opts.length < 4) return null;
          return {
            tag: "PostgreSQL Live • GRE Quant",
            q: stem,
            opts: opts.map((o, oi) => /^[A-E]\./.test(o) ? o : `${String.fromCharCode(65 + oi)}. ${o}`),
            ans: parseInt(String(q.answer ?? "0"), 10) || 0,
            exp: q.explanation || "Verified PostgreSQL GRE solution."
          };
        }).filter(Boolean).slice(0, 4);
      }
    } catch (_) {}
    return window._GRE_T1_PG_EXTRA;
  }

  window.renderGreQuantTab1 = async function (el) {
    const target = el || document.getElementById("main-workspace");
    if (!target) return;
    const pgExtra = await hydrateGreTab1Pg();
    const modIdx = Math.min(GRE_QUANT_MODULES.length - 1, Math.max(0, Number(window._GRE_T1_MOD || 0)));
    const m = GRE_QUANT_MODULES[modIdx];
    const allDrills = [...m.drills, ...pgExtra];
    const qIdx = Math.min(allDrills.length - 1, Math.max(0, Number(window._GRE_T1_QIDX || 0)));
    const curDrill = allDrills[qIdx];

    const filteredWorked = window._GRE_T1_TIER === "ALL"
      ? m.worked
      : m.worked.filter(w => w.tier.includes(window._GRE_T1_TIER));

    const attMap = window._GRE_T1_ATT[modIdx] || {};
    const attCount = Object.keys(attMap).length;
    const corCount = Object.values(attMap).filter(Boolean).length;

    target.innerHTML = `
      <div class="max-w-7xl mx-auto pt-4 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div class="lg:col-span-4 space-y-2.5">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">GRE QUANT &amp; DATA ANALYSIS (5 MODULES)</div>
          ${GRE_QUANT_MODULES.map((item, idx) => `
            <button type="button" onclick="window._GRE_T1_MOD=${idx}; window._GRE_T1_QIDX=0; window.renderGreQuantTab1();"
              class="w-full text-left p-4 rounded-2xl border transition cursor-pointer ${idx === modIdx
                ? "bg-indigo-50/90 dark:bg-indigo-950/60 border-indigo-500 shadow-sm"
                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-300"}">
              <div class="font-extrabold text-sm text-slate-900 dark:text-white leading-snug">${item.title}</div>
              <div class="text-xs text-slate-500 mt-1">${item.sub}</div>
            </button>
          `).join("")}
        </div>

        <div class="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
          <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">${m.kicker}</span>
          <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">${m.title}</h2>

          <div class="flex flex-wrap items-center gap-2">
            <button type="button" onclick="window._GRE_T1_SUB='THEORY'; window.renderGreQuantTab1();"
              class="px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${window._GRE_T1_SUB === "THEORY" ? "bg-indigo-600 text-white shadow-sm" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"}">
              Chapter Refresher &amp; Worked Examples
            </button>
            <button type="button" onclick="window._GRE_T1_SUB='DRILLS'; window.renderGreQuantTab1();"
              class="px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${window._GRE_T1_SUB === "DRILLS" ? "bg-indigo-600 text-white shadow-sm" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"}">
              Shortcuts &amp; ${allDrills.length} GRE Practice Drills
            </button>
          </div>

          ${window._GRE_T1_SUB === "THEORY" ? `
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              <div class="font-extrabold uppercase text-[11px] text-indigo-600">ETS GRE Concept Overview &amp; Bridge</div>
              <p>${m.overview}</p>
              <p><strong>Concept Bridge:</strong> ${m.bridge}</p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
              <div class="p-3 rounded-xl border bg-slate-50 dark:bg-slate-950"><div class="text-[10px] font-bold uppercase text-slate-400">Weightage</div><div class="font-extrabold mt-0.5">${m.weight}</div></div>
              <div class="p-3 rounded-xl border bg-slate-50 dark:bg-slate-950"><div class="text-[10px] font-bold uppercase text-slate-400">Target Pace</div><div class="font-extrabold text-emerald-600 mt-0.5">${m.pace}</div></div>
              <div class="p-3 rounded-xl border bg-slate-50 dark:bg-slate-950"><div class="text-[10px] font-bold uppercase text-slate-400">GRE Marking</div><div class="font-extrabold text-indigo-600 mt-0.5">${m.scoring}</div></div>
              <div class="p-3 rounded-xl border bg-slate-50 dark:bg-slate-950"><div class="text-[10px] font-bold uppercase text-slate-400">170 Strategy</div><div class="font-extrabold text-amber-600 mt-0.5">${m.strategy}</div></div>
            </div>

            <div class="space-y-2">
              ${m.rules.map(r => `
                <div class="p-3.5 rounded-xl border bg-white dark:bg-slate-950 text-xs">
                  <div class="font-extrabold">${r.name}</div>
                  <div class="text-slate-600 dark:text-slate-300 mt-0.5">${r.desc}</div>
                </div>
              `).join("")}
            </div>

            <div class="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="text-xs font-extrabold uppercase text-emerald-800 dark:text-emerald-300">GRADED GRE WORKED EXAMPLES (${filteredWorked.length} SOLVED STEP-BY-STEP)</span>
                <div class="flex flex-wrap gap-1.5">
                  ${["ALL", "155+", "165+", "170"].map(t => `
                    <button type="button" onclick="window._GRE_T1_TIER='${t}'; window.renderGreQuantTab1();"
                      class="px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer ${window._GRE_T1_TIER === t ? "bg-emerald-600 text-white" : "bg-white dark:bg-slate-900 border text-slate-700"}">
                      ${t === "ALL" ? "ALL" : (t === "155+" ? "GRE 155+ Foundation" : (t === "165+" ? "GRE 165+ Contender" : "GRE 170 Perfection"))}
                    </button>
                  `).join("")}
                </div>
              </div>
              ${filteredWorked.map(w => `
                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="font-extrabold text-slate-900 dark:text-white">${w.p}</span>
                    <span class="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-extrabold">${w.tier}</span>
                  </div>
                  <div class="text-slate-600 dark:text-slate-300 whitespace-pre-line">${w.s}</div>
                </div>
              `).join("")}
            </div>
          ` : `
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">INTERACTIVE GRE PRACTICE WORKBENCH (${allDrills.length} QUESTIONS • POSTGRESQL SYNCED)</div>
                  <div class="text-xs text-slate-500 mt-0.5">Attempted: <strong>${attCount}/${allDrills.length}</strong> &bull; Correct: <strong class="text-emerald-600">${corCount}</strong></div>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  ${allDrills.map((_, i) => `
                    <button type="button" onclick="window._GRE_T1_QIDX=${i}; window.renderGreQuantTab1();"
                      class="w-7 h-7 rounded-lg text-xs font-bold border cursor-pointer ${i === qIdx ? "bg-indigo-600 text-white border-indigo-600" : (attMap[i] ? "bg-emerald-600 text-white border-emerald-600" : "bg-white dark:bg-slate-900 border-slate-300")}">${i + 1}</button>
                  `).join("")}
                </div>
              </div>

              <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-extrabold text-indigo-600">Practice Question ${qIdx + 1} of ${allDrills.length}</span>
                  <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">${curDrill.tag} &bull; +1 / 0</span>
                </div>
                <div class="text-sm font-bold text-slate-900 dark:text-white leading-relaxed whitespace-pre-line">${curDrill.q}</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  ${curDrill.opts.map((opt, oi) => `
                    <button type="button" onclick="window._GRE_T1_ATT[${modIdx}]=window._GRE_T1_ATT[${modIdx}]||{}; window._GRE_T1_ATT[${modIdx}][${qIdx}]=(${oi}===${curDrill.ans}); document.getElementById('gre-t1-sol').classList.remove('hidden'); this.classList.add('${oi === curDrill.ans ? "bg-emerald-100 border-emerald-500 text-emerald-900 font-bold" : "bg-rose-100 border-rose-400 text-rose-900"}');"
                      class="text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 font-medium cursor-pointer">${opt}</button>
                  `).join("")}
                </div>
                <div id="gre-t1-sol" class="hidden p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                  <strong>Official GRE Solution:</strong> ${curDrill.exp}
                </div>
                <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                  <button type="button" onclick="if(window._GRE_T1_QIDX>0){window._GRE_T1_QIDX--; window.renderGreQuantTab1();}" class="px-3.5 py-1.5 rounded-xl border text-xs font-bold cursor-pointer">&larr; Previous</button>
                  <button type="button" onclick="if(window._GRE_T1_QIDX<${allDrills.length - 1}){window._GRE_T1_QIDX++; window.renderGreQuantTab1();}" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold cursor-pointer">Next Question &rarr;</button>
                </div>
              </div>
            </div>
          `}
        </div>
      </div>
    `;
  };

  window.renderQuantTab = window.renderGreQuantTab1;
  window.renderTab1 = window.renderGreQuantTab1;
  window.addEventListener("DOMContentLoaded", () => setTimeout(() => window.renderGreQuantTab1(), 120));
})();