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
    const handleScroll = (): void => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = (): void => setMobileOpen(false);
  const toggleMobile = (): void => setMobileOpen((v) => !v);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm',
          'transition-shadow duration-300',
          scrolled && 'shadow-card',
        )}
      >
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between gap-4">
          <NavbarLogo />
          <NavbarMenu />
          <NavbarCtas />
          <MobileMenuTrigger open={mobileOpen} onToggle={toggleMobile} />
        </div>
      </header>
      <MobileMenu open={mobileOpen} onClose={closeMobile} />
    </>
  );
}
