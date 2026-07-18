import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';

export default function TermsPage() {
  return (
    <main style={{ minHeight: '80vh' }}>
      <PageHero title="Terms & Conditions" description="A simple legal page placeholder for your mock frontend store." />
      <Container style={{ padding: '60px 24px' }}>
        <div style={{
          maxWidth: '800px',
          fontSize: '1.05rem',
          lineHeight: '1.8',
          color: 'var(--text-secondary)',
        }}>
          <p>
            These are placeholder terms for design and frontend practice. Replace them with your final business terms before production use.
          </p>
        </div>
      </Container>
    </main>
  );
}