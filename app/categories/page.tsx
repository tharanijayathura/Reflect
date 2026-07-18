import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/products/ProductCard';
import { categories, products } from '@/lib/data';

export default function CategoriesPage() {
  return (
    <main style={{ minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Header */}
      <div style={{
        padding: '60px 24px 40px',
        background: 'linear-gradient(to bottom, var(--bg-soft), var(--bg))',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '10px' }}>
            Browse
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '900', letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
            T-Shirt Categories
          </h1>
          <p style={{ marginTop: '12px', fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '500px', lineHeight: 1.7 }}>
            Premium T-shirts for men, women, and everyone in between. Browse our curated collections.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        {categories.map((category, catIndex) => {
          const catProducts = products.filter(p => p.category === category.slug);
          return (
            <section
              key={category.slug}
              id={category.slug}
              style={{
                marginTop: '60px',
                borderRadius: '28px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {/* Category Hero */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: catIndex % 2 === 0 ? '1fr 1.5fr' : '1.5fr 1fr',
                minHeight: '320px',
              }} className="cat-hero-grid">
                {/* Text */}
                <div style={{
                  padding: '48px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  order: catIndex % 2 === 0 ? 1 : 2,
                }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '100px',
                    background: 'var(--accent-soft)',
                    border: '1px solid rgba(74, 158, 186, 0.25)',
                    fontSize: '0.65rem',
                    fontWeight: '700',
                    letterSpacing: '0.15em',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                    width: 'fit-content',
                  }}>
                    {catProducts.length} styles
                  </span>
                  <h2 style={{
                    fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                    fontWeight: '900',
                    letterSpacing: '-0.03em',
                    color: 'var(--text-primary)',
                    lineHeight: 1.1,
                    marginBottom: '16px',
                  }}>
                    {category.title}
                  </h2>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '28px', maxWidth: '340px' }}>
                    {category.description}
                  </p>
                  <Link
                    href={`/products?category=${category.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      borderRadius: '100px',
                      background: 'var(--navy)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      fontWeight: '700',
                      textDecoration: 'none',
                      width: 'fit-content',
                      boxShadow: '0 4px 12px rgba(15,37,51,0.1)',
                      transition: 'all 0.2s',
                    }}
                    className="cat-shop-btn"
                  >
                    Shop {category.slug.charAt(0).toUpperCase() + category.slug.slice(1)} →
                  </Link>
                </div>

                {/* Image */}
                <div style={{
                  position: 'relative',
                  minHeight: '320px',
                  background: 'var(--bg-soft)',
                  order: catIndex % 2 === 0 ? 2 : 1,
                }}>
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: catIndex % 2 === 0
                      ? 'linear-gradient(to left, transparent 60%, var(--bg-card) 100%)'
                      : 'linear-gradient(to right, transparent 60%, var(--bg-card) 100%)',
                  }} />
                </div>
              </div>

              {/* Products Grid */}
              <div style={{ padding: '32px 32px 40px', borderTop: '1px solid var(--border)' }}>
                <p style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px' }}>
                  {catProducts.length} products in this collection
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }} className="cat-products-grid">
                  {catProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <style>{`
        .cat-shop-btn:hover { background: var(--accent) !important; }
        @media (max-width: 900px) {
          .cat-hero-grid { grid-template-columns: 1fr !important; }
          .cat-hero-grid > div:last-child { order: 1 !important; }
          .cat-hero-grid > div:first-child { order: 2 !important; padding: 28px !important; }
          .cat-products-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .cat-products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}