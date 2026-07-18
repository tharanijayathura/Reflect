import Image from 'next/image';
import Link from 'next/link';
import { trendingProducts } from '@/lib/data';

export default function TrendingSection() {
  return (
    <section style={{ padding: '80px 0', background: '#fff' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '40px', gap: '16px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '10px' }}>
              🔥 Hot Right Now
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: '900', letterSpacing: '-0.03em', color: 'var(--text-primary)', lineHeight: 1.1 }}>
              Trending T-Shirts
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
              whiteSpace: 'nowrap',
            }}
            className="trending-view-all"
          >
            View All →
          </Link>
        </div>

        {/* Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="trending-grid">
          {trendingProducts.map((product) => (
            <article
              key={product.id}
              style={{
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow: 'var(--shadow-sm)',
              }}
              className="trending-card"
            >
              {/* Image */}
              <Link href={`/products/${product.slug}`} style={{ display: 'block', position: 'relative', height: '260px', overflow: 'hidden', background: 'var(--bg-soft)' }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  className="trending-img"
                />
                {product.badge && (
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    padding: '4px 11px', borderRadius: '100px',
                    background: 'var(--accent)',
                    fontSize: '0.65rem', fontWeight: '800', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>{product.badge}</div>
                )}
                {/* Rating overlay */}
                <div style={{
                  position: 'absolute', bottom: '12px', right: '12px',
                  padding: '4px 10px', borderRadius: '100px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid var(--border)',
                  fontSize: '0.7rem', fontWeight: '700', color: 'var(--text-primary)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}>
                  ★ {product.rating}
                </div>
              </Link>

              {/* Info */}
              <div style={{ padding: '18px' }}>
                <p style={{ fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  {product.category}
                </p>
                <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none' }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.3 }}>
                    {product.name}
                  </h3>
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '12px' }}>
                  <div>
                    <span style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--accent-mid)' }}>
                      Rs. {product.price.toLocaleString()}
                    </span>
                    {product.oldPrice && (
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'line-through', marginLeft: '6px' }}>
                        Rs. {product.oldPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
                <Link
                  href={`/products/${product.slug}`}
                  style={{
                    display: 'block',
                    padding: '9px',
                    borderRadius: '10px',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  className="trending-btn"
                >
                  View Options
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .trending-card:hover {
          transform: translateY(-5px);
          border-color: rgba(74, 158, 186, 0.3);
          box-shadow: var(--shadow-hover);
        }
        .trending-card:hover .trending-img { transform: scale(1.05); }
        .trending-btn:hover { background: var(--accent) !important; color: #fff !important; border-color: var(--accent) !important; }
        .trending-view-all:hover { border-color: var(--accent); color: var(--accent); }
        @media (max-width: 1200px) {
          .trending-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .trending-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .trending-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}