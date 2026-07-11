/* ============================================================
   pages.js — each page returns HTML + an optional mount()/unmount()
   ============================================================ */
window.PAGES = (function () {
  const D = DATA;
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const footer = (extra = "") => `
    <footer class="foot wrap reveal">
      ${extra}
      <p class="hand">et3amel bel eed, w bel 2alb, 3ashanek enti.</p>
      <nav class="foot-nav">
        <a href="#/home" data-link>el bidaya</a>
        <a href="#/story" data-link>7ekayetna</a>
        <a href="#/reasons" data-link>3ashan enti</a>
        <a href="#/letters" data-link>gawabat</a>
        <a href="#/gallery" data-link>sowarek</a>
        <a href="#/dreams" data-link>a7lam</a>
        <a href="#/birthday" data-link>3eed miladek</a>
        <a href="#/ending" data-link>akher 7aga</a>
      </nav>
    </footer>`;

  const secHead = (kicker, title, sub) => `
    <div class="sec-head reveal">
      <p class="kicker">${kicker}</p>
      <h2 class="h-xl">${title}</h2>
      ${sub ? `<p class="lead">${sub}</p>` : ""}
    </div>`;

  /* ------------------------------------------------ HOME */
  const home = {
    render: () => `
      <section class="hero">
        <div class="hero-media"><img src="${D.PHOTOS[0].src}" alt="Dina" /></div>
        <div class="hero-inner">
          <p class="eyebrow reveal">kol sana w enti tayba,</p>
          <h1 class="display reveal" data-r="scale"><span class="n">${D.NAME}</span></h1>
          <p class="hero-sub reveal">ma2dertesh a7ot kol elly gowaya f message el sana di, fa 3amaltlek 3alam soghayar badalha. khodi wa2tek gowah. kolo leeki.</p>
          <div class="btn-row hero-cta reveal">
            <a class="btn" href="#/story" data-link>ebtidi men hena</a>
            <a class="btn ghost" href="#/birthday" data-link>wadiny 3ala el torta 3ala tool</a>
          </div>
        </div>
        <div class="scroll-cue"><span class="mouse"></span><span>enzel</span></div>
      </section>

      <section class="section wrap">
        <div class="narrow center reveal">
          <p class="kicker">e3teraf soghayar</p>
          <p class="pull" id="type-line"></p>
        </div>
      </section>

      <section class="section wrap">
        <div class="counter-row" data-stagger="120">
          <div class="counter"><div class="num" data-count="${D.REASONS.length}">0</div><div class="lbl">sabab gowa</div></div>
          <div class="counter"><div class="num" data-count="${D.LETTERS.length}">0</div><div class="lbl">gawabat te2raihom</div></div>
          <div class="counter"><div class="num" data-count="${D.SONGS.length}">0</div><div class="lbl">aghany ba2et beta3etna</div></div>
          <div class="counter"><div class="num" data-count="1" data-suffix="">0</div><div class="lbl">wa7da zayek (mafeesh tania)</div></div>
        </div>
      </section>

      <section class="section wrap">
        <div class="split">
          <div class="split-media reveal" data-r="left" data-tilt>
            <img src="${D.PHOTOS[1].src}" alt="Dina" />
            <span class="frame-tag">${esc(D.PHOTOS[1].cap)}</span>
          </div>
          <div class="reveal" data-r="right">
            <p class="kicker">2abl ma tekamely nozol</p>
            <p class="pull">di mesh kart w mesh caption. di a2rab 7aga 2edert awasallek biha e7sasy <span class="grad-text">enni ba7ebek</span> w e7na 3ala bo3d balad, f youm 3ady khales.</p>
          </div>
        </div>
      </section>

      <section class="section wrap">
        ${secHead("lef 7awalek", "3ayza teroohy fein?", "kol bab byewadeek le 7aga 3amaltha 3ashanek.")}
        <div class="dreams-grid" data-stagger="90">
          ${[
            ["#/story", "📖", "7ekayetna", "ezay youm 3ady ba2a kol da."],
            ["#/reasons", "❤", "3ashan ba7ebek", `kolohom el ${D.REASONS.length}, men gher 7ashw.`],
            ["#/letters", "✉", "gawabat leeki", "eftahihom wa7ed wara el tany."],
            ["#/gallery", "🖼", "sowarek", "enti, f mit sora soghayara."],
            ["#/dreams", "🌙", "a7lam", "el 7aya elly fadel batkhayalha w enti feeha."],
            ["#/birthday", "🎂", "3eed miladek", "el goz2 el 3aaly el mabsoot. hat el dawsha."]
          ].map(([href, ico, t, b]) => `
            <a class="dream reveal" href="${href}" data-link>
              <div class="d-ico">${ico}</div>
              <h3>${t}</h3><p>${b}</p>
            </a>`).join("")}
        </div>
      </section>

      ${footer()}`,
    mount: () => {
      FX.type(document.getElementById("type-line"),
        "ana aslan maba3melsh 7agat zay di khales. w rghm keda 3amaltlek wa7da. shofy ana wasalt le eh 3ashanek.", 42);
      document.querySelectorAll("[data-tilt]").forEach(e => FX.tilt(e));
    }
  };

  /* ------------------------------------------------ STORY */
  const story = {
    render: () => `
      <section class="section wrap" style="padding-top:130px">
        ${secHead("7ekayetna", "e7na wselna le hena ezay", "ba2y el tafasil beena e7na. bs di el soora el kbeera.")}
        <div class="tl">
          ${D.STORY.map((s, i) => `
            <div class="tl-item reveal" data-r="${i % 2 ? "right" : "left"}">
              <span class="tl-dot"></span>
              <div class="tl-card">
                <p class="tl-when">${esc(s.when)}</p>
                <h3 class="tl-title">${esc(s.title)}</h3>
                <p class="tl-body">${esc(s.body)}</p>
                ${s.img ? `<img src="${s.img}" alt="" loading="lazy" />` : ""}
              </div>
            </div>`).join("")}
        </div>
        <div class="center reveal" style="margin-top:50px">
          <a class="btn" href="#/reasons" data-link>w di el asbab enha enti →</a>
        </div>
      </section>
      ${footer()}`
  };

  /* ------------------------------------------------ REASONS */
  const reasons = {
    render: () => `
      <section class="section wrap" style="padding-top:130px">
        <div class="reasons-top reveal">
          <div class="reason-count">${D.REASONS.length}<small>sabab, w lessa bizeed</small></div>
        </div>
        <div class="sec-head reveal" style="margin-bottom:34px">
          <p class="lead">mesh el noe3 el copy-paste. dol elly ana f3lan bafaker feehom.</p>
        </div>
        <div class="gal-tabs reveal" id="reason-tabs">
          <button class="gal-tab active" data-f="all">kolo</button>
          <button class="gal-tab" data-f="heart">el 7anyena</button>
          <button class="gal-tab" data-f="funny">el med7eka</button>
          <button class="gal-tab" data-f="tiny">7agat soghayara wakhed baly menha</button>
        </div>
        <div class="reasons-grid" id="reasons-grid">
          ${D.REASONS.map((r, i) => `
            <div class="reason tag-${r.tag}" data-tag="${r.tag}">
              <span class="r-num">${String(i + 1).padStart(3, "0")}</span>
              <p>${esc(r.t)}</p>
            </div>`).join("")}
        </div>
        <div class="center reveal" style="margin-top:44px">
          <a class="btn ghost" href="#/letters" data-link>e2rai elly katabtholek →</a>
        </div>
      </section>
      ${footer()}`,
    mount: () => {
      const tabs = document.getElementById("reason-tabs");
      const cards = [...document.querySelectorAll("#reasons-grid .reason")];
      tabs.addEventListener("click", (e) => {
        const b = e.target.closest(".gal-tab"); if (!b) return;
        tabs.querySelectorAll(".gal-tab").forEach(t => t.classList.remove("active"));
        b.classList.add("active");
        const f = b.dataset.f;
        cards.forEach(c => c.style.display = (f === "all" || c.dataset.tag === f) ? "" : "none");
      });
    }
  };

  /* ------------------------------------------------ LETTERS */
  const letters = {
    render: () => `
      <section class="section wrap" style="padding-top:130px">
        ${secHead("gawabat leeki", "katabtohom bkhaty el awel", "w b3dein katabtohom hena 3ashan te2dary te7tafzy beehom. eftah wa7ed.")}
        <div class="letters-grid" data-stagger="90">
          ${D.LETTERS.map((l, i) => `
            <div class="envelope reveal" data-letter="${i}">
              <span class="mood">${esc(l.mood)}</span>
              <div class="flap"></div>
              <div class="seal">${esc(l.seal)}</div>
              <div class="to">${esc(l.to)}</div>
            </div>`).join("")}
        </div>
        <div class="center reveal" style="margin-top:50px">
          <a class="btn ghost" href="#/gallery" data-link>shofy el sowar →</a>
        </div>
      </section>

      <div id="letter-overlay" hidden>
        <article class="letter-paper">
          <button class="letter-close" aria-label="Close">✕</button>
          <h3 id="l-title"></h3>
          <p class="l-date" id="l-date"></p>
          <div class="l-body" id="l-body"></div>
          <p class="l-sign" id="l-sign"></p>
        </article>
      </div>
      ${footer()}`,
    mount: () => {
      const ov = document.getElementById("letter-overlay");
      const open = (i) => {
        const l = D.LETTERS[i];
        document.getElementById("l-title").textContent = l.title;
        document.getElementById("l-date").textContent = l.date;
        document.getElementById("l-body").textContent = l.body;
        document.getElementById("l-sign").textContent = "— " + l.sign;
        ov.hidden = false; void ov.offsetWidth; ov.classList.add("show");
        ov.querySelector(".letter-paper").scrollTop = 0;
      };
      const close = () => { ov.classList.remove("show"); setTimeout(() => ov.hidden = true, 400); };
      document.querySelectorAll("[data-letter]").forEach(env =>
        env.addEventListener("click", () => { open(+env.dataset.letter); FX.confetti({ count: 40, spread: .6, y: innerHeight * .5 }); }));
      ov.querySelector(".letter-close").addEventListener("click", close);
      ov.addEventListener("click", (e) => { if (e.target === ov) close(); });
      letters._esc = (e) => { if (e.key === "Escape") close(); };
      document.addEventListener("keydown", letters._esc);
    },
    unmount: () => { if (letters._esc) document.removeEventListener("keydown", letters._esc); }
  };

  /* ------------------------------------------------ GALLERY */
  const P = D.PHOTOS;
  const heartMask = [
    "0110110",
    "1111111",
    "1111111",
    "0111110",
    "0011100",
    "0001000"
  ];
  const gallery = {
    render: () => {
      const wall = P.concat(P.slice(0, 3)).map((p, i) =>
        `<figure class="m-item lb-open" data-i="${i % P.length}"><img src="${p.src}" alt="" loading="lazy"><figcaption class="m-cap">${esc(p.cap)}</figcaption></figure>`).join("");
      const polas = P.map((p, i) =>
        `<figure class="polaroid lb-open" data-i="${i}"><img src="${p.src}" alt="" loading="lazy"><figcaption>${esc(p.cap).slice(0, 42)}</figcaption></figure>`).join("");
      const film = P.concat(P).map((p, i) =>
        `<div class="film-cell lb-open" data-i="${i % P.length}"><img src="${p.src}" alt="" loading="lazy"></div>`).join("");
      let hi = 0;
      const heart = heartMask.map(row => `<div style="display:contents">` + row.split("").map(c => {
        if (c === "0") return `<div class="h-cell void"></div>`;
        const p = P[hi % P.length]; hi++;
        return `<div class="h-cell lb-open" data-i="${(hi - 1) % P.length}"><img src="${p.src}" alt="" loading="lazy"></div>`;
      }).join("") + `</div>`).join("");

      return `
      <section class="section wrap" style="padding-top:130px">
        ${secHead("sowarek", "enti, f mit sora", "dos 3ala ay sora 3ashan tekbar.")}
        <div class="gal-tabs reveal" id="gal-tabs">
          <button class="gal-tab active" data-p="wall">7etet el sowar</button>
          <button class="gal-tab" data-p="pola">polaroids</button>
          <button class="gal-tab" data-p="film">shreet film</button>
          <button class="gal-tab" data-p="heart">2alb</button>
        </div>
        <div class="gal-panel active" data-panel="wall"><div class="masonry">${wall}</div></div>
        <div class="gal-panel" data-panel="pola"><div class="polaroids">${polas}</div></div>
        <div class="gal-panel" data-panel="film">
          <div class="filmstrip"><div class="film-track">${film}</div></div>
          <p class="center hand" style="color:var(--muted);margin-top:18px">mashya w mesh beto2af, zay el sana ma3adet.</p>
        </div>
        <div class="gal-panel" data-panel="heart"><div class="heart-gal"><div class="heart-grid">${heart}</div></div></div>
        <div class="center reveal" style="margin-top:50px">
          <a class="btn" href="#/dreams" data-link>kol da raye7 3ala fein →</a>
        </div>
      </section>
      ${footer()}`;
    },
    mount: () => {
      const tabs = document.getElementById("gal-tabs");
      const panels = [...document.querySelectorAll(".gal-panel")];
      tabs.addEventListener("click", (e) => {
        const b = e.target.closest(".gal-tab"); if (!b) return;
        tabs.querySelectorAll(".gal-tab").forEach(t => t.classList.remove("active"));
        b.classList.add("active");
        panels.forEach(p => p.classList.toggle("active", p.dataset.panel === b.dataset.p));
      });
      document.querySelectorAll(".lb-open").forEach(elm =>
        elm.addEventListener("click", () => window.LB.open(D.PHOTOS, +elm.dataset.i)));
      document.querySelectorAll(".polaroid,.m-item").forEach(e => { });
    }
  };

  /* ------------------------------------------------ DREAMS */
  const dreams = {
    render: () => `
      <section class="section wrap" style="padding-top:130px">
        ${secHead("a7lam", "el 7aya elly fadel batkhayalha", "mafihash 7aga fakhma. bs enti f kol wa7da menha.")}
        <div class="dreams-grid" data-stagger="80">
          ${D.DREAMS.map((d, i) => `
            <div class="dream reveal">
              <span class="d-no">${String(i + 1).padStart(2, "0")}</span>
              <div class="d-ico">${d.ico}</div>
              <h3>${esc(d.title)}</h3>
              <p>${esc(d.body)}</p>
            </div>`).join("")}
        </div>
      </section>
      <section class="section wrap">
        ${secHead("omniyat", "elly ana metmaneeh lek f sokot", "")}
        <div class="wishes" data-stagger="90">
          ${D.WISHES.map(w => `<div class="wish reveal"><span class="w-ico">✦</span><p>${esc(w)}</p></div>`).join("")}
        </div>
        <div class="center reveal" style="margin-top:50px">
          <a class="btn" href="#/birthday" data-link>tayeb, delwa2ty el e7tefal →</a>
        </div>
      </section>
      ${footer()}`
  };

  /* ------------------------------------------------ BIRTHDAY */
  function nextBirthday() {
    const now = new Date();
    const t = new Date(now.getFullYear(), D.BIRTHDAY.month - 1, D.BIRTHDAY.day, 0, 0, 0, 0);
    return { now, target: t, reached: now >= t };
  }
  const birthday = {
    render: () => {
      const { reached } = nextBirthday();
      return reached ? birthday.celebrate() : birthday.countdown();
    },
    countdown: () => `
      <section class="count-wrap wrap">
        <div class="reveal center">
          <p class="kicker">2arrabt</p>
          <h2 class="h-xl">youmek gay ya ${D.NAME}</h2>
          <p class="lead" style="margin-top:14px">tany ma yeb2a 3eed miladek rasmy, el safha di hatetghayar lewa7daha. sibha mafto7a. aw sibiha tefaga2ek.</p>
          <div class="count-grid" id="count-grid">
            <div class="count-cell"><div class="cc-num" data-u="d">00</div><div class="cc-lbl">youm</div></div>
            <div class="count-cell"><div class="cc-num" data-u="h">00</div><div class="cc-lbl">sa3a</div></div>
            <div class="count-cell"><div class="cc-num" data-u="m">00</div><div class="cc-lbl">de2i2a</div></div>
            <div class="count-cell"><div class="cc-num" data-u="s">00</div><div class="cc-lbl">sanya</div></div>
          </div>
          <p class="hand" style="color:var(--muted);font-size:1.3rem;margin-top:10px">ba3ed tanazoly zay ma3andeesh sabr. 3ashan f3lan ma3andeesh.</p>
        </div>
      </section>
      ${footer()}`,
    celebrate: () => `
      <section class="bday wrap">
        <div class="center">
          <p class="eyebrow hand" style="font-size:1.6rem;color:var(--rose)">ba2a rasmy</p>
          <h1 class="huge" id="bday-huge"></h1>
          <p class="bday-sub reveal in">el net kolo mesh 3aref en el youm da youmek. el rokn el soghayar da 3aref. otfy el sham3a.</p>
          <div class="cake" id="cake" title="etmanny omniya">
            <div class="flame" id="flame"></div>
            <div class="candle"></div>
            <div class="icing i2"></div><div class="tier t2"></div>
            <div class="icing i1"></div><div class="tier t1"></div>
            <div class="plate"></div>
          </div>
          <p class="cake-hint" id="cake-hint">dos 3ala el torta w etmanny omniya</p>
          <div class="btn-row" style="justify-content:center;margin-top:34px">
            <button class="btn" id="more-fireworks">3ayez al3ab nar tany</button>
            <a class="btn ghost" href="#/ending" data-link>akher 7aga wa7da →</a>
          </div>
        </div>
      </section>
      ${footer()}`,
    mount: () => {
      const { reached } = nextBirthday();
      if (!reached) {
        const set = (u, v) => { const e = document.querySelector(`[data-u="${u}"]`); if (e) e.textContent = String(v).padStart(2, "0"); };
        const tick = () => {
          const { now, target } = nextBirthday();
          let diff = target - now;
          if (diff <= 0) { clearInterval(birthday._iv); router.reload(); return; }
          const d = Math.floor(diff / 86400000); diff -= d * 86400000;
          const h = Math.floor(diff / 3600000); diff -= h * 3600000;
          const m = Math.floor(diff / 60000); diff -= m * 60000;
          const s = Math.floor(diff / 1000);
          set("d", d); set("h", h); set("m", m); set("s", s);
        };
        tick(); birthday._iv = setInterval(tick, 1000);
        return;
      }
      // celebration
      const huge = document.getElementById("bday-huge");
      const text = `Kol Sana W Enti Tayba`;
      huge.innerHTML = text.split("").map((c, i) =>
        `<span class="l" style="animation-delay:${i * 55}ms">${c === " " ? "&nbsp;" : c}</span>`).join("");
      setTimeout(() => { FX.confetti({ count: 180, y: innerHeight * .3 }); FX.fireworksShow(5000); FX.balloons(16); }, 500);
      const cake = document.getElementById("cake");
      const hint = document.getElementById("cake-hint");
      cake.addEventListener("click", () => {
        if (cake.classList.contains("blown")) return;
        cake.classList.add("blown");
        hint.textContent = "el omniya etsagelet. ha3mel elly 3alaya 3ashan tet7a2a2.";
        FX.confetti({ count: 120, y: innerHeight * .4 }); FX.balloons(10);
      });
      document.getElementById("more-fireworks").addEventListener("click", () => { FX.fireworksShow(4000); FX.confetti({ count: 80 }); });
    },
    unmount: () => { clearInterval(birthday._iv); }
  };

  /* ------------------------------------------------ ENDING */
  const ending = {
    render: () => `
      <section class="ending">
        <div id="ending-seq">
          <p class="ending-line" data-t="2200">mafeesh tare2a kwayesa a2fel biha 7aga zay di.</p>
          <p class="ending-line" data-t="3000">fa ha2ol el 7agat el 7a2i2iya bs.</p>
          <p class="ending-line" data-t="3000">enni la2eetek w enti wara shasha, w ba2eeti a7la 7aga f youmy. da lessa mesh mesada2o.</p>
          <p class="ending-line ending-final grad-text" data-t="2600">ba7ebek ya Dina.</p>
          <p class="ending-line ending-final" data-t="2600">w hafdal ba7ebek.</p>
          <p class="ending-line ending-final grad-text" data-t="200" style="font-size:clamp(2.4rem,8vw,6rem)">kol sana w enti tayba ❤</p>
        </div>
        <div class="restart">
          <a class="btn ghost" href="#/home" data-link>e2raiha kolaha tany</a>
        </div>
      </section>`,
    mount: () => {
      const lines = [...document.querySelectorAll(".ending-line")];
      const restart = document.querySelector(".ending .restart");
      let t = 500;
      ending._timers = [];
      lines.forEach((ln) => {
        ending._timers.push(setTimeout(() => {
          ln.classList.add("show");
          if (ln.classList.contains("ending-final") && ln.textContent.includes("kol sana")) {
            FX.confetti({ count: 160, y: innerHeight * .4 }); FX.fireworksShow(6000); FX.balloons(14);
          }
        }, t));
        t += +ln.dataset.t;
      });
      ending._timers.push(setTimeout(() => restart.classList.add("show"), t + 400));
      startStars();
    },
    unmount: () => { (ending._timers || []).forEach(clearTimeout); stopStars(); }
  };

  // soft twinkling stars behind the ending
  let starEl;
  function startStars() {
    starEl = document.createElement("div");
    starEl.style.cssText = "position:fixed;inset:0;z-index:0;pointer-events:none";
    for (let i = 0; i < 70; i++) {
      const s = document.createElement("span");
      const sz = Math.random() * 2 + 1;
      s.style.cssText = `position:absolute;left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        width:${sz}px;height:${sz}px;border-radius:50%;background:#fff;opacity:.3;
        animation:twinkle ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 3}s infinite`;
      starEl.appendChild(s);
    }
    document.getElementById("view").appendChild(starEl);
  }
  function stopStars() { if (starEl) starEl.remove(); starEl = null; }

  return { home, story, reasons, letters, gallery, dreams, birthday, ending };
})();
