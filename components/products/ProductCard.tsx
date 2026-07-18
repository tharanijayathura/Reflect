'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import type { Product } from '@/lib/data';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!selectedSize) {
      // Navigate to product to select size
      window.location.href = `/products/${product.slug}`;
      return;
    }
    setAdding(true);
    addToCart({
      productId: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      size: selectedSize,
      color: product.colors[0],
      quantity: 1,
      slug: product.slug,
    });
    setTimeout(() => {
      setAdding(false);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }, 400);
  };

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  return (
    <article
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="product-card"
    >
      {/* Image */}
      <Link
        href={`/products/${product.slug}`}
        style={{ display: 'block', position: 'relative', height: '300px', overflow: 'hidden', background: 'var(--bg-soft)', flexShrink: 0 }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
          className="product-card-img"
        />
        {/* Badge */}
        {product.badge && (
          <div style={{
            position: 'absolute', top: '12px', left: '12px',
            padding: '4px 11px', borderRadius: '100px',
            background: 'var(--accent)',
            fontSize: '0.65rem', fontWeight: '800', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>{product.badge}</div>
        )}
        {discount && (
          <div style={{
            position: 'absolute', top: product.badge ? '44px' : '12px', left: '12px',
            padding: '4px 10px', borderRadius: '100px',
            background: 'var(--error)',
            fontSize: '0.65rem', fontWeight: '800', color: '#fff', letterSpacing: '0.06em',
          }}>-{discount}%</div>
        )}
        {/* Rating overlay */}
        <div style={{
          position: 'absolute', bottom: '12px', right: '12px',
          padding: '4px 10px', borderRadius: '100px',
          background: 'rgba(255, 255, 255, 0.9)',
          border: '1px solid var(--border)',
          fontSize: '0.7rem', fontWeight: '700', color: 'var(--text-primary)',
          boxShadow: '0 2px 8px rgba(15,37,51,0.04)',
        }}>
          ★ {product.rating} ({product.reviews})
        </div>
      </Link>

      {/* Content */}
      <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p style={{ fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
          {product.category}
        </p>
        <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: '6px', transition: 'color 0.2s' }}
            className="product-card-title"
          >
            {product.name}
          </h3>
        </Link>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '12px', flex: 1 }}>
          {product.description.slice(0, 80)}...
        </p>

        {/* Price */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <span style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--accent)' }}>
            Rs. {product.price.toLocaleString()}
          </span>
          {product.oldPrice && (
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textDecoration: 'line-through' }}>
              Rs. {product.oldPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Quick size picker */}
        <div style={{ marginBottom: '14px' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
            {selectedSize ? `Size: ${selectedSize}` : 'Select Size:'}
          </p>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size === selectedSize ? '' : size)}
                style={{
                  padding: '5px 10px',
                  borderRadius: '8px',
                  border: selectedSize === size ? '1.5px solid var(--accent)' : '1px solid var(--border)',
                  background: selectedSize === size ? 'var(--accent-soft)' : 'transparent',
                  color: selectedSize === size ? 'var(--accent)' : 'var(--text-secondary)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >{size}</button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={handleAddToCart}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '12px',
              border: 'none',
              background: added
                ? 'rgba(34,197,94,0.15)'
                : 'var(--navy)',
              color: '#fff',
              fontSize: '0.8rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              border: added ? '1px solid rgba(34,197,94,0.3)' : 'none',
            } as React.CSSProperties}
          >
            {adding ? '...' : added ? '✓ Added!' : selectedSize ? 'Add to Cart' : 'Select Size'}
          </button>
          <Link
            href={`/products/${product.slug}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              flexShrink: 0,
            }}
            title="View product"
          >
            →
          </Link>
        </div>
      </div>

      <style>{`
        .product-card:hover {
          transform: translateY(-5px);
          border-color: rgba(74, 158, 186, 0.3);
          box-shadow: var(--shadow-hover);
        }
        .product-card:hover .product-card-img { transform: scale(1.04); }
        .product-card:hover .product-card-title { color: var(--accent) !important; }
      `}</style>
    </article>
  );
}