import React from 'react';
import Link from 'next/link';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PRICING_PLANS } from '@/lib/data/pricing';
import { cn } from '@/lib/utils/cn';

// ── Estructura de la tabla comparativa ──────────────────────────────────────
//
// Cada categoría agrupa features. El mapeado entre features del pricing.ts y
// las celdas de la tabla se hace por coincidencia parcial de etiqueta.
// Esto evita duplicar los datos y mantiene pricing.ts como fuente única.

interface TableFeature {
  label: string;
  /** Qué substring de PricingFeature.label debe coincidir para buscar el valor */
  matchKey: string;
}

interface TableCategory {
  title: string;
  features: TableFeature[];
}

const TABLE_CATEGORIES: TableCategory[] = [
  {
    title: 'Diagnóstico',
    features: [
      { label: 'Mapeo de procesos actuales',         matchKey: 'Mapeo de procesos' },
      { label: 'Identificación de quick wins',        matchKey: 'quick wins' },
      { label: 'Plan de automatización con ROI',      matchKey: 'ROI' },
      { label: 'Sesión de presentación ejecutiva',    matchKey: 'presentación ejecutiva' },
      { label: 'Entrega en 5 días hábiles',           matchKey: '5 días' },
      { label: 'Garantía de devolución',              matchKey: 'Garantía de devolución' },
    ],
  },
  {
    title: 'Implementación',
    features: [
      { label: 'Desarrollo 100% a medida',            matchKey: 'Desarrollo' },
      { label: 'Código fuente entregado',             matchKey: 'Código fuente' },
      { label: 'Documentación técnica',               matchKey: 'Documentación técnica' },
      { label: 'Capacitación al equipo',              matchKey: 'Capacitación' },
    ],
  },
  {
    title: 'Soporte',
    features: [
      { label: 'Monitoreo 24/7',                      matchKey: 'Monitoreo' },
      { label: 'Soporte técnico prioritario',         matchKey: 'Soporte técnico' },
      { label: 'Ajustes y mejoras mensuales',         matchKey: 'Ajustes' },
      { label: 'Reporte mensual de resultados',       matchKey: 'Reporte' },
      { label: 'SLA garantizado',                     matchKey: 'SLA' },
    ],
  },
  {
    title: 'Comercial',
    features: [
      { label: 'Integraciones ilimitadas',            matchKey: 'Integraciones' },
      { label: 'Nuevas features',                     matchKey: 'features' },
      { label: 'Nuevas integraciones',                matchKey: 'Nuevas integraciones' },
    ],
  },
];

// Busca el estado included para un plan dado el matchKey
function resolveFeatureValue(
  planId: string,
  matchKey: string,
): { included: boolean; note?: string } | null {
  const plan = PRICING_PLANS.find((p) => p.id === planId);
  if (!plan) return null;
  const match = plan.features.find((f) =>
    f.label.toLowerCase().includes(matchKey.toLowerCase()),
  );
  return match ? { included: match.included, note: match.note } : null;
}

// ── Sub-componentes ──────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <Check
      className="mx-auto size-5 text-blue-600"
      aria-hidden="true"
      strokeWidth={2.5}
    />
  );
}

function CrossIcon() {
  return (
    <X
      className="mx-auto size-4 text-neutral-300"
      aria-hidden="true"
      strokeWidth={2}
    />
  );
}

function FeatureCell({
  planId,
  matchKey,
  highlighted,
}: {
  planId: string;
  matchKey: string;
  highlighted: boolean;
}) {
  const value = resolveFeatureValue(planId, matchKey);

  if (!value) {
    return (
      <td
        className={cn(
          'px-4 py-3.5 text-center',
          highlighted ? 'bg-blue-50' : 'bg-white',
        )}
      >
        <CrossIcon />
      </td>
    );
  }

  return (
    <td
      className={cn(
        'px-4 py-3.5 text-center',
        highlighted ? 'bg-blue-50' : 'bg-white',
      )}
    >
      {value.included ? (
        <span title={value.note}>
          <CheckIcon />
          {value.note && (
            <span className="block text-[11px] text-neutral-400 mt-0.5 leading-tight">
              {value.note}
            </span>
          )}
        </span>
      ) : (
        <span title={value.note}>
          <CrossIcon />
          {value.note && (
            <span className="block text-[11px] text-neutral-400 mt-0.5 leading-tight">
              {value.note}
            </span>
          )}
        </span>
      )}
    </td>
  );
}

// ── Tabla desktop ────────────────────────────────────────────────────────────

function DesktopTable() {
  return (
    <div className="hidden md:block overflow-x-auto rounded-radius-2xl border border-neutral-200 shadow-card">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-neutral-200">
            {/* Columna vacía (etiqueta de feature) */}
            <th className="w-[260px] px-6 py-5 text-left bg-neutral-50" scope="col">
              <span className="sr-only">Feature</span>
            </th>

            {PRICING_PLANS.map((plan) => (
              <th
                key={plan.id}
                scope="col"
                className={cn(
                  'px-4 py-5 text-center align-top',
                  plan.highlighted ? 'bg-blue-50' : 'bg-white',
                )}
              >
                <div className="flex flex-col items-center gap-2">
                  {plan.badge && (
                    <span className="inline-block rounded-full bg-blue-600 px-3 py-0.5 text-[11px] font-semibold text-white">
                      {plan.badge}
                    </span>
                  )}
                  <span
                    className={cn(
                      'font-bold text-base',
                      plan.highlighted ? 'text-blue-700' : 'text-neutral-900',
                    )}
                  >
                    {plan.name}
                  </span>
                  <span
                    className={cn(
                      'font-semibold text-xl',
                      plan.highlighted ? 'text-blue-600' : 'text-neutral-900',
                    )}
                  >
                    {plan.price}
                  </span>
                  <span className="text-xs text-neutral-400">{plan.priceNote}</span>
                  <p className="text-xs text-neutral-500 text-balance leading-snug mt-1">
                    {plan.description}
                  </p>
                  <Button
                    variant={plan.highlighted ? 'primary' : 'secondary'}
                    size="sm"
                    asChild
                    className="mt-1 rounded-full w-full"
                  >
                    <Link
                      href={plan.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {plan.cta}
                    </Link>
                  </Button>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {TABLE_CATEGORIES.map((category) => (
            <React.Fragment key={category.title}>
              {/* Fila de categoría */}
              <tr className="border-t border-neutral-100">
                <td
                  colSpan={PRICING_PLANS.length + 1}
                  className="px-6 py-3 bg-neutral-50"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {category.title}
                  </span>
                </td>
              </tr>

              {/* Filas de features */}
              {category.features.map((feature) => (
                <tr
                  key={feature.matchKey}
                  className="border-t border-neutral-100 hover:bg-neutral-50/60 transition-colors"
                >
                  <td className="px-6 py-3.5 text-sm text-neutral-700 bg-white">
                    {feature.label}
                  </td>
                  {PRICING_PLANS.map((plan) => (
                    <FeatureCell
                      key={plan.id}
                      planId={plan.id}
                      matchKey={feature.matchKey}
                      highlighted={!!plan.highlighted}
                    />
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>

        {/* Fila de CTAs al pie */}
        <tfoot>
          <tr className="border-t border-neutral-200">
            <td className="px-6 py-5 bg-neutral-50" />
            {PRICING_PLANS.map((plan) => (
              <td
                key={plan.id}
                className={cn(
                  'px-4 py-5 text-center',
                  plan.highlighted ? 'bg-blue-50' : 'bg-white',
                )}
              >
                <Button
                  variant={plan.highlighted ? 'primary' : 'secondary'}
                  size="sm"
                  asChild
                  className="rounded-full w-full"
                >
                  <Link
                    href={plan.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.cta}
                  </Link>
                </Button>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

// ── Cards mobile ─────────────────────────────────────────────────────────────
// En mobile la tabla colapsa a cards apiladas por plan.

function MobileCard({ plan }: { plan: (typeof PRICING_PLANS)[number] }) {
  return (
    <article
      className={cn(
        'rounded-radius-2xl border overflow-hidden',
        plan.highlighted
          ? 'border-blue-300 shadow-[0_0_0_2px_theme(colors.blue.600/0.15)]'
          : 'border-neutral-200',
      )}
      aria-label={`Plan ${plan.name}`}
    >
      {/* Cabecera del plan */}
      <div
        className={cn(
          'px-5 py-6',
          plan.highlighted ? 'bg-blue-600 text-white' : 'bg-neutral-50',
        )}
      >
        {plan.badge && (
          <span
            className={cn(
              'inline-block rounded-full px-3 py-0.5 text-[11px] font-semibold mb-2',
              plan.highlighted
                ? 'bg-white/20 text-white'
                : 'bg-blue-600 text-white',
            )}
          >
            {plan.badge}
          </span>
        )}
        <h3
          className={cn(
            'font-bold text-lg',
            plan.highlighted ? 'text-white' : 'text-neutral-900',
          )}
        >
          {plan.name}
        </h3>
        <p
          className={cn(
            'font-semibold text-2xl mt-1',
            plan.highlighted ? 'text-white' : 'text-neutral-900',
          )}
        >
          {plan.price}
        </p>
        <p
          className={cn(
            'text-xs mt-0.5',
            plan.highlighted ? 'text-blue-100' : 'text-neutral-400',
          )}
        >
          {plan.priceNote}
        </p>
        <p
          className={cn(
            'text-sm mt-3 leading-relaxed',
            plan.highlighted ? 'text-blue-100' : 'text-neutral-500',
          )}
        >
          {plan.description}
        </p>
        <Button
          variant={plan.highlighted ? 'secondary' : 'primary'}
          size="md"
          asChild
          className="mt-5 w-full rounded-full justify-center"
        >
          <Link
            href={plan.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {plan.cta}
          </Link>
        </Button>
      </div>

      {/* Features agrupadas por categoría */}
      <div className="px-5 py-4 bg-white divide-y divide-neutral-100">
        {TABLE_CATEGORIES.map((category) => (
          <div key={category.title} className="py-3 first:pt-0 last:pb-0">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              {category.title}
            </p>
            <ul className="flex flex-col gap-1.5">
              {category.features.map((feature) => {
                const value = resolveFeatureValue(plan.id, feature.matchKey);
                const included = value?.included ?? false;
                return (
                  <li
                    key={feature.matchKey}
                    className="flex items-start gap-2.5 text-sm"
                  >
                    {included ? (
                      <Check
                        className="size-4 shrink-0 text-blue-600 mt-0.5"
                        aria-hidden="true"
                        strokeWidth={2.5}
                      />
                    ) : (
                      <X
                        className="size-4 shrink-0 text-neutral-300 mt-0.5"
                        aria-hidden="true"
                        strokeWidth={2}
                      />
                    )}
                    <span
                      className={cn(
                        'leading-snug',
                        included ? 'text-neutral-700' : 'text-neutral-400',
                      )}
                    >
                      {feature.label}
                      {value?.note && (
                        <span className="ml-1 text-neutral-400 text-xs">
                          ({value.note})
                        </span>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}

function MobileCards() {
  return (
    <div className="md:hidden flex flex-col gap-6">
      {PRICING_PLANS.map((plan) => (
        <MobileCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
}

// ── Export principal ─────────────────────────────────────────────────────────

export function PlanesTable() {
  return (
    <section
      aria-label="Tabla comparativa de planes"
      className="w-full bg-white px-4 py-8 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <DesktopTable />
        <MobileCards />
      </div>
    </section>
  );
}
