import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';
import ProductGrid from '@/components/products/ProductGrid';
import { featuredProducts } from '@/lib/data';

export default function FeaturedGrid() {
  return (
    <section className="bg-zinc-50 py-20">
      <Container>
        <SectionHeader
          eyebrow="Featured"
          title="Featured T-shirts"
          description="A few highlighted mock products to make the homepage feel like a real store."
        />
        <ProductGrid products={featuredProducts} />
      </Container>
    </section>
  );
}