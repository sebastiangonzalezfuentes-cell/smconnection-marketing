export type PlanId = 'discovery' | 'saas' | 'build' | 'support';

export type FeatureValue = true | false | string;

export interface PricingPlanHeader {
  id: PlanId;
  name: string;
  price: string;       // precio base (para planes no-recurrentes)
  priceNote: string;
  // Campos para toggle mensual/anual — solo en planes isRecurring: true
  priceMonthly?: string;
  priceMonthlyNote?: string;
  priceAnnual?: string;
  priceAnnualNote?: string;
  annualSavings?: string;  // ej: "2 meses gratis"
  isRecurring?: boolean;
  features?: string[];
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
    name: 'Prototipa el Futuro Hoy',
    price: 'Desde 19 UF',
    priceNote: 'pago único · sin compromiso',
    isRecurring: false,
    badge: 'Empezar aquí',
    features: [
      'Mapa completo de tus procesos actuales',
      'Diagnóstico de 3 cuellos de botella con impacto estimado en CLP',
      'Plan de solución con alternativas (SaaS, Build o híbrido) y presupuesto real',
      'Entregables concretos en 1 semana — sin compromiso de build',
    ],
    description:
      'Pagas por claridad, no por código. Una semana para saber exactamente qué construir y cuánto ' +
      'invertir — antes de gastar en desarrollo.',
    cta: 'Agendar Discovery',
    ctaHref: 'https://cal.com/smconnection/diagnostico',
  },
  {
    id: 'saas',
    name: 'SaaS Start',
    price: 'Próximamente',
    priceNote: 'Sin inversión inicial',
    isRecurring: true,
    priceMonthly: 'Próximamente',
    priceMonthlyNote: '',
    priceAnnual: 'Próximamente',
    priceAnnualNote: '',
    highlighted: true,
    badge: 'Más popular',
    features: [
      'Quick wins visibles en la primera semana',
      'Sin inversión inicial ni desarrollo',
      'Soporte y actualizaciones incluidos',
      'Escala a Build Premium cuando quieras',
      'Integraciones con tus sistemas actuales',
    ],
    description:
      'Ya sabes lo que necesitas y quieres resultados esta semana. Plataforma lista, activamos en ' +
      'días, sin desarrollo.',
    cta: 'Empezar aquí',
    ctaHref: 'https://wa.me/56955361419',
  },
  {
    id: 'build',
    name: 'Build Premium',
    price: '50–750 UF',
    priceNote: 'según alcance · precio fijo',
    isRecurring: false,
    badge: 'Tú eres el dueño',
    features: [
      'Software funcionando — no una maqueta',
      'Repositorio y código 100% tuyo',
      'Entrega por hitos con precio fijo acordado',
      'Sin dependencia de SMC para operar',
      'Capacitación a tu equipo al entregar',
    ],
    description:
      'El Discovery te entrega el mapa. Build Premium construye el producto real: software ' +
      'funcionando, código tuyo, sin dependencia de SMC para operar.',
    cta: 'Cotizar proyecto',
    ctaHref: 'https://wa.me/56955361419',
  },
  {
    id: 'support',
    name: 'Project + Support',
    price: 'Desde 15 UF',
    priceNote: '/mes · pago mensual',
    isRecurring: true,
    priceMonthly: 'Desde 15 UF',
    priceMonthlyNote: '/mes · cobrado mensualmente',
    priceAnnual: 'Desde 13 UF',
    priceAnnualNote: '/mes · cobrado anualmente',
    annualSavings: '2 meses gratis',
    badge: 'Todo incluido',
    features: [
      'Todo lo de Build Premium',
      'Monitoreo activo 24/7',
      'Ajustes y mejoras continuas',
      'Contrato SLA con tiempos de respuesta',
      'Acceso directo al equipo vía canal dedicado',
    ],
    description:
      'Tu equipo técnico externo, siempre activo. Sin contratar developers. Operación continua ' +
      'con contrato y soporte garantizado.',
    cta: 'Quiero soporte total',
    ctaHref: 'https://wa.me/56955361419',
  },
];

export const PRICING_FEATURES_TABLE: FeatureCategory[] = [
  {
    name: 'Diagnóstico',
    rows: [
      {
        label: 'Mapa completo de tus procesos actuales',
        values: { discovery: true, saas: false, build: true, support: false },
      },
      {
        label: 'Diagnóstico de 3 cuellos de botella con impacto estimado en CLP',
        values: { discovery: true, saas: false, build: false, support: false },
      },
      {
        label: 'Plan de solución con alternativas (SaaS, Build o híbrido) y presupuesto real',
        values: { discovery: true, saas: false, build: true, support: false },
      },
      {
        label: 'Entregables concretos en 1 semana — sin compromiso de build',
        values: { discovery: true, saas: false, build: false, support: false },
      },
    ],
  },
  {
    name: 'Implementación',
    rows: [
      {
        label: 'Resultados visibles en primera semana',
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
        label: 'Repositorio y código 100% propio',
        values: { discovery: false, saas: false, build: true, support: true },
      },
      {
        label: 'Entrega por hitos con precio fijo',
        values: { discovery: false, saas: false, build: true, support: false },
      },
      {
        label: 'Sin dependencia post-entrega',
        values: { discovery: false, saas: false, build: true, support: false },
      },
      {
        label: 'Capacitación incluida al entregar',
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
        label: 'Monitoreo activo 24/7',
        values: { discovery: false, saas: false, build: false, support: true },
      },
      {
        label: 'Ajustes y mejoras continuas',
        values: { discovery: false, saas: false, build: false, support: true },
      },
      {
        label: 'Contrato SLA con tiempos de respuesta',
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
        label: 'Escalable a Build Premium',
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
