import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main style={{ minHeight: '80vh', background: 'var(--bg)' }}>
      <PageHero
        title="About Reflect Fashion"
        description="Crafting the finest minimalist essentials for your everyday wardrobe."
      />
      <Container style={{ padding: '80px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '64px',
          alignItems: 'center',
        }} className="about-grid">
          
          {/* Left Column: Brand Story */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
          }}>
            <div>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '0.2em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                marginBottom: '12px',
                display: 'block'
              }}>
                Our Philosophy
              </span>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: '900',
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                lineHeight: 1.15,
              }}>
                Reflect Your Authentic Self
              </h2>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'var(--text-secondary)',
            }}>
              <p>
                Reflect Fashion is a modern concept store dedicated to high-quality, minimalist essentials. We believe that style should be effortless, comfortable, and tailored to express who you truly are.
              </p>
              <p>
                Our collections are intentionally curated, focusing strictly on premium T-shirts that combine superior fabrics, refined fits, and enduring craftsmanship. From heavyweight drop-shoulder streetwear cuts to clean everyday basics, we make sure each piece elevates your rotation.
              </p>
              <p>
                Every fabric is hand-selected for softness and durability, ensuring that your favorite tee looks and feels as good as new, wash after wash. Discover your perfect fit today.
              </p>
            </div>
            
            {/* Core Values Strip */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              borderTop: '1px solid var(--border)',
              paddingTop: '28px',
              marginTop: '12px',
            }} className="about-values">
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>100%</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Organic Cotton</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>Islandwide</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Cash on Delivery</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>Easy</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '600' }}>7-Day Returns</p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Editorial Image */}
          <div style={{
            position: 'relative',
            width: '100%',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border)',
          }} className="about-image-container">
            <Image
              src="/images/noob.png"
              alt="Reflect Fashion Editorial Showcase"
              width={540}
              height={640}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
              }}
              priority
            />
          </div>
          
        </div>
      </Container>
      
      <style>{`
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .about-image-container {
            max-width: 500px !important;
            margin: 0 auto !important;
          }
        }
        @media (max-width: 480px) {
          .about-values {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </main>
  );
}