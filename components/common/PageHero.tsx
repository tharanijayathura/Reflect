import Container from './Container';

type PageHeroProps = {
  title: string;
  description: string;
};

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section style={{
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-soft)',
    }}>
      <Container style={{ padding: '60px 24px' }}>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: '900', letterSpacing: '-0.02em', color: 'var(--text-primary)', marginBottom: '12px' }}>
          {title}
        </h1>
        <p style={{ maxWidth: '640px', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {description}
        </p>
      </Container>
    </section>
  );
}