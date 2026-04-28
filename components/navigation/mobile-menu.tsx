'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants/site';
import { NAV_CONFIG } from '@/lib/data/navigation';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const prefersReduced = useReducedMotion();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape' && open) onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          initial={prefersReduced ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReduced ? {} : { opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed inset-x-0 top-[var(--header-height,112px)] z-40 bg-white border-b border-neutral-200 shadow-lg"
        >
          <nav className="mx-auto max-w-6xl px-4 py-6 flex flex-col gap-1">
            {NAV_CONFIG.map((item, i) => {
              if (item.dropdown) {
                return (
                  <div key={item.label}>
                    <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      {item.label}
                    </p>
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href + sub.label}
                        href={sub.href}
                        ref={i === 0 ? firstLinkRef : undefined}
                        onClick={onClose}
                        className="block px-3 py-2.5 rounded-radius text-neutral-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href ?? '#'}
                  ref={i === 0 ? firstLinkRef : undefined}
                  onClick={onClose}
                  className="block px-3 py-2.5 rounded-radius text-neutral-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-4 flex flex-col gap-3 border-t border-neutral-100 pt-4">
              <Button variant="secondary" asChild className="w-full justify-center">
                <Link
                  href={SITE_CONFIG.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                >
                  WhatsApp
                </Link>
              </Button>
              <Button variant="primary" asChild className="w-full justify-center">
                <Link
                  href={SITE_CONFIG.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                >
                  Agenda diagnóstico gratis
                </Link>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
