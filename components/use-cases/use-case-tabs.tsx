'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { USE_CASES } from '@/lib/data/use-cases';

export function UseCaseTabs() {
  const [activeId, setActiveId] = useState(USE_CASES[0]?.id ?? '');
  const prefersReduced = useReducedMotion();
  const activeCase = USE_CASES.find((uc) => uc.id === activeId);

  return (
    <div className="flex flex-col gap-8">
      {/* Tab list */}
      <div
        role="tablist"
        aria-label="Casos de uso"
        className="flex flex-wrap gap-2"
      >
        {USE_CASES.map((uc) => (
          <button
            key={uc.id}
            role="tab"
            aria-selected={uc.id === activeId}
            aria-controls={`tab-panel-${uc.id}`}
            id={`tab-${uc.id}`}
            type="button"
            onClick={() => setActiveId(uc.id)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              'min-h-[44px]',
              uc.id === activeId
                ? 'bg-blue-600 text-white shadow-cta'
                : 'bg-white text-neutral-600 border border-neutral-200 hover:border-blue-200 hover:text-blue-700',
            )}
          >
            {uc.label}
          </button>
        ))}
      </div>

      {/* Tab panel */}
      <AnimatePresence mode="wait">
        {activeCase && (
          <motion.div
            key={activeCase.id}
            id={`tab-panel-${activeCase.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCase.id}`}
            initial={prefersReduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? {} : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="grid gap-8 md:grid-cols-2"
          >
            {/* Description */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-neutral-900">{activeCase.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{activeCase.description}</p>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <span className="size-2 rounded-full bg-blue-600" aria-hidden="true" />
                Resultado: {activeCase.result}
              </div>
            </div>

            {/* Steps */}
            <ol className="flex flex-col gap-4" aria-label="Pasos del proceso">
              {activeCase.steps.map((step) => (
                <li key={step.step} className="flex gap-4">
                  <div
                    className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold"
                    aria-hidden="true"
                  >
                    {step.step}
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">{step.label}</p>
                    <p className="text-sm text-neutral-600 mt-0.5">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
