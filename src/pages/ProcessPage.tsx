import { Check, MessageCircle } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { buildWhatsAppUrl, HERO_DEFAULT_WHATSAPP_MSG, PROCESS_STEPS } from '../data/siteData';
import { PageId } from '../types';

interface ProcessPageProps {
  onNavigate: (page: PageId) => void;
}

export function ProcessPage({ onNavigate }: ProcessPageProps) {
  return (
    <div>
      <section className="bg-[#0B1E3A] py-14 sm:py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Home', page: 'home' }, { label: 'Our Process' }]}
            onNavigate={onNavigate}
          />
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF6A]">
              Methodology &amp; Verification
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white">
              How Bharat Cibil Works
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-200">
              A documented, four-step approach grounded in factual assessment, lender verification,
              and lawful credit bureau dispute procedures across India.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-slate-200 bg-[#F4F7FA] p-8 space-y-3"
              >
                <span className="font-display text-3xl font-bold text-[#087F5B] tabular-nums">
                  {step.step}
                </span>
                <h2 className="font-display text-2xl font-bold text-[#0B1E3A]">{step.title}</h2>
                <p className="text-sm sm:text-base leading-relaxed text-[#344054]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0B1E3A]">
                Realistic Timelines &amp; Institutional Verification
              </h2>
              <p className="text-sm leading-relaxed text-[#344054]">
                Credit Information Companies in India (TransUnion CIBIL, Experian, Equifax, and CRIF
                High Mark) cannot alter lender-reported entries on their own. When a dispute is
                submitted, the bureau forwards the request to the reporting bank or NBFC for formal
                confirmation.
              </p>
              <p className="text-sm leading-relaxed text-[#344054]">
                Resolution speed depends on lender verification cycles, accuracy of supporting
                records, and whether escalation to the lender&apos;s Nodal Officer is required.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold text-[#0B1E3A]">
                What We Never Do
              </h3>
              <ul className="space-y-2.5 text-sm text-[#344054]">
                {[
                  'We never request your internet banking passwords, ATM PINs, or OTPs.',
                  'We never claim backdoor access to alter credit bureau records.',
                  'We never promise overnight deletion of genuine, accurately reported defaults.',
                  'We never guarantee loan approval or a specific numerical credit score.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 shrink-0 text-[#087F5B] mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="rounded-md bg-[#0B1E3A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#142D4E]"
            >
              Start Step 01: Free Preliminary Consultation
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
