const BODY = "# AUTO CHARGE89 — installateur de bornes de recharge dans l'Yonne (89)\nUser-agent: *\nAllow: /\nDisallow: /api/\n\n# Moteurs de réponse IA : accès autorisé pour être cité\nUser-agent: GPTBot\nAllow: /\nUser-agent: OAI-SearchBot\nAllow: /\nUser-agent: ChatGPT-User\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: Claude-SearchBot\nAllow: /\nUser-agent: Claude-User\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: Perplexity-User\nAllow: /\nUser-agent: Google-Extended\nAllow: /\nUser-agent: Applebot-Extended\nAllow: /\nUser-agent: Bingbot\nAllow: /\nUser-agent: MistralAI-User\nAllow: /\n\n";

export function GET({ site }) {
  return new Response(BODY + `Sitemap: ${new URL("/sitemap-index.xml", site).href}\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
