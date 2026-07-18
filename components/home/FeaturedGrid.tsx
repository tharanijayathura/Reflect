import Image from 'next/image';
import Link from 'next/link';
import { featuredProducts } from '@/lib/data';

export default function FeaturedGrid() {
  const [main, ...rest] = featuredProducts;

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-soft)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', gap: '16px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '10px' }}>
              Handpicked for You
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: '900', letterSpacing: '-0.03em', color: 'var(--text-primary)', lineHeight: 1.1 }}>
              Featured Pieces
            </h2>
          </div>
          <Link
            href="/products"
            style={{
              padding: '10px 22px',
              borderRadius: '100px',
              border: '1.5px solid var(--border)',
              color: 'var(--text-primary)',
              background: '#fff',
              fontSize: '0.875rem',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            className="featured-view-all"
          >
            View All →
          </Link>
        </div>

        {/* Asymmetric Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.3fr', gap: '24px' }} className="featured-grid">
          {/* Main large card */}
          {main && (
            <Link
              href={`/products/${main.slug}`}
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'block',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                gridRow: 'span 2',
                minHeight: '520px',
                boxShadow: 'var(--shadow-sm)',
              }}
              className="featured-card"
            >
              <Image src={main.image} alt={main.name} fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} className="featured-img" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 37, 51, 0.7) 0%, transparent 60%)' }} />
              {main.badge && (
                <div style={{
                  position: 'absolute', top: '20px', left: '20px',
                  padding: '5px 14px', borderRadius: '100px',
                  background: 'var(--accent)',
                  fontSize: '0.7rem', fontWeight: '800', color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase',
                }}>{main.badge}</div>
              )}
              <div style={{ position: 'absolute', bottom: '28px', left: '28px', right: '28px' }}>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>{main.category}</p>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>{main.name}</h3>
                <p style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--accent-light)' }}>Rs. {main.price.toLocaleString()}</p>
              </div>
            </Link>
          )}

          {/* Side cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {rest.slice(0, 2).map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'block',
                  textDecoration: 'none',
                  border: '1px solid var(--border)',
                  height: '248px',
                  boxShadow: 'var(--shadow-sm)',
                }}
                className="featured-card"
              >
                <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} className="featured-img" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 37, 51, 0.7) 0%, transparent 60%)' }} />
                {product.badge && (
                  <div style={{
                    position: 'absolute', top: '16px', left: '16px',
                    padding: '4px 11px', borderRadius: '100px',
                    background: 'var(--accent)', fontSize: '0.65rem', fontWeight: '800', color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase',
                  }}>{product.badge}</div>
                )}
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>{product.name}</h3>
                  <p style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--accent-light)' }}>Rs. {product.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .featured-card:hover .featured-img { transform: scale(1.04); }
        .featured-card:hover { border-color: rgba(74, 158, 186, 0.4); box-shadow: var(--shadow-hover); }
        .featured-view-all:hover { border-color: var(--accent); color: var(--accent); }
        @media (max-width: 768px) {
          .featured-grid { grid-template-columns: 1fr !important; }
          .featured-grid a[style*="span 2"] { grid-row: auto !important; min-height: 360px !important; }
        }
      `}</style>
    </section>
  );
}