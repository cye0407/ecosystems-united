import { Card, ProgressBar } from '@/components/ui';
import { useSession } from '@/context/SessionContext';

export function ProcessingPage() {
  const { llmStatus, progress } = useSession();

  return (
    <div className="max-w-lg mx-auto animate-fade-in">
      <Card className="text-center py-10">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-slate-200 border-t-accent mx-auto mb-6" />
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Processing Questionnaire</h2>
        <p className="text-slate-500 text-sm mb-6">{llmStatus || 'Reading your file...'}</p>
        <ProgressBar value={progress} />
      </Card>
      {/* Skeleton preview of upcoming cards */}
      <div className="mt-6 space-y-3 opacity-40">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="skeleton h-6 w-6 rounded-full" />
              <div className="skeleton h-5 w-24 rounded-md" />
              <div className="skeleton h-5 w-16 rounded-md" />
            </div>
            <div className="skeleton h-5 w-3/4 mb-3" />
            <div className="skeleton h-4 w-full mb-2" />
            <div className="skeleton h-4 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  );
}
