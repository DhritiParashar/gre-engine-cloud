window.GRE_DI_MODULES = [
  {
    id: "gre_di_charts",
    badge: "GRE QUANTITATIVE • DATA INTERPRETATION LAB",
    title: "Multi-Chart Data Interpretation: Compound Growth, Percentiles & Weighted Distributions",
    subtitle: "3–4 Qs per Quant Section • Linked Tables, Scatter Plots & Boxplots",
    overview: "ETS GRE Data Interpretation sets present 2 linked visual displays (stacked bar charts, percentile tables, or logarithmic distributions) followed by 3–4 questions including Numeric Entry and Check-All-That-Apply items.",
    bridge: "Use the on-screen GRE calculator strictly for messy 3-digit divisions; for percentage comparisons, estimate ratios visually first and verify whether the prompt asks for percentage change vs. percentage-point difference.",
    drills: [
      { q: "A university's graduate applicant pool rose from 4,000 to 5,000 while the admit rate dropped from 20% to 15%. By what percentage did the absolute number of admitted students change?", opts: ["-25.0%", "-6.25%", "0%", "+6.25%", "+12.5%"], ans: 1, exp: "Prior admits = 0.20 * 4000 = 800. New admits = 0.15 * 5000 = 750. Change = -50 / 800 = -6.25%." },
      { q: "In a dataset of 50 graduate salaries, the median is $112,000 and the interquartile range (IQR) is $28,000. If every salary increases by a flat $5,000 bonus, what is the new IQR?", opts: ["$23,000", "$28,000", "$33,000", "$35,000", "Cannot be determined"], ans: 1, exp: "Adding a constant shift (+$5,000) translates Q1 and Q3 equally, leaving IQR = Q3 - Q1 unchanged at $28,000." }
    ]
  },
  {
    id: "gre_awa_studio",
    badge: "GRE ANALYTICAL WRITING • 5.5–6.0 ISSUE ESSAY STUDIO",
    title: "Analytical Writing (AWA): 30-Minute Issue Task Architecture & Counter-Thesis Rubric",
    subtitle: "1 Essay • 30 Minutes • Scored 0.0–6.0 in 0.5 Increments",
    overview: "The current GRE General Test features a single 30-minute Analyze an Issue task. Top PhD, MS, and MBA programs look for AWA ≥ 4.5–5.0, demonstrating nuanced conditional reasoning rather than one-sided assertions.",
    bridge: "Structure in 4 crisp paragraphs: (1) Qualified Thesis stating when the claim holds vs. fails, (2) Primary Supporting Mechanism + Concrete Historical/Institutional Example, (3) Strongest Counter-Argument + Rebuttal/Synthesis, (4) Epistemic Conclusion.",
    drills: [
      { q: "Which thesis structure earns a 6.0 AWA score on an Issue prompt about mandatory university curricula?", opts: ["Unconditional agreement with zero exceptions", "Conditional synthesis distinguishing foundational rigor in early undergraduate years from specialized autonomy in upper-level research", "Listing 5 unrelated historical facts without a central claim", "Summarizing the prompt without taking a position"], ans: 1, exp: "ETS 6.0 rubric rewards nuanced, conditional theses that explore boundary conditions and counter-perspectives." }
    ]
  }
];

window.renderTab2 = function (el) {
  window._GRE_DI_IDX = window._GRE_DI_IDX || 0;
  const m = window.GRE_DI_MODULES[window._GRE_DI_IDX];
  const nav = window.GRE_DI_MODULES.map((item, idx) => `
    <button type="button" onclick="window._GRE_DI_IDX=${idx}; window.renderTab2(this.closest('#tab-content') || document.querySelector('[data-tab-panel]'));"
      class="w-full text-left p-4 rounded-2xl border transition cursor-pointer ${idx === window._GRE_DI_IDX ? 'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/40' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'}">
      <div class="font-extrabold text-sm text-slate-900 dark:text-white">${item.title}</div>
      <div class="text-xs text-slate-500 mt-1">${item.subtitle}</div>
    </button>
  `).join("");

  const drillsHtml = m.drills.map((d, i) => `
    <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-2">
      <div class="text-xs font-bold text-slate-900 dark:text-white">Q${i+1}. ${d.q}</div>
      <div class="flex flex-wrap gap-2">
        ${d.opts.map((o, oi) => `<button type="button" onclick="this.parentElement.nextElementSibling.classList.remove('hidden')" class="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold hover:border-indigo-500 cursor-pointer">${o}</button>`).join("")}
      </div>
      <div class="hidden text-xs text-emerald-700 dark:text-emerald-300 pt-1"><strong>Correct Answer: ${d.opts[d.ans]}</strong> — ${d.exp}</div>
    </div>
  `).join("");

  el.innerHTML = `
    <div class="max-w-6xl mx-auto my-4 grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div class="lg:col-span-4 space-y-3">
        <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">DATA INTERPRETATION &amp; AWA LAB</div>
        ${nav}
      </div>
      <div class="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
        <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">${m.badge}</span>
        <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">${m.title}</h2>
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
          <div class="font-extrabold uppercase text-[11px] text-indigo-600">Graduate Module Overview &amp; Q170 / AWA 5.5 Strategy</div>
          <p>${m.overview}</p>
          <p><strong>Execution Heuristic:</strong> ${m.bridge}</p>
        </div>
        <div class="space-y-3">${drillsHtml}</div>
      </div>
    </div>
  `;
};