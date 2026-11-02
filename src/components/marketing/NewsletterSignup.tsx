'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { analytics } from '@/lib/analytics';
import { HONEYPOT_FIELD, looksLikeBot } from '@/lib/bot-check';

export default function NewsletterSignup() {
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);
  const [blocked, setBlocked] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const data = new FormData(e.currentTarget);
    const isBot = looksLikeBot({
      email: String(data.get('email') ?? ''),
      honeypot: String(data.get(HONEYPOT_FIELD) ?? ''),
      startedAt: startedAt.current,
    });
    if (isBot) {
      // Don't post to Buttondown; show a quiet thank-you instead.
      e.preventDefault();
      setBlocked(true);
      return;
    }
    analytics.track('newsletter_signup', {
      page: window.location.pathname,
      label: 'five_stacks_monthly',
    });
  }

  return (
    <div className="bg-gray-50 rounded-lg p-8 text-center">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">The Five Stacks Monthly</h3>
      <p className="text-gray-600 mb-6">
        One email per month. One insight per stack. Practical sustainability for agricultural
        operations.
      </p>

      {blocked ? (
        <p className="text-gray-700">Thanks, you're on the list.</p>
      ) : (
      <form
        action="https://buttondown.com/api/emails/embed-subscribe/ecosystemsunited"
        method="post"
        onSubmit={handleSubmit}
        className="flex gap-3 max-w-md mx-auto"
      >
        {/* Honeypot: hidden from people, filled in by bots. */}
        <input
          type="text"
          name={HONEYPOT_FIELD}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        />
        <input
          type="email"
          name="email"
          placeholder="you@farm.com"
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded font-medium hover:bg-primary-dark transition-colors"
        >
          Subscribe
        </button>
      </form>
      )}
      <p className="text-xs text-gray-400 mt-2">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
