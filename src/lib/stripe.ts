// ============================================
// Stripe Configuration
// ============================================

export const STRIPE_PRICES = {
  firstResponse: process.env.NEXT_PUBLIC_STRIPE_PRICE_FIRST || 'price_1TDsn3CbGwr4TMgmeljJJA5H',
  additionalResponse: process.env.NEXT_PUBLIC_STRIPE_PRICE_ADDITIONAL || 'price_1TDso4CbGwr4TMgmtLcp61sP',
} as const;

export const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '';
