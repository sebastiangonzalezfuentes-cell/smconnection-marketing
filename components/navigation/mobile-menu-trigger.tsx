'use client';

import { cn } from '@/lib/utils/cn';

interface MobileMenuTriggerProps {
  open: boolean;
  onToggle: () => void;
}

export function MobileMenuTrigger({ open, onToggle }: MobileMenuTriggerProps) {
  return (
    <button
      type="button"
      aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
      aria-expanded={open}
      aria-controls="mobile-menu"
      onClick={onToggle}
      className={cn(
        'md:hidden flex flex-col justify-center items-center',
        'size-10 rounded-radius gap-1.5',
        'hover:bg-neutral-100 transition-colors',
        'min-w-[44px] min-h-[44px]',
      )}
    >
      <span
        className={cn(
          'block h-0.5 w-5 bg-neutral-700 rounded-full transition-all duration-300',
          open && 'translate-y-2 rotate-45',
        )}
      />
      <span
        className={cn(
          'block h-0.5 w-5 bg-neutral-700 rounded-full transition-all duration-300',
          open && 'opacity-0',
        )}
      />
      <span
        className={cn(
          'block h-0.5 w-5 bg-neutral-700 rounded-full transition-all duration-300',
          open && '-translate-y-2 -rotate-45',
        )}
      />
    </button>
  );
}
