import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { SITE_CONFIG } from '@/lib/constants/site';

export function SiteFooter() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Ir al inicio">
              <Logo size="md" className="[&_span]:text-neutral-0 [&_span:last-child]:text-blue-400" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Automatización empresarial con resultados desde el primer mes.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-0">
              Servicios
            </h3>
            <ul className="space-y-2.5 text-sm">
              {['Discovery Sprint', 'SaaS Start', 'Build Premium', 'Project + Support'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#servicios"
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Empresa + Recursos */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-0">
              Empresa
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Nosotros', href: '#' },
                { label: 'Casos de uso', href: '#casos-de-uso' },
                { label: 'Integraciones', href: '#integraciones' },
                { label: 'Blog', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-0">
              Recursos
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Calculadora de ahorro', href: '#calculadora' },
                { label: 'Preguntas frecuentes', href: '#faq' },
                { label: 'Política de privacidad', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-0">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-blue-400" aria-hidden="true" />
                <span>Barros Borgoño 71, Providencia, Santiago</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-blue-400" aria-hidden="true" />
                <a
                  href={SITE_CONFIG.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +56 9 5536 1419
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-blue-400" aria-hidden="true" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-8">
          <p className="text-center text-xs text-neutral-500">
            © 2025 smconnection.cl — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
