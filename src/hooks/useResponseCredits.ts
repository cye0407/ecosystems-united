import { useState, useEffect, useCallback } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';
import { useAppStore } from '@/stores/appStore';
import { STRIPE_PRICES } from '@/lib/stripe';

interface ResponseCredits {
  available: number;
  totalPurchased: number;
  loading: boolean;
  error: string | null;
  isFirstPurchase: boolean;
  currentPrice: string;
  refresh: () => Promise<void>;
  useCredit: () => Promise<boolean>;
  startCheckout: () => Promise<void>;
}

export function useResponseCredits(): ResponseCredits {
  const [available, setAvailable] = useState(0);
  const [totalPurchased, setTotalPurchased] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const user = useAppStore((s) => s.user);

  const refresh = useCallback(async () => {
    if (!user?.id || !isSupabaseConfigured()) {
      setLoading(false);
      return;
    }

    try {
      const { data, error: fetchError } = await supabase
        .from('response_credits')
        .select('id, used')
        .eq('user_id', user.id);

      if (fetchError) throw fetchError;

      const total = data?.length ?? 0;
      const unused = data?.filter((c) => !c.used).length ?? 0;
      setTotalPurchased(total);
      setAvailable(unused);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load credits');
    } finally {
      setLoading(false);
    }
  }, [user?.id]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const isFirstPurchase = totalPurchased === 0;
  const currentPrice = isFirstPurchase
    ? STRIPE_PRICES.firstResponse
    : STRIPE_PRICES.additionalResponse;

  const useCredit = useCallback(async (): Promise<boolean> => {
    if (!user?.id || available <= 0) return false;

    const { data, error: fetchError } = await supabase
      .from('response_credits')
      .select('id')
      .eq('user_id', user.id)
      .eq('used', false)
      .limit(1)
      .single();

    if (fetchError || !data) return false;

    const { error: updateError } = await supabase
      .from('response_credits')
      .update({ used: true, used_at: new Date().toISOString() })
      .eq('id', data.id);

    if (updateError) return false;

    await refresh();
    return true;
  }, [user?.id, available, refresh]);

  const startCheckout = useCallback(async () => {
    if (!user?.id) return;

    setError(null);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: currentPrice,
          userId: user.id,
          userEmail: user.email,
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Failed to start checkout');
      }
    } catch {
      setError('Failed to connect to payment service');
    }
  }, [user?.id, user?.email, currentPrice]);

  return {
    available,
    totalPurchased,
    loading,
    error,
    isFirstPurchase,
    currentPrice,
    refresh,
    useCredit,
    startCheckout,
  };
}
