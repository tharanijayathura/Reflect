import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';

export default function TermsPage() {
  return (
    <main>
      <PageHero title="Terms & Conditions" description="A simple legal page placeholder for your mock frontend store." />
      <Container className="max-w-4xl py-16 text-lg leading-8 text-zinc-600">
        <p>
          These are placeholder terms for design and frontend practice. Replace them with your final business terms before production use.
        </p>
      </Container>
    </main>
  );
}