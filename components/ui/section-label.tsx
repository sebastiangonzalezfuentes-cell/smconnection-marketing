import { cn } from '@/lib/utils/cn';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn('section-label-wrapper', className)}>
      <span className="section-label-text">{children}</span>
    </div>
  );
}
