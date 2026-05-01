export type PlanId = 'discovery' | 'saas' | 'build' | 'support';

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
    name: 'Discovery & Design Sprint',
    price: 'Desde 19 UF',
    priceNote: '~$750.000 CLP',
    description: 'Pagas por claridad, no por código. Una semana para saber exactamente qué construir.',
    cta: 'Agendar Discovery',
    ctaHref: 'https://cal.com/smconnection/diagnostico',
  },
  {
    id: 'saas',
    name: 'SaaS Start',
    price: 'Próximamente',
    priceNote: 'Sin inversión inicial',
    description: 'Plataforma lista, activación en días sin desarrollo a medida.',
    cta: 'Empezar aquí',
    ctaHref: 'https://wa.me/56955361419',
  },
  {
    id: 'build',
    name: 'Build Premium',
    price: '50–750 UF',
    priceNote: 'Según alcance',
    description: 'Software funcionando con código propio, sin dependencia de terceros.',
    cta: 'Cotizar proyecto',
    ctaHref: 'https://wa.me/56955361419',
    highlighted: true,
    badge: 'Más elegido',
  },
  {
    id: 'support',
    name: 'Project + Support',
    price: 'Semestral / Anual',
    priceNote: 'Según servicio activo',
    description: 'Equipo técnico externo con operación continua y respaldo real.',
    cta: 'Quiero soporte total',
    ctaHref: 'https://wa.me/56955361419',
  },
];

export const PRICING_FEATURES_TABLE: FeatureCategory[] = [
  {
    name: 'Diagnóstico',
    rows: [
      {
        label: 'Mapa de procesos actuales',
        values: { discovery: true, saas: false, build: true, support: false },
      },
      {
        label: 'Diagnóstico de cuellos de botella con impacto en CLP',
        values: { discovery: true, saas: false, build: true, support: false },
      },
      {
        label: 'Plan con alternativas y presupuesto real',
        values: { discovery: true, saas: false, build: true, support: false },
      },
      {
        label: 'Entrega en 1 semana sin compromiso',
        values: { discovery: true, saas: false, build: false, support: false },
      },
    ],
  },
  {
    name: 'Implementación',
    rows: [
      {
        label: 'Quick wins en primera semana',
        values: { discovery: false, saas: true, build: false, support: false },
      },
      {
        label: 'Sin inversión inicial ni desarrollo',
        values: { discovery: false, saas: true, build: false, support: false },
      },
      {
        label: 'Software funcionando (no maqueta)',
        values: { discovery: false, saas: false, build: true, support: true },
      },
      {
        label: 'Repositorio y código 100% tuyo',
        values: { discovery: false, saas: false, build: true, support: true },
      },
      {
        label: 'Entrega por hitos con precio fijo',
        values: { discovery: false, saas: false, build: true, support: false },
      },
      {
        label: 'Capacitación al entregar',
        values: { discovery: false, saas: false, build: true, support: true },
      },
    ],
  },
  {
    name: 'Soporte',
    rows: [
      {
        label: 'Soporte y actualizaciones incluidos',
        values: { discovery: false, saas: true, build: false, support: true },
      },
      {
        label: 'Monitoreo 24/7',
        values: { discovery: false, saas: false, build: false, support: true },
      },
      {
        label: 'Ajustes continuos',
        values: { discovery: false, saas: false, build: false, support: true },
      },
      {
        label: 'SLA garantizado',
        values: { discovery: false, saas: false, build: false, support: true },
      },
      {
        label: 'Acceso directo al equipo',
        values: { discovery: false, saas: false, build: false, support: true },
      },
    ],
  },
  {
    name: 'Integraciones',
    rows: [
      {
        label: 'Integraciones con sistemas actuales',
        values: { discovery: false, saas: true, build: true, support: true },
      },
      {
        label: 'Escala a Build Premium cuando quieras',
        values: { discovery: false, saas: true, build: false, support: false },
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
