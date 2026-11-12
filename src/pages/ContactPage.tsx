import { Clock, Globe, Lock, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import { BrandMark } from '../components/BrandMark';
import { Breadcrumb } from '../components/Breadcrumb';
import { EnquiryForm } from '../components/EnquiryForm';
import { buildWhatsAppUrl, BUSINESS_INFO, HERO_DEFAULT_WHATSAPP_MSG } from '../data/siteData';
import { PageId } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <div>
      <section className="bg-[#0B1E3A] py-14 sm:py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Home', page: 'home' }, { label: 'Contact Us' }]}
            onNavigate={onNavigate}
          />
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF6A]">
              Confidential Preliminary Consultation
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white">
              Contact Bharat Cibil
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-200">
              Complete the consultation form below to prepare your enquiry for WhatsApp, or connect
              directly with Bharat Cibil across India.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FA] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 space-y-5">
                <BrandMark variant="card" />

                <div className="space-y-2 pt-2">
                  <h2 className="font-display text-xl font-bold text-[#0B1E3A]">
                    Direct Consultation Desk
                  </h2>
                  <p className="text-sm leading-relaxed text-[#344054]">
                    For preliminary guidance regarding credit report discrepancies, written-off or
                    settled status reviews, and commercial CMR queries:
                  </p>
                </div>

                <a
                  href={buildWhatsAppUrl(HERO_DEFAULT_WHATSAPP_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#087F5B] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#066749]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>WhatsApp {BUSINESS_INFO.whatsappDisplay}</span>
                </a>

                <div className="space-y-3.5 pt-4 border-t border-slate-100 text-sm text-[#344054]">
                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-[#087F5B] mt-0.5" aria-hidden="true" />
                    <div className="space-y-0.5">
                      <p className="font-semibold text-[#0B1E3A]">Email Consultation</p>
                      <p className="text-xs">
                        <a
                          href={`mailto:${BUSINESS_INFO.primaryEmail}`}
                          className="font-medium text-[#087F5B] hover:underline break-all"
                        >
                          {BUSINESS_INFO.primaryEmail}
                        </a>
                      </p>
                      <p className="text-xs text-slate-600">
                        Alternate:{' '}
                        <a
                          href={`mailto:${BUSINESS_INFO.alternateEmail}`}
                          className="text-[#0B1E3A] hover:underline break-all"
                        >
                          {BUSINESS_INFO.alternateEmail}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="h-4 w-4 shrink-0 text-[#087F5B] mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-[#0B1E3A]">Service Coverage</p>
                      <p className="text-xs text-slate-600">
                        PAN India — All States and Union Territories
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 shrink-0 text-[#087F5B] mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-[#0B1E3A]">Consultation Approach</p>
                      <p className="text-xs text-slate-600">
                        Individual case review by appointment via WhatsApp &amp; phone
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      className="h-4 w-4 shrink-0 text-[#087F5B] mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold text-[#0B1E3A]">Leadership</p>
                      <p className="text-xs text-slate-600">
                        {BUSINESS_INFO.founderName} · {BUSINESS_INFO.founderDesignation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Box */}
              <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-6 flex items-start gap-3">
                <Lock className="h-5 w-5 shrink-0 text-amber-800 mt-0.5" aria-hidden="true" />
                <div className="space-y-1.5">
                  <h3 className="font-display text-sm font-bold text-[#0B1E3A]">
                    Client Information Security Reminder
                  </h3>
                  <p className="text-xs leading-relaxed text-[#344054]">
                    Never share internet banking credentials, ATM PINs, credit card CVVs, or OTPs
                    with anyone claiming to represent Bharat Cibil or any financial institution. Do
                    not upload full sensitive documents through public contact forms.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
