// Fonction serverless Vercel : reçoit le formulaire de devis et l'envoie par email.
// Destinataire : toujours auto.charge89@gmail.com (fixé dans le code).
// Deux modes d'envoi, au choix (variables dans Vercel > Settings > Environment Variables) :
//   1) SMTP OVH (prioritaire si SMTP_USER et SMTP_PASS sont définis)
//        SMTP_USER  adresse email OVH (ex. contact@auto-charge-89.fr), sert aussi d'expéditeur
//        SMTP_PASS  mot de passe de cette boîte email
//        SMTP_HOST  (facultatif) défaut ssl0.ovh.net ; SMTP_PORT (facultatif) défaut 465
//   2) Brevo (sinon) : BREVO_API_KEY et BREVO_SENDER (expéditeur validé dans Brevo)

import nodemailer from 'nodemailer';

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

  const to = 'auto.charge89@gmail.com';
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const key = process.env.BREVO_API_KEY;
  if (!(smtpUser && smtpPass) && !key) return json(503, { error: 'not_configured' });
  const sender = process.env.BREVO_SENDER || to;

  const rows = [
    ['Nom', data.name], ['Téléphone', data.phone], ['Email', data.email], ['Commune', data.city],
    ['Projet', data.project], ['Message', data.message], ['Page', data.page],
  ];
  const html = `<h2>Nouvelle demande de devis</h2><table cellpadding="6">${rows
    .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v).replace(/\n/g, '<br>')}</td></tr>`)
    .join('')}</table>`;

  const subject = `Devis borne — ${String(data.name).slice(0, 80)} (${String(data.city || 'Yonne').slice(0, 60)})`;
  const replyTo = data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? { address: data.email, name: String(data.name).slice(0, 100) } : undefined;

  if (smtpUser && smtpPass) {
    try {
      const port = Number(process.env.SMTP_PORT || 465);
      const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'ssl0.ovh.net',
        port,
        secure: port === 465,
        auth: { user: smtpUser, pass: smtpPass },
      });
      await transport.sendMail({ from: { name: 'Site AUTO CHARGE89', address: smtpUser }, to, replyTo, subject, html });
      return json(200, { ok: true });
    } catch {
      return json(502, { error: 'send_failed' });
    }
  }

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
