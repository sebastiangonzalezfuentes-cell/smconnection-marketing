import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants/site';

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function buildMetadata({
  title,
  description = 'Automatización empresarial con resultados desde el primer mes. Conectamos tus sistemas, automatizamos las tareas repetitivas e implementamos IA real en tu operación.',
  path = '',
  image = '/og-image.png',
}: BuildMetadataOptions = {}): Metadata {
  const fullTitle = title
    ? `${title} — ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} — Automatización empresarial en Chile`;

  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: 'es_CL',
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}
