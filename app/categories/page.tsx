import Image from 'next/image';
import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { categories } from '@/lib/data';

export default function CategoriesPage() {
  return (
    <main>
      <PageHero
        title="T-Shirt Categories"
        description="Men, women, and unisex collections. The whole store is limited to T-shirts for now."
      />

      <Container className="space-y-10 py-16">
        {categories.map((category) => (
          <section
            key={category.slug}
            id={category.slug}
            className="grid gap-8 overflow-hidden rounded-4xl border border-zinc-200 bg-white shadow-sm lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="relative min-h-80 bg-zinc-100">
              <Image src={category.image} alt={category.title} fill className="object-cover" />
            </div>
            <div className="p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Collection</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-900">{category.title}</h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600">{category.description}</p>
              <Button href="/products" className="mt-8">View T-Shirts</Button>
            </div>
          </section>
        ))}
      </Container>
    </main>
  );
}