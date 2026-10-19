import { SITE } from './site.js';

// Bassins de vie de l'Yonne : chaque ville est rattachée à un bassin dont le contenu
// (habitat, usages, contraintes) alimente sa page locale.
export const BASSINS = {
  migennois: {
    name: 'Migennois & vallée de l’Armançon',
    short: 'vallée de l’Armançon',
    intro:
      'C’est notre secteur de base : nous sommes installés à Brienon-sur-Armançon, au cœur de la vallée. Les maisons individuelles avec garage ou allée y dominent, souvent avec des tableaux électriques anciens qu’il faut vérifier avant de poser une borne. Beaucoup d’habitants font chaque jour la route vers Auxerre, Joigny ou la gare de Migennes : une wallbox à la maison couvre l’essentiel des trajets.',
    focus: ['maison', 'entreprise'],
  },
  auxerrois: {
    name: 'Auxerrois',
    short: 'Auxerrois',
    intro:
      'Autour de la préfecture, l’habitat mêle pavillons récents, maisons de bourg et copropriétés. C’est le bassin où la demande en copropriété et en entreprise est la plus forte : parkings de résidences, zones d’activités et flottes de véhicules de service. Nous intervenons régulièrement dans l’agglomération, à une trentaine de minutes de notre base.',
    focus: ['maison', 'copropriete', 'entreprise'],
  },
  jovinien: {
    name: 'Jovinien',
    short: 'Jovinien',
    intro:
      'Entre la vallée de l’Yonne et les coteaux, le Jovinien compte beaucoup de maisons anciennes, de longères et de pavillons. L’enjeu principal est souvent la distance entre le tableau électrique et l’emplacement de la borne, ainsi que la puissance de l’abonnement. Nous dimensionnons l’installation pour éviter tout changement de contrat inutile.',
    focus: ['maison'],
  },
  senonais: {
    name: 'Sénonais',
    short: 'Sénonais',
    intro:
      'Le nord de l’Yonne vit au rythme de l’Île-de-France : beaucoup de navetteurs empruntent l’A19, l’A5 ou la ligne Paris – Sens chaque jour. Recharger à la maison la nuit, en heures creuses, est la solution la plus économique pour ces gros rouleurs. Le bassin compte aussi des copropriétés en ville et de nombreuses entreprises artisanales et logistiques.',
    focus: ['maison', 'copropriete', 'entreprise'],
  },
  florentinois: {
    name: 'Florentinois & Pays d’Othe',
    short: 'Florentinois',
    intro:
      'Notre voisinage immédiat : Saint-Florentin et ses alentours sont à quelques minutes de Brienon. Corps de ferme, maisons de village et exploitations agricoles demandent souvent des liaisons plus longues ou une alimentation en triphasé. Nous gérons aussi bien la wallbox du particulier que la borne d’un atelier ou d’un commerce.',
    focus: ['maison', 'entreprise'],
  },
  chablisien: {
    name: 'Chablisien & vignoble auxerrois',
    short: 'vignoble',
    intro:
      'Dans le vignoble, les domaines, caves et gîtes s’équipent pour accueillir des visiteurs en véhicule électrique, en plus des besoins des particuliers. Une borne de recharge devient un vrai service pour la clientèle œnotouristique. Nous adaptons la solution : borne simple pour la maison, ou bornes avec badge et suivi des consommations pour l’accueil du public.',
    focus: ['maison', 'entreprise'],
  },
  tonnerrois: {
    name: 'Tonnerrois',
    short: 'Tonnerrois',
    intro:
      'Dans le Tonnerrois, les distances sont longues et les bornes publiques encore rares : la recharge à domicile est indispensable. L’habitat ancien en pierre implique souvent une mise à niveau du tableau électrique et un cheminement de câble soigné. Nous nous déplaçons pour la visite technique avant tout devis.',
    focus: ['maison'],
  },
  avallonnais: {
    name: 'Avallonnais & Morvan',
    short: 'Avallonnais',
    intro:
      'Au sud du département, porte du Morvan, les sites patrimoniaux et touristiques côtoient maisons de bourg et résidences secondaires. Dans les périmètres protégés, une installation visible depuis la rue peut nécessiter l’avis de l’Architecte des Bâtiments de France : nous vous conseillons sur l’emplacement le plus discret.',
    focus: ['maison', 'entreprise'],
  },
  puisaye: {
    name: 'Puisaye',
    short: 'Puisaye',
    intro:
      'Territoire rural et boisé, la Puisaye compte surtout des maisons individuelles avec terrain, parfois éloignées du compteur. Les trajets se font quasi exclusivement en voiture : une borne à domicile change le quotidien d’un conducteur électrique. Nous étudions l’abonnement et la longueur de câble pour un devis juste.',
    focus: ['maison'],
  },
};

// type : 'ville' (centre urbain, copropriétés), 'bourg' (petite ville / chef-lieu), 'village'
// note : particularité locale ajoutée à la page de la ville.
const RAW = [
  // Migennois & vallée de l'Armançon
  { name: 'Brienon-sur-Armançon', cp: '89210', lat: 47.99, lon: 3.616, bassin: 'migennois', type: 'bourg', note: 'Notre atelier est ici : pour les habitants de Brienon, la visite technique se cale très rapidement, souvent dans la semaine.' },
  { name: 'Migennes', cp: '89400', lat: 47.965, lon: 3.518, bassin: 'migennois', type: 'ville', note: 'Ville cheminote au carrefour des lignes vers Paris, Dijon et Auxerre : nous équipons aussi bien les pavillons que les petites copropriétés du centre.' },
  { name: 'Cheny', cp: '89400', lat: 47.952, lon: 3.531, bassin: 'migennois', type: 'village' },
  { name: 'Bonnard', cp: '89400', lat: 47.925, lon: 3.527, bassin: 'migennois', type: 'village' },
  { name: 'Laroche-Saint-Cydroine', cp: '89400', lat: 47.968, lon: 3.476, bassin: 'migennois', type: 'village' },
  { name: 'Mont-Saint-Sulpice', cp: '89250', lat: 47.955, lon: 3.633, bassin: 'migennois', type: 'village' },
  { name: 'Héry', cp: '89550', lat: 47.9, lon: 3.63, bassin: 'migennois', type: 'village' },
  { name: 'Seignelay', cp: '89250', lat: 47.905, lon: 3.601, bassin: 'migennois', type: 'bourg' },
  // Auxerrois
  { name: 'Auxerre', cp: '89000', lat: 47.798, lon: 3.567, bassin: 'auxerrois', type: 'ville', note: 'Préfecture et première ville du département : copropriétés des quartiers Saint-Siméon, Rive droite ou Sainte-Geneviève, pavillons des Piedalloues, zones d’activités des Clairions et d’Appoigny… nous intervenons dans tous les quartiers.' },
  { name: 'Monéteau', cp: '89470', lat: 47.849, lon: 3.582, bassin: 'auxerrois', type: 'bourg', note: 'Avec sa zone d’activités et ses lotissements récents, Monéteau combine demandes de particuliers et projets d’entreprise.' },
  { name: 'Appoigny', cp: '89380', lat: 47.875, lon: 3.528, bassin: 'auxerrois', type: 'bourg' },
  { name: 'Saint-Georges-sur-Baulche', cp: '89000', lat: 47.8, lon: 3.531, bassin: 'auxerrois', type: 'bourg' },
  { name: 'Perrigny', cp: '89000', lat: 47.818, lon: 3.536, bassin: 'auxerrois', type: 'village' },
  { name: 'Gurgy', cp: '89250', lat: 47.866, lon: 3.558, bassin: 'auxerrois', type: 'village' },
  { name: 'Charbuy', cp: '89113', lat: 47.822, lon: 3.464, bassin: 'auxerrois', type: 'village' },
  { name: 'Chevannes', cp: '89240', lat: 47.75, lon: 3.493, bassin: 'auxerrois', type: 'village' },
  { name: 'Pourrain', cp: '89240', lat: 47.756, lon: 3.411, bassin: 'auxerrois', type: 'village' },
  { name: 'Champs-sur-Yonne', cp: '89290', lat: 47.738, lon: 3.601, bassin: 'auxerrois', type: 'village' },
  // Jovinien
  { name: 'Joigny', cp: '89300', lat: 47.982, lon: 3.397, bassin: 'jovinien', type: 'ville', note: 'Entre le centre historique aux rues étroites et les quartiers pavillonnaires des hauteurs, chaque installation à Joigny se pense au cas par cas, notamment pour les maisons sans garage.' },
  { name: 'Saint-Julien-du-Sault', cp: '89330', lat: 48.031, lon: 3.296, bassin: 'jovinien', type: 'bourg' },
  { name: 'Cerisiers', cp: '89320', lat: 48.133, lon: 3.488, bassin: 'jovinien', type: 'village' },
  { name: 'Montholon (Aillant-sur-Tholon)', slug: 'aillant-sur-tholon', cp: '89110', lat: 47.873, lon: 3.35, bassin: 'jovinien', type: 'bourg' },
  // Sénonais
  { name: 'Sens', cp: '89100', lat: 48.197, lon: 3.283, bassin: 'senonais', type: 'ville', note: 'Deuxième ville de l’Yonne, à une heure de Paris : nombreux navetteurs, copropriétés du centre-ville et des boulevards, entreprises des zones des Vauguillettes et de Saint-Denis-lès-Sens.' },
  { name: 'Paron', cp: '89100', lat: 48.179, lon: 3.25, bassin: 'senonais', type: 'bourg' },
  { name: 'Saint-Clément', cp: '89100', lat: 48.217, lon: 3.296, bassin: 'senonais', type: 'bourg' },
  { name: 'Villeneuve-sur-Yonne', cp: '89500', lat: 48.082, lon: 3.296, bassin: 'senonais', type: 'bourg', note: 'Bastide royale au bord de l’Yonne : dans le centre ancien, nous privilégions des installations discrètes, en garage ou en cour intérieure.' },
  { name: 'Pont-sur-Yonne', cp: '89140', lat: 48.284, lon: 3.201, bassin: 'senonais', type: 'bourg' },
  { name: 'Véron', cp: '89510', lat: 48.128, lon: 3.307, bassin: 'senonais', type: 'village' },
  { name: 'Sergines', cp: '89140', lat: 48.342, lon: 3.262, bassin: 'senonais', type: 'village' },
  { name: 'Michery', cp: '89140', lat: 48.312, lon: 3.237, bassin: 'senonais', type: 'village' },
  { name: 'Villeneuve-la-Guyard', cp: '89340', lat: 48.341, lon: 3.062, bassin: 'senonais', type: 'bourg' },
  { name: 'Villeblevin', cp: '89340', lat: 48.325, lon: 3.08, bassin: 'senonais', type: 'village' },
  { name: 'Chéroy', cp: '89690', lat: 48.2, lon: 3.0, bassin: 'senonais', type: 'village' },
  // Florentinois & Pays d'Othe
  { name: 'Saint-Florentin', cp: '89600', lat: 47.999, lon: 3.727, bassin: 'florentinois', type: 'ville', note: 'À moins de dix minutes de notre atelier : particuliers, commerces du centre et entreprises de la zone industrielle bénéficient d’une intervention rapide et d’un suivi de proximité.' },
  { name: 'Neuvy-Sautour', cp: '89570', lat: 48.045, lon: 3.795, bassin: 'florentinois', type: 'village' },
  { name: 'Flogny-la-Chapelle', cp: '89360', lat: 47.951, lon: 3.873, bassin: 'florentinois', type: 'village' },
  { name: 'Ligny-le-Châtel', cp: '89144', lat: 47.9, lon: 3.757, bassin: 'florentinois', type: 'village' },
  // Chablisien & vignoble
  { name: 'Chablis', cp: '89800', lat: 47.814, lon: 3.798, bassin: 'chablisien', type: 'bourg', note: 'Capitale du vin blanc de Bourgogne : domaines, caves et hébergements touristiques s’équipent de bornes pour leurs visiteurs, en plus des besoins des habitants.' },
  { name: 'Saint-Bris-le-Vineux', cp: '89530', lat: 47.744, lon: 3.649, bassin: 'chablisien', type: 'village' },
  { name: 'Coulanges-la-Vineuse', cp: '89580', lat: 47.703, lon: 3.578, bassin: 'chablisien', type: 'village' },
  { name: 'Vincelles', cp: '89290', lat: 47.704, lon: 3.636, bassin: 'chablisien', type: 'village' },
  { name: 'Vermenton', cp: '89270', lat: 47.66, lon: 3.731, bassin: 'chablisien', type: 'bourg' },
  // Tonnerrois
  { name: 'Tonnerre', cp: '89700', lat: 47.856, lon: 3.974, bassin: 'tonnerrois', type: 'ville', note: 'Ville-centre du Tonnerrois, où l’offre de recharge publique reste limitée : la borne à domicile est la clé pour rouler électrique sereinement.' },
  { name: 'Noyers', cp: '89310', lat: 47.698, lon: 3.993, bassin: 'tonnerrois', type: 'village', note: 'Classé parmi les Plus Beaux Villages de France, Noyers impose une attention particulière à l’intégration des équipements dans le bâti ancien.' },
  { name: 'Ancy-le-Franc', cp: '89160', lat: 47.775, lon: 4.162, bassin: 'tonnerrois', type: 'village' },
  // Avallonnais
  { name: 'Avallon', cp: '89200', lat: 47.49, lon: 3.908, bassin: 'avallonnais', type: 'ville', note: 'Troisième pôle du département, Avallon allie centre historique, quartiers résidentiels et activité touristique liée au Morvan : maisons, copropriétés et hôtels-restaurants s’équipent.' },
  { name: 'Vézelay', cp: '89450', lat: 47.466, lon: 3.748, bassin: 'avallonnais', type: 'village', note: 'Site classé au patrimoine mondial : les installations visibles sont encadrées. Nous privilégions des emplacements non visibles depuis l’espace public et vous accompagnons dans les démarches.' },
  // Puisaye
  { name: 'Toucy', cp: '89130', lat: 47.737, lon: 3.295, bassin: 'puisaye', type: 'bourg' },
  { name: 'Saint-Fargeau', cp: '89170', lat: 47.64, lon: 3.071, bassin: 'puisaye', type: 'bourg' },
  { name: 'Saint-Sauveur-en-Puisaye', cp: '89520', lat: 47.617, lon: 3.199, bassin: 'puisaye', type: 'village' },
  { name: 'Bléneau', cp: '89220', lat: 47.7, lon: 2.95, bassin: 'puisaye', type: 'village' },
  { name: 'Charny Orée de Puisaye', cp: '89120', lat: 47.887, lon: 3.095, bassin: 'puisaye', type: 'bourg' },
];

export function slugify(s) {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[’']/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function distanceKm(a, b) {
  const R = 6371;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export const COMMUNES = RAW.map((c) => {
  const km = distanceKm(SITE.geo, c);
  // Estimation route : ~1,3 × vol d'oiseau à ~65 km/h de moyenne.
  const minutes = Math.max(5, Math.round((km * 1.3) / 65 * 60 / 5) * 5);
  return {
    ...c,
    slug: c.slug || slugify(c.name),
    shortName: c.name.replace(/ \(.*\)$/, ''),
    km: Math.round(km),
    minutes,
    bassinData: BASSINS[c.bassin],
  };
}).sort((a, b) => a.name.localeCompare(b.name, 'fr'));

export function nearby(commune, n = 6) {
  return COMMUNES.filter((c) => c.slug !== commune.slug)
    .map((c) => ({ c, d: distanceKm(commune, c) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, n)
    .map(({ c, d }) => ({ ...c, fromKm: Math.round(d) }));
}

export function communesByBassin() {
  return Object.entries(BASSINS).map(([key, b]) => ({
    key,
    ...b,
    communes: COMMUNES.filter((c) => c.bassin === key).sort((a, b) => a.km - b.km),
  }));
}

export const communeUrl = (c) => `/installation-borne-recharge/${c.slug}/`;
