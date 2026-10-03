import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Calendar, Tag, ArrowLeft, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext';
import { products } from './data';

export function DocsPage() {
  const { t, i18n } = useTranslation();
  const { addToCart, setIsCartOpen } = useCart();
  const lang = i18n.language as 'en' | 'ar';

  const dateSyrupProduct = products.find(p => p.id === 'SKU_102_EN');

  const handleOrderDateSyrup = () => {
    if (dateSyrupProduct) {
      addToCart(dateSyrupProduct, 1);
      setIsCartOpen(true);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <Helmet>
        <title>TopFood Supply | {t('docs.title')}</title>
        <meta name="description" content="Discover the benefits and properties of premium Date Syrup." />
      </Helmet>

      {/* Article Header (Hero) */}
      <section className="bg-emerald-950 text-white relative overflow-hidden pt-8 pb-24">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-200 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          
          {/* Back Button */}
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-emerald-300 hover:text-white transition-colors text-sm font-semibold bg-white/10 hover:bg-white/15 px-3.5 py-1.5 rounded-lg backdrop-blur-sm"
            >
              <ArrowLeft className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              <span>{lang === 'ar' ? 'العودة إلى الكتالوج الرئيسي' : 'Back to Catalog'}</span>
            </Link>
          </div>

          <div className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 text-emerald-300 text-xs sm:text-sm font-medium mb-6">
              <span className="flex items-center gap-1.5 bg-emerald-900/50 px-3 py-1 rounded-full backdrop-blur-sm">
                <Tag className="w-4 h-4" />
                Syrups & Sweeteners
              </span>
              <span className="flex items-center gap-1.5 bg-emerald-900/50 px-3 py-1 rounded-full backdrop-blur-sm">
                <Calendar className="w-4 h-4" />
                {t('docs.date')}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
              {t('docs.title')}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-3xl mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 md:p-12 border border-slate-200">
          <div className="rounded-xl overflow-hidden mb-10 bg-white border border-slate-100 flex justify-center">
            <img 
              src={dateSyrupProduct?.imageUrl}
              alt={dateSyrupProduct ? dateSyrupProduct.name[lang] : 'Date Syrup'}
              className="max-h-[460px] w-auto object-contain"
            />
          </div>

          <div className="prose prose-slate prose-lg prose-emerald max-w-none text-slate-700 space-y-6 leading-relaxed">
            <p className="text-xl font-medium text-slate-900 leading-relaxed mb-8 border-s-4 border-emerald-600 ps-4">
              {t('docs.p1')}
            </p>
            <p>
              {t('docs.p2')}
            </p>
            <p>
              {t('docs.p3')}
            </p>
          </div>
          
          {/* B2B Commercial Callout - Eliminate Dead End */}
          <div className="mt-10 p-6 bg-emerald-50 rounded-xl border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>{lang === 'ar' ? 'توريد بالجملة وتصدير رسمي' : 'B2B Wholesale & Export Supply'}</span>
              </div>
              <p className="text-xs text-slate-600 max-w-md">
                {lang === 'ar'
                  ? 'متاح في حاويات IBC سعة 1000 لتر وبراميل غذائية 200 كجم مع شهادات التحليل المخبري (CoA).'
                  : 'Available in 1000L IBC totes & 200kg food-grade drums with CoA, HACCP, and ISO certs.'}
              </p>
            </div>
            <button
              onClick={handleOrderDateSyrup}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors flex items-center gap-2 shrink-0 cursor-pointer shadow-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{lang === 'ar' ? 'طلب عرض سعر لهذا المنتج' : 'Add to RFQ Order'}</span>
            </button>
          </div>

          {/* Author info */}
          <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                TF
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">TopFood Editorial Team</p>
                <p className="text-xs text-slate-500">B2B Trade & Agro-Food Specialists</p>
              </div>
            </div>
            <Link 
              to="/" 
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              <span>{lang === 'ar' ? 'تصفح المنتجات الأخرى' : 'Browse Catalog'}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
