import type { Metadata } from 'next';
// The stylesheet is provided by the app's global CSS pipeline, but TypeScript
// may not have a declaration for CSS side-effect imports in some configurations.
// @ts-expect-error CSS files are handled by Next.js at build time.
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
