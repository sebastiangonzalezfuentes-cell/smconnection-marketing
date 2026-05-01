import type { Metadata } from 'next';
import { PlanesHero } from '@/components/planes/planes-hero';
import { PlanesTable } from '@/components/planes/planes-table';
import { PlanesFaq } from '@/components/planes/planes-faq';
import { PlanesCta } from '@/components/planes/planes-cta';

export const metadata: Metadata = {
  title: 'Planes y Precios — SmartConnection',
  description: 'Encuentra el plan ideal para automatizar tu empresa.',
};

export default function PlanesPage() {
  return (
    <>
      <PlanesHero />
      <PlanesTable />
      <PlanesFaq />
      <PlanesCta />
    </>
  );
}
