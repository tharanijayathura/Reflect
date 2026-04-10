import Image from 'next/image';
import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';
import Button from '@/components/common/Button';
import { categories } from '@/lib/data';

export default function CategoriesPreview() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          eyebrow="Categories"
          title="Explore T-Shirts by category"
          description="For now the entire store is focused only on T-shirts, separated into men, women, and unisex collections."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <article key={category.slug} className="overflow-hidden rounded-4xl border border-zinc-200 bg-white shadow-sm">
              <div className="relative h-80 bg-zinc-100">
                <Image src={category.image} alt={category.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-zinc-900">{category.title}</h3>
                <p className="mt-3 text-zinc-600">{category.description}</p>
                <Button href={`/categories#${category.slug}`} variant="secondary" className="mt-5">
                  Explore
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}