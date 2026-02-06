import { Outlet } from 'react-router-dom';
import { useAppStore } from '@/stores/appStore';
import { ProgressBar } from '@/components/ui';

export function OnboardingLayout() {
  const { onboarding } = useAppStore();
  const progress = ((onboarding.currentStep + 1) / onboarding.totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Ecosystems United" className="h-8" />
              <span className="font-semibold text-gray-900">ESG Passport</span>
            </div>
            <span className="text-sm text-gray-500">
              Step {onboarding.currentStep + 1} of {onboarding.totalSteps}
            </span>
          </div>
          <ProgressBar value={progress} size="sm" />
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 py-6 border-t bg-white mt-auto">
        Part of the{' '}
        <a href="https://ecosystemsunited.com" className="text-primary hover:underline">
          Five Stacks Framework
        </a>{' '}
        by Ecosystems United
      </footer>
    </div>
  );
}
