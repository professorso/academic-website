import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ericso.pro',
  integrations: [sitemap()],
  // Legacy path: the Resources page was originally /data (file-based route
  // from site/src/pages/data.astro). Renamed 2026-04-23; keep the old URL
  // alive so indexed links and bookmarks don't 404.
  redirects: {
    '/data': '/resources',
    '/data/': '/resources/',
  },
});