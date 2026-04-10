import Container from '@/components/common/Container';
import PageHero from '@/components/common/PageHero';
import ProductGrid from '@/components/products/ProductGrid';
import { products } from '@/lib/data';

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        title="All T-Shirts"
        description="Browse the full mock catalog with updated prices, product cards, and view-product details."
      />

      <Container className="py-16">
        <ProductGrid products={products} />
      </Container>
    </main>
  );
}