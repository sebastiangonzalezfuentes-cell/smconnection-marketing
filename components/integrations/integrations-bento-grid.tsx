import { IntegrationCard } from '@/components/integrations/integration-card';
import { INTEGRATIONS } from '@/lib/data/integrations';

export function IntegrationsBentoGrid() {
  return (
    <div
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      aria-label="Integraciones disponibles"
    >
      {INTEGRATIONS.map((integration) => (
        <IntegrationCard key={integration.id} integration={integration} />
      ))}
    </div>
  );
}
