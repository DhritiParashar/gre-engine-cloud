// ==============================================================================
// GOALisB GRE GENERAL (130-170 QUANT SCALE) — 12x12 MASTER STUDY & DRILL ENGINE
// - 5 Modules x 12 Graded GRE Worked Examples = 60 Step-by-Step Walkthroughs
// - 5 Modules x 12 Interactive GRE Practice Drills = 60 Drills (+1 / 0 Scoring)
// - Eliminates legacy CAT 95%ile / 99.5%ile badges, (+4/-1) labels & 'undefined'
// ==============================================================================
(function () {
  const GRE_12X12_MODULES = [
    {
      id: "gre_q1",
      kicker: "ETS QUANTITATIVE COMPARISON • PILLAR 1 OF 5",
      title: "Quantitative Comparison (QC): Boundary Testing & Algebraic Cancellation",
      sub: "High Yield • 10–11 Qs across 2 Adaptive Sections (130–170 Scale)",
      weight: "10–11 Qs / 27 (~38% of Quant)",
      pace: "1.25 mins / QC Question",
      scoring: "+1 / 0 (Zero Guessing Penalty)",
      strategy: "FROZEN Boundary Plug-In",
      overview: "Quantitative Comparison (QC) accounts for nearly 40% of all GRE Quantitative Reasoning questions and is the single fastest lever for reaching a 168–170 Quant score. Rather than solving for a single numerical value, you evaluate the invariant order relationship between Quantity A and Quantity B across the entire permissible domain of the given constraints: Choice A (Quantity A is always greater), Choice B (Quantity B is always greater), Choice C (the two quantities are always equal), or Choice D (the relationship cannot be determined from the information given). High-scoring test-takers avoid brute-force arithmetic and instead simplify both columns symmetrically—canceling identical additive terms and factoring out strictly positive expressions—before testing extreme boundary cases.",
      bridge: "Treat Quantity A versus Quantity B like an inequality with an unknown comparator (?): you may add or subtract identical expressions from both quantities freely, and you may multiply or divide both quantities ONLY by an expression guaranteed to be strictly positive. Whenever a variable lacks explicit sign, integer, or non-zero restrictions, immediately deploy the FROZEN boundary checklist (Fractions, Roots, One, Zero, Extremes, Negatives)—a single flip between A > B and B > A locks Choice D in under 30 seconds.",
      rules: [
        { name: "Law 1: The FROZEN Boundary Checklist", desc: "Whenever variables lack sign or integer restrictions, test Fractions (1/2, -1/2), Roots (sqrt(2)), Zero (0), One (1, -1), Extremes (100, -100), and Negatives (-2). One single flip between A > B and B > A immediately proves Choice D." },
        { name: "Law 2: Strictly Positive Scaling Invariance", desc: "Never multiply or divide both quantities by a variable expression x unless x > 0 is guaranteed by the stem; if x can be negative (flips inequality) or zero (undefined division), Choice D is almost always triggered." },
        { name: "Law 3: Difference & Ratio Comparison Transform", desc: "To compare complicated algebraic polynomials or exponents, compute (Quantity A − Quantity B) and factor completely to inspect sign, or for strictly positive quantities compare (Quantity A / Quantity B) against 1." },
        { name: "Law 4: Constant-vs-Constant Choice D Elimination", desc: "If both Quantity A and Quantity B contain zero variables (pure numerical expressions or fixed geometric ratios), Choice D is 100% impossible—a deterministic relationship always exists." }
      ],
      worked: [
        { tier: "GRE 155+ Foundation", p: "1. Given x > 0, compare Quantity A: (x + 2)^2 vs. Quantity B: x^2 + 4.", s: "1. Expand Quantity A: (x + 2)^2 = x^2 + 4x + 4.\n2. Subtract identical terms (x^2 + 4) from both quantities -> Compare 4x vs. 0.\n3. Since x > 0 is given, 4x > 0 is guaranteed => Quantity A is greater (Choice A)." },
        { tier: "GRE 155+ Foundation", p: "2. Given 3a + 2b = 18, compare Quantity A: 6a + 4b vs. Quantity B: 36.", s: "1. Factor Quantity A: 6a + 4b = 2(3a + 2b).\n2. Substitute 3a + 2b = 18 -> Quantity A = 2(18) = 36.\n3. Both quantities equal 36 for all valid (a, b) => The two quantities are equal (Choice C)." },
        { tier: "GRE 155+ Foundation", p: "3. Compare Quantity A: (5^12 − 5^11) / 4 vs. Quantity B: 5^11.", s: "1. Factor out 5^11 in Quantity A: 5^11 * (5 − 1) / 4 = 5^11 * 4 / 4 = 5^11.\n2. Quantity A = 5^11 and Quantity B = 5^11 => Equal (Choice C)." },
        { tier: "GRE 155+ Foundation", p: "4. Given k < −3, compare Quantity A: k^2 + 2k vs. Quantity B: k^2 − 2k.", s: "1. Subtract k^2 from both quantities -> Compare 2k vs. −2k.\n2. Since k < −3 < 0, 2k is negative while −2k is positive => Quantity B is greater (Choice B)." },
        { tier: "GRE 165+ Contender", p: "5. Given 0 < x < 1, compare Quantity A: x^2 + x^3 vs. Quantity B: x + x^4.", s: "1. Compute Difference: Quantity B − Quantity A = (x − x^2) − (x^3 − x^4) = x(1 − x)(1 − x^2).\n2. For 0 < x < 1, x > 0, (1 − x) > 0, and (1 − x^2) > 0 => Quantity B − Quantity A > 0 => Quantity B is greater (Choice B)." },
        { tier: "GRE 165+ Contender", p: "6. Given x < y < 0, compare Quantity A: x^2 * y^3 vs. Quantity B: x^3 * y^2.", s: "1. Since x < 0 and y < 0, x^2 * y^2 > 0.\n2. Divide both quantities by x^2 * y^2 -> Compare y vs. x.\n3. Since x < y, y > x => Quantity A is greater (Choice A)." },
        { tier: "GRE 165+ Contender", p: "7. Compare Quantity A: sqrt(48) + sqrt(75) vs. Quantity B: sqrt(243).", s: "1. Simplify radicals: sqrt(48) = 4*sqrt(3); sqrt(75) = 5*sqrt(3) => Quantity A = 9*sqrt(3).\n2. Simplify Quantity B: sqrt(243) = sqrt(81 * 3) = 9*sqrt(3) => Equal (Choice C)." },
        { tier: "GRE 165+ Contender", p: "8. Given m > 1 and n > 1, compare Quantity A: (m + n) / (mn) vs. Quantity B: 2.", s: "1. Rewrite Quantity A = 1/n + 1/m.\n2. Since m > 1 and n > 1, 1/m < 1 and 1/n < 1 => 1/m + 1/n < 2 => Quantity B is greater (Choice B)." },
        { tier: "GRE 170 Perfection", p: "9. Given xy != 0, compare Quantity A: |x + y| vs. Quantity B: |x| + |y|.", s: "1. Case 1 (Same signs): x = 2, y = 3 -> |5| = 5 and 2 + 3 = 5 (Equal).\n2. Case 2 (Opposite signs): x = 2, y = −3 -> |−1| = 1 < 2 + 3 = 5 (B is greater).\n3. Different outcomes => Cannot be determined (Choice D)." },
        { tier: "GRE 170 Perfection", p: "10. n is an integer > 1. Compare Quantity A: (n + 1)/n vs. Quantity B: (n + 2)/(n + 1).", s: "1. Rewrite: Quantity A = 1 + 1/n; Quantity B = 1 + 1/(n + 1).\n2. Subtract 1 -> Compare 1/n vs. 1/(n + 1). Since n > 1, 1/n > 1/(n + 1) => Quantity A is greater (Choice A)." },
        { tier: "GRE 170 Perfection", p: "11. x and y are integers with x^2 + y^2 = 25 and x > y. Compare Quantity A: x + y vs. Quantity B: 5.", s: "1. Test (4, 3): 16 + 9 = 25 and 4 > 3 => x + y = 7 (> 5, A is greater).\n2. Test (3, −4): 9 + 16 = 25 and 3 > −4 => x + y = −1 (< 5, B is greater).\n3. Relationship cannot be determined (Choice D)." },
        { tier: "GRE 170 Perfection", p: "12. Given a > b > 0, compare Quantity A: (a^2 − b^2) / (a − b) vs. Quantity B: a + b.", s: "1. Since a > b, a − b > 0, so we may divide cleanly: (a^2 − b^2)/(a − b) = (a − b)(a + b)/(a − b) = a + b.\n2. Both quantities equal a + b => Equal (Choice C)." }
      ],
      drills: [
        { tag: "GRE 155+ Foundation • QC", q: "Given x > 0:\nQuantity A: (x + 2)^2 − 4\nQuantity B: x^2 + 4x", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 2, exp: "(x + 2)^2 − 4 = x^2 + 4x + 4 − 4 = x^2 + 4x = Quantity B (Choice C)." },
        { tag: "GRE 155+ Foundation • QC", q: "Given 2p + 5q = 20:\nQuantity A: 4p + 10q − 5\nQuantity B: 35", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 2, exp: "4p + 10q − 5 = 2(2p + 5q) − 5 = 2(20) − 5 = 35 = Quantity B (Choice C)." },
        { tag: "GRE 155+ Foundation • QC", q: "Compare:\nQuantity A: (3^10 − 3^9) / 2\nQuantity B: 3^9", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 2, exp: "(3^10 − 3^9)/2 = 3^9(3 − 1)/2 = 3^9 = Quantity B (Choice C)." },
        { tag: "GRE 155+ Foundation • QC", q: "Given t < −2:\nQuantity A: t^3\nQuantity B: t^2", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 1, exp: "For t < −2, t^3 < 0 while t^2 > 0 => Quantity B is always greater (Choice B)." },
        { tag: "GRE 165+ Contender • QC", q: "Given 0 < x < 1 and y > 1:\nQuantity A: x^2 * y\nQuantity B: x * y^2", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 1, exp: "Divide both by xy > 0: Quantity A = x (< 1) vs. Quantity B = y (> 1) => Choice B." },
        { tag: "GRE 165+ Contender • QC", q: "Compare:\nQuantity A: sqrt(32) + sqrt(50)\nQuantity B: sqrt(162)", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 2, exp: "4*sqrt(2) + 5*sqrt(2) = 9*sqrt(2) = sqrt(81 * 2) = sqrt(162) (Choice C)." },
        { tag: "GRE 165+ Contender • QC", q: "Given x^2 < 16 and y^2 < 25 (x, y real):\nQuantity A: x + y\nQuantity B: 8", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 3, exp: "x = 3.9, y = 4.9 -> 8.8 > 8 (A); x = 0, y = 0 -> 0 < 8 (B) => Choice D." },
        { tag: "GRE 165+ Contender • QC", q: "Given a < b < 0:\nQuantity A: a / b\nQuantity B: b / a", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 0, exp: "Let a = −4, b = −2: a/b = 2 > b/a = 0.5. Since |a| > |b| > 0 and both negative, a/b > 1 > b/a (Choice A)." },
        { tag: "GRE 170 Perfection • QC", q: "n is a positive integer.\nQuantity A: Remainder when 7^(4n + 2) is divided by 5\nQuantity B: 4", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 2, exp: "7^(4n+2) ≡ 2^(4n+2) ≡ 2^2 = 4 (mod 5) => Equal (Choice C)." },
        { tag: "GRE 170 Perfection • QC", q: "Given k != 0:\nQuantity A: (k + 1/k)^2\nQuantity B: k^2 + 1/k^2 + 2", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 2, exp: "(k + 1/k)^2 = k^2 + 2(k)(1/k) + 1/k^2 = k^2 + 1/k^2 + 2 (Choice C)." },
        { tag: "GRE 170 Perfection • QC", q: "Given x > 0 and y > 0:\nQuantity A: sqrt(x + y)\nQuantity B: sqrt(x) + sqrt(y)", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 1, exp: "Square both positive quantities: (Quantity A)^2 = x + y < x + y + 2*sqrt(xy) = (Quantity B)^2 => Choice B." },
        { tag: "GRE 170 Perfection • QC", q: "x is a real number.\nQuantity A: (x − 3)^2\nQuantity B: (3 − x)^2", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 2, exp: "(3 − x)^2 = (−(x − 3))^2 = (x − 3)^2 for every real number x (Choice C)." }
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
      overview: "GRE Algebra blends 5-choice Problem Solving (A–E) with exact Numeric Entry input boxes across nested exponential equations, quadratic vertex optimization, compound absolute-value inequalities, and recursive sequence definitions. In Stage-2 Hard Quant sections, ETS frequently disguises linear or quadratic systems inside exponential bases (such as 4^x, 8^y, 27^(x−2)) or asks for integer solution counts over symmetric intervals. Mastering prime-base decomposition and vertex form eliminates multi-step algebraic expansion.",
      bridge: "Whenever identical exponential terms appear in sums (for example, 3^10 + 3^10 + 3^10), immediately factor out the smallest power (3^10 * (1 + 1 + 1) = 3^11) rather than estimating large numbers. For quadratic expressions ax^2 + bx + c, completing the square into a(x − h)^2 + k reveals both the axis of symmetry x = h and the global extremum k in one line.",
      rules: [
        { name: "Law 1: Prime-Base Exponential Decomposition", desc: "Convert all composite bases (4, 8, 9, 16, 27, 32) into prime powers (2^k, 3^k) before equating exponents or factoring out common terms." },
        { name: "Law 2: Parabola Vertex & Discriminant Bounds", desc: "f(x) = a(x − h)^2 + k achieves its global minimum (if a > 0) or maximum (if a < 0) at x = h with extremum k = c − b^2/(4a)." },
        { name: "Law 3: Symmetric Absolute-Value Intervals", desc: "|ax − b| <= c (for c >= 0) expands directly to −c <= ax − b <= c, while |ax − b| >= c splits into two disjoint rays: ax − b <= −c or ax − b >= c." },
        { name: "Law 4: Vieta's Root Sum & Product Identities", desc: "For ax^2 + bx + c = 0, sum of roots r1 + r2 = −b/a and product r1 * r2 = c/a—allowing direct evaluation of r1^2 + r2^2 = (r1 + r2)^2 − 2r1r2." }
      ],
      worked: [
        { tier: "GRE 155+ Foundation", p: "1. Solve for x: 3^(2x − 1) = 27^(x − 2).", s: "1. Express 27 as 3^3: 27^(x − 2) = (3^3)^(x − 2) = 3^(3x − 6).\n2. Equate exponents: 2x − 1 = 3x − 6 => x = 5." },
        { tier: "GRE 155+ Foundation", p: "2. If 4x − 3y = 19 and 2x + y = 17, find x + y.", s: "1. Multiply second equation by 3: 6x + 3y = 51.\n2. Add to first: 10x = 70 => x = 7, y = 3 => x + y = 10." },
        { tier: "GRE 155+ Foundation", p: "3. If f(x) = 3x^2 − 2x + 5, find f(−2) − f(2).", s: "1. f(−2) = 3(4) − 2(−2) + 5 = 21; f(2) = 3(4) − 2(2) + 5 = 13.\n2. f(−2) − f(2) = 21 − 13 = 8." },
        { tier: "GRE 155+ Foundation", p: "4. Solve for x: (x − 4)/3 + (x + 2)/6 = 5.", s: "1. Multiply through by 6: 2(x − 4) + (x + 2) = 30.\n2. 3x − 6 = 30 => 3x = 36 => x = 12." },
        { tier: "GRE 165+ Contender", p: "5. Find the minimum value of f(x) = x^2 − 6x + 14 for all real x.", s: "1. Complete the square: f(x) = (x − 3)^2 + 5.\n2. Since (x − 3)^2 >= 0, minimum value is 5 at x = 3." },
        { tier: "GRE 165+ Contender", p: "6. Simplify (2^14 + 2^14 + 2^14 + 2^14) / 4^6.", s: "1. Numerator = 4 * 2^14 = 2^2 * 2^14 = 2^16.\n2. Denominator = (2^2)^6 = 2^12 => 2^16 / 2^12 = 2^4 = 16." },
        { tier: "GRE 165+ Contender", p: "7. If x + 1/x = 5, find the value of x^2 + 1/x^2.", s: "1. Square both sides: (x + 1/x)^2 = 25 => x^2 + 2 + 1/x^2 = 25.\n2. Subtract 2 => x^2 + 1/x^2 = 23." },
        { tier: "GRE 165+ Contender", p: "8. Sequence a_n = 2*a_(n−1) − 3 with a_1 = 5. Find a_4.", s: "1. a_2 = 2(5) − 3 = 7; a_3 = 2(7) − 3 = 11.\n2. a_4 = 2(11) − 3 = 19." },
        { tier: "GRE 170 Perfection", p: "9. How many integer values of x satisfy |2x − 5| <= 9?", s: "1. −9 <= 2x − 5 <= 9 => −4 <= 2x <= 14 => −2 <= x <= 7.\n2. Integer count = 7 − (−2) + 1 = 10." },
        { tier: "GRE 170 Perfection", p: "10. If r and s are roots of 2x^2 − 10x + 7 = 0, find r^2 + s^2.", s: "1. Vieta's formulas: r + s = 5, rs = 3.5.\n2. r^2 + s^2 = (r + s)^2 − 2rs = 25 − 7 = 18." },
        { tier: "GRE 170 Perfection", p: "11. If 2^x * 3^y = 432 where x, y are positive integers, find x + y.", s: "1. Prime factorize 432 = 16 * 27 = 2^4 * 3^3.\n2. x = 4, y = 3 => x + y = 7." },
        { tier: "GRE 170 Perfection", p: "12. Find the maximum value of g(x) = −2x^2 + 12x − 11.", s: "1. Factor −2: g(x) = −2(x^2 − 6x + 9) + 18 − 11 = −2(x − 3)^2 + 7.\n2. Maximum value is 7 at x = 3." }
      ],
      drills: [
        { tag: "GRE 155+ Foundation • Exponents", q: "If 3^(2x − 1) = 27^(x − 2), what is the value of x?", opts: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"], ans: 2, exp: "2x − 1 = 3(x − 2) => x = 5." },
        { tag: "GRE 155+ Foundation • Linear Systems", q: "If 4x − 3y = 19 and 2x + y = 17, what is x + y?", opts: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"], ans: 3, exp: "x = 7, y = 3 => x + y = 10." },
        { tag: "GRE 155+ Foundation • Functions", q: "If g(x) = x^2 − 4x + 7, what is g(−1) + g(3)?", opts: ["A. 12", "B. 14", "C. 16", "D. 18", "E. 20"], ans: 2, exp: "g(−1) = 1 + 4 + 7 = 12; g(3) = 9 − 12 + 7 = 4 => 12 + 4 = 16." },
        { tag: "GRE 155+ Foundation • Equations", q: "If (2x − 1)/5 = (x + 3)/4, what is x?", opts: ["A. 5", "B. 6", "C. 19/3", "D. 7", "E. 8"], ans: 2, exp: "8x − 4 = 5x + 15 => 3x = 19 => x = 19/3." },
        { tag: "GRE 165+ Contender • Quadratics", q: "For all real x, f(x) = x^2 − 6x + 14. What is the minimum value of f(x)?", opts: ["A. 2", "B. 3", "C. 5", "D. 9", "E. 14"], ans: 2, exp: "f(x) = (x − 3)^2 + 5 >= 5." },
        { tag: "GRE 165+ Contender • Exponents", q: "What is the value of (2^14 + 2^14 + 2^14 + 2^14) / 4^6 ?", opts: ["A. 4", "B. 8", "C. 16", "D. 32", "E. 64"], ans: 2, exp: "2^16 / 2^12 = 2^4 = 16." },
        { tag: "GRE 165+ Contender • Algebraic Identities", q: "If x + 1/x = 6, what is x^2 + 1/x^2 ?", opts: ["A. 32", "B. 34", "C. 36", "D. 38", "E. 40"], ans: 1, exp: "6^2 − 2 = 34." },
        { tag: "GRE 165+ Contender • Sequences", q: "A sequence is defined by a_1 = 4 and a_n = 3*a_(n−1) − 2 for n >= 2. What is a_4?", opts: ["A. 28", "B. 52", "C. 76", "D. 82", "E. 106"], ans: 3, exp: "a_2 = 10, a_3 = 28, a_4 = 3(28) − 2 = 82." },
        { tag: "GRE 170 Perfection • Inequalities", q: "How many integer values of x satisfy |2x − 5| <= 9?", opts: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"], ans: 3, exp: "−2 <= x <= 7 yields 10 integers." },
        { tag: "GRE 170 Perfection • Vieta's", q: "If r and s are roots of x^2 − 7x + 11 = 0, what is r^2 + s^2 ?", opts: ["A. 25", "B. 27", "C. 38", "D. 49", "E. 60"], ans: 1, exp: "49 − 2(11) = 27." },
        { tag: "GRE 170 Perfection • Prime Exponents", q: "If 2^a * 3^b = 648 for positive integers a and b, what is a + b?", opts: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"], ans: 1, exp: "648 = 8 * 81 = 2^3 * 3^4 => a + b = 7." },
        { tag: "GRE 170 Perfection • Optimization", q: "What is the maximum value of h(x) = −3x^2 + 18x − 20 for real x?", opts: ["A. 5", "B. 7", "C. 9", "D. 11", "E. 27"], ans: 1, exp: "h(x) = −3(x − 3)^2 + 7 => max is 7." }
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
      overview: "Stage-2 Hard GRE Quant sections lean heavily on prime factor exponents, trailing-zero powers of 5, cyclic units digits, modular remainder arithmetic, and 'at least one' combinatorics. Because GRE questions rarely permit brute-force listing when numbers reach 100! or 7^42, knowing how to extract prime exponents and apply complement probability turns 3-minute problems into 40-second wins.",
      bridge: "Every positive integer N > 1 has a unique prime factorization N = p1^a * p2^b * p3^c. From those exponents alone, you immediately know total positive divisors = (a + 1)(b + 1)(c + 1), whether N is a perfect square (all exponents even) or perfect cube (all exponents multiples of 3), and the exact power of any prime dividing N!.",
      rules: [
        { name: "Law 1: Divisor Count & Perfect Power Parity", desc: "For N = p^a * q^b * r^c, total positive factors = (a + 1)(b + 1)(c + 1). N has an odd number of divisors if and only if N is a perfect square." },
        { name: "Law 2: Modular Remainder Substitution", desc: "To find the remainder of (A * B + C)^k divided by d, replace A, B, and C with their remainders mod d first, then track the repeating cycle of powers." },
        { name: "Law 3: Complement Counting ('At Least One')", desc: "Whenever a counting or probability stem asks for 'at least one' or 'no two adjacent', compute Total Unrestricted Cases − Unwanted Complement Cases." },
        { name: "Law 4: Trailing Zeros in Factorials (Legendre's Formula)", desc: "The number of trailing zeros in n! equals floor(n/5) + floor(n/25) + floor(n/125) + ..., counting factors of 5 paired with abundant factors of 2." }
      ],
      worked: [
        { tier: "GRE 155+ Foundation", p: "1. Find the total number of positive divisors of 360.", s: "1. Prime factorize: 360 = 2^3 * 3^2 * 5^1.\n2. Divisors = (3 + 1)(2 + 1)(1 + 1) = 4 * 3 * 2 = 24." },
        { tier: "GRE 155+ Foundation", p: "2. How many trailing zeros end 65! ?", s: "1. floor(65/5) + floor(65/25) = 13 + 2 = 15 trailing zeros." },
        { tier: "GRE 155+ Foundation", p: "3. Find the GCD and LCM of 48 and 180.", s: "1. 48 = 2^4 * 3^1; 180 = 2^2 * 3^2 * 5^1.\n2. GCD = 2^2 * 3^1 = 12; LCM = 2^4 * 3^2 * 5^1 = 720." },
        { tier: "GRE 155+ Foundation", p: "4. How many 3-digit odd numbers can be formed using digits {1, 2, 3, 4, 5} without repetition?", s: "1. Units digit has 3 choices {1, 3, 5}; hundreds has 4 remaining; tens has 3 remaining.\n2. Total = 3 * 4 * 3 = 36." },
        { tier: "GRE 165+ Contender", p: "5. Find the greatest prime factor of 3^6 − 1.", s: "1. 3^6 − 1 = (3^3 − 1)(3^3 + 1) = 26 * 28 = (2 * 13) * (4 * 7).\n2. Greatest prime factor = 13." },
        { tier: "GRE 165+ Contender", p: "6. A committee of 4 is chosen from 5 economists and 4 statisticians. How many have at least 3 economists?", s: "1. (5C3 * 4C1) + (5C4 * 4C0) = (10 * 4) + (5 * 1) = 45 committees." },
        { tier: "GRE 165+ Contender", p: "7. Smallest positive integer k such that 72k is a perfect cube?", s: "1. 72 = 2^3 * 3^2. To make all exponents multiples of 3, multiply by 3^1.\n2. k = 3 (72 * 3 = 216 = 6^3)." },
        { tier: "GRE 165+ Contender", p: "8. A fair coin is tossed 4 times. Probability of getting at least one Head?", s: "1. P(at least 1 H) = 1 − P(all 4 Tails) = 1 − (1/2)^4 = 1 − 1/16 = 15/16." },
        { tier: "GRE 170 Perfection", p: "9. When n is divided by 12, remainder is 7. Find remainder when 5n is divided by 12.", s: "1. 5n ≡ 5 * 7 = 35 (mod 12).\n2. 35 = 12 * 2 + 11 => remainder = 11." },
        { tier: "GRE 170 Perfection", p: "10. What is the units digit of 7^2026 + 3^2026 ?", s: "1. Both 7^k and 3^k cycle in length 4; 2026 ≡ 2 (mod 4).\n2. 7^2 ends in 9; 3^2 ends in 9 => 9 + 9 = 18 => units digit 8." },
        { tier: "GRE 170 Perfection", p: "11. How many integers between 1 and 200 are divisible by 4 or 6?", s: "1. Multiples of 4: floor(200/4) = 50; Multiples of 6: floor(200/6) = 33.\n2. Subtract LCM(4,6)=12 overlap: floor(200/12) = 16 => 50 + 33 − 16 = 67." },
        { tier: "GRE 170 Perfection", p: "12. Find the highest power of 3 that divides 40!.", s: "1. floor(40/3) + floor(40/9) + floor(40/27) = 13 + 4 + 1 = 18 (i.e., 3^18)." }
      ],
      drills: [
        { tag: "GRE 155+ Foundation • Divisors", q: "How many positive integers are divisors of 360?", opts: ["A. 18", "B. 20", "C. 24", "D. 30", "E. 36"], ans: 2, exp: "360 = 2^3 * 3^2 * 5^1 => (4)(3)(2) = 24." },
        { tag: "GRE 155+ Foundation • Factorials", q: "How many trailing zeros are at the end of 65! ?", opts: ["A. 13", "B. 14", "C. 15", "D. 16", "E. 17"], ans: 2, exp: "13 + 2 = 15 trailing zeros." },
        { tag: "GRE 155+ Foundation • GCD/LCM", q: "What is the LCM of 36 and 150?", opts: ["A. 300", "B. 450", "C. 600", "D. 900", "E. 1800"], ans: 3, exp: "36 = 2^2 * 3^2; 150 = 2 * 3 * 5^2 => LCM = 4 * 9 * 25 = 900." },
        { tag: "GRE 155+ Foundation • Counting", q: "How many 3-digit even integers can be formed from {1, 2, 3, 4, 5} if digits cannot repeat?", opts: ["A. 18", "B. 24", "C. 30", "D. 36", "E. 48"], ans: 1, exp: "2 choices for units {2,4} * 4 * 3 = 24." },
        { tag: "GRE 165+ Contender • Factoring", q: "What is the greatest prime factor of 3^6 − 1?", opts: ["A. 5", "B. 7", "C. 11", "D. 13", "E. 19"], ans: 3, exp: "26 * 28 = 2^3 * 7 * 13 => 13." },
        { tag: "GRE 165+ Contender • Combinatorics", q: "A committee of 4 is chosen from 5 economists and 4 statisticians. How many have at least 3 economists?", opts: ["A. 40", "B. 45", "C. 50", "D. 65", "E. 80"], ans: 1, exp: "40 + 5 = 45." },
        { tag: "GRE 165+ Contender • Perfect Cubes", q: "What is the least positive integer k such that 72k is a perfect cube?", opts: ["A. 2", "B. 3", "C. 4", "D. 6", "E. 9"], ans: 1, exp: "72 * 3 = 216 = 6^3." },
        { tag: "GRE 165+ Contender • Probability", q: "A fair coin is tossed 5 times. What is the probability of obtaining at least one tail?", opts: ["A. 15/16", "B. 31/32", "C. 1/2", "D. 5/32", "E. 27/32"], ans: 1, exp: "1 − (1/2)^5 = 31/32." },
        { tag: "GRE 170 Perfection • Remainders", q: "When positive integer n is divided by 12, the remainder is 7. What is the remainder when 5n is divided by 12?", opts: ["A. 1", "B. 3", "C. 5", "D. 7", "E. 11"], ans: 4, exp: "35 mod 12 = 11." },
        { tag: "GRE 170 Perfection • Units Digits", q: "What is the units digit of 7^2026 + 3^2026 ?", opts: ["A. 0", "B. 2", "C. 4", "D. 6", "E. 8"], ans: 4, exp: "9 + 9 = 18 => 8." },
        { tag: "GRE 170 Perfection • Inclusion-Exclusion", q: "How many integers from 1 to 200 inclusive are divisible by either 4 or 6?", opts: ["A. 50", "B. 66", "C. 67", "D. 83", "E. 99"], ans: 2, exp: "50 + 33 − 16 = 67." },
        { tag: "GRE 170 Perfection • Legendre's", q: "What is the greatest integer k such that 3^k is a factor of 40! ?", opts: ["A. 13", "B. 16", "C. 17", "D. 18", "E. 19"], ans: 3, exp: "13 + 4 + 1 = 18." }
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
      overview: "Unlike GMAT Focus, which removed Euclidean Geometry, the GRE General Test actively tests triangles, parallel-line angle chasing, inscribed/central circle theorems, regular polygons, coordinate slopes, and 3D solids (cylinders, rectangular prisms, spheres). A classic ETS Quantitative Comparison trap presents an unlabeled triangle or chord diagram without stating 'drawn to scale'—requiring you to flex angles between acute and obtuse extremes.",
      bridge: "Never trust visual proportions on a GRE figure unless 'drawn to scale' is explicitly printed. Instead, lock in your invariant ratios: 30°–60°–90° triangles (x : x*sqrt(3) : 2x), 45°–45°–90° triangles (x : x : x*sqrt(2)), Pythagorean triples (3–4–5, 5–12–13, 8–15–17), and dimensional scaling (linear k -> area k^2 -> volume k^3).",
      rules: [
        { name: "Law 1: Triangle Inequality & Obtuse/Acute Hinge", desc: "For sides a <= b <= c: |a − b| < c < a + b. Furthermore, if c^2 > a^2 + b^2 the angle opposite c is obtuse (> 90°); if c^2 < a^2 + b^2 it is acute (< 90°)." },
        { name: "Law 2: Dimensional Scaling (k -> k^2 -> k^3)", desc: "Scaling all linear dimensions of a 2D or 3D figure by factor k multiplies Perimeter/Circumference by k, Surface Area by k^2, and Volume by k^3." },
        { name: "Law 3: Inscribed Angle & Thales' Semicircle Theorem", desc: "An inscribed angle subtending an arc measures half the central angle; any triangle inscribed in a circle with the diameter as one side is a 90° right triangle." },
        { name: "Law 4: Polygon Interior Angle Sum", desc: "An n-sided polygon has interior angle sum (n − 2) * 180°, and every exterior angle sum equals 360° regardless of n." }
      ],
      worked: [
        { tier: "GRE 155+ Foundation", p: "1. A circle is inscribed inside a square of side 10. Find the shaded area outside the circle.", s: "1. Square area = 100; Circle radius = 5 => Circle area = 25*pi.\n2. Shaded area = 100 − 25*pi." },
        { tier: "GRE 155+ Foundation", p: "2. Find the area of an equilateral triangle with side length 8.", s: "1. Height = 4*sqrt(3) => Area = (1/2) * 8 * 4*sqrt(3) = 16*sqrt(3)." },
        { tier: "GRE 155+ Foundation", p: "3. Each interior angle of a regular polygon measures 150°. How many sides does it have?", s: "1. Exterior angle = 180° − 150° = 30°.\n2. Sides n = 360° / 30° = 12." },
        { tier: "GRE 155+ Foundation", p: "4. Find the distance between points (−3, 2) and (9, 7) in the xy-plane.", s: "1. dx = 9 − (−3) = 12; dy = 7 − 2 = 5.\n2. By 5–12–13 right triangle, distance = 13." },
        { tier: "GRE 165+ Contender", p: "5. Cylinder radius rises 20% and height drops 25%. Percent change in volume?", s: "1. V_new / V_old = (1.20)^2 * (0.75) = 1.44 * 0.75 = 1.08 => +8%." },
        { tier: "GRE 165+ Contender", p: "6. A chord of length 16 is at perpendicular distance 6 from a circle's center. Find circumference.", s: "1. Half-chord = 8, distance = 6 => radius r = sqrt(6^2 + 8^2) = 10.\n2. Circumference = 20*pi." },
        { tier: "GRE 165+ Contender", p: "7. A 60° sector of a circle has area 24*pi. Find its arc length.", s: "1. (60/360) * pi * r^2 = 24*pi => r^2 = 144 => r = 12.\n2. Arc length = (1/6) * 2 * pi * 12 = 4*pi." },
        { tier: "GRE 165+ Contender", p: "8. A rectangular box has dimensions 3, 4, and 12. Find its longest space diagonal.", s: "1. Space diagonal d = sqrt(3^2 + 4^2 + 12^2) = sqrt(25 + 144) = sqrt(169) = 13." },
        { tier: "GRE 170 Perfection", p: "9. Two triangle sides are 7 and 13. Which value CANNOT be the perimeter?", s: "1. 6 < s < 20 => 26 < Perimeter < 40 => Perimeter cannot be 40." },
        { tier: "GRE 170 Perfection", p: "10. Compare Quantity A: Area of triangle with sides 6, 8 and angle 80° vs. Quantity B: 24.", s: "1. Area = (1/2)*6*8*sin(80°) = 24*sin(80°) < 24 => Quantity B is greater (Choice B)." },
        { tier: "GRE 170 Perfection", p: "11. A sphere is inscribed inside a cube of edge 6. Ratio of sphere volume to cube volume?", s: "1. Cube V = 216; Sphere r = 3 => V = (4/3)*pi*27 = 36*pi.\n2. Ratio = 36*pi / 216 = pi / 6." },
        { tier: "GRE 170 Perfection", p: "12. If a circle's circumference increases by 50%, by what percent does its area increase?", s: "1. Linear scale k = 1.5 => Area scale k^2 = 2.25 => +125% increase." }
      ],
      drills: [
        { tag: "GRE 155+ Foundation • Circles", q: "A circle is inscribed in a square of side length 10. What is the area inside the square but outside the circle?", opts: ["A. 100 − 10*pi", "B. 100 − 25*pi", "C. 100 − 50*pi", "D. 40 − 25*pi", "E. 25*pi − 50"], ans: 1, exp: "100 − 25*pi." },
        { tag: "GRE 155+ Foundation • Triangles", q: "What is the area of an equilateral triangle with side length 10?", opts: ["A. 25", "B. 25*sqrt(3)", "C. 50", "D. 50*sqrt(3)", "E. 100*sqrt(3)"], ans: 1, exp: "(sqrt(3)/4) * 100 = 25*sqrt(3)." },
        { tag: "GRE 155+ Foundation • Polygons", q: "Each interior angle of a regular polygon measures 144°. How many sides does the polygon have?", opts: ["A. 8", "B. 9", "C. 10", "D. 12", "E. 15"], ans: 2, exp: "Exterior = 36° => 360 / 36 = 10 sides." },
        { tag: "GRE 155+ Foundation • Coordinate Geo", q: "What is the distance between (−2, −1) and (6, 14)?", opts: ["A. 15", "B. 16", "C. 17", "D. 18", "E. 23"], ans: 2, exp: "sqrt(8^2 + 15^2) = 17." },
        { tag: "GRE 165+ Contender • 3D Solids", q: "If a cylinder's radius increases by 20% and its height decreases by 25%, by what percent does its volume change?", opts: ["A. −10%", "B. −5%", "C. 0%", "D. +8%", "E. +15%"], ans: 3, exp: "1.44 * 0.75 = 1.08 => +8%." },
        { tag: "GRE 165+ Contender • Chords", q: "A chord of length 24 is at distance 5 from the center of a circle. What is the circle's radius?", opts: ["A. 11", "B. 12", "C. 13", "D. 15", "E. 17"], ans: 2, exp: "sqrt(5^2 + 12^2) = 13." },
        { tag: "GRE 165+ Contender • Sectors", q: "A 45° sector of a circle has area 8*pi. What is the radius of the circle?", opts: ["A. 4", "B. 6", "C. 8", "D. 12", "E. 16"], ans: 2, exp: "(1/8)*pi*r^2 = 8*pi => r^2 = 64 => r = 8." },
        { tag: "GRE 165+ Contender • 3D Diagonals", q: "What is the length of the longest diagonal of a rectangular box with edges 2, 6, and 9?", opts: ["A. 10", "B. 11", "C. 12", "D. 13", "E. 17"], ans: 1, exp: "sqrt(4 + 36 + 81) = sqrt(121) = 11." },
        { tag: "GRE 170 Perfection • Triangles", q: "Two sides of a triangle have lengths 7 and 13. Which CANNOT be the perimeter of the triangle?", opts: ["A. 27", "B. 30", "C. 35", "D. 39", "E. 40"], ans: 4, exp: "26 < P < 40 => 40 is impossible." },
        { tag: "GRE 170 Perfection • Trigonometry", q: "A triangle has two sides of lengths 10 and 12. What is the maximum possible area of the triangle?", opts: ["A. 48", "B. 50", "C. 60", "D. 72", "E. 120"], ans: 2, exp: "Max area occurs at 90°: (1/2)*10*12 = 60." },
        { tag: "GRE 170 Perfection • Inscribed Sphere", q: "A sphere of radius 3 is inscribed in a cube. What is the volume of the cube outside the sphere?", opts: ["A. 216 − 36*pi", "B. 216 − 27*pi", "C. 108 − 36*pi", "D. 64 − 36*pi", "E. 216 − 108*pi"], ans: 0, exp: "Cube side = 6 => 216 − (4/3)*pi*27 = 216 − 36*pi." },
        { tag: "GRE 170 Perfection • Scaling", q: "If the surface area of a cube increases by 44%, by what percent does its volume increase?", opts: ["A. 44.0%", "B. 64.0%", "C. 72.8%", "D. 80.0%", "E. 96.0%"], ans: 2, exp: "k^2 = 1.44 => k = 1.2 => k^3 = 1.728 => +72.8%." }
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
      overview: "GRE Data Analysis evaluates statistical reasoning rather than tedious hand computation: standard deviation dispersion, Normal Distribution empirical intervals (68% within 1 SD, 95% within 2 SDs), Box-and-Whisker quartiles (Minimum, Q1, Median Q2, Q3, Maximum, IQR = Q3 − Q1), percentile rankings, and multi-chart Data Interpretation sets. Notice that ETS frequently pairs normal distribution z-scores with Quantitative Comparison items where exact SD multipliers unlock the answer immediately.",
      bridge: "Adding a constant c to every data point shifts location measures (Mean, Median, Q1, Q3) by +c while leaving spread measures (Range, IQR, Standard Deviation) completely unchanged. Conversely, multiplying every data point by a positive constant k scales both location and spread measures by factor k.",
      rules: [
        { name: "Law 1: Empirical Normal Curve Split (34%–13.5%–2.5%)", desc: "In any normal distribution: Mean to +1 SD holds 34%; +1 SD to +2 SD holds 13.5% (~14%); above +2 SD holds 2.5% (~2%). By symmetry, the same percentages apply below the Mean." },
        { name: "Law 2: Location vs. Spread Transformation Rules", desc: "Adding constant c shifts Mean/Median by +c with zero effect on SD or IQR; multiplying by k > 0 multiplies Mean, Median, SD, and IQR all by k." },
        { name: "Law 3: Weighted Average Lever Principle", desc: "When combining groups of sizes n1 and n2 with means m1 and m2, the combined mean lies closer to the larger group in inverse ratio n2 : n1." },
        { name: "Law 4: Quartiles & Interquartile Range (IQR)", desc: "Q1 is the median of the lower half, Q3 is the median of the upper half, and IQR = Q3 − Q1 measures the middle 50% spread immune to extreme outliers." }
      ],
      worked: [
        { tier: "GRE 155+ Foundation", p: "1. Normal distribution with mean 60 and SD 8. Percent of values between 52 and 76?", s: "1. 52 is −1 SD (34% below mean); 76 is +2 SD (34% + 13.5% = 47.5% above mean).\n2. Total = 34% + 47.5% = 81.5%." },
        { tier: "GRE 155+ Foundation", p: "2. A class of 20 students averages 78, and 30 students average 88. Find combined average.", s: "1. Group ratio 20 : 30 = 2 : 3.\n2. Combined mean = (2*78 + 3*88) / 5 = 420 / 5 = 84." },
        { tier: "GRE 155+ Foundation", p: "3. Find the median and range of {19, 7, 24, 12, 31, 15}.", s: "1. Sort: {7, 12, 15, 19, 24, 31}.\n2. Median = (15 + 19)/2 = 17; Range = 31 − 7 = 24." },
        { tier: "GRE 155+ Foundation", p: "4. If the average of 6 numbers is 18 and one number 28 is removed, find the new average.", s: "1. Original sum = 6 * 18 = 108; New sum = 108 − 28 = 80.\n2. New average = 80 / 5 = 16." },
        { tier: "GRE 165+ Contender", p: "5. Compare SD of Set A = {10, 12, 14, 16, 18} vs. Set B = {110, 112, 114, 116, 118}.", s: "1. Adding 100 shifts every point identically without altering spread.\n2. Standard deviations are equal (Choice C)." },
        { tier: "GRE 165+ Contender", p: "6. Find the Interquartile Range (IQR) of {42, 48, 51, 55, 60, 64, 72, 85}.", s: "1. Q1 = (48 + 51)/2 = 49.5; Q3 = (64 + 72)/2 = 68.0.\n2. IQR = 68.0 − 49.5 = 18.5." },
        { tier: "GRE 165+ Contender", p: "7. Every value in dataset D (mean 40, SD 5) is multiplied by 3 and increased by 10. New mean & SD?", s: "1. New mean = 3(40) + 10 = 130.\n2. New SD = 3(5) = 15 (adding 10 does not affect SD)." },
        { tier: "GRE 165+ Contender", p: "8. In a 400-student exam, Priya is at the 88th percentile. How many students scored lower than Priya?", s: "1. 88% of 400 = 0.88 * 400 = 352 students." },
        { tier: "GRE 170 Perfection", p: "9. In a normal distribution, 16% of scores exceed 78 and 2.5% exceed 86. Find the arithmetic mean.", s: "1. 78 = Mean + 1 SD; 86 = Mean + 2 SD => SD = 8.\n2. Mean = 78 − 8 = 70." },
        { tier: "GRE 170 Perfection", p: "10. Set X has 10 numbers with mean 50 and SD 6. If 50 is added twice, how does SD change?", s: "1. Adding values equal to the mean adds 0 to sum of squared deviations while increasing n from 10 to 12.\n2. Standard deviation strictly decreases." },
        { tier: "GRE 170 Perfection", p: "11. Five distinct positive integers have median 12 and mean 15. Greatest possible value of the largest integer?", s: "1. Sum = 75. Minimize the other four: {1, 2, 12, 13}.\n2. Largest = 75 − (1 + 2 + 12 + 13) = 47." },
        { tier: "GRE 170 Perfection", p: "12. Compare SD of {1, 2, 3, 4, 5} vs. SD of {2, 4, 6, 8, 10}.", s: "1. Second set doubles every element => SD doubles (2 * sqrt(2) > sqrt(2)) => Quantity B is greater." }
      ],
      drills: [
        { tag: "GRE 155+ Foundation • Normal Dist.", q: "In a normal distribution with mean 60 and SD 8, approximately what percent of data lies between 52 and 76?", opts: ["A. 68.0%", "B. 81.5%", "C. 84.0%", "D. 95.0%", "E. 97.5%"], ans: 1, exp: "34% + 47.5% = 81.5%." },
        { tag: "GRE 155+ Foundation • Weighted Avg", q: "Group A (15 students) averages 72 and Group B (45 students) averages 84. What is the combined mean?", opts: ["A. 78", "B. 80", "C. 81", "D. 82", "E. 83"], ans: 2, exp: "(1*72 + 3*84)/4 = 324/4 = 81." },
        { tag: "GRE 155+ Foundation • Median", q: "What is the median of {28, 14, 35, 19, 42, 23}?", opts: ["A. 23", "B. 25.5", "C. 26", "D. 28", "E. 26.8"], ans: 1, exp: "Sorted: {14, 19, 23, 28, 35, 42} => (23 + 28)/2 = 25.5." },
        { tag: "GRE 155+ Foundation • Mean Shift", q: "The average of 5 numbers is 24. If a 6th number 42 is included, what is the new average?", opts: ["A. 26", "B. 27", "C. 28", "D. 30", "E. 33"], ans: 1, exp: "(120 + 42)/6 = 162/6 = 27." },
        { tag: "GRE 165+ Contender • SD Invariance", q: "Compare:\nQuantity A: Standard deviation of {15, 18, 21, 24}\nQuantity B: Standard deviation of {115, 118, 121, 124}", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 2, exp: "Shifting by +100 leaves SD unchanged (Choice C)." },
        { tag: "GRE 165+ Contender • IQR", q: "What is the interquartile range (IQR) of {10, 14, 18, 22, 26, 30, 34, 38}?", opts: ["A. 12", "B. 14", "C. 16", "D. 18", "E. 20"], ans: 2, exp: "Q1 = 16, Q3 = 32 => IQR = 16." },
        { tag: "GRE 165+ Contender • Linear Scaling", q: "Dataset M has mean 25 and SD 4. Each number is multiplied by 2 and then 5 is subtracted. What is the new SD?", opts: ["A. 3", "B. 4", "C. 8", "D. 11", "E. 13"], ans: 2, exp: "SD scales by |2| = 8; subtracting 5 has zero effect." },
        { tag: "GRE 165+ Contender • Percentiles", q: "In a distribution of 600 scores, a score of 164 is at the 85th percentile. How many scores are at or below 164?", opts: ["A. 90", "B. 450", "C. 510", "D. 540", "E. 585"], ans: 2, exp: "0.85 * 600 = 510." },
        { tag: "GRE 170 Perfection • Normal Curve", q: "In a normal distribution, 16% of values exceed 78 and 2.5% exceed 86. What is the arithmetic mean?", opts: ["A. 66", "B. 68", "C. 70", "D. 72", "E. 74"], ans: 2, exp: "SD = 86 − 78 = 8 => Mean = 70." },
        { tag: "GRE 170 Perfection • SD Dilution", q: "Set S has 8 distinct numbers with mean 30 and SD 5. If 30 is appended to Set S, the new SD is:", opts: ["A. Greater than 5", "B. Equal to 5", "C. Less than 5", "D. Equal to 0", "E. Cannot be determined"], ans: 2, exp: "Appending the mean keeps numerator fixed while increasing n from 8 to 9 => SD decreases." },
        { tag: "GRE 170 Perfection • Extremes", q: "Five distinct positive integers have median 10 and mean 14. What is the maximum possible value of the largest integer?", opts: ["A. 42", "B. 44", "C. 46", "D. 48", "E. 50"], ans: 2, exp: "70 − (1 + 2 + 10 + 11) = 46." },
        { tag: "GRE 170 Perfection • Spread Comparison", q: "Which set has the GREATEST standard deviation?", opts: ["A. {50, 50, 50, 50}", "B. {48, 49, 51, 52}", "C. {45, 50, 50, 55}", "D. {30, 50, 50, 70}", "E. {100, 101, 102, 103}"], ans: 3, exp: "{30, 50, 50, 70} has deviations ±20 from mean 50, far larger than all other sets." }
      ]
    }
  ];

  window._GRE_12_MOD = 0;
  window._GRE_12_SUB = "THEORY";
  window._GRE_12_TIER = "ALL";
  window._GRE_12_QIDX = 0;
  window._GRE_12_ATT = {};

  window.renderGreQuant12x12 = function (el) {
    const target = el || document.getElementById("main-workspace") || document.getElementById("tab-content");
    if (!target) return;

    const modIdx = Math.min(GRE_12X12_MODULES.length - 1, Math.max(0, Number(window._GRE_12_MOD || 0)));
    const m = GRE_12X12_MODULES[modIdx];
    const allDrills = m.drills; // Exact 12 GRE Practice Drills per module
    const qIdx = Math.min(allDrills.length - 1, Math.max(0, Number(window._GRE_12_QIDX || 0)));
    const curDrill = allDrills[qIdx];

    const filteredWorked = window._GRE_12_TIER === "ALL"
      ? m.worked
      : m.worked.filter(w => w.tier.includes(window._GRE_12_TIER));

    const attMap = window._GRE_12_ATT[modIdx] || {};
    const attCount = Object.keys(attMap).length;
    const corCount = Object.values(attMap).filter(Boolean).length;

    target.innerHTML = `
      <div class="max-w-7xl mx-auto pt-4 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div class="lg:col-span-4 space-y-2.5">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">GRE QUANT &amp; DATA ANALYSIS (5 MODULES • 60 EXAMPLES • 60 DRILLS)</div>
          ${GRE_12X12_MODULES.map((item, idx) => `
            <button type="button" onclick="window._GRE_12_MOD=${idx}; window._GRE_12_QIDX=0; window.renderGreQuant12x12();"
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
            <button type="button" onclick="window._GRE_12_SUB='THEORY'; window.renderGreQuant12x12();"
              class="px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${window._GRE_12_SUB === "THEORY" ? "bg-indigo-600 text-white shadow-sm" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"}">
              Chapter Refresher &amp; 12 Worked Examples
            </button>
            <button type="button" onclick="window._GRE_12_SUB='DRILLS'; window.renderGreQuant12x12();"
              class="px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${window._GRE_12_SUB === "DRILLS" ? "bg-indigo-600 text-white shadow-sm" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"}">
              Shortcuts &amp; 12 GRE Practice Drills
            </button>
          </div>

          ${window._GRE_12_SUB === "THEORY" ? `
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              <div class="flex items-center justify-between">
                <span class="font-extrabold uppercase text-[11px] text-indigo-600">COMPREHENSIVE CHAPTER OVERVIEW &amp; CONCEPT BRIDGE</span>
                <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-extrabold">Master Study Guide</span>
              </div>
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
                <span class="text-xs font-extrabold uppercase text-emerald-800 dark:text-emerald-300">GRADED GRE WORKED EXAMPLES BANK (${filteredWorked.length} OF ${m.worked.length} SOLVED STEP-BY-STEP)</span>
                <div class="flex flex-wrap gap-1.5">
                  ${["ALL", "155+", "165+", "170"].map(t => `
                    <button type="button" onclick="window._GRE_12_TIER='${t}'; window.renderGreQuant12x12();"
                      class="px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer ${window._GRE_12_TIER === t ? "bg-emerald-600 text-white" : "bg-white dark:bg-slate-900 border text-slate-700"}">
                      ${t === "ALL" ? "ALL (12)" : (t === "155+" ? "GRE 155+ Foundation" : (t === "165+" ? "GRE 165+ Contender" : "GRE 170 Perfection"))}
                    </button>
                  `).join("")}
                </div>
              </div>
              ${filteredWorked.map(w => `
                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
                  <div class="flex items-center justify-between gap-2">
                    <span class="font-extrabold text-slate-900 dark:text-white">${w.p}</span>
                    <span class="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-extrabold shrink-0">${w.tier}</span>
                  </div>
                  <div class="text-slate-600 dark:text-slate-300 whitespace-pre-line">${w.s}</div>
                </div>
              `).join("")}
            </div>
          ` : `
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">INTERACTIVE GRE PRACTICE WORKBENCH (${allDrills.length} QUESTIONS • 130–170 SCALE)</div>
                  <div class="text-xs text-slate-500 mt-0.5">Attempted: <strong>${attCount}/${allDrills.length}</strong> &bull; Correct: <strong class="text-emerald-600">${corCount}</strong></div>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  ${allDrills.map((_, i) => `
                    <button type="button" onclick="window._GRE_12_QIDX=${i}; window.renderGreQuant12x12();"
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
                    <button type="button" onclick="window._GRE_12_ATT[${modIdx}]=window._GRE_12_ATT[${modIdx}]||{}; window._GRE_12_ATT[${modIdx}][${qIdx}]=(${oi}===${curDrill.ans}); document.getElementById('gre-12-sol').classList.remove('hidden'); this.classList.add('${oi === curDrill.ans ? "bg-emerald-100 border-emerald-500 text-emerald-900 font-bold" : "bg-rose-100 border-rose-400 text-rose-900"}');"
                      class="text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 font-medium cursor-pointer">${opt}</button>
                  `).join("")}
                </div>
                <div id="gre-12-sol" class="hidden p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                  <strong>Official GRE Solution:</strong> ${curDrill.exp}
                </div>
                <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                  <button type="button" onclick="if(window._GRE_12_QIDX>0){window._GRE_12_QIDX--; window.renderGreQuant12x12();}" class="px-3.5 py-1.5 rounded-xl border text-xs font-bold cursor-pointer">&larr; Previous</button>
                  <button type="button" onclick="if(window._GRE_12_QIDX<${allDrills.length - 1}){window._GRE_12_QIDX++; window.renderGreQuant12x12();}" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold cursor-pointer">Next Question &rarr;</button>
                </div>
              </div>
            </div>
          `}
        </div>
      </div>
    `;
  };

  window.renderGreQuantTab1 = window.renderGreQuant12x12;
  window.renderQuantTab = window.renderGreQuant12x12;
  window.renderTab1 = window.renderGreQuant12x12;
  window.addEventListener("DOMContentLoaded", () => setTimeout(() => window.renderGreQuant12x12(), 160));
})();
