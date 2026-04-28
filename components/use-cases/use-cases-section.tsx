import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionLabel } from '@/components/ui/section-label';
import { UseCaseTabs } from '@/components/use-cases/use-case-tabs';

export function UseCasesSection() {
  return (
    <SectionWrapper id="casos-de-uso" background="slate">
      <div className="flex flex-col gap-4 mb-10">
        <SectionLabel>En operación real</SectionLabel>
        <h2
          className="font-bold tracking-tight text-neutral-900"
          style={{ fontSize: 'clamp(1.875rem, 3vw + 1rem, 3rem)' }}
        >
          Lo que automatizamos para empresas como la tuya.
        </h2>
      </div>
      <UseCaseTabs />
    </SectionWrapper>
  );
}
