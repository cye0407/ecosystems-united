import { Check } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

export interface StepperStep {
  key: string;
  label: string;
}

export interface StepperProps {
  steps: StepperStep[];
  currentStep: string;
  completedSteps?: string[];
  className?: string;
}

export function Stepper({ steps, currentStep, completedSteps = [], className }: StepperProps) {
  const currentIndex = steps.findIndex(s => s.key === currentStep);

  return (
    <div className={cn('flex items-center gap-1 w-full max-w-xl mx-auto', className)}>
      {steps.map((step, i) => {
        const isCompleted = completedSteps.includes(step.key) || i < currentIndex;
        const isCurrent = step.key === currentStep;
        const isFuture = !isCompleted && !isCurrent;

        return (
          <div key={step.key} className="flex items-center flex-1 min-w-0 last:flex-initial">
            <div className="flex flex-col items-center gap-1">
              <div className={cn(
                'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 flex-shrink-0',
                isCompleted && 'bg-slate-700 text-white',
                isCurrent && 'bg-accent text-white ring-2 ring-accent/20',
                isFuture && 'bg-slate-100 text-slate-400 border border-slate-200',
              )}>
                {isCompleted ? <Check className="w-3.5 h-3.5" weight="bold" /> : i + 1}
              </div>
              <span className={cn(
                'text-[10px] font-medium whitespace-nowrap transition-colors',
                isCurrent ? 'text-accent-dark font-semibold' : isCompleted ? 'text-slate-600' : 'text-slate-400',
              )}>
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={cn(
                'flex-1 h-0.5 mx-1.5 mt-[-14px] rounded-full transition-colors duration-500',
                isCompleted ? 'bg-slate-400' : 'bg-slate-200',
              )} />
            )}
          </div>
        );
      })}
    </div>
  );
}
