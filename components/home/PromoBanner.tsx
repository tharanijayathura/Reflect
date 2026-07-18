import Image from 'next/image';
import Link from 'next/link';

export default function PromoBanner() {
  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-soft)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          borderRadius: '28px',
          overflow: 'hidden',
          border: '1px solid var(--border)',
          minHeight: '420px',
          boxShadow: 'var(--shadow-sm)',
        }} className="promo-grid">
          {/* Text side */}
          <div style={{
            padding: '60px',
            background: 'linear-gradient(135deg, var(--bg-teal) 0%, #fff 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Glow */}
            <div style={{
              position: 'absolute',
              top: '-80px',
              left: '-80px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'rgba(74, 158, 186, 0.15)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }} />

            <span style={{
              display: 'inline-block',
              padding: '5px 14px',
              borderRadius: '100px',
              background: 'var(--accent-soft)',
              border: '1px solid rgba(74, 158, 186, 0.25)',
              fontSize: '0.7rem',
              fontWeight: '700',
              letterSpacing: '0.15em',
              color: 'var(--accent-dark)',
              textTransform: 'uppercase',
              marginBottom: '20px',
              width: 'fit-content',
            }}>
              Limited Time Offer
            </span>

            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: '900',
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}>
              UP TO 30% OFF
              <br />
              <span style={{
                background: 'linear-gradient(135deg, var(--accent-dark) 0%, var(--accent) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>SELECT STYLES</span>
            </h2>

            <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)', maxWidth: '360px', marginBottom: '32px' }}>
              Shop our sale collection and save on premium T-shirts. All orders delivered island-wide with cash on delivery.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link
                href="/products"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 28px',
                  borderRadius: '100px',
                  background: 'var(--navy)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(15, 37, 51, 0.15)',
                  transition: 'all 0.2s',
                }}
                className="promo-cta"
              >
                Shop the Sale →
              </Link>
              <Link
                href="/categories"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '13px 28px',
                  borderRadius: '100px',
                  border: '1.5px solid var(--border)',
                  background: '#fff',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                className="promo-sec-cta"
              >
                Browse All
              </Link>
            </div>

            {/* COD note */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '28px' }}>
              <span style={{ fontSize: '1rem' }}>💵</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>Cash on delivery — pay when it arrives</span>
            </div>
          </div>

          {/* Image side */}
          <div style={{ position: 'relative', minHeight: '360px' }}>
            <Image
              src="/images/hero.png"
              alt="Promotional banner — Reflect Fashion Sale"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(218, 238, 245, 0.4) 0%, transparent 60%)',
            }} />
            {/* Floating discount badge */}
            <div style={{
              position: 'absolute',
              top: '32px',
              right: '32px',
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(74, 158, 186, 0.3)',
              animation: 'float 3s ease-in-out infinite',
            }}>
              <span style={{ fontSize: '1.25rem', fontWeight: '900', color: '#fff', lineHeight: 1 }}>30%</span>
              <span style={{ fontSize: '0.55rem', fontWeight: '800', color: '#fff', letterSpacing: '0.15em', textTransform: 'uppercase' }}>OFF</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .promo-cta:hover { background: var(--accent) !important; transform: translateY(-2px); }
        .promo-sec-cta:hover { border-color: var(--accent); color: var(--accent); }
        @media (max-width: 768px) {
          .promo-grid { grid-template-columns: 1fr !important; }
          .promo-grid > div:last-child { min-height: 260px !important; }
          .promo-grid > div:first-child { padding: 36px 28px !important; }
        }
      `}</style>
    </section>
  );
}