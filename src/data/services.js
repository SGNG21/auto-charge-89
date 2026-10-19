export const SERVICES = {
  maison: {
    slug: 'borne-recharge-maison',
    title: 'Borne de recharge pour maison individuelle',
    short: 'Maison individuelle',
    photo: 'photo-2',
    photoAlt: 'Wallbox installée sur le mur d’une maison, voiture électrique branchée',
    teaser: 'Wallbox 7,4 ou 11 kW, recharge pilotée pour optimiser votre abonnement.',
    lead: 'La solution la plus simple : une borne murale (wallbox) chez vous, pour recharger la nuit, tranquillement, au tarif heures creuses.',
    points: [
      'Puissance 7,4 kW (monophasé) ou 11 kW (triphasé) selon votre véhicule et votre abonnement',
      'Recharge pilotée pour profiter des heures creuses',
      'Mise aux normes du tableau électrique si besoin',
      'Protection différentielle dédiée et circuit spécifique conforme NF C 15-100',
    ],
  },
  copropriete: {
    slug: 'borne-recharge-copropriete',
    title: 'Borne de recharge en copropriété',
    short: 'Copropriété',
    photo: 'photo-3',
    photoAlt: 'Bornes de recharge alignées dans le parking couvert d’une copropriété',
    teaser: 'Solution individuelle ou collective au parking. Éligible au programme Advenir.',
    lead: 'Une borne individuelle à votre place de parking, ou une infrastructure collective pour tout l’immeuble, dans le respect du droit à la prise.',
    points: [
      'Droit à la prise : borne individuelle raccordée à votre compteur ou aux services généraux',
      'Infrastructure collective avec gestion des accès et facturation par utilisateur',
      'Éligible au programme Advenir',
      'Accompagnement du syndic et du conseil syndical jusqu’à l’assemblée générale',
    ],
  },
  entreprise: {
    slug: 'borne-recharge-entreprise',
    title: 'Bornes de recharge pour entreprise et flotte',
    short: 'Entreprise & flotte',
    photo: 'photo-4',
    photoAlt: 'Véhicules électriques de flotte en charge sur le parking d’une entreprise',
    teaser: 'Parking salariés, flotte ou clients. Supervision, badges, suivi conso.',
    lead: 'Équipez votre parking pour vos salariés, votre flotte ou vos clients, avec supervision, badges et suivi des consommations.',
    points: [
      'Plusieurs points de charge, badges d’accès et gestion de la puissance',
      'Suivi de consommation et refacturation (salariés, véhicules de fonction)',
      'Bornes ouvertes au public pour commerces, hôtels, gîtes et domaines',
      'Éligible au programme Advenir selon le projet',
      'Maintenance et dépannage',
    ],
  },
};

export const STEPS = [
  { t: 'Contact', d: 'Appel ou formulaire. On échange sur votre véhicule, votre abonnement et votre installation.' },
  { t: 'Visite technique', d: 'On évalue le tableau électrique, la puissance disponible et l’emplacement, sur place.' },
  { t: 'Devis gratuit', d: 'Devis clair et détaillé, sans engagement, sous 48 h, aides comprises.' },
  { t: 'Pose & mise en service', d: 'Installation aux normes, attestation de conformité et explication du fonctionnement.' },
];

// FAQ générale : réponses courtes, factuelles et autonomes (lisibles par les moteurs IA).
export const FAQ = [
  {
    q: 'Qui peut installer une borne de recharge chez moi dans l’Yonne ?',
    a: 'Toute borne de plus de 3,7 kW doit être installée par un électricien titulaire de la qualification IRVE (Infrastructure de Recharge pour Véhicules Électriques). AUTO CHARGE89, basé à Brienon-sur-Armançon, est certifié IRVE niveaux 1 et 2 et intervient dans tout le département de l’Yonne (89).',
  },
  {
    q: 'Quelle puissance de borne choisir : 7,4, 11 ou 22 kW ?',
    a: 'Pour une maison, une wallbox de 7,4 kW en monophasé suffit dans la grande majorité des cas : elle récupère environ 40 à 50 km d’autonomie par heure de charge. Le 11 kW nécessite un abonnement triphasé et un véhicule compatible. Le 22 kW est surtout réservé aux entreprises et aux parkings partagés.',
  },
  {
    q: 'Combien de temps faut-il pour recharger une voiture électrique avec une wallbox ?',
    a: 'Avec une borne de 7,4 kW, une batterie de 50 kWh se recharge de 20 à 80 % en environ 4 à 5 heures, soit une nuit largement suffisante. Sur une prise domestique classique (2,3 kW), il faudrait plus de 13 heures pour la même recharge.',
  },
  {
    q: 'Quelles aides existent en 2026 pour une borne de recharge ?',
    a: 'Pour les particuliers, le crédit d’impôt ne s’applique plus aux dépenses payées depuis le 1er janvier 2026. Les copropriétés, entreprises et collectivités peuvent bénéficier de la prime Advenir, qui finance une partie de l’installation selon le projet.',
  },
  {
    q: 'Faut-il changer mon abonnement électrique pour installer une borne ?',
    a: 'Pas forcément. Une borne pilotée module sa puissance en fonction de la consommation de la maison pour éviter les coupures. Lors de la visite technique, nous vérifions votre puissance souscrite (6, 9 ou 12 kVA) et vous indiquons si un ajustement est utile.',
  },
  {
    q: 'Combien de temps dure l’installation d’une borne de recharge ?',
    a: 'Une installation en maison individuelle se réalise généralement en une demi-journée à une journée, selon la distance entre le tableau électrique et l’emplacement de la borne. Le délai entre la demande et la pose est de quelques jours à quelques semaines.',
  },
  {
    q: 'Peut-on installer une borne en copropriété sans l’accord de l’assemblée générale ?',
    a: 'Oui, grâce au droit à la prise : un copropriétaire ou un locataire peut faire installer une borne à ses frais sur sa place de parking. Il doit simplement informer le syndic, qui ne peut s’y opposer que pour un motif sérieux et légitime devant le tribunal judiciaire.',
  },
  {
    q: 'Dans quelles villes de l’Yonne intervenez-vous ?',
    a: 'Nous intervenons dans tout l’Yonne depuis Brienon-sur-Armançon : Auxerre, Sens, Joigny, Migennes, Saint-Florentin, Tonnerre, Avallon, Chablis, Villeneuve-sur-Yonne, Toucy, Pont-sur-Yonne et toutes les communes alentour.',
  },
  {
    q: 'Le devis est-il vraiment gratuit ?',
    a: 'Oui. Le devis est gratuit et sans engagement, envoyé sous 48 heures après l’échange ou la visite technique. Il détaille le matériel, la main-d’œuvre, et les éventuels travaux sur le tableau électrique.',
  },
];
