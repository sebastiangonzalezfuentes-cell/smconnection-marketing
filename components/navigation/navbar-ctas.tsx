import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants/site';

export function NavbarCtas() {
  return (
    <div className="flex items-center">
      <Button variant="primary" size="sm" asChild>
        <Link
          href={SITE_CONFIG.calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Haz crecer tu negocio >
        </Link>
      </Button>
    </div>
  );
}
