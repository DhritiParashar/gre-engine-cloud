// ==============================================================================
// GOALisB UNIFIED 7-TAB STREAMLINED ARCHITECTURE (v3 - Persistent 7-Tab & Mode-Reactive Tab 4)
// - Tab 4: Mode-Reactive Proctored Mock (adapts Q count, timer & pool to active Top Mode Pill)
// - Tab 5: Sectional & Sprint Practice Mocks (always visible in header bar)
// - Tab 6: Trap Doctor & AI Doubts
// - Tab 7: Mode-Isolated Target Lock, Sync Mock & Achievement vs. Deficiency
// ==============================================================================
(function () {
  const HOST = (window.location.hostname || "").toLowerCase();
  const TITLE = (document.title || "").toUpperCase();
  const PORTAL = HOST.includes("gmat") || TITLE.includes("GMAT")
    ? "GMAT"
    : (HOST.includes("gre") || TITLE.includes("GRE") ? "GRE" : "CAT");

  function getActiveModeKey() {
    if (PORTAL === "CAT") {
      if (typeof window.detectActiveCatPortalMode === "function") return window.detectActiveCatPortalMode();
      return window._ACTIVE_CAT_MODE || "CAT";
    }
    const idx = Number(window._ACTIVE_MODE_IDX || 0);
    if (PORTAL === "GMAT") return idx === 1 ? "DI_CLINIC" : (idx === 2 ? "SPRINT_705" : "STANDARD");
    return idx === 1 ? "Q170" : (idx === 2 ? "V165" : "STANDARD");
  }

  function getSchema(modeKey) {
    if (PORTAL === "GRE") {
      const configs = {
        STANDARD: {
          key: "goalisb_gre_target_STANDARD_v1",
          badge: "GRE GENERAL STANDARD",
          kicker: "GRE GENERAL 260–340 DIAGNOSTIC ENGINE",
          title: "Section-Adaptive Score & Target Forecaster",
          unit: "GRE Pts",
          fullMinQs: 54,
          bpIndex: 0,
          fullBpTitle: "Full GRE General Section-Adaptive Simulation (54 Qs • 118 Mins)",
          fullBpDesc: "Quant Stage 1 + Hard Stage 2 (27 Qs • 47m) + Verbal Stage 1 + Hard Stage 2 (27 Qs • 41m) + AWA (30m) on the 260–340 scale.",
          fullMins: 118,
          sprints: [
            { id: "GRE_Q", bpIdx: 1, count: 27, mins: 47, sec: "QUANT", tag: "QUANT SECTIONAL • 47 MINS", title: "Quantitative Reasoning QC & PS Sectional (27 Qs • 47m)", desc: "Quantitative Comparison (Choices A–D), 5-Option Problem Solving (A–E) & Data Interpretation (130–170 Scale)." },
            { id: "GRE_V", bpIdx: 2, count: 27, mins: 41, sec: "VERBAL", tag: "VERBAL SECTIONAL • 41 MINS", title: "Verbal Reasoning TC, SE & RC Sectional (27 Qs • 41m)", desc: "1/2/3-Blank Text Completion, 6-Choice Sentence Equivalence pairs & Academic Reading Comp (130–170 Scale)." },
            { id: "GRE_Q170", bpIdx: 3, count: 20, mins: 30, sec: "QUANT", tag: "170 CEILING HARD POOL", title: "Quant 170 Perfection Hard-Stage Sprint (20 Qs • 30m)", desc: "Upper-quartile Hard Stage 2 items: FROZEN QC boundary traps, 3D geometry & normal distributions." },
            { id: "GRE_V165", bpIdx: 4, count: 20, mins: 30, sec: "VERBAL", tag: "165+ VERBAL HARD POOL", title: "Verbal 165+ Contrast & Inference Sprint (20 Qs • 30m)", desc: "Multi-clause logic hinges, subtle SE semantic pairs & dense humanities/science inference passages." }
          ],
          sections: [
            { id: "s1", label: "Quantitative Reasoning (27 Qs • 47m)", min: 130, max: 170, step: 1, def: 167 },
            { id: "s2", label: "Verbal Reasoning (27 Qs • 41m)", min: 130, max: 170, step: 1, def: 163 },
            { id: "s3", label: "Analytical Writing (AWA • 30m)", min: 0, max: 6, step: 0.5, def: 5.0 }
          ]
        },
        Q170: {
          key: "goalisb_gre_target_Q170_v1",
          badge: "QUANT 170 PERFECTION SPRINT",
          kicker: "GRE QUANT 170 CEILING ENGINE (130–170 Q)",
          title: "Quant 170 Perfection Target & Routing Forecaster",
          unit: "GRE Pts",
          fullMinQs: 27,
          bpIndex: 1,
          fullBpTitle: "Quant 170 Perfection Adaptive Simulation (27 Qs • 47 Mins)",
          fullBpDesc: "Stage 1 (12 Qs • 21m) + Hard Stage 2 (15 Qs • 26m) calibrated for 170 Quant ceiling with zero guessing penalty.",
          fullMins: 47,
          sprints: [
            { id: "GRE_Q170", bpIdx: 3, count: 20, mins: 30, sec: "QUANT", tag: "170 HARD POOL • 30 MINS", title: "Quant 170 Perfection Hard-Stage Sprint (20 Qs • 30m)", desc: "Upper-quartile Hard Stage 2 items: FROZEN QC boundary traps, 3D geometry & normal distributions." },
            { id: "GRE_Q", bpIdx: 1, count: 27, mins: 47, sec: "QUANT", tag: "QUANT SECTIONAL • 47 MINS", title: "Quantitative Reasoning QC & PS Sectional (27 Qs • 47m)", desc: "Full 27-question timed Quant simulation on the 130–170 scale." },
            { id: "GRE_V", bpIdx: 2, count: 27, mins: 41, sec: "VERBAL", tag: "VERBAL SECTIONAL • 41 MINS", title: "Verbal Reasoning TC, SE & RC Sectional (27 Qs • 41m)", desc: "Full 27-question timed Verbal simulation on the 130–170 scale." }
          ],
          sections: [
            { id: "s1", label: "Quantitative Reasoning (27 Qs • 47m)", min: 130, max: 170, step: 1, def: 170 },
            { id: "s2", label: "Verbal Reasoning (27 Qs • 41m)", min: 130, max: 170, step: 1, def: 161 },
            { id: "s3", label: "Analytical Writing (AWA • 30m)", min: 0, max: 6, step: 0.5, def: 4.5 }
          ]
        },
        V165: {
          key: "goalisb_gre_target_V165_v1",
          badge: "VERBAL 165+ & AWA 5.5 STUDIO",
          kicker: "GRE VERBAL 165+ & AWA 5.5 ENGINE (130–170 V)",
          title: "Verbal 165+ & AWA 5.5 Target Forecaster",
          unit: "GRE Pts",
          fullMinQs: 27,
          bpIndex: 2,
          fullBpTitle: "Verbal 165+ Adaptive Simulation (27 Qs • 41 Mins)",
          fullBpDesc: "Text Completion, Sentence Equivalence & Reading Comp Stage 1 + Hard Stage 2 calibrated for V165+.",
          fullMins: 41,
          sprints: [
            { id: "GRE_V165", bpIdx: 4, count: 20, mins: 30, sec: "VERBAL", tag: "165+ HARD POOL • 30 MINS", title: "Verbal 165+ Contrast & Inference Sprint (20 Qs • 30m)", desc: "Multi-clause logic hinges, subtle SE semantic pairs & dense humanities/science inference passages." },
            { id: "GRE_V", bpIdx: 2, count: 27, mins: 41, sec: "VERBAL", tag: "VERBAL SECTIONAL • 41 MINS", title: "Verbal Reasoning TC, SE & RC Sectional (27 Qs • 41m)", desc: "Full 27-question timed Verbal simulation on the 130–170 scale." },
            { id: "GRE_Q", bpIdx: 1, count: 27, mins: 47, sec: "QUANT", tag: "QUANT SECTIONAL • 47 MINS", title: "Quantitative Reasoning QC & PS Sectional (27 Qs • 47m)", desc: "Full 27-question timed Quant simulation on the 130–170 scale." }
          ],
          sections: [
            { id: "s1", label: "Quantitative Reasoning (27 Qs • 47m)", min: 130, max: 170, step: 1, def: 163 },
            { id: "s2", label: "Verbal Reasoning (27 Qs • 41m)", min: 130, max: 170, step: 1, def: 166 },
            { id: "s3", label: "Analytical Writing (AWA • 30m)", min: 0, max: 6, step: 0.5, def: 5.5 }
          ]
        }
      }[modeKey] || {};

      return {
        ...configs,
        diffLabel: "Stage-2 Adaptive Routing",
        diffs: [
          { val: "TOUGH", label: "Hard Stage-2 Unlocked (+4 Eq.)", adj: 4 },
          { val: "MODERATE", label: "Standard Adaptive Routing (0 Eq.)", adj: 0 },
          { val: "EASY", label: "Medium Stage-2 Cap (-4 Eq.)", adj: -4 }
        ],
        catLabel: "Target Degree Track",
        cats: [
          { val: "GEN", label: "MS / PhD STEM (CS / EE / DS)", bonus: 0 },
          { val: "EWS", label: "MBA / MiM / MPP Track", bonus: 3 },
          { val: "OBC", label: "Fellowship / Merit Aid Pool", bonus: -2 }
        ],
        computeComposite: (vals, diffAdj) => {
          const raw = Number(vals.s1 || 130) + Number(vals.s2 || 130);
          const eff = Math.min(340, Math.max(260, Math.round(raw + diffAdj)));
          const pct = eff >= 336 ? "99.5 %ile" : (eff >= 332 ? "98.0 %ile" : (eff >= 327 ? "94.5 %ile" : (eff >= 320 ? "85.0 %ile" : (eff >= 310 ? "66.0 %ile" : (eff <= 260 ? "0.0 %ile" : Math.round(((eff - 260) / 80) * 85) + ".0 %ile")))));
          const tier = eff >= 334 ? "MIT / Stanford / UC Berkeley / CMU Tier" : (eff >= 328 ? "Georgia Tech / UIUC / ETH Zurich / Oxford Tier" : (eff >= 320 ? "Top-25 US / European MS & Grad Programs" : "Foundation Rebuild — Target 325+"));
          return { rawDisplay: `${raw} / 340`, eff, effDisplay: `${eff}/340 (AWA ${Number(vals.s3 || 0).toFixed(1)})`, pct, subMeta: `Q${vals.s1} • V${vals.s2} • AWA ${Number(vals.s3 || 0).toFixed(1)}`, tier };
        },
        outcomes: [
          { name: "MIT / Stanford / UC Berkeley / CMU", sub: "Flagship MS / PhD • Target 334+", req: 334 },
          { name: "ETH Zurich / Oxford / Cambridge / UIUC", sub: "Research & Engineering • Target 329+", req: 329 },
          { name: "Georgia Tech / Purdue / Columbia / UCLA", sub: "Competitive Admit Zone • Target 324+", req: 324 },
          { name: "Top-40 Global MS Programs", sub: "Safe Admit Band • Target 316+", req: 316 }
        ],
        ladder: [
          ["334 – 340", "99th %ile", "MIT / Stanford / Berkeley / CMU"],
          ["329 – 333", "96th – 98th %ile", "ETH Zurich / Oxford / UIUC / Michigan"],
          ["323 – 328", "90th – 95th %ile", "Georgia Tech / Columbia / UCLA / UCSD"],
          ["315 – 322", "78th – 89th %ile", "Top-35 STEM & Analytics Programs"]
        ]
      };
    }

    if (PORTAL === "GMAT") {
      const configs = {
        STANDARD: {
          key: "goalisb_gmat_target_STANDARD_v1",
          badge: "GMAT FOCUS STANDARD",
          kicker: "GMAT FOCUS READINESS ENGINE (205–805 SCALE)",
          title: "Score, Percentile & Adaptive Forecaster",
          unit: "Focus Pts",
          fullMinQs: 64,
          bpIndex: 0,
          fullBpTitle: "Full GMAT Focus Official Simulation (64 Qs • 135 Mins)",
          fullBpDesc: "QR (21 Qs • 45m) + VR (23 Qs • 45m) + DI (20 Qs • 45m) on the 205–805 scale with 5 choices (A–E) & up to 3 Review Edits/section.",
          fullMins: 135,
          sprints: [
            { id: "GMAT_QR", bpIdx: 1, count: 21, mins: 45, sec: "QR", tag: "QUANT SECTIONAL • 45 MINS", title: "Quantitative Reasoning (Zero Geometry • 21 Qs • 45m)", desc: "Problem Solving (Choices A–E) across Algebra, Arithmetic, Number Properties & Word Problems (60–90 Scale)." },
            { id: "GMAT_VR", bpIdx: 2, count: 23, mins: 45, sec: "VR", tag: "VERBAL SECTIONAL • 45 MINS", title: "Verbal Reasoning CR & RC Clinic (23 Qs • 45m)", desc: "Zero-Sentence-Correction Critical Reasoning & Analytical Reading Comprehension simulation (60–90 Scale)." },
            { id: "GMAT_DI", bpIdx: 3, count: 20, mins: 45, sec: "DI", tag: "DATA INSIGHTS • 45 MINS", title: "Data Insights Deep Clinic (20 Qs • 45m)", desc: "Data Sufficiency (AD/BCE), Multi-Source Reasoning, Two-Part Analysis & Graphics Interpretation (60–90 Scale)." },
            { id: "GMAT_705", bpIdx: 4, count: 30, mins: 60, sec: "ALL", tag: "99TH %ILE HARD POOL", title: "Target 705+ Elite (99th %ile) Adaptive Sprint (30 Qs • 60m)", desc: "Upper-quartile 705–805 discriminator items engineered to protect early Q1–Q6 adaptive trajectory." }
          ],
          sections: [
            { id: "s1", label: "Quantitative Reasoning (21 Qs • 45m)", min: 60, max: 90, step: 1, def: 85 },
            { id: "s2", label: "Verbal Reasoning (23 Qs • 45m)", min: 60, max: 90, step: 1, def: 84 },
            { id: "s3", label: "Data Insights (20 Qs • 45m)", min: 60, max: 90, step: 1, def: 83 }
          ]
        },
        DI_CLINIC: {
          key: "goalisb_gmat_target_DI_CLINIC_v1",
          badge: "DATA INSIGHTS DEEP CLINIC",
          kicker: "GMAT DATA INSIGHTS (20 Qs • 45 MIN) ENGINE",
          title: "Data Insights & Composite Target Forecaster",
          unit: "Focus Pts",
          fullMinQs: 20,
          bpIndex: 3,
          fullBpTitle: "Data Insights Deep Clinic Simulation (20 Qs • 45 Mins)",
          fullBpDesc: "Data Sufficiency (8 Qs) • Multi-Source Reasoning (6 Qs) • Two-Part & Graphics (6 Qs) on the 60–90 DI scale with on-screen calculator.",
          fullMins: 45,
          sprints: [
            { id: "GMAT_DI", bpIdx: 3, count: 20, mins: 45, sec: "DI", tag: "DATA INSIGHTS • 45 MINS", title: "Data Insights Deep Clinic (20 Qs • 45m)", desc: "Data Sufficiency (AD/BCE), Multi-Source Reasoning, Two-Part Analysis & Graphics Interpretation (60–90 Scale)." },
            { id: "GMAT_QR", bpIdx: 1, count: 21, mins: 45, sec: "QR", tag: "QUANT SECTIONAL • 45 MINS", title: "Quantitative Reasoning (Zero Geometry • 21 Qs • 45m)", desc: "Problem Solving (Choices A–E) across Algebra, Arithmetic & Word Problems (60–90 Scale)." },
            { id: "GMAT_VR", bpIdx: 2, count: 23, mins: 45, sec: "VR", tag: "VERBAL SECTIONAL • 45 MINS", title: "Verbal Reasoning CR & RC Clinic (23 Qs • 45m)", desc: "Critical Reasoning & Analytical Reading Comprehension simulation (60–90 Scale)." }
          ],
          sections: [
            { id: "s1", label: "Quantitative Reasoning (21 Qs • 45m)", min: 60, max: 90, step: 1, def: 84 },
            { id: "s2", label: "Verbal Reasoning (23 Qs • 45m)", min: 60, max: 90, step: 1, def: 83 },
            { id: "s3", label: "Data Insights (20 Qs • 45m)", min: 60, max: 90, step: 1, def: 87 }
          ]
        },
        SPRINT_705: {
          key: "goalisb_gmat_target_SPRINT_705_v1",
          badge: "TARGET 705+ ELITE (99TH %ILE)",
          kicker: "GMAT 705+ M7 / WHARTON ELITE ENGINE (HARD POOL)",
          title: "705+ Elite (99th %ile) Target & Forecaster",
          unit: "Focus Pts",
          fullMinQs: 30,
          bpIndex: 4,
          fullBpTitle: "Target 705+ Elite (99th %ile) Hard-Pool Simulation (30 Qs • 60 Mins)",
          fullBpDesc: "Upper-quartile 705–805 adaptive items (QR 86+ / VR 85+ / DI 85+ band) with max 2.0 mins/Q pacing & zero unanswered blanks.",
          fullMins: 60,
          sprints: [
            { id: "GMAT_705", bpIdx: 4, count: 30, mins: 60, sec: "ALL", tag: "99TH %ILE HARD POOL • 60 MINS", title: "Target 705+ Elite (99th %ile) Adaptive Sprint (30 Qs • 60m)", desc: "Upper-quartile 705–805 discriminator items engineered to protect early Q1–Q6 adaptive trajectory." },
            { id: "GMAT_DI", bpIdx: 3, count: 20, mins: 45, sec: "DI", tag: "DATA INSIGHTS • 45 MINS", title: "Data Insights Deep Clinic (20 Qs • 45m)", desc: "Data Sufficiency (AD/BCE), Multi-Source Reasoning & Two-Part Analysis (60–90 Scale)." },
            { id: "GMAT_QR", bpIdx: 1, count: 21, mins: 45, sec: "QR", tag: "QUANT SECTIONAL • 45 MINS", title: "Quantitative Reasoning (Zero Geometry • 21 Qs • 45m)", desc: "Problem Solving (Choices A–E) across Algebra, Arithmetic & Word Problems (60–90 Scale)." }
          ],
          sections: [
            { id: "s1", label: "Quantitative Reasoning (21 Qs • 45m)", min: 60, max: 90, step: 1, def: 87 },
            { id: "s2", label: "Verbal Reasoning (23 Qs • 45m)", min: 60, max: 90, step: 1, def: 86 },
            { id: "s3", label: "Data Insights (20 Qs • 45m)", min: 60, max: 90, step: 1, def: 85 }
          ]
        }
      }[modeKey] || {};

      return {
        ...configs,
        diffLabel: "Adaptive Pool Calibration",
        diffs: [
          { val: "TOUGH", label: "705+ Hard Adaptive (+15 Eq.)", adj: 15 },
          { val: "MODERATE", label: "Standard GMAC Adaptive (0 Eq.)", adj: 0 },
          { val: "EASY", label: "High-Cutoff Pool (-10 Eq.)", adj: -10 }
        ],
        catLabel: "Applicant Pool",
        cats: [
          { val: "GEN", label: "Indian Male Engineer (Over-Rep)", bonus: 0 },
          { val: "EWS", label: "Indian Non-Eng / Diverse Pool", bonus: 15 },
          { val: "OBC", label: "International / Early Career", bonus: 20 }
        ],
        computeComposite: (vals, diffAdj) => {
          const sum = Number(vals.s1 || 60) + Number(vals.s2 || 60) + Number(vals.s3 || 60);
          const ratio = Math.max(0, Math.min(1, (sum - 180) / 90));
          const base205 = sum <= 180 ? 205 : Math.min(805, Math.max(205, Math.round((205 + ratio * 600 - 5) / 10) * 10 + 5));
          const eff = sum <= 180 ? 205 : Math.min(805, Math.max(205, Math.round((base205 + diffAdj - 5) / 10) * 10 + 5));
          const pct = eff <= 205 ? "0.0 %ile" : (eff >= 735 ? "99.6 %ile" : (eff >= 705 ? "98.8 %ile" : (eff >= 675 ? "95.4 %ile" : (eff >= 645 ? "88.5 %ile" : Math.round(Math.pow(ratio, 0.72) * 100) + ".0 %ile"))));
          const tier = eff >= 715 ? "Harvard / Stanford GSB / Wharton / Sloan Tier" : (eff >= 685 ? "INSEAD / LBS / Booth / Kellogg / ISB PGP Tier" : (eff >= 645 ? "Top-20 Global MBA / IIM EPGP Tier" : "Foundation Rebuild — Protect Q1–Q6 Accuracy"));
          return { rawDisplay: `${base205} / 805`, eff, effDisplay: `${eff}/805`, pct, subMeta: `QR ${vals.s1} • VR ${vals.s2} • DI ${vals.s3} (Sum ${sum}/270)`, tier };
        },
        outcomes: [
          { name: "Harvard / Stanford GSB / Wharton / MIT Sloan", sub: "M7 Flagship MBA • Target 715+", req: 715 },
          { name: "INSEAD / LBS / Chicago Booth / Kellogg", sub: "Global Top-10 MBA • Target 685+", req: 685 },
          { name: "ISB PGP / Duke Fuqua / Ross / Tuck", sub: "Premier Admit Zone • Target 665+", req: 665 },
          { name: "Top-25 US / European MBA Programs", sub: "Competitive Band • Target 645+", req: 645 }
        ],
        ladder: [
          ["715 – 805", "99th+ %ile", "HBS / Stanford GSB / Wharton / MIT Sloan"],
          ["685 – 705", "96th – 98th %ile", "INSEAD / LBS / Booth / Kellogg / Columbia"],
          ["655 – 675", "91st – 95th %ile", "ISB PGP / Tuck / Yale SOM / Ross"],
          ["615 – 645", "78th – 88th %ile", "Top-25 Global MBA & MiM Programs"]
        ]
      };
    }

    // CAT & OMETs (CAT | XAT | NMAT | SNAP)
    const catConfigs = {
      CAT: {
        key: "goalisb_cat_self_target_v1",
        badge: "CAT STANDARD (66 Qs)",
        kicker: "CAT EXAM READINESS ENGINE (198 MARKS SCALE)",
        title: "CAT Score, Percentile & IIM Call Forecaster",
        unit: "Marks",
        fullMinQs: 66,
        bpIndex: 0,
        fullBpTitle: "Full CAT Official Simulation (66 Qs • 120 Mins)",
        fullBpDesc: "VARC (24 Qs • 40m) + DILR (20 Qs • 40m) + QA (22 Qs • 40m) on the 198-mark scale with +3/-1 MCQ & zero-penalty TITA.",
        fullMins: 120,
        sprints: [
          { id: "CAT_VARC", bpIdx: 1, count: 24, mins: 40, sec: "VARC", tag: "VARC SECTIONAL • 40 MINS", title: "CAT VARC Sectional Drill (24 Qs • 40m)", desc: "4 Reading Comprehension passages + 8 Verbal Ability TITA items (+3/-1 MCQ, +3/0 TITA)." },
          { id: "CAT_DILR", bpIdx: 2, count: 20, mins: 40, sec: "DILR", tag: "DILR SECTIONAL • 40 MINS", title: "CAT DILR 4-Caselet Sectional Drill (20 Qs • 40m)", desc: "4 multi-constraint Data Interpretation & Logical Reasoning sets under strict 40-minute timer." },
          { id: "CAT_QA", bpIdx: 3, count: 22, mins: 40, sec: "QUANT", tag: "QA SECTIONAL • 40 MINS", title: "CAT Quantitative Aptitude Sectional Drill (22 Qs • 40m)", desc: "Arithmetic, Algebra, Geometry & Number System (+3/-1 MCQ & TITA)." }
        ],
        sections: [
          { id: "s1", label: "VARC Raw (24 Qs • 40 Mins)", min: 0, max: 72, step: 1, def: 40 },
          { id: "s2", label: "DILR Raw (20 Qs • 40 Mins)", min: 0, max: 60, step: 1, def: 30 },
          { id: "s3", label: "QA Raw (22 Qs • 40 Mins)", min: 0, max: 66, step: 1, def: 33 }
        ],
        diffLabel: "CAT Slot Normalization",
        diffs: [
          { val: "TOUGH", label: "Tough Slot (+8 Scaled Eq.)", adj: 8 },
          { val: "MODERATE", label: "Standard CAT Slot (0 Eq.)", adj: 0 },
          { val: "EASY", label: "High-Cutoff Slot (-7 Scaled Eq.)", adj: -7 }
        ],
        catLabel: "Admission Category",
        cats: [
          { val: "GEN", label: "General (OPEN / GEM)", bonus: 0 },
          { val: "EWS", label: "GEN-EWS", bonus: 6 },
          { val: "OBC", label: "NC-OBC", bonus: 10 },
          { val: "SCST", label: "SC / ST", bonus: 22 }
        ],
        computeComposite: (vals, diffAdj) => {
          const raw = Number(vals.s1 || 0) + Number(vals.s2 || 0) + Number(vals.s3 || 0);
          const eff = Math.min(198, Math.max(0, raw + diffAdj));
          let pct = "0.00 %ile";
          if (eff > 0) {
            if (eff >= 112) pct = "99.85 %ile";
            else if (eff >= 103) pct = "99.50 %ile";
            else if (eff >= 95) pct = "99.00 %ile";
            else if (eff >= 82) pct = "97.50 %ile";
            else if (eff >= 68) pct = "94.50 %ile";
            else if (eff >= 50) pct = "87.00 %ile";
            else pct = (eff * 1.65).toFixed(2) + " %ile";
          }
          const tier = eff >= 105 ? "IIM Ahmedabad / Bangalore / Calcutta Tier" : (eff >= 90 ? "IIM Lucknow / Kozhikode / Indore / FMS Delhi Tier" : (eff >= 72 ? "New & Baby IIMs / MDI Gurgaon / IIFT Tier" : "Foundation Rebuild — Target 95+ Raw"));
          return { rawDisplay: `${raw} / 198`, eff, effDisplay: `${eff}/198`, pct, subMeta: `VARC ${vals.s1}/72 • DILR ${vals.s2}/60 • QA ${vals.s3}/66`, tier };
        },
        outcomes: [
          { name: "IIM Ahmedabad / Bangalore / Calcutta", sub: "BLACKI Flagship • Target 105+ Scaled", req: 105 },
          { name: "IIM Lucknow / Kozhikode / Indore / FMS Delhi", sub: "Tier-1 Calls • Target 92+ Scaled", req: 92 },
          { name: "IIM Mumbai / Shillong / MDI / IIFT Delhi", sub: "Premier MBA • Target 82+ Scaled", req: 82 },
          { name: "CAP IIMs (Udaipur, Trichy, Ranchi, Raipur)", sub: "IIM Admission Zone • Target 70+ Scaled", req: 70 }
        ],
        ladder: [
          ["112+ / 198", "99.8+ %ile", "IIM A / B / C Elite Zone"],
          ["103 – 111", "99.5 %ile", "IIM A / B / C / FMS Delhi"],
          ["95 – 102", "99.0 %ile", "IIM L / K / I / Mumbai / MDI"],
          ["72 – 94", "95.0 – 98.9 %ile", "New IIMs / IIFT / SIBM"]
        ]
      },
      XAT: {
        key: "goalisb_xat_self_target_v1",
        badge: "XAT & DECISION MAKING",
        kicker: "XAT & DECISION MAKING ENGINE (75 MARKS SCALE)",
        title: "XAT Score, Percentile & XLRI Forecaster",
        unit: "Marks",
        fullMinQs: 75,
        bpIndex: 0,
        fullBpTitle: "Full XAT Official Simulation (75 Qs • 165 Mins)",
        fullBpDesc: "VALR (26 Qs) + Decision Making (21 Qs) + QADI (28 Qs) with 5 choices (A–E) & +1/-0.25 marking.",
        fullMins: 165,
        sprints: [
          { id: "XAT_DM", bpIdx: 1, count: 21, mins: 50, sec: "DILR", tag: "DECISION MAKING • 50 MINS", title: "XAT Decision Making Caselet Sprint (21 Qs • 50m)", desc: "Ethical dilemmas, business trade-offs & stakeholder prioritization (5 choices A–E)." },
          { id: "XAT_VALR", bpIdx: 2, count: 26, mins: 55, sec: "VARC", tag: "VALR SECTIONAL • 55 MINS", title: "XAT Verbal & Logical Reasoning Drill (26 Qs • 55m)", desc: "Abstract RC, Poem comprehension, Critical Reasoning & Grammar (+1/-0.25)." },
          { id: "XAT_QADI", bpIdx: 3, count: 28, mins: 60, sec: "QUANT", tag: "QADI SECTIONAL • 60 MINS", title: "XAT Quantitative & Data Interpretation Drill (28 Qs • 60m)", desc: "High-difficulty Geometry, Functions, Probability & Multi-chart DI (+1/-0.25)." }
        ],
        sections: [
          { id: "s1", label: "VALR (26 Qs • +1/-0.25)", min: 0, max: 26, step: 1, def: 14 },
          { id: "s2", label: "Decision Making (21 Qs • +1/-0.25)", min: 0, max: 21, step: 1, def: 12 },
          { id: "s3", label: "QADI (28 Qs • +1/-0.25)", min: 0, max: 28, step: 1, def: 14 }
        ],
        diffLabel: "Paper Difficulty Calibration",
        diffs: [
          { val: "TOUGH", label: "Tough XAT Paper (+4 Eq.)", adj: 4 },
          { val: "MODERATE", label: "Standard XAT Paper (0 Eq.)", adj: 0 },
          { val: "EASY", label: "High-Cutoff Paper (-3 Eq.)", adj: -3 }
        ],
        catLabel: "XLRI Program Track",
        cats: [
          { val: "GEN", label: "XLRI Jamshedpur BM (Male)", bonus: 0 },
          { val: "EWS", label: "XLRI Jamshedpur HRM / Female", bonus: 3 },
          { val: "OBC", label: "XIMB / IMT / TAPMI Pool", bonus: 6 }
        ],
        computeComposite: (vals, diffAdj) => {
          const raw = Number(vals.s1 || 0) + Number(vals.s2 || 0) + Number(vals.s3 || 0);
          const eff = Math.min(75, Math.max(0, raw + diffAdj));
          const pct = eff <= 0 ? "0.00 %ile" : (eff >= 42 ? "99.5+ %ile" : (eff >= 36 ? "98.2 %ile" : (eff >= 31 ? "95.0 %ile" : Math.round((eff / 75) * 140) + ".0 %ile")));
          const tier = eff >= 38 ? "XLRI Jamshedpur BM & HRM Direct Call" : (eff >= 33 ? "XLRI HRM / Delhi NCR & XIMB BM" : "IMT Ghaziabad / IMI / TAPMI Tier");
          return { rawDisplay: `${raw} / 75`, eff, effDisplay: `${eff}/75`, pct, subMeta: `VALR ${vals.s1} • DM ${vals.s2} • QADI ${vals.s3}`, tier };
        },
        outcomes: [
          { name: "XLRI Jamshedpur — Business Management (BM)", sub: "Flagship • Target 38+", req: 38 },
          { name: "XLRI Jamshedpur — Human Resource Mgmt (HRM)", sub: "Flagship • Target 35+", req: 35 },
          { name: "XLRI Delhi-NCR & XIMB Bhubaneswar", sub: "Tier-1 • Target 32+", req: 32 },
          { name: "IMT Ghaziabad / IMI New Delhi / GIM", sub: "Top PGDM • Target 28+", req: 28 }
        ],
        ladder: [
          ["40+ / 75", "99.2+ %ile", "XLRI Jamshedpur BM & HRM Elite"],
          ["35 – 39", "96.5 – 99.1 %ile", "XLRI HRM & XLRI Delhi BM"],
          ["30 – 34", "92.0 – 96.4 %ile", "XIMB / IMT Ghaziabad / IMI"],
          ["25 – 29", "85.0 – 91.9 %ile", "TAPMI / GIM / Great Lakes"]
        ]
      },
      NMAT: {
        key: "goalisb_nmat_self_target_v1",
        badge: "NMAT ADAPTIVE",
        kicker: "NMAT ADAPTIVE ENGINE (120–360 SCALE)",
        title: "NMAT Scaled Score & NMIMS Forecaster",
        unit: "Scaled Pts",
        fullMinQs: 108,
        bpIndex: 0,
        fullBpTitle: "Full NMAT Adaptive Simulation (108 Qs • 120 Mins)",
        fullBpDesc: "Language Skills (36 Qs • 28m) + Logical Reasoning (36 Qs • 40m) + Quant Skills (36 Qs • 52m) with zero negative marking.",
        fullMins: 120,
        sprints: [
          { id: "NMAT_LS", bpIdx: 1, count: 36, mins: 28, sec: "VARC", tag: "LANGUAGE SKILLS • 28 MINS", title: "NMAT Language Skills Speed Drill (36 Qs • 28m)", desc: "46 seconds/question vocabulary analogies, grammar & RC sprint (zero negative marking)." },
          { id: "NMAT_LR", bpIdx: 2, count: 36, mins: 40, sec: "DILR", tag: "LOGICAL REASONING • 40 MINS", title: "NMAT Logical Reasoning Sprint (36 Qs • 40m)", desc: "Critical reasoning, input-output, arrangements & syllogisms under strict 40m timer." },
          { id: "NMAT_QS", bpIdx: 3, count: 36, mins: 52, sec: "QUANT", tag: "QUANT SKILLS • 52 MINS", title: "NMAT Quantitative Skills Sprint (36 Qs • 52m)", desc: "Arithmetic, Modern Math & Data Sufficiency with 100% completion sweep." }
        ],
        sections: [
          { id: "s1", label: "Language Skills (36 Qs • 28m)", min: 0, max: 36, step: 1, def: 26 },
          { id: "s2", label: "Logical Reasoning (36 Qs • 40m)", min: 0, max: 36, step: 1, def: 25 },
          { id: "s3", label: "Quantitative Skills (36 Qs • 52m)", min: 0, max: 36, step: 1, def: 25 }
        ],
        diffLabel: "Adaptive Window Difficulty",
        diffs: [
          { val: "TOUGH", label: "Tough Adaptive Window (+12 Eq.)", adj: 12 },
          { val: "MODERATE", label: "Standard GMAC Window (0 Eq.)", adj: 0 },
          { val: "EASY", label: "High-Cutoff Window (-8 Eq.)", adj: -8 }
        ],
        catLabel: "Target Campus Track",
        cats: [
          { val: "GEN", label: "NMIMS Mumbai MBA Core", bonus: 0 },
          { val: "EWS", label: "NMIMS Mumbai HR / BA", bonus: 8 },
          { val: "OBC", label: "NMIMS Bangalore / Hyderabad", bonus: 16 }
        ],
        computeComposite: (vals, diffAdj) => {
          const sum = Number(vals.s1 || 0) + Number(vals.s2 || 0) + Number(vals.s3 || 0);
          const rawScaled = Math.round(120 + (sum / 108) * 240);
          const eff = Math.min(360, Math.max(120, rawScaled + diffAdj));
          const pct = eff <= 120 ? "0.0 %ile" : (eff >= 250 ? "99.2 %ile" : (eff >= 235 ? "96.5 %ile" : (eff >= 220 ? "91.0 %ile" : Math.round(((eff - 120) / 240) * 100) + ".0 %ile")));
          const tier = eff >= 242 ? "NMIMS Mumbai MBA Core Direct Call" : (eff >= 230 ? "NMIMS Mumbai HR / Digital Transformation" : "NMIMS Bangalore / Hyderabad / TAPMI Tier");
          return { rawDisplay: `${rawScaled} / 360`, eff, effDisplay: `${eff}/360`, pct, subMeta: `Raw ${sum}/108 (LS ${vals.s1} • LR ${vals.s2} • QS ${vals.s3})`, tier };
        },
        outcomes: [
          { name: "NMIMS Mumbai — MBA Core", sub: "Sectional Floors 76+ • Target 242+", req: 242 },
          { name: "NMIMS Mumbai — MBA HR & Business Analytics", sub: "Flagship • Target 232+", req: 232 },
          { name: "NMIMS Bangalore & Hyderabad", sub: "Tier-1 • Target 222+", req: 222 },
          { name: "TAPMI Manipal / KJ Somaiya / SDA Bocconi", sub: "Competitive • Target 210+", req: 210 }
        ],
        ladder: [
          ["248 – 360", "99.0+ %ile", "NMIMS Mumbai MBA Core + Merit"],
          ["235 – 247", "96.0 – 98.9 %ile", "NMIMS Mumbai Core / HR"],
          ["220 – 234", "90.0 – 95.9 %ile", "NMIMS Bangalore / Hyderabad"],
          ["205 – 219", "82.0 – 89.9 %ile", "KJ Somaiya / TAPMI / XIMB-HR"]
        ]
      },
      SNAP: {
        key: "goalisb_snap_self_target_v1",
        badge: "SNAP SPEED SPRINT",
        kicker: "SNAP SPEED SPRINT ENGINE (60 MARKS SCALE)",
        title: "SNAP Scaled Score & SIBM / SCMHRD Forecaster",
        unit: "Marks",
        fullMinQs: 60,
        bpIndex: 0,
        fullBpTitle: "Full SNAP Speed Simulation (60 Qs • 60 Mins)",
        fullBpDesc: "General English (15 Qs) + Analytical & LR (25 Qs) + QA, DI & DS (20 Qs) at 1.0 min/question (+1/-0.25).",
        fullMins: 60,
        sprints: [
          { id: "SNAP_LR", bpIdx: 1, count: 25, mins: 25, sec: "DILR", tag: "HIGH-WEIGHTAGE LR • 25 MINS", title: "SNAP Analytical & Logical Reasoning Sprint (25 Qs • 25m)", desc: "Clocks, Calendars, Coding-Decoding, Blood Relations & Series at 60s/Q." },
          { id: "SNAP_QA", bpIdx: 2, count: 20, mins: 22, sec: "QUANT", tag: "QA, DI & DS • 22 MINS", title: "SNAP Quant, DI & Data Sufficiency Sprint (20 Qs • 22m)", desc: "Fast ratio arithmetic, percentages & single-chart DI (+1/-0.25)." },
          { id: "SNAP_GE", bpIdx: 3, count: 15, mins: 13, sec: "VARC", tag: "GENERAL ENGLISH • 13 MINS", title: "SNAP General English & Grammar Sprint (15 Qs • 13m)", desc: "Idioms, prepositions, figures of speech & verbal analogies." }
        ],
        sections: [
          { id: "s1", label: "General English (15 Qs • +1/-0.25)", min: 0, max: 15, step: 1, def: 12 },
          { id: "s2", label: "Analytical & LR (25 Qs • +1/-0.25)", min: 0, max: 25, step: 1, def: 20 },
          { id: "s3", label: "QA, DI & DS (20 Qs • +1/-0.25)", min: 0, max: 20, step: 1, def: 14 }
        ],
        diffLabel: "SNAP Test Slot Difficulty",
        diffs: [
          { val: "TOUGH", label: "Tough SNAP Slot (+3 Eq.)", adj: 3 },
          { val: "MODERATE", label: "Standard SNAP Slot (0 Eq.)", adj: 0 },
          { val: "EASY", label: "High-Speed Slot (-2 Eq.)", adj: -2 }
        ],
        catLabel: "Symbiosis Category",
        cats: [
          { val: "GEN", label: "General (OPEN)", bonus: 0 },
          { val: "EWS", label: "Differently Abled / KM", bonus: 4 },
          { val: "OBC", label: "SC / ST Quota", bonus: 8 }
        ],
        computeComposite: (vals, diffAdj) => {
          const raw = Number(vals.s1 || 0) + Number(vals.s2 || 0) + Number(vals.s3 || 0);
          const eff = Math.min(60, Math.max(0, raw + diffAdj));
          const pct = eff <= 0 ? "0.00 %ile" : (eff >= 45 ? "99.3 %ile" : (eff >= 42 ? "98.5 %ile" : (eff >= 38 ? "95.0 %ile" : Math.round((eff / 60) * 125) + ".0 %ile")));
          const tier = eff >= 44 ? "SIBM Pune & SCMHRD Pune Direct Call" : (eff >= 39 ? "SIIB Pune & SIBM Bangalore Tier" : "SIOM Nashik / SITM Pune Tier");
          return { rawDisplay: `${raw} / 60`, eff, effDisplay: `${eff}/60`, pct, subMeta: `GE ${vals.s1}/15 • LR ${vals.s2}/25 • QA ${vals.s3}/20`, tier };
        },
        outcomes: [
          { name: "SIBM Pune — MBA Flagship", sub: "98.5+ %ile Cutoff • Target 44+", req: 44 },
          { name: "SCMHRD Pune — MBA Core & HR", sub: "97.5+ %ile Cutoff • Target 42+", req: 42 },
          { name: "SIIB Pune & SIBM Bangalore", sub: "93+ %ile Cutoff • Target 38+", req: 38 },
          { name: "SIOM Nashik / SIDTM Pune", sub: "88+ %ile Cutoff • Target 34+", req: 34 }
        ],
        ladder: [
          ["45.0 – 60.0", "99.2+ %ile", "SIBM Pune Elite Call"],
          ["42.0 – 44.5", "98.0 – 99.1 %ile", "SIBM Pune & SCMHRD Pune"],
          ["38.0 – 41.5", "94.0 – 97.9 %ile", "SIIB Pune & SIBM Bangalore"],
          ["34.0 – 37.5", "88.0 – 93.9 %ile", "SIOM Nashik / SIDTM Pune"]
        ]
      }
    };
    return catConfigs[modeKey] || catConfigs.CAT;
  }

  // ----------------------------------------------------------------------------
  // TAB 4: MODE-REACTIVE PROCTORED MOCK LAUNCHER (ADAPTS TO TOP MODE PILL)
  // ----------------------------------------------------------------------------
  window.renderStreamlinedTab4 = function (el) {
    const target = el || document.getElementById("main-workspace") || document.getElementById("tab-content");
    if (!target) return;
    const modeKey = getActiveModeKey();
    const schema = getSchema(modeKey);
    const nextSerial = `${modeKey === "STANDARD" ? PORTAL : modeKey}-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const rawHist = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]");
    const modeLogs = rawHist.filter(h => {
      if (!h || Number(h.score || 0) <= 0) return false;
      if (PORTAL === "CAT" && typeof window.classifyMockEntryMode === "function") {
        return window.classifyMockEntryMode(h) === modeKey && (Number(h.maxScore || 0) >= schema.fullMinQs || String(h.blueprint || "").toLowerCase().includes("full"));
      }
      return Number(h.maxScore || 0) >= schema.fullMinQs || String(h.blueprint || "").toLowerCase().includes("full");
    });

    const bpIdx = Number(schema.bpIndex || 0);
    const launchFn = PORTAL === "GRE"
      ? `window.startGreProctoredMock(${bpIdx}, '${nextSerial}')`
      : (PORTAL === "GMAT"
        ? `window.startGmatProctoredMock(${bpIdx}, '${nextSerial}')`
        : `window._SELECTED_MOCK_BP=0; window.fetchNewRandomMock()`);

    target.innerHTML = `
      <div class="max-w-7xl mx-auto pt-4 pb-8 space-y-5">
        <div id="${PORTAL === "GRE" ? "gre-mock-stage" : (PORTAL === "GMAT" ? "gmat-mock-stage" : "cat-mock-stage")}" class="bg-white dark:bg-slate-900 border-2 border-indigo-500/30 rounded-2xl p-6 shadow-sm space-y-5">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="space-y-1">
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-extrabold uppercase">${schema.badge} &bull; MODE-CORRELATED PROCTORED SIMULATION</span>
                <span class="text-xs font-mono text-slate-500">Next Serial ID: <strong>${nextSerial}</strong></span>
              </div>
              <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white">${schema.fullBpTitle}</h2>
              <p class="text-xs text-slate-500">${schema.fullBpDesc}</p>
            </div>
            <div class="flex flex-wrap items-center gap-2.5">
              <button type="button" onclick="window.selectUnifiedTab(5)"
                class="px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-extrabold cursor-pointer">
                Sectional &amp; Sprint Mocks (Tab 5) &rarr;
              </button>
              <button type="button" onclick="${launchFn}"
                class="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-extrabold shadow-lg cursor-pointer">
                &#9654; Start Proctored Mock (${schema.fullMinQs} Qs &bull; ${schema.fullMins} Mins)
              </button>
            </div>
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <div class="text-[10px] font-extrabold uppercase text-slate-400">QUESTION COUNT</div>
              <div class="text-base font-extrabold text-slate-900 dark:text-white mt-1">${schema.fullMinQs} Questions</div>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <div class="text-[10px] font-extrabold uppercase text-slate-400">PROCTORED CLOCK</div>
              <div class="text-base font-extrabold text-amber-600 mt-1">${schema.fullMins}:00 Minutes (Paused)</div>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <div class="text-[10px] font-extrabold uppercase text-slate-400">ACTIVE MODE TRACK</div>
              <div class="text-base font-extrabold text-emerald-600 mt-1">${schema.badge}</div>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <div class="text-[10px] font-extrabold uppercase text-slate-400">LOGGED MOCKS (${modeKey})</div>
              <div class="text-base font-extrabold text-indigo-600 mt-1">${modeLogs.length} Mock(s)</div>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 class="text-sm font-extrabold text-slate-900 dark:text-white">${schema.badge} Official Mock Ledger (${modeLogs.length} Logged)</h3>
              <p class="text-[11px] text-slate-500">Synchronized with <strong>Tab 7 Target &amp; Deficiency Forecaster</strong> for ${schema.badge}.</p>
            </div>
            <button type="button" onclick="window.selectUnifiedTab(7)" class="px-3.5 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-extrabold cursor-pointer">Open Tab 7 Target Forecaster &rarr;</button>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="text-[10px] font-extrabold uppercase text-slate-400 bg-slate-50 dark:bg-slate-950">
                  <th class="py-2 px-3">Serial Mock ID</th>
                  <th class="py-2 px-3">Date &amp; Time</th>
                  <th class="py-2 px-3">Simulation Blueprint</th>
                  <th class="py-2 px-3">Score</th>
                  <th class="py-2 px-3">Accuracy</th>
                </tr>
              </thead>
              <tbody>
                ${modeLogs.length ? modeLogs.map(h => `
                  <tr class="border-t border-slate-200 dark:border-slate-800 text-xs">
                    <td class="py-2.5 px-3 font-mono font-extrabold text-indigo-600">${h.serialId}</td>
                    <td class="py-2.5 px-3 text-slate-500">${h.date || ""} ${h.time || ""}</td>
                    <td class="py-2.5 px-3 font-bold">${h.blueprint}</td>
                    <td class="py-2.5 px-3 font-extrabold text-emerald-600">${h.score} / ${h.maxScore}</td>
                    <td class="py-2.5 px-3 font-bold">${h.accuracy}%</td>
                  </tr>
                `).join("") : `<tr><td colspan="5" class="py-5 text-center text-xs text-slate-400">No ${schema.fullMinQs}-Question simulations logged yet for <strong>${schema.badge}</strong>. Click <strong>Start Proctored Mock</strong> above to launch.</td></tr>`}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  };

  // ----------------------------------------------------------------------------
  // TAB 5: SECTIONAL & SPRINT PRACTICE MOCKS (VISIBLE IN HEADER NAV)
  // ----------------------------------------------------------------------------
  window._PRACTICE_SPRINT_IDX = 0;
  window.renderPracticeMocksTab5 = function (el) {
    const target = el || document.getElementById("main-workspace") || document.getElementById("tab-content");
    if (!target) return;
    const modeKey = getActiveModeKey();
    const schema = getSchema(modeKey);
    const sprints = schema.sprints || [];
    const idx = Math.min(sprints.length - 1, Math.max(0, Number(window._PRACTICE_SPRINT_IDX || 0)));
    const sp = sprints[idx];
    const serialId = `PRAC-${modeKey}-${Math.floor(1000 + Math.random() * 9000)}`;

    const startPracticeFn = PORTAL === "GRE"
      ? `window.startGreProctoredMock(${sp.bpIdx || 1}, '${serialId}')`
      : (PORTAL === "GMAT"
        ? `window.startGmatProctoredMock(${sp.bpIdx || 1}, '${serialId}')`
        : `window.MOCK_PAPER_TYPE='${sp.sec === "VARC" ? "VARC_SPRINT" : (sp.sec === "DILR" ? "DILR_SPRINT" : "QUANT_SPRINT")}'; window.fetchNewRandomMock()`);

    target.innerHTML = `
      <div class="max-w-7xl mx-auto pt-4 pb-8 space-y-5">
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-3 shadow-sm">
          <div>
            <span class="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold uppercase">${schema.badge} &bull; SECTIONAL &amp; SPRINT PRACTICE LAB</span>
            <h2 class="text-xl font-extrabold text-slate-900 dark:text-white mt-1">Timed Sectional &amp; Speed Sprints (Excluded from Tab 7 Forecaster)</h2>
            <p class="text-xs text-slate-500">Drill individual sections or high-difficulty pools under real timers with instant scorecards &amp; PDF solutions without skewing your Tab 7 baseline.</p>
          </div>
          <button type="button" onclick="window.selectUnifiedTab(4)" class="px-4 py-2.5 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-extrabold cursor-pointer">
            &larr; Go to Proctored Mock (Tab 4)
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(4, sprints.length)} gap-3">
          ${sprints.map((item, i) => `
            <button type="button" onclick="window._PRACTICE_SPRINT_IDX=${i}; window.renderPracticeMocksTab5();"
              class="text-left p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between ${i === idx
                ? "bg-indigo-50/90 dark:bg-indigo-950/60 border-indigo-500 ring-2 ring-indigo-500/20 shadow-sm"
                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-300"}">
              <div>
                <div class="text-[10px] font-extrabold uppercase text-indigo-600">${item.tag}</div>
                <div class="text-sm font-extrabold text-slate-900 dark:text-white mt-1">${item.title}</div>
                <p class="text-[11px] text-slate-500 mt-1.5">${item.desc}</p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-indigo-600">
                <span>${item.count} Qs &bull; ${item.mins}m</span>
                <span>${i === idx ? "Selected ✓" : "Select →"}</span>
              </div>
            </button>
          `).join("")}
        </div>

        <div id="${PORTAL === "GRE" ? "gre-mock-stage" : (PORTAL === "GMAT" ? "gmat-mock-stage" : "cat-practice-stage")}" class="bg-white dark:bg-slate-900 border-2 border-amber-500/30 rounded-2xl p-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="text-[10px] font-extrabold uppercase text-amber-600">${sp.tag} &bull; PRACTICE SESSION ID: ${serialId}</div>
            <h3 class="text-xl font-extrabold text-slate-900 dark:text-white">${sp.title}</h3>
            <p class="text-xs text-slate-500">${sp.desc}</p>
          </div>
          <button type="button" onclick="${startPracticeFn}"
            class="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-extrabold shadow-lg cursor-pointer">
            &#9654; Start Practice Sprint (${sp.count} Qs &bull; ${sp.mins} Mins)
          </button>
        </div>
      </div>
    `;
  };

  // ----------------------------------------------------------------------------
  // TAB 7: MODE-ISOLATED TARGET LOCK & ACHIEVEMENT VS. DEFICIENCY FORECASTER
  // ----------------------------------------------------------------------------
  function loadTarget(schema) {
    const def = { s1: schema.sections[0].def, s2: schema.sections[1].def, s3: schema.sections[2].def, diff: "MODERATE", cat: "GEN" };
    try {
      const raw = JSON.parse(localStorage.getItem(schema.key) || "null");
      if (raw && typeof raw === "object") return { ...def, ...raw };
    } catch (_) {}
    return def;
  }

  function saveTarget(schema, obj) {
    try { localStorage.setItem(schema.key, JSON.stringify(obj)); } catch (_) {}
  }

  function getFullMocksForMode(modeKey, schema) {
    try {
      const raw = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]");
      if (!Array.isArray(raw)) return [];
      return raw.filter(h => {
        if (!h || Number(h.score || 0) <= 0) return false;
        if (PORTAL === "CAT" && typeof window.classifyMockEntryMode === "function") {
          return window.classifyMockEntryMode(h) === modeKey && (Number(h.maxScore || 0) >= schema.fullMinQs || String(h.blueprint || "").toLowerCase().includes("full"));
        }
        return Number(h.maxScore || 0) >= schema.fullMinQs || String(h.blueprint || "").toLowerCase().includes("full");
      });
    } catch (_) { return []; }
  }

  function extractMockSectionValues(rec, schema) {
    if (!rec) return null;
    if (PORTAL === "GRE") {
      const ratio = Math.max(0, Math.min(1, Number(rec.score || 0) / Math.max(1, Number(rec.maxScore || 54))));
      const savedAwa = JSON.parse(localStorage.getItem("gre_awa_latest_v1") || "null");
      return {
        s1: Math.min(170, Math.max(130, Number(rec.quant170 || Math.round(130 + ratio * 40)))),
        s2: Math.min(170, Math.max(130, Number(rec.verbal170 || Math.round(130 + ratio * 38)))),
        s3: savedAwa ? Number(savedAwa.score) : Number(rec.awaScore || 4.5)
      };
    }
    if (PORTAL === "GMAT") {
      const ratio = Math.max(0, Math.min(1, Number(rec.score || 0) / Math.max(1, Number(rec.maxScore || 64))));
      const sec = Math.min(90, Math.max(60, Math.round(60 + ratio * 30)));
      return { s1: sec, s2: sec, s3: Math.max(60, sec - 1) };
    }
    const ratio = Math.max(0, Math.min(1, Number(rec.score || 0) / Math.max(1, Number(rec.maxScore || schema.fullMinQs))));
    return {
      s1: Math.round(schema.sections[0].max * ratio),
      s2: Math.round(schema.sections[1].max * ratio),
      s3: Math.round(schema.sections[2].max * ratio)
    };
  }

  window._MBA_T7_MODE = "TARGET";
  window._MBA_T7_STATE = {};
  window._MBA_T7_MSG = "";
  window._MBA_T7_SYNCED_ID = null;

  function getActiveState(modeKey, schema) {
    if (!window._MBA_T7_STATE[modeKey]) {
      window._MBA_T7_STATE[modeKey] = loadTarget(schema);
    }
    return window._MBA_T7_STATE[modeKey];
  }

  window.mbaCommitTarget = function () {
    const modeKey = getActiveModeKey();
    const schema = getSchema(modeKey);
    saveTarget(schema, { ...getActiveState(modeKey, schema) });
    window._MBA_T7_MODE = "TARGET";
    window._MBA_T7_MSG = "Target Locked for " + schema.badge + " (" + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + ")";
    window.renderStreamlinedTab7();
  };

  window.mbaResetTarget = function () {
    const modeKey = getActiveModeKey();
    const schema = getSchema(modeKey);
    window._MBA_T7_STATE[modeKey] = { ...loadTarget(schema) };
    window._MBA_T7_MODE = "TARGET";
    window._MBA_T7_MSG = "Restored Locked Target (" + schema.badge + ")";
    window.renderStreamlinedTab7();
  };

  window.mbaSyncMock = function () {
    const modeKey = getActiveModeKey();
    const schema = getSchema(modeKey);
    const mocks = getFullMocksForMode(modeKey, schema);
    if (!mocks.length) {
      alert(`No completed ${schema.badge} Mock found in Tab 4 yet. Complete a Tab 4 Mock first.`);
      return;
    }
    const vals = extractMockSectionValues(mocks[0], schema);
    const st = getActiveState(modeKey, schema);
    st.s1 = vals.s1; st.s2 = vals.s2; st.s3 = vals.s3;
    window._MBA_T7_SYNCED_ID = mocks[0].serialId || modeKey;
    window._MBA_T7_MODE = "VERIFIED";
    window._MBA_T7_MSG = "";
    window.renderStreamlinedTab7();
  };

  window.mbaSliderInput = function (secId, rawVal) {
    const modeKey = getActiveModeKey();
    const schema = getSchema(modeKey);
    const sec = schema.sections.find(x => x.id === secId);
    if (!sec) return;
    const v = Math.min(sec.max, Math.max(sec.min, Number(rawVal) || sec.min));
    const st = getActiveState(modeKey, schema);
    st[secId] = v;
    if (window._MBA_T7_MODE === "VERIFIED") {
      window._MBA_T7_MODE = "TARGET";
      const b = document.getElementById("mba-mode-badge");
      if (b) {
        b.textContent = "MODE: DESIRED SELF-TARGET (" + schema.badge + ")";
        b.style.background = "#e0e7ff";
        b.style.color = "#3730a3";
      }
    }
    const rEl = document.getElementById("mba-rng-" + secId);
    const nEl = document.getElementById("mba-num-" + secId);
    if (rEl && Number(rEl.value) !== v) rEl.value = v;
    if (nEl && Number(nEl.value) !== v) nEl.value = v;
    window.updateStreamlinedTab7Readout();
  };

  window.mbaSelectDiff = function (v) {
    const modeKey = getActiveModeKey();
    getActiveState(modeKey, getSchema(modeKey)).diff = v;
    window.updateStreamlinedTab7Readout();
  };

  window.mbaSelectCat = function (v) {
    const modeKey = getActiveModeKey();
    getActiveState(modeKey, getSchema(modeKey)).cat = v;
    window.updateStreamlinedTab7Readout();
  };

  window.updateStreamlinedTab7Readout = function () {
    const out = document.getElementById("mba-t7-results");
    if (!out) return;
    const modeKey = getActiveModeKey();
    const schema = getSchema(modeKey);
    const st = getActiveState(modeKey, schema);
    const locked = loadTarget(schema);
    const mocks = getFullMocksForMode(modeKey, schema);
    const latestMock = mocks[0] || null;
    const actualVals = extractMockSectionValues(latestMock, schema);
    const isTargetMode = (window._MBA_T7_MODE !== "VERIFIED");

    const diffObj = schema.diffs.find(d => d.val === st.diff) || schema.diffs[1];
    const catObj = schema.cats.find(c => c.val === st.cat) || schema.cats[0];
    const curComp = schema.computeComposite(st, diffObj.adj);
    const lockedComp = schema.computeComposite(locked, 0);
    const actualComp = actualVals ? schema.computeComposite(actualVals, 0) : null;
    const quotaEff = curComp.eff + catObj.bonus;
    const totalDeficiency = actualComp ? (lockedComp.eff - actualComp.eff) : null;

    out.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div style="padding:16px;border-radius:16px;background:${isTargetMode ? "#eef2ff" : "#ecfdf5"};border:1px solid ${isTargetMode ? "#c7d2fe" : "#a7f3d0"};">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:${isTargetMode ? "#4338ca" : "#047857"};">${isTargetMode ? "Target Preview (" + schema.badge + ")" : "Actual Verified Score"}</div>
          <div style="font-size:22px;font-weight:900;color:#0f172a;margin-top:2px;">${curComp.rawDisplay}</div>
          <div style="font-size:11px;font-weight:700;color:${isTargetMode ? "#4338ca" : "#047857"};margin-top:2px;">Calibrated: ${curComp.effDisplay}</div>
        </div>
        <div style="padding:16px;border-radius:16px;background:#ecfdf5;border:1px solid #a7f3d0;">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:#047857;">${isTargetMode ? "Tentative Expected Percentile" : "Actual Projected Percentile"}</div>
          <div style="font-size:22px;font-weight:900;color:#064e3b;margin-top:2px;">${curComp.pct}</div>
          <div style="font-size:11px;font-weight:700;color:#047857;margin-top:2px;">${curComp.subMeta}</div>
        </div>
        <div style="padding:16px;border-radius:16px;background:#f8fafc;border:1px solid #cbd5e1;">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:#475569;">${isTargetMode ? "Expected Admit Tier" : "Actual Admit Tier"} (${catObj.val})</div>
          <div style="font-size:12px;font-weight:800;color:#0f172a;margin-top:4px;line-height:1.35;">${curComp.tier}</div>
        </div>
      </div>

      <div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:16px;padding:16px;">
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:8px;margin-bottom:10px;">
          <div>
            <div style="font-size:11px;font-weight:800;color:#4338ca;text-transform:uppercase;">ACHIEVEMENT VS. DEFICIENCY REMAINING MATRIX (${schema.badge})</div>
            <div style="font-size:11px;color:#475569;">${latestMock
              ? `Locked Target (<strong>${lockedComp.rawDisplay}</strong>) vs. Verified Tab 4 Mock <strong>${latestMock.serialId || modeKey}</strong> (<strong>${actualComp.rawDisplay}</strong>)`
              : `Locked Target: <strong>${lockedComp.rawDisplay}</strong> &bull; Complete a Tab 4 Mock for ${schema.badge} to populate Actual Achievement`}</div>
          </div>
          ${totalDeficiency !== null ? `
            <span style="padding:4px 10px;border-radius:999px;font-size:11px;font-weight:800;background:${totalDeficiency <= 0 ? "#d1fae5" : "#fef3c7"};color:${totalDeficiency <= 0 ? "#065f46" : "#92400e"};">
              ${totalDeficiency <= 0 ? `Target Surpassed (+${Math.abs(totalDeficiency)} ${schema.unit})` : `Total Deficiency: ${totalDeficiency} ${schema.unit}`}
            </span>
          ` : `<span style="padding:4px 10px;border-radius:999px;font-size:11px;font-weight:700;background:#e2e8f0;color:#334155;">0 Mocks Logged</span>`}
        </div>

        <div style="overflow-x:auto;background:#ffffff;border:1px solid #cbd5e1;border-radius:12px;">
          <table style="width:100%;border-collapse:collapse;font-size:12px;text-align:left;">
            <thead>
              <tr style="background:#f1f5f9;border-bottom:1px solid #cbd5e1;font-size:10px;font-weight:800;color:#475569;text-transform:uppercase;">
                <th style="padding:8px 12px;">Section</th>
                <th style="padding:8px 12px;">Locked Target</th>
                <th style="padding:8px 12px;">Achieved (Tab 4 Mock)</th>
                <th style="padding:8px 12px;">Deficiency / Surplus</th>
                <th style="padding:8px 12px;width:110px;">Completion</th>
              </tr>
            </thead>
            <tbody>
              ${schema.sections.map(sec => {
                const tVal = Number(locked[sec.id] || sec.min);
                const aVal = actualVals ? Number(actualVals[sec.id] || sec.min) : null;
                const gap = aVal !== null ? Number((tVal - aVal).toFixed(1)) : null;
                const pctBar = aVal !== null && (tVal - sec.min) > 0 ? Math.min(100, Math.max(0, Math.round(((aVal - sec.min) / (tVal - sec.min)) * 100))) : (aVal !== null && tVal === sec.min ? 100 : 0);
                return `
                  <tr style="border-bottom:1px solid #f1f5f9;">
                    <td style="padding:9px 12px;font-weight:800;color:#0f172a;">${sec.label.split("(")[0].trim()}</td>
                    <td style="padding:9px 12px;font-weight:700;color:#4338ca;">${tVal} / ${sec.max}</td>
                    <td style="padding:9px 12px;font-weight:800;color:#0f172a;">${aVal !== null ? `${aVal} / ${sec.max}` : "&mdash;"}</td>
                    <td style="padding:9px 12px;font-weight:800;color:${gap === null ? "#94a3b8" : (gap <= 0 ? "#047857" : "#be123c")};">
                      ${gap === null ? "Pending Mock" : (gap <= 0 ? `+${Math.abs(gap)} Surplus` : `-${gap} Remaining`)}
                    </td>
                    <td style="padding:9px 12px;">
                      <div style="width:100%;height:7px;border-radius:999px;background:#e2e8f0;overflow:hidden;">
                        <div style="height:100%;background:${gap !== null && gap <= 0 ? "#059669" : "#4f46e5"};width:${pctBar}%;"></div>
                      </div>
                    </td>
                  </tr>
                `;
              }).join("")}
              <tr style="background:#f8fafc;font-weight:900;color:#0f172a;">
                <td style="padding:9px 12px;">OVERALL COMPOSITE</td>
                <td style="padding:9px 12px;color:#4338ca;">${lockedComp.rawDisplay}</td>
                <td style="padding:9px 12px;">${actualComp ? actualComp.rawDisplay : "&mdash;"}</td>
                <td style="padding:9px 12px;color:${totalDeficiency === null ? "#94a3b8" : (totalDeficiency <= 0 ? "#047857" : "#b45309")};">
                  ${totalDeficiency === null ? "Pending Mock" : (totalDeficiency <= 0 ? `+${Math.abs(totalDeficiency)} Surplus` : `-${totalDeficiency} Remaining`)}
                </td>
                <td style="padding:9px 12px;font-size:11px;color:#475569;">${actualComp ? Math.min(100, Math.max(0, Math.round((actualComp.eff / Math.max(1, lockedComp.eff)) * 100))) + "%" : "0%"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="space-y-2 pt-1">
        <div class="text-xs font-extrabold uppercase tracking-wider text-slate-700">${isTargetMode ? "Tentative B-School / Program Outcome at Selected Target" : "Actual B-School / Program Readiness from Synced Mock"}</div>
        ${schema.outcomes.map(o => {
          const gap = o.req - quotaEff;
          return `
            <div style="padding:12px 14px;border-radius:12px;border:1px solid #cbd5e1;background:#f8fafc;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;font-size:12px;">
              <div><div style="font-weight:800;color:#0f172a;">${o.name}</div><div style="color:#475569;font-size:11px;">${o.sub}</div></div>
              <span style="padding:4px 12px;border-radius:999px;background:#ffffff;border:1px solid #cbd5e1;font-weight:800;color:${gap <= 0 ? "#047857" : "#4338ca"};">
                ${gap <= 0 ? "Achievable at This Score ✓" : `Need +${gap} ${schema.unit}`}
              </span>
            </div>
          `;
        }).join("")}
      </div>
    `;
  };

  window.renderStreamlinedTab7 = function (el) {
    const target = el || document.getElementById("main-workspace") || document.getElementById("tab-content");
    if (!target) return;

    const modeKey = getActiveModeKey();
    const schema = getSchema(modeKey);
    const st = getActiveState(modeKey, schema);
    const isTargetMode = (window._MBA_T7_MODE !== "VERIFIED");
    const mocks = getFullMocksForMode(modeKey, schema);

    target.innerHTML = `
      <div class="max-w-7xl mx-auto pt-4 pb-10 space-y-5">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div class="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;">
              <div class="space-y-1">
                <span id="mba-mode-badge" style="display:inline-block;padding:3px 10px;border-radius:999px;font-size:10px;font-weight:800;text-transform:uppercase;background:${isTargetMode ? "#e0e7ff" : "#d1fae5"};color:${isTargetMode ? "#3730a3" : "#065f46"};">
                  ${isTargetMode ? (window._MBA_T7_MSG ? "✓ " + window._MBA_T7_MSG : "MODE: DESIRED SELF-TARGET (" + schema.badge + ")") : "MODE: SYNCED ACTUAL STRENGTH"}
                </span>
                <div class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 pt-1">${schema.kicker}</div>
                <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">${schema.title}</h2>
                <div class="text-[11px] text-slate-500">Targets are isolated per exam track (<strong>${schema.badge}</strong>). Adjust sliders &amp; click <strong>Set Target</strong> to lock, or <strong>Sync Mock</strong> for Tab 4 actuals.</div>
              </div>
              <div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0;min-width:116px;">
                <button type="button" onclick="window.mbaCommitTarget();"
                  style="background:#4f46e5;color:#ffffff;border:none;border-radius:10px;padding:8px 12px;font-size:12px;font-weight:800;cursor:pointer;">
                  &#127919; Set Target
                </button>
                <button type="button" onclick="window.mbaResetTarget();"
                  style="background:#f1f5f9;color:#1e293b;border:1px solid #cbd5e1;border-radius:10px;padding:8px 12px;font-size:12px;font-weight:800;cursor:pointer;">
                  Reset Target
                </button>
                <button type="button" onclick="window.mbaSyncMock();"
                  style="background:#059669;color:#ffffff;border:none;border-radius:10px;padding:8px 12px;font-size:12px;font-weight:800;cursor:pointer;">
                  &#8635; Sync Mock
                </button>
              </div>
            </div>

            ${schema.sections.map(sec => `
              <div class="space-y-1.5">
                <div class="flex items-center justify-between text-xs font-extrabold">
                  <span>${sec.label}</span>
                  <div class="flex items-center gap-1">
                    <input id="mba-num-${sec.id}" type="number" min="${sec.min}" max="${sec.max}" step="${sec.step}" value="${st[sec.id]}"
                      oninput="window.mbaSliderInput('${sec.id}', this.value);"
                      class="w-16 rounded-lg border border-slate-300 px-2 py-1 text-right font-mono font-extrabold text-indigo-700" />
                    <span class="text-slate-500">/ ${sec.max}</span>
                  </div>
                </div>
                <input id="mba-rng-${sec.id}" type="range" min="${sec.min}" max="${sec.max}" step="${sec.step}" value="${st[sec.id]}"
                  oninput="window.mbaSliderInput('${sec.id}', this.value);"
                  class="w-full accent-indigo-600 cursor-pointer" />
              </div>
            `).join("")}

            <div class="grid grid-cols-2 gap-3 pt-1 text-xs">
              <div>
                <label class="block font-extrabold text-slate-600 mb-1">${schema.diffLabel}</label>
                <select onchange="window.mbaSelectDiff(this.value);" class="w-full rounded-xl border border-slate-300 px-3 py-2 font-bold">
                  ${schema.diffs.map(d => `<option value="${d.val}" ${st.diff === d.val ? "selected" : ""}>${d.label}</option>`).join("")}
                </select>
              </div>
              <div>
                <label class="block font-extrabold text-slate-600 mb-1">${schema.catLabel}</label>
                <select onchange="window.mbaSelectCat(this.value);" class="w-full rounded-xl border border-slate-300 px-3 py-2 font-bold">
                  ${schema.cats.map(c => `<option value="${c.val}" ${st.cat === c.val ? "selected" : ""}>${c.label}</option>`).join("")}
                </select>
              </div>
            </div>

            <div style="padding:12px 14px;border-radius:12px;background:${isTargetMode ? "#eef2ff" : "#ecfdf5"};border:1px solid ${isTargetMode ? "#c7d2fe" : "#6ee7b7"};font-size:11px;color:#0f172a;">
              ${isTargetMode
                ? `<strong>&#127919; Mode-Isolated Target (${schema.badge}):</strong> ${mocks.length ? `Verified ${schema.badge} Mocks Logged: <strong>${mocks.length}</strong>.` : `0 ${schema.fullMinQs}-Q ${schema.badge} Mocks submitted yet — complete one in Tab 4.`}`
                : `<strong>&#10003; Synced Actual Strength:</strong> Showing verified marks from <strong>${window._MBA_T7_SYNCED_ID}</strong>. Click <strong>Reset Target</strong> to return to your locked target.`}
            </div>
          </div>

          <div class="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
            <div id="mba-t7-results" class="space-y-4"></div>

            <div class="overflow-x-auto pt-2 border-t border-slate-200">
              <div class="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">${schema.badge} Score vs. Percentile &amp; Admit Calibration Ladder</div>
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="border-b border-slate-200 text-slate-500">
                    <th class="py-2 pr-3">Score Band</th>
                    <th class="py-2 pr-3">Percentile</th>
                    <th class="py-2">Target Admit Tier</th>
                  </tr>
                </thead>
                <tbody>
                  ${schema.ladder.map(r => `
                    <tr class="border-b border-slate-100">
                      <td class="py-2 pr-3 font-extrabold text-slate-900">${r[0]}</td>
                      <td class="py-2 pr-3 font-bold text-emerald-700">${r[1]}</td>
                      <td class="py-2 text-slate-600">${r[2]}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
    window.updateStreamlinedTab7Readout();
  };

  // ----------------------------------------------------------------------------
  // PERSISTENT 7-TAB HEADER BAR (IMMUNE TO renderCleanHeader OVERWRITES)
  // ----------------------------------------------------------------------------
  const TAB7_LABELS = PORTAL === "GRE"
    ? ["1. Quantitative Reasoning (QC & PS)", "2. Data Interpretation & AWA Lab", "3. Verbal Studio (TC, SE & RC)", "4. Proctored GRE Mock", "5. Sectional & Sprint Mocks", "6. Trap Doctor & AI Doubts", "7. GRE Score & Target Forecaster"]
    : (PORTAL === "GMAT"
      ? ["1. Quantitative Reasoning (Zero Geo)", "2. Data Insights (DS & TPA)", "3. Verbal Studio (CR & RC)", "4. Proctored GMAT Mock", "5. Sectional & Sprint Mocks", "6. Trap Doctor & AI Doubts", "7. Score & Target Forecaster"]
      : ["1. Quantitative Aptitude (QA)", "2. DILR Caselet Lab", "3. VARC Studio (RC & TITA)", "4. Proctored Mock Simulator", "5. Sectional & Sprint Mocks", "6. Trap Doctor & AI Doubts", "7. Score & Target Forecaster"]);

  window.ensureSevenTabBar = function () {
    const curNum = Number(window._ACTIVE_TAB_NUM || 1);
    const navButtons = Array.from(document.querySelectorAll("header button")).filter(b => /^[1-7]\./.test((b.textContent || "").trim()));
    if (!navButtons.length) return;
    const container = navButtons[0].parentElement;
    if (!container) return;

    const desiredHtml = TAB7_LABELS.map((lbl, idx) => {
      const n = idx + 1;
      const active = n === curNum;
      return `<button type="button" onclick="window.selectUnifiedTab(${n})"
        class="px-3.5 py-2 rounded-full text-xs font-bold transition cursor-pointer ${active ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-indigo-500'}">
        ${lbl}
      </button>`;
    }).join("");

    if (container.dataset.sevenTabActive !== `${curNum}_${PORTAL}`) {
      container.innerHTML = desiredHtml;
      container.dataset.sevenTabActive = `${curNum}_${PORTAL}`;
    }
  };

  // Wrap renderCleanHeader so it ALWAYS preserves the 7-tab navigation bar
  const origRenderCleanHeader = window.renderCleanHeader;
  if (typeof origRenderCleanHeader === "function") {
    window.renderCleanHeader = function () {
      origRenderCleanHeader.apply(this, arguments);
      window.ensureSevenTabBar();
    };
  }

  window.selectUnifiedTab = function (tabNum) {
    const n = Number(tabNum);
    window._ACTIVE_TAB_NUM = n;
    window.ACTIVE_TAB = n;
    window.IPM_STATE = window.IPM_STATE || {};
    window.IPM_STATE.activeTab = n === 4 ? "tab8" : (n === 5 ? "tab5_prac" : (n === 6 ? "tab4" : (n === 7 ? "tab6" : "tab" + n)));
    window.scrollTo(0, 0);
    const oldPgMount = document.getElementById("pgStudioLiveMount");
    if (oldPgMount && n >= 3) oldPgMount.remove();

    if (typeof window.renderCleanHeader === "function") window.renderCleanHeader();
    window.ensureSevenTabBar();

    const el = document.getElementById("main-workspace") || document.querySelector("main") || document.getElementById("tab-content");
    if (!el) return;
    el.id = "main-workspace";

    if (n === 1) {
      if (typeof window.renderQuantTab === "function") { el.innerHTML = ""; window.renderQuantTab(el); }
      else if (typeof window.renderTab1 === "function") { el.innerHTML = ""; window.renderTab1(el); }
    } else if (n === 2) {
      el.innerHTML = ""; window.renderTab2(el);
    } else if (n === 3) {
      el.innerHTML = ""; window.renderVerbalStudio3(el);
    } else if (n === 4) {
      el.innerHTML = ""; window.renderStreamlinedTab4(el);
    } else if (n === 5) {
      el.innerHTML = ""; window.renderPracticeMocksTab5(el);
    } else if (n === 6) {
      el.innerHTML = ""; window.renderTrapClinic5(el);
    } else if (n === 7) {
      window._MBA_T7_MODE = "TARGET";
      el.innerHTML = ""; window.renderStreamlinedTab7(el);
    }
  };

  const origSelectMode = window.selectExamMode;
  window.selectExamMode = function (idx) {
    window._ACTIVE_MODE_IDX = Number(idx);
    const savedTab = Number(window._ACTIVE_TAB_NUM || 1);
    if (typeof origSelectMode === "function") {
      origSelectMode(idx);
    }
    window._ACTIVE_TAB_NUM = savedTab;
    window.ensureSevenTabBar();
    if (savedTab === 4) window.renderStreamlinedTab4();
    else if (savedTab === 5) { window._PRACTICE_SPRINT_IDX = 0; window.renderPracticeMocksTab5(); }
    else if (savedTab === 7) { window._MBA_T7_MODE = "TARGET"; window.renderStreamlinedTab7(); }
  };

  document.addEventListener("click", function (ev) {
    const btn = ev.target && ev.target.closest ? ev.target.closest("button") : null;
    if (!btn) return;
    const id = btn.id || "";
    const txt = (btn.textContent || "").trim();
    if (id.startsWith("mode-pill-") || txt.includes("CAT Standard") || txt.includes("XAT & Decision") || txt.startsWith("NMAT Adaptive") || txt.startsWith("SNAP Speed")) {
      setTimeout(() => {
        window.ensureSevenTabBar();
        const cur = Number(window._ACTIVE_TAB_NUM || 1);
        if (cur === 4) window.renderStreamlinedTab4();
        else if (cur === 5) { window._PRACTICE_SPRINT_IDX = 0; window.renderPracticeMocksTab5(); }
        else if (cur === 7) { window._MBA_T7_MODE = "TARGET"; window.renderStreamlinedTab7(); }
      }, 60);
    }
  });

  window.renderTab6 = window.renderStreamlinedTab7;
  window.renderTab7 = window.renderStreamlinedTab7;
  window.addEventListener("DOMContentLoaded", () => setTimeout(window.ensureSevenTabBar, 100));
  setTimeout(window.ensureSevenTabBar, 250);
  setTimeout(window.ensureSevenTabBar, 900);

  // LOCK ALL TAB 4 & TAB 5 ENTRYPOINTS AGAINST LEGACY ASYNC OVERWRITES (v4)
  window.renderMockSimulator4 = function (el) {
    window.renderStreamlinedTab4(el);
    return Promise.resolve();
  };
  window.renderTab4 = window.renderMockSimulator4;
  window.renderGreMockSimulator4 = window.renderMockSimulator4;
  window.renderGmatMockSimulator4 = window.renderMockSimulator4;

  // Guard #main-workspace against any async 5-card grid injection while on Tab 4 or Tab 5
  const _tab45Guard = new MutationObserver(() => {
    const cur = Number(window._ACTIVE_TAB_NUM || 1);
    const ws = document.getElementById("main-workspace");
    if (!ws) return;
    if (cur === 4 && ws.querySelector("button[onclick*='_SELECTED_MOCK_BP'], button[onclick*='_GRE_MOCK_BP']")) {
      window.renderStreamlinedTab4(ws);
    } else if (cur === 5 && !ws.innerHTML.includes("SECTIONAL &amp; SPRINT PRACTICE LAB") && !ws.innerHTML.includes("SECTIONAL & SPRINT PRACTICE LAB")) {
      window.renderPracticeMocksTab5(ws);
    }
  });
  window.addEventListener("DOMContentLoaded", () => {
    const ws = document.getElementById("main-workspace") || document.getElementById("tab-content");
    if (ws) _tab45Guard.observe(ws, { childList: true });
  });
})();
