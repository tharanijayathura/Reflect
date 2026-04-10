import Link from 'next/link';
import Container from '@/components/common/Container';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-black tracking-[0.24em] text-zinc-950">
            REFLECT
          </Link>
          <span className="hidden rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 md:inline-flex">
            T-shirt storefront
          </span>
        </div>

        <nav className="hidden items-center gap-2 rounded-full border border-zinc-200 bg-white px-2 py-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/account" className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100">
            Account
          </Link>
          <Link href="/checkout" className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700">
            Checkout
          </Link>
        </div>
      </Container>
    </header>
  );
}