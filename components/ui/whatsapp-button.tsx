'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { SITE_CONFIG } from '@/lib/constants/site';

const SCROLL_THRESHOLD = 400;
const MESSAGE = '¡Hola! Me interesa conocer más sobre sus servicios de automatización.';

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = (): void => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={SITE_CONFIG.whatsappUrl(MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={cn(
        'fixed bottom-6 right-6 z-50',
        'flex items-center justify-center',
        'size-14 rounded-full',
        'bg-[#25D366] text-white shadow-lg',
        'hover:bg-[#1ebe5c] active:scale-95',
        'transition-all duration-300',
        !prefersReduced && 'will-change-transform',
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none',
      )}
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}
