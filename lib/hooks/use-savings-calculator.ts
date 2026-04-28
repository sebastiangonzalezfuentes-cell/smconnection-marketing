'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { calculatorSchema, type CalculatorValues } from '@/lib/schemas/calculator-schema';
import { calculateSavings, type SavingsResult } from '@/lib/utils/calculate-savings';

interface UseSavingsCalculatorReturn {
  form: ReturnType<typeof useForm<CalculatorValues>>;
  result: SavingsResult | null;
  hasCalculated: boolean;
  onSubmit: (values: CalculatorValues) => void;
}

export function useSavingsCalculator(): UseSavingsCalculatorReturn {
  const [result, setResult] = useState<SavingsResult | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  const form = useForm<CalculatorValues>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      employees: 5,
      hoursPerWeek: 10,
      hourlyRate: 8000,
    },
    mode: 'onChange',
  });

  const onSubmit = (values: CalculatorValues): void => {
    const savings = calculateSavings(values.employees, values.hoursPerWeek, values.hourlyRate);
    setResult(savings);
    setHasCalculated(true);
  };

  return { form, result, hasCalculated, onSubmit };
}
