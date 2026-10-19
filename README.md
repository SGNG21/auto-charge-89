# AUTO CHARGE89 — site vitrine

Site statique (Astro) de AUTO CHARGE89, installateur de bornes de recharge IRVE à Brienon-sur-Armançon (Yonne, 89). Il est optimisé pour le SEO local et le GEO (moteurs de réponse IA).

## Commandes

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```

## Mise en ligne (Vercel)

1. **Domaine** : définir la variable `SITE_URL` (ex. `https://www.autocharge89.fr`) dans Vercel, ou modifier `astro.config.mjs`. Elle sert aux URL canoniques, au sitemap, à robots.txt, à llms.txt et aux données structurées.
2. **Formulaire de devis** (`api/contact.js`, envoi par Brevo) :
   - `BREVO_API_KEY` : clé API Brevo
   - `BREVO_SENDER` : adresse expéditrice validée dans Brevo
   - `CONTACT_TO` : destinataire (par défaut auto.charge89@gmail.com)
   Sans ces variables, le formulaire propose un appel ou un email prérempli.
3. Désactiver la « Vercel Authentication » pour la production si le site doit être public.

## SEO / GEO inclus

- 52 pages locales `/installation-borne-recharge/<ville>/` (contenu par bassin de vie, distance réelle, villes voisines, FAQ locale, carte)
- 3 pages de services, une page aides 2026, un guide sur la puissance des bornes, une FAQ, des réalisations, une page zones et un plan du site
- JSON-LD : `Electrician`/`LocalBusiness`, `Service` + `City`, `FAQPage`, `BreadcrumbList`, `Article`, `ItemList`
- `sitemap-index.xml`, `robots.txt` (crawlers IA autorisés), `llms.txt`, balises Open Graph et méta géographiques
- Images AVIF/WebP responsives, polices hébergées localement, CSS en ligne, zéro dépendance tierce au chargement

## À faire après la mise en ligne

- Compléter le SIRET et le responsable de publication dans `src/pages/mentions-legales.astro`
- Créer ou optimiser la **fiche Google Business Profile** (catégorie « Installateur de bornes de recharge »), avec le même nom, téléphone et ville que le site, puis ajouter son URL dans `SITE.sameAs` (`src/data/site.js`)
- Déclarer le sitemap dans Google Search Console et Bing Webmaster Tools
- Ajouter de vraies photos de chantiers par ville et des avis clients au fil du temps
- Pour ajouter une ville : une ligne dans `src/data/communes.js`
