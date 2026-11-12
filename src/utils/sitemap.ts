import { KNOWLEDGE_ARTICLES, PAGE_METADATA } from '../data/siteData';
import { PageId } from '../types';

export interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: string;
}

const EXCLUDED_FROM_SITEMAP: Set<PageId> = new Set(['article', 'wordpress-theme']);

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.replace(/\/+$/, '');
}

export function getSitemapEntries(
  baseUrl = 'https://bharatcibil.in',
  lastmodDate = new Date().toISOString().split('T')[0]
): SitemapEntry[] {
  const origin = normalizeBaseUrl(baseUrl);
  const entries: SitemapEntry[] = [];

  // 1. All core & service pages from PAGE_METADATA
  for (const meta of Object.values(PAGE_METADATA)) {
    if (EXCLUDED_FROM_SITEMAP.has(meta.id)) continue;

    const isHome = meta.id === 'home';
    const isService =
      meta.id === 'services' ||
      meta.id === 'individual-cibil-rectification' ||
      meta.id === 'commercial-cibil-cmr-improvement' ||
      meta.id === 'written-off-settled-account-rectification' ||
      meta.id === 'loan-rejection-assistance' ||
      meta.id === 'credit-report-analysis';
    const isLegal =
      meta.id === 'privacy-policy' ||
      meta.id === 'terms-and-conditions' ||
      meta.id === 'disclaimer';

    entries.push({
      loc: `${origin}${meta.path === '/' ? '/' : meta.path}`,
      lastmod: lastmodDate,
      changefreq: isHome || meta.id === 'knowledge-centre' ? 'weekly' : 'monthly',
      priority: isHome ? '1.0' : isService ? '0.9' : isLegal ? '0.4' : '0.8',
    });
  }

  // 2. All Knowledge Centre articles dynamically
  for (const article of KNOWLEDGE_ARTICLES) {
    entries.push({
      loc: `${origin}/knowledge-centre/${article.slug}`,
      lastmod: lastmodDate,
      changefreq: 'monthly',
      priority: '0.7',
    });
  }

  return entries;
}

export function generateSitemapXml(
  baseUrl = 'https://bharatcibil.in',
  lastmodDate = new Date().toISOString().split('T')[0]
): string {
  const entries = getSitemapEntries(baseUrl, lastmodDate);
  const urlsXml = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${escapeXml(entry.lastmod)}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>
`;
}

export function generateRobotsTxt(baseUrl = 'https://bharatcibil.in'): string {
  const origin = normalizeBaseUrl(baseUrl);
  return `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`;
}
