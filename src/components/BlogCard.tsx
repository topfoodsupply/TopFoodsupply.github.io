import React from 'react';
import { BlogPost } from '../types';
import { useTranslation } from 'react-i18next';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
  key?: React.Key;
}

export function BlogCard({ post }: BlogCardProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ar';

  return (
    <Link 
      to="/docs" 
      className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full cursor-pointer"
    >
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title[lang]}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        
        <h3 className="font-bold text-lg text-slate-900 leading-tight mb-3 group-hover:text-emerald-700 transition-colors">
          {post.title[lang]}
        </h3>
        
        <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-1">
          {post.excerpt[lang]}
        </p>
        
        <div className="flex items-center gap-1.5 text-emerald-700 font-semibold text-sm group-hover:text-emerald-800 transition-colors mt-auto w-fit">
          <span>{t('blog.readMore')}</span>
          <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
        </div>
      </div>
    </Link>
  );
}
