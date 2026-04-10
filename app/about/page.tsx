import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Reflect Fashion"
        description="A learning project focused on modern frontend structure for a T-shirt store."
      />
      <Container className="py-16">
        <div className="max-w-3xl space-y-6 text-lg leading-8 text-zinc-600">
          <p>
            Reflect Fashion is currently a frontend-only project made to help you practice real-world e-commerce layout, reusable components, and clean folder structure.
          </p>
          <p>
            The store is intentionally limited to T-shirts only. That makes it easier to design product pages, category pages, cart flow, and checkout without too much complexity.
          </p>
        </div>
      </Container>
    </main>
  );
}