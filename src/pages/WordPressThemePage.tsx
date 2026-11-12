import React, { useMemo } from 'react';
import {
  Check,
  Download,
  ExternalLink,
  FileArchive,
  FileCode2,
  ImagePlus,
  RotateCcw,
  Server,
  Upload,
} from 'lucide-react';
import { BrandMark } from '../components/BrandMark';
import { Breadcrumb } from '../components/Breadcrumb';
import { useBrand } from '../context/BrandContext';
import { generateSitemapXml, getSitemapEntries } from '../utils/sitemap';
import { PageId } from '../types';

interface WordPressThemePageProps {
  onNavigate: (page: PageId) => void;
}

export function WordPressThemePage({ onNavigate }: WordPressThemePageProps) {
  const {
    founderPhotoUrl,
    isDefaultLogo,
    setCustomLogoUrl,
    setFounderPhotoUrl,
    handleLogoUpload,
    handleFounderPhotoUpload,
  } = useBrand();

  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://bharatcibil.in';
  const sitemapEntries = useMemo(() => getSitemapEntries(origin), [origin]);
  const sitemapXml = useMemo(() => generateSitemapXml(origin), [origin]);

  const onLogoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleLogoUpload(file);
  };

  const onFounderFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFounderPhotoUpload(file);
  };

  const handleDownloadDynamicSitemap = () => {
    const blob = new Blob([sitemapXml], { type: 'application/xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <section className="bg-[#0B1E3A] py-14 sm:py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Home', page: 'home' }, { label: 'WordPress Theme & Hostinger Guide' }]}
            onNavigate={onNavigate}
          />
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF6A]">
              Deliverable Package · Hostinger &amp; SEO Ready
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white">
              Bharat Cibil WordPress Theme &amp; SEO Deployment Hub
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-200">
              Download the installable WordPress PHP theme package (pre-loaded with your official
              Bharat Cibil logo, favicon, and dynamic XML sitemap), preview founder media, and
              follow the Hostinger setup checklist.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="/bharat-cibil-theme.zip"
                download="bharat-cibil-theme.zip"
                className="inline-flex items-center gap-2 rounded-md bg-[#087F5B] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#066749]"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Download Installable WordPress Theme (.zip)</span>
              </a>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-[#142D4E] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#D4AF6A]"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                <span>View Live sitemap.xml</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FA] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Official Logo & Founder Photo Management */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6">
            <div className="space-y-1.5">
              <h2 className="font-display text-2xl font-bold text-[#0B1E3A]">
                Official Brand Logo &amp; Founder Photograph
              </h2>
              <p className="text-sm text-[#344054]">
                Your official Bharat Cibil logo and shield favicon are active across Header,
                Mobile Navigation, Footer, Contact, and Client Experiences. You can also test a
                custom override or upload the founder portrait below.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-[#F4F7FA] p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-bold text-[#0B1E3A]">
                    1. Official Bharat Cibil Logo
                  </span>
                  {!isDefaultLogo && (
                    <button
                      type="button"
                      onClick={() => setCustomLogoUrl(null)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-red-700"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>Restore Official Logo</span>
                    </button>
                  )}
                </div>

                <div className="rounded-md border border-slate-200 bg-white p-4 flex items-center justify-center min-h-[88px]">
                  <BrandMark variant="card" />
                </div>

                <label className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-[#0B1E3A] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#142D4E]">
                  <Upload className="h-4 w-4" aria-hidden="true" />
                  <span>Test Alternate Logo (PNG / JPG / SVG)</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={onLogoFileChange}
                    className="sr-only"
                  />
                </label>
              </div>

              <div className="rounded-lg border border-slate-200 bg-[#F4F7FA] p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-bold text-[#0B1E3A]">
                    2. Founder Photograph (Sandiep Shandilya Sharma)
                  </span>
                  {founderPhotoUrl && (
                    <button
                      type="button"
                      onClick={() => setFounderPhotoUrl(null)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-red-700"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>Reset</span>
                    </button>
                  )}
                </div>

                <div className="rounded-md border border-slate-200 bg-white p-4 flex items-center gap-4 min-h-[88px]">
                  {founderPhotoUrl ? (
                    <img
                      src={founderPhotoUrl}
                      alt="Founder Preview"
                      className="h-14 w-14 rounded-md object-cover object-top border border-slate-200"
                    />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[#0B1E3A] text-[#D4AF6A]">
                      <ImagePlus className="h-6 w-6" aria-hidden="true" />
                    </div>
                  )}
                  <div className="text-xs text-[#344054]">
                    {founderPhotoUrl
                      ? 'Founder photograph active in live preview.'
                      : 'Placeholder active. Upload portrait to preview.'}
                  </div>
                </div>

                <label className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-[#0B1E3A] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#142D4E]">
                  <Upload className="h-4 w-4" aria-hidden="true" />
                  <span>Upload Founder Photo (JPG / PNG / WebP)</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={onFounderFileChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Automated Sitemap.xml Utility */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 space-y-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#087F5B]">
                  <FileCode2 className="h-5 w-5" aria-hidden="true" />
                  <h2 className="font-display text-xl font-bold text-[#0B1E3A]">
                    Automated XML Sitemap Utility ({sitemapEntries.length} Indexed URLs)
                  </h2>
                </div>
                <p className="text-sm text-[#344054]">
                  Automatically regenerates <code>sitemap.xml</code> and <code>robots.txt</code> on
                  build, and dynamically serves <code>/sitemap.xml</code> inside the WordPress
                  theme for all published pages and Knowledge Centre articles.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={handleDownloadDynamicSitemap}
                  className="inline-flex items-center gap-1.5 rounded-md bg-[#0B1E3A] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#142D4E]"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Download sitemap.xml</span>
                </button>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-[#0B1E3A] hover:border-[#0B1E3A]"
                >
                  <span>View robots.txt</span>
                </a>
              </div>
            </div>

            <div className="max-h-64 overflow-x-auto overflow-y-auto rounded-lg border border-slate-200 bg-[#F4F7FA]">
              <table className="w-full text-left text-xs">
                <thead className="sticky top-0 bg-[#0B1E3A] text-white">
                  <tr>
                    <th className="px-4 py-2.5 font-semibold">URL</th>
                    <th className="px-4 py-2.5 font-semibold">Changefreq</th>
                    <th className="px-4 py-2.5 font-semibold tabular-nums">Priority</th>
                    <th className="px-4 py-2.5 font-semibold tabular-nums">Last Modified</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {sitemapEntries.map((entry) => (
                    <tr key={entry.loc}>
                      <td className="px-4 py-2 font-mono text-[11px] text-[#0B1E3A]">
                        {entry.loc}
                      </td>
                      <td className="px-4 py-2 text-[#344054]">{entry.changefreq}</td>
                      <td className="px-4 py-2 tabular-nums text-[#087F5B] font-semibold">
                        {entry.priority}
                      </td>
                      <td className="px-4 py-2 tabular-nums text-slate-500">{entry.lastmod}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Theme Architecture Summary & Hostinger Checklist */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5 text-[#087F5B]">
                <FileArchive className="h-5 w-5" aria-hidden="true" />
                <h2 className="font-display text-xl font-bold text-[#0B1E3A]">
                  What Is Inside bharat-cibil-theme.zip
                </h2>
              </div>
              <ul className="space-y-2.5 text-sm text-[#344054]">
                {[
                  'Pre-packaged with your official Bharat Cibil primary logo and shield favicon in assets/images/',
                  'Standard WordPress PHP templates: style.css, functions.php, header.php, footer.php, front-page.php, page.php, single.php, archive.php, home.php, 404.php',
                  'Automated dynamic /sitemap.xml and robots.txt generator (inc/sitemap.php) covering all pages & articles',
                  'Native Gutenberg Block Patterns and Customizer controls (WhatsApp number, Hero, Founder photo/message)',
                  'Built-in Testimonials (with SAMPLE toggle) and FAQs Custom Post Types requiring zero paid plugins',
                  'Responsive CSS & lightweight JS with Indian mobile validation and prefilled WhatsApp redirect',
                  'Idempotent activation seeder creating all 16 pages, 6 Sample Testimonials, 12 FAQs, and 10 Knowledge Centre posts',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 shrink-0 text-[#087F5B] mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5 text-[#087F5B]">
                <Server className="h-5 w-5" aria-hidden="true" />
                <h2 className="font-display text-xl font-bold text-[#0B1E3A]">
                  Hostinger Deployment Checklist
                </h2>
              </div>
              <ol className="space-y-3 text-sm text-[#344054] list-decimal pl-5">
                <li>
                  <strong>Install WordPress on Hostinger:</strong> In Hostinger hPanel → Websites →
                  Auto Installer, install WordPress on your domain and turn on Force HTTPS (SSL).
                </li>
                <li>
                  <strong>Upload Theme ZIP:</strong> Go to WordPress Dashboard → Appearance → Themes
                  → Add New → Upload Theme → select <code>bharat-cibil-theme.zip</code> → Install
                  &amp; Activate.
                </li>
                <li>
                  <strong>Permalinks &amp; Sitemap:</strong> Go to Settings → Permalinks → select{' '}
                  <em>Post name</em> and Save. Your dynamic sitemap is immediately live at{' '}
                  <code>/sitemap.xml</code>.
                </li>
                <li>
                  <strong>Customize Branding &amp; Founder Photo:</strong> Appearance → Customize →
                  Site Identity (logo/icon) and Bharat Cibil Settings (Founder Photo &amp; WhatsApp{' '}
                  <code>917018223850</code>).
                </li>
                <li>
                  <strong>Search Console &amp; Backups:</strong> Submit <code>/sitemap.xml</code> in
                  Google Search Console and verify automated backups in Hostinger hPanel.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
