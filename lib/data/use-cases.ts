export interface UseCaseStep {
  step: number;
  label: string;
  description: string;
}

export interface UseCase {
  id: string;
  label: string;
  title: string;
  description: string;
  result: string;
  steps: UseCaseStep[];
}

export const USE_CASES: UseCase[] = [
  {
    id: 'onboarding',
    label: 'Onboarding de clientes',
    title: 'Onboarding automático sin fricción',
    description:
      'Cada nuevo cliente dispara un flujo que envía el contrato, solicita los datos, ' +
      'crea la carpeta de proyecto y notifica al equipo responsable — todo en segundos.',
    result: 'De 3 días a 15 minutos por cliente nuevo.',
    steps: [
      { step: 1, label: 'Cliente firma', description: 'El contrato digital dispara el flujo automáticamente.' },
      { step: 2, label: 'Datos capturados', description: 'Formulario inteligente recopila la información necesaria.' },
      { step: 3, label: 'Proyecto creado', description: 'Se crea carpeta, CRM y accesos sin intervención humana.' },
      { step: 4, label: 'Equipo notificado', description: 'El equipo recibe resumen y checklist en Slack o correo.' },
    ],
  },
  {
    id: 'reportes',
    label: 'Reportes automáticos',
    title: 'Reportes que se generan solos',
    description:
      'Cada lunes a las 8am tu gerencia recibe el reporte semanal con KPIs, ventas y alertas — ' +
      'construido automáticamente desde tus fuentes de datos.',
    result: '6 horas semanales de trabajo manual eliminadas.',
    steps: [
      { step: 1, label: 'Datos consolidados', description: 'Se recopilan datos de CRM, ERP y Google Sheets.' },
      { step: 2, label: 'Análisis automático', description: 'Motor de IA detecta variaciones y alertas clave.' },
      { step: 3, label: 'Reporte generado', description: 'PDF o slide listo con gráficos y resumen ejecutivo.' },
      { step: 4, label: 'Distribución', description: 'Enviado a los destinatarios correctos en el horario definido.' },
    ],
  },
  {
    id: 'facturacion',
    label: 'Facturación y cobros',
    title: 'Cobros que no dependen de nadie',
    description:
      'Facturas emitidas automáticamente al cierre de servicio, con recordatorios inteligentes ' +
      'y conciliación bancaria sin intervención manual.',
    result: 'Días de cuentas por cobrar reducidos en un 40%.',
    steps: [
      { step: 1, label: 'Servicio completado', description: 'El hito de entrega dispara la facturación automática.' },
      { step: 2, label: 'Factura emitida', description: 'Documento tributario generado y enviado al cliente.' },
      { step: 3, label: 'Seguimiento activo', description: 'Recordatorios automáticos según fecha de vencimiento.' },
      { step: 4, label: 'Conciliación', description: 'Pago detectado y conciliado con el registro contable.' },
    ],
  },
  {
    id: 'atencion',
    label: 'Atención al cliente',
    title: 'Soporte que responde en segundos',
    description:
      'Un Motor de IA entrenado con tu información responde consultas frecuentes en WhatsApp y email, ' +
      'y escala los casos complejos a tu equipo con contexto completo.',
    result: '70% de consultas resueltas sin intervención humana.',
    steps: [
      { step: 1, label: 'Consulta recibida', description: 'WhatsApp, email o formulario web centralizados.' },
      { step: 2, label: 'Motor de IA responde', description: 'Respuesta inmediata basada en tu base de conocimiento.' },
      { step: 3, label: 'Casos escalados', description: 'Consultas complejas enviadas al humano correcto con contexto.' },
      { step: 4, label: 'Registro automático', description: 'Todo queda documentado en tu CRM sin trabajo manual.' },
    ],
  },
];
