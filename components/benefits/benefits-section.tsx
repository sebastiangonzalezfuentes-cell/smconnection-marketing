import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionLabel } from '@/components/ui/section-label';
import { BenefitMetric } from '@/components/benefits/benefit-metric';
import { BENEFITS } from '@/lib/data/benefits';

export function BenefitsSection() {
  return (
    <SectionWrapper background="blue-light">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <SectionLabel>Resultados medibles</SectionLabel>
        <h2
          className="font-bold tracking-tight text-neutral-900"
          style={{ fontSize: 'clamp(1.875rem, 3vw + 1rem, 3rem)' }}
        >
          Números que tu contador también entiende.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((benefit) => (
          <BenefitMetric key={benefit.id} benefit={benefit} />
        ))}
      </div>
    </SectionWrapper>
  );
}
