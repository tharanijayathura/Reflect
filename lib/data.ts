export type ProductCategory = 'men' | 'women' | 'unisex';

export type Product = {
  id: number;
  name: string;
  slug: string;
  category: ProductCategory;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  description: string;
  colors: string[];
  sizes: string[];
  fabric: string;
  fit: string;
  sku: string;
  inStock: boolean;
  rating: number;
  reviews: number;
};

export type Category = {
  slug: ProductCategory;
  title: string;
  description: string;
  image: string;
};

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/categories', label: 'Categories' },
  { href: '/wishlist', label: 'Wishlist' },
  { href: '/cart', label: 'Cart' },
];

export const categories: Category[] = [
  {
    slug: 'men',
    title: 'Men T-Shirts',
    description: 'Structured fits, refined basics, and easy everyday layers for men.',
    image: '/images/Tshirts/men/m1.png',
  },
  {
    slug: 'women',
    title: 'Women T-Shirts',
    description: 'Soft silhouettes, versatile neutrals, and elevated casual styling for women.',
    image: '/images/Tshirts/women/w1.png',
  },
  {
    slug: 'unisex',
    title: 'Unisex T-Shirts',
    description: 'Relaxed cuts and versatile essentials designed for everyone.',
    image: '/images/Tshirts/unisex/u1.png',
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Core Tee',
    slug: 'classic-core-tee',
    category: 'men',
    price: 39,
    oldPrice: 52,
    image: '/images/Tshirts/men/m1.png',
    badge: 'Best Seller',
    description: 'A clean everyday men\'s T-shirt with a structured fit and smooth cotton handfeel.',
    colors: ['Black', 'White', 'Olive'],
    sizes: ['S', 'M', 'L', 'XL'],
    fabric: 'Premium Jersey Cotton',
    fit: 'Regular Fit',
    sku: 'RF-M-001',
    inStock: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: 'Soft Street Tee',
    slug: 'soft-street-tee',
    category: 'women',
    price: 36,
    oldPrice: 49,
    image: '/images/Tshirts/women/w1.png',
    badge: 'New',
    description: 'A soft-touch women\'s T-shirt with a balanced shape for casual and smart styling.',
    colors: ['Cream', 'Black', 'Rose'],
    sizes: ['XS', 'S', 'M', 'L'],
    fabric: 'Cotton Blend',
    fit: 'Slim Relaxed Fit',
    sku: 'RF-W-001',
    inStock: true,
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 3,
    name: 'Everyday Unisex Tee',
    slug: 'everyday-unisex-tee',
    category: 'unisex',
    price: 35,
    oldPrice: 47,
    image: '/images/Tshirts/unisex/u1.png',
    badge: 'Popular',
    description: 'A versatile unisex T-shirt designed for comfort, layering, and easy styling.',
    colors: ['Grey', 'White', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    fabric: 'Heavy Cotton',
    fit: 'Oversized Fit',
    sku: 'RF-U-001',
    inStock: true,
    rating: 4.9,
    reviews: 211,
  },
  {
    id: 4,
    name: 'Minimal Logo Tee',
    slug: 'minimal-logo-tee',
    category: 'men',
    price: 41,
    image: '/images/Tshirts/men/m1.png',
    badge: 'Trending',
    description: 'Minimal branding, structured shoulders, and a polished look for daily wear.',
    colors: ['Black', 'Stone'],
    sizes: ['M', 'L', 'XL'],
    fabric: 'Premium Jersey',
    fit: 'Relaxed Fit',
    sku: 'RF-M-002',
    inStock: true,
    rating: 4.6,
    reviews: 57,
  },
  {
    id: 5,
    name: 'Studio Basic Tee',
    slug: 'studio-basic-tee',
    category: 'women',
    price: 33,
    image: '/images/Tshirts/women/w1.png',
    badge: 'Sale',
    description: 'A lightweight studio-inspired T-shirt with an elegant neckline and smooth drape.',
    colors: ['White', 'Sand'],
    sizes: ['XS', 'S', 'M'],
    fabric: 'Soft Cotton',
    fit: 'Classic Fit',
    sku: 'RF-W-002',
    inStock: true,
    rating: 4.5,
    reviews: 33,
  },
  {
    id: 6,
    name: 'Oversized Daily Tee',
    slug: 'oversized-daily-tee',
    category: 'unisex',
    price: 42,
    image: '/images/Tshirts/unisex/u1.png',
    badge: 'Editor Pick',
    description: 'An oversized drop-shoulder T-shirt that works for modern streetwear styling.',
    colors: ['Charcoal', 'Milk'],
    sizes: ['S', 'M', 'L', 'XL'],
    fabric: '240 GSM Cotton',
    fit: 'Oversized Fit',
    sku: 'RF-U-002',
    inStock: true,
    rating: 4.8,
    reviews: 73,
  },
];

export const featuredProducts = products.slice(0, 3);
export const trendingProducts = products.slice(0, 6);

export const services = [
  'Cash on Delivery available',
  'Secure checkout mock UI',
  'Easy returns policy section',
  'Frontend only with mock products',
];