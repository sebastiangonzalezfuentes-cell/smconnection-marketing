'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants/site';
import { NAV_CONFIG } from '@/lib/data/navigation';
import { cn } from '@/lib/utils/cn';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const prefersReduced = useReducedMotion();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setOpenDropdown(null);
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

  const toggleDropdown = (label: string): void => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="md:hidden fixed inset-0 z-40 bg-neutral-900/50 backdrop-blur-sm"
          />

          {/* Drawer lateral desde la derecha */}
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            initial={prefersReduced ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={prefersReduced ? {} : { x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="md:hidden fixed inset-y-0 right-0 z-50 w-[min(320px,85vw)] bg-white flex flex-col shadow-2xl"
          >
            {/* Header del drawer */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
              <span className="font-semibold text-neutral-900 text-sm">SmartConnection</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar menú"
                className="flex items-center justify-center size-9 rounded-xl hover:bg-neutral-100 transition-colors text-neutral-500"
              >
                <X size={18} />
              </button>
            </div>

            {/* Links de navegación */}
            <nav className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-1">
              {NAV_CONFIG.map((item, i) => {
                if (item.dropdown) {
                  const isOpen = openDropdown === item.label;
                  return (
                    <div key={item.label}>
                      {/* Trigger acordeón */}
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggleDropdown(item.label)}
                        className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-neutral-700 hover:bg-neutral-50 font-medium transition-colors text-sm"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={cn(
                            'text-neutral-400 transition-transform duration-200',
                            isOpen && 'rotate-180',
                          )}
                          aria-hidden="true"
                        />
                      </button>

                      {/* Contenido del dropdown con animación */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={prefersReduced ? false : { height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={prefersReduced ? {} : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="pl-2 pb-1 flex flex-col gap-0.5">
                              {item.dropdown.map((sub, si) => (
                                <Link
                                  key={sub.href + sub.label}
                                  href={sub.href}
                                  ref={i === 0 && si === 0 ? firstLinkRef : undefined}
                                  onClick={onClose}
                                  className="flex flex-col px-3 py-2.5 rounded-xl text-neutral-700 hover:bg-blue-50 hover:text-blue-700 transition-colors group"
                                >
                                  <span className="text-sm font-medium leading-tight">{sub.label}</span>
                                  {sub.description && (
                                    <span className="text-xs text-neutral-400 group-hover:text-blue-500 mt-0.5 leading-snug">
                                      {sub.description}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href ?? '#'}
                    ref={i === 0 ? firstLinkRef : undefined}
                    onClick={onClose}
                    className="flex items-center px-3 py-3 rounded-xl text-neutral-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA al fondo */}
            <div className="px-4 py-5 border-t border-neutral-100">
              <Button variant="primary" asChild className="w-full justify-center">
                <Link
                  href={SITE_CONFIG.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                >
                  Haz crecer tu negocio >
                </Link>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
