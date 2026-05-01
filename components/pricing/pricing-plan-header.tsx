import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';
import type { PricingPlanHeader } from '@/lib/data/pricing';

interface PricingPlanHeaderProps {
  plan: PricingPlanHeader;
  className?: string;
}

export function PricingPlanHeaderCell({ plan, className }: PricingPlanHeaderProps) {
  const isHighlighted = plan.highlighted === true;

  return (
    <div
      className={cn(
        'flex flex-col gap-3 p-5',
        isHighlighted
          ? 'bg-blue-600 text-white rounded-t-[1rem]'
          : 'bg-white text-neutral-900',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <span
          className={cn(
            'text-sm font-semibold tracking-wide uppercase',
            isHighlighted ? 'text-blue-100' : 'text-neutral-500',
          )}
        >
          {plan.name}
        </span>
        {plan.badge != null && (
          <Badge variant="popular" className={cn(isHighlighted && 'bg-white text-blue-600')}>
            {plan.badge}
          </Badge>
        )}
      </div>

      <div>
        <p
          className={cn(
            'text-2xl font-bold leading-none',
            isHighlighted ? 'text-white' : 'text-neutral-900',
          )}
        >
          {plan.price}
        </p>
        <p
          className={cn(
            'mt-1 text-xs',
            isHighlighted ? 'text-blue-200' : 'text-neutral-500',
          )}
        >
          {plan.priceNote}
        </p>
      </div>

      <p
        className={cn(
          'text-sm leading-snug',
          isHighlighted ? 'text-blue-100' : 'text-neutral-600',
        )}
      >
        {plan.description}
      </p>

      <Button
        asChild
        variant={isHighlighted ? 'secondary' : 'primary'}
        size="sm"
        className={cn(
          'w-full mt-1',
          isHighlighted && 'bg-white text-blue-600 hover:bg-blue-50',
        )}
      >
        <a href={plan.ctaHref} target="_blank" rel="noopener noreferrer">
          {plan.cta}
        </a>
      </Button>
    </div>
  );
}
