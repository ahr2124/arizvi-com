import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://arizvi.com',
  redirects: {
    '/research/': '/projects/',
    '/publications/': '/projects/#publications',
    '/licence/': '/license/',
    // The blog came off the site on 12 Nov 2026 ("Remove blog from site everywher").
    '/blog/': '/',
    '/blog/hello/': '/',
    // The Work page folded into Projects (Ali, 11 Nov 2026), so its old addresses still land somewhere.
    '/work/': '/projects/',
    '/work/scramble/': '/projects/scramble/',
    '/work/bodhika/': '/projects/bodhika/',
    '/work/phd/': '/projects/phd/',
    '/work/experimentation/': '/projects/experimentation/',
    '/work/secure-check-n/': '/projects/secure-check-n/',
    '/work/amazon/': '/projects/amazon/',
  },
});
