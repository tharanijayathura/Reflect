import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      background: '#ffffff',
      minHeight: '620px',
      height: 'calc(100vh - 70px)',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }} className="hero-section">
      
      {/* Grid container splitting text and image columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        width: '100%',
        height: '100%',
        alignItems: 'stretch',
      }} className="hero-container">

        {/* Left Column: Text content on a solid white background for maximum legibility */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 40px 80px 10%',
          zIndex: 2,
          position: 'relative',
          background: '#ffffff',
        }} className="hero-left-col">
          
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '100px',
            background: 'var(--accent-soft)',
            border: '1px solid rgba(74, 158, 186, 0.25)',
            marginBottom: '28px',
            width: 'fit-content',
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--accent)',
              display: 'block',
            }} />
            <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--c-navy)', textTransform: 'uppercase' }}>
              New Season T-Shirts
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            fontWeight: '900',
            lineHeight: '1.15',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '20px',
          }}>
            REFLECT
            <br />
            <span style={{
              background: 'linear-gradient(135deg, var(--c-navy) 0%, var(--c-teal) 60%, var(--c-slate) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>YOUR STYLE</span>
            <br />
            <span style={{ color: 'var(--text-secondary)' }}>WITH EVERY TEE</span>
          </h1>

          {/* Description */}
          <p style={{
            fontSize: '1.05rem',
            lineHeight: '1.7',
            color: 'var(--text-secondary)',
            maxWidth: '460px',
            marginBottom: '40px',
          }}>
            Elevate your style with the latest trends and comfort-focused essentials. Crafted for everyday wear, delivered island-wide.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '44px' }}>
            <Link href="/products" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              borderRadius: '100px',
              background: 'var(--navy)',
              color: '#fff',
              fontSize: '0.95rem',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 16px rgba(15,37,51,0.15)',
            }} className="hero-btn-primary">
              Shop Collection
              <ArrowForwardIcon style={{ fontSize: '1.1rem' }} />
            </Link>
            <Link href="/categories" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              borderRadius: '100px',
              background: '#fff',
              border: '1.5px solid var(--border-dark)',
              color: 'var(--text-primary)',
              fontSize: '0.95rem',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }} className="hero-btn-secondary">
              Browse Categories
            </Link>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex',
            gap: '32px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border-dark)',
            flexWrap: 'wrap',
            width: '100%',
            maxWidth: '480px',
          }}>
            {[
              { value: '20+', label: 'T-Shirt Styles' },
              { value: '500+', label: 'Happy Customers' },
              { value: 'COD', label: 'Cash on Delivery' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--accent)' }}>{stat.value}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: '600', marginTop: '2px' }}>{stat.label}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Displays the horizontal bg.png cleanly with blending */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          background: '#ffffff',
        }} className="hero-right-col">
          <Image
            src="/images/bg.png"
            alt="Reflect Fashion Collection"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center 35%',
            }}
            priority
          />
          {/* Blend mask overlay to transition white background to image */}
          <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
          }} className="hero-blend-mask" />
        </div>

      </div>

      <style>{`
        .hero-btn-primary:hover { background: var(--accent) !important; transform: translateY(-2px); }
        .hero-btn-secondary:hover { border-color: var(--accent) !important; color: var(--accent) !important; }
        
        /* Smooth horizontal fade blending for desktop split screens */
        @media (min-width: 1025px) {
          .hero-blend-mask {
            background: linear-gradient(to right, #ffffff 0%, rgba(255, 255, 255, 0.95) 8%, rgba(255, 255, 255, 0) 35%) !important;
          }
        }

        /* Stacks columns vertically on smaller screens and mobile */
        @media (max-width: 1024px) {
          .hero-section { height: auto !important; min-height: auto !important; padding: 60px 0 0 !important; }
          .hero-container { grid-template-columns: 1fr !important; }
          .hero-left-col { padding: 40px 24px !important; }
          .hero-right-col { height: 420px !important; }
          .hero-blend-mask {
            background: linear-gradient(to bottom, #ffffff 0%, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0) 35%) !important;
          }
        }
      `}</style>
    </section>
  );
}