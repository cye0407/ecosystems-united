import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-02-25.clover',
  });
}

function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function POST(req: NextRequest) {
  try {
    const { priceId, userId, userEmail } = await req.json();

    if (!priceId || !userId) {
      return NextResponse.json({ error: 'Missing priceId or userId' }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    // Check if this is the user's first purchase
    const { data: credits } = await supabase
      .from('response_credits')
      .select('id')
      .eq('user_id', userId)
      .limit(1);

    const isFirstPurchase = !credits || credits.length === 0;
    const expectedPrice = isFirstPurchase
      ? process.env.NEXT_PUBLIC_STRIPE_PRICE_FIRST
      : process.env.NEXT_PUBLIC_STRIPE_PRICE_ADDITIONAL;

    if (priceId !== expectedPrice) {
      return NextResponse.json({ error: 'Invalid price for purchase state' }, { status: 400 });
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: userEmail || undefined,
      metadata: { userId },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ecosystemsunited.com'}/respond?payment=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ecosystemsunited.com'}/respond?payment=cancelled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
