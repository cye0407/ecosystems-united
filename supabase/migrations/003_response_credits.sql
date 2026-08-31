-- ============================================================================
-- 003_response_credits.sql
-- Paid response-generator credits. Written by the Stripe webhook (service
-- role), read and spent by the signed-in user.
-- ============================================================================

CREATE TABLE IF NOT EXISTS response_credits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_session_id TEXT,
  amount_paid NUMERIC,
  currency TEXT DEFAULT 'eur',
  used BOOLEAN NOT NULL DEFAULT false,
  used_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE response_credits ENABLE ROW LEVEL SECURITY;

-- No INSERT policy on purpose: credits are only granted by the Stripe webhook
-- via the service role, which bypasses RLS. Users can see and spend their own.
CREATE POLICY "Users can view own credits" ON response_credits
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can spend own credits" ON response_credits
  FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_response_credits_user ON response_credits (user_id, used);
