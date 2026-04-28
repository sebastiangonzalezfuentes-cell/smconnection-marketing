export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  metric?: string;
  metricLabel?: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Carolina Vega',
    role: 'Gerente de Operaciones',
    company: 'Distribuidora Andina',
    avatar: 'CV',
    quote:
      'Antes pasábamos 3 horas diarias generando reportes manualmente. ' +
      'Ahora llegan solos a las 8am. El equipo puede enfocarse en analizar, no en copiar datos.',
    metric: '3h',
    metricLabel: 'ahorradas diariamente',
  },
  {
    id: 't2',
    author: 'Rodrigo Fuentes',
    role: 'Director Comercial',
    company: 'Inmobiliaria Central',
    avatar: 'RF',
    quote:
      'El onboarding de nuevos clientes pasó de 3 días a 15 minutos. ' +
      'Los prospectos reciben toda la información al instante y nuestros ejecutivos cierran el doble.',
    metric: '2x',
    metricLabel: 'más cierres mensuales',
  },
  {
    id: 't3',
    author: 'Valentina Torres',
    role: 'CEO',
    company: 'AgriSur Ltda.',
    avatar: 'VT',
    quote:
      'Dudé en contratar porque pensé que era para empresas grandes. ' +
      'En 3 semanas ya teníamos automatizado el 70% de nuestro proceso de cotización. Vale cada peso.',
    metric: '70%',
    metricLabel: 'del proceso automatizado',
  },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: 'c1', name: 'Distribuidora Andina', initials: 'DA' },
  { id: 'c2', name: 'Inmobiliaria Central', initials: 'IC' },
  { id: 'c3', name: 'AgriSur Ltda.',        initials: 'AS' },
  { id: 'c4', name: 'Retail Norte',         initials: 'RN' },
  { id: 'c5', name: 'Clínica del Valle',    initials: 'CV' },
  { id: 'c6', name: 'Logística Sur',        initials: 'LS' },
];
