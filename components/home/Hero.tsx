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
      minHeight: '660px',
      height: 'calc(100vh - 70px)',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }} className="hero-section">
      
      {/* Background Image Container */}
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
        {/* Soft wash overlay to blend the background models slightly for contrast */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.4) 100%)',
          zIndex: 2,
        }} />
      </div>

      {/* Main Content Wrapper (Grid or Flex Overlay) */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        padding: '0 24px',
        position: 'relative',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
      }} className="hero-content-wrapper">
        
        {/* Top Info: Eyebrow and Headline */}
        <div style={{ maxWidth: '500px', marginBottom: '24px' }}>
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '100px',
            background: 'var(--accent-soft)',
            border: '1px solid rgba(74, 158, 186, 0.25)',
            marginBottom: '16px',
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

          {/* Headline REFLECT */}
          <h1 style={{
            fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
            fontWeight: '950',
            lineHeight: '1.05',
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            margin: 0,
          }}>
            <span style={{
              background: 'linear-gradient(135deg, var(--c-navy) 0%, var(--c-teal) 60%, var(--c-slate) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>REFLECT</span>
          </h1>
        </div>

        {/* Unique Acronym Art List with Long Connecting Arrows */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '100%',
          marginBottom: '36px',
        }} className="acronym-list">
          {acronymItems.map((item) => (
            <div key={item.letter} className="acronym-row">
              <span className="acronym-letter">{item.letter}</span>
              <div className="acronym-line-container">
                <div className="acronym-line" />
                <span className="acronym-arrow-head">▶</span>
              </div>
              <span className="acronym-word">{item.word}</span>
            </div>
          ))}
        </div>

        {/* CTAs aligned to the left under the acronym letters */}
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

      <style>{`
        .hero-btn-primary:hover { background: var(--accent) !important; transform: translateY(-2px); }
        .hero-btn-secondary:hover { border-color: var(--accent) !important; color: var(--accent) !important; }
        
        /* Acronym Long Arrow Transitions */
        .acronym-row {
          display: flex;
          align-items: center;
          width: 100%;
          transition: all 0.25s ease;
        }
        .acronym-letter {
          font-size: 2.2rem;
          font-weight: 950;
          color: var(--c-navy);
          width: 32px;
          flex-shrink: 0;
          transition: all 0.25s ease;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
        }
        .acronym-line-container {
          flex: 1;
          display: flex;
          align-items: center;
          position: relative;
          margin: 0 24px;
        }
        .acronym-line {
          width: 100%;
          height: 1px;
          background: rgba(81, 111, 128, 0.25);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .acronym-arrow-head {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%) scale(0.6);
          color: rgba(81, 111, 128, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          line-height: 1;
        }
        .acronym-word {
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--c-slate);
          flex-shrink: 0;
          text-align: right;
          min-width: 180px;
          transition: all 0.25s ease;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
        }
        
        /* Hover Effects */
        .acronym-row:hover .acronym-letter {
          color: var(--accent);
          transform: scale(1.15);
        }
        .acronym-row:hover .acronym-line {
          background: var(--accent);
          height: 1.5px;
        }
        .acronym-row:hover .acronym-arrow-head {
          color: var(--accent);
          transform: translateY(-50%) scale(0.8) translateX(6px);
        }
        .acronym-row:hover .acronym-word {
          color: var(--c-navy);
          font-weight: 800;
          transform: translateX(4px);
        }

        /* Responsive styling for smaller viewports */
        @media (max-width: 1024px) {
          .hero-section { height: auto !important; min-height: 100vh !important; padding: 100px 0 60px !important; }
          .hero-content-wrapper { padding: 0 24px !important; }
          .acronym-line-container { margin: 0 12px !important; }
          .acronym-word { font-size: 1rem !important; min-width: 140px !important; }
          .acronym-letter { font-size: 1.8rem !important; }
        }

        @media (max-width: 640px) {
          .acronym-line-container {
            display: none !important; /* Hide long lines on very small mobile screens for clean fit */
          }
          .acronym-row {
            justify-content: space-between !important;
            border-bottom: 1px solid rgba(81, 111, 128, 0.08);
            padding: 8px 0;
          }
          .acronym-word {
            text-align: right !important;
          }
        }
      `}</style>
    </section>
  );
}