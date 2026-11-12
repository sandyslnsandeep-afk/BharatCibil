import React, { useEffect, useState } from 'react';
import { CheckCircle2, Lock, MessageCircle, ShieldAlert } from 'lucide-react';
import {
  ASSISTANCE_TYPES,
  buildWhatsAppUrl,
  BUSINESS_INFO,
  INDIAN_STATES_UTS,
} from '../data/siteData';

interface EnquiryFormProps {
  defaultProblem?: string;
  compact?: boolean;
}

interface FormState {
  fullName: string;
  mobile: string;
  whatsapp: string;
  sameAsMobile: boolean;
  state: string;
  city: string;
  category: 'Individual' | 'Business / MSME';
  problemType: string;
  description: string;
  consent: boolean;
  honeypot: string;
}

interface FormErrors {
  fullName?: string;
  mobile?: string;
  whatsapp?: string;
  state?: string;
  city?: string;
  problemType?: string;
  consent?: string;
  general?: string;
}

function normalizeIndianMobile(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) {
    return digits.slice(2);
  }
  if (digits.length === 11 && digits.startsWith('0')) {
    return digits.slice(1);
  }
  return digits;
}

function isValidIndianMobile(raw: string): boolean {
  const cleaned = normalizeIndianMobile(raw);
  return /^[6-9]\d{9}$/.test(cleaned);
}

export function EnquiryForm({ defaultProblem = '', compact = false }: EnquiryFormProps) {
  const [mountedAt] = useState<number>(() => Date.now());
  const [form, setForm] = useState<FormState>({
    fullName: '',
    mobile: '',
    whatsapp: '',
    sameAsMobile: true,
    state: '',
    city: '',
    category: 'Individual',
    problemType: defaultProblem || '',
    description: '',
    consent: false,
    honeypot: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [submittedMessage, setSubmittedMessage] = useState<string>('');

  useEffect(() => {
    if (defaultProblem) {
      setForm((prev) => ({ ...prev, problemType: defaultProblem }));
    }
  }, [defaultProblem]);

  const effectiveWhatsapp = form.sameAsMobile ? form.mobile : form.whatsapp || form.mobile;

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (form.honeypot.trim() !== '') {
      nextErrors.general = 'Submission blocked by anti-spam verification.';
      return nextErrors;
    }

    if (Date.now() - mountedAt < 1200) {
      nextErrors.general = 'Please take a moment to complete the consultation fields.';
      return nextErrors;
    }

    if (form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    if (!isValidIndianMobile(form.mobile)) {
      nextErrors.mobile =
        'Enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.';
    }

    if (!form.sameAsMobile && form.whatsapp.trim() !== '' && !isValidIndianMobile(form.whatsapp)) {
      nextErrors.whatsapp = 'Enter a valid 10-digit WhatsApp number or leave blank to use mobile.';
    }

    if (!form.state) {
      nextErrors.state = 'Please select your State or Union Territory.';
    }

    if (form.city.trim().length < 2) {
      nextErrors.city = 'Please enter your city or town.';
    }

    if (!form.problemType) {
      nextErrors.problemType = 'Please select the type of assistance required.';
    }

    if (!form.consent) {
      nextErrors.consent =
        'Please confirm your consent so Bharat Cibil can contact you regarding your enquiry.';
    }

    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const cleanedMobile = `+91 ${normalizeIndianMobile(form.mobile)}`;
    const cleanedWhatsapp = `+91 ${normalizeIndianMobile(effectiveWhatsapp)}`;

    const prefilledMessage = [
      'Hello Bharat Cibil Team,',
      '',
      'I would like to request a preliminary credit consultation.',
      '',
      `Name: ${form.fullName.trim()}`,
      `Mobile: ${cleanedMobile}`,
      `WhatsApp: ${cleanedWhatsapp}`,
      `City: ${form.city.trim()}`,
      `State: ${form.state}`,
      `Category: ${form.category}`,
      `Problem: ${form.problemType}`,
      `Description: ${form.description.trim() || 'Not specified'}`,
      '',
      'Please contact me regarding the next steps.',
      '',
      'Thank you.',
    ].join('\n');

    const waUrl = buildWhatsAppUrl(prefilledMessage);
    setSubmittedMessage(prefilledMessage);
    setSubmittedUrl(waUrl);

    // Open WhatsApp safely in a new tab/window without using window.alert
    const win = window.open(waUrl, '_blank', 'noopener,noreferrer');
    if (!win) {
      // Fallback handled cleanly by displaying the direct launch button in UI
    }
  };

  if (submittedUrl) {
    return (
      <div className="rounded-xl border border-[#087F5B]/30 bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#087F5B]/10 text-[#087F5B]">
            <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="space-y-3 flex-1">
            <h3 className="font-display text-xl font-bold text-[#0B1E3A]">
              Consultation Request Ready for WhatsApp
            </h3>
            <p className="text-sm leading-relaxed text-[#344054]">
              Your enquiry details have been formatted cleanly. If WhatsApp did not open
              automatically in a new tab, use the button below to send your consultation request
              directly to Bharat Cibil ({BUSINESS_INFO.whatsappDisplay}).
            </p>

            <div className="rounded-lg border border-slate-200 bg-[#F4F7FA] p-4 text-xs leading-relaxed text-[#344054] whitespace-pre-line font-sans">
              {submittedMessage}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={submittedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#087F5B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#066749]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Open WhatsApp &amp; Send Request</span>
              </a>
              <button
                type="button"
                onClick={() => setSubmittedUrl(null)}
                className="rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-[#0B1E3A] transition-colors hover:bg-slate-50"
              >
                Edit Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
    >
      <div className="mb-6 space-y-2">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0B1E3A]">
          Request Your Free Preliminary Credit Consultation
        </h3>
        <p className="text-sm text-[#344054]">
          Share brief details of your credit report concern. On submission, your enquiry opens
          directly in WhatsApp with no public exposure.
        </p>
      </div>

      {/* Honeypot anti-spam field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="bc-website-url">Leave empty</label>
        <input
          id="bc-website-url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.honeypot}
          onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
        />
      </div>

      {errors.general && (
        <div
          role="alert"
          className="mb-5 flex items-center gap-2 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <ShieldAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{errors.general}</span>
        </div>
      )}

      <div className={`grid grid-cols-1 gap-5 ${compact ? 'sm:grid-cols-2' : 'md:grid-cols-2'}`}>
        {/* 1. Full Name */}
        <div>
          <label htmlFor="bc-fullname" className="block text-sm font-semibold text-[#0B1E3A] mb-1.5">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            id="bc-fullname"
            type="text"
            required
            placeholder="e.g. Rajesh Kumar Sharma"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            aria-invalid={Boolean(errors.fullName)}
            className={`w-full rounded-md border px-3.5 py-2.5 text-sm text-[#0B1E3A] bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1E3A]/20 ${
              errors.fullName ? 'border-red-500' : 'border-slate-300 focus:border-[#0B1E3A]'
            }`}
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-700">{errors.fullName}</p>}
        </div>

        {/* 2. Mobile Number */}
        <div>
          <label htmlFor="bc-mobile" className="block text-sm font-semibold text-[#0B1E3A] mb-1.5">
            Mobile Number (India) <span className="text-red-600">*</span>
          </label>
          <div className="flex">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-slate-300 bg-[#F4F7FA] px-3 text-sm font-medium text-[#344054] tabular-nums">
              +91
            </span>
            <input
              id="bc-mobile"
              type="tel"
              inputMode="numeric"
              required
              maxLength={14}
              placeholder="10-digit mobile number"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              aria-invalid={Boolean(errors.mobile)}
              className={`w-full rounded-r-md border px-3.5 py-2.5 text-sm text-[#0B1E3A] tabular-nums bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1E3A]/20 ${
                errors.mobile ? 'border-red-500' : 'border-slate-300 focus:border-[#0B1E3A]'
              }`}
            />
          </div>
          {errors.mobile && <p className="mt-1 text-xs text-red-700">{errors.mobile}</p>}
        </div>

        {/* 3. WhatsApp Number */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="bc-whatsapp" className="block text-sm font-semibold text-[#0B1E3A]">
              WhatsApp Number
            </label>
            <label className="inline-flex items-center gap-1.5 text-xs text-[#344054] cursor-pointer">
              <input
                type="checkbox"
                checked={form.sameAsMobile}
                onChange={(e) => setForm({ ...form, sameAsMobile: e.target.checked })}
                className="h-3.5 w-3.5 rounded border-slate-300 text-[#087F5B] focus:ring-[#087F5B]"
              />
              <span>Same as mobile</span>
            </label>
          </div>
          <div className="flex">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-slate-300 bg-[#F4F7FA] px-3 text-sm font-medium text-[#344054] tabular-nums">
              +91
            </span>
            <input
              id="bc-whatsapp"
              type="tel"
              inputMode="numeric"
              disabled={form.sameAsMobile}
              maxLength={14}
              placeholder={form.sameAsMobile ? 'Defaults to mobile number' : '10-digit WhatsApp number'}
              value={form.sameAsMobile ? form.mobile : form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              aria-invalid={Boolean(errors.whatsapp)}
              className={`w-full rounded-r-md border px-3.5 py-2.5 text-sm tabular-nums focus:outline-none focus:ring-2 focus:ring-[#0B1E3A]/20 ${
                form.sameAsMobile
                  ? 'bg-slate-50 text-slate-500 border-slate-200'
                  : 'bg-white text-[#0B1E3A] border-slate-300 focus:border-[#0B1E3A]'
              }`}
            />
          </div>
          {errors.whatsapp && <p className="mt-1 text-xs text-red-700">{errors.whatsapp}</p>}
        </div>

        {/* 4. State */}
        <div>
          <label htmlFor="bc-state" className="block text-sm font-semibold text-[#0B1E3A] mb-1.5">
            State / Union Territory <span className="text-red-600">*</span>
          </label>
          <select
            id="bc-state"
            required
            value={form.state}
            onChange={(e) => setForm({ ...form, state: e.target.value })}
            aria-invalid={Boolean(errors.state)}
            className={`w-full rounded-md border px-3.5 py-2.5 text-sm text-[#0B1E3A] bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1E3A]/20 ${
              errors.state ? 'border-red-500' : 'border-slate-300 focus:border-[#0B1E3A]'
            }`}
          >
            <option value="">Select State / UT</option>
            {INDIAN_STATES_UTS.map((stateName) => (
              <option key={stateName} value={stateName}>
                {stateName}
              </option>
            ))}
          </select>
          {errors.state && <p className="mt-1 text-xs text-red-700">{errors.state}</p>}
        </div>

        {/* 5. City */}
        <div>
          <label htmlFor="bc-city" className="block text-sm font-semibold text-[#0B1E3A] mb-1.5">
            City / Town <span className="text-red-600">*</span>
          </label>
          <input
            id="bc-city"
            type="text"
            required
            placeholder="e.g. Delhi, Chandigarh, Jaipur, Pune"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            aria-invalid={Boolean(errors.city)}
            className={`w-full rounded-md border px-3.5 py-2.5 text-sm text-[#0B1E3A] bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1E3A]/20 ${
              errors.city ? 'border-red-500' : 'border-slate-300 focus:border-[#0B1E3A]'
            }`}
          />
          {errors.city && <p className="mt-1 text-xs text-red-700">{errors.city}</p>}
        </div>

        {/* 6. Customer Category */}
        <div>
          <span className="block text-sm font-semibold text-[#0B1E3A] mb-1.5">
            Customer Category <span className="text-red-600">*</span>
          </span>
          <div className="grid grid-cols-2 gap-2.5">
            {(['Individual', 'Business / MSME'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setForm({ ...form, category: cat })}
                className={`rounded-md border px-3 py-2.5 text-sm font-medium transition-colors whitespace-nowrap ${
                  form.category === cat
                    ? 'border-[#0B1E3A] bg-[#0B1E3A] text-white'
                    : 'border-slate-300 bg-white text-[#344054] hover:border-[#0B1E3A]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 7. Type of Assistance */}
        <div className="sm:col-span-2">
          <label htmlFor="bc-problem" className="block text-sm font-semibold text-[#0B1E3A] mb-1.5">
            Type of Assistance Required <span className="text-red-600">*</span>
          </label>
          <select
            id="bc-problem"
            required
            value={form.problemType}
            onChange={(e) => setForm({ ...form, problemType: e.target.value })}
            aria-invalid={Boolean(errors.problemType)}
            className={`w-full rounded-md border px-3.5 py-2.5 text-sm text-[#0B1E3A] bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1E3A]/20 ${
              errors.problemType ? 'border-red-500' : 'border-slate-300 focus:border-[#0B1E3A]'
            }`}
          >
            <option value="">Select Type of Assistance</option>
            {ASSISTANCE_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.problemType && <p className="mt-1 text-xs text-red-700">{errors.problemType}</p>}
        </div>

        {/* 8. Brief Description */}
        <div className="sm:col-span-2">
          <label
            htmlFor="bc-description"
            className="block text-sm font-semibold text-[#0B1E3A] mb-1.5"
          >
            Brief Description of the Problem
          </label>
          <textarea
            id="bc-description"
            rows={3}
            placeholder="Briefly mention the issue (e.g., closed loan still showing active since 2024, or settled account review). Please do not enter OTPs, passwords, or bank account PINs."
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#0B1E3A] focus:border-[#0B1E3A] focus:outline-none focus:ring-2 focus:ring-[#0B1E3A]/20"
          />
        </div>
      </div>

      {/* Security Reminder */}
      <div className="mt-4 flex items-start gap-2.5 rounded-md border border-slate-200 bg-[#F4F7FA] p-3 text-xs leading-relaxed text-[#344054]">
        <Lock className="h-4 w-4 shrink-0 text-[#0B1E3A] mt-0.5" aria-hidden="true" />
        <span>
          <strong>Security Notice:</strong> Never share OTPs, internet banking passwords, PINs, or
          full credit report files through this enquiry form.
        </span>
      </div>

      {/* 9. Consent */}
      <div className="mt-4">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => setForm({ ...form, consent: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-[#087F5B] focus:ring-[#087F5B]"
          />
          <span className="text-xs leading-relaxed text-[#344054]">
            I authorise Bharat Cibil to contact me via WhatsApp or phone regarding my preliminary
            credit consultation request, and I acknowledge that Bharat Cibil is an independent
            consultancy offering no guaranteed score or loan outcomes.{' '}
            <span className="text-red-600">*</span>
          </span>
        </label>
        {errors.consent && <p className="mt-1 text-xs text-red-700">{errors.consent}</p>}
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-[#087F5B] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#066749] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F5B]"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          <span>Continue to WhatsApp Consultation</span>
        </button>
      </div>
    </form>
  );
}
