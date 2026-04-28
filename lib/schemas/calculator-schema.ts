import { z } from 'zod';

export const calculatorSchema = z.object({
  employees: z
    .number({ invalid_type_error: 'Ingresa un número válido' })
    .min(1, 'Mínimo 1 persona')
    .max(10000, 'Máximo 10.000 personas'),
  hoursPerWeek: z
    .number({ invalid_type_error: 'Ingresa un número válido' })
    .min(1, 'Mínimo 1 hora')
    .max(40, 'Máximo 40 horas'),
  hourlyRate: z
    .number({ invalid_type_error: 'Ingresa un número válido' })
    .min(1000, 'Mínimo $1.000/hora')
    .max(200000, 'Máximo $200.000/hora'),
});

export type CalculatorValues = z.infer<typeof calculatorSchema>;
