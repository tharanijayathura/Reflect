import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';

export default function ShippingPage() {
  return (
    <main>
      <PageHero title="Shipping Information" description="A basic informational page often expected in online stores." />
      <Container className="max-w-4xl py-16 text-lg leading-8 text-zinc-600">
        <p>
          Orders are processed within 1–2 business days in this mock example. Delivery times and pricing can be customized later once you define your real shipping zones.
        </p>
      </Container>
    </main>
  );
}