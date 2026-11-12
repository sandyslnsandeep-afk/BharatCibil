import { ArrowRight, Building2, Check, MessageCircle, UserCheck } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProblemIcon } from '../components/ProblemIcon';
import {
  buildWhatsAppUrl,
  COMMERCIAL_SERVICES_LIST,
  COMMON_CREDIT_PROBLEMS,
  HERO_DEFAULT_WHATSAPP_MSG,
  INDIVIDUAL_SERVICES_LIST,
  SERVICE_PAGES,
} from '../data/siteData';
import { PageId } from '../types';

interface ServicesOverviewPageProps {
  onNavigate: (page: PageId) => void;
}

export function ServicesOverviewPage({ onNavigate }: ServicesOverviewPageProps) {
  const dedicatedServices = Object.values(SERVICE_PAGES);

  return (
    <div>
      <section className="bg-[#0B1E3A] py-14 sm:py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Home', page: 'home' }, { label: 'Our Services' }]}
            onNavigate={onNavigate}
          />
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF6A]">
              Individual &amp; Commercial Credit Advisory
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white">
              Our Credit Consultancy Services
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-200">
              Comprehensive, document-based assistance for individuals, families, and MSMEs across
              India—focused on credit report accuracy and practical resolution.
            </p>
          </div>
        </div>
      </section>

      {/* Core Specialized Service Pages */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2 mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1E3A]">
              Specialised Practice Areas
            </h2>
            <p className="text-sm sm:text-base text-[#344054]">
              Select a dedicated service area below to inspect scope, required documentation, and
              regulatory procedure.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dedicatedServices.map((svc, idx) => (
              <div
                key={svc.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F4F7FA] p-6"
              >
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-[#087F5B] tabular-nums">
                    0{idx + 1} · {svc.kicker}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#0B1E3A]">{svc.title}</h3>
                  <p className="text-sm leading-relaxed text-[#344054]">{svc.subtitle}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onNavigate(svc.id)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1E3A] hover:text-[#087F5B] transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <a
                    href={buildWhatsAppUrl(svc.whatsappPrefill)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#087F5B] hover:underline"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual vs Commercial Matrix */}
      <section className="bg-[#F4F7FA] py-16 border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-8 space-y-5">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#087F5B]">
                <UserCheck className="h-4 w-4" aria-hidden="true" />
                <span>Individual Credit Consultancy</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#0B1E3A]">
                For Individuals &amp; Retail Borrowers
              </h2>
              <ul className="space-y-2.5">
                {INDIVIDUAL_SERVICES_LIST.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#344054]">
                    <Check className="h-4 w-4 shrink-0 text-[#087F5B] mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8 space-y-5">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#087F5B]">
                <Building2 className="h-4 w-4" aria-hidden="true" />
                <span>Commercial Credit Consultancy</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#0B1E3A]">
                For Businesses, Proprietors &amp; MSMEs
              </h2>
              <ul className="space-y-2.5">
                {COMMERCIAL_SERVICES_LIST.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#344054]">
                    <Check className="h-4 w-4 shrink-0 text-[#087F5B] mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 12 Common Credit Problems Directory */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2 mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1E3A]">
              Specific Credit Report Issues We Review
            </h2>
            <p className="text-sm sm:text-base text-[#344054]">
              Rectification depends strictly on factual verification, supporting records, and lender
              confirmation with the relevant credit bureau.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_CREDIT_PROBLEMS.map((problem) => (
              <div
                key={problem.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F4F7FA] p-6"
              >
                <div className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200">
                    <ProblemIcon name={problem.iconName} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0B1E3A]">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-[#344054]">{problem.summary}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 space-y-2">
                  <p className="text-xs text-slate-500">{problem.legalNote}</p>
                  <button
                    type="button"
                    onClick={() => onNavigate(problem.targetPage)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#087F5B] hover:text-[#0B1E3A]"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-[#0B1E3A] p-8 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-1.5">
              <h3 className="font-display text-xl font-bold text-white">
                Unsure Which Service Applies to Your Credit Report?
              </h3>
              <p className="text-sm text-slate-300">
                Speak directly with Bharat Cibil on WhatsApp for a preliminary assessment.
              </p>
            </div>
            <a
              href={buildWhatsAppUrl(HERO_DEFAULT_WHATSAPP_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#087F5B] px-5 py-3 text-sm font-semibold text-white hover:bg-[#066749] whitespace-nowrap shrink-0"
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
