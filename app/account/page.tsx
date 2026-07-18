import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';

export default function AccountPage() {
  return (
    <main style={{ minHeight: '80vh' }}>
      <PageHero
        title="My Account"
        description="Frontend placeholder for login, profile, addresses, and order history."
      />
      <Container style={{ padding: '60px 24px' }}>
        <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {[
            { title: 'Profile', text: 'Name, email, password, and account preferences can go here later.' },
            { title: 'Orders', text: 'Track past purchases and order status here.' },
            { title: 'Addresses', text: 'Saved delivery addresses will fit naturally in this section.' },
          ].map(card => (
            <div key={card.title} style={{
              borderRadius: '20px',
              border: '1px solid var(--border)',
              background: '#fff',
              padding: '24px',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px' }}>
                {card.title}
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}