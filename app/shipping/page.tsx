import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';

export default function ShippingPage() {
  return (
    <main style={{ minHeight: '80vh' }}>
      <PageHero title="Shipping Information" description="A basic informational page often expected in online stores." />
      <Container style={{ padding: '60px 24px' }}>
        <div style={{
          maxWidth: '800px',
          fontSize: '1.05rem',
          lineHeight: '1.8',
          color: 'var(--text-secondary)',
        }}>
          <p>
            Orders are processed within 1–2 business days in this mock example. Delivery times and pricing can be customized later once you define your real shipping zones.
          </p>
        </div>
      </Container>
    </main>
  );
}