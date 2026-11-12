import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/siteData';

interface FaqSectionProps {
  limit?: number;
  allowCategoryFilter?: boolean;
  onViewAll?: () => void;
}

export function FaqSection({
  limit,
  allowCategoryFilter = false,
  onViewAll,
}: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Rectification', 'Commercial', 'Process'];

  const filtered = FAQ_ITEMS.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );
  const items = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="space-y-6">
      {allowCategoryFilter && (
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-md px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#0B1E3A] text-white'
                  : 'bg-white border border-slate-200 text-[#344054] hover:border-[#0B1E3A]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
        {items.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="px-5 sm:px-6">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-2 focus-visible:outline-[#0B1E3A]"
              >
                <span className="font-display text-base font-semibold text-[#0B1E3A]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-[#087F5B] transition-transform duration-150 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <div className="pb-5 text-sm leading-relaxed text-[#344054]">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {onViewAll && (
        <div className="pt-2">
          <button
            type="button"
            onClick={onViewAll}
            className="rounded-md border border-[#0B1E3A] px-5 py-2.5 text-sm font-semibold text-[#0B1E3A] transition-colors hover:bg-[#0B1E3A] hover:text-white"
          >
            View All 12 Frequently Asked Questions
          </button>
        </div>
      )}
    </div>
  );
}
