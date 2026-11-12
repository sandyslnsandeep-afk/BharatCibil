import {
  ArrowRight,
  Building2,
  Check,
  FileCheck,
  MessageCircle,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { SITE_MEDIA } from '../assets/media';
import { EnquiryForm } from '../components/EnquiryForm';
import { FaqSection } from '../components/FaqSection';
import { FounderSection } from '../components/FounderSection';
import { ProblemIcon } from '../components/ProblemIcon';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import {
  buildWhatsAppUrl,
  COMMERCIAL_SERVICES_LIST,
  COMMON_CREDIT_PROBLEMS,
  EXPERT_DEFAULT_WHATSAPP_MSG,
  HERO_DEFAULT_WHATSAPP_MSG,
  INDIVIDUAL_SERVICES_LIST,
  PROCESS_STEPS,
  TRUST_CAPABILITIES,
  WHY_BHARAT_CIBIL,
} from '../data/siteData';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId, hash?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const scrollToForm = () => {
    const el = document.getElementById('consultation-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('contact');
    }
  };

  return (
    <div>
      {/* SECTION A: PREMIUM HERO BANNER */}
      <section className="bg-[#0B1E3A] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Hero Copy */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF6A]">
                Independent Indian Credit Consultancy · PAN India
              </p>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.12] tracking-tight text-white">
                Your Credit History Should Reflect the Truth.
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-slate-200 max-w-xl">
                Expert assistance for CIBIL report rectification, credit score improvement and
                commercial credit consultancy across India.
              </p>

              <ul className="space-y-2.5 text-sm text-slate-200 pt-1">
                {[
                  'Individual and Commercial Credit Consultancy',
                  'Assistance with Incorrect Credit Report Entries',
                  'Written-Off and Settled Account Status Review',
                  'Credit Report Analysis and Dispute Assistance',
                  'Professional Documentation and Follow-up',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <Check
                      className="h-4 w-4 shrink-0 text-[#D4AF6A] mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href={buildWhatsAppUrl(HERO_DEFAULT_WHATSAPP_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#087F5B] px-4 sm:px-5 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#066749] sm:whitespace-nowrap"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Get Free Preliminary Consultation</span>
                </a>

                <a
                  href={buildWhatsAppUrl(EXPERT_DEFAULT_WHATSAPP_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-[#142D4E] px-4 sm:px-5 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:border-[#D4AF6A] hover:bg-[#193860] sm:whitespace-nowrap"
                >
                  <span>Talk to Our Expert</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Hero Photography */}
            <div className="lg:col-span-6">
              <div className="relative h-full min-h-[300px] sm:min-h-[380px] overflow-hidden rounded-xl border border-white/15 bg-[#142D4E]">
                <img
                  src={SITE_MEDIA.heroConsultancy}
                  alt="Senior Indian financial consultant reviewing credit report documentation with a client"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B1E3A]/90 via-[#0B1E3A]/45 to-transparent p-5 sm:p-6">
                  <p className="text-xs font-semibold tracking-wide text-[#D4AF6A]">
                    A Better Credit Profile. A Stronger Financial Future.
                  </p>
                  <p className="mt-1 text-xs text-slate-200 max-w-md">
                    Documented and lawful assistance across India&apos;s four RBI-licensed credit
                    bureaus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION B: TRUST AND EXPERTISE CAPABILITY STRIP */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-10 border-t border-white/15">
            {TRUST_CAPABILITIES.map((cap) => (
              <div
                key={cap.index}
                className="rounded-lg border border-white/12 bg-[#142D4E]/75 p-5"
              >
                <div className="text-xs font-semibold tracking-wider text-[#D4AF6A] tabular-nums mb-2">
                  {cap.index}
                </div>
                <h2 className="font-display text-base font-semibold text-white mb-1.5">
                  {cap.title}
                </h2>
                <p className="text-xs leading-relaxed text-slate-300">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C: COMMON CREDIT PROBLEMS */}
      <section className="bg-[#F4F7FA] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#087F5B]">
              Areas of Assistance
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0B1E3A]">
              Common Credit Report Problems We Help Address
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#344054]">
              Every credit report challenge requires factual scrutiny. All rectification requests
              depend on supporting documentary evidence, reporting lender verification, and
              applicable bureau procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_CREDIT_PROBLEMS.map((problem) => (
              <article
                key={problem.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-shadow duration-150 hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#087F5B]/10">
                    <ProblemIcon name={problem.iconName} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0B1E3A]">
                    {problem.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#344054]">{problem.summary}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
                  <p className="text-xs leading-relaxed text-slate-500">{problem.legalNote}</p>
                  <button
                    type="button"
                    onClick={() => onNavigate(problem.targetPage)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F5B] hover:text-[#0B1E3A] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D: OUR SERVICES */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12">
            <div className="max-w-2xl space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#087F5B]">
                Consultancy Practice
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0B1E3A]">
                Dedicated Individual &amp; Commercial Credit Services
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="self-start md:self-auto rounded-md border border-[#0B1E3A] px-4 py-2.5 text-xs font-semibold text-[#0B1E3A] transition-colors hover:bg-[#0B1E3A] hover:text-white whitespace-nowrap"
            >
              Explore All Service Pages
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Individual Credit Consultancy */}
            <div className="flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-[#F4F7FA]">
              <div>
                <div className="aspect-[16/9] w-full overflow-hidden bg-[#0B1E3A]">
                  <img
                    src={SITE_MEDIA.creditReportReview}
                    alt="Detailed individual credit report documentation and audit workspace"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#087F5B]">
                    <UserCheck className="h-4 w-4" aria-hidden="true" />
                    <span>Individual Credit Consultancy</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#0B1E3A]">
                    Personal Credit Report Analysis &amp; Rectification
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {INDIVIDUAL_SERVICES_LIST.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#344054]">
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
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('individual-cibil-rectification')}
                  className="rounded-md bg-[#0B1E3A] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#142D4E]"
                >
                  Individual CIBIL Rectification
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('written-off-settled-account-rectification')}
                  className="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-[#0B1E3A] transition-colors hover:border-[#0B1E3A]"
                >
                  Written-Off &amp; Settled Review
                </button>
              </div>
            </div>

            {/* Commercial Credit Consultancy */}
            <div className="flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-[#F4F7FA]">
              <div>
                <div className="aspect-[16/9] w-full overflow-hidden bg-[#0B1E3A]">
                  <img
                    src={SITE_MEDIA.msmeConsultancy}
                    alt="Indian MSME business owner and financial advisor reviewing commercial credit files"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#087F5B]">
                    <Building2 className="h-4 w-4" aria-hidden="true" />
                    <span>Commercial Credit Consultancy</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#0B1E3A]">
                    Commercial CIBIL &amp; MSME CMR Advisory
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {COMMERCIAL_SERVICES_LIST.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#344054]">
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
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('commercial-cibil-cmr-improvement')}
                  className="rounded-md bg-[#0B1E3A] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#142D4E]"
                >
                  Commercial CIBIL / CMR Services
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('credit-report-analysis')}
                  className="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-[#0B1E3A] transition-colors hover:border-[#0B1E3A]"
                >
                  Credit Report Analysis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: WHY BHARAT CIBIL? */}
      <section className="bg-[#0B1E3A] py-16 sm:py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2.5 mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF6A]">
              Professional Standards
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Why Bharat Cibil?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300">
              {BUSINESS_INFO_SUPPORTING}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_BHARAT_CIBIL.map((diff, idx) => (
              <div
                key={diff.title}
                className="rounded-xl border border-white/12 bg-[#142D4E] p-6 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#D4AF6A] tabular-nums">
                    0{idx + 1}
                  </span>
                  <ShieldCheck className="h-4 w-4 text-[#D4AF6A]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-base font-bold text-white">{diff.title}</h3>
                <p className="text-xs leading-relaxed text-slate-300">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION F: HOW WE WORK */}
      <section className="bg-[#F4F7FA] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12">
            <div className="max-w-2xl space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#087F5B]">
                Structured Workflow
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0B1E3A]">
                How We Work
              </h2>
              <p className="text-sm sm:text-base text-[#344054]">
                A transparent, four-step consultancy methodology from initial review to post-dispute
                verification.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('our-process')}
              className="self-start md:self-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1E3A] hover:text-[#087F5B] transition-colors"
            >
              <span>Read Detailed Process</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-slate-200 bg-white p-6 space-y-3"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="font-display text-2xl font-bold text-[#087F5B] tabular-nums">
                    {item.step}
                  </span>
                  <FileCheck className="h-4 w-4 text-[#D4AF6A]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0B1E3A]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#344054]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION G: FOUNDER'S MESSAGE */}
      <FounderSection onNavigate={onNavigate} showAboutLink />

      {/* SECTION H: CUSTOMER EXPERIENCES */}
      <TestimonialsCarousel />

      {/* SECTION I: CALL TO ACTION */}
      <section className="bg-[#142D4E] py-14 sm:py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl space-y-3">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Don&apos;t Let Credit Report Errors Hold Back Your Financial Plans.
              </h2>
              <p className="text-sm sm:text-base text-slate-200">
                Get your credit report reviewed and understand the available rectification options.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <button
                type="button"
                onClick={scrollToForm}
                className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#0B1E3A] transition-colors hover:bg-slate-100 whitespace-nowrap"
              >
                Request Consultation
              </button>
              <a
                href={buildWhatsAppUrl(HERO_DEFAULT_WHATSAPP_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#087F5B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#066749] whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>WhatsApp Bharat Cibil</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION J: FAQ & CUSTOMER ENQUIRY FORM */}
      <section id="consultation-form" className="bg-[#F4F7FA] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            {/* Left: Customer Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

            {/* Right: Key FAQs */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#087F5B]">
                  Answers &amp; Transparency
                </p>
                <h2 className="font-display text-2xl font-bold text-[#0B1E3A]">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-[#344054]">
                  Clear, realistic answers regarding credit report disputes, timelines, and legal
                  boundaries in India.
                </p>
              </div>
              <FaqSection limit={6} onViewAll={() => onNavigate('faq')} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const BUSINESS_INFO_SUPPORTING =
  'Professional assistance for credit report analysis, rectification of inaccurate credit information and credit score improvement through documented and lawful processes.';
