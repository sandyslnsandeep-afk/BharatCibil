import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { PageId } from '../types';
import { BrandMark } from './BrandMark';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, hash?: string) => void;
}

const SERVICE_SUBLINKS: { id: PageId; label: string }[] = [
  { id: 'services', label: 'All Services Overview' },
  { id: 'individual-cibil-rectification', label: 'Individual CIBIL Rectification' },
  { id: 'commercial-cibil-cmr-improvement', label: 'Commercial CIBIL / CMR Improvement' },
  { id: 'written-off-settled-account-rectification', label: 'Written-Off & Settled Accounts' },
  { id: 'loan-rejection-assistance', label: 'Loan Rejection Assistance' },
  { id: 'credit-report-analysis', label: 'Credit Report Analysis' },
];

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLink = (page: PageId, hash?: string) => {
    setServicesOpen(false);
    setMobileOpen(false);
    onNavigate(page, hash);
  };

  const isServiceActive = SERVICE_SUBLINKS.some((s) => s.id === currentPage);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 sm:gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Lockup (single clean element) */}
        <button
          type="button"
          onClick={() => handleLink('home')}
          className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B1E3A] rounded"
          aria-label="Bharat Cibil Home"
        >
          <BrandMark variant="header" />
        </button>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#344054]"
        >
          <button
            type="button"
            onClick={() => handleLink('about')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#0B1E3A] ${
              currentPage === 'about'
                ? 'text-[#0B1E3A] font-semibold underline decoration-[#D4AF6A] decoration-2 underline-offset-8'
                : ''
            }`}
          >
            About
          </button>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
              className={`inline-flex items-center gap-1 whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#0B1E3A] ${
                isServiceActive
                  ? 'text-[#0B1E3A] font-semibold underline decoration-[#D4AF6A] decoration-2 underline-offset-8'
                  : ''
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-150 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full mt-2 w-72 rounded-lg border border-slate-200 bg-white py-2 shadow-lg">
                {SERVICE_SUBLINKS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleLink(item.id)}
                    className={`block w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-[#F4F7FA] hover:text-[#0B1E3A] ${
                      currentPage === item.id
                        ? 'bg-[#F4F7FA] font-semibold text-[#0B1E3A]'
                        : 'text-[#344054]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleLink('our-process')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#0B1E3A] ${
              currentPage === 'our-process'
                ? 'text-[#0B1E3A] font-semibold underline decoration-[#D4AF6A] decoration-2 underline-offset-8'
                : ''
            }`}
          >
            Our Process
          </button>

          <button
            type="button"
            onClick={() => handleLink('knowledge-centre')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#0B1E3A] ${
              currentPage === 'knowledge-centre' || currentPage === 'article'
                ? 'text-[#0B1E3A] font-semibold underline decoration-[#D4AF6A] decoration-2 underline-offset-8'
                : ''
            }`}
          >
            Knowledge
          </button>

          <button
            type="button"
            onClick={() => handleLink('faq')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#0B1E3A] ${
              currentPage === 'faq'
                ? 'text-[#0B1E3A] font-semibold underline decoration-[#D4AF6A] decoration-2 underline-offset-8'
                : ''
            }`}
          >
            FAQ
          </button>
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLink('contact')}
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-[#087F5B] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#066749] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F5B] whitespace-nowrap shrink-0"
          >
            Free Consultation
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-[#0B1E3A] lg:hidden"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-5 lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="mb-4 pb-3 border-b border-slate-100">
            <BrandMark variant="header" />
          </div>
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            <button
              type="button"
              onClick={() => handleLink('home')}
              className="rounded-md px-3 py-2.5 text-left text-sm font-medium text-[#0B1E3A] hover:bg-[#F4F7FA]"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => handleLink('about')}
              className="rounded-md px-3 py-2.5 text-left text-sm font-medium text-[#0B1E3A] hover:bg-[#F4F7FA]"
            >
              About Bharat Cibil
            </button>

            <div className="py-1.5 px-3 text-xs font-semibold tracking-wider text-slate-500">
              Services
            </div>
            {SERVICE_SUBLINKS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleLink(item.id)}
                className="rounded-md px-5 py-2 text-left text-sm text-[#344054] hover:bg-[#F4F7FA] hover:text-[#0B1E3A]"
              >
                {item.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => handleLink('our-process')}
              className="rounded-md px-3 py-2.5 text-left text-sm font-medium text-[#0B1E3A] hover:bg-[#F4F7FA]"
            >
              Our Process
            </button>
            <button
              type="button"
              onClick={() => handleLink('client-experiences')}
              className="rounded-md px-3 py-2.5 text-left text-sm font-medium text-[#0B1E3A] hover:bg-[#F4F7FA]"
            >
              Client Experiences
            </button>
            <button
              type="button"
              onClick={() => handleLink('knowledge-centre')}
              className="rounded-md px-3 py-2.5 text-left text-sm font-medium text-[#0B1E3A] hover:bg-[#F4F7FA]"
            >
              Knowledge Centre
            </button>
            <button
              type="button"
              onClick={() => handleLink('faq')}
              className="rounded-md px-3 py-2.5 text-left text-sm font-medium text-[#0B1E3A] hover:bg-[#F4F7FA]"
            >
              Frequently Asked Questions
            </button>
            <button
              type="button"
              onClick={() => handleLink('contact')}
              className="mt-3 rounded-md bg-[#087F5B] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[#066749]"
            >
              Request Free Consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
