import { cn } from '@/lib/utils';

export interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'card' | 'badge';
}

export function Skeleton({ className, variant = 'text' }: SkeletonProps) {
  const variants = {
    text: 'h-4 w-full',
    card: 'h-32 w-full rounded-lg',
    badge: 'h-5 w-20 rounded-md',
  };

  return <div className={cn('skeleton', variants[variant], className)} />;
}

export function QuestionCardSkeleton() {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm animate-fade-in">
      <div className="flex items-center gap-2 mb-3">
        <Skeleton variant="badge" className="w-8" />
        <Skeleton variant="badge" className="w-28" />
        <Skeleton variant="badge" className="w-16" />
      </div>
      <Skeleton className="h-5 w-3/4 mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
}
