import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';

export default function PrivacyPage() {
  return (
    <main style={{ minHeight: '80vh' }}>
      <PageHero title="Privacy Policy" description="A standard policy page for store completeness." />
      <Container style={{ padding: '60px 24px' }}>
        <div style={{
          maxWidth: '800px',
          fontSize: '1.05rem',
          lineHeight: '1.8',
          color: 'var(--text-secondary)',
        }}>
          <p>
            This is placeholder privacy content for your frontend learning project. Replace it with your actual privacy policy before launching a real store.
          </p>
        </div>
      </Container>
    </main>
  );
}