'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PricingFeatureRow } from '@/components/pricing/pricing-feature-row';
import type { PricingPlan } from '@/lib/data/pricing';

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReduced ? {} : { y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'flex flex-col rounded-radius-2xl p-6 md:p-8',
        plan.highlighted
          ? 'bg-blue-600 text-white border-2 border-blue-500 shadow-cta'
          : 'bg-white border border-neutral-200 shadow-card hover:shadow-card-hover',
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3
          className={cn(
            'text-lg font-bold',
            plan.highlighted ? 'text-white' : 'text-neutral-900',
          )}
        >
          {plan.name}
        </h3>
        {plan.badge && (
          <Badge variant={plan.highlighted ? 'default' : 'popular'} className="shrink-0">
            {plan.badge}
          </Badge>
        )}
      </div>

      {/* Price */}
      <div className="mb-2">
        <p
          className={cn(
            'text-2xl font-bold',
            plan.highlighted ? 'text-white' : 'text-neutral-900',
          )}
        >
          {plan.price}
        </p>
        <p
          className={cn(
            'text-sm',
            plan.highlighted ? 'text-blue-200' : 'text-neutral-500',
          )}
        >
          {plan.priceNote}
        </p>
      </div>

      {/* Description */}
      <p
        className={cn(
          'text-sm leading-relaxed mb-6',
          plan.highlighted ? 'text-blue-100' : 'text-neutral-600',
        )}
      >
        {plan.description}
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <PricingFeatureRow
            key={feature.label}
            feature={feature}
            highlighted={plan.highlighted}
          />
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant={plan.highlighted ? 'secondary' : 'primary'}
        asChild
        className={cn(
          'w-full justify-center',
          plan.highlighted && 'bg-white text-blue-600 hover:bg-blue-50',
        )}
      >
        <Link href={plan.ctaHref} target="_blank" rel="noopener noreferrer">
          {plan.cta}
        </Link>
      </Button>
    </motion.div>
  );
}
