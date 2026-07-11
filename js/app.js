/* ============================================================
   app.js — boot sequence, password lock, lightbox, easter eggs
   ============================================================ */
(function () {
  const VALID = [DATA.PASSCODE, "1207"]; // accept month-first or day-first
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------------- loader ---------------- */
  function runLoader(done) {
    const bar = $(".loader-bar span");
    const loader = $("#loader");
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 16 + 6;
      if (p >= 100) { p = 100; clearInterval(iv); setTimeout(finish, 350); }
      bar.style.width = p + "%";
    }, 130);
    function finish() {
      loader.classList.add("gone");
      setTimeout(() => { loader.remove(); done(); }, 700);
    }
  }

  /* ---------------- password lock ---------------- */
  function initLock(onUnlock) {
    const lock = $("#lock");
    lock.hidden = false;
    void lock.offsetWidth; lock.classList.add("show");
    const boxes = $$(".pin-box");
    const pin = $("#pin");
    const hint = $("#lock-hint");
    boxes[0].focus();

    boxes.forEach((b, i) => {
      b.addEventListener("input", () => {
        b.value = b.value.replace(/\D/g, "").slice(0, 1);
        b.classList.toggle("filled", !!b.value);
        if (b.value && i < boxes.length - 1) boxes[i + 1].focus();
        if (boxes.every(x => x.value)) check();
      });
      b.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !b.value && i > 0) { boxes[i - 1].focus(); boxes[i - 1].value = ""; boxes[i - 1].classList.remove("filled"); }
        if (e.key === "Enter") check();
      });
      b.addEventListener("focus", () => b.select());
    });
    // paste support
    pin.addEventListener("paste", (e) => {
      const t = (e.clipboardData.getData("text") || "").replace(/\D/g, "").slice(0, 4);
      if (t.length) { e.preventDefault(); t.split("").forEach((d, i) => { if (boxes[i]) { boxes[i].value = d; boxes[i].classList.add("filled"); } }); if (t.length === 4) check(); }
    });

    let tries = 0;
    function check() {
      const code = boxes.map(b => b.value).join("");
      if (code.length < 4) return;
      if (VALID.includes(code)) {
        pin.classList.add("ok");
        hint.textContent = "aho enti. etfadaly gowa.";
        FX.confetti && FX.confetti({ count: 70, y: innerHeight * .5 });
        // start "Yama Sawa" right on this keystroke (a real gesture, so the
        // browser allows it) — it comes in as the lock dissolves.
        const yama = DATA.SONGS.findIndex(s => /yama/i.test(s.title));
        try { PLAYER.load(yama >= 0 ? yama : 0, true); } catch (e) {}
        setTimeout(() => {
          lock.classList.add("leaving");
          setTimeout(() => { lock.remove(); onUnlock(); }, 850);
        }, 650);
      } else {
        tries++;
        pin.classList.add("error");
        hint.textContent = tries >= 2 ? "da el youm elly etwaladty fih. garaby el youm w el shahr 🎂" : "mesh keda. wallahy enti 3arfa di.";
        setTimeout(() => {
          pin.classList.remove("error");
          boxes.forEach(b => { b.value = ""; b.classList.remove("filled"); });
          boxes[0].focus();
        }, 500);
      }
    }

    $("#lock-reveal").addEventListener("click", () => {
      hint.textContent = "feeh tarikh wa7ed bs momken a2fel 3aleeh 7aga zay di. w howa youmek enti. 🎂";
    });
  }

  /* ---------------- nav ---------------- */
  function initNav() {
    const nav = $("#nav"), links = $("#nav-links"), toggle = $("#nav-toggle");
    const prog = $("#scroll-progress span"), toTop = $("#to-top");
    const onScroll = () => {
      const y = scrollY;
      nav.classList.toggle("scrolled", y > 40);
      toTop.classList.toggle("show", y > 600);
      const h = document.documentElement.scrollHeight - innerHeight;
      prog.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    };
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
    toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
    links.addEventListener("click", (e) => {
      if (e.target.closest("a")) { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
    });
  }

  /* ---------------- lightbox ---------------- */
  window.LB = (function () {
    const box = $("#lightbox"), img = $("#lb-img"), cap = $("#lb-cap");
    let items = [], i = 0;
    function show() {
      const it = items[i];
      img.style.animation = "none"; void img.offsetWidth; img.style.animation = "";
      img.src = it.src; cap.textContent = it.cap || "";
    }
    function open(list, idx) {
      items = list; i = idx; box.hidden = false;
      void box.offsetWidth; box.classList.add("show"); show();
      document.body.style.overflow = "hidden";
    }
    function close() { box.classList.remove("show"); setTimeout(() => { box.hidden = true; document.body.style.overflow = ""; }, 350); }
    function next() { i = (i + 1) % items.length; show(); }
    function prev() { i = (i - 1 + items.length) % items.length; show(); }
    $(".lb-close").addEventListener("click", close);
    $(".lb-next").addEventListener("click", next);
    $(".lb-prev").addEventListener("click", prev);
    box.addEventListener("click", (e) => { if (e.target === box) close(); });
    addEventListener("keydown", (e) => {
      if (box.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    });
    return { open };
  })();

  /* ---------------- easter eggs ---------------- */
  const SWEET = [
    "la2eeti wa7ed. tab3an enti hatla2y.",
    "hi. lessa bafaker feeki.",
    "el 2alb da kan mekhaby nafso 3amdan. zayy ana lama bakoon 2osadek.",
    "fakra soghayara: enti a7la wa7da 3andy.",
    "bsss. ba7ebek. kamely 3ady.",
    "la2eeteeny. tab estaghlaha w a2ol tany: bamoot feeki."
  ];
  function initEasterEggs() {
    // hidden hearts
    const spots = [[12, 30], [88, 22], [6, 72], [93, 66], [50, 88]];
    let found = 0;
    spots.forEach((s, idx) => {
      const h = document.createElement("div");
      h.className = "secret-heart";
      h.textContent = "❤";
      h.style.left = s[0] + "vw"; h.style.top = s[1] + "vh";
      h.addEventListener("mouseenter", () => h.classList.add("vis"));
      h.addEventListener("click", () => {
        FX.toast(SWEET[idx % SWEET.length]);
        FX.confetti({ count: 26, x: (s[0] / 100) * innerWidth, y: (s[1] / 100) * innerHeight, spread: .5 });
        h.remove(); found++;
        if (found === spots.length) setTimeout(() => { FX.toast("5 men 5. enti mabetfotlekeesh 7aga. da sabab kaman."); FX.fireworksShow(3000); }, 800);
      });
      document.body.appendChild(h);
      // occasionally shimmer so they're findable
      setInterval(() => { if (Math.random() < .3) { h.classList.add("vis"); setTimeout(() => h.classList.remove("vis"), 900); } }, 5000 + idx * 1400);
    });

    // type her name anywhere -> heart shower
    let buf = "";
    addEventListener("keydown", (e) => {
      if (e.key.length !== 1) return;
      buf = (buf + e.key.toLowerCase()).slice(-4);
      if (buf === "dina" || buf === "love") {
        FX.confetti({ count: 120, y: innerHeight * .3 });
        FX.toast(buf === "dina" ? "aywa. hia. hia bel zabt." : "enti katbtiha. tab w ana ha2olha bgd: ba7ebek.");
        buf = "";
      }
    });

    // brand clicks
    let bc = 0, bt;
    $(".brand").addEventListener("click", () => {
      bc++; clearTimeout(bt); bt = setTimeout(() => bc = 0, 1200);
      if (bc >= 4) { FX.toast("tayeb tayeb, fahemt, kolo leeki. kol sana w enti tayba ya Dina."); FX.confetti({ count: 60 }); bc = 0; }
    });

    // double click empty space -> floating heart
    addEventListener("dblclick", (e) => {
      if (e.target.closest("a,button,input,.reason,.envelope,.polaroid,.m-item")) return;
      const s = document.createElement("div");
      s.textContent = "❤";
      s.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;z-index:120;pointer-events:none;
        color:var(--rose);font-size:${12 + Math.random() * 16}px;transform:translate(-50%,-50%);
        transition:transform 1.4s ease,opacity 1.4s ease;filter:drop-shadow(0 0 6px rgba(231,159,182,.7))`;
      document.body.appendChild(s);
      requestAnimationFrame(() => { s.style.transform = `translate(-50%,-50%) translateY(-120px) scale(1.4)`; s.style.opacity = "0"; });
      setTimeout(() => s.remove(), 1500);
    });
  }

  /* ---------------- boot ---------------- */
  function boot() {
    FX.initCursor();
    FX.initAmbient();
    FX.initReveal();
    PLAYER.init();
    initNav();
    initLock(unlock);
  }
  function unlock() {
    document.body.dataset.locked = "false";
    $("#app").hidden = false;
    router.start();
    initEasterEggs();
    // browsers block autoplay until the user interacts, so start the music
    // on her very first click/tap/keypress. fires once, then removes itself.
    const startMusic = () => {
      try { PLAYER.play(); } catch (e) {}
      document.removeEventListener("pointerdown", startMusic);
      document.removeEventListener("keydown", startMusic);
    };
    document.addEventListener("pointerdown", startMusic);
    document.addEventListener("keydown", startMusic);
    setTimeout(() => FX.toast("tip: el mazika fo2 3al ymeen. w feeh 2loob soghayara mekhabya 7awalein kaman."), 1200);
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", () => runLoader(boot));
  else runLoader(boot);
})();
