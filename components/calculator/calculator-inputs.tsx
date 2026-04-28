'use client';

import type { UseFormReturn } from 'react-hook-form';
import type { CalculatorValues } from '@/lib/schemas/calculator-schema';
import { cn } from '@/lib/utils/cn';

interface CalculatorInputsProps {
  form: UseFormReturn<CalculatorValues>;
  onSubmit: (values: CalculatorValues) => void;
}

interface FieldConfig {
  name: keyof CalculatorValues;
  label: string;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
}

const FIELDS: FieldConfig[] = [
  {
    name: 'employees',
    label: '¿Cuántas personas hacen tareas manuales?',
    min: 1,
    max: 1000,
    step: 1,
    suffix: 'personas',
  },
  {
    name: 'hoursPerWeek',
    label: 'Horas semanales por persona en tareas manuales',
    min: 1,
    max: 40,
    step: 1,
    suffix: 'hrs/semana',
  },
  {
    name: 'hourlyRate',
    label: 'Costo promedio por hora (CLP)',
    min: 1000,
    max: 200000,
    step: 500,
    prefix: '$',
  },
];

export function CalculatorInputs({ form, onSubmit }: CalculatorInputsProps) {
  const { register, handleSubmit, formState: { errors } } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {FIELDS.map((field) => (
        <div key={field.name} className="flex flex-col gap-1.5">
          <label
            htmlFor={field.name}
            className="text-sm font-semibold text-neutral-800"
          >
            {field.label}
          </label>
          <div className="relative flex items-center">
            {field.prefix && (
              <span className="absolute left-3 text-sm text-neutral-500 pointer-events-none">
                {field.prefix}
              </span>
            )}
            <input
              id={field.name}
              type="number"
              inputMode="numeric"
              min={field.min}
              max={field.max}
              step={field.step}
              aria-invalid={!!errors[field.name]}
              aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              className={cn(
                'w-full rounded-radius-xl border bg-white px-4 py-3',
                'text-base text-neutral-900 placeholder:text-neutral-400',
                'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600',
                'transition-colors duration-150',
                'min-h-[48px]',
                field.prefix && 'pl-7',
                field.suffix && 'pr-24',
                errors[field.name]
                  ? 'border-red-400 focus:ring-red-500'
                  : 'border-neutral-300',
              )}
              {...register(field.name, { valueAsNumber: true })}
            />
            {field.suffix && (
              <span className="absolute right-3 text-sm text-neutral-500 pointer-events-none whitespace-nowrap">
                {field.suffix}
              </span>
            )}
          </div>
          {errors[field.name] && (
            <p
              id={`${field.name}-error`}
              role="alert"
              className="text-xs text-red-600"
            >
              {errors[field.name]?.message}
            </p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className={cn(
          'mt-2 w-full rounded-radius-xl bg-blue-600 text-white',
          'py-3 text-base font-semibold',
          'shadow-cta hover:bg-blue-700 hover:shadow-cta-hover',
          'transition-all duration-200',
          'min-h-[48px]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2',
        )}
      >
        Calcular ahorro
      </button>
    </form>
  );
}
