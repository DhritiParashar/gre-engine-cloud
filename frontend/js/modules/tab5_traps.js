window.GRE_TRAPS_18 = [
  { cat: "Quantitative Comparison", title: "Trap 1: Picking A or B After Testing Only Positive Integers", bait: "Testing x = 2 and x = 3, seeing Quantity A > Quantity B, and missing that x = 0.5 reverses it.", fix: "Always run FROZEN (Fractions, Roots, One, Zero, Extremes, Negatives)—one reversal proves Choice D." },
  { cat: "Quantitative Comparison", title: "Trap 2: Assuming Visual Scale on Geometry Diagrams", bait: "Assuming an angle looks like 90° or two segments look equal when not stated.", fix: "Redraw extreme versions of the figure while obeying only explicit text constraints." },
  { cat: "Quantitative Comparison", title: "Trap 3: Dividing Both Sides by Variable x", bait: "Canceling x from Quantity A (x^2) and Quantity B (3x) when x could be 0 or negative.", fix: "Subtract instead of dividing: compare x^2 - 3x = x(x - 3) against 0." },
  { cat: "Quantitative Comparison", title: "Trap 4: Overlooking Even-Exponent Dual Roots", bait: "Treating x^2 = 36 as x = 6 instead of x = ±6.", fix: "List both positive and negative roots explicitly before comparing Quantities A and B." },
  { cat: "Problem Solving & Numeric Entry", title: "Trap 5: Numeric Entry Rounding / Fraction Format", bait: "Entering 0.33 instead of the exact fraction 1/3 when rounding is not requested.", fix: "Use exact fractions unless the prompt specifies 'round to the nearest...'." },
  { cat: "Problem Solving & Numeric Entry", title: "Trap 6: Standard Deviation Misconception", bait: "Assuming larger numbers (e.g., {100, 101, 102}) have a larger SD than smaller spread-out numbers ({1, 10, 19}).", fix: "Standard deviation depends purely on dispersion from the mean, never on the magnitude of the mean." },
  { cat: "Data Interpretation", title: "Trap 7: Percent vs. Percentage-Point Confusion", bait: "Reading a rise from 20% to 25% as a 5% increase rather than a 25% relative increase (5 percentage points).", fix: "Distinguish percentage-point difference (25 - 20 = 5) from relative percent change (5/20 = +25%)." },
  { cat: "Data Interpretation", title: "Trap 8: Ratio Without Total Base", bait: "Computing total headcount from a pie chart showing only percentages without a total N.", fix: "Check chart titles and footnotes for the total sample size N before computing absolute counts." },
  { cat: "Verbal: Text Completion", title: "Trap 9: Vocabulary-First Guessing Before Logic Mapping", bait: "Picking an impressive GRE word that violates the sentence's structural pivot ('although', 'belie', 'paradoxically').", fix: "Predict your own simple word and polarity (+/-) for every blank before reading the choices." },
  { cat: "Verbal: Text Completion", title: "Trap 10: Independent Guessing on 3-Blank TC", bait: "Treating a 3-blank Text Completion as three unrelated 1-blank questions.", fix: "Solve the most constrained blank first; all three blanks must form a single coherent thesis." },
  { cat: "Verbal: Sentence Equivalence", title: "Trap 11: Single-Word Synonym Trap", bait: "Picking one word that fits the sentence well without verifying it has an exact twin among the 6 choices.", fix: "Eliminate any option lacking a semantic pair; both selected words must produce equivalent sentence meanings." },
  { cat: "Verbal: Sentence Equivalence", title: "Trap 12: False Pair Trap", bait: "Choosing two words that are synonyms of each other (e.g., 'ephemeral / transient') that contradict the sentence's meaning.", fix: "Confirm both twin words match the sentence's logic, not just each other." },
  { cat: "Reading Comprehension", title: "Trap 13: Extreme Language in Inference Questions", bait: "Selecting choices containing 'always', 'never', 'solely', or 'proves' on GRE inference items.", fix: "Prefer cautious, defensible inferences ('suggests', 'is consistent with', 'challenges')." },
  { cat: "Reading Comprehension", title: "Trap 14: Confusing Cited Scholars With Author's Voice", bait: "Attributing a view critiqued in Paragraph 1 to the passage author.", fix: "Track attribution markers ('Critics contend...', 'Yet recent evidence demonstrates...')." },
  { cat: "Reading Comprehension", title: "Trap 15: Multi-Select (Check-All-That-Apply) Partial Credit Loss", bait: "Stopping after finding 1 valid option on 3-choice 'Select all that apply' RC questions.", fix: "Evaluate each of the 3 statements independently as True/False against the text." },
  { cat: "Section-Adaptive Pacing", title: "Trap 16: Leaving Blank Answers (Zero Guessing Penalty)", bait: "Leaving 2–3 hard questions unanswered at the end of Section 1 or Section 2.", fix: "GRE has zero negative marking—use the Mark & Review screen to fill every blank before time expires." },
  { cat: "Section-Adaptive Pacing", title: "Trap 17: Missing Stage-2 Hard Routing Threshold", bait: "Getting bogged down on Q4 in Section 1 and missing 3 easy questions at the end.", fix: "Skip time-sinks in Section 1 to hit ≥10/12 accuracy and unlock the Hard Stage-2 ceiling (Q168–170)." },
  { cat: "Analytical Writing (AWA)", title: "Trap 18: One-Sided Issue Essay Without Counter-Arguments", bait: "Writing a 5-paragraph cheerleading essay without addressing edge cases where the claim fails.", fix: "Dedicate a full body paragraph to the strongest counter-perspective and synthesize conditions for a 5.5–6.0 AWA." }
];

window.renderTab5 = function (el) {
  const cards = window.GRE_TRAPS_18.map((t, i) => `
    <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 space-y-2 shadow-sm">
      <div class="flex items-center justify-between">
        <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-300">${t.cat}</span>
        <span class="text-[11px] font-mono text-slate-400">#${i + 1} / 18</span>
      </div>
      <h4 class="font-extrabold text-sm text-slate-900 dark:text-white">${t.title}</h4>
      <div class="text-xs text-rose-600 dark:text-rose-300"><strong>ETS Trap Bait:</strong> ${t.bait}</div>
      <div class="text-xs text-emerald-700 dark:text-emerald-300"><strong>330+ Defense:</strong> ${t.fix}</div>
    </div>
  `).join("");

  el.innerHTML = `
    <div class="max-w-6xl mx-auto my-4 space-y-4">
      <div class="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-lg">
        <span class="text-[10px] uppercase font-bold text-amber-300">GRE General 260–340 Diagnostic Clinic</span>
        <h2 class="text-xl font-extrabold mt-1">18 High-Yield GRE Quantitative Comparison, Verbal &amp; Adaptive Traps</h2>
        <p class="text-xs text-slate-300 mt-1">Eliminate Choice-D boundary blindspots, Text Completion polarity flips, and Stage-1 pacing bottlenecks to unlock Q168+ / V163+.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${cards}</div>
    </div>
  `;
};