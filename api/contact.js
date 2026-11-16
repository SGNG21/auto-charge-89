// Fonction serverless Vercel : reçoit le formulaire de devis, l'envoie à AUTO CHARGE89
// (avec les photos du tableau électrique en pièces jointes) et envoie un email de confirmation au client.
// Destinataire interne : toujours auto.charge89@gmail.com (fixé dans le code).
// Fournisseur d'envoi, au choix (variables dans Vercel > Settings > Environment Variables) :
//   1) SMTP OVH (prioritaire) : SMTP_USER, SMTP_PASS (+ SMTP_HOST défaut ssl0.ovh.net, SMTP_PORT défaut 465)
//   2) Resend : RESEND_API_KEY et RESEND_FROM (ex. "AUTO CHARGE89 <devis@auto-charge-89.fr>")
//   3) Brevo : BREVO_API_KEY et BREVO_SENDER (expéditeur validé dans Brevo)

import nodemailer from 'nodemailer';
import { teamEmail, customerEmail } from './_email.js';

const TO = 'auto.charge89@gmail.com';
const MAX_PHOTOS = 3;
const MAX_PHOTO_BYTES = 3 * 1024 * 1024;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const json = (status, body) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

// Photos : types image courants, signature de fichier vérifiée, taille bornée.
function parsePhotos(raw) {
  if (!Array.isArray(raw)) return [];
  const out = [];
  for (const p of raw.slice(0, MAX_PHOTOS)) {
    if (!p || typeof p.data !== 'string') continue;
    const buf = Buffer.from(p.data, 'base64');
    if (!buf.length || buf.length > MAX_PHOTO_BYTES) continue;
    let ext = null;
    if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) ext = 'jpg';
    else if (buf[0] === 0x89 && buf.toString('ascii', 1, 4) === 'PNG') ext = 'png';
    else if (buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') ext = 'webp';
    if (!ext) continue;
    out.push({ filename: `photo-tableau-${out.length + 1}.${ext}`, content: buf, contentType: ext === 'jpg' ? 'image/jpeg' : `image/${ext}` });
  }
  return out;
}

function provider() {
  const { SMTP_USER, SMTP_PASS, RESEND_API_KEY, BREVO_API_KEY, BREVO_SENDER } = process.env;
  if (SMTP_USER && SMTP_PASS) return 'smtp';
  if (RESEND_API_KEY) return 'resend';
  if (BREVO_API_KEY) return 'brevo';
  return null;
}

async function send(kind, { to, subject, html, replyTo, attachments = [] }) {
  const env = process.env;
  if (kind === 'smtp') {
    const port = Number(env.SMTP_PORT || 465);
    const transport = nodemailer.createTransport({ host: env.SMTP_HOST || 'ssl0.ovh.net', port, secure: port === 465, auth: { user: env.SMTP_USER, pass: env.SMTP_PASS } });
    await transport.sendMail({ from: { name: 'AUTO CHARGE89', address: env.SMTP_USER }, to, replyTo, subject, html, attachments });
    return;
  }
  if (kind === 'resend') {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env.RESEND_FROM || 'AUTO CHARGE89 <onboarding@resend.dev>',
        to: [to],
        ...(replyTo ? { reply_to: replyTo } : {}),
        subject,
        html,
        ...(attachments.length ? { attachments: attachments.map((a) => ({ filename: a.filename, content: a.content.toString('base64') })) } : {}),
      }),
    });
    if (!r.ok) throw new Error(`Resend ${r.status} ${(await r.text()).slice(0, 400)}`);
    return;
  }
  const r = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': env.BREVO_API_KEY, 'Content-Type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      sender: { name: 'AUTO CHARGE89', email: env.BREVO_SENDER || TO },
      to: [{ email: to }],
      ...(replyTo ? { replyTo: { email: replyTo } } : {}),
      subject,
      htmlContent: html,
      ...(attachments.length ? { attachment: attachments.map((a) => ({ name: a.filename, content: a.content.toString('base64') })) } : {}),
    }),
  });
  if (!r.ok) throw new Error(`Brevo ${r.status} ${(await r.text()).slice(0, 400)}`);
}

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

  const kind = provider();
  if (!kind) {
    console.error("contact: aucune variable d'envoi définie (SMTP_USER/SMTP_PASS, RESEND_API_KEY ou BREVO_API_KEY)");
    return json(503, { error: 'not_configured' });
  }

  const photos = parsePhotos(data.photos);
  const clientEmail = typeof data.email === 'string' && EMAIL_RE.test(data.email.trim()) ? data.email.trim() : '';
  const name = String(data.name).slice(0, 80);

  // 1) Email interne (obligatoire) : le client peut être rappelé même si la confirmation échoue.
  try {
    await send(kind, {
      to: TO,
      replyTo: clientEmail || undefined,
      subject: `Devis borne — ${name} (${String(data.city || 'Yonne').slice(0, 60)})${photos.length ? ` · ${photos.length} photo${photos.length > 1 ? 's' : ''}` : ''}`,
      html: teamEmail(data, photos.length),
      attachments: photos,
    });
  } catch (e) {
    console.error('contact: envoi interne échoué', kind, e?.message);
    return json(502, { error: 'send_failed' });
  }

  // 2) Confirmation au client (facultative, ne bloque jamais la demande).
  let confirmation = false;
  if (clientEmail) {
    try {
      await send(kind, {
        to: clientEmail,
        replyTo: TO,
        subject: 'Nous avons bien reçu votre demande de devis — AUTO CHARGE89',
        html: customerEmail(data, photos.length),
      });
      confirmation = true;
    } catch (e) {
      console.error('contact: confirmation client échouée', kind, e?.message);
    }
  }
  return json(200, { ok: true, confirmation, photos: photos.length });
}
