import { HeroBackground } from '@/components/hero/hero-background';
import { HeroHeadline } from '@/components/hero/hero-headline';
import { HeroSubheadline } from '@/components/hero/hero-subheadline';
import { HeroTrustIndicators } from '@/components/hero/hero-trust-indicators';
import { HeroCtas } from '@/components/hero/hero-ctas';
import { SectionLabel } from '@/components/ui/section-label';

export function HeroSection() {
  return (
    <section
      aria-label="Portada principal"
      className="relative w-full overflow-hidden px-4 pt-10 pb-20 md:pt-16 md:pb-32"
    >
      <HeroBackground />

      <div className="relative mx-auto max-w-4xl flex flex-col items-center gap-6 text-center">
        <SectionLabel>IA que conecta ERP y sistemas reales.</SectionLabel>
        <HeroHeadline />
        <HeroSubheadline />
        <HeroCtas />
        <HeroTrustIndicators />
      </div>
    </section>
  );
}
