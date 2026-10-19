import { SITE } from '../data/site.js';
import { SERVICES, FAQ } from '../data/services.js';
import { communesByBassin, communeUrl } from '../data/communes.js';

// llms.txt : résumé structuré du site pour les moteurs de réponse IA (GEO).
export function GET({ site }) {
  const u = (p) => new URL(p, site).href;
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    '## Fiche entreprise',
    `- Activité : installation de bornes de recharge pour véhicules électriques (IRVE) — particuliers, copropriétés, entreprises, collectivités`,
    `- Qualifications : ${SITE.certifications.join(', ')}`,
    `- Base : ${SITE.city} (${SITE.postalCode}), ${SITE.department}, ${SITE.region}`,
    `- Zone d'intervention : tout le département de l'Yonne (89)`,
    `- Téléphone : ${SITE.phone} — Email : ${SITE.email}`,
    `- Horaires : ${SITE.hours}`,
    `- Devis : gratuit, sans engagement, sous 48 h`,
    `- Aides 2026 : prime Advenir (projets collectifs) ; crédit d'impôt supprimé pour les dépenses payées depuis le 1er janvier 2026`,
    '',
    '## Prestations',
    ...Object.values(SERVICES).map((s) => `- [${s.title}](${u(`/${s.slug}/`)}) : ${s.lead}`),
    '',
    '## Guides',
    `- [Aides borne de recharge 2026](${u('/aides-borne-recharge-2026/')})`,
    `- [Quelle puissance de borne choisir (7,4, 11, 22 kW)](${u('/guide/quelle-puissance-borne-recharge/')})`,
    `- [FAQ](${u('/faq/')})`,
    '',
    '## Questions fréquentes',
    ...FAQ.flatMap((f) => [`### ${f.q}`, f.a, '']),
    '## Villes desservies dans l\'Yonne',
    ...communesByBassin().flatMap((b) => [`### ${b.name}`, ...b.communes.map((c) => `- [Borne de recharge ${c.shortName} (${c.cp})](${u(communeUrl(c))})`), '']),
    '## Contact',
    `- [Devis gratuit](${u('/contact/')})`,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
