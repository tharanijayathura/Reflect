'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/lib/data';

type Category = 'all' | 'men' | 'women' | 'unisex';
type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [sort, setSort] = useState<SortOption>('default');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list = [...products];

    // Filter by category
    if (activeCategory !== 'all') {
      list = list.filter(p => p.category === activeCategory);
    }

    // Filter by search
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.colors.some(c => c.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [activeCategory, sort, search]);

  const counts = useMemo(() => ({
    all: products.length,
    men: products.filter(p => p.category === 'men').length,
    women: products.filter(p => p.category === 'women').length,
    unisex: products.filter(p => p.category === 'unisex').length,
  }), []);

  const tabs: { key: Category; label: string }[] = [
    { key: 'all', label: `All (${counts.all})` },
    { key: 'men', label: `Men's (${counts.men})` },
    { key: 'women', label: `Women's (${counts.women})` },
    { key: 'unisex', label: `Unisex (${counts.unisex})` },
  ];

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Page Header */}
      <div style={{
        padding: '60px 24px 40px',
        background: 'linear-gradient(to bottom, var(--bg-soft), var(--bg))',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '10px' }}>
            Collection
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '900', letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: '24px' }}>
            All T-Shirts
          </h1>

          {/* Search + Sort row */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Search */}
            <div style={{ position: 'relative', flex: 1, minWidth: '220px', maxWidth: '360px' }}>
              <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>🔍</span>
              <input
                type="text"
                placeholder="Search T-shirts..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '11px 16px 11px 40px',
                  borderRadius: '12px',
                  border: '1.5px solid var(--border)',
                  background: 'var(--c-white)',
                  color: 'var(--text-primary)',
                  fontSize: '0.875rem',
                  outline: 'none',
                }}
              />
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={e => setSort(e.target.value as SortOption)}
              style={{
                padding: '11px 16px',
                borderRadius: '12px',
                border: '1.5px solid var(--border)',
                background: 'var(--c-white)',
                color: 'var(--text-primary)',
                fontSize: '0.875rem',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        {/* Category Tabs */}
        <div style={{ display: 'flex', gap: '8px', padding: '28px 0', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key)}
              style={{
                padding: '10px 20px',
                borderRadius: '100px',
                border: activeCategory === tab.key ? '1.5px solid var(--accent)' : '1.5px solid var(--border)',
                background: activeCategory === tab.key ? 'var(--accent-soft)' : 'var(--bg-card)',
                color: activeCategory === tab.key ? 'var(--accent)' : 'var(--text-secondary)',
                fontSize: '0.875rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
          {filtered.length} {filtered.length === 1 ? 'product' : 'products'} found
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="products-grid">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-secondary)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px' }}>No T-shirts found</h3>
            <p style={{ fontSize: '0.9rem' }}>Try a different search or category</p>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}