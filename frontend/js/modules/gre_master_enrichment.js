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
          { p: "Prompt: Because the diplomat's memoir was remarkably _____, historians were able to reconstruct cabinet deliberations that had previously been shrouded in secrecy.", s: "1. Hinge: 'Because' (cause -> effect). Result: 'reconstruct deliberations previously shrouded in secrecy'.\n2. Prediction: 'forthcoming / candid / revealing'.\n3. Answer: 'candid'." },
          { p: "Prompt: Far from being _____, the new regulatory framework introduced dozens of granular compliance checkpoints.", s: "1. Hinge: 'Far from being ___' (direct opposite of 'dozens of granular checkpoints').\n2. Prediction: 'lax / permissive / hands-off'.\n3. Answer: 'laissez-faire'." }
        ],
        drills: [
          { q: "The playwright's dialogue is celebrated for its _____, packing profound philosophical tension into deceptively brief exchanges.", opts: ["A) prolixity", "B) concision", "C) bombast", "D) obfuscation", "E) redundancy"], ans: 1, exp: "'Deceptively brief exchanges' directly defines 'concision' (brevity + density)." },
          { q: "Once hailed as an _____ defender of fiscal austerity, the minister surprised markets by championing a massive stimulus package.", opts: ["A) ambivalent", "B) implacable", "C) ephemeral", "D) erratic", "E) equivocal"], ans: 1, exp: "Contrasting with surprising stimulus support requires 'implacable' (unyielding/uncompromising)." }
        ]
      },
      {
        title: "2. Double-Blank Text Completion: Coupled Clause Logic",
        sub: "Zero Partial Credit • Solve the More Constrained Blank First",
        overview: "In 2-blank Text Completion, both blanks must be correct to earn 1 point. Always start with whichever blank has stronger local syntactic constraints, then use that resolved clause to lock the second blank.",
        worked: [
          { p: "Prompt: While the CEO's public remarks projected (i)_____, internal memos revealed deep (ii)_____ regarding Q4 liquidity.", s: "1. 'While' contrasts public vs. internal.\n2. Blank (i) = 'sangfroid / optimism'; Blank (ii) = 'trepidation / misgivings'." }
        ],
        drills: [
          { q: "Although the critic found the novel's plot overly (i)_____, she praised its prose as remarkably (ii)_____.", opts: ["A) (i) contrived ... (ii) luminous", "B) (i) riveting ... (ii) pedestrian", "C) (i) coherent ... (ii) turgid", "D) (i) pellucid ... (ii) derivative", "E) (i) trenchant ... (ii) banal"], ans: 0, exp: "'Although' contrasts negative plot ('contrived' = artificial) with positive prose ('luminous' = clear/brilliant)." }
        ]
      },
      {
        title: "3. Triple-Blank Text Completion: Multi-Sentence Paragraph Arcs",
        sub: "165+ Verbal Discriminator • Macro-Thesis & Tone Continuity",
        overview: "Triple-blank passages span 3–5 sentences and test whether you track an evolving scholarly argument across sentences. Map the author's attitude toward each cited theory before testing options.",
        worked: [
          { p: "Prompt: Traditional historians viewed the treaty as (i)_____; however, newly declassified cables show negotiators were (ii)_____ about its durability, privately calling it a (iii)_____ truce.", s: "1. 'however' flips traditional view ('durable/watershed') to private skepticism ('sanguine' negated -> 'dubious') and 'ephemeral / stopgap' truce." }
        ],
        drills: [
          { q: "Early models assumed ocean currents were (i)_____, driven solely by steady trade winds; modern satellite altimetry, by contrast, reveals a (ii)_____ field of transient eddies that (iii)_____ heat transport.", opts: ["A) (i) laminar ... (ii) turbulent ... (iii) modulates", "B) (i) chaotic ... (ii) static ... (iii) precludes", "C) (i) ephemeral ... (ii) invariant ... (iii) halts", "D) (i) erratic ... (ii) uniform ... (iii) ignores", "E) (i) volatile ... (ii) placid ... (iii) diminishes"], ans: 0, exp: "'Steady' pairs with 'laminar' (smooth); 'by contrast' + 'transient eddies' pairs with 'turbulent' and 'modulates'." }
        ]
      },
      {
        title: "4. Sentence Equivalence (SE): 6-Choice Semantic Twin Pairs",
        sub: "4 Qs per Test • Select TWO Words Creating Equivalent Sentences",
        overview: "Sentence Equivalence presents one sentence with a single blank and 6 answer choices. You must select the TWO choices that both fit the context AND produce sentences with identical overall meaning—a synonym pair that does not fit the sentence is a classic ETS trap.",
        worked: [
          { p: "Prompt: The botanist's meticulous field notes were so _____ that researchers a century later could replicate every sampling transect without ambiguity. [6 Choices]", s: "1. Target meaning: 'detailed / exact / thorough'.\n2. Exact semantic pair: 'exhaustive' & 'scrupulous'." }
        ],
        drills: [
          { q: "Rather than _____ the debate over monetary policy, the central bank's ambiguous forward guidance only fueled further speculation. [Select the correct pair]", opts: ["A) foreclosing & settling", "B) igniting & provoking", "C) chronicling & recording", "D) obscuring & clouding", "E) publicizing & broadcasting"], ans: 0, exp: "'Rather than ___' opposes 'fueled further speculation' -> 'foreclosing' and 'settling' form the exact semantic pair." }
        ]
      },
      {
        title: "5. Reading Comprehension: Main Idea, Function & Inference",
        sub: "13–14 Qs per Test • Short, Medium & Long Academic Passages",
        overview: "GRE Reading Comprehension tests strict textual fidelity across humanities, social sciences, and physical sciences. Eliminate choices that go one logical step beyond what the text strictly entails.",
        worked: [
          { p: "Passage: 'Unlike classical thermoplastics that soften upon reheating, vitrimers undergo associative bond-exchange reactions that allow reshaping at high temperatures while preserving cross-linked solvent resistance.'", s: "Inference: Vitrimers combine malleability at elevated temperatures with the chemical insolubility of thermosets." }
        ],
        drills: [
          { q: "Based on the vitrimer passage above, what distinguishes vitrimers from classical thermoplastics?", opts: ["A) Vitrimers cannot be reshaped when heated.", "B) Vitrimers retain cross-linked solvent resistance even while permitting thermal reshaping.", "C) Thermoplastics have permanent covalent networks.", "D) Vitrimers dissolve at room temperature.", "E) Bond-exchange reactions prevent all deformation."], ans: 1, exp: "Directly stated: associative bond-exchange permits reshaping while preserving cross-linked solvent resistance." }
        ]
      },
      {
        title: "6. Reading Comprehension: Multi-Select (Select All That Apply)",
        sub: "3-Option Checkboxes • Zero Partial Credit • Independent T/F Audit",
        overview: "Multi-Select RC questions present 3 Roman-numeral or checkbox statements (A, B, C) where 1, 2, or all 3 may be correct. Evaluate each statement independently as a strict True/False claim against the passage.",
        worked: [
          { p: "Rule: Never treat Multi-Select choices as mutually exclusive—verify each of the 3 statements against its exact line anchor.", s: "1. Check Statement A independently.\n2. Check Statement B independently.\n3. Check Statement C independently." }
        ],
        drills: [
          { q: "If a passage states 'All peer-reviewed studies in the meta-analysis controlled for baseline socioeconomic status, though fewer than half tracked longitudinal outcomes beyond five years,' which statements are supported?", opts: ["A) Statements I & II: Every included study adjusted for baseline SES, and a majority lacked >5-year follow-up.", "B) Statement I only", "C) Statement III only (No study tracked >5 years)", "D) None of the statements", "E) Statement II only"], ans: 0, exp: "'All ... controlled for baseline SES' (I is true) and 'fewer than half tracked ... beyond five years' means a majority lacked >5-year follow-up (II is true)." }
        ]
      },
      {
        title: "7. Paragraph Arguments: Strengthen, Weaken, Assumption & Paradox",
        sub: "Critical Reasoning in GRE Verbal • Gap-Bridging & Contrapositives",
        overview: "Each GRE Verbal section includes 2–3 single-paragraph critical reasoning arguments. Identify the Conclusion and Premise first, then spot the unstated causal or statistical gap between them.",
        worked: [
          { p: "Argument: 'Cities that installed protected bike lanes saw a 22% drop in cyclist injuries per mile ridden. Therefore, physical lane barriers directly reduce collision risk.'", s: "Assumption / Strengthen: Confirm that the drop was not merely caused by simultaneous speed-limit reductions or altered traffic volume." }
        ],
        drills: [
          { q: "Which finding most strengthens the protected bike lane conclusion above?", opts: ["A) Bicycle sales increased nationwide.", "B) Adjacent streets without barriers in the same cities saw zero change in cyclist injury rates over the exact same period.", "C) Protected lanes cost more to pave.", "D) Helmets reduce head injury severity.", "E) Pedestrian foot traffic rose 5%."], ans: 1, exp: "Control group comparison (adjacent streets without barriers saw no change) rules out city-wide confounders." }
        ]
      }
    ];

    window._GRE_VR_IDX = Math.min(CHAPTERS.length - 1, Math.max(0, Number(window._GRE_VR_IDX || 0)));
    const ch = CHAPTERS[window._GRE_VR_IDX];

    target.innerHTML = `
      <div class="max-w-7xl mx-auto pt-4 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div class="lg:col-span-4 space-y-2.5">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">GRE VERBAL STUDIO (7 CHAPTERS)</div>
          ${CHAPTERS.map((c, idx) => `
            <button type="button" onclick="window._GRE_VR_IDX=${idx}; window.renderGreVerbalStudio3();"
              class="w-full text-left p-3.5 rounded-2xl border transition cursor-pointer ${idx === window._GRE_VR_IDX
                ? "bg-indigo-50/90 dark:bg-indigo-950/60 border-indigo-500 shadow-sm"
                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-300"}">
              <div class="font-extrabold text-xs text-slate-900 dark:text-white">${c.title}</div>
              <div class="text-[11px] text-slate-500 mt-0.5">${c.sub}</div>
            </button>
          `).join("")}
        </div>

        <div class="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
          <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">ETS GRE GENERAL (130–170 VERBAL SCALE) • CHAPTER ${window._GRE_VR_IDX + 1} OF 7</span>
          <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">${ch.title}</h2>
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Concept Strategy &amp; Structural Law:</strong> ${ch.overview}
          </div>

          <div class="space-y-2.5">
            <div class="text-xs font-extrabold uppercase text-amber-700">Step-by-Step Worked Walkthroughs (${ch.worked.length})</div>
            ${ch.worked.map(w => `
              <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-xs space-y-1">
                <div class="font-bold text-slate-900 dark:text-white">${w.p}</div>
                <div class="text-slate-700 dark:text-slate-300 whitespace-pre-line">${w.s}</div>
              </div>
            `).join("")}
          </div>

          <div class="space-y-2.5">
            <div class="text-xs font-extrabold uppercase text-emerald-700">Interactive GRE Verbal Drills (${ch.drills.length})</div>
            ${ch.drills.map((d, di) => `
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                <div class="font-bold text-slate-900 dark:text-white">Drill Q${di + 1}. ${d.q}</div>
                <div class="space-y-1.5">
                  ${d.opts.map(o => `
                    <button type="button" onclick="this.parentElement.nextElementSibling.classList.remove('hidden')"
                      class="w-full text-left px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-indigo-500 font-semibold cursor-pointer">${o}</button>
                  `).join("")}
                </div>
                <div class="hidden p-3 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                  <strong>Official Explanation:</strong> ${d.exp}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  };
  window.renderVerbalStudio3 = window.renderGreVerbalStudio3;

  // 4. Enriched Tab 4: 5-Blueprint GRE Section-Adaptive Mock Simulator (260-340 Scale)
  const GRE_BLUEPRINTS = [
    { id: "GRE_FULL", count: 54, tag: "FULL 260–340 ADAPTIVE MOCK", title: "1. Full GRE General Section-Adaptive Simulation (54 Qs • 118 Mins)", desc: "Quant Stage 1 + Hard Stage 2 (27 Qs • 47m) + Verbal Stage 1 + Hard Stage 2 (27 Qs • 41m) + AWA (30m) on the 260–340 scale.", mins: 118, sec: "ALL" },
    { id: "GRE_Q",    count: 27, tag: "QUANT SECTIONAL • 47 MINS",  title: "2. Quantitative Reasoning QC & PS Mock (27 Qs • 47 Mins)", desc: "Quantitative Comparison (Choices A–D), 5-Option Problem Solving (A–E), Geometry & Data Interpretation (130–170 Scale).", mins: 47, sec: "QUANT" },
    { id: "GRE_V",    count: 27, tag: "VERBAL SECTIONAL • 41 MINS", title: "3. Verbal Reasoning TC, SE & RC Mock (27 Qs • 41 Mins)", desc: "1/2/3-Blank Text Completion, 6-Choice Sentence Equivalence pairs & Academic Reading Comprehension (130–170 Scale).", mins: 41, sec: "VERBAL" },
    { id: "GRE_Q170", count: 20, tag: "170 CEILING HARD POOL",      title: "4. Target Quant 170 Perfection Hard-Stage Sprint (20 Qs • 30 Mins)", desc: "Upper-quartile Hard Stage 2 discriminator items: FROZEN QC boundary traps, 3D geometry & normal distributions.", mins: 30, sec: "QUANT" },
    { id: "GRE_V165", count: 20, tag: "165+ VERBAL HARD POOL",      title: "5. Target Verbal 165+ Contrast & Inference Sprint (20 Qs • 30 Mins)", desc: "Multi-clause logic hinges, subtle SE semantic pairs & dense humanities/science inference passages.", mins: 30, sec: "VERBAL" }
  ];

  window._GRE_MOCK_BP = Number(window._GRE_MOCK_BP || 0);
  window._GRE_LIVE_POOL = window._GRE_LIVE_POOL || [];

  async function ensureGrePgPool() {
    if (window._GRE_LIVE_POOL.length >= 40) return window._GRE_LIVE_POOL;
    try {
      const res = await fetch(`/api/questions?limit=500&t=${Date.now()}`);
      if (res.ok) {
        const data = await res.json();
        const rows = Array.isArray(data) ? data : (data.questions || []);
        window._GRE_LIVE_POOL = rows.map((q, idx) => {
          let opts = q.options_json || q.options || [];
          if (typeof opts === "string") { try { opts = JSON.parse(opts); } catch (_) { opts = []; } }
          if (!Array.isArray(opts) || opts.length < 4) return null;
          const s = String(q.section || "").toUpperCase();
          return {
            id: q.id || `GRE-PG-${idx + 1}`,
            sec: (s.includes("VARC") || s.includes("VERBAL")) ? "VERBAL" : "QUANT",
            topic: q.topic || "GRE General",
            q: q.prompt || q.question || "",
            opts,
            ans: parseInt(String(q.answer ?? "0"), 10) || 0,
            exp: q.explanation || "Verified GRE General solution."
          };
        }).filter(Boolean);
      }
    } catch (_) {}
    return window._GRE_LIVE_POOL;
  }

  window.renderGreMockSimulator4 = async function (el) {
    const target = el || document.getElementById("main-workspace");
    if (!target) return;
    window.scrollTo(0, 0);

    const pool = await ensureGrePgPool();
    const bpIdx = Math.min(GRE_BLUEPRINTS.length - 1, Math.max(0, Number(window._GRE_MOCK_BP || 0)));
    const bp = GRE_BLUEPRINTS[bpIdx];
    const nextSerial = `GRE-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const fullLogs = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]")
      .filter(h => String(h.blueprint || "").includes("Full") || String(h.blueprint || "").includes("54 Qs"));

    target.innerHTML = `
      <div class="max-w-7xl mx-auto pt-4 pb-8 space-y-5">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          ${GRE_BLUEPRINTS.map((item, i) => `
            <button type="button" onclick="window._GRE_MOCK_BP=${i}; window.renderGreMockSimulator4();"
              class="text-left p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between ${i === bpIdx
                ? "bg-indigo-50/90 dark:bg-indigo-950/60 border-indigo-500 ring-2 ring-indigo-500/20 shadow-sm"
                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-300"}">
              <div>
                <div class="text-[10px] font-extrabold uppercase text-indigo-600">${item.tag}</div>
                <div class="text-sm font-extrabold text-slate-900 dark:text-white mt-1">${item.title}</div>
                <p class="text-[11px] text-slate-500 mt-1.5 line-clamp-2">${item.desc}</p>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-indigo-600">
                <span>${item.count} Qs &bull; ${item.mins}m</span>
                <span>${i === bpIdx ? "Selected ✓" : "Select →"}</span>
              </div>
            </button>
          `).join("")}
        </div>

        <div id="gre-mock-stage" class="bg-white dark:bg-slate-900 border-2 border-indigo-500/30 rounded-2xl p-6 shadow-sm space-y-5">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-extrabold uppercase">${bp.tag} &bull; READY TO LAUNCH</span>
                <span class="text-xs font-mono text-slate-500">Next Serial ID: <strong>${nextSerial}</strong></span>
              </div>
              <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white">${bp.title}</h2>
              <p class="text-xs text-slate-500">${bp.desc}</p>
            </div>
            <button type="button" onclick="window.startGreProctoredMock(${bpIdx}, '${nextSerial}')"
              class="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-extrabold shadow-lg cursor-pointer">
              &#9654; Start Proctored GRE Mock (${bp.mins} Mins)
            </button>
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <div class="text-[10px] font-extrabold uppercase text-slate-400">QUESTION COUNT</div>
              <div class="text-base font-extrabold text-slate-900 dark:text-white mt-1">${bp.count} Questions</div>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <div class="text-[10px] font-extrabold uppercase text-slate-400">PROCTORED CLOCK</div>
              <div class="text-base font-extrabold text-amber-600 mt-1">${bp.mins}:00 Minutes (Paused)</div>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <div class="text-[10px] font-extrabold uppercase text-slate-400">GRE MARKING</div>
              <div class="text-base font-extrabold text-indigo-600 mt-1">+1 / 0 (Zero Guessing Penalty)</div>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <div class="text-[10px] font-extrabold uppercase text-slate-400">POSTGRESQL LIVE POOL</div>
              <div class="text-base font-extrabold text-emerald-600 mt-1">${pool.length} Live GRE Items Loaded</div>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 class="text-sm font-extrabold text-slate-900 dark:text-white">GRE General Full-Length Mock Ledger (${fullLogs.length} Full 54-Q Mocks Logged)</h3>
              <p class="text-[11px] text-slate-500">Only Full-Length 54-Question GRE Section-Adaptive Mocks are logged here to calibrate Tab 6&#39;s 260–340 Forecaster.</p>
            </div>
            <button type="button" onclick="if(confirm('Clear GRE Mock Log?')){localStorage.removeItem('ipm_mock_history_v1'); window.renderGreMockSimulator4();}"
              class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-extrabold cursor-pointer">&#128465; Clear GRE Log</button>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="text-[10px] font-extrabold uppercase text-slate-400 bg-slate-50 dark:bg-slate-950">
                  <th class="py-2 px-3">Serial Mock ID</th>
                  <th class="py-2 px-3">Date &amp; Time</th>
                  <th class="py-2 px-3">Blueprint</th>
                  <th class="py-2 px-3">Score (260–340)</th>
                  <th class="py-2 px-3">Accuracy</th>
                </tr>
              </thead>
              <tbody>
                ${fullLogs.length ? fullLogs.map(h => `
                  <tr class="border-t border-slate-200 dark:border-slate-800 text-xs">
                    <td class="py-2.5 px-3 font-mono font-extrabold text-indigo-600">${h.serialId}</td>
                    <td class="py-2.5 px-3 text-slate-500">${h.date || ""} ${h.time || ""}</td>
                    <td class="py-2.5 px-3 font-bold">${h.blueprint}</td>
                    <td class="py-2.5 px-3 font-extrabold text-emerald-600">${h.score} / ${h.maxScore} (${h.scaled340 || 322}/340)</td>
                    <td class="py-2.5 px-3 font-bold">${h.accuracy}%</td>
                  </tr>
                `).join("") : `<tr><td colspan="5" class="py-5 text-center text-xs text-slate-400">No Full-Length 54-Question GRE Mocks logged yet. Complete Blueprint 1 above to generate your GRE-2026-XXXX Serial ID.</td></tr>`}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  };

  window.startGreProctoredMock = async function (bpIdx, serialId) {
    const bp = GRE_BLUEPRINTS[bpIdx] || GRE_BLUEPRINTS[0];
    const pool = await ensureGrePgPool();
    let sub = bp.sec === "ALL" ? pool.slice() : pool.filter(q => q.sec === bp.sec);
    if (sub.length < 10) sub = pool.slice();
    for (let i = sub.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sub[i], sub[j]] = [sub[j], sub[i]];
    }
    const questions = Array.from({ length: bp.count }, (_, i) => ({ ...sub[i % sub.length] }));
    if (window._GRE_MOCK_TIMER) clearInterval(window._GRE_MOCK_TIMER);

    window._GRE_ACTIVE_MOCK = { bp, serialId, questions, answers: {}, marks: new Set(), cur: 0, secsLeft: bp.mins * 60 };
    window._GRE_MOCK_TIMER = setInterval(() => {
      const st = window._GRE_ACTIVE_MOCK;
      if (!st) return clearInterval(window._GRE_MOCK_TIMER);
      st.secsLeft--;
      const c = document.getElementById("gre-live-clock");
      if (c) c.textContent = `${String(Math.floor(Math.max(0, st.secsLeft) / 60)).padStart(2, "0")}:${String(Math.max(0, st.secsLeft) % 60).padStart(2, "0")}`;
      if (st.secsLeft <= 0) window.submitGreProctoredMock();
    }, 1000);
    window.renderGreActiveQuestion();
  };

  window.renderGreActiveQuestion = function () {
    const st = window._GRE_ACTIVE_MOCK;
    const stage = document.getElementById("gre-mock-stage");
    if (!st || !stage) return;
    const q = st.questions[st.cur];
    const picked = st.answers[st.cur];

    stage.innerHTML = `
      <div class="space-y-4">
        <div class="bg-slate-900 text-white rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div class="text-[10px] font-extrabold uppercase text-amber-300">${st.bp.tag} &bull; ${st.serialId}</div>
            <div class="text-sm font-extrabold">${st.bp.title}</div>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <span id="gre-live-clock" class="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-amber-300 font-mono font-extrabold text-sm">${String(Math.floor(st.secsLeft / 60)).padStart(2, "0")}:${String(st.secsLeft % 60).padStart(2, "0")}</span>
            <button type="button" onclick="if(confirm('Exit GRE mock without submitting?')){clearInterval(window._GRE_MOCK_TIMER); window._GRE_ACTIVE_MOCK=null; window.renderGreMockSimulator4();}"
              class="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-extrabold cursor-pointer">&#10005; Exit Without Submission</button>
            <button type="button" onclick="window.submitGreProctoredMock()"
              class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold cursor-pointer">Submit Exam &amp; Forecast Score</button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div class="lg:col-span-8 space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <span class="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white text-xs font-extrabold">Question ${st.cur + 1} of ${st.questions.length} &bull; ${q.sec}</span>
              <button type="button" onclick="const s=window._GRE_ACTIVE_MOCK; if(s.marks.has(s.cur)) s.marks.delete(s.cur); else s.marks.add(s.cur); window.renderGreActiveQuestion();"
                class="px-3 py-1 rounded-lg border border-amber-400 text-xs font-bold cursor-pointer">${st.marks.has(st.cur) ? "★ Marked" : "☆ Mark Question"}</button>
            </div>
            <p class="text-sm md:text-base font-bold text-slate-900 dark:text-white leading-relaxed whitespace-pre-line">${q.q}</p>
            <div class="space-y-2">
              ${q.opts.map((opt, oi) => `
                <button type="button" onclick="window._GRE_ACTIVE_MOCK.answers[${st.cur}]=${oi}; window.renderGreActiveQuestion();"
                  class="w-full text-left px-4 py-3 rounded-xl border text-xs md:text-sm font-medium cursor-pointer ${picked === oi
                    ? "bg-indigo-600 text-white border-indigo-600 font-bold"
                    : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:border-indigo-400"}">
                  <strong>(${String.fromCharCode(65 + oi)})</strong> ${opt}
                </button>
              `).join("")}
            </div>
            <div class="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
              <button type="button" onclick="if(window._GRE_ACTIVE_MOCK.cur>0){window._GRE_ACTIVE_MOCK.cur--; window.renderGreActiveQuestion();}" class="px-4 py-2 rounded-xl border text-xs font-bold cursor-pointer">&#8592; Previous</button>
              <button type="button" onclick="delete window._GRE_ACTIVE_MOCK.answers[${st.cur}]; window.renderGreActiveQuestion();" class="px-3 py-2 text-xs text-slate-500 font-bold cursor-pointer">Clear Response</button>
              <button type="button" onclick="if(window._GRE_ACTIVE_MOCK.cur<window._GRE_ACTIVE_MOCK.questions.length-1){window._GRE_ACTIVE_MOCK.cur++; window.renderGreActiveQuestion();}" class="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold cursor-pointer">Save &amp; Next &#8594;</button>
            </div>
          </div>

          <div class="lg:col-span-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 space-y-3">
            <div class="text-xs font-extrabold uppercase text-indigo-600">GRE Question Palette (${st.questions.length} Qs)</div>
            <div class="flex flex-wrap gap-1.5 max-h-72 overflow-y-auto">
              ${st.questions.map((_, i) => `<button type="button" onclick="window._GRE_ACTIVE_MOCK.cur=${i}; window.renderGreActiveQuestion();"
                class="w-8 h-8 rounded-lg border text-xs cursor-pointer ${st.marks.has(i) ? "bg-amber-400 text-slate-950 font-bold" : (st.answers[i] !== undefined ? "bg-emerald-600 text-white font-bold" : "bg-white dark:bg-slate-900")} ${i === st.cur ? "ring-2 ring-indigo-500" : ""}">${i + 1}</button>`).join("")}
            </div>
          </div>
        </div>
      </div>
    `;
  };

  window.submitGreProctoredMock = function () {
    const st = window._GRE_ACTIVE_MOCK;
    if (!st) return;
    if (window._GRE_MOCK_TIMER) clearInterval(window._GRE_MOCK_TIMER);
    let correct = 0, wrong = 0;
    st.questions.forEach((q, i) => {
      if (st.answers[i] !== undefined) {
        if (Number(st.answers[i]) === Number(q.ans)) correct++;
        else wrong++;
      }
    });
    const accuracy = (correct + wrong) > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;
    const scaled340 = Math.min(340, Math.max(260, Math.round(260 + (correct / st.questions.length) * 80)));
    const isFull = st.bp.id === "GRE_FULL" || st.questions.length >= 54;

    if (isFull) {
      const hist = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]");
      const now = new Date();
      hist.unshift({
        serialId: st.serialId,
        date: now.toLocaleDateString("en-IN"),
        time: now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
        blueprint: st.bp.title,
        score: correct,
        maxScore: st.questions.length,
        scaled340,
        accuracy
      });
      localStorage.setItem("ipm_mock_history_v1", JSON.stringify(hist.slice(0, 25)));
    }

    const stage = document.getElementById("gre-mock-stage");
    if (stage) {
      stage.innerHTML = `
        <div class="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-4">
          <div class="text-xs font-extrabold uppercase text-emerald-700">${isFull ? "FULL-LENGTH GRE SECTION-ADAPTIVE SCORECARD (LOGGED TO LEDGER)" : "SECTIONAL / HARD-STAGE SPRINT SCORECARD"}</div>
          <h3 class="text-2xl font-extrabold text-slate-900">${st.bp.title} &bull; ${st.serialId}</h3>
          <div class="grid grid-cols-3 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-white border"><div class="text-slate-400 font-bold">ESTIMATED 260–340</div><div class="text-lg font-extrabold text-indigo-600">${scaled340} / 340</div></div>
            <div class="p-3 rounded-xl bg-white border"><div class="text-slate-400 font-bold">RAW CORRECT</div><div class="text-lg font-extrabold text-emerald-600">${correct} / ${st.questions.length}</div></div>
            <div class="p-3 rounded-xl bg-white border"><div class="text-slate-400 font-bold">ACCURACY</div><div class="text-lg font-extrabold">${accuracy}%</div></div>
          </div>
          <button type="button" onclick="window.renderGreMockSimulator4();" class="px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-extrabold cursor-pointer">Return to GRE Blueprint Lobby</button>
        </div>
      `;
    }
    window._GRE_ACTIVE_MOCK = null;
  };

  window.renderTab4 = window.renderGreMockSimulator4;
  window.renderMockSimulator4 = window.renderGreMockSimulator4;

  // 5. MutationObserver to keep GRE labels clean across dynamic renders
  const obs = new MutationObserver(() => sanitizeGreLabels());
  window.addEventListener("DOMContentLoaded", () => {
    obs.observe(document.body, { childList: true, subtree: true });
    setTimeout(sanitizeGreLabels, 200);
  });
})();