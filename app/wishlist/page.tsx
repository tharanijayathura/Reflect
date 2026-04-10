import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';
import ProductGrid from '@/components/products/ProductGrid';
import { products } from '@/lib/data';

export default function WishlistPage() {
  return (
    <main>
      <PageHero
        title="Wishlist"
        description="A placeholder frontend wishlist page. Later you can save real user favorites."
      />
      <Container className="py-16">
        <ProductGrid products={products.slice(0, 3)} />
      </Container>
    </main>
  );
}