import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, MessageCircle, Search } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { buildWhatsAppUrl, HERO_DEFAULT_WHATSAPP_MSG, KNOWLEDGE_ARTICLES } from '../data/siteData';
import { PageId } from '../types';

interface KnowledgeCentrePageProps {
  activeSlug: string | null;
  onNavigate: (page: PageId, hash?: string, articleSlug?: string) => void;
}

export function KnowledgeCentrePage({ activeSlug, onNavigate }: KnowledgeCentrePageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(KNOWLEDGE_ARTICLES.map((a) => a.category)));
    return ['All', ...cats];
  }, []);

  const activeArticle = activeSlug
    ? KNOWLEDGE_ARTICLES.find((a) => a.slug === activeSlug) || null
    : null;

  const filteredArticles = useMemo(() => {
    return KNOWLEDGE_ARTICLES.filter((article) => {
      const matchesCat = selectedCategory === 'All' || article.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  if (activeArticle) {
    const relatedArticles = KNOWLEDGE_ARTICLES.filter((a) => a.slug !== activeArticle.slug).slice(
      0,
      3
    );

    return (
      <div>
        <section className="bg-[#0B1E3A] py-12 sm:py-16 text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: 'Home', page: 'home' },
                { label: 'Knowledge Centre', page: 'knowledge-centre' },
                { label: activeArticle.title },
              ]}
              onNavigate={(p) => onNavigate(p)}
            />
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#D4AF6A] font-medium">
                <span>{activeArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.readTime}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.publishedDate}</span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {activeArticle.title}
              </h1>
              <p className="text-base leading-relaxed text-slate-200">{activeArticle.excerpt}</p>
            </div>
          </div>
        </section>

        <article className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
            <button
              type="button"
              onClick={() => onNavigate('knowledge-centre')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1E3A] hover:text-[#087F5B]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Back to All Knowledge Centre Guides</span>
            </button>

            <div className="space-y-8">
              {activeArticle.sections.map((sec) => (
                <section key={sec.heading} className="space-y-3">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B1E3A]">
                    {sec.heading}
                  </h2>
                  {sec.paragraphs.map((p) => (
                    <p key={p} className="text-base leading-relaxed text-[#344054]">
                      {p}
                    </p>
                  ))}
                  {sec.bullets && (
                    <ul className="space-y-2.5 pt-2">
                      {sec.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm sm:text-base text-[#344054]">
                          <Check
                            className="h-4 w-4 shrink-0 text-[#087F5B] mt-1"
                            aria-hidden="true"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Educational Notice */}
            <div className="rounded-xl border border-slate-200 bg-[#F4F7FA] p-6 space-y-3">
              <h3 className="font-display text-base font-bold text-[#0B1E3A]">
                Need Assistance Reviewing Your Credit Report?
              </h3>
              <p className="text-sm leading-relaxed text-[#344054]">
                This article is for general educational awareness under Indian credit reporting
                norms. For case-specific assessment, explore{' '}
                <button
                  type="button"
                  onClick={() => onNavigate(activeArticle.relatedService.id)}
                  className="font-semibold text-[#087F5B] underline underline-offset-4 hover:text-[#0B1E3A]"
                >
                  {activeArticle.relatedService.label}
                </button>{' '}
                or speak with Bharat Cibil directly.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="rounded-md bg-[#0B1E3A] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#142D4E]"
                >
                  Request Consultation
                </button>
                <a
                  href={buildWhatsAppUrl(
                    `Hello Bharat Cibil Team,\n\nI just read "${activeArticle.title}" and would like a preliminary consultation.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#087F5B] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#066749]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>WhatsApp Bharat Cibil</span>
                </a>
              </div>
            </div>

            {/* Further Reading */}
            <div className="pt-8 border-t border-slate-200 space-y-4">
              <h3 className="font-display text-lg font-bold text-[#0B1E3A]">
                More Guides in the Knowledge Centre
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {relatedArticles.map((rel) => (
                  <button
                    key={rel.slug}
                    type="button"
                    onClick={() => onNavigate('article', undefined, rel.slug)}
                    className="rounded-lg border border-slate-200 bg-[#F4F7FA] p-4 text-left hover:border-[#0B1E3A] transition-colors"
                  >
                    <p className="text-[11px] font-medium text-slate-500">
                      {rel.category} · {rel.readTime}
                    </p>
                    <p className="mt-1 font-display text-sm font-bold text-[#0B1E3A]">
                      {rel.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-[#0B1E3A] py-14 sm:py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Home', page: 'home' }, { label: 'Knowledge Centre' }]}
            onNavigate={(p) => onNavigate(p)}
          />
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF6A]">
              Educational Guides · Indian Credit Reporting
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white">
              Bharat Cibil Knowledge Centre
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-200">
              Clear, accurate, and non-alarmist guides explaining CIBIL statuses, loan dispute
              procedures, NOC updates, Commercial CMR, and India&apos;s four credit bureaus.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FA] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Filter & Search Bar */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-md px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-[#0B1E3A] text-white'
                      : 'bg-white border border-slate-200 text-[#344054] hover:border-[#0B1E3A]/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-80">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search credit guides..."
                aria-label="Search Knowledge Centre articles"
                className="w-full rounded-md border border-slate-300 bg-white py-2.5 pl-9 pr-3 text-sm text-[#0B1E3A] focus:border-[#0B1E3A] focus:outline-none"
              />
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="rounded-xl border border-slate-200 bg-white p-10 text-center space-y-2">
              <p className="font-display text-lg font-bold text-[#0B1E3A]">No matching guides found</p>
              <p className="text-sm text-[#344054]">
                Try clearing the search query or selecting All categories.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <span className="text-[#087F5B] font-semibold">{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.publishedDate}</span>
                    </div>
                    <h2 className="font-display text-lg font-bold text-[#0B1E3A] leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-[#344054]">{article.excerpt}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => onNavigate('article', undefined, article.slug)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1E3A] hover:text-[#087F5B] transition-colors"
                    >
                      <span>Read Full Guide</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="rounded-xl bg-[#0B1E3A] p-8 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-1">
              <h2 className="font-display text-xl font-bold text-white">
                Have a Specific Discrepancy Not Covered Here?
              </h2>
              <p className="text-sm text-slate-300">
                Discuss your credit report concerns confidentially with Bharat Cibil.
              </p>
            </div>
            <a
              href={buildWhatsAppUrl(HERO_DEFAULT_WHATSAPP_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#087F5B] px-5 py-3 text-sm font-semibold text-white hover:bg-[#066749] whitespace-nowrap shrink-0"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Chat with Bharat Cibil</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
