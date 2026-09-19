import React from 'react';
import { Product } from '../types';
import { FileBadge, Scale, ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ar';

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
      {/* Image Container with lazy loading and skeleton illusion */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name[lang]}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 end-3 flex flex-col gap-1.5">
          {product.certifications.map(cert => (
            <span key={cert} className="bg-white/90 backdrop-blur-sm text-emerald-800 text-[10px] font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1 uppercase tracking-wider">
              <FileBadge className="w-3 h-3" /> {cert}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              {t('product.hsCode')} {product.hsCode}
            </span>
            <h3 className="font-bold text-slate-900 leading-tight">
              {product.name[lang]}
            </h3>
          </div>
        </div>
        
        <p className="text-sm text-slate-600 line-clamp-2 mb-4 flex-1">
          {product.description[lang]}
        </p>
        
        <div className="bg-slate-50 rounded-lg p-4 mb-4 space-y-3">
          {/* B2B / Bulk Price Focus */}
          {product.bulkPrice && (
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                <Scale className="w-4 h-4 text-emerald-600" /> {t('product.b2b')}
              </span>
              <span className="font-bold text-lg text-emerald-700" dir="ltr">
                {product.currency} {product.bulkPrice.toFixed(2)}<span className="text-xs font-medium text-slate-500">/{product.unit}</span>
              </span>
            </div>
          )}
          
          <div className="flex justify-between items-center text-xs border-t border-slate-200 pt-3">
            <span className="text-slate-500">{t('product.retail')}</span>
            <span className="font-medium text-slate-700" dir="ltr">
              {product.currency} {product.price.toFixed(2)}<span className="text-[10px] text-slate-400">/{product.unit}</span>
            </span>
          </div>
        </div>

        <button className="w-full h-12 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors active:scale-[0.98]">
          <ShoppingCart className="w-4.5 h-4.5" />
          <span>{t('product.addToOrder')}</span>
        </button>
      </div>
    </div>
  );
}
