const perks = [
  { icon: '🚚', title: 'Free Delivery', description: 'Free island-wide shipping on orders over Rs. 3,000', color: '#4a9eba' },
  { icon: '💵', title: 'Cash on Delivery', description: 'Pay when your order arrives. No card required.', color: '#2d6e87' },
  { icon: '↩️', title: 'Easy Returns', description: '7-day no-hassle return policy on all items.', color: '#3e8da8' },
  { icon: '✨', title: 'Premium Quality', description: 'Premium cotton fabrics that feel great and last.', color: '#0f2533' },
];

export default function ServicesStrip() {
  return (
    <section style={{ padding: '72px 0', background: 'var(--bg-soft)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }} className="services-grid">
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

      <style>{`
        .perk-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-hover) !important; border-color: rgba(74,158,186,0.25) !important; }
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px)  { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}