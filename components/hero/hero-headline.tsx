export function HeroHeadline() {
  return (
    <h1
      className="text-center font-bold leading-[1.1] tracking-tight text-neutral-900"
      style={{ fontSize: 'clamp(2.25rem, 5vw + 1rem, 4.5rem)' }}
    >
      Un solo lugar.{' '}
      Todos tus sistemas.{' '}
      <span className="text-blue-600">Todo bajo control.</span>
    </h1>
  );
}
