import { Product, BlogPost } from './types';
import dateSyrupImage from './assets/products/birshad-date-syrup.jpg';
import whiteMulberrySyrupImage from './assets/products/birshad-white-mulberry-syrup.jpg';
import grapeSyrupImage from './assets/products/birshad-grape-syrup.jpg';

export const products: Product[] = [
  {
    id: 'SKU_102_EN',
    name: {
      en: 'Birshad Date Syrup',
      ar: 'شیره خرما | عصاره النخیل'
    },
    description: {
      en: 'Pure, naturally sweet date syrup extracted from premium Mazafati and Piarom dates. Ideal natural sweetener for food processing, bakery, and retail.',
      ar: 'دبس تمر نقي وحلو طبيعياً مستخرج من تمور المضافتي والبيارم الفاخرة. مُحلي طبيعي مثالي لتصنيع الأغذية والمخابز وتجارة التجزئة.'
    },
    category: 'Syrups & Concentrates',
    price: 7.20,
    bulkPrice: 5.40,
    currency: 'USD',
    unit: 'kg',
    certifications: ['Organic', 'Halal', 'FDA Approved'],
    hsCode: '170290',
    imageUrl: dateSyrupImage,
    inStock: true,
    minOrderQuantity: 200
  },
  {
    id: 'SKU_105_EN',
    name: {
      en: 'Birshad White Mulberry Syrup',
      ar: 'شیره توت سفید | عصاره التوت'
    },
    description: {
      en: 'Naturally sweet white mulberry syrup from Birshad. A natural sweetener for food processing, bakery, and retail.',
      ar: 'شیره توت سفید بیرشاد، مُحلي طبيعي لتصنيع الأغذية والمخابز وتجارة التجزئة.'
    },
    category: 'Syrups & Concentrates',
    price: 7.20,
    bulkPrice: 5.40,
    currency: 'USD',
    unit: 'kg',
    certifications: ['Organic', 'Halal', 'FDA Approved'],
    hsCode: '170290',
    imageUrl: whiteMulberrySyrupImage,
    inStock: true,
    minOrderQuantity: 200
  },
  {
    id: 'SKU_101_EN',
    name: {
      en: 'Birshad Grape Syrup',
      ar: 'شیره انگور | عصیر العنب'
    },
    description: {
      en: '100% natural, additive-free concentrated grape juice. Extracted using traditional methods and refined for global export standards. Rich in antioxidants and natural sugars.',
      ar: 'عصير عنب مركز طبيعي 100٪ بدون إضافات. مستخرج باستخدام الطرق التقليدية ومكرر لمعايير التصدير العالمية. غني بمضادات الأكسدة والسكريات الطبيعية.'
    },
    category: 'Syrups & Concentrates',
    price: 8.50,
    bulkPrice: 6.20,
    currency: 'USD',
    unit: 'kg',
    certifications: ['Organic', 'ISO 22000', 'Halal'],
    hsCode: '170290',
    imageUrl: grapeSyrupImage,
    inStock: true,
    minOrderQuantity: 100
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'BLOG_001',
    title: {
      en: 'The Health Benefits of Pure Grape Syrup',
      ar: 'الفوائد الصحية لدبس العنب النقي'
    },
    excerpt: {
      en: 'Discover how traditional grape syrup can boost your energy levels and provide essential antioxidants for a healthy lifestyle.',
      ar: 'اكتشف كيف يمكن لدبس العنب التقليدي أن يعزز مستويات الطاقة لديك ويوفر مضادات الأكسدة الأساسية لأسلوب حياة صحي.'
    },
    date: '2026-09-12',
    imageUrl: 'https://images.unsplash.com/photo-1596328546171-77e37b5f8b9d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'BLOG_002',
    title: {
      en: 'Why Date Paste is the Ultimate Natural Sweetener',
      ar: 'لماذا يعتبر معجون التمر المُحلي الطبيعي الأفضل'
    },
    excerpt: {
      en: 'Learn how food manufacturers are replacing refined sugars with organic date paste for healthier, delicious baked goods and energy bars.',
      ar: 'تعرف على كيف يستبدل مصنعو الأغذية السكريات المكررة بمعجون التمر العضوي لمنتجات مخبوزة وألواح طاقة صحية ولذيذة.'
    },
    date: '2026-09-05',
    imageUrl: 'https://images.unsplash.com/photo-1596162953258-306915f02bc6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'BLOG_003',
    title: {
      en: 'Fig Syrup: The Ancient Secret to Culinary Excellence',
      ar: 'دبس التين: السر القديم للتميز في الطهي'
    },
    excerpt: {
      en: 'Explore the rich history and modern applications of fig syrup in high-end culinary arts and gourmet dessert crafting.',
      ar: 'استكشف التاريخ الغني والتطبيقات الحديثة لدبس التين في فنون الطهي الراقية وصناعة الحلويات الفاخرة.'
    },
    date: '2026-08-28',
    imageUrl: 'https://images.unsplash.com/photo-1629851609139-3356ee434fa5?auto=format&fit=crop&q=80&w=800'
  }
];
