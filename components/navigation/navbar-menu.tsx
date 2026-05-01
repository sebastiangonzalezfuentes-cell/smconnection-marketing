'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { NAV_CONFIG, type NavDropdownItem } from '@/lib/data/navigation';
import { cn } from '@/lib/utils/cn';

function ServicesDropdown({ items }: { items: NavDropdownItem[] }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = useCallback((): void => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }, []);

  const closeDropdown = useCallback((): void => {
    timeoutRef.current = setTimeout(() => setOpen(false), 100);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          'flex items-center gap-1 px-3 py-2 rounded-radius',
          'text-sm font-medium text-neutral-700',
          'hover:bg-neutral-100 hover:text-neutral-900',
          'transition-colors duration-150',
        )}
      >
        Servicios
        <ChevronDown
          className={cn(
            'size-4 text-neutral-400 transition-transform duration-200',
            open && 'rotate-180',
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="menu"
          className={cn(
            'absolute top-full left-0 mt-1 w-64',
            'bg-white rounded-radius-xl border border-neutral-200 shadow-card',
            'py-1 z-50',
          )}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          {items.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              role="menuitem"
              className={cn(
                'block px-4 py-3',
                'hover:bg-blue-50 transition-colors',
              )}
            >
              <span className="block text-sm font-semibold text-neutral-900">{item.label}</span>
              <span className="block text-xs text-neutral-500 mt-0.5">{item.description}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function NavbarMenu() {
  return (
    <nav
      aria-label="Navegación principal"
      className="hidden md:flex items-center gap-1"
    >
      {NAV_CONFIG.map((item) => {
        if (item.dropdown) {
          return <ServicesDropdown key={item.label} items={item.dropdown} />;
        }
        return (
          <Link
            key={item.href}
            href={item.href ?? '#'}
            {...(item.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className={cn(
              'px-3 py-2 rounded-radius',
              'text-sm font-medium text-neutral-700',
              'hover:bg-neutral-100 hover:text-neutral-900',
              'transition-colors duration-150',
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
