import { cn } from '@/lib/utils';

export interface BadgeProps {
  variant?: 'default' | 'info' | 'success' | 'warning' | 'error' | 'outline' | 'confidence-high' | 'confidence-medium' | 'confidence-low' | 'confidence-none';
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function Badge({ variant = 'default', children, className, title }: BadgeProps) {
  const variants = {
    default: 'bg-slate-100 text-slate-600',
    info: 'bg-accent-100 text-accent-dark',
    success: 'bg-confidence-high-bg text-confidence-high',
    warning: 'bg-confidence-medium-bg text-confidence-medium',
    error: 'bg-confidence-none-bg text-confidence-none',
    outline: 'bg-transparent text-slate-600 border border-slate-200',
    'confidence-high': 'bg-confidence-high-bg text-confidence-high border border-green-200',
    'confidence-medium': 'bg-confidence-medium-bg text-confidence-medium border border-yellow-200',
    'confidence-low': 'bg-confidence-low-bg text-confidence-low border border-orange-200',
    'confidence-none': 'bg-confidence-none-bg text-confidence-none border border-red-200',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-medium rounded-md px-2 py-0.5 text-xs transition-colors',
        variants[variant],
        className
      )}
      title={title}
    >
      {children}
    </span>
  );
}
