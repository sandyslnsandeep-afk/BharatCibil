import { UserRound } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { useBrand } from '../context/BrandContext';
import { PageId } from '../types';

interface FounderSectionProps {
  onNavigate?: (page: PageId) => void;
  showAboutLink?: boolean;
}

export function FounderSection({ onNavigate, showAboutLink = false }: FounderSectionProps) {
  const { founderPhotoUrl } = useBrand();

  return (
    <section className="bg-white py-16 sm:py-20 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Founder Portrait Placeholder or Uploaded Photo */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-xl border border-slate-200 bg-[#0B1E3A] aspect-[3/4] flex flex-col justify-between">
              {founderPhotoUrl ? (
                <img
                  src={founderPhotoUrl}
                  alt={`${BUSINESS_INFO.founderName}, ${BUSINESS_INFO.founderDesignation}`}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full flex-col justify-between p-8 text-white bg-gradient-to-b from-[#142D4E] to-[#0B1E3A]">
                  <div className="flex items-center justify-between text-xs tracking-wider text-[#D4AF6A] font-semibold">
                    <span>FOUNDER PORTRAIT</span>
                    <span>PLACEHOLDER</span>
                  </div>

                  <div className="my-auto flex flex-col items-center text-center space-y-4">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#D4AF6A]/40 bg-[#0B1E3A] text-[#D4AF6A]">
                      <UserRound className="h-10 w-10" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-display text-lg font-bold text-white">
                        {BUSINESS_INFO.founderName}
                      </p>
                      <p className="text-xs text-slate-300">
                        {BUSINESS_INFO.founderDesignation}
                      </p>
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-400 max-w-[22ch]">
                      Upload founder photograph via WordPress Customizer or Theme Preview Panel
                    </p>
                  </div>

                  <div className="border-t border-white/15 pt-4 text-[11px] text-slate-300 flex items-center justify-between">
                    <span>Bharat Cibil</span>
                    <span>PAN India</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Founder Message */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#087F5B]">
                Founder&apos;s Message
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0B1E3A]">
                Building Better Credit Awareness and Helping People Move Forward.
              </h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-[#344054]">
              <p>
                At Bharat Cibil, our objective is to help individuals and businesses understand their
                credit reports, identify reporting discrepancies and pursue appropriate rectification
                through professional, transparent and documented processes.
              </p>
              <p>
                We believe that every customer deserves clear guidance, honest communication and a
                practical understanding of their credit position.
              </p>
              <p>
                Our approach is built on trust, confidentiality and individual attention.
              </p>
            </div>

            <div className="border-t border-slate-200 pt-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-display text-lg font-bold text-[#0B1E3A]">
                  {BUSINESS_INFO.founderName}
                </p>
                <p className="text-sm text-[#344054]">{BUSINESS_INFO.founderDesignation}</p>
              </div>

              {showAboutLink && onNavigate && (
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="rounded-md border border-[#0B1E3A] px-4 py-2 text-sm font-semibold text-[#0B1E3A] transition-colors hover:bg-[#0B1E3A] hover:text-white"
                >
                  About Bharat Cibil
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
