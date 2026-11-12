import { ChevronRight } from 'lucide-react';
import { PageId } from '../types';

interface BreadcrumbProps {
  items: { label: string; page?: PageId }[];
  onNavigate: (page: PageId) => void;
}

export function Breadcrumb({ items, onNavigate }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-300">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={item.label} className="inline-flex items-center gap-1.5">
            {idx > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />}
            {item.page && !isLast ? (
              <button
                type="button"
                onClick={() => onNavigate(item.page!)}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <span className={isLast ? 'text-[#D4AF6A] font-medium' : ''}>{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
