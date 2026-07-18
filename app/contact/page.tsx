import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';

export default function ContactPage() {
  return (
    <main style={{ minHeight: '80vh' }}>
      <PageHero
        title="Contact Us"
        description="A simple support page for customer trust and store completeness."
      />
      <Container style={{ padding: '60px 24px' }}>
        <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {/* Contact Details */}
          <div style={{
            borderRadius: '20px',
            border: '1px solid var(--border)',
            background: '#fff',
            padding: '32px',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '20px' }}>
              Get in touch
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <p>Email: support@reflectfashion.com</p>
              <p>Phone: +94 11 234 5678</p>
              <p>Hours: Mon - Sat, 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Form */}
          <div style={{
            borderRadius: '20px',
            border: '1px solid var(--border)',
            background: 'var(--bg-soft)',
            padding: '32px',
          }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '20px' }}>
              Support form
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input
                className="input-field"
                placeholder="Your name"
                style={{ background: '#fff', border: '1px solid var(--border)' }}
              />
              <input
                className="input-field"
                placeholder="Your email"
                style={{ background: '#fff', border: '1px solid var(--border)' }}
              />
              <textarea
                className="input-field"
                placeholder="How can we help?"
                rows={4}
                style={{ background: '#fff', border: '1px solid var(--border)', resize: 'vertical', fontFamily: 'inherit' }}
              />
              <button style={{
                padding: '12px 24px',
                borderRadius: '100px',
                background: 'var(--navy)',
                color: '#fff',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.9rem',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(15,37,51,0.1)',
              }}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}