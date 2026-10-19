// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL publique du site : à remplacer par le nom de domaine définitif
// (ou définir SITE_URL dans les variables d'environnement Vercel).
const SITE_URL = process.env.SITE_URL || 'https://auto-charge-89.vercel.app';

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
