'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import type { Product } from '@/lib/data';

const COLOR_MAP: Record<string, string> = {
  Black: '#1a1a1a',
  White: '#f5f5f5',
  Grey: '#9ca3af',
  Gray: '#9ca3af',
  Olive: '#6b7c45',
  Navy: '#1e3a5f',
  Cream: '#f5f0e0',
  Rose: '#f43f5e',
  Blush: '#f9a8d4',
  Sand: '#c8a87a',
  Charcoal: '#374151',
  Milk: '#faf9f6',
  Stone: '#a8a29e',
  'Light Blue': '#bfdbfe',
  Burgundy: '#7f1d1d',
  'Sky Blue': '#7dd3fc',
  Sky: '#7dd3fc',
  Ecru: '#f0e9d2',
  Tan: '#d4a96a',
  Slate: '#64748b',
  Lavender: '#c4b5fd',
  Terracotta: '#c2693c',
  Sage: '#7c9b74',
  'Powder Pink': '#fce7f3',
  Mint: '#a7f3d0',
  'Baby Blue': '#bfdbfe',
  Beige: '#d4c5b0',
  'Forest Green': '#14532d',
  Peach: '#fed7aa',
  'Vintage Black': '#111',
  'Washed Navy': '#1e3a5f',
  'Faded Green': '#4a6741',
};

export default function ProductDetails({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'description' | 'fabric' | 'shipping'>('description');

  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError('Please select a size');
      return;
    }
    setError('');
    setAdding(true);
    addToCart({
      productId: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      quantity,
      slug: product.slug,
    });
    setTimeout(() => {
      setAdding(false);
      setAdded(true);
      setTimeout(() => setAdded(false), 3000);
    }, 500);
  };

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  const tabContent = {
    description: product.description,
    fabric: `Fabric: ${product.fabric}\nFit: ${product.fit}\nSKU: ${product.sku}`,
    shipping: 'Free delivery on orders over Rs. 3,000. Standard delivery: 2–5 business days. Cash on delivery available island-wide. Easy 7-day returns on all items.',
  };

  return (
    <section style={{ padding: '40px 0 80px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }} className="product-detail-grid">

          {/* Image Gallery */}
          <div style={{ display: 'flex', gap: '16px', position: 'sticky', top: '90px' }} className="gallery-container">
            {/* Thumbnails */}
            {images.length > 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    style={{
                      width: '70px',
                      height: '80px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: activeImage === i ? '2px solid var(--accent)' : '2px solid transparent',
                      background: 'var(--bg-soft)',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'border-color 0.2s ease',
                      flexShrink: 0,
                      position: 'relative',
                    }}
                  >
                    <Image src={img} alt={`${product.name} view ${i + 1}`} fill style={{ objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}

            {/* Main image */}
            <div style={{
              flex: 1,
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              background: 'var(--bg-soft)',
              aspectRatio: '4/5',
              border: '1px solid var(--border)',
            }}>
              <Image
                src={images[activeImage]}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              {product.badge && (
                <div style={{
                  position: 'absolute', top: '16px', left: '16px',
                  padding: '5px 13px', borderRadius: '100px',
                  background: 'var(--accent)',
                  fontSize: '0.7rem', fontWeight: '800', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>{product.badge}</div>
              )}
              {discount && (
                <div style={{
                  position: 'absolute', top: product.badge ? '48px' : '16px', left: '16px',
                  padding: '5px 12px', borderRadius: '100px',
                  background: 'var(--error)',
                  fontSize: '0.7rem', fontWeight: '800', color: '#fff',
                }}>-{discount}% OFF</div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Breadcrumb */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link href="/products" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Products</Link>
              <span>/</span>
              <span style={{ color: 'var(--text-primary)' }}>{product.name}</span>
            </nav>

            {/* Category */}
            <p style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '10px' }}>
              {product.category} T-shirt
            </p>

            {/* Name */}
            <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: '900', letterSpacing: '-0.03em', color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '16px' }}>
              {product.name}
            </h1>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[1,2,3,4,5].map((star) => (
                  <span key={star} style={{ color: star <= Math.round(product.rating) ? 'var(--accent)' : 'var(--border-dark)', fontSize: '1rem' }}>★</span>
                ))}
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '28px', paddingBottom: '28px', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--accent)' }}>
                Rs. {product.price.toLocaleString()}
              </span>
              {product.oldPrice && (
                <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', textDecoration: 'line-through' }}>
                  Rs. {product.oldPrice.toLocaleString()}
                </span>
              )}
              {discount && (
                <span style={{
                  padding: '3px 10px',
                  borderRadius: '100px',
                  background: 'rgba(239,68,68,0.1)',
                  border: '1px solid rgba(239,68,68,0.2)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: 'var(--error)',
                }}>Save {discount}%</span>
              )}
            </div>

            {/* Size Selector */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <p style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                  Size {selectedSize && <span style={{ color: 'var(--accent)' }}>— {selectedSize}</span>}
                </p>
                <button style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                  Size Guide
                </button>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => { setSelectedSize(size === selectedSize ? '' : size); setError(''); }}
                    style={{
                      minWidth: '52px',
                      height: '48px',
                      padding: '0 14px',
                      borderRadius: '12px',
                      border: selectedSize === size ? '2px solid var(--accent)' : '1.5px solid var(--border)',
                      background: selectedSize === size ? 'var(--accent-soft)' : 'var(--bg-soft)',
                      color: selectedSize === size ? 'var(--accent)' : 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >{size}</button>
                ))}
              </div>
              {error && <p style={{ marginTop: '8px', fontSize: '0.8rem', color: 'var(--error)' }}>{error}</p>}
            </div>

            {/* Color Selector */}
            <div style={{ marginBottom: '28px' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '12px' }}>
                Color — <span style={{ color: 'var(--accent)' }}>{selectedColor}</span>
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {product.colors.map((color) => {
                  const hex = COLOR_MAP[color] || '#888';
                  return (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: hex,
                        border: selectedColor === color ? '3px solid var(--accent)' : '2px solid var(--border)',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        boxShadow: selectedColor === color ? '0 0 0 3px var(--accent-soft)' : 'none',
                        outline: 'none',
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Quantity */}
            <div style={{ marginBottom: '28px' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '12px' }}>
                Quantity
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  style={{ width: '44px', height: '44px', background: 'var(--bg-soft)', border: 'none', color: 'var(--text-primary)', fontSize: '1.1rem', cursor: 'pointer' }}
                >−</button>
                <span style={{ minWidth: '48px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: 'var(--text-primary)', fontSize: '1rem', background: '#fff' }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  style={{ width: '44px', height: '44px', background: 'var(--bg-soft)', border: 'none', color: 'var(--text-primary)', fontSize: '1.1rem', cursor: 'pointer' }}
                >+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <button
                onClick={handleAddToCart}
                style={{
                  flex: 1,
                  minWidth: '200px',
                  padding: '16px 28px',
                  borderRadius: '14px',
                  background: added
                    ? 'rgba(34,197,94,0.15)'
                    : 'var(--navy)',
                  color: added ? '#22c55e' : '#fff',
                  fontSize: '1rem',
                  fontWeight: '800',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: added ? '1px solid rgba(34,197,94,0.3)' : 'none',
                  boxShadow: added ? 'none' : '0 4px 16px rgba(15,37,51,0.1)',
                } as React.CSSProperties}
              >
                {adding ? 'Adding...' : added ? '✓ Added to Cart!' : '🛒 Add to Cart'}
              </button>
              <Link
                href="/cart"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px 24px',
                  borderRadius: '14px',
                  border: '1.5px solid var(--accent)',
                  color: 'var(--accent)',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                View Cart →
              </Link>
            </div>

            {/* COD badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 18px',
              borderRadius: '14px',
              background: 'var(--accent-soft)',
              border: '1px solid rgba(74, 158, 186, 0.2)',
              marginBottom: '28px',
            }}>
              <span style={{ fontSize: '1.2rem' }}>💵</span>
              <div>
                <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent)' }}>Cash on Delivery</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Pay when your order arrives. No card required.</p>
              </div>
            </div>

            {/* Tabs */}
            <div>
              <div style={{ display: 'flex', gap: '4px', borderBottom: '1px solid var(--border)', marginBottom: '20px' }}>
                {(['description', 'fabric', 'shipping'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '10px 16px',
                      background: 'none',
                      border: 'none',
                      borderBottom: activeTab === tab ? '2px solid var(--accent)' : '2px solid transparent',
                      color: activeTab === tab ? 'var(--accent)' : 'var(--text-secondary)',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      textTransform: 'capitalize',
                      letterSpacing: '0.05em',
                      transition: 'all 0.2s ease',
                    }}
                  >{tab}</button>
                ))}
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>
                {tabContent[activeTab]}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .gallery-container { align-items: flex-start; }
        @media (max-width: 900px) {
          .product-detail-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .gallery-container { position: static !important; flex-direction: column !important; }
          .gallery-container > div:first-child { flex-direction: row !important; }
        }
      `}</style>
    </section>
  );
}