import { Badge } from '@/components/ui/badge';

interface ServiceBadgeProps {
  badge: string;
  price: string;
}

export function ServiceBadge({ badge, price }: ServiceBadgeProps) {
  if (badge === 'popular') {
    return <Badge variant="popular">Más elegido</Badge>;
  }
  if (badge === 'coming-soon') {
    return <Badge variant="coming-soon">Próximamente</Badge>;
  }
  return <Badge variant="price">{price}</Badge>;
}
