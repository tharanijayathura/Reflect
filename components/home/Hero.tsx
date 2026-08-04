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
      minHeight: '620px',
      height: 'calc(100vh - 70px)',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }} className="hero-section">
      
      {/* Split Grid Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        width: '100%',
        height: '100%',
        alignItems: 'stretch',
      }} className="hero-container">

        {/* Left Column: Clean Solid White Page Editorial Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '20px 40px 20px 10%',
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
            marginBottom: '24px',
            width: 'fit-content',
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--accent)',
              display: 'block',
            }} />
            <span style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--c-navy)', textTransform: 'uppercase' }}>
              New Season T-Shirts
            </span>
          </div>

          {/* Large Headline */}
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 4.8rem)',
            fontWeight: '950',
            lineHeight: '1.05',
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            marginBottom: '28px',
          }} className="hero-headline">
            <span style={{
              background: 'linear-gradient(135deg, var(--c-navy) 0%, var(--c-teal) 60%, var(--c-slate) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>REFLECT</span>
          </h1>

          {/* Clean, Compact Acronym List contained entirely in the left column */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginTop: '-15px',
            marginBottom: '24px',
          }} className="acronym-list">
            {acronymItems.map((item, index) => (
              <div key={`${item.letter}-${index}`} className="acronym-row">
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

        {/* Right Column: Clean image column for image.png */}
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
              objectPosition: 'center 25%',
            }}
            priority
          />
          {/* Blend mask overlay on the left edge of the right column */}
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
        
        /* Acronym list styled cleanly on left column */
        .acronym-row {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: default;
          transition: all 0.2s ease;
        }
        .acronym-letter {
          font-size: 1.25rem;
          font-weight: 900;
          color: var(--c-navy);
          width: 16px;
          transition: all 0.2s ease;
        }
        .acronym-arrow {
          font-size: 0.95rem;
          color: var(--c-slate);
          opacity: 0.4;
          transform: translateX(-4px);
          transition: all 0.2s ease;
        }
        .acronym-word {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--c-slate);
          transition: all 0.2s ease;
        }
        
        /* Interactive animations on hover */
        .acronym-row:hover .acronym-letter {
          color: var(--accent);
          transform: scale(1.1);
        }
        .acronym-row:hover .acronym-arrow {
          opacity: 1;
          color: var(--accent);
          transform: translateX(0);
        }
        .acronym-row:hover .acronym-word {
          color: var(--c-navy);
          font-weight: 700;
          transform: translateX(2px);
        }

        /* Smooth blending gradient on desktop split screens */
        @media (min-width: 1025px) {
          .hero-headline {
            margin-left: auto !important;
            margin-right: -40px !important;
            margin-top: 60px !important;
            width: fit-content !important;
          }
          .hero-blend-mask {
            background: linear-gradient(to right, #ffffff 0%, rgba(255, 255, 255, 0.95) 8%, rgba(255, 255, 255, 0) 35%) !important;
          }
        }

        /* Responsive styling for smaller viewports */
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