import { HeroSection } from '@/components/hero/hero-section';
import { IntegrationsSection } from '@/components/integrations/integrations-section';
import { ServicesSection } from '@/components/services/services-section';
import { BenefitsSection } from '@/components/benefits/benefits-section';
import { UseCasesSection } from '@/components/use-cases/use-cases-section';
import { CalculatorSection } from '@/components/calculator/calculator-section';
import { TestimonialsSection } from '@/components/testimonials/testimonials-section';
import { FaqSection } from '@/components/faq/faq-section';
import { CtaFinalSection } from '@/components/cta-final/cta-final-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntegrationsSection />
      <ServicesSection />
      <BenefitsSection />
      <UseCasesSection />
      <CalculatorSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaFinalSection />
    </>
  );
}
