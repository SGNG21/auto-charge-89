// Gabarits d'emails à la charte AUTO CHARGE89 (bleu nuit #0F1B2B, orange #FA5503, crème #F5F1E8).
// Le préfixe "_" empêche Vercel d'exposer ce fichier comme route.

const SITE_URL = 'https://www.auto-charge-89.fr';
const PHONE = '06 95 04 89 46';
const PHONE_INTL = '+33695048946';
const EMAIL = 'auto.charge89@gmail.com';
const FACEBOOK = 'https://www.facebook.com/p/Auto-charge-89-61578350309917/';
const NAVY = '#0F1B2B';
const ORANGE = '#FA5503';
const CREAM = '#F5F1E8';
const INK = '#14202E';
const SOFT = '#46566a';
const FONT = "'Helvetica Neue',Helvetica,Arial,sans-serif";

export const esc = (s) =>
  String(s ?? '').slice(0, 2000).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const button = (href, label) =>
  `<a href="${href}" style="display:inline-block;background:${ORANGE};color:${NAVY};font-family:${FONT};font-weight:800;font-size:16px;letter-spacing:.5px;text-transform:uppercase;text-decoration:none;padding:14px 26px;border-radius:8px">${label}</a>`;

function layout({ preheader, title, body }) {
  return `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light only"><title>${esc(title)}</title></head>
<body style="margin:0;padding:0;background:${CREAM}">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${CREAM}">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM}"><tr><td align="center" style="padding:24px 12px">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden">
    <tr><td style="background:${NAVY};padding:22px 28px">
      <table role="presentation" cellpadding="0" cellspacing="0"><tr>
        <td style="padding-right:14px"><img src="${SITE_URL}/logo-email.png" width="64" height="64" alt="" style="display:block;border:0"></td>
        <td style="font-family:${FONT};font-weight:800;font-size:26px;letter-spacing:.5px;color:#ffffff;text-transform:uppercase">AUTO <span style="color:${ORANGE}">CHARGE89</span><br><span style="font-weight:500;font-size:12px;letter-spacing:0;text-transform:none;color:#9fb0c6">Bornes de recharge · Yonne (89)</span></td>
      </tr></table>
    </td></tr>
    <tr><td style="background:${ORANGE};height:5px;line-height:5px;font-size:0">&nbsp;</td></tr>
    <tr><td style="padding:32px 28px 12px;font-family:${FONT};color:${INK};font-size:16px;line-height:1.55">${body}</td></tr>
    <tr><td style="background:${NAVY};padding:22px 28px;font-family:${FONT};font-size:13px;line-height:1.6;color:#9fb0c6">
      <strong style="color:#ffffff">AUTO CHARGE89</strong> · Installateur de bornes de recharge IRVE<br>
      <a href="tel:${PHONE_INTL}" style="color:#ffffff;text-decoration:none;font-weight:700">${PHONE}</a> · <a href="mailto:${EMAIL}" style="color:#9fb0c6">${EMAIL}</a><br>
      <a href="${SITE_URL}" style="color:${ORANGE};text-decoration:none">auto-charge-89.fr</a> · <a href="${FACEBOOK}" style="color:${ORANGE};text-decoration:none">Facebook</a>
    </td></tr>
  </table>
</td></tr></table>
</body></html>`;
}

const recapRows = (rows) =>
  rows
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:9px 14px;border-bottom:1px solid #ece6d6;font-family:${FONT};font-size:14px;color:${SOFT};width:34%;vertical-align:top">${k}</td><td style="padding:9px 14px;border-bottom:1px solid #ece6d6;font-family:${FONT};font-size:15px;color:${INK};font-weight:600;vertical-align:top">${esc(v).replace(/\n/g, '<br>')}</td></tr>`,
    )
    .join('');

// Email interne : nouvelle demande reçue par AUTO CHARGE89.
export function teamEmail(d, photoCount) {
  const rows = [['Nom', d.name], ['Téléphone', d.phone], ['Email', d.email], ['Commune', d.city], ['Projet', d.project], ['Message', d.message], ['Page', d.page]];
  const tel = String(d.phone || '').replace(/[^\d+]/g, '');
  const body = `
    <h1 style="margin:0 0 6px;font-family:${FONT};font-size:24px;color:${NAVY};text-transform:uppercase">Nouvelle demande de devis</h1>
    <p style="margin:0 0 20px;color:${SOFT}">${esc(d.name)} vient d’envoyer une demande depuis le site.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM};border-radius:10px;margin-bottom:22px">${recapRows(rows)}</table>
    ${photoCount ? `<p style="margin:0 0 22px;padding:12px 14px;background:#fff4ec;border-left:4px solid ${ORANGE};border-radius:6px;color:${INK}"><strong>${photoCount} photo${photoCount > 1 ? 's' : ''} jointe${photoCount > 1 ? 's' : ''}</strong> : tableau électrique du client (voir les pièces jointes).</p>` : ''}
    <p style="margin:0 0 24px">${button(`tel:${tel}`, 'Appeler le client')}</p>
    ${d.email ? `<p style="margin:0 0 24px;color:${SOFT};font-size:14px">Vous pouvez aussi répondre directement à cet email : la réponse part chez le client.</p>` : ''}`;
  return layout({ preheader: `Nouvelle demande de ${d.name}${d.city ? ' (' + d.city + ')' : ''}`, title: 'Nouvelle demande de devis', body });
}

// Email de confirmation envoyé au client.
export function customerEmail(d, photoCount) {
  const first = String(d.name || '').trim().split(/\s+/)[0] || '';
  const rows = [['Projet', d.project], ['Commune', d.city], ['Message', d.message]];
  const photoBlock = photoCount
    ? `<p style="margin:0 0 22px;padding:12px 14px;background:#fff4ec;border-left:4px solid ${ORANGE};border-radius:6px"><strong>Vos ${photoCount > 1 ? photoCount + ' photos sont bien arrivées' : 'photo est bien arrivée'}.</strong> Merci, cela nous permet de préparer un devis plus précis.</p>`
    : `<p style="margin:0 0 22px;padding:12px 14px;background:#fff4ec;border-left:4px solid ${ORANGE};border-radius:6px"><strong>Pour gagner du temps :</strong> répondez simplement à cet email avec une photo de votre tableau électrique (capot ouvert, bien éclairé). Nous pourrons ainsi chiffrer plus précisément votre installation.</p>`;
  const body = `
    <h1 style="margin:0 0 14px;font-family:${FONT};font-size:26px;line-height:1.15;color:${NAVY};text-transform:uppercase">Nous avons bien reçu votre demande</h1>
    <p style="margin:0 0 14px">Bonjour${first ? ' ' + esc(first) : ''},</p>
    <p style="margin:0 0 20px">Merci de votre confiance. Votre demande de devis pour une borne de recharge est bien enregistrée. <strong>Nous vous recontactons sous 48 h</strong>, sans engagement.</p>
    ${rows.some(([, v]) => v) ? `<p style="margin:0 0 8px;font-weight:700;color:${NAVY};text-transform:uppercase;font-size:13px;letter-spacing:1px">Récapitulatif</p><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM};border-radius:10px;margin-bottom:22px">${recapRows(rows)}</table>` : ''}
    ${photoBlock}
    <p style="margin:0 0 8px">Une question ou une urgence ? Appelez-nous directement :</p>
    <p style="margin:0 0 26px">${button(`tel:${PHONE_INTL}`, PHONE)}</p>
    <p style="margin:0 0 24px;color:${SOFT}">À très vite,<br><strong style="color:${NAVY}">L’équipe AUTO CHARGE89</strong></p>`;
  return layout({ preheader: 'Votre demande de devis est bien enregistrée. Réponse sous 48 h.', title: 'Votre demande de devis', body });
}
