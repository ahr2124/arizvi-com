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
    // /bucknell became one course in a course shell on 13 Nov 2026 ("only keep the data visualization course"), so the
    // four course pages and their packs land on it.
    '/bucknell/anop-102/': '/bucknell/',
    '/bucknell/anop-102/pack/': '/bucknell/',
    '/bucknell/anop-302/': '/bucknell/',
    '/bucknell/anop-302/pack/': '/bucknell/',
    '/bucknell/anop-330/': '/bucknell/',
    '/bucknell/anop-330/pack/': '/bucknell/',
    '/bucknell/anop-400/': '/bucknell/',
    '/bucknell/anop-400/pack/': '/bucknell/',
  },
});
