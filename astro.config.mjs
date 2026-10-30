import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://arizvi.com',
  redirects: {
    '/research/': '/projects/',
    '/publications/': '/projects/#publications',
    '/bucknell/anop-330/': '/bucknell/',
    '/bucknell/anop-400/': '/bucknell/',
  },
});
