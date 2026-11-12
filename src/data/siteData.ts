import {
  CreditProblem,
  FaqItem,
  KnowledgeArticle,
  PageId,
  PageMeta,
  ServiceDetail,
  TestimonialItem,
} from '../types';

export const BUSINESS_INFO = {
  brandName: 'Bharat Cibil',
  tagline: 'A Better Credit Profile. A Stronger Financial Future.',
  supportingMessage:
    'Professional assistance for credit report analysis, rectification of inaccurate credit information and credit score improvement through documented and lawful processes.',
  founderName: 'Sandiep Shandilya Sharma',
  founderDesignation: 'Founder & CEO, Bharat Cibil',
  whatsappDisplay: '+91 7018223850',
  whatsappNumber: '917018223850',
  whatsappBaseUrl: 'https://wa.me/917018223850',
  primaryEmail: 'contact@bharatcibil.com',
  alternateEmail: 'bharatcibil6@gmail.com',
  marketCoverage: 'PAN India',
};

export function buildWhatsAppUrl(message: string): string {
  return `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export const HERO_DEFAULT_WHATSAPP_MSG =
  'Hello Bharat Cibil Team,\n\nI would like to request a free preliminary credit consultation regarding my credit report. Please guide me on the next steps.';

export const EXPERT_DEFAULT_WHATSAPP_MSG =
  'Hello Bharat Cibil Team,\n\nI would like to speak with an expert regarding CIBIL / credit report rectification assistance.';

export const INDIAN_STATES_UTS: string[] = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi (NCT)',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry',
];

export const ASSISTANCE_TYPES: string[] = [
  'Low CIBIL Score',
  'Loan Rejection',
  'Written-Off Account',
  'Settled Account',
  'Incorrect Loan Entry',
  'Wrong Overdue Amount',
  'NOC / Account Closure Issue',
  'Commercial CIBIL / CMR',
  'Other',
];

export const PAGE_METADATA: Record<PageId, PageMeta> = {
  home: {
    id: 'home',
    path: '/',
    title: 'Home',
    seoTitle: 'Bharat Cibil — Credit Report Rectification & CIBIL Consultancy India',
    seoDescription:
      'Independent credit consultancy across India for CIBIL report analysis, rectification of inaccurate entries, written-off & settled review, and commercial CMR improvement.',
    breadcrumbLabel: 'Home',
  },
  about: {
    id: 'about',
    path: '/about',
    title: 'About Bharat Cibil',
    seoTitle: 'About Bharat Cibil — Independent Credit Consultancy in India',
    seoDescription:
      'Learn about Bharat Cibil, founded by Sandiep Shandilya Sharma, offering confidential, evidence-based credit report analysis and dispute guidance across India.',
    breadcrumbLabel: 'About Bharat Cibil',
  },
  services: {
    id: 'services',
    path: '/services',
    title: 'Our Services',
    seoTitle: 'CIBIL Rectification & Credit Consultancy Services | Bharat Cibil',
    seoDescription:
      'Explore individual and commercial credit consultancy services: CIBIL dispute assistance, written-off & settled review, NOC updates, and CMR improvement.',
    breadcrumbLabel: 'Our Services',
  },
  'individual-cibil-rectification': {
    id: 'individual-cibil-rectification',
    path: '/individual-cibil-rectification',
    title: 'Individual CIBIL Rectification',
    seoTitle: 'Individual CIBIL Rectification & Dispute Assistance | Bharat Cibil',
    seoDescription:
      'Document-based assistance to dispute wrong loan entries, incorrect overdue amounts, duplicate accounts, and un-updated NOC closures in individual credit reports.',
    breadcrumbLabel: 'Individual CIBIL Rectification',
  },
  'commercial-cibil-cmr-improvement': {
    id: 'commercial-cibil-cmr-improvement',
    path: '/commercial-cibil-cmr-improvement',
    title: 'Commercial CIBIL / CMR Improvement',
    seoTitle: 'Commercial CIBIL & CMR Improvement Consultant India | Bharat Cibil',
    seoDescription:
      'Commercial credit report analysis and CMR (CIBIL MSME Rank) improvement guidance for MSMEs, proprietorships, partnerships, and corporate borrowers.',
    breadcrumbLabel: 'Commercial CIBIL / CMR Improvement',
  },
  'written-off-settled-account-rectification': {
    id: 'written-off-settled-account-rectification',
    path: '/written-off-settled-account-rectification',
    title: 'Written-Off & Settled Account Rectification',
    seoTitle: 'Written-Off & Settled Account Rectification | Bharat Cibil',
    seoDescription:
      'Lawful, evidence-based review and lender follow-up for written-off, settled, and post write-off closed loan status entries in Indian credit reports.',
    breadcrumbLabel: 'Written-Off & Settled Accounts',
  },
  'loan-rejection-assistance': {
    id: 'loan-rejection-assistance',
    path: '/loan-rejection-assistance',
    title: 'Loan Rejection Assistance',
    seoTitle: 'Loan Rejection Due to Low CIBIL — Analysis & Guidance | Bharat Cibil',
    seoDescription:
      'Facing home, business, or personal loan rejection due to credit history? Get structured credit report diagnostics and documented remediation guidance.',
    breadcrumbLabel: 'Loan Rejection Assistance',
  },
  'credit-report-analysis': {
    id: 'credit-report-analysis',
    path: '/credit-report-analysis',
    title: 'Credit Report Analysis',
    seoTitle: 'Multi-Bureau Credit Report Analysis India | Bharat Cibil',
    seoDescription:
      'Comprehensive line-by-line review of credit reports across TransUnion CIBIL, Experian, Equifax, and CRIF High Mark to identify reporting discrepancies.',
    breadcrumbLabel: 'Credit Report Analysis',
  },
  'our-process': {
    id: 'our-process',
    path: '/our-process',
    title: 'Our Process',
    seoTitle: 'Our 4-Step Credit Rectification Process | Bharat Cibil',
    seoDescription:
      'Understand how Bharat Cibil evaluates credit reports, prepares documented lender and bureau disputes, and tracks verified updates across India.',
    breadcrumbLabel: 'Our Process',
  },
  'client-experiences': {
    id: 'client-experiences',
    path: '/client-experiences',
    title: 'Client Experiences',
    seoTitle: 'Client Experiences (Sample Preview) | Bharat Cibil',
    seoDescription:
      'Preview client experience layout and sample consultancy narratives for Bharat Cibil across Delhi, Chandigarh, Himachal Pradesh, Punjab, Haryana, and UP.',
    breadcrumbLabel: 'Client Experiences',
  },
  'knowledge-centre': {
    id: 'knowledge-centre',
    path: '/knowledge-centre',
    title: 'Knowledge Centre',
    seoTitle: 'Credit Report & CIBIL Knowledge Centre | Bharat Cibil',
    seoDescription:
      'Educational guides on CIBIL written-off vs settled status, NOC updates, incorrect loan disputes, Commercial CMR, and India’s four credit bureaus.',
    breadcrumbLabel: 'Knowledge Centre',
  },
  article: {
    id: 'article',
    path: '/knowledge-centre',
    title: 'Knowledge Article',
    seoTitle: 'Credit Consultancy Guide | Bharat Cibil Knowledge Centre',
    seoDescription:
      'Detailed educational article from Bharat Cibil explaining credit report entries, dispute procedures, and lawful credit profile improvement.',
    breadcrumbLabel: 'Article',
  },
  faq: {
    id: 'faq',
    path: '/faq',
    title: 'Frequently Asked Questions',
    seoTitle: 'CIBIL Rectification FAQs — Honest Answers | Bharat Cibil',
    seoDescription:
      'Answers to common questions about CIBIL rectification, written-off & settled accounts, NOC updates, timelines, and multi-bureau disputes in India.',
    breadcrumbLabel: 'FAQs',
  },
  contact: {
    id: 'contact',
    path: '/contact',
    title: 'Contact Us',
    seoTitle: 'Contact Bharat Cibil — Free Preliminary Consultation',
    seoDescription:
      'Request a confidential preliminary credit consultation with Bharat Cibil via our enquiry form or WhatsApp (+91 7018223850) across India.',
    breadcrumbLabel: 'Contact Us',
  },
  'privacy-policy': {
    id: 'privacy-policy',
    path: '/privacy-policy',
    title: 'Privacy Policy',
    seoTitle: 'Privacy Policy | Bharat Cibil',
    seoDescription:
      'How Bharat Cibil handles consultation enquiries, client confidentiality, and personal data protection across India.',
    breadcrumbLabel: 'Privacy Policy',
  },
  'terms-and-conditions': {
    id: 'terms-and-conditions',
    path: '/terms-and-conditions',
    title: 'Terms and Conditions',
    seoTitle: 'Terms and Conditions | Bharat Cibil',
    seoDescription:
      'Terms governing independent credit consultancy services provided by Bharat Cibil across India.',
    breadcrumbLabel: 'Terms and Conditions',
  },
  disclaimer: {
    id: 'disclaimer',
    path: '/disclaimer',
    title: 'Disclaimer',
    seoTitle: 'Regulatory & Consultancy Disclaimer | Bharat Cibil',
    seoDescription:
      'Important legal disclaimer: Bharat Cibil is an independent consultancy, not affiliated with TransUnion CIBIL, RBI, or any bank or credit bureau.',
    breadcrumbLabel: 'Disclaimer',
  },
  'wordpress-theme': {
    id: 'wordpress-theme',
    path: '/wordpress-theme',
    title: 'WordPress Theme & Hostinger Guide',
    seoTitle: 'WordPress Theme Package & Hostinger Deployment Guide | Bharat Cibil',
    seoDescription:
      'Download the installable Bharat Cibil WordPress PHP theme ZIP and follow step-by-step Hostinger deployment and Gutenberg editing instructions.',
    breadcrumbLabel: 'WordPress Theme Package',
  },
};

export const TRUST_CAPABILITIES = [
  {
    index: '01',
    title: 'Individual Credit Consultancy',
    description:
      'Structured review of personal loans, credit cards, home loans, and consumer durable accounts reported on individual credit files.',
  },
  {
    index: '02',
    title: 'Commercial Credit Consultancy',
    description:
      'Dedicated analysis of MSME credit histories, commercial bureau reports, and CIBIL MSME Rank (CMR) influencing factors.',
  },
  {
    index: '03',
    title: 'PAN India Service Availability',
    description:
      'Remote, documented consultation accessible to individuals, professionals, and business owners across every Indian state and union territory.',
  },
  {
    index: '04',
    title: 'Document-Based Rectification Assistance',
    description:
      'Evidence-driven representation grounded in NOCs, repayment statements, settlement letters, and formal lender/bureau dispute channels.',
  },
];

export const COMMON_CREDIT_PROBLEMS: CreditProblem[] = [
  {
    id: 'low-cibil-score',
    title: 'Low CIBIL Score',
    summary:
      'Understanding why a score has dropped due to reporting errors, utilisation patterns, or un-updated closures.',
    legalNote: 'Score changes depend on verified bureau data updates and active repayment behaviour.',
    targetPage: 'credit-report-analysis',
    iconName: 'TrendingDown',
  },
  {
    id: 'loan-rejection',
    title: 'Loan Rejection Due to Credit History',
    summary:
      'Diagnosing underlying account flags, enquiries, or reporting mismatches causing repeated bank or NBFC rejections.',
    legalNote: 'Lending approvals remain solely at the discretion of respective banks and NBFCs.',
    targetPage: 'loan-rejection-assistance',
    iconName: 'Ban',
  },
  {
    id: 'written-off-account',
    title: 'Written-Off Account',
    summary:
      'Reviewing accounts marked Written-Off to assess whether repayment, closure, or erroneous reporting can be substantiated.',
    legalNote: 'Rectification depends on lender verification, full settlement/repayment evidence, and bureau rules.',
    targetPage: 'written-off-settled-account-rectification',
    iconName: 'FileX',
  },
  {
    id: 'settled-account',
    title: 'Settled Account',
    summary:
      'Guidance on evaluating "Settled" status entries, understanding lender closure options, and correcting post-payment mismatches.',
    legalNote: 'Status upgrades from Settled to Closed require lender confirmation and applicable dues settlement.',
    targetPage: 'written-off-settled-account-rectification',
    iconName: 'Scale',
  },
  {
    id: 'post-write-off-closed',
    title: 'Post Write-Off Closed',
    summary:
      'Assessing cases where dues were cleared after a write-off yet the historical status continues to impact lending evaluations.',
    legalNote: 'Any record modification is subject to lender reporting policies and CICRA guidelines.',
    targetPage: 'written-off-settled-account-rectification',
    iconName: 'AlertCircle',
  },
  {
    id: 'wrong-loan-entries',
    title: 'Wrong Loan Entries',
    summary:
      'Disputing unfamiliar loan accounts, identity mix-ups, or facilities never availed by the borrower.',
    legalNote: 'Disputes require identity verification and formal confirmation from the reporting institution.',
    targetPage: 'individual-cibil-rectification',
    iconName: 'FileWarning',
  },
  {
    id: 'duplicate-loan-accounts',
    title: 'Duplicate Loan Accounts',
    summary:
      'Identifying single credit facilities reported twice due to lender mergers, branch transfers, or system errors.',
    legalNote: 'Removal of duplicate tradelines depends on lender validation through bureau dispute portals.',
    targetPage: 'individual-cibil-rectification',
    iconName: 'Copy',
  },
  {
    id: 'incorrect-overdue-amount',
    title: 'Incorrect Overdue Amount',
    summary:
      'Challenging inaccurate overdue balances or late-fee figures when instalments were already paid on time.',
    legalNote: 'Corrections require bank statements, payment receipts, and lender reconciliation.',
    targetPage: 'individual-cibil-rectification',
    iconName: 'IndianRupee',
  },
  {
    id: 'incorrect-payment-history',
    title: 'Incorrect Payment History',
    summary:
      'Addressing wrong Days Past Due (DPD) markers or misreported EMI delays across monthly reporting cycles.',
    legalNote: 'DPD grid updates are executed only after confirmation by the reporting credit institution.',
    targetPage: 'credit-report-analysis',
    iconName: 'CalendarX',
  },
  {
    id: 'noc-issued-incorrect-status',
    title: 'NOC Issued, Incorrect Status',
    summary:
      'Following up with lenders and bureaus when a No Objection Certificate exists but the account still reflects active or overdue.',
    legalNote: 'Supported by valid NOC/closure letters and formal grievance escalation with the lender.',
    targetPage: 'individual-cibil-rectification',
    iconName: 'FileCheck2',
  },
  {
    id: 'suit-filed-wilful-default',
    title: 'Suit Filed / Wilful Default Review',
    summary:
      'Reviewing documentation and legal closure records where suit-filed or default flags remain outdated after resolution.',
    legalNote: 'Subject strictly to legal order verification, lender confirmation, and regulatory procedure.',
    targetPage: 'written-off-settled-account-rectification',
    iconName: 'Gavel',
  },
  {
    id: 'commercial-cmr-issues',
    title: 'Commercial Credit & CMR Issues',
    summary:
      'Evaluating MSME credit reports, guarantor liabilities, and CIBIL MSME Rank (CMR) reporting discrepancies.',
    legalNote: 'CMR updates depend on corporate account accuracy and verified lender submissions.',
    targetPage: 'commercial-cibil-cmr-improvement',
    iconName: 'Building2',
  },
];

export const INDIVIDUAL_SERVICES_LIST = [
  'CIBIL Report Analysis',
  'Credit Score Improvement Guidance',
  'Wrong Loan Entry Disputes',
  'Incorrect Overdue Rectification',
  'Settled Account Status Review',
  'Written-Off Account Rectification',
  'NOC and Closure Status Follow-up',
  'Multiple Credit Bureau Report Review',
];

export const COMMERCIAL_SERVICES_LIST = [
  'Commercial Credit Report Analysis',
  'CMR Improvement Guidance',
  'Business Loan Credit History Review',
  'Incorrect Business Loan Reporting',
  'Commercial Account Rectification',
  'MSME Credit Consultancy',
];

export const WHY_BHARAT_CIBIL = [
  {
    title: 'Individual Attention to Every Case',
    description:
      'Each credit file is evaluated manually line by line rather than routed through automated one-size-fits-all templates.',
  },
  {
    title: 'Evidence-Based Case Assessment',
    description:
      'Disputes are prepared only around verifiable facts, bank receipts, closure letters, and statutory reporting norms.',
  },
  {
    title: 'Transparent Consultation',
    description:
      'Clear explanation of what can legitimately be disputed versus what reflects accurate past repayment history.',
  },
  {
    title: 'Documented Communication',
    description:
      'Structured drafting of representation letters, lender escalations, and bureau dispute submissions for clean audit trails.',
  },
  {
    title: 'Professional Follow-up',
    description:
      'Systematic tracking across lender nodal officers, grievance channels, and credit information companies.',
  },
  {
    title: 'PAN India Assistance',
    description:
      'Seamless remote consultancy serving clients in metros, tier-2 cities, and regional towns across India.',
  },
  {
    title: 'Confidential Handling of Information',
    description:
      'Strict respect for client privacy; we never ask for banking passwords, PINs, or OTPs.',
  },
  {
    title: 'Practical Guidance Without Unrealistic Promises',
    description:
      'Honest timelines and grounded expectations aligned with RBI and CICRA credit reporting regulations.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Consultation',
    description:
      'Understand the customer’s credit problem, recent loan applications, and immediate financial objectives through a structured preliminary discussion.',
  },
  {
    step: '02',
    title: 'Report Analysis',
    description:
      'Review the credit report and supporting documents—such as NOCs, repayment statements, or settlement receipts—to identify potential inaccuracies.',
  },
  {
    step: '03',
    title: 'Rectification Assistance',
    description:
      'Prepare and guide appropriate disputes, factual reconciliations, and documented communications to reporting lenders and credit bureaus.',
  },
  {
    step: '04',
    title: 'Follow-up and Verification',
    description:
      'Track institutional responses within statutory resolution windows and verify whether approved corrections are accurately reflected in the updated credit report.',
  },
];

export const SERVICE_PAGES: Record<string, ServiceDetail> = {
  'individual-cibil-rectification': {
    id: 'individual-cibil-rectification',
    slug: 'individual-cibil-rectification',
    kicker: 'Individual Credit Consultancy',
    title: 'Individual CIBIL Rectification',
    subtitle:
      'Structured, document-led assistance to identify and dispute inaccurate personal loan, credit card, and retail tradeline entries on your Indian credit report.',
    overview: [
      'Even a single misreported tradeline—such as an already closed loan still showing active, a duplicate entry created during a bank merger, or an incorrect Days Past Due (DPD) marker—can materially suppress your credit profile when banks evaluate your loan eligibility.',
      'Bharat Cibil assists salaried individuals, self-employed professionals, and retail borrowers in auditing their credit reports, assembling documentary proof, and pursuing formal rectification with the concerned lending institution and credit bureau.',
    ],
    whoNeedsThis: [
      'Borrowers who hold a valid No Objection Certificate (NOC) or closure letter, yet their report still reflects an active balance or overdue amount.',
      'Individuals discovering unfamiliar loan or credit card accounts linked to their PAN due to identity mix-ups or unauthorised usage.',
      'Applicants facing duplicate reporting of the same loan facility across two lender names or account numbers.',
      'Customers whose timely EMI payments were erroneously marked as delayed in the monthly DPD payment grid.',
    ],
    whatWeExamine: [
      'Account ownership, sanction dates, and closed/active status accuracy',
      'Current balance and overdue amount reconciliation against bank statements',
      '36-month Days Past Due (DPD) payment history grid consistency',
      'Personal identifiers, PAN mapping, and duplicate enquiry clusters',
    ],
    documentsRequired: [
      'Latest credit report copy (retrieved securely by the client)',
      'No Objection Certificate (NOC) / Loan Closure Letter from the lender',
      'Statement of Account (SOA) or repayment confirmation receipts',
      'Previous grievance or dispute reference numbers, if already raised',
    ],
    legalBoundary:
      'Bharat Cibil cannot directly alter credit bureau records. All corrections depend on documentary verification by the reporting bank or NBFC and confirmation through the applicable credit bureau under CICRA guidelines.',
    relatedPages: [
      { id: 'credit-report-analysis', label: 'Credit Report Analysis' },
      { id: 'written-off-settled-account-rectification', label: 'Written-Off & Settled Account Review' },
      { id: 'loan-rejection-assistance', label: 'Loan Rejection Assistance' },
    ],
    whatsappPrefill:
      'Hello Bharat Cibil Team,\n\nI need assistance with Individual CIBIL Rectification (wrong entry / overdue / NOC status). Please guide me on the preliminary consultation.',
  },
  'commercial-cibil-cmr-improvement': {
    id: 'commercial-cibil-cmr-improvement',
    slug: 'commercial-cibil-cmr-improvement',
    kicker: 'MSME & Corporate Advisory',
    title: 'Commercial CIBIL / CMR Improvement',
    subtitle:
      'Specialised commercial credit report analysis and CIBIL MSME Rank (CMR) consultancy for proprietors, partnerships, LLPs, and private limited enterprises across India.',
    overview: [
      'Banks and institutional lenders evaluating working capital limits, term loans, overdrafts, or machinery finance rely heavily on your Commercial Credit Report (CCR) and CIBIL MSME Rank (CMR), which scores MSME credit risk on a 1 to 10 scale.',
      'Inaccurate overdue reporting on closed cash-credit limits, un-updated collateral releases, mismatched guarantor obligations, or delayed lender data uploads can distort an otherwise healthy business credit standing. Bharat Cibil works with business owners to audit commercial tradelines and coordinate documented corrections.',
    ],
    whoNeedsThis: [
      'MSMEs seeking renewal or enhancement of Cash Credit (CC), Overdraft (OD), or Working Capital Term Loans.',
      'Businesses seeing an elevated CMR rank despite timely servicing of existing credit facilities.',
      'Enterprises with closed business loans, bank guarantees, or letter-of-credit limits still shown as open or overdue.',
      'Directors and partners whose personal guarantees or linked entity records contain reporting discrepancies.',
    ],
    whatWeExamine: [
      'CIBIL MSME Rank (CMR-1 to CMR-10) drivers and facility classification',
      'Sanctioned limits versus utilised balances and drawing power reporting',
      'SMA / NPA asset classification flags and historical date reconciliation',
      'Closed credit facility reporting and guarantor/borrower entity linkage',
    ],
    documentsRequired: [
      'Commercial Credit Report (CCR) / MSME rank summary',
      'Sanction letters and renewal/closure confirmations from lenders',
      'Audited ledger or loan account statements showing repayment',
      'Formal correspondence with relationship managers or nodal desks',
    ],
    legalBoundary:
      'CMR ranks and commercial asset classifications are computed by credit bureaus based on institutional lender submissions. Bharat Cibil provides analytical and documented dispute assistance without guaranteeing rank targets or credit sanction.',
    relatedPages: [
      { id: 'credit-report-analysis', label: 'Credit Report Analysis' },
      { id: 'loan-rejection-assistance', label: 'Loan Rejection Assistance' },
      { id: 'our-process', label: 'Our 4-Step Process' },
    ],
    whatsappPrefill:
      'Hello Bharat Cibil Team,\n\nI would like a consultation regarding Commercial CIBIL / CMR Improvement for my business / MSME.',
  },
  'written-off-settled-account-rectification': {
    id: 'written-off-settled-account-rectification',
    slug: 'written-off-settled-account-rectification',
    kicker: 'Account Status Resolution',
    title: 'Written-Off & Settled Account Rectification',
    subtitle:
      'Careful, transparent assessment and lender-channel guidance for accounts reflecting Written-Off, Settled, or Post Write-Off Closed statuses.',
    overview: [
      'Statuses such as "Written-Off", "Settled", or "Post Write-Off Closed" are among the most common reasons loan applications are declined or subjected to higher scrutiny in India. Many borrowers are unaware that negotiating a partial settlement leaves a lasting remark indicating the full contractual amount was not repaid.',
      'At Bharat Cibil, we first distinguish between erroneous status reporting (where full payment was made or the status was misapplied) and genuinely settled/written-off accounts—guiding you honestly on viable lender closure pathways and documented status updates.',
    ],
    whoNeedsThis: [
      'Borrowers who repaid their loan in full yet the lender reported the account as "Settled" or "Written-Off".',
      'Customers who wish to explore paying remaining balance/waiver amounts with their original lender to seek an updated closure record.',
      'Individuals holding settlement closure receipts whose credit report still shows active overdue amounts or un-updated write-off balances.',
      'Borrowers reviewing historical Suit Filed or Wilful Default flags after legal or OTS resolution.',
    ],
    whatWeExamine: [
      'Exact status classification ("Written-Off", "Settled", "Post WO Settled", "Closed")',
      'Original principal, settlement terms, and residual waiver figures',
      'Validity of One-Time Settlement (OTS) letters and final No Dues Certificates',
      'Lender-specific policies on full-dues closure and subsequent bureau reporting',
    ],
    documentsRequired: [
      'Credit report highlighting the written-off or settled tradeline',
      'Settlement / OTS offer letter and final payment receipts',
      'No Dues Certificate (NDC) or Closure Letter issued by the lender',
      'Correspondence regarding any post-settlement balance clearance',
    ],
    legalBoundary:
      'Accurately reported defaults, settlements, or write-offs cannot simply be deleted. Status revisions depend strictly on paying applicable dues if required by the lender, lender policy approval, and verified reporting to the credit bureau.',
    relatedPages: [
      { id: 'individual-cibil-rectification', label: 'Individual CIBIL Rectification' },
      { id: 'loan-rejection-assistance', label: 'Loan Rejection Assistance' },
      { id: 'faq', label: 'Frequently Asked Questions' },
    ],
    whatsappPrefill:
      'Hello Bharat Cibil Team,\n\nI need guidance regarding a Written-Off or Settled account reflecting in my credit report.',
  },
  'loan-rejection-assistance': {
    id: 'loan-rejection-assistance',
    slug: 'loan-rejection-assistance',
    kicker: 'Pre-Application & Post-Decline Advisory',
    title: 'Loan Rejection Assistance',
    subtitle:
      'Diagnostic review after a home loan, business loan, or personal loan decline—helping you address credit report obstacles before reapplying.',
    overview: [
      'Repeatedly applying for loans immediately after a rejection often worsens the situation by adding multiple hard enquiries to your credit file without fixing the root cause. Lenders evaluate not only your numeric score, but also account remarks, recent DPD activity, credit mix, and bureau consistency.',
      'Bharat Cibil conducts a comprehensive post-rejection audit to pinpoint what triggered the adverse credit assessment and builds a practical, documented roadmap so you approach future credit applications with clarity.',
    ],
    whoNeedsThis: [
      'Home loan or LAP applicants declined due to historical credit card or consumer loan flags.',
      'Salaried or self-employed individuals unsure why a seemingly decent score still resulted in rejection.',
      'Borrowers experiencing discrepancies between two different credit bureaus checked by different banks.',
      'Applicants who want to clean up inaccurate reporting before submitting a fresh application.',
    ],
    whatWeExamine: [
      'Bureau-specific score triggers and adverse account status flags',
      'Hard enquiry velocity and credit utilisation ratios across active cards',
      'Co-applicant or guarantor liability spillover on the primary applicant’s file',
      'Cross-bureau discrepancies across CIBIL, Experian, Equifax, and CRIF High Mark',
    ],
    documentsRequired: [
      'Recent credit reports (CIBIL and other bureaus, if available)',
      'Loan rejection communication or verbal reason shared by the bank/DSA',
      'Closure letters or payment proofs for any disputed historical accounts',
    ],
    legalBoundary:
      'Credit rectification improves accuracy of reported data; however, final loan approval, interest rate, and sanction terms depend on lender underwriting, income eligibility, and property/collateral criteria.',
    relatedPages: [
      { id: 'credit-report-analysis', label: 'Multi-Bureau Report Analysis' },
      { id: 'individual-cibil-rectification', label: 'Individual CIBIL Rectification' },
      { id: 'our-process', label: 'Our 4-Step Process' },
    ],
    whatsappPrefill:
      'Hello Bharat Cibil Team,\n\nMy loan application was rejected due to credit history issues. I would like assistance analysing my credit report.',
  },
  'credit-report-analysis': {
    id: 'credit-report-analysis',
    slug: 'credit-report-analysis',
    kicker: 'Multi-Bureau Diagnostic Review',
    title: 'Credit Report Analysis',
    subtitle:
      'Line-by-line professional inspection of your credit profile across India’s four RBI-licensed Credit Information Companies (CICs).',
    overview: [
      'In India, banks and NBFCs report to and pull credit histories from four RBI-licensed bureaus: TransUnion CIBIL, Experian India, Equifax India, and CRIF High Mark. An error corrected in one bureau does not always automatically update in the others unless tracked across each institution.',
      'Our Credit Report Analysis service translates technical tradeline fields—control numbers, asset classifications, DPD strings, ownership types, and enquiry logs—into a clear, actionable written diagnostic.',
    ],
    whoNeedsThis: [
      'Individuals preparing for a major home loan, education loan, or business expansion in the next 3–6 months.',
      'Borrowers noticing different scores or account statuses across different credit bureaus.',
      'Customers who find complex CIBIL terminology (STD, SUB, DBT, LSS, WO, SF) difficult to interpret.',
      'MSME directors wanting to review both personal and commercial bureau alignment.',
    ],
    whatWeExamine: [
      'Personal & contact details accuracy and potential profile merging errors',
      'Every open and closed tradeline across CIBIL, Experian, Equifax, and CRIF',
      'Asset classification codes, overdue triggers, and enquiry footprints',
      'Prioritised list of disputable inaccuracies versus legitimate credit rebuilding steps',
    ],
    documentsRequired: [
      'Credit report PDFs downloaded directly by the customer from official bureau portals',
      'Supporting closure/repayment documents for accounts that appear inaccurate',
    ],
    legalBoundary:
      'Clients obtain their own credit reports directly from bureau portals; Bharat Cibil never asks for net-banking logins, OTPs, or bureau passwords.',
    relatedPages: [
      { id: 'individual-cibil-rectification', label: 'Individual CIBIL Rectification' },
      { id: 'commercial-cibil-cmr-improvement', label: 'Commercial CIBIL / CMR Improvement' },
      { id: 'knowledge-centre', label: 'Knowledge Centre Guides' },
    ],
    whatsappPrefill:
      'Hello Bharat Cibil Team,\n\nI would like to schedule a comprehensive Credit Report Analysis across bureaus.',
  },
};

export const SAMPLE_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'sample-1',
    name: 'Amit Verma',
    location: 'Delhi',
    category: 'Individual CIBIL Rectification',
    quote:
      'I was facing difficulties understanding incorrect information in my credit report. The consultancy process helped me understand the discrepancies and the steps required for raising a documented dispute.',
    isSample: true,
  },
  {
    id: 'sample-2',
    name: 'Neha Sharma',
    location: 'Chandigarh',
    category: 'NOC & Closure Follow-up',
    quote:
      'Even after receiving my closure confirmation, my report continued reflecting an open balance. Structured guidance helped me organise the right paperwork for formal lender follow-up.',
    isSample: true,
  },
  {
    id: 'sample-3',
    name: 'Rajesh Thakur',
    location: 'Himachal Pradesh',
    category: 'Credit Report Analysis',
    quote:
      'Before applying for a housing facility, I wanted clarity on old tradeline entries. The line-by-line explanation gave me an honest picture without any unrealistic commitments.',
    isSample: true,
  },
  {
    id: 'sample-4',
    name: 'Manpreet Singh',
    location: 'Punjab',
    category: 'Commercial Credit Consultancy',
    quote:
      'Navigating commercial credit report terminology for our MSME unit was confusing. The consultation broke down the reporting timeline and necessary verification documents clearly.',
    isSample: true,
  },
  {
    id: 'sample-5',
    name: 'Vikram Kumar',
    location: 'Haryana',
    category: 'Wrong Loan Entry Review',
    quote:
      'I noticed an unfamiliar account on my credit profile. Having transparent instructions on identity verification and official bureau dispute channels made the process manageable.',
    isSample: true,
  },
  {
    id: 'sample-6',
    name: 'Pooja Gupta',
    location: 'Uttar Pradesh',
    category: 'Settled Account Guidance',
    quote:
      'I appreciated the straightforward explanation of how settled statuses work under Indian lending norms and what practical options existed with my original lender.',
    isSample: true,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is CIBIL score rectification?',
    answer:
      'CIBIL score rectification refers to the lawful process of auditing your credit report, identifying factual inaccuracies or un-updated lender records (such as wrong overdue amounts, duplicate loans, or closed accounts still marked active), and submitting documented disputes to the reporting lender and credit bureau for verification and correction.',
  },
  {
    id: 'faq-2',
    category: 'Rectification',
    question: 'Can an incorrect written-off status be corrected?',
    answer:
      'If a "Written-Off" status was reported in error despite full repayment, or if the account was subsequently settled or closed in full and the lender failed to update the bureau, it can be disputed with supporting payment receipts and closure letters. Correction always depends on lender verification and bureau confirmation.',
  },
  {
    id: 'faq-3',
    category: 'Rectification',
    question: 'What happens if a bank has issued an NOC but CIBIL still shows settled?',
    answer:
      'Sometimes a lender issues a No Objection Certificate (NOC) following a compromise settlement rather than full repayment, in which case the bureau status legitimately reads "Settled". However, if you repaid the entire contractual dues and still see "Settled" instead of "Closed", or if an NOC was issued after full payment and the account still reflects open dues, we assist you in compiling evidence and escalating to the lender for accurate reporting.',
  },
  {
    id: 'faq-4',
    category: 'Rectification',
    question: 'Can an incorrect loan entry be disputed?',
    answer:
      'Yes. Under the Credit Information Companies (Regulation) Act (CICRA), borrowers have the right to dispute unfamiliar loan entries, duplicate accounts, wrong ownership tags, or clerical errors. The credit bureau forwards the dispute to the reporting bank or NBFC, which must verify and confirm the record before any update occurs.',
  },
  {
    id: 'faq-5',
    category: 'General',
    question: 'Can a closed account still affect a CIBIL score?',
    answer:
      'Yes, in two ways: accurately closed accounts with clean payment history contribute positively to credit depth, whereas closed accounts that still show historical late payments (DPD), "Settled" remarks, or "Post Write-Off Closed" tags remain part of your credit history and are evaluated by future lenders.',
  },
  {
    id: 'faq-6',
    category: 'Rectification',
    question: 'What is the difference between settled and closed?',
    answer:
      'A "Closed" status means the borrower repaid the entire principal, interest, and applicable charges in full as per the loan agreement. A "Settled" status indicates the lender agreed to accept a reduced One-Time Settlement (OTS) amount and waived the balance, which lenders typically view as a negative credit event.',
  },
  {
    id: 'faq-7',
    category: 'Commercial',
    question: 'Does Bharat Cibil handle commercial credit reports?',
    answer:
      'Yes. Bharat Cibil provides Commercial Credit Report (CCR) analysis and CIBIL MSME Rank (CMR) improvement consultancy for proprietorships, partnerships, LLPs, and corporate borrowers across India, addressing reporting discrepancies and business credit history accuracy.',
  },
  {
    id: 'faq-8',
    category: 'General',
    question: 'Can credit report problems be addressed across all four credit bureaus?',
    answer:
      'Yes. India has four RBI-licensed credit bureaus: TransUnion CIBIL, Experian, Equifax, and CRIF High Mark. Because lenders may pull reports from different bureaus, Bharat Cibil reviews reports across all four CICs and guides corresponding lender and bureau follow-ups.',
  },
  {
    id: 'faq-9',
    category: 'Process',
    question: 'How long does credit report rectification take?',
    answer:
      'Timelines vary significantly depending on the complexity of the discrepancy, lender response speed, and verification requirements. Under regulatory guidelines, bureaus generally seek lender confirmation within around 30 days per dispute cycle, though complex lender reconciliations or multi-bureau updates can take longer.',
  },
  {
    id: 'faq-10',
    category: 'Rectification',
    question: 'Can genuine defaults be removed from a credit report?',
    answer:
      'No. Genuine, accurately reported defaults, late payments, or settlements cannot simply be erased or deleted prematurely. Bharat Cibil operates strictly within documented and lawful processes—focusing on correcting actual errors, updating unrecorded closures, and advising on legitimate credit recovery.',
  },
  {
    id: 'faq-11',
    category: 'General',
    question: 'Will rectifying a credit report guarantee loan approval?',
    answer:
      'No consultancy can guarantee loan approval or a specific score increase. Loan sanctions depend entirely on each bank or NBFC’s independent underwriting policies, income stability, existing obligations, collateral valuation, and overall creditworthiness.',
  },
  {
    id: 'faq-12',
    category: 'Process',
    question: 'What documents may be required?',
    answer:
      'Typically, you may need your latest credit report, basic identity/KYC confirmation for your own lender correspondence, No Objection Certificates (NOCs), Loan Closure Letters, Settlement/OTS letters, payment receipts, or Statements of Account. You should never share banking passwords, PINs, or OTPs.',
  },
];

export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    slug: 'what-does-written-off-mean-in-cibil-report',
    title: 'What Does Written-Off Mean in a CIBIL Report?',
    category: 'Account Statuses',
    readTime: '5 min read',
    publishedDate: 'Updated 2026',
    excerpt:
      'Understand why banks classify overdue loans as written-off for accounting purposes, how it affects lending decisions, and what lawful remedies exist.',
    metaDescription:
      'Learn what Written-Off means in a CIBIL report, why banks report it after prolonged non-payment, and how documented closure or error disputes work in India.',
    relatedService: { id: 'written-off-settled-account-rectification', label: 'Written-Off & Settled Account Rectification' },
    sections: [
      {
        heading: 'Accounting Meaning vs. Borrower Liability',
        paragraphs: [
          'When a loan or credit card remains unpaid beyond prescribed delinquency thresholds (typically 180 days or more, depending on institutional policy and asset classification norms), a lender may classify the facility as a Non-Performing Asset (NPA) and subsequently "write off" the balance from its active balance sheet for accounting clarity.',
          'A critical misconception among borrowers is that "Written-Off" means the debt has been forgiven. In reality, your legal obligation to repay remains intact, and the status continues to be reported to Credit Information Companies (CICs).',
        ],
      },
      {
        heading: 'Why It Impacts Future Loan Applications',
        paragraphs: [
          'Lenders reviewing a fresh home loan, personal loan, or working capital proposal view a "Written-Off" flag as an indicator of unresolved credit loss. Even if other active accounts are serviced on time, an unaddressed write-off frequently triggers automated credit-policy declines.',
        ],
      },
      {
        heading: 'Lawful Pathways Forward',
        paragraphs: [
          'Depending on the facts of your account, two primary documented pathways apply:',
        ],
        bullets: [
          'Erroneous Write-Off Reporting: If you already repaid the account in full and hold a valid closure letter or statement of account, a documented dispute can be filed with supporting receipts so the lender updates the status.',
          'Genuine Past Write-Off: If dues remain unpaid, approaching the original lender to clear the outstanding amount and obtain a formal No Dues Certificate allows the lender to update the status—commonly to "Closed" or "Post Write-Off Closed" subject to full repayment terms.',
        ],
      },
    ],
  },
  {
    slug: 'difference-between-settled-and-closed-loan-accounts',
    title: 'Difference Between Settled and Closed Loan Accounts',
    category: 'Credit Fundamentals',
    readTime: '4 min read',
    publishedDate: 'Updated 2026',
    excerpt:
      'A clear comparison of "Closed" versus "Settled" loan statuses in Indian credit reports and why lenders treat them very differently.',
    metaDescription:
      'Understand the difference between Settled and Closed status in CIBIL reports, how One-Time Settlements work, and what options exist after settlement.',
    relatedService: { id: 'written-off-settled-account-rectification', label: 'Written-Off & Settled Account Rectification' },
    sections: [
      {
        heading: 'What "Closed" Indicates',
        paragraphs: [
          'A loan or credit card marked "Closed" means you fulfilled 100% of your contractual repayment obligation—principal, accrued interest, and applicable fees—to the lender’s satisfaction. It signals responsible completion of the credit cycle.',
        ],
      },
      {
        heading: 'What "Settled" Indicates',
        paragraphs: [
          'When a borrower experiences financial hardship and negotiates a One-Time Settlement (OTS), the bank agrees to accept less than the total outstanding due and waives the remainder. Because the lender incurred a partial write-down, the account is reported to bureaus as "Settled" rather than "Closed".',
        ],
      },
      {
        heading: 'Can a Settled Account Be Updated?',
        paragraphs: [
          'If an account was actually paid in full yet misreported as "Settled", documentary proof (receipts and full-payment confirmation) can be submitted through dispute channels. Where a genuine OTS occurred, upgrading the remark typically requires contacting the lender, settling the previously waived difference if permitted by institutional policy, and securing an updated closure confirmation.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-dispute-an-incorrect-loan-entry-in-cibil',
    title: 'How to Dispute an Incorrect Loan Entry in CIBIL',
    category: 'Dispute Process',
    readTime: '6 min read',
    publishedDate: 'Updated 2026',
    excerpt:
      'Step-by-step overview of identifying unfamiliar tradelines, assembling verification proof, and tracking disputes under CICRA guidelines.',
    metaDescription:
      'Learn how to dispute an incorrect or unfamiliar loan entry in your CIBIL report through official bureau and lender verification channels.',
    relatedService: { id: 'individual-cibil-rectification', label: 'Individual CIBIL Rectification' },
    sections: [
      {
        heading: 'Common Types of Incorrect Loan Entries',
        paragraphs: [
          'Errors on Indian credit reports arise for several operational reasons: clerical PAN entry mistakes at a branch, duplicate reporting during bank amalgamations, unrecorded foreclosure payments, or unauthorised credit facilities opened using compromised KYC.',
        ],
      },
      {
        heading: 'Gathering Supporting Evidence Before Raising a Dispute',
        paragraphs: [
          'Raising a dispute without clear evidence often leads to rejection if the lender’s automated core system still shows a mismatch. Before initiating a dispute, assemble:',
        ],
        bullets: [
          'Your latest credit report highlighting the exact Control Number and disputed account number.',
          'PAN and identity proof confirming non-association (for ownership mismatches).',
          'Bank statements, UTR/NEFT references, and closure letters (for paid or duplicate accounts).',
        ],
      },
      {
        heading: 'Coordination Between Bureau and Reporting Lender',
        paragraphs: [
          'Under Indian regulations, credit bureaus cannot unilaterally modify lender-submitted data. When you submit a dispute, the bureau routes a verification request to the reporting bank or NBFC. Simultaneous escalation to the lender’s customer grievance cell or nodal officer ensures the correction is validated cleanly.',
        ],
      },
    ],
  },
  {
    slug: 'bank-issues-noc-but-cibil-is-not-updated',
    title: 'What to Do When a Bank Issues NOC but CIBIL Is Not Updated',
    category: 'NOC & Closure',
    readTime: '4 min read',
    publishedDate: 'Updated 2026',
    excerpt:
      'Why closed loans sometimes stay active in credit reports after receiving an NOC, and how to follow up systematically.',
    metaDescription:
      'Already received your bank NOC or loan closure letter but CIBIL still shows active or overdue? Learn why this happens and the steps to get it updated.',
    relatedService: { id: 'individual-cibil-rectification', label: 'Individual CIBIL Rectification' },
    sections: [
      {
        heading: 'Why Reporting Delays Happen After Closure',
        paragraphs: [
          'Lenders submit customer repayment batches to Credit Information Companies on periodic reporting cycles (and following RBI updates, at increasingly frequent intervals). However, if a closure letter was issued manually at a branch without updating the central loan management system, or if a small residual fee remained un-reconciled, the account can remain flagged as "Open" or "Overdue".',
        ],
      },
      {
        heading: 'Actionable Follow-Up Checklist',
        paragraphs: [
          'If more than 30–45 days have passed since receiving your NOC and your credit report still shows the loan as active:',
        ],
        bullets: [
          'Verify whether the NOC states full repayment closure or settlement closure.',
          'Submit a written representation with the NOC scan to the lender’s Nodal Officer / Grievance Redressal Desk requesting a bureau data refresh.',
          'Log a formal dispute with the credit bureau referencing the NOC date and account number.',
        ],
      },
    ],
  },
  {
    slug: 'how-credit-score-affects-home-loan-approval',
    title: 'How Credit Score Affects Home Loan Approval',
    category: 'Loan Planning',
    readTime: '5 min read',
    publishedDate: 'Updated 2026',
    excerpt:
      'How Indian banks and housing finance companies evaluate your credit score, DPD history, and co-applicant profiles during home loan underwriting.',
    metaDescription:
      'Understand how credit scores and credit report remarks affect home loan approval, interest pricing, and underwriting in India.',
    relatedService: { id: 'loan-rejection-assistance', label: 'Loan Rejection Assistance' },
    sections: [
      {
        heading: 'Beyond the Three-Digit Score',
        paragraphs: [
          'While a strong numeric score helps pass initial automated screening, housing finance companies and public/private banks inspect the underlying report in detail. Even a high score can face queries if there is an active "Settled" remark, high unsecured credit card utilisation, or recent 30+ DPD marks.',
        ],
      },
      {
        heading: 'Pre-Application Hygiene 3 to 6 Months Ahead',
        paragraphs: [
          'Before paying a token amount on a property or submitting formal home loan files, reviewing reports for both the primary applicant and co-applicant helps uncover un-updated NOCs, old guarantor exposures, or wrong overdue amounts early—giving sufficient time for documented corrections.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-improve-credit-profile-after-loan-settlement',
    title: 'How to Improve Your Credit Profile After Loan Settlement',
    category: 'Credit Rebuilding',
    readTime: '5 min read',
    publishedDate: 'Updated 2026',
    excerpt:
      'Practical, disciplined financial habits and verification steps for borrowers rebuilding creditworthiness following a past loan settlement.',
    metaDescription:
      'Practical and lawful steps to strengthen your Indian credit profile after a loan settlement, without falling for unrealistic quick-fix claims.',
    relatedService: { id: 'written-off-settled-account-rectification', label: 'Written-Off & Settled Account Rectification' },
    sections: [
      {
        heading: 'Realistic Expectations After a Settlement',
        paragraphs: [
          'No legitimate consultancy can erase an accurate historical settlement overnight. Recovering creditworthiness after financial hardship requires both verifying that the settled account shows zero residual overdue balance and demonstrating consistent positive credit behaviour going forward.',
        ],
      },
      {
        heading: 'Practical Steps Toward Recovery',
        paragraphs: [
          'Borrowers recovering from a settlement should focus on:',
        ],
        bullets: [
          'Ensuring the settled account shows "Current Balance: ₹0" and "Overdue: ₹0" rather than continuing to accrue phantom interest.',
          'Maintaining spotless on-time EMI and credit card payments on any surviving active accounts.',
          'Avoiding serial unsecured loan rejections while gradually building fresh positive payment history, such as secured credit facilities if appropriate.',
        ],
      },
    ],
  },
  {
    slug: 'understanding-commercial-cibil-and-cmr',
    title: 'Understanding Commercial CIBIL and CMR',
    category: 'Commercial & MSME',
    readTime: '6 min read',
    publishedDate: 'Updated 2026',
    excerpt:
      'An essential guide for Indian MSME owners explaining Commercial Credit Reports (CCR) and how CIBIL MSME Rank (CMR 1–10) works.',
    metaDescription:
      'Learn what Commercial CIBIL and CIBIL MSME Rank (CMR 1 to 10) mean for Indian businesses, and how reporting errors affect MSME lending.',
    relatedService: { id: 'commercial-cibil-cmr-improvement', label: 'Commercial CIBIL / CMR Improvement' },
    sections: [
      {
        heading: 'What Is a Commercial Credit Report (CCR)?',
        paragraphs: [
          'Just as individuals have personal credit reports mapped to PAN, businesses—proprietorships, partnerships, LLPs, and companies—have Commercial Credit Reports tracking cash credit limits, overdrafts, term loans, letters of credit, and bank guarantees.',
        ],
      },
      {
        heading: 'How CIBIL MSME Rank (CMR) Is Interpreted',
        paragraphs: [
          'CMR ranks eligible MSMEs on a scale from CMR-1 (lowest perceived credit risk) to CMR-10 (highest risk). Unlike personal scores ranging from 300 to 900, a lower CMR number indicates stronger commercial credit standing. Discrepancies in over-limit reporting, SMA flags, or unclosed credit limits can adversely shift your rank.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-check-your-credit-report-for-errors',
    title: 'How to Check Your Credit Report for Errors',
    category: 'Credit Fundamentals',
    readTime: '5 min read',
    publishedDate: 'Updated 2026',
    excerpt:
      'A structured five-point inspection checklist to spot reporting discrepancies before they derail your next loan application.',
    metaDescription:
      'Learn what to inspect when reading your CIBIL or Indian credit report—from personal details and DPD grids to account closure statuses.',
    relatedService: { id: 'credit-report-analysis', label: 'Credit Report Analysis' },
    sections: [
      {
        heading: 'Five Sections Every Borrower Should Audit',
        paragraphs: [
          'Most people glance only at the headline score and overlook the granular account tables below. Whenever you download your credit report, check these five areas:',
        ],
        bullets: [
          'Personal & Identification Details: Verify spelling, date of birth, PAN, and address records to rule out merged files.',
          'Account List Completeness: Confirm every listed loan or card actually belongs to you and check for duplicates.',
          'Account Status & Dates: Verify that closed loans reflect "Closed" with a zero balance.',
          'Overdue & DPD Grid: Cross-check any non-zero DPD month against your actual bank passbook or statement.',
          'Enquiry Section: Review recent credit enquiries for unauthorised submissions.',
        ],
      },
    ],
  },
  {
    slug: 'closed-loan-shows-outstanding-dues',
    title: 'What to Do When a Closed Loan Shows Outstanding Dues',
    category: 'NOC & Closure',
    readTime: '4 min read',
    publishedDate: 'Updated 2026',
    excerpt:
      'How residual fee mismatches or delayed lender reconciliation leave closed loans showing overdue balances, and how to resolve them.',
    metaDescription:
      'Closed your loan but your credit report still shows outstanding dues or overdue balances? Learn how to reconcile and dispute the entry.',
    relatedService: { id: 'individual-cibil-rectification', label: 'Individual CIBIL Rectification' },
    sections: [
      {
        heading: 'Common Causes of Post-Closure Balance Mismatches',
        paragraphs: [
          'Frequently, an automated foreclosure quote misses minor penal interest, GST adjustments, or bounce charges posted on the day of closure—or the lender fails to update the central bureau feed after manual settlement at a collection branch.',
        ],
      },
      {
        heading: 'Documented Resolution Steps',
        paragraphs: [
          'Obtain an updated Statement of Account showing zero ledger balance alongside your NOC/Closure Letter. If a small un-notified balance exists, clarify it formally with the lender first; if the ledger already reads zero, submit both the ledger and NOC through the lender’s grievance desk and bureau dispute mechanism.',
        ],
      },
    ],
  },
  {
    slug: 'understanding-credit-reports-across-indias-four-credit-bureaus',
    title: "Understanding Credit Reports Across India's Four Credit Bureaus",
    category: 'Credit Fundamentals',
    readTime: '5 min read',
    publishedDate: 'Updated 2026',
    excerpt:
      'Why TransUnion CIBIL, Experian, Equifax, and CRIF High Mark can display slightly different scores and why checking all four matters.',
    metaDescription:
      "Understand India's four RBI-licensed credit bureaus—CIBIL, Experian, Equifax, and CRIF High Mark—and how disputes work across all four.",
    relatedService: { id: 'credit-report-analysis', label: 'Credit Report Analysis' },
    sections: [
      {
        heading: "India's Four RBI-Licensed Credit Information Companies",
        paragraphs: [
          'While "CIBIL" has become a household term in India, four independent Credit Information Companies operate under RBI licensing: TransUnion CIBIL, Experian Credit Information Company of India, Equifax Credit Information Services, and CRIF High Mark.',
        ],
      },
      {
        heading: 'Why Scores and Entries May Differ',
        paragraphs: [
          'Each bureau uses its own proprietary scoring model and updates records as lenders upload data feeds. Some NBFCs, microfinance lenders, or fintech institutions update one bureau earlier than another. Reviewing all four ensures no blind spots remain before approaching a bank.',
        ],
      },
    ],
  },
];
