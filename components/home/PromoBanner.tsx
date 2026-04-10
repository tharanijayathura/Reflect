import Image from 'next/image';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function PromoBanner() {
  return (
    <section className="pb-20">
      <Container>
        <div className="grid overflow-hidden rounded-4xl bg-zinc-950 text-white lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">Reflect Fashion</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Built for a modern T-shirt storefront.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              This section gives your homepage a premium store feeling. Later you can replace the text, products, and imagery with your real brand voice.
            </p>
            <Button href="/checkout" className="mt-8">Try Checkout Flow</Button>
          </div>
          <div className="relative min-h-87.5">
            <Image src="/images/hero.png" alt="Promotional banner" fill className="object-cover opacity-90" />
          </div>
        </div>
      </Container>
    </section>
  );
}