import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      background: '#ffffff',
      minHeight: '680px',
      height: 'calc(100vh - 70px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }} className="hero-section">
      
      {/* Background Image Container - Full screen size */}
      <div style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}>
        <Image
          src="/images/image.png"
          alt="Reflect Fashion Collection"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center 25%',
          }}
          priority
        />
        {/* Soft gradient wash to ensure high text contrast while keeping models visible */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.4) 100%)',
          zIndex: 2,
        }} />
      </div>

      {/* Spotlight container: Soft white radial spotlight behind the text */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        maxWidth: '900px',
        margin: '0 auto',
        padding: '60px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.7) 65%, rgba(255,255,255,0) 100%)',
        borderRadius: '40px',
      }} className="hero-content-center">
        
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

        {/* Big Centered Headline */}
        <h1 style={{
          fontSize: 'clamp(2.8rem, 6.2vw, 5.2rem)',
          fontWeight: '900',
          lineHeight: '1.08',
          letterSpacing: '-0.03em',
          color: 'var(--text-primary)',
          marginBottom: '24px',
          textTransform: 'uppercase',
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
          fontSize: '1.15rem',
          lineHeight: '1.7',
          color: 'var(--text-primary)',
          maxWidth: '560px',
          marginBottom: '40px',
          fontWeight: '500',
        }}>
          Elevate your style with the latest trends and comfort-focused essentials. Crafted for everyday wear, delivered island-wide.
        </p>

        {/* Centered CTAs */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '44px', width: '100%' }}>
          <Link href="/products" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '16px 36px',
            borderRadius: '100px',
            background: 'var(--navy)',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: '700',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
            boxShadow: '0 4px 20px rgba(15,37,51,0.2)',
          }} className="hero-btn-primary">
            Shop Collection
            <ArrowForwardIcon style={{ fontSize: '1.1rem' }} />
          </Link>
          <Link href="/categories" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '16px 36px',
            borderRadius: '100px',
            background: '#fff',
            border: '1.5px solid var(--border-dark)',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            fontWeight: '700',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
          }} className="hero-btn-secondary">
            Browse Categories
          </Link>
        </div>

        {/* Centered Stats */}
        <div style={{
          display: 'flex',
          gap: '40px',
          justifyContent: 'center',
          paddingTop: '24px',
          borderTop: '1px solid var(--border-dark)',
          flexWrap: 'wrap',
          width: '100%',
          maxWidth: '540px',
        }}>
          {[
            { value: '20+', label: 'T-Shirt Styles' },
            { value: '500+', label: 'Happy Customers' },
            { value: 'COD', label: 'Cash on Delivery' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.35rem', fontWeight: '900', color: 'var(--accent)' }}>{stat.value}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '600', marginTop: '2px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .hero-btn-primary:hover { background: var(--accent) !important; transform: translateY(-2px); }
        .hero-btn-secondary:hover { border-color: var(--accent) !important; color: var(--accent) !important; }
        
        @media (max-width: 768px) {
          .hero-section { height: auto !important; min-height: 100vh !important; padding: 100px 0 60px !important; }
          .hero-content-center {
            padding: 40px 16px !important;
            background: rgba(255, 255, 255, 0.9) !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            border-radius: 24px !important;
            border: 1px solid rgba(255, 255, 255, 0.5) !important;
            box-shadow: 0 8px 32px rgba(15, 37, 51, 0.08) !important;
          }
        }
      `}</style>
    </section>
  );
}