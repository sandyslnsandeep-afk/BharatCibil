import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SAMPLE_TESTIMONIALS } from '../data/siteData';
import { BrandMark } from './BrandMark';

interface TestimonialsCarouselProps {
  showAllGrid?: boolean;
}

export function TestimonialsCarousel({ showAllGrid = false }: TestimonialsCarouselProps) {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;
  const total = SAMPLE_TESTIMONIALS.length;

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const displayedItems = showAllGrid
    ? SAMPLE_TESTIMONIALS
    : Array.from({ length: visibleCount }, (_, idx) => SAMPLE_TESTIMONIALS[(startIndex + idx) % total]);

  return (
    <section className="bg-[#F4F7FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-2.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#087F5B]">
              Client Experiences · Sample Layout Preview
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1E3A]">
              How Structured Credit Guidance Helps Clients Navigate Reporting Issues
            </h2>
            <p className="text-sm leading-relaxed text-[#344054]">
              The entries below are clearly labelled <strong>SAMPLE</strong> demo placeholders for
              layout preview. Authentic, permission-based client reviews can be published directly
              from the WordPress Testimonials section.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <BrandMark variant="card" className="inline-flex" />
            {!showAllGrid && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous sample testimonial"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-[#0B1E3A] transition-colors hover:bg-[#0B1E3A] hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next sample testimonial"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-[#0B1E3A] transition-colors hover:bg-[#0B1E3A] hover:text-white"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedItems.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <span className="inline-block border border-amber-300 bg-amber-50 px-2 py-0.5 text-[11px] font-bold tracking-wider text-amber-900">
                    SAMPLE · DEMO PLACEHOLDER
                  </span>
                  <Quote className="h-4 w-4 text-[#D4AF6A]" aria-hidden="true" />
                </div>

                <p className="text-sm leading-relaxed text-[#344054]">“{item.quote}”</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                <div>
                  <p className="font-display text-sm font-bold text-[#0B1E3A]">{item.name}</p>
                  <p className="text-slate-500">
                    {item.location} · {item.category}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
