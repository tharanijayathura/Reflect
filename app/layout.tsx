import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CartProvider } from '@/lib/cart-context';

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
    <html lang="en">
      <head>
        {/* Load Inter font dynamically to bypass Google Font network block errors during next build */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" />
      </head>
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