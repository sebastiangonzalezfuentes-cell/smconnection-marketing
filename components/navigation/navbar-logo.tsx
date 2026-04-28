import Link from 'next/link';
import { Logo } from '@/components/ui/logo';

export function NavbarLogo() {
  return (
    <Link
      href="/"
      aria-label="smconnection — ir al inicio"
      className="shrink-0"
    >
      <Logo size="md" />
    </Link>
  );
}
