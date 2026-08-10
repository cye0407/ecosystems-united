/**
 * Analytics utility — sends events to Supabase `site_events` table.
 *
 * Tracks page views, user actions, and lead captures.
 * Works without authentication (uses anon key with RLS insert policy).
 */

import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';

type EventProperties = Record<string, string | number | boolean | null>;

function getSessionId(): string {
  const key = 'eu-session-id';
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(key, id);
  }
  return id;
}

// Set by src/proxy.ts for bot-hub geographies (e.g. the Singapore
// data-center cluster). Events still fire locally but are not recorded,
// so Supabase site_events reflects humans. Leads are NOT gated here —
// an explicitly typed email is worth keeping regardless of geo.
function isFilteredGeo(): boolean {
  return document.cookie.split('; ').includes('eu_geo_filtered=1');
}

async function send(event: string, page?: string, label?: string, metadata?: EventProperties): Promise<void> {
  if (typeof window === 'undefined') return;

  if (isFilteredGeo()) return;

  if (process.env.NODE_ENV === 'development') {
    console.debug('[analytics]', event, { page, label, metadata });
  }

  if (!isSupabaseConfigured()) return;

  try {
    await supabase.from('site_events').insert({
      event,
      page: page || window.location.pathname,
      label: label || null,
      metadata: metadata || null,
      session_id: getSessionId(),
    });
  } catch {
    // Silently fail — analytics should never break the app
  }
}

export const analytics = {
  /** Track a page view */
  pageView(path: string) {
    send('page_view', path);
  },

  /** Track a user action */
  track(event: string, properties?: EventProperties) {
    const page = properties?.page as string | undefined;
    const label = properties?.label as string | undefined;
    const metadata = properties ? { ...properties } : undefined;
    if (metadata) {
      delete metadata.page;
      delete metadata.label;
    }
    send(event, page, label, Object.keys(metadata || {}).length ? metadata : undefined);
  },

  /** Capture a lead */
  async captureLead(data: {
    email: string;
    companyName?: string;
    industry?: string;
    country?: string;
    employees?: number;
    source: string;
  }) {
    if (typeof window === 'undefined' || !isSupabaseConfigured()) return;

    try {
      await supabase.from('leads').insert({
        email: data.email,
        company_name: data.companyName || null,
        industry: data.industry || null,
        country: data.country || null,
        employees: data.employees || null,
        source: data.source,
      });
    } catch {
      // Silently fail
    }

    // Also track as an event
    send('lead_captured', window.location.pathname, data.source, {
      has_company: !!data.companyName,
      has_industry: !!data.industry,
    });
  },
};
