'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  PRICING_PLANS,
  type PricingPlanHeader,
} from '@/lib/data/pricing';
import { cn } from '@/lib/utils/cn';

// ── Tipos de billing cycle ───────────────────────────────────────────────────

type BillingCycle = 'monthly' | 'annual';

// ── Helpers de precio ────────────────────────────────────────────────────────

function getDisplayPrice(
  plan: PricingPlanHeader,
  cycle: BillingCycle,
): { price: string; note: string } {
  if (!plan.isRecurring) {
    return { price: plan.price, note: plan.priceNote };
  }

  if (cycle === 'annual') {
    return {
      price: plan.priceAnnual ?? plan.price,
      note: plan.priceAnnualNote ?? plan.priceNote,
    };
  }

  return {
    price: plan.priceMonthly ?? plan.price,
    note: plan.priceMonthlyNote ?? plan.priceNote,
  };
}

// ── Toggle mensual/anual ─────────────────────────────────────────────────────

interface BillingToggleProps {
  cycle: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
  annualSavingsLabel: string;
}

function BillingToggle({ cycle, onChange, annualSavingsLabel }: BillingToggleProps) {
  return (
    <div className="flex flex-col items-center gap-2 mb-10">
      <div
        role="group"
        aria-label="Ciclo de facturación"
        className={cn(
          'inline-flex items-center rounded-full p-1',
          'bg-neutral-100 border border-neutral-200',
        )}
      >
        <button
          type="button"
          onClick={() => onChange('monthly')}
          aria-pressed={cycle === 'monthly'}
          className={cn(
            'rounded-full px-5 py-2 text-sm font-medium transition-all duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
            cycle === 'monthly'
              ? 'bg-neutral-900 text-white shadow-sm'
              : 'text-neutral-600 hover:text-neutral-900',
          )}
        >
          Mensual
        </button>
        <button
          type="button"
          onClick={() => onChange('annual')}
          aria-pressed={cycle === 'annual'}
          className={cn(
            'rounded-full px-5 py-2 text-sm font-medium transition-all duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
            'flex items-center gap-2',
            cycle === 'annual'
              ? 'bg-neutral-900 text-white shadow-sm'
              : 'text-neutral-600 hover:text-neutral-900',
          )}
        >
          Anual
          {/* Badge siempre visible como incentivo — independiente del ciclo activo */}
          <span className="rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-semibold text-white">
            {annualSavingsLabel}
          </span>
        </button>
      </div>

      {/* Hint de conversión: solo cuando el usuario está en mensual */}
      {cycle === 'monthly' && (
        <p className="text-xs font-medium text-green-600" role="status" aria-live="polite">
          Ahorra {annualSavingsLabel} cambiando a anual
        </p>
      )}
    </div>
  );
}

// ── Card individual ──────────────────────────────────────────────────────────

interface PlanCardProps {
  plan: PricingPlanHeader;
  cycle: BillingCycle;
}

function PlanCard({ plan, cycle }: PlanCardProps) {
  const { price, note } = getDisplayPrice(plan, cycle);
  const showSavingsBadge =
    plan.isRecurring && cycle === 'annual' && Boolean(plan.annualSavings);

  return (
    <article
      aria-label={`Plan ${plan.name}`}
      className={cn(
        'relative flex flex-col rounded-2xl border overflow-hidden',
        'transition-shadow duration-200 hover:shadow-md',
        plan.highlighted
          ? 'bg-neutral-900 border-neutral-800 shadow-lg'
          : 'bg-white border-neutral-200 shadow-sm',
      )}
    >
      {/* Badge superior */}
      {plan.badge && (
        <div className="px-5 pt-5 pb-0">
          <span
            className={cn(
              'inline-block rounded-full px-3 py-0.5 text-[11px] font-semibold',
              plan.highlighted
                ? 'bg-blue-500 text-white'
                : 'bg-blue-100 text-blue-700',
            )}
          >
            {plan.badge}
          </span>
        </div>
      )}

      {/* Nombre y descripción */}
      <div className={cn('px-5', plan.badge ? 'pt-3' : 'pt-5')}>
        <h3
          className={cn(
            'font-bold text-lg leading-tight',
            plan.highlighted ? 'text-white' : 'text-neutral-900',
          )}
        >
          {plan.name}
        </h3>
        <p
          className={cn(
            'mt-1.5 text-sm leading-relaxed',
            plan.highlighted ? 'text-neutral-300' : 'text-neutral-500',
          )}
        >
          {plan.description}
        </p>
      </div>

      {/* Divider */}
      <div
        className={cn(
          'mx-5 my-4 border-t',
          plan.highlighted ? 'border-neutral-700' : 'border-neutral-100',
        )}
        aria-hidden="true"
      />

      {/* Precio */}
      <div className="px-5">
        <div className="flex items-end gap-2">
          <span
            className={cn(
              'text-3xl font-bold leading-none',
              plan.highlighted ? 'text-white' : 'text-neutral-900',
            )}
          >
            {price}
          </span>
          {showSavingsBadge && plan.annualSavings && (
            <span className="mb-0.5 rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-semibold text-white">
              {plan.annualSavings}
            </span>
          )}
        </div>
        <p
          className={cn(
            'mt-1 text-xs',
            plan.highlighted ? 'text-neutral-300' : 'text-neutral-400',
          )}
        >
          {note}
        </p>
      </div>

      {/* Features */}
      {plan.features && plan.features.length > 0 && (
        <>
          <div
            className={cn(
              'mx-5 my-4 border-t',
              plan.highlighted ? 'border-neutral-700' : 'border-neutral-100',
            )}
            aria-hidden="true"
          />
          <div className="px-5 pb-2">
            <ul className="flex flex-col gap-2" role="list">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check
                    className={cn('size-4 shrink-0 mt-0.5', plan.highlighted ? 'text-blue-400' : 'text-blue-600')}
                    aria-hidden="true"
                    strokeWidth={2.5}
                  />
                  <span className={cn('leading-snug', plan.highlighted ? 'text-neutral-100' : 'text-neutral-700')}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* CTA siempre al pie — flex-1 empuja el botón hacia abajo */}
      <div className="flex-1" />
      <div className="px-5 pb-6 pt-5">
        <Button
          variant={plan.highlighted ? 'primary' : 'secondary'}
          size="md"
          asChild
          className="w-full rounded-full justify-center"
        >
          <Link href={plan.ctaHref} target="_blank" rel="noopener noreferrer">
            {plan.cta}
          </Link>
        </Button>
      </div>
    </article>
  );
}

// ── Export principal ─────────────────────────────────────────────────────────

export function PlanesTable() {
  const [cycle, setCycle] = useState<BillingCycle>('monthly');

  // Toma el annualSavings del primer plan recurrente que lo tenga
  const savingsLabel =
    PRICING_PLANS.find((p) => p.isRecurring && p.annualSavings)?.annualSavings ??
    '2 meses gratis';

  return (
    <section
      aria-label="Comparativa de planes"
      className="w-full px-4 py-8 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <BillingToggle
          cycle={cycle}
          onChange={setCycle}
          annualSavingsLabel={savingsLabel}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PRICING_PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} cycle={cycle} />
          ))}
        </div>
      </div>
    </section>
  );
}
