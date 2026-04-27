'use client';

/**
 * Landing page completa de ProyectoIA
 * Stack: Next.js 14 App Router · React 18 · Tailwind CSS · Framer Motion · TypeScript strict
 *
 * Uso: copiar este archivo a app/page.tsx en un proyecto Next.js 14 con Tailwind y Framer Motion.
 * Dependencias: npm install framer-motion lucide-react
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Menu,
  X,
  Zap,
  Link2,
  BarChart3,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ChevronRight,
  Clock,
  Users,
  TrendingUp,
  AlertTriangle,
  Database,
  Brain,
  Workflow,
  Shield,
  Star,
  Play,
  MessageSquare,
  Globe,
  Share2,
  ExternalLink,
  Code2,
  Mail,
} from 'lucide-react';

// ─────────────────────────────────────────────
// Tipos
// ─────────────────────────────────────────────

interface NavItem {
  label: string;
  href: string;
}

interface PainCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TabContent {
  id: string;
  label: string;
  headline: string;
  description: string;
  capabilities: string[];
  mockupLines: string[];
}

interface ComparisonItem {
  without: string;
  with: string;
}

interface CaseStudy {
  company: string;
  industry: string;
  metric: string;
  metricLabel: string;
  description: string;
}

interface Integration {
  name: string;
  category: string;
}

interface Plan {
  name: string;
  badge?: string;
  description: string;
  automations: string;
  integrations: string;
  ai: string;
  support: string;
  extras: string[];
  highlighted: boolean;
}

// ─────────────────────────────────────────────
// Datos de contenido
// ─────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { label: 'Automatizaciones', href: '#automatizaciones' },
  { label: 'Motor de IA', href: '#motor-ia' },
  { label: 'Integraciones', href: '#integraciones' },
  { label: 'Casos de éxito', href: '#resultados' },
  { label: 'Precios', href: '#precios' },
];

const PAIN_CARDS: PainCard[] = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Procesos manuales que consumen horas',
    description:
      'Tu equipo gasta días en tareas repetitivas que podrían ejecutarse solas en segundos.',
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    title: 'Sistemas que no se hablan entre sí',
    description:
      'Cada herramienta vive en su silo. Los datos no fluyen y los errores se multiplican.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Proyectos de tecnología eternos',
    description:
      'Meses de desarrollo, presupuestos desbordados y resultados que llegan tarde o nunca.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Dependencia de freelancers sin continuidad',
    description:
      'Cada freelancer empieza de cero. Tu conocimiento de negocio se pierde en el camino.',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Datos dispersos sin visibilidad real',
    description:
      'Las decisiones se toman a ciegas porque los datos están en hojas de cálculo y emails.',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'IA prometida que nunca llegó',
    description:
      'Escuchaste el pitch de IA, firmaste el contrato y hoy el sistema sigue igual que antes.',
  },
];

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Diagnóstico en 48 horas',
    description:
      'Mapeamos tus procesos, sistemas y cuellos de botella. Entregamos un plan concreto con métricas de impacto antes de escribir una sola línea de código.',
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    number: '02',
    title: 'Automatizaciones en 2 semanas',
    description:
      'Implementamos las Automatizaciones prioritarias, conectamos tus sistemas con Integraciones nativas y te entregamos Resultados medibles.',
    icon: <Workflow className="w-8 h-8" />,
  },
  {
    number: '03',
    title: 'Motor de IA activado',
    description:
      'Una vez estabilizadas las Automatizaciones, activamos el Motor de IA para optimización continua, predicción y toma de decisiones inteligente.',
    icon: <Brain className="w-8 h-8" />,
  },
];

const AI_TABS: TabContent[] = [
  {
    id: 'automatizacion',
    label: 'Automatización de Procesos',
    headline: 'Tus procesos, en piloto automático',
    description:
      'El Motor de IA identifica patrones, anticipa errores y ejecuta flujos complejos sin intervención humana. Desde facturación hasta aprobaciones, cada proceso se vuelve predecible y trazable.',
    capabilities: [
      'Ejecución de flujos de trabajo multi-paso sin intervención',
      'Validación automática de datos y corrección de errores',
      'Notificaciones inteligentes basadas en contexto',
      'Escalamiento automático a humanos cuando es necesario',
      'Auditoría completa de cada Automatización ejecutada',
    ],
    mockupLines: [
      '▶ Automatización: Cierre de facturación mensual',
      '✓ Consolidación de datos  — 2.847 registros',
      '✓ Validación de pagos     — 99.2% precisión',
      '✓ Generación de reportes  — 14 documentos',
      '⟳ Notificando a finanzas  — en progreso...',
      '',
      'Tiempo total: 4 min 12 seg  |  Antes: 6 horas',
    ],
  },
  {
    id: 'integraciones',
    label: 'Integraciones Inteligentes',
    headline: 'Todos tus sistemas, una sola plataforma',
    description:
      'Conectamos más de 100 herramientas sin código personalizado frágil. Cada Integración es bidireccional, con mapeo de datos inteligente y tolerancia a fallos incorporada.',
    capabilities: [
      'Conexión nativa con SAP, Salesforce, HubSpot y más',
      'Mapeo automático de campos entre sistemas distintos',
      'Sincronización en tiempo real o por lotes según el caso',
      'Manejo de errores y reintentos automáticos',
      'Panel centralizado de estado de todas las Integraciones',
    ],
    mockupLines: [
      '◉ Integraciones activas: 12/12',
      '',
      '↔ Salesforce   → PostgreSQL   ✓ Sync 2m ago',
      '↔ HubSpot      → Slack        ✓ Sync 5m ago',
      '↔ SAP          → Google Sheets ✓ Sync 1m ago',
      '↔ WhatsApp Biz → CRM interno  ✓ Sync 30s ago',
      '',
      '0 errores en las últimas 24 horas',
    ],
  },
  {
    id: 'analisis',
    label: 'Análisis y Predicción',
    headline: 'De datos a decisiones en tiempo real',
    description:
      'El Motor de IA analiza el flujo operacional de tu empresa, detecta anomalías antes de que se conviertan en problemas y genera Resultados accionables para tu equipo directivo.',
    capabilities: [
      'Detección de anomalías en tiempo real con alertas',
      'Predicción de demanda y carga operacional',
      'Reportes ejecutivos generados automáticamente',
      'Análisis de documentos y contratos con IA',
      'Recomendaciones proactivas de optimización',
    ],
    mockupLines: [
      '⚡ Motor de IA — Análisis activo',
      '',
      'Predicción próximas 7 días:',
      '  Volumen de pedidos: ↑ 23% (alta confianza)',
      '  Cuellos de botella: Despacho (martes-miérc)',
      '',
      '⚠ Alerta detectada: Stock crítico SKU-4421',
      '✓ Acción sugerida: Reorden automático activado',
    ],
  },
];

const COMPARISON_ITEMS: ComparisonItem[] = [
  {
    without: 'Procesos manuales con errores humanos constantes',
    with: 'Automatizaciones que se ejecutan solas, sin errores',
  },
  {
    without: 'Sistemas aislados que no comparten datos',
    with: 'Integraciones bidireccionales en tiempo real',
  },
  {
    without: 'Proyectos de 6 a 12 meses sin resultados claros',
    with: 'Primera Automatización funcionando en 2 semanas',
  },
  {
    without: 'Freelancers que no conocen tu negocio',
    with: 'Equipo especializado con contexto de tu industria',
  },
  {
    without: 'Datos dispersos, decisiones a ciegas',
    with: 'Panel unificado con visibilidad total en tiempo real',
  },
  {
    without: 'IA genérica que no se adapta a tu operación',
    with: 'Motor de IA entrenado con tu lógica de negocio',
  },
  {
    without: 'Costos imprevisibles y presupuestos que se escapan',
    with: 'Precio fijo por Proyecto, sin sorpresas',
  },
  {
    without: 'Sin soporte ni transferencia de conocimiento',
    with: 'Soporte incluido + documentación de cada Automatización',
  },
];

const CASE_STUDIES: CaseStudy[] = [
  {
    company: 'Logística del Sur S.A.',
    industry: 'Logística & Transporte',
    metric: '65%',
    metricLabel: 'reducción en tiempo de facturación',
    description:
      'Automatizamos el cierre contable mensual conectando SAP con su sistema de despacho. Lo que tomaba 3 días ahora ocurre en 4 horas.',
  },
  {
    company: 'RetailCorp LATAM',
    industry: 'Comercio Minorista',
    metric: '3.2×',
    metricLabel: 'más pedidos procesados sin nuevo personal',
    description:
      'El Motor de IA predice demanda y activa reórdenes automáticos. Eliminaron el quiebre de stock en temporadas altas.',
  },
  {
    company: 'Grupo Financiero Andino',
    industry: 'Servicios Financieros',
    metric: '89%',
    metricLabel: 'de documentos procesados sin revisión manual',
    description:
      'Integramos su sistema de préstamos con validación automática de documentos usando el Motor de IA para análisis de riesgo.',
  },
];

const INTEGRATIONS: Integration[] = [
  { name: 'SAP', category: 'ERP' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Slack', category: 'Comunicación' },
  { name: 'Google Workspace', category: 'Productividad' },
  { name: 'WhatsApp Business', category: 'Mensajería' },
  { name: 'Stripe', category: 'Pagos' },
  { name: 'PostgreSQL', category: 'Base de datos' },
  { name: 'Excel / Sheets', category: 'Planillas' },
  { name: 'Zapier', category: 'Automatización' },
  { name: 'Notion', category: 'Documentación' },
  { name: 'Zendesk', category: 'Soporte' },
  { name: 'Shopify', category: 'E-commerce' },
  { name: 'Microsoft 365', category: 'Productividad' },
  { name: 'Twilio', category: 'Comunicación' },
  { name: 'Mercado Libre', category: 'E-commerce' },
];

const PLANS: Plan[] = [
  {
    name: 'Starter',
    description: 'Para empresas que quieren su primera Automatización funcionando rápido.',
    automations: '1 Automatización',
    integrations: 'Hasta 5 Integraciones',
    ai: 'Motor de IA básico',
    support: 'Soporte 30 días',
    extras: [
      'Panel de monitoreo incluido',
      'Documentación técnica',
      'Onboarding guiado',
    ],
    highlighted: false,
  },
  {
    name: 'Business',
    badge: 'Más popular',
    description: 'Para operaciones que necesitan escalar con IA y múltiples Integraciones.',
    automations: '5 Automatizaciones',
    integrations: 'Integraciones ilimitadas',
    ai: 'Motor de IA completo',
    support: 'Soporte 90 días',
    extras: [
      'Panel avanzado con predicciones',
      'Análisis y reportes automáticos',
      'Prioridad en implementación',
      'Revisión mensual de Resultados',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Para grandes operaciones con necesidades complejas y SLA garantizado.',
    automations: 'Automatizaciones ilimitadas',
    integrations: 'Integraciones ilimitadas',
    ai: 'Motor de IA avanzado + custom',
    support: 'SLA garantizado + equipo dedicado',
    extras: [
      'Arquitectura a medida',
      'Capacitación del equipo interno',
      'Integración con sistemas legacy',
      'Revisión semanal de Resultados',
      'Contrato de mantenimiento',
    ],
    highlighted: false,
  },
];

// ─────────────────────────────────────────────
// Variantes de animación reutilizables
// ─────────────────────────────────────────────

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

// ─────────────────────────────────────────────
// Hook utilitario: detectar si el elemento está en viewport
// ─────────────────────────────────────────────

function useSectionInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  return { ref, isInView };
}

// ─────────────────────────────────────────────
// Componente: Navbar
// ─────────────────────────────────────────────

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#030712]/80 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-1 group" aria-label="ProyectoIA — inicio">
          <span className="text-xl font-bold text-white tracking-tight">ProyectoIA</span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:shadow-[0_0_8px_rgba(99,102,241,0.8)] transition-shadow" aria-hidden="true" />
        </a>

        {/* Links desktop */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712] rounded"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTAs desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/login"
            className="text-sm text-gray-300 hover:text-white px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            Iniciar sesión
          </a>
          <a
            href="#demo"
            className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            Solicitar demo
          </a>
        </div>

        {/* Botón hamburger mobile */}
        <button
          className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Menú mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0A0F1E]/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition-colors text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/[0.06] flex flex-col gap-2">
                <a
                  href="/login"
                  className="text-sm text-center text-gray-300 py-2.5 px-4 rounded-lg border border-white/10 hover:border-white/20 transition-all"
                >
                  Iniciar sesión
                </a>
                <a
                  href="#demo"
                  className="text-sm font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 py-2.5 px-4 rounded-lg transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  Solicitar demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─────────────────────────────────────────────
// Componente: Mockup animado del Panel
// ─────────────────────────────────────────────

function PanelMockup() {
  return (
    <div
      className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(99,102,241,0.15)]"
      aria-hidden="true"
    >
      {/* Barra superior del panel */}
      <div className="bg-[#0D1F5C]/60 border-b border-white/[0.08] px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <span className="text-xs text-gray-500 ml-2">Panel — ProyectoIA</span>
      </div>

      {/* Contenido del panel */}
      <div className="bg-[#0A0F1E] p-5 grid grid-cols-3 gap-4">
        {/* Métricas */}
        {[
          { label: 'Automatizaciones activas', value: '24', delta: '+3 hoy', color: 'text-indigo-400' },
          { label: 'Horas ahorradas este mes', value: '1,247', delta: '↑ 18%', color: 'text-emerald-400' },
          { label: 'Tasa de éxito', value: '99.4%', delta: 'Últimos 30 días', color: 'text-indigo-400' },
        ].map((metric) => (
          <motion.div
            key={metric.label}
            className="bg-[#111827] rounded-xl p-3 border border-white/[0.06]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-[10px] text-gray-500 mb-1 leading-tight">{metric.label}</p>
            <p className={`text-xl font-bold ${metric.color}`}>{metric.value}</p>
            <p className="text-[10px] text-gray-600 mt-0.5">{metric.delta}</p>
          </motion.div>
        ))}

        {/* Gráfica de barras simplificada */}
        <motion.div
          className="col-span-2 bg-[#111827] rounded-xl p-3 border border-white/[0.06]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-[10px] text-gray-500 mb-3">Automatizaciones ejecutadas — últimos 7 días</p>
          <div className="flex items-end gap-2 h-16">
            {[40, 65, 45, 80, 72, 90, 85].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t bg-indigo-600/70 hover:bg-indigo-500/80 transition-colors cursor-default"
                style={{ height: `${h}%` }}
                initial={{ scaleY: 0, originY: '100%' }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.4, ease: 'easeOut' }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((d) => (
              <span key={d} className="flex-1 text-center text-[9px] text-gray-600">{d}</span>
            ))}
          </div>
        </motion.div>

        {/* Actividad reciente */}
        <motion.div
          className="bg-[#111827] rounded-xl p-3 border border-white/[0.06]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <p className="text-[10px] text-gray-500 mb-2">Actividad reciente</p>
          <div className="space-y-1.5">
            {[
              { status: '✓', text: 'Facturación cerrada', color: 'text-emerald-400' },
              { status: '✓', text: 'SAP sincronizado', color: 'text-emerald-400' },
              { status: '⟳', text: 'Análisis en curso', color: 'text-indigo-400' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className={`text-[10px] ${item.color}`}>{item.status}</span>
                <span className="text-[10px] text-gray-400 truncate">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Barra de progreso de integración */}
        <motion.div
          className="col-span-3 bg-[#111827] rounded-xl p-3 border border-white/[0.06]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-2">
            <p className="text-[10px] text-gray-500">Estado de Integraciones</p>
            <span className="text-[10px] text-emerald-400 font-medium">12/12 activas</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1, duration: 1.2, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Sección 2: Hero
// ─────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Fondo con grid sutil */}
      <div
        className="absolute inset-0 bg-[#030712]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />
      {/* Glow central */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna de texto */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col gap-6"
          >
            {/* Badge animado */}
            <motion.div variants={fadeInUp} className="flex">
              <span className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium px-3 py-1.5 rounded-full">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-indigo-400"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  aria-hidden="true"
                />
                Nuevo — Motor de IA v2 disponible
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              id="hero-headline"
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              <span className="bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                Tu empresa automatizada.
              </span>
              <br />
              <span className="text-white">Resultados en semanas.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl"
            >
              Conectamos tus sistemas, automatizamos tus procesos y ponemos el{' '}
              <strong className="text-gray-200 font-medium">Motor de IA</strong> a trabajar.
              Sin dependencia de freelancers. Sin meses de espera.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <Play className="w-4 h-4" aria-hidden="true" />
                Ver una Automatización en vivo
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white border border-white/10 hover:border-white/20 px-6 py-3 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 hover:bg-white/[0.03]"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                Hablar con un especialista
              </a>
            </motion.div>

            {/* Prueba social */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2" aria-hidden="true">
                {[
                  'bg-indigo-600',
                  'bg-blue-600',
                  'bg-violet-600',
                  'bg-cyan-600',
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${color} border-2 border-[#030712] flex items-center justify-center text-[10px] text-white font-bold`}
                  >
                    {['LS', 'RC', 'GF', 'MX'][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Más de{' '}
                <strong className="text-gray-300 font-semibold">50 empresas</strong>{' '}
                ya automatizaron sus operaciones
              </p>
            </motion.div>
          </motion.div>

          {/* Columna del mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <PanelMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Sección 3: Logos de clientes
// ─────────────────────────────────────────────

function ClientLogosSection() {
  const { ref, isInView } = useSectionInView();

  const logos = [
    'Logística del Sur',
    'RetailCorp',
    'Grupo Andino',
    'DistribuCorp',
    'Manufactura Sur',
    'Servicios Pro',
  ];

  return (
    <section ref={ref} className="py-16 border-y border-white/[0.06] bg-[#0A0F1E]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeIn}
          className="text-center text-sm text-gray-600 uppercase tracking-widest mb-10"
        >
          Empresas que ya confían en ProyectoIA
        </motion.p>
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center"
        >
          {logos.map((logo) => (
            <motion.div
              key={logo}
              variants={fadeIn}
              className="flex items-center justify-center opacity-30 hover:opacity-60 transition-opacity duration-300"
            >
              <div className="px-4 py-2 border border-white/10 rounded-lg">
                <span className="text-xs text-gray-400 font-medium whitespace-nowrap">{logo}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Sección 4: Problema (Pain)
// ─────────────────────────────────────────────

function PainSection() {
  const { ref, isInView } = useSectionInView();

  return (
    <section
      id="problema"
      ref={ref}
      className="py-24 lg:py-32 bg-[#030712]"
      aria-labelledby="pain-headline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2
            id="pain-headline"
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            ¿Tu empresa sigue operando así?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
            Cada proceso manual, cada sistema desconectado y cada proyecto sin entregar tiene un costo real para tu empresa.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
        >
          {PAIN_CARDS.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              role="listitem"
              className="group relative bg-[#111827] border border-white/[0.06] hover:border-amber-500/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)]"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-4">
                {card.icon}
              </div>
              <h3 className="text-white font-semibold mb-2 leading-snug">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Sección 5: Cómo funciona
// ─────────────────────────────────────────────

function HowItWorksSection() {
  const { ref, isInView } = useSectionInView();

  return (
    <section
      id="automatizaciones"
      ref={ref}
      className="py-24 lg:py-32 bg-[#0A0F1E]"
      aria-labelledby="how-headline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="text-center mb-20"
        >
          <motion.p variants={fadeInUp} className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">
            Metodología
          </motion.p>
          <motion.h2
            id="how-headline"
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            <span className="bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
              Tres pasos. Resultados reales.
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
            Sin metodologías complicadas. Sin meses de análisis. Empezamos a entregar en 48 horas.
          </motion.p>
        </motion.div>

        {/* Timeline desktop: horizontal / mobile: vertical */}
        <div className="relative">
          {/* Línea conectora desktop */}
          <motion.div
            className="hidden lg:block absolute top-20 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-indigo-600/20 via-indigo-500/60 to-indigo-600/20"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            aria-hidden="true"
          />

          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={stagger}
            className="grid lg:grid-cols-3 gap-8 relative"
          >
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="relative flex flex-col items-center text-center lg:text-center"
              >
                {/* Número + ícono */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#0D1F5C] border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.2)] z-10 relative">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white z-20">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Sección 6: Capacidades del Motor de IA
// ─────────────────────────────────────────────

function AIEngineSection() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, isInView } = useSectionInView();
  const currentTab = AI_TABS[activeTab];

  return (
    <section
      id="motor-ia"
      ref={ref}
      className="py-24 lg:py-32 bg-[#030712]"
      aria-labelledby="ai-headline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">
            Motor de IA
          </motion.p>
          <motion.h2
            id="ai-headline"
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            El Motor de IA que trabaja por tu empresa
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
            No es un chatbot genérico. Es inteligencia aplicada directamente a tus procesos operacionales.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <div
            role="tablist"
            aria-label="Capacidades del Motor de IA"
            className="flex flex-col sm:flex-row gap-2 justify-center mb-10 bg-[#111827] border border-white/[0.06] rounded-2xl p-2 max-w-2xl mx-auto"
          >
            {AI_TABS.map((tab, i) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === i}
                aria-controls={`tab-panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(i)}
                className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  activeTab === i
                    ? 'bg-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                    : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab.id}
              id={`tab-panel-${currentTab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${currentTab.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-10 items-center"
            >
              {/* Descripción + capacidades */}
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{currentTab.headline}</h3>
                  <p className="text-gray-400 leading-relaxed">{currentTab.description}</p>
                </div>
                <ul className="flex flex-col gap-3" aria-label="Capacidades">
                  {currentTab.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-gray-300 text-sm leading-relaxed">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mockup terminal */}
              <div
                className="bg-[#0A0F1E] border border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.1)]"
                aria-hidden="true"
              >
                <div className="bg-[#111827] border-b border-white/[0.06] px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-xs text-gray-600 ml-1">Motor de IA — {currentTab.label}</span>
                </div>
                <div className="p-5 font-mono text-xs">
                  {currentTab.mockupLines.map((line, i) => (
                    <motion.p
                      key={`${currentTab.id}-${i}`}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                      className={`leading-relaxed ${
                        line.startsWith('✓')
                          ? 'text-emerald-400'
                          : line.startsWith('⚠')
                          ? 'text-amber-400'
                          : line.startsWith('⟳')
                          ? 'text-indigo-400'
                          : line.startsWith('▶') || line.startsWith('◉') || line.startsWith('⚡')
                          ? 'text-indigo-300 font-semibold'
                          : line.startsWith('↔')
                          ? 'text-gray-300'
                          : line === ''
                          ? 'h-3'
                          : 'text-gray-500'
                      }`}
                    >
                      {line || '\u00A0'}
                    </motion.p>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Sección 7: Comparación
// ─────────────────────────────────────────────

function ComparisonSection() {
  const { ref, isInView } = useSectionInView();

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-[#0A0F1E]"
      aria-labelledby="comparison-headline"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2
            id="comparison-headline"
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            La diferencia que hace ProyectoIA
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Sin ProyectoIA */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#111827] border border-red-900/30 rounded-2xl overflow-hidden"
          >
            <div className="bg-red-950/30 border-b border-red-900/20 px-6 py-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-500" aria-hidden="true" />
              <h3 className="font-semibold text-red-400">Sin ProyectoIA</h3>
            </div>
            <ul className="p-4 flex flex-col gap-1" role="list">
              {COMPARISON_ITEMS.map((item) => (
                <li
                  key={item.without}
                  className="flex items-start gap-3 px-2 py-2.5 rounded-lg"
                  role="listitem"
                >
                  <XCircle className="w-4 h-4 text-red-600/70 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-gray-500">{item.without}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Con ProyectoIA */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#111827] border border-indigo-500/30 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.08)]"
          >
            <div className="bg-indigo-950/30 border-b border-indigo-500/20 px-6 py-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-400" aria-hidden="true" />
              <h3 className="font-semibold text-indigo-300">Con ProyectoIA</h3>
            </div>
            <ul className="p-4 flex flex-col gap-1" role="list">
              {COMPARISON_ITEMS.map((item) => (
                <li
                  key={item.with}
                  className="flex items-start gap-3 px-2 py-2.5 rounded-lg hover:bg-indigo-500/5 transition-colors"
                  role="listitem"
                >
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-gray-300">{item.with}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Sección 8: Resultados / Casos de éxito
// ─────────────────────────────────────────────

function ResultsSection() {
  const { ref, isInView } = useSectionInView();

  return (
    <section
      id="resultados"
      ref={ref}
      className="py-24 lg:py-32 bg-[#030712]"
      aria-labelledby="results-headline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">
            Casos de éxito
          </motion.p>
          <motion.h2
            id="results-headline"
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Resultados que puedes medir
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid md:grid-cols-3 gap-6"
        >
          {CASE_STUDIES.map((study) => (
            <motion.article
              key={study.company}
              variants={fadeInUp}
              className="group bg-[#111827] border border-white/[0.06] hover:border-indigo-500/20 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]"
              aria-label={`Caso de éxito: ${study.company}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-white font-semibold">{study.company}</p>
                  <span className="inline-block mt-1 text-xs text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full">
                    {study.industry}
                  </span>
                </div>
                <Star className="w-4 h-4 text-amber-500" aria-hidden="true" />
              </div>

              <div>
                <p
                  className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
                  aria-label={`${study.metric} ${study.metricLabel}`}
                >
                  {study.metric}
                </p>
                <p className="text-sm text-gray-500 mt-1">{study.metricLabel}</p>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed border-t border-white/[0.06] pt-4">
                {study.description}
              </p>

              <div className="flex items-center gap-1 text-indigo-400 text-sm group-hover:gap-2 transition-all">
                <span>Ver Proyecto completo</span>
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Sección 9: Integraciones
// ─────────────────────────────────────────────

function IntegrationsSection() {
  const { ref, isInView } = useSectionInView();

  return (
    <section
      id="integraciones"
      ref={ref}
      className="py-24 lg:py-32 bg-[#0A0F1E]"
      aria-labelledby="integrations-headline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">
            Integraciones
          </motion.p>
          <motion.h2
            id="integrations-headline"
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Conectamos con los sistemas que ya usas
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
            Más de 100 Integraciones nativas. Sin código frágil. Sin mantenimiento manual.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10"
        >
          {INTEGRATIONS.map((integration) => (
            <motion.div
              key={integration.name}
              variants={fadeIn}
              className="group flex flex-col items-center gap-2 bg-[#111827] border border-white/[0.06] hover:border-indigo-500/20 rounded-xl p-3 transition-all duration-200 hover:shadow-[0_0_20px_rgba(99,102,241,0.08)] cursor-default"
              title={integration.category}
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center" aria-hidden="true">
                <Globe className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
              </div>
              <span className="text-[10px] text-gray-500 group-hover:text-gray-400 text-center leading-tight transition-colors">
                {integration.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeIn}
          className="text-center"
        >
          <a
            href="#integraciones-todas"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
          >
            Ver todas las Integraciones
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Sección 10: Precios
// ─────────────────────────────────────────────

function PricingSection() {
  const { ref, isInView } = useSectionInView();

  return (
    <section
      id="precios"
      ref={ref}
      className="py-24 lg:py-32 bg-[#030712]"
      aria-labelledby="pricing-headline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">
            Precios
          </motion.p>
          <motion.h2
            id="pricing-headline"
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Un Proyecto. Un Resultado. Un precio claro.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
            Sin suscripciones mensuales sorpresa. Sin horas extras sin avisar. El alcance está definido desde el día uno.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid md:grid-cols-3 gap-6 items-stretch"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 ${
                plan.highlighted
                  ? 'border-indigo-500/50 shadow-[0_0_60px_rgba(99,102,241,0.2)] bg-[#0D1F5C]/30'
                  : 'border-white/[0.06] bg-[#111827] hover:border-white/[0.12]'
              }`}
            >
              {plan.badge && (
                <div className="bg-indigo-600 text-white text-xs font-semibold text-center py-2 tracking-wide">
                  {plan.badge}
                </div>
              )}

              <div className="p-6 flex flex-col gap-6 flex-1">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{plan.description}</p>
                </div>

                <ul className="flex flex-col gap-3" aria-label={`Qué incluye ${plan.name}`}>
                  {[
                    { icon: <Workflow className="w-4 h-4" />, value: plan.automations },
                    { icon: <Link2 className="w-4 h-4" />, value: plan.integrations },
                    { icon: <Brain className="w-4 h-4" />, value: plan.ai },
                    { icon: <Shield className="w-4 h-4" />, value: plan.support },
                  ].map((feature) => (
                    <li key={feature.value} className="flex items-center gap-3">
                      <span className={`${plan.highlighted ? 'text-indigo-400' : 'text-gray-600'}`} aria-hidden="true">
                        {feature.icon}
                      </span>
                      <span className="text-sm text-gray-300">{feature.value}</span>
                    </li>
                  ))}
                  <li className="border-t border-white/[0.06] pt-3 mt-1">
                    <ul className="flex flex-col gap-2">
                      {plan.extras.map((extra) => (
                        <li key={extra} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-xs text-gray-500">{extra}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>

                <div className="mt-auto pt-4">
                  <a
                    href="#demo"
                    className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                      plan.highlighted
                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]'
                        : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 hover:border-white/20'
                    }`}
                  >
                    Solicitar propuesta
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Nota de confianza */}
        <motion.p
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeIn}
          className="text-center text-sm text-gray-600 mt-10"
        >
          ¿Necesitas algo distinto?{' '}
          <a href="#contacto" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">
            Conversemos sobre tu caso
          </a>
          . Cada empresa es diferente.
        </motion.p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Sección 11: CTA Final
// ─────────────────────────────────────────────

function FinalCTASection() {
  const { ref, isInView } = useSectionInView();

  return (
    <section
      id="demo"
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="cta-headline"
    >
      {/* Fondo degradado */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#0D1F5C]/40 to-[#030712]"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="flex flex-col gap-6 items-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium px-3 py-1.5 rounded-full">
              <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
              Primera Automatización en 2 semanas
            </span>
          </motion.div>

          <motion.h2
            id="cta-headline"
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
              Deja de esperar.
            </span>
            <br />
            <span className="text-white">Tu empresa puede automatizarse ahora.</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            La primera Automatización en 2 semanas. Sin riesgo.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-10 py-4 rounded-2xl text-lg shadow-[0_0_50px_rgba(99,102,241,0.4)] hover:shadow-[0_0_70px_rgba(99,102,241,0.6)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]"
            >
              Solicitar mi demo gratuita
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.p variants={fadeIn} className="text-sm text-gray-600">
            Sin compromiso&nbsp;&nbsp;·&nbsp;&nbsp;Resultado visible en 14 días&nbsp;&nbsp;·&nbsp;&nbsp;Soporte incluido
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Sección 12: Footer
// ─────────────────────────────────────────────

function Footer() {
  const footerColumns = [
    {
      title: 'Producto',
      links: ['Automatizaciones', 'Motor de IA', 'Integraciones', 'Panel de Control', 'Precios'],
    },
    {
      title: 'Empresa',
      links: ['Nosotros', 'Casos de éxito', 'Blog', 'Trabaja con nosotros', 'Contacto'],
    },
    {
      title: 'Recursos',
      links: ['Documentación', 'Guías de implementación', 'API Reference', 'Estado del sistema', 'Comunidad'],
    },
    {
      title: 'Legal',
      links: ['Términos de uso', 'Política de privacidad', 'Política de cookies', 'SLA', 'GDPR / LGPD'],
    },
  ];

  return (
    <footer className="bg-[#0A0F1E] border-t border-white/[0.06]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo y tagline */}
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-1 mb-4 group" aria-label="ProyectoIA — inicio">
              <span className="text-lg font-bold text-white tracking-tight">ProyectoIA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
            </a>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Automatizamos procesos, conectamos sistemas y ponemos el Motor de IA a trabajar por tu empresa.
            </p>
            <div className="flex gap-4" aria-label="Redes sociales">
              {[
                { Icon: Share2, label: 'Twitter / X', href: '#' },
                { Icon: ExternalLink, label: 'LinkedIn', href: '#' },
                { Icon: Code2, label: 'GitHub', href: '#' },
                { Icon: Mail, label: 'Email', href: 'mailto:hola@proyectoia.com' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-indigo-500/20 border border-white/[0.06] hover:border-indigo-500/30 flex items-center justify-center text-gray-500 hover:text-indigo-400 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Columnas de links */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-300 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 rounded"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-700">
            &copy; {new Date().getFullYear()} ProyectoIA. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-700">
            Hecho en{' '}
            <span role="img" aria-label="Latinoamérica">
              🌎
            </span>{' '}
            Latinoamérica
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────
// Componente raíz — LandingPage
// ─────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-indigo-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <ClientLogosSection />
        <PainSection />
        <HowItWorksSection />
        <AIEngineSection />
        <ComparisonSection />
        <ResultsSection />
        <IntegrationsSection />
        <PricingSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}
