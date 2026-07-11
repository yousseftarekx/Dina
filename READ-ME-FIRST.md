# For Dina 🤍

A private, password-locked love site. Built to feel handmade, because it was.

---

## 1. Open it

**Easiest:** double-click `index.html`. It works offline, no internet needed
(the fonts and everything are bundled locally).

**Nicer (recommended if you'll show it on her phone or host it):** run a tiny
local server so audio and everything behaves perfectly:

- Double-click `start.bat` (Windows). It opens the site in your browser.
- Or from a terminal in this folder: `python -m http.server 8000` then visit
  `http://localhost:8000`.

The password screen expects **her birthday**. It accepts either order, so
both `0712` and `1207` unlock it. She won't be able to get it "wrong".

---

## 2. Add the music (2 minutes)

Open the `assets/music/` folder and read `PUT-SONGS-HERE.txt`. Drop in three
mp3 files with the exact names listed. That's the only thing the site is
missing out of the box (I couldn't legally include the songs themselves).

Everything else already works without them, the player just won't have sound
until the files are there.

---

## 3. Make it 100% yours (worth it)

I wrote everything in a real, plain, imperfect voice. But I don't know your
inside jokes, your actual first date, the specific things only you two know.
Fifteen minutes here will make her *know* you wrote it.

Everything lives in one file: **`js/data.js`**. It's all plain text, clearly
labeled, safe to edit. In particular:

- **`STORY`** – the timeline. Right now it's the *shape* of a real story with
  the specifics left soft. Swap in your actual moments: how you really met,
  the first "oh no I like them", the real turning point. This is the single
  highest-impact edit.
- **`REASONS`** – 51 of them, all written by Youssef himself (nothing generic).
  Add more anytime by copying the same `{ t: "...", tag:"heart|funny|tiny" }`
  shape.
- **`LETTERS`** – five letters. Read them. Change any line that isn't how you'd
  say it. Sign them how you actually sign things to her.
- **`PHOTOS`** captions, **`DREAMS`**, **`WISHES`** – all editable there too.

Don't like the color feel? Every color is at the top of `css/base.css`.

---

## 4. Put it online (optional, free)

Easiest way to give her a real link:

1. Go to **app.netlify.com/drop**
2. Drag this whole `for-dina` folder onto the page.
3. It gives you a link in ~10 seconds. Send her that.

(GitHub Pages or Vercel work too, same idea: it's a plain static site.)

---

## What's inside

- **Password lock** → loading → the site.
- **Home** cinematic hero, a live count, section doors.
- **Our Story** animated timeline.
- **Reasons** 51 cards, filterable (soft / funny / tiny things).
- **Letters** five envelopes that open into handwritten letters.
- **Memories** four gallery styles (wall, polaroids, film strip, heart) + lightbox.
- **Dreams** future cards + birthday wishes.
- **Birthday** a live countdown to **July 12** that turns *itself* into a
  full celebration (fireworks, confetti, balloons, a candle to blow out) the
  moment it's her birthday. Open it now and it counts down; open it on the
  12th and it's already celebrating.
- **The Ending** a slow, timed final letter.
- Hidden extras: five secret hearts to find, type her name anywhere, and a few
  more. Let her discover them.
- A floating music player that keeps playing across every page.

Made with a lot of care. Happy building, and happy birthday to her from
whoever helped you put this together.
