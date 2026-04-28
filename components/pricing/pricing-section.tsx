import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionLabel } from '@/components/ui/section-label';
import { PricingCard } from '@/components/pricing/pricing-card';
import { PRICING_PLANS } from '@/lib/data/pricing';

export function PricingSection() {
  return (
    <SectionWrapper id="precios" background="slate">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <SectionLabel>Precios transparentes</SectionLabel>
        <h2
          className="font-bold tracking-tight text-neutral-900"
          style={{ fontSize: 'clamp(1.875rem, 3vw + 1rem, 3rem)' }}
        >
          Sin letra chica. Sin sorpresas.
        </h2>
        <p className="max-w-xl text-neutral-600">
          Precios en UF para que tu presupuesto no cambie por el tipo de cambio.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {PRICING_PLANS.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </SectionWrapper>
  );
}
