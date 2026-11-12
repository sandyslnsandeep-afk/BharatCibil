import { useBrand } from '../context/BrandContext';

interface BrandMarkProps {
  variant?: 'header' | 'footer' | 'card';
  className?: string;
}

export function BrandMark({ variant = 'header', className = '' }: BrandMarkProps) {
  const { customLogoUrl } = useBrand();

  if (variant === 'header') {
    return (
      <span className={`inline-flex items-center shrink-0 py-1 ${className}`}>
        <img
          src={customLogoUrl}
          alt="Bharat Cibil — Your Credit's Guardian Angel"
          referrerPolicy="no-referrer"
          className="h-9 sm:h-11 w-auto max-w-[165px] sm:max-w-[210px] object-contain"
        />
      </span>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`inline-flex flex-col items-start gap-2 ${className}`}>
        <div className="inline-flex items-center rounded-lg bg-white px-3.5 py-2 shadow-sm">
          <img
            src={customLogoUrl}
            alt="Bharat Cibil — Your Credit's Guardian Angel"
            referrerPolicy="no-referrer"
            className="h-11 w-auto max-w-[210px] object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 shadow-xs ${className}`}
    >
      <img
        src={customLogoUrl}
        alt="Bharat Cibil — Your Credit's Guardian Angel"
        referrerPolicy="no-referrer"
        className="h-11 sm:h-12 w-auto max-w-[220px] object-contain"
      />
    </div>
  );
}
