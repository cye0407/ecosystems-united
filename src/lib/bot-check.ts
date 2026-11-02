// Spam-signup filter for public forms (signup, newsletter).
//
// Since Feb 2026 a bot has been creating accounts with dot-stuffed Gmail
// addresses (e.g. a.b.cd.e.f@gmail.com) and subscribing them to the
// newsletter. It runs a real browser, so three cheap client-side checks
// catch it: a hidden honeypot field, an implausibly fast submit, and the
// dotted-Gmail pattern itself. Rejected submissions get a fake success so
// the bot gets no signal to adapt to.

export const HONEYPOT_FIELD = 'website';

// A person needs a few seconds to type an email (and password).
const MIN_FILL_MS = 3000;

// Gmail ignores dots, so real users almost never have 3+; the bot uses 3–13.
const MAX_GMAIL_DOTS = 2;

export interface BotCheckInput {
  email: string;
  honeypot: string;
  startedAt: number;
  now?: number;
}

export function isDottedGmail(email: string): boolean {
  const [local, domain] = email.trim().toLowerCase().split('@');
  if (!local || !domain) return false;
  if (domain !== 'gmail.com' && domain !== 'googlemail.com') return false;
  return (local.match(/\./g) ?? []).length > MAX_GMAIL_DOTS;
}

export function looksLikeBot({ email, honeypot, startedAt, now = Date.now() }: BotCheckInput): boolean {
  if (honeypot.trim() !== '') return true;
  if (now - startedAt < MIN_FILL_MS) return true;
  return isDottedGmail(email);
}
