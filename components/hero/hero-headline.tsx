import { GradientText } from '@/components/ui/gradient-text';

export function HeroHeadline() {
  return (
    <h1
      className="text-fluid-hero font-bold leading-tight tracking-tight text-neutral-900 text-balance"
      style={{ fontSize: 'clamp(2.25rem, 5vw + 1rem, 4.5rem)' }}
    >
      Tus procesos{' '}
      <GradientText>en automático.</GradientText>
      <br />
      Tu equipo en lo que importa.
    </h1>
  );
}
