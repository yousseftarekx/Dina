/* ============================================================
   player.js — floating music player.
   Persists across page navigation (single-page app).
   Works and looks correct even if the mp3 files aren't added yet.
   ============================================================ */
window.PLAYER = (function () {
  const songs = DATA.SONGS;
  const audio = document.getElementById("audio");
  let idx = 0, ready = false;

  const $ = (id) => document.getElementById(id);
  const el = {
    wrap: $("player"), toggle: $("player-toggle"), body: null,
    song: $("player-song"), artist: $("player-artist"),
    play: $("play"), prev: $("prev"), next: $("next"),
    vol: $("vol"), seek: $("seek"), seekFill: $("seek-fill"),
    tcur: $("t-cur"), tdur: $("t-dur"), list: $("player-list")
  };

  const fmt = (s) => {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60), x = Math.floor(s % 60);
    return m + ":" + (x < 10 ? "0" + x : x);
  };

  function buildList() {
    el.list.innerHTML = "";
    songs.forEach((s, i) => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="idx">${i + 1}</span><span>${s.title}<br><small style="color:var(--muted)">${s.artist}</small></span>`;
      li.addEventListener("click", () => { load(i, true); });
      el.list.appendChild(li);
    });
  }

  function markList() {
    [...el.list.children].forEach((li, i) => li.classList.toggle("active", i === idx));
  }

  function load(i, autoplay) {
    idx = (i + songs.length) % songs.length;
    const s = songs[idx];
    audio.src = s.file;
    el.song.textContent = s.title;
    el.artist.textContent = s.artist;
    markList();
    ready = true;
    if (autoplay) play();
  }

  function play() {
    if (!ready) load(idx, false);
    const p = audio.play();
    if (p && p.catch) p.catch(() => {
      document.body.classList.remove("playing");
      el.play.textContent = "▶";
    });
  }
  function pause() { audio.pause(); }
  function toggle() { audio.paused ? play() : pause(); }
  function next() { load(idx + 1, !audio.paused || document.body.classList.contains("playing")); }
  function prev() {
    if (audio.currentTime > 3) { audio.currentTime = 0; return; }
    load(idx - 1, !audio.paused || document.body.classList.contains("playing"));
  }

  function bind() {
    el.play.addEventListener("click", toggle);
    el.next.addEventListener("click", next);
    el.prev.addEventListener("click", prev);

    audio.addEventListener("play", () => { document.body.classList.add("playing"); el.play.textContent = "⏸"; });
    audio.addEventListener("pause", () => { document.body.classList.remove("playing"); el.play.textContent = "▶"; });
    audio.addEventListener("ended", next);
    audio.addEventListener("timeupdate", () => {
      const pct = audio.duration ? audio.currentTime / audio.duration : 0;
      el.seek.value = pct * 1000;
      el.seekFill.style.width = (pct * 100) + "%";
      el.tcur.textContent = fmt(audio.currentTime);
    });
    audio.addEventListener("loadedmetadata", () => { el.tdur.textContent = fmt(audio.duration); });
    audio.addEventListener("error", () => {
      el.artist.textContent = "add this song's mp3 to hear it";
      document.body.classList.remove("playing");
      el.play.textContent = "▶";
    });

    el.seek.addEventListener("input", () => {
      if (audio.duration) audio.currentTime = (el.seek.value / 1000) * audio.duration;
    });
    el.vol.addEventListener("input", () => { audio.volume = el.vol.value / 100; });
    audio.volume = el.vol.value / 100;

    // collapse / expand
    el.toggle.addEventListener("click", () => setCollapsed(false));
    // click outside collapses on small screens
    document.addEventListener("click", (e) => {
      if (el.wrap.dataset.collapsed === "false" && !el.wrap.contains(e.target) && innerWidth < 700) {
        setCollapsed(true);
      }
    });
  }

  function setCollapsed(v) { el.wrap.dataset.collapsed = v ? "true" : "false"; }

  function init() {
    buildList();
    bind();
    load(0, false);
  }

  // try to start after the user unlocks (a real gesture). If the browser
  // blocks it or the file is missing, we just stay paused — no errors shown.
  function tryStart() { setCollapsed(false); play(); }

  return { init, play, pause, toggle, next, prev, load, tryStart, setCollapsed };
})();
