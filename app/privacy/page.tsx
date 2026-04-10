import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';

export default function PrivacyPage() {
  return (
    <main>
      <PageHero title="Privacy Policy" description="A standard policy page for store completeness." />
      <Container className="max-w-4xl py-16 text-lg leading-8 text-zinc-600">
        <p>
          This is placeholder privacy content for your frontend learning project. Replace it with your actual privacy policy before launching a real store.
        </p>
      </Container>
    </main>
  );
}