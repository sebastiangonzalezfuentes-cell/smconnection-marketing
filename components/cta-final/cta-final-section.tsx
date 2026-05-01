import Link from 'next/link';
import { CalendarDays, MessageCircle, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GradientText } from '@/components/ui/gradient-text';
import { SITE_CONFIG } from '@/lib/constants/site';

export function CtaFinalSection() {
  return (
    <section
      aria-label="Llamada a la acción final"
      className="relative w-full overflow-hidden bg-neutral-900 px-4 py-20 md:py-32"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl flex flex-col items-center gap-8 text-center">
        {/* Headline */}
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            El primer paso no cuesta caro
          </p>
          <h2
            className="font-bold tracking-tight text-white"
            style={{ fontSize: 'clamp(1.875rem, 3vw + 1rem, 3rem)' }}
          >
            Tu operación{' '}
            <GradientText>en automático</GradientText>
            {' '}empieza con una conversación.
          </h2>
        </div>

        {/* Description */}
        <p className="max-w-xl text-neutral-400 leading-relaxed">
          No necesitas tener todo claro para empezar. En 30 minutos te decimos si podemos
          ayudarte, qué automatizaríamos primero y cuánto podrías recuperar. Sin compromiso,
          sin presión.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button variant="primary" size="lg" asChild className="rounded-full">
            <Link
              href={SITE_CONFIG.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CalendarDays className="size-5" aria-hidden="true" />
              Agendar diagnóstico gratuito
            </Link>
          </Button>
          <Button variant="whatsapp" size="lg" asChild>
            <Link
              href={SITE_CONFIG.whatsappUrl(
                'Hola, quiero conocer más sobre automatización para mi empresa.',
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Escribirnos por WhatsApp
            </Link>
          </Button>
        </div>

        {/* Guarantee */}
        <div className="flex items-start gap-3 rounded-radius-xl bg-white/5 border border-white/10 px-5 py-4 text-left max-w-xl">
          <ShieldCheck className="size-5 shrink-0 text-blue-400 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-neutral-400 leading-relaxed">
            <span className="font-semibold text-neutral-200">Garantía de valor:</span>{' '}
            Si después del Discovery Sprint no ves valor claro en automatizar, te devolvemos
            lo invertido.
          </p>
        </div>
      </div>
    </section>
  );
}
