import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';
import ProductGrid from '@/components/products/ProductGrid';
import { trendingProducts } from '@/lib/data';

export default function TrendingSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          eyebrow="Trending"
          title="Trending now"
          description="These mock items help you design the product listing and card layout before adding real inventory."
        />
        <ProductGrid products={trendingProducts} />
      </Container>
    </section>
  );
}