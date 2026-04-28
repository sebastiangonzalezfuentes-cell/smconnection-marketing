export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Cuánto tiempo tarda una implementación?',
    answer:
      'Depende del alcance. El Discovery Sprint toma 5 días hábiles. Una automatización simple ' +
      '(como un flujo de onboarding o reportes automáticos) está lista en 2–3 semanas. ' +
      'Proyectos Build Premium más complejos van de 4 a 12 semanas según alcance.',
  },
  {
    id: 'faq-2',
    question: '¿Necesito tener conocimientos técnicos para trabajar con ustedes?',
    answer:
      'No. Nos adaptamos completamente a tu nivel. Trabajamos con los dueños de negocio, ' +
      'gerentes y equipos operativos. Tú describes el problema, nosotros lo resolvemos técnicamente.',
  },
  {
    id: 'faq-3',
    question: '¿Qué pasa si el Discovery Sprint no encuentra valor en automatizar?',
    answer:
      'Te devolvemos lo invertido. Esa es nuestra garantía. En la práctica, ' +
      'siempre encontramos procesos automatizables — el Discovery Sprint es para priorizar ' +
      'dónde impactar primero, no si hay algo que automatizar.',
  },
  {
    id: 'faq-4',
    question: '¿Con qué sistemas se pueden integrar?',
    answer:
      'Con más de 20 sistemas en producción actualmente: HubSpot, Salesforce, Google Workspace, ' +
      'WhatsApp Business, Slack, Stripe, sistemas ERP, bases de datos SQL, APIs REST, ' +
      'entre otros. Si tienes un sistema específico en mente, lo evaluamos en el Discovery Sprint.',
  },
  {
    id: 'faq-5',
    question: '¿El código desarrollado es nuestro?',
    answer:
      'Sí. En el servicio Build Premium, todo el código fuente, documentación y activos digitales ' +
      'desarrollados son propiedad tuya. No hay dependencia de licencias ni de nuestra empresa.',
  },
  {
    id: 'faq-6',
    question: '¿Cómo se garantiza la seguridad de los datos?',
    answer:
      'Firmamos NDA antes de cualquier acceso a tus sistemas. Las integraciones se realizan ' +
      'con credenciales limitadas a lo necesario. No almacenamos datos de tu operación en ' +
      'nuestros servidores salvo que sea parte del diseño acordado. Seguimos buenas prácticas ' +
      'de seguridad en cada implementación.',
  },
  {
    id: 'faq-7',
    question: '¿Trabajan con empresas de cualquier tamaño?',
    answer:
      'Principalmente con empresas medianas y grandes (50+ colaboradores), donde el costo ' +
      'de los procesos manuales ya es significativo. Dicho eso, si eres una empresa pequeña ' +
      'con procesos claramente automatizables, agenda una llamada y lo evaluamos.',
  },
  {
    id: 'faq-8',
    question: '¿Qué incluye el soporte post-implementación?',
    answer:
      'Una vez entregado el proyecto, incluimos 3 meses de garantía técnica en Build Premium. ' +
      'Para soporte continuo, monitoreo y mejoras iterativas, está el servicio Project + Support ' +
      'con contrato mensual. Nunca te dejamos solo después de entregar.',
  },
];
