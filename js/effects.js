/* ============================================================
   effects.js — cursor, ambient particles, confetti, fireworks,
   reveal-on-scroll, count-up, typing, tilt, toast, balloons.
   ============================================================ */
window.FX = (function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const rand = (a, b) => a + Math.random() * (b - a);
  const ROSE = ["#e79fb6", "#f7e2ea", "#c86f8d", "#e8caa0", "#d6ac78", "#b98bb0"];

  /* ---------------- custom cursor ---------------- */
  function initCursor() {
    if (coarse) return;
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    }, { passive: true });
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    const hoverSel = "a,button,input,.reason,.polaroid,.envelope,.m-item,.film-cell,.h-cell,.tl-card,.dream,.gal-tab,.cake,[data-hover]";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(hoverSel)) document.body.classList.add("cursor-hover");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(hoverSel)) document.body.classList.remove("cursor-hover");
    });
    addEventListener("mousedown", () => document.body.classList.add("cursor-press"));
    addEventListener("mouseup", () => document.body.classList.remove("cursor-press"));
  }

  /* ---------------- ambient background ---------------- */
  function initAmbient() {
    const cv = document.getElementById("bg-canvas");
    const ctx = cv.getContext("2d");
    let W, H, dpr, parts = [];
    function size() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = cv.width = innerWidth * dpr;
      H = cv.height = innerHeight * dpr;
      cv.style.width = innerWidth + "px"; cv.style.height = innerHeight + "px";
    }
    size(); addEventListener("resize", size);

    const COUNT = reduce ? 14 : (innerWidth < 700 ? 26 : 46);
    function mk(y) {
      const kind = Math.random() < 0.22 ? "heart" : (Math.random() < 0.5 ? "petal" : "dust");
      return {
        x: Math.random() * W,
        y: y != null ? y : Math.random() * H,
        r: kind === "dust" ? rand(0.6, 1.8) * dpr : rand(4, 11) * dpr,
        vy: rand(0.12, 0.5) * dpr,
        vx: rand(-0.25, 0.25) * dpr,
        rot: rand(0, Math.PI * 2),
        vr: rand(-0.01, 0.01),
        a: kind === "dust" ? rand(0.15, 0.5) : rand(0.12, 0.42),
        c: ROSE[(Math.random() * ROSE.length) | 0],
        kind
      };
    }
    for (let i = 0; i < COUNT; i++) parts.push(mk());

    function heart(x, y, r, rot) {
      ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(r / 16, r / 16);
      ctx.beginPath();
      ctx.moveTo(0, 5);
      ctx.bezierCurveTo(-8, -6, -16, 4, 0, 15);
      ctx.bezierCurveTo(16, 4, 8, -6, 0, 5);
      ctx.closePath(); ctx.fill(); ctx.restore();
    }
    function frame() {
      ctx.clearRect(0, 0, W, H);
      for (const p of parts) {
        p.y -= p.vy; p.x += p.vx; p.rot += p.vr;
        if (p.y < -20 * dpr) { Object.assign(p, mk(H + 20 * dpr)); }
        ctx.globalAlpha = p.a;
        ctx.fillStyle = p.c;
        if (p.kind === "heart") heart(p.x, p.y, p.r, p.rot);
        else if (p.kind === "petal") {
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
          ctx.beginPath(); ctx.ellipse(0, 0, p.r, p.r * 0.5, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
        } else { ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); }
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(frame);
    }
    frame();
  }

  /* ---------------- fx canvas (confetti + fireworks) ---------------- */
  let fxCtx, fxCv, fxW, fxH, fxDpr, fxParts = [], fxRunning = false;
  function fxInit() {
    if (fxCtx) return;
    fxCv = document.getElementById("fx-canvas");
    fxCtx = fxCv.getContext("2d");
    const size = () => {
      fxDpr = Math.min(devicePixelRatio || 1, 2);
      fxW = fxCv.width = innerWidth * fxDpr;
      fxH = fxCv.height = innerHeight * fxDpr;
      fxCv.style.width = innerWidth + "px"; fxCv.style.height = innerHeight + "px";
    };
    size(); addEventListener("resize", size);
  }
  function fxLoop() {
    if (!fxRunning) return;
    fxCtx.clearRect(0, 0, fxW, fxH);
    for (let i = fxParts.length - 1; i >= 0; i--) {
      const p = fxParts[i];
      p.vy += p.g; p.x += p.vx; p.y += p.vy; p.vx *= 0.99; p.life -= p.decay;
      if (p.life <= 0 || p.y > fxH + 40) { fxParts.splice(i, 1); continue; }
      fxCtx.globalAlpha = Math.max(0, Math.min(1, p.life));
      fxCtx.fillStyle = p.c;
      if (p.shape === "rect") {
        fxCtx.save(); fxCtx.translate(p.x, p.y); fxCtx.rotate(p.rot += p.vr);
        fxCtx.fillRect(-p.r, -p.r * 0.4, p.r * 2, p.r * 0.8); fxCtx.restore();
      } else { fxCtx.beginPath(); fxCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2); fxCtx.fill(); }
    }
    fxCtx.globalAlpha = 1;
    if (fxParts.length) requestAnimationFrame(fxLoop);
    else { fxRunning = false; fxCtx.clearRect(0, 0, fxW, fxH); }
  }
  function fxStart() { if (!fxRunning) { fxRunning = true; requestAnimationFrame(fxLoop); } }

  function confetti(opts = {}) {
    fxInit();
    const n = opts.count || 120;
    const ox = (opts.x != null ? opts.x : innerWidth / 2) * fxDpr;
    const oy = (opts.y != null ? opts.y : innerHeight * 0.35) * fxDpr;
    const spread = (opts.spread || 1);
    for (let i = 0; i < n; i++) {
      const ang = rand(0, Math.PI * 2), spd = rand(4, 15) * fxDpr * spread;
      fxParts.push({
        x: ox, y: oy, vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd - rand(2, 8) * fxDpr,
        g: 0.16 * fxDpr, r: rand(3, 7) * fxDpr, rot: rand(0, 6), vr: rand(-0.3, 0.3),
        c: ROSE[(Math.random() * ROSE.length) | 0], life: 1, decay: rand(0.006, 0.014),
        shape: Math.random() < 0.6 ? "rect" : "dot"
      });
    }
    fxStart();
  }

  function firework(x, y) {
    const n = 46 + (Math.random() * 30 | 0);
    const hue = ROSE[(Math.random() * ROSE.length) | 0];
    for (let i = 0; i < n; i++) {
      const ang = (Math.PI * 2 * i) / n, spd = rand(2, 8) * fxDpr;
      fxParts.push({
        x: x * fxDpr, y: y * fxDpr, vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd,
        g: 0.05 * fxDpr, r: rand(1.6, 3.4) * fxDpr, life: 1, decay: rand(0.008, 0.02),
        c: Math.random() < 0.5 ? hue : ROSE[(Math.random() * ROSE.length) | 0], shape: "dot"
      });
    }
    fxStart();
  }
  let showTimer = null;
  function fireworksShow(ms = 6000) {
    fxInit();
    const end = Date.now() + ms;
    clearInterval(showTimer);
    (function fire() {
      firework(rand(innerWidth * 0.15, innerWidth * 0.85), rand(innerHeight * 0.15, innerHeight * 0.55));
      if (Date.now() < end) setTimeout(fire, rand(280, 620));
    })();
  }

  /* ---------------- reveal on scroll ---------------- */
  let io;
  function initReveal() {
    io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          const el = e.target;
          if (el.hasAttribute("data-stagger")) {
            [...el.children].forEach((c, i) => { c.style.transitionDelay = (i * (+el.dataset.stagger || 70)) + "ms"; });
          }
          el.classList.add("in");
          if (el.dataset.count != null) countUp(el);
          io.unobserve(el);
        }
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  }
  function scanReveals(root = document) {
    root.querySelectorAll(".reveal,[data-stagger],[data-count]").forEach((el) => {
      if (!el.classList.contains("in")) io.observe(el);
    });
  }

  /* ---------------- count up ---------------- */
  function countUp(el) {
    const target = +el.dataset.count, dur = +el.dataset.dur || 1600;
    const suffix = el.dataset.suffix || "";
    const start = performance.now();
    function step(t) {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------------- typing ---------------- */
  function type(el, text, speed = 42, cb) {
    el.textContent = ""; let i = 0;
    (function tick() {
      if (i <= text.length) { el.textContent = text.slice(0, i++); setTimeout(tick, speed); }
      else if (cb) cb();
    })();
  }

  /* ---------------- 3D tilt ---------------- */
  function tilt(el, max = 9) {
    if (coarse || reduce) return;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateY(-4px)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  }

  /* ---------------- toast ---------------- */
  let toastTimer;
  function toast(msg, ms = 2600) {
    const t = document.getElementById("toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), ms);
  }

  /* ---------------- balloons ---------------- */
  function balloons(n = 14) {
    for (let i = 0; i < n; i++) {
      const b = document.createElement("div");
      b.className = "balloon";
      b.style.left = rand(2, 94) + "vw";
      b.style.background = ROSE[(Math.random() * ROSE.length) | 0];
      const dur = rand(7, 13);
      b.style.animation = `floatUp ${dur}s linear forwards`;
      b.style.animationDelay = rand(0, 2.5) + "s";
      document.body.appendChild(b);
      setTimeout(() => b.remove(), (dur + 3) * 1000);
    }
  }

  return { initCursor, initAmbient, confetti, firework, fireworksShow, initReveal, scanReveals, countUp, type, tilt, toast, balloons, reduce };
})();
