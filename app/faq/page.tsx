import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';

const faqs = [
  {
    question: 'Do you sell only T-shirts right now?',
    answer: 'Yes. This frontend project is intentionally limited to T-shirts for a simpler and cleaner learning flow.',
  },
  {
    question: 'Is cash on delivery available?',
    answer: 'Yes. The checkout page includes cash on delivery as a mock payment option.',
  },
  {
    question: 'Are these real products?',
    answer: 'Not yet. The store currently uses mock data and placeholder images while you build the frontend.',
  },
];

export default function FAQPage() {
  return (
    <main>
      <PageHero title="Frequently Asked Questions" description="Simple support content builds trust and makes the store feel complete." />
      <Container className="space-y-5 py-16">
        {faqs.map((item) => (
          <div key={item.question} className="rounded-4xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-zinc-900">{item.question}</h2>
            <p className="mt-3 text-zinc-600">{item.answer}</p>
          </div>
        ))}
      </Container>
    </main>
  );
}