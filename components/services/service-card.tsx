'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SITE_CONFIG } from '@/lib/constants/site';
import type { Service } from '@/lib/data/services';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReduced ? {} : { y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'flex flex-col rounded-radius-2xl p-6',
        'border bg-white',
        'shadow-card hover:shadow-card-hover',
        'transition-shadow duration-200',
        service.highlighted
          ? 'border-blue-300 ring-1 ring-blue-200'
          : 'border-neutral-200',
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <h3 className="text-lg font-bold text-neutral-900">{service.name}</h3>
        {service.badge ? (
          <Badge variant={service.badge === 'popular' ? 'popular' : 'coming-soon'}>
            {service.badge === 'popular' ? 'Más elegido' : 'Próximamente'}
          </Badge>
        ) : (
          <Badge variant="price">{service.price}</Badge>
        )}
      </div>

      <p className="text-sm font-semibold text-blue-700 mb-2">{service.tagline}</p>
      <p className="text-sm text-neutral-600 leading-relaxed mb-6 flex-1">{service.description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-neutral-700">
            <Check className="size-4 text-blue-600 shrink-0" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Price note */}
      {service.priceNote && (
        <p className="text-xs text-neutral-500 mb-4">{service.priceNote}</p>
      )}

      {/* CTA */}
      {service.badge !== 'coming-soon' && (
        <Button
          variant={service.highlighted ? 'primary' : 'secondary'}
          asChild
          className="w-full justify-center"
        >
          <Link
            href={SITE_CONFIG.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {service.highlighted ? 'Hablar con un experto' : 'Saber más'}
          </Link>
        </Button>
      )}
    </motion.div>
  );
}
