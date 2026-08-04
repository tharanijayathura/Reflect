import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Hero() {
  const acronymItems = [
    { letter: 'R', word: 'efined Design' },
    { letter: 'E', word: 'veryday Comfort' },
    { letter: 'F', word: 'ine Fabrics' },
    { letter: 'L', word: 'ocal Craftsmanship' },
    { letter: 'E', word: 'ssential Fits' },
    { letter: 'C', word: 'lassic Curation' },
    { letter: 'T', word: 'rending Styles' },
  ];

  return (
    <section style={{
      position: 'relative',
      background: '#ffffff',
      minHeight: '640px',
      height: 'calc(100vh - 70px)',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }} className="hero-section">
      
      {/* Grid container splitting text and image columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.05fr 1.15fr',
        width: '100%',
        height: '100%',
        alignItems: 'stretch',
      }} className="hero-container">

        {/* Left Column: Text content & Interactive Acronym Art */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '40px 40px 40px 10%',
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
            marginBottom: '20px',
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

          {/* Big Header Title */}
          <h1 style={{
            fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
            fontWeight: '950',
            lineHeight: '1.05',
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            marginBottom: '28px',
          }}>
            <span style={{
              background: 'linear-gradient(135deg, var(--c-navy) 0%, var(--c-teal) 60%, var(--c-slate) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>REFLECT</span>
          </h1>

          {/* Unique Acronym Art List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginBottom: '40px',
          }} className="acronym-list">
            {acronymItems.map((item) => (
              <div key={item.letter} className="acronym-item">
                <span className="acronym-letter">{item.letter}</span>
                <span className="acronym-arrow">→</span>
                <span className="acronym-word">{item.word}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
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

        </div>

        {/* Right Column: High-resolution image.png cleanly separated */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          background: '#ffffff',
        }} className="hero-right-col">
          <Image
            src="/images/image.png"
            alt="Reflect Fashion Collection"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center 20%',
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
        
        /* Acronym Art Transitions */
        .acronym-item {
          display: flex;
          align-items: center;
          font-family: var(--font-inter), system-ui, sans-serif;
          cursor: default;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .acronym-letter {
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--c-navy);
          width: 24px;
          display: inline-block;
          transition: all 0.25s ease;
        }
        .acronym-arrow {
          font-size: 1.1rem;
          color: var(--c-slate);
          opacity: 0;
          transform: translateX(-8px);
          transition: all 0.25s ease;
          margin: 0 8px;
        }
        .acronym-word {
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--c-slate);
          transform: translateX(-12px);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Hover Effect for each letter */
        .acronym-item:hover {
          padding-left: 8px;
        }
        .acronym-item:hover .acronym-letter {
          color: var(--accent);
          transform: scale(1.1);
        }
        .acronym-item:hover .acronym-arrow {
          opacity: 1;
          transform: translateX(0);
        }
        .acronym-item:hover .acronym-word {
          color: var(--c-navy);
          font-weight: 700;
          transform: translateX(0);
        }

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
          .hero-right-col { height: 440px !important; }
          .hero-blend-mask {
            background: linear-gradient(to bottom, #ffffff 0%, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0) 35%) !important;
          }
        }
      `}</style>
    </section>
  );
}