import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Calendar, Tag } from 'lucide-react';

export function DocsPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <Helmet>
        <title>TopFood Supply | {t('docs.title')}</title>
        <meta name="description" content="Discover the benefits and properties of premium Date Syrup." />
      </Helmet>

      {/* Article Header (Hero) */}
      <section className="bg-emerald-950 text-white relative overflow-hidden pt-12 pb-24">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-200 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 text-emerald-300 text-sm font-medium mb-6">
            <span className="flex items-center gap-1.5 bg-emerald-900/50 px-3 py-1 rounded-full backdrop-blur-sm">
              <Tag className="w-4 h-4" />
              Syrups & Sweeteners
            </span>
            <span className="flex items-center gap-1.5 bg-emerald-900/50 px-3 py-1 rounded-full backdrop-blur-sm">
              <Calendar className="w-4 h-4" />
              {t('docs.date')}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {t('docs.title')}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-3xl mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 md:p-12 border border-slate-200">
          <div className="aspect-[21/9] rounded-xl overflow-hidden mb-10 bg-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1607185031441-28dc071ab8ff?auto=format&fit=crop&q=80&w=1200" 
              alt="Date Syrup"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-slate prose-lg prose-emerald max-w-none text-slate-700 space-y-6 leading-relaxed">
            <p className="text-xl font-medium text-slate-900 leading-relaxed mb-8">
              {t('docs.p1')}
            </p>
            <p>
              {t('docs.p2')}
            </p>
            <p>
              {t('docs.p3')}
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                TF
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">TopFood Editorial Team</p>
                <p className="text-xs text-slate-500">B2B Trade Experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
