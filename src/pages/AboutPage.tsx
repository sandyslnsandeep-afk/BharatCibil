import { Check, MessageCircle, ShieldCheck } from 'lucide-react';
import { SITE_MEDIA } from '../assets/media';
import { Breadcrumb } from '../components/Breadcrumb';
import { FounderSection } from '../components/FounderSection';
import {
  buildWhatsAppUrl,
  BUSINESS_INFO,
  HERO_DEFAULT_WHATSAPP_MSG,
  WHY_BHARAT_CIBIL,
} from '../data/siteData';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0B1E3A] py-14 sm:py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Home', page: 'home' }, { label: 'About Bharat Cibil' }]}
            onNavigate={onNavigate}
          />
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF6A]">
              Independent Credit Consultancy · PAN India
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white">
              About Bharat Cibil
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-200">
              {BUSINESS_INFO.tagline} {BUSINESS_INFO.supportingMessage}
            </p>
          </div>
        </div>
      </section>

      {/* Positioning & Principles */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1E3A]">
                Who We Are &amp; How We Position Our Practice
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#344054]">
                Bharat Cibil is an independent Indian credit consultancy established to support
                salaried professionals, self-employed individuals, MSMEs, and loan applicants facing
                credit-report-related difficulties across India.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#344054]">
                Credit report errors—such as closed loans continuing to reflect as active,
                unfamiliar tradelines, incorrect Days Past Due (DPD) entries, or misreported
                settlements—often block genuine borrowers from accessing housing, education, or
                business credit on fair terms. Our role is to bring clarity, structure, and
                documented follow-up to resolving those discrepancies.
              </p>

              <div className="rounded-xl border border-slate-200 bg-[#F4F7FA] p-6 space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0B1E3A]">
                  <ShieldCheck className="h-5 w-5 text-[#087F5B]" aria-hidden="true" />
                  <span>Clear Regulatory Boundaries</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#344054]">
                  {[
                    'Bharat Cibil is an independent consultancy—not a bank, NBFC, lender, or RBI-authorised body.',
                    'We are not affiliated with TransUnion CIBIL or any other credit bureau.',
                    'We never claim the power to directly edit bureau databases or erase genuine defaults.',
                    'All rectifications depend strictly on documentary proof, lender verification, and bureau rules.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check
                        className="h-4 w-4 shrink-0 text-[#087F5B] mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-xl border border-slate-200 aspect-[16/10]">
                <img
                  src={SITE_MEDIA.indianFinancialPlanning}
                  alt="Indian family standing outside modern residential home representing long-term financial clarity"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <FounderSection />

      {/* 8 Differentiators */}
      <section className="bg-[#F4F7FA] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2 mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1E3A]">
              Our Commitment to Every Client
            </h2>
            <p className="text-sm sm:text-base text-[#344054]">
              Eight core principles guiding every consultation across India.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_BHARAT_CIBIL.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 space-y-2"
              >
                <span className="text-xs font-semibold text-[#087F5B] tabular-nums">
                  0{index + 1}
                </span>
                <h3 className="font-display text-base font-bold text-[#0B1E3A]">{item.title}</h3>
                <p className="text-xs leading-relaxed text-[#344054]">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="rounded-md bg-[#0B1E3A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#142D4E]"
            >
              Request Preliminary Consultation
            </button>
            <a
              href={buildWhatsAppUrl(HERO_DEFAULT_WHATSAPP_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#087F5B] px-5 py-3 text-sm font-semibold text-white hover:bg-[#066749]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
