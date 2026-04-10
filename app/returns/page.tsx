import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';

export default function ReturnsPage() {
  return (
    <main>
      <PageHero title="Returns & Refunds" description="A customer-friendly returns page helps users trust the store." />
      <Container className="max-w-4xl py-16 text-lg leading-8 text-zinc-600">
        <p>
          This demo store shows a placeholder returns policy. Later you can replace this text with your actual return window, refund rules, and exchange process.
        </p>
      </Container>
    </main>
  );
}