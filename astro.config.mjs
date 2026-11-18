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
    // The Tulane and Bucknell pages are hidden again (Ali, 17 Nov 2026: "Turn off both Tulane and Bucknell sub sites").
    // Their files sit in src/pages/_tulane and src/pages/_bucknell, which Astro leaves out of the build, and their old
    // addresses land on /teaching/. To bring one back, rename its folder and take its lines out, and only at his word.
    '/tulane/': '/teaching/',
    '/bucknell/': '/teaching/',
    '/bucknell/anop-102/': '/teaching/',
    '/bucknell/anop-102/pack/': '/teaching/',
    '/bucknell/anop-302/': '/teaching/',
    '/bucknell/anop-302/pack/': '/teaching/',
    '/bucknell/anop-330/': '/teaching/',
    '/bucknell/anop-330/pack/': '/teaching/',
    '/bucknell/anop-400/': '/teaching/',
    '/bucknell/anop-400/pack/': '/teaching/',
  },
});
