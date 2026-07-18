import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';

export default function AboutPage() {
  return (
    <main style={{ minHeight: '80vh' }}>
      <PageHero
        title="About Reflect Fashion"
        description="A learning project focused on modern frontend structure for a T-shirt store."
      />
      <Container style={{ padding: '60px 24px' }}>
        <div style={{
          maxWidth: '800px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          fontSize: '1.05rem',
          lineHeight: '1.8',
          color: 'var(--text-secondary)',
        }}>
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