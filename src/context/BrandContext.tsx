import React, { createContext, useContext, useEffect, useState } from 'react';

export const DEFAULT_OFFICIAL_LOGO_URL = '/assets/aistudio/BharatCibil_5ea7f76c.jpeg';
export const DEFAULT_OFFICIAL_ICON_URL = '/assets/aistudio/BharatLogo1_05ccbbde.png';

interface BrandContextValue {
  customLogoUrl: string;
  founderPhotoUrl: string | null;
  isDefaultLogo: boolean;
  setCustomLogoUrl: (url: string | null) => void;
  setFounderPhotoUrl: (url: string | null) => void;
  handleLogoUpload: (file: File) => void;
  handleFounderPhotoUpload: (file: File) => void;
}

const BrandContext = createContext<BrandContextValue | undefined>(undefined);

const LOGO_STORAGE_KEY = 'bharat_cibil_official_logo_preview';
const FOUNDER_STORAGE_KEY = 'bharat_cibil_founder_photo_preview';

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(() => {
    try {
      return localStorage.getItem(LOGO_STORAGE_KEY);
    } catch {
      return null;
    }
  });

  const [founderPhotoUrl, setFounderPhotoState] = useState<string | null>(() => {
    try {
      return localStorage.getItem(FOUNDER_STORAGE_KEY);
    } catch {
      return null;
    }
  });

  const customLogoUrl = uploadedLogo || DEFAULT_OFFICIAL_LOGO_URL;
  const isDefaultLogo = !uploadedLogo;

  const setCustomLogoUrl = (url: string | null) => {
    setUploadedLogo(url);
    try {
      if (url) localStorage.setItem(LOGO_STORAGE_KEY, url);
      else localStorage.removeItem(LOGO_STORAGE_KEY);
    } catch {
      // Ignore storage quota errors
    }
  };

  const setFounderPhotoUrl = (url: string | null) => {
    setFounderPhotoState(url);
    try {
      if (url) localStorage.setItem(FOUNDER_STORAGE_KEY, url);
      else localStorage.removeItem(FOUNDER_STORAGE_KEY);
    } catch {
      // Ignore storage quota errors
    }
  };

  const handleLogoUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setCustomLogoUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFounderPhotoUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setFounderPhotoUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  // Sync website favicon with uploaded or default official shield icon
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = uploadedLogo || DEFAULT_OFFICIAL_ICON_URL;
  }, [uploadedLogo]);

  return (
    <BrandContext.Provider
      value={{
        customLogoUrl,
        founderPhotoUrl,
        isDefaultLogo,
        setCustomLogoUrl,
        setFounderPhotoUrl,
        handleLogoUpload,
        handleFounderPhotoUpload,
      }}
    >
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const ctx = useContext(BrandContext);
  if (!ctx) throw new Error('useBrand must be used within BrandProvider');
  return ctx;
}
