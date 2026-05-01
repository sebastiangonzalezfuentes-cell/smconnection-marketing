'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { PRICING_FAQS } from '@/lib/data/pricing';

export function PricingFaq() {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center gap-3 text-center mb-10">
        <h3 className="text-2xl font-bold text-neutral-900 md:text-3xl">
          Preguntas frecuentes
        </h3>
        <p className="max-w-lg text-neutral-600 text-sm md:text-base">
          Lo que los clientes preguntan antes de arrancar.
        </p>
      </div>

      <Accordion.Root
        type="single"
        collapsible
        className="mx-auto max-w-2xl divide-y divide-neutral-200 rounded-[1rem] border border-neutral-200 bg-white overflow-hidden"
      >
        {PRICING_FAQS.map((faq, index) => (
          <Accordion.Item
            key={index}
            value={`faq-${index}`}
            className="group"
          >
            <Accordion.Header asChild>
              <h4>
                <Accordion.Trigger
                  className={cn(
                    'flex w-full items-center justify-between gap-4',
                    'px-5 py-4 text-left',
                    'text-sm font-semibold text-neutral-900 md:text-base',
                    'transition-colors duration-200',
                    'hover:bg-neutral-50',
                    'focus-visible:outline-none focus-visible:ring-2',
                    'focus-visible:ring-blue-600 focus-visible:ring-inset',
                    'data-[state=open]:bg-blue-50/50',
                  )}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      'shrink-0 text-neutral-400 transition-transform duration-300 ease-out',
                      'group-data-[state=open]:rotate-180 group-data-[state=open]:text-blue-600',
                    )}
                    aria-hidden="true"
                  />
                </Accordion.Trigger>
              </h4>
            </Accordion.Header>

            <Accordion.Content
              className={cn(
                'overflow-hidden',
                'data-[state=open]:animate-accordion-down',
                'data-[state=closed]:animate-accordion-up',
              )}
            >
              <p className="px-5 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed md:text-base">
                {faq.answer}
              </p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
