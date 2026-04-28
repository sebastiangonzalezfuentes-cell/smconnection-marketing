import { cn } from '@/lib/utils/cn';
import type { Integration } from '@/lib/data/integrations';

interface IntegrationCardProps {
  integration: Integration;
  className?: string;
}

export function IntegrationCard({ integration, className }: IntegrationCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-3 p-4',
        'rounded-radius-xl bg-white',
        'border border-neutral-200',
        'shadow-bento hover:shadow-bento-hover',
        'transition-all duration-200',
        integration.featured && 'border-blue-100 bg-blue-25',
        className,
      )}
    >
      <div
        className="flex size-12 items-center justify-center rounded-radius-xl text-white text-sm font-bold shadow-sm"
        style={{ backgroundColor: integration.color }}
        aria-hidden="true"
      >
        {integration.initials}
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-neutral-900">{integration.name}</p>
        <p className="text-xs text-neutral-500 mt-0.5">{integration.category}</p>
      </div>
    </div>
  );
}
