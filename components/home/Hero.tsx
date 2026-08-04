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
          padding: '48px 40px 48px 10%',
          zIndex: 2,
          position: 'relative',
          background: '#ffffff',
          maxWidth: '640px',
          gap: '16px',
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
            fontSize: 'clamp(4rem, 7vw, 6.8rem)',
            fontWeight: '950',
            lineHeight: '1.05',
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            marginTop: '12px',
            marginBottom: '2px',
          }} className="hero-headline">
            <span style={{
              background: 'linear-gradient(135deg, var(--c-navy) 0%, var(--c-teal) 60%, var(--c-slate) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>REFLECT</span>
          </h1>

          <p style={{
            maxWidth: '520px',
            fontSize: '1rem',
            lineHeight: '1.75',
            color: 'var(--text-secondary)',
            marginBottom: '6px',
          }}>
            Clean silhouettes, soft textures, and everyday fits made to feel effortless from the first wear.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '8px' }}>
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
          overflow: 'hidden',
        }} className="hero-right-col">
          {/* Decorative Back-light glow behind glass card */}
          <div style={{
            position: 'absolute',
            top: '40px',
            right: '40px',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            background: 'rgba(74, 158, 186, 0.28)',
            filter: 'blur(60px)',
            zIndex: 2,
            pointerEvents: 'none',
          }} />

          {/* Liquid Glass Card */}
          <div style={{
            position: 'absolute',
            top: '32px',
            right: '32px',
            zIndex: 3,
            width: 'min(380px, 44%)',
            padding: '24px 28px',
            borderRadius: '28px',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.18) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.45)',
            boxShadow: '0 24px 60px rgba(15, 37, 51, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.65), inset 0 -1px 2px rgba(255, 255, 255, 0.18), 0 2px 10px rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
          }} className="hero-value-panel">
            <div style={{
              fontSize: '0.72rem',
              fontWeight: '800',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--c-navy)',
              opacity: 0.8,
              marginBottom: '16px',
            }}>
              Reflect values
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }} className="acronym-list">
              {acronymItems.map((item, index) => (
                <div key={`${item.letter}-${index}`} className="acronym-row" style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 12px',
                  borderRadius: '14px',
                  transition: 'all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1)',
                  borderBottom: index !== acronymItems.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                }}>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: 'rgba(15, 37, 51, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '900',
                    fontSize: '0.95rem',
                    color: 'var(--c-navy)',
                    marginRight: '12px',
                    transition: 'all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1)',
                  }} className="acronym-badge">
                    {item.letter}
                  </div>
                  <span className="acronym-arrow" style={{
                    marginRight: '8px',
                    opacity: 0.35,
                    fontSize: '0.85rem',
                    color: 'var(--c-slate)',
                    transition: 'all 0.25s ease',
                  }}>→</span>
                  <span className="acronym-word" style={{
                    fontSize: '0.88rem',
                    fontWeight: '600',
                    color: 'var(--c-slate)',
                    transition: 'all 0.25s ease',
                  }}>{item.word}</span>
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/images/noob.png"
            alt="Reflect Fashion Collection"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: '22% 25%',
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
          cursor: pointer;
        }
        .acronym-row:hover {
          background: rgba(255, 255, 255, 0.25) !important;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 4px 12px rgba(15, 37, 51, 0.04) !important;
        }
        .acronym-row:hover .acronym-badge {
          background: var(--accent) !important;
          color: #fff !important;
          border-color: var(--accent) !important;
          transform: scale(1.1) rotate(5deg) !important;
        }
        .acronym-row:hover .acronym-arrow {
          opacity: 1 !important;
          color: var(--accent) !important;
          transform: translateX(3px) !important;
        }
        .acronym-row:hover .acronym-word {
          color: var(--c-navy) !important;
          transform: translateX(3px) !important;
        }

        /* Smooth blending gradient on desktop split screens */
        @media (min-width: 1025px) {
          .hero-headline {
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
          .hero-left-col { padding: 40px 24px !important; max-width: none !important; }
          .hero-right-col { height: 420px !important; }
          .hero-value-panel { 
            width: calc(100% - 32px) !important; 
            max-width: 360px !important; 
            top: 16px !important;
            right: 16px !important;
            backdrop-filter: blur(16px) !important;
            -webkit-backdrop-filter: blur(16px) !important;
          }
          .hero-blend-mask {
            background: linear-gradient(to bottom, #ffffff 0%, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0) 35%) !important;
          }
        }

        /* Liquid Glass Sheen Hover Effect */
        .hero-value-panel {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
        }
        .hero-value-panel:hover {
          transform: translateY(-6px) scale(1.015) !important;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.25) 100%) !important;
          border-color: rgba(255, 255, 255, 0.6) !important;
          box-shadow: 0 35px 70px rgba(15, 37, 51, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.85), inset 0 -1px 2px rgba(255, 255, 255, 0.2), 0 4px 15px rgba(255, 255, 255, 0.35) !important;
        }
      `}</style>
    </section>
  );
}