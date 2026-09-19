import React, { useEffect } from 'react';
import { ShoppingBag, Search, Menu, User, Globe, Home, FileText, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Top Header for Desktop & Mobile */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-700 rounded-md flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-emerald-900 hidden sm:block">
                TopFood Supply
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6 ms-6 text-sm font-semibold text-slate-600">
            <Link to="/" className={`hover:text-emerald-700 transition-colors ${location.pathname === '/' ? 'text-emerald-700' : ''}`}>
              {t('nav.home')}
            </Link>
            <Link to="/docs" className={`hover:text-emerald-700 transition-colors ${location.pathname === '/docs' ? 'text-emerald-700' : ''}`}>
              {t('nav.docs')}
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-sm mx-8 relative">
            <input 
              type="text" 
              placeholder={t('nav.searchPlaceholder')}
              className="w-full h-11 ps-11 pe-4 bg-slate-100 border-transparent focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-lg text-sm transition-all"
            />
            <Search className="w-5 h-5 text-slate-400 absolute start-3 top-3" />
          </div>

          <div className="flex items-center gap-1 sm:gap-4">
            <button className="md:hidden w-11 h-11 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="w-11 h-11 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-full transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-2 end-2 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="hidden sm:flex w-11 h-11 items-center justify-center text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="md:hidden w-11 h-11 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
              <Menu className="w-5 h-5" />
            </button>
            
            <div className="hidden md:flex items-center gap-2 ms-2 ps-4 border-s border-slate-200">
              <button 
                onClick={() => i18n.changeLanguage('en')}
                className={`text-sm ${i18n.language === 'en' ? 'font-bold text-emerald-700' : 'font-medium text-slate-500 hover:text-slate-800'}`}>
                EN
              </button>
              <span className="text-slate-300">/</span>
              <button 
                onClick={() => i18n.changeLanguage('ar')}
                className={`text-sm ${i18n.language === 'ar' ? 'font-bold text-emerald-700' : 'font-medium text-slate-500 hover:text-slate-800'}`}>
                AR
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      {/* pb-20 accounts for mobile bottom navigation */}
      <main className="flex-1 pb-20 md:pb-8">
        {children}
      </main>

      {/* Desktop Footer */}
      <footer className="hidden md:block bg-emerald-950 text-emerald-50 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-emerald-400" />
              <span className="font-bold text-lg">TopFood Supply</span>
            </div>
            <p className="text-emerald-200 text-sm leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">{t('footer.export')}</h4>
            <ul className="space-y-2 text-sm text-emerald-300">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.docVault')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.taxCalc')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.certs')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">{t('footer.supply')}</h4>
            <ul className="space-y-2 text-sm text-emerald-300">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.fefo')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.trace')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.logistics')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-sm text-emerald-300">
              <li dir="ltr" className="text-start">{t('footer.hq')}</li>
              <li dir="ltr" className="text-start">{t('footer.sales')}</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation (PDR Requirement: Touch-First & Bottom Navigation) */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 pb-safe z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-around h-16">
          <Link to="/" className={`flex flex-col items-center justify-center w-full h-full transition-colors ${location.pathname === '/' ? 'text-emerald-700' : 'text-slate-500 hover:text-emerald-700'}`}>
            <Home className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-medium">{t('nav.home')}</span>
          </Link>
          <button className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-emerald-700 transition-colors">
            <Package className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-medium">{t('nav.catalog')}</span>
          </button>
          <Link to="/docs" className={`flex flex-col items-center justify-center w-full h-full transition-colors ${location.pathname === '/docs' ? 'text-emerald-700' : 'text-slate-500 hover:text-emerald-700'}`}>
            <FileText className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-medium">{t('nav.docs')}</span>
          </Link>
          <button className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-emerald-700 transition-colors">
            <User className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-medium">{t('nav.profile')}</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
