export type PlanId = 'discovery' | 'build' | 'support';

export type FeatureValue = true | false | string;

export interface PricingPlanHeader {
  id: PlanId;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
}

export interface FeatureRow {
  label: string;
  values: Record<PlanId, FeatureValue>;
}

export interface FeatureCategory {
  name: string;
  rows: FeatureRow[];
}

export interface PricingFaq {
  question: string;
  answer: string;
}

export const PRICING_PLANS: PricingPlanHeader[] = [
  {
    id: 'discovery',
    name: 'Discovery Sprint',
    price: 'Desde 19 UF',
    priceNote: '~$750.000 CLP',
    description: 'El primer paso. Entiende qué automatizar y cuánto recuperas antes de invertir.',
    cta: 'Agendar diagnóstico',
    ctaHref: 'https://cal.com/smconnection/diagnostico',
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
  },
  {
    id: 'support',
    name: 'Project + Support',
    price: 'Contrato mensual',
    priceNote: 'Según servicio activo',
    description: 'Tu operación en producción, con respaldo real y mejoras continuas.',
    cta: 'Consultar disponibilidad',
    ctaHref: 'https://wa.me/56955361419',
  },
];

export const PRICING_FEATURES_TABLE: FeatureCategory[] = [
  {
    name: 'Diagnóstico',
    rows: [
      {
        label: 'Mapeo de procesos',
        values: { discovery: true, build: true, support: false },
      },
      {
        label: 'Identificación de quick wins',
        values: { discovery: true, build: true, support: false },
      },
      {
        label: 'Plan con ROI estimado',
        values: { discovery: true, build: true, support: false },
      },
      {
        label: 'Entrega en 5 días hábiles',
        values: { discovery: true, build: true, support: false },
      },
    ],
  },
  {
    name: 'Desarrollo',
    rows: [
      {
        label: 'Desarrollo 100% a medida',
        values: { discovery: false, build: true, support: false },
      },
      {
        label: 'Código fuente entregado',
        values: { discovery: false, build: true, support: false },
      },
      {
        label: 'Documentación técnica',
        values: { discovery: false, build: true, support: false },
      },
      {
        label: 'Capacitación al equipo',
        values: { discovery: false, build: true, support: false },
      },
      {
        label: 'Integraciones ilimitadas',
        values: { discovery: false, build: true, support: false },
      },
    ],
  },
  {
    name: 'Soporte',
    rows: [
      {
        label: 'Monitoreo 24/7',
        values: { discovery: false, build: false, support: true },
      },
      {
        label: 'Soporte técnico prioritario',
        values: { discovery: false, build: 'Opcional', support: true },
      },
      {
        label: 'Ajustes y mejoras mensuales',
        values: { discovery: false, build: false, support: true },
      },
      {
        label: 'Acceso directo al equipo',
        values: { discovery: false, build: false, support: true },
      },
      {
        label: 'SLA garantizado',
        values: { discovery: false, build: false, support: true },
      },
      {
        label: 'Reporte mensual de resultados',
        values: { discovery: false, build: false, support: true },
      },
    ],
  },
  {
    name: 'Garantías',
    rows: [
      {
        label: 'Garantía de devolución',
        values: { discovery: true, build: false, support: false },
      },
      {
        label: 'Garantía de 3 meses',
        values: { discovery: false, build: true, support: false },
      },
      {
        label: 'Contrato mensual sin permanencia',
        values: { discovery: false, build: false, support: true },
      },
    ],
  },
];

export const PRICING_FAQS: PricingFaq[] = [
  {
    question: '¿Por qué empezar con el Discovery Sprint?',
    answer:
      'Porque no tiene sentido invertir en automatización sin saber qué automatizar primero. ' +
      'El Discovery te da un mapa claro con ROI estimado antes de comprometer presupuesto.',
  },
  {
    question: '¿Cuánto tiempo toma un proyecto Build Premium?',
    answer:
      'Depende del alcance, pero la mayoría de los proyectos se entregan en 4 a 12 semanas. ' +
      'Definimos el timeline exacto en el Discovery.',
  },
  {
    question: '¿El código fuente es mío?',
    answer:
      'Sí, 100%. Todo el código desarrollado en Build Premium te pertenece. ' +
      'Sin licencias ni dependencia de nuestra plataforma.',
  },
  {
    question: '¿Puedo contratar el soporte sin haber hecho el Build con SmartConnection?',
    answer:
      'Sí, siempre que el sistema en producción sea compatible. ' +
      'Hacemos una revisión técnica inicial sin costo.',
  },
  {
    question: '¿Los precios están en UF? ¿Por qué?',
    answer:
      'Sí, para que tu presupuesto no se vea afectado por la variación del dólar o el euro. ' +
      'La UF te da estabilidad real en proyectos de varios meses.',
  },
  {
    question: '¿Tienen garantía de resultados?',
    answer:
      'En el Discovery, si no identificamos oportunidades de automatización con ROI positivo, ' +
      'te devolvemos el 100%. En Build Premium, garantizamos el correcto funcionamiento del ' +
      'sistema por 3 meses post-entrega.',
  },
];
