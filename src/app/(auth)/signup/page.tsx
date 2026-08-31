"use client";

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { analytics } from '@/lib/analytics';
import { Button } from '@/components/ui';
import { Input } from '@/components/ui';
import { Card } from '@/components/ui';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { signUp } = useAuth();
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setIsLoading(true);

    const { error, session } = await signUp(email, password, name || undefined);

    if (error) {
      setIsLoading(false);
      setError(error.message);
    } else if (session) {
      analytics.track('signup_completed');
      // Email confirmation is off — the account is live, go straight in.
      // Preserve campaign params (e.g. ?from=assessment&stack=N) so the
      // onboarding welcome can personalise itself.
      router.replace(`/onboarding${window.location.search}`);
    } else {
      setIsLoading(false);
      setSubmitted(true);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <Card padding="lg">
          <h1 className="text-2xl font-semibold text-gray-900 text-center mb-2">
            Create your free account
          </h1>
          <p className="text-sm text-gray-500 text-center mb-6">
            Full 8-domain tracker, CSV exports, multi-site support.
          </p>

          {submitted ? (
            <p className="text-sm text-gray-700 text-center">
              Check your email for a confirmation link.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                hint="Optional"
                autoComplete="name"
              />

              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />

              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                hint="At least 6 characters"
                autoComplete="new-password"
              />

              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isLoading}
                className="w-full"
              >
                Create Account
              </Button>
            </form>
          )}

          <div className="mt-4 text-center text-sm">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-600 hover:text-blue-500">
                Sign in
              </Link>
            </p>
          </div>
        </Card>
      </div>

      <p className="mt-8 text-xs text-gray-400">Ecosystems United</p>
    </div>
  );
}
