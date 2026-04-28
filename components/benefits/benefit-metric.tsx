'use client';

import { useReducedMotion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import type { Benefit } from '@/lib/data/benefits';

interface BenefitMetricProps {
  benefit: Benefit;
}

function parseMetricValue(metric: string): number | null {
  const num = parseInt(metric.replace(/[^0-9]/g, ''), 10);
  return isNaN(num) ? null : num;
}

export function BenefitMetric({ benefit }: BenefitMetricProps) {
  const prefersReduced = useReducedMotion();
  const numericValue = parseMetricValue(benefit.metric);
  const hasUnit = !!benefit.unit;

  return (
    <div className="flex flex-col gap-3 p-6 rounded-radius-2xl bg-white border border-neutral-200 shadow-card">
      <div
        className="text-4xl font-bold text-blue-600 leading-none"
        aria-label={`${benefit.metric}${benefit.unit ?? ''}`}
      >
        {numericValue !== null && !prefersReduced ? (
          <>
            <AnimatedCounter value={numericValue} />
            {hasUnit && <span>{benefit.unit}</span>}
          </>
        ) : (
          <span>{benefit.metric}{benefit.unit}</span>
        )}
      </div>
      <div>
        <p className="font-semibold text-neutral-900 mb-1">{benefit.label}</p>
        <p className="text-sm text-neutral-600 leading-relaxed">{benefit.description}</p>
      </div>
    </div>
  );
}
