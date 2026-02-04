import { Outlet, useNavigate } from 'react-router-dom';
import { FileText, Warning } from '@phosphor-icons/react';
import { Button, Stepper } from '@/components/ui';
import { useSession } from '@/context/SessionContext';
import { STEPPER_STEPS, getStepperCurrent, getStepperCompleted } from '@/constants/app';

export function AppShell() {
  const navigate = useNavigate();
  const { step, hasPaid, hasResults, clearSessionAndReset, error, answerDrafts } = useSession();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => step === 'landing' ? undefined : (answerDrafts.length > 0 ? undefined : navigate('/'))}
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" weight="duotone" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800">ESG Response Generator</h1>
              <p className="text-xs text-slate-500">by ESG for Suppliers</p>
            </div>
          </div>
          {step !== 'landing' && (
            <Button variant="ghost" size="sm" onClick={clearSessionAndReset}>
              Start Over
            </Button>
          )}
        </div>
      </header>

      {/* Global Progress Stepper */}
      {step !== 'landing' && (
        <div className="border-b border-slate-100 bg-white py-3 px-4">
          <Stepper
            steps={STEPPER_STEPS}
            currentStep={getStepperCurrent(step, hasPaid)}
            completedSteps={getStepperCompleted(step, hasPaid, hasResults)}
          />
        </div>
      )}

      {/* Autosave indicator */}
      {step !== 'landing' && hasResults && (
        <div className="text-center py-1">
          <span className="text-[10px] text-gray-400">All changes saved automatically</span>
        </div>
      )}

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Error */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <Warning className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" weight="duotone" />
              <div>
                <p className="font-medium text-red-800">Something went wrong</p>
                <p className="text-sm text-red-600">{error}</p>
                <div className="mt-2 text-xs text-red-500">
                  {error.includes('column') && <p>Tip: Ensure your file has a header row with a column named &quot;Question&quot; or similar.</p>}
                  {error.includes('parse') && <p>Tip: Try saving the file as .xlsx format and uploading again.</p>}
                  {error.includes('format') && <p>Tip: Supported formats are Excel (.xlsx, .xls), CSV, PDF, and Word (.docx).</p>}
                  {error.includes('payment') && <p>Tip: Your answers are saved &mdash; you can try again without re-uploading.</p>}
                </div>
              </div>
            </div>
          </div>
        )}

        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-slate-400">
          <p>ESG for Suppliers &middot; ESG Response Generator</p>
          <p className="mt-1">
            <a href="mailto:contact@esgforsuppliers.com" className="hover:text-gray-600">contact@esgforsuppliers.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
