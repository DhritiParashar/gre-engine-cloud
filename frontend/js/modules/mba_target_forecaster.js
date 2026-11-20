// ==============================================================================
// GOALisB UNIFIED TARGET-LOCK & DEFICIENCY FORECASTER (GRE | GMAT | CAT/OMETs)
// Inducts Tab 7 Set Target, Reset Target, Sync Mock & Achievement vs. Deficiency
// ==============================================================================
(function () {
  const HOST = (window.location.hostname || "").toLowerCase();
  const TITLE = (document.title || "").toUpperCase();
  const PORTAL = HOST.includes("gmat") || TITLE.includes("GMAT")
    ? "GMAT"
    : (HOST.includes("gre") || TITLE.includes("GRE") ? "GRE" : "CAT");

  function getSubMode() {
    if (PORTAL !== "CAT") return PORTAL;
    if (typeof window.detectActiveCatPortalMode === "function") return window.detectActiveCatPortalMode();
    return window._ACTIVE_CAT_MODE || "CAT";
  }

  function getSchema(subMode) {
    if (subMode === "GRE") {
      return {
        key: "goalisb_gre_self_target_v1",
        kicker: "GRE GENERAL 260–340 DIAGNOSTIC ENGINE",
        title: "Section-Adaptive Score & Target Forecaster",
        unit: "GRE Pts",
        fullMinQs: 54,
        sections: [
          { id: "s1", label: "Quantitative Reasoning (27 Qs • 47m)", min: 130, max: 170, step: 1, def: 167 },
          { id: "s2", label: "Verbal Reasoning (27 Qs • 41m)", min: 130, max: 170, step: 1, def: 163 },
          { id: "s3", label: "Analytical Writing (AWA • 30m)", min: 0, max: 6, step: 0.5, def: 5.0, excludeFromSum: true }
        ],
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

    if (subMode === "GMAT") {
      return {
        key: "goalisb_gmat_self_target_v1",
        kicker: "GMAT FOCUS READINESS ENGINE (205–805 SCALE)",
        title: "Score, Percentile & Adaptive Forecaster",
        unit: "Focus Pts",
        fullMinQs: 64,
        sections: [
          { id: "s1", label: "Quantitative Reasoning (21 Qs • 45m)", min: 60, max: 90, step: 1, def: 85 },
          { id: "s2", label: "Verbal Reasoning (23 Qs • 45m)", min: 60, max: 90, step: 1, def: 84 },
          { id: "s3", label: "Data Insights (20 Qs • 45m)", min: 60, max: 90, step: 1, def: 83 }
        ],
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

    if (subMode === "XAT") {
      return {
        key: "goalisb_xat_self_target_v1",
        kicker: "XAT & DECISION MAKING ENGINE (75 MARKS SCALE)",
        title: "XAT Score, Percentile & XLRI Forecaster",
        unit: "Marks",
        fullMinQs: 75,
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
      };
    }

    if (subMode === "NMAT") {
      return {
        key: "goalisb_nmat_self_target_v1",
        kicker: "NMAT ADAPTIVE ENGINE (120–360 SCALE)",
        title: "NMAT Scaled Score & NMIMS Forecaster",
        unit: "Scaled Pts",
        fullMinQs: 108,
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
      };
    }

    if (subMode === "SNAP") {
      return {
        key: "goalisb_snap_self_target_v1",
        kicker: "SNAP SPEED SPRINT ENGINE (60 MARKS SCALE)",
        title: "SNAP Scaled Score & SIBM / SCMHRD Forecaster",
        unit: "Marks",
        fullMinQs: 60,
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
      };
    }

    // Default: CAT (198 Marks Scale)
    return {
      key: "goalisb_cat_self_target_v1",
      kicker: "CAT EXAM READINESS ENGINE (198 MARKS SCALE)",
      title: "CAT Score, Percentile & IIM Call Forecaster",
      unit: "Marks",
      fullMinQs: 66,
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
    };
  }

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

  function getFullMocksForSubMode(subMode, schema) {
    try {
      const raw = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]");
      if (!Array.isArray(raw)) return [];
      return raw.filter(h => {
        if (!h || Number(h.score || 0) <= 0) return false;
        if (PORTAL === "CAT" && typeof window.classifyMockEntryMode === "function") {
          return window.classifyMockEntryMode(h) === subMode && (Number(h.maxScore || 0) >= schema.fullMinQs || String(h.blueprint || "").toLowerCase().includes("full"));
        }
        return Number(h.maxScore || 0) >= schema.fullMinQs || String(h.blueprint || "").toLowerCase().includes("full");
      });
    } catch (_) { return []; }
  }

  function extractMockSectionValues(rec, subMode, schema) {
    if (!rec) return null;
    if (subMode === "GRE") {
      const ratio = Math.max(0, Math.min(1, Number(rec.score || 0) / Math.max(1, Number(rec.maxScore || 54))));
      const savedAwa = JSON.parse(localStorage.getItem("gre_awa_latest_v1") || "null");
      return {
        s1: Math.min(170, Math.max(130, Number(rec.quant170 || Math.round(130 + ratio * 40)))),
        s2: Math.min(170, Math.max(130, Number(rec.verbal170 || Math.round(130 + ratio * 38)))),
        s3: savedAwa ? Number(savedAwa.score) : Number(rec.awaScore || 4.5)
      };
    }
    if (subMode === "GMAT") {
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

  window._MBA_T6_MODE = "TARGET";
  window._MBA_T6_STATE = {};
  window._MBA_T6_MSG = "";
  window._MBA_T6_SYNCED_ID = null;

  function getActiveState(subMode, schema) {
    if (!window._MBA_T6_STATE[subMode]) {
      window._MBA_T6_STATE[subMode] = loadTarget(schema);
    }
    return window._MBA_T6_STATE[subMode];
  }

  window.mbaCommitTarget = function () {
    const subMode = getSubMode();
    const schema = getSchema(subMode);
    const st = getActiveState(subMode, schema);
    saveTarget(schema, { ...st });
    window._MBA_T6_MODE = "TARGET";
    window._MBA_T6_MSG = "Target Locked (" + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + ")";
    window.renderUnifiedMbaForecaster6();
  };

  window.mbaResetTarget = function () {
    const subMode = getSubMode();
    const schema = getSchema(subMode);
    const saved = loadTarget(schema);
    window._MBA_T6_STATE[subMode] = { ...saved };
    window._MBA_T6_MODE = "TARGET";
    window._MBA_T6_MSG = "Restored Last Locked Target";
    window.renderUnifiedMbaForecaster6();
  };

  window.mbaSyncMock = function () {
    const subMode = getSubMode();
    const schema = getSchema(subMode);
    const mocks = getFullMocksForSubMode(subMode, schema);
    if (!mocks.length) {
      alert(`No completed Full-Length ${subMode} Mock found in Tab 4 ledger yet. Complete a Full ${subMode} Mock first.`);
      return;
    }
    const vals = extractMockSectionValues(mocks[0], subMode, schema);
    const st = getActiveState(subMode, schema);
    st.s1 = vals.s1;
    st.s2 = vals.s2;
    st.s3 = vals.s3;
    window._MBA_T6_SYNCED_ID = mocks[0].serialId || `${subMode}-MOCK`;
    window._MBA_T6_MODE = "VERIFIED";
    window._MBA_T6_MSG = "";
    window.renderUnifiedMbaForecaster6();
  };

  window.mbaSliderInput = function (secId, rawVal) {
    const subMode = getSubMode();
    const schema = getSchema(subMode);
    const sec = schema.sections.find(x => x.id === secId);
    if (!sec) return;
    const v = Math.min(sec.max, Math.max(sec.min, Number(rawVal) || sec.min));
    const st = getActiveState(subMode, schema);
    st[secId] = v;
    if (window._MBA_T6_MODE === "VERIFIED") {
      window._MBA_T6_MODE = "TARGET";
      const b = document.getElementById("mba-mode-badge");
      if (b) {
        b.textContent = "MODE: DESIRED SELF-TARGET (CLICK SET TARGET TO LOCK)";
        b.style.background = "#e0e7ff";
        b.style.color = "#3730a3";
      }
    }
    const rEl = document.getElementById("mba-rng-" + secId);
    const nEl = document.getElementById("mba-num-" + secId);
    if (rEl && Number(rEl.value) !== v) rEl.value = v;
    if (nEl && Number(nEl.value) !== v) nEl.value = v;
    window.updateUnifiedMbaReadout();
  };

  window.updateUnifiedMbaReadout = function () {
    const out = document.getElementById("mba-t6-results");
    if (!out) return;
    const subMode = getSubMode();
    const schema = getSchema(subMode);
    const st = getActiveState(subMode, schema);
    const locked = loadTarget(schema);
    const mocks = getFullMocksForSubMode(subMode, schema);
    const latestMock = mocks[0] || null;
    const actualVals = extractMockSectionValues(latestMock, subMode, schema);
    const isTargetMode = (window._MBA_T6_MODE !== "VERIFIED");

    const diffObj = schema.diffs.find(d => d.val === st.diff) || schema.diffs[1];
    const catObj = schema.cats.find(c => c.val === st.cat) || schema.cats[0];
    const curComp = schema.computeComposite(st, diffObj.adj);
    const lockedComp = schema.computeComposite(locked, 0);
    const actualComp = actualVals ? schema.computeComposite(actualVals, 0) : null;
    const quotaEff = curComp.eff + catObj.bonus;

    const totalDeficiency = actualComp ? (lockedComp.eff - actualComp.eff) : null;

    const matrixHtml = `
      <div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:16px;padding:16px;">
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:8px;margin-bottom:10px;">
          <div>
            <div style="font-size:11px;font-weight:800;color:#4338ca;text-transform:uppercase;">ACHIEVEMENT VS. DEFICIENCY REMAINING MATRIX</div>
            <div style="font-size:11px;color:#475569;">${latestMock
              ? `Comparing Locked Target (<strong>${lockedComp.rawDisplay}</strong>) against Verified Mock <strong>${latestMock.serialId || subMode}</strong> (<strong>${actualComp.rawDisplay}</strong>)`
              : `Locked Target: <strong>${lockedComp.rawDisplay}</strong> &bull; Complete a Full ${subMode} Mock in Tab 4 to populate Actual Achievement`}</div>
          </div>
          ${totalDeficiency !== null ? `
            <span style="padding:4px 10px;border-radius:999px;font-size:11px;font-weight:800;background:${totalDeficiency <= 0 ? "#d1fae5" : "#fef3c7"};color:${totalDeficiency <= 0 ? "#065f46" : "#92400e"};">
              ${totalDeficiency <= 0 ? `Target Surpassed (+${Math.abs(totalDeficiency)} ${schema.unit})` : `Total Deficiency: ${totalDeficiency} ${schema.unit}`}
            </span>
          ` : `<span style="padding:4px 10px;border-radius:999px;font-size:11px;font-weight:700;background:#e2e8f0;color:#334155;">0 Full Mocks Logged</span>`}
        </div>

        <div style="overflow-x:auto;background:#ffffff;border:1px solid #cbd5e1;border-radius:12px;">
          <table style="width:100%;border-collapse:collapse;font-size:12px;text-align:left;">
            <thead>
              <tr style="background:#f1f5f9;border-bottom:1px solid #cbd5e1;font-size:10px;font-weight:800;color:#475569;text-transform:uppercase;">
                <th style="padding:8px 12px;">Section</th>
                <th style="padding:8px 12px;">Locked Target</th>
                <th style="padding:8px 12px;">Achieved (Mock)</th>
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
    `;

    out.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div style="padding:16px;border-radius:16px;background:${isTargetMode ? "#eef2ff" : "#ecfdf5"};border:1px solid ${isTargetMode ? "#c7d2fe" : "#a7f3d0"};">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:${isTargetMode ? "#4338ca" : "#047857"};">${isTargetMode ? "Target Preview Score" : "Actual Verified Score"}</div>
          <div style="font-size:22px;font-weight:900;color:#0f172a;margin-top:2px;">${curComp.rawDisplay}</div>
          <div style="font-size:11px;font-weight:700;color:${isTargetMode ? "#4338ca" : "#047857"};margin-top:2px;">Calibrated: ${curComp.effDisplay}</div>
        </div>
        <div style="padding:16px;border-radius:16px;background:#ecfdf5;border:1px solid #a7f3d0;">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:#047857;">${isTargetMode ? "Tentative Expected Percentile" : "Actual Projected Percentile"}</div>
          <div style="font-size:22px;font-weight:900;color:#064e3b;margin-top:2px;">${curComp.pct}</div>
          <div style="font-size:11px;font-weight:700;color:#047857;margin-top:2px;">${curComp.subMeta}</div>
        </div>
        <div style="padding:16px;border-radius:16px;background:#f8fafc;border:1px solid #cbd5e1;">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:#475569;">${isTargetMode ? "Expected Admit Tier" : "Actual Admit Tier"} (${catObj.val}${catObj.bonus !== 0 ? (catObj.bonus > 0 ? " +" + catObj.bonus : " " + catObj.bonus) + " Eq." : ""})</div>
          <div style="font-size:12px;font-weight:800;color:#0f172a;margin-top:4px;line-height:1.35;">${curComp.tier}</div>
        </div>
      </div>

      ${matrixHtml}

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

  window.renderUnifiedMbaForecaster6 = function (el) {
    const target = el || document.getElementById("main-workspace") || document.getElementById("tab-content");
    if (!target) return;

    const subMode = getSubMode();
    const schema = getSchema(subMode);
    const st = getActiveState(subMode, schema);
    const isTargetMode = (window._MBA_T6_MODE !== "VERIFIED");
    const mocks = getFullMocksForSubMode(subMode, schema);

    target.innerHTML = `
      <div class="max-w-7xl mx-auto pt-4 pb-10 space-y-5">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div class="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;">
              <div class="space-y-1">
                <span id="mba-mode-badge" style="display:inline-block;padding:3px 10px;border-radius:999px;font-size:10px;font-weight:800;text-transform:uppercase;background:${isTargetMode ? "#e0e7ff" : "#d1fae5"};color:${isTargetMode ? "#3730a3" : "#065f46"};">
                  ${isTargetMode ? (window._MBA_T6_MSG ? "✓ " + window._MBA_T6_MSG : "MODE: DESIRED SELF-TARGET") : "MODE: SYNCED ACTUAL STRENGTH"}
                </span>
                <div class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 pt-1">${schema.kicker}</div>
                <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">${schema.title}</h2>
                <div class="text-[11px] text-slate-500">Adjust sliders &amp; click <strong>Set Target</strong> to lock your goal, or click <strong>Sync Mock</strong> to compare against Tab 4 actuals.</div>
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
                ? `<strong>&#127919; Self-Target Goal Mode:</strong> ${mocks.length ? `Verified Full ${subMode} Mocks Logged: <strong>${mocks.length}</strong> (Latest: <strong>${mocks[0].serialId || subMode}</strong>).` : `0 Full ${subMode} Mocks submitted yet — complete a full mock in Tab 4 to populate Achievement vs. Deficiency.`}`
                : `<strong>&#10003; Synced Actual Strength:</strong> Showing verified marks from <strong>${window._MBA_T6_SYNCED_ID}</strong>. Click <strong>Reset Target</strong> to return to your locked target.`}
            </div>
          </div>

          <div class="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
            <div id="mba-t6-results" class="space-y-4"></div>

            <div class="overflow-x-auto pt-2 border-t border-slate-200">
              <div class="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">${subMode} Score vs. Percentile &amp; Admit Calibration Ladder</div>
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
    window.updateUnifiedMbaReadout();
  };

  window.mbaSelectDiff = function (v) {
    const subMode = getSubMode();
    const schema = getSchema(subMode);
    getActiveState(subMode, schema).diff = v;
    window.updateUnifiedMbaReadout();
  };

  window.mbaSelectCat = function (v) {
    const subMode = getSubMode();
    const schema = getSchema(subMode);
    getActiveState(subMode, schema).cat = v;
    window.updateUnifiedMbaReadout();
  };

  const fn = window.renderUnifiedMbaForecaster6;
  window.renderTab6 = fn;
  window.renderGreScoreForecaster6 = fn;
  window.renderAuthoritativeGmatTab6 = fn;
  window.renderGmatFullMockForecaster6 = fn;
  window.renderAuthoritativeTab6 = fn;
  window.renderCatFullMockForecaster6 = fn;
  window.renderScoreForecaster6 = fn;
  window.renderCollegePredictor = fn;
  window.renderCallPredictor = fn;
  window.renderCallPredictor6 = fn;

  const origSelectUnified = window.selectUnifiedTab;
  if (typeof origSelectUnified === "function") {
    window.selectUnifiedTab = function (tabNum) {
      const n = Number(tabNum);
      if (n === 6) window._MBA_T6_MODE = "TARGET";
      origSelectUnified.apply(this, arguments);
      if (n === 6) {
        const ws = document.getElementById("main-workspace") || document.getElementById("tab-content");
        if (ws) fn(ws);
      }
    };
  }

  document.addEventListener("click", function (ev) {
    const btn = ev.target && ev.target.closest ? ev.target.closest("button") : null;
    if (!btn) return;
    const id = btn.id || "";
    const txt = (btn.textContent || "").trim();
    if (id.startsWith("mode-pill-") || txt.includes("CAT Standard") || txt.includes("XAT & Decision") || txt.startsWith("NMAT Adaptive") || txt.startsWith("SNAP Speed")) {
      setTimeout(() => {
        if (Number(window._ACTIVE_TAB_NUM) === 6) {
          window._MBA_T6_MODE = "TARGET";
          fn();
        }
      }, 60);
    }
  });
})();
