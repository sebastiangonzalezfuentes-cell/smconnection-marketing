'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { TrendingDown, Clock, DollarSign } from 'lucide-react';
import { formatCLP } from '@/lib/utils/calculate-savings';
import type { SavingsResult } from '@/lib/utils/calculate-savings';

interface CalculatorResultsProps {
  result: SavingsResult;
}

export function CalculatorResults({ result }: CalculatorResultsProps) {
  const prefersReduced = useReducedMotion();

  const metrics = [
    {
      icon: DollarSign,
      label: 'Ahorro mensual estimado',
      value: formatCLP(result.monthlyCostCLP),
      accent: true,
    },
    {
      icon: Clock,
      label: 'Horas liberadas al mes',
      value: `${result.monthlyTimeSavedHours} hrs`,
      accent: false,
    },
    {
      icon: TrendingDown,
      label: 'Ahorro anual proyectado',
      value: formatCLP(result.annualCostCLP),
      accent: false,
    },
  ];

  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4"
    >
      <p className="text-sm font-semibold text-neutral-700">
        Proyección con automatización del {result.automationSavingsPercent}% de tareas manuales:
      </p>
      <div className="grid gap-4">
        {metrics.map(({ icon: Icon, label, value, accent }) => (
          <div
            key={label}
            className={`flex items-center gap-4 rounded-radius-xl p-4 ${
              accent
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-neutral-200'
            }`}
          >
            <div
              className={`flex size-10 shrink-0 items-center justify-center rounded-radius-xl ${
                accent ? 'bg-white/20' : 'bg-blue-50'
              }`}
            >
              <Icon
                className={`size-5 ${accent ? 'text-white' : 'text-blue-600'}`}
                aria-hidden="true"
              />
            </div>
            <div>
              <p className={`text-xs font-medium ${accent ? 'text-blue-100' : 'text-neutral-500'}`}>
                {label}
              </p>
              <p className={`text-xl font-bold ${accent ? 'text-white' : 'text-neutral-900'}`}>
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-neutral-400 leading-relaxed">
        Estimación basada en automatización del {result.automationSavingsPercent}% del tiempo manual.
        Los resultados reales dependen del tipo de proceso y la implementación.
      </p>
    </motion.div>
  );
}
