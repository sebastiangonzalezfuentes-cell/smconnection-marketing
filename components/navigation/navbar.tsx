'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils/cn';
import { NavbarLogo } from '@/components/navigation/navbar-logo';
import { NavbarMenu } from '@/components/navigation/navbar-menu';
import { NavbarCtas } from '@/components/navigation/navbar-ctas';
import { MobileMenuTrigger } from '@/components/navigation/mobile-menu-trigger';
import { MobileMenu } from '@/components/navigation/mobile-menu';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = (): void => setMobileOpen(false);
  const toggleMobile = (): void => setMobileOpen((v) => !v);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4 pointer-events-none">
        <div
          className={cn(
            'mx-auto max-w-6xl pointer-events-auto',
            'h-14 px-4 flex items-center justify-between gap-4',
            'bg-white/90 backdrop-blur-md',
            'border border-neutral-200 rounded-2xl',
            'transition-all duration-300',
            scrolled
              ? 'shadow-[0_8px_32px_-4px_rgb(0_0_0/0.12),0_2px_8px_-2px_rgb(0_0_0/0.08)]'
              : 'shadow-[0_2px_8px_-2px_rgb(0_0_0/0.06)]',
          )}
        >
          <NavbarLogo />
          <div className="flex items-center gap-2">
            <NavbarMenu />
            <NavbarCtas />
            <MobileMenuTrigger open={mobileOpen} onToggle={toggleMobile} />
          </div>
        </div>
      </header>
      <MobileMenu open={mobileOpen} onClose={closeMobile} />
    </>
  );
}
