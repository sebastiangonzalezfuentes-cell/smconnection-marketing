'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { FaqItem } from '@/components/faq/faq-item';
import { FAQ_ITEMS } from '@/lib/data/faq';

export function FaqAccordion() {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="rounded-radius-2xl bg-white border border-neutral-200 shadow-card overflow-hidden divide-y divide-neutral-200 px-6"
      aria-label="Preguntas frecuentes"
    >
      {FAQ_ITEMS.map((item) => (
        <FaqItem key={item.id} item={item} />
      ))}
    </Accordion.Root>
  );
}
