window.GRE_GRAD_STATE = window.GRE_GRAD_STATE || {
  quant: 167, verbal: 161, awa: 4.5,
  ugCgpa10: 9.25, ugGpa: 3.70, degreeGoal: "MS_CS", researchTier: "PUB",
  lastMockSummary: "Ready — Click Correlate Latest Mock or Adjust Sliders"
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
  window.GRE_GRAD_STATE.lastMockSummary = `Synced from Mock (${latest.score}/${latest.maxScore}) → Est. ${window.GRE_GRAD_STATE.quant + window.GRE_GRAD_STATE.verbal}/340`;
  window.renderActiveTab();
};

window.updateGreGradField = function (field, val) {
  window.GRE_GRAD_STATE[field] = (field === "degreeGoal" || field === "researchTier") ? String(val) : Number(val);
  if (field === "ugCgpa10") window.GRE_GRAD_STATE.ugGpa = Number(((window.GRE_GRAD_STATE.ugCgpa10 / 10) * 4.0).toFixed(2));
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
      <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div>
          <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold uppercase">Graduate MS, MEng, PhD &amp; MBA Admissions Command Center</span>
          <h2 class="text-xl font-extrabold text-white mt-1">Stanford, MIT, CMU, Berkeley, ETH &amp; Global MBA GRE Admit Predictor</h2>
          <p class="text-xs text-slate-400">Correlates your Tab 4 Mock performance &amp; Official GRE scores (260–340) with Undergrad CGPA (/10 &rarr; 4.0 GPA) and Research Profile.</p>
          <div class="text-[11px] text-emerald-300 font-semibold mt-1">Mock Correlation Status: ${s.lastMockSummary}</div>
        </div>
        <button type="button" onclick="window.syncGreFromLatestMock()" class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow cursor-pointer">&#8635; Correlate Latest Tab 4 Mock</button>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div class="text-xs font-bold uppercase text-indigo-300">1. Official / Projected GRE Scores (260–340)</div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Quantitative Reasoning (130–170)</span><strong>${s.quant} / 170</strong></div><input type="range" min="130" max="170" value="${s.quant}" oninput="window.updateGreGradField('quant', this.value)" class="w-full accent-indigo-500"></div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Verbal Reasoning (130–170)</span><strong>${s.verbal} / 170</strong></div><input type="range" min="130" max="170" value="${s.verbal}" oninput="window.updateGreGradField('verbal', this.value)" class="w-full accent-indigo-500"></div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Analytical Writing (AWA 0–6)</span><strong>${s.awa.toFixed(1)} / 6.0</strong></div><input type="range" min="3.0" max="6.0" step="0.5" value="${s.awa}" oninput="window.updateGreGradField('awa', this.value)" class="w-full accent-indigo-500"></div>
          <div class="p-2.5 rounded-xl bg-slate-950 border border-indigo-500/30 flex justify-between text-xs"><span class="text-slate-300">Composite GRE:</span><strong class="text-base text-emerald-300">${totalGre} / 340 (Q${s.quant} V${s.verbal})</strong></div>
        </div>
        <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div class="text-xs font-bold uppercase text-indigo-300">2. Undergrad CGPA (/10 &rarr; 4.0 GPA) &amp; Research</div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Undergrad CGPA (10-Pt Scale)</span><strong>${s.ugCgpa10.toFixed(2)} / 10 &rarr; ${s.ugGpa.toFixed(2)} / 4.0 GPA</strong></div><input type="range" min="6.0" max="10.0" step="0.05" value="${s.ugCgpa10}" oninput="window.updateGreGradField('ugCgpa10', this.value)" class="w-full accent-indigo-500"></div>
          <select onchange="window.updateGreGradField('researchTier', this.value)" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-semibold">
            <option value="TIER1_PUB" ${s.researchTier==="TIER1_PUB"?"selected":""}>First-Author Peer-Reviewed Publication (IEEE/ACM/NeurIPS)</option>
            <option value="PUB" ${s.researchTier==="PUB"?"selected":""}>Undergraduate Thesis / Lab Internship / Co-Author</option>
            <option value="INDUSTRY" ${s.researchTier==="INDUSTRY"?"selected":""}>Software / Quant Industry Experience (No Publications)</option>
          </select>
        </div>
        <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div class="text-xs font-bold uppercase text-indigo-300">3. Target Postgraduate Degree</div>
          <select onchange="window.updateGreGradField('degreeGoal', this.value)" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-semibold">
            <option value="MS_CS" ${s.degreeGoal==="MS_CS"?"selected":""}>MS / MEng in Computer Science, AI &amp; Data Science</option>
            <option value="MS_FIN" ${s.degreeGoal==="MS_FIN"?"selected":""}>MS Financial Engineering / Quantitative Finance</option>
            <option value="PHD" ${s.degreeGoal==="PHD"?"selected":""}>Funded PhD Track (Full Tuition Waiver + Stipend)</option>
            <option value="MBA" ${s.degreeGoal==="MBA"?"selected":""}>MBA / PGP via GRE Score</option>
          </select>
          <div class="text-[11px] text-slate-400">Top STEM MS programs enforce strict GRE Quant gates (Q167–Q170) alongside Undergrad CGPA.</div>
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
// POSTGRADUATE AUTH GATE RESCUE: 1ST LOGIN/REGISTER SCREEN + LOGOUT + HEADER SYNC
// ==============================================================================
(function initPostgradAuthGate() {
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");
  const defaultCgpa = exam === "GRE" ? "9.25" : (exam === "GMAT" ? "9.10" : "8.70");
  const defaultWx   = exam === "GMAT" ? "48" : "24";

  function getActiveUser() {
    try {
      const raw = localStorage.getItem("ipm_user") || localStorage.getItem("goalisb_user");
      if (!raw) return null;
      const u = JSON.parse(raw);
      return (u && u.name) ? u : null;
    } catch (e) { return null; }
  }

  window.handlePostgradLogout = function () {
    localStorage.removeItem("ipm_user");
    localStorage.removeItem("goalisb_user");
    localStorage.removeItem("ipm_token");
    window.IPM_USER = null;
    window.location.reload();
  };

  window.openPostgradAuthGate = function (defaultMode) {
    let gate = document.getElementById("pg-auth-gate-overlay");
    if (!gate) {
      gate = document.createElement("div");
      gate.id = "pg-auth-gate-overlay";
      gate.className = "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 overflow-y-auto";
      document.body.appendChild(gate);
    }
    const mode = defaultMode || "REGISTER";
    const examTitle = exam === "GRE" ? "GRE General (260–340 + AWA)" : (exam === "GMAT" ? "GMAT Focus (205–805)" : "CAT 2026 & OMETs (IIM/FMS/XLRI)");
    const secLabel  = exam === "CAT" ? "Class 12 Board % (IIM AR Weight)" : "Work Experience (Months)";
    const secDefault = exam === "CAT" ? "90" : defaultWx;

    gate.innerHTML = `
      <div class="max-w-4xl w-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 border border-slate-200 dark:border-slate-800">
        <div class="md:col-span-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-7 flex flex-col justify-between">
          <div class="space-y-4">
            <span class="text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">${examTitle}</span>
            <h2 class="text-2xl font-extrabold leading-tight">GOALisB ${exam} Postgraduate Master Engine</h2>
            <p class="text-xs text-slate-300 leading-relaxed">Calibrated for MBA, PGP, MiM, MS &amp; PhD Admissions with 260+ PostgreSQL Questions &amp; Diagnostic Scorecards.</p>
            <ul class="space-y-2.5 text-xs text-slate-200 pt-2">
              <li>&#9745; <strong>260+ Postgraduate Questions:</strong> Official PYQs &amp; Chapter Drills</li>
              <li>&#9745; <strong>18 Interactive Trap Clinics:</strong> Adaptive &amp; Negative-Marking Defense</li>
              <li>&#9745; <strong>Admissions &amp; ROI Predictor:</strong> Live Mock-to-Official Score Sync</li>
            </ul>
          </div>
          <div class="text-[11px] text-slate-400 pt-6 border-t border-slate-800">Neon PostgreSQL Encrypted Student Portal</div>
        </div>

        <div class="md:col-span-7 p-7 space-y-4 text-slate-900 dark:text-slate-100">
          <div class="flex gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <button type="button" onclick="window.openPostgradAuthGate('LOGIN')" class="flex-1 py-2 rounded-xl text-xs font-bold ${mode==='LOGIN' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'} cursor-pointer">Student Login</button>
            <button type="button" onclick="window.openPostgradAuthGate('REGISTER')" class="flex-1 py-2 rounded-xl text-xs font-bold ${mode==='REGISTER' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'} cursor-pointer">Fresh Registration (Free Demo)</button>
          </div>

          ${mode === "LOGIN" ? `
            <div class="space-y-3">
              <h3 class="text-lg font-extrabold">Welcome Back, Aspirant</h3>
              <label class="block text-xs"><span class="font-semibold text-slate-500">Registered Email or Mobile</span>
                <input id="pg-login-email" type="text" value="dina.shah@goalisb.com" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs font-semibold">
              </label>
              <label class="block text-xs"><span class="font-semibold text-slate-500">Password</span>
                <input id="pg-login-pass" type="password" value="demo1234" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs">
              </label>
              <button type="button" onclick="window.completePostgradAuth('LOGIN')" class="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold shadow-lg cursor-pointer">Enter Postgraduate Master Engine &rarr;</button>
            </div>
          ` : `
            <div class="space-y-3">
              <h3 class="text-lg font-extrabold">Create Postgraduate Account (Free Demo)</h3>
              <label class="block text-xs"><span class="font-semibold text-slate-500">Candidate Full Name</span>
                <input id="pg-reg-name" type="text" placeholder="e.g. Dina Shah" value="Dina Shah" class="mt-1 w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs font-semibold">
              </label>
              <div class="grid grid-cols-2 gap-3">
                <label class="block text-xs"><span class="font-semibold text-indigo-500">Undergrad CGPA (10-Pt Scale)</span>
                  <input id="pg-reg-cgpa" type="number" step="0.05" min="4" max="10" value="${defaultCgpa}" class="mt-1 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs font-bold">
                </label>
                <label class="block text-xs"><span class="font-semibold text-indigo-500">${secLabel}</span>
                  <input id="pg-reg-sec" type="number" min="0" max="120" value="${secDefault}" class="mt-1 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs font-bold">
                </label>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <label class="block text-xs"><span class="font-semibold text-slate-500">Mobile Number</span>
                  <input id="pg-reg-phone" type="text" placeholder="+91 9876543210" class="mt-1 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs">
                </label>
                <label class="block text-xs"><span class="font-semibold text-slate-500">Email Address</span>
                  <input id="pg-reg-email" type="email" placeholder="aspirant@example.com" class="mt-1 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs">
                </label>
              </div>
              <button type="button" onclick="window.completePostgradAuth('REGISTER')" class="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold shadow-lg cursor-pointer">Activate Free Demo &amp; Sync Profile &rarr;</button>
            </div>
          `}
        </div>
      </div>
    `;
  };

  window.completePostgradAuth = function (mode) {
    const existing = getActiveUser() || {};
    const nameEl = document.getElementById("pg-reg-name");
    const cgpaEl = document.getElementById("pg-reg-cgpa");
    const secEl  = document.getElementById("pg-reg-sec");

    const name = (nameEl && nameEl.value.trim()) || existing.name || "Dina Shah";
    const cgpa = Number((cgpaEl && cgpaEl.value) || existing.ugCgpa10 || defaultCgpa);
    const sec  = Number((secEl && secEl.value) || (exam === "CAT" ? 90 : defaultWx));

    const profile = {
      name,
      tier: "FREE_DEMO",
      ugCgpa10: cgpa,
      ugGpa4: Number(((cgpa / 10) * 4.0).toFixed(2)),
      ugPct: Number(Math.min(100, (cgpa - 0.5) * 10).toFixed(1)),
      classXII: exam === "CAT" ? sec : 90,
      workExMonths: exam === "CAT" ? 24 : sec
    };

    localStorage.setItem("ipm_user", JSON.stringify(profile));
    localStorage.setItem("goalisb_postgrad_profile_v1", JSON.stringify(profile));
    window.IPM_USER = profile;

    const gate = document.getElementById("pg-auth-gate-overlay");
    if (gate) gate.remove();
    if (typeof window.savePostgradProfile === "function") window.savePostgradProfile(profile);
    window.location.reload();
  };

  // Bind top-right 'Free Demo Login / 2-Step Register' button & show Logout button when logged in
  setInterval(() => {
    const user = getActiveUser();
    document.querySelectorAll("button").forEach(btn => {
      const txt = (btn.textContent || "").trim();
      if (/Free Demo Login|2-Step Register/i.test(txt)) {
        if (user) {
          btn.textContent = "Logout";
          btn.className = "px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold cursor-pointer";
          btn.onclick = window.handlePostgradLogout;
        } else {
          btn.onclick = () => window.openPostgradAuthGate("REGISTER");
        }
      } else if (/^Logout$/i.test(txt)) {
        btn.onclick = window.handlePostgradLogout;
      }
    });

    // Show 1st Login/Register gate automatically if no user is signed in
    if (!user && !document.getElementById("pg-auth-gate-overlay")) {
      window.openPostgradAuthGate("REGISTER");
    }
  }, 350);
})();