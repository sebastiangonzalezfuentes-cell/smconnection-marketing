import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionLabel } from '@/components/ui/section-label';
import { IntegrationsBentoGrid } from '@/components/integrations/integrations-bento-grid';

export function IntegrationsSection() {
  return (
    <SectionWrapper id="integraciones" background="slate">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <SectionLabel>Ecosistema conectado</SectionLabel>
        <h2
          className="font-bold tracking-tight text-neutral-900"
          style={{ fontSize: 'clamp(1.875rem, 3vw + 1rem, 3rem)' }}
        >
          Tus sistemas hablan entre sí.
        </h2>
        <p className="max-w-xl text-neutral-600">
          Conectamos más de 20 plataformas en producción. Si usas una herramienta que no ves aquí,
          lo evaluamos en el Discovery Sprint.
        </p>
      </div>
      <IntegrationsBentoGrid />
    </SectionWrapper>
  );
}
