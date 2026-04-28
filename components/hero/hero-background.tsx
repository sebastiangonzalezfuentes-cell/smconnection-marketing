'use client';

import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

export function HeroBackground() {
  const prefersReduced = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-25 via-white to-white" />

      {/* Decorative blobs */}
      <div
        className={cn(
          'absolute -top-24 -right-24 size-96 rounded-full',
          'bg-blue-100/60 blur-3xl',
          !prefersReduced && 'animate-[gradient-shift_12s_ease_infinite]',
        )}
      />
      <div
        className={cn(
          'absolute top-32 -left-32 size-80 rounded-full',
          'bg-purple-500/10 blur-3xl',
          !prefersReduced && 'animate-[gradient-shift_16s_ease_infinite_reverse]',
        )}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"
      />
    </div>
  );
}
