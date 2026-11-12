export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'individual-cibil-rectification'
  | 'commercial-cibil-cmr-improvement'
  | 'written-off-settled-account-rectification'
  | 'loan-rejection-assistance'
  | 'credit-report-analysis'
  | 'our-process'
  | 'client-experiences'
  | 'knowledge-centre'
  | 'article'
  | 'faq'
  | 'contact'
  | 'privacy-policy'
  | 'terms-and-conditions'
  | 'disclaimer'
  | 'wordpress-theme';

export interface PageMeta {
  id: PageId;
  path: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  breadcrumbLabel: string;
}

export interface CreditProblem {
  id: string;
  title: string;
  summary: string;
  legalNote: string;
  targetPage: PageId;
  iconName:
    | 'TrendingDown'
    | 'Ban'
    | 'FileX'
    | 'Scale'
    | 'AlertCircle'
    | 'FileWarning'
    | 'Copy'
    | 'IndianRupee'
    | 'CalendarX'
    | 'FileCheck2'
    | 'Gavel'
    | 'Building2';
}

export interface ServiceDetail {
  id: PageId;
  slug: string;
  kicker: string;
  title: string;
  subtitle: string;
  overview: string[];
  whoNeedsThis: string[];
  whatWeExamine: string[];
  documentsRequired: string[];
  legalBoundary: string;
  relatedPages: { id: PageId; label: string }[];
  whatsappPrefill: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  category: string;
  quote: string;
  isSample: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Rectification' | 'Commercial' | 'Process';
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface KnowledgeArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  excerpt: string;
  metaDescription: string;
  sections: ArticleSection[];
  relatedService: { id: PageId; label: string };
}
