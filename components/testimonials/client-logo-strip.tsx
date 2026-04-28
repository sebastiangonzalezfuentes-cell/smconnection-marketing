'use client';

import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { CLIENT_LOGOS } from '@/lib/data/testimonials';

export function ClientLogoStrip() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="mt-12 overflow-hidden" aria-label="Empresas que confían en nosotros">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
        Empresas que confían en nosotros
      </p>
      <div className="relative flex">
        <div
          className={cn(
            'flex gap-8 items-center',
            !prefersReduced && 'animate-[shimmer_20s_linear_infinite]',
          )}
          style={
            prefersReduced
              ? { flexWrap: 'wrap', justifyContent: 'center' }
              : { width: 'max-content' }
          }
        >
          {/* Duplicate for seamless loop */}
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
            <div
              key={`${logo.id}-${i}`}
              className={cn(
                'flex items-center gap-2.5 px-4 py-2',
                'rounded-radius-xl border border-neutral-200 bg-white',
                'shadow-sm whitespace-nowrap',
              )}
              aria-label={logo.name}
            >
              <span
                className="flex size-7 items-center justify-center rounded-md bg-neutral-100 text-xs font-bold text-neutral-600"
                aria-hidden="true"
              >
                {logo.initials}
              </span>
              <span className="text-sm font-semibold text-neutral-700">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
