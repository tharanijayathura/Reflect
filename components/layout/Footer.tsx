import Link from 'next/link';
import Container from '@/components/common/Container';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-zinc-50">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-black tracking-[0.2em]">REFLECT</h3>
          <p className="mt-4 text-sm leading-6 text-zinc-600">
            A frontend-only T-shirt store built with mock data for learning and hand-coding practice.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-900">Shop</h4>
          <div className="mt-4 space-y-3 text-sm text-zinc-600">
            <Link href="/products" className="block hover:text-zinc-900">All T-Shirts</Link>
            <Link href="/categories" className="block hover:text-zinc-900">Categories</Link>
            <Link href="/wishlist" className="block hover:text-zinc-900">Wishlist</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-900">Support</h4>
          <div className="mt-4 space-y-3 text-sm text-zinc-600">
            <Link href="/contact" className="block hover:text-zinc-900">Contact</Link>
            <Link href="/faq" className="block hover:text-zinc-900">FAQ</Link>
            <Link href="/shipping" className="block hover:text-zinc-900">Shipping</Link>
            <Link href="/returns" className="block hover:text-zinc-900">Returns</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-900">Legal</h4>
          <div className="mt-4 space-y-3 text-sm text-zinc-600">
            <Link href="/privacy" className="block hover:text-zinc-900">Privacy Policy</Link>
            <Link href="/terms" className="block hover:text-zinc-900">Terms & Conditions</Link>
            <Link href="/about" className="block hover:text-zinc-900">About</Link>
          </div>
        </div>
      </Container>

      <div className="border-t border-zinc-200 py-5 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Reflect Fashion. All rights reserved.
      </div>
    </footer>
  );
}