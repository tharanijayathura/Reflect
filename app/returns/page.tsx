import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';

export default function ReturnsPage() {
  return (
    <main style={{ minHeight: '80vh' }}>
      <PageHero title="Returns & Refunds" description="A customer-friendly returns page helps users trust the store." />
      <Container style={{ padding: '60px 24px' }}>
        <div style={{
          maxWidth: '800px',
          fontSize: '1.05rem',
          lineHeight: '1.8',
          color: 'var(--text-secondary)',
        }}>
          <p>
            This demo store shows a placeholder returns policy. Later you can replace this text with your actual return window, refund rules, and exchange process.
          </p>
        </div>
      </Container>
    </main>
  );
}