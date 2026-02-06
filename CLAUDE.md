# Ecosystems United

## Project Overview
Ecosystems United is the main platform for the Five Stacks Framework, transforming sustainability compliance (CSRD) into competitive advantage for SMEs. Includes the public website, the EU web app, and the Five Stacks methodology.

## Tech Stack
- Next.js / TypeScript
- Supabase (if applicable â€” confirm)
- Tailwind CSS

## Current State
- Unified Next.js app under src/ — migration from separate Vite (app/) + Next.js (site/) complete
- Build passes with 90+ routes (marketing, app, auth)
- Legacy code preserved in app-legacy/ and site/ for reference
- Branch: feat/nextjs-unification — ready for PR to main

## Architecture
- src/app/(marketing)/ — public website pages (framework, articles, tools, assessments)
- src/app/(app)/ — authenticated dashboard (data entry, respond, exports, settings, onboarding)
- src/app/(auth)/ — login, signup, forgot-password
- src/components/ — shared UI, data, auth, app, and marketing components
- src/lib/ — supabase client, tracking, respond engine, analytics, sentry, validation
- src/stores/ — Zustand stores (appStore, dataStore)
- src/contexts/ — AuthContext (Supabase auth)
- src/hooks/ — useResponseGenerator, useSupabaseSync
- src/types/ — shared TypeScript types
- app-legacy/ — original Vite React app (reference only)
- site/ — original Next.js marketing site (reference only)
- public/ — static assets (logo, icons)

## Git Conventions
- Use conventional commits: feat:, fix:, docs:, refactor:, chore:
- Keep subject lines under 72 characters
- Commit after each meaningful change, not at the end of a session
- Create feature branches for new work: feat/description

## Session Protocol
- At session start: read this file
- During work: commit every meaningful milestone
- At session end: update "Current State" above, commit, push
