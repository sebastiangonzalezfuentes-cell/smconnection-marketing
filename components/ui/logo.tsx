import { cn } from '@/lib/utils/cn';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
};

export function Logo({ className, size = 'md' }: LogoProps) {
  return (
    <span
      className={cn(
        'font-bold tracking-tight select-none',
        sizeClasses[size],
        className,
      )}
      aria-label="smconnection"
    >
      <span className="text-neutral-900">sm</span>
      <span className="text-blue-600">connection</span>
    </span>
  );
}
