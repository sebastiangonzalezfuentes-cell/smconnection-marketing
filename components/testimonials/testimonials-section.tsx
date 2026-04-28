import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionLabel } from '@/components/ui/section-label';
import { TestimonialCard } from '@/components/testimonials/testimonial-card';
import { ClientLogoStrip } from '@/components/testimonials/client-logo-strip';
import { TESTIMONIALS } from '@/lib/data/testimonials';

export function TestimonialsSection() {
  return (
    <SectionWrapper background="white">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <SectionLabel>Lo que dicen nuestros clientes</SectionLabel>
        <h2
          className="font-bold tracking-tight text-neutral-900"
          style={{ fontSize: 'clamp(1.875rem, 3vw + 1rem, 3rem)' }}
        >
          Empresas chilenas que dejaron de operar en modo manual.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <ClientLogoStrip />
    </SectionWrapper>
  );
}
