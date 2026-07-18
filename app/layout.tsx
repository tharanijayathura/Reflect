import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CartProvider } from '@/lib/cart-context';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Reflect Fashion | Premium T-Shirts Sri Lanka',
  description: 'Shop premium quality T-shirts for men, women, and unisex. Free delivery island-wide. Cash on delivery available.',
  keywords: 'T-shirts, fashion, Sri Lanka, men, women, unisex, premium cotton',
  openGraph: {
    title: 'Reflect Fashion | Premium T-Shirts',
    description: 'Premium quality T-shirts with cash on delivery. Shop men, women, and unisex collections.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}