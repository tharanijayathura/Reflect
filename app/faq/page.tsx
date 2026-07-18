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
    <main style={{ minHeight: '80vh' }}>
      <PageHero title="Frequently Asked Questions" description="Simple support content builds trust and makes the store feel complete." />
      <Container style={{ padding: '60px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {faqs.map((item) => (
          <div key={item.question} style={{
            borderRadius: '20px',
            border: '1px solid var(--border)',
            background: '#fff',
            padding: '24px',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px' }}>
              {item.question}
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              {item.answer}
            </p>
          </div>
        ))}
      </Container>
    </main>
  );
}