import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl, HERO_DEFAULT_WHATSAPP_MSG } from '../data/siteData';
import { PageId } from '../types';
import { BrandMark } from './BrandMark';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1E3A] text-slate-200 border-t border-[#142D4E]">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-20 sm:px-6 sm:pb-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Positioning */}
          <div className="space-y-4">
            <BrandMark variant="footer" />
            <p className="text-sm leading-relaxed text-slate-300">
              {BUSINESS_INFO.tagline} Independent credit consultancy across India for credit report
              analysis and lawful rectification guidance.
            </p>
            <div className="pt-1">
              <a
                href={buildWhatsAppUrl(HERO_DEFAULT_WHATSAPP_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#087F5B] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#066749] whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>WhatsApp {BUSINESS_INFO.whatsappDisplay}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-[#D4AF6A] mb-4">
              Consultancy Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  All Services Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('individual-cibil-rectification')}
                  className="hover:text-white transition-colors text-left"
                >
                  Individual CIBIL Rectification
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('commercial-cibil-cmr-improvement')}
                  className="hover:text-white transition-colors text-left"
                >
                  Commercial CIBIL / CMR Improvement
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('written-off-settled-account-rectification')}
                  className="hover:text-white transition-colors text-left"
                >
                  Written-Off &amp; Settled Accounts
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('loan-rejection-assistance')}
                  className="hover:text-white transition-colors text-left"
                >
                  Loan Rejection Assistance
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('credit-report-analysis')}
                  className="hover:text-white transition-colors text-left"
                >
                  Credit Report Analysis
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Company */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-[#D4AF6A] mb-4">
              Company &amp; Resources
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Bharat Cibil
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('our-process')}
                  className="hover:text-white transition-colors text-left"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('client-experiences')}
                  className="hover:text-white transition-colors text-left"
                >
                  Client Experiences
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('knowledge-centre')}
                  className="hover:text-white transition-colors text-left"
                >
                  Knowledge Centre / Blog
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Deployment */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-[#D4AF6A] mb-4">
              Legal &amp; Governance
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('privacy-policy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('terms-and-conditions')}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('disclaimer')}
                  className="hover:text-white transition-colors text-left"
                >
                  Regulatory Disclaimer
                </button>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  XML Sitemap
                </a>
              </li>
              <li className="pt-2 border-t border-[#142D4E]">
                <button
                  type="button"
                  onClick={() => onNavigate('wordpress-theme')}
                  className="text-[#D4AF6A] hover:underline transition-colors text-left font-medium"
                >
                  WordPress Theme ZIP &amp; Hostinger Guide
                </button>
              </li>
            </ul>
            <div className="mt-5 space-y-1.5 text-xs leading-relaxed text-slate-300">
              <p>Service Coverage: PAN India</p>
              <p>WhatsApp: {BUSINESS_INFO.whatsappDisplay}</p>
              <p>
                Email:{' '}
                <a
                  href={`mailto:${BUSINESS_INFO.primaryEmail}`}
                  className="text-white hover:text-[#D4AF6A] underline underline-offset-2"
                >
                  {BUSINESS_INFO.primaryEmail}
                </a>
              </p>
              <p>
                Alt. Email:{' '}
                <a
                  href={`mailto:${BUSINESS_INFO.alternateEmail}`}
                  className="text-slate-300 hover:text-white underline underline-offset-2"
                >
                  {BUSINESS_INFO.alternateEmail}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Independence & Security Notice */}
        <div className="mt-12 border-t border-[#142D4E] pt-8 space-y-3 text-xs leading-relaxed text-slate-400">
          <p>
            <strong className="text-slate-200 font-semibold">Independent Consultancy Notice:</strong>{' '}
            Bharat Cibil is an independent credit consultancy founded by Sandiep Shandilya Sharma.
            It is not a bank, NBFC, lender, or RBI-authorised institution, and is not affiliated with
            TransUnion CIBIL Limited, Experian, Equifax, or CRIF High Mark. Credit report corrections
            are subject to documentary verification and confirmation by the concerned lender and
            credit bureau. Never share banking passwords, PINs, or OTPs with anyone.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between pt-2">
            <p>© {year} Bharat Cibil. All rights reserved.</p>
            <p>PAN India Credit Report Analysis &amp; Consultancy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
