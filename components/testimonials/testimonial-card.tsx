import { Star } from 'lucide-react';
import type { Testimonial } from '@/lib/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex flex-col gap-4 rounded-radius-2xl bg-white border border-neutral-200 shadow-card p-6">
      {/* Stars */}
      <div className="flex gap-1" aria-label="5 estrellas de 5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="size-4 fill-amber-400 text-amber-400"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote>
        <p className="text-neutral-700 leading-relaxed text-sm italic">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      {/* Metric */}
      {testimonial.metric && (
        <div className="inline-flex items-center gap-2 self-start rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5">
          <span className="text-lg font-bold text-blue-600">{testimonial.metric}</span>
          <span className="text-xs text-blue-700 font-medium">{testimonial.metricLabel}</span>
        </div>
      )}

      {/* Author */}
      <figcaption className="flex items-center gap-3 mt-auto pt-4 border-t border-neutral-100">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold"
          aria-hidden="true"
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-900">{testimonial.author}</p>
          <p className="text-xs text-neutral-500">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
