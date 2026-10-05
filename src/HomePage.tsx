import React, { useMemo } from 'react';
import { ArrowRight, ShieldCheck, Globe2, Zap, BookOpen, SearchX } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { products, blogPosts } from './data';
import { ProductCard } from './components/ProductCard';
import { BlogCard } from './components/BlogCard';
import { useCart } from './context/CartContext';

export function HomePage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery } = useCart();
  const lang = i18n.language as 'en' | 'ar' | 'fa';

  const scrollToCatalog = () => {
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDomesticInquiry = () => {
    const msg = encodeURIComponent(
      lang === 'fa'
        ? 'سلام TopFood Supply، می‌خواهم درباره ارسال داخلی و تسویه با شتاب بپرسم.'
        : lang === 'ar'
        ? 'مرحباً TopFood Supply، أود الاستفسار عن الشحن المحلي والتسليم عبر شبكة شتاب.'
        : 'Hello TopFood Supply, I would like to inquire about domestic Iranian delivery and Shetab settlement.'
    );
    window.open(`https://wa.me/989120000000?text=${msg}`, '_blank');
  };

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    const q = searchQuery.toLowerCase().trim();
    return products.filter(
      p =>
        p.name.en.toLowerCase().includes(q) ||
        p.name.ar.toLowerCase().includes(q) ||
        p.name.fa.toLowerCase().includes(q) ||
        p.description.en.toLowerCase().includes(q) ||
        p.description.ar.toLowerCase().includes(q) ||
        p.description.fa.toLowerCase().includes(q) ||
        p.hsCode.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "TopFood Supply Catalog",
    "description": "Export-grade natural syrups and concentrates including date syrup, white mulberry syrup, and grape syrup.",
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
        <meta name="description" content="Dual-market B2B & B2C e-commerce platform for exporting date syrup, white mulberry syrup, and grape syrup globally." />
        <meta property="og:title" content="TopFood Supply | Premium Syrups & Concentrates" />
        <meta property="og:description" content="Dual-market B2B & B2C e-commerce platform for exporting date syrup, white mulberry syrup, and grape syrup globally." />
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
              <button 
                onClick={scrollToCatalog}
                className="h-14 px-8 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-emerald-950 font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-950/20"
              >
                {t('home.btnExport')}
                <ArrowRight className={`w-5 h-5 ${lang === 'en' ? '' : 'rotate-180'}`} />
              </button>
              <button 
                onClick={handleDomesticInquiry}
                className="h-14 px-8 bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white font-medium rounded-lg backdrop-blur-sm transition-all flex items-center justify-center cursor-pointer border border-white/20"
              >
                {t('home.btnLocal')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
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
      <section id="catalog" className="py-16 bg-slate-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">
                {t('home.catTitle')}
              </h2>
              <p className="text-slate-600">
                {searchQuery 
                  ? (lang === 'fa' ? `نتیجه جستجو: "${searchQuery}"` : lang === 'ar' ? `نتائج البحث عن: "${searchQuery}"` : `Search results for: "${searchQuery}"`)
                  : t('home.catDesc')}
              </p>
            </div>
            
            <button 
              onClick={() => {
                setSearchQuery('');
                scrollToCatalog();
              }}
              className="h-11 px-6 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-emerald-500 hover:text-emerald-700 transition-colors flex items-center justify-center text-sm cursor-pointer shadow-2xs"
            >
              {searchQuery ? (lang === 'fa' ? 'پاک کردن جستجو' : lang === 'ar' ? 'إعادة ضبط البحث' : 'Reset Filter') : t('home.btnViewAll')}
            </button>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto my-8">
              <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <SearchX className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                {lang === 'fa' ? 'محصولی پیدا نشد' : lang === 'ar' ? 'لم يتم العثور على منتجات' : 'No matching products found'}
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                {lang === 'fa'
                  ? 'عبارت دیگری جستجو کنید یا فیلتر را پاک کنید.'
                  : lang === 'ar' 
                  ? 'جرب البحث باسم منتج آخر أو تصفح كامل الكتالوج.' 
                  : 'Try searching with different keywords or reset the filter.'}
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-lg transition-colors"
              >
                {lang === 'fa' ? 'دیدن همه محصول‌ها' : lang === 'ar' ? 'عرض جميع المنتجات' : 'View All Products'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
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
            <button 
              onClick={() => navigate('/docs')}
              className="h-11 px-8 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center text-sm cursor-pointer shadow-sm"
            >
              {t('blog.viewAll')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
