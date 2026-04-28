import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants/site';

export function AnnouncementBar() {
  return (
    <div
      className="w-full bg-blue-600 text-white text-sm py-2 px-4 text-center"
      role="banner"
    >
      <p className="max-w-3xl mx-auto">
        <span className="font-medium">
          Discovery Sprint desde 19 UF
        </span>
        {' '}— Diagnóstico en una semana, sin compromiso. Cupos limitados este mes.{' '}
        <Link
          href={SITE_CONFIG.calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 font-semibold hover:text-blue-100 transition-colors"
        >
          Agendar ahora
        </Link>
      </p>
    </div>
  );
}
