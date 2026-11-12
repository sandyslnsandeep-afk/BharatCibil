import { MessageCircle } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { FaqSection } from '../components/FaqSection';
import { buildWhatsAppUrl, HERO_DEFAULT_WHATSAPP_MSG } from '../data/siteData';
import { PageId } from '../types';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export function FaqPage({ onNavigate }: FaqPageProps) {
  return (
    <div>
      <section className="bg-[#0B1E3A] py-14 sm:py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Home', page: 'home' }, { label: 'Frequently Asked Questions' }]}
            onNavigate={onNavigate}
          />
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF6A]">
              Clarity &amp; Honest Answers
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-200">
              Honest answers on CIBIL rectification, written-off &amp; settled accounts, NOC updates,
              multi-bureau reporting, and realistic timelines.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FA] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          <FaqSection allowCategoryFilter />

          <div className="rounded-xl bg-[#0B1E3A] p-8 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-1">
              <h2 className="font-display text-xl font-bold text-white">
                Still Have Questions About Your Credit Report?
              </h2>
              <p className="text-sm text-slate-300">
                Request a preliminary consultation or chat directly on WhatsApp.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="rounded-md bg-white px-4 py-2.5 text-xs font-semibold text-[#0B1E3A] hover:bg-slate-100"
              >
                Consultation Form
              </button>
              <a
                href={buildWhatsAppUrl(HERO_DEFAULT_WHATSAPP_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#087F5B] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#066749]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>WhatsApp Expert</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
