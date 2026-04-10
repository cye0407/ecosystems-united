-- ============================================================
-- ECOSYSTEMS UNITED — User Engagement Queries
-- Run these in Supabase SQL Editor (Dashboard > SQL Editor)
-- ============================================================


-- -------------------------------------------------------
-- 1. SITE EVENTS (page views, actions, leads)
-- -------------------------------------------------------

-- Top events by count
SELECT event, COUNT(*) as total
FROM site_events
GROUP BY event
ORDER BY total DESC;

-- Page views: most visited pages
SELECT page, COUNT(*) as views
FROM site_events
WHERE event = 'page_view'
GROUP BY page
ORDER BY views DESC
LIMIT 20;

-- Unique sessions per day (last 30 days)
SELECT DATE(created_at) as day,
       COUNT(DISTINCT session_id) as unique_sessions,
       COUNT(*) as total_events
FROM site_events
WHERE created_at >= now() - interval '30 days'
GROUP BY DATE(created_at)
ORDER BY day DESC;

-- Weekly session trend
SELECT DATE_TRUNC('week', created_at)::date as week,
       COUNT(DISTINCT session_id) as unique_sessions,
       COUNT(*) as total_events
FROM site_events
WHERE created_at >= now() - interval '12 weeks'
GROUP BY week
ORDER BY week DESC;

-- Non-pageview actions (CTA clicks, interactions, etc.)
SELECT event, label, COUNT(*) as total
FROM site_events
WHERE event != 'page_view'
GROUP BY event, label
ORDER BY total DESC;


-- -------------------------------------------------------
-- 2. LEADS
-- -------------------------------------------------------

-- Total leads by source
SELECT source, COUNT(*) as total
FROM leads
GROUP BY source
ORDER BY total DESC;

-- Leads by country
SELECT country, COUNT(*) as total
FROM leads
WHERE country IS NOT NULL
GROUP BY country
ORDER BY total DESC;

-- Leads per week
SELECT DATE_TRUNC('week', created_at)::date as week, COUNT(*) as new_leads
FROM leads
WHERE created_at >= now() - interval '12 weeks'
GROUP BY week
ORDER BY week DESC;


-- -------------------------------------------------------
-- 3. ONBOARDING COMPLETION
-- -------------------------------------------------------

-- How many users completed onboarding
SELECT is_onboarding_complete, COUNT(*) as users
FROM onboarding_state
GROUP BY is_onboarding_complete;

-- Onboarding step distribution (where users are stuck)
SELECT current_step, COUNT(*) as users
FROM onboarding_state
WHERE is_onboarding_complete = false
GROUP BY current_step
ORDER BY current_step;

-- FTUE dismissal patterns
SELECT ftue_dismissed_all, COUNT(*) as users
FROM onboarding_state
GROUP BY ftue_dismissed_all;


-- -------------------------------------------------------
-- 4. DATA ENTRY ENGAGEMENT (are users filling in ESG data?)
-- -------------------------------------------------------

-- Users with data in each domain
SELECT 'companies' as domain, COUNT(DISTINCT user_id) as users_with_data FROM companies
UNION ALL SELECT 'sites', COUNT(DISTINCT user_id) FROM sites
UNION ALL SELECT 'swot', COUNT(DISTINCT user_id) FROM swot
UNION ALL SELECT 'goals', COUNT(DISTINCT user_id) FROM goals
UNION ALL SELECT 'regulatory_context', COUNT(DISTINCT user_id) FROM regulatory_context
UNION ALL SELECT 'materials', COUNT(DISTINCT user_id) FROM materials
UNION ALL SELECT 'material_inputs', COUNT(DISTINCT user_id) FROM material_inputs
UNION ALL SELECT 'packaging', COUNT(DISTINCT user_id) FROM packaging
UNION ALL SELECT 'packaging_inputs', COUNT(DISTINCT user_id) FROM packaging_inputs
UNION ALL SELECT 'energy_electricity', COUNT(DISTINCT user_id) FROM energy_electricity
UNION ALL SELECT 'energy_fuels', COUNT(DISTINCT user_id) FROM energy_fuels
UNION ALL SELECT 'energy_water', COUNT(DISTINCT user_id) FROM energy_water
UNION ALL SELECT 'transport_logs', COUNT(DISTINCT user_id) FROM transport_logs
UNION ALL SELECT 'workforce', COUNT(DISTINCT user_id) FROM workforce
UNION ALL SELECT 'health_safety', COUNT(DISTINCT user_id) FROM health_safety
UNION ALL SELECT 'training', COUNT(DISTINCT user_id) FROM training
UNION ALL SELECT 'waste', COUNT(DISTINCT user_id) FROM waste
UNION ALL SELECT 'product_outputs', COUNT(DISTINCT user_id) FROM product_outputs
UNION ALL SELECT 'direct_emissions', COUNT(DISTINCT user_id) FROM direct_emissions
UNION ALL SELECT 'effluents', COUNT(DISTINCT user_id) FROM effluents
UNION ALL SELECT 'external_context', COUNT(DISTINCT user_id) FROM external_context
UNION ALL SELECT 'financial_context', COUNT(DISTINCT user_id) FROM financial_context
UNION ALL SELECT 'buyer_requirements', COUNT(DISTINCT user_id) FROM buyer_requirements
UNION ALL SELECT 'reflections', COUNT(DISTINCT user_id) FROM reflections
ORDER BY users_with_data DESC;

-- Data depth per user (how many domains has each user filled in?)
SELECT user_id, COUNT(DISTINCT domain) as domains_filled, domains FROM (
  SELECT user_id, 'companies' as domain FROM companies
  UNION ALL SELECT user_id, 'sites' FROM sites
  UNION ALL SELECT user_id, 'swot' FROM swot
  UNION ALL SELECT user_id, 'goals' FROM goals
  UNION ALL SELECT user_id, 'materials' FROM materials
  UNION ALL SELECT user_id, 'energy_electricity' FROM energy_electricity
  UNION ALL SELECT user_id, 'energy_fuels' FROM energy_fuels
  UNION ALL SELECT user_id, 'energy_water' FROM energy_water
  UNION ALL SELECT user_id, 'transport_logs' FROM transport_logs
  UNION ALL SELECT user_id, 'workforce' FROM workforce
  UNION ALL SELECT user_id, 'waste' FROM waste
  UNION ALL SELECT user_id, 'product_outputs' FROM product_outputs
  UNION ALL SELECT user_id, 'direct_emissions' FROM direct_emissions
  UNION ALL SELECT user_id, 'packaging' FROM packaging
  UNION ALL SELECT user_id, 'external_context' FROM external_context
  UNION ALL SELECT user_id, 'financial_context' FROM financial_context
  UNION ALL SELECT user_id, 'buyer_requirements' FROM buyer_requirements
  UNION ALL SELECT user_id, 'reflections' FROM reflections
) sub
GROUP BY user_id
ORDER BY domains_filled DESC;

-- Recent data entry activity (last 30 days)
SELECT DATE(created_at) as day, domain, COUNT(*) as entries FROM (
  SELECT created_at, 'companies' as domain FROM companies WHERE created_at >= now() - interval '30 days'
  UNION ALL SELECT created_at, 'sites' FROM sites WHERE created_at >= now() - interval '30 days'
  UNION ALL SELECT created_at, 'materials' FROM materials WHERE created_at >= now() - interval '30 days'
  UNION ALL SELECT created_at, 'energy_electricity' FROM energy_electricity WHERE created_at >= now() - interval '30 days'
  UNION ALL SELECT created_at, 'workforce' FROM workforce WHERE created_at >= now() - interval '30 days'
  UNION ALL SELECT created_at, 'waste' FROM waste WHERE created_at >= now() - interval '30 days'
  UNION ALL SELECT created_at, 'transport_logs' FROM transport_logs WHERE created_at >= now() - interval '30 days'
) sub
GROUP BY DATE(created_at), domain
ORDER BY day DESC;


-- -------------------------------------------------------
-- 5. USER JOURNEY FUNNEL
-- -------------------------------------------------------

-- Signup → Onboarding → Company → First Data Entry
SELECT
  (SELECT COUNT(*) FROM onboarding_state) as signed_up,
  (SELECT COUNT(*) FROM onboarding_state WHERE is_onboarding_complete = true) as completed_onboarding,
  (SELECT COUNT(DISTINCT user_id) FROM companies) as created_company,
  (SELECT COUNT(DISTINCT user_id) FROM sites) as added_sites,
  (SELECT COUNT(DISTINCT user_id) FROM (
    SELECT user_id FROM materials
    UNION SELECT user_id FROM energy_electricity
    UNION SELECT user_id FROM energy_fuels
    UNION SELECT user_id FROM energy_water
    UNION SELECT user_id FROM workforce
    UNION SELECT user_id FROM waste
    UNION SELECT user_id FROM transport_logs
  ) sub) as entered_data,
  (SELECT COUNT(DISTINCT user_id) FROM reflections) as completed_reflections;


-- -------------------------------------------------------
-- 6. RESPONSE GENERATOR (paid tool)
-- -------------------------------------------------------

-- If you have a response_credits or response_history table, add queries here.
-- For now, check site_events for response-related actions:
SELECT event, label, COUNT(*) as total
FROM site_events
WHERE page LIKE '%respond%' OR event LIKE '%response%' OR event LIKE '%respond%'
GROUP BY event, label
ORDER BY total DESC;


-- -------------------------------------------------------
-- 7. QUICK HEALTH CHECK (fast overview)
-- -------------------------------------------------------

SELECT 'total_users' as metric, COUNT(*)::text as value FROM onboarding_state
UNION ALL
SELECT 'onboarding_complete', COUNT(*)::text FROM onboarding_state WHERE is_onboarding_complete = true
UNION ALL
SELECT 'companies_created', COUNT(*)::text FROM companies
UNION ALL
SELECT 'total_site_events', COUNT(*)::text FROM site_events
UNION ALL
SELECT 'events_last_7d', COUNT(*)::text FROM site_events WHERE created_at >= now() - interval '7 days'
UNION ALL
SELECT 'unique_sessions_last_7d', COUNT(DISTINCT session_id)::text FROM site_events WHERE created_at >= now() - interval '7 days'
UNION ALL
SELECT 'leads_total', COUNT(*)::text FROM leads
UNION ALL
SELECT 'leads_last_7d', COUNT(*)::text FROM leads WHERE created_at >= now() - interval '7 days'
UNION ALL
SELECT 'users_with_data_entries', (SELECT COUNT(DISTINCT user_id) FROM (
  SELECT user_id FROM materials UNION ALL SELECT user_id FROM energy_electricity
  UNION ALL SELECT user_id FROM workforce UNION ALL SELECT user_id FROM waste
) sub)::text;
