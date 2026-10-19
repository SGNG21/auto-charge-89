// Coordonnées de l'entreprise : source unique utilisée partout (NAP cohérent pour le SEO local).
export const SITE = {
  name: 'AUTO CHARGE89',
  legalName: 'AUTO CHARGE89',
  tagline: 'Installateur de bornes de recharge certifié IRVE dans l’Yonne',
  description:
    'AUTO CHARGE89 installe des bornes de recharge pour véhicules électriques (wallbox 7,4 à 22 kW) chez les particuliers, en copropriété et en entreprise, dans toute l’Yonne (89). Artisan certifié IRVE niveaux 1 et 2, basé à Brienon-sur-Armançon. Devis gratuit sous 48 h.',
  phone: '06 95 04 89 46',
  phoneIntl: '+33695048946',
  email: 'auto.charge89@gmail.com',
  city: 'Brienon-sur-Armançon',
  postalCode: '89210',
  department: 'Yonne',
  departmentCode: '89',
  region: 'Bourgogne-Franche-Comté',
  country: 'FR',
  geo: { lat: 47.99, lon: 3.616 },
  // Rayon d'intervention indicatif autour de la base (km).
  radiusKm: 75,
  hours: 'Lundi au samedi, 8 h – 19 h',
  certifications: ['Qualification IRVE niveau 1', 'Qualification IRVE niveau 2'],
  sameAs: [
    // Ajouter ici la fiche Google Business Profile, Facebook, Instagram, LinkedIn…
  ],
  year: 2026,
};

export const NAV = [
  { href: '/', label: 'Accueil' },
  { href: '/prestations/', label: 'Prestations' },
  { href: '/aides-borne-recharge-2026/', label: 'Aides 2026' },
  { href: '/zones-intervention/', label: 'Villes' },
  { href: '/realisations/', label: 'Réalisations' },
  { href: '/faq/', label: 'FAQ' },
];
