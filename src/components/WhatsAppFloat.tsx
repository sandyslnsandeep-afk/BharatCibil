import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, HERO_DEFAULT_WHATSAPP_MSG } from '../data/siteData';

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl(HERO_DEFAULT_WHATSAPP_MSG)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Bharat Cibil on WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#087F5B] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg transition-transform duration-150 hover:scale-[1.02] hover:bg-[#066749] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1E3A] whitespace-nowrap"
    >
      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>Chat with Bharat Cibil</span>
    </a>
  );
}
