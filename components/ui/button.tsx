'use client';

import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'whatsapp';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  loading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    'bg-blue-600 text-white',
    'hover:bg-blue-700 active:bg-blue-800',
    'shadow-cta hover:shadow-cta-hover',
    'focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2',
  ].join(' '),
  secondary: [
    'bg-white text-blue-600 border border-blue-200',
    'hover:bg-blue-50 hover:border-blue-300 active:bg-blue-100',
    'shadow-card hover:shadow-card-hover',
  ].join(' '),
  ghost: [
    'bg-transparent text-neutral-700',
    'hover:bg-neutral-100 hover:text-neutral-900 active:bg-neutral-200',
  ].join(' '),
  whatsapp: [
    'bg-[#25D366] text-white',
    'hover:bg-[#1ebe5c] active:bg-[#17a84f]',
    'shadow-cta',
  ].join(' '),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm gap-1.5',
  md: 'h-11 px-6 text-base gap-2',
  lg: 'h-13 px-8 text-lg gap-2.5',
};

export function Button({
  variant = 'primary',
  size = 'md',
  asChild = false,
  loading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center rounded-radius',
        'font-medium leading-none',
        'transition-all duration-200 ease-out',
        'cursor-pointer select-none',
        'min-w-[44px]',
        variantClasses[variant],
        sizeClasses[size],
        (disabled || loading) && 'opacity-60 cursor-not-allowed pointer-events-none',
        className,
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <>
          <span
            className="size-4 rounded-full border-2 border-current border-t-transparent animate-spin"
            aria-hidden="true"
          />
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </Comp>
  );
}
