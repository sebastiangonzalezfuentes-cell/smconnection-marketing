'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants/site';

export function HeroCtas() {
  const prefersReduced = useReducedMotion();

  const variants = prefersReduced
    ? {}
    : {
        hidden: { opacity: 0, y: 12 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.1, duration: 0.4 },
        }),
      };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <Button variant="primary" size="lg" asChild>
          <Link
            href={SITE_CONFIG.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CalendarDays className="size-5" aria-hidden="true" />
            Agenda tu diagnóstico gratuito
          </Link>
        </Button>
      </motion.div>

      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <Button variant="secondary" size="lg" asChild>
          <Link href="#casos-de-uso">
            Ver casos de uso reales
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
