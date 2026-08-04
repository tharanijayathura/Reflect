'use client';
import Image from 'next/image';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

const perks = [
  { icon: <LocalShippingOutlinedIcon style={{ fontSize: '1.4rem' }} />, title: 'Free Delivery', description: 'Free island-wide shipping on orders over Rs. 3,000', color: '#4a9eba' },
  { icon: <PaymentsOutlinedIcon style={{ fontSize: '1.4rem' }} />, title: 'Cash on Delivery', description: 'Pay when your order arrives. No card required.', color: '#2d6e87' },
  { icon: <AssignmentReturnOutlinedIcon style={{ fontSize: '1.4rem' }} />, title: 'Easy Returns', description: '7-day no-hassle return policy on all items.', color: '#3e8da8' },
  { icon: <AutoAwesomeOutlinedIcon style={{ fontSize: '1.4rem' }} />, title: 'Premium Quality', description: 'Premium cotton fabrics that feel great and last.', color: '#0f2533' },
];

export default function ServicesStrip() {
  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-soft)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '48px',
          alignItems: 'center',
        }} className="services-section-grid">
          
          {/* Left Column: Typographic Art (Model sitting on FASHION letters) */}
          <div className="services-art-col" style={{ position: 'relative', width: '100%' }}>
            <div className="fashion-typography-wrapper" style={{
              position: 'relative',
              height: '420px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#ffffff',
              borderRadius: '24px',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
            }}>
              {/* Decorative background grid pattern */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(var(--border) 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px',
                opacity: 0.4,
              }} />

              {/* Giant background text: FASHION */}
              <div style={{
                fontSize: 'clamp(4.2rem, 8.5vw, 6.2rem)',
                fontWeight: '900',
                fontFamily: 'var(--font-outfit), sans-serif',
                color: 'var(--bg-soft)',
                WebkitTextStroke: '2px rgba(15, 37, 51, 0.06)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                zIndex: 1,
                display: 'flex',
                gap: '4px',
                userSelect: 'none',
                marginTop: '40px', // slightly offset down to support the sitting position
              }}>
                <span>F</span>
                <span>A</span>
                <span>S</span>
                <span style={{ color: 'rgba(74, 158, 186, 0.1)', WebkitTextStroke: '2px rgba(74, 158, 186, 0.2)' }}>H</span>
                <span>I</span>
                {/* Foreground letter 'O' overlap in front of the model leg */}
                <span style={{ 
                  color: 'rgba(74, 158, 186, 0.15)', 
                  WebkitTextStroke: '2.5px rgba(74, 158, 186, 0.35)',
                  zIndex: 3 
                }}>O</span>
                <span>N</span>
              </div>

              {/* The sitting guy positioned precisely so he rests on the letters line */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '52%',
                transform: 'translateX(-50%)',
                width: '320px',
                height: '420px',
                zIndex: 2,
              }} className="sitting-guy-img">
                <Image
                  src="/images/sit.png"
                  alt="Reflect Fashion Sitting Model"
                  fill
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                  }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column: 4 perk cards in a 2x2 grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }} className="services-cards-grid">
            {perks.map(perk => (
              <div key={perk.title} className="perk-card" style={{
                background: '#fff', border: '1px solid var(--border)',
                borderRadius: '20px', padding: '28px 24px',
                transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
              }}>
                {/* Top color strip */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: perk.color, borderRadius: '20px 20px 0 0' }} />

                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: `${perk.color}14`, border: `1px solid ${perk.color}28`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', marginBottom: '16px',
                }}>
                  {perk.icon}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>{perk.title}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .perk-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-hover) !important; border-color: rgba(74,158,186,0.25) !important; }
        
        @media (max-width: 1024px) {
          .services-section-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .services-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (max-width: 640px) {
          .services-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .sitting-guy-img {
            width: 250px !important;
            height: 330px !important;
          }
          .fashion-typography-wrapper {
            height: 330px !important;
          }
        }
      `}</style>
    </section>
  );
}