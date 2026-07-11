/* ============================================================
   router.js — hash routing + page transitions
   ============================================================ */
window.router = (function () {
  const view = document.getElementById("view");
  const routes = ["home", "story", "reasons", "letters", "gallery", "dreams", "birthday", "ending"];
  let current = null, currentName = null, started = false;

  function parse() {
    let h = (location.hash || "#/home").replace(/^#\/?/, "");
    if (!routes.includes(h)) h = "home";
    return h;
  }

  function setActiveNav(name) {
    document.querySelectorAll("#nav-links a").forEach(a => {
      const to = (a.getAttribute("href") || "").replace(/^#\/?/, "");
      a.classList.toggle("active", to === name);
    });
  }

  function mountPage(name) {
    const page = PAGES[name];
    if (!page) return;
    if (current && current.unmount) { try { current.unmount(); } catch (e) {} }

    const wrap = document.createElement("div");
    wrap.className = "page";
    wrap.innerHTML = page.render();

    view.innerHTML = "";
    view.appendChild(wrap);
    current = page; currentName = name;

    window.scrollTo({ top: 0, behavior: "auto" });
    setActiveNav(name);
    if (page.mount) { try { page.mount(); } catch (e) { console.warn(e); } }
    FX.scanReveals(wrap);
    // let the browser paint, then reveal above-the-fold items already in view
    requestAnimationFrame(() => wrap.querySelectorAll(".reveal,[data-stagger]").forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight * 0.92) {
        if (el.hasAttribute("data-stagger"))
          [...el.children].forEach((c, i) => c.style.transitionDelay = (i * (+el.dataset.stagger || 70)) + "ms");
        el.classList.add("in");
        if (el.dataset.count != null) FX.countUp(el);
      }
    }));
    // absolute safety net: if animations/observers stall, force everything visible
    clearTimeout(mountPage._safe);
    mountPage._safe = setTimeout(() => {
      if (view.firstElementChild === wrap) {
        wrap.classList.add("force-visible");
        wrap.querySelectorAll("[data-count]").forEach(el => {
          if (el.textContent === "0")
            el.textContent = (+el.dataset.count).toLocaleString() + (el.dataset.suffix || "");
        });
      }
    }, 2600);
    view.focus({ preventScroll: true });
  }

  function go() {
    const name = parse();
    if (name === currentName && started) return;
    const old = view.firstElementChild;
    if (old) {
      old.classList.add("leaving");
      setTimeout(() => mountPage(name), 240);
    } else {
      mountPage(name);
    }
  }

  function start() {
    if (started) return;
    started = true;
    addEventListener("hashchange", go);
    go();
  }
  function reload() { currentName = null; go(); }

  return { start, reload, get current() { return currentName; } };
})();
