import Image from 'next/image';
import Button from '@/components/common/Button';
import ProductInfoTable from './ProductInfoTable';
import type { Product } from '@/lib/data';

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <section className="py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="relative overflow-hidden rounded-4xl bg-zinc-100">
          <Image src={product.image} alt={product.name} width={1200} height={1400} className="h-full w-full object-cover" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">{product.category} T-shirt</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-zinc-950">{product.name}</h1>
          <div className="mt-4 flex items-center gap-4">
            <span className="text-2xl font-bold text-zinc-950">${product.price}</span>
            {product.oldPrice ? <span className="text-lg text-zinc-400 line-through">${product.oldPrice}</span> : null}
          </div>
          <p className="mt-6 text-lg leading-8 text-zinc-600">{product.description}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Sizes</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <span key={size} className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium">
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Colors</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <span key={color} className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700">
                    {color}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/cart">Add to Cart</Button>
            <Button href="/checkout" variant="secondary">Buy Now</Button>
          </div>

          <div className="mt-10">
            <ProductInfoTable product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}