export interface Benefit {
  id: string;
  metric: string;
  unit?: string;
  label: string;
  description: string;
}

export const BENEFITS: Benefit[] = [
  {
    id: 'speed',
    metric: '10',
    unit: 'x',
    label: 'Velocidad en procesos manuales',
    description:
      'Lo que antes tomaba horas, ahora ocurre en minutos. ' +
      'Tus automatizaciones no se cansan, no cometen errores y no toman vacaciones.',
  },
  {
    id: 'reduction',
    metric: '80',
    unit: '%',
    label: 'Tareas que ya no hace tu equipo',
    description:
      'Tus personas dejan de copiar, pegar, enviar correos manuales y actualizar planillas. ' +
      'Se enfocan en lo que realmente importa.',
  },
  {
    id: 'uptime',
    metric: '24/7',
    label: 'Operación sin intervención manual',
    description:
      'Tus automatizaciones trabajan de madrugada, los fines de semana y en días festivos. ' +
      'Tu operación nunca para.',
  },
  {
    id: 'roi',
    metric: 'Mes 1',
    label: 'ROI recuperado desde el inicio',
    description:
      'La mayoría de nuestros clientes recupera la inversión en el primer mes de operación. ' +
      'Empezamos por los procesos de mayor impacto.',
  },
];
