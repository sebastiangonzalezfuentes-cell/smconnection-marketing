export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  priceNote?: string;
  highlighted?: boolean;
  badge?: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'discovery',
    name: 'Discovery Sprint',
    tagline: 'Entiende qué automatizar antes de gastar un peso de más.',
    description:
      'En una semana mapeamos tus procesos, identificamos los cuellos de botella ' +
      'y te entregamos un plan concreto de automatización con ROI proyectado.',
    price: 'Desde 19 UF',
    priceNote: 'Entrega en 5 días hábiles',
    features: [
      'Mapeo de procesos actuales',
      'Identificación de automatizaciones prioritarias',
      'Plan de implementación con ROI proyectado',
      'Sesión de presentación con tu equipo',
    ],
  },
  {
    id: 'saas-start',
    name: 'SaaS Start',
    tagline: 'Plataforma lista para activar, sin meses de desarrollo.',
    description:
      'Acceso a nuestra plataforma de automatización preconfigurada. ' +
      'Lista para conectar con tus sistemas en días, no meses.',
    price: 'Próximamente',
    badge: 'coming-soon',
    features: [
      'Panel de automatizaciones listo',
      'Integraciones preconfiguradas',
      'Soporte de onboarding incluido',
      'Actualizaciones automáticas',
    ],
  },
  {
    id: 'build-premium',
    name: 'Build Premium',
    tagline: 'Software a medida. El código es tuyo.',
    description:
      'Desarrollo de automatizaciones y sistemas a medida para tu operación. ' +
      'Entregamos el código fuente, la documentación y la capacitación a tu equipo.',
    price: '50–750 UF',
    priceNote: 'Según alcance del proyecto',
    highlighted: true,
    badge: 'popular',
    features: [
      'Desarrollo 100% a medida',
      'Código fuente entregado',
      'Documentación técnica completa',
      'Capacitación al equipo interno',
      'Garantía de 3 meses post-entrega',
    ],
  },
  {
    id: 'project-support',
    name: 'Project + Support',
    tagline: 'Tu operación en producción, con respaldo real.',
    description:
      'Acompañamiento continuo una vez que tus automatizaciones están en producción. ' +
      'Monitoreo, ajustes, mejoras y soporte técnico permanente.',
    price: 'Contrato mensual',
    priceNote: 'Precio según servicio',
    features: [
      'Monitoreo 24/7 de automatizaciones',
      'Soporte técnico prioritario',
      'Ajustes y mejoras continuas',
      'Reporte mensual de resultados',
    ],
  },
];
