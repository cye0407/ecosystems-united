import { useState, useEffect } from 'react';
import { Button } from '@/components/ui';

const COOKIE_CONSENT_KEY = 'eu-cookie-consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="banner"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 sm:p-6 animate-slide-up"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-700">
            We use cookies and local storage to improve your experience. Your ESG data stays in your browser.
            By continuing, you agree to our{' '}
            <a
              href="https://ecosystemsunited.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark"
            >
              Privacy Policy
            </a>{' '}
            and{' '}
            <a
              href="https://ecosystemsunited.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark"
            >
              Terms of Service
            </a>.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Button variant="ghost" size="sm" onClick={handleDecline}>
            Decline
          </Button>
          <Button size="sm" onClick={handleAccept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
