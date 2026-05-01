'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { SectionLabel } from '@/components/ui/section-label';
import { cn } from '@/lib/utils/cn';

interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

const PLANES_FAQ: FaqEntry[] = [
  {
    id: 'pf-01',
    question: '¿Puedo empezar con Discovery y luego escalar a Build Premium?',
    answer:
      'Sí, es el camino más común. El Discovery Sprint te da el mapa: qué automatizar, ' +
      'en qué orden y cuánto recuperas. Con eso sobre la mesa, la conversación de Build ' +
      'Premium parte con contexto real, sin suposiciones.',
  },
  {
    id: 'pf-02',
    question: '¿Los precios en UF me protegen del dólar?',
    answer:
      'Exacto. La UF sube con el IPC chileno, no con el tipo de cambio. Para proyectos de ' +
      'software que consumen servicios externos en USD, es la forma más justa de fijar ' +
      'presupuesto sin que ninguna de las partes asuma el riesgo cambiario.',
  },
  {
    id: 'pf-03',
    question: '¿El código fuente realmente me queda a mí?',
    answer:
      'Sí, sin asterisco. En Build Premium el repositorio es tuyo desde el día uno. ' +
      'Te entregamos acceso de propietario y documentación técnica para que cualquier ' +
      'desarrollador pueda continuar el trabajo, con o sin nosotros.',
  },
  {
    id: 'pf-04',
    question: '¿Qué cubre exactamente la garantía de devolución del Discovery?',
    answer:
      'Si al finalizar el Discovery Sprint no identificamos al menos un proceso con ' +
      'retorno claro en menos de 12 meses, te devolvemos el 100% de lo pagado. ' +
      'No pedimos justificación. Es nuestra apuesta por el valor que entregamos.',
  },
  {
    id: 'pf-05',
    question: '¿Project + Support incluye desarrollo de nuevas funcionalidades?',
    answer:
      'El plan cubre monitoreo, soporte, ajustes menores y mejoras continuas sobre lo ' +
      'que ya está en producción. Si necesitas nuevas features o integraciones de cero, ' +
      'se cotiza aparte — así no pagas por desarrollo cuando solo necesitas respaldo operativo.',
  },
  {
    id: 'pf-06',
    question: '¿Cuánto tiempo tarda una implementación Build Premium?',
    answer:
      'Depende del alcance. Automatizaciones simples (1-2 integraciones) pueden estar ' +
      'en producción en 2-4 semanas. Proyectos complejos con múltiples sistemas se ' +
      'estiman en el Discovery Sprint con un cronograma claro semana a semana.',
  },
  {
    id: 'pf-07',
    question: '¿Trabajan con cualquier stack tecnológico?',
    answer:
      'Sí. Nos adaptamos al ecosistema que ya tienes: CRMs, ERPs, e-commerce, sistemas ' +
      'legacy, APIs propias. Si tiene API o permite automatización, podemos conectarlo. ' +
      'El Discovery identifica exactamente qué es viable y qué no en tu caso.',
  },
  {
    id: 'pf-08',
    question: '¿Tienen experiencia en mi industria?',
    answer:
      'Hemos trabajado en retail, logística, salud, servicios financieros y agencias ' +
      'digitales. Si quieres ver casos de uso específicos de tu sector, podemos mostrarte ' +
      'ejemplos en la llamada de diagnóstico gratuito.',
  },
];

// ── Sub-componente de item ───────────────────────────────────────────────────

function PlanesFaqItem({ item }: { item: FaqEntry }) {
  return (
    <Accordion.Item
      value={item.id}
      className="border-b border-neutral-200 last:border-b-0"
    >
      <Accordion.Header>
        <Accordion.Trigger
          className={cn(
            'flex w-full items-center justify-between',
            'py-5 text-left',
            'text-base font-semibold text-neutral-900',
            'hover:text-blue-700',
            'transition-colors duration-150',
            'min-h-[44px]',
            'group',
          )}
        >
          {item.question}
          <ChevronDown
            className="size-5 shrink-0 text-neutral-400 transition-transform duration-200 group-data-[state=open]:rotate-180"
            aria-hidden="true"
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden data-[state=open]:animate-[fade-up_0.2s_ease] data-[state=closed]:animate-[fade-up_0.15s_ease_reverse]">
        <p className="pb-5 text-sm text-neutral-600 leading-relaxed">
          {item.answer}
        </p>
      </Accordion.Content>
    </Accordion.Item>
  );
}

// ── Export principal ─────────────────────────────────────────────────────────

export function PlanesFaq() {
  return (
    <section
      aria-labelledby="planes-faq-heading"
      className="w-full bg-neutral-50 px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2
            id="planes-faq-heading"
            className="font-bold tracking-tight text-neutral-900 text-balance"
            style={{ fontSize: 'clamp(1.875rem, 3vw + 1rem, 3rem)' }}
          >
            Antes de decidir, esto te ayuda.
          </h2>
        </div>

        <Accordion.Root
          type="single"
          collapsible
          className="w-full rounded-radius-2xl bg-white border border-neutral-200 shadow-card overflow-hidden divide-y divide-neutral-200 px-6"
          aria-label="Preguntas frecuentes sobre planes"
        >
          {PLANES_FAQ.map((item) => (
            <PlanesFaqItem key={item.id} item={item} />
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
