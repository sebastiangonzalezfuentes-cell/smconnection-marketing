import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants/site';

export function NavbarCtas() {
  return (
    <div className="hidden md:flex items-center gap-3">
      <Button variant="ghost" size="sm" asChild>
        <Link
          href={SITE_CONFIG.whatsappUrl('Hola, me gustaría conocer más sobre smconnection.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </Link>
      </Button>
      <Button variant="primary" size="sm" asChild>
        <Link
          href={SITE_CONFIG.calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agenda gratis
        </Link>
      </Button>
    </div>
  );
}
