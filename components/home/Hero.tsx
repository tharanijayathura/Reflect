import Image from 'next/image';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function Hero() {
  return (
    <section className="bg-white">
      <Container className="grid gap-10 py-12 lg:grid-cols-2 lg:items-center lg:py-20">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Modern T-Shirts Collection
          </p>
          <h1 className="max-w-xl text-5xl font-black leading-none tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
            REFLECT YOUR STYLE WITH T-SHIRTS.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-600">
            Frontend-only fashion store with mock data, category pages, product details, cart, checkout, and cash on delivery option.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/products">Shop T-Shirts</Button>
            <Button href="/categories" variant="secondary">Browse Categories</Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-4xl bg-zinc-100">
          <Image
            src="/images/hero.png"
            alt="Reflect Fashion hero"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  );
}