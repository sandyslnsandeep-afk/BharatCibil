import { Info, MessageCircle } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { buildWhatsAppUrl, HERO_DEFAULT_WHATSAPP_MSG } from '../data/siteData';
import { PageId } from '../types';

interface ExperiencesPageProps {
  onNavigate: (page: PageId) => void;
}

export function ExperiencesPage({ onNavigate }: ExperiencesPageProps) {
  return (
    <div>
      <section className="bg-[#0B1E3A] py-14 sm:py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Home', page: 'home' }, { label: 'Client Experiences' }]}
            onNavigate={onNavigate}
          />
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF6A]">
              Sample Design Preview · Permission-Based Reviews
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white">
              Client Experiences
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-200">
              Preview how client consultation experiences are presented across Bharat Cibil. All
              entries shown below are clearly marked as sample placeholders until replaced with
              authentic, permission-based reviews.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-amber-50 border-b border-amber-200">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex items-start gap-3 text-xs sm:text-sm text-amber-950">
          <Info className="h-4 w-4 shrink-0 mt-0.5 text-amber-800" aria-hidden="true" />
          <p>
            <strong>Transparency Notice:</strong> Bharat Cibil does not publish fabricated reviews
            as real testimonials. In the accompanying WordPress theme, you can manage, edit, or
            replace these sample items directly from <em>Dashboard → Testimonials</em> once verified
            client feedback is received.
          </p>
        </div>
      </div>

      <TestimonialsCarousel showAllGrid />

      <section className="bg-white py-12 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="font-display text-xl font-bold text-[#0B1E3A]">
              Need Clarity on Your Own Credit Report?
            </h2>
            <p className="text-sm text-[#344054]">
              Book a confidential preliminary discussion with Bharat Cibil.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="rounded-md bg-[#0B1E3A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#142D4E]"
            >
              Request Consultation
            </button>
            <a
              href={buildWhatsAppUrl(HERO_DEFAULT_WHATSAPP_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#087F5B] px-5 py-3 text-sm font-semibold text-white hover:bg-[#066749]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>WhatsApp Bharat Cibil</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
