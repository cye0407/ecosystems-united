-- Add FTUE and onboarding completion fields to onboarding_state
ALTER TABLE onboarding_state
  ADD COLUMN IF NOT EXISTS is_onboarding_complete BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS ftue_dismissed_items JSONB NOT NULL DEFAULT '[]',
  ADD COLUMN IF NOT EXISTS ftue_dismissed_all BOOLEAN NOT NULL DEFAULT false;

-- Update total_steps default from 5 to 1 (company-only onboarding)
ALTER TABLE onboarding_state ALTER COLUMN total_steps SET DEFAULT 1;
