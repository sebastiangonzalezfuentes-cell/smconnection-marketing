'use client';

import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { PricingPlanHeaderCell } from '@/components/pricing/pricing-plan-header';
import {
  PRICING_PLANS,
  PRICING_FEATURES_TABLE,
  type PlanId,
  type FeatureValue,
} from '@/lib/data/pricing';

function FeatureCell({ value, isHighlighted }: { value: FeatureValue; isHighlighted: boolean }) {
  if (value === true) {
    return (
      <span className="flex items-center justify-center">
        <Check
          size={18}
          className={cn('shrink-0', isHighlighted ? 'text-blue-600' : 'text-blue-500')}
          aria-label="Incluido"
        />
      </span>
    );
  }

  if (value === false) {
    return (
      <span className="flex items-center justify-center">
        <X
          size={16}
          className="shrink-0 text-neutral-300"
          aria-label="No incluido"
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        'text-xs font-medium text-center',
        isHighlighted ? 'text-blue-700' : 'text-neutral-500',
      )}
    >
      {value}
    </span>
  );
}

const PLAN_ORDER: PlanId[] = ['discovery', 'build', 'support'];

export function PricingComparisonTable() {
  return (
    <div className="w-full overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
      <div className="min-w-[640px]">
        {/* Plan headers */}
        <div className="grid grid-cols-[1fr_repeat(3,minmax(0,1fr))]">
          {/* Empty first cell — aligns with feature name column */}
          <div className="hidden md:block" aria-hidden="true" />

          {PRICING_PLANS.map((plan) => (
            <PricingPlanHeaderCell
              key={plan.id}
              plan={plan}
              className={cn(
                plan.highlighted && 'shadow-[0_-4px_20px_-4px_rgb(26_94_255_/_0.2)]',
              )}
            />
          ))}
        </div>

        {/* Feature categories and rows */}
        {PRICING_FEATURES_TABLE.map((category) => (
          <div key={category.name}>
            {/* Category header */}
            <div className="grid grid-cols-[1fr_repeat(3,minmax(0,1fr))]">
              <div className="col-span-4 px-5 py-2.5 bg-neutral-100 border-t border-neutral-200">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                  {category.name}
                </span>
              </div>
            </div>

            {/* Feature rows */}
            {category.rows.map((row, rowIndex) => (
              <div
                key={row.label}
                className={cn(
                  'grid grid-cols-[1fr_repeat(3,minmax(0,1fr))]',
                  'border-t border-neutral-100',
                  rowIndex % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50',
                )}
              >
                {/* Feature label — sticky on mobile scroll */}
                <div
                  className={cn(
                    'sticky left-0 z-10 px-5 py-3.5',
                    'flex items-center',
                    rowIndex % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50',
                  )}
                >
                  <span className="text-sm text-neutral-700 leading-snug">{row.label}</span>
                </div>

                {/* Values for each plan */}
                {PLAN_ORDER.map((planId) => {
                  const plan = PRICING_PLANS.find((p) => p.id === planId);
                  const isHighlighted = plan?.highlighted === true;
                  const value: FeatureValue = row.values[planId];

                  return (
                    <div
                      key={planId}
                      className={cn(
                        'flex items-center justify-center px-4 py-3.5',
                        isHighlighted && 'bg-blue-50/60',
                        isHighlighted && rowIndex % 2 !== 0 && 'bg-blue-50/80',
                      )}
                    >
                      <FeatureCell value={value} isHighlighted={isHighlighted} />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ))}

        {/* Bottom CTA row — repite los botones al pie de la tabla */}
        <div
          className={cn(
            'grid grid-cols-[1fr_repeat(3,minmax(0,1fr))]',
            'border-t border-neutral-200',
          )}
        >
          <div className="hidden md:block" aria-hidden="true" />

          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                'px-5 py-5',
                plan.highlighted
                  ? 'bg-blue-600 rounded-b-[1rem] shadow-[0_8px_20px_-4px_rgb(26_94_255_/_0.25)]'
                  : 'bg-white',
              )}
            >
              <a
                href={plan.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex w-full items-center justify-center rounded-[0.5rem] py-2.5 px-4',
                  'text-sm font-semibold transition-colors duration-200',
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700',
                )}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
