import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'interactive' | 'empty';
  padding?: 'sm' | 'md' | 'lg';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', children, ...props }, ref) => {
    const baseStyles = 'bg-white border rounded-lg transition-all duration-200';
    const variants = {
      default: 'border-slate-200 shadow-sm',
      interactive: 'border-slate-200 shadow-sm cursor-pointer hover:border-slate-300 hover:shadow-md card-interactive',
      empty: 'border-slate-200 border-dashed bg-slate-50',
    };
    const paddings = { sm: 'p-4', md: 'p-6', lg: 'p-8' };

    return (
      <div ref={ref} className={cn(baseStyles, variants[variant], paddings[padding], className)} {...props}>
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-lg font-semibold text-slate-800', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';
