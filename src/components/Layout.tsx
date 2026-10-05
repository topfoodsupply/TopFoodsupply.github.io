import React, { useEffect, useState } from 'react';
import { ShoppingBag, Search, Globe, Home, FileText, Package, MessageCircle, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CartDrawer } from './CartDrawer';
import { WhatsAppButton } from './WhatsAppButton';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems, setIsCartOpen, searchQuery, setSearchQuery } = useCart();
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'en' ? 'ltr' : 'rtl';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const handleCatalogClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#catalog');
    } else {
      const catalogEl = document.getElementById('catalog');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Top Header for Desktop & Mobile */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-2">
          
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 bg-emerald-700 rounded-lg flex items-center justify-center shadow-xs">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg sm:text-xl tracking-tight text-emerald-950 hidden min-[360px]:block">
                TopFood Supply
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 ms-4 text-sm font-semibold text-slate-600">
            <Link to="/" className={`hover:text-emerald-700 transition-colors ${location.pathname === '/' ? 'text-emerald-700 font-bold' : ''}`}>
              {t('nav.home')}
            </Link>
            <button onClick={handleCatalogClick} className="hover:text-emerald-700 transition-colors cursor-pointer">
              {t('nav.catalog')}
            </button>
            <Link to="/docs" className={`hover:text-emerald-700 transition-colors ${location.pathname === '/docs' ? 'text-emerald-700 font-bold' : ''}`}>
              {t('nav.docs')}
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-sm mx-4 relative">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('nav.searchPlaceholder')}
              className="w-full h-10 ps-10 pe-4 bg-slate-100 border border-transparent focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 rounded-lg text-xs sm:text-sm transition-all outline-hidden"
            />
            <Search className="w-4 h-4 text-slate-400 absolute start-3 top-3" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute end-2.5 top-2.5 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Actions & Language Switcher */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Toggle */}
            <button 
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              aria-label="Toggle Search"
              className="md:hidden w-9 h-9 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            {/* Shopping Bag / RFQ Cart Trigger */}
            <button 
              onClick={() => setIsCartOpen(true)}
              aria-label="Open Order Cart"
              className="w-10 h-10 flex items-center justify-center text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-full transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 ? (
                <span className="absolute -top-1 -end-1 min-w-5 h-5 px-1 bg-emerald-600 text-white text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                  {totalItems}
                </span>
              ) : (
                <span className="absolute top-2 end-2 w-2 h-2 bg-emerald-500 rounded-full border border-white"></span>
              )}
            </button>
            
            {/* Language Switcher - ALWAYS VISIBLE ON MOBILE & DESKTOP */}
            <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button 
                onClick={() => i18n.changeLanguage('en')}
                className={`px-2 py-1 text-xs rounded font-bold transition-all ${
                  i18n.language === 'en' 
                    ? 'bg-emerald-700 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => i18n.changeLanguage('ar')}
                className={`px-2 py-1 text-xs rounded font-bold transition-all ${
                  i18n.language === 'ar' 
                    ? 'bg-emerald-700 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                عربي
              </button>
              <button 
                onClick={() => i18n.changeLanguage('fa')}
                className={`px-2 py-1 text-xs rounded font-bold transition-all ${
                  i18n.language === 'fa' 
                    ? 'bg-emerald-700 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                فا
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Expansion */}
        {isMobileSearchOpen && (
          <div className="md:hidden px-4 pb-3 pt-1 border-t border-slate-100 animate-in slide-in-from-top-2">
            <div className="relative">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('nav.searchPlaceholder')}
                autoFocus
                className="w-full h-10 ps-10 pe-10 bg-slate-100 border border-slate-200 focus:bg-white focus:border-emerald-500 rounded-lg text-sm transition-all outline-hidden"
              />
              <Search className="w-4 h-4 text-slate-400 absolute start-3 top-3" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute end-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      {/* pb-24 accounts for mobile bottom navigation */}
      <main className="flex-1 pb-24 md:pb-10">
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
              <li><button onClick={handleCatalogClick} className="hover:text-white transition-colors text-start">{t('footer.docVault')}</button></li>
              <li><button onClick={() => setIsCartOpen(true)} className="hover:text-white transition-colors text-start">{t('footer.taxCalc')}</button></li>
              <li><Link to="/docs" className="hover:text-white transition-colors">{t('footer.certs')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">{t('footer.supply')}</h4>
            <ul className="space-y-2 text-sm text-emerald-300">
              <li><button onClick={handleCatalogClick} className="hover:text-white transition-colors text-start">{t('footer.fefo')}</button></li>
              <li><Link to="/docs" className="hover:text-white transition-colors">{t('footer.trace')}</Link></li>
              <li><button onClick={handleCatalogClick} className="hover:text-white transition-colors text-start">{t('footer.logistics')}</button></li>
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

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-around h-16 px-2">
          <Link 
            to="/" 
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              location.pathname === '/' ? 'text-emerald-700 font-bold' : 'text-slate-500 hover:text-emerald-700'
            }`}
          >
            <Home className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-medium">{t('nav.home')}</span>
          </Link>

          <button 
            onClick={handleCatalogClick}
            className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-emerald-700 transition-colors"
          >
            <Package className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-medium">{t('nav.catalog')}</span>
          </button>

          <Link 
            to="/docs" 
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              location.pathname === '/docs' ? 'text-emerald-700 font-bold' : 'text-slate-500 hover:text-emerald-700'
            }`}
          >
            <FileText className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-medium">{t('nav.docs')}</span>
          </Link>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-emerald-700 transition-colors relative"
          >
            <ShoppingBag className="w-5 h-5 mb-1" />
            {totalItems > 0 && (
              <span className="absolute top-2 end-6 min-w-4 h-4 px-1 bg-emerald-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
            <span className="text-[10px] font-medium">
              {i18n.language === 'fa' ? 'سفارش' : i18n.language === 'ar' ? 'الطلب' : 'Inquiry'}
            </span>
          </button>
        </div>
      </nav>

      {/* RFQ Order Cart Drawer */}
      <CartDrawer />

      {/* Floating WhatsApp CTA */}
      <WhatsAppButton />
    </div>
  );
}
