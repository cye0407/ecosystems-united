"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Lightning, FileArrowUp, SkipForward } from '@phosphor-icons/react';
import { v4 as uuid } from 'uuid';
import { Button, Input, Card } from '@/components/ui';
import { useAppStore } from '@/stores/appStore';
import { useDataStore } from '@/stores/dataStore';
import type { EnergyElectricity } from '@/types';

/**
 * Cold-start "one real number" step.
 *
 * Goal: end the onboarding with a real data point on the dashboard, not an empty grid.
 * We deliberately do NOT seed estimated data — every number on the dashboard should be
 * something the user actually entered, so trust in the operations layer is built from day one.
 */
export default function FirstEntryPage() {
  const router = useRouter();
  const { sites, setIsOnboardingComplete, completeOnboardingStep } = useAppStore();
  const addEnergyElectricity = useDataStore((s) => s.addEnergyElectricity);

  const [kwh, setKwh] = useState('');
  const [error, setError] = useState('');

  const finishOnboarding = () => {
    completeOnboardingStep(1);
    setIsOnboardingComplete(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const value = parseFloat(kwh);
    if (!kwh || isNaN(value) || value <= 0) {
      setError('Enter a number greater than zero.');
      return;
    }

    // Use the previous calendar month as the period — what most users will have a bill for.
    const now = new Date();
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const period = `${lastMonth.getFullYear()}-${String(lastMonth.getMonth() + 1).padStart(2, '0')}`;

    const siteId = sites[0]?.id ?? '';

    const entry: EnergyElectricity = {
      id: uuid(),
      siteId,
      period,
      consumptionKwh: value,
      sourceGridPercent: 100,
      sourceOnsiteRenewablePercent: 0,
      sourcePpaPercent: 0,
      source: 'bill',
      confidence: 'high',
      lastUpdated: new Date().toISOString(),
    };

    addEnergyElectricity(entry);
    finishOnboarding();
    router.push('/dashboard');
  };

  const handleImport = () => {
    finishOnboarding();
    router.push('/data/energy?import=1');
  };

  const handleSkip = () => {
    finishOnboarding();
    router.push('/dashboard');
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8 text-center">
        <div className="w-14 h-14 bg-forest-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Lightning className="w-7 h-7 text-forest-700" weight="duotone" />
        </div>
        <h1 className="text-2xl font-bold text-deep-forest mb-2">Add your first number</h1>
        <p className="text-gray-600">
          One real data point and your dashboard comes alive. Grab last month's electricity bill —
          that's it for today.
        </p>
      </div>

      <form onSubmit={handleSave}>
        <Card className="mb-6">
          <Input
            label="Last month's electricity (kWh)"
            type="number"
            inputMode="decimal"
            min="0"
            step="any"
            value={kwh}
            onChange={(e) => {
              setKwh(e.target.value);
              if (error) setError('');
            }}
            placeholder="e.g., 4250"
            error={error}
            hint="It's on the bill — usually labelled 'kWh used' or 'units consumed'."
          />
        </Card>

        <Button type="submit" className="w-full mb-6" size="lg">
          Save and see my dashboard
          <ArrowRight className="w-5 h-5 ml-2" weight="bold" />
        </Button>
      </form>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={handleImport}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
        >
          <FileArrowUp className="w-4 h-4" weight="duotone" />
          Got a spreadsheet? Import it
        </button>
        <button
          type="button"
          onClick={handleSkip}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition"
        >
          <SkipForward className="w-4 h-4" weight="duotone" />
          Skip for now
        </button>
      </div>
    </div>
  );
}
