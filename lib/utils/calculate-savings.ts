export interface SavingsResult {
  weeklyCostCLP: number;
  monthlyCostCLP: number;
  annualCostCLP: number;
  monthlyTimeSavedHours: number;
  annualTimeSavedHours: number;
  automationSavingsPercent: number;
}

/**
 * Calcula el ahorro proyectado de automatizar tareas manuales.
 * Asume que la automatización elimina el 80% del tiempo manual.
 */
export function calculateSavings(
  employees: number,
  hoursPerWeek: number,
  hourlyRate: number,
): SavingsResult {
  const AUTOMATION_EFFICIENCY = 0.8;
  const WEEKS_PER_MONTH = 4.33;
  const MONTHS_PER_YEAR = 12;

  const weeklyHoursTotal = employees * hoursPerWeek;
  const weeklyCostCLP = weeklyHoursTotal * hourlyRate;
  const monthlyCostCLP = weeklyCostCLP * WEEKS_PER_MONTH;
  const annualCostCLP = monthlyCostCLP * MONTHS_PER_YEAR;

  const monthlyTimeSavedHours = weeklyHoursTotal * WEEKS_PER_MONTH * AUTOMATION_EFFICIENCY;
  const annualTimeSavedHours = monthlyTimeSavedHours * MONTHS_PER_YEAR;

  return {
    weeklyCostCLP: Math.round(weeklyCostCLP),
    monthlyCostCLP: Math.round(monthlyCostCLP * AUTOMATION_EFFICIENCY),
    annualCostCLP: Math.round(annualCostCLP * AUTOMATION_EFFICIENCY),
    monthlyTimeSavedHours: Math.round(monthlyTimeSavedHours),
    annualTimeSavedHours: Math.round(annualTimeSavedHours),
    automationSavingsPercent: Math.round(AUTOMATION_EFFICIENCY * 100),
  };
}

export function formatCLP(value: number): string {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(value);
}
