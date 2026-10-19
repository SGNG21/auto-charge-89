// Fonction serverless Vercel : reçoit le formulaire de devis et l'envoie par email via Brevo.
// Variables d'environnement (Vercel > Settings > Environment Variables) :
//   BREVO_API_KEY   clé API Brevo (obligatoire)
//   BREVO_SENDER    email expéditeur validé dans Brevo (ex. contact@votre-domaine.fr)
//   CONTACT_TO      destinataire des demandes (par défaut auto.charge89@gmail.com)

const esc = (s) => String(s ?? '').slice(0, 2000).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const json = (status, body) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json(400, { error: 'invalid' });
  }
  // Pot de miel anti-spam.
  if (data.website) return json(200, { ok: true });
  if (!data.name || !data.phone || !data.consent) return json(422, { error: 'missing' });

  const key = process.env.BREVO_API_KEY;
  if (!key) return json(503, { error: 'not_configured' });
  const to = process.env.CONTACT_TO || 'auto.charge89@gmail.com';
  const sender = process.env.BREVO_SENDER || to;

  const rows = [
    ['Nom', data.name], ['Téléphone', data.phone], ['Email', data.email], ['Commune', data.city],
    ['Projet', data.project], ['Message', data.message], ['Page', data.page],
  ];
  const html = `<h2>Nouvelle demande de devis</h2><table cellpadding="6">${rows
    .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v).replace(/\n/g, '<br>')}</td></tr>`)
    .join('')}</table>`;

  const r = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': key, 'Content-Type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      sender: { name: 'Site AUTO CHARGE89', email: sender },
      to: [{ email: to }],
      ...(data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? { replyTo: { email: data.email, name: String(data.name).slice(0, 100) } } : {}),
      subject: `Devis borne — ${String(data.name).slice(0, 80)} (${String(data.city || 'Yonne').slice(0, 60)})`,
      htmlContent: html,
    }),
  });
  if (!r.ok) return json(502, { error: 'send_failed' });
  return json(200, { ok: true });
}
