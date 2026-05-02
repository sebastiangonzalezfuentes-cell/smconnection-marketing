import { SectionLabel } from '@/components/ui/section-label';
import { GradientText } from '@/components/ui/gradient-text';

export function PlanesHero() {
  return (
    <section
      aria-label="Encabezado de planes"
      className="w-full bg-white px-4 pt-10 pb-16 md:pt-16 md:pb-20"
    >
      <div className="mx-auto max-w-3xl flex flex-col items-center gap-6 text-center">
        <SectionLabel>Encuentra el plan ideal para digitalizar y hacer crecer tu negocio</SectionLabel>

        <h1
          className="font-bold tracking-tight text-neutral-900 text-balance"
          style={{ fontSize: 'clamp(2.25rem, 4vw + 1rem, 3.5rem)' }}
        >
          Sin letra chica.{' '}
          <GradientText>Sin sorpresas.</GradientText>
        </h1>

        <p className="max-w-xl text-lg text-neutral-600 leading-relaxed text-balance">
          Tres caminos para automatizar tu empresa. Elige según tu momento:
          diagnóstico, implementación o soporte continuo.
        </p>

        <p className="text-sm text-neutral-400">
          Precios en UF — tu presupuesto no cambia por el tipo de cambio.
        </p>
      </div>
    </section>
  );
}
