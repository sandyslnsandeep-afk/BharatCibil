import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { BrandProvider } from './context/BrandContext';
import { FAQ_ITEMS, KNOWLEDGE_ARTICLES, PAGE_METADATA } from './data/siteData';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { FaqPage } from './pages/FaqPage';
import { HomePage } from './pages/HomePage';
import { KnowledgeCentrePage } from './pages/KnowledgeCentrePage';
import { LegalPage } from './pages/LegalPage';
import { ProcessPage } from './pages/ProcessPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { WordPressThemePage } from './pages/WordPressThemePage';
import { PageId } from './types';

function resolveRouteFromPath(pathname: string): { page: PageId; articleSlug: string | null } {
  const clean = pathname.replace(/\/+$/, '') || '/';

  if (clean.startsWith('/knowledge-centre/')) {
    const slug = clean.replace('/knowledge-centre/', '');
    if (KNOWLEDGE_ARTICLES.some((a) => a.slug === slug)) {
      return { page: 'article', articleSlug: slug };
    }
  }

  const matched = (Object.values(PAGE_METADATA) as (typeof PAGE_METADATA)[PageId][]).find(
    (meta) => meta.id !== 'article' && meta.path === clean
  );
  if (matched) {
    return { page: matched.id, articleSlug: null };
  }

  return { page: 'home', articleSlug: null };
}

function AppContent() {
  const initialRoute = resolveRouteFromPath(window.location.pathname);
  const [currentPage, setCurrentPage] = useState<PageId>(initialRoute.page);
  const [articleSlug, setArticleSlug] = useState<string | null>(initialRoute.articleSlug);

  useEffect(() => {
    const onPopState = () => {
      const next = resolveRouteFromPath(window.location.pathname);
      setCurrentPage(next.page);
      setArticleSlug(next.articleSlug);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Update dynamic SEO title, meta description, OpenGraph, and Schema.org JSON-LD per page
  useEffect(() => {
    const activeArticle =
      currentPage === 'article' && articleSlug
        ? KNOWLEDGE_ARTICLES.find((a) => a.slug === articleSlug)
        : null;

    const meta = PAGE_METADATA[currentPage] || PAGE_METADATA.home;
    const seoTitle = activeArticle ? `${activeArticle.title} | Bharat Cibil` : meta.seoTitle;
    const seoDesc = activeArticle ? activeArticle.metaDescription : meta.seoDescription;

    document.title = seoTitle;

    const setMetaTag = (selector: string, content: string) => {
      const tag = document.querySelector(selector);
      if (tag) tag.setAttribute('content', content);
    };

    setMetaTag('meta[name="description"]', seoDesc);
    setMetaTag('meta[property="og:title"]', seoTitle);
    setMetaTag('meta[property="og:description"]', seoDesc);
    setMetaTag('meta[name="twitter:title"]', seoTitle);
    setMetaTag('meta[name="twitter:description"]', seoDesc);

    // Dynamic FAQPage or Article JSON-LD
    const existingDynamic = document.getElementById('bc-dynamic-schema');
    if (existingDynamic) existingDynamic.remove();

    if (currentPage === 'faq' || currentPage === 'home') {
      const script = document.createElement('script');
      script.id = 'bc-dynamic-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ_ITEMS.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      });
      document.head.appendChild(script);
    } else if (activeArticle) {
      const script = document.createElement('script');
      script.id = 'bc-dynamic-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: activeArticle.title,
        description: activeArticle.metaDescription,
        author: {
          '@type': 'Organization',
          name: 'Bharat Cibil',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Bharat Cibil',
        },
      });
      document.head.appendChild(script);
    }
  }, [currentPage, articleSlug]);

  const handleNavigate = (page: PageId, hash?: string, slug?: string) => {
    const targetSlug = slug || null;
    const targetPath =
      page === 'article' && targetSlug
        ? `/knowledge-centre/${targetSlug}`
        : PAGE_METADATA[page]?.path || '/';

    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }

    setCurrentPage(page);
    setArticleSlug(targetSlug);

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesOverviewPage onNavigate={handleNavigate} />;
      case 'individual-cibil-rectification':
      case 'commercial-cibil-cmr-improvement':
      case 'written-off-settled-account-rectification':
      case 'loan-rejection-assistance':
      case 'credit-report-analysis':
        return <ServiceDetailPage serviceId={currentPage} onNavigate={handleNavigate} />;
      case 'our-process':
        return <ProcessPage onNavigate={handleNavigate} />;
      case 'client-experiences':
        return <ExperiencesPage onNavigate={handleNavigate} />;
      case 'knowledge-centre':
      case 'article':
        return <KnowledgeCentrePage activeSlug={articleSlug} onNavigate={handleNavigate} />;
      case 'faq':
        return <FaqPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'privacy-policy':
      case 'terms-and-conditions':
      case 'disclaimer':
        return <LegalPage pageId={currentPage} onNavigate={handleNavigate} />;
      case 'wordpress-theme':
        return <WordPressThemePage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FA] text-[#344054]">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={(p) => handleNavigate(p)} />
      <WhatsAppFloat />
    </div>
  );
}

export default function App() {
  return (
    <BrandProvider>
      <AppContent />
    </BrandProvider>
  );
}
