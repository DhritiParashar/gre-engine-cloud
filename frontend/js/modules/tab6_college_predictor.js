window.GRE_GRAD_STATE = window.GRE_GRAD_STATE || {
  quant: 167, verbal: 161, awa: 4.5,
  ugGpa: 3.70, degreeGoal: "MS_CS", researchTier: "PUB"
};

window.updateGreGradField = function (field, val) {
  window.GRE_GRAD_STATE[field] = (field === "degreeGoal" || field === "researchTier") ? String(val) : Number(val);
  window.renderActiveTab();
};

window.renderTab6 = function (el) {
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

  const rowsHtml = gradPrograms.map(gp => {
    const failsQuant = s.quant < gp.minQ;
    const failsGpa = (s.ugGpa + resBonus * 0.03) < gp.minGpa;
    const verdict = failsQuant
      ? `<span class="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 text-[11px] font-bold">Quant Gate Risk (Need Q &ge;${gp.minQ})</span>`
      : (failsGpa
          ? `<span class="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold">GPA Reach (Offset via Publications/SOP)</span>`
          : (s.quant >= gp.minQ + 1 && s.verbal >= gp.minV
              ? `<span class="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">Strong Admit + Funding Contender</span>`
              : `<span class="px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[11px] font-bold">Competitive Target</span>`));
    return `
      <tr class="border-b border-slate-800/80 hover:bg-slate-950/60">
        <td class="py-3 px-3.5"><div class="font-bold text-white">${gp.name}</div><div class="text-[11px] text-emerald-400 font-semibold">${gp.roi}</div></td>
        <td class="py-3 px-3 font-mono text-xs text-slate-300">Q &ge;${gp.minQ} &bull; V &ge;${gp.minV} &bull; GPA ${gp.minGpa.toFixed(2)}</td>
        <td class="py-3 px-3 text-xs text-indigo-300">${gp.funding}</td>
        <td class="py-3 px-3">${verdict}</td>
      </tr>
    `;
  }).join("");

  el.innerHTML = `
    <div class="max-w-6xl mx-auto my-4 space-y-5">
      <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-5 shadow-xl">
        <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold uppercase">Graduate MS, MEng, PhD &amp; MBA Admissions Command Center</span>
        <h2 class="text-xl font-extrabold text-white mt-1">Stanford, MIT, CMU, Berkeley, ETH &amp; Global MBA GRE Admit Predictor</h2>
        <p class="text-xs text-slate-400">Enforces STEM Quantitative Reasoning floor gates (165–170), Undergraduate GPA rigor, and Research/Publication multipliers for Postgraduate Admissions &amp; RA/TA Funding.</p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div class="text-xs font-bold uppercase text-indigo-300">1. GRE General Scores (260–340 Scale)</div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Quantitative Reasoning (130–170)</span><strong>${s.quant} / 170</strong></div><input type="range" min="145" max="170" value="${s.quant}" oninput="window.updateGreGradField('quant', this.value)" class="w-full accent-indigo-500"></div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Verbal Reasoning (130–170)</span><strong>${s.verbal} / 170</strong></div><input type="range" min="140" max="170" value="${s.verbal}" oninput="window.updateGreGradField('verbal', this.value)" class="w-full accent-indigo-500"></div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Analytical Writing (AWA 0–6)</span><strong>${s.awa.toFixed(1)} / 6.0</strong></div><input type="range" min="3.0" max="6.0" step="0.5" value="${s.awa}" oninput="window.updateGreGradField('awa', this.value)" class="w-full accent-indigo-500"></div>
          <div class="p-2.5 rounded-xl bg-slate-950 border border-indigo-500/30 flex justify-between text-xs"><span class="text-slate-300">Composite GRE:</span><strong class="text-base text-emerald-300">${totalGre} / 340 (Q${s.quant} V${s.verbal})</strong></div>
        </div>
        <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div class="text-xs font-bold uppercase text-indigo-300">2. Undergraduate GPA &amp; Research Profile</div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Undergraduate GPA (4.0 Scale)</span><strong>${s.ugGpa.toFixed(2)} / 4.00</strong></div><input type="range" min="2.7" max="4.0" step="0.05" value="${s.ugGpa}" oninput="window.updateGreGradField('ugGpa', this.value)" class="w-full accent-indigo-500"></div>
          <select onchange="window.updateGreGradField('researchTier', this.value)" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-semibold">
            <option value="TIER1_PUB" ${s.researchTier==="TIER1_PUB"?"selected":""}>First-Author Peer-Reviewed Publication (IEEE/ACM/NeurIPS)</option>
            <option value="PUB" ${s.researchTier==="PUB"?"selected":""}>Undergraduate Thesis / Lab Internship / Co-Author</option>
            <option value="INDUSTRY" ${s.researchTier==="INDUSTRY"?"selected":""}>Software / Quant Industry Experience (No Publications)</option>
          </select>
        </div>
        <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div class="text-xs font-bold uppercase text-indigo-300">3. Target Postgraduate Track</div>
          <select onchange="window.updateGreGradField('degreeGoal', this.value)" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-semibold">
            <option value="MS_CS" ${s.degreeGoal==="MS_CS"?"selected":""}>MS / MEng in Computer Science, AI &amp; Data Science</option>
            <option value="MS_FIN" ${s.degreeGoal==="MS_FIN"?"selected":""}>MS Financial Engineering / Quantitative Finance</option>
            <option value="PHD" ${s.degreeGoal==="PHD"?"selected":""}>Funded PhD Track (Full Tuition Waiver + Stipend)</option>
            <option value="MBA" ${s.degreeGoal==="MBA"?"selected":""}>MBA / PGP via GRE Score</option>
          </select>
          <div class="text-[11px] text-slate-400">Top STEM MS programs enforce strict GRE Quant gates (Q167–Q170) regardless of high Verbal scores.</div>
        </div>
      </div>
      <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 overflow-x-auto shadow-xl">
        <table class="w-full text-left text-xs border-collapse">
          <thead><tr class="border-b border-slate-800 text-[11px] uppercase text-slate-400"><th class="py-2.5 px-3.5">Graduate Program &amp; ROI</th><th class="py-2.5 px-3">Quant / Verbal / GPA Gate</th><th class="py-2.5 px-3">Funding / Assistantship</th><th class="py-2.5 px-3">Admit Verdict</th></tr></thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>
    </div>
  `;
};