import { Breadcrumb } from '../components/Breadcrumb';
import { BUSINESS_INFO } from '../data/siteData';
import { PageId } from '../types';

interface LegalPageProps {
  pageId: 'privacy-policy' | 'terms-and-conditions' | 'disclaimer';
  onNavigate: (page: PageId) => void;
}

export function LegalPage({ pageId, onNavigate }: LegalPageProps) {
  const titles = {
    'privacy-policy': 'Privacy Policy',
    'terms-and-conditions': 'Terms and Conditions',
    disclaimer: 'Regulatory & Consultancy Disclaimer',
  };

  return (
    <div>
      <section className="bg-[#0B1E3A] py-12 sm:py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Home', page: 'home' }, { label: titles[pageId] }]}
            onNavigate={onNavigate}
          />
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {titles[pageId]}
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Bharat Cibil · Independent Credit Consultancy (PAN India)
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base leading-relaxed text-[#344054]">
          <div className="rounded-lg border border-amber-200 bg-amber-50/70 p-4 text-xs sm:text-sm text-amber-950">
            <strong>Legal Review Note:</strong> These legal policy documents align with Indian
            credit-information and data-protection principles (including CICRA 2005 and DPDP Act
            principles). Please have your legal counsel review and confirm final entity specifics
            before commercial publication.
          </div>

          {pageId === 'privacy-policy' && (
            <>
              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold text-[#0B1E3A]">
                  1. Overview &amp; Scope
                </h2>
                <p>
                  Bharat Cibil (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) respects the
                  privacy and confidentiality of every individual and business owner seeking credit
                  consultancy assistance across India. This Privacy Policy describes how consultation
                  enquiry details submitted via our website or WhatsApp ({BUSINESS_INFO.whatsappDisplay})
                  are handled.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold text-[#0B1E3A]">
                  2. Information Collected During Consultation Enquiries
                </h2>
                <p>
                  When you submit the preliminary consultation form, your browser formats your Name,
                  Mobile Number, WhatsApp Number, City, State, Customer Category, Problem Type, and
                  brief description directly into a WhatsApp message to Bharat Cibil. Submitted
                  information is never published publicly on this website.
                </p>
                <p>
                  During active consultancy engagements, clients may voluntarily share credit report
                  extracts, No Objection Certificates (NOCs), closure letters, or repayment receipts
                  strictly for the purpose of evaluating and drafting documented disputes.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold text-[#0B1E3A]">
                  3. Strict Prohibition on Banking Credentials &amp; OTPs
                </h2>
                <p>
                  Bharat Cibil never requests internet banking usernames, passwords, ATM PINs,
                  card CVVs, or One-Time Passwords (OTPs). Clients are advised never to transmit
                  sensitive credentials through any public website form.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold text-[#0B1E3A]">
                  4. Purpose Limitation &amp; Data Protection
                </h2>
                <p>
                  In alignment with Indian digital personal data protection principles (Digital
                  Personal Data Protection Act framework), client records are used solely for
                  providing requested consultancy guidance and preparing client-authorised
                  representations. We do not sell, rent, or trade client personal information to
                  third-party loan aggregators or telemarketers.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold text-[#0B1E3A]">
                  5. Consent Withdrawal &amp; Contact
                </h2>
                <p>
                  You may request deletion or stop further communication regarding your enquiry data
                  at any time by writing to{' '}
                  <a
                    href={`mailto:${BUSINESS_INFO.primaryEmail}`}
                    className="font-semibold text-[#087F5B] underline"
                  >
                    {BUSINESS_INFO.primaryEmail}
                  </a>{' '}
                  (or{' '}
                  <a
                    href={`mailto:${BUSINESS_INFO.alternateEmail}`}
                    className="font-semibold text-[#087F5B] underline"
                  >
                    {BUSINESS_INFO.alternateEmail}
                  </a>
                  ) or contacting Bharat Cibil on WhatsApp at {BUSINESS_INFO.whatsappDisplay}.
                </p>
              </div>
            </>
          )}

          {pageId === 'terms-and-conditions' && (
            <>
              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold text-[#0B1E3A]">
                  1. Nature of Services
                </h2>
                <p>
                  Bharat Cibil provides independent credit report analysis, documentation review,
                  dispute drafting guidance, and commercial credit consultancy (including CIBIL MSME
                  Rank / CMR advisory). By using this website or engaging our consultancy, you
                  acknowledge that Bharat Cibil acts strictly as an independent advisor.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold text-[#0B1E3A]">
                  2. No Guarantee of Score or Loan Outcomes
                </h2>
                <p>
                  Credit bureau modifications occur solely when the concerned bank, NBFC, or lending
                  institution verifies supporting evidence and updates its reporting with Credit
                  Information Companies under applicable RBI and CICRA norms. Accordingly, Bharat
                  Cibil does not guarantee a specific credit score increase, removal of genuine
                  defaults, or approval of any loan or credit facility.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold text-[#0B1E3A]">
                  3. Client Responsibilities
                </h2>
                <p>
                  Clients must provide accurate, authentic, and lawful supporting documents (such as
                  genuine NOCs, statements of account, and settlement receipts). Submitting forged
                  or altered financial documents is strictly prohibited and will result in immediate
                  termination of consultancy engagement.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold text-[#0B1E3A]">
                  4. Timelines &amp; Third-Party Dependency
                </h2>
                <p>
                  Resolution timelines vary case by case and depend upon reporting lender response
                  cycles, nodal office reviews, and statutory credit bureau verification intervals.
                </p>
              </div>
            </>
          )}

          {pageId === 'disclaimer' && (
            <>
              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold text-[#0B1E3A]">
                  Independent Consultancy Status
                </h2>
                <p>
                  Bharat Cibil is an independent credit consultancy founded by{' '}
                  {BUSINESS_INFO.founderName}. Bharat Cibil is <strong>not</strong> a bank,
                  Non-Banking Financial Company (NBFC), lender, financial institution, or
                  Reserve Bank of India (RBI)-authorised entity.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold text-[#0B1E3A]">
                  No Affiliation with Credit Bureaus
                </h2>
                <p>
                  Bharat Cibil is not affiliated with, endorsed by, or acting as an agent of
                  TransUnion CIBIL Limited, Experian Credit Information Company of India, Equifax
                  Credit Information Services, or CRIF High Mark. Reference to &ldquo;CIBIL&rdquo;
                  is strictly descriptive of credit consultancy and dispute assistance concerning
                  Indian credit reports.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold text-[#0B1E3A]">
                  No Direct Database Alteration &amp; Genuine Defaults
                </h2>
                <p>
                  Bharat Cibil cannot directly alter, delete, or override credit bureau records.
                  Under the Credit Information Companies (Regulation) Act, 2005 (CICRA) and
                  applicable RBI guidelines, credit information corrections are subject to formal
                  investigation and confirmation by the concerned reporting lender and credit
                  bureau. Genuine, accurately reported defaults, late payments, or settlements
                  cannot simply be erased.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold text-[#0B1E3A]">
                  No Guaranteed Outcomes &amp; Credential Safety
                </h2>
                <p>
                  No guaranteed credit score improvement, timeline, or loan sanction is implied or
                  promised. Results vary depending on documentation, lender verification, and
                  individual credit profiles. Clients must never share banking passwords, PINs, or
                  OTPs with anyone.
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
