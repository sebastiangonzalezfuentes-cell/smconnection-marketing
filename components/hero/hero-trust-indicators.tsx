import { Zap, Link2, TrendingUp } from 'lucide-react';

const TRUST_INDICATORS = [
  { icon: Zap,        label: '10x más rápido en procesos manuales' },
  { icon: Link2,      label: '+20 integraciones activas en producción' },
  { icon: TrendingUp, label: 'ROI recuperado desde el primer mes' },
];

export function HeroTrustIndicators() {
  return (
    <ul
      className="flex flex-col sm:flex-row flex-wrap gap-3"
      aria-label="Indicadores de confianza"
    >
      {TRUST_INDICATORS.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className="flex items-center gap-2 text-sm font-medium text-neutral-600"
        >
          <Icon className="size-4 text-blue-600 shrink-0" aria-hidden="true" />
          {label}
        </li>
      ))}
    </ul>
  );
}
