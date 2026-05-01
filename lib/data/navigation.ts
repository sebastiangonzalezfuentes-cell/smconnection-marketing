export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdownItem {
  label: string;
  href: string;
  description: string;
}

export interface NavItem {
  label: string;
  href?: string;
  external?: boolean;
  dropdown?: NavDropdownItem[];
}

export const NAV_CONFIG: NavItem[] = [
  {
    label: 'Servicios',
    dropdown: [
      {
        label: 'Discovery Sprint',
        href: '#servicios',
        description: 'Diagnóstico en una semana, sin compromiso.',
      },
      {
        label: 'SaaS Start',
        href: '#servicios',
        description: 'Plataforma lista para activar.',
      },
      {
        label: 'Build Premium',
        href: '#servicios',
        description: 'Software a medida. El código es tuyo.',
      },
      {
        label: 'Project + Support',
        href: '#servicios',
        description: 'Tu operación en producción, con respaldo real.',
      },
    ],
  },
  { label: 'Casos de uso', href: '#casos-de-uso' },
  { label: 'Integraciones', href: '#integraciones' },
  { label: 'Planes', href: '/planes', external: true },
  { label: 'FAQ', href: '#faq' },
];
