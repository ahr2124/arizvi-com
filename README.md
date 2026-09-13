# arizvi.com

Astro site, hosted on GitHub Pages from `ahr2124/arizvi-com`. Every push to `main` builds and deploys via `.github/workflows/deploy.yml`. `public/CNAME` holds the custom domain so it survives redeploys.

Before writing or editing copy, read `VOICE.md`.

## Run locally
    npm install
    npm run dev        # dev server
    npm run build      # static build into dist/

## Pages
- Nav: Research · Publications · Teaching · Work · About. Home is `src/pages/index.astro`.
- Blog is linked from the footer only. Tools and Resources still build but are not linked anywhere.
- `/attitude/` explains the mark and lists flying videos. Reached only by clicking the mark in the nav; sends `noindex`. Fill the `videos` array and `channel` at the top of `src/pages/attitude.astro`.

## Content (`src/content/`)
Fields for each collection are in `src/content.config.ts`.
- `work/*.md`: one file per project. `featured: true` puts it in the home grid; a markdown body gives it a case-study page at `/work/<slug>/`; `order` sorts. `image:` is the cover (3:2), `video:` an optional cover video for the case-study page only.
- `blog/*.md`: `title`, `date`, `summary`, optional `draft: true`.
- `tools/*.md`, `resources/*.md`: rows on the unlinked Tools and Resources pages.
- Research, Publications, Teaching and About are written directly in their page files.

## Media (`public/media/`)
- `work/` covers and case-study videos, `flying/` videos for /attitude, `blog/` for posts.
- `headshot.jpg` (800×1000) on the home page; `mark.svg` is the nav mark.
- Favicons: `public/favicon.svg` (primary) and `public/favicon.ico` (fallback).
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
