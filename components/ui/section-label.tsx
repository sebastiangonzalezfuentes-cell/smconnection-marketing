import { cn } from '@/lib/utils/cn';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2',
        'px-3 py-1.5 rounded-full',
        'bg-blue-50 border border-blue-100',
        'text-blue-700 text-sm font-semibold tracking-wide uppercase',
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
      {children}
    </div>
  );
}
