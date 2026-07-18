import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/lib/data';

export default function CategoriesPreview() {
  return (
    <section style={{ padding: '80px 0', background: '#fff' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '12px' }}>
            Collections
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', letterSpacing: '-0.03em', color: 'var(--text-primary)', lineHeight: 1.1 }}>
            Shop by Category
          </h2>
        </div>

        {/* Category Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="cat-grid">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/categories#${cat.slug}`}
              style={{
                position: 'relative',
                height: '420px',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'block',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                background: 'var(--bg-soft)',
                boxShadow: 'var(--shadow-sm)',
              }}
              className="cat-card"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                className="cat-img"
              />
              {/* Soft overlay using brand navy/teal gradient */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 37, 51, 0.85) 0%, rgba(74, 158, 186, 0.2) 60%, transparent 100%)',
              }} />
              {/* Content */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '28px',
              }}>
                <span style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  background: 'var(--accent-soft)',
                  border: '1px solid rgba(74, 158, 186, 0.3)',
                  fontSize: '0.65rem',
                  fontWeight: '700',
                  letterSpacing: '0.15em',
                  color: 'var(--accent-light)',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}>
                  {cat.slug}
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', marginBottom: '8px', lineHeight: 1.2 }}>
                  {cat.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '16px', lineHeight: 1.5 }}>
                  {cat.description}
                </p>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 18px',
                  borderRadius: '100px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: '#fff',
                  backdropFilter: 'blur(10px)',
                  transition: 'background 0.2s',
                }} className="cat-btn">
                  Explore →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .cat-card:hover .cat-img { transform: scale(1.05); }
        .cat-card:hover { border-color: rgba(74, 158, 186, 0.4); box-shadow: var(--shadow-hover); }
        .cat-card:hover .cat-btn { background: rgba(255, 255, 255, 0.3) !important; }
        @media (max-width: 1024px) {
          .cat-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .cat-grid { grid-template-columns: 1fr !important; }
          .cat-grid a { height: 340px !important; }
        }
      `}</style>
    </section>
  );
}