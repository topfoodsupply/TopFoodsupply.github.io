export interface LocalizedString {
  en: string;
  ar: string;
  fa: string;
}

export interface BlogPost {
  id: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  date: string;
  imageUrl: string;
}

export interface Product {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  category: string;
  price: number;
  bulkPrice?: number;
  currency: string;
  unit: string;
  certifications: string[];
  hsCode: string;
  imageUrl: string;
  inStock: boolean;
  minOrderQuantity?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
