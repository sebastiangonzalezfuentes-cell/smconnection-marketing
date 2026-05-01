export function HeroHeadline() {
  return (
    <h1
      className="text-center font-bold leading-[1.1] tracking-tight text-neutral-900"
      style={{ fontSize: 'clamp(1.875rem, 3.5vw + 0.5rem, 3.25rem)' }}
    >
      Un solo lugar.{' '}
      Todos tus sistemas.{' '}
      <span className="text-blue-600">Todo bajo control.</span>
    </h1>
  );
}
