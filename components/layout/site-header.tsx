import { Navbar } from '@/components/navigation/navbar';

export function SiteHeader() {
  return (
    <>
      <Navbar />
      {/* Spacer = top-4 (16px) + h-14 (56px) del navbar flotante */}
      <div className="h-[72px]" aria-hidden="true" />
    </>
  );
}
