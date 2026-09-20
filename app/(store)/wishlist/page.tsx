import PageHero from '@/components/PageHero';
import Container from '@/components/Container';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/lib/data';

export default function WishlistPage() {
  return (
    <main style={{ minHeight: '80vh' }}>
      <PageHero
        title="Wishlist"
        description="A placeholder frontend wishlist page. Later you can save real user favorites."
      />
      <Container style={{ padding: '60px 24px' }}>
        <ProductGrid products={products.slice(0, 3)} />
      </Container>
    </main>
  );
}
