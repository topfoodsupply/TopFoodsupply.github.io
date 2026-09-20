import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function WhatsAppButton() {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ar';

  const handleClick = () => {
    const defaultText = encodeURIComponent(
      lang === 'ar'
        ? 'مرحباً، أود الاستفسار عن منتجات TopFood Supply للتصدير والأسعار بالجملة.'
        : 'Hello, I would like to inquire about TopFood Supply export products and wholesale pricing.'
    );
    window.open(`https://wa.me/989120000000?text=${defaultText}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Contact via WhatsApp"
      className="fixed bottom-20 md:bottom-6 end-4 md:end-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-3.5 shadow-lg shadow-emerald-900/30 flex items-center gap-2 group transition-all duration-300 hover:scale-105 active:scale-95"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="hidden sm:inline-block text-xs font-bold pe-1">
        {lang === 'ar' ? 'استفسار عبر واتساب' : 'B2B WhatsApp'}
      </span>
    </button>
  );
}
