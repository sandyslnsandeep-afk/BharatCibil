import { ArrowRight, Check, FileText, MessageCircle, ShieldAlert } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { EnquiryForm } from '../components/EnquiryForm';
import { buildWhatsAppUrl, SERVICE_PAGES } from '../data/siteData';
import { PageId } from '../types';

interface ServiceDetailPageProps {
  serviceId: PageId;
  onNavigate: (page: PageId) => void;
}

export function ServiceDetailPage({ serviceId, onNavigate }: ServiceDetailPageProps) {
  const service = SERVICE_PAGES[serviceId] || SERVICE_PAGES['individual-cibil-rectification'];

  const defaultFormProblem =
    service.id === 'commercial-cibil-cmr-improvement'
      ? 'Commercial CIBIL / CMR'
      : service.id === 'written-off-settled-account-rectification'
        ? 'Written-Off Account'
        : service.id === 'loan-rejection-assistance'
          ? 'Loan Rejection'
          : 'Incorrect Loan Entry';

  return (
    <div>
      {/* Header */}
      <section className="bg-[#0B1E3A] py-14 sm:py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Home', page: 'home' },
              { label: 'Our Services', page: 'services' },
              { label: service.title },
            ]}
            onNavigate={onNavigate}
          />
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF6A]">
              {service.kicker}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-200">
              {service.subtitle}
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={buildWhatsAppUrl(service.whatsappPrefill)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#087F5B] px-5 py-3 text-sm font-semibold text-white hover:bg-[#066749] whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Discuss This Service on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-[#0B1E3A]">
                  Understanding This Consultancy Service
                </h2>
                {service.overview.map((p) => (
                  <p key={p} className="text-base leading-relaxed text-[#344054]">
                    {p}
                  </p>
                ))}
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-[#0B1E3A]">
                  When Should You Consider This Assistance?
                </h2>
                <ul className="space-y-3">
                  {service.whoNeedsThis.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-lg border border-slate-200 bg-[#F4F7FA] p-4 text-sm leading-relaxed text-[#344054]"
                    >
                      <Check
                        className="h-4 w-4 shrink-0 text-[#087F5B] mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-3">
                  <h3 className="font-display text-lg font-bold text-[#0B1E3A]">
                    What We Examine
                  </h3>
                  <ul className="space-y-2 text-sm text-[#344054]">
                    {service.whatWeExamine.map((item) => (
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

                <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-[#0B1E3A]" aria-hidden="true" />
                    <h3 className="font-display text-lg font-bold text-[#0B1E3A]">
                      Typical Documents
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm text-[#344054]">
                    {service.documentsRequired.map((doc) => (
                      <li key={doc} className="flex items-start gap-2">
                        <Check
                          className="h-4 w-4 shrink-0 text-[#087F5B] mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Legal Boundary Notice */}
              <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-6 flex items-start gap-3">
                <ShieldAlert className="h-5 w-5 shrink-0 text-amber-800 mt-0.5" aria-hidden="true" />
                <div className="space-y-1">
                  <h3 className="font-display text-sm font-bold text-[#0B1E3A]">
                    Regulatory &amp; Process Transparency
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#344054]">
                    {service.legalBoundary}
                  </p>
                </div>
              </div>

              {/* Related Internal Links */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <h3 className="font-display text-base font-bold text-[#0B1E3A]">
                  Related Bharat Cibil Services
                </h3>
                <div className="flex flex-wrap gap-3">
                  {service.relatedPages.map((rel) => (
                    <button
                      key={rel.id}
                      type="button"
                      onClick={() => onNavigate(rel.id)}
                      className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-[#0B1E3A] hover:border-[#0B1E3A] hover:bg-[#F4F7FA]"
                    >
                      <span>{rel.label}</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: Pre-targeted Enquiry Form */}
            <div className="lg:col-span-5">
              <EnquiryForm defaultProblem={defaultFormProblem} compact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
