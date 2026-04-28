export const SITE_CONFIG = {
  name: 'smconnection',
  url: 'https://smconnection.cl',
  phone: '+56955361419',
  email: 'contacto@smconnection.cl',
  address: 'Barros Borgoño 71, Providencia, Santiago',
  whatsappUrl: (message?: string): string => {
    const base = 'https://wa.me/56955361419';
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
  },
  calendarUrl: 'https://cal.com/smconnection/diagnostico',
} as const;
