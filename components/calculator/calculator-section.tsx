import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionLabel } from '@/components/ui/section-label';
import { SavingsCalculator } from '@/components/calculator/savings-calculator';

export function CalculatorSection() {
  return (
    <SectionWrapper id="calculadora" background="white">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <SectionLabel>Calcula tu ahorro</SectionLabel>
        <h2
          className="font-bold tracking-tight text-neutral-900"
          style={{ fontSize: 'clamp(1.875rem, 3vw + 1rem, 3rem)' }}
        >
          Cuánto te están costando las tareas manuales.
        </h2>
        <p className="max-w-xl text-neutral-600">
          Ingresa cuántas personas, horas y cuánto cuesta cada hora. Te mostramos el ahorro real.
        </p>
      </div>
      <SavingsCalculator />
    </SectionWrapper>
  );
}
