import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/common/Badge';
import type { Product } from '@/lib/data';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-4xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/products/${product.slug}`}>
        <div className="relative h-80 bg-zinc-100">
          <Image src={product.image} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
        </div>
      </Link>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{product.category}</span>
          {product.badge ? <Badge text={product.badge} /> : null}
        </div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="text-xl font-bold text-zinc-900 transition hover:text-zinc-600">{product.name}</h3>
        </Link>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-600">{product.description}</p>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-lg font-bold text-zinc-950">${product.price}</span>
          {product.oldPrice ? <span className="text-sm text-zinc-400 line-through">${product.oldPrice}</span> : null}
        </div>

        <div className="mt-5 flex gap-3">
          <Link href={`/products/${product.slug}`} className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700">
            View Product
          </Link>
          <Link href="/cart" className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-100">
            Add to Cart
          </Link>
        </div>
      </div>
    </article>
  );
}