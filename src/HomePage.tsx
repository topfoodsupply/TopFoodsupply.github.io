import React from 'react';
import { ArrowRight, ShieldCheck, Globe2, Zap, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { products, blogPosts } from './data';
import { ProductCard } from './components/ProductCard';
import { BlogCard } from './components/BlogCard';

export function HomePage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ar';

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "TopFood Supply Catalog",
    "description": "Export-grade natural syrups and concentrates including grape syrup, date syrup, and fig syrup.",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name[lang],
        "description": product.description[lang],
        "image": product.imageUrl,
        "category": product.category,
        "sku": product.id,
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": product.currency,
          "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "value": product.minOrderQuantity,
            "unitText": product.unit
          }
        }
      }
    }))
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>TopFood Supply | Premium Syrups & Concentrates</title>
        <meta name="description" content="Dual-market B2B & B2C e-commerce platform for exporting premium Iranian grape syrup, date syrup, and fig syrup globally." />
        <meta property="og:title" content="TopFood Supply | Premium Syrups & Concentrates" />
        <meta property="og:description" content="Dual-market B2B & B2C e-commerce platform for exporting premium Iranian grape syrup, date syrup, and fig syrup globally." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-emerald-950 text-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-100 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
              {t('home.title1')} <br />
              <span className="text-emerald-400">{t('home.title2')}</span>
            </h1>
            <p className="text-lg text-emerald-100 mb-8 max-w-xl leading-relaxed">
              {t('home.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="h-14 px-8 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                {t('home.btnExport')}
                <ArrowRight className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </button>
              <button className="h-14 px-8 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-sm transition-colors flex items-center justify-center">
                {t('home.btnLocal')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights (Based on PDR requirements) */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{t('home.feat1Title')}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t('home.feat1Desc')}</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{t('home.feat2Title')}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t('home.feat2Desc')}</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{t('home.feat3Title')}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t('home.feat3Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">{t('home.catTitle')}</h2>
              <p className="text-slate-600">{t('home.catDesc')}</p>
            </div>
            
            <button className="h-11 px-6 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-emerald-500 hover:text-emerald-700 transition-colors flex items-center justify-center text-sm">
              {t('home.btnViewAll')}
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
              {t('blog.title')}
            </h2>
            <p className="text-slate-600 max-w-2xl">
              {t('blog.desc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="flex justify-center">
            <button className="h-11 px-8 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center text-sm">
              {t('blog.viewAll')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
