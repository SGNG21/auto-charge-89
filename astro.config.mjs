// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL publique du site (canonique, sitemap, données structurées).
// Surchargeable avec SITE_URL, mais le domaine définitif est la valeur par défaut.
const SITE_URL = process.env.SITE_URL || 'https://www.auto-charge-89.fr';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/merci/'),
      changefreq: 'monthly',
      lastmod: new Date(),
    }),
  ],
});
