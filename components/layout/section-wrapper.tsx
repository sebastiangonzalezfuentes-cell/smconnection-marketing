import { cn } from '@/lib/utils/cn';

type SectionBackground = 'white' | 'slate' | 'blue-light' | 'dark';

interface SectionWrapperProps {
  children: React.ReactNode;
  background?: SectionBackground;
  className?: string;
  id?: string;
  as?: 'section' | 'div' | 'article';
}

const backgroundClasses: Record<SectionBackground, string> = {
  white: 'bg-white',
  slate: 'bg-neutral-50',
  'blue-light': 'bg-blue-25',
  dark: 'bg-neutral-900',
};

export function SectionWrapper({
  children,
  background = 'white',
  className,
  id,
  as: Tag = 'section',
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'w-full px-4 py-16 md:py-24',
        backgroundClasses[background],
        className,
      )}
    >
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </Tag>
  );
}
