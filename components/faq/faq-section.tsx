import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionLabel } from '@/components/ui/section-label';
import { FaqAccordion } from '@/components/faq/faq-accordion';

export function FaqSection() {
  return (
    <SectionWrapper id="faq" background="slate">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2
          className="font-bold tracking-tight text-neutral-900"
          style={{ fontSize: 'clamp(1.875rem, 3vw + 1rem, 3rem)' }}
        >
          Lo que nos preguntan antes de empezar.
        </h2>
      </div>
      <div className="mx-auto max-w-3xl">
        <FaqAccordion />
      </div>
    </SectionWrapper>
  );
}
