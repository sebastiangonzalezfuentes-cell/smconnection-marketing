export interface PricingFeature {
  label: string;
  included: boolean;
  note?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
  features: PricingFeature[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'discovery',
    name: 'Discovery Sprint',
    price: 'Desde 19 UF',
    priceNote: '~$750.000 CLP',
    description: 'El primer paso. Entiende exactamente qué automatizar y cuánto recuperas.',
    cta: 'Agendar diagnóstico',
    ctaHref: 'https://cal.com/smconnection/diagnostico',
    features: [
      { label: 'Mapeo de procesos actuales', included: true },
      { label: 'Identificación de quick wins', included: true },
      { label: 'Plan de automatización con ROI', included: true },
      { label: 'Sesión de presentación ejecutiva', included: true },
      { label: 'Entrega en 5 días hábiles', included: true },
      { label: 'Garantía de devolución si no hay valor', included: true },
      { label: 'Implementación incluida', included: false },
      { label: 'Soporte post-entrega', included: false },
    ],
  },
  {
    id: 'build',
    name: 'Build Premium',
    price: '50–750 UF',
    priceNote: 'Según alcance',
    description: 'Automatizaciones a medida. Código fuente tuyo. Resultados desde el mes 1.',
    cta: 'Hablar con un experto',
    ctaHref: 'https://wa.me/56955361419',
    highlighted: true,
    badge: 'Más elegido',
    features: [
      { label: 'Discovery incluido', included: true },
      { label: 'Desarrollo 100% a medida', included: true },
      { label: 'Código fuente entregado', included: true },
      { label: 'Documentación técnica', included: true },
      { label: 'Capacitación al equipo', included: true },
      { label: 'Garantía de 3 meses', included: true },
      { label: 'Integraciones ilimitadas', included: true },
      { label: 'Soporte prioritario opcional', included: true, note: 'Project + Support' },
    ],
  },
  {
    id: 'support',
    name: 'Project + Support',
    price: 'Contrato mensual',
    priceNote: 'Según servicio activo',
    description: 'Tu operación en producción, con respaldo real y mejoras continuas.',
    cta: 'Consultar disponibilidad',
    ctaHref: 'https://wa.me/56955361419',
    features: [
      { label: 'Monitoreo 24/7', included: true },
      { label: 'Soporte técnico prioritario', included: true },
      { label: 'Ajustes y mejoras mensuales', included: true },
      { label: 'Reporte mensual de resultados', included: true },
      { label: 'Acceso directo al equipo técnico', included: true },
      { label: 'SLA garantizado', included: true },
      { label: 'Nuevas integraciones incluidas', included: false, note: 'Cotización aparte' },
      { label: 'Desarrollo de nuevas features', included: false, note: 'Cotización aparte' },
    ],
  },
];
