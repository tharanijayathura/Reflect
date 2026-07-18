import type { Product } from '@/lib/data';

export default function ProductInfoTable({ product }: { product: Product }) {
  const rows = [
    { label: 'SKU', value: product.sku },
    { label: 'Fabric', value: product.fabric },
    { label: 'Fit', value: product.fit },
    { label: 'Category', value: product.category.charAt(0).toUpperCase() + product.category.slice(1) },
    { label: 'Available Sizes', value: product.sizes.join(', ') },
    { label: 'Available Colors', value: product.colors.join(', ') },
    { label: 'Stock Status', value: product.inStock ? '✓ In Stock' : '✗ Out of Stock' },
    { label: 'Rating', value: `${product.rating} / 5 (${product.reviews} reviews)` },
  ];

  return (
    <div style={{
      borderRadius: '16px',
      border: '1px solid var(--border)',
      overflow: 'hidden',
    }}>
      {rows.map((row, i) => (
        <div
          key={row.label}
          style={{
            display: 'flex',
            borderBottom: i < rows.length - 1 ? '1px solid var(--border)' : 'none',
          }}
        >
          <div style={{
            width: '140px',
            flexShrink: 0,
            padding: '13px 16px',
            background: 'var(--bg-elevated)',
            fontSize: '0.78rem',
            fontWeight: '700',
            color: '#71717a',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}>
            {row.label}
          </div>
          <div style={{
            flex: 1,
            padding: '13px 16px',
            fontSize: '0.875rem',
            color: row.label === 'Stock Status' && product.inStock ? '#22c55e' : '#a1a1aa',
            fontWeight: row.label === 'Stock Status' ? '600' : '400',
          }}>
            {row.value}
          </div>
        </div>
      ))}
    </div>
  );
}