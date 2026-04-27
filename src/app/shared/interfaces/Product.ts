export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  tag?: string;
  size: string;
}

interface ProductSize {
  label: string;
  priceMultiplier: number;
}

interface ProductImage {
  url: string;
  isPrimary: boolean;
}

export interface AdminProduct {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  sizes: ProductSize[];
  images: ProductImage[];
  isActive: boolean;
  stockQuantity: number; // <-- Agregado
}
