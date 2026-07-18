'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  const shipping = cartTotal >= 3000 ? 0 : 350;
  const total = cartTotal + shipping;

  if (items.length === 0) {
    return (
      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '400px' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🛒</div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px' }}>Your cart is empty</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.7 }}>
            Browse our collection and find the perfect T-shirt for you.
          </p>
          <Link
            href="/products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              borderRadius: '100px',
              background: 'var(--navy)',
              color: '#fff',
              fontWeight: '700',
              textDecoration: 'none',
              fontSize: '0.95rem',
              boxShadow: '0 4px 16px rgba(15,37,51,0.15)',
            }}
          >
            Shop T-Shirts →
          </Link>
        </div>
      </main>
    );
  }

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
            Your Cart
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
            {cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '32px', alignItems: 'start' }} className="cart-layout">

          {/* Cart Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {items.map((item) => (
              <div
                key={`${item.productId}-${item.size}-${item.color}`}
                style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '20px',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {/* Image */}
                <Link href={`/products/${item.slug}`} style={{ flexShrink: 0 }}>
                  <div style={{
                    width: '110px',
                    height: '130px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    background: 'var(--bg-soft)',
                    position: 'relative',
                  }}>
                    <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                </Link>

                {/* Info */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <Link href={`/products/${item.slug}`} style={{ textDecoration: 'none' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '6px' }}>
                        {item.name}
                      </h3>
                    </Link>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                        padding: '3px 10px', borderRadius: '100px',
                        background: 'var(--accent-soft)', border: '1px solid rgba(74, 158, 186, 0.25)',
                        fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent)',
                      }}>
                        Size: {item.size}
                      </span>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                        padding: '3px 10px', borderRadius: '100px',
                        background: 'var(--bg-soft)', border: '1px solid var(--border)',
                        fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)',
                      }}>
                        {item.color}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                    {/* Quantity */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
                      <button
                        onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity - 1)}
                        style={{ width: '36px', height: '36px', background: 'var(--bg-soft)', border: 'none', color: 'var(--text-primary)', fontSize: '1rem', cursor: 'pointer' }}
                      >−</button>
                      <span style={{ minWidth: '40px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity + 1)}
                        style={{ width: '36px', height: '36px', background: 'var(--bg-soft)', border: 'none', color: 'var(--text-primary)', fontSize: '1rem', cursor: 'pointer' }}
                      >+</button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <span style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--accent)' }}>
                        Rs. {(item.price * item.quantity).toLocaleString()}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.productId, item.size, item.color)}
                        style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '600', transition: 'color 0.2s ease' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#ef4444')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                padding: '12px 0',
                transition: 'color 0.2s ease',
              }}
            >
              ← Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '24px',
            padding: '28px',
            position: 'sticky',
            top: '90px',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '24px' }}>
              Order Summary
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
              {/* Items */}
              {items.map(item => (
                <div key={`${item.productId}-${item.size}-${item.color}`} style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', flex: 1 }}>
                    {item.name} ×{item.quantity}
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', flexShrink: 0 }}>
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Subtotal</span>
                <span style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-primary)' }}>Rs. {cartTotal.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Shipping</span>
                <span style={{ fontSize: '0.875rem', fontWeight: '600', color: shipping === 0 ? '#22c55e' : 'var(--text-primary)' }}>
                  {shipping === 0 ? 'Free 🎉' : `Rs. ${shipping}`}
                </span>
              </div>
              {cartTotal < 3000 && (
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', background: 'var(--accent-soft)', border: '1px solid rgba(74, 158, 186, 0.25)', padding: '8px 12px', borderRadius: '10px' }}>
                  Add Rs. {(3000 - cartTotal).toLocaleString()} more for free shipping!
                </p>
              )}
            </div>

            <div style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '16px 0', borderTop: '1px solid var(--border)',
              marginBottom: '20px',
            }}>
              <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>Total</span>
              <span style={{ fontSize: '1.3rem', fontWeight: '900', color: 'var(--accent)' }}>Rs. {total.toLocaleString()}</span>
            </div>

            {/* COD badge */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 14px', borderRadius: '12px',
              background: 'var(--accent-soft)', border: '1px solid rgba(74, 158, 186, 0.25)',
              marginBottom: '16px',
            }}>
              <span style={{ fontSize: '1rem' }}>💵</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--accent)' }}>Cash on Delivery available</span>
            </div>

            <Link
              href="/checkout"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                padding: '15px',
                borderRadius: '14px',
                background: 'var(--navy)',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: '800',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(15,37,51,0.1)',
                transition: 'all 0.25s',
              }}
              className="cart-checkout-btn"
            >
              Proceed to Checkout →
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .cart-checkout-btn:hover { background: var(--accent) !important; }
        @media (max-width: 900px) {
          .cart-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}