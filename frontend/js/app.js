window.switchTab = function (tabId) {
  window.IPM_STATE.activeTab = tabId;
  document.querySelectorAll("[data-tab-btn]").forEach(btn => {
    const active = btn.getAttribute("data-tab-btn") === tabId;
    btn.className = active
      ? "px-3.5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow"
      : "px-3.5 py-2 rounded-xl bg-slate-900 text-slate-300 hover:bg-slate-800 text-xs font-semibold border border-slate-800";
  });
  window.renderActiveTab();
};

window.renderActiveTab = function () {
  const el = document.getElementById("tab-content");
  if (!el) return;
  const tab = window.IPM_STATE.activeTab;
  if (tab === "tab1") window.renderTab1(el);
  else if (tab === "tab2") window.renderTab2(el);
  else if (tab === "tab3") window.renderTab3(el);
  else if (tab === "tab4") window.renderTab4(el);
  else if (tab === "tab5") window.renderTab5(el);
  else if (tab === "tab6") window.renderTab6(el);
  else if (tab === "tab7") window.renderTab7(el);
  else if (tab === "tab8") window.renderTab8(el);
  else if (tab === "tab9") window.renderTab9(el);
};

document.addEventListener("DOMContentLoaded", () => {
  window.renderExamSwitcher();
  window.switchTab("tab1");
});

// Enable independent Left & Right vertical scrolling on split chapter workspaces
window.applySplitPaneScroll = function () {
  const ws = document.getElementById("main-workspace");
  if (!ws) return;
  const grids = ws.querySelectorAll(".grid");
  grids.forEach(g => {
    const cls = g.className || "";
    if ((cls.includes("lg:grid-cols-12") || cls.includes("md:grid-cols-12")) && g.children.length === 2) {
      g.classList.add("split-pane-layout");
      g.children[0].classList.add("split-pane-left", "pane-scroll");
      g.children[1].classList.add("split-pane-right", "pane-scroll");
    }
  });
};

document.addEventListener("click", (e) => {
  const leftCard = e.target.closest(".split-pane-left button, .split-pane-left [onclick]");
  if (leftCard) {
    setTimeout(() => {
      const rightPane = document.querySelector("#main-workspace .split-pane-right");
      if (rightPane) rightPane.scrollTop = 0;
    }, 30);
  }
});

const _splitObs = new MutationObserver(() => {
  if (typeof window.applySplitPaneScroll === "function") window.applySplitPaneScroll();
});
window.addEventListener("DOMContentLoaded", () => {
  const ws = document.getElementById("main-workspace");
  if (ws) _splitObs.observe(ws, { childList: true, subtree: true });
  setTimeout(() => window.applySplitPaneScroll(), 200);
});