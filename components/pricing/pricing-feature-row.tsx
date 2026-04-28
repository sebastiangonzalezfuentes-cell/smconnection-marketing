import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import type { PricingFeature } from '@/lib/data/pricing';

interface PricingFeatureRowProps {
  feature: PricingFeature;
  highlighted?: boolean;
}

export function PricingFeatureRow({ feature, highlighted }: PricingFeatureRowProps) {
  return (
    <li className="flex items-center gap-2.5 text-sm">
      {feature.included ? (
        <Check
          className={cn('size-4 shrink-0', highlighted ? 'text-blue-200' : 'text-blue-600')}
          aria-hidden="true"
        />
      ) : (
        <X className="size-4 shrink-0 text-neutral-400" aria-hidden="true" />
      )}
      <span
        className={cn(
          feature.included
            ? highlighted ? 'text-white' : 'text-neutral-700'
            : 'text-neutral-400',
        )}
      >
        {feature.label}
        {feature.note && (
          <span className="ml-1 text-xs opacity-70">({feature.note})</span>
        )}
      </span>
    </li>
  );
}
