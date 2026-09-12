# arizvi.com

Astro site hosted on GitHub Pages. Content lives in `src/content/`; interactive pages live in `public/play/`.

## Run locally
    npm install
    npm run dev

## First deploy
1. Create a GitHub repo (e.g. `arizvi-com`), push this folder to `main`.
2. Repo → Settings → Pages → Source: **GitHub Actions**. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push.
3. Settings → Pages → Custom domain: enter `arizvi.com` and tick "Enforce HTTPS" once DNS resolves.

## DNS (at your registrar)
    A     @    185.199.108.153
    A     @    185.199.109.153
    A     @    185.199.110.153
    A     @    185.199.111.153
    CNAME www  <your-github-username>.github.io

`public/CNAME` already contains `arizvi.com` so the custom domain survives redeploys.

## Sections
Profile (home) · Work · Research · Tools · Resources · Blog

## Add things
- Media: all images and video live in `public/media/` (`media/work/`, `media/blog/`). Home hero uses `public/media/hero.mp4` + `hero.jpg`; the Work page uses `media/work.mp4` + `work.jpg` if present.
- Blog post: new `.md` in `src/content/blog/` with `title`, `date`, `summary` (and `draft: true` to hide).
- Work: each `.md` in `src/content/work/` is one logbook row. Give it a body (markdown) and it gets its own
  case-study page at `/work/<slug>/`; set `featured: true` to show it on Profile and at the top of Work.
  Add `image: /media/work/<file>.jpg` (file in `public/media/work/`) for a cover image and `outcome:` for the one-line result.
- Resource: new `.md` in `src/content/resources/` with `title`, `href`, `group`, `note`.
- Tool (AI-generated page): drop the `.html` into `public/tools/`, then add a `.md` in `src/content/tools/` with `title`, `href`, `useCase`, `date`.
- CV: put `cv.pdf` in `public/`.
Every section is driven by files in `src/content/`; nothing else needs editing.
