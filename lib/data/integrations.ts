export interface Integration {
  id: string;
  name: string;
  category: string;
  initials: string;
  color: string;
  featured?: boolean;
}

export const INTEGRATIONS: Integration[] = [
  { id: 'hubspot',    name: 'HubSpot',    category: 'CRM',           initials: 'HS', color: '#FF7A59' },
  { id: 'salesforce', name: 'Salesforce', category: 'CRM',           initials: 'SF', color: '#00A1E0', featured: true },
  { id: 'slack',      name: 'Slack',      category: 'Comunicación',  initials: 'SL', color: '#4A154B' },
  { id: 'notion',     name: 'Notion',     category: 'Productividad', initials: 'NO', color: '#000000' },
  { id: 'sheets',     name: 'G. Sheets',  category: 'Datos',         initials: 'GS', color: '#34A853', featured: true },
  { id: 'stripe',     name: 'Stripe',     category: 'Pagos',         initials: 'ST', color: '#635BFF' },
  { id: 'whatsapp',   name: 'WhatsApp',   category: 'Comunicación',  initials: 'WA', color: '#25D366', featured: true },
  { id: 'gmail',      name: 'Gmail',      category: 'Email',         initials: 'GM', color: '#EA4335' },
  { id: 'airtable',   name: 'Airtable',   category: 'Datos',         initials: 'AT', color: '#18BFFF' },
  { id: 'zapier',     name: 'Zapier',     category: 'Automatización', initials: 'ZP', color: '#FF4A00' },
  { id: 'typeform',   name: 'Typeform',   category: 'Formularios',   initials: 'TF', color: '#262627' },
  { id: 'openai',     name: 'OpenAI',     category: 'Motor de IA',   initials: 'AI', color: '#10A37F', featured: true },
];
