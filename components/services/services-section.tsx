import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionLabel } from '@/components/ui/section-label';
import { ServiceCard } from '@/components/services/service-card';
import { SERVICES } from '@/lib/data/services';

export function ServicesSection() {
  return (
    <SectionWrapper id="servicios" background="white">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <SectionLabel>Lo que hacemos</SectionLabel>
        <h2
          className="font-bold tracking-tight text-neutral-900"
          style={{ fontSize: 'clamp(1.875rem, 3vw + 1rem, 3rem)' }}
        >
          Un servicio para cada etapa de tu proyecto.
        </h2>
        <p className="max-w-xl text-neutral-600">
          Desde el diagnóstico inicial hasta el soporte en producción. Sin gaps, sin sorpresas.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </SectionWrapper>
  );
}
