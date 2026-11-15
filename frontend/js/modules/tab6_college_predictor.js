window.GRE_GRAD_STATE = window.GRE_GRAD_STATE || {
  quant: 167, verbal: 161, awa: 4.5,
  ugCgpa10: 9.25, ugGpa: 3.70, degreeGoal: "MS_CS", researchTier: "PUB",
  mockSyncLabel: "Synced with Registered Profile"
};

window.syncGreFromLatestMock = function () {
  let hist = [];
  try { hist = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]"); } catch (e) {}
  if (!hist.length) {
    alert("Complete and submit a Section-Adaptive Mock in Tab 4 first to correlate your live GRE score.");
    return;
  }
  const latest = hist[0];
  const ratio = Math.max(0, Math.min(1, Number(latest.score || 0) / Math.max(1, Number(latest.maxScore || 54))));
  window.GRE_GRAD_STATE.quant = Math.min(170, Math.max(130, Math.round(130 + ratio * 40)));
  window.GRE_GRAD_STATE.verbal = Math.min(170, Math.max(130, Math.round(130 + ratio * 38)));
  window.GRE_GRAD_STATE.mockSyncLabel = `Imported Tab 4 Mock (${latest.score}/${latest.maxScore}) → Est. ${window.GRE_GRAD_STATE.quant + window.GRE_GRAD_STATE.verbal}/340`;
  window.renderTab6(window._LAST_TAB6_EL || document.getElementById("tab-content"));
};

window.updateGreGradField = function (field, val) {
  window.GRE_GRAD_STATE[field] = (field === "degreeGoal" || field === "researchTier") ? String(val) : Number(val);
  if (field === "ugCgpa10") window.GRE_GRAD_STATE.ugGpa = Number(((window.GRE_GRAD_STATE.ugCgpa10 / 10) * 4.0).toFixed(2));
  window.renderTab6(window._LAST_TAB6_EL || document.getElementById("tab-content"));
};

window.renderTab6 = function (el) {
  if (!el) return;
  window._LAST_TAB6_EL = el;
  try {
    const p = JSON.parse(localStorage.getItem("goalisb_postgrad_profile_v1") || "{}");
    if (p.ugCgpa10) { window.GRE_GRAD_STATE.ugCgpa10 = Number(p.ugCgpa10); window.GRE_GRAD_STATE.ugGpa = Number(p.ugGpa4 || (p.ugCgpa10/10)*4.0); }
  } catch (e) {}

  const s = window.GRE_GRAD_STATE;
  const totalGre = Number(s.quant) + Number(s.verbal);
  const resBonus = s.researchTier === "TIER1_PUB" ? 6 : (s.researchTier === "PUB" ? 3 : 0);

  const gradPrograms = [
    { name: "Stanford University — MS CS / AI", minQ: 168, minV: 160, minGpa: 3.80, funding: "Course Assistantship (CA) / Lab RA", roi: "Tuition $62K • Median Starting $185K" },
    { name: "Carnegie Mellon (CMU) — MSCS / MCDS", minQ: 168, minV: 158, minGpa: 3.75, funding: "TA / Research Lab Stipend", roi: "Tuition $58K • Median Starting $180K" },
    { name: "UC Berkeley — MEng EECS / MS Data Science", minQ: 167, minV: 158, minGpa: 3.70, funding: "GSI / Reader Fee Remission", roi: "Tuition $56K • Bay Area Tech Placement" },
    { name: "Georgia Tech — MS CS / Analytics", minQ: 165, minV: 155, minGpa: 3.55, funding: "GRA / GTA Tuition Waiver + Stipend", roi: "High-ROI Public Flagship ($34K)" },
    { name: "UIUC — MS CS / Financial Engineering", minQ: 166, minV: 155, minGpa: 3.60, funding: "TA / RA Tuition Waiver", roi: "Top-5 Engineering & Quant Placement" },
    { name: "ETH Zürich — MSc Computer Science", minQ: 167, minV: 157, minGpa: 3.75, funding: "Excellence Scholarship (ESOP)", roi: "Nominal Fee (CHF 1,500/yr) • Top Global ROI" },
    { name: "Columbia / NYU Courant — MS Financial Engg", minQ: 168, minV: 158, minGpa: 3.65, funding: "Merit Dean Fellowship", roi: "Wall Street Quant & Risk Placement" },
    { name: "ISB / IIMs / Wharton (GRE MBA Route)", minQ: 163, minV: 162, minGpa: 3.50, funding: "Merit Tuition Fellowship", roi: "Full GRE Equivalence for Global MBAs" }
  ];

  const cardsHtml = gradPrograms.map(gp => {
    const failsQuant = s.quant < gp.minQ;
    const failsGpa = (s.ugGpa + resBonus * 0.03) < gp.minGpa;
    const badge = failsQuant
      ? `<span class="px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 text-[11px] font-bold">Quant Gate Risk (Need Q &ge;${gp.minQ})</span>`
      : (failsGpa
          ? `<span class="px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-[11px] font-bold">GPA Reach (Publications/SOP Key)</span>`
          : (s.quant >= gp.minQ + 1 && s.verbal >= gp.minV
              ? `<span class="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-bold">Strong Admit + Funding Contender</span>`
              : `<span class="px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700 text-[11px] font-bold">Competitive Target</span>`));
    return `
      <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 flex flex-wrap items-center justify-between gap-3 shadow-sm">
        <div class="space-y-0.5">
          <div class="font-extrabold text-sm text-slate-900 dark:text-white">${gp.name}</div>
          <div class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">${gp.roi} &bull; Floor: Q &ge;${gp.minQ}, V &ge;${gp.minV}, GPA ${gp.minGpa.toFixed(2)}</div>
          <div class="text-[11px] text-slate-500 dark:text-slate-400">Funding Path: ${gp.funding}</div>
        </div>
        <div>${badge}</div>
      </div>
    `;
  }).join("");

  el.innerHTML = `
    <div class="max-w-6xl mx-auto my-4 grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div class="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4 shadow-sm">
        <div class="flex items-start justify-between gap-2">
          <div>
            <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">Graduate MS / PhD / MBA Engine</span>
            <h2 class="text-lg font-extrabold text-slate-900 dark:text-white">Stanford, MIT, CMU, Berkeley &amp; ETH Predictor</h2>
          </div>
          <button type="button" onclick="window.syncGreFromLatestMock()" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold cursor-pointer">&#8635; Sync Mock</button>
        </div>
        <div class="text-[11px] text-emerald-600 font-semibold">${s.mockSyncLabel}</div>

        <div class="space-y-2.5">
          <div><div class="flex justify-between text-xs"><span>Quantitative Reasoning (130–170)</span><strong>${s.quant} / 170</strong></div><input type="range" min="130" max="170" value="${s.quant}" oninput="window.updateGreGradField('quant', this.value)" class="w-full accent-indigo-600"></div>
          <div><div class="flex justify-between text-xs"><span>Verbal Reasoning (130–170)</span><strong>${s.verbal} / 170</strong></div><input type="range" min="130" max="170" value="${s.verbal}" oninput="window.updateGreGradField('verbal', this.value)" class="w-full accent-indigo-600"></div>
          <div><div class="flex justify-between text-xs"><span>Analytical Writing (AWA 0–6)</span><strong>${s.awa.toFixed(1)} / 6.0</strong></div><input type="range" min="3.0" max="6.0" step="0.5" value="${s.awa}" oninput="window.updateGreGradField('awa', this.value)" class="w-full accent-indigo-600"></div>
          <div class="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 flex justify-between text-xs">
            <span class="font-bold text-slate-700 dark:text-slate-200">Composite GRE Score:</span>
            <strong class="text-indigo-700 dark:text-indigo-300">${totalGre} / 340 (Q${s.quant} V${s.verbal})</strong>
          </div>
        </div>

        <div class="space-y-2.5 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div><div class="flex justify-between text-xs"><span>Undergrad CGPA (/10 &rarr; 4.0 GPA)</span><strong>${s.ugCgpa10.toFixed(2)}/10 (${s.ugGpa.toFixed(2)} GPA)</strong></div><input type="range" min="6.0" max="10.0" step="0.05" value="${s.ugCgpa10}" oninput="window.updateGreGradField('ugCgpa10', this.value)" class="w-full accent-indigo-600"></div>
          <select onchange="window.updateGreGradField('researchTier', this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs font-semibold">
            <option value="TIER1_PUB" ${s.researchTier==="TIER1_PUB"?"selected":""}>First-Author Peer-Reviewed Publication (IEEE/ACM/NeurIPS)</option>
            <option value="PUB" ${s.researchTier==="PUB"?"selected":""}>Undergraduate Thesis / Lab Internship / Co-Author</option>
            <option value="INDUSTRY" ${s.researchTier==="INDUSTRY"?"selected":""}>Software / Quant Industry Experience</option>
          </select>
          <select onchange="window.updateGreGradField('degreeGoal', this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs font-semibold">
            <option value="MS_CS" ${s.degreeGoal==="MS_CS"?"selected":""}>MS / MEng in Computer Science, AI &amp; Data Science</option>
            <option value="MS_FIN" ${s.degreeGoal==="MS_FIN"?"selected":""}>MS Financial Engineering / Quantitative Finance</option>
            <option value="PHD" ${s.degreeGoal==="PHD"?"selected":""}>Funded PhD Track (Tuition Waiver + Stipend)</option>
            <option value="MBA" ${s.degreeGoal==="MBA"?"selected":""}>MBA / PGP via GRE Score</option>
          </select>
        </div>
      </div>
      <div class="lg:col-span-7 space-y-2.5">${cardsHtml}</div>
    </div>
  `;
};
window.renderCollegePredictor = window.renderTab6;