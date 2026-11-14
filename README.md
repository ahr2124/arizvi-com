# arizvi.com

Astro site, hosted on GitHub Pages from `ahr2124/arizvi-com`. Every push to `main` builds and deploys via `.github/workflows/deploy.yml`. `public/CNAME` holds the custom domain so it survives redeploys.

Before writing or editing copy, read `VOICE.md`.

## Run locally
    npm install
    npm run dev        # dev server
    npm run build      # static build into dist/

## Pages
- Nav: Teaching · Resources · Projects · About (Work folded into Projects on 11 Nov 2026; Resources added that night; no blog since 12 Nov 2026). Home is `src/pages/index.astro`. The site leads with teaching (11 Nov 2026): the home page's Teaching section comes first, and both it and /teaching open with students' own words. Teaching resources follows it on home, with the four Start here tiles from /resources (`src/components/StartTiles.astro`, shared by both pages). /teaching then runs the teaching philosophy (from his teaching statement's Why I teach), How I teach, What I teach (the record, then a row per course: what students did and how he taught it), Mentoring, and What students said last.
- Student comments live in `src/data/students.ts`, quoted as written, each with its SCP response ID so it can be checked. Never tidy a typo in one.
- No teaching evaluation scores anywhere on the site (Ali, 11 Nov 2026: "Remove ANY metrics from the site", meaning the 4.3, 4.6 and so on). Students' words carry the evidence; the scores stay in the packets.
- `src/pages/404.astro` builds `/404.html`, which GitHub Pages serves for any address that is not on the site. It is the scheme reversed, white on black, with Ruffle (`public/media/ruffle.jpg`). Under the photo is a small game of fetch on a canvas, all in the page's own script: a tap sets where the ball lands and how high it goes, and Enter or Space throws it from the keyboard. The tail wags as a blur (its whole swing drawn faint) while Ruffle is on the move and is still when Ruffle stops, and the ears flop on springs, kicked by Ruffle's starts, stops, turns and landings. The drawing loop sleeps once nothing moves, and pauses when the tab is hidden. Reduced motion keeps the tail itself still (the blur still shows the wag) and tones the ears down.
- `/atmri/` is the Sector ALPHA ATCO assistant prototype. Not linked from the nav, sends `noindex`, and password protected: `public/atmri/index.html` is the app encrypted in the browser-decryptable form `scripts/protect.mjs` writes. Keep the plain source out of this public repo. To update or change the password:
      ATMRI_PASSWORD=... node scripts/protect.mjs path/to/source.html public/atmri/index.html "Sector ALPHA"
- `/slotravel/` is a standalone microsite (`public/slotravel/index.html`, one file, sends `noindex`, not linked from the nav): 3 slow trips of 21 days each, with a split-flap departures board, a quiz and a boarding pass that emails Ali the pick. Its photos are hotlinked Wikimedia Commons thumbnails (only the 500, 960, 1280 and 1920 widths exist), credited in its footer.
- `/ablookup/` reads Canadian aviation weather abbreviations in plain English or French (`public/ablookup/index.html`, one file, sends `noindex`, not linked from the nav). Type one abbreviation, or paste a whole line, and it answers in plain text with the manual's own rows under it. The list is the "Alphabetical order of abbreviations" section of MANAB (Manual of Word Abbreviations, 5th edition, September 2026, Environment and Climate Change Canada), all 1,592 rows as the manual has them, typos included. It sits in the `<script id="manab">` block, one `abbreviation|English|French` row per line; for a new edition, replace those rows. The reading choices that are not the manual's (which meaning comes first, the plain connecting words, + and - as heavy and light) are the short lists at the top of the page's script. It also reads a plural S on entries the manual writes with "(s)" (TOPS, LYRS, KTS), and splits TAF wind and cloud groups (28012G22KT, BKN060) into words the manual has. The table under the answer shows one row for each meaning that is showing. `?q=` opens it on a line and `?lang=fr` in French. Its highlighter colour is aqua (#7DE3F4). A copy is on Netlify at ablookup.netlify.app (project `ablookup`): the page with the 4 font files, the favicon and the mark it uses, plus a `_redirects` line that sends /ablookup to /. It was dropped as a zip on the project's Deploys page, so it does not change when this file does; drop a new zip to update it.
- `/attitude/` explains the mark and shows the flying videos as cards. Reached by clicking the mark in the nav, or "About the mark" in the footer; sends `noindex`. Fill the `videos` array (each video with a poster frame in `public/media/flying/`) and `channel` at the top of `src/pages/attitude.astro`.

## Content (`src/content/`)
Fields for each collection are in `src/content.config.ts`.
- `work/*.md`: one file per write-up. `featured: true` puts it in the home grid; the markdown body is the write-up at `/projects/<slug>/` (there is no Work page since 11 Nov 2026; `/work/` addresses redirect); `order` sorts, and Next on a write-up follows it. A body that opens with a list gets a "Notes" label above it, so on a phone it does not read as part of the Path's last step.
- `projects/*.md`: one card each on /projects. `link:` points a card at its write-up. `image:` is the cover (3:2), `video:` an optional cover video for the case-study page only. Every entry needs a body: the logbook that listed the others was removed on 10 Nov 2026.
- Research, Publications, Teaching and About are written directly in their page files.

## Media (`public/media/`)
- `work/` covers and write-up videos, `flying/` videos for /attitude with a poster frame each (`<name>.jpg`).
- `headshot.jpg` (800×1000) on the home page; `mark.svg` is the nav mark.
- `projects/` card backgrounds are 720 wide with a 1px blur. The cards show them under a 3px blur and a white veil, so they can be small.
- `share.png` (1200×630) is the picture a link preview shows (the `og:image` tag in `src/layouts/Base.astro`). It is a screenshot of `scripts/share-card.html`. A case study shows its own cover instead.
- `cursor/` is the small plane that stands in for the pointer on /attitude: `plane.svg` heads northwest (where the arrow would be) and `plane-up.svg` heads north (over links and buttons). Each has a PNG at 32 and at 64px, made from the SVG (`rsvg-convert -w 64 -h 64 plane.svg -o plane-2x.png`). The rule is at the end of the style block in `src/pages/attitude.astro`.
- `ruffle.jpg` is the photo on the 404 page. Its edges are faded to black in the file, so it has no frame on the black page.
- Favicons: `public/favicon.svg` (primary) and `public/favicon.ico` (fallback).
- A case study's cover video (`video:`) starts by script, muted, and only while it is on screen; it waits for a tap for visitors who asked for less motion or less data, and on phones, since an iPhone never says whether it is on mobile data (`src/components/Cover.astro`).
- Keep videos under about 25 MB (GitHub refuses files over 100 MB). A good default:
      ffmpeg -i in.mp4 -vf scale=1280:-2 -c:v libx264 -crf 30 -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k out.mp4

## Type
Cooper Hewitt, self-hosted in `public/fonts/` (SIL OFL, licence alongside). `@font-face` rules are at the top of `src/styles/global.css`.

## DNS (at your registrar)
    A     @    185.199.108.153
    A     @    185.199.109.153
    A     @    185.199.110.153
    A     @    185.199.111.153
    CNAME www  ahr2124.github.io

## History
On 10 Nov 2026 the history of this repository was rewritten to take 2 names out of old commits, and every branch except `main` was deleted. A clone made before that still holds the old commits. Do not push from it: delete it and clone again.
