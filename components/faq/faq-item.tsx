'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import type { FaqItem as FaqItemType } from '@/lib/data/faq';

interface FaqItemProps {
  item: FaqItemType;
}

export function FaqItem({ item }: FaqItemProps) {
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
