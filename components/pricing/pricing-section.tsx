import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionLabel } from '@/components/ui/section-label';
import { PricingComparisonTable } from '@/components/pricing/pricing-comparison-table';
import { PricingFaq } from '@/components/pricing/pricing-faq';

export function PricingSection() {
  return (
    <SectionWrapper id="precios" background="white">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <SectionLabel>Precios transparentes</SectionLabel>
        <h2
          className="font-bold tracking-tight text-neutral-900 text-balance"
          style={{ fontSize: 'clamp(1.875rem, 3vw + 1rem, 3rem)' }}
        >
          Sin letra chica. Sin sorpresas.
        </h2>
        <p className="max-w-xl text-neutral-600">
          Precios en UF para que tu presupuesto no cambie por el tipo de cambio.
          Cada plan está diseñado para una etapa distinta de tu automatización.
        </p>
      </div>

      <PricingComparisonTable />
      <PricingFaq />
    </SectionWrapper>
  );
}
