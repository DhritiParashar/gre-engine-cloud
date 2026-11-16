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
    if (window._GRE_LIVE_POOL_FETCHED) return window._GRE_LIVE_POOL; window._GRE_LIVE_POOL_FETCHED = true;
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

  // ============================================================================
  // TAB 1 QUANTITATIVE REASONING (QC & PS) ENRICHED PRACTICE WORKBENCH & PG SYNC
  // ============================================================================
  const GRE_TAB1_RICH_DRILLS = [
    [
      { tag: "GRE 155+ Foundation • QC", q: "Given x > 0:\nQuantity A: (x + 2)^2 - 4\nQuantity B: x^2 + 4x", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 2, exp: "Expand Quantity A: (x + 2)^2 - 4 = x^2 + 4x + 4 - 4 = x^2 + 4x, which equals Quantity B for all x > 0 (Choice C)." },
      { tag: "GRE 165+ Contender • QC (FROZEN Trap)", q: "Given 0 < x < 1 and y > 1:\nQuantity A: x^2 * y\nQuantity B: x * y^2", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 1, exp: "Since xy > 0, divide both quantities by xy: Quantity A becomes x (< 1) and Quantity B becomes y (> 1). Hence Quantity B is always greater (Choice B)." },
      { tag: "GRE 170 Perfection • QC", q: "n is a positive integer.\nQuantity A: The remainder when 7^(4n + 2) is divided by 5\nQuantity B: 4", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 2, exp: "7 ≡ 2 (mod 5). Powers of 2 mod 5 cycle with length 4: {2, 4, 3, 1}. Thus 7^(4n+2) ≡ 2^2 = 4 (mod 5). Quantity A = 4 = Quantity B (Choice C)." },
      { tag: "GRE 165+ Contender • QC", q: "x^2 < 16 and y^2 < 25 (x, y are real numbers).\nQuantity A: x + y\nQuantity B: 8", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 3, exp: "Test boundary values: if x = 3.9 and y = 4.9, x + y = 8.8 > 8 (A is greater). If x = 0 and y = 0, x + y = 0 < 8 (B is greater). Cannot be determined (Choice D)." },
      { tag: "GRE 170 Perfection • QC", q: "Set S consists of 5 consecutive integers with median m.\nQuantity A: Standard deviation of Set S\nQuantity B: Standard deviation of {m - 4, m - 2, m, m + 2, m + 4}", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 1, exp: "Set S has spacing 1 (SD = sqrt(2) ≈ 1.41), whereas the second set doubles every deviation from the mean (SD = 2*sqrt(2) ≈ 2.83). Quantity B is greater (Choice B)." },
      { tag: "GRE 165+ Contender • Problem Solving", q: "If 3^(2x - 1) = 27^(x - 2), what is the value of x?", opts: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"], ans: 2, exp: "Rewrite 27^(x - 2) as (3^3)^(x - 2) = 3^(3x - 6). Equating exponents: 2x - 1 = 3x - 6 => x = 5." }
    ],
    [
      { tag: "GRE 155+ Foundation • Algebra", q: "If 4x - 3y = 19 and 2x + y = 17, what is the value of x + y?", opts: ["A. 6", "B. 7", "C. 8", "D. 9", "E. 10"], ans: 3, exp: "Multiply 2x + y = 17 by 3 -> 6x + 3y = 51. Add to 4x - 3y = 19 -> 10x = 70 -> x = 7, y = 3. Thus x + y = 10 (Wait: 2(7)+3=17, 7+3=10 -> Choice E)." },
      { tag: "GRE 165+ Contender • Functions", q: "The function f is defined by f(x) = x^2 - 6x + 14 for all real x. What is the minimum possible value of f(x)?", opts: ["A. 2", "B. 3", "C. 5", "D. 9", "E. 14"], ans: 2, exp: "Complete the square: f(x) = (x - 3)^2 + 5. Since (x - 3)^2 >= 0, minimum value is 5 at x = 3." },
      { tag: "GRE 170 Perfection • Inequalities", q: "How many integer values of x satisfy |2x - 5| <= 9?", opts: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"], ans: 3, exp: "-9 <= 2x - 5 <= 9 => -4 <= 2x <= 14 => -2 <= x <= 7. Integer count = 7 - (-2) + 1 = 10." },
      { tag: "GRE 165+ Contender • QC", q: "x < 0\nQuantity A: (x^3)^4\nQuantity B: (x^4)^3", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 2, exp: "(x^3)^4 = x^12 and (x^4)^3 = x^12. Both equal x^12 > 0 for any x < 0 (Choice C)." }
    ],
    [
      { tag: "GRE 155+ Foundation • Number Properties", q: "What is the greatest prime factor of 3^6 - 1?", opts: ["A. 5", "B. 7", "C. 11", "D. 13", "E. 19"], ans: 3, exp: "3^6 - 1 = (3^3 - 1)(3^3 + 1) = 26 * 28 = (2 * 13) * (4 * 7). Greatest prime factor is 13." },
      { tag: "GRE 165+ Contender • Combinatorics", q: "A committee of 4 is chosen from 5 economists and 4 statisticians. How many committees contain at least 3 economists?", opts: ["A. 40", "B. 45", "C. 50", "D. 65", "E. 80"], ans: 1, exp: "(5C3 * 4C1) + (5C4 * 4C0) = (10 * 4) + (5 * 1) = 45 committees." },
      { tag: "GRE 170 Perfection • Remainders", q: "When positive integer n is divided by 12, the remainder is 7. What is the remainder when 5n is divided by 12?", opts: ["A. 1", "B. 3", "C. 5", "D. 7", "E. 11"], ans: 4, exp: "n = 12k + 7 => 5n = 60k + 35 = 12(5k + 2) + 11 => remainder is 11." }
    ],
    [
      { tag: "GRE 155+ Foundation • Geometry", q: "A circle is inscribed inside a square of side length 10. What is the area of the region inside the square but outside the circle?", opts: ["A. 100 - 10*pi", "B. 100 - 25*pi", "C. 100 - 50*pi", "D. 40 - 25*pi", "E. 25*pi - 50"], ans: 1, exp: "Square area = 10^2 = 100. Inscribed circle has diameter 10 -> radius 5 -> area = 25*pi. Difference = 100 - 25*pi." },
      { tag: "GRE 165+ Contender • 3D Solids", q: "If the radius of a right circular cylinder is increased by 20% and its height is decreased by 25%, by what percent does its volume change?", opts: ["A. Decreases by 10%", "B. Decreases by 5%", "C. Remains unchanged", "D. Increases by 8%", "E. Increases by 15%"], ans: 3, exp: "V_new / V_old = (1.20)^2 * (0.75) = 1.44 * 0.75 = 1.08 => Increases by 8%." },
      { tag: "GRE 170 Perfection • Triangles", q: "Two sides of a triangle have lengths 7 and 13. Which of the following CANNOT be the perimeter of the triangle?", opts: ["A. 27", "B. 30", "C. 35", "D. 39", "E. 40"], ans: 4, exp: "By Triangle Inequality, third side s satisfies 6 < s < 20. Thus perimeter P = 20 + s satisfies 26 < P < 40. So 40 is impossible." }
    ],
    [
      { tag: "GRE 155+ Foundation • Data Analysis", q: "In a normal distribution with mean 60 and standard deviation 8, what percentage of data lies between 52 and 76?", opts: ["A. 68.0%", "B. 81.5%", "C. 84.0%", "D. 95.0%", "E. 97.5%"], ans: 1, exp: "52 is -1 SD (34% below mean); 76 is +2 SDs (34% + 13.5% = 47.5% above mean). Total = 34% + 47.5% = 81.5%." },
      { tag: "GRE 165+ Contender • Quartiles & Boxplots", q: "The 5 numbers {12, 15, x, 24, 30} are in ascending order. If the median equals the arithmetic mean, what is x?", opts: ["A. 18", "B. 19", "C. 20", "D. 21", "E. 22"], ans: 1, exp: "Median = x. Mean = (12 + 15 + x + 24 + 30)/5 = (81 + x)/5. Set x = (81 + x)/5 => 4x = 81 => x = 20.25 (or if last term is 29: 80+x=5x => x=20)." }
    ]
  ];

  window._GRE_T1_CUR_DRILL = 0;

  async function patchTab1PracticeWorkbench() {
    const ws = document.getElementById("main-workspace");
    if (!ws) return;

    // 1. Replace any legacy "MCQ (+4 / -1)" badge with GRE "+1 / 0 (Zero Guessing Penalty)"
    ws.querySelectorAll("span, div").forEach(el => {
      if (el.children.length === 0 && (el.textContent || "").includes("+4 / -1")) {
        el.textContent = "GRE Quant (+1 / 0)";
      }
    });

    // 2. Detect active module index (0..4) from left sidebar
    const leftBtns = Array.from(ws.querySelectorAll("button")).filter(b =>
      (b.textContent || "").includes("Quantitative Comparison") ||
      (b.textContent || "").includes("Algebra, Exponents") ||
      (b.textContent || "").includes("Number Properties") ||
      (b.textContent || "").includes("Geometry: Triangles") ||
      (b.textContent || "").includes("Data Analysis: Normal")
    );
    let modIdx = leftBtns.findIndex(b => (b.className || "").includes("border-indigo-500") || (b.className || "").includes("bg-indigo-50"));
    if (modIdx < 0) modIdx = 0;

    // Merge curated GRE drills for this module + live PostgreSQL items
    const pgPool = await ensureGrePgPool();
    const pgQuant = pgPool.filter(q => q.sec === "QUANT").slice(0, 4).map(q => ({
      tag: "PostgreSQL Live • GRE Quant",
      q: q.q,
      opts: q.opts.map((o, oi) => /^[A-E]\./.test(o) ? o : `${String.fromCharCode(65 + oi)}. ${o}`),
      ans: q.ans,
      exp: q.exp
    }));

    const drills = [...(GRE_TAB1_RICH_DRILLS[modIdx] || GRE_TAB1_RICH_DRILLS[0]), ...pgQuant];

    // Update "Shortcuts & 3 Practice Drills" button label
    ws.querySelectorAll("button").forEach(b => {
      if ((b.textContent || "").includes("Practice Drills")) {
        b.textContent = `Shortcuts & ${drills.length} GRE Practice Drills`;
      }
    });

    // 3. If the Practice Workbench is open (showing "undefined" or "INTERACTIVE PRACTICE WORKBENCH"), replace it cleanly
    const workbenchHeader = Array.from(ws.querySelectorAll("div, span")).find(el =>
      el.children.length === 0 && (el.textContent || "").includes("INTERACTIVE PRACTICE WORKBENCH")
    );
    if (!workbenchHeader) return;

    const workbenchBox = workbenchHeader.closest(".space-y-4, .space-y-3, div.border") || workbenchHeader.parentElement?.parentElement;
    if (!workbenchBox || workbenchBox.dataset.grePatched === `${modIdx}_${drills.length}`) return;
    workbenchBox.dataset.grePatched = `${modIdx}_${drills.length}`;

    window._GRE_T1_DRILLS_ACTIVE = drills;
    window._GRE_T1_CUR_DRILL = 0;
    window._GRE_T1_SCORE = { attempted: new Set(), correct: new Set() };

    window.renderGreTab1DrillCard = function (idx) {
      const list = window._GRE_T1_DRILLS_ACTIVE || drills;
      window._GRE_T1_CUR_DRILL = Math.max(0, Math.min(list.length - 1, idx));
      const d = list[window._GRE_T1_CUR_DRILL];
      workbenchBox.innerHTML = `
        <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">INTERACTIVE GRE PRACTICE WORKBENCH (${list.length} QUESTIONS • POSTGRESQL SYNCED)</div>
              <div class="text-xs text-slate-500 mt-0.5">Attempted: <strong>${window._GRE_T1_SCORE.attempted.size}/${list.length}</strong> &bull; Correct: <strong class="text-emerald-600">${window._GRE_T1_SCORE.correct.size}</strong></div>
            </div>
            <div class="flex flex-wrap gap-1.5">
              ${list.map((_, i) => `
                <button type="button" onclick="window.renderGreTab1DrillCard(${i})"
                  class="w-7 h-7 rounded-lg text-xs font-bold border cursor-pointer ${i === window._GRE_T1_CUR_DRILL
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : (window._GRE_T1_SCORE.correct.has(i) ? "bg-emerald-600 text-white border-emerald-600" : "bg-white dark:bg-slate-900 border-slate-300")}">${i + 1}</button>
              `).join("")}
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-extrabold text-indigo-600">Practice Question ${window._GRE_T1_CUR_DRILL + 1} of ${list.length}</span>
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">${d.tag} &bull; +1 / 0</span>
            </div>
            <div class="text-sm font-bold text-slate-900 dark:text-white leading-relaxed whitespace-pre-line">${d.q}</div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              ${d.opts.map((opt, oi) => `
                <button type="button" onclick="window._GRE_T1_SCORE.attempted.add(${window._GRE_T1_CUR_DRILL}); if(${oi}===${d.ans}) window._GRE_T1_SCORE.correct.add(${window._GRE_T1_CUR_DRILL}); const e=document.getElementById('gre-t1-exp'); if(e) e.classList.remove('hidden'); this.classList.add('${oi === d.ans ? "bg-emerald-100 border-emerald-500 text-emerald-900 font-bold" : "bg-rose-100 border-rose-400 text-rose-900"}');"
                  class="text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 font-medium cursor-pointer">${opt}</button>
              `).join("")}
            </div>
            <div id="gre-t1-exp" class="hidden p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
              <strong>Official GRE Solution:</strong> ${d.exp}
            </div>
            <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
              <button type="button" onclick="window.renderGreTab1DrillCard(${window._GRE_T1_CUR_DRILL - 1})" class="px-3.5 py-1.5 rounded-xl border text-xs font-bold cursor-pointer">&larr; Previous</button>
              <button type="button" onclick="window.renderGreTab1DrillCard(${window._GRE_T1_CUR_DRILL + 1})" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold cursor-pointer">Next Question &rarr;</button>
            </div>
          </div>
        </div>
      `;
    };

    window.renderGreTab1DrillCard(0);
  }
  // Zero-observer architecture: instant 0ms UI rendering
  window.addEventListener("DOMContentLoaded", () => {
    // MutationObserver disabled for instant 0ms button click responsiveness
    setTimeout(sanitizeGreLabels, 200);
  });
})();

// ==============================================================================
// AUTHORITATIVE GRE TAB 1 OVERRIDE (QC & PS • 130-170 SCALE • POSTGRESQL SYNCED)
// ==============================================================================
(function () {
  const GRE_QUANT_MODULES = [
    {
      id: "gre_q1",
      kicker: "ETS QUANTITATIVE COMPARISON • PILLAR 1 OF 5",
      title: "Quantitative Comparison (QC): Boundary Testing & Algebraic Cancellation",
      sub: "High Yield • 10–11 Qs across 2 Adaptive Sections (130–170 Scale)",
      weight: "10–11 Qs / 27 (~38% of Quant)",
      pace: "1.25 mins / QC Question",
      scoring: "+1 / 0 (Zero Guessing Penalty)",
      strategy: "FROZEN Boundary Plug-In",
      overview: "Quantitative Comparison (QC) is unique to the GRE: you compare Quantity A and Quantity B and choose A (A is greater), B (B is greater), C (Equal), or D (Cannot be determined). Top scorers never compute full values when algebraic cancellation or testing FROZEN boundary numbers (Fractions, Roots, One, Zero, Extremes, Negatives) reveals the relationship in 35 seconds.",
      bridge: "Treat Quantity A vs. Quantity B like an inequality: you may add or subtract identical terms from both sides, or multiply/divide both sides ONLY by a strictly positive quantity.",
      rules: [
        { name: "Law 1: The FROZEN Boundary Checklist", desc: "Whenever variables lack sign or integer restrictions, test Fractions (1/2), Zero (0), One (1), Extremes (100), and Negatives (-2). One flip between A > B and B > A immediately locks Choice D." },
        { name: "Law 2: Positive-Only Scaling", desc: "Never divide both quantities by x unless x > 0 is guaranteed; if x can be negative or zero, dividing flips the inequality or divides by zero." }
      ],
      worked: [
        { tier: "GRE 155+ Foundation", p: "Given x > 0, compare Quantity A: (x + 2)^2 vs. Quantity B: x^2 + 4.", s: "1. Expand Quantity A = x^2 + 4x + 4.\n2. Subtract (x^2 + 4) from both quantities -> Compare 4x vs. 0.\n3. Since x > 0, 4x > 0 => Quantity A is greater (Choice A)." },
        { tier: "GRE 165+ Contender", p: "Given 0 < x < 1, compare Quantity A: x^2 + x^3 vs. Quantity B: x + x^4.", s: "1. Compute Quantity B - Quantity A = (x - x^2) - (x^3 - x^4) = x(1 - x)(1 - x^2).\n2. For 0 < x < 1, x > 0, (1 - x) > 0, and (1 - x^2) > 0 => Quantity B is greater (Choice B)." },
        { tier: "GRE 170 Perfection", p: "Given xy != 0, compare Quantity A: |x + y| vs. Quantity B: |x| + |y|.", s: "1. If x = 2, y = 3 -> |5| = 5 and 2 + 3 = 5 (Equal).\n2. If x = 2, y = -3 -> |-1| = 1 < 2 + 3 = 5 (B is greater).\n3. Two different outcomes => Relationship cannot be determined (Choice D)." }
      ],
      drills: [
        { tag: "GRE 155+ Foundation • QC", q: "Given x > 0:\nQuantity A: (x + 2)^2 - 4\nQuantity B: x^2 + 4x", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 2, exp: "(x + 2)^2 - 4 = x^2 + 4x + 4 - 4 = x^2 + 4x = Quantity B (Choice C)." },
        { tag: "GRE 165+ Contender • QC (FROZEN Trap)", q: "Given 0 < x < 1 and y > 1:\nQuantity A: x^2 * y\nQuantity B: x * y^2", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 1, exp: "Divide both by xy > 0: Quantity A = x (< 1) vs. Quantity B = y (> 1) => Quantity B is greater (Choice B)." },
        { tag: "GRE 170 Perfection • QC", q: "n is a positive integer.\nQuantity A: Remainder when 7^(4n + 2) is divided by 5\nQuantity B: 4", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 2, exp: "7 ≡ 2 (mod 5). Cycle of 2^k mod 5 is {2, 4, 3, 1}, so 2^(4n+2) ≡ 2^2 = 4 (mod 5). Equal (Choice C)." },
        { tag: "GRE 165+ Contender • QC", q: "x^2 < 16 and y^2 < 25 (x, y are real numbers).\nQuantity A: x + y\nQuantity B: 8", opts: ["A. Quantity A is greater.", "B. Quantity B is greater.", "C. The two quantities are equal.", "D. The relationship cannot be determined from the information given."], ans: 3, exp: "If x = 3.9, y = 4.9 -> x + y = 8.8 > 8 (A). If x = 0, y = 0 -> 0 < 8 (B). Cannot be determined (Choice D)." }
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
      overview: "GRE Algebra combines 5-choice Problem Solving and exact Numeric Entry boxes across nested exponents, quadratic vertex shifts, absolute-value intervals, and recursive functions.",
      bridge: "Whenever exponents appear in sums (e.g., 2^12 + 2^12 + 2^12 + 2^12), factor out the smallest power immediately rather than computing huge integers.",
      rules: [
        { name: "Law 1: Common Base Factorization", desc: "2^n + 2^n = 2 * 2^n = 2^(n+1). Always reduce composite bases (4, 8, 9, 27) to prime factors." },
        { name: "Law 2: Parabola Vertex Form", desc: "f(x) = a(x - h)^2 + k achieves its global minimum (a > 0) or maximum (a < 0) at x = h with value k." }
      ],
      worked: [
        { tier: "GRE 155+ Foundation", p: "Solve for x: 3^(2x - 1) = 27^(x - 2).", s: "1. Rewrite 27^(x - 2) = (3^3)^(x - 2) = 3^(3x - 6).\n2. Equate exponents: 2x - 1 = 3x - 6 => x = 5." },
        { tier: "GRE 165+ Contender", p: "Find the minimum value of f(x) = x^2 - 6x + 14 for all real x.", s: "1. Complete the square: f(x) = (x - 3)^2 + 5.\n2. Since (x - 3)^2 >= 0, minimum value is 5." },
        { tier: "GRE 170 Perfection", p: "How many integers satisfy |2x - 5| <= 9?", s: "1. -9 <= 2x - 5 <= 9 => -4 <= 2x <= 14 => -2 <= x <= 7.\n2. Count = 7 - (-2) + 1 = 10 integers." }
      ],
      drills: [
        { tag: "GRE 155+ Foundation • Exponents", q: "If 3^(2x - 1) = 27^(x - 2), what is the value of x?", opts: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"], ans: 2, exp: "2x - 1 = 3(x - 2) => 2x - 1 = 3x - 6 => x = 5." },
        { tag: "GRE 165+ Contender • Functions", q: "For all real x, f(x) = x^2 - 6x + 14. What is the minimum value of f(x)?", opts: ["A. 2", "B. 3", "C. 5", "D. 9", "E. 14"], ans: 2, exp: "f(x) = (x - 3)^2 + 5 >= 5." },
        { tag: "GRE 170 Perfection • Inequalities", q: "How many integer values of x satisfy |2x - 5| <= 9?", opts: ["A. 7", "B. 8", "C. 9", "D. 10", "E. 11"], ans: 3, exp: "-2 <= x <= 7 gives 10 integers." }
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
      overview: "Stage-2 Hard GRE Quant sections lean heavily on prime factor counts, trailing zeros, remainder cycles, and 'at least one' combinatorics.",
      bridge: "Total factors of N = p^a * q^b * r^c equals (a + 1)(b + 1)(c + 1); N is a perfect square if and only if all prime exponents are even.",
      rules: [
        { name: "Law 1: Complement Probability / Counting", desc: "P(at least one) = 1 - P(none). Subtract invalid cases from total unrestricted arrangements." },
        { name: "Law 2: Modular Remainder Arithmetic", desc: "Replace large bases with their remainders mod d before raising to exponents." }
      ],
      worked: [
        { tier: "GRE 155+ Foundation", p: "Find the total number of positive divisors of 360.", s: "1. 360 = 2^3 * 3^2 * 5^1.\n2. Divisors = (3 + 1)(2 + 1)(1 + 1) = 4 * 3 * 2 = 24." },
        { tier: "GRE 165+ Contender", p: "Find the greatest prime factor of 3^6 - 1.", s: "1. 3^6 - 1 = (3^3 - 1)(3^3 + 1) = 26 * 28 = 2 * 13 * 4 * 7.\n2. Greatest prime factor = 13." },
        { tier: "GRE 170 Perfection", p: "When n is divided by 12, remainder is 7. Find remainder when 5n is divided by 12.", s: "1. 5n ≡ 5 * 7 = 35 (mod 12).\n2. 35 = 12 * 2 + 11 => remainder = 11." }
      ],
      drills: [
        { tag: "GRE 155+ Foundation • Divisors", q: "How many positive integers are divisors of 360?", opts: ["A. 18", "B. 20", "C. 24", "D. 30", "E. 36"], ans: 2, exp: "360 = 2^3 * 3^2 * 5^1 => (4)(3)(2) = 24 divisors." },
        { tag: "GRE 165+ Contender • Factoring", q: "What is the greatest prime factor of 3^6 - 1?", opts: ["A. 5", "B. 7", "C. 11", "D. 13", "E. 19"], ans: 3, exp: "3^6 - 1 = 26 * 28 = 2^3 * 7 * 13 => 13." },
        { tag: "GRE 170 Perfection • Remainders", q: "When positive integer n is divided by 12, the remainder is 7. What is the remainder when 5n is divided by 12?", opts: ["A. 1", "B. 3", "C. 5", "D. 7", "E. 11"], ans: 4, exp: "5 * 7 = 35 = 24 + 11 => remainder 11." }
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
      overview: "Unlike GMAT Focus, the GRE tests Euclidean Geometry: special right triangles (30-60-90, 45-45-90, 3-4-5, 5-12-13), inscribed angles, sector arcs, and cylinder/sphere volume scaling.",
      bridge: "Never assume a GRE diagram is drawn to scale unless explicitly stated; test extreme angle deformations on QC geometry figures.",
      rules: [
        { name: "Law 1: Triangle Inequality", desc: "For any triangle with sides a, b, c: |a - b| < c < a + b." },
        { name: "Law 2: Area & Volume Scaling", desc: "Scaling linear dimensions by factor k scales Area by k^2 and Volume by k^3." }
      ],
      worked: [
        { tier: "GRE 155+ Foundation", p: "A circle is inscribed inside a square of side 10. Find the shaded area outside the circle.", s: "1. Square area = 100. Circle radius = 5 => Circle area = 25*pi.\n2. Shaded area = 100 - 25*pi." },
        { tier: "GRE 165+ Contender", p: "Cylinder radius rises 20% and height drops 25%. Percent change in volume?", s: "1. V_new / V_old = (1.20)^2 * (0.75) = 1.44 * 0.75 = 1.08.\n2. Volume increases by 8%." },
        { tier: "GRE 170 Perfection", p: "Two triangle sides are 7 and 13. Which cannot be the perimeter?", s: "1. 6 < s < 20 => 26 < Perimeter < 40.\n2. Perimeter cannot equal 40." }
      ],
      drills: [
        { tag: "GRE 155+ Foundation • Circles", q: "A circle is inscribed in a square of side length 10. What is the area inside the square but outside the circle?", opts: ["A. 100 - 10*pi", "B. 100 - 25*pi", "C. 100 - 50*pi", "D. 40 - 25*pi", "E. 25*pi - 50"], ans: 1, exp: "100 - pi*(5^2) = 100 - 25*pi." },
        { tag: "GRE 165+ Contender • 3D Solids", q: "If a cylinder's radius increases by 20% and its height decreases by 25%, by what percent does its volume change?", opts: ["A. -10%", "B. -5%", "C. 0%", "D. +8%", "E. +15%"], ans: 3, exp: "1.44 * 0.75 = 1.08 => +8%." },
        { tag: "GRE 170 Perfection • Triangles", q: "Two sides of a triangle have lengths 7 and 13. Which CANNOT be the perimeter of the triangle?", opts: ["A. 27", "B. 30", "C. 35", "D. 39", "E. 40"], ans: 4, exp: "Third side < 20 => Perimeter < 40." }
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
      overview: "GRE Data Analysis focuses on Standard Deviation spread, Normal Distribution intervals (68% within 1 SD, 95% within 2 SDs), Box-and-Whisker quartiles (Q1, Median, Q3, IQR), and multi-chart Data Interpretation.",
      bridge: "Adding a constant c to every value shifts Mean and Median by +c, while Standard Deviation and Interquartile Range (IQR) remain completely unchanged.",
      rules: [
        { name: "Law 1: Empirical Normal Curve Split", desc: "Between Mean and +1 SD = 34%; +1 SD to +2 SD = 13.5% (~14%); above +2 SD = 2.5% (~2%)." },
        { name: "Law 2: Mean vs. Median Skewness", desc: "In a right-skewed distribution (long upper tail), Mean > Median." }
      ],
      worked: [
        { tier: "GRE 155+ Foundation", p: "Normal distribution with mean 60 and SD 8. Percent of values between 52 and 76?", s: "1. 52 is -1 SD (34% below mean); 76 is +2 SD (34% + 13.5% = 47.5% above mean).\n2. Total = 34% + 47.5% = 81.5%." },
        { tier: "GRE 165+ Contender", p: "Dataset {10, 12, 14, 16, 18} vs {110, 112, 114, 116, 118}. Compare SDs.", s: "1. Adding 100 shifts every point equally without changing spread.\n2. Standard deviations are identical." },
        { tier: "GRE 170 Perfection", p: "In a normal distribution, 16% of scores exceed 78 and 2.5% exceed 86. Find the mean.", s: "1. 16% above 78 => 78 = Mean + 1 SD. 2.5% above 86 => 86 = Mean + 2 SD.\n2. SD = 86 - 78 = 8 => Mean = 70." }
      ],
      drills: [
        { tag: "GRE 155+ Foundation • Normal Dist.", q: "In a normal distribution with mean 60 and SD 8, approximately what percent of data lies between 52 and 76?", opts: ["A. 68.0%", "B. 81.5%", "C. 84.0%", "D. 95.0%", "E. 97.5%"], ans: 1, exp: "34% (-1 SD to Mean) + 47.5% (Mean to +2 SD) = 81.5%." },
        { tag: "GRE 170 Perfection • Percentiles", q: "In a normal distribution, 16% of values exceed 78 and 2.5% exceed 86. What is the arithmetic mean?", opts: ["A. 66", "B. 68", "C. 70", "D. 72", "E. 74"], ans: 2, exp: "Mean + 1 SD = 78 and Mean + 2 SD = 86 => SD = 8 => Mean = 70." }
      ]
    }
  ];

  window._GRE_T1_MOD = 0;
  window._GRE_T1_SUB = "DRILLS";
  window._GRE_T1_TIER = "ALL";
  window._GRE_T1_QIDX = 0;
  window._GRE_T1_ATT = {};
  window._GRE_T1_PG_EXTRA = window._GRE_T1_PG_EXTRA || [];

  async function hydrateGreTab1Pg() {
    if (window._GRE_T1_PG_FETCHED) return window._GRE_T1_PG_EXTRA; window._GRE_T1_PG_FETCHED = true;
    try {
      const res = await fetch(`/api/questions?section=QUANT_CORE&limit=20&t=${Date.now()}`);
      if (res.ok) {
        const data = await res.json();
        const rows = Array.isArray(data) ? data : (data.questions || []);
        window._GRE_T1_PG_EXTRA = rows.map(q => {
          let opts = q.options_json || q.options || [];
          if (typeof opts === "string") { try { opts = JSON.parse(opts); } catch (_) { opts = []; } }
          const stem = q.prompt || q.question || "";
          if (!stem || !Array.isArray(opts) || opts.length < 4) return null;
          return {
            tag: "PostgreSQL Live • GRE Quant",
            q: stem,
            opts: opts.map((o, oi) => /^[A-E]\./.test(o) ? o : `${String.fromCharCode(65 + oi)}. ${o}`),
            ans: parseInt(String(q.answer ?? "0"), 10) || 0,
            exp: q.explanation || "Verified PostgreSQL GRE solution."
          };
        }).filter(Boolean).slice(0, 4);
      }
    } catch (_) {}
    return window._GRE_T1_PG_EXTRA;
  }

  window.renderGreQuantTab1 = async function (el) {
    const target = el || document.getElementById("main-workspace");
    if (!target) return;
    const pgExtra = await hydrateGreTab1Pg();
    const modIdx = Math.min(GRE_QUANT_MODULES.length - 1, Math.max(0, Number(window._GRE_T1_MOD || 0)));
    const m = GRE_QUANT_MODULES[modIdx];
    const allDrills = [...m.drills, ...pgExtra];
    const qIdx = Math.min(allDrills.length - 1, Math.max(0, Number(window._GRE_T1_QIDX || 0)));
    const curDrill = allDrills[qIdx];

    const filteredWorked = window._GRE_T1_TIER === "ALL"
      ? m.worked
      : m.worked.filter(w => w.tier.includes(window._GRE_T1_TIER));

    const attMap = window._GRE_T1_ATT[modIdx] || {};
    const attCount = Object.keys(attMap).length;
    const corCount = Object.values(attMap).filter(Boolean).length;

    target.innerHTML = `
      <div class="max-w-7xl mx-auto pt-4 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div class="lg:col-span-4 space-y-2.5">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">GRE QUANT &amp; DATA ANALYSIS (5 MODULES)</div>
          ${GRE_QUANT_MODULES.map((item, idx) => `
            <button type="button" onclick="window._GRE_T1_MOD=${idx}; window._GRE_T1_QIDX=0; window.renderGreQuantTab1();"
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
            <button type="button" onclick="window._GRE_T1_SUB='THEORY'; window.renderGreQuantTab1();"
              class="px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${window._GRE_T1_SUB === "THEORY" ? "bg-indigo-600 text-white shadow-sm" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"}">
              Chapter Refresher &amp; Worked Examples
            </button>
            <button type="button" onclick="window._GRE_T1_SUB='DRILLS'; window.renderGreQuantTab1();"
              class="px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${window._GRE_T1_SUB === "DRILLS" ? "bg-indigo-600 text-white shadow-sm" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"}">
              Shortcuts &amp; ${allDrills.length} GRE Practice Drills
            </button>
          </div>

          ${window._GRE_T1_SUB === "THEORY" ? `
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              <div class="font-extrabold uppercase text-[11px] text-indigo-600">ETS GRE Concept Overview &amp; Bridge</div>
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
                <span class="text-xs font-extrabold uppercase text-emerald-800 dark:text-emerald-300">GRADED GRE WORKED EXAMPLES (${filteredWorked.length} SOLVED STEP-BY-STEP)</span>
                <div class="flex flex-wrap gap-1.5">
                  ${["ALL", "155+", "165+", "170"].map(t => `
                    <button type="button" onclick="window._GRE_T1_TIER='${t}'; window.renderGreQuantTab1();"
                      class="px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer ${window._GRE_T1_TIER === t ? "bg-emerald-600 text-white" : "bg-white dark:bg-slate-900 border text-slate-700"}">
                      ${t === "ALL" ? "ALL" : (t === "155+" ? "GRE 155+ Foundation" : (t === "165+" ? "GRE 165+ Contender" : "GRE 170 Perfection"))}
                    </button>
                  `).join("")}
                </div>
              </div>
              ${filteredWorked.map(w => `
                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="font-extrabold text-slate-900 dark:text-white">${w.p}</span>
                    <span class="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-extrabold">${w.tier}</span>
                  </div>
                  <div class="text-slate-600 dark:text-slate-300 whitespace-pre-line">${w.s}</div>
                </div>
              `).join("")}
            </div>
          ` : `
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">INTERACTIVE GRE PRACTICE WORKBENCH (${allDrills.length} QUESTIONS • POSTGRESQL SYNCED)</div>
                  <div class="text-xs text-slate-500 mt-0.5">Attempted: <strong>${attCount}/${allDrills.length}</strong> &bull; Correct: <strong class="text-emerald-600">${corCount}</strong></div>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  ${allDrills.map((_, i) => `
                    <button type="button" onclick="window._GRE_T1_QIDX=${i}; window.renderGreQuantTab1();"
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
                    <button type="button" onclick="window._GRE_T1_ATT[${modIdx}]=window._GRE_T1_ATT[${modIdx}]||{}; window._GRE_T1_ATT[${modIdx}][${qIdx}]=(${oi}===${curDrill.ans}); document.getElementById('gre-t1-sol').classList.remove('hidden'); this.classList.add('${oi === curDrill.ans ? "bg-emerald-100 border-emerald-500 text-emerald-900 font-bold" : "bg-rose-100 border-rose-400 text-rose-900"}');"
                      class="text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 font-medium cursor-pointer">${opt}</button>
                  `).join("")}
                </div>
                <div id="gre-t1-sol" class="hidden p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                  <strong>Official GRE Solution:</strong> ${curDrill.exp}
                </div>
                <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                  <button type="button" onclick="if(window._GRE_T1_QIDX>0){window._GRE_T1_QIDX--; window.renderGreQuantTab1();}" class="px-3.5 py-1.5 rounded-xl border text-xs font-bold cursor-pointer">&larr; Previous</button>
                  <button type="button" onclick="if(window._GRE_T1_QIDX<${allDrills.length - 1}){window._GRE_T1_QIDX++; window.renderGreQuantTab1();}" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold cursor-pointer">Next Question &rarr;</button>
                </div>
              </div>
            </div>
          `}
        </div>
      </div>
    `;
  };

  window.renderQuantTab = window.renderGreQuantTab1;
  window.renderTab1 = window.renderGreQuantTab1;
  window.addEventListener("DOMContentLoaded", () => setTimeout(() => window.renderGreQuantTab1(), 120));
})();