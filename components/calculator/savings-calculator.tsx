'use client';

import { CalculatorInputs } from '@/components/calculator/calculator-inputs';
import { CalculatorResults } from '@/components/calculator/calculator-results';
import { useSavingsCalculator } from '@/lib/hooks/use-savings-calculator';

export function SavingsCalculator() {
  const { form, result, hasCalculated, onSubmit } = useSavingsCalculator();

  return (
    <div className="grid gap-8 md:grid-cols-2 items-start">
      <div className="rounded-radius-2xl bg-white border border-neutral-200 shadow-card p-6 md:p-8">
        <h3 className="text-lg font-bold text-neutral-900 mb-6">Ingresa tus datos</h3>
        <CalculatorInputs form={form} onSubmit={onSubmit} />
      </div>

      <div className="rounded-radius-2xl bg-neutral-50 border border-neutral-200 p-6 md:p-8">
        <h3 className="text-lg font-bold text-neutral-900 mb-6">Tu ahorro proyectado</h3>
        {hasCalculated && result ? (
          <CalculatorResults result={result} />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
            <div className="size-14 rounded-full bg-blue-50 flex items-center justify-center">
              <span className="text-2xl" aria-hidden="true">🧮</span>
            </div>
            <p className="text-neutral-600 text-sm max-w-xs">
              Completa el formulario y calcula cuánto puedes ahorrar automatizando tus procesos.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
