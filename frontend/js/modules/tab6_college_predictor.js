window.GRE_GRAD_STATE = window.GRE_GRAD_STATE || {
  quant: 167, verbal: 161, awa: 4.5,
  ugCgpa10: 9.25, ugGpa: 3.70, degreeGoal: "MS_CS", researchTier: "PUB"
};

window.updateGreGradField = function (field, val) {
  window.GRE_GRAD_STATE[field] = (field === "degreeGoal" || field === "researchTier") ? String(val) : Number(val);
  if (field === "ugCgpa10") { window.GRE_GRAD_STATE.ugGpa = Number(((window.GRE_GRAD_STATE.ugCgpa10 / 10) * 4.0).toFixed(2)); }
  if (field === "ugGpa") { window.GRE_GRAD_STATE.ugCgpa10 = Number(((window.GRE_GRAD_STATE.ugGpa / 4.0) * 10).toFixed(1)); }
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
          <div><div class="flex justify-between text-xs text-slate-300"><span>Undergrad CGPA (10-Pt Scale)</span><strong>${(s.ugCgpa10 || 9.25).toFixed(1)} / 10 &rarr; ${s.ugGpa.toFixed(2)} / 4.0 GPA</strong></div><input type="range" min="6.0" max="10.0" step="0.1" value="${s.ugCgpa10 || 9.25}" oninput="window.updateGreGradField('ugCgpa10', this.value)" class="w-full accent-indigo-500"></div>
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
// ==============================================================================
// POSTGRADUATE REGISTRATION ENRICHER & REGISTERED PROFILE HEADER SYNC
// ==============================================================================
window.getPostgradProfile = function () {
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem("goalisb_postgrad_profile_v1") || localStorage.getItem("ipm_user") || "{}");
  } catch (e) {}

  return {
    name: saved.name || "Dina Shah",
    classXII: Number(saved.classXII || saved.class12 || 90),
    ugCgpa10: Number(saved.ugCgpa10 || (exam === "GRE" ? 9.25 : (exam === "GMAT" ? 9.1 : 8.7))),
    ugGpa4: Number(saved.ugGpa4 || (exam === "GRE" ? 3.70 : 3.64)),
    ugPct: Number(saved.ugPct || 82),
    workExMonths: Number(saved.workExMonths !== undefined ? saved.workExMonths : (exam === "GMAT" ? 48 : 24)),
    targetTrack: saved.targetTrack || (exam === "GRE" ? "MS CS / AI" : (exam === "GMAT" ? "Global MBA / MiM" : "IIM A/B/C PGP")),
    researchTier: saved.researchTier || "PUB",
    category: saved.category || "GEN"
  };
};

window.savePostgradProfile = function (updates) {
  const cur = window.getPostgradProfile();
  const next = { ...cur, ...updates };
  if (updates.ugCgpa10 !== undefined) {
    const c10 = Math.min(10, Math.max(4, Number(updates.ugCgpa10)));
    next.ugCgpa10 = Number(c10.toFixed(2));
    next.ugGpa4 = Number(((c10 / 10) * 4.0).toFixed(2));
    next.ugPct = Number(Math.min(100, (c10 - 0.5) * 10).toFixed(1));
  }
  localStorage.setItem("goalisb_postgrad_profile_v1", JSON.stringify(next));

  // Sync into Tab 6 state automatically
  if (window.CAT_CALL_STATE) {
    window.CAT_CALL_STATE.classXII = next.classXII;
    window.CAT_CALL_STATE.gradCgpa = next.ugCgpa10;
    window.CAT_CALL_STATE.gradPct = next.ugPct;
    window.CAT_CALL_STATE.workExMonths = next.workExMonths;
    window.CAT_CALL_STATE.category = next.category;
  }
  if (window.GMAT_ADMIT_STATE) {
    window.GMAT_ADMIT_STATE.ugCgpa10 = next.ugCgpa10;
    window.GMAT_ADMIT_STATE.ugGpa = next.ugGpa4;
    window.GMAT_ADMIT_STATE.workExYears = Number((next.workExMonths / 12).toFixed(1));
  }
  if (window.GRE_GRAD_STATE) {
    window.GRE_GRAD_STATE.ugCgpa10 = next.ugCgpa10;
    window.GRE_GRAD_STATE.ugGpa = next.ugGpa4;
    window.GRE_GRAD_STATE.researchTier = next.researchTier;
  }
  window.syncRegisteredHeaderAndForms();
  if (typeof window.renderActiveTab === "function") window.renderActiveTab();
};

window.openPostgradProfileModal = function () {
  const p = window.getPostgradProfile();
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");

  let modal = document.getElementById("postgrad-profile-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "postgrad-profile-modal";
    modal.className = "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-5 space-y-4 text-xs text-slate-200 shadow-2xl">
      <div class="flex justify-between items-center border-b border-slate-800 pb-2.5">
        <div>
          <span class="text-[10px] uppercase font-bold text-indigo-400">Registered Candidate Profile</span>
          <h3 class="text-base font-extrabold text-white">Postgraduate Academic &amp; Experience Credentials</h3>
        </div>
        <button type="button" onclick="document.getElementById('postgrad-profile-modal').remove()" class="text-slate-400 hover:text-white text-lg font-bold">&times;</button>
      </div>
      <div class="space-y-3">
        <label class="block"><span class="text-slate-400">Candidate Full Name</span>
          <input id="pg-prof-name" type="text" value="${p.name}" class="mt-1 w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-semibold">
        </label>
        <div class="grid grid-cols-2 gap-2.5">
          <label class="block"><span class="text-slate-400">Undergrad CGPA (10-Pt)</span>
            <input id="pg-prof-cgpa" type="number" step="0.05" min="4" max="10" value="${p.ugCgpa10}" class="mt-1 w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold">
          </label>
          <label class="block"><span class="text-slate-400">${exam === "CAT" ? "Class XII Board %" : "Work Experience (Months)"}</span>
            <input id="pg-prof-sec" type="number" min="0" max="120" value="${exam === "CAT" ? p.classXII : p.workExMonths}" class="mt-1 w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold">
          </label>
        </div>
        ${exam === "CAT" ? `
        <div class="grid grid-cols-2 gap-2.5">
          <label class="block"><span class="text-slate-400">Work Experience (Months)</span>
            <input id="pg-prof-wx" type="number" min="0" max="96" value="${p.workExMonths}" class="mt-1 w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold">
          </label>
          <label class="block"><span class="text-slate-400">Category</span>
            <select id="pg-prof-cat" class="mt-1 w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-semibold">
              <option value="GEN" ${p.category==="GEN"?"selected":""}>General</option>
              <option value="EWS" ${p.category==="EWS"?"selected":""}>EWS</option>
              <option value="NCOBC" ${p.category==="NCOBC"?"selected":""}>NC-OBC</option>
              <option value="SC" ${p.category==="SC"?"selected":""}>SC</option>
              <option value="ST" ${p.category==="ST"?"selected":""}>ST</option>
            </select>
          </label>
        </div>` : `
        <label class="block"><span class="text-slate-400">Target Postgraduate Track</span>
          <input id="pg-prof-track" type="text" value="${p.targetTrack}" class="mt-1 w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-semibold">
        </label>`}
      </div>
      <div class="flex justify-end gap-2 pt-2 border-t border-slate-800">
        <button type="button" onclick="document.getElementById('postgrad-profile-modal').remove()" class="px-3.5 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold">Cancel</button>
        <button type="button" onclick="
          const exam = window.location.host.includes('gmat') ? 'GMAT' : (window.location.host.includes('gre') ? 'GRE' : 'CAT');
          window.savePostgradProfile({
            name: document.getElementById('pg-prof-name').value.trim() || 'Dina Shah',
            ugCgpa10: Number(document.getElementById('pg-prof-cgpa').value || 8.8),
            classXII: exam === 'CAT' ? Number(document.getElementById('pg-prof-sec').value || 90) : 90,
            workExMonths: exam === 'CAT' ? Number(document.getElementById('pg-prof-wx').value || 24) : Number(document.getElementById('pg-prof-sec').value || 24),
            category: document.getElementById('pg-prof-cat') ? document.getElementById('pg-prof-cat').value : 'GEN',
            targetTrack: document.getElementById('pg-prof-track') ? document.getElementById('pg-prof-track').value : 'Postgrad'
          });
          document.getElementById('postgrad-profile-modal').remove();
        " class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold cursor-pointer">Save &amp; Sync Profile</button>
      </div>
    </div>
  `;
};

window.syncRegisteredHeaderAndForms = function () {
  const p = window.getPostgradProfile();
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");

  let hist = [];
  try { hist = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]"); } catch (e) {}
  const latest = hist[0];

  let summary = "";
  if (exam === "GMAT") {
    const est = latest && latest.maxScore ? Math.min(805, Math.max(205, Math.round((205 + (latest.score / latest.maxScore) * 600) / 10) * 10 + 5)) : null;
    summary = `CGPA: ${p.ugCgpa10.toFixed(1)}/10 (${p.ugGpa4.toFixed(2)} GPA) | WX: ${(p.workExMonths/12).toFixed(1)}y &bull; ${est ? `Mock &rarr; ${est}/805` : "Target: 715+ Focus"}`;
  } else if (exam === "GRE") {
    const est = latest && latest.maxScore ? Math.min(340, Math.max(260, Math.round(260 + (latest.score / latest.maxScore) * 80))) : null;
    summary = `CGPA: ${p.ugCgpa10.toFixed(1)}/10 (${p.ugGpa4.toFixed(2)} GPA) | ${p.targetTrack} &bull; ${est ? `Mock &rarr; ${est}/340` : "Target: 328+ GRE"}`;
  } else {
    const scaled198 = latest && latest.maxScore ? Math.round((latest.score / latest.maxScore) * 198) : null;
    summary = `XII: ${p.classXII}% | CGPA: ${p.ugCgpa10.toFixed(1)}/10 (${p.ugPct}%) | WX: ${p.workExMonths}m &bull; ${scaled198 !== null ? `Mock &rarr; ${scaled198}/198` : "Target: 99.2+%ile"}`;
  }

  // Update the top-bar candidate profile pill & make it clickable to edit Postgraduate credentials
  document.querySelectorAll("header span, header div, nav span, nav div").forEach(el => {
    if (el.children.length <= 3 && (/Class\s*(X|XII|10|12)/i.test(el.textContent || "") || el.dataset.pgSynced === "1")) {
      el.dataset.pgSynced = "1";
      el.style.cursor = "pointer";
      el.title = "Click to edit Registered Postgraduate Profile (CGPA, Work-Ex, Target Track)";
      el.onclick = window.openPostgradProfileModal;
      el.innerHTML = `<span class="font-bold">&#128100; ${p.name}</span> <span class="mx-1.5 opacity-50">|</span> <span class="text-indigo-600 dark:text-indigo-300 font-semibold">${summary}</span> <span class="ml-1.5 text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/15 text-indigo-400">Edit</span>`;
    }
  });

  // Also upgrade any Registration Modal inputs labeled 'Class 10 %' / 'Class 12 %' to Postgraduate fields
  document.querySelectorAll("label, input").forEach(node => {
    if (node.tagName === "LABEL" && /Class\s*10/i.test(node.textContent || "")) {
      node.innerHTML = node.innerHTML.replace(/Class\s*10\s*%/gi, "Undergrad CGPA (10-Pt Scale)");
    }
    if (node.tagName === "LABEL" && /Class\s*12/i.test(node.textContent || "") && exam !== "CAT") {
      node.innerHTML = node.innerHTML.replace(/Class\s*12\s*%/gi, "Work Experience (Months)");
    }
  });
};

setInterval(window.syncRegisteredHeaderAndForms, 500);