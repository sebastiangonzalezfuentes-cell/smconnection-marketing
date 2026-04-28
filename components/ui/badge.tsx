import { cn } from '@/lib/utils/cn';

type BadgeVariant = 'default' | 'price' | 'coming-soon' | 'popular';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-blue-50 text-blue-700 border border-blue-100',
  price: 'bg-neutral-100 text-neutral-700 border border-neutral-200',
  'coming-soon': 'bg-purple-50 text-purple-700 border border-purple-100',
  popular: 'bg-blue-600 text-white',
};

export function Badge({ variant = 'default', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5',
        'rounded-full text-xs font-semibold leading-none',
        'whitespace-nowrap',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
