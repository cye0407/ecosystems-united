import type { ScrubRule } from '../../src/types';

export const ESG_SCRUB_RULES: ScrubRule[] = [
  // --- Opening "AI-ism" hedges ---
  { pattern: /^Based on (?:the |our )?(?:available |provided |current )?data,?\s*/i, replacement: '' },
  { pattern: /^As (?:a|an) (?:small |medium-sized |large )?(?:manufacturing |industrial |logistics |construction |chemical |food |textile |technology |professional services? )?company,?\s*/i, replacement: '' },
  { pattern: /^As (?:a|an) organization,?\s*/i, replacement: '' },
  { pattern: /^It is important to note that\s*/i, replacement: '' },
  { pattern: /^It should be noted that\s*/i, replacement: '' },
  { pattern: /^We would like to (?:highlight|note|mention) that\s*/i, replacement: '' },
  { pattern: /^In terms of\s+/i, replacement: 'Regarding ' },
  { pattern: /^With regard(?:s)? to\s+/i, replacement: 'Regarding ' },
  // --- Mid-sentence hedges ---
  { pattern: /\bhowever,? it is worth noting that\s*/gi, replacement: '' },
  { pattern: /\bit is worth (?:noting|mentioning|highlighting) that\s*/gi, replacement: '' },
  { pattern: /\bwe acknowledge that\s*/gi, replacement: '' },
  { pattern: /\bwe recognize that\s*/gi, replacement: '' },
  // --- Passive "gap" language → active roadmap language ---
  { pattern: /\b(?:monitoring|tracking) of (\w+) (?:is|has) not (?:yet )?(?:been )?(?:established|implemented)/gi, replacement: 'we are implementing $1 monitoring through site-level tracking' },
  { pattern: /\bwe do not (?:yet |currently )?(?:have|maintain) (?:a )?(?:formal )?(\w+) (?:policy|document|procedure)/gi, replacement: 'we are developing a formal $1 policy' },
  { pattern: /\bno (?:formal )?(?:policy|document|procedure) (?:is|has been) (?:established|in place)/gi, replacement: 'a formal policy is currently in development' },
  { pattern: /\binsufficient data (?:is|was) (?:currently )?available/gi, replacement: 'we are establishing data collection processes' },
  { pattern: /\bwe do not (?:yet |currently )?(?:track|monitor|measure) /gi, replacement: 'we are establishing tracking for ' },
  { pattern: /\bdata (?:is|was) not (?:yet )?(?:available|collected)/gi, replacement: 'data collection is currently being established' },
  { pattern: /\bwe lack\b/gi, replacement: 'we are developing' },
  { pattern: /\bthere is no\b/gi, replacement: 'we are establishing' },
  // --- Generic AI filler ---
  { pattern: /\bin conclusion,?\s*/gi, replacement: '' },
  { pattern: /\boverall,?\s*/gi, replacement: '' },
  { pattern: /\bin summary,?\s*/gi, replacement: '' },
  { pattern: /\bto summarize,?\s*/gi, replacement: '' },
  { pattern: /\bmoreover,?\s*/gi, replacement: 'Additionally, ' },
  { pattern: /\bfurthermore,?\s*/gi, replacement: 'Additionally, ' },
];
